/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot-cli" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildInfraPrompt,
  buildComparisonPrompt,
  buildInfraComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "./prompts.ts";
import { buildTrendingPrompt, buildHighlightsPrompt, type ReportHighlights } from "./prompts-data.ts";
import { callLlm, parseLlmJson, saveFile, autoGenFooter, LLM_TOKENS_TRENDING } from "./report.ts";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  buildInfraReportContent,
} from "./report-builders.ts";
import {
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
  saveLabsReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadRssState, saveRssState, fetchRssData, type RssData, type RssState } from "./rss.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr } from "./date.ts";
import {
  type Lang,
  MSG,
  ISSUE_LABELS,
  CLI_ISSUE_TITLE,
  OPENCLAW_ISSUE_TITLE,
  INFRA_ISSUE_TITLE,
} from "./i18n.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
  infraRepos: INFRA_REPOS,
  trendingQueries: TRENDING_QUERIES,
  arxivCategories: ARXIV_CATEGORIES,
  rssFeeds: RSS_FEEDS,
} = loadConfig();

function configuredReportLanguages(): Lang[] {
  const requested = (process.env["REPORT_LANGUAGES"] ?? "zh,en")
    .split(",")
    .map((value) => value.trim())
    .filter((value): value is Lang => value === "zh" || value === "en");
  const unique = [...new Set(requested)];
  return unique.length > 0 ? unique : ["zh", "en"];
}

const REPORT_LANGUAGES = configuredReportLanguages();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
  rssState: RssState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
  rssData: RssData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS, ...INFRA_REPOS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, hf, devto, lobsters, rss`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
    rssData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData(TRENDING_QUERIES).catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData(ARXIV_CATEGORIES).catch(
      (): ArxivData => ({ papers: [], categories: ARXIV_CATEGORIES, fetchSuccess: false }),
    ),
    fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false })),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
    fetchRssData(RSS_FEEDS, rssState).catch(
      (): RssData => ({
        items: [],
        sources: RSS_FEEDS.map((feed) => ({
          id: feed.id,
          name: feed.name,
          url: feed.url,
          totalParsed: 0,
          newItems: 0,
          fetchSuccess: false,
        })),
        fetchSuccess: false,
      }),
    ),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
    rssData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  fetchedInfra: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  infraDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary] =
    await Promise.all([
      Promise.all(
        fetchedCli.map((f) =>
          summarizeRepo(
            f,
            buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      summarizeRepo(
        fetchedOpenclaw,
        buildPeerPrompt(
          fetchedOpenclaw.cfg,
          fetchedOpenclaw.issues,
          fetchedOpenclaw.prs,
          fetchedOpenclaw.releases,
          dateStr,
          30,
          20,
          lang,
        ),
        noActivity,
        fail,
      ).then((d) => d.summary),
      summarize(
        "claude-code-skills",
        buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
        MSG.skillsFailed[lang],
      ),
      Promise.all(
        fetchedPeers.map((f) =>
          summarizeRepo(
            f,
            buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      Promise.all(
        fetchedInfra.map((f) =>
          summarizeRepo(
            f,
            buildInfraPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      (async () => {
        const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
        if (!hasData) {
          return MSG.trendingNoData[lang];
        }
        return summarize(
          "trending",
          buildTrendingPrompt(trendingData, dateStr, lang),
          MSG.trendingFailed[lang],
          LLM_TOKENS_TRENDING,
        );
      })(),
    ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(
    `[${now.toISOString()}] Starting digest | provider: ${providerName} | languages: ${REPORT_LANGUAGES.join(",")}`,
  );

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const rssState = loadRssState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
    rssData,
  } = await fetchAllData(since, webState, rssState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const infraIds = new Set(INFRA_REPOS.map((r) => r.id));
  const fetchedCli = fetched.filter(
    (f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id) && !infraIds.has(f.cfg.id),
  );
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));
  const fetchedInfra = fetched.filter((f) => infraIds.has(f.cfg.id));

  // 2. Generate per-repo LLM summaries for the configured languages.
  console.log(`  Generating summaries: ${REPORT_LANGUAGES.join(", ")}...`);
  type GeneratedSummaries = Awaited<ReturnType<typeof generateSummaries>>;
  const summariesByLang: Partial<Record<Lang, GeneratedSummaries>> = {};
  const summaryEntries = await Promise.all(
    REPORT_LANGUAGES.map(async (lang) => {
      const summaries = await generateSummaries(
        fetchedCli,
        fetchedOpenclaw,
        skillsData,
        fetchedPeers,
        fetchedInfra,
        trendingData,
        dateStr,
        lang,
      );
      return [lang, summaries] as const;
    }),
  );
  for (const [lang, summaries] of summaryEntries) summariesByLang[lang] = summaries;

  // 3. Generate cross-repo comparisons for the configured languages.
  console.log(`  Calling LLM for comparative analyses: ${REPORT_LANGUAGES.join(", ")}...`);

  const makeOpenclawDigest = (lang: Lang): RepoDigest => ({
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: summariesByLang[lang]!.openclawSummary,
  });

  const comparisonByLang: Partial<Record<Lang, string>> = {};
  const peersComparisonByLang: Partial<Record<Lang, string>> = {};
  const infraComparisonByLang: Partial<Record<Lang, string>> = {};
  await Promise.all(
    REPORT_LANGUAGES.map(async (lang) => {
      const summaries = summariesByLang[lang]!;
      const [comparison, peersComparison, infraComparison] = await Promise.all([
        summarize(
          "cli-comparison",
          buildComparisonPrompt(summaries.cliDigests, dateStr, lang),
          MSG.summaryFailed[lang],
        ),
        summarize(
          "agents-comparison",
          buildPeersComparisonPrompt(makeOpenclawDigest(lang), summaries.peerDigests, dateStr, lang),
          MSG.summaryFailed[lang],
        ),
        summarize(
          "infra-comparison",
          buildInfraComparisonPrompt(summaries.infraDigests, dateStr, lang),
          MSG.summaryFailed[lang],
        ),
      ]);
      comparisonByLang[lang] = comparison;
      peersComparisonByLang[lang] = peersComparison;
      infraComparisonByLang[lang] = infraComparison;
    }),
  );

  // 4. Build + save all reports.
  const cliContent: Partial<Record<Lang, string>> = {};
  const openclawContent: Partial<Record<Lang, string>> = {};
  const infraContent: Partial<Record<Lang, string>> = {};

  for (const lang of REPORT_LANGUAGES) {
    const s = summariesByLang[lang]!;
    const ft = autoGenFooter(lang);
    const suffix = lang === "en" ? "-en" : "";

    cliContent[lang] = buildCliReportContent(
      s.cliDigests,
      s.skillsSummary,
      comparisonByLang[lang]!,
      utcStr,
      dateStr,
      ft,
      CLAUDE_SKILLS_REPO,
      lang,
    );
    openclawContent[lang] = buildOpenclawReportContent(
      fetchedOpenclaw,
      s.peerDigests,
      s.openclawSummary,
      peersComparisonByLang[lang]!,
      utcStr,
      dateStr,
      ft,
      OPENCLAW,
      OPENCLAW_PEERS,
      lang,
    );

    infraContent[lang] = buildInfraReportContent(
      s.infraDigests,
      infraComparisonByLang[lang]!,
      utcStr,
      dateStr,
      ft,
      lang,
    );

    console.log(`  Saved ${saveFile(cliContent[lang]!, dateStr, `ai-cli${suffix}.md`)}`);
    console.log(`  Saved ${saveFile(openclawContent[lang]!, dateStr, `ai-agents${suffix}.md`)}`);
    console.log(`  Saved ${saveFile(infraContent[lang]!, dateStr, `ai-infra${suffix}.md`)}`);
  }

  // Web report: the zh pass persists shared state; other languages only render.
  for (const lang of REPORT_LANGUAGES) {
    await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, autoGenFooter(lang), lang);
  }

  const dataReportTasks: Promise<void>[] = [];
  for (const lang of REPORT_LANGUAGES) {
    const footer = autoGenFooter(lang);
    dataReportTasks.push(
      saveTrendingReport(
        trendingData,
        summariesByLang[lang]!.trendingSummary,
        utcStr,
        dateStr,
        digestRepo,
        footer,
        lang,
      ),
      saveHnReport(hnData, utcStr, dateStr, digestRepo, footer, lang),
      savePhReport(phData, utcStr, dateStr, digestRepo, footer, lang),
      saveArxivReport(arxivData, utcStr, dateStr, digestRepo, footer, lang),
      saveHfReport(hfData, utcStr, dateStr, digestRepo, footer, lang),
      saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, footer, lang),
      saveLabsReport(rssData, utcStr, dateStr, digestRepo, footer, lang),
    );
  }
  await Promise.all(dataReportTasks);
  saveRssState(rssState);
  console.log("  [rss] State saved.");

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const reportsByLang: Record<Lang, Record<string, string>> = { zh: {}, en: {} };
  for (const lang of REPORT_LANGUAGES) {
    reportsByLang[lang]["ai-cli"] = cliContent[lang]!;
    reportsByLang[lang]["ai-agents"] = openclawContent[lang]!;
    reportsByLang[lang]["ai-infra"] = infraContent[lang]!;
  }
  for (const [id, zhFile, enFile] of [
    ["ai-trending", "ai-trending.md", "ai-trending-en.md"],
    ["ai-web", "ai-web.md", "ai-web-en.md"],
    ["ai-hn", "ai-hn.md", "ai-hn-en.md"],
    ["ai-ph", "ai-ph.md", "ai-ph-en.md"],
    ["ai-arxiv", "ai-arxiv.md", "ai-arxiv-en.md"],
    ["ai-hf", "ai-hf.md", "ai-hf-en.md"],
    ["ai-community", "ai-community.md", "ai-community-en.md"],
    ["ai-labs", "ai-labs.md", "ai-labs-en.md"],
  ] as const) {
    if (REPORT_LANGUAGES.includes("zh")) {
      const zh = readReport(zhFile);
      if (zh) reportsByLang.zh[id] = zh;
    }
    if (REPORT_LANGUAGES.includes("en")) {
      const en = readReport(enFile);
      if (en) reportsByLang.en[id] = en;
    }
  }

  console.log("  Generating highlights for Telegram...");
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  // Generate + parse one language, retrying once. The LLM occasionally emits
  // slightly malformed JSON that repairJson can't fix (seen 2026-07-13: zh
  // failed with "Expected ',' or ']' after array element"); a fresh generation
  // usually returns valid JSON. Each language runs independently so a failure
  // in one never wipes the other.
  const genHighlights = async (reports: Record<string, string>, lang: Lang): Promise<ReportHighlights> => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return parseLlmJson<ReportHighlights>(await callLlm(buildHighlightsPrompt(reports, lang), 2048));
      } catch (err) {
        const tag = attempt < 2 ? "retrying" : "giving up";
        console.error(`  [highlights] ${lang} attempt ${attempt} failed (${tag}): ${err}`);
      }
    }
    return {};
  };
  const highlightEntries = await Promise.all(
    REPORT_LANGUAGES.map(async (lang) => [lang, await genHighlights(reportsByLang[lang], lang)] as const),
  );
  for (const [lang, result] of highlightEntries) highlights[lang] = result;

  // If one language failed (generation or parse) but the other succeeded,
  // backfill the empty one from the other so notifications never render with
  // zero highlights. Seen 2026-07-13: zh failed intermittently while en was
  // fine, leaving Telegram/Feishu with only section headers and no bullets.
  const zhEmpty = Object.keys(highlights.zh).length === 0;
  const enEmpty = Object.keys(highlights.en).length === 0;
  if (zhEmpty && !enEmpty) {
    console.warn("  [highlights] zh empty — backfilling from en");
    highlights.zh = highlights.en;
  } else if (enEmpty && !zhEmpty) {
    console.warn("  [highlights] en empty — backfilling from zh");
    highlights.en = highlights.zh;
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create GitHub issues for core reports.
  if (digestRepo) {
    for (const lang of REPORT_LANGUAGES) {
      const cliUrl = await createGitHubIssue(
        CLI_ISSUE_TITLE(dateStr, lang),
        cliContent[lang]!,
        ISSUE_LABELS.cli[lang],
      );
      console.log(`  Created CLI issue (${lang}): ${cliUrl}`);

      const ocUrl = await createGitHubIssue(
        OPENCLAW_ISSUE_TITLE(dateStr, lang),
        openclawContent[lang]!,
        ISSUE_LABELS.openclaw[lang],
      );
      console.log(`  Created OpenClaw issue (${lang}): ${ocUrl}`);

      const infraUrl = await createGitHubIssue(
        INFRA_ISSUE_TITLE(dateStr, lang),
        infraContent[lang]!,
        ISSUE_LABELS.infra[lang],
      );
      console.log(`  Created infra issue (${lang}): ${infraUrl}`);
    }
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
