import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

export type DirSnapshot = Record<string, { size: number; mtimeMs: number }>;

/** Directories whose changes are reported as evidence/documentation changes after each worker task. */
export function watchedDirs(evidenceDir: string): string[] {
  return [evidenceDir, "experiments", "recipes", "environments", "claims"];
}

export function snapshotDirs(factoryRoot: string, dirs: string[], maxFiles = 5000): DirSnapshot {
  const out: DirSnapshot = {};
  const walk = (abs: string) => {
    if (Object.keys(out).length >= maxFiles || !existsSync(abs)) return;
    for (const e of readdirSync(abs, { withFileTypes: true })) {
      const p = join(abs, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.isFile()) {
        const st = statSync(p);
        out[relative(factoryRoot, p).replace(/\\/g, "/")] = { size: st.size, mtimeMs: st.mtimeMs };
      }
    }
  };
  for (const d of dirs) walk(join(factoryRoot, d));
  return out;
}

export function diffSnapshots(before: DirSnapshot, after: DirSnapshot): { added: string[]; modified: string[]; removed: string[] } {
  const added: string[] = [];
  const modified: string[] = [];
  const removed: string[] = [];
  for (const [k, v] of Object.entries(after)) {
    if (!before[k]) added.push(k);
    else if (before[k].size !== v.size || before[k].mtimeMs !== v.mtimeMs) modified.push(k);
  }
  for (const k of Object.keys(before)) if (!after[k]) removed.push(k);
  return { added: added.sort(), modified: modified.sort(), removed: removed.sort() };
}
