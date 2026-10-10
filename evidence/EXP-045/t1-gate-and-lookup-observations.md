# EXP-045 T1 — Select Form gate and string-lookup observations (worker-authored)

Run `R-20261010-214137-Ia7F` · cycle 0 · task T1 · worker session `9f2fb920-cc07-4930-b468-a5c8910aab86`.
Excerpts from accessibility snapshots taken during T1. Refs are as shown at the time of each read and are not reusable.

## Select Form dialog — state at open (before any T1 criterion)

Leftover filter from the prior session, not a T1 result and not used as a result:

```yaml
- dialog "Select Form" [ref=f1e513]:
  - grid [ref=f1e516]:
    - row: Caption | Name
    - grid [ref=f1e528]: "Sql Tables" / "SqlTables"; "Sql Tables Constraint" / "SqlTablesPrimaryKey"
  - textbox [active] [ref=f1e549]: SqlTables
  - combobox [ref=f1e555]: Name
  - checkbox "Case Sensitive" [ref=f1e559]   (unchecked)
  - checkbox "Starts With" [ref=f1e564]      (unchecked)
```

## Gate C1 — positive control `FX_HelloWorld01` (key events, 2 s settle)

```yaml
- textbox [active] [ref=f1e549]: FX_HelloWorld01
- combobox [ref=f1e555]: Name
- checkbox "Case Sensitive" [ref=f1e559]  (unchecked)
- checkbox "Starts With" [ref=f1e564]     (unchecked)
- grid [ref=f1e528]:
  - table: row "FX_HelloWorld01" | "FX_HelloWorld01"      # one row, settled
```

Screenshot: `t1-02-select-form-positive-control-FX_HelloWorld01-settled.png`.

## Gate T1 — target `FX_UMs` exact (key events, 2 s settle)

```yaml
- textbox [active] [ref=f1e549]: FX_UMs
- combobox [ref=f1e555]: Name
- checkbox "Case Sensitive" [ref=f1e559]  (unchecked)
- checkbox "Starts With" [ref=f1e564]     (unchecked)
- grid [ref=f1e528]                          # no child rows; settled after 2 s
```

Screenshot: `t1-03-select-form-target-FX_UMs-exact-settled-zero-rows.png`.

## Cancel

Dialog closed with `Cancel` (`f1e570`). No row activated.

## Re-open for the string-lookup search (Filter retained `FX_UMs` until edited)

Filter replaced with `String` (key events, 2 s settle):

```yaml
- textbox [active] [ref=f1e549]: String
- combobox [ref=f1e555]: Name
- grid [ref=f1e528]:
  - table: row "Export/Import Strings" | "ExportImportStrings"   # one row
```

Row selected (`f1e584`) and `OK` (`f1e568`) pressed once. No screenshot was saved for this step.

## Opened Form — `ExportImportStrings` (read only; not used for Preview, Export or Import)

```yaml
- tab [selected]: heading "Export/Import Strings"
- tabpanel "Export/Import Strings":
  - textbox: en-US
  - text: "Source:"  combobox (empty)  button "Open" [ref=f1e610]
  - text: "Target:"  radio "Include Only Untranslated"; radio "Include All"
  - button "Export" [ref=f1e624]; button "Preview" [ref=f1e626]
  - grid: columns "String Name" | "Translated String" | "Description" | "Target Language" | "Form Name"
  - toolbar: "Displaying 1 - 1 of 1" (one empty row)
  - radio "Export" [active]; radio "Import"
```

Source list opened once (`Open` `f1e610`). The option rows read in the accessibility output were language codes only, from `ar-SA` through `zh-TW` (32 option rows, each with a language name). The read did not list `en-US`, which is the text in the separate en-US textbox above the Source row. The list was collapsed with the same `Open` trigger. The Form tab was closed with `Close Panel Export/Import Strings` (`f1e590`); no prompt appeared.

Conclusion: no ID-level string lookup is offered by this Form. Not a supported read-only string-resource view for FX_sUM or FX_sDescription.

## Notes

- The dialog's Caption and Name columns show no scope.
- The filter results are the displayed grid after a 2 s settle in this session.
