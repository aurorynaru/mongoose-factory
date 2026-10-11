# EXP-056 — Hello World Part 3 Section 7: FX_Items Set Values and Variable-Bound Edit

**Status (FINAL, T10): BLOCKED at AC-8; not accepted.** The single ordinary Designer Save (T8) reported native success (Designer-session observation). The single clean Designer close (T9) succeeded. The one permitted recent-forms reopen did not open the Form (menu item not visible at click; no reopen dispatched as far as the evidence shows; cause not established). The brief forbids a retry, so none was made. **AC-8 FAILED** (mandatory recovery not established). AC-9 pending/not evaluable (no reopened Form). AC-10, AC-11, AC-12 pending/not established (no runtime opening or value test). AC-1 to AC-7 supported with limits. FX_VarTest absent as a Form-variable definition before and immediately after Save; post-reopen visibility not observed. The `P(FX_Description)` adaptation (operator-authorised) is unverified at runtime. Final matrix and budget reconciliation: `evidence/EXP-056/T10-final-blocked-report.md`. Browser calls in T10: 0.

Status (latest, T9): **Designer closed once cleanly; the one recent-forms reopen FAILED** (click on the FX_Items menu item timed out at "element is not visible"; menu closed; no Form opened, confirmed immediately and after a 3-second wait). Not retried, per the brief. **AC-8 not established; AC-9 not evaluable** (no reopened Form). Designer on an empty canvas, Save disabled, no dialog. Web Client runtime untouched. Coordinator decision needed: retry the single reopen in a new bounded task, or stop the lifecycle here. Earlier status (T8) follows.

Status (T8): **ONE ordinary Designer Save performed; native success** `Form [FX_Items] and global object(s) were saved.`; Save, Regenerate, Undo, Redo disabled afterwards. Saved handler: sequence 0 Prompt summary unchanged; sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))` retained. FX_VarTestEdit: Name `FX_VarTestEdit`, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Size `37.05; 2`, Location `12.7222222222222; 30.25`, Tab 0, Events blank; Components-grid Data Source still blank (unresolved, not changed). **FX_VarTest Form-variable definition absent immediately after Save** (observation; not recreated; AC-7 documented). AC-6 supported; AC-7 documented. Designer left open on the saved Form. Not done: close/reopen, runtime. Save count: 1. Earlier status (T7) follows.

Status (T7, read-only): **pre-Save verification passed; AC-5 supported.** 17 Components entries; 15 of 15 originals (excluding FX_RefreshButton, reused from T6) match T1 on every field read in T7, with Drag/Drop for two rows carried from T1; Pane containers unavailable as in T1. FX_VarTestEdit: Name `FX_VarTestEdit`, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Size `37.05; 2`, Location `12.7222222222222; 30.25`, Tab 0, Events blank. Properties header now reads `FX_VarTestEdit (Edit)` after a real selection change (T6 stale label resolved). Components grid Data Source cell for FX_VarTestEdit is blank (unresolved; not repaired). Handler: sequence 0 Prompt (Message Text `Hello World`, OK only); sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`. Form-variable FX_VarTest absent (observation). Save enabled; not clicked. Recommended next: one ordinary Save as a separate task. Earlier status (T6) follows.

Status (T6): **FX_VarTestEdit placed on the Form (unsaved).** Name `FX_VarTestEdit`; Type Edit; Binding Type Variable; Binding `variables.FX_VarTest`; Location `12.7222222222222; 30.25`; Size `37.05; 2`; Pane 1; Tab 0. Handler unchanged (sequence 0 Prompt; sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`). Components: 17 rows; original 16 match T1 on grid columns; FX_RefreshButton full readback matches T1. Save enabled, not clicked. FX_VarTest definition absent (observation). AC-5 partly supported. Not done: Save, close/reopen, runtime. Earlier status (T5) follows.

Status (T5): **T5 (operator-approved Path A) stopped at the unsaved checkpoint.** Sequence 1 is Set Values with one committed assignment, `FX_VarTest=P(FX_Description)`; handler summary `SETVARVALUES(FX_VarTest=P(FX_Description))`. Sequence 0 Prompt unchanged. **Expression adaptation (operator-authorised):** `P(FX_Description)` replaces the proposed `P(Description)`, because FX_DescriptionEdit is bound to `object.FX_Description`. The Form-variable definition FX_VarTest is **absent** (Variables tab; not created). Save is enabled (dirty), not clicked. Not done: FX_VarTestEdit, Save, close/reopen, runtime. AC-3 supported with the adaptation; AC-4 supported (definition absent; assignment present, captured separately).
Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items` (User version).
Brief: approved in commit `2a43ce1`; draft in `e67e07c`. Run `R-20261011-163026-Hdng`, cycle 0, task T1.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `d413f37b-4d23-4548-9198-055cbc5f27d5`.

## Objective (proposal, unchanged)

On the existing User-scoped `FX_Items` Form:
1. Keep the existing `StdFormRefreshCompleted` sequence-0 Hello World Prompt unchanged.
2. Append one sequence-1 Set Values action that assigns Form variable `FX_VarTest` from the expression `P(Description)` (syntax to be verified in the native UI; not guessed).
3. Add one Edit component `FX_VarTestEdit`, Data Source Binding Type Variable, Binding `FX_VarTest`.
4. One ordinary Designer Save; one Designer close and recent-forms reopen; one Web Client opening; dismiss the expected Prompt once with OK; check that `FX_VarTestEdit` shows the Description of the current record.

Acceptance (AC-1 … AC-12) is as in the brief. The primary postconditions are handler/action recovery, Edit binding recovery, and the runtime value. Variable-definition visibility after Save or reopen is an observation, not a gate.

## Reference reading (completed before browser interaction)

- `AGENTS.md` (LEARNING MODE; FX_-only mutation; evidence and lifecycle rules).
- `docs/mongoose/transcripts/hello-world-pt3.md` Section 7 (lines 211–226, 06:03–07:39) and its agent boundary: the tutorial's runtime display does not prove that a Form-variable definition survives close/reopen; `P(Description)` is narrated, "likely" and "not visually verified"; the syntax must be read from the native UI.
- `experiments/EXP-004-form-variable-fundamentals.md`: **blocked**. Form variables created via Details > Variables > New were absent after Save (2/2) and after Regenerate Form (1/1), silently.
- `experiments/EXP-014-form-variable-definition-recovery-across-ordinary-.md`: **blocked (AC-8 FAIL)**. Variable `FX_CloseReopenRetentionVar` with Value `Seed-Close-D` was saved (`SaveChanges` `Success:true`), but zero variables were present after the ordinary close/reopen.
- `experiments/EXP-054-R2-hello-world-part-3-section-5-fx-items-native-refre.md`: accepted with limits. Created `FX_RefreshButton` (PushButton, Caption `FX_Refresh`, Primary `StdFormRefresh`). Its T1 Part B1–B2 is the pre-change Component baseline for the 13 original components.
- `experiments/EXP-055-hello-world-part-3-section-6-fx-items-standard-ref.md`: accepted with limits, with AC-4 waived by the operator. Created the `StdFormRefreshCompleted` Prompt handler (sequence 0, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`). Lesson recorded there: a preservation check must baseline the exact properties it claims (binding, Location/Size, all Events). EXP-055 is not revisited here.

Implication carried into this record: the variable-definition retention question is **open**. EXP-004 and EXP-014 failed on definition persistence. EXP-056 may observe that again, but per the brief, a missing definition is an observation and not a pass/fail gate, and it is not repaired.

## T1 — read-only preflight (complete; details `evidence/EXP-056/T1-preflight-report.md`)

- **Tabs.** `browser_tabs list` first (before any select). Tab 0 Designer, tab 1 Web Client. The first screenshot and Variables click were attempted on tab 0 before a successful select; they timed out at "visible, enabled and stable" and changed nothing. After `browser_tabs select 0` succeeded, the operations worked. Recorded as a procedural deviation (T1 report §8.1).
- **Identity and scope (AC-1).** Designer Form `FX_Items`; Form Name `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Version `User version for user anton.ramos@3mworks.com.ph`.
- **Clean state (AC-1).** Designer Save, Regenerate Form, Undo, Redo disabled. Runtime Save disabled.
- **Initial Command (AC-1).** `Refresh`.
- **Handler baseline (AC-1, AC-2).** One group `StdFormRefreshCompleted`; one row: sequence 0, Prompt, Disabled false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. No sequence-1 action. No other handler.
- **Runtime (AC-1).** Inherited FX_Items tab (not reopened, not refreshed). Records dumbbell / `45 pound iron` / `45.00` / `EA`; eggs / `cage free` / `6.99` / `DZ`; guitar / `natural acoustic` / `129.99` / `EA`. FX_Refresh rendered. Indicator `FX_Refresh (Object 1 of 3)`. No dialog. A DevTools log panel was already open with EXP-054-R2 rows; it was not touched.
- **Variables baseline (AC-2, AC-4 pre-state).** `Form - Persistent`: `InitialCommand` only. `Global - Persistent` and `Global - Temporary` present; no FX_ name in the rendered rows. **`FX_VarTest` absent.** Global rows are virtualized (limit).
- **Components baseline (AC-2).** 16 rows: Pane (00); FormCollectionGrid (Grid; Binding Type `Primary Collection Grid`, Binding `objects`); four GridColumns (Binding `object.FX_Item` / `object.FX_Description` / `object.FX_Cost` / `object.FX_UM`, Binding Type `Property`); Pane (01); eight Pane (01) children (four Static with Binding Type `None`; four Edit/ComboBox with Binding Type `Property` and Binding `object.FX_*`); FX_RefreshButton (PushButton, Caption `FX_Refresh`, Binding Type `None`, Primary `StdFormRefresh`). Location, Size, and all six exposed Events are recorded per row. **No `FX_VarTestEdit`.** Full table: T1 report §4.
- **Baseline gap.** The two Pane containers rendered no Component property rows, so Binding, Location, Size, and Events for them are **genuinely unavailable**. They are recorded as unavailable, not inferred. The coordinator must decide whether this is an acceptable baseline before any mutation (see Open questions).

## AC status after T1

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 Preflight identity, scope, clean state, Initial Command, handler, records | **Supported** | T1 report §1; `t1-02`, `t1-03`, `t1-04`, `t1-05`; `t1-snapshot-00`, `-02`, `-04`, `-05` |
| AC-2 Complete inventory of 16 components; Variables collection; absence of FX_VarTest, FX_VarTestEdit, and sequence-1 action | **Supported with limits** | T1 report §2–§5; playwright component snapshots listed in §4; limits: Pane (00)/(01) unavailable properties; virtualized Global Variables rows |
| AC-3 to AC-12 | **Not tested** | Outside T1 (read-only) |

## Counts (T1)

- Tab lists 1 (before the first select); tab selects 3 (tab 0, tab 1, tab 0), all succeeded.
- Clicks that succeeded: 25 (Variables tab 2; Expand 2; Event Handlers tab 1; Components tab 1; Component tab 3, after FormCollectionGrid, Pane (00), and Pane (01); component row selections 16).
- Clicks that timed out before a tab select: 2 (no state change).
- Snapshots worker-saved: 6. Screenshots that succeeded: 4 (`t1-02`, `t1-03`, `t1-04`, `t1-05`); screenshot timeouts before tab select: 2 (no file).
- Typing 0; key presses 0; evaluate or run-code 0 (the click tool's own output shows a generated Playwright line; no script was written by the worker); Designer Save 0; Designer close/reopen 0; Set Values or Edit operations 0; variable creation 0; runtime open/close 0; runtime activation 0; manual refresh 0; runtime data mutation 0; Diagnostics or User Preferences 0; Diagnostic Log 0; FormSync, cache unload, SQL 0.
- Designer console errors observed: 2 (`TypeError: ... reading 'adorner'`), timed with Pane row selections (`evidence/playwright/console-2026-10-11T08-30-55-273Z.log` lines 1 and 12). Not investigated.

## T1 timeout reconciliation (documentation only, T2)

- Total T1 timeouts: **4** — 2 screenshot calls and 2 click calls (`e352`, `e353`), all before the first successful tab select.
- Recovery allowance used: **1 fresh untargeted snapshot** (`t1-snapshot-01`) and **1 corrected click** (`e353`, which also timed out).
- `t1-snapshot-02` was the snapshot required after the tab select, not a second recovery snapshot. The earlier "two fresh snapshots counted conservatively" wording is withdrawn (T1 report §8.2 corrected).
- The successful `e353` click after the select is the first attempt on the selected tab. Cause of the timeouts is not established; the select appeared to resolve them.

## T2 — native Set Values step, stopped at the unsaved checkpoint (cycle 1)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `d58b87c8-b422-49d9-9594-5b3436dc9b5f`.

- **Gate (passed).** Tab list, then tab 0 select (succeeded), then fresh snapshot (`t2-snapshot-00`). Designer `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate Form, Undo, Redo disabled. Event Handlers grid: one `StdFormRefreshCompleted` group, one row, sequence 0, Prompt, Disabled false, `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
- **FX_VarTest definition check (both Variables groups, positive control).** The Variables list search (read-only filter) was used. `VarTest` returned zero rows (the list was empty after the filter applied). Positive control: `Initial` returned only `InitialCommand` (`Form - Persistent`). The filter was then cleared. **FX_VarTest is absent** from the Variables collection, including the Global groups that T1 saw only partly rendered (`t2-snapshot-01`, `playwright/page-2026-10-11T08-39-31-202Z.yml`, `…08-39-40-198Z.yml`).
- **Append-action route (not established; stop).**
  - The handler grid toolbar has five unlabeled buttons. Hover on the first shows the tooltip **`New`** (`t2-02`).
  - **New** opened an **"Event Handler"** dialog with `Name: StdFormRefreshCompleted` pre-filled (`t2-03`, `t2-snapshot-03`). This is a handler-creation dialog, not an action-add. Confirming it could create a second handler for the same event. It was **cancelled** (one click on Cancel). Save stayed disabled and the grid was unchanged (`t2-snapshot-04`).
  - The **Copy** button would duplicate the Prompt row, not add a Set Values action. It was not used, because the copy would carry the Prompt's parameters into a Set Values row.
  - The Response node of the sequence-0 row exposes only Type, Parameters and Edit in-line Script; no add-action control.
  - One **right-click** on the sequence-0 row opened no context menu. It focused the `Disabled` cell (value still `false`). No key was pressed while it had focus (`t2-04`).
  - No earlier experiment in `experiments/` records adding a second action to an existing handler (searched).
- **Consequence.** No sequence-1 action was added. The Set Values Parameters > Variables ellipsis and the `P(Description)` syntax check require an existing Set Values action row, so they were **not reached**. The FX_VarTest definition was **not created**, because creating it outside the Set Values workflow would skip the verified syntax step. No Edit component was placed.
- **Counts (T2).** Tab lists 1; tab selects 1; snapshots 5 (`t2-snapshot-00`, `-01`, `-02`, `-03`, `-04`); screenshots 4 (`t2-01`, `t2-02`, `t2-03`, `t2-04`); hover 1; filter text entry 2 (`VarTest`, `Initial`) plus 1 clear (empty text); Enter key 3 (filter submits); Event Handlers New clicks 1; Cancel clicks 1; right-click 1; Save 0; Designer close/reopen 0; Edit placement 0; Set Values rows added 0; variable definitions created 0; runtime open/close/activation 0; Diagnostics, User Preferences, Diagnostic Log 0.
- **AC-3:** **not established** (no sequence-1 action; the sequence-0 Prompt was unchanged in readback, which is recorded, but the required two-action state was not reached).
- **AC-4:** **partly observed, not established.** The Variables definition is observed **absent** (`t2-snapshot-01`). The Set Values assignment row does not exist, so the pre-Save assignment observation could not be captured.
- **Knowledge state.** The Variables absence is observed (single session). The New-button behaviour (creates an Event Handler) is observed from one dialog (not confirmed by OK). The append route is unresolved.
- **Operator decision needed:** the native route for appending a second action to the existing `StdFormRefreshCompleted` handler. Options (not chosen by the worker): (a) confirm the New dialog with the same event and check whether Mongoose adds a response row rather than a second handler (a result that must then be verified and, if wrong, reverted); (b) an action-add control I have not located; (c) the Copy row route, accepted as a deviation with the copied Prompt parameters changed to Set Values. The brief does not name one.

## T3 — sequence-1 row via New on the existing handler; unsaved checkpoint (cycle 3)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `b887c91d-3302-455a-bebe-fe1167396375`. Detail: `evidence/EXP-056/T3-report.md`.

- **Gate (passed).** Tab list; select tab 0 (succeeded); fresh snapshot. FX_Items; User footer; Save and Regenerate disabled; one `StdFormRefreshCompleted` group; one sequence-0 Prompt row with parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; no sequence-1 row; no dialog.
- **New (+) clicked once**, then the "Event Handler" dialog. Name read in a fresh snapshot: exactly `StdFormRefreshCompleted`; not changed. **OK clicked once.**
- **Immediate result.** One `StdFormRefreshCompleted` group header. Row 0 Prompt unchanged. Row 1: sequence `1`, Disabled `false`, **Response Type blank**, Response Parameters blank; property tree Type and Parameters show no value. Save **enabled** (dirty). No dialog open.
- **Not done (by instruction).** Type not set; Parameters not opened; no FX_VarTest; no FX_VarTestEdit; no Save; no close/reopen; no runtime; no Delete or Undo.
- **Acceptance.** AC-3 partly established (two rows in one group; sequence 0 unchanged; sequence-1 Type/Parameters not yet configured). AC-4 not established. AC-5 to AC-12 not tested.
- **Counts (T3).** Tab lists 1; tab selects 1; fresh snapshots 3; screenshots 3; clicks 2 (New 1, OK 1); typing 0; Response Type set 0; Parameters opened 0; Set Values rows 0; variables created 0; Edit placed 0; Save 0; close/reopen 0; runtime 0; diagnostics and preferences 0.
- **Knowledge state.** The New route creating a sequence-1 row in the existing group: **observed** (single session; unsaved). Its Type is blank as read. Whether that Type can be set to Set Values, and the `P(Description)` syntax: **unresolved**.
- **Next (coordinator).** Set row 1 Response Type to Set Values, then Parameters > Variables > New for `FX_VarTest`, and read the `P(Description)` syntax in that native dialog.

## T4 — Set Values type on sequence 1; FX_VarTest assignment not committed; unsaved checkpoint (cycle 4)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `0c417301-9a99-48b5-a43c-aba7910b8df3`. Detail: `evidence/EXP-056/T4-report.md`.

- **Gate (passed).** Tab list; select tab 0; fresh snapshot. User footer; Save enabled (T3 dirty state); one group; row 0 Prompt unchanged; row 1 sequence 1 with blank Response Type.
- **Done.** Row 1 selected; Response Type set to **Set Values** (one selection). Grid row 1 shows Set Values.
- **Parameters workflow observed.** Event Handler Parameters > Edit Set Values > Variables `...` opened an **empty** "Edit Set Variable Values" list. New opened "Edit Set Variable Value Pair" with a **Target combobox** (existing variables only; `InitialCommand` first; no FX_VarTest) and a **Value** textbox. **No variable-name field.** Target `...` showed no picker.
- **Not done.** No Target chosen, no Value entered, no `P(Description)` entered or verified. No assignment committed. No FX_VarTest definition created (not via any path). Pair, list and Parameters dialogs cancelled; nothing committed.
- **Variables tab (AC-4 definition half).** `Form - Persistent` = `InitialCommand` only. FX_VarTest **absent**.
- **Counts (T4).** Tab lists 1; tab selects 1; fresh snapshots 14; screenshots 10; clicks 12; key presses 1 (Escape); typing 0; Response Type set 1; Parameters opened 1 (cancelled); Set Values assignments 0; variables created 0; Edit placed 0; Save 0; close/reopen 0; runtime 0; diagnostics and preferences 0.
- **Acceptance.** AC-3 **not established** (sequence 1 is Set Values with no FX_VarTest assignment; expression unverified). AC-4 **partly observed**: definition absent, assignment absent. AC-5 to AC-12 not tested.
- **Knowledge state.** The Set Values Type selection committing on sequence 1: **observed** (single session, unsaved). Set Values Variables > New opens a Target combobox over existing variables only: **observed** (single session). Whether a Target name can be typed to create FX_VarTest, and the `P(Description)` syntax: **unresolved**.
- **Operator decision needed.** (1) Create FX_VarTest first via Details > Variables > New (the EXP-004 path), then select it in Target and enter the verified expression; (2) test typing a new name into Target (not done; would be an unvalidated write); (3) accept AC-3 failure. The unsaved state is preserved.

## T5 — Path A: FX_VarTest assignment committed on sequence 1; unsaved checkpoint (cycle 7)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `4e65e639-3f50-4729-a55b-5a73df09b8b4`. Detail: `evidence/EXP-056/T5-report.md`.

- **Operator adaptation (explicit).** Proposed `P(Description)` → authorised **`P(FX_Description)`**. Basis: T1 inventory shows `FX_DescriptionEdit` Binding Type `Property`, Binding `object.FX_Description`; the IDO property is `FX_Description`. Entered only after Target verification; read back before OK.
- **Gate (passed).** Tab list; select tab 0; fresh snapshot. User footer; Save enabled (T4 dirty); one group; row 0 Prompt unchanged; row 1 Set Values, Parameters blank; the parent assignment list empty before entry.
- **Target.** Typed `FX_VarTest` into the Target combobox with no dropdown item selected; **Tab once**; the Target **retained `FX_VarTest`** (accessibility and screenshot). No existing variable was selected or changed.
- **Value and readback.** Typed `P(FX_Description)` into Value. Readback before OK: Target `FX_VarTest`, Value `P(FX_Description)`.
- **Commit (one each).** Pair OK once → list shows exactly one row `FX_VarTest=P(FX_Description)` (verified before parent OK). List OK once. Parameters OK once.
- **Committed result.** Row 1 summary `SETVARVALUES(FX_VarTest=P(FX_Description))`; Type Set Values. Row 0 re-selected: Type Prompt; Parameters readback Message Text `Hello World`; OK the only checked response; Parameters Cancelled (no change). Summary unchanged.
- **Form-variable definition (checked separately).** Variables tab: Form category `InitialCommand` only. Filter `VarTest`: no rows. **FX_VarTest definition absent.** Not created. Assignment row ≠ definition (observed, not conflated).
- **Not done (by instruction).** No second assignment; no FX_VarTestEdit; no Save; no close/reopen; no runtime; no FX_VarTest created through another route; no existing component changed.
- **Counts (T5).** Tab lists 1; tab selects 1; fresh snapshots 16; screenshots 5; clicks 12; typing 4; key presses 3 (Tab 1, Enter 2); assignment rows committed 1; Parameters OK 1; Parameters Cancel 1 (read-only); Save 0; close/reopen 0; Edit placed 0; variables created 0; runtime 0; diagnostics and preferences 0.
- **Acceptance.** AC-3 supported with the adaptation (two ordered actions, sequence 1 Set Values with the committed assignment). AC-4 supported (definition absent; assignment captured separately). AC-5 to AC-12 not tested.
- **Knowledge state.** Target accepts a typed name and retains it after Tab: **observed** (single session). The expression entry and committed summary: **observed**. Whether `P(FX_Description)` evaluates to the Description at runtime: **unresolved**. Whether the Target stores an existing-variable reference or a plain name: **unresolved**.
- **Next (not started).** Place `FX_VarTestEdit` (later bounded task), then one ordinary Save after the pre-Save gate.

## T6 — FX_VarTestEdit placed, renamed, bound to Variable FX_VarTest; unsaved pre-Save checkpoint (cycle 8)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `4ef5ddd1-a4c6-4853-a531-da11185964a1`. Detail: `evidence/EXP-056/T6-report.md`.

- **Gate (passed).** Tab list; select tab 0; fresh snapshot. User footer; Save enabled; handler: one group, sequence 0 Prompt unchanged, sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`; 16 original component rows; no FX_VarTestEdit.
- **Placement (one).** Toolbox Edit armed; one canvas click at (600, 330), empty grid cell beside FX_Refresh → `edit1_USER`, Type Edit, Pane 1, Tab 0.
- **Name (one edit).** Double-click Name cell → inline editor; typed `FX_VarTestEdit`; Enter → Name `FX_VarTestEdit` in the Components grid and Name cell.
- **Binding (native selector).** Binding Type dropdown → **Variable** (one selection). Binding ellipsis → "Edit Variable Binding" dialog. Variable dropdown (read-only Open) listed existing variables only; **FX_VarTest not listed**. Escape collapsed the list with no selection. Per the operator's conditional authorisation, `FX_VarTest` was typed **once** into the Variable combobox; retained value confirmed (accessibility and screenshot). OK once → Binding `variables.FX_VarTest`.
- **Readback.** Name `FX_VarTestEdit`; Caption blank; Type Edit; Binding Type Variable; Binding `variables.FX_VarTest`; Location `12.7222222222222; 30.25`; Size `37.05; 2`; Tab 0; Pane 1; Events blank; Drag/Drop `0 event(s)`.
- **Original-component preservation.** Grid columns (Name, Type, Data Source, Pane, Container, Tab, Event to generate) match T1 for all 16. FX_RefreshButton full readback matches T1 (Caption FX_Refresh, PushButton, Binding None, Primary StdFormRefresh, Size 14.25; 1.89, Location 12.1666666666667; 5.25). Other 15 originals' Location/Size/Events not re-read (limit).
- **Handler recheck.** Two ordered actions unchanged; Save enabled.
- **Form variable (observation only).** Variables: Form category `InitialCommand` only; FX_VarTest absent. Not recreated.
- **Observations.** Properties header label stayed `edit1_USER (Edit)` after rename, until FX_RefreshButton was selected. Components grid Data Source for FX_VarTestEdit is blank, while Binding shows `variables.FX_VarTest`. Not established why.
- **Counts (T6).** Tab lists 1; tab selects 1; fresh snapshots 21 (one ref-not-found recovery, from a stale ref I used from memory); screenshots 7; successful clicks 15; typing 2; Enter 1; Escape 1; components placed 1; renames 1; binding type 1; binding 1; Set Values changes 0; variables created 0; Save 0; close/reopen 0; runtime 0; diagnostics and preferences 0.
- **Acceptance.** AC-5 **partly supported** (new component and binding readback; 16 originals matched on grid columns, full readback only for FX_RefreshButton). AC-3 and AC-4 still supported. AC-6 to AC-12 not tested.
- **Knowledge state.** Edit placement via Toolbox then one canvas click: observed (single session). Binding Type Variable via dropdown: observed. Typed binding to an unlisted variable name: observed (retained); stored form unresolved. Stored Name = FX_VarTestEdit: observed in Name cell and grid; header label stale (observed).
- **Next (not started).** Pre-Save gate, then one ordinary Designer Save.

## T7 — read-only pre-Save verification; AC-5 supported; no Save (cycle 9)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `f9e0e694-4e93-4db9-965f-b867fe935985`. Detail and per-component matrix: `evidence/EXP-056/T7-report.md`.

- **Gate (passed).** Tab list; select tab 0; fresh snapshot. FX_Items, User footer, Save enabled, no dialog. Components grid: 17 entries, exactly one FX_VarTestEdit.
- **Per-component comparison (native row selection, view only).** 16 row clicks (all except FX_RefreshButton). 15 of 15 originals match T1 on Name, Type, Caption, Binding Type, Binding, Size, Location, Tab, the four Events read, Data Source, Pane, Container and Event to generate. Drag From / Drop On re-read for 13 rows; for FormCollectionGrid and FX_ItemGridCol carried from T1 (0 / 0). FX_RefreshButton: T6 readback reused; grid row identical. Pane (00) and Pane (01): no Component property rows (unavailable, as in T1).
- **FX_VarTestEdit readback.** Name `FX_VarTestEdit`; Type Edit; Binding Type Variable; Binding `variables.FX_VarTest`; Size `37.05; 2`; Location `12.7222222222222; 30.25`; Tab 0; Events blank; Drag/Drop 0.
- **Header discrepancy.** Properties header read `edit1_USER (Edit)` after the T6 rename, and `FX_VarTestEdit (Edit)` after a real selection change in T7. Resolved as a stale label that refreshes on a genuine selection change. (In T6 the reselect was of the already-active row, so no change occurred.)
- **Data Source discrepancy.** Components grid Data Source cell for FX_VarTestEdit is blank, while Properties Binding reads `variables.FX_VarTest`. Originals show `object.FX_*` / `objects` in that column. Unresolved; not repaired. The Save readback is the next place it can be checked.
- **Handler.** One `StdFormRefreshCompleted` group. Sequence 0 Prompt: Message Text `Hello World`; OK the only checked response (view-only Parameters, cancelled). Sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`. Save enabled.
- **Form-variable definition (observation).** Variables: Form category `InitialCommand` only; FX_VarTest absent. Not created.
- **Counts (T7).** Tab lists 1; tab selects 1; fresh snapshots 4; screenshots 2; successful clicks 23 (Components tab 1; row clicks 16; Component tab 1; Event Handlers tab 1; row 0 select 1; Parameters open 1 and Cancel 1; Variables tab 1); typing 0; key presses 0; components created/moved/resized/renamed/deleted 0; variables created 0; handler actions changed 0; Save 0; close/reopen 0; runtime 0; diagnostics and preferences 0; ref-not-found 0.
- **Acceptance.** AC-5 **supported** (all essential properties match or are documented unavailable; the Data Source cell is an unresolved display observation). AC-3 and AC-4 supported pre-Save. AC-6 to AC-12 not tested.
- **Knowledge state.** Per-component T1 match: observed (single session). Header refresh on selection change: observed. Blank grid Data Source for a variable binding: observed; cause unresolved. Stored binding form: unresolved. Expression evaluation: unresolved.
- **Next (separate task, not started).** One ordinary Designer Save, then saved-state readback (AC-6), with the blank Data Source cell checked there.

## T8 — pre-Save gate, one ordinary Designer Save, immediate saved-state inspection (cycle 10)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `72cd7294-6919-4329-a3d8-d669a76b223f`. Detail: `evidence/EXP-056/T8-report.md`.

- **Pre-Save gate (passed).** Tab list; select tab 0; fresh snapshot. FX_Items, User footer, Save enabled, no dialog. Drag From / Drop On read for FormCollectionGrid and FX_ItemGridCol: both `0 event(s)` (matches T1). 17 Components entries; one FX_VarTestEdit. Handler: sequence 0 Prompt; sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))`. Edit Binding Type Variable, Binding `variables.FX_VarTest`.
- **Save (one).** Designer toolbar Save clicked once. Native message (accessibility text): `Form [FX_Items] and global object(s) were saved.` Save, Regenerate Form, Undo, Redo disabled. The toast text is not visible in the screenshot (`t8-02`); the message is from the accessibility snapshot (`t8-snapshot-05`).
- **Saved handler.** One group; sequence 0 Prompt summary unchanged; sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` retained. Full sequence-0 Parameters not re-opened post-Save (limit).
- **Edit binding (post-Save).** FX_VarTestEdit: Name, Type Edit, Binding Type Variable, Binding `variables.FX_VarTest`, Size `37.05; 2`, Location `12.7222222222222; 30.25`, Tab 0, Events blank. Components grid Data Source still blank (unresolved, unchanged). Header `FX_VarTestEdit (Edit)`.
- **Originals (post-Save).** 16 grid rows present with grid-column values matching T1/T7. Full per-property re-read post-Save not done (limit).
- **Variable definition immediately after Save (AC-7, observation).** Variables: Form category `InitialCommand` only; filter `VarTest` no rows across the virtualised Global groups. **FX_VarTest absent.** Not recreated.
- **Counts (T8).** Save 1; tab lists 1; tab selects 1; fresh snapshots 9; screenshots 4; successful clicks 8; typing 2; Enter 2; components/variables/handler changes 0; close/reopen 0; runtime 0; Regenerate 0; diagnostics and preferences 0; ref-not-found 0.
- **Acceptance.** AC-6 **supported** (native success; Save disabled; sequence 0 and 1 retained; binding retained). AC-7 **observation documented** (definition absent). AC-1 to AC-5 supported as before. AC-8 to AC-12 not tested.
- **Knowledge state.** Native save success message in one session: **observed**. Definition absence immediately after Save in this session: **observed**. Persistence across close/reopen: **unresolved** (next task). Data Source blank: **unresolved**. Runtime value: **unresolved**.
- **Next (not started).** One clean Designer close and one recent-forms reopen (AC-8, AC-9). Save must not be retried.

## T10 — final documentation-only finalization: BLOCKED at AC-8 (cycle 12)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `9e214855-67ad-40dd-936b-a1e93462ec4f`. Browser calls 0; Mongoose operations 0. Detail: `evidence/EXP-056/T10-final-blocked-report.md`.

- **Outcome.** BLOCKED, not accepted. AC-8 FAILED (mandatory recovery not established: the single permitted reopen did not open the Form, and the brief forbids a retry). The failed click is distinguished from a dispatched reopen: the tool never executed the click (element not visible through retries), and no Form-open state followed in two snapshots. Root cause of the visibility failure is **not** established and is not asserted.
- **AC matrix.** AC-1 supported with limits; AC-2 supported with limits (Pane containers unavailable; Global variables virtualised); AC-3 supported with the operator-authorised `P(FX_Description)` adaptation (pre-Save and immediate post-Save); AC-4 supported pre-Save (definition absent; assignment captured separately); AC-5 supported (T7; Components-grid Data Source blank, unresolved); AC-6 supported (Designer-session native success; Save disabled; binding and rows retained; toast not visible in screenshot; no durability claim); AC-7 observation documented (definition absent immediately after Save); **AC-8 FAILED**; AC-9 pending / not evaluable (not a failure, not a retention gate); AC-10, AC-11, AC-12 pending / not established (no runtime opening, no value test; the T1 runtime shows `45 pound iron` for dumbbell but FX_VarTestEdit did not exist then).
- **Variable-definition checkpoints.** Pre-Save: absent. Post-Save: absent. After reopen: not observed (reopen not completed). Runtime: not observed (not reached). The assignment row was present at every checkpoint and is a different object.
- **Budget reconciliation.** Designer Save 1 of 1 (T8). Clean Form close 1 of 1 (T9). Recent-forms reopen 1 attempted of 1; 0 completed. Runtime closure 0 of 1. Select Form opening 0 of 1. Prompt dismissal 0. FX_RefreshButton activations 0. Regenerate 0. Business-data modifications 0. Diagnostics, preferences, FormSync, cache, SQL, scripts 0. Reauthentication 0.
- **Preserved unresolved items.** Target and Binding reference semantics (typed name retained; stored form unknown). Blank Components-grid Data Source for FX_VarTestEdit. Pane (00)/(01) unavailable properties. Designer console `adorner` errors not investigated.
- **Documentation changed in T10.** `evidence/EXP-056/T10-final-blocked-report.md` (created); this record (final status line and this section). No other record, recipe, `AGENTS.md`, `docs/`, or `tools/` file was touched.
- **Final browser state.** Designer on an empty canvas, no Form open, Save disabled, no dialog. Web Client on the inherited T1 runtime, not interacted with since T1.

## T9 — one clean Designer close; recent-forms reopen failed; AC-8 not established; AC-9 not evaluable (cycle 11)

Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `07bf3c9f-d66b-425b-9096-4847e4d9aec3`. Detail: `evidence/EXP-056/T9-report.md`.

- **Pre-close gate (passed).** Tab list; select tab 0; fresh snapshot. FX_Items, User footer, Save/Regenerate/Undo disabled, no dialog. Screenshot `t9-01`.
- **Close (one).** Clicked the FX_Items Form tab's closable control once. Form tablist empty; no dialog; no prompt; Save disabled.
- **Reopen (one, FAILED).** Form menu opened; the single `FX_Items` recent-forms entry clicked once. Tool result: timeout, "element is not visible". Menu closed; no FX_Items heading or Form tab. Re-checked immediately and after a 3-second read-only wait: still no Form. Not retried (brief: do not retry a failed reopen; do not use another path).
- **AC-8.** Not established (no reopened Form; identity, Prompt, Set Values, binding, components not re-read).
- **AC-9.** Not evaluable (Variables not readable without an open Form). Not treated as a failure.
- **Counts (T9).** Closes 1; reopens completed 0; reopen attempts 1 (failed); Save 0; Regenerate 0; runtime 0; FX_RefreshButton 0; tab lists 1; tab selects 1; fresh snapshots 5; screenshots 2; successful clicks 2; errored clicks 1; wait 1; typing 0; key presses 0; component, variable, handler changes 0; diagnostics and preferences 0.
- **Blocker.** The Designer has no Form open. A coordinator decision is needed: retry the single reopen in a new bounded task (after a fresh visibility check), or stop the lifecycle here. The saved state is documented in T8.
- **Knowledge state.** Clean close without prompt: **observed** (single session). Recent-forms click not registering (visibility timeout): **observed**; cause **unresolved**. Post-reopen state: **unresolved**.

## Evidence (under `evidence/EXP-056/`)

- Screenshots: `t1-02-designer-event-handlers-baseline-one-handler.png`; `t1-03-designer-components-inventory-16-rows-fx-refreshbutton-selected.png`; `t1-04-runtime-fx-items-inherited-preflight-records-save-disabled.png`; `t1-05-designer-variables-tab-baseline-no-FX_VarTest.png`.
- Accessibility snapshots: `t1-snapshot-00-fresh-designer-tab0.md`, `t1-snapshot-01-fresh-after-variables-click-timeout.md`, `t1-snapshot-02-fresh-after-tab0-select.md`, `t1-snapshot-03-variables-tab-baseline.md`, `t1-snapshot-04-runtime-web-client-tab1-preflight.md`, `t1-snapshot-05-designer-fresh-after-tab0-reselect.md`.
- Report: `T1-preflight-report.md` (full 16-row inventory table; per-row source snapshot names).
- Per-action accessibility snapshots (tool-generated, gitignored, cited in the T1 report): `evidence/playwright/page-2026-10-11T08-3*.yml` and `page-2026-10-11T08-35-*.yml`.

## Repository changes (T1)

- Created: this record `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md`.
- Written: `evidence/EXP-056/` (the report, four screenshots, six worker-saved snapshots).
- Not modified: AGENTS.md, `docs/`, recipes, other experiments, `tools/`, any non-FX_ artifact, any FX_ Mongoose artifact (no mutation performed).

## Knowledge state (T1)

| Finding | State |
| --- | --- |
| Designer `FX_Items` User-scoped, clean, Initial Command Refresh | observed (single session) |
| One `StdFormRefreshCompleted` handler; sequence-0 Prompt `PROMPT(Hello World) …` | observed (single session) |
| FX_VarTest absent from rendered Variables; `Form - Persistent` holds only `InitialCommand` | observed (single session; Global rows virtualized) |
| 16-row component baseline with Location, Size, Binding, Events | observed (single session); Pane (00)/(01) properties unavailable |
| Runtime records dumbbell / eggs / guitar; FX_Refresh; Save disabled; indicator `(Object 1 of 3)` | observed (single session; inherited, not refreshed) |
| Set Values assignment, `P(Description)` syntax, Edit binding, variable-definition retention, runtime value | **not tested** |
| Replay-verified findings | none |

## Open questions and blockers

1. **Pane container baseline.** Binding, Location, Size, and Events are unavailable for Pane (00) and Pane (01) (their Component property tree rendered no rows). The brief's AC-5 preservation check covers "the 16 original component records and properties". Coordinator decision: accept the Pane rows as "unavailable baseline, compared by Components-grid row values (name, type, Pane, Tab)" or require another read path before mutation.
2. **Operator approval for T2 onward.** The T1 instruction stops here. The mutation sequence (Set Values action, FX_VarTest definition, FX_VarTestEdit placement, one Save, close/reopen, runtime opening) needs operator approval before it begins.
3. **Variable-definition retention.** EXP-004 and EXP-014 recorded definition loss across ordinary Save/close/reopen. EXP-056 will record it as an observation only, per the brief. Nothing in T1 changes that.
4. **Designer console errors.** The `adorner` TypeError appeared on Pane row selection. Whether it affects the Set Values or Edit workflow is unknown.
5. **Expression syntax.** `P(Description)` is unverified. The native Set Values Parameters > Variables workflow must show the expression and property selection before Save (T2). If the UI shows a different syntax, stop for operator review.

## Outcome (operator, 2026-10-11)

**Blocked at AC-8 (Designer reopen, UI timing). Not a feature failure** (run R-20261011-163026-Hdng; one operator pause resolved under the standing authorization of 2026-10-11). AC-1 to AC-7 are supported. AC-8 to AC-12 are not established. The runtime check is carried forward to a continuation experiment.

Operator calls during the run (standing authorization, 2026-10-11):
- **Target:** type FX_VarTest into the Set Values pair Target combobox; if it rejected free text, fall back to Details > Variables > New. Route A worked.
- **Expression:** adapt the tutorial's `P(Description)` to **`P(FX_Description)`**. FX_DescriptionEdit is bound to `object.FX_Description`.

Saved, for later cleanup (one Designer Save, native success; Designer session observation):
- **User-scope Form `FX_Items`, `StdFormRefreshCompleted` handler:** a second action, sequence 1, **Set Values**. Parameters summary `SETVARVALUES(FX_VarTest=P(FX_Description))`. Sequence 0, the Prompt "Hello World", is unchanged.
- **One Edit `FX_VarTestEdit`:** Data Source Binding Type = Variable, Binding = `FX_VarTest`. It is placed to the right of FX_Refresh.
- **No Form-variable definition** for FX_VarTest exists on the Variables tab, either before or after Save. The Form - Persistent category holds only `InitialCommand`, which was never touched.

Operator screenshot review:
- `t5-02`: the Edit Set Variable Value Pair dialog shows Target `FX_VarTest` (typed into the combobox and kept after Tab) and Value `P(FX_Description)`.
- `t8-02`: right after the single Save, the Event Handlers grid shows the StdFormRefreshCompleted group with row 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESP…` and row 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`. The canvas shows the new Edit, and the scope is User.
- `t9-02`: after the clean close and the failed recent-forms click, the Designer has no Form open. The scope is still User, and there is no dialog.

Learned (observed):
1. **Set Values target:** the pair Target is an editable combobox. Its list holds only existing variables (InitialCommand and others), but a new name typed into it and committed with Tab is kept, and the pair is saved as `SETVARVALUES(<target>=<value>)`. The "temporary variable" of the tutorial therefore needs **no** Variables-tab definition. This sidesteps the EXP-004/EXP-014 definition-retention problem (runtime effect still unproven).
2. **Variable binding:** an Edit's Binding Type = Variable takes a typed variable name as its Binding (`t6-05`).
3. **Recent-forms reopen is not always reliable:** the Designer Form-menu recent-forms item can time out with "element is not visible" even though the menu listed it (it worked in EXP-054-R2 and EXP-055). Continuation briefs must allow one retry, or the Designer Open (Select Form) route as a fallback.

Status of the saved definition: written, but its recovery after reopen and its runtime value are unproven.

Next: **EXP-057, a continuation (not a replay).** Reopen FX_Items in the Designer, with a fallback route allowed. Verify the two actions and the FX_VarTestEdit binding. Then open the runtime once, dismiss Hello World, and read FX_VarTestEdit (expected "45 pound iron"). Optionally click FX_Refresh once.
