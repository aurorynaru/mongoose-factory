# EXP-051 T7 — accessibility excerpts (copied from the browser tool's snapshots; not edited)

Scope: Web Client (tab 1). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## A. Pre-close (snapshot after tab select; FX_Items runtime)

- Tab `FX_Items` selected: `tab [selected] [ref=f1e99]`, heading `FX_Items`, `button "Close Panel FX_Items" [ref=f1e101]`.
- Tabpanel `FX_Items` `[ref=f1e102]`.
- Placeholder grid: `gridcell "1" [ref=f1e118]`, `"2" [ref=f1e123]`, `"3" [ref=f1e128]` (plain numbers; no star text in the tree).
- Rows: `dumbbell / 45 pound iron / 45.00 / EA` (`f1e158`–`f1e164`); `guitar / natural acoustic / 129.99 / EA` (`f1e169`–`f1e175`); `eggs / cage free / 6.99 / DZ` (`f1e180`–`f1e186`).
- Inputs: Item `textbox [ref=f1e197]: eggs`; Description `[ref=f1e206]: cage free`; Cost `[ref=f1e215]: "6.99"`; Unit of Measure `combobox [ref=f1e224]: DZ`.
- Toolbar: `button "Save" [disabled] [active] [ref=f1e28]`.
- Status: `textbox [ref=f1e231]: Description (Object 3 of 3)`.
- Dialogs: none.

## B. After the one Close Panel click (`f1e101`)

- Tablist/tabpanel for FX_Items: absent from the tree.
- Form toolbar: Save, New, Delete, Refresh, FiP, Get More Rows, Export To Excel, Help Current Form all `[disabled]`; `Open` `[ref=f1e25]` and `Designer` enabled.
- Region `main [ref=f1e97]` empty; no status-bar textbox.
- No dialog or prompt in the tree.

## C. After the one toolbar Open click (`f1e25`)

- `dialog "Select Form" [ref=f1e237]`.
- Row `[ref=f1e256]`: `gridcell "FX_Items" [ref=f1e257]` (Caption), `gridcell "FX_Items" [ref=f1e259]` (Name).
- Filter textbox `[ref=f1e266]: FX_Items`; Filter By `combobox [ref=f1e272]: Name`; checkboxes `Case Sensitive` and `Starts With` unchecked.
- `button "OK" [ref=f1e285]`, `Cancel` `[ref=f1e287]`.

## D. After one click on the row's Name cell (`f1e259`)

- Row cell `gridcell "FX_Items" [active] [ref=f1e259]`.
- OK `[ref=f1e285]` still present; dialog still open.

## E. After one OK click (`f1e285`) — reopened runtime, immediate state (no query)

- Tab `FX_Items` `[selected] [ref=f1e292]`, heading `FX_Items` `[ref=f1e293]`, `button "Close Panel FX_Items" [ref=f1e294]`.
- Tabpanel `FX_Items` `[ref=f1e295]`.
- Placeholder grid: `gridcell "1" [ref=f1e311]` (one row only).
- Grid row: `row "0.00" [ref=f1e340]` with empty cells `[ref=f1e341]`, `[ref=f1e343]`, `[ref=f1e347]` and `gridcell "0.00" [ref=f1e345]`. No saved values in the grid.
- Inputs: Item `textbox [active] [ref=f1e358]` (empty); Description `[ref=f1e367]` (empty); Cost `[ref=f1e376]: "0.00"`; Unit of Measure `combobox [ref=f1e385]` (empty).
- Status: `textbox [ref=f1e231]: Item (Object 1 of 1)`.
- Toolbar: Save `[disabled] [ref=f1e28]`; New, Delete, Refresh, FiP, Export To Excel, Designer enabled; Get More Rows, System Notes, Documents, Send email, Help Current Form disabled.
- Dialog: none (the Select Form dialog is gone).

Limits: the accessibility tree does not show the star (star read from the screenshot `t7-03`). The reopened Form shows only the add-mode placeholder; no saved row is loaded in this state. This is not the final query and does not establish persistence.
