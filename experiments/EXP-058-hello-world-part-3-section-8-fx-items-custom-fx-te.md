# EXP-058 — Hello World Part 3 Section 8: FX_Items custom FX_Test event migration and runtime verification

**Status (T11, 2026-10-11, final documentation; zero browser calls): recommended outcome BLOCKED (not accepted). Exact unsatisfied check: AC-11, repository-confinement component. The worker cannot demonstrate repository-level confinement (no shell; the harness diff was not available); the same condition held EXP-057 until an operator-approved attachment. AC-1 to AC-10 are substantiated by existing evidence with the limits recorded in the T11 matrix; classification observed, not replay_verified. If the harness confinement diff confirms confinement, the coordinator may move the outcome to accepted (observed). Full matrix, cumulative audit, and confinement findings: `evidence/EXP-058/T11-final-acceptance-matrix-and-action-audit.md`.**

Previous status (T10, 2026-10-11): single FX_Refresh activation performed (1 of 1). Exactly one Hello World alertdialog titled `Infor Mongoose Application Development Framework - FX_Items` appeared (OK only), captured before dismissal. One OK dismissal (1 of 1). AC-9 PASSED. After dismissal the runtime value box (inferred FX_VarTestEdit; no accessible name) reads `45 pound iron`, equal to the current record dumbbell's Description `45 pound iron`. Empty before activation, populated after. AC-10 PASSED on the observed comparison (identity inferred; producing action not isolated; observed only). Records unchanged; runtime Save disabled. No further runtime interaction; the activation budget is used. T10 detail: `evidence/EXP-058/T10-single-fx-refresh-activation-and-postcondition-report.md`.**

Previous status (T9, 2026-10-11): runtime FX_Items closed once and reopened once (toolbar Open > Select Form > OK). Opening-time prompts: 0 (immediate and settled snapshots). Settled Form: three original records unchanged; dumbbell current (Object 1 of 3); Save disabled. The value box beside FX_Refresh is visibly empty with no accessible name (identity inferred). AC-7 PASSED; AC-8 PASSED on its written criterion. FX_Refresh NOT activated; no prompt dismissed; no runtime Save; the single activation budget is preserved for a separate authorization. T9 detail: `evidence/EXP-058/T9-runtime-close-open-and-initial-state-verification-report.md`.**

Previous status (T8, 2026-10-11): ordinary Designer close/reopen and AC-6 recovery verification PASSED (observed UI recovery; not database durability). One clean Form-tab close; one recent-forms reopen (attempt 1 of 2; no retry; no Designer Open fallback). Mandatory post-reopen check PASSED: Components grid "Event to generate" and native Events > Primary for FX_RefreshButton both equal `FX_Test` (the pre-Save grid discrepancy is resolved by visible evidence; mechanism not established). After reopen: one FX_Test group with the two original enabled actions and no StdFormRefreshCompleted; the 17-component inventory, the 15 non-Pane component readbacks, the FX_VarTest definition, Initial Command `Refresh`, and unrelated Form properties all match T1/T6. Save disabled; no dialog; no runtime action. The runtime steps (AC-7 to AC-11) are NOT started and need a new authorization. T8 detail: `evidence/EXP-058/T8-designer-close-reopen-and-AC6-recovery-verification-report.md`.**

Previous status (T7, 2026-10-11): the single native Designer Save was performed and succeeded (native confirmation; Save, Regenerate Form, Undo, Redo disabled afterward; same FX_Items User-scoped Form still open; no close or reopen). Immediate post-Save: one FX_Test group with the two original actions; no StdFormRefreshCompleted; native Primary FX_Test. The Components grid "Event to generate" still reads StdFormRefresh (unresolved; excluded from the pre-Save gate by the cycle-8 amendment; must equal FX_Test after the separate close/reopen, which is not yet authorized). T7 detail: `evidence/EXP-058/T7-single-designer-save-and-immediate-post-save-matrix-report.md`.**

Previous status (T6, 2026-10-11): read-only pre-Save AC-4 audit complete. AC-4 Save gate NOT SATISFIED: the Components grid "Event to generate" cell for FX_RefreshButton still reads `StdFormRefresh` while Events > Primary reads `FX_Test`; the conflict persisted through one bounded Details-tab round trip and a reselect, and cannot be resolved from visible evidence. Every other compared field matches the T1/T2 baseline (all 15 non-Pane components, FX_VarTestEdit and FX_DescriptionEdit binding and geometry, FX_VarTest definition, Initial Command Refresh, unrelated Form properties, one FX_Test group with two original actions). No Save, no metadata change, no close or reopen, no runtime action. The Designer remains dirty with Save enabled.** T6 detail: `evidence/EXP-058/T6-pre-save-AC4-readonly-audit-report.md`.

Previous status (T5, 2026-10-11): FX_RefreshButton Events > Primary changed from `StdFormRefresh` to `FX_Test` (observed, unsaved). Primary readback `FX_Test`; all other button properties match the pre-change readback. DISCREPANCY (unresolved, not repaired): the Components grid "Event to generate" cell still reads `StdFormRefresh`. The Designer is DIRTY with Save enabled; no Save invoked; no Form close or reopen; no runtime activation.** T5 detail: `evidence/EXP-058/T5-fx-refreshbutton-primary-change-report.md`. Previously (T4): both handler actions under one `FX_Test` group (pre-Save AC-3 grouping established). Sequence 1 Set Values was entered through the editable Event combobox and committed with Tab. The T4 picker listed `FX_Test` (it did not in T3); the typed route was still used. T4 detail: `evidence/EXP-058/T4-sequence1-set-values-migration-and-pre-save-grouping-report.md`. T3 detail: `evidence/EXP-058/T3-sequence0-prompt-migration-report.md`. T2 detail: `evidence/EXP-058/T2-baseline-completion-report.md`. T1 detail: `evidence/EXP-058/T1-preflight-baseline-report.md`.

T2 summary: Pane (00) and Pane (01) selected; their Component-tab property trees are empty in this UI (no Binding, Location, Size, or events exposed), recorded as unavailable and not inferred. The 17-entry grid was captured with native scrolling (`t2-03` to `t2-07`). The Properties Data Source row is blank for every bound component, so the FX_VarTestEdit blank Properties row is not specific to it; its grid value `variables.FX_VarTest` matches its Binding. The EXP-056 blank grid cell remains unexplained. Designer console rose from 3 to 4 errors at the first Pane selection (cause not identified). Handler grid not re-read in T2 (last read in T1). Reviewed for T2: EXP-055 record (full), EXP-055 T1 and T5 reports (full); other EXP-055 T-reports not opened individually.

Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User (`ScopeType: User`, `ScopeName: anton.ramos@3mworks.com.ph`, from the Designer footer). Target Form `FX_Items`.
Run `R-20261011-175814-gBsz`, cycle 0, task T1. Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `ddeaf1f2-174c-4346-a5a0-6b29cbc93192`.
Brief commits: `9da2507` (draft, operator guards added), `23aebe1` (approved).

## Objective (from the brief, unchanged)

On the existing User-scoped `FX_Items` Form, move the two original handler actions from `StdFormRefreshCompleted` to a custom event `FX_Test` by changing each action's Event To Handle > Event value; change only `FX_RefreshButton` Events > Primary from `StdFormRefresh` to `FX_Test`; perform one ordinary Designer Save; close and reopen the scoped Form; close the inherited runtime FX_Items tab and open the Form once; check the initial runtime state (no opening prompt, FX_VarTestEdit empty); activate FX_Refresh once; dismiss the expected Hello World prompt once; compare the variable-bound Edit value with the selected row's FX_Description.

Classification ceiling: observed or blocked. Never `replay_verified`. Not a database-durability test, not a cache, FormSync, or diagnostics test, not a row-selection test after the custom event.

Tutorial reference: `docs/mongoose/transcripts/hello-world-pt3.md` Section 8, lines 228–243 (07:39–08:31). Agent boundary (line 243): the event change changes the trigger rather than adding handlers. Both original handlers must be verified as moved, not left on Refresh Completed, before a custom-event test counts as isolated.

## Prior state (read in T1)

- EXP-055 (handler and button baseline, Save, close and reopen): evidence directory inventoried only in T1 (T-reports not opened). Gap recorded.
- EXP-056 (BLOCKED at AC-8): Save succeeded; the one recent-forms reopen did not open the Form; FX_VarTest absent in that session; FX_VarTestEdit Data Source cell blank. Source: `evidence/EXP-056/T10-final-blocked-report.md`.
- EXP-057 (accepted with limits, observed only): recovered the Form at the first recent-forms attempt; FX_VarTest visible as Form - Temporary; FX_VarTestEdit displayed `45 pound iron` for dumbbell; refresh did not change it (not discriminating); eggs-row selection did not change it. Source: `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md`.

## T2 — read-only baseline completion (cycle 1; details `evidence/EXP-058/T2-baseline-completion-report.md`)

- **Reviewed before any browser action:** this record (T1); EXP-055 record in full (`experiments/EXP-055-…md`, lines 1–319, including the T10 correction); EXP-055 T1 and T5 reports in full. EXP-055 T2, T3, T4, T6–T10 reports not opened individually (the record summarises them). EXP-057 and EXP-056 reviewed in T1.
- **Lesson applied from EXP-055 (AC-4 failure there):** a preservation baseline must cover the exact compared properties. T2 reads Binding, Location, Size, Tab Order, and all four events for each of the 15 non-Pane entries.
- **Tabs:** `browser_tabs list` first; tab 0 already current; no select issued; tab 1 not touched.
- **Pane (00) and Pane (01):** selected (row clicks). Component-tab property tree empty for both: Binding, Location, Size, Tab Order, and events are **not exposed** by this UI (screenshots `t2-01`, `t2-02`). Not inferred from EXP-056 or EXP-057.
- **17-entry grid:** captured with native mouse-wheel scrolling (`t2-03` top, `t2-04`, `t2-05`, `t2-06` bottom; `t2-07` duplicates the bottom). All 17 entries are visible across these captures; the consolidated table is in the T2 report §5.1.
- **FX_VarTestEdit Data Source reconciliation:** Properties Data Source row blank; grid Data Source `variables.FX_VarTest`; Binding Type Variable, Binding `variables.FX_VarTest`. The Properties Data Source row is blank for every bound component read (for example FX_DescriptionEdit, whose grid value is `object.FX_Description`), so it is a general property-row behaviour. The EXP-056 blank grid cell remains unexplained.
- **Final identity and clean state:** Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Initial Command `Refresh`; Size `69; 21`; Save, Regenerate Form, Undo, Redo disabled; no dialog (`t2-snapshot-06`).
- **Unexpected:** Designer console 3 → 4 errors at the first Pane selection; source not identified (no diagnostics used).
- **Action counts (T2):** tab lists 1; tab selects 0; clicks 5; mouse move 1; wheel 5; snapshots 7; screenshots 7; dialogs 0; Save 0; metadata changes 0; typing 0; key presses 0; Form open or close 0; runtime actions 0; ref-not-found errors 0.
- **AC-1:** supported. **AC-2:** supported, with the Pane qualification above; the handler grid was not re-read in T2 (last read in T1).
- **Next (not started):** the migration needs operator approval.

## T3 — sequence 0 Prompt moved to FX_Test, unsaved (cycle 2; details `evidence/EXP-058/T3-sequence0-prompt-migration-report.md`)

- **Gate (passed, before any mutation):** tab list (tab 0 current; no select needed); identity Name `FX_Items`, User version, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save, Regenerate, Undo, Redo disabled; no dialog. Handler grid: one `StdFormRefreshCompleted` group; seq 0 Prompt (Disabled false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`); seq 1 Set Values (Disabled false, `SETVARVALUES(FX_VarTest=P(FX_Description))`); no FX_Test.
- **Picker:** the Event dropdown (opened by its arrow) listed only built-in `Std*` events, first entry `StdAppLaunchInbox`. `FX_Test` was **not offered** (`t3-03`, `t3-snapshot-03`).
- **Entry (native editable combobox):** typed `FX_Test` into the Event combobox with no Enter (the open list highlighted `StdFormRefreshCompleted`, so Enter was avoided); committed with one Tab press. Intermediate state before commit: `t3-04`, `t3-snapshot-04`.
- **Result after commit:** a new `FX_Test` group appeared; `StdFormRefreshCompleted` retained only seq 1 Set Values (`t3-05`, `t3-snapshot-05`). After a view-only grid Expand, the `FX_Test` group showed one row: seq 0 Prompt, Disabled false, same Hello World/OK summary (`t3-06`, `t3-snapshot-06`). The Prompt row's readback: Event `FX_Test`, Sequence 0, Disabled False, Type Prompt (`t3-snapshot-07`).
- **Save:** enabled (dirty) as expected; **not invoked**.
- **Tool-locator disclosure:** the wrapper reported locators different from the refs passed for the dropdown arrow, the Expand toggle, and the typing action; the identities were confirmed by the resulting UI state (T3 report §8.1).
- **Counts (T3):** tab lists 1; tab selects 0; clicks 5; Event typing 1; Tab key 1; snapshots 8; screenshots 6; metadata changes 1 (the Prompt's Event association); Save 0; sequence 1 change 0; FX_RefreshButton change 0; Form open or close 0; runtime actions 0.
- **Unexpected:** none in the association; the FX_Test group auto-collapsed on commit and the Expand cleared the handler selection (view-state only). Console 4 errors (unchanged since T2; source unidentified).
- **Next (not started):** sequence 1 migration needs a new instruction; the Designer must not be saved until both moves, the FX_RefreshButton change, and the full pre-Save comparison are validated.

## T4 — sequence 1 Set Values moved to FX_Test; pre-Save grouping (cycle 3; details `evidence/EXP-058/T4-sequence1-set-values-migration-and-pre-save-grouping-report.md`)

- **Gate (passed, before any mutation):** tab list; identity Name `FX_Items`, User version, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save enabled (T3 dirty state); no dialog; `FX_Test` contained only seq 0 Prompt; `StdFormRefreshCompleted` contained only seq 1 Set Values (`t4-snapshot-00`).
- **Pre-change readback of seq 1:** Event `StdFormRefreshCompleted`; Sequence 1; Disabled False; Type Set Values; Parameters `SETVARVALUES(FX_VarTest=P(FX_Description))` (`t4-snapshot-01`, `t4-01`).
- **Picker:** the Event dropdown (opened by its arrow; no value change) listed `FX_Test` as its first option (`t4-snapshot-02`, `t4-02`). In T3 the picker did not list it. The cause is not established.
- **Entry (native editable combobox):** typed `FX_Test` (no Enter), intermediate state captured (`t4-snapshot-03`, `t4-03`); committed with one Tab press.
- **Result:** one `FX_Test` group with two rows, seq 0 Prompt (Disabled false) and seq 1 Set Values (Disabled false). The `StdFormRefreshCompleted` group header no longer appears; grep for `StdFormRefreshCompleted` in the grid returns no match (`t4-snapshot-04`, `t4-04`). Set Values readback: Event `FX_Test`, Sequence 1, Disabled False, Type Set Values, original parameters (`t4-snapshot-08`).
- **Read-only parameter checks:** Prompt dialog: Message Text `Hello World`; OK the only checked response (`t4-05`; `t4-snapshot-06`). Set Values dialog: Variables `FX_VarTest=P(FX_Description)` (`t4-06`; `t4-snapshot-09`). Both closed with Cancel; no OK.
- **Final pre-Save state:** one FX_Test group, two enabled actions in order, exactly two handler actions, no StdFormRefreshCompleted; Save enabled; no dialog; no open dropdown (`t4-snapshot-10`, `t4-07`).
- **Tool-locator disclosure:** five actions (dropdown arrow, typing, both Parameters buttons, Cancel buttons) reported wrapper locators that differ from the refs passed; each identity confirmed by its resulting UI state (T4 report §6).
- **Counts (T4):** tab lists 1; tab selects 0; Designer clicks 8; Event typing 1; Tab 1; snapshots 11; screenshots 7; metadata changes 1 (Set Values Event association); Parameters dialogs opened 2, cancelled 2, OK 0; Save 0; Regenerate/Undo/Redo 0; FX_RefreshButton change 0; Form open or close 0; runtime actions 0.
- **AC-3 (pre-Save):** established on the grouping, enabled-state, count, and readback checks above; residuals are that icon and Default Button remain visual-only and no server-side confirmation exists until the single Save.
- **Next (not started):** FX_RefreshButton Primary change, then the full before-Save comparison, then one Save. None performed.

## T5 — FX_RefreshButton Events > Primary changed to FX_Test, unsaved (cycle 4; details `evidence/EXP-058/T5-fx-refreshbutton-primary-change-report.md`)

- **Gate (passed, before any mutation):** tab list (tab 0 current); identity Name `FX_Items`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo enabled (dirty); no dialog; one `FX_Test` group with seq 0 Prompt and seq 1 Set Values (both `false`); no `StdFormRefreshCompleted` text in the grid (`t5-snapshot-00`, `t5-01`).
- **Pre-change FX_RefreshButton readback (complete):** Name `FX_RefreshButton`; Caption `FX_Refresh`; Type `PushButton`; Binding Type `None`; Binding blank; Data Source blank; Primary `StdFormRefresh`; Data Change, Lose Focus, Gain Focus blank; Drag From/Drop On `0 event(s)`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab Order `0`; grid Pane 1, Tab 0, Event to generate `StdFormRefresh` (`t5-snapshot-02`, `t5-02`).
- **Picker:** the Primary dropdown offered `FX_Test` as its first option (`t5-snapshot-03`, `t5-03`). The option was clicked once; the value sat in the active combobox, not yet committed.
- **Commit:** one Tab press. Primary readback `FX_Test` (`t5-snapshot-05`, `t5-05`). Re-selecting the row (selection only) left the readback `FX_Test` (`t5-snapshot-06`).
- **Discrepancy (unresolved):** the grid "Event to generate" cell still reads `StdFormRefresh` after commit and after re-select. Possible causes (grid not refreshed until Save; different attribute; uncommitted cache) are not tested. Not repaired.
- **Other properties:** unchanged against the pre-change readback (§ table in the T5 report §2 vs §4).
- **Handler grouping after the change:** one `FX_Test` group, seq 0 Prompt and seq 1 Set Values, both `false`, original summaries; no `StdFormRefreshCompleted` (`t5-07`).
- **Not re-read in T5:** Initial Command, the 17 components beyond FX_RefreshButton, FX_VarTest definition, other Form properties (no edits made to them; limit).
- **Counts (T5):** tab lists 1; tab selects 0; Designer clicks 6; Tab 1; snapshots 8; screenshots 5; metadata changes 1 (Primary); Save 0; Regenerate/Undo/Redo 0; other component or variable change 0; Form open or close 0; runtime actions 0; dialogs 0.
- **AC-4 (FX_RefreshButton portion):** Primary established; other button properties match; one open discrepancy in the grid "Event to generate" column. Not fully clean.
- **Next (not started):** coordinator decision on the grid discrepancy, then a full before-Save comparison, then one Save. None performed.

## T6 — read-only pre-Save AC-4 audit (cycle 5; details `evidence/EXP-058/T6-pre-save-AC4-readonly-audit-report.md`)

- **Gate:** tab list (tab 0 current); identity Name `FX_Items`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save enabled (dirty); Regenerate Form shown enabled (not clicked; dirty-state observation, meaning not established); Undo enabled; Redo disabled; no dialog; handler grid one `FX_Test` group with seq 0 Prompt and seq 1 Set Values, `false`; no `StdFormRefreshCompleted`.
- **Conflict (state A):** grid row "Event to generate" `StdFormRefresh` (cell line 518); Component-tab Primary `FX_Test` (line 907). Both in one frame: `t6-01`.
- **Bounded reinspection (one):** Event Handlers tab, then back to Components (view only). The grid still read `StdFormRefresh` before any reselect; after a reselect (selection only) the grid still read `StdFormRefresh` and Primary still read `FX_Test` (`t6-snapshot-03` to `-05`). **The grid did not update.**
- **Same property or distinct fields?** Not determinable from the visible interface. The two values appear under different labels in different locations; the Properties panel has no "Event to generate" row; before the change both read `StdFormRefresh`; after it they diverge; other components' event cells are blank. Neither explanation is asserted. Resolving it would need a Save/reload or reopen (prohibited in T6).
- **Full comparison (view only):** all 17 grid entries present and matching T1 (Name, Type, Data Source, Pane, Container, Tab), except the FX_RefreshButton "Event to generate" conflict. Native readbacks for all 15 non-Pane components match T1/T2 on Caption, Binding Type, Binding, Location, Size, Tab Order, and events (blank except FX_RefreshButton Primary). New readings only: GridColumn captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM` (not captured in T1). FX_VarTestEdit binding `variables.FX_VarTest` and geometry `12.7222222222222; 30.25`, size `37.05; 2`, tab 0 unchanged. FX_DescriptionEdit binding `object.FX_Description`, geometry `3.25; 23.75`, tab 8 unchanged. FX_VarTest definition Form - Temporary, Persistent False, Global False, Value `~LIT~()` unchanged. Form-level: Initial Command `Refresh`, Version, Device Type, Form Type, Is Master, Script Language, Splitter, Pane scroll bars, Unit, Size `69; 21`, footer scope unchanged. Pane (00) and (01): property tree unavailable (documented; not re-read).
- **Handler grid:** unchanged (one `FX_Test` group, two enabled actions in order, no `StdFormRefreshCompleted`).
- **Gate outcome:** AC-4 Save gate **not satisfied** because the grid/Primary conflict is unresolved. No speculative repair attempted.
- **Counts (T6):** tab lists 1; tab selects 0; Designer clicks 21 (all view or selection); snapshots 8 saved, 2 screenshots; 14 auto-captured accessibility snapshots read by grep (under gitignored `evidence/playwright/`); metadata changes 0; Save 0; Regenerate, Undo, Redo 0; typing 0; key presses 0; dialogs 0; Form open or close 0; runtime actions 0.
- **Next (not started):** the coordinator must decide whether to accept the grid column as an unrefreshed display artefact to be checked after the single Save, or stop. No Save has been performed.

## T7 — operator AC-4 amendment (cycle 8) and the single Designer Save (cycle 8; details `evidence/EXP-058/T7-single-designer-save-and-immediate-post-save-matrix-report.md`)

- **Save (executed once):** native confirmation `Form [FX_Items] and global object(s) were saved.` (`t7-snapshot-07`); Save, Regenerate Form, Undo, and Redo disabled afterward; no error dialog; same FX_Items User-scoped Form still open; Designer not closed or reopened.
- **Immediate post-Save readback:** one `FX_Test` group, seq 0 Prompt and seq 1 Set Values, both `false`, original summaries (`t7-snapshot-08`); no `StdFormRefreshCompleted`; native FX_RefreshButton Primary `FX_Test` (`t7-snapshot-13`); Initial Command `Refresh`; FX_VarTest Form - Temporary, Persistent False, Global False, `~LIT~()` (`t7-snapshot-10`).
- **Discrepancy preserved (amended exclusion):** the Components grid "Event to generate" for FX_RefreshButton still reads `StdFormRefresh` immediately after the Save. It must equal `FX_Test` after the separate close/reopen; not yet checked.
- **Not re-read post-Save:** the other 16 components (limitation).
- **Counts (T7):** tab lists 1; tab selects 0; Designer clicks 12 (incl. 1 Save; 1 accidental Details collapse, restored); snapshots 14; screenshots 4; Designer Save 1; metadata-committing actions 1; close or reopen 0; runtime actions 0.
- **Next (not authorized in T7):** the separate Designer close/reopen verification, which needs a new authorization.

- **Amendment as recorded for this run (from the T7 bounded instruction):** the amended pre-Save gate accepts the native FX_RefreshButton Events > Primary value `FX_Test` before Save. The Components grid "Event to generate" value is **excluded** from the pre-Save comparison. It **must equal `FX_Test` after the later Designer close/reopen**. Until then the grid `StdFormRefresh` is preserved as an unresolved display discrepancy. Limitation: this worker received the amendment's effect through the T7 bounded instruction; the full operator amendment text was not separately available to this worker.
- **Pre-Save gate (T7, read-only):** identity `FX_Items`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save enabled; no dialog; one `FX_Test` group with seq 0 Prompt and seq 1 Set Values (both `false`, original summaries); no `StdFormRefreshCompleted` (plain search: 0 matches); native Primary `FX_Test`; FX_RefreshButton Name, Caption `FX_Refresh`, PushButton, Binding Type None, Size `14.25; 1.89`, Location `12.1666666666667; 5.25` unchanged; grid "Event to generate" `StdFormRefresh` (excluded per amendment; preserved as unresolved).
- **Accidental view-state change (disclosed):** a click intended for the Event Handlers tab was reported by the tool as `#tool-5000` and collapsed the Details panel. Restored by a view-only expand click (tool reported `getByLabel('Expand Panel')` for the ref `e1041` passed). Toolbar and handler grid were confirmed unchanged after restore. No metadata change resulted.

## T8 — ordinary close/reopen and AC-6 recovery verification (cycle 9; details `evidence/EXP-058/T8-designer-close-reopen-and-AC6-recovery-verification-report.md`)

- **Pre-close gate:** tab list (1); identity Name `FX_Items`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Regenerate disabled; no dialog; FX_Test group present (`t8-snapshot-00`).
- **Close (1 of 1):** native Form-tab close control; tablist empty; no unsaved-change prompt; Save disabled (`t8-snapshot-01`).
- **Reopen routes:** attempt 1 = Form menu, then recent-forms `FX_Items` entry — **opened** (`t8-snapshot-02`, `-03`, `t8-01`). Fresh-menu retry **not used** (0 of 1); Designer Open > Select Form fallback **not used** (0 of 1). The Form rendered with the correct identity.
- **Post-reopen identity:** Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer User / `anton.ramos@3mworks.com.ph`; Save disabled; no dialog (`t8-snapshot-03`).
- **MANDATORY event check (PASSED):** Components grid "Event to generate" = `FX_Test` (`t8-snapshot-06` line 518); native Events > Primary = `FX_Test` (`t8-snapshot-07` line 907). Visible: `t8-02` (grid value; Primary out of frame).
- **Handler verification:** one `FX_Test` group; seq 0 Prompt and seq 1 Set Values, both `false`, original summaries; no `StdFormRefreshCompleted` (plain search 0 matches) (`t8-snapshot-09`).
- **Components:** all 17 grid entries present and matching T1/T6; 15 non-Pane components' native readbacks match T1/T2/T6 (`t8-snapshot-15` to `-28`). FX_RefreshButton non-Primary properties unchanged (`t8-snapshot-07`). Pane (00)/(01) not exposed (documented from T2; not re-read).
- **FX_VarTest:** Form - Temporary; Name `FX_VarTest`; Value `~LIT~()`; Persistent False; Global False (`t8-snapshot-12`). **Form properties:** Initial Command `Refresh` and unrelated properties unchanged (`t8-snapshot-13`).
- **Counts (T8):** tab lists 1; tab selects 0; Form-tab close 1; reopen attempts 1 (recent-forms 1 of 2; fallback 0 of 1); Designer clicks 28; snapshots 29; screenshots 2; Designer Save 0; metadata changes 0; Regenerate/Undo/Redo 0; component or variable edits 0; typing 0; dialogs 0; runtime actions 0.
- **Limitations:** database durability not claimed; grid-to-Primary resolution mechanism not established; parameter dialogs not reopened post-reopen (summary strings only); Pane properties not re-read; SaveChanges response and toast not captured.
- **Next (not started):** the runtime steps need a new authorization.

## T9 — runtime close, single open, and initial-state verification (cycle 10; details `evidence/EXP-058/T9-runtime-close-open-and-initial-state-verification-report.md`)

- **Tabs:** list first; tab 1 (Web Client) selected; tab 0 (Designer) not touched.
- **Inherited runtime (pre-action):** FX_Items open; eggs current (`Object 2 of 3`); value box `45 pound iron` (inherited, not the fresh state); Save disabled; no dialog; no prompt (`t9-snapshot-00`, `t9-01`).
- **Close (1 of 1):** internal `Close Panel FX_Items` only; tablist empty; no dialog or prompt (`t9-snapshot-01`).
- **Open (1 of 1):** toolbar Open (1 click) > Select Form dialog with one `FX_Items` row (`t9-snapshot-02`, `t9-02`) > row (1 click) > OK (1 click). Form opened (`t9-snapshot-04`).
- **Opening-time prompts: 0.** Immediate snapshot and settled snapshot (after a 4 s wait; no state change) show no alertdialog and no Hello World text (`t9-snapshot-04`, `-05`).
- **Settled state (AC-7):** three records dumbbell / `45 pound iron` / `45.00` / `EA`; eggs / `cage free` / `6.99` / `DZ`; guitar / `natural acoustic` / `129.99` / `EA` — unchanged. Current row dumbbell (`Object 1 of 3`). Save disabled. Screenshot `t9-03`.
- **Value box (AC-8):** textbox beside FX_Refresh with no value and no accessible name; visibly empty; no error. Component identity inferred by position and Designer binding (`t9-snapshot-05` line 171; `t9-03`).
- **Not done:** FX_Refresh not activated; no prompt dismissed; no runtime Save; no record or selection change; no typing; no Designer interaction.
- **Counts (T9):** tab lists 1; tab selects 1; runtime closures 1; runtime openings 1; clicks 4; wait 1; snapshots 6; screenshots 3; opening prompts 0; FX_Refresh activations 0; dismissals 0; typing 0.
- **Next (not started):** one FX_Refresh activation (AC-9) and the AC-10 comparison need a separate authorization.

## T10 — single FX_Refresh activation, one prompt, one OK, post-dismissal comparison (cycle 11; details `evidence/EXP-058/T10-single-fx-refresh-activation-and-postcondition-report.md`)

- **Tabs:** list first; a read-only snapshot was taken of the Designer (tab 0, still current) before the tab 1 select — an unintended read, no action taken; tab 1 selected; fresh runtime snapshot `t10-snapshot-01`.
- **Pre-activation prerequisites (pass):** FX_Items heading; no dialog; three records unchanged; Save disabled; current record dumbbell (`Object 1 of 3`), Description `45 pound iron`; value box empty (`t10-snapshot-01` line 171; `t10-01`).
- **Activation (1 of 1):** one click on the rendered FX_Refresh (ref `f1e190`). Immediate snapshot before dismissal (`t10-snapshot-02`): one `alertdialog` "Infor Mongoose Application Development Framework - FX_Items", text `Hello World`, one OK; status `FX_Refresh (Object 1 of 3)` (`t10-02`).
- **OK (1 of 1):** one click on OK (ref `f1e693`). Post-dismissal snapshot `t10-snapshot-03`: no dialog; value box `45 pound iron` (line 171); Description `45 pound iron` (line 179); records unchanged (lines 151–168); Save disabled (line 59). Screenshot `t10-03`.
- **AC-9:** PASSED (one activation; one expected prompt; captured before one OK).
- **AC-10:** PASSED on the observed comparison: value box `45 pound iron` = dumbbell Description `45 pound iron`. The value box identity is inferred (no accessible name); its emptiness and its value are observed directly. The FX_Test-bound value's producing action is not isolated. Observed only; not replay-verified.
- **Counts (T10):** tab lists 1; tab selects 1; FX_Refresh activations 1 (cumulative 1); prompts observed 1; OK dismissals 1 (cumulative 1); opening-time prompts 0 (cumulative); runtime closures and openings unchanged (T9: 1 and 1); clicks 2; snapshots 4 (one of them the unintended Designer read); screenshots 3; console error checks 1 (0 errors); business mutations 0; runtime Save 0; record changes 0; typing 0.
- **Next:** no further runtime interaction is authorized by T10.

## T11 — final acceptance reconciliation and documentation (cycle 12; details `evidence/EXP-058/T11-final-acceptance-matrix-and-action-audit.md`)

- **Scope:** documentation only. Zero browser calls, zero Designer or runtime interactions, zero metadata changes.
- **AC matrix (summary; evidence paths in the T11 file §2):**
  - AC-1 supported with limits (EXP-055 record reviewed only at T2, after T1's browser operations; console 3 errors at T1).
  - AC-2 supported with limits (Pane (00) and (01) expose no Component-tab properties; documented).
  - AC-3 supported with limits (both handler moves by typed editable entry + Tab; controller flagged the two `browser_type` calls as prohibited-tool hits, brief-required, for coordinator review).
  - AC-4 supported under the cycle-8 amendment with the discrepancy recorded. The original AC-4 text alone was not met at T6 (grid "Event to generate" `StdFormRefresh` vs Primary `FX_Test`). The amendment's full text was not seen by the worker; only the T7 summary.
  - AC-5 supported with limits (toast not visible in screenshots; SaveChanges body not captured; other components re-read after reopen, not immediately after Save).
  - AC-6 supported with limits (recent-forms attempt 1 of 2 succeeded; no retry; no fallback; UI recovery, not durability; parameter dialogs not reopened after reopen).
  - AC-7 supported with limits (opening window immediate plus about 4 s; cache versus server metadata source not established).
  - AC-8 passed on its written criterion; identity of the value box inferred (no accessible name).
  - AC-9 PASSED: one activation; one `alertdialog` titled `Infor Mongoose Application Development Framework - FX_Items`, text `Hello World`, single OK, captured before dismissal; one OK.
  - AC-10 PASSED on the observed comparison: selected Item `dumbbell`; FX_Description `45 pound iron`; unnamed value box `45 pound iron`; equality passed. Identity inferred; hidden whitespace cannot be independently excluded; producing action not isolated.
  - AC-11 reconciliation supported (2 handler migrations; 1 Primary change; 1 Save; 1 close; 1 recent-forms reopen on the first attempt; 0 retries or fallbacks; 1 runtime closure; 1 runtime opening; 0 opening-time prompts in the observed window; 1 FX_Refresh activation; 1 prompt; 1 OK; 0 business-data changes; 0 runtime Saves; 0 extra activations). **Repository confinement NOT demonstrated from the worker session.**
- **Controller audit reconciliation:** interaction calls 134 (clicks 118; tab selects 5; mouse move 1; wheel 5; typed entries 2; Tab commits 3); reads 186; prohibited-tool hits 2 (both `browser_type`, T3 and T4); errors 2 (both harmless non-browser calls: a `Read` before record creation in T1; a `Grep` regex in T4). Agrees with the worker's own per-task counts.
- **Confinement (from controller audit `Write`/`Edit` rows only):** worker-authored writes are the EXP-058 record and `evidence/EXP-058/T1…T11` reports. Controller-generated `harness-audit-T1…T10.md` and gitignored `evidence/playwright/` captures are disclosed separately. Pre-existing `tools/learning-harness/` modifications from the session-start status are disclosed and were not touched by this worker. Repository-level status was not verified (no shell).
- **Final browser state (T10):** runtime FX_Items open, dumbbell current, value box `45 pound iron`, Save disabled, no dialog; activation and OK budgets used. Designer clean at T10 start (Save disabled, FX_Items, User scope).
- **Knowledge:** observed except the typed-entry-plus-Tab commit route, classified candidate_procedure (not verified). Unresolved: grid-value mechanism; picker-offer difference T3 vs T4; producing action of the runtime value; runtime metadata source. Replay-verified: none.
- **Next:** none. The coordinator decides on the confinement evidence and on the outcome. No further runtime or Designer operation is authorized by T11.

## Acceptance checks (IDs as in the brief)

| AC | Status after T1 | Basis |
| --- | --- | --- |
| AC-1 Read-only preflight (tabs, Designer session, exact identity, clean Save-disabled, no challenge or error) | **Supported with limits** | `T1-preflight-baseline-report.md` §3; `t1-01`, `t1-08`; `t1-snapshot-00`, `-26`. Limits: runtime value box identity inferred by position; EXP-055 T-reports not reviewed. |
| AC-2 Pre-mutation baseline (handler pair with parameters, Initial Command Refresh, 17 components, explicit three readbacks, FX_VarTest definition, no FX_Test) | **Supported with limits** | `T1-preflight-baseline-report.md` §4; `t1-02`–`t1-07`, `t1-09`, `t1-10`; `t1-snapshot-01`–`-03`, `-19`–`-25`. Limits: Pane (00)/(01) properties not read; Components screenshot shows the lower rows only; FX_VarTestEdit Properties Data Source row blank vs grid `variables.FX_VarTest`. |
| AC-3 Action migration (both actions to FX_Test, picker or native entry recorded) | Not tested | Not started. |
| AC-4 FX_RefreshButton Primary FX_Test and unchanged properties | Not tested | Not started. |
| AC-5 One Designer Save, clean, post-Save readback | Not tested | Not started. |
| AC-6 Designer close and reopen (recent-forms route, retry limits) | Not tested | Not started. |
| AC-7 Inherited runtime closed once; FX_Items opened once; three records; no opening prompt | Not tested | Not started. |
| AC-8 FX_VarTestEdit initially empty | Not tested | Not started. |
| AC-9 One FX_Refresh activation, one prompt, one OK | Not tested | Not started. |
| AC-10 Value equals selected row's FX_Description | Not tested | Not started. |
| AC-11 Reconciliation, confinement, classification | Not tested | Not started. |

## T1 baseline summary (observed, single Designer session)

- **Form:** Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Initial Command `Refresh`; Save, Regenerate Form, Undo, Redo disabled; no dialog.
- **Handlers:** one group `StdFormRefreshCompleted`. Seq 0 Prompt, Disabled false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Seq 1 Set Values, Disabled false, `SETVARVALUES(FX_VarTest=P(FX_Description))`. Prompt readback: Message Text `Hello World`, OK the only checked response. Set Values readback: Variables `FX_VarTest=P(FX_Description)`, Components and Properties blank. No FX_Test group.
- **FX_VarTest:** Form - Temporary; Name `FX_VarTest`; Description blank; Value `~LIT~()`; Persistent False; Global False. Form - Persistent holds only `InitialCommand`.
- **Components:** 17 entries (Pane 00, FormCollectionGrid, four GridColumns, Pane 01, eight static/edit/combo entries, FX_RefreshButton, FX_VarTestEdit). FX_RefreshButton Primary `StdFormRefresh`, Caption `FX_Refresh`, Binding Type None, Location `12.1666666666667; 5.25`, Size `14.25; 1.89`, Tab 0. FX_DescriptionEdit Binding Type Property `object.FX_Description`, Location `3.25; 23.75`, Size `37.05; 2`, Tab 8. FX_VarTestEdit Binding Type Variable `variables.FX_VarTest`, Location `12.7222222222222; 30.25`, Size `37.05; 2`, Tab 0, events blank.
- **Runtime (inherited, not acted on):** FX_Items open; eggs row current (`Object 2 of 3`; Item `eggs`, Description `cage free`); unnamed value box `45 pound iron`; FX_Refresh rendered; Save disabled; no dialog; console 0 errors, 2 warnings.

## Evidence

- `evidence/EXP-058/T1-preflight-baseline-report.md`: full T1 report, 17-row baseline table, action audit, limitations.
- `evidence/EXP-058/t1-snapshot-00` … `t1-snapshot-28`: accessibility snapshots (29 files).
- `evidence/EXP-058/t1-01` … `t1-10`: screenshots (10 files). Decisive: `t1-01` (Form identity, Initial Command, FX_VarTest Form - Temporary, User footer); `t1-06` and `t1-07` (both parameter readbacks, before Cancel); `t1-08` (runtime inherited state); `t1-09` (one group, two actions); `t1-10` (partial Components grid).

## Action counts (T1)

- Tab lists 1; tab selects 3.
- Designer clicks 27 (tab views 6, component row selections 15, handler row selections 2, dialog opens 2, dialog Cancels 2). Every dialog closed with Cancel; no OK.
- Designer Save, Regenerate, Undo, Redo: 0. Metadata-changing actions: 0. Typing: 0. Key presses: 0.
- Runtime clicks, activations, prompt dismissals, typing: 0. Designer Form open, close or reopen: 0.
- Snapshots 29; screenshots 10. Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript: 0.

## Blockers and open items

1. Pane (00) and Pane (01) property rows not read in T1 (prior runs recorded them as unavailable). The operator can decide whether T2 reads them before the pre-Save comparison.
2. FX_VarTestEdit Properties Data Source row is blank while the grid and Binding show `variables.FX_VarTest`. Cause unresolved; not repaired.
3. EXP-056 FX_VarTest absence versus EXP-057 presence: unresolved.
4. Runtime value box identity is a position-and-definition inference (no accessible name).
5. Designer console: 3 errors; source unidentified (not investigated).
6. Repository confinement: this worker has no shell. The harness computes repository status. This record claims only what it wrote.

## Next permitted step (NOT STARTED; requires operator approval)

**T2 — the migration and the single Designer Save.** Operator approval is required before it runs. Planned sequence:

1. Sequence 0 Prompt: change Event To Handle > Event from `StdFormRefreshCompleted` to `FX_Test` (combobox dropdown if offered; else the documented editable entry). Capture the intermediate state and whether `FX_Test` appeared automatically.
2. Sequence 1 Set Values: same native route. Reinspect both actions' identity and parameters.
3. Before Save: one `FX_Test` group with both actions in original order, not duplicated; no `StdFormRefreshCompleted` group remains; parameters, sequence and enabled states unchanged.
4. FX_RefreshButton only: Events > Primary `StdFormRefresh` to `FX_Test`.
5. Full before-Save comparison against the T1 baseline. Any discrepancy stops the run before Save.
6. One ordinary Designer Save; verify clean state and Save disabled.

## Repository changes (T1)

- Created: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` (this record).
- Written: `evidence/EXP-058/` (T1 report, 29 snapshots, 10 screenshots).
- Not modified: `AGENTS.md`, `docs/`, `tools/`, recipes, EXP-055/056/057 records and evidence, any non-FX_ artifact, any Mongoose artifact.

## Knowledge state (T1)

| Finding | State |
| --- | --- |
| Designer identity (User scope, ScopeName anton.ramos@3mworks.com.ph), clean Save-disabled state | observed (single session) |
| Two original handler actions, one StdFormRefreshCompleted group, enabled, parameters as read; no FX_Test group | observed (single session) |
| FX_RefreshButton Primary StdFormRefresh; FX_VarTestEdit binding variables.FX_VarTest; FX_VarTest Form - Temporary | observed (single session) |
| 17-entry inventory and explicit component readbacks | observed (single session) |
| Pane (00)/(01) properties | not observed (limitation) |
| FX_VarTestEdit Data Source discrepancy (grid vs Properties row) | observed; cause unresolved |
| Inherited runtime state (eggs current, value `45 pound iron`) | observed (single session) |
| Migration effect, Save, reopen, runtime behaviour | not tested |
| Replay-verified findings | none |

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-175814-gBsz: completed/accepted at cycle 14). Observed only, not replay-verified. **Hello World Part 3 is complete (sections 1–8).**

Operator calls during the run (standing authorization, 2026-10-11):
1. **T6 pause, Save gate:** the Components grid "Event to generate" cell still read StdFormRefresh while Events > Primary read FX_Test. I ruled the grid column a derived display that refreshes only after Save and reopen (the EXP-054-R2 precedent). It was excluded from the pre-Save comparison and made a mandatory post-reopen check. That check passed (`t8-02`).
2. **T11 pause, confinement:** I supplied a git-status audit:
   - new paths: only this record and `evidence/EXP-058/` (195 files);
   - the `tools/learning-harness/` changes predate the session;
   - `evidence/playwright/` is gitignored.

   Because this pause recurred (EXP-057, EXP-058), a standing rule now sits in `protocol/coordinator-protocol.md`: confinement is judged from the worker file lists and harness audits, never by a pause.

Changed, for later cleanup (User-scope Form `FX_Items`; one Designer Save, then a close and a recent-forms reopen at the first attempt):
- **Both actions moved** from `StdFormRefreshCompleted` to a new custom event **`FX_Test`**, keeping their order and parameters:
  - sequence 0: Prompt `Hello World`;
  - sequence 1: Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- No handler remains on StdFormRefreshCompleted.
- **FX_RefreshButton** Events > Primary changed from StdFormRefresh to **`FX_Test`**. Its caption is still `FX_Refresh`.
- Unchanged: Initial Command Refresh, FX_VarTestEdit (`variables.FX_VarTest`), all other components, data, and preferences.

Operator screenshot review:
- `t8-02`: the reopened Designer (User scope), Properties `FX_RefreshButton (Button)`. In the Components grid, its row reads PushButton / Pane 1 / Tab 0 / Event to generate **FX_Test**. FX_VarTestEdit shows Edit / `variables.FX_VarTest`.
- `t9-03`: one runtime open shows **no prompt**. Three rows loaded (Initial Command Refresh), dumbbell is current, and **FX_VarTestEdit is empty**. Status "Description (Object 1 of 3)".
- `t10-02`: one FX_Refresh click shows the modal "Hello World" prompt. The box behind it already shows "45 pound…".
- `t10-03`: after OK, **FX_VarTestEdit shows "45 pound iron"** (dumbbell's FX_Description). The rows are unchanged.

Learned (observed):
1. **Custom events are created by typing their name.** The handler's Event To Handle > Event drop-down offers only the built-in `Std*` events. Typing a new name (FX_Test) into the editable combobox creates the custom event and regroups the action under it. After the first action had been moved, the second action's drop-down listed FX_Test. The button's Primary picker also offered FX_Test.
2. **Moving vs. adding:** changing an action's event moves it to the new event group; it does not copy it. Moving both actions emptied and removed the StdFormRefreshCompleted group.
3. **Isolation from refresh:** with the handlers on a custom event, opening the Form (Initial Command Refresh) runs neither of them. A button whose Primary is the custom event runs both. This confirms the tutorial's section 8 narration.
4. **The grid column lags:** the Components grid "Event to generate" column lags until Save and reopen. Events > Primary is the authoritative pre-Save value (second observation, after EXP-054-R2).
5. **Unresolved ordering:** in `t10-02` the Set Values result (sequence 1) was already visible while the sequence 0 Prompt was still open. So at runtime a Prompt with an OK-only response may not block the following action. Unresolved, observed once.

Limits:
- Same session, UI level only.
- No diagnostics this time (operator decision), so the `FX_Test` event row in the log was not captured.
