# EXP-053 — Hello World Part 3 Section 4: FX_Items Form Event Diagnostics

**Final status (after T6, cycle 5, final reconciliation and acceptance matrix): all ten acceptance checks (AC-1 to AC-10) are supported with limits; none failed. Recommendation: accept EXP-053 at the same-session UI-observation level, with the limits below. Observed only; not replay_verified; no replay, isolated event causation, cross-session persistence, database-level persistence, or complete server-side trace is claimed.** Final product state (as last observed in T5): Diagnostics General > Enabled OFF; Form > Events ON; Form > Event Handler > Include ON; the FX_Items runtime Form open and clean; the Diagnostic Log open; Designer untouched. T6 made no browser calls. Full reconciliation and matrix: `evidence/EXP-053/T6-final-reconciliation-audit-and-acceptance-matrix-report.md`.

Prior status (after T5, cycle 4, AC-8 restoration and 32-option verification): T5 COMPLETE. AC-8 PASSED for the same-session UI read-back. General > Enabled was restored ON → OFF (its T1 original) through the native label and one ordinary OK. A fresh read-only reopen matched all 32 Diagnostics options to the T1 baseline (0 differences). Events, Event Handler Include, and Value Changed were not clicked and remain as in T1. **The Diagnostics preferences are restored; the consolidated final audit (AC-9) and final matrix (AC-10) remain for the next task.** Observed only; not replay_verified; no database-level, cross-session, or causal claim.

Prior status (after T4, cycle 3): T4 COMPLETE. The one controlled opening was consumed. 20 native `FormEvent (FX_Items)` rows were captured after the single clear (05:22:07.945 to 05:22:07.976). The refresh-before-apply branch was NOT triggered.

Prior status (after T3, cycle 2, cleared-log baseline and clean runtime closure): T3 COMPLETE. AC-1 and AC-2 are supported with limits (T1). AC-3 is supported with limits (T2). AC-4 is supported with limits (T3): the inherited FX_Items runtime was verified clean (Save disabled, no prompt) and closed once through its tab control (tab absent afterwards); the Diagnostic Log was cleared exactly once (tooltip "Clear") and its Log Messages grid is visibly empty. FX_Items has NOT been reopened; no collection load has occurred in T3. **Diagnostics Enable is still ON and must be restored to Off (AC-8) at the end of the experiment.** Observed only; not replay_verified; no cross-session, database, or causal claim.

## Run identity and provenance

- Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 0, task T1. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `77291ffd-3c9c-4912-9d47-e07ea6c3d696`.
- Date 2026-10-11. Mode: LEARNING MODE. Editing scope User. Target Form `FX_Items` (User-scoped). Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Evidence directory `evidence/EXP-053/`.
- Predecessors read: `AGENTS.md`; `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md` (accepted with limits; Designer Initial Command = `Refresh`; runtime opening with Refresh loads three rows; T9 report `evidence/EXP-052/T9-final-runtime-open-automatic-load-report.md` read); `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` (runtime Select Form procedure; FX_Items identity); `docs/mongoose/transcripts/hello-world-pt3.md` section 4 (03:20–04:23). `tools/` was not read.
- Note: the EXP-053 record did not exist before T1. It was created in T1 under the brief's "create only the EXP-053 experiment record and T1 evidence report" rule.

## Scope, authority, and boundaries

- Authorized Diagnostics preference changes (temporary, must be restored): **General > Enabled** (Diagnostics Enable), **Form > Events**, **Form > Event Handler > Include**. All other preferences are out of scope and must be preserved.
- Authorized controlled steps (later tasks, not T1): one clean runtime close of the inherited FX_Items; one Diagnostic Log clear; one Open > Select Form of FX_Items; no manual collection loads after opening; restoration of every changed Diagnostics option.
- Not authorized: Designer edits, Form or event changes, Initial Command change, business-data changes, FX_UMs or IDO changes, unrelated preferences, reloads, reauthentication.

## Acceptance matrix (final, after T6; AC-1 to AC-8 rows as recorded at each task; AC-9 and AC-10 final)

| AC | Status | Basis | Limit |
| --- | --- | --- | --- |
| AC-1 Read-only preflight | **Supported with limits (T1)** | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-01`, `t1-06`); runtime FX_Items open, three rows, Save greyed, no dialog or challenge (`t1-01`); Designer FX_Items, User scope, Initial Command `Refresh`, Save greyed (`t1-07`); transcript section 4 reviewed; T1 report §1 | Same session, UI only. Identity is the displayed text, not an inspected credential. Runtime tab left open by design. |
| AC-2 Original-value baseline | **Supported with limits (T1)** | Full 32-checkbox inventory across General, Form, IDO Collections, Others (`evidence/EXP-053/T1-preflight-and-diagnostics-baseline-report.md` §2); screenshots `t1-02` to `t1-05`; accessibility refs recorded per option | Form group mapping is a worker inference from accessibility order cross-checked by count and checked states (report §2b). Duplicate names (`Include` ×2, `Initialization` ×3, `Dependent Notification` ×2) are identified by group only. |
| AC-3 Configure three options | **Supported with limits (T2)** | Pre-change confirmation of Form group associations (`t2-02`); one Diagnostics mutation: General > Enabled Off → On via the visible label, after a timed-out checkbox click that did not execute (`t2-03`); native OK; reopened read-only verification of all 32 options (`t2-04` to `t2-07`; report §3). Events and Event Handler Include were not clicked and remain On. | Single session, UI only. The checkbox input click timed out at the ExtJS overlay (suspected environment blocker); the label click was the single corrected attempt. Values are client-side, not database read-backs. |
| AC-4 Clean closure and cleared log | **Supported with limits (T3)** | Pre-close gate (`t3-01`: Save greyed, three rows, no prompt); Diagnostic Log opened and initial state recorded (`t3-02`, `t3-03`, `t3-04`); runtime tab closed once via `Close Panel FX_Items` (`t3-05`; `find` FX_Items no match); one clear via the tooltip-identified "Clear" control (`t3-06`, `t3-07`: grid has no rows) | The log held 36 inherited rows from the T2 preference session before the clear (not EXP-053 test evidence). The runtime close produced no visible new rows (as rendered). Clear identified by tooltip only. Single session, UI only. |
| AC-5 Controlled FX_Items opening | **Supported with limits (T4)** | One Open > Select Form > OK (`t4-01` pre-open; `t4-02` immediate; `t4-03` settled after 3 s; `t4-04` saved accessibility snapshot). Form identity FX_Items; DEM configuration; three records automatic (dumbbell / eggs / guitar; values in T4 report §3); Save disabled; status `Description (Object 1 of 3)`; no manual load after opening (report §9) | Same session, UI only. Load cause not isolated. Select Form row Name-cell click is part of the opening workflow (disclosed). The log panel shows about six rows; accessibility used for the full set. |
| AC-6 Diagnostic event sequence | **Supported with limits (T4)** | 20 native `FormEvent (FX_Items)` rows after the T3 clear, all 05:22:07.945 or 05:22:07.976, names and order as in `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md` Part A; source `t4-04` snapshot and `t4-02`/`t4-03` screenshots; no `EventHandler` rows (every event `num handlers for event 0`) | Attribution to the opening is by timing and the FX_Items name only. Log gives no trigger. No unattributable rows seen. Milliseconds only, no date. Whether all server-side entries are rendered is not established. Enabled-ON effect is only observed with the three options set as in T2. |
| AC-7 Evidence text report | **Supported with limits (T4)** | `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md` (verbatim Part A separated from worker interpretation Part B, relationship to the opening interval Part C) | Verbatim text from the accessibility snapshot; no credentials present; interpretation kept separate. |
| AC-8 Restoration | **Supported with limits (T5): passed for the same-session UI read-back** | General > Enabled ON → OFF via the visible label (`t5-01`, `t5-02`); one ordinary OK; reopened read-only verification of the four tabs (`t5-03` to `t5-06`); 32-option comparison against T1 in `evidence/EXP-053/T5-diagnostics-restoration-and-32-option-comparison-report.md` §3: 32 of 32 match (Enabled OFF; Events ON; Event Handler Include ON; Value Changed ON; other 28 OFF) | Client-side preference values read back in the same session. Not a database read; no cross-session check. Original values are the T1 visible values, not stored values. |
| AC-9 Final action audit | **Supported with limits (T6)** | `evidence/EXP-053/T6-final-reconciliation-audit-and-acceptance-matrix-report.md` §5 (per-task browser-call table: 146 total across T1 to T5; requirement reconciliation: 1 clear, 1 clean runtime closure, 1 controlled opening, 0 manual post-opening collection loads, 0 runtime business-data mutations, 0 Designer mutations, restoration sequence as AC-8) and §7 (confinement); per-tool tables in `harness-audit-T1` to `T5` | Counts reconcile to the per-tool tables. Errors and deviations disclosed: T2 "Tab 1 not found" and intercepted checkbox click (E1, E2); T3 Escape and T4 unnecessary wheel scroll (D1, D3); T4 and T5 read-before-act not done in full (D4 to D6); T3 screenshot count corrected from 7 to 5 (D2). | Controller summary labels differ from the per-tool tables (the per-tool tables are used). Repository confinement from transcript and file-system inspection; the harness before/after diff is authoritative. |
| AC-10 Final matrix | **Supported with limits (T6)** | This record (acceptance matrix; final knowledge table) and `T6-…-report.md` §8 (each AC with exact evidence paths, what the source proves, and its limit) | Every AC has exact evidence paths; the event sequence, timestamps, and ordering are in `T4-controlled-opening-diagnostic-sequence.md`; the 32-option restoration comparison is in `T5-…-report.md` §3; runtime-opening observations are in `T4-…-runtime-and-audit-report.md`; all confirmed findings are classified observed only | Unresolved: the T5 OK and reopen produced no visible log rows (unlike T2) and the cause is not established; the controlled-interval attribution is by timing and name only; the log panel shows about six rows, so the full list rests on the accessibility snapshot. No replay, isolated causation, persistence, or trace completeness is claimed. |

**Coordinator recommendation:** all ten checks are evidence-backed with stated limits, so the recommendation is accept at the same-session UI-observation level (not replay-verified). Open items for adjudication are listed under "Open items" below.

## Diagnostics original-value baseline (recorded before any mutation)

| Option (tab) | Original (visible) | Authorized |
| --- | --- | --- |
| Enabled (General) | **Off** | **Yes** — Diagnostics Enable |
| Events (Form, top level) | **On** | **Yes** — Form Events |
| Include (Form, Event Handler group) | **On** | **Yes** — Event Handler Include |
| All other 29 Diagnostics checkboxes (General 2; Form 14; IDO Collections 7; Others 6) | Off, except Form > Variable > Value Changed (On) | No; preserve |

Full per-option table with accessibility refs: `evidence/EXP-053/T1-preflight-and-diagnostics-baseline-report.md` §2.

## T5 — Diagnostics restoration and 32-option verification, AC-8 (cycle 4)

Full report: `evidence/EXP-053/T5-diagnostics-restoration-and-32-option-comparison-report.md`. Task message `226b4106-b340-46bf-bc81-9c34c1829ab2`, worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`.

- **Preconditions:** T4 sequence file exists and is readable (`T4-controlled-opening-diagnostic-sequence.md`). Runtime FX_Items open (three rows, Save disabled); Diagnostic Log not cleared; no FX_Items action.
- **Pre-change check:** Diagnostics General > Enabled `[checked]` (ON), matching the T2 expected state (`t5-01`). No discrepancy.
- **Restoration (one change):** General > Enabled ON → OFF via the visible `Enabled` label (the checkbox input was not attempted). Unchecked state verified (`t5-02`).
- **Confirmation:** native OK once. Dialog closed; runtime unchanged.
- **Verification (read-only reopen):** General (`t5-03`), Form (`t5-04`), IDO Collections (`t5-05`), Others (`t5-06`). 32 options compared against T1: **32 match, 0 differences.** Final: Enabled OFF; Events ON; Event Handler Include ON; Value Changed ON; the other 28 OFF, as in T1.
- **Log observation:** opening User Preferences added 16 `VarValue` rows at 05:25:20.269 to 05:25:20.285. These are preference-navigation entries, not part of the T4 opening. No rows after 05:25:20.285 were visible at the reopen snapshot. The T4 sequence is unchanged.
- **Counts:** clicks 13 (one Enabled label, one OK, one Close Window, the rest navigation and reads); Diagnostics mutations 1; OK confirmations 1; read-only reopen 1; tab list 1; tab select 1; snapshots 9 (2 untargeted, 7 targeted); finds 6; screenshots 6; log clears 0; FX_Items opens 0; FX_Items closes 0; collection loads 0; runtime data mutations 0; Designer actions 0; prompts accepted 0; timeouts 0; ref-not-found 0; errors 0; browser evaluate or run-code 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** T5 complete. The consolidated final audit (AC-9) and final matrix (AC-10) belong to the next task. The runtime FX_Items tab remains open and clean.

## T4 — Controlled FX_Items opening and diagnostic capture (cycle 3)

Full reports: `evidence/EXP-053/T4-controlled-opening-runtime-and-audit-report.md` (runtime and audit) and `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md` (log sequence). Task message `b43f90e2-8664-4734-9a4e-4a5b34455766`, worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`.

- **Prerequisites (fresh snapshot, no change):** DEM identity; no FX_Items runtime tab (`t4-01`); Log Messages grid empty after the T3 clear; no dialog, banner, or challenge.
- **Opening (once):** toolbar Open → Select Form (one row FX_Items / FX_Items) → row Name cell → OK. Consumed. No second opening.
- **Immediate (`t4-02`):** three records (1 dumbbell / 45 pound iron / 45.00 / EA; 2 eggs / cage free / 6.99 / DZ; 3 guitar / natural acoustic / 129.99 / EA); status `Description (Object 1 of 3)`; Save disabled; no starred row.
- **Settled (3 s, no action; `t4-03`, `t4-04`):** unchanged; all twelve values identical.
- **Diagnostic Log:** 20 native `FormEvent (FX_Items)` rows, display order: StdFormPredisplay (start/result), StdFormInitCompleted (start/result), StdFormRefresh (start), StdFormGetBoundValues (start/result), StdObjectRefresh (start/result), StdObjectSelectCurrentCompleted (start/result), StdObjectRefreshCompleted (start/result), StdFormLoadBoundValues (start), StdFormLoadDerivedValues (start/result), StdFormLoadBoundValues (result), StdFormRefreshCompleted (start/result), StdFormRefresh (result). Timestamps 05:22:07.945 (9 rows) and 05:22:07.976 (11 rows). No `EventHandler` rows.
- **Branch:** Form event entries appeared, so the refresh-before-apply branch was NOT triggered. No browser refresh, no re-clear, no reopen.
- **Diagnostics:** Enabled left ON for coordinator review (the T4 instruction for the events-present branch). Events and Event Handler Include ON. No preference inspection or change in T4.
- **Counts:** clicks 3 (Open, row Name cell, OK; all opening workflow); Select Form OK 1; wait 1 (3 s); finds 2; snapshots 5 (untargeted 3, targeted 1, saved 1); screenshots 4; mouse wheel 1 (no visible effect on the log view); tab list 1; tab select 1; **openings 1**; manual post-opening collection loads 0; runtime data mutations 0; Save 0; edits 0; log clears 0; preference changes 0; Designer actions 0; prompts accepted 0; timeouts 0; ref-not-found 0; errors 0; browser evaluate or run-code 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** T4 complete; coordinator review. Restoration (Enabled → Off, AC-8) is the next obligation, separately authorized.

## T3 — Cleared-log baseline and clean inherited runtime closure (cycle 2)

Full report: `evidence/EXP-053/T3-log-baseline-and-clean-runtime-closure-report.md`. Task message `e40c9d64-e698-47f1-88d1-8f56693ace2b`, worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`.

- **Pre-action gate:** Web Client tab 1 selected; DEM identity; runtime FX_Items selected with three rows; Save disabled; no dialog, banner, or challenge (`t3-01`).
- **Diagnostic Log initial state:** View > Diagnostic Log (the menu item was unchecked before the click). The DevTools panel opened. Logs tab empty (`t3-02`). Log Messages held **36 rows** from the T2 preference session, not from EXP-053 (first six at 05:15:41.163: `EventHandler (StdFormExitOk)` and `FormEvent (UserPreferences): Event name StdFormClose / StdFormExitOk`; thirty at 05:15:49.512: `VarValue (…)` entries). Verbatim text preserved in `t3-04`. Timestamp correlation to the T2 OK and reopen is an inference, not a causal claim.
- **Runtime closure (once):** clean gate passed; `Close Panel FX_Items` clicked once; tab absent (`find` FX_Items no match; `t3-05`). No prompt. No new Log Messages rows visible after the close.
- **Clear (once):** the X-shaped DevTools button (f1e282) was hovered first; tooltip `Clear`. Clicked once. Log Messages grid has no rows afterwards (`t3-06`, `t3-07`).
- **Not done:** FX_Items not opened; no Refresh, F4, FiP, Get More Rows, New, Delete, or Save; no Designer action; **no preference inspection or change** (reopening User Preferences would write new log entries and contaminate the cleared baseline). Enabled remains ON.
- **Counts:** clicks 5 (View, Diagnostic Log, Log Messages tab, runtime close, Clear); hover 1; Escape 1; tab select 1; snapshots 6; screenshots 7; finds 4; Clear invocations 1; runtime closes 1; runtime openings 0; collection loads 0; runtime data mutations 0; preference changes 0; prompts or dialogs accepted 0; timeouts 0; ref-not-found 0; browser evaluate or run-code 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** T3 scope complete; coordinator review before the controlled opening (T4). The one permitted clear is consumed; no further clear is permitted in the controlled test. Restoration (Enabled → Off, AC-8) is still required at the end.

## T2 — Diagnostics Enable configuration, OK, and read-only verification (cycle 1)

Full report: `evidence/EXP-053/T2-diagnostics-enable-configuration-and-verification-report.md`. Task message `4a47f68b-090f-4199-96c9-edbe0edad4db`, worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`.

- **Pre-change confirmation:** Web Client identity DEM; runtime FX_Items open (three rows, Save greyed, no dialog). Diagnostics page matched the T1 baseline: General Enabled Off; Form Events On; Form Event Handler Include On (the checked Include is under the Event Handler heading, `t2-02`); Validator Include Off; Value Changed On. No discrepancy.
- **Mutation (one change):** General > Enabled Off → On.
  - Attempt 1, native checkbox click (ref f1e445): **not executed.** Timed out at "visible, enabled and stable" because the ExtJS overlay span intercepted pointer events on the checkbox input. Fresh snapshot confirmed the checkbox still unchecked.
  - Attempt 2, corrected: click on the visible `Enabled` label (f1e447). Executed once; `Enabled` checked (`t2-03`; accessibility `[checked]`).
- **Confirmation:** native OK once. The dialog closed, and the runtime FX_Items was unchanged.
- **Verification (read-only reopen, View > User Preferences > Diagnostics):** General Enabled ON (`t2-04`); System Information and Security Off. Form: identical to T1 (Events On, Event Handler Include On, Value Changed On, others Off; `t2-05`). IDO Collections: all seven Off (`t2-06`). Others: all six Off (`t2-07`). Result: **1 change from T1 (Enabled), 31 unchanged.**
- **Dialog closed** with Close Window (X), with no edit pending.
- **Counts:** clicks 15 attempted (14 executed; 1 timed out); Diagnostics mutations 1; OK 1; reopen 1; tab selects 1 successful (1 earlier "Tab 1 not found" tool error, recovered by a list and a retry); snapshots 10; finds 6; screenshots 8; typing 0; key presses 0; Diagnostic Log open or clear 0; FX_Items open, close, or query 0; Designer actions 0; runtime data mutations 0; prompts answered 0; browser evaluate or run-code 0; ref-not-found 0.
- **Classification:** observed only; not replay_verified.
- **Stop:** T2 scope complete; coordinator review before the controlled log capture. Restoration (Enabled → Off, AC-8) is still required at the end of the experiment.

## T1 — Read-only preflight (cycle 0)

Full report: `evidence/EXP-053/T1-preflight-and-diagnostics-baseline-report.md`.

- Web Client (tab 1): identity bar DEM configuration; runtime `FX_Items` open with three rows (dumbbell, eggs, guitar; status `Description (Object 1 of 3)`; Save greyed); no dialog, banner, or challenge. Not closed (T1 instruction).
- Designer (tab 0): FX_Items, User version, Initial Command `Refresh`, Save and Undo greyed, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- Preference dialog: opened via View > User Preferences...; Diagnostics category selected; four tabs read in turn. No checkbox clicked, no OK pressed. Dialog closed via its Close Window (X) control, which discards without applying. Nothing had been edited, so nothing was discarded.
- Diagnostic Log: not opened in T1. Inherited log content is unknown and is not attributed to EXP-053.
- Counts: browser calls 26; clicks 7 (navigation/category/tabs/X only); snapshots 8; screenshots 7; finds 1; tab selects 2; typing 0; preference changes 0; Diagnostics confirmations 0; log clears 0; FX_Items open/close 0; runtime mutations 0; Designer changes 0; timeouts 0; ref-not-found 0.
- Classification: observed only.

## Coordinator review (before any mutation; historical, superseded by T2 to T6)

1. **Only one option needs changing.** Diagnostics Enabled is OFF and must become ON. Events and Event Handler Include are already ON. The transcript's "check" steps imply ON for all three. The coordinator should confirm the requested states are ON for all three before any mutation. If they are, the mutation is one click, followed by OK and read-back.
2. **Checkboxes must be targeted by group.** Duplicate names exist. Use the group mapping in the T1 report §2b and verify each click by screenshot.
3. **Restoration plan.** Restore Enabled to Off. Restore Events and Include only if they were changed. Read back all 32 values after restoration.
4. **Refresh-before-apply.** If, after OK, the cleared log and controlled FX_Items opening show no Form event entries, record a possible refresh-before-apply requirement and stop for review. Do not refresh the browser or reopen to compensate.
5. **Inherited runtime tab.** Its clean state was observed in T1 (Save greyed, no prompt). It must be re-checked and closed once, in the controlled step, not in T1.

**Recommendation:** approve the mutation step with the Enabled-only change, or direct the coordinator to confirm the requested states first. No further browser action is recommended until review.

## Open items (final, after T6)

1. **Unexplained log gap (T5).** The T2 OK and reopen each produced visible rows (6 at 05:15:41.163; 30 at 05:15:49.512). The T5 OK at about 05:25:40 and the reopen at about 05:25:47 to 05:26:14 produced none, and no browser-tool file from 05:25:30 onward contains a log row. The cause is not established. AC-8 is verified from the preference values and does not depend on this. Coordinator adjudication requested.
2. **Procedure deviations (T4, T5).** T4 did not read the T3 report or cleared-baseline evidence with a tool before opening. T5 did not read the T1 and T2 reports, read only the first 30 of 58 lines of the T4 sequence file, and inspected only General before the change. No product effect was found. Coordinator acceptance requested.
3. **T3 count correction (D2).** The T3 report says "screenshots 7". The per-tool table records 5 screenshot calls (the other two are accessibility snapshots saved to file). Corrected in the T6 report; the T3 report is not edited.
4. **Open UI state.** The FX_Items runtime tab and the Diagnostic Log panel remain open. The brief did not ask for either to be closed.
5. **Refresh-before-apply branch.** Not triggered: Form event rows appeared after the Diagnostics OK, the single clear, and the single opening. No browser refresh, re-clear, or reopen was made to compensate.
6. Requested states for the three options: resolved. The T2 brief stated the expected states as Enabled ON, Events ON, and Event Handler Include ON. Events and Include were already ON in the T1 baseline, so only Enabled was changed. This item was an inference in T1 and is closed.

## T6 — Final reconciliation, action audit, and acceptance matrix (cycle 5)

Full report: `evidence/EXP-053/T6-final-reconciliation-audit-and-acceptance-matrix-report.md`. Task message `355d73d9-18eb-4136-9e2c-e26766aad178`, worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`.

- **Scope:** documentation only. **Zero browser calls.** No product state changed.
- **Verified directly in T6:** 20 `FormEvent (FX_Items)` rows in `t4-04` (grep); 36 inherited rows in `t3-04`; 16 T5 rows in `page-…05-25-51-805Z.yml`; no browser-tool file from 05:25:30 onward contains a log row; the T4 sequence Part A; harness audits T1 to T5 (`prohibited-tool hits=0` for all five; errors only in T2).
- **Browser calls by task (per-tool tables):** T1 26; T2 42; T3 24; T4 18; T5 36; total 146 (tabs 12; snapshots 38; screenshots 30; clicks 43; finds 19; other 4).
- **Counts:** 1 Diagnostic Log clear (T3); 1 clean inherited runtime closure (T3); 1 controlled FX_Items opening (T4); 0 manual post-opening collection loads; 0 runtime business-data mutations; 0 Designer mutations; Diagnostics dialog openings 5; Diagnostics option mutations 2 (net 0); non-executed mutation attempts 1 (T2); OK confirmations 2; clicks on Events, Include, or Value Changed 0.
- **Corrections and deviations:** T3 screenshot count 7 → 5 (D2); T4 unnecessary wheel scroll with no visible effect (D3); T4 and T5 read-before-act not done in full (D4 to D6); T2 "Tab 1 not found" and checkbox timeout (E1, E2, recovered; the checkbox click did not execute).
- **Unexplained:** no visible log rows after the T5 OK and reopen (report §4.4).
- **Acceptance:** AC-1 to AC-10 all supported with limits; none failed.
- **Classification:** observed only.
- **Stop:** T6 complete. No further browser action, opening, clear, or preference change is permitted in this experiment.

## Repository changes (T6)

- Updated: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (final status; AC-9 and AC-10 rows; final acceptance matrix heading; open items; final knowledge table; superseded markers on the coordinator-review and T1 knowledge sections; T6 section; this list).
- Written: `evidence/EXP-053/T6-final-reconciliation-audit-and-acceptance-matrix-report.md`.
- Not modified: any T1 to T5 report; any screenshot; any `harness-audit-T1` to `T5`; any `evidence/playwright/` browser-tool file; any file outside `evidence/EXP-053/` and `experiments/EXP-053-*`.

## Repository changes (T5)

- Updated: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (this record; status, AC-8 row, T5 section).
- Written: `evidence/EXP-053/T5-diagnostics-restoration-and-32-option-comparison-report.md`.
- Written: `evidence/EXP-053/t5-01-pre-restore-General-Enabled-ON-as-expected.png`, `t5-02-after-label-click-Enabled-unchecked-before-OK.png`, `t5-03-verify-reopened-General-tab-Enabled-OFF.png`, `t5-04-verify-reopened-Form-tab-Events-Include-ValueChanged-ON.png`, `t5-05-verify-reopened-IDO-Collections-tab-unchanged-from-T1.png`, `t5-06-verify-reopened-Others-tab-unchanged-from-T1.png`.
- Not modified: `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md` and `evidence/EXP-053/T4-controlled-opening-runtime-and-audit-report.md` (kept unchanged as the brief requires).
- Tool-generated (not worker-authored): `evidence/playwright/` files for the T5 window, listed in the T5 report §6.

## Repository changes (T4)

- Updated: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (this record; status, AC-5, AC-6, AC-7 rows, T4 section).
- Written: `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md`, `evidence/EXP-053/T4-controlled-opening-runtime-and-audit-report.md`.
- Written: `evidence/EXP-053/t4-01-preopen-no-runtime-tab-log-cleared.png`, `t4-02-immediate-after-single-open-FX_Items-runtime.png`, `t4-03-settled-after-3s-FX_Items-runtime.png`, `t4-05-log-Log-Messages-scrolled-to-later-rows.png` (view shows the first rows; wheel had no visible effect).
- Saved at worker request by the browser tool (snapshot, classified as browser-generated): `evidence/EXP-053/t4-04-settled-accessibility-snapshot-runtime-and-log.md`.
- Tool-generated (not worker-authored): `evidence/playwright/` files for the T4 window, listed in the T4 report §9.

## Repository changes (T3)

- Updated: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (status, AC-4 row, T3 section).
- Written: `evidence/EXP-053/T3-log-baseline-and-clean-runtime-closure-report.md`.
- Written: `evidence/EXP-053/t3-01-preclose-inherited-runtime-FX_Items-clean-state.png`, `t3-02-diagnostic-log-initial-visible-state-before-clear.png`, `t3-03-diagnostic-log-Log-Messages-tab-initial-state.png`, `t3-05-after-runtime-FX_Items-close-tab-absent.png`, `t3-06-diagnostic-log-cleared-baseline-after-one-clear.png`.
- Saved at worker request by the browser tool (snapshot files, classified as browser-generated): `evidence/EXP-053/t3-04-diagnostic-log-Log-Messages-initial-accessibility-snapshot.md`, `evidence/EXP-053/t3-07-diagnostic-log-cleared-baseline-accessibility-snapshot.md`.
- Tool-generated (not worker-authored): `evidence/playwright/` files for the T3 window (console and page snapshots), listed in the T3 report §7.

## Repository changes (T2)

- Updated: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (this record; status, AC-3 row, T2 section).
- Written: `evidence/EXP-053/T2-diagnostics-enable-configuration-and-verification-report.md`.
- Written: `evidence/EXP-053/t2-01-preflight-General-tab-before-T2-change.png`, `t2-02-preflight-Form-tab-group-mapping-before-T2-change.png`, `t2-03-after-corrected-label-click-Enabled-state.png`, `t2-04-verify-reopened-General-tab-Enabled-ON.png`, `t2-05-verify-reopened-Form-tab-unchanged-from-T1.png`, `t2-06-verify-reopened-IDO-Collections-tab-unchanged-from-T1.png`, `t2-07-verify-reopened-Others-tab-unchanged-from-T1.png`, `t2-08-final-state-dialog-closed-runtime-unchanged.png`.
- Tool-generated (not worker-authored): `evidence/playwright/` files for the T2 window (page snapshots and one console log).

## Repository changes (T1)

- Written: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (this record).
- Written: `evidence/EXP-053/T1-preflight-and-diagnostics-baseline-report.md`.
- Written: `evidence/EXP-053/t1-01-webclient-preflight-runtime-FX_Items-open.png`, `t1-02-diagnostics-baseline-General-tab-before-any-change.png`, `t1-03-diagnostics-baseline-Form-tab-before-any-change.png`, `t1-04-diagnostics-baseline-IDO-Collections-tab-before-any-change.png`, `t1-05-diagnostics-baseline-Others-tab-before-any-change.png`, `t1-06-webclient-after-preferences-closed-no-change.png`, `t1-07-designer-FX_Items-Initial-Command-Refresh-readonly.png`.
- Tool-generated (not worker-authored): `evidence/playwright/` files for the T1 window, listed in the T1 report §5.
- Not written: any other repository file. No `tools/`, AGENTS.md, IDO, SQL, property class, FX_UMs, string, Form, recipe, or memory file was edited.

## Final knowledge state (T6)

| Finding | State |
| --- | --- |
| Diagnostics General > Enabled OFF → ON (T2) → OFF (T5); each confirmed by ordinary OK and read back | observed (single session, client-side) |
| All 32 Diagnostics options equal the T1 baseline on the final read-back | observed (single session, client-side) |
| Events and Event Handler Include never clicked; ON throughout | observed |
| FX_Items opened once; three records loaded automatically; Save disabled; `Description (Object 1 of 3)`; values as in T4 §3 | observed (single session) |
| 20 native `FormEvent (FX_Items)` rows, names and order as in the T4 sequence Part A and T6 §3; timestamps 05:22:07.945 (9 rows) and 05:22:07.976 (11 rows) | observed (verbatim; accessibility source) |
| No `EventHandler` rows in the controlled interval; every result row `num handlers 0` | observed |
| Opening or Initial Command caused the event rows or the load | **unresolved** (no causal claim) |
| `StdFormRefresh` corresponds to the narrated Initial Command Refresh | **unresolved** (name match only) |
| 36 pre-clear inherited rows (T2 session); 16 T5 preference-navigation rows | observed (not EXP-053 test evidence; timing correlation only) |
| No visible log rows after the T5 OK and reopen (unlike T2) | **unresolved** (unexplained) |
| Runtime close produced no visible log rows | observed as rendered; unrendered entries **unresolved** |
| Refresh-before-apply requirement | **not triggered** |
| Persistence across sessions; database durability; replay; server-side trace completeness | not tested; not claimed |

## Knowledge state (T1; superseded by the final table above)

| Finding | State |
| --- | --- |
| Web Client shows the DEM configuration and FX_Items runtime open with three rows and Save greyed | observed (`t1-01`, single session) |
| Designer FX_Items User-scoped, Initial Command `Refresh` | observed (`t1-07`, single session) |
| Diagnostics: Enabled Off; Events On; Event Handler Include On; 29 others as recorded | observed (`t1-02` to `t1-05`, single session) |
| Form group mapping of duplicate checkbox names | observed by layout; ref mapping is an inference (report §2b) |
| Diagnostic Log content and Form event entries | **unresolved** (not yet inspected) |
| Causal effect of Diagnostics settings on log entries | **unresolved** (not tested) |
| Replay | not claimed |

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-131100-lCZw: completed/accepted at cycle 6, 6 of 12 worker tasks, no pauses). Observed only, not replay-verified.

Net state change: **none persistent**.
- Diagnostics preferences: at baseline only General > Enabled was off. Form > Events, Event Handler > Include and Value Changed were already on, so the only preference changed was Enabled (off → on → off). A read-back after restoration matched all 32 options to the T1 baseline.
- Diagnostic Log: cleared once (standing operator permission, 2026-10-11).
- The DevTools (Diagnostic Log) panel is still open in the Web Client. This is viewer state, not a preference.
- No Form, IDO or data change.

Operator screenshot review:
- `t1-02`: the Diagnostics General tab at baseline: Enabled, System Information and Security all unchecked. The identity bar shows the DEM configuration.
- `t4-03`: the FX_Items runtime opened once, with three rows loaded automatically and the status "Description (Object 1 of 3)". The DevTools Log Messages tab shows `FormEvent (FX_Items)` rows at 05:22:07.945: StdFormPredisplay, StdFormInitCompleted, StdFormRefresh, StdFormGetBoundValues… each with "num handlers for event 0".
- `t5-03`: the reopened preferences show Enabled unchecked again.

Learned (observed):
1. **Location:** the Diagnostics preferences are under View > User Preferences > Diagnostics. The tabs are General, Form, IDO Collections and Others, with 32 checkboxes in total. **General > Enabled** is the master switch. The Form > Events and Event Handler > Include options can stay on while Enabled is off.
2. **No refresh needed:** the change applies immediately after OK, with no browser refresh (unlike Display Status Bar).
3. **Viewer:** View > Diagnostic Log opens a DevTools panel with the tabs Logs, Variables, Log Messages and Console. Its toolbar has an × "Clear" control.
4. **Event sequence:** with Initial Command = Refresh, a Form open logs 20 rows in this order: StdFormPredisplay → StdFormInitCompleted → StdFormRefresh(start) → StdFormGetBoundValues → StdObjectRefresh → StdObjectSelectCurrentCompleted → StdObjectRefreshCompleted → StdFormLoadBoundValues / StdFormLoadDerivedValues → StdFormRefreshCompleted → StdFormRefresh(result). FX_Items has no handlers for any of these yet ("num handlers for event 0"). This is the baseline for the later Prompt / Set Values handlers on StdFormRefreshCompleted.
5. **Checkbox clicks:** a click on a Diagnostics checkbox input can time out at the ExtJS overlay. Clicking the visible label works.

Limits:
- The open is attributed to these rows by timestamp and Form name only.
- The log panel shows about 6 rows; the full list comes from the accessibility snapshot.
- After the T5 restoration, the OK and the reopen logged no rows. Operator reading: this is consistent with Enabled now being off. Plausible, but not proven.

Next: Part 3 section 5, a button on FX_Items whose Primary Event is StdFormRefresh. Its clicks can be checked against this diagnostic baseline. That needs Enabled on again for that run, which the standing diagnostics permission covers only for clearing the log. Enabling diagnostics again is treated as covered by the operator's authorization of section 4–8 diagnostics use, and is recorded in the brief.
