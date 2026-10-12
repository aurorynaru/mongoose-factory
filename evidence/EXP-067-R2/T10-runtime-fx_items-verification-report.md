# EXP-067-R2 — T10 report: runtime FX_Items verification (dumbbell, eggs, guitar)

Run `R-20261013-011002-lSgL`, cycle 9, task T10. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `d832f47f-49f8-46af-a34a-8fc08c20673c`. Date 2026-10-13. Editing scope User.

**Outcome: the Web Client runtime FX_Items Form was opened once through Form > Open > Select Form. Its Object identity is FX_Items. The runtime Form shows the `Description:` label and the description Edit for each record. Actual values: dumbbell — Unit of Measure EA, description Each; eggs — Unit of Measure DZ, description Dozen; guitar — Unit of Measure EA, description Each. These match the expected pairs. No record edit, runtime Save, or Designer change was made. The runtime Form is clean (Save disabled) at the end. No runtime Form was open before the open, so no close was needed.**

## 1. Preconditions

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, not selected in T10); tab 1 = Web Client (`favoriteContext=UserPreferences`, current). Tab 1 was then selected (after the list).
- Fresh untargeted snapshot (Web Client): Explorer view; **no runtime Form tab open**; no `closable` runtime tab; no modal. Find `closable` → no match.
- Web Client runtime Form state at start: **none open**. So there was no dirty runtime Form (the stop condition did not apply) and **no clean FX_Items runtime Form to close**. The conditional close was unnecessary and was not performed.
- Designer (tab 0): not selected or modified in T10. Its last observed state (T9) was clean, Save disabled, FX_Items reopened, User scope.
- Preference: not re-read in T10 (the T1 reading `Unload IDO Metadata With Forms` = checked, unchanged, stands).

## 2. Open (count 1)

- Route: Web Client `Form` menu (fresh find; `f1e10`) → `Open` (`f1e90`, visible in the menu) → `Select Form` dialog.
- Select Form dialog (from the snapshot): one row, Caption `FX_Items`, Name `FX_Items`; filter `FX_Items`. Row clicked once; `OK` clicked once.
- Result: the URL became `favoriteContext=FX_Items`; the tab panel is named `FX_Items`; the status text reads `Description (Object 1 of 3)`; Save disabled. Screenshot `t10-02` (viewed: FX_Items heading; record 1 dumbbell; Item, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`; a `Description:` label with a field `Each` beside the picture; Save greyed).
- Identity confirmation: the Form heading `FX_Items` and the tab panel name `FX_Items`. The Form's own name is not otherwise displayed in the runtime.

## 3. Component presence (runtime)

- The new `Description:` label is present (accessibility `generic "Description:"` at f1e311 neighbourhood; screenshot shows the label above the field beside the picture).
- The description Edit is present (accessibility `textbox` `Each` for record 1; `Dozen` for record 2; `Each` for record 3).
- Both components are present in the runtime. Their Designer-side geometry is recorded in T9, not re-read here.

## 4. Record-by-record values (actual, verbatim; native read-only navigation)

Navigation: row-cell and row-number clicks in the runtime grid (navigation only). No field was typed into; no Unit of Measure, Cost, Item or description value was changed.

| Record | Object | Item (grid and field) | Unit of Measure (combobox) | FX_UMsDescriptionEdit (description field) | Cost | Base Description | Screenshot | Expected | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Object 1 of 3 | `dumbbell` | `EA` | `Each` | `45.00` | `45 pound iron` | `t10-03` | EA / Each | **match** |
| 2 | Object 2 of 3 | `eggs` | `DZ` | `Dozen` | `6.99` | `cage free` | `t10-04` | DZ / Dozen | **match** |
| 3 | Object 3 of 3 | `guitar` | `EA` | `Each` | `129.99` | `natural acoustic` | `t10-05` | EA / Each | **match** |

Notes:
- Record 1 (dumbbell): values read in the accessibility pass after opening (description `Each`, Unit of Measure combobox `EA`, Item `dumbbell`, grid row `dumbbell | 45 pound iron | 45.00 | EA`). Screenshot `t10-03` was captured while record 1 was still current, after the find-based readbacks and before the navigation to record 2. See §7 item 2.
- Record 2 (eggs): Item `eggs` (field and grid), Unit of Measure combobox `DZ`, description field `Dozen`, Cost `6.99`. Status `Item (Object 2 of 3)`. Screenshot `t10-04`.
- Record 3 (guitar): Item `guitar`, Unit of Measure combobox `EA`, description field `Each`, Cost `129.99`, base Description `natural acoustic`. Status `(Object 3 of 3)`. Screenshot `t10-05`.

## 5. Clean state

- Save: **disabled** after the open (`t10-02` and read-only find), after record 2 (find), and after record 3 (find); and at the final check. No dirty indicator observed.
- No dialog or prompt at any point.
- Final state of the runtime Form: open, clean (Save disabled), current record `guitar` (Object 3 of 3).

## 6. Actions not performed (by instruction)

- No Unit of Measure change, no field edit, no runtime Save, no import, no export.
- No record edits (the Description Edit values were only read).
- No Designer action: the Designer tab was not selected or modified in T10.
- No unload (Web Client 1, Designer 1 unchanged); no Designer Save; no preference change.
- No close of any runtime Form (none was open at the start; the one opened is left open and clean).

## 7. Blockers, incidents and deviations

1. **Record 3 grid click timeout (one failed action).** The first attempt to click the guitar row's Item cell (`f1e293`) timed out at "visible, enabled and stable": the log showed the Pane 0 splitter (`paneZero6-splitter`) and the locked grid's row-number cell intercepting pointer events. Per the browser-recovery rule, I took one fresh untargeted snapshot (which confirmed the Form on Object 2 of 3, Save disabled, and the guitar row present), then one corrected attempt: a click on the locked-grid row-number cell for row 3 (`f1e242`), which succeeded. No record field was changed. This is recorded as a suspected environment/rendering interception issue in the narrow runtime grid, not a data problem.
2. **Record 1 capture sequencing.** Record 1's values (`Each`, `EA`, `dumbbell`) were read by accessibility immediately after the open. Screenshot `t10-03` was taken after those readbacks and before the navigation to record 2, so it shows record 1 as current. I did not view `t10-03` as an image in this task; its record-1 content is supported by the accessibility readbacks, not by a viewed screenshot. The viewed screenshot of record 1 is `t10-02`, which shows Item `dumbbell`, Unit of Measure `EA`, and the description `Each` beside the picture.
3. **Carried forward:** the T6 Name typing and Tab sequencing deviation (verified Name `FX_UMsDescriptionStatic`) and the T6 stale-reference error (`e2534`; recovered with fresh finds and a targeted snapshot of a fresh ref) are preserved. No new sequencing deviation occurred in T10 (each browser action was sent alone).

## 8. Counts (T10)

**T10 explicit browser calls: 41 (controller-authoritative; the worker estimate of 40 is superseded in T11).** Breakdown (worker categories):

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 1 (Web Client) |
| Snapshots | 4 (untargeted: 3; targeted or post-timeout recovery: 1) |
| Finds | 19 |
| Clicks | 10 (Form menu; Open menu item; Select Form row; OK; record 2 Item cell; record 3 Item cell (timed out); record 3 row-number cell; plus the record-1 readback click is not counted because it was a find) |
| Screenshots | 5 (`t10-01`, `t10-02`, `t10-03`, `t10-04`, `t10-05`) |
| Key presses / typed entries / hovers / waits / wheel | 0 / 0 / 0 / 0 / 0 |

Note: the controller log is authoritative for the exact figure. Totals above are a worker reconstruction.

**Cumulative T1–T10: 361 (through T9) + 41 (T10) = 402 explicit browser calls (controller-authoritative; see T11).**

## 9. Evidence

- `t10-01-webclient-state-before-runtime-open-no-runtime-form.png` (viewed): Web Client Explorer; no runtime Form tab; header identity. Proves no runtime Form was open before the open (so no close was needed).
- `t10-02-runtime-fx_items-opened-via-select-form-object-1-of-3.png` (viewed): runtime FX_Items heading; record 1 dumbbell; Description (base) `45 pound iron`; Cost `45.00`; Unit of Measure `EA`; new `Description:` label with `Each` beside the picture; status `Description (Object 1 of 3)`; Save greyed. Proves identity, the new Edit's presence and value on record 1, and the clean state. Limitation: the base Description field has focus (its text selected); no edit was made.
- `t10-03-runtime-record-1-dumbbell-ea-description-each.png` (viewed in T11): record 1 dumbbell; Unit of Measure EA; description `Each`; status `Description (Object 1 of 3)`; Save greyed. Consistent with the accessibility readbacks (see §7 item 2 on sequencing).
- `t10-04-runtime-record-2-eggs-dz-description-dozen.png` (viewed in T11): record 2 eggs; Unit of Measure DZ; description `Dozen`; status `Item (Object 2 of 3)`; Save greyed. Consistent with the accessibility readbacks.
- `t10-05-runtime-record-3-guitar-ea-description-each.png` (viewed): record 3 guitar; Unit of Measure EA; description `Each`; base description `natural acoustic`; Cost `129.99`; status `(Object 3 of 3)`; Save greyed. Proves the record-3 values and clean state.

## 10. Final state

- **Web Client:** tab 1; runtime FX_Items Form open, **clean** (Save disabled), current record guitar (Object 3 of 3); no dialog. The Select Form dialog closed after OK.
- **Designer:** tab 0; not selected or modified in T10. Last observed state (T9): FX_Items open, clean, User scope, 19 components.
- **Counts:** Web Client unload 1; Designer unload 1; Toolbox drops 2; Designer Save 1; pre-change Designer close/reopen 1/1; post-save Designer close/reopen 1/1; **runtime close/reopen 0/0 (the T10 open was the first runtime open; no runtime Form was open to close, so no close occurred)**; preference changes 0; record edits 0; runtime Save 0.
