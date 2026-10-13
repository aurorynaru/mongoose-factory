# EXP-073 T5 — Clean close, reopen, and one empty-criteria recovery query (worker-transcribed)

Run: cycle 4, task T5. Date 2026-10-13. Web Client tab (tab 1) selected; Designer (tab 0) not interacted with. ONE Form-tab close. ONE reopen through Form > Open and Select Form. ONE Filter in Place and ONE F4. No New, no Save, no field edit, no criteria typed, no other Form closed. Recovery is same-session UI observation only.
Snapshot files named below are written by the Playwright MCP tool (`evidence/playwright/`), not by the worker. Readbacks are transcribed from the accessibility tree.

## T5-S0 — Tab list, selection, and pre-close confirmation

- `browser_tabs` list before any selection: tab 0 Designer (current, `MGForm=FX_Orders`); tab 1 Mongoose (`favoriteContext=FX_Orders`).
- `browser_tabs` select tab 1: succeeded.
- Fresh untargeted snapshot (inline):

| Item | Readback | Result |
| --- | --- | --- |
| Form tab | `tab [selected] "FX_Orders"`; `Close Panel FX_Orders` (f1e116) | Identity met |
| Save | `button "Save" [disabled] [ref=f1e28]` | Disabled, met |
| Dialogs | none | Met |
| Grid data row 1 | `gridcell "1"` (Order Number) / `FX001` / `dumbbell` / `2`; row selected | Met |
| Grid data row 2 | `gridcell "2"` / `FX002` / `eggs` / `1` | Met |
| Data rows | exactly two | Met |
| Status bar | `(Object 1 of 2)` (row 1 current) | Met |

All pre-close prerequisites matched, so the one close was performed.

## T5-S1 — ONE Form-tab close (`button "Close Panel FX_Orders"`, f1e116, one click)

- Tool result: no error, no timeout, no dialog.
- Tool-generated snapshot: `evidence/playwright/page-2026-10-13T09-26-37-092Z.yml`.
- Page URL afterwards: `favoriteContext=SqlTables` (the Sql Tables panel is shown again).
- Form tabs remaining (accessibility): `FX_Items`, `Property Classes`, `IDO Projects`, `IDOs`, `Sql Tables` (selected). The `FX_Orders` tab is removed.
- Prompts: **none.** No unsaved-change, save or discard prompt, no native dialog, no alert.
- Save state at close: disabled, consistent with a clean close.

## T5-S2 — ONE reopen: Form menu (`button "Form"`, f1e10, click) → `menuitem "Open"` (f1e407, click)

- Find `menuitem "Open"` (read-only) located the item before the click.
- Snapshot after the Open click: `evidence/playwright/page-2026-10-13T09-26-46-732Z.yml`.
- Select Form dialog: `dialog "Select Form" [ref=f1e457]`, one row `gridcell "FX_Orders"` (Caption) / `gridcell "FX_Orders"` (Name), filter textbox `FX_Orders` (pre-filled by Mongoose; not typed by the worker), Filter By `Name`, Case Sensitive and Starts With unchecked.
- Row click on the `FX_Orders` caption cell (f1e477): row selected.
- OK (f1e505, one click): dialog closed; URL `favoriteContext=FX_Orders`; no error; no second prompt.
- Snapshot after OK: `evidence/playwright/page-2026-10-13T09-26-55-497Z.yml`.

## T5-S3 — Reopened Form identity and pre-query state (inline / snapshot `page-2026-10-13T09-26-55-497Z.yml`)

| Item | Readback |
| --- | --- |
| Form tab | `tab [selected] "FX_Orders"` (f1e511); close control `Close Panel FX_Orders` |
| Tabpanel | `tabpanel "FX_Orders"` |
| Save | `button "Save" [disabled]` (f1e28) |
| FiP | not active |
| Grid | **one** data row (add-mode placeholder): `gridcell "3"` (Order Number), blank Customer ID, blank Item, `gridcell "1"` (Count) |
| Row header | `gridcell "1"` (the placeholder) |
| Order Number textbox | `textbox "Order Number:" [active]: "3"` |
| Customer ID combobox | blank |
| Item combobox | blank |
| Count textbox | `"1"` |
| Status bar | `Order Number (Object 1 of 1)` |
| Saved rows loaded | **no** (only the placeholder) |

Note: the add-mode placeholder shows Order Number `3`. In the T1 preflight (empty table) the same placeholder showed `1`. After the two saved rows, the reopened placeholder shows `3`. This is a displayed value only; its source is not established.

## T5-S4 — Reopened Form screenshot before querying

`evidence/EXP-073/reopened-form-before-query-addmode.png` (viewed): FX_Orders tab selected under the DEM identity bar; one starred add-mode row; Order Number `3` (field focused, value selected, displayed); Customer ID and Item blank; Count `1`; status `Order Number (Object 1 of 1)`; Save greyed. Does not prove the saved rows (none are loaded yet) or any database value.

## T5-S5 — ONE Filter in Place (`button "FiP"`, f1e39, one click) with blank criteria

- Snapshot `evidence/playwright/page-2026-10-13T09-27-06-156Z.yml`: `button "FiP" [active]`; status textbox `Filter in Place`; criteria textboxes `Order Number:` and `Count:` and comboboxes `Customer ID:` and `Item:` all **blank**; Save disabled.

## T5-S6 — ONE F4 (key press, no other key), 3 s settle

- Snapshot `evidence/playwright/page-2026-10-13T09-27-13-617Z.yml` (settled).

Settled readback (grid and inputs):

| Item | Readback |
| --- | --- |
| FiP button | `button "FiP"` (no `[active]`); Filter in Place exited |
| Save | `button "Save" [disabled] [ref=f1e28]`; no unsaved-change indication |
| Dialogs / alerts | none |
| Data rows | **exactly two**: a row `row [ref=f1e645]` and a row `row [ref=f1e656]` |
| Data row 1 | `gridcell "1"` (f1e646, Order Number), `gridcell "FX001"` (f1e648, Customer ID), `gridcell "dumbbell"` (f1e650, Item), `gridcell "2"` (f1e652, Count) |
| Data row 2 | `gridcell "2"` (f1e657, Order Number), `gridcell "FX002"` (f1e659, Customer ID), `gridcell "eggs"` (f1e661, Item), `gridcell "1"` (f1e663, Count) |
| Third data row | **none** |
| Placeholder row | **none** (the add-mode placeholder seen before the query is gone) |
| Order Number textbox (current row 1) | `textbox "Order Number:" [ref=f1e577]: "1"` |
| Customer ID combobox | `combobox "Customer ID:" [active] [ref=f1e586]: FX001` |
| Item combobox | `combobox "Item:" [ref=f1e596]: dumbbell` |
| Count textbox | `textbox "Count:" [ref=f1e606]: "2"` |
| Status bar | `Customer ID (Object 1 of 2)` |

Interpretation notes (observed):
- The status caption `Customer ID` is the focus-field prefix that the F4 settle left on the Customer ID combobox. No value was typed; the text `FX001` is highlighted because the focus landed there.
- The count token `(Object 1 of 2)` matches the current row (row 1) per the brief's rule (Object 1 of 2 or Object 2 of 2 by selected row).
- Star state: the accessibility tree does not expose stars; star absence is taken from the screenshot below.

## T5-S7 — Recovery screenshot (settled)

`evidence/EXP-073/recovery-query-after-reopen-two-rows.png` (viewed): row headers `1` and `2` **without** stars (plain numerals; row 1 current with the arrow); Order Number `1` greyed; Customer ID `FX001` (focused, highlighted); Item `dumbbell`; Count `2`; Save greyed; FiP off; status `Customer ID (Object 1 of 2)`.

Limit: the grid data cells (Order Number, Customer ID, Item and Count columns) are **clipped at the left edge of the image**. The values for both rows are supported by the accessibility readback (T5-S6) and are not proven by the image alone.

## T5-S8 — Summary against the pre-Save rows (accessibility readback; screenshot supplements)

| Recovered row | Order Number | Customer ID | Item | Count | Starred | Pre-Save value (T3/T4) | Match |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `1` | `FX001` | `dumbbell` | `2` | no (screenshot) | `1` / FX001 / dumbbell / `2` | Yes |
| 2 | `2` | `FX002` | `eggs` | `1` | no (screenshot) | `2` / FX002 / eggs / `1` | Yes |

## Observations (native responses)

- Close: no error; no prompt; tab removed; remaining Form tabs listed above.
- Reopen: Select Form OK once; no error; opened FX_Orders in add mode with a placeholder; no saved rows loaded before the query.
- Query: F4 returned exactly two data rows with the four values above; no placeholder; no third row; Save disabled; no unsaved-change indication; no dialog.
