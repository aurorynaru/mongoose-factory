# EXP-136 T21 - Portal navigation, Mongoose relaunch, FX_InventoryDashboard runtime opening and pre-Refresh check

Run R-20261026-062909-9GoC, cycle 31, task T21. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User; account `anton.ramos@3mworks.com.ph`; configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Outcome

- **AC-10: PASSED (qualified).** After the operator-authorized top-level Portal navigation and a single native Mongoose relaunch from the Portal navigation-menu search, the Select Form list visibly contained `FX_InventoryDashboard` (exactly one row, Name and Caption both `FX_InventoryDashboard`). The exact Form was opened once and the runtime tab showed `FX_InventoryDashboard`, the rendered dashboard (heading, Refresh Data button, four cards, table header) and the pre-Refresh placeholder values. Qualification: this route is a top-level Portal navigation followed by a relaunch, not the single F5 reload from T20 (which had no verified effect). The Refresh Data button was NOT clicked.
- **AC-11, AC-12, AC-13:** pending. The one Refresh Data activation and the post-test inventory readback have not been performed (outside this task's boundary).
- **AC-7:** remains PENDING (qualified). No compile evidence was gathered in T21.
- No Refresh Data activation, no Designer Save, no runtime Save, no Form, variable, asset, component or script change, no Form regeneration, no inventory read or write, no F5, no Enter press, no browser JavaScript, no credential action, no session recovery, no sign-in and no session-expiry prompt.

## 2. Preparation (brief steps 1-4)

- Read: `AGENTS.md` (in context); `experiments/EXP-136-...md` (T20 checkpoint and status); `evidence/EXP-136/t20-portal-reload-runtime-dashboard-pre-refresh.md`; `evidence/EXP-136/t19-qualified-fresh-designer-ac9-readback.md`; the EXP-135 T9 precedent `evidence/EXP-135/t9-runtime-open-zero-row-gate.md` (top-level Portal navigation to the operator URL, accept the empty `beforeunload` prompt once, dismiss the Portal banner via its close control, native navigation-menu search `Mongoose`, one result click, then Select Form).
- Read `assets/FX_Inventory/index.html` read-only (no edit). Expected runtime structure: `<h3>FX Inventory Dashboard</h3>`; button `Refresh Data` (`FX_InvRefresh`); status `FX_InvStatus` initially `Not loaded`; four cards `FX_InvTotalItems`, `FX_InvTotalUnits`, `FX_InvLowStock`, `FX_InvOutOfStock` initially `-`; table headers Item, Description, Warehouse, Location, Quantity, Reorder Level, Status; empty body `FX_InvTableBody` until Refresh. The observed runtime matches this structure (section 6).
- Portal URL used: exactly the URL in the worker preamble (`https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/`). No other Portal URL and no Mongoose deep link was used.

## 3. Browser and unsaved-state preflight (brief steps 5-8)

- Tab list (read-only, first): tab 0 Web Client (title `Mongoose`, `favoriteContext=FX_InventoryEditor`); tab 1 Designer (`WSWebClient/designer/Default.aspx`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Identified by title and URL.
- **Designer (tab 1, selected, not modified):** snapshot `t21-designer-preflight-fresh-snapshot.yml`; screenshot `t21-designer-preflight-clean-state.png`. Form tab `FX_InventoryDashboard` present; Save `[disabled]`; Undo `[disabled]`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog (the two `alert` nodes are empty live regions). Console `2 errors, 0 warnings`.
- **Web Client (tab 0, selected), pre-navigation:** snapshot `t21-webclient-pre-navigation-snapshot.yml`; screenshot `t21-webclient-pre-navigation-state.png` (viewed). Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; loaded Form `FX_InventoryEditor` (`(Object 1 of 3)`; FX-ITEM-001 row visible); Save greyed; no dialog; no unsaved-change indicator; no sign-in or session-expiry page; no banner. Console `19 errors, 10 warnings`.
- Preflight gate: passed. Clean state recorded; navigation permitted.

## 4. Single top-level Portal navigation and prompts (brief steps 9-11)

- One navigation of tab 0 to the Portal URL (`browser_navigate`, one action).
- A `beforeunload` dialog appeared with an **empty message** (generic leave-page prompt; no save, discard or conflict text). Accepted **once** (`browser_handle_dialog accept=true`). Permitted because the preflight showed Save disabled and no pending change. Its exact origin was not identified (same as EXP-135 T9).
- Wait 5 s. The Portal landed on the System Administrator home (title `System Administrator`, URL `.../89e55a10-...?inforWorkspace=infor.common.sysadmin.productivity`). Snapshot `t21-portal-landing-snapshot.yml`; screenshot `t21-portal-landing-state.png` (viewed; Portal home widgets visible, "Welcome back, Anton").
- No sign-in page. No session-expiry modal. No authentication action was taken.

## 5. Banner dismissal, Portal navigation search and Mongoose relaunch (brief steps 12-15)

- The Portal banner `DistributionIFSContactUs ... Click here to redirect` was present. Dismissed **once** via its own close control (`Close notification`, snapshot ref from the fresh snapshot `t21-portal-landing-snapshot.yml`). The "here" link was not clicked. Post-dismissal snapshot `t21-portal-post-banner-dismiss-snapshot.yml`: banner absent; URL unchanged.
- Opened the navigation menu once (`Open navigation menu`). Typed `Mongoose` once into `Search menu` (no Enter). Result snapshot `t21-portal-menu-search-mongoose-result.yml`: `1 Result`, `Applications` > `Mongoose OS`. Clicked that single link once.
- Mongoose Web Client loaded in tab 0 (title `Mongoose`; URL `.../c51080bc-3191-4598-9894-39e1b84f8e87`, no `favoriteContext` at this point).
- Settled wait 5 s. Snapshot `t21-mongoose-relaunch-webclient-snapshot.yml`; screenshot `t21-mongoose-relaunch-webclient-state.png` (viewed). Header **`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`**; no Form loaded (empty Explorer); toolbar Save disabled; no dialog; no session prompt; no banner.
- Identity check: account and configuration confirmed from visible native header text in the screenshot and snapshot.

## 6. Select Form exact-name gate (brief steps 17-21)

- Opened once from the toolbar `Open` button (`Open` tooltip visible). Initial dialog state (snapshot `t21-select-form-dialog-initial-snapshot.yml`; screenshot `t21-select-form-dialog-initial.png`, viewed): `Select Form` dialog; Filter pre-filled `IdoCollections` (selected); Filter By `Name`; Case Sensitive off; Starts With off; two rows (`G6RIdoCollectionSearch`, `IDOs`/`IdoCollections`, the first highlighted). No row was opened from this state.
- Filter edit (no Enter): clicked the Filter textbox once; Control+A once; Backspace once; then `FX_InventoryDashboard` typed key by key (`slowly`). Result snapshot `t21-select-form-filtered-exact-name-snapshot.yml`; screenshot `t21-select-form-filtered-exact-name.png` (viewed): Filter reads `FX_InventoryDashboard`; grid shows **exactly one row** `FX_InventoryDashboard` / `FX_InventoryDashboard`, highlighted. Unambiguous. (The positive-control step from T9 was not repeated because the exact-name result already returned one row; the T20 positive control, `FX_Inventory`, remains the last positive control.)
- Selected that row once (single click on the grid row) and then clicked **OK** once. No other row was activated. Cancel was not used.

## 7. Runtime opening and pre-Refresh dashboard check (brief steps 22-29)

- After OK, the Web Client URL changed to `...?favoriteContext=FX_InventoryDashboard&LogicalId=...`. A 4-second settle wait, then snapshot `t21-runtime-fx-inventorydashboard-pre-refresh-snapshot.yml` and screenshot `t21-runtime-fx-inventorydashboard-pre-refresh.png` (viewed).
- **Runtime Form identity:** the Form tab heading reads `FX_InventoryDashboard` (snapshot heading `FX_InventoryDashboard` in the Form tab panel; screenshot tab title `FX_InventoryDashboard`). Header account and configuration unchanged. Save disabled (`Save [disabled]` in the snapshot).
- **Rendered dashboard (screenshot and snapshot):** the Web User Control is rendered (not blank, not a raw HTML document, not an error text):
  - Heading `FX Inventory Dashboard` (level 3).
  - Button `Refresh Data` present; **not disabled** in the snapshot (no `[disabled]` attribute). Button label as observed: `Refresh Data`.
  - Status text `Not loaded` (the committed initial state).
  - Cards: `Total Items` `-`; `Total Units` `-`; `Low Stock` `-`; `Out of Stock` `-` (the committed initial placeholder values; no totals claimed).
  - Table: column headers `Item`, `Description`, `Warehouse`, `Location`, `Quantity`, `Reorder Level`, `Status`. The table body is **empty** (no data rows before Refresh).
- **Geometry:** in the viewport screenshot the heading, Refresh Data button, four cards and the full seven-column table header are visible without clipping inside the Web User Control area; no scrollbar or truncated text is visible at this zoom. The component's Designer size (100 by 30 characters) is not measured in the runtime viewport, so table fit for populated rows (seven columns with three data rows) is NOT demonstrated; the table body is empty at this checkpoint.
- **Errors:** no dashboard-specific error, asset-loading error, compilation message or script error is visible in the Web Client or the dashboard area.
- No dialog open after the opening (snapshot contains no `dialog`, `alertdialog`, session or sign-in text).

## 8. Console (brief step 29, read-only)

Saved `t21-webclient-console-warnings-and-errors-readonly.log` (tool report: 59 total messages; Errors 21, Warnings 10; warning-level read returned 31).

- **Errors: 21**, all `Permissions policy violation: unload is not allowed in this document` at `default-app.js`, `wswebform-app.js` and `yggdrasil-core.js:1409` in the Mongoose document. This is the same unload Permissions-Policy class as T20 (19 errors in the earlier document). The tool's counts are per document: the Portal landing showed 0 errors, the Mongoose launch 20 and the Form opening 21. No new error type and no dashboard-specific error was observed. The cause of the entries is not established.
- **Warnings: 10**, now itemised (T20 had not itemised them):
  - 8 x `WidgetLoaderComponent`: "Widget ... is using IAngularWidgetConfig.moduleType which is deprecated" (for `infor.sysadmin.*` widgets, timestamps 10:02:05). These match the Portal home widgets loaded at the 10:02 landing; source correlation by timestamp only.
  - 1 x `ApplicationUrlResolver`: template URL missing for view `Home` in Content Catalog `lid://infor.imk.1`, default used (10:02:04).
  - 1 x `Origin trial controlled feature not enabled: 'focus-without-user-activation'`.
- None of the 10 warnings names FX_InventoryDashboard, the dashboard asset, `FX_LoadInventoryFromIDO` or a compile error. Whether any warning affects the dashboard is not established.

## 9. Final state (brief steps 30)

- Web Client (tab 0): `FX_InventoryDashboard` displayed at runtime; **Refresh Data NOT clicked**; no dialog open; no unsaved-change indicator; Save disabled.
- Designer (tab 1): not interacted with beyond the tab selection in section 3; its state is unchanged from the preflight (`FX_InventoryDashboard` loaded, clean, Save disabled). Not re-inspected after the Portal navigation (the navigation did not target tab 1).

## 10. Mutation, browser and recovery ledger (T21)

Application mutations: **0** (no Save of any kind; no creation; no variable, asset, component, script, Caption, event or Form change; no Form regeneration; no FormSync, unload, deployment or cache action; no inventory read or write; no Refresh Data activation; no runtime Save).

Side-effecting browser and session actions:
- Top-level Portal navigations: **1** (tab 0 to the operator Portal URL).
- `beforeunload` prompt accepted: **1** (empty message; preflight clean).
- Portal banner dismissals: **1** (close control; "here" link not clicked).
- Portal navigation menu: open **1**; search text entry **1** (`Mongoose`, no Enter); result click **1** (Applications > Mongoose OS).
- Mongoose launch: **1**.
- Sign-in: **0** (no sign-in page). Session-expiry recovery: **0**. Session-establishment methods: **0**.
- Select Form dialog: opened **1**; filter clicks **1**; Control+A **1**; Backspace **1**; typed text **1** (slow typing; no Enter); exact-row click **1**; OK **1**; Cancel **0**.
- Runtime Form openings: **1** (`FX_InventoryDashboard`).
- Refresh Data activations: **0**. F5 presses: **0**. Enter presses: **0**.
- Browser JavaScript, evaluate or run-code calls by the worker: **0**. Credential reads or entries: **0**.
- Tab selections: 2 (tab 1 Designer for preflight; tab 0 Web Client). Tab lists: 1 at start plus the tab list returned with each action output.
- Browser action timeouts or Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**.
- Worker-saved snapshots: 9 (`t21-*.yml`). Worker-saved screenshots: 7 (`t21-*.png`). Console read: 1 (`t21-*.log`). Tool-written snapshots under `evidence/playwright/` (not worker-authored).

## 11. Acceptance status after T21

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted). T21 re-observed the Designer User footer and the Web Client header (`anton.ramos@3mworks.com.ph`, `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) before and after the relaunch. Absence checks not repeated. | sections 3, 5 |
| AC-2 | Carried: passed at the operator-verified hash level (not recomputed). The committed HTML was re-read read-only in T21 for the runtime structure only. | section 2 |
| AC-3 | Carried: passed (qualified; T19 Global/Persistent readback). | T19 record |
| AC-4 | Carried: operator-accepted (qualified; token-level, no byte equality). | T19 record |
| AC-5 | Carried: passed (qualified). T21 identified the runtime Form by heading and URL `favoriteContext=FX_InventoryDashboard`; Name, ScopeType and ScopeName were not re-read in the list (the Select Form row shows Name and Caption only). | sections 6, 7 |
| AC-6 | Carried: passed (qualified; T19 readback). Runtime evidence shows the dashboard renders within the component area with headers visible (section 7); table fit for populated rows not demonstrated. | section 7 |
| AC-7 | **PENDING (qualified).** No compile evidence gathered in T21. | T19 record |
| AC-8 | PASSED (observed, T16). | T16 record |
| AC-9 | PASSED (qualified; operator-accepted route; T19). | T19 record |
| AC-10 | **PASSED (qualified).** Operator-authorized top-level Portal navigation and one native relaunch; `FX_InventoryDashboard` visibly listed by exact name (one row) and opened; runtime identity, rendered dashboard, Refresh Data button (not disabled) and pre-Refresh placeholders captured before any activation. Qualification: this route is not the T20 F5, and the T20 reload effect remains unverified. | sections 4-7 |
| AC-11 | PENDING. One Refresh Data activation and three-row, totals and status readback not performed (out of T21 scope). | - |
| AC-12 | PENDING. Post-test inventory readback not performed. | - |
| AC-13 | Partial: this file, the experiment record update and the ledger in section 10; final reconciliation and operator acceptance pending. | sections 10-11 |

## 12. Unresolved observations (recorded, not repaired)

- The T20 F5 had no verified effect; the Form was absent from the Web Client Select Form list at that time. T21's Portal navigation plus relaunch made the Form visible in the same list. Whether the cause was a stale client list, a document reload or the relaunch is not established; the precedent (EXP-135 T9) is consistent with a stale list refreshed by navigation.
- The Select Form filter pre-filled `IdoCollections` at dialog opening (pre-existing dialog state). Typed filtering behaved as in T20 (key-by-key typing filtered; the fill-only route was not used in T21).
- `FX_InventoryPrototype01` was not checked in T21 (not in scope); the T20 anomaly remains open.
- Console error counts are per document (19 before navigation; 0 at Portal landing; 20 after the Mongoose launch; 21 with the Form open). The unload Permissions-Policy cause is not established.
- The Designer's `userControl1_USER` variables and the `using Mongoose.IDO.Protocol;` line (carried from T19) were not re-inspected in T21.
- Table fit for populated rows remains unverified until Refresh (AC-11).

## 13. Evidence files (T21, under `evidence/EXP-136/`)

Worker-written:
- `t21-portal-navigation-runtime-dashboard-pre-refresh.md` (this file).
- Snapshots: `t21-designer-preflight-fresh-snapshot.yml`; `t21-webclient-pre-navigation-snapshot.yml`; `t21-portal-landing-snapshot.yml`; `t21-portal-post-banner-dismiss-snapshot.yml`; `t21-portal-menu-search-mongoose-result.yml`; `t21-mongoose-relaunch-webclient-snapshot.yml`; `t21-select-form-dialog-initial-snapshot.yml`; `t21-select-form-filtered-exact-name-snapshot.yml`; `t21-runtime-fx-inventorydashboard-pre-refresh-snapshot.yml`.
- Screenshots (each viewed): `t21-designer-preflight-clean-state.png` (Designer User footer, Save disabled; does not show the Form definition); `t21-webclient-pre-navigation-state.png` (header, FX_InventoryEditor loaded, Save greyed, no dialog; before navigation); `t21-portal-landing-state.png` (Portal home after the single navigation; banner visible at capture; does not prove the Mongoose launch); `t21-mongoose-relaunch-webclient-state.png` (Mongoose header with account and configuration; no Form loaded); `t21-select-form-dialog-initial.png` (Select Form with stale `IdoCollections` filter, two rows); `t21-select-form-filtered-exact-name.png` (exact filter, one row FX_InventoryDashboard); `t21-runtime-fx-inventorydashboard-pre-refresh.png` (runtime tab FX_InventoryDashboard; heading; Refresh Data button; Not loaded; four `-` cards; empty table with seven headers; does not prove any data rows or totals, which are pending Refresh).
- Console: `t21-webclient-console-warnings-and-errors-readonly.log` (21 errors, 10 warnings, itemised).

Tool-written under `evidence/playwright/` (not worker-authored): page snapshots and console logs from 2026-10-26T02-01 to T02-03 (e.g. `page-2026-10-26T02-02-00-102Z.yml`, `page-2026-10-26T02-03-15-776Z.yml`, `console-2026-10-26T02-01-39-462Z.log`, `console-2026-10-26T02-02-00-074Z.log`).

## 14. Next permitted action

Operator decision required for the next step. T21 authorizes no further action. The next permitted step, if the operator authorizes it, is the single Refresh Data activation (AC-11), followed by the separate post-test inventory readback (AC-12). The runtime Form is open and clean in tab 0 with Refresh Data unclicked, and the Designer tab is unchanged and clean.
