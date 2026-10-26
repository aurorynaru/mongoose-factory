# EXP-136 T23 - Single coordinate-based Refresh Data activation; runtime results observed

Run R-20261026-062909-9GoC, cycle 33, task T23. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User; account `anton.ramos@3mworks.com.ph`; configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- **Refresh Data was activated exactly once** by one native browser coordinate click at (397, 249) on the visually verified button (section 3). Playwright reported no error for the click.
- **Observed post-click status: `Loaded 3 records`.** Metrics Total Items 3, Total Units 128, Low Stock 1, Out of Stock 1. Three rows FX-ITEM-001, FX-ITEM-002, FX-ITEM-003 with the expected quantities, reorder levels, warehouses and stock labels (section 5).
- **AC-11: PASSED (observed, single activation; qualified by the coordinate-click route).** The T22 worker's "process deviation" (an unnecessary repeated snapshot) is carried forward in section 9. T23 used a new screenshot-based interaction authorization; it did not treat T22 as either a successful or a failed activation (T22 had performed zero clicks).
- **AC-12: PENDING.** No FX_InventoryItems readback was performed (out of T23 scope; separate authorization required).
- **AC-7: PENDING (qualified; functional evidence added).** The rendered result shows the installed method executed and wrote the variable that `getVarValue` returned. This is runtime behaviour, not compiler diagnostic evidence. The Errors-grid disposition from T19 is unchanged (headers only, no rows; not affirmative compile proof). See section 7.
- **AC-13: partial.** Final reconciliation and operator acceptance pending.
- No Designer Save, no runtime Save, no creation, no variable, asset, component, script, Caption or event change, no Form open or close, no regeneration, no reload, no navigation, no F5, no Enter, no browser JavaScript, no inventory read or write, no credential or session action.

## 2. Preparation (brief steps 1-3)

- Read: `AGENTS.md`; the EXP-136 experiment record (first 141 of 386 lines: current status and T22 to T15 checkpoints; older checkpoints not re-read); `evidence/EXP-136/t22-single-refresh-runtime-results.md`; `evidence/EXP-136/t21-portal-navigation-runtime-dashboard-pre-refresh.md`; `assets/FX_Inventory/index.html` and `assets/FX_Inventory/FX_InventoryDashboard.cs.txt`.
- Committed HTML (read-only, this task): line 18 button `Refresh Data` (`FX_InvRefresh`); line 19 status `Not loaded`; lines 21-24 four cards with `-` placeholders; line 42 `qty <= 0 ? "Out of Stock" : (qty <= reorder ? "Low Stock" : "In Stock")`; line 57 success status `"Loaded " + rows.length + " records"`; line 61 `WSForm.invoke("FX_LoadInventoryFromIDO", ...)`; line 62 `WSForm.getVarValue("FX_vInventoryJson", ...)`.
- Committed C# (read-only, this task): namespace `Mongoose.FormScripts`; method `FX_LoadInventoryFromIDO` (line 12); `IDOClient.LoadCollection("FX_InventoryItems", ..., "", "", 100)` (line 15); `ThisForm.Variables("FX_vInventoryJson").Value = JsonConvert.SerializeObject(inventory)` (line 29).
- Source hashes: **not recomputed** (no shell tool). The operator-verified values carried in the experiment record are unchanged by T23.
- Carried dispositions before the operation: AC-1 to AC-6, AC-8 to AC-10 as stated in the experiment record; AC-7, AC-11, AC-12, AC-13 pending.
- Prior screenshots viewed for comparison: `evidence/EXP-136/t22-pre-refresh-webclient-state.png` and `evidence/EXP-136/t21-runtime-fx-inventorydashboard-pre-refresh.png`. Both show the same pre-Refresh state as section 3 (heading `FX Inventory Dashboard`, `Refresh Data` button, `Not loaded`, four `-` cards, empty seven-column table). They do not prove any data.

## 3. Pre-click visual gate (brief steps 4-9)

- **Tab list** (read-only, first): tab 0 `Mongoose` (Web Client, URL `...c51080bc-...?favoriteContext=FX_InventoryDashboard&LogicalId=...`); tab 1 `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` (Designer, `WSWebClient/designer/Default.aspx`).
- **Tab selection**: tab 0 selected (it was already the current tab; the select succeeded). The select and one untargeted snapshot were issued in the same tool block (see section 9, process note). Neither mutated state.
- **Fresh untargeted snapshot** (returned inline by the tool; not saved to a file): header button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab heading `FX_InventoryDashboard` (selected); toolbar `Save [disabled]`; no dialog; console header `21 errors, 10 warnings`. The Web User Control iframe (`iframe [ref=f1e89]`) again exposed **no children**, the same condition recorded in T22. No `Refresh Data` accessibility reference was available; no find or iframe-scoped snapshot was repeated in T23.
- **Pre-click viewport screenshot** `evidence/EXP-136/t23-pre-click-viewport-fresh.png` (viewed). Shows: header with account and configuration; tab heading `FX_InventoryDashboard`; heading `FX Inventory Dashboard`; `Refresh Data` button (enabled, grey-bordered); `Not loaded`; four cards each `-`; empty seven-column table (`Item`, `Description`, `Warehouse`, `Location`, `Quantity`, `Reorder Level`, `Status`); toolbar Save greyed; no dialog, overlay, tooltip or portal banner.
- **Viewport dimensions.** The frame layout is consistent with the 1920 by 945 CSS-pixel viewport recorded in T22 (footer `en-US / powered by infor` near y 925 of the frame). **Not measured programmatically** (no shell or script; the tools do not return dimensions). Page zoom appears to be 100% from the rendered font sizes; not measured.
- **Button localisation.** From the fresh screenshot the `Refresh Data` button spans approximately x 350 to 444 and y 240 to 258. Its centre is approximately **(397, 249)**. This coincides with the T22 historical estimate, but the position was read from this fresh image, not reused from T22. No overlay, tooltip, scrolling or other control was at that point.
- **Gate result: PASSED.** Status, placeholders, empty table, enabled button, clean state and absence of dialogs were all confirmed visually before the click.

## 4. The single activation and passive observation (brief steps 10-19)

- **Activation (one action).** `browser_mouse_click_xy` at x=397, y=249, `clickCount` 1, button left. Result: no error; the tool returned the page snapshot `evidence/playwright/page-2026-10-26T02-13-03-818Z.yml` (tool-written). **No second click** was made, and no keyboard, Enter, JavaScript, reload or alternate method was used.
- **Bounded wait**: 3 seconds (`browser_wait_for`).
- **Post-click viewport screenshot** `evidence/EXP-136/t23-post-click-after-3s-viewport.png` (viewed).
- **Post-click snapshot** `evidence/playwright/page-2026-10-26T02-13-09-359Z.yml` (tool-written). Header account and configuration unchanged; tab heading `FX_InventoryDashboard`; Save `[disabled]`; no dialog; the Web User Control iframe is still exposed with **no children**. The accessibility tree therefore does not carry the frame values; the screenshot is the only evidence of them.
- **Status transition (observed):** `Not loaded` (pre-click) to **`Loaded 3 records`** (post-click). No `Loading...`, `Could not read inventory data` or other error text was visible in the captured frame.

## 5. Observed metrics and table (brief steps 14-18)

Metric cards (as displayed, read from the post-click screenshot):

| Card | Expected | Observed |
| --- | --- | --- |
| Total Items | 3 | **3** |
| Total Units | 128 | **128** |
| Low Stock | 1 | **1** |
| Out of Stock | 1 | **1** |

Table: seven column headers as displayed `Item`, `Description`, `Warehouse`, `Location`, `Quantity`, `Reorder Level`, `Status`. Row count: **3**. Each row read directly from the screenshot:

| Row | Item | Description (as displayed) | Warehouse | Location | Quantity | Reorder Level | Status | Expected (AC-11) | Match |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX-ITEM-001 | FX test widget | FX-WH-A | FX-LOC-01 | 120 | 20 | In Stock | 120 / 20 / In Stock / FX-WH-A | Yes |
| 2 | FX-ITEM-002 | FX test bracket | FX-WH-A | FX-LOC-02 | 8 | 10 | Low Stock | 8 / 10 / Low Stock / FX-WH-A | Yes |
| 3 | FX-ITEM-003 | FX test gasket | FX-WH-B | FX-LOC-03 | 0 | 5 | Out of Stock | 0 / 5 / Out of Stock / FX-WH-B | Yes |

- Zero-quantity item FX-ITEM-003 is labelled `Out of Stock` (not `Low Stock`), and it is counted in Out of Stock (1); Low Stock 1 counts FX-ITEM-002 only. This matches the committed branch logic (`qty <= 0` tested first).
- Descriptions and Locations for rows 2 and 3 were clipped in T9 and could not be compared then. They are recorded here as displayed. **They are not yet compared with the FX_InventoryItems source**; that is AC-12.
- Geometry (observed): all seven columns and all three rows are visible inside the component area at this viewport, with no clipping, horizontal scrolling, vertical scrolling or obscured values. The table spans roughly x 350 to 1071 px. This resolves the T21 "table fit for populated rows" gap for this viewport only; the Designer size (100 by 30 characters) was not converted to pixels.

## 6. Errors and console (brief steps 20-21)

- **Errors visible in the dashboard area:** none. No compile, IDO, JSON, missing-variable, bridge or permission message is visible in the captured frame.
- **Console** (one read-only call, warning level, all messages at or above warning): saved `evidence/EXP-136/t23-post-click-console-warnings-readonly.log`. Totals `59 messages (Errors: 21, Warnings: 10)`, identical to the T21 baseline. The 21 error entries are the unload Permissions-Policy violations seen since T20 (`default-app.js`, `wswebform-app.js`, `yggdrasil-core.js:1409`). Grep for `FX_`, `inventory`, `WSForm`, `invoke`, `getVarValue` returned no dashboard-specific entry. The 10 warnings are the same classes as T21 (not re-itemised here).
- The unchanged counts mean the click produced no new console entry in this read. This is not proof that no diagnostic was emitted elsewhere; the causes of the unload entries remain unverified.

## 7. AC-7 disposition after T23

- Observed: the rendered `Loaded 3 records` and the three rows with values that match the source-derived expectations show that the bridge `WSForm.invoke("FX_LoadInventoryFromIDO")` ran, that `getVarValue("FX_vInventoryJson")` returned data, and that the committed rendering branch executed. This is **functional runtime evidence** that the installed method worked.
- Not established: a compiler diagnostic statement. T19 recorded the Script Editor Compile Result Output as blank and the Errors grid with headers only (not affirmative proof). T23 did not reopen the Script Editor.
- Disposition: **AC-7 remains PENDING (qualified)** pending operator decision. The functional evidence supports, but does not replace, a compile-result record.

## 8. Mutation, browser and recovery ledger (T23)

Application mutations: **0** (no Save of any kind; no creation; no variable, asset, component, script, Caption or event change; no Form open or close; no regeneration; no inventory read or write).

Side-effecting browser actions: **1** Refresh Data activation (native coordinate click at (397, 249), count 1). **0** second clicks. **0** F5; **0** Enter; **0** navigations; **0** reloads; **0** browser JavaScript; **0** keyboard activation; **0** dialogs accepted or dismissed; **0** Portal banner actions; **0** session recoveries; **0** sign-in; **0** credential actions.

Read-only browser actions:
- Tab list: 1 (before any selection).
- Tab selection: 1 (tab 0; succeeded; already current).
- Web Client snapshots: 3 (1 pre-click, returned inline; 1 tool-written from the click action; 1 tool-written from the wait action). No iframe-scoped snapshot, no `find`.
- Screenshots: 2 worker-saved (`t23-pre-click-viewport-fresh.png`, `t23-post-click-after-3s-viewport.png`); plus 2 prior-task images viewed for comparison (`t22-pre-refresh-webclient-state.png`, `t21-runtime-fx-inventorydashboard-pre-refresh.png`), not re-saved.
- Console reads: 1 (warning level, saved to file).
- Waits: 1 (3 s).
- Designer: listed in the tab list only; not selected, not snapshotted, not modified (`FX_InventoryDashboard` loaded, clean, Save disabled, as last recorded in T22).

Recovery: ref-not-found errors **0**; fresh-snapshot recovery allowance used **0**; corrected inspections **0**; timeouts **0**.

## 9. Process notes and carry-forward

- **T22 process deviation (carried forward):** T22 repeated an identical untargeted snapshot after a frame-scoped snapshot had already returned an empty iframe node; the stop rule forbids repeated identical reads. T23 did not repeat the frame-scoped inspection and did not treat T22 as a successful or failed activation (T22 performed zero clicks). T23 used a new screenshot-based interaction authorization for the single coordinate click.
- **T23 process note:** in the pre-click gate, the tab selection (tab 0) and one untargeted snapshot were issued in the same tool block. Both were read-only or non-mutating, and the snapshot correctly reported tab 0 selected. Recorded for transparency under the "never issue browser actions in parallel" rule; no mutation resulted.
- The Web User Control iframe exposed no children in the fresh snapshot (T23 pre-click and post-click), as it did in T22. T21 had exposed `button "Refresh Data"`. The cause of the difference is still not established; the rendered screenshots are the only evidence of frame content in T22 and T23.

## 10. Acceptance matrix after T23

| AC | Status | Basis (this record and prior records) |
| --- | --- | --- |
| AC-1 | Carried passed (operator-accepted). Re-observed: Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in both T23 screenshots. Designer scope footer not re-read in T23. | section 3; T21 section 3 |
| AC-2 | Carried passed at operator-verified hash level (not recomputed in T23). Committed HTML line 42 `In Stock` and bridge calls re-read; C# contains `FX_LoadInventoryFromIDO`. | section 2 |
| AC-3 | Carried passed (qualified; T19 Global/Persistent readback). | T19 record |
| AC-4 | Carried operator-accepted (qualified; token-level, no byte equality). | T19 record |
| AC-5 | Carried passed (qualified; name, caption, script language, version re-read in T19). | T19 record |
| AC-6 | Carried passed (qualified). T23 runtime geometry: seven columns and three rows fit without clipping in the component area at this viewport. Designer size not converted to pixels. | section 5 |
| AC-7 | **PENDING (qualified).** Functional runtime evidence: method executed and produced the expected variable and rendering. No affirmative compile-result evidence (T19 Errors grid headers only). | section 7 |
| AC-8 | PASSED (T16). | T16 record |
| AC-9 | PASSED (qualified, T19). | T19 record |
| AC-10 | PASSED (qualified, T21). Re-observed pre-click in T23 (account, Form tab, dashboard, enabled Refresh Data button). | section 3 |
| AC-11 | **PASSED (observed, single activation).** Exactly one coordinate click on the visually verified button; post-click `Loaded 3 records`; Total Items 3, Total Units 128, Low Stock 1, Out of Stock 1; three rows with expected identities, quantities, reorder levels, warehouses and In Stock / Low Stock / Out of Stock labels, read directly. Qualified by the coordinate-click route (no accessibility reference) and one-run observation. | sections 3-5 |
| AC-12 | **PENDING.** Not performed in T23 (requires separate authorization; no FX_InventoryItems query). | - |
| AC-13 | Partial: this record, the experiment record T23 section and the ledger in section 8. Final reconciliation, Git-confinement audit and operator acceptance pending. | section 8 |

## 11. Limitations

- Single run, single viewport. No repeatability, no second activation, no persistence claim across reload.
- The rendered values were read from a screenshot, not from the DOM, because the frame exposes no children. Text read is visual; the rendered values are unambiguous at this resolution.
- Descriptions and Locations of rows 2 and 3 are not yet compared with the source (AC-12).
- Viewport dimensions and zoom are not measured programmatically; source hashes are not recomputed.
- No database durability is claimed. No equivalence to MockInventoryDashboard is claimed; the observation is a single successful runtime rendering of this FX_ dashboard.
- The Designer tab was not inspected in T23; its last recorded state is T22's (clean).

## 12. Evidence files (T23, under `evidence/EXP-136/`)

Worker-written:
- `t23-single-coordinate-refresh-runtime-results.md` (this file).
- `t23-pre-click-viewport-fresh.png` — pre-click gate: dashboard `Not loaded`, four `-` cards, empty table, enabled `Refresh Data`, account and configuration in header; proves the pre-click state only.
- `t23-post-click-after-3s-viewport.png` — post-click: `Loaded 3 records`; metrics 3/128/1/1; three rows and status labels; account and configuration; proves the rendered values for this run; does not prove the source records (AC-12) or compile diagnostics (AC-7).
- `t23-post-click-console-warnings-readonly.log` — warning-level console read; 59 messages (21 errors, 10 warnings), unchanged from T21; no dashboard-specific entry.

Tool-written under `evidence/playwright/` (not worker-authored): `page-2026-10-26T02-13-03-818Z.yml` (click action), `page-2026-10-26T02-13-09-359Z.yml` (post-wait snapshot), `console-2026-10-26T02-12-46-352Z.log` (tab-list event).

## 13. Next permitted action

- AC-12: separate operator authorization for a read-only FX_InventoryItems comparison (the three source records' identifiers, quantities and reorder levels, plus the descriptions and locations to compare with the rendered rows).
- AC-7: operator decision on whether a read-only Script Editor Compile Result reopen is authorized, or whether the functional evidence is accepted as sufficient.
- No Refresh, Save, reload or Form action is authorized by T23. The runtime `FX_InventoryDashboard` is left open in its post-click state.
