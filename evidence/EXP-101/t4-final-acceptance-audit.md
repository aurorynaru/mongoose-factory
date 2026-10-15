# EXP-101 final acceptance audit (T4, documentation only)

Date: 2026-10-15. Task: T4, task_message_id a25cd9e1-16f8-4256-a137-57a0ab06aa10, worker session d050b9da-a719-498d-845c-8436de751c27.

Scope of this task: documentation only. No browser calls, no Mongoose changes, no readback, upload, OK or Save. Inputs reviewed: the experiment record, the three controller-generated harness audits (`evidence/EXP-101/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`), the worker-written screenshots, and a read-only directory listing of `evidence/playwright/` (wrapper-generated files). The one screenshot viewed in T4 was `t3-01` (see discrepancy D1); viewing an existing file is not a browser call.

## 1. Reconciled cumulative action counts

Harness categories (from the harness audit headers): **actions** = clicks, mouse moves, wheel scrolls, tab selects, file uploads, select_option. **reads** = tab lists, snapshots, screenshots, finds. File Read/Grep/Glob and Write calls are not in these counts.

| Count | Worker record (T1, T2, T3) | Harness audit (T1, T2, T3) | Cumulative | Match |
|---|---|---|---|---|
| Image library opens (Edit > Image) | 1, 1, 1 | ref clicks on Image: rows 18, 6, 6 | **3** | yes |
| Library left with Close Window (x) | 1, 0, 1 | Close clicks: T1 row 43, T3 row 30 | **2** | yes |
| Library left by OK | 0, 1, 0 | OK click: T2 row 36 | **1** | yes |
| New clicks (Images dialog) | 0, 2, 0 | T2 rows 12, 24 | **2** | yes |
| Select File coordinate clicks | 0, 2, 0 | T2 mouse_click_xy rows 15, 27 | **2** | yes |
| File uploads (file-chooser) | 0, 2, 0 | T2 file_upload rows 16, 28 | **2** | yes |
| Upload clicks | 0, 2, 0 | T2 rows 20, 32 | **2** | yes |
| Library OK clicks | 0, 1, 0 | T2 row 36 | **1** | yes |
| Designer Saves | 0, 1, 0 | T2 row 40 | **1** | yes |
| Display Option changes (to Fit) | 0, 0, 1 | T3 rows 20 (Open) and 22 (Fit option) | **1** | yes |
| View clicks (readback) | 0, 0, 2 | T3 rows 17, 26 | **2** | yes |
| Ref clicks, total | 3, 8, 7 | T1 rows 16, 18, 43; T2 rows 4, 6, 12, 20, 24, 32, 36, 40; T3 rows 4, 6, 17, 20, 22, 26, 30 | **18** | yes |
| Coordinate clicks, total | 0, 2, 0 | as above | **2** | yes |
| Mouse moves | 1, 1, 1 | rows 21, 7, 10 | **3** | yes |
| Mouse wheel | 6, 1, 1 | rows 22, 25, 28, 31, 34, 37; 8; 11 | **8** | yes |
| Tab select | 1, 0, 0 | T1 row 12 | **1** | yes |
| Tab list | 1, 1, 1 | T1 row 11; T2 row 1; T3 row 1 | **3** | yes |
| select_option attempts | 0, 0, 1 (tool error) | T3 row 19 (error) | **1 (error)** | yes |
| Snapshots, untargeted | 1, 2, 1 | T1 row 13; T2 rows 2, 11; T3 row 2 | **4** | yes |
| Snapshots, dialog-scoped | 1, 0, 2 | T1 row 42; T3 rows 15, 16 | **3** | yes |
| find (read-only) | 3, 7, 8 | T1 rows 17, 40, 41; T2 rows 5, 19, 23, 31, 35, 39, 43; T3 rows 5, 7, 14, 18, 21, 25, 29, 33 | **18** | yes |
| Screenshots | 9, 10, 6 | T1 9; T2 10; T3 6 | **25** | yes |
| Prompts | 0 | none recorded | **0** | yes |
| Errors | 0, 0, 1 | T3 harness `errors=1` (row 19) | **1** | yes |
| Re-logins / session expiries | 0 / 0 | harness `errors=0` for T1, T2 | **0 / 0** | yes |
| Forms opened, edited or saved | 0 | none | **0** | yes |
| Existing images overwritten, imported, exported, renamed or deleted | 0 | element names show none | **0** | yes |
| Prohibited-tool hits | — | `prohibited-tool hits=0` in T1, T2 and T3 | **0** | yes |

Totals: **35 interaction actions** (18 ref clicks + 2 coordinate clicks + 2 file uploads + 3 mouse moves + 8 wheel scrolls + 1 tab select + 1 select_option) and **53 browser reads** (3 tab lists + 7 snapshots + 25 screenshots + 18 finds). Harness totals: T1 11 actions + 15 reads; T2 14 + 20; T3 10 + 18. Sum: 35 + 53 = 88 browser calls, matching 26 + 34 + 28.

### 1a. Wrapper cross-check (`evidence/playwright/`)

The browser wrapper writes one page snapshot file for each click, file upload or select action that returns a page state. Mouse moves, wheel scrolls, finds, screenshots and the failed select_option wrote none.

- Expected snapshot-bearing actions: 18 ref clicks + 2 coordinate clicks + 2 file uploads = **22**.
- Page snapshot files with timestamps 14:11:24 to 14:19:50: **22**. By task: T1 3 (14:11:24, 14:11:30, 14:12:19); T2 12 (14:14:47 to 14:15:59); T3 7 (14:18:52 to 14:19:50).
- Result: **exact match**. This is independent evidence that no unrecorded click or upload occurred.
- Console log files: 4 (`console-…14-11-13-536Z`, `…14-11-13-538Z`, `…14-14-40-873Z`, `…14-18-47-252Z`) against 3 tab-list outputs. One file (`…14-11-13-538Z`) is not referenced by any output in this worker's transcript. See D5.

## 2. Discrepancies, stated explicitly

- **D1 (corrected in T4): `t3-01` was not viewed in T3.** The T3 record said "Screenshots 6; all viewed". The T3 harness audit has no Read of `t3-01-designer-gate-before-readback.png`. In T4 the file was viewed: User scope in the status bar, blank canvas, no dialog, Save greyed. This matches the record's description. The record's "all viewed" claim is corrected; the T1 and T2 claims are supported by the harness Read rows.
- **D2 (self-reported; not visible to the harness): some clicks used references taken from `find` output rather than from a snapshot taken earlier in the same task.** The brief requires refs from the most recent snapshot in the current task. The harness records `find` with no key argument, so it cannot show this. The affected clicks:
  - T1: Image menu item (e310), from find "Image".
  - T2: Image (e310), from find; Upload (e820) and Upload (e1052), from finds after each chooser; second New (e584), from find "New"; OK (e582), from find "OK" (the same ref also appeared in an earlier in-task snapshot); Save (e823), from find "Save".
  - T3: Image (e310), from find; Fit option (e808), from find "Fit" (the list only existed after the Open click, so no earlier snapshot contained it); Open (e580), Close Window (e342) and FX_CustomerSignIn row (e721), each also present in an in-task dialog snapshot.
  - No "Ref not found" error occurred. Every click's target was confirmed by the next screenshot, and the element names in the harness match the intended controls. This is a rule deviation, not an outcome change. The operator should decide whether it matters.
- **D3: file-upload path not captured by the harness.** The harness rows for file_upload show "no key argument" and list only the FX file names as exact values. The exact paths (`C:\AI\mongoose-factory\assets\FX_CustomerIcon.png` and `…\FX_CustomerSignIn.png`) are in the worker transcript and the record. The upload dialog showed the matching file names and sizes (`t2-04`, `t2-07`). Byte-level identity of the uploaded file was not checked.
- **D4: the T3 record's cumulative table omitted the select_option attempt.** The T3 section listed it; the cumulative table did not. Added in §1 above and in the record.
- **D5: one console log file is unreferenced.** `console-2026-10-15T14-11-13-538Z.log` appears in the listing but not in any output the worker received. It is wrapper-generated and was not inspected (console is out of scope). No effect on the counts.
- **D6: harness header counts are per category, not per tool.** The harness "actions" figure (11, 14, 10) includes file uploads and the select_option error; the "reads" figure (15, 20, 18) includes tab lists and screenshots. The worker record had split these differently. The two views reconcile exactly (see §1).
- **D7: the select_option error did not change state.** The failed call was `select_option` on the ExtJS combobox (e579): "Element is not a <select> element". The harness shows the locator resolved to an `input role=combobox`, and the call stopped before selecting. When the list opened after the Open click, the selected option was the third entry (Actual), not Fit (find output, T3). So the error left the value unchanged. No screenshot was taken between the error and the Open click, so this is an inference from the find output, not a screenshot.
- **D8: the OK response text was not captured.** The brief requires the OK response verbatim. Nothing was visible after the OK click: the dialog closed (`t2-09`) and no message appeared. This is an acceptance question, not a counting discrepancy (see AC-2).

## 3. Acceptance checks

### AC-1: sources reviewed; session usable; User scope; both images absent; dialog closed; Designer clean. **Pass.**
- Sources: AGENTS.md; `hello-world-pt7.md` lines naming the two images; the session-expiry recipe; the Outcome sections of EXP-063-R2 (line 413), EXP-099 (line 756) and EXP-100 (line 275). Recorded in the T1 section of the record.
- Session: usable; no expiry, sign-in page, or server-event error.
- Gate: `t1-01-designer-gate.png` shows the blank canvas, Save greyed, and `ScopeType: User` in the status bar (the scope account name is not copied here). No Form was visible. "No Form open" is inferred from the blank canvas and the empty Form area, not from a Form identity. This limitation is recorded.
- Absence: `t1-08-file-list-fx-region-4.png` shows `form-thumbnail.svg` directly followed by `FX_Dumbbell.png`. `t2-02-library-list-before-add.png` shows the same before the add. Find "FX_Customer" returned no match in T1.
- Dialog: closed with Close Window (x) once (T1 row 43); `t1-09-designer-after-close.png` shows no prompt and Save greyed.

### AC-2: two New entries; EXP-099 method; FX_ names; no rejected upload; OK once with response; exactly one Save with response. **Requires operator disposition.**
Met:
- Two New entries, in the required order (T2 rows 12 and 24; dialog element names "add 1 of 2" and "add 2 of 2").
- Each by the EXP-099 method: fresh dialog screenshot (`t2-03`, `t2-06`), one coordinate click at (959, 547) on Select File (rows 15, 27), one file upload of the exact FX_ path (rows 16, 28), name and size shown before Upload, one Upload click (rows 20, 32).
  - Pre-Upload name and size: `t2-04` "Name: FX_CustomerIcon.png (749.02KB)"; `t2-07` "Name: FX_CustomerSignIn.png (374.92KB)".
- Listed under FX_ names: `t2-05` (FX_CustomerIcon.png listed last and selected); `t2-08` (both listed); `t3-03` (both after reopen).
- No rejected upload, no retry, no error text from the upload dialog. The only upload-dialog message seen was "Maximum upload size: 131MB" (limit, not an error).
- Exactly one Designer Save (row 40). Response, verbatim toast: "Save / Global object(s) were saved." (`t2-10`).
Not met as written:
- The library OK was clicked once (row 36). **No response text was observed.** `t2-09` shows the dialog closed and the Save control enabled. Recorded as "no response text observed", not as a response. The indirect evidence that OK took effect is that the entries are listed after the Save and reopen (`t3-03`). That is not the response the brief asked for.
- Operator disposition needed: the brief asks for the OK response to be recorded, and it was not. Whether that is acceptable is the operator's call. It cannot be recovered in this experiment without a new OK click, which the brief does not allow.

### AC-3: reopened library lists both FX_ names; Fit previews match assets; dialog closed with Close Window (x); no prompt; Designer clean. **Pass, with stated limits.**
- Reopened list: `t3-03` (after the T2 OK and Save, the Images dialog was opened again in T3) shows `FX_CustomerIcon.png` and `FX_CustomerSignIn.png` between `form-thumbnail.svg` and `FX_Dumbbell.png`.
- Fit previews (Display Option changed from Actual to Fit, one change):
  - `t3-04`: FX_CustomerIcon.png selected; the preview is a close-up of a black-and-white cat face. Matches the expected asset description (close-up white-and-black cat face).
  - `t3-05`: FX_CustomerSignIn.png selected; the preview is a ginger/tan cat facing left, with a hand holding a microphone at the left edge. Matches the expected description (ginger cat facing a microphone held by a hand).
- Caption on both: "User version for user …". The second line is cut off in the captures. No stored size is visible; 749.02KB and 374.92KB are the pre-upload sizes from T2.
- Closed with Close Window (x) once (T3 row 30): `t3-06` shows the dialog closed, no prompt, no Form, Save greyed.
- Limits:
  - Same session; the Designer was not reloaded; no cross-session or database durability is claimed.
  - Visual comparison only, by the operator assistant's view. Byte identity and stored size are not established.
  - The reopen is a dialog reopen after the Save, not a new session.

### AC-4: no existing image overwritten, imported, exported, renamed or deleted; no unprefixed upload; no Form edited or saved; no runtime action; no unload; no checkout action; no task-boundary overrun. **Pass.**
- Harness: prohibited-tool hits 0 in T1, T2 and T3; flagged tool usage empty; exact-value mismatches 0.
- Element names in the harness show no Import, Export, Delete, Regenerate, Form-tab or Designer-Delete control clicked. The Designer toolbar New (e19) was not used; both New clicks were in the Images dialog.
- Uploads: exactly two, both the FX_-named assets. No unprefixed file uploaded.
- Forms: none opened, edited, closed or saved.
- Runtime: none. No Web Client actions. Portal/Web Client tab (tab 1) was never selected.
- Unloads, checkout actions, FormSync, deployment, refresh, restart, direct navigation, browser evaluate: none.
- The T3 select_option error did not change any state (D7).
- The view clicks in T3 selected list rows only; no rename or other action on any entry.
- Task boundaries: T1 stopped after the absence check; T2 stopped after the Save (no readback); T3 stopped after the readback and Close Window; T4 made no browser calls.

### AC-5: final report with decisive evidence for AC-1 to AC-4, exact cumulative counts, file inventory, final state. **Done in this document and in the record**, subject to the disposition below.
- Counts: §1 (reconciled to the harness and to the wrapper).
- Inventory: §4.
- Final state: §5.

## 4. Worker-written-file inventory (cumulative)

Worker-written:
- `experiments/EXP-101-hello-world-part-7-prereq-fx-customer-images.md` (created in T1; rewritten in T2 and T3; updated in T4)
- `evidence/EXP-101/t1-01-designer-gate.png` to `t1-09-designer-after-close.png` (9 files)
- `evidence/EXP-101/t2-01-designer-gate-before-add.png` to `t2-10-after-designer-save.png` (10 files)
- `evidence/EXP-101/t3-01-designer-gate-before-readback.png` to `t3-06-final-designer-after-readback.png` (6 files)
- `evidence/EXP-101/t4-final-acceptance-audit.md` (this file, T4)

Controller-generated (harness inventory, not worker-written): `evidence/EXP-101/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`.

Wrapper-generated (not worker-written): `evidence/playwright/` page-snapshot files (22 in the window) and console logs (4).

No Form, image, asset, recipe, AGENTS.md or earlier experiment record was modified by the worker. Repository confinement is supported by these inventories; operator git review is authoritative. The worker did not request git access.

## 5. Final state

- Mongoose Designer (tab 0): User scope; no Form open; Save disabled; no dialog open; no prompt pending. Last state confirmed by `t3-06` and the Save find in T3.
- Image library: `FX_CustomerIcon.png` and `FX_CustomerSignIn.png` present, with `FX_Dumbbell.png`, `FX_Eggs.png` and `FX_Guitar.png` unchanged. Two new entries were added in this run; no other entry was changed.
- Browser: tab 0 selected (Designer). Tab 1 (portal) not used.
- Re-logins: 0. No session expiry.
- No open prompt, menu or unsaved runtime change.

## 6. Recommendation

**Not unconditional acceptance.** The evidence supports acceptance of EXP-101 with one operator disposition:

- **AC-1: pass.**
- **AC-3: pass, same-session and visual only.**
- **AC-4: pass.**
- **AC-2: requires operator disposition.** Every check is met except the verbatim library OK response, which was not observed. The operator can either accept "no response text observed" plus the Save response and the reopened-list evidence, or reject AC-2 as written. This worker should not re-run OK or Save to obtain the text.
- **D2 (ref sourcing)** is a rule deviation with no outcome effect. The operator should note it.

Knowledge states (all findings): **observed**. None is replay_verified. Nothing here supports cross-session durability, database-level durability, or replay verification.

Candidate notes for later: the upload-by-FX-name method, the coordinate click on Select File, and the Designer Save toast were each observed twice in this run (EXP-099 and EXP-101), but no replay has been done.

## 7. Open questions

- Operator disposition on AC-2 (OK response text not recorded).
- Whether D2 (refs from find output for some clicks) matters for the operator's review standard.
- Whether the stored image bytes match the assets (not checked; visual match only).
- The unreferenced console log (D5), which was not inspected because console is out of scope.
