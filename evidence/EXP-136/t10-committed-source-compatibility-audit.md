# EXP-136 T10 - Committed-source compatibility audit (read-only)

Run: `R-20261026-062909-9GoC` · cycle 12 · task T10 · worker session `af60d575-f194-49f3-884d-56db958a42c9` · task_message_id `72166089-a9d4-4514-b070-13e56e23b596`.
Scope: repository reads only. No browser operation, no tab selection, no Designer, no Refresh, no application mutation, no change to either committed source, no acceptance-criteria change, no replacement hash.

## 0. Sources read

| Source | Path | Read |
| --- | --- | --- |
| Committed C# Form Script | `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` | full, 32 lines |
| Committed Web User Control page | `assets/FX_Inventory/index.html` | full, 71 lines |
| EXP-135 bindings and records | `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` | lines 10-32, 87, 90, 102, 134, 168-177 |
| EXP-132 bridge round trip | `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` | lines 23-26, 179, 198, 203, 221, 234-236 |
| EXP-130 section 7.2 and U-1 | `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md` | lines 148-159, 370-383 |
| EXP-128 Mock dashboard observations | `experiments/EXP-128-mock-inventory-portal-read-only-study.md` | lines 1737-1748, 2083, 2100, 2118, 2132 |
| EXP-134 IDO property types (carried) | `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` | lines 470-478 |
| Documentation | `docs/mongoose/guides/scripts.md` lines 47-50, 72-96; `docs/mongoose/guides/ido-dotnet-api.md` lines 86-107, 221-251, 285-302; `docs/mongoose/guides/ido-development.md` line 85 | read |
| Mock reference copies | `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` lines 18, 31-63; `evidence/EXP-128/assets/MockInventory_index.html.txt` line 3 (single minified line) | read |
| T9 inventory readback | `evidence/EXP-136/t9-inventory-source-preflight.md` | read (prior record) |

Operator-verified source hashes at commit `d4b99db`, carried unchanged and **not recomputed** by this worker:
- `assets/FX_Inventory/index.html`: SHA-256 `53baed0a9ce30a4c4d76bbd59eae9bb7ad531e29a3bc7b091aafb157633cd21d`
- `assets/FX_Inventory/FX_InventoryDashboard.cs.txt`: SHA-256 `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f`

AC-2 remains passed at the operator-verified source-identity level. This audit does not extend that to runtime compatibility.

## 1. IDO name literal

- C# line 15: `IDOClient.LoadCollection("FX_InventoryItems", properties, "", "", 100);`
- The first argument is the string literal `"FX_InventoryItems"`. **Yes, it is FX_InventoryItems**, character for character.
- The EXP-135 Primary Collection readback is `FX_InventoryItems` (EXP-135 record line 134 at T7 and line 174 at T4). The IDO identity was carried from EXP-134 and EXP-135, not re-read in T9 (IDO-identity query pending; `t9-inventory-source-preflight.md`).

## 2. Ordered property-list string and EXP-135 bindings

- C# line 14: `string properties = "FX_Item, FX_Description, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse";`
- The literal is passed as the second argument on line 15 (a local variable, not a null).

| Position in list | Property (C# line 14) | C# index and dictionary key (lines 21-26) | EXP-135 binding (object.*) | Match |
| --- | --- | --- | --- | --- |
| 0 | FX_Item | `PropertyValues[0]` → `"Item"` (line 21) | `FX_ItemGridCol` → `object.FX_Item` (line 175); Edit `FX_ItemEdit` → `object.FX_Item` (line 176) | Yes |
| 1 | FX_Description | `PropertyValues[1]` → `"Description"` (line 22) | `FX_DescriptionGridCol` → `object.FX_Description` (line 175) | Yes |
| 2 | FX_Location | `PropertyValues[2]` → `"Location"` (line 23) | `FX_LocationGridCol` → `object.FX_Location` (line 175) | Yes |
| 3 | FX_QuantityOnHand | `PropertyValues[3]` → `"QuantityOnHand"` (line 24) | `FX_QuantityOnHandGridCol` → `object.FX_QuantityOnHand` (line 175) | Yes |
| 4 | FX_ReorderLevel | `PropertyValues[4]` → `"ReorderLevel"` (line 25) | `FX_ReorderLevelGridCol` → `object.FX_ReorderLevel` (line 175) | Yes |
| 5 | FX_Warehouse | `PropertyValues[5]` → `"Warehouse"` (line 26) | `FX_WarehouseGridCol` → `object.FX_Warehouse` (line 175) | Yes |

- **Result: 6 of 6 names match exactly** (spelling, case and underscore). No discrepancy in names.
- The EXP-135 grid column order (`Item, Description, Warehouse, QuantityOnHand, ReorderLevel, Location`) differs from the C# request order. This does not change the mapping, because the C# mapping uses its own request order. It is recorded only.
- The EXP-135 bindings were read from accessibility text, not from a clipped screenshot (EXP-135 line 134 notes this).
- The HTML dictionary keys are read as `row.Item`, `row.Description`, `row.Location` (line 46 cell order), `row.Warehouse`, `row.QuantityOnHand` (line 40) and `row.ReorderLevel` (line 41). All six match the C# keys exactly.
- **Property types are not inferred from names.** The types recorded in EXP-134 (carried forward, not re-observed in EXP-135; EXP-135 line 172):
  - FX_Item: String 50, primary key, Required (EXP-134 lines 470-478).
  - FX_Description: String 255.
  - FX_Warehouse: String 100.
  - FX_Location: String 100.
  - FX_QuantityOnHand: Decimal 12; SQL `decimal(12,2)` (EXP-134 T13, cited at EXP-135 line 172).
  - FX_ReorderLevel: Decimal 12; SQL `decimal(12,2)`.
  - **Precision 2 is not verified at IDO level.** EXP-134 line 478 says the grid shows no Decimal precision column.
- **Relationship to PropertyValues[0..5]:** positional only. The C# does not look up names with `PropertyList.IndexOf` (the documented pattern at `docs/mongoose/guides/ido-dotnet-api.md` lines 290-300) or use the by-name indexer `response[row, "QtyOnHand"]` (line 300). The positional assumption is unverified (see section 6 and EXP-128 I-1).

## 3. LoadCollection arguments

- C# line 15, arguments in order:
  1. `"FX_InventoryItems"`, string literal.
  2. `properties`, local string (line 14).
  3. `""`, empty string literal (filter).
  4. `""`, empty string literal (orderBy).
  5. `100`, integer literal (recordCap).
- **Confirmed:** the filter and orderBy are empty-string literals, not null. The record cap is the integer literal 100.
- Documented meanings (repository docs, vendor-sourced; `ido-dotnet-api.md`):
  - Filter: "Default: Empty" (line 223-225).
  - OrderBy: "Default: Empty" (lines 231-233).
  - RecordCap: "0 returns all items; -1 uses the default cap of 200" (lines 226-230). So 100 is a documented row cap, not a count of rows.
  - The string overload `LoadCollection(idoName, propertyList, filter, orderBy, recordCap)` is listed on the IIDOCommands interface (lines 101-106). The example at lines 277-282 uses the same argument shape.
- **Limit:** the repository documents this overload on the `this.Context.Commands` receiver. The Form Script receiver `IDOClient` appears in `docs/mongoose/guides/scripts.md` line 50 only, as the access point for the IDOProtocol framework classes. The overload resolution for `IDOClient.LoadCollection` is therefore a candidate, not a verified Form Script signature. This matches the specialist's suggestion (candidate guidance only).
- The EXP-130 entry marked the meanings of these arguments UNK (EXP-130 line 383). The documentation now gives those meanings. This is documentation-level resolution, not a runtime test.
- The Mock dashboard used the same argument shape (`MockInventoryDashboard-form-script.cs.txt`, copy of the call at lines 31-37). Its runtime observation showed 14 rows (EXP-128 record lines 1737-1741), so the cap of 100 was not binding there. EXP-128 Q-6 (line 2132) records that cap behaviour was not tested.
- **Unchecked by this audit:** the call is not wrapped in try/catch and `response` is not null-checked (lines 15-17). A LoadCollection error would surface as an unhandled exception in the Form Script.

## 4. Conversion and serialization of quantity and reorder values

- C# lines 21-26 store `item.PropertyValues[k].Value` directly into `Dictionary<string, object>`. **There is no GetValue<T>(), decimal conversion, string conversion or cast.** The raw `.Value` is passed through.
- Line 29 serializes the list with `JsonConvert.SerializeObject(inventory)` (Newtonsoft, `using` at line 4, `//<Ref>Newtonsoft.Json.dll</Ref>` at line 6). The same `Ref` and `using` lines appear in the Mock copy (`MockInventoryDashboard-form-script.cs.txt` line 18), so this is the same dependency pattern the Mock dashboard used.
- The docs example for quantity uses `item.PropertyValues[x].GetValue<int>()` (`ido-dotnet-api.md` lines 292-294 and 300). **The committed code deliberately does not use it.** Using `GetValue<int>()` on a decimal-precision quantity would be a compatibility risk; the committed code avoids that by passing the raw value through.
- Docs statement (`scripts.md` lines 47-50, Framework 6 and later): data is "all string, in internal format", and type information "comes only from metadata". Consequence (**candidate, not verified in this environment**): `.Value` may be a string such as `"120.00"`, and the JSON would then carry strings. The HTML handles that case with `parseFloat` (lines 40-41).
- **Potential runtime concerns (not observed; no execution has occurred):**
  1. If `.Value` is null for a row, `JSON null` → `parseFloat(null)` = NaN → `|| 0` → quantity 0 → the row is shown as **Out of Stock** and counted (lines 40-42, 44). The page does not flag this as missing data.
  2. The HTML displays the parsed number, so `120.00` would display as `120` (line 46). AC-11 uses `120`, so this does not conflict with AC-11.
  3. There is no bounds check on `PropertyValues[k]` (lines 21-26). Fewer than six values would throw an index exception.
  4. `Items` is iterated by index (lines 17-19). This is correct, but the `item` variable adds no check.
  5. The record cap is 100 (documented as a cap). It does not affect the three expected records.

## 5. Bridge pattern: C# assignment and HTML calls, compared with EXP-132

### 5a. Committed bridge (observed in source)
- C# line 12: method `FX_LoadInventoryFromIDO()`, `void`, no parameters.
- C# line 29: `ThisForm.Variables("FX_vInventoryJson").Value = JsonConvert.SerializeObject(inventory);`
- HTML line 61: `WSForm.invoke("FX_LoadInventoryFromIDO", function () { ... });` (**no argument**; the callback takes no payload and does not read it).
- HTML line 62 (inside the invoke callback): `WSForm.getVarValue("FX_vInventoryJson", function (value) { ... });`
- HTML line 63: `try { render(value); } catch (e) { statusElement.textContent = "Could not read inventory data"; }`.
- Name matching (source level): `FX_LoadInventoryFromIDO` (HTML line 61) = C# line 12. `FX_vInventoryJson` (HTML line 62) = C# line 29. Both exact.

### 5b. EXP-132 observed round trip (one runtime run, same session)
- Form Script (`FX_BridgeTest`): `public string FX_Echo(string s)` with `ThisForm.Variables("FX_vEcho").Value = "FX_ECHO:" + s;` and `return "FX_ECHO:" + s;` (EXP-132 lines 124-125, 142).
- Asset `FX_Bridge/index.html`: `WSForm.invoke("FX_Echo", "bridge-probe", cb)`; the callback wrote the invoke result to `FX_BridgeStatus` and called `WSForm.getVarValue("FX_vEcho", ...)`, writing the value to `FX_BridgeOutput` (EXP-132 lines 179, 82).
- Observed (EXP-132 T9, lines 196-199): the runtime showed `0` in the status position and `FX_ECHO:bridge-probe` in the output position, by DOM order. This was one activation.
- `FX_vEcho` was created as Global True, Persistent True (EXP-132 lines 108-109 and T8-05, line 177).

### 5c. Comparison
| Element | Committed FX_ bridge | EXP-132 observed | Same? |
| --- | --- | --- | --- |
| Write in Form Script | `ThisForm.Variables(<name>).Value = <string>` | `ThisForm.Variables("FX_vEcho").Value = ...` | Yes (same accessor) |
| Read in asset | `WSForm.getVarValue(<name>, cb)` nested in invoke callback | Same nesting, `getVarValue("FX_vEcho")` | Yes |
| Invoke argument | **none** | one string argument `"bridge-probe"` | **No** |
| Method return | `void` | `string` | **No** |
| Invoke callback payload | not read | displayed `0`, not the return string | committed design does not depend on it |
| Payload | JSON array string (3 records expected) | short literal `FX_ECHO:bridge-probe` | Not comparable at this size |
| Variable scope | Global Persistent (EXP-130 section 7.2 metadata) | Global Persistent (EXP-132 T4/T8) | Same design-time metadata |

- **Demonstrated (observed once):** a string written by `ThisForm.Variables(<name>).Value` in a Form Script method was read back by `WSForm.getVarValue(<name>)` in the asset page, in the same session, with a visible literal (EXP-132 T9).
- **Not demonstrated:**
  - Whether `ThisForm.Variables` resolves to the Global object or to a Form-level temporary variable (EXP-130 U-1, unresolved; EXP-132 line 234). The docs route Global variables through `Application.Variables` (`scripts.md` lines 78-84) and Form variables through `ThisForm.Variables` (lines 94-95).
  - A no-argument `WSForm.invoke`, which the committed asset uses. The Mock source uses the same no-argument pattern (`MockInventory_index.html.txt`, line 3), and the Mock dashboard was observed rendering 14 rows at runtime (EXP-128 lines 1737-1741). EXP-128 line 1748 notes that the observation "does not prove which call produced the data". So the Mock runtime supports feasibility of the pattern, not the mechanism.
  - Persistence across sessions or after a Designer save (EXP-132 lines 234, 239).
  - Behaviour if the Form Script method throws. The committed page has no error callback and no timeout. The Mock copy has a 15-second `getVarValue` watchdog (`MockInventory_index.html.txt`, line 3; `15000`). The committed page shows `Loading...` indefinitely if the callback never fires, and it shows the previous or empty value if the method fails silently (`JSON.parse(json || "[]")`, line 36).

## 6. Index-mapping risk (Mock evidence)

- EXP-128 R-8 and I-1 (lines 2083, 2100): in the Mock dashboard runtime, **SKU005 and SKU012 showed Location and Warehouse values in each other's columns** (SKU005 Location `WH02`, Warehouse `C-02-05`; SKU012 Location `WH01`, Warehouse `D-01-03`). The other 12 rows showed the expected pattern. Cause **unresolved**: the data as stored, or the response order.
- The committed C# uses the same positional mapping as the Mock (`PropertyValues[2]` → Location, `PropertyValues[5]` → Warehouse). The Mock copy has the same mapping at lines 36-41 (`MockInventoryDashboard-form-script.cs.txt`), and the committed copy at lines 21-26.
- EXP-128 line 2118 records that the positional index-order assumption is untested.
- Relevance to FX_: the three FX_InventoryItems rows have not been read through the committed positional path. The EXP-135 Form grid is name-bound and showed warehouses `FX-WH-A`, `FX-WH-A`, `FX-WH-B` (T9 record). Row 1 Location (`FX-LOC-01`, from the Form detail pane) was read in T9. Rows 2 and 3 Location were not read. The positional path has therefore not been checked against the stored Location and Warehouse values.
- AC-11 does not list Location or Warehouse values explicitly. The rendered table still shows them, so a swap would be visible in the table.

## 7. HTML stock-status logic and literal output

- Line 42: `var status = qty <= 0 ? "Out of Stock" : (qty <= reorder ? "Low Stock" : "OK");`
- **The literal healthy label is `"OK"`.** The rendered label is `OK` unless another transformation changes it. Checked: CSS (lines 8-13) contains no text transform; `render` writes `td.textContent = value` unchanged (lines 46-48); no other status mapping exists in the file.
- **AC-11 requires `In Stock`** for FX-ITEM-001 (quantity 120, reorder 20). **Literal mismatch.** The brief does not define an equivalence between `OK` and `In Stock`.
- **The Mock reference uses `In Stock`.** The Mock copy (`MockInventory_index.html.txt`, line 3) returns `"Out of Stock"` for `quantity <= 0`, `"Low Stock"` for `quantity <= reorderLevel`, and `"In Stock"` otherwise. The Mock dashboard showed `In Stock`, `Low Stock` and `Out of Stock` badges at runtime (EXP-128 lines 1741-1742). **The committed FX_ asset differs from its Mock reference on the healthy label.** The record does not explain the change.
- Threshold logic equals AC-11 for the three rows (the thresholds are the same in the Mock copy):
  - FX-ITEM-001: 120 > 20 → healthy label (`OK` in committed; `In Stock` required).
  - FX-ITEM-002: 8 ≤ 10 → `Low Stock` (matches AC-11).
  - FX-ITEM-003: 0 ≤ 0 → `Out of Stock` (matches AC-11).
- Totals: `rows.length` = 3 (line 53); `units` = 120 + 8 + 0 = 128 (lines 43, 54); low = 1 (line 55); out = 1 (line 56). All match AC-11 except the healthy label.
- **Row order:** the C# passes `orderBy` as `""` (documented default: empty, `ido-dotnet-api.md` lines 231-233). The docs state that the IDO's primary-key order determines its default sort order (`ido-development.md` line 85). FX_Item is the primary key (EXP-134), so the default order is expected to be FX_Item ascending. This is an inference from documentation, not observed. The HTML preserves the array order (line 39, `forEach`) and does not sort. AC-11 lists the rows in ID order, but the brief does not state an ordering requirement. The audit does not add one.

## 8. Earlier observed bridge evidence (summary)

- EXP-132 T9 (observed, one run): name-matched write and `getVarValue` read in the same session; visible literal in the output position. Mechanism (Global versus Form storage) unresolved (EXP-130 U-1).
- EXP-128 T11 (observed, one look, another artifact set): the Mock dashboard rendered 14 rows and summary cards through the same invoke, `getVarValue` and positional chain. The mechanism was not separately verified (EXP-128 line 1748).
- EXP-128 R-8/I-1 (observed): Location/Warehouse swap in 2 of 14 Mock rows; cause unresolved.
- No FX_ runtime observation of the committed bridge exists. The EXP-136 runtime was not reached.

## 9. Limitations

- No execution: this audit is source reading and documentation reading. No runtime behaviour is claimed.
- Hashes: operator-verified, not recomputed. Byte identity of the committed files to the hashes is not independently established by this worker.
- The IDO identity (`FX_InventoryItems`, six properties and types) is carried from EXP-134 and EXP-135. The live identity query in T9 did not complete. Precision 2 is not verified at IDO level.
- The documented `LoadCollection` overload is vendor-documented on `this.Context.Commands`. Its application to `IDOClient` in a Form Script is not verified in this repository.
- The Global-versus-Form storage question (EXP-130 U-1) and the `ThisForm.Variables` route are unresolved.
- The EXP-128 Mock copies are evidence copies, not the live Mock artifacts. They were read for comparison only. No Mock artifact was opened or altered.
- The reason for the HTML `OK` label, and for the removal of the Mock's watchdog and auto-refresh, is not recorded in the repository.

## 10. Observed / not-verified classification

| Finding | Classification |
| --- | --- |
| IDO name literal = `FX_InventoryItems` (C# line 15) | observed (source) |
| Six property names match EXP-135 bindings and the C# list and keys | observed (source and EXP-135 readback) |
| Six property types (EXP-134) | carried, not re-observed in this task |
| Precision 2 at IDO level | not verified |
| Positional index mapping correct for the IDO response | unresolved (EXP-128 I-1; EXP-128 line 2118) |
| `""`, `""`, `100` meanings | documented (vendor docs, overload shape); IDOClient receiver unverified |
| No conversion of quantity or reorder values in C# (raw `.Value`) | observed (source) |
| Values are strings in internal format | documented candidate; not verified here |
| `parseFloat` conversion in HTML lines 40-41 | observed (source) |
| `ThisForm.Variables` / `getVarValue` name pattern, one run | observed (EXP-132 T9) |
| Global versus Form storage of `ThisForm.Variables` | unresolved (EXP-130 U-1) |
| No-argument invoke works for FX_ names | not verified (Mock runtime observed, EXP-128 T11) |
| Healthy label `OK` in committed HTML | observed (source, line 42) |
| AC-11 literal `In Stock` | required by brief; mismatch with committed source |
| Default row order = FX_Item ascending | documented inference; not observed |
| Totals 3 / 128 / 1 / 1 from the threshold logic | derived from source logic and T9 values; not runtime-verified |

## 11. Operator decisions required

- **D-A.** Retain `ThisForm.Variables("FX_vInventoryJson")` in the committed C# and limit the claims to the observed bridge round trip (EXP-132 T9), with Global versus Form storage unresolved. Alternatively authorize a runtime test of the `Application.Variables` route. The index-mapping risk (section 6) and the null-to-zero quantity behaviour (section 4) also belong to this decision.
- **D-B.** Either explicitly authorize an amended HTML source (healthy label `In Stock`, recorded with a new hash) or amend AC-11 to accept `OK`. Either way, record the decision as an operator disposition. The committed label differs from the Mock reference, so the reason for the difference should be recorded.
- **D-C.** Accept EXP-134 and EXP-135 plus the T9 readback as qualified IDO prerequisite evidence, given the six-property match in section 2. Alternatively require another supported read-only IDO inspection that also confirms the property types and the precision-2 setting.

## 12. Summary of checks

1. IDO name literal: `FX_InventoryItems` (yes).
2. Property list: six names, all match EXP-135 bindings; positional mapping consistent in the source; positional runtime correctness unresolved.
3. LoadCollection arguments: `""`, `""` (empty string literals) and `100` (integer literal); documented meanings consistent; IDOClient receiver unverified.
4. Conversions: no typed conversion in C#; raw values serialized to JSON; HTML parses with `parseFloat`; null-to-zero and index-exception concerns recorded.
5. Bridge: same write and read names and nesting as the observed EXP-132 round trip; no-argument invoke and Global storage differ or are unresolved.
6. HTML status: literal `OK` (line 42), not `In Stock`; no other transformation; Mock reference uses `In Stock`; AC-11 does not state a row order.
7. Hashes: operator-verified at `d4b99db`, not recomputed.
8. This file and the EXP-136 record are the only repository writes by this task.
