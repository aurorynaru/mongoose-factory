import { existsSync, readdirSync, readFileSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";
import { z } from "zod";
import { sha256 } from "./util/ids.js";

/**
 * An experiment brief is the explicit, operator-reviewed selection of ONE experiment
 * and its boundaries. The harness never infers the next experiment on its own.
 */
export const BriefSchema = z.object({
  experiment_id: z.string().regex(/^EXP-\d{3,}(-R\d+)?$/, "experiment_id must look like EXP-004 or EXP-004-R2"),
  title: z.string().min(1),
  record_path: z.string().min(1),
  /** true for a brand-new experiment: the worker creates record_path during the run. */
  new_record: z.boolean().default(false),
  reviewed: z.boolean(),
  objective: z.string().min(1),
  scope: z.object({
    in_scope: z.array(z.string()).min(1),
    out_of_scope: z.array(z.string()).default([]),
  }),
  prohibited_actions: z.array(z.string()).default([]),
  allow_literal_key_text: z.boolean().optional(),
  exact_values: z.array(z.string().min(1)).optional().refine(values => {
    const folded = (values ?? []).map(v => v.toLowerCase());
    return new Set(folded).size === folded.length;
  }, "exact_values contains conflicting case-equivalent entries"),
  /** Additional enforced worker restrictions; textual prohibitions are still honored. */
  worker_tool_policy: z.object({ deny_browser_javascript: z.boolean().default(false) }).optional(),
  /** Case-insensitive regexes; a worker-bound message matching one requires operator review. */
  prohibited_patterns: z.array(z.string()).default([]),
  /** Other experiment IDs that may be mentioned (e.g. the experiment being replayed). */
  related_experiments: z.array(z.string()).default([]),
  environment: z.object({
    record: z.string().default("environments/current-environment.md"),
    editing_scope: z.string().min(1),
    notes: z.string().default(""),
  }),
  target: z.object({
    form: z.string().nullable().default(null),
    artifacts: z.array(z.string()).default([]),
  }),
  acceptance_checks: z.array(z.object({ id: z.string().min(1), description: z.string().min(1) })).default([]),
  evidence_dir: z.string().min(1),
  /** Set when this experiment is a replay; required before any finding may be classified replay_verified. */
  replay_of: z.string().nullable().default(null),
  initial_instruction: z.string().nullable().default(null),
  notes: z.string().default(""),
});
export type Brief = z.infer<typeof BriefSchema>;

export interface LoadedBrief {
  brief: Brief;
  path: string;
  hash: string;
}

export function loadBrief(pathOrId: string, briefsDir: string): LoadedBrief {
  let path = pathOrId;
  if (!pathOrId.endsWith(".json")) path = join(briefsDir, `${pathOrId}.brief.json`);
  else if (!isAbsolute(pathOrId) && !existsSync(pathOrId)) path = join(briefsDir, pathOrId);
  path = resolve(path);
  if (!existsSync(path)) throw new Error(`Brief not found: ${path}. Create one with: harness brief init <EXP-ID>`);
  const text = readFileSync(path, "utf8");
  const parsed = BriefSchema.safeParse(JSON.parse(text));
  if (!parsed.success) {
    throw new Error(`Invalid brief ${path}:\n${parsed.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`).join("\n")}`);
  }
  return { brief: parsed.data, path, hash: sha256(text) };
}

/** Problems that prevent starting a run with this brief. */
export function briefProblems(b: Brief, factoryRoot: string): string[] {
  const out: string[] = [];
  if (!b.reviewed) out.push('Brief has "reviewed": false. Review the scope and acceptance checks, then set it to true.');
  if (b.acceptance_checks.length === 0) out.push("Brief has no acceptance_checks; the run could never be completed.");
  if (!b.new_record && !existsSync(resolve(factoryRoot, b.record_path))) out.push(`record_path does not exist: ${b.record_path} (set "new_record": true for a new experiment)`);
  if (!/^experiments\/EXP-[^/]+\.md$/.test(b.record_path.replace(/\\/g, "/"))) out.push(`record_path must be experiments/<EXP-ID>-<name>.md`);
  for (const p of b.prohibited_patterns) {
    try {
      new RegExp(p, "i");
    } catch {
      out.push(`Invalid prohibited_pattern regex: ${p}`);
    }
  }
  if (JSON.stringify(b).includes("TODO")) out.push("Brief still contains TODO placeholders.");
  return out;
}

export interface RecordSummary {
  path: string;
  title: string;
  status: string | null;
  objective: string | null;
  outOfScope: string | null;
  result: string | null;
}

export function findRecord(factoryRoot: string, experimentId: string): string | null {
  const dir = join(factoryRoot, "experiments");
  if (!existsSync(dir)) return null;
  // EXP-004 must not match EXP-004-R2-*.md
  const chosen = readdirSync(dir).find(
    (f) =>
      f.endsWith(".md") &&
      (f === `${experimentId}.md` || (f.startsWith(`${experimentId}-`) && !/^R\d+-/.test(f.slice(experimentId.length + 1)))),
  );
  return chosen ? join("experiments", chosen) : null;
}

export function summarizeRecord(factoryRoot: string, recordPath: string): RecordSummary {
  const text = readFileSync(resolve(factoryRoot, recordPath), "utf8");
  const title = (text.match(/^#\s+(.+)$/m)?.[1] ?? recordPath).trim();
  const status = text.match(/^Status:\s*(.+)$/m)?.[1]?.replace(/\*\*/g, "").trim() ?? null;
  const lines = text.split(/\r?\n/);
  const section = (name: string) => {
    const start = lines.findIndex((l) => new RegExp(`^##\\s+${name}\\s*$`, "i").test(l));
    if (start < 0) return null;
    const rest = lines.slice(start + 1);
    const end = rest.findIndex((l) => /^##\s/.test(l));
    return (end < 0 ? rest : rest.slice(0, end)).join("\n").trim();
  };
  const outOfScope = text.match(/^Out of scope[^:]*:\s*(.+)$/im)?.[1]?.trim() ?? null;
  return { path: recordPath, title, status, objective: section("Objective"), outOfScope, result: section("Result") };
}

/** Draft a brief from an experiment record. The draft is unreviewed and contains TODOs by design. */
export function draftBrief(factoryRoot: string, experimentId: string): Brief {
  const recordPath = findRecord(factoryRoot, experimentId);
  if (!recordPath) throw new Error(`No experiment record for ${experimentId} under ${join(factoryRoot, "experiments")}`);
  const s = summarizeRecord(factoryRoot, recordPath);
  const objectiveFirstPara = (s.objective ?? "TODO: objective").split(/\n\s*\n/)[0].trim();
  const outOfScope = s.outOfScope
    ? s.outOfScope.replace(/\.$/, "").split(/,\s*/).map((x) => x.trim()).filter(Boolean)
    : [];
  const formMatch = s.objective?.match(/Form:\s*`([^`]+)`/);
  return {
    experiment_id: experimentId,
    title: s.title,
    record_path: recordPath.replace(/\\/g, "/"),
    new_record: false,
    reviewed: false,
    objective: objectiveFirstPara,
    scope: {
      in_scope: ["TODO: list what this experiment may touch (derived from the record's Objective)"],
      out_of_scope: outOfScope,
    },
    prohibited_actions: [
      "Creating, modifying or deleting any non-FX_ artifact",
      "Starting any other experiment or replay",
      "Modifying production data or disabling security",
      "Reading or printing credential values",
    ],
    prohibited_patterns: [],
    related_experiments: [],
    environment: {
      record: "environments/current-environment.md",
      editing_scope: "User",
      notes: `Record status when drafted: ${s.status ?? "unknown"}`,
    },
    target: { form: formMatch ? formMatch[1] : null, artifacts: [] },
    acceptance_checks: [{ id: "AC-1", description: "TODO: observable postcondition with evidence" }],
    evidence_dir: `evidence/${experimentId}`,
    replay_of: /-R\d+$/.test(experimentId) ? experimentId.replace(/-R\d+$/, "") : null,
    initial_instruction: null,
    notes: "",
  };
}

export function briefHashOf(text: string): string {
  return sha256(text);
}
