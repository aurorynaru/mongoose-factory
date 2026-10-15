# EXP-098 - Hello World Part 6 Section 6: FX_OrdersChart chart component (FX_OrderTotalChart), grid moved down and hidden, one Designer Save, runtime chart check

Status: **T1 blocked; T2 and T3 complete; T4 performed the single Designer Save (native toast: "Form [FX_OrdersChart] and global object(s) were saved."); T5 closed and reopened the Designer once and read back the saved state (User scope, Save and Undo disabled, inventory, chart binding, layout, Hidden and Initial Command unchanged). The Designer is clean and open. T6 opened FX_OrdersChart once in the Web Client (runtime): the chart is drawn (column chart, labels 1 and 2, values 90 and 6.99), no legend or title is visible, the grid is not visible, and the Form was closed once cleanly. T7 completed the documentation-only final acceptance audit (`evidence/EXP-098/T7-final-acceptance-audit.md`); recommendation ACCEPTED AS OBSERVED, conditional on the operator's disposition of the Review items. Remaining: the coordinator's formal completion decision.** T1 stopped because the brief's grid formula gave Top −1. T2 applied the operator amendment (grid Height 21 → 6, grid Top 0 → 14), placed one Chart, renamed it FX_OrderTotalChart and set its Layout. T3 set the chart's Binding Type to Chart, bound Chart Data FX_DerOrderTotal with X-axis labels FX_OrderNumber (dialog OK once), and set FormCollectionGrid Hidden = True. Current acceptance status (observed; the final acceptance audit is a later documentation task): AC-1 met (T1 gate, T2/T3/T5 readbacks); AC-2 met (T2 move, placement, rename and Layout; one Toolbox placement); AC-3 met (T3 Binding Type, dialog before/after values, OK once; Hidden True; T5 reopened readback of the dialog); AC-4 met for one Save and one close/reopen (T4 Save toast; T5 reopened readbacks; Designer clean); AC-5 met for the runtime observation (T6: opened once, no F4, closed cleanly; values and visibility recorded below). AC-6: no second placement, no removal, no FX_Orders change, no runtime Save or F4, no unload, no checkout action, no Yes answer.

Summary of the amendment (operator, T2 brief): grid Height 21 → 6 (Width 69 and Lock Size unchanged); grid Top = 21 − 6 − 1 = 14 (Left 0 unchanged); chart Location Top 1, Left 0; chart Size Width 69, Height 12 (= new grid Top − 2). The operator waived the AGENTS.md omission noted in T1 (T2 re-read AGENTS.md from disk).

Run: R-20261015-162105-lEIr, cycle 0, task T1. Worker session cdb061de-2d3e-4460-b768-d6b053ea8230. Date 2026-10-15. Environment: Mongoose Web Designer and Web Client, config group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT.

Scope: Form `FX_OrdersChart` (User scope), created in EXP-097. Target objects for this experiment: FormCollectionGrid (Layout Location Top, Behavior Hidden only), FX_OrderTotalChart (to be created), FX_OrdersChart (one Designer Save). No FX_Orders, FX_Items or other Form is in scope.

## Sources reviewed (T1)

- `AGENTS.md`: content supplied in the task message; **not separately opened from disk** in this task.
- `docs/mongoose/transcripts/hello-world-pt6.md`: Section 5 step 7 (grid resized and moved toward the bottom), Section 6 (Chart component, Binding Type Chart, Chart Data order total, X-axis Order Number, grid Hidden), and the supplied transcript passages for 5:19 to 6:44. The whole file came back in one read; only those passages were used.
- `recipes/components/add-component-from-toolbox.md`: read. Canvas click placement; generated name `<type><n>_USER` is a placeholder; Toolbox drops produce oversized default geometry (see EXP-062-R4 Outcome).
- `recipes/components/configure-basic-component.md`: read. Name and Caption commit on Enter; the in-memory component definition is stale after an edit.
- `recipes/session/session-expiry-and-stale-designer.md`: read. No expiry occurred in T1.
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md`: Outcome (operator, 2026-10-12) only, lines 380-412.
- `experiments/EXP-097-hello-world-part-6-section-5-fx-orderschart-grid-only-form.md`: Outcome (operator, 2026-10-15) only, lines 203-223. Relevant points: Initial Command Refresh was set and saved; the grid was not moved or resized in EXP-097 ("deferred to Section 6"); the runtime open showed two rows without F4.

## Designer gate (AC-1), observed in T1

| Check | Observed | Evidence |
| --- | --- | --- |
| Designer tab | Tab 0, Designer, Form tab `FX_OrdersChart` selected | gate-01 |
| Scope | Status bar: `ScopeType: User` | gate-01, gate-05 |
| Clean state | Save and Undo disabled at start | gate-01 (snapshot: Save disabled, Undo disabled) |
| Initial Command | `Refresh` (Behavior group) | gate-01 |
| Components | 12 rows: `Pane (00)`, `FormCollectionGrid` (Grid, data source `objects`), 10 GridColumns (`FX_DerOrderTotalGridCol`, `FX_CountGridCol`, `FX_CusAddressGridCol`, `FX_CusNameGridCol`, `FX_CustomerIDGridCol`, `FX_ItemGridCol`, `FX_ItmsCostGridCol`, `FX_ItmsDescriptionGridCol`, `FX_ItmsPictureGridCol`, `FX_OrderNumberGridCol`). **No Chart.** | snapshot (accessibility tree); gate-01 shows the first rows only |
| Form Layout | Unit `Char`; Size `69; 21` (sub-rows: Width `69`, Height `21`); Splitter None | gate-03, gate-04 |
| FormCollectionGrid Layout | Unit `Char`; Size `69; 21` (Width `69`, Height `21`, Lock Size `False`); Location `0; 0` (Top `0`, Left `0`) | gate-06, gate-07, gate-08 |
| Session | Web Client tab (tab 1): Mongoose Explorer, no Session Expired modal, no sign-in page | gate-09 |

The Form's Size (69 x 21) equals the grid's Size (69 x 21): the grid already fills the whole Form.

## Grid move: BLOCKED (not performed)

Brief formula: grid Location Top = Form Size height - grid Size height - 1.

- Form height 21 - grid height 21 - 1 = **-1**.
- Brief threshold: stop if the computed Top is below 12 or the grid would leave the Form area. Both conditions hold.
- No edit, no commit. Location Top stays `0`. The correction allowance (one) was not used.

Coordinator decision needed. Options, none executed:

1. Authorize a Size change on FormCollectionGrid (tutorial Section 5 step 7 shrinks the grid before moving it). The current brief forbids any grid property except Location Top and Hidden, so this needs a brief revision. For reference: with the grid's Height at h, Top = 21 - h - 1 reaches the threshold of 12 only when h is 8 or less.
2. Revise the formula or threshold in the brief.
3. Stop the experiment.

Because the chart is to sit above the moved grid, the rest of T1 (chart placement, rename, Layout, binding, Hidden, Save, persistence, runtime) cannot follow the current brief without this decision.

## Action audit (T1, cumulative, exact counts)

| Category | Count | Detail |
| --- | --- | --- |
| Browser calls total | 22 | tabs list 1, tabs select 3, snapshot 2, screenshot 9, click 7 |
| Tabs list (read-only) | 1 | Before the first select |
| Tabs select | 3 | Tab 0 (Designer), tab 1 (Web Client), tab 0 (Designer again). All succeeded after the list |
| Untargeted snapshots (explicit) | 2 | Initial gate; fresh untargeted snapshot before the grid selection |
| Screenshots | 9 | gate-01 to gate-09 |
| Clicks, ref-targeted | 2 | Form Layout group name cell; FormCollectionGrid row in Components grid |
| Clicks, coordinate (expander chevrons only) | 5 | (1585,568) Form Layout; (1596,713) Form Size; (1585,621) grid Layout; (1596,669) grid Size; (1596,765) grid Location |
| Property value entries | 0 | - |
| Property corrections | 0 | - |
| Grid Location Top commits | 0 | Blocked before edit |
| Toolbox placements | 0 | Chart row not clicked |
| Canvas clicks (placements) | 0 | - |
| Binding dialog opens | 0 | - |
| Designer Saves | 0 | - |
| Close/reopen pairs (Designer) | 0 | - |
| Runtime opens / closes | 0 / 0 | - |
| F4 / runtime value changes / runtime Save | 0 / 0 / 0 | - |
| Prompts seen | 0 | None in the Designer or Web Client |
| Errors seen | 0 | No server-event error. The page snapshot shows `Console: 2 errors` on the Designer page; console inspection is outside the brief, so those were not inspected |
| Re-logins | 0 | No session expiry |
| Unloads, checkout actions, FormSync, regenerate, delete | 0 | - |
| FX_Orders or other Form opened | 0 | - |
| Evaluate / run-code tool calls by the worker | 0 | Only UI tools used |

## Worker-written file inventory (T1)

Written by this worker:

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (this record, created)
- `evidence/EXP-098/gate-01-designer-initial-components-form-props.png`
- `evidence/EXP-098/gate-02-form-layout-group-expanded.png`
- `evidence/EXP-098/gate-03-form-layout-values.png`
- `evidence/EXP-098/gate-04-form-size-expanded.png`
- `evidence/EXP-098/gate-05-grid-selected-layout.png`
- `evidence/EXP-098/gate-06-grid-layout-expanded.png`
- `evidence/EXP-098/gate-07-grid-size-location-expanded.png`
- `evidence/EXP-098/gate-08-grid-location-expanded.png`
- `evidence/EXP-098/gate-09-tab1-portal-webclient-state.png`

Written by the browser tool automatically (snapshot and console logs under `evidence/playwright/`), not authored by the worker. Their names are listed in the tool output.

No other file was written. No repository file other than this record and `evidence/EXP-098/` was touched.

## Decisive evidence (what each capture shows, and what it does not prove)

- **gate-01**: Designer tab, `FX_OrdersChart` in the canvas header, Form tab with Initial Command `Refresh`, Save and Undo icons greyed, status bar `ScopeType: User`, Components grid starting at `Pane (00)` and `FormCollectionGrid`. Proves identity, scope, clean state and Initial Command for the visible rows. Does not show all 12 rows (the 12-row count comes from the accessibility snapshot).
- **gate-03 / gate-04**: Form Layout expanded: Unit `Char`, Size `69; 21`, sub-rows Width `69` and Height `21`. Proves the Form values. Does not prove the Form's Location or any other property.
- **gate-05**: `FormCollectionGrid (Grid)` in the Properties header, Component tab, row highlighted in the Components grid. Proves the selection target.
- **gate-06 / gate-07 / gate-08**: grid Layout expanded: Unit `Char`, Size `69; 21` (Width `69`, Height `21`, Lock Size `False`), Location `0; 0` (Top `0`, Left `0`). Proves the values used in the blocker. Does not prove anything about the canvas beyond the values.
- **gate-09**: Web Client tab: Mongoose Explorer, operator account in the header, no Session Expired modal and no sign-in form. Proves the session was usable at the time of capture only. Does not prove that the Web Client has a loaded Form.

## Knowledge state

- Observed: Form Layout Unit `Char`, Size `69; 21` (Width 69, Height 21); FormCollectionGrid Size `69; 21`, Lock Size `False`, Location `0; 0` (Top 0, Left 0); Initial Command `Refresh`; 12 component rows with no Chart; User scope; Save disabled at the gate.
- Observed: the grid fills the Form, so the brief's Location Top formula gives -1.
- Candidate procedure: none in T1.
- Unresolved: whether the coordinator will authorize a grid Size change, or revise the brief formula.

## Next step (not performed)

Coordinator decision on the grid precondition (see options above). After a decision, the next permitted action in the brief is the grid Location Top move (or the approved alternative), then the Toolbox Chart placement. Nothing else in T1 was performed. T1 does not authorize Binding Type, the Binding dialog, Hidden, or Save.

## Limitations

- Same-session UI observation only. No cross-session or replay claim.
- The Designer's `Console: 2 errors` line was not inspected (console inspection is out of scope).
- The accessibility snapshot, not the screenshot, is the source for the 12-row count.

---

## T2: grid geometry amendment, chart placement, rename and chart Layout

Run R-20261015-162105-lEIr, cycle 2, task T2 (worker session cdb061de-2d3e-4460-b768-d6b053ea8230).

### Sources (T2)

- `AGENTS.md`: read from disk in T2 (the T1 omission was waived by the operator).
- T1 record and T1 evidence: reviewed; no T1 browser action was repeated.

### Starting state (T2 gate, observed)

- Tab list (1) before any selection. Tab 0 is the Designer, already the current tab, so no tab selection was needed. Tab 1 is the Web Client, untouched in T2.
- FX_OrdersChart: User scope (status bar `ScopeType: User`); Save and Undo disabled; Initial Command `Refresh`; 12 component rows (Pane (00), FormCollectionGrid, 10 GridColumns); no Chart. Form Size `69; 21`. FormCollectionGrid Size `69; 21`, Location `0; 0`. Evidence: `t2-01-before-grid-height-edit.png`.

### Steps and readbacks

| Step | Action | Readback (observed) | Evidence |
| --- | --- | --- | --- |
| 1 | FormCollectionGrid Layout > Size > Height 21 → 6 (double-click value, keyboard `6`, Enter) | Size `69; 6`; Width `69`; Lock Size `False` | `t2-02-grid-height-editor-open.png`, `t2-03-grid-height-6-committed-readback.png` |
| 2 | FormCollectionGrid Layout > Location > Top 0 → 14 (keys `1`,`4`, Enter) | Location `14; 0`; Top `14`; Left `0`; Size `69; 6` | `t2-04-grid-top-editor-open.png`, `t2-05-grid-top-editor-typed-14.png`, `t2-06-grid-location-top-14-committed-readback.png` |
| 3 | Toolbox: click Chart row once, then one canvas click at (400, 220), above the moved grid | Placed component `chart1_USER`, Type `Chart`. Default Size `31.25; 14.705882352941176` (Width 31.25, Height 14.705882352941176). Default Location `6.6111111111111107; 17.75` (Top 6.6111111111111107, Left 17.75) | `t2-07-chart-placed-above-grid.png` |
| 4 | Name → `FX_OrderTotalChart` (double-click, type, Enter) | Components row `FX_OrderTotalChart` (Chart); Name `FX_OrderTotalChart` | `t2-08-chart-name-editor-open.png`, `t2-09-chart-name-typed-before-commit.png`, `t2-10-chart-renamed-readback.png` |
| 5a | Chart Layout > Location > Top 6.61 → 1 (key `1`, Enter) | Location `1; 17.75`, Top `1` | `t2-11-chart-top-editor-open.png`, `t2-12-chart-top-typed-1-before-commit.png` |
| 5b | Chart Layout > Location > Left 17.75 → 0 (key `0`, Enter) | Location `1; 0`, Left `0` | `t2-13-chart-left-editor-open.png`, `t2-14-chart-left-typed-0-before-commit.png` |
| 5c | Chart Layout > Size > Width 31.25 → 69 (keys `6`,`9`, Enter) | Size `69; 14.7058823529412`, Width `69` | `t2-15-chart-width-editor-open.png`, `t2-16-chart-width-typed-69-before-commit.png` |
| 5d | Chart Layout > Size > Height 14.705882352941176 → 12 (keys `1`,`2`, Enter) | Size `69; 12`, Width `69`, Height `12`; Location `1; 0` | `t2-17-chart-height-editor-open.png`, `t2-18-chart-height-typed-12-before-commit.png`, `t2-19-chart-layout-readback-after-height-12.png` |

Geometry check after step 5: chart occupies Top 1 to 13 (Height 12); grid occupies Top 14 to 20 (Height 6). The chart and grid do not overlap; the gap is 1 unit (chart bottom 13, grid top 14). Both lie inside the Form (Height 21).

### Observations (T2, observed)

- The chart's default geometry (31.25 × 14.7, Top 6.6, Left 17.75) extended downward over the grid's visual area before Layout was corrected (`t2-07`). Its click point was above the grid, and its Top (6.6) was above the grid's Top (14). I did not treat this as "landed inside the grid", so no stop was taken; step 5 corrected it.
- After the rename, the Properties header still read `chart1_USER (Chart)` for a short time (transient lag, as in EXP-003-R2 per the recipe); the Name row and the Components row showed `FX_OrderTotalChart`.
- The Components grid shows FormCollectionGrid and FX_OrderTotalChart at Pane (00). The grid's child rows (10 GridColumns) are now collapsed in the tree view. This is a display state, not a property change; the GridColumn rows were not edited.
- The grid's Top commit visibly moved the grid to the lower part of the canvas (`t2-06`).
- No value was rejected or re-entered, and no correction was needed on any field.

### Procedural deviation (T2)

- **D1:** At step 2, the key presses `1` and `4` were issued in one parallel block. The brief forbids parallel browser actions. Both calls completed; the editor value was verified as `14` (`t2-05`) before commit, so no value or state was affected. No further parallel browser actions were issued.
- **D2:** A targeted snapshot (ref e1198) was taken while the Name editor was open. It returned only the Name row, not the editor textbox. One untargeted snapshot followed, and it provided the textbox ref used for typing. No stale ref was clicked.

### Not performed in T2 (next steps for the coordinator)

- Chart Data Source > Binding Type `Chart`; Binding (...) dialog with Chart Data FX_DerOrderTotal and X-axis FX_OrderNumber.
- FormCollectionGrid Behavior > Hidden = True.
- Designer Save (one), close/reopen, Web Client runtime check.

### Browser action audit (cumulative)

Baseline from T1: 22 browser calls, 0 placements, 0 property edits, 0 Saves.

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Browser calls total | 22 | 57 | 79 |
| Tabs list | 1 | 1 | 2 |
| Tabs select | 3 | 0 | 3 |
| Untargeted snapshots | 2 | 9 | 11 |
| Targeted snapshot | 0 | 1 | 1 |
| Find (read-only) | 0 | 1 | 1 |
| Screenshots | 9 | 19 | 28 |
| Ref-targeted clicks (incl. double-clicks) | 2 | 8 | 10 |
| Coordinate clicks | 5 | 1 | 6 |
| Key presses | 0 | 16 | 16 |
| Text entry (type) | 0 | 1 | 1 |
| Toolbox placements | 0 | 1 | 1 |
| Canvas placement clicks | 0 | 1 | 1 |
| Property commits (Enter) | 0 | 7 | 7 (grid 2; chart 5) |
| Property corrections | 0 | 0 | 0 |
| Binding dialog opens | 0 | 0 | 0 |
| Designer Saves | 0 | 0 | 0 |
| Close/reopen pairs | 0 | 0 | 0 |
| Runtime opens / closes | 0 / 0 | 0 / 0 | 0 / 0 |
| F4 / runtime value changes / runtime Save | 0 | 0 | 0 |
| Prompts seen | 0 | 0 | 0 |
| Errors seen | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Unloads, checkout, FormSync, regenerate, Delete | 0 | 0 | 0 |
| FX_Orders or other Form opened | 0 | 0 | 0 |
| Evaluate / run-code tools (worker-side) | 0 | 0 | 0 |

Counts are worker-side. No controller audit was available to reconcile against in this task; the coordinator should reconcile them against the harness record.

### Worker-written file inventory (T2)

Written by this worker in T2 (in addition to the T1 files listed above):

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (updated: status line, this T2 section)
- `evidence/EXP-098/t2-01-before-grid-height-edit.png` through `evidence/EXP-098/t2-19-chart-layout-readback-after-height-12.png` (19 files, listed in the steps table)

The browser tool also writes snapshot and console logs under `evidence/playwright/`; those were not authored by the worker.

### Final state (T2 boundary)

- Designer: FX_OrdersChart, User scope, **dirty** (Save and Undo enabled), not saved.
- Selected component: FX_OrderTotalChart (Chart), Size 69; 12, Location 1; 0, Width 69, Height 12.
- FormCollectionGrid: Size 69; 6 (Width 69, Lock Size False), Location 14; 0 (Top 14, Left 0), Hidden not changed.
- No dialog, prompt or inline editor open (the last commit, Height, was confirmed in `t2-19`).
- Web Client tab: not touched in T2.

### Knowledge state (T2)

- Observed: grid Height and Top changes commit and read back; a Chart can be placed from the Toolbox with one canvas click and renamed through its Name property; chart default Size and Location as recorded above; chart Location and Size commit and read back.
- Observed: the default chart geometry overlaps the grid's visual area until Layout is corrected.
- Unresolved: whether the chart's binding and the Hidden step behave as expected (not yet tested); whether the chart renders at runtime (not tested).

### Limitations (T2)

- Same-session UI observation only. No cross-session or replay claim.
- Readbacks were taken from the accessibility snapshot and screenshots; the Properties panel is a single view.
- Chart geometry was observed, not rendered at runtime.

---

## T3: chart binding (Binding Type, Binding dialog) and grid Hidden = True

Run R-20261015-162105-lEIr, cycle 4, task T3 (worker session cdb061de-2d3e-4460-b768-d6b053ea8230). Scope: T3 only; stops before the Designer Save.

### Preflight and sources

- Tabs list (1) before any selection; tab 0 (Designer, FX_OrdersChart) was already current, no tab selection was needed; tab 1 (Web Client) not touched.
- T2 disposition and this record reviewed. Operator waivers from T2 preserved: the AGENTS.md omission in T1 (waived; re-read from disk in T2) and the geometry amendment (grid Height 21 → 6; grid Top 14; chart Top 1, Left 0, Width 69, Height 12).
- Preflight state (observed): FX_OrdersChart, `ScopeType: User`, Save and Undo **enabled** (dirty, as expected); FX_OrderTotalChart (Chart) and FormCollectionGrid both one level under Pane (00) with empty Container (siblings; chart is not inside the grid); chart Size `69; 12`, Location `1; 0`; grid Size `69; 6` (Width 69, Lock Size False), Location `14; 0` (Top 14, Left 0) — read back in t3-01 and by find. Evidence: `t3-01-gate-grid-selected-layout-verify.png`.

### Chart binding (observed)

| Step | Result | Evidence |
| --- | --- | --- |
| Data Source group initial (before change) | Binding Type `None`; Binding (empty); Required False; To Be Determined False; Upper or Lower Case `Mixed`; Default Value (empty); Data Type (collapsed); List Source (empty); Validation, Formatting (collapsed) | `t3-03-chart-data-source-group-initial.png` |
| Binding Type dropdown options (initial list, in order) | None, Variable, Property, SubCollection Grid, Filter Attribute, CollectionID Group Box, Primary Collection Grid, Secondary Collection Grid, Graph Element, Tree, Browser, Process Intelligence, Diagram, **Chart**, Gauge, DataView, Calendar, Aggregate, Expression, Infor Chart (list scrolled with the mouse wheel to show Chart) | `t3-04-binding-type-dropdown-open.png`, `t3-05-binding-type-dropdown-scrolled.png` |
| Binding Type set to Chart (one option click; 0 corrections) | Binding Type `Chart`; Binding became `chart.object()` before the dialog | `t3-06-binding-type-chart-readback.png` |
| Binding (...) dialog opened (1 open) | Title "Specify Chart Settings"; tabs Data, Trend Lines, General, Cosmetics I, Cosmetics II, Legend, Other, Chart XML; buttons OK, Apply, Cancel, Help | `t3-07-binding-dialog-initial-before-fill.png` |
| Dialog defaults recorded before change | Chart Style `Single Series Charts`; Chart Type `Column2D`; Caption, Sub-Caption, X-Axis Name, Y-Axis Name, Caption Alignment, Caption Padding, Caption Horizontal Padding empty; Show Caption On Top checked; Align Caption With Canvas checked; Caption Font / Font Size / Font Color empty and Bold checked; Sub-Caption Font / Font Size / Font Color empty and Bold checked; Load Just In Time unchecked; Property for X-Axis Labels empty; Binding: "Bind Chart To Entire Collection" selected ("Bind Chart To Current Row" not selected); Chart Data: Collection `object`; Available Properties list (starting `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `FX_Count`, `FX_CusAddress`, `FX_CusName`, `FX_CustomerID`, `FX_DerOrderTotal`, `FX_Item`, …, `FX_OrderNumber`, `InWorkflow`, … `UpdatedBy`); Add/Remove/Up/Down; Property/Caption/Render As table empty | `t3-07`, `t3-08-binding-dialog-available-properties-scrolled.png` |
| Chart Data: FX_DerOrderTotal added (1 Add click) | Row 1: Property `FX_DerOrderTotal`; Caption auto-filled as `sFX_DerOr…` (truncated on screen; not confirmed in full); Render As empty | `t3-09-binding-dialog-after-add-fx-derordertotal.png` |
| Property for X-Axis Labels set to FX_OrderNumber (1 choice; 0 corrections) | Dropdown shows `FX_OrderNumber` | `t3-10-x-axis-labels-dropdown-open.png`, `t3-11-x-axis-labels-dropdown-scrolled.png`, `t3-12-binding-dialog-before-ok-both-set.png` (state before OK) |
| Dialog OK clicked once | Dialog closed; no error shown; the Designer tab URL no longer carries the `&MGForm=FX_OrdersChart` suffix (form identity still shown in the canvas header and Properties) | `t3-13-after-binding-ok-readback.png` |
| Read back after OK | Binding Type `Chart`; Binding `V(cds_FX_OrderTotalChart)`; Size `69; 12` (Width 69, Height 12); Location `1; 0` (Top 1, Left 0) | `t3-13`, `t3-19-final-chart-data-source-after-ok-readback.png` |

Not verified (limitation): the dialog was not reopened (per brief). FX_DerOrderTotal and FX_OrderNumber are therefore observed only in the dialog before OK; their post-OK persistence in the chart binding is not separately read back. The other dialog settings were not changed and remain the recorded defaults.

### Grid Hidden (observed)

| Step | Result | Evidence |
| --- | --- | --- |
| FormCollectionGrid selected; Behavior expanded | Hidden previously `False`; other Behavior rows unchanged (Read-Only/Disable False, Tab Read-Only Field False, No Tab Stop False, Auto Complete False) | `t3-14-grid-selected-before-hidden.png`, `t3-15-grid-behavior-expanded-before-hidden.png` |
| Hidden set to True (1 edit; 0 corrections) | Editor opened on the value cell; keyboard ArrowDown opened the drop-down list (True, False); `True` chosen; Enter committed | `t3-16-hidden-dropdown-open.png` |
| Readback after commit | Hidden `True`; grid Size `69; 6` and Location `14; 0` unchanged (find readback) | `t3-17-hidden-true-readback.png`, `t3-18-hidden-true-committed-readback.png` |

Design-time note: after Hidden = True the design canvas still draws the grid; Hidden is a runtime visibility property and was not verified at runtime (not in T3).

### Observations (T3, observed only)

- Chart at design time: the canvas shows a chart outline with the chart icon and no drawn bars or axis labels. This is design-time rendering only; no runtime display was checked in T3.
- The Binding Type dropdown is a long list with the mouse-wheel scroll needed to reach Chart (observed).
- Tab URL dropped `&MGForm=FX_OrdersChart` after the dialog OK; identity was re-confirmed by the canvas header `FX_OrdersChart`, the Properties header and the status bar `ScopeType: User`.

### Deviations and method notes (T3)

- **D1 (method, not a parallel action):** the Hidden value cell was clicked, then ArrowDown used to open the combobox; the drop-down arrow was not exposed as a snapshot ref. No parallel browser actions were issued; the tabs list and a snapshot were read-only.
- **D2 (refs):** the X-axis option (e2325) and the Hidden/True option were chosen using a read-only find of the current state, after a full snapshot had shown the list was open. The full-snapshot output for the X-axis list was too large to inline and was saved to a tool-results file that could not be read (permission denied for Read/Grep), so the find was the only way to obtain those refs. No stale ref was used for a click.
- **D3:** the Data Source group expand used a coordinate click on the chevron (1585, 375); the Behavior expand used (1585, 351). Both are chevrons only, as in T1/T2.

### Browser action audit (T3 and cumulative)

T3 browser calls: **65** in total — tabs list 1; untargeted full snapshots 7; targeted snapshots 2; find (read-only) 12; screenshots 19 (t3-01 to t3-19); ref-targeted clicks 14 (grid and chart re-selections, Binding Type, Binding dialog controls, Chart Data and X-axis picks, OK, Hidden option); coordinate clicks 2 (chevrons only); mouse moves 3; mouse wheel 3; key presses 2 (ArrowDown, Enter).

- Cumulative: baseline 79 (T1+T2) + 65 = **144** browser calls.

Cumulative category counts (T1+T2+T3):

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls total | 22 | 57 | 65 | 144 |
| Tabs list | 1 | 1 | 1 | 3 |
| Tabs select | 3 | 0 | 0 | 3 |
| Untargeted full snapshots | 2 | 9 | 7 | 18 |
| Targeted snapshots | 0 | 1 | 2 | 3 |
| Find (read-only) | 0 | 1 | 12 | 13 |
| Screenshots | 9 | 19 | 19 | 47 |
| Ref-targeted clicks (incl. double-clicks) | 2 | 8 | 14 | 24 |
| Coordinate clicks | 5 | 1 | 2 | 8 |
| Mouse moves / wheel | 0 / 0 | 0 / 0 | 3 / 3 | 3 / 3 |
| Key presses | 0 | 16 | 2 | 18 |
| Text entry (type) | 0 | 1 | 0 | 1 |
| Toolbox placements | 0 | 1 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 1 |
| Property commits (Enter key) | 0 | 7 | 1 (Hidden) | 8 |
| Property field changes (value edits and selections) | 0 | 7 (grid Height, grid Top, chart Name, chart Top, Left, Width, Height) | 2 (Binding Type, Hidden) | 9 |
| Property corrections | 0 | 0 | 0 | 0 |
| Binding dialog opens | 0 | 0 | 1 | 1 |
| Binding dialog OK | 0 | 0 | 1 | 1 |
| Chart Data adds / X-axis choices | 0 | 0 | 1 / 1 | 1 / 1 |
| Designer Saves | 0 | 0 | 0 | 0 |
| Close/reopen pairs | 0 | 0 | 0 | 0 |
| Runtime opens / closes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| F4 / runtime value changes / runtime Save | 0 | 0 | 0 | 0 |
| Prompts seen | 0 | 0 | 0 | 0 |
| Errors seen | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Unloads, checkout, FormSync, regenerate, Delete | 0 | 0 | 0 | 0 |
| FX_Orders or other Form opened | 0 | 0 | 0 | 0 |
| Evaluate / run-code tools (worker-side) | 0 | 0 | 0 | 0 |

Notes on counts: the T2 ledger's "Property commits" (7) is retained as recorded; the T3 commit count is the single Enter for Hidden, and the Binding Type and dialog values were committed by option selection and OK. The brief's baseline (79 calls, one placement, seven property commits, zero corrections, zero Binding dialog opens, zero Saves) is reconciled: 79 + 65 = 144; one placement retained; zero corrections; one Binding dialog open in T3; zero Saves. Worker-side counts only; no controller audit was available to reconcile against in this task.

### Worker-written file inventory (T3)

Written by this worker in T3 (in addition to T1 and T2 files):

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (updated: status line; this T3 section)
- `evidence/EXP-098/t3-01-gate-grid-selected-layout-verify.png`
- `evidence/EXP-098/t3-02-chart-selected-before-data-source-expand.png`
- `evidence/EXP-098/t3-03-chart-data-source-group-initial.png`
- `evidence/EXP-098/t3-04-binding-type-dropdown-open.png`
- `evidence/EXP-098/t3-05-binding-type-dropdown-scrolled.png`
- `evidence/EXP-098/t3-06-binding-type-chart-readback.png`
- `evidence/EXP-098/t3-07-binding-dialog-initial-before-fill.png`
- `evidence/EXP-098/t3-08-binding-dialog-available-properties-scrolled.png`
- `evidence/EXP-098/t3-09-binding-dialog-after-add-fx-derordertotal.png`
- `evidence/EXP-098/t3-10-x-axis-labels-dropdown-open.png`
- `evidence/EXP-098/t3-11-x-axis-labels-dropdown-scrolled.png`
- `evidence/EXP-098/t3-12-binding-dialog-before-ok-both-set.png`
- `evidence/EXP-098/t3-13-after-binding-ok-readback.png`
- `evidence/EXP-098/t3-14-grid-selected-before-hidden.png`
- `evidence/EXP-098/t3-15-grid-behavior-expanded-before-hidden.png`
- `evidence/EXP-098/t3-16-hidden-dropdown-open.png`
- `evidence/EXP-098/t3-17-hidden-true-readback.png`
- `evidence/EXP-098/t3-18-hidden-true-committed-readback.png`
- `evidence/EXP-098/t3-19-final-chart-data-source-after-ok-readback.png`

The browser tool also writes snapshot and console logs under `evidence/playwright/`; those were not authored by the worker.

### Final state (T3 boundary)

- Designer: FX_OrdersChart, `ScopeType: User`, **dirty** (Save and Undo enabled), **not saved**. Save was not invoked.
- Components: Pane (00); FormCollectionGrid (Hidden True, Size 69; 6, Location 14; 0); 10 GridColumns (unchanged); FX_OrderTotalChart (Chart, Binding Type Chart, Binding V(cds_FX_OrderTotalChart), Size 69; 12, Location 1; 0). Initial Command was not changed (Refresh from T0 gate; not re-read in T3).
- Selected component: FX_OrderTotalChart. No dialog, menu, prompt or inline editor open. Web Client tab not touched in T3.

### Knowledge state (T3)

- Observed: Binding Type `Chart` can be set from the drop-down and commits; the Binding (...) dialog has the listed defaults; Chart Data FX_DerOrderTotal and the X-axis label FX_OrderNumber were set and OK committed; the Binding value reads `V(cds_FX_OrderTotalChart)` after OK; grid Hidden set to True and reads back True in the same session.
- Observed: the Designer dialog OK changed the tab URL (lost the MGForm suffix); identity remained visible.
- Unresolved: post-OK persistence of the Chart Data and X-axis entries (dialog not reopened); whether Hidden is honored at runtime; chart rendering at runtime; the Save response (next task).
- Candidate procedure: none. Replay: none.

### Limitations (T3)

- Same-session UI observation only. No cross-session or replay claim.
- The Caption auto-fill `sFX_DerOr…` is truncated on screen; the full value was not read.
- The dialog was not reopened, so the post-OK Chart Data and X-axis values are not independently read back (observed in the pre-OK state only).

### Next permitted task (performed in T4; see the T4 section below)

The single Designer Save was performed in T4. The next step is persistence verification (one Designer close/reopen and readback), not runtime testing yet.

---

## T4: the single Designer Save

Run R-20261015-162105-lEIr, cycle 6, task T4 (worker session cdb061de-2d3e-4460-b768-d6b053ea8230). Scope: exactly one native Designer Save, then stop. No close/reopen, no Binding dialog reopen, no runtime, no F4, no property edits.

### Sources and preflight

- Record reviewed: the status and T1–T3 sections (read the top of the file; T3 section from memory of the same session). Operator T3 disposition: the denied Grep #47 and the unsuccessful documentation Edit #88 are accepted for EXP-098 only and were not attempted again in T4.
- Tabs list (1) before any selection. Tab 0 (Designer, FX_OrdersChart) was already current; no tab selection was needed. Tab 1 (Web Client) not touched.
- Gate snapshot (untargeted), current task, before any action: FX_OrdersChart tab selected; `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; **Save and Undo enabled** (dirty, as expected before save); no dialog, menu, prompt or inline editor open.
- Components inventory (from the same snapshot): Pane (00); FormCollectionGrid (Grid, data source `objects`); 10 GridColumns (`FX_DerOrderTotalGridCol`, `FX_CountGridCol`, `FX_CusAddressGridCol`, `FX_CusNameGridCol`, `FX_CustomerIDGridCol`, `FX_ItemGridCol`, `FX_ItmsCostGridCol`, `FX_ItmsDescriptionGridCol`, `FX_ItmsPictureGridCol`, `FX_OrderNumberGridCol`); FX_OrderTotalChart (Chart). No material discrepancy from the T3 handoff.
- FX_OrderTotalChart (chart, Properties read-only from the gate snapshot): Binding Type `Chart`; Binding `V(cds_FX_OrderTotalChart)`; Size `69; 12` (Width 69, Height 12); Location `1; 0` (Top 1, Left 0).
- FormCollectionGrid (selected read-only with a current-snapshot ref; read back by find): Hidden `True`; Size `69; 6`; Location `14; 0`. Evidence: `t4-01-pre-save-gate-grid-selected.png`.
- Fresh untargeted snapshot immediately before Save: the native toolbar Save control identified as the button "Save" (ref e16), enabled, inside the toolbar. No keyboard shortcut was used.

### The Save (exactly one attempt)

| Item | Observed |
| --- | --- |
| Save invocation | One click on the native toolbar Save button; the tool reported dispatch without error (`#ext-element-121`). **Save dispatched: yes.** Attempts: **1**. |
| Native response (verbatim toast header and body) | Header: **"Save"**. Body: **"Form [FX_OrdersChart] and global object(s) were saved."** Visible at the top right of the canvas area. No error text, no validation message, no dialog. |
| Toast timing | Captured in the immediate screenshot. By the post-save capture the toast had dismissed (not visible in `t4-03`). |
| Post-save state (fresh snapshot) | **Save: disabled. Undo: disabled.** Redo disabled. ScopeType User. No dialog, menu, prompt or inline editor. |
| Designer state | Clean. Form identity FX_OrdersChart (canvas header). Hidden True and grid Size/Location as before the Save (visible in `t4-03` Properties pane: Hidden `True`). |

Evidence:
- `t4-01-pre-save-gate-grid-selected.png`: pre-save state. Shows the grid selected, Hidden `True`, Location/Size confirmed by find (read-only). Does not prove the database write.
- `t4-02-save-immediate-response.png`: the immediate response. Shows the "Save — Form [FX_OrdersChart] and global object(s) were saved." toast and the Save/Undo icons greyed in the toolbar. This supports the native response text; it does not by itself prove persistence.
- `t4-03-post-save-designer-state-clean.png`: the post-save Designer. Shows Save and Undo greyed, FX_OrdersChart in the canvas header, `ScopeType: User` and Hidden `True` for FormCollectionGrid. The toast is no longer visible. Does not prove database durability or cross-session persistence.

### Interpretation (observed only)

- The native response reports a successful save of the Form FX_OrdersChart and global objects. The post-save Save/Undo disabled state is consistent with a clean client session.
- Persistence is not verified in T4. The next task (close/reopen and readback) is required before any persistence claim, and even then the verification is same-session UI observation unless a separate cross-session check is authorized.
- The toast text names "global object(s)"; which global objects were saved was not inspected (out of scope).

### Browser action audit (T4 and cumulative)

T4 browser calls: **12** — tabs list 1; untargeted full snapshots 3 (gate, pre-save, post-save); find (read-only) 3 (`Hidden`, `14; 0`, `69; 6`); ref-targeted clicks 2 (FormCollectionGrid selection; the single Save click); screenshots 3 (t4-01, t4-02, t4-03); key presses 0; text entry 0. Note: the gate snapshot and the pre-save snapshot were both untargeted and both counted.

Cumulative (T1 + T2 + T3 + T4): **156** browser calls = 22 + 57 + 65 + 12.

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls total | 22 | 57 | 65 | 12 | 156 |
| Tabs list | 1 | 1 | 1 | 1 | 4 |
| Tabs select | 3 | 0 | 0 | 0 | 3 |
| Untargeted full snapshots | 2 | 9 | 7 | 3 | 21 |
| Targeted snapshots | 0 | 1 | 2 | 0 | 3 |
| Find (read-only) | 0 | 1 | 12 | 3 | 16 |
| Screenshots | 9 | 19 | 19 | 3 | 50 |
| Ref-targeted clicks (incl. double-clicks) | 2 | 8 | 14 | 2 | 26 |
| Coordinate clicks | 5 | 1 | 2 | 0 | 8 |
| Mouse moves / wheel | 0 / 0 | 0 / 0 | 3 / 3 | 0 / 0 | 3 / 3 |
| Key presses | 0 | 16 | 2 | 0 | 18 |
| Text entry (type) | 0 | 1 | 0 | 0 | 1 |
| Toolbox placements | 0 | 1 | 0 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 0 | 1 |
| Property field changes | 0 | 7 | 2 | 0 | 9 |
| Property commits (Enter key) | 0 | 7 | 1 | 0 | 8 |
| Property corrections | 0 | 0 | 0 | 0 | 0 |
| Binding dialog opens | 0 | 0 | 1 | 0 | 1 |
| Binding dialog OK | 0 | 0 | 1 | 0 | 1 |
| Designer Saves attempted (dispatched) | 0 | 0 | 0 | **1** | **1** |
| Designer Save errors | 0 | 0 | 0 | 0 | 0 |
| Close/reopen pairs | 0 | 0 | 0 | 0 | 0 |
| Runtime opens / closes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| F4 / runtime value changes / runtime Save | 0 | 0 | 0 | 0 | 0 |
| Prompts seen | 0 | 0 | 0 | 0 | 0 |
| Errors seen | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| Unloads, checkout, FormSync, regenerate, Delete | 0 | 0 | 0 | 0 | 0 |
| FX_Orders or other Form opened | 0 | 0 | 0 | 0 | 0 |
| Evaluate / run-code tools (worker-side) | 0 | 0 | 0 | 0 | 0 |

Reconciliation: no controller audit was available in this task; these are worker-side counts. The T1–T3 baseline of 144 browser calls, one Toolbox placement, zero prior Designer Saves, one Binding dialog opening and zero corrections is preserved; no later adjustment was needed. T4 adds 12 calls and one Designer Save attempt (dispatched; succeeded per the native toast). The T3 record's "Property commits" row remains as recorded in T3.

### Worker-written file inventory (T4)

Written by this worker in T4 (in addition to the T1–T3 files):

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (updated: status line, the T3 "next task" heading, and this T4 section including the audit)
- `evidence/EXP-098/t4-01-pre-save-gate-grid-selected.png`
- `evidence/EXP-098/t4-02-save-immediate-response.png`
- `evidence/EXP-098/t4-03-post-save-designer-state-clean.png`

The browser tool also writes snapshot and console logs under `evidence/playwright/` (for example the console log `console-2026-10-15T10-11-00-215Z.log` and page snapshots); these were not authored by the worker.

### Final state (T4 boundary)

- Designer: FX_OrdersChart, User scope, **saved and clean** (Save and Undo disabled after the single Save).
- Components: Pane (00); FormCollectionGrid (Hidden True, Size 69; 6, Location 14; 0); 10 GridColumns (unchanged); FX_OrderTotalChart (Chart; Binding Type Chart; Binding `V(cds_FX_OrderTotalChart)`; Size 69; 12; Location 1; 0).
- Selected component: FormCollectionGrid (read-only selection). No dialog, menu, prompt or inline editor open. Web Client tab not touched in T4.
- The Form was not closed or reopened; the Binding dialog was not reopened; no runtime was opened.

### Knowledge state (T4)

- Observed: one native Designer Save on FX_OrdersChart was dispatched; the native response was the toast "Form [FX_OrdersChart] and global object(s) were saved."; the post-save Save and Undo are disabled; the Designer is clean.
- Unresolved: persistence (requires one Designer close/reopen and readback — next task); the Binding dialog's post-save values (requires the operator-authorized read-only reopen with Cancel, in the persistence task); runtime rendering of the chart and the grid's Hidden state at runtime (later task).
- Candidate procedure: none. Replay: none. No cross-session or database-level durability claim is made.

### Limitations (T4)

- Save was judged successful from the native toast and the disabled Save/Undo icons (same-session UI observation). These do not, by themselves, establish database durability.
- The toast was visible in `t4-02` only; it had dismissed by `t4-03`.
- The Save click was targeted by ref e16 from a fresh snapshot; the tool reported the dispatched element as `#ext-element-121`. The mapping of that element to the toolbar Save control is inferred from the snapshot ref and from the toast that appeared; it was not separately confirmed.

### Next permitted task (not performed)

Persistence verification: one Designer close (clean) through the Form tab control and one reopen through the Form menu recent-forms entry, then the readback listed in the brief (Components inventory, chart Binding Type/Binding/Size/Location, grid Hidden/Size/Location, Initial Command Refresh), with screenshots. T4 did not perform these.

---

## T5: persistence close/reopen, read-only readbacks and one read-only Binding dialog reopen

Run R-20261015-162105-lEIr, cycle 7, task T5 (worker session cdb061de-2d3e-4460-b768-d6b053ea8230). Scope: persistence verification only; stops before runtime. The single Designer Save was NOT repeated.

### Sources and preflight

- Tabs list (1) before any selection; tab 0 (Designer) was already current; tab 1 (Web Client) not touched.
- Gate (fresh untargeted snapshot, before any action): FX_OrdersChart open; `ScopeType: User`; **Save and Undo disabled**; no dialog, menu, prompt or inline editor; Components: Pane (00), FormCollectionGrid (Hidden True, Size 69; 6, Location 14; 0), 10 GridColumns, FX_OrderTotalChart (Chart). Form Layout Unit Char, Size 69; 21. Evidence: none separate (state captured in the snapshot and in `t5-01` after close).

### Close and reopen (one pair)

| Step | Result | Evidence |
| --- | --- | --- |
| Form-tab close (control `closable FX_OrdersChart`, ref from the gate snapshot) | Clean close, **no save prompt** appeared; canvas and Properties emptied; status bar still `ScopeType: User`. No "Yes" or "No" answered (no prompt existed). | `t5-01-after-form-tab-close.png` |
| Reopen through Form menu recent-forms (menuitem `FX_OrdersChart`, ref from a full snapshot; recent list also shows FX_Orders, FX_HelloWorld01, FX_Items, not opened) | Reopened FX_OrdersChart; `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; **Save and Undo disabled** | `t5-02-reopened-form-identity-scope-save-state.png` |

### Readbacks after reopen (all read-only)

| Item | Observed |
| --- | --- |
| Form Behavior Initial Command | **Refresh** (unchanged) |
| Form Layout | Unit Char; Size 69; 21 (Width 69, Height 21) |
| Components inventory | **13 rows**: Pane (00); FormCollectionGrid (Grid, data source `objects`); 10 GridColumns (`FX_DerOrderTotalGridCol`, `FX_CountGridCol`, `FX_CusAddressGridCol`, `FX_CusNameGridCol`, `FX_CustomerIDGridCol`, `FX_ItemGridCol`, `FX_ItmsCostGridCol`, `FX_ItmsDescriptionGridCol`, `FX_ItmsPictureGridCol`, `FX_OrderNumberGridCol`); **FX_OrderTotalChart** (Chart, data source `V(cds_FX_OrderTotalChart)`). FX_OrderTotalChart's Container is empty and its Pane is 00, same level as FormCollectionGrid (sibling, not contained). |
| FX_OrderTotalChart Binding Type | **Chart** |
| FX_OrderTotalChart Binding | **V(cds_FX_OrderTotalChart)** |
| FX_OrderTotalChart Size | **69; 12** (Width 69, Height 12; Lock Size False) |
| FX_OrderTotalChart Location | **1; 0** (Top 1, Left 0) |
| FX_OrderTotalChart Hidden | False (chart's own default; not an edited property) |
| FormCollectionGrid Hidden | **True** |
| FormCollectionGrid Size | **69; 6** (Width 69; Lock Size False) |
| FormCollectionGrid Location | **14; 0** (Top 14, Left 0) |

Evidence: `t5-03-reopened-form-details-expanded.png` (Details expanded; Collections tab shows Primary Collection FX_Orders, not opened), `t5-04-reopened-components-inventory.png` (Pane collapsed), `t5-05-reopened-components-pane-expanded.png` (FormCollectionGrid and FX_OrderTotalChart at Pane level), `t5-06-reopened-components-grid-children-expanded.png` (grid's GridColumn rows visible), `t5-07-reopened-chart-selected-properties.png` (chart Binding Type Chart, Binding V(cds_FX_OrderTotalChart)), `t5-10-reopened-grid-hidden-size-location.png` (grid Hidden True).

Limits of the readback: the Components tree shows 13 component rows after expanding Pane and the grid; the grid child count (10) was taken from the accessibility snapshot, and the first GridColumn row is visible in the screenshot (the rest only in the snapshot). Chart Left and Top are read from the composite `1; 0` (Top 1, Left 0); the composite convention matched the grid's `14; 0` and the T2 Top/Left entries.

### One read-only Binding dialog reopen (exactly one open; exited with Cancel)

Opened from the chart's Binding (...) button (Data Source group, Binding row). Values as displayed:

| Field | Displayed value |
| --- | --- |
| Chart Style | Single Series Charts |
| Chart Type | Column2D |
| Caption, Sub-Caption, X-Axis Name, Y-Axis Name, Caption Alignment, Caption Padding, Caption Horizontal Padding | empty |
| Show Caption On Top | checked |
| Align Caption With Canvas | checked |
| Load Just In Time | unchecked |
| Caption Font, Font Size, Font Color; Sub-Caption Font, Font Size, Font Color | empty |
| Bold (Caption), Bold (Sub-Caption) | checked |
| Property for X-Axis Labels | **FX_OrderNumber** |
| Binding | Bind Chart To Entire Collection (selected); Bind Chart To Current Row (not selected) |
| Chart Data Collection | object |
| Chart Data row 1 | Property **FX_DerOrderTotal**; Caption `sFX_DerOr…` (truncated on screen; full value not confirmed); Render As empty |

This matches the T3 pre-OK state and the defaults recorded in T3. No field was changed. Exit: **Cancel** clicked once (not OK). The dialog closed and Save and Undo remained disabled (`find` readback). Evidence: `t5-08-binding-dialog-reopened-readonly.png` (dialog values), `t5-09-after-binding-cancel-state.png` (dialog closed, Save and Undo greyed, Binding still V(cds_FX_OrderTotalChart)).

### Clean-state check

- After the readbacks and the Cancel: Save **disabled**, Undo **disabled** (find readbacks, twice). The Designer is clean. No restore close/reopen pair was needed or used.
- No prompt appeared at any point (close, reopen, dialog open, dialog Cancel).

### Browser action audit (T5 and cumulative)

T5 browser calls: **43** — tabs list 1; untargeted snapshots 10 (full 7; depth-limited 3 — depth 3, depth 4 and depth 12); find (read-only) 10; ref-targeted clicks 9 (form-tab close, Form menu, recent-forms FX_OrdersChart, Details expander, Components tab, chart row, Binding (...), dialog Cancel, grid row); coordinate clicks 2 (Pane chevron, grid chevron — view-only, not property edits); screenshots 11 (`t5-01` to `t5-11`); key presses 0; text entry 0. Snapshot notes: one full snapshot (#9) exceeded the inline output limit and was saved to a tool-results file that could not be read; its Cancel ref was obtained by a read-only `find`, as a documented deviation (no stale ref was used).

Cumulative (T1 + T2 + T3 + T4 + T5): **199** browser calls = 22 + 57 + 65 + 12 + 43.

| Category | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls total | 22 | 57 | 65 | 12 | 43 | 199 |
| Tabs list | 1 | 1 | 1 | 1 | 1 | 5 |
| Tabs select | 3 | 0 | 0 | 0 | 0 | 3 |
| Untargeted snapshots | 2 | 9 | 7 | 3 | 10 | 31 |
| Targeted snapshots | 0 | 1 | 2 | 0 | 0 | 3 |
| Find (read-only) | 0 | 1 | 12 | 3 | 10 | 26 |
| Screenshots | 9 | 19 | 19 | 3 | 11 | 61 |
| Ref-targeted clicks | 2 | 8 | 14 | 2 | 9 | 35 |
| Coordinate clicks | 5 | 1 | 2 | 0 | 2 | 10 |
| Mouse moves / wheel | 0 / 0 | 0 / 0 | 3 / 3 | 0 / 0 | 0 / 0 | 3 / 3 |
| Key presses | 0 | 16 | 2 | 0 | 0 | 18 |
| Text entry | 0 | 1 | 0 | 0 | 0 | 1 |
| Toolbox placements | 0 | 1 | 0 | 0 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 0 | 0 | 1 |
| Property field changes | 0 | 7 | 2 | 0 | 0 | 9 |
| Property commits (Enter) | 0 | 7 | 1 | 0 | 0 | 8 |
| Property corrections | 0 | 0 | 0 | 0 | 0 | 0 |
| Binding dialog opens | 0 | 0 | 1 | 0 | 1 | 2 |
| Binding dialog OK | 0 | 0 | 1 | 0 | 0 | 1 |
| Binding dialog Cancel | 0 | 0 | 0 | 0 | 1 | 1 |
| Designer Saves dispatched | 0 | 0 | 0 | 1 | 0 | **1** |
| Designer Save errors | 0 | 0 | 0 | 0 | 0 | 0 |
| Form close/reopen pairs | 0 | 0 | 0 | 0 | 1 | **1** |
| Save-prompt answers (No / Yes) | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Runtime opens / closes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| F4 / runtime value changes / runtime Save | 0 | 0 | 0 | 0 | 0 | 0 |
| Prompts seen | 0 | 0 | 0 | 0 | 0 | 0 |
| Errors seen | 0 | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 |
| Unloads, checkout, FormSync, regenerate, Delete | 0 | 0 | 0 | 0 | 0 | 0 |
| FX_Orders or other Form opened | 0 | 0 | 0 | 0 | 0 | 0 |
| Evaluate / run-code (worker) | 0 | 0 | 0 | 0 | 0 | 0 |

Reconciliation: the T4 baseline (156 calls, one Designer Save, one Toolbox placement, one Binding dialog opening, zero corrections, zero prior close/reopen pairs) is preserved. T5 adds 43 calls, one close/reopen pair and one read-only Binding dialog opening (with Cancel). The T3 "Property commits" row is kept as recorded in T3. No controller audit was available in this task; these are worker-side counts. No earlier count was overwritten.

### Worker-written file inventory (T5)

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (updated: status line; T5 section and audit)
- `evidence/EXP-098/t5-01-after-form-tab-close.png`
- `evidence/EXP-098/t5-02-reopened-form-identity-scope-save-state.png`
- `evidence/EXP-098/t5-03-reopened-form-details-expanded.png`
- `evidence/EXP-098/t5-04-reopened-components-inventory.png`
- `evidence/EXP-098/t5-05-reopened-components-pane-expanded.png`
- `evidence/EXP-098/t5-06-reopened-components-grid-children-expanded.png`
- `evidence/EXP-098/t5-07-reopened-chart-selected-properties.png`
- `evidence/EXP-098/t5-08-binding-dialog-reopened-readonly.png`
- `evidence/EXP-098/t5-09-after-binding-cancel-state.png`
- `evidence/EXP-098/t5-10-reopened-grid-hidden-size-location.png`
- `evidence/EXP-098/t5-11-final-clean-state-before-stop.png`

The browser tool also writes snapshot and console logs under `evidence/playwright/` and a persisted snapshot under the tool-results directory; those were not authored by the worker.

### Decisive evidence (T5)

- `t5-01`: form closed, no prompt, status bar User scope. Supports the close step (AC-4).
- `t5-02`: reopened FX_OrdersChart, User scope, Save and Undo disabled. Supports AC-4 (same-session reopen; not cross-session).
- `t5-04`/`t5-05`/`t5-06`: 13-row inventory with FX_OrderTotalChart at Pane level beside FormCollectionGrid. Supports AC-1 and AC-2 inventory.
- `t5-07`/`t5-08`: chart Binding Type Chart; Binding V(cds_FX_OrderTotalChart); dialog X-axis FX_OrderNumber; Chart Data FX_DerOrderTotal. Supports AC-3 after reopen. The Caption cell is truncated and not confirmed.
- `t5-10`: grid Hidden True, Size 69; 6, Location 14; 0. Supports AC-3 (Hidden) and AC-4 (layout unchanged).
- `t5-09`/`t5-11`: dialog closed by Cancel; Save and Undo disabled. Supports the clean-state requirement.
- Limitations: same-session UI observation. Not cross-session or database-level durability. Runtime has not been checked.

### Knowledge state (T5)

- Observed: one Designer close (clean, no prompt) and one reopen via the Form menu recent-forms entry; after reopen, FX_OrdersChart is in User scope with Save and Undo disabled; Initial Command Refresh; 13 component rows including FX_OrderTotalChart as a sibling of FormCollectionGrid; chart Binding Type Chart, Binding V(cds_FX_OrderTotalChart), Size 69; 12, Location 1; 0; grid Hidden True, Size 69; 6, Location 14; 0; Binding dialog values as tabled above (read-only, Cancel).
- Unresolved: the full text of the FX_DerOrderTotal Caption (truncated on screen); the grid's Hidden behavior at runtime; the chart's runtime rendering; cross-session persistence (not claimed).
- Candidate procedure: none. Replay: none.

### Next permitted task (not performed)

Runtime chart check: open FX_OrdersChart once in the Web Client (through the Form menu recent-forms entry if listed, otherwise Form > Open > Select Form), without F4 or any query key; record the chart, its type, X-axis labels (expected 1 and 2), values (expected 90.00 and 6.99 or proportional), legend/title, grid visibility and any message; screenshot; close once cleanly. (Performed in T6; see the T6 section.)

---

## T6: runtime chart check (Web Client, read-only observation, one open and one close)

Run R-20261015-162105-lEIr, cycle 8, task T6 (worker session cdb061de-2d3e-4460-b768-d6b053ea8230). Scope: runtime observation of FX_OrdersChart only; no Designer Save, property change, Designer close/reopen, Binding dialog or F4. Operator T5 disposition followed.

### Sources and preflight

- No new source document was read in T6. The EXP-098 record's status and T4/T5 sections were reviewed as the T5 handoff; AGENTS.md and the other brief sources were read earlier (AGENTS.md in T2, the transcript and recipes in T1) and were not re-read.
- Tabs list (1) before any selection. Tab 0 = Designer (FX_OrdersChart, unchanged); tab 1 = Web Client (`MGForm` absent; URL on the portal). Tab 1 was selected (success) and a fresh snapshot taken.
- Web Client state before opening (observed): Mongoose Explorer (My Folders, Master Explorer, Public Folders, User Folders) inside the app iframe; no runtime Form open; no Session Expired modal and no sign-in page. The operator's signed-in account is shown in the header (not recorded here). Evidence: `t6-01-webclient-gate-before-open.png`.

### Opening (one open)

- The Explorer's Form menu (ref in the current snapshot) listed the recent forms including **FX_OrdersChart** (plus FX_Orders, FX_HelloWorld01, FX_Items, IDO Properties, IDOs, Sql Tables, IDO Projects, Property Classes, FX_UMs). Only the FX_OrdersChart recent-forms item was clicked. FX_Orders was **not** opened.
- Result: the runtime Form FX_OrdersChart opened in the Web Client tab; title bar `FX_OrdersChart`; status bar `(Object 1 of 2)`. No F4, no query key, no Filter in Place, no value change, no click inside the chart.

### Runtime observations (observed only)

| Item | Observed | Evidence basis |
| --- | --- | --- |
| Chart drawn | **Yes**. A chart is rendered in the upper-left of the Form content area. | screenshot `t6-02`, `t6-03` |
| Chart type | Vertical column chart (bars rising from a baseline; a vertical Y axis). The runtime does not display a type name; this is consistent with the Column2D chart type recorded in the Designer (T3), but the type name itself is not visible. | screenshot; dialog defaults from T3/T5 |
| X-axis labels | **"1"** and **"2"** (exact text in the accessibility tree: tab-panel image contains `1` and `2`). | snapshot (accessibility tree) and screenshot |
| Values / bar heights | Labels **"90"** and **"6.99"** (exact text in the accessibility tree). The bar for category 1 reaches about 90 on the 0–100 Y axis; the bar for category 2 is short, consistent with 6.99. | accessibility tree `90`, `6.99`; screenshot |
| Value text format | The label reads **"90"**, not "90.00" as the brief's expected string; "6.99" matches. Observed only; the difference in formatting is not explained by the record. | accessibility tree |
| Y-axis | Ticks 0, 20, 40, 60, 80, 100 (accessibility tree and screenshot). | snapshot |
| Legend | **None visible.** | screenshot |
| Title / caption | **None visible.** (The Designer Caption and Sub-Caption were empty in T3/T5.) | screenshot |
| Grid visibility | **Not visible.** The Form's tab-panel accessibility subtree contains only the chart image; no "Order Total", "Count" or other GridColumn header text was found (find returned no matches). | find `Order Total` returned no matches; snapshot tree |
| Status bar | `(Object 1 of 2)` | screenshot; find |
| Messages | **No native message, warning, error or loading indicator was visible.** No message text recorded. | screenshot |

Limitations: the Y-axis, labels and values were read from the accessibility tree and the rendered image; the chart image itself is not a DOM table. The grid's absence is an accessibility-tree observation (the Form does not render a grid header in the tree), and the screenshot is consistent with it. The number of rows loaded is consistent with the Initial Command Refresh and the two FX_Orders records (object 1 of 2), but the record contents were not inspected.

### Runtime close (one close, clean)

- A fresh snapshot was taken immediately before the close. The Form-tab control `Close Panel FX_OrdersChart` (ref from that snapshot) was clicked once.
- **No prompt appeared.** The Web Client returned to the Mongoose Explorer with no Form open. Evidence: `t6-04-after-runtime-close-clean-state.png` (Explorer, empty canvas, no dialog).

### Browser action audit (T6 and cumulative)

T6 browser calls: **16** — tabs list 1; tabs select 1; untargeted full/depth snapshots 3; screenshots 4 (`t6-01`–`t6-04`); find (read-only) 4 (`FX_OrdersChart`, `Order Total`, `Object 1 of 2`, `6.99`); ref-targeted clicks 3 (Explorer Form menu; recent-forms FX_OrdersChart; Form-tab close). Coordinate clicks 0; key presses 0; text entry 0; Designer Saves 0; property edits 0; Binding dialog opens 0; runtime opens 1; runtime closes 1; runtime Save / F4 / value changes 0.

Cumulative (T1 + T2 + T3 + T4 + T5 + T6): **215** browser calls = 199 + 16.

| Category | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browser calls total | 22 | 57 | 65 | 12 | 43 | 16 | 215 |
| Tabs list | 1 | 1 | 1 | 1 | 1 | 1 | 6 |
| Tabs select | 3 | 0 | 0 | 0 | 0 | 1 | 4 |
| Untargeted snapshots | 2 | 9 | 7 | 3 | 10 | 3 | 34 |
| Targeted snapshots | 0 | 1 | 2 | 0 | 0 | 0 | 3 |
| Find (read-only) | 0 | 1 | 12 | 3 | 10 | 4 | 30 |
| Screenshots | 9 | 19 | 19 | 3 | 11 | 4 | 65 |
| Ref-targeted clicks | 2 | 8 | 14 | 2 | 9 | 3 | 38 |
| Coordinate clicks | 5 | 1 | 2 | 0 | 2 | 0 | 10 |
| Mouse moves / wheel | 0 / 0 | 0 / 0 | 3 / 3 | 0 / 0 | 0 / 0 | 0 / 0 | 3 / 3 |
| Key presses | 0 | 16 | 2 | 0 | 0 | 0 | 18 |
| Text entry | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Toolbox placements | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Canvas placement clicks | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Property field changes | 0 | 7 | 2 | 0 | 0 | 0 | 9 |
| Property commits (Enter) | 0 | 7 | 1 | 0 | 0 | 0 | 8 |
| Property corrections | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Binding dialog opens | 0 | 0 | 1 | 0 | 1 | 0 | 2 |
| Binding dialog OK / Cancel | 0 | 0 | 1 / 0 | 0 | 0 / 1 | 0 | 1 / 1 |
| Designer Saves dispatched | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Designer Save errors | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Designer close/reopen pairs | 0 | 0 | 0 | 0 | 1 | 0 | **1** |
| Save-prompt answers (No / Yes) | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Runtime opens / closes | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| F4 / runtime value changes / runtime Save | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Prompts seen | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Errors seen | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Unloads, checkout, FormSync, regenerate, Delete | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| FX_Orders or other Form opened | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Reconciliation: the T5 baseline (199 calls; one Designer Save; one Toolbox placement; one close/reopen pair; two Binding dialog opens (one OK, one Cancel); zero corrections; zero previous runtime opens) is preserved. T6 adds 16 calls, one runtime open and one runtime close, and no Designer Save or property mutation. No controller audit was available in this task; the counts are worker-side. The T3 "Property commits" row is kept as recorded in T3.

### Worker-written file inventory (T6)

- `experiments/EXP-098-hello-world-part-6-section-6-fx-orderschart-chart-component.md` (updated: status line; this T6 section and audit)
- `evidence/EXP-098/t6-01-webclient-gate-before-open.png`
- `evidence/EXP-098/t6-02-runtime-fx-orderschart-opened-no-f4.png`
- `evidence/EXP-098/t6-03-runtime-chart-region-detail.png` (device-scale capture; the same view at higher resolution)
- `evidence/EXP-098/t6-04-after-runtime-close-clean-state.png`

The browser tool also writes snapshot and console logs under `evidence/playwright/` (for example `console-2026-10-15T10-21-56-509Z.log`); these were not authored by the worker. The console was not inspected (out of scope).

### Decisive evidence (T6)

- `t6-02`: runtime FX_OrdersChart Form with the chart drawn (bars 90 and ~6.99 on a 0–100 axis; X labels 1 and 2; no legend or title; no grid visible; status `(Object 1 of 2)`). Supports AC-5 (opened once, no F4, observed).
- `t6-03`: the same view at device scale (detail of labels and bar heights). Supports the label readings; the exact text "90"/"6.99" is from the accessibility tree, not the image alone.
- `t6-04`: after the single close, Explorer with no Form open and no prompt. Supports AC-5 (closed clean).
- Limitations: a same-session observation of a browser render. No value was changed. The chart type name is not shown in the runtime. The "90" label does not show two decimals. Grid absence is from the accessibility tree and the image. The runtime data equals the Designer-time expectations only as far as the labels show; the source rows were not inspected.

### Knowledge state (T6)

- Observed: the runtime FX_OrdersChart renders a column-style chart with X labels 1 and 2, Y ticks 0–100, value labels 90 and 6.99; no legend or title visible; no grid visible; no message; Form closed cleanly on one close.
- Observed (difference from the brief's expectation): the value label reads "90" rather than "90.00".
- Unresolved: the chart type name; whether the grid is hidden in the runtime layout or merely absent from the accessibility tree; the underlying row values; cross-session persistence (not claimed).
- Candidate procedure: none. Replay: none.

### Final state (T6 boundary)

- Web Client: Mongoose Explorer; no runtime Form open; no dialog or prompt. Tab 1 (Web Client) is the selected tab.
- Designer (tab 0): unchanged from T5 (FX_OrdersChart, clean, Save and Undo disabled).

### Next permitted task (not performed)

The documentation-only reconciliation and final acceptance audit (AC-1 to AC-6) for EXP-098, using the recorded evidence; no further Designer or runtime action.

## T7: final acceptance and compliance audit (documentation only)

- Zero browser calls and zero Mongoose changes in T7. Tools used: Read, Glob, Grep, Write, Edit.
- Full audit: `evidence/EXP-098/T7-final-acceptance-audit.md` (AC-1 to AC-6 evidence table, browser-call reconciliation, cumulative counts, file inventory, deviation dispositions, final state).
- Reconciliation: worker totals match the controller audits for every task: T1 22, T2 57, T3 65, T4 12, T5 43, T6 16; cumulative 215 (77 actions, 138 reads).
- Counts: Toolbox placements 1; canvas placement clicks 1; property corrections 0; Enter commits 8; key presses 18; Binding dialog opens 2 (OK 1, Cancel 1); Designer Saves 1; close/reopen pairs 1; runtime opens 1 and closes 1; prompts 0; Yes answers 0; re-logins 0; FX_Orders opened 0.
- Deviations requiring operator disposition (Review): D2 (T1 failed Read of the record, non-browser), D5 (T2 parallel keys "1" and "4"), D6 (T2 targeted snapshot), D11 (T3 find-derived refs for X-axis and Hidden True options), D17 (T5 find-derived Cancel ref), D21 (T3 failed Edit payload with a draft tally that disagrees with the controller count). Confirmation needed for D8 (T2 temporary default overlap) and D9 (T2 sibling placement).
- Recommendation: ACCEPTED AS OBSERVED, conditional on the operator's disposition of the Review items. Observed only; not replay_verified; no cross-session or database-level durability claimed.
- Remaining: the coordinator's formal completion decision. No further browser task is proposed for EXP-098.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 6 is complete: **FX_OrdersChart now opens straight to a column chart of Order Total by Order Number (1 = 90, 2 = 6.99), with the grid hidden.** The operator decided acceptance, amended the grid geometry, and waived the deviations below for EXP-098 only.

- Changed, for later cleanup (Form `FX_OrdersChart`, User scope), with one Designer Save ("Form [FX_OrdersChart] and global object(s) were saved."):
  - **FormCollectionGrid**: Layout Size `69; 21` -> `69; 6` and Location `0; 0` -> `14; 0` (operator amendment: the grid filled the 69 x 21 Form, so the brief's move formula gave Top -1 and T1 stopped); Behavior > Hidden = True.
  - **FX_OrderTotalChart** (Chart, one Toolbox placement; generated `chart1_USER`, default Size `31.25; 14.71`, Location `6.61; 17.75`): Location `1; 0`, Size `69; 12`; Pane (00) sibling of the grid (Container blank). Binding Type Chart; Binding `V(cds_FX_OrderTotalChart)`; Specify Chart Settings: Single Series Charts, Column2D, Bind Chart To Entire Collection, Chart Data `FX_DerOrderTotal` (caption auto-filled `sFX_DerOr...`), Property for X-Axis Labels `FX_OrderNumber`; everything else default.
- **Run R-20261015-162105-lEIr** (7 worker tasks): T1 gate (blocked on the formula); T2 grid resize and move, chart placement, rename, layout; T3 binding and Hidden; T4 Save; T5 close/reopen readback with one read-only Binding dialog open (Cancel); T6 runtime; T7 documentation-only audit. Paused five times for operator rulings; no session expiry.
- Screenshots viewed by the operator assistant: `t2-19` (chart and grid layout, Components grid showing the chart beside the grid); `t5-08` (Binding dialog after reopen: Column2D, FX_OrderNumber, FX_DerOrderTotal); `t6-02` (runtime column chart, bars 90 and 6.99, labels 1 and 2, no grid).
- Findings (observed):
  1. **Chart binding:** Binding Type Chart (far down a long list) then the Binding `...` button opens "Specify Chart Settings" (tabs Data, Trend Lines, General, Cosmetics I/II, Legend, Other, Chart XML). Default chart: Single Series Charts / Column2D, bound to the entire collection. After OK the Binding reads `V(cds_<ChartName>)`.
  2. **Layout by property entry works** for both the grid and a new chart (Size and Location in Char units), so no drag was needed; the Toolbox drop's default geometry overlapped the grid until corrected.
  3. Hidden = True still draws the grid at design time; at runtime the grid is absent.
  4. **Runtime:** opened from the Form menu recent-forms entry; Initial Command Refresh loaded both rows; value labels read `90` and `6.99` (no trailing zeros), Y axis 0-100, no legend or caption. Closed with no prompt.
  5. The Designer URL loses `&MGForm=` after the Binding dialog OK; the Form identity is unchanged.
- Counts: Toolbox placements 1; Binding dialog opens 2 (OK 1, read-only Cancel 1); Designer Saves 1; close/reopen pairs 1 (no prompt); runtime opens 1, closes 1, F4 0; Yes answers 0; removals 0; unloads 0; checkout actions 0; re-logins 0; browser calls 215 (controller-reconciled).
- Operator rulings (EXP-098 only): grid Size Height 21 -> 6 authorized as a brief amendment; AGENTS.md not reopened in T1 waived; chart overlap and sibling placement accepted (the stop condition means containment); D5 parallel key presses waived; T3 denial (out-of-repo tool-results read) and failed self-edit approved; D2, D6, D11, D17, D21 waived (read errors, snapshot fallbacks, refs from fresh read-only finds, superseded draft counts).
- The task-boundary rule worked: no worker went past its task instruction in this run.
- Limits: same-session UI evidence only; runtime chart values from the rendered image and accessibility tree; `Console: 2 errors` headers not inspected.
- Confinement (git status): only `evidence/EXP-098/` and this record were written by the run.
- Next: Part 6 section 7 (import three pictures into the image library; the untracked `assets/` dumbbell, eggs and guitar images are the likely inputs; ask before using them) and section 8 (theme).
