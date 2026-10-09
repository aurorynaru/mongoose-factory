import { describe, expect, it, vi } from "vitest";
import { readChromeWindow } from "../src/backend/chrome-window.js";
import { McpService } from "../src/backend/mcp-service.js";
import { ConfigSchema,resolvePaths } from "../src/config.js";
import { fakeCdp } from "./fake-cdp.js";

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
