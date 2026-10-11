# EXP-051 T9 — Final AC-1 to AC-12 audit and confinement review (documentation only; cycle 9)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 9, task T9. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`, task_message_id `ef7ed1de-0014-4228-ae2f-87c4ae8e7588`. Date 2026-10-11.

Scope: documentation and audit only. No browser calls, no Form change, no data mutation, no query, no Save, no close or reopen, no authentication. `tools/` was not read. Sources: the experiment record, the T1–T8 reports, the T1–T8 accessibility excerpts, the controller audits `harness-audit-T1.md` to `harness-audit-T8.md`, and the file inventory from Glob. Final adjudication (accepted or blocked) is left to the coordinator.

## 1. Action reconciliation (controller audits vs worker reports)

Each controller audit (`evidence/EXP-051/harness-audit-T*.md`) records the attempted tool calls. Counts below use the audit tables.

| Operation | Audit evidence | Count | Matches worker report? |
| --- | --- | --- | --- |
| Initial empty-criteria query (FiP + F4) | T1 audit #17 (FiP click), #19 (F4) | 1 | yes (T1) |
| Invalid BX Save attempt | T2 audit #17 (`Save toolbar button`) | 1 | yes (T2) |
| Intended successful toolbar Save | T6 audit #6 (`Save toolbar button`) | 1 | yes (T6) |
| Total explicit Save clicks | T2 #17 and T6 #6 only; no other audit has a Save click | 2 | yes |
| Toolbar New | T4 audit #10; T5 audit #6 | 2 | yes |
| Runtime Form-tab close | T7 audit #6 (`Close Panel FX_Items tab close control`) | 1 | yes (T7) |
| Runtime reopen | T7 audit #10 (toolbar Open), #12 (row Name cell), #14 (OK) | 1 reopen | yes (T7) |
| Final empty-criteria query | T8 audit #6 (FiP), #9 (F4) | 1 | yes (T8) |
| BX alert dismissal (OK) | T3 audit #6 | 1 | yes (T3) |
| Refresh, Delete, Filter-in-Place criteria typing | none in any audit | 0 | yes |
| Designer action (click, key, edit) | none in any audit | 0 | yes |
| Authentication, check-in, check-out | none | 0 | yes |
| Combobox Open clicks (all tasks) | T1 #23 (1); T3 #8 and #14 (2); T4 #20, #23, #27 (3); T5 #16 (1) | 7 | see note A |
| Option selections (EA, EA, DZ) | T3 #10 (EA); T4 #22 (EA); T5 #18 (DZ) | 3 | yes |
| Escape presses | T1 audit #27 only (list dismissal, read-only baseline) | 1 | yes (T1) |
| Field fills (`browser_type`, flagged by harness as authorized fills) | T2 #7, #9, #11, #13 (dumbbell, 45 pound iron, 45.00, BX); T4 #14, #16, #18 (guitar, natural acoustic, 129.99); T5 #10, #12, #14 (eggs, cage free, 6.99) | 10 | yes |
| Fourth item typed | none (only dumbbell, guitar, eggs item codes in fills) | 0 | yes |
| Prohibited-tool hits (harness) | T2 4 and T4 3 and T5 3, all `browser_type` (authorized fills); none elsewhere | 10 flagged fills, 0 prohibited | consistent |
| Tab-select error | T4 audit #1: `Tab 1 not found`, recovered by a tab list (#3) and a successful select (#4) | 1 | yes (T4) |
| Ref-not-found | none in any audit | 0 | yes |
| Timeouts | none in any audit | 0 | yes |
| Dialogs answered (other than the BX validation alert OK) | none | 0 | yes |

Notes:
- **A (combobox Open count).** AC-3 requires the FX_UM list to be opened once read-only. That was met for the baseline (T1). Six further opens were made for the authorized value selections (T3, T4, T5), each followed by a selection or a toggle. Those opens were not read-only checks. The brief permitted the selections under AC-5, AC-6, and AC-7. This is reported as a deviation from the literal "once", not as a prohibited action.
- **Stray Save-related operations.** The T2 audit records two `Edit` errors (`#23`, `#25`), both on the T2 report header (a string I had written incorrectly). They are documentation errors, not browser or data actions. The header was corrected in T2 (audit #27). The T2 worker report did not mention these two errors; they are disclosed here.

## 2. Snapshot count corrections (documentation only; earlier reports not edited)

The controller audits show two snapshot counts that differ from the worker reports. The reports are left as written; the corrected counts are recorded here.

| Task | Worker report said | Audit shows | Correction |
| --- | --- | --- | --- |
| T3 | Web Client snapshots 5 | 4 (audit #4, #7, #11, #15); the find at #9 is not a snapshot | 4 |
| T4 | Web Client snapshots 7, plus 1 Designer | 6 Web Client (#5, #9, #11, #24, #28, #32) plus 1 Designer (#2) | 6 Web Client, 1 Designer |

All other per-task counts reconcile with the audits (T1 7 snapshots, T2 5, T5 5, T6 3, T7 5, T8 5), as do the screenshot and find counts.

## 3. Final acceptance matrix (AC-1 to AC-12)

Status labels: **SUPPORTED** means the cited evidence supports the check at the stated level (same-session Web Client UI). **SUPPORTED WITH LIMITS** means it is supported, with the named limitation stated. No check is marked FAILED.

| AC | Status | Supporting observations and exact evidence | Limitations |
| --- | --- | --- | --- |
| AC-1 Preflight | SUPPORTED WITH LIMITS | Web Client identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_Items tab; no sign-in, banner, or dialog. Pre-work screenshots `t1-01`, `t2-01`, `t8-01`. Designer User scope text `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` and the inherited `Identify Your Editing Scope` dialog in `preflight-tab-list-snapshot.md` (tool-generated snapshot). | The User-scoped Form version was cited from EXP-050, not re-read in the Designer. The Designer's inherited scope dialog was present before T1 and was not touched. |
| AC-2 Empty-collection gate | SUPPORTED WITH LIMITS | FiP with blank criteria (T1 snapshot), then one F4: one starred row, blank Item/Description/UM, Cost `0.00` default excluded, `Item (Object 1 of 1)` (caption prefix expected). Screenshot `t1-02`. Repeated in T2 baseline `t2-01`. | Blank criteria read from the FiP snapshot (no FiP screenshot in T1). Query execution inferred from the mode exit and the settled placeholder. UI observation, not a database read. |
| AC-3 FX_UM list baseline | SUPPORTED WITH LIMITS | Two options visible: `DZ | Dozen` and `EA | Each`, in the native listbox (`t1-03`, accessibility options `f1e241`/`f1e244` in T1). List dismissed without selection (`t1-04`; input blank; Save disabled). | Column headings are not exposed; FX_Description as the description column is inferred from the EXP-050 IDO baseline (`FX_UMs / FX_UM / FX_Description`), not observed. The list was opened seven times in total, not once; the six later opens were for authorized selections (see note A). |
| AC-4 Invalid BX draft and single Save | SUPPORTED WITH LIMITS | Pre-Save draft `dumbbell / 45 pound iron / 45.00 / BX` visible in one Form (`t2-02`). One Save (T2 audit #17). Native alert text `BX is not a valid Unit of Measure` (`t2-03`, accessibility excerpt C in `t2-accessibility-excerpts.md`); Save remained enabled and the row remained starred. Same-session query later returned no BX row (T8). | The message text is the native text; the validator's implementation is not established. Whether the BX Save wrote a row is not established by any database read. The same-session query showing no BX row is query-level evidence only; it is consistent with no persisted BX row but does not prove absence in the database. |
| AC-5 EA correction | SUPPORTED WITH LIMITS | Alert dismissed once (T3 audit #6). EA selected through the native dropdown (T3 audit #10, option `f1e213`). Dumbbell draft retained: `dumbbell`, `45 pound iron`, `45.00`, `EA` (`t3-03`; accessibility excerpt E in `t3-accessibility-excerpts.md`). No second invalid Save. | The commit of EA is evidenced by the grid cell and by later settled states, not by a Save. The combobox editor was still active at the end of T3 (settled in T4). |
| AC-6 Guitar draft | SUPPORTED WITH LIMITS | Pre-New gate: one dumbbell row, starred, Save enabled (`t4-01`). After one New: two starred rows; row 2 blank except Cost `0.00` (`t4-02`; accessibility). Guitar draft `guitar / natural acoustic / 129.99 / EA` visible with all four values (`t4-04`, `t4-05`). | Stars are read from screenshots only; row 1 is clipped in the images and its values come from the tree. Two EA dropdown opens were needed in T4 because the first toggle re-opened the list (see T4 report). |
| AC-7 Eggs draft | SUPPORTED WITH LIMITS | Pre-New gate with two starred rows (`t5-01`). After one New: three rows, row 3 blank except Cost `0.00` (`t5-02`). Eggs draft `eggs / cage free / 6.99 / DZ` visible with all four values and three starred rows (`t5-03`). No fourth item (T5 fills: eggs only). | Rows 1–2 clipped in the images; their values come from the accessibility tree. DZ commit evidenced by the grid cell `DZ` (accessibility). |
| AC-8 Successful Save | SUPPORTED WITH LIMITS | One Save click (T6 audit #6) with the gate verified before it (`t6-01`). Immediately after: Save disabled, stars cleared on all three rows, Item key greyed, no alert or dialog, status `Description (Object 3 of 3)` (`t6-02`). Settled after 3 s, unchanged, no alert (`t6-03`). Accessibility excerpts B and C in `t6-accessibility-excerpts.md`. No implicit commit observed as a separate event. | No native success message exists in this Web Client; success is inferred from the clean UI state (Save disabled, stars cleared, no error). Same-session UI only; no database read. The count after Save was not confirmed by a Refresh (brief forbids one). |
| AC-9 Close and reopen | SUPPORTED WITH LIMITS | Pre-close gate `t7-01`. One close via `Close Panel FX_Items` (T7 audit #6); tab absent, toolbar greyed, no prompt (`t7-02`). One reopen (toolbar Open #10, Select Form row Name cell #12, OK #14); Caption and Name both `FX_Items` in the same DEM configuration (`t7-03`; excerpts A–E in `t7-accessibility-excerpts.md`). | Same-session recovery only. The reopened Form showed only the add-mode placeholder; the saved rows were loaded by the later query, not by the reopen. The User scope and Version were not re-read in the Designer. |
| AC-10 Final three-record query | SUPPORTED WITH LIMITS | One FiP with blank criteria (T8 #6) and one F4 (T8 #9). Settled status `Description (Object 1 of 3)`; three unstarred rows; no placeholder; Save disabled; no dialog (`t8-03`). Rows: `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`. Row 3 selected `(Object 3 of 3)`, `guitar` values (`t8-04`). Row 2 selected `(Object 2 of 3)`, `eggs` values (accessibility excerpt D, no screenshot). Row 1 values in `t8-03` (inputs) and in the tree. Cost displays two decimals. Query order dumbbell, eggs, guitar (not inferred). | Row 2 has no dedicated screenshot; its verification relies on native accessibility evidence (retained limitation). Rows' first column is clipped in `t8-03`. Query-loaded in the same Web Client session; not an independent database read; not cross-session durability. |
| AC-11 Audit reconciliation | SUPPORTED | Reconciled exactly (section 1): BX Save 1 (T2); intended successful Save 1 (T6); total Saves 2; New 2 (T4, T5); runtime close 1 and reopen 1 (T7); final empty-criteria query 1 (T8); initial gate query 1 separately (T1); BX alert dismissal 1 (T3); fourth item 0; recovered T4 `Tab 1 not found` error 1. No implicit commit observed as a separate event. No timeout, ref-not-found, or unexpected prompt. | Audit counts reflect the tool calls, not rendered-state proof. Two snapshot-count mismatches corrected in section 2. The T2 Edit header errors (two) are disclosed. Combobox opens exceeded the literal "once" for AC-3 (note A). Leftover inherited in-page scope dialog in the Designer (see section 6). |
| AC-12 Confinement and preservation | SUPPORTED WITH LIMITS | No browser action touched a FX_UMs record, IDO, SQL object, property class, caption, vendor Form, source control, or authentication (action audit, section 4). Repository confinement is reported in section 5 from the file inventory, not from `git status`. | Repository baseline cannot be established: `.git` is access-denied and Bash is disabled (see section 5). Absence of authorized actions is not independent backend proof. |

## 4. Preservation audit (action evidence, not backend proof)

Evidence for "no intentional change" is the audit action log. It is not an independent read of the backend.

| Object | Actions recorded | Conclusion |
| --- | --- | --- |
| FX_UMs records | Only the FX_UM combobox option list was opened and read (T1, T3–T5 selections of EA/DZ on the FX_Items row). No FX_UMs Form, grid, or record was opened or edited. | No intentional FX_UMs change recorded. |
| FX_Items IDO, IDO properties, property classes, domains | No Designer action after T1 (Designer tab read only). No IDO query or edit. | No intentional change recorded. |
| SQL tables, structures, constraints | No SQL action. | No intentional change recorded. |
| Caption strings | No Designer string action. | No intentional change recorded. |
| Vendor Forms | The Designer tab was viewed in T1 and read-only in T2, T3 (one find, no match), and not selected for edit after T1. The Web Client `Property Classes` or `IDOs` tabs were not opened in EXP-051. | No intentional change recorded. |
| Source control | No check-in, check-out, Undo Check Out, or lock action. | No intentional change recorded. |
| Authentication | No sign-in, credential, session, or browser action. No session challenge. | No change recorded. |
| FX_Items records | Intentional: 3 valid records (dumbbell, guitar, eggs), each with four values; BX invalid Save produced a rejected alert. The T8 query showed exactly three keys and no BX row. | See limitation: persisted state is query-level, not a database read. |

Limits: this audit cannot prove absence of backend changes. It shows only the actions the worker and controller recorded. An independent database read (not authorized in this experiment) would be needed to verify the stored state of FX_Items, including whether the rejected BX Save wrote a row.

## 5. Repository confinement (AC-12)

- **Baseline:** cannot be established in this run. Bash is disabled, and `.git` is access-denied (a Read of `.git/HEAD` returned a permission denial). No `git status` or diff was run. This is a repository-audit limitation. The harness computes confinement from its own before and after Git state.
- **Session-start status (from the harness context, not re-verified now):** tracked modifications existed before this run under `tools/learning-harness/` (README, `briefs/EXP-035.brief.json`, `harness.config.example.json`, `src/shadow/cli.ts`, `src/shadow/runner.ts`, `test/shadow.test.ts`). These are not attributed to EXP-051. `tools/` was not read and was not changed by this run. Prior EXP-051 commits (`231ad82`, `0845803`, `c839ee2`) predate this run.

Worker-authored files written by this run (repo-relative):

| Path | Kind |
| --- | --- |
| `experiments/EXP-051-hello-world-part-2-fx-items-domain-validation-and-.md` | experiment record (created T1; edited T1–T9) |
| `evidence/EXP-051/T1-preflight-empty-gate-and-domain-list-report.md` | report T1 |
| `evidence/EXP-051/T2-invalid-bx-save-report.md` | report T2 |
| `evidence/EXP-051/T3-correct-bx-to-ea-report.md` | report T3 |
| `evidence/EXP-051/T4-guitar-draft-and-two-unsaved-rows-report.md` | report T4 |
| `evidence/EXP-051/T5-eggs-staged-three-pending-rows-report.md` | report T5 |
| `evidence/EXP-051/T6-successful-save-report.md` | report T6 |
| `evidence/EXP-051/T7-close-and-reopen-report.md` | report T7 |
| `evidence/EXP-051/T8-final-query-three-record-verification-report.md` | report T8 |
| `evidence/EXP-051/T9-final-audit.md` | this audit |
| `evidence/EXP-051/t2-accessibility-excerpts.md`, `t3-…`, `t6-…`, `t7-…`, `t8-…` (5 files) | worker-written accessibility excerpts |
| `evidence/EXP-051/t1-01` to `t1-04`, `t2-01` to `t2-03`, `t3-01` to `t3-03`, `t4-01` to `t4-05`, `t5-01` to `t5-03`, `t6-01` to `t6-03`, `t7-01` to `t7-03`, `t8-01` to `t8-04` | 28 PNG screenshots (worker-requested) |

Tool-generated files inside `evidence/EXP-051/` (not worker prose):
- `evidence/EXP-051/preflight-tab-list-snapshot.md`: written by the browser snapshot tool (with a filename argument). Content is the Designer tab snapshot.
- `evidence/EXP-051/harness-audit-T1.md` to `harness-audit-T8.md` (8 files): controller-generated.

Tool-generated files outside `evidence/EXP-051/`:
- `evidence/playwright/` snapshot and console files with timestamps `2026-10-11T03-41` to `2026-10-11T03-59`: 35 files (Glob `*2026-10-11T0*`). The list is in the T9 Glob output; the earlier-dated files in that directory were not inventoried and were not touched by this run.

Totals in `evidence/EXP-051/`: 51 files (28 PNG; 14 worker-written Markdown, including this audit; 1 tool-generated snapshot file; 8 controller audits). Worker-authored files in this run: 1 experiment record plus 42 evidence files (28 PNG and 14 Markdown).

Unrelated pre-existing changes: the `tools/learning-harness/*` modifications above. Not attributed to this run; not changed by it.

Limits: confinement is reported from the file inventory and the audits. A full repository diff, which would be needed for a whole-repository cleanliness claim, could not be run.

## 6. Open items for coordinator

1. **Adjudication.** Accepted or blocked is for the coordinator.
2. **Persistence.** The database state of the three records and whether the rejected BX Save wrote a row are unverified. Both need separate authorization for a database read (not requested here).
3. **Cleanup.** The three valid records and any BX row were not cleaned up. Any cleanup needs separate authorization.
4. **Validator implementation.** The BX rejection text is observed; the validator's source (domain versus other) is not established.
5. **Inherited in-page dialog.** The Designer tab's `Identify Your Editing Scope` dialog was open before T1 and remains open. It was not touched by EXP-051. The brief's stable-state rule allows an in-page dialog only when the task says so; this one predates the run. Coordinator decision on dismissal.
6. **Row 2 evidence.** The eggs row 2 verification in T8 is accessibility-only (no dedicated screenshot). Retained limitation.
7. **Query order.** The final query order was dumbbell, eggs, guitar. Insertion order was dumbbell, guitar, eggs. The reason is not inferred.
