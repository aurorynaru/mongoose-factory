# EXP-134 T12 checkpoint (read-only post-creation IDO readback; NO check-in; NO Finish)

Run R-20261026-031627-MXfT · cycle 17 · task T12 · worker session `8bd68d4e-d2bf-4225-8062-5dc6a0a331f8` · task_message_id `702658d7-254e-4299-97f9-243fed0e372f`.

## Result

- The Web Client (tab 3, portal tab titled "Mongoose") showed the identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` on a fresh snapshot. No session modal and no sign-in form.
- The IDOs maintenance Form was closed once (its own Close Panel control) and reopened once through Select Form (`IdoCollections`, OK). The reopened IDOs Form is in Filter in Place.
- One exact-name query for `FX_InventoryItems` (criterion entered once, Tab once, F4 once) returned **exactly one row**: `FX_InventoryItems`, status `Description (IDOs 1 of 1)`.
- The IDO record shows: Project `FX_HelloWorldProject01`; Revision Num `1`; Revision Date `10/25/2026`; Access As `G6R`; Label String ID and Caption `oFX_InventoryItems`; Locked By `anton.ramos@3mworks.com.ph`. The Tables sub-grid shows one row: Table Name `FX_InventoryItems`, Table Alias `fxinv`, Table Type `Primary Base`, Join Type `Inner`.
- Checkout state: the row checkbox is checked, **Check In is enabled**, and **Undo Check Out is disabled**; the IDO is checked out to `anton.ramos@3mworks.com.ph`. **No check-in was performed** (AC-7 decision reserved).
- The six business properties were read from the IDO Properties sub-tab (see table below). Thirteen rows in total: six FX_ business properties and seven framework properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow).

## Business-property readback (IDOs > Properties; snapshot text and `t12-03`)

| Seq | Property Name | Property Class | Property Type | Column Name | Key Seq | Data Type | Length | Column Type | Required | Read Only |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | blank | Bound to Column | FX_Item | **1** | String | 50 | nvarchar | **checked** | unchecked |
| 2 | FX_Description | blank | Bound to Column | FX_Description | 0 | String | 255 | nvarchar | unchecked | unchecked |
| 3 | FX_Warehouse | blank | Bound to Column | FX_Warehouse | 0 | String | 100 | nvarchar | unchecked | unchecked |
| 4 | FX_QuantityOnHand | blank | Bound to Column | FX_QuantityOnHand | 0 | Decimal | 12 | decimal | unchecked | unchecked |
| 5 | FX_ReorderLevel | blank | Bound to Column | FX_ReorderLevel | 0 | Decimal | 12 | decimal | unchecked | unchecked |
| 6 | FX_Location | blank | Bound to Column | FX_Location | 0 | String | 100 | nvarchar | unchecked | unchecked |

Framework rows (system-generated, not business properties): CreatedBy (7, String 128, UsernameType, Read Only checked), UpdatedBy (8, String 128, UsernameType, Read Only checked), CreateDate (9, Date, CurrentDateType, Read Only checked), RecordDate (10, Date, CurrentDateType, Read Only checked), RowPointer (11, GUID, RowPointerType, Read Only checked), NoteExistsFlag (12, Byte, FlagNyType), InWorkflow (13, Byte, FlagNyType, Read Only Record checked, Read Only unchecked). Their Required and Read Only flags are as shown in `t12-03`; none is a business property.

## Interpretation limits (AC-5)

- **Primary key** is shown only as a non-zero `Key Sequence` (1 for FX_Item; 0 for the others). The IDO Properties grid has no labelled "Primary Key" checkbox in this view. Read as key designation, not as a separate flag.
- **Decimal precision** is not displayed in the IDO Properties grid (no precision column in the visible headers). FX_QuantityOnHand and FX_ReorderLevel precision 2 is **not verified** at IDO level; it was set in the wizard (T9/T10 readback) only.
- **Schema** (`dbo`) is not displayed in the IDO Tables sub-grid. The table is read as `FX_InventoryItems`; `dbo.FX_InventoryItems` is not verified here.
- **Column Type** values (`nvarchar`, `decimal`) come from the IDO property metadata grid, not from the SQL catalogue. AC-6 (SQL physical types) remains pending.
- The Property Class column is blank for all six rows.

## Pre-close baseline vs. reopen (AC-8 scope)

- The IDOs panel before the close (snapshot after the IDOs tab click) showed an **empty** IDO Name criterion, no grid rows and Save disabled. It did not carry a FX_InventoryItems readback, so there is no pre-close definition baseline to compare with the post-reopen values. AC-8 is therefore **not** established by this task.

## Action audit (T12)

| Operation | Count |
|---|---|
| Tab list / tab select | 1 / 1 (tab 3, Web Client) |
| Fresh inline snapshots | 4 |
| Read-only `find` reads | 10 (incl. Select Form dialog, post-criterion, Locked By / Table / Properties, non-FX rows, dialog check, toolbar) |
| Screenshots (read-only) | 3 (`t12-01`, `t12-02`, `t12-03`) |
| Console read (read-only, level error) | 1 |
| Clicks (state-changing UI navigation only) | 6: IDOs tab (`f1e100`); Close Panel IDOs (`f1e101`); toolbar Open (`f1e25`); Select Form IDOs row (`f1e556`); Select Form OK (`f1e540`); in-form Properties sub-tab (`f1e805`) |
| Typed entries | 2: Select Form filter `IdoCollections`; IDO Name criterion `FX_InventoryItems` |
| Tab key | 2 (Select Form filter commit; IDO Name criterion commit) |
| F4 | **1** (criterion query, once) |
| Select Form opens | 1 (`IdoCollections`) |
| IDOs Form close / reopen | **1 / 1** (step-2 freshness action; not the AC-8 two-form recovery check) |
| **Finish** | **0** (T11 Finish not repeated) |
| Create Form response | 0 |
| **Check In / Check Out / Undo Check Out** | **0 / 0 / 0** |
| Save / New / Delete / Refresh / Filter-in-Place toolbar click | 0 / 0 / 0 / 0 / 0 |
| Designer edits; vendor IdoProjects Form Save or Revert | 0 |
| Sql Tables interaction; Sql Columns query | 0 / 0 |
| IDO Projects interaction | 0 (tab not touched beyond the panel left open) |
| Property edits; Property Class lookup; Label String ID edits | 0 / 0 / 0 |
| Record creation; inventory editor Form; metadata unload; FormSync; generated script; direct SQL; browser JavaScript / evaluate / run-code | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Fresh-snapshot recovery allowance used | 0 |
| Session Expired / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Non-FX_ mutation | 0 |

## Console (read-only)

- `console errors: 14` (read at `level=error`). Thirteen are the Permissions-Policy `unload` notices already recorded in T10/T11. The fourteenth is `Failed to load resource: the server responded with a status of 401` at `https://yggdrasil.inforcloudservices.com/yggdrasil/security/refresh`, which appeared during the IDOs close/reopen step. The Mongoose page and IDO data still loaded normally, and a read-only `find` for expired, sign-in, alertdialog and session text returned no match. Recorded as observed; its cause is not established.

## Final browser state

- Tab 3: Web Client, IDOs Form open in Filter in Place with IDO Name criterion `FX_InventoryItems`, one row selected, Properties sub-tab shown. Save disabled. Check In enabled and **not clicked**. No dialog open.
- The IDO Projects and Sql Tables panels are untouched. Tab 0 (Designer, vendor IdoProjects Form, wizard closed), tab 1 and tab 2 were not selected or touched.

## Next permitted action (separate authorisation required)

1. **AC-7 check-in decision:** the IDO is checked out to `anton.ramos@3mworks.com.ph` (Check In enabled, Undo disabled, Locked By). A separate task may authorise exactly one supported Check In, after which the checkout state is re-read.
2. **AC-6 SQL readback:** Sql Tables and Sql Columns for `dbo.FX_InventoryItems` (schema, physical types, primary key, auto-generated system columns inventoried separately).
3. **AC-8 two-form recovery:** a Sql Tables close/reopen and a second IDOs close/reopen, each with an exact-name readback compared against a pre-close baseline recorded in that task.
4. **Decimal precision at IDO or SQL level** remains unverified until the SQL readback.
