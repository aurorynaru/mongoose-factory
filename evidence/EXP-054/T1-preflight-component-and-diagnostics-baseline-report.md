# EXP-054 — T1 read-only preflight, component baseline, and Diagnostics baseline

Run `R-20261011-141742-hPB0`, experiment EXP-054, cycle 0, task T1.
Worker session `b76e9367-15ac-4098-9ead-d6800dc663e9`, task_message_id `3c66aa5b-2bf8-427c-9006-7b538991b6fb`.
Date 2026-10-11. Mode: LEARNING MODE. Editing scope: User. Target Form `FX_Items` (User version).

**T1 was strictly read-only.** No Button was added, no property was edited, no Save, no Designer close/reopen, no FX_Items runtime close/open, no Diagnostic Log clear, no Diagnostics option change (Close Window used, no OK), no business-record change.
Only view-state actions were taken: the Details panel was expanded, the Components tab was selected, the Components grid was expanded, and component rows and property groups were selected to read their values.

---

## Part A — Preflight (AC-1)

### A1. Identities and tabs

| Item | Observed (visible) |
| --- | --- |
| Tab 0 — Designer | Title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`; URL `WSWebClient/designer/default.aspx?MGForm=FX_Items`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |
| Tab 1 — Web Client | Portal tab `Mongoose` (portal URL, `favoriteContext=FX_Items`); Mongoose iframe active; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; DEM badge |
| Authentication challenge | None. No sign-in or configuration screen. |
| Portal notification banner | None visible in tab 1 snapshot; no dismissal was needed. |
| Browser-native dialog / unsaved prompt | None observed in either tab. |

### A2. Designer FX_Items Form state (tab 0)

| Check | Observed |
| --- | --- |
| Form heading | `FX_Items` (tab selected, closable control present) |
| Save / Regenerate / Undo / Redo | Save disabled, Regenerate disabled, Undo and Redo disabled (clean) |
| Form properties (Form tab) | Name `FX_Items`; Description blank; Caption blank; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; **Initial Command `Refresh`**; Script Language `Visual Basic`; Close Box `True`; Minimize/Maximize `True`; Filter Form blank; Enable Advanced Filter `False`; Help Context ID `-1`; Splitter `Vertical`; Splitter Position `11`; Pane 0 Scroll Bars `Never`; Pane 1 Scroll Bars `As Needed`; Size `69; 21`; Foreground Color `#000000`; Theme Class blank; Icon blank; Synchronize FlexLayout attributes `True` |
| Dialogs | None |
| Details panel | Collapsed at preflight; expanded by T1 (view-only) |

Evidence: `evidence/EXP-054/t1-01-designer-preflight-FX_Items-form-properties.png` (viewed). It shows the FX_Items heading, the four-label canvas, the greyed Save, Initial Command `Refresh`, and the User status bar. It does not show the component tree; that is in A-B below.

### A3. Web Client runtime state (tab 1)

| Check | Observed |
| --- | --- |
| Runtime tab | `FX_Items` open, selected, close control `Close Panel FX_Items`; inherited from EXP-053 and not closed in T1 |
| Records | Three rows (dumbbell, eggs, guitar). Displayed first record: Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA` |
| Save | Disabled. Get More Rows disabled |
| Dialog | None after the T1 preference dialog was closed |
| DevTools (Diagnostic Log) | Panel open, Log Messages tab selected, **not cleared**. Contents are inherited (see Part C4) |

Evidence: `evidence/EXP-054/t1-07-webclient-runtime-FX_Items-preflight-after-preferences-closed.png` (viewed). It shows the three-row runtime FX_Items with first-record values, Save greyed, and the identity bar. It does not show the record count label (the status line is not visible in this frame).

### A4. Gate result

AC-1 gate passed. Authenticated DEM Web Client, User-scoped FX_Items Designer, Initial Command `Refresh`, a clean Designer (Save disabled), a clean runtime (Save disabled, no prompt), and no authentication challenge.

### A5. Procedure review (before any browser interaction)

Read: `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt3.md` section 5 (04:23–05:00, lines 185–195) and section 4 (lines 168–183); `experiments/EXP-053-...md` (final baseline, T1–T6, operator outcome); `recipes/components/add-component-from-toolbox.md`; `recipes/components/configure-basic-component.md`; `experiments/EXP-036-...md` (T8–T11 Button placement, Caption, Save, close/reopen); `experiments/EXP-027-...md` (Name edit, Save Template, close/reopen).

Lessons carried into the later Button task (not executed in T1):
- Toolbox row `Button` arms the drop; a coordinate click on the canvas is needed (EXP-036 T8/T9). Use `mcp__playwright__browser_mouse_click_xy`. The new component will show Type `PushButton` in the grid and `Button` in the Properties header (EXP-036 AC-4 note).
- Caption: a double-click on the **left portion** of the value text area opens an editable combobox; the **dropdown arrow** at the right opens the string-resource list (EXP-036 T9 mis-hit; T10 corrected). Enter a literal `FX_Refresh` and commit; do not select a resource key.
- EXP-027 and EXP-036 both noted an Ext checkbox/display-span interception. Do not repeat a failing click beyond the allowance.
- Save: one ordinary toolbar Save; check `SaveChanges` network `Success: true`.

---

## Part B — Pre-change Designer component inventory (AC-2)

Source: Details > Components grid, expanded (view only). Snapshot: `evidence/playwright/page-2026-10-11T06-18-43-276Z.yml` (tool-generated). Per-component Caption source: the Component property grid after each row selection (snapshots `evidence/playwright/page-2026-10-11T06-19-04-189Z.yml` … `06-21-27-687Z.yml`, tool-generated).

### B1. Components grid rows (verbatim column values)

Columns: Name | Type | Data Source | Pane | Container | Tab | Event to generate.

| Row | Name | Type | Data Source | Pane | Container | Tab | Event to generate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| root | Pane (00) | (container) | | | | | |
| 1 | FormCollectionGrid | Grid | objects | 0 | | 0 | (blank) |
| 2 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | (blank) |
| 3 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | (blank) |
| 4 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | (blank) |
| 5 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | (blank) |
| root | Pane (01) | (container) | | | | | |
| 6 | FX_ItemStatic | Static | (blank) | 1 | | 5 | (blank) |
| 7 | FX_ItemEdit | Edit | object.FX_Item | 1 | | 6 | (blank) |
| 8 | FX_DescriptionStatic | Static | (blank) | 1 | | 7 | (blank) |
| 9 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | | 8 | (blank) |
| 10 | FX_CostStatic | Static | (blank) | 1 | | 9 | (blank) |
| 11 | FX_CostEdit | Edit | object.FX_Cost | 1 | | 10 | (blank) |
| 12 | FX_UMStatic | Static | (blank) | 1 | | 11 | (blank) |
| 13 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | | 12 | (blank) |

Total: 13 component rows plus two container roots (Pane (00), Pane (01)). Tabs 0–12 are contiguous.

Ambiguity: the grid shows `objects` in the Data Source cell of `FormCollectionGrid`, while the Component property grid's Data Source value cell for the same row is empty in the accessibility tree. Not resolved in T1.

### B2. Caption and model type per component (Component property grid)

| Name | Property-grid Type | Model class (header) | Caption (verbatim, as displayed) |
| --- | --- | --- | --- |
| FormCollectionGrid | Grid | Grid | (blank) |
| FX_ItemGridCol | GridColumn | GridColumn | `FX_sItem` |
| FX_DescriptionGridCol | GridColumn | GridColumn | `FX_sDescription` |
| FX_CostGridCol | GridColumn | GridColumn | `FX_sCost` |
| FX_UMGridCol | GridColumn | GridColumn | `FX_sUM` |
| FX_ItemStatic | Static | Static | `FX_sItem` |
| FX_ItemEdit | Edit | Edit | `C(FX_ItemStatic)` |
| FX_DescriptionStatic | Static | Static | `FX_sDescription` |
| FX_DescriptionEdit | Edit | Edit | `C(FX_DescriptionStatic)` |
| FX_CostStatic | Static | Static | `FX_sCost` |
| FX_CostEdit | Edit | Edit | `C(FX_CostStatic)` |
| FX_UMStatic | Static | Static | `FX_sUM` |
| FX_UMCombobox | ComboBox | EnhancedCombo | `C(FX_UMStatic)` |

Notes:
- The `FX_s…` captions are string-resource identifiers as displayed. The canvas renders the Static labels as `Item:`, `Description:`, `Cost:`, `Unit of Measure:` (recipe note: label captions get a trailing colon). Whether the stored value is a key or a literal is not distinguishable from the display (EXP-036 limitation).
- The Edit and ComboBox captions read `C(<paired Static name>)`. Their meaning is not established by T1.
- Events: the Component `Events` group did not expand on a single row click (T1 clicked it once on `FX_ItemEdit`; it showed no child rows and no value). The Components grid's `Event to generate` column is blank for all 13 rows. No existing component has a visible event assignment. **Events expansion for the Button will need a separate check in T2.**

### B3. Duplicate and absence checks

- `FX_RefreshButton`: **absent.** No component row, no Name matching `RefreshButton` or `PushButton` in the Components tree (grep of `page-2026-10-11T06-21-27-687Z.yml`: only Toolbox items `Button`, `HyperLinkButton`, `RadioButton`, `ToolbarButton` match).
- Toolbox row `Button` present at snapshot ref `e91` (Framework Components).

### B4. Layout baseline and permitted placement area (no placement in T1)

Evidence: `evidence/EXP-054/t1-02-components-grid-and-layout-baseline-before-any-change.png` (viewed). The screenshot shows the Components grid with its columns and the four GridColumn rows, the canvas, and the Form border.

Visible geometry (viewport CSS px, approximate, from the screenshot at this window size):
- Form canvas frame (red border): x ≈ 259–811, y ≈ 100–480.
- Pane (00) grid (`Item` column): x ≈ 259–345.
- Pane (01) controls: Static labels x ≈ 380–543; Edit / ComboBox boxes x ≈ 548–810.
  - Item row y ≈ 118–155; Description y ≈ 158–195; Cost y ≈ 200–236; Unit of Measure y ≈ 241–280.
- **Free area inside the Form border, below Unit of Measure:** x ≈ 360–800, y ≈ 290–470. A default-size Button (114×34 per EXP-036) placed with its top-left near (400, 320) would occupy about (400–514, 320–354), without touching existing components. Proposed for the T2 placement (to be verified by screenshot before Save).

---

## Part C — Diagnostics baseline, 32 options (AC-7 pre-change evidence)

Opened once via View > User Preferences... (portal URL changed to `favoriteContext=UserPreferences` while open, and returned to `favoriteContext=FX_Items` on close). Category `Diagnostics`. Read on all four tabs. No checkbox was clicked; dialog closed with `Close Window` (no OK).

Accessibility `[checked]` attribute is the value source. Refs are snapshot-time and not stable.

### C1. Full 32-option table

| # | Tab | Group (screenshot-mapped) | Option | Original (visible) | a11y ref (snapshot) |
| --- | --- | --- | --- | --- | --- |
| 1 | General | — | **Enabled** | **OFF** | f1e891 |
| 2 | General | — | System Information | OFF | f1e896 |
| 3 | General | — | Security | OFF | f1e901 |
| 4 | Form | top level | Initialization | OFF | f1e922 |
| 5 | Form | top level | **Events** | **ON** | f1e927 |
| 6 | Form | Call Details | Scripts | OFF | f1e932 |
| 7 | Form | Call Details | IDO Methods | OFF | f1e937 |
| 8 | Form | Call Details | Form Server | OFF | f1e942 |
| 9 | Form | Component | Initialization | OFF | f1e947 |
| 10 | Form | Component | To/From Source | OFF | f1e952 |
| 11 | Form | Component | List Building | OFF | f1e957 |
| 12 | Form | Component | To/From Control | OFF | f1e962 |
| 13 | Form | Component | User Interaction | OFF | f1e967 |
| 14 | Form | Component | Dependent Notification | OFF | f1e972 |
| 15 | Form | Event Handler | **Include** | **ON** | f1e977 |
| 16 | Form | Validator | Include | OFF | f1e982 |
| 17 | Form | Variable | Initialization | OFF | f1e987 |
| 18 | Form | Variable | **Value Changed** | **ON** | f1e992 |
| 19 | Form | Variable | Dependent Notification | OFF | f1e997 |
| 20 | IDO Collections | — | Initialization | OFF | f1e1003 |
| 21 | IDO Collections | — | Commands | OFF | f1e1008 |
| 22 | IDO Collections | — | Update Overview | OFF | f1e1013 |
| 23 | IDO Collections | — | Load Overview | OFF | f1e1018 |
| 24 | IDO Collections | — | Update Values | OFF | f1e1023 |
| 25 | IDO Collections | — | Load Values | OFF | f1e1028 |
| 26 | IDO Collections | — | Dependent Notification | OFF | f1e1033 |
| 27 | Others | Interpreter | Overview | OFF | f1e1042 |
| 28 | Others | Interpreter | Scripts | OFF | f1e1047 |
| 29 | Others | Interpreter | Components | OFF | f1e1052 |
| 30 | Others | Interpreter | Variables | OFF | f1e1057 |
| 31 | Others | Interpreter | Properties | OFF | f1e1062 |
| 32 | Others | Interpreter | Others | OFF | f1e1067 |

Count check: General 3 + Form 16 + IDO Collections 7 + Others 6 = **32**. ON = 3 (Form > Events, Form > Event Handler > Include, Form > Variable > Value Changed). Enabled OFF. This matches the EXP-053 final restored state and the expected baseline "Enabled OFF; Events ON; Event Handler Include ON; Value Changed ON".

Note on the Form group mapping: the two `Include` and three `Initialization` / two `Dependent Notification` checkboxes share names. Mapping uses the screenshot's group headings (Call Details / Component / Event Handler / Validator / Variable), cross-checked against the accessibility order and the total count of 16 for the Form tab.

### C2. Evidence (screenshots and accessibility)

| File | Shows | Does not show |
| --- | --- | --- |
| `evidence/EXP-054/t1-03-diagnostics-baseline-General-tab-before-any-change.png` | General tab: Enabled, System Information, Security unchecked; DEM identity; inherited log behind | Other tabs |
| `evidence/EXP-054/t1-04-diagnostics-baseline-Form-tab-before-any-change.png` | Form tab with group headings: Events ON, Event Handler Include ON, Value Changed ON, all other Form boxes OFF | IDO and Others |
| `evidence/EXP-054/t1-05-diagnostics-baseline-IDO-Collections-tab-before-any-change.png` | IDO Collections: seven boxes unchecked | Others |
| `evidence/EXP-054/t1-06-diagnostics-baseline-Others-tab-before-any-change.png` | Others (Interpreter): six boxes unchecked | Other tabs |
| Accessibility snapshots (tool-generated): `evidence/playwright/page-2026-10-11T06-22-23-281Z.yml` (General), `06-22-52-721Z.yml` (Form), `06-23-22-431Z.yml` (IDO), `06-23-38-708Z.yml` (Others) | Checked attributes and refs for each option | Visual grouping (covered by screenshots) |

### C3. Close

`Close Window` (dialog X) once; no OK; no option clicked. Post-close snapshot `evidence/playwright/page-2026-10-11T06-23-55-929Z.yml`: no dialog; Save disabled; `Get More Rows` disabled; FX_Items tab selected. No restore was needed because nothing was changed.

### C4. Diagnostic Log — inherited content (not EXP-054 evidence)

The Log Messages grid (DevTools panel, Web Client tab) was **not cleared** in T1. It contains **36 rows** before the controlled test:

- **20 rows** `FormEvent (FX_Items): …` at `05:22:07.945` (9 rows) and `05:22:07.976` (11 rows). Names in order: StdFormPredisplay (start, result), StdFormInitCompleted (start, result), StdFormRefresh (start), StdFormGetBoundValues (start, result), StdObjectRefresh (start, result), StdObjectSelectCurrentCompleted (start, result), StdObjectRefreshCompleted (start, result), StdFormLoadBoundValues (start), StdFormLoadDerivedValues (start, result), StdFormLoadBoundValues (result), StdFormRefreshCompleted (start, result), StdFormRefresh (result). Each result row reads `num handlers for event 0`. This is the EXP-053 T4 sequence (same names, order, and timestamps).
- **16 rows** `VarValue (StdCurFormPage / StdLastFormPage): …` at `05:25:20.269`–`05:25:20.285`. These match the EXP-053 T5 note (preference-navigation rows during the EXP-053 restoration).

T1 opened and closed User Preferences and produced **no new** log rows (total stayed 36 at the post-close snapshot; 16 at 05:25:20 and 20 at 05:22:07 both before and after). Observed only. One consistent reading is that preference navigation logs only while Enabled is ON (EXP-053 T5 recorded rows while Enabled was ON; this T1 open happened while Enabled is OFF). This is a single correlation, not a proven cause.

Attribution: none of the 36 rows belongs to EXP-054. They must not be counted as Button-activation evidence. They will be removed by the single authorized clear in the controlled test.

---

## Part D — Deviations, errors, and ambiguities

1. **Screenshot timeout (one).** The first `browser_take_screenshot` (`t1-01`) timed out at "waiting for fonts" (TimeoutError 5000 ms). Recovery: one tab selection (index 0, navigation only), then the same screenshot succeeded. No state change. Counted as a browser error.
2. **Events group did not expand** on a single click (`FX_ItemEdit`). The property was selected (description pane shows `Events`); no value rendered. Deferred to T2.
3. **FormCollectionGrid Data Source** ambiguity (grid `objects` vs property-grid blank).
4. **Edit / ComboBox Captions** show `C(<paired Static>)`. Meaning not established.
5. **Selection state changed (view only).** The Designer Properties panel is on the Component tab with `FX_UMGridCol` selected. Save remains disabled. The Details panel is expanded and the Components grid is expanded. These are view states; they are not Form edits.
6. **Log contents inherited.** The Diagnostic Log holds 36 rows from EXP-053. Not cleared (T1 forbids clear).
7. **Web Client URL** changed to `favoriteContext=UserPreferences` while the dialog was open and back to `favoriteContext=FX_Items` on close. Observed only.
8. No ref-not-found errors. No recovery snapshot or corrected inspection was used. Recovery allowance: unused.

---

## Part E — Counts (T1 browser calls)

| Type | Count | Notes |
| --- | --- | --- |
| Tab list / select | 3 | list 1; select index 0 (after screenshot timeout) 1; select index 1 (Web Client) 1 |
| Untargeted snapshots | 2 | at start and after the tab select to the Web Client |
| Clicks (view or selection) | 24 | Expand Panel 1; Components tab 1; grid Expand 1; component and column row selections 13 (8 components + FormCollectionGrid + 4 GridColumns); Events group row 1; View 1; User Preferences… 1; Diagnostics category 1; Form / IDO / Others tabs 3; Close Window 1 (11 + 13 = 24) |
| Finds | 4 | "Components"; regex on Caption (no useful result); "User Preferences"; "Diagnostics" |
| Screenshots | 8 attempts, 7 saved | 1 timeout (recovered); t1-01 to t1-07 saved |
| Mutations | 0 | No Button, property, Save, preference, Designer close/reopen, runtime open/close, log clear, record change |
| Prompts accepted | 0 | |
| Browser evaluate / run-code | 0 | |
| Authentication actions | 0 | |

Per-click order: Expand Panel; Components tab; grid Expand; FX_ItemStatic; FX_ItemEdit; Events; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; View; User Preferences…; Diagnostics category; Form tab; IDO Collections tab; Others tab; Close Window.

---

## Part F — Evidence files written by the worker

- `evidence/EXP-054/T1-preflight-component-and-diagnostics-baseline-report.md` (this report)
- `evidence/EXP-054/t1-01-designer-preflight-FX_Items-form-properties.png`
- `evidence/EXP-054/t1-02-components-grid-and-layout-baseline-before-any-change.png`
- `evidence/EXP-054/t1-03-diagnostics-baseline-General-tab-before-any-change.png`
- `evidence/EXP-054/t1-04-diagnostics-baseline-Form-tab-before-any-change.png`
- `evidence/EXP-054/t1-05-diagnostics-baseline-IDO-Collections-tab-before-any-change.png`
- `evidence/EXP-054/t1-06-diagnostics-baseline-Others-tab-before-any-change.png`
- `evidence/EXP-054/t1-07-webclient-runtime-FX_Items-preflight-after-preferences-closed.png`
- `experiments/EXP-054-hello-world-part-3-section-5-fx-items-native-refre.md` (initialized)

Tool-generated (not worker-authored, gitignored `evidence/playwright/`): the accessibility snapshots, console log, and page files listed in C2 and B1–B2 above.
