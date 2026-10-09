# EXP-035 — T7 final acceptance audit (repository-only; NO browser interaction)

Run R-20261009-204056-HY76, cycle 7, task T7. worker_session_id d2542b8f-3084-40fb-9b36-4ac05475c28b; task_message_id 9775e38a-ae29-4d1a-b88c-0f6073edfc12.

Scope of this task: read the EXP-035 record, all T1–T6 audit notes, the decisive snapshots and screenshots (images inspected in this task), and the repository file inventory. No browser tool was called. No live-browser state was read; final browser state is taken from the saved T6 evidence only.

## §A Limits of this audit (read first)

1. **The operator-approved EXP-035 brief could not be read by the worker** (`tools/` is unreadable by instruction). The acceptance checks below are therefore the checks stated in the task messages (T1–T7 text) and in the EXP-034 pattern they mirror. The coordinator must confirm this list against the approved brief before accepting. The worker-drafted AC map written in T1 in the record used different numbering and was never updated after T1; it is superseded by §B here.
2. **No shell was available** (Bash is not enabled for this worker), so `git status` could not be run. The repository-change audit in §E relies on the worker's own write log and on the directory inventory, not on git.
3. Screenshots were re-inspected in this task: `t2-02`, `t3-04`, `t4-03`, `t5-04`, `t6-03` (viewed as images, not by filename).

## §B Acceptance matrix (coordinator numbering from the T7 instruction; checks not in the brief are marked)

| Check | Status | Supporting evidence (repo-relative) | What it proves | Limitations |
|---|---|---|---|---|
| **AC-1** Read-only preflight; Select Form closed; one browser tab; Web Client usable; initial ordinary Open (1) and inherited dialog state recorded before change | **PASS** | `evidence/EXP-035/t1-preflight-notes.md`, `t1-01-preflight-webclient-viewport.png` (viewed: identity bar, DEM badge, Explorer, no dialog); `t2-open-inherited-state-notes.md` §B–§D; `t2-01-dialog-open-inherited-snapshot.md`; `t2-02-dialog-open-inherited-viewport.png` (viewed: Filter By `Caption`, empty focused Filter, both boxes empty, populated list) | Dialog was closed before Open; one toolbar Open; inherited Filter text empty, Filter By `Caption`, Case Sensitive and Starts With unchecked; saved snapshot holds 47 rendered rows (see §D correction 1) | Configuration selection and "no unsaved Designer changes" are operator attestations (no Designer tab visible; see row AC-P below). Row count is from the accessibility snapshot, not checked against a grid total. |
| **AC-1a** Brief requires the EXP-033/R2/R3/R4 and EXP-034 review to be complete **before** any browser interaction | **FAIL (as written; disclosed)** | Ordering: `t1-preflight-notes.md` §A (T1 review), `t2-open-inherited-state-notes.md` §A (completion in T2) | T1's read-only browser preflight (tab list, snapshot, screenshot, two finds) preceded the complete review. The EXP-034 decisive evidence and most of EXP-033/R3/R4 were not read until T2. | No mutating action occurred in T1. The read-only T1 calls did not change the dialog-closed state observed later, so the observation is not affected. The check still fails as written. |
| **AC-2** Filter By=Name, Case Sensitive and Starts With unchecked through rendered controls; native Control+a then Backspace; the 25 individual printable-key operations in order | **PASS** (execution); clear-step effect **not attributable** (see limitation) | `t3-action-audit-notes.md` §B–§F (Filter By trigger click, Name option click, read-back `combobox: Name`, checkboxes unchanged, textbox click, `Control+a` success, `Backspace` success); `t3-03-post-clear-settled-snapshot.md`; `t3-04-post-clear-dialog-viewport.png` (viewed: Name, empty focused Filter, boxes empty); `t4-action-audit-notes.md` §B (25 calls, all success, in order); `t4-02-settled-pre-cancel-snapshot.md` | Each native call returned success in order; the 25 characters match `F X _ C o m p o n e n t R e c o v e r y L a b 0 2` (count checked: 3+9+8+3+2 = 25); no `type`, fill, paste, or chord text | The textbox was **already empty** when T3 began (inherited empty at T2, no change before the clear), and the grid was already the full list at T2. So the empty textbox and full list after the clear cannot be attributed to Control+a/Backspace. The worker did not observe individual key events. |
| **AC-3** Settled single rendered row with Name exactly `FX_ComponentRecoveryLab02`, textbox exact, captured before lifecycle testing | **PASS** | `t4-02-settled-pre-cancel-snapshot.md` lines 118–125 (one table, one row, two gridcells `FX_ComponentRecoveryLab02`; `textbox [active] [ref=f1e400]: FX_ComponentRecoveryLab02`; Filter By `Name`; both checkboxes without checked marker); `t4-03-pre-cancel-settled-viewport.png` (viewed: one row in both columns; Filter By `Name`; boxes empty) | Exact textbox value and exactly one matching row, captured before the Cancel | Image clips the textbox's leading characters; exact value comes from the accessibility line. Checkbox states inferred from missing `[checked]` marker plus the image. Row highlight is default selection; no row was clicked. |
| **AC-4** Exactly one ordinary Cancel, then exactly one ordinary toolbar reopen, with no change to the filter in between | **PASS** | `t5-lifecycle-audit-notes.md` §B–§C; `t5-02-post-cancel-closure-snapshot.md` (no dialog node; toolbar Open enabled); `t5-03-post-reopen-settled-snapshot.md` (dialog present) | One Cancel click (`f1e127`), closure verified by `find` (no matches) and snapshot; one toolbar Open click (`f1e23`), dialog displayed; no filter change in between | Closure and reopen are verified by accessibility, not by timing. Cancel and Open each returned success on the first attempt. |
| **AC-5** After the single reopen, record the actual textbox, Filter By, both checkboxes and rendered rows without typing or changing anything; compare against pre-Cancel | **PASS** (observation recorded and compared) | `t5-03-post-reopen-settled-snapshot.md` lines 122–135 (textbox `[active]: FX_ComponentRecoveryLab02`; `combobox: Name`; checkboxes with no checked marker; one row, both cells exact); `t5-04-post-reopen-viewport.png` (viewed: one row; Filter By `Name`; boxes empty; filter text shown highlighted); `t5-lifecycle-audit-notes.md` §E comparison table | Observed rendered state after one Cancel/reopen: textbox, Filter By, both checkboxes, and the single row each matched the pre-Cancel values. Per the brief, retention is an observation, not a pass/fail requirement. | Checkbox states from accessibility absence and image. Textbox leading characters clipped in image. The post-reopen highlight of the filter text has no established cause (no worker action preceded it). |
| **AC-6** Lifecycle accounting: ≤1 initial Open, exactly 1 tested Cancel, exactly 1 tested reopen, ≤1 final Cancel, no reopen after it; zero Enter/OK, row activation, bulk entry, auth, JS; recovery allowance reported | **PASS** | §C below (count reconciliation); each task's audit notes | Counts reconcile exactly to the brief limits; recovery allowance 0 used / 1 remaining | Counts come from the worker's own call log for each task. Tool-generated click/press code is discussed in §F. |
| **AC-7** Repository confinement: writes only to the EXP-035 record and `evidence/EXP-035/`; historical records not changed; no reusable recipe changes | **PASS** (worker-authored writes); git-based confirmation **not available to this worker** | §E | Every worker-authored write is inside the permitted paths | No shell, so git status was not run; see §E. |
| **AC-8** Final ordinary Cancel after evidence capture; closure verified; no reopen after it; final browser state recorded | **PASS** | `t6-01-pre-final-cancel-guard-snapshot.md` (pre-Cancel guard: same state as T5); `t6-02-post-final-cancel-closure-snapshot.md` (no dialog node; identity bar; toolbar Open enabled; Save disabled; single `Mongoose` tab selected); `t6-03-post-final-cancel-viewport.png` (viewed: Web Client, no dialog) | Dialog closed on the first final Cancel; no reopen; Web Client usable | Final state is taken from T6 saved evidence, as instructed; no live check in T7. |
| **AC-P** Preflight prerequisites: operator-logged-in Web Client with configuration selected/OK; normal page loaded; Select Form closed; no unsaved Designer changes; exactly one browser tab | **PASS** for worker-observed items; **operator-attested** for configuration and unsaved Designer state | Observed: `t1-preflight-notes.md` §B–§C; `browser_tabs` list = one entry; identity bar in `t1-01` and `t2-02` | Worker observed: one tab; Web Client loaded with identity bar, DEM badge and toolbar; no sign-in or configuration screen; Select Form closed before Open. | Configuration selection itself: operator attestation. Absence of unsaved Designer changes: **not independently verifiable** — no Designer tab was visible in this browser (EXP-034 had one; not explained). |
| **AC-D** Inherited Designer context inspected read-only and preserved | **PASS** (nothing to preserve in this browser) — **limitation** | `t1-preflight-notes.md` §B | No Designer tab existed; no action was taken on any Designer element | The brief's Designer-context check has no observable Designer state in this run. |
| **AC-K** Knowledge classification: retained rendered state recorded as observed, not replay_verified | **PASS** | Record "Knowledge state" section (updated in T7); §G below | Classification as instructed | — |

Summary of individual checks: PASS 9 (AC-1, AC-2, AC-3, AC-4, AC-5, AC-6, AC-7, AC-8, AC-K) plus AC-P and AC-D PASS with operator-attested or limited items; **FAIL 1** (AC-1a, the review-before-interaction ordering); no check is PENDING in the worker's own evidence.

## §C Cumulative action-count reconciliation (T1–T6)

Mutating browser actions issued by the worker (from each task's audit notes; cross-checked against the per-task tool sequence recorded in the notes):

| Task | Action | Count |
|---|---|---|
| T1 | none (read-only: tab list ×1, snapshot ×1, screenshot ×1, find ×2) | 0 |
| T2 | toolbar Open click (`f1e23`) | 1 |
| T3 | Filter By trigger click (`f1e407`); Filter By option Name click (`f1e427`); textbox focus click (`f1e400`); `press_key Control+a` ×1; `press_key Backspace` ×1 | 5 |
| T4 | `press_key` ×25 (one printable character each) | 25 |
| T5 | Cancel click (`f1e127`); toolbar Open click (`f1e23`) | 2 |
| T6 | Cancel click (`f1e127`) | 1 |

Reconciled totals against the brief limits:

| Measure | Brief limit | Observed | Result |
|---|---|---|---|
| Initial ordinary Open | exactly 1 | 1 (T2) | PASS |
| Tested ordinary Cancel | exactly 1 | 1 (T5) | PASS |
| Tested ordinary reopen | exactly 1 | 1 (T5) | PASS |
| Final ordinary Cancel | at most 1, no reopen after | 1 (T6), no reopen after | PASS |
| Printable one-character native key operations | exactly 25 | 25 (T4), all success, no duplicates, in order | PASS |
| Native `Control+a` | exactly 1 | 1 (T3) | PASS |
| Native `Backspace` | exactly 1 | 1 (T3) | PASS |
| Enter / OK pressed in Select Form | 0 | 0 | PASS |
| Row click / activation | 0 | 0 | PASS |
| Bulk text, `browser_type`, fill, clipboard, chord-as-text | 0 | 0 | PASS |
| Authentication, reauthentication, log-out, session replacement | 0 | 0 | PASS |
| JavaScript / evaluate / run-code authored by worker | 0 | 0 | PASS (see §F) |
| Preference, unload, Mongoose artifact changes | 0 | 0 | PASS |
| Filter By changes | 1 (Caption → Name) | 1 (T3) | consistent with brief |
| Checkbox toggles | 0 | 0 | PASS |
| Textbox focus clicks | as needed | 1 (T3) | consistent with brief |
| Mutating browser actions total | — | 34 (clicks 7; press_key 27) | — |

Ambiguity-recovery allowance (shared across all EXP-035 tasks): **0 used / 1 remaining.** Each task's notes record no stale-ref error, no timeout, and no ambiguous read. Planned snapshots, finds and screenshots were recorded as evidence captures and were not counted as recovery.

## §D Corrections found during this audit (recorded; not silently fixed)

1. **Inherited row count (T2).** `t2-open-inherited-state-notes.md` §D says "15 rowgroup blocks" and the T2 record entry says "exact total not established — snapshot elided." Both are wrong. The 15 came from a grep regex (`rowgroup \[ref=f1e(9[6-9]|1[0-9]{2,3})\]`) that matches only ref numbers starting with 9 or 1, so it missed refs starting with 2 or 3. A plain count of `- rowgroup [ref=` in the saved snapshot `t2-01-dialog-open-inherited-snapshot.md` returns **47**. The saved file contains no elision markers; the `...` markers appeared only in the `browser_find` tool output. Corrected value: **47 rendered rows** in the saved accessibility snapshot at Open (each rowgroup holds one row with two gridcells). This is not verified against the grid's own count.
2. **Ordering of the T1 review.** The T1 record entry says the records were "reviewed before browser interaction." That overstates T1: the EXP-033 original and R3 were only grepped, EXP-033-R4 was read to line 45, and the EXP-034 decisive evidence was not read until T2. The accurate statement is in AC-1a above.
3. **T1 AC map.** The record's T1 acceptance map (AC-1..AC-7) was worker-drafted, its numbering differs from the T7 coordinator mapping, and AC-2–AC-6 stayed PENDING after execution. It is superseded by §B.
4. **Clear-step attribution.** The T3 notes state the post-clear textbox is EMPTY and the list is full. Both states were already present before the clear (T2). The clear's effect is therefore not separately observed. This is recorded as a limitation under AC-2, not as a failure.

## §E Repository-change audit (worker-authored writes)

Worker-authored files this experiment (all inside the permitted boundary):
- `experiments/EXP-035-select-form-positive-state-retention-across-one-ca.md` — created in T1 (no copy existed in the working tree; see §G question), edited in T2–T6 and T7.
- `evidence/EXP-035/` — 20 files from T1–T6 (listed in §H) plus this audit file.

Files the worker did not author but which the tool produced:
- `evidence/playwright/` (console logs and page snapshots written by the Playwright MCP tool). `.gitignore` line 10 lists `evidence/playwright/`, so these are ignored, and the worker did not read or edit them.
- `.playwright-mcp/` is also ignored (`.gitignore` line 11).

Historical records: no edits to any `experiments/EXP-0xx` file other than EXP-035. No edits to recipes, AGENTS.md, environment docs, or `tools/`. The worker did not read `tools/` (instruction).

Limitation: without a shell, the worker could not run `git status` for a before/after comparison. The harness computes confinement from git state itself; that result is authoritative.

## §F Tool-generated code in action results

Each browser action result contains a "Ran Playwright code" block showing the code the MCP tool executed (for example `page.keyboard.press('F')`, or a `contentFrame().getByRole(...).click()` locator). The worker did not author or submit any of this code; it is the tool's own wrapper for the permitted click and key actions. Reviewers should judge whether that is acceptable under the no-JavaScript rule. The worker's position is that no evaluate or run-code tool was called and no JavaScript was written.

## §G Knowledge classification (per finding)

- Retained rendered state across one ordinary Cancel and one ordinary reopen (textbox `FX_ComponentRecoveryLab02`, Filter By `Name`, Case Sensitive and Starts With unchecked, one matching row): **observed** (single run, EXP-035 T5). Not replay_verified.
- Native-key procedure (Control+a, Backspace, 25 one-character presses) settling one exact row in this run: **observed** in EXP-035 (T3/T4). The replay_verified status remains with EXP-033-R2 and R4 only; not promoted here.
- Clear-step effect (textbox emptied by Control+a/Backspace): **unresolved** — the textbox was already empty before the clear.
- Inherited state at Open (Filter By `Caption`, empty textbox, full list, 47 rendered rows in the saved snapshot): **observed**.
- Highlight of the filter text on reopen: **observed** (rendered); cause **unresolved**.
- Any database, cache, persistence, serialization, server-refresh or internal-store mechanism behind the retention: **unresolved / not inferred**.

## §H Evidence inventory (EXP-035 directory, as listed by the inventory in T7)

T1: `t1-preflight-notes.md`, `t1-01-preflight-webclient-viewport.png`
T2: `t2-open-inherited-state-notes.md`, `t2-01-dialog-open-inherited-snapshot.md`, `t2-02-dialog-open-inherited-viewport.png`
T3: `t3-action-audit-notes.md`, `t3-02-pre-focus-current-refs-snapshot.md`, `t3-03-post-clear-settled-snapshot.md`, `t3-04-post-clear-dialog-viewport.png`
T4: `t4-action-audit-notes.md`, `t4-02-settled-pre-cancel-snapshot.md`, `t4-03-pre-cancel-settled-viewport.png`
T5: `t5-lifecycle-audit-notes.md`, `t5-02-post-cancel-closure-snapshot.md`, `t5-03-post-reopen-settled-snapshot.md`, `t5-04-post-reopen-viewport.png`
T6: `t6-01-pre-final-cancel-guard-snapshot.md`, `t6-02-post-final-cancel-closure-snapshot.md`, `t6-03-post-final-cancel-viewport.png`, `t6-final-cancel-audit-notes.md`
T7: `t7-final-acceptance-audit.md` (this file)

## §I Final browser state (from saved T6 evidence only; no live check in T7)

Per `t6-02-post-final-cancel-closure-snapshot.md` and `t6-03-post-final-cancel-viewport.png`: Select Form CLOSED (no dialog node); Web Client loaded with identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar Open enabled; Save disabled; a single `Mongoose` tab selected in the portal tab strip; no sign-in, configuration, or browser-native dialog recorded. The last recorded browser action is the T6 final Cancel; no reopen followed it.

## §J Disposition (recommendation to the coordinator)

**Recommended disposition: AWAITING COORDINATOR ACCEPTANCE — not accepted by the worker.**

- The execution sequence and observations are clean in all in-sequence checks (AC-1 through AC-8, AC-P, AC-D, AC-K), with the limitations listed above.
- One check fails as written: AC-1a, the review-before-interaction requirement. It was disclosed when found; the read-only T1 calls did not change the state observed later. The coordinator must rule on whether this is acceptable.
- The worker could not read the operator-approved brief, so the check list in §B is the one stated in the task messages. The coordinator must confirm it, and confirm the record's numbering.
- Operator-attested items (configuration selection; no unsaved Designer changes) are not independently verifiable from this browser.
- The retention finding is observed in one run only. It should not be promoted or cited as replay_verified.

## §K Open questions

1. Does the approved brief's AC list match §B? (Worker could not read it.)
2. Should AC-1a be waived, or should the experiment be rerun from a fresh preflight to clear the ordering deviation?
3. Was the EXP-035 record present in git history before T1? (The working tree did not contain it at T1; git could not be queried.)
4. Why did the Designer tab present in EXP-034 T1 not appear in this run? (Not explained; not inferred.)
5. Does the coordinator accept tool-generated code in action results as non-JavaScript (see §F)?
