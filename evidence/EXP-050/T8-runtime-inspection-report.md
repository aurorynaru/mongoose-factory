# EXP-050 T8 — One read-only Web Client runtime opening of FX_Items (AC-10)

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 7 · task T8
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `6cf18e38-a8dc-414c-a1fe-b55fc2bf57bc`
Date: 2026-10-11 (system date). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Record: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (existing working record, updated).

**Outcome:** exactly one Web Client runtime opening of FX_Items, through the native Select Form (toolbar Open > Select Form > OK). The runtime Form rendered, with the four business fields in the order Item, Description, Cost, Unit of Measure. Its captions read `Item`, `Description`, `Cost`, `Unit of Measure`. The Unit of Measure input is a ComboBox-role control with an Open dropdown trigger, which is direct runtime evidence of a combo box. No value was selected, typed, saved, created, or deleted. The Designer tab was not touched.

## Preflight (before the open)

| Check | Observed | Evidence |
| --- | --- | --- |
| Designer (tab 0) | `FX_Items` selected; User scope (`anton.ramos@3mworks.com.ph`); Save disabled; no dialog; vendor `Property Classes` not selected | find; not modified |
| Web Client (tab 1) before selection | DEM identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Save disabled; no sign-in prompt; no portal banner | snapshot |
| Authentication, unsaved-change, or unexpected dialog | none | find |

## Select Form gate (native, before the open)

| Step | Filter and settings | Settled result | Evidence |
| --- | --- | --- | --- |
| Select Form dialog opened (toolbar Open) | Leftover filter `FX_Items` from earlier; Filter By Name; Case Sensitive and Starts With unchecked | One row: Caption `FX_Items` / Name `FX_Items`, highlighted | `t8-01-select-form-FX_Items-single-settled-match-before-open.png`; find |

The filter was not retyped (to avoid any change). The 2-second wait and a fresh snapshot confirmed the single row was settled. The Caption equals the Name, so this is the intended Form and the match is not ambiguous. The Select Form inventory shows no scope column, so the User scope of the runtime Form is taken from the open runtime Form's context and from the Designer (T7), not from this dialog.

## Runtime open (exactly once)

| Action | Result |
| --- | --- |
| Select Form OK (`f1e1153`), once | Runtime tab `FX_Items` opened and selected (URL `favoriteContext=FX_Items`). No error, no prompt. |

**Runtime open count: 1.** Not retried. No other Form was opened by this task.

## Runtime Form identity

| Item | Observed | Evidence |
| --- | --- | --- |
| Tab | `FX_Items` (selected; tab panel `FX_Items`) | `t8-02-runtime-FX_Items-opened-rendered-layout.png`; find (`tabpanel "FX_Items"`) |
| Form-level status bar | `Item (Object 1 of 1)` (a record, not a data-entry state) | `t8-02`; `t8-04` |
| Toolbar | Save disabled; New, Delete, Refresh, Filter in Place enabled as standard toolbar buttons. Not used | `t8-02`; find |
| Scope | Not displayed in the runtime Form itself. Designer scope (T7) is User / anton.ramos@3mworks.com.ph | T7 report |

## Rendered field layout (visual, top to bottom)

| Order | Caption rendered | Input control (accessibility) | Rendered value | Evidence |
| --- | --- | --- | --- | --- |
| 1 | `Item:` (required mark `*`) | `textbox "Item:"` | empty | `t8-02` |
| 2 | `Description:` | `textbox "Description:"` | empty | `t8-02` |
| 3 | `Cost:` | `textbox "Cost:"` | `0.00` (default) | `t8-02` |
| 4 | `Unit of Measure:` | `combobox "Unit of Measure:"` with an `Open` button | empty | `t8-02`; `t8-03`; find |

The order, the captions, and the controls match the intended design: FX_Item, FX_Description, FX_Cost, FX_UM, displayed as Item, Description, Cost, Unit of Measure. No discrepancy was found in this runtime rendering.

The grid header in the left pane shows the same columns: `* Item`, `Description`, `Cost`, `Unit of Measure`. The grid row shows the existing record (marker `1` with star).

## FX_UM control: runtime evidence and ComboBox comparison

| Evidence | Observation |
| --- | --- |
| Accessibility role | `combobox "Unit of Measure:"` (role combobox), inside a container with an `Open` button (`f1e1257`) |
| Visual | a bordered single field with a downward triangle at the right, empty value (`t8-02`, `t8-03`) |
| Element crop | `t8-03-runtime-FX_UM-control-combobox-with-open-affordance.png` shows the bordered field and the arrow; the crop does not include the caption |
| Interaction | none. The `Open` trigger was not clicked. No value was selected, typed, or changed |

**Runtime conclusion:** the FX_UM input is a combo-box-style control in the runtime (ComboBox role plus a dropdown trigger). This matches the tutorial's expected ComboBox. It is direct runtime evidence, because the accessibility role and the visible dropdown trigger come from the rendered control.

**Confidence and limits:**
- High for "combobox-style control with dropdown trigger" (role and visual).
- Not established: the contents of the dropdown list (what values appear, whether the list is bound to FXUMs), because the trigger was not opened. The domain relationship (FX_UMs / FX_UM / FX_Description) is from the IDO and T7 reads, not from this list.
- Not established: whether the list is empty or populated, and whether the selection would be validated against the FX_UMs domain. Both need a read of the list, which this task did not do.

**Comparison with the earlier design-time type:** the Designer component was `FX_UMCombobox`, Type `ComboBox`, bound to `object.FX_UM` (T3, T6, T7). The runtime control is a combobox role with an Open trigger. The two sources agree on the control type. This task does not claim more than the rendered control type.

## Existing data

The runtime shows one existing record (`Item (Object 1 of 1)`), with the Item, Description, and Unit of Measure fields empty and Cost showing `0.00`. This task did not read the record's stored values beyond what the form displays, and did not alter them. The data-row state after the open is the same as the state displayed on open.

## Counts (T8)

| Operation | Count |
| --- | --- |
| Runtime open (FX_Items) | **1** |
| Select Form dialog opened | **1** (single settled match; not retyped) |
| Select Form OK | **1** |
| Select Form Cancel | **0** |
| Text entered into any runtime field | **0** |
| Values selected in any dropdown | **0** |
| Dropdown (`Open`) trigger clicked | **0** |
| Record created, saved, or deleted | **0** |
| Save (runtime or Designer) | **0** |
| Close or reopen of any Form | **0** |
| Filter in Place | **0** |
| New, Delete, Refresh, Get More Rows | **0** |
| Designer edits, saves, or clicks | **0** (tab selection only) |
| String, component, IDO, SQL, or vendor Form edits | **0** |
| Browser-reference errors | **0** |
| Browser timeouts | **0** |
| Portal banner dismissals | **0** (none seen) |
| JavaScript or evaluate by the worker | **0** |
| Screenshots (worker-saved PNG) | **4** (`t8-01` to `t8-04`; `t8-03` is an element crop of the FX_UM control) |

## Acceptance status (T8 scope)

| AC | T8 status | Basis | Limit |
| --- | --- | --- | --- |
| AC-10 | **PASS** for one read-only runtime opening; visible order FX_Item, FX_Description, FX_Cost, FX_UM; captions Item, Description, Cost, Unit of Measure; FX_UM actual control captured (combobox role, dropdown trigger); no test record entered or saved; comparison with the tutorial ComboBox expectation recorded | `t8-01` to `t8-04`; accessibility | Dropdown list contents not inspected (trigger not opened); FX_UMs-domain binding of the list not verified in runtime; the existing record's stored values not read beyond the displayed form. Same-session runtime observation only |
| AC-7 | runtime field order and captions confirmed visually (supplements the Designer check in T7) | `t8-02` | Runtime display only |
| AC-11 | not performed here (the final audit is a separate task) | — | — |

## Unresolved observations

1. **FX_UM dropdown list contents.** The control is combobox-style, but the list's values, whether it is populated from FX_UMs, and whether a value is validated against the domain are not established. Not opened, by design.
2. **Runtime record.** The form shows one existing record. Its stored values beyond the displayed fields, and whether that record is the expected one, were not verified.
3. **Scope of the runtime Form.** The runtime Form does not display its scope. User scope is from the Designer (T7).
4. **Canvas captions (Designer) vs runtime.** The runtime captions read as the resolved Item, Description, Cost, Unit of Measure, consistent with T7's Designer canvas after reopen.

## Browser state (final)

- Tab 0 (Designer): unchanged since T7. `FX_Items` Form tab selected; User scope; Save disabled; no dialog. The Designer was not clicked in T8 (only the tab selection was used earlier, in the preflight).
- Tab 1 (Web Client): the `FX_Items` runtime tab is open and selected next to the leftover runtime tabs (Export/Import Strings, IDOs, IDO Properties, Sql Tables, Sql Columns). The runtime form was not closed or reopened, as the brief requires. The leftover tabs were not changed.
- No browser-native dialog. No in-page dialog open (the Select Form dialog closed on OK).

## Repository changes (T8)

- Written: `evidence/EXP-050/T8-runtime-inspection-report.md` (this report).
- Written: `evidence/EXP-050/t8-01` to `t8-04` (PNG).
- Updated: `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (status line and T8 section).
- Not written: any other repository file.

## Next permitted action

No further action is authorised by T8. The final AC-11 audit is a separate task. The runtime FX_Items tab is left open in its observed state, as instructed.
