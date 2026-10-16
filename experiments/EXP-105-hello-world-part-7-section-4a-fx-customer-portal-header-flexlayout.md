# EXP-105: Hello World Part 7 Section 4a - nested FlexLayout FlexLayoutHeader in the header region of FX_CustomerPortal

Status: **T4 complete (observed, same session): ordinary Form close (no save prompt), reopen through the Form menu recent-forms entry, and read-only readback match the brief's expected values. Name FlexLayoutHeader, Type FlexLayout, Theme Class FX_BlueBackground; regions index 0 `header` and index 1 `user` with the expected values; root regions Region00: header, Region01: main, Region02: footer unchanged in name and order; dialog closed with Cancel; Form open and clean. Persistence across close and reopen is observed in the same browser session only (not cross-session, database-level or runtime).** Detail: `evidence/EXP-105/t4-record.md`. Earlier status: T3 complete (observed, same session; T7 continuation): region 0 `header` (1 Flex, Horizontal, Middle, Start) and region 1 `user` (1 Flex, Horizontal, Middle, End, Default Margin 1,0,0,0) set in the open dialog; Regions grid captured before OK; OK clicked once (dialog closed); one Designer Save with toast "Form [FX_CustomerPortal] and global object(s) were saved." ** Detail for T3: `evidence/EXP-105/t3c-record.md`. Earlier T3 attempt: blocked by a guard I/O error after one region add (`evidence/EXP-105/t3-record.md`). Earlier status: T2 complete (observed, same session). T1 gate passed. T2 placed one FlexLayout under Region00: header and, after the operator corrected the guard, named it `FlexLayoutHeader` (one fill), set Theme Class `FX_BlueBackground`, performed one Designer Save (toast "Form [FX_CustomerPortal] and global object(s) were saved."), read the default attributes read-only (one region UNKNOWN0; Alignment options Top/Middle/Stretch; Pack options Start/Center/End), and exited with Cancel. Save is disabled and the Form is open and clean. The Properties header combo still displays `flexLayout1_USER (FlexLayout)` (observed lag). Regions (T3), OK and the readback (T4) are not done.
Date: 2026-10-16. Run: R-20261016-114004-XV8X. Worker session 82eaaa45-17fc-47b9-89bb-0317d1b5c457.
Scope: User-scope Form FX_CustomerPortal only. Tutorial source: `docs/mongoose/transcripts/hello-world-pt7.md` Section 4 steps 1-3 (lines 145-163, transcript 05:16-06:31).

## Planned steps (from the brief; none beyond T1 performed)

- T1: read-only gate. **Done on the second attempt** (see T1 attempt 2 below).
- T2: place one FlexLayout from the Toolbox into Region00: header with one canvas click; rename FlexLayoutHeader; Theme Class FX_BlueBackground; one Designer Save; read default attributes; Cancel. **Done** (placement; Name; Theme Class; one Save; default attributes read-only; Cancel).
- T3: Regions to exactly two: `header` (1 Flex, Horizontal, Middle, Start) and `user` (1 Flex, Horizontal, Middle, End, Default Margin 1,0,0,0); Regions grid before OK; OK; one Designer Save. **Done (T7 continuation; see the T3 continuation section).** Earlier attempt added one region and was blocked by a guard I/O error.
- T4: ordinary close and reopen; readback of Name, Type, Theme Class and both regions; root regions unchanged; Cancel; Form open and clean. **Done (T4; see the T4 section).**

## Acceptance checks (current)

| ID | Status | Evidence |
| --- | --- | --- |
| AC-1 Gate | **Met** (T1 attempt 2; same-session observation; footer not visible on canvas in the captures) | `evidence/EXP-105/t1b-gate-02-form-opened-canvas.png`, `evidence/EXP-105/t1b-gate-04-components-tree-expanded.png`, `evidence/EXP-105/t1b-gate-record.md` |
| AC-2 Placement, name, class, save, default attributes | **Met for T2** (observed, same session): one FlexLayout by Toolbox selection and one canvas click under Region00: header; Name FlexLayoutHeader; Theme Class FX_BlueBackground; no correction needed; one Designer Save with toast; default attributes read and Cancel used once. Properties header lag noted. | `t2-toolbox-01`, `t2-placement-02`, `t2c-name-02`, `t2c-name-03`, `t2c-theme-02`, `t2c-save-01`, `t2c-adorner-02`, `t2c-attrs-01` to `t2c-attrs-07` |
| AC-3 Regions header/user, Type unchanged, grid before OK, OK, one Save | **Met as displayed (observed, same session)**: two regions; Type HorizontalBox unchanged; index 0 `header` 1 Flex Horizontal Middle Start; index 1 `user` 1 Flex Horizontal Middle End, Default Margin 1,0,0,0; grid captured before OK; OK once (dialog closed); one Designer Save with toast. Pre-compaction entries for region 0 are not itemized in the carried summary. | `t3c-region1-01-all-values-entered.png`, `t3c-region0-01-selected-before-ok.png`, `t3c-regions-grid-before-ok.png`, `t3c-save-01-after-designer-save.png` (earlier: `t3-dialog-01`, `t3-dialog-02`, `t3b-gate-01`, `t3b-region0-01`) |
| AC-4 After one ordinary close and reopen: Name, Theme Class, both regions, root regions unchanged, dialog Cancel, Form open and clean | **Met as observed, same browser session** (T4): ordinary close with no prompt; reopen via recent-forms; Name FlexLayoutHeader; Type FlexLayout; Theme Class FX_BlueBackground; region 0 `header` 1 Flex Horizontal Middle Start, Default Margin blank; region 1 `user` 1 Flex Horizontal Middle End, Default Margin 1,0,0,0; root Region00: header, Region01: main, Region02: footer (names and order); Cancel once; Save disabled. Root region attributes not re-read. Not cross-session, database-level or runtime. | `t4-pre-close-01-clean-form-state.png`, `t4-reopen-02-components-tree-expanded.png`, `t4-reopen-03-components-tree-scrolled.png`, `t4-reopen-04-properties-name-and-theme-class.png`, `t4-reopen-05-edit-adorner-tooltip-hover.png`, `t4-region0-01-index0-header-selected.png`, `t4-region1-01-index1-user-selected.png`, `t4-region1-02-index1-user-properties-scrolled.png`, `t4-regions-grid-readback.png`, `t4-final-01-clean-state-after-cancel.png` |
| AC-5 No other change; no global object; no Regenerate; no dragging; Undo at most once; no runtime; no unload; no checkout; User scope; no task-boundary overrun | **Met for T4** (observed): no Save, Undo, region edit, component mutation, Regenerate, unload, checkout, runtime action or drag in T4; the only mutation-adjacent acts were the close and reopen of the Form. Cumulative Undo count remains 0. | T4 counts in the T4 section |
| AC-6 Final report, audit, inventory, final state | **In this report** (T4 counts exact; cumulative items marked unreconciled where the pre-compaction part is approximate) | `evidence/EXP-105/t4-record.md`, this record |

## T4 (ordinary close, recent-forms reopen, read-only readback; done)

Record: `evidence/EXP-105/t4-record.md`. Sources reread before the first browser action: AGENTS.md, hello-world-pt7.md lines 145-163, both recipes, EXP-103-R3 and EXP-065 Outcome sections, `t3c-record.md`. The EXP-105 record itself was not reread until the update step (process deviation recorded in the T4 record).

Observed in order:
- Gate (`t4-pre-close-01-clean-form-state.png`): FX_CustomerPortal tab selected; ScopeType User; Save and Undo disabled; no dialog; Components tree collapsed to Pane (00).
- Close: the Form-tab closable control, one click. No save prompt. Tab list empty afterwards.
- Reopen: Form menu button (one click); recent-forms entry FX_CustomerPortal (one click). Select Form OK not used. Reopened Form: ScopeType User; Save disabled; Properties Name FX_CustomerPortal.
- Components tree (expanded; `t4-reopen-02`, `t4-reopen-03`):
  - Pane (00) > flexlayoutPane_FX_CustomerPortal > Region00: header > FlexLayoutHeader > (Region00: header, Region01: user).
  - Root Region01: main and Region02: footer at root level.
  - Exactly one FlexLayoutHeader.
- FlexLayoutHeader (Components row click; `t4-reopen-04`): Properties header combo `FlexLayoutHeader (FlexLayout)` (no renewed flexLayout1_USER discrepancy); Name `FlexLayoutHeader`; Type `FlexLayout`; Theme Class `FX_BlueBackground`.
- Edit control: hover confirmed the tooltip `Edit FlexLayout Attributes` (find; not visible in the image `t4-reopen-05`); one click on the canvas adorner (ref e1040) opened the dialog. Dialog: Type `HorizontalBox`; Auto Size False; Region Index 0; Margin blank; regions `0 header 1 Flex` and `1 user 1 Flex`.
- Region index 0 (row selected; `t4-region0-01`): ID header; Length 1; Unit Flex; Orientation Horizontal; Alignment Middle; Pack Start; Minimum/Maximum Length blank; Default Margin blank. Matches the expected values.
- Region index 1 (row selected; `t4-region1-01`, then one ordinary wheel scroll of the Properties grid; `t4-region1-02`): ID user; Length 1; Unit Flex; Orientation Horizontal; Alignment Middle; Pack End; Minimum/Maximum Length blank; Default Margin `1,0,0,0`. Matches the expected values.
- Regions grid (`t4-regions-grid-readback.png`): `0 header 1 Flex`; `1 user 1 Flex`.
- Cancel once. Next snapshot: no dialog; Save and Undo disabled; FX_CustomerPortal open; ScopeType User; tree collapsed to Pane (00). Capture `t4-final-01-clean-state-after-cancel.png`.

Notes: no value differed; no correction; no Undo, Save, OK or region edit. The root region attributes were not opened; names and order only.

Refs: two `Ref not found` errors occurred in T4. Each was handled with one fresh untargeted snapshot (the first after a boxes-targeted tree snapshot; the second after a boxes-targeted Properties snapshot). The failed screenshot attempts wrote no file.

Counts (exact, T4): tab listings 1; tab selections 1; untargeted snapshots 13; targeted snapshots 4; find 2 (read-only); screenshots 10 (2 failed on Ref not found); reference clicks 11; hovers 1; mouse moves 2 (positioning only); wheel scrolls 2; coordinate clicks 0; dialog opens 1; Cancel 1; OK 0; Designer Saves 0; Undo 0; region adds 0; region edits 0; list opens 0; Form closes 1; Form reopens 1; prompts 0; hook errors 0; server-event errors 0; re-logins 0.

Limits: same-session UI observation only. Not cross-session, not database-level, not runtime. The tree hierarchy relies on screenshot indentation (flat accessibility rows). The tooltip is confirmed by accessibility, not by the image.

## T3 continuation (T7; regions completed, OK, one Save)

Record: `evidence/EXP-105/t3c-record.md`. Sources read at the start of the task; part of the task ran before a context summary (carried details, approximate counts).

Observed in order:
- Gate (`t3b-gate-01`): dialog open, Type HorizontalBox, two regions (UNKNOWN0 at index 0; UNKNOWN1_USER at index 1), Save disabled.
- Region 0 (carried): ID `header`; Alignment `Middle` (option click). Region 0 re-verified after the edits: ID header, Length 1, Unit Flex, Orientation Horizontal, Alignment Middle, Pack Start, Default Margin blank (`t3c-region0-01-selected-before-ok.png`).
- Region 1: ID `user` (carried, confirmed in the grid); Alignment Middle (option click; committed when the Pack row was clicked); Pack `End` (list opened once, End chosen); Default Margin `1,0,0,0` (value cell clicked twice: the first click did not open the editor; the second opened it; one fill and Tab). Length 1, Unit Flex and Orientation Horizontal confirmed in the snapshot (`t3c-region1-01-all-values-entered.png` shows Alignment Middle, Pack End and Default Margin; the top rows are scrolled out of view in that capture).
- Regions grid before OK (`t3c-regions-grid-before-ok.png`): `0 header 1 Flex`, `1 user 1 Flex`.
- OK clicked once: the dialog closed; no error or message visible in the snapshot after OK. No OK toast was captured.
- One Designer Save: toast "Form [FX_CustomerPortal] and global object(s) were saved." (`t3c-save-01-after-designer-save.png`). Save icon greyed in that capture (not confirmed in the accessibility tree).

Not verified: persistence after close and reopen (T4), the nested layout in the Components tree after the dialog closed (tree collapsed to Pane (00)), and the root regions after the save (T4).

Notes: the Pack list opened from the second Pack trigger click; the first Pack trigger click produced no list (it only committed the Alignment editor). The Default Margin first click did not open the editor. No correction was needed for any field value; no hook error or server-event error occurred in this part.

## T3 (regions; blocked after one add, dialog left open)

Record: `evidence/EXP-105/t3-record.md`. Sources reread before the first browser call (AGENTS.md, transcript 145-163, both recipes, EXP-103-R3 and EXP-065 Outcome sections, this record, t2c-record.md).

Observed in order:
- Gate (`t3-gate-01`): FX_CustomerPortal open; Save and Undo disabled; ScopeType User; Components tree expanded with FlexLayoutHeader under Region00: header and Region00: UNKNOWN0 under it.
- Reselect of the FlexLayoutHeader row: Properties header combo now reads `FlexLayoutHeader (FlexLayout)` (the T2 lag cleared). Name FlexLayoutHeader; Type FlexLayout; Theme Class FX_BlueBackground.
- Canvas icons: icon 1 (component thumbnail) showed no tooltip (`t3-adorner-01`); icon 2 showed "Edit FlexLayout Attributes" (`t3-adorner-02`). Icon 2 clicked once; dialog opened.
- Dialog at open (`t3-dialog-01`): Type HorizontalBox; Region Index 0; one region UNKNOWN0 (1 Flex).
- Regions + (ref e1525) clicked once: second row appeared, index 1 `UNKNOWN1_USER`, Length 1 Flex, Orientation Horizontal, Alignment Top, Pack Start (`t3-dialog-02`).
- Next step (fresh snapshot to edit region 0) was blocked by a PreToolUse hook: `Guard state unavailable: atomic update/audit I/O failed; preserve state and stop instead of bypassing the hook.` The worker did not retry, bypass or use another route, and made no further browser calls.

Current state: dialog open; second region added and uncommitted; region 0 unedited; Type unchanged; no Save; Form not saved in this task. Discarding the add (Cancel) or committing it (OK) needs the operator's decision; the worker did not choose.

Operator options: (a) restore the guard, then a new T3 task re-inspects the open dialog read-only and configures index 0 (`header`, 1 Flex, Horizontal, Middle, Start) and index 1 (`user`, 1 Flex, Horizontal, Middle, End, Default Margin 1,0,0,0), then OK and one Save; (b) Cancel the dialog (discards the uncommitted region) and rerun T3 from one region.

Counts (this task): tab listings 1; selections 1; untargeted snapshots 4 succeeded + 1 blocked by hook; targeted snapshots 1; find 0; screenshots 5; reference clicks 4 (Components Expand, FlexLayoutHeader row, attributes icon, Regions +); coordinate clicks 0; hovers 2; region adds 1; region edits 0; OK 0; Cancel 0; Designer Saves 0; dialog opens 1 (still open); Form opens/closes 0/0; hook errors 1; server-event errors 0; re-logins 0.

## T2 completion (this task; from the existing unsaved placement)

Record: `evidence/EXP-105/t2c-record.md`. Sources reread before the first browser call (AGENTS.md, transcript 145-163, both recipes, EXP-103-R3 and EXP-065 Outcome sections, this record, t2b-record.md).

Observed in order:
- Inherited state (`t2c-gate-01`): FX_CustomerPortal open, ScopeType User, Save enabled from the unsaved placement, Name editor active with `flexLayout1_USER`, tree Region00: header > flexLayout1_USER > Region00: UNKNOWN0.
- Name: one plain `browser_type` fill of `FlexLayoutHeader` succeeded (no hook denial), then Tab. Properties Name value and tree row read FlexLayoutHeader (`t2c-name-02`). Properties header combo still read `flexLayout1_USER (FlexLayout)`; one reselect (Components row) did not clear it (`t2c-name-03`). Lag left as observed.
- Theme Class: Appearance expanded (Properties expand-all control), list opened (one option: FX_BlueBackground), option clicked, Tab. Displayed `FX_BlueBackgroun` (truncated); accessibility tree `FX_BlueBackground` (`t2c-theme-01`, `t2c-theme-02`).
- One Designer Save (toolbar). Response toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo disabled afterward (`t2c-save-01`). Persistence across reload is not proven here.
- Edit FlexLayout Attributes: the 1st canvas adorner icon (DOM id `flexlayouteditadorner-…`) showed the tooltip "Edit FlexLayout Attributes" on hover (`t2c-adorner-02`); the 5th icon showed no tooltip (`t2c-adorner-01`). One click on the 1st icon (a canvas-icon reference click, not coordinates).
- Default attributes (read-only; `t2c-attrs-01`, `t2c-attrs-02`): Type HorizontalBox; Auto Size False; Region Index 0; Margin blank. Regions: 1 (index 0, UNKNOWN0, 1 Flex). Region 0: ID UNKNOWN0; Length 1; Unit Flex; Orientation Horizontal; Alignment Top; Pack Start; Minimum Length, Maximum Length and Default Margin blank.
- Alignment options (list opened once, closed by clicking the Regions row, nothing chosen): Top, Middle, Stretch (`t2c-attrs-03`, `t2c-attrs-04`). **Middle exists.**
- Pack options (list opened once, closed the same way): Start, Center, End (`t2c-attrs-05`, `t2c-attrs-06`). **End exists.**
- Cancel once (`t2c-attrs-07`): dialog closed; Save and Undo disabled; Form open and clean. No OK.

Notes: after the Save the canvas header strip rendered teal (FX_BlueBackground appears applied in the Designer view; which component's background it is was not confirmed). The Components tree collapsed to Pane (00) after the dialog closed.

## T2 continuation (from the existing unsaved placement; blocked again at the Name entry)

## T2 (placement and Name; blocked at the Name entry)

Record: `evidence/EXP-105/t2-record.md`. Sources reread before the first browser call (AGENTS.md, transcript lines 145-163, both recipes, EXP-103-R3 and EXP-065 Outcome sections, this record, the T1b record).

Observed:
- Gate (fresh snapshot and `t2-gate-01`): FX_CustomerPortal open, Save and Undo disabled, ScopeType User, tree Region00: header / main / footer.
- Toolbox FlexLayout row selected once (ref). Screenshot `t2-toolbox-01`.
- One canvas placement click at (400, 135), inside the header strip above the first divider (coordinate click, the only one).
- Result: the Components tree shows `flexLayout1_USER` (Type FlexLayout) indented directly under **Region00: header**, with an auto-created child `Region00: UNKNOWN0`. Region01: main and Region02: footer are unchanged at root level. Save became enabled (unsaved). Screenshot `t2-placement-02`. The parent was confirmed from indentation in the screenshot; the accessibility rows are flat.
- Properties: generated name `flexLayout1_USER`, Type FlexLayout, From Device Master True.
- Click on the Properties Name value (ref) opened an active textbox containing `flexLayout1_USER`.
- Entry of `FlexLayoutHeader` (one fill) was **blocked by a PreToolUse hook**: `Exact value required: header. Preserve its spelling and case.` The call was not retried and no keystroke workaround was used. One targeted fresh snapshot: textbox still `flexLayout1_USER`, unchanged. Screenshot `t2-name-01-editor-open-hook-blocked.png`.

Stopped (blocker). The hook message refers to `header`, not to the brief's component name `FlexLayoutHeader`. The worker cannot tell whether the hook is misconfigured or expects a different value, so it did not guess. Current state: Name editor open on the new component with its value unchanged; placement unsaved; Save and Undo enabled. Undo was not used (not authorized for this case). No Save was made.

Operator options (for the next task): (a) fix or clear the hook and rerun T2 from a fresh snapshot, inspecting the Name editor first; (b) authorize a specific resolution (for example Escape to cancel the editor, then Save the placement with the name still `flexLayout1_USER`, or Undo once to remove the placement and restart T2). The worker will not choose among these.

## T2 continuation (from the existing unsaved placement; blocked again at the Name entry)

Record: `evidence/EXP-105/t2b-record.md`. Sources reread before the first browser call (AGENTS.md, transcript lines 145-163, both recipes, EXP-103-R3 and EXP-065 Outcome sections, the EXP-105 record, t2-record.md).

Observed (fresh untargeted snapshot and `t2b-gate-01`):
- FX_CustomerPortal tab selected; ScopeType User; Save and Undo enabled (unsaved placement).
- Components tree: flexLayout1_USER (FlexLayout) under Region00: header, with Region00: UNKNOWN0 beneath it; Region01: main and Region02: footer unchanged.
- Properties Name editor open, textbox value `flexLayout1_USER`.

Action: one `browser_type` of `FlexLayoutHeader` into the open editor (one fill, no submit). **Blocked by the PreToolUse hook:** `Exact value required: header. Preserve its spelling and case.` The call was not retried; no keystroke or substitute route was used. One read-only `browser_find` confirmed the editor still reads `flexLayout1_USER`.

Stopped. Current state: Name editor open with the original value; placement unsaved; Save and Undo enabled; no dialog or menu open. The unsaved change is left in place (discarding or saving it is outside this task's authority). The hook still matches `header` even though the operator removed it from the guard; the worker cannot see the guard's configuration.

Operator options: (a) fix the hook, then a new T2 task inspects the open editor first; (b) authorize a resolution for the unsaved placement (Escape then Save under `flexLayout1_USER`, or one Undo and restart T2); (c) specify another route for the Name. The worker will not choose.

## T1 attempt 2 (read-only gate; operator-authorized continuation)

Sources reread before the first browser call: AGENTS.md; hello-world-pt7.md lines 145-163; recipes/components/add-component-from-toolbox.md; recipes/session/session-expiry-and-stale-designer.md; the Outcome sections of EXP-103-R3 (line 392) and EXP-065 (line 731).

Observed:
- Tabs: tab 0 = Mongoose Web Client; tab 1 = Designer (`mode=designer`). Tab 1 was selected after the tab listing.
- Before the open: Designer with no Form open (empty canvas, empty Properties), Save and Undo disabled, ScopeType User.
- One Form open through Form menu > FX_CustomerPortal (recent-forms entry). Select Form OK was not used.
- After the open: tab heading FX_CustomerPortal; Properties Name FX_CustomerPortal; Form Type Flex; Device Type Default; Save and Undo disabled; no dialog open.
- Components tree (Details > Components, expanded with the named Expand button): Pane (00) > flexlayoutPane_FX_CustomerPortal (FlexLayout) > Region00: header, Region01: main, Region02: footer. The three regions have no child components.
- Canvas: header row is the strip above the first dotted divider (about y=100 to y=172 in the 02 capture viewport); the footer row is below the second divider. Limitation: after the Details panel was expanded, only the header row and first divider are visible; the footer is confirmed by the tree, not on the canvas.
- No component was selected. Details panel left expanded (UI layout only).

Evidence (`evidence/EXP-105/`):
- `t1b-gate-01-designer-fresh-screenshot.png`: pre-open Designer, no Form, Save/Undo disabled, ScopeType User.
- `t1b-gate-02-form-opened-canvas.png`: FX_CustomerPortal open; Name and Form Type visible; header row above the first divider.
- `t1b-gate-03-details-components-collapsed.png`: Details on Components with Pane (00) collapsed.
- `t1b-gate-04-components-tree-expanded.png`: expanded tree with the three root regions.
- `t1b-gate-record.md`: full sequence, findings, counts and limits.

## T1 attempt 1 (browser unavailable; prior task)

Recorded in full in `evidence/EXP-105/t1-gate-browser-unavailable.md`. Two `browser_tabs` list calls and one `browser_snapshot` call each failed with `TimeoutError: async initializeServer: Timeout 30000ms exceeded` after the websocket connected (127.0.0.1:9224). No Mongoose state was seen. The operator reported a browser recovery (the unresponsive Portal tab was restored); the worker did not restart Chrome or the MCP. The attempt 2 listing succeeded without any worker-side recovery.

## Browser action audit (cumulative across EXP-105 worker tasks)

Attempt 1 (prior task, T1): tab listings 2 (both failed), browser snapshots 1 (failed); all other counts 0.

Attempt 2 (this task, T1 gate):

| Action | Count | Result |
| --- | --- | --- |
| Tab listings (`browser_tabs` list) | 1 | Succeeded |
| Tab selections | 1 | Succeeded (index 1, Designer) |
| Browser snapshots (untargeted) | 2 | Succeeded |
| Screenshots | 4 | Captured (no mutation) |
| Clicks, total | 5 | Form menu button 1; recent-form entry FX_CustomerPortal 1; Details Expand Panel 1; Details Components tab 1; Components Expand button 1 |
| Coordinate clicks | 0 | - |
| Toolbox selections | 0 | - |
| Canvas placement clicks | 0 | - |
| Undo clicks | 0 | - |
| Name / Theme Class entries and corrections | 0 / 0 | - |
| Component selections | 0 | - |
| Dialog opens | 0 | - |
| List opens | 0 | - |
| Region adds, region field entries, corrections | 0, 0, 0 | - |
| OK clicks | 0 | - |
| Designer Saves | 0 | - |
| Form opens (recent-forms) | 1 | Succeeded |
| Form closes | 0 | - |
| Prompts or dialogs answered | 0 | - |
| Server-event errors | 0 | - |
| Session expiry / re-login | 0 observed / 0 | - |
| Navigation, refresh, Chrome or MCP start or restart | 0 | - |

Cumulative totals after attempt 2: tab listings 3 (2 failed, 1 succeeded); tab selections 1; browser snapshots 3 (1 failed, 2 succeeded); screenshots 4; clicks 5; Form opens 1; every other mutation count 0.

Attempt 3 (T2, this task; blocked at Name entry):

| Action | Count | Result |
| --- | --- | --- |
| Tab listings | 1 | Succeeded |
| Tab selections | 1 | Succeeded (index 1) |
| Browser snapshots | 3 | 2 untargeted (gate; after placement), 1 targeted to e976 (inspection after hook block). All succeeded |
| Screenshots | 4 | Gate, Toolbox selection, placement tree, Name editor (no mutation) |
| Clicks by reference | 2 | Toolbox FlexLayout row 1; Properties Name value cell 1 |
| Coordinate clicks | 1 | Canvas placement at (400, 135), inside Region00: header |
| Toolbox selections | 1 | Succeeded |
| Canvas placement clicks | 1 | Succeeded (flexLayout1_USER under Region00: header) |
| Undo clicks | 0 | - |
| Name entries | 0 successful; 1 attempt blocked by hook | Corrections 0 |
| Theme Class entries | 0 | - |
| List opens | 0 | - |
| Dialog opens / Cancel / OK | 0 / 0 / 0 | - |
| Designer Saves | 0 | - |
| Region adds / region edits | 0 / 0 | - |
| Form opens / closes | 0 / 0 | - |
| Hook errors | 1 | `Exact value required: header. Preserve its spelling and case.` on the browser_type call |
| Prompts or dialogs answered | 0 | - |
| Server-event errors | 0 | - |
| Session expiry / re-login | 0 / 0 | - |
| Navigation, refresh, Chrome or MCP restart, drag | 0 | - |

Attempt 4 (T2 continuation, this task; blocked again at the Name entry):
- Tab listings 1 (succeeded); tab selections 1 (succeeded, index 1).
- Browser snapshots 1 (untargeted, succeeded). Browser find 1 (read-only, confirmation only; no ref used for a click).
- Screenshots 1 (`t2b-gate-01-unsaved-placement-name-editor-open.png`).
- Reference clicks 0; coordinate clicks 0; Toolbox selections 0; canvas placements 0; Undo 0; drag 0.
- Name entries 0 successful; 1 blocked by the hook (`browser_type`, value FlexLayoutHeader). Corrections 0.
- Theme Class entries 0; list opens 0; dialog opens 0; Cancel 0; OK 0; Saves 0; Regenerate 0; region adds/edits 0; Form opens/closes 0/0.
- Hook errors 1 (this task). Server-event errors 0. Re-logins 0. Navigation, refresh, restart 0.

Attempt 5 (T2 completion, this task; see the T2 completion section): tab listings 1; tab selections 1; untargeted snapshots 13; targeted snapshots 1; find 0; screenshots 17; clicks by reference 13 (Components row reselect, Appearance row, Properties expand-all, Theme Class trigger, Theme Class option, Save, canvas adorner Edit icon, Regions row select, Alignment trigger, Alignment close, Pack trigger, Pack close, Cancel); coordinate clicks 0; hovers 2; Name entries 1 successful (one fill), corrections 0; Tab key presses 2; Theme Class entries 1, corrections 0; list opens 3 (Theme Class, Alignment, Pack), list closes without choosing 2; Designer Saves 1 (toast observed); dialog opens 1, exits 1 (Cancel), OK 0; region adds 0; region edits 0; Undo 0; Form opens/closes 0/0; prompts 0; hook errors 0; server-event errors 0; re-logins 0; navigation/refresh/restart/drag 0.

Cumulative totals after attempt 5 (all EXP-105 worker tasks so far; prior totals carried from attempt 4):
- Tab listings 6 (2 failed; 4 succeeded). Tab selections 4. Browser snapshots 22 (1 failed; 21 succeeded). Find 1.
- Screenshots 26. Clicks by reference 20. Coordinate clicks 1 (canvas placement). Total clicks 21.
- Toolbox selections 1; canvas placements 1; components placed 1 (flexLayout1_USER, now FlexLayoutHeader).
- Name entries 1 successful; 2 blocked by the hook (attempts 3 and 4, same value). Name corrections 0. Theme Class entries 1; corrections 0.
- Designer Saves 1. Dialog opens 1; exits 1 (Cancel). OK 0. Undo 0. Region adds 0; region edits 0.
- Form opens 1; closes 0. Hook errors 2 (both earlier). Server-event errors 0. Re-logins 0.

Earlier attempt-4 totals (kept for the record):
- Cumulative totals after attempt 4 (all EXP-105 worker tasks so far):
- Tab listings 5 (2 failed in T1 attempt 1; 3 succeeded). Tab selections 3.
- Browser snapshots 8 (1 failed in attempt 1; 7 succeeded). Browser find 1 (read-only).
- Screenshots 9.
- Reference clicks 7; coordinate clicks 1; total clicks 8.
- Toolbox selections 1; canvas placements 1; components placed 1 (flexLayout1_USER under Region00: header).
- Form opens 1; Form closes 0.
- Undo 0; Saves 0; Name entries 0 successful, 2 blocked (attempts 3 and 4, same value, same hook message); corrections 0; Theme Class entries 0.
- Dialog opens 0; Cancel 0; OK 0; region adds/edits 0; list opens 0; Regenerate 0.
- Hook errors 2. Server-event errors 0. Re-logins 0. Prompts or dialogs answered 0.

Earlier totals (attempt 3 detail, kept for the record):
- Cumulative totals after attempt 3 (all EXP-105 worker tasks so far):
- Tab listings: 4 (2 failed in attempt 1, 2 succeeded in attempts 2 and 3). Tab selections: 2 (attempts 2 and 3).
- Browser snapshots: 7 (1 failed in attempt 1; 6 succeeded: 5 untargeted, 1 targeted in attempt 3). Recovery snapshots after a Ref error: 0 (no ref error occurred).
- Screenshots: 8 (4 in attempt 2, 4 in attempt 3).
- Clicks by reference: 7 (attempt 2: Form menu, recent-form entry, Details Expand, Details Components tab, Components Expand; attempt 3: Toolbox FlexLayout row, Name value cell). Coordinate clicks: 1 (attempt 3 canvas placement). Total clicks: 8.
- Form opens: 1; Form closes: 0.
- Toolbox selections: 1; canvas placement clicks: 1; components placed: 1 (flexLayout1_USER).
- Undo clicks: 0. Name entries: 0 successful (1 blocked by hook). Name corrections: 0. Theme Class entries: 0.
- Dialog opens: 0. Cancel: 0. OK: 0. Designer Saves: 0. Regenerate: 0. Region adds/edits: 0.
- List opens: 0. Prompts or dialogs answered: 0. Hook errors: 1. Server-event errors: 0. Session expiry or re-login: 0 / 0.
- Chrome or MCP start or restart, navigation, refresh, drag: 0.

### Attempt 7 (T4; exact)

- Tab listings 1; tab selections 1; untargeted snapshots 13 (2 recovery after Ref not found); targeted snapshots 4; find 2 (read-only); screenshots 10 captured, 2 failed (Ref not found); reference clicks 11 (Form-tab close 1; Form menu 1; recent-forms entry 1; Details Expand Panel 1; Components tab 1; Components Expand 1; FlexLayoutHeader row 1; canvas Edit adorner 1; Regions row 0 index cell 1; Regions row 1 index cell 1; Cancel 1); hovers 1; mouse moves 2 and wheel scrolls 2 (positioning and scrolling only; no clicks); coordinate clicks 0; dialog opens 1; Cancel 1; OK 0; Designer Saves 0; Undo 0; text entries 0; Tab presses 0; list opens 0; region adds 0; region edits 0; corrections 0; Form closes 1 (no prompt); Form reopens 1; prompts 0; hook errors 0; server-event errors 0; Ref not found 2; re-logins 0; navigation, refresh, restart, drag 0.

### Cumulative through T4 (see `evidence/EXP-105/t4-record.md` for the table)

- Carried figures are from the recorded counts. Exact: Designer Saves 2 (T2 and T3 continuation); OK 1 (T3 continuation); Undo 0; coordinate clicks 1 (the canvas placement); Form opens 2 (T1 and T4); Form closes 1 (T4); server-event errors 0; re-logins 0; prompts 0.
- [Superseded by the T9 controller reconciliation; see the T9 section.] Former text: the T3 continuation's pre-compaction part (screenshots 2, reference clicks at least 2, text entries at least 2, snapshots not itemized) is approximate, so the cumulative snapshot total (54 plus unitemized), reference-click total (44 plus at least 2), and region-field-entry count for region 0 are not exact. Ref-not-found errors in earlier tasks are not itemized in the carried records.
- Qualification for operator review: during the T7 task, before a context summary, a Grep of the worker session transcript was denied; the worker did not retry, and the counts above were not recovered from it.

### Attempt 6 (T3 continuation, T7)

- Post-compaction part (exact): tab listings 0; tab selections 0; untargeted snapshots 4; targeted snapshots 6; find 0; screenshots 4; reference clicks 9 (Alignment option 1; Pack trigger 2; Pack option 1; Default Margin cell 2; Regions row select 1; OK 1; Designer Save 1); coordinate clicks 0; text entries 1 (Default Margin, one fill); Tab presses 1; list opens 1 (Pack); region adds 0; region field entries 3 (region 1), corrections 0; OK 1; Designer Saves 1 (toast observed); Cancel 0; Undo 0; Form opens/closes 0/0; prompts 0; hook errors 0; server-event errors 0; re-logins 0; navigation/refresh/restart/drag 0.
- Pre-compaction part (approximate): screenshots 2; reference clicks at least 2 (Alignment option, Alignment trigger); text entries at least 2 (ID header, ID user); other snapshots not itemized.

[Superseded by the T9 reconciliation; the controller figures are in the T9 section.] Former cumulative figures (carried from the prior T3 attempt plus the above): tab listings 7; tab selections 5; snapshots 27 succeeded + 1 hook-blocked (hook errors 3 in total) + this task's 10 post-compaction snapshots; find 1; screenshots 31 + 4 post-compaction + 2 pre-compaction = 37 (approximate: the pre-compaction count is carried); reference clicks 24 + 9 + at least 2; coordinate clicks 1; Toolbox selections 1; canvas placements 1; Name entries 1 successful; Theme Class entries 1; Designer Saves 2 (T2 1, this task 1); dialog opens 2; OK 1; Cancel 1 (T2); Undo 0; region adds 1; region field entries (region 0 and region 1) approximate plus 3 post-compaction; Form opens 1; Form closes 0; re-logins 0.

## Final acceptance audit (T9; documentation only; zero browser calls)

Detail: `evidence/EXP-105/final-acceptance-audit.md`. This task made no browser call and no Mongoose change. It read the eight controller tables `evidence/EXP-105/harness-audit-T1.md` to `harness-audit-T8.md` and reconciled the counts to their row-level call logs.

- Recommendation: **ACCEPTED AS OBSERVED, conditional.** AC-1 to AC-4 are supported by same-session UI evidence. AC-5 is partially met: the Designer Save toast says "global object(s) were saved", and the UI cannot show whether any global object was written. AC-6 is certified for call-level counts only.
- Conditions for operator disposition: D1 (global-object wording, AC-5); D2 (the T8 task did not read the EXP-105 record before its first browser call, although the T8 bounded instruction asked for it); D3 (two coordinate pointer moves in T8, outside the coordinate allowance; not clicks); D4 (no screenshot of the OK response in T7); P10 (purpose of the file-search calls in T1 attempt 2, T2 and T2 attempt 5 is not recorded). D5 (the denied transcript search in T7) is acknowledged.
- Reconciled controller totals (T1 to T8): actions 79; reads 125; reference clicks 51; coordinate clicks 1; hovers 5; mouse moves 2; wheel 2; text entries 6 (4 successful, 2 hook-blocked); Tab keys 5; tab selections 7; tab listings 9 (2 failed); successful snapshots 62 (2 errors); successful screenshots 47 (2 failed, Ref not found); finds 3; dialog opens 3; Cancel 2; OK 1; region adds 1; region field entries 6 (T7; no corrections); list opens 6; Designer Saves 2; Undo 0; Regenerate 0; Form opens 2; Form closes 1; hook errors 3; Ref not found 2; server-event errors 0; re-logins 0.
- Worker-record figures corrected by the reconciliation: cumulative tab listings and selections (the T7 pre-compaction calls were omitted); cumulative successful snapshots (54 recorded; 62 by the controller); cumulative reference clicks (44 plus "at least 2" recorded; 51 by the controller); the T2 attempt 5 cumulative snapshot total (22 recorded; 21 by the controller). The two lines in the cumulative section above are marked superseded.
- Denied file search (T7): a Grep of the worker session transcript was denied during T7 before a context summary. It was not retried, and this audit did not access the transcript.
- Qualification: the pre-compaction part of T7 is now itemized from the controller table (7 reference clicks; 2 text entries; 2 Tab keys; 10 snapshots; 2 screenshots; 1 tab listing and 1 selection; 2 list opens).
- Icon numbering: the T2 attempt 5 and T4 records describe the Edit control as the first adorner icon, while the T3 attempt record describes it as the second. Identity was checked by DOM id and tooltip in each task (documentation inconsistency only).
- Final Designer state (from T8): FX_CustomerPortal open and clean in User scope; Save and Undo disabled; no dialog, menu or prompt open.

## Worker-written-file inventory (cumulative)

- `experiments/EXP-105-hello-world-part-7-section-4a-fx-customer-portal-header-flexlayout.md` (created in attempt 1; rewritten in attempt 2 to add the T1 attempt 2 record and keep attempt 1)
- `evidence/EXP-105/t1-gate-browser-unavailable.md` (created in attempt 1)
- `evidence/EXP-105/t1b-gate-record.md` (created in attempt 2)
- `evidence/EXP-105/t1b-gate-01-designer-fresh-screenshot.png` (created in attempt 2)
- `evidence/EXP-105/t1b-gate-02-form-opened-canvas.png` (created in attempt 2)
- `evidence/EXP-105/t1b-gate-03-details-components-collapsed.png` (created in attempt 2)
- `evidence/EXP-105/t1b-gate-04-components-tree-expanded.png` (created in attempt 2)
- `evidence/EXP-105/t2-record.md` (created in attempt 3)
- `evidence/EXP-105/t2-gate-01-form-clean-components-tree.png` (created in attempt 3)
- `evidence/EXP-105/t2-toolbox-01-flexlayout-row-selected.png` (created in attempt 3)
- `evidence/EXP-105/t2-placement-02-components-tree-after-click.png` (created in attempt 3)
- `evidence/EXP-105/t2-name-01-editor-open-hook-blocked.png` (created in attempt 3)
- `evidence/EXP-105/t2b-record.md` (created in attempt 4)
- `evidence/EXP-105/t2b-gate-01-unsaved-placement-name-editor-open.png` (created in attempt 4)
- `evidence/EXP-105/t2c-record.md` (created in attempt 5)
- `evidence/EXP-105/t2c-gate-01-inherited-state-name-editor-active.png` (attempt 5)
- `evidence/EXP-105/t2c-name-02-flexlayoutheader-after-tab.png` (attempt 5)
- `evidence/EXP-105/t2c-name-03-reselected-properties-header.png` (attempt 5)
- `evidence/EXP-105/t2c-appearance-01-expanded-properties.png` (attempt 5)
- `evidence/EXP-105/t2c-appearance-02-after-properties-expand.png` (attempt 5)
- `evidence/EXP-105/t2c-theme-01-list-opened.png` (attempt 5)
- `evidence/EXP-105/t2c-theme-02-after-tab.png` (attempt 5)
- `evidence/EXP-105/t2c-save-01-after-single-save.png` (attempt 5)
- `evidence/EXP-105/t2c-adorner-01-hover-icon5.png` (attempt 5)
- `evidence/EXP-105/t2c-adorner-02-hover-edit-icon1.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-01-dialog-default-open.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-02-region0-selected-default.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-03-alignment-list-open.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-04-alignment-list-closed-no-change.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-05-pack-list-open.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-06-pack-list-closed-no-change.png` (attempt 5)
- `evidence/EXP-105/t2c-attrs-07-after-cancel-save-state.png` (attempt 5)
- `evidence/EXP-105/t3-record.md` (created in attempt 6)
- `evidence/EXP-105/t3-gate-01-form-clean-tree-expanded.png` (attempt 6)
- `evidence/EXP-105/t3-adorner-01-hover-icon1.png` (attempt 6)
- `evidence/EXP-105/t3-adorner-02-hover-icon2-tooltip.png` (attempt 6)
- `evidence/EXP-105/t3-dialog-01-start-one-region.png` (attempt 6)
- `evidence/EXP-105/t3-dialog-02-after-add-region.png` (attempt 6)
- `evidence/EXP-105/t3b-gate-01-dialog-open-two-regions-uncommitted.png` (T7, pre-compaction)
- `evidence/EXP-105/t3b-region0-01-id-header-alignment-middle.png` (T7, pre-compaction)
- `evidence/EXP-105/t3c-record.md` (T7 continuation)
- `evidence/EXP-105/t3c-region1-01-all-values-entered.png` (T7)
- `evidence/EXP-105/t3c-region0-01-selected-before-ok.png` (T7)
- `evidence/EXP-105/t3c-regions-grid-before-ok.png` (T7)
- `evidence/EXP-105/t3c-save-01-after-designer-save.png` (T7)
- `evidence/EXP-105/t4-record.md` (T8, T4)
- `evidence/EXP-105/t4-pre-close-01-clean-form-state.png` (T4)
- `evidence/EXP-105/t4-reopen-02-components-tree-expanded.png` (T4)
- `evidence/EXP-105/t4-reopen-03-components-tree-scrolled.png` (T4)
- `evidence/EXP-105/t4-reopen-04-properties-name-and-theme-class.png` (T4)
- `evidence/EXP-105/t4-reopen-05-edit-adorner-tooltip-hover.png` (T4)
- `evidence/EXP-105/t4-region0-01-index0-header-selected.png` (T4)
- `evidence/EXP-105/t4-region1-01-index1-user-selected.png` (T4)
- `evidence/EXP-105/t4-region1-02-index1-user-properties-scrolled.png` (T4)
- `evidence/EXP-105/t4-regions-grid-readback.png` (T4)
- `evidence/EXP-105/t4-final-01-clean-state-after-cancel.png` (T4)
- `evidence/EXP-105/final-acceptance-audit.md` (T9, documentation-only audit; created in T9)
- Controller-generated, not worker-written: `evidence/EXP-105/harness-audit-T1.md` to `harness-audit-T8.md`

Tool-generated files (written by the Playwright MCP, not by the worker's file tools; listed for confinement review): `evidence/playwright/page-2026-10-16T03-56-51-580Z.yml`, `page-2026-10-16T03-56-58-648Z.yml`, `page-2026-10-16T03-57-10-074Z.yml`, `page-2026-10-16T03-57-17-494Z.yml`, `page-2026-10-16T03-57-35-095Z.yml`, and console logs `console-2026-10-16T03-56-38-987Z.log`, `console-2026-10-16T03-56-38-988Z.log`. These sit under `evidence/playwright/` (outside the EXP-105 path) and were produced by the tool.

No other files were written.

## Knowledge state

- Browser recovery by the operator and tab listing succeeding in attempt 2: observed.
- FX_CustomerPortal open and clean in User scope with the root regions header, main and footer: observed (same session).
- Header region located above the first dotted divider: observed (same session; footer not visible on canvas in the captures).
- All EXP-105 steps (placement, naming, theme class, regions, save, readback): unverified (not attempted).

## Next permitted action

T4 is complete and the brief's steps are finished. No further step of this brief was performed. The Form is open and clean (Save and Undo disabled, no dialog). Any follow-up (for example a cross-session check, a runtime check, or cleanup of the changes made in EXP-102, EXP-103-R3 and EXP-105) is an operator decision not taken here.

## Knowledge state (updated)

- Placement by Toolbox selection plus one canvas click inside the header strip creates a FlexLayout as a child of Region00: header with an auto child Region00: UNKNOWN0: observed (one occurrence).
- The generated name for a placed FlexLayout is `flexLayout1_USER`: observed (one occurrence).
- Name entry by one plain `browser_type` fill followed by Tab sets the Properties Name value and the Components row to FlexLayoutHeader: observed (one occurrence, after the guard correction).
- The Properties header combo keeps showing `flexLayout1_USER (FlexLayout)` after the Name change, after one reselect and after the Save: observed; cause unresolved.
- Theme Class option FX_BlueBackground selected from the one-option ExtJS list and committed with Tab: observed (one occurrence).
- Designer Save with toast "Form [FX_CustomerPortal] and global object(s) were saved.", Save disabled afterwards: observed (one occurrence). Persistence across an ordinary close and reopen in the same session: observed in T4 (see the T4 section).
- Canvas adorner 1st icon tooltip "Edit FlexLayout Attributes": observed. Alignment options Top/Middle/Stretch and Pack options Start/Center/End: observed.
- Default attributes of the new FlexLayout: Type HorizontalBox, one region UNKNOWN0 (1 Flex, Horizontal, Top, Start; blank min/max/margin): observed (one occurrence, before any region edit).
- Regions set to header/user (region 0 `header` 1 Flex Horizontal Middle Start; region 1 `user` 1 Flex Horizontal Middle End, Default Margin 1,0,0,0), Regions grid before OK, OK once, one Designer Save with toast: observed (one occurrence, same session).
- Save persistence across an ordinary close and reopen in the same browser session, and the root regions after the save: observed (T4, one occurrence). Cross-session, database-level and runtime persistence: unverified.

## Outcome (operator, 2026-10-16)

Accepted (observed). **Hello World Part 7 section 4a is complete:** FX_CustomerPortal's root header region holds a nested FlexLayout **FlexLayoutHeader** (Theme Class **FX_BlueBackground**, Type HorizontalBox) with regions **header** (1 Flex, Horizontal, Middle, Start) and **user** (1 Flex, Horizontal, Middle, End, Default Margin 1,0,0,0), verified in the attributes dialog after an ordinary close and reopen. The operator decided acceptance and the dispositions below for EXP-105 only.

- Changed, for later cleanup (User-scope Form FX_CustomerPortal, EXP-102): new FlexLayout FlexLayoutHeader (generated name flexLayout1_USER, renamed) in Region00: header of flexlayoutPane_FX_CustomerPortal; Theme Class FX_BlueBackground; its auto region UNKNOWN0 -> header (Alignment Top -> Middle); one added region UNKNOWN1_USER -> user (Alignment Middle, Pack End, Default Margin 1,0,0,0). Two Designer Saves (T2 and T3), dialog OK once. No Regenerate, no Undo, no global object created.
- **Run R-20261016-114004-XV8X** (9 worker tasks, 15 cycles, about 42 active minutes; completed accepted). Pauses: the Mongoose Chrome CDP hang at T1 (the operator clicked the dead portal tab); two exact-value guard denials of the Name FlexLayoutHeader; one guard-hook I/O error in the regions task; the final disposition.
- **Exact-value guard amendment (operator, 2026-10-16):** 'header' removed from exact_values because the guard's case-insensitive substring check rejected FlexLayoutHeader. The guard is regenerated at each task start from the run's `brief_json` in `claude-data/harness.sqlite`, so the first edit (guard.json and the run brief file only) did not take effect; the second denial came from a guard written before the database row was corrected. The committed brief carries the amendment note.
- **Guard I/O error (T6):** one `browser_snapshot` got "Guard state unavailable: atomic update/audit I/O failed". The operator assistant found guard-state.json valid, no leftover temp or lock file, and the hook processing every later call normally (one-off, likely a transient Windows file lock). The operator chose to continue in the still-open dialog; T7 completed the regions from it.
- Screenshots viewed by the operator assistant: `t3-dialog-02-after-add-region` (two regions UNKNOWN0 and UNKNOWN1_USER, nothing edited), `t3c-region1-01-all-values-entered` (grid 0 header / 1 user, region 1 Middle, End, 1,0,0,0 before OK), `t4-region1-02-index1-user-properties-scrolled` (after reopen: same values).
- Findings (observed):
  1. **Placement:** Toolbox FlexLayout plus one canvas click in the header strip creates `flexLayout1_USER` as a child of Region00: header, with one auto region UNKNOWN0 (1 Flex, Horizontal, Top, Start). The Name is set by one fill plus Tab.
  2. **Properties header lag:** the Properties combo kept showing `flexLayout1_USER (FlexLayout)` after the rename, a reselect and the Save; it was correct after the reopen.
  3. **Edit FlexLayout Attributes** is a canvas adorner with DOM id `flexlayouteditadorner-...` (tooltip confirmed); its position among the adorner icons differed between tasks, so identify it by tooltip or id, not position.
  4. **Region add:** the Regions + button appends `UNKNOWN<n>_USER` (1 Flex, Horizontal, Top, Start). Alignment options Top/Middle/Stretch; Pack options Start/Center/End. Default Margin opens its editor on the second click.
  5. Both Saves showed "Form [FX_CustomerPortal] and global object(s) were saved." (EXP-103-R3's Save showed no message.) This is the standard Designer Save toast, recorded in more than 100 earlier Saves of plain FX_ Forms.
- Operator rulings (EXP-105 only): D1 resolved (toast wording, finding 5); D2 (T8 read the record late), D3 (two pointer moves, not clicks), D4 (no OK screenshot) and P10 (file-search purposes not recorded) accepted as procedural deviations with no effect on the result; D5 (denied Grep of the worker's own transcript in T7) acknowledged. Pre-compaction T7 counts were reconciled from the controller table in the final audit.
- Counts (controller, T1-T8): reference clicks 51; coordinate clicks 1; text entries 6 (4 successful, 2 hook-blocked); dialog opens 3 (Cancel 2, OK 1); region adds 1; region field entries 6, corrections 0; Designer Saves 2; Undo 0; Regenerate 0; Form closes / reopens 1 / 1 (no save prompt); hook errors 3; server-event errors 0; re-logins 0.
- Limits: same-session UI evidence only; root region attributes not re-read after the change (names and order only).
- Confinement (git status): only `evidence/EXP-105/`, this record and the amended brief changed.
- Next: Part 7 section 4b: the Static header title StaticHeader in the header region (string FX_sCustomerPortal "Customer Portal" created through the caption ellipsis, Theme Class FX_WhiteHeader, Justification Left, Width 40, Height 1.5, No Colon True, margin 2,0,0,0).
