import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { createServer } from "node:net";
import { describe, expect, it } from "vitest";
import { ConfigSchema, HARNESS_DIR, resolvePaths } from "../src/config.js";
import { McpService, launchOptionsStatus, listMcpTools, renderingFlags, serviceRequest } from "../src/backend/mcp-service.js";

describe("CDP service configuration", () => {
  it("adds anti-throttling flags, default size/maximization, and hashes every production launch option",()=>{
    const cfg=ConfigSchema.parse({mcp:{chromeExecutable:process.execPath,secretsFile:null}}),paths=resolvePaths(cfg),r=serviceRequest(cfg,paths,"chrome");
    for(const flag of renderingFlags)expect(r.argv).toContain(flag);
    expect(r.argv).toContain("--window-size=1920,1080");expect(r.argv).toContain("--start-maximized");
    const custom=serviceRequest({...cfg,chromeWindowSize:"1280,720",chromeStartMaximized:false},paths,"chrome");
    expect(custom.argv).toContain("--window-size=1280,720");expect(custom.argv).not.toContain("--start-maximized");
    expect(custom.requestHash).not.toBe(r.requestHash);expect(custom.launchScopeHash).toBe(r.launchScopeHash);
    expect(serviceRequest(cfg,paths,"mcp").argv.some(a=>renderingFlags.includes(a)||a.startsWith("--window-size"))).toBe(false);
    for(const size of ["0,1080","1920x1080","1920,0","-1,1080","1920,1080 --unsafe"])expect(ConfigSchema.safeParse({chromeWindowSize:size}).success).toBe(false);
  });
  it("warns for legacy/option-only Chrome changes but rejects different scopes and MCP changes",()=>{
    const cfg=ConfigSchema.parse({mcp:{chromeExecutable:process.execPath,secretsFile:null}}),paths=resolvePaths(cfg),r=serviceRequest(cfg,paths,"chrome");
    expect(launchOptionsStatus({requestHash:r.requestHash},r)).toBe("current");
    expect(launchOptionsStatus({requestHash:r.launchScopeHash},r)).toBe("outdated");
    expect(launchOptionsStatus({requestHash:"older-size",launchScopeHash:r.launchScopeHash},r)).toBe("outdated");
    const changed=serviceRequest({...cfg,mongooseBrowserProfile:join(paths.factoryRoot,"different-profile")},paths,"chrome");
    expect(launchOptionsStatus({requestHash:r.launchScopeHash},changed)).toBe("scope_mismatch");
    const port=serviceRequest({...cfg,mcp:{...cfg.mcp,cdpPort:9444}},paths,"chrome");
    expect(launchOptionsStatus({requestHash:r.launchScopeHash},port)).toBe("scope_mismatch");
    expect(launchOptionsStatus({requestHash:"unknown"},r)).toBe("scope_mismatch");
    expect(launchOptionsStatus({requestHash:"unknown",launchScopeHash:r.launchScopeHash},serviceRequest(cfg,paths,"mcp"))).toBe("scope_mismatch");
  });
  it("defaults production Chrome to visible normal and supports minimized/hidden without showing MCP", () => {
    for(const style of [undefined,"normal","minimized","hidden"] as const) {
      const cfg=ConfigSchema.parse({chromeWindowStyle:style,mcp:{chromeExecutable:process.execPath,secretsFile:null}});
      expect(serviceRequest(cfg,resolvePaths(cfg),"chrome").windowStyle).toBe(style??"normal");
      expect(serviceRequest(cfg,resolvePaths(cfg),"mcp").windowStyle).toBeUndefined();
    }
    expect(ConfigSchema.safeParse({chromeWindowStyle:"invisible"}).success).toBe(false);
  });
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
  it("persists effective arguments and the command identity on a mocked Chrome start",()=>{
    const dir=mkdtempSync(join(tmpdir(),"chrome-launch-state-")),stateFile=join(dir,"state.json"),requestFile=join(dir,"request.json"),wrapper=join(dir,"check.ps1");
    const cfg=ConfigSchema.parse({factoryRoot:dir,dataDir:join(dir,"data"),mongooseBrowserProfile:join(dir,"fake-profile"),mcp:{chromeExecutable:process.execPath,secretsFile:null}});
    const request=serviceRequest(cfg,resolvePaths(cfg),"chrome");writeFileSync(requestFile,JSON.stringify(request));
    writeFileSync(wrapper,`
$global:renderingFixtureStarted=$false
$fixtureStart=[datetime]'2026-01-01T00:00:00Z'
$fixtureRequest=Get-Content -LiteralPath '${requestFile.replaceAll("'","''")}' -Raw | ConvertFrom-Json
$fixtureLine='fake-chrome ' + ($fixtureRequest.argv -join ' ')
function Get-Process { [pscustomobject]@{Path='${process.execPath.replaceAll("'","''")}';StartTime=$fixtureStart} }
function Get-CimInstance { param($ClassName,$Filter) if ($Filter -like "Name=*") { return @() }; [pscustomobject]@{CommandLine=$fixtureLine} }
function Get-NetTCPConnection { if ($global:renderingFixtureStarted) { [pscustomobject]@{OwningProcess=12345;LocalAddress='127.0.0.1'} } }
function Start-Process { $global:renderingFixtureStarted=$true; [pscustomobject]@{Id=12345;HasExited=$false} }
& '${join(HARNESS_DIR,"scripts/OwnedService.ps1").replaceAll("'","''")}' -Kind chrome -Action start -StateFile '${stateFile.replaceAll("'","''")}' -RequestFile '${requestFile.replaceAll("'","''")}'
exit $LASTEXITCODE
`);
    const output=execFileSync("pwsh",["-NoProfile","-File",wrapper],{encoding:"utf8",windowsHide:true});
    expect(JSON.parse(output)).toMatchObject({ok:true,action:"started",effectiveArguments:request.argv});
    const state=JSON.parse(readFileSync(stateFile,"utf8").replace(/^\uFEFF/,""));
    expect(state).toMatchObject({effectiveArguments:request.argv,requestHash:request.requestHash,launchScopeHash:request.launchScopeHash});
    const commandHash=(argv:string[])=>createHash("sha256").update("fake-chrome "+argv.join(" ")).digest("hex").toUpperCase();
    expect(state.commandHash).toBe(commandHash(request.argv));
    expect(state.commandHash).not.toBe(commandHash(request.argv.filter(arg=>!renderingFlags.includes(arg))));
  });
  it("reports legacy option drift without failure/start and still checks the actual command identity",()=>{
    const dir=mkdtempSync(join(tmpdir(),"chrome-options-policy-")),stateFile=join(dir,"state.json"),requestFile=join(dir,"request.json"),resultFile=join(dir,"result.json"),wrapper=join(dir,"check.ps1");
    const cfg=ConfigSchema.parse({dataDir:dir,mcp:{chromeExecutable:process.execPath,secretsFile:null}}),request=serviceRequest(cfg,resolvePaths(cfg),"chrome");
    writeFileSync(requestFile,JSON.stringify(request));
    // All OS/process functions are mocked. Start-Process throws; no browser is launched/inspected.
    writeFileSync(wrapper,`param([string]$Action,[switch]$Stale)
$fixtureStart=[datetime]'2026-01-01T00:00:00Z'
$fixtureLine='fake-owned-chrome --old-options'
function Get-Process { [pscustomobject]@{Path='${process.execPath.replaceAll("'","''")}';StartTime=$fixtureStart} }
function Get-CimInstance { [pscustomobject]@{CommandLine=$fixtureLine} }
function Get-NetTCPConnection { [pscustomobject]@{OwningProcess=12345;LocalAddress='127.0.0.1'} }
function Start-Process { throw 'must_not_start_chrome' }
$hash=[Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes($fixtureLine)))
@{kind='chrome';pid=12345;exe='${process.execPath.replaceAll("'","''")}';startTicks=[string]$fixtureStart.ToUniversalTime().Ticks;commandHash=$(if($Stale){'wrong'}else{$hash});port=${request.port};requestHash='${request.launchScopeHash}'} | ConvertTo-Json | Set-Content -LiteralPath '${stateFile.replaceAll("'","''")}'
& '${join(HARNESS_DIR,"scripts/OwnedService.ps1").replaceAll("'","''")}' -Kind chrome -Action $Action -StateFile '${stateFile.replaceAll("'","''")}' -RequestFile '${requestFile.replaceAll("'","''")}' -ResultFile '${resultFile.replaceAll("'","''")}'
exit $LASTEXITCODE
`);
    const output=execFileSync("pwsh",["-NoProfile","-File",wrapper,"-Action","start"],{encoding:"utf8",windowsHide:true});
    expect(JSON.parse(output)).toMatchObject({ok:true,action:"already_running",launchOptions:"outdated",warning:expect.stringContaining("running with outdated launch options")});
    expect(()=>execFileSync("pwsh",["-NoProfile","-File",wrapper,"-Action","health","-Stale"],{encoding:"utf8",windowsHide:true})).toThrow();
    expect(JSON.parse(readFileSync(resultFile,"utf8").replace(/^\uFEFF/,""))).toMatchObject({ok:false,owned:false});
  });
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
