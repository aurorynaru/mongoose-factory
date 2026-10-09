# EXP-033-R3 — Clean Replay: Select Form Native Keyboard Filter Refresh

Status: **T5 FINAL AUDIT COMPLETE (2026-10-09). Final ordinary Cancel 1/1 dismissed Select Form on first attempt; no reopen. Experiment outcome: NOT ACCEPTED under a strict reading of AC-1 (see T5 table); classification = observed (procedure NOT promoted to replay_verified). Positive control and probe results observed in this run (see T3/T4). Final evidence: `evidence/EXP-033-R3/t5-*`.** Prior T4 status (retained): PROBE EXECUTED (observed). Native Ctrl+A + Backspace clear, then exactly 28 one-printable-character native key operations for `FX_SelectFormKeyboardProbe01` (lowercase `b` at key 17, confirmed by case-sensitive regex). Settled rendered grid: ZERO visible case-insensitive Name matches (grid body has no row cells; `find "gridcell"` = none). Conclusion limited to rendered UI state. Select Form left OPEN; no Cancel, no reopen. Final audit (AC-8) pending in a later task.** Prior: T3 attempt 2 POSITIVE CONTROL PASSED (observed). Native Ctrl+A + Backspace clear and exactly 25 one-printable-character key operations for `FX_ComponentRecoveryLab02` sent; settled grid shows ONE visible row with Caption and Name both exactly `FX_ComponentRecoveryLab02`. Dialog left OPEN. Probe NOT started (awaiting coordinator direction). Prior attempt-1 status (historical, retained): T3 BLOCKED (2026-10-09) before any clear or key operation: the Name-filter textbox could not be focused on its current reference (click timed out on visible/enabled/stable check, twice, after one fresh untargeted snapshot). 0 of 25 positive-control keys sent; probe NOT started; Select Form left OPEN; no Cancel/reopen. See T3 section.** Prior: T2 COMPLETE (2026-10-09): Select Form OPEN (single initial ordinary Open consumed, 1/1), baseline recorded, Filter By=Name, Case Sensitive and Starts With unchecked, textbox focused with current ref and text NOT changed. Positive-control typing NOT started; dialog left OPEN.** Prior: T1 PREFLIGHT COMPLETE — attempt 2 (2026-10-09); replay NOT started at that time. Attempt 1 was BLOCKED (inherited Web Client on the Infor Sign In / tenant-selection screen). After attempt 1 the operator selected the configuration and clicked OK (operator precondition action, not a worker action). Attempt 2 finds the Web Client usable (identity bar and Explorer rendered, no sign-in prompt) and **Select Form CLOSED** (`find "Select Form"` = no matches). No Open, no filter/text/checkbox action, no Enter/OK, no row interaction, no Cancel, no reopen was performed. The replay is ready to resume at the single permitted initial ordinary Open in a later task. Classification: none promoted (replay_verified is NOT claimed).
Date: 2026-10-09
Run: `worker-task-34518319-8310-4334-9ef6-5aaa98e1d0c4` (harness run_id; task `9df12bc5-fa57-4422-a583-4c2688ad0052`), experiment EXP-033-R3, cycle 1, task T1.
Mode: LEARNING MODE — independent replay of EXP-033 against the existing live Web Client with ONE Select Form dialog and NO tested Cancel/reopen cycle. No Form/component may be opened, closed, saved, created, or edited.
Editing scope: inherited Web Client context (User-scoped DEM tenant). Targets: `FX_ComponentRecoveryLab02` (existing positive control; inspect only), `FX_SelectFormKeyboardProbe01` (filter probe STRING ONLY — must never be created). Evidence directory: `evidence/EXP-033-R3/`.
Experiment-wide ambiguity recovery (shared across all tasks, not reset by worker/session change): ONE fresh untargeted snapshot + ONE corrected visible inspection. Used so far: fresh-snapshot 0/1, corrected-inspection 0/1 (remaining 1 + 1).

## Objective

Independently replay EXP-033: record inherited dialog state; establish Filter By=Name with Case Sensitive unchecked and Starts With unchecked; clear the Name-filter textbox via native Ctrl+A + Backspace; enter `FX_ComponentRecoveryLab02` as exactly 25 one-printable-character native key operations (`F X _ C o m p o n e n t R e c o v e r y L a b 0 2`); require the settled rendered grid to visibly contain the exact known-positive Name row before proceeding; then clear via the same native path and enter `FX_SelectFormKeyboardProbe01` as exactly 28 one-printable-character native key operations (`F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`, lowercase `b` after `Key`); require the settled rendered grid to show zero visible case-insensitive Name matches. Conclusions limited to rendered UI state only — no database absence/uniqueness/serialization/server-refresh-mechanism inference. At most one ordinary initial Open solely to enter the replay (only if Select Form is closed and the Web Client is already usable); at most one final Cancel solely to dismiss; no reopen after either; no Enter/OK; no row activation.

## Worker/session identity (harness-provided) — recorded BEFORE browser interaction

- Harness header identifiers for this task: `message_id=9df12bc5-fa57-4422-a583-4c2688ad0052`, `task=9df12bc5-fa57-4422-a583-4c2688ad0052`, `run_id=worker-task-34518319-8310-4334-9ef6-5aaa98e1d0c4`, `experiment_id=EXP-033-R3`, `cycle_id=1`.
- Caveat: the harness header does not label a field explicitly as a "session UUID". The UUID used as this worker's identifier is the `message_id`/`task` value `9df12bc5-fa57-4422-a583-4c2688ad0052`. This is the identifier recorded here; the ambiguity is noted rather than resolved.
- **CORRECTION (added in attempt 2; attempt-1 text above is retained unchanged):** the caveat above was wrong. The attempt-1 task header DID carry an explicit `worker_session_id: 60cc08ec-01c4-41cc-9294-26f32bee888e (this is your worker session UUID for identity/freshness checks)`. `9df12bc5-…` was the attempt-1 `task_message_id`/`message_id`, not the worker session. The correct worker session UUID for this worker is `60cc08ec-01c4-41cc-9294-26f32bee888e`; see the attempt-2 section below.
- **Operator correction:** the attempt-1 identity ambiguity was a harness gap, not a worker oversight. The attempt-1 task header did NOT contain the `worker_session_id` label; that label was added by a harness fix (commit 6e3c319) after attempt 1 ran. The statement in the correction note above that the attempt-1 header carried the label is not supported and is superseded by this line.
- Comparison performed by repository search (`Grep` over the whole repo, including `evidence/` and `experiments/`) for `9df12bc5`, `34518319`, and `worker-task-`: **zero prior matches**, so neither the UUID nor the run id appears in any earlier worker record.
- Earlier worker identities recorded in the repo (both are OpenCode-format `ses_…` IDs, not UUIDs):
  - EXP-033 worker: `ses_ee9768333ffeV8zFkrUtEv19U6` (run R-20261007-212336-By3J) — **DISTINCT** from this worker's UUID.
  - Sibling replay EXP-033-R2 worker: `ses_ee9545a81ffevGqiS17Iix5jM8` (run R-20261007-220054-xlTM) — **DISTINCT** from this worker's UUID.
- Freshness: no earlier Claude worker UUID is recorded in the repo, so reuse cannot be checked against a prior Claude UUID. Freshness rests on the header's new task/message identifier, which matches no prior record. Distinctness from the two named IDs is established by string comparison.
- A fresh worker does NOT establish a new browser/Web Client/Mongoose session and does NOT reset any ambiguity-recovery allowance. The browser context below is INHERITED, not new.

## EXP-033 facts reviewed (repository review BEFORE browser interaction)

Read: `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md` (T1–T7 log, AC map, knowledge states) and `experiments/EXP-033-R2-clean-replay-select-form-native-keyboard-filter-re.md` (sibling replay, its T1–T5 log and identity record). `evidence/EXP-033/` file list reviewed; per-task notes (`t2-positive-control-notes.md`, `t4-probe-notes.md`, `t6-corrected-probe-notes.md`, `t7-final-audit-notes.md`) were NOT opened in this T1 — facts below are taken from the two experiment records, which summarize them.

1. **Reconciled 25-character positive-control sequence.** `FX_ComponentRecoveryLab02` = 25 printable characters entered as exactly 25 successful one-printable-character native key operations, in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (verified by character count). Total key operations including Ctrl+A and Backspace = 27. EXP-033's original draft said "27 printable" — a documentation error reconciled in its T3. One empty-key call errored (`Unknown key: ''`) and executed no keystroke. Settled grid: exactly ONE row, Name exactly `FX_ComponentRecoveryLab02`.
2. **T4 wrong-literal correction history.** EXP-033 T4 entered `FX_SelectFormKeyBoardProbe01` (capital B in `Key`): its settled textbox and both screenshots show the capital-B form. T5 reconciled it as a REAL case mismatch (not documentary); T4's zero-row result applies only to the mis-cased string. **Documentation inconsistency noted:** EXP-033 records the capital-B key as "op 18" in T4/T5 but "op 17" in T6. Counting the 28-character probe string, `b` in `Key` is character 17 (`F1 X2 _3 S4 e5 l6 e7 c8 t9 F10 o11 r12 m13 K14 e15 y16 b17 …`). The op-17 position is correct; the op-18 label is a transcription error in the prior record and does not change this task.
3. **Exact corrected 28-character probe sequence.** `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`, with lowercase `b` after `Key` (character 17) and lowercase `b` in `Probe` (character 25). Settled exact literal from EXP-033 T6: textbox `FX_SelectFormKeyboardProbe01`, Filter By=Name, both checkboxes unchecked, grid body with NO row children (zero visible rows), targeted find = one match page-wide (the filter value itself).
4. **EXP-033 recovery-budget accounting.** Shared allowance = one fresh untargeted snapshot + one corrected visible inspection across the whole EXP-033 run; EXP-033 recorded 0/1 consumed through T7 (all inspections planned). The sibling EXP-033-R2 recorded its own corrected-inspection component 1/1 consumed in its T1 and fresh-snapshot 0/1. **R3 has its own shared allowance: 0/1 + 0/1 used at the start of this task;** no sibling/EXP-033 consumption carries over or is counted here.
5. **EXP-033 final dismissed-dialog state (T7).** One ordinary Cancel (rendered button ref f3e423) dismissed Select Form on first attempt; `find "Select Form"` = no matches page-wide; Web Client scope preserved (identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, Explorer tree, selected panel `FX_ComponentRecoveryLab03`); Designer tab 1 URL `&MGForm=FX_ComponentRecoveryLab03`, untouched; zero SaveChanges/AddForm/Delete/Unload requests run-wide.
6. **EXP-033-R2 final state (sibling replay, T5).** Same dismissal pattern (one Cancel, no reopen) with the same inherited Web Client and Designer tab. R2's record classified its replay as replay_verified for its own tested workflow; that is a sibling claim and is NOT used as evidence for R3.

## Session/state precondition note

Per the EXP-033-R2 record, the most recent recorded Select Form state was dismissed (closed) by R2's T5 Cancel. This was not assumed; it was read from the live browser in T1.

## T1 browser preflight — result (read-only)

Details in `evidence/EXP-033-R3/t1-preflight-notes.md`.

- `browser_tabs list`: ONE tab (`Mongoose`, the Web Client portal URL). The R2 record's second (Designer) tab is NOT present.
- Fresh untargeted snapshot (`evidence/EXP-033-R3/t1-fresh-snapshot-untargeted.md`): the Mongoose iframe contains only a **"Sign In" dialog** with a tenant combobox (`G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) and an OK button. No Explorer, toolbar, Form, Designer, or Select Form content is rendered.
- `browser_find "Select Form"`: no matches.
- Screenshot `evidence/EXP-033-R3/t1-01-webclient-state-signin-dialog.png` (inspected): shows the Sign In / tenant-selection screen only. It does not show any Form, Designer, or Select Form state.
- Not done, by design: no OK, no credential entry, no reload, no navigation, no Open, no Cancel, no filter/checkbox/text action, no Enter, no row interaction, no JavaScript.

## Blocker

**The inherited Web Client requires sign-in/session establishment.** Per the T1 brief this is a stop blocker. Replay verification is NOT promoted. Inherited Select Form filter text/settings/rows were NOT recorded (no Select Form visible). Inherited Designer/Forms state is NOT verifiable in this session.

## Recovery allowance (EXP-033-R3 shared)

- Fresh-snapshot: 0/1 used (remaining 1). Corrected-inspection: 0/1 used (remaining 1). No stale-ref or ambiguous read occurred; the sign-in state was read clearly on the first fresh snapshot.

## Acceptance criteria status

| AC | Status | Basis |
|---|---|---|
| AC-1 fresh-worker identity + inherited-context preflight | **Attempt 2: PASS** (see attempt-2 section). Attempt 1 was PARTIAL/BLOCKED on usable-context and is retained below. | Identity: UUID `9df12bc5-…` distinct from EXP-033 `ses_ee9768333ffeV8zFkrUtEv19U6` and sibling R2 `ses_ee9545a81ffevGqiS17Iix5jM8` by string comparison; no prior record of the UUID or run id; caveat that the header does not label a "session UUID" explicitly. Context: the inherited Web Client is NOT usable without sign-in (Sign In dialog); Select Form not visible; inherited Form state not recorded. Attempt 1: the brief's "usable without session establishment" precondition was NOT met. Attempt 2: met after the operator's configuration selection (not a worker action). |
| AC-2 positive-control action audit | **PASSED (T3 attempt 2, observed)** | Native Ctrl+A → Backspace clear; exactly 25 one-character native key ops in exact order; Filter By Name; checkboxes unchecked; no prohibited input. T2 settings alone do NOT satisfy this. |
| AC-3 settled positive-control row | **PASSED (T3 attempt 2, observed)** | Settled grid: one row, Caption and Name both exactly `FX_ComponentRecoveryLab02` (`t3-01`, inspected + accessibility). |
| AC-4 probe action audit | **PASSED (T4, observed)** | Guard passed; native Ctrl+A → Backspace clear (textbox empty, full list re-rendered); exactly 28 one-printable-character native key ops in exact order `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`; lowercase `b` at key 17 (case-sensitive regex `/FX_SelectFormKeyboardProbe01/` = 1 match; `/FX_SelectFormKeyBoardProbe01/` = 0). Filter By Name; both checkboxes unchecked. |
| AC-5 settled probe result | **PASSED for the rendered UI state only (T4, observed)** | Settled grid body has NO row cells (`find "gridcell"` = none; screenshot `t4-01` shows blank body under Caption | Name header). Zero visible case-insensitive Name matches for the exact literal. No database-absence, uniqueness, serialization, or server-refresh claim. No matching rows; no stale/ambiguous rendering observed. |
| AC-6 full action audit | **PASSED (worker-side; T5 table below)** | Reconciled in T5. Operator sign-in precondition disclosed in T5 §AC-1. |
| AC-7 recovery accounting | **Used/remaining: fresh-snapshot 1/1 (used T3 attempt 1), corrected-inspection 0/1 (1 remaining, unused)** | T4 used no recovery. |
| AC-8 final audit / Cancel | **PASSED (T5; see T5 table)** | Final settled-state capture (`t5-01`), one ordinary Cancel (1/1), no reopen, post-Cancel audit (`t5-02`). |

## Explicit non-claims

- No replay verification is claimed in this task.
- No database absence, uniqueness, serialization, or server refresh/requery mechanism is claimed or inferred.
- `FX_SelectFormKeyboardProbe01` is a filter-probe string only; it must never be created by any EXP-033-R3 task.

## Open questions / blockers

- **RESOLVED for attempt 2 (operator precondition):** attempt 1's Sign In blocker was cleared by the operator selecting the configuration and clicking OK. The worker did not do this. Attempt 2 shows a usable Web Client (see attempt-2 section).
- RESOLVED (attempt 2): the worker session UUID is `60cc08ec-01c4-41cc-9294-26f32bee888e`, as labelled in the task header. The earlier question about `9df12bc5-…` (attempt-1 task message) is answered in the correction note above.
- Inherited Designer tab from R2 is absent in this session (single browser tab); cause not investigated (no navigation permitted).
- Prior-record transcription inconsistency (EXP-033 "op 18" vs "op 17" for the capital/lowercase `b`): noted here; not corrected in EXP-033's record (out of scope to modify it).

## T1 attempt 2 — preflight re-run (operator-directed; same worker session)

Full detail: `evidence/EXP-033-R3/t1-attempt2-preflight-notes.md`. Attempt 1 above is unchanged apart from the identity correction note.

**Operator precondition (not a worker action):** after attempt 1 stopped on the Infor configuration-selection/Sign In screen, the operator selected the configuration and clicked OK. The worker did not select, click OK, authenticate, reload, or navigate.

**Worker identity (attempt 2, before any browser call):**
- Worker session UUID: `60cc08ec-01c4-41cc-9294-26f32bee888e` (task header label). Task message: `1e84a926-d36e-47c8-b42c-42aacfe79268`.
- Repo search for `60cc08ec-01c4` across the repo: zero prior matches.
- DISTINCT from EXP-033 worker `ses_ee9768333ffeV8zFkrUtEv19U6` and sibling R2 worker `ses_ee9545a81ffevGqiS17Iix5jM8`.
- Attempt-1 `9df12bc5-…` is the same session's earlier task message (operator-confirmed), not a separate worker.
- Freshness limit: a Claude worker UUID cannot be checked in the OpenCode store; freshness rests on the header and absence from every earlier record. A fresh worker does not reset the browser or the recovery budget.

**Inherited browser state (read-only):**
- One tab (`Mongoose`, Web Client). No Designer tab (R2 had one; not present in either attempt).
- Fresh untargeted snapshot `evidence/EXP-033-R3/t1-attempt2-fresh-snapshot-untargeted.md` (planned preflight capture, not recovery): Web Client rendered (menu bar, identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, toolbar with `Open` enabled and the rest disabled, Explorer top-level folders collapsed, empty main region). No sign-in dialog.
- `find "Select Form"`: no matches → **Select Form CLOSED**.
- Screenshot `evidence/EXP-033-R3/t1-attempt2-01-webclient-viewport.png` (inspected): Web Client viewport, no dialog. Shows identity bar, DEM badge, collapsed Explorer, greyed toolbar, empty main area. Does NOT show Form or Designer content or any Select Form state.
- A first screenshot attempt timed out (tool timeout while waiting for fonts); the retry succeeded. Not charged to the ambiguity budget.

**Verdicts:** Web Client usable without session establishment: **YES**. Select Form: **CLOSED** (no inherited filter/settings/rows to record; the one permitted initial ordinary Open is UNUSED, 0/1, and remains available for a later task). Inherited Forms/Designer: no Form panel selected, no Designer tab; nothing opened, closed, saved, created, or modified. This differs from R2's inherited Lab03 panel and Designer tab; the cause was not investigated.

**Ambiguity-recovery allowance (shared, EXP-033-R3):** fresh-snapshot **0/1 used, 1 remaining**; corrected-inspection **0/1 used, 1 remaining**. Attempt 2 used no recovery inspection.

**AC-1 (attempt 2): PASS** for preflight — distinct labelled worker UUID; usable Web Client without session establishment by the worker; Select Form initial state recorded (closed); inherited Forms state recorded; Open budget 0 of 1 used. **AC-2 through AC-8: NOT STARTED.** No replay verification is claimed.

**Repository writes in attempt 2:** this record; `evidence/EXP-033-R3/t1-attempt2-fresh-snapshot-untargeted.md`; `evidence/EXP-033-R3/t1-attempt2-01-webclient-viewport.png`; `evidence/EXP-033-R3/t1-attempt2-preflight-notes.md`. The Playwright MCP tool also writes `evidence/playwright/*` logs and snapshot files automatically; these are outside the permitted paths, not deliberately written, and are disclosed here.

**Next permitted action (not performed):** a later task may perform the single initial ordinary toolbar Open (0 of 1 used), then establish Filter By=Name and unchecked checkboxes, and continue to the positive control. Awaiting coordinator go-ahead for that task. (Superseded by the T2 section below: the Open was performed in T2.)

## T2 — dialog baseline + settings establishment (operator-directed; NO typing)

Full detail: `evidence/EXP-033-R3/t2-dialog-baseline-notes.md`.

**Worker identity (T2):** worker session UUID `60cc08ec-01c4-41cc-9294-26f32bee888e`; task message `6807c711-b496-4c82-ab5f-db499fb1548b`. Same worker session as attempt 1 and attempt 2 (operator-confirmed); the attempt-1 identity ambiguity was a harness gap (see Operator correction above).

**Start check (planned current-reference read):** one tab (Mongoose Web Client); identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar `Open` enabled; no sign-in prompt → usable without session establishment. `find "Select Form"` = none → CLOSED, consistent with T1. No contradiction; proceeded.

**Exact actions (in order):**
1. Single click on toolbar `Open` (ref f1e23) — **the one initial ordinary Open, consumed 1/1**. Post-Open `find "Select Form"`: one match.
2. Initial state captured before any setting change (`t2-dialog-open-snapshot.md`, `t2-01-dialog-open-initial-state.png`, inspected).
3. Filter By dropdown trigger click (f1e408) → options listed; click option `Name` (f1e428).
4. Fresh snapshot (`t2-after-filterby-snapshot.md`): combobox reads `Name`.
5. One caret click on the textbox (current ref f1e401) for focus. No key pressed, no text changed. `find "textbox [active]"` = one match (f1e401, value empty).
6. Settled screenshot `t2-02-dialog-settings-established-textbox-focused.png` (inspected).

**Initial inherited dialog state (recorded before any change):** Filter textbox EMPTY; Filter By = **Caption** (not Name); Case Sensitive UNCHECKED; Starts With UNCHECKED; grid = unfiltered list sorted by Caption (↓), first row `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo` highlighted (selected, never activated); rendered rows truncated — target `FX_ComponentRecoveryLab02` NOT among the rows rendered in that snapshot (partial view; does NOT establish absence from the full list).

**Final established settings:** Filter By = **Name**; Case Sensitive = **unchecked**; Starts With = **unchecked**. Verified visually (`t2-02`) and by the fresh snapshot.

**Textbox status:** resolved current ref f1e401 (`#textfield-1143-inputEl`), focused (`find "textbox [active]"` match), value EMPTY; NO Ctrl+A, Backspace, typing, fill, or paste performed in T2.

**Open count:** initial ordinary Open **1 of 1 consumed** (T2). Reopens 0. Cancels 0. Select Form left OPEN.

**Recovery accounting (shared, EXP-033-R3):** fresh-snapshot **0/1 used, 1 remaining**; corrected-inspection **0/1 used, 1 remaining**. All T2 snapshots and checks were planned start-check / current-reference / focus / evidence captures (not recovery); no stale-ref error, no ambiguous read, no retry.

**Inherited Form/Designer state:** untouched; no Form/component opened, closed, saved, created, or modified. Explorer folders collapsed; no Form panel selected; no Designer tab (single tab) — same as T1 attempt 2.

**Actions NOT performed in T2:** Ctrl+A, Backspace, typed or fill/paste keys, Enter, OK, Cancel, reopen, row click, JavaScript/evaluate, Save, Regenerate, unload, preference change, authentication, navigation, reload, Mongoose artifact mutation.

**T2 verdict:** dialog open and baseline recorded; settings established (Name / unchecked / unchecked); textbox focus claimed at T2 (see T3 correction below: focus was NOT re-established at T3). **AC-1 (preflight) remains PASS** (attempt 2). **AC-2 through AC-8 NOT STARTED** (positive-control and probe typing are the next task). No replay verification is claimed.

## T3 — positive control (BLOCKED before any key operation)

Full detail: `evidence/EXP-033-R3/t3-positive-control-notes.md`.

**Worker identity:** `60cc08ec-01c4-41cc-9294-26f32bee888e`; task message `74f80c23-9e48-482d-acf5-a03b860ad663`. Same worker session (operator-confirmed).

**Start check:** Select Form still OPEN (one `find` match). Refs moved from T2 (dialog `f1e77`, textbox `f1e400`, Filter By combobox `f1e406`). Filter By = `Name`; Case Sensitive and Starts With unchecked; textbox empty. `find "textbox [active]"` = NO matches: focus had moved away after T2.

**Focus attempts:**
1. Planned focus click on textbox `f1e400` → TimeoutError ("waiting for element to be visible, enabled and stable"). No keystroke sent.
2. Recovery: one fresh untargeted snapshot (`t3-recovery-fresh-untargeted-snapshot.md`, same refs). Then one corrected focus click on `f1e400` → same TimeoutError. `find "textbox [active]"` = none.
→ Focus NOT established. Stopped.

**Key-operation audit (required):** Ctrl+A sent 0; Backspace sent 0; printable keys for `FX_ComponentRecoveryLab02` 0 of 25 (sequence NOT started). Probe 0 of 28. No fill, paste, bulk typing, JavaScript, Enter, OK, row interaction, Cancel, or reopen.

**Settled result:** none. The grid remains the unfiltered list and the textbox is empty; nothing was typed, so no filtering behavior is observed or claimed. Positive-control row `FX_ComponentRecoveryLab02` NOT established (not evaluated).

**Screenshot (inspected):** `evidence/EXP-033-R3/t3-00-start-check-dialog-state.png` — shows the dialog open, Filter empty, Filter By Name, both checkboxes empty, OK/Cancel/Help unpressed, unfiltered list. Does NOT show textbox focus.

**AC-2 status (corrected):** **NOT PASSED.** T2 settings establishment does NOT satisfy AC-2 (AC-2 requires the clear + exactly 25 native key operations, which did not occur). AC-3 NOT PASSED. AC-4 through AC-8 NOT STARTED.

**Recovery accounting (shared, EXP-033-R3):** fresh-snapshot **1/1 used (0 remaining)** — used in T3 for the focus ambiguity, as the brief permits; corrected-inspection **0/1 used (1 remaining, unused)**. The planned start-check and focus-attempt reads were planned current-reference operations; the recovery snapshot is charged as recovery.

**Inherited Form/Designer state:** unchanged; no Form, component, or Designer tab opened, closed, saved, created, or modified.

**Repository writes in T3:** this record; `evidence/EXP-033-R3/t3-start-check-snapshot.md`, `t3-00-start-check-dialog-state.png`, `t3-recovery-fresh-untargeted-snapshot.md`, `t3-positive-control-notes.md`. Playwright MCP tool also writes `evidence/playwright/*` logs automatically (outside permitted paths; not deliberately written; disclosed).

**T3 verdict: BLOCKED** (focus on the filter textbox could not be established; no keystroke sent; probe not started). Dialog left OPEN; no Cancel, no reopen. _(Attempt-1 text retained unchanged. Its blocked outcome was superseded by attempt 2 below.)_

## T3 attempt 2 — positive control (operator-directed; same worker session)

Full detail: `evidence/EXP-033-R3/t3-attempt2-positive-control-notes.md`. Attempt-1 notes and evidence are unchanged.

**Operator diagnosis (the operator's, not a worker observation):** attempt 1's focus timeouts were caused by the owned Chrome window being covered by other windows; this Chrome instance pauses rendering when occluded, so Playwright's stability check could not complete. The operator brought the window to the front before attempt 2.

**Worker identity:** `60cc08ec-01c4-41cc-9294-26f32bee888e`; task message `8e704f18-bc7a-4e35-b47c-ce47b72435d9`. Same worker session (operator-confirmed).

**Planned current-reference check:** Select Form OPEN (dialog `f1e77`); textbox NOT active on entry; textbox `f1e400`; Filter By combobox `f1e406` = `Name`; Case Sensitive and Starts With checkboxes present with no checked state.

**Planned focus click (once):** click on textbox `f1e400` succeeded; `find "textbox [active]"` = `textbox [active] [ref=f1e400]` inside the dialog. Focus CONFIRMED. No corrected click; no recovery.

**Clear:** native `Control+a`, then native `Backspace`.

**Key-operation audit:** exactly **25** native one-printable-character `browser_press_key` operations, in order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (verified 1:1 against the required list: F, X, _, C, o, m, p, o, n, e, n, t, R, e, c, o, v, e, r, y, L, a, b, 0, 2). Each returned success; none retried, duplicated, or skipped. No fill, paste, bulk typing, clipboard, JavaScript/evaluate/run-code, internal store, Enter, OK, or row interaction. Probe keys sent: 0 of 28.

**Settled result (after 3 s wait; `find` + screenshot):**
- Exactly ONE visible row: grid row `f1e427` with `gridcell "FX_ComponentRecoveryLab02"` in BOTH Caption (`f1e428`) and Name (`f1e430`) cells.
- Textbox `f1e400` value exactly `FX_ComponentRecoveryLab02` (accessibility line). Filter By `Name`. Case Sensitive and Starts With unchecked.
- Screenshot `evidence/EXP-033-R3/t3-01-positive-control-settled-dialog.png` (inspected): shows the dialog open, one row `FX_ComponentRecoveryLab02` in both columns, Filter By Name, checkboxes empty, OK/Cancel/Help unpressed; the filter field text is left-truncated in the crop (exact value from the accessibility line). Does NOT show the textbox's full string visually.
- The grid had been the full unfiltered list before the typing; it is now a single row. This is the rendered filtered result for the typed text.

**AC-2 status (attempt 2): PASSED (observed).** T3 action audit proves: textbox cleared with native Ctrl+A then Backspace; exact `FX_ComponentRecoveryLab02` entered through exactly 25 successful one-printable-character native key operations; Filter By=Name; both checkboxes unchecked; no bulk input, paste, JavaScript, Enter, OK, or result-row interaction. (The T2 settings-establishment alone did NOT satisfy AC-2.)

**AC-3 status: PASSED (observed).** Settled evidence visibly shows a rendered row whose Name exactly equals `FX_ComponentRecoveryLab02`. Probe may now be considered by the coordinator; it has NOT been started.

**Recovery accounting (shared, EXP-033-R3):** fresh-snapshot **1/1 used, 0 remaining** (used in attempt 1 T3; not used in attempt 2). Corrected-inspection **0/1 used, 1 remaining (unused)**. Planned current-reference and focus steps in attempt 2 are planned T3 steps, not recovery.

**Inherited Designer/Form state:** unchanged; no Form, component, or Designer tab opened, closed, saved, created, or modified. One browser tab.

**Actions NOT performed in attempt 2:** probe clear or probe typing (0 of 28); Cancel; reopen; Open; Enter; OK; row click; fill/paste/bulk/JavaScript/internal store; Save; Regenerate; unload; preference change; authentication; navigation; reload; Mongoose artifact mutation.

**Repository writes in attempt 2:** this record; `evidence/EXP-033-R3/t3-attempt2-positive-control-notes.md`; `evidence/EXP-033-R3/t3-01-positive-control-settled-dialog.png`. Playwright MCP writes `evidence/playwright/*` logs automatically (outside permitted paths; not deliberately written; disclosed). Bash is disabled, so `git status` confinement is not verified by command.

**T3 attempt-2 verdict:** positive control PASSED (observed). Dialog left OPEN. Next: the probe (clear via Ctrl+A/Backspace + exactly 28 one-character key operations, lowercase `b` at `Key`) is a separate, coordinator-directed task; it has not been started. _(Superseded by the T4 section below: the probe was executed in T4.)_

## T4 — probe (operator-directed; same worker session; probe only)

Full detail: `evidence/EXP-033-R3/t4-probe-notes.md`.

**Worker identity:** `60cc08ec-01c4-41cc-9294-26f32bee888e`; task message `c300c53c-7f17-4a80-ae40-06c1e46af7eb`. Same worker session (operator-confirmed).

**Guard (planned current-reference, before any clear):** dialog OPEN (`f1e77`); textbox `f1e106` active with `FX_ComponentRecoveryLab02`; positive-control row present (Caption and Name cells `f1e97`/`f1e99` exact); Filter By `Name` (combobox `f1e112`); Case Sensitive and Starts With present with no checked state. **PASS.** Refs moved from T3 (textbox `f1e400` → `f1e106`); the guard used the current refs.

**Focus:** textbox already active at the guard; no focus click performed. Active state confirmed after the clear and after the settle.

**Clear:** native `Control+a`, then native `Backspace`. Post-clear: textbox active and empty; grid re-rendered to the full list. Clear confirmed before typing.

**Probe key-operation audit:** exactly **28** native one-printable-character `browser_press_key` operations, in order `F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1` (verified 1:1 against the required list). Each returned success; none retried, duplicated, or skipped. **Key 17 (after `Key`) = lowercase `b`.** No fill, paste, bulk typing, clipboard, JavaScript/evaluate/run-code, internal store, Enter, OK, row click, Cancel, or reopen.

**Settled result (after 3 s wait):**
- `find "FX_SelectFormKeyboardProbe01"` (case-insensitive): 1 match — the textbox `f1e106` only.
- Case-sensitive regex `/FX_SelectFormKeyboardProbe01/`: 1 match (textbox). `/FX_SelectFormKeyBoardProbe01/` (capital B): 0 matches. Lowercase `b` confirmed.
- `find "gridcell"`: **no matches** on the page. The grid body has no row cells; header Caption | Name only.
- **Visible case-insensitive Name matches for `FX_SelectFormKeyboardProbe01`: 0.**
- Screenshot `evidence/EXP-033-R3/t4-01-probe-settled-dialog.png` (inspected): dialog open over the Web Client; blank grid body under the Caption | Name header; filter text left-truncated showing `…lectFormKeyboardProbe01` (lowercase `b` visible); Filter By `Name`; both checkboxes empty; OK/Cancel/Help unpressed. Shows the zero-row state visually; does NOT show the full string (truncated) or any inventory.

**AC-5 scope:** the zero-row result is a statement about the rendered UI state of this dialog only. It is NOT a database-absence, uniqueness, persistence, serialization, or server-refresh/requery claim.

**Recovery accounting (shared, EXP-033-R3):** fresh-snapshot **1/1 used, 0 remaining** (T3 attempt 1). Corrected-inspection **0/1 used, 1 remaining (unused)**. T4 used no recovery; the guard and settle reads were planned evidence captures. No stale or ambiguous rendering arose.

**Inherited Designer/Form state:** unchanged; no Form, component, or Designer tab opened, closed, saved, created, or modified. One browser tab.

**Actions NOT performed in T4:** Cancel, reopen, Open, OK, Enter, row click/activation, fill, paste, bulk typing, clipboard, JavaScript/evaluate/run-code, internal store, Save, Regenerate, unload, preference change, authentication, navigation, reload, Mongoose artifact mutation, probe-object creation, retype.

**Repository writes in T4:** this record; `evidence/EXP-033-R3/t4-probe-notes.md`; `evidence/EXP-033-R3/t4-01-probe-settled-dialog.png`. Playwright MCP writes `evidence/playwright/*` logs automatically (outside permitted paths; not deliberately written; disclosed). Bash is disabled, so `git status` confinement is not verified by command.

**T4 verdict:** probe executed; settled zero visible case-insensitive Name matches (rendered UI state only). Select Form left OPEN. Final audit (AC-8: last settled capture, one ordinary Cancel, no reopen, full AC-6 audit reconciliation) is pending for a later task. No replay verification is claimed yet. _(Superseded by the T5 section below.)_

## T5 — final audit and dismissal (operator-directed; final)

Full detail: `evidence/EXP-033-R3/t5-final-audit-notes.md`.

**Worker identity:** `60cc08ec-01c4-41cc-9294-26f32bee888e`; task message `31ace738-7be3-4812-95cf-0431f7ccafe1`. Same worker session as T1–T4 (operator-confirmed). Distinct from EXP-033 `ses_ee9768333ffeV8zFkrUtEv19U6` and sibling `ses_ee9545a81ffevGqiS17Iix5jM8`.

**Pre-dismissal capture (planned, read-only, before any lifecycle action):** textbox `f1e99` active, exact `FX_SelectFormKeyboardProbe01` (regex 1 match, textbox only); Filter By `Name`; Case Sensitive and Starts With unchecked; `find "gridcell"` = none (zero visible rows). Screenshot `t5-01-pre-cancel-settled-probe-state.png` (inspected): blank grid body, filter text visibly ending `…lectFormKeyboardProbe01`, settings empty. Confirmed as the final pre-dismissal probe state.

**Final ordinary Cancel:** exactly ONE click on the Cancel button (`f1e120`). Dismissed on first attempt. **Final Cancel count: 1 of 1.**

**Post-Cancel audit (read-only):** `find "Select Form"` = no matches (closed). **No reopen.** One tab (Web Client). Toolbar `Open` present, Save/New/Delete etc. disabled as in T1. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Explorer collapsed, no dialog. Screenshot `t5-02-post-cancel-viewport.png` (inspected).

**Lifecycle counts (whole run):** initial ordinary Open **1** (T2); reopens after it **0**; tested Cancel/reopen cycles between positive control and probe **0**; final ordinary Cancel **1**; subsequent reopen **0**; Enter/OK **0**; result-row activation **0**.

**Action audit (whole run):**
- Clears: positive control Ctrl+A ×1 + Backspace ×1 (T3 attempt 2); probe Ctrl+A ×1 + Backspace ×1 (T4).
- Printable native keys: positive control **25** exact (`F X _ C o m p o n e n t R e c o v e r y L a b 0 2`); probe **28** exact (`F X _ S e l e c t F o r m K e y b o a r d P r o b e 0 1`), **lowercase `b` at operation 17** (case-sensitive regex confirmed: `/FX_SelectFormKeyboardProbe01/` = 1, `/FX_SelectFormKeyBoardProbe01/` = 0).
- Focus clicks (no keystroke): T2 ×1 caret; T3 attempt 1 ×2 timed out (no keystroke; occluded window per operator); T3 attempt 2 ×1 succeeded; T4 none.
- Prohibited actions: bulk input, paste, JavaScript/evaluate/internal stores, Enter, OK, row activation, tested Cancel/reopen cycle, Form/component mutation, Save, Regenerate, unload, preference change, probe-object creation, retype, worker authentication, navigation/reload: **all 0**.

**Recovery accounting (shared, whole run):** fresh untargeted snapshot **1/1 used, 0 remaining** (T3 attempt 1, focus ambiguity). Corrected visible inspection **0/1 used, 1 remaining (unused)**. T5 used no recovery.

**Inherited Web Client / Designer state:** the same at the end as at T1 (one Web Client tab; no Form panel; no Designer tab). No Form, component, or Designer was opened, closed, saved, created, or modified in R3. **Caveat:** the R2 record described a Designer tab at `&MGForm=FX_ComponentRecoveryLab03`; R3's session has no such tab and R3's T1 recorded no Designer baseline, so "untouched" means "not acted on and unchanged from T1", not "matches a Designer baseline".

**Repository audit:** Bash is disabled, so `git status` could not be run; confinement is established from the Glob listing and this worker's writes. R3 writes: this record; `evidence/EXP-033-R3/*` (T1–T5 files). Tool-generated, not deliberate, outside permitted paths: `evidence/playwright/*`. Pre-existing unrelated changes, listed from the session-start git status and NOT modified or re-verified now: `tools/claude-harness/briefs/EXP-033-R3.brief.json`, `tools/claude-harness/briefs/EXP-033-R4.brief.json`, `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. The claude-harness brief JSON was not read (access denied) and not modified. No EXP-033 or EXP-033-R2 file was modified.

## T5 — AC-1 through AC-8 evidence table (final)

| AC | Status | Evidence / basis |
|---|---|---|
| AC-1 fresh-worker identity + inherited-context preflight | **NOT STRICTLY MET (qualified)** | Identity: `60cc08ec-…` is the harness-labelled worker session UUID; not found in any earlier record; distinct from `ses_ee9768333ffeV8zFkrUtEv19U6` (EXP-033) and `ses_ee9545a81ffevGqiS17Iix5jM8` (R2). **Qualification 1:** freshness cannot be checked against an external store for a Claude UUID; the same session ran T1–T5, which is expected for one worker but means "fresh" rests on the harness label. **Qualification 2 (material):** AC-1 requires the inherited Web Client to be usable "without session-establishment action". At attempt 1 it showed the Infor Sign In / tenant dialog. The OPERATOR then selected the configuration and clicked OK before attempt 2. The worker did not do this, but the requirement as written was not met by the inherited state. **Qualification 3:** no Designer baseline exists in R3 (see caveat above). Select Form was initially CLOSED at attempt 2; one ordinary toolbar Open (1/1) was used. |
| AC-2 positive-control action audit | **PASS (observed)** | Ctrl+A → Backspace; exactly 25 one-printable native key ops in order; Filter By Name; both checkboxes unchecked; no prohibited input (T3 attempt 2, `t3-attempt2-positive-control-notes.md`). |
| AC-3 settled positive-control row | **PASS (observed)** | One row, Caption and Name both exactly `FX_ComponentRecoveryLab02` (accessibility + `t3-01`, inspected). |
| AC-4 probe action audit | **PASS (observed)** | Clear as above (only after AC-3); exactly 28 one-printable native key ops in order; lowercase `b` at operation 17 confirmed by case-sensitive regex; Filter By Name; both checkboxes unchecked (T4 notes; `t4-01`). |
| AC-5 settled probe, zero case-insensitive matches | **PASS, rendered UI state only** | Grid body zero row cells (`find "gridcell"` = none); `t4-01` and `t5-01` (inspected) show blank body; the same dialog's positive control showed the filter does return rows, which supports reading the blank body as a filter result. Conclusion limited to rendered UI state: no database-absence, uniqueness, serialization, persistence, or server-refresh/requery claim. No matching row; no stale/ambiguous rendering observed. |
| AC-6 complete action audit | **PASS (worker-side)** | Only the required clears and one-printable key operations for both strings; zero prohibited actions (T5 audit above). Disclosed: the OPERATOR completed the Infor configuration selection and OK before attempt 2 (not a worker action; see AC-1). |
| AC-7 recovery accounting | **PASS (accounted)** | Fresh snapshot 1/1 used (T3 attempt 1), 0 remaining. Corrected inspection 0/1 used, 1 remaining. No ambiguity remains at the end; no recovery used in T4 or T5. Planned checks are recorded as planned. |
| AC-8 final audit / Cancel / confinement / inherited state | **PASS, with caveats** | Final pre-dismissal capture `t5-01`; exactly one ordinary Cancel (1/1); no reopen; post-Cancel `t5-02` shows dialog closed and Web Client intact. Inherited Form/Designer state unchanged from T1 (caveat: no Designer baseline). Repository writes: R3 record + `evidence/EXP-033-R3/*` only, except tool-generated `evidence/playwright/*` (disclosed). `git status` not run (Bash disabled). |

**Overall outcome:** every check passes except that AC-1 is only **qualified**, not cleanly met: the inherited Web Client was not usable without a sign-in/configuration step at attempt 1, and the freshness of the Claude worker identity rests on the harness label. The brief says AC-1 to AC-8 must all pass for "accepted", so this run is **not accepted** under a strict reading. This is a decision for the coordinator: whether the operator-performed configuration selection counts as an acceptable precondition, and whether the harness label is an acceptable freshness basis.

## T5 — final classification

- **Replay verification: NOT promoted.** The brief allows `replay_verified` only if every AC passes under an independently established fresh worker identity. AC-1 is qualified (see above), so this criterion is not met.
- Knowledge state per finding:
  - Native clear + 25 one-printable-character keys settles the Select Form grid to one exact row (`FX_ComponentRecoveryLab02`) in one open dialog, with Filter By Name and both checkboxes unchecked: **observed** (this run, T3 attempt 2). Mechanism not attributed beyond the sequence and the pre-typing full-list state.
  - Native clear + 28 one-character keys with lowercase `b` at operation 17, in the same dialog: settled grid shows zero rows for `FX_SelectFormKeyboardProbe01`; **observed** (this run, T4), rendered UI state only.
  - The procedure as a whole, under the brief's AC set: **observed** (not replay_verified), pending the coordinator's decision on AC-1.
- The zero-row result is NOT a database-absence, uniqueness, persistence, serialization, or server-refresh finding.

## T5 — open questions for the coordinator

1. Does an operator-performed sign-in/configuration selection (before attempt 2) satisfy AC-1's "usable without session-establishment action"? If not, the replay needs a rerun from an inherited state that is already usable.
2. Is the harness-labelled Claude worker UUID an acceptable "independently established fresh" identity, given it cannot be checked against an external store?
3. Designer baseline: the R2 Designer tab (`&MGForm=FX_ComponentRecoveryLab03`) is absent in R3. Is a Designer baseline required for the untouched-Designer check?
4. Repository confinement: `evidence/playwright/*` is written by the Playwright MCP tool outside the permitted paths. Confirm whether that is acceptable, and run `git status` if Bash is re-enabled.

No further browser action is planned. Select Form is closed; the browser is at the Web Client with no dialog.

**Next permitted action (not performed):** a later task should decide how to re-establish focus on the Name-filter textbox (current ref, planned check) with the remaining corrected-inspection allowance (1 unused) before any Ctrl+A/Backspace/key input. Awaiting coordinator direction; no retyping and no lifecycle action taken.

**Repository writes in T2:** this record; `evidence/EXP-033-R3/t2-start-check-snapshot.md`, `t2-dialog-open-snapshot.md`, `t2-after-filterby-snapshot.md`, `t2-01-dialog-open-initial-state.png`, `t2-02-dialog-settings-established-textbox-focused.png`, `t2-dialog-baseline-notes.md`. Playwright MCP tool also writes `evidence/playwright/*` logs automatically (outside the permitted paths; not deliberately written; disclosed).

**Next permitted action (not performed):** the next task clears the Name-filter textbox via native Ctrl+A then Backspace, then enters `FX_ComponentRecoveryLab02` as 25 one-character native key operations. Awaiting coordinator go-ahead.
