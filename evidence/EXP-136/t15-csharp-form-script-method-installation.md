# EXP-136 T15 - C# Form Script method `FX_LoadInventoryFromIDO` on `FX_InventoryDashboard` (installation and same-session readback only; no Designer Save)

Run R-20261026-062909-9GoC, cycle 20, task T15. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User, account `anton.ramos@3mworks.com.ph`, configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.

## 1. Scope

- One Form Script method `FX_LoadInventoryFromIDO` installed in the existing `FX_InventoryDashboard` C# Form Script, one native editor OK, one same-session reopen with read-only Cancel.
- Not done (by brief): ordinary Designer toolbar Save, Form close or reopen, new Designer launch, Portal reload, runtime open or Refresh, browser JavaScript, Regenerate Form, any variable, asset, component, event or Caption change, any non-FX_ change, any edit to the committed repository sources.

## 2. Source baseline (not independently hashed)

- Committed C# source: `assets/FX_Inventory/FX_InventoryDashboard.cs.txt`, 32 lines, read in full at the start of T15 (usings lines 1-4, Ref comment line 6, namespace line 8, class `FX_InventoryDashboard : FormScript` line 10, method `FX_LoadInventoryFromIDO()` lines 12-30). The operator-verified SHA-256 `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f` (commit 13ac79d) was NOT recomputed by the worker (no shell). The read content is consistent with the description (method name, `IDOClient.LoadCollection("FX_InventoryItems", …)`, six approved property names, `ThisForm.Variables("FX_vInventoryJson").Value` at line 29).
- Approved decisions carried unchanged: D-A (`ThisForm.Variables` retained), positional PropertyValues mapping, null-to-zero behaviour not altered.

## 3. Preflight (observed, before any edit)

| Check | Observed | Evidence |
| --- | --- | --- |
| Tabs | Listed first: tab 0 Web Client (`favoriteContext=FX_InventoryEditor`), tab 1 Designer (`designer/Default.aspx`, configuration `G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM`, no `MGForm` parameter) | tab list (read-only) |
| Selected tab | Tab 1 selected after the list (select succeeded); fresh snapshot taken | `evidence/EXP-136/t15-preflight-designer-snapshot.yml` (tool-saved snapshot) |
| Scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t15-preflight-form-tab-identity-before-script-editor.png` |
| Form identity | Tab heading `FX_InventoryDashboard`; Name `FX_InventoryDashb…`; Version `User version for us…`; Device Type Default; Form Type Normal; Is Master True | `t15-preflight-form-tab-identity-before-script-editor.png` |
| Script Language | `Visual C#` (Form properties, read by targeted find and visible in the screenshot) | find result; screenshot |
| Caption | Visible value clipped (`FX_InventoryDasht…`). The full Caption text was not re-read in T15 (T13 established it by text search) | screenshot (clipped) |
| Components | `Pane (00)` > `FX_InventoryControl` (UserControl, Pane 0, Container 0); one row. Earlier Designer check showed this as the only component | Components grid find; `t15-designer-after-script-editor-ok-precommit-state.png` |
| Variables tree (pre-edit screenshot) | `Global - Persistent` and `Global - Temporary` only; no Form-level category | `t15-preflight-form-tab-identity-before-script-editor.png` |
| Save state before edit | Enabled (inherited pending state from T11-T14; not clicked) | snapshot and screenshots |
| Dialog or prompt | None open. Console `2 errors, 0 warnings` (unchanged) | snapshot page header |
| Method collision | The pre-edit scaffold has no methods (`// Methods go here` only), so `FX_LoadInventoryFromIDO` was not present before the edit | `t15-script-editor-generated-scaffold-precommit.png` |

Gates passed: Form identity, User scope, Visual C#, single UserControl, no prior method, no dialog.

## 4. Pre-edit generated script (observed)

Opened once with the blue pencil (`#btnEditDownload`) while the Form properties tab was active. The generated C# scaffold (16 lines, `t15-script-editor-generated-scaffold-precommit.png`):

```
1  using System;
2  using Mongoose.IDO.Protocol;
3  using Mongoose.Scripting;
4  (blank)
5  namespace Mongoose.FormScripts
6  {
7    public class FX_InventoryDashboard : FormScript
8    {
9    (blank)
10   //
11   // Methods go here
12   //
13   (blank)
14   }
15 }
16 (blank)
```

The class name, namespace and inheritance match the committed source. The scaffold has `using Mongoose.IDO.Protocol;`, which the committed source does not use; it was preserved (brief: preserve generated imports).

## 5. Installed content and the single entry

Required additions relative to the scaffold (all from the committed source): `using System.Collections.Generic;`, `using Newtonsoft.Json;`, the `//<Ref>Newtonsoft.Json.dll</Ref>` comment, and the method `FX_LoadInventoryFromIDO` (committed lines 12-30, placed after the preserved `//` comment block).

Entry method (one editor action sequence): one click on the editor text (`textbox "Editor content"`), Ctrl+A once, then one non-slow `browser_type` fill of the full text. The fill contained the preserved scaffold lines, the two added usings, the Ref comment and the committed method. Corrections: 0. The fill was typed flush-left (no leading whitespace), following the EXP-094 lesson that the editor auto-indents typed lines. No auto-inserted brackets or quotes were seen.

Entered text (lines as they appeared in the editor after entry, before OK):

```
1  using System;
2  using System.Collections.Generic;
3  using Mongoose.IDO.Protocol;
4  using Mongoose.Scripting;
5  using Newtonsoft.Json;
6  (blank)
7  //<Ref>Newtonsoft.Json.dll</Ref>
8  (blank)
9  namespace Mongoose.FormScripts
10 {
11 public class FX_InventoryDashboard : FormScript
12 {
13 (blank)
14 //
15 // Methods go here
16 //
17 (blank)
18 public void FX_LoadInventoryFromIDO()
19 {
20 string properties = "FX_Item, FX_Description, FX_Location, FX_QuantityOnHand, FX_ReorderLevel, FX_Warehouse";
21 var response = IDOClient.LoadCollection("FX_InventoryItems", properties, "", "", 100);
22 var inventory = new List<Dictionary<string, object>>();
23 for (int i = 0; i < response.Items.Count; i++)
24 {
25 var item = response.Items[i];
26 var record = new Dictionary<string, object>();
27 record["Item"] = item.PropertyValues[0].Value;
28 record["Description"] = item.PropertyValues[1].Value;
29 record["Location"] = item.PropertyValues[2].Value;
30 record["QuantityOnHand"] = item.PropertyValues[3].Value;
31 record["ReorderLevel"] = item.PropertyValues[4].Value;
32 record["Warehouse"] = item.PropertyValues[5].Value;
33 inventory.Add(record);
34 }
35 ThisForm.Variables("FX_vInventoryJson").Value = JsonConvert.SerializeObject(inventory);
36 }
37 (blank)
38 }
39 }
40 (blank)
```

Pre-OK readback (visual, from `t15-script-editor-method-entered-readback-precommit.png`, `…-top-lines-readback-precommit.png`, `…-line1-4-readback-precommit.png`, `…-top-readback-precommit.png`): lines 1-40 were read in screenshots and matched the intended text line for line. The editor did not add indentation; the class members and method body sit at column 0 in the editor.

Comparison with the committed file (token level): every committed token is present, with the same names, arguments, literals and statements. Differences are whitespace only: the committed file's 4-space indentation is absent, and the committed header has no `using Mongoose.IDO.Protocol;`, which the preserved scaffold line adds. No other differences.

## 6. OK and the commit result

- OK clicked once (`Script Editor` OK). The editor closed with no visible message, toast, error or prompt (`t15-designer-after-script-editor-ok-precommit-state.png`).
- After OK: Designer Save and Undo enabled (pending); Regenerate Form enabled; no dialog. Components grid unchanged (`Pane (00)` > `FX_InventoryControl`, UserControl). Scope footer User / anton.ramos@3mworks.com.ph.
- Designer Save: NOT clicked.

## 7. Same-session readback (reopen, read-only)

- The Script Editor was reopened once with the same pencil. The textbox accessibility text began with the saved header: `using System; using System.Collections.Generic; using Mongoose.IDO.Protocol; using Mongoose.Scripting; using Newtonsoft.Json; //<Ref>Newtonsoft.Json.dll</Ref> namespace Mongoose.FormScripts {`, confirming the committed text persisted in the open Designer model.
- Visual readback, covering lines 1-40 across several viewport positions (the Compile Result panel and scrolling changed the visible range): `t15-script-editor-compile-result-expanded` shows lines 1-23 with the header; the 4-26, 7-29 and 10-32 captures show the method body; `t15-script-editor-reopen-readback-bottom-compile-collapsed.png` shows lines 10-40 (class, `//` block, method lines 18-36, closing braces at 38 and 39, trailing blank 40). Together these cover the whole saved file.
- Structure verified: one `public class FX_InventoryDashboard : FormScript`; one `public void FX_LoadInventoryFromIDO()`; the `//` comment block preserved; the Ref comment and the two usings present; no duplicate method visible; the namespace and class closing braces present.
- Limitation: the full-file text was verified visually and by accessibility nodes, not by a byte or hash comparison. Whitespace equality is not established.
- The editor was closed with Cancel once (read-only; no edits made in the reopened session).

## 8. Compile result (observed; NOT affirmative)

- Compile Result panel expanded once (view), `Output` tab: blank. `Errors` tab (view): headers `Line | Column | Error` only, **no rows** (`t15-script-editor-compile-result-errors-grid.png`).
- Interpretation: the grid shows no error rows after the OK-and-reopen cycle in this session. This matches the headers-only pattern recorded in EXP-131 (T5, T9) and EXP-132 (T3, T6, T8), which were recorded as not affirmative compile proof. No positive or negative control compile was run (none is authorized). **Compile success is therefore not affirmatively established.**
- The Run arrow (▶) in the editor toolbar was NOT clicked (not a documented compile-only action; runtime execution is out of scope).

## 9. Designer state after the edit

- Final screenshot (`t15-final-designer-state-after-editor-cancel.png`): FX_InventoryDashboard heading, Name, User version, Script Language `Visual C#`, Components `Pane (00)` > `FX_InventoryControl` UserControl, scope footer User / anton.ramos@3mworks.com.ph, no dialog open, editor closed.
- Save: enabled (pending; not clicked). Undo: enabled. Regenerate Form: enabled (not clicked).
- Console: `2 errors, 0 warnings` (unchanged).
- Page URL: `designer/Default.aspx?tenant=…` (no `MGForm` parameter) as carried from T14; the visible heading, Name and scope still identify `FX_InventoryDashboard`.

## 10. Carried unresolved items (not changed by T15)

1. `User Control Name` row value `V(UserCtrl_userControl1_USER)` (pre-rename name), observed again in the preflight snapshot (T15, Specific Attributes); its behaviour after Save and any Form-level `UserCtrl*` variables remain unverified (none visible in the Variables tree pre-edit).
2. The Designer page URL lost `&MGForm=` after the T14 reference OK (carried; cause not established).
3. The Save-state change after T13 Finish (carried).
4. The Caption `FX_InventoryDashboard` full text was not re-read in T15 (display clipped).

## 11. Browser and mutation ledger (T15)

Mutations:
- Script Editor opens: 2 (pencil `#btnEditDownload`, Form selected; first open to read the scaffold, second to read back). OK: 1. Cancel: 1 (read-only close after reopen).
- Text entries: 1 full-content fill (scaffold plus additions), preceded by 1 click and 1 Ctrl+A. Corrections: 0.
- Method insertions: 1 (`FX_LoadInventoryFromIDO`).
- Designer Saves: 0. Form close or reopen: 0. New Designer launch: 0. Portal reloads: 0. Runtime opens or Refresh activations: 0.
- Variables, assets, components, event handlers, Captions, Script Language changes, Regenerate Form, FormSync, unload, deployment, cache clearing: 0.
- Enter presses: 0. Browser JavaScript: 0. Credentials typed or read: 0. Session recoveries: 0. Dialogs or prompts accepted: 0 (only the in-page editor OK and Cancel).

View-only actions (no content change):
- Tab list: 1. Tab select: 1 (tab 1).
- Form properties tab click: 1 (Properties Form tab). Details > Components tab click: 1.
- Compile Result expand: 1. Errors tab click: 1. Compile Result collapse: 1.
- Mouse move over the editor: 1. Mouse-wheel scrolls of the editor: 6 (three up, three down; no content change).
- Snapshots: 1 untargeted snapshot saved by the worker (`evidence/EXP-136/t15-preflight-designer-snapshot.yml`); other snapshot files were written by the browser tool under `evidence/playwright/`, not by the worker.
- Finds: about 18 (read-only). Screenshots: 15 PNG files under `evidence/EXP-136/` (listed in section 12).

## 12. Evidence files (T15)

Written by the worker through tool calls (repository-relative):
- `evidence/EXP-136/t15-csharp-form-script-method-installation.md` (this file)
- `evidence/EXP-136/t15-preflight-designer-snapshot.yml` (tool-saved snapshot; read-back source)
- `evidence/EXP-136/t15-preflight-form-tab-identity-before-script-editor.png` (Form identity, Visual C#, scope, Variables tree)
- `evidence/EXP-136/t15-script-editor-generated-scaffold-precommit.png` (16-line scaffold)
- `evidence/EXP-136/t15-script-editor-method-entered-readback-precommit.png` (entered text, lines 9-40)
- `evidence/EXP-136/t15-script-editor-method-entered-top-lines-readback-precommit.png` (lines 5-38)
- `evidence/EXP-136/t15-script-editor-method-entered-line1-4-readback-precommit.png` (lines 2-33)
- `evidence/EXP-136/t15-script-editor-method-entered-top-readback-precommit.png` (lines 1-33)
- `evidence/EXP-136/t15-designer-after-script-editor-ok-precommit-state.png` (after OK; editor closed)
- `evidence/EXP-136/t15-script-editor-reopen-compile-result-expanded.png` (reopen, lines 1-23, Compile Result expanded, Output blank)
- `evidence/EXP-136/t15-script-editor-compile-result-errors-grid.png` (Errors grid: headers only)
- `evidence/EXP-136/t15-script-editor-reopen-readback-lines-18-40.png` (file name says 18-40; the visible lines are 4-26)
- `evidence/EXP-136/t15-script-editor-reopen-readback-lines-26-40-bottom.png` (file name says 26-40; the visible lines are 7-29)
- `evidence/EXP-136/t15-script-editor-reopen-readback-end-lines-30-40.png` (file name says 30-40; the visible lines are 10-32)
- `evidence/EXP-136/t15-script-editor-reopen-readback-bottom-compile-collapsed.png` (lines 10-40; decisive bottom readback)
- `evidence/EXP-136/t15-final-designer-state-after-editor-cancel.png` (final Designer state)

Note on file names: three reopen screenshots have names that promise line ranges (18-40, 26-40, 30-40) but show different visible ranges, as listed above. The coverage claim in section 7 rests on the actual visible lines, not the file names.

Repository sources: not modified (read only). Documentation: `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (T15 checkpoint and status line).

## 13. Acceptance checkpoint after T15

| AC | Status after T15 | Basis |
| --- | --- | --- |
| AC-1 | Carried: passed (operator-accepted) | Re-observed: User scope footer, Form identity; no collision for the new Form |
| AC-2 | Carried: passed at operator-verified hash level | C# re-read (32 lines); hash not recomputed |
| AC-3 | Carried: supported at same-session level | Not re-checked in T15 |
| AC-4 | Carried: operator-accepted (qualified) | Not re-checked in T15 |
| AC-5 | Carried: passed at in-session level (qualified) | Form identity and Visual C# re-observed; Caption full text not re-read |
| AC-6 | Carried: passed at same-session level (qualified) | Components grid re-observed: one FX_InventoryControl UserControl |
| AC-7 | **PENDING (qualified)** | Method installed once; structure and readback verified; compile Errors grid has no rows but this is not affirmative compile proof (see section 8). Operator decision needed on whether to accept the empty grid as zero-error evidence |
| AC-8 | PENDING | No ordinary Designer Save performed (separate coordinator decision) |
| AC-9 | PENDING | No close and fresh-Designer reopen |
| AC-10 to AC-13 | Not evaluated | Later stages |

## 14. Knowledge state (T15)

- Observed (single run, same session): the Form Script editor (pencil, Form selected) opens the generated C# scaffold; one full-content fill with preserved scaffold plus additions followed by OK installed the method; reopen shows the saved header and method; Compile Result Errors grid had no rows and Output was blank.
- Observed: the editor did not add indentation in this entry (the saved text is flush-left).
- Candidate procedure (not replay-verified): full-text fill of the C# scaffold plus additions, then OK, then reopen readback.
- Unresolved: compile success (no affirmative check); whitespace equality with the committed file; Save effect on the carried User Control Name and Page URL items.
- Replay verified: none.

## 15. Blockers and open questions

- No blocker. Stopped as instructed after same-session installation and verification.
- Decisions for the coordinator: (1) whether an empty Errors grid is accepted as zero-error compile evidence for AC-7 (the same-session compile remains unconfirmed by a positive control); (2) authorization for the single ordinary Designer Save (AC-8); (3) authorization for close, fresh-Designer reopen and read-only readbacks (AC-9).
