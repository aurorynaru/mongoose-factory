# EXP-057 — Final acceptance matrix, cumulative reconciliation, and repository confinement audit (T9)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 8. Task header `task=T9`; bounded instruction **final documentation and audit only**.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `ca451781-8c3a-416f-97f5-c4c868e17561`.
Date: 2026-10-11.

**Browser calls in this task: 0.** No Mongoose interaction. Both browser tabs were left as the T8 task left them (see section 7).

## 0. Proposed outcome

**Proposed outcome: BLOCKED.** The exact failed check is **AC-11, the repository confinement component**: strict confinement cannot be demonstrated from this session (no shell or git tool is available to the worker, so no live repository diff could be run; see section 6). No experimental acceptance check AC-1 through AC-10 failed. Their observed results are classified as **observed**, with the limitations listed below.

If the harness's own before/after repository diff shows changes only in `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` and `evidence/EXP-057/` (plus the tool-generated, gitignored `evidence/playwright/` captures documented in section 6), the proposed outcome becomes **accepted, observed classification**.

Two results need reviewer judgement, though both pass their written criteria:
- **AC-8** passed on exact equality, but the displayed value was already `45 pound iron` before the refresh and was the same after. The pass therefore does not demonstrate refresh-time evaluation of `P(FX_Description)`.
- **AC-5** passed on evidence of presence, which contradicts EXP-056's repeated absence reports. The contradiction is unresolved.

## 1. Acceptance matrix (AC-1 to AC-11)

All evidence paths are under `evidence/EXP-057/` unless stated. "Pass" means the written check is satisfied in this single session, observed, and not replay-verified.

| AC | Check (summary) | Result | Observed outcome | Evidence | Limitations and unresolved items |
| --- | --- | --- | --- | --- | --- |
| AC-1 | Read-only preflight: tabs listed before first select; empty Designer Form list; clean controls; User scope; inherited runtime state; separate captures; reconciliation with EXP-056 | **Pass (with limits)** | Tab list before first select (tab 0 Designer, tab 1 runtime). Designer: no Form open, Save/Regenerate/Undo/Redo disabled, footer User / `anton.ramos@3mworks.com.ph`, no dialog. Runtime: FX_Items tab, three records, FX_Refresh, Save disabled, no FX_VarTestEdit. Reconciles with EXP-056 T10 final state. | `T1-preflight-report.md` §1–§6; `t1-01-…png`, `t1-02-…png`; `t1-snapshot-00`, `t1-snapshot-01` | Form-level scope unreadable before a Form is open (resolved later in T2A). Designer console showed 3 errors (EXP-056 recorded 2); the third is unidentified. Runtime state from rendered UI only. The inherited runtime's load log shows zero `StdFormRefreshCompleted` handlers at 07:08:00, which suggests it loaded before the handler existed. This is an inference, not reconciled. |
| AC-2 | Exactly one FX_Items Designer Form opened by the authorized route; routes, results, retry counts recorded; Name, ScopeType User and ScopeName verified; Save disabled; no error dialog | **Pass** | Recent-forms attempt 1 succeeded first time (no timeout). Retries 0. Alternative Open toolbar 0. Verified: Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (matches EXP-056); Save, Regenerate, Undo, Redo disabled; no dialog. | `T2A-recovery-report.md` §1–§2; `t2-snapshot-00`, `-01`, `-02`; `t2-01-…png` | Footer ScopeName is a Designer-level label; Form-level identity is from Properties > Design (Name, Version). Why the EXP-056 T9 reopen failed is still unexplained. |
| AC-3 | Initial Command Refresh; one `StdFormRefreshCompleted` group; sequence 0 Prompt with Hello World and OK; sequence 1 Set Values with exact summary; handler grid and native parameter readback without edits | **Pass** | Initial Command `Refresh`. One group. Row 0 Prompt, Disabled false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Row 1 Set Values, Disabled false, `SETVARVALUES(FX_VarTest=P(FX_Description))`. Both Parameters dialogs read and Cancelled (no commit). | `T2B-handler-verification-report.md` §3–§6; `t3-snapshot-03`, `-04`, `-05`, `-07`, `-08`, `-09`; `t3-01`…`t3-04` | Icon radio and Keep combobox are screenshot-only (not exposed in the accessibility tree). Expression `P(FX_Description)` was not evaluated here. Matches EXP-056 T1 and T8 summaries. |
| AC-4 | Exactly 16 originals plus one FX_VarTestEdit; FX_VarTestEdit Name, Type, Binding Type, Binding, Location `12.7222222222222; 30.25`, Size `37.05; 2`, unchanged Events; FX_RefreshButton and FX_DescriptionEdit present; unavailable fields recorded | **Pass (with limits)** | 17 Components entries (16 originals plus one FX_VarTestEdit). All 16 original grid rows match EXP-056 T8 on Name, Type, Data Source, Pane, Container, Tab, Event to generate. FX_VarTestEdit: Name, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Location `12.7222222222222; 30.25`, Size `37.05; 2`, Tab 0, Caption blank, all four Events blank, Drag/Drop 0/0. FX_RefreshButton and FX_DescriptionEdit match EXP-056 T1/T6/T7. | `T2C-component-inventory-report.md` §3–§6; `t4-snapshot-02`, `-03`, `-04`, `-05`; `t4-01-…png`, `t4-02-…png` | **Unresolved discrepancy:** FX_VarTestEdit's Components-grid Data Source cell reads `variables.FX_VarTest` now; EXP-056 T6–T8 recorded it blank. Cause not established; not repaired. Unavailable: Pane (00) and Pane (01) properties (not rendered in EXP-056 either). FX_DescriptionEdit Drag/Drop not re-read in T2C (carried from EXP-056: 0/0). |
| AC-5 | After recovery, Variables tab independently inspected for a distinct FX_VarTest Form-variable definition; presence or absence recorded with category and filter evidence; Designer clean | **Pass (on evidence of presence)** | Form - Temporary lists `FX_VarTest`. Exposed attributes: Name `FX_VarTest`; Description blank; Value `~LIT~()`; Persistent `False`; Global `False`. Exact-name filter `FX_VarTest` returns the row. Positive control `Initial` returns `InitialCommand` (Form - Persistent). Designer clean: Save disabled, no dialog after the filter was cleared. | `T2D-variables-verification-report.md` §3–§7; `t5-snapshot-03`, `-04`, `-05`, `-06`, `-07`, `-08`; `t5-01`, `t5-02`, `t5-03` | **Unresolved contradiction:** EXP-056 T1, T2, T4–T8 and the T10 final report record FX_VarTest **absent**; the same string `VarTest` returns the row here. Cause not established (three untested candidates in T2D §6). Global - Temporary not rendered; Global rows virtualised. Persistence across saves or sessions not established. Existence was not inferred from the Set Values assignment, the Edit binding, or the Data Source cell. |
| AC-6 | Inherited runtime tab closed exactly once; FX_Items opened exactly once via Open > Select Form; automatic Hello World prompt captured before one OK; runtime Form identified; counts recorded | **Pass** | Closure: 1 (Close Panel FX_Items). Opening: 1 (toolbar Open, then Select Form OK; the Select Form dialog listed one row, FX_Items / FX_Items). Prompt: 1, `alertdialog` "Infor Mongoose Application Development Framework - FX_Items", message `Hello World`, captured before response. OK: 1. | `T3-runtime-opening-report.md` §1–§3; `t6-snapshot-00`…`-05`; `t6-01`…`t6-06` | Runtime Form identity comes from the prompt title, the tab heading, and the single Select Form row. The first Open snapshot was taken before the dialog rendered (no second click). The DevTools log was not checked for the T3-opened instance. |
| AC-7 | After the initial prompt, displayed FX_VarTestEdit value and selected item's FX_Description captured in one sequence; exact equality required | **Pass (exact equality; identity inferred)** | Selected item dumbbell. Grid Description `45 pound iron`; Description field `45 pound iron`; unnamed value box `45 pound iron`. Exact equality. | `T3-runtime-opening-report.md` §4; `t6-snapshot-05` (`f1e801`, `f1e854`, `f1e836`); `t6-06-…png` | **FX_VarTestEdit identity inferred, not named.** The value box has no accessible name; identity rests on position right of FX_Refresh, being the only unnamed Edit, and value equality. |
| AC-8 | Exactly one native FX_Refresh activation; its Hello World prompt captured before one OK; before/after readback with exact comparison; pass requires activation and prompt observed and value equal to selected Description | **Pass by written criterion (non-discriminating)** | One FX_Refresh click (`f1e190`), completed without error. One prompt, same title and message as at opening, captured before response. One OK (`f1e742`). Post-OK: dumbbell still current; grid, Description and value box all `45 pound iron`; exact equality. **The value did not change across the refresh.** | `T4-single-refresh-report.md` §2–§3, §6; `t7-snapshot-00`, `-01`, `-02`; `t7-01`, `t7-02`, `t7-03` | **Limitation:** the pre-refresh value was already the Description, so the pass does not show that the refresh re-evaluated `P(FX_Description)`. Whether it did is **unresolved**. Identity inferred as in AC-7. |
| AC-9 | Original three records unchanged and runtime Save disabled; optional eggs-row observation (before/after, change or non-change recorded); no data mutation or extra refresh | **Pass (observations; the eggs step is optional)** | Records unchanged before and after the refresh and the eggs selection (dumbbell 45 pound iron/45.00/EA; eggs cage free/6.99/DZ; guitar natural acoustic/129.99/EA). Save disabled throughout. Eggs selection (one native click, no typing): eggs became current (`Object 2 of 3`), Description `cage free`; the value box stayed `45 pound iron` (non-change; not cleared; no error; no dialog). | `T4-single-refresh-report.md` §4; `T8-eggs-row-observation-report.md` §2–§4; `t8-snapshot-00`, `-01`; `t8-01`, `t8-02` | The eggs result is an observation, not proof about refresh-time evaluation (per the instruction). Why the value box did not follow the row is **unresolved**. Whether the box is written only at refresh or at other events is **untested**. |
| AC-10 | Final reconciliation: Designer recovery attempts; one closure; one opening; two Hello World prompts; at most one OK per prompt; one FX_Refresh; zero Designer Saves, metadata mutations, business-data modifications; deviations documented | **Pass (with documented deviations)** | Reconciled in section 2. Designer recovery 1 attempt, 0 retries, 0 alternative. Closures 1, openings 1, prompts 2, OK 2, FX_Refresh 1, Designer Saves 0, metadata mutations 0, business-data modifications 0. | Section 2 and section 3 of this report | Deviations and corrections in section 4. |
| AC-11 | Final matrix with evidence references, observed versus unresolved findings; repository confinement audit showing only the EXP-057 record and `evidence/EXP-057/` changed; outcome classified; no replay_verified, durability or cache-eviction claim | **Not established (confinement component); matrix and classification complete** | This matrix, the findings split in section 5, and the confinement audit in section 6 are complete. No replay_verified, durability, or cache-eviction claim is made. The **confinement** part cannot be demonstrated from this session: no live repository diff is available, so strict confinement is not established by the worker. | This report §§1, 5, 6; `harness-audit-T1.md` … `harness-audit-T8.md` (controller-generated tool-call audits) | **This is the failed check behind the proposed BLOCKED outcome.** It is an audit-availability limit, not an experimental failure. |

## 2. Cumulative counts (reconciled)

| Item | Brief limit | Observed (EXP-057 total) | Source |
| --- | --- | --- | --- |
| Designer recent-forms attempts | ≤ 2 | **1** (succeeded first attempt) | T2A §1 |
| Recent-forms retries | ≤ 1 (after visibility evidence) | **0** | T2A §1 |
| Alternative Designer Open toolbar + Select Form attempts | ≤ 1 | **0** | T2A §1 |
| Inherited runtime tab closures | 1 | **1** | T3 §1 step 4 |
| Runtime openings (Open > Select Form) | 1 | **1** (two clicks: toolbar Open, then Select Form OK; counted as one opening) | T3 §1 steps 6, 9 |
| Automatic opening Hello World prompts | 1 | **1** | T3 §1 step 10 |
| Opening-prompt OK dismissals | 1 | **1** | T3 §1 step 11 |
| Manual FX_Refresh activations | 1 | **1** | T4 §1 step 4 |
| Refresh-triggered Hello World prompts | 1 | **1** | T4 §1 step 5 |
| Refresh-prompt OK dismissals | 1 | **1** | T4 §1 step 6 |
| Total Hello World prompts | 2 | **2** | T3, T4 |
| Total OK dismissals | 2 (≤ 1 per prompt) | **2** (1 per prompt) | T3, T4 |
| Optional eggs-row selections | optional, ≤ 1 | **1** (no refresh afterwards) | T8 §1 |
| Designer Saves | 0 | **0** | all tasks |
| Designer metadata changes | 0 | **0** (no Save, Regenerate, Undo, Redo, New, property edit, handler or parameter commit; two Parameters dialogs opened and Cancelled) | T2B, T2C, T2D |
| Runtime business-data modifications | 0 | **0** | T3, T4, T8 |

### Action types, reported separately

| Action type | Count | Notes |
| --- | --- | --- |
| Browser-tab list calls | 8 | One per task (T1, T2A, T2B, T2C, T2D, T3, T4, T8) |
| Browser-tab selections (successful) | 9 | Tab 0 Designer: 5 (T1, T2A, T2B, T2C, T2D). Tab 1 runtime: 4 (T1, T3, T4, T8). |
| Designer grid / row selections (selection only) | 6 | T2B 2 (handler rows 0 and 1); T2C 3 (FX_VarTestEdit, FX_RefreshButton, FX_DescriptionEdit); T2D 1 (FX_VarTest variable row) |
| Runtime grid row selection | 1 | T8 eggs row (Item cell) |
| Designer view-state clicks (no metadata) | 8 | T2B 3 (Details Expand, Event Handlers tab, grid Expand); T2C 2 (Components tab, grid Expand); T2D 3 (Properties Form tab, Variables tab, grid Expand) |
| Designer Form menu actions | 2 | T2A: Form menu open (1); recent-forms FX_Items menu item (1) |
| Designer Parameters dialogs opened for readback | 2 | T2B: Prompt and Set Values. Both closed with **Cancel** (2). No commit. |
| Designer Variables search (native filter) entries | 4 | T2D: `FX_VarTest`, `Initial`, `VarTest`, then clear. Each submitted with Enter. Not a variable-property edit. See deviation D-1. |
| Runtime command activations | 3 | Close Panel FX_Items (1); toolbar Open (1); FX_Refresh (1) |
| Runtime dialog responses | 3 | Select Form OK (1); Hello World prompt OK (2) |
| Dialog cancels in the runtime or Designer | 2 | Both Event Handler Parameters Cancels (T2B) |
| Total successful clicks across the experiment | 28 | T2A 2; T2B 9; T2C 5; T2D 5; T3 4; T4 2; T8 1 |

## 3. Interpretation required by the brief

**Dumbbell and the inferred value box after opening and after refresh.** After the opening prompt (T3) and after the single refresh (T4), the dumbbell Description and the value box both read `45 pound iron`. The value box is the unnamed textbox at `f1e836` (T3) and `f1e195` (T4). Its identity as FX_VarTestEdit is an inference from position, from its being the only unnamed Edit, and from its value matching the row. The accessibility tree exposes no component name.

**The unchanged value does not independently prove refresh-time evaluation.** Because the value was already `45 pound iron` before the refresh, the refresh could have re-evaluated `P(FX_Description)` and produced the same value, or left it untouched. This run cannot distinguish the two. The AC-8 pass is therefore a pass on the written criterion, not evidence that the refresh set the value.

**Eggs without another refresh.** Selecting eggs changed the selected Description to `cage free`, while the value box remained `45 pound iron`. There was no error and no data mutation. This is recorded as an observation. It is not interpreted as proof that the earlier refresh re-evaluated `P(FX_Description)`. Why the box did not follow the selection is unresolved.

## 4. Deviations, corrections, and exceptions

### Deviations from the brief (documented)

- **D-1: Typing into the Designer Variables search (flagged by the controller audit).** Task T2D entered four native filter strings (`FX_VarTest`, `Initial`, `VarTest`, and an empty clear) and submitted each with Enter. The controller audit `harness-audit-T5.md` records `prohibited-tool hits=4` (`browser_type`). The T2D instruction allowed "native UI filtering or selection" and forbade typing into variable properties and creating or changing definitions. The filter field is a Designer search box, not a variable property. No variable property, definition, or metadata was changed. This is disclosed as a flagged-tool use; this report does not adjudicate the controller flag.
- **D-2: Designer URL changes without a worker navigation.** The Designer tab URL changed to `...default.aspx?MGForm=FX_Items` after the T2A menu action, and back to `.../designer/default.aspx` after the first T2B Parameters Cancel, while the Form stayed open. The worker issued no URL or navigation action. Causes are not established.
- **D-3: Two clicks for one runtime opening.** The runtime opening used the toolbar Open click and the Select Form OK click. The brief's "one opening" was counted as one opening; the two clicks are listed separately above.
- **D-4: Parameters dialogs opened in T2B.** Two Event Handler Parameters dialogs were opened for read-only readback (permitted by T2B) and closed with Cancel. No commit occurred, as far as the grid readbacks show afterwards.
- **D-5: Designer view changes.** Details panel expanded and tabs switched (Components, Event Handlers, Variables); Properties panel switched between Form and Component; grids expanded. These are presentation-state changes, not metadata.
- **D-6: Task header labels.** The coordinator's task headers were numbered T1, T2A, T2B, T2C, T2D, T3, T4, T8 as the bounded instructions, while the run headers carried different `task=` values (T3, T4, T5, T6, T7, T8, T9). Each bounded instruction was followed; the mismatch is recorded in each report and is not a change to the protocol.

### Corrections to earlier records

- **C-1: T4 counts.** The T4 chat report and the experiment record's T4 counts overstated the activity. Correct values: **2** successful clicks (FX_Refresh and the prompt OK), not 3; **3** saved snapshots (`t7-snapshot-00`, `-01`, `-02`), not 4. The experiment record T4 line is corrected in place.
- **C-2: T1 snapshot count.** The T1 record says "fresh snapshots 3 (2 Designer, 1 runtime)". Two snapshots were saved as files (`t1-snapshot-00`, `-01`). The third Designer snapshot was an in-session untargeted read that was not saved. This is a counting clarification, not a missing file.
- **C-3: Experiment record status stack.** The experiment record carries stacked status paragraphs from T1 onward. The top of the record now gives the final status; the earlier paragraphs remain for the chronology and are superseded by it.

### Unresolved items carried forward (not promoted)

- The FX_VarTestEdit Components-grid Data Source cell changed from blank (EXP-056 T6–T8) to `variables.FX_VarTest` (T2C).
- The FX_VarTest presence contradiction: absent in EXP-056 (T1–T8 and T10), present as a Form - Temporary definition in T2D.
- The third Designer console error (EXP-056 recorded 2; EXP-057 records 3 from T1 onward). Not identified.
- The Designer URL changes (D-2).
- Inherited-runtime chronology: the inherited instance's load log at 07:08:00 shows `StdFormRefreshCompleted, num handlers for event 0`, and there are later `VarValue` rows at 07:08:44 for `StdCurFormPage` and `StdLastFormPage` in the same log. The T3-opened instance's own log rows were not read and analysed.
- Whether the refresh re-evaluates `P(FX_Description)`, and why the value box did not follow the eggs row.
- EXP-056's failed recent-forms reopen (T9) has no cause established.

## 5. Observed versus unresolved findings

| Finding | Classification |
| --- | --- |
| Recent-forms route opened FX_Items on the first attempt in this session | observed (single session) |
| Form identity: Name FX_Items; Version User for anton.ramos@3mworks.com.ph; footer User / anton.ramos@3mworks.com.ph | observed (single session) |
| Initial Command `Refresh`; one StdFormRefreshCompleted group with the two expected actions; Disabled false on both | observed (single session) |
| Prompt Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` | observed (single session); icon and Keep field screenshot-only |
| 17 Components entries; FX_VarTestEdit properties match the brief | observed (single session) |
| FX_VarTestEdit Data Source `variables.FX_VarTest` (was blank in EXP-056) | observed; cause **unresolved** |
| FX_VarTest present as Form - Temporary definition with Persistent False, Global False, Value `~LIT~()` | observed (single session) |
| FX_VarTest absent in EXP-056 and present here | observed in both sessions; contradiction **unresolved** |
| Runtime closure, single opening, one Hello World prompt before OK, one OK | observed (single session) |
| Displayed value box equal to dumbbell Description (`45 pound iron`) after opening and after refresh | observed (single session); identity of the box **inferred** |
| Refresh produced a second prompt and one OK; value unchanged | observed; refresh-time evaluation **unresolved** |
| Eggs selected; Description `cage free`; value box unchanged `45 pound iron`; no error | observed (single session); why **unresolved** |
| Original three records unchanged; runtime Save disabled | observed (single session) |
| Designer Saves, metadata mutations, business-data modifications | 0 by worker action record |
| Replay-verified findings | **none** |
| Independent database durability | **not claimed** |
| Cache-eviction behaviour | **not claimed** |
| Cross-session persistence | **not claimed** |

## 6. Repository confinement audit (read-only)

### Method and limit

This session has no shell or git tool, so a live `git status` or `git diff` was **not run**. The worker's own write surface was audited from the tool-call record, and the controller-generated per-task audits (`harness-audit-T1.md` … `harness-audit-T8.md`) were read. The session-start repository status (in the environment context) is a snapshot at conversation start, not a current status. The harness computes authoritative confinement from before/after Git state and the evidence diff, and its result is what settles AC-11.

### Pre-existing changes (not made by this worker)

From the session-start status snapshot (branch `claude-harness`):

- Tracked modifications (M), predating this run: `tools/learning-harness/README.md`; `tools/learning-harness/briefs/EXP-035.brief.json`; `tools/learning-harness/harness.config.example.json`; `tools/learning-harness/src/shadow/cli.ts`; `tools/learning-harness/src/shadow/runner.ts`; `tools/learning-harness/test/shadow.test.ts`.
- Untracked files: none listed at session start.
- Recent commits at session start include `b71eca5` (EXP-057 approved brief) and `08ac33c` (EXP-057 draft brief).

These are **outside** the authorized paths. The worker did not write to them, and this report does not modify or clean them up. Whether they are unchanged now is **not verified** here.

### Worker-authored writes (from the tool-call record)

Every `Write` or `Edit` call in T1 to T8 targeted one of these two paths:

- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md`: created in T1; edited in T2A, T2B, T2C, T2D, T3, T4, T8. This final task also edits it.
- `evidence/EXP-057/`: the per-task reports (`T1-preflight-report.md`, `T2A-recovery-report.md`, `T2B-handler-verification-report.md`, `T2C-component-inventory-report.md`, `T2D-variables-verification-report.md`, `T3-runtime-opening-report.md`, `T4-single-refresh-report.md`, `T8-eggs-row-observation-report.md`), this report (`FINAL-acceptance-and-audit-report.md`), and the browser captures written through the snapshot and screenshot tool filenames.

No `Write` or `Edit` call targeted `AGENTS.md`, `docs/`, `recipes/`, `tools/`, another experiment record, EXP-056 evidence, or any non-FX_ artifact. The EXP-056 files were read only. No `browser_evaluate`, `run-code`, shell, or script call was made in any task (none is recorded in the audits).

### Files present in `evidence/EXP-057/` (counted from the directory listing)

| Category | Count | Origin |
| --- | --- | --- |
| Per-task reports (T1, T2A, T2B, T2C, T2D, T3, T4, T8) | 8 | Worker-authored |
| This final audit report | 1 | Worker-authored (this task) |
| Browser snapshot captures (`*-snapshot-*.md`) | 42 | Worker-saved via tool `filename` (T1 2; T2A 3; T2B 10; T2C 7; T2D 9; T3 6; T4 3; T8 2) |
| Browser screenshots (`*.png`) | 23 | Worker-saved via tool `filename` (T1 2; T2A 1; T2B 4; T2C 2; T2D 3; T3 6; T4 3; T8 2) |
| Controller-generated audits (`harness-audit-T1.md` … `harness-audit-T8.md`) | 8 | Harness-generated; not worker prose; located in the authorized directory |

### Tool-generated captures outside the authorized directory (exception)

The browser tool writes its own captures to `evidence/playwright/`. For the EXP-057 window (timestamps 09:23 to 09:43 on 2026-10-11, after EXP-056's last capture at about 09:13), 43 files are present: 32 page snapshot `.yml` files and 11 console `.log` files. They were not authored as repository content. EXP-056's record describes this directory as gitignored tool-generated output. That ignore status was **not verified** in this session. These files are an **exception** to the two-path confinement and are listed here rather than excluded.

### Confinement conclusion

- Worker-authored writes: confined to `experiments/EXP-057-…md` and `evidence/EXP-057/` (by the tool-call record).
- Exceptions to report: (a) gitignored tool-generated captures in `evidence/playwright/` (43 files in the window); (b) pre-existing tracked modifications under `tools/learning-harness/` that predate this run.
- **Strict confinement is not established** by a repository diff from this session. The harness's before/after diff must confirm it.

## 7. Browser state at the end of the experiment (no calls in T9)

- **Tab 0 (Designer):** FX_Items Form open (the T2A recovery). Properties panel on the Form tab. Details panel on the Variables tab with the `FX_VarTest` row selected; search filter cleared. Save, Regenerate Form, Undo, Redo disabled. No dialog. Footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- **Tab 1 (runtime):** FX_Items Form open (the single T3 opening). Current row eggs (`Object 2 of 3`), focus on the read-only Item field. Description `cage free`; value box `45 pound iron`. Save disabled. No dialog.
- No browser-native dialog and no unsaved-change prompt is open.

## 8. Files written by this final task

- `evidence/EXP-057/FINAL-acceptance-and-audit-report.md` (this report; created).
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (updated: final status at top; T4 count correction; final section appended). No other repository file was written.
