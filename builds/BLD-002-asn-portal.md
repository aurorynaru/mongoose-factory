# BLD-002: ASN Portal (Dashboard and Create ASN)

Status: building: page and C# switched to WM (repo only); next is the Mongoose install and the C# probe
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

### 2026-10-29: operator answers on the WM portal, and the code switched to WM
**Answers (operator):**
1. **ASN No. = the WM receipt number** (`receiptkey`, e.g. 0000000398). The "WAP + 9 digits" rule is dropped.
2. **Statuses:** the WM codes aren't mapped yet, so **every ASN shows as Pending Approval** for now. The raw WM code shows on hover. There is no VDR source yet, so the VDR charts show 0 with the note "No VDR data source yet."
3. **Save does nothing for now.** It shows a message pointing to Generate ASN. WM has no draft state.

**Code** (repo only; nothing installed in Mongoose):
- `FX_ASNPortal.cs.txt`, rewritten for WM:
  - `FX_LoadAsnData`: pages the ASN list, sorts by `adddate` descending, and reads ext_udf details with one GET each for the 6 most recent. The list leaves those fields out.
  - `FX_GenerateAsn(json)`: validates, builds the ReceiptDTO with the operator-confirmed mapping, and POSTs it with a `body` parameter.
  - The warehouse is resolved server side and never sent to the page.
  - Partner and line values are fixed **test values from the operator's sample**: MINISO / 3MWORKS CORP / MNSSKU1 × 1 Ea.
  - The dropdowns hold only the codes known to work: delivery / 50 / VIA DC / 4W.
- `index.html`:
  - Location Code is optional, with the note "Not sent to WM yet (no WM field mapped)".
  - Save only shows a message.
  - Generate creates the ASN and reloads the data.
  - The recent table keeps the server's order on ties (bug fixed).
- Preview stub updated. `evidence/BLD-002/20-preview-wm-dashboard.png` shows preview data only.

**Still open:**
- **Location Code** has no WM field.
- **Which ASNs the vendor should see.** Currently every wmwhse1 ASN, all storers.
- **ASNs without `expectedreceiptdate`** (about 70 % of the existing ones) are counted in no month.
- **Real vendor, SKU and line entry** (SKU Details) is not built.
- **The C# is not compiled or run yet** (unverified):
  - `InvokeIONAPIMethod2` with a body from C#;
  - `JArray`/`JObject` and the lambda `Sort` in the form-script sandbox.

### 2026-10-29: Mongoose install and runtime (operator approved "yes": install, compile/run C#, create one ASN)
Account anton.ramos@3mworks.com.ph (the operator's own), **User scope** (Designer status bar, evidence 24/52).

**Objects created (all new FX_, User scope unless noted):**
| Object | Kind | Evidence |
|---|---|---|
| Form `FX_ASNPortal` | Form, Script Language Visual C# | 23, 25, 39 |
| `FX_vAsnResult` | Global variable (Persistent True, Global True; tenant-wide global object) | 27, 28 |
| `FX_ASNPortal/index.html` | Web User Control Asset (tenant-wide) | 29–31, 45–47 |
| `FX_ASNPortalControl` | UserControl on the form, Control URL `FX_ASNPortal/index.html`, Size 100; 30 | 32–35 |
| C# form script | `FX_ASNPortal.flat.cs.txt` | 37, 52, 53, 54 |
| WM ASN `0000000414` | Test ASN in WM wmwhse1 (the 21st test ASN), created from the portal | 59, 60 |

**Steps and results:**
1. Form, C# language, variable, asset, control: each step saved. Close/reopen showed Visual C# and the control (39, 40). Asset readback `equal true` (31, 46).
2. C# compiled "Built with 0 errors" and saved (37, 38). The toast read "Form [FX_ASNPortal] and global object(s) were saved."
3. **Runtime finding 1: invoke before Form ready.** The first runtime showed "No response from FX_LoadAsnData after 20 s" (42). The network log showed no invoke after `forminit` (43, 44), while a manual invoke after load worked.
   - Fix: the page bootstrap waits for `MG.onReady` (outside Mongoose it loads at once).
   - Re-uploaded the asset (readback equal, 46) and saved (47). Auto-load then worked (48).
4. **Runtime finding 2: Json.NET date conversion.** Dates showed as "10/13/2026 11:00:00" and the October KPIs were 0 (48). Cause: Json.NET parses ISO strings into DateTime, and `(string)` prints them in the server culture.
   - Fix: `FX_ParseJson` with `DateParseHandling.None`.
5. **Designer finding: `using System.IO;` was rejected.** With that line added, ▶ gave "Cannot Save – the class name has changed (did you paste in the wrong script?)", twice (49–51).
   - The same code with the `using` removed and `new System.IO.StringReader(...)` written out compiled "Built with 0 errors at 7:59 AM" (53) and saved (54).
   - What the check matches is unknown. Observed once: adding `using System.IO;` triggers it; a fully qualified name does not.
6. Runtime after closing and reopening the form:
   - October 2026 Total and Pending = 24 (55);
   - recent-table dates read 13-Oct-2026 etc., with WAP and department 50 (56).
7. **Generate ASN from the portal** (57–59): test values delivery / 50 / VIA DC / 2026-11-05 / 2026-11-06 / box 3 / 4W / plate FXTEST-PLT1 / driver "FX Test Driver" / 1 helper.
   - Result: "ASN 0000000414 created in WM warehouse 1."
   - Home re-read the ASN from WM, and it is the first recent row (60): `0000000414 · WAP · 50 · 05-Nov-2026 · 3 · Pending Approval · 29-Oct-2026`. Box qty, department and environment come back from the ext_udf fields through the GET.

**Acceptance (WM pivot replaces the FX_-table checks AC-2/AC-3):**
- AC-1 met: script and asset readback.
- Runtime load met: KPIs non-zero and dates formatted.
- Create round trip met: Generate created the ASN, and it was re-read from WM.
- AC-4 (missing fields blocked with a message) was **not exercised at runtime** in this session.

### 2026-10-29: Location default, SKU Details, Box Qty field (operator request, change)
**Operator answers (AskUserQuestion):**
- Location Code default **STAGE**. Whether it is sent to WM was not stated, so it is **shown and preselected only, not sent**. The WM candidate is `receiptdetails[].toloc`.
- Box Qty moves to **`ext_udf_str1`**, and Helpers to **`ext_udf_str9`**. `ext_udf_str3` is no longer written.
- SKU: **typed, then checked in WM** with `GET /{wh}/items/{sku}/MINISO`. The WM spec in `docs/Api-Gateway/` has no endpoint that lists items.
- SKU lines: **multiple lines, UOM Ea**. Each line becomes one `receiptdetail` (`externlineno` 1..n), with at least 1 line and at most 50.

**Changes:**
- C#:
  - lookup `LocationCode=STAGE`;
  - `FX_CheckSku(sku)`;
  - `FX_ReadLines`, which validates the lines (SKU 1–50 characters with no `/ \ ? # %` and no leading `.`, which keeps it safe as a path segment; Qty 1–999999);
  - `FX_FindSku`, which is used for the check and again before the POST;
  - the new mapping.
- Page:
  - `data-default` on Location Code;
  - the SKU Details card (Add SKU line / Remove, a WM check when the SKU field loses focus, and line validation before Generate);
  - the SKU Details button scrolls to the card.

**Install:**
- Asset:
  - baseline readback `62-asset-baseline-before-sku.yml` (38,316 characters, the earlier version);
  - new content filled and read back **equal true** (43,506 characters);
  - saved: "Global object(s) were saved." (63).
- Script:
  - compiled "Built with 0 errors at 8:36 AM" (64) and saved: "Form [FX_ASNPortal] and global object(s) were saved." (65);
  - rollback copy of the previous script: `67-script-baseline-before-sku.cs.txt`.

**Runtime** (form reopened; account anton.ramos@3mworks.com.ph; evidence 66):
- Location Code shows STAGE, preselected, and it is the only option.
- `MNSSKU1` shows "Miniso SKU1": the WM item GET was **observed** from C# at runtime.
- `FXTEST-NOSKU` shows "Not found in WM."

**Not yet verified:**
- **Generate with the new mapping and multi-line details was not run.** It would create a 22nd test ASN in WM, which needs the operator's ok.
- The local preview covered the line checks and the reset after Generate (61, stub data only).
- ASNs created before this change keep the old layout, so on the dashboard their Box Qty column shows the helper count (from `ext_udf_str1`).

### 2026-10-29: script moved to the operator's Flex form ASNPORTAL (operator request)
The operator created the Flex form **`ASNPORTAL`** (User scope) because FX_ASNPortal (Normal form) renders the page in a fixed ~730×540 frame. The form has UserControl `userControl1_USER` (Pixel, 964×684, Flex attributes), with Control URL `FX_ASNPortal/index.html` (68).

- **Approval:** ASNPORTAL is a **non-FX_ object**. The operator explicitly asked me to "bring back the script" to it in this task. That is approval for this one form only.
- **State before** (69, 70): Script Language Visual Basic, script = empty VB template (`Public Class ASNPORTAL`).

**Change:**
1. Script Language set to Visual C#. A warning said the existing script would no longer compile; OK.
2. Script set to `FX_ASNPortal.flat.cs.txt` with **only the class line changed** to `public class ASNPORTAL : FormScript`. The working copy is `evidence/playwright/tmp/ASNPORTAL.flat.cs.txt`, made with sed from the repo file.
3. Compiled "Built with 0 errors at 8:52 AM" (71). Saved: "Form [ASNPORTAL] and global object(s) were saved." (72).

**Runtime** (form reopened, 73):
- the page fills the Flex form;
- `FX_LoadAsnData` loaded (October 2026: 24 total, 24 pending);
- the global variable `FX_vAsnResult` works from this form too.

**Finding: the Script Editor class must be named after the form.** The new C# template showed `public class ASNPORTAL`, matching the form name. This is the likely meaning of the "class name has changed" check seen earlier (49–51). Observed once; what exactly the check compares is still unproven.

FX_ASNPortal stays as it is and is now a second copy. The repo C# keeps class `FX_ASNPortal`, so for ASNPORTAL apply the class rename at install time.

### 2026-10-29: STAGE sent as toloc; one test ASN (operator: "yes on both")
**Approvals (operator):**
1. Generate one test ASN with the new mapping.
2. Send Location Code (STAGE) to WM as `receiptdetails[].toloc`.

**Changes:**
- C#:
  - every line gets `toloc` = Location Code when it is not empty;
  - the value must be in the LocationCode lookup (`FX_IsLookup`).
- Page: the location note now reads "Sent to WM as the receiving location of each SKU line."

**Installed:**
- **Asset:** baseline 43,506 characters (the SKU version). New content read back **equal true** (43,541 characters).
- **ASNPORTAL script:**
  - compiled "Built with 0 errors at 9:07 AM" (74);
  - saved (75).
- **FX_ASNPortal's script was not updated.** It still lacks toloc. ASNPORTAL is now the form in use.

**Test ASN** (ASNPORTAL, Web Client, account anton.ramos@3mworks.com.ph; 76–78):
- Input:
  - delivery / 50 / VIA DC / **STAGE**;
  - 2026-11-10 / 2026-11-11 / box 7 / 4W / FXTEST-PLT2 / "FX Test Driver" / 2 helpers;
  - lines `MNSSKU1 × 2` and `MNSSKU1 × 3` (both SKU checks showed "Miniso SKU1").
- Result: **"ASN 0000000426 created in WM warehouse 1."** (HTTP 200).
- Dashboard re-read from WM: `0000000426 · WAP · 50 · 10-Nov-2026 · Box Qty 7 · Pending Approval`. So `ext_udf_str1` = Box Qty round-trips.
- **Not independently read back yet:**
  - the 2 receipt lines;
  - `toloc = STAGE`;
  - `ext_udf_str9 = 2`.
  WM accepted the POST, but these fields are not shown on the dashboard. The next step is a GET `/{wh}/advancedshipnotice/0000000426` through Test ION API Invoke (EXP-152 route).
- Also seen: ASN **0000000421** (delivery 01-Oct-2026, created 29-Oct-2026) appeared, and the October total went from 24 to 25. **It was not created by this session.**

WM test data is now 20 FXTEST ASNs + 0000000414 + 0000000426.

**Cosmetic, open:** the control renders as a fixed ~730×540 px frame in the form, not the full form width (55). Size 100; 30 is too small or the control does not stretch. This needs a layout probe.

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
All Mongoose objects are new FX_ objects:
- Form `FX_ASNPortal` (User scope);
- Global variable `FX_vAsnResult`;
- asset `FX_ASNPortal/index.html`.

Removal needs an approved cleanup procedure. Delete Form Definition is never used (standing rule).

Rollback of the C# date fix: the previous script text is in git (commit 827cd8d, `FX_ASNPortal.cs.txt`).

WM test data: 20 FXTEST ASNs (EXP-152) plus `0000000414` (created from the portal). They stay in WM. Deleting them needs a WM DELETE, which is **not approved**.
