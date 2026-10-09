# EXP-035-R2 — Clean Replay: Select Form Positive-State Retention Across One Cancel/Reopen

Status (current, T9): **Lifecycle and capture complete; documentary reconciliation complete (`evidence/EXP-035-R2/t9-documentary-reconciliation.md`). AC-2 PASSED on the combined evidence (coordinator decision: operator T3 extraction accepted as call-level evidence, qualified as not independently opened by the worker). Retention across one Cancel/reopen classified replay_verified for the rendered-UI procedure only (coordinator classification; no persistence claim). Worker assessment: READY FOR COORDINATOR ACCEPTANCE. The worker does not accept the experiment.**

Prior status text (T1–T8, history retained): **IN PROGRESS — T1 mandatory repository-only review COMPLETE (zero browser calls). T2 browser preflight PASSED for all visibly checkable gates; ONE ordinary initial Open performed (1/1); inherited dialog state recorded without change. T3 (interrupted at the agent turn limit; its completion is a self-report only) set Filter By to Name; the T4 reconciliation (below) finds the positive-control state visibly present (Select Form open; textbox exactly `FX_ComponentRecoveryLab02`; Filter By Name; both checkboxes unchecked; one row with Name `FX_ComponentRecoveryLab02`). The 25 key-press calls and the control-key calls are self-reported and not independently logged. T4 performed one planned read-only snapshot and screenshot only. T5 (repository-only, zero browser calls) audited T3 provenance: the call-level record of the T3 key operations is unavailable to the worker (raw transcript under `tools/` is out of bounds), so AC-2's exact-operation requirement and pre-lifecycle counter integrity are UNRESOLVED (not failed). T6 (cycle 9) recorded the operator-supplied T3 call-level extraction as operator-reported (not worker-inspected), then ran a guard check (all guards passed), ONE ordinary Cancel (1/1, closure verified) and ONE ordinary toolbar reopen (1/1). The post-reopen rendered state (textbox `FX_ComponentRecoveryLab02`, Filter By Name, both checkboxes unchecked, one exact row) is recorded as an observation. Final Cancel NOT performed in T6. T7 (cycle 10) then performed the single permitted final ordinary Cancel (1/1) and verified closure: Select Form closed, Web Client available, no browser-native dialog. Counters: Open 1, tested Cancel 1, tested reopen 1, final Cancel 1, additional reopen 0. Interpretation is limited to rendered UI across the single Cancel/reopen boundary. T8 (cycle 11) completed the repository-only final audit (`evidence/EXP-035-R2/t8-final-acceptance-provenance-audit.md`): the five-call T3 difference lies entirely in non-browser calls (browser count 37 = 37); AC-2 call-level remains UNRESOLVED (operator-attested log, not worker-inspected); the retention observation is classified **observed (single run), not replay_verified**. The experiment is NOT declared accepted by the worker; the coordinator decides. No browser action remains authorized.**
Date: 2026-10-09
Run: R-20261009-212412-Gcw7 (experiment EXP-035-R2, cycle 1, task T1)
Mode: LEARNING MODE — one ordinary initial Open, one ordinary Cancel, one ordinary reopen, at most one final ordinary Cancel. No Form or component may be opened, closed, saved, created or edited.
Editing scope: User (inherited Web Client). Target: `FX_ComponentRecoveryLab02` (existing positive control; typed only as a filter string; never created or modified). Evidence directory: `evidence/EXP-035-R2/`.

## Objective

Against the existing live Web Client, starting with Select Form closed: one ordinary initial Open; record the inherited dialog state; establish Filter By=Name with Case Sensitive and Starts With unchecked; clear the Name-filter textbox with native `Control+a` then `Backspace`; enter `FX_ComponentRecoveryLab02` as exactly 25 single-printable-character native key operations; require a settled single row whose Name equals it; then one ordinary Cancel and one ordinary reopen with no change to the filter; record the reopened textbox, Filter By, both checkboxes and rows without typing or changing anything; at most one final ordinary Cancel with no further reopen. Conclusions limited to rendered UI state across this single Cancel/reopen boundary. No database, cache, session, serialization, server-refresh or internal-store inference.

Acceptance is met whether or not the state is retained, provided the sequence and observation are clean.

## Worker identity (T1)

- worker_session_id: `4adf1fa1-a207-43c1-8181-7b7a84722071`; task_message_id: `5d77c268-32f0-45fb-bdd7-2267e2c347e0`.
- Compared by reading against every worker identifier in the records read: EXP-035 `d2542b8f-3084-40fb-9b36-4ac05475c28b`; EXP-033-R3 `60cc08ec-01c4-41cc-9294-26f32bee888e`; EXP-033-R4 `66e4d74e-ce8b-4646-b9f9-01fbca90a469`; EXP-033 `ses_ee9768333ffeV8zFkrUtEv19U6`; EXP-033-R2 `ses_ee9545a81ffevGqiS17Iix5jM8`. No match. This was a comparison against those records, not a repository-wide search.
- A fresh worker does not establish a browser or Mongoose session and does not reset any allowance.

## T1 — mandatory repository-only review (ordering)

The brief requires this review to be completed before any browser tool call. T1 made no browser call (no tab listing, snapshot, find, screenshot, click, key, navigation, console, network or evaluate). The review read the following, in full unless stated:

| Predecessor record | Recorded status | What it contributes to this replay |
|---|---|---|
| `experiments/EXP-033-select-form-native-keyboard-filter-refresh-diagnos.md` | observed / candidate_procedure | Origin of the native clear + one-char-per-key path. Its T4 probe used a capital `B` (recorded as history). |
| `experiments/EXP-033-R2-clean-replay-select-form-native-keyboard-filter-re.md` | replay_verified for its tested environment and UI workflow (as recorded) | Independent replay; the positive-control procedure this brief names. |
| `experiments/EXP-033-R3-clean-replay-select-form-native-keyboard-filter-re.md` | not accepted under strict AC-1 (sign-in screen at attempt 1; configuration selected by the operator before attempt 2) | Positive control and probe observed; focus-click timeouts attributed by the operator to an occluded window. |
| `experiments/EXP-033-R4-clean-replay-select-form-native-keyboard-filter-re.md` | replay_verified for its tested environment and UI workflow (as recorded) | Second replay; a targeted `find` was used after a stale-ref error, which this brief does not permit. |
| `experiments/EXP-034-select-form-positive-filter-retention-across-cance.md` | BLOCKED, closed | The `type` tool inserted literal `Control+A` into the filter textbox. No Cancel or reopen was performed, so it yields no retention result. |
| `experiments/EXP-035-select-form-positive-state-retention-across-one-ca.md` | ACCEPTED for run R-20261009-204056-HY76 under an operator waiver of AC-1a; observed, not replay_verified | The single-run retention observation this replay re-tests. The waiver is limited to that run. |

Decisive evidence read (14 notes and 3 screenshots, listed with what each does and does not establish in `evidence/EXP-035-R2/t1-repository-review-notes.md` §D–§E). Notable findings:

- **Exact 25-key sequence:** the same 25 single-character keys in the same order (`F X _ C o m p o n e n t R e c o v e r y L a b 0 2`, lowercase `b` at position 23) appear in the key tables of EXP-033 T2, EXP-033-R2 T3, EXP-033-R3 attempt 2, EXP-033-R4 T3 and EXP-035 T4. The target has 25 characters. The one errored empty-key call in EXP-033 T2 sent no keystroke.
- **Prohibited path confirmed:** EXP-034 evidence shows the `type` tool with `Control+A` inserts literal text. Only `press_key` may be used for `Control+a` and `Backspace`.
- **Inherited state varies across runs (observed, cause not established):** runs with two tabs (EXP-033 T1, EXP-033-R2 T2, EXP-034 T2) saw retained non-empty filter text; runs with one tab (EXP-033-R3 T2, EXP-033-R4 T2, EXP-035 T2) saw an empty textbox with Filter By `Caption`. This replay must record its inherited state fresh and must not assume either.
- **Clear-step attribution:** in EXP-035 the textbox was already empty before the native clear, so the clear's effect was not observed. If this replay starts with an empty textbox, the same limitation applies and must be recorded.
- **Reopen highlight:** EXP-035 T5 showed the reopened textbox text fully selected with no worker action (cause unresolved). After the tested reopen, do not type, click or press any key.
- **Recovery rule:** after "Ref ... not found", take one fresh untargeted snapshot. A targeted `find` is not a substitute.
- **Focus timeouts:** EXP-033-R3 attempt 1 failed twice at "visible, enabled and stable"; the operator attributed this to an occluded Chrome window. Do not repeat a timed-out focus click without a fresh snapshot.

Remaining uncertainties from the review are in the final section.

## Review prerequisite status

**COMPLETE for T1.** All six predecessor records were read in full. The decisive notes and screenshots listed in `evidence/EXP-035-R2/t1-repository-review-notes.md` were read. Not individually opened, with their content taken from the summarizing records: `evidence/EXP-033/t7-final-audit-notes.md`, `evidence/EXP-033-R2/t4-probe-settled-zero-matches-notes.md`, `evidence/EXP-033-R3/t3-positive-control-notes.md` (attempt 1), `evidence/EXP-033-R3/t5-final-audit-notes.md`, `evidence/EXP-033-R4/t2-dialog-baseline-notes.md`, `evidence/EXP-033-R4/t4-probe-notes.md`, and EXP-035 `t1`, `t3`, `t4`, `t6` notes. These are probe- or lifecycle-only and do not change the procedure for this replay.

## Recovery allowance (EXP-035-R2, shared across all tasks)

Fresh untargeted snapshot: **0 used / 1 remaining**. Corrected visible inspection: **0 used / 1 remaining**. No prior EXP-035-R2 use exists. EXP-034's consumption belongs to EXP-034 and is not carried over. T1 used neither.

## Action log

| Task | Action | Browser calls | Counts |
|---|---|---|---|
| T1 | Repository-only review; writes to this record and `evidence/EXP-035-R2/t1-repository-review-notes.md` | 0 | Open 0/1; Cancel 0/1; reopen 0/1; final Cancel 0/1; key operations 0; typing 0; Enter/OK 0; row interaction 0 |
| T9 | Documentary reconciliation only (`evidence/EXP-035-R2/t9-documentary-reconciliation.md`); coordinator decisions recorded (AC-2 accepted on combined evidence; classification; accounting); no `tools/` read; no browser call | 0 | Open 1/1 (T2); tested Cancel 1/1 (T6); tested reopen 1/1 (T6); final Cancel 1/1 (T7); additional reopen 0; key operations 0; typing 0; Enter/OK 0; row interaction 0; JavaScript 0; recovery allowance unchanged (snapshot 0/1, corrected inspection 0/1) |
| T8 | Repository-only final acceptance and provenance audit (`evidence/EXP-035-R2/t8-final-acceptance-provenance-audit.md`); reads of this record, T1–T7 evidence, EXP-035 predecessor numbering and `.gitignore`; no `tools/` read; no browser call | 0 | Open 1/1 (T2); tested Cancel 1/1 (T6); tested reopen 1/1 (T6); final Cancel 1/1 (T7); additional reopen 0; key operations 0 this task; typing 0; Enter/OK 0; row interaction 0; JavaScript 0; recovery allowance unchanged (snapshot 0/1, corrected inspection 0/1) |
| T7 | Planned pre-Cancel snapshot ×1 (`t7-01`, not recovery); ONE final ordinary Cancel click (`f1e127`, result without error); post-Cancel snapshot ×1 (`t7-02`) and screenshot ×1 (`t7-03`) for closure; no reopen, no typing, no focus, no row/Enter/OK | 2 snapshots + 1 screenshot (planned) + 1 click | Open 1 (T2); tested Cancel 1/1 (T6); tested reopen 1/1 (T6); final Cancel 1/1 (T7); additional reopen 0; key operations 0 this task; typing 0; Enter/OK 0; row interaction 0; JavaScript 0; recovery allowance unchanged (snapshot 0/1, corrected inspection 0/1) |
| T6 | Repository-only operator-T3 provenance notes (`t6-operator-t3-provenance-notes.md`); guard snapshot ×1 + screenshot ×1 (planned); ONE Cancel click (`f1e127`, closure verified); ONE toolbar Open click (`f1e23`, reopen); post-reopen snapshot ×1 + screenshot ×1 (no interaction) | 3 snapshot/screenshot reads planned + 2 clicks | Open 1/1 initial (T2) and tested reopen 1/1; Cancel 1/1 (tested); final Cancel 0/1; key operations 0 this task; typing 0; Enter/OK 0; row interaction 0; JavaScript 0; recovery allowance unchanged (snapshot 0/1, corrected inspection 0/1) |
| T5 | Repository-only provenance audit of interrupted T3 (`evidence/EXP-035-R2/t5-provenance-audit.md`); no `tools/` read; no browser call | 0 | Open 0 (1/1 from T2); Cancel 0/1; reopen 0/1; final Cancel 0/1; key operations 0; typing 0; Enter/OK 0; row interaction 0; JavaScript 0 |
| T4 | Read-only reconciliation of interrupted T3; planned snapshot ×1 and screenshot ×1 (`t4-01`, `t4-02`); reads of records and `evidence/playwright/` artifacts | 1 snapshot + 1 screenshot (planned, not recovery) | Open 0 (1/1 from T2); Cancel 0/1; reopen 0/1; final Cancel 0/1; key operations 0 this task (T3 self-report 25 unverified); typing 0; Enter/OK 0; row interaction 0; JavaScript 0 |
| T3 | Fresh untargeted start snapshot; Filter By trigger click ×1; option Name click ×1; read-back finds ×2; textbox focus click ×1 + verify find ×1; `Control+a` ×1; `Backspace` ×1; `browser_press_key` printable ×25 (all success, in order); 3 s settle; pre-Cancel snapshot ×1 (saved) and screenshot ×1 (saved) | 27 press_key + 3 clicks + 1 wait + 2 snapshots + 3 finds + 1 screenshot | Open 0 this task (1/1 total); Cancel 0/1; reopen 0/1; final Cancel 0/1; Filter By change 1 (Caption → Name); checkbox toggles 0; Enter/OK 0; row interaction 0; type/fill/paste/bulk 0; JavaScript 0 |
| T2 | Browser preflight and inherited-state capture: tabs list ×1; snapshot ×2 (preflight, post-Open); find ×3 (`Select Form` pre-Open, sign-in/configuration regex pre-Open, `Select Form` post-Open); screenshot ×2 | 8 read-only + 1 click (toolbar Open) | Open **1/1**; Cancel 0/1; reopen 0/1; final Cancel 0/1; Filter By/checkbox/textbox changes 0; focus clicks 0; key operations 0; typing 0; Enter/OK 0; row interaction 0 |

### T2 — preflight and inherited state (details: `evidence/EXP-035-R2/t2-open-inherited-state-notes.md`)

**Preflight gates (worker-observed):**
- One browser tab (`Mongoose`): **PASS**.
- Web Client loaded and usable (identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menus, toolbar, Explorer tree): **PASS**.
- No sign-in or configuration screen; no tenant/configuration text: **PASS**.
- Select Form closed before Open (`find` = none): **PASS**.
- No browser-native dialog and no visible unsaved-change indicator (Save disabled): **PASS (limited to the captured viewport)**.
- Operator attestations, NOT independently proven by this inspection: login completed; configuration selected/OK; no unsaved Designer changes elsewhere. No Designer tab is visible, so the last item cannot be verified.

**Inherited dialog state (captured before any change; `t2-02` snapshot and `t2-03` screenshot):**
- Textbox: `[active]`, EMPTY (no value line), focused by inheritance (no focus click performed).
- Filter By: `Caption` (NOT Name).
- Case Sensitive: unchecked. Starts With: unchecked.
- Rows: 43 rows in the dialog grid, full unfiltered list, first row `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo`, default highlight only (no click).

**Row-count correction (recorded, not silent):** EXP-035 `t7` §D and the EXP-035 record give 47 rows for the same inherited state. Counting the dialog grid's own tables gives 43; the 4 extra tables were the Explorer tree. 43 agrees with EXP-033-R4 T2. This correction applies only to this record.

**Verdict:** preflight PASS (with operator attestations recorded as such); ONE initial Open 1/1 consumed; dialog LEFT OPEN in its inherited state. Recovery allowance: fresh untargeted snapshot **0/1**, corrected visible inspection **0/1** — none consumed; no ref error, timeout or ambiguous read occurred.

### T3 — positive-control state (details: `evidence/EXP-035-R2/t3-action-audit-notes.md`)

- Start: fresh untargeted snapshot; dialog `f1e77` open; textbox `f1e400` active and empty; Filter By `Caption`; both checkboxes unchecked.
- Filter By: trigger `f1e407` clicked; option `Name` `f1e427` (found by a current-ref read) clicked; read-back `combobox: Name`. Checkbox toggles: 0.
- Focus: click on `f1e400`; `find "textbox [active]"` confirmed focus inside dialog `f1e77`.
- Clear: `browser_press_key` `Control+a` → success; `Backspace` → success. Clear effect not attributable (textbox already empty).
- Typing: 25 of 25 `browser_press_key` calls, one printable character each, in the order `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (lowercase `b` at position 23). All success; zero errors, retries, duplicates or skips.
- Settled (3 s wait, no page action): snapshot `evidence/EXP-035-R2/t3-02-settled-pre-cancel-snapshot.md` shows textbox `[active] [ref=f1e400]: FX_ComponentRecoveryLab02`, `combobox: Name`, both checkboxes unchecked, and ONE row with both gridcells `FX_ComponentRecoveryLab02`. Screenshot `evidence/EXP-035-R2/t3-03-settled-pre-cancel-dialog-viewport.png` (viewed): one row in both columns, Filter By Name, checkboxes empty; the textbox's leading `FX_` is clipped in the image, so the exact value comes from the accessibility line.
- **Positive-control condition MET** (exactly one row, Name exact), captured before lifecycle testing.
- Recovery allowance: fresh untargeted snapshot **0/1 used, 1 remaining**; corrected visible inspection **0/1 used, 1 remaining**. No ref error, timeout or ambiguous read occurred.
- Compliance limitation: the MCP tool wrote `evidence/playwright/*` snapshot and console logs automatically (outside permitted paths; not authored or cleaned up by the worker).
- End state: Select Form OPEN in the positive-control state. No Cancel, reopen, OK, Enter or row interaction.

## T4 — read-only reconciliation of the interrupted T3 (worker session 69ed601b-bbc3-4abd-8c53-6a6415410f36; task_message_id d699bbed-2bc6-4a36-813a-f490f01baccd)

Details: `evidence/EXP-035-R2/t4-reconciliation-notes.md`.

**Context.** The T3 worker (session 4adf1fa1-…) reached the agent turn limit at 13:34:26Z. This task was a fresh worker session, which does not reset any counter or the recovery allowance. T4 did not replay T3 and did not repeat any mutation.

**Repository reads before any browser call (T4).** This record; `t1-repository-review-notes.md` (first 60 lines); `t2-open-inherited-state-notes.md`; `t2-02-dialog-open-inherited-snapshot.md`; `t3-action-audit-notes.md` (the T3 self-report); `t3-02-settled-pre-cancel-snapshot.md`; `t3-03-settled-pre-cancel-dialog-viewport.png` (viewed). The T2 PNGs were not re-viewed in T4.

**Tool-generated corroboration (read).** The MCP tool wrote `evidence/playwright/` files during the T3 window. They show: Filter By dropdown expanded with option `Name` (13:30:38Z); Filter By `Name` selected with the textbox not active (13:30:41Z); textbox `[active]` and empty with `Name` still selected (13:30:45Z, the focus state); and the settled state with textbox `FX_ComponentRecoveryLab02`, Name, both checkboxes unchecked, one row (13:31:18Z). The saved `t3-02` snapshot matches the 13:31:18Z artifact. No tool artifact logs key presses, and none shows any lifecycle action after 13:31:18Z. The tool does not log every action, so this absence is weak evidence only.

**Current-state inspection (T4; planned, read-only).** One fresh untargeted snapshot (`evidence/EXP-035-R2/t4-01-current-state-snapshot.md`) and one viewport screenshot (`evidence/EXP-035-R2/t4-02-current-state-viewport.png`). Dialog `Select Form` open; textbox `[active]` with `FX_ComponentRecoveryLab02` (accessibility line); `combobox: Name`; both checkboxes unchecked; ONE table, ONE rowgroup, ONE row with two gridcells `FX_ComponentRecoveryLab02`; OK/Cancel/Help unpressed. Screenshot (viewed): identity bar and DEM badge visible; dialog open over the Web Client; Filter By Name; checkboxes empty; one row in Caption and Name; the textbox's leading `FX_` is clipped, so the exact value comes from the accessibility line. The screenshot does not show anything outside the frame. The snapshot ref numbering differs from T3 (for example textbox `f1e400` → `f1e106`); no ref was used for an action.

**Reconciliation of the T3 claims.**

| Claim | Status |
|---|---|
| Filter By Caption → Name | Observed (13:30:38Z → 13:30:41Z artifacts; current state) |
| Case Sensitive and Starts With unchecked, not toggled | Visible state observed; "not toggled" self-reported (0 toggles) |
| Textbox focused before typing | Observed at 13:30:45Z (`[active]`, empty); click itself not separately logged |
| `Control+a` and `Backspace` via `browser_press_key` | Self-reported only (no independent log) |
| 25 printable `browser_press_key` calls, in order, all successful | Self-reported; final textbox text is exactly the target, consistent with 25 characters in order with no extras, but the call count and per-call success are NOT independently verified |
| Exactly one settled row with Name exact before lifecycle | Observed (13:31:18Z artifact, `t3-02`, `t3-03`, current snapshot and screenshot) |
| No Cancel, reopen, Open, OK, Enter or row interaction in T3 | Self-reported; the current UI is consistent with the pre-Cancel state; NOT independently proven (a Cancel followed by a reopen would also show a retained value) |
| Recovery allowance untouched in T3 | Self-reported |

The clear step's effect is not attributable: the textbox was already empty before `Control+a`/`Backspace`.

**Counters (from evidence).**

| Counter | Count |
|---|---|
| Initial Open | 1/1 (T2; no second Open evidenced) |
| Tested Cancel | 0/1 (self-reported; not disproven) |
| Tested reopen | 0/1 (self-reported; not disproven) |
| Final ordinary Cancel | 0/1 |
| Printable key operations | 25 claimed (T3 self-report, not independently verified); 27 `press_key` in total including control keys (self-reported) |
| Filter By changes | 1 (Caption → Name, observed) |
| Checkbox toggles | 0 claimed (end state unchecked) |
| Enter / OK / row interaction / typing / JavaScript / bulk entry | 0 claimed |

**Recovery allowance (shared; not reset by the session change).** Fresh untargeted snapshot **0 used / 1 remaining**; corrected visible inspection **0 used / 1 remaining**. The T4 snapshot and screenshot were planned read-only captures and are not recovery.

**Acceptance mapping (assumption for the coordinator to confirm). SUPERSEDED in T8:** the mapping below was wrong. It conflicts with the predecessor EXP-035 numbering, under which AC-2 is the settings, clear and 25-key check and AC-3 is the settled row (see the T8 section). Original text, kept for provenance: "AC-2 = exact positive-control state before lifecycle ... AC-3 = lifecycle counter integrity and sequence."

**Unresolved.** (1) Independent confirmation of the 25 key calls and their success status. (2) Whether any lifecycle action occurred between 13:31:18Z and the T3 interruption at 13:34:26Z (not disproven; no artifact shows one). (3) Clear-step effect (textbox empty before clear). (4) Checkbox "never toggled" (self-report). (5) Tool artifacts under `evidence/playwright/` are outside the permitted paths (compliance limitation, disclosed by T3 and T4). (6) Cause of inherited-state variation across runs.

**Files written in T4.** `evidence/EXP-035-R2/t4-reconciliation-notes.md` (created); `evidence/EXP-035-R2/t4-01-current-state-snapshot.md` (written by the snapshot call); `evidence/EXP-035-R2/t4-02-current-state-viewport.png` (written by the screenshot call); this record (updated). Tool-generated, not worker-authored: `evidence/playwright/console-2026-10-09T13-36-38-105Z.log`.

**T4 browser actions.** Snapshot ×1 (planned); screenshot ×1 (planned). Clicks 0; key presses 0; typing 0; finds 0; Cancel 0; reopen 0; Open 0; OK/Enter 0; row interaction 0; JavaScript/evaluate 0; navigation 0; authentication 0. Dialog left OPEN (no further action authorized).

## T5 — repository-only provenance audit of the interrupted T3 (worker session 69ed601b-bbc3-4abd-8c53-6a6415410f36; task_message_id 28f89943-a410-4034-90a6-e5f4650499ff)

Details and evidence matrix: `evidence/EXP-035-R2/t5-provenance-audit.md`. Zero browser calls.

**Raw transcript.** Not accessed. The brief asks for `tools/claude-harness/claude-data/runs/R-20261009-212412-Gcw7/`, but the standing worker boundary says `tools/` is intentionally unreadable and must not be read. The brief's "if accessible" wording does not override that boundary. Call-level evidence for `browser_press_key`, its results, retries, and any lifecycle call is therefore unavailable to this worker.

**Evidence matrix (summary).**

| Operation | Independent source | Status |
|---|---|---|
| Filter By trigger, option Name, textbox focus clicks | Tool artifacts `13-30-38`, `13-30-41`, `13-30-45` (state after each) | Corroborated at state level; call-level unavailable |
| `Control+a` and `Backspace` via `browser_press_key` | None (self-report) | Unresolved |
| 25 printable `browser_press_key` calls in order | Self-report table; final text `FX_ComponentRecoveryLab02` at `13-31-18` and in T4 captures | Unresolved at call level; final text exact and consistent |
| No `browser_type`, fill, paste, or chord-as-text | Self-report; no literal `Control+A` residue in the final text | Supported by residue absence; not proven at call level |
| No failed, retried, duplicated, or omitted key call | Self-report only; exact final text | Unresolved at call level |
| No Enter, OK, or row interaction in T3 | Self-report; no artifact after `13-31-18`; dialog still open | Not contradicted; not independently proven |
| No Cancel or reopen in T3 | Self-report; no artifact after `13-31-18` (a click normally writes one, by inference) | Not proven absent; no evidence of occurrence |
| Initial Open count | Artifact `13-28-23` and T2 self-report | 1/1 supported |

**Ordering.** Click-level order is established by artifacts. Control-key order and the position of the 25 key calls within `13:30:45`–`13:31:18` are not established. Full call-level ordering cannot be established.

**Verdicts.** AC-2 exact-operation requirement: **UNRESOLVED** (not failed; not proven). Pre-lifecycle counter integrity: **UNRESOLVED** (Open supported; absence of Cancel and reopen not proven). The T3 self-report stands as a self-report and is not reclassified.

**Counters.** Initial Open 1/1; tested Cancel 0/1 (not proven absent); tested reopen 0/1 (not proven absent); final Cancel 0/1. Recovery allowance: fresh untargeted snapshot 0/1 used; corrected visible inspection 0/1 used; unchanged by T5.

**Next permissible action.** No browser action in T5. The coordinator must decide: (a) supply call-level T3 records through a permitted route; (b) accept T3 on the self-report plus artifacts, with gaps recorded, and separately authorize the tested Cancel/reopen; or (c) treat AC-2's exact-operation requirement as not closed for this run and consider a fresh cycle with per-call logging. Select Form remains OPEN in the positive-control state; the tested lifecycle has not started.

## T6 — operator T3 provenance, guard check, one tested Cancel/reopen observation (worker session 69ed601b-bbc3-4abd-8c53-6a6415410f36; task_message_id a6e920bc-ab4e-43ab-a6a8-cb7869cc1ef3)

Details: `evidence/EXP-035-R2/t6-lifecycle-observation-notes.md` and `evidence/EXP-035-R2/t6-operator-t3-provenance-notes.md`.

**Provenance of the T3 call record (operator-reported).** The operator supplied an extraction of the T3 event transcript (`claude-data/workers/4adf1fa1-…/tasks/9cec1dc2-….events.jsonl`) reporting 44 successful calls, 0 errors, and `browser_press_key` calls 8–34: `Control+a`, `Backspace`, then the 25 printable characters in order. The worker did NOT open that file or anything under `tools/`, and did not reproduce the sequence. This is operator-reported call-level evidence, NOT independently inspected by the worker.

**Reconciliation.** Calls 1–7 (snapshot, Filter By trigger click, find, option click, read-back find, textbox click, focus find) match the T3 self-report ordering exactly, so the 8–34 indexing is consistent with it. The self-report accounts for 39 calls (37 browser, 2 repository reads); the operator reports 44. **Five calls are unaccounted for**; their identity cannot be established without the raw record. The operator's sequence matches the T3 self-report, the final textbox text, and the absence of an error artifact. No contradiction was found.

**Status after reconciliation.** AC-2 exact-operation requirement: operator-attested as met at call level; not independently inspected by the worker. Pre-lifecycle counter integrity: Open 1/1 supported; Cancel and reopen before the settled capture 0/0 operator-attested, with the five-call gap noted.

**Guard check (before lifecycle; planned read-only).** Snapshot `t6-01-guard-state-snapshot.md` and screenshot `t6-02-guard-state-viewport.png`. Select Form OPEN; textbox `FX_ComponentRecoveryLab02` (accessibility); Filter By `Name`; Case Sensitive and Starts With unchecked; ONE table/row with Name `FX_ComponentRecoveryLab02`; normal Web Client available; no browser-native dialog. All guards passed. Noted (not a guard): the textbox and iframe no longer carried `[active]` in this snapshot, and the textbox text was highlighted in the screenshot.

**Lifecycle (executed once each).**
1. Cancel: `browser_click` on `f1e127` (Cancel, from `t6-01`) returned without error. Closure verified from the tool artifact `evidence/playwright/page-2026-10-09T13-48-47-116Z.yml`, which has no `dialog "Select Form"` node.
2. Reopen: `browser_click` on `f1e23` (toolbar Open, from the post-Cancel snapshot) returned without error (tool snapshot `evidence/playwright/page-2026-10-09T13-48-52-205Z.yml`).
Counters: Cancel 1/1; tested reopen 1/1; final Cancel 0/1 (not performed).

**Post-reopen observation (no interaction; `t6-03-post-reopen-snapshot.md`, `t6-04-post-reopen-viewport.png`).**
- Dialog `Select Form` open.
- Textbox `[active]`: `FX_ComponentRecoveryLab02` (exact, accessibility). Focus was not set by the worker; the cause of the active state is not established.
- Filter By: `Name`.
- Case Sensitive: unchecked. Starts With: unchecked.
- Rendered rows: ONE table, ONE row; both gridcells `FX_ComponentRecoveryLab02`.
- Screenshot (viewed): the same state; the field's value is highlighted and visibly begins `FX_ComponentRecoveryLab` (leading characters truncated by width); an "Open" tooltip from the toolbar click is visible (not dialog content).

**Reading (rendered UI only).** The post-reopen rendered state matches the settled pre-Cancel state on every recorded item (textbox value, Filter By, both checkboxes, the single row). This is recorded as an observation, not a pass/fail result. Conclusions are limited to the rendered UI across this one Cancel/reopen boundary. No persistence, cache, server-refresh, session, database or serialization inference is drawn. The post-reopen text highlight is consistent with the EXP-035 T5 observation; its cause remains unresolved.

**Recovery allowance.** Fresh untargeted snapshot 0/1 used; corrected visible inspection 0/1 used. The guard, post-Cancel and post-reopen snapshots were planned captures, not recovery.

**Final state.** Select Form OPEN after the reopen. No final Cancel. No further reopen. No typing, clearing, focusing, selecting, toggling, Enter, OK, or row interaction. No JavaScript.

## T7 — final ordinary Cancel and closure verification (worker session 69ed601b-bbc3-4abd-8c53-6a6415410f36; task_message_id 2db230b2-ae2b-403b-a745-7fa4f1051028)

Details: `evidence/EXP-035-R2/t7-final-cancel-closure-notes.md`.

**Pre-Cancel state (planned fresh snapshot `t7-01-pre-final-cancel-snapshot.md`).** Dialog open; textbox `FX_ComponentRecoveryLab02` (`[active]`); Filter By `Name`; Case Sensitive and Starts With unchecked; ONE row with Name `FX_ComponentRecoveryLab02`; Cancel `f1e127`. Matches the T6 post-reopen state. Guard passed.

**Final ordinary Cancel.** `browser_click` on `button "Cancel"` `f1e127`, exactly once. Returned without error; tool snapshot `evidence/playwright/page-2026-10-09T13-51-48-965Z.yml`. No retry.

**Closure verification (fresh, read-only).** `t7-02-post-final-cancel-snapshot.md`: no `Select Form` dialog node, no textbox, grid, or dialog buttons; toolbar Open `f1e23` present with focus; Save disabled; Web Client identity bar, DEM badge, menus, toolbar, and Explorer tree present. `t7-03-post-final-cancel-viewport.png` (viewed): the Web Client with the Explorer tree and toolbar, an empty main region, and no dialog or browser-native dialog visible. SHOWS closure of Select Form in the viewport. DOES NOT SHOW anything outside the viewport.

**Final lifecycle counters.** Initial Open 1; tested Cancel 1; tested reopen 1; final Cancel 1; additional reopen 0. These match the expected accounting in the brief.

**Recovery allowance (shared; not reset).** Fresh untargeted snapshot 0/1 used, 1 remaining; corrected visible inspection 0/1 used, 1 remaining. The T7 snapshots were planned captures, not recovery.

**Final visible state.** Select Form CLOSED; Web Client available; no browser-native dialog; no unsaved-change indicator (Save disabled). No further browser action is authorized.

**Status.** The lifecycle is complete as briefed. The experiment is NOT declared accepted in this task. Remaining for the repository-only final audit: the T3 reconciliation gap (operator-reported 44 calls vs. 39 accounted, five unidentified) and the fact that the raw T3 transcript was never inspected by a worker. Operator-reported call-level evidence for the 25 key calls stays operator-reported. The T6 post-reopen observation stands as recorded (single run; rendered UI only; no persistence, cache, server-refresh, or database inference).

## T9 — documentary reconciliation (worker session 69ed601b-bbc3-4abd-8c53-6a6415410f36; task_message_id 6b5982aa-796f-4d9d-89ea-e0f4ea0f7ed8)

Details: `evidence/EXP-035-R2/t9-documentary-reconciliation.md`. Zero browser calls; zero Mongoose actions; Select Form remains CLOSED; `tools/` not read; the original T3 transcript not opened by the worker.

**Coordinator decisions recorded.**
1. The operator extraction of the T3 event transcript is **accepted as call-level evidence for AC-2**. Qualification kept: the worker did not independently open the original transcript. It reports successful `browser_press_key` calls for `Control+a`, `Backspace`, and 25 single printable characters in order (`F X _ C o m p o n e n t R e c o v e r y L a b 0 2`), zero errors, no forbidden input method.
2. **AC-2 PASSED** on the combined evidence: the operator extraction plus the corroborating rendered evidence (artifacts `page-…13-30-38`, `13-30-41`, `13-30-45`, `13-31-18`; `t3-02`, `t3-03`, `t4-01`, `t4-02`). Not passed on textbox contents alone.
3. Accounting: the five-call difference is **one additional non-browser inspection plus four non-browser documentation writes**. The browser count is 37 in both accounts. The operator extraction supplies the exact non-browser breakdown (3 inspections, 4 writes). The worker's self-report had 2 inspections and no writes.
4. Classification: a successfully accepted clean replay may establish **replay_verified** for this specific rendered-UI retention procedure. The earlier statement that the observation "has not been repeated" is withdrawn as a reason to withhold that classification.

**Acceptance (corrected, with labels).** The approved AC-1 to AC-4 wording is NOT available to the worker (it lives under `tools/`). The coordinator's T9 message refers to AC-1 to AC-4 definitions "already supplied", but none were present in the material the worker could read. The table in the T9 evidence file therefore uses the coordinator's requirement groups with qualified predecessor labels, and says so. Results: repository-review ordering PASS (limited: T1 untimestamped); preflight PASS (limited: operator attestations); native keyboard operations PASS (AC-2, coordinator decision); positive-control row PASS (AC-3 label); one Cancel and one reopen PASS (AC-4 label); post-reopen observation PASS (recorded); final Cancel and closure PASS; lifecycle counters Open 1, Cancel 1, reopen 1, final Cancel 1, additional reopen 0 PASS; scope confinement PASS for worker-authored writes, with generated files disclosed; Designer context PASS (limited, operator-attested).

**Classification (corrected).** Retention across one ordinary Cancel and one ordinary reopen, rendered textbox, Filter By, both checkboxes and the single row: **replay_verified** for this rendered-UI procedure, scoped to rendered UI only. No persistence, database, cache, serialization, server-refresh, session or internal-store mechanism is established or inferred. The worker notes for the coordinator that AGENTS.md says verification requires "repeatable execution and persistence verification"; this experiment has no persistence verification, so the label is confined to the rendered-UI procedure. The 25-key sequence remains replay_verified in EXP-033-R2 and EXP-033-R4.

**Compliance (retained).** Worker-authored writes were confined to this record and `evidence/EXP-035-R2/`. Thirteen gitignored `evidence/playwright/` files from this run's window were written by the browser tool, not worker-authored, and were not deleted; coordinator decision needed. Tool wrapper code is not a worker-invoked evaluate or run-code call; the worker invoked only click, press_key, wait, snapshot, find and screenshot.

**Readiness.** No remaining genuine blocker for lifecycle or capture. Open documentary items: the approved AC wording is unavailable to the worker; the T1 window is untimestamped; Designer state is operator-attested; disposition of the `evidence/playwright` files; wrapper-code acceptability; scope of the replay_verified label. **The experiment is ready for coordinator acceptance. The worker does not accept it.**

## T8 — final repository-only acceptance and provenance audit (worker session 69ed601b-bbc3-4abd-8c53-6a6415410f36; task_message_id 79a5b261-cd6d-4960-bb9f-3f7c30537ea8)

Details: `evidence/EXP-035-R2/t8-final-acceptance-provenance-audit.md`. Zero browser calls; no Mongoose action; `tools/` not read; the operator's 44-call log was not opened (its content is operator-supplied).

**Five-call reconciliation.** Operator breakdown: 1–37 browser calls, 38–40 repository reads (3), 41–44 repository writes (4). Worker self-report: 37 browser calls and 2 reads, with no writes counted. **The browser-operation count agrees (37 = 37).** The five-call difference lies entirely outside browser operations. The self-report omitted writes; existing evidence confirms at least two T3 writes (`t3-action-audit-notes.md` and the record's T3 text). The 3-read/4-write split is operator-supplied and not confirmed. This is a documented limitation of the self-report, not evidence of additional browser actions.

**Operator log content (checked against quoted text and the self-report, not the file).** Control+a, Backspace, then 25 printable `browser_press_key` calls in order: the target letters match exactly (25 letters; lowercase `b` at position 23). Zero errors and no prohibited input or lifecycle action are operator-attested; the worker cannot verify the raw file.

**Acceptance numbering.** No readable EXP-035-R2 file defines numbered checks, and the approved brief is under `tools/`. The table in the T8 evidence file uses the EXP-035 predecessor numbering (AC-1, AC-1a, AC-2 through AC-7, AC-D, AC-K), marked as assumed. The T4 mapping is superseded (correction above).

**Acceptance status (assumed numbering).**
- AC-1 preflight and inherited state: PASS (limited; operator attestations for login, configuration and Designer state).
- AC-1a review before browser interaction: PASS (limited; T1 has no timestamp; zero browser calls in T1 by self-report).
- AC-2 settings, native clear and 25 key operations: **UNRESOLVED** at call level (state verified: Filter By Name, checkboxes unchecked, exact textbox; the operator log is not inspected by the worker; the clear effect is not attributable).
- AC-3 settled single exact row before lifecycle: PASS.
- AC-4 one Cancel and one reopen: PASS (artifact and dialog-node checks).
- AC-5 post-reopen observation: PASS (limited; highlight and `[active]` cause unresolved).
- AC-6 lifecycle accounting: PASS (limited; zero-count claims are self-reported per task).
- AC-7 confinement: PASS for worker-authored writes. **Disclosed compliance issue:** 13 tool-generated files under `evidence/playwright/` were written in this run's window. They are outside permitted paths and are gitignored (`.gitignore` line 10), so git-based confinement does not see them. The worker did not delete them. Coordinator decision needed.
- AC-D Designer context: PASS (limited; no Designer tab; operator-attested).
- AC-K knowledge classification: PASS.

**Lifecycle counters (T7 closure verified).** Initial Open 1; tested Cancel 1; tested reopen 1; final Cancel 1; additional reopen 0. Closure is verified by `t7-02-post-final-cancel-snapshot.md` (no dialog node) and `t7-03-post-final-cancel-viewport.png`.

**Classification [SUPERSEDED by T9 — see the T9 section]:** Retention across this one Cancel/reopen boundary: **observed** (single run, rendered UI only). **Not** replay_verified: one run, and the call-level record for AC-2 is operator-attested. No persistence, database, cache, serialization, server-refresh, session or internal-store mechanism is inferred. The 25-key sequence remains replay_verified in EXP-033-R2 and EXP-033-R4, not re-verified here.

**Overall.** The lifecycle and final-state requirements are satisfied on the recorded evidence. The call-level requirement for the T3 key operations is not independently satisfied. **This record does not declare final harness acceptance.**

## Next permitted action

No browser action is authorized. The coordinator should decide: (1) whether the operator-attested T3 log is acceptable evidence for AC-2; (2) the acceptance numbering against the approved brief; (3) handling of the gitignored `evidence/playwright/` files from this run; (4) whether the wrapper-code question affects the no-JavaScript requirement; (5) whether the T3 non-browser accounting needs further documentation.

The T8 audit has been done (see above). The acceptance decision is not made here. The coordinator should decide the acceptance of AC-2 and AC-3 on the recorded evidence; this record does not declare acceptance. If it is authorized: begin with a fresh untargeted snapshot; then exactly one ordinary Cancel of Select Form and exactly one ordinary toolbar Open (reopen), with no change to the textbox, Filter By or checkboxes; record the reopened state without typing or setting changes; capture post-reopen screenshot and accessibility; and perform at most one final ordinary Cancel with no further reopen. Do not retype `FX_ComponentRecoveryLab02`. The coordinator should decide first whether the unverified T3 key-press count is acceptable for AC-2, and whether the rule that no action occurred after 13:31:18Z is accepted on the self-report.

## Knowledge state (T1)

- The 25-key native sequence for `FX_ComponentRecoveryLab02`: **replay_verified** as recorded by EXP-033-R2 and EXP-033-R4 for their tested environments. Re-observed in EXP-033 T2, EXP-033-R3 attempt 2, EXP-035 T4. Not re-verified by this worker.
- Retention across one Cancel/reopen: **observed** in EXP-035 (single run). **unresolved** for this replay. EXP-034 contributes no retention result.
- Inherited-state variation across runs: **observed**; cause **unresolved**.
- Clear-step attribution when the textbox starts empty: **unresolved**.
- Reopen text highlight: **observed** (EXP-035 T5); cause **unresolved**.
- Database, cache, persistence, serialization, server-refresh, session or internal-store mechanisms: **unresolved / not inferred**.

## Open questions and limitations (T1)

1. The approved EXP-035-R2 brief is not readable by the worker (`tools/` is out of bounds). The acceptance list used here is the one in the harness task message. The coordinator should confirm it against the approved brief.
2. The MCP tool's generated wrapper code appears in action results (EXP-035 T7 §F). Whether that is acceptable under the no-JavaScript rule is open. The worker authors none of it.
3. Designer context: predecessor runs EXP-035, EXP-033-R3 and EXP-033-R4 had no Designer tab. "No unsaved Designer changes" was operator-attested there. Report what is visible; do not assume.
4. The EXP-035 review-ordering waiver does not apply to this experiment. This record documents compliance with the ordering rule.

## Files written in T1

- `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` (this record; created)
- `evidence/EXP-035-R2/t1-repository-review-notes.md` (created; supplementary review evidence)

No other path was written. No predecessor record or evidence file was modified. No Mongoose artifact was touched.
