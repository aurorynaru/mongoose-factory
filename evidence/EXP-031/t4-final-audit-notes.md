# EXP-031 T4 — final dismissal + read-only audit (experiment BLOCKED classification)

Run: R-20261007-200942-NcTj, cycle 5, task T4. Date: 2026-10-07.
No filter input, no reopen, no OK/Enter, no row activation, no Form open/save/close/create/edit, no auth/preference/unload actions this task.

## §A Pre-dismissal recorded state (no change before dismissal)

Fresh untargeted snapshot: same two tabs/URLs; dialog subtree inspection shows the post-T3 retained state verbatim: textbox active exact `FX_SelectFormFilterProbe01`, combobox `Name`, checkbox "Case Sensitive" unchecked, checkbox "Starts With" unchecked, grid = header Caption|Name + exactly one rendered row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02`. Inspected screenshot `t4-01-pre-final-cancel-retained-state.png` (visually identical to T3's post-reopen observation — corroborates the preserved post-T3 state).

## §B Final ordinary Cancel (the one permitted dismissal)

One click on the dialog's Cancel control -> `find "Select Form"` = none: dialog dismissed, non-activating. NO subsequent reopen performed. Post-dismissal inspected screenshot `t4-02-after-final-cancel-clean-webclient.png`: Web Client identity bar (`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), DEM badge, Explorer tree intact, `FX_ComponentRecoveryLab03` panel heading + Close Panel control still present, toolbar buttons greyed (Save/New/Delete/Refresh etc. disabled = clean), no dialog/prompt anywhere; the filter textbox value is NOT visible after dismissal (dialog gone) — final retained-filter knowledge comes from §A.

## §C Cumulative action counts (reconciled across T1-T4)

- Initial Open (to enter test): 0 (dialog already open at T1).
- Filter-setting operations: 2 (T2 positive control; T3 probe).
- Tested Cancels: 2 (T2, T3). Tested reopens (Open): 2 (T2, T3).
- Final dismissal Cancel: 1 (T4) — total dialog-Cancel clicks = 3 (two tested + one final dismissal).
- OK/Enter pressed: 0. Rows activated: 0. Forms opened/closed/saved/created/edited: 0. Unloads/preferences/auth/Designer launches: 0.
- Retained filter at last inspection before dismissal: probe text + Name + unchecked/unchecked (recorded §A); after dismissal the dialog is gone, so no live filter state persists in UI.

## §D Inspection-recovery accounting vs the brief's allowance (explicit, not normalized)

The brief authorized "at most ONE fresh snapshot plus one corrected visible inspection if a reopened result is ambiguous." Actual recovery-class activity across the experiment:
- T2 reopen inspection: fresh untargeted snapshot + corrected subtree snapshot — WITHIN allowance.
- T3 start guard: targeted snapshot on a stale cross-conversation ref ERRORED (no Mongoose/browser state change; harness ref staleness), then one fresh untargeted snapshot used as the authorized recovery; additionally the post-reopen inspection itself used fresh `find` + corrected subtree snapshot — mirroring T2's allowance shape.
- T4 guard: fresh untargeted snapshot + subtree inspection (final audit task, not a reopened-result ambiguity repair).

State: strictly counting fresh-snapshot+corrected-inspection CYCLES conditioned on ambiguous REOPENED results, the allowance was consumed by T2 and invoked again once in T3 — at/over the single bounded allowance if counted cumulatively. It was NOT used to repair/refill/reopen anything (prohibited regardless of count); every inspection recorded state as-found; the AC-3 leg was stopped, not repaired. This accounting is reported explicitly rather than normalized, per instruction.

## §E Acceptance-check classification (final)

| AC | Final status | Basis |
|----|--------------|-------|
| AC-1 preflight/baseline | COMPLETE (observed) | T1 evidence: workflow usable without auth; already-open dialog; inherited settings/rows captured with zero changes. |
| AC-2 positive-control sequence + retention leg | PASS (observed) | T2: counts 1/1/1; exact text/settings retained, inspected before further input; settled grid showed exactly the expected row `FX_ComponentRecoveryLab02`. |
| AC-3 absence-probe zero-visible-match postcondition | FAILED for classification purposes (per this task's instruction) — applied-filter leg UNRESOLVED at execution time | T3: probe text/settings retained, but the reopened visible view showed `FX_ComponentRecoveryLab02` (stale/ambiguous), NOT a proven zero-visible-match view; no permitted recovery remained; stop rule honored. Retention leg for the probe remains observed-positive. |
| AC-5 action accounting | COMPLETE | §C reconciles 2/2/2 + 1 dismissal, zero OK/activation/mutation actions. |
| AC-6 final dismissal + final state recorded | COMPLETE | §A/§B: retained filter documented before dismissal; clean post-dismissal Web Client state with Lab03 panel preserved; Designer tab never touched. |
| AC-7 confinement/classification | COMPLETE (observed only, NO promotion) | Repository confined (§F); all new findings observed/candidate_procedure/unresolved — no replay_verified claim. |

Experiment classification: **BLOCKED** on the applied-filter/zero-match characterization (AC-3 postcondition not proven; stale-view limitation irrecoverable within permitted interactions). Positive observations preserved: dialog text/settings retention across ordinary Cancel+reopen for both an existing-name filter and a never-created probe string; expected positive-control row visible after reopen.

## §F Repository/action audit

`git status --porcelain` at T4: modified `tools/learning-harness/{README.md, harness.config.example.json, src/shadow/cli.ts, src/shadow/runner.ts, test/shadow.test.ts}` — PRE-EXISTING harness paths (present identically in earlier tasks' audits within this run and explicitly listed as pre-existing harness paths in EXP-030's confinement audit; zero actions by this experiment touched them — no shell edits were made outside the two permitted paths at any task). New paths: `experiments/EXP-031-select-form-retained-filter-refresh-semantics.md` + `evidence/EXP-031/` only. No other repository writes by EXP-031 (this experiment performed none). Mongoose side: zero mutation requests observed in any task's audits (zero SaveChanges across all visible audits); inherited Web Client Lab03 runtime panel and Designer tab (`&MGForm=FX_ComponentRecoveryLab03`) preserved; no Form activation occurred (OK never pressed, `find` post-Cancel = none each time, Enter never used).

## §G Final browser/Form state

Tab 0: authenticated live Web Client, Select Form dialog DISMISSED, Lab03 runtime panel open/selected, toolbar clean (Save disabled), Explorer tree intact. Tab 1: one usable Designer at `&MGForm=FX_ComponentRecoveryLab03`, untouched throughout EXP-031. No prompts/dirty state anywhere.
