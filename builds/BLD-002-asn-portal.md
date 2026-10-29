# BLD-002: ASN Portal (Dashboard and Create ASN)

Status: building: local preview done; WM create/list/read proven via the Test form (EXP-152); portal mapping questions open
Date: 2026-10-29
Account (checked at start): <not yet checked; checked before the first browser step> | Designer scope: <not yet checked>

## Goal
Build an ASN Portal that follows the operator's two mock screenshots (shared in chat on 2026-10-29):
1. **ASN Portal Dashboard:**
   - sidebar (Home, Create ASN, Manage ASN, Reports, User Guide);
   - header with Help, notifications and the vendor user;
   - 6 KPI cards: Total ASN for the month, Pending Approval, Approved, Cancelled, Received, No Show;
   - "Monthly VDR Trend" (stacked bars by VDR status plus a Total VDR line, per day, with a month picker);
   - "Validated Delivery Receipt (VDR) Status" donut with a Status | Count | Percentage table;
   - "Recent ASN Activity" table with "View All ASN".
2. **Create ASN:**
   - ASN Details: Activity Type*, Department Code*, Delivery Mode*, Location Code*, ASN Delivery Date*, Need by Date*, Box Quantity* plus SKU Details, each section with its own Save;
   - Transport Details: Truck Type*, Plate Number, Driver Name, No. of Helpers*, with Save;
   - Generate ASN;
   - Create / Upload ASN: Download Template, Upload ASN File, Box Details.

"Done" for this slice:
- the dashboard shows values computed from FX_ test rows;
- a new ASN can be created on Create ASN and then appears in Recent ASN Activity.

Out of this slice (operator decision, 2026-10-29): Manage ASN, Reports, User Guide, Upload/Download. Those menu items will show a "not built yet" page.

## Operator decisions (2026-10-29, AskUserQuestion)
- Data source: **new FX_ tables with fake rows**.
- First slice: **both screens**.
- Workflow: **local preview first** (assets run in a normal browser with a stub `WSForm`), then install.

## Objects (all new FX_, planned names; final list after questions)
| Object | Type | New FX_ or existing | Scope | Change |
|---|---|---|---|---|
| FX_ASNPortal | Form (Visual C#) | new | User | create |
| FX_ASNPortalControl | UserControl component | new | User (on the form) | create |
| FX_vAsnResult | Global persistent variable | new | tenant-wide global object | create |
| FX_ASNPortal/index.html, app.css, app.js | Web User Control Assets | new | tenant-wide global asset | create |
| FX_ASN table + IDO (ASN header) | SQL table / IDO | new | tenant-wide | create (fields after questions) |
| FX_ASN lookup tables/IDOs for the dropdowns | SQL table / IDO | new | tenant-wide | create if lookups are needed |
| FX_WriteProbe table + IDO | SQL table / IDO | new | tenant-wide | phase 0 probe only |

## Data source
FX_ tables only, with fake rows. Values taken from the mock as-is:
- VDR statuses: DC Received, Intransit, RDU Received, Completed.
- ASN statuses: Pending Approval, Approved, Cancelled, Received, No Show.
- Department "50 - Hardware"; Environment Code "WAP".
- ASN No. like `WAP000000010`; VDR No. like `VDR0012354`.

## Approvals required
| Non-FX_ object or tenant-wide operation | Why | Rollback | Operator approval |
|---|---|---|---|
| none planned: all objects are FX_ | | | n/a |

## Planned schema (proposed; created with the Data Maintenance wizard)
**FX_ASN** (alias `fxasn`):
- `FX_AsnId`: int, PK, AUTONUMBER().
- `FX_AsnNum`: text 20, empty for drafts.
- `FX_VdrNum`: text 20.
- `FX_EnvCode`: text 10.
- `FX_ActivityType`, `FX_DeptCode`, `FX_DeliveryMode`, `FX_LocationCode`, `FX_TruckType`: text 60.
- `FX_DeliveryDate`, `FX_NeedByDate`, `FX_CreatedDate`: date.
- `FX_BoxQty`, `FX_Helpers`, `FX_DocsPct`: int.
- `FX_PlateNum`: text 20.
- `FX_DriverName`: text 60.
- `FX_AsnStatus`, `FX_VdrStatus`: text 20.

**FX_ASNLookups** (alias `fxasnlk`):
- `FX_LookupId`: int, PK, AUTONUMBER().
- `FX_LookupType`: text 30 (ActivityType / DeptCode / DeliveryMode / LocationCode / TruckType).
- `FX_LookupValue`: text 60.
- `FX_SortOrder`: int.

## Progress log
### 2026-10-29: local preview (repo only, no tenant changes)
- Files written under `assets/FX_ASNPortal/`:
  - `index.html`: the single-file app. CSS and JS are inline, which is the proven single-file pattern, so the sibling-file question doesn't apply.
  - `index.flat.html`: the install copy.
  - `FX_ASNPortal.cs.txt` and `.flat.cs.txt`: the C# form script, **not compiled yet**.
  - `preview/stub.js`: a fake `WSForm` with generated test data.
  - `preview/build-preview.js`: builds `preview/index.preview.html`, which is served with `python -m http.server` (the browser blocks `file:`).
- Evidence:
  - `evidence/BLD-002/02-preview-dashboard-full.png` (dashboard, preview data);
  - `03-preview-create.png` (Create ASN);
  - `04-preview-generated.png` (after Generate).
- Preview checks (Playwright on the preview page):
  - Generate with an empty form lists all 9 required fields.
  - Save draft gives "Draft saved." and a draft id.
  - Generate on that draft gives "ASN WAP000000061 generated with status Pending Approval." (the stub's highest number was 60).
  - Home then shows the new row first, and the Total and Pending KPIs went up by 1.
  - No horizontal page overflow at 1280 px.
  - Fixed during preview: the chart-header icon was oversized, the last x-axis labels overlapped, and the success message was cleared by the reload.
- **What this does not prove:** anything in Mongoose. The stub only mimics the C# result shape.

### Proposed rules (need the operator's ok; currently applied)
- KPIs and charts count ASNs by **ASN Delivery Date** in the selected month, excluding Drafts. The trend and donut count only ASNs that have a VDR No. and a VDR status.
- Documents Completion shows "-" when empty. New ASNs leave it empty, because its meaning is unknown.
- Notifications bell: no count badge (there's no data source); clicking it says "not built yet".
- Draft Save checks only number formats; Generate checks every * field (client and server).

### Unknown / to probe in Mongoose
- P1: `IDOClient.UpdateCollection` insert and update from a form script (docs only).
- P2: the date text format UpdateCollection accepts (`FX_IdoDate` uses `yyyyMMdd HH:mm:ss.fff`, unverified), and the format LoadCollection returns (the page parses `yyyyMMdd` or `yyyy-MM-dd`).
- P3: a JSON string as a `WSForm.invoke` argument (string arguments are proven; JSON characters are not).
- P4: the `LIKE` filter and `DESC` order strings in LoadCollection.
- Test data: how to create about 60 fake ASN rows. A one-off seed method is proposed, versus typing them in the IDO form.

### 2026-10-29: pivot to WM as the data source (operator, AskUserQuestion)
- **Data source: switch the portal to WM** (warehouse 1 only).
  - The dashboard reads WM ASNs.
  - Create ASN posts an ASN to WM.
  - The FX_ASN tables are **not** created. Dropdown values may stay in an FX_ lookup table (to be decided).
- **Test ASNs in WM:** the operator confirmed the warehouse is a **demo environment** (although its ID contains "SCE_PRD"). About **20** test ASNs are allowed, each marked as test. Create 1 first as a probe, verify it, then the rest.
- **Approved WM calls:**
  - `POST /{wh}/bodlist/showadvanceshipnoticelist` (read list);
  - `GET /{wh}/advancedshipnotice/{receiptkey}` and the items GETs (read);
  - `POST /{wh}/advancedshipnotice` (create; spec body `ReceiptDTO`).
  - Every other POST/PUT/DELETE is still unapproved. That includes `/receipts` and the DELETE endpoints, so the test ASNs **can't be removed by us** without a new approval.
- **Sample payload from the operator.** The operator says it works; it has not been run here. The full warehouse ID is masked as `<WH>`:
  `whseid <WH>, storerkey MINISO, suppliercode "3MWORKS CORP", type "delivery", expectedreceiptdate 2026-10-29, vehiclenumber 123ABC, ext_udf_str1..8 = 2, TEST, 2, 50, VIA DC, WAP, 2026-10-31, 4W, receiptdetails [{storerkey MINISO, sku MNSSKU1, qtyexpected 1, uom Ea, externlineno 1}]`.
  All of these fields exist in the spec's `ReceiptDTO` / `ReceiptDetailDTO` (checked in `docs/Api-Gateway/SCE-WM-REST-API.json`).
- **Field mapping.** Confirmed by the operator ("yes in ext_udf_str1, ext_udf_str2 etc"):

  | WM field | Portal field |
  |---|---|
  | `ext_udf_str1` | No. of Helpers |
  | `ext_udf_str2` | Driver Name |
  | `ext_udf_str3` | Box Quantity |
  | `ext_udf_str4` | Department |
  | `ext_udf_str5` | Delivery Mode |
  | `ext_udf_str6` | Environment Code |
  | `ext_udf_str7` | Need by Date |
  | `ext_udf_str8` | Truck Type |
  | `expectedreceiptdate` | ASN Delivery Date |
  | `vehiclenumber` | Plate Number |
  | `type` | Activity Type |
  | `suppliercode` | Vendor |

- The earlier proposed rules 1–3 were accepted: count by delivery-date month without drafts; Documents "-"; bell with no count.
- **Open:**
  - how to send a JSON body through `InvokeIONAPIMethod2`. The docs say a parameter can be of type "body"; the `RestMethodParameter` JSON shape is unknown.
  - how WM ASN statuses and the VDR fields map to the portal's ASN/VDR statuses;
  - whether "Save = draft" still applies with WM.

### 2026-10-29: WM API probes and test data (EXP-152)
- The MethodParams shape is `[{Name, Value, Type: path|query|body}]`, and the body goes in with Content Type `application/json`. Observed through the Test ION API Invoke form.
- **20 test ASNs created in wmwhse1:** `FXTEST-0001…0020`, storer MINISO, status 0, delivery dates spread over October 2026. Verified by the list (20 unique) and a GET readback. The table is in EXP-152.
- **Design findings for the portal:**
  - The ASN list endpoint does **not** return `ext_udf_str*` or `suppliercode`. So Department, Box Qty, Helpers etc. need one GET per ASN, or come from another source. This changes how the dashboard and the Recent table load (open question).
  - WM assigns the ASN number (receiptkey, e.g. 0000000398). The operator's earlier "WAP + 9 digits" rule may not apply any more (open question).
  - The WM `status` codes need to be mapped to the portal's ASN statuses (Pending Approval, Approved, …) and VDR statuses (open; the codes aren't looked up).
- Still to probe: the same calls from the C# form script.

## Plan
1. Phase 0 probe: a C# `UpdateCollection` insert into FX_WriteProbe, read back with LoadCollection and the IDO form. **Unverified; probe first.**
2. Data layer: FX_ASN tables, IDOs and fake rows.
3. Local preview of the assets (repo only), compared with the mocks.
4. Mongoose install: Form, variable, UserControl, assets, C# methods. Save, close/reopen, readback.
5. Runtime checks (below).

Steps relying on **unverified** knowledge:
- C# IDO writes (`UpdateCollection`);
- a three-file asset (only two files are proven, FX_Login);
- whether an asset can load a sibling `.css` / `.js` by relative path (FX_Login's `app.js` include is the precedent; check how it is referenced).

## Open questions (blocking the items noted)
Answered by the operator on 2026-10-29 (AskUserQuestion):
- **Dropdowns** (Activity Type, Delivery Mode, Location Code, Truck Type): use **labelled test values for now**. Store them in FX_ lookup rows so the operator can replace them by editing rows, with no code change. Activity Type includes "Delivery", taken from the mock.
- **Save vs Generate:**
  - **Save = draft:** stores the ASN with no ASN No. and status Draft.
  - **Generate = submit:** validates every required field, assigns the ASN No., and sets the status to Pending Approval.
- **Numbering:** ASN No. = `WAP` + a 9-digit sequence, the next after the highest existing number (e.g. `WAP000000011`). VDR No. is empty at creation and assigned on receipt, which is out of this slice.
- **C# shape:** **separate methods** (one per action). No dispatcher.

Still open (not blocking the first steps):
- Box/SKU Details content. The SKU Details and Box Details buttons are out of this slice and show "not built yet".
- Vendor identity in the header. For now it shows the mock's values as **test data**: Vendor Code 12345, ABC Trading Inc. Real identity comes later (FX_LoginPortal or the Mongoose user).

## Acceptance checks
- AC-1: Designer readback after close/reopen: the asset files equal their repo copies (`compare-readback.js`), and the script compiles with 0 errors.
- AC-2: At runtime, the KPI cards, donut table and trend equal the counts computed from the FX_ test rows (the expected values will be written here once the rows exist).
- AC-3: At runtime, saving a valid new ASN gives a success message. The ASN appears in Recent ASN Activity after refresh, and the FX_ASN IDO read shows the row.
- AC-4: Missing required fields block the save with a visible message naming the fields.

## Rollback / cleanup
All objects are new FX_ objects (listed above). The cleanup list will be completed in the build record.
