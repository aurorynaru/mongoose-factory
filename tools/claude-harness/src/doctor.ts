import { accessSync, constants, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { BrowserSession } from "./adapters/chatgpt/browser.js";
import type { ChatRole } from "./adapters/types.js";
import { chatAdapter, contextFilePath, type App } from "./app.js";
import { loadCoordinatorContext } from "./context.js";
import { briefProblems, loadBrief } from "./brief.js";
import { configProblems } from "./config.js";
import { protocolBlock } from "./protocol/prompts.js";
import { controllerAlive } from "./status.js";
import { diagnostic } from "./adapters/claude/process.js";
import { McpService } from "./backend/mcp-service.js";

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
  line(Number(process.versions.node.split(".")[0]) >= 22 ? "OK" : "FAIL", "node", process.versions.node);

  console.log("== Directories");
  for (const [name, p] of [
    ["factoryRoot", paths.factoryRoot],
    ["AGENTS.md", join(paths.factoryRoot, "AGENTS.md")],
    ["experiments/", join(paths.factoryRoot, "experiments")],
    ["evidence/", join(paths.factoryRoot, "evidence")],
    ["sources.md", join(paths.factoryRoot, "docs/mongoose/sources.md")],
    ["guides/INDEX.md", join(paths.factoryRoot, "docs/mongoose/guides/INDEX.md")],
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

  console.log("== Claude / role routing");
  try {
    const version=await diagnostic(config,["--version"]),auth=await diagnostic(config,["auth","status"]);
    line(version.code?"FAIL":"OK","Claude CLI",version.stdout.trim());
    const status=auth.code?null:JSON.parse(auth.stdout);
    const ok=status?.loggedIn && (config.claude.billing!=="subscription"||status.authMethod==="claude.ai");
    line(ok?"OK":"FAIL","Claude auth",ok?`subscription login ready (${status.subscriptionType??"unknown plan"})`:"required login unavailable; sign in manually outside the worker");
  } catch(error) {line("FAIL","Claude auth",(error as Error).message);}
  line("INFO","coordinator",`${config.coordinator.transport}; Claude alternative ${config.claude.models.coordinator.model}/${config.claude.models.coordinator.effort}`);
  line("INFO","worker",`${config.claude.models.worker.model}/${config.claude.models.worker.effort}; brief worker.model may override; OpenCode is legacy only`);
  line("INFO","specialist",`${config.claude.models.specialist.model}/${config.claude.models.specialist.effort}; read-only local knowledge + three Infor WebFetch domains`);
  line("INFO","external second opinion",`${config.externalSecondOpinion.enabled?"enabled":"disabled"}; max ${config.externalSecondOpinion.maxPerRun}/run; Tab 2 replies go only to Opus, unverified`);
  if(opts.mcp) {
    const health=await new McpService(config,paths).health();
    line(health.ok?"OK":"FAIL","owned Chrome/MCP",JSON.stringify(health));
    if(health.windowState==="minimized")line("FAIL","Chrome window","restore the Chrome window first");
  } else line("INFO","owned services","skipped (use --mcp); start/resume never starts or restarts them");

  console.log("== DeepSeek (optional)");
  if (!config.deepseek.enabled) line("INFO", "deepseek", "disabled (unparseable coordinator replies pause for the operator)");
  else line(process.env[config.deepseek.apiKeyEnv] ? "OK" : "FAIL", "deepseek key", `${config.deepseek.apiKeyEnv} ${process.env[config.deepseek.apiKeyEnv] ? "is set" : "is NOT set"} (no API call made)`);

  console.log("== Browser (ChatGPT)");
  const browserRoles:ChatRole[]=[...(config.coordinator.transport==="chatgpt"?["coordinator" as const]:[]),...(config.externalSecondOpinion.enabled?["specialist" as const]:[])];
  for (const role of browserRoles) {
    const r = app.store.getRole(role);
    line(r ? "OK" : "FAIL", `${role} conversation`, r ? `${r.url}${r.gpt_id ? ` (GPT ${r.gpt_id})` : ""}, validated ${r.validated_at}` : "not configured — run: harness setup");
  }
  if (!opts.browser || !browserRoles.length) {
    line("INFO", "browser connectivity", "skipped (--no-browser)");
  } else {
    let session: BrowserSession | null = null;
    try {
      session = await BrowserSession.open(config.browser);
      line("OK", `browser (${config.browser.mode})`, config.browser.mode === "cdp" ? config.browser.cdpUrl : config.browser.userDataDir);
      const chat = chatAdapter(app, session, () => null);
      for (const role of browserRoles) {
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
