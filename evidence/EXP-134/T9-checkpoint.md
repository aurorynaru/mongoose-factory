# EXP-134 T9 checkpoint (rows 4 to 6 completed; six-row pre-Finish readback captured; wizard OPEN on page 1; Finish NOT invoked)

Run R-20261026-031627-MXfT · cycle 12 · task T9 · worker session `935655ab-bddc-4f6b-bb7b-f8bd9a77a2a6` · task_message_id `d318b9ac-acaf-4db3-9e74-f452e6af11da`.

## Result

- **Six business-property rows are configured** in the existing wizard, read back from accessibility snapshots and screenshots. The wizard is still open on **page 1**. Finish, Next, Back, Cancel, Save and Create Scripts were **not** pressed. Page 2 was **not** reached.
- Pre-Finish AC-3 is **qualified**: all six rows match the specification in the snapshot text. Create Scripts (page 2) and the physical table name remain unverified because page 2 was not reached.
- No stale-reference errors, timeouts, dialogs or Session Expired events occurred in T9. The recovery allowance was **not used**.

## Preflight (T9, read-only)

| Gate | Observed |
|---|---|
| Tab list (read-only) before the first select | Tab 0 = Designer with the data maintenance wizard open over the vendor IdoProjects Designer; tab 1 = Designer (other); tab 2 = stale Designer (not touched); tab 3 = Web Client (not touched) |
| Tab 0 selection | Selected once (already current); fresh untargeted snapshot taken |
| Wizard identity (fresh snapshot, `t9-01`) | IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxinv`; Site Split unchecked; Table Name and View Name disabled and blank; Form Type MultiView, Form Layout GridLeft, Device Type Default (unchanged); Back disabled; Next enabled; Finish disabled |
| Designer scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Starting state | Rows 1 to 3 committed as in T8; row 4 Decimal Precision editor active with uncommitted `2` (see below) |

## Row 4 precision: original state and commit

- **Original state (fresh snapshot, and screenshot `t9-01`):** the Decimal Precision editor on row 4 held an active textbox with value `2`. The grid cell itself showed no committed value. Interpretation: uncommitted, as recorded in T8.
- **Commit action 1:** fresh snapshot taken; then one click on the row 4 Property Length cell (ref `e737`, the `12` cell). Result: precision `2` became static grid text in the Decimal Precision cell (`t9-02` snapshot; `t9-03` screenshot), and a Length editor opened with `12` selected. The Length value was unchanged.
- **Commit action 2 (to close the Length editor):** fresh snapshot (`t9-04`); one click on the row 4 Data Type cell (ref `e733`). Result: Length `12` committed as static text (`gridcell "12" ref e789`); the Data Type combobox became active with `Decimal` (`t9-05`, `t9-06`).
- **Verified committed after this action:** Data Type Decimal, SQL Data Type `decimal`, Property Length `12`, Decimal Precision `2` (static text, not an editor), Primary Key unchecked, Required unchecked.
- **Deviation (minor):** the commit for precision used the Length cell rather than a Data Type cell, which opened a Length editor that had to be closed by a second click. The Length value was not changed by either click.

## Add Row counts

| Add Row | Attempt | Result |
|---|---|---|
| Row 5 | 1 (ref `e559` from fresh snapshot `t9-05`) | Row 5 created; Name editor active (`t9-07` snapshot shows left-grid cell `5`, active textbox) |
| Row 6 | 1 (ref `e559` from fresh snapshot `t9-17`, after confirming no row 6 by grep) | Row 6 created; Name editor active (`t9-19` snapshot shows left-grid cell `6`) |

Total Add Row attempts in T9: **2**. Total business rows at the end: **6**. No seventh row exists (`t9-26` grep: no `gridcell "7"`).

## Row-by-row readback (committed values; from the `t9-26` snapshot unless stated)

| Row | Name | Property Class | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `FX_Item` | blank (no text in cell) | String | nvarchar | 50 | blank (not applicable) | checked | checked | blank | blank |
| 2 | `FX_Description` | blank | String | nvarchar | 255 | blank (not applicable) | unchecked | unchecked | blank | blank |
| 3 | `FX_Warehouse` | blank | String | nvarchar | 100 | blank (not applicable) | unchecked | unchecked | blank | blank |
| 4 | `FX_QuantityOnHand` | blank | Decimal | decimal | 12 | **2** | unchecked | unchecked | blank | blank |
| 5 | `FX_ReorderLevel` | blank | Decimal | decimal | 12 | **2** | unchecked | unchecked | blank | blank |
| 6 | `FX_Location` | blank | String | nvarchar | 100 | blank (not applicable) | unchecked | unchecked | blank | blank |

Qualifications:
- Row 6 Data Type `String` is shown in an **active combobox editor** at the time of the final readback. Its SQL Data Type `nvarchar` and Length `100` are static grid text, which indicates the committed value. The combobox editor itself was left open (see Open items).
- Row 1 Primary Key and Required are shown as checked in the snapshot (`checkbox checked` on refs `e672`, `e675`). Row 1 is partially clipped at the top edge of the grid in both screenshots; the checked state is confirmed by the snapshot text and the far-right view.
- Property Class cells read empty in the accessibility snapshot for all six rows. The Property Class column header is partly clipped in the screenshots, so the blank state is confirmed by the snapshot, not by a fully visible column.
- Decimal Precision for String rows is blank, which is expected. No precision was entered on any String row.

## Screenshots (decisive)

| File | Shows | Does not prove |
|---|---|---|
| `t9-01-row4-precision-editor-before-commit.png` | Wizard page 1, IDO `FX_InventoryItems`, project `FX_HelloWorldProject01`, alias `fxinv`, User-scope footer. Row 4 `FX_QuantityOnHand` Decimal Precision cell has an active textbox with `2`. Finish disabled | That the `2` is committed (it is the active editor) |
| `t9-03-row4-precision-2-committed-length-editor-active.png` | Row 4 Decimal Precision shows static `2`; the Property Length cell has an active editor with `12` selected; footer User scope | Row 4 Data Type; the Length editor's commit (closed in the next step) |
| `t9-06-row4-readback-after-data-type-commit.png` | Grid scrolled: rows 1 to 4 Data Type String/String/String/Decimal with SQL types nvarchar/nvarchar/nvarchar/decimal; row 4 Data Type combobox active with `Decimal` | Length and precision columns (scrolled out of view); rows 5 and 6 |
| `t9-10-row5-data-type-combobox-active-before-open.png` | Row 5 `FX_ReorderLevel` name committed; Data Type combobox active under the Data Type column; Property Class cell blank | That the combobox is the Property Class column (it is under the Data Type header) |
| `t9-18-row5-readback-after-precision-commit.png` | Row 5 name `FX_ReorderLevel`; Data Type `Decimal` in an active combobox; SQL Data Type `decimal`; row 4 Data Type Decimal | Length and precision for row 5 (scrolled out of view; confirmed by snapshot `t9-17`) |
| `t9-27-six-row-grid-after-row6-commit-left-view.png` | Six rows visible (rows 1 to 6): names FX_Item to FX_Location; Data Type String, String, String, Decimal, Decimal, String; SQL Data Type nvarchar, nvarchar, nvarchar, decimal, decimal, nvarchar; Property Class column blank (header partly clipped); row 6 Data Type combobox active with `String`; Finish disabled; User-scope footer | Length, precision, key and required columns (off-screen) |
| `t9-28-six-row-grid-scrolled-right-precision-pk-required.png` | Property Length 50 / 255 / 100 / 12 / 12 / 100 for rows 1 to 6; Decimal Precision `2` for rows 4 and 5, blank for the rest; Primary Key checked on row 1 (top edge clipped) and unchecked on rows 2 to 6 | Required column (off-screen); Label String ID (off-screen) |
| `t9-29-six-row-grid-scrolled-far-right-required-labelid.png` | Required checked on row 1 (top edge clipped) and unchecked on rows 2 to 6; Label String ID blank for all six rows; Default Value blank | Row 1 Required beyond the clipped top edge (confirmed by snapshot `t9-26`) |

Snapshot files saved under `evidence/EXP-134/` (accessibility YAML, not images): `t9-02`, `t9-04`, `t9-05`, `t9-07`, `t9-08`, `t9-09`, `t9-11`, `t9-12`, `t9-13`, `t9-14`, `t9-15`, `t9-16`, `t9-17`, `t9-19`, `t9-20`, `t9-21`, `t9-22`, `t9-23`, `t9-24`, `t9-25`, `t9-26` (the final six-row readback). Tool-written browser snapshot and console logs also exist under `evidence/playwright/`.

## Action audit (T9)

| Operation | Count |
|---|---|
| Tab list / tab select | 1 / 1 (tab 0, already current) |
| Untargeted snapshots (read-only) | 22 (all listed above; the first was inline, not saved) |
| Wizard grid clicks (edits, commits, Add Row, combobox Open, option select) | 15 (see action list below; includes the 2 Add Row clicks) |
| Typed entries (grid editors) | 5: `FX_ReorderLevel`, `12`, `2`, `FX_Location`, `100` (row 4 precision `2` was typed in T8, not T9) |
| Wheel scrolls (horizontal, read-only view changes, no click) | 2 |
| Add Row | 2 (rows 5 and 6); each succeeded on its first attempt |
| Finish / Next / Back / Cancel / Save / Create Form / Create Scripts change | **0 / 0 / 0 / 0 / 0 / 0 / 0** |
| Property Class lookup or combobox opened | **0** |
| Label String ID edits | **0** |
| Tab / Escape / Enter pressed | **0 / 0 / 0** |
| Ref-not-found errors | **0** |
| Fresh-snapshot recovery allowance used | **0** |
| Session Expired / sign-in / credential entry | **0** |
| Second wizard / check-in / record creation / editor Form | **0** |
| Metadata unload / FormSync / generated script / SQL execution | **0** |
| Browser JavaScript / evaluate / run-code / internal APIs (worker-authored) | **0** |

Action list (wizard edits, in order):
1. Row 4 Property Length cell click `e737` (commits precision `2`; opens the Length editor)
2. Row 4 Data Type cell click `e733` (commits Length `12`; opens the Data Type combobox)
3. Add Row `e559` (row 5)
4. Type `FX_ReorderLevel` into the active Name editor `e837`
5. Row 5 Data Type cell click `e845` (commits name)
6. Row 5 Data Type combobox Open `e796`
7. Select `Decimal` (`e878`)
8. Row 5 Property Length cell click `e849`
9. Type `12` into the active Length editor `e786`
10. Row 5 Decimal Precision cell click `e851` (commits Length `12`)
11. Type `2` into the active Decimal Precision editor `e755`
12. Row 5 Data Type cell click `e895` (commits precision `2`)
13. Add Row `e559` (row 6)
14. Type `FX_Location` into the active Name editor `e837`
15. Row 6 Data Type cell click `e953` (commits name)
16. Row 6 Data Type combobox Open `e796`
17. Select `String` (`e996`)
18. Row 6 Property Length cell click `e957` (commits String)
19. Type `100` into the active Length editor `e786`
20. Row 6 Data Type cell click `e1003` (commits Length `100`)

Deviations (recorded, not corrected):
- Name entry for rows 5 and 6 typed into the Name editor that was already active after Add Row, without first clicking the Name cell. The editor was targeted by a current snapshot ref (`e837`), and the snapshot showed it active with the expected empty value. The brief's sequence named a Name-cell click first.
- Commit of row 4 precision used the Length cell, which opened a Length editor that needed a second click to close (no value change).

## Open items

1. **Row 6 Data Type combobox editor remains active** (value `String`, committed SQL type `nvarchar`). It was left open to avoid opening another editor. A later task must not press Finish until the wizard is re-read. It is not a dialog.
2. **Create Scripts and the physical SQL table name** remain unverified (page 2 not reached; table name disabled and blank on page 1).
3. **Console**: the page reports "2 errors, 0 warnings" in every snapshot since T9 started. The errors were not inspected (not in T9 scope) and are not attributed to any action.
4. **Row 1 is partially clipped** at the top edge of the grid in all screenshots. Its values are confirmed by snapshot text only.
5. **Page 2 has not been reached.** T10 needs separate authorization for page-2 inspection, Create Scripts state and the Finish decision.
6. Stale tab 2 (FX_LoginPortal Designer with an error dialog from T3) and tab 3 (Web Client) were not selected or touched in T9.

## Next permitted action

A later task (with its own authorization) may inspect page 2 (Next once) to verify Create Scripts is unchecked and read the physical table name. **Finish is not authorized by this checkpoint.** Before any further action, take one fresh untargeted snapshot and confirm the six rows above.

## Acceptance (T9 scope)

| AC | T9 status | Evidence | Limits |
|---|---|---|---|
| AC-1 (preflight identity, DEFAULT configuration, User scope, existing project) | Designer scope and wizard identity re-observed (footer `User`; IDO Name, project, alias on page 1). The Web Client header was not re-read in T9 (T6 and T8 observed it) | `t9-01`, snapshot `t9-26` | Web Client header not re-read in T9 |
| AC-2 (absence gates before the wizard) | Not re-run in T9 (done in T4 and T1; results carried forward as recorded) | — | — |
| AC-3 (pre-Finish six rows) | **Qualified.** Six rows match the specification in the snapshot text, with precision 2 on rows 4 and 5; Property Class and Label String ID read blank; no seventh row. Create Scripts unchecked is **not verified** (page 2 not reached) | `t9-26` (snapshot), `t9-27`, `t9-28`, `t9-29` (screenshots) | Create Scripts on page 2; row 1 clipped in screenshots; Property Class column partly clipped |
| AC-4 to AC-10 | Not reached in T9 (no Finish, no creation, no check-in, no close/reopen) | — | — |
