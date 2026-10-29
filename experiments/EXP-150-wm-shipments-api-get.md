# EXP-150: WM REST API (shipments) GET from the FX_ApiPage web page

Status: **done, positive (observed).** A shipment order was read through the WM REST API: `GET /{warehouse}/shipments/{orderkey}` returned 200 with the order and its lines. The route is the FX_ApiPage web page → `WSForm.invoke` → C# → ION SSO.

Request (operator, 2026-10-28): "can you try getting shipment order using shipments api". The calls are GET only, in line with the standing ION GET-only rule.

Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`05` header). The Designer was in User scope.

API reference: `docs/Api-Gateway/SCE-WM-REST-API.json` (Infor SCE WM API 1.0.0, ION suite WM, base `/wmwebservice_rest`). Shipment GET endpoints:
- `/{warehouse}/shipments/{orderkey}`: a single order (query `retrieveDescriptions`, `locale`);
- `/{warehouse}/shipments/externorderkey/{externorderkey}` (query `owner`, `shipto`);
- `/{warehouse}/shipments/{orderkey}/lines/{orderlinenumber}`;
- `/{warehouse}/shipments/lines/status`, and `/lines/status/{consignee}`;
- `/{warehouse}/shipments/scheduled_order_count`.

The order list endpoint is `POST /{warehouse}/bodlist/showshipmentorderlist`. It was **not called**, because POST is not approved.

## Changes (FX_ only)
1. **FX_ApiProbe script** (`assets/FX_ApiProbe/FX_ApiProbe.cs.txt`):
   - new `FX_CallWmGet(string path)`, which runs `InvokeIONAPIMethod2` with SSO, suite WM, verb **fixed to GET** and path `/wmwebservice_rest` + path;
   - it rejects paths that don't start with `/` or that contain `://` or `..`;
   - the result clip was raised to 8000 chars.
   - Compiled "Built with 0 errors" (`01`); saved (`02`).
2. **Asset `FX_ApiPage/index.html`:**
   - new path textbox (default `/enterprise/facilities`) and a **WM GET** button. They call `WSForm.invoke("FX_CallWmGet", path, cb)`.
   - Editor readback equal to `index.flat.html` (`03`); saved, with the toast "Global object(s) were saved." (`04`).

## Results (Web Client, form closed and reopened; the new textbox and button were present in the accessibility tree)

| GET path | Result |
|---|---|
| `/enterprise/facilities` | **200**. Six rows: ENTERPRISE (db_key 1) and five warehouses, db_key 2–6, with schemas `…_wmwhse1` … `…_wmwhse5`. The response also exposes internal DB server and database names; these are not copied here, and no screenshot was kept. |
| `/wmwhse1/shipments/lines/status` | **500**: "Schema 'wmwhse1' is invalid or not authorized for tenant …" |
| `/<db_name of db_key 2>/shipments/lines/status` | **200**: `linesShipped 0, linesPicked 13, linesNotPickedComplete 28` (`05`) |

- **Warehouse path parameter:**
  - The parameter is the facility's full **`db_name`**: `<tenant>_<resource>_wmwhseN`. The bare `wmwhseN` is rejected.
  - The browser code read it from the facilities response, so the tenant value was never typed by hand.
- **Single order** (operator supplied order key `0000000166`, 2026-10-28; no warehouse given):
  - The browser code tried each warehouse in facility order and stopped at the first 200. That was **wmwhse1**, on the first try.
  - `GET /<db_name wmwhse1>/shipments/0000000166` → **200** (`06`). Header fields:
    - externorderkey `WMS0000000166`, storerkey `MINISO`, whseid `wmwhse1`;
    - status `95`, type `0`, ohtype `1`;
    - totalorderlines 1, totalqty 25, openqty 0;
    - orderdate 2026-09-25, actualshipdate 2026-10-07.
  - The `orderdetails` array holds line `00001`.
  - `hrefs` gives the WM host URL for this record and for the storer.
  - **What status 95 means is not looked up.** It is likely "shipped complete", given openqty 0 and an actualshipdate, but that is unverified.
- **Notes:**
  - The full JSON is longer than the 8000-char clip (the result ends with `...`). Requesting a single line (`/shipments/{orderkey}/lines/{n}`) or parsing in C# would avoid the clip.
  - The response includes `addwho` / `editwho` (a person's e-mail address). It is not copied into this record, and `06` shows it.

## Evidence (`evidence/EXP-150/`)

| File | Shows |
|---|---|
| `01-script-compiled.png` | Built with 0 errors (15:40) |
| `02-script-saved.png` | "Form [FX_ApiProbe] and global object(s) were saved." |
| `03-asset-editor-before-ok.yml` | asset editor text, compare-readback equal true (2994 chars) |
| `04-asset-saved.png` | "Global object(s) were saved." |
| `05-wm-lines-status.png` | page: WM GET `/…_wmwhse1/shipments/lines/status` → Code 200, line counts |
| `06-order-0000000166.png` | page: WM GET `/…_wmwhse1/shipments/0000000166` → **Code 200**, order JSON (shows a user e-mail in `addwho`; flag before any push) |

## Cleanup additions
- `FX_CallWmGet` in the FX_ApiProbe script.
- The WM GET textbox and button in `FX_ApiPage/index.html`.
