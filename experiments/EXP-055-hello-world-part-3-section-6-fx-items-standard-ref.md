# EXP-055 — Hello World Part 3 Section 6: FX_Items Standard Refresh Completed Prompt Handler

**Status (after T10, cycle 9): FINAL. Outcome: BLOCKED, not accepted. AC-4 is FAILED FOR ACCEPTANCE due to insufficient baseline evidence; this is not a demonstrated mutation. Runtime and Designer behaviour succeeded as observed, but complete acceptance is not established. AC-1, AC-2, AC-3, and AC-5 through AC-12 are supported by their existing evidence, with the limits in the T10 section. The four Static captions do have a pre-mutation baseline in EXP-054-R2 T1 Part B1, and EXP-055 observations are consistent with it. Reconciled counts: one handler; one sequence-0 Prompt action; one Designer Save; one Designer close and one recent-forms reopen; one runtime closure and one controlled opening; two observed Hello World Prompts with two authorized OK dismissals; one FX_RefreshButton activation; zero runtime data mutations; zero manual Refresh; zero Diagnostics and zero User Preferences operations. Documentation only; zero browser calls in T10.**

Previous status (after T9, cycle 8): documentation-only audit complete (zero browser calls; zero Mongoose changes). Recommended outcome: BLOCKED, not accepted. AC-1, AC-2, AC-3, AC-5, AC-6, AC-7, AC-8, AC-9, AC-10, AC-11 and AC-12 are supported as observed in one browser session, with limits. [Superseded at T10] AC-4 is FAILED FOR ACCEPTANCE (insufficient baseline evidence). The T9 "unresolved" and "operator waiver" wording is withdrawn. The Static caption and Event baselines are supplied by EXP-054-R2 T1 Part B1–B2; binding detail for 12 components, component Location/Size, and FX_UMCombobox Gain Focus before the save have no recorded baseline. Cumulative counts: handlers added 1; actions configured 1; Designer Saves 1; Designer closes 1; recent-forms reopens 1; runtime closures 1; controlled openings 1; automatic-opening Prompt OK 1; FX_RefreshButton activations 1; activation-Prompt OK 1; manual refreshes 0; runtime mutations 0; Diagnostics 0; User Preferences 0. Audit: `evidence/EXP-055/T9-final-documentation-only-audit-and-acceptance-reconciliation.md`.

Previous status (after T8, cycle 7): one native FX_RefreshButton activation on the settled FX_Items runtime produced a native Hello World prompt (title `Infor Mongoose Application Development Framework - FX_Items`, information icon, OK as the only response). It was dismissed once with OK. The settled runtime shows FX_Refresh, the three original records at the EXP-054-R2 values, Save disabled, no dialog, and the indicator `FX_Refresh (Object 1 of 3)`. AC-10 and AC-11 supported (observed in this session; no causation, durability, or replay claim). Cumulative: Designer Saves 1; Designer close 1; reopen 1; runtime closure 1; controlled opening 1; automatic-opening Prompt dismissal 1; FX_RefreshButton activations 1; activation-Prompt dismissal 1; manual refreshes 0; runtime data mutations 0; Diagnostics, User Preferences, Diagnostic Log 0. The DevTools log was not inspected for rows from the activation. Not accepted; the final acceptance audit is documentation-only and not yet performed.**

Previous status (after T7, cycle 6): the inherited FX_Items runtime was verified clean (Save disabled, no dialog) and closed once (tab absent, no prompt). One Web Client Open > Select Form opening of FX_Items followed. The native prompt appeared after the opening: literal message `Hello World`, title `Infor Mongoose Application Development Framework - FX_Items`, information icon, OK as the only response. It was dismissed once with OK. The settled runtime shows FX_Refresh, the three original records at the EXP-054-R2 values, Save disabled, and the indicator `(Object 1 of 3)`. FX_RefreshButton was not activated (reserved for T8). Cumulative: Designer Saves 1; Designer close 1; reopen 1; runtime closure 1; controlled opening 1; automatic-opening Prompt dismissal 1; FX_RefreshButton activations 0; manual refreshes 0; runtime mutations 0. AC-7, AC-8, and AC-9 supported in this session (observed only; no causation claim). Not accepted. AC-10 to AC-12 not tested.**

Previous status (after T6, cycle 5): one clean Designer Form-tab close (no unsaved-change prompt) and one recent-forms reopen of FX_Items completed. Same-session UI recovery verified: one StdFormRefreshCompleted group, one sequence-0 Prompt row with the exact summary, parameters Hello World / blank Caption / OK only / OK default / Event To Generate blank (readback, Cancel), 16 component rows, FX_RefreshButton (PushButton, Caption FX_Refresh, Binding None, Primary StdFormRefresh), Form Initial Command Refresh, Save disabled. Cumulative: Designer Saves 1, Designer close 1, recent-forms reopen 1. No runtime action; no activation. Not accepted. AC-7 through AC-12 not tested. AC-6 supported (same session only).**

Previous status (after T5, cycle 4): the pre-Save gate passed and exactly one ordinary Designer Save was performed (cumulative Save count: 1). Native toast "Form [FX_Items] and global object(s) were saved."; Save, Regenerate, Undo, and Redo disabled afterward. Post-Save readback: one `StdFormRefreshCompleted` group, one sequence-0 Prompt row, summary `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`, parameters Message Text Hello World / Caption blank / OK only / OK default / Event To Generate blank; 16 component rows and FX_RefreshButton (PushButton, Caption FX_Refresh, Primary StdFormRefresh, Binding None) unchanged; Form Initial Command Refresh. No close/reopen; no runtime action. AC-3, AC-4, and AC-5 supported with limits (SaveChanges response body not captured; Static captions: a pre-mutation baseline is recorded in EXP-054-R2 T1 Part B1 (the earlier "no recorded baseline" statement is withdrawn at T10); icon and Default Button visual only). Not accepted. AC-6 through AC-12 not tested.**

Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items` (User version). Target button `FX_RefreshButton` (existing, unchanged). Artifact (created in T3, action configured in T4, saved in T5): one Form event handler for the built-in `StdFormRefreshCompleted` event, with one sequence-0 Prompt action (literal Message Text `Hello World`, blank Caption, default icon, OK-only response, no Event To Generate). Evidence directory: `evidence/EXP-055/`.

## Run identity

- Run `R-20261011-153829-vsIH`, experiment EXP-055, cycle 0, task T1.
- Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `bb2982bf-68e2-4b73-bb43-46948105d8b8`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Designer tab 0 (`MGForm=FX_Items`); Web Client tab 1 (`favoriteContext=FX_Items`).

## Scope and authority

- The bounded instruction for T1 is read-only preflight only. Authorized by the approved brief (commit `b67fd89`): the single handler, one Designer Save, one Designer close/reopen, one clean runtime closure, one controlled runtime opening, at most one automatic-opening Prompt dismissal, one FX_RefreshButton activation, and at most one activation-Prompt dismissal. **T1 performed none of these.**
- Out of scope (unchanged): custom Form events; any change to FX_RefreshButton or Initial Command; string resources; Diagnostics or User Preferences; Diagnostic Log clear; manual refresh or extra loads; any non-FX_ artifact.

## Reference reading (completed before browser interaction)

- `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt3.md` Section 6 (lines 197–209, 05:00–06:03).
- `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md`: accepted with limits (observed only). Created FX_RefreshButton (PushButton, literal Caption `FX_Refresh`, Primary `StdFormRefresh`) and recorded the 16-row FormEvent sequence after one click. No Prompt handler existed.
- `experiments/EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md`: observed Prompt handler configuration (New → name dialog → Response Type Prompt → Parameters: Message Text literal, Caption blank, Icon default, OK only, Event To Generate blank) and Save, close, and reopen recovery. Its name dialog was used for a custom event; the built-in event path is not established there (see Open questions).

## T1 — read-only preflight (completed; details `evidence/EXP-055/T1-preflight-report.md`)

- **Identity and tabs:** tab list first; then select tab 0, select tab 1, and select tab 0 (restore). All selects succeeded after the list. Designer: heading `FX_Items`; Form Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Device Type Default; Form Type Normal; Is Master True. Web Client identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in or configuration screen; no portal banner; no dialog.
- **Clean states:** Designer Save, Regenerate Form, Undo, and Redo disabled. Runtime Save disabled.
- **Initial Command:** `Refresh` (unchanged).
- **Event Handlers baseline (Form context):** the handler grid has zero data rows (headers only: Sequence / Response Type / Disabled / Response Parameters). No StdFormRefreshCompleted handler exists. No other handlers exist.
- **Components baseline:** 16 grid rows: two pane roots, 13 original rows (FormCollectionGrid, four GridColumns, and eight Pane (01) children), and one FX_RefreshButton. FX_RefreshButton: Name `FX_RefreshButton`; Caption `FX_Refresh`; Type PushButton; Pane 1; Tab 0; Primary `StdFormRefresh`; Binding Type None; Data Change, Lose Focus, and Gain Focus blank; Drag From and Drop On `0 event(s)`.
- **Form properties baseline:** Initial Command Refresh; Script Language Visual Basic; Close Box True; Minimize/Maximize True; Splitter Vertical, Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Unit Char; Size `69; 21`; Synchronize FlexLayout True.
- **Runtime (inherited, not closed or refreshed):** single Form tab `FX_Items`; records `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA` (grid cells); FX_Refresh button rendered; Save disabled; no dialog; Object count indicator not visible in that frame. The DevTools log shows 16 `FormEvent (FX_Items)` rows consistent with the EXP-054-R2 post-activation sequence; not cleared or used.

## T2 — non-mutating inspection of the Form-level New workflow (cycle 1; details `evidence/EXP-055/T2-new-handler-dialog-inspection-report.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `ebc2661f-0217-4691-9ace-143078420741`.

- **Tabs and identity:** tab list first; select tab 0 succeeded; fresh snapshot. Designer `FX_Items`, Save disabled, User footer `anton.ramos@3mworks.com.ph`.
- **Pre-New state:** Form context; Name `FX_Items`; Initial Command Refresh; Event Handlers grid empty (headers only). No StdFormRefreshCompleted or other handler.
- **Control identity:** the leftmost blue `+` in the Event Handlers toolbar; hover tooltip `New` (`t2-02`). Identity established.
- **New (one click):** opened a modal "Event Handler" dialog with a Name combobox, OK, and Cancel (`t2-03`). No handler row was created.
- **Dropdown (one open, one collapse, no selection):** the Name combobox lists built-in `Std*` events in alphabetical order. `StdFormRefreshCompleted` is listed (accessibility ref e2123, after `StdFormRefresh`). No `FX_` entries appear (`t2-04`, `t2-05`, `t2-snapshot-03`).
- **Cancel (one click):** dialog closed with native Cancel. Grid still empty; Save disabled; no dialog (`t2-06`, `t2-snapshot-05`). The page URL lost `MGForm=FX_Items` after Cancel (as EXP-037 observed after a dialog OK); identity was confirmed from the rendered heading and footer.
- **Not tested (by instruction):** typing into the Name combobox; OK; any handler, action, or Prompt parameter; Save; close or reopen; runtime.
- **Counts:** tab list 1; select 1; snapshots 6; finds 1; hover 1; clicks 5 (Properties Form 1, Event Handlers tab 1, New 1, dropdown open and collapse 2, Cancel 1); screenshots 6; typing 0; OK 0; handlers 0; Save 0; close/reopen 0; runtime 0; Diagnostics or User Preferences 0.
- **Knowledge state:** observed (T2; single session). Free-text entry in the Name combobox: unresolved.

## T3 — one StdFormRefreshCompleted handler association, unsaved (cycle 2; details `evidence/EXP-055/T3-handler-association-report.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `2bf08fed-f6f9-4e97-9e24-41c30c52aa09`.

- **Gate:** tab list, then select tab 0 (succeeded); fresh snapshot. FX_Items heading; User footer `anton.ramos@3mworks.com.ph`; Name `FX_Items`; Initial Command `Refresh`; Save disabled; Form-level handler grid empty; no dialog. The URL has no `MGForm` (identity from the rendered UI).
- **New (one click)**, then **Name dropdown open (one click)**, then **option `StdFormRefreshCompleted` selected from the built-in list (one click; no typed text)**. Exact value confirmed in the accessibility tree before OK (`t3-snapshot-03` line 585).
- **OK (one click).** Result: handler group `StdFormRefreshCompleted`; one row at sequence 0; Disabled false; **Response Type blank**; Event `StdFormRefreshCompleted`; Save enabled (dirty). Evidence `t3-04`, `t3-snapshot-04`.
- **Preservation (view only):** Components grid shows the same 16 rows as T1 (FX_RefreshButton PushButton, Pane 1, Tab 0, StdFormRefresh; the other 15 unchanged); Initial Command `Refresh`; Form layout unchanged (`t3-05`, `t3-snapshot-05`). FX_RefreshButton Caption and Button properties not re-read in T3 (limit).
- **Unresolved:** whether the blank sequence-0 row is an actual action slot created by the handler. T4 must check before adding anything; it must not create a second action.
- **Counts:** tab list 1; select 1; snapshots 6; finds 0; New 1; dropdown open 1; option select 1; OK 1; Components tab view 1; screenshots 5; typing 0; key presses 0; Save 0; close/reopen 0; runtime 0; Diagnostics or User Preferences 0; Prompt parameter editor 0.
- **Knowledge state:** observed (T3; single session). The sequence-0 row's meaning: unresolved.

## T4 — sequence-0 Prompt action on the unsaved handler (cycle 3; details `evidence/EXP-055/T4-prompt-action-configuration-report.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `cd05e296-4e57-43ad-b5e7-0aab02ac55a6`.

- **Gate:** tab list, select tab 0, fresh snapshot. FX_Items; User footer; Initial Command `Refresh`; Save enabled (T3 dirty state); one StdFormRefreshCompleted group, one row (sequence 0, Response blank).
- **Action-slot inspection (view only):** the Response node, once expanded (property-pane Expand control), exposes Type (dropdown), Parameters (Open Edit Property Dialog button), and Edit in-line Script. The existing sequence-0 row is therefore the editable action; T4 did not add an action. The T3 open question is resolved on this basis.
- **Response Type:** dropdown opened once; `Prompt` selected once. Result: Type `Prompt`.
- **Parameters:** dialog opened once. Message Text entered once: `Hello World` (accessibility value confirmed). Caption blank; info icon (default); only OK checked; OK as Default Button; Event To Generate blank. Confirmed before commit (`t4-08`, `t4-snapshot-08`).
- **Commit:** Parameters OK once. Committed row: sequence 0, Prompt, Disabled false, Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (accessibility, exact; `t4-09`, `t4-snapshot-09`).
- **Readback:** Parameters reopened once (read only), values confirmed (`t4-10`), closed by Cancel once; no change.
- **Cardinality:** one StdFormRefreshCompleted group; one row; no other handlers; no custom event.
- **Preservation (view only):** Components grid 16 rows as T1; FX_RefreshButton Name FX_RefreshButton, Caption FX_Refresh, Type PushButton, Binding None, Primary StdFormRefresh (`t4-11`, `t4-snapshot-13`); Form Initial Command `Refresh` and other Form properties as T1 (`t4-snapshot-12`).
- **Counts:** tab list 1; select 1; snapshots 14; finds 1; clicks 12 (Parameters opened twice; OK 1; Cancel 1); mouse move 1; wheel 1; typing 1; Response Type set 1; screenshots 11; **Save 0**; close/reopen 0; runtime 0; Diagnostics or User Preferences 0; Diagnostic Log 0; actions added by New or Add 0.
- **AC-3:** supported with limits (handler and action rows, editable parameter detail, no custom event). **AC-4:** [superseded at T10: failed for acceptance] supported with limits at T4 (Message Text, Caption, OK-only, and Event To Generate verified by readback; icon and Default Button visual only; the 13 original components' Event and Caption cells not individually re-read).
- **Safety for the one permitted Save:** yes on the evidence above, subject to the limits listed; the Save must be performed in a separate task after its own preservation gate.

## T5 — pre-Save gate, one ordinary Designer Save, post-Save readback (cycle 4; details `evidence/EXP-055/T5-pre-save-gate-and-single-designer-save-report.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `a2fd85cd-01a5-4e42-8878-5a1d0927243b`.

- **Gate (passed):** tab list, select tab 0, fresh snapshot. FX_Items heading; User footer `anton.ramos@3mworks.com.ph`; Save enabled (intended dirty); no dialog. One StdFormRefreshCompleted group, one row (sequence 0, Prompt, false, exact summary). Parameters reopened read-only and closed by Cancel once: Message Text `Hello World`, Caption blank, info icon, OK only and default, Event To Generate blank.
- **Original components (read in T5 by selecting each row):** all 13 Captions and Events read. Events (Primary, Data Change, Lose Focus, Gain Focus) blank. [Corrected at T10: EXP-055 T1 did not read these; the pre-mutation source is EXP-054-R2 T1 Part B2.] Grid-column captions FX_sItem, FX_sDescription, FX_sCost, FX_sUM and the Edit and ComboBox `C(<paired Static>)` captions match EXP-054-R2's recorded values. Static captions FX_sItem, FX_sDescription, FX_sCost, FX_sUM are recorded in EXP-054-R2 T1 Part B1 (rows 5, 7, 9, 11), read before any EXP-054-R2 mutation. [Corrected at T10: the earlier "no recorded baseline" statement is withdrawn.] Current values recorded here.
- **Form properties (pre-Save):** Initial Command `Refresh`; Splitter Vertical 11; Unit Char; Size 69; 21; Version User; matches T1.
- **Save (one):** toolbar Save clicked once. Toast `Form [FX_Items] and global object(s) were saved.`; Save, Regenerate, Undo, Redo disabled.
- **Post-Save readback (read-only):** handler group and row unchanged; Parameters reopened and closed by Cancel once (values unchanged); 16 component rows unchanged; FX_RefreshButton Name FX_RefreshButton, Caption FX_Refresh, Type PushButton, Binding None, Primary StdFormRefresh; Form Initial Command `Refresh` (screenshot only).
- **Counts:** tab list 1; select 1; snapshots 13; finds about 17; clicks: Event Handlers tab 2, Parameters open 2, Parameters Cancel 2, Components tab 2, Form tab 1, component rows 13, FX_RefreshButton row 1, **Save 1**; typing 0; close/reopen 0; runtime 0; Diagnostics or User Preferences 0; Diagnostic Log 0; property or handler edits 0.
- **Limits:** SaveChanges response body not captured; post-Save Form values from a screenshot only; original components' Captions and Events not re-read after Save; icon and Default Button are visual only.
- **Knowledge state:** observed (single session). Not replay-verified.

## T6 — one clean Designer close and one recent-forms reopen; same-session recovery (cycle 5; details `evidence/EXP-055/T6-designer-close-and-recent-forms-reopen-recovery-report.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `d5bf8f00-027a-4164-b0c8-62298c27ad7b`.

- **Pre-close gate:** tab list, select tab 0, fresh snapshot. FX_Items heading; User footer `anton.ramos@3mworks.com.ph`; Save, Regenerate, Undo, Redo disabled; no dialog. Handler group `StdFormRefreshCompleted`, one Prompt row, exact summary (view).
- **Close (one):** the FX_Items closable control clicked once. The tab disappeared with no unsaved-change prompt and no error; Save disabled (`t6-02`, `t6-snapshot-02`).
- **Reopen (one):** Form menu, then the single `FX_Items` recent-forms entry (ref e1798). The URL now carries `MGForm=FX_Items`. Identity confirmed from the heading, Name, Version, and User footer (`t6-04`, `t6-snapshot-04`).
- **Recovery readback:** Initial Command `Refresh`; Splitter Vertical 11; Unit Char; Size 69; 21. The handler group rendered collapsed (expanded by a view click): one row, sequence 0, Prompt, Disabled false, exact summary (`t6-06`, `t6-snapshot-07`). Parameters opened read-only once: Message Text `Hello World`, Caption blank, information icon, OK only and default, Event To Generate blank; closed with Cancel once (`t6-07`, `t6-snapshot-09`, `-10`).
- **Components and FX_RefreshButton:** 16 rows after expanding the tree (view). FX_RefreshButton Name, Caption FX_Refresh, Type PushButton, Binding None, Primary StdFormRefresh (`t6-09`, `t6-snapshot-13`). All 13 original Captions match the T5 pre-Save values, with FormCollectionGrid blank and its Binding Type `Primary Collection Grid`. Original component Events were not re-read after reopen (limit).
- **Final state:** Save disabled, no dialog, User scope (`t6-10`, `t6-snapshot-14`).
- **Counts:** tab list 1; select 1; snapshots 15; finds 4; Designer close 1; Form menu 1; recent-forms entry 1; view-only clicks (Event Handlers tab 2, Details expand 1, group expand 1, Components tab 1, components expand 1, Form tab 1, row selections 14); action row 1; Parameters open 1 and Cancel 1; screenshots 10. **Save 0 in T6 (cumulative 1)**; runtime 0; FX_RefreshButton activations 0; property or handler edits 0; typing 0; Diagnostics or User Preferences 0; reload or reauthentication 0.
- **Knowledge state:** observed (same browser session). Cross-session or server-side durability is not claimed. Collapse of the handler group and component tree on reopen: observed, cause unresolved.

## T7 — inherited runtime closure, one Select Form opening, automatic-opening Prompt observation (cycle 6; details `evidence/EXP-055/T7-runtime-closure-select-form-opening-and-automatic-prompt-observation.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `89051269-2bfa-4c45-a13a-d0261843c22c`.

- **Gate:** tab list; select tab 1 (Web Client); fresh snapshot. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; FX_Items runtime; Save disabled; records dumbbell / eggs / guitar at baseline; FX_Refresh rendered; no dialog or authentication challenge.
- **Runtime closure (one):** Form-tab control `Close Panel FX_Items` clicked once. Tab absent; no prompt; Save disabled (`t7-02`, `t7-snapshot-01`).
- **Open (one):** toolbar Open clicked once; Select Form dialog with one row FX_Items / FX_Items; row selected once; OK once (`t7-03`, `t7-04`, `t7-snapshot-02`, `-03`).
- **Immediate state, before any dismissal (`t7-05`, `t7-snapshot-04`):** alertdialog `Infor Mongoose Application Development Framework - FX_Items`; content `Hello World` (line 482); one button OK (line 484); info icon (visual); FX_Items runtime behind it; status `(Object 1 of 3)`. **AC-8 prompt appeared.**
- **Dismissal (one):** Prompt OK clicked once. Alertdialog gone; Description focused with its text highlighted (focus only; no typing) (`t7-06`, `t7-snapshot-05`).
- **Settled runtime (`t7-snapshot-05`):** Save disabled (line 59); records dumbbell / `45 pound iron` / `45.00` / `EA`, eggs / `cage free` / `6.99` / `DZ`, guitar / `natural acoustic` / `129.99` / `EA` (lines 151–168); FX_Refresh rendered (line 170); status `Description (Object 1 of 3)` (line 477); no dialog.
- **Counts:** tab list 1; select 1; snapshots 6; screenshots 6; finds 0; clicks 5 (close 1, Open 1, row 1, OK 1, prompt OK 1); typing 0; FX_RefreshButton activations 0; manual refresh 0; runtime mutations 0; Designer Save 0 in T7 (cumulative 1); Designer close/reopen 0 in T7 (cumulative 1 each); Diagnostics, User Preferences, Diagnostic Log 0.
- **Limits:** causation of the prompt by the Initial Command Refresh is not established (observed only). Eggs and guitar values read from grid cells, not a detail pane. The DevTools log was not inspected for new FormEvent rows from this opening.
- **Knowledge state:** observed (single session). Not replay-verified.

## T8 — one FX_RefreshButton activation, activation-Prompt observation, settled runtime (cycle 7; details `evidence/EXP-055/T8-fx-refresh-activation-prompt-and-settled-runtime-report.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `ad50cc6f-1784-4995-ab9c-922dd027d99d`.

- **Gate:** tab list; select tab 1 (Web Client); fresh snapshot. FX_Items runtime; identity bar DEM; Save disabled; no dialog; three records at baseline; FX_Refresh rendered; Description focused with T7's highlight (not typed into); status `Description (Object 1 of 3)` (`t8-01`, `t8-snapshot-00`).
- **Activation (one):** FX_Refresh (ref f1e190) clicked once. Immediate: alertdialog `Infor Mongoose Application Development Framework - FX_Items`, content `Hello World` (line 482), one button OK (line 484); status `FX_Refresh (Object 1 of 3)` (`t8-02`, `t8-snapshot-01`). **AC-10 prompt appeared.**
- **Dismissal (one):** OK (ref f1e737) clicked once. Alert gone; no further dialog (`t8-03`, `t8-snapshot-02`).
- **Settled:** Save disabled (line 59); records dumbbell / `45 pound iron` / `45.00` / `EA`, eggs / `cage free` / `6.99` / `DZ`, guitar / `natural acoustic` / `129.99` / `EA` unchanged (lines 151–168); FX_Refresh rendered (line 170); indicator `FX_Refresh (Object 1 of 3)` (line 477).
- **Counts:** tab list 1; select 1; snapshots 3; screenshots 3; clicks 2 (activation 1; OK 1); typing 0; key presses 0; finds 0; second activation 0; manual refresh 0; runtime mutations 0; Diagnostics or User Preferences 0; Diagnostic Log 0.
- **Limits:** the DevTools log was not scrolled or inspected for rows from the activation; no causation claim; icon visual only; eggs and guitar values from grid cells.
- **Knowledge state:** observed (single session). Not replay-verified.

## T9 — documentation-only audit and acceptance reconciliation (cycle 8; details `evidence/EXP-055/T9-final-documentation-only-audit-and-acceptance-reconciliation.md`)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `61ce5bb3-e6a9-4706-95eb-2b6f043282d8`.

- **Browser calls 0; Mongoose changes 0.** Reads and searches only: this record, T1–T8 reports, the controller `harness-audit-T*.md` rows, decisive screenshots and accessibility snapshots, EXP-054-R2 T1 and the EXP-037 and EXP-054-R2 records.
- **Acceptance matrix (summary):**

| AC | Status | Basis (one line) |
| --- | --- | --- |
| AC-1 | Supported with limits | Identity, scope, Initial Command, clean states, transcript and records reviewed (T1; `t1-01`, `t1-03`, `t1-04`). Same session. |
| AC-2 | Supported with limits | Empty handler grid; 16-row inventory; FX_RefreshButton PushButton / FX_Refresh / StdFormRefresh (`t1-snapshot-01`, `-03`, `-04`). |
| AC-3 | Supported with limits | One StdFormRefreshCompleted group; one sequence-0 Prompt row; editable action (`t3-snapshot-04` 294–331; `t4-snapshot-09` 293–299; `t4-snapshot-03` 357–375). No custom event. |
| AC-4 | **FAILED FOR ACCEPTANCE** (insufficient baseline evidence) | Static captions, all 13 Captions, and Primary / Data Change / Lose Focus for all 13 components plus Gain Focus for 12 of 13 are baselined by EXP-054-R2 T1 (Part B1–B2) and match. Baseline gaps: Binding Type / Binding for 12 components; component Location/Size; FX_UMCombobox Gain Focus pre-save. Icon and Default Button are visual-only. |
| AC-5 | Supported with limits | Single Save; toast (`t5-04`; `t5-snapshot-07` 794); Save disabled (`t5-snapshot-07` 10–13); post-save readback (`t5-snapshot-08`, `-09`, `-11`, `-12`). SaveChanges body not captured; post-save Events re-read only for FX_ItemStatic. |
| AC-6 | Supported with limits | Clean close; single recent-forms reopen; handler, parameters, components, FX_RefreshButton, Initial Command and Save readback (`t6-02`, `t6-04`, `t6-06`, `t6-07`, `t6-09`, `t6-10`). Same session only. |
| AC-7 | Supported with limits | Closure with no prompt (`t7-02`); single Select Form opening (`t7-03`–`t7-04`); immediate state with prompt (`t7-05`; `t7-snapshot-04` 481–484). No causation claim. |
| AC-8 | Supported | Literal `Hello World`, one OK, captured before the single OK (`t7-snapshot-04` 481–484; `t7-06`). Icon visual only. |
| AC-9 | Supported with limits | FX_Refresh; three records at baseline; Save disabled; `(Object 1 of 3)` (`t7-snapshot-05` 59, 151–170, 477). Eggs and guitar from grid cells. |
| AC-10 | Supported | One activation (controller T8 row 7); prompt with literal Hello World and one OK (`t8-02`; `t8-snapshot-01` 481–484); one OK (T8 row 12). No causation claim. |
| AC-11 | Supported with limits | Immediate and settled records, FX_Refresh, Save disabled, indicator (`t8-snapshot-01` 151–170, 477; `t8-snapshot-02` 59, 151–178, 477). DevTools log not inspected. |
| AC-12 | Supported with limits | Counts reconciled to controller rows; confinement inventory; tool-error classification. Does not resolve AC-4. |

- **Adjudications:** (1) The Static caption baseline was **not** missing: EXP-054-R2 T1 Part B1 rows 5, 7, 9, 11 recorded the four Static captions before any mutation, and all 13 captions match EXP-055 T5. (2) Gain Focus of FX_UMCombobox had no pre-mutation reading. (3) Binding detail beyond the grid Data Source column is recorded only for FormCollectionGrid. (4) No baseline exists for component geometry.
- **Corrections to earlier reports (documentation only):** the T5 report, the T6 report, and this record said the Static captions had no baseline (incorrect; see adjudication 1). The T5 report and this record said original component Events were "blank as in T1" (EXP-055 T1 did not read them; the source is EXP-054-R2 T1 Part B2). Earlier reports were not edited; this T9 report is the correction of record.
- **Tool errors:** harmless read/search errors (T1 read before the record existed; T1 Glob with no files; T2 ripgrep lookahead rejected; no-match finds). Controller flag T4 `browser_type` (1) is the brief-required Message Text entry, not a prohibited action. No procedure violation found.
- **Repository confinement:** worker writes only this record and `evidence/EXP-055/`. Not written: `tools/`, AGENTS.md, recipes, `docs/`, other experiments. Git status was not run (Bash disabled); the session-start pre-existing `tools/learning-harness/` modifications were not made by this worker.
- **Limits preserved:** no server-side durability, no cross-session test, no isolated event-causation proof, no DevTools log completeness, the AC-4 binding and geometry gap. All findings observed only; none replay-verified.
- **Outcome (corrected at T10):** BLOCKED, not accepted. AC-4 is FAILED FOR ACCEPTANCE due to insufficient baseline evidence.
- **Counts (T9):** browser calls 0; file reads and searches only; writes: T9 report and this record.

**Next:** none. The final status is recorded in the T10 section.

## T10 — final status BLOCKED; documentation only (cycle 9)

Worker session `b3d5b671-5262-4c5e-9635-3b661551582a`; task_message_id `126d02a2-26dd-44f1-9b25-6c500169fb4f`.

- **Browser calls: intended 0. Deviation disclosed:** during final verification one read-only `browser_tabs list` was issued in error. It selected nothing, interacted with nothing, and changed no Mongoose state. Mongoose operations 0. Read the current record and the T9 audit before editing. Edited only this record and `evidence/EXP-055/T9-final-documentation-only-audit-and-acceptance-reconciliation.md`.
- **Final status: BLOCKED, not accepted.** AC-4 is FAILED FOR ACCEPTANCE due to insufficient baseline evidence. This is not a demonstrated mutation: no reading shows a changed value.
- **Functional behaviour versus complete acceptance.** Functional behaviour succeeded as observed: the handler and one sequence-0 Prompt action were configured and saved; the recovery reopen kept them; the automatic-opening Prompt and the activation Prompt each appeared with literal `Hello World` and OK as the only response and were each dismissed once; the three item records stayed unchanged and Save stayed disabled. Complete acceptance is not established, because the AC-4 preservation comparison cannot be completed from the recorded baselines.

**Final acceptance matrix (AC-1 to AC-12)**

| AC | Final status | Evidence (paths under `evidence/EXP-055/`) | Limits |
| --- | --- | --- | --- |
| AC-1 Read-only preflight | Supported with limits | `t1-01`, `t1-03`, `t1-04` (png); `t1-snapshot-01` (Version line 570); `T1-preflight-report.md` §1 (transcript lines 197–209; EXP-037 and EXP-054-R2 reviewed) | Displayed identity, not a credential check; same browser session as EXP-054-R2. |
| AC-2 Pre-change inventory; no conflicting handler; original components and FX_RefreshButton | Supported with limits | `t1-snapshot-01` lines 275–296 (empty handler grid); `t2-snapshot-03` lines 676–677 (built-in StdFormRefreshCompleted in the New Name list); `t1-snapshot-04` lines 298–508 (16 rows); `t1-snapshot-03` lines 344, 356, 366, 630–631 | Handler grid is the rendered list. The New control was identified by its hover tooltip. EXP-055 T1 did not read the 13 originals' Events or Captions; their baseline is EXP-054-R2 T1 Part B1–B2. |
| AC-3 One new StdFormRefreshCompleted handler with one sequence-0 Prompt action, before Save | Supported with limits | `t3-04` and `t3-snapshot-04` lines 294–331; `t3-snapshot-03` line 585 (exact name before OK); `t4-snapshot-03` lines 357–375 (Type, Parameters, Edit in-line Script); `t4-09` and `t4-snapshot-09` lines 293–299 | No custom event. "One action" is read from one grid row and one Parameters editor, not from a count query. |
| AC-4 Prompt parameters verified; committed summary; read-only preservation comparison | **FAILED FOR ACCEPTANCE** (insufficient baseline evidence) | Parameters: `t4-snapshot-08` line 697; `t5-snapshot-02` lines 945, 966; `t5-02` png. Committed summary: `t5-snapshot-08` lines 299, 375; `t5-snapshot-07` lines 10–13. FX_RefreshButton: `t4-snapshot-13` lines 528, 553, 565–568, 575–578, 762–765, 840–843; `t6-snapshot-13` lines 528, 574, 585, 800, 890. Form: `t6-snapshot-14` lines 550–772; `t1-snapshot-01` layout. Captions and Events: EXP-054-R2 T1 Part B1 rows 5, 7, 9, 11 and Part B2 agree with EXP-055 T5 and T6 readings (all 13 Captions; 51 of 52 Event cells). | Baseline gaps, not observed changes: (a) Binding Type and Binding for 12 components (only the grid Data Source was recorded; FormCollectionGrid binding is in EXP-054-R2 T2); (b) component Location and Size, never recorded; (c) FX_UMCombobox Gain Focus, "(not read)" in EXP-054-R2 T1 and first read blank in EXP-055 T5, after the EXP-054-R2 save. Captions were compared as displayed values; EXP-054-R2 T1 line 99 notes that key-versus-literal is unresolved. The EXP-054-R2 save was not followed by a caption re-read before EXP-055 T5, so the agreement shows consistency, not proof of preservation across that save. Icon and Default Button are visual only. |
| AC-5 One ordinary Designer Save; native confirmation; Save disabled; unchanged post-Save readback | Supported with limits | `t5-04` (toast); `t5-snapshot-07` line 794 (toast text) and lines 10–13 (Save, Regenerate, Undo, Redo disabled); `t5-snapshot-08`, `-09`, `-11`, `-12` (post-save readback); controller T5 row 61 (one Save) | `SaveChanges` response body not captured. No server-side durability claim. Post-save Captions re-read after reopen (T6); Events re-read only for FX_ItemStatic. |
| AC-6 One clean close; one recent-forms reopen; same definition recovered | Supported with limits (same session only) | `t6-02`, `t6-snapshot-02` (close, no prompt); `t6-03`, `t6-snapshot-03` lines 12–13 (single FX_Items recent-forms entry); `t6-04`, `t6-snapshot-04` (heading; Save disabled); `t6-06`, `t6-snapshot-07` lines 294–299; `t6-07`, `t6-snapshot-09` lines 739, 760; `t6-snapshot-12` to `-14` | The handler group and component tree rendered collapsed on reopen (expanded by view clicks; cause not established). Only FX_ItemStatic's Events were re-read after reopen. |
| AC-7 Runtime closed once without prompt; one Select Form opening; immediate state shows identity and the prompt | Supported with limits | `t7-01`, `t7-snapshot-00` (pre-closure); `t7-02`, `t7-snapshot-01` (tab absent; no dialog); `t7-03`, `t7-04`, `t7-snapshot-02`, `-03` (single opening; controller T7 rows 14, 20, 24); `t7-05`, `t7-snapshot-04` (immediate state with the prompt) | The prompt is observed after the opening. No claim that the automatic Initial Command Refresh caused it. |
| AC-8 Prompt: literal Hello World; OK only; captured before one OK | Supported | `t7-snapshot-04` lines 481–484 (`alertdialog` with `Hello World` and one `OK` button); `t7-05` png; dismissal controller T7 row 30 (one OK); `t7-06`, `t7-snapshot-05` (alertdialog gone) | Info icon visual only. The title includes FX_Items. |
| AC-9 Settled records; FX_Refresh; Save disabled; indicator | Supported with limits | `t7-snapshot-05` lines 59 (Save disabled), 151–168 (three records), 170 (FX_Refresh), 477 (`Description (Object 1 of 3)`); `t7-06` png | Eggs and guitar values come from grid cells, not a detail pane. |
| AC-10 One activation; second Hello World prompt, OK only; one OK | Supported | `t8-02` png and `t8-snapshot-01` lines 477, 481–484 (second prompt, `Hello World`, one OK); controller T8 row 7 (one activation) and row 12 (one OK); `t8-03`, `t8-snapshot-02` (alertdialog gone) | Button identified by its rendered caption FX_Refresh; Designer Primary StdFormRefresh is at `t1-snapshot-03` lines 630–631 and `t4-snapshot-13` lines 840–843. Causation not claimed. |
| AC-11 Immediate and settled post-activation evidence | Supported with limits | `t8-snapshot-01` lines 151–170, 477; `t8-snapshot-02` lines 59, 151–178, 477; `t8-01`, `t8-snapshot-00` (pre-activation) | DevTools log not inspected for activation rows. Indicator text changed from `Description` to `FX_Refresh` with focus; the count `1 of 3` is unchanged. |
| AC-12 Final reconciliation | Supported with limits; does not cure AC-4 | Counts below; T9 audit §5 and §7 | Because AC-4 failed, the experiment is not accepted. |

**Reconciled counts (controller row tables; worker reports consistent):**
- Handlers added: **1** (T3 row 23, after T3 row 9).
- Sequence-0 Prompt actions configured: **1** (T4 rows 37, 49, 55).
- Designer Saves: **1** (T5 row 61).
- Designer close: **1** (T6 row 14). Recent-forms reopen: **1** (T6 row 25).
- Runtime closure: **1** (T7 row 9). Controlled runtime opening: **1** (T7 rows 14, 20, 24).
- Hello World Prompts observed: **2** (automatic opening, T7; after the activation, T8 row 7).
- Authorized OK dismissals: **2** (T7 row 30; T8 row 12).
- FX_RefreshButton activations: **1** (T8 row 7).
- Manual Refresh operations: **0**. Runtime business-data mutations: **0**. Diagnostics operations: **0**. User Preferences operations: **0**. Diagnostic Log operations: **0**.
- Prompt postconditions missing: **none**, so no failed-prompt check is recorded.

**Evidence for both runtime Prompts and their settled states**
- *Prompt 1, automatic opening (AC-7, AC-8):* before dismissal, `t7-05-immediate-after-single-open-before-any-dismissal.png` and `t7-snapshot-04-immediate-after-single-open-before-dismissal.md` (lines 481–484); opening context, `t7-03-after-open-control-select-form-dialog.png` and `t7-snapshot-02-select-form-dialog-open.md`; dismissal, `t7-06-after-single-ok-dismissal-settled.png`; settled state, `t7-snapshot-05-settled-after-single-ok-dismissal.md`.
- *Prompt 2, activation (AC-10, AC-11):* pre-activation, `t8-01-pre-activation-runtime-baseline.png` and `t8-snapshot-00-pre-activation-fresh-runtime.md`; before dismissal, `t8-02-immediate-after-single-fx-refresh-activation.png` and `t8-snapshot-01-immediate-after-single-activation.md` (lines 477, 481–484); dismissal and settled state, `t8-03-after-single-ok-dismissal-settled.png` and `t8-snapshot-02-settled-after-single-ok-dismissal.md`.
- *Saved handler and parameters:* `t5-snapshot-08` lines 294–299 and 366–375 (post-save); `t5-05-post-save-parameters-readback-dialog.png`; after reopen, `t6-07-parameters-readback-after-reopen-icon-and-default-button.png` and `t6-snapshot-09`.

**Documentation-tool error during T9 (non-mutating)**
- In T9, two of the three Edit calls targeted the audit file, and one of those failed with "String to replace not found". A failed Edit writes nothing, so the failed call did not mutate the file. Its sibling edit in the same batch had already applied, however, and it left a duplicated phrase in T9 audit §3. T10 removes that duplicate and corrects T9 audit §0, §1, §3, §6 (C4 and C5), and §10. The final record and audit were then checked by search: the BLOCKED status is present, and no operator-waiver request remains. Classified as a documentation-tool error, not a Mongoose or procedure error.

**Corrections made in T10**
- *This record:* the top status (T9 status kept as "Previous"); the T5 Event and Static-caption claims; the T5 status and the T4 AC-4 note; the planned-artifact sentence; the T1 open questions and the T2 "Open" item (now resolved); the T1 Next section; and the T9 AC-4 row, outcome bullet, and Next line.
- *T9 audit:* AC-4 status and verdict (from "unresolved" to FAILED FOR ACCEPTANCE), the outcome and waiver text (removed), the duplicated §3 phrase (removed), and §6 corrections C4 and C5.
- *Withdrawn statement:* that the four Static captions had no recorded per-component baseline. That statement appears in the T5 report (lines 57, 60, 69) and in this record and the T9 audit wording. EXP-054-R2 T1 Part B1 rows 5, 7, 9, and 11 record them.
- *Not edited (outside this brief's permitted files):* the T5 report at lines 57, 60, and 69 keeps its original wording and is superseded by this section. The T6 report is consistent with this correction.

**Preserved limitations.** No independent server-side durability; the `SaveChanges` body was not captured. No cross-session test. No isolated event-causation proof: neither prompt is attributed to Initial Command Refresh, the StdFormRefresh chain, or handler execution. DevTools log completeness is not established (rows from the T7 opening and the T8 activation were not inspected). The AC-4 baseline gaps above. The icon and Default Button states are visual only.

**Repository confinement (T10).** Worker-authored writes in this task: this experiment record and `evidence/EXP-055/T9-final-documentation-only-audit-and-acceptance-reconciliation.md`. No new files were created. No recipes, AGENTS.md, other experiments, `tools/`, or `docs/` were changed. Bash is disabled, so no authoritative repository-wide git audit was run; this is a worker-authored inventory from tool-call logs. The harness computes authoritative confinement from before/after git state. The earlier T1–T9 inventory is in the T9 audit §7.

**Classification.** Every finding is observed (single browser session) or unresolved. None is replay_verified.

**Final state.** T10 did not touch the Designer or the Web Client. The Designer remains open and clean with Save disabled; the Web Client remains on the settled FX_Items runtime with no dialog open.

## Acceptance status (T1 scope; historical, superseded by the T10 matrix)

| AC | Status after T1 | Basis / limit |
| --- | --- | --- |
| AC-1 Read-only preflight | **Supported (with limits)** | Report §1–§3, §7; `t1-01`, `t1-03`, `t1-04`; snapshots `t1-snapshot-01`, `-03`, `-04`, `-05`. Identity is displayed text, not a credential check; same browser session as EXP-054-R2. |
| AC-2 Pre-change handler and component inventory | **Supported (with limits)** | Report §5–§6; `t1-02`, `t1-03`, `t1-snapshot-01`, `-03`, `-04`. Limits: the New control's identity is unverified (no accessible name); 13 original components' Event and Caption cells not individually re-read. |
| AC-3 to AC-12 | Not tested | Outside T1. |

## Preconditions for the single handler mutation (T2 gate)

- Established: identity; User scope; Initial Command Refresh; no StdFormRefreshCompleted handler; no other handler; exactly one FX_RefreshButton (PushButton, Caption FX_Refresh, Primary StdFormRefresh); Designer clean; runtime clean.
- **Resolved at T2:** the New dialog's Name list offers the built-in StdFormRefreshCompleted; no custom naming was required.

## Browser-call and error summary (T1)

- Tab operations: list 1; select 3 (all succeeded).
- Clicks (view-only): 4 (Event Handlers tab; Properties Form tab; Properties Component tab; Details Components tab).
- Finds 4; untargeted snapshots 1 fresh (inline) plus 4 saved; screenshots 4.
- Errors: none. Ref-not-found: none. Recovery attempts: none.
- Mutations 0; saves 0; closes 0; reopens 0; runtime openings 0; activations 0; Prompt dismissals 0; Diagnostics or User Preferences operations 0; Diagnostic Log operations 0; typing 0; evaluate or run-code 0 (the tool's "Ran Playwright code" wrapper is tool-generated).

## Open questions

1. [Resolved at T2] The New workflow offers the built-in StdFormRefreshCompleted.
2. [Resolved at T2] The `+` New control was identified by its hover tooltip `New`.
3. FX_RefreshButton "Event to generate" reads `StdFormRefresh` now, blank before the EXP-054-R2 save. Cause unresolved; not used as EXP-055 evidence.
4. Caption literal vs string-resource representation for `FX_Refresh` remains as EXP-054-R2 recorded (literal); not distinguished by the accessibility tree.
5. [Historical] The indicator was not visible in the T1 frame; later frames show `(Object n of 3)` (T7, T8).

## Repository changes (T1)

- Created: this record `experiments/EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md`.
- Written: `evidence/EXP-055/T1-preflight-report.md`.
- Written: `evidence/EXP-055/t1-01-designer-components-pre-change.png`, `t1-02-event-handlers-baseline-designer.png`, `t1-03-form-event-handlers-baseline-designer.png`, `t1-04-runtime-inherited-fx-items-tab-preflight.png`.
- Written (browser-generated, saved at worker request): `evidence/EXP-055/t1-snapshot-01-form-tab-event-handlers-baseline.md`, `t1-snapshot-03-component-button-properties-and-components.md`, `t1-snapshot-04-components-inventory.md`, `t1-snapshot-05-runtime-inherited-fx-items-preflight.md`.
- Tool-generated (not worker-authored, gitignored `evidence/playwright/`): accessibility snapshots and console logs for the T1 window.
- Not modified: AGENTS.md, recipes, other experiments, `tools/`, any non-FX_ artifact, Mongoose application artifacts.

## Knowledge state (after T1; historical, superseded by the T10 matrix)

| Finding | State |
| --- | --- |
| Designer FX_Items, User scope, clean (Save disabled), Initial Command Refresh | observed (T1; single session) |
| No handler on FX_Items (Form grid empty) | observed (T1) |
| FX_RefreshButton PushButton, Caption FX_Refresh, Primary StdFormRefresh, one row | observed (T1; carried from EXP-054-R2) |
| Runtime FX_Items three records, Save disabled, no prompt | observed (T1) |
| Handler creation, Prompt parameters, Save, recovery, automatic-opening Prompt, activation Prompt | **not tested** |
| Replay-verified findings | none |

## Next (superseded)

Superseded: T2 through T9 have been performed, and the final status is in the T10 section. No browser, Designer, or runtime action is pending.

## Outcome (operator, 2026-10-11)

**Accepted with limits. AC-4 waived** (operator call under the standing authorization of 2026-10-11). Run R-20261011-153829-vsIH completed as blocked at cycle 10 (10 of 12 worker tasks); this operator outcome supersedes that harness verdict.

- **Why the waiver:** AC-4 failed because evidence was incomplete, not because a change was observed. Some properties had no baseline before the Save: Binding Type/Binding for 12 components, component Location/Size, and FX_UMCombobox Gain Focus. Every baselined property matches: all 13 Captions, and the Primary / Data Change / Lose Focus events, from EXP-054-R2 T1 Part B1–B2. The operation added one handler row in the Event Handlers view. No step touched a component or its layout. AC-1 to AC-3 and AC-5 to AC-12 are supported.
- **Lesson for later briefs:** when a preservation check covers component properties, T1 must baseline exactly those properties (binding, location/size, all events). Otherwise, word the check as "Components grid row and visible layout unchanged" so that it matches what T1 captures.

Created, for later cleanup:
- **User-scope Form `FX_Items`:** one Form event handler for **`StdFormRefreshCompleted`**, sequence 0. Its action:
  - Response Type **Prompt**, Message Text `Hello World` (literal);
  - Caption blank, Icon default (information);
  - OK only, OK as the default button, Event To Generate blank.
  - Summary: `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
- One Designer Save ("Form [FX_Items] and global object(s) were saved."), then a close and a recent-forms reopen.
- No data, preference or diagnostics change.

**Side effect:** FX_Items now shows a "Hello World" prompt after every refresh, including on open (Initial Command Refresh) and on each FX_Refresh click. Later runtime steps must expect the prompt and dismiss it with OK.

Operator screenshot review:
- `t6-07`: the reopened Designer (User scope), Event Handlers tab: group `StdFormRefreshCompleted` > row 0 / Prompt / false. The Event Handler Parameters dialog shows Message Text "Hello World", Caption blank, the information icon selected, Responses OK checked with OK as the default button, and Event To Generate blank.
- `t7-05`: one runtime open of FX_Items shows the modal "Infor Mongoose Application Development Framework - FX_Items" with "Hello World" and an OK button over the loaded three rows (dumbbell first). The status bar reads "(Object 1 of 3)".
- `t8-02`: after one FX_Refresh click, the same "Hello World" prompt appears. The status bar reads "FX_Refresh (Object 1 of 3)".

Learned (observed):
1. **Handler procedure:** Details > **Event Handlers** > New (+). The New dialog has an event-name drop-down listing the Form and standard events; pick `StdFormRefreshCompleted` there. Then expand the handler's Response group, set Response Type = Prompt, open **Parameters** (ellipsis), type the Message Text, and click OK.
2. **Parameters dialog layout:**
   - General: Error Message, Success Message, Only When Current Collection Is (`<all collections>`), Only When Platform Is, Keep, Ignore Failure, Message as Toast?, Disabled.
   - Edit Prompt Message: Message Text, Caption, Icon (4 options), Prompt When, "Stop event handlers if expression is true".
   - Responses: OK / Yes / No / Abort / Retry / Ignore / Cancel, each with Event To Generate and Default Button.
3. **Handler on a standard event:** a handler on the standard event `StdFormRefreshCompleted` runs after the Initial Command refresh on open and after a button-driven StdFormRefresh. No custom event is needed. This confirms the tutorial's prediction for section 6.
4. **Prompt dialog:** the runtime Prompt title is "<application name> - <Form name>". It is modal over the Form.

Limits:
- Same session, UI level only.
- Icon and Default Button were checked visually only.

Next: Part 3 section 7, Set Values with a form variable and a variable-bound Edit. This touches the earlier variable-retention problem, so it needs its own careful brief.
