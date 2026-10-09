import { existsSync, readFileSync, realpathSync } from "node:fs";
import { join, resolve, sep } from "node:path";
import type { ChatRole } from "../types.js";
import type { HarnessConfig, ResolvedPaths } from "../../config.js";
import { generatedPolicy, absolutePattern } from "./tool-policy.js";
import { read, save } from "./files.js";
import type { GuardConfig } from "../../hooks/pre-tool-use.js";
import { homedir } from "node:os";

export const knowledgeFolders=["recipes","experiments","environments","claims","docs/mongoose"];
export const inforDomains=["docs.infor.com","developer.infor.com","support.infor.com"];
export function rolePolicy(cfg:HarnessConfig,paths:ResolvedPaths,sid:string,role:ChatRole,cwd:string,mid?:string) {
  const p=generatedPolicy(cfg,paths,sid,{denyBrowserJavaScript:true},mid);
  const tools=role==="specialist"?["Read","Glob","Grep","WebFetch"]:[];
  const directories=role==="specialist"?knowledgeFolders.map(folder=>resolve(paths.factoryRoot,folder)).filter(existsSync):[];
  const root=realpathSync(paths.factoryRoot);
  for(const dir of directories)if(!realpathSync(dir).startsWith(root+sep))throw Error("Specialist knowledge folder resolves outside factoryRoot");
  const deny=["Write","Edit","Bash","PowerShell","WebSearch","Agent","Task","Skill","ToolSearch","NotebookEdit","SendMessage","mcp__*",
    ...[cwd,cfg.claude.configDir??join(homedir(),".claude"),join(homedir(),".claude.json"),resolve(paths.factoryRoot,"tools"),resolve(paths.factoryRoot,".git"),cfg.mongooseBrowserProfile,
      ...(cfg.mcp.secretsFile?[resolve(cfg.mcp.secretsFile,"..")]:[])].filter((path):path is string=>!!path).flatMap(path=>[`Read(${absolutePattern(path)})`,`Read(${absolutePattern(path)}/**)`])];
  const allow=directories.flatMap(dir=>[`Read(${absolutePattern(dir)}/**)`,`Glob(${absolutePattern(dir)}/**)`,`Grep(${absolutePattern(dir)}/**)`]);
  if(role==="specialist")allow.push(...inforDomains.map(domain=>`WebFetch(domain:${domain})`));else deny.push("Read","Glob","Grep","WebFetch");
  const settings={permissions:{defaultMode:"dontAsk",blockReadsOutsideWorkingDirectories:true,additionalDirectories:directories,allow,deny},hooks:p.settings.hooks};
  save(p.settingsFile,settings);
  if(role==="specialist")save(p.guardConfig,{...read<GuardConfig>(p.guardConfig),allowedWebDomains:inforDomains});
  const mcp=join(paths.dataDir,"mcp","empty.json");save(mcp,{mcpServers:{}});
  return {...p,settings,tools,deny,directories,mcp};
}
export function knowledgeIndexes(root:string):string {
  const indexes=["docs/mongoose/sources.md","docs/mongoose/guides/INDEX.md"];
  const sections=indexes.map(path=>`${path} (documentation index, unverified):\n${readFileSync(join(root,path),"utf8")}`);
  return `KNOWLEDGE ROOT: ${root}\nYour working directory is isolated. Resolve local index paths against this knowledge root, using absolute Read/Glob/Grep paths within the permitted read-only folders.\n\n${sections.join("\n\n")}`;
}
export function specialistKnowledge():string {
  return [
    "You are the primary Claude Mongoose specialist. Read-only local knowledge only; no browser, mutations, authentication, shell or delegation.",
    "Environment: Infor Mongoose 2026.09.08. Prefer that version's sources.",
    "Read docs/mongoose/sources.md and docs/mongoose/guides/INDEX.md, supplied first in the task, then relevant local guide files BEFORE using WebFetch. Formatting-only guide conversions are unverified; cite each relied-on guide page's Source URL as well as its local path.",
    "Label the source rank and trust in EVERY answer: verified recipes/records > observed records > documentation and video transcripts (unverified) > model knowledge (unverified). Structured transcripts are paraphrases; check raw transcripts for exact steps or spellings.",
    "WebFetch is allowed only for docs.infor.com, developer.infor.com and support.infor.com. Never overwrite the operator-maintained sources.md.",
    "You may request an external second opinion by replying ONLY with one fenced JSON block: {\"protocol\":\"mongoose-harness/external-second-opinion-v1\",\"question\":\"one bounded Mongoose question\"}. The harness returns the reply only to you. Respect its per-run allowance; finish with the normal specialist answer after consulting it.",
    "Every external reply is external model knowledge, unverified. It can never satisfy an acceptance check or count as evidence; reconcile it against higher-ranked sources and do not promote its claims to observations.",
  ].join("\n\n");
}
