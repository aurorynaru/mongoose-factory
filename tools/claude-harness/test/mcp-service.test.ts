import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { createServer } from "node:net";
import { describe, expect, it } from "vitest";
import { ConfigSchema, HARNESS_DIR, resolvePaths } from "../src/config.js";
import { McpService, listMcpTools, serviceRequest } from "../src/backend/mcp-service.js";

describe("CDP service configuration", () => {
  it("uses the configured Mongoose profile and about:blank, with loopback only", () => {
    const cfg = ConfigSchema.parse({ mcp: { chromeExecutable: process.execPath } });
    const r = serviceRequest(cfg, resolvePaths(cfg), "chrome");
    expect(r.profile).toBe(resolve("C:/AI/mongoose-playwright-profile"));
    expect(r.argv).toContain("--remote-debugging-address=127.0.0.1");
    expect(r.argv.at(-1)).toBe("about:blank");
  });
  it("connects pinned MCP to external Chrome, never a gateway or MCP profile", () => {
    const cfg = ConfigSchema.parse({ mcp: { secretsFile: null } });
    const r = serviceRequest(cfg, resolvePaths(cfg), "mcp");
    expect(r.argv).toContain("--cdp-endpoint"); expect(r.argv).toContain("http://127.0.0.1:9224");
    expect(r.argv).not.toContain("--user-data-dir"); expect(r.argv).not.toContain("--secrets");
    expect(r.argv).not.toContain("--isolated");
    expect(JSON.parse(readFileSync(new McpService(cfg, resolvePaths({ ...cfg, dataDir: mkdtempSync(join(tmpdir(), "mcp-config-")) })).generateWorkerConfig(), "utf8")))
      .toEqual({ mcpServers: { playwright: { type: "http", url: "http://127.0.0.1:8931/mcp" } } });
  });
  it("rejects same MCP/CDP port", () => {
    const cfg = ConfigSchema.parse({ mcp: { port: 9224, cdpPort: 9224 } });
    expect(() => serviceRequest(cfg, resolvePaths(cfg), "mcp")).toThrow("ports must differ");
  });
});

describe.runIf(process.platform === "win32")("Windows ownership without browsers", () => {
  it("starts a fake MCP, checks handshake/identity, refuses stale identity and stops only its tree", async () => {
    const listener = createServer(); await new Promise<void>(r => listener.listen(0, "127.0.0.1", r));
    const port = (listener.address() as { port: number }).port; await new Promise<void>(r => listener.close(() => r()));
    const dir = mkdtempSync(join(tmpdir(), "mcp-owned-"));
    const cfg = ConfigSchema.parse({ dataDir: dir, mcp: { port, entrypoint: join(HARNESS_DIR, "fixtures/fake-mcp.mjs"), secretsFile: null } });
    const service = new McpService(cfg, resolvePaths(cfg));
    try {
      const started = await service.command("mcp", "start"); expect(started.ok).toBe(true);
      expect((await service.command("mcp", "start")).action).toBe("already_running");
      expect((await service.command("mcp", "health")).ok).toBe(true);
      expect(await listMcpTools(service.url)).toEqual({ tools: [] });
      const file = service.stateFile("mcp"), saved = readFileSync(file, "utf8");
      const state = JSON.parse(saved.replace(/^\uFEFF/, "")); state.startTicks = "1";
      writeFileSync(file, JSON.stringify(state));
      expect((await service.command("mcp", "health")).ok).toBe(false);
      expect((await service.command("mcp", "stop")).ok).toBe(false);
      expect(await listMcpTools(service.url)).toEqual({ tools: [] });
      writeFileSync(file, saved);
      expect((await service.command("mcp", "stop")).action).toBe("stopped");
    } finally { await service.command("mcp", "stop"); }
  }, 60_000);
  it("refuses an unowned listener and another configured factory scope", async () => {
    const listener = createServer(); await new Promise<void>(r => listener.listen(0, "127.0.0.1", r));
    const port = (listener.address() as { port: number }).port;
    const dir = mkdtempSync(join(tmpdir(), "mcp-unowned-"));
    const cfg = ConfigSchema.parse({ dataDir: dir, mcp: { port, entrypoint: join(HARNESS_DIR, "fixtures/fake-mcp.mjs"), secretsFile: null } });
    try { expect((await new McpService(cfg, resolvePaths(cfg)).command("mcp", "start")).error).toBe("port_in_use_by_unowned_process"); }
    finally { await new Promise<void>(r => listener.close(() => r())); }
    const file = join(dir, "services/mcp.json");
    writeFileSync(file, JSON.stringify({ requestHash: "different-factory" }));
    expect((await new McpService(cfg, resolvePaths(cfg)).command("mcp", "stop")).error).toBe("service_configuration_scope_mismatch");
  });
  it("refuses default and in-use profiles without launching any Chrome", () => {
    const dir = mkdtempSync(join(tmpdir(), "profile-policy-")), test = join(dir, "check.ps1");
    writeFileSync(test, `. '${join(HARNESS_DIR, "scripts/OwnedService.Common.ps1").replaceAll("'", "''")}'
$profile = Join-Path $env:TEMP 'mock profile'
function Get-CimInstance { return [pscustomobject]@{CommandLine='chrome.exe "--user-data-dir=' + $profile + '"'} }
try { Assert-ProfileFree $profile; throw 'should have refused profile' } catch { if ($_.Exception.Message -ne 'chrome_profile_in_use') { throw }; Write-Output 'in_use_refused' }
try { Canonical-Profile (Join-Path $env:LOCALAPPDATA 'Google/Chrome/User Data'); throw 'should have refused default' } catch { if ($_.Exception.Message -ne 'default_chrome_profile_refused') { throw }; Write-Output 'default_refused' }
`);
    const output = execFileSync("pwsh", ["-NoProfile", "-File", test], { encoding: "utf8", windowsHide: true });
    expect(output).toContain("in_use_refused"); expect(output).toContain("default_refused");
  });
});
