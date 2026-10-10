# EXP-050 T3 — Form creation (one Finish) and immediate Designer inspection

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 2 · task T3
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `b00a27a0-81c2-422c-920a-f3c1849f0b43`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (existing working record, updated; no duplicate).

**Outcome:** exactly one wizard Finish was invoked. Its native result is `Process Completed Successfully`. The Designer opened `FX_Items` (URL `?MGForm=FX_Items`), in User scope, with Save and Undo disabled. The post-creation Select Form inventory shows one `FX_Items` row. Caption strings were not created and no Designer Save, close/reopen, or runtime open occurred, as the brief required.

## Pre-Finish gate and wizard state

| Check | Result | Evidence |
| --- | --- | --- |
| Designer wizard still staged (T2) | Dialog `Form Wizard - MultiView` on its final page; sentence "Click the Finish button to build a multiview form named FX_Items with the data source FX_Items."; Save Template unchecked; Next disabled; Back and Finish enabled | `t3-01-pre-finish-wizard-final-page-state.png` |
| Fresh collision recheck, Web Client Select Form, positive control `FX_UMs` (Name; Case Sensitive and Starts With unchecked; key events; 2 s settle) | One row `FX_UMs` / `FX_UMs` | (snapshot; not captured as PNG) |
| Fresh collision recheck, target `FX_Items` (same settings) | Zero rows | (snapshot; not captured as PNG) |
| Select Form cancelled; Designer tab reselected | Wizard unchanged after the tab round trip: same sentence, Save Template unchecked, Finish enabled | `t3-02-designer-wizard-final-page-after-collision-recheck.png` |

Gate verdict: **PASS for the visible inventory**, repeated in T3. The collision recheck ran through the separate Web Client tab, as the bounded instruction allowed. The Designer wizard was not touched.

Limit: the field order (FX_Item, FX_Description, FX_Cost, FX_UM) was verified on wizard page 3 in T2 (`t2-11`). T3 did not navigate Back to page 3 to re-check it, because that would have altered the staged wizard. The final page does not show the order.

## Finish (one invocation)

- Finish invoked **once** (`e1576`). Not retried.
- Native result: alertdialog `Infor Mongoose Application Development Framework - Form Wizard - MultiView`, text `Process Completed Successfully`, one OK button. This is the same completion notice EXP-045 recorded at its Finish (`t3-03-finish-completion-notice-Process-Completed-Successfully.png`).
- Acknowledged with OK **once**. No other prompt appeared.
- The wizard dialog closed. The Designer URL became `…/designer/default.aspx?MGForm=FX_Items`.

## Immediate Designer state (post-Finish, before any other action)

| Item | Observed | Source |
| --- | --- | --- |
| Form tabs | `Property Classes` (vendor IdoPropertyClasses, not selected) and `FX_Items` (selected, with close control) | `t3-04` screenshot; tablist |
| Name | `FX_Items` | Properties panel; Designer tree `Name` row |
| Version | `User version for user anton.ramos@3mworks.com.ph` | Properties panel; tree `Version` row |
| ScopeType / ScopeName | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (status bar) | `t3-04` |
| Device Type / Form Type / Is Master | Default / Normal / True | Properties panel |
| Caption (Form) | empty | Properties panel |
| Save | disabled (greyed toolbar icon; `[disabled]` in snapshot) | `t3-04`; re-checked after selections |
| Undo / Redo | disabled | snapshot |
| Dialog or prompt open | none after OK | snapshot |

Ordinary Designer Save was **not** invoked (it is the separate AC-8 step). The Designer shows no unsaved-change indication: Save is disabled immediately after creation.

## Details > Components (read-only: native Expand and row selection)

Actions: Details panel Expand (once); Components tab (once); Components grid Expand (once; the tree expanded); one mouse-wheel scroll (`deltaY 300`) to show the lower rows; row selection on four label rows (name cell). No component or caption was edited.

Generated structure (Pane 00 grid, Pane 01 labels and edits; from the Components tree and row text):

| Tab | Component | Type | Data Source | Pane | Business field |
| --- | --- | --- | --- | --- | --- |
| 1 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 (FormCollectionGrid) | FX_Item |
| 2 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FX_Description |
| 3 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FX_Cost |
| 4 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FX_UM |
| 5 | FX_ItemStatic | Static | (none) | 1 | FX_Item label |
| 6 | FX_ItemEdit | Edit | object.FX_Item | 1 | FX_Item field |
| 7 | FX_DescriptionStatic | Static | (none) | 1 | Description label |
| 8 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | Description field |
| 9 | FX_CostStatic | Static | (none) | 1 | FX_Cost label |
| 10 | FX_CostEdit | Edit | object.FX_Cost | 1 | FX_Cost field |
| 11 | FX_UMStatic | Static | (none) | 1 | FX_UM label |
| 12 | **FX_UMCombobox** | **ComboBox** | **object.FX_UM** | 1 | FX_UM field |

Label Caption values (Properties panel, after selecting each label row; read-only):

| Label component | Caption (string-ID reference) | Canvas text (resolved or raw) |
| --- | --- | --- |
| FX_ItemStatic | `FX_sItem` | `FX_sItem*:` (raw ID shown) |
| FX_DescriptionStatic | `FX_sDescription` | `Description:` (resolved) |
| FX_CostStatic | `FX_sCost` | `FX_sCost:` (raw ID shown) |
| FX_UMStatic | `FX_sUM` | `Unit of Measure:` (resolved) |

The canvas, top to bottom, reads `FX_sItem*`, `Description`, `FX_sCost`, `Unit of Measure`. That is the intended order FX_Item, FX_Description, FX_Cost, FX_UM. The raw IDs for FX_sItem and FX_sCost match the T1 finding that those two strings are absent. Resolved text for FX_sDescription and FX_sUM matches the T1 Global Objects read.

FX_UM component type, direct design-time evidence: `FX_UMCombobox` with Type `ComboBox`, Data Source `object.FX_UM`, Pane 1, Tab 12 (`t3-06-components-grid-scrolled-to-FX_UM-rows.png`; accessibility row text `FX_UMCombobox ComboBox object.FX_UM 1 12`). This is the generated component's design-time type. It is **not** runtime evidence. Whether the runtime renders a combo box is for the runtime task.

## Post-creation inventory (Web Client, read-only)

- Web Client Select Form, Filter `FX_Items` (Name; Case Sensitive and Starts With unchecked), settled after 2 s: **one row, `FX_Items` / `FX_Items`** (`t3-08-select-form-post-creation-inventory-FX_Items-one-row.png`).
- Dialog cancelled. OK was not pressed, so no Form was opened from the Web Client.
- Limit: the Select Form dialog shows no scope column. The User scope is established from the Designer status bar and Properties Version, not from the inventory.

## Counts (T3)

| Operation | Count |
| --- | --- |
| Finish | **1** (not retried) |
| Completion notice OK | **1** |
| Save (Designer) | **0** |
| Undo / Redo | **0** |
| Form created | **1** (FX_Items, User scope) |
| Template created (Save Template) | **0** (unchecked before Finish) |
| Caption dialogs or String editor opened | **0** |
| Caption strings created, edited, or prompt answered | **0** |
| Close or reopen of any Form | **0** |
| Runtime (Web Client) Form open | **0** |
| Select Form dialog opened | **2** (pre-Finish recheck; post-creation inventory); both cancelled; OK **0** |
| Designer Expand (Details panel, Components) | **2** (panel, grid) |
| Components row selections (read-only) | **4** (FX_UMStatic, FX_CostStatic, FX_DescriptionStatic, FX_ItemStatic) |
| Mouse-wheel scroll (read-only) | **1** |
| Browser-reference errors | **0** |
| Browser timeouts | **0** |
| Prompts or confirmations answered | **1** (completion notice OK) |
| Portal banner dismissals | **0** (none seen) |
| Login, logout, reauthentication, refresh, restart | **0** |
| IDO, property class, SQL, FX_UMs, vendor Form, or string edits | **0** |
| JavaScript or evaluate tools by the worker | **0** |

Screenshots saved in T3: 8 (`t3-01` to `t3-08`).

## Acceptance status (T3 scope)

| AC | T3 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 Preflight | Carried from T1 and T2; Designer scope re-observed at T3 start | `t3-01` status bar | Site Developer capability not observed |
| AC-2 Collision gate | **PASS** (visible inventory; repeated before Finish) | Fresh recheck in T3; the Select Form screenshot `t2-02` covers the same gate | Same session; no scope column or total count |
| AC-3 Pre-Finish wizard | **PASS** for identity, route, Data Source, and Save Template (`t3-01`). Field order: verified in T2 (`t2-11`), not re-verified in T3 | `t3-01`, `t3-02` | Order not re-checked in T3 (see Limit above) |
| AC-4 One Finish, one Form | **PASS** for Finish count (1), native result (`Process Completed Successfully`), and Designer identity (Name FX_Items, User scope). Post-creation inventory: one row | `t3-03`, `t3-04`, `t3-08` | "Initially loaded" identity only; no reopen. Designer identity is the Properties panel's displayed value |
| AC-7 Component identity (partial) | Field order, bindings, label Captions, and FX_UM design-time type read from the Components tree and Properties | Components tree rows; `t3-05`, `t3-06`, `t3-07` | Read in T3 only. Canvas order matches; the other three label selections have accessibility text but no screenshot |
| AC-5, AC-6, AC-8 to AC-11 | Not performed (out of T3 scope) | — | Caption strings, Designer Save, close/reopen, runtime open not in T3 |

## Observations and unresolved items

1. **Completion notice.** `Process Completed Successfully` is the wizard's own completion message. It is not a Designer Save and not persistence evidence.
2. **Save disabled immediately after Finish.** It means the Designer has no pending edit. It does not prove that the Form is stored in the database. Persistence needs the later Save and reopen steps.
3. **Caption resolution state.** `FX_sItem` and `FX_sCost` display as raw IDs, consistent with the absent strings from T1. `FX_sDescription` and `FX_sUM` resolve. Creating the two strings is the next step (T4 or later), not part of T3.
4. **FX_UM design-time type.** `FX_UMCombobox` is typed `ComboBox`. The tutorial expects a ComboBox. The design-time type matches that expectation. Runtime control type is still unresolved.
5. **Selection of FX_Cost on page 3 (T2).** The accessibility tree marked a different row as selected. The order was not affected. Not re-examined in T3.
6. **Components tab side effects.** Selecting a component switched the Designer's bottom-right tab to `Component`. This is display only. The Designer stayed clean.

## Repository changes (T3)

- Written: `evidence/EXP-050/T3-form-creation-report.md` (this report).
- Written: `evidence/EXP-050/t3-01` to `t3-08` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (status line and T3 section).
- Not written: any other repository file.

## Next permitted action

No further action is authorised by T3. The created Form is open in the Designer, clean (Save disabled), with the two raw-ID labels awaiting caption strings. The next task must authorise the caption-string creation (`FX_sItem` = `Item`, `FX_sCost` = `Cost`). Designer Save, close and reopen, and runtime open remain separate steps.
