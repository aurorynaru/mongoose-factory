# EXP-067-R2 — T5 report: one Toolbox Edit drop, native binding gate, configuration of the same Edit (unsaved)

Run `R-20261013-011002-lSgL`, cycle 4, task T5. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `c4fdf4fa-bcc2-42b5-ad82-85bb0ab1f63f`. Date 2026-10-13. Editing scope User.

**Outcome: one Edit was dropped from the Toolbox (auto-named `edit1_USER`, Pane (01), Tab 0). Its native Binding picker listed `object.FX_UMsDescription` before any selection. The same Edit was then configured: renamed `FX_UMsDescriptionEdit`; Location `12.5; 42.5`; Size `12; 1.89`; Binding Type `Property`; Binding `object.FX_UMsDescription`. The Form is dirty and UNSAVED. Designer Save count 0. Nothing was undone or deleted. FX_UMsDescriptionStatic was not added (absent). Unloads unchanged at 1/1.**

## 1. Preconditions (fresh)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, current); tab 1 = Web Client. No tab select was needed.
- Fresh untargeted snapshot: FX_Items; Name `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate Form, Undo, Redo **disabled**; no dialog; 17 component rows (2 panes, FormCollectionGrid, 4 GridColumns, 10 Pane 01 components); `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` absent.
- Form Layout (T4/T3 readback): Size `69; 21`, Unit `Char`.
- Baseline geometry (re-read in T3, not re-read in T5 except FX_UMCombobox Location `7.75; 23.75` and Size `37.25; 2.15` in the snapshot): unchanged.
- Target area (pre-drop, `t5-01`): empty, right of the FX_PictureStatic box and below the Unit of Measure field.

## 2. Toolbox drop (count 1)

- One mouse drag from the Toolbox `Edit` item (about x 76, y 443) to the canvas target (about x 700, y 333). One drag only; not repeated.
- Result (`t5-02`): one new component `edit1_USER` (Edit; Pane 1; Tab 0) appeared in the Components grid and was selected. Save and Undo became **enabled** (dirty). The drop created a default-size Edit that runs past the canvas bottom and right edges until resized; this matches the EXP-062-R4 note that Toolbox drops create oversized controls.
- Drop-time geometry readback: Size `87.5; 18.5`; Location `12.888888888888889; 42.75` (Top; Left).
- No other component was dropped, renamed or changed.

## 3. Binding gate (native picker, before any selection)

Step 3a — picker with Binding Type `None` (the state immediately after the drop):
- Data Source group: Binding Type `None`; Binding blank. Clicking the Binding dropdown **opened** the picker (the list was populated, although the type was still `None`). The list contained the full object property set, alphabetical: `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, `object.FX_Cost`, `object.FX_Description`, `object.FX_Item`, `object.FX_Picture`, `object.FX_UM`, **`object.FX_UMsDescription`**, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1`…`6`, `object.UDFDecimal1`…`6`, `object.UDFInteger1`…`6`, `object.UDFLongText1`…`2`, `object.UDFMediumText1`…`6`, `object.UDFRecordDate`, `object.UDFRowPointer`, `object.UDFShortText1`…`7`, `object.UpdatedBy`.
- Accessibility readback: `option` → `cell "object.FX_UMsDescription"` (one match).
- Captured `t5-03` **before** any selection (viewed: list with `object.FX_UMsDescription` between `object.FX_UM` and `object.InWorkflow`).
- Dismissed with Escape (no commit). Binding still blank.

Step 3b — Binding Type set to `Property` (configuration step; required to bind):
- Binding Type dropdown offered `Variable`, `Property`, `SubCollection Grid`; `Property` selected (one click). `t5-04` viewed: Binding Type `Property`.
- **Observation:** selecting `Property` auto-assigned the Binding to the first list entry, `object._ItemId`. This was not requested. It was corrected in step 3c.

Step 3c — Binding picker under `Property`:
- My attempted reopen click closed the list rather than opening it; the state was captured as `t5-05` (Binding `object._ItemId`, picker closed).
- Reopened the picker once more. The list under `Property` again contained `object.FX_UMsDescription` (accessibility option `object.FX_UMsDescription`, one match). Captured `t5-06` **before** selecting (viewed: Binding Type `Property`; Binding `object._ItemId`; list with `object.FX_UMsDescription` highlighted in position between `object.FX_UM` and `object.InWorkflow`).
- Selected `object.FX_UMsDescription` (one click). The combobox showed `object.FX_UMsDescription`; `t5-07`.
- The value was not reflected in the grid until focus moved: one **Tab** press committed it. Readback after Tab: Binding `object.FX_UMsDescription` (Properties) and the Components grid row `FX_UMsDescriptionEdit … object.FX_UMsDescription` (`t5-08`).

**Gate verdict: PASSED.** The exact option `object.FX_UMsDescription` was present in the new Edit's native Binding picker before selection, under both `None` and `Property`. AC-2's binding-picker requirement is therefore supported through the new Edit (see §7).

## 4. Configuration of the same Edit

| Property | Before | Set to | Readback after | Evidence |
| --- | --- | --- | --- | --- |
| Name | `edit1_USER` | `FX_UMsDescriptionEdit` (typed once, Tab) | `FX_UMsDescriptionEdit` (Properties); Components row `FX_UMsDescriptionEdit Edit object.FX_UMsDescription 1 0` | `t5-09`, `t5-12` |
| Location (Top / row) | `12.888888888888889` | `12.5` (typed once, Tab) | Location `12.5; 42.75` | `t5-11` |
| Location (Left / column) | `42.75` | `42.5` (typed once, Tab) | Location `12.5; 42.5`; Top `12.5`; Left `42.5` | `t5-12` |
| Size (Width) | `87.5` | `12` (typed once, Tab) | Size `12; 1.89`; Width `12` | `t5-12` |
| Size (Height) | `18.5` | `1.89` (typed once, Tab) | Size `12; 1.89`; Height `1.89` | `t5-12` |
| Binding Type | `None` | `Property` (one list selection) | `Property` | `t5-04`, `t5-12` |
| Binding | `object._ItemId` (auto after type change) | `object.FX_UMsDescription` (one list selection) | `object.FX_UMsDescription` (Properties and grid) | `t5-06`, `t5-07`, `t5-12` |

Other properties were not edited. Layout Unit `Char` was not changed. Caption (blank), Theme Class, Events and Data Change etc. were not changed.

Note on the Layout editors: Location and Size are shown as single text values that expand (Top/Left and Width/Height sub-rows) on double-click. Each sub-value was entered on its own row and committed with Tab. The brief's "Location 12.5; 42.5" and "Size 12; 1.89" are the displayed row;column and width;height values.

## 5. Canvas and placement

- `t5-12` (viewed): the Edit is visible on the canvas at about x 697–795, y 324–361, right of the FX_PictureStatic outline (box right edge about x 689) and below the Unit of Measure field (bottom about y 279). Inside the canvas (right edge about x 810). It does not overlap FX_UMCombobox, FX_PictureStatic, FX_RefreshButton or the Import button.
- The Components grid (visible rows in `t5-02`, `t5-12`) shows the existing rows (FX_UMCombobox `object.FX_UM`; FX_UMStatic; FX_CostEdit `object.FX_Cost`; FX_CostStatic) unchanged. The new row is `FX_UMsDescriptionEdit`, Pane 1, Tab 0.
- The full component tree was not re-read after configuration (limitation).

## 6. Save, reopen, unload, drops and state

- Designer Save: **0** (not invoked). Save button enabled (dirty); Undo enabled (dirty). `FX_UMsDescriptionStatic` absent (find: no match).
- Unloads: Web Client 1 (T2); Designer 1 (T3). Not repeated.
- Toolbox drops in T5: **1**. The second planned drop (`FX_UMsDescriptionStatic`) belongs to the next task and has not happened.
- No Undo, trash, delete, Form close or cleanup was invoked.
- No Web Client operation; no record edit; no runtime Save; no check-in or undo checkout.
- Dialogs: none open.

## 7. Acceptance status (T5 scope)

- **AC-2 (binding gate):** the exact picker of the **new** Edit lists `object.FX_UMsDescription` (under `None` and `Property`). Preference (T1: checked, unchanged); both unloads (1/1, unchanged); reopen identity (T3); binding picker (this report). **Supported (observed).**
- **AC-4 (Edit):** added once (one drop); Location `12.5; 42.5`; Size `12; 1.89`; Binding Type `Property`; Binding `object.FX_UMsDescription`; readbacks recorded; no other component changed (visible rows). **Supported for configuration (observed); unsaved.** Not yet saved or reopened (AC-5, AC-6 pending).
- **AC-3 (Static):** not attempted in T5 (per the bounded instruction). Pending.
- **AC-5 (Save):** not attempted (Save count 0). Pending.
- **AC-6 / AC-7 / AC-8:** pending.

## 8. Counts (T5)

**T5 explicit browser calls: 81.** Breakdown:

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Snapshots | 4 (1 untargeted; 3 targeted) |
| Finds | 35 |
| Clicks | 16 (10 single clicks; 6 double-clicks on Layout value cells) — see note |
| Toolbox drag (mouse drag) | 1 |
| Key presses | 7 (Escape ×1; Tab ×6) |
| Typed entries | 5 (Name; Location Top; Location Left; Size Width; Size Height) |
| Screenshots | 12 (`t5-01` to `t5-12`) |
| Hovers / waits / wheel | 0 / 0 / 0 |

Note on click counts: the single clicks are the Binding dropdown trigger (×3: first gate open, reopen after the type change, and the picker reopen before selection), the Binding Type trigger (×1), the Property option (×1), the Binding option (×1), the Name value cell (×1), the Layout group row (×1), the Location value cell (×1) and the Location expand caret (×1), giving 10. The double-clicks are the Location text, Top, Left, Size, Width and Height (×6). Total 16.

**Cumulative T1–T5: 205 explicit browser calls** (T1 53 + T2 15 + T3 41 + T4 15 + T5 81).

| Operation (cumulative, T1–T5) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged) |
| Preference changes | 0 |
| Web Client `Unload All Global Form Objects` | **1** (T2; unchanged) |
| Designer `Unload All Global Form Objects` | **1** (T3; unchanged) |
| Designer close / reopen (pre-change) | 1 / 1 (T3) |
| Toolbox drops | **1** (T5) |
| Designer Save | **0** |
| Components added | 1 (`FX_UMsDescriptionEdit`, renamed from `edit1_USER`) |
| Component deletes / other component changes | 0 / 0 |
| Binding commits | 1 (the new Edit; not an existing component) |
| Undo / trash / delete / close actions | 0 |
| Runtime close / reopen | 0 / 0 |
| Record edits / runtime Save | 0 / 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console, network | 0 |
| Direct URL / refresh / restart / session re-login | 0 / 0 / 0 / 0 |

## 9. Limitations and deviations

1. **Binding auto-assignment on type change.** Setting Binding Type to `Property` auto-set Binding to `object._ItemId`. It was corrected to `object.FX_UMsDescription` before Save. Observed; the final value is what matters for this run.
2. **Picker opened under `None`.** The gate picker lists the full property set even when Binding Type is `None`. The brief expected the picker to be inspected for the bound type; the entry was present under both types.
3. **Bind commit needed Tab.** A selected Binding value shows in the Properties editor but reaches the Components grid only after focus leaves the editor (Tab).
4. **Full component tree not re-read after configuration.** Only visible rows and a find for `FX_UMsDescriptionStatic` were read after the changes.
5. **Edit geometry is a live value, not saved.** The readbacks are from the open unsaved session; no close/reopen has verified them.
6. **Drop placement.** The drop itself landed roughly in the target; the explicit values set the final placement. The brief allowed no second drop; none was made.
7. **Undo was not used.** Escape was used only to dismiss the first picker opening (no commit).

## 10. Worker-written file inventory (T5)

- `evidence/EXP-067-R2/T5-edit-drop-binding-gate-and-configuration-report.md` (created; this file).
- `evidence/EXP-067-R2/t5-01-pre-drop-baseline-canvas-target-area-empty.png` (created).
- `evidence/EXP-067-R2/t5-02-post-drop-one-edit-auto-named-canvas-and-components.png` (created).
- `evidence/EXP-067-R2/t5-03-binding-picker-edit1-user-lists-object-fx_umsdescription-before-select.png` (created).
- `evidence/EXP-067-R2/t5-04-binding-type-after-property-select-check.png` (created).
- `evidence/EXP-067-R2/t5-05-binding-picker-reopened-under-property-type-check.png` (created; shows the unintended `object._ItemId` state).
- `evidence/EXP-067-R2/t5-06-binding-picker-property-type-lists-object-fx_umsdescription-before-select.png` (created).
- `evidence/EXP-067-R2/t5-07-binding-set-to-object-fx_umsdescription-after-select.png` (created).
- `evidence/EXP-067-R2/t5-08-after-tab-commit-binding-and-components-grid-data-source.png` (created).
- `evidence/EXP-067-R2/t5-09-name-value-cell-edit-state-check.png` (created).
- `evidence/EXP-067-R2/t5-10-location-value-editor-state-before-edit.png` (created).
- `evidence/EXP-067-R2/t5-11-location-after-double-click-editor-check.png` (created).
- `evidence/EXP-067-R2/t5-12-edit-configured-canvas-and-properties-readback.png` (created).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: status, §19 T5, §20 inventory, knowledge state, next step).
- Cumulative from T1–T4: `T1-preflight-report.md`, `T2-webclient-unload-report.md`, `T3-designer-unload-report.md`, `T4-binding-picker-readonly-report.md`; `t1-01`…`t1-06`; `t2-01`…`t2-03`; `t3-01`…`t3-04`; `t4-01`, `t4-02`.
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:29–17:34 UTC). Not read in full; harness and operator git review are authoritative.

## 11. Final state (end of T5)

- **Designer:** tab 0, FX_Items open, User scope (ScopeName anton.ramos@3mworks.com.ph), **dirty and unsaved** (Save and Undo enabled). Components: the original 17 (visible rows unchanged) plus `FX_UMsDescriptionEdit` (Edit; Pane 1; Tab 0; Location `12.5; 42.5`; Size `12; 1.89`; Binding Type `Property`; Binding `object.FX_UMsDescription`). `FX_UMsDescriptionStatic` absent.
- **Selection:** `FX_UMsDescriptionEdit` selected (view state). No dialog open; no picker open.
- **Web Client:** tab 1; not operated on in T5.
- **Next (not authorized by T5):** add FX_UMsDescriptionStatic (one Toolbox Static drop; rename; Location `10.5; 42.5`; Size `12; 1.5`; Caption `FX_sDescription` via the Caption dropdown), then one Designer Save, then the close/reopen and the runtime check. Both unloads are complete and must not be repeated.
