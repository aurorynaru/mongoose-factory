import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import type { HarnessConfig, ResolvedPaths } from "../../config.js";
import type { WorkerToolPolicy } from "../types.js";
import { save } from "./files.js";
export { workerPolicyForBrief } from "../opencode/tool-policy.js";
export function absolutePattern(path: string): string {
  const posix = resolve(path).replaceAll("\\", "/").replace(/^([a-z]):/i, (_,d:string)=>"/"+d.toLowerCase());
  return "/" + posix.replace(/[\[\]*?!]/g,"\\$&");
}
export function generatedPolicy(cfg: HarnessConfig, paths: ResolvedPaths, sessionId: string, policy: WorkerToolPolicy) {
  const configDir = cfg.claude.configDir ?? join(homedir(), ".claude");
  const dir = join(paths.dataDir,"workers",sessionId), settingsFile=join(dir,"settings.json"), guardConfig=join(dir,"guard.json");
  const threshold=policy.maxIdenticalCalls ?? cfg.worker.maxIdenticalCalls;
  const values=policy.exactValues ?? [];
  if(new Set(values.map(x=>x.toLowerCase())).size!==values.length)throw Error("Conflicting exact_values");
  if(!Number.isInteger(threshold)||threshold<0||threshold>24)throw Error("Invalid identical call threshold");
  save(guardConfig,{ sessionId, stateFile:join(dir,"guard-state.json"), threshold, allowLiteralKeyText:policy.allowLiteralKeyText??false, exactValues:values });
  const protectedDirs=[join(paths.factoryRoot,".git"),join(paths.factoryRoot,"tools"),configDir,cfg.mongooseBrowserProfile,
    ...(cfg.mcp.secretsFile?[dirname(resolve(cfg.mcp.secretsFile))]:[])];
  const deny=protectedDirs.flatMap(p=>["Read","Edit"].flatMap(tool=>[`${tool}(${absolutePattern(p)})`,`${tool}(${absolutePattern(p)}/**)`]));
  deny.push(`Read(${absolutePattern(join(homedir(),".claude.json"))})`,`Edit(${absolutePattern(join(homedir(),".claude.json"))})`,
    `Edit(${absolutePattern(join(paths.factoryRoot,"AGENTS.md"))})`, "WebFetch","WebSearch","Agent","Task","NotebookEdit","PowerShell");
  const allowBash=cfg.worker.allowBash&&!policy.denyBrowserJavaScript;
  if(!allowBash)deny.push("Bash");
  if(policy.denyBrowserJavaScript)deny.push(...["browser_evaluate","browser_run_code","browser_run_code_unsafe"].map(t=>`mcp__playwright__${t}`));
  const tools=["Read","Write","Edit","Glob","Grep",...(allowBash?["Bash"]:[])];
  const settings={ permissions:{ defaultMode:"dontAsk", blockReadsOutsideWorkingDirectories:true, allow:[...tools,"mcp__playwright__*"], deny },
    hooks:{ PreToolUse:[{matcher:"*",hooks:[{type:"command", command:process.execPath, args:[join(paths.harnessDir,"dist/hooks/pre-tool-use.js"),"--config",guardConfig],timeout:10}]}] } };
  save(settingsFile,settings);
  return { settingsFile, guardConfig, settings, tools, deny };
}
