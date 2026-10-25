# EXP-135 T4 — read-only FX_InventoryEditor definition verification (worker-authored)

Run `R-20261026-051803-zOUZ` · cycle 4 · task T4 · worker session `5be699f8-f84b-49a5-a525-89738db9be1b` · task_message_id `56775549-bd3e-4125-ae32-1afcbfd42072`.
Scope: read-only Designer inspection of the loaded FX_InventoryEditor in tab 0. No Caption or component edit, no ordinary Designer Save, no close/reopen, no Finish, no wizard, no runtime open, no record creation, no vendor/non-FX_ Form, no Designer tabs 1 or 2, no Web Client tab 3.

## 1. Carry-forward review (EXP-134 schema evidence)

| Item | Source | Status in EXP-135 |
|---|---|---|
| IDO `FX_InventoryItems` in project `FX_HelloWorldProject01` | EXP-134 T12 header (`experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` lines 463, 459–462): "Project Name `FX_HelloWorldProject01`" | Carried forward. Not re-observed in T4 (no IDO Form opened; vendor/IDO Forms not used). |
| Tables sub-grid alias `fxinv` | EXP-134 T12 line 464 | Carried forward. Not visible on the FX_InventoryEditor Form surface. |
| Six business properties, names | EXP-134 T12 table lines 469–476; EXP-134 T14/T15 re-observed; EXP-135 T3 page 2 (`t3-03`) observed the same six names | Names observed in EXP-135 (wizard) and EXP-134 (IDO). |
| Six business property types | EXP-134 T12 lines 471–476: FX_Item String 50 key 1 Required; FX_Description String 255; FX_Warehouse String 100; FX_QuantityOnHand Decimal 12; FX_ReorderLevel Decimal 12; FX_Location String 100 | **Carried forward from EXP-134 (operator decision, cycle 2).** Not observed in EXP-135. |
| Decimal precision 2 | EXP-134 T13 (line ~512): SQL-level `decimal(12,2)`; the T12 IDO grid shows no precision column (EXP-134 line 478) | Carried forward at SQL-metadata level. IDO-level precision unverified. |

Conclusion for the coordinator: the EXP-134 record **does** explicitly state the six names, types and the FX_HelloWorldProject01 membership, and the operator accepted it as carry-forward evidence. It does not establish those facts through a new read in EXP-135.

## 2. Designer identity and scope (tab 0, fresh snapshot)

- Tab list (read-only) was taken first; tab 0 was then selected once (succeeded).
- Tab 0 URL carries `MGForm=FX_InventoryEditor`. Designer tab heading: `FX_InventoryEditor`. Designer tabs 1 and 2 were not selected or inspected, so their contents remain unknown.
- Properties (Form): Name `FX_InventoryEditor`; Description blank; **Caption blank**; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`.
- Footer (all screenshots): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- **Save: disabled** (`find "Save"` returned `button "Save" [disabled]` at two points: before the `t4-02` capture and before the `t4-03` capture).
- Web Client header (`anton.ramos@3mworks.com.ph`): not re-read in T4 (tab 3 not selected; not in the T4 instruction). Last observed in T1 (`t1-01`).

## 3. Primary collection (Details > Collections, read-only)

- Tree node: `Primary Collection: FX_InventoryItems`. Observed in snapshot `e559`/`e560` (task-local; see section 7).

## 4. Components (Details > Components, after Expand; read-only)

Source: snapshot of the Components tabpanel after the tree Expand button (ref `e594`); the column order is Name | Type | Data Source | Pane | Container | Tab | Event to generate | Component Class | Enabled When | Visible When | Required When. Blank cells are omitted.

| Component | Type | Data Source (binding) | Pane | Container | Tab |
|---|---|---|---|---|---|
| Pane (00) | (pane) | — | — | — | — |
| FormCollectionGrid | Grid | `objects` | 0 | (blank) | 0 |
| FX_ItemGridCol | GridColumn | `object.FX_Item` | 0 | FormCollectionGrid | 6 |
| FX_DescriptionGridCol | GridColumn | `object.FX_Description` | 0 | FormCollectionGrid | 1 |
| FX_WarehouseGridCol | GridColumn | `object.FX_Warehouse` | 0 | FormCollectionGrid | 5 |
| FX_QuantityOnHandGridCol | GridColumn | `object.FX_QuantityOnHand` | 0 | FormCollectionGrid | 3 |
| FX_ReorderLevelGridCol | GridColumn | `object.FX_ReorderLevel` | 0 | FormCollectionGrid | 4 |
| FX_LocationGridCol | GridColumn | `object.FX_Location` | 0 | FormCollectionGrid | 2 |
| Pane (01) | (pane) | — | — | — | — |
| FX_ItemStatic | Static | (blank) | 1 | (blank) | 17 |
| FX_ItemEdit | Edit | `object.FX_Item` | 1 | (blank) | 18 |
| FX_DescriptionStatic | Static | (blank) | 1 | (blank) | 7 |
| FX_DescriptionEdit | Edit | `object.FX_Description` | 1 | (blank) | 8 |
| FX_WarehouseStatic | Static | (blank) | 1 | (blank) | 15 |
| FX_WarehouseEdit | Edit | `object.FX_Warehouse` | 1 | (blank) | 16 |
| FX_QuantityOnHandStatic | Static | (blank) | 1 | (blank) | 11 |
| FX_QuantityOnHandEdit | Edit | `object.FX_QuantityOnHand` | 1 | (blank) | 12 |
| FX_ReorderLevelStatic | Static | (blank) | 1 | (blank) | 13 |
| FX_ReorderLevelEdit | Edit | `object.FX_ReorderLevel` | 1 | (blank) | 14 |
| FX_LocationStatic | Static | (blank) | 1 | (blank) | 9 |
| FX_LocationEdit | Edit | `object.FX_Location` | 1 | (blank) | 10 |

Binding readback:
- Grid: one Grid (`FormCollectionGrid`, Data Source `objects`) with six GridColumns, each bound to a distinct `object.<FX_ property>`, covering all six business properties exactly once.
- Edit fields: six Edits, each bound to a distinct `object.<FX_ property>`, covering all six exactly once.
- Static labels: six Statics with **no Data Source binding** (labels; their association is by name and Tab order only).
- The grid `objects` Data Source matches the EXP-041-R3 wizard-generated pattern (`experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` lines 569–582, 643: `FormCollectionGrid` Grid `objects`; GridColumns `object.<prop>`; Static/Edit pairs). The meaning of `objects` is not defined in the record and is not interpreted here.
- Tab order: grid columns 1–6 (Pane 0) then Static/Edit pairs 7–18 (Pane 1). The sequence is consistent; no duplicate binding.

## 5. Static caption check (one sampled Static, read-only selection)

- Selected `FX_ItemStatic` (Static) in the Components grid (selection only; Form not edited).
- Properties (Component): Name `FX_ItemStatic`; Type `Static`; **Caption blank**; Data Source section (collapsed) not expanded.
- Canvas (`t4-01`, `t4-03`): all six label boxes show no visible text. Caption was read for FX_ItemStatic only; the other five Static Captions are inferred blank from the canvas and not read individually.
- EXP-041-R3 line 835 records the same pattern (blank Form Caption, blank page-3 Caption cells, unlabelled runtime controls) as **observed without a known cause**.

## 6. Caption / Save conflict (for coordinator disposition; not acted on)

- **AC-5 Caption requirement is not met:** Form Caption is blank (Properties > Caption, `t4-01`, `t4-02`).
- The wizard ended clean (Save disabled after Finish, `t3-06`). Setting Caption is a Form-only Properties edit that would make the Form dirty and need an ordinary Designer Save.
- AC-6 permits **zero** Saves if the wizard left the Form clean, and **one** only if the wizard left permitted unsaved changes. The brief's T4 text says a Caption edit "needs a separate operator disposition". T4 did not edit Caption.
- Decision required from the operator before any Caption edit: (a) authorize exactly one Caption-only ordinary Designer Save on FX_InventoryEditor (satisfies AC-5 and the one-save ceiling); or (b) accept the Caption gap and record AC-5 as partial. Recommendation: (a), because the Objective and AC-5 both name Caption FX_InventoryEditor and the save ceiling of one is not exceeded. The blank Static labels (section 5) are outside the stated acceptance checks; they should be recorded, not fixed here.

## 7. Evidence files written in T4

- `evidence/EXP-135/t4-01-designer-tab0-fx-inventoryeditor-loaded-pre-inspection.png` — tab 0 before inspection: Properties (Name `FX_InventoryEditor`, Caption blank, Version `User version for us…`, Form Type `Normal`, Is Master `True`), canvas grid plus six label/edit boxes, Details collapsed, Save disabled (toolbar icon grey), footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Proves: identity, User scope, blank Caption, clean toolbar. Does not prove: bindings, the Save disabled state beyond the icon (`find` result is the stronger proof).
- `evidence/EXP-135/t4-02-designer-components-tree-expanded-bindings.png` — Details > Components expanded: Pane (00), FormCollectionGrid (Grid, `objects`), GridColumns `object.FX_Description`, `object.FX_Location`, `object.FX_QuantityOnHand` visible; `FX_ReorderLevelGridCol` (`object.FX_ReorderLevel`) only partly visible; `FX_Warehouse` and `FX_Item` GridColumns and the Pane (01) rows are below the visible area. Proves: the grid column bindings visible in the screenshot. Does not prove: the remaining two grid rows and the Static/Edit rows (those are in the snapshot text in section 4).
- `evidence/EXP-135/t4-03-designer-fx-itemstatic-component-properties-caption-blank.png` — FX_ItemStatic selected (Static): Properties Name `FX_ItemStatic`, Type `Static`, Caption blank; Components grid shows `FX_ReorderLevelEdit`, `FX_WarehouseStatic`, `FX_WarehouseEdit`, `FX_ItemStatic` (highlighted), `FX_ItemEdit` rows with Data Source `object.FX_ReorderLevel`, `object.FX_Warehouse`, `object.FX_Item`; Save icon grey; footer User scope. Proves: the Static selection and its blank Caption; the bindings of the last rows. Does not prove: Caption of the other five Statics.
- Snapshot-based readbacks (captured responses, not separate files): tab list and tab 0 snapshot (`t4-` observations in section 2); Collections (`Primary Collection: FX_InventoryItems`); Components tree expanded (section 4); Properties of FX_ItemStatic (section 5); Save `find` results (`disabled`) at the end of inspection.
- `evidence/EXP-135/t4-definition-readback.md` (this file).

Snapshot file references produced by the Playwright tool (stored under `evidence/playwright/`, not copied): `page-2026-10-25T21-31-47-792Z.yml`, `page-2026-10-25T21-31-56-751Z.yml`, `page-2026-10-25T21-32-05-779Z.yml`, `page-2026-10-25T21-32-33-777Z.yml`.

## 8. Action inventory (T4)

| Action | Count | Notes |
|---|---|---|
| Read (EXP-134 T12/T13 lines, EXP-135 t3 record, EXP-041-R3 grep, EXP-130 grep) | several | Read-only |
| Tab list | 1 | Before first selection |
| Tab select (tab 0) | 1 (succeeded) | After list |
| Fresh snapshots (page / tabpanel) | 6 | Read-only. No ref-not-found error. No recovery snapshot needed. |
| Targeted finds | 5 | Read-only (`Components`, regex, `Caption`, `Save` x2) |
| Clicks — UI state only | 4 | Details panel Expand (1), Components tab (1), Components tree Expand (1), FX_ItemStatic row selection (1). None edits the Form definition. |
| Caption or component property edit | 0 | — |
| Ordinary Designer Save | 0 | Save remained disabled (`find` after inspection) |
| Form close / reopen | 0 | — |
| Finish / wizard | 0 | — |
| Runtime open / record insert | 0 / 0 | — |
| Vendor / non-FX_ Form interaction | 0 | — |
| Designer tabs 1 and 2 / Web Client tab 3 | 0 | Not selected |
| Browser JavaScript / evaluate / run-code (worker-authored) | 0 | The tool-generated wrapper text in outputs is not worker-authored |
| Credentials, session expiry, sign-in | 0 | No session modal |
| Screenshots | 3 | `t4-01`, `t4-02`, `t4-03` |

## 9. Acceptance matrix (T4 scope; not a final EXP-135 verdict)

| Check | T4 result | Evidence |
|---|---|---|
| AC-1 | Partial, carried from T1/T2. Tab 0 User-scope footer re-observed. Web Client header not re-read in T4. | `t4-01`, `t4-02`, `t4-03`; section 2 |
| AC-2 | Partial. Type and project membership carried from EXP-134 (not re-observed). Name collision carried from T1. | section 1 |
| AC-3 | Not evaluated (runtime step, later). | — |
| AC-4 | Carried from T3 (no change in T4). | `evidence/EXP-135/t3-wizard-creation.md` |
| AC-5 | **Partial.** Bindings **met** (grid: six `object.FX_*` GridColumns; Static/Edit: six Edit `object.FX_*`; collection `FX_InventoryItems`). Caption **not met** (blank). | sections 3–4, 6; `t4-01`–`t4-03` |
| AC-6 | Not evaluated for save/reopen. Clean state observed (Save disabled) before and after T4 reads. | section 2 |
| AC-7 to AC-10 | Not evaluated. | — |

## 10. Limits

- The IDO property types (AC-2) and FX_HelloWorldProject01 membership were not re-read in EXP-135.
- Five of six Static Captions were not read individually.
- Meaning of the grid Data Source `objects` is not defined in the records read.
- Snapshot-based observations are not proof of persistence; no close/reopen was performed (not permitted in T4).
