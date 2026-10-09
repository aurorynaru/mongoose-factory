import { resolve as resolveTaskPath } from "node:path";
import type { PermissionDenial } from "../types.js";
import { absolutePattern } from "./tool-policy.js";

/** Classify against the deny rules saved for this task, never the current config.
 * Only the literal paths and whole-tool rules we generate are recognized.
 * Unknown inputs/rules fail closed; this does not grant or enforce permissions. */
export function intentionallyDenied(denial: PermissionDenial, rules: readonly string[], cwd: string): boolean {
  if(rules.includes(denial.tool_name))return true;
  const aliases:Record<string,string>={Write:"Edit",Glob:"Read",Grep:"Read"};
  const tool=aliases[denial.tool_name]??denial.tool_name;
  if(!["Read","Edit"].includes(tool))return false;
  const input=denial.tool_input;
  const path=input?.file_path??(["Glob","Grep"].includes(denial.tool_name)?input?.path:undefined);
  if(typeof path!=="string"||!path||path.includes("\0"))return false;
  // absolutePattern uses resolve; resolve relative inputs against the worker cwd.
  const target=absolutePattern(resolveTaskPath(cwd,path));
  const fold=(value:string)=>process.platform==="win32"?value.toLowerCase():value;
  for(const rule of rules) {
    if(!rule.startsWith(`${tool}(`)||!rule.endsWith(")"))continue;
    const pattern=rule.slice(tool.length+1,-1),recursive=pattern.endsWith("/**");
    const base=recursive?pattern.slice(0,-3):pattern;
    // Other glob syntax is unsupported; escaped metacharacters are literal.
    if(!base.startsWith("//")||base.length<=2||/(?<!\\)[*?\[\]!]/.test(base))continue;
    if(fold(target)===fold(base)||(recursive&&fold(target).startsWith(fold(base)+"/")))return true;
  }
  return false;
}
