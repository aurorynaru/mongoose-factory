# EXP-056 — FINAL OUTCOME: BLOCKED at AC-8 (not accepted). Documentation-only finalization (T10)

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 12, task T10.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `9e214855-67ad-40dd-936b-a1e93462ec4f`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.
Browser calls in T10: **0**. Mongoose operations in T10: **0**. This report is built from the existing EXP-056 record and the T1–T9 reports and evidence files.

## 1. Outcome

**EXP-056 is BLOCKED and not accepted.** The mandatory postcondition AC-8 (recovery of the saved handler, the sequence-1 Set Values action, and the FX_VarTestEdit binding after one clean Designer close and one recent-forms reopen) is **FAILED**. The reason is that the single permitted recent-forms reopening attempt did not open the Form and the brief's lifecycle restriction forbids a retry. AC-9, AC-10, AC-11 and AC-12 are pending because the reopened Form and the runtime checks were never reached.

Everything before the reopen succeeded and is recorded below with its limitations: the T1 preflight, the 16-component baseline, the operator-authorised `P(FX_Description)` assignment, the Edit placement and binding, the single ordinary Designer Save with native success, and the clean Designer close.

## 2. The reopen failure, stated precisely

- The T9 click on the recent-forms menu item `FX_Items` (ref `e1655`) returned `TimeoutError … element is not visible` after the tool's retry loop (5 s). The tool log shows the locator resolved to the menu item but the click was never executed. The tool did not report a successful dispatch.
- Immediately after, the menu was closed and no FX_Items Form was open (`t9-snapshot-03`). After a 3-second read-only wait, still no Form (`t9-snapshot-04`).
- **Failed click attempt versus dispatched reopen:** the evidence shows a failed click attempt. It does not show a dispatched reopen operation. The absence of an open Form in two later snapshots is consistent with no reopen having been dispatched. It does not prove that none was dispatched. Whether a delayed server-side reopen would have occurred was not tested beyond the 3-second wait.
- **Root cause: not established.** The menu item was present and listed in the preceding snapshot (`t9-snapshot-02`, ref `e1655`) and then reported not visible at the time of the click. The reason it was not visible is not known, and this report does not assert one.
- **No retry was performed.** The brief permits one recent-forms reopen and prohibits repeating a Designer close/reopen when the expected result is missing. A second attempt would have violated that restriction, so none was made. No other navigation path was used.

## 3. Final acceptance matrix (AC-1 to AC-12)

| AC | Final status | Evidence (under `evidence/EXP-056/`) | Limits and proof boundary |
| --- | --- | --- | --- |
| **AC-1** Preflight: exact FX_Items, User scope, clean Designer and Web Client, Initial Command Refresh, single sequence-0 Prompt, three records | **Supported with limits** | `T1-preflight-report.md` §1; `t1-02` (handler), `t1-03` (components), `t1-04` (runtime, records and FX_Refresh, indicator `FX_Refresh (Object 1 of 3)`), `t1-05` (Variables); `t1-snapshot-00`, `-02`, `-04`, `-05`; re-verified T2 `t2-snapshot-00`, T8 `t8-snapshot-00` | Same browser session. Identity from displayed UI, not a credential check. Runtime records read at T1 only; the runtime was not re-read after that. |
| **AC-2** Complete 16-component inventory; original Variables collection; absence of FX_VarTest, FX_VarTestEdit, conflicting sequence-1 action | **Supported with limits** | `T1-preflight-report.md` §2–§5; `t1-snapshot-03`, `-04`; T2 `t2-snapshot-01` (filter `VarTest`, positive control `Initial`); T5 `t5-snapshot-01` (before Path A: sequence 1 existed as Set Values with blank Parameters; no assignment row, no conflicting Parameters) | Pane (00) and Pane (01): Binding, Location, Size and Events are **genuinely unavailable** (no Component property rows rendered). Not inferred. Global variable groups are virtualised; absence rests on the filter with a positive control. |
| **AC-3** Pre-Save two ordered actions: sequence 0 original Prompt; sequence 1 Set Values with FX_VarTest assignment using the supported Description expression | **Supported with operator-authorised adaptation** (pre-Save and immediate post-Save) | Sequence 1 created by New (T3: `t3-03`, `t3-snapshot-02`); Type Set Values (T4: `t4-09`, `t4-snapshot-12`); assignment committed (T5: `t5-02` pair readback, `t5-03` one-row list, `t5-04` committed summary `SETVARVALUES(FX_VarTest=P(FX_Description))`; `t5-snapshot-10`); sequence 0 read-only Parameters readback (T5 `t5-snapshot-12`; T7 `t7-snapshot-02`); pre-Save recheck T7 `t7-01`; T8 `t8-01`, `t8-snapshot-04` | **Expression adapted:** `P(FX_Description)` was used instead of the proposed `P(Description)`, on the operator's authority, because `FX_DescriptionEdit` is bound to `object.FX_Description`. The adaptation is recorded in the experiment record (T5) and here. The Target was typed as `FX_VarTest` (not chosen from the list). Runtime evaluation of the expression is **not tested**. Whether the Target stores a variable reference or a plain name is **not established**. |
| **AC-4** Pre-Save: Form Variables and Set Values Parameters captured separately; definition existence and sequence-1 assignment distinguished | **Supported** (pre-Save) | Definition absent: T2 `t2-snapshot-01`; T5 `t5-05`, `t5-snapshot-14`/`-15`; T6 `t6-snapshot-20`; T7 `t7-snapshot-03`. Assignment captured separately: T5 `t5-03`, `t5-04`; T7 `t7-01` | No definition exists, so no configured Value is exposed. The Set Values assignment row is not evidence of a Form-variable definition (kept separate throughout). |
| **AC-5** Exactly one FX_VarTestEdit: Type Edit, Binding Type Variable, Binding FX_VarTest, recorded Location and Size; 16 originals match baseline | **Supported** (T7, pre-Save) with limits | Placement and binding: T6 `t6-02`, `t6-05`, `t6-06`, `t6-snapshot-12`; comparison matrix T7 `T7-report.md` §2; `t7-snapshot-01`; `t7-02` | FX_VarTestEdit: Name `FX_VarTestEdit`, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Location `12.7222222222222; 30.25`, Size `37.05; 2`, Tab 0, Events blank. 15 of 15 originals match T1 on every field read in T7; Drag From / Drop On for FormCollectionGrid and FX_ItemGridCol carried from T1. Pane containers unavailable as in T1. **Components-grid Data Source cell for FX_VarTestEdit is blank** (observed; cause unresolved; not repaired). The Properties header read `edit1_USER (Edit)` after the rename and `FX_VarTestEdit (Edit)` after a real selection change (stale label resolved). |
| **AC-6** One ordinary Designer Save, native success, Save disabled; post-Save sequence-0 Prompt unchanged, sequence-1 retained, FX_VarTestEdit bound | **Supported** (mandatory gate met; **Designer-session observation only**) | T8: `t8-snapshot-05` (native message at line 1003: `Form [FX_Items] and global object(s) were saved.`; Save, Regenerate, Undo, Redo disabled at lines 10–54; handler rows at lines 298–310); `t8-snapshot-08` (Binding Type Variable, Binding `variables.FX_VarTest`, lines 809–822; Save disabled); `t8-01`, `t8-02`, `t8-04` | Native success is taken from the accessibility snapshot text. **The toast is not visible in the screenshot** (`t8-02`). The SaveChanges response body was not captured. The full sequence-0 Parameters were **not** re-opened after the Save (summary row only). The Components-grid Data Source cell remained blank after the Save. No durability or cross-session claim is made. |
| **AC-7** Immediately after the Save: FX_VarTest presence in Variables, recorded as observed | **Observation documented: ABSENT** | `t8-03` (Form category `InitialCommand` only); `t8-snapshot-06` (filter `VarTest`: no rows) | Observation only. The definition was not recreated. Satisfies AC-7 as an observation; it is not a pass/fail gate. |
| **AC-8** One clean Designer close and one native recent-forms reopen recover User-scoped identity, original Prompt, sequence-1 Set Values, FX_VarTestEdit binding; Save disabled; originals match baseline | **FAILED** (mandatory gate) | Close clean: T9 `t9-01`, `t9-snapshot-00`, `t9-snapshot-01` (Form tablist empty; no dialog; Save disabled). Reopen not established: `t9-snapshot-02` (menu item `FX_Items` listed), `t9-snapshot-03` and `t9-snapshot-04` (no Form), `t9-02` (empty canvas) | The one permitted reopen did not open the Form (see §2). None of the AC-8 recovered properties could be read from a reopened Form. The failure is the exhausted reopen allowance plus no completed reopen; the brief forbids a retry. This is not a claim about what the saved Form contains. |
| **AC-9** After reopen: FX_VarTest visibility in Form Variables recorded independently | **Pending / not evaluable** | No reopened Form. `t9-snapshot-03`/`-04` show no Form. | Not a retention gate. No failure is recorded for AC-9; retention is **not established** either way. The definition was not recreated. |
| **AC-10** Runtime: one clean Web Client tab closure and exactly one Select Form opening; Prompt recorded and dismissed once with OK | **Pending / not established** | Not performed. The Web Client tab remains on the inherited T1 runtime (`t1-04`). | 0 of 1 runtime closures; 0 of 1 Select Form openings. |
| **AC-11** Settled runtime: displayed FX_VarTestEdit value equals the Description of the same selected item | **Pending / not established** | Not performed. | The T1 runtime screenshot (`t1-04`) shows dumbbell Description `45 pound iron` and indicator `FX_Refresh (Object 1 of 3)`, but **FX_VarTestEdit did not exist at T1**, so it is not a value test. No runtime value was observed for FX_VarTestEdit. |
| **AC-12** Final runtime: three records unchanged, FX_Refresh rendered, Save disabled, object indicator; final acceptance matrix | **Pending / not established** | Final runtime checks not performed. This matrix is the reconciliation. | The only runtime evidence is the T1 pre-mutation inherited tab. The three records and FX_Refresh were observed only then. |

## 4. Variable-definition state at the four checkpoints (observed; not gates)

| Checkpoint | State | Evidence | Note |
| --- | --- | --- | --- |
| 1. Pre-Save (before the assignment and Edit) | **Absent** | `t2-snapshot-01`; `t5-05` | Filter with positive control; Form category `InitialCommand` only. |
| 2. Pre-Save, after the assignment and Edit (T5–T7) | **Absent** | `t5-05`, `t6-snapshot-20`, `t7-snapshot-03`, `t7-02` | Assignment row present; definition still absent. |
| 3. Immediately after the single Save (T8) | **Absent** | `t8-03`, `t8-snapshot-06` | AC-7 observation. |
| 4. After the Designer close and reopen attempt (T9) | **Not observed** | No reopened Form (`t9-snapshot-03`/`-04`) | The reopen was not completed, so the Variables collection could not be read. |
| 5. Web Client runtime (not performed) | **Not observed** | — | No runtime opening. The brief's "four checkpoints" are reported as 1–4 above, with checkpoint 4 covering the reopen. Runtime was never reached. |

Summary: FX_VarTest was **absent as a distinct Form-variable definition before Save and immediately after Save**. Its visibility after reopen was **not observed**. The assignment row (`FX_VarTest=P(FX_Description)`) was present at every checkpoint and is a different object from the definition.

## 5. Preserved observations and their boundaries

- **Set Values assignment (sequence 1):** committed through the native Parameters, Variables list and value-pair dialogs (T5); summary `SETVARVALUES(FX_VarTest=P(FX_Description))` retained through T8. Observed in one Designer session.
- **Target and Binding semantics:** the Set Values Target and the Edit Variable Binding both accepted a typed `FX_VarTest` and retained it on Tab / before OK. Both were typed because the name was not in the dropdown, on the operator's conditional authority for the Binding. Whether either stores a reference to a real Form variable or a plain name is **unresolved**.
- **Blank Components-grid Data Source for FX_VarTestEdit:** observed before and after Save; the Binding readback shows `variables.FX_VarTest`. Cause **unresolved**. Not repaired.
- **Pane (00) and Pane (01):** Binding, Location, Size and Events unavailable (as in T1). Not inferred.
- **Designer console:** `TypeError: … reading 'adorner'` entries were logged on Pane selections in T1 (and the console counter read 2–3 errors through later tasks). Not investigated, per the brief.
- **Native Save (T8):** observed as a Designer-session success message in the accessibility tree; not a durability proof.

## 6. Action-budget reconciliation

| Item | Budget | Used | Notes |
| --- | --- | --- | --- |
| Designer Save (ordinary) | 1 | **1** (T8) | No retry. No Regenerate Form. No second Save. |
| Designer Form close (clean) | 1 | **1** (T9) | No unsaved-change prompt. |
| Recent-forms reopen | 1 | **1 attempted; 0 completed** (T9) | Click not executed (element not visible); no Form opened; not retried. |
| Web Client runtime closure | 1 | **0** | Not performed. |
| Select Form opening | 1 | **0** | Not performed. |
| Automatic Prompt dismissal (OK) | 1 | **0** | No Prompt was observed (no opening). |
| FX_RefreshButton activation | 0 permitted | **0** | Not used (permitted only through the automatic opening path; none occurred). |
| Regenerate Form | 0 | **0** | — |
| Runtime business-data edits, inserts, deletes | 0 | **0** | None. |
| Diagnostics, Diagnostic Log, User Preferences, cache unload, FormSync, check-in/out, SQL, scripts, internal APIs | 0 | **0** | None. |
| Deliberate login / reauthentication / logout / browser restart | 0 | **0** | None. |
| Repeated failed inspections | — | 4 timeouts in T1 (2 screenshot, 2 click), all before the first successful tab select; 1 ref-not-found in T6 (no action executed) | Recovery allowance in T1 reconciled in T2 (one fresh snapshot and one corrected click). |

Designer-side action totals across T3–T9 (for reconciliation with the per-task reports):
- Handler groups added: 1 (`StdFormRefreshCompleted`, T3). Sequence-1 action rows added: 1 (T3). Sequence-0 Prompt changed: 0.
- Response Type set on sequence 1: 1 (T4, Set Values).
- Set Values assignment committed: 1 (T5). Set Values pair dialogs OK: 1; list OK: 1; Parameters OK: 1 (T5).
- Parameters Cancel (no change committed): T4 (1, cancelling the sequence-1 Parameters dialog after the list and pair dialogs were cancelled), T5 (1, read-only sequence-0 readback), T7 (1, read-only sequence-0 readback), T8 (0).
- Components placed: 1 (T6). Renames: 1 (T6, the new component only). Binding Type set: 1 (T6). Binding set: 1 (T6).
- Form variables created: **0**. Original components edited: **0** (verified T7 and T8 grid).
- Designer Save: **1** (T8).

## 7. Corrections made during the run (documentation only, already in the records)

- T1 §8.2 timeout accounting corrected in T2 (4 timeouts; one fresh snapshot and one corrected click used; the earlier "two fresh snapshots" wording withdrawn).
- T3 screenshot count and T4 click count corrected in their reports.
- T6 stale-ref error recorded (one `e1653` reference used from memory; no action executed).
- T6 Properties-header staleness resolved in T7 by a genuine selection change.
- T7 click count and drag/drop coverage qualified in T7's report.
- T8 screenshot count corrected in T8's report.

## 8. Proof limitations (consolidated)

1. The T8 Save success is a **Designer-session observation** from the accessibility snapshot. The toast is not visible in the screenshot. The SaveChanges response body was not captured. No cross-session, server-side, or independent database durability is claimed.
2. Saved-state recovery (AC-8) was **not** observed. The saved handler, binding and components were read only in the session that performed the Save, before the close.
3. The FX_VarTest definition was not observed after reopen. Its absence before and after the Save is a Designer-session observation; it is not a retention result, and the brief makes retention not a gate.
4. The runtime value (AC-11) and the runtime behaviour of the expression `P(FX_Description)` were **not tested**. The adaptation from `P(Description)` is therefore unverified at runtime.
5. Pane (00) and Pane (01) properties are unavailable in the native UI. Global variable rows were checked by a filter, not by full enumeration.
6. The blank Data Source cell and the Target/Binding reference semantics are unresolved.
7. The root cause of the reopen menu-item visibility failure is unknown.
8. Accessibility-tree readings are the primary evidence; several screenshots were supporting only (see per-task reports).

## 9. Evidence files (repo-relative, `evidence/EXP-056/`)

Per-task reports: `T1-preflight-report.md`, `T2-report.md`, `T3-report.md`, `T4-report.md`, `T5-report.md`, `T6-report.md`, `T7-report.md`, `T8-report.md`, `T9-report.md`, and this report `T10-final-blocked-report.md`.

Screenshots (PNG):
- T1: `t1-02-…-one-handler.png`, `t1-03-…-components-inventory-16-rows…png`, `t1-04-…-runtime…png`, `t1-05-…-no-FX_VarTest.png` (`t1-01` was not written; its screenshot call timed out before a tab select).
- T2: `t2-01-…`, `t2-02-…`, `t2-03-…`, `t2-04-…`.
- T3: `t3-01-…`, `t3-02-…`, `t3-03-…`.
- T4: `t4-01-…` through `t4-10-…`.
- T5: `t5-01-…` through `t5-05-…`.
- T6: `t6-01-…` through `t6-07-…`.
- T7: `t7-01-…`, `t7-02-…`.
- T8: `t8-01-…` through `t8-04-…`.
- T9: `t9-01-pre-close-clean-saved-form.png`, `t9-02-after-failed-reopen-click-no-form-open.png`.

Accessibility snapshots (markdown): `t1-snapshot-00` to `-05`; `t2-snapshot-00` to `-04`; `t3-snapshot-00` to `-02`; `t4-snapshot-00` to `-13`; `t5-snapshot-00` to `-15`; `t6-snapshot-00` to `-20`; `t7-snapshot-00` to `-03`; `t8-snapshot-00` to `-08`; `t9-snapshot-00` to `-04`.

Tool-generated (gitignored, not worker-authored): `evidence/playwright/page-2026-10-11T*.yml` and console logs cited in the per-task reports.

Experiment record: `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md`.

## 10. Final browser state

- Designer (tab 0): empty canvas; **no Form open**; Save disabled; no dialog; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. The Designer was left as T9 left it.
- Web Client (tab 1): the inherited FX_Items runtime tab from before T1, not interacted with since the T1 read-only capture. No runtime closure, opening, dismissal, or activation was performed.
- No browser-native dialog and no unsaved-change prompt is open. The Designer has no unsaved changes (Save disabled).

## 11. Repository-change confinement (T10)

Written in T10:
- `evidence/EXP-056/T10-final-blocked-report.md` (created; this report).
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: a final BLOCKED status line at the top of the status block, and a T10 final section with the acceptance summary).

No other repository files were written. No other experiment record, `AGENTS.md`, `docs/`, recipes, `tools/`, or non-`FX_` artifact was touched. The harness computes authoritative confinement from before/after Git state.

## 12. Not done (by design)

- Not reopened again; no retry of the failed reopen.
- No runtime opening, no FX_RefreshButton activation, no runtime data change.
- No Save, no variable creation or repair, no component or handler change.
- No new experiment, replay, or workaround proposed.
