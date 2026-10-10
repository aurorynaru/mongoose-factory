# EXP-045 T2 — Wizard configuration observations (worker-authored; STOP BEFORE FINISH)

Run `R-20261010-214137-Ia7F` · cycle 1 · task T2 · worker session `9f2fb920-cc07-4930-b468-a5c8910aab86` · task_message_id `6422433f-2a61-442e-9462-d5484a544720`.
Finish was **not** pressed. No Form was created. No Save. No Caption dialog. No string change.

## Starting state (fresh snapshot before any T2 action)

Designer tab (selected at start of the wizard route):
```yaml
- toolbar: Save [disabled]; Undo [disabled]; Regenerate Form [disabled]
- tab [selected]: heading "Property Classes"   # vendor IdoPropertyClasses, one tab
- toolbar: "[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]"
```

## Route: New Form > Classic > Multi-View

```yaml
- dialog "Form Wizard Selection":
  - radio "New Form" [active]          # selected
  - radio "Extend Form"                # not selected
  - combobox Category: Classic         # selected from list (option e1597)
  - combobox Wizard: MultiView         # selected from list (option e1718, "Multi-View")
  - button OK / Cancel / Help
```
Screenshot before OK: `t2-01-wizard-selection-classic-multiview-before-ok.png`.

## Page 1 — identity, Data Source, defaults

```yaml
- dialog "Form Wizard - MultiView":
  - Name: combobox [FX_UMs]                 # one plain browser_type fill
  - Form Type: combobox [MultiView]          # read-only default
  - Form Layout: combobox [GridLeft]         # default
  - Device Type: combobox [Default]          # default
  - Data Source: combobox [FX_UMs]           # chosen from list (one FX_UMs option)
  - Query Form: textbox (empty)              # not changed
  - Comments: textbox (empty)                # not changed
  - Back [disabled]; Next [enabled]; Finish [disabled]
```
Data Source list (opened once): options included `FX_HelloWorld01`, `FX_UMs`, `G6RItems` and others; exactly one `FX_UMs` option.
Screenshot: `t2-02-wizard-page1-name-and-data-source-FX_UMs.png`.

## Page 2 — Properties, Primary Collection (defaults accepted)

```yaml
- Selected (right) list:  FX_Description ; FX_UM        # defaults; not changed
- Available (left) list:  _ItemId, _ItemWarnings, CreateDate, CreatedBy, InWorkflow,
                          NoteExistsFlag, RecordDate, RowPointer, UDFDateTime1..6,
                          UDFDecimal1..6, UDFInteger1..6, UDFLongText1..2,
                          UDFMediumText1..6, UDFRecordDate, UDFRowPointer,
                          UDFShortText1..7, UpdatedBy
- Next enabled; Finish disabled
```
Screenshot: `t2-03-wizard-page2-default-properties-primary-collection.png`.

## Page 3 — property order and attributes

Before reposition:
```yaml
- grid:
  - row 1: Name FX_Description | Caption FX_sDescription | Include [checked]
  - row 2: Name FX_UM          | Caption FX_sUM          | Include [checked]
- arrows (top to bottom): move-to-top, up, down, move-to-bottom
```
Screenshots: `t2-04-wizard-page3-property-order-before-reposition.png`; `t2-05-wizard-page3-FX_UM-row-selected-before-up-arrow.png` (FX_UM Name cell focused).

Operation: `FX_UM` Name cell selected once; **up** arrow (second from top) pressed once.

After reposition:
```yaml
- grid:
  - row 1: Name FX_UM          | Caption FX_sUM          | Include [checked]
  - row 2: Name FX_Description | Caption FX_sDescri…    | Include [checked]
```
Screenshot: `t2-06-wizard-page3-after-one-up-arrow-order-check.png` (verified by image; the Caption text for row 2 is truncated in the grid).

Note: the Caption column shows the string-ID references `FX_sUM` and `FX_sDescription`. These are displayed as the grid's Caption values; this T2 did not open a Caption dialog, so the existence and values of those string resources are **unresolved**.

## Final page — Save Template and Finish state

Before the action:
```yaml
- text: "Click the Finish button to build a multiview form named FX_UMs with the data source FX_UMs."
- checkbox "Save Template" [checked]
- Back [enabled]; Next [disabled]; Finish [enabled]; Cancel; Help
```
Screenshot: `t2-07-wizard-final-page-before-save-template-uncheck.png`.

Operation: visible label `Save Template` clicked **once** (the checkbox display label, as in EXP-036).

After the action:
```yaml
- checkbox "Save Template" [active]   # no [checked]
```
Image (`t2-08`): checkbox empty; Finish enabled; the text reads "...named FX_UMs with the data source FX_UMs."

Screenshot: `t2-08-wizard-final-page-save-template-unchecked-finish-not-pressed.png`.

## Stop state

- Form Wizard `MultiView` left open on its final page. Finish visibly enabled. **Not pressed.**
- Cancel was **not** pressed (it would discard the entered Name, Data Source and property order).
- Designer behind the wizard: vendor `IdoPropertyClasses` design view; Save disabled; User scope.
- No prompt, alert, or browser-native dialog.

## Limits

- The Name and Data Source are the wizard's displayed values and the final-page sentence. Not a database read.
- The positioning is the wizard grid order. The Designer field order is established only after Finish and a reopen.
- The string-ID references are displayed values; the string resources are not verified.
- The Select Form gate was not repeated in T2 (see the record's gate note).

## Screenshots (T2)

| File | Shows | Does not prove |
|---|---|---|
| `t2-01-wizard-selection-classic-multiview-before-ok.png` | Form Wizard Selection: New Form; Category Classic; Wizard MultiView; before OK | That the wizard loads |
| `t2-02-wizard-page1-name-and-data-source-FX_UMs.png` | Page 1: Name `FX_UMs`; Data Source `FX_UMs`; MultiView, GridLeft, Default; Query Form and Comments empty | That the Name is committed in the model (the Next advance is the evidence) |
| `t2-03-wizard-page2-default-properties-primary-collection.png` | Page 2 defaults: FX_Description and FX_UM selected | The Designer result |
| `t2-04-wizard-page3-property-order-before-reposition.png` | Page 3 before reposition: FX_Description first, FX_UM second; captions FX_sDescription / FX_sUM | The string resources |
| `t2-05-wizard-page3-FX_UM-row-selected-before-up-arrow.png` | FX_UM row cell focused before the up arrow | A row highlight (the focus outline is the visible state) |
| `t2-06-wizard-page3-after-one-up-arrow-order-check.png` | Page 3 after one up arrow: FX_UM first, FX_Description second | The Designer order |
| `t2-07-wizard-final-page-before-save-template-uncheck.png` | Final page: Save Template checked; Finish enabled | — |
| `t2-08-wizard-final-page-save-template-unchecked-finish-not-pressed.png` | Final page: Save Template unchecked; Finish enabled and not pressed | That the Form is created (it is not) |
