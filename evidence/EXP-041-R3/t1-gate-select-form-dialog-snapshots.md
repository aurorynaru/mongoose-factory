# EXP-041-R3 T1 — Select Form gate: dialog snapshots (excerpts)

Date: 2026-10-10. Run R-20261010-154641-QsiV, EXP-041-R3, cycle 0, task T1.
Mechanism: Web Client IDOs surface → toolbar Open (`#mgtoolbarbutton-1100`) → Select Form dialog.
Settings for every query: Filter By = Name; Case Sensitive unchecked; Starts With unchecked.
Entry: click Filter textbox → Control+a → browser_type with `slowly: true` (key events). Settled read after a 2-second wait.
Dialog refs in each snapshot: dialog `f1e841`, grid `f1e856`, Filter textbox `f1e877`.

Snapshot text below is copied from the accessibility snapshots of the dialog (only the dialog subtree).

## Dialog state at open (before any query in this task)

```
- dialog "Select Form" [ref=f1e841]
  - grid [ref=f1e844] / grid [ref=f1e856]
    - gridcell "FX_TestBlank01" / gridcell "FX_TestBlank01"
    - gridcell "FX_TestBlank02" / gridcell "FX_TestBlank02"
  - textbox [active] [ref=f1e877]: testblank
  - combobox [ref=f1e883]: Name
  - checkbox "Case Sensitive" [ref=f1e887]   (no [checked])
  - checkbox "Starts With" [ref=f1e892]      (no [checked])
```

Leftover filter from a previous session (not a result of this task's queries).

## C1 positive control — `SqlTables` (settled after 2 s)

```
- grid [ref=f1e856]
  - row: gridcell "Sql Tables" [ref=f1e905] | gridcell "SqlTables" [ref=f1e907]
  - row: gridcell "Sql Tables Constraint" [ref=f1e912] | gridcell "SqlTablesPrimaryKey" [ref=f1e914]
- textbox [active] [ref=f1e877]: SqlTables
- combobox [ref=f1e883]: Name
- checkbox "Case Sensitive" [ref=f1e887]   (no [checked])
- checkbox "Starts With" [ref=f1e892]      (no [checked])
```

Screenshot: `t1-02-positive-control-sqltables-settled.png`.

## T1 target — `FX_HelloWorld01` (exact; settled after 2 s)

```
- grid [ref=f1e856]            (no child rows)
- textbox [active] [ref=f1e877]: FX_HelloWorld01
- combobox [ref=f1e883]: Name
- checkbox "Case Sensitive" [ref=f1e887]   (no [checked])
- checkbox "Starts With" [ref=f1e892]      (no [checked])
```

Screenshot: `t1-03-target-FX_HelloWorld01-exact-settled-zero-rows.png`.

## T2 target — `HelloWorld` (case-preserved substring; Case Sensitive unchecked; settled after 2 s)

```
- grid [ref=f1e856]            (no child rows)
- textbox [active] [ref=f1e877]: HelloWorld
- combobox [ref=f1e883]: Name
- checkbox "Case Sensitive" [ref=f1e887]   (no [checked])
- checkbox "Starts With" [ref=f1e892]      (no [checked])
```

Screenshot: `t1-04-target-HelloWorld-substring-settled-zero-rows.png`.

## C2 lowercase infix control — `testblank` (settled after 2 s)

```
- grid [ref=f1e856]
  - row: gridcell "FX_TestBlank01" [ref=f1e919] | gridcell "FX_TestBlank01" [ref=f1e921]
  - row: gridcell "FX_TestBlank02" [ref=f1e926] | gridcell "FX_TestBlank02" [ref=f1e928]
- textbox [active] [ref=f1e877]: testblank
- combobox [ref=f1e883]: Name
- checkbox "Case Sensitive" [ref=f1e887]   (no [checked])
- checkbox "Starts With" [ref=f1e892]      (no [checked])
```

Screenshot: `t1-05-control-testblank-lowercase-infix-settled.png`.

Dialog closed afterwards with Cancel (ref `f1e898`, label "Cancel" verified in the snapshot before the click). No row was activated. The next Web Client snapshot contains no "Select Form" text.

## What these snapshots prove and do not prove

- Prove: in this session the Name filter narrowed the grid for `SqlTables` (two rows), for lowercase `testblank` (two infix rows), and returned no rows for `FX_HelloWorld01` and `HelloWorld`, with Filter By = Name and both checkboxes unchecked.
- Do not prove: the scope of any row (the dialog has no scope column); the total number of Forms in the store (no total is shown); absence in Site Default, Group or other users' scopes.
