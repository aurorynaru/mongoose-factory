import { mkdirSync, readFileSync, readdirSync, symlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { harness, fixtureBrief, type Harnessed } from "../src/testing/scenario.js";
import { EnvelopeSchema } from "../src/protocol/envelope.js";
import { parseHeader, briefForCoordinator } from "../src/protocol/prompts.js";
import { attachTextFiles, attachmentRequests, ATTACHMENT_LABEL } from "../src/controller/attachments.js";
import { AUDIT_LABEL } from "../src/controller/action-audit.js";

const open: Harnessed[] = [];
afterEach(() => { for (const h of open.splice(0)) h.store.close(); });
const track = (h: Harnessed) => (open.push(h), h);
const STOP = { envelope: { action: "PAUSE", reason: "fixture stop" } };
const put = (h: Harnessed, path: string, text: string) => {
  const file = join(h.factoryRoot, path);
  mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, text);
  return file;
};

describe("complete coordinator brief before expendable context", () => {
  for (const kind of ["KICKOFF", "WORKER_REPORT", "WORKER_FAILURE"]) {
    it(`preserves every required brief field with a long records digest (${kind})`, async () => {
      const workerFirst = kind !== "KICKOFF";
      const h = track(harness({ coordinator: [STOP], worker: [kind === "WORKER_FAILURE" ? { status: "failed", error: "fixture failure", text: "partial result ".repeat(5000) } : { status: "completed", text: "fixture worker result" }] }));
      h.config.browser.maxMessageChars = 20000;
      h.config.chats.maxDigestChars = 100000;
      for (let n = 910; n < 945; n++) put(h, `experiments/EXP-${n}-digest.md`, `# EXP-${n} — Digest fixture\nStatus: observed\n\n## Result\n${"long record context ".repeat(100)}\n`);
      const b = fixtureBrief();
      b.brief.acceptance_checks = Array.from({ length: 9 }, (_, n) => ({ id: `AC-${n + 1}`, description: `Complete required check ${n + 1}: ${"observe and verify; ".repeat(10)}` }));
      b.brief.prohibited_patterns = ["Never enter Control\\+A as text"];
      if (workerFirst) b.brief.initial_instruction = "Inspect the visible fixture scope.";
      const run = await h.controller.run(h.controller.createRun(b).id);
      expect(run.pause_reason).toBe("coordinator_requested_pause");
      const text = h.chat.submissions[0].text;
      expect(parseHeader(text)?.kind).toBe(kind);
      expect(text.length).toBeLessThanOrEqual(h.config.browser.maxMessageChars);
      expect(text).toContain(briefForCoordinator(b.brief));
      expect(text).toContain("AC-9: Complete required check 9:");
      expect(text.indexOf(b.brief.objective)).toBeLessThan(text.indexOf("Records digest/context clipped to fit"));
      expect(text).toContain("Records digest/context clipped to fit; full text preserved at");
      const contextFile = join(h.runsDir, run.id, "messages/001-context-full.md");
      expect(readFileSync(contextFile, "utf8").length).toBeGreaterThan(20000);
      expect(readFileSync(contextFile, "utf8")).toContain("EXP-910");
      if (workerFirst) expect(text).toContain(AUDIT_LABEL);
    });
  }

  it("refuses a limit too small for the required brief instead of sending an incomplete kickoff", async () => {
    const h = track(harness({ coordinator: [STOP], config: { browser: { maxMessageChars: 1000 } } }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.status).toBe("paused");
    expect(run.pause_detail).toContain("acceptance checks will not be clipped");
    expect(h.chat.submissions).toHaveLength(0);
    expect(readFileSync(join(h.runsDir, run.id, "messages/001-to-coordinator-KICKOFF.md"), "utf8")).toContain("AC-2:");
  });
});

describe("scoped text attachment reader", () => {
  it("reads each supported extension and the exact experiment record with source line ranges", () => {
    const h = track(harness({ coordinator: [] })), b = fixtureBrief().brief;
    const paths = [b.record_path, ...["md", "txt", "json", "yml"].map(ext => `${b.evidence_dir}/capture.${ext}`)];
    for (const path of paths) put(h, path, "first line\nsecond line");
    const result = attachTextFiles(h.factoryRoot, b, paths, 8000);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.message).toContain(ATTACHMENT_LABEL);
    expect(result.files.map(f => f.lineRanges)).toEqual(paths.map(() => "1-2"));
    expect(result.files.every(f => !f.clipped && f.sha256.length === 64)).toBe(true);
    expect(result.message).toContain("L2: second line");
  });

  it("selects accessibility dialog, grid and control lines using original line numbers", () => {
    const h = track(harness({ coordinator: [] })), b = fixtureBrief().brief;
    const path = `${b.evidence_dir}/accessibility-snapshot.txt`;
    put(h, path, '- heading "Web Client"\n- dialog "Select Form"\n  - textbox "Name": FX_Lab\n  - combobox "Filter By": Name\n  - checkbox "Case Sensitive" [checked]\n  - button "Open"\n  - grid\n    - gridcell "FX_Lab"');
    const result = attachTextFiles(h.factoryRoot, b, [path], 3000);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.files[0].lineRanges).toBe("2-5,7-8");
    expect(result.files[0].filteredSnapshot).toBe(true);
    expect(result.message).toContain('L3:   - textbox "Name": FX_Lab');
    expect(result.message).not.toContain('- button "Open"');
    expect(result.message).toContain("2 other lines omitted");
  });

  it("bounds long text explicitly with source path and clipped line ranges", () => {
    const h = track(harness({ coordinator: [] })), b = fixtureBrief().brief;
    const path = `${b.evidence_dir}/long.md`;
    put(h, path, Array.from({ length: 200 }, (_, n) => `line ${n}: ${"observations ".repeat(30)}`).join("\n"));
    const result = attachTextFiles(h.factoryRoot, b, [path], 1800);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.message.length).toBeLessThanOrEqual(1800);
    expect(result.message).toContain(`File: ${path}`);
    expect(result.message).toContain("CLIPPED");
    expect(result.files[0].clipped).toBe(true);
    expect(result.files[0].totalLines).toBe(200);
  });

  it.each(["../evidence/EXP-900/state.md", "evidence/EXP-901/state.md", "experiments/other.md", "tools/secret.txt", "evidence/EXP-900/a.md:stream", "evidence/EXP-900/%2e%2e/a.md", "C:/AI/a.md", "/evidence/EXP-900/a.md", "evidence/EXP-900/image.png", "evidence/EXP-900/missing.md"])("refuses unsafe or unsupported request %s", path => {
    const h = track(harness({ coordinator: [] })), b = fixtureBrief().brief;
    put(h, `${b.evidence_dir}/state.md`, "safe text");
    expect(attachTextFiles(h.factoryRoot, b, [`${b.evidence_dir}/state.md`, path], 3000).ok).toBe(false);
  });

  it("refuses a junction escape and binary content under an allowed suffix", () => {
    const h = track(harness({ coordinator: [] })), b = fixtureBrief().brief;
    const outside = join(h.dir, "outside"); mkdirSync(outside); writeFileSync(join(outside, "text.md"), "outside");
    symlinkSync(outside, join(h.factoryRoot, b.evidence_dir, "linked"), "junction");
    expect(attachTextFiles(h.factoryRoot, b, [`${b.evidence_dir}/linked/text.md`], 3000).ok).toBe(false);
    put(h, `${b.evidence_dir}/binary.txt`, "a\0b");
    expect(attachTextFiles(h.factoryRoot, b, [`${b.evidence_dir}/binary.txt`], 3000).ok).toBe(false);
  });

  it("extracts named PAUSE files, not versions or ordinary cited evidence", () => {
    const env = EnvelopeSchema.parse({ protocol: "mongoose-harness/v1", run_id: "R-fake", experiment_id: "EXP-900", cycle_id: 1, action: "PAUSE", reason: 'Please provide `evidence/EXP-900/state.md` for Mongoose 2026.09.08.', evidence_refs: ["evidence/EXP-900/image.png"] });
    expect(attachmentRequests(env)).toEqual(["evidence/EXP-900/state.md"]);
    env.reason = "Operator decision required; current state recorded.";
    expect(attachmentRequests(env)).toEqual([]);
    env.requires_attachments = ["evidence/EXP-900/image.png"];
    expect(attachmentRequests(env)).toEqual(env.requires_attachments);
  });
});

describe("controller answers attachment requests with fake chats", () => {
  for (const explicit of [false, true]) {
    it(`automatically supplies safe requested text (${explicit ? "requires_attachments" : "PAUSE"}) and logs it`, async () => {
      const path = "evidence/EXP-900/state.md";
      const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: `Please attach ${path}`, ...(explicit ? { requires_attachments: [path] } : {}) } }, STOP] }));
      const file = put(h, path, "Recorded state\nName filter: FX_FixtureForm01");
      const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
      expect(run.pause_reason).toBe("coordinator_requested_pause");
      expect(h.chat.submissions.map(s => parseHeader(s.text)?.kind)).toEqual(["KICKOFF", "ATTACHMENTS"]);
      const attachment = h.chat.submissions[1].text;
      expect(attachment).toContain(ATTACHMENT_LABEL);
      expect(attachment).toContain("Source lines 1-2");
      expect(attachment).toContain("L2: Name filter: FX_FixtureForm01");
      expect(attachment.length).toBeLessThanOrEqual(h.config.browser.maxMessageChars);
      expect(h.worker.submissions).toHaveLength(0);
      expect(readFileSync(file, "utf8")).toBe("Recorded state\nName filter: FX_FixtureForm01");
      const logs = readdirSync(join(h.runsDir, run.id, "attachments"));
      const saved = JSON.parse(readFileSync(join(h.runsDir, run.id, "attachments", logs[0]), "utf8"));
      expect(saved.files[0]).toMatchObject({ path, lineRanges: "1-2", clipped: false });
      expect(h.store.opsForRun(run.id).find(o => o.purpose === "ATTACHMENTS")?.meta.attachedPaths).toEqual([path]);
      expect(run.approvals.attachment).toBeUndefined();
    });
  }

  it("does not execute the requested worker action before the coordinator reassesses attached text", async () => {
    const path = "evidence/EXP-900/state.json";
    const h = track(harness({ coordinator: [{ envelope: { action: "SEND_TO_OPENCODE", reason: "next after review", message: "Inspect FX_FixtureForm01", requires_attachments: [path] } }, STOP] }));
    put(h, path, '{"observed":"fixture"}');
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(h.worker.submissions).toHaveLength(0);
    expect(h.chat.submissions[1].text).toContain(ATTACHMENT_LABEL);
  });

  it("does not bypass scope review to satisfy an attachment request", async () => {
    const path = "evidence/EXP-900/state.md";
    const h = track(harness({ coordinator: [{ envelope: { action: "SEND_TO_OPENCODE", reason: "scope change", message: "Modify EXP-901", requires_attachments: [path] } }] }));
    put(h, path, "allowed text");
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.status).toBe("paused");
    expect(run.pause_detail).toContain("scope:");
    expect(h.chat.submissions).toHaveLength(1);
    expect(h.worker.submissions).toHaveLength(0);
  });

  it("keeps a long inline attachment within the browser budget and preserves the clipping notice", async () => {
    const path = "evidence/EXP-900/long.md";
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: `Please attach ${path}` } }, STOP], config: { browser: { maxMessageChars: 20000 } } }));
    put(h, path, "large observation ".repeat(5000));
    await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    const text = h.chat.submissions[1].text;
    expect(text.length).toBeLessThanOrEqual(20000);
    expect(text).toContain(ATTACHMENT_LABEL);
    expect(text).toContain(`File: ${path}`);
    expect(text).toContain("CLIPPED");
    expect(text).toContain("Reassess the prior decision");
  });

  it("keeps mixed text/image requests paused without attaching a partial set", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "Please attach files", requires_attachments: ["evidence/EXP-900/state.md", "evidence/EXP-900/image.png"] } }] }));
    put(h, "evidence/EXP-900/state.md", "state");
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("review:attachment_required");
    expect(h.chat.submissions).toHaveLength(1);
    expect(h.store.opsForRun(run.id).some(o => o.purpose === "ATTACHMENTS")).toBe(false);
  });

  it("keeps a PAUSE requesting an unsafe path for operator review", async () => {
    const h = track(harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "Please paste tools/secrets.txt" } }] }));
    const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
    expect(run.pause_reason).toBe("coordinator_requested_pause");
    expect(h.chat.submissions).toHaveLength(1);
  });
});
