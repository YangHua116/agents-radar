/**
 * Generic RSS/Atom ingestion for AI lab and research-team updates.
 *
 * State is persisted in digests/rss-state.json so daily runs only report new
 * entries. On the first run, each feed contributes its latest configured items.
 */

import fs from "node:fs";
import path from "node:path";
import type { RssFeedConfig } from "./config.ts";

export interface RssItem {
  id: string;
  title: string;
  url: string;
  published: string;
  summary: string;
  sourceId: string;
  sourceName: string;
  tags: string[];
}

export interface RssSourceStat {
  id: string;
  name: string;
  url: string;
  totalParsed: number;
  newItems: number;
  fetchSuccess: boolean;
}

export interface RssData {
  items: RssItem[];
  sources: RssSourceStat[];
  fetchSuccess: boolean;
}

export interface RssState {
  lastChecked: string;
  /** feed-id:item-id -> last observed ISO timestamp */
  seenIds: Record<string, string>;
}

const STATE_FILE = path.join("digests", "rss-state.json");
const FETCH_TIMEOUT_MS = 15_000;
const MAX_FEED_BYTES = 3_000_000;
const MAX_SUMMARY_LENGTH = 600;
const MAX_STATE_ENTRIES = 5_000;

function emptyRssState(): RssState {
  return { lastChecked: "", seenIds: {} };
}

export function loadRssState(): RssState {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as RssState;
  } catch {
    return emptyRssState();
  }
}

export function saveRssState(state: RssState): void {
  const entries = Object.entries(state.seenIds)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .slice(0, MAX_STATE_ENTRIES);
  state.seenIds = Object.fromEntries(entries);
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n", "utf-8");
}

function unescapeXml(value: string): string {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal: string) => String.fromCodePoint(parseInt(decimal, 10)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");
}

function cleanText(value: string, maxLength = Number.POSITIVE_INFINITY): string {
  return unescapeXml(value)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function extractTag(xml: string, tag: string): string {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = xml.match(new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function extractHref(xml: string): string {
  const links = xml.match(/<link\b[^>]*\/?>/gi) ?? [];
  const preferred = links.find((tag) => /rel=["']alternate["']/i.test(tag)) ?? links[0];
  return preferred?.match(/href=["']([^"']+)["']/i)?.[1] ?? "";
}

function toIsoDate(value: string): string {
  const timestamp = Date.parse(cleanText(value));
  return Number.isNaN(timestamp) ? "" : new Date(timestamp).toISOString();
}

/** Parse both RSS 2.0 <item> and Atom <entry> blocks. */
export function parseRssFeed(xml: string, feed: RssFeedConfig): RssItem[] {
  const blocks = xml.match(/<(?:item|entry)\b[\s\S]*?<\/(?:item|entry)>/gi) ?? [];
  const seen = new Set<string>();
  const items: RssItem[] = [];

  for (const block of blocks) {
    const title = cleanText(extractTag(block, "title"));
    const rssLink = cleanText(extractTag(block, "link"));
    const atomLink = unescapeXml(extractHref(block));
    const guid = cleanText(extractTag(block, "guid"));
    const atomId = cleanText(extractTag(block, "id"));
    const url = atomLink || rssLink || guid || atomId;
    const id = guid || atomId || url || title;
    if (!title || !url || !id || seen.has(id)) continue;
    seen.add(id);

    const published = toIsoDate(
      extractTag(block, "pubDate") ||
        extractTag(block, "published") ||
        extractTag(block, "updated") ||
        extractTag(block, "dc:date"),
    );
    const summary = cleanText(
      extractTag(block, "description") ||
        extractTag(block, "summary") ||
        extractTag(block, "content:encoded") ||
        extractTag(block, "content"),
      MAX_SUMMARY_LENGTH,
    );

    items.push({
      id,
      title,
      url,
      published,
      summary,
      sourceId: feed.id,
      sourceName: feed.name,
      tags: feed.tags,
    });
  }

  return items.sort((a, b) => {
    const aTime = Date.parse(a.published) || 0;
    const bTime = Date.parse(b.published) || 0;
    return bTime - aTime;
  });
}

async function fetchFeedXml(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; agents-radar/1.0)",
        Accept: "application/rss+xml,application/atom+xml,application/xml,text/xml,*/*",
      },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const contentLength = Number(response.headers.get("content-length") ?? "0");
    if (contentLength > MAX_FEED_BYTES) throw new Error(`feed exceeds ${MAX_FEED_BYTES} bytes`);
    const xml = await response.text();
    if (xml.length > MAX_FEED_BYTES) throw new Error(`feed exceeds ${MAX_FEED_BYTES} bytes`);
    return xml;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchRssData(feeds: RssFeedConfig[], state: RssState): Promise<RssData> {
  const observedAt = new Date().toISOString();

  const results = await Promise.all(
    feeds.map(async (feed) => {
      try {
        const items = parseRssFeed(await fetchFeedXml(feed.url), feed);
        const feedPrefix = `${feed.id}:`;
        const isFirstRun = !Object.keys(state.seenIds).some((key) => key.startsWith(feedPrefix));
        const fresh = items
          .filter((item) => isFirstRun || !state.seenIds[`${feedPrefix}${item.id}`])
          .slice(0, feed.maxItems);

        for (const item of items) state.seenIds[`${feedPrefix}${item.id}`] = observedAt;
        console.log(
          `  [rss/${feed.id}] ${items.length} parsed, ${fresh.length} ${isFirstRun ? "initial" : "new"}`,
        );
        return {
          items: fresh,
          stat: {
            id: feed.id,
            name: feed.name,
            url: feed.url,
            totalParsed: items.length,
            newItems: fresh.length,
            fetchSuccess: true,
          } satisfies RssSourceStat,
        };
      } catch (error) {
        console.error(`  [rss/${feed.id}] fetch failed: ${error}`);
        return {
          items: [] as RssItem[],
          stat: {
            id: feed.id,
            name: feed.name,
            url: feed.url,
            totalParsed: 0,
            newItems: 0,
            fetchSuccess: false,
          } satisfies RssSourceStat,
        };
      }
    }),
  );

  state.lastChecked = observedAt;
  const items = results
    .flatMap((result) => result.items)
    .sort((a, b) => (Date.parse(b.published) || 0) - (Date.parse(a.published) || 0));
  const sources = results.map((result) => result.stat);
  return { items, sources, fetchSuccess: sources.some((source) => source.fetchSuccess) };
}
