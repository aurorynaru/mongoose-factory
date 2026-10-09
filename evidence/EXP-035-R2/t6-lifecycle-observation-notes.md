# EXP-035-R2 — T6 notes: guard-state check and one tested Cancel/reopen observation

Run R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 9, task T6.
worker_session_id: 69ed601b-bbc3-4abd-8c53-6a6415410f36. task_message_id: a6e920bc-ab4e-43ab-a6a8-cb7869cc1ef3.
Provenance of the T3 call sequence: `evidence/EXP-035-R2/t6-operator-t3-provenance-notes.md` (operator-reported; not worker-inspected).

## §A Guard-state check (before any lifecycle action)

Captures (planned read-only; fresh untargeted snapshot, not recovery):
- `evidence/EXP-035-R2/t6-01-guard-state-snapshot.md`
- `evidence/EXP-035-R2/t6-02-guard-state-viewport.png`

| Guard | Observed (snapshot t6-01 unless stated) | Result |
|---|---|---|
| Select Form OPEN | `dialog "Select Form" [ref=f1e77]` present | PASS |
| Textbox exact value | `textbox [ref=f1e106]: FX_ComponentRecoveryLab02` (accessibility line) | PASS |
| Filter By Name | `combobox [ref=f1e112]: Name` | PASS |
| Case Sensitive unchecked | `checkbox "Case Sensitive" [ref=f1e116]`, no checked marker | PASS |
| Starts With unchecked | `checkbox "Starts With" [ref=f1e121]`, no checked marker | PASS |
| Exactly one row, Name exact | ONE `table [ref=f1e94]` → ONE `rowgroup` → ONE `row` with gridcells `FX_ComponentRecoveryLab02` (`f1e97`, `f1e99`) | PASS |
| Normal Web Client available | Identity button `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; menus; toolbar; no sign-in or configuration screen; no browser-native dialog visible | PASS |

Noted, not a guard condition: the snapshot shows the textbox without `[active]` and the iframe without `[active]` (focus had left the iframe). The screenshot shows the textbox text highlighted. The brief does not list focus as a guard; the worker proceeded and records the observation here.

Screenshot `t6-02-guard-state-viewport.png` (viewed):
- SHOWS: identity bar and DEM badge; Select Form open over the Web Client; Filter By `Name`; both checkboxes empty; one row `FX_ComponentRecoveryLab02` in Caption and Name; Filter text highlighted with the leading characters visible as `FX_ComponentRecoveryL`.
- DOES NOT SHOW: the rest of the textbox value (truncated by the field width). The exact value comes from the accessibility line.

## §B Tested lifecycle (one Cancel, one reopen; each result recorded)

| # | Action | Target | Result | Verification |
|---|---|---|---|---|
| 1 | `browser_click` Cancel (ordinary Select Form Cancel) | `f1e127` (Cancel, from t6-01) | Returned without error; page URL and title unchanged | Tool artifact `evidence/playwright/page-2026-10-09T13-48-47-116Z.yml` contains NO `dialog "Select Form"` node; the toolbar Open button `f1e23` is present. Closure verified by accessibility read. |
| 2 | `browser_click` toolbar Open (ordinary reopen of Select Form) | `f1e23` (Open, from the post-Cancel snapshot) | Returned without error | Tool snapshot `evidence/playwright/page-2026-10-09T13-48-52-205Z.yml`; the worker's post-reopen snapshot confirms the dialog (below). |

Count: Cancel **1/1**; tested reopen **1/1**; no second Cancel, no second reopen, no retry. No typing, clearing, focusing, selecting, toggling or other changes after the reopen.

## §C Post-reopen capture (no interaction)

Captures (fresh untargeted snapshot and viewport screenshot, taken after the reopen click; no other action):
- `evidence/EXP-035-R2/t6-03-post-reopen-snapshot.md`
- `evidence/EXP-035-R2/t6-04-post-reopen-viewport.png`

| Item | Observed (ACTUAL reopened state) |
|---|---|
| Dialog | `dialog "Select Form" [ref=f1e77]` open |
| Textbox contents (accessibility) | `textbox [active] [ref=f1e106]: FX_ComponentRecoveryLab02` (exact) |
| Textbox focus | `[active]` in the snapshot; focus was not set by the worker (no focus click, no key input in T6). Cause of the focus state not established. |
| Filter By | `combobox [ref=f1e112]: Name` |
| Case Sensitive | `checkbox "Case Sensitive" [ref=f1e116]`, no checked marker → unchecked |
| Starts With | `checkbox "Starts With" [ref=f1e121]`, no checked marker → unchecked |
| Rendered rows | ONE table → ONE rowgroup → ONE row; gridcells `FX_ComponentRecoveryLab02` (Caption, `f1e97`) and `FX_ComponentRecoveryLab02` (Name, `f1e99`) |
| Buttons | OK `f1e125`, Cancel `f1e127`, Help `f1e129`: present, unpressed |

Screenshot `t6-04-post-reopen-viewport.png` (viewed):
- SHOWS: dialog open over the Web Client; identity bar and DEM badge; Filter field with the value highlighted (selected) and visibly beginning `FX_ComponentRecoveryL`; Filter By `Name`; both checkboxes empty; one row in both columns; an "Open" tooltip at the toolbar from the reopen click (not part of the dialog).
- DOES NOT SHOW: the rest of the textbox value (truncated). The highlight cause is not established; the EXP-035 T5 record observed the same highlight on reopen and left its cause unresolved.

## §D Reading (rendered UI only)

- Rendered state after one Cancel and one reopen matches the settled pre-Cancel state of T3/T4/T6-guard on every item the snapshot records: textbox value, Filter By, both checkbox states, and the single row.
- Interpretation is limited to the rendered UI across this one boundary. No persistence, cache, server refresh, session, database or serialization conclusion is drawn.
- Retention is an observation, not a pass/fail requirement (per the brief). The observation: the filter text and Filter By are visibly present after the reopen.

## §E Recovery allowance (shared; unchanged by T6)

- Fresh untargeted snapshot: **0 used / 1 remaining**. The guard and post-reopen snapshots were planned captures, not recovery.
- Corrected visible inspection: **0 used / 1 remaining**.
- No "Ref not found", timeout, or ambiguous read in T6.

## §F Final state

- Select Form is **OPEN** after the post-reopen capture (as the brief requires). The optional final ordinary Cancel was NOT performed (final Cancel 0/1). No further reopen.
- Single browser tab; Web Client usable; no browser-native dialog observed in the captured frames.

## §G Files written in T6

- `evidence/EXP-035-R2/t6-operator-t3-provenance-notes.md` (created)
- `evidence/EXP-035-R2/t6-lifecycle-observation-notes.md` (this file; created)
- `evidence/EXP-035-R2/t6-01-guard-state-snapshot.md` (written by snapshot call)
- `evidence/EXP-035-R2/t6-02-guard-state-viewport.png` (written by screenshot call)
- `evidence/EXP-035-R2/t6-03-post-reopen-snapshot.md` (written by snapshot call)
- `evidence/EXP-035-R2/t6-04-post-reopen-viewport.png` (written by screenshot call)
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (updated)
- Tool-generated, not worker-authored (outside permitted paths): `evidence/playwright/*2026-10-09T13-48-*` (guard, Cancel, Open, and post-reopen snapshots and console logs).
