# EXP-073 T1 — Accessibility readbacks (worker-transcribed)

Run: cycle 0, task T1. Date 2026-10-13. Web Client tab (tab 1) selected; Designer (tab 0) not selected or acted on.
Transcribed from the browser's accessibility snapshots. The snapshot files named below are written by the Playwright MCP tool (`evidence/playwright/`), not by the worker. They are cited as the source of each readback.

## R1 — Preflight (after Form > Open > Select Form OK; no typing)

Source: untargeted snapshot returned inline after OK (no file). Screenshot `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png`.

| Item | Readback |
| --- | --- |
| Web Client tab list before any selection | Tab 0 Designer (`MGForm=FX_Orders` in URL, not selected); tab 1 Mongoose (`favoriteContext=SqlTables`, current) |
| Form tab | `tab [selected] "FX_Orders"`; close control `Close Panel FX_Orders`; tabpanel `FX_Orders` |
| Form tabs open before the open | FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables (none was FX_Orders) |
| Toolbar | `Save [disabled]`; `New` enabled; `Refresh` enabled; `FiP` not active |
| Grid (row header) | one row, `gridcell "1"` |
| Grid columns | `* Order Number`, `* Customer ID`, `* Item`, `Count` |
| Grid data row | `row "1 1"`: Order Number `1`, Customer ID blank, Item blank, Count `1` |
| Input captions | `Order Number:` (textbox, value `1`, focused); `Customer ID:` (combobox, blank, Open button); `Item:` (combobox, blank, Open button); `Count:` (textbox, value `1`) |
| Status bar | `Order Number (Object 1 of 1)` |
| Identity bar | `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar only; no credential) |
| Dialogs / banners | none |

## R2 — Gate: after one Filter in Place click (blank criteria, before F4)

Source: `evidence/playwright/page-2026-10-13T09-15-22-069Z.yml` (tool-generated), lines 67-68, 169-188.

| Item | Readback |
| --- | --- |
| Mode | `button "FiP" [active]`; status textbox `Filter in Place`; New, Refresh, Save disabled |
| Criteria inputs | `textbox "Order Number:"` (no value); `combobox "Customer ID:"` (no value); `combobox "Item:"` (no value); `textbox "Count:"` (no value) |
| Criteria row | no data gridcell values; no star text in the tree |

## R3 — Gate: after ONE F4 (2 s settle)

Source: `evidence/playwright/page-2026-10-13T09-15-32-289Z.yml` (tool-generated), lines 59-70, 144-192. Screenshot `evidence/EXP-073/gate-after-one-f4-empty-criteria.png`.

| Item | Readback |
| --- | --- |
| Mode | `button "FiP"` no longer active; New, Refresh enabled; Get More Rows disabled |
| Grid | one row `gridcell "1"` (row header); data row `row "1 1"`: Order Number `1`, Customer ID blank, Item blank, Count `1` |
| Order Number textbox | `"1"` (display value, not typed) |
| Customer ID combobox | blank |
| Item combobox | blank |
| Count textbox | `"1"` |
| Save | disabled |
| Status bar | `Order Number (Object 1 of 1)` |
| Screenshot | one row with blue new-row star (visible in the image); no second row |

## R4 — FX_CustomerID list, open (one click on the Open toggle)

Source: `evidence/playwright/page-2026-10-13T09-15-45-956Z.yml` (tool-generated), lines 176-187. Screenshot `evidence/EXP-073/list-fx-customer-id-open.png`.

| Option | Cell 1 (key) | Cell 2 (FX_Label text) |
| --- | --- | --- |
| 1 | FX001 | Factory test one |
| 2 | FX002 | Factory test two |

Status bar during the open list: `Customer ID (Object 1 of 1)`.

## R5 — FX_CustomerID list, closed by the Open toggle (one click, not Escape)

Source: `evidence/playwright/page-2026-10-13T09-15-54-913Z.yml` (tool-generated), lines 59, 176, 192. No listbox; no `[expanded]`.

| Item | Readback |
| --- | --- |
| Customer ID combobox | `combobox "Customer ID:" [active]`; no value text |
| Status bar | `Customer ID (Object 1 of 1)` |
| Save | disabled |

## R6 — FX_Item list, open (one click on the Open toggle)

Source: `evidence/playwright/page-2026-10-13T09-16-01-705Z.yml` (tool-generated), lines 183-197. Screenshot `evidence/EXP-073/list-fx-item-open.png`.

| Option | Cell 1 (key) | Cell 2 (FX_Description text) |
| --- | --- | --- |
| 1 | dumbbell | 45 pound iron |
| 2 | eggs | cage free |
| 3 | guitar | natural acoustic |

## R7 — FX_Item list, closed by the Open toggle (one click, not Escape)

Source: `evidence/playwright/page-2026-10-13T09-16-08-653Z.yml` (tool-generated), lines 59, 183, 192. No listbox; no `[expanded]`.

| Item | Readback |
| --- | --- |
| Item combobox | `combobox "Item:" [active]`; no value text |
| Status bar | `Item (Object 1 of 1)` |
| Save | disabled |

## Notes

- The Customer ID caption border is red in the Item-list screenshot. It is the required-field indicator on an empty required field after focus moved to Item. No message, alert or prompt appeared.
- Console counts reported by the tool moved from 7 errors / 3 warnings (start) to 9 errors / 4 warnings (after the lists). Console content was not inspected (brief: no console inspection).
- No value was typed, selected or committed. No row was entered. Order Number and Count were not edited.
