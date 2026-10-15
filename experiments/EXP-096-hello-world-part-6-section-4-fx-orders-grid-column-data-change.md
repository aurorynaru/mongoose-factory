# EXP-096: Hello World Part 6 Section 4: FX_Orders grid column Data Change = FX_CalcOrderTotal

Status: **observed; T1 to T4 complete (same session).** T1 (gates, runtime control, discard), T2 (grid-column Data Change, one Designer Save, one close/reopen readback) and T3 (runtime grid check: unsaved grid Count 2 to 3 and Item dumbbell to eggs, discard by No, reopen verification, clean final close) are complete. The control (T1, before the Designer change) showed no recalculation (90.00); after the change (T3) Order Total recalculated to 135.00 and then 20.97. T4 (documentation-only audit, zero browser calls) reconciled the worker counts with the controller audits and recommends ACCEPTED AS OBSERVED, conditional on an operator decision on the outstanding T1 reading-scope deviation (not decided here). Findings are same-session UI observations only. See `evidence/EXP-096/T4-final-acceptance-report.md`.

Scope: Form `FX_Orders` (User scope). Target: `Events > Data Change = FX_CalcOrderTotal` on the grid columns `FX_ItemGridCol` and `FX_CountGridCol`, then one Designer Save. Findings are observed only. Same-session UI evidence only; no cross-session or database durability is claimed.

## Why this experiment

Hello World Part 6 section 4 (transcript 03:43-04:16) connects the existing `FX_CalcOrderTotal` event to the grid columns, so that changes made inside the grid also recalculate Order Total. EXP-095 wired the event only to the detail-view controls `FX_ItemCombobox` and `FX_CountEdit`. The tutorial states that a form-level trigger does not propagate to the grid automatically. This experiment tests that as a control (before the change), then the post-change grid behavior.

## Sources reviewed (T1, before any browser interaction)

- `AGENTS.md`, read in full.
- `docs/mongoose/transcripts/hello-world-pt6.md`: Section 4 header and body, lines 136-149 (03:43-04:16). Other lines were not read in full. A heading-only Grep was run to locate sections.
- `recipes/components/apply-component-class.md`, read in full (runtime steps, grid splitter step, pitfalls).
- `recipes/session/session-expiry-and-stale-designer.md`, read in full.
- `experiments/EXP-092-...md`: Outcome section only (line 586 to end). One heading-only Grep call was made first to locate section line numbers (corrected in T4: the controller audit shows one search, and its output was not heading-only; see Deviations and the T4 note).
- `experiments/EXP-095-...md`: Outcome section only (line 956 to end). The same heading-only Grep was used.
- This record did not exist at the first Read attempt (one non-browser Read error, see Deviations). It was created in T1.

Carried forward from the EXP-092 and EXP-095 Outcomes (observed, not re-tested here):
- EXP-092: the grid-column Item choice fills Item Description and Cost before Save. Order Total did not recalculate before Save. The splitter drag is coordinate-based. The widened layout did not persist.
- EXP-095: `FX_CalcOrderTotal` is a Form Script Method, `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))`, wired to `FX_ItemCombobox` and `FX_CountEdit` Data Change. Runtime Count 2 to 3 gave Order Total 135.00 and Item to eggs gave 20.97 (both unsaved). The grid columns were not wired yet.

## Session and tab handling (T1)

- Tab list taken before the first selection: 2 tabs. Tab 0 = Designer (`designer/Default.aspx`, `MGForm=FX_Orders`). Tab 1 = Web Client inside the Infor OS portal (`mingle-portal...`, the Mongoose app with the runtime in an iframe).
- Tab select index 1 (Web Client) succeeded after the list. Tab select index 0 (Designer, final check) succeeded.
- No "Session Expired" modal, no Infor sign-in page and no server-event error were seen. No re-login was performed. The Designer's Edit menu was not opened, so the server-event error was not checked directly.
- The Web Client had FX_Orders already open at T1 start, in add-mode (Order Number 3 placeholder), with Save disabled. It was closed once cleanly (see Runtime control).
- Portal notification banner: none visible.

## Gate 1: Designer identity, User scope, clean state, handler and Data Change (AC-1; read-only)

| Check | Observed | Evidence |
|---|---|---|
| Form and scope | Designer tab title FX_Orders; status bar ScopeType User. The ScopeName shows the configured Mongoose user (not recorded here). | `gate-01-designer-form-tab-initial.png` |
| Clean state | Save and Undo greyed. The accessibility tree shows `Save [disabled]`. | `gate-01`, `gate-13-designer-clean-final-t1.png`; final `find` of Save returned `[disabled]` |
| Handler row | Details > Event Handlers: `FX_CalcOrderTotal`, Sequence 0, Response Type Form Script Method, Disabled false, Response Parameters `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))` | `gate-02-event-handlers-row.png`, `gate-03-event-handler-selected-properties.png` |
| FX_ItemCombobox Data Change | `FX_CalcOrderTotal` (Properties > Component > Events) | `gate-09-itemcombobox-events-after-chevron.png` (`gate-06` shows the component selected with Events still collapsed) |
| FX_CountEdit Data Change | `FX_CalcOrderTotal` | `gate-10-countedit-events.png` |
| FX_ItemGridCol Data Change | blank (Primary, Data Change, Lose Focus, Gain Focus blank; Drag From/Drop On 0 event(s)) | `gate-11-itemgridcol-events.png` |
| FX_CountGridCol Data Change | blank (same as above) | `gate-12-countgridcol-events.png` |

Result: the gate matches the brief. AC-1 is met (observed). No Designer change was made in T1. The Properties panel was used only to read values. Selecting rows and expanding groups are view state, not changes.

Designer view notes: the Details panel was collapsed at T1 start and was expanded once. The Components tree was expanded with its Expand control. The Event Handlers handler row was selected to show its properties. The Events group was expanded for each component. An ArrowRight key press moved focus to the Events value cell without changing a value (`gate-08-itemcombobox-events-open.png`). The Events group was then expanded with a coordinate click on its chevron (`gate-09`).

## Runtime baseline (T1, before any Designer change)

Route: the Web Client Form menu, recent-forms entry `FX_Orders` (operator-approved route, EXP-093). Filter in Place was switched on. All criteria were left blank and F4 was pressed once.

| Order | Customer ID | Customer Name | Address | Item | Item Description | Cost | Count | Order Total | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX001 | Factory test one | 1 Factory Street | dumbbell | 45 pound iron | 45.00 | 2 | 90.00 | `runtime-05-baseline-after-f4.png` (detail); accessibility row `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00` |
| 2 | FX002 | Factory test two | 2 Factory Street | eggs | cage free | 6.99 | 1 | 6.99 | `runtime-06-baseline-order2.png` (detail); accessibility row `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99` |

Baseline verified: both orders match the brief's expected values (AC-2 prerequisite, met).

## Runtime control (T1): unsaved grid Count 2 to 3 before any Designer change (AC-2)

Steps performed:
1. Initial state: FX_Orders was open in add-mode (Order Number 3 placeholder, Save disabled). It was closed once with its Form-tab close control. No prompt appeared (`runtime-01-webclient-after-close-initial.png` shows the Explorer with no form).
2. Form menu > recent-forms `FX_Orders` (`runtime-02-form-menu-open.png`, `runtime-03-opened-from-recent-before-fip.png`).
3. Filter in Place clicked; criteria blank (`runtime-04-fip-blank-criteria.png`).
4. F4 pressed once. Order 1 loaded (`runtime-05`).
5. Order 2 checked by clicking its row-number cell (`runtime-06`). Then order 1 was selected again by its row-number cell (`runtime-07`).
6. Layout before the splitter drag: only the Order Number column of the grid was visible (`runtime-07-order1-selected-after-row-click.png`). Count, Item and Order Total were not visible, so the splitter was dragged once (coordinate drag from x=393 to x=1000 at y=520, the handle between the grid and detail view).
7. Layout after the drag: Order Number to Count are visible for both rows. Order Total is just past the right edge of the grid and is visible after the Tab in step 9 (`runtime-08-splitter-after-drag.png`, `runtime-10`). The detail view moved to the right. No layout prompt appeared.
8. Grid order 1 Count cell clicked once (`runtime-09-count-cell-clicked.png`; the cell opened for editing with "2" highlighted). Ctrl+A pressed once (whole content selected). "3" typed once. Tab pressed once.
9. Result: `runtime-10-control-after-grid-count-3-unsaved.png`.
10. Close with the Form-tab close control, then answered **No** to the prompt (`runtime-11-control-close-prompt.png`). Result after discard: `runtime-12-after-discard-no.png` (Explorer, no form, no dialog).

Control readings (no Save; unsaved marker on order 1; Save icon enabled in the post-entry screenshot):

| Surface | Count | Cost | Order Total | Note |
|---|---|---|---|---|
| Grid row 1 (after Count 3, before Save) | 3 | 45.00 | 90.00 | Orange unsaved marker on row 1. The Order Total cell is focused after the Tab. |
| Detail view (order 1) | 3 | 45.00 | 90.00 | Count field shows 3. |
| Grid row 2 (unchanged) | 1 | 6.99 | 6.99 | Not edited. |

Message or toast: none visible in `runtime-10`. The status bar reads `Order Total (Object 1 of 2)`.

Control result (observed): an unsaved grid Count edit (2 to 3) did **not** recalculate Order Total (stays 90.00) in the grid row or the detail view. This is the expected tutorial control: the event is wired only to the detail-view controls (EXP-095), so the grid edit does not trigger it.

Prompt answered (exact text, in the alert dialog titled `Infor Mongoose Application Development Framework - FX_Orders`):
- `Do you want to save your changes to primary collection?`
- Buttons: Yes (default focus), No, Cancel. **No** was clicked (once). Yes was not pressed. No Enter key was pressed.

Discard result: the runtime Form is closed (`runtime-12`). Reopen verification of the discard (order 1 back to 2 and 90.00) is part of the T3 runtime grid check, as the brief states, and was not done in T1.

## Splitter drags (T1)

| Drag | Runtime open | Before | After | Evidence |
|---|---|---|---|---|
| 1 | Open 1 (only) | Grid narrow: Order Number column only | Grid shows Order Number to Count; Order Total off the visible edge until horizontal scroll | `runtime-07` (before), `runtime-08` (after) |

## Designer changes (T1)

None. No Data Change entry, no correction, no Designer Save, no Designer close or reopen. The Designer is clean at the end of T1 (`gate-13`).

## Action audit (cumulative; T1 only; exact counts)

Browser tool calls are counted by type. Snapshots returned automatically by click and select results are not counted; only explicit `browser_snapshot` calls are.

| Category | Count | Notes |
|---|---|---|
| Tab list | 1 | Before the first selection |
| Tab select | 2 | Index 1 (Web Client), index 0 (Designer, final check). Both succeeded. |
| Clicks dispatched | 20 | Designer 11 (10 by reference, 1 coordinate chevron click); Web Client 9 |
| Clicks timed out (not dispatched) | 1 | Web Client: row-number cell ref f1e578 (see Errors) |
| Splitter drags | 1 | Web Client, runtime open 1 (coordinate drag) |
| Key presses | 5 | Designer ArrowRight 1; Web Client F4 1, Ctrl+A 1, "3" 1, Tab 1 |
| Typed entries | 1 | Count "3" (entered by key press, not a type tool) |
| Data Change entries | 0 | Readbacks only |
| Data Change corrections | 0 | |
| Designer Save | 0 | |
| Designer close/reopen pairs | 0 | |
| Drop-down choices | 0 | |
| Runtime opens | 1 | Recent-forms entry |
| Runtime closes | 2 | Initial clean close (before open) and discard close |
| Runtime F4 presses | 1 | |
| Runtime Filter in Place toggles | 1 | |
| Runtime row-number cell clicks (dispatched) | 2 | Order 2, then order 1 |
| Runtime Count cell clicks | 1 | |
| Runtime cell entries | 1 | Count 2 to 3, unsaved, discarded |
| Runtime drop-down choices | 0 | |
| Prompts answered No | 1 | "Do you want to save your changes to primary collection?" |
| Prompts answered Yes | 0 | |
| Prompts answered Cancel | 0 | |
| Runtime Saves | 0 | |
| Unloads | 0 | |
| Checkout actions, FormSync, deployment, regeneration, Delete Form Definition | 0 | |
| Script Editor opened | 0 | |
| `browser_find` calls | 14 | Designer 6; Web Client 8 |
| Explicit `browser_snapshot` calls | 9 | Designer 5; Web Client 4 |
| Screenshots saved | 25 | Designer 13 (`gate-01` to `gate-13`); Web Client 12 (`runtime-01` to `runtime-12`) |
| Errors | 1 | Timeout on click of row-number cell (see Errors) |
| Re-logins | 0 | No session expiry seen |

Errors:
- One Web Client click timed out at 5000 ms (`browserBackend.callTool: Timeout 5000ms exceeded`). The target was the hidden unlocked-side row-number cell `1` (ref f1e578). The call log reported that the splitter element `paneZero83-splitter` (role separator) and the grid subtree intercepted pointer events, and the click was not dispatched. Recovery: one fresh untargeted snapshot, then one corrected attempt on the visible locked-side row-number cell `1` (ref f1e564), which succeeded. No blocker was reported.

## Worker-written file inventory (cumulative; T1)

Files written by this worker (repo-relative):
- `experiments/EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md` (this record, created in T1)
- `evidence/EXP-096/gate-01-designer-form-tab-initial.png` to `evidence/EXP-096/gate-13-designer-clean-final-t1.png` (13 files)
- `evidence/EXP-096/runtime-01-webclient-after-close-initial.png` to `evidence/EXP-096/runtime-12-after-discard-no.png` (12 files)

Tool-written files (not authored by the worker): the browser MCP tool saves an accessibility snapshot `.yml` per action under `evidence/playwright/`, and console logs under `evidence/playwright/`. These were not requested by the worker and are listed for completeness.

No other file was written or edited. No code, script, recipe, tutorial source, AGENTS.md or earlier experiment record was changed.

## Evidence (decisive; what each image shows and does not prove)

| File | Visible | Proves | Does not prove |
|---|---|---|---|
| `gate-01-designer-form-tab-initial.png` | Designer FX_Orders, Form tab; Save and Undo greyed; status bar ScopeType User | Identity, User scope, clean start | Handler row or Data Change values |
| `gate-02-event-handlers-row.png` | Details > Event Handlers, collapsed row FX_CalcOrderTotal | The handler exists | Response type and parameters |
| `gate-03-event-handler-selected-properties.png` | Handler row expanded: Form Script Method, false, `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))` | Handler definition (AC-1) | Compile success (not checked) |
| `gate-09-itemcombobox-events-after-chevron.png` | FX_ItemCombobox (EnhancedCombo), Events expanded: Data Change FX_CalcOrderTotal | Data Change on FX_ItemCombobox (AC-1) | Anything about grid columns |
| `gate-10-countedit-events.png` | FX_CountEdit (Edit), Data Change FX_CalcOrderTotal | Data Change on FX_CountEdit (AC-1) | |
| `gate-11-itemgridcol-events.png` | FX_ItemGridCol (GridColumn), Data Change blank | Blank before the change (AC-1) | |
| `gate-12-countgridcol-events.png` | FX_CountGridCol (GridColumn), Data Change blank | Blank before the change (AC-1) | |
| `gate-13-designer-clean-final-t1.png` | Designer clean (Save greyed), FX_CountGridCol selected, Data Change blank | Clean at T1 end | Persistence across close/reopen |
| `runtime-05-baseline-after-f4.png` | Order 1 detail: FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, 2, 90.00 | Order 1 baseline (AC-2) | Grid-row values (grid narrow) |
| `runtime-06-baseline-order2.png` | Order 2 detail: FX002, Factory test two, 2 Factory Street, eggs, cage free, 6.99, 1, 6.99 | Order 2 baseline (AC-2) | |
| `runtime-07-order1-selected-after-row-click.png` | Order 1 selected, narrow grid (only Order Number column visible) | Pre-drag layout (AC-2 splitter before) | |
| `runtime-08-splitter-after-drag.png` | Grid widened: Order Number to Count visible for both rows; detail view moved right | Post-drag layout (AC-2 splitter after) | Order Total visibility (off the right edge in this shot) |
| `runtime-09-count-cell-clicked.png` | Count cell in edit mode, "2" selected | Cell editing started | The typed value (typed after) |
| `runtime-10-control-after-grid-count-3-unsaved.png` | Grid row 1 Count 3, Cost 45.00, Order Total 90.00 (cell focused); detail Count 3, Cost 45.00, Order Total 90.00; unsaved marker | Control result, no recalculation (AC-2) | Persistence (no Save) |
| `runtime-11-control-close-prompt.png` | Save prompt `Do you want to save your changes to primary collection?` (Yes focused, No, Cancel) | Prompt text (AC-2) | The answer (No was clicked after the capture) |
| `runtime-12-after-discard-no.png` | Explorer only; no form; no dialog | Discard completed and stable page (AC-2) | Reopened values (checked in T3) |

Visual check: each image above was viewed. Values that appear only in the accessibility tree (for example the grid row values of order 1 at baseline) are stated as accessibility readings, not as visible screenshots.

## Acceptance checks (T1 status)

- AC-1 (sources reviewed; session usable; Designer User scope and clean; handler row; Data Change on FX_ItemCombobox and FX_CountEdit; blank on FX_ItemGridCol and FX_CountGridCol): **met (observed)**. Evidence: gate-01 to gate-13.
- AC-2 (runtime control before any Designer change: baseline; unsaved grid Count 3 once; grid-row and detail-view readings; discard by close and No with prompt text): **met (observed)**. Evidence: runtime-05, -06, -07, -08, -10, -11, -12.
- AC-3 to AC-6: **pending** (T2 and T3). AC-5 so far: no other Designer change, no Script Editor, no handler edit, no change to FX_ItemCombobox or FX_CountEdit, no unload, no checkout action, no Yes answer, at most one splitter drag per runtime open (1 so far), no runtime Save.

## Deviations and limits (T1)

- Scope reading: the brief allows an Outcome-only reading of EXP-092 and EXP-095. Two heading-only Grep calls were run over each record to find where the Outcome sections start, before the Outcome-only Read. These reads did not show body content, but they are beyond the strict Outcome-only scope. The same kind of heading-only search was used in EXP-095 and noted there.
  - **T4 correction (controller audit rows 9 and 10):** one Grep per record, not two. The search outputs were not heading-only: the EXP-092 output included its sources bullet naming EXP-089/090/091 outcome line ranges, and the EXP-095 output included its sources bullet and a T6 note (line 943 of that record) describing EXP-095's own outcome-only deviation. The statement "did not show body content" is therefore incorrect. This is an **outstanding EXP-096-specific deviation** that needs an explicit operator decision. It is not waived by the EXP-095 waiver, which covers only EXP-095's own deviations. See `evidence/EXP-096/T4-final-acceptance-report.md`, section 7.
- One Read of this record failed with "File does not exist" (the record was created in T1). This was a non-browser read error.
- Grep over the transcript (`hello-world-pt6.md`) for headings, then Read of lines 136-149 for Section 4.
- Designer server-event error: not checked (the Designer Edit menu was not opened). No error was visible in any Designer screenshot.
- The Designer console counter read "2 errors" in every page snapshot. Console inspection is out of scope and was not done.
- Limits: same-session UI evidence only. The Order Total column was off the visible grid edge after the splitter drag; its value is read from the accessibility tree and was visible after the Tab-induced horizontal scroll in `runtime-10`.

## Knowledge state (per finding; all observed in one run, not replayed)

- The grid-row unsaved Count edit (2 to 3) did not recalculate Order Total in the grid row or detail view before the grid Data Change is wired (EXP-095 handler on the detail controls only). State: **observed**.
- The detail-view `FX_CalcOrderTotal` wiring is present on FX_ItemCombobox and FX_CountEdit and the grid columns are blank (Designer readback). State: **observed**.
- A row-number cell click can be intercepted by the grid/detail splitter element; the visible locked-side row-number cell works. State: **observed** (one occurrence).
- The splitter drag widens the grid; the Order Total column stays off-screen until horizontal scroll (grid layout not yet checked for persistence). State: **observed**.
- The save-on-close prompt text is `Do you want to save your changes to primary collection?` with Yes (default focus), No, Cancel. State: **observed**.
- Designer grid column Data Change: not yet set (T2). State: **unresolved** until T2.

## Final state (end of T1)

- Designer tab (tab 0): FX_Orders, User scope, clean (Save greyed). Components tab selected with FX_CountGridCol selected. No dialog open.
- Web Client tab (tab 1): Explorer, no runtime Form open, no dialog open (after the discard close and No answer). Tab 0 was the last selected tab.
- No runtime Form dirty. No unsaved change. No Designer change.

## Next permitted action (T2; completed, see the T2 section below)

1. Designer (User scope, clean): select FX_ItemGridCol (Components), set its Properties > Events > Data Change to `FX_CalcOrderTotal` from its drop-down, commit, read back. Do the same once for FX_CountGridCol. No other field, no other component, no grid layout change. At most one correction per field.
2. Exactly one Designer Save via the native toolbar. Record its native response verbatim with a screenshot. No retry.
3. Persistence: close the clean FX_Orders Designer Form once through its Form-tab control (fresh snapshot, no prompt expected), reopen once from the Form menu recent-forms, verify Save disabled and read back Data Change on FX_ItemGridCol, FX_CountGridCol, FX_ItemCombobox and FX_CountEdit, plus the Event Handlers row.
4. T3 runtime grid check: reopen FX_Orders (blank criteria, F4 once, row-number cells only); verify baseline (this also verifies the control discard), then the grid Count 3 and Item eggs checks, each discarded with close and No.

## T2: grid-column Data Change, one Designer Save, one close/reopen readback (Designer only; no runtime work)

Session: worker session 9d311245-d28e-4a47-a36d-fe3131ae8547. No re-login, no session-expiry modal, no sign-in page, no server-event error seen. The Web Client (tab 1) was not touched in T2 and had no runtime Form open at T2 start.

### T2 gate (read-only, at T2 start)

- Fresh snapshot: Designer tab 0 on FX_Orders, ScopeType User. Save and Undo disabled. No dialog, no open prompt. Components tab selected with FX_CountGridCol selected. Data Change on FX_CountGridCol blank (`t2-00-designer-start-clean-countgridcol-selected.png`).
- T1 gate findings preserved (handler row and the other three Data Change values were not re-checked in this step; they are read back again after the reopen, see below).

### Change steps (in order)

| # | Step | Result | Evidence |
|---|---|---|---|
| 1 | Select FX_ItemGridCol (Components tree row) | Properties header `FX_ItemGridCol (GridColumn)`; Data Change blank; Events expanded | `t2-01-itemgridcol-selected-before-change.png` |
| 2 | Open Data Change drop-down (value cell trigger) | List shows `FX_CalcOrderTotal` first, then StdAppLaunchInbox, StdAppLaunchTasks, ... | `t2-02-itemgridcol-data-change-dropdown-open.png` |
| 3 | Choose `FX_CalcOrderTotal` (from the list; not typed) | Field shows `FX_CalcOrderTota` (truncated by width) | `t2-03-itemgridcol-data-change-after-select.png` |
| 4 | Tab once (commit) | Data Change reads `FX_CalcOrderTotal`; Save and Undo become enabled (dirty) | `t2-04-itemgridcol-data-change-committed-tab.png` |
| 5 | Select FX_CountGridCol (tree row) | Data Change blank before the change; Save still enabled from step 4 | `t2-05-countgridcol-selected-before-change.png` |
| 6 | Open Data Change drop-down | Same list, `FX_CalcOrderTotal` first | (not captured separately; list seen in the same procedure as step 2) |
| 7 | Choose `FX_CalcOrderTotal` (from the list; not typed) | Selected | (step 8 capture) |
| 8 | Tab once (commit) | Data Change reads `FX_CalcOrderTotal` | `t2-06-countgridcol-data-change-committed-tab.png` |
| 9 | Re-select FX_ItemGridCol (pre-save readback) | Data Change `FX_CalcOrderTotal`; Save enabled | `t2-07-readback-itemgridcol-presave.png` |

Corrections: **0** (no field was set twice). Other fields changed: **none** (Lose Focus and Gain Focus stayed blank after the Tab commits; visible in `t2-04` and `t2-06`).

### Designer Save (one invocation, native toolbar)

- Invoked once through the native toolbar Save (`Save` button in the top toolbar). Not retried.
- Native response, verbatim: toast title `Save`, body `Form [FX_Orders] and global object(s) were saved.` No error, no dialog. The Save icon was greyed again in the same capture. Evidence: `t2-08-designer-save-response.png` (toast visible at top right; Save icon greyed).
- Caveat: the toast is shown in the screenshot; the accessibility snapshot taken after the Save (`S2`) showed Save `[disabled]` and Undo `[disabled]`.

### Close and reopen (one pair; the Designer close/reopen limit is 2 in total, 1 used)

- Fresh snapshot taken immediately before the close click. Close: the Form-tab `closable FX_Orders` control (top tablist).
- Prompt: **none** (the Form closed directly; no save prompt). Evidence: `t2-09-designer-form-closed-after-save.png` (empty Designer canvas; Save greyed).
- Reopen: Form menu > recent-forms `FX_Orders` (the `MGForm=FX_Orders` URL appears again). Evidence: `t2-10-reopened-designer-initial.png` (FX_Orders, ScopeType User, Save and Undo greyed).

### Reopened readbacks (all read after the reopen)

| Item | Value read back | Evidence |
|---|---|---|
| Save control | `[disabled]` (find, and screenshot) | `t2-10`, final find |
| Event Handlers row | `FX_CalcOrderTotal`: Sequence 0, Form Script Method, Disabled false, `CalcOrderTotal(P(FX_Count),P(FX_ItmsCost))` (unchanged from T1) | `t2-11-reopened-event-handlers-row.png`, `t2-12-reopened-event-handler-params.png` |
| FX_ItemCombobox Data Change | `FX_CalcOrderTotal` (unchanged) | `t2-13-reopened-readback-itemcombobox.png` |
| FX_CountEdit Data Change | `FX_CalcOrderTotal` (unchanged) | `t2-14-reopened-readback-countedit.png` |
| FX_ItemGridCol Data Change | `FX_CalcOrderTotal` (persisted across the close/reopen in this session) | `t2-15-reopened-readback-itemgridcol.png` |
| FX_CountGridCol Data Change | `FX_CalcOrderTotal` (persisted across the close/reopen in this session) | `t2-16-reopened-readback-countgridcol.png` |

Result: AC-3 met for this session. Save disabled after the reopen; the four Data Change values and the handler row are unchanged from their T1/T2 readings. No second close/reopen was needed (the clean-state recovery was not used).

Visible limits: the readbacks are the Designer's UI state in the same session after one close and reopen. They are **not** cross-session, database or replay verification.

### Designer state at T2 end

Designer tab 0: FX_Orders open (reopened), User scope, clean (Save and Undo disabled), Details panel expanded, Components tab with FX_CountGridCol selected, no dialog open. The Web Client tab was not touched in T2.

### T2 action audit (exact counts)

| Category | T2 | Cumulative T1+T2 |
|---|---|---|
| Tab list | 1 | 2 |
| Tab select | 0 | 2 (both in T1) |
| Clicks dispatched (all) | 20 | 40 (Designer 31, Web Client 9) |
| Clicks timed out / not dispatched | 0 | 1 (T1) |
| Coordinate clicks | 0 | 1 (T1 chevron, Designer) |
| Splitter drags | 0 | 1 (T1, runtime open 1) |
| Key presses | 2 (both Tab, commit) | 7 |
| Typed entries | 0 | 1 (T1 runtime Count "3") |
| Data Change entries (set on FX_ItemGridCol and FX_CountGridCol) | 2 | 2 |
| Data Change corrections | 0 | 0 |
| Data Change drop-down opens | 2 | 2 |
| Data Change drop-down choices | 2 | 2 |
| Designer Saves | 1 | 1 |
| Designer close/reopen pairs | 1 | 1 (limit 2) |
| Designer Form-menu opens | 1 | 1 |
| Designer recent-forms clicks | 1 | 1 |
| Designer Form-tab close clicks | 1 | 1 |
| Prompts seen | 0 | 1 (T1 runtime save prompt) |
| Prompts answered No | 0 | 1 (T1, runtime, text above) |
| Prompts answered Yes / Cancel | 0 / 0 | 0 / 0 |
| Errors | 0 | 1 (T1 timeout) |
| Runtime opens / closes / F4 / Filter in Place / cell entries / drop-down choices / runtime Saves | 0 / 0 / 0 / 0 / 0 / 0 / 0 | 1 / 2 / 1 / 1 / 1 / 0 / 0 |
| `browser_find` calls | 19 | 33 |
| Explicit `browser_snapshot` calls | 3 | 12 |
| Screenshots saved | 17 | 42 |
| Re-logins | 0 | 0 |
| Unloads, checkout actions, FormSync, deployment, regeneration, Delete Form Definition, Script Editor | 0 | 0 |

Click breakdown (T2, 20): 7 Components-tree row selections (incl. readback), 1 handler-row selection, 2 Data Change trigger opens, 2 Data Change option picks, 1 native Save, 1 Form-tab close, 1 Form menu, 1 recent-forms entry, 4 view-only panel/tab/expand clicks (Details expand, Event Handlers tab, Components tab, Components Expand).

### T2 worker-written file inventory

- `experiments/EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md` (edited in T2: status line, the "Next permitted action" heading, this T2 section).
- `evidence/EXP-096/t2-00-designer-start-clean-countgridcol-selected.png`
- `evidence/EXP-096/t2-01-itemgridcol-selected-before-change.png`
- `evidence/EXP-096/t2-02-itemgridcol-data-change-dropdown-open.png`
- `evidence/EXP-096/t2-03-itemgridcol-data-change-after-select.png`
- `evidence/EXP-096/t2-04-itemgridcol-data-change-committed-tab.png`
- `evidence/EXP-096/t2-05-countgridcol-selected-before-change.png`
- `evidence/EXP-096/t2-06-countgridcol-data-change-committed-tab.png`
- `evidence/EXP-096/t2-07-readback-itemgridcol-presave.png`
- `evidence/EXP-096/t2-08-designer-save-response.png`
- `evidence/EXP-096/t2-09-designer-form-closed-after-save.png`
- `evidence/EXP-096/t2-10-reopened-designer-initial.png`
- `evidence/EXP-096/t2-11-reopened-event-handlers-row.png`
- `evidence/EXP-096/t2-12-reopened-event-handler-params.png`
- `evidence/EXP-096/t2-13-reopened-readback-itemcombobox.png`
- `evidence/EXP-096/t2-14-reopened-readback-countedit.png`
- `evidence/EXP-096/t2-15-reopened-readback-itemgridcol.png`
- `evidence/EXP-096/t2-16-reopened-readback-countgridcol.png`

Tool-written, not authored by the worker: browser tool accessibility snapshots (`evidence/playwright/page-*.yml`) and console logs (`evidence/playwright/console-*.log`) created automatically on actions and events.

Cumulative T1 worker-written files (unchanged from the T1 inventory): the T1 screenshots `gate-01` to `gate-13` and `runtime-01` to `runtime-12` under `evidence/EXP-096/`.

### T2 deviations and limits

- Step 6 and step 7 were not captured with a separate screenshot (the drop-down list and the choice were taken with the same procedure as step 2 and step 3; the post-commit state is in `t2-06`). The choice itself is shown in `t2-06`, where Data Change reads `FX_CalcOrderTotal`.
- The Data Change field shows `FX_CalcOrderTota` (truncated) between choice and commit. This is a width display issue, not a value difference: after Tab it reads `FX_CalcOrderTotal` (`t2-04`, `t2-06`) and the snapshot after the Save shows the full string.
- After the reopen the Components tree was collapsed. It was expanded once with its Expand control (view only) to reach the component rows.
- The first `find` for FX_ItemCombobox after the reopen returned no match because the tree was still collapsed. This was a view state, not an error.
- The Form-tab close produced no prompt, so no answer was given. The brief's "if a save prompt appears, answer No" did not apply.
- T1 deviations (carried forward, not resolved here): (1) the heading-only Grep runs over EXP-092 and EXP-095 before their Outcome-only Reads; (2) the T1 timeout on a row-number click. The EXP-095 operator waiver covered EXP-095's own deviations only and does not transfer to EXP-096. The T1 heading-search deviation is left for operator disposition.
- Not checked in T2: the Designer Edit menu for the server-event error (not opened). No error text was visible on any screenshot.
- Same-session UI evidence only. No cross-session, database or replay verification is claimed.

### T2 knowledge state (observed; same session; not replayed)

- Setting Data Change on a grid column by the Properties drop-down, followed by one Tab to commit, works for FX_ItemGridCol and FX_CountGridCol. State: **observed**.
- One Designer Save with the native toolbar showed the toast `Form [FX_Orders] and global object(s) were saved.` State: **observed**.
- Form-tab close of a clean Designer Form produced no prompt; reopen from recent forms showed Save disabled and the four Data Change values and the handler row unchanged. State: **observed** (one close/reopen, same session).
- The grid-column Data Change values did not need an Edit Grid Columns dialog. State: **observed**.
- Runtime effect of the grid-column Data Change (whether a grid Count or Item edit recalculates Order Total): **unresolved** until T3.

### Acceptance checks (T2 status)

- AC-1: met (T1; re-observed at T2 start).
- AC-3: **met** for this session. Data Change = FX_CalcOrderTotal on FX_ItemGridCol and FX_CountGridCol; 0 corrections; exactly one Designer Save with the native response recorded; no error; after one close/reopen Save disabled and the four Data Change values and the handler row unchanged; Designer clean at end. Evidence: `t2-04`, `t2-06`, `t2-07`, `t2-08`, `t2-10` to `t2-16`.
- AC-5 (T2 scope): no other Designer change; no handler edit; no change to FX_ItemCombobox or FX_CountEdit; no grid column layout change; no Script Editor; no Yes answer; no checkout action; no unload. Met for T2.
- AC-2, AC-4, AC-6: pending (AC-4 and the T3 runtime check come in T3).

### Next permitted action (T3; completed, see the T3 section below)

1. Web Client (tab 1, selected via tab list): if FX_Orders is not open, open it through Form menu > recent-forms `FX_Orders` (the Web Client has no runtime Form open at T2 end; it was closed cleanly in T1). Filter in Place, blank criteria, F4 once, row-number cells only.
2. Verify the baseline (both orders, the control discard included), then the grid Count 2 to 3 and the Item dumbbell to eggs checks, each unsaved, each discarded with close and No (exact prompt text recorded).
3. Reopen once and verify both orders unchanged. Close the runtime Form once at the end (clean).
4. Do not touch the Designer in T3 unless the coordinator asks; leave it clean.

## T3: runtime grid check (Web Client only; no Designer action, no Save)

Session: worker session 9d311245-d28e-4a47-a36d-fe3131ae8547. No re-login, no session-expiry modal, no sign-in page, no server-event error seen. Tab list taken first (2 tabs), then one tab select (index 1, Web Client, succeeded). The Designer (tab 0) was not selected, clicked or saved in T3. Its last state (end of T2) was clean with FX_Orders open; it was not re-inspected in T3.

### Runtime open 1 (control and grid edits; discarded)

| Step | Result (observed) | Evidence |
|---|---|---|
| Form menu > recent-forms FX_Orders | Opened in add-mode; Filter in Place not yet on | `t3-01-runtime-opened-from-recent.png` |
| Filter in Place | Active, all criteria blank | `t3-02-filter-in-place-blank-criteria.png` |
| F4 (once) | First screenshot still showed a blank placeholder row (the query had not redrawn yet). A snapshot taken a moment later showed rows 1 and 2 loaded. No second F4 was pressed. | `t3-03-baseline-after-f4.png` (blank, pre-redraw), `t3-04-baseline-order1-populated.png` (populated) |
| Baseline order 1 | FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / Count 2 / Order Total 90.00 (matches) | `t3-04` (detail); accessibility row `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 2 90.00` |
| Baseline order 2 (row-number click) | FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / Count 1 / Order Total 6.99 (matches) | `t3-05-baseline-order2.png`; accessibility row `2 FX002 Factory test two 2 Factory Street eggs cage free 6.99 1 6.99` |
| Re-select order 1 (row-number click) | Order 1 selected; grid narrow (Count, Item, Order Total not visible) | `t3-06-baseline-order1-rechecked-before-layout.png` |
| Splitter drag (coordinate, 393,520 to 1000,520) | Layout widened: Order Number to Count visible for both rows; Order Total just off the right edge; detail view moved right. No layout prompt. This is the second and last permitted drag (T1 used the first). | before `t3-06`, after `t3-07-splitter-after-drag-t3.png` |
| Grid order 1 Count cell (click), Ctrl+A, "3", Tab | Grid row: Count 3, Cost 45.00, **Order Total 135.00**. Detail view: Count 3, Cost 45.00, **Order Total 135.00**. Unsaved marker on row 1. Toolbar Save enabled (unsaved). No message or toast visible. | `t3-08-control-grid-count-3-unsaved-result.png`; accessibility row `1 FX001 Factory test one 1 Factory Street dumbbell 45 pound iron 45.00 3 135.00`; detail textbox Order Total `135.00` |
| Grid order 1 Item cell (click) | Cell opened in edit mode (combobox showing dumbbell, arrow visible) | `t3-09-item-cell-clicked.png` |
| Item drop-down (Open button, once) | Options listed: dumbbell (45 pound iron), eggs (cage free), guitar (natural acoustic) | `t3-10-item-dropdown-open.png` |
| Choose eggs (click the option once; no typing) | Grid row: Item eggs, Item Description cage free, Cost 6.99, Count 3, **Order Total 20.97**. Detail view: Item eggs, Item Description cage free, Cost 6.99, Count 3, **Order Total 20.97**. The grid Item cell still shows the editor with eggs selected (not committed by Tab; no Tab was pressed after the Item choice). No message or error. | `t3-11-after-item-eggs-unsaved.png`; accessibility row `1 FX001 Factory test one 1 Factory Street cage free 6.99 3 20.97`; detail Order Total `20.97` |

Control comparison (AC-2 vs AC-4), same grid Count 2 to 3 edit, unsaved:

| Surface | T1 control (before the Designer change) | T3 after the Designer change (grid Data Change set and saved) |
|---|---|---|
| Grid row Count | 3 | 3 |
| Grid row Cost | 45.00 | 45.00 |
| Grid row Order Total | **90.00** (no recalculation) | **135.00** (recalculated) |
| Detail Count / Cost | 3 / 45.00 | 3 / 45.00 |
| Detail Order Total | **90.00** | **135.00** |

Tutorial expectation for the Count edit (135.00) matched the post-change result. The T1 control showed no recalculation, which matches the EXP-095 wiring (detail controls only). The change in behavior is observed between the two runs; the only intervening change was the T2 Designer Save that set Data Change = FX_CalcOrderTotal on FX_ItemGridCol and FX_CountGridCol. This run did not isolate that cause with a further control (for example, removing the grid Data Change), so the attribution to the grid-column Data Change is an inference from the sequence.

Item change (eggs) expectation Cost 6.99 and Order Total 20.97 (3 x 6.99) matched in both the grid row and the detail view.

### Discard (runtime open 1)

- Close: Form close control (fresh reference). Prompt appeared (`t3-12-discard-save-prompt.png`), text verbatim: `Do you want to save your changes to primary collection?` (dialog title `Infor Mongoose Application Development Framework - FX_Orders`; buttons Yes (default focus), No, Cancel).
- Answer: **No**, once. No other prompt appeared (no grid or splitter layout prompt). Yes was not pressed; Enter was not pressed.
- After discard: Explorer only, no dialog (`t3-13-after-discard-no.png`).

### Runtime open 2 (reopen verification; no drag; closed clean)

| Step | Result (observed) | Evidence |
|---|---|---|
| Form menu > recent-forms FX_Orders | Opened; Filter in Place clicked; criteria blank (`t3-14-reopen-fip-blank-criteria.png`) | `t3-14` |
| F4 (once) | Snapshot about 2 seconds later showed both rows loaded (no second F4). A find for the text "FX002" returned no match only because the text sits in split cells; the snapshot showed the values. Save disabled. | snapshot (not separately captured as an image) |
| Order 1 (reopened, visible) | FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / Count 2 / Order Total 90.00 (unchanged; control discard confirmed) | `t3-15-reopened-baseline-order1-layout.png` |
| Order 2 (row-number click) | FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / Count 1 / Order Total 6.99 (unchanged) | `t3-16-reopened-order2.png` |
| Widened grid layout after reopen | **Did not persist**: the grid is narrow again (Order Number and Customer ID area only, Count, Item, Order Total not visible) | `t3-15` |
| Final close (clean) | Form close control; no prompt; Explorer only, no dialog | `t3-17-final-runtime-closed-clean.png` |

### Runtime action counts for T3 (exact)

- Runtime opens 2 (both recent-forms); runtime closes 2 (discard close, final close); F4 presses 2 (one per open); Filter in Place clicks 2.
- Splitter drags 1 (runtime open 2 had none; runtime open 1 had the one drag). Cumulative drags: 2 (the total limit of 2 is now reached).
- Row-number cell clicks 3 (order 2 in open 1; order 1 in open 1; order 2 in open 2). Clicks timed out: 0.
- Grid Count cell clicks 1; Ctrl+A 1; typed "3" (key press) 1; Tab after Count 1.
- Grid Item cell clicks 1; Item drop-down opens 1; drop-down choices 1 (eggs); typed Item values 0.
- Prompts seen 1; prompts answered No 1 (text above); Yes 0; Cancel 0.
- Runtime Saves 0; Designer actions 0; Designer Saves 0.

### T3 action audit (exact counts)

| Category | T3 | Cumulative T1 + T2 + T3 |
|---|---|---|
| Tab list | 1 | 3 |
| Tab select | 1 (index 1) | 3 |
| Clicks dispatched (all) | 16 | 56 (T1 + T2 = 40; the T1 clicks timed out (1) are not in the dispatched count) |
| Clicks timed out / not dispatched | 0 | 1 (T1) |
| Coordinate clicks (non-drag) | 0 | 1 (T1 Designer chevron) |
| Splitter drags | 1 | 2 (limit reached: T1 1, T3 1) |
| Key presses | 5 (F4, Ctrl+A, "3", Tab, F4) | 12 |
| Waits | 1 (2 seconds, no action) | 1 |
| Typed entries (runtime Count "3") | 1 | 2 |
| Data Change entries / corrections | 0 / 0 | 2 / 0 |
| Designer Saves | 0 | 1 |
| Designer close/reopen pairs | 0 | 1 (limit 2) |
| Designer Form-menu opens or tab selects | 0 | 1 (T2) |
| Runtime opens | 2 | 3 (T1 1 + T3 2) |
| Runtime closes | 2 | 4 (T1 2 + T3 2) |
| Runtime F4 presses | 2 | 3 (T1 1 + T3 2) |
| Runtime Filter in Place toggles | 2 | 3 |
| Runtime row-number cell clicks (dispatched) | 3 | 5 (T1 2 + T3 3) |
| Runtime Count cell clicks | 1 | 2 (T1 1 + T3 1) |
| Runtime cell entries (unsaved) | 1 (Count 3) + 1 (Item eggs by drop-down) | 2 typed entries (T1 and T3 Count) + 1 drop-down choice |
| Runtime drop-down opens / choices | 1 / 1 | 1 / 1 |
| Prompts answered No | 1 | 2 (T1 1, T3 1) |
| Prompts answered Yes / Cancel | 0 / 0 | 0 / 0 |
| Errors | 0 | 1 (T1 timeout) |
| Explicit `browser_snapshot` calls | 7 | 19 (T1 9, T2 3, T3 7) |
| `browser_find` calls | 14 | 47 (T1 14, T2 19, T3 14) |
| Screenshots saved | 17 | 59 (T1 25, T2 17, T3 17) |
| Re-logins | 0 | 0 |
| Unloads, checkout actions, FormSync, deployment, regeneration, Delete Form Definition, Script Editor, console or network inspection | 0 | 0 |

Note on the T1 count: the T1 figure "clicks dispatched 20" in the T1 section counts Designer clicks and Web Client clicks together; the T2 figure "clicks dispatched 40 cumulative" is T1 plus T2 as stated in the T2 section. Cumulative totals above use those figures.

### T3 worker-written file inventory

- `experiments/EXP-096-hello-world-part-6-section-4-fx-orders-grid-column-data-change.md` (edited in T3: status line, next-action heading, this T3 section).
- `evidence/EXP-096/t3-01-runtime-opened-from-recent.png`
- `evidence/EXP-096/t3-02-filter-in-place-blank-criteria.png`
- `evidence/EXP-096/t3-03-baseline-after-f4.png` (pre-redraw; blank placeholder)
- `evidence/EXP-096/t3-04-baseline-order1-populated.png`
- `evidence/EXP-096/t3-05-baseline-order2.png`
- `evidence/EXP-096/t3-06-baseline-order1-rechecked-before-layout.png`
- `evidence/EXP-096/t3-07-splitter-after-drag-t3.png`
- `evidence/EXP-096/t3-08-control-grid-count-3-unsaved-result.png`
- `evidence/EXP-096/t3-09-item-cell-clicked.png`
- `evidence/EXP-096/t3-10-item-dropdown-open.png`
- `evidence/EXP-096/t3-11-after-item-eggs-unsaved.png`
- `evidence/EXP-096/t3-12-discard-save-prompt.png`
- `evidence/EXP-096/t3-13-after-discard-no.png`
- `evidence/EXP-096/t3-14-reopen-fip-blank-criteria.png`
- `evidence/EXP-096/t3-15-reopened-baseline-order1-layout.png`
- `evidence/EXP-096/t3-16-reopened-order2.png`
- `evidence/EXP-096/t3-17-final-runtime-closed-clean.png`

Tool-written, not authored by the worker: browser tool accessibility snapshots (`evidence/playwright/page-*.yml`) and console logs (`evidence/playwright/console-*.log`).

### Final state (end of T3)

- Web Client (tab 1): Explorer only; no runtime Form open; no dialog; no unsaved runtime change (the final close showed no prompt). The tab selected at the end was tab 1.
- Designer (tab 0): not touched in T3. Last known state (end of T2): FX_Orders reopened, User scope, clean (Save disabled), no dialog. Not re-inspected in T3.
- No Designer Save, no runtime Save, no unload, no checkout action.

### Acceptance checks (T3 status)

- AC-2 (runtime control before any Designer change; baseline verified; unsaved grid Count 3; grid-row and detail-view values recorded; discarded by close + No with prompt text): **met (observed)**. Evidence: `runtime-05`, `runtime-06`, `runtime-07`, `runtime-08`, `runtime-10`, `runtime-11`, `runtime-12` (T1).
- AC-4 (runtime grid check after the change: baseline verified after the control discard; unsaved Count 3 then Item eggs entered once each; grid-row and detail-view values recorded after each; discard by close + No with prompt text; both orders match the baseline after reopen): **met (observed)**. Evidence: `t3-04`, `t3-05`, `t3-07`, `t3-08`, `t3-10`, `t3-11`, `t3-12`, `t3-15`, `t3-16`. The T3 values match the expected 135.00 and 20.97.
- AC-3 (Data Change read back; one Designer Save; no error; close/reopen with Save disabled and the four Data Change values and handler row unchanged; Designer clean at end): **met in T2** (not re-checked in T3, and the Designer was not touched in T3).
- AC-5 (no other Designer change, no Script Editor, no handler edit, no change to FX_ItemCombobox or FX_CountEdit, no grid layout change, at most one splitter drag per runtime open, no runtime Save, no unload, no checkout action, no Yes answer): **met for T3** (one drag in runtime open 1 of T3, none in runtime open 2; zero runtime Saves; zero Yes answers). Note: the grid widening (a drag) is a runtime layout change, which the brief permits as a splitter drag; no column was resized, reordered, hidden or added.
- AC-6 (final report): this T3 section and the T2 and T1 sections together carry the cumulative audit, the inventory, the comparison and the final state. Findings are observed only.

### Comparison: control (before) vs post-change grid result

- Before the Designer change (T1): grid Count 2 to 3 (unsaved) gave Order Total 90.00 in both the grid row and the detail view. No recalculation.
- After the Designer change (T3): the same grid Count 2 to 3 (unsaved) gave Order Total 135.00 in both views. Recalculation occurred. The Item change to eggs then gave Cost 6.99 and Order Total 20.97 in both views.
- Both orders were unchanged after discard and reopen (order 1: 45.00 / Count 2 / 90.00; order 2: 6.99 / Count 1 / 6.99).

### T3 deviations and limits

- F4 timing: the first F4 screenshot (`t3-03`) was taken before the grid had redrawn. The accessibility snapshot taken afterwards showed rows loaded. This was recorded as a timing difference, not a second press.
- The reopened F4 showed a similar delay; the accessibility snapshot (with a 2-second wait) confirmed the rows. A find for "FX002" returned no match because the text is split across cells, so the snapshot was used.
- The grid Item editor was left in edit mode with eggs selected at discard (no Tab was pressed after the drop-down choice). The save prompt still appeared and was answered No.
- The attribution of the 90.00 to 135.00 change to the grid-column Data Change is inferred from the sequence (see the comparison section); it was not isolated by an additional control.
- The T1 documentation-scope deviation (heading-only Grep runs over EXP-092 and EXP-095 before their Outcome-only Reads) remains outstanding for operator disposition. It is not waived by this run.
- Not checked in T3: the Designer Edit menu server-event state (not opened; not part of the T3 scope).
- Same-session UI evidence only. No cross-session, database or replay verification is claimed.

### T3 knowledge state (observed; same session; not replayed)

- After the grid-column Data Change was set and saved (T2), an unsaved grid Count edit (2 to 3) recalculates Order Total (90.00 to 135.00) in the grid row and detail view. State: **observed** (single run; attribution inferred from sequence).
- Before the grid-column Data Change, the same grid Count edit did not recalculate Order Total (T1). State: **observed** (single run).
- An unsaved grid Item choice (dumbbell to eggs, via the drop-down) updated Item Description, Cost and Order Total (6.99; 20.97) in the grid row and detail view. State: **observed**.
- Discard by Form close and No restored both orders to their baseline after reopen. State: **observed**.
- The widened grid layout did not persist across a runtime close and reopen (second occurrence after T1). State: **observed**.
- The Item drop-down for FX_ItemGridCol lists dumbbell, eggs and guitar (guitar / natural acoustic is not in the EXP-096 baseline). State: **observed**.

### Open items for the coordinator

- The EXP-096 final acceptance decision (AC-6) and the T1 heading-search deviation are for operator disposition.
- No blocker in T3.

## T4: documentation-only final acceptance audit (zero browser calls; zero Mongoose changes)

Sources: this record (full) and the controller audits `evidence/EXP-096/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md` (full). A non-browser Glob listed file names of other experiments' audit files; none was opened. No other experiment record was read. Full report: `evidence/EXP-096/T4-final-acceptance-report.md`.

### Reconciliation (worker against controller)

- Controller headers reconcile exactly: T1 29 actions / 49 reads (78 browser calls, 39 non-browser); T2 22 / 40 (62 browser, 20 non-browser); T3 23 / 40 (63 browser, 19 non-browser). The header definition (inferred) is: actions = element clicks + coordinate click + drags + key presses + tab selects; reads = tab lists + snapshots + screenshots + finds + waits.
- Every count in the T1 to T3 action audits is reproduced by the controller tables, with two classification-only differences: the T1 "clicks dispatched 20" includes one coordinate click (19 element clicks ok, one timed out, plus the coordinate click); the T3 2-second wait is an action in the T3 section but a read in the controller.
- Cumulative figures confirmed by the controller: 56 dispatched clicks (55 element + 1 coordinate) plus 1 timed-out T1 click; 2 splitter drags; 12 key presses; 3 runtime opens; 4 runtime closes (including the T1 pre-open close of an add-mode placeholder); 3 F4 presses; 2 "No" answers; 0 Yes; 1 Designer Save; 2 Data Change entries; 0 corrections; 1 Designer close/reopen pair; 19 explicit snapshots; 47 finds; 59 screenshots; 3 tab lists; 3 tab selects; 1 wait.
- Corrections to earlier statements (see the T1 corrections above): the T1 searches were one per record, not two, and their output was not heading-only.
- Cumulative tab selects: the T3 cumulative line "Designer Form-menu opens or tab selects" omitted the T1 Designer tab selection (controller row 112). Tab selects are 3 in total (T1 2, T3 1).
- Designer Edit-menu clicks: 0 in all audits. No Script Editor, Delete Form Definition, Regenerate Form, unload, checkout or FormSync call appears in any audit.

### AC-1 to AC-5 (evidence paths in the T4 report, section 5)

- AC-1 met (observed): gate-01, gate-03, gate-09, gate-10, gate-11, gate-12, gate-13.
- AC-2 met (observed): runtime-05, runtime-06, runtime-07, runtime-08, runtime-10, runtime-11, runtime-12.
- AC-3 met (observed, same session): t2-03, t2-04, t2-06, t2-07, t2-08 (native toast), t2-09, t2-10, t2-11 to t2-16.
- AC-4 met (observed): t3-04, t3-05, t3-07, t3-08, t3-10, t3-11, t3-12, t3-13, t3-15, t3-16, t3-17.
- AC-5 met (observed): no other Designer change, no runtime Save, no Yes answer, drags within limits.

### AC-6 comparison (grid row and detail view, same unsaved Count 2 to 3)

- Before the Designer change (T1): Order Total 90.00 in both views (no recalculation).
- After the grid-column Data Change was saved (T3): Order Total 135.00 in both views. Item change to eggs then gave Cost 6.99 and Order Total 20.97.
- **Causal status: not independently isolated.** The apparent effect of grid-column Data Change wiring is inferred from the before/after sequence. Alternative explanations not excluded: the Designer Save or form reopen changed runtime behavior independently; the runtime session state differed between the two opens.
- **Persistence status:** same-session UI readback after one close/reopen. Not database durability, cross-session persistence or replay.
- **Server-event status:** the Designer Edit menu was not directly inspected. No server-event error text appears in any T1 to T3 screenshot.

### Outstanding deviation (not decided here)

- T1 heading-only searches over EXP-092 and EXP-095 before their Outcome-only reads (one per record; output not heading-only). This needs an explicit EXP-096-specific operator decision. It is not waived by the EXP-095 waiver or any other experiment's waiver.
- Limitation: the audits record only `file_path` for Reads, so the offsets cited in the T1 record cannot be verified from the audits (see report D8).

### Discrepancies and open confinement question

- Tool-written browser artifacts (`evidence/playwright/*.yml` and console logs) are outside the EXP-096 path. Their count is not recorded in the controller audits. The operator should decide whether they are in-scope output. The worker did not author them directly.
- Worker-authored files: this record (created T1, edited T1 to T4), `evidence/EXP-096/` screenshots (59 files: gate-01 to gate-13, runtime-01 to runtime-12, t2-00 to t2-16, t3-01 to t3-17), and `evidence/EXP-096/T4-final-acceptance-report.md`.

### Final state (as at end of T3; no browser call in T4)

- Web Client: Explorer, no runtime Form, no dialog (`t3-17`).
- Designer: FX_Orders open and clean at T2 end (`t2-16`); not touched or inspected in T3 or T4.

### Recommendation (for operator disposition; not operator acceptance)

- **ACCEPTED AS OBSERVED, conditional** on: (1) an explicit EXP-096-specific operator decision on the outstanding T1 reading-scope deviation; (2) the operator's ruling on whether tool-written browser artifacts count as in-scope output for confinement. Causal attribution and persistence scope remain as stated above.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 4 is complete: edits made inside the FX_Orders grid now recalculate Order Total before Save. **Part 6 sections 1-4 (form script and Calc Order Total event) are finished.** The operator decided acceptance and waived one deviation for EXP-096 only (see below).

- Changed, for later cleanup (Form `FX_Orders`, User scope), with one Designer Save ("Form [FX_Orders] and global object(s) were saved."):
  - Events > Data Change = `FX_CalcOrderTotal` on **FX_ItemGridCol** and **FX_CountGridCol** (Components grid and Properties route, as in EXP-095; the tutorial's Edit Grid Columns dialog was not used).
  - After one close/reopen, all four Data Change values (FX_ItemCombobox, FX_CountEdit, FX_ItemGridCol, FX_CountGridCol) and the handler row read back unchanged.
- **Run R-20261015-115301-nmyG** (4 worker tasks): T1 gate and runtime control; T2 Data Change, Save and close/reopen readback; T3 runtime grid check, discard and reopen; T4 documentation-only audit. The coordinator paused for the operator's ruling, then closed the run after the operator's note.
- Screenshots viewed by the operator assistant: `runtime-10-control-after-grid-count-3-unsaved.png` (control: grid Count 3, Order Total 90.00 in grid and detail); `t3-11-after-item-eggs-unsaved.png` (after the change: grid Item eggs, cage free, 6.99, Count 3, Order Total 20.97 in grid and detail).
- Findings (observed):
  1. **Detail-view wiring does not reach the grid.** Before the change, an unsaved grid Count 2 -> 3 left Order Total at 90.00 in the grid row and the detail view, although FX_ItemCombobox and FX_CountEdit were wired (EXP-095).
  2. **Grid-column wiring makes grid edits recalculate.** After the change, the same grid edit gave 135.00, and the grid Item change to eggs gave Cost 6.99 and 20.97, in both the grid row and the detail view. The only change between the control and the test was the grid-column Data Change Save, so this run also gives the attribution EXP-095 lacked.
  3. The runtime grid needs one splitter drag per open to show Count and Item; Order Total stays past the right edge until the grid scrolls (Tab scrolled it). The widened layout did not persist after the reopen; no layout prompt appeared.
  4. Both discards used the prompt `Do you want to save your changes to primary collection?` (Yes / No / Cancel), answered No; both orders matched the baseline after the reopen.
- Counts: Data Change entries 2 (corrections 0); Designer Saves 1; Designer close/reopen pairs 1; runtime opens 3, splitter drags 2, grid Count entries 2, grid Item choices 1, No answers 2, runtime Saves 0; Yes answers 0; unloads 0; checkout actions 0; re-logins 0. One T1 click on a hidden row-number cell timed out undispatched; one fresh snapshot and one corrected click followed (per the rules).
- Waived deviation (EXP-096 only, no observed effect): T1's two heading-only searches returned body text from EXP-092 and EXP-095 outside their Outcome sections. The `evidence/playwright/` files are accepted as incidental browser-tool output (gitignored).
- Limits: same-session UI evidence only; runtime grid Order Total values partly from the accessibility tree; `Console: 2 errors` headers not inspected.
- Confinement (git status): only `evidence/EXP-096/` and this record were written by the run.
- Next: Part 6 section 5 (Orders Chart: a new Classic Grid Only Form on the FX_Orders IDO), then sections 6-8 (chart, image import, theme). The untracked `assets/` images are likely for section 7.
