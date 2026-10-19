# EXP-120 - Hello World Part 8 Phase 3: StaticCount, EditCount (Variable FX_Count) and ButtonAddToCart

Status: **accepted (observed), with qualifications — operator, 2026-10-20; see Outcome (operator) at the end.** **T1 to T5 complete (final audit in the T5 section). T1 (read-only gate and string check) complete. T2 (StaticCount) complete with 2 Designer Saves. T3 (EditCount: placement, name, Justification Left, Binding Type Variable with FX_Count, Size 7; 1.5) complete with 3 Designer Saves. T4 (ButtonAddToCart: placement, name, Caption FX_sAddToCart with string created through the ellipsis, Theme Class FX_BlueButton, Size 20; 1.5) complete with 3 Designer Saves. T5 (close/reopen readback and final audit) complete; the Form is open and clean. Findings are observed only; the origin of the FX_Count row under Form - Temporary is unresolved (see T5).**
Run: R-20261019-232616-mUEU (cycle 0). Date: 2026-10-19. Editing scope: User (anton.ramos@3mworks.com.ph).
Brief: `tools/claude-harness/briefs/` (not readable by the worker; the bounded instruction and brief text were supplied in the task).
Tutorial source: `docs/mongoose/transcripts/hello-world-pt8.md` Phase 3 (lines 125-133), transcript lines 365-381 (04:47-06:39).
Predecessors: EXP-113 (FlexLayoutButtons), EXP-114 (StaticHome, GridItems), EXP-118 (Part 8 Phase 2, runtime tiles).

## Objective

On FX_CustomerPortal (User scope), in FlexLayoutHome > Region04: buttons > FlexLayoutButtons:

- StaticCount (Static, Name StaticCount, Caption FX_sCount = Count) in Region00: count.
- EditCount (Edit, Name EditCount, Justification Left, Binding Type Variable, Binding variable FX_Count through the Binding ellipsis, Size 7; 1.5) in Region00: count.
- ButtonAddToCart (Button, Name ButtonAddToCart, Caption FX_sAddToCart = Add To Cart, Theme Class FX_BlueButton, Size 20; 1.5) in Region02: cart.

Operator decisions (2026-10-19): no shopping-cart Bitmap and no Image and Text (no image in `assets/`); the variable is named FX_Count; no Regenerate (EXP-118: Save plus reopen is enough; Regenerate not authorized).

Findings are observed only.

## Sources reviewed (before any browser action, T1)

- `AGENTS.md` (repository file, read in full).
- `docs/mongoose/transcripts/hello-world-pt8.md` lines 125-133 (Phase 3 table) and lines 365-381 (transcript 04:47-06:39).
- `recipes/components/add-component-from-toolbox.md` (full).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- Outcome (operator) sections only: EXP-118 (lines 365-380, operator 2026-10-19), EXP-113 (lines 696-714, 2026-10-18), EXP-110-R3 (lines 421-436, 2026-10-18), EXP-114 (lines 681-701, 2026-10-18), EXP-056 (lines 246-271, 2026-10-11).
- No other records were read.

Lessons carried in from the Outcome sections (applied in this run): a Caption commit is done by clicking the Description row, then checking that Save is enabled (EXP-110-R3); the Strings filter applies only after clicking its search icon (EXP-110-R3); after a reopen, a click on a component's Components row may leave Properties on the Form, so the Type cell is clicked instead (EXP-113 finding 4, EXP-114 finding 5); a Binding Type change may raise an OK-only regen prompt (EXP-114 finding 1, relevant from T3); recent-forms reopen may need one retry (EXP-056 finding 3, not needed in T1).

## Starting state (T1, observed)

- Tabs at T1 start: tab 0 Web Client ("Mongoose", portal URL); tab 1 Designer ("Infor Mongoose Application Development Framework", URL with `MGForm=FX_CustomerPortal`).
- Web Client tab (checked read-only, selected once to verify): signed in as anton.ramos@3mworks.com.ph, Explorer panel visible, no Session Expired modal, no sign-in form, no 'Logout Successful'. Its page counter read 3 errors, 10 warnings (its own baseline; not re-read after later steps).
- Designer tab: FX_CustomerPortal tab active (only Form tab open). Toolbar Save and Regenerate Form disabled; Undo and Redo disabled. Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No dialog open. The Designer page counter read **2 errors, 0 warnings** (baseline, B0).
- Designer Form properties: Name FX_CustomerPortal, Device Type Default, Form Type Flex, Version "User version for user anton.ramos@3mworks.com.ph".
- Details panel was collapsed at start; it was expanded in T1 (view state only, no Form change).
- Form was not opened or closed in T1 (already open and clean; no recent-forms action needed).

## T1 gate results

| Check | Result | Evidence |
| --- | --- | --- |
| Session usable (both tabs) | Yes. Web Client signed in; Designer responsive; no expiry or server-event error at any point. | t1-01; Web Client snapshot (in this record) |
| Scope User | Yes. Status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no 'Identify Your Editing Scope' dialog. | t1-01, t1-15 |
| FX_CustomerPortal open and clean | Yes. Tab active; Save disabled (verified at start, after each dialog step, and after Cancel). | t1-01; toolbar snapshot after Cancel |
| No dialog open at start | Yes. | t1-01 |
| FlexLayoutButtons regions empty | Yes (observed). Region04: buttons > FlexLayoutButtons (FlexLayout, container FlexLayoutHome, Pane 0, Tab 0) has three regions, Region00: co... (count), Region01: sp... (spacer) and Region02: cart; none shows an expand chevron or child rows in the fully expanded tree. Names are truncated in the grid. | t1-06 (also t1-05 for the parent row) |
| Variables tab (view only) | Form - Persistent holds one variable, `fds_SC2`. FX_Count is absent. Global - Persistent rows visible: ccvw_OutputFormatInlineAll, ccvw_PrinterName, gbgc_bg, gbgc_GradientTest1-3, IncludeBadgeStatusVar, IsDiagnosticsTimerElapsed, LoginFoundUser, lse_* (several), lsm1_CoreDocumentType, lsm1_CustomMethodNameVar. No FX_ entry in the rendered rows. Global - Temporary and the rest of the Global - Persistent list were not rendered and were not read. | t1-07, t1-08; Variables snapshot |
| Strings check | FX_sHome = Home (positive control passed). FX_sCount = Count (present; reused in T2, no ellipsis). FX_sAddToCart: no rows (absent; will be created through the Caption ellipsis in T4 only if still absent). | t1-10 to t1-14 |
| Buttons band located | Yes. Below the grid band (grid band ends near canvas y 378): count column on the left, a narrow spacer divider, cart column on the right; a footer band below. No component is in the band. | t1-15 |
| Baseline console (Designer) | **2 errors, 0 warnings** (B0). | Tool output at start and after each action |

## Components tree (FlexLayoutHome > Region04, T1, read-only)

Observed in Details > Components after expanding all rows (view only):

- Pane (00) > flexlayoutPane_FX_CustomerPortal (FlexLayout)
  - Region00: header > FlexLayoutHeader > Region00: header > StaticHeader ... (header band; not changed)
  - Region02: grid > GridItems (Grid, Data Source objects2, Container FlexLayoutHome) > gridColumn1..., gridColumn2... (not changed)
  - Region03: spacer2
  - Region04: buttons > FlexLayoutButtons (FlexLayout, Pane 0, Container FlexLayoutHome, Tab 0) > Region00: co..., Region01: sp..., Region02: cart (all three with no children)
  - Region04: cartpage; Region05: spacer2 (siblings, not changed)
  - Region02: footer > FlexLayoutFooter > Region00: UNKNOWN0

The tree contains no StaticCount, EditCount or ButtonAddToCart. The gate passes: count, spacer and cart are empty. (The tree rows above are read from screenshots t1-02 to t1-06; the full untargeted snapshots were saved to files by the tool and were not read or searched.)

## String check (Edit menu > String, Global Objects, T1)

Steps: Edit menu (1 click), String menu item (1 click, dialog opened), then per string: filter typed in the Strings filter, search icon clicked, result read, and (for present strings) the row clicked to show its value in the dialog's Properties pane. Dialog closed with Cancel. No string was created, changed or saved.

| String | Filter result | Value (Properties pane) | Use in run |
| --- | --- | --- | --- |
| FX_sHome (positive control) | One row, FX_sHome | String Value `Home` | Control passed |
| FX_sCount | One row, FX_sCount | String Value `Count` | Reuse in T2; no ellipsis |
| FX_sAddToCart | No rows | (not applicable; the Properties pane still showed FX_sCount from the earlier selection) | Absent; create through the Caption ellipsis in T4 |

After Cancel, the toolbar snapshot shows Save disabled and no dialog open.

## Console error counts (Designer page)

- B0 (baseline, at start): 2 errors, 0 warnings.
- After each action in T1, the tool output showed 2 errors, 0 warnings. Two exceptions: the `type` outputs (filter text entry) did not print a console line; the next action's output showed 2. No rise was observed; no stop rule applied.
- Web Client page: 3 errors, 10 warnings at its single read (its own baseline).

## T1 action audit (cumulative; T1 is the first task of this experiment)

| Action type | Count | Detail |
| --- | --- | --- |
| Tab list (read-only) | 2 | Before the first selection, and before selecting the Web Client tab |
| Tab select | 3 | Designer (index 1), Web Client (index 0), Designer (index 1); all succeeded after a list |
| Browser snapshot | 18 | 17 succeeded; 1 error: `Ref e2300 not found` (dialog button bar). Untargeted: 9 (one of them the fresh snapshot after that error; allowance used: 1). Targeted: 9 (targets e464, e2, e2016 x3, e2001 x2, e11, and e2300, the one that errored) |
| Browser find (read-only) | 1 | `FlexLayoutButtons` on the collapsed tree: no match (expected before expanding) |
| Screenshot | 15 | t1-01 to t1-15 |
| Click (non-mutating) | 13 | Expand Panel (Details) 1; Components tab 1; Components grid Expand 1; Variables tab 1; Variables grid Expand 1; Edit menu 1; String menu item 1 (dialog opened); Strings search icon 3; Strings result row 2; Cancel 1 (dialog closed) |
| Type (Strings filter text only) | 3 | FX_sHome, FX_sCount, FX_sAddToCart (filter entries; no value entered in any field of a Form or string) |
| Mouse move (hover, no click) | 2 | (900,800) over the Components tree; (1000,450) over the canvas |
| Mouse wheel (view-only scroll) | 5 | Components tree 4 (+600, +400, -200, +120); canvas 1 (+400) |
| Coordinate click | 0 | (no placement and no list-arrow coordinate clicks) |
| Toolbox selection, placement | 0 | |
| Undo / Redo | 0 / 0 | |
| List open | 0 | |
| Dialog open | 1 | Global Objects (Strings) |
| Dialog OK | 0 | |
| Dialog Cancel | 1 | Global Objects, closed with Cancel |
| Prompt (any) | 0 | |
| Designer Save | 0 | Save disabled throughout |
| Form close / reopen | 0 / 0 | FX_CustomerPortal not closed or reopened |
| Regenerate, unload, FormSync, deployment, Delete Form Definition, Select Form OK | 0 | |
| Strings created, components placed, bindings set | 0 | |
| Server-event error | 0 | |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | |
| Console error rise | 0 | Designer stayed at 2 errors |
| Drag | 0 | |

Notes on T1 view changes (no Form or global change): the Details panel was expanded; the Components and Variables grids were expanded all; the Designer canvas was scrolled once.

## Observations (T1, observed only)

1. The Details panel opened on the Collections tab; the Components tab lists Pane (00) only until expanded. A targeted find on the collapsed tree returned no match for FlexLayoutButtons.
2. After Cancel on the Global Objects dialog, the Designer URL lost its `MGForm=FX_CustomerPortal` parameter. The FX_CustomerPortal tab stayed active and the canvas still showed the Form (the same behaviour as EXP-114 finding 6 after a dialog OK). No action was taken on the URL.
3. The Strings list shows FX_sHome and FX_sCount in red text. The meaning of the colour is not established.
4. In the FX_sAddToCart filter, the Strings list was empty while the Properties pane still showed FX_sCount's values from the earlier selection. The absence is read from the empty list, not from the Properties pane.
5. Variables tab: the Form - Persistent category holds `fds_SC2`; EXP-056's Outcome recorded `InitialCommand` there on 2026-10-11. This difference is recorded only; it is outside this experiment.
6. The Components and Variables grids, when fully expanded, produced snapshot output too large to return inline. The tool saved 13 page snapshots to `evidence\playwright\` (see the file inventory). The worker did not read, grep or otherwise search those files, and the efficiency rule was not followed for these outputs.
7. Full Components tree: the three FlexLayoutButtons regions are shown with truncated names (co..., sp..., cart) in the grid; the full names come from EXP-113.

## Acceptance status after T1

- AC-1: **supported** for the checks listed above (sources reviewed, session usable, User scope, FX_CustomerPortal open and clean, count/spacer/cart empty, Variables recorded, strings checked, buttons band located, baseline console recorded). Evidence: t1-01 (gate), t1-06 (regions), t1-07/t1-08 (Variables), t1-10 to t1-14 (Strings), t1-15 (band). Limitation: Global - Temporary and the full Global - Persistent list were not read.
- AC-2 to AC-5: not yet applicable (no T2 to T5 action performed).

## Evidence files (T1)

| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-120/t1-01-designer-details-components-tab.png` | Designer: FX_CustomerPortal canvas, Details > Components with Pane (00) collapsed; status bar User scope; Properties shows Form props. | Save state (greyed toolbar, verified by snapshot instead); region contents. |
| `evidence/EXP-120/t1-02-components-tree-expanded.png` | Components expanded: flexlayoutPane_FX_CustomerPortal > Region00: header > FlexLayoutHeader; StaticHeader partly visible. | Region04 contents (scrolled later). |
| `evidence/EXP-120/t1-03-components-tree-scrolled.png` | Tree: Region01: spacer, Region02: grid > GridItems (Grid, objects2) > gridColumn1..., gridColumn2...; Region03: spacer2. | FlexLayoutButtons (not yet in view). |
| `evidence/EXP-120/t1-04-components-tree-region04.png` | Tree: Region04: cartpage, Region05: spacer2, Region02: footer > FlexLayoutFooter > Region00: UNKNOWN0 (scrolled past Region04: buttons). | Region04: buttons children. |
| `evidence/EXP-120/t1-05-components-tree-region04-buttons.png` | Tree: GridItems rows, Region03: spacer2, Region04: buttons (expanded). | FlexLayoutButtons row (below the view). |
| `evidence/EXP-120/t1-06-components-tree-flexlayoutbuttons.png` | Tree: FlexLayoutButtons (FlexLayout, container FlexLayoutHome, Pane 0, Tab 0) with Region00: co..., Region01: sp..., Region02: cart; no child rows; Region04: cartpage follows. | Full names of the regions (truncated); that no hidden rows exist below in another tab. |
| `evidence/EXP-120/t1-07-variables-tab.png` | Variables tab: Form - Persistent, Global - Persistent, Global - Temporary (collapsed). | Contents. |
| `evidence/EXP-120/t1-08-variables-tab-expanded.png` | Variables expanded: Form - Persistent `fds_SC2`; Global - Persistent first rows (no FX_ entry). | Global - Temporary contents; the rest of the global list. |
| `evidence/EXP-120/t1-09-edit-menu-open.png` | Edit menu items (String, Variable, Theme, Validator ...). | Anything about strings. |
| `evidence/EXP-120/t1-10-string-dialog-initial.png` | Global Objects dialog opened: Strings list unfiltered; OK, Cancel, Help. | Strings contents (unfiltered). |
| `evidence/EXP-120/t1-11-strings-fx_shome-filter.png` | Strings filter FX_sHome: one row FX_sHome. | Its value (read in t1-12). |
| `evidence/EXP-120/t1-12-strings-fx_shome-value.png` | FX_sHome selected: String Value `Home` (positive control). | Anything about FX_sCount or FX_sAddToCart. |
| `evidence/EXP-120/t1-13-strings-fx_scount-value.png` | FX_sCount selected: String Value `Count`. | Any other string. |
| `evidence/EXP-120/t1-14-strings-fx_saddtocart-check.png` | Filter FX_sAddToCart: no rows; Properties still shows FX_sCount (stale). | Absence by itself (also read from the snapshot: grid empty). |
| `evidence/EXP-120/t1-15-canvas-buttons-band.png` | Canvas scrolled: grid band, buttons band (left count column, narrow spacer, right cart column, empty), footer band; no dialog. | Save state (verified by toolbar snapshot). |

Screenshots were viewed by the worker. None of them shows a Save-enabled state, a dialog or a server-event error.

## Worker-written file inventory (T1)

Written by the worker:
- `experiments/EXP-120-hello-world-part-8-phase-3-count-and-add-to-cart.md` (this record; created).
- `evidence/EXP-120/t1-01-designer-details-components-tab.png` to `evidence/EXP-120/t1-15-canvas-buttons-band.png` (15 screenshots, requested by filename).

Written by the browser tool automatically (not by the worker's choice; not read, grepped or edited):
- `evidence/playwright/page-2026-10-19T15-27-01-243Z.yml`, `...15-27-10-539Z.yml`, `...15-27-25-966Z.yml`, `...15-27-54-947Z.yml`, `...15-28-04-987Z.yml`, `...15-28-15-831Z.yml`, `...15-28-24-171Z.yml`, `...15-28-34-638Z.yml`, `...15-28-44-323Z.yml`, `...15-28-54-340Z.yml`, `...15-28-58-194Z.yml`, `...15-29-06-524Z.yml`, `...15-29-18-460Z.yml` (13 page snapshot files; the time stamps are in the names).
- `evidence/playwright/console-2026-10-19T15-26-38-204Z.log` and `...15-26-38-205Z.log` (tool console logs; not read).

No other files were written.

## Cleanup inventory (T1)

Nothing was created in T1. Cleanup inventory for the run is open until T5.

## Final state (end of T1)

- Designer tab (tab 1) selected; FX_CustomerPortal active; User scope.
- Save disabled; Undo and Redo disabled; no dialog open; no list or menu open.
- Details panel expanded (Variables tab selected); canvas scrolled to the buttons band (view only).
- Console (Designer): 2 errors, 0 warnings.
- The FlexLayoutButtons regions remain empty. No component, string, binding or Form property was changed.

## T2 - StaticCount (run R-20261019-232616-mUEU, cycle 1, task T2)

Result: **Step A and Step B complete. StaticCount placed in Region00: count, named StaticCount, Caption FX_sCount (existing string, no ellipsis), two Designer Saves, each with the standard toast. No correction, no error, no stop rule triggered.**

### T2 start state (observed)

- Designer tab selected (tab 1); FX_CustomerPortal active; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo disabled; no dialog; Details panel open on Variables (view state left from T1).
- Designer console at start: **2 errors, 0 warnings** (baseline, unchanged from T1).
- Web Client tab was listed but not selected in T2 (not needed; T2 is Designer-only).
- The FlexLayoutButtons regions were still empty at T2 start (same as T1; not re-read in full).

### Step A - StaticCount (Static, placement and Name)

1. Toolbox: Static row clicked once (ref from the start snapshot). Toolbox row highlighted (armed). Console 2.
2. Placement: one coordinate click at canvas (715, 470), inside the **left (count) column** of the buttons band, below the grid band and clear of the divider at x≈773-782. This is the only coordinate click in T2 (placement). Console 2.
3. Result (`t2-02`): a new Static appeared at the top of the count column. Properties header `static1_USER (Static)`; Save and Undo became enabled.
4. Components tree (`t2-05`, `t2-04`, and the untargeted snapshot after the Name commit): `FlexLayoutButtons` (container FlexLayoutHome) > `Region00: co…` > `static1_U…` (Type Static, Container FlexLayoutButtons, Pane 0). `Region01: sp…` and `Region02: cart` are siblings and empty. **Placement is correct: the new Static is a child of Region00: count.** No Undo was needed.
5. Defaults recorded (view only, `t2-06` to `t2-08`):
   - Name `static1_USER`; Description blank; Caption blank; Type Static; From Device Master True.
   - Appearance: Theme Class blank; Background Color blank; Foreground Color `#000000`; Bitmap File Name blank; Font blank; **Justification Right** (default).
   - Behavior: Read-Only/Disable False; Tab Read-Only Field False; Hidden False; No Tab Stop False; Auto Complete False.
   - Data Source: **Binding Type None**; Binding blank; Required False.
   - Layout: Unit **Char**; **Size 20; 1** (default); Containment blank; Tab Order 0; **Flex Attributes `Index: 0 Target: count`**.
   - Miscellaneous: Extension Properties blank.
   - Note: `t2-08-static-layout-defaults.png` was captured twice under the same filename; the second capture (Layout and Flex Attributes) overwrote the first (Data Source / Binding Type None). The Binding Type None reading is recorded from the first capture's view and from the untargeted snapshot, but the first image is no longer on disk.
6. Name: the Name value cell was clicked (ref), the editor opened with `static1_USER` selected. The editor textbox was not in the targeted snapshot; a fresh untargeted snapshot was taken after one `Ref e721 not found` (the one recovery allowance for this task). The editor textbox was then filled with `StaticCount` (one plain fill) and committed with one Tab.
7. Verification after Tab (`t2-10`): Properties Name reads `StaticCount`; the Components tree shows `StaticCount  Static  0  FlexLayoutButtons  0` under `Region00: co…`. The tree row updated in the same view (no label lag seen). Console 2.
8. **Save 1** (toolbar Save, one click, ref from the latest snapshot): response toast `Save — Form [FX_CustomerPortal] and global object(s) were saved.` (`t2-11`). Save greyed afterwards; Undo greyed; Components tree still shows StaticCount under Region00: count. Console 2.

### Step B - Caption FX_sCount (existing string, no ellipsis)

1. The Caption value cell's list arrow was clicked by its reference (the locator resolved to the cell's `mg-arrow-cell-icon`; the click was ref-based, not a coordinate click). The Caption combobox opened with the full string list (`t2-12`). Console 2.
2. The Caption ID was typed key by key with nine `press_key` actions (F, X, _, s, C, o, u, n, t). The field shows `FX_sCount` with the list still open (`t2-13`). No list option was clicked; no Tab was used; no accessibility snapshot was taken while the list was open.
3. Field left by clicking the Description row (ref from the snapshot taken before the Caption list opened). Console 2.
4. Committed state (`t2-14`): Caption `FX_sCount`; Save enabled; Undo enabled; the canvas shows the static label **"Count"** in the count column's top band. The `FX_sCount` string was not created or changed (T1 had found FX_sCount = `Count`).
5. **Save 2** (toolbar Save, one click; ref from the snapshot taken after the commit): response toast `Save — Form [FX_CustomerPortal] and global object(s) were saved.` (`t2-15`). Save greyed afterwards. Console 2.

### T2 end state (observed)

- Form FX_CustomerPortal open and clean: Save greyed, Undo greyed (`t2-15`, toolbar snapshot).
- No dialog, list, menu, editor or unsaved change open; the Caption list closed after the Description click (`t2-14`, `t2-15`).
- Details panel: Components tab shown; Description row is the selected row in Properties (view state). Properties shows the Component tab (`static1_USER` renamed to StaticCount).
- Components tree: FlexLayoutButtons > Region00: count > **StaticCount** (Static, Container FlexLayoutButtons). Region01 spacer and Region02 cart remain empty.
- Console: 2 errors, 0 warnings at every output that reported it.

### Console error counts (T2, Designer page)

- Start: 2 errors, 0 warnings.
- After each click that reported it: Static row 2; placement 2; Components tab 2; Layout row 2; Properties Expand 2; Name value cell 2; untargeted snapshot 2; Name Tab-commit toolbar snapshot 2; Save 1 response 2; Caption cell 2; Description commit 2; Save 2 response 2.
- Actions whose tool output does not carry a console line (type, press_key, screenshot, mouse move, wheel): the count is not shown by those outputs; the next output that carried the count showed 2. No rise was observed at any point.
- Web Client console was not read in T2.

### T2 action audit (T2 only; counts exact)

| Action | Count | Detail |
| --- | --- | --- |
| Tab list | 1 | before the first selection in the task |
| Tab select | 1 | Designer (index 1) |
| Browser snapshot calls | 10 | 9 succeeded, 1 error: untargeted 4 (start, after placement, fresh after the error, after Save 1); targeted 6 (Properties tabpanel x3 incl. 1 error, Name editor's table, toolbar x2). The error was `Ref e721 not found` (Properties tabpanel after the Name editor opened) |
| Fresh-snapshot recovery allowance used | 1 | one fresh untargeted snapshot after the one `Ref not found` error |
| Screenshot calls | 16 | 15 files on disk (`t2-08` overwritten once) |
| Toolbox selection | 1 | Static row |
| Placement (coordinate click) | 1 | canvas (715, 470), count column |
| Coordinate clicks other than placement | 0 | |
| Component placed | 1 | static1_USER, renamed StaticCount |
| Clicks (ref-based, including Save and view clicks) | 9 | Static row 1; Components tab 1; Layout row 1; Properties Expand toolbar 1; Name value cell 1; Caption cell arrow 1; Description row 1; Save 2 |
| List opened | 1 | Caption combobox (opened by the cell's arrow icon); closed by the Description click, no option chosen |
| Typing (fill) | 1 | Name = StaticCount (plain fill) |
| Key presses | 10 | Caption: F X _ s C o u n t (9 presses); Name: Tab (1) |
| Mouse moves (hover, no click) | 2 | (900, 800) over the Components tree; (1700, 600) over Properties |
| Wheel (view-only scrolls) | 5 | Components tree 2 (+900, -60); Properties 3 (+600, +600, -5000) |
| Undo / Redo | 0 / 0 | no misplacement |
| Dialog opened / OK / Cancel | 0 / 0 / 0 | |
| Prompts | 0 | |
| Designer Save | 2 | Save 1 after Name (toast, greyed afterwards); Save 2 after Caption (toast, greyed afterwards) |
| Strings created | 0 | FX_sCount reused (no ellipsis) |
| Per-field entries | Name 1; Caption 1 | corrections 0 |
| Server-event error | 0 | |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | |
| Console rise | 0 | |
| Drags | 0 | |
| Form close / reopen | 0 / 0 | |
| Regenerate / unload / FormSync / deployment / Delete Form Definition / Select Form OK | 0 | |

### Deviations (T2, observed by the worker)

1. Snapshot output for Properties was saved by the tool to files for several outputs; the worker did not read or search them. The inline snapshot was used where needed (untargeted and targeted).
2. `Ref e721 not found` after the Name editor opened: one fresh untargeted snapshot was used (the allowance), and the Name editor textbox was then taken from that snapshot.
3. The Caption list arrow was clicked by its reference (not a coordinate). The brief allowed one coordinate for a list arrow with no reference; none was needed.
4. Caption typing used one `press_key` per character (nine presses) because the list was open and the brief forbids snapshots during that state; this is recorded as the key-by-key method.
5. `t2-08` was captured twice under one filename (see the Defaults note above).
6. The Layout group was expanded by clicking its row and then the Properties toolbar Expand control (both view-only, no value changed).

### Acceptance status after T2

- AC-1: unchanged (supported after T1).
- AC-2 (StaticCount part): **supported for T2**: StaticCount placed in Region00: count (tree evidence `t2-05`), named StaticCount (`t2-10`), Caption FX_sCount committed (`t2-14`), one Save per step with response toasts (`t2-11`, `t2-15`), console recorded after each action, one correction per field not needed (0 corrections). EditCount and ButtonAddToCart not yet placed.
- AC-3, AC-4, AC-5: not yet applicable (T5 readback and audit not run).

### Evidence files (T2)

| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-120/t2-01-static-armed-canvas-before-placement.png` | Static row highlighted in the Toolbox; canvas buttons band (left column, divider, right column) before placement; Save greyed. | The placement result. |
| `evidence/EXP-120/t2-02-static-placed-canvas.png` | New Static in the count column's top band; Properties `static1_USER (Static)`; Save and Undo enabled. | Its tree parent (shown in t2-05). |
| `evidence/EXP-120/t2-03-static-tree-before-name.png` | Components tree at top; Properties static1_USER; Save enabled. | The Region00 row (not in view). |
| `evidence/EXP-120/t2-04-static-tree-region04-scan.png` | Tree scrolled: `static1_U…` (Static, FlexLayoutButtons) directly above Region01: sp… and Region02: cart. | Whether the row is under Region00 (confirmed in t2-05). |
| `evidence/EXP-120/t2-05-static-placed-tree-under-region00.png` | Tree: FlexLayoutButtons > Region00: co… > `static1_U…` (Static, FlexLayoutButtons); Region01: sp…; Region02: cart. | The final name (renamed in t2-10). |
| `evidence/EXP-120/t2-06-static-defaults-layout-expanded.png` | Layout row selected; the Layout group not yet expanded. | Layout values. |
| `evidence/EXP-120/t2-07-static-defaults-expanded.png` | Appearance expanded: Theme Class blank, Foreground #000000, Bitmap File Name blank, Justification Right, Behavior values. | Data Source and Layout values (t2-08). |
| `evidence/EXP-120/t2-08-static-layout-defaults.png` | Layout: Unit Char, Size 20; 1, Containment blank, Tab Order 0, Flex Attributes `Index: 0 Target: count`; Inheritance and Miscellaneous. | The first capture of this filename (Data Source Binding Type None) — overwritten. |
| `evidence/EXP-120/t2-09-name-cell-selected.png` | Name editor open with `static1_USER` selected. | The typed value. |
| `evidence/EXP-120/t2-10-name-StaticCount-after-tab.png` | Name `StaticCount` after Tab; tree row `StaticCount` under Region00: co…; Save enabled. | That the Name is saved (Save 1 shown in t2-11). |
| `evidence/EXP-120/t2-11-save-1-after-name-staticcount.png` | Save toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save greyed; tree StaticCount under Region00: co…. | Anything after Save 1. |
| `evidence/EXP-120/t2-12-caption-editor-open.png` | Caption combobox open with the full string list (unfiltered). | The typed value. |
| `evidence/EXP-120/t2-13-caption-typed-FX_sCount.png` | Caption field shows `FX_sCount`; list still open. | That it is committed (t2-14). |
| `evidence/EXP-120/t2-14-caption-committed-FX_sCount.png` | Caption `FX_sCount` committed; canvas label "Count" on the count column's Static; Save and Undo enabled; list closed. | That the save persisted (t2-15). |
| `evidence/EXP-120/t2-15-save-2-after-caption-FX_sCount.png` | Save toast; Save greyed; Caption `FX_sCount`; Name StaticCount; tree row StaticCount under Region00: co…. | Any reopen or cross-session persistence. |

Screenshots were viewed by the worker. None shows a server-event error, a sign-in page, a dialog or an open list at the end of T2.

### Worker-written file inventory (T2)

- Written or updated: `experiments/EXP-120-hello-world-part-8-phase-3-count-and-add-to-cart.md` (status line, T2 section, this inventory).
- Written: `evidence/EXP-120/t2-01-…png` to `evidence/EXP-120/t2-15-…png` (15 files; `t2-08` written twice, the second overwrote the first).
- Tool-written, not read or searched by the worker: `evidence/playwright/page-2026-10-19T15-32-53-065Z.yml`, `…15-33-01-259Z.yml`, `…15-33-12-188Z.yml`, `…15-33-33-650Z.yml`, `…15-33-41-379Z.yml`, `…15-34-04-489Z.yml`, `…15-34-30-095Z.yml`, `…15-34-43-584Z.yml`, `…15-35-08-505Z.yml`, `…15-35-16-469Z.yml` (10 snapshot files), and `evidence/playwright/console-2026-10-19T15-32-47-763Z.log`, `…15-32-47-764Z.log`.
- T1 files (`t1-01` to `t1-15`) are unchanged.

### Cumulative browser action audit (T1 + T2)

| Action | T1 | T2 | Total |
| --- | --- | --- | --- |
| Tab list | 2 | 1 | 3 |
| Tab select | 3 | 1 | 4 |
| Snapshot calls (successful / error) | 17 / 1 | 9 / 1 | 26 / 2 |
| Untargeted / targeted snapshot calls | 9 / 9 | 4 / 6 | 13 / 15 |
| Fresh-snapshot recovery (one per Ref-not-found) | 1 | 1 | 2 |
| Screenshot calls | 15 | 16 | 31 |
| Toolbox selection | 0 | 1 | 1 |
| Component placed | 0 | 1 | 1 |
| Coordinate clicks (placement) | 0 | 1 | 1 |
| Coordinate clicks (list arrow) | 0 | 0 | 0 |
| Clicks (ref-based, all) | 13 | 9 | 22 |
| Mouse moves | 2 | 2 | 4 |
| Wheel scrolls (view-only) | 5 | 5 | 10 |
| Typing (fill) | 3 (filter text only) | 1 (Name) | 4 |
| Key presses | 0 | 10 | 10 |
| List opened | 0 | 1 | 1 |
| Dialog opened / Cancel / OK | 1 / 1 / 0 | 0 / 0 / 0 | 1 / 1 / 0 |
| Designer Saves | 0 | 2 | 2 |
| Undo / Redo | 0 / 0 | 0 / 0 | 0 / 0 |
| Strings created | 0 | 0 | 0 |
| Prompts | 0 | 0 | 0 |
| Server-event error | 0 | 0 | 0 |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Console rise | 0 | 0 | 0 |
| Drags | 0 | 0 | 0 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 |

### Cleanup inventory (after T2)

- Component: `StaticCount` (Static) in FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region00: count (on FX_CustomerPortal, User scope). Caption `FX_sCount`. Other properties at defaults (Justification Right, Binding Type None, Size 20; 1, Flex Attributes Index 0 Target count).
- Global objects: none created or changed in T2 (FX_sCount = `Count` was found in T1 and reused).

### Final state (end of T2)

- Designer tab selected; FX_CustomerPortal open and clean (Save greyed, Undo greyed); User scope.
- No dialog, list, menu, editor or unsaved change open.
- Console (Designer): 2 errors, 0 warnings.
- Web Client tab not touched in T2 (state as at T1).

## T3 - EditCount (run R-20261019-232616-mUEU, cycle 2, task T3)

Result: **Steps A, B and C complete. EditCount placed in Region00: count (beside StaticCount), named EditCount, Justification Left, Binding Type Variable with the variable name FX_Count entered through the Binding dialog, Size 7; 1.5. Three Designer Saves, each with the standard toast. No correction to any field, no error, no stop rule triggered.** StaticCount was not changed.

### T3 start state (observed)

- Designer tab (tab 1) selected; FX_CustomerPortal active; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo greyed; no dialog or list open.
- Console at start: **2 errors, 0 warnings** (baseline from T1/T2, unchanged).
- Tree (`t3-01`): FlexLayoutButtons > Region00: count > StaticCount (Static, Container FlexLayoutButtons); Region01 spacer and Region02 cart empty. StaticCount Caption `FX_sCount`, label "Count" at the top of the count column.
- Details panel open on Components (view), Properties on StaticCount's Description row (view state left from T2).

### Step A - EditCount (Edit, placement and Name)

1. Toolbox: Edit row clicked once (ref from the start snapshot). Console 2.
2. Placement: one coordinate click at canvas (735, 470), inside the count column (x 669-773), to the right of the StaticCount label and clear of the divider at x≈773-782. This was the only coordinate click in T3 (placement). Console 2.
3. Result (`t3-02`): `edit1_USER (Edit)` appeared in the count column beside the Count label; Save and Undo enabled.
4. Tree (`t3-02`, `t3-03`): `Region00: co…` > StaticCount (Static) and `edit1_USER` (Edit), both Container FlexLayoutButtons, Pane 0. Region01 spacer and Region02 cart are siblings. **Placement correct: the Edit is a child of Region00: count.** No Undo used.
5. Defaults recorded (view only; Properties tree read from targeted snapshots):
   - Name `edit1_USER`; Description blank; Caption blank; Type Edit; From Device Master True.
   - Appearance: Theme Class blank; Foreground Color `#000000`; Bitmap File Name blank; Font blank; **Justification blank** (the Edit default is empty; the Static had Right).
   - Behavior: Read-Only/Disable False; Tab Read-Only Field False; Hidden False; No Tab Stop False; Auto Complete False.
   - Data Source: **Binding Type None**; Binding blank; Required False.
   - Layout: Unit **Char**; **Size 37.05; 2** (Edit default; width and height rows showed 37.05 and 2); Lock Size False; Containment blank; Tab Order 0; **Flex Attributes `Index: 0 Target: count`**.
6. Name: the Name value cell was clicked (ref from the targeted snapshot of the tree), the editor textbox was taken from a targeted snapshot of the Properties panel, and `EditCount` was filled (one plain fill) and committed with one Tab. Verification: the Properties header reads `EditCount (Edit)`, the Name value reads `EditCount`, and the tree row reads `EditCount  Edit  FlexLayoutButtons` under Region00: co… (`t3-03`). Console 2.
7. **Save 1** (toolbar Save, one click, reference from the snapshot taken after the Name commit): toast `Form [FX_CustomerPortal] and global object(s) were saved.` (`t3-04`). Save greyed afterwards. Tree still shows EditCount under Region00: count. Console 2.

### Step B - Justification Left, Binding Type Variable, Binding FX_Count

1. Justification: the value combobox arrow was clicked by its reference (`e2463`); the list opened with options blank, Default, Left, Center, Right (`t3-05`, screenshot, no key presses). The option `Left` was clicked from the combobox's targeted snapshot (`e3659`). The combobox then read `Left`; the field was left by clicking the Description row (not Tab). Justification shows `Left` in the tree. Console 2.
2. Binding Type: the combobox arrow was clicked by its reference (`e2644`); the list opened (`t3-06`). **Recorded options (20):** None, Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart. The option `Variable` was clicked from the combobox's targeted snapshot (`e3679`); the combobox read `Variable`; the field was left by clicking the Description row. Console 2.
3. Binding ellipsis: clicked once by its reference (`e1482`, confirmed by a targeted snapshot taken immediately before). **Dialog recorded before any entry (`t3-07`):**
   - Title: **Edit Variable Binding** (dialog with a Close Window icon).
   - Fields: **Variable:** an editable combobox with an Open button (empty); **Initial Value:** text box (empty); **Clear On Refresh?** checkbox (unchecked); **Refresh Value:** text box (disabled, grey).
   - Buttons: OK, Cancel, Help.
   - The dialog offered a variable-name field, so the brief's path applies (enter FX_Count; no value, type or collection). No list was opened.
4. Variable entry: the Variable combobox was clicked once to focus it (its reference from a targeted snapshot of the dialog). `FX_Count` was entered key by key: F, X, _, C, o, u, n, t (8 key presses; see the deviation note: F and X were sent in one parallel block). The field shows `FX_Count` (`t3-08`). Initial Value was left **blank** (no variable default was defined). Clear On Refresh left unchecked. Refresh Value left blank.
5. OK: clicked once (`e3751`) after a targeted snapshot of the dialog confirmed the combobox reads FX_Count. The dialog closed with no prompt (`t3-09`).
6. Binding values after OK (`t3-09`, `t3-10`, tree snapshot): **Binding Type `Variable`**; **Binding `variables.FX_Count`** (the tree text; the on-screen field is truncated to `variables.FX_Coun…`).
7. Variables tab (view only; `t3-10`): Details > Variables, Form - Persistent lists **only `fds_SC2`**; FX_Count is **not** listed under Form - Persistent before or after the Save (the Global categories were not scanned beyond the rendered rows, and no FX_ entry appeared there). No variable was defined or edited.
8. **Save 2** (toolbar Save, one click, reference from the snapshot taken before it): toast `Form [FX_CustomerPortal] and global object(s) were saved.` (`t3-11`). Save greyed afterwards. Binding Type `Variable` and Binding `variables.FX_Count` still shown. Console 2.

### Step C - Size 7; 1.5

1. Size row: double-clicked once (reference `e2937`). The Size group expanded in place (not an editor): Width 37.05, Height 2, Lock Size False (`t3-12`).
2. Width: the Width value cell was clicked by its reference (`e4016`); the Width editor textbox was taken from a targeted snapshot of the Properties panel. Filled `7` (one plain fill) and committed with one Tab. Size reads `7; 2` (`t3-14`). Console 2.
3. Height: the Height value cell was clicked by its reference (`e4025`); the Height editor textbox was taken from an untargeted snapshot. Filled `1.5` (one plain fill) and committed with one Tab.
4. Size before Save (`t3-15`): **Size `7; 1.5`**; Width `7`; Height `1.5`; Lock Size False; Unit Char. Console 2 (read from a shallow snapshot before the Save; no rise).
5. **Save 3** (toolbar Save, one click, reference from the shallow snapshot taken before it): toast `Form [FX_CustomerPortal] and global object(s) were saved.` (`t3-16`). Save greyed afterwards. Console 2.

### T3 end state (observed)

- Designer tab selected; FX_CustomerPortal open and clean (Save greyed; Undo greyed after Save 3 per the toolbar icons in `t3-16`).
- No dialog, list, menu, editor or unsaved change open (the Width and Height editors were closed by Tab; the Binding dialog closed with OK).
- Components: FlexLayoutButtons > Region00: count > **StaticCount** (Static) and **EditCount** (Edit, Container FlexLayoutButtons). Region01 spacer and Region02 cart remain empty.
- Canvas (`t3-16`): the count column shows the Count label and the Edit box beside it (the label now reads "Count:" with a colon, as the Static is next to an Edit; No Colon was not changed).
- Console (Designer): 2 errors, 0 warnings at every reading.

### Console error counts (T3, Designer page)

- Start: 2 errors, 0 warnings. After every output that reported it: Edit row 2; placement 2; Name value cell 2; snapshots 2; Save 1 response 2; Justification arrow 2; list screenshot 2; Left click 2; Description 2; Binding Type arrow 2; Variable click 2; Description 2; Binding ellipsis 2; dialog combobox focus 2; OK 2; Variables tab 2; Save 2 response 2; Size double-click 2; Width click 2; Height click 2; Save 3 response 2.
- Outputs without a console line (type, press_key, Tab, screenshot, find): the next output that reported it showed 2. No rise at any point. No stop rule triggered.

### T3 action audit (T3 only; counts exact)

| Action | Count | Detail |
| --- | --- | --- |
| Tab list | 1 | before the first selection in the task |
| Tab select | 1 | Designer (index 1) |
| Snapshot calls | 30 | 28 succeeded, 2 errors (`Ref e11 not found` on the toolbar after the Name Tab; `Ref e982 not found` on the Properties panel after the Width click). Untargeted 11 (incl. 1 that was too large inline, persisted by the tool; 2 shallow recovery snapshots); targeted 19 (incl. the 2 errors) |
| Fresh-snapshot recovery allowance used | 2 | one fresh untargeted snapshot after each `Ref not found` error |
| Screenshot calls | 16 | `t3-01` to `t3-16`, no overwrites |
| find calls | 4 | "Left", "Variable", "Width", "Height" (locating containers; no click was made from find output) |
| Toolbox selection | 1 | Edit row |
| Component placed | 1 | edit1_USER, renamed EditCount |
| Coordinate clicks (placement) | 1 | canvas (735, 470), count column |
| Coordinate clicks (list arrow) | 0 | every arrow had a reference |
| Ref-based clicks (all) | 18 | Edit row 1; Name value 1; Save 1 1; Justification arrow 1; Left option 1; Description 2; Binding Type arrow 1; Variable option 1; Binding ellipsis 1; Variable combobox focus 1; dialog OK 1; Variables tab 1; Save 2 1; Size double-click 1; Width value 1; Height value 1; Save 3 1 |
| List opened | 2 | Justification; Binding Type (both closed by an option click; no keyboard selection) |
| Dialog opened / OK / Cancel | 1 / 1 / 0 | Edit Variable Binding (Binding ellipsis); closed with OK |
| Prompts | 0 | |
| Typing (fill) | 3 | Name `EditCount`; Width `7`; Height `1.5` (plain fills) |
| Key presses | 11 | Name Tab 1; FX_Count 8 (F, X, _, C, o, u, n, t); Width Tab 1; Height Tab 1 |
| Mouse moves / wheel scrolls | 0 / 0 | |
| Designer Saves | 3 | Save 1 (Name EditCount); Save 2 (Justification Left + Binding Variable FX_Count); Save 3 (Size 7; 1.5); each toast, Save greyed after |
| Strings created | 0 | none (no string used in T3) |
| Global objects changed | 0 | the FX_Count name was typed into the binding only; no variable was defined or given a value |
| Undo / Redo | 0 / 0 | no misplacement |
| Server-event error | 0 | |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | |
| Console rise | 0 | |
| Drags | 0 | |
| Form close / reopen | 0 / 0 | |
| Regenerate / unload / FormSync / deployment / Delete Form Definition / Select Form OK | 0 | |

### Per-field entries and corrections (T3)

- EditCount: Name `EditCount` (1 entry, 0 corrections); Justification `Left` (1 option click, 0 corrections); Binding Type `Variable` (1 option click, 0 corrections); Binding `variables.FX_Count` (1 dialog entry + OK, 0 corrections; Initial Value left blank); Size Width `7` (1 entry, 0 corrections); Height `1.5` (1 entry, 0 corrections).
- Corrections: none. The Width value cell click left the snapshot showing the cell selected without a visible textbox; the screenshot confirmed the editor, so no retry was needed.

### Deviations and observations (T3, observed by the worker)

1. **Parallel key presses:** the `F` and `X` presses for the FX_Count entry were sent in one parallel block (two `press_key` calls issued together). The brief forbids parallel browser actions. Both presses completed in order (the field then read `FX_Count`); this is recorded as a procedural deviation, not repeated.
2. **Snapshot during an open list:** a shallow untargeted snapshot (depth 2) and a targeted snapshot of the Properties panel were taken while the Justification list was open, to obtain the option reference (the brief's no-snapshot rule was written for the Caption list). No key was pressed and no value was committed by the snapshot; the list then showed `Left` only after the option click.
3. **Oversized snapshot:** one untargeted depth-14 snapshot exceeded the inline limit and was saved by the tool (`C:\Users\juara\.claude\projects\...\tool-results\toolu_01RzJ2WwL6hgTFtvDPKY7YMM.json`, outside the repository). It was not read or searched. Subsequent reads used targeted and shallow snapshots.
4. **Binding dialog:** the Variable field is an editable combobox with an Open button; its list was not opened. The variable was typed. The Form's Variables tab did not show FX_Count under Form - Persistent after the Save (observed). Whether the binding creates a Form variable entry is not established by this run.
5. **Binding Type list:** the list has 20 options in this environment (recorded above). The list is scrollable; all 20 were read from the targeted snapshot.
6. **Size row:** the double-click expanded the Size group in place instead of opening an editor; the Width and Height value cells then opened editors (plain fill and Tab).
7. **Canvas label:** the Static label now shows "Count:" beside the Edit (observed in `t3-16`); no Static property was changed to produce it.

### Acceptance status after T3

- AC-1: unchanged (supported after T1).
- AC-2 (EditCount part): **supported for T3**: EditCount placed in Region00: count (`t3-02`, `t3-03`, `t3-16`), named EditCount (`t3-03`), Justification Left (`t3-05` list; tree value `Left`), Binding Type Variable (`t3-06` list, options recorded; `t3-09`), Binding dialog recorded before entry (`t3-07`), FX_Count entered and OK (`t3-08`, `t3-09`), Size 7; 1.5 (`t3-15`), one Designer Save after each of the three steps with its response (`t3-04`, `t3-11`, `t3-16`), console recorded after each action, no correction. ButtonAddToCart not yet placed.
- AC-3, AC-4, AC-5: not yet applicable (T5 readback and audit not run).
- AC-4 so far: no other component, global object, Bitmap or Image and Text changed in T3; no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; Undo not used.

### Evidence files (T3)

| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-120/t3-01-start-state-buttons-band.png` | Start: Designer, User scope, Properties on StaticCount (Caption FX_sCount), tree StaticCount under Region00: count, Count label on the count column, Save greyed. | Anything after T2. |
| `evidence/EXP-120/t3-02-edit-placed-canvas.png` | Edit placed: `edit1_USER (Edit)` Properties; tree `edit1_USER` (Edit, FlexLayoutButtons) at the same indent as StaticCount under Region00: co…; Save and Undo enabled. | The Name change (t3-03). |
| `evidence/EXP-120/t3-03-edit-name-EditCount-after-tab.png` | Properties Name `EditCount`; tree `EditCount` under Region00: co…; Save enabled. | That the Name is saved (t3-04). |
| `evidence/EXP-120/t3-04-save-1-after-EditCount-name.png` | Save toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save greyed; EditCount under Region00: co…. | Anything after Save 1. |
| `evidence/EXP-120/t3-05-justification-list-open.png` | Justification list open: blank, Default, Left, Center, Right. | The chosen value (tree shows Left later). |
| `evidence/EXP-120/t3-06-binding-type-list-open.png` | Binding Type list open (None selected; Variable, Property, SubCollection Grid, ... visible; list scrollable). | The chosen option (combobox reads Variable later). |
| `evidence/EXP-120/t3-07-binding-dialog-before-entry.png` | **Edit Variable Binding** dialog before any entry: Variable (empty combobox with Open), Initial Value (empty), Clear On Refresh? (unchecked), Refresh Value (disabled), OK, Cancel, Help; Binding Type Variable and Binding `variables.FX_Coun...` behind. | Its content after entry. |
| `evidence/EXP-120/t3-08-binding-variable-FX_Count-typed.png` | Variable field reads `FX_Count`; Initial Value blank; dialog still open. | That the OK committed the value (t3-09). |
| `evidence/EXP-120/t3-09-binding-after-OK-values.png` | Dialog closed; Binding Type `Variable`; Binding `variables.FX_Coun...`. | The full Binding text (tree snapshot shows `variables.FX_Count`). |
| `evidence/EXP-120/t3-10-variables-tab-view-before-save.png` | Details > Variables (view): Form - Persistent lists only `fds_SC2`; Global - Persistent first rows; Binding Type Variable and Binding visible in Properties. | FX_Count's absence from the Global categories beyond the rendered rows. |
| `evidence/EXP-120/t3-11-save-2-after-binding-FX_Count.png` | Save toast; Save greyed; Binding Type Variable; Binding `variables.FX_Coun...`. | Persistence across a reopen. |
| `evidence/EXP-120/t3-12-size-editor-open.png` | Size row expanded in place: Size 37.05; 2; Width 37.05; Height 2; Lock Size False; Unit Char; Flex Attributes Index 0 Target count. | The new values (t3-14, t3-15). |
| `evidence/EXP-120/t3-13-width-cell-selected.png` | Width editor open with `37.05` selected. | The typed value (t3-14). |
| `evidence/EXP-120/t3-14-width-7-after-tab.png` | Width 7; Size `7; 2`; Height still 2; canvas Edit beside Count label. | Height (t3-15). |
| `evidence/EXP-120/t3-15-size-7-1.5-before-save.png` | Size `7; 1.5`; Width 7; Height 1.5; Save enabled; Layout values. | Persistence (t3-16). |
| `evidence/EXP-120/t3-16-save-3-after-size.png` | Save toast; Save greyed; Size `7; 1.5`; canvas count column with Count: label and the Edit box. | Persistence across a reopen. |

Screenshots were viewed by the worker. None shows a server-event error, a sign-in page, an open dialog or list at the end of T3.

### Worker-written file inventory (T3)

- Written or updated: `experiments/EXP-120-hello-world-part-8-phase-3-count-and-add-to-cart.md` (status line; T3 section replacing the T3 plan; audit; inventory; next step).
- Written: `evidence/EXP-120/t3-01-start-state-buttons-band.png` to `evidence/EXP-120/t3-16-save-3-after-size.png` (16 files; no overwrite).
- Tool-written, not read or searched by the worker (page snapshots saved by the tool with each click output): `evidence/playwright/page-2026-10-19T15-38-35-114Z.yml`, `...15-38-39-097Z.yml`, `...15-38-56-600Z.yml`, `...15-39-13-116Z.yml`, `...15-39-22-265Z.yml`, `...15-39-45-224Z.yml`, `...15-39-51-268Z.yml`, `...15-39-57-560Z.yml`, `...15-40-07-769Z.yml`, `...15-40-13-068Z.yml`, `...15-40-28-854Z.yml`, `...15-40-41-680Z.yml`, `...15-40-58-645Z.yml`, `...15-41-08-373Z.yml`, `...15-41-19-030Z.yml`, `...15-41-28-937Z.yml`, `...15-41-40-830Z.yml`, `...15-42-03-618Z.yml`, `...15-42-20-448Z.yml` (19 files, all under `evidence/playwright/`), and `evidence/playwright/console-2026-10-19T15-38-21-955Z.log`, `...15-38-21-956Z.log`.
- One oversized tool result (depth-14 snapshot) was saved outside the repository by the tool (under the session's tool-results folder); it was not read.
- T1 and T2 files are unchanged.

### Cumulative browser action audit (T1 + T2 + T3)

| Action | T1 | T2 | T3 | Total |
| --- | --- | --- | --- | --- |
| Tab list | 2 | 1 | 1 | 4 |
| Tab select | 3 | 1 | 1 | 5 |
| Snapshot calls (successful / error) | 17 / 1 | 9 / 1 | 28 / 2 | 54 / 4 |
| Untargeted / targeted snapshot calls | 9 / 9 | 4 / 6 | 11 / 19 | 24 / 34 |
| Fresh-snapshot recovery (one per Ref-not-found) | 1 | 1 | 2 | 4 |
| Screenshot calls | 15 | 16 (15 files) | 16 | 47 (46 files) |
| find calls | 1 | 0 | 4 | 5 |
| Toolbox selections | 0 | 1 | 1 | 2 |
| Components placed | 0 | 1 | 1 | 2 |
| Coordinate clicks (placement) | 0 | 1 | 1 | 2 |
| Coordinate clicks (list arrow) | 0 | 0 | 0 | 0 |
| Ref-based clicks (all) | 13 | 9 | 18 | 40 |
| Mouse moves | 2 | 2 | 0 | 4 |
| Wheel scrolls (view-only) | 5 | 5 | 0 | 10 |
| Typing (fill) | 3 (filter text only) | 1 (Name) | 3 (Name, Width, Height) | 7 |
| Key presses | 0 | 10 (Caption 9; Name Tab 1) | 11 (Name Tab; FX_Count 8; Width Tab; Height Tab) | 21 |
| List opened | 0 | 1 (Caption) | 2 (Justification, Binding Type) | 3 |
| Dialog opened / OK / Cancel | 1 / 0 / 1 (Global Objects, Cancel) | 0 / 0 / 0 | 1 / 1 / 0 (Edit Variable Binding, OK) | 2 / 1 / 1 |
| Prompts | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 2 | 3 | 5 |
| Undo / Redo | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Strings created | 0 | 0 | 0 | 0 |
| Components with Name / Caption / Size / Justification / Binding set | 0 | Name 1, Caption 1 | Name 1, Justification 1, Binding Type 1, Binding 1, Size 2 | — |
| Per-field corrections | 0 | 0 | 0 | 0 |
| Server-event error | 0 | 0 | 0 | 0 |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Console rise | 0 | 0 | 0 | 0 |
| Drags | 0 | 0 | 0 | 0 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Procedural deviations | 0 | 0 | 1 (parallel key presses F and X) | 1 |

### Cleanup inventory (after T3)

- Components on FX_CustomerPortal (User scope, FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region00: count): `StaticCount` (Static, Caption `FX_sCount`); `EditCount` (Edit, Justification Left, Binding Type Variable, Binding `variables.FX_Count`, Size 7; 1.5, Initial Value blank, Clear On Refresh off).
- Variable binding: `FX_Count` as the binding name on EditCount (no variable definition or value was created or visible on the Variables tab).
- Global objects: none created or changed in T3 (FX_sCount = Count was found in T1 and reused; FX_sAddToCart not yet created).

### Final state (end of T3)

- Designer tab selected; FX_CustomerPortal open and clean (Save greyed after Save 3); User scope.
- No dialog, list, menu, editor or unsaved change open. Details panel on Variables (view state); Properties on EditCount with Size expanded (view state).
- Console (Designer): 2 errors, 0 warnings.
- Web Client tab not touched in T3.

## T4 - ButtonAddToCart (run R-20261019-232616-mUEU, cycle 3, task T4)

Result: **Steps A, B and C complete. ButtonAddToCart placed in Region02: cart, named ButtonAddToCart, Caption FX_sAddToCart (string created through the Caption ellipsis with the value `Add To Cart`), Theme Class FX_BlueButton, Size 20; 1.5. Three Designer Saves, each with the standard toast. No correction, no error, no stop rule triggered.** StaticCount and EditCount were not changed.

### T4 start state (observed)

- Designer tab selected (tab 1); FX_CustomerPortal active; `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo greyed; no dialog or list open. Console **2 errors, 0 warnings** (baseline, unchanged from T1 to T3).
- Components (`t4-01`): Region00: count holds StaticCount (Static, Caption FX_sCount) and EditCount (Edit, Container FlexLayoutButtons, Data Source `variables.FX_Count`); Region01 spacer and Region02 cart were empty (no children).
- The FX_sAddToCart string was absent (T1 found no rows); FX_sCount = Count (reused in T2).

### Step A - ButtonAddToCart (Button, placement and Name)

1. Toolbox: Button row clicked once (ref `e91` from a targeted snapshot of the Toolbox tree taken in this task). Console 2.
2. Placement: one coordinate click at canvas (835, 470), inside the cart (right) column (x≈782-885), below the grid band and clear of the divider at x≈773-782 and of the Count column's Edit box. This is the only coordinate click in T4 (placement). Console 2.
3. Result (`t4-02`): `button1_USER (Button)` appeared in the cart column as a blue PushButton. Save and Undo enabled. Tree: `Region02: cart` > `button1_…` (PushButton, Container FlexLayoutButtons, Pane 0). **Placement correct: child of Region02: cart.** No Undo used.
4. Defaults recorded (view only; targeted snapshot of the Properties tree, `e610`):
   - Name `button1_USER`; Description blank; Caption blank; **Type PushButton**; From Device Master True.
   - Appearance: **Theme Class blank**; Background Color blank; Foreground Color `#000000`; **Bitmap File Name blank**; Font blank; **Justification blank** (Button default is empty).
   - Behavior: Read-Only/Disable False; Tab Read-Only Field False; Hidden False; No Tab Stop False; Auto Complete False.
   - Data Source: **Binding Type None**; Binding blank; Required False.
   - Layout: Unit **Char**; **Size 14.25; 1.89** (Width 14.25, Height 1.89); Lock Size False; Containment blank; Tab Order 0; **Flex Attributes `Index: 2 Target: cart`** (confirms the cart placement).
5. Name: the Name value was clicked (`e2676`); the editor textbox was taken from an untargeted shallow snapshot (`e3382`, showing `button1_USER`); `ButtonAddToCart` was filled (one plain fill) and committed with one Tab. Verification: the Properties header reads `ButtonAddToCart (Button)`, the tree row reads `ButtonAd…` (PushButton, FlexLayoutButtons) under Region02: cart (`t4-03`). Console 2.
6. **Save 1** (toolbar Save, `e2020`, reference from a targeted toolbar snapshot taken before the click): toast `Form [FX_CustomerPortal] and global object(s) were saved.` (`t4-04`). Save greyed afterwards. Console 2.

### Step B - Caption FX_sAddToCart (string created through the ellipsis)

1. The Caption value cell's arrow was clicked by its reference (`e2696`, from a targeted tree snapshot after Save 1). The Caption list opened (no list option is required for a free-text Caption). Console 2.
2. `FX_sAddToCart` was typed key by key with 13 `press_key` actions (F, X, _, s, A, d, d, T, o, C, a, r, t), one per call, with no snapshot taken while the list was open. A screenshot (`t4-05`) showed the field reading `FX_sAddToCart` with the list still open, not filtered.
3. Field left by clicking the Description row (ref `e2681`, from the tree snapshot taken before the list opened; not Tab). Console 2. The screenshot after the commit (`t4-06`) showed the Caption `FX_sAddToCart` committed, Save enabled, and **no prompt** at this point. The canvas label showed the raw ID (`…_sAddToCart`), not a resolved value.
4. A targeted toolbar snapshot confirmed Save enabled (`e2020`) and console 2; Undo enabled.
5. **Caption ellipsis**: clicked once (`e2699`, from the targeted tree snapshot taken after the commit). **Prompt recorded verbatim** (`t4-07`; alert title "Infor Mongoose Application Development Framework"): `String FX_sAddToCart does not exist. Create it?` with buttons **Yes** and **No**. The prompt names exactly FX_sAddToCart and offers creation, so the brief's authorized path applied. A String editor was open behind the prompt. Console 2.
6. **Answer: Yes, clicked once** (`e19344`). Console 2. A String editor appeared with Name `FX_sAddToCart` and String Value pre-filled as `FX_s Add To Cart` (`t4-08`). This pre-filled value is not an existing string value (the string was absent until Yes); it was replaced as EXP-110-R3 specifies.
7. The String Value cell was clicked (`e19373`), its editor textbox taken from a targeted snapshot of the String dialog (`e19401`, showing `FX_s Add To Cart`), and `Add To Cart` was entered with one plain fill and committed with one Tab. Verified before OK (`t4-09`): Name `FX_sAddToCart`, String Value `Add To Cart`. Console 2.
8. **String editor OK**: clicked once (`e19336`). The editor closed with no further prompt (`t4-10`). Console 2. **The value was verified before OK, not re-read after OK** (see the limitations below; read-only re-check is T5).
9. Save state after OK: toolbar snapshot (`e11`) showed Save enabled and Undo enabled; console 2. The Caption still read `FX_sAddToCart` and the canvas label still showed the raw ID.
10. **Save 2** (toolbar Save, `e2020`): toast `Form [FX_CustomerPortal] and global object(s) were saved.` (`t4-11`). Save greyed afterwards. Caption `FX_sAddToCart`. The toast reads "global object(s)", consistent with the new string being saved with the Form. Console 2.

### Step C - Theme Class FX_BlueButton, Width 20, Height 1.5

1. Theme Class: the value cell's arrow was clicked by its reference (`e2737`, from a targeted tree snapshot taken after Save 2). The list opened (`t4-12`) with **one option, `FX_BlueButton`** (the planned option present). A targeted snapshot of the expanded combobox (`e19423`) listed the option as `e19429`. The option was clicked once. Console 2.
2. The field was left by clicking the Description row (`e2681`). The tree then read Theme Class `FX_BlueButton`. Console 2.
3. Size: the Size row was **not double-clicked**. The Layout group was already expanded in this Properties view (the Size row showed Width and Height rows), so a double-click would risk collapsing it. This is recorded as a procedural deviation from the brief's step. Width and Height editors were opened through their value cells instead.
4. Width: the Width value cell was clicked (`e3278`); the editor textbox was taken from an untargeted shallow snapshot (`e3382`, showing `14.25`). `20` was filled (one plain fill) and committed with one Tab. The tree then showed Width `20`, Size `20; 1.89`. Console 2.
5. Height: the Height value cell was clicked (`e3287`, from a targeted tree snapshot taken after the Width commit); the editor textbox was taken from an untargeted shallow snapshot (`e3382`, showing `1.89`). `1.5` was filled (one plain fill) and committed with one Tab. Console 2.
6. **Values before Save** (`t4-13`): Theme Class `FX_BlueButton` (read in the targeted tree snapshot); Size `20; 1.5`; Width `20`; Height `1.5`; Lock Size False; Unit Char; Flex Attributes `Index: 2 Target: cart`. The canvas button is drawn blue with the label `FX_sAddToC…` (raw ID, with the blue theme applied). Bitmap File Name and Image and Text were **not touched** (Bitmap blank; no Image and Text attribute set).
7. **Save 3** (toolbar Save, `e2020`, reference from a targeted toolbar snapshot taken before the click; console 2): toast `Form [FX_CustomerPortal] and global object(s) were saved.` (`t4-14`). Save greyed afterwards. Size `20; 1.5` and Theme Class FX_BlueButton still shown.

### T4 end state (observed)

- Designer tab selected; FX_CustomerPortal open and clean (Save greyed after Save 3); User scope.
- No dialog, list, menu, editor or unsaved change open (the Caption list closed by the Description click; the Theme list closed by the option click; the String editor closed by OK; the Width and Height editors closed by Tab).
- Components: FlexLayoutButtons > Region00: count > **StaticCount** (Static) and **EditCount** (Edit); Region02: cart > **ButtonAddToCart** (PushButton). Region01 spacer empty.
- Console (Designer): 2 errors, 0 warnings at every reading.

### Console error counts (T4, Designer page)

- Start: 2 errors, 0 warnings. After every output that reported it: Components tab 2; Button row 2; placement 2; Name value 2; Name editor snapshot 2; Name Tab (screenshot, no line) and the next toolbar snapshot 2; Save 1 response 2; Caption arrow 2; the 13 Caption key presses (no line) and the screenshot; Description 2; tree snapshot 2; ellipsis 2; prompt snapshot 2; Yes 2; String cell 2; editor snapshot 2; Tab and screenshot (no line); OK 2; toolbar snapshot 2; Save 2 response 2; Theme arrow 2; list snapshot 2; option click 2; Description 2; Width cell 2; Width editor snapshot 2; Tab (no line); Height cell 2; Height editor snapshot 2; Tab (no line); toolbar snapshot 2; Save 3 response 2.
- No rise at any point; no stop rule triggered; no Save after a rise; no Caption commit left Save disabled.

### T4 action audit (T4 only; counts exact)

| Action | Count | Detail |
| --- | --- | --- |
| Tab list | 1 | before the first selection |
| Tab select | 1 | Designer (index 1) |
| Snapshot calls | 20 | 20 succeeded, 0 errors. Untargeted 7; targeted 13 (the full ordered list is below) |
| Fresh-snapshot recovery allowance used | 0 | no `Ref not found` in T4 |
| Screenshot calls | 14 | `t4-01` to `t4-14`, no overwrites |
| find calls | 0 | |
| Toolbox selections | 1 | Button row |
| Component placed | 1 | button1_USER, renamed ButtonAddToCart |
| Coordinate clicks (placement) | 1 | canvas (835, 470), cart column |
| Coordinate clicks (list arrow) | 0 | every arrow had a reference |
| Ref-based clicks (all) | 17 | Components tab 1; Button row 1; Name value 1; Save 1 1; Caption arrow 1; Description 2; Caption ellipsis 1; Yes 1; String value cell 1; OK 1; Save 2 1; Theme arrow 1; FX_BlueButton option 1; Width value 1; Height value 1; Save 3 1 |
| List opened | 2 | Caption (free text; closed by the Description click, no option chosen); Theme Class (one option, FX_BlueButton, clicked) |
| Dialog opened / OK / Cancel | 1 / 1 / 0 | String editor (after the create prompt); closed with OK |
| Prompts | 1 | `String FX_sAddToCart does not exist. Create it?` (Yes) |
| Typing (fill) | 4 | Name `ButtonAddToCart`; String Value `Add To Cart`; Width `20`; Height `1.5` (plain fills) |
| Key presses | 17 | Name Tab 1; Caption 13 (F, X, _, s, A, d, d, T, o, C, a, r, t); String value Tab 1; Width Tab 1; Height Tab 1 |
| Mouse moves / wheel scrolls | 0 / 0 | |
| Designer Saves | 3 | Save 1 (Name ButtonAddToCart); Save 2 (Caption FX_sAddToCart; string FX_sAddToCart created); Save 3 (Theme FX_BlueButton; Size 20; 1.5); each toast, Save greyed after |
| Strings created | 1 | FX_sAddToCart = `Add To Cart` (through the Caption ellipsis; Yes answered once) |
| Global objects changed other than that string | 0 | FX_sCount was not touched |
| Undo / Redo | 0 / 0 | |
| Per-field corrections | 0 | |
| Server-event error | 0 | |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | |
| Console rise | 0 | |
| Drags | 0 | |
| Form close / reopen | 0 / 0 | |
| Regenerate / unload / FormSync / deployment / Delete Form Definition / Select Form OK | 0 | |

Snapshot list (T4, in order): `e66` (Toolbox tree, targeted); untargeted depth 4 (after placement); `e610` (defaults, targeted); untargeted depth 4 (Name editor); `e11` (targeted, before Save 1); untargeted depth 4 (after Save 1); `e610` (targeted, after Description); untargeted depth 4 (prompt Yes); `e19301` (targeted, String dialog); `e19301` (targeted, after the value cell click); `e11` (targeted, before Save 2); `e610` (targeted, after Save 2); `e610` (depth 3, Theme combobox); `e19423` (targeted, Theme combobox); `e610` (targeted, after Theme commit); untargeted depth 4 (Width editor); `e610` (targeted, after Width); untargeted depth 4 (Height editor); `e11` (targeted, before Save 3). That is 7 untargeted and 13 targeted.

### Per-field entries and corrections (T4)

- ButtonAddToCart: Name `ButtonAddToCart` (1 entry, 0 corrections); Caption `FX_sAddToCart` (1 list-free entry by 13 key presses, 0 corrections; committed by the Description row); string FX_sAddToCart = `Add To Cart` (1 prompt Yes, 1 value entry, 1 OK, 0 corrections); Theme Class `FX_BlueButton` (1 option click, 0 corrections); Width `20` (1 entry, 0 corrections); Height `1.5` (1 entry, 0 corrections).
- Corrections: none.

### Deviations, observations and limitations (T4)

1. **Size double-click skipped:** the brief asks to double-click the Layout Size row before Width and Height. The Size group was already expanded in the Properties view (Width and Height rows listed), so the double-click was not performed to avoid collapsing it. Width and Height were edited through their value cells, and the editors were confirmed (Width 20, Height 1.5 shown in the tree and in `t4-13`).
2. **Caption list and key presses:** the Caption list was open during the 13 key presses, as the brief's Caption method requires. No accessibility snapshot was taken while it was open (only a screenshot).
3. **Description click reference:** the Caption list was left by a click on the Description row with a reference from a tree snapshot taken before the list opened (`e2681`). Per the brief this is the most recent snapshot before the list opened; the click left the list closed and the Caption committed.
4. **Snapshot while the Theme list was open:** a targeted snapshot of the Theme combobox was taken to get the option reference (allowed; the no-snapshot rule applies to the Caption list only).
5. **String value verification:** the String Value `Add To Cart` was verified in a screenshot before OK (`t4-09`). It was not re-read after OK; the OK closed the editor with no prompt. A read-only re-check through Edit > String is the T5 step.
6. **Canvas label after string creation:** after Save 2 and Save 3 the canvas still shows the raw ID `FX_sAddToCart` on the button (`t4-11`, `t4-14`), while StaticCount's Caption `FX_sCount` resolved to "Count" in T2. The resolved display of FX_sAddToCart is not observed in this run; it is expected to appear after a reopen (T5), not verified.
7. **Carried forward (not resolved):** (a) the T3 procedural deviation of sending `F` and `X` key presses in one parallel block (both completed in order; the field read `FX_Count`); (b) the status of FX_Count as a Form variable definition is **unresolved**: the Variables tab showed only `fds_SC2` under Form - Persistent after the T3 Save and still shows only that in T4 (not re-read in T4); binding `variables.FX_Count` is shown on EditCount.

### Acceptance status after T4

- AC-1: unchanged (supported after T1).
- AC-2 (ButtonAddToCart part): **supported for T4**: ButtonAddToCart placed in Region02: cart (`t4-02`; tree `Region02: cart` child; Flex Attributes `Index: 2 Target: cart`), named ButtonAddToCart (`t4-03`), the string prompt recorded verbatim and answered Yes (`t4-07`), the string created with `Add To Cart` (`t4-09`, verified before OK), Caption FX_sAddToCart committed (`t4-06`), Theme Class FX_BlueButton and Size 20; 1.5 (`t4-13`), one Designer Save after each of the three steps with its response (`t4-04`, `t4-11`, `t4-14`), console recorded after every action, no correction.
- AC-3, AC-5: not yet applicable (T5 close/reopen readback and final audit not run).
- AC-4 so far: no other component, region or global object changed in T4 (FX_sCount untouched; one string created as allowed); no Bitmap or Image and Text set; no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; Undo not used; no runtime action; no checkout action.

### Evidence files (T4)

| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-120/t4-01-start-components-tree-region00-region02.png` | Start: Components tree with StaticCount and EditCount under Region00: co…; Region01 sp… and Region02: cart with no children; Save greyed. | Anything after T3. |
| `evidence/EXP-120/t4-02-button-placed-canvas.png` | Button placed in the cart column (blue PushButton, `button1_USER`); tree `button1_…` under Region02: cart (Container FlexLayoutButtons). | The Name change (t4-03). |
| `evidence/EXP-120/t4-03-name-ButtonAddToCart-after-tab.png` | Properties header `button1_USER`... Name `ButtonAddToCart`; tree `ButtonAd…` under Region02: cart; Save enabled. | That the Name is saved (t4-04). |
| `evidence/EXP-120/t4-04-save-1-after-ButtonAddToCart-name.png` | Save toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save greyed; tree ButtonAd… under Region02: cart. | Anything after Save 1. |
| `evidence/EXP-120/t4-05-caption-typed-FX_sAddToCart-list-open.png` | Caption field shows `FX_sAddToCart`; Caption list open, unfiltered. | That the Caption is committed (t4-06). |
| `evidence/EXP-120/t4-06-caption-committed-after-description-click.png` | Caption `FX_sAddToCart` committed; no prompt; Save enabled; canvas label shows the raw ID. | Resolved display (not observed). |
| `evidence/EXP-120/t4-07-caption-ellipsis-prompt.png` | Prompt "String FX_sAddToCart does not exist. Create it?" with Yes and No; String editor behind it. | The answer's outcome (t4-08). |
| `evidence/EXP-120/t4-08-string-editor-after-yes-prefilled.png` | String editor: Name FX_sAddToCart; String Value pre-filled `FX_s Add To Cart`; OK. | The replaced value (t4-09). |
| `evidence/EXP-120/t4-09-string-value-Add-To-Cart-before-OK.png` | String editor: Name FX_sAddToCart; String Value `Add To Cart` (before OK). | That OK stored it (not re-read after OK). |
| `evidence/EXP-120/t4-10-after-string-OK-caption-state.png` | Editor closed; Caption `FX_sAddToCart`; Save state not clear in the image (read by the toolbar snapshot: enabled). | The stored value. |
| `evidence/EXP-120/t4-11-save-2-after-caption-FX_sAddToCart.png` | Save toast "Form [FX_CustomerPortal] and global object(s) were saved."; Save greyed; Caption FX_sAddToCart. | Persistence across reopen (T5). |
| `evidence/EXP-120/t4-12-theme-class-list-open.png` | Theme Class list open with one option, FX_BlueButton. | That the option was chosen (t4-13). |
| `evidence/EXP-120/t4-13-theme-FX_BlueButton-size-20-1.5-before-save.png` | Size `20; 1.5`; Width 20; Height 1.5; Flex Attributes Index 2 Target cart; canvas button blue. Theme Class value read from the tree snapshot (FX_BlueButton). | Persistence (t4-14). |
| `evidence/EXP-120/t4-14-save-3-after-theme-size.png` | Save toast; Save greyed; Size `20; 1.5`; canvas button blue. | Persistence across reopen. |

Screenshots were viewed by the worker. None shows a server-event error, a sign-in page, an open dialog or list at the end of T4 (the prompt and String editor were closed by Yes-then-OK).

### Worker-written file inventory (T4)

- Written or updated: `experiments/EXP-120-hello-world-part-8-phase-3-count-and-add-to-cart.md` (status line; T4 section replacing the T4 plan; audit; inventory; next step).
- Written: `evidence/EXP-120/t4-01-start-components-tree-region00-region02.png` to `evidence/EXP-120/t4-14-save-3-after-theme-size.png` (14 files; no overwrite).
- Tool-written, not read or searched by the worker (page snapshots saved by the tool with click outputs): `evidence/playwright/page-2026-10-19T15-46-04-952Z.yml`, `…15-46-15-997Z.yml`, `…15-46-20-025Z.yml`, `…15-46-34-086Z.yml`, `…15-46-48-062Z.yml`, `…15-47-01-736Z.yml`, `…15-47-30-167Z.yml`, `…15-47-40-920Z.yml`, `…15-47-50-819Z.yml`, `…15-48-01-138Z.yml`, `…15-48-13-181Z.yml`, `…15-48-24-214Z.yml`, `…15-48-35-373Z.yml`, `…15-48-46-278Z.yml`, `…15-48-49-692Z.yml`, `…15-49-01-029Z.yml`, `…15-49-11-839Z.yml`, `…15-49-24-379Z.yml` (18 files, all under `evidence/playwright/`), and `evidence/playwright/console-2026-10-19T15-45-59-006Z.log`.
- T1 to T3 files are unchanged.

### Cumulative browser action audit (T1 to T4)

| Action | T1 | T2 | T3 | T4 | Total |
| --- | --- | --- | --- | --- | --- |
| Tab list | 2 | 1 | 1 | 1 | 5 |
| Tab select | 3 | 1 | 1 | 1 | 6 |
| Snapshot calls (successful / error) | 17 / 1 | 9 / 1 | 28 / 2 | 20 / 0 | 74 / 4 |
| Untargeted / targeted snapshot calls | 9 / 9 | 4 / 6 | 11 / 19 | 7 / 13 | 31 / 47 |
| Fresh-snapshot recovery (one per Ref-not-found) | 1 | 1 | 2 | 0 | 4 |
| Screenshot calls | 15 | 16 (15 files) | 16 | 14 | 61 (60 files) |
| find calls | 1 | 0 | 4 | 0 | 5 |
| Toolbox selections | 0 | 1 | 1 | 1 | 3 |
| Components placed | 0 | 1 | 1 | 1 | 3 |
| Coordinate clicks (placement) | 0 | 1 | 1 | 1 | 3 |
| Coordinate clicks (list arrow) | 0 | 0 | 0 | 0 | 0 |
| Ref-based clicks (all) | 13 | 9 | 18 | 17 | 57 |
| Mouse moves | 2 | 2 | 0 | 0 | 4 |
| Wheel scrolls (view-only) | 5 | 5 | 0 | 0 | 10 |
| Typing (fill) | 3 (filter text only) | 1 (Name) | 3 (Name, Width, Height) | 4 (Name, String Value, Width, Height) | 11 |
| Key presses | 0 | 10 | 11 | 17 | 38 |
| List opened | 0 | 1 (Caption) | 2 (Justification, Binding Type) | 2 (Caption, Theme Class) | 5 |
| Dialog opened / OK / Cancel | 1 / 0 / 1 | 0 / 0 / 0 | 1 / 1 / 0 | 1 / 1 / 0 | 3 / 2 / 1 |
| Prompts | 0 | 0 | 0 | 1 (Create it?: Yes) | 1 |
| Designer Saves | 0 | 2 | 3 | 3 | 8 |
| Undo / Redo | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Strings created | 0 | 0 | 0 | 1 (FX_sAddToCart) | 1 |
| Per-field corrections | 0 | 0 | 0 | 0 | 0 |
| Server-event error | 0 | 0 | 0 | 0 | 0 |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Console rise | 0 | 0 | 0 | 0 | 0 |
| Drags | 0 | 0 | 0 | 0 | 0 |
| Form close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Procedural deviations | 0 | 0 | 1 (parallel F and X key presses) | 1 (Size double-click not performed) | 2 |

### Cleanup inventory (after T4)

- Components on FX_CustomerPortal (User scope):
  - FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region00: count > **StaticCount** (Static; Caption `FX_sCount`; Justification Right; Binding Type None; Size 20; 1 (default)).
  - FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region00: count > **EditCount** (Edit; Justification Left; Binding Type Variable; Binding `variables.FX_Count`; Initial Value blank; Size 7; 1.5).
  - FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region02: cart > **ButtonAddToCart** (PushButton; Caption `FX_sAddToCart`; Theme Class `FX_BlueButton`; Size 20; 1.5; Bitmap File Name blank; no Image and Text).
- Variable binding: `FX_Count` as the binding name on EditCount (no variable definition or value created in this run; a Form-variable definition for FX_Count was not observed).
- Global objects: string **FX_sAddToCart = `Add To Cart`** created by this run (T4, Yes once). String **FX_sCount = `Count`** was found in T1 and reused (not created by this run; not changed).

### Final state (end of T4)

- Designer tab selected; FX_CustomerPortal open and clean (Save greyed after Save 3); User scope.
- No dialog, list, menu, editor or unsaved change open. Details panel on Components (view state); Properties on ButtonAddToCart with Size expanded (view state).
- Console (Designer): 2 errors, 0 warnings.
- Web Client tab not touched in T4.

## T5 - Readback and final audit (run R-20261019-232616-mUEU, cycle 4, task T5)

Result: **One ordinary close and one reopen of FX_CustomerPortal. After the reopen, StaticCount and EditCount are under Region00: count and ButtonAddToCart is under Region02: cart, each with its planned values; EditCount's binding reads variables.FX_Count; the canvas shows the count label, the Edit box and the cart button in the buttons band; FX_sCount reads Count and FX_sAddToCart reads Add To Cart (read-only). No Designer Save, no correction, no error, no stop rule. The Form is open and clean at the end. Observed in the same browser session only; nothing here is cross-session durability or replay verification.**

### T5 steps (observed)

1. Form-tab close control clicked once (ref e247). No save prompt appeared (`t5-01`: canvas empty, no tab, Save greyed, status bar User scope). Prompt text: none.
2. Form menu clicked once (e3), then the recent-forms entry FX_CustomerPortal clicked once (e1802). The adjacent Sign Out item (e1797) was not clicked. The Form reopened with Save greyed and User scope (`t5-02`).
3. Details panel expanded (Expand Panel, e1912), Components tab selected (e2023), Components grid Expand clicked once (e2100) (`t5-03`, `t5-04`).
4. Components tree read with the view scrolled (`t5-05` to `t5-09`) and one untargeted snapshot of the tree rows.
5. Each component selected by its Components row (StaticCount e3066, EditCount e3091, ButtonAddToCart e3166) and its Properties read, with the Properties panel scrolled (view only) (`t5-10` to `t5-16`).
6. Canvas scrolled to the buttons band (view only) (`t5-17`).
7. Edit > String opened once; filters typed and searched for FX_sHome (control), FX_sCount and FX_sAddToCart; each value read by selecting its row; dialog closed with Cancel once (`t5-18` to `t5-23`).
8. Details > Variables tab selected (`t5-24`); Form - Persistent and Form - Temporary expanded with the grid Expand control (`t5-25`).

### Components tree after reopen (observed, `t5-04` to `t5-09`; untargeted snapshot rows)

- Region04: buttons > FlexLayoutButtons (FlexLayout, Container FlexLayoutHome, Pane 0, Tab 0)
  - Region00: count > **StaticCount** (Static, Container FlexLayoutButtons) and **EditCount** (Edit, Data Source `variables.FX_Count`, Container FlexLayoutButtons)
  - Region01: spacer (no child rows)
  - Region02: cart > **ButtonAddToCart** (PushButton, Container FlexLayoutButtons)
- Region04: cartpage, Region05: spacer2 and Region02: footer > FlexLayoutFooter > Region00: UNKNOWN0 follow unchanged. The other rows of the untargeted snapshot (header, main, home, grid and footer rows) match the T1 description; no row other than the three components is new.

### Planned values after reopen (Properties, view only)

| Component | Values read | Evidence |
| --- | --- | --- |
| StaticCount | Name `StaticCount`; Type Static; Caption `FX_sCount`; Justification Right (default); Theme Class blank; Bitmap File Name blank | `t5-10` |
| EditCount | Name `EditCount`; Type Edit; Caption blank (not planned); Justification `Left`; Bitmap File Name blank; Binding Type `Variable`; Binding `variables.FX_Count` (on-screen text truncated to `variables.FX_Coun…`; full text in the tree Data Source column); Size `7; 1.5` (Width 7, Height 1.5, Unit Char); Flex Attributes `Index: 0 Target: count` | `t5-11`, `t5-12`, `t5-13`, `t5-09` |
| ButtonAddToCart | Name `ButtonAddToCart`; Type PushButton; Caption `FX_sAddToCart`; Theme Class `FX_BlueButton`; Bitmap File Name blank; Size `20; 1.5` (Width 20, Height 1.5, Unit Char); Flex Attributes `Index: 2 Target: cart` | `t5-14`, `t5-15`, `t5-16` |

### Canvas buttons band (observed, `t5-02`, `t5-17`)

- Count column: the label **"Count:"** beside the Edit box.
- Cart column: a blue button. Its visible text is truncated by the canvas width ("Add To Car…" in the screenshot). The reopened-canvas accessibility snapshot shows the button as **"Add To Cart"**.
- Before the reopen (T4), the canvas showed the raw ID `FX_sAddToCart`; after the reopen both captions resolve. Observed in this session only.

### Variables tab (view only, `t5-24`, `t5-25`)

- Form - Persistent: `fds_SC2` only (same as T1 and T3).
- Form - Temporary: **`FX_Count`** (one row).
- The Form - Temporary group was not read in T1, T3 or T4, so this record cannot say whether FX_Count was already present before the T3 binding entry or was created by it. **Unresolved; the operator should review it.** The Global groups were not re-read in T5.

### Strings (read-only, Edit > String, `t5-18` to `t5-23`)

| String | Filter result | String Value (Properties pane) | Expected |
| --- | --- | --- | --- |
| FX_sHome (control) | FX_sHome | `Home` | Home (control) |
| FX_sCount | FX_sCount | `Count` | Count |
| FX_sAddToCart | FX_sAddToCart | `Add To Cart` | Add To Cart |

The dialog was closed with Cancel (`t5-23`); Save stayed greyed. As in T1, the page URL lost its `MGForm` parameter after Cancel; the FX_CustomerPortal tab and canvas stayed displayed.

### Console

2 errors, 0 warnings at every reading in T5 (the readings carried by the tool outputs). The Web Client console was not read.

### Acceptance checks (final)

| Check | Result | Decisive evidence |
| --- | --- | --- |
| AC-1 | Supported (T1 gate). In T5 the strings were re-read read-only. | T1: `t1-01`, `t1-06`, `t1-07`/`t1-08`, `t1-10` to `t1-14`, `t1-15`. T5: `t5-19` to `t5-22`. |
| AC-2 | Supported for T2 to T4: placement, name, captions, binding (after the dialog was recorded), theme, size, the string prompt and value, and one Designer Save after each step with its toast. T5 confirmed the placed values after the reopen. | Placement and names: `t2-05`, `t2-10`, `t3-02`, `t3-03`, `t4-02`, `t4-03`. Prompt: `t4-07`. String: `t4-09`, `t5-22`. Binding dialog before entry: `t3-07`. Saves: `t2-11`, `t2-15`, `t3-04`, `t3-11`, `t3-16`, `t4-04`, `t4-11`, `t4-14`. T5 values: `t5-10` to `t5-16`. |
| AC-3 | Supported for one ordinary close and reopen in the same browser session: the three components are in their regions with their planned values; EditCount's binding reads `variables.FX_Count`; the canvas shows the components in the buttons band; the strings read Count and Add To Cart; the Form is open and clean. Limitations: same session only (not cross-session durability); "everything else unchanged" was checked on the tree and on the properties read, not on every property; the cart caption is truncated on the canvas. | Close: `t5-01`. Reopen canvas: `t5-02`. Tree: `t5-04` to `t5-09`. Values: `t5-10` to `t5-16`. Band: `t5-17`. Strings: `t5-21`, `t5-22`. Clean state: `t5-23`. |
| AC-4 | Supported (observed). No other component, region, event or Form property was seen changed; no global object other than the string FX_sAddToCart was created; no Bitmap File Name or Image and Text was set (Bitmap blank on the three components); no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; Undo not used; no runtime action; no checkout action; User scope only; no task-boundary overrun. Open item: the FX_Count row under Form - Temporary (origin unresolved). | Tree `t5-08`, `t5-09`; Bitmap `t5-10`, `t5-11`, `t5-14`; status bar in every T5 screenshot; action audit below. |
| AC-5 | Supported by this section: decisive evidence for AC-1 to AC-4, the cumulative action audit with exact counts, the worker-written file inventory, the cleanup inventory and the final state. | Sections below. |

### Deviations and observations (T5)

1. **Strings screenshots:** six were taken (`t5-18` to `t5-23`), not the single "Strings check" screenshot the brief names. Each records a distinct read state (dialog open, control filter, three values, after Cancel). Recorded as a deviation.
2. **Oversized snapshot:** one untargeted snapshot of the open Global Objects dialog returned "exceeds maximum allowed tokens"; the tool saved it outside the repository and it was not read. Targeted snapshots of the dialog (`e5518`), the Variables tab list (`e2019`) and the Variables grid (`e5984`) were used instead, as the brief permits.
3. **View-only wheel calls:** the first wheel call was made with the pointer at its default position and changed nothing visible; one later wheel call with the pointer over the Components tree scrolled the tree instead of the Properties panel. Both were view-only; no Form state changed.
4. **Pre-summary part of T5:** the close, reopen, Details and Components clicks and the screenshots `t5-01` to `t5-04` were performed before this record was updated. The count of snapshot calls in that part, and the names of the tool-written snapshot files it produced, were not carried over and are reported as not recoverable below.
5. **Carried forward, not resolved:** the T3 parallel `F` and `X` key presses; the T4 Size row double-click not performed (Width and Height edited through their value cells); `t2-08` overwritten by a second capture; the Global - Temporary group never read; the Form - Temporary group first read in T5.

### Cumulative browser action audit (T1 to T5, exact counts)

"Pre-summary" is the first part of T5 (close, reopen, Details, Components). Its snapshot count is not recoverable and is excluded from the snapshot rows, which therefore read as a minimum.

| Action | T5 pre-summary | T5 after summary | T5 total | Cumulative T1 to T5 |
| --- | --- | --- | --- | --- |
| Tab list | none recorded | 0 | 0 | 5 (T1 2, T2 1, T3 1, T4 1) |
| Tab select | 0 | 0 | 0 | 6 |
| Snapshot calls (successful / error) | not recoverable | 8 / 1 (the error: too large inline) | 8 / 1 + pre | 82 / 5 + pre |
| Untargeted / targeted snapshot calls | not recoverable | 2 / 6 targeted; plus 1 untargeted too-large error | 3 untargeted (2 succeeded, 1 error) + 6 targeted | 34 untargeted + 53 targeted + pre |
| Fresh-snapshot recovery (one per Ref-not-found) | 0 | 0 | 0 | 4 |
| Screenshot calls | 4 | 21 | 25 (`t5-01` to `t5-25`) | 86 calls (85 files) |
| find calls | 0 | 5 | 5 | 10 |
| Ref-based clicks (all) | 6 | 14 | 20 | 77 |
| Mouse moves (hover, no click) | 0 | 4 | 4 | 8 |
| Wheel scrolls (view-only) | 0 | 10 | 10 | 20 |
| Toolbox selection | 0 | 0 | 0 | 3 |
| Components placed | 0 | 0 | 0 | 3 |
| Coordinate clicks (placement / list arrow) | 0 | 0 | 0 | 3 / 0 |
| Typing (fill) | 0 | 3 (filter text only) | 3 | 14 |
| Key presses | 0 | 0 | 0 | 38 |
| List opened | 0 | 0 | 0 | 5 |
| Menu opened | 1 (Form) | 1 (Edit) | 2 | 3 (T1 Edit, T5 Form, T5 Edit) |
| Dialog opened / OK / Cancel | 0 / 0 / 0 | 1 / 0 / 1 (Global Objects, Cancel) | 1 / 0 / 1 | 4 / 2 / 2 |
| Prompts | 0 | 0 | 0 | 1 (Create it?: Yes, T4) |
| Form close / reopen | 1 / 1 | 0 / 0 | 1 / 1 | 1 / 1 |
| Designer Saves | 0 | 0 | 0 | 8 |
| Undo / Redo | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Strings created | 0 | 0 | 0 | 1 (FX_sAddToCart) |
| Per-field corrections | 0 | 0 | 0 | 0 |
| Ref-not-found errors | 0 | 0 | 0 | 4 (T1 1, T2 1, T3 2) |
| Server-event error | 0 | 0 | 0 | 0 |
| Session expiry / sign-in / re-login | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Console rise | 0 | 0 | 0 | 0 |
| Drags | 0 | 0 | 0 | 0 |
| Regenerate / unload / FormSync / deployment / Delete Form Definition / Select Form OK / checkout action | 0 | 0 | 0 | 0 |

### Worker-written file inventory (T5)

- Written or updated: `experiments/EXP-120-hello-world-part-8-phase-3-count-and-add-to-cart.md` (status line; T5 section replacing the T5 plan).
- Written: `evidence/EXP-120/t5-01-after-form-close.png` to `evidence/EXP-120/t5-25-reopened-variables-expanded.png` (25 files; no overwrite).
- Tool-written, not read or searched by the worker: `evidence/playwright/page-2026-10-19T15-55-21-945Z.yml`, `…15-55-27-931Z.yml`, `…15-55-43-891Z.yml`, `…15-56-09-452Z.yml`, `…15-56-15-245Z.yml`, `…15-56-29-407Z.yml`, `…15-56-39-295Z.yml`, `…15-56-47-209Z.yml`, `…15-56-52-767Z.yml`, `…15-56-59-667Z.yml`, `…15-57-03-179Z.yml`, `…15-57-09-070Z.yml`, `…15-57-20-676Z.yml`, `…15-57-29-700Z.yml` (14 snapshot files saved with click outputs in the after-summary part). The pre-summary click outputs also wrote tool files; their names were not carried over and are not listed.
- Tool-written outside the repository: the oversized snapshot result under the session's tool-results folder (not read).
- No other file was written by the worker. Repository confinement is supported by the worker and harness inventories; the operator's git review is authoritative.

### Cleanup inventory (end of T5, observed)

- Components on FX_CustomerPortal (User scope), all created in this experiment:
  - FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region00: count > **StaticCount** (Static; Caption `FX_sCount`; Justification Right; Bitmap blank).
  - FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region00: count > **EditCount** (Edit; Justification Left; Binding Type Variable; Binding `variables.FX_Count`; Caption blank; Size 7; 1.5; Bitmap blank).
  - FlexLayoutHome > Region04: buttons > FlexLayoutButtons > Region02: cart > **ButtonAddToCart** (PushButton; Caption `FX_sAddToCart`; Theme Class `FX_BlueButton`; Size 20; 1.5; Bitmap blank; no Image and Text set by the worker).
- Binding: EditCount's binding name `FX_Count` (entered through the Binding dialog, T3).
- Form variable row: **`FX_Count` under Form - Temporary** (observed in T5; origin unresolved, see Open questions).
- Global objects: string **FX_sAddToCart = `Add To Cart`** created in T4 (Yes once). String **FX_sCount = `Count`** existed before T2; it was found in T1 and reused; not created or changed.
- Nothing was removed or reverted in T1 to T5.

### Final state (end of T5)

- Designer tab (tab 1) selected; FX_CustomerPortal open (reopened in T5) and clean: Save greyed (`t5-23` to `t5-25`); status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- No dialog, list, menu, editor or unsaved change open.
- View state only: Details panel on the Variables tab (Form - Persistent and Form - Temporary expanded); Properties on ButtonAddToCart with its Size group expanded; the canvas scrolled to the buttons band.
- Console (Designer): 2 errors, 0 warnings.
- Web Client tab (tab 0) not touched in T5.

### Findings (knowledge state: observed only)

1. Placing a component from the Toolbox into a FlexLayoutButtons column places it as a child of that column's region (3 of 3 placements). State: observed; one run.
2. A Caption ID typed in the Caption field and committed with a Description click, when the string is absent, raises the prompt "String FX_sAddToCart does not exist. Create it?"; Yes opens a String editor with a pre-filled value that must be replaced. State: observed; one run.
3. After one close and reopen in the same session, the canvas shows resolved captions for FX_sCount ("Count:") and FX_sAddToCart ("Add To Car…", truncated); the raw ID shown before the reopen is gone. State: observed; same session only; not replay-verified.
4. The Binding dialog accepted the typed name FX_Count without a value or type prompt; the EditCount binding then read `variables.FX_Count` after the reopen. A Form - Temporary row `FX_Count` is also visible after the reopen. State: observed; origin of the Form-Temporary row unresolved.

No finding in this record is classified replay_verified, and none claims cross-session durability or database-level durability.

### Open questions and blockers

1. **Origin of the `FX_Count` row under Form - Temporary.** Observed in T5; not in T1 (Form - Temporary not read), not in T3 or T4 (Form - Temporary not read). It may have been created by the Binding dialog entry. The brief allowed only the binding; the operator should confirm whether this row is an acceptable effect of the binding or needs review.
2. **Pre-summary T5 counts.** The snapshot count of the pre-summary part of T5 and the names of its tool-written snapshot files were not carried over; the table gives a minimum for snapshots.
3. **Cross-session readback** was not performed (outside this experiment's scope); no durability claim is made.

Stop at the end of T5. No further experiment or Part 8 phase was started.

## Outcome (operator, 2026-10-20)

Accepted (observed), with qualifications. **Hello World Part 8 Phase 3 is complete (without the cart Bitmap): FlexLayoutHome > Region04: buttons > FlexLayoutButtons of FX_CustomerPortal (User scope) holds StaticCount (Static, Caption FX_sCount) and EditCount (Edit, Justification Left, Binding Type Variable, Binding variables.FX_Count, Size 7; 1.5) in Region00: count, and ButtonAddToCart (PushButton, Caption FX_sAddToCart, Theme Class FX_BlueButton, Size 20; 1.5) in Region02: cart, read back after an ordinary close and reopen.** Run R-20261019-232616-mUEU (5 worker tasks; paused once for this disposition).

- Changed, for later cleanup: on FX_CustomerPortal (User scope) the three components and EditCount's variable binding FX_Count (shown after reopen as a Form - Temporary variable); tenant-wide string **FX_sAddToCart = Add To Cart** (created through the Caption ellipsis, prompt "String FX_sAddToCart does not exist. Create it?", Yes once). FX_sCount = Count already existed and was reused (no ellipsis). Eight Designer Saves (T2 two, T3 three, T4 three), each with the standard toast. No Bitmap File Name or Image and Text (operator decision 2026-10-19: no shopping-cart image in assets/), no event, no Regenerate, no unload.
- Screenshots viewed by the operator assistant: `t5-11-reopened-editcount-properties` (after reopen: tree Region00 > StaticCount Static, EditCount Edit Data Source `variables.FX_Count`; Region02: cart > ButtonAddToCart PushButton; EditCount Justification Left; User scope; Save disabled); `t5-17-reopened-canvas-buttons-band` (buttons band: "Count:" label and edit box left, blue "Add To Car…" button right (canvas truncation; accessibility text "Add To Cart"); ButtonAddToCart Size 20; 1.5, Flex Attributes Index 2 Target cart).
- Console: the Designer count stayed at 2 throughout.
- Findings (observed):
  1. EditCount's Binding ellipsis with Binding Type Variable opens **"Edit Variable Binding"**: Variable (editable combobox), Initial Value, Clear On Refresh? (checkbox), Refresh Value (disabled), OK / Cancel / Help. Typing FX_Count and OK gives Binding `variables.FX_Count`.
  2. After the reopen, the Variables tab lists **FX_Count under Form - Temporary** (Form - Persistent holds only `fds_SC2`). Most likely created by the Edit Variable Binding dialog (inference; earlier tasks read only the Persistent list).
  3. Binding Type offers 20 options (None, Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, Chart, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart); Justification offers blank, Default, Left, Center, Right.
  4. A new Edit in a FlexLayout region defaults to blank Justification, Binding Type None, Size 37.05; 2; a new Button's Type is PushButton. StaticCount shows "Count:" (No Colon not set, as in the tutorial).
  5. The string-create prompt appears only on the Caption ellipsis click, not on the Caption commit. Strings FX_sHome and FX_sCount render in red text in the Global Objects list (meaning not established).
  6. Form - Persistent shows `fds_SC2` (EXP-056 recorded only `InitialCommand` on FX_Items; noted only).
- Qualifications accepted by the operator: T3 parallel F/X key presses (field reads FX_Count); a snapshot taken while the Justification list was open; T4 direct Width/Height edits with the Layout group already expanded; overwritten `t2-08`; 13 tool-written snapshots in T1; the early-T5 action counts incomplete after context summarization; same-session close and reopen.
- Confinement (git status): only `evidence/EXP-120/` and this record were written by the run (the unreviewed coordinator proposal `tools/claude-harness/briefs/EXP-119.brief.json` predates this run and is untouched).
- Cleanup inventory (Phase 3): StaticCount, EditCount (with the FX_Count variable), ButtonAddToCart on FX_CustomerPortal; string FX_sAddToCart (tenant-wide).
- Open: ButtonAddToCart's shopping-cart Bitmap and Image and Text Horizontal Image Text, once an image is supplied in assets/.
- Next: Part 8 Phase 4 (06:39-09:53): the cart page (Grid Orders bound to the primary FX_Orders collection, read-only, and a Checkout button).
