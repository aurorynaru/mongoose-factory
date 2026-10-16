# EXP-104: Isolation probe: throwaway Flex Form FX_FlexProbe01 (Flex > Basic, no collections) - does selecting its FlexLayout raise the server-event error seen on FX_CustomerPortal?

Status: **T1 blocked (observed); recovery gate passed (observed); T2 done (observed): FX_FlexProbe01 created and probed once.** The T1 close of FX_CustomerPortal raised the server-event error and the Form stayed open. The operator then reloaded the tabs and closed FX_CustomerPortal manually. The T2 probe on FX_FlexProbe01 (Flex > Basic, no collections, no Regenerate): **no server-event error** after one FlexLayout selection or after one Edit FlexLayout Attributes click; the dialog loaded attributes and three region rows. Single-action, same-session observation only; see "T2" below. Acceptance of the experiment is not declared here.

Brief sources: `experiments/EXP-104-flex-layout-selection-isolation-probe.md` (this record, created by this task); brief approved in commits `5bc59da` (draft) and `67ad819` (approved).
Predecessors: EXP-102 (FX_CustomerPortal created, Outcome 2026-10-15); EXP-103 (blocked on the FlexLayout server-event error, Outcome 2026-10-16).

## Sources reviewed (AC-1)

- `AGENTS.md`: read in full.
- `recipes/session/session-expiry-and-stale-designer.md`: read in full.
- EXP-102: only the `## Outcome (operator, 2026-10-15)` section (from its heading to the end of the file). EXP-103: only the `## Outcome (operator, 2026-10-16)` section. The rest of both records was not read.
- Note: the brief's path for this record did not exist before this task; it was created here.

## T1 gate (read-only except one close)

Tabs: listed once before any selection. Tab 0 = Designer (`MGForm=FX_CustomerPortal`), tab 1 = Mongoose Web Client portal tab. Tab 0 selected; the Designer was the only tab acted on.

| Check | Observed |
|---|---|
| Editing scope | ScopeType: User (status bar and snapshot). ScopeName shown as the operator's account; not transcribed here. |
| Starting Form | FX_CustomerPortal (tab label and page title). |
| Dirty state at start | Clean: Save disabled, Undo disabled, Regenerate Form disabled. |
| Error dialog at start | None. |
| Session expiry / sign-in at start | None seen in the Designer. The Web Client tab was not inspected. |
| Designer selection at start (carried over, not made by this task) | Properties dropdown names `flexlayoutPane_FX_CustomerPortal (FlexLayout)`; the FlexLayout row is highlighted in Details > Components; the Properties grid is empty. No FlexLayout selection was made by this task. |
| Components at start | Pane (00) > `flexlayoutPane_FX_CustomerPortal` (FlexLayout) > Region00: FLEX_PANE_REGION0, Region01: FLEX_PANE_REGION1, Region02: FLEX_PANE_REGION2. |

Close of FX_CustomerPortal (one allowed):

- One click on the Form-tab close control (`closable FX_CustomerPortal`, the × on the Form tab).
- **Result: the Form did not close.** An Error dialog appeared with the verbatim text: "The server event processing returned an error. If this persists, contact your system administrator." (OK only).
- No save prompt appeared. Save remained disabled.
- Answered **OK once**. After OK: no dialog; FX_CustomerPortal still open and clean (Save disabled, Undo disabled); User scope.
- Not retried. The brief allows one close. The stale-Designer recipe also says to stop for the coordinator rather than retry an Edit-menu server-event error.
- The Web Client page counter (tool-reported, not inspected) went from "4 errors" to "5 errors" after the close attempt.

Form menu (read only):

- Opened once from the Form menu title. Recent-forms / Form-menu entries: `FX_CustomerPortal`, `FX_OrdersChart`, `FX_Orders`, `FX_HelloWorld01`, `FX_Items`. Designer entries: `Definition` (submenu), `Sign Out`, `IDO Properties`, `IDOs`, `Sql Tables`, `IDO Projects`, `Property Classes`.
- **FX_FlexProbe01 is not in the Form-menu list.** This is expected because the Form has not been created yet; it only confirms that the list is clean before creation.
- Escape did not close the menu (the screenshot still showed it open). The menu was closed with a second click on the Form menu title. `Sign Out` and all entries were **not** clicked.

Gate outcome: **blocked.** Final gate state: FX_CustomerPortal open, clean, User scope, no dialog, no menu. FX_FlexProbe01 not created.

## Blocker and open questions

1. The single close of FX_CustomerPortal raised the server-event error and did not close the Form. The gate condition "no Form open before creation" is not met. Per the brief, the close is not to be repeated in this task, so T2 was not started.
2. Unresolved cause. The error appeared on a Form-close action, not on a FlexLayout selection as in EXP-103. No session-expiry modal or sign-in was seen, so the session-expiry procedure was **not** triggered and the re-login count is 0. Whether this is the stale-Designer symptom from the recipe (the Designer tab was loaded before this task), a session problem, or the same server-event fault seen in EXP-103 is **not established**. The Web Client tab was not inspected to test session expiry.
3. Next permitted action (for the coordinator / operator to decide): the operator either closes FX_CustomerPortal or reloads the Designer tab, as the stale-Designer recipe describes; then a fresh read-only gate is run and nothing is repeated. Creation (T2) is a later task.

## Isolation result (AC-5)

Error reproduced on a Flex Form without collections: **no** (observed, one run). On FX_FlexProbe01 (Flex > Basic, Unit Char, no collections, no Regenerate), one FlexLayout selection and one Edit FlexLayout Attributes click raised no server-event error; the Properties grid and the dialog were populated (see "T2"). The only server-event error observed in this experiment is the T1 close of FX_CustomerPortal (observed once; cause unresolved). Limits: one run, same session, Form created in this session, no reload or close/reopen of FX_FlexProbe01, no replay; this is not cross-session or database-level evidence.

## Browser action audit (cumulative, this task T1)

Browser calls total: 19 (13 read-only, 6 actions).

| Action | Count | Notes |
|---|---|---|
| Tab list | 1 | before first tab selection |
| Tab select | 1 | tab 0 (Designer); succeeded |
| Snapshot (read-only) | 5 | start, after close, after OK, after menu open, after Escape |
| Screenshot (read-only) | 6 | t1-01 to t1-06 |
| Find (read-only) | 1 | text `FX_FlexProbe01`; "No matches" (run after the menu was closed) |
| Form closes attempted | 1 | 0 successful; 1 raised the Error dialog |
| New Form Definition clicks | 0 | |
| Wizard OK / Next / Finish clicks | 0 / 0 / 0 | wizard not opened |
| Wizard entries and corrections | 0 / 0 | |
| FlexLayout selections | 0 | |
| Edit FlexLayout Attributes clicks | 0 | |
| Dialog Cancel / OK clicks | 0 / 0 | |
| Region views | 0 | |
| Error dialogs | 1 | text verbatim as above |
| Error dialog OK answers | 1 | |
| Save prompts | 0 | none appeared |
| Other prompts | 0 | |
| Form menu opens | 1 | |
| Form menu closes by click | 1 | after Escape had no effect |
| Escape key presses | 1 | did not close the menu |
| Save clicks | 0 | |
| Regenerate clicks | 0 | |
| Collection, component or attribute changes | 0 | |
| Re-logins | 0 | |
| Portal banner dismissals | 0 | none seen |
| Errors (server event) | 1 | |
| Browser evaluate / run-code / console / network | 0 | none used (tools are denied) |

## Evidence (screenshots under `evidence/EXP-104/`)

Each capture was viewed after saving.

- `t1-01-gate-start-fx-customerportal-clean.png`: Designer, FX_CustomerPortal open, Save greyed, no dialog, Components tree with the FlexLayout and three regions, status bar User scope. Proves the starting state and clean dirty state. Does not prove the session is healthy beyond the Designer view. (The status bar shows the operator's account name; not transcribed.)
- `t1-02-after-close-fx-customerportal.png`: same Designer with the Error dialog (verbatim text, OK button) over FX_CustomerPortal; Save greyed. Proves that the close click produced the error and the Form stayed open. Does not prove why.
- `t1-03-after-error-ok-fx-customerportal-still-open.png`: after OK; no dialog; FX_CustomerPortal still open and clean. Proves the post-dismissal state; does not prove the Form is saved server-side (none was saved).
- `t1-04-form-menu-recent-forms-readonly.png`: Form menu open, listing FX_CustomerPortal, FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items plus Designer entries. Proves the list at that moment; no FX_FlexProbe01 in it.
- `t1-05-after-form-menu-escape.png`: menu still open after Escape. Proves Escape did not close the menu.
- `t1-06-after-form-menu-toggle-closed.png`: menu closed after the second click on the Form menu title; FX_CustomerPortal open, clean, no dialog. Proves the closed final state.

## Worker-written file inventory

Files written by this worker task:

- `experiments/EXP-104-flex-layout-selection-isolation-probe.md` (this record; created)
- `evidence/EXP-104/t1-01-gate-start-fx-customerportal-clean.png`
- `evidence/EXP-104/t1-02-after-close-fx-customerportal.png`
- `evidence/EXP-104/t1-03-after-error-ok-fx-customerportal-still-open.png`
- `evidence/EXP-104/t1-04-form-menu-recent-forms-readonly.png`
- `evidence/EXP-104/t1-05-after-form-menu-escape.png`
- `evidence/EXP-104/t1-06-after-form-menu-toggle-closed.png`

Tool-generated outputs outside the EXP-104 paths (written by the browser tool, not authored by this worker): snapshot and console log files under `evidence/playwright/`. Operator git review is authoritative.

## Final state (T1 end)

- Designer open: FX_CustomerPortal, User scope, clean (Save and Undo disabled, Regenerate Form disabled).
- No Error dialog open. No Form menu open. No browser-native dialog. No unsaved change.
- FX_FlexProbe01: not created; not in the Form menu.
- No Form other than FX_CustomerPortal open.
- Not done (later steps, not performed in T1): wizard, FX_FlexProbe01 creation, FlexLayout selection, Edit FlexLayout Attributes click, dialog review.

## Acceptance checks (T1)

- AC-1: partially met. Sources reviewed, session usable (Designer responsive), User scope, starting Form and dirty state recorded, gate and close screenshots taken. **Not met:** FX_CustomerPortal not closed (close raised the error; not repeated), so no Form open before creation is not established.
- AC-2: not started (no FX_FlexProbe01 created).
- AC-3: not started.
- AC-4: met for this task. No change to FX_CustomerPortal beyond the failed close attempt (no edit, no Save); no other Form changed; no collection, Save, Regenerate, unload, checkout, runtime or SQL action; no task-boundary overrun.
- AC-5: partial (this record). Isolation result: untested.

## T2: creation and read-only FlexLayout probe (worker task, 2026-10-16)

Start gate (task-local snapshot after tab list and tab select): Designer tab, no Form tab open, Save, Undo and Regenerate Form disabled, no dialog, ScopeType User. No new gate screenshot was taken in this task; the gate state is the one captured in `evidence/EXP-104/t2r-01-recovery-gate-no-form-open-user-scope.png` (previous task).

### Creation (one Finish)

1. Form menu opened, then **Definition** submenu, then **New** (New Form Definition). Definition submenu entries seen: Design, Revert Form Definition, Regenerate Form (disabled), Regenerate Form from Cache (disabled), Site Developer Impersonation, Unload All Global Form Objects, New, Copy, Delete. Only "New" was clicked. Dialog opened: "Form Wizard Selection" (`t2-01`).
2. Form Wizard Selection: New Form radio selected (default). Category combobox opened and **Flex** chosen. The first click on the Flex option timed out: an SVG tile overlay intercepted pointer events (`cid-1249`, `tileEvent('', '2','icb','4')`). After one fresh snapshot and one visible inspection (`t2-02`), one coordinate click on the visible Flex label (911, 596) selected it. Wizard combobox opened: only option **Basic** ("Creates a Flex form with three FlexLayout components, arranged horizontally"); clicked. State before OK: Category Flex, Wizard Basic (`t2-03`). OK clicked once.
3. Page 1 "Form Wizard - Flex Basic": `t2-04` shows the page still blank before entry (the file name is misleading). Name: one plain fill `FX_FlexProbe01` (no correction). Unit: list opened (Pixel, Char), **Char** clicked. Comments left blank. `t2-05` shows Name FX_FlexProbe01, Unit Char, Comments blank. Next clicked once.
4. Page 2: Save Template checkbox **unchecked** (not changed; `t2-06`). Finish clicked once.
5. Completion message: "Process Completed Successfully" (title "Infor Mongoose Application Development Framework - Form Wizard - Flex Basic"; `t2-07`). OK clicked once.

Verified after Finish (`t2-08`): FX_FlexProbe01 open as tab "FX_FlexProbe01"; URL carries MGForm=FX_FlexProbe01; ScopeType User; Save, Undo and Regenerate Form disabled. Form Properties: Name FX_FlexProbe01; Description and Caption blank; Version "User version for user ..."; Device Type Default; Form Type Flex. Components tree (after Details > Components and Expand; `t2-09`, `t2-10`): Pane (00) > **flexlayoutPane_FX_FlexProbe01** (FlexLayout; Pane 0, Container 0) > Region00 FLEX_PANE_REGION0, Region01 FLEX_PANE_REGION1, Region02 FLEX_PANE_REGION2. Details opened on the Collections tab by default, showing one node "Primary Collection:" with no visible value; not clicked, not changed.

### Probe (read-only; one selection, one edit click)

- **FlexLayout selection (one click on its row, Components tree):** no Error dialog (snapshot and `t2-11`). Properties dropdown names **"flexlayoutPane_FX_FlexProbe01 (FlexLayout)"**. Properties grid is populated in the Design group: Name flexlayoutPane_FX_FlexProbe01, Description blank, Type FlexLayout, From Device Master True. Other groups (Appearance, Behavior, Events, Help, Inheritance, Layout) were collapsed and not expanded.
- **Tooltip:** four small icons at the top left of the canvas. The first shows the tooltip **"Edit FlexLayout Attributes"** on hover (`t2-12`; the text was also confirmed in the page with find, which is verification only).
- **Edit FlexLayout Attributes (one click):** no Error dialog (snapshot and `t2-13`). Dialog title **"FlexLayout"** is populated:
  - Attributes: group Design, row **Type = HorizontalBox** (dropdown; not opened).
  - Regions grid (Index, ID, Length): row 0 FLEX_PANE_REGION0 "1 Flex"; row 1 FLEX_PANE_REGION1 "1 Flex"; row 2 FLEX_PANE_REGION2 "1 Flex".
  - Properties pane empty until a row is selected.
  - Other controls: Preview checkbox, Undo and Redo (disabled), Contained Components, OK (not clicked), Cancel, Help.
- **Region rows (each selected once by its Index cell; nothing edited, no option list opened):**
  - Row 0 (`t2-14`): ID FLEX_PANE_REGION0; Length 1; Unit Flex; Orientation Vertical; Alignment Left; Pack Start; Minimum Length, Maximum Length and Default Margin blank.
  - Row 1 (`t2-15`): ID FLEX_PANE_REGION1; Length 1; Unit Flex; Orientation Vertical; Alignment Left; Pack Start; the three blank rows blank.
  - Row 2 (`t2-16`): ID FLEX_PANE_REGION2; Length 1; Unit Flex; Orientation Vertical; Alignment Left; Pack Start; the three blank rows blank.
- **Dialog left with Cancel (once; never OK).** After Cancel (`t2-17`): dialog gone; Form FX_FlexProbe01 open; Save, Undo and Regenerate Form disabled; no dialog. The Components tree shows only Pane (00) collapsed (a view state; the FlexLayout row is still in the Form, as seen before the dialog).

### Comparison with EXP-103 (observed, not causal)

EXP-103 on FX_CustomerPortal: the FlexLayout selection raised the server-event error (3 of 3) and the dialog loaded no data. On FX_FlexProbe01 in this run: no error on the FlexLayout selection or on the Edit click, and the dialog loaded attributes and three region rows. The probe therefore does not reproduce the EXP-103 symptom on a Flex Form without collections. Whether the difference comes from FX_CustomerPortal's collections, its Regenerate history, or its server-side state is **unresolved**.

### T2 browser action audit (exact)

Calls in this task: 70 (read-only 44; actions 26).

| Item | Count |
|---|---|
| Tab list / tab select | 1 / 1 |
| Snapshots (task-local) | 25 |
| Screenshots | 17 (`t2-01` to `t2-17`) |
| Find | 1 (tooltip text check, not used for refs) |
| Ref-based clicks | 22 (one timed out: Flex option, see above) |
| Coordinate click | 1 (Flex label after the timeout) |
| Hover | 1 (tooltip) |
| Text entry (plain fill) | 1 (Name; corrections 0) |
| Form closes | 0 |
| New Form Definition clicks | 1 (Definition submenu > New) |
| Wizard OK / Next / Finish clicks | 1 / 1 / 1 (OK on Form Wizard Selection; Next on page 1; Finish on page 2) |
| Completion message OK | 1 |
| Wizard entries | Category Flex 1, Wizard Basic 1, Name 1, Unit Char 1; corrections 0 |
| Save Template | unchecked, unchanged |
| Create runs (Finish) | 1 |
| FlexLayout selections | 1 |
| Edit FlexLayout Attributes clicks | 1 |
| Dialog Cancel / OK clicks | 1 / 0 |
| Region views | 3 |
| Error dialogs | 0 |
| Save prompts / other prompts | 0 / 0 (the "Process Completed Successfully" message was answered OK) |
| Save / Regenerate / collection / component / attribute changes | 0 / 0 / 0 / 0 / 0 |
| Details view toggles (Expand Panel, Components tab, Expand grid) | 3 (view state only) |
| Form menu opens | 1 (closed by the next click on New) |
| Re-logins / portal banners dismissed | 0 / 0 |
| Browser evaluate, run-code, console, network | 0 (none used) |

### Cumulative EXP-104 browser audit (T1 + recovery gate + T2)

Calls: 93 (read-only 60; actions 33).

| Item | T1 | Recovery | T2 | Total |
|---|---|---|---|---|
| Tab lists | 1 | 1 | 1 | 3 |
| Tab selects | 1 | 1 | 1 | 3 |
| Snapshots | 5 | 1 | 25 | 31 |
| Screenshots | 6 | 1 | 17 | 24 |
| Finds | 1 | 0 | 1 | 2 |
| Form closes (successful / attempted) | 0 / 1 | 0 / 0 | 0 / 0 | 0 / 1 |
| Error dialogs (text: "The server event processing returned an error. If this persists, contact your system administrator.") | 1 | 0 | 0 | 1 |
| Error dialog OK answers | 1 | 0 | 0 | 1 |
| Form menu clicks / Escape presses | 2 / 1 | 0 | 1 | 3 / 1 |
| New Form Definition clicks | 0 | 0 | 1 | 1 |
| Wizard OK (selection) / Next / Finish | 0 / 0 / 0 | 0 | 1 / 1 / 1 | 1 / 1 / 1 |
| Completion OK | 0 | 0 | 1 | 1 |
| FlexLayout selections | 0 | 0 | 1 | 1 |
| Edit FlexLayout Attributes clicks | 0 | 0 | 1 | 1 |
| Dialog Cancel / OK | 0 / 0 | 0 | 1 / 0 | 1 / 0 |
| Region views | 0 | 0 | 3 | 3 |
| Save / Regenerate clicks | 0 / 0 | 0 | 0 / 0 | 0 / 0 |
| Prompts (save prompts) | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |

Operator recovery (not worker actions): both tabs reloaded and FX_CustomerPortal closed manually (no error, no prompt, per the operator).

### Worker-written file inventory (T2)

- `experiments/EXP-104-flex-layout-selection-isolation-probe.md` (edited: status, isolation result, this section, recovery gate, knowledge state)
- `evidence/EXP-104/t2-01-form-wizard-selection-dialog-initial.png` (new): Form Wizard Selection, New Form selected, Category and Wizard blank. Proves the wizard entry point, not the selections.
- `evidence/EXP-104/t2-02-category-list-open-flex-click-timeout.png` (new): Category list open (Classic, ExtDataSource, Flex, Form Builder, IDS); the Flex click had timed out. Proves the list state, not the selection.
- `evidence/EXP-104/t2-03-wizard-selection-flex-basic-before-ok.png` (new): Category Flex and Wizard Basic before OK.
- `evidence/EXP-104/t2-04-after-wizard-ok-page-2-name-unit.png` (new; name is misleading): wizard page 1 "Form Wizard - Flex Basic", Name, Unit and Comments blank before entry.
- `evidence/EXP-104/t2-05-wizard-page1-name-unit-char-filled.png` (new): page 1 with Name FX_FlexProbe01, Unit Char, Comments blank.
- `evidence/EXP-104/t2-06-wizard-page2-save-template.png` (new): page 2, Save Template unchecked, Finish enabled, Next disabled.
- `evidence/EXP-104/t2-07-after-finish-completion-message.png` (new): "Process Completed Successfully" with OK.
- `evidence/EXP-104/t2-08-new-form-fx-flexprobe01-components-clean.png` (new): FX_FlexProbe01 open, User scope, Save disabled, Form Properties (Name, Device Type Default, Form Type Flex).
- `evidence/EXP-104/t2-09-components-tree-before-expand.png` (new): Components tree with Pane (00) collapsed.
- `evidence/EXP-104/t2-10-new-form-components-tree-flexlayout-regions-clean.png` (new): Components: Pane (00) > flexlayoutPane_FX_FlexProbe01 (FlexLayout) > Region00-02; Save disabled.
- `evidence/EXP-104/t2-11-after-flexlayout-selection-one-click.png` (new): after the single FlexLayout selection: no Error dialog; Properties dropdown "flexlayoutPane_FX_FlexProbe01 (FlexLayout)"; Design rows populated.
- `evidence/EXP-104/t2-12-tooltip-edit-flexlayout-attributes-hover.png` (new): tooltip "Edit FlexLayout Attributes" over the first canvas icon.
- `evidence/EXP-104/t2-13-flexlayout-attributes-dialog-after-one-edit-click.png` (new): FlexLayout dialog populated (Type HorizontalBox; regions 0-2 with IDs and "1 Flex"); no Error dialog.
- `evidence/EXP-104/t2-14-region-row-0-selected.png` (new): row 0 selected; Properties ID FLEX_PANE_REGION0, Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start.
- `evidence/EXP-104/t2-15-region-row-1-selected.png` (new): row 1 selected; ID FLEX_PANE_REGION1, same other values.
- `evidence/EXP-104/t2-16-region-row-2-selected.png` (new): row 2 selected; ID FLEX_PANE_REGION2, same other values.
- `evidence/EXP-104/t2-17-after-cancel-final-state-fx-flexprobe01-clean.png` (new): after Cancel; FX_FlexProbe01 open, clean, Components collapsed to Pane (00).

Tool-generated logs (snapshots and console files) were written by the browser tool under `evidence/playwright/`; they were not authored by the worker.

### Decisive evidence (T2)

- AC-2: Creation through Flex > Basic, Unit Char, Save Template unchecked, one Finish, "Process Completed Successfully" (`t2-05`, `t2-06`, `t2-07`); FX_FlexProbe01 open in User scope and clean with FlexLayout and three regions listed (`t2-08`, `t2-10`). No collection, Save or Regenerate (audit above). Limitation: the Collections tab showed a default "Primary Collection:" node; not inspected further.
- AC-3: After one FlexLayout selection, no server-event error and the Properties grid is populated in the Design group (`t2-11`). After one Edit click, no error; the dialog shows Type HorizontalBox and three region rows, with region values (`t2-13` to `t2-16`). Dialog left with Cancel; Save disabled; FX_FlexProbe01 open and clean (`t2-17`). Limitation: other Properties groups were not expanded.
- AC-4: No change after Finish (no value edit; only UI view toggles); no other Form touched; no global, collection, Save or Regenerate; no runtime action; no unload; no checkout action; no task-boundary overrun.

## Recovery gate (operator-directed task, 2026-10-16; no creation)

Operator recovery (performed by the operator, not by the worker; not repeated here): the operator reloaded both browser tabs and manually closed FX_CustomerPortal, reporting no error and no prompt. These are recorded as operator actions, separately from the worker audit below.

Worker actions in this task (read-only except tab selection):

1. Tab list (1), before any selection. Tab 0 = Designer, tab 1 = Mongoose Web Client. The Designer URL no longer carries `MGForm=FX_CustomerPortal`.
2. Tab 0 selected (1); succeeded.
3. Fresh untargeted snapshot (1), taken after the selection.
4. Screenshot `evidence/EXP-104/t2r-01-recovery-gate-no-form-open-user-scope.png` (1).

Verified from the snapshot and the screenshot:

- **Form open: none.** The tab list shows no Form tab (the tablist in the snapshot is empty), and the canvas is blank. The page title and URL no longer name a Form.
- **Scope: User.** Status bar and snapshot: `ScopeType: User`.
- **Save disabled; Undo disabled; Regenerate Form disabled** (snapshot and screenshot).
- **Dialogs: none.** No Error dialog, prompt, menu or other overlay in the snapshot or screenshot.
- **Properties pane:** empty with no selected component; the Form/Component tabs show Form selected.
- **FX_FlexProbe01:** not created; no Form-tab entry.

Gate outcome: **passed** (observed). The screenshot shows the condition; it does not show the Web Client tab state, which was not inspected in this task.

Recovery-task answers:
- The T1 recent-forms observation stands (FX_FlexProbe01 absent). The Form menu was not reopened.
- No Form closed by the worker, no refresh, reload, navigation, authentication, New Form Definition, or creation in this task.

Browser action audit (this recovery task): 4 calls: 1 tab list, 1 tab select, 1 snapshot, 1 screenshot. Mutations: 0. Prompts: 0. Errors: 0. Re-logins: 0.

Cumulative worker browser audit as of the recovery task (superseded by the cumulative table in the T2 section): 23 calls: 16 read-only (2 tab lists, 6 snapshots, 7 screenshots, 1 find); 7 selection or action calls (2 tab selects, 1 Form-tab close click, 1 Error OK click, 2 Form-menu clicks, 1 Escape). Form closes by the worker: 1 attempted, 0 successful (the error dialog appeared). Error dialogs: 1 (text in T1 section). New Form Definition clicks: 0. Wizard OK/Next/Finish clicks: 0. FlexLayout selections: 0. Edit FlexLayout Attributes clicks: 0. Dialog Cancel clicks: 0. Region views: 0. Save clicks: 0. Regenerate clicks: 0. Re-logins: 0. Portal banners dismissed: 0.

Worker-written files in this task: `experiments/EXP-104-flex-layout-selection-isolation-probe.md` (edited: status line, this section) and `evidence/EXP-104/t2r-01-recovery-gate-no-form-open-user-scope.png` (new). Earlier T1 files are unchanged.

Final state (end of recovery task): Designer tab selected; no Form open; User scope; Save disabled; no dialog or menu open; FX_FlexProbe01 not created.

**T2 can proceed** if the operator authorizes it: the gate conditions are met. A new task must still start with a fresh snapshot and gate check, and must follow the original brief exactly (one Flex > Basic creation, no collections, no Regenerate, one FlexLayout selection, one Edit FlexLayout Attributes click, Cancel). Any server-event error during creation is a stop condition: answer OK once, record it verbatim, and stop.

## Knowledge state

- Starting Designer state in User scope, clean, FX_CustomerPortal open: observed.
- Recovery gate state (no Form open, User scope, Save disabled, no dialog) after operator reload and manual close: observed (one snapshot and one screenshot).
- FX_CustomerPortal close attempt raised the server-event error and did not close the Form: observed (one occurrence).
- The Form-menu recent-forms list at this time does not contain FX_FlexProbe01: observed.
- Cause of the close-time server-event error: unresolved.
- Whether the isolation hypothesis holds (FX_FlexProbe01 without collections): unresolved (not tested).
- FX_FlexProbe01 created once through Flex > Basic (Unit Char, Save Template unchecked, no collections, no Regenerate); completion message observed: observed.
- One FlexLayout selection on FX_FlexProbe01: no server-event error; Properties grid Design group populated: observed (one run).
- One Edit FlexLayout Attributes click on FX_FlexProbe01: no server-event error; dialog shows Type HorizontalBox and region rows 0-2 (FLEX_PANE_REGION0-2, Length 1 Flex; Unit Flex, Orientation Vertical, Alignment Left, Pack Start): observed (one run).
- Server-event error reproduced on a Flex Form without collections: **no** (observed, one run, same session). Not replay-verified; not durability evidence. Cross-check against FX_CustomerPortal: the EXP-103 symptom did not appear here; cause of the EXP-103 symptom remains unresolved (candidates: FX_CustomerPortal's collections, its Regenerate history, or its server-side state).
- Candidate procedure (unverified; one successful run only): creating a Flex > Basic Form without collections and selecting its FlexLayout produces no error; a repeat run is needed before any reliance.

## Acceptance checks (T2 status)

- AC-1: met for the gate (sources reviewed; session usable; User scope; no Form open before creation after the operator's reload and close; gate screenshots `t2r-01` and `t1-01`/`t1-02`/`t1-03`). The T1 close attempt is recorded above.
- AC-2: met. Creation through Flex > Basic once; completion recorded; open in User scope and clean; FlexLayout and regions listed; no collection, Save or Regenerate. Evidence: `t2-01` to `t2-08`, `t2-10`.
- AC-3: met (observed). Selection and Edit results recorded with screenshots (`t2-11` to `t2-17`); dialog left with Cancel; Save disabled; FX_FlexProbe01 open and clean.
- AC-4: met. No change after Finish beyond UI view toggles; no other Form changed; no global object, collection, Save, Regenerate, runtime action, unload or checkout action; no task-boundary overrun.
- AC-5: this record. Isolation result: **no** (error not reproduced on a Flex Form without collections; one run).
- Not done by design: FX_FlexProbe01 remains (cleanup is a later, separately approved step). The experiment is not declared accepted here.

## T4: final acceptance audit (documentation only, 2026-10-16)

Full audit: `evidence/EXP-104/t4-final-acceptance-audit.md`. T4 made zero browser calls and zero Mongoose changes.

**Count reconciliation (matches the controller tables `evidence/EXP-104/harness-audit-T1.md`, `-T2.md`, `-T3.md`):** T1 19 calls (13 reads, 6 actions); recovery gate 4 (3 reads, 1 action); creation/probe 70 (44 reads, 26 actions); total 93 (60 reads, 33 actions). Reads are browser read-only calls; actions include tab selects, clicks, the coordinate click, hover, the text fill and the Escape press. File reads and writes are not counted. Cumulative detail: ref-based clicks 26; coordinate click 1; hover 1; text fill 1; Escape 1; snapshots 31; screenshots 24; finds 2; tab lists 3; tab selects 3.

**Label mapping:** this record's "T1" = controller T1; "Recovery gate" = controller T2 (cycle 2); this record's "T2" section = controller T3 (cycle 3).

**Procedural qualifications (not rationalized):**
- **D1, deviation.** The Flex Category option's reference click timed out (overlay intercept). The fresh snapshot still offered reference targets (`e418`, `e419`, `e424`), but the corrected attempt was a coordinate click at (911, 596). This breaches "use references from the most recent snapshot" and the coordinate-as-last-resort rule. Effect: none observed (Category then read Flex). Not a blocker. Operator disposition needed.
- **D2, compliant on the transcript.** One `browser_type` call on the Name combobox with `FX_FlexProbe01`: one fill, no keystrokes, no corrections, exact match. The controller's "prohibited-tool hit=1" is a review flag; the brief does not prohibit `browser_type`. Operator to confirm.
- Other qualifications (Q1 to Q10, in the audit): the worker's own close attempt on FX_CustomerPortal failed and the Form was closed by the operator; no gate screenshot in the creation task; read-only Form-menu check after the T1 error, against the recipe's "stop for the coordinator" wording; view-state clicks; default "Primary Collection:" node not inspected; other Properties groups not expanded; `t2-04` is misnamed (it shows page 1; not renamed).

**Correction to the T2 section (Cancel state):** the statement "the FlexLayout row is still in the Form, as seen before the dialog" was an inference, not an observation. After Cancel the tree was collapsed to Pane (00), so the row's presence was not directly re-verified. Save stayed disabled and OK was never clicked.

**Acceptance (functional support; not an unconditional acceptance):**
- AC-1: met functionally (sources, session, User scope, dirty state, no Form open before creation). Procedurally qualified: the worker's close was not clean; the operator closed FX_CustomerPortal.
- AC-2: met (creation via Flex > Basic once, Unit Char, Save Template unchecked, completion recorded, clean User-scope Form with FlexLayout and three regions; no collection, Save or Regenerate). Qualified by D1, D2 and the default collection node.
- AC-3: met (observed, one run): no error after the FlexLayout selection, Properties Design group populated; no error after the Edit click, dialog populated with Type HorizontalBox and regions 0 to 2 (ID and Length 1 Flex; Unit Flex, Orientation Vertical, Alignment Left, Pack Start); Cancel once; Save disabled; FX_FlexProbe01 open and clean.
- AC-4: met, qualified by one failed close attempt within the one-close allowance and by view-state clicks.
- AC-5: met as a report (this section, the audit file, the inventory and the final state below).

**Isolation result:** the server-event error was **NOT reproduced** on FX_FlexProbe01 in this single observed test. **The cause of the EXP-103 blocker remains unresolved.** The error did occur once on FX_CustomerPortal in this session (T1, Form-close action), so FX_CustomerPortal is not cleared. The probe ran after the operator's reload, which confounds the result: the reloaded-Designer condition was not separated from the Flex-without-collections condition. A same-session selection on FX_CustomerPortal's FlexLayout and a repeat probe would be needed; neither was performed.

**Worker-written files (exhaustive):** the record (created T1; edited in the recovery task, the creation task and T4); 24 new screenshots (`evidence/EXP-104/t1-01` to `t1-06`, `t2r-01`, `t2-01` to `t2-17`); `evidence/EXP-104/t4-final-acceptance-audit.md`. Controller-generated and not worker-authored, under the EXP-104 path: `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`. Tool-generated outside EXP-104: `evidence/playwright/` snapshot and console files (not enumerated; operator git review is authoritative).

**Final state:** FX_FlexProbe01 open, User scope, clean (Save, Undo and Regenerate disabled), no dialog or menu open, Details expanded, tree collapsed (view state). FX_CustomerPortal closed by the operator. Nothing cleaned up; FX_FlexProbe01 remains for a separately approved cleanup.

**Operator dispositions requested:** D1 (accept as a recorded deviation, or require reference-only retries); D2 (confirm `browser_type` for the Name fill); the close condition (operator close); the creation-task gate (snapshot plus `t2r-01`); the post-error read-only check; optional read-only checks of the FlexLayout row after Cancel and the collection node; authorisation of a confound-resolving brief; FX_FlexProbe01 cleanup (separate approval).

## Outcome (operator, 2026-10-16)

Accepted (observed). **Isolation result: the server-event error was not reproduced on a fresh Flex Form without collections.** On FX_FlexProbe01, selecting the FlexLayout and opening Edit FlexLayout Attributes both loaded normally. The operator decided acceptance and waived the deviations below for EXP-104 only.

- Created, for later cleanup (User scope): Form `FX_FlexProbe01` through New Form Definition > Flex > Basic; Name FX_FlexProbe01, Unit Char, Save Template unchecked (default), no collections, no Regenerate, no Save, no change after Finish. Left open and clean.
- **Run R-20261016-010513-Oeyc** (4 worker tasks): T1 gate blocked (the one permitted close of FX_CustomerPortal raised the server-event error and the Form stayed open); the operator then reloaded both the Web Client and Designer tabs and closed FX_CustomerPortal manually with no error or prompt; T2 fresh read-only gate; T3 creation and probe; T4 documentation-only audit. Paused twice for operator decisions.
- Screenshots viewed by the operator assistant: `t2-11` (after one selection: no Error; Properties names flexlayoutPane_FX_FlexProbe01 (FlexLayout) with Design group Name, Description, Type FlexLayout, From Device Master True), `t2-14` (FlexLayout dialog populated: Attributes Design > Type HorizontalBox; Regions 0-2 FLEX_PANE_REGION0-2 each "1 Flex"; region 0 properties ID, Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start, Minimum Length, Maximum Length, Default Margin blank).
- Findings (observed):
  1. A fresh Flex > Basic Form loads its FlexLayout normally, so the FX_HelloWorld theme class FX_BlueBackground and the product build are unlikely causes of the EXP-103 blocker.
  2. **Basic wizard defaults:** root FlexLayout Type **HorizontalBox**; three regions FLEX_PANE_REGION0-2, each Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start. The Type value is spelled without a space (HorizontalBox), so the tutorial's "Vertical Box" is presumably VerticalBox.
  3. **Selection properties of a FlexLayout:** Design (Name, Description, Type, From Device Master), Appearance, Behavior, Events, Help, Inheritance, Layout.
  4. Still open: whether FX_CustomerPortal's own FlexLayout fails in a fresh Designer (its collections or Regenerate from EXP-102) or the EXP-103 failure was a Designer session state. Even the close of FX_CustomerPortal failed in the stale Designer and succeeded after the operator's reload.
- Counts: Forms created 1; templates 0; FlexLayout selections 1 (no error); Edit FlexLayout Attributes clicks 1 (no error); region views 3; dialog Cancel 1, OK 0; Saves 0; Regenerate 0; FX_CustomerPortal close attempts by the worker 1 (error), by the operator 1 (clean); re-logins 0.
- Operator rulings (EXP-104 only): D1 (coordinate click after the Flex option's reference click timed out on an overlay) and D2 (one plain `browser_type` fill of the Name) waived; the operator's manual reload and close accepted as the T1 gate.
- Confinement (git status): only `evidence/EXP-104/` and this record were written by the run.
- Next: EXP-103-R2, a replay of Part 7 section 3 that starts with a decisive selection gate on FX_CustomerPortal's FlexLayout in the fresh Designer.
