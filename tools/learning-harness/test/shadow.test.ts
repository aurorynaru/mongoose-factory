import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Command } from "commander";
import type { OcMessage } from "../src/adapters/opencode/client.js";
import { captureDataset, inputHash, saveJson, scrubText } from "../src/shadow/dataset.js";
import { loadShadowModel, messagesFor, runShadow, validateDecision, type ShadowModel } from "../src/shadow/runner.js";
import { compareResults, gradeResult, loadResult, summarize, writeReport } from "../src/shadow/report.js";
import { registerShadowCommands } from "../src/shadow/cli.js";

let dir: string;
beforeEach(() => { dir = mkdtempSync(join(tmpdir(), "mongoose-shadow-test-")); });
afterEach(() => { vi.unstubAllEnvs(); vi.restoreAllMocks(); rmSync(dir, { recursive: true, force: true }); });
const msg = (id: string, role: "user" | "assistant", parts: OcMessage["parts"], parentID?: string): OcMessage => ({
  info: { id, role, sessionID: "ses_saved", parentID, time: { created: Number(id.slice(4)) }, providerID: "tabby", modelID: "baseline" }, parts,
});
const image = "data:image/png;base64,aGVsbG8=";
const messages = () => [
  msg("msg_1", "user", [{ id: "p_task", type: "text", text: "[HARNESS WORKER TASK run_id=R-old experiment_id=EXP-001 task=T1]\nInspect FX_Test, verify User scope." }]),
  msg("msg_2", "assistant", [{ id: "p_observed", type: "tool", tool: "playwright_browser_snapshot", state: { status: "completed", input: {}, output: "User scope; FX_Test already exists", attachments: [{ mime: "image/png", url: image }] } }], "msg_1"),
  msg("msg_3", "assistant", [{ id: "p_next", type: "text", text: "WITHHELD_ANSWER_ONLY" }], "msg_1"),
  msg("msg_4", "user", [{ id: "p_future", type: "text", text: "FUTURE_RESULT_ONLY" }]),
];
const dataset = () => captureDataset("test", [{ runId: "R-old", sessionId: "ses_saved", messages: messages() }], { maxCases: 2, maxContextChars: 10000, maxImages: 12 });
const model: ShadowModel = { id: "strata/candidate", apiModel: "candidate", endpoint: "http://127.0.0.1:8080/v1", headers: { "content-type": "application/json" }, options: { reasoning_effort: "none" }, supportsImages: true };
const options = { repeats: 1, timeoutMs: 500, maxTokens: 256, temperature: 0 };
const decision = { action: "inspect", tool: "playwright_browser_snapshot", input: {}, rationale: "Check current scope and existing artifact", evidence_refs: [], verification: "Compare scoped identity", risks: [] };
const reply = (extra: Record<string, unknown> = {}) => ({ model: "candidate", choices: [{ finish_reason: "stop", message: { content: JSON.stringify(decision) } }], usage: { prompt_tokens: 10, completion_tokens: 20 }, ...extra });
const mockFetch = (respond: () => Response = () => Response.json(reply())) => vi.fn<typeof fetch>(async input => String(input).endsWith("/models") ? Response.json({ data: [{ id: "candidate" }] }) : respond());

describe("Frozen checkpoint capture", () => {
  it("withholds the next reply and future results, retaining only prior tool output and screenshots", () => {
    const d = dataset(), c = d.cases[1], payload = JSON.stringify(messagesFor(c));
    expect(c.context).toContain("User scope; FX_Test already exists");
    expect(c.images).toEqual([{ id: "p_observed-image-0", url: image }]);
    expect(c.observationIds).toContain("p_observed");
    expect(c.baseline).toContain("WITHHELD_ANSWER_ONLY");
    expect(payload).not.toContain("WITHHELD_ANSWER_ONLY");
    expect(payload).not.toContain("FUTURE_RESULT_ONLY");
    expect(payload).toContain(image);
    expect(d.cases[0].images).toHaveLength(0);
    expect(d.cases[0].context).not.toContain("already exists");
  });

  it("skips oversized prefixes without truncating them", () => {
    const d = captureDataset("small", [{ runId: "R-old", sessionId: "ses_saved", messages: messages() }], { maxCases: 10, maxContextChars: 180, maxImages: 0 });
    expect(d.cases).toHaveLength(1); expect(d.capture.skipped).toBe(1);
    expect(d.cases[0].context).toContain("verify User scope.");
  });

  it("rejects non-embedded images without reading or fetching them", () => {
    const m = messages(); m[1].parts[0].state!.attachments![0].url = "file:///changed.png";
    expect(() => captureDataset("x", [{ runId: "R-old", sessionId: "ses_saved", messages: m }], { maxCases: 2, maxContextChars: 10000, maxImages: 12 })).toThrow("embedded");
  });

  it("hashes candidate inputs independently of baseline and reviewer notes", () => {
    const a = dataset(), b = structuredClone(a);
    b.cases[0].baseline = "corrected historical reply"; b.cases[0].reviewNotes = "human-only";
    expect(inputHash(a)).toBe(inputHash(b));
    b.cases[0].context += " different observation"; expect(inputHash(a)).not.toBe(inputHash(b));
  });

  it("scrubs structured credentials and common inline labels without opening secret files", () => {
    const m = messages(); m[1].parts[0].state!.input = { password: "do-not-store", nested: { apiKey: "hidden" }, tokens: 12 };
    m[1].parts[0].state!.output = "password=literal-password Cookie: secret-cookie Bearer secret-token";
    const d = captureDataset("x", [{ runId: "R-old", sessionId: "ses_saved", messages: m }], { maxCases: 2, maxContextChars: 10000, maxImages: 12 });
    const json = JSON.stringify(d); for (const secret of ["do-not-store", "hidden", "literal-password", "secret-cookie", "secret-token"]) expect(json).not.toContain(secret);
    expect(json).toContain("tokens"); expect(json).toContain("[REDACTED]");
    expect(scrubText("http://name:password@localhost/x")).toBe("http://[REDACTED]@localhost/x");
    expect(JSON.parse(scrubText('{"password":"SECRET_MONGOOSE_PASSWORD","apiKey":"literal-key"}'))).toEqual({ password: "SECRET_MONGOOSE_PASSWORD", apiKey: "[REDACTED]" });
  });

  it("rejects mixed sessions and missing worker task checkpoints", () => {
    const m = messages(); m[0].info.sessionID = "ses_other";
    expect(() => captureDataset("x", [{ runId: "R-old", sessionId: "ses_saved", messages: m }], { maxCases: 2, maxContextChars: 10000, maxImages: 12 })).toThrow("different session");
    expect(() => captureDataset("x", [], { maxCases: 2, maxContextChars: 10000, maxImages: 12 })).toThrow("No eligible");
  });

  it("task mode carries only prior reports across task boundaries and labels omitted observations", () => {
    const m = messages(); m[2].parts[0].text = "HARNESS REPORT prior result: observed only";
    m[3].parts[0].text = "[HARNESS WORKER TASK task=T2] Inspect saved state";
    m.push(msg("msg_5", "assistant", [{ id: "next_task", type: "text", text: "T2_WITHHELD" }], "msg_4"));
    const d = captureDataset("tasks", [{ runId: "R-old", sessionId: "ses_saved", messages: m }], { maxCases: 3, maxContextChars: 10000, maxImages: 12, historyMode: "task" });
    const c = d.cases[2]; expect(c.source.taskId).toBe("T2");
    expect(c.context).toContain("prior result: observed only"); expect(c.context).toContain("tool observations and screenshots are omitted");
    expect(c.context).not.toContain("already exists"); expect(c.images).toHaveLength(0);
    expect(JSON.stringify(messagesFor(c))).not.toContain("T2_WITHHELD");
  });
});

describe("Local provider selection", () => {
  const config = (url = "http://127.0.0.1:8080/v1", apiKey?: string, opts = { reasoningEffort: "none" }) => {
    const path = join(dir, "opencode.json"); saveJson(path, { provider: { strata: { npm: "@ai-sdk/openai-compatible", options: { baseURL: url, apiKey }, models: { candidate: { options: opts, modalities: { input: ["text", "image"] } } } } } }); return path;
  };
  it("maps the Strata reasoning setting and supplies environment authentication only in headers", () => {
    vi.stubEnv("SHADOW_TEST_KEY", "shadow-key-value");
    const selected = loadShadowModel(config(undefined, "{env:SHADOW_TEST_KEY}"), "strata/candidate");
    expect(selected.options).toEqual({ reasoning_effort: "none" }); expect(selected.headers.authorization).toBe("Bearer shadow-key-value");
    expect(scrubText("shadow-key-value")).toBe("[REDACTED]");
    expect(selected.supportsImages).toBe(true);
  });
  it.each(["https://remote.example/v1", "http://name:secret@localhost/v1", "http://localhost/v1?key=value"])("rejects nonlocal or credential-bearing endpoint %s", url => {
    expect(() => loadShadowModel(config(url), "strata/candidate")).toThrow("local HTTP");
  });
  it("rejects unset, literal and file-based keys", () => {
    vi.stubEnv("SHADOW_UNSET", "");
    expect(() => loadShadowModel(config(undefined, "{env:SHADOW_UNSET}"), "strata/candidate")).toThrow("Set SHADOW_UNSET");
    for (const key of ["literal-value", "{file:secret.env}"]) expect(() => loadShadowModel(config(undefined, key), "strata/candidate")).toThrow("{env:NAME}");
  });
  it("rejects unsupported options instead of silently changing the setup", () => {
    expect(() => loadShadowModel(config(undefined, undefined, { unusual: "x" } as unknown as { reasoningEffort: string }), "strata/candidate")).toThrow("Unsupported shadow");
  });
});

describe("Inert model requests and persisted results", () => {
  it("sends independent identical packets, no executable tools, and records timing, usage and settings", async () => {
    const fetchImpl = mockFetch(), d = dataset();
    const r = await runShadow(d, model, dir, { ...options, repeats: 2 }, { fetchImpl });
    const calls = fetchImpl.mock.calls.filter(([u]) => String(u).endsWith("/chat/completions"));
    expect(calls).toHaveLength(4);
    const bodies = calls.map(([, o]) => JSON.parse(o!.body as string));
    expect(bodies[0]).toEqual(bodies[1]); expect(bodies[0]).not.toHaveProperty("tools"); expect(bodies[0]).not.toHaveProperty("tool_choice");
    expect(bodies[0]).toMatchObject({ model: "candidate", reasoning_effort: "none", max_tokens: 256, temperature: 0, stream: false });
    expect(r.trials.every(t => t.status === "completed")).toBe(true);
    expect(r.trials[0].usage).toEqual({ input: 10, output: 20, reasoning: null });
    expect(r.trials[0].review).toBeUndefined();
    expect(loadResult(dir).trials).toHaveLength(4); expect(existsSync(join(dir, "dataset.json"))).toBe(true);
    writeReport(dir, r); expect(readFileSync(join(dir, "report.md"), "utf8")).toContain("ungraded");
    expect(JSON.stringify(r)).not.toContain("authorization");
  });

  it("never executes returned tool calls or command-like arguments", async () => {
    const path = join(dir, "must-not-exist.txt"), fetchImpl = mockFetch(() => Response.json(reply({ choices: [{ finish_reason: "tool_calls", message: {
      tool_calls: [{ type: "function", function: { name: "bash", arguments: JSON.stringify({ command: `echo modified > ${path}` }) } }], content: JSON.stringify({ ...decision, tool: "bash", input: { command: `echo modified > ${path}` } }),
    } }] })));
    const r = await runShadow(dataset(), model, dir, options, { fetchImpl });
    expect(r.trials.every(t => t.status === "invalid")).toBe(true); expect(existsSync(path)).toBe(false);
    expect(fetchImpl.mock.calls.every(([u]) => ["/models", "/chat/completions"].some(p => String(u).endsWith(p)))).toBe(true);
    expect(r.trials[0].issues.join(" ")).toContain("none executed");
  });

  it("rejects fabricated evidence, malformed JSON and incomplete output without claiming quality", async () => {
    expect(validateDecision("not JSON", dataset().cases[0]).issues).toContain("Response is not JSON");
    expect(validateDecision(JSON.stringify({ ...decision, evidence_refs: ["future-evidence"] }), dataset().cases[0]).issues.join()).toContain("Unknown evidence");
    expect(validateDecision(JSON.stringify({ ...decision, tool: "invented_tool" }), dataset().cases[0]).issues.join()).toContain("Unknown proposed tool");
    const r = await runShadow(dataset(), model, dir, options, { fetchImpl: mockFetch(() => Response.json(reply({ choices: [{ finish_reason: "length", message: { content: JSON.stringify(decision) } }] }))) });
    expect(r.trials[0].status).toBe("invalid"); expect(r.trials[0].review).toBeUndefined();
  });

  it("requires the selected model to be loaded before making completions", async () => {
    const fetchImpl = vi.fn<typeof fetch>(async () => Response.json({ data: [{ id: "different-model" }] }));
    await expect(runShadow(dataset(), model, dir, options, { fetchImpl })).rejects.toThrow("not advertised");
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it("retains HTTP failures without retries, then continues remaining cases", async () => {
    const fetchImpl = mockFetch(() => new Response("private server error", { status: 500 }));
    const r = await runShadow(dataset(), model, dir, options, { fetchImpl });
    expect(r.trials.every(t => t.status === "failed")).toBe(true);
    expect(r.trials[0].issues).toEqual(["Model completion returned HTTP 500"]);
    expect(fetchImpl).toHaveBeenCalledTimes(3); expect(loadResult(dir).completedAt).toBeTruthy();
  });

  it("records a timeout and persists each trial before starting the next", async () => {
    let trialCalls = 0;
    const fetchImpl = vi.fn<typeof fetch>(async input => {
      if (String(input).endsWith("/models")) return Response.json({ data: [{ id: "candidate" }] });
      if (trialCalls++) expect(loadResult(dir).trials).toHaveLength(1);
      throw new DOMException("expired", "TimeoutError");
    });
    const r = await runShadow(dataset(), model, dir, options, { fetchImpl });
    expect(r.trials.every(t => t.status === "timeout")).toBe(true);
  });

  it("stops scheduling new trials after cancellation", async () => {
    const abort = new AbortController(), fetchImpl = mockFetch();
    const r = await runShadow(dataset(), model, dir, { ...options, repeats: 3, signal: abort.signal }, { fetchImpl, onTrial: () => abort.abort() });
    expect(r.trials).toHaveLength(1); expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(r.plannedTrials).toBe(6); expect(() => compareResults(r, r)).toThrow("all planned trials");
  });

  it("rejects invalid limits and unsupported image inputs before network calls", async () => {
    const fetchImpl = mockFetch();
    await expect(runShadow(dataset(), { ...model, supportsImages: false }, dir, options, { fetchImpl })).rejects.toThrow("modalities");
    await expect(runShadow(dataset(), model, dir, { ...options, repeats: 0 }, { fetchImpl })).rejects.toThrow("limits");
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});

describe("Human review and fair comparisons", () => {
  it("records review scores and compares same-input runs without claiming an automatic winner", async () => {
    const aDir = join(dir, "a"), bDir = join(dir, "b"), d = dataset();
    const a = await runShadow(d, model, aDir, options, { fetchImpl: mockFetch() });
    const b = await runShadow(d, { ...model, id: "tabby/candidate", options: {} }, bDir, options, { fetchImpl: mockFetch() });
    expect(compareResults(a, b)).toContain("Review incomplete");
    const graded = gradeResult(aDir, d.cases[0].id, 1, { correctness: 2, evidence: 1, safety: "pass", reviewer: "operator", note: "Scope inspect is correct, evidence incomplete" });
    expect(summarize(graded)).toMatchObject({ reviewed: 1, correctness: 2, evidence: 1, safetyFailures: 0 });
    expect(readFileSync(join(aDir, "report.md"), "utf8")).toContain("Reviewed: 1/2");
    expect(() => gradeResult(aDir, "missing", 1, { correctness: 0, evidence: 0, safety: "fail", reviewer: "operator", note: "x" })).toThrow("Unknown");
    expect(() => gradeResult(aDir, d.cases[0].id, 1, { correctness: 3, evidence: 0, safety: "fail", reviewer: "operator", note: "x" })).toThrow();
  });

  it("rejects changed dataset, prompt, settings, trial coverage and actual request hashes", async () => {
    const a = await runShadow(dataset(), model, dir, options, { fetchImpl: mockFetch() });
    const changes = [
      (b: typeof a) => { b.datasetHash = "different"; }, (b: typeof a) => { b.promptHash = "different"; },
      (b: typeof a) => { b.settings.temperature = 0.5; }, (b: typeof a) => { b.trials.pop(); },
      (b: typeof a) => { b.trials[0].inputHash = "different"; }, (b: typeof a) => { b.trials[1] = structuredClone(b.trials[0]); },
    ];
    for (const change of changes) { const b = structuredClone(a); change(b); expect(() => compareResults(a, b)).toThrow(); }
  });
});

describe("Shadow CLI offline capture", () => {
  it("imports an export into isolated data, refuses overwrite and never creates controller state", async () => {
    const root = join(dir, "factory"), data = join(dir, "data"), runId = "R-old";
    saveJson(join(root, "opencode.json"), { provider: {} });
    const config = join(dir, "harness.config.json"); saveJson(config, { factoryRoot: root, dataDir: data });
    saveJson(join(data, "runs", runId, "events.jsonl"), {});
    writeFileSync(join(data, "runs", runId, "events.jsonl"), JSON.stringify({ event: "worker.session_created", session: "ses_saved" }) + "\n");
    const exported = join(dir, "export.json"); saveJson(exported, { info: { id: "ses_saved" }, messages: messages() });
    const program = new Command().option("-c, --config <file>"); registerShadowCommands(program);
    vi.spyOn(console, "log").mockImplementation(() => {});
    const args = ["node", "harness", "-c", config, "shadow", "capture", "--run", runId, "--name", "past", "--export", exported];
    await program.parseAsync(args);
    expect(existsSync(join(data, "shadow", "datasets", "past.json"))).toBe(true);
    expect(existsSync(join(data, "harness.sqlite"))).toBe(false);
    await expect(program.parseAsync(args)).rejects.toThrow("already exists");
  });

  it("runs, grades and compares via the CLI while leaving source events, config and controller state untouched", async () => {
    const root = join(dir, "factory"), data = join(dir, "data"), modelConfig = join(root, "opencode.json");
    const provider = { npm: "@ai-sdk/openai-compatible", options: { baseURL: model.endpoint }, models: { candidate: { modalities: { input: ["text", "image"] } } } };
    saveJson(modelConfig, { model: "original/default", provider: { strata: provider, tabby: provider } });
    const original = readFileSync(modelConfig, "utf8"), config = join(dir, "config.json");
    saveJson(config, { factoryRoot: root, dataDir: data }); saveJson(join(data, "shadow", "datasets", "past.json"), dataset());
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.stubGlobal("fetch", mockFetch());
    const cli = async (args: string[]) => {
      const p = new Command().option("-c, --config <file>"); registerShadowCommands(p);
      await p.parseAsync(["node", "harness", "-c", config, "shadow", ...args]);
    };
    await cli(["inspect", "--dataset", "past"]);
    await cli(["run", "--dataset", "past", "--model", "strata/candidate"]);
    await cli(["run", "--dataset", "past", "--model", "tabby/candidate"]);
    const ids = readdirSync(join(data, "shadow", "runs")); expect(ids).toHaveLength(2);
    await cli(["grade", "--result", ids[0], "--case", dataset().cases[0].id, "--correctness", "2", "--evidence", "1", "--safety", "pass", "--reviewer", "operator", "--note", "Scope inspection first"]);
    await cli(["compare", ...ids]);
    expect(readdirSync(join(data, "shadow", "comparisons"))).toHaveLength(1);
    expect(readFileSync(modelConfig, "utf8")).toBe(original);
    expect(existsSync(join(data, "harness.sqlite"))).toBe(false);
    expect(existsSync(join(data, "logs"))).toBe(false);
    vi.unstubAllGlobals();
  });
});
