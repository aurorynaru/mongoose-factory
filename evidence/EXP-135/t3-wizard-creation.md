# EXP-135 T3 — Classic MultiView wizard creation of FX_InventoryEditor (worker-authored)

Run `R-20261026-051803-zOUZ` · cycle 3 · task T3 · worker session `affb961f-8cd1-434c-90c8-e3b993b1da6a` · task_message_id `5c6e07d9-8c2e-4b3f-b1bb-2b6db2ab5cb5`.
Scope: one wizard creation and one Finish only. No ordinary Designer Save, no close/reopen, no runtime open, no record insertion, no vendor Form interaction, no Designer tabs 1/2 interaction.

## Pre-creation gates

| Gate | Result | Evidence |
|---|---|---|
| EXP-134 readback accepted as IDO schema evidence (operator cycle-2 decision; not re-requested) | Carried forward. EXP-134 T10 six-row pre-Finish readback: FX_Item String/nvarchar 50 PK+Required; FX_Description String/nvarchar 255; FX_Warehouse String/nvarchar 100; FX_QuantityOnHand Decimal/decimal 12,2; FX_ReorderLevel Decimal/decimal 12,2; FX_Location String/nvarchar 100. EXP-134 T12: IDO `FX_InventoryItems`, Project Name `FX_HelloWorldProject01`, Tables sub-grid `FX_InventoryItems` alias `fxinv`, six FX_ properties present (plus seven framework properties). | `experiments/EXP-134-...md` T10 and T12 sections (not re-read in the vendor IDOs Form, as instructed) |
| Six property names on the live wizard | **Observed.** Page 2 Primary Collection right-hand list: FX_Description, FX_Item, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse | `t3-03-wizard-page2-primary-collection-properties.png`; snapshot |
| Designer tab 0 empty, clean, User-scoped before New | **Observed.** Form tablist empty; Save disabled; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | Snapshot at task start (tab 0) |
| Name collision (T1 live result) | Not repeated (operator instruction: repeat only if affected by session expiry or other material state change). None occurred. T1 result: zero visible matches for FX_InventoryEditor, positive controls returned rows. | T1 `t1-preflight-gates.md` |
| Web Client identity | Not re-read in T3 (tab 3 not selected). T1 `t1-01` showed `anton.ramos@3mworks.com.ph`. | T1 |

## Wizard configuration (pre-Finish)

| Item | Observed value | Evidence |
|---|---|---|
| Wizard selection dialog | New Form (radio selected); Category `Classic`; Wizard `MultiView`; footer User scope | `t3-01-wizard-selection-classic-multiview-before-ok.png` |
| Page 1 Name | `FX_InventoryEditor` (one plain fill, no `slowly`) | snapshot, `t3-02` |
| Page 1 Form Type | `MultiView` | `t3-02` |
| Page 1 Form Layout | `GridLeft` (default, not changed) | `t3-02` |
| Page 1 Device Type | `Default` (not changed) | `t3-02` |
| Page 1 Data Source (IDO) | `FX_InventoryItems` (option selected from the Data Source list) | `t3-02` |
| Page 1 Query Form / Comments | empty (not changed) | snapshot |
| Page 2 Primary Collection | six FX_ properties in the right-hand list (already included); no transfer clicks | `t3-03` |
| Page 3 order and attributes | six rows, Include checked for all six: FX_Description, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse, FX_Item. Caption cells blank. Form Pages list empty | `t3-04` |
| Final page text | `Click the Finish button to build a multiview form named FX_InventoryEditor with the data source FX_InventoryItems.` | `t3-05` |
| Save Template | Checked on arrival; unchecked by one click on the visible `Save Template` label; verified unchecked in snapshot and `t3-05` | `t3-05` |
| Caption | **Not a wizard field.** No page offers a Form Caption. The Form Caption is blank after creation (see post-Finish) | pages 1–final |

Pre-Finish gate decision: all configuration matched the brief (Classic MultiView, FX_InventoryEditor, FX_InventoryItems, six properties, User scope, Save Template unchecked). Finish was invoked.

## Finish

- Finish invocations: **1**.
- Native result: alert `Process Completed Successfully` (title `Infor Mongoose Application Development Framework - Form Wizard - MultiView`). Acknowledged with its OK once.
- Page URL after OK: `...&MGForm=FX_InventoryEditor`.

## Post-Finish observation (Designer tab 0)

| Item | Observed | Evidence |
|---|---|---|
| Form tab | Tab title `FX_InventoryEditor` | `t3-06-post-finish-designer-fx-inventoryeditor-opened.png` |
| Properties Name | `FX_InventoryEditor` | `t3-06` |
| Properties Caption | **blank** (not set by the wizard) | `t3-06` |
| Properties Version | `User version for us...` (User scope version) | `t3-06` |
| Device Type / Form Type / Is Master | `Default` / `Normal` / `True` | `t3-06` |
| Canvas | Grid at left (blue-star new row 1 with a row header) and six label/edit pairs stacked at right; the rendered canvas shows six Static-like labels and six edit boxes; the Static/Edit binding names were NOT inspected (no component selection in T3) | `t3-06` |
| Save | **Disabled** (`find "Save"` → `button "Save" [disabled]`); the wizard left the Form clean | find result |
| Footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t3-06` |
| Prompts | None after the OK | `t3-06` |

## Limitations and what the next task must do

- **Caption is blank.** AC-5 requires Caption `FX_InventoryEditor`. The wizard offers no caption field; the Caption can be set in Designer Properties (Form-level, in `FX_InventoryEditor` only). Setting it makes the Form dirty, so it needs exactly one ordinary Designer Save (permitted by AC-6). This is a decision for the next bounded task; not done in T3 (T3 forbids a Designer Save).
- **Six component bindings not yet verified.** The canvas shows a grid and six label/edit pairs, but the bound properties (`object.FX_*`) have not been read from component Properties or Details. That is AC-5 work for the next task.
- **Property types (AC-2) rest on the EXP-134 readback** (operator-accepted). The wizard shows names only.
- **Save Template** was unchecked by a label click; the snapshot and `t3-05` both show it unchecked, but the Form was not checked for a template artifact.

## Action counts (T3)

- Finish: **1** (the only one). Wizard OK: 1. Designer New: 1.
- Category open/select: 1/1. Wizard list open/select: 1/1. Data Source open/select: 1/1.
- Name plain-fill entries: 1. Next clicks: 3 (page 1→2, 2→3, 3→final).
- Save Template checkbox label clicks: 1 (unchecked).
- Process-completed OK: 1.
- Designer ordinary Save: **0**. Designer close/reopen: 0. Runtime open: 0. Records inserted: 0.
- Vendor / non-FX_ Form interactions: 0. Designer tabs 1 and 2: not selected or inspected. Tab 3 (Web Client): not selected.
- IDO/SQL/IDO project/property/global object/script/handler creation or change: 0. Metadata unload, FormSync, deployment, direct SQL: 0.
- Browser JavaScript / evaluate / run-code (worker-authored): 0. (The tool's own generated wrapper code is not worker-authored.)
- Ref-not-found errors: 0. Timeouts: 0. Recovery snapshots: 0. Session expiry: 0. Credential entry: 0.
- Screenshots: 6 (`t3-01` to `t3-06`).

## Files

- `evidence/EXP-135/t3-01-wizard-selection-classic-multiview-before-ok.png`
- `evidence/EXP-135/t3-02-wizard-page1-name-datasource-before-next.png`
- `evidence/EXP-135/t3-03-wizard-page2-primary-collection-properties.png`
- `evidence/EXP-135/t3-04-wizard-page3-six-rows-included-order-attributes.png`
- `evidence/EXP-135/t3-05-wizard-final-page-prefinish-save-template-unchecked.png`
- `evidence/EXP-135/t3-06-post-finish-designer-fx-inventoryeditor-opened.png`
- `evidence/EXP-135/t3-wizard-creation.md` (this file)
