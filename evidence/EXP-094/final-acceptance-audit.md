# EXP-094 final acceptance audit (T5)

Scope: documentation and acceptance audit only. T5 made **zero browser calls** and **zero Mongoose changes**. It did not reopen the Designer, the Script Editor or any other application surface. Sources used: the EXP-094 record, `docs/mongoose/scripts/FX_Orders-form-script.vb`, the existing screenshots in `evidence/EXP-094/` (read as images), the controller audits `evidence/EXP-094/harness-audit-T1.md` to `harness-audit-T4.md`, and the browser-tool artifact listing under `evidence/playwright/`.

Findings are **observed only**. This audit does not establish compile success, runtime execution, cross-session or database durability, or replay.

## 1. Capitalization question: `ItemCost as String` versus `ItemCost As String`

Result: **resolved against the file. The T4 prose was accurate.**

| Source | Text of the signature | Evidence |
|---|---|---|
| Source file, line 14 (case-sensitive Grep) | `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)` | Grep `ItemCost (as\|As) String` matched only `ItemCost as String` (lowercase `as`) |
| Worker's entry payload (T2 `browser_type`) | `... ItemCost as String)` | T2 tool payload, which was copied from the file |
| Editor accessibility text, T2 snapshot (after entry) | `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)` | T2 targeted snapshot, node `e1005` |
| Editor accessibility text, T4 targeted snapshot (after reopen) | `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)` | T4 targeted snapshot, node `e1307` |
| Screenshot `editor-after-entry-readback.png` | Line 14 reads `ItemCost as String` (keyword `as` in the keyword colour) | Visible on the image |
| Screenshot `editor-readback-after-reopen.png` | Line 14 reads `ItemCost as String` | Visible on the image |
| EXP-094 record T4 prose and row 14 | `ItemCost as String` | Matches the file |

Which text is the "exact" target? The brief's exact-text rule refers to the file. The file has lowercase `as`, and the editor held that same text both after entry and after reopen. The capitalized `ItemCost As String` appears only in the descriptive target line of the task objective ("class FX_Orders with method CalcOrderTotal(OrderCount As String, ItemCost As String)"), not in the file. The T5 premise that the T4 prose differed from the file was not correct.

Residual point, recorded for operator disposition: `As` and `as` are the same VB keyword token, so no semantic change is expected. Compile success has not been observed, so that expectation is not verified. The recommendation is to treat the file's casing as authoritative and to correct the descriptive spelling in future briefs.

## 2. Full assignment statement targeting FX_DerOrderTotal

Result: **verified.**

- File line 18 (Grep, exact): `ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal",OrderTotal.ToString())`.
- Editor after entry (T2 accessibility node `e1012`) and after reopen (T4 accessibility node `e1314`): the same string, character for character as read from the node text.
- Both screenshots show the same line 18. The rendered indentation differs (editor-applied), which is leading whitespace only.

Limitations: the accessibility text is a rendered copy, not a stored-byte dump. The stored bytes are not observable through the UI. Both readbacks come from the same browser session.

## 3. Acceptance matrix (AC-1 to AC-4 with decisive evidence)

| ID | Verdict | Decisive evidence | What it establishes | What it cannot establish |
|---|---|---|---|---|
| AC-1 | **Supported (observed)** | `gate-designer-fx-orders-clean-script-language.png` (Designer tab FX_Orders, Name FX_Orders, Save / Undo / Regenerate Form greyed, status bar `ScopeType: User`); `gate-behavior-script-language.png` (Behavior expanded, Script Language = Visual Basic); `editor-pre-edit-full.png` (Script Editor, lines 1-20, `Public Class FX_Orders`, `Inherits FormScript`, `' Methods go here`, `End Namespace`, no method) | Clean User-scope gate; Visual Basic; pre-edit content equals the EXP-093 template | Designer identity beyond the visible tab and status bar; the ScopeName value (blurred in the status bar text, not recorded) |
| AC-2 | **Supported (observed, single session)** | `editor-after-entry-readback.png` (lines 1-24 visible, method and assignment line present, Compile Result bar collapsed); `ok-response-designer-state.png` (editor closed, no message visible); `save-response-designer.png` (toast `Form [FX_Orders] and global object(s) were saved.`, toolbar Save and Undo greyed) | Entry of the file text with 0 corrections; one OK; one Save with a native success toast; no error visible | Compile success (the Compile Result panel was never expanded); what the OK did internally; any stored-byte content |
| AC-3 | **Supported (observed, single session)** | `close-after-save-no-prompt.png` (blank Designer after the close, no prompt; find "Do you want to save" = no match); `reopened-designer-after-persistence-close.png` (FX_Orders, User, Visual Basic, Save greyed; find: `Save [disabled]`, `Regenerate Form [disabled]`); `editor-readback-after-reopen.png` (24 lines; `CalcOrderTotal`, the assignment line, `End Namespace` visible; Save icon appears greyed behind the modal); `after-cancel-toolbar-state.png` (editor closed; find: Save, Regenerate Form, Undo, Redo all `[disabled]`) | One close with no prompt, one reopen, Save disabled after reopen, readback matches the file, Cancel used once, clean state after Cancel; restore-clean pair not needed | Independent durability (the reopen came from the same browser session and the Designer's recent-forms list); the Save state with the editor open was checked visually only |
| AC-4 | **Supported (controller and worker audits agree)** | `harness-audit-T1.md` to `T4.md` (no element click on the Run, Download, Help or Delete controls; no unload; no checkout; no navigation; no dialog answers) | No event, component, runtime, unload, checkout, Yes-answer or Run/Download/Help action | Not a complete exclusion: the tool logs record calls, not every pointer effect |

Notes on AC-3's readback: the two readbacks (T2 and T4) show the same 24 lines. The T4 comparison relies on rendered code-line nodes and the screenshot, not on one full-text dump (the editor's text-box value is truncated in find output).

## 4. Reconciled action totals

Worker records and controller audits were compared row by row. Controller classifications: "actions" are browser mutations (clicks, key presses, typing, tab select); "reads" are browser read-only calls (tab list, snapshot, find, screenshot). File reads, Glob and Grep are not counted in the controller's reads. Under that definition the controller's stated read totals reproduce exactly (T1 12, T2 10, T3 5, T4 16).

| Count | Worker | Controller evidence | Match |
|---|---|---|---|
| Tab lists | 4 | T1 row 12, T2 row 1, T3 row 1, T4 row 1 | Yes |
| Tab selects | 1 | T1 row 13 only | Yes (T2 "tab select" entry was an earlier error, already corrected in the record) |
| Snapshots, total | 7 (5 untargeted, 2 targeted) | T1 row 14; T2 rows 2, 9; T3 row 2; T4 rows 2, 7, 19 = 7 | Total yes. The untargeted/targeted split is **not** verifiable from the controller, which does not log snapshot targets (see limitations) |
| Element clicks | 10 | T1 rows 15, 29; T2 rows 5, 12; T3 row 3; T4 rows 3, 8, 10, 15, 21 = 10 | Yes |
| Coordinate click | 1 | T1 row 24 (1585,375, Behavior disclosure chevron) | Yes |
| Key presses | 2 | T1 row 20 (ArrowRight); T2 row 6 (Control+a) | Yes |
| Script entries (`browser_type`) | 1 | T2 row 7 (flagged as `browser_type` in the controller, authorized by the brief) | Yes |
| Corrections | 0 | No second `browser_type` or second `Control+a` in any log | Yes |
| Finds | 20 | T1 rows 16, 19, 21, 25, 28, 30 (6); T2 rows 11, 14, 16, 17 (4); T3 rows 5, 7 (2); T4 rows 5, 9, 12, 14, 16, 20, 22, 24 (8) = 20 | Yes |
| Screenshot captures, successful | 11 | T1 rows 17, 22, 26; T2 rows 3, 8, 13; T3 row 4; T4 rows 4, 11, 17, 23 = 11 | Yes |
| Screenshot captures, distinct PNG files | 10 | Distinct filenames in the controller log = 10 (`gate-behavior-script-language.png` appears twice, T1 rows 22 and 26) | Yes |
| Screenshot refused by guard hook | 1 | T1 row 31 | Yes |
| Script Editor openings | 2 | T1 row 29 (pencil), T4 row 15 (pencil) | Yes |
| OK clicks | 1 | T2 row 12 | Yes |
| Cancel clicks | 1 | T4 row 21 | Yes |
| Designer Saves | 1 | T3 row 3 (`native toolbar Save button`) | Yes |
| Designer close/reopen pairs | 1 | T4 rows 3 (close) and 10 (reopen, recent-forms entry) | Yes |
| Restore-clean pairs | 0 | None | Yes |
| No or Yes prompt answers | 0 and 0 | No dialog-handling call in any log; the Save toast is not a prompt | Yes |
| Re-logins | 0 | No `browser_navigate`, no typing into a sign-in form, no call to the portal tab | Yes |
| Tool errors | T1: 2 | Controller "Errors": row 5 (`Read` of the EXP-094 record before it existed, file-not-found); row 31 (guard hook refusal) | Yes |
| Visible Mongoose errors | 0 | None seen in any screenshot or tree | Yes |

### Distinguishing the T1 errors

- **Initial missing-record read (T1 row 5).** A file read of the EXP-094 record before the record was created. It is a harness file-read error. It is not a Mongoose error and not a Designer state.
- **Guard-hook refusal (T1 row 31).** `PreToolUse ... Guard state unavailable: atomic update/audit I/O failed; preserve state and stop instead of bypassing the hook.` It is a harness-level refusal of the screenshot tool. It is not a Mongoose error. The pre-edit screenshot was then taken in T2, after the guard was reported usable.

### Other page-level observations (not Mongoose error dialogs)

- Every Designer snapshot header reads `Console: 2 errors, 0 warnings`. The console was not inspected (out of scope, and the brief forbids console inspection). Their origin is unexplained, and this audit does not classify them.
- The Properties pencil's DOM id is `btnEditDownload`. The click opened the Script Editor. The Download button in the editor was never clicked, and no download was observed or checked.

## 5. Confirmations required by T5

- **No second Save.** One Save click in the whole run (T3 row 3). No retry.
- **No editor correction.** One full-file entry and no second `Control+a`. Corrections = 0.
- **No unauthorized event action.** No click on any event handler, Data Change or component control. The Designer was not changed except the script content and its one Save. (The T1 Behavior expansion and the ArrowRight focus move were UI-only. No Script Language value change was observed: Visual Basic is still shown after expansion and after reopen.)
- **No runtime activity.** The portal tab (index 1) was listed but never selected. No Web Client runtime action. No refresh, restart or navigation.
- **No Yes answer, no Delete, no Regenerate Form, no checkout action, no unload.** None in the logs.

## 6. Inventory

### Worker-written files (repo-relative)

- `experiments/EXP-094-hello-world-part-6-section-2-fx-orders-form-script-calcordertotal.md` (created in T1; updated T2, T3, T4, T5)
- `evidence/EXP-094/gate-designer-fx-orders-clean-script-language.png`
- `evidence/EXP-094/gate-behavior-script-language.png` (written twice in T1; the file holds the expanded view)
- `evidence/EXP-094/editor-pre-edit-full.png`
- `evidence/EXP-094/editor-after-entry-readback.png`
- `evidence/EXP-094/ok-response-designer-state.png`
- `evidence/EXP-094/save-response-designer.png`
- `evidence/EXP-094/close-after-save-no-prompt.png`
- `evidence/EXP-094/reopened-designer-after-persistence-close.png`
- `evidence/EXP-094/editor-readback-after-reopen.png`
- `evidence/EXP-094/after-cancel-toolbar-state.png`
- `evidence/EXP-094/final-acceptance-audit.md` (this file)

Totals: 11 successful screenshot captures, 10 distinct PNG files, 2 Markdown files written by the worker.

### Controller-generated files present in `evidence/EXP-094/` (not worker-written)

- `evidence/EXP-094/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md` (labelled "controller-generated audit (not worker prose)").

### Browser-tool artifacts under `evidence/playwright/` (not worker-written; outside the EXP-094 paths)

18 files dated 2026-10-15T02-05 to 02-20 are on disk. The worker's records itemize 15 of them:

- Itemized: `page-…02-06-06-579Z.yml`, `…02-06-28-332Z.yml`, `…02-06-43-825Z.yml`, `…02-13-31-673Z.yml`, `…02-13-55-495Z.yml`, `…02-16-16-980Z.yml`, `…02-19-26-470Z.yml`, `…02-19-37-983Z.yml`, `…02-19-45-326Z.yml`, `…02-19-58-358Z.yml`, `…02-20-13-529Z.yml` (11 page snapshots); `console-…02-05-57-385Z.log`, `console-…02-13-10-436Z.log`, `console-…02-16-10-942Z.log`, `console-…02-19-21-876Z.log` (4 console logs).
- **Not itemized** in any worker record (3 console logs): `console-2026-10-15T02-05-57-386Z.log`, `console-2026-10-15T02-13-10-437Z.log`, `console-2026-10-15T02-16-10-943Z.log`. Each is a sibling of an itemized console log from the same tab-list event. The worker did not open them. Their origin is inferred, not verified.

### Repository confinement

This audit does not establish confinement. The worker's inventory above lists the files the worker wrote. The harness computes confinement from before and after Git state, and the operator's git review is authoritative.

## 7. Final state (end of T4; T5 made no browser change)

- Designer tab `FX_Orders` is selected and is the only Form open. Form tab, User scope (`ScopeType: User`), Name `FX_Orders`, Script Language Visual Basic (unchanged).
- The Designer is clean: Save, Undo and Regenerate Form are disabled (T4 read after Cancel).
- Script Editor closed (Cancel, T4). No dialog, prompt or menu is open. No browser-native dialog is open.
- The saved script equals the file text in every code line, up to the accepted leading whitespace (the readback is from the same session).
- Portal tab: not touched.

## 8. Persistence boundary (stated explicitly)

The close/reopen in this run is an **ordinary same-session close/reopen** of a Designer Form. It is a weak persistence boundary. It does not establish:

- independent database durability (the stored row, the server copy or the metadata cache was not inspected);
- a fresh session or a fresh server load (no unload, refresh, sign-out or new session was done, and the brief forbids them);
- runtime compile success (the Compile Result panel was never expanded);
- execution correctness (`CalcOrderTotal` was never invoked; no event handler is wired);
- replay.

## 9. Findings and knowledge state

All EXP-094 findings are **observed only**, from a single run in a single session:

- Pre-edit template and Script Language Visual Basic at the gate: observed.
- File text entered with leading-whitespace-only readback differences: observed.
- OK closed the editor with no visible message: observed.
- One native Save with the toast `Form [FX_Orders] and global object(s) were saved.`: observed.
- Close with no save prompt after the Save, reopen, Save disabled, readback matches the file: observed (same session).
- Save, Undo and Regenerate Form disabled after Cancel: observed.
- Save enabled at T2 start after the T1 pencil open, versus Save appearing greyed in the T4 readback with the editor open: observed; the difference is **not explained**.
- The save-close-reopen-readback sequence: observed. It is **not** replay-verified and is **not** promoted to a recipe.

## 10. Limitations (outstanding)

1. Compile success unknown. The Compile Result panel was never expanded, and no compile or runtime result exists.
2. Same-session persistence only. No cross-session or database durability check.
3. Leading whitespace: the editor's rendered indentation is deeper than the file's (for example line 16 renders at about 15 spaces' width against the file's 6). The brief accepts leading-whitespace differences, so this is accepted. Whether the stored bytes match the file's leading whitespace is not observable.
4. Trailing blank line: the file has 23 lines by a line-start count and no trailing blank line. The editor shows an empty line 24, probably a display artifact of the final newline. Accepted under the brief.
5. The Save state with the editor open is checked visually (T4), not in the accessibility tree.
6. The snapshot target split (5 untargeted, 2 targeted) is recorded by the worker only. The controller does not log snapshot targets.
7. The controller's "errors" and "reads" classifications are controller-defined. The reads figures reproduce only under the definition in section 4.
8. Three console logs on disk are not itemized in any worker record.
9. The page header's `Console: 2 errors` was not inspected.
10. The Designer's ScopeName is blurred in the status bar text (`<secret>` in the tool output); it is not recorded here.

## 11. Recommendation

**ACCEPTED AS OBSERVED**, with the scope limits above. Each of the five acceptance checks is supported by its evidence (section 3) and by the reconciled counts (section 4). The capitalization question is resolved against the file (section 1), and it is not a discrepancy in the exact-text check.

Operator disposition items (decisions, not blockers):

1. Confirm that the file's lowercase `as` in `ItemCost as String` is authoritative. The recommendation is yes.
2. Correct the descriptive spelling `ItemCost As String` in the EXP-094 objective for future briefs, or leave it as a documented descriptive difference.
3. Decide whether a read-only expansion of Compile Result is wanted. It is outside the T4 and T5 scope and needs a new authorization.
4. Decide whether cross-session durability is wanted. It needs a new session, which is a separate task.

This recommendation does not claim compile success, runtime execution, cross-session or database durability, or replay.
