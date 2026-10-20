# EXP-122: Hello World Part 8 Phase 4b: GridOrders' four property-bound columns, Read-Only/Disable, and the StaticCart Width correction

Status: accepted (observed)
Run: R-20261020-100847-Mj02. Worker session 1543fab3-33bf-41c8-9453-b8e0f301269c (T1 cycle 0; T2 cycle 1; T3 cycle 2; T4 cycle 3; T5 cycle 4; T6 cycle 5; T7 cycle 6).
Mode: LEARNING MODE. Findings are observed only.

## Objective

Finish Hello World Part 8 Phase 4 (transcript 08:26-09:47) on FX_CustomerPortal (User scope), FlexLayoutMain > Region04: cartpage:

- T2: StaticCart Width 20 (EXP-121 finding 1: Width reads 29.559322033898304).
- T3: add two GridColumns to GridOrders through the Edit grid column(s) dialog (New), and rename the four to GridColOrdNum, GridColItem, GridColCount, GridColCustID.
- T4 / T5: bind each column to Property with Binding object.FX_OrderNumber, object.FX_Item, object.FX_Count, object.FX_CustomerID.
- T6: GridOrders Behavior Read-Only/Disable = True.
- T7: close/reopen readback and final audit.

Regenerate is not part of this experiment (EXP-118).

## Sources reviewed (T1, before any browser interaction)

- `AGENTS.md` (repository file).
- `docs/mongoose/transcripts/hello-world-pt8.md` lines 135-153 (Phase 4 table) and lines 396-409 (transcript 8:19-9:47).
- `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only, located by a heading-only search for "Outcome" (lines 1033, 896, 634): `experiments/EXP-121-hello-world-part-8-phase-4a-cart-page-components.md` (line 1033), `experiments/EXP-120-hello-world-part-8-phase-3-count-and-add-to-cart.md` (line 896), `experiments/EXP-068-R2-hello-world-part-4-section-8b-um-description-grid-column.md` (line 634).
- No other records were read.

## T1: Designer gate (read-only; no change made)

Browser tabs (listed before any selection):

- Tab 0: Mongoose Web Client (not selected, not acted on).
- Tab 1: Infor Mongoose Application Development Framework, Web Designer. Selected (succeeded).

Starting state, observed in the Designer snapshot:

- Scope: toolbar reads `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No Site Default or Group scope was used.
- Form tabs: only `FX_CustomerPortal`, selected. Form tab title "FX_CustomerPortal". Form properties Name FX_CustomerPortal, Form Type Flex.
- Save: disabled (`button "Save" [disabled]`). Regenerate Form: disabled. Undo and Redo: disabled.
- No dialog, list, or editor open.
- Console baseline: **2 errors, 0 warnings** (the count shown in the tool output at the start of the task and after every action; it never rose during T1).
- No session expiry, sign-in page, "Logout Successful", or server-event error was seen.

Components tree under FlexLayoutMain > Region04: cartpage (expanded with the tree's Expand button, view only). Observed order:

1. `Region04: cartpage`
2. `StaticCart`: Type Static; Data Source blank; Pane 0; Container FlexLayoutMain; Tab 0.
3. `GridOrders`: Type Grid; Data Source `objects`; Pane 0; Container FlexLayoutMain; Tab 0. Children, in order:
   - `gridColumn3_USER`: Type GridColumn; Container GridOrders.
   - `gridColumn4_USER`: Type GridColumn; Container GridOrders.
4. `ButtonCheckout`: Type PushButton; Container FlexLayoutMain; Tab 0.
5. `Region05: spacer2`: the next region, outside Region04.

Result: **matches the expected tree** (StaticCart; GridOrders with gridColumn3_USER and gridColumn4_USER; ButtonCheckout). Nothing else appears under Region04.

Readings (each component selected by its Components row Type cell; header and Name row confirmed):

| Component | Field | Reading |
| --- | --- | --- |
| StaticCart (header "StaticCart (Static)") | Caption | FX_sCart |
| | Type / Theme Class / Justification | Static / FX_Header / Center |
| | Size (summary) | `29.5593220338983; 1.5` |
| | Width | `29.559322033898304` (not 20; EXP-121 finding 1 is still present) |
| | Height | 1.5 |
| | Flex Attributes | Index 4, Target cartpage |
| GridOrders (header "GridOrders (Grid)") | Binding Type | Primary Collection Grid |
| | Binding | `objects` |
| | Size | `35; 15` (Width 35, Height 15) |
| | Behavior > Read-Only/Disable | `False` (the change to True is T6) |
| | Data Source group | not expanded (view only was not needed for the T1 readings) |
| gridColumn3_USER (header "gridColumn3_USER (GridColumn)") | Caption | blank |
| | Binding Type | None |
| | Binding | blank |
| | Size | 12.5; 5.88235294117647 |
| gridColumn4_USER (header "gridColumn4_USER (GridColumn)") | Caption | blank |
| | Binding Type | None |
| | Binding | blank |
| | Size | 12.5; 5.88235294117647 |

Baseline recorded: GridOrders' Binding Type and Binding match the expected Primary Collection Grid / objects. Read-Only/Disable is False. StaticCart's Width is 29.559322033898304, as EXP-121 left it. The two columns have blank Captions and no bindings. These readings were observed only; no value was edited.

Screenshot (gate; one, as the brief requires): `evidence/EXP-122/t1-gate-tree-gridorders-properties.png`.
- Shows: the FX_CustomerPortal tab title; the Region04 cartpage tree with StaticCart, GridOrders (Grid, objects, FlexLayoutMain) and gridColumn3_USER and gridColumn4_USER under it (the ButtonCheckout row sits below the visible area); the Properties panel for "GridOrders (Grid)" with Behavior Read-Only/Disable False; the status-bar scope `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; the greyed Save icon in the top toolbar; the canvas cart column ("Cart:") with a grid and a Checkout button.
- Does not show: StaticCart's Width or Size, the column Bindings, ButtonCheckout's properties, or the console count (the count is from the tool output, not the image).

## T1 observations (observed only)

1. Untargeted accessibility snapshots exceed the inline limit once the Components tree is expanded (about 59,000 to 64,000 characters, 1,389 to 1,504 lines). The tool then writes the snapshot to a tool-results file, and the Read tool denies that directory, so the file cannot be read. From here on, use find to locate a row or panel, then a targeted snapshot of it.
2. Three "Ref not found" errors occurred. Each was recovered with one fresh untargeted snapshot (the tool-written file, unread), then a find and a targeted snapshot, and then a click from that targeted snapshot. The three were: the targeted snapshot of the Properties panel ref e466 after the StaticCart selection; the GridOrders Type-cell click (ref e1666) before that recovery; and a targeted snapshot of the gridColumn3_USER row (ref e1688) after the Behavior group was expanded. Refs of the Components rows and the Properties panel were regenerated after selections and after the expansion.
3. The Components tree's Expand button expands every row, including Region05 and the GridColumns (view only).
4. In the Properties panel, a single click on the Behavior group name selects the row but does not expand it. A double-click on the name expands it. Its children (Breadcrumb, Read-Only/Disable, Tab Read-Only Field, Hidden, No Tab Stop, Auto Complete, Add/Details and Find Form, New and Copy Operations, Dynamic Enabling and Disabling, Right-Click Menu, Drag Image, Enabled When, Required When, Theme Class When, Visible When) are then listed after it. The group's expansion is view only.
5. A new column's Caption is blank in the Properties panel, as EXP-068-R2 noted for a new grid column.

## Cumulative browser action audit

Counts for T1 only. Cumulative totals will be added at each later task.

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection |
| Tab select | 1 | Index 1 (Designer), succeeded |
| Clicks, successful | 8 | 7 single clicks and 1 double-click. Expand (Components); StaticCart Type cell; GridOrders Type cell (twice, the second for the screenshot); Behavior group name (single, then double-click to expand); gridColumn3_USER Type cell; gridColumn4_USER Type cell |
| Clicks, failed (Ref not found, not executed) | 1 | GridOrders Type cell, ref e1666 |
| Coordinate clicks | 0 | |
| Hovers | 0 | |
| List opens | 0 | |
| Dialog opens (OK or Cancel) | 0 | |
| New activations | 0 | |
| Text entries (fill or type) | 0 | |
| Key presses | 0 | |
| Drags | 0 | |
| Undo | 0 | |
| Designer Saves | 0 | No Save in T1 |
| Regenerate, Delete Form Definition, Select Form OK | 0 | |
| Form closes or reopens | 0 | |
| Prompts | 0 | No prompt appeared |
| Re-logins | 0 | |
| Server-event errors | 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at start, after every action, and at the end |
| Untargeted snapshots | 6 | 2 inline (start; after Expand). 4 too large, written by the tool to a tool-results file and not read: one after the StaticCart click, and three recovery snapshots after the three Ref not found errors |
| Targeted snapshots | 13 | 11 succeeded; 2 Ref not found (e466, e1688) |
| Find (read-only) | 8 | "Search Properties" 4 times; "GridOrders" 2 times; "gridColumn3_USER" 1 time; "gridColumn4_USER" 1 time |
| Screenshots | 1 | `evidence/EXP-122/t1-gate-tree-gridorders-properties.png` |

Errors and recovery: 3 Ref not found errors (2 targeted snapshots, 1 click). Each was recovered as described under T1 observation 2.

Note on the heading search: a Grep for "Outcome" headings was run on three experiment records to locate the Outcome sections (lines only). That search is not counted as a browser action.

## T2: StaticCart Width 20 (one Designer Save)

Start of task (cycle 1): AGENTS.md re-read; the record's T1 part read. Browser tabs listed before the first selection (tab 0 Web Client, tab 1 Designer); tab 1 selected (succeeded). Console at task start: **2 errors, 0 warnings**. Designer: User scope (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), FX_CustomerPortal the only Form tab, Save disabled, no dialog or list open. No session expiry, sign-in page, "Logout Successful", or server-event error was seen.

An untargeted snapshot was too large to return inline (about 63,600 characters, 1,504 lines). The tool wrote it to a tool-results file outside the repository; the Read tool denies that directory, so it was not read. Targeted snapshots of the Components row and the Properties panel were used instead (recorded as a limitation, per EXP-114).

Steps, in order:

1. Find "StaticCart" → targeted snapshot of its Components row (ref e1468). Console 2.
2. Click the StaticCart row Type cell (ref e1471). Properties header reads `StaticCart (Static)`; targeted snapshot of the Properties panel shows Name `StaticCart`. Console 2.
3. Read before entry (view only; the Layout group was already expanded in this panel): Unit `Char`; Size `29.5593220338983; 1.5`; **Width `29.559322033898304`**; Height `1.5`; Lock Size `False`; Flex Attributes `Index: 4 Target: cartpage`. Caption FX_sCart, Theme Class FX_Header, Justification Center, Read-Only/Disable False. Console 2.
4. Mouse wheel (deltaY 400) to bring Layout into view. **It scrolled the Components tree, not the Properties panel** (view only; no value changed). The Properties panel did not move. Console was checked at the next output: 2.
5. Screenshot `t2-01-staticcart-layout-before-entry.png`: shows the StaticCart header, Name, Caption, Theme Class, Justification and User scope. **It does not show Layout** (below the visible panel area).
   Screenshot `t2-02-staticcart-layout-visible-before-entry.png`: taken after the wheel. **It shows the Components tree scrolled to ButtonCheckout and Region05/footer, not Layout.** The filename is misleading; it is kept as an unhelpful capture.
6. Click the Width value cell (ref e2746). The Width editor opened (textbox ref e2823, value `29.559322033898304`, active and selected). Console 2. Screenshot `t2-03-width-editor-before-entry.png` shows the Layout group: Size `29.5593220338983;...`, Width editor with `29.559322033898304` selected, Height 1.5, Lock Size False, Flex Attributes Index 4 Target cart... This is the Layout before the entry, with the editor open.
7. Fill `20` into the Width editor (one plain fill). No console count was shown in this output; checked at the next snapshot: 2.
8. Press Tab once to commit. No console count in the key-press output; checked at the next snapshot: 2.
9. Targeted snapshot of the Properties panel (ref e1696). Width gridcell reads **`20`**; Size summary reads **`20; 1.5`**; Height reads `1.5` (not edited); no editor left open (no active textbox in the Width row). Console 2. No correction was needed.
   Screenshot `t2-04-width-20-before-save.png` (before the Save): Layout visible with Size `20; 1.5`, Width `20`, Height `1.5`, Lock Size False; the toolbar Save and Undo icons are now active (a pending change).
10. Find "Save" → targeted snapshot of the Save button (ref e15, inner ref e2825, enabled: no `[disabled]`). Click Save once (ref e2825). Console 2 after the click.
11. Targeted snapshot of the Save button (ref e15): `button "Save" [disabled]`. Save is now disabled, which shows the change was written. Console 2.
    Screenshot `t2-05-after-save-response.png` (after the Save): a toast reads **"Save — Form [FX_CustomerPortal] and global object(s) were saved."**. Layout shows Size `20; 1.5`, Width `20`, Height `1.5`; the toolbar Save icon is greyed.

Result (observed): the StaticCart Width changed from `29.559322033898304` to `20` with one entry and no correction. The Size summary is `20; 1.5`. Height stayed 1.5. There was one Designer Save, with the standard toast and Save disabled afterwards. No list, dialog, prompt, server-event error, or console rise occurred. No other property was edited.

Findings (observed only):
1. The EXP-121 finding 1 case (re-entering the value that was already displayed) was not repeated here: the field read `29.559322033898304` before the entry, and `20` differs from it, so this entry was a real change. Whether the EXP-121 result was a non-registered re-entry remains unresolved (inference only).
2. The Width editor was reached by a single click on the Width value cell, and the editor's textbox was reachable through a targeted snapshot of the Properties panel.
3. Persistence is **not** claimed from this same-session readback. T7 decides persistence after a close and reopen.

Counts for T2 only:

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection in this task |
| Tab select | 1 | Index 1 (Designer); succeeded |
| Clicks, successful | 3 | StaticCart Type cell; Width value cell; toolbar Save |
| Clicks, failed | 0 | |
| Coordinate clicks | 0 | |
| Double-clicks | 0 | |
| Mouse wheel | 1 | Scrolled the Components tree, not the Properties panel; no value changed |
| Hovers | 0 | |
| List opens | 0 | |
| Dialog opens (OK or Cancel) | 0 | |
| New activations | 0 | |
| Text entries (fill) | 1 | Width `20` into the Width editor (one fill) |
| Key presses | 1 | Tab (commit of Width) |
| Drags | 0 | |
| Undo | 0 | |
| Designer Saves | 1 | Response: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled afterwards |
| Regenerate, Delete Form Definition, Select Form OK | 0 | |
| Form closes or reopens | 0 | |
| Prompts | 0 | None appeared |
| Re-logins | 0 | |
| Server-event errors | 0 | |
| Ref not found | 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at start and after every action |
| Untargeted snapshots | 1 | Too large to return inline; tool-written file, not read |
| Targeted snapshots | 6 | All succeeded: Components row e1468; Properties e1696 (×3); Save e15 (×2) |
| Find (read-only) | 3 | "StaticCart"; "Search Properties"; "Save" |
| Screenshots | 5 | `t2-01` through `t2-05` (see inventory; t2-01 and t2-02 do not show Layout) |

## Cumulative browser action audit (T1 and T2)

| Action | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list | 1 | 1 | 2 |
| Tab select | 1 | 1 | 2 |
| Clicks, successful | 8 (7 single, 1 double) | 3 | 11 (10 single, 1 double) |
| Clicks, failed (Ref not found) | 1 | 0 | 1 |
| Coordinate clicks | 0 | 0 | 0 |
| Double-clicks (counted in successful clicks above) | 1 | 0 | 1 |
| Mouse wheel | 0 | 1 | 1 |
| Hovers | 0 | 0 | 0 |
| List opens | 0 | 0 | 0 |
| Dialog opens (OK or Cancel) | 0 | 0 | 0 |
| New activations | 0 | 0 | 0 |
| Text entries (fill) | 0 | 1 | 1 |
| Key presses | 0 | 1 | 1 |
| Drags | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 |
| Prompts | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Ref not found | 3 | 0 | 3 |
| Untargeted snapshots | 6 (2 inline, 4 tool-written) | 1 (tool-written) | 7 (2 inline, 5 tool-written; none read) |
| Targeted snapshots | 13 (11 ok, 2 Ref not found) | 6 (all ok) | 19 (17 ok, 2 Ref not found) |
| Find (read-only) | 8 | 3 | 11 |
| Screenshots | 1 | 5 | 6 |
| Form closes or reopens | 0 | 0 | 0 |
| Console error count | 2 errors, 0 warnings throughout | 2 errors, 0 warnings throughout | 2 errors, 0 warnings throughout |

Note: the T1 "Ref not found" count is 3 (targeted e466 and e1688, plus the click at e1666). The T1 table's per-row labels are kept as written in T1.

## T3: GridOrders' four GridColumns (Contained Components; one Designer Save)

Start of task (cycle 2): AGENTS.md re-read. Browser tabs listed before the first selection (tab 0 Web Client, tab 1 Designer); tab 1 selected (succeeded). Console at task start: **2 errors, 0 warnings**. Form clean: Save disabled; User scope (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`); no dialog open. No session expiry, sign-in page, "Logout Successful", or server-event error was seen.

No untargeted snapshot was taken in T3. All reads used find and targeted snapshots of the Components row, the Properties panel, the dialog, and the toolbar Save button. Every click used a reference from a snapshot taken earlier in this task. No Ref not found error occurred.

Steps, in order (console read at each output; 2 errors, 0 warnings every time):

1. GridOrders selected: targeted snapshot of its Components row (ref e1492), then Type-cell click (ref e1495). Properties header reads `GridOrders (Grid)`; Name row reads `GridOrders`. Binding Type `Primary Collection Grid`, Binding `objects`, Read-Only/Disable `False`, Size `35; 15`. Save disabled (clean Form). Screenshot `t3-01-gridorders-selected-before-icon.png`.
2. Edit-grid-column icon located: the canvas has two icons at the top-left of the cart grid, at about (899, 267) and (924, 267). Find "Edit grid column" found no accessible name before hover.
3. **Coordinate hover** at (899, 267) (`mouse_move_xy`). Find then returned tooltip `Edit grid column(s)`. Screenshot `t3-02-icon-hover-tooltip.png` shows the tooltip under the blue icon.
4. **Coordinate click** at (899, 267), once (the one authorized icon click). The `Contained Components` dialog opened (find; targeted snapshot ref e2818).
   - Dialog title: `Contained Components`.
   - Rows before any change: `gridColumn3_USER` (position 0), `gridColumn4_USER` (position 1). Exactly the two expected rows.
   - Dialog toolbar (bottom left): + (New), trash, up, down. OK, Cancel, Help at the bottom.
   - Screenshot `t3-03-contained-components-dialog-open.png`.
5. Select gridColumn4_USER (last row; ref e2845). Hover over the first dialog toolbar button (ref e2850): tooltip `New` confirmed by find.
6. **New #1** (ref e2850), once. One row added: **`gridColumn5_USER`**, position 2 (the last row). Rows then: gridColumn3_USER (0), gridColumn4_USER (1), gridColumn5_USER (2, selected).
7. **New #2** (ref e2850), once, with gridColumn5_USER selected. One row added: **`gridColumn6_USER`**, position 3 (the last row). Dialog lists exactly four rows, in this order: gridColumn3_USER (0), gridColumn4_USER (1), gridColumn5_USER (2), gridColumn6_USER (3). Screenshot `t3-04-dialog-four-rows-before-rename.png`: shows the four rows, gridColumn6_USER selected, its Properties Name `gridColumn6_USER`, Caption blank, Type GridColumn.
8. Renames, in dialog row order. Each: select row (its Name cell is the properties pane's Name value); click the Name value cell (opens the Name editor, textbox active and holding the old name); one plain fill; one Tab; targeted snapshot of the dialog to verify the row label. No correction was needed for any field.

   | Row | Designer name before | Fill (plain) | Verified row label after Tab |
   | --- | --- | --- | --- |
   | 1 (position 0) | gridColumn3_USER | GridColOrdNum | GridColOrdNum |
   | 2 (position 1) | gridColumn4_USER | GridColItem | GridColItem |
   | 3 (position 2) | gridColumn5_USER | GridColCount | GridColCount |
   | 4 (position 3) | gridColumn6_USER | GridColCustID | GridColCustID |

9. Screenshot `t3-05-dialog-four-names-before-ok.png`: the dialog with the four names in order (0 GridColOrdNum, 1 GridColItem, 2 GridColCount, 3 GridColCustID); row 4 selected; Name GridColCustID; Caption blank; Type GridColumn. The Components tree behind the dialog already lists GridColOrdNum and GridColItem under GridOrders.
10. **OK** (ref e2886), once. The dialog closed with no message (find for "Contained Components" returns no match afterwards).
11. Verification after OK (read-only): the Components tree under GridOrders lists, in order, GridColOrdNum (tree row ref e6402), GridColItem (e6427), GridColCount (e6452), GridColCustID (e6477); each with Type GridColumn and Container GridOrders. Their Data Source cells are blank (no binding yet, as expected for T4/T5). Save is enabled (the toolbar Save is not disabled). Screenshot `t3-06-tree-four-columns-before-save.png`: GridOrders selected; the visible rows show GridColOrdNum and GridColItem under GridOrders; GridColCount and GridColCustID are below the visible area of the tree, so the image does not show all four (the four-row order is established by the element positions in the find output).
12. Pre-Save state: targeted snapshot of the Save button (ref e15): enabled; console 2.
13. **Designer Save**, once (ref e3722). Response: the toast `Save` / **"Form [FX_CustomerPortal] and global object(s) were saved."**. Save disabled afterwards (targeted snapshot ref e15: `button "Save" [disabled]`). Console 2. Screenshot `t3-07-after-save-response.png`.

Result (observed): the GridOrders Components tree now has four GridColumn children in this order: **GridColOrdNum, GridColItem, GridColCount, GridColCustID**. The two Designer-added columns were gridColumn5_USER and gridColumn6_USER (renamed to GridColCount and GridColCustID). One Designer Save with the standard toast. No Binding Type, Binding, Caption, Size or Location was edited in the dialog or on the tree.

Observations (observed only):
1. The dialog's New control added rows at the end of the list (position 2 and then position 3). In step 6 the selected row was also the last row, so "after the selected row" and "at the end" cannot be told apart from this run.
2. The new column names are Designer-generated (gridColumn5_USER, gridColumn6_USER). Renaming in the dialog's Name editor worked on the first attempt for all four rows.
3. The Properties pane of a new GridColumn shows Caption blank, Binding Type None, Binding blank (not read in detail in T3; the Caption cell showed blank in the screenshot).
4. **Canvas re-layout after the Save:** in `t3-07-after-save-response.png` the ButtonCheckout ("Checkout") is drawn **above** the grid in the cart column. In the T1 and T3-01 screenshots it was drawn below the grid. The cause is not established (inference: canvas re-render with the new grid columns). ButtonCheckout's properties were not read or edited in T3.
5. The canvas grid in the cart column shows only the header row and no visible column content. The Designer shows GridColumn rows with blank Captions; no visible text was expected (no captions, no bindings yet).

Counts for T3 only:

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection in this task |
| Tab select | 1 | Index 1 (Designer); succeeded |
| Clicks, successful (ref-targeted) | 14 | GridOrders Type cell; dialog gridColumn4 row; New ×2; gridColumn3 row; Name cell row 1; gridColumn4 row; Name cell row 2; gridColumn5 row; Name cell row 3; gridColumn6 row; Name cell row 4; dialog OK; toolbar Save |
| Clicks, coordinate (successful) | 1 | (899, 267): the "Edit grid column(s)" icon click, once |
| Clicks, failed (Ref not found) | 0 | |
| Double-clicks | 0 | |
| Coordinate hovers | 1 | (899, 267): hover to confirm the icon tooltip; coordinate hover on the same icon, needed because the icon has no accessible name |
| Ref hovers | 1 | Dialog first toolbar button (New) to confirm its tooltip |
| List opens | 0 | |
| Dialog opens (OK or Cancel) | 1 open; 1 OK; 0 Cancel | Contained Components |
| New activations | 2 | gridColumn5_USER (position 2); gridColumn6_USER (position 3) |
| Text entries (fill) | 4 | One plain fill per rename: GridColOrdNum, GridColItem, GridColCount, GridColCustID |
| Key presses | 4 | Tab, one per rename (commits each name) |
| Corrections | 0 | No field needed a correction |
| Mouse wheel | 0 | |
| Drags | 0 | |
| Undo | 0 | |
| Designer Saves | 1 | Response: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled afterwards |
| Prompts | 0 | None appeared |
| Re-logins | 0 | |
| Server-event errors | 0 | |
| Ref not found | 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at start and after every action |
| Untargeted snapshots | 0 | |
| Targeted snapshots | 20 | All succeeded. Breakdown: Components row ×2 (e1492); Properties panel ×1 (e1695); dialog ×15 (e2818); toolbar Save button ×2 (e15, before and after the Save) |
| Find (read-only) | 11 | "GridOrders"; "Search Properties"; "Save" ×2; "Edit grid column" ×2; "Contained Components" ×2; "New"; "GridColCustID"; "GridCol" |
| Screenshots | 7 | `t3-01` to `t3-07` (see inventory) |

## Cumulative browser action audit (T1 to T3)

| Action | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 1 | 1 | 1 | 3 |
| Clicks, successful (ref, single) | 7 | 3 (StaticCart Type cell; Width value cell; toolbar Save) | 14 | 24 |
| Clicks, successful (ref, double) | 1 | 0 | 0 | 1 |
| Clicks, coordinate | 0 | 0 | 1 (icon click) | 1 |
| Clicks, failed (Ref not found) | 1 | 0 | 0 | 1 |
| Coordinate hovers | 0 | 0 | 1 (icon tooltip) | 1 |
| Ref hovers | 0 | 0 | 1 (New tooltip) | 1 |
| List opens | 0 | 0 | 0 | 0 |
| Dialog opens (OK or Cancel) | 0 | 0 | 1 open, 1 OK, 0 Cancel | 1 open, 1 OK, 0 Cancel |
| New activations | 0 | 0 | 2 | 2 |
| Text entries (fill) | 0 | 1 | 4 | 5 |
| Key presses | 0 | 1 (Tab) | 4 (Tab) | 5 |
| Corrections | 0 | 0 | 0 | 0 |
| Mouse wheel | 0 | 1 | 0 | 1 |
| Drags | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 | 2 |
| Prompts | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Untargeted snapshots (2 inline, rest tool-written and not read) | 6 | 1 | 0 | 7 |
| Targeted snapshots (Ref not found: 2, both in T1) | 13 | 6 | 20 | 39 |
| Find (read-only) | 8 | 3 | 11 | 22 |
| Screenshots | 1 | 5 | 7 | 13 |
| Form closes or reopens | 0 | 0 | 0 | 0 |
| Console error count | 2 errors, 0 warnings | 2 errors, 0 warnings | 2 errors, 0 warnings | 2 errors, 0 warnings throughout |

Exact click totals (cumulative, T1 to T3): successful clicks 26 = 24 ref single + 1 ref double + 1 coordinate. Failed clicks 1 (T1, Ref not found on the GridOrders Type cell). The T1 and T2 tables above are unchanged; the T3 and cumulative rows supersede the "T1 and T2" heading only for the click rows.

## T7: close/reopen readback and final audit (no Designer Save)

Task (cycle 6). Continuation task: `AGENTS.md` (repository file) and this record's T7 part were the sources used. No other record was read. The worker's context was compacted once during this task; the work is split into part A (before the compaction, reconstructed from the compaction summary, counts approximate) and part B (after it, counts exact).

### Part A: close and reopen (before the compaction; approximate)

- The clean FX_CustomerPortal was closed once through its Form-tab close control. **No save prompt appeared** (no prompt text to record; no "No" was clicked).
- FX_CustomerPortal was reopened once through the Form menu, recent-forms entry.
- After the reopen the Details panel was collapsed. It was expanded with "Expand Panel" (view only), the Components tab was selected, and the Components grid was expanded with its Expand button (view only).
- The tree was read by a targeted snapshot. Screenshot `t7-01-reopened-cartpage-tree.png` shows the top of the tree and the canvas. **The cartpage rows are not in that image** (limitation; the tree read below is the decisive text evidence).
- The StaticCart Type cell was clicked to select it (succeeded). Console 2 errors, 0 warnings.
- Approximate counts for part A: close 1 click; reopen about 2 clicks (Form menu, recent-forms entry); Expand Panel 1; Components tab 1; Components grid Expand 1; StaticCart Type cell 1 (about 7 successful ref clicks in total); at least one untargeted snapshot (too large; tool-written, not read); one screenshot.

### Part B: readback after the reopen (exact counts)

Console at every output in part B: **2 errors, 0 warnings**. Starting state: FX_CustomerPortal open in Designer, User scope (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), no dialog, list, menu or editor open.

Steps, in order:

1. Targeted snapshot of the Properties panel (ref e1512): **Ref not found**. One fresh untargeted snapshot (too large; tool-written, not read). Find "Properties" (refs only). Screenshot `t7-02-state-before-properties-readback.png` (viewed): the Properties header **`StaticCart (Static)`**, Name `StaticCart`; the canvas cart column with the grid headers "Order Nu..." and "Item" and Checkout below the grid; Save greyed; scope bar User.
2. Find "Layout"; targeted snapshot of the Properties tree (ref e962). Read with no expansion click (the Layout rows are listed in the tree): Caption `FX_sCart`, Type `Static`, Read-Only/Disable `False`, Unit `Char`, **Size `20; 1.5`**, **Width `20`**, **Height `1.5`**, Name `StaticCart`.
3. Mouse wheel (deltaY 400) with the pointer at its last position. **It scrolled the Components tree, not the Properties panel** (view only). Screenshot t7-03 was taken and then overwritten by step 4; it is not kept.
4. Pointer moved to (1720, 600) over the Properties panel; mouse wheel (deltaY 500). Screenshot `t7-03-staticcart-layout-state.png` (viewed): Layout visible with Unit `Char`, Size `20; 1.5`, Width `20`; Height is cut at the panel's lower edge (its value `1.5` is from step 2).
5. Targeted snapshot of the tree (ref e1950): **Ref not found**. Find "GridColCustID" (refs only), then a targeted snapshot of the tree (ref e1950) succeeded. **Deviation:** no untargeted snapshot was taken after this Ref-not-found error (the find and targeted snapshot were used instead; the allowance is one untargeted snapshot per error).
6. Click the GridOrders Type cell (ref e3035): GridOrders selected. Screenshot `t7-04-gridorders-selected-properties.png` (viewed): Properties header **`GridOrders (Grid)`**, Name `GridOrders`, **Read-Only/Disable `True`**; Components rows StaticCart (Static), GridOrders (Grid, Data Source `objects`), GridColOrdNum (`object.FX_OrderNum...`), GridColItem (`object.FX_Item`).
7. Targeted snapshot of the Properties tree (ref e962): Binding Type **`Primary Collection Grid`**, Binding **`objects`**, Read-Only/Disable **`True`**, Size `35; 15` (Width 35, Height 15).
8. Pointer move and mouse wheel (deltaY 500). Screenshot `t7-05-gridorders-data-source-behavior.png` (viewed): Data Source group Binding Type `Primary Collection G...` (truncated in the narrow cell), Binding `objects`; Layout Size `35; 15`.
9. Targeted snapshot of the tree (ref e1950): **Ref not found**. One fresh untargeted snapshot (too large; tool-written, not read). Find "GridColOrdNum", then a targeted snapshot of the tree (ref e1950) succeeded.
10. Click the GridColOrdNum Type cell (ref e3060): selected. Screenshot `t7-06-gridcolordnum-data-source.png` (viewed): header **`GridColOrdNum (GridColumn)`**, Name `GridColOrdNum`; the Components row shows Data Source `object.FX_OrderNum...`. The Data Source group is not in view in this image.
11. Targeted snapshot of the Properties tree (ref e962): Caption blank; **Binding Type `Property`**; **Binding `object.FX_OrderNumber`**; Size `12.5; 5.88235294117647`.
12. Pointer move and mouse wheel (deltaY 500). Screenshot `t7-07-gridcolordnum-binding.png` (viewed): Binding Type `Property`; Binding `object.FX_OrderNu...` (truncated; the full value is from step 11).
13. Click the GridColItem Type cell (ref e3085): **Ref not found**. One fresh untargeted snapshot (too large; tool-written, not read). Find "GridColItem"; targeted snapshot of the tree (ref e1950) succeeded; click (ref e3085) succeeded; targeted snapshot of the Properties tree (ref e962): Name `GridColItem`, Type `GridColumn`, Caption blank, **Binding Type `Property`**, **Binding `object.FX_Item`**.
14. Pointer move and mouse wheel (deltaY 500). Screenshot `t7-08-griditem-binding.png` (viewed): header `GridColItem (GridColumn)`; Binding Type `Property`; Binding `object.FX_Item`; the Components rows GridColOrdNum and GridColItem show their Data Source values.
15. Click the GridColCount Type cell (ref e3110): **Ref not found**. One fresh untargeted snapshot (tool-written, not read). Find "GridColCount"; targeted snapshot of the tree (ref e1950) succeeded; click (ref e3110) succeeded; targeted snapshot (ref e962): Name `GridColCount`, Type `GridColumn`, Caption blank, **Binding Type `Property`**, **Binding `object.FX_Count`**. No screenshot was taken of this column's Data Source (deviation; its values come from step 15's snapshot and the Components row in step 17).
16. Click the GridColCustID Type cell (ref e3135): **Ref not found**. One fresh untargeted snapshot (tool-written, not read). Find "GridColCustID"; targeted snapshot of the tree (ref e1950) succeeded; click (ref e3135) succeeded; targeted snapshot (ref e962): Name `GridColCustID`, Type `GridColumn`, Caption blank, **Binding Type `Property`**, **Binding `object.FX_CustomerID`**.
17. Pointer move and mouse wheel (deltaY 500). Screenshot `t7-09-gridcolcustid-binding.png` (viewed): the Components rows **GridColItem (`object.FX_Item`), GridColCount (`object.FX_Count`), GridColCustID (`object.FX_CustomerID`), ButtonCheckout (PushButton, FlexLayoutMain), Region05: spacer2**; Properties header `GridColCustID (GridColumn)`, Binding Type `Property`, Binding `object.FX_Custome...` (truncated; full value from step 16).
18. Find "Save": the toolbar **Save `[disabled]`** (ref e15) and **Regenerate Form `[disabled]`**. The Form is clean.

**Reopened cartpage tree (targeted snapshot at step 5, observed text)**, under Region04: cartpage, in order: `StaticCart` (Static; Container FlexLayoutMain); `GridOrders` (Grid; Data Source `objects`; Container FlexLayoutMain), with children `GridColOrdNum` (GridColumn; `object.FX_OrderNumber`; Container GridOrders), `GridColItem` (`object.FX_Item`), `GridColCount` (`object.FX_Count`), `GridColCustID` (`object.FX_CustomerID`); `ButtonCheckout` (PushButton; Container FlexLayoutMain); then `Region05: spacer2` (outside Region04). Nothing else appears under Region04.

**Canvas for GridOrders in the cartpage column (observed, screenshots t7-02, t7-04, t7-05):** the cart column shows the "Cart:" label; the grid below it, with the headers "Order Nu..." and "Item" visible and a horizontal scrollbar at the grid's foot (the Count and Customer ID columns lie beyond the visible width and are not seen); the grid body is empty (no runtime rows; design view). The Checkout button is drawn **below** the grid (in the T3 post-save image it had been drawn above the grid; see T3 observation 4).

Readback result (part B, observed; read after the close and reopen in the same browser session):

| Component | Field | Reading after reopen | Expected | Result |
| --- | --- | --- | --- | --- |
| StaticCart | Width | `20` | 20 | matches |
| | Size summary | `20; 1.5` | 20; 1.5 | matches |
| | Height | `1.5` | 1.5 | matches |
| GridOrders | Binding Type / Binding | Primary Collection Grid / `objects` | same | matches |
| | Read-Only/Disable | `True` | True | matches |
| | Size | `35; 15` | unchanged | matches |
| GridColOrdNum | Name / Binding Type / Binding | `GridColOrdNum` / Property / `object.FX_OrderNumber` | same | matches |
| GridColItem | Name / Binding Type / Binding | `GridColItem` / Property / `object.FX_Item` | same | matches |
| GridColCount | Name / Binding Type / Binding | `GridColCount` / Property / `object.FX_Count` | same | matches |
| GridColCustID | Name / Binding Type / Binding | `GridColCustID` / Property / `object.FX_CustomerID` | same | matches |
| Tree order under GridOrders | | GridColOrdNum, GridColItem, GridColCount, GridColCustID | same | matches |
| ButtonCheckout | Tree row | PushButton, FlexLayoutMain | present, not edited | present; its properties were **not** read in T7 |

The Data Source cells in the Components list, blank after each T4 and T5 Save (EXP-068-R2 lag), now show the bindings (`object.FX_OrderNum...`, `object.FX_Item`, `object.FX_Count`, `object.FX_Custome...`). The lag cleared after the reopen.

Counts for part B (exact):

| Action | Count | Notes |
| --- | --- | --- |
| Tab list / tab select | 0 / 0 | Not performed in part B; every part B snapshot showed the Designer tab (tab 1) as current |
| Clicks, successful (ref, single) | 5 | GridOrders Type (e3035); GridColOrdNum Type (e3060); GridColItem Type (e3085); GridColCount Type (e3110); GridColCustID Type (e3135) |
| Clicks, failed (Ref not found, not executed) | 3 | e3085, e3110, e3135 |
| Clicks, coordinate / double | 0 / 0 | |
| Pointer moves (no click; before each Properties scroll) | 5 | to (1720, 600) |
| Mouse wheel | 6 | 1 scrolled the Components tree (step 3, view only); 5 scrolled the Properties panel (steps 4, 8, 12, 14, 17) |
| Hovers | 0 | |
| List opens / dialog opens / New activations | 0 / 0 / 0 | |
| Text entries / key presses | 0 / 0 | |
| Drags / Undo | 0 / 0 | |
| Designer Saves | 0 | None in T7 |
| Regenerate, Delete Form Definition, Select Form OK | 0 | |
| Form closes / reopens (part B) | 0 / 0 | The close and reopen were in part A |
| Prompts | 0 | None in part B |
| Re-logins / server-event errors | 0 / 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at every output |
| Untargeted snapshots | 5 | All too large; tool-written to a directory outside the repository; not read. Taken after e1512, e1950 (step 9), e3085, e3110, e3135. No untargeted snapshot after the step 5 error (deviation, see step 5) |
| Targeted snapshots | 14 | 11 succeeded; 3 Ref not found (e1512 at step 1; e1950 at step 5; e1950 at step 9). Successful: e962 ×6 (steps 2, 7, 11, 13, 15, 16) and e1950 ×5 (steps 5, 9, 13, 15, 16) |
| Find (read-only) | 8 | "Properties"; "Layout"; "GridColCustID" ×2; "GridColOrdNum"; "GridColItem"; "GridColCount"; "Save" |
| Screenshots | 9 calls (8 files) | t7-02 to t7-09; t7-03 was written twice (step 3's version is not kept) |

Errors and recovery (part B): six Ref not found errors in total: three targeted snapshots (steps 1, 5, 9) and three clicks (steps 13, 15, 16). Each was recovered with a fresh untargeted snapshot (steps 1, 9, 13, 15, 16) or, for step 5, with a find and a targeted snapshot (the deviation above). No click was repeated; no action was replayed.

### Part A and part B: combined audit

| Action | T1 to T6 (record) | T7 part B (exact) | T7 part A (approximate) | Total |
| --- | --- | --- | --- | --- |
| Ref clicks, successful (single) | 60 | 5 | about 7 | 65 exact, plus about 7 |
| Ref double-clicks | 3 | 0 | 0 | 3 |
| Coordinate clicks | 1 | 0 | 0 | 1 |
| Clicks, failed (Ref not found) | 2 | 3 | not recorded | 5 plus any part A |
| Targeted snapshots | 86 (84 ok, 2 Ref not found) | 14 (11 ok, 3 Ref not found) | not reconstructed | 100 plus any part A |
| Untargeted snapshots | 10 (5 inline, 5 tool-written) | 5 (tool-written) | at least 1 (tool-written) | 15 plus at least 1 |
| Find (read-only) | 47 | 8 | not reconstructed | 55 plus any part A |
| Mouse wheel | 1 | 6 | 0 | 7 |
| Pointer moves (no click) | 0 | 5 | 0 | 5 |
| Hovers (ref / coordinate) | 1 / 1 | 0 / 0 | 0 | 1 / 1 |
| List opens; option clicks; Description commits | 9; 9; 9 | 0 | 0 | 9; 9; 9 |
| Dialog opens (OK / Cancel) | 1 (1 OK / 0 Cancel) | 0 | 0 | 1 (1 OK / 0 Cancel) |
| New activations | 2 | 0 | 0 | 2 |
| Text entries; Tab key presses | 5; 5 | 0; 0 | 0; 0 | 5; 5 |
| Designer Saves | 7 | 0 | 0 | 7 |
| Auto-assigned Binding values (replaced) | 4 | 0 | 0 | 4 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| Prompts (including the close) | 0 | 0 | 0 | 0 |
| Re-logins; server-event errors | 0; 0 | 0; 0 | 0; 0 | 0; 0 |
| Screenshots (calls) | 24 | 9 (8 files) | 1 | 34 calls |
| Console error count | 2 errors, 0 warnings | 2 errors, 0 warnings | 2 errors, 0 warnings | 2 errors, 0 warnings throughout |

Exact totals for the Designer actions (T1 to T7 part B): Designer Saves 7 (T2 1, T3 1, T4 2, T5 2, T6 1, T7 0); Regenerate, Delete Form Definition and Select Form OK 0; Undo 0; drags 0; runtime actions 0; Toolbox placements 0; dialogs left open 0; list left open 0.

### Worker-written file inventory (T7)

Written by the worker in T7 (`evidence/EXP-122/`):

- `t7-01-reopened-cartpage-tree.png` (part A; top of the tree and the canvas; no cartpage rows in the image).
- `t7-02-state-before-properties-readback.png` (part B step 1; StaticCart header and Name; canvas; Save greyed).
- `t7-03-staticcart-layout-state.png` (part B step 4; Layout Size `20; 1.5`, Width `20`).
- `t7-04-gridorders-selected-properties.png` (GridOrders header; Read-Only/Disable True; cartpage rows).
- `t7-05-gridorders-data-source-behavior.png` (GridOrders Data Source: Primary Collection G..., objects).
- `t7-06-gridcolordnum-data-source.png` (GridColOrdNum header and Name; the Data Source group not in view).
- `t7-07-gridcolordnum-binding.png` (GridColOrdNum Binding Type Property; Binding `object.FX_OrderNu...`).
- `t7-08-griditem-binding.png` (GridColItem Binding Type Property; Binding `object.FX_Item`).
- `t7-09-gridcolcustid-binding.png` (cartpage rows GridColItem, GridColCount, GridColCustID, ButtonCheckout, Region05: spacer2; GridColCustID Binding Type Property).
- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (this record; T7 sections added and status lines updated).

Written by the browser tool into the repository (`evidence/playwright/`, not read): the click result files `page-2026-10-20T02-49-13-741Z.yml` (GridOrders click), `page-2026-10-20T02-49-45-095Z.yml` (GridColOrdNum), `page-2026-10-20T02-50-10-090Z.yml` (GridColItem), `page-2026-10-20T02-50-28-161Z.yml` (GridColCount), `page-2026-10-20T02-50-39-244Z.yml` (GridColCustID); and the part A click and snapshot result files (not listed by name in the retained context).

Written outside the repository (not read): the oversized untargeted snapshot results in the tool-results directory under the user's Claude projects folder (part A at least one; part B five). Repository confinement is for the operator's git review (authoritative).

No file under `evidence/` was edited or deleted in T7; no other experiment record, recipe, AGENTS.md or tool file was written.

### Observations (T7, observed only)

1. After the one close and reopen, every planned value read back in the same browser session: StaticCart Width `20` (Size `20; 1.5`); GridOrders Primary Collection Grid / `objects`, Read-Only/Disable `True`; the four GridColumns in order with Property bindings `object.FX_OrderNumber`, `object.FX_Item`, `object.FX_Count`, `object.FX_CustomerID`.
2. The Components-list Data Source cells, blank after the T4 and T5 Saves, show the bindings after the reopen (EXP-068-R2 lag cleared).
3. The ButtonCheckout is drawn below the grid on the canvas after the reopen (in the T3 post-save image it was above). The cause is not established. Its properties were not read or edited in T7.
4. The Binding and Binding Type values are truncated in the narrow Properties cell in the screenshots; the full text comes from the targeted snapshots (steps 7, 11, 13, 15, 16).
5. The StaticCart Layout group was readable without expanding anything: its Size, Width and Height rows are listed in the Properties tree.
6. The mouse wheel scrolled the Components tree once (step 3), not the Properties panel. No value changed.

### Deviations (recorded; not resolved by T7)

- T4 and T5 binding screenshots do not show the Binding rows (`t4-03`, `t4-07`, `t5-03`, `t5-07`), and no Binding-list-open screenshot was taken in T4 or T5. T7 gives post-reopen Binding readings with screenshots (`t7-07`, `t7-08`, `t7-09`), but the list-open states stay unrecorded in images.
- No Data Source screenshot of GridColCount alone (its Binding is read by snapshot in step 15 and in the Components row of `t7-09`).
- Step 5: the Ref-not-found error on the tree was recovered by find and targeted snapshot without the one untargeted snapshot that the allowance gives.
- `t7-01` (part A) does not show the cartpage rows; the tree evidence is the text read at step 5 and `t7-04`, `t7-05`, `t7-09`.
- Part A counts are approximate (reconstructed from the compaction summary).

## Acceptance check status (T7 audit, documentation only)

Classification: all findings are **observed only**. Same-session Designer close and reopen readback is not cross-session durability and not database-level verification. No replay was performed. No acceptance is declared here; the coordinator reviews the record.

- **AC-1** (sources, session, scope, gate, baseline): met for T1 (see the T1 section). The session stayed usable through T7 (no expiry, sign-in page, "Logout Successful" or server-event error). Scope User throughout (status bar). Console 2 errors, 0 warnings at every reading.
- **AC-2** (edits and Saves): supported by T2 to T6 with their evidence (`t2-03` to `t2-05`; `t3-03` to `t3-07`; `t4-03`, `t4-04`, `t4-07`, `t4-08`; `t5-03`, `t5-04`, `t5-07`, `t5-08`; `t6-01` to `t6-03`) and corroborated by the T7 readback after the reopen (targeted snapshots at steps 2, 7, 11, 13, 15, 16; screenshots `t7-03`, `t7-07`, `t7-08`, `t7-09`). Limitations: T4/T5 binding rows not visible in those images; no list-open screenshots. No correction was needed in any field. Console count recorded after every action. Seven Designer Saves, one per planned step, each with the toast "Form [FX_CustomerPortal] and global object(s) were saved."
- **AC-3** (one close and reopen readback): supported. Decisive evidence: StaticCart Width `20` and Size `20; 1.5` (snapshot step 2; `t7-03`); GridOrders Binding Type Primary Collection Grid, Binding `objects`, Read-Only/Disable `True` (snapshot step 7; `t7-04`, `t7-05`); the four columns in order with Property bindings (step 5 tree text; `t7-09`; snapshots steps 11, 13, 15, 16); ButtonCheckout present as a PushButton under Region04 (step 5 tree text; `t7-09`). Form open and clean: toolbar Save `[disabled]` and Regenerate Form `[disabled]` (step 18); no dialog, list, menu or editor open (the screenshots). "Everything else unchanged" is supported only for the tree structure and the StaticCart and GridOrders properties read; the ButtonCheckout properties were not re-read after the reopen.
- **AC-4** (no other change): no other component, region, event or Form was changed as far as the record shows. Only view actions (expansions, scrolls, selections) and the close and reopen were performed in T7. No Toolbox placement, no Caption, Size or Location edit, no global object, no Regenerate, Delete Form Definition or Select Form OK, no dragging, no Undo, no runtime action, no User-scope change. No prompt appeared at the close. Limitation: part A's actions are reconstructed from the summary.
- **AC-5** (final audit): this T7 section, the combined audit above, the file inventories and the cleanup inventory below.

## Cleanup inventory (final, after T7)

Changes made by EXP-122 on FX_CustomerPortal (User scope), all saved, and no other change: StaticCart Width 29.559322033898304 to 20 (T2); GridOrders gains two GridColumns through New (renamed GridColCount from gridColumn5_USER and GridColCustID from gridColumn6_USER) and the Designer-created gridColumn3_USER and gridColumn4_USER renamed GridColOrdNum and GridColItem (T3); Binding Type Property with Binding `object.FX_OrderNumber` and `object.FX_Item` (T4); Binding Type Property with Binding `object.FX_Count` and `object.FX_CustomerID` (T5); GridOrders Read-Only/Disable False to True (T6). T7 made no Designer change. No cleanup (revert) was performed by the worker; any revert is an operator decision.

## Final state after T7

- FX_CustomerPortal (User scope) open in the Designer, the only Form tab, reopened in part A. Save `[disabled]`; Regenerate Form `[disabled]`. No dialog, list, menu, editor or unsaved change open. The Properties panel shows GridColCustID (GridColumn); the Components tree is expanded (view only).
- Console: 2 errors, 0 warnings.

## T6: GridOrders Read-Only/Disable = True (one Designer Save)

Start of task (cycle 5): AGENTS.md re-read; the record's T5 final state and T6 next-step section read. Browser tabs listed before the first selection (tab 0 Web Client, tab 1 Designer); tab 1 selected (succeeded). First untargeted snapshot returned inline. Console at task start: **2 errors, 0 warnings**. Form clean: Save disabled; User scope (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`); FX_CustomerPortal the only Form tab; no dialog, list, menu or editor open. No session expiry, sign-in page, "Logout Successful" or server-event error was seen.

Tree at task start (under Region04: cartpage, as expected): StaticCart; GridOrders (Grid, objects) with GridColOrdNum, GridColItem, GridColCount, GridColCustID in that order (Data Source blank in the list); ButtonCheckout; Region05: spacer2. GridColCustID was the previously selected component with Binding `object.FX_CustomerID` (unchanged). No property outside T6 was edited.

Steps, in order (console 2 errors, 0 warnings at every read unless noted):

1. Click the GridOrders Type cell (ref e726 from the task-start snapshot; "Grid"). Targeted snapshot of the Properties panel (e926): header **`GridOrders (Grid)`**, Name row **`GridOrders`**. Read before the change (view only): Binding Type **Primary Collection Grid**; Binding **objects**; Size `35; 15`; Behavior group collapsed at this point.
2. Double-click on the Behavior group name (ref e1653; view only). Selected the group; it did not expand. Targeted snapshot: still collapsed.
3. Second double-click on the Behavior group label (ref e1654; view only, with the label's inner selector). Targeted snapshot (e926): **Behavior expanded**. Rows listed in order: Breadcrumb (blank); **Read-Only/Disable `False`**; Tab Read-Only Field `False`; Hidden `False`; No Tab Stop `False`; Auto Complete `False`; Add/Details and Find Form; New and Copy Operations; Dynamic Enabling and Disabling; Right-Click Menu; Drag Image; Enabled When; Required When; Theme Class When; Visible When. **The Read-Only/Disable row exists and reads False before the change.**
4. Screenshot `t6-01-gridorders-behavior-before-change.png` (viewed): the Properties header `GridOrders (Grid)`, the Behavior group expanded, Read-Only/Disable `False` visible, Binding Type Primary Collection Grid visible in the panel above (Binding rows were visible in the same panel state of the prior snapshot). The Components list shows GridOrders with GridColOrdNum and GridColItem.
5. Read-Only/Disable arrow click (ref e2067, from the snapshot after step 3). Find "True" → two matches (From Device Master True, and the open list). Targeted snapshot of the open combobox (ref e2209): options **True** (ref e2215) and **False** (selected). The planned option is present.
6. Clicked option **True** (ref e2215) (list-option click; no key used). Console 2.
7. Targeted snapshot of the Properties panel (e926) before committing: the combobox showed `True`; the row was still in edit state.
8. Committed by clicking the **Description** row label (ref e1542; a list-free commit). Console 2. The commit produced no prompt.
9. Verified: find "Read-Only/Disable" returns the row with value **True**; targeted snapshot of the Properties panel (e926): Read-Only/Disable **`True`**, combobox closed, Description row selected; Binding Type Primary Collection Grid and Binding objects unchanged; Tab Read-Only Field, Hidden, No Tab Stop, Auto Complete still False. Save enabled (find "Save", ref e2219).
10. Screenshot `t6-02-readonly-true-before-save.png` (viewed): GridOrders (Grid) header; Behavior expanded; **Read-Only/Disable `True` visible**; Save icon active; the canvas grid shows "Order Nu..." and "Item" headers.
11. Stale-reference note: the toolbar Save ref from the prior snapshot (e15) was not found on the next read (**"Ref not found", one occurrence**). Recovery: one find ("Save", ref e2219); a targeted snapshot of the toolbar container (e11) gave current refs (Save e2219 enabled). The fresh-snapshot allowance for the error was the targeted toolbar snapshot; no untargeted snapshot was needed.
12. **Designer Save (one)**, click on Save (ref e2219). Response: toast **"Save — Form [FX_CustomerPortal] and global object(s) were saved."** (screenshot `t6-03-after-save-response.png`, viewed). Targeted snapshot of the toolbar (e11): **Save `[disabled]`**; Undo disabled; Regenerate Form disabled. Console 2.

Result (observed): GridOrders Behavior Read-Only/Disable changed from **False** to **True** with one entry (list option True, Description-row commit), verified in the Properties panel, then saved once. No other property was changed. The Binding Type (Primary Collection Grid), Binding (objects), Size, Name and the four column bindings were not edited.

Observations (observed only):
1. The Behavior group required two double-clicks on its name to expand (the first selected the row; the second expanded it). Expansion is a view-only action.
2. The Read-Only/Disable list showed only True and False; True was chosen and committed without any Tab or arrow key.
3. The Save toast and disabled state match the T2–T5 saves. No prompt appeared at any point.
4. The GridOrders canvas header row (cart column) still shows "Order Nu..." and "Item" with the grid in the Cart column. The read-only attribute is not visibly changed on the canvas in the image (a design-time attribute; not analysed).
5. The Components list's Data Source cells for the four columns remain as before (blank for the columns in the list; not forced).
6. One "Ref not found" error on the toolbar Save button (recovered as step 11).

Counts for T6 only:

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection |
| Tab select | 1 | Index 1 (Designer); succeeded |
| Clicks, successful (ref, single) | 6 | GridOrders Type cell (e726); Read-Only/Disable arrow (e2067); list option True (e2215); Description-row commit (e1542); toolbar Save (e2219) — plus the Behavior label double-clicks counted below |
| Clicks, successful (ref, double) | 2 | Behavior group name (e1653) and Behavior label (e1654), view-only expansion |
| Clicks, coordinate | 0 | |
| Clicks, failed (Ref not found, not executed) | 1 | Toolbar Save ref e15 (step 11) |
| Hovers | 0 | |
| List opens | 1 | Read-Only/Disable |
| List option clicks | 1 | True |
| Description-row commits | 1 | Read-Only/Disable |
| Arrow clicks (ref) | 1 | e2067 |
| Dialog opens | 0 | |
| New activations | 0 | |
| Text entries | 0 | |
| Key presses | 0 | No Tab, Enter or arrow key used |
| Corrections | 0 | |
| Mouse wheel | 0 | |
| Drags | 0 | |
| Undo | 0 | |
| Designer Saves | 1 | Response: toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save disabled afterwards |
| Prompts | 0 | None appeared |
| Re-logins | 0 | |
| Server-event errors | 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at start and after every action |
| Untargeted snapshots | 1 | At task start; inline |
| Targeted snapshots | 13 | All succeeded except none: GridOrders Properties (e926) ×7 (incl. after expansion ×2, after option, after commit, verification); list combobox (e2209) ×1; toolbar (e11) ×2 (after Ref-not-found, and after Save); GridOrders row (not a snapshot: its Type cell was clicked from the untargeted snapshot) — count as listed |
| Find (read-only) | 6 | "GridOrders"? (not used); "Search Properties" ×0; "True" ×1 (two matches); "Read-Only/Disable" ×1; "Save" ×2 (after commit; and step 11 recovery) |
| Screenshots | 3 | `t6-01`, `t6-02`, `t6-03` |

Note on the count table: the T6 "Find" and "Targeted snapshot" totals above are the descriptive counts for this task. Where an entry is not exact, the cumulative table below uses the same figures.

## Cumulative browser action audit (T1 to T6)

| Action | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 1 | 1 | 1 | 6 |
| Tab select | 1 | 1 | 1 | 1 | 1 | 1 | 6 |
| Clicks, successful (ref, single) | 7 | 3 | 14 | 16 | 16 | 4 | 60 |
| Clicks, successful (ref, double) | 1 | 0 | 0 | 0 | 0 | 2 | 3 |
| Clicks, coordinate (icon) | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Clicks, failed (Ref not found, not executed) | 1 | 0 | 0 | 0 | 0 | 1 | 2 |
| Coordinate hovers | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Ref hovers | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Coordinate arrow clicks | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| List opens | 0 | 0 | 0 | 4 | 4 | 1 | 9 |
| List option clicks | 0 | 0 | 0 | 4 | 4 | 1 | 9 |
| Description-row commits | 0 | 0 | 0 | 4 | 4 | 1 | 9 |
| Dialog opens (OK / Cancel) | 0 | 0 | 1 / 1 / 0 | 0 | 0 | 0 | 1 open, 1 OK, 0 Cancel |
| New activations | 0 | 0 | 2 | 0 | 0 | 0 | 2 |
| Text entries (fill) | 0 | 1 | 4 | 0 | 0 | 0 | 5 |
| Key presses (Tab) | 0 | 1 | 4 | 0 | 0 | 0 | 5 |
| Corrections | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mouse wheel | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Drags | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 | 2 | 2 | 1 | 7 |
| Auto-assigned Binding values (replaced) | 0 | 0 | 0 | 2 | 2 | 0 | 4 |
| Prompts | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Ref not found errors | 3 (1 click; 2 targeted) | 0 | 0 | 0 | 0 | 1 (toolbar Save e15) | 4 |
| Untargeted snapshots (inline / tool-written, not read) | 6 (2 / 4) | 1 (0 / 1) | 0 | 1 (1 / 0) | 1 (1 / 0) | 1 (1 / 0) | 10 (5 inline / 5 tool-written) |
| Targeted snapshots | 13 (11 ok, 2 Ref not found) | 6 | 20 | 17 | 17 | 13 (incl. 1 toolbar recovery) | 86 (84 ok, 2 Ref not found in T1) |
| Find (read-only) | 8 | 3 | 11 | 10 | 9 | 6 | 47 |
| Screenshots | 1 | 5 | 7 | 4 | 4 | 3 | 24 |
| Form closes or reopens | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Console error count | 2 / 0 | 2 / 0 | 2 / 0 | 2 / 0 | 2 / 0 | 2 / 0 | 2 errors, 0 warnings throughout |

Exact totals (cumulative, T1 to T6), summed from the table rows: successful clicks 64 = 60 ref single + 3 ref double (1 in T1, the Behavior-group double-click in the T1 expansion; 2 in T6, the view-only Behavior-label double-clicks) + 1 coordinate (T3 icon). The per-task rows above are authoritative. Failed clicks 2 (T1 Ref not found on the GridOrders Type cell; T6 Ref not found on the toolbar Save e15, recovered with a find and a targeted toolbar snapshot). Ref-not-found errors 4 in total (T1: 2 targeted and 1 click; T6: 1 toolbar Save). Untargeted snapshots 10: 5 inline (T1 ×2, T4 ×1, T5 ×1, T6 ×1) and 5 tool-written and not read (T1 ×4, T2 ×1). The totals in the T5 section are superseded by this table.

## Worker-written file inventory (T6)

Written by the worker in T6:

- `evidence/EXP-122/t6-01-gridorders-behavior-before-change.png` (GridOrders header; Behavior expanded; Read-Only/Disable False visible).
- `evidence/EXP-122/t6-02-readonly-true-before-save.png` (GridOrders header; Behavior expanded; Read-Only/Disable True visible; Save enabled).
- `evidence/EXP-122/t6-03-after-save-response.png` (save toast; Save disabled; Read-Only/Disable True).
- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (updated in T6).

Written by the browser tool, not by the worker (not read): snapshot files `evidence/playwright/page-2026-10-20T02-43-36-499Z.yml` through `page-2026-10-20T02-44-20-926Z.yml` (the click and save results), console entries `evidence/playwright/console-2026-10-20T02-43-31-150Z.log` and `console-2026-10-20T02-43-31-151Z.log`, and one untargeted snapshot returned inline (none written to a tool-results file in T6).

## T5: GridColCount and GridColCustID bindings (Binding Type Property, then exact Binding; one Designer Save per column)

Start of task (cycle 4): AGENTS.md re-read; the record's T4 part and final state read. Browser tabs listed before the first selection (tab 0 Web Client, tab 1 Designer); tab 1 selected (succeeded). First untargeted snapshot returned inline. Console at task start: **2 errors, 0 warnings**. Form clean: Save disabled; User scope (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`); FX_CustomerPortal the only Form tab; no dialog, list, menu or editor open. No session expiry, sign-in page, "Logout Successful" or server-event error was seen. The Components tree showed GridOrders with GridColOrdNum, GridColItem, GridColCount, GridColCustID in order (Data Source blank in the list), ButtonCheckout, and Region05: spacer2. GridColItem's Properties still showed Binding `object.FX_Item` (T4). No T4 binding was altered in T5.

**Carry-over of the T4 screenshot deficiencies (not resolved by T5):** T4's `t4-03` and `t4-07` do not show the Binding rows, and no Binding-list-open screenshot was taken in T4. The T5 images have the same limits, as recorded below.

GridColCount (third column):

1. Select: Type cell (ref e801) of the GridColCount row. Targeted snapshot of the Properties panel: header `GridColCount (GridColumn)`, Name row `GridColCount`. Console 2.
2. Binding Type `None`, Binding blank (Data Source group expanded, view only).
3. Binding Type list: arrow (ref e1829). Find "Primary Collection Grid"; targeted snapshot of the combobox (ref e2057): None selected; Property present. Console 2.
4. Clicked option **Property** (ref e2067). Targeted snapshot of the panel: Binding Type `Property`, list closed, Binding **auto-assigned `object._ItemId`** (recorded; to be replaced). Console 2.
5. Committed Binding Type by clicking the Description row label (ref e1536). Targeted snapshot: Binding `object._ItemId` still shown. Console 2.
6. Binding list: arrow (ref e1840). Find "object.FX_Count"; targeted snapshot of the combobox (ref e2115): `object._ItemId` selected; the options include `object.FX_Count` (exact) and no `variables.FX_Count` entry. Console 2.
7. Clicked option **object.FX_Count** (ref e2129). Targeted snapshot of the panel: Binding combobox `object.FX_Count`, closed. Console 2.
8. Committed Binding by clicking the Description row label (ref e1536). Console 2. Finds: `object.FX_Count` returns the Binding row (one match); `Save` shows the enabled toolbar Save (ref e2103).
9. Screenshot `t5-03-gridcolcount-binding-before-save.png`; targeted snapshot of the Save button (ref e15): enabled. Console 2.
10. **Designer Save #1 (GridColCount)**, Save click (ref e2103). Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." (screenshot `t5-04-gridcolcount-after-save-response.png`, viewed). Targeted snapshot of Save: `[disabled]` afterwards. Console 2. The Components list shows GridColCount with Data Source blank (lag, not forced). The canvas header row shows "Order Nu..." and "Item".

GridColCustID (fourth column), started only after the clean post-Save boundary above:

11. Find "GridColCustID"; targeted snapshot of its row (ref e823). Select: Type cell click (ref e826). Targeted snapshot of the panel: header `GridColCustID (GridColumn)`, Name `GridColCustID`. Console 2.
12. Binding Type `None`, Binding blank.
13. Binding Type list: arrow (ref e2561). Find "Primary Collection Grid"; targeted snapshot of the combobox (ref e2057): None selected. Console 2.
14. Clicked option **Property** (ref e2791). Targeted snapshot: Binding Type `Property`, list closed. Console 2.
15. Committed Binding Type by clicking the Description row label (ref e2268). Targeted snapshot: Binding **auto-assigned `object._ItemId`** (recorded; to be replaced). Console 2.
16. Binding list: arrow (ref e2572). Find "object.FX_CustomerID"; targeted snapshot of the combobox (ref e2115): `object._ItemId` selected; options include `object.FX_CusName`, `object.FX_CustomerID` (exact), `object.FX_DerOrderTotal`, `object.FX_Item`. Console 2.
17. Clicked option **object.FX_CustomerID** (ref e2844). Targeted snapshot of the panel: Binding combobox `object.FX_CustomerID`, closed. Console 2.
18. Committed Binding by clicking the Description row label (ref e2268). Console 2. Finds: `object.FX_CustomerID` returns the Binding row (one match); `Save` shows the enabled toolbar Save (ref e2103).
19. Screenshot `t5-07-gridcolcustid-binding-before-save.png`; targeted snapshot of Save (ref e15): enabled. Console 2. Viewed: shows the GridColCustID header and Name, Save enabled, the Components list with GridColItem, GridColCount, GridColCustID and ButtonCheckout; **the Binding rows are not visible** (below the Properties area).
20. **Designer Save #2 (GridColCustID)**, Save click (ref e2103). Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." (screenshot `t5-08-gridcolcustid-after-save-response.png`, viewed). Targeted snapshot of Save: `[disabled]`. Console 2. The Components list shows GridColCustID with Data Source blank (lag, not forced).

Result (observed): GridColCount = Binding Type Property, Binding `object.FX_Count`; GridColCustID = Binding Type Property, Binding `object.FX_CustomerID`. Both saved once with the standard toast and Save disabled afterwards. The auto-assigned `object._ItemId` was replaced in both columns before the Save. No list was opened in a way that required a Tab or arrow key; no correction was needed. The variables.FX_Count variable was not chosen (it was not in the list).

Observations (observed only):
1. Binding Type and Binding both auto-assigned `object._ItemId` after the Binding Type commit, as in T4.
2. Components-list Data Source cells stay blank for GridColCount and GridColCustID after the Saves (EXP-068-R2 lag; not forced).
3. The canvas header row shows "Order Nu..." and "Item" after the Saves; the headers for the Count and CustID columns are not visible in the canvas read (not analysed).
4. The Binding-list-open screenshots were not taken (deviation, same as T4 observation 6). The list states were read through targeted snapshots.
5. The Binding rows are outside the visible Properties area in `t5-03` and `t5-07`, so those images do not show the final values. The values come from the snapshots and finds taken before each Save.

Counts for T5 only:

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection |
| Tab select | 1 | Index 1 (Designer); succeeded |
| Clicks, successful (ref, single) | 16 | 2 Type cells (GridColCount e801, GridColCustID e826); 4 list arrows (e1829, e1840, e2561, e2572); 4 list options (Property ×2, object.FX_Count, object.FX_CustomerID); 4 Description-row commits; 2 toolbar Saves |
| Clicks, coordinate | 0 | All arrows had references |
| Double-clicks | 0 | |
| Hovers | 0 | |
| List opens | 4 | Binding Type ×2; Binding ×2 |
| List option clicks | 4 | As above |
| Description-row commits | 4 | 2 for Binding Type; 2 for Binding |
| Dialog opens | 0 | |
| New activations | 0 | |
| Text entries (fill) | 0 | |
| Key presses | 0 | No Tab, Enter or arrow key used |
| Corrections | 0 | |
| Mouse wheel | 0 | |
| Drags | 0 | |
| Undo | 0 | |
| Designer Saves | 2 | One per column; each with the toast; Save disabled afterwards |
| Auto-assigned Binding values (replaced) | 2 | Both `object._ItemId` |
| Prompts | 0 | None appeared |
| Re-logins | 0 | |
| Server-event errors | 0 | |
| Ref not found | 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at start and after every action |
| Untargeted snapshots | 1 | At task start; inline |
| Targeted snapshots | 17 | All succeeded. GridColCount: e926 header; e2057; e926 after Property; e926 after Binding Type commit; e2115; e926 after option; e15 before Save; e15 after Save (8). GridColCustID: e823 row; e926 header; e2057; e926 after Property; e926 after Binding Type commit; e2115; e926 after option; e15 before Save; e15 after Save (9) |
| Find (read-only) | 9 | "Primary Collection Grid" ×2; "object.FX_Count" ×2; "Save" ×2; "GridColCustID"; "object.FX_CustomerID" ×2 |
| Screenshots | 4 | `t5-03`, `t5-04`, `t5-07`, `t5-08` (no list-open screenshot; see observation 4) |

## Cumulative browser action audit (T1 to T5)

| Action | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 1 | 1 | 5 |
| Tab select | 1 | 1 | 1 | 1 | 1 | 5 |
| Clicks, successful (ref, single) | 7 | 3 | 14 | 16 | 16 | 56 |
| Clicks, successful (ref, double) | 1 | 0 | 0 | 0 | 0 | 1 |
| Clicks, coordinate (icon) | 0 | 0 | 1 | 0 | 0 | 1 |
| Clicks, failed (Ref not found, not executed) | 1 | 0 | 0 | 0 | 0 | 1 |
| Coordinate hovers | 0 | 0 | 1 | 0 | 0 | 1 |
| Ref hovers | 0 | 0 | 1 | 0 | 0 | 1 |
| Coordinate arrow clicks | 0 | 0 | 0 | 0 | 0 | 0 |
| List opens | 0 | 0 | 0 | 4 | 4 | 8 |
| List option clicks | 0 | 0 | 0 | 4 | 4 | 8 |
| Description-row commits | 0 | 0 | 0 | 4 | 4 | 8 |
| Dialog opens (OK / Cancel) | 0 | 0 | 1 / 1 / 0 | 0 | 0 | 1 open, 1 OK, 0 Cancel |
| New activations | 0 | 0 | 2 | 0 | 0 | 2 |
| Text entries (fill) | 0 | 1 | 4 | 0 | 0 | 5 |
| Key presses (Tab) | 0 | 1 | 4 | 0 | 0 | 5 |
| Corrections | 0 | 0 | 0 | 0 | 0 | 0 |
| Mouse wheel | 0 | 1 | 0 | 0 | 0 | 1 |
| Drags | 0 | 0 | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 | 2 | 2 | 6 |
| Auto-assigned Binding values (replaced) | 0 | 0 | 0 | 2 | 2 | 4 |
| Prompts | 0 | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 | 0 |
| Ref not found errors (click 1 in T1; targeted 2 in T1) | 3 | 0 | 0 | 0 | 0 | 3 |
| Untargeted snapshots (inline / tool-written, not read) | 6 (2 / 4) | 1 (0 / 1) | 0 | 1 (1 / 0) | 1 (1 / 0) | 9 (4 inline / 5 tool-written) |
| Targeted snapshots | 13 (11 ok, 2 Ref not found) | 6 | 20 | 17 | 17 | 73 (71 ok, 2 Ref not found) |
| Find (read-only) | 8 | 3 | 11 | 10 | 9 | 41 |
| Screenshots | 1 | 5 | 7 | 4 | 4 | 21 |
| Form closes or reopens | 0 | 0 | 0 | 0 | 0 | 0 |
| Console error count | 2 errors, 0 warnings | 2 / 0 | 2 / 0 | 2 / 0 | 2 / 0 | 2 errors, 0 warnings throughout |

Exact totals (cumulative, T1 to T5): successful clicks 58 = 56 ref single + 1 ref double + 1 coordinate. Failed clicks 1 (Ref not found, not executed, T1). Ref-not-found errors 3 (all in T1). Untargeted snapshots 9: 4 inline (T1 ×2, T4 ×1, T5 ×1) and 5 tool-written and not read (T1 ×4, T2 ×1). The untargeted count in the T4 section is corrected here; the authoritative total is this line.

## Worker-written file inventory (T5)

Written by the worker in T5:

- `evidence/EXP-122/t5-03-gridcolcount-binding-before-save.png` (GridColCount header; Save enabled; Binding rows not visible in the image).
- `evidence/EXP-122/t5-04-gridcolcount-after-save-response.png` (save toast; Save disabled; canvas "Order Nu..." and "Item"; Components list shows GridColOrdNum, GridColItem and GridColCount, with GridColCount selected).
- `evidence/EXP-122/t5-07-gridcolcustid-binding-before-save.png` (GridColCustID header; Save enabled; Binding rows not visible; Components list shows GridColItem, GridColCount, GridColCustID, ButtonCheckout).
- `evidence/EXP-122/t5-08-gridcolcustid-after-save-response.png` (save toast; Save disabled; canvas "Order Nu..." and "Item").
- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (updated in T5).

Written by the browser tool, not by the worker (not read): snapshot files `evidence/playwright/page-2026-10-20T02-39-25-463Z.yml` through `page-2026-10-20T02-40-46-584Z.yml` (the click and save results), console entries `evidence/playwright/console-2026-10-20T02-39-19-726Z.log` and `console-2026-10-20T02-39-19-727Z.log`, and one untargeted snapshot returned inline (none written to a tool-results file in T5).

## T4: GridColOrdNum and GridColItem bindings (Binding Type Property, then exact Binding; one Designer Save per column)

Start of task (cycle 3): AGENTS.md re-read. Browser tabs listed before the first selection (tab 0 Web Client, tab 1 Designer); tab 1 selected (succeeded). First snapshot of the task was untargeted and returned inline (about 380 lines). Console at task start: **2 errors, 0 warnings**. Form clean: Save disabled; User scope (status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`); FX_CustomerPortal the only Form tab; no dialog, list, menu or editor open. No session expiry, sign-in page, "Logout Successful", or server-event error was seen.

Components tree at task start (under Region04: cartpage): StaticCart; GridOrders (Grid, objects) with GridColOrdNum, GridColItem, GridColCount, GridColCustID in that order (all GridColumn, Container GridOrders, Data Source blank); ButtonCheckout; Region05: spacer2. The four names and order match the T3 result.

GridColOrdNum (first column):

1. Select: Type cell (ref e754) of the GridColOrdNum row. Properties header `GridColOrdNum (GridColumn)`, Name row `GridColOrdNum`. Console 2.
2. Data Source group already expanded (view only): Binding Type `None`, Binding blank.
3. Binding Type list: arrow (ref e1826; a ref-targeted arrow click, not coordinates). Targeted snapshot of the open combobox (ref e2054): options None (selected), Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, and others. Console 2.
4. Clicked option **Property** (ref e2064). Targeted snapshot of the Properties panel: Binding Type `Property`; combobox closed; **Binding auto-assigned `object._ItemId`** (recorded; not kept). Console 2.
5. Committed Binding Type by clicking the Description row label (ref e1533). Console 2.
6. Binding list: arrow (ref e1837; the value cell showed `object._ItemId`). Targeted snapshot of the open combobox (ref e2112): list of `object.*` options, with `object._ItemId` selected, and `object.FX_OrderNumber` present (exact name; `object.FX_ItmsPicture` and `object.FX_OrderNumber` are different names; no longer name starting with FX_OrderNumber was present). Console 2.
7. Clicked option **object.FX_OrderNumber** (ref e2144). Targeted snapshot of the Properties panel: Binding combobox `object.FX_OrderNumber`, closed. Console 2.
8. Committed Binding by clicking the Description row label (ref e1533). Console 2.
9. Verified: find on `object.FX_OrderNumber` returns the Binding row; Binding Type reads Property (from step 4; not changed since). Toolbar Save enabled (find; targeted snapshot ref e15 showed the enabled Save button).
10. Screenshot `t4-03-gridcolordnum-binding-before-save.png` (before Save): header `GridColOrdNum (GridColumn)`, Name `GridColOrdNum`, Save icon enabled. **The Binding Type and Binding rows are below the visible Properties area, so the image does not show the values** (the values are from steps 4 and 7-9).
11. **Designer Save #1** (ref e2100). Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." Save `[disabled]` afterwards (targeted snapshot ref e15). Console 2. Screenshot `t4-04-gridcolordnum-after-save-response.png`.
12. Components-list Data Source cell for GridColOrdNum: still blank after the Save (EXP-068-R2 lag; not forced). Canvas grid header now reads `Order Nu...` in the cart column (the column's binding is reflected on the canvas).

GridColItem (second column):

13. Select: Type cell (ref e779) of the GridColItem row; find "GridColItem" then targeted snapshot of the row (ref e776). Properties header `GridColItem (GridColumn)`, Name `GridColItem`. Console 2.
14. Data Source (already expanded): Binding Type `None`, Binding blank.
15. Binding Type list: arrow (ref e2561). Targeted snapshot of the open combobox (ref e2054): None selected; Property present. Console 2.
16. Clicked option **Property** (ref e2791). Targeted snapshot of the Properties panel: Binding Type `Property`, combobox closed, Binding blank. Console 2.
17. Committed Binding Type by clicking the Description row label (ref e2268). Targeted snapshot: **Binding auto-assigned `object._ItemId`** (recorded; not kept). Console 2.
18. Binding list: arrow (ref e2572). Targeted snapshot of the open combobox (ref e2112): options include `object.FX_Count`, `object.FX_CustomerID`, `object.FX_Item`, `object.FX_ItmsCost`, `object.FX_ItmsDescription`, `object.FX_ItmsPicture`, `object.FX_OrderNumber`. The exact option **object.FX_Item** (ref e2848) was chosen; `object.FX_ItmsCost` and the other longer FX_It* names were not selected. Console 2.
19. Clicked option **object.FX_Item** (ref e2848). Targeted snapshot of the Properties panel: Binding combobox `object.FX_Item`, closed. Console 2.
20. Committed Binding by clicking the Description row label (ref e2268). Console 2.
21. Verified: find `object.FX_Item` returns the Binding row (one match, exact text); find "Save" shows the enabled toolbar Save (targeted ref e15 enabled). Console 2.
22. Screenshot `t4-07-griditem-binding-before-save.png` (before Save): header and Name as above; the Binding rows are below the visible area, so the image does not show the values (values are from steps 16 and 19-21).
23. **Designer Save #2** (ref e2100). Response: toast "Save — Form [FX_CustomerPortal] and global object(s) were saved." Save `[disabled]` afterwards (targeted snapshot ref e15). Console 2. Screenshot `t4-08-griditem-after-save-response.png`: the toast; the Properties header `GridColItem (GridColumn)`; the canvas cart grid now shows the headers `Order Nu...` and `Item`; the Components tree lists GridColOrdNum and GridColItem with Data Source blank (lag, not forced).

Result (observed): GridColOrdNum = Binding Type Property, Binding object.FX_OrderNumber; GridColItem = Binding Type Property, Binding object.FX_Item. Both saved once, with the standard toast and Save disabled afterwards. The auto-assigned `object._ItemId` was replaced in both cases before the Save. The "Data Source" cells in the Components list stay blank for both columns (not forced; EXP-068-R2). No correction was needed on any field, and no Tab or arrow key was used while a list was open.

Observations (observed only):
1. The Binding list has the planned option at a predictable position (after `object.FX_Count`, before `object.FX_CustomerID`), and object._ItemId is the first option.
2. Both Binding Type commits and both Binding commits used the Description row label; the Binding value cell showed the chosen value after the commit.
3. The Binding Type list shows None selected before the change; the Property option is the third option.
4. After each Save the canvas header of the bound column changes from `Column` to `Order Nu...` and `Item`. Not validated further (not a T4 check).
5. The Components list Data Source column still reads blank for both columns after the Save (EXP-068-R2 lag). Not forced.
6. A screenshot of the Binding list **open** was not taken for either column (the brief asks for one; not taken, because the list-open state was read via targeted snapshots only). This is a deviation from the brief's screenshot list.

Counts for T4 only:

| Action | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection |
| Tab select | 1 | Index 1 (Designer); succeeded |
| Clicks, successful (ref, single) | 16 | 2 Type cells; 4 list arrows (e1826, e1837, e2561, e2572); 4 list options (Property ×2, object.FX_OrderNumber, object.FX_Item); 4 Description-row commits; 2 toolbar Saves |
| Clicks, coordinate | 0 | No coordinate arrow clicks (all arrows had references) |
| Double-clicks | 0 | |
| Hovers | 0 | |
| List opens | 4 | Binding Type ×2; Binding ×2 |
| List option clicks | 4 | As above |
| Description-row commits | 4 | 2 for Binding Type; 2 for Binding |
| Dialog opens | 0 | |
| New activations | 0 | |
| Text entries (fill) | 0 | |
| Key presses (Tab, arrow, Enter) | 0 | No key press in T4 |
| Corrections | 0 | |
| Mouse wheel | 0 | |
| Drags | 0 | |
| Undo | 0 | |
| Designer Saves | 2 | One per column; each with the toast; Save disabled afterwards |
| Auto-assigned Binding values | 2 | Both `object._ItemId`, replaced before Save |
| Prompts | 0 | None appeared |
| Re-logins | 0 | |
| Server-event errors | 0 | |
| Ref not found | 0 | |
| Console error count changes | 0 | 2 errors, 0 warnings at start and after every action |
| Untargeted snapshots | 1 | At task start; inline (about 380 lines) |
| Targeted snapshots | 17 | All succeeded. Breakdown: Properties panel (e929) ×8 (GridColOrdNum ×4; GridColItem ×4); Binding/Binding Type combobox (e2054) ×2 and (e2112) ×2; GridColItem row (e776) ×1; toolbar Save (e15) ×4 (before and after each Save) |
| Find (read-only) | 10 | "GridColOrdNum"; "Primary Collection Grid"; "FX_OrderNumber"; "object.FX_OrderNumber"; "Save"; "GridColItem"; "Secondary Collection Grid"; "object._ItemWarnings"; "object.FX_Item"; "Save" |
| Screenshots | 4 | `t4-03`, `t4-04`, `t4-07`, `t4-08` (no list-open screenshot; see observation 6) |

## Cumulative browser action audit (T1 to T4)

| Action | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 1 | 4 |
| Tab select | 1 | 1 | 1 | 1 | 4 |
| Clicks, successful (ref, single) | 7 | 3 | 14 | 16 | 40 |
| Clicks, successful (ref, double) | 1 | 0 | 0 | 0 | 1 |
| Clicks, coordinate | 0 | 0 | 1 (icon) | 0 | 1 |
| Clicks, failed (Ref not found, not executed) | 1 | 0 | 0 | 0 | 1 |
| Coordinate hovers | 0 | 0 | 1 (icon tooltip) | 0 | 1 |
| Ref hovers | 0 | 0 | 1 (New tooltip) | 0 | 1 |
| Coordinate arrow clicks | 0 | 0 | 0 | 0 | 0 |
| List opens | 0 | 0 | 0 | 4 | 4 |
| List option clicks | 0 | 0 | 0 | 4 | 4 |
| Description-row commits | 0 | 0 | 0 | 4 | 4 |
| Dialog opens (OK / Cancel) | 0 | 0 | 1 open; 1 OK; 0 Cancel | 0 | 1 open; 1 OK; 0 Cancel |
| New activations | 0 | 0 | 2 | 0 | 2 |
| Text entries (fill) | 0 | 1 | 4 | 0 | 5 |
| Key presses (Tab) | 0 | 1 | 4 | 0 | 5 |
| Corrections | 0 | 0 | 0 | 0 | 0 |
| Mouse wheel | 0 | 1 | 0 | 0 | 1 |
| Drags | 0 | 0 | 0 | 0 | 0 |
| Undo | 0 | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 1 | 1 | 2 | 4 |
| Auto-assigned Binding values (replaced) | 0 | 0 | 0 | 2 | 2 |
| Prompts | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 |
| Ref not found errors | 3 (1 click; 2 targeted) | 0 | 0 | 0 | 3 |
| Untargeted snapshots (inline / tool-written, not read) | 6 (2 / 4) | 1 (0 / 1) | 0 | 1 (1 / 0) | 8 (3 inline / 5 tool-written) |
| Targeted snapshots | 13 (11 ok, 2 Ref not found) | 6 | 20 | 17 | 56 (54 ok, 2 Ref not found) |
| Find (read-only) | 8 | 3 | 11 | 10 | 32 |
| Screenshots | 1 | 5 | 7 | 4 | 17 |
| Form closes or reopens | 0 | 0 | 0 | 0 | 0 |
| Console error count | 2 errors, 0 warnings | 2 / 0 | 2 / 0 | 2 / 0 | 2 errors, 0 warnings throughout |

Exact totals (cumulative, T1 to T4): successful clicks 42 = 40 ref single + 1 ref double + 1 coordinate. Failed clicks 1 (Ref not found, not executed). Ref-not-found errors 3 in total (all in T1; 2 targeted snapshots and 1 click). Untargeted snapshots 8: 3 inline (T1 ×2, T4 ×1) and 5 tool-written and not read (T1 ×4, T2 ×1). The T2 and T3 audit tables above stand as written; the T3 cumulative row was never reconciled with the T2 untargeted count, so this line is the authoritative total.

## Worker-written file inventory (T4)

Written by the worker in T4:

- `evidence/EXP-122/t4-03-gridcolordnum-binding-before-save.png` (GridColOrdNum header and Name; Save enabled; Binding rows below the visible area).
- `evidence/EXP-122/t4-04-gridcolordnum-after-save-response.png` (save toast; Save disabled; canvas header `Order Nu...`).
- `evidence/EXP-122/t4-07-griditem-binding-before-save.png` (GridColItem header and Name; Save enabled; Binding rows below the visible area).
- `evidence/EXP-122/t4-08-griditem-after-save-response.png` (save toast; Save disabled; canvas headers `Order Nu...` and `Item`).
- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (updated in T4).

Written by the browser tool, not by the worker (not read): snapshot files `evidence/playwright/page-2026-10-20T02-34-50-567Z.yml` through `page-2026-10-20T02-36-34-891Z.yml` (the click results), console entries `evidence/playwright/console-2026-10-20T02-34-42-522Z.log` and `-527Z.log`, and one untargeted snapshot result returned inline (none written to a tool-results file in T4).

## Worker-written file inventory (T3)

Written by the worker in T3:

- `evidence/EXP-122/t3-01-gridorders-selected-before-icon.png` (GridOrders selected; Properties GridOrders (Grid); canvas icons at the top-left of the cart grid).
- `evidence/EXP-122/t3-02-icon-hover-tooltip.png` (tooltip "Edit grid column(s)" under the blue icon).
- `evidence/EXP-122/t3-03-contained-components-dialog-open.png` (dialog "Contained Components" with the two rows).
- `evidence/EXP-122/t3-04-dialog-four-rows-before-rename.png` (four rows; gridColumn6_USER selected).
- `evidence/EXP-122/t3-05-dialog-four-names-before-ok.png` (four names in order before OK).
- `evidence/EXP-122/t3-06-tree-four-columns-before-save.png` (tree; GridOrders selected; the first two new children visible).
- `evidence/EXP-122/t3-07-after-save-response.png` (save toast; Save disabled).
- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (updated in T3).

Written by the browser tool, not by the worker (not read): snapshot files `evidence/playwright/page-2026-10-20T02-29-33-620Z.yml` through `page-2026-10-20T02-31-40-217Z.yml` (the click results), console entries `evidence/playwright/console-2026-10-20T02-29-26-545Z.log`, `...-546Z.log`, and oversized snapshot results in a tool-results directory outside the repository (none were produced in T3).

## Worker-written file inventory (T2)

Written by the worker in T2:

- `evidence/EXP-122/t2-01-staticcart-layout-before-entry.png` (Properties header and Name; Layout not visible).
- `evidence/EXP-122/t2-02-staticcart-layout-visible-before-entry.png` (after the wheel; the Components tree scrolled; Layout not visible).
- `evidence/EXP-122/t2-03-width-editor-before-entry.png` (Layout visible; Width editor open with `29.559322033898304`).
- `evidence/EXP-122/t2-04-width-20-before-save.png` (Layout visible; Width `20`, Size `20; 1.5`; Save active).
- `evidence/EXP-122/t2-05-after-save-response.png` (save toast; Layout visible; Save disabled).
- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (updated in T2).

Written by the browser tool, not by the worker (not read): `evidence/playwright/page-2026-10-20T02-26-14-081Z.yml` (StaticCart click), `page-2026-10-20T02-26-40-437Z.yml` (Width click), `page-2026-10-20T02-27-04-491Z.yml` (Save click); console entries `evidence/playwright/console-2026-10-20T02-26-03-423Z.log` and `...-424Z.log`; one oversized untargeted snapshot written to a tool-results directory outside the repository.

## Worker-written file inventory (T1)

Written by the worker:

- `experiments/EXP-122-hello-world-part-8-phase-4b-grid-orders-columns.md` (this record, created in T1).
- `evidence/EXP-122/t1-gate-tree-gridorders-properties.png` (written by the screenshot tool at the worker's request).

Written by the browser tool, not by the worker (listed so the operator can review them):

- Tool snapshot files saved by click and snapshot results under `evidence/playwright/`: `page-2026-10-20T02-09-14-335Z.yml`, `page-2026-10-20T02-09-23-776Z.yml`, `page-2026-10-20T02-10-32-419Z.yml`, `page-2026-10-20T02-10-43-935Z.yml`, `page-2026-10-20T02-10-55-694Z.yml`, `page-2026-10-20T02-11-14-209Z.yml`, `page-2026-10-20T02-11-27-483Z.yml`, `page-2026-10-20T02-11-44-512Z.yml`.
- Console log entries named by the tab list and tab select, under `evidence/playwright/` (`console-2026-10-20T02-09-06-483Z.log`, `console-2026-10-20T02-09-06-484Z.log`). These were not read.
- Four oversized snapshot results written to a tool-results directory outside the repository (not read).

## Cleanup inventory (so far)

Changes made by EXP-122 so far (all on FX_CustomerPortal, User scope): StaticCart Width changed from 29.559322033898304 to 20 (T2, saved). Two GridColumns added to GridOrders with New, named gridColumn5_USER (renamed GridColCount) and gridColumn6_USER (renamed GridColCustID) (T3, saved); the other two are GridColOrdNum (was gridColumn3_USER) and GridColItem (was gridColumn4_USER) (T3, saved). T4 (saved): GridColOrdNum Binding Type Property with Binding object.FX_OrderNumber; GridColItem Binding Type Property with Binding object.FX_Item (both replacing the auto-assigned object._ItemId). T5 (saved): GridColCount Binding Type Property with Binding object.FX_Count; GridColCustID Binding Type Property with Binding object.FX_CustomerID (both replacing object._ItemId). T6 (saved): GridOrders Read-Only/Disable False to True (one Save). T7 (close and reopen, readback, audit; no Save) changed nothing further; see the T7 section and "Cleanup inventory (final, after T7)". Nothing has been changed in T1. Items carried over from EXP-121 are on FX_CustomerPortal (StaticCart, GridOrders, gridColumn3_USER, gridColumn4_USER, ButtonCheckout) and the tenant-wide string FX_sCheckout.

## Acceptance checks

- AC-1 (T1): **met for T1.** Sources reviewed before the browser; session usable (no expiry); User scope confirmed; FX_CustomerPortal open and clean (Save disabled at start); no dialog open; the Region04: cartpage tree matches the expected order; StaticCart Width, GridOrders' binding and Read-Only/Disable, and the two columns' Caption and bindings recorded; baseline console count recorded (2 errors, 0 warnings); gate screenshot recorded (with the limits noted above).
- AC-2 (T2 to T6 done; the T7 readback corroborates the final values; see "Acceptance check status (T7 audit)" above). T6 evidence: GridOrders Read-Only/Disable changed from `False` to `True` (observed in the Properties panel before the change, in the list before the commit, in the panel after the commit, and in the find read after the commit); one Save with its toast; Save disabled afterwards. Screenshots `t6-01` (before change, `False` visible), `t6-02` (before Save, `True` visible), `t6-03` (Save response). The T4/T5 binding-screenshot limitations are unchanged by T6.
- AC-2 (earlier status, retained; T2 to T5 as recorded below): T5 evidence: Binding Type Property for GridColCount and GridColCustID; Binding object.FX_Count and object.FX_CustomerID (observed by snapshot and find before each Save); auto-assigned `object._ItemId` recorded for both and replaced; one Save per column with its toast; screenshots `t5-03`, `t5-04`, `t5-07`, `t5-08` (the binding rows are not visible in `t5-03` or `t5-07`; no Binding-list-open screenshot). These T5 limitations are the same as the T4 ones and are not resolved by T5.
- AC-2 (earlier status, retained): T2 and T3 and T4 as recorded below. T4 evidence: Binding Type Property for both columns, Binding object.FX_OrderNumber and object.FX_Item (observed by snapshot and find before the Save); auto-assigned `object._ItemId` recorded for both and replaced; one Save per column with its toast; screenshots `t4-03`, `t4-04`, `t4-07`, `t4-08` (the binding rows are not visible in these images; the list-open screenshot was not taken).
  - StaticCart Width entered as 20 over 29.559322033898304 (T2; observed). One Save with its response. Evidence `t2-03`, `t2-04`, `t2-05`.
  - Contained Components dialog opened from the grid icon (T3; coordinate click at (899, 267) after a coordinate hover confirmed the tooltip). Two rows added with New (gridColumn5_USER, gridColumn6_USER). Four rows renamed GridColOrdNum, GridColItem, GridColCount, GridColCustID, each with one fill and one Tab, no corrections. OK once; dialog closed with no message. One Save with its response. Evidence `t3-03` (dialog open), `t3-04` (four rows), `t3-05` (four names before OK), `t3-06` (tree before Save), `t3-07` (Save response).
  - Binding Type and Binding of the four columns: **not yet run** (T4 and T5). Read-Only/Disable: **not yet run** (T6).
  - Console count recorded after every action (2 errors, 0 warnings throughout T2 and T3).
- AC-3, AC-4, AC-5: run in T7 (see "Acceptance check status (T7 audit)" above; no acceptance is declared here).

## Final state after T1

- FX_CustomerPortal (User scope) open in the Designer, the only Form tab. Save disabled. No dialog, list, editor, or unsaved change open.
- Components tree expanded (view only). GridOrders selected, with its Properties panel showing and the Behavior group expanded (view only).
- Console: 2 errors, 0 warnings.

## Final state after T6

- FX_CustomerPortal (User scope) open in the Designer, the only Form tab. Save disabled after the T6 Save (toast confirmed). No dialog, list, menu, editor or unsaved change open. The Read-Only/Disable combobox is closed (committed by the Description row).
- GridOrders selected; its Properties panel shows `GridOrders (Grid)`, Behavior expanded (view-only), **Read-Only/Disable `True`**, Binding Type Primary Collection Grid, Binding objects, Size 35; 15 (unchanged).
- GridOrders' four GridColumn children unchanged since T5: GridColOrdNum (Property, `object.FX_OrderNumber`), GridColItem (Property, `object.FX_Item`), GridColCount (Property, `object.FX_Count`), GridColCustID (Property, `object.FX_CustomerID`).
- StaticCart Width `20` (T2). ButtonCheckout unchanged.
- Console: 2 errors, 0 warnings.

## Next step (T7)

T7 (close the clean FX_CustomerPortal once through its Form-tab control, answer No to any save prompt and record its text, reopen it once through the Form menu recent-forms entry, read the Region04 tree and the StaticCart, GridOrders and column properties, record the canvas, then write the final audit) is the next permitted task. T6 completed without a stop condition, so T7 is permitted by the brief's sequence. T7 has now been run (see the T7 section). Nothing further is permitted by this brief; the next step is the coordinator's review of this record.

## Final state after T5 (historical)

- FX_CustomerPortal (User scope) open in the Designer, the only Form tab. Save disabled after the second T5 Save (toast confirmed). No dialog, list, menu, editor or unsaved change open. The Binding combobox is closed (each commit was by the Description row).
- GridColCustID selected; its Properties panel shows `GridColCustID (GridColumn)`, Binding Type Property, Binding `object.FX_CustomerID` (read in the snapshot before the Save).
- GridColCount: Binding Type Property, Binding `object.FX_Count` (saved in the first T5 Save).
- GridColOrdNum: Binding Type Property, Binding `object.FX_OrderNumber` (T4). GridColItem: Binding Type Property, Binding `object.FX_Item` (T4).
- GridOrders Read-Only/Disable `False` (unchanged; T6 not run). StaticCart Width `20` (T2).
- Console: 2 errors, 0 warnings.

## Next step (historical, after T5; superseded by "Next step (T7)")

T6 (GridOrders Read-Only/Disable True: select GridOrders, expand Behavior view-only, open the Read-Only/Disable list, click True, Description-row commit, one Designer Save) was the next step after T5. It has since been performed (T6 section above). Both T4 and T5 completed without a stop condition, so T6 is permitted by the brief's sequence, subject to its own stop rules (Behavior must show a Read-Only/Disable row, and the console count must not rise). The state is clean for T6 to start with a fresh snapshot.

## Final state after T4 (historical)

- FX_CustomerPortal (User scope) open in the Designer, the only Form tab. Save disabled after the second T4 Save (toast confirmed). No dialog, list, menu, editor, or unsaved change open (the Binding combobox is closed; the last commit was by the Description row).
- GridColItem selected; its Properties panel shows `GridColItem (GridColumn)`, Binding Type Property, Binding `object.FX_Item`.
- GridColOrdNum: Binding Type Property, Binding `object.FX_OrderNumber` (saved in the first T4 Save; not re-selected in the second step).
- GridColCount and GridColCustID: Binding Type None, Binding blank (not configured; T5).
- GridOrders Read-Only/Disable `False` (unchanged; T6 not run). StaticCart Width `20` (from T2).
- Console: 2 errors, 0 warnings.

## Next step (historical, after T4; superseded by "Next step (T6)")

T5 (bind GridColCount to Property with Binding object.FX_Count, then GridColCustID to Property with object.FX_CustomerID; one Designer Save per column; never the variables.FX_Count variable) is the next step in the brief. It was not performed in this task. The brief allows T5 to proceed only because both T4 bindings succeeded.

## Outcome (operator, 2026-10-20)

Accepted (observed), with qualifications. **Hello World Part 8 Phase 4 is complete: on FX_CustomerPortal (User scope), FlexLayoutMain > Region04: cartpage, StaticCart now reads Width 20 (Size 20; 1.5); GridOrders (Primary Collection Grid, `objects`, 35; 15) has Behavior Read-Only/Disable True and exactly four GridColumns in order, GridColOrdNum (`object.FX_OrderNumber`), GridColItem (`object.FX_Item`), GridColCount (`object.FX_Count`) and GridColCustID (`object.FX_CustomerID`), all Binding Type Property, read back after an ordinary close and reopen.** Run R-20261020-100847-Mj02 (7 worker tasks; paused after T1 for one approved denial and after T7 for this disposition).

- Changed, for later cleanup: StaticCart Width 29.559322033898304 -> 20 (T2); GridOrders' Designer-created gridColumn3_USER and gridColumn4_USER renamed GridColOrdNum and GridColItem, and two columns added with the dialog's New control (gridColumn5_USER, gridColumn6_USER) renamed GridColCount and GridColCustID (T3); the four Property bindings (T4, T5); GridOrders Read-Only/Disable False -> True (T6). Seven Designer Saves (T2 1, T3 1, T4 2, T5 2, T6 1), each with the standard toast. No global object, no Caption/Size/Location on the columns, no Regenerate, no unload, no prompt at all.
- Screenshot viewed by the operator assistant: `t7-09-gridcolcustid-binding` (after reopen: Components rows GridColItem `object.FX_Item`, GridColCount `object.FX_Count`, GridColCustID `object.FX_CustomerID` under GridOrders, then ButtonCheckout and Region05: spacer2; Properties GridColCustID Binding Type Property, Binding `object.FX_Custome…`; canvas grid headers "Order Nu…" and "Item" with a horizontal scrollbar, Checkout below the grid; User scope).
- Console: the Designer count stayed at 2 throughout.
- Denial approved (T1): a Read of an oversized untargeted snapshot that the tool had written to the session's tool-results folder (denied directory; nothing read); the worker used targeted panel snapshots instead (EXP-114 rule).
- Findings (observed):
  1. EXP-121 finding 1 resolved: a Width entry that differs from the displayed value (20 over 29.559322033898304) is registered and persists; supports the inference that EXP-121's re-entry of an equal value was not registered.
  2. The grid's 'Edit grid column(s)' icon has no accessible name until hovered (tooltip); a second icon sits right of it. The 'Contained Components' dialog toolbar is + (New), trash, up, down; New appends a row named gridColumnN_USER at the end (the selected row was the last one, so 'after the selected row' and 'at the end' are not distinguished). Renaming in the dialog's Name value cell (plain fill, Tab) works for existing and new rows; OK closes with no message.
  3. Choosing Binding Type Property on a GridColumn auto-assigns Binding `object._ItemId` (4 of 4, as in EXP-068-R2); the exact option replaces it. The Components-list Data Source cell lags until reopen (as in EXP-068-R2).
  4. Behavior expands on a double-click of its label (a single click only selects); its rows start Breadcrumb, Read-Only/Disable, Tab Read-Only Field, Hidden, No Tab Stop. Read-Only/Disable offers True and False.
  5. The design canvas shows the grid's column headers from the property labels (Captions blank); Count and Customer ID lie beyond the grid's visible width.
- Qualifications accepted by the operator: T7 part A action counts approximate after context compaction; T4/T5 screenshots do not show the Binding rows and no Binding-list-open screenshot (bindings supported by targeted snapshots and `t7-07` to `t7-09`); ButtonCheckout's properties not re-read in T7 (never edited; tree row present); one stale-reference recovery without the untargeted snapshot; misleadingly named `t2-02` (shows the Components tree); same-session close and reopen.
- Confinement (git status): only `evidence/EXP-122/` and this record were written by the run (the unreviewed `tools/claude-harness/briefs/EXP-119.brief.json` predates it and is untouched).
- Cleanup inventory (Phase 4b): StaticCart Width; GridOrders' GridColCount and GridColCustID (added) and the renames/bindings of all four columns; GridOrders Read-Only/Disable.
- Next: Part 8 Phase 5 (09:53 onward): page navigation (Visible When / Enabled When on the page regions driven by the menu buttons).
