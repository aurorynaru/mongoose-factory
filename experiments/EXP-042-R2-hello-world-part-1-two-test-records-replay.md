# EXP-042-R2 — Hello World Part 1: Two Test Records (replay with status-bar count and Find-dialog field mapping)

**Outcome: BLOCKED at the AC-2 status-bar gate. No data entry, no New, no Save, no record inserted, no runtime close, no reopen.** In T1 the authorized Display Status Bar preference was checked and confirmed with OK. Mongoose then showed the warning `Warning: Refresh Browser to Apply Layout Changes`. The FX_HelloWorld01 runtime tab was opened once after that, and at the last observation it showed **no status bar**. The warning suggests a browser refresh applies the layout change. That refresh was **not performed** (reload is not authorized in this task) and was **not tested**, so whether it makes the status bar appear is unverified. The T1 brief also required one empty-criteria query with its status-bar text captured before the gate decision. The worker skipped it (see "Deviation" under the AC-2 gate). The Find Value in Collection mapping (AC-3) and everything after it were **not run**.

Classification: **observed only, not replay_verified.** Every observation comes from one run.

## Outcome (operator, 2026-10-10)

**Blocked before any data mutation** (run R-20261010-172951-fF5Z, completed/blocked in cycle 2). Operator review of `evidence/EXP-042-R2/t1-03-user-preferences-display-status-bar-checked-before-ok.png`: the User Preferences Layout page shows Display Status Bar **checked** (Tabbed Form Layout checked) and the message `Warning: Refresh Browser to Apply Layout Changes`. So the setting is saved but takes effect only after a browser refresh, which this brief did not authorize.

Learned (observed): the checkbox element itself intercepts the click (TimeoutError). Clicking its visible label works, as in EXP-036.

Replayed as EXP-042-R3. The operator refreshes the browser manually before the run. R3 makes no preference change; it only verifies that the status bar is displayed. It also requires the empty-criteria query before the gate decision, which T1 here skipped.

Date: 2026-10-10
Run / task: EXP-042-R2, run `R-20261010-172951-fF5Z`, worker session `a0e85a52-8d24-4e90-84fe-09ea3345e22c`.
- Cycle 0, task T1 (task_message_id `f6bd5734-7d13-4422-a530-7757941530bf`): preflight, preference step, one Form open, AC-2 gate failed.
- Cycle 1, task T2 (task_message_id `2485c792-d301-4a2d-b920-b04a39bae118`): documentation finalization only. **No browser calls in T2.** See "T2 — Documentation finalization" at the end.

Mode: LEARNING MODE. FX_-only scope for the Hello World tutorial (AGENTS.md, 2026-10-10). The Form stays in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`evidence/EXP-042-R2/t1-01-preflight-no-runtime-no-designer-tab.png`).
Evidence directory: `evidence/EXP-042-R2/`.
Predecessor: `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md` (BLOCKED before data entry; operator outcome recorded there).

## Sources read before the first browser action

- `AGENTS.md` (repository root): read in full.
- `docs/mongoose/transcripts/hello-world-pt1.md`, lines 264–278 (the 7:40–8:01 test-data passage): "open the form in runtime mode … the form should open in add mode since we don't have any data … enter in some test data … use the new button on the toolbar to add each record once … hit the save icon". The transcript does not name values or a record count. Trust: unverified (speech-to-text transcript).
- `experiments/EXP-042-hello-world-part-1-two-test-records-through-the-we.md`: the outcome block and the T1–T4 sections (predecessor).
- `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md`: the outcome block; the T3 reading-chronology table (its summary of EXP-036); the T5 Designer component table (lines 553–602); the T9 and T10 runtime sections (lines 742–793).
- `evidence/EXP-042/cleanup-inventory.md`: read (two rows, NOT INSERTED).
- **Not read in T1, although the brief listed them in scope:** the EXP-040 record (its T12 table and IDO definitions are cited here only as recorded by EXP-041-R3 and by the IDO surface observed in T1), EXP-036 (read only as summarized in EXP-041-R3), and the `harness-audit-*` files. This is a documentation gap, not a repaired read.

## Authorized target (documented before any mutation; AC-1)

| Item | Identity | Source |
|---|---|---|
| Form (runtime only) | `FX_HelloWorld01`, User scope (`ScopeName` = `anton.ramos@3mworks.com.ph`), Primary Collection `FX_HelloWorld01` | EXP-041-R3 T5 Designer read (Form-level Collections tab; status bar `ScopeType: User`). Not re-read in this experiment: the Designer was not opened, per the brief. |
| IDO | `FX_HelloWorld01`, project `FX_HelloWorldProject01`. Revision Num 2, Revision Date 10/10/2026, Access As `G6R`. Label String ID and Caption `oFX_HelloWorld01` (IDO level). | Read in T1 from the IDOs surface (`t1-01`, viewed). |
| SQL table | `dbo.FX_HelloWorld01`. `FX_Code` String 30, nvarchar, key sequence 1, Required checked. `FX_Label` String 100, nvarchar, Required unchecked. | IDO property grid (`t1-01`, viewed); EXP-040 T12 as recorded in EXP-041-R3. |
| Authorized records | (1) `FX_Code` = `FX001`, `FX_Label` = `Factory test one`; (2) `FX_Code` = `FX002`, `FX_Label` = `Factory test two` | Brief. |
| Authorized mutation | Exactly two inserts into `dbo.FX_HelloWorld01` through the runtime Form, one explicit Save. **Not performed.** | Brief. |

### Designer baseline (EXP-041-R3 T5, read-only there; carried forward)

| Component | Type | Data source | Pane / tab |
|---|---|---|---|
| FX_CodeGridCol | GridColumn | `object.FX_Code` | grid |
| FX_LabelGridCol | GridColumn | `object.FX_Label` | grid |
| FX_CodeEdit | Edit | `object.FX_Code` | Pane 1, tab 6 |
| FX_LabelEdit | Edit | `object.FX_Label` | Pane 1, tab 4 |
| FX_CodeStatic / FX_LabelStatic | Static | (none) | Pane 1 |

EXP-041-R3 T10 recorded that the runtime shows no field names. The mapping from runtime inputs to these components is therefore **not** observed. The T5 table is a Designer read, not a runtime read.

## Preflight (AC-1)

| Item | Observed (T1) | Evidence |
|---|---|---|
| Authenticated configuration | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Portal tab `Mongoose` selected. No sign-in or configuration screen. | `t1-01`; fresh snapshot |
| Browser tabs | One browser tab, `Mongoose`. The portal bar also shows `System Administrator` (portal tab, not part of this task). | `browser_tabs` list |
| FX_HelloWorld01 runtime tab | **Not open** before the T1 open. The Web Client tab strip showed `IDO Projects`, `IDOs` (selected), `Sql Tables`. | `t1-01`; snapshot |
| Designer tab | **Not open.** No Web Designer tab in the browser tab list. | `browser_tabs` list |
| Starting state | IDOs surface loaded, Save disabled, no dialog. | `t1-01` |

**Gate result:** AC-1 passes, subject to the existing EXP-041-R3 evidence cited above. The Designer clean state is established by absence only (no Designer tab), which the brief allows.

## Display Status Bar (authorized preference step; only preference changed)

Sequence: View > User Preferences... > Layout (the left list `Layout` option). The Layout page lists `Theme: Hi world`, `Toolbar Type: Default`, `Tabbed Form Layout` (checked), `Display Status Bar`, `Update Existing View` (checked).

| Step | Action | Observed | Evidence |
|---|---|---|---|
| 1 | View menu click; User Preferences... menu item click | Dialog opened (`favoriteContext=UserPreferences`) | snapshots |
| 2 | Layout listbox option click | Layout page shown. **Display Status Bar unchecked before the change.** | `t1-02-user-preferences-layout-status-bar-before.png` (viewed) |
| 3 | Click on the checkbox element itself (`f1e1052`) | **TimeoutError**: the checkbox's visual `<span>` intercepted pointer events. No state change. A `find` confirmed the checkbox still unchecked. | error text in this record |
| 4 | Click on the visible label text `Display Status Bar` (`f1e1054`), once | **Checked.** A warning appeared: `Warning: Refresh Browser to Apply Layout Changes`. The label-click method is the one recorded for EXP-036 in the EXP-041-R3 T3 reading table; EXP-036 itself was not re-read. | `t1-03-user-preferences-display-status-bar-checked-before-ok.png` (viewed) |
| 5 | Dialog-scoped snapshot; button label check | Button `OK` at `f1e1032` confirmed; other Layout values unchanged (Theme `Hi world`, Toolbar Type `Default`, Tabbed Form Layout checked, Update Existing View checked) | snapshot |
| 6 | OK click, once | Dialog closed. No other preference touched. | `t1-04-after-preference-ok-status-bar-state.png` (viewed; shows the IDOs surface, not the runtime) |

**Before:** unchecked. **After OK:** the preference reads checked and was confirmed with OK. Operator-reversible; left on (see the cleanup inventory).

**Limitation.** The warning says the layout change applies after a browser refresh. No refresh was performed, so the preference's effect on the status bar is only tested by the next Form open (below).

## Form identity via Select Form (one open)

| Step | Action | Observed | Evidence |
|---|---|---|---|
| 1 | Toolbar Open (`f1e25`) | Select Form dialog. The filter had a leftover `FX_HelloWorld01`, Filter By `Name`, both checkboxes unchecked, one row. | snapshot |
| 2 | Filter click; Control+a; `FX_HelloWorld01` by key-event typing (`browser_type` with `slowly: true`); 2 s settle | Filter reads `FX_HelloWorld01`; one row: Caption `FX_HelloWorld01` / Name `FX_HelloWorld01`. Case Sensitive and Starts With unchecked. | `t1-05-select-form-fx-helloworld01-one-row-before-ok.png` (viewed) |
| 3 | Row Name cell click (activates the row, as EXP-041-R3 T9 did) | Row active. OK label verified in a fresh dialog snapshot (`f1e1119`). | snapshot |
| 4 | OK, once | Runtime tab `FX_HelloWorld01` opened. URL `favoriteContext=FX_HelloWorld01`. | snapshot; URL |

## Status-bar gate (AC-2): FAILED for this run

After the open, the runtime was inspected **without** any query.

- `t1-06-runtime-opened-initial-status-bar-check.png` (viewed): runtime tab `FX_HelloWorld01` selected. Tabs `IDO Projects`, `IDOs`, `Sql Tables`, `FX_HelloWorld01`. Grid shows one starred new-row placeholder (`1`). Two empty unnamed inputs (the lower carries a red `*`). The bottom edge shows only a horizontal scroll bar and **no status-bar text**.
- Two read-only finds (`status`; a count/`of N`/`record` regex) returned **no matches**.
- `t1-07-runtime-accessibility-snapshot-no-status-bar.md` (viewed in T2): the runtime tab is selected, and the tabpanel is labelled `FX_HelloWorld01`. There is no status-bar node and no footer text. The only numeric text is the grid row header `1`. Save is disabled. New, Delete, Refresh and FiP are enabled. The two inputs are unnamed (`textbox`, one preceded by `:`, one preceded by a red `*`).

**Exact status-bar text: none observed.** The status bar is absent at this point.

**Deviation from the T1 brief.** The T1 brief required one empty-criteria FiP F4 or one Refresh, with the exact status-bar text and a settled grid captured before the gate decision. The worker did **not** run it. The stated reason ("it cannot establish a count without a status bar") is the worker's own inference and is not what the brief says. The result is that the post-query status-bar text and the settled grid after a query are **missing**. The placeholder seen at open is the add-mode state, not a query result.

**What this means for emptiness.** No complete read-only query was performed. Collection emptiness is therefore **unverified**, and the absence of FX001 and FX002 is **unverified**. The absent status bar means there is no count, which closes the gate under the brief. It does not prove zero persisted rows. The starred placeholder alone is not proof of emptiness.

## Field mapping via Find Value in Collection (AC-3): NOT RUN

Not executed. The brief allows it only after the zero-row gate (AC-2) passes, and AC-2 failed.

## Operation counts (T1; T2 added no browser operations)

| Operation | Count |
|---|---|
| Browser tab list / fresh untargeted snapshots / dialog-scoped snapshots | 1 / 1 / 5 (plus one saved snapshot file `t1-07`) |
| Screenshots (worker-authored PNG) | 6 (`t1-01` to `t1-06`) |
| Preference dialog opens | 1 |
| Display Status Bar checkbox changed | **1** (checked, once; confirmed with OK) |
| Preference changes other than Display Status Bar | **0** |
| Preference dialog OK / Cancel | 1 / 0 |
| Select Form opens / OK / Cancel | 1 / 1 / 0 |
| Select Form filter entries (key events, `slowly: true`) | 1 (`FX_HelloWorld01`); Control+a 1 |
| Plain fills (`browser_type` without `slowly`) | **0** |
| Runtime Form openings by EXP-042-R2 | **1** |
| Runtime queries (FiP, F4, Refresh) | **0**. Deviation: the T1 brief required one; see the AC-2 gate section. |
| Find Value in Collection dialogs | **0** |
| Typing into runtime fields | **0** |
| New / Save / Delete | **0 / 0 / 0** |
| Records inserted / edited / deleted | **0 / 0 / 0** |
| Form-tab closes / reopens of runtime | **0 / 0** |
| Designer launches | **0** |
| Timeouts | **1** (preference checkbox element intercepted; see Errors) |
| Corrected visible inspections | **1** (a `find` that confirmed the state, followed by the visible-label click) |
| Fresh recovery snapshots (after `Ref … not found`) | **0** (no `Ref not found` error occurred) |
| JavaScript / evaluate / run-code | **0** |
| Authentication / session replacement / logout | **0** |
| Dialogs or prompts responded to | 2: Preference OK (label `OK` verified) and Select Form OK (label `OK` verified). No alert, no save-changes prompt, no browser-native dialog. |

## Errors and recovery accounting

1. **Preference checkbox click timed out.** `TimeoutError: … intercepts pointer events`. The `<span data-ref="displayEl">` of the checkbox intercepted the click (`DisplayStatusBarCheckbox`). No state change: a `find` confirmed the checkbox still unchecked. Recovery: one corrected inspection, then one click on the visible label text. This is the only retry.
2. **Layout warning.** `Warning: Refresh Browser to Apply Layout Changes` appeared after the check. It is an observed Mongoose message, not an error by this worker. Its connection to the absent status bar is **unproven**; the refresh was not tested.
3. **Skipped pre-gate query.** The T1 brief's empty-criteria query was not run (see the AC-2 gate section). This is a procedural deviation, not a Mongoose error.
4. No `Ref … not found`, no validation or duplicate-key message, no discard or save-changes prompt, no unexpected mutation.

## Save outcome

**No Save was performed.** Save was disabled in every captured runtime state (`t1-06`, `t1-07`).

## Acceptance matrix (reconciled in T2)

| AC | Status | Basis (evidence) | Limit |
|---|---|---|---|
| AC-1 | **PASSED**, subject to the existing EXP-041-R3 evidence. Configuration, runtime-tab absence before the open, Designer-tab absence, and the EXP-041-R3 Form and Primary Collection identity. Display Status Bar before and after captured. Target table and both record values documented before any mutation. | `t1-01` (viewed), `t1-02`, `t1-03`, `t1-04` (viewed), tab list, snapshots; EXP-041-R3 T5 | Designer state is established by absence only. The Designer was not opened, so the EXP-041-R3 Form read is not re-observed here. |
| AC-2 | **FAILED.** No status-bar count was visible. No complete read-only query was run. | `t1-06` (viewed), `t1-07` (read in T2): no status-bar node; two finds with no matches | The preference reads checked, but no status bar is rendered in the opened runtime. Whether a browser refresh changes that is **unverified**. Zero matches for FX001 and FX002 are **not** recorded. Collection emptiness is **unverified**. |
| AC-3 | **NOT RUN.** | — | Gated by AC-2. |
| AC-4 | Not executed (no entry). | — | — |
| AC-5 | Not executed (no New). | — | — |
| AC-6 | Not executed (no Save). | — | — |
| AC-7 | Not executed (no post-Save read). | — | — |
| AC-8 | Not executed (no close or reopen). | — | — |
| AC-9 | **Documentation only.** No rows were inserted. The cleanup inventory lists FX001 and FX002 as NOT INSERTED planned values, not persisted cleanup targets. The preference change is recorded as operator-reversible. | `evidence/EXP-042-R2/cleanup-inventory.md` | No insertion occurred, so the "exactly two inserted rows" requirement cannot be met by this run. |

## Repository confinement audit (worker's self-audit; the harness computes confinement)

Worker-written files across T1 and T2:
- `experiments/EXP-042-R2-hello-world-part-1-two-test-records-replay.md` (this record; created in T1, rewritten in T2).
- `evidence/EXP-042-R2/cleanup-inventory.md` (created in T1, rewritten in T2).
- `evidence/EXP-042-R2/t1-01-preflight-no-runtime-no-designer-tab.png` … `t1-06-runtime-opened-initial-status-bar-check.png` (6 PNG, written by the browser tool at the worker's request in T1).
- `evidence/EXP-042-R2/t1-07-runtime-accessibility-snapshot-no-status-bar.md` (snapshot file written by the browser tool in T1).

Browser-tool output under `evidence/playwright/` (snapshot and console logs) is tool-written, not worker-authored. The worker did not verify its ignore rule.

No other repository file was written. No `tools/`, AGENTS.md, memory, recipe, or other experiment record was touched.

## Final browser state (last observed; T2 made no browser calls)

- Mongoose tab selected (the only browser tab).
- Web Client tab strip: `IDO Projects`, `IDOs`, `Sql Tables`, `FX_HelloWorld01` (selected, the runtime tab opened once in T1).
- The `FX_HelloWorld01` runtime tab shows one starred new-row placeholder and two empty unnamed inputs. **Blank, untouched, add-mode record. Save disabled. New enabled.** Not saved, not discarded, not closed.
- Designer: not open. No Designer tab exists.
- Display Status Bar: **checked** (confirmed with OK, and left on). No status bar is rendered in the open runtime at the last observation.
- No in-page dialog open. No browser-native dialog or unsaved-change prompt observed.

## Operator actions needed before a later EXP-042-R2 task

1. **Decide on a browser refresh.** Mongoose warns `Refresh Browser to Apply Layout Changes`. Whether a refresh makes the status bar appear is unverified. The worker did not refresh, because reload is not in this task's authority.
2. **Close the blank runtime tab** `FX_HelloWorld01` through its ordinary Form-tab close control, and answer any save-changes prompt by a fresh label check. It is an untouched blank placeholder, and nothing is saved. A later task would then open the Form once and run the pre-entry query and AC-2 gate in its own session.
3. **Until the AC-2 gate passes in a later session, no entry may occur.**

## Limits

- One run. Observed only.
- The status bar was absent in the runtime after the preference was checked and confirmed with OK. Whether it appears after a browser refresh is **unproven**.
- No complete read-only query was run. Zero persisted rows, and the absence of FX001 and FX002, are **unverified**.
- The runtime input mapping (AC-3) is **not established**. The Designer T5 table is a Designer read from EXP-041-R3, and the EXP-041-R3 T10 record showed no runtime field names.
- The Required marker on the lower runtime input is observed on the canvas (`t1-06`). Its link to FX_CodeEdit is an inference from EXP-041-R3 T5, and this run did not confirm it.

## Knowledge state

| Finding | State |
|---|---|
| Display Status Bar is unchecked before the change (Layout page) | observed (`t1-02`) |
| Checking the visible label text sets Display Status Bar to checked; OK confirms it | observed (`t1-03`, `t1-04`) |
| Checkbox element click intercepted by its visual span; visible label click worked | observed (one run); candidate_procedure. The label-click method is recorded for EXP-036 only as summarized in EXP-041-R3. |
| Layout warning `Refresh Browser to Apply Layout Changes` shown after the check | observed (`t1-03`) |
| Select Form key-event filter returns one row `FX_HelloWorld01` | observed (`t1-05`) |
| Runtime opens once after the preference check, with no status bar rendered | observed (`t1-06`, `t1-07`) |
| Runtime shows one starred placeholder and two unnamed inputs | observed (`t1-06`, `t1-07`) |
| Status bar appears after a browser refresh | **unresolved** (not tested) |
| Collection emptiness (zero persisted rows) | **unresolved** (no complete read-only query run) |
| Runtime input → FX_Code / FX_Label mapping | **unresolved** (not run) |

## Open questions and blockers

1. **Blocker (AC-2):** no status-bar count is rendered in the opened runtime. Whether a browser refresh fixes this is untested, and a refresh is outside this task's authority.
2. **Blocker (AC-3):** field mapping not run, because the status-bar gate failed.
3. **Documentation gap:** the EXP-040 record and EXP-036 were not read in T1, although the brief listed them in scope. The IDO and table identities are cited from the T1 IDO surface and EXP-041-R3.

## T2 — Documentation finalization (cycle 1; no browser calls)

Scope: review the saved T1 evidence and reconcile this record and the cleanup inventory. No browser call, refresh, close, reopen, preference change or data change was made. The runtime Form was left untouched.

### Evidence reviewed (saved files, content read in T2 or viewed in T1)

| File | Shows (content verified) | Does not prove |
|---|---|---|
| `t1-01-preflight-no-runtime-no-designer-tab.png` (viewed) | IDOs surface for `FX_HelloWorld01`; Revision 2; FX_Code String 30 with Required checked; FX_Label String 100 unchecked; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; tabs `IDO Projects`, `IDOs`, `Sql Tables`; no runtime tab. | The Designer state (only its absence from the tab list); the Form's User-scope version. |
| `t1-02-user-preferences-layout-status-bar-before.png` (viewed) | User Preferences, Layout page: Display Status Bar **unchecked**; Tabbed Form Layout and Update Existing View checked; Theme `Hi world`; Toolbar Type `Default`. | The stored preference value after OK. |
| `t1-03-user-preferences-display-status-bar-checked-before-ok.png` (viewed) | Display Status Bar **checked**; `Warning: Refresh Browser to Apply Layout Changes` shown; dialog still open. | That OK saved it (see t1-04). |
| `t1-04-after-preference-ok-status-bar-state.png` (viewed) | Dialog closed after OK. The visible surface is the **IDOs tab, not the runtime**. No status bar on that surface. | That the status bar appears in the runtime. |
| `t1-05-select-form-fx-helloworld01-one-row-before-ok.png` (viewed) | Select Form: Filter `FX_HelloWorld01`; Filter By Name; Case Sensitive and Starts With unchecked; one row `FX_HelloWorld01` / `FX_HelloWorld01`; Name cell active; OK and Cancel visible. | The User-scope version (no scope column); the runtime content. |
| `t1-06-runtime-opened-initial-status-bar-check.png` (viewed) | Runtime tab `FX_HelloWorld01` selected; one starred placeholder `1`; two empty inputs (lower with red `*`); no status-bar text in the visible viewport. | A count; the absence of a status bar outside the viewport beyond the bottom edge shown. |
| `t1-07-runtime-accessibility-snapshot-no-status-bar.md` (read in T2) | Tab `FX_HelloWorld01` selected; tabpanel `FX_HelloWorld01`; grid row `1`; two unnamed textboxes; Save `[disabled]`; New, Delete, Refresh, FiP enabled; no status-bar node or footer text. | A count, or that a query ran. |

### Documentation changes made in T2

- Corrected "a browser refresh is needed" to "the warning suggests a refresh; untested" throughout.
- Recorded the skipped pre-gate query as a **deviation**, and removed the earlier wording that justified it.
- Removed an inaccurate "stale ref" error row (the Open ref was re-found before the click).
- Qualified the EXP-036 label-click reference: it is the method recorded in EXP-041-R3's summary, and EXP-036 was not re-read.
- Changed AC-1 to PASSED with its EXP-041-R3 limit, AC-2 to FAILED, AC-3 to AC-8 to not executed, and AC-9 to documentation-only (no rows inserted).
- Recorded FX001 and FX002 as planned, NOT INSERTED, and not persisted cleanup targets.
- Stated that the Display Status Bar remains checked and is operator-reversible.

### Remaining documentation gaps

1. EXP-040 and EXP-036 were not read in T1 (in-scope items the brief listed). This is disclosed, not repaired.
2. The T1 snapshot `t1-07` was saved by the browser tool at open time, not after a query.
3. No settled post-query grid capture exists (the pre-gate query was skipped).
4. The `evidence/playwright/` tool output is unverified as git-ignored.

### Counts (T2)

Browser calls 0. Data entry 0. New 0. Save 0. Close or reopen 0. Preference changes 0 in T2 (the one change is from T1). Files written in T2: this record and the cleanup inventory only.
