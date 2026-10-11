# EXP-057 — Hello World Part 3 Section 8: FX_Items Saved Definition Recovery and Runtime Set Values Verification

**FINAL STATUS (T9 audit): proposed outcome BLOCKED. The exact failed check is AC-11, the repository confinement component, which cannot be demonstrated from this session (no shell or git tool; the harness diff settles it). No experimental check AC-1 to AC-10 failed.** AC-1 to AC-10 are observed, with the limitations below. AC-8 passed on its written criterion but is non-discriminating (value unchanged across refresh); AC-5 passed on presence, which contradicts EXP-056's absence reports (unresolved). Full matrix, counts, deviations, and confinement audit: `evidence/EXP-057/FINAL-acceptance-and-audit-report.md`. If the harness diff confirms confinement, the proposed outcome becomes accepted (observed).

The stacked status paragraphs below are the chronology; the paragraph above supersedes them.

**Status (T8, eggs-row observation): AC-9 optional observation recorded (single runtime session).** One native row selection moved the current row from dumbbell to eggs (`Object 2 of 3`; Description `cage free`). The unnamed value box right of FX_Refresh **stayed `45 pound iron`** (unchanged; not cleared; no error). Records unchanged; runtime Save disabled; no dialog; no refresh. This does not show whether the earlier refresh re-evaluated `P(FX_Description)`. The value-box identity is still a position-and-definition inference. Cumulative budgets unchanged: runtime closures 1, openings 1, prompts 2, OK dismissals 2, FX_Refresh clicks 1, Designer Saves 0, metadata and business-data changes 0. Experiment not finalized (acceptance matrix and repository audit pending).

Task-header note (T8): the run was issued with `task=T8` in its header; the bounded instruction was the eggs-row observation. The bounded instruction was followed.

Earlier status (T4): AC-8 passed on exact equality, with a limitation (single runtime session). One FX_Refresh click produced one Hello World prompt; one OK dismissed it. Afterwards the selected dumbbell's Description `45 pound iron` equals the displayed value `45 pound iron`. **The value did not change across the refresh** (it was already `45 pound iron` before), so this run does not demonstrate a refresh-driven re-evaluation of `P(FX_Description)`. Eggs-row optional step not performed (forbidden in T4). Records unchanged; runtime Save disabled. FX_VarTestEdit identity still a position-and-definition inference. Cumulative: runtime closures 1, openings 1, prompts 2, OK dismissals 2, FX_Refresh clicks 1, Designer Saves 0, metadata and business-data changes 0. No overall outcome classified yet.

Task-header note (T4): the run was issued with `task=T7` in its header; the bounded instruction was T4 (single refresh). The bounded instruction was followed.

Earlier status (T3): AC-6 observed and AC-7 passed on exact equality (single runtime session). The inherited runtime FX_Items tab was closed once; FX_Items was opened once through runtime Open > Select Form; the automatic `Hello World` prompt was captured before one OK. After dismissal, the displayed FX_VarTestEdit value `45 pound iron` equals the selected row's (dumbbell) FX_Description `45 pound iron`. Caveat: FX_VarTestEdit identity inferred from position and being the only unnamed Edit, not confirmed by name. AC-8 (single FX_Refresh and second prompt) is **not started**; the runtime is preserved for it. No overall outcome is classified yet.

Task-header note (T3): the run was issued with `task=T6` in its header; the bounded instruction was T3 (runtime close, opening, and initial observation). The bounded instruction was followed.

Earlier status (T2D): AC-5 passed on evidence of presence (observed, single Designer session). The Variables tab lists the Form-variable definition `FX_VarTest` under **Form - Temporary**: Name `FX_VarTest`, Description blank, Value `~LIT~()`, Persistent False, Global False. It is returned by the exact-name filter. **Discrepancy:** EXP-056 reported FX_VarTest absent, and the same filter string `VarTest` returned no rows there; here it returns the row. The cause is **unresolved** and is not inferred. The runtime steps (AC-6 to AC-9) are **not started**. No overall outcome is classified yet.

Task-header note (T2D): the run was issued with `task=T5` in its header; the bounded instruction was T2D (native Variables inspection, no runtime). The bounded instruction was followed.

Earlier status (T2C): AC-4 observed (single Designer session), with one unresolved discrepancy. The Components grid lists 17 entries: the 16 originals plus one FX_VarTestEdit. Every original row matches EXP-056 T8 on the grid columns. FX_VarTestEdit: Name, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Location `12.7222222222222; 30.25`, Size `37.05; 2`, Events blank. **Discrepancy:** its Components-grid Data Source cell now reads `variables.FX_VarTest`, whereas EXP-056 T6–T8 recorded it blank; cause unresolved, not repaired. The Variables tab check (AC-5) and runtime steps (AC-6 to AC-9) are **not started**. No overall outcome is classified yet.

Task-header note (T2C): the run was issued with `task=T4` in its header; the bounded instruction was T2C (read-only component inventory, no runtime). The bounded instruction was followed.

Earlier status (T2B): AC-3 observed (single Designer session). The recovered FX_Items Form shows one `StdFormRefreshCompleted` group with sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` and sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`, both Disabled false; Initial Command `Refresh`; Save disabled. Designer recovery was observed in T2A (first recent-forms attempt). Component inventory and the Variables check (AC-4, AC-5) and the runtime steps (AC-6 to AC-9) are **not started**. No overall outcome is classified yet.

Task-header note: the T2B run was issued with `task=T3` in its header; the bounded instruction was T2B (read-only handler verification, no runtime). The bounded instruction was followed.

Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User (`ScopeName: anton.ramos@3mworks.com.ph`, from the Designer footer). Target Form `FX_Items`.
Run `R-20261011-172309-X5Gt`, cycle 0, task T1.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `8ea38de0-5411-4956-a6d3-3f6e112b988f`.
Continuation of EXP-056 (blocked at AC-8; not replayed). Brief commits: `08ac33c` (draft), `b71eca5` (approved).

## Objective (from the brief, unchanged)

On the existing User-scoped `FX_Items` Form saved in EXP-056:
1. Recover the Form in Web Designer through a bounded native route (recent-forms, at most two attempts; then one Designer Open toolbar attempt).
2. Verify the saved Prompt and Set Values actions, the variable-bound Edit `FX_VarTestEdit`, the original components, and Initial Command Refresh.
3. Independently record whether the Form variable `FX_VarTest` exists (observation only; not created or repaired).
4. Reopen the inherited runtime Form once via Web Client Open > Select Form; capture the automatic Hello World prompt; read `FX_VarTestEdit` against the selected row's Description.
5. Click FX_Refresh once; capture the second prompt; read the value again. Optional: select the eggs row without another refresh.

Classification: observed recovery and runtime behaviour only. Not replay verification, not independent database durability, not cache-eviction or FormSync evidence.

## Acceptance checks (IDs as in the brief)

AC-1 preflight; AC-2 Designer recovery (identity, scope, Save disabled); AC-3 handler; AC-4 component inventory and Edit properties; AC-5 variable-definition observation; AC-6 runtime closure, opening and first prompt; AC-7 initial value equals selected Description; AC-8 second activation and value equality; AC-9 unchanged records and optional eggs-row observation; AC-10 reconciliation of counts; AC-11 acceptance matrix and repository confinement.

## Prior state (from EXP-056 T8–T10; read in T1)

- Saved in EXP-056 T8 (one Designer Save, native success `Form [FX_Items] and global object(s) were saved.`, Designer-session observation): `StdFormRefreshCompleted` with sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` and sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`; FX_VarTestEdit (Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Location `12.7222222222222; 30.25`, Size `37.05; 2`, Tab 0, Events blank); Components-grid Data Source for FX_VarTestEdit blank (unresolved).
- FX_VarTest Form-variable definition absent before Save, after Save (T8), and after the failed reopen attempt (T9, not observable). Not recreated.
- EXP-056 T9: clean Designer close; the one recent-forms reopen failed (menu item not visible at click; no Form opened). Not retried.
- EXP-056 T10 final: BLOCKED, AC-8 failed. Designer on empty canvas, no Form open. Web Client on inherited runtime tab, not interacted with since T1.
- Source reports: `evidence/EXP-056/T8-report.md`, `evidence/EXP-056/T9-report.md`, `evidence/EXP-056/T10-final-blocked-report.md`.

## T1 — read-only preflight (complete; details `evidence/EXP-057/T1-preflight-report.md`)

- **Tabs.** `browser_tabs list` before any select. Tab 0 Designer (current); tab 1 Mongoose on the Infor OS portal. `select 0` and `select 1` both succeeded.
- **Designer (AC-1).** Form tab list empty; no Form open; canvas empty; Properties empty. Save, Regenerate Form, Undo, Redo disabled. Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No dialog, no session challenge. Console 3 errors (EXP-056 recorded 2; the third is not identified). Screenshot `evidence/EXP-057/t1-01-designer-empty-canvas-user-scope-clean.png`; snapshot `evidence/EXP-057/t1-snapshot-00-designer-tab0-fresh-empty-canvas.md`.
- **Runtime (AC-1, inherited, not acted on).** Form tab `FX_Items` selected. Records: dumbbell / `45 pound iron` / `45.00` / `EA`; eggs / `cage free` / `6.99` / `DZ`; guitar / `natural acoustic` / `129.99` / `EA`. Current row dumbbell. `FX_Refresh` rendered. Save disabled. Status `FX_Refresh (Object 1 of 3)`. **No FX_VarTestEdit rendered or in the accessibility tree.** No prompt or dialog. Screenshot `evidence/EXP-057/t1-02-runtime-tab1-inherited-fx-items-not-acted.png`; snapshot `evidence/EXP-057/t1-snapshot-01-runtime-tab1-fresh-inherited.md`.
- **Inferred, not proven.** The inherited runtime instance appears to have loaded before the `StdFormRefreshCompleted` handler existed (its load log shows zero handlers for that event). Its relation to the EXP-055/056 saves is not reconciled; T3 is the planned check.
- **Reconciliation with EXP-056 final state.** Matches on Designer state, scope, records, FX_Refresh, Save state, and absence of FX_VarTestEdit in the runtime. No stop condition was triggered.

## T2A — bounded Designer recovery of FX_Items (complete; details `evidence/EXP-057/T2A-recovery-report.md`)

- **Route (AC-2).** Attempt 1: Designer `Form` menu opened once; fresh menu snapshot (`t2-snapshot-01`) showed the single recent-forms `FX_Items` entry; the entry was clicked once and **succeeded** (no timeout). Retries: **0** (of 1 allowed). Recent-forms attempts used: **1** (of 2 allowed). Alternative Designer Open toolbar and Select Form route: **not used** (0 of 1 allowed). No URL typed; the Designer tab URL changed to `...default.aspx?MGForm=FX_Items` as the Designer's own response to the native menu action.
- **Identity (AC-2).** One Form tab, selected, heading `FX_Items`. Properties > Design: Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`. Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Matches the EXP-056 baseline. Behavior > Initial Command `Refresh` (readback only).
- **Clean state (AC-2, AC-5 gate).** Save, Regenerate Form, Undo, Redo `[disabled]`. No dialog. Designer console still 3 errors (count unchanged from the pre-menu state; source not identified).
- **Evidence.** `t2-snapshot-00` (pre-menu), `t2-snapshot-01` (menu, fresh), `t2-snapshot-02` (post-open identity), `t2-01` (screenshot: canvas, Properties Name, Initial Command, Save greyed, User footer). Browser: tab 0 only; tab 1 untouched.
- **Not done (by instruction).** Handler, component, and Variables inspection (reserved for the next task). No Save, Regenerate, Undo, Redo, component or handler edit, Variables change, or runtime action.
- **Counts (T2A).** Tab lists 1; tab selects 1; saved snapshots 3; read-only finds 2; screenshots 1; clicks 2 (both succeeded; timeouts 0); browser-reference errors 0; Designer Save 0.
- **Knowledge state.** The first recent-forms attempt opening FX_Items in this session: **observed** (single session). The EXP-056 T9 failure cause: **unresolved** (this success does not explain it).

## T2B — read-only saved-handler verification (AC-3; complete; details `evidence/EXP-057/T2B-handler-verification-report.md`)

- **Start state (AC-2 re-confirmed).** Tab 0 selected after a tab list; one `FX_Items` Form tab; Properties > Design Version `User version for user anton.ramos@3mworks.com.ph`; Initial Command `Refresh`; footer User / `anton.ramos@3mworks.com.ph`; Save, Regenerate, Undo, Redo disabled; no dialog.
- **Handler grid (AC-3).** Details panel expanded (view only); Event Handlers tab; grid Expand (view only). One group `StdFormRefreshCompleted`; two actions. Row 0: sequence 0, Prompt, Disabled false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Row 1: sequence 1, Set Values, Disabled false, `SETVARVALUES(FX_VarTest=P(FX_Description))`. Matches EXP-056 T1 (Prompt) and T8 (both rows).
- **Prompt Parameters readback (read-only).** Dialog "Event Handler Parameters": Message Text `Hello World`; OK checked and default; Yes/No/Abort/Retry/Ignore/Cancel unchecked; Ignore Failure, Message as Toast?, Disabled, Stop-if unchecked; Caption blank; info icon radio selected (screenshot). Closed with **Cancel**.
- **Set Values Parameters readback (read-only).** Dialog: Variables textbox `FX_VarTest=P(FX_Description)`; Components and Properties blank. Closed with **Cancel**.
- **Final state.** No dialog; FX_Items tab selected; Save disabled; row 1 selected in the grid (selection only). Designer left stable and non-editing.
- **Not done.** No text entry, no OK, no Save, Regenerate, Undo, Redo, add, delete, copy, reorder, or enable/disable; StdFormRefreshCompleted unchanged; Components and Variables tabs not opened; no runtime action.
- **Counts (T2B).** Tab lists 1; tab selects 1; clicks 9 (all succeeded; no timeouts); finds 2; snapshots 10; screenshots 4; Parameters dialogs opened 2, Cancelled 2; typing 0; Save 0; handler changes 0; runtime 0.
- **Knowledge state.** The recovered Form's handler, Prompt, and Set Values readbacks: **observed** (single Designer session; not replay-verified). The icon radio and Keep combobox: screenshot-only. Runtime evaluation of `P(FX_Description)`: **unresolved** (T3/T4).

## T2C — read-only component inventory and properties (AC-4; complete; details `evidence/EXP-057/T2C-component-inventory-report.md`)

- **Start state (AC-2 re-confirmed).** Tab 0 selected after a tab list; FX_Items tab; Version `User version for user anton.ramos@3mworks.com.ph`; footer User / `anton.ramos@3mworks.com.ph`; Save, Regenerate, Undo, Redo disabled; no dialog.
- **Inventory (AC-4).** Components tab (view), grid Expand (view). **17 entries**: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_RefreshButton; FX_VarTestEdit. Exactly one FX_VarTestEdit. All 16 originals match EXP-056 T8 `t8-snapshot-07` row text (Name, Type, Data Source, Pane, Container, Tab, Event to generate).
- **FX_VarTestEdit (AC-4).** Name `FX_VarTestEdit`; Type Edit; Binding Type `Variable`; Binding `variables.FX_VarTest`; Location `12.7222222222222; 30.25`; Size `37.05; 2`; Tab Order 0; Caption blank; Primary, Data Change, Lose Focus, Gain Focus blank; Drag From / Drop On 0 / 0. Matches the brief and EXP-056 T6–T8 except the Data Source cell (below).
- **FX_RefreshButton (AC-4).** Caption `FX_Refresh`; PushButton; Binding Type None; Binding blank; Primary `StdFormRefresh`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab 0; other events blank; 0 / 0. Matches EXP-056 T1/T6.
- **FX_DescriptionEdit (AC-4).** Caption `C(FX_DescriptionStatic)`; Edit; Binding Type Property; Binding `object.FX_Description`; Size `37.05; 2`; Location `3.25; 23.75`; Tab 8; events blank. Matches EXP-056 T1/T7. Drag/Drop not re-read here.
- **Data Source discrepancy (unresolved).** EXP-056 T6, T7, T8 recorded the FX_VarTestEdit Data Source cell blank (same session as the Save). This session's grid shows `variables.FX_VarTest` (`t4-snapshot-02` line 528). The Properties Binding agrees with `variables.FX_VarTest`. The cause of the change is not established; candidate explanations are untested. Not repaired.
- **Unavailable fields.** Pane (00) and Pane (01) properties (not opened; unavailable per EXP-056). FX_DescriptionEdit Drag/Drop (not re-read).
- **Not done (by instruction).** No text entry, no Parameters or Edit dialog, no Save, Regenerate, Undo, Redo, add, move, resize, rename, or delete; Variables tab not opened; no runtime action.
- **Counts (T2C).** Tab lists 1; tab selects 1; clicks 5 (all succeeded; timeouts 0); snapshots 7; screenshots 2; typing 0; Save 0; component changes 0; runtime 0.
- **Knowledge state.** The 17-entry inventory, the 16-original row match against EXP-056 T8, and the FX_VarTestEdit, FX_RefreshButton, FX_DescriptionEdit property readbacks: **observed** (single Designer session; not replay-verified). The Data Source blank-to-populated change: **observed; cause unresolved**.

## T2D — read-only Variables verification of FX_VarTest (AC-5; complete; details `evidence/EXP-057/T2D-variables-verification-report.md`)

- **Start state (AC-2 re-confirmed).** Tab 0 selected after a tab list; FX_Items tab; Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer User / `anton.ramos@3mworks.com.ph`; Save, Regenerate, Undo, Redo disabled; no dialog.
- **Form-category inventory.** Variables tab (view), grid Expand (view). Form - Persistent: `InitialCommand`. **Form - Temporary: `FX_VarTest`.** Global groups virtualised (not enumerated; no FX_ row in the rendered portion).
- **FX_VarTest attributes (read-only).** Selected the existing row (selection only): Name `FX_VarTest`; Description blank; Value `~LIT~()` (displayed; not edited); Persistent `False`; Global `False`. Category shown by the grid group, not a property.
- **Exact-name filter (native search).** `FX_VarTest` → one row under Form - Temporary. Positive control `Initial` → `InitialCommand` under Form - Persistent. `VarTest` (the EXP-056 string) → FX_VarTest under Form - Temporary. Filter cleared afterwards.
- **AC-5.** **Passed on evidence of presence** (observed, single session). The outcome is based on the Variables inventory and filter, not on the Set Values assignment, the Edit binding, or the Data Source cell.
- **Discrepancy with EXP-056 (unresolved).** EXP-056 T1, T2, T4, T5, T6, T7, T8 and the T10 final report record FX_VarTest **absent**. Candidate explanations, none tested: (1) the Form - Temporary group was not rendered or expanded in EXP-056; (2) the definition was created after the EXP-056 checks (Save, close, or recovery here); (3) the Set Values Target typed as `FX_VarTest` declares a temporary Form variable (candidate only; Persistent False is consistent with it). EXP-056 is not edited.
- **Not done (by instruction).** No New, no variable property edit, no Value edit, no Save, Regenerate, Undo, Redo, no definition, handler, or component change, no Designer close or reopen, no runtime action.
- **Counts (T2D).** Tab lists 1; tab selects 1; clicks 5 (all succeeded; timeouts 0); native filter entries 4 (`FX_VarTest`, `Initial`, `VarTest`, clear); snapshots 9; screenshots 3; variable creations 0; variable property edits 0; Save 0; runtime 0.
- **Knowledge state.** The Form - Temporary `FX_VarTest` row and its displayed attributes: **observed** (single session; not replay-verified). Its persistence across sessions or saves: **unresolved**. The EXP-056 absence contradiction: **unresolved**.

## T3 — runtime close, single opening, Hello World prompt, initial value observation (AC-6, AC-7; complete for T3; details `evidence/EXP-057/T3-runtime-opening-report.md`)

- **Pre-state (AC-1 runtime re-confirmed).** Tab 1 selected after a tab list. Inherited FX_Items Form tab selected; records dumbbell / eggs / guitar; FX_Refresh present; Save disabled; no FX_VarTestEdit component in the Components readback; no dialog. Screenshot `t6-01`; snapshot `t6-snapshot-00`.
- **Closure (AC-6) — 1 of 1.** One click on `Close Panel FX_Items`. Post-close: Form tablist empty; no dialog (`t6-02`, `t6-snapshot-01`).
- **Opening (AC-6) — 1 of 1.** One click on the runtime toolbar `Open`; the Select Form dialog appeared (one row, Caption `FX_Items` / Name `FX_Items`, pre-filled filter `FX_Items`, no typing). One click on dialog OK. The first snapshot was taken before the dialog rendered; no second Open click (`t6-03`, `t6-04`, `t6-snapshot-02`, `-03`).
- **Prompt (AC-6) — 1 expected, 1 observed, captured before response.** `alertdialog` "Infor Mongoose Application Development Framework - FX_Items", message `Hello World`, one OK (`t6-05`, `t6-snapshot-04`). One OK dismissal (1 of 1).
- **AC-7 readback (after OK; same evidence sequence).** Selected item: dumbbell (grid row 1; Item `dumbbell`). Selected row FX_Description: `45 pound iron` (grid and Description field). Displayed FX_VarTestEdit (unnamed textbox right of FX_Refresh): `45 pound iron`. **Exact equality — passed**, with the identity caveat above. No blank value, mismatch, error, or missing component reported.
- **Records and Save (AC-9 partial).** dumbbell 45 pound iron / 45.00 / EA; eggs cage free / 6.99 / DZ; guitar natural acoustic / 129.99 / EA — unchanged vs T1. Save disabled (`t6-06`, `t6-snapshot-05`).
- **Not done (by instruction).** FX_Refresh (0 of 1 allowed for T4); eggs-row selection (not performed); any typing into a runtime field; any Save/Delete/New; any second prompt dismissal; any second opening; Designer tab untouched.
- **Counts (T3).** Tab lists 1; tab selects 1; runtime clicks 4 (close 1; toolbar Open 1; dialog OK 1; prompt OK 1), all succeeded; snapshots 6; screenshots 6; finds 1; typing 0; FX_Refresh 0; runtime data modifications 0; Designer Saves 0.
- **Knowledge state.** The single-session close, opening, prompt text, and post-OK displayed values: **observed**. FX_VarTestEdit identity: **inferred** (unnamed textbox; position and value). The displayed value equalling the Description on dumbbell: **observed** (single session; not replay-verified). Whether the value reflects the stored binding after a server reload: **unresolved**.

## T4 — one FX_Refresh activation; second prompt; post-refresh readback (AC-8; AC-9 observations; complete; details `evidence/EXP-057/T4-single-refresh-report.md`)

- **Pre-refresh (AC-8 before values).** Tab 1 selected after a tab list. FX_Items; dumbbell current (`Object 1 of 3`); grid and Description `45 pound iron`; value box `45 pound iron`; Save disabled; no dialog (`t7-snapshot-00`, `t7-01`).
- **Activation (1 of 1).** One native click on `FX_Refresh` (`f1e190`); completed without error; not repeated.
- **Prompt before OK.** One `alertdialog` "Infor Mongoose Application Development Framework - FX_Items", message `Hello World`, one OK (`f1e742`) (`t7-snapshot-01`, `t7-02`).
- **Dismissal (1 of 1).** One OK click.
- **Post-OK readback (same sequence).** dumbbell still current; grid, Description and value box all `45 pound iron`; no dialog; Save disabled (`t7-snapshot-02`, `t7-03`). Exact equality **passed**, but the value was unchanged by the refresh.
- **Records (AC-9).** dumbbell 45 pound iron / 45.00 / EA; eggs cage free / 6.99 / DZ; guitar natural acoustic / 129.99 / EA — unchanged vs T1 and T3.
- **Not done (by instruction).** Eggs-row selection; second FX_Refresh; any typing; any Save, Delete, New; any Form open or close; any Designer action.
- **Counts (T4).** Tab lists 1; tab selects 1; FX_Refresh clicks 1; prompt OK clicks 1; snapshots 3 (`t7-snapshot-00`, `-01`, `-02`; corrected from 4 in the first draft); FX_Refresh and OK clicks 2 in total (corrected from 3); screenshots 3; typing 0; Save 0; metadata changes 0.
- **Knowledge state.** The single activation producing one Hello World prompt and one dismissal: **observed** (single session). The displayed value equalling the Description after the refresh: **observed**, but **not discriminating** (value unchanged). Whether the refresh re-evaluates `P(FX_Description)`: **unresolved**. The FX_VarTestEdit identity: **candidate inference**.

## T8 — optional eggs-row observation (AC-9; complete; details `evidence/EXP-057/T8-eggs-row-observation-report.md`)

- **Pre-selection (AC-9 before values).** Tab 1 selected after a tab list. dumbbell current (`Object 1 of 3`); Description `45 pound iron`; value box `45 pound iron`; Save disabled; no dialog (`t8-snapshot-00`, `t8-01`).
- **Selection (1 of 1).** One native single click on the eggs row's Item cell (`f1e169`). No double-click, no typing, no refresh.
- **Post-selection (same sequence).** eggs current (`Object 2 of 3`); Item `eggs`; Description `cage free`; Cost `6.99`; UoM `DZ`. Value box **`45 pound iron` — unchanged** (not cleared; no error). Exact comparison: value box ≠ eggs Description (`cage free`). No dialog (`t8-snapshot-01`, `t8-02`).
- **Records and Save (AC-9).** dumbbell 45 pound iron / 45.00 / EA; eggs cage free / 6.99 / DZ; guitar natural acoustic / 129.99 / EA — unchanged. Save disabled before and after.
- **Interpretation (limited).** The value box did not follow the row. This is a non-change observation under AC-9 (not a pass/fail condition). It does not establish whether FX_Refresh re-evaluated `P(FX_Description)`; the value-box identity remains a position-and-definition inference.
- **Counts (T8).** Tab lists 1; tab selects 1; row-selection clicks 1; FX_Refresh 0; prompts 0; dismissals 0; closures 0; openings 0; typing 0; Save 0; snapshots 2; screenshots 2.
- **Knowledge state.** The eggs-row selection result (current row moves; the value box keeps `45 pound iron`): **observed** (single session). Why the value box did not follow the row: **unresolved**. Whether the box is written only on refresh: **unresolved** (untested).

## AC status after T1

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 Read-only preflight and reconciliation | **Supported with limits** | T1 report §3–§5; `t1-01`, `t1-02`, `t1-snapshot-00`, `-01`. Limits: Form-level scope unreadable until a Form is open (T2); runtime from rendered UI only. |
| AC-2 to AC-11 | **Not tested** | Outside T1 (T1 is read-only by instruction). |

## Counts (T1)

- Tab lists 1; tab selects 2 (both succeeded).
- Fresh snapshots 3 (2 Designer, 1 runtime); screenshots 2.
- Clicks 0; typing 0; key presses 0; Designer Save 0; Form open or close 0; runtime open or close 0; FX_Refresh 0; prompt dismissals 0; Designer menu or recent-forms routes 0; Variables tab 0; diagnostics, preferences, FormSync, cache, SQL, scripts 0; reauthentication 0; browser-reference errors 0; portal banner dismissals 0.

## Blockers and open questions (T1)

1. None blocking T1.
2. Form-level identity (Name, ScopeType, ScopeName of FX_Items) and recovery of the saved definition (AC-2 to AC-5) require T2.
3. Inherited runtime instance: does it predate the saved handler and FX_VarTestEdit? Planned resolution: T3 closes it and reopens once.
4. Designer console error count changed (2 → 3); source unknown; not investigated.
5. Blank Components-grid Data Source for FX_VarTestEdit (EXP-056) remains unresolved; not repaired here.

## Next permitted action (not started)

T2 — Designer recovery. One attempt through the Form menu recent-forms `FX_Items` entry; if it fails to be visible, one retry after reopening the menu with fresh visibility evidence; then at most one Designer Open toolbar attempt. Starts only under a new bounded task.

## Repository changes (T1)

- Created: this record `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md`.
- Written: `evidence/EXP-057/` (T1 report, two screenshots, two snapshots).
- Not modified: `AGENTS.md`, EXP-056 record and evidence, recipes, `tools/`, `docs/`, any non-FX_ artifact, any Mongoose artifact (no mutation performed).

## Knowledge state (T1)

| Finding | State |
| --- | --- |
| Designer clean with no Form open; User footer scope | observed (single session) |
| Inherited runtime FX_Items records; FX_Refresh; Save disabled | observed (single session; not refreshed) |
| Inherited runtime lacks FX_VarTestEdit | observed (single session) |
| Inherited runtime predates the saved handler and Edit | candidate inference (not proven) |
| Designer console error count 3 | observed; cause unresolved |
| Saved handler, Edit binding, FX_VarTest definition after recovery | **not tested** (T2) |
| Runtime value of FX_VarTestEdit | **not tested** (T3–T4) |
| Replay-verified findings | none |

## Final acceptance and audit (T9; complete; details `evidence/EXP-057/FINAL-acceptance-and-audit-report.md`)

**Proposed outcome: BLOCKED** (exact failed check: AC-11 confinement component; not demonstrable from this session). Classification of AC-1 to AC-10 results: observed.

| AC | Result | Key evidence |
| --- | --- | --- |
| AC-1 Preflight | Pass (limits) | `T1-preflight-report.md`; `t1-01`, `t1-02`, `t1-snapshot-00`, `-01` |
| AC-2 Designer recovery (route, identity, Save disabled) | Pass | `T2A-recovery-report.md`; `t2-snapshot-00`…`-02`, `t2-01` |
| AC-3 Handler and readbacks | Pass | `T2B-handler-verification-report.md`; `t3-snapshot-03`…`-09`, `t3-01`…`-04` |
| AC-4 Components and Edit properties | Pass (limits; Data Source discrepancy unresolved) | `T2C-component-inventory-report.md`; `t4-snapshot-02`…`-05`, `t4-01`, `t4-02` |
| AC-5 Variables presence | Pass on presence (contradicts EXP-056; unresolved) | `T2D-variables-verification-report.md`; `t5-snapshot-03`…`-08`, `t5-01`…`-03` |
| AC-6 Closure, opening, first prompt, one OK | Pass | `T3-runtime-opening-report.md`; `t6-snapshot-00`…`-05`, `t6-01`…`-06` |
| AC-7 Initial value equals dumbbell Description | Pass (exact; identity inferred) | `t6-snapshot-05` (`45 pound iron` = `45 pound iron`) |
| AC-8 One refresh, second prompt, one OK, equal value | Pass on written criterion; non-discriminating (value unchanged) | `T4-single-refresh-report.md`; `t7-snapshot-00`…`-02`, `t7-01`…`-03` |
| AC-9 Records unchanged; Save disabled; eggs observation | Pass (observations) | `T4-single-refresh-report.md` §4; `T8-eggs-row-observation-report.md`; `t8-snapshot-00`, `-01`, `t8-01`, `t8-02` |
| AC-10 Reconciliation and deviations | Pass (with documented deviations) | `FINAL-acceptance-and-audit-report.md` §2, §4 |
| AC-11 Matrix, confinement, classification | Confinement **not established** from this session; matrix and classification complete | `FINAL-acceptance-and-audit-report.md` §§1, 5, 6; `harness-audit-T1`…`T8.md` |

**Cumulative counts.** Designer recent-forms attempts 1 (0 retries; 0 alternative Open attempts). Inherited runtime closures 1. Runtime openings 1 (toolbar Open and Select Form OK). Automatic opening prompts 1. Manual FX_Refresh activations 1. Refresh-triggered prompts 1. Total Hello World prompts 2. Total OK dismissals 2. Optional eggs-row selections 1. Designer Saves 0. Metadata changes 0. Business-data modifications 0. Tab selections 9 (lists 8). Successful clicks 28 in total.

**Interpretation.** After opening and after refresh, the dumbbell Description and the inferred FX_VarTestEdit value both read `45 pound iron`. The value did not change across the refresh, so this does not independently prove refresh-time evaluation of `P(FX_Description)`. Eggs selected without refresh: Description `cage free`; value box stayed `45 pound iron`; no error, no mutation. The value-box identity is inferred from position and the Designer definition, not exposed by accessibility.

**Deviations and corrections.** D-1: four native filter entries typed into the Designer Variables search (T2D); the controller audit flags them as `browser_type` hits; not a variable-property or metadata change. D-2: Designer URL changed without a worker navigation (after T2A and the first T2B Cancel). D-3: runtime opening used two clicks, counted as one opening. C-1: T4 counts corrected to 2 clicks and 3 snapshots. C-2: T1 has one unsaved in-session snapshot in its count of 3.

**Unresolved (not promoted).** FX_VarTestEdit Data Source blank in EXP-056 and `variables.FX_VarTest` here; FX_VarTest absent in EXP-056 and present here as Form - Temporary; third Designer console error; Designer URL changes; inherited-runtime chronology (07:08 load shows zero handlers; the T3-opened instance's log not analysed); whether refresh re-evaluates the expression; why the value box did not follow the eggs row; cause of the EXP-056 T9 reopen failure.

**Confinement.** Worker-authored writes confined to this record and `evidence/EXP-057/` (tool-call record). Exceptions: 43 gitignored tool captures in `evidence/playwright/` in the run window; pre-existing tracked modifications under `tools/learning-harness/` (session-start snapshot). Strict confinement not established here.

**Replay / durability / cache claims.** None made. Replay-verified: none.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261011-172309-X5Gt: completed/accepted at cycle 10, 9 worker tasks). Observed only, not replay-verified. **Hello World Part 3 section 7 is complete** (EXP-056 saved it; this continuation recovered it and proved it at runtime). The record title says "Section 8"; that is a coordinator naming slip. Section 8 is the custom `Test` event.

Operator call (standing authorization, 2026-10-11): the run paused once with `attachment_required` for repository confinement. I supplied a git-status audit:
- new: only this record and `evidence/EXP-057/` (83 files);
- the six pre-existing `tools/learning-harness/` modifications are unrelated operator work that predates the session;
- `evidence/playwright/` is gitignored.

Approved with `--approve attachment`. The coordinator then accepted the run.

Changes: **none**. The Designer reopen was read-only and nothing was saved. The runtime run had no data change; the only actions were two Hello World OK dismissals and one row selection.

Operator screenshot review:
- `t2-01`: the Form opened from recent forms at the **first** attempt. No fallback was needed.
- `t5-02`: the reopened Designer, Variables tab. **`FX_VarTest` is listed under "Form - Temporary"**: Value `~LIT~()`, Persistent False, Global False. The only "Form - Persistent" entry is InitialCommand.
- `t6-06`: one runtime open; Hello World was dismissed with OK. The current row is dumbbell, and **FX_VarTestEdit shows "45 pound iron"**, equal to its FX_Description. Status "Description (Object 1 of 3)".
- `t8-02`: after one row selection to eggs (Description "cage free", "Item (Object 2 of 3)"), FX_VarTestEdit **still shows "45 pound iron"**.

Learned (observed):
1. **The value appears at runtime:** a Set Values action `SETVARVALUES(FX_VarTest=P(FX_Description))` on StdFormRefreshCompleted, plus an Edit bound to that variable (Binding Type Variable), displays the current row's property value after a refresh. This is the tutorial's section 7 result, adapted to FX_ names.
2. **Only refresh updates it:** the variable is written only when a refresh completes. Moving to another row does not update it (eggs still showed dumbbell's value). The FX_Refresh check (AC-8) did not discriminate, because the current row was dumbbell both before and after.
3. **The variable is created automatically:** typing a new Target name in Set Values and/or binding an Edit to it produces a **Form - Temporary** variable definition (non-persistent, empty literal value). It was visible after a Save and reopen, but not before the Save in the Designer session of EXP-056. This differs from the EXP-004/EXP-014 path (Details > Variables > New), whose definitions disappeared. The mechanism (Set Values target vs. variable binding) is unresolved.
4. **Recent forms can work first time:** the Designer recent-forms reopen worked at the first attempt here, so the EXP-056 timeout was intermittent.

Limits:
- Same session, UI level only.
- The value text was read from an unnamed textbox to the right of FX_Refresh (identified by position and accessibility order).

Created and still present, for later cleanup: everything listed in EXP-056's outcome block. This includes the Form-Temporary variable FX_VarTest, which now appears in the Designer.

Next: Part 3 section 8. Move the handlers to a custom `Test` event triggered by the button, check that neither handler runs on open, and check that both run on click.
