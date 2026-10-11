# EXP-053 T6 — Final evidence reconciliation, consolidated action audit, and acceptance matrix

Run `R-20261011-131100-lCZw`, experiment EXP-053, cycle 5, task T6. Worker session `d8ab6b32-de4d-4dd5-ae58-c979edc1c3f6`, task_message_id `355d73d9-18eb-4136-9e2c-e26766aad178`. Date 2026-10-11. Documentation only: **zero browser calls in T6**. No product state was changed.

## 0. Summary

- All ten acceptance checks (AC-1 to AC-10) are **supported with limits**. No check failed. Every check carries at least one stated limit.
- Diagnostics preferences: original (T1) → configured (T2) → restored (T5). The final same-session read-back of all 32 options matches T1 exactly. This is same-session UI restoration only.
- One controlled FX_Items opening (T4) produced **20** native `FormEvent (FX_Items)` rows, all with zero handler counts. Three records loaded automatically; Save was disabled; no manual collection load followed.
- The one permitted Diagnostic Log clear (T3) was consumed. It cleared 36 inherited rows from the T2 preference session. Those rows are not EXP-053 controlled-test evidence.
- One observation is **unexplained** and is not claimed as a finding: the T5 OK and reopen produced no visible log rows, although the T2 OK and reopen did (§4.4). One worker-report count error (T3 screenshots, §5.3 D2) is corrected here. Procedure deviations are disclosed in §5.3.
- **Recommendation: accept EXP-053 at the same-session UI-observation level, with limits (§8).**

## 1. Method and what was verified in T6

Directly verified in T6 (read or counted in this turn):
- Experiment record (full read); `evidence/EXP-053/` listing (44 files before this report, all present).
- `T4-controlled-opening-diagnostic-sequence.md` Part A (all 20 rows, read in T4 and re-read in T5/T6 for names and order).
- `t4-04-settled-accessibility-snapshot-runtime-and-log.md`: `grep` count of `gridcell "05:22:07.*"` = **20**. Rows at .945 = 9; at .976 = 11 (read in T4).
- `t3-04-diagnostic-log-Log-Messages-initial-accessibility-snapshot.md`: count of timestamp cells = **36** (6 at 05:15:41.163; 30 at 05:15:49.512).
- `page-2026-10-11T05-25-51-805Z.yml`: **16** rows at 05:25:20.269 (1) and 05:25:20.285 (15).
- All `evidence/playwright/` files with timestamps 05:25:30 or later (search over all browser-tool files): **none** contain a log row timestamped 05:25:30 or later, or any row at 05:26.
- Harness audits `harness-audit-T1` to `T5` (per-tool tables read or searched); all report `prohibited-tool hits=0`.
- T1, T2, T3, T4 runtime and T5 reports (read in T6, in part for T1, T2, and T4, and in full for T3 and T5 sections quoted here).

Worker-reported and not re-verified in T6: the content of the individual PNG captures (each was viewed in its own task); the 32-option per-tab values (read from snapshots in T1, T2, and T5, and recorded in the reports).

## 2. Diagnostics preference record (original → configured → restored)

Authorized options: General > Enabled; Form > Events; Form > Event Handler > Include. Values are as visibly established in the Web Client, not stored values.

| Option (tab) | T1 original | T2 configured | T5 restored (final read-back) | Clicked by worker |
| --- | --- | --- | --- | --- |
| Enabled (General) | OFF | ON | **OFF** | Yes (T2 label click; T5 label click) |
| Events (Form, top level) | ON | ON | ON | **No** |
| Include (Form, Event Handler) | ON | ON | ON | **No** |

Full 32-option equality (T1 baseline vs final T5 read-back): **32 of 32 match; 0 differences.** The full list with refs is in `T5-diagnostics-restoration-and-32-option-comparison-report.md` §3. Summary by tab:

| Tab | Options | T1 | Final | Notes |
| --- | --- | --- | --- | --- |
| General | 3 | Enabled OFF; System Information OFF; Security OFF | identical | Enabled was the only option changed (and changed back) |
| Form | 16 | Events ON; Event Handler Include ON; Value Changed ON; 13 others OFF | identical | Validator Include OFF (separate group from Event Handler Include) |
| IDO Collections | 7 | all OFF | identical | |
| Others (Interpreter) | 6 | all OFF | identical | |

Limit: this establishes the same-session UI read-back after OK. It does not establish stored preference values, persistence across sessions, or database state.

## 3. Controlled interval (T4): native sequence as preserved

Source: `T4-controlled-opening-diagnostic-sequence.md` Part A, taken from `t4-04` (grid DOM), not from the clipped screenshot. All 20 rows are `WinStudio` / `Diagnostics`, and each message names `FX_Items`. Phase is read from the message wording ("starting processing" / "result 0"). Every result row reads `num handlers for event 0, num executed 0, default handler ignored False`.

| # | Time (displayed) | Event name | Phase |
| --- | --- | --- | --- |
| 1 | 05:22:07.945 | StdFormPredisplay | starting processing |
| 2 | 05:22:07.945 | StdFormPredisplay | result 0 |
| 3 | 05:22:07.945 | StdFormInitCompleted | starting processing |
| 4 | 05:22:07.945 | StdFormInitCompleted | result 0 |
| 5 | 05:22:07.945 | StdFormRefresh | starting processing |
| 6 | 05:22:07.945 | StdFormGetBoundValues | starting processing |
| 7 | 05:22:07.945 | StdFormGetBoundValues | result 0 |
| 8 | 05:22:07.945 | StdObjectRefresh | starting processing |
| 9 | 05:22:07.945 | StdObjectRefresh | result 0 |
| 10 | 05:22:07.976 | StdObjectSelectCurrentCompleted | starting processing |
| 11 | 05:22:07.976 | StdObjectSelectCurrentCompleted | result 0 |
| 12 | 05:22:07.976 | StdObjectRefreshCompleted | starting processing |
| 13 | 05:22:07.976 | StdObjectRefreshCompleted | result 0 |
| 14 | 05:22:07.976 | StdFormLoadBoundValues | starting processing |
| 15 | 05:22:07.976 | StdFormLoadDerivedValues | starting processing |
| 16 | 05:22:07.976 | StdFormLoadDerivedValues | result 0 |
| 17 | 05:22:07.976 | StdFormLoadBoundValues | result 0 |
| 18 | 05:22:07.976 | StdFormRefreshCompleted | starting processing |
| 19 | 05:22:07.976 | StdFormRefreshCompleted | result 0 |
| 20 | 05:22:07.976 | StdFormRefresh | result 0 |

Verified counts: 20 rows; 9 at 05:22:07.945; 11 at 05:22:07.976; 10 "starting processing" rows; 10 "result 0" rows; **0 `EventHandler (...)` rows**; 0 unattributable rows; no date displayed.

Interpretation (worker, not native text): rows 5 and 20 bracket the others as the same event (`StdFormRefresh`). The event name matches the Initial Command `Refresh` narrated in the transcript. The log does not state a trigger, so no causal link to Initial Command or to the opening is established.

Relationship to the controlled interval: the grid was empty after the single clear (T3, `t3-07`). The first row is 05:22:07.945. The same 20 rows appear immediately after OK and after 3 s with no action (`t4-02`, `t4-03`, `t4-04`). No later rows were recorded during T4.

Visibility limitation: the panel shows about six rows at a time. `t4-02` and `t4-03` show rows 1 to 6 (the first six rows of the table above). `t4-05` (after a wheel scroll that had no visible effect) shows the same top rows. The complete 20-row list is supported only by the accessibility snapshot `t4-04` and the verbatim table in the T4 sequence file. The screenshots alone do not establish rows 7 to 20.

## 4. Other log intervals (not part of the controlled T4 interval)

### 4.1 Pre-clear inherited rows (36) — from the T2 preference session

Source: `t3-04`, read in T3, counted in T6. Six rows at 05:15:41.163: three `EventHandler (StdFormExitOk)` rows (`Execution complete, rc 0`; `About to execute, raw response SetDisableFormAliasesForSession()…`; `Execution complete, rc 0`) and three `FormEvent (UserPreferences)` rows (`StdFormClose` starting; `StdFormClose` result 0; `StdFormExitOk` result 0). Thirty `VarValue` rows at 05:15:49.512. These were cleared once (T3) and are not EXP-053 test evidence. Their timing matches the T2 OK (`page-…05-15-41-429Z`) and the T2 reopen (`page-…05-15-49-844Z`). That correlation is timestamp-only.

### 4.2 Runtime-close interval (T3) — no visible rows

The FX_Items runtime close (T3) produced no visible new rows. The Log Messages grid still held the same 36 rows (`page-…05-19-22-146Z`, counted in T6). Whether the close wrote entries the panel does not render is not established.

### 4.3 T5 preference-navigation rows (16) — not part of the T4 opening

Opening User Preferences (T5) added 16 `VarValue (…)` rows: one at 05:25:20.269 and 15 at 05:25:20.285. These names are `StdCurFormPage`, `StdLastFormPage`, and similar, all `VariableType=Form Persistent=False`. They are preference-navigation entries and are not attributed to the T4 opening.

### 4.4 Unexplained: no visible rows after the T5 OK and reopen

The T2 OK and reopen each produced visible rows: 6 at 05:15:41.163 and 30 at 05:15:49.512. In T5 the OK at about 05:25:40 and the read-only reopen at about 05:25:47 to 05:26:14 produced **no visible rows**. No browser-tool file dated 05:25:30 or later contains any log row (§1). The T2 first open (about 05:15:03) also produced no visible rows, while the T5 first open produced 16. The cause is not established. Candidate explanations (rendering timing, grid refresh, log buffering) are untested. Nothing is inferred from this gap. AC-8 concerns the preference values, which were verified directly, and does not depend on the log.

## 5. Consolidated action audit (T1 to T5)

Source: the per-tool tables in `harness-audit-T1` to `T5` (controller) and the worker reports. Each worker count was reconciled to the controller table. Controller summary lines ("N actions, M reads") use a different categorization from the per-tool tables. The per-tool tables are used here.

### 5.1 Browser calls by task

| Task | tabs | snapshots | screenshots | clicks | finds | other | total browser |
| --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | 3 | 8 | 7 | 7 | 1 | 0 | 26 |
| T2 | 3 (1 error) | 10 | 8 | 15 | 6 | 0 | 42 |
| T3 | 2 | 6 | 5 | 5 | 4 | key 1, hover 1 | 24 |
| T4 | 2 | 5 | 4 | 3 | 2 | wait 1, wheel 1 | 18 |
| T5 | 2 | 9 | 6 | 13 | 6 | 0 | 36 |
| **Total** | **12** | **38** | **30** | **43** | **19** | **4** | **146** |

Read/search tool calls (not browser): T1 18 (includes 6 Glob, 1 Grep); T2 8; T3 17 (9 Read, 8 Grep); T4 6; T5 7. Write/Edit calls: T1 3; T2 6; T3 7; T4 10; T5 8. Write/Edit calls include report and record edits only.

### 5.2 Requirement-by-requirement reconciliation

| Requirement | Count | Where |
| --- | --- | --- |
| Diagnostics preference dialog openings | 5 (T1 1; T2 2: before and after the change; T5 2: pre-check and reopen) | controller tables T1, T2, T5 |
| Diagnostics option mutations (state changes) | 2 (T2 Enabled OFF→ON; T5 Enabled ON→OFF); net 0 | T2 orders 21; T5 order 13 |
| Diagnostics option mutation attempts that did not execute | 1 (T2 checkbox input click, timed out; postcondition checked by snapshot) | T2 order 19 |
| Diagnostics OK confirmations | 2 (T2 once; T5 once) | T2 order 25; T5 order 17 |
| Clicks on Events, Event Handler Include, or Value Changed | 0 | all tables |
| Diagnostic Log clears | **1** (T3 order 33) | T3 |
| Clean inherited FX_Items runtime closures | **1** (T3 order 26; gate: Save disabled, no prompt) | T3 |
| Controlled FX_Items openings | **1** (T4 orders 5, 7, 10: Open, row Name cell, OK) | T4 |
| Manual collection loads after the controlled opening | **0** (no Refresh, F4, Filter-in-Place, Get More Rows, or query in T4 or later) | T4 orders 11 to 34; T5 table |
| Runtime business-data mutations (typing, Save, New, Delete, edit) | **0** (no browser_type or key entry into any FX_Items field; no Save) | all tables |
| Designer mutations (Save, Initial Command change, property edit) | **0** (the Designer tab was selected once for a read-only screenshot in T1) | T1 orders 39 to 40 |
| Preference clicks outside the three authorized options | **0** | all tables |
| Log clears in T4 or T5 | 0 | T4 and T5 tables |
| Reloads, navigations, reauthentications, browser restarts | 0 | all tables |
| Unexpected prompts or dialogs accepted | 0 (Select Form and the User Preferences dialogs are expected; View menu closed with Escape in T3) | all tables |

### 5.3 Errors, timeouts, recoveries, and deviations

| # | Task | Event | Outcome | Disposition |
| --- | --- | --- | --- | --- |
| E1 | T2 | First `browser_tabs select 1` returned "Tab 1 not found" (order 1). | Tool error, no action. | Recovered: `list` showed both tabs; retry succeeded. |
| E2 | T2 | Click on the Enabled checkbox input (f1e445) timed out at "visible, enabled and stable" (order 19). The ExtJS overlay span intercepted pointer events. | **Not executed.** A snapshot confirmed the checkbox was still unchecked. | Recovered within allowance: one corrected click on the visible Enabled label (f1e447). The label click is the single effective T2 change. |
| D1 | T3 | One **Escape** key press (order 14) to close the View menu. | No selection; menu closed. | Disclosed. Not a collection action. |
| D2 | T3 | Count error in the worker report: "screenshots 7". | The controller table records **5** screenshot calls. Two more "captures" were accessibility snapshots saved to file (`t3-04`, `t3-07`). | **Correction:** T3 = 5 screenshots + 6 snapshot calls (2 saved to file). The T3 report is not edited, per the T6 instruction. |
| D3 | T4 | **Mouse wheel** (deltaY 600) over the page to scroll the log view (order 21), after the opening. | **No visible effect** (`t4-05` shows the same top rows; record 1 remained current). Not a collection action, and no row count or status changed. | Disclosed. The brief did not forbid it, but it was unnecessary. |
| D4 | T4 | The worker did **not** read the T3 report or the T3 cleared-baseline evidence with a tool before opening (the T4 controller table starts with `browser_tabs list`). | Facts were in working context from T3. No product effect. | Procedure deviation disclosed. |
| D5 | T5 | The worker did **not** read the T1 baseline report or the T2 report with a tool before acting. The T4 sequence file was read only to line 30 of 58. | The T1 and T2 values were in working context and were used in the comparison table. The T4 file was confirmed readable. No product effect. | Procedure deviation disclosed. |
| D6 | T5 | Pre-change inspection read only General (Enabled and the two others). The other 31 options were not read before the change. | The reopen compared all 32 against T1 and found no differences. | Disclosed. |
| D7 | T1 to T5 | Controller "N actions, M reads" summary lines use different categories from the per-tool tables. | Per-tool tables reconcile exactly with the worker counts (T1 26 calls, 8 snapshots; T2 42, 15 clicks, 10 snapshots; T4 18; T5 36). | Disclosed. The per-tool tables are authoritative. |
| — | all | Ref-not-found, prompts, authentication challenges, timeouts in any other task, and reference recoveries beyond E2 | 0 | — |

No browser evaluate, run-code, injected JavaScript, or hidden-state tool calls were made in any task (controller `prohibited-tool hits=0`, `Flagged tool usage: {}` for all five tasks).

## 6. Other reconciliation findings

- The T2 controller audit records 2 errors (E1, E2), matching the T2 report.
- The T3 controller audit records one Escape key press (D1) and one hover (on the Clear button), both in the T3 report.
- The T4 audit records no errors. Its `mouse_wheel` call (D3) is listed.
- The T5 audit records no errors and no flagged tools.
- The T1 counts reconcile exactly (26 browser calls, 8 snapshots, 7 clicks, 7 screenshots, 1 find, 3 tab calls).

## 7. Repository confinement review

Method: Bash is disabled, so `git status` was not run. The harness before/after diff is authoritative. This review is based on the worker's write calls in the transcript and on file-system inspection (Glob, Grep, Read). It does not replace the harness diff.

Worker-authored files (written by the worker in this run):
- `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (the record; created in T1, updated in T2 to T6).
- `evidence/EXP-053/T1-preflight-and-diagnostics-baseline-report.md`
- `evidence/EXP-053/T2-diagnostics-enable-configuration-and-verification-report.md`
- `evidence/EXP-053/T3-log-baseline-and-clean-runtime-closure-report.md`
- `evidence/EXP-053/T4-controlled-opening-runtime-and-audit-report.md`
- `evidence/EXP-053/T4-controlled-opening-diagnostic-sequence.md`
- `evidence/EXP-053/T5-diagnostics-restoration-and-32-option-comparison-report.md`
- `evidence/EXP-053/T6-final-reconciliation-audit-and-acceptance-matrix-report.md` (this report)

Browser-tool screenshots at worker-requested paths (worker-requested captures, automatically generated images): 30 PNG files `evidence/EXP-053/t1-01` to `t5-06` (t1: 7; t2: 8; t3: 5; t4: 4; t5: 6).

Browser-tool text output saved at worker-requested paths (automatically generated, classified as browser evidence): `evidence/EXP-053/t3-04-diagnostic-log-Log-Messages-initial-accessibility-snapshot.md`, `evidence/EXP-053/t3-07-diagnostic-log-cleared-baseline-accessibility-snapshot.md`, `evidence/EXP-053/t4-04-settled-accessibility-snapshot-runtime-and-log.md` (3 files).

Controller-generated files (not worker-authored): `evidence/EXP-053/harness-audit-T1.md` to `harness-audit-T5.md` (5 files).

Automatically generated browser-tool files under `evidence/playwright/` in this run's window (from 05:11:13 to 05:26:14 on 2026-10-11): **49 files** (T1: 8; T2: 15; T3: 7; T4: 5; T5: 14). Files dated 04:22 to 04:40 on the same day belong to earlier runs and are not part of this run.

Outside `evidence/EXP-053/` and `experiments/EXP-053-*`: the worker wrote **no** files. No `tools/`, `AGENTS.md`, recipe, memory, IDO, SQL, property class, FX_UMs, string, Form, or other experiment file was written or edited by the worker. The worker did not read `tools/` (the brief forbids it). The harness reported a repository status at session start that already showed modified files under `tools/learning-harness/` (README, a brief JSON, a config example, and shadow CLI/runner/test sources). The worker did not touch those files; this is noted as pre-existing and is not an unexpected change by the worker. Any other unexpected change would be visible only in the harness diff.

Unexpected changes identified by the worker: **none known.**

## 8. Acceptance matrix (final)

Status key: **Supported** = all claimed facts are evidenced; **Supported with limits** = the facts are evidenced and the listed limit applies; **Failed** / **Pending** = not used (none).

| AC | Status | Exact evidence paths | What the source proves | Remaining limit |
| --- | --- | --- | --- | --- |
| **AC-1** Read-only preflight | Supported with limits | `T1-preflight-and-diagnostics-baseline-report.md` §1; `t1-01-webclient-preflight-runtime-FX_Items-open.png`; `t1-06-webclient-after-preferences-closed-no-change.png`; `t1-07-designer-FX_Items-Initial-Command-Refresh-readonly.png`; transcript read (`harness-audit-T1` order 8) | DEM identity bar; runtime FX_Items open with three rows and Save greyed; no dialog or challenge; Designer FX_Items User-scoped with Initial Command = Refresh; transcript section 4 read | Same session. Identity is displayed text. Designer identity visible via screenshot and status bar; not a database read. |
| **AC-2** Original-value baseline before mutation | Supported with limits | `T1-…-report.md` §2 (32 options, refs); `t1-02`, `t1-03`, `t1-04`, `t1-05` (screenshots); `T2-…-report.md` §1 (pre-change group confirmation: `t2-01`, `t2-02`); no mutation in T1 (`harness-audit-T1`: no OK, no checkbox click) | All 32 Diagnostics options and their visible states; Enabled OFF, Events ON, Include ON identified individually by group | Values are visible UI state, not stored. Duplicate labels (Include ×2, Initialization ×3, Dependent Notification ×2) are identified by layout and checked-state cross-check (`t2-02`), not by stored names. |
| **AC-3** Configure the three options; OK; read-back | Supported with limits | `T2-…-report.md` §2–3; `t2-01`, `t2-02` (pre); `t2-03` (after label click, before OK); `t2-04` (reopened General, Enabled ON); `t2-05`, `t2-06`, `t2-07` (reopened Form, IDO, Others: unchanged) | Enabled changed OFF→ON via the visible label; native OK once; read-back shows Enabled ON and the other 31 unchanged | One checkbox-input click timed out (E2; not executed). Events and Include were not clicked; they were already ON. Client-side values. |
| **AC-4** Clean inherited runtime closure; cleared log | Supported with limits | `T3-…-report.md` §1–5; `t3-01` (pre-close clean); `t3-02`, `t3-03`, `t3-04` (initial log, 36 inherited rows); `t3-05` (tab absent); `t3-06`, `t3-07` (cleared grid, no rows); `harness-audit-T3` orders 26 and 33 (one close, one clear) | Gate clean (Save disabled, no prompt); FX_Items tab closed once and absent; log cleared once (tooltip "Clear"); grid empty after the clear | Clear control identified by tooltip only. The 36 pre-clear rows are inherited, not EXP-053 evidence. The runtime close produced no visible rows. |
| **AC-5** One controlled Select Form opening; automatic records; no manual load | Supported with limits | `T4-…-runtime-and-audit-report.md` §2–5, §9; `t4-01` (pre-open); `t4-02` (immediate); `t4-03` (settled after 3 s); `t4-04` (accessibility, runtime and log); `harness-audit-T4` orders 5, 7, 10 (the opening) and 11 to 34 (no collection action) | One opening (count 1); identity FX_Items; DEM configuration; three records appeared automatically (1 dumbbell / 45 pound iron / 45.00 / EA; 2 eggs / cage free / 6.99 / DZ; 3 guitar / natural acoustic / 129.99 / EA); status `Description (Object 1 of 3)`; Save disabled; unchanged at 3 s | Same session. The load cause is not isolated. The Select Form row Name-cell click is part of the opening workflow (disclosed). The T4 wheel scroll (D3) had no effect on records. |
| **AC-6** Attributable event sequence; names, order, timestamps, handler entries | Supported with limits | `T4-controlled-opening-diagnostic-sequence.md` Part A and Part C; `t4-04` (source); `t4-02`, `t4-03` (screenshots, first rows); the 20-row table in §3 of this report | 20 native `FormEvent (FX_Items)` rows; display order; timestamps 05:22:07.945 (9) and 05:22:07.976 (11); no `EventHandler` rows; every result row `num handlers 0` | Attribution to the opening rests on timing and the FX_Items name only; the log gives no trigger. Panel shows about six rows; the full list is supported only by the accessibility snapshot. Milliseconds only, no date. Server-side completeness is not established. Handler configuration is not established. |
| **AC-7** Readable, preserved report; verbatim vs interpretation | Supported with limits | `T4-controlled-opening-diagnostic-sequence.md` (Part A verbatim; Part B interpretation; Part C relationship to the interval); `t4-04` | Verbatim rows separated from interpretation; no credentials reproduced (the rows contain no credential text) | Verbatim text comes from the accessibility snapshot, not from a raw log export. The screenshot-only view is partial, which is disclosed. |
| **AC-8** Restore every temporarily changed option; ordinary OK; read-only reopen equals baseline | Supported with limits | `T5-…-report.md` §1–3; `t5-01` (pre-restore, Enabled ON); `t5-02` (Enabled unchecked before OK); `t5-03` (reopened General, Enabled OFF); `t5-04` (reopened Form); `t5-05` (IDO); `t5-06` (Others); `harness-audit-T5` orders 13 and 17 (one label click, one OK) | 32 of 32 options match the T1 baseline (Enabled OFF; Events ON; Include ON; Value Changed ON; other 28 OFF); the only changed option was restored | Same-session client-side values read back after OK. Not a database read, not persistence across sessions. The restoration used the label; the checkbox input was not attempted. |
| **AC-9** Final action audit; errors, prompts, timeouts, recoveries, deviations; confinement | Supported with limits | §5 (per-task table; requirement reconciliation; errors and deviations table E1, E2, D1 to D7); §7 (repository confinement); `harness-audit-T1` to `T5` (controller tables) | All requirement counts reconcile to the per-tool tables: 1 clear; 1 clean runtime closure; 1 opening; 0 manual post-opening collection loads; 0 runtime business-data mutations; 0 Designer mutations; restoration sequence as in AC-8 | Two worker-report count corrections (D2; the controller summary labels differ). Procedure deviations D4, D5, D6 (read-before-act not done in full). Unexplained log gap (§4.4). Repository confinement is from transcript and file-system inspection; the harness diff is authoritative. |
| **AC-10** Final matrix in the record; observed-only classification | Supported with limits | This report §8; `experiments/EXP-053-…md` (acceptance matrix, final section, final knowledge table) | Each AC row above is tied to exact evidence paths; all confirmed findings are classified observed only | No replay verification, isolated event causation, cross-session durability, database-level persistence, or complete server-side trace is claimed. |

**Overall: all ten checks are supported with limits. None failed.**

## 9. Final product state (as last observed in T5; not re-verified in T6)

- Diagnostics: **General > Enabled OFF**; **Form > Events ON**; **Form > Event Handler > Include ON**; Value Changed ON; the other 28 options OFF (matches T1, 32 of 32).
- Web Client: tab `FX_Items` runtime Form **open and selected**, three records, Save disabled, status `Description (Object 1 of 3)`; no unsaved change; no open prompt.
- Diagnostic Log: **open**, Log Messages tab, grid containing 16 T5 preference-navigation rows (plus the 20 T4 rows, which were not cleared after T4).
- Designer: **untouched** since T1 (FX_Items User-scoped, Initial Command = Refresh, Save disabled).
- No dialog or browser-native prompt open.

## 10. Documentation changes (T6)

- Updated: `experiments/EXP-053-hello-world-part-3-section-4-fx-items-form-event-d.md` (stale header replaced; AC-9 and AC-10 rows completed; final acceptance matrix; T6 section; final knowledge table; stale "open items" and "T1 knowledge state" sections marked as superseded; repository-changes list for T6).
- Written: `evidence/EXP-053/T6-final-reconciliation-audit-and-acceptance-matrix-report.md` (this report).
- Not modified: any T1 to T5 report, any screenshot, any harness-audit file, any browser-tool file.

## 11. Knowledge state (final)

| Finding | State |
| --- | --- |
| Diagnostics General > Enabled OFF (T1) → ON (T2) → OFF (T5); read-back after each OK | observed (single session) |
| All 32 Diagnostics options equal the T1 baseline on the final read-back | observed (single session; client-side) |
| Events and Event Handler Include were never clicked and remained ON | observed |
| Runtime FX_Items opened once; three records loaded automatically; Save disabled; values as listed | observed (single session) |
| 20 native `FormEvent (FX_Items)` rows, with the names and order in §3, timestamped 05:22:07.945 and 05:22:07.976 | observed (verbatim; accessibility source) |
| Zero `EventHandler` rows in the controlled interval; every result row `num handlers 0` | observed |
| The opening caused the event rows, or Initial Command caused the load | **unresolved** (sequence and names only; no causal claim) |
| `StdFormRefresh` corresponds to the narrated Initial Command Refresh | **unresolved** (name match only) |
| 36 pre-clear rows from the T2 preference session; 16 T5 preference-navigation rows | observed (not EXP-053 test evidence; timing correlation only) |
| No visible log rows after the T5 OK and reopen, unlike T2 | **unresolved** (unexplained; §4.4) |
| The runtime close produced no visible log rows | observed (as rendered); whether unrendered entries exist is **unresolved** |
| Refresh-before-apply requirement | **not triggered** (Form event rows appeared after the OK and the clear) |
| Persistence across sessions; database-level durability | not tested; not claimed |
| Replay | not claimed |

## 12. Open items for the coordinator

1. Adjudicate the unexplained T5 log gap (§4.4). It does not affect AC-8, which is verified from the preference values.
2. Confirm acceptance of the procedure deviations D4, D5, and D6 (read-before-act not done in full in T4 and T5). No product effect was found.
3. Accept or reject the T3 report count correction (D2). The T3 report is not edited, as the T6 instruction requires.
4. The runtime FX_Items tab and the Diagnostic Log panel remain open. The brief did not ask for either to be closed. The coordinator should decide whether any later task closes them.
5. A later persistence check, if wanted, would need a separate authorized task. None is claimed.
