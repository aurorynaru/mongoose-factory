# EXP-056 T6 — FX_VarTestEdit placed, renamed and bound to Variable FX_VarTest; unsaved pre-Save checkpoint (no Save)

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 8, task T6.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `4ef5ddd1-a4c6-4853-a531-da11185964a1`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: one native Edit component is on the Form, named `FX_VarTestEdit`, with Data Source Binding Type = Variable and Binding = `variables.FX_VarTest`. The handler still has two ordered actions (sequence 0 Prompt, sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`). The Designer is dirty and Save is enabled. Not saved. The FX_VarTest Form-variable definition is absent (observed, not created). Stopped at the pre-Save checkpoint.**

## 1. Gate (passed before any mutation)

- `browser_tabs list` (before any select) → tab 0 Designer, tab 1 Web Client. `browser_tabs select 0` succeeded.
- Fresh snapshot `t6-snapshot-00-fresh-designer-pre-placement.md`: FX_Items heading and tab; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save enabled (T5 dirty state).
- Handler gate (`t6-snapshot-01-event-handlers-gate.md`): one `StdFormRefreshCompleted` group; row 0 sequence 0 Prompt, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; row 1 sequence 1 Set Values, `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- Collision gate (`t6-snapshot-02-components-inventory-pre-placement.md`): 16 component rows; no `FX_VarTestEdit`.

## 2. Original-component inventory vs T1 baseline (before placement)

The 16 rows (Components grid) were rechecked after placement (`t6-snapshot-16-components-all-expanded.md`, expanded view). Comparison on the grid columns (Name, Type, Data Source, Pane, Container, Tab, Event to generate):

| Row | Post-placement grid row | T1 baseline | Match |
| --- | --- | --- | --- |
| Pane (00) | container | container | yes |
| FormCollectionGrid | Grid; objects; 0; 0 | Grid; objects; 0; 0 | yes |
| FX_ItemGridCol | GridColumn; object.FX_Item; 0; FormCollectionGrid; 1 | same | yes |
| FX_DescriptionGridCol | GridColumn; object.FX_Description; 0; FormCollectionGrid; 2 | same | yes |
| FX_CostGridCol | GridColumn; object.FX_Cost; 0; FormCollectionGrid; 3 | same | yes |
| FX_UMGridCol | GridColumn; object.FX_UM; 0; FormCollectionGrid; 4 | same | yes |
| Pane (01) | container | container | yes |
| FX_ItemStatic | Static; —; 1; 5 | same | yes |
| FX_ItemEdit | Edit; object.FX_Item; 1; 6 | same | yes |
| FX_DescriptionStatic | Static; —; 1; 7 | same | yes |
| FX_DescriptionEdit | Edit; object.FX_Description; 1; 8 | same | yes |
| FX_CostStatic | Static; —; 1; 9 | same | yes |
| FX_CostEdit | Edit; object.FX_Cost; 1; 10 | same | yes |
| FX_UMStatic | Static; —; 1; 11 | same | yes |
| FX_UMCombobox | ComboBox; object.FX_UM; 1; 12 | same | yes |
| FX_RefreshButton | PushButton; —; 1; 0; StdFormRefresh | same | yes |

Property readback (`t6-snapshot-17-FX_RefreshButton-readback.md`): FX_RefreshButton Name `FX_RefreshButton`; Caption `FX_Refresh`; Type `PushButton`; Binding Type `None`; Primary `StdFormRefresh`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab Order `0`; Drag From / Drop On `0 event(s)`. **Identical to the T1 baseline.**

Limit: full Location, Size, Caption, and all Events were **not re-read for the other 15 original components** after placement. The Components-grid columns match for all 16, and the placement click at canvas (600, 330) was in empty grid space. The brief's full property-level preservation check for those 15 is therefore not complete (see §7).

## 3. Placement and configuration (one each)

| # | Action | Result (observed) |
| --- | --- | --- |
| 1 | Click Toolbox `Edit` (`e142`) | Edit tool armed (highlighted) (`t6-01`) |
| 2 | Click empty canvas at (600, 330), one click | New component placed: `edit1_USER`, Type Edit, Pane 1, Tab 0 (`t6-02`, `t6-snapshot-03`) |
| 3 | Double-click Name value cell (`e2343`) | Inline Name editor opened, value `edit1_USER` (`t6-03`, `t6-snapshot-04`) |
| 4 | Type `FX_VarTestEdit` into the editor (`e3028`), Enter | Name committed: Components grid row `FX_VarTestEdit`; Name cell `FX_VarTestEdit` (`t6-snapshot-05`, `t6-snapshot-12`) |
| 5 | Click Binding Type dropdown arrow (`e2638`) | Options: None, Variable, Property, CollectionID Group Box, Primary Collection Grid (`t6-snapshot-06`) |
| 6 | Click option `Variable` (`e3344`) | Binding Type = **Variable** (`t6-snapshot-07`, `t6-snapshot-12`) |
| 7 | Click Binding ellipsis (`e1115`) | "Edit Variable Binding" dialog: Variable combobox (empty), Initial Value, Clear On Refresh?, Refresh Value (`t6-snapshot-08`) |
| 8 | Click Variable combobox Open (`e3396`) | Dropdown: InitialCommand, AccessAs, ccvw_OutputFormatInlineAll, ccvw_PrinterName, FarmEnableExtensionBundle, FarmEnforcePrefixFromAccessAs, gbgc_bg, gbgc_GradientTest1-3, IncludeBadgeStatusVar, … (`t6-04`, `t6-snapshot-09`). **FX_VarTest not listed** (it would sort between FarmEnforce… and gbgc_bg). |
| 9 | Press Escape (1 key press) | Dropdown collapsed; no selection; dialog still open (`t6-snapshot-10`) |
| 10 | Type `FX_VarTest` into the Variable combobox (`e3395`), **once** — the operator-authorised entry because FX_VarTest is not listed | Field reads `FX_VarTest` (accessibility `combobox [active] [ref=e3395]: FX_VarTest`; screenshot `t6-05`) |
| 11 | Click dialog OK (`e3417`) once | Dialog closed. Properties Binding now `variables.FX_VarTest` (`t6-snapshot-12`) |

No existing variable was selected. InitialCommand was not touched. No component was moved, resized, or renamed other than the new one.

## 4. New FX_VarTestEdit property readback (`t6-snapshot-12`, `t6-06`)

| Property | Observed |
| --- | --- |
| Name (Design) | `FX_VarTestEdit` |
| Caption | blank |
| Type | `Edit` |
| Binding Type | `Variable` |
| Binding | `variables.FX_VarTest` |
| Location | `12.7222222222222; 30.25` |
| Size | `37.05; 2` |
| Tab Order | `0` |
| Pane | `1` (Components grid) |
| Container | blank (Components grid) — direct child of Pane (01) |
| Events: Primary, Data Change, Lose Focus, Gain Focus | blank cells |
| Events: Drag From / Drop On | `0 event(s)` |
| Components grid "Data Source" column | **blank** (see §6) |
| Components grid "Event to generate" | blank |

Hierarchy: the new row is the last row of the Components tree, after FX_RefreshButton. Its Pane value is 1 and its Container cell is blank, the same pattern as the other Pane (01) children. The tree indentation was not separately measured; the parent-child placement under Pane (01) is inferred from the Pane value and the tree position.

Decisive screenshot: `t6-06-FX_VarTestEdit-selected-properties-binding-variable.png` — the Properties panel (Data Source group) shows Binding Type `Variable` and Binding `variables.FX_VarTe…`; the Components grid row `FX_VarTestEdit`, Type Edit, Pane 1, Tab 0 is selected. The Name field itself is scrolled out of view in that frame. The Properties header label in that frame reads `edit1_USER (Edit)`; see §6.

## 5. Handler and form-variable checks (after all T6 actions)

- Handler (`t6-snapshot-19-event-handlers-recheck-two-actions.md`): one `StdFormRefreshCompleted` group; sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`. Unchanged from T5. Save enabled.
- Variables collection (`t6-snapshot-20-variables-definition-observation.md`, observation only): Form category `InitialCommand` only; **FX_VarTest definition absent**. Not recreated. The Global groups were not re-filtered in T6 (the T2 and T5 filter results apply).

## 6. Observations and inconsistencies (recorded, not repaired)

1. **Properties header label stale.** The Properties panel's component selector read `edit1_USER (Edit)` in every snapshot from placement until FX_RefreshButton was selected. The Name cell and the Components grid show `FX_VarTestEdit`. The header still read `edit1_USER (Edit)` after the FX_VarTestEdit row was reselected (`t6-snapshot-14`, `t6-snapshot-15`) and changed only when FX_RefreshButton was selected (`t6-snapshot-17`). Interpretation: the header label did not refresh after the rename. Not established whether the stored component name is FX_VarTestEdit beyond the Name cell and Components grid, which both show it.
2. **Components grid Data Source blank.** FX_VarTestEdit's Data Source column is blank, while the Properties Binding reads `variables.FX_VarTest`. The 13 property-bound originals show `object.FX_*` in the same column. Interpretation: the grid column may not render variable bindings. Not established.
3. **Tab 0 on the new Edit.** The new row has Tab 0, like FX_RefreshButton; the other Pane (01) rows have Tab 5–12. Recorded as observed; not changed.

## 7. Limits

- Full property readback (Location, Size, Caption, Events) for the 15 original components other than FX_RefreshButton was not repeated after placement. Their Components-grid columns match T1.
- The binding value `FX_VarTest` was entered by typing into the Variable combobox of the Edit Variable Binding dialog, which the operator authorised for an unlisted name. Whether the stored binding is a variable reference or a plain name is not established by the UI.
- No saved state exists: the Save readback, the post-Save visibility of the definition, and the runtime value are all not yet tested.

## 8. Action counts (T6)

- Tab lists 1; tab selects 1 (tab 0, succeeded).
- Fresh snapshots: 21 (`t6-snapshot-00` to `-20`). One ref-not-found error (`e1653`, a stale ref I used from memory; no action executed). That error consumed the one fresh-snapshot recovery (`t6-snapshot-18`) and one corrected click (`t6-snapshot-19` tab click, success).
- Screenshots: 7 (`t6-01` to `t6-07`).
- Successful clicks: 15 — Event Handlers tab 2; Components tab 1; Toolbox Edit 1; canvas placement 1; Name double-click 1; Binding Type arrow 1; Binding Type option 1; Binding ellipsis 1; Variable Open 1; Binding dialog OK 1; FX_VarTestEdit row 1; FX_RefreshButton row 1; Variables tab 1; Components Expand 1.
- Errored click: 1 (`e1653`; no effect).
- Typing: 2 (Name `FX_VarTestEdit` into the inline editor; Variable `FX_VarTest` into the binding combobox).
- Key presses: 2 (Enter, committing the Name; Escape, collapsing the dropdown).
- Mouse moves: 1. Wheel scrolls: 2 (view only).
- Components placed: **1**. Renames: **1**. Binding Type set: **1**. Binding set: **1**.
- Set Values or handler actions added, changed, or removed: **0**. Handler groups added: 0.
- Form variables created: **0**. Designer Save: **0**. Regenerate Form: 0. Designer close/reopen: 0.
- Runtime open/close/activation: 0. FX_RefreshButton clicks in runtime: 0. Runtime data edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts, reauthentication: 0.
- Original-component property edits: 0.

## 9. Evidence files (T6)

- `T6-report.md` (this report).
- Screenshots (`evidence/EXP-056/`):
  - `t6-01-toolbox-edit-armed-before-canvas-click.png`: Edit highlighted in Toolbox; no component yet. Does not show placement.
  - `t6-02-edit1-USER-placed-before-rename.png`: new Edit at the empty grid cell beside FX_Refresh; Properties header `edit1_USER (Edit)`, Name `edit1_USER`, Type Edit; Components row `edit1_USER` Pane 1 Tab 0. Proves placement and default name.
  - `t6-03-name-cell-inline-editor-open.png`: Name inline editor open. Shows the editor opening.
  - `t6-04-binding-variable-dropdown-open.png`: Variable dropdown list without FX_VarTest. Proves the list lacks FX_VarTest.
  - `t6-05-binding-variable-field-after-typing-FX_VarTest.png`: Edit Variable Binding with Variable `FX_VarTest`; Properties Binding Type Variable. Proves the typed field before OK.
  - `t6-06-FX_VarTestEdit-selected-properties-binding-variable.png`: Binding Type `Variable`, Binding `variables.FX_VarTe…`, Components row FX_VarTestEdit selected, Pane 1 Tab 0. Proves binding. Name field out of frame; header stale (§6.1).
  - `t6-07-components-grid-scrolled-top-check.png`: Components grid scrolled; Pane (01) children shown; Pane (00) collapsed at that time. Proves nothing beyond the scrolled view.
- Accessibility snapshots: `t6-snapshot-00` … `t6-snapshot-20` (21 files, `evidence/EXP-056/`).

## 10. Acceptance status after T6

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified) | `t6-snapshot-00`; User footer; Save enabled |
| AC-2 | Supported with limits (T1) | 16-row baseline; Pane containers unavailable (documented in T1) |
| AC-3 | Supported (handler, re-verified after placement) | `t6-snapshot-19`: two ordered actions; sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`. Runtime evaluation untested. |
| AC-4 | Supported (T5, re-observed T6) | Definition absent (`t6-snapshot-20`); assignment row present (`t6-snapshot-19`) |
| AC-5 | **Partly supported — stays open** | Exactly one new FX_VarTestEdit, Type Edit, Binding Type Variable, Binding FX_VarTest, Location and Size recorded (`t6-snapshot-12`). Grid columns of all 16 originals match T1. FX_RefreshButton property readback matches T1. Full property readback of the other 15 originals not repeated (§7). |
| AC-6 to AC-12 | Not tested (Save, reopen, runtime are later steps) | — |

## 11. Repository writes (T6)

- `evidence/EXP-056/T6-report.md` (created)
- `evidence/EXP-056/t6-01` … `t6-07` PNG files; `t6-snapshot-00` … `t6-snapshot-20` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T6 section)
- No other repository files written.

## 12. Next step (not started)

- Pre-Save gate, then the single ordinary Designer Save. This stays at the checkpoint. Save is enabled, and the Designer must not be saved, closed, or reopened in this task.
