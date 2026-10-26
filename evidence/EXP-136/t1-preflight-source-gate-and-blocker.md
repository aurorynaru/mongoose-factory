# EXP-136 T1 - Source gate, read-only preflight and blocker (cycle 0)

Run: `R-20261026-062909-9GoC` · task `T1` · cycle 0 · worker session `2d01f0a0-c2db-4d84-8a35-037fb33a5ee3` · task_message_id `242339cb-8333-4e20-bb92-347233433a41`.
Configuration (window title): `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
Result: **STOPPED at the preflight gate (AC-1 incomplete). No application mutation was performed.**

## 1. Sources read before any browser action

- `AGENTS.md` (full).
- `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md` lines 300-435 (rebuild spec sections 1-11, including sections 2, 3, 7.2, 8 and 10 as required).
- `experiments/EXP-135-fx-inventoryeditor-creation-and-three-test-invento.md` lines 1-205 (status header; T1-T12 procedures).
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` lines 13-63 and 104-190 (T4 Global Objects "+" route; T6 asset commit; T7/T8 Save and close/reopen readback; T9 runtime activation).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- `recipes/forms/create-basic-form.md` (Select Form route and BuildFromScratch wizard; located by grep).
- **Not read:** `experiments/EXP-133-...md` and `experiments/EXP-134-...md` (not opened in this task; their carried-forward facts appear only through EXP-135 T4/T12 readbacks).
- **Note:** the EXP-136 experiment record named in the brief **did not exist** on disk (`experiments/EXP-136-...md` absent; repository search for "EXP-136" found no document outside `tools/`). The brief commits (`c25d8cc` draft, `c85c51a` approved) exist; this task creates the record.

## 2. Source-integrity gate (AC-2, repository-side)

| File | Present | Lines (as displayed) | Content check |
| --- | --- | --- | --- |
| `assets/FX_Inventory/index.html` | Yes (readable) | 71 | Title `FX Inventory Dashboard`; `<script src="../$app/scripts/UserControl.js">`; `Refresh Data` button `#FX_InvRefresh`; cards `#FX_InvTotalItems`, `#FX_InvTotalUnits`, `#FX_InvLowStock`, `#FX_InvOutOfStock`; table body `#FX_InvTableBody`; `WSForm.invoke("FX_LoadInventoryFromIDO", ...)` (no argument) followed by `WSForm.getVarValue("FX_vInventoryJson", ...)`; client-side status rule: qty <= 0 Out of Stock, qty <= reorder Low Stock, else OK. |
| `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` | Yes (readable) | 32 | `namespace Mongoose.FormScripts`; `class FX_InventoryDashboard : FormScript`; `//<Ref>Newtonsoft.Json.dll</Ref>`; `public void FX_LoadInventoryFromIDO()` (lines 12-30); `IDOClient.LoadCollection("FX_InventoryItems", "FX_Item, FX_Description, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse", "", "", 100)`; positional mapping PropertyValues[0..5] to Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse; `ThisForm.Variables("FX_vInventoryJson").Value = JsonConvert.SerializeObject(inventory)` (line 29). |

**Content hashes: NOT COMPUTED.** No hashing tool is available in this task (Bash disabled; no shell or Get-FileHash tool permitted). Byte identity to the committed files is therefore **not established** here; the readable contents were captured above and the files were not modified.

Assumptions recorded (not changed):
- A1. The HTML depends on the shared `../$app/scripts/UserControl.js`. Its WSForm bridge contract is UNK (EXP-130 section 10; EXP-130 U-1). The brief forbids modifying it.
- A2. The C# uses `ThisForm.Variables("FX_vInventoryJson")` on a **Global** variable. Runtime resolution of this form is unresolved (EXP-132 T4-T8; EXP-130 U-1).
- A3. The meaning of the `""`, `""` and `100` arguments of `IDOClient.LoadCollection` is UNK (EXP-130 section 7.2). The C# was copied from the Mock pattern and is not tuned.
- A4. The totals arithmetic in the HTML, applied to the EXP-135 T12 values (120/20, 8/10, 0/5), yields Total Items 3, Total Units 128, Low Stock 1, Out of Stock 1, matching AC-11. This is a source-level expectation only.
- A5. The property names `FX_Item`, `FX_Description`, `FX_Location`, `FX_QuantityOnHand`, `FX_ReorderLevel`, `FX_Warehouse` match the EXP-135 FX_InventoryItems bindings (observed in the EXP-135 T4/T7 Designer readbacks).

AC-2 source identity: **partially met** (paths and readable contents; intended bridge strings present; hashes not computed).

## 3. Read-only preflight performed (AC-1 partial)

- Browser tab list (read-only) then explicit selection of tab 0 (Designer, `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`).
- Fresh snapshot of tab 0 (`page-2026-10-25T22-30-45-129Z.yml` in `evidence\playwright\`). Observed:
  - One Form tab only: `FX_InventoryEditor` (Name `FX_InventoryEditor`, Caption `FX_InventoryEditor`, Version `User version for user anton.ramos@3mworks.com.ph`, Form Type `Normal`, Is Master `True`).
  - Toolbar **Save disabled**; Regenerate Form disabled; Undo/Redo disabled.
  - Footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (**Designer scope User; account anton.ramos@3mworks.com.ph** as shown by the footer; the Web Client header was not re-read in this task).
  - Designer console 2 errors / 0 warnings (footer read).
- Form menu (opened, read-only): recent-Form entries `FX_InventoryEditor`, `IDO Projects`, `Sql Tables`, `IDOs`, `FX_LoginPortal`, `FX_BridgeTest`, `FX_CustomerPortal`, `FX_Orders`, `Test ION API Invoke`. **No `FX_InventoryDashboard` entry and no `FX_InventoryPrototype01` entry**. This is the recent list only; it is **not** an absence proof.
- Positive control for the Designer identity: `FX_InventoryEditor` appears as a Form tab and in the Form menu.

## 4. Not performed (preflight incomplete)

- Absence check for `FX_InventoryDashboard` in the Web Client Select Form list (the documented route is the Web Client Open button; the list may be stale per EXP-135 T8). **Not performed.**
- Absence check for `FX_vInventoryJson` in Edit > Variable > Global Objects (positive control `FX_vEcho` from EXP-132 expected; not read). **Not performed.**
- Absence check for `FX_Inventory/index.html` in Edit > Web User Control Assets (positive control `FX_Bridge/index.html` from EXP-132 expected; not read). **Not performed.**
- FX_InventoryItems IDO and three records: **not re-read in this task.** The carried-forward observations from EXP-135 T12 (one session, UI, not database-level) are: FX-ITEM-001 120.00/20.00 FX-WH-A; FX-ITEM-002 8.00/10.00 FX-WH-A; FX-ITEM-003 0.00/5.00 FX-WH-B. No supported read-only route to the records was taken, because the only UI route (runtime open and Refresh of FX_InventoryEditor) is a Refresh activation not authorized in this brief.
- Web Client header and Portal state: not re-read.

## 5. Browser accounting (T1)

| Item | Count |
| --- | --- |
| Tab list (read-only) | 2 (before selections) |
| Tab selects | 1 (tab 0, succeeded) |
| Fresh untargeted snapshots (recovery allowance) | 1 of 1 used (`depth: 3`) |
| Initial full snapshot (identity read, before any failure) | 1 (not counted as recovery) |
| Screenshot attempts | 2, both **timed out** (`taking page screenshot`, `waiting for fonts to load... fonts loaded`, then 5000 ms timeout). No screenshot file was written. |
| Form-menu click (`e3`) | 1 timeout at "visible, enabled and stable" (locator resolved). Corrected click: 1, **succeeded**. |
| Edit-menu click (`e5`) | 1, **no Edit menu items rendered** in the following find or in the snapshot file `page-2026-10-25T22-31-01-141Z.yml`. Form-menu state was not confirmed closed. |
| Find queries (read-only) | 4 |
| Corrected inspections (recovery) | 1 (screenshot retry) used; the Form-menu retry was a corrected attempt. The allowance was treated as spent, so no further recovery was attempted. |
| Ref-not-found errors | 0 |
| Browser JavaScript / run-code | 0 (the tool-generated `Ran Playwright code` lines are the MCP's own click wrapper, not worker-authored scripts) |
| Mutations (create, edit, Save, close, reopen, reload, navigate, Refresh) | **0** |
| Session expiry / sign-in | none observed |
| Portal banner | none observed |

Note for reviewers: the `Ran Playwright code` lines in the tool output are generated by the MCP click wrapper; they are not worker-authored JavaScript.

## 6. Mutation ledger

Created: none. Modified: none. Saves: 0. Global variables: 0. Web User Control Assets: 0. Forms: 0. Components: 0. Script methods: 0. Event handlers: 0. Runtime Forms opened: 0. Refresh activations: 0.

## 7. Blocker

1. **Browser stall on Designer tab 0 (suspected environment/rendering problem).** Screenshot timed out twice; the first Form-menu click timed out at "visible, enabled and stable" although the locator resolved; a corrected click then succeeded. The Edit-menu click produced no visible menu.
2. **Preflight gate not passed.** AC-1 requires zero-collision absence checks for all three identities (`FX_InventoryDashboard`, `FX_vInventoryJson`, `FX_Inventory/index.html`). Only the recent-Form list and the Designer footer were read. No collision was observed, but absence was not proven.
3. Recovery allowance for this task is spent (1 fresh snapshot; 1 corrected inspection; 1 corrected click). Per the brief, the task stops here and the blocker is reported.

## 8. Next permitted action (for the coordinator)

- Re-run **T1 preflight only** in a fresh task (with its own recovery allowance), starting with a tab list and tab 0 select, then: (a) Edit > Variable > Global Objects, filter `FX_v`, cancel; (b) Edit > Web User Control Assets, cancel; (c) Web Client Open > Select Form, filter `FX_Inv`, positive control `FX_InventoryEditor`, cancel. Stop on any collision.
- Screenshot evidence: the screenshot tool timed out; a Designer screenshot retry (or a page reload authorized by the operator) is needed before any decisive image is cited.
- No mutation (variable, asset, Form, component, script, Save, close, reopen, Portal reload or Refresh) is authorized until preflight passes.

## 9. Acceptance status (T1)

- AC-1: **partial** (Designer identity, User scope and configuration title observed; absence checks not performed; Web Client header not re-read).
- AC-2: **partial** (both files present and readable; intended strings present; hashes not computed; assumptions A1-A5 recorded).
- AC-3 to AC-13: **not evaluated** (no mutation; T1 stopped at preflight).

## 10. Knowledge state

- Observed: Designer tab 0 shows FX_InventoryEditor clean with User scope footer for anton.ramos@3mworks.com.ph (snapshot file `page-2026-10-25T22-30-45-129Z.yml`). Recent-Form list does not include FX_InventoryDashboard (recent list only).
- Observed (source): HTML and C# contents as listed in section 2.
- Unresolved: absence of the three identities (preflight incomplete); byte identity (hashes not computed); runtime resolution of `ThisForm.Variables` for Global variables (EXP-130 U-1); meaning of `LoadCollection` arguments (EXP-130 section 7.2); the cause of the browser stall.
- Not claimed: any replay, database durability, or equivalence to MockInventoryDashboard.

## 11. Files written in T1

- `evidence/EXP-136/t1-preflight-source-gate-and-blocker.md` (this file).
- `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (experiment record; status BLOCKED at T1).
- No other files. No screenshot was saved (both attempts timed out).
