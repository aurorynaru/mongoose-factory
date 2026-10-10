# EXP-041-R3 T2 — Documentation and evidence audit of T1

Date: 2026-10-10. Run R-20261010-154641-QsiV, EXP-041-R3, cycle 1, task T2.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `4a06439f-f762-4ce5-a2c0-9bc95d0233ef`.

**Browser actions in T2: 0.** No tab listing, snapshot, screenshot, click, key, wait, or navigation. Reads only: `Read`, `Grep`, `Glob` on repository files and on tool-generated snapshot files under `evidence/playwright/` (gitignored browser output, not worker-authored).

Sources for the audit: the harness-generated `evidence/EXP-041-R3/harness-audit-T1.md` (121 ordered tool rows; written by the controller, not by the worker), the T1 record `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md`, and the T1 evidence files.

---

## 1. Reading order: were the references read before T1's first browser action?

First browser action in T1 that changed a dialog state: audit order 7 (click of the wizard Cancel button). The last browser snapshot before it: audit order 6. Reads before order 7: order 1 (`AGENTS.md`) and order 2 (the R3 record path, which did not yet exist).

| Reference (as required by the T1 brief) | Read in T1 (audit order) | Relative to first browser action | Status |
|---|---|---|---|
| `AGENTS.md` | Order 1 | Before (order 7) | **Compliant** |
| EXP-041 record (`experiments/EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md`) | Order 13 | After the wizard Cancel (7) and Yes (10). Before the gate. | **Late** |
| EXP-041-R2 record | Order 12 | After 7 and 10. Before the gate. | **Late** |
| `evidence/EXP-041/` images | Not opened in T1 | Not read in T1. Opened in T2 (`evidence/EXP-041/t1-05-select-form-positive-control-sqltables-slowly.png`): shows the same SqlTables control (two rows, Filter By Name, both checkboxes unchecked). | **Not read before actions; read late in T2** |
| Hello World Part 1 Form step (`docs/mongoose/transcripts/hello-world-pt1.md`, section 7) | Grep (order 115) and Read lines 110–141 (order 116) | After all wizard and gate actions (order 116 follows the route Cancel at 107). T2 also read the transcript header (lines 1–30) and its agent rules. | **Late** |
| Existing Form recipe (`recipes/forms/create-basic-form.md`) | Not read in T1 | Read in T2 (full file) | **Not read before actions** |
| EXP-036 (wizard lessons) | Not read in T1 | Read in T2 (full file) | **Not read before actions** |
| EXP-039 (IDO project; prerequisite named by the brief) | Not read in T1 | Read in T2 (full file, lines 1–586) | **Not read before actions** |
| EXP-040 (prerequisite named by the brief) | Not read in T1. The T1 record's statement about EXP-040 lines 1–1256 is the **EXP-041-R2 reader's claim**, not a T1 read. | Read in T2 only in part: lines 1–24 (status and outcome), and grep-matched excerpts of the AC table, T8, T9, T10, T12 and Stage C. Lines 25–1256 were **not** read in full. | **Not read before actions; partial late read** |

**Consequence for T1.** The gate and the route inspection did not rely on these references, and their observations are verified below. But T1 was run without the recipe, EXP-036, EXP-039 or EXP-040, and without the Hello World Form section, which the brief placed before browser actions. The T1 record's "Sources read" section did not list the recipe, EXP-036 or EXP-039, so it did not hide the gap. It is corrected in the record now.

**What the late reads change for the creation task.** Nothing already done is contradicted. The following apply to the next, separately authorized creation task:
- Recipe (verified for Build-from-Scratch only): Finish "persists the form immediately" and opens it clean; Save Template is on page 2, checked by default.
- EXP-036 T5/T6: Build-from-Scratch Name by one `browser_type` fill advanced to page 2. Save Template's display `<span>` intercepted a direct click; one visible label click unchecked it.
- EXP-040 (Data Maintenance, not Classic): the wizard's own text said Finish creates "the database table, IDO and optional form"; a Create Form prompt followed Finish. The Classic Multi-View wizard has not been observed to show that prompt.

## 2. Verification of the AC-1 baseline (T1 record)

Each claim checked against the saved image or the saved snapshot file.

| T1 claim | Evidence checked in T2 | Result |
|---|---|---|
| DEM configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t1-06-designer-help-about-site-developer-user-scope.png` (image): "Connected via data configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT" | **Verified** |
| Site Developer; edits create user versions | `t1-06` (image): "Currently logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph" | **Verified** (role label only; permission grants not tested, as the record states) |
| User editing scope | `t1-08-designer-clean-after-route-cancel-user-scope.png` (image): status bar "[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]"; the Designer has no Form open, Save greyed | **Verified** |
| IDO baseline: FX_HelloWorld01 in FX_HelloWorldProject01; Revision 2; 10/10/2026; Access As G6R; Check Out enabled; Save disabled; FX_Code row 1 (seq 1, Bound to Column, String 30, Key Sequence 1, Required checked); FX_Label row 2 (String 100); system properties rows 3–9; Label String ID and Caption oFX_HelloWorld01 | `t1-01-webclient-initial-state.png` (image) | **Verified.** Locked By is blank in the image. |
| Clean working state before any action | T1 snapshot (order 6): no Form tab, Save and Undo disabled, the only dialog was the leftover wizard (closed by order 7/10). `t1-01` shows no dialog in the Web Client. | **Verified**, with one correction: the Designer was **not** clean at the very start. The EXP-041-R2 Form Wizard - MultiView was open (orders 6–10 closed it). The T1 record already states this under "Leftover state at start". |

## 3. Verification of the AC-2 gate (T1 record)

Each query's settled state was checked against the tool-generated full-page snapshot written when the wait returned (`evidence/playwright/…`). The Select Form dialog subtree (`dialog "Select Form" [ref=f1e841]`) was compared with the transcription in `t1-gate-select-form-dialog-snapshots.md`.

| Query | Snapshot file (tool output) | Dialog rows (grid f1e856) | Textbox | Case Sensitive / Starts With | Image | Result |
|---|---|---|---|---|---|---|
| C1 `SqlTables` | `page-2026-10-10T07-47-26-832Z.yml` | `Sql Tables`/`SqlTables` (f1e905/f1e907); `Sql Tables Constraint`/`SqlTablesPrimaryKey` (f1e912/f1e914) | `SqlTables` (f1e877) | both unchecked | `t1-02` | **Matches**: 2 rows |
| T1 `FX_HelloWorld01` (exact) | `page-2026-10-10T07-47-37-677Z.yml` | grid f1e856 with no child gridcells | `FX_HelloWorld01` | both unchecked | `t1-03` | **Matches**: 0 rows. The other `FX_HelloWorld01` gridcells in this file (f1e167 etc.) are in the IDO grid behind the dialog, not in the Select Form grid. |
| T2 `HelloWorld` | `page-2026-10-10T07-47-47-019Z.yml` | grid f1e856 with no child gridcells | `HelloWorld` | both unchecked | `t1-04` | **Matches**: 0 rows |
| C2 `testblank` (lowercase, infix) | `page-2026-10-10T07-47-58-106Z.yml` | `FX_TestBlank01`/`FX_TestBlank01` (f1e919/f1e921); `FX_TestBlank02`/`FX_TestBlank02` (f1e926/f1e928) | `testblank` | both unchecked | `t1-05` | **Matches**: 2 rows |

Post-Cancel check: `page-2026-10-10T07-48-02-360Z.yml` contains no `dialog "Select Form"` (grep: no matches). **Verified** that the dialog closed.

Filter By = Name: visible in every dialog image (`t1-02`–`t1-05`) and read from the dialog combobox `[ref=f1e883]: Name` in each file.

Limitations (unchanged from the T1 record): no scope column; no total count; the Select Form grid's virtualised rows outside the rendered window were not separately counted.

## 4. The four flagged `browser_type` calls

The controller audit flagged `browser_type` 4 times (its header: "prohibited-tool hits=4"). Every flagged call is a key-event entry into the Select Form filter textbox, which step (e) of the brief permits.

| Audit order | Tool | Element | Text entered | Preceding fresh-state action | Reconciliation |
|---|---|---|---|---|---|
| 23 | `browser_type` (slowly) | Select Form Filter textbox (`f1e877`) | `SqlTables` | Click (21) on a ref verified in the dialog snapshot (20); Control+a (22) | **Expected.** Step (e); the positive control. |
| 29 | `browser_type` (slowly) | same | `FX_HelloWorld01` | Click (27) on a ref verified in the snapshot after C1 (25); Control+a (28) | **Expected.** Step (e); the exact target. |
| 35 | `browser_type` (slowly) | same | `HelloWorld` | Click (33); Control+a (34) | **Expected.** Step (e); the substring target. |
| 41 | `browser_type` (slowly) | same | `testblank` | Click (39); Control+a (40) | **Expected for the method.** The query itself was not in the brief's list (see §5, item 2). |

Other checks on these calls:
- The audit's "Spelled strings" list is empty and its "Exact values" list contains only `FX_HelloWorld01`, with 0 exact mismatches. No other target was spelled out.
- No `browser_type` call targeted the wizard Name field, the Data Source, or any other field. The brief forbids a plain fill there, and the wizard was not entered for input in T1.
- No `browser_evaluate` or run-code call appears in the audit. The `Ran Playwright code` lines in tool output are the tool's own locator code, not worker-written JavaScript.
- The audit's own flags note that "flagged tools may be allowed by other briefs." Here the brief allows `browser_type` for Select Form key entry, so these four calls are not violations.

## 5. Deviations and judgment calls (for the operator)

1. **Wizard Cancel confirmation answered Yes (orders 7–10).** The T1 brief said to close the EXP-041-R2 page-1 wizard "with its Cancel button (confirm the label first; nothing was committed)". Cancel opened a confirmation: "Are you sure you want to cancel? All data entered will be lost." I confirmed with the Yes button (ref `e367`, label checked in a fresh snapshot at order 9). The discarded state was the uncommitted Name `FX_HelloWorld01` and Data Source `FX_HelloWorld01` that EXP-041-R2 recorded as not accepted. No application object was touched (audit: no Form, IDO, table or save). The brief's general boundary says never to discard unsaved work. I took the discard as implied by the brief's Cancel instruction, but the brief did not name the confirmation answer. **Operator acknowledgement requested.**
2. **Extra read-only control `testblank` (orders 39–44).** It was not in the T1 brief's query list (`SqlTables` positive control; `FX_HelloWorld01` and `HelloWorld` targets). It is read-only, uses the same Select Form mechanism, and was disclosed in the T1 record. It gives the case-insensitive infix evidence in one session. **Disclosed; no violation.**
3. **Late reading** (§1). Recipe, EXP-036, EXP-039 and EXP-040 were not read before T1 actions; EXP-041, EXP-041-R2 and the Form section were read after the wizard Cancel and Yes. **Operator review requested (see §8).**
4. **The T1 record's count of prompts was wrong.** It said "(f) Used (two prompts in the wizard Cancel flow)". The audit shows one confirmation prompt (order 9, answered at order 10). **Corrected in the R3 record (T2 section).**
5. **Screenshot and click batching.** In my T1 transcript, some read-only screenshots were issued in the same tool batch as a Filter click (for `t1-02`, `t1-03`, `t1-04`). The controller audit orders them sequentially (screenshot 26, click 27; 32 and 33; 38 and 39). A screenshot is not a browser action, so the parallel-action rule was not engaged. **No violation; disclosed for transparency.**
6. **Controller audit summary inconsistent with its own table.** The `harness-audit-T1.md` header reads "50 actions, 28 reads; prohibited-tool hits=4; errors=1; turns=101". Its table has 121 numbered rows. I did not reconcile the header's counts; the table is the detailed record and the operation counts in the T1 record were checked against it (Designer clicks 34, Web Client clicks 6, filter entries 4, settle waits 4, dialog snapshots 5, PNG screenshots 8, wizard list opens 7 and collapses 6, category selections 7, all matched). **Unexplained by the controller summary; not a worker error.**
7. **Cross-experiment conflict on the Select Form filter (not a T1 defect).** EXP-040 (Stage C) recorded that the Select Form filter "did not narrow" when "IDO Projects" was typed, and its T12 notes call the filter "non-functional". EXP-041 T1 and this gate show the same dialog narrowing with key-event typing. EXP-040's input method for that entry is not recorded in its own text, so the two records cannot be reconciled from the record alone. The R3 gate is valid because the positive control narrowed in this session. **Unresolved for the operator's EXP-040 cross-reference.**
8. **EXP-040 prompt incident (context only).** EXP-040 T10 records a wrong-ref "Yes" to a SQL Tables save prompt. The brief's rule (f) (fresh snapshot and label check before each prompt) is the response to that. T1 complied: its one confirmation prompt (§5 item 4) was checked by a fresh snapshot and label before the click.

## 6. Acceptance-check status (after T2 audit)

| AC | Status after T2 | Basis |
|---|---|---|
| AC-1 | **PASS-LIMITED** (verified) | §2: `t1-01`, `t1-06`, `t1-08` checked as images. Limits: permission grants beyond the role label untested; configuration-wide SQL/IDO visibility untested; version strings unreconciled. |
| AC-2 | **PASS for the visible inventory, with the no-scope-column limitation** (verified) | §3: four query snapshot files and four images match. Limits as stated in §3. |
| AC-3 | **PARTIAL** (unchanged) | Route and Category/Wizard labels were captured from saved snapshot files (orders 62, 82, 88, 94, 100, 106); no wizard was opened. |
| AC-4 – AC-8 | Not evaluated (no creation task in T1 or T2) | — |
| AC-9 | **PARTIAL** (dated re-confirmation recorded in the R3 record; EXP-040 and EXP-041 not edited) | §3; the EXP-040 follow-up text is recorded in R3's AC-9 section. |

## 7. Repository and browser state

- Files written in T2: `evidence/EXP-041-R3/t2-documentation-and-evidence-audit.md` (this file); `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md` (T2 section and two corrections).
- Not written: EXP-036, EXP-039, EXP-040, EXP-041, EXP-041-R2, the recipe, AGENTS.md, memory, `tools/`, docs, or any other experiment file.
- Browser state: unchanged by T2 (zero browser actions). At the end of T1 the Designer tab was selected, clean (no Form open, Save disabled, User scope in the status bar, no dialog). The Web Client tab showed the IDOs surface with no dialog and Save disabled.
