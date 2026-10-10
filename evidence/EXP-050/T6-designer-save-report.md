# EXP-050 T6 — One ordinary Designer Save of FX_Items, and post-Save verification

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 5 · task T6
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `225c4570-34b7-458a-9545-bb7416d7833c`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (existing working record, updated).

**Outcome:** exactly one ordinary Designer Save was invoked. The native result was a notification `Save — Global object(s) were saved.` The post-Save Designer shows Save and Undo disabled, no dialog, and the FX_Items Form still selected in User scope. No second Save was invoked. The FX_Items Form was not closed or reopened, the runtime was not opened, and no string, component, IDO, SQL object, or vendor Form was changed.

**Limit to note up front:** the notification says "Global object(s) were saved", so the save covered the global objects (the string resources) as well as the Form. The notification does not name the Form. Whether the FX_Items Form itself is persisted is only inferred from the cleared Save state; the reopen in a later task is the test for that.

## Pre-Save gate

| Check | Observed | Evidence |
| --- | --- | --- |
| Selected Form tab | `FX_Items` selected; vendor `Property Classes` tab not selected | `t6-01-pre-save-designer-state-FX_Items-pending.png`; find `tab [selected] … heading "FX_Items"` |
| Scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t6-01` |
| Save control | enabled (accessibility `button [ref=e15] [cursor=pointer]`, no `[disabled]`; icon dark) | `t6-01`; find |
| Undo | icon visibly active; accessibility `[disabled]` (the same discrepancy as T4 and T5; not used) | `t6-01`; find |
| Dialogs or prompts | none open; no String or Global Objects dialog; no authentication challenge | find |
| Pending changes | FX_sItem (T4) and FX_sCost (T5) string creations; Save enabled | T4 and T5 reports |

The T4 and T5 evidence supplied the two string values (`Item`, `Cost`). Neither String dialog was reopened to prepare for the Save.

Gate verdict: all preconditions held. Save was invoked.

## Save invocation (exactly one)

| # | Action | Result |
| --- | --- | --- |
| 1 | Click the Designer toolbar `Save` (ref `e16`, once) | Returned without error. A notification appeared at the top right |

**Save invocation count: 1.** No retry. No second click on Save, including after the notification, the 3-second settle, or the post-Save reads.

## Immediate native result

| Item | Observed | Evidence |
| --- | --- | --- |
| Notification | Title `Save`; body `Global object(s) were saved.` (info style, top right) | `t6-02-immediate-post-save-result-designer.png` |
| Save control | disabled (accessibility `button "Save" [disabled]`; icon greyed) | `t6-02`; find |
| Undo control | disabled (accessibility `[disabled]`; icon greyed) | `t6-02`; `t6-03` |
| Alert, error, or unexpected prompt | none | find (`alertdialog`, `dialog`, `alert`, `error`: none) |
| Selected Form | `FX_Items` tab selected; `Property Classes` not selected | `t6-02` |
| Scope | `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t6-02` |

The accessibility and visual readings now agree. The earlier disagreement on Undo (T4 and T5) does not recur here: both sources show Undo disabled after the Save.

## Post-Save settled state (after a 3-second wait, no further action)

| Item | Observed | Evidence |
| --- | --- | --- |
| Notification | gone | `t6-03-post-save-settled-state-after-3s.png` |
| Save and Undo | both disabled (accessibility and icon) | `t6-03`; find |
| Dialogs | none | find |
| Selected Form | `FX_Items` | `t6-03` |
| Scope | User / anton.ramos@3mworks.com.ph | `t6-03` status bar |

## Canvas captions after the Save (not modified)

Observed on the canvas (`t6-03`, `t6-04`):

| Label (canvas) | Caption reference (Properties) | Canvas displays |
| --- | --- | --- |
| FX_sItem (FX_ItemStatic) | `FX_sItem` | `FX_sItem*` (raw ID) |
| Description (FX_DescriptionStatic) | `FX_sDescription` | `Description` (resolved) |
| FX_sCost (FX_CostStatic) | `FX_sCost` | `FX_sCost:` (raw ID) |
| Unit of Measure (FX_UMStatic) | `FX_sUM` | `Unit of Measure` (resolved) |

**Observation: FX_sItem and FX_sCost still display their raw IDs after the Save.** Per the brief, this is recorded. I did not refresh, reopen, or otherwise change anything to test it. The unchanged display after a successful save is a discrepancy against the expected `Item` and `Cost`, and it is unresolved. It may be a display state that updates only on reopen. The reopen is a later task.

## Read-only component inspection (AC-7, no modification)

After the Save I selected each label row (name cell) and read its Caption. Selection only; no value entered, no drag, no arrow key, no property edit. Save and Undo were rechecked after these reads and were still disabled.

| Tab | Component | Type | Binding (Data Source) | Caption (Properties) |
| --- | --- | --- | --- | --- |
| 1 to 4 | GridColumns FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol | GridColumn | object.FX_Item, object.FX_Description, object.FX_Cost, object.FX_UM | not applicable (grid columns) |
| 5 | FX_ItemStatic | Static | none | `FX_sItem` |
| 6 | FX_ItemEdit | Edit | object.FX_Item | not applicable (Edit) |
| 7 | FX_DescriptionStatic | Static | none | `FX_sDescription` |
| 8 | FX_DescriptionEdit | Edit | object.FX_Description | not applicable |
| 9 | FX_CostStatic | Static | none | `FX_sCost` |
| 10 | FX_CostEdit | Edit | object.FX_Cost | not applicable |
| 11 | FX_UMStatic | Static | none | `FX_sUM` |
| 12 | FX_UMCombobox | ComboBox | object.FX_UM | not applicable |

Positions: Pane 1 for all labels and edits; Tab order 5 to 12 in the Components tree, bottom of the grid. The order of business fields is FX_Item, FX_Description, FX_Cost, FX_UM (row order in the tree; the same order as the canvas top to bottom).

Design-time type of the FX_UM component: `FX_UMCombobox`, Type `ComboBox`, Data Source `object.FX_UM`. This is design-time evidence only and does not show the runtime input control. The tutorial's ComboBox expectation matches this design-time type. Runtime is not inspected in T6.

## Counts (T6)

| Operation | Count |
| --- | --- |
| Designer ordinary Save | **1** |
| Save retries or second Save | **0** |
| Notification OK or dismissal | **0** (not clicked; it was gone by the 3-second post-Save read, dismissal mechanism not observed) |
| Close or reopen of FX_Items | **0** |
| Web Client runtime open | **0** |
| String dialog opened or edited | **0** |
| String resources created | **0** |
| Caption ellipsis clicks | **0** |
| Component, binding, or position edits | **0** |
| Row selections (read-only) | **4** (FX_ItemStatic, FX_DescriptionStatic, FX_CostStatic, FX_UMStatic) |
| Browser-reference errors | 0 |
| Browser timeouts | 0 |
| Portal banner dismissals | 0 (none seen) |
| JavaScript or evaluate by the worker | 0 |
| Screenshots (worker-saved PNG) | 5 (`t6-01` to `t6-04`; `t6-04` after the reads) |

## Acceptance status (T6 scope)

| AC | T6 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-8 | **PASS** for exactly one invocation, native result (notification), and clean Designer state (Save and Undo disabled; no dialog; no unexpected prompt) | `t6-01`, `t6-02`, `t6-03`, `t6-04`; find | Save notification names global objects, not the Form. Clean state is the Designer's own indication, not a database read |
| AC-7 (partial, extended) | Four label Captions and bindings re-read after the Save: `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`; object bindings unchanged | Read-only selections; `t6-04` | Canvas still shows raw IDs for FX_sItem and FX_sCost (unresolved) |
| AC-5 | not re-verified here (established in T4 and T5) | T4 and T5 reports | — |
| AC-6 | not re-read here | — | — |
| AC-9 to AC-11, AC-4 | not in T6 scope | — | — |

## Unresolved observations

1. **Canvas raw IDs after the Save.** FX_sItem and FX_sCost show their raw IDs on the canvas after a successful-looking save. They show `Item` and `Cost` in the string view. Not established whether the canvas refreshes only on reopen. Recorded per brief; no refresh attempted.
2. **Save scope.** The notification says global objects were saved. It does not say the FX_Items Form was saved. The cleared Save state is consistent with the Form being saved, but the notification does not prove it. The reopen is the test.
3. **Undo disagreement (T4, T5)** is not present after the Save: both readings are disabled now. Not explained.

## Repository changes (T6)

- Written: `evidence/EXP-050/T6-designer-save-report.md` (this report).
- Written: `evidence/EXP-050/t6-01` to `t6-04` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (status line and T6 section).
- Not written: any other repository file.

## Final browser state

- Tab 0 (Designer): `designer/default.aspx`, FX_Items tab selected, Component tab active in the Details panel, FX_UMStatic row selected. Save and Undo disabled. No dialog, no unsaved-change prompt, no alert. Scope User.
- Tab 1 (Web Client): unchanged from T5 (IDO Properties tab; not used in T6).
- No browser-native dialog. The Property Classes vendor tab was not selected or edited.

## Next permitted action

No further action is authorised by T6. The next step needs a separate coordinator instruction for close and reopen of FX_Items, then the runtime open. The brief requires the Save result to be inspected before any further action; it has been, and no second Save is planned.
