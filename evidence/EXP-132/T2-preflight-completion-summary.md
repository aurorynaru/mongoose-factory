# EXP-132 T2 - read-only preflight completion (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=2`, `task=T2`, `worker_session_id=79a4a379-4bea-497f-860e-485061822f83`, `task_message_id=be81809a-7036-462f-a924-c049d088c235`.

Bounded instruction: read-only completion of the account, Form-inventory, Designer, FX_Echo, HTML, reference and Global-variable gates. No mutation, no Save, no close/reopen, no runtime activation, no FX_vEcho creation. Recovery allowance: one fresh snapshot plus one corrected inspection per worker task.

## 1. Outcome

- **Read-only T2 completed.** No Mongoose object was created, modified, saved, closed/reopened or activated.
- **FX_vEcho was not created.** Its absence was checked (section 3.4) but this is the T2 gate, not permission to create it.
- **FX_BridgeTest is open, clean and User-scoped** (Designer: Save, Regenerate, Undo and Redo disabled; no dialog; console 2 errors / 0 warnings).
- **Recovery allowance: not used.** No `Ref ... not found` error occurred in this task. Every ref came from the immediately preceding snapshot or action output.
- **Stop conditions:** none triggered.

## 2. Gate results

### 2.1 AC-1 - preflight identity and isolation (supported, with limits)

| Gate | Evidence | Observation |
| --- | --- | --- |
| Web Client account header | `t2-01-web-client-account-header.png` (decisive); snapshot readback of header button | Header reads `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Matches the operator-confirmed account. |
| Web Client session | `t2-01`, `t2-09` | Authenticated Web Client; Explorer shown; no Session Expired modal; no sign-in page. |
| FX_CustomerPortal present | `t2-07-select-form-filter-FX_CustomerPortal-positive-control.png` | Select Form, Name filter `FX_CustomerPortal`: one row `FX_CustomerPortal / FX_CustomerPortal`. |
| MockLoginPortal absent | `t2-04-...Mock-result.png`, `t2-05-...Mock-after-End.png` | Name filter `Mock` (contains, case-insensitive): **no rows**. |
| FX_InventoryPrototype01 absent | `t2-06-...InventoryPrototype-after-End.png` | Name filter `InventoryPrototype`: **no rows**. |
| FX_BridgeTest present (User version) | `t2-02-select-form-dialog-filter-FX_Bridge.png` (Name filter `FX_Bridge`: one row `FX_BridgeTest`); Designer Version `User version for user anton.ramos@3mworks.com.ph` (`t2-29`, snapshot `t2-10`) | One FX_Bridge* Form. The Select Form list does not show scope; User scope comes from the Designer status bar. |
| No FX_vEcho-related Form name | `t2-08-select-form-filter-vEcho-no-form-names.png` | Name filter `vEcho`: **no rows**. |
| Designer User scope | `t2-10`, `t2-29` (status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`) | Observed. |
| Initial clean Designer and console baseline | Designer snapshot after tab 0 select (Save, Regenerate, Undo, Redo disabled; no dialog; `Console: 2 errors, 0 warnings`) | Matches the accepted 2/0 baseline. |
| Web Client console | Footer on the Web Client tab: `Console: 3 errors, 10 warnings` at first read and after the Select Form Cancel | No accepted Web Client baseline exists in the record. Recorded as observed; not compared against an accepted value. No increase during the Web Client actions. |

**Inventory limitations (disclosed):**
- The Select Form dialog opened pre-filtered to `FX_Bridge` (view state left by an earlier session). The worker cleared it and then used name filters. The list was not read end-to-end.
- The filter is Name, contains, case-insensitive (`Starts With` and `Case Sensitive` unchecked). The positive control `FX_CustomerPortal` returned its row, so the filter is working in this dialog.
- **Observation:** the `Mock` filter returned no Form at all, including `MockInventory`, `MockInventoryDashboard` and `MockLoginIDO`. This is consistent with the Mock User versions belonging to the read-only owner account, but the cause is not established here.
- Form-inventory absence is not variable-name absence. The two are checked separately (section 3.4).

### 2.2 AC-2 - baseline and source-pattern gate (baseline items captured; one scope limit)

**Original FX_Echo** (`evidence/EXP-132/T2-source-readback.md` section 1; `t2-22`, `t2-24`): one `FX_Echo(string s)` method; scaffold `namespace Mongoose.FormScripts`, `public class FX_BridgeTest : FormScript`, the `// Methods go here` comment block; return `"FX_ECHO:" + s;`. Script Language `Visual C#`. Compile Result: Output tab blank; Errors tab not opened. A blank Output is not proof of compilation.

**Original FX_Bridge/index.html** (`T2-source-readback.md` section 2; `t2-28`): `../$app/scripts/UserControl.js` include; `FX_BridgeButton`; `FX_BridgeOutput`; one `WSForm.invoke("FX_Echo", "bridge-probe", callback)` writing `result` to `FX_BridgeOutput.textContent`. No `FX_BridgeStatus`; no `getVarValue`.

**FX_BridgeControl reference** (`T2-source-readback.md` section 3; `t2-19`, `t2-20`, `t2-21`): component `FX_BridgeControl`, Type `UserControl`, Pane 0, Tab 0; `User Control Name` `V(UserCtrl_FX_BridgeControl)`; Edit User Control References: **Use Web Control checked**, **Control URL `FX_Bridge/index.html`**. Opened read-only and closed with Cancel.

**Visible Form-level variables** (`t2-10`, snapshot read): `Form - Persistent` = six `UserCtrl*` rows (`UserCtrl_FX_BridgeControl`, `UserCtrl_userControl1_USER`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_FX_BridgeControl`, `UserCtrlUrl_userControl1_USER`). None modified. No Form - Temporary group. No `FX_vEcho`.

**Source pattern** (saved copies, unchanged from T1; observed in source, not replay-verified):
- `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` line 51: `ThisForm.Variables("vInventoryJson").Value = json;` inside `LoadInventoryFromIDO()` (line 12).
- `evidence/EXP-128/assets/MockInventory_index.html.txt`: `invokeLoadInventoryFromIDO()` calls `WSForm.invoke("LoadInventoryFromIDO", cb)` (no argument), then `getInventoryJson()` calls `WSForm.getVarValue("vInventoryJson", cb)`.
- `evidence/EXP-130/T2-designer-metadata-gaps.txt` sections 3, 7, 10: `vInventoryJson` = Global - Persistent (`Global=True`, `Persistent=True`), no owning Form.
- The brief's Global=True / Persistent=True choice matches this documented metadata. The documented pattern needs no Form-level variable, so the Form-level alternative is not triggered.

**FX_vEcho absence (Global)** (`t2-11`, `t2-12`, `t2-13`, `t2-14`, `t2-15`, `t2-16`, `t2-17`, `t2-18`):
- Designer Variables tree filter, validated first: `ccvw_PrinterName` returned its Global - Persistent row (`t2-13`); mid-string control `Printer` also returned it with the substring highlighted (`t2-15`). So the filter matches substrings.
- `vEcho` returned **no rows** in either the Form or Global groups (`t2-14`). `Echo` returned no rows (`t2-16`).
- Contiguous neighbour readback, `Global - Persistent` (`t2-18`): `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`. `FX_vEcho` would sort between `ccvw_PrinterName` and `gbgc_bg`; it is absent. (The first row is hover-highlighted by the pointer; it is not selected.)
- **Scope limit (new in T2):** `vInventoryJson` returned no rows in this User's tree (`t2-17`), although EXP-130 documents it as a Global - Persistent variable on the Mock side (another account). The tree therefore may not list every tenant-wide Global variable. FX_vEcho absence is established for the Designer Variables tree visible to this User; a tenant-wide or other-scope `FX_vEcho` is **not** excluded.
- The T1 positive-control failure is explained: `vInventoryJson` is not visible in this tree, so it was not a valid positive control. The filter itself refreshed after an End key press. The Global Objects dialog's list-filter behaviour was not re-tested and remains unresolved.

**AC-2 status:** the baseline items (FX_Echo, HTML, reference, Form variables, source pattern) are captured. The FX_vEcho absence is supported for this User's Designer Variables tree but not tenant-wide. Pending: coordinator disposition on whether this scope limit is acceptable before the one-variable creation.

### 2.3 Variable-type decision (for coordinator confirmation before T3)

The brief's preferred setting (Global=True, Persistent=True) is supported by the documented metadata. No Form-level alternative is selected. Runtime resolution of `ThisForm.Variables` on a Global variable remains **unresolved** (`EXP-130` U-1).

## 3. Browser accounting (T2)

- **Actions: 48.** Tab selects 2; clicks 18; type actions 11 (includes 2 cleared Designer filter fields); key presses 12 (Delete 1, End 10, ArrowRight 1); mouse moves 2; mouse wheel 3.
- **Browser reads: 34.** Tab list 1; snapshots 6 (2 saved as files, `t2-23` and `t2-27`; 4 returned inline); screenshots 27; finds 0; console-message reads 0 (console counts were taken from the page footer on each action result).
- **Repository reads (not browser):** Read and Grep of `AGENTS.md`-referenced files, the T1 summary, saved Playwright snapshot files and `EXP-131/t9-14` text match.
- **Recovery:** 0 of 1 fresh-snapshot allowance; 0 of 1 corrected inspection.
- **Browser JavaScript, evaluate or run-code written by the worker: 0.** The `### Ran Playwright code` blocks in tool output are generated by the MCP tool.

## 4. Mutation and lifecycle accounting (all zero)

- Mongoose artifact creations/modifications: **0**. No variable created; no Form Script edit committed; no asset edit committed; no component change; no reference change.
- Designer Save: **0**. Regenerate: **0**. Delete: **0**. Undo/Redo: **0**.
- Designer close/reopen: **0**. Runtime open or FX_BridgeButton activation: **0**.
- Dialogs closed with **Cancel** only: Select Form (1), Edit User Control References (1), Script Editor (1), Edit Browser File (1), Global Objects (1). No OK clicked anywhere in T2.
- View-only state changed (not Form changes): Designer Details tab switched Variables -> Components; Variables search cleared (it previously held `vInventoryJson`); Compile Result panel expanded; FX_Bridge folder expanded in the Global Objects tree; Select Form filter cleared (it had been pre-set to `FX_Bridge`).
- Keys pressed in text boxes only (Delete in the Select Form filter; End in the Designer filter and the Select Form filter). Pointer wheel over the Variables grid (view). ArrowRight in the Global Objects tree (expand only).

## 5. Console comparison

| Reading | Designer (tab 0) | Web Client (tab 1) |
| --- | --- | --- |
| Start of T2 | 2 errors / 0 warnings | 3 errors / 10 warnings |
| After Select Form work | - | 3 / 10 (Cancel footer) |
| After Designer read-only work | 2 / 0 (multiple footer reads) | - |
| End of T2 | 2 / 0 (`t2-29` footer / final snapshot) | not re-read |

No increase observed on either tab. Stop rule not triggered.

## 6. End state

- **Designer:** `FX_BridgeTest` tab selected; User scope; Save, Regenerate, Undo and Redo disabled (accessibility, `t2-29` snapshot); no dialog open; Details tab on Components; FX_BridgeControl row selected in the Components grid.
- **Web Client:** tab 1 at Explorer; no Form open; no experiment-created runtime tab. Tab 0 (Designer) is the selected tab at the end.

## 7. Files written by the worker in T2

- `evidence/EXP-132/T2-preflight-completion-summary.md` (this file; new).
- `evidence/EXP-132/T2-source-readback.md` (new; visual transcriptions of the original FX_Echo, HTML, reference and Global readbacks).
- `evidence/EXP-132/t2-01-web-client-account-header.png` through `t2-29-designer-after-readonly-closures-clean.png` (27 screenshots; numbering skips 23 and 27, which are snapshot files).
- `evidence/EXP-132/t2-23-form-script-editor-readonly-snapshot.md` and `evidence/EXP-132/t2-27-global-objects-snapshot-before-index-html-select.md` (snapshot files written with filename).
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` (T2 section appended).
- Tool-generated (not written directly by the worker): per-action page snapshots and console logs under `evidence/playwright/` (`page-2026-10-25T14-*.yml`, `console-2026-10-25T14-*.log`). The worker did not create or edit these; their disposition is for the operator's Git review.

## 8. Decisive evidence (what each proves and does not prove)

- `t2-01`: Web Client header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer; no runtime Form. Proves the account header and that no runtime Form is open. Does not prove the session's authorization beyond the header.
- `t2-02`: Select Form with `FX_Bridge` filter: one row, `FX_BridgeTest`. Proves the Name-filter result for this filter. Does not prove scope.
- `t2-07`: Select Form with `FX_CustomerPortal` filter: one row. Proves FX_CustomerPortal's presence (and the filter works). Does not prove anything about other Forms.
- `t2-05`, `t2-06`, `t2-08`: zero rows for `Mock`, `InventoryPrototype`, `vEcho`. Prove absence within this dialog's Name-contains filter. Do not prove absence from a complete Form list (not read end-to-end).
- `t2-10`: Designer Form-level variables (six `UserCtrl*` rows), Save greyed, User scope. Proves the Form-level list in this View. Does not prove Save state from the image alone (the accessibility snapshot does).
- `t2-13`, `t2-15`: positive controls for the Global variable filter. Prove the filter matches Global rows and substrings. Do not prove completeness of the Global list.
- `t2-14`, `t2-16`: `vEcho` and `Echo` return no rows. Prove no matching variable in this User's Designer tree. Do not prove tenant-wide absence (see `t2-17`).
- `t2-17`: `vInventoryJson` returns no rows in this tree. Proves a scope limitation of the tree (a documented Global variable is not visible here). Does not prove where `vInventoryJson` lives.
- `t2-18`: neighbour readback `ccvw_PrinterName` -> `gbgc_bg`. Proves the sort-position gap in the visible Global - Persistent group. Does not prove the group's total content.
- `t2-19`, `t2-20`, `t2-21`: Components grid, component properties, Edit User Control References (Use Web Control checked; Control URL `FX_Bridge/index.html`). Prove the reference as displayed. Do not prove the Web User Control Asset radio (disabled; visual only).
- `t2-22`, `t2-24`: Script Editor with original FX_Echo; Compile Result Output blank. Prove the source text as displayed. Do not prove compilation (Output blank is not success; Errors tab not opened).
- `t2-25`, `t2-26`: Global Objects Web Assets top level (`$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`) and FX_Bridge > index.html. Prove the asset exists under FX_Bridge. Do not prove stored-content integrity beyond the dialog text.
- `t2-28`: Edit Browser File, `FX_Bridge/index.html`, `text/html`, original content. Proves the stored text as displayed. Does not prove the runtime behaviour of `WSForm.invoke`.
- `t2-29`: Designer after closures: Save and Undo greyed (accessibility confirmed), no dialog, FX_BridgeControl in Components. Proves the clean end state for this read-only pass.

## 9. Knowledge state (T2)

- Account header and User-scoped FX_BridgeTest Designer identity: **observed** (this run).
- FX_CustomerPortal present; MockLoginPortal and FX_InventoryPrototype01 absent from this User's Name-filtered Select Form inventory: **observed** (filter-based; not a full list read).
- Designer baseline (clean, console 2/0): **observed**. Web Client console 3/10: **observed**, no accepted baseline.
- Original FX_Echo method, scaffold, return: **observed** (visual transcription).
- Compile status of the original FX_Echo: **unresolved** (Output blank; Errors not opened; not affirmative).
- Original FX_Bridge/index.html content (dependency, button, output, invoke with `bridge-probe`): **observed** (visual transcription).
- FX_BridgeControl reference (Use Web Control; `FX_Bridge/index.html`): **observed**.
- Form-level variables (six `UserCtrl*`, no FX_vEcho): **observed**.
- FX_vEcho absent from this User's Designer Variables tree (neighbour and filter controls): **observed**.
- FX_vEcho absent tenant-wide or from other scopes: **unresolved** (scope limit shown by `vInventoryJson`).
- Mock invoke signature (no argument) vs EXP-131 `"bridge-probe"`: **unresolved** (recorded only; not changed).
- Runtime resolution of `ThisForm.Variables` on a Global variable: **unresolved**.
- Global Objects dialog list-filter behaviour: **unresolved** (not re-tested in T2).
- Replay verification of any Mock or EXP-131 behaviour: **not claimed**.

## 10. Open questions for the coordinator

1. **Scope limit on the FX_vEcho absence gate:** is the User-scoped Designer Variables tree sufficient, given that `vInventoryJson` (documented Global - Persistent on the Mock side) is not visible in it? Or should the coordinator accept the Global-scope risk before creating FX_vEcho?
2. **Compile Result of the original FX_Echo:** accept as unresolved (no compile evidence), or require the Errors tab to be read in a later task?
3. **Invocation signature:** confirm that EXP-132 keeps `WSForm.invoke("FX_Echo", "bridge-probe", ...)` per the brief (not the Mock no-argument form).
4. **Next permitted action:** T3 (one `FX_vEcho` creation) requires coordinator approval of items 1 to 3. No mutation has been performed.
