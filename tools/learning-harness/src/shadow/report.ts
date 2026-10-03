import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";
import { saveJson, scrubText } from "./dataset.js";
import type { Review, ShadowResult } from "./runner.js";

const ReviewSchema = z.object({ correctness: z.number().int().min(0).max(2), evidence: z.number().int().min(0).max(2), safety: z.enum(["pass", "fail"]), reviewer: z.string().min(1), note: z.string().min(1) });
const ResultSchema = z.object({
  format: z.literal("mongoose-shadow-result/v1"), id: z.string(), datasetName: z.string(), datasetHash: z.string(), promptHash: z.string(), model: z.string(), endpoint: z.string(),
  plannedTrials: z.number().int().positive(),
  settings: z.object({ repeats: z.number().int().positive(), timeoutMs: z.number().positive(), maxTokens: z.number().int().positive(), temperature: z.number(), modelOptions: z.record(z.string(), z.unknown()) }),
  startedAt: z.string(), completedAt: z.string().optional(), trials: z.array(z.object({
    caseId: z.string(), repeat: z.number().int().positive(), inputHash: z.string(), durationMs: z.number().nonnegative(),
    status: z.enum(["completed", "invalid", "failed", "timeout", "interrupted"]), response: z.string(), issues: z.array(z.string()),
    decision: z.unknown().optional(), finishReason: z.string().optional(), returnedModel: z.string().optional(),
    usage: z.object({ input: z.number().nonnegative().nullable(), output: z.number().nonnegative().nullable(), reasoning: z.number().nonnegative().nullable() }),
    review: ReviewSchema.optional(),
  })),
});

export function loadResult(dir: string): ShadowResult {
  return ResultSchema.parse(JSON.parse(readFileSync(join(dir, "result.json"), "utf8"))) as ShadowResult;
}

export function summarize(r: ShadowResult) {
  const reviews = r.trials.flatMap(t => t.review ? [t.review] : []);
  const seconds = r.trials.map(t => t.durationMs / 1000).sort((a, b) => a - b);
  const median = seconds.length ? (seconds[Math.floor((seconds.length - 1) / 2)] + seconds[Math.floor(seconds.length / 2)]) / 2 : null;
  const avg = (key: "correctness" | "evidence") => reviews.length ? reviews.reduce((n, x) => n + x[key], 0) / reviews.length : null;
  const tokens = (key: "input" | "output" | "reasoning") => r.trials.length && r.trials.every(t => t.usage[key] !== null) ? r.trials.reduce((n, t) => n + t.usage[key]!, 0) : null;
  return { trials: r.trials.length, completed: r.trials.filter(t => t.status === "completed").length,
    invalid: r.trials.filter(t => t.status === "invalid").length, failed: r.trials.filter(t => ["failed", "timeout", "interrupted"].includes(t.status)).length,
    reviewed: reviews.length, safetyFailures: reviews.filter(x => x.safety === "fail").length, correctness: avg("correctness"), evidence: avg("evidence"), medianSeconds: median,
    inputTokens: tokens("input"), outputTokens: tokens("output"), reasoningTokens: tokens("reasoning") };
}

function display(n: number | null): string { return n === null ? "unknown" : Number.isInteger(n) ? String(n) : n.toFixed(2); }
function cell(s: string): string { return s.replace(/\|/g, "\\|").replace(/[\r\n]/g, " "); }
export function renderReport(r: ShadowResult): string {
  const s = summarize(r);
  return `# Shadow test ${r.id}\n\nModel: ${r.model}\nDataset: ${r.datasetName}\nInput hash: ${r.datasetHash}\n\n` +
    `Decision-only evaluation; no proposed tools executed. JSON validity is not a correctness or safety score. Historical baseline actions are comparison material, not ground truth.\n\n` +
    `Recorded trials: ${s.trials}/${r.plannedTrials} planned. Completed valid responses: ${s.completed}/${s.trials}; invalid: ${s.invalid}; failed/timeout/interrupted: ${s.failed}.\nReviewed: ${s.reviewed}/${s.trials}; safety failures: ${s.safetyFailures}.\n` +
    `Correctness: ${display(s.correctness)}/2; evidence: ${display(s.evidence)}/2; median response time: ${display(s.medianSeconds)} s.\nTokens: input ${display(s.inputTokens)}, output ${display(s.outputTokens)}, reasoning ${display(s.reasoningTokens)} (provider-reported).\n\n` +
    `Settings: \`${JSON.stringify(r.settings)}\`\n\n| Case | Trial | Status | Seconds | Correctness | Evidence | Safety |\n|---|---:|---|---:|---:|---:|---|\n` +
    r.trials.map(t => `| ${cell(t.caseId)} | ${t.repeat} | ${t.status} | ${(t.durationMs / 1000).toFixed(2)} | ${t.review?.correctness ?? "ungraded"} | ${t.review?.evidence ?? "ungraded"} | ${t.review?.safety ?? "ungraded"} |`).join("\n") +
    `\n\nRead result.json for the proposed actions, errors, and review notes; dataset.json contains the withheld historical replies.\n`;
}

export function writeReport(dir: string, r: ShadowResult): void { writeFileSync(join(dir, "report.md"), renderReport(r), "utf8"); }
export function gradeResult(dir: string, caseId: string, repeat: number, grade: Review): ShadowResult {
  const r = loadResult(dir);
  if (!r.completedAt) throw new Error("Wait for the shadow run to finish before grading");
  const t = r.trials.find(t => t.caseId === caseId && t.repeat === repeat);
  if (!t) throw new Error("Unknown case/trial in this result");
  t.review = ReviewSchema.parse({ ...grade, note: scrubText(grade.note), reviewer: scrubText(grade.reviewer) });
  saveJson(join(dir, "result.json"), r); writeReport(dir, r); return r;
}

export function compareResults(left: ShadowResult, right: ShadowResult): string {
  if (!left.completedAt || !right.completedAt) throw new Error("Both shadow runs must finish before comparison");
  if (left.trials.length !== left.plannedTrials || right.trials.length !== right.plannedTrials) throw new Error("Comparison requires all planned trials; rerun canceled or partial runs");
  if (left.datasetHash !== right.datasetHash || left.promptHash !== right.promptHash) throw new Error("Comparison requires identical frozen inputs and shadow prompt versions");
  for (const k of ["repeats", "timeoutMs", "maxTokens", "temperature"] as const) if (left.settings[k] !== right.settings[k]) throw new Error(`Comparison requires identical ${k}`);
  const key = (t: ShadowResult["trials"][number]) => `${t.caseId}#${t.repeat}`;
  const a = new Map(left.trials.map(t => [key(t), t.inputHash])), b = new Map(right.trials.map(t => [key(t), t.inputHash]));
  if (!a.size || a.size !== left.trials.length || b.size !== right.trials.length || a.size !== b.size || [...a].some(([k, v]) => b.get(k) !== v)) throw new Error("Comparison requires identical case/trial coverage and actual request inputs");
  const x = summarize(left), y = summarize(right);
  const rows = [
    ["Valid responses / trials", `${x.completed}/${x.trials}`, `${y.completed}/${y.trials}`],
    ["Invalid", x.invalid, y.invalid], ["Failed / timeout / interrupted", x.failed, y.failed],
    ["Reviewed / trials", `${x.reviewed}/${x.trials}`, `${y.reviewed}/${y.trials}`], ["Safety failures (reviewed)", x.safetyFailures, y.safetyFailures],
    ["Correctness / 2 (reviewed)", display(x.correctness), display(y.correctness)], ["Evidence / 2 (reviewed)", display(x.evidence), display(y.evidence)],
    ["Median seconds", display(x.medianSeconds), display(y.medianSeconds)], ["Input tokens", display(x.inputTokens), display(y.inputTokens)],
    ["Output tokens", display(x.outputTokens), display(y.outputTokens)], ["Reasoning tokens", display(x.reasoningTokens), display(y.reasoningTokens)],
  ];
  return `# Shadow comparison\n\n| Measure | ${cell(left.model)} | ${cell(right.model)} |\n|---|---:|---:|\n` + rows.map(row => `| ${row.join(" | ")} |`).join("\n") +
    `\n\n${x.reviewed < x.trials || y.reviewed < y.trials ? "Review incomplete: no model-quality conclusion is available." : "Review complete. Consider safety and correctness before speed; these checkpoints do not establish live Mongoose completion or persistence."}\n\n` +
    `Model options (may differ): ${left.model} \`${JSON.stringify(left.settings.modelOptions)}\`; ${right.model} \`${JSON.stringify(right.settings.modelOptions)}\`.\nLatency includes model loading/prefill and local runtime effects; historical timing is not used as the paired baseline.\n`;
}
