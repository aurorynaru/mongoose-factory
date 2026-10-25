# EXP-134 T10 checkpoint (read-only pre-Finish verification; wizard OPEN on page 2; Finish NOT invoked)

Run R-20261026-031627-MXfT · cycle 13 · task T10 · worker session `bb03e7b7-4c87-4547-b6f8-e92c5004526c` · task_message_id `da65571b-4008-45c4-9e99-fb21e94249ef`.

## Result

- The existing Data Maintenance Wizard was found on tab 0 (User-scope Designer). It was still open after T9 and was verified on page 1 and then page 2.
- Row 6 `FX_Location` Data Type `String` is now committed as static text. The lingering active Data Type combobox from T9 is closed.
- **Next was activated once.** The wizard is now on page 2 (Create Scripts page). **Create Scripts is visibly unchecked.** Finish is enabled and was **not** pressed.
- The physical SQL table name is **not displayed** anywhere in the wizard (page 1 Table Name disabled and blank; page 2 preview textbox disabled and blank). It is recorded as a qualified limitation, not inferred.
- AC-3 status: **qualified**. Every pre-Finish setting except the physical table name is verified from the accessibility readback; identity, alias and Create Scripts are also shown in screenshots. See the determination below.

## Tab and identity gates (T10)

| Gate | Observed |
|---|---|
| Tab list (read-only) before first select | Tab 0 = Designer with the wizard over the vendor IdoProjects Designer (current); tab 1 = Designer (other); tab 2 = stale Designer (not touched); tab 3 = Web Client / Mongoose IdoProjects (not touched) |
| Tab 0 selection | Selected once (already current); no other tab selected |
| Fresh snapshot (start, untargeted, inline) | Wizard open on page 1; IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxinv`; Site Split unchecked; Table Name and View Name disabled and blank; Form Type MultiView; Form Layout GridLeft; Device Type Default; Back disabled; Next enabled; Finish disabled; six grid rows FX_Item to FX_Location; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Wizard lost or identifiers changed | No. All identifiers matched T9 |

## Row 6 active-editor resolution (step 2)

| Step | Action | Result |
|---|---|---|
| Pre-state (`t10-01` screenshot; snapshot read in full) | Row 6 Data Type combobox `e795`/`e815` active with `String` | Row 6 static SQL `nvarchar`, Length `100` |
| Action A | One click on row 6 **SQL Data Type** cell (ref `e794`) | **Deviation:** this cell was not read-only. It is an editable combobox; the click opened the SQL Data Type editor (active, value `nvarchar`, nothing typed). Data Type `String` committed to static text (`e838`). |
| Action B | One click on row 6 **row-header number** cell `6` (ref `e619`) (non-editing, non-Property-Class) | Closed the SQL Data Type editor. No active combobox remains. Snapshot `t10-03`. |

Neither click touched Property Class, a checkbox, Label String ID or Default Value. Tab, Enter and Escape were not pressed. The Property Class lookup was not opened.

## Six-row readback (page 1, snapshot `t10-03`; all values static text unless noted)

| Row | Name | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Property Class | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Item | String | nvarchar | 50 | blank (n/a) | checked | checked | blank | blank | blank |
| 2 | FX_Description | String | nvarchar | 255 | blank (n/a) | unchecked | unchecked | blank | blank | blank |
| 3 | FX_Warehouse | String | nvarchar | 100 | blank (n/a) | unchecked | unchecked | blank | blank | blank |
| 4 | FX_QuantityOnHand | Decimal | decimal | 12 | 2 | unchecked | unchecked | blank | blank | blank |
| 5 | FX_ReorderLevel | Decimal | decimal | 12 | 2 | unchecked | unchecked | blank | blank | blank |
| 6 | FX_Location | String | nvarchar | 100 | blank (n/a) | unchecked | unchecked | blank | blank | blank |

- Exactly six rows; no seventh row (no `gridcell "7"`).
- No active editor remains in the grid after action B.
- Property Class and Label String ID cells are empty in the accessibility tree for all six rows (verified from snapshot text; the Property Class column is partly clipped in screenshots, so the blank state is not visible in screenshots).

## Page 1 screenshots

- `t10-01-wizard-page1-row6-data-type-combobox-active-before-commit.png`: wizard page 1, identity fields, six names, Data Type column off-screen (grid scrolled right), row 6 combobox active before action A. Footer User scope. Does not show Data Type values or Property Class.
- `t10-04-wizard-page1-six-rows-settled-before-next.png`: wizard page 1 after action B, grid scrolled to show Name, Data Type header (partly clipped), SQL Data Type, Property Length: names; SQL types nvarchar/nvarchar/nvarchar/decimal/decimal/nvarchar; lengths 50/255/100/12/12/100. Finish disabled, Next enabled. Does not show Primary Key, Required, Decimal Precision or Property Class (off-screen or clipped).

## Page 2 (after one Next)

- Next activation: 1 (ref `e830`, from fresh snapshot `t10-03`). No validation message or confirmation dialog appeared.
- Snapshot `t10-05-snapshot-page2-after-next.yml`: Create Scripts checkbox `e852` with no checked marker; instruction text `Click "Finish" to create the database table, IDO and optional form.`; disabled textbox `e861` (preview, blank); Back enabled; Next disabled; Finish enabled; Cancel and Help enabled; footer User scope.
- `t10-06-wizard-page2-create-scripts-state-finish-not-pressed.png`: page 2 visible. Create Scripts checkbox **visibly unchecked** (empty box). Instruction text visible. Grey preview area **empty**. Next disabled, Finish enabled (not pressed). Footer User scope. Does not show the physical table name (none visible). Does not show whether a Form-creation option exists beyond the instruction text (none is on the page).
- No other option, Table Name, schema, view or creation-target field is visible on page 2.

## Console (read-only)

- `t10-07-console-errors-readonly.log`: 2 errors, 0 warnings. Both are browser Permissions-Policy notices: `unload is not allowed in this document` at `WSWebClient/res/Designer/app.js` and `WSWebClient/Scripts/yggdrasil-core.js:1409`. Neither message names a wizard action. The cause is not established beyond this text. Recorded as observed; not treated as wizard failure.

## Action audit (T10)

| Operation | Count |
|---|---|
| Tab list / tab select | 1 / 1 (tab 0, already current) |
| Fresh untargeted snapshots (read-only) | 4 (start; `t10-02`; `t10-03`; `t10-05`) |
| Screenshots (read-only) | 3 (`t10-01`, `t10-04`, `t10-06`) |
| Console read (read-only) | 1 (`t10-07`) |
| Wizard grid clicks | 2 (action A `e794`; action B `e619`) |
| Next | **1** (page 1 to page 2) |
| Finish / Save / Cancel / Back / second Next | **0 / 0 / 0 / 0 / 0** |
| Create Scripts change | **0** (left unchecked) |
| Create Form prompt | **0** (not displayed; Form creation not selected) |
| Property Class lookup or combobox opened | **0** |
| Label String ID edits / Default Value edits | **0 / 0** |
| Typed entries | **0** |
| Tab / Escape / Enter | **0 / 0 / 0** |
| Wheel scrolls | 0 |
| Ref-not-found errors | **0** |
| Fresh-snapshot recovery allowance used | **0** |
| Session Expired / sign-in / credential entry | **0** |
| Second wizard / check-in / record creation / editor Form | **0** |
| Metadata unload / FormSync / generated script / SQL / direct SQL / browser JavaScript / evaluate / run-code | **0** |

Deviation: action A opened an editable SQL Data Type combobox. The brief assumed a read-only cell. The editor value stayed `nvarchar`; action B closed it.

## Determination (AC-3 pre-Finish)

| Setting | Verified? | Evidence |
|---|---|---|
| Project `FX_HelloWorldProject01` | **Verified** | snapshot `t10-03` (page 1); `t10-01`, `t10-04`, `t10-06` screenshots show the project |
| IDO Name `FX_InventoryItems` | **Verified** | snapshot `t10-03`; screenshots |
| Physical table name `dbo.FX_InventoryItems` | **Not verified (qualified)** | No field shows it. Table Name and View Name are disabled and blank on page 1. The page-2 preview is blank. Mongoose derives it from the IDO name (per EXP-049 note), but that is inference, not shown here. |
| Table alias `fxinv` | **Verified** | snapshot `t10-03`; `t10-01`, `t10-04` |
| Exactly six business-property rows | **Verified** | snapshot `t10-03`; no seventh row |
| Names, Data Types, SQL types, lengths | **Verified** (accessibility text); screenshot partly shows | `t10-03`; `t10-04` shows names, SQL types and lengths |
| Decimal precision 2 on FX_QuantityOnHand and FX_ReorderLevel | **Verified** (accessibility text); not fully visible in a screenshot | `t10-03` |
| Primary Key and Required on FX_Item only | **Verified** (accessibility text); not visible in a screenshot | `t10-03` |
| Property Class blank on all six | **Verified** (accessibility text); column partly clipped in screenshots | `t10-03`; T9 `t9-27` |
| Label String ID blank on all six | **Verified** (accessibility text) | `t10-03`; T9 `t9-29` |
| Create Scripts unchecked | **Verified** (accessibility text and visible empty box) | `t10-05`; `t10-06` |
| No unexpected object creation selected | **Verified** on page 2 (no other option is shown beyond Create Scripts and the instruction). The optional Form prompt is not displayed until after Finish. | `t10-05`; `t10-06` |

**Verdict:** AC-3 is **qualified**, not fully passed. Every pre-Finish setting except the physical table name is verified from the accessibility readback, and the screenshots support identity, alias, lengths, SQL types and Create Scripts. The physical table name `dbo.FX_InventoryItems` is not visible anywhere before Finish. The Data Type, Primary Key/Required, Decimal Precision and Property Class columns are partly clipped in the screenshots, so their values rest on the snapshot text.

**Readiness for a separate creation decision:** The wizard is in a consistent pre-Finish state and matches the specification. Finish is **not** authorized by this task. An operator decision is required to accept the physical-table-name limitation before any single Finish, the same limitation EXP-049 accepted for the Hello World table.

## Open items

1. Physical table name `dbo.FX_InventoryItems` not visible pre-Finish (qualified).
2. Page 2 preview is blank; no script or object summary is visible.
3. Wizard remains open on page 2. Finish is enabled and not pressed.
4. Console Permissions-Policy notices (2) recorded; not related to a wizard action by their text.
5. Stale tab 2 (FX_LoginPortal Designer) and tab 3 (Web Client) were not selected or touched in T10.

## Next permitted action

Only with separate operator authorization: a single Finish (exactly once) on this page-2 wizard, after the operator accepts the physical-table-name qualification. Any other path (Back, Cancel, Save, second Next, new wizard) is not authorized by T10.
