import { execFile } from "node:child_process";
import type { HarnessConfig } from "./config.js";
import type { RunRow, Store } from "./store.js";
import type { LogSink } from "./util/log.js";

/**
 * Per-experiment git flow for the factory repository (the harness does all git work, never the worker):
 *   start:   clean check -> checkout main -> pull --ff-only -> new branch exp/<EXP-ID>
 *   finish:  commit ONLY paths the experiment may change -> push branch -> merge --no-ff into main
 *            (accepted always; blocked when git.mergeBlocked) -> push main
 * Unexpected changes outside those paths stop the merge and are left for the operator.
 * Only fixed git subcommands run, via execFile (no shell); authentication is git's own credential
 * manager (the harness never sees tokens).
 */

type GitCfg = HarnessConfig["git"];

/** Harness development files: never auto-committed and never block (the operator commits those). */
const DEV_PREFIX = "tools/learning-harness/";
const DEV_ALLOWED = ["tools/learning-harness/context/", "tools/learning-harness/briefs/"];

export class Git {
  constructor(
    private readonly cwd: string,
    private readonly log: LogSink,
  ) {}

  run(args: string[], allowFail = false): Promise<{ code: number; stdout: string; stderr: string }> {
    return new Promise((resolve, reject) => {
      execFile("git", args, { cwd: this.cwd, windowsHide: true, maxBuffer: 32 * 1024 * 1024 }, (err, stdout, stderr) => {
        const code = err ? ((err as NodeJS.ErrnoException & { code?: number }).code as unknown as number) || 1 : 0;
        if (err && !allowFail) {
          this.log.log("warn", "git.failed", { args: args.join(" "), stderr: stderr.slice(0, 500) });
          reject(new Error(`git ${args.join(" ")} failed: ${(stderr || err.message).trim().slice(0, 400)}`));
          return;
        }
        resolve({ code: typeof code === "number" ? code : 1, stdout, stderr });
      });
    });
  }

  async isRepo(): Promise<boolean> {
    return (await this.run(["rev-parse", "--is-inside-work-tree"], true)).stdout.trim() === "true";
  }
  async branch(): Promise<string> {
    return (await this.run(["rev-parse", "--abbrev-ref", "HEAD"])).stdout.trim();
  }
  async hasRemote(remote: string): Promise<boolean> {
    return (await this.run(["remote"], true)).stdout.split(/\r?\n/).includes(remote);
  }
  async branchExists(name: string): Promise<boolean> {
    return (await this.run(["rev-parse", "--verify", "--quiet", `refs/heads/${name}`], true)).code === 0;
  }
  /** Changed paths (modified, added, deleted, untracked), repo-relative with forward slashes. */
  async changes(): Promise<string[]> {
    const out = (await this.run(["status", "--porcelain=v1", "-z", "--untracked-files=all"])).stdout;
    const parts = out.split("\0").filter(Boolean);
    const paths: string[] = [];
    for (let i = 0; i < parts.length; i++) {
      const code = parts[i].slice(0, 2);
      paths.push(parts[i].slice(3));
      if (code.startsWith("R") || code.startsWith("C")) i++; // rename/copy: next entry is the source
    }
    return paths.map((p) => p.replace(/\\/g, "/"));
  }
}

const isDev = (p: string) => p.startsWith(DEV_PREFIX) && !DEV_ALLOWED.some((d) => p.startsWith(d));

/** Paths an experiment run may change (and that are committed for it). */
export function allowedForExperiment(p: string, experimentId: string): boolean {
  const id = experimentId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    new RegExp(`^experiments/${id}(-[^/]*)?\\.md$`).test(p) &&
    !new RegExp(`^experiments/${id}-R\\d+`).test(p) // EXP-007 must not claim EXP-007-R2's record
  ) ||
    p.startsWith(`evidence/${experimentId}/`) ||
    p.startsWith("recipes/") ||
    p.startsWith("environments/") ||
    p.startsWith("claims/") ||
    DEV_ALLOWED.some((d) => p.startsWith(d));
}

export function branchName(experimentId: string): string {
  if (!/^EXP-\d{3,}(-R\d+)?$/.test(experimentId)) throw new Error(`unexpected experiment id ${experimentId}`);
  return `exp/${experimentId}`;
}

export type GitResult = { ok: true; detail: string } | { ok: false; detail: string };

export async function prepareRunBranch(git: Git, cfg: GitCfg, experimentId: string): Promise<GitResult & { branch?: string }> {
  if (!(await git.isRepo())) return { ok: false, detail: "the factory folder is not a git repository (see README: git setup)" };
  const dirty = (await git.changes()).filter((p) => !isDev(p));
  const harnessOwn = dirty.filter((p) => DEV_ALLOWED.some((d) => p.startsWith(d)));
  const other = dirty.filter((p) => !harnessOwn.includes(p));
  if (other.length) return { ok: false, detail: `uncommitted changes in the factory repo; commit or finalize them first: ${other.slice(0, 8).join(", ")}${other.length > 8 ? " …" : ""}` };
  const remote = cfg.push && (await git.hasRemote(cfg.remote));
  await git.run(["checkout", cfg.mainBranch]);
  if (remote) await git.run(["pull", "--ff-only", cfg.remote, cfg.mainBranch]);
  // Context/brief updates made between runs (autopilot, `harness next`) belong on main before branching.
  if (harnessOwn.length) {
    await git.run(["add", "-A", "--", ...harnessOwn]);
    await git.run(["commit", "-m", "harness: context/briefs update", "-m", `Before ${experimentId}. Committed automatically by the learning harness.`]);
    if (remote) await git.run(["push", cfg.remote, cfg.mainBranch]);
  }
  let branch = branchName(experimentId);
  if (await git.branchExists(branch)) branch = `${branch}-${Date.now().toString(36)}`;
  await git.run(["checkout", "-b", branch]);
  return { ok: true, detail: `on branch ${branch}`, branch };
}

export async function finalizeRun(git: Git, cfg: GitCfg, store: Store, run: RunRow): Promise<GitResult> {
  if (!(await git.isRepo())) return { ok: false, detail: "not a git repository" };
  const branch = store.getSetting(`git:branch:${run.id}`);
  if (!branch) return { ok: false, detail: `no branch recorded for run ${run.id}` };
  if ((await git.branch()) !== branch) return { ok: false, detail: `expected to be on ${branch}, but HEAD is ${await git.branch()}` };

  const changed = (await git.changes()).filter((p) => !isDev(p));
  const unexpected = changed.filter((p) => !allowedForExperiment(p, run.experiment_id));
  if (unexpected.length) {
    return { ok: false, detail: `changes outside ${run.experiment_id}'s allowed paths — nothing committed or merged; review them: ${unexpected.slice(0, 10).join(", ")}` };
  }
  const outcome = run.status === "completed" ? run.outcome ?? "completed" : run.status;
  if (changed.length) {
    await git.run(["add", "-A", "--", ...changed]);
    await git.run(["commit", "-m", `${run.experiment_id}: ${outcome}`, "-m", `Harness run ${run.id}. Committed automatically by the learning harness.`]);
  }
  const remote = cfg.push && (await git.hasRemote(cfg.remote));
  if (remote) await git.run(["push", "-u", cfg.remote, branch]);

  const merge = run.status === "completed" && (run.outcome === "accepted" || (run.outcome === "blocked" && cfg.mergeBlocked));
  if (!merge) return { ok: true, detail: `committed on ${branch}${remote ? " and pushed" : ""}; not merged (${outcome})` };
  await git.run(["checkout", cfg.mainBranch]);
  await git.run(["merge", "--no-ff", branch, "-m", `Merge ${run.experiment_id} (${outcome})`]);
  if (remote) await git.run(["push", cfg.remote, cfg.mainBranch]);
  store.setSetting(`git:merged:${run.id}`, "1");
  return { ok: true, detail: `merged ${branch} into ${cfg.mainBranch}${remote ? " and pushed" : " (no remote configured: local only)"}` };
}
