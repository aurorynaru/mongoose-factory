import { spawn } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import type { HarnessConfig, ResolvedPaths } from "../config.js";

export type ServiceKind = "chrome" | "mcp";
export type ServiceAction = "start" | "health" | "stop" | "restart";
export type ServiceResult = { ok: boolean; [key: string]: unknown };
export interface ServiceRequest {
  kind: ServiceKind; executable: string; argv: string[]; port: number;
  cwd: string; profile: string | null; logDir: string; requestHash: string;
}
const require = createRequire(import.meta.url);

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
      `--user-data-dir=${profile}`, "--no-first-run", "--no-default-browser-check", "about:blank"];
  } else {
    executable = process.execPath;
    const entrypoint = cfg.mcp.entrypoint ?? join(dirname(require.resolve("@playwright/mcp/package.json")), "cli.js");
    argv = [resolve(entrypoint), "--host", "127.0.0.1", "--port", String(cfg.mcp.port),
      "--allowed-hosts", `127.0.0.1:${cfg.mcp.port}`, "--cdp-endpoint", `http://127.0.0.1:${cfg.mcp.cdpPort}`,
      "--idle-timeout", "0", "--output-dir", resolve(cwd, cfg.mcp.outputDir)];
    if (cfg.mcp.secretsFile) argv.push("--secrets", resolve(cfg.mcp.secretsFile));
  }
  const base = { kind, executable: resolve(executable), argv, port: kind === "chrome" ? cfg.mcp.cdpPort : cfg.mcp.port,
    cwd, profile, logDir: join(paths.dataDir, "services", "logs", kind) };
  return { ...base, requestHash: createHash("sha256").update(JSON.stringify(base)).digest("hex") };
}

export class McpService {
  constructor(readonly cfg: HarnessConfig, readonly paths: ResolvedPaths) {}
  get url() { return `http://127.0.0.1:${this.cfg.mcp.port}/mcp`; }
  stateFile(kind: ServiceKind) { return join(this.paths.dataDir, "services", `${kind}.json`); }

  async command(kind: ServiceKind, action: ServiceAction): Promise<ServiceResult> {
    const dir = join(this.paths.dataDir, "services", "requests"); mkdirSync(dir, { recursive: true });
    const id = randomUUID(), result = join(dir, `${id}.result.json`);
    const args = ["-NoProfile", "-NonInteractive", "-File", join(this.paths.scriptsDir, "OwnedService.ps1"),
      "-Kind", kind, "-Action", action, "-StateFile", this.stateFile(kind), "-ResultFile", result];
    if (existsSync(this.stateFile(kind))) {
      const state = JSON.parse(readFileSync(this.stateFile(kind), "utf8").replace(/^\uFEFF/, ""));
      if (state.requestHash !== serviceRequest(this.cfg, this.paths, kind).requestHash)
        return { ok: false, error: "service_configuration_scope_mismatch" };
    }
    if (action === "start" || action === "restart") {
      const request = join(dir, `${id}.request.json`);
      writeFileSync(request, JSON.stringify(serviceRequest(this.cfg, this.paths, kind), null, 2));
      args.push("-RequestFile", request);
    }
    return await new Promise<ServiceResult>((done) => {
      const child = spawn("pwsh", args, { stdio: "ignore", windowsHide: true, shell: false });
      const timer = setTimeout(() => { child.kill(); done({ ok: false, error: "service_script_timeout", detail: "Inspect ownership state before retrying." }); }, 60_000);
      child.on("error", () => { clearTimeout(timer); done({ ok: false, error: "service_script_spawn_failed" }); });
      child.on("exit", () => {
        clearTimeout(timer);
        try { done(JSON.parse(readFileSync(result, "utf8").replace(/^\uFEFF/, ""))); }
        catch { done({ ok: false, error: "service_script_result_missing", detail: "Inspect ownership state before retrying." }); }
      });
    });
  }
  async health(): Promise<ServiceResult> {
    const [chrome, mcp] = await Promise.all([this.command("chrome", "health"), this.command("mcp", "health")]);
    if (!chrome.ok || !mcp.ok) return { ok: false, chrome, mcp };
    try { return { ok: true, chrome, mcp, ...await listMcpTools(this.url) }; }
    catch { return { ok: false, chrome, mcp, error: "mcp_handshake_failed" }; }
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
