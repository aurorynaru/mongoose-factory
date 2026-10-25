# EXP-134 T13 checkpoint (read-only post-creation Sql Tables and Sql Columns readback; NO check-in; NO Finish)

Run R-20261026-031627-MXfT · cycle 18 · task T13 · worker session `92644b0d-f2b9-4ea4-91fd-4b4415622bb8` · task_message_id `9b0d6fb9-c6ca-4017-b2b0-189381e87b48`. Date 2026-10-26 (tool-written snapshot names use UTC 2026-10-25T20:34–20:36).

## Result

- The Web Client (tab 3, portal tab "Mongoose") showed the identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` on the fresh start snapshot. No session modal, no sign-in form.
- The Sql Tables panel held the pre-creation blank add-mode placeholder from T4. It had no unsaved changes (Save disabled, no dialog), so its panel was closed once and reopened once through Open → Select Form `SqlTables`.
- One exact-name query (`FX_InventoryItems` in the Table Name criteria cell, Tab, F4 once) returned **exactly one persisted row**: Table Name `FX_InventoryItems`, Schema `dbo`, Multi-Site unchecked, status `Schema (SQL Tables 1 of 1)`. The row marker is the populated-row arrow, not the blue-star add-mode placeholder.
- The Sql Tables constraint grid shows `PK_FX_InventoryItems` (Primary Key, Unique checked, Clustered checked, description `FX_Item`) and `IX_FX_InventoryItems_RowPointer` (Index, Unique checked, Clustered unchecked, description `RowPointer`).
- Columns… (once) opened the SQL Columns runtime form: **13 columns** (`Column Name (SQL Columns 1 of 13)`), all with Schema `dbo` and Table Name `FX_InventoryItems`. Six are the intended business columns; seven are framework-generated (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow).
- **AC-6: SUPPORTED at Mongoose SQL-metadata UI level** (qualified: no independent database query; see limits). No discrepancy against the approved specification was observed.

## Gates (T13 start)

| Gate | Observed | Evidence |
|---|---|---|
| Tab list (read-only) before first select | Tab 0 = Designer (vendor IdoProjects, not touched); tab 1 = Designer (not touched); tab 2 = stale Designer (not touched); tab 3 = Mongoose Web Client (current) | tab list |
| Tab 3 selection | Succeeded on the first select after the list | tab list |
| Fresh start snapshot | Identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`f1e22`); IDOs panel active; IDO `FX_InventoryItems` in Filter in Place view, Project `FX_HelloWorldProject01`, Revision Num `1`, Access As `G6R`, Locked By `anton.ramos@3mworks.com.ph`, Check In enabled, Undo Check Out disabled; six FX_ business rows and seven framework rows on the Properties sub-tab | inline snapshot (IDO state re-read only, no action) |
| Sql Tables panel before close | One blank add-mode row (blank Table Name and Schema, required asterisks), Save disabled, no dialog | `evidence/playwright/page-2026-10-25T20-34-46-016Z.yml` |

## Action sequence (in order)

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Tab list (read-only) | 4 tabs; tab 3 current | tool output |
| 2 | Select tab 3 | Succeeded | tool output |
| 3 | Fresh snapshot (inline) | Gates above | inline |
| 4 | Click Sql Tables panel tab (`f1e97`), once | Panel became active; blank placeholder row; no dialog | `page-…20-34-46-016Z.yml` |
| 5 | Close Panel Sql Tables (`f1e99`), once | Panel closed; find for "Sql Tables" returned no match | `page-…20-34-55-352Z.yml` |
| 6 | Toolbar Open (`f1e25`), once | Select Form dialog opened | `page-…20-35-01-614Z.yml` |
| 7 | Select Form filter: replaced `IdoCollections` with `SqlTables` (one entry), Tab once | Row `Sql Tables / SqlTables` shown | find output |
| 8 | Select the `Sql Tables` row (`f1e1542`), once; OK (`f1e1533`), once | Sql Tables Form opened with URL `favoriteContext=SqlTables` | `page-…20-35-16-267Z.yml`, `page-…20-35-21-365Z.yml` |
| 9 | Caution alertdialog `Please be very careful using these forms…`: OK (`f1e1689`), once | Accepted (known informational alert) | `page-…20-35-27-550Z.yml` |
| 10 | Click Table Name criteria cell in the grid's blank row (`f1e1597`), once | Criteria combobox active (`f1e1696`) | `page-…20-35-38-857Z.yml` |
| 11 | Type `FX_InventoryItems` into the grid criteria combobox, once; Tab once | Criterion committed; Filter in Place status | `t13-01` |
| 12 | Pre-F4 screenshot | Criterion visible; Schema criteria cell active and empty | `t13-01` |
| 13 | F4, once; wait 2 s | Settled: one row | `page-…20-35-54-849Z.yml`, `t13-02` |
| 14 | Columns… (`f1e1606`), once | SQL Columns form opened (`favoriteContext=SqlColumns`); 13 rows | `page-…20-36-04-169Z.yml`, `t13-03` |
| 15 | Hover over FX_Warehouse row (`f1e1998`), no click | Hover only | `page-…20-36-20-026Z.yml` |
| 16 | Mouse wheel deltaX 600 (horizontal scroll), once | Grid scrolled right: Length and Decimal Position columns visible | `t13-04`, inline snapshot |
| 17 | Row-header click, rows 3, 4, 5, 6 (`f1e1787`, `f1e1792`, `f1e1797`, `f1e1802`), once each (view-only) | Detail panel displayed each column; no edit | `page-…20-36-38-012Z.yml`, `…20-36-45-367Z.yml`, `…20-36-52-336Z.yml`, `…20-36-58-547Z.yml`; `t13-05` |
| 18 | Saved snapshot of the SQL Columns grid (read-only) | Grid rows recorded | `t13-06-sqlcolumns-final-readback-snapshot.yml` |

## Sql Tables readback (`dbo.FX_InventoryItems`)

| Field | Observed | Evidence |
|---|---|---|
| Table Name | `FX_InventoryItems` (grid and Attributes combobox) | `t13-02`; `…20-35-54-849Z.yml` |
| Schema | `dbo` (grid cell and Attributes combobox) | `t13-02` |
| Multi-Site | unchecked | `t13-02` |
| Table description / project metadata | **Not displayed** on the Sql Tables Form (Attributes shows only Schema, Table Name, Multi-Site) | `t13-02` |
| Primary-key constraint | `PK_FX_InventoryItems`, Primary Key, Unique checked, Clustered checked, description `FX_Item` | `t13-02`; snapshot |
| Index constraint | `IX_FX_InventoryItems_RowPointer`, Index, Unique checked, Clustered unchecked, description `RowPointer` | `t13-02`; snapshot |
| Save / Update Current Table | Save disabled; Update Current Table disabled | `t13-02`; snapshot |

## Sql Columns readback — the six business columns (observed versus expected)

Source: SQL Columns grid and detail (accessibility text, plus screenshots). "Length" = the Length field; "Decimal Position" = the Decimal Position field.

| Column (Column Id) | Expected (approved spec) | Observed Data Type / System Data Type | Length | Decimal Position | Primary Key / Key Sequence | Is Nullable | Default | Verdict |
|---|---|---|---|---|---|---|---|---|
| FX_Item (2) | String 50, Primary Key, Required; nvarchar(50) | nvarchar / nvarchar | 50 | blank | **checked / 1** | **unchecked** | blank | Matches; PK and not nullable (`t13-03`, detail) |
| FX_Description (3) | String 255; nvarchar(255) | nvarchar / nvarchar | 255 | blank | unchecked / blank | checked | blank | Matches (`t13-04` grid; detail from grid text and T13 snapshot) |
| FX_Warehouse (4) | String 100; nvarchar(100) | nvarchar / nvarchar | 100 | blank | unchecked / blank | checked | blank | Matches (`t13-04`; detail snapshot `…20-36-38-012Z.yml`) |
| FX_QuantityOnHand (5) | Decimal 12, precision 2; decimal(12,2) | decimal / decimal | 12 | **2** | unchecked / blank | checked | blank | Matches under the UI convention (Length 12, Decimal Position 2; see limits) |
| FX_ReorderLevel (6) | Decimal 12, precision 2; decimal(12,2) | decimal / decimal | 12 | **2** | unchecked / blank | checked | blank | Matches under the UI convention (see limits) |
| FX_Location (7) | String 100; nvarchar(100) | nvarchar / nvarchar | 100 | blank | unchecked / blank | checked | blank | Matches (`t13-05`) |

Notes:
- Business-column Is Nullable is **recorded, not equated** with IDO Required. Only FX_Item is not nullable, which is consistent with the approved specification (only FX_Item Required).
- The Decimal Position value for FX_QuantityOnHand and FX_ReorderLevel is read from the accessibility text of the detail views (`…20-36-45-367Z.yml`, `…20-36-52-336Z.yml`) and from the grid row text (`t13-06`). The screenshots do not show that field for rows 4 and 5. This is the first SQL-level observation of precision 2; the IDO-level grid had no precision column (T12).

## System-generated columns and index (inventoried separately)

Seven framework columns and one system index. Their names match the seven IDO framework rows read in T12. Visible metadata is from the SQL Columns grid text (`t13-04`, `t13-06`).

| Column | Data Type | System Data Type | Length | Default | Role |
|---|---|---|---|---|---|
| CreatedBy | UsernameType | nvarchar | 128 | `suser_sname()` | Framework |
| UpdatedBy | UsernameType | nvarchar | 128 | `suser_sname()` | Framework |
| CreateDate | CurrentDateType | datetime | blank | `getdate()` | Framework |
| RecordDate | CurrentDateType | datetime | blank | `getdate()` | Framework |
| RowPointer | RowPointerType | uniqueidentifier | blank | `newid()` | Framework; backs `IX_FX_InventoryItems_RowPointer` |
| NoteExistsFlag | FlagNyType | tinyint | blank | `(0)` | Framework |
| InWorkflow | FlagNyType | tinyint | blank | `(0)` | Framework |

Not read: Is Nullable and Column Id for the seven system columns (not exposed in the grid for those rows, and their detail was not opened). Column Id 1 was not read. The business Column Ids observed are 2 to 7.

## Limits and qualifications (AC-6)

1. **This is Mongoose SQL-metadata UI display, not an independent database query.** No direct SQL was run (prohibited). The "visibly equivalent physical SQL types" rule in AC-6 applies; `decimal(12,2)` is the UI convention (Length 12 with Decimal Position 2), the same reading EXP-049 T13 used.
2. Decimal Position for rows 4 and 5 rests on accessibility text, not a screenshot.
3. The Sql Tables Form shows no table description or project field. Project membership was not re-read here.
4. Mongoose Sql Tables and Sql Columns are the "SQL Tables" and "SQL Columns" maintenance views. The grid's Table Name criterion is name-only; the schema `dbo` comes from the grid and detail, not from a schema-qualified query.
5. Nullable and Column Id were not read for the seven system columns.
6. The Sql Columns detail's Column Name combobox held focus (text selected) after the detail was opened in the view. Nothing was typed into it.

## Acceptance matrix (T13 scope)

| AC | Status | Basis |
|---|---|---|
| AC-1 | Re-observed (identity and configuration; IDOs checkout state) | start snapshot |
| AC-5 | Unchanged from T12 (re-observed at start: six business properties, Locked By, Check In enabled) | start snapshot |
| **AC-6** | **SUPPORTED (Mongoose SQL-metadata UI level; qualified)** — `dbo.FX_InventoryItems` observed; six business columns with observed types, lengths, precision 2 and FX_Item PK/not-null; system columns inventoried; no database-level verification | `t13-02`–`t13-06`; snapshots listed |
| AC-7 | Not performed in T13 (IDO still checked out per the start snapshot; check-in decision reserved for T14) | start snapshot |
| AC-8 | Not performed in T13 (Sql Tables and Sql Columns were opened once, not closed/reopened for recovery; paired close/reopen reserved) | — |
| AC-9 (T13 portion) | Passed: zero Finish; zero check-in; zero Save; zero record or inventory-editor action; zero metadata unload, FormSync, generated script, direct SQL; zero non-FX_ mutation | action audit below |
| AC-10 (T13 portion) | Evidence written (this checkpoint, `t13-01`–`t13-06`, experiment record update) | — |

## Action audit (T13)

| Operation | Count |
|---|---|
| Tab list / tab select | 1 / 1 (tab 3, succeeded first attempt) |
| Sql Tables panel: click (activation) / Close Panel / reopen via Select Form OK | 1 / 1 / 1 |
| Select Form opens / filter entries | 1 / 1 (`SqlTables`) |
| Caution alertdialog OK | 1 |
| Criterion entries (Table Name, grid cell) | 1 (`FX_InventoryItems`) |
| Tab keys | 2 (filter commit; criterion commit) |
| F4 | **1** |
| Columns… opens | 1 |
| Row-header selections (view-only, Sql Columns) | 4 (rows 3–6) |
| Hover / horizontal wheel | 1 / 1 |
| Screenshots (worker-saved PNG) | 5 (`t13-01` to `t13-05`) |
| Saved worker snapshot | 1 (`t13-06`, YAML) |
| **Finish** | **0** |
| Create Form response | 0 |
| **Check In / Check Out / Undo Check Out** | **0 / 0 / 0** |
| Save / New / Delete / Refresh / Update Current Table / New or Modify Constraint / Add Row | 0 each |
| Property Class lookup; Label String ID edits; record creation or edit; inventory editor Form | 0 |
| Metadata unload / FormSync / deployment / generated script / direct SQL | 0 |
| Browser JavaScript / evaluate / run-code (worker-authored) | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Fresh-snapshot recovery allowance used | 0 |
| Session Expired / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Designer edits (tabs 0–2) | 0 (not selected) |
| Non-FX_ artifact mutation | 0 |

## Browser errors and console

- Page metadata at every snapshot: `Console: 14 errors, 10 warnings` (unchanged from T12's 14 error entries).
- The console log written for this task, `evidence/playwright/console-2026-10-25T20-34-36-578Z.log`, contains one error-level line: `Failed to load resource: the server responded with a status of 401` at `https://yggdrasil.inforcloudservices.com/yggdrasil/security/refresh` (the same endpoint as the T12 entry). The Mongoose page and both maintenance Forms loaded and queried normally. No session modal, sign-in or alert appeared. Its cause remains **unresolved**.

## Final browser state

- Tab 3: Web Client, Sql Tables and Sql Columns runtime tabs open. Sql Columns is the active tab (detail of FX_Location, row 6), with the Column Name combobox focused but unchanged (no text typed). Sql Tables holds the persisted FX_InventoryItems row (Save disabled).
- The IDOs panel is still open (checked out, not touched in T13). The IDO Projects panel is open (not touched in T13).
- No dialog is open. Save is disabled on the toolbar. No unsaved-change prompt.
- Tabs 0 to 2 were not selected or touched.

## Next permitted action (separate authorisation required)

1. **AC-7 check-in decision (T14):** the IDO `FX_InventoryItems` is checked out to `anton.ramos@3mworks.com.ph`. A separate authorisation may permit exactly one supported Check In, followed by a re-read of the checkout state.
2. **AC-8 paired close/reopen (T14 or later):** close and reopen the IDOs and Sql Tables Forms with an exact-name readback before and after each close. Sql Tables and Sql Columns are open now; their pre-close baseline is the FX_InventoryItems row and the six business-column values recorded above.
3. Decimal precision at the SQL level is now observed (Decimal Position 2). The IDO-level Decimal precision gap (T12) remains as recorded.
