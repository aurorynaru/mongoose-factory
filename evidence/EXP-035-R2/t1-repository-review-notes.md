# EXP-035-R2 — T1 repository-only review notes

Run: R-20261009-212412-Gcw7, experiment EXP-035-R2, cycle 1, task T1 (mandatory repository-only review).
worker_session_id: 4adf1fa1-a207-43c1-8181-7b7a84722071. task_message_id: 5d77c268-32f0-45fb-bdd7-2267e2c347e0.

## A. Browser tool calls in T1

Zero. No tab listing, snapshot, find, screenshot, click, key press, navigation, console or network call, and no evaluate/run-code. No Mongoose action of any kind. Browser preflight has NOT begun.

## B. Repository reads in T1

- Glob: `experiments/*.md`, `experiments/EXP-035*`, `*EXP-035-R2*` (no EXP-035-R2 record or `evidence/EXP-035-R2/` existed before T1), and `evidence/**` / `evidence/EXP-03[345]*/**` listings.
- Read in full: the six predecessor experiment records (section C).
- Read: 14 predecessor evidence notes (section D) and 3 screenshots, viewed as images (section E).
- Not read (per the brief's `tools/` rule, not attempted): `tools/` and `briefs/`.

## C. Predecessor records read in full

| Record | Recorded status | Relevance to EXP-035-R2 |
|---|---|---|
| `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md` | T7 final audit; observed / candidate_procedure; not replay_verified | Origin of the native Ctrl+A/Backspace + one-char-per-key path. T4 wrong-literal probe (capital B) recorded as history. |
| `experiments/EXP-033-R2-clean-replay-select-form-native-keyboard-filter-re.md` | T5; replay_verified for its tested environment/UI workflow | Independent replay of the native-key path; source of the positive-control procedure the brief names. |
| `experiments/EXP-033-R3-clean-replay-select-form-native-keyboard-filter-re.md` | T5; NOT accepted under strict AC-1 (sign-in screen at attempt 1; operator-performed configuration step before attempt 2) | Positive control and probe observed; focus-click timeouts attributed by the operator to an occluded Chrome window. |
| `experiments/EXP-033-R4-clean-replay-select-form-native-keyboard-filter-re.md` | T5; replay_verified for its tested environment/UI workflow | Second replay of the same path; its stale-ref recovery (targeted `find` after "Ref not found") does not match this brief's rule. |
| `experiments/EXP-034-select-form-positive-filter-retention-across-cance.md` | BLOCKED, closed; no tested Cancel/reopen ever performed | The `type` tool inserted literal `Control+A` into the filter textbox (prohibited bulk entry). No retention conclusion exists from EXP-034. |
| `experiments/EXP-035-select-form-positive-state-retention-across-one-ca.md` | ACCEPTED for run R-20261009-204056-HY76 under an operator waiver of AC-1a; observed, not replay_verified | The single-run retention observation this replay re-tests. The waiver is run-scoped and does not apply to EXP-035-R2. |

## D. Decisive evidence notes read and what they establish

| File | What it establishes | What it does NOT establish |
|---|---|---|
| `evidence/EXP-033/t2-positive-control-notes.md` | Positive-control keys: Ctrl+A, Backspace, then 25 single printable keys in the target order; one empty-key call errored ("Unknown key: ''") and sent no keystroke; settled grid = one row. | Which key triggered which refresh (refresh granularity not attributed). |
| `evidence/EXP-033/t6-corrected-probe-notes.md` | Corrective probe with lowercase `b`; zero rows for the exact probe literal in the rendered grid; no Cancel/reopen in that task. | Any database absence or inventory. Probe is out of scope for R2. |
| `evidence/EXP-033-R2/t3-positive-control-notes.md` | Replay positive control: focus click, Ctrl+A, Backspace, post-clear full-list re-render, 25 single-char ops in order (table §B), settled one exact row (`t3-01`, `t3-02`). | Per-key attribution; it is one run's rendered state. |
| `evidence/EXP-033-R2/t5-final-audit-notes.md` | Single ordinary Cancel dismissed the dialog on first attempt; no reopen; zero SaveChanges/AddForm/Delete/Unload in the visible window; repository confinement recorded. | Server-side behaviour; network data was a window, with a stated panel-reset caveat. |
| `evidence/EXP-033-R3/t4-probe-notes.md` | Case-sensitive regex confirmed lowercase `b` at key 17 of the probe; zero visible rows; `find "gridcell"` = none. | Any database inventory; probe is out of scope for R2. |
| `evidence/EXP-033-R3/t3-attempt2-positive-control-notes.md` | Exact 25-key table for `FX_ComponentRecoveryLab02`; focus click succeeded on the second attempt; operator diagnosis of occlusion recorded as the operator's, not verified by the worker. | That the occlusion diagnosis is correct (operator statement only). |
| `evidence/EXP-033-R4/t3-positive-control-notes.md` | Exact 25-key table; stale ref `f1e78` answered with a targeted `find` (not a fresh untargeted snapshot); settled one exact row. | That the stale-ref handling satisfies the strict recovery rule (it does not, under R2's brief). |
| `evidence/EXP-033-R4/t5-final-audit-notes.md` | One final Cancel, dismissed first attempt; no reopen; console `ERR_NAME_NOT_RESOLVED` on a portal `user/cookie/reset` call (undiagnosed). | Cause of the console errors. |
| `evidence/EXP-034/t2-tool-error-and-correction-notes.md` | Literal `Control+A` text inserted through the `type` tool; corrected with native Backspace ×9 then native Ctrl+A/Backspace and 25 keys. | Retention behaviour (no Cancel/reopen occurred). |
| `evidence/EXP-034/t2-open-positive-control-notes.md` | Inherited state at open: probe literal, Name, zero rows; 25 single-char ops with one exact settled row; stale-ref recovery used 1/1; corrected inspection used 1/1. | Retention. |
| `evidence/EXP-035/t2-open-inherited-state-notes.md` | Inherited state at open: textbox empty and focused; Filter By `Caption`; both checkboxes unchecked; populated unfiltered list. Records that T1 preceded the full review. | Row total (saved snapshot counted later as 47 in t7). |
| `evidence/EXP-035/t5-lifecycle-audit-notes.md` | Pre-Cancel state; one tested Cancel; one tested reopen; post-reopen textbox `FX_ComponentRecoveryLab02`, Filter By Name, both checkboxes unchecked, one exact row. | Mechanism; checkbox states come from accessibility absence plus the image. |
| `evidence/EXP-035/t7-final-acceptance-audit.md` | Acceptance matrix; AC-1a failed as written; clear-step effect not attributable (textbox already empty before clear); tool-generated wrapper code in results raised as an open question; counts 25 keys, 1 Cancel, 1 reopen, 1 final Cancel. | — |
| `evidence/EXP-035/t8-waiver-and-finalization-note.md` | Operator waiver of AC-1a for run R-20261009-204056-HY76 only; operator assessment of event logs recorded as the operator's, not the worker's; highlight on reopen recorded as observed, cause unresolved. | Anything outside that one run. |

## E. Screenshots viewed as images

- `evidence/EXP-034/t2-x2-corrected-inspection-error-state-dialog.png`: dialog "Select Form"; Filter field visibly reads `Control+A`; Filter By Name; blank grid body; both checkboxes empty; OK/Cancel/Help unpressed. PROVES the literal residue was on screen. DOES NOT PROVE the keystroke path beyond the notes.
- `evidence/EXP-035/t2-02-dialog-open-inherited-viewport.png`: identity bar and DEM badge; dialog "Select Form" over the Web Client; Filter field empty with focus border; Filter By `Caption`; both checkboxes empty; populated list headed `XML to IDO Wizard`, first row highlighted by default selection. PROVES the inherited Open state for EXP-035. DOES NOT PROVE the row total.
- `evidence/EXP-035/t5-04-post-reopen-viewport.png`: dialog "Select Form"; Filter field shows `…ComponentRecoveryLab02` with the whole value highlighted as selected (leading `FX_` clipped); Filter By Name; both checkboxes empty; one row `FX_ComponentRecoveryLab02` in both columns. PROVES the displayed post-reopen state. DOES NOT PROVE the full textbox value (clipped; exact value from the accessibility line in the notes) or why the text is highlighted.

## F. Inherited-state comparison across predecessor runs (observed; cause NOT established)

| Run (record) | Textbox at start of the run's dialog | Filter By | Checkboxes | Rows | Browser tabs recorded |
|---|---|---|---|---|---|
| EXP-033 T1 | `FX_SelectFormFilterProbe01` | Name | unchecked / unchecked | one stale row `FX_ComponentRecoveryLab02` | two (Web Client + Designer) |
| EXP-033-R2 T2 | `FX_SelectFormKeyboardProbe01` (retained) | Name | unchecked / unchecked | zero | two |
| EXP-033-R3 T2 | empty | Caption | unchecked / unchecked | unfiltered list (partial view) | one |
| EXP-033-R4 T2 | empty | Caption | unchecked / unchecked | 43 rows rendered | one |
| EXP-034 T2 | `FX_SelectFormKeyboardProbe01` (retained) | Name | unchecked / unchecked | zero | two |
| EXP-035 T2 | empty | Caption | unchecked / unchecked | unfiltered list (47 rows in saved snapshot) | one |

Observation: the three runs that recorded two tabs (EXP-033 T1, EXP-033-R2 T2, EXP-034 T2) each saw retained non-empty filter text; the three single-tab runs (EXP-033-R3 T2, EXP-033-R4 T2, EXP-035 T2) each saw an empty textbox with Caption. This coincidence is recorded only. No mechanism is inferred. EXP-035-R2's preflight must record tab count and the inherited values fresh.

## G. Process points from predecessor evidence (for the replay's preflight and actions)

1. Multi-character text tools are prohibited: EXP-034 proved that the `type` tool with `Control+A` inserts literal text. Use `press_key` for `Control+a` and `Backspace` only.
2. Empty key argument: EXP-033 T2 sent `press_key` with an empty key, which errored with no keystroke. Send exactly one printable character per call.
3. Case: the target has one lowercase `b` at position 23 (`...L a b 0 2`). Every record's key table shows lowercase `b` there.
4. Stale refs: after "Ref ... not found", the brief allows ONE fresh untargeted snapshot. EXP-033-R4 used a targeted `find` instead; EXP-035-R2 must not.
5. Focus timeouts: EXP-033-R3 attempt 1 saw two "visible, enabled and stable" timeouts; operator attributed them to an occluded Chrome window. Do not repeat a timed-out focus click without a fresh snapshot.
6. Clear-step attribution: in EXP-035 the textbox was already empty before Ctrl+a/Backspace, so the clear effect was not observed. If the EXP-035-R2 inherited textbox is empty again, record the same limitation.
7. Reopen highlight: EXP-035 T5 showed the reopened textbox text fully selected with no worker action. Do not type, click or press keys after the tested reopen.
8. Tool-generated wrapper code: EXP-035 T7 §F noted that action results show `page.keyboard.press(...)`-style code generated by the MCP tool. Whether this is acceptable under the no-JavaScript rule remains a coordinator question; the worker authors none.
9. Designer context: no Designer tab existed in EXP-035 or EXP-033-R3/R4; "no unsaved Designer changes" was operator-attested only there. EXP-035-R2 must report what is visible rather than assume it.

## H. Recovery allowance (EXP-035-R2, shared across all its tasks)

No prior EXP-035-R2 use exists in the repository. Starting state: fresh-snapshot 0/1 used, corrected-inspection 0/1 used. T1 used neither. EXP-034's consumption (1/1 + 1/1) belongs to EXP-034 and is not carried over.

## I. Unresolved after T1

- Cause of the inherited-state variation in section F.
- Cause of the reopen text highlight (EXP-035 T5).
- Whether EXP-035's retention observation reproduces. Only a clean EXP-035-R2 run can address this; nothing here is replay_verified.
- Whether the MCP wrapper code in action results is acceptable (EXP-035 T7 question 5).
- The approved EXP-035-R2 brief is not readable by the worker. The acceptance list used for this review is the one in the harness task message.

## J. Files written in T1

- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (created)
- `evidence/EXP-035-R2/t1-repository-review-notes.md` (this file, created)
