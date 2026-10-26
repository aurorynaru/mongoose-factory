# EXP-136 T8 - Designer tab cleanup, one fresh Designer launch and liveness probe

Run: R-20261026-062909-9GoC, cycle 9, task T8. Date: 2026-10-26. Mode: LEARNING MODE.
Scope of this task: tab cleanup, one fresh Designer launch, scope identification, one Edit-menu liveness probe. No application creation, no Save, no Form open, no Portal reload, no Refresh Data, no inventory access.

## 1. Operator-accepted evidence (carried, not newly observed in T8)

The operator accepted the following combined absence evidence for AC-1 (T4 and T6 checkpoints; recorded in `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md`). T8 did not repeat these checks.

- Global Objects (T4, Designer, unfiltered list): `FX_vInventoryJson` not in the list; positive controls `FX_vEcho` and `FX_vLoginResult` present (`evidence/EXP-136/t4-fresh-designer-and-absence-gates.md`, rows 21, 23 and 108). Limitation kept: the filter did not apply and full-list coverage was not verified by scrolling.
- Web User Control Assets (T4, Designer): no `FX_Inventory` root folder; six roots `$app`, `FX_Bridge`, `FX_Login`, `mongoose`, `sohoComponents`, `sohoxi` (positive controls `FX_Bridge` and `FX_Login/index.html`). Limitation kept: root level only; no filter applied.
- Select Form (T6, Web Client): filter `FX_InventoryDashboard` returned zero rows; positive control `FX_InventoryEditor` was visible before the filter was changed. Scope column was not shown (`evidence/EXP-136/t6-session-continuation-and-select-form-gate.md`).
- AC-2 (operator-verified source hashes at commit d4b99db): `assets/FX_Inventory/index.html` SHA-256 `53baed0a9ce30a4c4d76bbd59eae9bb7ad531e29a3bc7b091aafb157633cd21d`; `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` SHA-256 `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f`. These were not recomputed by the T8 worker. Retained as passed at the operator-verified level only.

Operator disposition (recorded): the combined T4 and T6 absence evidence is accepted as sufficient for AC-1. The Global Objects and Web Assets lists were not independently proven exhaustive; that limitation is carried forward.

## 2. Initial tab enumeration (read-only, before any selection)

| Index | Title | URL (abridged) | Role |
| --- | --- | --- | --- |
| 0 (current) | Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT) | `.../WSWebClient/designer/Default.aspx?tenant=...&MGForm=FX_InventoryEditor` | Designer, long form, `MGForm=FX_InventoryEditor` |
| 1 | same title | `.../WSWebClient/designer/Default.aspx?DeliveryType=...&tenant=...` (no `MGForm` parameter) | Designer, long form |
| 2 | same title | `.../WSWebClient/designer/default.aspx` | Designer, start page form |
| 3 | same title | `.../WSWebClient/designer/default.aspx` | Designer, start page form |
| 4 | Mongoose | `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87` | Infor OS portal hosting the Web Client (Portal tab) |

The Web Client Portal tab was identified by its portal URL and by its displayed role (the Mongoose frame inside the portal shell), not by the inherited index. The brief's note that the Web Client is index 4 was consistent with this listing.

## 3. Designer tab closure (step 3)

Each closure was a single `browser_tabs close` call with an explicit index. The tab list was re-enumerated after every close. No Designer was clicked, inspected, saved or edited before closing. No dialog, leave-page prompt, beforeunload prompt or unsaved-change prompt was reported by any close result; no prompt disposition was needed.

| Step | Closed index and URL | Result | Remaining tabs after close |
| --- | --- | --- | --- |
| C1 | 3 (`designer/default.aspx`) | closed; no prompt reported | 0 Designer MGForm; 1 Designer long form; 2 Designer `default.aspx`; 3 portal |
| C2 | 2 (`designer/default.aspx`) | closed; no prompt reported | 0 Designer MGForm; 1 Designer long form; 2 portal |
| C3 | 1 (Designer long form, no MGForm) | closed; no prompt reported | 0 Designer MGForm; 1 portal |
| C4 | 0 (Designer long form, `MGForm=FX_InventoryEditor`) | closed; no prompt reported; console events logged to `evidence\playwright\console-2026-10-26T00-15-17-173Z.log` | 0 portal only |

Re-enumeration after C4 (read-only): one tab, index 0, portal URL. Zero `/designer/` tabs remain. The Portal Web Client tab was retained.

Note: the Designer tabs were closed without being inspected for unsaved state. Their state before closure is not recorded in T8 beyond the index-level identities above. Whether any of them held unsaved work (for example the T3 Error dialog on the former tab 1 and the FX_LoginPortal Form tab) was not inspected, because the brief forbids Designer interaction. The operator's instruction authorised closure of every Designer tab, and no prompt appeared.

## 4. Portal tab selection and fresh snapshot (step 5)

- Tab list (read-only) then `browser_tabs select` index 0: succeeded. Portal tab is current.
- Fresh untargeted snapshot: page title `Mongoose`; console `19 errors, 10 warnings` (the portal counter, carried from T6, not diagnosed).
- Portal top navigation: tabs `System Administrator` and `Mongoose` (selected); user area `DEM`.
- Mongoose frame header button (ref `f1e20`): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. This is the visible signed-in account and configuration.
- Frame toolbar: Save disabled; no Form tab open; Explorer tree visible (`My Folders`, `Master Explorer`, `Public Folders`, `User Folders`).
- No `Session Expired` modal, no Infor sign-in form, no `portal-notification` banner, no dialog in the snapshot.
- Session recovery: none. No credential typed or read.

## 5. Designer launch (step 6)

- Candidate identification: a fresh find for `Designer` returned two Designer controls in the Mongoose toolbar: a wrapper (`f1e36`) and a button (`f1e39`, labelled `Designer`).
- Read-only tooltip check: one hover on `f1e39` (non-mutating), then `browser_find` for `Open designer in a new window` returned the tooltip `Open designer in a new window` (ref `f1e88`). The tooltip identifies `f1e39` as the split-button launch control. Wrapper `f1e36` was not activated.
- Launch: one click on `f1e39`. Activated exactly once. The tool's reported code was a `getByLabel('Designer').click()` locator inside the frame; this is the MCP tool's internal locator, not browser JavaScript authored by the worker.
- Enumeration immediately after the click: exactly one new tab appeared, index 1, Designer `designer/Default.aspx` with the configuration parameters and no `MGForm` parameter. Tab count went from 1 to 2. The launch was not repeated.

## 6. New Designer identity and scope (step 7)

- `browser_tabs select` index 1 after a read-only list: succeeded. Designer is current.
- Fresh snapshot: page title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`; page URL configgroup `G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM`; console `2 errors, 0 warnings`.
- The `Identify Your Editing Scope` dialog was open on arrival, with Scope = `User` and User = `anton.ramos@3mworks.com.ph` pre-set. Operator-selected values were already the required values. The dialog OK button was clicked once. No values were changed.
- Post-dialog read-only finds: `ScopeType` returned footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. `Identify Your Editing Scope` returned no match (dialog closed).
- No Form was loaded in this Designer. The canvas is empty. Properties panel is empty. No existing Form was opened, so no existing Form was touched.
- Save: disabled in the snapshot (toolbar Save `disabled`). Screenshot shows the Save icon greyed. Clean state.
- Regenerate Form: disabled (not used).
- Screenshot: `evidence/EXP-136/t8-fresh-designer-after-launch-and-scope.png` (see section 9).

## 7. Edit-menu liveness probe (step 8)

- Edit button ref `e5` obtained from a read-only find after the scope dialog closed (no pre-dialog ref reused).
- Click 1 (open): menu opened. Read-only find `Web User Control Assets` returned the menu entries `Variable` (`e357`), `Web User Control Assets` (`e360`) and `Revert Global Object Definition` (`e364`) under the Edit menu. Menu rendered. No entry was selected.
- Click 2 (close, same ref `e5`): read-only find `Web User Control Assets` returned no match, so the menu closed.
- Read-only error check after close: regex `/server event|error|Session Expired|dialog/i` returned no match. No error dialog.
- The probe was not retried. No Edit-menu entry or editing dialog was opened.

## 8. Final state

- Tabs: index 0 portal Web Client (`https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-...`); index 1 new Designer (`https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx?tenant=...&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM...`), current.
- New Designer: User scope footer `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (page title), no Form loaded, Save disabled, no dialog open, Edit menu closed.
- Browser-native dialogs: none observed. In-page dialogs: none open.
- The new Designer tab was left open deliberately as the fresh Designer for the coordinator's next decision (T8 forbids creation).

## 9. Screenshots (decisive)

`evidence/EXP-136/t8-fresh-designer-after-launch-and-scope.png` (taken after the Edit probe closed, scope dialog closed):
- Shows: live User-scope Designer canvas (empty, no Form loaded), Toolbox and empty Properties, Save icon greyed, footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Does NOT show: the configuration name (only in the page title, from the snapshot), any Form identity (no Form open), or the Edit menu state (closed at capture).
- Supports: AC-1 scope and liveness evidence for the new Designer. Does not support: any Form, variable, asset or component identity.

No portal screenshot was captured in T8; the portal snapshot text (section 4) is the header evidence.

## 10. Action inventory (T8)

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs list` | all | 5 tabs (0-4) |
| 2 | `browser_tabs close` | index 3 Designer | closed, no prompt |
| 3 | `browser_tabs close` | index 2 Designer | closed, no prompt |
| 4 | `browser_tabs close` | index 1 Designer | closed, no prompt |
| 5 | `browser_tabs close` | index 0 Designer | closed, no prompt |
| 6 | `browser_tabs list` | all | 1 tab (portal) |
| 7 | `browser_tabs select` | index 0 portal | succeeded (after list) |
| 8 | `browser_snapshot` | portal | header and configuration read |
| 9 | `browser_find` `Designer` | portal frame | 2 Designer controls |
| 10 | `browser_hover` `f1e39` | Designer split-button | tooltip visible (non-mutating) |
| 11 | `browser_find` `Open designer in a new window` | portal frame | tooltip confirmed |
| 12 | `browser_click` `f1e39` | Designer split-button | 1 new Designer tab (single launch) |
| 13 | `browser_tabs list` | all | 2 tabs; new Designer index 1 |
| 14 | `browser_tabs select` | index 1 Designer | succeeded (after list) |
| 15 | `browser_snapshot` | new Designer | scope dialog open, Save disabled |
| 16 | `browser_click` `e305` | scope dialog OK | dialog closed; User scope preset |
| 17 | `browser_find` `ScopeType` / `Identify Your Editing Scope` | new Designer | footer confirmed; dialog closed |
| 18 | `browser_find` `Edit` | new Designer | ref `e5` |
| 19 | `browser_click` `e5` | Edit menu (open) | menu rendered |
| 20 | `browser_find` `Web User Control Assets` | new Designer | 3 menu entries visible |
| 21 | `browser_click` `e5` | Edit menu (close) | menu closed |
| 22 | `browser_find` `Web User Control Assets` and error regex | new Designer | no match; no error |
| 23 | `browser_take_screenshot` | new Designer | `t8-fresh-designer-after-launch-and-scope.png` |
| 24 | `Read` screenshot | evidence file | inspected |

Counts: Designer tab closures 4; Designer launches 1; scope OK 1; Edit-menu clicks 2 (probe); Form opens 0; creations 0; Saves 0; Portal reloads 0; Refresh activations 0; browser JavaScript 0; URL navigations 0; credentials typed or read 0; session recoveries 0; prompts accepted 0.

## 11. Notifications, errors and recovery

- Infor OS portal banner: none visible in the portal snapshot. No dismissal.
- Console counters: portal `19 errors, 10 warnings` (unchanged from the T6 end value); new Designer `2 errors, 0 warnings` after load. The meaning of these counters is not established; they are not diagnosed here.
- Error dialogs: none in the new Designer or the portal (regex check). The T7 record placed the T3 Error dialog (`server event processing returned an error`) on the then-tab 1. The Designer tabs were closed without inspection, so whether the closed tab that held that dialog was the same tab is not verified; no dialog was dismissed in T8.
- Recovery: none. No fresh-snapshot recovery was needed; all refs used were from a read-only find or snapshot taken in the same task after the last change of view.

## 12. Limitations

- Scope dialog values were pre-set; the T8 worker verified the values and clicked OK. No alternative scope was tested.
- The new Designer shows no Form, so no Form identity or Form configuration is observed in T8.
- Closure of the four prior Designer tabs was done without inspecting their unsaved state (brief rule). Whether any held unsaved work is not established; no prompt was reported.
- The Edit-menu probe is liveness only: three entries were visible; no further menu behaviour was tested.
- The portal console counter is not diagnosed.

## 13. AC-1 to AC-13 checkpoint

| AC | T8 status | Evidence |
| --- | --- | --- |
| AC-1 | Operator-accepted (absence) and partly newly observed (identity/scope of the new Designer) | Section 1 (accepted, carried); sections 4 and 6 (portal header and new Designer footer, observed T8). Not a re-run of absence checks. |
| AC-2 | Passed at operator-verified level only | Section 1 (hashes supplied by the operator; not recomputed in T8). |
| AC-3 | Not evaluated | No variable created. |
| AC-4 | Not evaluated | No asset created. |
| AC-5 | Not evaluated | No Form created. |
| AC-6 | Not evaluated | No component placed. |
| AC-7 | Not evaluated | No script method installed. |
| AC-8 | Not evaluated | No Save performed. |
| AC-9 | Partly: fresh Designer launch observed (liveness, scope); no Form readback | Section 5 and 6. Launch and scope observed; saved-definition readback not in scope. |
| AC-10 | Not evaluated | No Portal reload or runtime open. |
| AC-11 | Not evaluated | No Refresh Data activation. |
| AC-12 | Not evaluated | FX_InventoryItems not read in T8. |
| AC-13 | Partial | Action inventory section 10; repository audit at the harness. |

## 14. Observed / not-verified classification

- Observed (T8): tab list and closures; zero `/designer/` tabs after cleanup; portal header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; exactly one new Designer tab after one launch click; new Designer scope footer `User / anton.ramos@3mworks.com.ph`; Designer page title configuration; Save disabled; no Form loaded; Edit menu rendered and closed.
- Not verified (T8): the saved state of any prior Designer tab; any Form identity in the new Designer; exactly which Designer tab held the T3 Error dialog (closed unobserved).
- Operator-accepted, not re-observed in T8: the T4 and T6 absence checks; AC-2 hashes.

## 15. Next permitted action (for the coordinator)

Creation is NOT authorized by T8. The next step requires a separate coordinator decision. The fresh Designer at tab index 1 is available for that step, with User scope already identified. Before any creation, the coordinator should confirm whether the Global Objects and Web Assets absence checks need repeating in the new Designer (the operator accepted the T4 results, so T8 did not repeat them).

## Repository confinement (T8)

Files written by the worker in T8: `evidence/EXP-136/t8-designer-tab-cleanup-and-fresh-launch.md` (new), `evidence/EXP-136/t8-fresh-designer-after-launch-and-scope.png` (new screenshot), and `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (T8 checkpoint). The harness computes the repository status and diff audit.
