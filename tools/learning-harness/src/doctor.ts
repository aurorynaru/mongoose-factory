import { exec } from "node:child_process";
import { accessSync, constants, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { BrowserSession } from "./adapters/chatgpt/browser.js";
import type { ChatRole } from "./adapters/types.js";
import { chatAdapter, contextFilePath, openCodeClient, type App } from "./app.js";
import { loadCoordinatorContext } from "./context.js";
import { briefProblems, loadBrief } from "./brief.js";
import { configProblems } from "./config.js";
import { protocolBlock } from "./protocol/prompts.js";
import { controllerAlive } from "./status.js";

type Level = "OK" | "WARN" | "FAIL" | "INFO";

/** Read-only health checks. Never submits a prompt, never changes Mongoose, never starts a run. */
export async function doctor(app: App, opts: { browser: boolean; mcp: boolean }): Promise<boolean> {
  let failed = false;
  const line = (lvl: Level, what: string, detail = "") => {
    if (lvl === "FAIL") failed = true;
    console.log(`${lvl.padEnd(4)}  ${what}${detail ? ` — ${detail}` : ""}`);
  };
  const { config, paths } = app;

  console.log("== Configuration");
  line(app.configFile ? "OK" : "WARN", "config file", app.configFile ?? "none; using built-in defaults (copy harness.config.example.json to harness.config.json)");
  const cp = configProblems(config);
  cp.length ? cp.forEach((p) => line("FAIL", "config", p)) : line("OK", "config safety", "browser profiles separated; endpoints on localhost");
  line(Number(process.versions.node.split(".")[0]) >= 20 ? "OK" : "FAIL", "node", process.versions.node);

  console.log("== Directories");
  for (const [name, p] of [
    ["factoryRoot", paths.factoryRoot],
    ["AGENTS.md", join(paths.factoryRoot, "AGENTS.md")],
    ["experiments/", join(paths.factoryRoot, "experiments")],
    ["evidence/", join(paths.factoryRoot, "evidence")],
    ["opencode.json", join(paths.factoryRoot, "opencode.json")],
  ] as const) {
    line(existsSync(p) ? "OK" : "FAIL", name, p);
  }
  try {
    mkdirSync(paths.dataDir, { recursive: true });
    accessSync(paths.dataDir, constants.W_OK);
    line("OK", "data dir writable", paths.dataDir);
  } catch (e) {
    line("FAIL", "data dir writable", (e as Error).message);
  }
  for (const f of ["coordinator-protocol.md", "specialist-protocol.md", "worker-preamble.md"]) {
    try {
      protocolBlock(paths.protocolDir, f);
      line("OK", `protocol/${f}`);
    } catch (e) {
      line("FAIL", `protocol/${f}`, (e as Error).message);
    }
  }
  const briefs = existsSync(paths.briefsDir) ? readdirSync(paths.briefsDir).filter((f) => f.endsWith(".brief.json")) : [];
  if (!briefs.length) line("INFO", "briefs", "none yet; create one with: harness brief init <EXP-ID>");
  for (const f of briefs) {
    try {
      const b = loadBrief(join(paths.briefsDir, f), paths.briefsDir);
      const probs = briefProblems(b.brief, paths.factoryRoot);
      line(probs.length ? "WARN" : "OK", `brief ${f}`, probs.length ? probs.join(" ") : "ready");
    } catch (e) {
      line("WARN", `brief ${f}`, (e as Error).message.split("\n")[0]);
    }
  }

  console.log("== Coordinator context");
  const ctx = loadCoordinatorContext(contextFilePath(app));
  line(ctx.reviewed ? "OK" : "INFO", "context file", !ctx.exists ? `missing (optional): create it once with: harness context save` : ctx.reviewed ? `reviewed, sent with every kickoff (${ctx.text.length} chars)` : `NOT reviewed, so not sent. Read ${ctx.path}, then: harness context approve`);
  line("INFO", "new coordinator chat per run", config.chats.newCoordinatorPerRun ? "yes" : "no");

  console.log("== Runs");
  const active = app.store.activeRuns();
  if (!active.length) line("OK", "active runs", "none");
  for (const r of active) {
    const c = controllerAlive(app.store, r.id);
    line("INFO", `run ${r.id}`, `${r.experiment_id} ${r.status} state=${r.state}${r.pause_reason ? ` pause=${r.pause_reason}` : ""} controller=${c.alive ? `pid ${c.pid}` : "not running"}`);
  }

  console.log("== OpenCode");
  const cli = await new Promise<string>((res) => exec("opencode --version", { timeout: 20000, windowsHide: true }, (e, out) => res(e ? `error: ${e.message}` : out.trim())));
  line(cli.startsWith("error") ? "FAIL" : "OK", "opencode CLI", cli);
  // opencode.json may reference environment variables ({env:NAME}); the harness-started backend
  // inherits the harness's environment, so they must be set in the shell that runs the harness.
  try {
    const ocText = readFileSync(join(paths.factoryRoot, "opencode.json"), "utf8");
    const names = [...new Set([...ocText.matchAll(/\{env:([A-Za-z_][A-Za-z0-9_]*)\}/g)].map((m) => m[1]))];
    for (const n of names) {
      line(process.env[n] ? "OK" : "FAIL", `env ${n}`, process.env[n] ? "set (referenced by opencode.json)" : `NOT set in this shell, but opencode.json uses {env:${n}}. Set it ($env:${n} = '...'), then: harness backend restart`);
    }
  } catch {
    /* opencode.json missing is reported above */
  }
  const bh = await app.backend.health();
  const others = (bh.otherOpenCodePids as number[] | undefined) ?? [];
  if (bh.healthy) line("OK", `backend ${config.opencode.baseUrl}`, `version ${String(bh.version)}; ${bh.owned ? `harness-owned pid ${String(bh.pid)}` : `NOT harness-owned (port pid ${String(bh.portOwnerPid)})`}`);
  else line(config.opencode.manageBackend ? "INFO" : "FAIL", `backend ${config.opencode.baseUrl}`, config.opencode.manageBackend ? "not running (start/resume will start it; or: harness backend start)" : `unreachable: ${String(bh.error ?? bh.detail ?? "")}`);
  if (bh.healthy && !cli.startsWith("error") && bh.version && String(bh.version) !== cli) line("WARN", "version mismatch", `CLI ${cli} vs server ${String(bh.version)}`);
  if (others.length) {
    line("WARN", "other OpenCode processes", `pids ${others.join(", ")} (not owned; never touched). If one of them has used the Playwright MCP browser, the backend's Mongoose browser may fail to start because ${config.mongooseBrowserProfile} is in use. Close that browser before starting a run.`);
  }
  if (bh.healthy && opts.mcp) {
    try {
      const mcp = await openCodeClient(app).mcpStatus();
      for (const [name, s] of Object.entries(mcp ?? {})) line(s.status === "connected" ? "OK" : "WARN", `MCP ${name}`, `${s.status}${s.error ? ` ${s.error}` : ""}`);
    } catch (e) {
      line("WARN", "MCP status", (e as Error).message);
    }
  }

  console.log("== DeepSeek (optional)");
  if (!config.deepseek.enabled) line("INFO", "deepseek", "disabled (unparseable coordinator replies pause for the operator)");
  else line(process.env[config.deepseek.apiKeyEnv] ? "OK" : "FAIL", "deepseek key", `${config.deepseek.apiKeyEnv} ${process.env[config.deepseek.apiKeyEnv] ? "is set" : "is NOT set"} (no API call made)`);

  console.log("== Browser (ChatGPT)");
  for (const role of ["coordinator", "specialist"] as ChatRole[]) {
    const r = app.store.getRole(role);
    line(r ? "OK" : "FAIL", `${role} conversation`, r ? `${r.url}${r.gpt_id ? ` (GPT ${r.gpt_id})` : ""}, validated ${r.validated_at}` : "not configured — run: harness setup");
  }
  if (!opts.browser) {
    line("INFO", "browser connectivity", "skipped (--no-browser)");
  } else {
    let session: BrowserSession | null = null;
    try {
      session = await BrowserSession.open(config.browser);
      line("OK", `browser (${config.browser.mode})`, config.browser.mode === "cdp" ? config.browser.cdpUrl : config.browser.userDataDir);
      const chat = chatAdapter(app, session, () => null);
      for (const role of ["coordinator", "specialist"] as ChatRole[]) {
        if (!app.store.getRole(role)) continue;
        const s = await chat.checkReady(role);
        line(s.ok ? "OK" : "FAIL", `${role} page`, s.ok ? `ready at ${s.url}` : `${s.problem}: ${s.detail ?? ""}`);
        const want = config.chats.expectedModelLabel[role];
        line(want ? (s.problem === "model_mismatch" ? "FAIL" : "OK") : "INFO", `${role} model selector`, `shows "${s.modelLabel ?? "(not found)"}"${want ? ` (expected to contain "${want}")` : " (no check configured: chats.expectedModelLabel)"}`);
      }
    } catch (e) {
      line("FAIL", "browser", (e as Error).message.split("\n")[0]);
    } finally {
      await session?.close().catch(() => undefined);
    }
  }
  console.log(failed ? "\nDoctor found problems (FAIL above)." : "\nDoctor: no blocking problems.");
  return !failed;
}
