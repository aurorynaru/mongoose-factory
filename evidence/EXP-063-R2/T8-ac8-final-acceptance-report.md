# EXP-063-R2 T8 — final acceptance and evidence report (AC-1 to AC-8)

Run `R-20261012-213324-6cgo`, experiment EXP-063-R2, cycle 7, task **T8** (documentation and evidence review only). Worker session `b1f34139-e275-49c4-bf90-f4e01d2a61fa`; task_message_id `d813b57b-07c5-42e1-b8fc-5b31e9125f9c`. Date 2026-10-12.

T8 made **zero browser calls** and changed no application state. It used Read and Glob only (read-only). It writes only this report and the experiment record `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md`.

## 1. Result

- **AC-1 to AC-7: each passed as observed**, with the limitations stated in §3.
- **AC-8: this report**, complete (matrix, reconciled audit, inventory, final state).
- **Replay status: one execution, observed.** Nothing is `replay_verified`. AGENTS.md requires repeatable execution and persistence verification before a procedure is verified. This run is a single execution, and its persistence evidence is same-session Web Client recovery only.
- No native Save confirmation message was observed. Save success is supported only by rendered clean-state transitions and the same-session reopen.

## 2. Sources reviewed (T8)

- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` (current record, read in full).
- Worker reports `evidence/EXP-063-R2/T1-preflight-report.md` through `T7-ac7-close-reopen-recovery-report.md` (structure and counts checked against the record).
- Controller audit files `evidence/EXP-063-R2/harness-audit-T1.md` through `harness-audit-T7.md` (read in full; see §5).
- Directory listing of `evidence/EXP-063-R2/` (42 files before this report) and of `evidence/playwright/` filtered to the run's timestamp window (39 files).

## 3. Acceptance matrix

| ID | Result | Exact semantic observation | Decisive evidence (repo-relative) | Proof limitations |
| --- | --- | --- | --- | --- |
| **AC-1** | **Pass (observed)** | Tab list before any selection: 1 tab, `0 (current) Mongoose`; no Designer tab. Form state: one open Form, `FX_Items` (runtime), clean; toolbar Save disabled; no dialog; no challenge. Identity: heading `FX_Items`, tab `FX_Items`. Records: dumbbell (45 pound iron, 45.00, EA), eggs (cage free, 6.99, DZ), guitar (natural acoustic, 129.99, EA). Import button visible. Pictures shown before any import: dumbbell Elden Ring artwork, eggs shiba-style dog, guitar pink slime. Visual comparison with the assets: none match by name. | `T1-preflight-report.md` §2–§4; `t1-01`, `t1-02`, `t1-03`; `harness-audit-T1.md` rows 13–15 | The open route was reuse of the already-open clean Form (the brief permits reuse). Form > Open > Select Form was first performed in T7. Picture-to-asset mismatch is a visual judgement. The console summary was never opened. |
| **AC-2** | **Pass (observed)** | dumbbell: row 1 selected and verified (Item `dumbbell`, 45 pound iron, 45.00, EA, Elden Ring, Save disabled). One Import click opened `Import Binary Data From File`, `Files for property FX_Picture (*.png)`, Upload disabled. One `browser_mouse_click_xy` at (940, 482) returned `[File chooser]: can be handled by browser_file_upload`. One file-upload call supplied `C:\AI\mongoose-factory\assets\dumbbell.png`. Dialog showed `Name: dumbbell.png (1.31MB)`, Upload enabled. One dialog Upload click; dialog closed. Picture is the golden puppy; row 1 shows the modified marker; Save enabled. | `T2-dumbbell-import-report.md` §2–§3; `t2-01` (before), `t2-02` (dialog open), `t2-03` (file shown, Upload enabled), `t2-04` (after, marker); `harness-audit-T2.md` rows 9–18 | The coordinate point was read from the fresh screenshot each time. The click alone cannot be separated from the button handler as the source of the chooser. The dialog does not name its record; identity comes from the grid selection before the click. Picture match is visual, not byte-level. |
| **AC-3** | **Pass (observed)** | eggs: row 2 selected and verified (eggs, cage free, 6.99, DZ, shiba picture, Save enabled, dumbbell marker still pending). One Import click; FX_Picture dialog; one coordinate click (940, 482) produced a pending chooser; one upload of `C:\AI\mongoose-factory\assets\eggs.png`; dialog showed `Name: eggs.png (22.69KB)`, Upload enabled; one dialog Upload click; dialog closed; pale sketch-like picture; eggs row marked; dumbbell marker still present; Save enabled. | `T3-eggs-import-report.md` §2–§3; `t3-01` to `t3-04`; `harness-audit-T3.md` rows 8–18 | As AC-2. |
| **AC-4** | **Pass (observed)** | guitar: row 3 selected and verified (guitar, natural acoustic, 129.99, EA, pink slime; markers on rows 1–2 pending). One Import click; FX_Picture dialog; one coordinate click (940, 482) produced a pending chooser; one upload of `C:\AI\mongoose-factory\assets\guitar.png`; dialog showed `Name: guitar.png (441.16KB)`, Upload enabled; one dialog Upload click; dialog closed; shiba picture; guitar marked; rows 1–2 markers kept; Save enabled. | `T4-guitar-import-report.md` §2–§3; `t4-01` to `t4-04`; `harness-audit-T4.md` rows 8–18 | As AC-2. |
| **AC-5** | **Pass (observed)** | Before Save, each record reselected through its row shows its own picture: dumbbell golden puppy (`t5-01`), eggs pale sketch-like (`t5-02`), guitar shiba (`t5-03`). Item, Description, Cost and UoM match the EXP-062-R4 T13 values for all three records. All three modified markers present; Save enabled; no dialog. | `T5-ac5-pre-save-verification-report.md` §3–§4; `t5-01` to `t5-03`; `harness-audit-T5.md` rows 4–15 | Field values for dumbbell and eggs were read from the screenshots. Only the guitar snapshot gave an accessibility readback of all four fields. Picture matches are visual. |
| **AC-6** | **Pass (observed)** | Exactly one runtime Save (toolbar `Save`, one click, not retried). Native response: **no native message appeared**; a find for `saved` returned no match; the only transient UI was the button's hover tooltip. Immediately after: toolbar Save greyed, snapshot `button "Save" [disabled]`, no modified markers on rows 1–3 (`t6-02`). Post-Save reselection of dumbbell, eggs and guitar: values and pictures as expected, no markers, Save disabled (`t6-03` to `t6-05`). | `T6-ac6-single-save-and-post-save-verification-report.md` §3–§5; `t6-01` to `t6-05`; `harness-audit-T6.md` rows 7–23 | No server confirmation was observed. Success is inferred from rendered clean-state transitions. The `errors=1` in the T6 audit header is the documentation Edit failure (§6), not a Save or browser error. |
| **AC-7** | **Pass (observed)** | Close: one click on the visible Form-tab control `Close Panel FX_Items`; no unsaved-change prompt; no native dialog; Form no longer open (`t7-02`; find `FX_Items` no match). Reopen: one route, Form menu > `Open` > Select Form dialog (one FX_Items row) > row selected > `OK` once. Result: heading `FX_Items`, Save disabled. Per-record reopen: dumbbell golden puppy (`t7-03`), eggs pale sketch-like (`t7-04`), guitar shiba (`t7-05`), each with Item, Description, Cost, UoM unchanged and no marker. | `T7-ac7-close-reopen-recovery-report.md` §3–§5; `t7-01` to `t7-05`; `harness-audit-T7.md` rows 7–31 | Same-session Web Client recovery only. Not independent database durability. Picture matches are visual. The Description textbox had keyboard focus on reopen; nothing was typed. |
| **AC-8** | **Complete (this report)** | Final report: AC-1 to AC-7 matrix (above); reconciled action audit (§4); worker-written-file inventory (§6); final state (§7). | This report; experiment record §18. | See §8 for limitations. |

## 4. Reconciled browser-action audit (exact counts)

Counts are the worker tables, checked row by row against the controller audit files (`harness-audit-T1.md` to `T7.md`). The controller records the tool, the element or filename argument and the result. It does not record the `target` argument of a snapshot (see §8).

| Action | T1 | T2 | T3 | T4 | T5 | T6 | T7 | **Total** | Controller check |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Browser tab lists | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **7** | 1 per task |
| Browser tab selects | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **7** | 1 per task |
| Snapshots (untargeted + targeted) | 1 | 2 | 1 | 1 | 1 | 2 | 4 | **12** | matches (targeted not visible in controller) |
| Finds | 1 | 4 | 4 | 4 | 3 | 5 | 7 | **28** | matches |
| Screenshots (worker-requested PNG) | 3 | 4 | 4 | 4 | 3 | 5 | 5 | **28** | matches |
| Element clicks: grid row-header selections | 2 | 1 | 1 | 1 | 3 | 3 | 3 | **14** | matches |
| Element clicks: Import | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **3** | matches |
| Element clicks: dialog Upload | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **3** | matches |
| Element clicks: runtime Save | 0 | 0 | 0 | 0 | 0 | 1 | 0 | **1** | matches |
| Element clicks: Form close, Form menu, Open, Select Form row, OK | 0 | 0 | 0 | 0 | 0 | 0 | 5 | **5** | matches |
| **Element clicks total** | 2 | 3 | 3 | 3 | 3 | 4 | 8 | **26** | matches |
| **Select File coordinate clicks (`browser_mouse_click_xy`)** | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **3** | matches |
| **Other coordinate clicks** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | matches |
| **File upload tool calls** | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **3** | matches |
| **Dialog Upload clicks** | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **3** | matches |
| **Runtime Save invocations** | 0 | 0 | 0 | 0 | 0 | 1 | 0 | **1** | matches |
| **Form close** | 0 | 0 | 0 | 0 | 0 | 0 | 1 | **1** | matches |
| **Form reopen (Form > Open > Select Form)** | 0 | 0 | 0 | 0 | 0 | 0 | 1 | **1** | matches (route rows 12, 14, 17, 18) |
| Asset file reads (Read tool, read-only) | 3 | 0 | 0 | 0 | 0 | 0 | 0 | **3** | T1 controller rows 25–27 |
| Designer actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | no Designer tab; no Designer control clicked |
| Non-picture field edits (typing, key presses, edits) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | controller key sequence `[]`; no edit action |
| Record creations or deletions (New, Delete) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | not clicked; no such row in controller |
| Picture changes via Import (authorized) | 0 | 1 | 1 | 1 | 0 | 0 | 0 | **3** | dumbbell, eggs, guitar, one each |
| Navigate, refresh, restart, reauthentication | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | none in controller |
| Browser JavaScript, console, network | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | none in controller; console summary not opened |

Controller summary per task: prohibited-tool hits 0 in all seven tasks; exact mismatches 0 in all seven; errors 0 in T1–T5 and T7; errors 1 in T6, the documentation Edit failure (§6), with no browser error. Controller "actions" (tab selects, clicks, coordinate, upload, Save, close and reopen steps) total 39 across T1–T7 (7 + 26 + 3 + 3), and controller "reads" (tab lists, snapshots, finds, screenshots) total 75 (7 + 12 + 28 + 28). Both match the worker totals.

The brief's required counts are therefore: **three Import clicks, three Select File coordinate clicks, three file-upload calls, three dialog Upload clicks, zero other coordinate clicks, exactly one runtime Save, exactly one Form close and one reopen, zero Designer actions, zero non-picture field edits, and zero record creations or deletions.**

## 5. Controller audit files

Seven controller-generated files, `evidence/EXP-063-R2/harness-audit-T1.md` to `harness-audit-T7.md`, are present. They were not written by the worker. Each states "controller-generated audit (not worker prose)" and "records attempted tool calls and native results, not rendered-state proof or acceptance". Each lists the tool, the key or element or filename argument and the result. Their header summaries use these definitions:
- **actions** = browser calls that change or select state (tab select, element clicks, coordinate click, file upload);
- **reads** = browser read calls (tab list, snapshot, find, screenshot).

Their Read, Glob, Grep, Write and Edit rows are listed in the same tables. Summary counts match the worker counts in §4 for every task.

## 6. Worker-written-file inventory

### 6a. Experiment documentation (one record)

- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md`: created in T1 (Write), updated in T2–T7 (24 successful Edit calls and 1 failed Edit call in T6, §6c), and updated in T8 (status and §18). This is the only file outside `evidence/EXP-063-R2/` that the worker wrote.

### 6b. Worker-created evidence files under `evidence/EXP-063-R2/` (36 files)

Reports (8):
- `T1-preflight-report.md` (T1; Write)
- `T2-dumbbell-import-report.md` (T2; Write)
- `T3-eggs-import-report.md` (T3; Write)
- `T4-guitar-import-report.md` (T4; Write)
- `T5-ac5-pre-save-verification-report.md` (T5; Write)
- `T6-ac6-single-save-and-post-save-verification-report.md` (T6; Write)
- `T7-ac7-close-reopen-recovery-report.md` (T7; Write)
- `T8-ac8-final-acceptance-report.md` (T8; this report)

Screenshots (28; browser_take_screenshot with an `evidence/EXP-063-R2/` filename):
- T1: `t1-01`, `t1-02`, `t1-03` (3)
- T2: `t2-01` to `t2-04` (4)
- T3: `t3-01` to `t3-04` (4)
- T4: `t4-01` to `t4-04` (4)
- T5: `t5-01` to `t5-03` (3)
- T6: `t6-01` to `t6-05` (5)
- T7: `t7-01` to `t7-05` (5)

### 6c. Edits and the failed Edit (documentation)

- Record: 24 successful Edit calls (T2 3, T3 3, T4 7, T5 4, T6 4, T7 3). T8 adds the status change and §18.
- One failed Edit in T6 (`String to replace not found`); see §7 below.

### 6d. Controller-generated audit files (7; not worker-written)

- `harness-audit-T1.md` to `harness-audit-T7.md` under `evidence/EXP-063-R2/`.

### 6e. Tool-generated Playwright artifacts (39; not worker-written)

- 32 page-snapshot `.yml` files and 7 console `.log` files under `evidence/playwright/`, with timestamps 13:33:35 to 13:49:52 on 2026-10-12. Attribution is by timestamp window only; they are not in the `EXP-063-R2` directory. They were written by the browser tool at the paths it chose. The worker did not open the console logs.

### Totals

- Worker-created evidence files: 36 (8 reports + 28 screenshots), plus the one experiment record.
- Controller-generated audit files: 7 (in `evidence/EXP-063-R2/`).
- Tool-generated artifacts: 39 (in `evidence/playwright/`).
- Asset files: read only; none copied, changed or moved.

## 7. The two documentation discrepancies

### 7a. T1 file-count discrepancy

- The T1 final message said "the four files listed above", but it listed five items: the experiment record, `T1-preflight-report.md`, and `t1-01`, `t1-02`, `t1-03`.
- The file list was correct and the number was wrong. The T1 report §8 and the record §6 both list five. The controller shows the two Write calls (`harness-audit-T1.md` rows 28–29) and three screenshot calls (rows 16, 19, 23).
- The correct T1 inventory is **five files**. Reconciled in the record §11.

### 7b. T6 documentation-edit error

- In T6 the first Edit (the status line) succeeded. The second Edit targeted the anchor `## 13. Next step … T5 stopped after AC-5, as instructed.`, which no longer existed: the T5 section had been inserted as §13, and its next-step heading had become §14. The call failed with `String to replace not found`. The controller records it as row 26 of `harness-audit-T6.md`.
- Nothing was written by the failed call. A Grep and Read of the record then showed the correct anchor. The retry (rows 29–31) wrote the T6 section as §14, the next-step note as §15, the T6 inventory lines, and the §11 heading rename.
- T7 confirmed the T6 section was present, and this T8 review confirms it again (§14 T6, §15 T6 stop superseded by §16, §16 T7, §17 next step). No content is missing or duplicated.
- The record is therefore correct. The error affected only the one failed call, and it did not affect the browser or the Save.

## 8. Limitations and what is not proven

- **Picture comparisons are visual.** They compare rendered pictures with the three asset PNGs read in T1. Byte or hash comparison was not performed.
- **Same-session close and reopen does not prove independent database durability.** The reopen used the same Web Client session. It shows that the Web Client, reopened through Form > Open > Select Form, displayed the three pictures and field values. It does not exclude client-side caching and does not inspect the database.
- **No native Save confirmation message was observed.** Save success is inferred from rendered clean-state transitions (Save disabled, markers cleared) and the same-session reopen.
- **Single execution.** The replay was performed once. It is observed, not replay_verified.
- **Coordinate clicks.** Three clicks at (940, 482), the centre read from each fresh screenshot of the visible Select File button. Each produced a pending chooser. The click alone cannot be separated from the button handler as the cause.
- **Dialog identity.** The Import dialog does not name its record. Identity rests on the grid selection verified before each click.
- **Snapshot targets.** The controller records no snapshot `target` argument. The two targeted snapshots (T2 Import ref; T7 Select Form dialog) are classified only by worker reports.
- **Field readbacks.** For dumbbell and eggs in T5, the non-picture values were read from screenshots, not from accessibility readbacks. Guitar's values were read from the accessibility snapshot in T5 and T6.
- **Console not inspected.** The "3 errors, 10 warnings" summary was not opened (console inspection is prohibited).
- **Playwright artifact attribution** is by timestamp window only (§6e).
- **EXP-062-R4 T13 blank-picture discrepancy: unresolved, not investigated.** In this run the pictures render at every step (T1 to T7).
- **FX_VarTest / Form-Temporary** (EXP-062-R4 waiver): not in scope and not examined.

## 9. Final browser state (from T7)

- One browser tab, `Mongoose` (the current tab).
- The **FX_Items runtime Form is open** (reopened in T7), **guitar selected** (row 3, last reselected).
- **Clean**: toolbar Save disabled; no modified markers on rows 1–3.
- **No dialog** open. No browser-native dialog. No unsaved-change prompt.
- The Designer was never opened or touched. The FX_Items IDO checkout was not touched.

## 10. Repository confinement

- The worker's writes, per the controller tables and the worker inventories, went only to `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` and `evidence/EXP-063-R2/`.
- Reads covered `AGENTS.md`, `docs/mongoose/transcripts/hello-world-pt4.md`, the EXP-062-R4 and EXP-063 records and evidence, and the three asset PNGs (read only).
- One observation for operator review: the browser tool wrote its snapshot and console artifacts under `evidence/playwright/`, outside the `EXP-063-R2` directory (§6e). Those files were not authored by the worker, and their inclusion in the repository is for the operator's git review.
- At the start of the conversation `git status` showed `?? assets/` (untracked). The worker did not modify `assets/`.
- The harness computes repository confinement from before and after Git state. Operator git review at outcome is authoritative.

## 11. Knowledge state (observed; nothing replay_verified)

- Import opens the in-page `Import Binary Data From File` dialog for FX_Picture: **observed** (three times).
- A coordinate click at the visible Select File centre produced a pending file chooser: **observed** (three times). The method (fresh screenshot, click the centre, supply the matching file) is a **candidate_procedure** only; it has not been repeated.
- The file-upload call supplied the matching file, and the dialog showed the file name with Upload enabled: **observed** (three times).
- The dialog Upload click closed the dialog, changed the picture and marked the record modified: **observed** (three times; visual).
- One runtime Save through the toolbar disabled Save and cleared all three markers, with no native message: **observed** (once).
- Form close and Form > Open > Select Form reopen show the three pictures and original fields in the same session: **observed** (once).
- Persistence of the three picture changes beyond the same session: **unresolved**.
- Server-side confirmation of the Save: **unresolved** (no message).
- The T13 blank-picture discrepancy (EXP-062-R4): **unresolved** (not investigated).
- Any finding as `replay_verified`: **none**.

## 12. Open questions and blockers

- None blocking AC-8. Every check AC-1 to AC-7 has existing decisive evidence and is stated as observed.
- To promote any finding beyond observed, the operator would need to decide on a repeat execution and a persistence check beyond same-session recovery. Those are outside this task.
- The Form is open, clean and reopened. No Save, Import, upload, close or reopen is permitted without a new instruction.
