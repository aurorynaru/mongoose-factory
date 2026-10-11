# EXP-051 T3 — accessibility excerpts (copied from the browser tool's snapshots; not edited)

Scope: FX_Items runtime tab (tab 1, Web Client). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Refs are from the snapshot taken at each point.

## A. Pre-dismissal (fresh snapshot after tab select; alert still open)

- Tab `FX_Items` selected (`f1e95`); tabpanel `FX_Items` (`f1e98`).
- Alert: `alertdialog "Infor Mongoose Application Development Framework - FX_Items" [ref=f1e200]`; text `generic [ref=f1e202]: BX is not a valid Unit of Measure`; `button "OK" [active] [ref=f1e204]`.
- Form grid row `row [ref=f1e143]`: `dumbbell` (`f1e144`), `45 pound iron` (`f1e146`), `45.00` (`f1e148`), `BX` (`f1e150`). The grid now shows BX in the Unit of Measure cell.
- Inputs: `textbox "Item:" [ref=f1e161]: dumbbell`; `textbox "Description:" [ref=f1e170]: 45 pound iron`; `textbox "Cost:" [ref=f1e179]: "45.00"`; `combobox "Unit of Measure:" [ref=f1e188]: BX`.
- Status: `textbox [ref=f1e195]: Unit of Measure (Object 1 of 1)`.
- Toolbar: `button "Save" [ref=f1e28]` (enabled, no `disabled`).
- Placeholder grid: `gridcell "1" [ref=f1e114]`.

## B. After the one OK click (alert dismissed)

- No `alertdialog` in the tree.
- Form grid row `row [ref=f1e143]`: `dumbbell`, `45 pound iron`, `45.00`, `BX`.
- Combobox `[active] [ref=f1e188]: BX`; Save `[ref=f1e28]` enabled; status `Unit of Measure (Object 1 of 1)`.

## C. After opening the dropdown (one Open click, `f1e189`)

- `combobox "Unit of Measure:" [expanded] [active] [ref=f1e188]: BX`.
- `listbox [ref=f1e206]` with `option [ref=f1e210]` (`cell "DZ" [ref=f1e211]`, `cell "Dozen" [ref=f1e212]`) and `option [ref=f1e213]` (`cell "EA" [ref=f1e214]`, `cell "Each" [ref=f1e215]`).

## D. After one click on the EA option (`f1e213`)

- Form grid row `row [ref=f1e216]`: `dumbbell` (`f1e144`), `45 pound iron` (`f1e146`), `45.00` (`f1e148`), **`gridcell "EA" [ref=f1e217]`**. The row's Unit of Measure cell now reads EA (committed to the grid).
- Combobox `[active] [ref=f1e188]: EA`.
- Listbox still in the tree; `option [selected] [ref=f1e213]` (EA); the dropdown was still visibly open in the screenshot `t3-02`.
- Save enabled; status `Unit of Measure (Object 1 of 1)`.

## E. After one Open toggle click (`f1e189`, dropdown closed)

- `combobox "Unit of Measure:" [active] [ref=f1e188]: EA`. No `listbox` or `option` in the tree (dropdown closed).
- Form grid row `row [ref=f1e216]`: `dumbbell`, `45 pound iron`, `45.00`, `gridcell "EA" [ref=f1e217]`.
- Inputs: Item `dumbbell` (`f1e161`); Description `45 pound iron` (`f1e170`); Cost `45.00` (`f1e179`); Unit of Measure `EA` (`f1e188`).
- Toolbar: `button "Save" [ref=f1e28] [cursor=pointer]` (enabled).
- Status: `textbox [ref=f1e195]: Unit of Measure (Object 1 of 1)`.
- Placeholder grid: `gridcell "1" [ref=f1e114]`; the star is not in the tree (read from `t3-03`).
- No alert, prompt, or dialog in the tab.

Limits: the accessibility tree does not show the blue new-row star; the star is read from the screenshots only. The grid's Unit of Measure cell is EA in the tree, but the screenshot clips the grid. No database read was made. The combobox editor remains focused (`[active]`); the commit is evidenced by the grid cell only, not by a focus move.
