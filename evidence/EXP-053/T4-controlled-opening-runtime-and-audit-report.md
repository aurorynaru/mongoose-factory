# EXP-053 T4 — Controlled FX_Items runtime opening (once), runtime observations, and action audit

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 3, task T4. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `b43f90e2-8664-4734-9a4e-4a5b34455766`. Date 2026-10-11. Target Form `FX_Items` (User-scoped). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

**Result: the one controlled FX_Items opening was performed and is consumed (no second opening). The native Diagnostic Log shows 20 `FormEvent (FX_Items)` rows, all between 05:22:07.945 and 05:22:07.976, after the single clear. The three existing records loaded automatically on the opening, with no manual collection load. Save is disabled. The refresh-before-apply branch was NOT triggered, because Form event entries appeared. Diagnostics Enable remains ON, as the bounded instruction requires for coordinator review. The AC-8 restoration to Off is still outstanding.**

Classification: observed only (single session, UI and accessibility). Not replay_verified. No causal, cross-session, or database claim. The full log sequence is in `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md`.

## 1. Prerequisites (verified before opening; no change made)

- Web Client tab 1 selected (fresh snapshot). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- FX_Items runtime tab **absent**: main area empty, form toolbar greyed (`t4-01`).
- Log Messages grid **empty**: the grid has no rows (`t3-07` from T3; re-confirmed in the pre-open snapshot, `grid [ref=f1e126]` with no children).
- No sign-in, configuration, authentication, portal banner, or unsafe dialog. Select Form was closed before this task.
- Diagnostics: Enabled ON, Events ON, Event Handler Include ON (T2 state; not inspected or changed in T4).
- Designer tab 0 was not touched.

## 2. The controlled opening (exactly once)

Sequence, each action once:
1. Toolbar `Open` (f1e23) clicked → Select Form dialog opened. The dialog showed one row, Caption `FX_Items` / Name `FX_Items`, filter text `FX_Items`, Filter By `Name`, Case Sensitive and Starts With unchecked (`dialog` snapshot, f1e139).
2. Row Name cell (f1e161) clicked once; the cell reports `[active]` (row selection, the same Select Form step used in EXP-052 T3/T9).
3. Select Form `OK` (f1e187) clicked once → dialog closed; FX_Items runtime tab opened.

Confirmed on opening: runtime tab heading `FX_Items` (`Close Panel FX_Items` f1e216), URL `favoriteContext=FX_Items`, no authentication challenge, no unexpected dialog. The configuration shown in the identity bar is the DEM configuration. Opening count for EXP-053: **1 (consumed)**.

## 3. Runtime state — immediate (after OK; untargeted snapshot and `t4-02`)

- Records: three rows, numbered `1`, `2`, `3` (`gridcell "1"`, `"2"`, `"3"`); row 1 current. No starred or placeholder row in the accessibility text.
- Business values (accessibility, all twelve):

| Row | Item | Description | Cost | Unit of Measure |
| --- | --- | --- | --- | --- |
| 1 | dumbbell | 45 pound iron | 45.00 | EA |
| 2 | eggs | cage free | 6.99 | DZ |
| 3 | guitar | natural acoustic | 129.99 | EA |

- Detail inputs (row 1): Item `dumbbell` (greyed key input), Description `45 pound iron` (focused by the form, text selected), Cost `45.00`, Unit of Measure `EA`.
- Status text `Description (Object 1 of 3)`.
- Toolbar **Save disabled** (f1e26).
- Toolbar state: Refresh and Filter in Place buttons enabled; Get More Rows disabled. None of these was invoked.

Screenshot `t4-02` (viewed): FX_Items title, rows 1–3 with row 1 current, dumbbell detail inputs, Cost `45.00`, UM `EA`, status `Description (Object 1 of 3)`, Save greyed, and the DevTools Log Messages list showing the first five rows (05:22:07.945). Proves the immediate runtime state and the first log rows. Does **not** show the eggs and guitar grid cells fully (clipped; accessibility used) or the remaining log rows.

## 4. Runtime state — settled (3 s, no action; `t4-03`, `t4-04`)

- Wait: a pure 3-second wait with no key, click, or runtime command.
- Status `Description (Object 1 of 3)` (find, read-only); unchanged.
- All twelve business values re-read from the accessibility tree (saved snapshot `t4-04`): identical to the immediate values above.
- Records: three rows only; no fourth row; no placeholder.
- Save disabled (f1e26).
- Diagnostic Log: same 20 rows as the immediate state; no additional rows appeared while settling.

Screenshot `t4-03` (viewed): visually identical to `t4-02`. Proves the settled state at 3 s. Does not prove database contents.

## 5. Automatic loading (AC-5 determination)

The three existing records **appeared automatically on the opening**, with no manually initiated collection-loading action. Native record count: `Object 1 of 3` (three records). Save state: disabled. Values: matching the EXP-052 end state (dumbbell / eggs / guitar).

This matches the EXP-052 T9 observation of an opening after Initial Command = Refresh. In this task the observation is recorded for FX_Items at the diagnostic-log level only. The worker did not isolate the cause (see sequence report Part B).

No postcondition failure: the opening loaded the expected three records, and nothing needed correction.

## 6. Diagnostic Log after the opening (summary; full in the sequence report)

- Grid rows: **20** `FormEvent (FX_Items)` rows, all with source `WinStudio` and type `Diagnostics`.
- Timestamps as displayed: `05:22:07.945` (9 rows) and `05:22:07.976` (11 rows).
- Event names in display order (start/result pairs): StdFormPredisplay, StdFormInitCompleted, StdFormRefresh (start), StdFormGetBoundValues, StdObjectRefresh, StdObjectSelectCurrentCompleted, StdObjectRefreshCompleted, StdFormLoadBoundValues, StdFormLoadDerivedValues, StdFormRefreshCompleted, StdFormRefresh (result).
- `EventHandler (...)` rows: none. Every row reports `num handlers for event 0`.
- Unattributable rows: none observed in this window.
- Limits: the panel renders about six rows at a time. The accessibility tree contains all 20 and is the source. The wheel scroll attempt (`t4-05`) did not move the visible list.

## 7. Refresh-before-apply branch (operator clarification)

**Not triggered.** Diagnostics options were confirmed with OK in T2 (Enabled ON). The log was cleared once (T3) and FX_Items was opened once (T4). Form event entries **did** appear (20 rows). Therefore: no refresh-before-apply requirement is recorded; the browser was not refreshed; the log was not cleared again; the Form was not reopened.

## 8. Diagnostics preference state (not changed in T4)

- General > Enabled: **ON** (set in T2). **Restoration to Off (T1 original) is still required (AC-8).** Per the bounded T4 instruction, Enabled was left ON for coordinator review and the separately authorized AC-8 restoration task.
- Form > Events: ON (unchanged; never clicked).
- Form > Event Handler > Include: ON (unchanged; never clicked).
- The other 29 Diagnostics options: unchanged from T1 (verified in T2 reopen).
- No User Preferences dialog was opened in T4.

## 9. Action audit (T4)

Browser actions in order (all single, none in parallel):
1. `browser_tabs list`.
2. `browser_tabs select 1` (Web Client).
3. Snapshot, untargeted (pre-open gate).
4. Screenshot `t4-01` (pre-open, no runtime tab, log cleared).
5. Click `Open` (f1e23) — opening workflow, step 1.
6. Snapshot, untargeted (Select Form visible).
7. Click FX_Items Name cell (f1e161) — opening workflow, step 2 (row selection inside Select Form).
8. Find `Select Form`.
9. Snapshot, targeted to the dialog (f1e139) — confirmed row `[active]`.
10. Click `OK` (f1e187) — opening workflow, step 3. **Controlled opening (count 1).**
11. Snapshot, untargeted (immediate state; 20 log rows present).
12. Screenshot `t4-02` (immediate).
13. Wait 3 s (settle, no action).
14. Screenshot `t4-03` (settled).
15. Find `Object 1 of` (read-only status check).
16. Snapshot saved to `evidence/EXP-053/t4-04-settled-accessibility-snapshot-runtime-and-log.md` (settled runtime and full log).
17. Mouse wheel (deltaY 600) over the page — attempted to scroll the log view; **no visible effect** (`t4-05`). View-only; not a collection load.
18. Screenshot `t4-05`.

Counts:
- Controlled FX_Items openings: **1** (consumed). Select Form OK: 1. Row selections inside Select Form: 1.
- Clicks: 3 total (Open, FX_Items row Name cell, OK). All three are the opening workflow.
- Snapshots: 5 (untargeted 3, targeted 1, saved to file 1).
- Finds: 2 (read-only).
- Screenshots: 4 calls (`t4-01`, `t4-02`, `t4-03`, `t4-05`).
- Wait: 1 (3 s).
- Mouse wheel: 1 (no visible effect).
- Tab list 1; tab selects 1.
- **Manual post-opening collection loads: 0.** No Refresh, F4, Filter-in-Place, Get More Rows, or other collection-loading action after the opening.
- **Runtime data mutations: 0.** No record edits, no Save, no New, no Delete, no typing into any field.
- Log clears in T4: **0** (the single clear was consumed in T3).
- Diagnostics preference inspections/confirmations/changes in T4: **0**.
- Designer actions: 0. Initial Command changes: 0. Designer saves: 0.
- Reloads, navigations, reauthentications, browser restarts: 0.
- Prompts or unsaved-change dialogs answered: 0. Dialogs accepted: 0.
- Browser evaluate or run-code calls: 0 (the `Ran Playwright code` lines are the tool's own generated locator snippets).
- Timeouts: 0. Ref-not-found: 0. Errors: 0. Authentication challenges: 0.
- Note on the Select Form row click: the Name cell was clicked as the row-activation step. This is part of the established Select Form workflow, not an additional open.

Tool-generated browser files (not worker-authored), under `evidence/playwright/` in the T4 window: `console-2026-10-11T05-21-51-627Z.log`, `page-2026-10-11T05-21-58-008Z.yml`, `page-2026-10-11T05-22-02-326Z.yml`, `page-2026-10-11T05-22-07-932Z.yml`, `page-2026-10-11T05-22-15-795Z.yml`.

## 10. Limitations

- Single session, UI and accessibility. No database read; the three records' stored values are not independently read.
- The log panel is a partial visual view (about six rows); the accessibility DOM is the complete source for the 20 rows.
- Timestamps show milliseconds only (no date).
- Event ordering and names are as displayed. The log does not state the triggering cause of any event; attribution to the opening is by timing and the `FX_Items` name only.
- Whether the panel renders all entries written by the server is not established.
- The Initial Command–to-load relationship is not isolated in this task.

## 11. Final browser state

- Web Client tab 1 selected. DEM identity. Runtime FX_Items tab **open** (selected) with three records, Save disabled, status `Description (Object 1 of 3)`. Not closed (not required by the instruction).
- DevTools Diagnostic Log open on Log Messages. The grid holds the 20 rows (about six visible at once). No clear performed.
- No dialog, prompt, banner, or authentication challenge. Select Form closed.
- Designer tab 0 untouched.
- Stable: no unsaved change; no open in-page dialog.

## 12. Next steps and obligations

1. Coordinator review of the T4 result (sole controlled opening consumed; 20 Form event rows observed).
2. **Restoration (AC-8), authorized separately:** General > Enabled from ON back to OFF via the native User Preferences dialog, ordinary OK, then a read-only reopen comparing all 32 Diagnostics options against the T1 baseline. The Enabled checkbox input was intercepted by an ExtJS overlay in T2; the visible label click succeeded. Events and Event Handler Include must remain ON (never changed).
3. No further opening, clear, or collection load is permitted in this experiment.
