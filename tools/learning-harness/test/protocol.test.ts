import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { htmlToMarkdown } from "../src/adapters/chatgpt/extract.js";
import { parseConversationUrl } from "../src/adapters/chatgpt/selectors.js";
import { draftBrief, summarizeRecord } from "../src/brief.js";
import { ConfigSchema, configProblems } from "../src/config.js";
import { extractEnvelope, extractSpecialistEnvelope, fencedBlocks } from "../src/protocol/envelope.js";
import { DeepSeekInterpreter, vetCandidate } from "../src/protocol/interpreter.js";
import { clip, header, parseHeader } from "../src/protocol/prompts.js";
import { asksForUpload, checkEvidenceRef, completionProblems, scopeViolations } from "../src/protocol/validate.js";
import { fixtureBrief } from "../src/testing/scenario.js";
import { opencodeMessageId } from "../src/util/ids.js";
import { redact, registerSecret } from "../src/util/log.js";

const env = (o: Record<string, unknown>) => "```json\n" + JSON.stringify({ protocol: "mongoose-harness/v1", run_id: "R-1", experiment_id: "EXP-900", cycle_id: 2, reason: "r", ...o }) + "\n```";

describe("envelope extraction", () => {
  it("finds exactly one envelope among prose and other code blocks", () => {
    const md = `Prose first.\n\n\`\`\`sql\nselect 1\n\`\`\`\n\n${env({ action: "SEND_TO_OPENCODE", message: "Do X." })}\n\nTrailing prose.`;
    const r = extractEnvelope(md);
    expect(r.status).toBe("found");
    if (r.status === "found") expect(r.value.message).toBe("Do X.");
  });
  it("supports ~~~ fences and nested backticks", () => {
    expect(fencedBlocks("~~~json\n{}\n~~~")).toEqual([{ lang: "json", body: "{}\n" }]);
    expect(fencedBlocks("````md\n```inner```\n````")[0].body).toContain("```inner```");
  });
  it("enforces per-action required fields", () => {
    const a = extractEnvelope(env({ action: "SEND_TO_OPENCODE" }));
    expect(a.status).toBe("invalid_schema");
    const b = extractEnvelope(env({ action: "NEW_OPENCODE_SESSION", message: "go" }));
    expect(b.status === "invalid_schema" && b.issues.join()).toContain("handoff");
    const c = extractEnvelope(env({ action: "EXPERIMENT_COMPLETE" }));
    expect(c.status === "invalid_schema" && c.issues.join()).toMatch(/outcome.*acceptance_checks.*evidence_refs/s);
    expect(extractEnvelope(env({ action: "LAUNCH_MISSILES" })).status).toBe("invalid_schema");
  });
  it("reports none / multiple / invalid json distinctly", () => {
    expect(extractEnvelope("The experiment is done.").status).toBe("none");
    expect(extractEnvelope(env({ action: "PAUSE" }) + "\n" + env({ action: "PAUSE" })).status).toBe("multiple");
    expect(extractEnvelope('```json\n{"protocol":"mongoose-harness/v1",}\n```').status).toBe("invalid_json");
  });
  it("parses the specialist verdict block", () => {
    const r = extractSpecialistEnvelope('x\n```json\n{"protocol":"mongoose-harness/specialist-v1","consultation_id":"C1","verdict":"objects"}\n```');
    expect(r.status === "found" && r.value.verdict).toBe("objects");
  });
});

describe("validation helpers", () => {
  const b = fixtureBrief().brief;
  it("allows evidence-backed blocked completion after a specialist objection while still reviewing acceptance", () => {
    const root = mkdtempSync(join(tmpdir(), "specialist-gate-"));
    mkdirSync(join(root, "evidence"));
    writeFileSync(join(root, "evidence", "sign-in.png"), "screenshot");
    const ctx = { brief: b, factoryRoot: root, completedWorkerReports: 1, latestSpecialistVerdict: "objects" };
    const blocked = extractEnvelope(env({ action: "EXPERIMENT_COMPLETE", outcome: "blocked", evidence_refs: ["evidence/sign-in.png"], acceptance_checks: [{ id: "AC-5", status: "failed", evidence_refs: ["evidence/sign-in.png"] }] }));
    expect(blocked.status).toBe("found");
    if (blocked.status !== "found") return;
    expect(completionProblems(blocked.value, ctx)).toEqual([]);
    expect(completionProblems({ ...blocked.value, outcome: "accepted" }, ctx)).toContain("specialist_disagreement:objects");
  });
  it("flags foreign experiment ids and prohibited patterns, allows own id", () => {
    expect(scopeViolations("Continue EXP-900 step 3.", b)).toEqual([]);
    expect(scopeViolations("Now start EXP-901.", b)).toEqual(["foreign_experiment:EXP-901"]);
    expect(scopeViolations("Write a script that saves the form.", b)[0]).toMatch(/^prohibited_pattern/);
    // negated guardrails are not scope expansion (live false positive, EXP-005 cycle 2)
    expect(scopeViolations("Create only the form. Do not add components, scripts, bindings or an IDO.", b)).toEqual([]);
    expect(scopeViolations("Save it without creating any script.", b)).toEqual([]);
    // ...but a real instruction after a guardrail is still caught
    expect(scopeViolations("Do not touch other forms. Create a script that saves the form.", b)[0]).toMatch(/^prohibited_pattern/);
    // foreign experiment IDs stay strict, even when negated
    expect(scopeViolations("Do not start EXP-901.", b)).toEqual(["foreign_experiment:EXP-901"]);
  });
  it("rejects unsafe evidence paths", () => {
    const root = mkdtempSync(join(tmpdir(), "ev-"));
    mkdirSync(join(root, "evidence"), { recursive: true });
    writeFileSync(join(root, "evidence", "a.png"), "x");
    writeFileSync(join(root, "evidence", "empty.png"), "");
    expect(checkEvidenceRef("evidence/a.png", root).ok).toBe(true);
    expect(checkEvidenceRef("./evidence\\a.png", root).ok).toBe(true);
    expect(checkEvidenceRef("evidence/empty.png", root).problem).toBe("missing");
    expect(checkEvidenceRef("../secret.txt", root).problem).toBe("unsafe_path");
    expect(checkEvidenceRef("C:\\Windows\\win.ini", root).problem).toBe("unsafe_path");
    expect(checkEvidenceRef("https://example.com/x.png", root).problem).toBe("unsafe_path");
  });
  it("detects requests to upload files", () => {
    expect(asksForUpload("Could you please upload the screenshot of the Variables tab?")).toBe(true);
    expect(asksForUpload("The worker should capture a screenshot after reopen.")).toBe(false);
  });
});

describe("DeepSeek interpreter guard rails", () => {
  const exp = { runId: "R-1", experimentId: "EXP-900", cycleId: 3 };
  const res = (candidate: Record<string, unknown>, confidence: "high" | "low" = "high") => ({ found: true, confidence, unresolved: [], candidate, usage: { promptTokens: 0, completionTokens: 0, costUsd: 0 } });
  it("accepts a verbatim, explicit instruction and fills identifiers from context", () => {
    const raw = "Please SEND_TO_OPENCODE:  Reopen   the form and inspect Variables.";
    const v = vetCandidate(res({ action: "SEND_TO_OPENCODE", reason: "explicit", message: "Reopen the form and inspect Variables." }), raw, exp);
    expect(v.accept).toBe(true);
    if (v.accept) expect([v.envelope.run_id, v.envelope.cycle_id]).toEqual(["R-1", 3]);
  });
  it("rejects invented messages, invented evidence, low confidence and missing fields", () => {
    const raw = "Maybe look at the form again.";
    expect(vetCandidate(res({ action: "SEND_TO_OPENCODE", reason: "r", message: "Delete the form." }), raw, exp).accept).toBe(false);
    expect(vetCandidate(res({ action: "PAUSE", reason: "r", evidence_refs: ["evidence/x.png"] }), "pause please", exp).accept).toBe(false);
    expect(vetCandidate(res({ action: "PAUSE", reason: "r" }, "low"), "pause please", exp).accept).toBe(false);
    expect(vetCandidate(res({ action: "SEND_TO_OPENCODE" }), raw, exp).accept).toBe(false);
  });
  it("calls the OpenAI-compatible endpoint with the key only in the Authorization header and prices usage", async () => {
    let captured: { url: string; init: RequestInit } | null = null;
    const fetchImpl = (async (url: string, init: RequestInit) => {
      captured = { url, init };
      return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ found: true, confidence: "high", unresolved: [], envelope: { action: "PAUSE", reason: "r" } }) } }], usage: { prompt_tokens: 1_000_000, completion_tokens: 1_000_000 } }), { status: 200 });
    }) as unknown as typeof fetch;
    const cfg = ConfigSchema.parse({}).deepseek;
    const r = await new DeepSeekInterpreter(cfg, "sk-test-secret", fetchImpl).interpret("please pause", exp);
    expect(captured!.url).toBe("https://api.deepseek.com/chat/completions");
    expect((captured!.init.headers as Record<string, string>).authorization).toBe("Bearer sk-test-secret");
    expect(String(captured!.init.body)).not.toContain("sk-test-secret");
    expect(r.usage.costUsd).toBeCloseTo(cfg.inputCostPerMTok + cfg.outputCostPerMTok);
  });
});

describe("chat extraction", () => {
  it("converts normalised ChatGPT HTML to markdown keeping code fences, lists and tables", () => {
    const html = '<p>Hello <strong>there</strong> <code>x</code></p><ul><li>a</li><li>b</li></ul><table><thead><tr><th>A</th></tr></thead><tbody><tr><td>1</td></tr></tbody></table><pre data-lang="json"><code>{\n  "a": "&lt;b&gt;"\n}\n</code></pre>';
    const md = htmlToMarkdown(html);
    expect(md).toContain("Hello **there** `x`");
    expect(md).toMatch(/-\s+a\n-\s+b/);
    expect(md).toContain("| A |");
    expect(md).toContain('```json\n{\n  "a": "<b>"\n}\n```');
  });
  it("round-trips an envelope through HTML -> markdown -> parser", () => {
    const json = JSON.stringify({ protocol: "mongoose-harness/v1", run_id: "R", experiment_id: "EXP-900", cycle_id: 1, action: "PAUSE", reason: "a < b && c" }, null, 2);
    const html = `<p>ok</p><pre data-lang="json"><code>${json.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</code></pre>`;
    const r = extractEnvelope(htmlToMarkdown(html));
    expect(r.status === "found" && r.value.reason).toBe("a < b && c");
  });
  it("parses conversation URLs (custom GPT vs project vs plain)", () => {
    expect(parseConversationUrl("https://chatgpt.com/c/6700aaaa-bbbb-cccc-dddd-eeeeffff0000")?.gptId).toBeNull();
    const g = parseConversationUrl("https://chatgpt.com/g/g-AbC123xyz-mongoose-expert/c/6700aaaa-bbbb?model=x");
    expect(g?.gptId).toBe("g-AbC123xyz");
    expect(g?.canonical).toBe("https://chatgpt.com/g/g-AbC123xyz-mongoose-expert/c/6700aaaa-bbbb");
    expect(parseConversationUrl("https://chatgpt.com/g/g-p-123abc-proj/c/6700aaaa-bbbb")?.isProject).toBe(true);
    expect(parseConversationUrl("https://evil.example/c/6700aaaa-bbbb")).toBeNull();
    expect(parseConversationUrl("https://chatgpt.com/")).toBeNull();
    // temporary client-side id shown right after the first message of a new chat (observed live)
    expect(parseConversationUrl("https://chatgpt.com/c/local-chatgpt%3A6006a23b-5d81-4c7b-81a8-cc085113c70c")).toBeNull();
    expect(parseConversationUrl("https://chatgpt.com/c/6abe6e6d-8d80-83ec-855a-fbe6cbb03a43")?.conversationId).toBe("6abe6e6d-8d80-83ec-855a-fbe6cbb03a43");
  });
});

describe("misc", () => {
  it("generates ascending OpenCode-format message ids (matches prt_0f2fb10d5001… observed on 1.18.33)", () => {
    const a = opencodeMessageId(1790782935253);
    const b = opencodeMessageId(1790782935253);
    const c = opencodeMessageId(1790782935254);
    expect(a).toMatch(/^msg_0f2fb10d5001[0-9A-Za-z]{14}$/);
    expect(a.slice(0, 16) < b.slice(0, 16) && b.slice(0, 16) < c.slice(0, 16)).toBe(true);
  });
  it("round-trips the message header", () => {
    const h = header({ nonce: "H-abc", runId: "R-1", experimentId: "EXP-900", cycleId: 4, kind: "WORKER_REPORT", extra: { task: "T2" } });
    expect(parseHeader(`${h}\nbody`)).toMatchObject({ nonce: "H-abc", cycle_id: "4", kind: "WORKER_REPORT", task: "T2" });
  });
  it("clips long text but says where the full text is", () => {
    const out = clip("x".repeat(50_000), 10_000, "tools/learning-harness/data/runs/R/inbound/1.md");
    expect(out.length).toBeLessThan(10_500);
    expect(out).toContain("full text preserved at tools/learning-harness/data/runs/R/inbound/1.md");
  });
  it("redacts secret keys and registered secret values", () => {
    registerSecret("sup3r-secret-value");
    expect(redact({ apiKey: "a", nested: { authorization: "b", note: "token sup3r-secret-value here" } })).toEqual({ apiKey: "[REDACTED]", nested: { authorization: "[REDACTED]", note: "token [REDACTED] here" } });
  });
  it("rejects unsafe configs", () => {
    expect(configProblems(ConfigSchema.parse({ browser: { userDataDir: "C:\\AI\\mongoose-playwright-profile" } })).join()).toMatch(/must differ/);
    expect(configProblems(ConfigSchema.parse({ opencode: { baseUrl: "http://0.0.0.0:4096" } })).join()).toMatch(/localhost/);
    expect(configProblems(ConfigSchema.parse({ factoryRoot: "C:\\AI\\mongoose-factory", browser: { userDataDir: "C:\\AI\\mongoose-factory\\profile" } })).join()).toMatch(/outside factoryRoot/);
  });
  it("summarises records and drafts an unreviewed brief", () => {
    const root = join(__dirname, "..", "fixtures", "factory");
    const s = summarizeRecord(root, "experiments/EXP-900-fixture-experiment.md");
    expect(s.status).toBe("in progress");
    expect(s.result).toBe("Not yet run.");
    const d = draftBrief(root, "EXP-900");
    expect(d.reviewed).toBe(false);
    expect(d.target.form).toBeNull();
    expect(d.scope.out_of_scope).toContain("EXP-901");
  });
});
