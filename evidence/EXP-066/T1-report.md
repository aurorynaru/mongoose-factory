# EXP-066 — T1 read-only preflight report (Hello World Part 4 Section 7)

- Run `R-20261012-233011-OefG`, cycle 0, task **T1**. Worker session `a642fdcf-6e38-4c1c-a214-edc2810b8bdb`; task_message_id `2932afcb-04dd-4c01-bed2-5da71b8ba45e`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Scope of this task: preflight and baseline only. **Stopped before New Table.** No change to FX_Items, its properties, its tables, or any other object.
- Record: `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.

## 1. Sources reviewed

- `AGENTS.md` (full, read from `C:\AI\mongoose-factory\AGENTS.md`).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 7 (07:29–09:18), lines 192–207. Narrated steps: IDO Collections filtered to Items with F4; Tables subform, New Table; choose UMs, alias UMs; join condition `UMs.UM = Items.UM`; Add and OK; close the tables subform; New Property, Bound, Description column of the joined UMs table; prefix the property name with the UMs alias; Finish; close forms and unload global form objects. The source states that the saved spelling of `UMsDescription` is not supplied and that the join direction, cardinality and generated SQL are not shown. The unload step is deferred to Section 8 by the brief.
- `experiments/EXP-061-…-fx-picture-bound-property.md` (full) and `evidence/EXP-061/T1-report.md` (route and checkout precedent from the earlier run). EXP-061 established: Select Form row `IDOs / IdoCollections`; one F4 exact-name query; Check Out before New Property; the wizard Bind To lookup lists `<alias>.<column>`; Finish commits immediately; the toolbar Save stays disabled.
- Not read: `tools/` (intentionally unreadable). No secrets file read.

## 2. Starting state (AC-1)

- Tab list performed before the first tab selection (read-only).
  - Tab 0: Web Designer, URL `…/WSWebClient/designer/default.aspx?MGForm=FX_Items`. **Not selected, not acted on.**
  - Tab 1: Web Client, URL `…/Mongoose…?favoriteContext=FX_Items…`. Selected.
- Tab 1 selected once (succeeded on the first select after the list).
- Start state of the Web Client: an inherited **FX_Items runtime Form** (tab label `FX_Items`) with the Description record active; Save disabled; no dialog; no portal banner; no sign-in or configuration challenge. Its record content was not edited. The status bar read `Description (Object 1 of 3)`.
- Console header read `3 errors, 10 warnings` (tool-reported; not inspected).
- Screenshot: `evidence/EXP-066/t1-01-webclient-initial-state.png`. Shows the FX_Items runtime Form with records dumbbell, eggs, guitar, the dumbbell record in view (Item dumbbell, Description 45 pound iron, Cost 45.00, Unit of Measure EA), the teal Import button and a picture. Does not prove anything about IDO Collections.

## 3. Open IDO Collections (native route)

1. Form menu (one click) → Open menu item (one click) → the Select Form dialog opened with prefilled filter `FX_Items` and one row (`FX_Items` / `FX_Items`).
2. Filter replaced with `IdoCollections` (one type action). The grid still showed the old row until one End key press (one key action). Then the grid listed two rows: `G6RIdoCollectionSearch` and `IDOs / IdoCollections`.
3. Row `IDOs / IdoCollections` clicked (one click). `G6RIdoCollectionSearch` was not selected.
4. Select Form OK (one click). The IDOs tab opened; URL `favoriteContext=IdoCollections`; toolbar Save disabled; no dialog after OK.
- Screenshot before the query: `evidence/EXP-066/t1-02-idos-opened-via-select-form-initial.png` (blank IDO Name criteria; Check Out and Undo Check Out shown in their blank-state style; one empty row in the IDO grid).

## 4. Exact-name query (AC-2)

- IDO Name criteria typed `FX_Items` (one type action) and F4 pressed once (one key action); 3 s settle.
- Result: **one row** `FX_Items`; status `Description (IDOs 1 of 1)`.
- Identity (header, accessibility and screenshot):
  - IDO Name `FX_Items`; Project Name `FX_HelloWorldProject01`; Description blank; Label String ID `oFX_Items`; Caption `oFX_Items`; Access As `G6R`; Extends blank; Replace unchecked and disabled; Profile Name blank.
  - Revision Num `2`; Revision Date `10/10/2026`.
- Checkout state:
  - Locked By `anton.ramos@3mworks.com.ph` (full value from accessibility; truncated on screen as `anton.ramos@3m…`).
  - Check In and Undo Check Out shown enabled (blue); Save disabled; the row checkbox is checked.
  - Interpretation: FX_Items is **checked out to the operator** since EXP-061, which matches the brief's prerequisite. Interpreted from Locked By and the enabled controls; no database read.
- Screenshot: `evidence/EXP-066/t1-03-idos-FX_Items-query-settled-identity-tables.png`.

## 5. Tables view inventory (AC-1)

- In-form Tables tab (selected after the query) shows **one row**: `1 | FX_Items | fxitms | Primary Base | Inner | (Join Text blank)`.
- **No fxum (FX_UMs) entry present.**
- Screenshot: `evidence/EXP-066/t1-03-idos-FX_Items-query-settled-identity-tables.png` (same image as §4).

## 6. Property inventory baseline (AC-1)

- In-form Properties tab (one click). **12 rows**, all `Bound to Column`. Columns shown: Property Name, Sequence, Property Class, Property Type, Column Name, Property Value, Key Sequence, Data Type, Length, Column Type, Read Only, Required, Upper Case, Pseudo Key, Read Only Record.

| Seq | Property Name | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type |
|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | FX_ItemBase | Bound to Column | FX_Item | 1 | (blank) | (blank) | (blank) |
| 2 | FX_Description | (none) | Bound to Column | FX_Description | 0 | String | 150 | nvarchar |
| 3 | FX_Cost | FX_Cost | Bound to Column | FX_Cost | 0 | (blank) | (blank) | (blank) |
| 4 | FX_UM | FX_UM | Bound to Column | FX_UM | 0 | (blank) | (blank) | (blank) |
| 5 | CreatedBy | (none) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType |
| 6 | UpdatedBy | (none) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType |
| 7 | CreateDate | (none) | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType |
| 8 | RecordDate | (none) | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType |
| 9 | RowPointer | (none) | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType |
| 10 | NoteExistsFlag | (none) | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType |
| 11 | InWorkflow | (none) | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType |
| 12 | FX_Picture | FX_Picture | Bound to Column | FX_Picture | 0 | Binary | (blank) | varbinary |

- Class-bound rows show blank Data Type / Length / Column Type for FX_Item, FX_Cost and FX_UM (the grid does not show the inherited values; as in EXP-061).
- Row 1 has Required checked (EXP-061 observation for FX_Item).
- **`FX_UMsDescription` is absent** (not among the 12 rows).
- Screenshots:
  - `evidence/EXP-066/t1-04-idos-FX_Items-properties-baseline-12.png`: rows 1–8 (FX_Item through RecordDate). Proves rows 1–8 only.
  - `evidence/EXP-066/t1-05-idos-FX_Items-properties-baseline-rows-9-12.png`: rows 5–12 after a mouse-wheel scroll of the grid (FX_UMsDescription absent; row 12 FX_Picture visible). Together with t1-04 these show all 12 rows. Rows 5–8 appear in both.
  - Note: `t1-05` was written twice (the first capture, before scrolling, was overwritten by the scrolled capture). The file on disk is the scrolled capture.

## 7. Blockers and findings

- **Blockers: none** in T1.
- Observed: the Select Form grid did not refresh after the filter text changed until the End key was pressed (observed once).
- Observed: a mouse-wheel action over the grid had no effect until the pointer was moved over the grid body (observed once).
- Observed: Locked By is truncated in the header field on screen; the full value is visible in accessibility text only.
- Not checked: the database (no SQL read), the revision mechanism, the join-related SQL, and the inherited Length / Column Type of the class-bound rows.

## 8. Action audit (T1 only, exact counts)

| Action | Count |
|---|---|
| Browser tab list | 1 |
| Browser tab select | 1 (succeeded; tab 1) |
| Untargeted snapshots (browser_snapshot, no target) | 2 |
| Targeted snapshot (dialog, `f1e292`) | 1 |
| Finds (browser_find) | 3 (one "Select Form" no match before the menu was open; one "Select Form" match; one "IdoCollections" match) |
| Clicks | 5 (Form menu; Open menu item; IDOs row; Select Form OK; Properties sub-tab) |
| Typed entries | 2 (Select Form filter `IdoCollections`; IDO Name `FX_Items`) |
| Key presses | 2 (End; F4) |
| Mouse moves | 1 (over grid body, for scroll) |
| Mouse wheel | 2 (first had no effect; second scrolled the grid) |
| Waits | 1 (3 s) |
| Screenshots (calls) | 6 (t1-01 to t1-04; t1-05 twice) |
| Dialogs answered | 1 (Select Form OK; in-form Mongoose dialog) |
| **Form opened (IDO Collections)** | **1** |
| **Exact-name IDO query (F4)** | **1** |
| Checkout / check-in / undo checkout | 0 / 0 / 0 |
| New Table / Add / OK (table) | 0 / 0 / 0 |
| New Property / wizard / Finish | 0 / 0 / 0 |
| Save | 0 |
| New / Delete (record or IDO) | 0 / 0 |
| Form close / reopen | 0 / 0 |
| Runtime FX_Items Form interaction | 0 (inherited tab not closed, edited or retrieved) |
| Web Designer actions | 0 (tab 0 listed only; never selected) |
| Unload / cache / FormSync / deployment | 0 |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 |

- Note: each browser tool result displays an auto-generated "Ran Playwright code" wrapper. These are the tool's own outputs, not scripts written by the worker, and they are recorded here for transparency.

## 9. Worker-written file inventory (T1)

- `experiments/EXP-066-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created).
- `evidence/EXP-066/T1-report.md` (created; this file).
- `evidence/EXP-066/t1-01-webclient-initial-state.png`
- `evidence/EXP-066/t1-02-idos-opened-via-select-form-initial.png`
- `evidence/EXP-066/t1-03-idos-FX_Items-query-settled-identity-tables.png`
- `evidence/EXP-066/t1-04-idos-FX_Items-properties-baseline-12.png`
- `evidence/EXP-066/t1-05-idos-FX_Items-properties-baseline-rows-9-12.png`

- **Tool-written files (not worker-authored; outside the EXP-066 path; for harness and operator confinement review):** `evidence/playwright/` files written during this task's window (from 15:30:24 onward): `console-2026-10-12T15-30-24-542Z.log`, `console-2026-10-12T15-30-24-543Z.log`, `page-2026-10-12T15-30-33-437Z.yml`, `page-2026-10-12T15-30-40-132Z.yml`, `page-2026-10-12T15-30-51-380Z.yml`, `page-2026-10-12T15-30-58-033Z.yml`, `page-2026-10-12T15-31-08-399Z.yml`, `page-2026-10-12T15-31-20-957Z.yml`. Total 8.
- No other repository file was written by this worker.

## 10. Final browser state (T1)

- Tab 1 (Web Client) selected. IDO Collections tab (`IDOs`) active with FX_Items identified; in-form Properties sub-tab selected; the grid is scrolled to rows 5–12. Save disabled. No dialog, no unsaved-change prompt.
- The inherited `FX_Items` runtime tab remains open, unedited and clean (Save disabled at the start; not acted on afterwards).
- Tab 0 (Web Designer) untouched.
- No change to FX_Items. Stopped before New Table.

## 11. Acceptance status after T1

- **AC-1 supported (observed; UI and accessibility level):** sources reviewed; session usable (no sign-in, no challenge); IDO Collections open with one exact-name match for FX_Items; identity, revision (2, 10/10/2026), checkout (to the operator, Locked By `anton.ramos@3mworks.com.ph`) and Locked By recorded; property inventory 12 (including FX_Picture) recorded; Tables inventory (FX_Items, fxitms, Primary Base) recorded; `FX_UMsDescription` absent; fxum entry absent. Evidence: `t1-03` (identity and Tables), `t1-04` and `t1-05` (properties).
- AC-2 to AC-8: not started (no New Table, property, Finish, Save, close or reopen performed; runtime Form not closed or reopened).

## 12. Limits

- UI-level and same-session only; no database read; checkout status interpreted from Locked By and enabled controls (no labelled status field).
- Class-bound Data Type / Length / Column Type are blank in the grid for FX_Item, FX_Cost and FX_UM; not re-verified.
- Locked By truncated on screen; full value from accessibility text only.
- The tool-written `evidence/playwright/` files are not repository-authored by the worker.
