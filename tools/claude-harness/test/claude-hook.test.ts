import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { guard, guardName, textDenial, type GuardConfig } from "../src/hooks/pre-tool-use.js";
import { ConfigSchema, HARNESS_DIR, resolvePaths } from "../src/config.js";
import { generatedPolicy } from "../src/adapters/claude/tool-policy.js";
describe("three-purpose PreToolUse guard",()=>{
  it("labels denial reasons for the replay scorecard",()=>{
    expect(guardName("Key-like text denied.")).toBe("key_text");
    expect(guardName("Exact value required: Keyboard")).toBe("exact_values");
    expect(guardName("Identical consecutive tool call 6 denied")).toBe("identical_calls");
    expect(guardName("Guard state unavailable")).toBe("guard_state");
    expect(guardName("Guard lock timeout: held")).toBe("lock_timeout");
    expect(guardName("Guard state corrupt: bad JSON")).toBe("state_corrupt");
  });
  const name="mcp__playwright__browser_type",cfg={allowLiteralKeyText:false,exactValues:["Keyboard"]};
  it.each(["Control+A","Ctrl+A","Shift+Tab","Alt+F4","Meta+K","Enter","Tab","Escape","Backspace","Delete","F1","F12"])("denies %s as text with key-press guidance",text=>{
    expect(textDenial(name,{text},cfg)).toContain("browser_press_key");
  });
  it("handles form fields/sequential typing, exact casing, literal-key exception and secret placeholders",()=>{
    expect(textDenial("mcp__playwright__browser_fill_form",{fields:[{value:"Tab"}]},cfg)).toContain("browser_press_key");
    expect(textDenial("mcp__playwright__browser_press_sequentially",{text:"keyboard"},cfg)).toContain("Keyboard");
    expect(textDenial(name,{text:"Keyboard"},cfg)).toBeNull();expect(textDenial(name,{text:"SECRET_MONGOOSE_PASSWORD"},cfg)).toBeNull();
    expect(textDenial(name,{text:"Enter"},{...cfg,allowLiteralKeyText:true})).toBeNull();
    expect(textDenial(name,{text:"keyboard"},{...cfg,allowLiteralKeyText:true})).toContain("Keyboard");
  });
  it("denies the sixth exact consecutive call, persists through resume, canonicalizes keys, and resets on different calls",()=>{
    const dir=mkdtempSync(join(tmpdir(),"claude-guard-")),sessionId=randomUUID(),cfg:GuardConfig={sessionId,stateFile:join(dir,"state.json"),threshold:6,allowLiteralKeyText:false,exactValues:[]};
    const event={session_id:sessionId,tool_name:name,tool_input:{text:"literal",element:"input"}};
    for(let i=0;i<5;i++)expect(guard(event,cfg)).toBeNull();
    expect(guard({...event,tool_input:{element:"input",text:"literal"}},cfg)).toContain("6");
    expect(guard(event,{...cfg})).toContain("7");expect(readFileSync(cfg.stateFile,"utf8")).not.toContain("literal");
    expect(guard({...event,tool_name:"mcp__playwright__browser_snapshot"},cfg)).toBeNull();expect(guard(event,cfg)).toBeNull();
    expect(guard({...event,session_id:randomUUID()},cfg)).toContain("mismatch");
  });
  it("executes the generated hook through stdin and fails closed with missing config",()=>{
    const dir=mkdtempSync(join(tmpdir(),"claude-hook-")),config=ConfigSchema.parse({dataDir:dir}),sid=randomUUID();
    const generated=generatedPolicy(config,resolvePaths(config),sid,{denyBrowserJavaScript:true});const hook=generated.settings.hooks.PreToolUse[0].hooks[0];
    const output=execFileSync(hook.command,hook.args,{input:JSON.stringify({session_id:sid,tool_name:name,tool_input:{text:"Ctrl+A"}}),encoding:"utf8",windowsHide:true});
    expect(JSON.parse(output).hookSpecificOutput.permissionDecision).toBe("deny");
    const missing=execFileSync(process.execPath,[join(HARNESS_DIR,"dist/hooks/pre-tool-use.js"),"--config",join(dir,"absent.json")],{input:"{}",encoding:"utf8",windowsHide:true});
    expect(JSON.parse(missing).hookSpecificOutput.permissionDecision).toBe("deny");
  });
});
