# EXP-152: WM ASNs through ION (list, read, create) and the MethodParams shape

Status: **done, positive (observed).**
- `InvokeIONAPIMethod2` **MethodParams** is a JSON array of `{"Name","Value","Type"}`. `Type` is `path`, `query` or `body`.
- A **body** parameter with Content Type `application/json` creates ASNs in WM.
- 20 test ASNs, `FXTEST-0001`…`FXTEST-0020`, were created in wmwhse1.

Part of BLD-002 (ASN Portal; data source switched to WM).

**Approval** (operator, 2026-10-29, AskUserQuestion):
- WM is a **demo environment**, although its ID contains `SCE_PRD`.
- About 20 test ASNs are allowed: 1 probe first, then the rest.
- Approved calls:
  - `POST /{wh}/bodlist/showadvanceshipnoticelist`;
  - `GET /{wh}/advancedshipnotice…` and items;
  - `POST /{wh}/advancedshipnotice` (create).
- Every other write (including DELETE) stays unapproved.

**Account:** `anton.ramos@… | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, the operator's own account (Web Client header, `evidence/BLD-002/10-webclient-state.png`).

**Route:** the vendor form **Test ION API Invoke** (`IONAPITestInvoke`). It was used only to invoke; nothing was saved, and no Mongoose object was created or changed. Server 1, suite WM, Use SSO on.

## Steps and results
1. **ION API Methods** (read): `postAdvanceShipNotice` is already defined for path `/wmwebservice_rest/{warehouse}/advancedshipnotice` (`11`). Selecting it in the Test form does **not** fill a parameter template (`13`).
2. **IDO metadata** (read): the IDOs form lists vendor IDOs `IONAPIParameter` (Location, Name, Type, Value…) and `IONAPIBodyParameter`. That gave the shape to test.
3. **Shape test with a GET** on `/{warehouse}/advancedshipnotice/{receiptkey}`, params `[{"Name":"warehouse","Value":<WH>,"Type":"path"},{"Name":"receiptkey","Value":"FXNOSUCHKEY","Type":"path"}]`:
   - Result: **404 `{"message":"Receipt FXNOSUCHKEY not found"}`**.
   - Both path placeholders were substituted; a wrong warehouse would have given 500 "Schema … invalid".
4. **List** `POST …/bodlist/showadvanceshipnoticelist`, query params `serialkey=0`, `recordcount=200` as `Type: "query"`:
   - **200**, 111 ASNs, about 1.57 MB.
   - The list DTO leaves out `ext_udf_str*` and `suppliercode` (all null) but includes `receiptdetails`.
   - Storers seen: 00251, APB, DITO, MINISO, EFC, …
   - `type` values seen: 1, 7, delivery, STOCK, …
   - `status` values seen: 0, 3, 5, 9, 11, 15. Their meaning is **not looked up**.
5. **GET** the operator's own earlier test ASN 0000000387 (created today with their sample payload):
   - `ext_udf_str1..8` = `2, TEST, 2, 50, VIA DC, WAP, 2026-10-31, 4W`;
   - line `MNSSKU1` × 1 `EA`, packkey `STD`;
   - WM set `externreceiptkey = WMS0000000387` itself.
6. **Probe create** `POST …/advancedshipnotice`:
   - Params `[{"Name":"warehouse",…,"Type":"path"},{"Name":"body","Value":"<ReceiptDTO JSON string>","Type":"body"}]`, Content Type `application/json`.
   - **200**, receipt **0000000398**, `FXTEST-0001`, status 0, all 8 UDFs, 1 line (`16`).
   - Independent readback with `GET …/advancedshipnotice/externreceiptkey/FXTEST-0001` → 200, every field matches (`17`).
7. **Batch create** `FXTEST-0002…0020`, one POST at a time, stopping at the first non-200: **all 19 returned 200** (`18`).
8. **Verify** with the list (`recordcount=400`): 200, total 132, **20 unique FXTEST keys** (0001–0020), all status 0.

## The 20 test ASNs (wmwhse1, storer MINISO)
| ext key | receipt | delivery date | box qty (str3) | line qty |
|---|---|---|---|---|
| FXTEST-0001 | 0000000398 | 2026-10-30 | 2 | 1 |
| FXTEST-0002 | 0000000384 | 2026-10-21 | 4 | 12 |
| FXTEST-0003 | 0000000379 | 2026-10-24 | 25 | 17 |
| FXTEST-0004 | 0000000380 | 2026-10-20 | 16 | 15 |
| FXTEST-0005 | 0000000372 | 2026-10-15 | 8 | 41 |
| FXTEST-0006 | 0000000399 | 2026-10-04 | 10 | 23 |
| FXTEST-0007 | 0000000400 | 2026-10-17 | 23 | 19 |
| FXTEST-0008 | 0000000395 | 2026-10-26 | 13 | 44 |
| FXTEST-0009 | 0000000385 | 2026-10-03 | 26 | 19 |
| FXTEST-0010 | 0000000403 | 2026-10-24 | 21 | 16 |
| FXTEST-0011 | 0000000406 | 2026-10-12 | 30 | 14 |
| FXTEST-0012 | 0000000407 | 2026-10-28 | 8 | 1 |
| FXTEST-0013 | 0000000408 | 2026-10-04 | 16 | 45 |
| FXTEST-0014 | 0000000405 | 2026-10-29 | 12 | 14 |
| FXTEST-0015 | 0000000411 | 2026-10-27 | 27 | 20 |
| FXTEST-0016 | 0000000416 | 2026-10-15 | 20 | 4 |
| FXTEST-0017 | 0000000412 | 2026-10-19 | 10 | 14 |
| FXTEST-0018 | 0000000373 | 2026-10-29 | 1 | 4 |
| FXTEST-0019 | 0000000413 | 2026-10-20 | 1 | 30 |
| FXTEST-0020 | 0000000374 | 2026-10-13 | 25 | 15 |

**Values used:**
- Fixed, from the operator's working sample: supplier `3MWORKS CORP`, type `delivery`, SKU `MNSSKU1`/`Ea`, str2 `TEST`, str4 `50`, str5 `VIA DC`, str6 `WAP`, str8 `4W`.
- Varied: the delivery date (October 2026); str7 (need-by date, 1–3 days later); str1 helpers 1–4; str3 box quantity; the line quantity; the plate `TST-00NN` (0001 uses the sample's `123ABC`).
- WM receipt keys are not in sequence; WM assigns them.

Samples you can reuse:
- `docs/Api-Gateway/samples/wm-asn-create.sample.json`
- `docs/Api-Gateway/samples/ion-methodparams.sample.json`

## Not proven
- **The same calls from a C# form script.** Only the Test form route ran here. The C# route (`InvokeIONAPIMethod2`, parameter 5 = the same JSON array, parameter 6 = content type) is expected to behave the same, but is unverified.
- **Removal.** The test ASNs **remain in WM**. DELETE is not approved; removing them needs a new approval, or the operator removes them in WM.
- WM `status` code meanings; whether `expectedreceiptdate` without a time always becomes 11:00 UTC.
- The list endpoint's paging semantics for ASNs; EXP-151's serial-key range behavior is assumed but not rechecked.

## Evidence (`evidence/BLD-002/`)
| File | Shows | Caveat |
|---|---|---|
| `10-webclient-state.png` | account header | |
| `11-ion-api-methods.png` | ION API Methods form, empty Filter in Place | |
| `12-test-ion-invoke.png`, `13-test-invoke-postasn-selected.png` | the Test form; the method selected with no parameter template | |
| `16-probe-post-asn.png` | probe POST result | **the Parameters field shows the tenant warehouse ID; don't share it externally** |
| `17-probe-readback.png` | GET by external key | same caveat |
| `18-last-post-asn.png` | the last batch POST | same caveat |
