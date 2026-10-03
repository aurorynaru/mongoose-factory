import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { z } from "zod";
import type { OcMessage } from "../adapters/opencode/client.js";
import { sha256 } from "../util/ids.js";
import { redactString } from "../util/log.js";

export const ImageSchema = z.object({ id: z.string(), url: z.string().regex(/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/) });
export const CaseSchema = z.object({
  id: z.string().min(1),
  source: z.object({ runId: z.string(), sessionId: z.string(), checkpointMessageId: z.string(), taskId: z.string(), baselineModel: z.string() }),
  context: z.string().min(1),
  observationIds: z.array(z.string()),
  availableTools: z.array(z.string()).default([]),
  images: z.array(ImageSchema),
  // For reviewers only. Never included in the candidate's request or input hash.
  baseline: z.string(),
  reviewNotes: z.string().default(""),
});
export const DatasetSchema = z.object({
  format: z.literal("mongoose-shadow-dataset/v1"),
  name: z.string().min(1), createdAt: z.string(),
  capture: z.object({ historyMode: z.enum(["task", "session"]).default("session"), maxContextChars: z.number().int().positive(), maxImages: z.number().int().nonnegative(), eligible: z.number().int(), skipped: z.number().int() }),
  cases: z.array(CaseSchema).min(1),
}).superRefine((v, ctx) => {
  if (new Set(v.cases.map(c => c.id)).size !== v.cases.length) ctx.addIssue({ code: "custom", message: "Duplicate case IDs" });
});
export type ShadowCase = z.infer<typeof CaseSchema>;
export type Dataset = z.infer<typeof DatasetSchema>;

/** Scrub structured credential fields and common embedded credential labels; never open secret files. */
export function scrubText(text: string): string {
  return redactString(text)
    .replace(/(Bearer\s+)[A-Za-z0-9._~+\/-]+/gi, "$1[REDACTED]")
    .replace(/((?:password|passwd|api[_-]?key|access[_-]?token|authorization|cookie)["']?\s*[=:]\s*)("[^"\r\n]*"|'[^'\r\n]*'|[^\s,;}]+)/gi, (full: string, label: string, value: string) => {
      if (/^["']?SECRET_MONGOOSE_(USERNAME|PASSWORD|TENANT)["']?$/.test(value)) return full;
      const quote = /^["']/.test(value) ? value[0] : "";
      return `${label}${quote}[REDACTED]${quote}`;
    })
    .replace(/((?:https?):\/\/)[^\s/@]+:[^\s/@]+@/gi, "$1[REDACTED]@");
}

function scrub(value: unknown): unknown {
  if (typeof value === "string") return scrubText(value);
  if (Array.isArray(value)) return value.map(scrub);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k,
    /password|passwd|secret|api[_-]?key|authorization|cookie|credential|access[_-]?token/i.test(k) ? "[REDACTED]" : scrub(v)]));
  return value;
}

function render(m: OcMessage): { text: string; ids: string[]; images: z.infer<typeof ImageSchema>[] } {
  const parts: string[] = [], ids: string[] = [], images: z.infer<typeof ImageSchema>[] = [];
  for (const [i, p] of m.parts.entries()) {
    const id = p.id || `${m.info.id}-part-${i}`;
    if (p.type === "text" && p.text && !p.synthetic) { parts.push(`[${id}] ${scrubText(p.text)}`); ids.push(id); }
    if (p.type === "tool") {
      parts.push(`[${id}] tool=${p.tool} status=${p.state?.status}\ninput=${JSON.stringify(scrub(p.state?.input ?? {}))}\noutput=${typeof p.state?.output === "string" ? scrubText(p.state.output) : JSON.stringify(scrub(p.state?.output ?? null))}${p.state?.error ? `\nerror=${scrubText(p.state.error)}` : ""}`);
      ids.push(id);
    }
    const files = [...(p.state?.attachments ?? []), ...(p.type === "file" && p.url ? [{ url: p.url, mime: p.mime }] : [])];
    for (const [n, f] of files.entries()) {
      if (!f.mime?.startsWith("image/")) continue;
      const parsed = ImageSchema.safeParse({ id: `${id}-image-${n}`, url: f.url });
      // Do not resolve local paths or fetch remote attachments. Their data might have changed.
      if (!parsed.success) throw new Error(`Image ${id} is not an embedded PNG/JPEG/WebP. Supply a curated embedded image instead.`);
      images.push(parsed.data); ids.push(parsed.data.id); parts.push(`[${parsed.data.id}] attached screenshot`);
    }
  }
  return { text: parts.length ? `### ${m.info.role} ${m.info.id}\n${parts.join("\n")}` : "", ids, images };
}

/** Prefixes only: the withheld assistant reply and all later work are excluded. No current knowledge is read. */
export function captureDataset(name: string, runs: Array<{ runId: string; sessionId: string; messages: OcMessage[] }>,
  opts: { maxCases: number; maxContextChars: number; maxImages: number; historyMode?: "task" | "session" }): Dataset {
  const candidates: ShadowCase[] = [];
  let skipped = 0;
  for (const run of runs) {
    const messages = [...run.messages].sort((a, b) => a.info.time.created - b.info.time.created || a.info.id.localeCompare(b.info.id));
    // Names only: this is the partial tool inventory used by the source session, not future observations or actions.
    const availableTools = [...new Set(messages.flatMap(m => m.parts.flatMap(p => p.type === "tool" && p.tool ? [p.tool] : [])))].sort();
    let context = "", ids: string[] = [], images: z.infer<typeof ImageSchema>[] = [], taskId = "", parentId = "";
    const priorReports: Array<{ text: string; id: string }> = [];
    for (const m of messages) {
      if (m.info.sessionID !== run.sessionId) throw new Error("Export contains messages from a different session");
      if (m.info.role === "user") {
        const task = m.parts.map(p => p.text ?? "").join("\n").match(/\[HARNESS WORKER TASK[^\]]*task=(T\d+)/);
        if (task && opts.historyMode === "task") {
          context = "HISTORY MODE: bounded task. Earlier tasks' tool observations and screenshots are omitted. Prior worker reports below are historical model claims, not independently verified facts. Inspect current state before acting.\n" + priorReports.map(r => `[${r.id}] ${r.text}`).join("\n\n");
          ids = priorReports.map(r => r.id); images = [];
        }
        taskId = task?.[1] ?? ""; parentId = m.info.id;
      }
      if (taskId && m.info.role === "assistant" && m.info.parentID === parentId && m.parts.some(p => (p.type === "tool") || (p.type === "text" && p.text && !p.synthetic))) {
        if (context.length > opts.maxContextChars || images.length > opts.maxImages) skipped++;
        else candidates.push({
          id: `${run.sessionId}-${m.info.id}`, source: { runId: run.runId, sessionId: run.sessionId, checkpointMessageId: m.info.id, taskId,
            baselineModel: `${m.info.providerID ?? "unknown"}/${m.info.modelID ?? "unknown"}` },
          context, observationIds: [...ids], availableTools, images: [...images], baseline: render(m).text, reviewNotes: "",
        });
      }
      const rendered = render(m);
      if (m.info.role === "assistant") for (const p of m.parts) if (p.type === "text" && p.text?.includes("HARNESS REPORT") && !p.synthetic) priorReports.push({ id: p.id, text: scrubText(p.text) });
      if (rendered.text) context += `${context ? "\n\n" : ""}${rendered.text}`;
      ids = [...ids, ...rendered.ids]; images = [...images, ...rendered.images];
    }
  }
  // Evenly sample eligible decision points, preserving chronological order.
  const count = Math.min(opts.maxCases, candidates.length);
  const selected = Array.from({ length: count }, (_, i) => candidates[count === 1 ? 0 : Math.round(i * (candidates.length - 1) / (count - 1))]);
  if (!selected.length) throw new Error("No eligible worker checkpoints. Check the exported session and capture limits.");
  return DatasetSchema.parse({ format: "mongoose-shadow-dataset/v1", name, createdAt: new Date().toISOString(),
    capture: { historyMode: opts.historyMode ?? "session", maxContextChars: opts.maxContextChars, maxImages: opts.maxImages, eligible: candidates.length, skipped }, cases: selected });
}

export function inputOf(c: ShadowCase) { return { id: c.id, context: c.context, observationIds: c.observationIds, availableTools: c.availableTools, images: c.images }; }
export function inputHash(dataset: Dataset): string { return sha256(JSON.stringify(dataset.cases.map(inputOf))); }
export function loadDataset(path: string): Dataset { return DatasetSchema.parse(JSON.parse(readFileSync(path, "utf8"))); }
export function saveJson(path: string, value: unknown): void { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, JSON.stringify(value, null, 2) + "\n", "utf8"); }

/** Local review copy, with embedded historical images decoded into ignored assets for viewing. */
export function writeDatasetReview(path: string, dataset: Dataset): void {
  const assetName = `${dataset.name}.assets`, assetDir = join(dirname(path), assetName);
  const code = (s: string) => { const longest = Math.max(2, ...(s.match(/`+/g) ?? []).map(x => x.length)); const fence = "`".repeat(longest + 1); return `${fence}\n${s}\n${fence}`; };
  let text = `# Frozen checkpoints: ${dataset.name}\n\nReview task scope, historical observations, screenshots, and expected behavior. Historical replies are withheld from candidates and are not ground truth. Automatic redaction cannot sanitize screenshot pixels or every unlabeled credential. Keep this local.\n\n`;
  for (const c of dataset.cases) {
    text += `## ${c.id}\n\nSource: ${c.source.runId}, ${c.source.taskId}, ${c.source.baselineModel}\nTool names used by the source session: ${c.availableTools.join(", ")}\n\n### Candidate context\n\n${code(c.context)}\n\n`;
    for (const img of c.images) {
      const ext = img.url.startsWith("data:image/jpeg") ? "jpg" : img.url.startsWith("data:image/webp") ? "webp" : "png";
      const file = `${sha256(img.url).slice(0, 24)}.${ext}`;
      mkdirSync(assetDir, { recursive: true }); writeFileSync(join(assetDir, file), Buffer.from(img.url.split(",")[1], "base64"));
      text += `Observation ${img.id}:\n\n![Historical screenshot](${assetName}/${file})\n\n`;
    }
    text += `### Withheld historical next reply (review only)\n\n${code(c.baseline)}\n\nReview notes: ${c.reviewNotes || "unreviewed"}\n\n`;
  }
  writeFileSync(path, text, "utf8");
}
