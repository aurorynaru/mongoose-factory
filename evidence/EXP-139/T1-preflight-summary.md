# EXP-139 T1 - Read-only preflight summary (2026-10-27)

**Result: BLOCKED at the session gate. Preflight NOT completed.** The Mongoose session expired while the read-only Form open of `FX_InventoryDashboard` was in progress. Per the standing session-expiry procedure, the modal's OK was clicked once. The tab then showed a Mongoose sign-in page rather than the Infor CloudIdentities form, so the one permitted navigation was not used and no sign-in was attempted. The expired Designer tab is left for the coordinator.

## Gate table

| Gate | Result | Evidence |
|---|---|---|
| Tab list before first selection | Done. Tab 0 = Web Client (runtime `FX_LoginPortal` from EXP-138, URL `favoriteContext=FX_LoginPortal`). Tab 1 = Designer (`MGForm=FX_LoginPortal`). | Tool result only |
| Tab selection (tab 1) before screenshots and inputs | Succeeded. Tab 0 was not selected or acted on. | Tool result only |
| Designer clean state before the task | Observed: `FX_LoginPortal` active, Version `User version for user ...`, Form Type Normal, Script Language Visual C#, Save and Undo disabled, no dialog, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. | Snapshot `evidence\playwright\page-2026-10-26T17-46-06-291Z.yml` |
| Form menu recent list contains `FX_InventoryDashboard` | Observed (find `e649`). | Tool result |
| Open `FX_InventoryDashboard` from the recent list | **Not established.** After the click a `Session Expired` modal appeared (`t1-01`). The tab showed only `FX_LoginPortal`, `FX_LoginUsers` and `IDOs`; no `FX_InventoryDashboard` tab was visible. | `t1-01-designer-fx-inventorydashboard-opened-readonly.png` |
| Session-expiry step: modal OK clicked once | Done (1 click). | Snapshot `evidence\playwright\page-2026-10-26T17-46-31-826Z.yml` |
| Navigation permitted once only if no sign-in form appears in that tab | **Not used.** A Mongoose `Sign In` page appeared in the Designer tab (not the Infor CloudIdentities form). | `t1-02-designer-tab-after-session-expired-ok-signin-dialog.png` |
| Sign-in in the Designer tab | **Not performed.** The stale-Designer recipe forbids re-login in the Designer. | `recipes/session/session-expiry-and-stale-designer.md` |
| Account header identity (Web Client) | Not re-read in T1. Tab 0 header last observed in EXP-138 T10: `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Not re-verified in this task. | EXP-138 record |
| Designer editing scope | Observed before the modal: `ScopeType: User`. Not re-observed after the modal. | `t1-01` |
| `FX_InventoryDashboard` User version | **Not established** (not opened). | - |
| `Edit > Web User Control Assets`, `FX_Inventory/index.html` (Content text/html, Version User), content read-only, Cancel | **Not performed.** | - |

## Observations on the sign-in page (`t1-02`, viewed)

- Full-page Infor-styled `Sign In` in the Designer tab (not a modal over the Designer).
- Username field shows the account email (the account identity the operator uses; not a credential). Password empty. Configuration combobox empty.
- Red error text: `Error retrieving configuration info for Config Group: Default and config name G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT Invalid Configuration Name: G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- `Use Workstation Login` checkbox present (not touched).
- Not established: whether the configuration error is a transient portal state or persistent. Not investigated (out of scope).

## Mutation ledger T1

- Designer Save 0; OK 0 on any editing dialog; fills 0; Cancel 0; Form open 0 (not confirmed); Form close 0; Form reopen 0.
- Designer edits 0; components, variables, assets, Captions, events 0 changed.
- Session: modal OK 1; navigation 0; sign-in attempts 0; credentials typed 0; credential values read or recorded 0.
- Portal reload 0; runtime open 0; Refresh Data 0; filter click 0; FX_InventoryItems read or write 0.
- Browser JavaScript authored by the worker 0. `deny_browser_javascript` could not be set or read by the worker (no tool to set or read it); recorded as **unverified**, as in EXP-138 T1.
- Tab 0 (Web Client) not selected, screenshotted or acted on in T1.

## Browser ledger T1

- Tab lists 1; tab selects 1 (tab 1); snapshots 2 (one initial full read, one after the sign-in page appeared); finds 3 successful (`FX_InventoryDashboard`, `Version`, `Session Expired`) plus 1 rejected call (invalid regex, no effect); clicks 3 (Form menu, recent-list item, modal OK); screenshots 2; Read of the screenshot files 2.
- Recovery: no ref-not-found errors. The recovery allowance was used once for the session gate, as the procedure allows.
- Tool-written snapshots and console logs under `evidence/playwright/` are disclosed, not worker-authored (`page-2026-10-26T17-46-06-291Z.yml`, `page-2026-10-26T17-46-14-637Z.yml`, `page-2026-10-26T17-46-31-826Z.yml`, `console-2026-10-26T17-45-57-460Z.log`, `console-2026-10-26T17-45-57-462Z.log`).

## Source observations (read-only, before any browser mutation)

- `assets/FX_Inventory/index.flat.html`: 382 lines, read in full. Starts `<!DOCTYPE html>` (line 1), includes `../$app/scripts/UserControl.js` (line 7), has `FX_InvRefresh` (line 118), `FX_InvHeadline` (line 125), `FX_InvFilters` group (line 138), the stock gauge markup (`FX_InvGauge`, `FX_InvLevel`), `In Stock` (line 165), `WSForm.invoke("FX_LoadInventoryFromIDO", ...)` (line 342) and `WSForm.getVarValue("FX_vInventoryJson", ...)` (line 343), ends `</body>` then `</html>` (lines 381-382).
- **AC-2 wording correction:** the brief's AC-2 says the readback should show the bridge calls at the *end* of the content. In the committed flush-left file the two bridge calls are at lines 342-343, inside the final `<script>` block, followed by the closing script, `</body>` and `</html>`. The T2 readback must check for the bridge calls by content, not as the last lines. Recorded here so the readback criterion is applied correctly.
- SHA-256 `52e6ccd2...` **not recomputed** (no shell available to the worker). Identity is operator-supplied only.

## Acceptance after T1

- AC-1: **not met** (account and configuration not re-read in this task; Designer User scope observed before the modal; FX_InventoryDashboard User version not established; asset content not read).
- AC-2 to AC-9: **not evaluated**.

## Next permitted action (not authorized in T1)

- Coordinator: restore the Designer session (operator reload of the Designer tab or a session-expiry task under the standing procedure) before any further preflight. Then rerun T1 from a fresh snapshot.
- Do not perform the content fill, Save, reopen, portal reload or runtime steps until the read-only preflight (AC-1) passes.
