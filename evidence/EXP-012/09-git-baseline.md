# EXP-012 T1 — Repository / Worktree Baseline

Captured at preflight (before any mutation). No Mongoose artifact created,
modified, or deleted during T1.

## Commands

```
git rev-parse --abbrev-ref HEAD
git rev-parse HEAD
git status --porcelain
git log --oneline -5
```

## Output

- Branch: `exp/EXP-012`
- HEAD:   `c8068828c4c0ba8715354542239890fc1a86b9f7`
- Worktree status (porcelain):
  - `?? evidence/EXP-012/`  (untracked — this experiment's evidence dir, created by T1)
  - No modified/deleted tracked files.
- Recent log:
  - `c806882` harness: context/briefs update
  - `6cf61c5` Merge EXP-011 (blocked)
  - `ef579f4` EXP-011: blocked
  - `6cef206` Merge EXP-010-R2 (blocked)
  - `a7acbc6` EXP-010-R2: blocked

## Interpretation

- Worktree is clean at preflight start (only the new untracked evidence dir).
- HEAD is the harness context/briefs commit; no EXP-012 work committed yet.
- Baseline is suitable for a later T2+ diff to prove only intended artifacts changed.