# EXP-136 T22 - Pre-activation runtime checkpoint; Refresh Data NOT activated (control reference unavailable)

Run R-20261026-062909-9GoC, cycle 32, task T22. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User; account `anton.ramos@3mworks.com.ph`; configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- **Refresh Data was NOT activated.** Zero clicks on the dashboard's Refresh Data button. The one authorized activation was not performed because no native accessibility reference for that button could be obtained in the Web Client (section 4).
- **AC-11: PENDING** (no Refresh, so no totals, rows or status labels were observed).
- **AC-12: PENDING** (not performed in T22; separately authorized step).
- **AC-13: partial** (this record and the experiment record update; final reconciliation pending).
- No application mutation: no Save (Designer or runtime), no creation, no variable, asset, component, script, Caption or event change, no Form open or close, no Form regeneration, no inventory read or write.

## 2. Preparation (brief steps 1-4)

- Read in full: `experiments/EXP-136-...md` (status and T21/T20 checkpoints); `evidence/EXP-136/t21-portal-navigation-runtime-dashboard-pre-refresh.md`; `evidence/EXP-136/t9-inventory-source-preflight.md`; `evidence/EXP-136/t10-committed-source-compatibility-audit.md`; `assets/FX_Inventory/index.html` (71 lines); `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (32 lines).
- Committed HTML (read-only): line 42 now reads `qty <= 0 ? "Out of Stock" : (qty <= reorder ? "Low Stock" : "In Stock")`. This matches the operator-approved amendment (D-B) recorded in the experiment record (T11). The bridge calls are unchanged: `WSForm.invoke("FX_LoadInventoryFromIDO", ...)` (line 61) and `WSForm.getVarValue("FX_vInventoryJson", ...)` (line 62). The `FX_InvRefresh` button label is `Refresh Data` (line 18).
- Committed C# (read-only): method `FX_LoadInventoryFromIDO` (line 12); `IDOClient.LoadCollection("FX_InventoryItems", ..., "", "", 100)` (line 15); `ThisForm.Variables("FX_vInventoryJson").Value = JsonConvert.SerializeObject(inventory)` (line 29). Operator decision D-A retained `ThisForm.Variables`; the Global-versus-Form storage question (EXP-130 U-1) remains unresolved.
- Source hashes: not recomputed in T22 (no shell tool in this task). The operator-verified values carried in the record are not re-established here; the AC-2 disposition is carried unchanged.

## 3. Browser preflight (brief steps 5-8)

- Tab list (read-only, before any selection): tab 0 `Mongoose` (Portal-hosted Web Client, URL `...c51080bc-...?favoriteContext=FX_InventoryDashboard&LogicalId=...`); tab 1 `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` (Designer, `WSWebClient/designer/Default.aspx`).
- **Web Client (tab 0, selected after the list).** Fresh snapshot (`browser_snapshot`, untargeted): header button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; the selected Form tab heading `FX_InventoryDashboard` (level 2); toolbar Save `[disabled]`; no dialog; no session-expired, sign-in or unsaved-change prompt. Console counter in the snapshot header: `21 errors, 10 warnings` (identical to the T21 checkpoint; not re-read).
- **Pre-activation screenshot** `evidence/EXP-136/t22-pre-refresh-webclient-state.png` (viewed). Shows: header with account and configuration; tab heading `FX_InventoryDashboard`; heading `FX Inventory Dashboard`; `Refresh Data` button (enabled, not greyed); status `Not loaded`; four cards `Total Items`, `Total Units`, `Low Stock`, `Out of Stock`, each showing `-`; table with seven headers `Item`, `Description`, `Warehouse`, `Location`, `Quantity`, `Reorder Level`, `Status` and an empty body. Does NOT prove the Form definition, the asset source, or any data. Matches the expected pre-Refresh state, so the preflight gate for activation passed.
- **Designer (tab 1, selected once for a read-only check).** Fresh snapshot: tabs `FX_InventoryEditor` (not selected) and `FX_InventoryDashboard` (selected); Save, Regenerate Form and Undo all `[disabled]`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog. The Properties pane shows the component `FX_InventoryControl` (`UserControl`, Specific Attributes `User Control Name` `V(UserCtrl_FX_InventoryControl)`, Size `100; 30`, Width `100`, Height `30`). This is a selected-row state only; nothing was edited. Console `2 errors, 0 warnings`. The Designer has `FX_InventoryEditor` open as a second tab; it was not selected or changed (the T18 state, carried). Designer remains clean.
- Tab 0 then re-selected so the Web Client is the visible tab. The Designer was not modified.

## 4. Refresh Data control reference (brief steps 9-11): NOT obtained; no click

- The dashboard renders inside a nested iframe (the Web User Control). In the Web Client accessibility tree the Form tab panel exposes only an empty iframe node (`iframe [ref=f1e89]` under `tabpanel "FX_InventoryDashboard"`).
- Attempts (all read-only):
  1. Untargeted `browser_snapshot` (start of task): iframe node with no children.
  2. `browser_find` text `Refresh Data`: `No matches found`.
  3. `browser_snapshot` targeted at the iframe ref `f1e89`: iframe node only, no children.
  4. A second untargeted `browser_snapshot`: identical to attempt 1. **This repeats an identical read; it was an error in the worker's process and is recorded as such.**
- By contrast, the T21 snapshot exposed the frame content: `iframe [ref=f3e168]` containing `button "Refresh Data" [ref=f4e3]`, `text: Not loaded` and the four cards and table headers (`evidence/EXP-136/t21-runtime-fx-inventorydashboard-pre-refresh-snapshot.yml`, lines 120-144). The reference was therefore available in T21 and not in T22. Cause not established.
- The Refresh Data button is visible in the screenshot, but a coordinate-based click was NOT used. The brief requires a fresh native control reference and reserves coordinates as a last resort (AGENTS.md "Browser automation"); the stop rule forbids a further inspection cycle once the recovery allowance is spent. The coordinator must decide whether a coordinate click is authorized, or whether a later task should retry after the frame content is exposed.
- Consequence: the single Refresh activation was not performed. No backend invocation of `FX_LoadInventoryFromIDO` was initiated by the worker. This is established by the absence of any click on the frame, not by the Web Client's server logs, which were not read.

## 5. Post-click status, metrics, table and errors (brief steps 12-25)

Not applicable: no activation occurred. Recorded values are the pre-activation state only:
- Status: `Not loaded`.
- Total Items `-`; Total Units `-`; Low Stock `-`; Out of Stock `-`. Expected after one successful Refresh: 3, 128, 1 and 1. Not verified.
- Table body: empty. Expected rows (not verified): FX-ITEM-001 / 120 / 20 / FX-WH-A / In Stock; FX-ITEM-002 / 8 / 10 / FX-WH-A / Low Stock; FX-ITEM-003 / 0 / 5 / FX-WH-B / Out of Stock. Description and Location values for the three rows are not established by T22 (rows 2 and 3 were clipped in T9; row 1 showed `FX test widget` and `FX-LOC-01`).
- Errors: none visible in the dashboard area. No WSForm bridge, IDO, JSON or compile error text is visible, because no bridge call was made.
- Console: the T21 baseline of 21 unload Permissions-Policy errors and 10 warnings remains as the counter shown in the snapshot header. No new console read was taken in T22 (not needed without a click). No new dashboard-specific error is known.

## 6. Mutation, browser and recovery ledger (T22)

Application mutations: **0** (no Save; no creation; no variable, asset, component, script, Caption or event change; no Form open or close; no regeneration; no inventory read or write; no runtime Save).

Side-effecting browser actions: **0** Refresh Data clicks; **0** F5; **0** Enter; **0** navigations; **0** reloads; **0** browser JavaScript; **0** dialogs accepted or dismissed; **0** session recoveries; **0** sign-in; **0** credential actions.

Read-only browser actions:
- Tab lists: 3 (start; before the Designer selection; before the restore selection).
- Tab selections: 3 (tab 0; tab 1; tab 0).
- Web Client snapshots: 3 untargeted or targeted (start; iframe-scoped; second untargeted, identical to the first).
- Designer snapshots: 1.
- `browser_find` calls: 1 (`Refresh Data`, no match).
- Screenshots: 1 (`t22-pre-refresh-webclient-state.png`).
- Ref-not-found errors: 0. Fresh-snapshot recovery allowance used: 0 (no stale-ref error occurred). Corrected inspections: 1 (the iframe-scoped snapshot). The identical second untargeted snapshot exceeded the "no identical repeats" rule and is recorded.
- Worker-saved repository files: this record and `evidence/EXP-136/t22-pre-refresh-webclient-state.png`. The experiment record was updated with a T22 section.

## 7. Acceptance status after T22

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted). Re-observed in T22: Web Client header and Designer footer `User / anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. | sections 3 |
| AC-2 | Carried: passed at operator-verified hash level (not recomputed in T22). Committed HTML line 42 `In Stock` and bridge calls re-read. | section 2 |
| AC-3 to AC-6 | Carried (T19/T16/T14 qualified dispositions unchanged). | prior records |
| AC-7 | **PENDING (qualified).** No compile evidence in T22; no bridge call was made, so no runtime proof of the method. | - |
| AC-8 | PASSED (T16). | T16 record |
| AC-9 | PASSED (qualified, T19). | T19 record |
| AC-10 | PASSED (qualified, T21). The T22 screenshot re-observes the runtime Form and the pre-Refresh state. | sections 3 |
| AC-11 | **PENDING.** Refresh Data not activated (no native control reference); no totals, rows or statuses observed. | section 4 |
| AC-12 | PENDING. Not performed in T22 (separately authorized). | - |
| AC-13 | Partial: this record, the experiment record T22 section, and the ledger in section 6. Final reconciliation and operator acceptance pending. | sections 6 |

## 8. Limitations

- No Refresh was performed; no runtime data path, totals, status labels or row values were observed in T22.
- Source hashes were not recomputed in T22 (no shell tool).
- The reason the Web User Control iframe content was not exposed in T22 but was exposed in T21 is not established.
- The AC-7 compile question remains open; the Errors grid was not reopened in T22.

## 9. Next permitted action (coordinator decision)

Operator decision needed before any further action on AC-11:
1. Whether the single Refresh Data activation may be performed by a coordinate-based native click on the visible button (the only route available in this session), or whether a later task should retry after the frame's accessibility content is exposed (for example after a fresh Web Client open, which requires separate authorization).
2. AC-12 read-only inventory comparison (separate authorization).
3. AC-7 compile-evidence disposition.

No Refresh, Save, reload, navigation or Form action is authorized by T22. The Web Client shows `FX_InventoryDashboard` in its pre-Refresh state with no dialog; the Designer is clean with `FX_InventoryDashboard` loaded and `FX_InventoryEditor` also open (unchanged).
