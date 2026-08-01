/**
 * GitHub Copilot CLI provider.
 *
 * This is the supported replacement for the retired GitHub Models inference
 * API. In GitHub Actions it authenticates with the short-lived GITHUB_TOKEN
 * and the `copilot-requests: write` workflow permission.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { stripVTControlCharacters } from "node:util";
import type { LlmProvider } from "./types.ts";

type CopilotRunner = (args: string[], env: NodeJS.ProcessEnv) => Promise<string>;

interface CopilotJsonEvent {
  type?: unknown;
  data?: { content?: unknown };
}

const EXCLUDED_TOOLS = [
  "bash",
  "list_bash",
  "read_bash",
  "stop_bash",
  "write_bash",
  "apply_patch",
  "create",
  "edit",
  "view",
  "list_agents",
  "read_agent",
  "task",
  "write_agent",
  "ask_user",
  "glob",
  "grep",
  "skill",
  "web_fetch",
].join(",");

function runCopilot(args: string[], env: NodeJS.ProcessEnv): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn("copilot", args, { env, stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const maxBuffer = 2_000_000;
    const timer = setTimeout(() => {
      child.kill("SIGTERM");
      reject(new Error("GitHub Copilot CLI timed out after 5 minutes"));
    }, 5 * 60_000);

    child.stdout.on("data", (chunk: Buffer) => {
      stdout += chunk.toString("utf-8");
      if (stdout.length > maxBuffer) child.kill("SIGTERM");
    });
    child.stderr.on("data", (chunk: Buffer) => {
      stderr += chunk.toString("utf-8");
      if (stderr.length > maxBuffer) child.kill("SIGTERM");
    });
    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (stdout.length > maxBuffer || stderr.length > maxBuffer) {
        reject(new Error("GitHub Copilot CLI output exceeded the safety limit"));
      } else if (code !== 0) {
        reject(new Error(`GitHub Copilot CLI exited ${code}: ${stderr.trim().slice(-2_000)}`));
      } else if (!stdout.trim()) {
        reject(new Error("Unexpected empty response from github-copilot-cli"));
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

/** Extract the raw Markdown response from Copilot CLI's JSONL output. */
export function extractCopilotResponse(output: string): string {
  let response = "";

  for (const line of output.split("\n")) {
    if (!line.trim()) continue;

    let event: CopilotJsonEvent;
    try {
      event = JSON.parse(line) as CopilotJsonEvent;
    } catch {
      throw new Error("GitHub Copilot CLI returned invalid JSONL output");
    }

    if (event.type === "assistant.message" && typeof event.data?.content === "string") {
      response = event.data.content;
    }
  }

  if (!response.trim()) throw new Error("GitHub Copilot CLI JSONL output contained no assistant response");
  return response;
}

export class GitHubCopilotCliProvider implements LlmProvider {
  readonly name = "github-copilot-cli";
  private readonly model: string;
  private readonly maxAiCredits: string;
  private readonly runner: CopilotRunner;

  constructor(opts?: { model?: string; maxAiCredits?: string; runner?: CopilotRunner }) {
    this.model = opts?.model ?? process.env["GITHUB_COPILOT_CLI_MODEL"] ?? "auto";
    this.maxAiCredits = opts?.maxAiCredits ?? process.env["COPILOT_MAX_AI_CREDITS"] ?? "30";
    this.runner = opts?.runner ?? runCopilot;
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const copilotHome = fs.mkdtempSync(path.join(os.tmpdir(), "agents-radar-copilot-"));
    const boundedPrompt =
      `Answer the following request directly. Do not use tools or inspect the repository. ` +
      `Return clean GitHub-Flavored Markdown source. Never use ANSI escapes or ASCII/Unicode box-drawing tables. ` +
      `Keep the response within approximately ${maxTokens} tokens.\n\n${prompt}`;
    const args = [
      "--prompt",
      boundedPrompt,
      "--silent",
      "--stream=off",
      "--output-format=json",
      "--no-color",
      `--model=${this.model}`,
      `--max-ai-credits=${this.maxAiCredits}`,
      "--no-ask-user",
      "--no-auto-update",
      "--no-custom-instructions",
      "--no-remote",
      "--no-remote-export",
      "--disable-builtin-mcps",
      `--excluded-tools=${EXCLUDED_TOOLS}`,
      "--log-level=error",
    ];

    try {
      const output = await this.runner(args, {
        ...process.env,
        COPILOT_HOME: copilotHome,
        COPILOT_AUTO_UPDATE: "false",
        NO_COLOR: "1",
        CLICOLOR: "0",
        FORCE_COLOR: "0",
        TERM: "dumb",
        GITHUB_COPILOT_PROMPT_MODE_EXTENSIONS: "false",
        GITHUB_COPILOT_PROMPT_MODE_REPO_HOOKS: "false",
        GITHUB_COPILOT_PROMPT_MODE_WORKSPACE_MCP: "false",
      });
      const sanitized = stripVTControlCharacters(extractCopilotResponse(output)).trim();
      if (!sanitized) throw new Error("Unexpected empty response from github-copilot-cli");
      return sanitized;
    } finally {
      fs.rmSync(copilotHome, { recursive: true, force: true });
    }
  }
}
