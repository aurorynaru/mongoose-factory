import { execFile, spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { join } from "node:path";
import type { HarnessConfig, ResolvedPaths } from "../../config.js";
export function childEnvironment(cfg: HarnessConfig, source: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const env={...source};
  if(cfg.claude.billing!=="api")for(const k of Object.keys(env))if(/^(?:ANTHROPIC_API_KEY|ANTHROPIC_AUTH_TOKEN)$/i.test(k))delete env[k];
  if(cfg.claude.configDir)env.CLAUDE_CONFIG_DIR=cfg.claude.configDir;
  if(cfg.claude.billing==="subscription"){
    for(const k of Object.keys(env))if(/^(?:ANTHROPIC_BASE_URL|CLAUDE_CODE_USE_BEDROCK|CLAUDE_CODE_USE_VERTEX|CLAUDE_CODE_USE_FOUNDRY)$/i.test(k)&&env[k])
      throw Error("Subscription mode refuses provider/custom API routing environment");
  }
  return env;
}
export function diagnostic(cfg: HarnessConfig, args: string[]): Promise<{code:number;stdout:string}> {
  return new Promise(resolve=>execFile(cfg.claude.executable,[...cfg.claude.argvPrefix,...args],{env:childEnvironment(cfg),windowsHide:true,timeout:15_000,maxBuffer:1_000_000},(error,stdout)=>resolve({code:error?1:0,stdout})));
}
export function launch(cfg: HarnessConfig, cwd: string, args: string[]): ChildProcessWithoutNullStreams {
  return spawn(cfg.claude.executable,[...cfg.claude.argvPrefix,...args],{cwd,env:childEnvironment(cfg),shell:false,windowsHide:true,stdio:"pipe"});
}
export function taskProcess(paths: ResolvedPaths, args: string[]): Promise<Record<string,unknown>> {
  return new Promise(resolve=>execFile("pwsh",["-NoProfile","-File",join(paths.scriptsDir,"ClaudeTaskProcess.ps1"),...args],{windowsHide:true,timeout:15_000,maxBuffer:100_000},(error,stdout)=>{
    try { resolve(JSON.parse(stdout.replace(/^\uFEFF/,""))); }catch { resolve({ok:false,error:error?"task_process_check_failed":"task_process_result_missing"}); }
  }));
}
