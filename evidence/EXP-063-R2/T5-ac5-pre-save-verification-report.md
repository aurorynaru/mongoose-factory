# EXP-063-R2 T5 — AC-5 three-record pre-Save verification (cycle 4, task T5; read-only)

Run `R-20261012-213324-6cgo`, experiment EXP-063-R2, task **T5**. Worker session `b1f34139-e275-49c4-bf90-f4e01d2a61fa`; task_message_id `2e588708-5c24-49a6-a52f-76ac72f0617e`. Date 2026-10-12.

T5 is read-only. No Save, Import, file upload, Upload click, Cancel, close, reopen, Designer action or field edit was performed. Coordinate clicks: none.

## 1. Outcome

**AC-5: met as observed (visual and field readback).** Each record, reselected through its grid row in the order dumbbell, eggs, guitar, shows its own imported asset picture, its original Item, Description, Cost and Unit of Measure values (matching the EXP-062-R4 T13 baseline), and its modified marker. All three modified markers remain together. Runtime Save remains enabled. No dialog is open. The Form is still dirty and open; **nothing has been saved**.

## 2. Pre-check (before any record was reselected)

- Tab list (before any select): 1 tab, `0 (current) Mongoose`. Tab select 0: succeeded.
- Fresh untargeted snapshot: Web Client `FX_Items` heading and tab; footer `Import (Object 3 of 3)`; the grid shows three rows (dumbbell, eggs, guitar); guitar selected; Item `guitar`; toolbar Save **enabled** (no `[disabled]`); no dialog; no challenge.
- Open Forms: one, `FX_Items` (runtime), dirty.

## 3. AC-5 acceptance matrix (T5)

| Record (row) | Item (readback) | Description | Cost | UoM | Picture shown (visual) | Modified marker | Matches T13 baseline and asset? | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 dumbbell | `dumbbell` | `45 pound iron` | `45.00` | `EA` | Golden-retriever puppy sitting (matches `assets/dumbbell.png`, visual) | Yes (row 1) | Fields: yes. Picture: yes (visual). | `t5-01` |
| 2 eggs | `eggs` | `cage free` | `6.99` | `DZ` | Faint pale sketch-like shape with two dark eye-like marks (matches `assets/eggs.png`, visual) | Yes (row 2) | Fields: yes. Picture: yes (visual). | `t5-02` |
| 3 guitar | `guitar` | `natural acoustic` | `129.99` | `EA` | Shiba-style sitting dog (matches `assets/guitar.png`, visual) | Yes (row 3) | Fields: yes. Picture: yes (visual). | `t5-03` |

- Field baseline source: `evidence/EXP-062-R4/T13-runtime-readonly-verification-report.md` (dumbbell 45 pound iron/45.00/EA; eggs cage free/6.99/DZ; guitar natural acoustic/129.99/EA). All match.
- Modified markers: visible in `t5-01`, `t5-02` and `t5-03` on rows 1, 2 and 3. Each screenshot shows all three markers.
- Save: enabled. The find in `t5-01` returned the toolbar Save button without `[disabled]`.
- Pictures are associated with the correct Item after switching records: each reselection showed the picture named for that Item, and switching back and forth did not change the displayed picture of any other record.

## 4. Per-record evidence (what each screenshot shows and does NOT prove)

- **`t5-01-ac5-dumbbell-reselected-item-fields-picture-modified.png`**: row 1 selected; Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, UoM `EA`; golden-puppy picture; orange markers on rows 1, 2, 3; footer `(Object 1 of 3)`. **Proves** the dumbbell identity, field values, golden-puppy picture, and the three markers at this moment. **Does not prove** the stored binary; the picture match is visual only.
- **`t5-02-ac5-eggs-reselected-item-fields-picture-modified.png`**: row 2 selected; Item `eggs`, Description `cage free`, Cost `6.99`, UoM `DZ`; pale sketch-like picture; markers on rows 1, 2, 3; footer `(Object 2 of 3)`. **Proves** the eggs identity, field values, pale picture, and the three markers. **Does not prove** the stored binary.
- **`t5-03-ac5-guitar-reselected-item-fields-picture-modified.png`**: row 3 selected; Item `guitar`, Description `natural acoustic`, Cost `129.99`, UoM `EA`; shiba-style picture; markers on rows 1, 2, 3; footer `(Object 3 of 3)`. **Proves** the guitar identity, field values, shiba picture, and the three markers. **Does not prove** the stored binary.

## 5. Limitations

- The picture match is a visual comparison against the assets (read in T1). It is not a byte or hash comparison, and it does not show that the picture is persisted in the database. Persistence is verified only after the single runtime Save and close/reopen (not yet performed).
- Field values were read from the rendered controls and the grid row. No stored-value readback exists beyond the rendered state.
- The reselection of row 3 used a frame-scoped `getByText('3')` locator, not the `gridcell` role locator used for rows 1 and 2. The row was selected (guitar identity confirmed by the Item textbox and by `t5-03`). This is recorded as an observed difference in locator, not a selection failure.
- The T13 blank-picture observation (EXP-062-R4) remains unresolved. In this session all three pictures render.

## 6. Action audit (T5, exact)

| Action | T5 count |
| --- | --- |
| Browser tab lists | 1 |
| Browser tab selects | 1 (succeeded) |
| Snapshots (untargeted) | 1 |
| Snapshots (targeted) | 0 |
| Finds (`Save`, `Item:`, `Item:`) | 3 |
| Element clicks (grid row header selections: dumbbell, eggs, guitar; selection only) | 3 |
| Screenshots (worker-requested) | 3 (`t5-01` to `t5-03`) |
| **Import clicks** | **0** |
| **Select File coordinate clicks** | **0** |
| **File upload tool calls** | **0** |
| **Dialog Upload clicks** | **0** |
| Other coordinate clicks | 0 |
| Runtime Save | 0 |
| Form close / reopen | 0 / 0 |
| Designer actions | 0 |
| Field, record, Form or object edits | 0 |
| Asset file reads | 0 in T5 |
| Navigate, refresh, restart, reauthentication | 0 |
| Browser JavaScript, console or network inspection | 0 |
| Typing, key presses, drag or drop | 0 |

Tool-generated page snapshot and console files were written under `evidence\playwright\` (for example `page-2026-10-12T13-43-…`, `console-2026-10-12T13-43-23-631Z.log`). They are tool output, not worker-requested evidence. They were not opened.

## 7. Cumulative browser action audit (T1 through T5)

T1 to T4 are as recorded in `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` §10. T5 adds the counts above. Cumulative:

| Action | Cumulative T1–T5 |
| --- | --- |
| Browser tab lists | 5 |
| Browser tab selects | 5 |
| Snapshots (untargeted) | 5 |
| Snapshots (targeted) | 1 |
| Finds | 16 |
| Element clicks (row selection, Import, dialog Upload) | 14 (row selections 8, Import 3, dialog Upload 3) |
| Screenshots (worker-requested) | 18 |
| Asset file reads | 3 (T1) |
| **Import clicks** | **3** |
| **Select File coordinate clicks** | **3** |
| **File upload tool calls** | **3** |
| **Dialog Upload clicks** | **3** |
| Other coordinate clicks | 0 |
| Runtime Save | 0 |
| Form close / reopen | 0 / 0 |
| Designer actions | 0 |
| Field, record, Form or object edits | 0 |
| Navigate, refresh, restart, reauthentication | 0 |
| Browser JavaScript, console or network inspection | 0 |
| Typing, key presses, drag or drop | 0 |

Row selections: T1 2, T2 1, T3 1, T4 1, T5 3 = 8.

## 8. Worker-written file inventory (T5)

- `evidence/EXP-063-R2/T5-ac5-pre-save-verification-report.md` (this report; created)
- `evidence/EXP-063-R2/t5-01-ac5-dumbbell-reselected-item-fields-picture-modified.png`
- `evidence/EXP-063-R2/t5-02-ac5-eggs-reselected-item-fields-picture-modified.png`
- `evidence/EXP-063-R2/t5-03-ac5-guitar-reselected-item-fields-picture-modified.png`
- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` (updated: T5 section, status, inventory, next step)

No asset file was copied, changed or moved.

## 9. Final state (end of T5)

- FX_Items runtime Form open; **dirty** (Save enabled); guitar is the current record (row 3, last reselected).
- Three modified markers present (rows 1, 2, 3).
- No dialog open.
- Nothing saved, closed or reopened. Designer untouched.

## 10. Next permitted step

T5 stops after AC-5, as instructed. The single runtime Save requires a separate coordinator instruction. After the Save: verify the clean state (AC-6), then one close and one reopen through Form > Open > Select Form with per-record screenshots (AC-7).
