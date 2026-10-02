import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ConfigSchema } from "../src/config.js";
import { allowedForExperiment, finalizeRun, Git, prepareRunBranch } from "../src/git.js";
import { Store, type RunRow } from "../src/store.js";
import { MemoryLogger } from "../src/util/log.js";

/** Real git against a temporary repo whose "origin" is a local bare repo (stands in for GitHub). */
function setup() {
  const dir = mkdtempSync(join(tmpdir(), "harness-git-"));
  const origin = join(dir, "origin.git");
  const repo = join(dir, "factory");
  const g = (cwd: string, ...args: string[]) => execFileSync("git", args, { cwd, encoding: "utf8" });
  mkdirSync(repo);
  g(dir, "init", "--bare", "-b", "main", origin);
  g(repo, "init", "-b", "main");
  g(repo, "config", "user.name", "Test");
  g(repo, "config", "user.email", "test@example.invalid");
  writeFileSync(join(repo, "AGENTS.md"), "# agents\n");
  g(repo, "add", ".");
  g(repo, "commit", "-m", "init");
  g(repo, "remote", "add", "origin", origin);
  g(repo, "push", "-u", "origin", "main");
  const store = new Store(":memory:");
  const cfg = ConfigSchema.parse({}).git;
  return { dir, repo, origin, g, store, cfg, git: new Git(repo, new MemoryLogger()) };
}

const run = (o: Partial<RunRow>): RunRow => ({ id: "R-1", experiment_id: "EXP-010", status: "completed", outcome: "accepted", ...o }) as RunRow;
const write = (repo: string, rel: string, text = "x") => {
  mkdirSync(join(repo, rel, ".."), { recursive: true });
  writeFileSync(join(repo, rel), text);
};

describe("allowed paths", () => {
  it("allows only the experiment's own record/evidence plus shared knowledge folders", () => {
    expect(allowedForExperiment("experiments/EXP-007-literal-form.md", "EXP-007")).toBe(true);
    expect(allowedForExperiment("experiments/EXP-007-R2-replay.md", "EXP-007")).toBe(false);
    expect(allowedForExperiment("experiments/EXP-007-R2-replay.md", "EXP-007-R2")).toBe(true);
    expect(allowedForExperiment("evidence/EXP-007/01.png", "EXP-007")).toBe(true);
    expect(allowedForExperiment("evidence/EXP-007-R2/01.png", "EXP-007")).toBe(false);
    expect(allowedForExperiment("recipes/forms/x.md", "EXP-007")).toBe(true);
    expect(allowedForExperiment("tools/learning-harness/context/coordinator-context.md", "EXP-007")).toBe(true);
    expect(allowedForExperiment("AGENTS.md", "EXP-007")).toBe(false);
    expect(allowedForExperiment("experiments/EXP-006-other.md", "EXP-007")).toBe(false);
  });
});

describe("per-experiment branch flow (real git)", () => {
  it("branches from main, commits only allowed paths, merges --no-ff and pushes both", async () => {
    const t = setup();
    const p = await prepareRunBranch(t.git, t.cfg, "EXP-010");
    expect(p).toMatchObject({ ok: true, branch: "exp/EXP-010" });
    t.store.setSetting("git:branch:R-1", "exp/EXP-010");
    write(t.repo, "experiments/EXP-010-test.md", "# EXP-010");
    write(t.repo, "evidence/EXP-010/01.png", "png");
    write(t.repo, "tools/learning-harness/src/dev.ts", "dev change"); // harness development: ignored
    const r = await finalizeRun(t.git, t.cfg, t.store, run({}));
    expect(r).toMatchObject({ ok: true });
    expect(t.g(t.repo, "rev-parse", "--abbrev-ref", "HEAD").trim()).toBe("main");
    expect(t.g(t.repo, "log", "--oneline", "-1")).toContain("Merge EXP-010 (accepted)");
    const files = t.g(t.repo, "show", "--name-only", "--format=", "HEAD^2");
    expect(files).toContain("experiments/EXP-010-test.md");
    expect(files).not.toContain("tools/learning-harness/src/dev.ts");
    expect(t.g(t.origin, "log", "--oneline", "main", "-1")).toContain("Merge EXP-010");
    expect(t.g(t.origin, "branch", "--list", "exp/EXP-010")).toContain("exp/EXP-010");
    t.store.close();
  });

  it("refuses to start on a dirty tree (experiment files) but ignores harness development files", async () => {
    const t = setup();
    write(t.repo, "tools/learning-harness/src/dev.ts");
    expect((await prepareRunBranch(t.git, t.cfg, "EXP-010")).ok).toBe(true);
    t.g(t.repo, "checkout", "main");
    write(t.repo, "experiments/EXP-009-left-over.md");
    const r = await prepareRunBranch(t.git, t.cfg, "EXP-011");
    expect(r.ok).toBe(false);
    expect(r.detail).toContain("experiments/EXP-009-left-over.md");
    t.store.close();
  });

  it("does not commit or merge when files outside the allowed paths changed", async () => {
    const t = setup();
    await prepareRunBranch(t.git, t.cfg, "EXP-010");
    t.store.setSetting("git:branch:R-1", "exp/EXP-010");
    write(t.repo, "experiments/EXP-010-test.md");
    write(t.repo, "AGENTS.md", "tampered");
    const r = await finalizeRun(t.git, t.cfg, t.store, run({}));
    expect(r.ok).toBe(false);
    expect(r.detail).toContain("AGENTS.md");
    expect(t.g(t.repo, "rev-parse", "--abbrev-ref", "HEAD").trim()).toBe("exp/EXP-010");
    expect(t.g(t.repo, "log", "--oneline", "main")).not.toContain("Merge");
    t.store.close();
  });

  it("merges blocked runs (negative findings are knowledge) but not paused ones", async () => {
    const t = setup();
    await prepareRunBranch(t.git, t.cfg, "EXP-010");
    t.store.setSetting("git:branch:R-1", "exp/EXP-010");
    write(t.repo, "experiments/EXP-010-test.md");
    expect(await finalizeRun(t.git, t.cfg, t.store, run({ outcome: "blocked" }))).toMatchObject({ ok: true });
    expect(t.g(t.repo, "log", "--oneline", "-1")).toContain("Merge EXP-010 (blocked)");

    await prepareRunBranch(t.git, t.cfg, "EXP-011");
    t.store.setSetting("git:branch:R-2", "exp/EXP-011");
    write(t.repo, "experiments/EXP-011-test.md");
    const r = await finalizeRun(t.git, t.cfg, t.store, run({ id: "R-2", experiment_id: "EXP-011", status: "paused", outcome: null }));
    expect(r.detail).toContain("not merged");
    expect(t.g(t.repo, "rev-parse", "--abbrev-ref", "HEAD").trim()).toBe("exp/EXP-011");
    t.store.close();
  });
});
