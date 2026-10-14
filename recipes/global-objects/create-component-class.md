# Recipe: Create a Component Class with a Validator and an IDO List Source

Status: **observed** in one run (EXP-088, FX_CustomerID), with one Save and a matching readback after a Designer close/reopen. EXP-089 confirmed it works at runtime once the class is applied to components. Repeated in EXP-091 (FX_Item: validator plus IDO Collection List Source), with Save and a matching readback after close/reopen. **Candidate for verified**; still pending the EXP-091 class's runtime check (Part 5 section 13).
Category: global-objects (tenant-wide; FX_ names only; User version)
Source experiments: Outcome section of `experiments/EXP-088-…md`

## Purpose

Bundle a validator (with its outputs as parameters), Validate Immediately and a drop-down List Source into a reusable **Component Class**. Components then inherit it (`../components/apply-component-class.md`).

## Preconditions

- The Designer is live, in **User** scope and clean, with a Form open.
- The validator exists (`create-in-collection-validator.md`); read it back first. The class name is absent from the Component Classes list.

## Steps

1. **Designer Edit > Component Class** opens **Global Objects** with a Component Classes list (`+`, copy, trash), a Properties pane and OK / Cancel / Help.
2. **New:** click the leftmost `+` once. In the **New** prompt, type the name, press **Tab**, click **OK**. The property groups are Design, Appearance, Behavior, Data Source, Events, Help, Layout, Miscellaneous and Report. Save becomes enabled.
3. **Validators:** under **Data Source > Validation**, click Validators (…). The editor has a Name / Parameters grid, a toolbar of `+`, trash, up, down and cube, and OK / Help.
   1. Click `+` to open a **New** prompt whose Name combobox lists **existing** validators. Choose the validator and click **OK**. This adds a row and creates nothing.
   2. With the row selected, click the **cube** icon to open a **Parameters** dialog. Type `%1,%2`, press **Tab**, click **OK**. The row shows `%1,%2`.
   3. Click the editor's **OK**. Validators now reads `<validator>(%1,%2)`.
4. **Validate Immediately:** choose **True** and press **Tab**.
5. **List Source (…)** opens **Edit List Source Specifications**. Fields are greyed until the one before them is set.
   1. Type: **IDO Collection**, then **Tab**. IDO: choose the IDO (e.g. `FX_Items`), then **Tab**.
   2. Properties (…): **Add** the properties in order (key first, then the outputs, e.g. `FX_Item`, `FX_Description`, `FX_Cost`), then **OK**. The order is kept.
   3. Columns to Display (…): click the first column and Control-click the second, then **OK**. The field shows **1-based positions** (`1,2`), not names.
   4. Click the List Source **OK**. The row reads `STDOLE <IDO>( PROPERTIES(<p1>,<p2>,<p3>) DISPLAY(1,2)RECORDCAP(0))`.
6. Click the **Global Objects OK** once; Save is enabled.
7. **Readback:** Edit > Component Class, select the class, read Validators, Validate Immediately and List Source, then **Cancel**.
8. **Save** once. The toast reads `Global object(s) were saved.`
9. **Persistence:** close the Form with its Form-tab × and reopen it from Form menu > recent forms. Repeat the readback; reopening the List Source editor shows Type, IDO, Properties and Columns.

## Known pitfalls

- **Use Tab before every OK** (as for validators).
- **Columns to Display stores positions.** In the accessibility tree, a Control-click selection marks only the first item `[selected]`. Trust the `1,2` result field.
- Rec Cap Override changed from blank to `0` on its own, cause unknown; this is harmless. Toolbar Save was briefly disabled after the List Source OK and re-enabled after the outer OK.
- The validator's own definition is not shown in the class. Re-read it through Edit > Validator if a gate needs it (the EXP-088 gap).
- No unload is needed before a runtime test (EXP-089).

## Evidence

EXP-088: `t3-07` (class Validators editor `FX_CustomerID` / `%1,%2`), `t7-05` (reopened List Source editor).
