# EXP-030 T2 — bounded read-only AC-1 completion check (Select Form refresh attempt)

Run: R-20261007-195234-KQJh, cycle 2, task T2. Date: 2026-10-07. No Mongoose mutation performed.

## Documentation lookup before acting (accepted sources only)

- EXP-027 canonical AC-1: target absence was established via the RECIPE store query on the grid store (`findRecord('mgdata',...)`), explicitly NOT via a settled refreshed rendered filtered view; its filter demonstration recorded that the Filter textbox does not live-filter the grid and OK was never pressed.
- EXP-027-R2 accepted AC-1: its zero-row result relied on the pre-fill coincidence (the dialog opened with filter text already equal to its target, so the single rendered row WAS the filtered answer; re-fill of the identical exact string changed nothing visible but the state was self-consistent), plus fresh snapshot counts. No refresh-from-open mechanic is documented there either.
- EXP-028 T1/T2 and EXP-029 T1 (accepted/recorded observations, consistent across three runs): this build does NOT re-render grid rows on filter-text change alone from an open dialog; EXP-028's only settled zero-row state came via Enter-commit in the filter textbox, which additionally ACTIVATES/opens a form (forbidden by this task: "do not ... reopen"; recipe pitfall honors OK-activates semantics).
- No other documented/verified refresh-from-open mechanic exists in the accepted sources.

## Actions performed (this task)

1. Fresh targeted snapshot of the current open Select Form dialog (tab 0): Filter textbox exact `FX_ButtonTypeRecoveryLab01` [active], Filter By=Name, Case Sensitive + Starts With visibly unchecked; grid = one stale pre-fill row `FX_ComponentRecoveryLab02` (T1 end state re-verified; no repeat of identical read without action).
2. The one documented EXP-027-R2 fill mechanic: one Playwright fill (`#textfield-1143-inputEl`) of the IDENTICAL exact string `FX_ButtonTypeRecoveryLab01` (no Enter, no OK, per recipe pitfall). No visible change; identical re-fill to a textbox already containing the exact string does not force a store query — not an effective refresh.
3. Bounded settled inspection (the one fresh-snapshot allowance): fresh untargeted page snapshot — dialog state unchanged: textbox exact `FX_ButtonTypeRecoveryLab01`, Filter By=Name, Case Sensitive visibly unchecked, inner grid still exactly the stale row `FX_ComponentRecoveryLab02`. Screenshot t2-01 written (filter field renders truncated `...uttonTypeRecoveryLab01` at the left edge; exact string from snapshot).
4. Read-only network audit: new requests after #256 = only static resources; ZERO new FormsApi/GetAllForms after this fill — confirming no refresh query was issued from the open dialog by the documented action. Zero SaveChanges total (unchanged).
5. No Cancel click performed this task (dismiss-then-reopen would be a two-step mechanism outside "start from the current open dialog" and substitutes for the failed refresh); Web Client Lab03 panel, Designer tab, and dialog left exactly as inherited.

## Settled result interpretation

The grid content did NOT settle to a refreshed filtered view after the bounded supported action; it remains stale (single pre-fill row `FX_ComponentRecoveryLab02`, which matches neither the positive-control string nor the target). Per the instruction's stop rule, the AC-1 completion check is BLOCKED: zero visible target rows cannot be proven over an explicitly stale rendered view within this task's constraints, and no clean supported refresh exists in the accepted evidence for an open dialog whose current text already equals the query.

## Evidence of absence so far (partial, unchanged)

T1 t1-03 positive control (settled single row for `FX_ComponentRecoveryLab02` at dialog open) + target-fill inspections show zero rendered rows matching `FX_ButtonTypeRecoveryLab01`, but only over stale content. Repository scan: target in no experiment/recipe record. NOT upgraded to a settled refreshed zero-match; AC-1 remains PARTIAL with the recorded limitation.

## Action counts (T2)

Tab actions: 0 selects (tab 0 already current). Open clicks: 0 (dialog already open). Filter fills: 1 (identical exact string, no Enter/OK). Snapshots: 1 targeted fresh + 1 fresh untargeted (the bounded allowance). Screenshots: 1. Cancel/OK/Enter presses: 0. Mutations on any Mongoose artifact: 0. Designer untouched this task.

## Next permitted action (not performed)

Candidate for a later cycle under its own instruction: ordinary non-activating Cancel dismissal of the dialog (as done in EXP-027 T3 / EXP-027-R2 T2), then one fresh Open click whose filter state settles at open with the exact target text — the two-step that produced accepted zero-row AC-1 evidence in EXP-028/EXP-029 lineage contexts. Prohibited inside this task; no decision recorded here.
