# EXP-058 T9 — runtime FX_Items close/reopen and initial-state verification (no FX_Refresh activation)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 10, task T9.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `8b27eb3a-4d65-4c87-819b-9e7a9f3b045f`.
Date: 2026-10-11. Scope: runtime Web Client FX_Items only. Designer untouched.

## 0. Outcome

- **Inherited runtime state captured before any action**: FX_Items Form open, eggs row current (`Item (Object 2 of 3)`), value box `45 pound iron`, Save disabled, no dialog, no Hello World prompt.
- **Internal FX_Items Form tab closed exactly once** (native `Close Panel FX_Items`). Browser tab not closed. Result: tablist empty, no dialog, no prompt.
- **FX_Items opened exactly once** via native toolbar `Open` > Select Form (one row `FX_Items`/`FX_Items`) > OK. No retry.
- **Opening-time prompt: none** (immediate snapshot and settled snapshot taken 4 s later; both show no alert/dialog and no Hello World text).
- **AC-7: PASSED** (three original records with unchanged values; Initial Command behaviour: no prompt on opening; Save disabled; route recorded).
- **AC-8: PASSED on its written criterion** (value box corresponding by position and Designer binding to FX_VarTestEdit is visibly empty with no error; accessibility readback has no value and no name, so the identity is inferred — see §6).
- **FX_Refresh was NOT activated. No prompt was dismissed. No runtime Save. No record change.** The single FX_Refresh activation budget is preserved for a separately authorized task.

## 1. Tab identification

- `browser_tabs list` first: tab 0 = Designer (`…/designer/default.aspx?MGForm=FX_Items`); tab 1 = Mongoose Web Client (`mingle-portal…favoriteContext=FX_Items`).
- Tab 1 selected (succeeded) before any runtime observation. Tab 0 not selected and not touched.
- Tab selections: 1. Tab lists: 1.

## 2. Inherited runtime state (before any action)

Snapshot `t9-snapshot-00-runtime-tab1-fresh-inherited-pre-close.md`; screenshot `t9-01-runtime-inherited-pre-close-eggs-current-value-box-45-pound-iron.png`.

| Item | Observed |
| --- | --- |
| Form tab | `FX_Items` selected (heading line 116; `Close Panel FX_Items` line 117) |
| Records | dumbbell / `45 pound iron` / `45.00` / `EA`; eggs / `cage free` / `6.99` / `DZ`; guitar / `natural acoustic` / `129.99` / `EA` (lines 151–168) |
| Current row | **eggs** (`gridcell "eggs" [active] [selected]`); Item `eggs`, Description `cage free`, Cost `6.99`, UoM `DZ`; status `Item (Object 2 of 3)` (line 478) |
| Value box (right of FX_Refresh) | textbox `45 pound iron` (line 171 of the snapshot; inherited, not a fresh-open state) |
| FX_Refresh | rendered (line 170) |
| Save | disabled (line 59) |
| Dialog / prompt | none |
| Console | 0 errors, 2 warnings (`browser_console_messages` level error: 0) |
| DevTools panel | open with pre-existing 07:08 log rows; not inspected further, not used |

The inherited value box shows the old `45 pound iron` while the current row is eggs. This is an inherited state and is **not** the expected fresh-opening state; it is not used as the AC-8 evidence.

## 3. Internal FX_Items Form tab close (once)

- One click on `Close Panel FX_Items` (ref `f1e101`). Snapshot `t9-snapshot-01-runtime-after-single-close.md`.
- Result: no `heading "FX_Items"`; tablist empty; no dialog; no unsaved-change prompt; Save disabled (line 58–59).
- Closures: **1 of 1**.

## 4. Open > Select Form (once)

| Step | Action | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Toolbar `Open` clicked (ref `f1e25`) — **1 click** | Select Form dialog appeared (`dialog "Select Form"`, line 406) | `t9-snapshot-02-select-form-dialog-after-single-open.md`; `t9-02` |
| 2 | Single row `FX_Items` (Caption `FX_Items`, Name `FX_Items`, `gridcell` line 416–417) selected (ref `f1e710`) — **1 click**; filter pre-filled `FX_Items` (line 419) | Row active (line 415) | `t9-snapshot-03-select-form-row-selected-before-ok.md` |
| 3 | `OK` clicked (ref `f1e738`) — **1 click** | Form opened | `t9-snapshot-04-after-single-open-immediate.md` |

- Openings: **1 of 1**. Toolbar Open clicks 1; dialog row clicks 1; dialog OK clicks 1.
- No retry, no second Open, no direct navigation, no browser refresh.

## 5. Opening-time state (immediate, then settled after a 4-second wait)

- Immediate (`t9-snapshot-04`): heading `FX_Items` (line 116); Save disabled (line 59); status `Description (Object 1 of 3)` (line 478); **no alertdialog, no dialog, no `Hello World` text**.
- Settled (`t9-snapshot-05-settled-after-open-fresh.md`, taken after `browser_wait_for` 4 s — a wait, not a mutation): no alertdialog, no dialog, no Hello World text; heading `FX_Items`; Save disabled; status `Description (Object 1 of 3)` (line 478).
- Screenshot `t9-03-settled-fresh-open-three-records-dumbbell-current-value-box-visible.png`: the grid shows rows 1 (dumbbell, current arrow), 2 (eggs), 3 (guitar); detail fields Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, UoM `EA`; the value box to the right of FX_Refresh is empty; status bar `Description (Object 1 of 3)`; Save greyed.

### 5.1 Three original records (settled; `t9-snapshot-05` lines 148–168)

| Row | Item | Description | Cost | UoM | Matches T1 baseline? |
| --- | --- | --- | --- | --- | --- |
| 1 | dumbbell | 45 pound iron | 45.00 | EA | yes |
| 2 | eggs | cage free | 6.99 | DZ | yes |
| 3 | guitar | natural acoustic | 129.99 | EA | yes |

Current row (selected by the opening, not by this worker): **dumbbell** (`Object 1 of 3`). Current record identity: Item `dumbbell`, Description `45 pound iron` (line 175, line 179). No row was selected or changed by this worker.

Note: the Description textbox has focus and its text is highlighted (`textbox "Description:" [active]`, line 179). This is the focus state set by opening, not a typed value; no key was pressed.

## 6. FX_VarTestEdit value box (pre-activation initial state)

- Accessibility (`t9-snapshot-05` line 171): `textbox [ref=f1e841]` — **no value text, no accessible name**.
- Screenshot `t9-03`: the box at the position right of FX_Refresh is visibly empty, with no error text or marker.
- **Identity qualification:** the runtime accessibility tree gives this textbox no name, so the identity "FX_VarTestEdit" is **inferred** from (a) position right of the FX_Refresh button, consistent with the Designer geometry (FX_RefreshButton `12.1666666666667; 5.25` and FX_VarTestEdit `12.7222222222222; 30.25`, same row offset), (b) being the only unnamed Edit in the Form, and (c) the same inference used in EXP-057. The emptiness is directly observed; the component identity is not directly observed.
- The earlier inherited value `45 pound iron` in the same box was pre-close state and is not used here.

## 7. AC results

| AC | Result | Basis |
| --- | --- | --- |
| AC-7 | **PASSED** | Route: close 1, open 1 (toolbar Open > Select Form > OK). Form settled with three records unchanged; no Hello World prompt on opening (immediate and settled snapshots); Save disabled (`t9-snapshot-04`, `-05`; `t9-03`). Route and states recorded. |
| AC-8 | **PASSED on written criterion** | Value box empty (`t9-snapshot-05` line 171; `t9-03`); no error visible; no nonempty value; no missing component. Runtime accessibility name absent; identity inferred by position and Designer binding (§6). |
| AC-9 to AC-11 | **Not performed** (FX_Refresh not activated, per instruction) | — |

## 8. Action counts (T9)

| Action | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 1 (tab 1) |
| Runtime Form tab closures | **1** |
| Runtime Form openings | **1** (toolbar Open; Select Form row; OK) |
| Clicks, total | 4 (close 1; Open 1; row 1; OK 1) |
| Waits | 1 (4 s, `browser_wait_for`; no state change) |
| Opening-time Hello World prompts | **0** |
| FX_Refresh activations | **0** |
| Prompt dismissals | **0** |
| Typing / key presses | 0 / 0 |
| Runtime Save, New, Delete, business-data mutation | 0 |
| Record or selection change | 0 |
| Designer interaction | 0 (tab 0 not selected) |
| Snapshots saved | 6 (`t9-snapshot-00` to `-05`) |
| Screenshots saved | 3 (`t9-01`, `t9-02`, `t9-03`) |
| Console error check | 1 call (`browser_console_messages` level error; 0 errors); no diagnostics |
| Ref-not-found errors | 0 |
| Recovery allowance used | 0 |

Tool-locator disclosures (the wrapper's reported locator differed from the ref passed):
- Close click: ref `f1e101` passed; wrapper reported `iframe[name=…].contentFrame().getByRole('button', { name: 'Close Panel FX_Items' })`.
- Open click: ref `f1e25` passed; wrapper reported `…getByLabel('Open', { exact: true })`.
- Row click: ref `f1e710` passed; wrapper reported `…locator('#ext-777')`.
- OK click: ref `f1e738` passed; wrapper reported `…getByRole('button', { name: 'OK' })`.
In each case the resulting UI state (tab closed; dialog opened; row active; Form opened) identified the intended control.

## 9. Evidence files (T9)

Under `evidence/EXP-058/`:
- `T9-runtime-close-open-and-initial-state-verification-report.md` (this report).
- Snapshots: `t9-snapshot-00-runtime-tab1-fresh-inherited-pre-close.md`; `t9-snapshot-01-runtime-after-single-close.md`; `t9-snapshot-02-select-form-dialog-after-single-open.md`; `t9-snapshot-03-select-form-row-selected-before-ok.md`; `t9-snapshot-04-after-single-open-immediate.md`; `t9-snapshot-05-settled-after-open-fresh.md`.
- Screenshots: `t9-01-runtime-inherited-pre-close-eggs-current-value-box-45-pound-iron.png` (inherited state: eggs current; value box `45 pound iron`; Save greyed); `t9-02-select-form-dialog-one-row-FX_Items-before-select.png` (dialog with one FX_Items row, filter pre-filled); `t9-03-settled-fresh-open-three-records-dumbbell-current-value-box-visible.png` (settled: three records, dumbbell current, empty value box, Save greyed, no prompt).
- Experiment record: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` (T9 section and status line).

What each decisive image proves and does not prove:
- `t9-01`: the inherited runtime with eggs current, value box `45 pound iron`, Save greyed, no dialog. Does not prove the fresh-open state.
- `t9-02`: the Select Form dialog with exactly one FX_Items row and the filter. Does not prove the selection result (see `t9-snapshot-03`).
- `t9-03`: the settled Form with three records, dumbbell current, empty value box beside FX_Refresh, no prompt, Save greyed. Proves the visible initial state. Does not prove the value box's component identity (accessibility has no name).

## 10. Acceptance matrix (T9 scope)

| AC | Status | Evidence |
| --- | --- | --- |
| AC-1 (runtime portion) | Supported: inherited runtime tab identified; clean state; no dialog; no challenge | `t9-snapshot-00`, `t9-01`, tab list |
| AC-7 | **PASSED** | `t9-snapshot-01`, `-02`, `-03`, `-04`, `-05`; `t9-02`, `t9-03` |
| AC-8 | **PASSED** on the written criterion; identity of the box inferred, runtime name absent | `t9-snapshot-05` line 171; `t9-03` |
| AC-9 | Not performed | — |
| AC-10 | Not performed | — |
| AC-11 | Partial (runtime closure 1, opening 1, zero opening-time prompts, zero FX_Refresh); not reconciled to completion | §8 |

## 11. Limitations

1. The FX_VarTestEdit identity in the runtime is inferred (no accessible name). Its emptiness is observed directly.
2. The opening settled within the 4-second wait; a prompt that appears only after a longer delay would not be detected by this task. No such prompt appeared in the observed window.
3. The fresh opening loads the Form from the server, so the FX_Test custom-event handlers were present on open. No handler is expected to fire on opening (the handlers are bound to FX_Test, not StdFormRefreshCompleted). This is consistent with the observation but is not a separate test.
4. The DevTools log was visible but not inspected for new rows; no diagnostics were used.
5. Runtime value behaviour after a refresh is not tested here (AC-9/AC-10 are deferred).

## 12. Next permitted step (NOT STARTED)

One FX_Refresh activation (AC-9), exactly one Hello World prompt, one authorized OK dismissal, then the AC-10 comparison of the FX_VarTestEdit value with the selected record's FX_Description (expected per record: dumbbell `45 pound iron`). Requires a separate authorization. The record budget of one activation is preserved.
