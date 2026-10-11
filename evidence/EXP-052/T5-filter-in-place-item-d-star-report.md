# EXP-052 T5 — One Filter-in-Place query with Item criterion `d*` (AC-4), cycle 4

Run `R-20261011-122156-AVGD`, task T5, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `9915f7bd-9a6a-4f79-9733-0c64548c2683`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-4 supported with limits. One Filter-in-Place query with Item criterion `d*` and the other three criteria blank returned exactly one row, `dumbbell / 45 pound iron / 45.00 / EA`, unstarred, status `Description (Object 1 of 1)`, Save disabled, no error. Criteria and result were captured separately. No Cost or DZ test was run. Stopped for coordinator review.**

## Pre-query prerequisites (fresh snapshot, tab 1)

- Tab 1 (Web Client) selected; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab `FX_Items`.
- Three unstarred rows: `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`.
- Status `Description (Object 1 of 3)`; Save disabled; no dialog; no portal banner; no authentication challenge.
- Prerequisites met. Tab 0 (Designer) was listed but not acted on.

## Query steps (each one action)

| # | Action | Result |
| --- | --- | --- |
| 1 | Click toolbar `Filter in Place` (`FiP`, `f1e38`), once | Form entered Filter-in-Place mode: status `Filter in Place`; four criteria inputs blank; grid shows only a placeholder row `1` with blank cells; toolbar New, Delete, Refresh, Get More Rows, and others disabled; Save disabled. No dialog. |
| 2 | Enter `d*` into the Item criteria input (`f1e197`), one fill | Item input shows `d*` (active). Description, Cost, Unit of Measure remain blank. |
| 3 | Pre-execution snapshot and screenshot `t5-01` | Criteria confirmed (see below). |
| 4 | Press `F4` once (native execute key for Filter-in-Place, as in EXP-046 and EXP-051 T8) | Form left Filter-in-Place mode; grid settled. No dialog. |
| 5 | Post-execution snapshot and screenshot `t5-02` | Result captured (see below). |

## Criteria before execution (`t5-01`, accessibility confirmed)

- Item criteria: `d*` (textbox active).
- Description criteria: blank.
- Cost criteria: blank.
- Unit of Measure criteria: blank (combobox empty).
- Status text: `Filter in Place`.
- Tab title shows the filter icon beside `FX_Items`.
- Grid: one placeholder row `1`, blank cells (the FiP-mode grid, not a result).
- Save disabled.

Screenshot `t5-01` (viewed): shows the `FX_Items` title with the filter icon, Item input `d*` (focused), Description/Cost/UM blank, one blank row numbered `1`, status `Filter in Place`, Save greyed. **Proves** the Item criterion `d*` and the blank other criteria visually. **Does not prove** that `d*` is the criterion the engine applies, since criteria are shown in the form, not as a server request.

## Settled result after `F4` (`t5-02`, accessibility confirmed)

| Element | Observed |
| --- | --- |
| Grid row count | one row (`gridcell "1"`) |
| Row 1 | `dumbbell` / `45 pound iron` / `45.00` / `EA` |
| Row star | none (`t5-02` shows numbers only, no star) |
| Row position | row 1, current (arrow marker); `(Object 1 of 1)` |
| Item input | `dumbbell` (greyed key) |
| Description input | `45 pound iron` (focused; text selected by the form) |
| Cost input | `45.00` (two decimal places) |
| Unit of Measure combobox | `EA` |
| Status textbox | `Description (Object 1 of 1)` |
| Save | disabled |
| Filter-in-Place mode | exited (status no longer `Filter in Place`; toolbar enabled again; tab filter icon gone) |
| Error or alert | none |
| Tooltip | `Filter in Place` (hover text from the earlier click; not a message) |

Screenshot `t5-02` (viewed): shows one row numbered `1` with the current arrow and no star; dumbbell in the Item key; Description `45 pound iron` (selected); Cost `45.00`; UM `EA`; status `Description (Object 1 of 1)`; Save greyed; tab title `FX_Items` without the filter icon. **Proves** the settled one-row result, count token `(Object 1 of 1)`, Save disabled, and mode exit. **Does not prove** the database contents (no database read), that the filter ran server-side as opposed to a cached view (not separately established), or the star state beyond the image (star read from the screenshot; the accessibility tree shows only `gridcell "1"`).

## Acceptance AC-4 mapping

- Item criterion `d*` visible before execution: yes (`t5-01`, accessibility).
- Other criteria blank before execution: yes (`t5-01`, accessibility).
- Settled result contains exactly one record: yes (one row; `(Object 1 of 1)`).
- Record is `dumbbell / 45 pound iron / 45.00 / EA`: yes (accessibility text; `t5-02` shows dumbbell and the detail inputs).
- Unstarred: yes per screenshot (no star); the accessibility tree does not expose the star.
- Save disabled: yes.
- Native total-record count one: yes (`Object 1 of 1` denominator 1).
- AC-4 status: **supported with limits.**

## Limits

- Single session, UI level. No database read. Same-session evidence only; not independent persistence.
- The filter result is inferred from the one-row grid after `F4` and the mode exit; the UI does not display a separate query-completion indicator (same limit as EXP-046 T2).
- The Item criterion was entered with a single fill (Playwright `fill`), not keystroke typing; the field displayed `d*` afterwards.
- The star is read from the image; the accessibility tree gives only the row number.
- The Description input held focus and selected text from the form's own load behaviour; the worker did not type into it.

## Non-events in T5

- Refresh 0; Get More Rows 0; F4 1 (the one permitted execute); FiP click 1.
- Cost criterion entered 0; DZ criterion entered 0; alternate syntax 0; second query 0.
- New 0; Delete 0; runtime Save 0; runtime edit or add mode 0 (criteria typed only in FiP mode).
- Designer actions 0 (tab 0 not acted on); Initial Command untouched and still blank.
- Scope dialog interactions 0. Prompts answered 0. Dialogs 0. Timeouts 0. Ref-not-found 0. Portal banner dismissals 0.

## Counts (T5)

- Tab list 1; tab select 1 (to tab 1 at start).
- Clicks 1 (FiP).
- Fills 1 (`d*` in Item criterion).
- Key presses 1 (F4).
- Content snapshots 4: pre-query; after FiP; after `d*` fill; after F4.
- Screenshots 2: `t5-01` (criteria before execution), `t5-02` (settled result).
- Finds 0.
- Save 0; New 0; Delete 0; Refresh 0 (cumulative Refresh stays at 1 from T4).

## Reconciled lifecycle (EXP-052 to date)

| Action | Count |
| --- | --- |
| Runtime clean close (native control) | 1 (T3) |
| Runtime reopen (Open > Select Form) | 1 (T3) |
| Manual toolbar Refresh | 1 (T4) |
| Filter-in-Place query with Item `d*` | 1 (T5), executed by F4 |
| Filter-in-Place query with Cost `>5` and DZ | 0 (not run; next task) |
| Initial Command mutation | 0 |
| Designer Save | 0 |
| Designer close / reopen | 0 / 0 |
| Final runtime reopen | 0 |

## Next permitted action (for coordinator review)

Stop per the T5 instruction. Not authorized in T5: the Cost `>5` plus DZ test (AC-5). The coordinator should decide whether to authorize AC-5 next, subject to the single-attempt rule: the Item criterion would be cleared through the native criteria editor, then the literal `>5` entered once with DZ, and that one query executed. The Designer phase and final runtime reopen remain pending.

## Files written by the worker (T5)

- `evidence/EXP-052/T5-filter-in-place-item-d-star-report.md` (this report)
- `evidence/EXP-052/t5-01-FiP-criteria-before-execute-Item-d-star-others-blank.png`
- `evidence/EXP-052/t5-02-FiP-d-star-settled-result-one-row-dumbbell.png`
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T5, including `evidence/playwright/console-2026-10-11T04-30-30-063Z.log` and the snapshot files `evidence/playwright/page-2026-10-11T04-30-34-915Z.yml` and the post-F4 snapshot file.
