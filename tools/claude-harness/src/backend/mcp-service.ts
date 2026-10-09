import { spawn } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import type { HarnessConfig, ResolvedPaths } from "../config.js";
import { readChromeWindow } from "./chrome-window.js";

export type ServiceKind = "chrome" | "mcp";
export type ServiceAction = "start" | "health" | "stop" | "restart";
export type ServiceResult = { ok: boolean; [key: string]: unknown };
export interface ServiceRequest {
  kind: ServiceKind; executable: string; argv: string[]; port: number;
  cwd: string; profile: string | null; logDir: string; requestHash: string;
  windowStyle?: "normal" | "minimized" | "hidden";
  launchScopeHash?:string;
}
const require = createRequire(import.meta.url);
export const renderingFlags=["--disable-backgrounding-occluded-windows","--disable-renderer-backgrounding","--disable-background-timer-throttling"];
const newChromeOption=(arg:string)=>renderingFlags.includes(arg)||arg.startsWith("--window-size=")||arg==="--start-maximized";
const requestHash=(base:unknown)=>createHash("sha256").update(JSON.stringify(base)).digest("hex");

/** Accept option-only drift without changing the saved process identity or restarting. */
export function launchOptionsStatus(state:Record<string,any>,request:ServiceRequest):"current"|"outdated"|"scope_mismatch" {
  if(state.requestHash===request.requestHash)return "current";
  if(request.kind==="chrome"&&request.launchScopeHash&&
    (state.launchScopeHash===request.launchScopeHash||state.requestHash===request.launchScopeHash))return "outdated";
  return "scope_mismatch";
}

export function serviceRequest(cfg: HarnessConfig, paths: ResolvedPaths, kind: ServiceKind): ServiceRequest {
  if (cfg.mcp.port === cfg.mcp.cdpPort) throw new Error("MCP and CDP ports must differ");
  const cwd = paths.factoryRoot;
  let executable: string, argv: string[], profile: string | null = null;
  if (kind === "chrome") {
    profile = resolve(cfg.mongooseBrowserProfile);
    executable = cfg.mcp.chromeExecutable ?? [
      join(process.env.ProgramFiles ?? "C:/Program Files", "Google/Chrome/Application/chrome.exe"),
      join(process.env["ProgramFiles(x86)"] ?? "C:/Program Files (x86)", "Google/Chrome/Application/chrome.exe"),
      join(process.env.LOCALAPPDATA ?? "", "Google/Chrome/Application/chrome.exe"),
    ].find(existsSync) ?? "";
    if (!executable) throw new Error("Chrome executable not found; set mcp.chromeExecutable");
    argv = [`--remote-debugging-port=${cfg.mcp.cdpPort}`, "--remote-debugging-address=127.0.0.1",
      `--user-data-dir=${profile}`, "--no-first-run", "--no-default-browser-check",
      ...renderingFlags,`--window-size=${cfg.chromeWindowSize}`,...(cfg.chromeStartMaximized?["--start-maximized"]:[]),"about:blank"];
  } else {
    executable = process.execPath;
    const entrypoint = cfg.mcp.entrypoint ?? join(dirname(require.resolve("@playwright/mcp/package.json")), "cli.js");
    argv = [resolve(entrypoint), "--host", "127.0.0.1", "--port", String(cfg.mcp.port),
      "--allowed-hosts", `127.0.0.1:${cfg.mcp.port}`, "--cdp-endpoint", `http://127.0.0.1:${cfg.mcp.cdpPort}`,
      "--idle-timeout", "0", "--output-dir", resolve(cwd, cfg.mcp.outputDir)];
    if (cfg.mcp.secretsFile) argv.push("--secrets", resolve(cfg.mcp.secretsFile));
  }
  const base = { kind, executable: resolve(executable), argv, port: kind === "chrome" ? cfg.mcp.cdpPort : cfg.mcp.port,
    cwd, profile, logDir: join(paths.dataDir, "services", "logs", kind),
    ...(kind === "chrome" ? { windowStyle: cfg.chromeWindowStyle } : {}) };
  return { ...base, requestHash: requestHash(base),
    ...(kind==="chrome"?{launchScopeHash:requestHash({...base,argv:argv.filter(arg=>!newChromeOption(arg))})}:{}) };
}

export class McpService {
  constructor(readonly cfg: HarnessConfig, readonly paths: ResolvedPaths) {}
  get url() { return `http://127.0.0.1:${this.cfg.mcp.port}/mcp`; }
  stateFile(kind: ServiceKind) { return join(this.paths.dataDir, "services", `${kind}.json`); }

  async command(kind: ServiceKind, action: ServiceAction): Promise<ServiceResult> {
    const dir = join(this.paths.dataDir, "services", "requests"); mkdirSync(dir, { recursive: true });
    const id = randomUUID(), resultFile = join(dir, `${id}.result.json`);
    const args = ["-NoProfile", "-NonInteractive", "-File", join(this.paths.scriptsDir, "OwnedService.ps1"),
      "-Kind", kind, "-Action", action, "-StateFile", this.stateFile(kind), "-ResultFile", resultFile];
    const expected=serviceRequest(this.cfg,this.paths,kind);let outdated=false;let effectiveArguments:string[]|null=null;
    if (existsSync(this.stateFile(kind))) {
      const state = JSON.parse(readFileSync(this.stateFile(kind), "utf8").replace(/^\uFEFF/, ""));
      const options=launchOptionsStatus(state,expected);
      if (options==="scope_mismatch")
        return { ok: false, error: "service_configuration_scope_mismatch" };
      outdated=options==="outdated";
      effectiveArguments=state.effectiveArguments??(state.requestHash===expected.launchScopeHash?expected.argv.filter(arg=>!newChromeOption(arg)):null);
    }
    if (action === "start" || action === "restart") {
      const request = join(dir, `${id}.request.json`);
      writeFileSync(request, JSON.stringify(expected, null, 2));
      args.push("-RequestFile", request);
    }
    const result=await new Promise<ServiceResult>((done) => {
      const child = spawn("pwsh", args, { stdio: "ignore", windowsHide: true, shell: false });
      const timer = setTimeout(() => { child.kill(); done({ ok: false, error: "service_script_timeout", detail: "Inspect ownership state before retrying." }); }, 60_000);
      child.on("error", () => { clearTimeout(timer); done({ ok: false, error: "service_script_spawn_failed" }); });
      child.on("exit", () => {
        clearTimeout(timer);
        try { done(JSON.parse(readFileSync(resultFile, "utf8").replace(/^\uFEFF/, ""))); }
        catch { done({ ok: false, error: "service_script_result_missing", detail: "Inspect ownership state before retrying." }); }
      });
    });
    if(kind!=="chrome"||!result.ok)return result;
    return {...result,effectiveArguments:result.effectiveArguments??effectiveArguments??expected.argv,
      ...(outdated&&["health","start"].includes(action)?{launchOptions:"outdated",warning:"running with outdated launch options; apply the new options at the next operator-controlled Chrome start"}:{launchOptions:"current"})};
  }
  async windowState() {
    const chrome=await this.command("chrome","health");
    if(!chrome.ok)throw Error("Chrome window preflight requires a healthy owned Chrome; restore ownership/service health manually");
    return readChromeWindow(this.cfg.mcp.cdpPort);
  }
  async health(includeWindow=true): Promise<ServiceResult> {
    const [chrome, mcp] = await Promise.all([this.command("chrome", "health"), this.command("mcp", "health")]);
    if (!chrome.ok) return { ok: false, chrome, mcp };
    let window;
    if(includeWindow)try{window=await readChromeWindow(this.cfg.mcp.cdpPort);}catch(error){return {ok:false,chrome,mcp,error:"chrome_window_preflight_failed",detail:error instanceof Error?error.message:String(error)};}
    const state={chrome,mcp,...(window?{windowState:window.windowState,bounds:window.bounds,chromeWindow:window}:{})};
    if(!mcp.ok)return {ok:false,...state};
    try { return { ok: true, ...state,...await listMcpTools(this.url) }; }
    catch { return { ok: false, ...state, error: "mcp_handshake_failed" }; }
  }
  async restartOwnedBackend(): Promise<boolean> {
    // Never restart Chrome or repair an unavailable browser as a side effect.
    if (!(await this.command("chrome", "health")).ok) return false;
    if (!(await this.command("mcp", "health")).ok) return false;
    return (await this.command("mcp", "restart")).ok;
  }
  generateWorkerConfig(): string {
    const file = join(this.paths.dataDir, "mcp", "worker.json"); mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify({ mcpServers: { playwright: { type: "http", url: this.url } } }, null, 2));
    return file;
  }
}

export async function listMcpTools(url: string): Promise<{ tools: string[] }> {
  const transport = new StreamableHTTPClientTransport(new URL(url));
  const client = new Client({ name: "claude-harness-health", version: "0.1.0" });
  try {
    await client.connect(transport);
    const { tools } = await client.listTools({}, { timeout: 5000 });
    return { tools: tools.map((t) => t.name) };
  } finally { await transport.terminateSession().catch(() => {}); await client.close(); }
}
