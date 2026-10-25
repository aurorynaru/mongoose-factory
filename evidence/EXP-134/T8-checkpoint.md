# EXP-134 T8 checkpoint (property rows 2–4; STOPPED at a second stale-ref event after recovery was used; rows 5–6 not added; Finish NOT invoked)

Run R-20261026-031627-MXfT · cycle 10 · task T8 · worker session `3d4b668d-3fee-436d-ad6f-a18cfa8e3176` · task_message_id `226d4877-4664-4dc5-9acf-6a6281348278`.

## Result

- **Stopped with a blocker.** Row 4 `FX_QuantityOnHand`'s Decimal Precision value `2` was typed into its editor but **not committed**. A second "Ref not found" error occurred on the next click, and the per-task recovery allowance (one fresh snapshot plus one corrected inspection) was already used. No further browser action was issued.
- The wizard is open on **page 1**, over the vendor IdoProjects Designer on tab 0. **Finish, Next, Back, Cancel, Save and Create Scripts were not pressed.** No Property Class lookup was opened and no Escape or Enter was pressed.
- Rows 5 (`FX_ReorderLevel`) and 6 (`FX_Location`) were **not added**.

## Preflight (T8, read-only, before any action)

| Gate | Observed |
|---|---|
| Tab list (read-only) before the first select | Tab 0 = Designer (wizard open over IdoProjects vendor Form); tab 1 = Designer (other); tab 2 = stale Designer (untouched); tab 3 = Web Client (untouched) |
| Tab 0 selection | Selected once (already current); fresh untargeted snapshot taken |
| Wizard identity (fresh snapshot) | IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxinv`; Site Split unchecked; Table Name and View Name disabled and blank; Form Type MultiView, Form Layout GridLeft, Device Type Default (unchanged); Back disabled; Next enabled; Finish disabled |
| Designer scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Starting property-grid state | Row 1 `FX_Item` String/nvarchar/50, PK and Required checked. Row 2 `FX_Description` name committed, Data Type combobox **open with the supported list displayed (Data Type empty)** |

Evidence: `t8-01-wizard-page1-row2-data-type-dropdown-open-before-String.png` (see Evidence table).

## Row-by-row state at stop

| Row | Name | Property Class | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `FX_Item` | blank | String | nvarchar | 50 | blank (not applicable to String) | checked | checked | blank | blank |
| 2 | `FX_Description` | blank | String (selected from the open list, T8) | nvarchar | 255 (committed) | blank (not applicable) | unchecked | unchecked | blank | blank |
| 3 | `FX_Warehouse` | blank | String (opened via combobox Open, selected once) | nvarchar | 100 (committed) | blank (not applicable) | unchecked | unchecked | blank | blank |
| 4 | `FX_QuantityOnHand` | blank | Decimal (opened via combobox Open, selected once) | decimal | 12 (committed) | **`2` typed in the active editor, NOT committed** | unchecked | unchecked | blank | blank |
| 5 | not added | | | | | | | | | |
| 6 | not added | | | | | | | | | |

- Decimal Precision is **editable** for a Decimal row: the cell opened a textbox editor when clicked (observed on row 4).
- The row 4 Decimal Precision editor was still active at the stop. Its value `2` is visible in `t8-02`, but the value is **not** verified as committed.
- The row 2 Data Type dropdown that T7 left in an unknown state was resolved in T8: it was open with the supported list displayed, and `String` was selected once.

## Actions (T8, in order)

1. Read `evidence/EXP-134/T7-checkpoint.md`, `evidence/EXP-134/T6-checkpoint.md`, the EXP-134 record and `evidence/EXP-130/MockInventory-ido-definition.txt` in full. AGENTS.md was supplied in the task context and was not re-read from disk in T8. EXP-049 and EXP-040 were searched by content (property-grid, Data Type, precision, Create Scripts terms) rather than read in full, so their property-grid procedure is used only as summarised in the T7 record.
2. Browser tab list (read-only); tab 0 selected once; fresh untargeted snapshot.
3. `t8-01`: screenshot of the open row 2 Data Type list (read-only).
4. Clicked `String` in the open row 2 Data Type list (ref `e720`) once.
5. Snapshot (targeted to the property grid): row 2 String/nvarchar; PK and Required unchecked.
6. Clicked row 2 Property Length cell (`e676`) once; a textbox editor became active (`e753`).
7. Typed `255` into the row 2 Length editor once.
8. Clicked the row 2 Data Type cell (`e745`) once to commit the Length; the Data Type combobox became active without its list opened. Snapshot: row 2 Length `255`.
9. **Add Row (`e559`) click 1: "Ref e559 not found."** No effect observed (later snapshots show only one row 3 created). **This was the first recovery event.** Fresh untargeted snapshot taken (recovery snapshot 1 of 1).
10. **Corrected inspection (the Add Row retry):** Add Row (`e559`) clicked once and succeeded; row 3 created with an active Name editor.
11. Typed `FX_Warehouse` into the active row 3 Name editor once.
12. Targeted snapshot of row 3 property cells (`e789`).
13. Clicked row 3 Data Type cell (`e792`) once to commit the name.
14. Clicked the row 3 Data Type combobox Open button (`e696`) once; the list opened.
15. Clicked `String` (`e835`) once.
16. Clicked row 3 Length cell (`e796`) once; textbox editor (`e753`) active.
17. Typed `100` into the row 3 Length editor once.
18. Clicked row 3 Data Type cell (`e840`) once to commit Length. Snapshot: row 3 `nvarchar 100`, PK and Required unchecked.
19. Add Row (`e559`) clicked once, successful; row 4 created with its Name editor active (`e784`).
20. Typed `FX_QuantityOnHand` into the row 4 Name editor once.
21. Targeted snapshot of row 4 property cells (`e878`).
22. Clicked row 4 Data Type cell (`e881`) once to commit the name.
23. Clicked the row 4 Data Type combobox Open button (`e696`) once; the list opened.
24. Clicked `Decimal` (`e912`) once. Snapshot: row 4 `decimal`, combobox shows Decimal.
25. Targeted snapshot of row 4 (`e928`): Length cell `e885`, Decimal Precision `e887`.
26. Clicked row 4 Length cell (`e885`) once; textbox editor active (`e753`).
27. Typed `12` into the row 4 Length editor once.
28. Clicked row 4 Decimal Precision cell (`e887`) once; it committed Length `12` (`e934`) and opened a textbox editor (`e940`).
29. Typed `2` into the row 4 Decimal Precision editor (`e940`) once. **Not committed.**
30. Clicked row 4 Data Type cell (`e881`) to commit the precision: **"Ref e881 not found."** **Second stale-ref event.** The recovery allowance for this task (one fresh snapshot, already used at step 9, plus one corrected inspection, the step 10 retry) was exhausted, so no new fresh snapshot or new ref was used.
31. Read-only screenshot `t8-02` (no ref used). The active Decimal Precision editor with `2` is visible; Finish disabled; no other change.
32. Stopped. No Finish, Next, Back, Cancel, Save, Create Scripts, Property Class, check-in, Form or inventory action.

## Counts (T8)

| Operation | Count |
|---|---|
| Add Row clicks (total attempts / successful) | 3 / 2 (rows 3 and 4; the first attempt failed with a stale ref and had no effect) |
| Property rows completed | 3 (rows 1 to 3 settled; row 4 settled except the uncommitted precision `2`) |
| Business rows present at stop | 4 of 6 (rows 5 and 6 not added) |
| Finish / Next / Back / Cancel | 0 / 0 / 0 / 0 |
| Create Form response | 0 |
| Create Scripts change | 0 (page 2 not reached) |
| Save / New / Delete / Copy / check-in / check-out | 0 |
| Property Class lookup or combobox opened | 0 |
| Tab / Escape / Enter pressed | 0 / 0 / 0 |
| Label String ID edits | 0 |
| Second wizard launched | 0 |
| Metadata unload / FormSync / generated script / SQL execution | 0 |
| Records created or edited | 0 |
| Session Expired OK / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Browser JavaScript / evaluate / run-code / internal APIs (worker-authored) | 0 |
| Ref-not-found errors | 2 (step 9 Add Row; step 30 row 4 Data Type cell) |
| Fresh untargeted snapshot (recovery) | 1 (step 9) |
| Corrected inspection (recovery) | 1 (step 10, the Add Row retry, which succeeded) |
| Targeted read-only snapshots | 7 (`e643`, `e789`, `e878`, `e928`, and the Length snapshots) |
| Harness guard blocker | 0 in T8 |
| Timeouts | 0 |

## Evidence files (under `evidence/EXP-134/`)

| File | Shows | Does not prove |
|---|---|---|
| `t8-01-wizard-page1-row2-data-type-dropdown-open-before-String.png` | Wizard page 1 with IDO Name `FX_InventoryItems`, project `FX_HelloWorldProject01`, alias `fxinv`, row 1 FX_Item String/nvarchar (length not visible in this scrolled view), row 2 `FX_Description` with its Data Type combobox open and the supported list displayed (Data Type empty), Finish disabled, User-scope footer | Row 2 final Data Type (set afterwards); Length and key columns (scrolled out of view in this image) |
| `t8-02-row4-decimal-precision-editor-active-uncommitted.png` | Grid scrolled right: row 1 Length 50; row 2 Length 255; row 3 Length 100; row 4 `FX_QuantityOnHand` Length 12 with an active Decimal Precision textbox showing `2` (uncommitted); Finish disabled; Next enabled; User-scope footer | That `2` is committed; the Data Type, PK and Required columns for rows 1 to 4 (scrolled out of view); rows 5 and 6 (not added) |

Tool-written, not worker-authored: `evidence/playwright/` snapshot YAML and console log files for this run (for example `page-2026-10-25T20-03-03-964Z.yml` through `page-2026-10-25T20-05-10-606Z.yml`).

## Unresolved for the next task

1. **Row 4 Decimal Precision `2` is typed but uncommitted.** The next task must first read the grid (one fresh untargeted snapshot), confirm whether the editor still holds `2`, and then commit it through a supported cell click (for example the row 4 Data Type cell), **not** by Tab, Enter or Escape. Its committed value must then be read back.
2. Rows 5 (`FX_ReorderLevel`, Decimal 12 precision 2) and 6 (`FX_Location`, String 100) remain to be added and configured.
3. Row 1 PK/Required, rows 2 to 4 non-key settings, and the Property Class and Label String ID blanks were observed in snapshots but not in a complete six-row capture. A full six-row legible capture is still needed.
4. Create Scripts (page 2) and the physical SQL table name remain unverified. Page 2 has not been reached and must not be reached without separate authorization.
5. The cause of the two stale-ref events (step 9 and step 30) is unresolved. The step 9 event occurred on a button ref that the same snapshot had listed as current, so the cause may be a timing issue in the tool or the grid's re-rendering after an editor change.
6. The tab 2 stale FX_LoginPortal Designer and the tab 3 Web Client (T4 add-mode placeholder) were not touched in T8.

## Next permitted action

A later task (with its own authorization) should: take one fresh untargeted snapshot; confirm the wizard is on page 1 with identifiers `FX_InventoryItems` / `FX_HelloWorldProject01` / `fxinv` and rows 1 to 4 as above; commit the row 4 precision `2` with a supported cell click; read it back; then add and configure rows 5 and 6 in order. Finish, Next and Create Scripts are not authorized by this checkpoint.
