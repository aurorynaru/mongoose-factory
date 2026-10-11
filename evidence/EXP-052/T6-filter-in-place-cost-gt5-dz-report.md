# EXP-052 T6 — Second Filter-in-Place test: Cost `>5` with Unit of Measure DZ (AC-5), cycle 5

Run `R-20261011-122156-AVGD`, task T6, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `0bcc1832-e246-422b-b08f-50ae4d6157a2`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-5 supported with limits, on the combined criteria. The inherited Item criterion `d*` was cleared through the native Item input. Unit of Measure `DZ` was selected from the native list, which shows `DZ` paired with `Dozen`. The literal Cost criterion `>5` was entered once, stayed visibly exact (`>5`), and one F4 executed the combined query. The result was exactly one unstarred row: `eggs / cage free / 6.99 / DZ`, status `Description (Object 1 of 1)`, Save disabled, no error. Greater-than filtering is shown here only as this one accepted combined result; no alternate syntax was tried, and no other operator behaviour is claimed. Stopped for coordinator review.**

## Pre-test prerequisites (fresh snapshot, tab 1)

- Tab 1 selected; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab `FX_Items`.
- One unstarred row `dumbbell / 45 pound iron / 45.00 / EA` (from the T5 `d*` result); status `Description (Object 1 of 1)`; Save disabled; Filter-in-Place mode exited; no dialog; no portal banner; no authentication challenge.
- Prerequisites met. Tab 0 (Designer) not acted on.

## Steps (each one action)

| # | Action | Result |
| --- | --- | --- |
| 1 | Click toolbar `FiP` (`f1e39`), once | Filter-in-Place mode entered. Criteria row showed the inherited Item criterion `d*` (criteria-row cell `d*`; Item input `d*`). Other criteria blank. Save disabled. |
| 2 | Click the Item criteria input (`f1e165`) | Focus moved to Item. |
| 3 | Press `Control+a`, then `Delete` (two key presses, native editor) | Item input emptied. |
| 4 | Press `Tab` once | Focus moved out of Item; the criteria row's Item cell became blank (commit). Item and criteria row verified blank. |
| 5 | Click the Unit of Measure `Open` trigger (`f1e193`), once | Native list opened. `find` `Dozen`: option row `DZ` / `Dozen` (`f1e227`) and option row `EA` / `Each` (`f1e230`). |
| 6 | Click the `DZ | Dozen` option (`f1e227`), once | Unit of Measure combobox shows `DZ`; criteria row Unit of Measure cell shows `DZ`. |
| 7 | Click the Cost criteria input (`f1e183`) | Focus moved to Cost (`find` confirmed the active Cost textbox). |
| 8 | Enter `>5` into the Cost criteria input (one fill, the single literal attempt) | Cost input shows `>5`. |
| 9 | Press `Tab` once | Cost committed: criteria row shows `>5 DZ` (Cost cell `>5`, UM cell `DZ`). |
| 10 | Pre-execution screenshot `t6-01` and snapshot | Criteria confirmed (below). |
| 11 | Click the Description criteria input (`f1e174`), focus only, no typing | Focus moved off the combobox so that F4 would execute rather than open the list. Description blank. |
| 12 | Press `F4`, once | Combined query executed. Mode exited. Result settled. |
| 13 | Post-execution snapshot and screenshot `t6-02` | Result captured (below). |

## Criteria before execution (`t6-01`, accessibility confirmed)

- Item criterion: blank (input and criteria-row cell).
- Description criterion: blank.
- Cost criterion: `>5` (input and criteria-row cell; literal, not normalized).
- Unit of Measure criterion: `DZ` (combobox value, criteria-row cell `DZ`). Mapping established from the native list: option `DZ` is listed with description `Dozen` (the UI pairs the code and the description in the same row). The Unit of Measure value `DZ` shown in the criteria and in the result row is the UI's own display; this report does not claim anything beyond the UI's pairing.
- Status: `Filter in Place`. Tab filter icon shown.
- Save disabled.

Screenshot `t6-01` (viewed): shows the `FX_Items` title with the filter icon; Item blank; Description blank; Cost `>5`; Unit of Measure `DZ` (highlighted); status `Filter in Place`; Save greyed; one blank criteria row. **Proves** the exact visible criteria before execution, including the literal `>5` and the `DZ` selection. **Does not prove** how the engine interprets `>5` (no server request is visible), or that `DZ` is the stored code beyond the UI pairing.

## Settled result after F4 (`t6-02`, accessibility confirmed)

| Element | Observed |
| --- | --- |
| Grid row count | one row (`gridcell "1"`) |
| Row 1 | `eggs` / `cage free` / `6.99` / `DZ` |
| Row star | none (`t6-02` shows number `1`, no star) |
| Row position | row 1, current; status `(Object 1 of 1)` |
| Item input | `eggs` (greyed key) |
| Description input | `cage free` (focused) |
| Cost input | `6.99` (two decimal places) |
| Unit of Measure combobox | `DZ` |
| Status textbox | `Description (Object 1 of 1)` |
| Save | disabled |
| Filter-in-Place mode | exited (toolbar enabled; criteria row replaced by the result; tab filter icon gone) |
| Error or validation text | none |

Screenshot `t6-02` (viewed): shows one row numbered `1`, no star; Item `eggs` (greyed); Description `cage free`; Cost `6.99`; Unit of Measure `DZ`; status `Description (Object 1 of 1)`; Save greyed; no alert. **Proves** the one-row settled result, the count token `(Object 1 of 1)`, Save disabled, mode exit, and the displayed eggs values. **Does not prove** the database contents or the server-side filter path; the Cost `6.99` is shown as the stored display.

## AC-5 mapping

- Item cleared before the Cost test: yes (verified blank by snapshot and criteria row after Tab).
- Description blank: yes.
- Cost criterion `>5` attempted once, literal and visible: yes. Single fill; not re-entered; not normalized.
- Native DZ/Dozen mapping established from the native list: yes (option pairing `DZ` / `Dozen`).
- Combined criteria accepted: yes (no rejection or error before or after F4).
- Result: exactly `eggs / cage free / 6.99 / DZ`, one row, unstarred, `Object 1 of 1`, Save disabled: yes (accessibility and `t6-02`).
- AC-5 status: **supported with limits.** Limits stated below.

## Limits (AC-5)

- The combined query is shown to return eggs. That does not, by itself, verify the greater-than operator in isolation: the DZ-only and `>5`-only results were not tested (by instruction, no third query). The claim is limited to "the combined criteria `>5` with `DZ` returned eggs in this session."
- Single session, UI level. No database read.
- Query completion is inferred from the one-row grid and mode exit (no completion indicator).
- The Unit of Measure `DZ` value is the UI's own pairing (`DZ` / `Dozen`). The stored value of eggs' unit reads `DZ` in the result row; the UI does not show an independent code-to-stored mapping.
- Cost displays `6.99` with two decimal places in the result.
- The Description input held focus after the query (form behaviour); the worker did not type into it.
- The `Tab` keystrokes after Item and after Cost were focus moves to commit the editors; they entered no value.

## Non-events in T6

- Filter-in-Place entries 1 (this task); F4 1 (the one execute); Cost criterion entries 1 (`>5`); alternate operator syntax 0; re-entry of `>5` after rejection 0 (none needed).
- Second query issued after the combined query: 0. Third Filter-in-Place query: 0.
- Refresh 0 in T6 (cumulative 1 from T4); Get More Rows 0; New 0; Delete 0; runtime Save 0; runtime business-field edits 0; runtime edit or add mode 0 (criteria typed only in FiP mode).
- Designer actions 0 (tab 0 not acted on); Initial Command untouched and still blank.
- Scope dialog interactions 0. Prompts or alerts 0. Timeouts 0. Ref-not-found 0. Portal banner dismissals 0.

## Counts (T6)

- Tab list 1; tab select 1.
- Clicks 6: FiP 1; Item focus 1; UM Open 1; DZ option 1; Cost focus 1; Description focus 1.
- Key presses 5: `Control+a` 1; `Delete` 1; `Tab` 2; `F4` 1.
- Fill or type 1 (`>5`).
- Content snapshots 9 (pre-query; after FiP; after Item clear; after Tab; after DZ selection; after `>5` entry; after Tab; after Description focus; after F4). Auto-generated snapshot files returned with action results are not counted as inspections.
- Finds 2 (`Dozen`; `Cost:`).
- Screenshots 2 (`t6-01`, `t6-02`).

## Reconciled cumulative counts (EXP-052 to date)

| Action | Count | Task |
| --- | --- | --- |
| Runtime clean close (native control) | 1 | T3 |
| Runtime reopen (Open > Select Form) | 1 | T3 |
| Manual toolbar Refresh | 1 | T4 |
| Filter-in-Place query 1: Item `d*` (executed by F4) | 1 | T5 |
| Filter-in-Place query 2: Item cleared, Cost `>5`, UM `DZ` (executed by F4) | 1 | T6 |
| Filter-in-Place entries (mode entered) | 2 | T5, T6 |
| Cost `>5` attempts | 1 | T6 |
| Initial Command mutation | 0 | — |
| Designer Save | 0 | — |
| Designer close / reopen | 0 / 0 | — |
| Final runtime reopen | 0 | — |

Designer Form has remained open since T2; no Designer action since T2 (T5 and T6 did not touch tab 0).

## Final browser state

- Tab 1 (Web Client): FX_Items runtime in settled result state after the combined query: one row `eggs / cage free / 6.99 / DZ`; status `Description (Object 1 of 1)`; Save disabled; Filter-in-Place mode exited; no dialog. The runtime is not in the Add-mode baseline.
- Tab 0 (Designer): FX_Items Form (User version, Name `FX_Items`) open, clean, Initial Command blank. Not acted on in T6.
- No browser-native dialog or unsaved-change prompt.

## Next permitted action (for coordinator review)

Stop per the T6 instruction. Not authorized in T6: any third Filter-in-Place query; the Designer phase (runtime clean close before the Designer, the Initial Command change to `Refresh`, one Designer Save, Designer close/reopen); the final runtime reopen (AC-9). These need explicit coordinator authorization.

## Files written by the worker (T6)

- `evidence/EXP-052/T6-filter-in-place-cost-gt5-dz-report.md` (this report)
- `evidence/EXP-052/t6-01-FiP-criteria-before-execute-Cost-gt5-UM-DZ-Item-cleared.png` (viewed)
- `evidence/EXP-052/t6-02-FiP-Cost-gt5-UM-DZ-settled-result-eggs.png` (viewed)
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T6, including `evidence/playwright/console-2026-10-11T04-32-22-715Z.log`, `evidence/playwright/page-2026-10-11T04-32-27-453Z.yml`, `page-2026-10-11T04-32-31-717Z.yml`, `page-2026-10-11T04-32-42-614Z.yml`, `page-2026-10-11T04-32-46-634Z.yml`, `page-2026-10-11T04-32-50-708Z.yml`, `page-2026-10-11T04-33-04-774Z.yml`, and the post-F4 snapshot file.
