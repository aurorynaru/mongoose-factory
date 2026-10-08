import { execFileSync } from "node:child_process";
import { existsSync, lstatSync, readFileSync, readlinkSync } from "node:fs";
import { resolve } from "node:path";
import { hash } from "./files.js";
export type GitState = Record<string, string>;
export function gitState(root: string): GitState {
  const run = (args: string[]) => execFileSync("git", ["--literal-pathspecs", ...args], { cwd: root, encoding: "utf8", windowsHide: true });
  const fields = run(["status", "--porcelain=v1", "-z", "--untracked-files=all"]).split("\0");
  const out: GitState = {};
  const add = (file: string, status: string) => {
    const abs = resolve(root, file);
    if (!abs.startsWith(resolve(root) + (process.platform === "win32" ? "\\" : "/"))) throw new Error("Git path escaped repository");
    const content = !existsSync(abs) ? "missing" : lstatSync(abs).isSymbolicLink() ? hash(readlinkSync(abs)) : lstatSync(abs).isFile() ? hash(readFileSync(abs)) : "directory";
    out[file] = hash(JSON.stringify([status, content, run(["ls-files", "-s", "-z", "--", file])]));
  };
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i]) continue; const status = fields[i].slice(0, 2), file = fields[i].slice(3);
    add(file, status); if (/[RC]/.test(status)) add(fields[++i], "rename-source");
  }
  return out;
}
export function touched(before: GitState, after: GitState) {
  return [...new Set([...Object.keys(before), ...Object.keys(after)])].filter(p => before[p] !== after[p]).sort();
}
