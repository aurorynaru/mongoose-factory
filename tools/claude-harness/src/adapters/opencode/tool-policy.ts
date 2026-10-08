import type { Brief } from "../../brief.js";
import type { WorkerToolPolicy } from "../types.js";
import type { OcPermissionRule } from "./client.js";

/** Recognize explicit legacy prohibitions, not general mentions of Form scripts.
 * For ambiguous wording use the structured worker_tool_policy in the brief.
 */
export function workerPolicyForBrief(brief: Pick<Brief, "prohibited_actions" | "worker_tool_policy" | "allow_literal_key_text" | "exact_values">): WorkerToolPolicy {
  const denied = brief.prohibited_actions.some((text) =>
    /\bno[-\s]+javascript\b/i.test(text) ||
    /\b(?:do not|never)\s+use\b[^.;\n]*\bjavascript\s+evaluation\b/i.test(text) ||
    /^\s*javascript\s+evaluation\s*[.!]?\s*$/i.test(text));
  return { denyBrowserJavaScript: brief.worker_tool_policy?.deny_browser_javascript === true || denied,
    ...(brief.allow_literal_key_text === undefined ? {} : { allowLiteralKeyText: brief.allow_literal_key_text }),
    ...(brief.exact_values === undefined ? {} : { exactValues: brief.exact_values }) };
}

export function requiredToolRules(policy: WorkerToolPolicy): OcPermissionRule[] {
  return [
    { permission: "doom_loop", pattern: "*", action: "deny" },
    ...(policy.denyBrowserJavaScript ? ["*browser_evaluate", "*browser_run_code", "*browser_run_code_unsafe"].map((permission) =>
      ({ permission, pattern: "*", action: "deny" as const })) : []),
  ];
}

/** Append denials with final-match precedence; never introduce an allow rule or
 * remove existing restrictions when a later brief is less restrictive.
 */
export function restrictToolRules(existing: OcPermissionRule[], policy: WorkerToolPolicy): OcPermissionRule[] {
  const required = requiredToolRules(policy);
  return [...existing.filter((r) => !required.some((x) => x.permission === r.permission && x.pattern === r.pattern && x.action === r.action)), ...required];
}
