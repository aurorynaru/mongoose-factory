# Recipe: Apply a Component Class to a Combobox and a Grid Column (plus unsaved runtime check)

Status: **observed** in one run (EXP-089: FX_CustomerIDCombobox and FX_CustomerIDGridCol on FX_Orders). The assignment persisted after a Save and a Designer close/reopen, and the runtime outputs filled before Save. It has not been repeated yet, and the grid column was not exercised at runtime.
Category: components (Form-level change, User scope)
Source experiments: Outcome section of `experiments/EXP-089-…md`

## Purpose

Make a component inherit a component class (validator, Validate Immediately, list source). Use **Component Class Parameters** to map the validator outputs `%1,%2` to the Form's target properties.

## Preconditions

- The Designer is live, in **User** scope and clean, with the target Form open.
- The validator and class exist and read back as expected (`../global-objects/…`).
- The targets currently have a **blank** Component Class. Record Binding, Inheritance, List Source and Validators first.

## Steps (Designer)

1. **Select the component:** expand **Details > Components**, then expand Pane (00)/(01). The chevrons had no accessibility ref, so coordinates were used as a last resort. Click the component's row. The Properties header shows `<name> (EnhancedCombo)` or `(GridColumn)`.
2. **Inheritance > Component Class:** open the dropdown, choose the class (it is far down the list, so locate it by accessibility), press **Tab**. No prompt appears, and Save and Undo become enabled.
3. **Inheritance > Component Class Parameters:** click the value cell to open an inline input. Type the targets in output order (e.g. `FX_CusName,FX_CusAddress`; for Item, `FX_ItmsDescription,FX_ItmsCost`) and press **Tab**.
4. Repeat steps 1–3 for the grid column.
5. **Save** once. The toast reads `Form [<Form>] and global object(s) were saved.`
6. **Persistence:** close the Form with its Form-tab × (no prompt) and reopen it from Form menu > recent forms. Re-select each component. Component Class and Parameters should read back. The component-level List Source and Validators stay blank and Validate Immediately stays False, because they are inherited.

## Steps (runtime check without saving data)

1. In the Web Client, close the runtime Form if it is open. Reopen it with **Form > Open > Select Form**; it opens as an add-mode placeholder.
2. Click the toolbar **Filter in Place**, leave all criteria blank, press **F4**. Move between records only by clicking their **row-number cells**.
3. Open the component's drop-down once. It shows the `DISPLAY` columns only. Choose a different value once. The output targets update **immediately, before any Save**.
4. **Discard:** close the Form. Answer **No** to `Do you want to save your changes to primary collection?` (Yes / No / Cancel). Reopen and F4 to confirm the stored values.

## Known pitfalls

- **The Components grid's Component Class column does not refresh until after Save and reopen.** Verify in the Properties panel instead.
- **No unload was needed:** the outputs filled after one Designer Save and a runtime close/reopen. Treat the Web Client **Unload All Global Form Objects** as a contingency that needs explicit brief authorization. Never use the Designer unload.
- Never press Save at runtime during a check. Discard with close and then **No**.

## Evidence

EXP-089: `t4-17` (reopened combobox shows Component Class), `t5-08` (FX002 fills name and address before Save), `t5-09` (save prompt, answered No), `t5-12` (stored values after reopen).
