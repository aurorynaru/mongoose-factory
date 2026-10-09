# Replay comparison scorecard

Leave results blank until reviewed; blank is not pass or zero. Use counts for
wrong-tool actions, exact-value/report errors and loop interruptions. Record
guard name and count, plus evidence paths. Coordinator errors stay empty for now.
Tasks are manually relayed from fixed accepted coordinator text.

| Run | Task | Completed (y/n) | Wrong-tool actions | Exact-value errors | Guard denials (which guard) | Loop interruptions | Recovery allowance used | Report errors (claims not matching evidence) | Coordinator errors | Assistant turns | Wall time (s) | usage_limit hit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EXP-033-R3 | T1 | y (attempt 2; attempt 1 stopped correctly at Infor configuration screen, operator precondition gap) | 0 | 0 | 0 (attempt 1: 1 expected built-in denial, Read under tools/) | 0 | 0 | 1 (attempt 2 claimed the attempt-1 header carried worker_session_id; it did not, the label was added after attempt 1) | | 15 + 10 | 98.6 + 81.9 | n |
| EXP-033-R3 | T2 | y | 0 | 0 | 0 | 0 | 0 | 0 | | 19 | 73.9 | n |
| EXP-033-R3 | T3 | y (attempt 2; attempt 1 stopped with zero keystrokes: click timed out because the Chrome window was covered and rendering paused) | 0 | 0 | 0 | 0 | fresh snapshot 1/1 (attempt 1, environment-caused) | 0 | | 12 + 39 | 66.2 + 85.6 | n |
| EXP-033-R3 | T4 | y | 0 | 0 | 0 | 0 | 0 | 0 | | 25 | 77.6 | n |
| EXP-033-R3 | T5 | y | 0 | 0 | 0 | 0 | 0 | 0 | | 12 | 88.8 | n |
| EXP-033-R4 | T1 | y (attempt 2; attempt 1 stopped correctly before any browser action: harness guard lock failed on parallel tool calls, fixed in dcdff7d) | 0 | 0 | attempt 1: 1 (guard_state, harness bug) | 0 | 0 | 0 (minor: called the portal "System Administrator" label a tab, flagged as uninspected) | | 4 + 6 | 30.6 + 64.6 | n |
| EXP-033-R4 | T2 | y | 0 | 0 | 0 | 0 | 0 | 0 | | 14 | 65.6 | n |
| EXP-033-R4 | T3 | y | 0 | 0 | 0 | 0 | corrected inspection 1/1 (stale-ref find; counted 0 in T3, recounted conservatively as 1 in T5) | 0 (T3 accounting later corrected by the worker) | | 35 | 106.5 | n |
| EXP-033-R4 | T4 | y | 0 | 0 | 0 | 0 | 0 | 0 | | 37 | 305.3 | n |
| EXP-033-R4 | T5 | y | 0 | 0 | 0 | 0 | 0 | 0 | | 9 | 81.9 | n |

CLI JSON exposes `assistantTurns`, `wallTimeSeconds`, `guardDenials` (total and
byGuard), and `guardDenialsFile`. Wall time covers task journaling/launch through
process close, excludes readiness/preflight, and is unknown after crash recovery.
Guard counts come from the task hook audit, not inferred successes. An auditError
means counts are lower bounds; inspect the native transcript. Built-in permission
denials are separate from the three custom guards. Manually review wrong tools,
literal spelling, recovery accounting, report claims and screenshots.

## EXP-033-R3: acceptance checks

| Check | Pass/fail | Evidence and limitations |
|---|---|---|
| AC-1 | Partial (worker); operator decision pending | Identity: session 60cc08ec-01c4-41cc-9294-26f32bee888e, distinct from earlier workers. Usable Web Client only after the operator completed the Infor configuration selection before attempt 2; the worker took no session-establishment action. Worker declined to treat this as a clean AC-1. |
| AC-2 | Pass | Event log (task 8e704f18): Control+a, Backspace, 25 single press_key calls spelling FX_ComponentRecoveryLab02, 0 errors, no type/fill/eval. |
| AC-3 | Pass | t3-01-positive-control-settled-dialog.png: one row, Caption and Name FX_ComponentRecoveryLab02; Filter By Name, boxes unchecked. Textbox text is clipped in the image; full value from accessibility read. |
| AC-4 | Pass | Event log (task c300c53c): Control+a, Backspace, 28 single press_key calls spelling FX_SelectFormKeyboardProbe01, lowercase b at key 17, 0 errors. |
| AC-5 | Pass | t4-01-probe-settled-dialog.png: empty grid body. Rendered UI only; no database claim. |
| AC-6 | Pass | No browser_type/fill/press_sequentially/evaluate/run_code in T3–T5 event logs; T5 single click = Cancel. |
| AC-7 | Pass | Fresh snapshot 1/1 (T3 attempt 1, environment), corrected inspection 0/1. |
| AC-8 | Pass | t5-01 pre-Cancel, t5-02 post-Cancel: dialog closed, Web Client intact, one Cancel, no reopen. |

Reviewer notes: Reviewed by Claude (operator assistant) against event logs and screenshots, 2026-10-09. Worker chose not to promote replay_verified because of AC-1; the procedure is already replay_verified by EXP-033-R2, so R3 serves the model comparison.

Session UUID: 60cc08ec-01c4-41cc-9294-26f32bee888e

Inherited Select Form state and differences from R2: Select Form closed at T1; on Open, Filter By was Caption (changed to Name), filter empty, boxes unchecked. No Designer tab (R2 had one).

Actual recovery used/remaining (never copy historical counts as observations): fresh snapshot 1/1 used, corrected inspection 0/1 used.

Usage pauses / incomplete tasks / comparison limitations: no usage_limit. Two operator-caused stops (configuration screen; covered Chrome window), each retried once with an operator note. Worker preamble changed from T3 attempt 2 on (commit c4bb8e1); Chrome ran without anti-throttling flags. R4 starts with both fixes, so R4 should not need these retries.

## EXP-033-R4: acceptance checks

| Check | Pass/fail | Evidence and limitations |
|---|---|---|
| AC-1 | Pass | Session 66e4d74e-ce8b-4646-b9f9-01fbca90a469, distinct from EXP-033, R2 and R3 workers. Web Client usable at T1 with no session action (operator completed login and configuration before T1). |
| AC-2 | Pass | Event log (task cd74c42a): Control+a, Backspace, 25 single press_key calls spelling FX_ComponentRecoveryLab02, 0 errors, no type/fill/eval. |
| AC-3 | Pass | t3-01-positive-control-settled-viewport.png: one row FX_ComponentRecoveryLab02 in Caption and Name. |
| AC-4 | Pass | Event log (task 4f960a74): Control+a, Backspace, 28 single press_key calls spelling FX_SelectFormKeyboardProbe01, lowercase b at key 17, 0 errors. F and X were sent as two parallel calls; final value exact. |
| AC-5 | Pass | t4-01-probe-settled-viewport.png: empty grid body. Rendered UI only. |
| AC-6 | Pass | No type/fill/press_sequentially/evaluate/run_code in T3–T5; T5 single click = Cancel. |
| AC-7 | Pass | Fresh snapshot 0/1; corrected inspection 1/1 (conservative recount in T5). |
| AC-8 | Pass | t5-01 pre-Cancel, t5-02 post-Cancel: dialog closed, Web Client intact, one Cancel, no reopen. |

Reviewer notes: Reviewed by Claude (operator assistant) against event logs and screenshots, 2026-10-09. Worker classified replay_verified (scoped to this environment and workflow).

Session UUID: 66e4d74e-ce8b-4646-b9f9-01fbca90a469

Inherited Select Form state and differences from R2: same as R3: closed at T1; on Open Filter By Caption, filter empty, boxes unchecked; no Designer tab.

Actual recovery used/remaining (never copy historical counts as observations): fresh snapshot 0/1, corrected inspection 1/1.

Usage pauses / incomplete tasks / comparison limitations: no usage_limit. One harness-caused stop (guard lock with parallel calls), retried once with an operator note. Chrome ran with anti-throttling flags from the start; window maximized by the operator assistant via CDP to match R3. One run per model only.
