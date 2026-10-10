# EXP-048 T5 — Evidence summary (ONE native close; ONE reopen through Select Form; no recovery query)

Run `R-20261011-012552-sBdG`, cycle 4, task T5, task_message_id `20e7186a-a679-4ad7-bb92-835f18ab0d1a`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: verify the clean pre-close state; ONE close of the Property Classes tab through its native Form-tab control; ONE reopen through toolbar Open and Select Form as IdoPropertyClasses; verify clean Filter-in-Place mode. **No recovery query (T5 reserves both target recoveries), no New, no Save, no edit of any record, no check-in or checkout, no metadata lifecycle action, no browser refresh or re-authentication.** Classification: **observed, same session, UI level only. Not replay_verified. Database durability, cross-session persistence and application of either class to an IDO property are not tested.**

## Pre-close state (`T5-00`)

| Check | Observed |
| --- | --- |
| Form | Property Classes tab selected; URL `favoriteContext=IdoPropertyClasses`; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Save | Disabled (`find` "Save" → `[disabled]`; greyed in `T5-00`) |
| Rows | Row 1 FX_UM; row 2 FX_ItemBase; row 3 FX_Cost; all checked; **no stars** (no pending rows) |
| FX_Cost (displayed) | Decimal; 18; 2; 0; decimal; FX_sCost; Base Class and Domain blank |
| Dialog / prompt / banner | None (`find` "dialog" and "portal-notification" → no match) |
| Status | `Input Mask (IDO Property Classes 3 of 3)` |

Decision: clean; close permitted.

## Close (ONE action)

- ONE click on `Close Panel Property Classes` (ref `f1e101`, from the pre-close snapshot, label verified as `Close Panel Property Classes`). Returned without error; no timeout.
- Post-close (`T5-01`): the Property Classes tab is **removed** from the Form tablist; the Form area is empty; the toolbar is greyed (Save, New, Delete, Refresh, FiP, Get More Rows and related controls disabled); the Explorer is shown.
- **No save, discard or validation prompt** (`find` "dialog" → no match; no portal banner; `find` "Property Classes" → no match after the tab was removed).
- Close count: **1**.

## Reopen (ONE workflow)

| Step | Action | Observed |
| --- | --- | --- |
| 1 | Fresh untargeted snapshot (toolbar refs for the empty state; Open `f1e25` enabled, New and FiP disabled) | Empty state confirmed |
| 2 | ONE click on toolbar `Open` (`f1e25`) | Select Form dialog opened (`T5-02`); filter pre-filled `PropertyClass`; one row Caption `Property Classes`, Name `IdoPropertyClasses`, already highlighted |
| 3 | `find` "OK" (ref `f1e1023`, verified label `OK`) | One OK button |
| 4 | ONE click on OK (`f1e1023`) | Form reopened; no error |
| 5 | Wait 2 s; screenshot `T5-03`; read-only `find` checks: "Save", "Filter in Place", "dialog", "FX_", tab list | See the reopened state below |

Reopen count: **1**. No second Select Form, no second Open.

## Reopened state (`T5-03`)

| Check | Observed |
| --- | --- |
| Selected Form | Tab `Property Classes` with the FiP icon; URL `favoriteContext=IdoPropertyClasses`; `Select Form` row Name `IdoPropertyClasses` used to open |
| Mode | **Filter in Place**: status bar text `Filter in Place`; FiP icon on the tab heading |
| Criteria | Class Name textbox **empty** and focused; Base Class, Description, Revision, Locked By, Access As, Data Type, Length, Decimal Position, Default Value, Column Data Type, Label String ID, Domain fields and Property Value **all empty** |
| Grid | **One** row, row number `1`, row arrow shown, checkbox **unchecked**, Class Name cell **empty**. No star. No record data (`find` "FX_" → no match) |
| Interpretation of the row | A **clean FiP criteria row**, not a data record: no class value, unchecked, no record Locked By, no Revision values, and the status is the FiP status (not `n of n`). Not an add-mode placeholder (no star) |
| Save | **Disabled** (`find` "Save" → `[disabled]`; greyed in `T5-03`) |
| Check In / Undo Check Out | Not activated (the FiP view has no record) |
| Retained restrictive criteria | **None.** Every criterion is blank. The prior FX_UM criterion from T4 did not carry over (the T1 retained-criterion pattern did not reappear) |
| Dialogs / prompts / messages | None (`find` "dialog" → no match) |
| Tabs | One Mongoose tab (`browser_tabs` list) |

## Post-reopen recovery queries

**None performed in T5** (by instruction). The two target recoveries (FX_ItemBase and FX_Cost, one exact-name query each) are reserved for a separately authorized task. No criteria were typed and no F4 was pressed.

## Stale-ref observation (recorded; not recovered)

- After the reopen, the reference `f1e100` (taken from the pre-close snapshot, used for an accessibility capture of the form) returned `Ref f1e100 not found`. No action was executed.
- The T1 browser-recovery allowance remains exhausted (T1 used the single fresh untargeted snapshot and one corrected inspection). Per the T5 instruction, no additional recovery snapshot or retry sequence was attempted.
- The reopened-state checks above were therefore made with read-only `find` queries and screenshots only, and **no accessibility snapshot of the reopened form was captured**. This is a limitation of the evidence, not of the UI state.

## Preservation (qualified)

- FX_UM, FX_ItemBase and FX_Cost: no action targeted any record in T5. Their values are **not displayed** in the reopened FiP view (the grid is a blank criteria row), so their values are **not independently verified after the reopen**. They are supported by the T4 settled accessibility evidence and by the action log only.
- FX_UMBase: not displayed in T5 and not re-queried. **Not independently verified.**
- No checkout, check-in or Undo Check Out action was taken on any record.

## Action counts (T5)

| Operation | T5 | Cumulative EXP-048 (T1–T5) |
| --- | --- | --- |
| New | 0 | 2 |
| Save (toolbar) | 0 | 1 (shared, T4) |
| **Form close (native tab control)** | **1** | **1** |
| **Form reopen (toolbar Open + Select Form OK)** | **1** | **1** |
| Recovery (exact-name) queries | **0** | **0** |
| Check In / Check Out / Undo | 0 | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 |
| Errors | 1 stale ref (`f1e100`), not recovered; no action executed | 2 (T1 ref error; T5 ref error) |

T5 browser mutations: **3 clicks** (Close Panel Property Classes; toolbar Open; Select Form OK). No typing, no key presses, no Save or New.
T5 reads: 10 `browser_find` calls (pre-close: dialog, portal-notification; post-close: dialog, Property Classes; Select Form: Select Form, OK; reopened: Save, Filter in Place, dialog, FX_); 2 untargeted snapshots (before the close, and after the close in the empty state); 1 failed targeted snapshot (`Ref f1e100 not found`, which executed nothing); 1 tab list (end); 1 wait (2 s). Screenshots: 4 PNG (`T5-00`, `T5-01`, `T5-02`, `T5-03`).

Worker-authored JavaScript, evaluate, run-code, direct SQL: **0**. The tool wrapper generated code for each action; the worker supplied refs only.

## Evidence index (T5)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T5-00-pre-close-clean-three-records-saved.png` | Property Classes; rows FX_UM, FX_ItemBase, FX_Cost (no stars); FX_Cost values; Save greyed; status `3 of 3`; no dialog | The clean pre-close state (AC-7 precondition) | Stored state; accessibility values of FX_ItemBase |
| `T5-01-post-close-tab-removed-no-prompt.png` | Tab removed; Form area empty; toolbar greyed; no dialog or prompt | AC-7: the tab disappeared after one native close, with no save or discard prompt | Whether the close persisted anything beyond the earlier Save (none attempted) |
| `T5-02-select-form-dialog-open.png` | Select Form dialog: Filter `PropertyClass`; one row Caption `Property Classes`, Name `IdoPropertyClasses`, highlighted; OK, Cancel, Help | AC-7: Select Form identity before reopen | That the reopen succeeded (see T5-03) |
| `T5-03-reopened-IdoPropertyClasses-FiP-blank-criteria.png` | Property Classes reopened; FiP icon on the heading; status `Filter in Place`; all criteria blank; one unchecked empty criteria row; Save greyed; no dialog | AC-7: reopened as IdoPropertyClasses in clean FiP mode with no restrictive criteria and no data record | Any query result (none run); values of FX_UM, FX_ItemBase, FX_Cost (not displayed) |

No accessibility snapshot of the reopened form was captured (see the stale-ref observation).

## Acceptance check (AC-7)

- **AC-7: supported (same session, UI level) with one evidence limitation.**
  - Closed exactly once through the native Form-tab control: **supported** (`T5-01`; tab removed; no Save or discard prompt).
  - Reopened exactly once through Select Form as `IdoPropertyClasses`: **supported** (`T5-02`, `T5-03`; URL and Name match).
  - Reopened in clean Filter-in-Place mode with no restrictive retained criteria and no unexpected messages: **supported** (`T5-03`; read-only `find` checks).
  - Limitation: the reopened criteria row is shown in screenshots and read-only finds only. No accessibility snapshot of the reopened form, because the T1 recovery allowance is exhausted and a stale ref was returned. Interpretation of the blank row as a criteria row rests on the screenshot, the empty status counter and the absence of data text.
- AC-8, AC-9: not run (reserved for the separately authorized recovery task).
- AC-10: partial; the counts above reconcile to the controller actions and screenshots.

## Limits

- Single session, UI level. The reopened state is the Web Client's view. No database read.
- The reopened grid shows no FX_ record data, so no value of FX_UM, FX_ItemBase or FX_Cost was displayed after the reopen. Their post-reopen values are not verified in T5.
- "Clean" is judged from the screenshot and read-only finds (Save disabled, status `Filter in Place`, no dialog, no data text); no accessibility tree of the reopened form.
