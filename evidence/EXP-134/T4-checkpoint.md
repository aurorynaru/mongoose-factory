# EXP-134 T4 checkpoint (read-only Web Client prerequisite queries; no mutation)

Run R-20261026-031627-MXfT · cycle 4 · task T4 · worker session `233552a7-a538-44cb-84d3-935883c664a0` · task_message_id `3fef8ace-2200-40f9-962f-09a3585e6015`.

## Result

- **Web Client identity and configuration: observed.** Tab 3 (portal tab "Mongoose") is the authenticated Web Client. Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (visible in `t4-01` to `t4-09`). No Session Expired modal in the first snapshot.
- **IDOs absence gate (`FX_InventoryItems`): supported, qualified.** Criterion visible before F4 (`t4-02`); settled after one F4 with zero data rows and no placeholder (`t4-03`).
- **Sql Tables absence gate (`FX_InventoryItems`): supported, qualified.** Criterion visible in the Table Name criteria cell before F4 (`t4-05`); settled after one F4 with only the blue-star add-mode placeholder (blank Table Name and Schema, red required asterisks, status `Schema (SQL Tables 1 of 1)`), no persisted row marker (`t4-06`).
- **IDO Projects project gate (`FX_HelloWorldProject01`): supported.** Project Name criterion visible before F4 (`t4-08`); settled with one row, Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R` (`t4-09`).
- **Designer editing scope and Designer liveness: NOT checked in T4** (pending for a separately authorised task, per the bounded instruction). The stale Designer tabs 0 to 2 were not selected or touched.
- **Mutation: none.** No wizard, Finish, Save, New, Delete, Refresh, Filter-in-Place click, Create Form response, check-in, check-out, Property Class lookup, record action, metadata action, FormSync or script.

## Tab state at stop

| Index | Listing (read-only) | Worker status |
|---|---|---|
| 0 | Designer `designer/Default.aspx` (tenant parameters) | Not selected; untouched |
| 1 | Designer `designer/Default.aspx` (portal parameters) | Not selected; untouched |
| 2 | Designer `designer/default.aspx` (stale) | Not selected; untouched; error state not inspected in T4 |
| 3 | Portal "Mongoose" Web Client (current, selected) | Selected once; responsive; Forms open: IDOs (FiP, zero rows), Sql Tables (placeholder), IDO Projects (FiP, one row) |

Selected tab at stop: **tab 3 (Web Client)**. The Web Client remained responsive through the final action. No in-page modal or browser-native dialog is open at the last capture (`t4-09`).

## Steps performed (in order)

1. Read `AGENTS.md`, `evidence/EXP-134/T3-checkpoint.md`. Located the relevant procedures in `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` (Select Form, IDOs criterion before F4, Sql Tables Table Name criteria cell, caution alert) and `experiments/EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md` (Sql Tables placeholder and Tab-then-F4 pattern).
2. Tab list (read-only), then select tab 3, then fresh snapshot. Identity and configuration verified; Explorer visible; no Form open.
3. IDOs: toolbar Open → Select Form (initial filter `FX_LoginPortal`) → filter `IdoCollections` + Tab → row `IDOs / IdoCollections` → OK. Form opened in Filter in Place (FiP status, one blank criteria row, IDO Name textbox active, Check Out disabled). `t4-01`.
4. IDOs criterion: `FX_InventoryItems` entered once in IDO Name (fill). Verified by targeted find. `t4-02`. F4 once. Settled: grid body empty (no data row, no placeholder), detail greyed and blank, status `Filter in Place`, FiP icon absent from the Form title. `t4-03`.
5. Sql Tables: toolbar Open → Select Form → filter `SqlTables` + Tab → row `Sql Tables / SqlTables` → OK. Caution alertdialog ("Please be very careful using these forms…") accepted once with OK, as in prior runs. Fresh snapshot. `t4-04`.
6. Table Name criteria grid cell (blank criteria row) clicked once; it became an active combobox editor. The Attributes `Table Name:` combobox in the detail pane was not used. Criterion `FX_InventoryItems` entered once (fill). `t4-05`. Tab once; F4 once. Settled: blue-star placeholder row only (blank Table Name and Schema, red asterisks, status `Schema (SQL Tables 1 of 1)`); Save toolbar greyed in `t4-06`; toolbar New enabled in the later snapshot (not clicked).
7. IDO Projects: toolbar Open → Select Form → filter `IdoProjects` + Tab → row `IDO Projects / IdoProjects` → OK. Form opened in FiP with a blank Project Name criterion (`t4-07`).
8. Project Name criterion: `FX_HelloWorldProject01` entered once. `t4-08`. F4 once. Settled: one row, detail as recorded above. `t4-09`. The Description textbox received focus with its text selected after the query; no key was pressed afterward.
9. Stopped. No Form closed, no Save, no state change.

## Recovery (browser)

- One stale-ref error: `browser_snapshot target f1e22` (toolbar) after the Sql Tables Form changed returned `Ref f1e22 not found`. Used the one fresh untargeted snapshot, then the new toolbar ref `f1e23` (Open) succeeded. No second recovery attempt was needed.
- No timeouts. No parallel browser actions.

## Action audit (T4)

| Operation | Count |
|---|---|
| Finish / wizard launch / wizard page actions | 0 / 0 / 0 |
| Create Form response | 0 |
| Save / New / Delete / Refresh / Filter in Place toolbar clicks | 0 / 0 / 0 / 0 / 0 |
| Select Form opens | 3 (IDOs, Sql Tables, IDO Projects) |
| Select Form filter fills / Tab commits | 3 / 3 |
| Select Form row clicks / OK clicks | 3 / 3 |
| Caution alert OK clicks (Sql Tables) | 1 |
| Criterion cell click (Sql Tables Table Name) | 1 |
| Criterion entries (IDO Name, Table Name, Project Name) | 3 |
| Tab (criterion commit, Sql Tables criterion) | 1 (plus selection commits above) |
| F4 presses | 3 (one per gate) |
| Check-in / check-out | 0 / 0 |
| Property Class lookup opened | 0 |
| Metadata unload / FormSync / deployment / generated script | 0 |
| Records created, edited or deleted | 0 |
| Designer clicks | 0 |
| Session Expired OK / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Browser JavaScript / evaluate / run-code / direct SQL / internal APIs (worker-authored) | 0 |
| Tab list / tab select | 1 / 1 (tab 3) |
| Fresh untargeted snapshots | 4 (tab 3 start; after IDOs OK; after Sql Tables caution; recovery after stale ref f1e22) |
| Ref-not-found errors / timeouts | 1 / 0 |
| Screenshots (worker-requested) | 9 (`t4-01` to `t4-09`) |

Note on tool-recorded actions: the browser tool reports underlying Playwright snippets (for example `#mgtoolbarbutton-1100`, `#ext-1147`, `#textfield-1205-inputEl`, `#mgcombo-1468-inputEl`). These are Playwright locator wrappers produced by the tool for the same visible UI actions listed above; the worker authored no script.

## Interpretation

- Both absence gates ran in one session with a live Web Client. The IDOs and Sql Tables results are consistent with the EXP-071-R2 and EXP-049 absence observations for other exact names, but this is a fresh same-session observation for `FX_InventoryItems`.
- Qualifications (not resolved in T4): no positive-control query was run (not authorised); the IDOs query executed (criterion → F4 → FiP-icon removed and grid cleared) but no independent proof of query success beyond that change; the Sql Tables result is a placeholder only, per the prior-run interpretation, not a direct proof of database absence.
- The project gate supports the existence of `FX_HelloWorldProject01` as the one exact-name row. The Access As value is `G6R`, as previously recorded in T1.
- The Designer scope gate is still not established in this session. The wizard remains **not authorised** until a live Designer with User scope is confirmed in a separate authorised task.

## Open items

- Designer liveness and User-scope confirmation: pending (separate task). Stale tabs 0 to 2 untouched.
- Tab 2 stale Designer error alertdialog from T3 remains open (not dismissed; out of scope).
- The Sql Tables Form holds the add-mode placeholder row (unsaved, not filled; Save greyed in `t4-06`). The coordinator may decide whether to leave, close or otherwise handle it before the wizard task.
- The IDOs and IDO Projects Forms remain open in FiP with their criteria; no close/reopen was performed in T4 (not in T4 scope).
- Cause of the T1 expiry and stale Designer remains unresolved.

## Evidence files (T4)

- `evidence/EXP-134/T4-checkpoint.md` (this file)
- `evidence/EXP-134/t4-01-idos-fresh-open-before-criterion.png`: Web Client header with DEFAULT configuration; IDOs open in FiP, blank criteria row, IDO Name active.
- `evidence/EXP-134/t4-02-idos-FX_InventoryItems-criterion-before-F4.png`: IDO Name `FX_InventoryItems` before F4; FiP status.
- `evidence/EXP-134/t4-03-idos-FX_InventoryItems-settled-after-F4.png`: zero rows after F4; greyed detail; FiP status bar.
- `evidence/EXP-134/t4-04-sqltables-fresh-open-before-criterion.png`: Sql Tables open in FiP with blank criteria row (snapshot-verified; screenshot taken).
- `evidence/EXP-134/t4-05-sqltables-FX_InventoryItems-criterion-before-F4.png`: Table Name criteria cell `FX_InventoryItems`; FiP status; Attributes combobox blank.
- `evidence/EXP-134/t4-06-sqltables-FX_InventoryItems-settled-after-F4.png`: blue-star placeholder only; blank Table Name and Schema; `Schema (SQL Tables 1 of 1)`.
- `evidence/EXP-134/t4-07-idoprojects-fresh-open-before-criterion.png`: IDO Projects open in FiP with blank Project Name criterion.
- `evidence/EXP-134/t4-08-idoprojects-FX_HelloWorldProject01-criterion-before-F4.png`: Project Name `FX_HelloWorldProject01` before F4.
- `evidence/EXP-134/t4-09-idoprojects-FX_HelloWorldProject01-settled-after-F4.png`: one row; Project Name, Description and Access As `G6R`; `Description (IDO Projects 1 of 1)`.
- Tool-written console and snapshot files under `evidence/playwright/` (not worker-authored).
