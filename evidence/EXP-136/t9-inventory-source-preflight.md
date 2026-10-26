# EXP-136 T9 - Final inventory-source preflight and prerequisite-document review (read-only)

Run: R-20261026-062909-9GoC, cycle 10, task T9. Date: 2026-10-26. Mode: LEARNING MODE.
Scope: read-only. No variable, asset, Form, component, C# method, event, Save, Portal reload, dashboard Refresh Data, session recovery, browser JavaScript or inventory write. One read-only Refresh was performed on the existing runtime `FX_InventoryEditor` Form (not the dashboard), within the brief's "supported read-only load" allowance.

## 1. Operator-accepted results carried (not repeated)

- AC-1 absence results (T4 Global Objects, T4 Web Assets, T6 Select Form for `FX_InventoryDashboard`): accepted by the operator as sufficient. Full-list coverage of the Global Objects list and the Web Assets tree was not independently proven; that limitation is carried. Not repeated in T9.
- AC-2 source identity: operator-verified SHA-256 at commit d4b99db (`index.html` 53baed0a9ce30a4c4d76bbd59eae9bb7ad531e29a3bc7b091aafb157633cd21d; `FX_InventoryDashboard.cs.txt` 3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f). **Not recomputed by the T9 worker.** T9 re-read the files for content only (section 4).

## 2. Browser identity established at the start of T9

Tab list (read-only, before any selection):

| Index | URL (abridged) | Identity |
| --- | --- | --- |
| 0 (current after select) | `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87` | Infor OS portal, Mongoose Web Client frame (portal Web Client) |
| 1 | `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx?tenant=...&configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM...` (no `MGForm`) | T8 fresh Designer (the only Designer tab; launched in T8; identified by URL and title) |

The T8 Designer was not selected, clicked, saved or closed in T9. The indices above were read from the list and matched by URL, not inherited.

## 3. Live account and configuration (step 4)

- Tab 0 selected after one list; one fresh snapshot.
- Mongoose frame header button: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- No session-expired modal, no sign-in form, no notification banner, no Form open at snapshot time. Save disabled. Console `19 errors, 10 warnings` (unchanged counter from T8; not diagnosed).
- Session recovery in T9: 0.

## 4. Reference review inventory (step 2)

| Reference | Path | Read in T9 | Limit |
| --- | --- | --- | --- |
| Experiment record | `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` | Full (T1 to T8 checkpoints) | Read before T9 start |
| AGENTS.md | `AGENTS.md` | Provided in the session instruction context (full) | Not re-read from disk |
| Recipe: session expiry | `recipes/session/session-expiry-and-stale-designer.md` | Full | None |
| Recipe: basic Form | `recipes/forms/create-basic-form.md` | Full (verified recipe, User scope, Save Template unchecked, Finish persists) | None |
| EXP-130 sections 1-11 | `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md` lines 296-435 | Full for sections 1-8, 9-11 | Sections 12-23 not read in T9 |
| EXP-132 | `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` lines 1-190 | Lines 1-190 (status, T1 to T8) | Lines 190+ (T9 to T11) not read in T9 |
| EXP-133 | `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` lines 1-40 | Header and approved-source findings only | Body from line 41 not read in T9 |
| EXP-134 | `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md` lines 1-120 | Status header and T1 preflight | Body from line 121 (T2 to T16) not read in T9 |
| EXP-135 | `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` lines 1-210 | Status header and T1 to T12 (through the Gates section) | None material |
| Committed C# source | `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (32 lines) | Full read, content only; not modified | Hash not recomputed |
| Committed HTML source | `assets/FX_Inventory/index.html` | Grep for bridge and element IDs; lines 30-55 read; not modified | Full byte content not re-read in T9; hash not recomputed |
| Mongoose scripting guide | `docs/mongoose/guides/scripts.md` lines 70-100 | Full section on global and form variable access | None |

Prerequisite-relevant findings from the review (source-level; nothing modified):

1. **Global variable access route (material, unresolved).** The committed C# writes `ThisForm.Variables("FX_vInventoryJson").Value` (source line 29). The scripting guide (`docs/mongoose/guides/scripts.md` lines 76-84) states that **Global variables are accessed through `Application.Variables`** and form variables through `ThisForm.Variables`. EXP-130 section 8 and the EXP-132 T3 and T4 notes already flag runtime resolution of `ThisForm.Variables` for a Global variable as unresolved (EXP-130 U-1). `FX_vInventoryJson` is Global (brief), so the committed source may not write the intended variable at runtime. This does not stop T9. It is a candidate failure point that the operator should decide on before creation (the brief forbids changing the committed source without operator approval).
2. **Bridge mapping (verified by reading).** The C# property list `FX_Item, FX_Description, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse` maps to `PropertyValues[0..5]` as Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse. The order is consistent. The `LoadCollection` arguments `""`, `""` and `100` are unknown in meaning (EXP-130 section 7.2 UNK); not changed.
3. **Status label mismatch with AC-11 (material for acceptance, not for creation).** The HTML emits `OK` for healthy stock (`index.html` line 42: `qty <= 0 ? "Out of Stock" : (qty <= reorder ? "Low Stock" : "OK")`). AC-11 expects FX-ITEM-001 to show `In Stock`. The totals logic matches AC-11 (units 128, low 1, out 1). Operator disposition needed on whether the acceptance text or the committed source governs. The source must not be changed without approval.
4. **Element IDs.** The HTML uses `FX_InvTotalItems`, `FX_InvTotalUnits`, `FX_InvLowStock`, `FX_InvOutOfStock`, `FX_InvTableBody` and button `FX_InvRefresh` (`Refresh Data` label). The four cards and the 7-column table (Item, Description, Warehouse, Location, Quantity, Reorder Level, Status) are present.
5. **Mock-name residue.** The committed C# (full read) contains no Mock object reference. The HTML was grepped only for the bridge, card, table and Refresh strings in T9, so its absence of Mock strings is not established here.

## 5. Source IDO and record readback (step 5)

**Method used (read-only, supported Web Client surfaces):**

- Select Form (toolbar Open) with filter `FX_InventoryEditor`: exactly one row (Name and Caption `FX_InventoryEditor`). Row selected by its Name cell, OK once. The runtime Form opened (URL `favoriteContext=FX_InventoryEditor`). Header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Pre-Refresh state: status `(Object 1 of 1)`, one blank add-mode placeholder row, six blank inputs, Save disabled (screenshot `t9-runtime-fxinventoryeditor-pre-refresh.png`).
- One Refresh (toolbar, `f1e29`). Post-Refresh state: `(Object 1 of 3)`, three committed rows, Save disabled, no dialog. (screenshot `t9-runtime-fxinventoryeditor-post-refresh-readback.png`).

**Live values read after the single Refresh (T9, observed):**

| Row | Item (key) | QuantityOnHand | ReorderLevel | Warehouse | Description | Location | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX-ITEM-001 | 120.00 | 20.00 | FX-WH-A | `FX test widget` | `FX-LOC-01` | grid cells (find) for the four visible columns; description and location from the row detail (screenshot) |
| 2 | FX-ITEM-002 | 8.00 | 10.00 | FX-WH-A | not read (grid column clipped) | not read | grid cells (find) for four visible columns only |
| 3 | FX-ITEM-003 | 0.00 | 5.00 | FX-WH-B | not read (grid column clipped) | not read | grid cells (find) for four visible columns only |

- Count: `(Object 1 of 3)` and three row indicators (1, 2, 3) in the screenshot. A UI count, not a database count.
- Values match the brief's expected source records (120/20, 8/10, 0/5; warehouses FX-WH-A, FX-WH-A, FX-WH-B).
- Description and Location for rows 2 and 3 were not read. The grid is in GridLeft layout and those columns are clipped. Not required for the T9 comparison, but AC-12 later should read them if the operator wants full-row evidence.
- Freshness: the rows were loaded by the Refresh activated in T9 (not inherited from an earlier view). The Form itself was opened by Select Form in T9.
- Same-session UI readback only; not database-level; not cross-session.

**IDO identity (step 5, attempted and NOT established):**

- Attempt: Select Form filter `IdoCollections` (Caption `IDOs`), OK once. The IDOs Form opened in Filter in Place (`favoriteContext=IdoCollections`). The grid criteria cell under IDO Name was clicked once and the exact text `FX_InventoryItems` was typed slowly into it.
- Result: the typed text did not appear in the grid (find for `FX_InventoryItems`: no match; the saved snapshot shows no value). Every IDO detail textbox was empty in the saved snapshot. The toolbar Save stayed disabled throughout. No F4 or Tab was issued because the criterion was not visibly in place.
- Where the keystrokes went is **not established**. No data change is visible (Save disabled, all detail textboxes empty, no prompt).
- Recovery: the IDOs panel was closed once with its own Close Panel control. No prompt appeared. Recovery allowance: one fresh snapshot (used before the click) and no corrected retry, per the brief's stop rule.
- IDO identity status: **pending**. Carried evidence (not re-read in T9): EXP-134 T12 and T15 (IDO `FX_InventoryItems`, project `FX_HelloWorldProject01`, base table `FX_InventoryItems`, alias `fxinv`, six FX_ properties, one row; T15 close/reopen readback) and EXP-135 T4 and T7 (Designer readback: Primary Collection `FX_InventoryItems`, six `object.FX_*` bindings).

## 6. Browser and action accounting (T9)

| # | Action | Result |
| --- | --- | --- |
| 1 | `browser_tabs list` | 2 tabs (portal index 0; T8 Designer index 1) |
| 2 | Reads of records, recipes, source files, docs (Read, Grep) | read only |
| 3 | `browser_tabs list` (repeat) | 2 tabs |
| 4 | `browser_tabs select` index 0 | succeeded (after list) |
| 5 | `browser_snapshot` (fresh, portal) | header confirmed; no session modal; no Form open |
| 6 | `browser_click` toolbar Open (`f1e23`) | Select Form dialog opened |
| 7 | `browser_find` Select Form; `browser_snapshot` (fresh) | filter pre-set to `FX_InventoryDashboard` (T6 residue); refs for filter read |
| 8 | `browser_click` filter (`f1e111`); `browser_press_key` Control+a; `browser_type` `FX_InventoryEditor` (slow) | filter replaced (no OK on the old value) |
| 9 | `browser_find` `FX_InventoryEditor` | one row (Name and Caption) |
| 10 | `browser_click` Name cell (`f1e141`) | row selected |
| 11 | `browser_click` OK (`f1e130`) | runtime `FX_InventoryEditor` opened (1 runtime open) |
| 12 | `browser_snapshot` (fresh) | `(Object 1 of 1)`, placeholder row, Save disabled |
| 13 | `browser_take_screenshot` pre-refresh | `t9-runtime-fxinventoryeditor-pre-refresh.png` |
| 14 | `browser_click` Refresh (`f1e29`) | 1 Refresh (read) |
| 15 | `browser_find` `FX-ITEM`; `browser_find` `(Object`; `browser_take_screenshot` post-refresh | three rows; `(Object 1 of 3)`; `t9-runtime-fxinventoryeditor-post-refresh-readback.png` |
| 16 | `browser_click` Open (`f1e23`) | Select Form dialog (IDOs route) |
| 17 | `browser_find` / `browser_snapshot` (fresh) | Select Form dialog reopened; filter pre-set to `FX_InventoryEditor` (from action 8) |
| 18 | `browser_click` filter; Control+a; `browser_type` `IdoCollections` (slow) | filter replaced |
| 19 | `browser_find` `IdoCollections`; `browser_click` Name cell (`f1e347`); `browser_click` OK (`f1e130`) | IDOs Form opened (`favoriteContext=IdoCollections`) |
| 20 | `browser_find` Filter in Place; `browser_snapshot` (fresh) | Filter in Place mode; criteria cell `f1e415` |
| 21 | `browser_click` criteria cell (`f1e415`) | focus check: detail textbox no longer active |
| 22 | `browser_type` `FX_InventoryItems` into `f1e415` (slow) | **no visible result**; find no match; snapshot file shows no value |
| 23 | `Grep` of snapshot file; detail textbox values | all IDO detail textboxes empty; Save disabled |
| 24 | `browser_click` Close Panel IDOs (`f1e351`) | IDOs panel closed; no prompt |
| 25 | `browser_find` `(Object`/Save/dialog | `(Object 1 of 3)`; Save disabled; no dialog |
| 26 | `browser_tabs list` | 2 tabs; T8 Designer retained at index 1 |

Counts (T9): Select Form opens 2, each OK-activated once for the exact target (`FX_InventoryEditor`, then `IdoCollections`). The first dialog's pre-set `FX_InventoryDashboard` filter (left from T6) was replaced before OK and was not activated; no `FX_InventoryDashboard` absence check was repeated. Runtime opens 1 (`FX_InventoryEditor`). Refresh 1 (`FX_InventoryEditor`, read). IDOs Form opens 1 (closed without a change). Runtime Saves 0. Designer actions 0 (T8 Designer not selected). Creations 0. Edits 0. Portal reloads 0. Session recoveries 0. Dialog prompts accepted 0. Browser JavaScript 0. Credentials typed or read 0. Notifications 0 visible (no banner). Ref-not-found errors 0. Fresh-snapshot recovery used 0 of 1 (no stale-ref error occurred; the only fresh snapshots were routine reads).

Unresolved browser observation: the typed `FX_InventoryItems` text (action 22) produced no visible value. Its destination is not established, although no Save, prompt or detail-field value was seen.

## 7. Screenshots (decisive; check contents)

- `evidence/EXP-136/t9-runtime-fxinventoryeditor-pre-refresh.png`: captured before the Refresh (viewed in T9). Shows header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, the tab `FX_InventoryEditor`, a starred blank placeholder row 1, six blank inputs (the first with focus outline only), status `(Object 1 of 1)` and the greyed Save icon. It proves the pre-Refresh placeholder state only; it does not show any inventory record.
- `evidence/EXP-136/t9-runtime-fxinventoryeditor-post-refresh-readback.png`: captured after the Refresh. Shows the header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, the tab `FX_InventoryEditor`, row indicators 1 to 3, status `(Object 1 of 3)`, the row-1 detail (`FX test widget`, `FX-LOC-01`, `120.00`, `20.00`, `FX-WH-A`, `FX-ITEM-001`) and the greyed Save icon. It does **not** show the rows 2 and 3 values (clipped). It does **not** prove the database state. It supports the record count and row-1 values only.

## 8. Pre-creation gate evaluation (for the coordinator)

| Gate | T9 result |
| --- | --- |
| AC-1 account, scope, configuration | Operator-accepted; T9 re-observed the portal header and the T8 Designer's identity by URL. The T8 Designer's scope footer was observed in T8. |
| AC-1 absence (FX_InventoryDashboard, FX_vInventoryJson, FX_Inventory/index.html) | Operator-accepted (T4, T6). Not repeated. |
| AC-2 source identity | Operator-accepted hashes; content re-read; **two source-consistency items need operator disposition** (section 4, items 1 and 3). |
| Existing inventory records (read-only) | Observed live: three rows with the expected quantities, reorder levels and warehouses (rows 2 and 3 description and location not read). |
| FX_InventoryItems IDO identity | **Pending** (attempt inconclusive; carried evidence from EXP-134 and EXP-135). |
| Designer fresh and clean | T8 Designer present, untouched in T9 (URL identity). |

**Verdict: the pre-creation gates are NOT all satisfied.** Two items need an operator decision before any creation: (a) the `ThisForm.Variables` access to a Global variable against the documented `Application.Variables` route (a runtime-risk decision on the committed C# source); (b) the `OK` versus `In Stock` status label against AC-11. The IDO identity readback is also pending. The first persistent creation needs a separate coordinator decision.

## 9. Limitations

- Same-session UI readbacks only; not database-level; not cross-session; not replay.
- The FX_InventoryEditor refresh and rows were read through the grid and one row's detail. Rows 2 and 3 description and location were not read.
- The IDO identity query did not succeed in this task; no IDO identity is observed in T9.
- The status of the typed IDO criteria text (action 22) is not established.
- Hashes were not recomputed (operator-verified only).
- EXP-133, EXP-134 and EXP-132 were read in part (see section 4); their unread segments may hold further prerequisite detail.
- The Web Client console counter (`19 errors, 10 warnings`) is unexplained and not diagnosed.

## 10. AC-1 to AC-13 checkpoint after T9

| AC | Status after T9 |
| --- | --- |
| AC-1 | Operator-accepted (absence); identity re-observed in T9 (portal header; T8 Designer by URL). |
| AC-2 | Operator-accepted (hashes, not recomputed); content re-read; source-consistency items 1 and 3 open for operator decision. |
| AC-3 | Not evaluated (no variable created). |
| AC-4 | Not evaluated (no asset created). |
| AC-5 | Not evaluated (no Form created). |
| AC-6 | Not evaluated (no component placed). |
| AC-7 | Not evaluated (no script method installed). |
| AC-8 | Not evaluated (no Designer Save). |
| AC-9 | Not evaluated (no close or reopen of the target Form). |
| AC-10 | Not evaluated (no Portal reload or dashboard open). |
| AC-11 | Not evaluated (no dashboard Refresh). Label mismatch noted (`OK` versus `In Stock`). |
| AC-12 | Partial, pre-test baseline: three live rows observed in the runtime FX_InventoryEditor (after one Refresh). Post-test AC-12 remains to be performed after the runtime dashboard test. IDO identity pending. |
| AC-13 | Partial: action inventory (section 6) in T9; repository audit by the harness. |

## 11. Next permitted action

No creation, Save, Portal reload or dashboard activation is authorized by T9. Operator and coordinator decisions needed first:
1. Accept or change the Global variable access route in the committed C# (`ThisForm.Variables` versus `Application.Variables`), or authorize a runtime test of the committed route before creation.
2. Decide whether AC-11's `In Stock` label governs, or the committed HTML's `OK` label.
3. Decide whether the IDO identity must be re-read (a retry of the IDOs criteria entry in a fresh task) or accepted from EXP-134 and EXP-135 carried evidence.
4. Only then authorize the first persistent creation (the Global variable `FX_vInventoryJson`).

The FX_InventoryEditor runtime Form remains open and clean, and the T8 Designer remains open and untouched. The runtime Form should be closed by the coordinator or in a later task if no further read is needed.

## Repository confinement (T9)

Files written by the worker in T9: `evidence/EXP-136/t9-inventory-source-preflight.md` (this file, new); `evidence/EXP-136/t9-runtime-fxinventoryeditor-pre-refresh.png` (new); `evidence/EXP-136/t9-runtime-fxinventoryeditor-post-refresh-readback.png` (new); `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (T9 checkpoint added). No source file, record or other repository file was written. The harness computes the repository status and diff audit.
