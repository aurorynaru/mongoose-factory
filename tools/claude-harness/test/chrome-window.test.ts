import { describe, expect, it, vi } from "vitest";
import { readChromeWindow } from "../src/backend/chrome-window.js";
import { McpService } from "../src/backend/mcp-service.js";
import { ConfigSchema,resolvePaths } from "../src/config.js";
import { fakeCdp } from "./fake-cdp.js";
import { maximizeChromeWindow } from "../src/backend/chrome-window.js";
import { mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

describe("read-only browser CDP window preflight",()=>{
  it.each(["normal","maximized","fullscreen","minimized"])("reads %s and restored bounds without page interaction",async state=>{
    const fake=await fakeCdp();fake.state.windowState=state;
    try {
      expect(await readChromeWindow(fake.port)).toMatchObject({windowState:state,windowId:7,bounds:{left:0,top:0,width:1920,height:1080,windowState:state}});
      expect(fake.http).toEqual(["GET /json/version"]);
      expect(fake.commands).toEqual([{method:"Target.getTargets",params:{}},{method:"Browser.getWindowForTarget",params:{targetId:"page-1"}}]);
    }finally{await fake.close();}
  });
  it.each([0,2])("refuses ambiguous page selection (%s pages)",async pages=>{
    const fake=await fakeCdp({pages});try{await expect(readChromeWindow(fake.port)).rejects.toThrow("exactly one page target");expect(fake.commands).toHaveLength(1);}finally{await fake.close();}
  });
  it.each(["error","invalid","external","hang"] as const)("refuses %s responses without changing the browser",async kind=>{
    const fake=await fakeCdp({[kind]:true});try{await expect(readChromeWindow(fake.port,200)).rejects.toThrow();}finally{await fake.close();}
  });
  it("shows window state/bounds and effective Chrome arguments/warnings in MCP health",async()=>{
    const cdp=await fakeCdp(),mcp=await fakeCdp();
    const cfg=ConfigSchema.parse({mcp:{port:mcp.port,cdpPort:cdp.port,secretsFile:null}}),service=new McpService(cfg,resolvePaths(cfg));
    vi.spyOn(service,"command").mockImplementation(async kind=>({ok:true,kind,...(kind==="chrome"?{effectiveArguments:["--old-option"],warning:"running with outdated launch options"}:{})}));
    try {
      const health=await service.health();expect(health).toMatchObject({ok:true,windowState:"normal",bounds:{width:1920,height:1080},chrome:{effectiveArguments:["--old-option"],warning:"running with outdated launch options"},tools:[]});
      expect(cdp.commands.map(c=>c.method)).toEqual(["Target.getTargets","Browser.getWindowForTarget"]);
    }finally{await cdp.close();await mcp.close();}
  });
  it("never connects to CDP if Chrome ownership is unproven",async()=>{
    const fake=await fakeCdp(),cfg=ConfigSchema.parse({mcp:{cdpPort:fake.port,secretsFile:null}}),service=new McpService(cfg,resolvePaths(cfg));
    vi.spyOn(service,"command").mockResolvedValue({ok:false});
    try{await expect(service.windowState()).rejects.toThrow("healthy owned Chrome");expect(fake.http).toEqual([]);}finally{await fake.close();}
  });
});

describe("post-start window maximization (fake CDP only)",()=>{
  it.each(["normal","minimized","fullscreen"])("maximizes saved %s placement and verifies actual bounds",async state=>{
    const fake=await fakeCdp();fake.state.windowState=state;
    try {
      expect(await maximizeChromeWindow(fake.port)).toMatchObject({windowState:"maximized",bounds:{width:2560,height:1440}});
      const sets=fake.commands.filter(c=>c.method==="Browser.setWindowBounds");
      expect(sets.at(-1)?.params).toEqual({windowId:7,bounds:{windowState:"maximized"}});
      expect(fake.commands.at(-1)?.method).toBe("Browser.getWindowBounds");
      expect(fake.commands.some(c=>c.method.startsWith("Page.")||c.method.startsWith("Runtime."))).toBe(false);
    }finally{await fake.close();}
  });
  it("waits for placement to settle after acknowledgement",async()=>{
    const fake=await fakeCdp({delayMaximize:true});try{expect((await maximizeChromeWindow(fake.port)).windowState).toBe("maximized");expect(fake.commands.filter(c=>c.method==="Browser.getWindowBounds").length).toBeGreaterThan(1);}finally{await fake.close();}
  });
  it.each(["setError","ignoreMaximize"] as const)("fails verification on %s without page interaction",async mode=>{
    const fake=await fakeCdp({[mode]:true});try{await expect(maximizeChromeWindow(fake.port,200)).rejects.toThrow();expect(fake.commands.some(c=>c.method.startsWith("Page."))).toBe(false);}finally{await fake.close();}
  });
  it.each([true,false])("chrome start reports verified bounds and honors chromeStartMaximized=%s",async enabled=>{
    const fake=await fakeCdp(),cfg=ConfigSchema.parse({dataDir:mkdtempSync(join(tmpdir(),"fake-start-")),chromeStartMaximized:enabled,mcp:{cdpPort:fake.port,chromeExecutable:process.execPath,secretsFile:null}}),service=new McpService(cfg,resolvePaths(cfg));
    vi.spyOn(service,"runServiceScript").mockResolvedValue({ok:true,action:"started"});
    try {
      expect(await service.command("chrome","start")).toMatchObject({ok:true,windowState:enabled?"maximized":"normal",bounds:{width:enabled?2560:1920,height:enabled?1440:1080},chromeWindow:{windowId:7}});
      expect(fake.commands.some(c=>c.method==="Browser.setWindowBounds")).toBe(enabled);
      const mcp=await fakeCdp();
      try{service.cfg.mcp.port=mcp.port;vi.spyOn(service,"command").mockResolvedValue({ok:true});expect(await service.health()).toMatchObject({ok:true,windowState:enabled?"maximized":"normal",bounds:{width:enabled?2560:1920}});}finally{await mcp.close();}
    }finally{await fake.close();}
  });
  it.each([{ok:true,action:"already_running"},{ok:false,error:"ownership_mismatch"}])("does not connect for an existing/unowned start (%j)",async result=>{
    const fake=await fakeCdp(),cfg=ConfigSchema.parse({dataDir:mkdtempSync(join(tmpdir(),"fake-existing-")),mcp:{cdpPort:fake.port,chromeExecutable:process.execPath,secretsFile:null}}),service=new McpService(cfg,resolvePaths(cfg));
    vi.spyOn(service,"runServiceScript").mockResolvedValue(result);
    try{await service.command("chrome","start");expect(fake.http).toEqual([]);expect(fake.commands).toEqual([]);}finally{await fake.close();}
  });
  it("reports setup failure and preserves the newly started service without retrying or stopping it",async()=>{
    const fake=await fakeCdp({setError:true}),cfg=ConfigSchema.parse({dataDir:mkdtempSync(join(tmpdir(),"fake-failed-start-")),mcp:{cdpPort:fake.port,chromeExecutable:process.execPath,secretsFile:null}}),service=new McpService(cfg,resolvePaths(cfg));
    const script=vi.spyOn(service,"runServiceScript").mockResolvedValue({ok:true,action:"started"});
    try{expect(await service.command("chrome","start")).toMatchObject({ok:false,error:"chrome_window_setup_failed",warning:expect.stringContaining("remains running")});expect(script).toHaveBeenCalledTimes(1);}finally{await fake.close();}
  });
});
