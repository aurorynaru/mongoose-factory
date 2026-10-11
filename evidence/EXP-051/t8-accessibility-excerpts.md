# EXP-051 T8 — accessibility excerpts (copied from the browser tool's snapshots; not edited)

Scope: Web Client (tab 1). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## A. Pre-query baseline (fresh snapshot; add-mode placeholder)

- Tab `FX_Items` `[selected] [ref=f1e93]`; tabpanel `FX_Items` `[ref=f1e96]`.
- Grid: `gridcell "1" [ref=f1e112]` (one row; star not in tree, read from `t8-01`).
- Form grid: `row "0.00" [ref=f1e141]`, empty cells, `gridcell "0.00" [ref=f1e146]`.
- Inputs: Item `textbox "Item:" [active] [ref=f1e159]` empty; Description `[ref=f1e168]` empty; Cost `[ref=f1e177]: "0.00"`; Unit of Measure `combobox [ref=f1e186]` empty.
- Toolbar: `button "Save" [disabled] [ref=f1e28]`.
- Status: `textbox [ref=f1e193]: Item (Object 1 of 1)`.
- Dialogs: none.

## B. After Filter in Place (one click, `f1e39`; FiP `[active]`)

- Status: `textbox [ref=f1e193]: Filter in Place`.
- Grid header `columnheader "Item" [ref=f1e205]` (asterisk absent in this mode).
- Criteria: Item `textbox [ref=f1e159]` (no value); Description `textbox [ref=f1e168]` (no value); Cost `textbox [ref=f1e177]` (no value); Unit of Measure `combobox [ref=f1e186]` (no value). All four criteria inputs blank.
- Toolbar: New, Delete, Refresh, Get More Rows, Export To Excel, System Notes, Documents, Send email `[disabled]`; FiP `[active] [ref=f1e39]`.
- Tab `FX_Items` shows the filter icon (screenshot `t8-02`).

## C. After one F4 (settled; no further action)

- Status: `textbox [ref=f1e193]: Description (Object 1 of 3)`.
- Toolbar: `button "Save" [disabled] [ref=f1e28]`; New, Delete, Refresh, FiP enabled again (FiP exited).
- Placeholder grid: `gridcell "1" [ref=f1e227]`, `gridcell "2" [ref=f1e233]`, `gridcell "3" [ref=f1e238]` (three rows, plain numbers; no starred placeholder row).
- Form grid rows (accessibility, full text):
  - `row [ref=f1e242]`: `gridcell "dumbbell" [ref=f1e243]`, `gridcell "45 pound iron" [ref=f1e245]`, `gridcell "45.00" [ref=f1e247]`, `gridcell "EA" [ref=f1e249]`.
  - `row [ref=f1e253]`: `gridcell "eggs" [ref=f1e254]`, `gridcell "cage free" [ref=f1e256]`, `gridcell "6.99" [ref=f1e258]`, `gridcell "DZ" [ref=f1e260]`.
  - `row [ref=f1e264]`: `gridcell "guitar" [ref=f1e265]`, `gridcell "natural acoustic" [ref=f1e267]`, `gridcell "129.99" [ref=f1e269]`, `gridcell "EA" [ref=f1e271]`.
- Current-record inputs (row 1): Item `textbox [ref=f1e159]: dumbbell`; Description `textbox [active] [ref=f1e168]: 45 pound iron`; Cost `textbox [ref=f1e177]: "45.00"`; Unit of Measure `combobox [ref=f1e186]: EA`.
- Dialogs: none.

Row order in the grid is dumbbell, eggs, guitar. The insertion order was dumbbell, guitar, eggs. The order is query order; the cause (no sort, or a default sort) is not established.

## D. After row 2 header click (`f1e233` in the grid; read-only record selection)

- `gridcell "2" [active] [selected] [ref=f1e233]`.
- `gridcell "eggs" [selected] [ref=f1e254]`.
- Inputs: Item `textbox [ref=f1e159]: eggs`; Description `textbox [ref=f1e168]: cage free`; Cost `textbox [ref=f1e177]: "6.99"`; Unit of Measure `combobox [ref=f1e186]: DZ`.
- Status: `textbox [ref=f1e193]: (Object 2 of 3)`.
- Save `[disabled]`.

## E. After row 3 header click (`f1e238`; read-only record selection)

- `gridcell "3" [active] [selected] [ref=f1e238]`.
- `gridcell "guitar" [selected] [ref=f1e265]`.
- Inputs: Item `textbox [ref=f1e159]: guitar`; Description `textbox [ref=f1e168]: natural acoustic`; Cost `textbox [ref=f1e177]: "129.99"`; Unit of Measure `combobox [ref=f1e186]: EA`.
- Status: `textbox [ref=f1e193]: (Object 3 of 3)`.
- Save `[disabled]`.
- Dialogs: none.

Limits: the star is not in the accessibility tree; star absence in the settled state is read from `t8-03` and `t8-04`. The status text after a row-header click has no caption prefix (focus is on the grid), and the record number is the current-record position. No database read was made.
