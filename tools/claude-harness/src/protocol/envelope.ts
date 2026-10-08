import { z } from "zod";

export const PROTOCOL_ID = "mongoose-harness/v1";
export const SPECIALIST_PROTOCOL_ID = "mongoose-harness/specialist-v1";

export const ACTIONS = ["SEND_TO_OPENCODE", "ASK_SPECIALIST", "NEW_OPENCODE_SESSION", "EXPERIMENT_COMPLETE", "PAUSE"] as const;
export type Action = (typeof ACTIONS)[number];

export const CLASSIFICATIONS = ["observed", "candidate_procedure", "replay_verified", "unresolved"] as const;

const CheckSchema = z.object({
  id: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(["passed", "failed", "pending", "not_applicable"]),
  evidence_refs: z.array(z.string()).default([]),
});

const FindingSchema = z.object({
  statement: z.string().min(1),
  classification: z.enum(CLASSIFICATIONS),
  evidence_refs: z.array(z.string()).default([]),
});

export const HandoffSchema = z.object({
  completed_steps: z.array(z.string()),
  observed_facts: z.array(z.string()),
  unverified_hypotheses: z.array(z.string()),
  unresolved_questions: z.array(z.string()),
  documentation_changes: z.array(z.string()),
  next_permitted_action: z.string().min(1),
  target_artifacts: z.array(z.string()).default([]),
});
export type HandoffData = z.infer<typeof HandoffSchema>;

export const EnvelopeSchema = z
  .object({
    protocol: z.literal(PROTOCOL_ID),
    run_id: z.string().min(1),
    experiment_id: z.string().min(1),
    cycle_id: z.number().int().positive(),
    action: z.enum(ACTIONS),
    reason: z.string().min(1),
    message: z.string().optional(),
    evidence_refs: z.array(z.string()).default([]),
    acceptance_checks: z.array(CheckSchema).default([]),
    requires_attachments: z.array(z.string()).default([]),
    findings: z.array(FindingSchema).default([]),
    handoff: HandoffSchema.optional(),
    outcome: z.enum(["accepted", "blocked"]).optional(),
  })
  .superRefine((e, ctx) => {
    const need = (cond: boolean, path: string, msg: string) => {
      if (!cond) ctx.addIssue({ code: "custom", path: [path], message: msg });
    };
    const hasMsg = typeof e.message === "string" && e.message.trim().length > 0;
    switch (e.action) {
      case "SEND_TO_OPENCODE":
        need(hasMsg, "message", "SEND_TO_OPENCODE requires a non-empty message");
        break;
      case "ASK_SPECIALIST":
        need(hasMsg, "message", "ASK_SPECIALIST requires the question in message");
        break;
      case "NEW_OPENCODE_SESSION":
        need(hasMsg, "message", "NEW_OPENCODE_SESSION requires the first task in message");
        need(!!e.handoff, "handoff", "NEW_OPENCODE_SESSION requires a handoff object");
        break;
      case "EXPERIMENT_COMPLETE":
        need(!!e.outcome, "outcome", "EXPERIMENT_COMPLETE requires outcome accepted|blocked");
        need(e.acceptance_checks.length > 0, "acceptance_checks", "EXPERIMENT_COMPLETE requires acceptance_checks");
        need(e.evidence_refs.length > 0, "evidence_refs", "EXPERIMENT_COMPLETE requires evidence_refs");
        break;
      case "PAUSE":
        break;
    }
  });
export type Envelope = z.infer<typeof EnvelopeSchema>;

export const SpecialistEnvelopeSchema = z.object({
  protocol: z.literal(SPECIALIST_PROTOCOL_ID),
  consultation_id: z.string().min(1),
  verdict: z.enum(["supports", "objects", "insufficient_evidence", "informational"]),
  required_verifications: z.array(z.string()).default([]),
});
export type SpecialistEnvelope = z.infer<typeof SpecialistEnvelopeSchema>;

export interface FencedBlock {
  lang: string;
  body: string;
}

/** Fenced code blocks (``` or ~~~) in markdown order. */
export function fencedBlocks(markdown: string): FencedBlock[] {
  const out: FencedBlock[] = [];
  const re = /^[ \t]*(`{3,}|~{3,})[ \t]*([\w.+-]*)[^\n]*\n([\s\S]*?)^[ \t]*\1[ \t]*$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(markdown))) out.push({ lang: m[2].toLowerCase(), body: m[3] });
  return out;
}

export type Extraction<T> =
  | { status: "found"; value: T; raw: string }
  | { status: "none" }
  | { status: "multiple"; count: number }
  | { status: "invalid_json"; raw: string; error: string }
  | { status: "invalid_schema"; raw: string; issues: string[]; partial: unknown };

function extract<T>(markdown: string, protocolId: string, schema: z.ZodType<T>): Extraction<T> {
  const candidates = fencedBlocks(markdown).filter((b) => b.body.includes(protocolId));
  if (candidates.length === 0) return { status: "none" };
  if (candidates.length > 1) return { status: "multiple", count: candidates.length };
  const raw = candidates[0].body.trim();
  let obj: unknown;
  try {
    obj = JSON.parse(raw);
  } catch (e) {
    return { status: "invalid_json", raw, error: (e as Error).message };
  }
  const parsed = schema.safeParse(obj);
  if (!parsed.success) {
    return { status: "invalid_schema", raw, partial: obj, issues: parsed.error.issues.map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`) };
  }
  return { status: "found", value: parsed.data, raw };
}

export function extractEnvelope(markdown: string): Extraction<Envelope> {
  return extract(markdown, PROTOCOL_ID, EnvelopeSchema as unknown as z.ZodType<Envelope>);
}

export function extractSpecialistEnvelope(markdown: string): Extraction<SpecialistEnvelope> {
  return extract(markdown, SPECIALIST_PROTOCOL_ID, SpecialistEnvelopeSchema as unknown as z.ZodType<SpecialistEnvelope>);
}
