# EXP-021-R2 — Clean Replay: Static Caption Recovery Across Ordinary Close/Reopen

Status: **PAUSED — preflight incomplete; no qualifying replay established. Coordinator disposition pending.**
Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-100540-dxLq`
Mode: LEARNING MODE
Proposed target: `FX_StaticCaptionLab02` (Form), `FX_StaticCaptionStaticReplay` (Static component)
Evidence directory: `evidence/EXP-021-R2/`

## Record provenance

This checkpoint was reconstructed by Codex from saved worker transcripts, current
repository state, and direct inspection of saved screenshots. The T4 worker
failed before creating its record or returning a final HARNESS REPORT. This
document does not turn T1, T2, or T4 into completed worker reports, reset any
recovery allowance, mark the harness run complete, or authorize another browser
attempt. No browser action or Mongoose mutation was performed during reconstruction.

## Objective

Independently replay accepted EXP-021 on a new User-scope Form with one named
Static component. Capture a pre-Caption baseline including No Colon, change only
Caption after that baseline, Save once, close the Form tab once, reopen through
Designer recent forms once in the same client context, and compare the component
state. A qualifying replay requires the brief's complete preflight and lifecycle
checks; the current run has not established those checks.

## Session and interruption history

- EXP-021 used worker session `ses_ef3088c9dffeVXzKs7W2YEdQa9`.
- EXP-021-R2 began in fresh session `ses_ef10a60fbffeISNVvtwfber51N`.
  T1 encountered authentication/configuration trouble and repeated Sign In clicks;
  it ended with MessageAbortedError. T2 repeated evidence-directory shell reads
  and was interrupted by the harness loop guard.
- T3 used new session `ses_ef1029371ffeYetXkBbkOyvBUf`, completed a bounded
  inspection, and reported only the visible Infor portal shell. Designer state,
  User scope, and target absence remained unresolved at that point.
- The operator subsequently reported restoring access manually using the existing
  Designer tab/client. This is an operator-provided fact; retained Designer-client
  identity and compliance of the full restoration history have not been independently
  established here. The earlier failed automatic attempts remain disclosed.
- The operator authorized one bounded T4 preflight. T4 performed Web Client
  inventory/filter checks, saved screenshots 06–10, then repeatedly searched Git
  for this not-yet-created record. The guard interrupted the task. No final T4
  worker report was delivered.

The brief explicitly has `new_record: true`. The record's initial absence was
expected; listing tracked Git files repeatedly could not create it. Repository
absence must not be used to infer Mongoose target absence.

## Inspected evidence and limits

| File under evidence/EXP-021-R2/ | Visible observation | What it does not establish |
|---|---|---|
| `01-direct-designer-entry-federation-error.png` | Infor Federation Hub error with ID `ERR_MISSING_TENANT_OR_SESSION` | Whether a separate existing Designer was usable |
| `03-webclient-signin-dialog-config-error.png` | Web Client Sign In page with configuration retrieval error / Invalid Configuration Name | Successful authentication or usable Designer state |
| `05-t3-recovery-inspection-portal-shell.png` | System Administrator portal shell and user greeting | Mongoose Designer readiness, editing scope, or target inventory |
| `06-t4-preflight-webclient-clean.png` | Mongoose Web Client Explorer, no visible form or sign-in prompt | Designer visibility, clean Designer state, or User editing scope |
| `07-ac1-positive-control-name-filter-hit.png` | Select Form has Filter By Name, Case Sensitive unchecked, filter `FX_FormPropertyLab13`, and one matching Name row | Absence of the proposed target or editing scope |
| `09-ac1-target-absent-name-filter-clean-0rows.png` | Same Select Form surface, Filter By Name, Case Sensitive unchecked, filter `fx_staticcaptionlab02`, zero displayed rows | Whole-database cardinality, persistence, or Designer/User-scope readiness |

These six images were directly inspected for this reconstruction. Other saved
screenshots are preserved but not independently interpreted here. The positive
control and target-filter captures provide bounded UI-level absence evidence at
T4's inspection time. They do not establish that the target is absent now, nor
substitute for the missing Designer and User-scope checks.

## Acceptance status

| Check | Current status |
|---|---|
| AC-1 | **Incomplete**: fresh worker identity is recorded; live Web Client Name-filter positive control and zero target results are observed. Visible Designer readiness, User editing scope, retained-client identity, and compliance of the restoration history remain unresolved. |
| AC-2 | **Not established**: no qualifying target creation/success evidence |
| AC-3 | **Not established**: no Static creation/naming or pre-Caption baseline evidence |
| AC-4 | **Not established**: no controlled Caption mutation evidence |
| AC-5 | **Not established**: no target Save evidence |
| AC-6 | **Not established**: no target close evidence |
| AC-7 | **Not established**: no target reopen evidence |
| AC-8 | **Not established**: no post-reopen component comparison evidence |
| AC-9 | **Pending**: full lifecycle counts cannot pass when the tested lifecycle has not been established |

The reviewed T4 trace contains inventory/filter interaction and shell/file reads,
not target Form creation or target-property mutation. This is action accounting
from saved traces, not permission to blindly replay interrupted actions.

## Repository confinement and knowledge state

Before this reconstruction, Git status showed only `evidence/EXP-021-R2/` as new.
This reconstruction creates only this experiment record; existing screenshots
were not changed. Changes remain confined to this record and the experiment's
evidence directory. No brief, code, recipe, prior record, or environment file was
changed.

- Saved error states and T4 Name-filter observations: **observed**.
- Designer readiness, User scope, client continuity, and full preflight compliance:
  **unresolved**.
- Static-Caption lifecycle replay: **unresolved**; no `replay_verified` promotion.
- Accepted EXP-021 remains an observed result and is not invalidated by this
  unfinished replay.

## Handoff

The harness is paused with a planned coordinator WORKER_FAILURE message. Recovery
allowance is exhausted and autopilot is off. The coordinator must evaluate this
checkpoint and operator instructions before any further task. Do not assume
AC-1 passed or begin creation solely because the Web Client filter worked.
Another identical worker retry is not an established remedy for the shell loop.
