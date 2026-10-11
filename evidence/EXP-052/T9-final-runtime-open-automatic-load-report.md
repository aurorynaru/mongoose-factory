# EXP-052 T9 — Final runtime opening and automatic-load observation (AC-9), cycle 8

Run `R-20261011-122156-AVGD`, task T9, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `bf6e1e7c-4a52-48f1-a7e8-024a41f2bb96`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-9 supported with limits (same session, UI). After one native Open > Select Form > OK on the closed runtime, the FX_Items runtime showed three unstarred saved records immediately on opening, without any Refresh, F4, Filter-in-Place, Get More Rows, or other collection-loading action. The settled state (3 s, no action) is unchanged: status `Description (Object 1 of 3)`, Save disabled, all twelve business-field values as expected, Cost with two decimal places. The earlier Add-mode baseline (T3) showed no rows on opening with Initial Command blank; this observation is the first opening after the Initial Command change to `Refresh`. Stopped for coordinator review. AC-10 to AC-12 not performed.**

## Pre-open prerequisites

- Designer (tab 0, read-only, no action): Form `FX_Items` open per T8; read-only `find` for `Refresh` returned the Initial Command value cell `Refresh`; toolbar Save and Undo disabled; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. No dialog. The Designer was not closed or modified.
- Web Client (tab 1): selected; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_Items tab absent (closed in T7, not reopened in T8); form toolbar disabled; no dialog, banner, or authentication challenge.
- Prerequisites met.

## Runtime opening (once)

1. Toolbar `Open` (`f1e23`), one click → Select Form dialog opened (one row `FX_Items` / `FX_Items`; filter text `FX_Items` retained from earlier use; Filter By Name; Case Sensitive and Starts With unchecked).
2. Row Name cell (`f1e111`), one click (row activation, the same Select Form step used in T3).
3. OK (`f1e137`), one click → dialog closed; FX_Items runtime tab opened (`f1e164`, close control `Close Panel FX_Items` `f1e166`).

Note: step 2 is the Select Form row selection, a dialog step, not a collection-loading operation. It is disclosed here as part of the opening workflow, as in T3.

## Immediate state (captured after the OK click; before any other action)

- Screenshot `t9-01` (viewed) and accessibility snapshot taken immediately after the screenshot.
- Grid: three rows numbered `1`, `2`, `3` (`gridcell "1"`, `"2"`, `"3"`); row 1 current (arrow marker); no starred row, no blank placeholder row.
- Grid values (accessibility): row 1 `dumbbell` / `45 pound iron` / `45.00` / `EA`; row 2 `eggs` / `cage free` / `6.99` / `DZ`; row 3 `guitar` / `natural acoustic` / `129.99` / `EA`.
- Detail inputs (current row 1): Item `dumbbell` (greyed key input); Description `45 pound iron` (focused, text selected by the form); Cost `45.00`; Unit of Measure `EA`.
- Status textbox `Description (Object 1 of 3)`.
- Toolbar Save disabled (`f1e26`).
- No dialog, prompt, alert, portal banner, or error text.

Screenshot `t9-01` shows: FX_Items title; row numbers 1–3 with row 1 current and no star; dumbbell in Item; `45 pound iron` selected in Description; Cost `45.00`; UM `EA`; status `Description (Object 1 of 3)`; Save greyed. Proves the immediate three-row state and count token. Does not show the eggs and guitar cells (clipped by the grid width); those values come from the accessibility tree.

## Settled state (wait 3 s, no action; screenshot `t9-02`)

- The wait was a pure time wait; no key, click, or runtime command was issued.
- Status `Description (Object 1 of 3)` (find `Object`, read-only).
- Screenshot `t9-02` (viewed): visually identical to `t9-01`: three unstarred rows, row 1 current, dumbbell detail inputs, Save greyed, status `Object 1 of 3`.
- All twelve business-field values re-read from the accessibility tree (find `gridcell`, read-only), matching the immediate state exactly: row 1 `dumbbell / 45 pound iron / 45.00 / EA`; row 2 `eggs / cage free / 6.99 / DZ`; row 3 `guitar / natural acoustic / 129.99 / EA`.
- Cost formatting: `45.00`, `6.99`, `129.99` (two decimal places).
- Star state: no star in the accessibility text (`gridcell "1"`, `"2"`, `"3"`) or the screenshots.

## Acceptance AC-9 mapping

- Exactly the three authorized records: yes (dumbbell, eggs, guitar; no fourth row; no blank placeholder).
- Unstarred: yes (accessibility and screenshots).
- Loaded automatically: yes, on the opening action (immediate state already showed the three rows). No Refresh, F4, Filter-in-Place, Get More Rows, or other collection-loading action was issued after opening.
- Count token: `Description (Object 1 of 3)` (immediate and settled).
- Save disabled: yes (immediate and settled).
- All twelve business-field values: yes (accessibility, settled and immediate match).
- Cost two decimal places: yes.
- AC-9 status: **supported with limits.** Limits below.

## Comparison with the baseline (same session)

| State | Initial Command | Opening result | Source |
| --- | --- | --- | --- |
| T3 baseline opening (Open > Select Form > OK) | blank | one placeholder row, blank inputs, Cost `0.00`, `Item (Object 1 of 1)`; no saved rows | `t3-02` |
| T9 final opening (Open > Select Form > OK) | `Refresh` (committed in T7, saved T7, closed and reopened T8) | three saved rows loaded immediately | `t9-01`, `t9-02` |

The two openings are in the same session, with the same runtime Form and the same Select Form steps. The only Designer-side change between them is Initial Command (blank → `Refresh`). This sequence is consistent with Initial Command controlling the load on open, but it does not prove that cause on its own. The sequence is recorded as observed; the causal link is an interpretation (see Limits).

## Distinguishing automatic loading from an inherited instance

The runtime tab was closed in T7 and not reopened or touched in T8. The T9 opening created a new runtime instance from the Select Form action. The three rows therefore were not inherited from a prior runtime instance in this instance's history; they appeared on the opening action itself. The worker did not issue any action between the OK click and the immediate screenshot that could have loaded them.

## Non-events in T9

- Runtime openings 1 (Open 1, row activation 1, OK 1).
- Post-opening collection-loading operations 0: Refresh 0; F4 0; Filter-in-Place 0; Get More Rows 0; query 0; second opening 0.
- Runtime data mutations 0: business-field edits 0; New 0; Delete 0; runtime Save 0; runtime edit or add mode 0.
- Designer actions 0 (read-only find and snapshot only); Designer close 0; Designer reopen 0; Designer Save 0; Initial Command changes 0.
- Scope changes 0; scope-dialog interactions 0; configuration changes 0.
- Prompts answered 0; dialogs 0 (other than the Select Form dialog used for the opening); session challenges 0; timeouts 0; ref-not-found 0; portal banner dismissals 0.

## Counts (T9)

- Tab selects 1 (to tab 1); tab list 1.
- Clicks 3 (Open 1; Select Form row 1; OK 1).
- Waits 1 (3 s).
- Finds 5 (read-only): `Refresh` (Designer, Initial Command value); `Select Form` (dialog); `OK` (dialog ref check before OK); `Object` (status, settled); `gridcell` (all twelve values, settled).
- Content snapshots 4: Designer (depth 6, read-only); runtime pre-open; Select Form dialog; immediate post-open. Auto-generated snapshot files returned with action results are not counted as inspections.
- Screenshots 2: `t9-01` (immediate), `t9-02` (settled).

## Reconciled cumulative counts (EXP-052 to date)

| Action | Count | Task |
| --- | --- | --- |
| Runtime clean close, baseline | 1 | T3 |
| Runtime reopen, baseline (Open > Select Form) | 1 | T3 |
| Manual toolbar Refresh | 1 | T4 |
| Filter-in-Place query 1: Item `d*` | 1 | T5 |
| Filter-in-Place query 2: Cost `>5` with UM `DZ` | 1 | T6 |
| Cost `>5` attempts | 1 | T6 |
| Runtime clean close before Designer phase | 1 | T7 |
| Initial Command mutation (blank → `Refresh`) | 1 | T7 |
| Designer Save | 1 | T7 |
| Designer Form close (native) | 1 | T8 |
| Designer Form reopen (recent-forms) | 1 | T8 |
| Final runtime opening (AC-9) | 1 | T9 |
| Post-opening collection-loading operations (T9) | 0 | T9 |
| Runtime data mutations (all tasks) | 0 | — |

## Limits

- Same session, UI only. No database read. The three rows are server data displayed in this session; that is not independent database persistence and not cross-session durability.
- The causal link between Initial Command `Refresh` and the automatic load is inferred from the same-session sequence (T3 vs T9); it was not isolated (no alternative Initial Command value was tested, by design).
- The eggs and guitar cells are clipped in the screenshots; their values come from the accessibility tree.
- The Description input held focus with its text selected after the opening (form default behaviour); no typing occurred.
- Row 1 (dumbbell) is the current row on opening; the detail inputs show that row. No row was selected by the worker after opening.
- The Select Form row activation was a dialog step before the opening, not a collection load.

## Final browser state

- Tab 1 (Web Client): FX_Items runtime open with three unstarred rows; status `Description (Object 1 of 3)`; Save disabled; no dialog; no open prompt. Focus in Description (form default).
- Tab 0 (Designer): FX_Items Form (User version) open after T8 reopen; clean; Initial Command `Refresh`; Save and Undo disabled; no dialog; not acted on in T9 beyond a read-only find and snapshot.
- No browser-native dialog or unsaved-change prompt.

## Next permitted action (for coordinator review)

Stop per the T9 instruction. AC-10 (final action audit) and AC-11 and AC-12 (repository confinement and final record matrix) are for a later task, not T9.

## Files written by the worker (T9)

- `evidence/EXP-052/T9-final-runtime-open-automatic-load-report.md` (this report)
- `evidence/EXP-052/t9-01-runtime-immediate-state-after-single-open-no-query.png` (viewed)
- `evidence/EXP-052/t9-02-runtime-settled-state-after-3s-no-action-three-rows.png` (viewed)
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T9, including `evidence/playwright/console-2026-10-11T04-39-35-778Z.log`, `page-2026-10-11T04-39-42-869Z.yml`, `page-2026-10-11T04-39-48-130Z.yml`, `page-2026-10-11T04-39-52-215Z.yml`, and `page-2026-10-11T04-40-00-110Z.yml`.
