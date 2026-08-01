/**
 * Loads and validates agents-radar configuration from config.yml.
 * Falls back to built-in defaults if the file is missing or a section is absent.
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type { RepoConfig } from "./github.ts";

// ---------------------------------------------------------------------------
// Schema types
// ---------------------------------------------------------------------------

interface RawRepoEntry {
  id: string;
  repo: string;
  name: string;
  paginated?: boolean;
}

interface RawTrendingQuery {
  query: string;
  label: string;
}

interface RawRssFeed {
  id: string;
  name: string;
  url: string;
  tags?: string[];
  max_items?: number;
}

interface RawConfig {
  cli_repos?: RawRepoEntry[];
  skills_repo?: string;
  openclaw?: RawRepoEntry;
  openclaw_peers?: RawRepoEntry[];
  infra_repos?: RawRepoEntry[];
  trending_queries?: RawTrendingQuery[];
  arxiv_categories?: string[];
  rss_feeds?: RawRssFeed[];
}

export interface TrendingQueryConfig {
  query: string;
  label: string;
}

export interface RssFeedConfig {
  id: string;
  name: string;
  url: string;
  tags: string[];
  maxItems: number;
}

export interface RadarConfig {
  cliRepos: RepoConfig[];
  skillsRepo: string;
  openclaw: RepoConfig;
  openclawPeers: RepoConfig[];
  infraRepos: RepoConfig[];
  trendingQueries: TrendingQueryConfig[];
  arxivCategories: string[];
  rssFeeds: RssFeedConfig[];
}

// ---------------------------------------------------------------------------
// Defaults (mirrors the original hard-coded values)
// ---------------------------------------------------------------------------

const DEFAULT_CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" },
  { id: "codex", repo: "openai/codex", name: "OpenAI Codex" },
  { id: "gemini-cli", repo: "google-gemini/gemini-cli", name: "Gemini CLI" },
  { id: "copilot-cli", repo: "github/copilot-cli", name: "GitHub Copilot CLI" },
  { id: "kimi-cli", repo: "MoonshotAI/kimi-cli", name: "Kimi Code CLI" },
  { id: "opencode", repo: "anomalyco/opencode", name: "OpenCode" },
  { id: "qwen-code", repo: "QwenLM/qwen-code", name: "Qwen Code" },
];

const DEFAULT_SKILLS_REPO = "anthropics/skills";

const DEFAULT_OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

const DEFAULT_OPENCLAW_PEERS: RepoConfig[] = [
  { id: "nanobot", repo: "HKUDS/nanobot", name: "NanoBot", paginated: true },
  { id: "hermes-agent", repo: "nousresearch/hermes-agent", name: "Hermes Agent" },
  { id: "picoclaw", repo: "sipeed/picoclaw", name: "PicoClaw", paginated: true },
  { id: "nanoclaw", repo: "qwibitai/nanoclaw", name: "NanoClaw" },
  { id: "nullclaw", repo: "nullclaw/nullclaw", name: "NullClaw" },
  { id: "ironclaw", repo: "nearai/ironclaw", name: "IronClaw" },
  { id: "lobsterai", repo: "netease-youdao/LobsterAI", name: "LobsterAI" },
  { id: "copaw", repo: "agentscope-ai/CoPaw", name: "CoPaw" },
  { id: "moltis", repo: "moltis-org/moltis", name: "Moltis" },
  { id: "zeptoclaw", repo: "qhkm/zeptoclaw", name: "ZeptoClaw" },
  { id: "easyclaw", repo: "gaoyangz77/easyclaw", name: "EasyClaw" },
  { id: "zeroclaw", repo: "zeroclaw-labs/zeroclaw", name: "ZeroClaw" },
];

// Inference engines, gateways and fine-tuning frameworks — the layer the CLI
// agents run on top of. High daily volume, so most are paginated.
const DEFAULT_INFRA_REPOS: RepoConfig[] = [
  { id: "vllm", repo: "vllm-project/vllm", name: "vLLM", paginated: true },
  { id: "sglang", repo: "sgl-project/sglang", name: "SGLang", paginated: true },
  { id: "llama-cpp", repo: "ggml-org/llama.cpp", name: "llama.cpp", paginated: true },
  { id: "ollama", repo: "ollama/ollama", name: "Ollama" },
  { id: "litellm", repo: "BerriAI/litellm", name: "LiteLLM", paginated: true },
  { id: "unsloth", repo: "unslothai/unsloth", name: "Unsloth", paginated: true },
];

const DEFAULT_TRENDING_QUERIES: TrendingQueryConfig[] = [
  { query: "topic:llm", label: "llm" },
  { query: "topic:ai-agent", label: "ai-agent" },
  { query: "topic:rag", label: "rag" },
  { query: "topic:vector-database", label: "vector-db" },
  { query: "topic:large-language-model", label: "llm-model" },
  { query: "topic:machine-learning", label: "ml" },
];

const DEFAULT_ARXIV_CATEGORIES = ["cs.AI", "cs.CL", "cs.LG"];
const DEFAULT_RSS_FEEDS: RssFeedConfig[] = [];

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export function toRepoConfig(e: RawRepoEntry): RepoConfig {
  return { id: e.id, repo: e.repo, name: e.name, ...(e.paginated ? { paginated: true } : {}) };
}

function toRssFeedConfig(feed: RawRssFeed): RssFeedConfig {
  return {
    id: feed.id.trim(),
    name: feed.name.trim(),
    url: feed.url.trim(),
    tags: Array.isArray(feed.tags) ? feed.tags.map((tag) => tag.trim()).filter(Boolean) : [],
    maxItems:
      typeof feed.max_items === "number" && Number.isInteger(feed.max_items) && feed.max_items > 0
        ? Math.min(feed.max_items, 20)
        : 5,
  };
}

export function loadConfig(configPath = "config.yml"): RadarConfig {
  const resolved = path.resolve(configPath);

  if (!fs.existsSync(resolved)) {
    console.log(`[config] ${configPath} not found — using built-in defaults.`);
    return {
      cliRepos: DEFAULT_CLI_REPOS,
      skillsRepo: DEFAULT_SKILLS_REPO,
      openclaw: DEFAULT_OPENCLAW,
      openclawPeers: DEFAULT_OPENCLAW_PEERS,
      infraRepos: DEFAULT_INFRA_REPOS,
      trendingQueries: DEFAULT_TRENDING_QUERIES,
      arxivCategories: DEFAULT_ARXIV_CATEGORIES,
      rssFeeds: DEFAULT_RSS_FEEDS,
    };
  }

  const raw = yaml.load(fs.readFileSync(resolved, "utf-8")) as RawConfig;

  const cliRepos =
    Array.isArray(raw?.cli_repos) && raw.cli_repos.length > 0
      ? raw.cli_repos.map(toRepoConfig)
      : DEFAULT_CLI_REPOS;

  const skillsRepo =
    typeof raw?.skills_repo === "string" && raw.skills_repo.trim()
      ? raw.skills_repo.trim()
      : DEFAULT_SKILLS_REPO;

  const openclaw = raw?.openclaw?.id && raw.openclaw.repo ? toRepoConfig(raw.openclaw) : DEFAULT_OPENCLAW;

  const openclawPeers =
    Array.isArray(raw?.openclaw_peers) && raw.openclaw_peers.length > 0
      ? raw.openclaw_peers.map(toRepoConfig)
      : DEFAULT_OPENCLAW_PEERS;

  const infraRepos =
    Array.isArray(raw?.infra_repos) && raw.infra_repos.length > 0
      ? raw.infra_repos.map(toRepoConfig)
      : DEFAULT_INFRA_REPOS;

  const trendingQueries =
    Array.isArray(raw?.trending_queries) && raw.trending_queries.length > 0
      ? raw.trending_queries
          .filter((entry) => typeof entry?.query === "string" && typeof entry?.label === "string")
          .map((entry) => ({ query: entry.query.trim(), label: entry.label.trim() }))
          .filter((entry) => entry.query && entry.label)
      : DEFAULT_TRENDING_QUERIES;

  const arxivCategories =
    Array.isArray(raw?.arxiv_categories) && raw.arxiv_categories.length > 0
      ? raw.arxiv_categories
          .filter((category): category is string => typeof category === "string")
          .map((category) => category.trim())
          .filter(Boolean)
      : DEFAULT_ARXIV_CATEGORIES;

  const rssFeeds =
    Array.isArray(raw?.rss_feeds) && raw.rss_feeds.length > 0
      ? raw.rss_feeds
          .filter(
            (feed) =>
              typeof feed?.id === "string" &&
              typeof feed?.name === "string" &&
              typeof feed?.url === "string" &&
              /^https?:\/\//.test(feed.url),
          )
          .map(toRssFeedConfig)
      : DEFAULT_RSS_FEEDS;

  console.log(
    `[config] Loaded from ${configPath}: ` +
      `${cliRepos.length} CLI repos, ${openclawPeers.length} OpenClaw peers, ${infraRepos.length} infra repos`,
  );

  console.log(
    `[config] Discovery: ${trendingQueries.length} GitHub queries, ` +
      `${arxivCategories.length} ArXiv categories, ${rssFeeds.length} RSS feeds`,
  );

  return {
    cliRepos,
    skillsRepo,
    openclaw,
    openclawPeers,
    infraRepos,
    trendingQueries,
    arxivCategories,
    rssFeeds,
  };
}
