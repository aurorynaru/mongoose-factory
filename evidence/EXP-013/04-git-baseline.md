# T1 Preflight — Repository / worktree baseline (read-only)

Date: 2026-10-03 (EXP-013 T1, cycle 1, task T1)
Captured before this preflight wrote any file.

## Baseline

- Worktree **is** a git repository: branch **`exp/EXP-013`**, HEAD **`b945dc1`** (`harness: context/briefs update`).
- Recent history:
  - `b945dc1` harness: context/briefs update
  - `95d4cd5` Merge EXP-012 (blocked)
  - `536bacc` EXP-012: blocked
  - `c806882` harness: context/briefs update
  - `6cf61c5` Merge EXP-011 (blocked)
  - `ef579f4` EXP-011: blocked
- **Worktree status at preflight start:** **clean** — `git status --porcelain` empty; `git status` = "nothing to commit, working tree clean".
- **Expected new in this preflight (T1 window):** only `evidence/EXP-013/*` (screenshots + diagnostics) and `experiments/EXP-013-immediate-form-variable-definition-retention-acros.md` (this experiment's record).
- **NOT modified by this preflight (all predate the run):** `AGENTS.md`, `opencode.json`, `README.md`, `.gitignore`, `environments/current-environment.md`, every file under `recipes/`, and all other `experiments/EXP-00x-*.md` / `evidence/EXP-00x*/` files.