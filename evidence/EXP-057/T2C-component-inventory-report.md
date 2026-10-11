# EXP-057 T2C — read-only component inventory and property verification of the recovered FX_Items Designer Form (AC-4)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 3. The task header reads `task=T4`; the bounded instruction is **T2C** (read-only component inventory, no runtime work). The bounded instruction was followed.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `aad06f65-44c0-4976-b979-02a720746033`.
Date: 2026-10-11. Browser tab 0 (Designer) only. Tab 1 (runtime) was not selected or touched. The Variables tab was not opened.

**Outcome: AC-4 observed, with one unresolved discrepancy.** The Components grid lists exactly 17 entries: the 16 originals from the EXP-056 baseline plus one FX_VarTestEdit. Every original row matches the EXP-056 T8 inventory on the grid columns. FX_VarTestEdit's properties match the brief (Name, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Location `12.7222222222222; 30.25`, Size `37.05; 2`, Events blank). FX_RefreshButton and FX_DescriptionEdit match EXP-056 T1/T6/T7. **Discrepancy:** the Components-grid Data Source cell for FX_VarTestEdit now reads `variables.FX_VarTest`. EXP-056 recorded it blank in T6, T7 and T8. The cause is not established.

## 1. Identity and clean state at start (`t4-snapshot-00`)

- Tab list before any selection: tab 0 Designer (current), tab 1 Mongoose portal. `browser_tabs select 0` succeeded.
- One Form tab, selected, heading `FX_Items`. Properties > Design > Version: `User version for user anton.ramos@3mworks.com.ph`.
- Footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save, Regenerate Form, Undo, Redo: `[disabled]`. No dialog.
- Designer state inherited from T2B: Details panel open on the Event Handlers tab (view state; no metadata change).

## 2. Navigation (view state and selection only)

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | Click `Components` tab (Details tablist, view state) | Details panel | Components grid shown; Pane (00) and Pane (01) at top level, children collapsed |
| 2 | Click grid `Expand` (labelled; view state) | Components grid | All groups expanded; 17 entries shown |
| 3 | Click FX_VarTestEdit name cell (selection only) | Components grid | Selected; Properties header `FX_VarTestEdit (Edit)` |
| 4 | Click FX_RefreshButton name cell (selection only) | Components grid | Selected; Properties header `FX_RefreshButton (Button)` |
| 5 | Click FX_DescriptionEdit name cell (selection only) | Components grid | Selected; Properties header `FX_DescriptionEdit (Edit)` |

Not done: any property edit or text entry; any Parameters, Edit, or Binding dialog; any Save, Regenerate, Undo, Redo; any add, move, resize, rename, or delete; the Variables tab; the runtime tab. Clicks: 5, all succeeded (timeouts 0).

## 3. Complete inventory (17 entries) — `t4-snapshot-02`

Grid order and the native grid values (Name, Type, Data Source, Pane, Container, Tab, Event to generate):

| # | Name | Type | Data Source | Pane | Container | Tab | Event to generate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | (container) | — | — | — | — | — |
| 2 | FormCollectionGrid | Grid | objects | 0 | — | 0 | — |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | — |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | — |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | — |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | — |
| 7 | Pane (01) | (container) | — | — | — | — | — |
| 8 | FX_ItemStatic | Static | — | 1 | — | 5 | — |
| 9 | FX_ItemEdit | Edit | object.FX_Item | 1 | — | 6 | — |
| 10 | FX_DescriptionStatic | Static | — | 1 | — | 7 | — |
| 11 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | — | 8 | — |
| 12 | FX_CostStatic | Static | — | 1 | — | 9 | — |
| 13 | FX_CostEdit | Edit | object.FX_Cost | 1 | — | 10 | — |
| 14 | FX_UMStatic | Static | — | 1 | — | 11 | — |
| 15 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | — | 12 | — |
| 16 | FX_RefreshButton | PushButton | — | 1 | — | 0 | StdFormRefresh |
| 17 | FX_VarTestEdit | Edit | **variables.FX_VarTest** | 1 | — | 0 | — |

Count: **17 entries = 16 originals + exactly one FX_VarTestEdit.** The grid text for each row is in `t4-snapshot-02` (rows at lines 301–526). No entries were truncated or unreadable in the grid; the 17th row was the last row in the tree.

## 4. Comparison with EXP-056 inventory

- **Original 16 (grid row text), this session vs EXP-056 T8 `t8-snapshot-07`:** all 16 rows match exactly on Name, Type, Data Source, Pane, Container, Tab, and Event to generate. The row-text lines compared (this session `t4-snapshot-02`, lines 301–511, vs EXP-056 `t8-snapshot-07`, lines 301–511) are identical in content.
- **FX_VarTestEdit row:** this session Data Source = `variables.FX_VarTest`; EXP-056 T8 `t8-snapshot-07` line 525 = `FX_VarTestEdit Edit 1 0` (Data Source blank). EXP-056 T6, T7 and T8 each recorded the Data Source cell as blank. See section 7.
- **Unavailable fields:** Pane (00) and Pane (01) were not opened in T2C (not required by the brief). EXP-056 T1/T7/T8 recorded that their Component property rows do not render, so their Binding, Location, Size, and Events are unavailable in the native UI. Not re-attempted here. Recorded as unavailable, not inferred.

## 5. FX_VarTestEdit — read-only properties (`t4-snapshot-03`, `t4-01`)

Properties header `FX_VarTestEdit (Edit)`; Design section.

| Property | Observed | Brief / EXP-056 expectation | Result |
| --- | --- | --- | --- |
| Name | `FX_VarTestEdit` | `FX_VarTestEdit` | Match |
| Type | `Edit` | Edit | Match |
| From Device Master | `True` | not specified | Observed |
| Caption | blank (value cell empty) | blank (EXP-056 T6) | Match |
| Data Source > Binding Type | `Variable` | Variable | Match |
| Data Source > Binding | `variables.FX_VarTest` | `variables.FX_VarTest` | Match |
| Layout > Location | `12.7222222222222; 30.25` | `12.7222222222222; 30.25` | Match |
| Layout > Size | `37.05; 2` | `37.05; 2` | Match |
| Tab Order (Layout) | `0` | 0 (EXP-056 T6) | Match |
| Events > Primary | blank | blank | Match |
| Events > Data Change | blank | blank | Match |
| Events > Lose Focus | blank | blank | Match |
| Events > Gain Focus | blank | blank | Match |
| Drag From Events | `0 event(s)` | 0 | Match |
| Drop On Events | `0 event(s)` | 0 | Match |

Other fields observed but not part of the brief: Read-Only/Disable `False`; Tab Read-Only Field `False`; Hidden `False`; No Tab Stop `False`; Auto Complete `False`; Required `False`; To Be Determined `False`; Upper or Lower Case `Mixed`; Pane `1`; Tab `0`.

Screenshot `t4-01-fx-vartestedit-selected-properties-binding.png`: the Components grid with FX_VarTestEdit highlighted (Type Edit, Data Source `variables.FX_VarTest`, Pane 1, Tab 0); the Properties header `FX_VarTestEdit (Edit)`, Name `FX_VarTestEdit`, Type Edit; the canvas shows a selection handle on the Edit to the right of FX_Refresh. The Binding and Location values are below the visible area in this frame and are established from the snapshot readback (`t4-snapshot-03`). Save greyed; User footer.

## 6. FX_RefreshButton and FX_DescriptionEdit — read-only properties

**FX_RefreshButton** (`t4-snapshot-04`; `Properties` header `FX_RefreshButton (Button)`):

| Property | Observed | EXP-056 reference | Result |
| --- | --- | --- | --- |
| Name | `FX_RefreshButton` | FX_RefreshButton (T6) | Match |
| Caption | `FX_Refresh` | FX_Refresh (T1, T6) | Match |
| Type | `PushButton` | PushButton (T1, T6) | Match |
| Data Source > Binding Type | `None` | None (T1, T6) | Match |
| Data Source > Binding | blank | blank (T1, T6) | Match |
| Primary (event) | `StdFormRefresh` | StdFormRefresh (T1, T6) | Match |
| Size | `14.25; 1.89` | 14.25; 1.89 (T1, T6) | Match |
| Location | `12.1666666666667; 5.25` | 12.1666666666667; 5.25 (T1, T6) | Match |
| Tab Order | `0` | 0 (T1) | Match |
| Data Change / Lose Focus / Gain Focus | blank | blank (T1) | Match |
| Drag From / Drop On | `0 event(s)` / `0 event(s)` | 0 / 0 (T1) | Match |

**FX_DescriptionEdit** (`t4-snapshot-05`; header `FX_DescriptionEdit (Edit)`; Components grid row 11):

| Property | Observed | EXP-056 reference | Result |
| --- | --- | --- | --- |
| Name | `FX_DescriptionEdit` | FX_DescriptionEdit (T1) | Match |
| Type | `Edit` | Edit (T1) | Match |
| Caption | `C(FX_DescriptionStatic)` | C(FX_DescriptionStatic) (T1) | Match |
| Data Source > Binding Type | `Property` | Property (T1) | Match |
| Data Source > Binding | `object.FX_Description` | object.FX_Description (T1, T7) | Match |
| Size | `37.05; 2` | 37.05; 2 (T1, T7) | Match |
| Location | `3.25; 23.75` | 3.25; 23.75 (T1, T7) | Match |
| Tab Order | `8` | 8 (T1, T7) | Match |
| Events (Primary, Data Change, Lose Focus, Gain Focus) | blank | blank (T1) | Match |
| Drag From / Drop On | not read in this session | 0 / 0 (T1, T7) | Not re-read here (carried from EXP-056) |

Screenshot `t4-02` (final): FX_DescriptionEdit selected (highlight on the Description edit in the canvas); the Components grid shows FX_DescriptionEdit `Edit`, `object.FX_Description`, Pane 1, Tab 8.

## 7. Data Source discrepancy (unresolved; not repaired)

- EXP-056 T6 (`t6-snapshot-13`), T7 (`t7-snapshot-01`, §5 "Data Source discrepancy"), and T8 (`t8-snapshot-07` line 525: `FX_VarTestEdit Edit 1 0`; `t8-snapshot-08`) all recorded the Components-grid Data Source cell for FX_VarTestEdit as blank, while the Properties Binding read `variables.FX_VarTest`.
- In T2C, the same grid cell reads `variables.FX_VarTest` (`t4-snapshot-02` line 528 `gridcell "variables.FX_VarTest"`; screenshot `t4-01` shows it in the Data Source column). The Properties Binding still reads `variables.FX_VarTest`.
- The originals' Data Source cells are unchanged between sessions, so the difference is specific to the variable-bound row.
- Observed difference: the grid cell changed from blank (EXP-056, same-session readback) to populated (this session, after the close and recovery). The cause is not established. Candidate explanations (not tested): the recovered Form was loaded from the saved definition, which the grid renders from the binding; the earlier blank was a same-session display state. This task does not choose between them.
- Not repaired, not edited. The brief forbids repairing bindings.

## 8. Pane containers (unavailable fields)

Pane (00) and Pane (01) rows show no Component property rows in the native Properties panel (EXP-056 T1, T7, T8). Not opened in T2C. Binding, Location, Size, and Events for those two containers remain **unavailable**, not inferred.

## 9. Counts (T2C)

- Tab lists 1 (before the first select). Tab selects 1 (tab 0; succeeded).
- Fresh snapshots 7 (`t4-snapshot-00` to `-06`); screenshots 2 (`t4-01`, `t4-02`); read-only finds 0.
- Clicks 5 (Components tab 1; grid Expand 1; FX_VarTestEdit row 1; FX_RefreshButton row 1; FX_DescriptionEdit row 1). Timeouts 0. Browser-reference errors 0. Recovery snapshots used 0.
- Typing 0; key presses 0; Parameters, Edit, or Binding dialogs opened 0.
- Designer Save 0; Regenerate 0; Undo 0; Redo 0; Form close or reopen 0; components added, edited, moved, resized, renamed, or deleted 0; handler changes 0.
- Variables tab 0; runtime tab interaction 0; FX_Refresh 0; diagnostics, preferences, FormSync, cache, SQL, scripts, reauthentication 0.

## 10. Acceptance (T2C scope)

| AC | Status | Basis |
| --- | --- | --- |
| AC-2 identity and clean state | Supported (carried from T2A and T2B; re-confirmed at the start of T2C) | `t4-snapshot-00`; Save disabled; footer User / `anton.ramos@3mworks.com.ph` |
| AC-3 handler | Supported (T2B) | `evidence/EXP-057/T2B-handler-verification-report.md` |
| **AC-4** exactly 16 originals plus one FX_VarTestEdit; FX_VarTestEdit Name/Type/Binding/Location/Size/Events; FX_RefreshButton and FX_DescriptionEdit expected properties; unavailable fields recorded | **Supported (observed, single session), with one unresolved discrepancy** | Sections 3–6. Inventory count 17 (`t4-snapshot-02`). FX_VarTestEdit properties (`t4-snapshot-03`, `t4-01`). FX_RefreshButton (`t4-snapshot-04`). FX_DescriptionEdit (`t4-snapshot-05`, `t4-02`). Unresolved: Data Source cell difference (section 7); Pane (00)/(01) unavailable (section 8); FX_DescriptionEdit Drag/Drop not re-read here. |
| AC-5 Variables tab | **Not tested in T2C** (reserved by instruction) | — |
| AC-6 to AC-11 | **Not tested** | Later tasks. |

## 11. Limits

- One Designer session, on a Form recovered in T2A. No cross-session, server-side, or independent database persistence is claimed.
- The Components-grid values are the grid's native rendered cells. The grid's tree was expanded by the labelled Expand control; the grid was not scrolled, and the 17th row was the last row present in the tree.
- The FX_VarTestEdit Location and Binding values were read from the snapshot; the screenshot shows only Data Source, Pane, and Tab in the grid, and the Properties Binding row is below the visible area.
- The Data Source cell is a display observation; the cause of the blank-to-populated difference is not established.
- Pane (00) and Pane (01) properties were not read (unavailable, as in EXP-056).

## 12. Files written (T2C)

- `evidence/EXP-057/T2C-component-inventory-report.md` (this report)
- Snapshots: `evidence/EXP-057/t4-snapshot-00-designer-fresh-pre-inventory.md`, `t4-snapshot-01-components-tab-inventory.md`, `t4-snapshot-02-components-expanded-inventory.md`, `t4-snapshot-03-fx-vartestedit-selected-properties.md`, `t4-snapshot-04-fx-refreshbutton-selected-properties.md`, `t4-snapshot-05-fx-descriptionedit-selected-properties.md`, `t4-snapshot-06-final-clean-designer-after-inventory.md`
- Screenshots: `evidence/EXP-057/t4-01-fx-vartestedit-selected-properties-binding.png`, `evidence/EXP-057/t4-02-final-clean-designer-components-inventory-17-rows.png`
- Tool-generated (gitignored): `evidence/playwright/page-2026-10-11T09-31-*.yml`, `page-2026-10-11T09-32-*.yml`
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (updated: status and T2C section).
