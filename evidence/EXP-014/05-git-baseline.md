# EXP-014 — Repository / worktree baseline (T1, for AC-11 confinement audit)

Captured 2026-10-03 during T1 preflight, before any Mongoose artifact mutation.

## Git state at preflight start

- `git status --porcelain`: `?? evidence/EXP-014/` (only the new evidence directory; no tracked file modified).
- Branch: `exp/EXP-014`
- HEAD: `fb6c318` — `harness: context/briefs update`
- Recent history:
  - `fb6c318 harness: context/briefs update`
  - `9e519d9 Record EXP-009 shadow grading evidence`
  - `166c9af Add frozen worker shadow tests for local model comparisons`
  - `d4ed81f Document switching between Strata and TabbyAPI`
  - `8e570a5 Select Strata as the factory OpenCode worker`
  - `7507040 Add Strata model option for OpenCode worker`

## Confinement baseline

- **Tracked files modified at preflight start:** none (worktree clean apart from the new evidence dir).
- **NOT modified by this run (all predate the run):** `AGENTS.md`, `opencode.json`, `README.md`, `.gitignore`, `environments/current-environment.md`, every file under `recipes/`, `tools/`, and all other `experiments/EXP-00x-*.md` / `evidence/EXP-00x*/` files.
- **EXP-014-attributable changes (this run):** only `experiments/EXP-014-form-variable-definition-recovery-across-ordinary-.md` and files under `evidence/EXP-014/`.
- **Conclusion:** worktree starting state is clean for EXP-014 purposes; no recipe, environment, AGENTS.md, or prior experiment file was modified by this preflight. EXP-014-attributable changes are confined to this record and `evidence/EXP-014/`.
