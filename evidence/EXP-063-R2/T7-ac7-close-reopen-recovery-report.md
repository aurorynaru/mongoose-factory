# EXP-063-R2 T7 — AC-7 clean close, single reopen and three-record recovery (cycle 6, task T7)

Run `R-20261012-213324-6cgo`, experiment EXP-063-R2, task **T7**. Worker session `b1f34139-e275-49c4-bf90-f4e01d2a61fa`; task_message_id `c9783714-5ed2-45be-a91b-73760c8aad24`. Date 2026-10-12.

T7 closed the clean FX_Items runtime Form once and reopened it once. No Save, Import, file upload, dialog Upload, coordinate click, field edit, Designer action, navigation, refresh or restart was performed. Nothing was repeated.

## 1. Outcome

**AC-7: met as observed.** The clean runtime Form was closed once with its visible Form-tab close control (no unsaved-change prompt appeared). It was reopened once through Form > Open > Select Form (one FX_Items entry, selected, OK). After the reopen: heading `FX_Items`, Save disabled, no modified markers, and each record shows its asset picture with its original Item, Description, Cost and Unit of Measure. Persistence is established only as observed close/reopen recovery in this Web Client session; it is not independent database durability evidence.

## 2. Preflight (before the close)

- Tab list (before any select): 1 tab, `0 (current) Mongoose`. Tab select 0: succeeded.
- Fresh untargeted snapshot: FX_Items runtime Form open; toolbar Save `[disabled]`; three rows; guitar selected; Item `guitar`; footer `(Object 3 of 3)`; no dialog; no challenge.
- Pre-close screenshot `t7-01`: no modified markers on rows 1–3; Save greyed; guitar with shiba picture; no dialog.
- Prerequisites passed. The Form was clean; the close proceeded.

## 3. Close (once)

- Route: the visible close control on the Form tab, `button "Close Panel FX_Items"` (the × beside the FX_Items heading).
- Tool response: accepted, no error. No unsaved-change prompt, no browser-native dialog.
- Post-close (`t7-02`): the Web Client shows the Explorer with no Form; the FX_Items heading is gone; `find "FX_Items"` returned no matches. **Confirmed: the Form is no longer open.**

## 4. Reopen (once)

- Route: Form menu (`button "Form"`) > `menuitem "Open"` > Select Form dialog (`dialog "Select Form"`).
- Select Form dialog: one row, caption `FX_Items`, name `FX_Items` (filter pre-filled `FX_Items`). The row was selected once, then `OK` was clicked once. Snapshot after OK: Form open.
- Reopen result: tab `FX_Items` (heading and tab name); Save `[disabled]`; grid rows dumbbell, eggs, guitar; footer `Description (Object 1 of 3)` on reopen (the Description textbox held keyboard focus on open; no value was typed or changed).
- Reopen count: **1**. No retry.

## 5. Per-record recovery verification (selection through grid rows only)

Order: dumbbell, eggs, guitar. Each record was selected by its row header (selection only) and captured.

| Record | Item | Description | Cost | UoM | Picture (visual) | Modified marker | Save | Screenshot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 dumbbell | `dumbbell` | `45 pound iron` | `45.00` | `EA` | golden-retriever puppy (matches `assets/dumbbell.png`) | none | disabled | `t7-03` |
| 2 eggs | `eggs` | `cage free` | `6.99` | `DZ` | faint pale sketch-like shape (matches `assets/eggs.png`) | none | disabled | `t7-04` |
| 3 guitar | `guitar` | `natural acoustic` | `129.99` | `EA` | shiba-style sitting dog (matches `assets/guitar.png`) | none | disabled | `t7-05` |

- All non-picture fields match the EXP-062-R4 T13 baseline.
- Each picture is associated with its correct record after reopen (each record's own picture appeared on its own selection; the picture did not move between records).
- Final toolbar read (find `Save`): `button "Save" [disabled]`.

## 6. Discrepancies

None observed. No picture or field differed from the expected values, so no stop was needed.

## 7. Limitations

- Pictures were compared visually with the asset files read in T1 (not byte or hash comparison).
- The reopen was in the same browser session and the same Web Client. The recovery shows that the Form, reloaded through Form > Open, carries the saved values. It does not independently prove database durability, and it does not separate server-side from client-side caching.
- The close and reopen produced no native message text; the observations are rendered-state observations only.
- Locator notes (observed, not outcome-affecting): the Form menu item and Select Form row were activated through the tool's resolved element references (`#menuitem-1025-itemEl`, `#ext-444`); no coordinate click was used.
- The T13 blank-picture observation (EXP-062-R4) remains unresolved. In this session pictures render at every step.

## 8. T6 documentation reconciliation

Checked the experiment record for the T6 section. The first T6 Edit added the status line successfully, but its second Edit (replacing the old "## 13. Next step" paragraph) failed with "String to replace not found", so the T6 section was not written by that call. The retry replaced the old "## 14. Next step" paragraph with the T6 section (now §14) and the next-step note (now §15). Grep confirms §14 "T6 — single runtime Save…" and §15 "Next step" are present, with no duplicated or missing content. No correction was needed.

## 9. Cumulative browser action audit (T1 through T7, exact)

| Action | T1–T6 | T7 | Cumulative T1–T7 |
| --- | --- | --- | --- |
| Browser tab lists | 6 | 1 | 7 |
| Browser tab selects | 6 | 1 | 7 |
| Snapshots (untargeted) | 7 | 3 | 10 |
| Snapshots (targeted) | 1 | 1 | 2 |
| Finds | 21 | 7 | 28 |
| Element clicks | 18 | 8 | 26 |
| Screenshots (worker-requested) | 23 | 5 | 28 |
| Asset file reads | 3 | 0 | 3 |
| **Import clicks** | 3 | 0 | **3** |
| **Select File coordinate clicks** | 3 | 0 | **3** |
| **File upload tool calls** | 3 | 0 | **3** |
| **Dialog Upload clicks** | 3 | 0 | **3** |
| **Runtime Save invocations** | 1 | 0 | **1** |
| **Form close** | 0 | 1 | **1** |
| **Form reopen (Form > Open > Select Form)** | 0 | 1 | **1** |
| Other coordinate clicks | 0 | 0 | 0 |
| Designer actions | 0 | 0 | 0 |
| Field, record, Form or object edits | 0 | 0 | 0 |
| Navigate, refresh, restart, reauthentication | 0 | 0 | 0 |
| Browser JavaScript, console or network inspection | 0 | 0 | 0 |
| Typing, key presses, drag or drop | 0 | 0 | 0 |

T7 element clicks (8): Close Panel FX_Items (1); Form menu (1); Form menu item Open (1); Select Form row (1); Select Form OK (1); row header 1, 2, 3 (3).
T7 finds (7): `FX_Items` (post-close); `Open`; `Select Form`; `Save` (dumbbell); `Item:` (eggs); `Item:` (guitar); `Save` (final).
T7 untargeted snapshots (3): initial preflight; post-close; post-OK. Targeted snapshot (1): the Select Form dialog.

Row selections across T1–T7: T1 2, T2 1, T3 1, T4 1, T5 3, T6 3, T7 3 = 14. Element clicks cumulative: row selections 14, Import 3, dialog Upload 3, Save 1, close 1, Form menu 1, Form menu Open 1, Select Form row 1, Select Form OK 1 = 26.

## 10. Worker-written file inventory (T7)

- `evidence/EXP-063-R2/T7-ac7-close-reopen-recovery-report.md` (this report; created)
- `evidence/EXP-063-R2/t7-01-pre-close-clean-state-guitar-selected-save-disabled.png`
- `evidence/EXP-063-R2/t7-02-after-single-close-form-not-open.png`
- `evidence/EXP-063-R2/t7-03-after-reopen-dumbbell-item-fields-picture.png`
- `evidence/EXP-063-R2/t7-04-after-reopen-eggs-item-fields-picture.png`
- `evidence/EXP-063-R2/t7-05-after-reopen-guitar-item-fields-picture.png`
- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` (updated: T7 section, status, cumulative audit, inventory, next step)

No asset file was copied, changed or moved.

## 11. Final state (end of T7)

- FX_Items runtime Form open after exactly one close and one reopen; heading `FX_Items`; Save disabled; no modified markers; guitar was the last record selected (row 3); no dialog open; no browser-native dialog; no unsaved-change prompt.
- The Designer was not touched. The FX_Items IDO checkout was not touched.
- AC-8 (final report) has not been written; it is outside this task.

## 12. Evidence matrix (T7)

- **AC-7 (met as observed):** close route (visible Form-tab close control), reopen route (Form > Open > Select Form, one FX_Items entry, OK), post-close state (Form not open, `t7-02`), per-record reopen screenshots (`t7-03`, `t7-04`, `t7-05`) showing Item, Description, Cost, UoM and asset picture, and Save disabled.
- Limitation: visual picture match; same-session close/reopen recovery only.
