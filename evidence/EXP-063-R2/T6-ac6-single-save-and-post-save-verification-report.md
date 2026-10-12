# EXP-063-R2 T6 — AC-6 single runtime Save and post-Save verification (cycle 5, task T6)

Run `R-20261012-213324-6cgo`, experiment EXP-063-R2, task **T6**. Worker session `b1f34139-e275-49c4-bf90-f4e01d2a61fa`; task_message_id `8879e5fc-f81f-41cc-9bfe-56b09555c74d`. Date 2026-10-12.

T6 invoked the runtime Save **once**. No Import, Select File click, file upload, dialog Upload, Cancel, Form close, Form reopen, Designer action, field edit or coordinate click was performed. The Form was not closed or reopened.

## 1. Outcome

**AC-6: met as observed.** Exactly one runtime Save was invoked through the native toolbar Save control (semantic locator). After it: the toolbar Save is disabled, the three modified markers (rows 1, 2, 3) are gone, and the post-Save reselection of each record shows its Item, unchanged Description, Cost and UoM, its imported picture, no modified marker, and Save disabled.

**Native response:** no native message text was observed. The rendered Form showed no toast, banner or message after the click. A find for the text "saved" returned no match. The only transient UI was the hover tooltip `Save`, which is the button's own label and is not a response message. The Save outcome is inferred from the rendered postconditions (Save disabled, markers cleared), not from a message. Whether the server reported success explicitly is not observed.

## 2. Preflight (read-only, before the Save)

- Tab list (before any select): 1 tab, `0 (current) Mongoose`. Tab select 0: succeeded.
- Fresh untargeted snapshot: FX_Items runtime Form; identity heading `FX_Items`; footer `Import (Object 3 of 3)`; three rows; guitar selected; Item `guitar`, Description `natural acoustic`, Cost `129.99`, UoM `EA`; toolbar Save **enabled**; no dialog; no login challenge; no portal banner.
- Pre-Save screenshot `t6-01`: orange modified markers on rows 1, 2 and 3; guitar selected with shiba picture; Save icon enabled.

Preflight passed; the Save was invoked.

## 3. Save invocation

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | Click (native toolbar Save) | toolbar `button "Save"` (semantic label `Save`) in the Mongoose iframe | Accepted. No error reported by the tool. Page snapshot written to `evidence\playwright\page-2026-10-12T13-46-07-304Z.yml`. |

- **Save invocation count: 1.** No retry.
- Immediately after the click, a find for `saved` returned no matches (read-only).

## 4. Immediate post-Save state

- `t6-02` (taken after the click): toolbar Save icon greyed; grid rows 1, 2, 3 show plain numbers with **no** orange markers; guitar still current; Item `guitar`, Description `natural acoustic`, Cost `129.99`, UoM `EA`, shiba picture; footer `(Object 3 of 3)`; no dialog; the Save tooltip is visible (hover label only).
- Snapshot after the click: toolbar `button "Save" [disabled] [active]` (the `[active]` attribute is the focus state of the disabled button). The Form's Save is disabled.

## 5. Per-record post-Save reselection (selection only; no mutation)

| Record | Row click | Item | Description | Cost | UoM | Picture (visual) | Modified marker | Save | Screenshot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| dumbbell | row 1 (`gridcell` 1) | `dumbbell` | `45 pound iron` | `45.00` | `EA` | Golden-retriever puppy | none | disabled | `t6-03` |
| eggs | row 2 (`gridcell` 2) | `eggs` | `cage free` | `6.99` | `DZ` | Faint pale sketch-like shape | none | disabled | `t6-04` |
| guitar | row 3 (`gridcell` 3) | `guitar` | `natural acoustic` | `129.99` | `EA` | Shiba-style dog | none | disabled | `t6-05` |

- All three match the expected original fields (`dumbbell` / `45 pound iron` / `45.00` / `EA`; `eggs` / `cage free` / `6.99` / `DZ`; `guitar` / `natural acoustic` / `129.99` / `EA`) and the expected pictures.
- No discrepancy was found; no further mutation was made.

## 6. Limitations

- Pictures are compared visually against the asset files read in T1 (not byte or hash comparison).
- The native response was not observed as a message. Save success is inferred from Save disabled, markers cleared and the reselected values, all rendered. The brief's close/reopen (AC-7) is the only test of persistence, and it has not been run.
- Save persistence beyond the rendered state is not verified. "Never claim database durability beyond the observed close/reopen recovery."
- The T13 blank-picture observation (EXP-062-R4) remains unresolved; in this session the pictures render at every step.

## 7. Action audit (T6, exact)

| Action | T6 count |
| --- | --- |
| Browser tab lists | 1 |
| Browser tab selects | 1 (succeeded) |
| Snapshots (untargeted) | 2 (preflight; post-Save) |
| Snapshots (targeted) | 0 |
| Finds | 5 (`Save` preflight; `saved` post-Save; `Item:` x3 per-record) |
| Element clicks | 4 (1 Save; row 1, row 2, row 3 selection) |
| **Runtime Save invocations** | **1** |
| Screenshots (worker-requested) | 5 (`t6-01` to `t6-05`) |
| **Import clicks** | **0** |
| **Select File coordinate clicks** | **0** |
| **File upload tool calls** | **0** |
| **Dialog Upload clicks** | **0** |
| Other coordinate clicks | 0 |
| Form close / reopen | 0 / 0 |
| Designer actions | 0 |
| Field, record, Form or object edits | 0 |
| Asset file reads | 0 in T6 |
| Navigate, refresh, restart, reauthentication | 0 |
| Browser JavaScript, console or network inspection | 0 |
| Typing, key presses, drag or drop | 0 |

Tool-generated page snapshot and console files were written under `evidence\playwright\` (for example `page-2026-10-12T13-46-07-304Z.yml`, `console-2026-10-12T13-45-58-823Z.log`). They are tool output, not worker-requested evidence, and were not opened.

## 8. Cumulative browser action audit (T1 through T6)

| Action | T1–T5 | T6 | Cumulative T1–T6 |
| --- | --- | --- | --- |
| Browser tab lists | 5 | 1 | 6 |
| Browser tab selects | 5 | 1 | 6 |
| Snapshots (untargeted) | 5 | 2 | 7 |
| Snapshots (targeted) | 1 | 0 | 1 |
| Finds | 16 | 5 | 21 |
| Element clicks (row selections 11, Import 3, dialog Upload 3, Save 1) | 14 | 4 | 18 |
| Screenshots (worker-requested) | 18 | 5 | 23 |
| Asset file reads | 3 | 0 | 3 |
| **Import clicks** | **3** | 0 | **3** |
| **Select File coordinate clicks** | **3** | 0 | **3** |
| **File upload tool calls** | **3** | 0 | **3** |
| **Dialog Upload clicks** | **3** | 0 | **3** |
| **Runtime Save invocations** | 0 | **1** | **1** |
| Other coordinate clicks | 0 | 0 | 0 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 |
| Designer actions | 0 | 0 | 0 |
| Field, record, Form or object edits | 0 | 0 | 0 |
| Navigate, refresh, restart, reauthentication | 0 | 0 | 0 |
| Browser JavaScript, console or network inspection | 0 | 0 | 0 |
| Typing, key presses, drag or drop | 0 | 0 | 0 |

Row selections across T1–T6: T1 2, T2 1, T3 1, T4 1, T5 3, T6 3 = 11.

## 9. Worker-written file inventory (T6)

- `evidence/EXP-063-R2/T6-ac6-single-save-and-post-save-verification-report.md` (this report; created)
- `evidence/EXP-063-R2/t6-01-pre-save-three-modified-markers-save-enabled.png`
- `evidence/EXP-063-R2/t6-02-immediate-after-single-save-state.png`
- `evidence/EXP-063-R2/t6-03-post-save-dumbbell-item-fields-picture-save-disabled.png`
- `evidence/EXP-063-R2/t6-04-post-save-eggs-item-fields-picture-save-disabled.png`
- `evidence/EXP-063-R2/t6-05-post-save-guitar-item-fields-picture-save-disabled.png`
- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` (updated: T6 section, status, cumulative audit, inventory, next step)

No asset file was copied, changed or moved.

## 10. Final state (end of T6)

- FX_Items runtime Form open; **clean** (toolbar Save disabled; no modified markers). Guitar is the current record (row 3, last reselected).
- No dialog open. No browser-native dialog. No unsaved-change prompt observed.
- Not closed, not reopened. Designer untouched.

## 11. Next permitted step

T6 stops after AC-6, as instructed. AC-7 (one close of the clean Form and one reopen through Form > Open > Select Form, with per-record reopen screenshots) requires a separate coordinator instruction. After that, AC-8 (final report).
