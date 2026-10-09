import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { intentionallyDenied } from "../src/adapters/claude/permissions.js";
import { absolutePattern } from "../src/adapters/claude/tool-policy.js";
import { TaskEvents } from "../src/adapters/claude/events.js";

const cwd=resolve("permission-fixture"),base=join(cwd,"tools");
const rules=[`Read(${absolutePattern(base)})`,`Read(${absolutePattern(base)}/**)`,`Edit(${absolutePattern(base)}/**)`,"Bash","mcp__playwright__browser_evaluate"];
describe("intentional permission-denial classification",()=>{
  it.each([
    ["tools/brief.json",true], ["tools",true], ["tools/sub/../brief.json",true],
    ["tools-other/brief.json",false], ["tools/../evidence/allowed.json",false],
    ["evidence/allowed.json",false], ["",false], ["tools/\0brief.json",false],
  ])("matches exact generated Read boundaries for %s",(file_path,expected)=>{
    expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path}},rules,cwd)).toBe(expected);
  });
  it("matches only explicit whole-tool denies and rejects missing/unknown inputs and rules",()=>{
    expect(intentionallyDenied({tool_name:"Bash"},rules,cwd)).toBe(true);
    expect(intentionallyDenied({tool_name:"Bash"},[],cwd)).toBe(false);
    expect(intentionallyDenied({tool_name:"Read"},rules,cwd)).toBe(false);
    expect(intentionallyDenied({tool_name:"unknown"},rules,cwd)).toBe(false);
    expect(intentionallyDenied({tool_name:"mcp__playwright__browser_type"},rules,cwd)).toBe(false);
    expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path:join(base,"brief.json")}},["Read(/**)"],cwd)).toBe(false);
    expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path:join(base,"brief.json")}},[],cwd)).toBe(false);
  });
  it("applies native Read/Edit file-tool categories without confusing allowed files",()=>{
    for(const tool_name of ["Edit","Write","Glob","Grep"]) {
      const key=["Glob","Grep"].includes(tool_name)?"path":"file_path";
      expect(intentionallyDenied({tool_name,tool_input:{[key]:join(base,"brief.json")}},rules,cwd)).toBe(true);
      expect(intentionallyDenied({tool_name,tool_input:{[key]:join(cwd,"evidence/allowed.json")}},rules,cwd)).toBe(false);
    }
  });
  it("supports escaped literal path metacharacters and Windows case handling",()=>{
    const bracket=join(cwd,"tools[fixture]");
    expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path:join(bracket,"a.md")}},[`Read(${absolutePattern(bracket)}/**)`],cwd)).toBe(true);
    if(process.platform==="win32")expect(intentionallyDenied({tool_name:"Read",tool_input:{file_path:join(base,"a.md").toUpperCase()}},rules,cwd)).toBe(true);
  });
  it("retains unknown tool-result denials and conflicting terminal inputs rather than hiding them",()=>{
    const e=new TaskEvents("test-session");
    e.add({type:"assistant",message:{id:"a",content:[{type:"tool_use",id:"t",name:"Read",input:{file_path:join(base,"a.md")}}]}});
    e.add({type:"user",message:{content:[{type:"tool_result",tool_use_id:"t",is_error:true,content:"Permission denied"}]}});
    e.add({type:"result",permission_denials:[{tool_name:"Read",tool_use_id:"t",tool_input:{file_path:join(cwd,"evidence/a.md")}}]});
    expect(e.permissionDenials).toHaveLength(2);
    expect(e.permissionDenials.every(d=>intentionallyDenied(d,rules,cwd))).toBe(false);
    e.add({type:"user",message:{content:[{type:"tool_result",tool_use_id:"unmatched",is_error:true,content:"Permission denied"}]}});
    expect(e.permissionDenials.at(-1)?.tool_name).toBe("unknown");
  });
});
