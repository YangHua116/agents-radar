import { describe, expect, it } from "vitest";
import type { RssFeedConfig } from "../config.ts";
import { parseRssFeed } from "../rss.ts";

const feed: RssFeedConfig = {
  id: "test-lab",
  name: "Test Lab",
  url: "https://example.com/feed.xml",
  tags: ["agent", "evaluation"],
  maxItems: 5,
};

describe("parseRssFeed", () => {
  it("parses RSS 2.0 entries and falls back to guid for the link", () => {
    const xml = `
      <rss><channel><item>
        <title><![CDATA[Agent &amp; Evaluation Update]]></title>
        <guid isPermaLink="true">https://example.com/post-1</guid>
        <pubDate>Fri, 31 Jul 2026 08:00:00 GMT</pubDate>
        <description><![CDATA[<p>A new <strong>agent benchmark</strong>.</p>]]></description>
      </item></channel></rss>`;

    const items = parseRssFeed(xml, feed);
    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      title: "Agent & Evaluation Update",
      url: "https://example.com/post-1",
      summary: "A new agent benchmark .",
      sourceName: "Test Lab",
      tags: ["agent", "evaluation"],
    });
    expect(items[0]!.published).toBe("2026-07-31T08:00:00.000Z");
  });

  it("parses Atom entries with alternate links", () => {
    const xml = `
      <feed xmlns="http://www.w3.org/2005/Atom"><entry>
        <id>tag:example.com,2026:2</id>
        <title>Multimodal Research</title>
        <link rel="alternate" href="https://example.com/post-2" />
        <updated>2026-08-01T01:02:03Z</updated>
        <summary>Vision and language progress.</summary>
      </entry></feed>`;

    const items = parseRssFeed(xml, feed);
    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      id: "tag:example.com,2026:2",
      title: "Multimodal Research",
      url: "https://example.com/post-2",
      summary: "Vision and language progress.",
    });
  });

  it("deduplicates entries with the same id", () => {
    const item = `
      <item><title>Duplicate</title><link>https://example.com/dup</link>
      <guid>same-id</guid><pubDate>2026-08-01</pubDate></item>`;
    expect(parseRssFeed(`<rss><channel>${item}${item}</channel></rss>`, feed)).toHaveLength(1);
  });
});
