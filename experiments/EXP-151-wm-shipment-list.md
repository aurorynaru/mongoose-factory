# EXP-151: list all wmwhse1 shipment orders on FX_ApiPage

Status: **done, positive (observed).** FX_ApiPage's **Load all** lists every shipment order in warehouse 1: **68 orders**, serial keys 1–69. The route is the page → `WSForm.invoke("FX_ListShipments", serialkey, recordcount)` → C# → `IONAPIMethods.InvokeIONAPIMethod2` (SSO) → `POST /{wh}/bodlist/showshipmentorderlist`.

Approval (operator, 2026-10-29, AskUserQuestion): "Approve that POST (Recommended)" for the one read-only list endpoint, and "Table on FX_ApiPage (Recommended)". Every other POST stays unapproved.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Designer was in User scope (status bar in `02`).

## Changes (FX_ only)
1. **FX_ApiProbe script** (`assets/FX_ApiProbe/FX_ApiProbe.cs.txt`):
   - New `FX_ListShipments(string serialkey, string recordcount)`, with private helper `FX_WmInvoke(verb, path, methodParams, contentType)`.
   - Both arguments must be digits only, with recordcount 1–200.
   - The warehouse is resolved server side: GET `/enterprise/facilities`, then the regex `"db_name":"([^"]*_wmwhse1)"`.
   - Path and verb are hard-coded, with an empty body.
   - The tenant warehouse name is replaced with `<WH>` in the output, and the output is capped at 200 KB.
2. **Asset `FX_ApiPage/index.html`**: a "Shipment orders (wmwhse1)" section.
   - Page size (1–25, default 25), **Load first page**, **Next page**, **Load all**.
   - A 9-column table: order key, extern key, storer, status, type, order date, delivery date, open qty, serial key.
   - The raw JSON is never displayed, because it carries contact names, addresses, phones and e-mails. The debug box shows only Code/Infobar/size for 2xx responses; error bodies are shown in full.

## Probes and corrections (in order)

| # | Observation | Correction |
|---|---|---|
| P1 | POST with empty `MethodParams` → **200** with an empty body. The response is a JSON array of order objects, about 5.7–6.3 KB each, and includes contact fields. | — |
| P2a | `serialkey=5&recordcount=5` returned serial keys 7–11, skipping 6. A page of 10 from 0 showed that serial key 6 exists, so the `serialkey` parameter is **exclusive**. | Next start = last serial key. |
| P3 | 10 rows = 62,863 chars, so 50 rows would pass the 200 KB cap. | Page size capped at 25. |
| P2b | Load all stopped at 49 orders, max serial 50. The page for 26–50 held 24 rows because one serial key in that range doesn't exist. **`recordcount` sets a serial-key range** (`serialkey < s ≤ serialkey + recordcount`), not a row count. | Step by the page size; end after 3 empty pages. |
| P2c | Range 76–100 → **404** `{"message":"No records found"}`. The planned single retry with `MethodParams = "{}"` then failed inside Mongoose: "Cannot deserialize … into type `Mongoose.Core.Common.RestMethodParameter[]` because the type requires a JSON array". So **`MethodParams` is a JSON array of query/path parameters, not the request body.** | Retry removed. The page treats 404 as an empty range. |

## Final result (`13`, `14`)
- **Load all** (page size 25): "68 orders loaded (end of list)". Last response: 404 "No records found" (3 empty ranges, 76–150). Took about 8 s.
- 68 rows, serial keys 1–69 (one gap), **no duplicate serial keys**.
- **Order `0000000166`** is present: storer MINISO, status 95, serial key 56, order date 2026-09-25. This matches the EXP-150 single GET.
- **By status:**

  | Status | Orders |
  |---|---|
  | 95 | 33 |
  | 55 | 11 |
  | 04 | 8 |
  | 06 | 4 |
  | 09 | 4 |
  | 92 | 3 |
  | 17 | 2 |
  | 68 | 2 |
  | 29 | 1 |

- **By storer:**

  | Storer | Orders |
  |---|---|
  | 00251 | 23 |
  | APB | 14 |
  | GLOBE | 10 |
  | CS | 6 |
  | EFC | 6 |
  | DITO | 4 |
  | MINISO | 2 |
  | DEMO | 2 |
  | CBK | 1 |

- The status code meanings are not looked up (unverified).

## Not proven
- **Completeness rule.** "3 empty ranges of 25 = end" assumes no gap of 75 or more serial keys. Any later orders past such a gap would be missed. A count endpoint, or a check against WM's own UI count, would prove the total.
- **Data freshness.** 68 was the count at 2026-10-29 ~16:3x; WM data can change.
- **Duplicate-order safety.** Rows are deduplicated by orderkey + serialkey.

## Incident (no effect)
- During runtime, Playwright's normal click on **Load all** was intercepted by the oversized **Run ION BG task** button from EXP-146, which overlaps the page.
- Playwright refused to click, so no background task was submitted.
- The page button was then triggered with `dispatchEvent('click')` on `#FX_BtnShipAll`, inside the page frame.
- **Follow-up:** move or remove the old EXP-145/146/148 buttons from FX_ApiProbe before more runtime work. They also hide the table in screenshot `13`.

## Evidence (`evidence/EXP-151/`)

| File | Shows |
|---|---|
| `01-script-compiled.png`, `02-script-saved.png` | first script build: 0 errors (16:22), form saved |
| `03-asset-editor-before-ok.yml`, `04-asset-saved.png` | first page version: readback equal, saved |
| `05-asset-editor-paging-fix.yml`, `06-asset-fix-saved.png` | exclusive-start paging fix |
| `07-asset-editor-range-paging.yml`, `08-asset-range-paging-saved.png` | range paging fix |
| `09-script-404-compiled.png`, `10-script-404-saved.png` | script without the `{}` retry: 0 errors (16:29), saved |
| `11-asset-editor-404.yml`, `12-asset-404-saved.png` | 404-as-empty page: readback equal (8811 chars), saved |
| `13-load-all-68-orders.png` | runtime: status "68 orders loaded (e…", Code 404 "Not Found" box. Most of the table is hidden by the old BG buttons. |
| `14-shipment-table-68-rows.yml` | **the full runtime table** (accessibility snapshot, 9 columns, includes 0000000166); no e-mail addresses |

## Cleanup additions
- `FX_ListShipments` and `FX_WmInvoke` in the FX_ApiProbe script.
- The shipment section in `FX_ApiPage/index.html`.
