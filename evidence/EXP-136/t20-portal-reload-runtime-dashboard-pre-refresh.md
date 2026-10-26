# EXP-136 T20 - Portal reload and initial runtime opening of FX_InventoryDashboard (pre-Refresh)

Run R-20261026-062909-9GoC, cycle 28, task T20. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User, account `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- **AC-10: BLOCKED (not passed).** The existing `FX_InventoryDashboard` could not be opened at runtime. It was absent from the Web Client Select Form list (zero rows under the exact-name filter, with a positive control showing the list was filtering) and absent from the Form menu's recent-Forms list. The one authorized Portal reload had no observable effect (see section 3), and a second reload was not authorized. Per the brief, no deep URL or workaround was used. The Select Form dialog was closed with Cancel, not OK.
- **AC-11, AC-12, AC-13:** not evaluated in T20 (no runtime Form, no Refresh Data, no inventory read; final reconciliation pending the coordinator).
- No Refresh Data activation, no Designer Save, no Form open or close in the Designer, no variable, asset, component or script change, no inventory access, no Enter press, no browser JavaScript, no credential action, no session recovery, no session-expiry prompt.

## 2. Preparation and preflight (brief steps 1-8)

- Read: `AGENTS.md` (in context), the EXP-136 record (current status and T19 checkpoint), `evidence/EXP-136/t19-qualified-fresh-designer-ac9-readback.md`, `recipes/forms/create-basic-form.md` (Verification section: Open button, Select Form dialog, double-click the exact row; Known pitfall: Select Form OK activates the selected row). The committed `assets/FX_Inventory/index.html` was re-read read-only (no edit). Expected runtime structure: header `FX Inventory Dashboard`; button `Refresh Data` (`FX_InvRefresh`); status `FX_InvStatus` initially `Not loaded`; four cards `FX_InvTotalItems`, `FX_InvTotalUnits`, `FX_InvLowStock`, `FX_InvOutOfStock` initially `-`; empty table body `FX_InvTableBody` (no rows until Refresh). Source hashes were not recomputed (operator-verified values carried from earlier tasks).
- Tab list (read-only, first): tab 0 Web Client (`favoriteContext=FX_InventoryEditor`, title `Mongoose`); tab 1 Designer (`WSWebClient/designer/Default.aspx`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Identified by title and URL.
- **Designer (tab 1, selected, not modified)**: fresh snapshot `evidence/EXP-136/t20-designer-preflight-fresh-snapshot.yml`; screenshot `t20-designer-preflight-clean-state.png`. Tabs `FX_InventoryEditor` (loaded, not selected) and `FX_InventoryDashboard` (selected, heading shown). Save `[disabled]`, Undo `[disabled]`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; the selected component is `FX_InventoryControl (ActivexControl)`, Size 100; 30, User Control Name `V(UserCtrl_FX_Inv...`. No dialog. Console `2 errors, 0 warnings`. The Designer was not touched beyond selecting its tab.
- **Web Client (tab 0, selected)**: pre-reload snapshot `evidence/EXP-136/t20-webclient-pre-reload-snapshot.yml`; screenshot `t20-webclient-pre-reload-state.png`. Header button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (account and configuration confirmed from visible native UI). Loaded Form `FX_InventoryEditor` (heading; `(Object 1 of 3)`; rows FX-ITEM-001 `120.00` / `20.00` / `FX-WH-A` visible). No dialog, no session-expiry or sign-in page, no `portal-notification` banner. Console `19 errors, 10 warnings`. URL `https://mingle-portal.se1.inforcloudsuite.com/.../c51080bc-...?favoriteContext=FX_InventoryEditor&LogicalId=...`.
- Pre-reload Form identity: `FX_InventoryEditor` (not modified, not saved).

## 3. The one Portal reload (brief steps 9-11)

- Action: one `browser_press_key F5` on the selected Web Client tab (the supported browser reload; no JavaScript; the Designer tab was not reloaded). Wait 10 s.
- Post-action evidence: snapshot `evidence/EXP-136/t20-webclient-post-reload-snapshot.yml`; screenshot `t20-webclient-post-reload-state.png`; `browser_network_requests` (filter `mingle-portal|mgapse1ap`) listed one request only: `POST .../WSWebClient/AppApi/GenerateServerEvent => 200`. No document request for the portal or Web Client page was listed.
- Observed: the URL is unchanged; the same account header and configuration; the same loaded Form `FX_InventoryEditor` with the same rows; no dialog; console counts unchanged (19 errors, 10 warnings). The post-action screenshot is visually identical to the pre-action screenshot.
- **Reload effect: NOT ESTABLISHED.** The key press did not produce a verified reload. The absence of a document request is consistent with no reload having occurred, but the MCP list may be scoped differently, so this is an inference, not proof. The reload was not repeated (the brief authorizes exactly one, and a repeat needs explicit authorization). Cache-clearing, configuration change and a direct URL were not used.
- Identity and session checks after the action: account and configuration visible; no session-expired state, no sign-in requirement, no blocking modal. Navigation responsive (snapshots and dialogs responded normally).

## 4. Opening attempt for FX_InventoryDashboard (brief steps 12-14)

- One native `Open` click on the Web Client toolbar (the verified route in `recipes/forms/create-basic-form.md`). The Select Form dialog opened. Screenshot `t20-select-form-dialog-opened.png`; snapshot `t20-select-form-dialog-snapshot.yml`.
- Pre-filter state: the Filter textbox already held `IdoCollections` (a value present before this task). The grid showed two rows: `G6RIdoCollectionSearch` / `G6RIdoCollectionSearch` and `IDOs` / `IdoCollections` (the latter highlighted). **OK was not clicked**, because OK would activate the highlighted row.
- Filter edits (UI filter only; no record, Form or artifact change):
  1. `fill` of `FX_InventoryDashboard` into the textbox. The snapshot showed the text, but the grid did not re-filter (still the two old rows). Screenshot `t20-select-form-filter-FX_InventoryDashboard.png`; snapshot `t20-select-form-filtered-snapshot.yml`. No Enter was pressed.
  2. Click into the textbox; Control+A; Backspace; slow key-by-key typing of `FX_InventoryDashboard`. The grid became **empty (zero rows)**. Screenshot `t20-select-form-filter-slow-type-FX_InventoryDashboard.png`.
  3. Positive control: click; Control+A; Backspace; slow typing of `FX_Inventory`. The grid showed exactly one row: `FX_InventoryEditor` / `FX_InventoryEditor` (highlighted). Screenshot `t20-select-form-positive-control-filter-FX_Inventory.png`. The positive control shows the filter works in this dialog. `FX_InventoryPrototype01` (a Form named in the brief as existing) was **not** listed under the same prefix; cause not established.
- Dialog closed with **Cancel** (one click). Post-cancel snapshot `t20-webclient-after-select-form-cancel-snapshot.yml`: no dialog; header and `FX_InventoryEditor` heading present; `(Object 1 of 3)`.
- Cross-check, read-only: the Form menu (one open; one dismiss click; no item selected) listed `Open`, `Close and Save Changes`, `Close and Cancel Changes`, `Export to File`, `Definition`, `Sign Out`, `IDOs`, `FX_InventoryEditor`, `Sql Tables`, `IDO Projects`, `FX_LoginPortal`, `FX_BridgeTest`, `FX_CustomerPortal`, `FX_Orders`, `Test ION API Invoke`, `Access As`. **`FX_InventoryDashboard` is not in the recent list.** Screenshot `t20-webclient-form-menu-recent-list-readonly.png`; the menu was dismissed (final snapshot shows no menu).
- Result: the exact Form was **not reachable** through the Select Form dialog or the Form menu's recent list in this Web Client document. No runtime Form identity was established for `FX_InventoryDashboard`. Per the brief, no double-click or OK was used on another row, no deep URL was built, and no second reload was attempted.

## 5. Pre-Refresh runtime checks (brief steps 15-21)

- **Not performed.** The Form did not open. The Web User Control area, the Refresh Data button, the four metric cards and the table were not present in any observed runtime state. No Refresh Data activation occurred. The initial-state values (`Not loaded`, `-`) from the committed HTML were not observed, so no claim is made about them.
- Errors: no dashboard-specific runtime error was observed (because the Form was not opened). Console remained `19 errors, 10 warnings`.

## 6. Console observations (brief step 23)

- Console error read (read-only; saved `evidence/EXP-136/t20-webclient-console-errors-readonly.log`): 19 messages, all `Permissions policy violation: unload is not allowed in this document` at `default-app.js`, `wswebform-app.js` and `yggdrasil-core.js:1409`. These are the same class of unload Permissions-Policy messages recorded in the Designer (2 errors) since T8. No new error type was observed.
- Warnings (10): not itemised in T20. Not interpreted.
- Counts were identical before and after the reload attempt; they do not distinguish a reload. No new dashboard-specific error can be attributed because the dashboard was not opened.

## 7. Final stable state (brief steps 24-25)

- Web Client (tab 0): `FX_InventoryEditor` loaded (unchanged); Select Form and Form menu closed; no dialog; no unsaved change; header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Final snapshot `t20-webclient-final-stable-snapshot.yml`.
- Designer (tab 1): unchanged since preflight; `FX_InventoryDashboard` loaded and clean; Save disabled; no dialog.
- No inventory write, no Designer Save, no runtime Save, no variable/asset/component/script edit, no Form creation or edit.

## 8. Mutation and browser ledger (T20)

Application mutations: **0** (no Saves; no creations; no variable, asset, component, script, Caption or event changes; no Form open or close in the Designer; no Form Script or Designer regeneration; no inventory reads or writes; no Refresh Data activations; no runtime Saves).

Side-effecting browser or session actions:
- Portal reloads: **1 attempted** (one F5 key press on the Web Client tab). Effect not established (section 3). Not repeated.
- Runtime Form openings: 0 (the Select Form and recent-list routes did not reach the Form).
- Select Form dialog: opened 1; filter text changes 3 (no OK; closed with Cancel 1).
- Form menu: opened 1; dismissed 1; no item selected.
- Tab selections: 2 (Designer tab 1, then Web Client tab 0); tab list 1 at start.
- Key presses: F5 1; Control+A 2; Backspace 2; Enter 0.
- Clicks: Web Client Open 1; Select Form filter field clicks 2; Select Form Cancel 1; Form menu 2.
- Browser JavaScript, run-code or evaluate calls authored by the worker: 0. Credential reads or entries: 0. Session recoveries: 0. Session-expiry or sign-in prompts: none observed.
- Browser action timeouts or Ref-not-found errors: 0. Fresh-snapshot recovery allowance used: 0.

Read-only observations: snapshots (worker-saved: 6, see section 9); screenshots (worker-saved: 7 plus the Designer screenshot, see section 9); network request list 1; console error read 1 (plus the tool's console count).

Notifications: none (no `portal-notification` banner present).

## 9. Evidence files written (T20)

Worker-authored under `evidence/EXP-136/`:
- `t20-portal-reload-runtime-dashboard-pre-refresh.md` (this file).
- Snapshots: `t20-designer-preflight-fresh-snapshot.yml`, `t20-webclient-pre-reload-snapshot.yml`, `t20-webclient-post-reload-snapshot.yml`, `t20-select-form-dialog-snapshot.yml`, `t20-select-form-filtered-snapshot.yml`, `t20-webclient-after-select-form-cancel-snapshot.yml`, `t20-webclient-final-stable-snapshot.yml`.
- Screenshots: `t20-designer-preflight-clean-state.png`, `t20-webclient-pre-reload-state.png`, `t20-webclient-post-reload-state.png`, `t20-select-form-dialog-opened.png`, `t20-select-form-filter-FX_InventoryDashboard.png`, `t20-select-form-filter-slow-type-FX_InventoryDashboard.png`, `t20-select-form-positive-control-filter-FX_Inventory.png`, `t20-webclient-form-menu-recent-list-readonly.png`.
- Console read: `t20-webclient-console-errors-readonly.log`.

Tool-written under `evidence/playwright/` (not worker-authored): page snapshots `page-2026-10-26T01-51-52-302Z.yml`, `page-2026-10-26T01-52-14-131Z.yml`, `page-2026-10-26T01-52-39-260Z.yml`, `page-2026-10-26T01-52-47-540Z.yml`, `page-2026-10-26T01-52-53-839Z.yml`, `page-2026-10-26T01-53-05-515Z.yml`, `page-2026-10-26T01-53-12-361Z.yml`, `page-2026-10-26T01-53-25-314Z.yml`, `page-2026-10-26T01-53-39-373Z.yml`, `page-2026-10-26T01-53-48-084Z.yml`; tab-list console log `console-2026-10-26T01-51-02-723Z.log` (and `-725Z`).

## 10. Decisive evidence per AC (T20)

- Pre-reload identity: `t20-webclient-pre-reload-snapshot.yml` and `t20-webclient-pre-reload-state.png` show the account header, configuration, `FX_InventoryEditor` loaded, no dialog. Supports AC-10 pre-condition only.
- Designer clean state: `t20-designer-preflight-clean-state.png` and `t20-designer-preflight-fresh-snapshot.yml` show `FX_InventoryDashboard` tab selected, Save disabled, User scope footer. Does not prove the saved definition (T19 covers it).
- Reload: **not proven**; `t20-webclient-post-reload-state.png` is visually identical to the pre-reload state and the network list shows no document request.
- Form availability: `t20-select-form-filter-slow-type-FX_InventoryDashboard.png` (zero rows) and `t20-select-form-positive-control-filter-FX_Inventory.png` (only `FX_InventoryEditor`) show the exact Form was not listed; `t20-webclient-form-menu-recent-list-readonly.png` shows it is not in the recent list. Supports a blocker for AC-10; it is not a determination of the Form's persistence (the Designer readback in T19 remains the persistence evidence).
- Runtime dashboard, Refresh button, cards, table: **not observed** (no runtime Form opened).

## 11. Acceptance status after T20

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted). T20 re-observed the Web Client account and configuration and the Designer User footer. Absence checks were not repeated. | sections 2 |
| AC-2 | Carried: passed at the operator-verified hash level (not recomputed). The committed HTML was re-read in T20 for the runtime structure only. | section 2 |
| AC-3 | Carried: passed (qualified; T19 Global/Persistent readback). | T19 record |
| AC-4 | Carried: operator-accepted (qualified; token-level, no byte equality). | T19 record |
| AC-5 | Carried: passed (qualified; T19 readback). | T19 record |
| AC-6 | Carried: passed (qualified; T19 readback). Rendered table fit NOT demonstrated (no runtime Form opened). | T19 record; section 5 |
| AC-7 | **PENDING (qualified).** No change in T20: Compile Result evidence from T19 remains blank output and headers only. | T19 record |
| AC-8 | PASSED (observed, T16). | T16 record |
| AC-9 | PASSED (qualified; operator-accepted reload-in-place route; T19). | T19 record |
| AC-10 | **BLOCKED (not passed).** One F5 with no observable reload effect; exact Form absent from the Select Form list (zero rows; positive control valid) and from the Form menu recent list; runtime opening not achieved. | sections 3-4 |
| AC-11 | Not evaluated (no runtime Form; no Refresh). | section 5 |
| AC-12 | Not evaluated (no inventory readback in T20). | - |
| AC-13 | Partial: this file, the EXP-136 record update and the ledger in section 8; final reconciliation pending the coordinator. | sections 8-9 |

## 12. Unresolved observations (recorded, not repaired)

- The F5 keypress did not produce an observable reload (URL, Form, content and console counts unchanged; no document request in the network list). Cause not established. T18's F5 also had no verified effect.
- The Select Form dialog's Filter field held `IdoCollections` before the task (pre-existing dialog state). Its grid did not re-filter on a single `fill`; it did filter on key-by-key typing. Cause not established.
- `FX_InventoryPrototype01` was not listed under the prefix `FX_Inventory` in the same Select Form list, and it is absent from the recent-Forms list. Cause not established (the list may be stale, scoped, or the Form may not exist under that name; not verified here).
- The Designer's Form list (T19) included `FX_InventoryDashboard` in its recent list; the Web Client's recent list does not. Cause not established.
- Carried from T19 (unchanged): form-level `UserCtrl*_userControl1_USER` variables; `using Mongoose.IDO.Protocol;` in the Script Editor header; the Designer Page URL lost `MGForm=` after a dialog Cancel; two Designer `unload` Permissions-Policy errors. The Web Client's 19 errors are the same `unload` class.
- The 10 Web Client warnings were not itemised.

## 13. Next permitted action

Coordinator decision required before any further runtime step:
1. Whether a second, separately authorized Portal reload (or another named, supported way to refresh the Web Client Form list) is permitted. T20 used its single authorized reload, which had no verified effect.
2. If the list refreshes and `FX_InventoryDashboard` appears, one native opening of the exact Form (Select Form double-click on the exact row, or the recent list entry). The Refresh Data activation (AC-11) and the inventory readback (AC-12) remain separate decisions.
3. Disposition of the unresolved Select Form anomaly (`FX_InventoryPrototype01` not listed), which is read-only to investigate.
4. AC-7 compile evidence remains a separate decision.

No action is authorized by T20 beyond the documented state. The Web Client is stable (FX_InventoryEditor loaded, no dialog) and the Designer is clean with FX_InventoryDashboard loaded.
