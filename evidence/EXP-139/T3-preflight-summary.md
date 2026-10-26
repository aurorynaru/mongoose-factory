# EXP-139 T3 - AC-1 read-only preflight (2026-10-27)

Scope of T3: read-only. No content fill, no Edit Browser File OK, no Web Assets OK, no Designer Save, no close/reopen, no portal reload, no runtime navigation, no Refresh Data, no filter click.

Result: **AC-1 passed** (with the limitations listed below).

## Tabs and state

- Tab 0: Mongoose Web Client (Explorer, no Form open). Read-only screenshot only.
- Tab 1: Designer, URL `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx?...&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM&...` (tab title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). At the start: no Form open, no dialog, Save disabled, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (`t3-01`). No session-expiry or sign-in dialog was present.
- Tab 1 at the end: `FX_InventoryDashboard` is the open Form tab, Save disabled, no dialog, footer still User scope (`t3-09`; accessibility snapshot after the final step).

## Identity evidence

| Item | Observation | Evidence |
|---|---|---|
| Account and configuration (Web Client header) | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t3-10` (tab 0) |
| Designer scope | Footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t3-01`, `t3-03`, `t3-09` |
| Form loaded | Opened from the Form menu recent list (item `FX_InventoryDashboard`, listed in `t3-02`). Title bar `FX_InventoryDashboard`; Properties Name `FX_InventoryDashb...` (truncated); Version `User version for us...` (truncated); Form Type Normal; Is Master True | `t3-02`, `t3-03` |
| Asset | Web Assets tree: `FX_Inventory` > `index.html`. Properties: Name `FX_Inventory/index.html`; Content `text/html`; Version `User version for user <masked username>` (snapshot) | `t3-04`, `t3-05`, `t3-06` |

## Asset content (pre-mutation, EXP-136 page)

Read once, read-only, from the accessibility value of the Edit Browser File editor textbox (not by scrolling, typing or JavaScript). The editor itself was not edited. The snapshot collapsed the line breaks, so the readout is not byte-verified.

- File `FX_Inventory/index.html`, Content Type `text/html` (dialog header).
- Start: `<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <title>FX Inventory Dashboard</title> <script ... src="../$app/scripts/UserControl.js">`; style block (`#FX_InvCards`, `.FX_InvCard`, table styling).
- Body: `<h3>FX Inventory Dashboard</h3>`; `<button type="button" id="FX_InvRefresh">Refresh Data</button>`; `<span id="FX_InvStatus">Not loaded</span>`.
- Four metric cards in `#FX_InvCards`: Total Items (`FX_InvTotalItems`), Total Units (`FX_InvTotalUnits`), Low Stock (`FX_InvLowStock`), Out of Stock (`FX_InvOutOfStock`); each `-` initially.
- Table: 7 headers (Item, Description, Warehouse, Location, Quantity, Reorder Level, Status); `<tbody id="FX_InvTableBody">`.
- Script: `render(json)` builds rows and status; `load()` sets `Loading...`, calls `WSForm.invoke("FX_LoadInventoryFromIDO", ...)` then `WSForm.getVarValue("FX_vInventoryJson", ...)`; `FX_InvRefresh` click listener.
- End: `</script> </body> </html>`.
- No `FX_InvHeadline`, `FX_InvFilters`, or gauge markup (expected: those belong to the redesign). This is consistent with the EXP-136 page.

Matches the brief's EXP-136 description (Refresh Data button `FX_InvRefresh`, four metric cards).

## Cancels

1. Edit Browser File dialog: **Cancel** once (ref `e691`, dialog-scoped). Dialog closed; the Web Assets dialog remained. Content not changed (`t3-08`).
2. Web Assets (Global Objects) dialog: **Cancel** once (`e613`). Dialog closed; Designer clean (`t3-09`).

No OK was pressed on any dialog.

## Limitations and discrepancies (for the record)

- Form Name and Version properties are truncated in the Properties grid. Identity rests on the title bar, the Form menu item, the `User version for us...` text and the footer scope, not on the full Name text.
- The Designer tab URL dropped the `MGForm=FX_InventoryDashboard` parameter after the Edit Browser File Cancel (tab listing after that step). The Form remained displayed (title bar, Properties, `t3-08` and `t3-09`). Form identity was therefore established from the UI, not the URL.
- The Web Assets folder `FX_Inventory` was expanded with the keyboard (ArrowRight on the selected tree row) because its expander has no accessibility reference. This changed only the tree view.
- `deny_browser_javascript`: no tool available in this session sets or reads it. Not verified. No browser JavaScript was run by the worker.
- Accessibility refs were taken from fresh snapshots or finds before each action. No "Ref not found" error occurred in T3.

## Action counts (T3)

- Form opened: 1 (`FX_InventoryDashboard`, from the recent-forms list, User version).
- Asset Content editor opened: 1 (read-only); Cancel: 1.
- Web Assets dialog Cancel: 1. Web Assets OK: 0.
- Fills: 0. Edit Browser File OK: 0.
- Designer Saves: 0. Designer close: 0. Designer reopen: 0.
- Portal reloads: 0. Runtime opens: 0. Refresh Data activations: 0. Filter clicks: 0. Runtime Saves: 0.
- Tree selections: 2 (`FX_Inventory` folder, `index.html` item). Tree expansion via keyboard: 1.
- Browser JavaScript authored by the worker: 0.
- Session modals: 0. Sign-in attempts: 0. Credentials typed: 0. Credential values read or recorded: 0.
- Navigations: 0.

## Evidence files (T3)

- `evidence/EXP-139/t3-01-designer-tab1-fresh-user-scope-no-form.png` - Designer before any action: no Form, no dialog, User scope footer, Save disabled. Does not prove any Form identity.
- `evidence/EXP-139/t3-02-designer-form-menu-opened.png` - Form menu with recent list (includes `FX_InventoryDashboard`). Shows the menu only.
- `evidence/EXP-139/t3-03-fx-inventorydashboard-loaded-user-version.png` - `FX_InventoryDashboard` in title bar; Properties Version `User version for us...`; User scope footer. Proves the Form is open and its Version is User (truncated text). Does not show the asset.
- `evidence/EXP-139/t3-04-web-user-control-assets-dialog.png` - Web Assets dialog with folders ($app, FX_Bridge, FX_Inventory, FX_Login, mongoose, sohoComponents, sohoxi). Proves the dialog and folder list only.
- `evidence/EXP-139/t3-05-web-assets-fx-inventory-folder-expanded.png` - FX_Inventory selected, not yet expanded. Proves selection only.
- `evidence/EXP-139/t3-06-asset-index-html-selected-properties.png` - `FX_Inventory/index.html` Properties: Name, Content `text/html`, Version `User version for user an...`. Proves asset metadata (Version text truncated; full value from the snapshot).
- `evidence/EXP-139/t3-07-content-edit-dialog-opened-readonly.png` - Edit Browser File dialog, File `FX_Inventory/index.html`, Content Type `text/html`, editor at the end of the content (`FX_InvRefresh` script, `</html>`). Proves the end of the EXP-136 content visually; the start and middle are established by the accessibility readout under "Asset content" in this summary, not by this image.
- `evidence/EXP-139/t3-08-after-edit-browser-file-cancel.png` - After Cancel: Edit Browser File closed; Web Assets dialog open; Properties shows the Content preview area.
- `evidence/EXP-139/t3-09-after-web-assets-cancel-designer-clean.png` - After the Web Assets Cancel: no dialog; FX_InventoryDashboard open; Save icon greyed; User scope footer. Proves the clean post-T3 state (Save disabled also confirmed by accessibility snapshot).
- `evidence/EXP-139/t3-10-web-client-tab0-account-header-readonly.png` - Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Explorer, no Form. Proves the account and configuration header for the Web Client only.
- Tool-written snapshots and console logs under `evidence/playwright/` (disclosed; not worker-authored).

## AC-1 assessment

- Account `anton.ramos@3mworks.com.ph` and configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`: met (`t3-10`, tab 1 title).
- Designer User scope: met (`t3-01`, `t3-03`, `t3-09`).
- `FX_InventoryDashboard` loaded as the User version: met with the truncation caveat (`t3-03`).
- `FX_Inventory/index.html`, Content `text/html`, Version User: met (`t3-06`, snapshot).
- EXP-136 content (FX_InvRefresh, four metric cards): met by the accessibility readout (above) and `t3-07`.

Not performed in T3 (by design): the redesign fill, Save, reopen, portal reload, runtime open, Refresh and filter click. Budgets preserved: one full-content fill, one ordinary Designer Save, one runtime Refresh Data activation, at most one Needs reorder filter click.
