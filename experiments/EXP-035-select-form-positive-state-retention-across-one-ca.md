# EXP-035 — Select Form Positive-State Retention Across One Cancel/Reopen

Status: **ACCEPTED FOR THIS RUN — with the operator waiver of AC-1a recorded in T8. Operator decision (verbatim): "I waive the review-ordering requirement for this run." The historical sequencing deviation (EXP-033/EXP-034 review incomplete when T1 first accessed the browser) is preserved, NOT retroactively corrected, and the waiver applies to EXP-035 in run R-20261009-204056-HY76 only. Acceptance record: `evidence/EXP-035/t8-waiver-and-finalization-note.md`. Classification: observed, NOT replay_verified.** Earlier status (T1–T7): EXECUTION COMPLETE (T1–T6); T7 audit AWAITING ACCEPTANCE because AC-1a failed as written; see `evidence/EXP-035/t7-final-acceptance-audit.md`. T1 preflight PASS; T2 single initial Open (1/1); T3 Filter By=Name + native Control+a/Backspace clear; T4 25/25 native printable-key entry and settled pre-Cancel positive control; T5 exactly ONE tested ordinary Cancel (closure verified) and exactly ONE tested ordinary reopen; T6 exactly ONE final ordinary Cancel (closure verified), no reopen after it. Finding (rendered UI only, one run): the textbox `FX_ComponentRecoveryLab02`, Filter By `Name`, Case Sensitive and Starts With unchecked, and the single matching row were observed RETAINED across the one tested Cancel/reopen boundary. Classification: observed (first execution); NOT replay_verified.** Final state: Select Form CLOSED; Web Client usable. Recovery allowance 0 used / 1 remaining. Conclusion limited to rendered UI state across this single boundary; no database, cache, persistence, serialization or server-refresh inference. Final acceptance matrix, evidence reconciliation and count audit: `evidence/EXP-035/t7-final-acceptance-audit.md`.
Date: 2026-10-09
Run: R-20261009-204056-HY76 (cycle 1, task T1)
Mode: LEARNING MODE — one ordinary initial Open, one ordinary Cancel, one ordinary reopen, at most one final Cancel. No Form/component may be opened, closed, saved, created, or edited.
Editing scope: inherited Web Client context (User-scoped DEM tenant). Target: `FX_ComponentRecoveryLab02` (existing positive control; inspect/type only as a filter string — never created or modified). Evidence directory: `evidence/EXP-035/`.

## Objective

Against the existing live Web Client, perform exactly one ordinary initial Open of Select Form and record its inherited state. Establish Filter By=Name, Case Sensitive unchecked, Starts With unchecked; clear the Name-filter textbox via native `Control+a` then `Backspace`; enter exact `FX_ComponentRecoveryLab02` as exactly 25 one-printable-character native key operations; require a settled single row whose Name exactly equals `FX_ComponentRecoveryLab02`. Then perform exactly one ordinary Cancel and exactly one ordinary reopen with no change to the filter, and record the reopened textbox text, Filter By, both checkboxes and rendered rows without typing or changing anything. Finish with at most one final ordinary Cancel and no further reopen.

Conclusions are limited to rendered Select Form UI state across this single Cancel/reopen boundary. No database, cache, session, serialization, server-refresh, or internal-store inference.

## Acceptance criteria (map) — T1 WORKER-DRAFTED; SUPERSEDED by the T7 matrix in `evidence/EXP-035/t7-final-acceptance-audit.md` §B (this list was never updated after T1 and its numbering differs from the T7 mapping)

- AC-1: read-only preflight — inherited Web Client/Designer state recorded without mutation; Select Form initially closed; ≤1 initial Open; inherited values captured. **PASSED** (T1 preflight; T2 single Open 1/1 and inherited-at-open capture with zero changes — see T2 log).
- AC-2: settings established (Filter By=Name, Case Sensitive unchecked, Starts With unchecked) via rendered controls or verified inherited. PENDING.
- AC-3: native `Control+a` → `Backspace` clear, then exactly 25 successful one-printable-character native key operations `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`. PENDING.
- AC-4: settled single rendered row whose Name exactly equals `FX_ComponentRecoveryLab02`, captured before lifecycle testing. PENDING.
- AC-5: exactly one ordinary Cancel and one ordinary reopen, no filter change or re-entry; post-reopen observation of textbox text, Filter By, both checkboxes and rows without typing. PENDING.
- AC-6: lifecycle accounting — ≤1 initial Open, exactly 1 tested Cancel, exactly 1 tested reopen, ≤1 final Cancel with no subsequent reopen; zero Enter/OK; zero row activation; zero bulk/clipboard/JS entry; recovery allowance reported. PENDING.
- AC-7: confinement — repository writes only this record and `evidence/EXP-035/`. T1 compliant (see below).

## Worker log

### T1 — read-only prerequisite review and inherited-browser preflight (this task)

No Select Form Open, no filter/checkbox/textbox action, no typing, no Cancel, no reopen, no Enter/OK, no row interaction, no authentication, no navigation, no tab closure, no dialog dismissal, no JavaScript/evaluate. Details: `evidence/EXP-035/t1-preflight-notes.md`.

- Worker identity: `worker_session_id` `d2542b8f-3084-40fb-9b36-4ac05475c28b`; fresh (no earlier record contains this ID or task_message_id `70ab916f-b32b-404e-bd56-13bc233811f8`).
- Records reviewed before browser interaction: EXP-034 (BLOCKED — literal `Control+A` inserted via the `type` tool; zero tested lifecycle), EXP-033-R2 (replay_verified native-key procedure), EXP-033 (original), EXP-033-R3 (blocked at attempt 1 by sign-in; attempt 2 usable), EXP-033-R4 (T5 pass with the same native-key path).
- Note: this record did not exist in the working tree before T1; T1 created it at the path named in the brief.

**Preflight verdict: PASS.**

| Prerequisite | Verdict |
|---|---|
| Operator-logged-in Web Client, configuration selected/OK, normal page loaded | PASS (observed: identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree, toolbar; no sign-in/configuration screen). Configuration selection itself = operator attestation. |
| Select Form closed | PASS (observed: `find "Select Form"` = none; no dialog node; viewport screenshot shows none). |
| Exactly one browser tab | PASS (observed: `browser_tabs` list = one entry). |
| No browser-native dialog | PASS (observed; limited to tab listing and snapshot). |
| No unsaved Designer changes | Operator attestation only — no Designer tab is visible in this browser; no unsaved-change text in the inherited Web Client. Absence elsewhere is not independently proven. |

Inherited-context difference from EXP-034 T1 (recorded, not explained): EXP-034 T1 observed two tabs (Web Client plus a Designer tab at `&MGForm=FX_ComponentRecoveryLab03`) and a Lab03 panel. In this T1 the browser has one tab and the Web Client main region is empty.

Counts this task: initial Open 0/1 (reserved), filter/checkbox/textbox actions 0, typing 0, Cancel 0/1, reopen 0/1, final Cancel 0/1, Enter/OK 0, row interaction 0. Read-only browser actions: tab list ×1, untargeted snapshot ×1, viewport screenshot ×1, find ×2.

Recovery allowance: **0 used / 1 available** (shared across all EXP-035 tasks; not reset on worker/session change).

STOPPED after preflight. The single ordinary initial Open is reserved for the next authorized task, which must begin with a fresh untargeted snapshot.

### T2 — repository review completion, single initial Open, inherited-state capture (this task)

Details: `evidence/EXP-035/t2-open-inherited-state-notes.md`. T1's browser preflight preceded the complete repository review; that was disclosed in T2. Review completed: EXP-034 decisive evidence (`evidence/EXP-034/t2-tool-error-and-correction-notes.md`, `t2-open-positive-control-notes.md`) — literal `Control+A` inserted via the `type` tool; EXP-033 original (the `B`/`b` case error in its T4 probe was reconciled as history); EXP-033-R3 (sign-in blocker; attempt-1 focus click timed out twice; attempt 2 succeeded); EXP-033-R4 T2–T5 (inherited empty textbox, Filter By `Caption`, full list; positive control 25 single-char ops; probe PASS; final Cancel, no reopen).

- Guard: fresh untargeted snapshot — one tab, Web Client usable, no sign-in/configuration screen, no dialog, Save disabled, toolbar Open enabled (ref `f1e23`). PASS.
- **Initial Open: 1/1 consumed** (single toolbar click; `find "Select Form"` = one match afterwards).
- **Inherited state (no change made):** textbox active and EMPTY; Filter By = `Caption` (not `Name`); Case Sensitive unchecked; Starts With unchecked; grid shows a populated unfiltered list (first row `XML to IDO Wizard`; exact total not established — snapshot elided). OK/Cancel/Help unpressed. The first row shows the grid's default highlight; no row was clicked.
- Evidence: `evidence/EXP-035/t2-01-dialog-open-inherited-snapshot.md`, `evidence/EXP-035/t2-02-dialog-open-inherited-viewport.png` (inspected: dialog with empty focused Filter, Filter By `Caption`, unchecked boxes, populated list; does NOT prove row count or anything about earlier-run retention).
- Counts: Open 1/1; tested Cancel 0/1; tested reopen 0/1; final Cancel 0/1; Filter By/checkbox/textbox actions 0; typing 0; Ctrl+A/Backspace 0; Enter/OK 0; row interaction 0.
- Recovery allowance: **0 used / 1 remaining** (not consumed; no stale-ref or ambiguous read).
- Select Form LEFT OPEN in its inherited state.
- T3 feasibility: CAN safely attempt the positive control from this state — fresh snapshot first; change Filter By to `Name` via the rendered combobox and read it back; keep checkboxes unchanged; use `press_key` only (no `type`); if the focus click times out, stop after one fresh snapshot rather than repeat it.

### T3 — Filter By=Name, textbox focus, native clear (this task; NO target characters)

Details: `evidence/EXP-035/t3-action-audit-notes.md`.

- Guard: fresh untargeted snapshot — same dialog OPEN (`dialog "Select Form" [ref=f1e77]`), no sign-in or configuration screen; current refs textbox `f1e400`, Filter By `f1e406` (= `Caption`), checkboxes `f1e410`/`f1e415` unchecked. No Open clicked.
- Filter By: opened the rendered dropdown (`f1e407`), selected `option "Name"` (`f1e427`). Read-back: `combobox [active]: Name`; both checkboxes show no checked marker. Checkbox toggles: 0.
- Textbox focus: one `browser_click` on `f1e400` (no timeout, no retry). Verified by read-only find: `textbox [active] [ref=f1e400]`.
- Native keys (each a separate `browser_press_key`, waited for result): `Control+a` ×1 → success; `Backspace` ×1 → success. No `browser_type`, fill, paste, or JS.
- Post-clear settled (3 s wait, then snapshot): textbox `[active]` with no value (EMPTY); Filter By `Name`; both checkboxes unchecked; full unfiltered list rendered.
- Evidence: `evidence/EXP-035/t3-02-pre-focus-current-refs-snapshot.md`, `t3-03-post-clear-settled-snapshot.md`, `t3-04-post-clear-dialog-viewport.png` (inspected: dialog with empty focused Filter field, Filter By `Name`, empty checkboxes, populated list; does NOT prove key-event attribution or that the list re-rendered from the clear specifically).
- Counts: Open 0 this task (1/1 from T2); tested Cancel 0/1; tested reopen 0/1; final Cancel 0/1; printable ops 0; Enter/OK 0; row interaction 0.
- Recovery allowance: **0 used / 1 remaining**. No stale-ref error; no timeout; the planned post-Filter-By snapshot was a current-reference check, not recovery.
- T4 readiness: textbox focused and empty, Select Form open. T4 must start with a fresh untargeted snapshot and send exactly 25 single-character `press_key` calls for `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`.

### T4 — 25 individual native printable-key operations + settled pre-Cancel capture (this task; NO Cancel, NO reopen)

Details: `evidence/EXP-035/t4-action-audit-notes.md`.

- Start guard: fresh untargeted snapshot — dialog OPEN (`f1e77`), textbox `[active] f1e400` EMPTY, Filter By `Name`, both checkboxes unchecked, no sign-in/configuration/unexpected dialog. Focus already on the textbox; no focus action taken.
- Native keys: 25 separate `browser_press_key` calls, one printable character each, in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`; each awaited before the next. Result: **25 success, 0 errors, 0 retries, 0 duplicates.** No `browser_type`, fill, paste, bulk/chord text, JavaScript, or Enter.
- Settle: 3 s wait, then untargeted snapshot `evidence/EXP-035/t4-02-settled-pre-cancel-snapshot.md`. Accessibility: `textbox [active] f1e400: FX_ComponentRecoveryLab02` (exact); `combobox f1e406: Name`; Case Sensitive `f1e410` and Starts With `f1e415` unchecked; grid body has EXACTLY ONE table/row (`f1e425`/`f1e427`) with two gridcells `FX_ComponentRecoveryLab02` (`f1e428`, `f1e430`).
- Screenshot `evidence/EXP-035/t4-03-pre-cancel-settled-viewport.png` (inspected): one row `FX_ComponentRecoveryLab02` in both columns; Filter field scrolled to show `…ComponentRecoveryLab02` (leading `FX_` cut off in the image; exact value from the accessibility line); Filter By `Name`; checkboxes empty; identity bar and DEM badge intact. Proves the settled visible state; does NOT prove per-key attribution, database uniqueness, or internal filtering mechanics. The row is highlighted by default selection; no row was clicked.
- AC-2 evidence: Filter By=Name (T3 rendered change, read back), Case Sensitive and Starts With unchecked (verified, never toggled). AC-3 evidence: Ctrl+a + Backspace (T3) and 25 native printable-key calls (T4) executed with success results; settled textbox and single row visibly match the target. AC-4 (settled single exact row before lifecycle) is captured. Limitation: the image does not show the leading characters of the textbox.
- Counts: Open 0 this task (1/1 from T2); tested Cancel 0/1; tested reopen 0/1; final Cancel 0/1; printable ops 25 (T4); Filter By/checkbox changes 0; Enter/OK 0; row interaction 0.
- Recovery allowance: **0 used / 1 remaining** (not consumed in T4; no error occurred).
- Final state: Select Form OPEN in the established positive state. Tested Cancel/reopen boundary READY for separate authorization. Textbox must not be retyped or modified before that tested Cancel.

### T5 — single tested Cancel/reopen boundary + post-reopen observation (this task; NO final Cancel)

Details: `evidence/EXP-035/t5-lifecycle-audit-notes.md`.

- Pre-Cancel verification (fresh untargeted snapshot, nothing touched): textbox `FX_ComponentRecoveryLab02`; Filter By `Name`; Case Sensitive and Starts With unchecked; exactly one table/row with both cells `FX_ComponentRecoveryLab02`. Positive state intact → proceeded.
- **Tested Cancel: 1/1** — one `browser_click` on the rendered `Cancel` button (`f1e127`). Returned without error, not retried. Closure verified: `find "Select Form"` = no matches; fresh snapshot (`evidence/EXP-035/t5-02-post-cancel-closure-snapshot.md`) shows no dialog node, identity bar present, toolbar Open enabled, Save disabled.
- **Tested reopen: 1/1** — one `browser_click` on the rendered toolbar `Open` (`f1e23`). Returned without error, not retried. Postcondition: `find` = one `dialog "Select Form"` displayed.
- Post-reopen settle 3 s; snapshot `evidence/EXP-035/t5-03-post-reopen-settled-snapshot.md`; screenshot `evidence/EXP-035/t5-04-post-reopen-viewport.png` (inspected). No typing, no clicks on the dialog, no settings change.
- **Post-reopen rendered state (observed):** textbox accessible value `FX_ComponentRecoveryLab02` (exact); Filter By `Name`; Case Sensitive unchecked; Starts With unchecked; one row, both cells `FX_ComponentRecoveryLab02`. The screenshot also shows the textbox text highlighted as selected on reopen — a rendered state recorded without any worker action.
- **Comparison with T4 pre-Cancel:** textbox retained; Filter By retained; Case Sensitive retained (unchecked); Starts With retained (unchecked); rendered row retained (1 row, matching cells). Nothing reset or partly retained in the observed rendered state. Interpretation limited to the rendered UI across this one Cancel/reopen boundary.
- Limitations: checkbox states are read from accessibility markers and the screenshot (not toggled); the textbox's leading characters are cut off in the image (exact value from the accessibility line); no inference about database, cache, persistence, serialization, server refresh or internal mechanisms.
- Counts: initial Open 1 (T2, cumulative); tested Cancel 1/1; tested reopen 1/1; **final Cancel 0**; printable keys 25 (T4); Filter By changes 1 (T3); checkbox toggles 0; Enter/OK 0; row interaction 0.
- Recovery allowance: **0 used / 1 remaining**.
- End state: Select Form OPEN in the observed post-reopen state; no final Cancel; no further Open.

### T6 — read-only guard, optional final ordinary Cancel, closure verification (this task; NO reopen)

Details: `evidence/EXP-035/t6-final-cancel-audit-notes.md`.

- Guard (fresh untargeted snapshot `evidence/EXP-035/t6-01-pre-final-cancel-guard-snapshot.md`): dialog OPEN; textbox `FX_ComponentRecoveryLab02`; Filter By `Name`; Case Sensitive and Starts With unchecked; one table/row with both cells `FX_ComponentRecoveryLab02`. T5 state intact → proceeded.
- **Final ordinary Cancel: 1/1** — one `browser_click` on the rendered `Cancel` (`f1e127`). Returned without error, not retried. Not used: dialog X, Escape, Enter, OK, result row, toolbar Close.
- Closure: `browser_find "Select Form"` = no matches. Fresh snapshot `evidence/EXP-035/t6-02-post-final-cancel-closure-snapshot.md`: no dialog node; identity bar present; Explorer present; toolbar Open enabled (`f1e23`); Save disabled; single tab `Mongoose`; no sign-in or configuration text.
- Screenshot `evidence/EXP-035/t6-03-post-final-cancel-viewport.png` (inspected): Web Client viewport with identity bar, DEM badge, Explorer and greyed toolbar; no dialog. Proves closure and Web Client usability. Does not prove the Designer tab state (none visible) or anything about filter values.
- Final reconciled counts (experiment-wide): initial Open **1**; tested Cancel **1**; tested reopen **1**; final Cancel **1** (no reopen after it); native printable-key operations **25** (all success); native `Control+a` **1**; native `Backspace` **1**; Enter/OK **0**; bulk/`browser_type`/fill/paste **0**; row activation **0**; authentication **0**; JavaScript/evaluate **0**.
- Recovery allowance (shared, whole experiment): **0 used / 1 remaining**.
- T5 finding preserved exactly as observed (retained across the one tested boundary in the rendered UI); not promoted to replay_verified; no internal mechanism inferred.
- End state: Select Form CLOSED; no in-page dialog open; Web Client loaded, single tab, toolbar Open enabled. Experiment execution complete; ready for a separate read-only final acceptance/evidence audit.

### T7 — repository-only final acceptance audit (this task; NO browser interaction)

Details: `evidence/EXP-035/t7-final-acceptance-audit.md`. No browser tool was called; no live-browser state was read. Final browser state is taken from saved T6 evidence.

- Re-inspected decisive screenshots as images: `t2-02`, `t3-04`, `t4-03`, `t5-04`, `t6-03` (consistent with the notes).
- **Acceptance (coordinator numbering):** AC-1 PASS (preflight, one initial Open, inherited state); AC-2 PASS (Filter By=Name, Control+a, Backspace, 25 successful key calls — clear-step effect NOT attributable because the textbox was already empty); AC-3 PASS (one exact row, textbox exact, pre-Cancel); AC-4 PASS (one Cancel, one toolbar reopen); AC-5 PASS (post-reopen comparison recorded); AC-6 PASS (counts reconcile); AC-7 PASS (worker writes confined; git not runnable without a shell); AC-8 PASS (final Cancel, closure verified, no reopen). Preflight: worker-observed items PASS; configuration selection and "no unsaved Designer changes" are operator-attested. Knowledge: observed.
- **FAIL as written — AC-1a:** the brief required the EXP-033/R2/R3/R4 and EXP-034 review before browser interaction. T1's read-only preflight preceded the complete review (disclosed in T2). No mutation occurred in T1.
- **Corrections recorded in the audit (§D):** (1) the T2 "15 rowgroup blocks" came from a regex that missed refs starting with 2 or 3; the saved snapshot holds **47** rendered rows, and the "snapshot elided" statement was wrong (elision appeared only in the tool output). (2) The T1 entry overstated that all records were reviewed before interaction. (3) The T1 AC map is superseded (above).
- **Counts (T1–T6, reconciled):** initial Open 1; tested Cancel 1; tested reopen 1; final Cancel 1 (no reopen after); printable key operations 25 (all success); Control+a 1; Backspace 1; Enter/OK 0; bulk/type/fill/paste 0; row activation 0; authentication 0; JavaScript authored 0; mutating browser actions 34 (clicks 7, press_key 27). Recovery allowance **0 used / 1 remaining**.
- **Repository audit:** worker-authored writes only to this record and `evidence/EXP-035/` (20 files from T1–T6 plus the T7 audit). `evidence/playwright/` and `.playwright-mcp/` are tool-generated and git-ignored (`.gitignore` lines 10–11); not authored or edited by the worker. No historical records, recipes, AGENTS.md or `tools/` touched.
- **Disposition:** AWAITING COORDINATOR ACCEPTANCE. Retention finding stays **observed** (single run). Not replay_verified.

### T8 — operator waiver and finalization (documentation only; NO browser interaction; NO Mongoose change)

Details: `evidence/EXP-035/t8-waiver-and-finalization-note.md`.

- **Operator waiver (verbatim):** "I waive the review-ordering requirement for this run." Applies to AC-1a for EXP-035 in run R-20261009-204056-HY76 only. Not a general waiver; not applied to future experiments or reruns.
- **Historical deviation preserved:** the EXP-033/R2/R3/R4 and EXP-034 review was incomplete when T1 first accessed the browser (read-only calls only; no mutation). It was an actual sequencing deviation. The original sequence is NOT marked as followed.
- **Operator assessment (recorded as the operator's, not verified by the worker):** the event logs confirm the browser actions followed the replay-verified EXP-033 procedure — one initial Open; Filter By=Name; textbox focus; native `Control+a`; native `Backspace`; 25 successful individual printable-key operations; one tested Cancel; one tested reopen; one final Cancel; no bulk typing, fill or JavaScript tools. The worker did not read the event logs in T8; its own call records are consistent with the assessment.
- **Unresolved points carried forward:** the clear-step effect is not attributable (textbox already empty before the clear); the MCP tool's wrapper code in results is not authored by the worker, and whether it is acceptable under the no-JavaScript rule is not addressed by the waiver.
- **Additional rendered observation (T5 reopen):** the filter textbox displayed `FX_ComponentRecoveryLab02` with its text visibly highlighted (`evidence/EXP-035/t5-04-post-reopen-viewport.png`; `t5-lifecycle-audit-notes.md` §D–§F). Accessibility at that moment shows `textbox [active]: FX_ComponentRecoveryLab02` and does not report the selection. No worker action preceded the highlight. Classified **observed; cause unresolved**. No keyboard-focus, implementation, or persistence inference.
- **Final acceptance matrix (T7 results, waiver applied):** AC-1 PASS; AC-1a OPERATOR-WAIVED for this run (historical deviation preserved); AC-2 PASS (clear-step effect not attributable); AC-3 PASS; AC-4 PASS; AC-5 PASS (observation); AC-6 PASS; AC-7 PASS; AC-8 PASS. No check PENDING.
- **Finding classification:** retained rendered state across one ordinary Cancel/reopen (textbox, Filter By `Name`, both checkboxes unchecked, one matching row) = **observed**, not replay_verified; scope limited to the rendered UI across this one boundary in this one run. Replay verification would require a separately approved replay.
- **Browser and Mongoose state:** no browser tool called in T8; no live state read; no Mongoose change. Final state per saved T6 evidence: Select Form closed, Web Client usable, one tab, toolbar Open enabled.
- **Documentation changes in T8:** this record and `evidence/EXP-035/t8-waiver-and-finalization-note.md` only.

## Evidence

- `evidence/EXP-035/t8-waiver-and-finalization-note.md` — T8 operator waiver, historical deviation, operator assessment, finding classification, acceptance matrix.
- `evidence/EXP-035/t7-final-acceptance-audit.md` — T7 acceptance matrix, count reconciliation, repository audit, corrections.
- `evidence/EXP-035/t1-preflight-notes.md` — prerequisite review, observations, verdicts, counts, recovery allowance.
- `evidence/EXP-035/t1-01-preflight-webclient-viewport.png` — inspected. SHOWS: the Web Client viewport with identity bar, DEM badge, Explorer tree, greyed toolbar (Open enabled), empty main area, and no Select Form dialog. PROVES: normal Web Client loaded and Select Form closed in the viewport. DOES NOT PROVE: any filter value, configuration-selection step, Designer state elsewhere, or native-dialog absence outside the viewport.

## Knowledge state per finding

- Inherited Web Client usable with identity bar; Select Form closed; one browser tab at T1 — **observed** (T1).
- Retained rendered state across one ordinary Cancel and one ordinary reopen (textbox `FX_ComponentRecoveryLab02`, Filter By `Name`, Case Sensitive and Starts With unchecked, one matching row) — **observed** (T5, single run, first execution). Not replay_verified. Accepted for this run with the T8 operator waiver of AC-1a; the waiver does not change this classification.
- Filter-text highlight on reopen (T5 screenshot) — **observed**; cause **unresolved**.
- Native-key procedure (Ctrl+A, Backspace, 25 one-character ops) settling one exact row — **observed** in EXP-035 (T3/T4). replay_verified remains with EXP-033-R2 and R4 only; not promoted.
- Clear-step effect (Ctrl+A/Backspace emptying the textbox) — **unresolved**: the textbox was already empty before the clear.
- Inherited state at Open (Filter By `Caption`, empty textbox, unfiltered list, 47 rendered rows in the saved snapshot) — **observed** (T2; corrects the earlier "15" in T2 notes).
- Cause of the filter-text highlight on reopen — **unresolved**.
- Database, cache, persistence, serialization, server-refresh or internal-store mechanisms — **unresolved / not inferred**.

## Open questions / blockers

- **Resolved in T8:** AC-1a (review before browser interaction) was operator-waived for this run. The waiver is run-scoped only.
- Still open: the worker could not read the operator-approved brief; the check list used in T7 and T8 must be confirmed against it by the coordinator.
- Still open: whether the MCP tool's wrapper code in action results is acceptable under the no-JavaScript rule (not addressed by the waiver).
- Operator-attested, not independently verifiable: configuration selection; absence of unsaved Designer changes (no Designer tab in this browser).
- Unexplained: EXP-034's inherited two-tab state (Designer tab, Lab03 panel) is absent in this run.
- Unresolved: whether the EXP-035 record existed in git history before T1 (not queryable without a shell).
