# EXP-051 T2 — accessibility excerpts (copied from the browser tool's snapshot output; not edited)

Scope: FX_Items runtime tab (tab 1, Web Client). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Refs are from the snapshot taken at the point named.

## A. Baseline before entry (snapshot after tab select, before any entry)

- Tab `FX_Items` selected (`f1e93`); tabpanel `FX_Items` (`f1e96`).
- Grid (placeholder): `gridcell "1" [ref=f1e112]`. Star not in the tree (visible only in `t2-01`).
- Form grid row: `row "0.00" [ref=f1e141]`; cells empty (`f1e142`, `f1e144`, `f1e148`), Cost `gridcell "0.00" [ref=f1e146]`.
- Inputs: Item `textbox "Item:" [ref=f1e159]` empty; Description `textbox "Description:" [ref=f1e168]` empty; Cost `textbox "Cost:" [ref=f1e177]` value `0.00`; Unit of Measure `combobox "Unit of Measure:" [active] [ref=f1e186]` empty; `button "Open" [ref=f1e187]`.
- Toolbar: `button "Save" [disabled] [ref=f1e28]`.
- Status: `textbox [ref=f1e193]: Unit of Measure (Object 1 of 1)`.
- No dialog in the tab.

## B. Draft after FX_Item, FX_Description, FX_Cost, FX_UM entry (snapshot before Save)

- Grid placeholder: `gridcell "1" [ref=f1e112]` (one row).
- Form grid row: `row` with a committed `dumbbell`, `45 pound iron`, `45.00` (refs `f1e202`, `f1e204`, `f1e206`); Unit of Measure cell empty (`f1e148`) because the combobox has not committed.
- Inputs: `textbox "Item:" [ref=f1e159]: dumbbell`; `textbox "Description:" [ref=f1e168]: 45 pound iron`; `textbox "Cost:" [ref=f1e177]: "45.00"`; `combobox "Unit of Measure:" [active] [ref=f1e186]: BX`.
- Toolbar: `button "Save" [ref=f1e28] [cursor=pointer]` (enabled).
- Status: `Unit of Measure (Object 1 of 1)`.
- No dialog before Save.

## C. After the one toolbar Save click (snapshot taken immediately after)

- Native alert: `alertdialog "Infor Mongoose Application Development Framework - FX_Items" [ref=f1e210]`; text `generic [ref=f1e212]: BX is not a valid Unit of Measure`; `button "OK" [active] [ref=f1e214]`.
- Save tooltip `Save` (`f1e209`) shown.
- Form grid row `row [ref=f1e207]`: `gridcell "dumbbell" [ref=f1e202]`, `gridcell "45 pound iron" [ref=f1e204]`, `gridcell "45.00" [ref=f1e206]`, `gridcell "BX" [ref=f1e208]`.
- Grid placeholder: `gridcell "1" [ref=f1e112]` (still one row).
- Inputs unchanged: Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; combobox `BX`.
- Toolbar: `button "Save" [ref=f1e28] [cursor=pointer]` (**not** disabled).
- Status: `Unit of Measure (Object 1 of 1)`.
- The alert was NOT dismissed (brief: do not dismiss a validation response in T2).

Limits: the accessibility tree does not show the blue new-row star; the star is read from `t2-01` and `t2-03` only. No database read was made.
