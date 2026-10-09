# EXP-035-R2 — T8 final repository-only acceptance and provenance audit

> **SUPERSEDED IN PART by T9** (`evidence/EXP-035-R2/t9-documentary-reconciliation.md`). Superseded: the AC-2 status (now PASSED on the combined evidence, per the coordinator's T9 decision), the "not ready" replay_verified classification in §I (now replay_verified for the rendered-UI procedure, scoped), the §K recommended decisions (partly answered in T9), and the 3-read/4-write wording being "operator-supplied and unconfirmed" (now the exact operator breakdown). The browser-operation counts, lifecycle counters and compliance findings stand.

Run R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 11, task T8.
worker_session_id: 69ed601b-bbc3-4abd-8c53-6a6415410f36. task_message_id: 79a5b261-cd6d-4960-bb9f-3f7c30537ea8.

## §A Scope of this audit

- Browser calls in T8: **0**. Mongoose actions: **0**. Select Form was not touched and remains CLOSED after T7.
- `tools/` was NOT read or searched in T8 or in any earlier task. The operator's 44-call log was NOT opened by the worker. All statements about it are operator-supplied (T6 and T8 instructions in this session).
- Sources read in T8 (repository only): the EXP-035-R2 record (full); T1–T7 evidence notes and the T3 audit notes (existing; not edited); the T4/T6/T7 captures and tool artifacts listed in §H; the EXP-035 predecessor record (acceptance numbering) and `evidence/EXP-035/t7-final-acceptance-audit.md` §B (check definitions); `.gitignore` (one line).
- No readable EXP-035-R2 file contains a numbered acceptance table (see §D).

## §B T3 accounting reconciliation (operator 44-call breakdown vs. worker 39-call summary)

Operator breakdown (T8 instruction): 1–7 browser preparation; 8–34 key operations (`Control+a`, `Backspace`, 25 printable); 35 wait; 36–37 evidence captures; 38–40 repository inspection; 41–44 documentation writes. Total 44.

Worker T3 self-report (`evidence/EXP-035-R2/t3-action-audit-notes.md` §I): browser calls 37 = 3 clicks + 27 `press_key` + 1 wait + 2 snapshots + 3 finds + 1 screenshot; saved-file reads 2. Total 39.

| Category | Operator (T8) | Worker self-report (T3 §I) | Difference |
|---|---|---|---|
| Browser calls 1–37 (preparation, keys, wait, captures) | 37 | 37 | **0** |
| Key calls (`Control+a`, `Backspace`, 25 printable) | 27 | 27 | 0 |
| Repository reads | 3 (calls 38–40) | 2 | +1 |
| Repository writes | 4 (calls 41–44) | not counted in §I | +4 |
| **Total** | **44** | **39** | **+5** |

Findings:
1. **The browser-operation count agrees (37 = 37).** The five-call difference lies entirely outside browser operations, in the operator's categories 38–44. It does NOT indicate any additional browser action. The worker's self-report does not count any writes, and its own list of T3 browser calls matches the operator's 1–37 positionally (the seven preparation calls, the 27 key calls at 8–34, and the wait and captures at 35–37).
2. **Source of the non-browser difference (partly supported).** Existing evidence shows T3 wrote at least two repository files: `t3-action-audit-notes.md` (it names T3 and this task_message_id) and the experiment record (the T3 status and section text). The self-report counted neither. So the self-report omitted writes; that part is supported. The exact split (3 reads, 4 writes) comes only from the operator and cannot be confirmed from existing evidence. The read count (2 in the self-report vs. 3 in the operator's breakdown) is unresolved.
3. **Conclusion:** the discrepancy is a documented limitation of the worker's self-report: non-browser calls were under-counted. It does not change any browser-operation count.

## §C Operator-supplied T3 log: provenance and content checks

Provenance: operator-supplied extraction of `claude-data/workers/4adf1fa1-…/tasks/9cec1dc2-….events.jsonl`. **Not independently inspected by the worker.** Identity match the worker can check: the task id and worker session in the path match T3's task_message_id and worker_session_id as recorded in `t3-action-audit-notes.md`. The file contents, integrity, and completeness are unverified.

Content checks that the worker CAN make (against the operator text quoted in T6 and T8 and the T3 self-report):

| Requirement | Operator text | T3 self-report | Worker check |
|---|---|---|---|
| `Control+a`, then `Backspace`, both `browser_press_key` | calls 8–9 | §D1, §D2 (`press_key`) | Consistent; not independently verified |
| 25 single printable `browser_press_key` calls in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` | calls 10–34 | §E table, 25 rows | Letter-by-letter the operator sequence equals the target (25 letters; lowercase `b` at position 23). Consistent with the self-report. Not independently verified. |
| Zero errors | "44 successful, zero errors" | 0 errors | Consistent; not verified |
| No bulk, JS, Enter, OK, Cancel, reopen, row interaction in T3 | stated | 0 each | Consistent with the artifacts (see §E); not independently verified |

## §D Acceptance checks: source and numbering

- **No readable EXP-035-R2 file defines numbered acceptance checks.** The record gives only the objective sentence ("accepted whether or not the state is retained, provided the sequence and observation are clean and all acceptance checks pass") and the task-level requirements. The approved brief is under `tools/` and was not read. No check beyond AC-4 is present in any readable file.
- **Correction to the T4 record.** T4 mapped AC-2 = exact positive-control state and AC-3 = lifecycle counter integrity. That mapping was an assumption and conflicts with the numbering used by the predecessor EXP-035 record and its T7 matrix. The T5 and T6 notes already use AC-2 for the exact-operation requirement, which matches the predecessor. This audit uses the predecessor numbering (table §F) and marks it as assumed.

Predecessor numbering used (`evidence/EXP-035/t7-final-acceptance-audit.md` §B, "coordinator numbering from the T7 instruction"): AC-1 preflight and inherited state; AC-1a review before browser interaction; AC-2 settings, native clear and 25 key operations; AC-3 settled single row before lifecycle; AC-4 one Cancel and one reopen; AC-5 post-reopen observation; AC-6 lifecycle accounting and zero forbidden input; AC-7 repository confinement; AC-D Designer context; AC-K knowledge classification.

## §E Acceptance table (EXP-035 numbering; assumed for EXP-035-R2; coordinator to confirm against the approved brief)

Status key: **PASS** = supported by the cited evidence; **PASS (limited)** = supported with a stated limitation; **UNRESOLVED** = not established; **NOT ASSESSABLE** = cannot be decided from readable evidence.

| Check | Status | Supporting evidence (repo-relative) | Observed facts | Limitations |
|---|---|---|---|---|
| **AC-1** Read-only preflight: one tab; Web Client usable; Select Form closed; one ordinary initial Open; inherited dialog state recorded before change | **PASS (limited)** | `evidence/EXP-035-R2/t2-open-inherited-state-notes.md` §A–§E; `t2-01-preflight-webclient-viewport.png` (viewed in T2); `t2-02-dialog-open-inherited-snapshot.md`; `t2-03-dialog-open-inherited-viewport.png` (viewed in T2); tool artifact `evidence/playwright/page-2026-10-09T13-28-23-941Z.yml` | One tab; identity and DEM badge; Select Form closed before Open; after one Open: textbox empty and focused, Filter By `Caption`, both checkboxes unchecked, 43 dialog rows | Login, configuration selection and "no unsaved Designer changes" are operator attestations (no Designer tab visible). The 13:28:23 artifact could belong to the T2 post-Open or the T3 start snapshot (see §F). |
| **AC-1a** Repository review of EXP-033, R2, R3, R4, EXP-034, EXP-035 complete before any browser interaction | **PASS (limited)** | `evidence/EXP-035-R2/t1-repository-review-notes.md` §A–§E (zero browser calls); the record's T1 section | T1 read six predecessor records and listed decisive evidence; no browser call in T1 | T1 has no timestamp. The run's earliest browser artifact is `console-…13-28-14…` (13:28:14Z), after the session start at 13:24:56Z. That is consistent with T1 preceding browser work, but does not bound the T1 window. T1 is self-reported. The EXP-035 waiver does not apply to this run. |
| **AC-2** Filter By=Name; Case Sensitive and Starts With unchecked; native `Control+a` then `Backspace`; exactly 25 successful one-printable-character native key operations in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` | **UNRESOLVED** (state PASS; call-level unverified) | Final state: `t3-02-settled-pre-cancel-snapshot.md`; `t3-03-settled-pre-cancel-dialog-viewport.png` (viewed in T3/T4); `t4-01-current-state-snapshot.md`; `t4-02-current-state-viewport.png`; tool artifacts `page-…13-30-38`, `13-30-41`, `13-30-45` (Filter By expansion, selection, textbox focus), `13-31-18`. Call-level: operator log (§C); self-report `t3-action-audit-notes.md` §B–§F | Filter By `Name` and checkboxes unchecked, observed in artifacts and captures. Textbox exact `FX_ComponentRecoveryLab02` in the accessibility line. Operator and self-report agree on 27 successful calls in order. | No worker-inspected call-level record of the 27 calls. The operator log is not independently inspected. No tool artifact logs key presses. The textbox was already empty before the clear, so the clear's effect cannot be attributed. The "not toggled" checkbox claim is self-reported. Under the brief's own rule ("if the native-key facility cannot represent this exact sequence"), no contrary evidence exists. |
| **AC-3** Settled single rendered row whose Name exactly equals `FX_ComponentRecoveryLab02`, before lifecycle testing | **PASS** | `t3-02-settled-pre-cancel-snapshot.md` (one table, one row, two gridcells `FX_ComponentRecoveryLab02`); `t3-03-settled-pre-cancel-dialog-viewport.png`; tool artifact `page-…13-31-18-429Z.yml` (same structure); unchanged in `t4-01`, `t6-01`, `t7-01` | ONE table, ONE row, Name exact, before Cancel | The image clips the textbox's leading `FX_`; the exact value comes from the accessibility line. Absence of any Cancel between 13:31:18Z and the T4 capture is self-reported and not disproven. |
| **AC-4** Exactly one ordinary Cancel, then exactly one ordinary toolbar reopen, no filter change in between | **PASS** | `t6-lifecycle-observation-notes.md` §B; tool artifacts `page-…13-48-47-116Z.yml` (Cancel: no `dialog "Select Form"` node) and `page-…13-48-52-205Z.yml` (toolbar Open click); `t6-03-post-reopen-snapshot.md` (dialog present) | Cancel `f1e127` returned without error; closure verified by absence of the dialog node; Open `f1e23` returned without error; dialog present after reopen | Closure verified by accessibility, not by server-side evidence. Tool-generated wrapper code in results (§G). |
| **AC-5** After the single reopen, record textbox, Filter By, both checkboxes and rows without typing or changing anything | **PASS (limited)** (observation recorded) | `t6-03-post-reopen-snapshot.md` (textbox `[active]` `FX_ComponentRecoveryLab02`; `combobox: Name`; both checkboxes unmarked; one row, two gridcells exact); `t6-04-post-reopen-viewport.png` (viewed: one row; Filter By `Name`; checkboxes empty; filter text highlighted, leading characters clipped) | Post-reopen state matches the pre-Cancel state on every recorded item | Checkbox states are from accessibility absence plus the image. The textbox's `[active]` state and the highlight have no established cause (no worker action preceded them). Retention is an observation, not a pass/fail result. |
| **AC-6** Lifecycle accounting: ≤1 initial Open, exactly 1 tested Cancel, exactly 1 tested reopen, ≤1 final Cancel, no reopen after it; zero Enter/OK, row activation, bulk entry, auth, JavaScript; recovery allowance reported | **PASS (limited)** | §F below (counter table); task notes T2–T7; tool artifacts for each Cancel and Open click | Initial Open 1; tested Cancel 1; tested reopen 1; final Cancel 1; additional reopen 0. Zero Enter/OK, row, bulk, auth, JS (self-reported per task; operator log states the same for T3) | Zero-count claims are self-reported per task, except where the artifact sequence is consistent with them. The T3 operator log is unverified by the worker. |
| **AC-7** Repository confinement: writes only to the EXP-035-R2 record and `evidence/EXP-035-R2/` | **PASS (worker-authored writes)**; generated files **disclosed as unresolved** | §H | Every worker-authored write is under `evidence/EXP-035-R2/` or is the experiment record. No `tools/` path touched. | Tool-generated files under `evidence/playwright/` are outside the permitted paths and are gitignored (`.gitignore` line 10). Git-based confirmation is not available to a worker. See §G. |
| **AC-D** Inherited Web Client and Designer context inspected read-only and preserved | **PASS (limited)** | `t2-02-dialog-open-inherited-snapshot.md`; `t4-01-current-state-snapshot.md`: toolbar shows a `Designer` button pair; no Designer tab visible; no Designer action taken | Web Client context read; Designer context not observable beyond the toolbar | Designer state, including "no unsaved Designer changes", is operator-attested and cannot be verified from this single tab. |
| **AC-K** Knowledge classification: retained rendered state recorded as observed, not replay_verified | **PASS** | §I below | Classification as instructed | — |

## §F Lifecycle counter verification (T7 closure and earlier evidence)

| Counter | Required (brief) | Evidence | Status |
|---|---|---|---|
| Initial Open | 1 | T2 self-report (one toolbar click; post-Open dialog); `page-…13-28-23-941Z.yml` shows the dialog open with Filter By `Caption` (same visible state as T3's start) | **1, supported** (see the mapping caveat below) |
| Tested Cancel | 1 | `t6-lifecycle-observation-notes.md` §B; `page-…13-48-47-116Z.yml` (no dialog node) | **1, supported** |
| Tested reopen | 1 | `page-…13-48-52-205Z.yml`; `t6-03-post-reopen-snapshot.md` | **1, supported** |
| Final Cancel | 1 | `t7-01-pre-final-cancel-snapshot.md` (dialog open, Cancel `f1e127`); `page-…13-51-48-965Z.yml`; `t7-02-post-final-cancel-snapshot.md` (no dialog node); `t7-03-post-final-cancel-viewport.png` (no dialog visible) | **1, supported; closure verified** |
| Additional reopen | 0 | No Open click after 13:48:52Z in any artifact; `t7-02` shows no dialog after the final Cancel | **0, supported** |

Closure of Select Form after the final Cancel is verified by the absence of the dialog node in `t7-02-post-final-cancel-snapshot.md` and by `t7-03-post-final-cancel-viewport.png`. The Web Client chrome (identity bar, DEM badge, menus, toolbar, Explorer tree) remains present. No browser-native dialog is visible.

Caveat on artifact mapping: the tool's artifacts are not one-to-one with worker calls. Clicks produce artifacts; key presses and finds do not; the snapshot-with-filename calls wrote saved files instead. The 13:28:23 artifact's visible state (dialog open, Caption, empty textbox) cannot distinguish the T2 post-Open snapshot from the T3 start snapshot. The Open count of 1 therefore rests on the T2 self-report, and this caveat does not change the count of Open clicks that the artifacts show after 13:28:23.

## §G Repository compliance findings

**Worker-authored writes (verified by the list of files this task and earlier tasks reported writing; all are inside permitted paths):**
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (record; updated in T1, T2, T3, T4, T5, T6, T7 and T8).
- `evidence/EXP-035-R2/`: `t1-repository-review-notes.md`; `t2-open-inherited-state-notes.md`; `t2-01-…png`; `t2-02-…snapshot.md`; `t2-03-…png`; `t3-action-audit-notes.md`; `t3-02-…snapshot.md`; `t3-03-…png`; `t4-reconciliation-notes.md`; `t4-01-…snapshot.md`; `t4-02-…png`; `t5-provenance-audit.md`; `t6-operator-t3-provenance-notes.md`; `t6-lifecycle-observation-notes.md`; `t6-01…04`; `t7-final-cancel-closure-notes.md`; `t7-01…03`; this file (`t8-final-acceptance-provenance-audit.md`).
- Snapshot and screenshot files under `evidence/EXP-035-R2/` were written by the browser tool's `filename` parameter at the worker's request. They are allowed evidence captures.

**No predecessor record, predecessor evidence file, or `tools/` path was written or read by the worker.** Edits to the EXP-035-R2 record were limited to status, the action log, and per-task sections.

**Tool-generated files outside permitted paths (not authored by the worker; disclosed as unresolved compliance implications):**
- In this run's window, 13 files under `evidence/playwright/` (listed in §H). They were written by the browser tool on each page-state read or console event.
- `evidence/playwright/` already existed with files from earlier runs today and earlier. The worker did not touch or clean those.
- `.gitignore` line 10 excludes `evidence/playwright/`. The harness's git-based confinement will therefore NOT show these files in `git status`. Their presence in the working tree is a compliance question for the coordinator to decide. The worker did not delete them: deletion would be an out-of-scope write.

**Tool-generated code in action results:** each browser action result contains a "Ran Playwright code" wrapper, for example `getByRole('button', { name: 'Cancel' }).click()` and `getByLabel('Open').click()`. The worker did not author these (T1 open question 2 and the EXP-035 T7 §F note). Whether such wrappers are acceptable under the no-JavaScript rule is an open question for the coordinator. No worker-authored JavaScript exists.

**Environment confirmation not possible:** no shell was available, so `git status` and `git diff` could not be run by the worker.

## §H Evidence inventory (this run's tool artifacts and worker captures)

Tool-generated (`evidence/playwright/`, gitignored, outside permitted paths): `console-…13-28-14-315Z.log`; `page-…13-28-23-941Z.yml`; `console-…13-30-34-806Z.log`; `page-…13-30-38-403Z.yml`; `page-…13-30-41-380Z.yml`; `page-…13-30-45-403Z.yml`; `page-…13-31-18-429Z.yml`; `console-…13-36-38-105Z.log`; `console-…13-48-38-871Z.log`; `page-…13-48-47-116Z.yml`; `page-…13-48-52-205Z.yml`; `console-…13-51-44-778Z.log`; `page-…13-51-48-965Z.yml`.

Worker captures (`evidence/EXP-035-R2/`): listed in §G. Visual inspection in earlier tasks: `t2-01`, `t2-03`, `t3-03`, `t4-02`, `t6-02`, `t6-04`, `t7-03` (viewed). The image `t6-02` shows the guard state, with the filter text highlighted and clipped.

## §I Knowledge classification (no promotion)

| Finding | Classification | Basis |
|---|---|---|
| Retention of the rendered textbox, Filter By, both checkboxes and the single row across one ordinary Cancel and one ordinary reopen | **observed** (single run, rendered UI only) | T6 post-reopen capture matches the pre-Cancel state on each item; artifacts and captures agree. |
| Same retention, as a replay | **NOT replay_verified** | One run only. AGENTS.md requires repeatable execution and persistence verification before a procedure is verified. This run's independent observation adds one more single-run observation and does not make it repeatable. |
| The 25-key native sequence for `FX_ComponentRecoveryLab02` as a procedure | **replay_verified** (earlier records EXP-033-R2 and EXP-033-R4); **not re-verified by this run** | This run's call-level record is operator-reported only. |
| Exact operation of AC-2 in this run | **unresolved** (operator-attested; state verified) | §E. |
| Reopen textbox highlight and `[active]` state | **unresolved** | No cause established; the same observation appears in EXP-035 T5. |
| Clear-step effect on a non-empty textbox | **unresolved** | The textbox was already empty. |
| Cause of inherited-state variation across runs | **unresolved** | Recorded in T1 §F. |
| Any persistence, database, cache, serialization, server-refresh, session or internal-store mechanism | **not inferred** | Excluded by the brief. |

**Readiness for a replay_verified classification of the retention observation:** **not ready.** Reasons: AC-2's call-level evidence is unverified; the observation is single-run; and no repeated execution exists.

## §J Overall disposition (documentary only; not a harness acceptance)

- **Satisfied on the recorded evidence:** AC-1 (with operator attestation limits); AC-1a (with a timing limit); AC-3; AC-4; AC-5 (as an observation); AC-6 (counters, supported by artifacts and task notes); AC-7 for worker-authored writes; AC-K; the state-level part of AC-2.
- **Unresolved:** the call-level part of AC-2 (25 key calls, control keys, the input method), which rests only on the operator-supplied log. The T3 call-level record cannot be inspected by a worker in this environment.
- **Not assessable:** the approved brief's own acceptance list, which is under `tools/` and cannot be read. The check list used here is the predecessor numbering and must be confirmed.
- **Compliance open items:** tool-generated `evidence/playwright/` files (gitignored, outside permitted paths; not cleaned by the worker); tool-generated wrapper code in action results; the five-call T3 accounting difference (non-browser calls only; partly documented).

**Overall:** the lifecycle and final-state requirements are satisfied on the recorded evidence. The call-level requirement for the T3 key operations is not independently satisfied. The worker does not declare final harness acceptance. The coordinator decides, based on whether an operator-attested call-level log is acceptable for AC-2.

## §K Recommended coordinator decisions

1. Accept or reject the operator-attested T3 call-level log as evidence for AC-2, given that the worker cannot inspect the raw file.
2. Confirm the acceptance numbering against the approved brief (§D); the table above uses the predecessor numbering.
3. Decide how to handle the gitignored `evidence/playwright/` files generated during this run.
4. Decide whether the wrapper-code question affects the no-JavaScript requirement.
5. Decide whether the T3 non-browser accounting (3 reads, 4 writes) needs a further record, or whether §B's documented limitation is enough.

## §L Files written in T8

- `evidence/EXP-035-R2/t8-final-acceptance-provenance-audit.md` (this file; created).
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (updated: status, T8 action-log row, T8 section, correction of the T4 AC mapping, next permitted action).
- No other path was written. No browser call was made.
