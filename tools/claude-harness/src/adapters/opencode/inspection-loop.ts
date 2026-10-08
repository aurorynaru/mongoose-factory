import type { OcMessage } from "./client.js";
import { createHash } from "node:crypto";

/** Observe finished shell calls; never execute/replay commands as recovery. */
export function repeatedShellCalls(replies: OcMessage[], maxCalls: number): string | null {
  if (maxCalls <= 0) return null;
  const tools = replies.flatMap((m) => m.parts.filter((p) => p.type === "tool"));
  if (tools.some((p) => p.state?.status === "running" || p.state?.status === "pending")) return null;
  let fingerprint = "";
  let repeats = 0;
  let name = "";
  for (const p of tools.slice(-24)) {
    if (!/^(?:bash|shell|powershell)$/.test(p.tool ?? "") || p.state?.status !== "completed" || p.state.output === undefined) {
      fingerprint = ""; repeats = 0; continue;
    }
    const current = createHash("sha256").update(JSON.stringify([p.tool, p.state.input, p.state.output])).digest("hex");
    repeats = current === fingerprint ? repeats + 1 : 1;
    fingerprint = current;
    name = p.tool!;
  }
  return repeats >= maxCalls
    ? `${name} repeated identical arguments and returned the same result ${repeats} consecutive times without another tool or a changed result. Successful execution does not prove progress. Do not replay the command: it may already have had side effects. Preserve partial results, verify the intended postcondition through one permitted inspection, and report a blocker if unresolved. Do not install modules or expand recovery beyond the experiment's scope.`
    : null;
}

/** Exact repetition only; run-code tools can mutate and are never replayed. */
export function repeatedBrowserReads(replies: OcMessage[], maxReads: number): string | null {
  if (maxReads <= 0) return null;
  const tools = replies.flatMap((m) => m.parts.filter((p) => p.type === "tool"));
  if (tools.some((p) => p.state?.status === "running" || p.state?.status === "pending")) return null;
  let fingerprint = "";
  let repeats = 0;
  let name = "";
  for (const p of tools.slice(-24)) {
    // Evaluate can execute arbitrary JS. This guard only observes finished calls;
    // recovery must never replay the script or assume it had no side effects.
    if (!/(?:^|_)browser_(?:snapshot|evaluate|run_code(?:_unsafe)?)$/.test(p.tool ?? "") ||
      p.state?.status !== "completed" || p.state.output === undefined) {
      fingerprint = ""; repeats = 0; continue;
    }
    const current = createHash("sha256").update(JSON.stringify([p.tool, p.state.input, p.state.output])).digest("hex");
    repeats = current === fingerprint ? repeats + 1 : 1;
    fingerprint = current;
    name = p.tool!;
  }
  return repeats >= maxReads
    ? `${name} repeated identical arguments and returned the same result ${repeats} consecutive times without another tool or a changed result. Successful execution does not prove progress. Do not repeat those arguments or scripts; inspect the current page once using allowed rendered UI, then report a blocker if the required state remains unclear. Earlier actions may have had side effects; verify postconditions before any mutation.`
    : null;
}

/** Detect the observed stale-reference loop, not legitimate repeated browser reads. */
export function inspectionLoop(replies: OcMessage[], maxFailures: number): string | null {
  if (maxFailures <= 0) return null;
  const tools = replies.flatMap((m) => m.parts.filter((p) => p.type === "tool"));
  // Defer if the fetched history shows an in-flight tool: it could be a mutation.
  if (tools.some((p) => p.state?.status === "running" || p.state?.status === "pending")) return null;
  const failures = new Map<string, number>();
  for (const p of tools.slice(-24)) {
    const snapshot = /(?:^|_)browser_snapshot$/.test(p.tool ?? "");
    const target = p.state?.input?.target;
    if (p.state?.status === "completed" && (!snapshot || typeof target !== "string" || !target)) {
      // A fresh page snapshot or a different successful tool is a recovery attempt.
      failures.clear();
    } else if (snapshot && typeof target === "string" && p.state?.status === "error" &&
      /\bRef\s+\S+\s+not found in the current page snapshot\b/i.test(p.state.error ?? "")) {
      failures.set(target, (failures.get(target) ?? 0) + 1);
    }
  }
  const last = tools.at(-1);
  if (!last || !/(?:^|_)browser_snapshot$/.test(last.tool ?? "")) return null;
  for (const [target, count] of failures) {
    if (count >= maxFailures) return `Snapshot target ${target} failed with a missing-reference error ${count} times in the last 24 tool calls without a fresh page snapshot or another successful tool. Capture one fresh snapshot without a target, use its current references, and report a blocker if identity cannot be verified. Do not blindly repeat or mutate.`;
  }
  return null;
}
