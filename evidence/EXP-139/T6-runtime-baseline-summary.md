# EXP-139 T6 - Runtime portal reload and pre-refresh baseline (AC-5, partial)

Run R-20261027-014540-dC5I, cycle 7, task T6, 2026-10-27. Stopped with FX_InventoryDashboard open at runtime in its verified initial state. Refresh data was NOT activated, no filter was clicked, and the Designer was not touched.

## Starting state

- Tab list (read-only) before any selection: tab 0 = Web Client (portal Mongoose tab, Explorer shown, no Form open, header button `<SECRET_MONGOOSE_USERNAME> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); tab 1 = Designer (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, FX_InventoryDashboard open and clean as left by T5).
- Tab 0 selected, then a fresh snapshot. Tab 0 was not used before T6 in this cycle.

## Actions, in order

| # | Action | Result |
|---|---|---|
| 1 | Tab list (read-only); select tab 0; fresh snapshot | Tab 0 foreground; Web Client with no Form open |
| 2 | ONE top-level navigation (`browser_navigate`) to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` | A `beforeunload` dialog appeared; accepted once. The portal then loaded to its System Administrator workspace with a live session. No Session Expired modal, no Infor CloudIdentities sign-in form |
| 3 | Dismissed the `DistributionIFSContactUs` portal notification with its own × (ref f2e409), once | Banner closed. Its "here" link was not clicked |
| 4 | Portal "Open navigation menu" clicked once; "Search menu" textbox clicked once and `Mongoose` typed once; result link `Mongoose` (Applications, OS) clicked once | Tab 0 moved to the Mongoose application (in-portal navigation, not a second reload) |
| 5 | Waited ~6 s; `find` for "Sign In" (none); fresh snapshot | Web Client loaded directly. No configuration Sign In control appeared, so no Sign In click was made |
| 6 | Verification screenshot `t6-01` | Header reads `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no Form open |
| 7 | Form menu clicked once; Form > Open clicked once | "Select Form" dialog. Filter pre-filled `FX_LoginUsers` |
| 8 | Filter textbox filled once with `FX_InventoryDashboard` | The grid still listed FX_LoginUsers after the fill and a 2 s wait |
| 9 | One `End` key press in the focused filter field (a UI keystroke; it does not submit the dialog) | Grid refreshed to one row, `FX_InventoryDashboard` |
| 10 | Row `FX_InventoryDashboard` clicked once; dialog OK clicked once | Tab URL gained `favoriteContext=FX_InventoryDashboard`. Form panel titled `FX_InventoryDashboard`; the Web User Control frame exposed accessibility references |
| 11 | Waited ~6 s; fresh snapshot; screenshot `t6-02` | Pre-refresh initial state (see Observations) |
| 12 | Read-only console read, error level | 5 errors, all `Permissions policy violation: unload is not allowed` from Mongoose scripts (`default-app.js`, `wswebform-app.js`, `yggdrasil-core.js`). Cause not established |
| 13 | Stopped | No Refresh data click, no filter click, no runtime Save, no Designer action, no further navigation or reload |

## Observations (seen in t6-01, t6-02 and the accessibility tree)

- Account header (t6-01, t6-02): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Form panel title bar: `FX_InventoryDashboard`.
- Web User Control, initial state:
  - heading `Inventory`; status `Not loaded`; button `Refresh data` (enabled);
  - headline `Refresh to load the latest stock levels.`;
  - gauge track empty (no fill);
  - legend `- Out of Stock`, `- Low Stock`, `- In Stock` and `- units on hand in - items` (unpopulated placeholders);
  - filter group `Show items`: All (pressed), Needs reorder, Out of Stock; search box `Find an item, warehouse or location`;
  - table headers Item, Warehouse, Stock level, Status (sort indicator); one row `No stock loaded yet. Select Refresh data.`
- No populated row, no FX-ITEM identifier and no total was visible before refresh.
- The dark-theme styling is visible in t6-02, which is the redesign and not the EXP-136 four-card page.

## Evidence files and what each proves

- `evidence/EXP-139/t6-01-web-client-after-portal-reload-header.png`: the Web Client after the portal reload and Mongoose launch. Proves the account and configuration header in the runtime session and that no Form is open. Does NOT prove any Form content.
- `evidence/EXP-139/t6-02-runtime-fx-inventorydashboard-pre-refresh-initial-state.png`: FX_InventoryDashboard open at runtime, pre-refresh. Proves the Form identity (title bar), the dark-theme redesign served to the runtime session, and the initial visible state (Inventory, Not loaded, Refresh data, the empty gauge and legend, the filter group, the search box, and the empty-table text). Does NOT prove the stored bytes of the asset; that remains an accessibility/visual check of one runtime session. Does NOT prove any post-Refresh behaviour.
- Tool-written snapshots and console logs under `evidence/playwright/` (tool output, not worker-authored).

## AC-5 assessment

**AC-5: partially established.** Established: the account header was re-established after one portal reload; FX_InventoryDashboard opened at runtime; the redesigned page was visible before Refresh with heading `Inventory`, status `Not loaded`, button `Refresh data` and empty-table text `No stock loaded yet. Select Refresh data.`. Not established: the Refresh Data activation, which is deferred to the next task.

## Brief inconsistency (for the coordinator)

The bounded instruction's step 5 says "Select Refresh data" while its step 6 says "Do NOT click Refresh data in T6". The T6 instruction was followed: the Refresh data button was not activated. The next task must decide whether Refresh data is performed.

## Tab-selection compliance

- Tab 0 was selected before each input and screenshot except as noted below. The tab list after each selection showed tab 0 as current.
- Omission: the `beforeunload` dialog (step 2) was accepted without a separate tab selection immediately before it. Tab 0 was the current tab per the tab list before the navigation.
- Disclosure: several tab selections in steps 3 to 10 were issued in the same tool-call block as the input they precede (for example select + click, select + type, select + press key). The block does not guarantee their order. Each following tab list and each screenshot showed tab 0 as the current, foreground Web Client, so no wrong-tab input is observed. This is a compliance gap and is recorded as such.

## Mutation and action counts (T6)

- Top-level navigations: 1 (the permitted runtime-verification reload).
- `beforeunload` dialog accepted: 1.
- Portal banner dismissals: 1 (its × only).
- Portal navigation menu opened: 1; portal search typed: 1; Mongoose launched from portal search: 1.
- Configuration Sign In clicks: 0 (no configuration Sign In control appeared).
- Form menu opened: 1; Form > Open: 1; Select Form filter fill: 1; `End` key press: 1; row click: 1; Select Form OK: 1. Runtime Form opened: 1.
- Refresh data activations: 0. Runtime filter clicks: 0. Runtime Saves: 0.
- Designer (tab 1) actions: 0. Designer Saves: 0. Content fills: 0. Edit Browser File OK / Web Assets OK: 0.
- Coordinate clicks: 0. Browser JavaScript authored or run by the worker: 0. Credentials typed or read: 0.
- `FX_InventoryItems` rows, Form Script, components, variables and other assets: not changed. Not read in T6.
- Changed objects in T6: none.

## Budgets after T6

- Full-content fill: 1 of 1 used.
- Ordinary Designer Save: 1 of 1 used.
- Portal reload: 1 used by T6. No further reload is permitted without new operator authorization.
- Refresh data: 1 remaining (not activated).
- Needs reorder filter: at most 1 remaining (not clicked).

## Final state

- Tab 0 (Web Client): foreground; FX_InventoryDashboard open at runtime in its verified initial state; Save disabled; no dialog open.
- Tab 1 (Designer): untouched in T6; FX_InventoryDashboard open and clean as left by T5.

## Knowledge state (T6)

- Portal top-level reload, portal-search launch of Mongoose, and Form > Open > Select Form (filter, row, OK) opened FX_InventoryDashboard at runtime with the redesign present before Refresh: **observed** (one execution).
- Redesign visible in the runtime Web User Control before Refresh (t6-02): **observed** (one execution). Stronger than the Designer-session readback because it is served to a fresh runtime session, but it is one run and not byte-verified.
- Programmatic fill in the Select Form filter did not refresh the grid; one `End` key press did: **observed** (one execution).
- Web User Control accessibility references available at runtime (no coordinate fallback needed): **observed**.
- Error-level console messages `Permissions policy violation: unload is not allowed`: **observed**; cause **unresolved**.
- `deny_browser_javascript`: **unverified** (no tool in this session sets or reads it; no browser JavaScript was authored).
- AC-6, AC-7, AC-8 and AC-9: not evaluated in T6.
- Acceptance or replay: **not claimed** (operator review).

## Open items for the coordinator

1. Decide whether the next task performs the single Refresh data activation (AC-6) and at most one Needs reorder filter click (AC-7). Resolve the step 5 / step 6 conflict above first.
2. Form-definition clause of the T4 Save response: still **unresolved**.
3. Misnamed `evidence/EXP-139/t4-02-edit-browser-file-baseline-expX136-before-fill.png`: operator decision; not renamed or deleted.
4. Tab-selection compliance gaps in T5 and T6 (and unverifiable compliance in T1 to T4).
5. Console `unload` permissions-policy errors: cause not established; they do not appear to originate in the dashboard asset.
