# EXP-134 T6 checkpoint (Data Maintenance Wizard opened; page-1 identifiers entered; not finished)

Run R-20261026-031627-MXfT · cycle 7 · task T6 · worker session `8d0cc63b-50dc-4194-81f9-49d70436fac1` · task_message_id `4bdaad1f-dc27-489b-a7d3-eca375ce4f66`.

## Result

- The Data Maintenance Wizard was opened **once** from the Designer on tab 0 (toolbar New → Form Wizard Selection → New Form / Category `NewData` / Wizard `Maintenance` → OK once).
- Page 1 identifiers were entered, and they are non-persisting until Finish: IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01` (replacing the wizard default `amoveMock`); Table Alias `fxinv`.
- **Not done (by design):** the six business-property rows (T7); Next; Back; Finish; Cancel; Create Form; Create Scripts; Save; check-in; any Property Class lookup.
- Stable state: wizard open on page 1 (no property rows entered), tab 0 selected.

## Preflight (before any wizard action)

| Gate | Observed | Evidence |
|---|---|---|
| Tab list (read-only) before first select | Tab 0 = Designer (`MGForm=IdoProjects`, vendor Form); tab 1 = Designer (FX_LoginPortal / FX_BridgeTest per T5); tab 2 = stale Designer (untouched); tab 3 = Web Client | tab listing |
| Designer (tab 0) scope and state | Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; IdoProjects vendor Form loaded (Version "Vendor Default version"); Save disabled; Edit menu closed; no error dialog | `t6-01-tab0-designer-preflight-user-scope-before-wizard.png`; ordinary snapshot |
| Web Client account and configuration (tab 3) | Header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDO Projects grid shows one row `FX_HelloWorldProject01`, Access As `G6R`; no sign-in or session modal (`find` "Session Expired": no match) | `t6-02-tab3-webclient-identity-config-before-wizard.png` (read back) |
| Existing project `FX_HelloWorldProject01` | Visible in the Web Client IDO Projects grid (tab 3) and in the wizard project lookup list (one option) | `t6-02`; `t6-06` |

Tab 3 was selected once for the identity read; tab 0 was then reselected and its fresh refs were used for the wizard.

## Wizard entry route (observed)

| Step | Observed | Evidence |
|---|---|---|
| Designer toolbar `New` (ref `e19`), one click | Form Wizard Selection dialog opened: `New Form` selected; Category blank; Wizard blank; `Extend Form` unselected; footer User scope | `t6-03-form-wizard-selection-dialog-after-designer-new.png` |
| Category dropdown → option `New Data` ("Wizards to create forms with their required SQL tables, IDOs, and components") | Category shows `NewData` | `t6-04` (before OK) |
| Wizard dropdown → option `Maintenance` ("Creating a table, IDO, and (optionally) form") | Wizard shows `Maintenance` | `t6-04` |
| OK, one click | Data Maintenance Wizard page 1 opened over the IdoProjects Designer | `t6-05-data-maintenance-wizard-page1-opened.png` |

## Page-1 defaults observed before entry

- IDO Name: blank. IDO Project Name: `amoveMock` (wizard default; not an FX_ project). Table Alias: blank.
- Form Type `MultiView`, Form Layout `GridLeft`, Device Type `Default` (wizard defaults; not changed in T6).
- Site Split: unchecked. Table Name and View Name: disabled (grey).
- Property grid: one blank starter row (blue star). Columns visible: Name, Property Class, Data Type, SQL Data (truncated).
- Buttons: Back disabled; Next enabled; Finish disabled; Cancel and Help enabled.

## Entries (T6, all non-persisting)

| # | Field | Action | Result |
|---|---|---|---|
| 1 | IDO Name | Typed `FX_InventoryItems` once (ref `e664`) | Shows `FX_InventoryItems` |
| 2 | Table Alias | Typed `fxinv` once (ref `e679`) | Shows `fxinv` |
| 3 | IDO Project Name | Opened the combobox's own Open lookup once (`e672`); selected option `FX_HelloWorldProject01` once (`e837`). The lookup listed ApiTest2026, FX_HelloWorldProject01, HelloWorld and others | Shows `FX_HelloWorldProject01` (replaces `amoveMock`) |

Not used: the Property Class lookup (never opened), the property grid (no cell clicked), Add Row, Get Database Schema, Add Subcollection, Site Split, Form Type/Layout/Device Type (left at defaults).

Settled page-1 state (`t6-06-wizard-page1-identifiers-entered-not-finished.png`): IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxinv`; Site Split unchecked; Table Name disabled and blank; Form Type MultiView / Layout GridLeft / Device Type Default; property grid one blank row; Back disabled; Next enabled; Finish disabled.

## Not established before Finish (qualifications)

- **Physical SQL table name:** the Table Name field is disabled and blank while Site Split is unchecked. No page shows the physical name Finish will create. The expected name is `dbo.FX_InventoryItems`, derived from the IDO name as in EXP-049 T8 and EXP-040 T8. It must be verified after Finish (T9-equivalent), not assumed.
- **Create Scripts:** appears only on the last page (after Next), which was not reached. Its state is **unverified** in T6 and must be checked before Finish.
- **Property rows:** 0 of 6 configured. This is T7 scope.
- **Form Type MultiView / GridLeft / Device Type Default:** wizard defaults, left unchanged. The Create Form prompt is expected after Finish and must be answered No.
- **Wizard default `amoveMock`:** observed as the initial IDO Project Name. It was replaced before any creation. Its significance is not established.

## Counts (T6)

| Operation | Count |
|---|---|
| Wizard opened | 1 (Form Wizard Selection OK once) |
| Designer toolbar New | 1 |
| Form Wizard Selection dropdown selections | 2 (Category `NewData`; Wizard `Maintenance`) |
| Wizard page-1 typed entries | 2 (IDO Name; Table Alias) |
| IDO Project lookup opened / selected | 1 / 1 |
| Finish / Next / Back / Cancel | 0 / 0 / 0 / 0 |
| Create Form response | 0 |
| Create Scripts change | 0 |
| Save / New / Delete / Copy / check-in / check-out | 0 |
| Property Class lookup opened | 0 |
| Property-row cell edits / Add Row / Delete Row | 0 / 0 / 0 |
| Form open / Form close / criterion entry / F4 | 0 / 0 / 0 / 0 |
| Metadata unload / FormSync / generated script / SQL execution | 0 |
| Records created or edited | 0 |
| Session Expired OK / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Browser JavaScript / evaluate / run-code / internal APIs (worker-authored) | 0 |
| Ref-not-found errors / timeouts | 0 / 0 |
| Browser recovery allowance used | 0 |

## Evidence files (under `evidence/EXP-134/`)

| File | Shows | Does not prove |
|---|---|---|
| `t6-01-tab0-designer-preflight-user-scope-before-wizard.png` | Tab 0 Designer: IdoProjects vendor Form, footer User scope for `anton.ramos@3mworks.com.ph`, Save disabled | Designer liveness beyond the view; that the wizard will run |
| `t6-02-tab3-webclient-identity-config-before-wizard.png` | Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDO Projects grid row `FX_HelloWorldProject01` (Access As `G6R`) | Session durability; anything beyond the captured state |
| `t6-03-form-wizard-selection-dialog-after-designer-new.png` | Form Wizard Selection opened from Designer New: New Form selected; Category and Wizard blank; footer User scope | That the chosen wizard is the create-table-and-IDO workflow (established in t6-04/t6-05) |
| `t6-04-form-wizard-selection-newdata-maintenance-before-ok.png` | Category `NewData`, Wizard `Maintenance`, New Form selected, before OK | That OK creates anything (it only opens the wizard) |
| `t6-05-data-maintenance-wizard-page1-opened.png` | Data Maintenance Wizard page 1 defaults (IDO Name blank; project `amoveMock`; alias blank; MultiView/GridLeft/Default; one blank row) | Final values (captured before entries) |
| `t6-06-wizard-page1-identifiers-entered-not-finished.png` | Page 1 with `FX_InventoryItems`, `FX_HelloWorldProject01`, `fxinv`; Site Split unchecked; Table Name disabled; one blank property row; Finish disabled | Physical table name; Create Scripts state; any property definition |

Tool-written browser files under `evidence/playwright/` (snapshot YAML and console logs for this run) are tool output, not worker-authored.

## State at stop

- **Selected tab: 0** (Designer; the Data Maintenance Wizard is open over the IdoProjects Designer; wizard page 1; no property rows entered).
- Tab 3 (Web Client): unchanged. The IDOs, Sql Tables (unsaved T4 add-mode placeholder) and IDO Projects Forms from T4 remain open; not touched in T6.
- Tab 1 (FX_LoginPortal / FX_BridgeTest) and tab 2 (stale FX_LoginPortal Designer with T3 server-event error): not selected, not touched.
- No in-page or browser-native dialog open other than the wizard itself.

## Next permitted action (for T7)

Configure the six property rows (FX_Item, FX_Description, FX_Warehouse, FX_QuantityOnHand, FX_ReorderLevel, FX_Location) directly by Data Type and Length, with no Property Class, from the wizard's own grid. Verify Create Scripts before Finish. Finish is not authorised in T6 or by this checkpoint.
