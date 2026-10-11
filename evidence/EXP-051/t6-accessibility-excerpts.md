# EXP-051 T6 — accessibility excerpts (copied from the browser tool's snapshots; not edited)

Scope: FX_Items runtime tab (tab 1, Web Client). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## A. Pre-Save gate (fresh snapshot after tab select; Save enabled)

- Tab `FX_Items` selected (`f1e95`); tabpanel `FX_Items` (`f1e98`).
- Placeholder grid: `gridcell "1" [ref=f1e114]`, `gridcell "2" [ref=f1e119]`, `gridcell "3" [ref=f1e124]`.
- Form grid rows:
  - `row [ref=f1e153]`: `gridcell "dumbbell" [ref=f1e154]`, `gridcell "45 pound iron" [ref=f1e156]`, `gridcell "45.00" [ref=f1e158]`, `gridcell "EA" [ref=f1e160]`.
  - `row [ref=f1e164]`: `gridcell "guitar" [ref=f1e165]`, `gridcell "natural acoustic" [ref=f1e167]`, `gridcell "129.99" [ref=f1e169]`, `gridcell "EA" [ref=f1e171]`.
  - `row [ref=f1e175]`: `gridcell "eggs" [ref=f1e176]`, `gridcell "cage free" [ref=f1e178]`, `gridcell "6.99" [ref=f1e180]`, `gridcell "DZ" [ref=f1e182]`.
- Inputs: `textbox "Item:" [ref=f1e193]: eggs`; `textbox "Description:" [active] [ref=f1e202]: cage free`; `textbox "Cost:" [ref=f1e211]: "6.99"`; `combobox "Unit of Measure:" [ref=f1e220]: DZ`; `button "Open" [ref=f1e221]`.
- Status: `textbox [ref=f1e227]: Description (Object 3 of 3)`.
- Toolbar: `button "Save" [ref=f1e28]` (enabled, no `disabled`).
- Dropdown: no `listbox` in the tree; combobox not `[expanded]`.
- Dialogs: none.

## B. Immediately after the one Save click

- Toolbar: `button "Save" [disabled] [active] [ref=f1e28]` (disabled).
- Toolbar: System Notes, Documents, and Send email are now enabled (`[ref=f1e44]`, `[ref=f1e45]`, `[ref=f1e46]`; previously disabled).
- Tooltip: `tooltip [ref=f1e241]: Save`.
- Alerts / dialogs: none in the tree.
- Grid header: `columnheader "Item" [ref=f1e240]` (previously `* Item`; asterisk gone).
- Form grid rows: unchanged values (`dumbbell` / `45 pound iron` / `45.00` / `EA`; `guitar` / `natural acoustic` / `129.99` / `EA`; `eggs` / `cage free` / `6.99` / `DZ`).
- Placeholder grid: `gridcell "1" [ref=f1e219]`, `"2" [ref=f1e224]`, `"3" [ref=f1e229]` — the pre-Save row labels appear with plain numbers (no star text in the tree; stars read from the screenshot `t6-02`).
- Item input: `textbox "Item:" [ref=f1e193]: eggs` (greyed in `t6-02`).
- Status: `textbox [ref=f1e227]: Description (Object 3 of 3)`.

## C. Settled (3 seconds later, no action; `browser_find` "alert" → no matches)

- Save: `button "Save" [disabled] [active] [ref=f1e28]`.
- Grid header `columnheader "Item" [ref=f1e240]`; rows and values unchanged.
- Status: `Description (Object 3 of 3)`.
- No alert or dialog in the tree.

Limits: the accessibility tree does not show the new-row stars; the star state (cleared) is read from `t6-02` and `t6-03` only. The grid's Description, Cost, and UM cells for rows 1–2 are clipped in screenshots; the values above are from the tree. No database read was made.
