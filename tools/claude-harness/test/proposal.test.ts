import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { briefProblems } from "../src/brief.js";
import { HARNESS_DIR } from "../src/config.js";
import { BASE_PROHIBITED, extractProposal, proposalProblems, proposalToBrief, requestProposal, type Proposal } from "../src/proposal.js";
import { FakeChat } from "../src/testing/fakes.js";
import { harness } from "../src/testing/scenario.js";
import { MemoryLogger } from "../src/util/log.js";

const FACTORY = join(HARNESS_DIR, "fixtures", "factory");

const base = (o: Partial<Proposal> = {}): Record<string, unknown> => ({
  protocol: "mongoose-harness/proposal-v1",
  experiment_id: "EXP-905",
  title: "Static caption round trip",
  rationale: "Builds on observed component procedures.",
  objective: "Change the caption of FX_TitleStatic and verify it persists.",
  in_scope: ["Caption of FX_TitleStatic on FX_ComponentLab09"],
  out_of_scope: ["events", "scripts"],
  prohibited_actions: ["Adding event handlers"],
  prohibited_patterns: [String.raw`\bevent handler\b`],
  related_experiments: [],
  editing_scope: "User",
  target_form: "FX_ComponentLab09",
  target_artifacts: ["FX_TitleStatic"],
  acceptance_checks: [{ id: "AC-1", description: "Caption persists after close/reopen (screenshot)" }],
  replay_of: null,
  initial_instruction: null,
  ...o,
});
const md = (o: Record<string, unknown>) => "Here is my proposal.\n\n```json\n" + JSON.stringify(o, null, 2) + "\n```";
const briefsDir = () => mkdtempSync(join(tmpdir(), "briefs-"));

describe("proposal parsing and validation", () => {
  it("extracts exactly one valid proposal", () => {
    const r = extractProposal(md(base()));
    expect(r.ok).toBe(true);
    expect(extractProposal("No block here").ok).toBe(false);
    expect(extractProposal(md(base()) + md(base())).ok).toBe(false);
    const missing = extractProposal(md({ ...base(), acceptance_checks: [] }));
    expect(missing.ok === false && missing.problems.join()).toMatch(/acceptance_checks/);
  });

  it("rejects reused IDs, non-FX targets, bad regexes, wrong replay naming and TODOs", () => {
    const p = (o: Partial<Proposal>) => extractProposal(md(base(o))) as { ok: true; proposal: Proposal };
    const dir = briefsDir();
    expect(proposalProblems(p({}).proposal, FACTORY, dir)).toEqual([]);
    expect(proposalProblems(p({ experiment_id: "EXP-900" }).proposal, FACTORY, dir).join()).toMatch(/already exists/);
    expect(proposalProblems(p({ target_form: "G6RItems" }).proposal, FACTORY, dir).join()).toMatch(/not FX_/);
    expect(proposalProblems(p({ prohibited_patterns: ["(unclosed"] }).proposal, FACTORY, dir).join()).toMatch(/invalid prohibited_pattern/);
    expect(proposalProblems(p({ experiment_id: "EXP-905", replay_of: "EXP-900" }).proposal, FACTORY, dir).join()).toMatch(/must be named EXP-900-R/);
    expect(proposalProblems(p({ experiment_id: "EXP-900-R2", replay_of: "EXP-900" }).proposal, FACTORY, dir)).toEqual([]);
    expect(proposalProblems(p({ experiment_id: "EXP-905-R2" }).proposal, FACTORY, dir).join()).toMatch(/require replay_of/);
    expect(proposalProblems(p({ objective: "TODO" }).proposal, FACTORY, dir).join()).toMatch(/TODO/);
  });

  it("becomes an UNREVIEWED brief for a new record, with the base prohibitions always included", () => {
    const r = extractProposal(md(base({ prohibited_actions: [] }))) as { ok: true; proposal: Proposal };
    const b = proposalToBrief(r.proposal, FACTORY, "R-prev");
    expect(b.reviewed).toBe(false);
    expect(b.new_record).toBe(true);
    expect(b.record_path).toBe("experiments/EXP-905-static-caption-round-trip.md");
    expect(b.evidence_dir).toBe("evidence/EXP-905");
    for (const x of BASE_PROHIBITED) expect(b.prohibited_actions).toContain(x);
    expect(briefProblems(b, FACTORY)).toEqual(['Brief has "reviewed": false. Review the scope and acceptance checks, then set it to true.']);
    expect(briefProblems({ ...b, reviewed: true }, FACTORY)).toEqual([]);
    expect(briefProblems({ ...b, reviewed: true, new_record: false }, FACTORY).join()).toMatch(/does not exist/);
  });
});

describe("requestProposal (fake Tab 1)", () => {
  const deps = (chat: FakeChat, dir: string) => ({
    chat,
    factoryRoot: FACTORY,
    briefsDir: dir,
    protocolDir: join(HARNESS_DIR, "protocol"),
    proposalsDir: join(dir, "proposals"),
    log: new MemoryLogger(),
    replyTimeoutMs: 10_000,
  });

  it("sends the request with the protocol and existing experiments, and saves a draft brief", async () => {
    const chat = new FakeChat({ coordinator: [md(base())], specialist: [] });
    const dir = briefsDir();
    const r = await requestProposal(deps(chat, dir), null);
    expect(r.ok).toBe(true);
    const sent = chat.submissions[0].text;
    expect(sent).toContain("kind=NEXT_EXPERIMENT_PROPOSAL");
    expect(sent).toContain("mongoose-harness/proposal-v1");
    expect(sent).toContain("EXP-900 — Fixture Experiment (test only) — in progress");
    const saved = JSON.parse(readFileSync(join(dir, "EXP-905.brief.json"), "utf8"));
    expect(saved.reviewed).toBe(false);
  });

  it("asks once for a correction, then gives up without writing a brief", async () => {
    const bad = md(base({ experiment_id: "EXP-900" }));
    const chat = new FakeChat({ coordinator: [bad, md(base())], specialist: [] });
    const dir = briefsDir();
    expect((await requestProposal(deps(chat, dir), null)).ok).toBe(true);
    expect(chat.submissions[1].text).toContain("kind=PROPOSAL_CORRECTION");
    expect(chat.submissions[1].text).toContain("already exists");

    const chat2 = new FakeChat({ coordinator: [bad, "still no block"], specialist: [] });
    const dir2 = briefsDir();
    const r2 = await requestProposal(deps(chat2, dir2), null);
    expect(r2.ok).toBe(false);
    expect(existsSync(join(dir2, "EXP-900.brief.json"))).toBe(false);
  });

  it("can open a NEW coordinator chat for the proposal and report its URL", async () => {
    const chat = new FakeChat({ coordinator: [md(base())], specialist: [] });
    const dir = briefsDir();
    const urls: string[] = [];
    const r = await requestProposal({ ...deps(chat, dir), newChatHome: "https://chatgpt.com/", onNewConversation: (u) => urls.push(u) }, null);
    expect(r.ok).toBe(true);
    expect(chat.newChats).toHaveLength(1);
    expect(urls).toEqual(["https://chatgpt.com/c/fake-new-coordinator-1"]);
  });

  it("does not overwrite an existing brief unless forced", async () => {
    const dir = briefsDir();
    await requestProposal(deps(new FakeChat({ coordinator: [md(base())], specialist: [] }), dir), null);
    const r = await requestProposal(deps(new FakeChat({ coordinator: [md(base()), md(base())], specialist: [] }), dir), null);
    expect(r.ok).toBe(false);
    expect((await requestProposal(deps(new FakeChat({ coordinator: [md(base())], specialist: [] }), dir), null, { force: true })).ok).toBe(true);
  });
});

describe("running an approved brief for a NEW experiment", () => {
  it("tells Tab 1 the record does not exist yet and must be created by the worker", async () => {
    const h = harness({ coordinator: [{ envelope: { action: "PAUSE", reason: "p" } }] });
    const r = extractProposal(md(base())) as { ok: true; proposal: Proposal };
    const b = { ...proposalToBrief(r.proposal, h.factoryRoot, null), reviewed: true };
    const loaded = { brief: b, path: "x", hash: "h" };
    const run = await h.controller.run(h.controller.createRun(loaded).id);
    expect(h.chat.submissions[0].text).toContain("This is a NEW experiment: experiments/EXP-905-static-caption-round-trip.md does not exist yet");
    expect(run.experiment_id).toBe("EXP-905");
    h.store.close();
  });
});

