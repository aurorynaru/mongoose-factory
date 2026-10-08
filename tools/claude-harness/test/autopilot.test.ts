import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { autopilotCycle, autopilotState, setAutopilot } from "../src/autopilot.js";
import { HARNESS_DIR } from "../src/config.js";
import { loadCoordinatorContext } from "../src/context.js";
import { parseHeader } from "../src/protocol/prompts.js";
import { FakeChat, type ReplySpec } from "../src/testing/fakes.js";
import { fixtureBrief, harness, type Harnessed } from "../src/testing/scenario.js";
import type { RunRow } from "../src/store.js";

const shared = JSON.parse(readFileSync(join(HARNESS_DIR, "fixtures", "scenarios", "scenarios.json"), "utf8")).shared;

/** A completed EXP-900 run to start the autopilot from. */
async function completedRun(): Promise<{ h: Harnessed; run: RunRow }> {
  const h = harness({ coordinator: [{ envelope: { action: "SEND_TO_OPENCODE", reason: "r", message: "Create FX_FixtureVar." } }, { envelope: shared.complete }], worker: [shared.workerOk] });
  const run = await h.controller.run(h.controller.createRun(fixtureBrief()).id);
  expect(run.status).toBe("completed");
  h.store.setRole("specialist", { url: "https://chatgpt.com/g/g-2jEigwbfm-infor-cloudsuite-assistant/c/6abb3aee", conversationId: "6abb3aee", gptId: "g-2jEigwbfm", title: null });
  return { h, run };
}

const doc = (tag: string) => `# 1. Project and workflow\n${tag}\n` + "Lorem ipsum context line.\n".repeat(40);
const verdict = (v: string) => `OBSERVATIONS: fine.\n\n\`\`\`json\n{"protocol": "mongoose-harness/specialist-v1", "consultation_id": "{{consultation_id}}", "verdict": "${v}", "required_verifications": []}\n\`\`\``;
const proposal = "Proposal:\n\n```json\n" + JSON.stringify({
  protocol: "mongoose-harness/proposal-v1",
  experiment_id: "EXP-905",
  title: "Static caption round trip",
  rationale: "Builds on observed procedures.",
  objective: "Change the caption of FX_TitleStatic and verify it persists.",
  in_scope: ["Caption of FX_TitleStatic on FX_ComponentLab09"],
  acceptance_checks: [{ id: "AC-1", description: "Caption persists after reopen (screenshot)" }],
  target_form: "FX_ComponentLab09",
}) + "\n```";

function deps(h: Harnessed, chat: FakeChat) {
  return {
    chat,
    store: h.store,
    config: h.config,
    factoryRoot: h.factoryRoot,
    briefsDir: join(h.dir, "briefs"),
    protocolDir: join(HARNESS_DIR, "protocol"),
    contextFile: join(h.dir, "context", "coordinator-context.md"),
    workDir: join(h.dir, "data", "autopilot"),
    log: h.log,
  };
}

const script = (coordinator: ReplySpec[], specialist: ReplySpec[]) => new FakeChat({ coordinator, specialist });

describe("autopilot cycle", () => {
  it("refreshes context, gets specialist review, proposes, and auto-approves on 'supports' — all in new chats", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 2);
    const chat = script([doc("DRAFT"), doc("FINAL-AFTER-REVIEW"), proposal], [verdict("supports"), verdict("supports")]);
    const r = await autopilotCycle(deps(h, chat), run);
    expect(r).toMatchObject({ ok: true, experimentId: "EXP-905" });
    // order and roles
    expect(chat.submissions.map((s) => `${s.role}:${parseHeader(s.text)?.kind}`)).toEqual([
      "coordinator:CONTEXT_UPDATE",
      "specialist:SPECIALIST_REVIEW",
      "coordinator:CONTEXT_FINALIZE",
      "coordinator:NEXT_EXPERIMENT_PROPOSAL",
      "specialist:PROPOSAL_CHECK",
    ]);
    expect(chat.newChats.map((n) => n.role)).toEqual(["coordinator", "specialist"]);
    expect(chat.newChats[1].homeUrl).toBe("https://chatgpt.com/g/g-2jEigwbfm-infor-cloudsuite-assistant");
    // the update request carries the finished experiment's record from disk
    expect(chat.submissions[0].text).toContain("FULL RECORD OF EXP-900");
    expect(chat.submissions[0].text).toContain("Fixture Experiment (test only)");
    // final context saved and marked reviewed (by the autopilot), draft is not
    const ctx = loadCoordinatorContext(deps(h, chat).contextFile);
    expect(ctx.reviewed).toBe(true);
    expect(ctx.text).toContain("FINAL-AFTER-REVIEW");
    expect(ctx.text).toContain("specialist findings verdict: supports");
    // brief approved, counter decremented
    const brief = JSON.parse(readFileSync(r.ok ? r.briefPath : "", "utf8"));
    expect(brief.reviewed).toBe(true);
    expect(brief.notes).toContain("Auto-approved by autopilot");
    expect(autopilotState(h.store).remaining).toBe(1);
    h.store.close();
  });

  it("asks the coordinator for ONE revision on an objection, and approves when the specialist then supports", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 2);
    const chat = script([doc("D"), doc("F"), proposal, proposal], [verdict("supports"), verdict("objects"), verdict("supports")]);
    const r = await autopilotCycle(deps(h, chat), run);
    expect(r.ok).toBe(true);
    const kinds = chat.submissions.map((s) => `${s.role}:${parseHeader(s.text)?.kind}`);
    expect(kinds.slice(3)).toEqual(["coordinator:NEXT_EXPERIMENT_PROPOSAL", "specialist:PROPOSAL_CHECK", "coordinator:PROPOSAL_REVISION", "specialist:PROPOSAL_RECHECK_1"]);
    expect(chat.submissions.find((s) => parseHeader(s.text)?.kind === "PROPOSAL_REVISION")!.text).toContain("SPECIALIST REVIEW:");
    h.store.close();
  });

  it("does not approve when the specialist still objects after the revision", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 2);
    const chat = script([doc("D"), doc("F"), proposal, proposal], [verdict("supports"), verdict("objects"), verdict("objects")]);
    const r = await autopilotCycle(deps(h, chat), run);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toContain('"objects" after 1 revision');
    const brief = JSON.parse(readFileSync(join(h.dir, "briefs", "EXP-905.brief.json"), "utf8"));
    expect(brief.reviewed).toBe(false);
    expect(autopilotState(h.store).remaining).toBe(2);
    h.store.close();
  });

  it("a rerun after a later stop skips the already-saved context steps", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 2);
    const first = script([doc("D"), doc("F"), proposal, proposal], [verdict("supports"), verdict("objects"), verdict("objects")]);
    expect((await autopilotCycle(deps(h, first), run)).ok).toBe(false);
    const second = script([proposal], [verdict("supports")]);
    const r = await autopilotCycle(deps(h, second), run);
    expect(r.ok).toBe(true);
    expect(second.submissions.map((s) => parseHeader(s.text)?.kind)).toEqual(["NEXT_EXPERIMENT_PROPOSAL", "PROPOSAL_CHECK"]);
    expect(second.newChats).toHaveLength(0);
    h.store.close();
  });

  it("counts a blocked run only once even if autopilot next is rerun", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 3);
    const blocked = { ...run, outcome: "blocked" };
    await autopilotCycle(deps(h, script([], [])), blocked); // stops early (script empty) but counts once
    await autopilotCycle(deps(h, script([], [])), blocked);
    expect(autopilotState(h.store).blockedStreak).toBe(1);
    h.store.close();
  });

  it("keeps the previous context version in history", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 1);
    const d = deps(h, script([doc("D"), doc("F"), proposal], [verdict("supports"), verdict("supports")]));
    const { writeCoordinatorContext } = await import("../src/context.js");
    writeCoordinatorContext(d.contextFile, doc("OLD-VERSION"), true);
    await autopilotCycle(d, run);
    const hist = join(h.dir, "context", "history");
    expect(existsSync(hist)).toBe(true);
    h.store.close();
  });

  it("does nothing when off, and stops after 2 blocked experiments in a row", async () => {
    const { h, run } = await completedRun();
    const chat = script([], []);
    expect((await autopilotCycle(deps(h, chat), run)).ok).toBe(false);
    expect(chat.submissions).toHaveLength(0);

    setAutopilot(h.store, 3);
    h.store.setSetting("autopilot:blocked_streak", "1");
    const r = await autopilotCycle(deps(h, chat), { ...run, outcome: "blocked" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toContain("2 blocked");
    expect(autopilotState(h.store).remaining).toBe(0);
    expect(chat.submissions).toHaveLength(0);
    h.store.close();
  });

  it("stops on an implausible (empty) finalized context without overwriting the file", async () => {
    const { h, run } = await completedRun();
    setAutopilot(h.store, 1);
    const chat = script([doc("D"), "ok"], [verdict("supports")]);
    const r = await autopilotCycle(deps(h, chat), run);
    expect(r.ok).toBe(false);
    expect(loadCoordinatorContext(deps(h, chat).contextFile).exists).toBe(false);
    h.store.close();
  });
});
