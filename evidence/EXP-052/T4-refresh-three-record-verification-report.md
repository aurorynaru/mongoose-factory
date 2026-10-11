# EXP-052 T4 — One manual Refresh and three-record verification (AC-3), cycle 3

Run `R-20261011-122156-AVGD`, task T4, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `bd4e0f32-8a36-4569-a033-2ee62418b601`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: AC-3 supported with limits. Exactly one toolbar Refresh was invoked on the Add-mode runtime instance from T3. The settled state shows three unstarred grid rows whose twelve business-field values match the authorized keys, with status `Description (Object 1 of 3)` and Save disabled. No Refresh was repeated and no other collection-loading or data-mutating action was performed. Stopped for coordinator review.**

## Pre-Refresh baseline confirmation (fresh snapshot, tab 1, no action)

- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab `FX_Items` selected; no dialog; no portal banner; no authentication challenge.
- Grid: one row, `gridcell "1"`; cells blank except Cost `0.00`.
- Item textbox blank (focused, required `*`); Description blank; Cost `0.00`; Unit of Measure combobox blank.
- Toolbar Save disabled. Status textbox `Item (Object 1 of 1)`.
- Judged intact against T3 (`t3-02`). No material change; proceeded.

Tab note: the first snapshot in T4 was taken while tab 0 (Designer) was still the selected tab. It was read-only and no action was taken on the Designer. Tab 1 was then selected and re-snapshotted before any action.

## Action: one native toolbar Refresh

- Clicked the runtime toolbar `Refresh` (ref `f1e35`, the accessibility name `Refresh`, matching the verified control). One click. No retry.
- Immediate result: no error, no dialog, no prompt, no banner.

## Settled state (fresh untargeted snapshot; then screenshot `t4-01`)

| Element | Observed |
| --- | --- |
| Grid row count | three rows (`gridcell "1"`, `"2"`, `"3"`) |
| Row 1 | `dumbbell` / `45 pound iron` / `45.00` / `EA` (current row, arrow marker) |
| Row 2 | `eggs` / `cage free` / `6.99` / `DZ` |
| Row 3 | `guitar` / `natural acoustic` / `129.99` / `EA` |
| Row order | dumbbell, eggs, guitar (not assumed; recorded as observed) |
| Star on rows | none visible (`t4-01`: no star; rows show numbers only) |
| New-row placeholder | none (no blank row remains) |
| Detail inputs (current row) | Item `dumbbell` (greyed key); Description `45 pound iron` (focused, text selected by the form); Cost `45.00`; Unit of Measure `EA` |
| Status textbox | `Description (Object 1 of 3)` |
| Save | disabled |
| Dialogs / prompts | none |
| Tooltip | `Refresh` (fading hover text from the click; not an error) |

Count token: the status numerator is the current-record position (`1`); the denominator `3` is the total. This matches the EXP-042-R3 accepted reading (numerator = current record, denominator = total).

Field values, all twelve (accessibility text, full; the grid column in the screenshot is clipped):
- Row 1: `dumbbell`, `45 pound iron`, `45.00`, `EA`
- Row 2: `eggs`, `cage free`, `6.99`, `DZ`
- Row 3: `guitar`, `natural acoustic`, `129.99`, `EA`
- Cost is displayed with two decimal places on all three rows (`45.00`, `6.99`, `129.99`).

No row selection was needed to read the values: the grid accessibility text carries all twelve business-field values. No row was selected by the worker.

## Evidence

- `evidence/EXP-052/t4-01-runtime-after-one-refresh-settled-three-rows.png` (viewed). Shows: DEM identity bar; FX_Items tab title; three rows numbered 1–3 with no star and no placeholder; row 1 current with arrow; Item `dumbbell` (greyed key); Description `45 pound iron` (focused, selected); Cost `45.00`; Unit of Measure `EA`; status `Description (Object 1 of 3)`; Save greyed. **Proves**: the settled three-row state, the count token and current position, Save disabled, no star, no dialog. **Does not prove**: the rows for eggs and guitar beyond the accessibility text (the grid columns are clipped in the image); the database contents (no database read); that the Refresh was the server query (inferred from the populated grid after the single click).
- Accessibility evidence: the settled snapshot (tool-generated file `evidence/playwright/page-2026-10-11T04-29-07-403Z.yml` holds the post-click snapshot; the untargeted settled snapshot is the one recorded in this report). Values above are copied from that accessibility text.

## Verification against the authorized keys

| Authorized key | Found in settled grid | Four values match | Starred | Notes |
| --- | --- | --- | --- | --- |
| dumbbell / 45 pound iron / 45.00 / EA | yes (row 1) | yes | no | |
| guitar / natural acoustic / 129.99 / EA | yes (row 3) | yes | no | |
| eggs / cage free / 6.99 / DZ | yes (row 2) | yes | no | |

Exactly three records. No fourth row. No extra placeholder.

## Non-events in T4

- Refresh 1 (the single permitted click); F4 0; Filter-in-Place 0; Get More Rows 0; query 0 other than the Refresh.
- New 0; Delete 0; runtime Save 0; typing into any runtime field 0; runtime edit or add mode 0.
- The Description input was focused and its text selected by the form on load. The worker did not type or edit it. Its value is unchanged (`45 pound iron`).
- Designer actions 0; Initial Command untouched and still blank (Designer tab 0 not acted on).
- Scope dialog interactions 0.
- Timeouts 0; ref-not-found 0; prompts answered 0; portal banner dismissals 0.

## Counts (T4)

- Tab select 1 (to tab 1). Tab list 1.
- Browser clicks 1 (Refresh).
- Content snapshots 3: one read-only snapshot of the Designer tab (selected at start; no action on it); one pre-Refresh runtime baseline; one settled untargeted snapshot. Auto-generated snapshot files returned with action results are not counted as inspections.
- Screenshots 1 (`t4-01`).
- Finds 0. Key presses 0. Typing 0. Row selections 0.
- Save 0. New 0. Delete 0. Refresh 1 (intended, once).

## Reconciled lifecycle (EXP-052 to date)

| Lifecycle or action | Count |
| --- | --- |
| Runtime clean close (native control) | 1 (T3) |
| Runtime reopen (Open > Select Form) | 1 (T3) |
| Manual toolbar Refresh (AC-3) | 1 (T4) |
| Filter-in-Place query | 0 |
| Initial Command mutation | 0 |
| Designer Save | 0 |
| Designer close / reopen | 0 / 0 |
| Final runtime reopen | 0 |

## Limits

- Single session, UI level, accessibility text and screenshot. No database read. The three rows are server data returned to this session's runtime; that is not independent database persistence and not cross-session durability.
- The eggs and guitar Description/Cost/UM values are accessibility text only (clipped in the screenshot).
- The Refresh tooltip is hover text and is not evidence of the command's result on its own; the populated grid is the result.
- The Description input's selected text is the form's own focus behaviour on load, not a worker action.

## Next permitted action (for coordinator review)

Stop per the T4 instruction. Not authorized in T4: Filter-in-Place (AC-4), the Cost criterion test (AC-5), the runtime close before Designer (for the mutation phase), and the Designer phase (Initial Command, one Save, close/reopen) and final runtime reopen (AC-9).

## Files written by the worker (T4)

- `evidence/EXP-052/T4-refresh-three-record-verification-report.md` (this report)
- `evidence/EXP-052/t4-01-runtime-after-one-refresh-settled-three-rows.png`
- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (updated)

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool during T4, including `evidence/playwright/console-2026-10-11T04-29-02-096Z.log`, `evidence/playwright/page-2026-10-11T04-29-07-403Z.yml`, and the post-Refresh snapshot file referenced by the action result.
