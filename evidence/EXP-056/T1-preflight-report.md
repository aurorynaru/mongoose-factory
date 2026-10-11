# EXP-056 T1 — read-only preflight and pre-mutation baseline (FX_Items, User scope)

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 0, task T1.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `d413f37b-4d23-4548-9198-055cbc5f27d5`.
Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User (`anton.ramos@3mworks.com.ph`).

**Mutations performed in T1: none.** No editing dialog opened, no Set Values, no variable created, no Edit placed, no Designer Save, no close/reopen, no FX_RefreshButton activation, no runtime open/close, no typing, no Diagnostics or User Preferences change. Clicks were limited to tabs, Expand controls, Components/Variables/Event Handlers tabs, and row selection.

## 1. Gate and identity (AC-1)

| Item | Observed | Evidence |
| --- | --- | --- |
| Browser tabs (listed before first select) | Tab 0 Designer `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`, `designer/default.aspx`; Tab 1 Web Client `Mongoose` (`favoriteContext=FX_Items`) | list result in run log |
| Designer Form identity | Form tab and heading `FX_Items`; Form Name `FX_Items` | `t1-02-designer-event-handlers-baseline-one-handler.png`; `t1-snapshot-02-fresh-after-tab0-select.md` |
| Designer scope | Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Version `User version for user anton.ramos@3mworks.com.ph` | `t1-02` (footer); `t1-snapshot-00-fresh-designer-tab0.md` lines 565–570, 786 |
| Designer clean state | Save, Regenerate Form, Undo, Redo all disabled | `t1-snapshot-00` lines 10–13 and 52–55; `t1-02` (greyed Save icon) |
| Initial Command | `Refresh` | `t1-02` (Properties, Behavior); `t1-snapshot-00` lines 642–645 |
| Other Form properties | Device Type Default; Form Type Normal; Is Master True; Script Language Visual Basic; Close Box True; Minimize/Maximize True; Enable Advanced Filter False; Help Context ID -1; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Unit Char; Size `69; 21`; Synchronize FlexLayout True | `t1-snapshot-00` Form tree |
| Single StdFormRefreshCompleted handler | One group `StdFormRefreshCompleted`; one row: sequence `0`, Response Type `Prompt`, Disabled `false`, Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` | `t1-02` (Event Handlers, row 0); `playwright/page-2026-10-11T08-32-17-288Z.yml` lines 293–299 |
| Runtime tab | Web Client tab shows inherited FX_Items runtime; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tab `Close Panel FX_Items`; no dialog; no notification banner; Save disabled | `t1-04-runtime-fx-items-inherited-preflight-records-save-disabled.png`; `t1-snapshot-04-runtime-web-client-tab1-preflight.md` |
| Runtime records (current) | dumbbell / `45 pound iron` / `45.00` / `EA`; eggs / `cage free` / `6.99` / `DZ`; guitar / `natural acoustic` / `129.99` / `EA` | `t1-04` (Item column and detail pane for dumbbell); `t1-snapshot-04` lines 151–168 |
| Runtime object indicator | `FX_Refresh (Object 1 of 3)` (pre-existing; not changed by T1) | `t1-04` status bar; `t1-snapshot-04` line 477 |
| FX_Refresh rendered | Yes (`button "FX_Refresh"`) | `t1-04`; `t1-snapshot-04` line 170 |

Result: AC-1 prerequisites are met. The Designer and Web Client are usable, the scope is User, the Designer is clean, Initial Command is Refresh, the single sequence-0 Hello World Prompt exists, and the three records are present.

## 2. Form Variables collection (AC-2, AC-4 pre-state)

- Tab: Details > Variables (view). Groups after Expand (view-only):
  - `Form - Persistent` (1 row): `InitialCommand`. Its origin and property values were not read (not needed for the preflight; recorded as observed only).
  - `Global - Persistent`: rows rendered (for example `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_*`, `lse_*`); the rendered list contains no `FX_` name.
  - `Global - Temporary`: group header present.
- **FX_VarTest: absent** from the rendered Variables list (no `FX_VarTest` in the Form category; no `FX_` name in any rendered group). Evidence: `t1-05-designer-variables-tab-baseline-no-FX_VarTest.png`; `playwright/page-2026-10-11T08-32-03-103Z.yml` (lines 286–294) and `playwright/page-2026-10-11T08-35-28-352Z.yml`; `t1-snapshot-03-variables-tab-baseline.md` lines 275–319.
- Limit: the Global groups are a virtualized grid; the absence of FX_VarTest in them rests on the rendered rows only. The Form category is short and was fully rendered.

## 3. Event Handlers baseline (AC-2, AC-3 pre-state)

- One group `StdFormRefreshCompleted`, one row (sequence 0, Prompt, Disabled false, summary as in section 1). No second row. No sequence-1 action exists. No other handler exists.
- The row was not opened in T1 (the summary is the committed value). The Parameters dialog was not opened, to avoid an editing dialog during preflight.
- Evidence: `t1-02-designer-event-handlers-baseline-one-handler.png`; `playwright/page-2026-10-11T08-32-17-288Z.yml` lines 275–334.

## 4. Component inventory: 16 rows (AC-2)

Source: Details > Components, all rows expanded. Each row was selected and the Properties > Component tab read. The Component tab stays selected when a non-Pane row is selected. Selecting a Pane row switches the panel to the Form tab; the Component tab was then clicked. Binding Type/Binding/Location/Size/Events are the native property-grid values as rendered. "blank" means the value cell rendered no text (no event assigned). Values are as displayed; none were inferred.

| # | Name | Type | Caption | Binding Type | Binding | Components-grid Data Source | Pane | Container | Tab | Location | Size | Primary | Data Change | Lose Focus | Gain Focus | Drag From | Drop On | Component-panel snapshot (playwright/...) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | (container) | n/a | component panel empty (no rows rendered) | n/a | blank | 0 | blank | blank | unavailable | unavailable | unavailable | unavailable | unavailable | unavailable | unavailable | unavailable | 08-33-08-657Z (Form-tab row 08-32-57-862Z) |
| 2 | FormCollectionGrid | Grid | blank | Primary Collection Grid | objects | objects | 0 | blank | 0 | 0; 0 | 11; 21 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-32-40-282Z |
| 3 | FX_ItemGridCol | GridColumn | FX_sItem | Property | object.FX_Item | object.FX_Item | 0 | FormCollectionGrid | 1 | 0; 0 | 10; 0 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-33-16-373Z |
| 4 | FX_DescriptionGridCol | GridColumn | FX_sDescription | Property | object.FX_Description | object.FX_Description | 0 | FormCollectionGrid | 2 | 0; 0 | 10; 0 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-33-35-608Z |
| 5 | FX_CostGridCol | GridColumn | FX_sCost | Property | object.FX_Cost | object.FX_Cost | 0 | FormCollectionGrid | 3 | 0; 0 | 10; 0 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-33-40-667Z |
| 6 | FX_UMGridCol | GridColumn | FX_sUM | Property | object.FX_UM | object.FX_UM | 0 | FormCollectionGrid | 4 | 0; 0 | 10; 0 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-33-45-438Z |
| 7 | Pane (01) | (container) | n/a | component panel empty (no rows rendered) | n/a | blank | 1 | blank | blank | unavailable | unavailable | unavailable | unavailable | unavailable | unavailable | unavailable | unavailable | 08-33-55-264Z (Form-tab row 08-33-50-015Z) |
| 8 | FX_ItemStatic | Static | FX_sItem | None | blank | blank | 1 | blank | 5 | 1; 3 | 20; 1 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-33-59-841Z |
| 9 | FX_ItemEdit | Edit | C(FX_ItemStatic) | Property | object.FX_Item | object.FX_Item | 1 | blank | 6 | 1; 23.75 | 37.05; 2 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-05-213Z |
| 10 | FX_DescriptionStatic | Static | FX_sDescription | None | blank | blank | 1 | blank | 7 | 3.25; 3 | 20; 1 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-10-690Z |
| 11 | FX_DescriptionEdit | Edit | C(FX_DescriptionStatic) | Property | object.FX_Description | object.FX_Description | 1 | blank | 8 | 3.25; 23.75 | 37.05; 2 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-15-537Z |
| 12 | FX_CostStatic | Static | FX_sCost | None | blank | blank | 1 | blank | 9 | 5.5; 3 | 20; 1 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-20-447Z |
| 13 | FX_CostEdit | Edit | C(FX_CostStatic) | Property | object.FX_Cost | object.FX_Cost | 1 | blank | 10 | 5.5; 23.75 | 37.05; 2 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-25-033Z |
| 14 | FX_UMStatic | Static | FX_sUM | None | blank | blank | 1 | blank | 11 | 7.75; 3 | 20; 1 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-29-848Z |
| 15 | FX_UMCombobox | ComboBox | C(FX_UMStatic) | Property | object.FX_UM | object.FX_UM | 1 | blank | 12 | 7.75; 23.75 | 37.25; 2.15 | blank | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-34-661Z |
| 16 | FX_RefreshButton | PushButton | FX_Refresh | None | blank | blank (Event to generate: StdFormRefresh) | 1 | blank | 0 | 12.1666666666667; 5.25 | 14.25; 1.89 | StdFormRefresh | blank | blank | blank | 0 event(s) | 0 event(s) | 08-34-39-721Z |

Notes on the table:
- The four `GridColumn` rows and the `FormCollectionGrid` have Binding Type/Binding as shown; `FormCollectionGrid` Data Source Binding Type is `Primary Collection Grid` with Binding `objects`.
- The Components-grid "Event to generate" column is blank for every row except FX_RefreshButton (`StdFormRefresh`).
- Pane (00) and Pane (01): the Component property tree rendered no rows, so Binding, Location, Size and Events are **genuinely unavailable** for these two containers. They are recorded as unavailable, not inferred. Their Components-grid row values (name, Pane, Tab) are recorded above. Coordinator decision needed on whether this is an acceptable baseline (see Limits).
- Captions of the 13 non-container originals match EXP-054-R2 T1 Part B1 and EXP-055 T5 / T6 readings. The FX_UMCombobox Gain Focus is blank here, which closes the EXP-055 gap (that value was not read before the EXP-054-R2 save).
- Original Events exposed by the native Component panel: Primary, Data Change, Lose Focus, Gain Focus, Drag From Events, Drop On Events. All blank except FX_RefreshButton Primary `StdFormRefresh`, and all Drag From / Drop On counts are 0.
- Count check: 16 rows (2 containers + FormCollectionGrid + 4 GridColumns + 8 Pane (01) children + FX_RefreshButton). The brief's "16 original components" therefore includes FX_RefreshButton, which EXP-054-R2 created.

## 5. Collision checks (AC-2)

- No component named `FX_VarTestEdit` among the 16 rows (rows enumerated in section 4 and in `t1-snapshot-00-fresh-designer-tab0.md` lines 396–519).
- No variable named `FX_VarTest` in the rendered Variables list (section 2).
- No sequence-1 action (the handler has one row, sequence 0).
- No second StdFormRefreshCompleted group.

## 6. Pre-mutation evidence summary

Decisive screenshots (each described; what it does NOT prove in parentheses):
- `t1-02-designer-event-handlers-baseline-one-handler.png`: Designer FX_Items, Event Handlers tab, one StdFormRefreshCompleted row (sequence 0 Prompt), Form properties incl. Initial Command Refresh, Save icon greyed, User footer. (Does not show the Prompt parameter dialog contents; summary text only.)
- `t1-03-designer-components-inventory-16-rows-fx-refreshbutton-selected.png`: Components grid scrolled to the last rows (FX_DescriptionEdit … FX_RefreshButton) with Data Source, Pane, Tab, Event to generate; FX_RefreshButton selected in Properties (Caption FX_Refresh, Type PushButton); Save greyed; User footer. (Shows only the bottom 8 rows; top rows are in the snapshots.)
- `t1-04-runtime-fx-items-inherited-preflight-records-save-disabled.png`: inherited runtime FX_Items; records dumbbell / eggs / guitar (dumbbell detail: Description 45 pound iron, Cost 45.00, UM EA); FX_Refresh rendered; status `FX_Refresh (Object 1 of 3)`; Save greyed; no dialog. (The DevTools log panel at the bottom was already open with pre-existing EXP-054-R2 rows; not inspected or cleared.)
- `t1-05-designer-variables-tab-baseline-no-FX_VarTest.png`: Variables tab after Expand: `Form - Persistent` holds `InitialCommand` only; `Global - Persistent` rows visible; no FX_VarTest in view. (Global rows are partly scrolled out of view; the full rendered list is in the playwright snapshot.)

Accessibility snapshots (worker-saved under `evidence/EXP-056/`): `t1-snapshot-00-fresh-designer-tab0.md`, `t1-snapshot-01-fresh-after-variables-click-timeout.md`, `t1-snapshot-02-fresh-after-tab0-select.md`, `t1-snapshot-03-variables-tab-baseline.md`, `t1-snapshot-04-runtime-web-client-tab1-preflight.md`, `t1-snapshot-05-designer-fresh-after-tab0-reselect.md`.

Tool-generated snapshots per action (under `evidence/playwright/`, gitignored): cited by file name in sections 1–5.

## 7. Console and tool observations

- Designer console: `TypeError: Cannot read properties of undefined (reading 'adorner')` ×2 at 121401 ms and 173552 ms in `evidence/playwright/console-2026-10-11T08-30-55-273Z.log` lines 1 and 12. The timestamps coincide with the Pane (00) and Pane (01) row selections. Recorded as observed; not investigated further.
- Web Client console: 0 errors, 2 warnings at the runtime snapshot.

## 8. Limits and deviations

1. **Tab-selection deviation.** The first screenshot (two attempts) and first Variables click (two attempts, `e352` then `e353`) were issued on tab 0 before a successful tab-selection call. All four timed out at "visible, enabled and stable" (locator resolved). No state changed. After `browser_tabs select 0` succeeded, the same kind of click worked. The tab list showed tab 0 as "(current)", but the selection call was still required.
2. **Recovery allowance (reconciled in T2).** Total timeouts in T1: **4** (2 screenshot calls; 2 click calls, `e352` and `e353`), all before the first successful tab select. The timeouts were "visible, enabled and stable" timeouts on a resolved locator, not "Ref not found" errors. Recovery actions were: one fresh untargeted snapshot (`t1-snapshot-01`, taken after the timeouts) and one corrected click (`e353`, which also timed out). That exhausts the brief's allowance of one fresh snapshot plus one corrected inspection. The tab select that followed is the tab-selection rule, not a recovery retry, and `t1-snapshot-02` was the snapshot the tab rule requires after a selection. The earlier wording "counted conservatively as two fresh snapshots" is withdrawn: there was one recovery snapshot, and `t1-snapshot-02` is a post-selection snapshot. The successful `e353` click after the select was the first attempt made on the selected tab. Whether the timeouts came from the unselected tab or another cause is not established; the select appeared to resolve them.
3. **Virtualized Variables list.** Absence of FX_VarTest was established from the rendered rows; the Global groups are virtualized, so this is a rendered-state observation.
4. **Pane containers.** Binding, Location, Size and Events are unavailable for Pane (00) and Pane (01) (empty Component panel). This is a genuine baseline gap for those two rows and must be considered by the coordinator before any mutation (EXP-055 lesson: preservation checks must match what T1 captured).
5. **Screenshots.** Two screenshot calls on tab 0 timed out before the tab select; the same screenshot succeeded after the select. No screenshot file exists for the failed calls.
6. **Event blank semantics.** "blank" means no text in the value cell; a picker control was present for each Event row. The native dropdown was not opened.

## 9. Files written in T1

- `evidence/EXP-056/T1-preflight-report.md` (this report)
- `evidence/EXP-056/t1-02-designer-event-handlers-baseline-one-handler.png`
- `evidence/EXP-056/t1-03-designer-components-inventory-16-rows-fx-refreshbutton-selected.png`
- `evidence/EXP-056/t1-04-runtime-fx-items-inherited-preflight-records-save-disabled.png`
- `evidence/EXP-056/t1-05-designer-variables-tab-baseline-no-FX_VarTest.png`
- `evidence/EXP-056/t1-snapshot-00-fresh-designer-tab0.md`
- `evidence/EXP-056/t1-snapshot-01-fresh-after-variables-click-timeout.md`
- `evidence/EXP-056/t1-snapshot-02-fresh-after-tab0-select.md`
- `evidence/EXP-056/t1-snapshot-03-variables-tab-baseline.md`
- `evidence/EXP-056/t1-snapshot-04-runtime-web-client-tab1-preflight.md`
- `evidence/EXP-056/t1-snapshot-05-designer-fresh-after-tab0-reselect.md`
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (created; experiment record)

## 10. Preflight verdict

- AC-1: **supported** (identity, scope, clean Designer and Web Client, Initial Command, single sequence-0 Prompt, three records).
- AC-2: **supported with limits** (16-row inventory with native values; original Variables collection; absence of FX_VarTest, FX_VarTestEdit and a sequence-1 action). Limits: Pane (00)/(01) binding, geometry and events are unavailable; Global Variables rows are virtualized.
- AC-3 to AC-12: not tested (outside T1).
- Mutation: **not performed.** The T1 instruction is read-only and the proposal is not authorized for execution until operator approval. The baseline is sufficient for the coordinator's review; the Pane container gap is the item needing a decision.
