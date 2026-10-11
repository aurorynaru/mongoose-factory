# EXP-056 T2 — native Set Values step: stopped at the unsaved checkpoint (no mutation)

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 1, task T2.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `d58b87c8-b422-49d9-9594-5b3436dc9b5f`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: stopped before any mutation.** No sequence-1 action was added, no FX_VarTest definition was created, no FX_VarTestEdit was placed, and no Save, close, reopen, or runtime action occurred. The Designer is clean (Save disabled). The reason is recorded in §3: the native route to append a second action to the existing handler could not be identified without either creating a second handler or copying the Prompt.

## 1. Gate (AC-1 prerequisite, re-verified)

- `browser_tabs list` (before any select). Tab 0 Designer, tab 1 Web Client (`favoriteContext=FX_Items`).
- `browser_tabs select 0` succeeded. Fresh snapshot `t2-snapshot-00-fresh-designer-pre-mutation.md`.
- Designer: heading and Form tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate Form, Undo, Redo disabled.
- Event Handlers: one group `StdFormRefreshCompleted`; one row sequence `0`, Response Type `Prompt`, Disabled `false`, Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
- Components baseline (16 rows): recorded in `T1-preflight-report.md` §4 and not re-read in T2 (no component was touched in T2).

## 2. FX_VarTest definition check (Variables, pre-mutation; AC-2 collision check)

- The Variables list search box (read-only filter) was used because the Global groups are virtualized in T1.
- Filter `VarTest`: the list rendered **no rows** after the filter applied (`t2-snapshot-01-variables-filter-VarTest-pre-mutation.md`; the clear icon appeared, so the filter was active).
- Positive control, filter `Initial`: the list rendered **only** `InitialCommand` under `Form - Persistent` (`playwright/page-2026-10-11T08-39-40-198Z.yml` lines 292–294). The filter therefore works on known names.
- Filter cleared (empty text, Enter). The Variables list is back to its normal state.
- **Result: FX_VarTest is absent from the Variables collection** (Form category and Global groups, through the filter). This is an observed absence, not an inference from unseen rows.
- Limit: the filter matches on the list's name column. The filter was not tested against a Global name, only against `InitialCommand`.

## 3. Append-action route (stop point)

The brief requires one sequence-1 Set Values action appended to the existing handler using the native Event Handlers interface. The following was checked:

| Control or path | Observation | Action taken |
| --- | --- | --- |
| Handler toolbar, button 1 | Tooltip **`New`** (`t2-02-hover-handler-toolbar-first-button-tooltip.png`) | One click (`t2-03`). Opened an **"Event Handler"** dialog with `Name: StdFormRefreshCompleted` pre-filled (`t2-03-after-new-click-handler-dialog-observed.png`, `t2-snapshot-03`). |
| The same dialog | A handler-creation dialog with Name, OK and Cancel. Confirming it would most likely create a **second handler** for the same event, not a second action. | **Cancelled** (one click). Save stayed disabled; grid unchanged (`t2-snapshot-04`). |
| Handler toolbar, button 2 (Copy) | Would duplicate the Prompt row, so the copy would carry Prompt parameters into the new row. | **Not used.** |
| Handler toolbar, buttons 3–4 (Up, Down) | Reorder only; no add. | Not used. |
| Response node (sequence-0 row, property tree) | Exposes Type (Prompt), Parameters (Open Edit Property Dialog), Edit in-line Script. No add-action control. | Not used. |
| Right-click on the sequence-0 row | No context menu appeared. The click focused the `Disabled` cell, still `false` (`t2-04-right-click-sequence-0-row-context-probe.png`). | No key pressed while focused. |
| Earlier experiments | Searched `experiments/`: no record of adding a second action to an existing handler. | — |

Conclusion: the native route for a second action on the existing handler is **not identified** in the visible UI. The worker did not guess. Confirming the New dialog or using Copy would each be a guess with a side effect.

## 4. What was not reached

- The Set Values row and its Parameters > Variables ellipsis > New workflow. These require the sequence-1 action row, which does not exist.
- The `P(Description)` syntax check in the native Set Values interface. It cannot be verified without the action row. The expression remains **unverified**.
- The FX_VarTest definition with its value, which the brief places inside the Set Values workflow. It was not created through another path.
- The Edit component (outside T2's scope).

## 5. Acceptance status after T2

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified in T2 §1) | `t2-snapshot-00`; footer; Save disabled; one row |
| AC-2 | Supported with limits (T1; re-checked in T2 §2) | FX_VarTest absent (filter with positive control); no FX_VarTestEdit (T1 §4–5); no sequence-1 action |
| AC-3 | **Not established** | No sequence-1 action; two-action state not reached. The sequence-0 Prompt was unchanged in readback (no edit made). |
| AC-4 | **Partly observed; not established** | Variables definition observed **absent** (`t2-snapshot-01`). No Set Values assignment exists, so the assignment half was not captured. |
| AC-5 to AC-12 | Not tested (outside T2) | — |

## 6. Action counts (T2)

- Tab lists 1; tab selects 1 (tab 0).
- Fresh snapshots: 5 (`t2-snapshot-00`, `-01`, `-02`, `-03`, `-04`).
- Screenshots: 4 (`t2-01`, `t2-02`, `t2-03`, `t2-04`).
- Clicks that succeeded: 4 (Event Handlers tab; New; Cancel; right-click on the sequence-0 row). One Cancel attempt used a wrong target string (`"Cancel"`) and returned "does not match any elements"; no browser action was executed.
- Hover: 1.
- Typing into the Variables list filter: 3 (`VarTest`, `Initial`, empty). Enter key presses: 3 (to apply each filter).
- Expand clicks: 0 in T2 (the Variables list was already expanded from T1).
- Set Values rows added: 0. Handler groups added: 0. Actions copied: 0. Variable definitions created: 0. Edit components placed: 0.
- Designer Save: 0. Designer close/reopen: 0. Regenerate Form: 0.
- Runtime open/close/activation: 0. FX_RefreshButton clicks: 0. Runtime data edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts: 0.
- Console errors: the Designer shows the same 2 `adorner` TypeErrors as in T1. Not investigated (per the brief).

## 7. Evidence files (T2)

- `T2-report.md` (this report)
- `t2-01-pre-mutation-event-handlers-one-prompt-row.png` — Event Handlers tab, one group, one sequence-0 Prompt row selected; Save greyed; User footer. Does not show the Variables collection.
- `t2-02-hover-handler-toolbar-first-button-tooltip.png` — tooltip `New` over the first handler-toolbar button. Does not show what New does (the dialog is in t2-03).
- `t2-03-after-new-click-handler-dialog-observed.png` — the "Event Handler" dialog with Name `StdFormRefreshCompleted`, OK and Cancel. The dialog was cancelled; the screenshot shows it open, not its result.
- `t2-04-right-click-sequence-0-row-context-probe.png` — Disabled cell focused, value `false`; no context menu. Does not show the Disabled cell's value after any key press (no key was pressed).
- Snapshots: `t2-snapshot-00-fresh-designer-pre-mutation.md`, `t2-snapshot-01-variables-filter-VarTest-pre-mutation.md`, `t2-snapshot-02-after-hover-tooltip-check.md`, `t2-snapshot-03-event-handler-new-dialog-open.md`, `t2-snapshot-04-final-unsaved-checkpoint-no-mutation.md`.
- Tool-generated snapshots (gitignored, `evidence/playwright/`): cited by filename in §2–§3.

## 8. Reconciliation of the T1 timeout count (documentation only)

Recorded in `T1-preflight-report.md` §8.2 and `experiments/EXP-056-…md` (T1 timeout reconciliation). In brief: T1 had **4 timeouts** (2 screenshots, 2 clicks), all before the first successful tab select. The recovery allowance used was **1 fresh snapshot and 1 corrected click**. `t1-snapshot-02` was the post-selection snapshot required by the tab rule, not a second recovery snapshot. The earlier "two fresh snapshots counted conservatively" wording is withdrawn. The cause of the timeouts is not established.

## 9. Repository writes (T2)

- `evidence/EXP-056/T2-report.md` (created)
- `evidence/EXP-056/t2-01…t2-04` PNG files and `t2-snapshot-00…04` markdown files (created)
- `evidence/EXP-056/T1-preflight-report.md` (edited: §8.2 reconciliation)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line, T1 reconciliation, T2 section)
- No other repository files written.

## 10. Operator decision needed

The brief does not name the native route for appending a second action to an existing handler. The options are below. The worker has not chosen one.

1. Confirm the New dialog (same event). This may add a response row to the existing group or may create a second handler. The result would then have to be read back and, if wrong, reverted with Delete, which would itself be a mutation.
2. Locate an action-add control that the worker has not found, if the operator knows its name.
3. Use the Copy row route on the Prompt row, then change Response Type to Set Values. This is a deviation: the copied Prompt parameters would need to be cleared, and it is not a native append.

Until a route is approved, T3 (the Set Values action and FX_VarTest definition) cannot proceed.
