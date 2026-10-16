# EXP-103-R2: Hello World Part 7 Section 3 replay on FX_CustomerPortal (fresh Designer)

Status: **BLOCKED (observed).** Selection gate **passed** (1 of 1 selections; no server-event error; Properties Design group populated). Read-only dialog discovery completed and the dialog left with Cancel; Save disabled. **Configuration cannot proceed:** the Unit list has no option named `Form` (options are `FormUnit` and `Flex`), and the brief requires stopping before OK in that case. No attribute was changed; no OK, Designer Save, close/reopen readback or Regenerate was performed. The Change, OK, Save and readback steps remain **not performed**. The worker did not substitute `FormUnit`, and this record does not claim equivalence between `FormUnit` and the tutorial's `Form`.

Scope: User (ScopeName = operator's user). Target: `FX_CustomerPortal` (created in EXP-102), component `flexlayoutPane_FX_CustomerPortal` (FlexLayout).
Predecessors: [[EXP-102]] (Form created, collections and one Regenerate), [[EXP-103]] (blocked by a server-event error on the FlexLayout selection), [[EXP-104]] (FX_FlexProbe01 isolation probe: fresh Flex > Basic Form FlexLayout loads normally).
Evidence: `evidence/EXP-103-R2/`
Run: R-20261016-095917-Rw0x. Task T1 = cycle 0 (gate and read-only discovery, 19 browser actions). Task T2 = cycle 1 (documentation-only final blocked audit; no browser operation, no Mongoose mutation). Date: 2026-10-16.

Files referenced: `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md`, `experiments/EXP-103-hello-world-part-7-section-3-fx-customer-portal-root-regions.md`, `experiments/EXP-104-flex-layout-selection-isolation-probe.md`.

## Sources reviewed (before any browser interaction)

- `AGENTS.md` (full).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 133-143 (Section 3: Vertical Box root; header 4 Form Fill; main 1 Flex Fill; footer 2 Form Fill) and lines 47-61 (Flex Layout concepts table).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- Outcome sections only: EXP-102 (lines 943-962), EXP-103 (lines 328-342), EXP-104 (lines 343-358). No other part of these records was read.
- Not read, by brief: Part 7 Section 4 and later.

## Starting state (observed)

- Browser tabs listed once before any selection: tab 0 = Mongoose Designer (`MGForm=FX_FlexProbe01`, the Designer URL), tab 1 = portal page "Mongoose". Tab 0 was already the current tab; no tab was selected.
- Session: usable. No "Session Expired" modal, no sign-in page. No re-login performed.
- Designer on entry: Form `FX_FlexProbe01` open, clean (Save disabled, Undo disabled, Regenerate disabled), ScopeType User. No Error dialog visible.
- Screenshot: `evidence/EXP-103-R2/t1-01-gate-flexprobe01-open-clean.png` (viewed; shows FX_FlexProbe01 tab, Save greyed, scope bar "User").

## Step 1: close FX_FlexProbe01 (clean)

- Clicked the Form-tab close control `closable FX_FlexProbe01` once.
- No save prompt. No dialog. Designer became empty (no Form tab).
- Evidence: `t1-02-after-flexprobe01-close.png` (viewed: empty canvas, no dialog), `t1-02-after-flexprobe01-close-snapshot.md` (tool snapshot file).
- FX_FlexProbe01 was not otherwise touched.

## Step 2: reopen FX_CustomerPortal through the Form menu recent-forms entry

- Form menu > recent-forms entry `FX_CustomerPortal` (once). Select Form OK was not used.
- Result: Form tab `FX_CustomerPortal` opened; URL `MGForm=FX_CustomerPortal`; Save disabled; Regenerate Form disabled; scope User; no error.
- Evidence: `t1-03-customerportal-opened-recent-forms.png` (viewed: FX_CustomerPortal, Form Type Flex, Name FX_CustomerPortal, Save greyed, User scope; Details panel still collapsed at that point, so the screenshot does not show the component tree).
- Details panel expanded (view toggle only), Components tab selected, Components grid "Expand" clicked (view only). Tree showed `Pane (00)` > `flexlayoutPane_FX_CustomerPortal` (FlexLayout, row 0 0) > `Region00: FLEX_PANE_REGION0`, `Region01: FLEX_PANE_REGION1`, `Region02: FLEX_PANE_REGION2`.

## Step 3: selection gate (decisive): PASSED

- One click on the `flexlayoutPane_FX_CustomerPortal` row in Details > Components.
- **Error dialog: none** appeared (checked immediately by screenshot and by snapshot). No server-event error text.
- **Properties grid: populated.** Dropdown reads `flexlayoutPane_FX_CustomerPortal (FlexLayout)`; Design group shows Name `flexlayoutPane_FX_CustomerPortal`, Description (blank), Type `FlexLayout`, From Device Master `True`. This matches the Design group observed for FX_FlexProbe01 in EXP-104 (t2-11).
- Canvas: three columns (no rows); the four small FlexLayout icons at the top left.
- Evidence: `t1-04-selection-gate-flexlayout-selected.png` (viewed; shows the Properties Design group, the Components row selected with its three regions, Save greyed).
- Selection was not retried.

## Step 4: canvas control tooltip

- Hovered the first small FlexLayout icon at the top left of the canvas. Tooltip read **"Edit FlexLayout Attributes"**.
- Evidence: `t1-05-canvas-tooltip-edit-flexlayout-attributes.png` (viewed; tooltip visible).

## Step 5: Edit FlexLayout Attributes (read-only discovery)

Dialog opened once through the canvas icon. Dialog title `FlexLayout`. Dialog left with **Cancel** (once). **No value was changed**; Undo in the dialog stayed disabled throughout.

Evidence: `t1-06-flexlayout-dialog-opened-readonly.png` (viewed: Attributes > Design > Type `HorizontalBox`; Regions grid with 3 rows, each `1 Flex`; Properties pane empty until a region is selected).

### Attributes

| Attribute | Value as displayed | Options (list opened once, closed without choosing) |
| --- | --- | --- |
| Type | `HorizontalBox` (tooltip: "Container type of this FlexLayout.") | **HorizontalBox** (selected), **VerticalBox** |

Evidence: `t1-07-type-list-opened-options.png` (viewed: list shows HorizontalBox selected and VerticalBox below it); `t1-08-type-list-closed-no-change.png` (viewed: list collapsed, value still HorizontalBox).

### Regions grid (Index, ID, Length as shown in the grid)

| Index | ID | Length |
| --- | --- | --- |
| 0 | FLEX_PANE_REGION0 | 1 Flex |
| 1 | FLEX_PANE_REGION1 | 1 Flex |
| 2 | FLEX_PANE_REGION2 | 1 Flex |

### Per-region properties (each row selected to view it; no value changed)

| Region | ID | Length | Unit | Orientation | Alignment | Pack | Minimum Length | Maximum Length | Default Margin |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | FLEX_PANE_REGION0 | 1 | Flex | Vertical | Left | Start | blank | blank | blank |
| 1 | FLEX_PANE_REGION1 | 1 | Flex | Vertical | Left | Start | blank | blank | blank (snapshot text only; not visually inspected) |
| 2 | FLEX_PANE_REGION2 | 1 | Flex | Vertical | Left | Start | blank | blank | blank |

- Region 0 evidence: `t1-09-dialog-region0-selected-readonly.png` (viewed; ID, Length, Unit, Orientation, Alignment, Pack and blank Minimum/Maximum/Default Margin visible).
- Region 2 evidence: `t1-10-dialog-region2-selected-readonly.png` (viewed; same values visible).
- Region 1: values from the snapshot text only.
- The Appearance and Behavior groups below Default Margin were not expanded and were not read.

### Unit and Orientation options (each list opened once, closed without choosing)

- **Unit** (region 2 shown; the options are the same list): **FormUnit**, **Flex** (currently Flex). **There is no option named exactly "Form".** Evidence: `t1-11-region2-unit-list-opened-options.png` (viewed).
- **Orientation** (region 2): **Fill**, **Horizontal**, **Vertical** (currently Vertical). Evidence: `t1-12-region2-orientation-list-opened-options.png` (viewed).
- Both lists were collapsed by clicking their trigger again. Values unchanged (Unit Flex, Orientation Vertical in the snapshot taken after collapse). Evidence: `t1-13-dialog-before-cancel-readonly-state.png` (viewed: Orientation Vertical, no list open).
- Alignment and Pack lists were not opened (not in the T1 instruction).

### Leaving the dialog

- Clicked **Cancel** once. Dialog closed. Snapshot and screenshot afterwards: no dialog; Save **disabled**; Undo disabled; Form `FX_CustomerPortal` open and selected; scope User.
- Evidence: `t1-14-after-cancel-save-disabled.png` (viewed: no dialog, Save greyed, FX_CustomerPortal tab, User scope). The Components tree had collapsed back to `Pane (00)` after Cancel; this is view state only.

## Findings (observed only)

1. **Selection gate on FX_CustomerPortal's FlexLayout passed (1 of 1 selections).** No server-event error and the Properties Design group populated. In EXP-103 the same selection raised the error 3 of 3 times. This run differs from EXP-103 in that FX_FlexProbe01 was closed and FX_CustomerPortal was reopened from the recent-forms entry first. One success does not establish the cause; see Open questions.
2. The dialog Type list is `HorizontalBox` / `VerticalBox`. The value `VerticalBox` exists as an option (the tutorial's "Vertical Box").
3. The three regions are unchanged from the EXP-102 wizard defaults: `FLEX_PANE_REGION0-2`, each Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start.
4. **The Unit list does not contain "Form".** Its options are `FormUnit` and `Flex`. The tutorial's Section 3 specifies Unit **Form**. The brief's Change step says that if a named option does not exist the run stops blocked with Cancel before OK. No value was chosen in T1.
5. Orientation options are Fill, Horizontal and Vertical; "Fill" exists as the brief requires.
6. The canvas first icon tooltip is "Edit FlexLayout Attributes" (matches the brief).

## Action audit (cumulative for EXP-103-R2; T1 actions, T2 added none)

Browser actions in T1 (19 total: 18 clicks + 1 hover). Tab listing: 1. Tab selections: 0. Screenshots: 14. Snapshots: 20 (plus 1 `browser_find`, read-only, not used for any click).

**Reconciliation (worker enumeration of the T1 tool calls; the harness controller log was not available to the worker, so the operator's controller count is not independently checked here):**
- Browser actions (mutating or interactive): **19** = 18 clicks + 1 hover. The 18 clicks are: Form-tab close (1), Form menu (2), recent-forms entry (3), Details Expand Panel (4), Components tab (5), Components grid Expand (6), FlexLayout row (7), canvas icon (8), Type list open (9), Type list close (10), region 0 row (11), region 1 row (12), region 2 row (13), Unit list open (14), Unit list close (15), Orientation list open (16), Orientation list close (17), Cancel (18).
- Reads: **36** = 20 snapshots + 14 screenshots + 1 `browser_find` + 1 tab listing. This matches the figure stated in the T2 brief.
- Errors: **0**. No "Ref not found", no timeout, no tool error, no server-event error, no Error dialog.
- Prohibited-tool hits: **0**. Only `browser_tabs`, `browser_snapshot`, `browser_take_screenshot`, `browser_find`, `browser_click` and `browser_hover` were called. No `browser_evaluate`, no run-code, no Bash, no console or network tool. (Each click result carried a tool-generated "Ran Playwright code" block; these describe the wrapper's own locator and were not written by the worker.)
- T2 browser actions: **0**. T2 reads: **0**.
- Cumulative totals (T1 + T2): actions 19, reads 36, errors 0, prohibited-tool hits 0.

| Item | Count | Detail |
| --- | ---: | --- |
| Form closes | 1 | FX_FlexProbe01, clean; no prompt |
| Form opens (recent-forms) | 1 | FX_CustomerPortal; no Select Form use |
| Error dialogs | 0 | none seen at any point |
| FlexLayout selections | 1 | flexlayoutPane_FX_CustomerPortal; no error; Properties populated |
| Edit FlexLayout Attributes opens | 1 | via canvas icon (tooltip confirmed by hover) |
| Dialog left by | Cancel 1 | OK 0 |
| List opens (Type / Unit / Orientation) | 1 / 1 / 1 | each closed by re-clicking its trigger, no option chosen |
| Type changes | 0 | |
| Per-region field entries | 0 | region rows selected 3 times (view only) |
| Corrections | 0 | |
| OK clicks | 0 | |
| Designer Saves | 0 | |
| Prompts | 0 | none (close of FX_FlexProbe01 or any other) |
| Regenerate clicks | 0 | |
| Delete / trash clicks | 0 | |
| View clicks (panel/tab/grid expand) | 3 | Details Expand Panel; Components tab; Components grid Expand |
| Errors (tool or Mongoose) | 0 | |
| Re-logins | 0 | session not expired |
| Unloads / checkout / FormSync / deployment | 0 | |

## Worker-written file inventory (T1 and T2)

Category A: written by the worker (paths repo-relative):

- `experiments/EXP-103-R2-hello-world-part-7-section-3-fx-customer-portal-root-regions-replay.md` (this record; created)
- `evidence/EXP-103-R2/t1-01-gate-flexprobe01-open-clean.png`
- `evidence/EXP-103-R2/t1-02-after-flexprobe01-close.png`
- `evidence/EXP-103-R2/t1-02-after-flexprobe01-close-snapshot.md`
- `evidence/EXP-103-R2/t1-03-customerportal-opened-recent-forms.png`
- `evidence/EXP-103-R2/t1-04-selection-gate-flexlayout-selected.png`
- `evidence/EXP-103-R2/t1-05-canvas-tooltip-edit-flexlayout-attributes.png`
- `evidence/EXP-103-R2/t1-06-flexlayout-dialog-opened-readonly.png`
- `evidence/EXP-103-R2/t1-07-type-list-opened-options.png`
- `evidence/EXP-103-R2/t1-08-type-list-closed-no-change.png`
- `evidence/EXP-103-R2/t1-09-dialog-region0-selected-readonly.png`
- `evidence/EXP-103-R2/t1-10-dialog-region2-selected-readonly.png`
- `evidence/EXP-103-R2/t1-11-region2-unit-list-opened-options.png`
- `evidence/EXP-103-R2/t1-12-region2-orientation-list-opened-options.png`
- `evidence/EXP-103-R2/t1-13-dialog-before-cancel-readonly-state.png`
- `evidence/EXP-103-R2/t1-14-after-cancel-save-disabled.png`

Category A total: 1 record (created by the worker's Write call in T1; edited in T2 by the Edit calls that produced this text) + 15 evidence files (14 PNG captures written by the screenshot tool at the worker's requested paths, + 1 snapshot file written by the snapshot tool at the worker's requested path). T2 created no new files.

Category B: incidental files written by the browser tool, not chosen by the worker, outside the EXP-103 paths:
- `evidence/playwright/page-2026-10-16T01-59-46-394Z.yml` through `evidence/playwright/page-2026-10-16T02-01-46-356Z.yml`: one automatic page-snapshot file per browser action result. Counted in the tool outputs as **19** (one per click or hover: the 18 clicks and the 1 hover). The exact names are as reported by the tool output; the list was not verified against disk.
- `evidence/playwright/console-2026-10-16T01-59-28-812Z.log`: one console-log file reported in the first tab-listing output. Its contents were not opened (console inspection is outside the brief).
- Total category B as reported: 20 files.

Category C: files read but not written: `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` (lines 47-61 and 133-143); `recipes/session/session-expiry-and-stale-designer.md`; the Outcome sections of `experiments/EXP-102-…md`, `experiments/EXP-103-…md` and `experiments/EXP-104-…md`; the 14 evidence PNG captures (15 image Read calls in T1; `t1-08` was viewed twice); the T1 snapshot file. The Grep (outcome-heading search) and Glob (filename listing) returned only headings and names.

No other file was written or edited. Earlier experiment records, recipes, tutorial sources, AGENTS.md and assets were only read.

## Acceptance check status (final, after T2)

- **AC-1: supported (met).** Sources reviewed (see Sources section); session usable; User scope confirmed; FX_FlexProbe01 closed clean (1 close, no prompt); FX_CustomerPortal reopened through the recent-forms entry; selection gate recorded with a screenshot (Error dialog: none; Properties Design group populated: yes); dialog recorded read-only (Type value and options, every region's values, Unit and Orientation options); left with Cancel; Save disabled. Evidence: `t1-01`, `t1-02`, `t1-03`, `t1-04`, `t1-06` to `t1-14`.
- **AC-2: failed at its prerequisite (observed).** Type VerticalBox exists as an option, but the Unit list has no `Form` option (only `FormUnit` and `Flex`). The brief requires stopping before OK in that case. No Type change, no region entry, no correction, no OK click and no Designer Save was performed. Required before-OK, OK, Save and canvas screenshots do not exist, because the Change step was not reached. This is not a passing result for AC-2.
- **AC-3: not attempted.** No close/reopen readback was performed after T1. The readback step is gated on AC-2.
- **AC-4: held on final reconciliation, pending operator review.** Per the worker's own enumeration, T1 and T2 changed no FlexLayout attribute, no component, no region, no Form property, no collection and no Form. No Regenerate, runtime action, unload, checkout action, FormSync or deployment. User scope only. Dialog opens were each left with Cancel (no OK). The only mutation-adjacent actions were list opens and closes (no option chosen), confirmed by the unchanged values and the disabled Undo in the dialog and Save after Cancel. The T1 task stopped at the T1 boundary; T2 stopped at the documentation boundary. Operator git review remains authoritative.
- **AC-5: this record.** Gate result, dialog inventory, action audit (reconciled above), file inventory and final state are recorded. Selection-gate result, stated plainly: **server-event error on FX_CustomerPortal's FlexLayout in the fresh Designer: no** (1 of 1 selections).

## Open questions and blockers

1. **Blocker: the required Unit option "Form" does not exist.** The Unit list offers `FormUnit` and `Flex`. Two of the three required regions (header and footer) need Unit Form. Whether `FormUnit` is the tutorial's Form unit is **unresolved**; this record does not claim equivalence. The operator must decide whether to accept `FormUnit` for a future replay, or to treat the tutorial's Form unit as unavailable in this build. Until that decision, the Change step stays blocked.
2. **Cause of the EXP-103 server-event error remains unresolved.** This run's FlexLayout selection did not raise it (1 of 1). Possible causes (FX_CustomerPortal's collections, its Regenerate, the Designer's state, or the product build) are not established by this run. Do not treat this as cross-session, database-level or replay verification.
3. The next permitted step, if the operator decides: a new bounded task (fresh read-only gate, then Type VerticalBox and the three regions, OK once, one Save, readback). It is **not performed** and this run requests no further browser activity.

## Knowledge state

- Selection gate on FX_CustomerPortal's FlexLayout: **observed** (1 of 1, no error).
- Type options `HorizontalBox`, `VerticalBox`: **observed**.
- Region defaults (ID, Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start, blank Minimum/Maximum/Default Margin): **observed**.
- Unit options `FormUnit`, `Flex` (no `Form`): **observed**.
- Orientation options `Fill`, `Horizontal`, `Vertical`: **observed**.
- Canvas tooltip "Edit FlexLayout Attributes": **observed**.
- Cancel leaves Save disabled with no change: **observed**.
- Cause of the EXP-103 error: **unresolved**.
- Any procedure: **candidate_procedure at most** (no Change or save performed; nothing replay-verified).
- Unit option `FormUnit` as equivalent to the tutorial's `Form`: **unresolved** (not claimed).

## Final audit (worker, task T2, documentation only)

**Outcome: BLOCKED (observed).** Selection gate PASSED (1 of 1 selections, no server-event error, Properties Design group populated). Configuration cannot proceed: the required Unit `Form` is absent; the available options are `FormUnit` and `Flex`. No Change, OK, Designer Save, readback or Regenerate was performed. T2 performed no browser operation and no Mongoose mutation.

**Source-reading review (explicit, with deviations):**
- Brief-listed reads matched their ranges: `AGENTS.md` (full); `hello-world-pt7.md` lines 47-61 and 133-143 (read as offset/limit windows); `session-expiry-and-stale-designer.md` (full).
- Outcome sections (EXP-102, EXP-103, EXP-104): read as fixed 60-line windows starting at each Outcome heading (lines 943, 328, 343). Each window ended at the end of its file, so the displayed text was the Outcome section and nothing after it. Deviation: the window was line-count based rather than section-bounded. Treated as no violation, but disclosed here.
- Grep (outcome-heading pattern) and Glob (filename patterns) returned headings and names only.
- Section 4 and later of the tutorial were not read.
- Uncertainty: the worker did not open the EXP-102/103/104 records in full. The brief's content was not re-verified against them beyond the Outcome sections.

**Deviations and uncertainties in the browser work (T1), disclosed, not silently accepted:**
1. Three view-state clicks were made before the selection gate: Details "Expand Panel", the Components tab, and the Components grid "Expand". These do not change Mongoose data but were not named in the T1 instruction. Counted as View clicks (3).
2. The Unit list was opened once for region 2 only. The brief asks for the Unit and Orientation options once each; the options were read from region 2 and assumed to be the same list for the other regions. Not verified per region.
3. Region 1's Minimum Length, Maximum Length and Default Margin were read from snapshot text only (no screenshot).
4. The page footer showed "Console: 2 errors, 0 warnings" throughout. Console inspection is outside the brief, so the errors were not opened or examined. They are not established as related to the Designer state.
5. Each click result carried a tool-generated "Ran Playwright code" block (wrapper locators such as element IDs). The worker did not write those blocks and did not invoke any evaluate or run-code tool. The worker cannot independently verify how the wrapper executed each action.
6. The dialog's option lists were each opened and collapsed by re-clicking the combobox trigger. The brief requires "close without choosing"; the trigger re-click was the closing method used. Values were confirmed unchanged afterward (Type HorizontalBox; region 2 Unit Flex, Orientation Vertical).

**Reconciliation against controller records:** the worker does not have access to the harness controller's action log in this session. The worker's own enumeration gives 19 browser actions (18 clicks + 1 hover), 36 reads (20 snapshots + 14 screenshots + 1 find + 1 tab listing), 0 errors and 0 prohibited-tool hits. These match the figures stated in the T2 brief. Independent confirmation against the controller log is not possible from the worker side; operator review is authoritative.

**Final Designer state (observed at the end of T1; no browser action in T2):**
- Form `FX_CustomerPortal` open and clean (Save disabled, Undo disabled), ScopeType User, component tree collapsed to `Pane (00)` after Cancel. Last observed in `t1-14-after-cancel-save-disabled.png`.
- No dialog, menu, prompt or unsaved change open. FX_FlexProbe01 was closed clean in T1 and not reopened. No region was added, deleted or renamed. The second browser tab (portal page "Mongoose") was not selected, navigated or changed.
- Canvas arrangement: three columns (the FlexLayout's Type is `HorizontalBox`), not rows. The Components tree shows `Pane (00)` > `flexlayoutPane_FX_CustomerPortal` > `Region00: FLEX_PANE_REGION0`, `Region01: FLEX_PANE_REGION1`, `Region02: FLEX_PANE_REGION2` (observed in T1 `t1-04`).

**Evidence paths:** `evidence/EXP-103-R2/t1-01-gate-flexprobe01-open-clean.png` through `evidence/EXP-103-R2/t1-14-after-cancel-save-disabled.png` (14 PNG captures), plus `evidence/EXP-103-R2/t1-02-after-flexprobe01-close-snapshot.md`.

**Acceptance-check evidence map:** AC-1 → t1-01, t1-02, t1-03, t1-04, t1-05, t1-06 to t1-14. AC-2 → none (not reached; the before-OK, OK, Save and canvas captures do not exist). AC-3 → none (not reached). AC-4 → the audit above plus the final-state capture t1-14. AC-5 → this record.

**Next step (reported, not performed):** only a new bounded task, decided by the operator, could continue. The first step would be a fresh read-only gate. Nothing else is requested of the browser by this run.

## Outcome (operator, 2026-10-16)

**Blocked (observed), with the decisive question answered.** In a freshly reloaded Designer, selecting flexlayoutPane_FX_CustomerPortal raised **no** server-event error and the attributes dialog loaded fully. So FX_CustomerPortal is healthy, and the EXP-103 failures came from a Designer left in a failed server-call state. The run stopped correctly before any change because the brief's Unit value "Form" does not exist; the dialog offers "FormUnit". Nothing was changed or saved. The operator accepted the blocked result.

- **Run R-20261016-095917-Rw0x** (2 worker tasks): T1 gate (FX_FlexProbe01 closed clean; FX_CustomerPortal reopened from recent forms), selection test passed, read-only dialog discovery, Cancel; T2 documentation-only audit. No pause; the coordinator closed it as blocked. Harness: 0 flags, 0 errors.
- Screenshots viewed by the operator assistant: `t1-07` (Type options **HorizontalBox**, **VerticalBox**), `t1-11` (Unit options **FormUnit**, **Flex**), `t1-12` (Orientation options **Fill**, **Horizontal**, **Vertical**).
- Findings (observed):
  1. FX_CustomerPortal's FlexLayout selects and loads normally in a fresh Designer: Type HorizontalBox; regions FLEX_PANE_REGION0-2 each Length 1, Unit Flex, Orientation Vertical, Alignment Left, Pack Start, Minimum/Maximum Length and Default Margin blank (same defaults as FX_FlexProbe01 in EXP-104).
  2. **Option names for briefs:** Type HorizontalBox / VerticalBox; Unit FormUnit / Flex (the tutorial's "form units" = FormUnit); Orientation Fill / Horizontal / Vertical. Alignment and Pack lists not opened.
  3. **Lesson:** a Designer that hit the server-event error stays broken, even for a Form close (EXP-103, EXP-104 T1), until the operator reloads it. Briefs should stop at the first server-event error and ask for a reload, not try other routes.
- Counts: FX_FlexProbe01 closes 1 (clean); FX_CustomerPortal reopens 1 (recent forms); FlexLayout selections 1 (no error); dialog opens 1 (Cancel 1, OK 0); list opens 3 (Type, Unit, Orientation; nothing chosen); value changes 0; Saves 0; Regenerate 0; re-logins 0.
- Confinement (git status): only `evidence/EXP-103-R2/` and this record were written by the run.
- Next: EXP-103-R3 with the observed option names (Type VerticalBox; header 4 FormUnit Fill, main 1 Flex Fill, footer 2 FormUnit Fill).
