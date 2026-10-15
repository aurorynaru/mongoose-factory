# EXP-094 - Hello World Part 6 Section 2: FX_Orders form script method CalcOrderTotal (operator-supplied tutorial code), one Designer Save, readback after close/reopen

Status: **COMPLETE FOR THE BRIEF (observed, single session).** T1 stopped blocked (guard hook refused a screenshot; Script Editor opened, no edit). T2 (operator-authorized) verified the pre-edit template, entered the exact script text, read it back and clicked OK once. T3 (operator-authorized) invoked the native toolbar Save **once**: "Form [FX_Orders] and global object(s) were saved." T4 (operator-authorized) closed the clean Form once (no save prompt), reopened it once from the Form menu recent-forms entry, read the Script Editor back against the file (match), left it with Cancel once, and found Save, Undo and Regenerate Form disabled. The restore-clean pair was **not** needed, because Save stayed disabled after Cancel.

What is **not** shown: compile success, cross-session durability, runtime calculation, event handler behavior. These were not tested and are not claimed.

Brief: EXP-094 approved brief (commit `146a157`). Script text: `docs/mongoose/scripts/FX_Orders-form-script.vb` (commit `fd07400`). Worker session: `9e9f0f96-9739-44d8-9df7-3ff385a3eadc`. Run: `R-20261015-100536-rBut`; tasks T1 (`cycle 0`, plus a re-run), T2 (`cycle 2`), T3 (`cycle 3`), T4 (`cycle 5`).

## Sources reviewed (T1, before browser interaction)

- `AGENTS.md`, `docs/mongoose/transcripts/hello-world-pt6.md` Section 2 (lines 89-111; transcript `[1:07]`-`[2:05]`, lines 340-349), `docs/mongoose/transcripts/hello-world-pt6-form-script.md`, `docs/mongoose/scripts/FX_Orders-form-script.vb` (23 lines by a line-start count in T5; the Read tool shows an empty line 24, which is a display artifact), `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: EXP-093 (line 1010) and EXP-081 (line 863).

## Gate (T1, read-only, before the pencil click)

Evidence: `evidence/EXP-094/gate-designer-fx-orders-clean-script-language.png` (Behavior collapsed) and `evidence/EXP-094/gate-behavior-script-language.png` (Behavior expanded; this file was written twice in T1, and its final content is the expanded view).

- Designer tab `FX_Orders` selected; Name `FX_Orders`; Form tab; Form Type Normal.
- Toolbar Save, Undo and Regenerate Form **disabled**; status bar `[ ScopeType: User / ScopeName: <operator user> ]`.
- Behavior expanded: `Script Language` = **Visual Basic**.

## Pre-edit editor (T2, AC-1)

Evidence: `evidence/EXP-094/editor-pre-edit-full.png` (whole content visible; no scrolling needed).

Opened in T1 with the blue pencil (`#btnEditDownload`); not clicked again in T2. The dialog is `Script Editor` with OK, Cancel, Help and Download. Gutter lines 1-20.

| Line | Pre-edit text | Template (EXP-093 / brief) |
|---|---|---|
| 1 | Option Explicit On | match |
| 2 | Option Strict On | match |
| 3 | (blank) | match |
| 4-7 | Imports System / Microsoft.VisualBasic / Mongoose.IDO.Protocol / Mongoose.Scripting | match |
| 8-9 | (blank) | match |
| 10 | Namespace Mongoose.FormScripts | match |
| 11 | Public Class FX_Orders | match |
| 12 | Inherits FormScript | match |
| 13 | (blank) | match |
| 14 | `'` | template comment line |
| 15 | ' Methods go here | match |
| 16 | `'` | template comment line |
| 17 | (blank) | match |
| 18 | End Class | match |
| 19 | End Namespace | match |
| 20 | (blank) | trailing line |

Result: **matches the template.** No method was present before the edit.

## Script entry (T2, AC-2)

- Click once inside the editor text (`textbox "Editor content"`), then `Control+a`. Then one `browser_type` call with the full file text (non-slow). The tool applied it as a single fill, replacing the template; no key-by-key typing was used.
- **Corrections: 0.** The one-correction allowance was not used.
- Readback: `evidence/EXP-094/editor-after-entry-readback.png` (all 24 gutter lines visible; no scrolling needed). The accessibility tree (targeted snapshot of the code panel) shows the same text nodes.

Line-by-line comparison against `FX_Orders-form-script.vb`:

| File line | Editor readback | Result |
|---|---|---|
| 1-2 | Option Explicit On / Option Strict On | exact |
| 3 | blank | exact |
| 4-7 | Imports System / Microsoft.VisualBasic / Mongoose.IDO.Protocol / Mongoose.Scripting | exact |
| 8-9 | blank | exact |
| 10-12 | Namespace Mongoose.FormScripts / Public Class FX_Orders / Inherits FormScript | exact |
| 13 | blank | exact |
| 14 | Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String) | content exact, including lowercase `as` (T5: the file itself has lowercase `as`; see the T5 section); **leading whitespace differs** (file 3 spaces; the editor shows a deeper indent) - accepted |
| 15 | Dim OrderTotal As Decimal | content exact; leading whitespace differs - accepted |
| 16 | OrderTotal = CDec(OrderCount) * CDec(ItemCost) | content exact; leading whitespace differs - accepted |
| 17 | blank | exact |
| 18 | ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal",OrderTotal.ToString()) | content exact (no auto-inserted brackets or quotes); leading whitespace differs - accepted |
| 19 | blank | exact |
| 20 | End Sub | content exact; leading whitespace differs - accepted |
| 21 | blank | exact |
| 22-23 | End Class / End Namespace | content exact; **leading whitespace differs** (editor indents them) - accepted |
| 24 | trailing blank line | editor shows a line 24 with no text - accepted |

Recorded differences: **leading whitespace only** (lines 14-16, 18, 20, 22-23) and the trailing blank line 24. No other differences. The Compile Result panel stayed collapsed; no compile output was displayed or inspected.

## OK (T2)

- One click on `OK` (`e829`). Response: the Script Editor dialog closed. A find for "Script Editor" then returned no matches. **No message, error, compile output or prompt was displayed.**
- Evidence: `evidence/EXP-094/ok-response-designer-state.png` (Designer viewport after OK: the editor is gone; Properties show Behavior expanded, Script Language Visual Basic).
- After OK: Save and Regenerate Form enabled; Undo and Redo disabled. Save was already enabled at the start of T2, so the Designer was **dirty before the edit**, from the T1 pencil open (consistent with EXP-093).

## Designer Save (T3, AC-2)

Start-of-task gate (T3, fresh untargeted snapshot, read-only): Designer tab `FX_Orders` current; ScopeType User; Script Editor **closed**; toolbar Save **enabled**; Regenerate Form enabled; Undo disabled.

- **Save invocations: 1.** One click on the native toolbar Save (`e16`). No retry.
- **Native response (verbatim, toast):** heading `Save`; body `Form [FX_Orders] and global object(s) were saved.`; a `Close` button on the toast. Non-modal notification, not a prompt or dialog; it was not dismissed.
- Tool-level error after the click: none.
- Evidence: `evidence/EXP-094/save-response-designer.png`. Shows the toast text, the top toolbar Save and Undo icons greyed out, the `FX_Orders` Form tab, Name `FX_Orders`, Script Language Visual Basic, and `ScopeType: User`. Proves the native response and the toolbar state at that moment. Does not prove persistence after close/reopen, or compile success.
- Post-Save state (read-only): Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, Redo `[disabled]`.

## Persistence checkpoint (T4, AC-3)

Start-of-task gate (T4, fresh untargeted snapshot, read-only): tab list before any tab action (tab 0 = Designer `MGForm=FX_Orders`, tab 1 = portal). FX_Orders selected; ScopeType User; Script Editor closed; Save, Regenerate Form and Undo disabled. Gate matched. (No gate screenshot was taken in T4; the snapshot is the gate evidence for T4.)

1. **Close (persistence), one click** on the FX_Orders Form-tab close control (`closable FX_Orders`).
   - Response: the Form tab closed and the Designer became blank with no Form open. **No save prompt appeared**; a find for "Do you want to save" returned no matches.
   - Evidence: `evidence/EXP-094/close-after-save-no-prompt.png` (blank Designer, no dialog; toolbar Save greyed; status bar ScopeType User).
2. **Reopen, one click** on the Form menu (`Form`), then one click on the recent-forms entry `FX_Orders` (the menu also listed `FX_HelloWorld01`, not touched).
   - Result: `FX_Orders` opened; the page URL then carried `MGForm=FX_Orders`.
   - Evidence: `evidence/EXP-094/reopened-designer-after-persistence-close.png`. Shows Name `FX_Orders`, Form Type Normal, Is Master True, Script Language `Visual Basic`, status bar `ScopeType: User`, the Save icon greyed. The find for "Save" returned `Save [disabled]` and `Regenerate Form [disabled]`. Undo was greyed in the screenshot; no find for Undo was run in the reopened state (its disabled state was checked after Cancel, step 4).
3. **Script Editor, one open** (blue pencil, Form selected, `#btnEditDownload`).
   - Readback: `evidence/EXP-094/editor-readback-after-reopen.png` (all 24 gutter lines visible; no scrolling needed). Targeted accessibility snapshot of the code panel (`e1137`) shows the code-line nodes.
   - Comparison with `FX_Orders-form-script.vb` and the T2 readback: every code line matches the file, with the same leading-whitespace differences as T2 (lines 14-16, 18, 20, 22-23) and the trailing blank line 24. **No other differences.** Specifically present and exact in the readback: `Public Class FX_Orders`; `Inherits FormScript`; `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)`; `ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal",OrderTotal.ToString())`; `End Sub`; `End Class`; `End Namespace`.
   - Limitation: the editor's text box value is truncated in find output, so the line comparison rests on the rendered code-line nodes plus the screenshot, not on a single full-text dump.
4. **Cancel, one click** (`Cancel` button in the Script Editor). The editor closed. The script was not edited, corrected, executed or saved.
5. **Toolbar after Cancel (read-only):** find "Save" returned `Save [disabled]` and `Regenerate Form [disabled]`; find "Undo" returned `Undo [disabled]` and `Redo [disabled]`. Evidence: `evidence/EXP-094/after-cancel-toolbar-state.png` (Designer clean; Script Editor closed; no dialog).
6. **Restore-clean pair: not performed.** The brief allows the second close/reopen pair only if Save is enabled after Cancel. It stayed disabled, so the brief says not to make an unnecessary second close/reopen. Save was not enabled after Cancel, so the EXP-093 dirty-on-open behavior did **not** recur in this step (see Knowledge state).

Save-prompt text: none seen, because no prompt appeared at the close. Nothing was answered.

## Acceptance checks

| ID | Status | Evidence |
|---|---|---|
| AC-1 | **Passed (observed).** Sources reviewed; session usable; FX_Orders User scope; Designer clean at gate; Script Language Visual Basic; pre-edit editor matches the EXP-093 template; the editor was opened once in T1 and not reopened for the pre-edit read. | gate PNGs (`gate-designer-fx-orders-clean-script-language.png`, `gate-behavior-script-language.png`); `editor-pre-edit-full.png` |
| AC-2 | **Passed (observed, single session).** The file text replaced the template with 0 corrections; line-by-line readback with leading-whitespace-only differences; OK once with no visible response; exactly one Designer Save, native toast "Form [FX_Orders] and global object(s) were saved."; no error. Compile success **not** claimed. | `editor-after-entry-readback.png`, `ok-response-designer-state.png`, `save-response-designer.png` |
| AC-3 | **Passed (observed, single session).** One close (no save prompt) and one reopen from the recent-forms entry; Save disabled after reopen; Script Editor readback matches the file, including `CalcOrderTotal` and the `FX_DerOrderTotal` line; editor left with Cancel; Save, Undo and Regenerate Form disabled after Cancel; restore-clean pair not needed. Limitation: same session, no new-session check. | `close-after-save-no-prompt.png`, `reopened-designer-after-persistence-close.png`, `editor-readback-after-reopen.png`, `after-cancel-toolbar-state.png` |
| AC-4 | **Compliant.** No Designer change beyond the script content and its one Save; no event handler, component event, runtime action, unload, checkout action, Run/Download/Help click or Yes answer. | - |
| AC-5 | **This record.** Counts below; the worker-written file inventory is in the next section. | - |

## Cumulative browser action audit (T1 to T4, exact counts)

Per-task columns: T1, T2, T3, T4, Total.

| Action | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| Tab list (read-only) | 1 | 1 | 1 | 1 | 4 |
| Tab select | 1 | 0 | 0 | 0 | 1 |
| Untargeted snapshot (read-only) | 1 | 1 | 1 | 2 | 5 |
| Targeted snapshot (read-only; code panel) | 0 | 1 | 0 | 1 | 2 |
| Element clicks (`browser_click`) | 2 | 2 | 1 | 5 | 10 |
| Coordinate clicks (`browser_mouse_click_xy`) | 1 | 0 | 0 | 0 | 1 |
| Key presses (`browser_press_key`) | 1 | 1 | 0 | 0 | 2 |
| Text entries (`browser_type`, one full-file fill) | 0 | 1 | 0 | 0 | 1 |
| Corrections | 0 | 0 | 0 | 0 | 0 |
| Finds (read-only) | 6 | 4 | 2 | 8 | 20 |
| Screenshot captures saved (see reconciliation) | 3 | 3 | 1 | 4 | 11 |
| Screenshot refused by guard hook | 1 | 0 | 0 | 0 | 1 |

Element clicks by task: T1 = Behavior row, pencil. T2 = editor text box, OK. T3 = toolbar Save. T4 = FX_Orders Form-tab close, Form menu, FX_Orders recent-forms entry, pencil, Cancel.

Coordinate click detail: T1 one click at (1585,375) on the Behavior disclosure chevron (expanded the group).

Key presses: T1 = ArrowRight (moved focus to the Behavior value cell; no expansion; no value change seen). T2 = Control+a (select all in the editor).

Script Editor lifecycle:

| Item | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| Script Editor opens (pencil) | 1 | 0 | 0 | 1 | 2 |
| Left with OK | 0 | 1 | 0 | 0 | 1 |
| Left with Cancel | 0 | 0 | 0 | 1 | 1 |
| Left open across a task boundary | 1 | 0 | 0 | 0 | 1 (T1 end, reconciled in T2; not a prompt) |
| Text entries (edit) | 0 | 1 | 0 | 0 | 1 |
| Corrections | 0 | 0 | 0 | 0 | 0 |
| OK clicks | 0 | 1 | 0 | 0 | 1 |
| Cancel clicks | 0 | 0 | 0 | 1 | 1 |
| Run / Download / Help clicks in the editor | 0 | 0 | 0 | 0 | 0 |

Designer and other lifecycle:

| Item | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| Designer Saves (native toolbar Save) | 0 | 0 | 1 | 0 | 1 |
| Designer Save retries | 0 | 0 | 0 | 0 | 0 |
| Designer close/reopen pairs | 0 | 0 | 0 | 1 | 1 (persistence) |
| Restore-clean close/reopen pairs | 0 | 0 | 0 | 0 | 0 (not needed) |
| Save-close prompts seen | 0 | 0 | 0 | 0 | 0 |
| Prompts answered No | 0 | 0 | 0 | 0 | 0 |
| Prompts answered Yes | 0 | 0 | 0 | 0 | 0 |
| Toasts seen (not prompts) | 0 | 0 | 1 (Save toast) | 0 | 1 |
| Errors seen (editor, compile, Save, session, server-event) | 0 | 0 | 0 | 0 | 0 |
| Re-logins (worker) | 0 | 0 | 0 | 0 | 0 |
| Refreshes, restarts, direct URL navigations (incl. portal) | 0 | 0 | 0 | 0 | 0 |
| Unloads, checkout actions, FormSync, deployment, Regenerate Form, top-toolbar Delete | 0 | 0 | 0 | 0 | 0 |
| Browser JavaScript, console or network inspection, direct SQL | 0 | 0 | 0 | 0 | 0 |

Dialogs and menus left open at the end: none. The Script Editor is closed (Cancel, T4). The Form menu was closed by selecting the recent-forms entry. The Save toast (T3) is a transient notification.

## Reconciliation notes

- **T2 tab select.** The T2 report listed a "Tab select (tab 0, succeeded)" step. That was an error: T2 issued a tab list, an untargeted snapshot and a targeted snapshot, and no select. The T2 tab-select count is 0. The cumulative tab-select count is **1** (T1 only). Earlier totals of 2 were wrong and are replaced by the table above.
- **Screenshot counts versus unique files.** T1 captured three PNGs but wrote two unique files: `gate-behavior-script-language.png` was written twice in T1 (Behavior not expanded, then expanded) and the first content was overwritten. T2 wrote three unique files; T3 one; T4 four. Totals: **11 captures** (T1 3 + T2 3 + T3 1 + T4 4) and **10 unique PNG files**. (At the end of T3 the total was 7 captures and 6 unique files; the T4 captures add 4 captures and 4 unique files.) The one refused pre-edit capture in T1 wrote no file and is not counted.
- **Editor left open at T1's end.** T1 stopped blocked because the screenshot guard hook refused a capture (`Guard state unavailable: atomic update/audit I/O failed`); the Script Editor was left open with no edit. T2 continued from that state after the operator confirmed the guard was usable. This was a guard-hook stop, not a Mongoose error and not a prompt.

## Worker-written file inventory (T1 to T4)

Written by the worker (11 PNG captures; 10 unique PNG files plus the record):
- `experiments/EXP-094-hello-world-part-6-section-2-fx-orders-form-script-calcordertotal.md` (created in T1; updated in T2, T3 and T4)
- `evidence/EXP-094/gate-designer-fx-orders-clean-script-language.png` (T1)
- `evidence/EXP-094/gate-behavior-script-language.png` (T1; written twice in T1, final content = expanded Behavior)
- `evidence/EXP-094/editor-pre-edit-full.png` (T2)
- `evidence/EXP-094/editor-after-entry-readback.png` (T2)
- `evidence/EXP-094/ok-response-designer-state.png` (T2)
- `evidence/EXP-094/save-response-designer.png` (T3)
- `evidence/EXP-094/close-after-save-no-prompt.png` (T4)
- `evidence/EXP-094/reopened-designer-after-persistence-close.png` (T4)
- `evidence/EXP-094/editor-readback-after-reopen.png` (T4)
- `evidence/EXP-094/after-cancel-toolbar-state.png` (T4)

Written by the browser MCP tool (not by the worker; outside the EXP-094 paths; for operator review):
- T1: `evidence/playwright/page-2026-10-15T02-06-06-579Z.yml`, `page-2026-10-15T02-06-28-332Z.yml`, `page-2026-10-15T02-06-43-825Z.yml`, `console-2026-10-15T02-05-57-385Z.log`
- T2: `evidence/playwright/page-2026-10-15T02-13-31-673Z.yml`, `page-2026-10-15T02-13-55-495Z.yml`, `console-2026-10-15T02-13-10-436Z.log`
- T3: `evidence/playwright/console-2026-10-15T02-16-10-942Z.log`, `page-2026-10-15T02-16-16-980Z.yml`
- T4: `evidence/playwright/console-2026-10-15T02-19-21-876Z.log`, `page-2026-10-15T02-19-26-470Z.yml`, `page-2026-10-15T02-19-37-983Z.yml`, `page-2026-10-15T02-19-45-326Z.yml`, `page-2026-10-15T02-19-58-358Z.yml`, `page-2026-10-15T02-20-13-529Z.yml`

T5 additions (worker-written):
- `evidence/EXP-094/final-acceptance-audit.md` (T5 audit; zero browser calls)
- this record (T5 section and corrections)

Controller-generated (not worker-written): `evidence/EXP-094/harness-audit-T1.md` to `harness-audit-T4.md`.

Browser-tool artifacts on disk: 18 files under `evidence/playwright/` dated 2026-10-15T02-05 to 02-20. The itemized list above covers 15. Three console logs (`console-2026-10-15T02-05-57-386Z.log`, `…02-13-10-437Z.log`, `…02-16-10-943Z.log`) are not itemized in any worker record.

No other file was written. No script file, tutorial source, AGENTS.md, recipe or earlier record was modified.

## T5: final acceptance audit (documentation only)

T5 made zero browser calls and zero Mongoose changes. Full audit: `evidence/EXP-094/final-acceptance-audit.md`.

- **Capitalization.** The source file has lowercase `as` in `ItemCost as String` (line 14, case-sensitive Grep). The entry payload, the editor's accessibility text (T2 and T4) and both readback screenshots show the same lowercase `as`. The T4 prose was accurate. The capitalized `ItemCost As String` appears only in the task's descriptive target line, not in the file. Resolved against the file; the descriptive spelling differs by keyword case only.
- **Assignment statement.** `ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal",OrderTotal.ToString())` is on file line 18 (Grep, exact). It matches the T2 and T4 accessibility text character for character.
- **Counts.** Reconciled row by row against the controller audits: 4 tab lists, 1 tab select, 7 snapshots (5 untargeted and 2 targeted; the split is worker-reported only), 10 element clicks, 1 coordinate click, 2 key presses, 1 entry, 0 corrections, 20 finds, 11 successful captures (10 distinct PNG files), 1 guard-hook refusal, 2 Script Editor openings, 1 OK, 1 Cancel, 1 Designer Save, 1 close/reopen pair, 0 restoration pairs, 0 No or Yes answers, 0 re-logins. The controller's read totals (12, 10, 5, 16) reproduce under its definition (browser read-only calls only).
- **T1 errors.** The missing-record read (file-not-found, before the record existed) is a harness file-read error. The guard-hook refusal is a harness refusal of the screenshot tool. Neither is a Mongoose error. No visible Mongoose error appeared in any task.
- **Recommendation.** ACCEPTED AS OBSERVED, with the limits listed in the audit (no compile result, same-session persistence only, the un-itemized console logs, and the un-inspected `Console: 2 errors` header). Operator disposition items are listed in the audit, section 11.

## Final state (after T4)

- Designer tab `FX_Orders`: selected; Form tab open; User scope (status bar `ScopeType: User`); Name `FX_Orders`; Script Language Visual Basic (unchanged).
- Designer clean: Save, Undo and Regenerate Form disabled (read after Cancel).
- Script content: the file text, saved by the T3 Save and read back after the T4 reopen (same session).
- Script Editor: closed (Cancel). No dialog, prompt or menu open. No browser-native dialog open.
- Portal tab (tab 1): not touched in T4.

## Knowledge state

- Gate (User scope, clean, Visual Basic): **observed** (single session).
- Pre-edit template matches EXP-093 (19-line template plus trailing line): **observed**.
- Entry of the file text, leading-whitespace-only readback differences: **observed** (single session).
- OK closed the editor with no visible message: **observed**.
- One native Designer Save with toast "Form [FX_Orders] and global object(s) were saved.": **observed** (single session).
- Close with no save prompt after the Save: **observed** (single session).
- Reopen from the recent-forms entry, Save disabled, readback matches the file: **observed** (same session; reopen came from the Designer's own recent-forms list, not a new session).
- Save, Undo and Regenerate Form disabled after Cancel: **observed** (single session).
- EXP-093 dirty-on-open behavior: **observed in T1 and not reproduced in T4.** In T1, Save was enabled by the start of T2 after the pencil open (no Cancel, no edit yet). In T4, the readback screenshot taken with the editor open shows the toolbar Save icon greyed (visual reading only; the accessibility tree was not queried while the editor was open), and Save was disabled after Cancel. The likely difference (the template is generated on first open) is a hypothesis, not tested.
- Save-then-close-then-reopen-then-readback sequence: **observed** (single run, single session). It is not a validated or replayed procedure.
- Compile success: **not established**. The Compile Result panel was not inspected. Not claimed.
- Event handler, runtime calculation, `FX_DerOrderTotal` update at runtime: **not tested**.
- Cross-session durability and database-level durability: **not tested**. Not claimed.
- Replay verification: **none**.

## Open questions / next step

1. Compile output: the Compile Result panel was never expanded. A read-only look at it would show whether the script compiled in the Designer. That is outside the T4 brief; it needs an operator decision.
2. Cross-session durability: needs a new session with a fresh Designer load. Not done.
3. Section 3 (the Calc Order Total event and its Form Script Method response) and Section 4 (component Data Change events) are a separate experiment and have not been started.
4. The T1 editor was left open across the task boundary after a guard-hook stop; T2 closed it with OK.
5. Operator disposition (T5): confirm that the file's lowercase `as` is authoritative (recommended), and correct the descriptive `ItemCost As String` spelling in future briefs.
6. The T5 recommendation is ACCEPTED AS OBSERVED, subject to the limits in `evidence/EXP-094/final-acceptance-audit.md`, section 10.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 2 is complete: the FX_Orders form script now contains the tutorial method **`CalcOrderTotal`**, saved once and read back after a Designer close and reopen. The operator decided acceptance; the coordinator had already closed the run as accepted.

- Changed, for later cleanup (Form `FX_Orders`, User scope): the form script content is now `docs/mongoose/scripts/FX_Orders-form-script.vb`:
  - the generated header (`Option Explicit On`, `Option Strict On`, Imports, `Namespace Mongoose.FormScripts`, `Public Class FX_Orders`, `Inherits FormScript`);
  - `Public Sub CalcOrderTotal(OrderCount As String, ItemCost as String)`, which multiplies `CDec(OrderCount) * CDec(ItemCost)` and calls `ThisForm.PrimaryIDOCollection.SetCurrentObjectPropertyPlusModifyRefresh("FX_DerOrderTotal",OrderTotal.ToString())`.
  - One Designer Save: "Form [FX_Orders] and global object(s) were saved." No event handler and no component event yet.
- **Run R-20261015-100536-rBut** (5 worker tasks) ended `completed/accepted`:
  - T1 passed the gate (User scope, clean, Script Language Visual Basic) and opened the Script Editor. The pre-edit screenshot was then refused by the PreToolUse guard ("Guard state unavailable: atomic update/audit I/O failed"), and the worker stopped as instructed.
  - The operator approved the denial. The assistant inspected the guard state read-only: `guard-state.json` was valid and no stale lock remained, so the error was transient. The operator then had the run continue from the open, unedited editor without clicking the pencil again.
  - T2 entered the text in one fill-mode entry (the flagged `browser_type`, allowed) and clicked OK once with no message. T3 saved, T4 did the close/reopen and readback, and T5 wrote the documentation-only final audit.
- Screenshots viewed by the operator assistant:
  - `save-response-designer.png`: the Save toast, scope User, Behavior > Script Language Visual Basic;
  - `editor-readback-after-reopen.png`: after the reopen, the Script Editor shows all 23 lines of the file with the method and the `FX_DerOrderTotal` line.
- Findings (observed):
  1. **The editor auto-indents on entry.** Each later line was indented one level deeper, down to `End Namespace`. Only the leading whitespace differs; VB ignores it. To avoid this, enter code unindented or key by key.
  2. **Opening the Script Editor on a saved script and pressing Cancel left the Form clean,** so no restore pair was needed. In EXP-093, on an empty script, the same steps made the Form dirty. This supports, without proving, that the template generation causes the dirty state.
  3. **The Script Editor has a collapsible "Compile Result" panel** above OK / Cancel / Help / Download. It was never expanded, so compile success is **not established**.
- Counts: Script Editor opens 2 (OK 1, Cancel 1), text entries 1 (corrections 0), Designer Saves 1, close/reopen pairs 1 (no prompt), restore pairs 0, Yes/No answers 0, runtime actions 0, unloads 0, checkout actions 0, re-logins 0.
- Limits: same-session UI evidence only. Compile and runtime behavior are untested. Every Designer snapshot header showed "Console: 2 errors", which was not inspected (out of scope).
- Harness: the guard-state I/O failure has happened twice (EXP-091 T5, EXP-094 T1). It is a candidate for a retry inside the guard's atomic update (outside an experiment, with operator approval).
- Confinement (git status): only `evidence/EXP-094/` and this record were written by the run.
- Next: Part 6 section 3. Create the FX_Orders event handler (custom event Calc Order Total, Response Type Form Script Method, method CalcOrderTotal, parameters `P(FX_Count),P(FX_ItmsCost)`) and wire Data Change on FX_ItemCombobox and FX_CountEdit. Then run the runtime test, which also shows whether the script compiles.
