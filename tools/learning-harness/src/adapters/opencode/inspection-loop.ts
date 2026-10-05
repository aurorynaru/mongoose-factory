import type { OcMessage } from "./client.js";

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
