# EXP-057 T1 — read-only preflight (Designer and inherited Web Client runtime)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 0, task T1.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `8ea38de0-5411-4956-a6d3-3f6e112b988f`.
Date: 2026-10-11. Editing scope in the Designer footer: `User` / `anton.ramos@3mworks.com.ph`. Target Form `FX_Items`.

**Outcome: preflight complete. No discrepancy with the EXP-056 final state was found, so no recovery was attempted.** The Designer shows an empty canvas with no Form open. The inherited Web Client tab shows FX_Items with the three original records and no FX_VarTestEdit. Nothing was opened, closed, clicked, saved, or activated.

## 1. Actions performed (in order)

1. Read `AGENTS.md`. Read the EXP-056 experiment record and its T8, T9 and T10 reports. Glob checks: no `experiments/EXP-057*` record and no `evidence/EXP-057/` directory existed before T1.
2. `browser_tabs list` (before any tab selection). Result: tab 0 = Infor Mongoose Designer (`.../WSWebClient/designer/default.aspx`, current); tab 1 = Mongoose on the Infor OS portal (`mingle-portal...?favoriteContext=FX_Items`). Console log entry `evidence/playwright/console-2026-10-11T09-23-15-484Z.log`.
3. `browser_tabs select 0` (succeeded on the first attempt after the list).
4. Untargeted `browser_snapshot` of tab 0 (in-session only). Parallel read-only reads of the EXP-056 T8, T9, T10 reports.
5. `browser_snapshot` saved to `evidence/EXP-057/t1-snapshot-00-designer-tab0-fresh-empty-canvas.md`.
6. `browser_take_screenshot` of tab 0 saved to `evidence/EXP-057/t1-01-designer-empty-canvas-user-scope-clean.png`.
7. `browser_tabs select 1` (succeeded; tab list had been taken in step 2).
8. `browser_snapshot` saved to `evidence/EXP-057/t1-snapshot-01-runtime-tab1-fresh-inherited.md`, and `browser_take_screenshot` saved to `evidence/EXP-057/t1-02-runtime-tab1-inherited-fx-items-not-acted.png` (taken in parallel as read-only calls).
9. Image and snapshot files read back to verify their content.

Not performed (by instruction): any click in the Designer or runtime; Form menu or recent-forms route; Open/Select Form; Form tab close; Variables tab; Designer Save, Regenerate, Undo or Redo; FX_Refresh; Hello World prompt interaction; typing; key presses; evaluate/run-code; diagnostics, preferences, FormSync, cache, SQL, or any reload/navigation.

## 2. Counts (T1)

- Tab lists: 1 (before the first select). Tab selects: 2 (tab 0 and tab 1), both succeeded.
- Fresh snapshots: 3 (two of tab 0, one of tab 1). Snapshot refs were not used for any action.
- Screenshots: 2 (`t1-01`, `t1-02`).
- Browser mutations: 0. Clicks: 0. Typing: 0. Key presses: 0. Designer Save: 0. Form close or open: 0. Runtime open or close: 0. FX_Refresh activations: 0. Hello World prompts observed: 0. Dismissals: 0.
- Browser-reference errors: 0. Timeouts: 0. Portal banner dismissals: 0 (no banner was visible).
- Note: the tool output for each screenshot shows a generated Playwright line. It is tool-generated, not a worker-written script. No script was written.

## 3. Designer (tab 0) — observed

Evidence: `evidence/EXP-057/t1-01-designer-empty-canvas-user-scope-clean.png`; `evidence/EXP-057/t1-snapshot-00-designer-tab0-fresh-empty-canvas.md`.

- Form tab list (`tablist`): empty. No `FX_Items` heading and no closable Form tab. The Designer shows no open Form.
- Canvas: empty. The Properties panel shows the empty state ("Empty Property Description Field"). Toolbox visible.
- Toolbar: Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, Redo `[disabled]`. Alignment, Tab Order, and sizing buttons disabled.
- Footer (toolbar text): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. This is the Designer's scope, not a Form identity.
- Dialogs: none. Session challenge: none. No sign-in or configuration screen.
- Designer console: 3 errors, 0 warnings. EXP-056 T1 recorded 2 `TypeError ... 'adorner'` errors on Pane selections; the source of the third error is not identified here. Not investigated.

## 4. Web Client runtime (tab 1, inherited) — observed, not acted on

Evidence: `evidence/EXP-057/t1-02-runtime-tab1-inherited-fx-items-not-acted.png`; `evidence/EXP-057/t1-snapshot-01-runtime-tab1-fresh-inherited.md`.

- Portal page `Mongoose`, `iframe` active. The Mongoose frame's Form tab is selected with heading `FX_Items` (tabpanel `FX_Items`). The tab's close control (`Close Panel FX_Items`) was not clicked.
- Header identity: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Records in the grid: row 1 `dumbbell` / `45 pound iron` / `45.00` / `EA`; row 2 `eggs` / `cage free` / `6.99` / `DZ`; row 3 `guitar` / `natural acoustic` / `129.99` / `EA`.
- Detail fields for the current row (row 1): Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`.
- Button `FX_Refresh` rendered (one button). No second Hello World prompt or dialog visible.
- Toolbar Save `[disabled]`.
- Status bar: `FX_Refresh (Object 1 of 3)`.
- **No `FX_VarTestEdit` in the rendered Form or the accessibility tree.** The only data components visible are the grid and the Item, Description, Cost, and Unit of Measure fields, plus `FX_Refresh`.
- Pre-existing DevTools panel (already open; not touched). Its Log Messages rows show an FX_Items load at 07:08:00.855–07:08:00.949, including `StdFormRefreshCompleted, result 0, num handlers for event 0, num executed 0`, and later `VarValue` changes at 07:08:44.703 (StdCurFormPage / StdLastFormPage).

Inference (not proven): the inherited runtime instance appears to have been loaded before the `StdFormRefreshCompleted` handler and FX_VarTestEdit existed (the load log shows zero handlers for that event). The load-time relation to the EXP-055 and EXP-056 saves was not reconciled, so this remains open. T3 closes and reopens the runtime, which is the intended check.

## 5. Reconciliation with EXP-056 final state (T10 §10)

| Item | EXP-056 final state (T8–T10 reports) | EXP-057 T1 observation | Match |
| --- | --- | --- | --- |
| Designer open Form | None (T9 close; reopen failed) | Form tab list empty; no Form | Match |
| Designer canvas | Empty canvas | Empty canvas; Properties empty | Match |
| Designer Save / Regenerate / Undo / Redo | Disabled | All disabled | Match |
| Designer scope footer | User / anton.ramos@3mworks.com.ph | Same | Match |
| Dialogs | None | None | Match |
| Runtime tab | Inherited T1 runtime, not interacted with since T1 | Inherited FX_Items tab, same three records, FX_Refresh, Save disabled | Match |
| Runtime FX_VarTestEdit | Not present (runtime never reopened after Edit placed) | Not present | Match |
| Designer console errors | 2 (T1), "2–3" later | 3 errors | Count differs; not investigated |

No discrepancy requiring a stop was found. The Designer count difference is recorded only.

## 6. Acceptance matrix (T1 scope)

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 Read-only preflight: inherited tabs before first selection, empty Designer Form list, clean Designer controls, User scope, inherited runtime state, separate screenshots and snapshots, reconciliation with EXP-056 | **Supported with limits** | Sections 2–5; `t1-01`, `t1-02`; `t1-snapshot-00`, `-01`. Limits: the User scope is the Designer footer, not a Form identity (no Form is open); runtime state is read from the rendered UI only. |
| AC-2 to AC-11 | **Not tested in T1** | Out of T1 scope (Designer recovery, runtime opening, prompts, refresh, final reconciliation). |

## 7. Limits

- The Designer footer ScopeName is observed; Form-level scope (ScopeType and ScopeName of FX_Items) cannot be read until a Form is open (T2).
- The runtime observation is one session's rendered UI and accessibility tree. Its load time and handler state are not reconciled (Section 4).
- The Designer's third console error is not identified.
- No durability, cache, FormSync, or cross-session claim is made.

## 8. Next permitted action (not started)

T2 Designer recovery through the native Form menu recent-forms entry (one attempt, one permitted retry after fresh visibility evidence), then one alternative route only if both fail. Not started in T1, by instruction.

## 9. Blockers

None for T1.

## 10. Files written (T1)

- `evidence/EXP-057/T1-preflight-report.md` (this report)
- `evidence/EXP-057/t1-01-designer-empty-canvas-user-scope-clean.png`
- `evidence/EXP-057/t1-02-runtime-tab1-inherited-fx-items-not-acted.png`
- `evidence/EXP-057/t1-snapshot-00-designer-tab0-fresh-empty-canvas.md`
- `evidence/EXP-057/t1-snapshot-01-runtime-tab1-fresh-inherited.md`
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (created; T1 status)

Not modified: `AGENTS.md`, EXP-056 record and evidence, recipes, `tools/`, `docs/`, any Mongoose artifact.
