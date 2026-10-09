# EXP-035-R2 — T9 documentary reconciliation (supersedes the T8 audit where stated)

Run R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 12, task T9.
worker_session_id: 69ed601b-bbc3-4abd-8c53-6a6415410f36. task_message_id: 6b5982aa-796f-4d9d-89ea-e0f4ea0f7ed8.

## §A Scope of T9

- Browser calls: **0**. Mongoose actions: **0**. Select Form remains CLOSED (after the T7 final Cancel).
- `tools/` was not read. The original T3 transcript was not opened by the worker.
- Writes: this file; `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md`; a supersession note in `evidence/EXP-035-R2/t8-final-acceptance-provenance-audit.md`.

## §B Coordinator decisions recorded in T9

1. **Operator extraction accepted as call-level evidence for AC-2.** The extraction of the controller's saved T3 event transcript (`claude-data/workers/4adf1fa1-…/tasks/9cec1dc2-….events.jsonl`, as stated by the operator) is accepted as call-level evidence. Qualification preserved: the worker did NOT independently open the original transcript, and the contents of that file are operator-reported. The extraction reports successful `browser_press_key` calls for `Control+a`, `Backspace`, and exactly 25 single printable characters in the required order (`F X _ C o m p o n e n t R e c o v e r y L a b 0 2`), with zero errors and no forbidden input method.
2. **AC-2 marked PASSED** on the combined evidence: (a) the operator extraction above, and (b) the corroborating rendered evidence in §D below. It is **not** marked passed on textbox contents alone.
3. **Accounting** (see §C): the five-call difference is one additional non-browser inspection plus four non-browser documentation writes. The operator extraction supplies the exact non-browser breakdown. There are no additional browser interactions.
4. **Classification** (see §E): the coordinator's position is that a successfully accepted clean replay may establish `replay_verified` for this specific rendered-UI retention procedure. The T8 statement that the observation "has not been repeated" is withdrawn as a reason to withhold that classification.

## §C Accounting reconciliation (corrected)

| Category | Operator extraction | Worker T3 self-report | Difference |
|---|---|---|---|
| Browser calls | 37 (calls 1–37: 7 preparation, 27 key, 1 wait, 2 captures) | 37 (1 start snapshot, 3 clicks, 3 finds, 27 `press_key`, 1 wait, 2 snapshots, 1 screenshot) | **0** |
| Non-browser inspection / reads | 3 (calls 38–40) | 2 (saved-file reads, `t3-action-audit-notes.md` §I) | **+1 inspection** |
| Non-browser documentation writes | 4 (calls 41–44) | 0 (not counted in §I) | **+4 writes** |
| **Total** | **44** | **39** | **+5** |

- The two accounts agree on every browser operation. The operator's 1–7 preparation calls equal the self-report's start snapshot, three clicks and three finds, in the same order.
- The worker's self-report omitted writes. Existing evidence confirms at least two T3 writes (`t3-action-audit-notes.md` and the record's T3 text), which is consistent with the operator's four.
- The exact non-browser breakdown comes from the operator extraction. It is accepted for this purpose by the coordinator decision in §B.1.

## §D Acceptance table (corrected)

**Numbering limitation (disclosed).** The brief's approved AC-1 through AC-4 wording was NOT available to this worker. It lives under `tools/`, which is out of bounds, and the T8 audit recorded that no readable file numbers the checks. The coordinator's T9 message refers to "AC-1 through AC-4 definitions already supplied by the coordinator", but no such text was present in the material this worker could read. The rows below therefore use the coordinator's listed requirement groups and the predecessor EXP-035 numbering, labelled as such. Where the predecessor number is shown, it is a qualified label, not the approved wording.

| Requirement group (coordinator T9 list) | Predecessor label (qualified) | Status | Evidence (repo-relative) | Limitation |
|---|---|---|---|---|
| Repository-review ordering before browser interaction | AC-1a (predecessor) | **PASS (limited)** | `evidence/EXP-035-R2/t1-repository-review-notes.md` §A–§E (zero browser calls in T1, by its own record); experiment record T1 section | T1 is untimestamped. The earliest browser artifact in the run is `evidence/playwright/console-2026-10-09T13-28-14-315Z.log`, after the session start at 13:24:56Z. This is consistent with T1 preceding browser work but does not bound the T1 window. The EXP-035 waiver does not apply to this run. |
| Preflight (one tab; Web Client usable; Select Form closed; one Open; inherited state recorded before change) | AC-1 | **PASS (limited)** | `evidence/EXP-035-R2/t2-open-inherited-state-notes.md` §A–§E; `t2-01-preflight-webclient-viewport.png`; `t2-02-dialog-open-inherited-snapshot.md`; `t2-03-dialog-open-inherited-viewport.png`; artifact `evidence/playwright/page-2026-10-09T13-28-23-941Z.yml` | Login, configuration selection and "no unsaved Designer changes" are operator attestations. No Designer tab is visible. |
| Native keyboard operations (Filter By=Name; checkboxes unchanged; `Control+a`; `Backspace`; 25 single printable keys in order) | AC-2 | **PASS** (coordinator decision §B.2) | Call-level: operator extraction (§B.1). Corroboration: `evidence/EXP-035-R2/t3-action-audit-notes.md` §B–§F (self-report); artifacts `evidence/playwright/page-2026-10-09T13-30-38-403Z.yml` (dropdown expanded), `…13-30-41-380Z.yml` (`Name` selected), `…13-30-45-403Z.yml` (textbox `[active]`, empty), `…13-31-18-429Z.yml` (settled text). | The worker did not independently open the transcript. No tool artifact logs key presses. The textbox was already empty before the clear, so the clear's effect is not attributable. Checkbox "never toggled" rests on the self-report plus the visible unchecked state. |
| Positive-control state (single exact row, captured before lifecycle) | AC-3 | **PASS** | `evidence/EXP-035-R2/t3-02-settled-pre-cancel-snapshot.md`; `t3-03-settled-pre-cancel-dialog-viewport.png`; `t4-01-current-state-snapshot.md`; `t4-02-current-state-viewport.png`; `t6-01-guard-state-snapshot.md`; `t6-02-guard-state-viewport.png`; `t7-01-pre-final-cancel-snapshot.md` | The image clips the leading `FX_` of the textbox; the exact value comes from the accessibility line. |
| One ordinary Cancel and one ordinary reopen, no filter change in between | AC-4 | **PASS** | `evidence/EXP-035-R2/t6-lifecycle-observation-notes.md` §B; artifacts `evidence/playwright/page-2026-10-09T13-48-47-116Z.yml` (Cancel; no dialog node) and `…13-48-52-205Z.yml` (Open click) | Closure and reopen are verified by accessibility, not server records. |
| Post-reopen observation (textbox, Filter By, Case Sensitive, Starts With, rows; no typing or change) | AC-5 (predecessor) | **PASS (observation recorded)** | `evidence/EXP-035-R2/t6-03-post-reopen-snapshot.md`; `t6-04-post-reopen-viewport.png` (viewed) | Checkbox states come from accessibility absence plus the image. The textbox's `[active]` state and the highlight have no established cause. Retention is an observation, not a pass/fail result. |
| Final ordinary Cancel, then closure, no further reopen | AC-4 extension / final-cancel check | **PASS** | `evidence/EXP-035-R2/t7-01-pre-final-cancel-snapshot.md`; `t7-02-post-final-cancel-snapshot.md` (no dialog node); `t7-03-post-final-cancel-viewport.png` (viewed); `t7-final-cancel-closure-notes.md`; artifact `evidence/playwright/page-2026-10-09T13-51-48-965Z.yml` | Closure is verified in the frame and by the accessibility tree only. |
| Lifecycle counters | AC-6 (predecessor) | **PASS** | Open 1 (`t2-open-inherited-state-notes.md` §B; artifact `…13-28-23-941Z.yml`); Cancel 1 and reopen 1 (`t6-lifecycle-observation-notes.md` §B); final Cancel 1 (`t7-final-cancel-closure-notes.md` §D); additional reopen 0 | Zero-count claims for Enter, OK, row activation, bulk entry, authentication and JavaScript are self-reported per task. The operator extraction supports zero errors and no forbidden input for T3. |
| Scope confinement | AC-7 (predecessor) | **PASS** for worker-authored writes; generated files disclosed (§F) | `evidence/EXP-035-R2/` listing; experiment record | See §F. |
| Knowledge classification | AC-K (predecessor) | **Updated** (see §E) | §E below | — |
| Designer context read-only | AC-D (predecessor) | **PASS (limited)** | `t2-02-dialog-open-inherited-snapshot.md`; `t4-01-current-state-snapshot.md` (toolbar `Designer` buttons present; no Designer tab) | Designer state is operator-attested and cannot be verified from this tab. |

**Readiness.** No remaining genuine blocker for lifecycle or capture. The open items are documentary limitations: the approved AC wording is unreadable to the worker (§D note); the T1 window is untimestamped; the Designer state is operator-attested; and the `evidence/playwright` items in §F need a coordinator decision. The experiment is **ready for coordinator acceptance**. The worker does not accept it.

## §E Classification (corrected)

| Finding | Classification | Basis |
|---|---|---|
| Rendered textbox, Filter By, both checkboxes and single row unchanged across one ordinary Cancel and one ordinary reopen | **replay_verified** for this specific rendered-UI retention procedure, per the coordinator's classification in §B.4 | Clean replay: the sequence and observations are recorded and the required checks pass (§D). This is the second execution of the rendered-UI observation (EXP-035 was the first) and it reproduces the same rendered result. |
| Scope of that classification | **Rendered UI only** | No persistence, database, cache, serialization, server-refresh, session or internal-store mechanism is established or inferred. |
| 25-key native sequence as a procedure | replay_verified (EXP-033-R2, EXP-033-R4); this run supports it through the operator extraction | Not re-verified by the worker. |
| Reopen textbox `[active]` and text highlight | unresolved | No cause established; EXP-035 T5 showed the same. |
| Clear-step effect | unresolved | Textbox was already empty before the clear. |
| Inherited-state variation across runs | unresolved | Recorded in T1 §F. |

Note for the coordinator (not a reason to withhold the classification): AGENTS.md states that a procedure becomes verified "only after repeatable execution and persistence verification." This experiment has no persistence verification, so the `replay_verified` label above is confined to the rendered-UI procedure. The coordinator's rule in §B.4 is applied as instructed; the worker records the AGENTS.md wording here so the scope is visible.

## §F Compliance findings (retained)

- **Worker-authored repository writes** were confined to `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` and `evidence/EXP-035-R2/`. No predecessor record, predecessor evidence, recipe or `tools/` path was written.
- **Automatically generated evidence artifacts:** 13 files under `evidence/playwright/` were written by the browser tool in this run's window (T3–T7 page-state reads and console events), plus earlier-run files. They are outside the permitted paths and gitignored (`.gitignore` line 10), so git-based confinement will not show them. They were **not independently authored by the worker**. They were not deleted, since deletion would be an out-of-scope write. Coordinator decision needed on their disposition.
- **Tool-generated wrapper code:** each browser result includes a "Ran Playwright code" wrapper (for example `getByRole('button', { name: 'Cancel' }).click()`). That wrapper is generated by the tool and is not a worker-authored evaluate or run-code call. The worker invoked only: clicks, `browser_press_key`, `browser_wait_for`, `browser_snapshot`, `browser_find`, and `browser_take_screenshot`. No `browser_evaluate` or run-code call was made. Assessed from actual invoked operations, as instructed.
- **Shell:** none used; git status was not run by the worker.

## §G Open items for the coordinator (documentary)

1. Confirm the approved AC-1 through AC-4 wording against the brief (not readable to the worker); this table uses the qualified labels in §D.
2. Disposition of the gitignored `evidence/playwright/` files from this run.
3. Confirm that the wrapper-code position is acceptable under the no-JavaScript rule.
4. Confirm the replay_verified scope (rendered UI only) against the AGENTS.md persistence-verification wording.

## §H Files written in T9

- `evidence/EXP-035-R2/t9-documentary-reconciliation.md` (this file; created)
- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (updated: status, action-log row, T9 section, and a supersession note on the T8 classification)
- `evidence/EXP-035-R2/t8-final-acceptance-provenance-audit.md` (supersession note added at the top only)
- No browser call. No `tools/` read. No predecessor record, recipe or generated file was modified or removed.
