# EXP-136 T24 - Post-test read-only FX_InventoryItems source comparison (AC-12)

Run R-20261026-062909-9GoC, cycle 34, task T24. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User; account `anton.ramos@3mworks.com.ph`; configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- **AC-12: PASSED (qualified).** The three FX_InventoryItems records read through the existing runtime `FX_InventoryEditor` Form (one native Select Form open, one native collection Refresh) match the T9 baseline wherever T9 displayed a value, match the T23 dashboard output on all six source properties, and agree with the expected values for identity, quantity, reorder level and warehouse. No inventory write, record Save, Form Save or edit occurred in T24.
- **Qualifications:** the readback is a same-session Web Client UI readback of the Form's loaded collection, not a database-level or SQL/IDO-metadata query. The IDO identity of the collection (`FX_InventoryItems`) was not re-read in T24; it is carried from EXP-135 T4 and T7. Exhaustiveness is supported by the Form's `(Object x of 3)` count and by the disabled `Get More Rows` control, not by an independent count. No durability claim.
- **AC-11:** unchanged, PASSED (observed, single activation, coordinate-click qualified; T23). T24 performed zero dashboard Refresh Data activations.
- **AC-7:** remains PENDING (qualified). T24 did not open the Script Editor.
- **AC-13:** partial; final reconciliation and operator acceptance pending.
- EXP-136 is NOT accepted.

## 2. Preparation and initial application check (brief steps 1-8)

- Read: `AGENTS.md` (in context); `evidence/EXP-136/t9-inventory-source-preflight.md` (full); `evidence/EXP-136/t23-single-coordinate-refresh-runtime-results.md` (first 60 lines plus the T23 section headings; sections 1-5 and the T23 table were read); experiment record T23 status paragraph.
- Tab list (read-only, first): tab 0 `Mongoose` Web Client (`favoriteContext=FX_InventoryDashboard`); tab 1 `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` (Designer, `WSWebClient/designer/Default.aspx`). Identified by title and URL.
- Tab 0 selected after the list; fresh snapshot. Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Tab `FX_InventoryDashboard` selected. Save disabled. No dialog. Console header `21 errors, 10 warnings` (unchanged from T23; not re-read).
- Dashboard state (observed, screenshot `t24-webclient-dashboard-state-before-source-access.png`, viewed): `Loaded 3 records`; Total Items 3, Total Units 128, Low Stock 1, Out of Stock 1; three rows with the T23 values. The dashboard was not interacted with.
- Designer (tab 1) was NOT selected or inspected in T24. Last recorded state (T22, carried): clean, Save disabled, `FX_InventoryDashboard` loaded, `FX_InventoryEditor` also open as a tab.

## 3. Runtime source access (brief steps 9-13)

- **Pre-open check:** `FX_InventoryEditor` was NOT open as a runtime tab in the Web Client (the tab strip held only the dashboard). One native open was therefore needed.
- **Open (one unambiguous match):** toolbar `Open` (Select Form).
  - The dialog opened with the filter pre-set to `FX_InventoryDashboard` (residue from earlier tasks).
  - Filter replaced: one click on the filter box; Control+A once; `FX_InventoryEditor` typed slowly (no Enter).
  - Result: **exactly one row**, Caption `FX_InventoryEditor`, Name `FX_InventoryEditor` (snapshot `page-2026-10-26T02-18-59-532Z.yml`, lines 138-139).
  - Row selected once (Name cell); OK clicked once. Cancel not used.
- **Runtime identity (observed, screenshot `t24-fxinventoryeditor-pre-refresh-identity.png`, viewed):** tab `FX_InventoryEditor` selected (heading level 2); URL `favoriteContext=FX_InventoryEditor`; header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; `(Object 1 of 1)`; one blank add-mode placeholder row; Save greyed; no dialog. The dashboard tab remained open (not selected).
- **Native collection Refresh: one.** Toolbar `Refresh` (ref in the Mongoose outer frame; not the dashboard's Refresh Data control) clicked once; 3 s wait. This is the T9-documented read-only collection reload.
- **Collection identity:** the `FX_InventoryEditor` Form's collection was established in EXP-135 T4 and T7 as the IDO `FX_InventoryItems` (Primary Collection, six `object.FX_*` bindings). Not re-read in T24 (no Designer, no Form Properties); carried. The T9 IDOs-route attempt for re-reading the IDO identity was not repeated.

## 4. Source record readback (brief steps 14-19)

Two channels were used, both read-only:

1. **Visible record-detail panel** (screenshots, viewed): the Form's detail panel shows one record at a time, with six input boxes in the order Description, Location, QuantityOnHand, ReorderLevel, Warehouse, Item. Field captions are not displayed in the viewport, so the value-to-field mapping is an inference from this order (see section 8).
   - Record 1 (`t24-fxinventoryeditor-post-refresh-readback.png`, `(Object 1 of 3)`): `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`.
   - Record 2 (`t24-fxinventoryeditor-record2-detail-readonly.png`, `(Object 2 of 3)`): `FX test bracket`, `FX-LOC-02`, `8.00`, `10.00`, `FX-WH-A`, `FX-ITEM-002`.
   - Record 3 (`t24-fxinventoryeditor-record3-detail-readonly.png`, `(Object 3 of 3)`): `FX test gasket`, `FX-LOC-03`, `0.00`, `5.00`, `FX-WH-B`, `FX-ITEM-003`.
2. **Accessibility grid cells** (snapshot `page-2026-10-26T02-19-45-167Z.yml`, lines 155-179): all three rows' cell text, in the same order as the detail panel. This gives full text for the previously clipped columns without relying on the viewport.
   - Row 1: `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`.
   - Row 2: `FX test bracket`, `FX-LOC-02`, `8.00`, `10.00`, `FX-WH-A`, `FX-ITEM-002`.
   - Row 3: `FX test gasket`, `FX-LOC-03`, `0.00`, `5.00`, `FX-WH-B`, `FX-ITEM-003`.

Both channels agree for all three records. Grid column headers are not visible in the captured viewport, so the grid-cell order is matched to the detail order rather than to labelled columns.

**Completeness.** Count `(Object x of 3)` after the Refresh (UI count, not database count). Accessibility tree shows exactly three data rows (`gridcell` 1, 2, 3); no blank add-mode row remained after the Refresh (contrast with the pre-Refresh placeholder). No filter was applied (none set in the Form). The toolbar `Get More Rows` control is `[disabled]` in the latest snapshot (`page-2026-10-26T02-20-17-065Z.yml`, line 69), which indicates no further rows to fetch in this result set. Limitation: this is the Form's own query result in this session, not an independent database count.

**Record selection.** Records 2 and 3 were selected by one click each on the row-number cell. This moves the current record only. No cell was edited, and Save stayed disabled after each selection (screenshots).

## 5. Six-property comparison (brief steps 20-22)

Columns: T9 baseline (what T9 actually displayed); T23 dashboard value (screenshot `t23-post-click-after-3s-viewport.png`); T24 source value (section 4); match status.

Key: "T9 read" = displayed and read in T9; "T9 not read" = clipped in T9, so not independently established at baseline.

**FX-ITEM-001**

| Property | T9 baseline | T23 dashboard | T24 source | Match |
| --- | --- | --- | --- | --- |
| Item (FX_Item) | T9 read (row 1 key `FX-ITEM-001`) | FX-ITEM-001 | FX-ITEM-001 | Yes |
| Description (FX_Description) | T9 read (row-1 detail `FX test widget`) | FX test widget | FX test widget | Yes |
| Location (FX_Location) | T9 read (row-1 detail `FX-LOC-01`) | FX-LOC-01 | FX-LOC-01 | Yes |
| QuantityOnHand (FX_QuantityOnHand) | T9 read (`120.00`) | 120 | 120.00 | Yes (format only) |
| ReorderLevel (FX_ReorderLevel) | T9 read (`20.00`) | 20 | 20.00 | Yes (format only) |
| Warehouse (FX_Warehouse) | T9 read (`FX-WH-A`) | FX-WH-A | FX-WH-A | Yes |

**FX-ITEM-002**

| Property | T9 baseline | T23 dashboard | T24 source | Match |
| --- | --- | --- | --- | --- |
| Item | T9 read (row 2 key `FX-ITEM-002`) | FX-ITEM-002 | FX-ITEM-002 | Yes |
| Description | **T9 not read** (clipped) | FX test bracket | FX test bracket | Yes; baseline not independently established |
| Location | **T9 not read** (clipped) | FX-LOC-02 | FX-LOC-02 | Yes; baseline not independently established |
| QuantityOnHand | T9 read (`8.00`) | 8 | 8.00 | Yes (format only) |
| ReorderLevel | T9 read (`10.00`) | 10 | 10.00 | Yes (format only) |
| Warehouse | T9 read (`FX-WH-A`) | FX-WH-A | FX-WH-A | Yes |

**FX-ITEM-003**

| Property | T9 baseline | T23 dashboard | T24 source | Match |
| --- | --- | --- | --- | --- |
| Item | T9 read (row 3 key `FX-ITEM-003`) | FX-ITEM-003 | FX-ITEM-003 | Yes |
| Description | **T9 not read** (clipped) | FX test gasket | FX test gasket | Yes; baseline not independently established |
| Location | **T9 not read** (clipped) | FX-LOC-03 | FX-LOC-03 | Yes; baseline not independently established |
| QuantityOnHand | T9 read (`0.00`) | 0 | 0.00 | Yes (format only) |
| ReorderLevel | T9 read (`5.00`) | 5 | 5.00 | Yes (format only) |
| Warehouse | T9 read (`FX-WH-B`) | FX-WH-B | FX-WH-B | Yes |

Notes:
- "Format only": the source shows decimal quantities (`120.00`) and the dashboard shows integers (`120`) from the same numeric values (the dashboard serialises the numeric value without a fixed decimal format). No numeric difference.
- Item identity and quantity/reorder/warehouse values match the T9 baseline wherever T9 displayed them. T9 did not display descriptions or locations for rows 2 and 3, so those are now recorded as T24 source values but are not claimed as a baseline comparison.

## 6. Status classification and totals (brief step 22)

Derived from the T24 source quantities and reorder levels, using the committed HTML branch `qty <= 0 ? Out of Stock : (qty <= reorder ? Low Stock : In Stock)`:

| Item | Qty | Reorder | Derived status | T23 dashboard status | Match |
| --- | --- | --- | --- | --- | --- |
| FX-ITEM-001 | 120 | 20 | In Stock | In Stock | Yes |
| FX-ITEM-002 | 8 | 10 | Low Stock | Low Stock | Yes |
| FX-ITEM-003 | 0 | 5 | Out of Stock | Out of Stock | Yes |

Implied totals from the source values: items 3; units 120 + 8 + 0 = 128; Low Stock 1; Out of Stock 1. T23 dashboard: Total Items 3, Total Units 128, Low Stock 1, Out of Stock 1. All match.

## 7. Discrepancies (brief step 23)

- **Source versus T9:** none where T9 displayed a value.
- **Source versus T23:** none on any of the six properties for the three items (format-only differences in numeric display, noted in section 5).
- **Incomplete evidence (not discrepancies):** T9 baseline for Description and Location of FX-ITEM-002 and FX-ITEM-003 was never displayed; T24 records the source values but cannot establish that they were unchanged since T9. The IDO identity of the collection was not re-read in T24. Field-to-value mapping in the detail panel is inferred from its order (section 8).
- No discrepancy is attributed to the dashboard Refresh Data operation, because none was observed.

## 8. Limitations and mapping assumptions

- **Same-session UI readback only.** The values come from the runtime Form's loaded collection after one native Refresh. This is not a database-level, SQL or IDO-metadata query, and it is not a cross-session or cross-client readback.
- **Field mapping.** Detail-panel captions are not visible in the viewport. The mapping (Description, Location, QuantityOnHand, ReorderLevel, Warehouse, Item) follows the panel order and the accessibility grid-cell order. The values are distinct and consistent with the T23 dashboard's mapping, which derives from the committed C# index order (`PropertyValues[0..5]`). This is an inference, not a labelled readback.
- **Collection identity** (`FX_InventoryItems`) carried from EXP-135 T4 and T7. Not re-read in T24.
- **Exhaustiveness** supported by the `(Object x of 3)` count, the three accessible data rows and the disabled Get More Rows control, within this Form's query. Not an independent count.
- **Mutation absence** is supported by the in-session action ledger (section 9), not by proof that no external actor changed the database. No durability claim.
- Source file hashes were not recomputed in T24 (no shell tool); the carried operator-verified values stand.
- The console counter in the header (`21 errors, 10 warnings`) was not re-read in T24; unchanged since T23.

## 9. Action ledger (T24)

Application mutations: **0** (no Save of any kind; no record insert, update or delete; no edit of any cell or Form property; no creation; no variable, asset, component, script, Caption or event change; no Designer action; no regeneration; no Form close or reopen of any target Form).

Side-effecting actions:
- Runtime Form open of `FX_InventoryEditor`: **1** (Select Form OK once, after one exact-name row selection).
- Native collection Refresh (`FX_InventoryEditor` toolbar Refresh): **1** (read-only reload of the Form's collection; permitted by brief step 12 and T9 precedent).
- Record selections by row-number click: **2** (records 2 and 3; read-only).
- Select Form dialog: opened **1**; filter clicks **1**; Control+A **1** (in the filter box only); typed text **1** (`FX_InventoryEditor`, slow; no Enter); row click **1**; OK **1**; Cancel **0**.
- Dashboard `Refresh Data` activations: **0** (the T23 single activation is the only one).
- Portal navigations: **0**. Reloads: **0**. F5: **0**. Enter presses: **0**.
- Browser JavaScript, evaluate or run-code calls: **0**. Direct DB, IDO API or endpoint access: **0**.
- Session actions: sign-in **0**; session recovery **0**; credential actions **0**.
- Dialogs: none appeared; none accepted or dismissed.
- Toolbar controls deliberately NOT clicked: New, Delete, Export To Excel, Filter in Place, Designer.

Read-only browser actions:
- Tab lists: 1. Tab selections: 1 (tab 0). Snapshots: 2 inline (initial dashboard check; post-OK check) plus 10 tool-written files under `evidence/playwright/` (`page-2026-10-26T02-18-46-651Z.yml` through `page-2026-10-26T02-20-17-065Z.yml`). Screenshots worker-saved: 5 (listed in section 10). Waits: 2 (3 s each: after the Select Form OK and after the collection Refresh). Finds: 0. Console reads: 0 (header counter only).
- Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**. Corrected inspections: **0**. Timeouts: **0**.

Tab 1 (Designer) was not selected or read in T24.

## 10. Evidence files (T24, under `evidence/EXP-136/`)

Worker-written:
- `t24-post-test-inventory-source-comparison.md` (this file).
- `t24-webclient-dashboard-state-before-source-access.png`: dashboard `Loaded 3 records`, metrics 3/128/1/1, three rows; account and configuration in header. Proves the dashboard state before source access. Does not prove source values.
- `t24-fxinventoryeditor-pre-refresh-identity.png`: `FX_InventoryEditor` tab selected, account and configuration in header, `(Object 1 of 1)`, blank add-mode placeholder, Save greyed. Proves Form identity and the pre-Refresh state. Does not prove any record.
- `t24-fxinventoryeditor-post-refresh-readback.png`: `(Object 1 of 3)`; record 1 detail `FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`; Save greyed. Proves record 1 in the visible detail panel and the count. Does not show records 2 and 3 in the viewport.
- `t24-fxinventoryeditor-record2-detail-readonly.png`: `(Object 2 of 3)`; detail `FX test bracket`, `FX-LOC-02`, `8.00`, `10.00`, `FX-WH-A`, `FX-ITEM-002`. Proves record 2 detail.
- `t24-fxinventoryeditor-record3-detail-readonly.png`: `(Object 3 of 3)`; detail `FX test gasket`, `FX-LOC-03`, `0.00`, `5.00`, `FX-WH-B`, `FX-ITEM-003`. Proves record 3 detail.

Tool-written, not worker-authored: `evidence/playwright/page-2026-10-26T02-18-46-651Z.yml`, `page-2026-10-26T02-18-53-555Z.yml`, `page-2026-10-26T02-18-59-532Z.yml` (Select Form row), `page-2026-10-26T02-19-10-672Z.yml`, `page-2026-10-26T02-19-18-061Z.yml`, `page-2026-10-26T02-19-23-964Z.yml` (runtime Form), `page-2026-10-26T02-19-39-222Z.yml`, `page-2026-10-26T02-19-45-167Z.yml` (post-Refresh grid cells, source of section 4 channel 2), `page-2026-10-26T02-20-04-791Z.yml`, `page-2026-10-26T02-20-17-065Z.yml` (latest; no dialog; Get More Rows disabled); console tab-list event `console-2026-10-26T02-18-31-396Z.log`.

## 11. Acceptance matrix after T24

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Carried passed (operator-accepted). Re-observed in T24: Web Client and Form identity headers. | sections 2, 3 |
| AC-2 | Carried passed at operator-verified hash level (not recomputed in T24). | T9 record |
| AC-3 | Carried passed (qualified; T19). | T19 record |
| AC-4 | Carried operator-accepted (qualified; token-level). | T19 record |
| AC-5 | Carried passed (qualified; T19). | T19 record |
| AC-6 | Carried passed (qualified; T19 readback; T23 runtime geometry). | T23 record |
| AC-7 | **PENDING (qualified).** Functional runtime evidence (T23) only; no compile-result evidence; Script Editor not opened in T24. | T23 section 7 |
| AC-8 | PASSED (T16). | T16 record |
| AC-9 | PASSED (qualified, T19). | T19 record |
| AC-10 | PASSED (qualified, T21). | T21 record |
| AC-11 | PASSED (observed, single activation, coordinate-click qualified; T23). Carried unchanged in T24. | T23 record |
| AC-12 | **PASSED (qualified).** Post-test same-session readback of the three FX_InventoryItems records through the runtime FX_InventoryEditor (one native open, one native collection Refresh): IDs, quantities, reorder levels and warehouses match T9 where displayed; all six properties match T23. Qualified: UI readback not database-level; collection identity carried from EXP-135; field mapping inferred from panel order. | sections 4-7 |
| AC-13 | Partial: this record, the experiment record T24 section, and the section 9 ledger. Final reconciliation, Git-confinement audit and operator acceptance pending. | section 9 |

## 12. Next permitted action

- AC-7: operator decision on a read-only Script Editor Compile Result reopen, or acceptance of the functional evidence. Not authorized by T24.
- AC-13: final reconciliation, Git-confinement audit and operator acceptance.
- No further source, dashboard, Designer or runtime action is authorized by T24. The `FX_InventoryEditor` runtime tab is open and clean; the dashboard tab is open unchanged; the Designer was not touched.
