# EXP-111 - Hello World Part 7 Section 8: Sign-In Page Contents

Status: **accepted (observed) by the operator, 2026-10-18; see "Outcome (operator, 2026-10-18)" at the end. Run history: T2 complete (Saves #1 to #7); T3 StaticCustID2 complete (T3 Saves #1 to #3, Designer clean; see "T3 StaticCustID2" below); T3 complete (5 of 5 T3 Saves: StaticCustID2 Saves #1 to #3; EditCustID Name Save #4 and Justification Center, Size 20; 1.5, Binding Type None and Save #5 in the continuation; see "T3 EditCustID" and "T3 EditCustID continuation" below); T4 ButtonSignIn2 complete (T4 Saves #1 to #4 of 4; Name, Caption FX_sSignIn, Theme Class FX_BlueButton, Size 20; 1.5, Margin 0,1,0,1 through the component dialog; see "T4 ButtonSignIn2" below); T5 (close/reopen readback and final audit) PARTIAL and BLOCKED (2026-10-18): the ordinary close and reopen ran cleanly and the five-component tree after reopen matches the plan; the readback stopped at the first property selection, where the console error count rose from 2 to 3 (observed; cause unknown). Size and Margin readback, the Margin dialogs and the properties of four components are NOT done. See "T5 readback and final audit" below. Continuation readback tasks then ran on 2026-10-18: T11 read StaticSignIn and StaticImage1 (Margins included) and stopped blocked on a stale Components-grid Expand ref (see "T11 readback continuation"); the final task T12 read StaticCustID2, EditCustID, ButtonSignIn2 (Margin 0,1,0,1 through its dialog) and StaticImage1's Bitmap File Name (not exposed as text), then wrote the final audit (see "T12 final readback and final audit" at the end of this record). Operator dispositions of 2026-10-18 apply: the T2 Save accounting is settled (16 successful Saves), the earlier console rise is operator-diagnosed (client-side TypeError; Designer reloaded), and the teal button rendering is a known EXP-110-R3 issue (out of scope). The Designer was left open with StaticSignIn selected, Save disabled as seen in the screenshot, and no dialog open.** T1 (read-only gate and string check) complete on 2026-10-18. T2 was interrupted at the turn limit, then recovered read-only ("T2 recovery checkpoint" below). The operator ruling then allowed the StaticImage1 Step C and Step D continuation ("T2 continuation: Saves #6 and #7" below), which is now complete. The T2 Save budget (7 of 7) is used up. Next: T3, as a separate task per the operator.
Run: R-20261018-020406-7LK1, cycle 0. Experiment-wide brief: five components in FlexLayoutMain > Region02: signinpage of FX_CustomerPortal (User scope), a Designer Save after each step, a console-error stop, then a close/reopen readback and audit.
Environment: Mongoose Web Designer, demo tenant, config group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT, User editing scope.
Tutorial source: `docs/mongoose/transcripts/hello-world-pt7.md` Section 8 (lines 219-239), sequence check 7 (line 317), transcript 12:08-15:24 (lines 466-492).

## Objective

Build Hello World Part 7 Section 8 (12:08-15:24) in FX_CustomerPortal:

| Order | Component | Type | Key planned settings |
| --- | --- | --- | --- |
| 1 | StaticSignIn | Static | Caption FX_sSignIn; Theme Class FX_Header; Justification Center; No Colon True; Size 20; 1.5; Margin 0,1,0,1 |
| 2 | StaticImage1 | Static | Bitmap File Name FX_CustomerSignIn.png; No Colon True; Size 21; 8; Margin 0,1,0,1 |
| 3 | StaticCustID2 | Static | Caption FX_sCustomerID; Justification Center; No Colon True; Size 20; 1.5 |
| 4 | EditCustID | Edit | Justification Center; Size 20; 1.5; Binding Type left unchanged (Variable binding deferred to Part 8) |
| 5 | ButtonSignIn2 | Button | Caption FX_sSignIn; Theme Class FX_BlueButton; Size 20; 1.5; Margin 0,1,0,1; no event |

Out of scope: Part 7 Section 9 and later, click events, navigation, visibility, sign-in or credential logic, the Variable Customer ID bindings (Part 8), Regenerate Form, changes to existing components or regions, any Form other than FX_CustomerPortal.

## Task plan

- T1 (this record): read-only gate and string check. No change.
- T2: StaticSignIn and StaticImage1 (seven Designer Saves maximum).
- T3: StaticCustID2 and EditCustID (five Saves maximum).
- T4: ButtonSignIn2 (four Saves maximum).
- T5: close/reopen readback, audit (no Save).

## Sources reviewed (T1, before any browser action)

- `AGENTS.md`
- `docs/mongoose/transcripts/hello-world-pt7.md`: lines 219-239, line 317, lines 466-492
- `recipes/components/add-component-from-toolbox.md`
- `recipes/session/session-expiry-and-stale-designer.md`
- Outcome (operator) sections only: `experiments/EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md` (line 421 to end), `experiments/EXP-107-hello-world-part-7-section-5-fx-customer-portal-user-statics.md` (line 868 to end), `experiments/EXP-106-hello-world-part-7-section-4b-fx-customer-portal-static-header.md` (line 865 to end)
- A search for Outcome headings was limited to these three records by filename pattern.

No other records were read. No Part 7 Section 9 or later source was read.

## T1 - Read-only gate and string check (2026-10-18)

### Starting state

- Browser tabs listed before any selection: tab 0 is the Mongoose Web Designer (`mode=designer`, title "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)"); tab 1 is the Mongoose Web Client at the Infor portal URL (title "Mongoose").
- Tab 0 was selected (already current; select succeeded). It showed the Designer with FX_CustomerPortal as the only open form tab, selected. Tab 1 was identified from the tab list only and was not selected or inspected in T1.
- No session-expiry modal, logout card or sign-in form appeared in the Designer tab. The Designer responded to the Edit menu and to the Global Objects dialog without a server-event error, so the session was usable in this tab.
- Left over from EXP-110-R3: the Properties panel showed ButtonCart (Button) as the selected component. Nothing was changed in T1.

### Designer gate

- Scope: status bar `[ ScopeType: User / ScopeName: ... ]` (User scope).
- Form: FX_CustomerPortal open in its tab, selected. The Form tab did not need reopening, so no recent-forms open was made.
- Save: disabled. Undo: disabled. No dialog, menu or editor open at start.
- Canvas (screenshot `evidence/EXP-111/t1-01-gate-tree-and-canvas.png`): header strip "Customer Portal" at left, a customer icon picture and an empty box at the right of the header; menu column with three light-teal buttons Sign In, Home and Cart (Cart selected); the remaining region columns to the right are empty.
- **Console error count (baseline): 2 errors, 0 warnings.** Read from the tool output "Console:" line at the first snapshot. Every later browser tool output in T1 also showed 2 errors and 0 warnings; no rise.

### Components tree under FlexLayoutMain (read from the Components grid, read-only)

- Root `flexlayoutPane_FX_CustomerPortal` (FlexLayout):
  - FlexLayoutHeader (FlexLayout)
    - Region00: header > StaticHeader (Static)
    - Region01: user > StaticCustIcon (Static), StaticCustID (Static)
  - FlexLayoutMain (FlexLayout)
    - Region00: menu > ButtonSignIn (PushButton), ButtonHome (PushButton), ButtonCart (PushButton), in this order
    - Region01: spacer1 (no components)
    - **Region02: signinpage: no child component** (the next row is Region03 directly)
    - Region03: homepage (no child component listed)
    - Region04: cartpage (no child component listed)
    - Region05: spacer2 (no child component listed)
  - FlexLayoutFooter (FlexLayout)
    - Region00: UNKNOWN0 (already present, noted, not changed)

Expected result met: no component under Region02: signinpage. The menu Buttons and all other regions match the brief's expected tree.

### String check (Edit menu > String, Global Objects dialog, Strings group)

Both filters were applied with the search icon of the Strings group. Cancel was used to leave the dialog.

| String ID (filter) | Result | String Value | Version | Decision |
| --- | --- | --- | --- | --- |
| FX_sSignIn | Present, one row | `Sign In` | User version | Expected value; Caption is reused in T2 and T4 without the ellipsis |
| FX_sCustomerID | Present, one row | `Customer ID` | User version | Already exists from Part 5. **T3 must not create it.** It is reused unchanged (value recorded; never edited) |

- Screenshot of the FX_sCustomerID result: `evidence/EXP-111/t1-02-string-check-fx-scustomerid-value.png` (dialog with filter FX_sCustomerID, one row, String Value "Customer ID", Version "User version for user an..."; the toolbar Save icon is greyed, i.e. disabled, in this view). The FX_sSignIn result is recorded from the accessibility snapshot text (Name FX_sSignIn, String Value Sign In), not from a screenshot; the brief asked for one screenshot.
- After Cancel: no dialog open; Save disabled; console 2 errors, 0 warnings.

### Prompts, dialogs and errors in T1

- Prompts: none. Dialogs: only the Global Objects dialog (opened and cancelled).
- Server-event errors: none observed.
- Session expiry or re-login: none.

### T1 result

**Gate passed.** FX_CustomerPortal is open and clean in User scope; Region02: signinpage is empty; the menu Buttons and other regions match the brief; FX_sSignIn = Sign In; FX_sCustomerID = Customer ID (present). The baseline console error count is 2. T2 may start in a later task. No placement, Save, edit or Undo was performed.

## Findings (T1, observed only)

1. The Global Objects dialog's left grid is the "Strings" group (the Playwright trace names it `group 'Strings'`). Filtering needs the typed text plus the search icon; the Name and String Value of a selected row appear in the right-hand Properties group.
2. Refs in the Global Objects dialog go stale after a row selection: the search textbox ref and the dialog ref both returned "Ref ... not found" after the FX_sSignIn row was clicked. Each needed one fresh untargeted snapshot (see audit).
3. Accessibility snapshot shows empty values for the ButtonCart Caption, Theme Class and Justification comboboxes, while the screenshot shows FX_sCart and FX_BlueButton. The accessibility text is incomplete for these combobox cells, so combobox values for later readbacks should be confirmed visually.
4. The untargeted full snapshot (about 50.9 KB) was too large to show inline and was saved by the tool; depth-limited and targeted snapshots stayed inline and were used instead.

## Action audit (cumulative through T1)

| Category | Count | Notes |
| --- | --- | --- |
| Tab listing | 1 | before the first tab selection |
| Tab selections | 1 | index 0 (Designer); succeeded |
| Clicks (browser) | 7 | Edit menu nav (1); String menu item (1); Strings search icon (2); FX_sSignIn and FX_sCustomerID row selections (2); Global Objects Cancel (1) |
| Typed entries | 2 | filter text FX_sSignIn, filter text FX_sCustomerID |
| Failed typed entries | 1 | "Ref e1781 not found"; no text entered |
| Coordinate clicks | 0 | none |
| Toolbox selections / placements | 0 / 0 | none |
| Undo / Redo | 0 / 0 | none |
| Designer Saves | 0 | Save disabled before and after |
| Caption list opens, prompts, String editor OKs | 0, 0, 0 | none |
| Margin dialog opens / OK / Cancel | 0 / 0 / 0 | none |
| Global Objects dialog opened / cancelled | 1 / 1 | Strings filter; no changes |
| Form closes / reopens / recent-forms opens | 0 / 0 / 0 | not needed |
| Browser snapshot calls | 14 | 7 untargeted (2 of them recovery after "Ref not found"), 7 targeted (1 errored) |
| Browser find calls | 2 | read-only; not used for refs |
| Ref-not-found errors | 2 | 1 on typed entry, 1 on targeted snapshot; each followed by one fresh untargeted snapshot |
| Screenshots taken | 2 | `t1-01`, `t1-02` |
| Server-event errors | 0 | none |
| Session expiries / re-logins | 0 / 0 | none |
| Regenerate / unload / check-out actions | 0 | none |
| Console error readings | 2 errors, 0 warnings | every reading from the first to the last browser output |
| Repository reads (T1) | 9 Read calls | AGENTS.md (1); transcript ranges (3); recipes (2); Outcome sections (3) |
| Repository searches (T1) | 3 | Glob (2): EXP-111 record absent, EXP-106/107/110-R3 names; Grep (1): Outcome headings limited to the three named records |
| Image views (T1) | 2 | `t1-01` and `t1-02` viewed to confirm content |

## Worker-written file inventory (through T1)

Written by the worker (Write or saved screenshot):

- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (this record; created in T1)
- `evidence/EXP-111/t1-01-gate-tree-and-canvas.png` (screenshot, saved by the browser tool at the worker's request)
- `evidence/EXP-111/t1-02-string-check-fx-scustomerid-value.png` (screenshot, saved by the browser tool at the worker's request)

Written automatically by the browser tool, not by the worker's commands (listed for the inventory; none was read or searched):

- `evidence/playwright/page-2026-10-17T18-05-07-110Z.yml` (snapshot after the Edit click)
- `evidence/playwright/page-2026-10-17T18-05-17-813Z.yml` (after the String click)
- `evidence/playwright/page-2026-10-17T18-05-32-550Z.yml` (after the FX_sSignIn filter)
- `evidence/playwright/page-2026-10-17T18-05-39-778Z.yml` (after the FX_sSignIn row click)
- `evidence/playwright/page-2026-10-17T18-06-00-509Z.yml` (after the FX_sCustomerID filter)
- `evidence/playwright/page-2026-10-17T18-06-06-710Z.yml` (after the FX_sCustomerID row click)
- `evidence/playwright/page-2026-10-17T18-06-26-114Z.yml` (after the Cancel)
- `evidence/playwright/console-2026-10-17T18-04-27-328Z.log` (console log written by the tool when the tab list reported new entries; not read)
- One oversized snapshot output (about 50.9 KB) saved by the harness outside the repository (under the user's Claude projects tool-results folder); not read.

No other files were written. No Git operation was performed by the worker.

## Next step

T2 (new task): StaticSignIn (Static, Name StaticSignIn, Caption FX_sSignIn, Theme Class FX_Header, Justification Center, No Colon True, Size 20; 1.5, Margin 0,1,0,1) and then StaticImage1 (Static, Name StaticImage1, Bitmap File Name FX_CustomerSignIn.png, No Colon True, Size 21; 8, Margin 0,1,0,1), with one Designer Save after each performed step and the console-error stop.

## Acceptance check status (T1 part)

- AC-1: **met for T1.** Sources reviewed; session usable (Designer responded); User scope; FX_CustomerPortal open and clean; tree recorded with Region02: signinpage empty and menu and regions unchanged; string check recorded (FX_sSignIn = Sign In; FX_sCustomerID = Customer ID); baseline console error count 2. Evidence: `t1-01-gate-tree-and-canvas.png`, `t1-02-string-check-fx-scustomerid-value.png`.
- AC-2 to AC-5: not yet run (T2 to T5).

## Knowledge state (T1)

- Observed: Region02: signinpage empty and the menu order (ButtonSignIn, ButtonHome, ButtonCart); FX_sSignIn = Sign In; FX_sCustomerID = Customer ID present; String dialog filter and Cancel; console baseline 2 errors.
- Unresolved: whether the FX_sSignIn Global Objects result and value match a screenshot (recorded from snapshot text only); the Web Client tab (tab 1) was not inspected in T1.

## T2 recovery checkpoint (read-only, 2026-10-18)

Purpose: the T2 worker reached the 150-turn limit without a terminal report. This recovery task was read-only. It created nothing, edited no field, opened no list or editor, ran no Designer Save, Undo or Margin dialog, and did not close, reopen or refresh the Form. This section supersedes the T1-era "Next step" above.

### Sources read in this recovery

- `AGENTS.md`; this record; transcript lines 219-239 and 466-492; `recipes/session/session-expiry-and-stale-designer.md`; `recipes/components/add-component-from-toolbox.md`.
- `evidence/EXP-111/harness-audit-T2.md` (controller audit, written by the harness).
- Screenshots: `t1-01-gate-tree-and-canvas.png` (clean reference), `t2-21-save-5-after-step-a-staticimage1-named.png` (Save #5 toast), and the three recovery screenshots below.
- Not read: the Outcome sections of EXP-110-R3, EXP-107 and EXP-106 (not needed for a read-only inspection; T1 read them); the oversized snapshot saved by the tool (not opened, per the recovery instruction); the T2 worker transcript; the console log; the Web Client tab (tab 1), which was not selected or inspected.

### Session and Designer state (verified in this recovery)

- Browser tabs listed before any selection. Tab 0 (Designer, `MGForm=FX_CustomerPortal`) was already current; tab 1 (Web Client) was not used.
- Session usable: every read responded. No session-expiry modal, logout card or sign-in page. No "server event processing returned an error" text seen.
- Console: **2 errors, 0 warnings**, the same as the T1 baseline, in every tool output that reported it. No rise.
- Prompt, dialog, menu, dropdown, editor or list open: none visible in the snapshots or screenshots.
- Save: **enabled (Designer dirty).** Evidence: the find result and the snapshot show Save without a `[disabled]` flag, while Undo, Redo and the Align buttons carry `[disabled]`. The Save icon renders in the enabled colour in `recovery-01`, `-02` and `-03`, whereas it is greyed in `t1-01` (clean gate) and in `t2-21` after Save #5.
- Selected component: StaticImage1 (selected by this recovery's Components-row click; selection only, no property changed).
- Components tree (Components grid expanded, read-only):
  - FlexLayoutMain > Region00: menu: ButtonSignIn, ButtonHome, ButtonCart (order unchanged).
  - Region01: spacer1 (empty).
  - **Region02: signinpage: StaticSignIn (Static), then StaticImage1 (Static)**, both Container FlexLayoutMain. The rows are indented under Region02 in `recovery-02` and `recovery-03`.
  - Region03: homepage, Region04: cartpage and Region05: spacer2 have no children.
  - No stray or extra component. Root-level rows `Region01: main`, `Region02: footer` and FlexLayoutFooter > Region00: UNKNOWN0 are present; FlexLayoutHeader children (StaticHeader, StaticCustIcon, StaticCustID) are unchanged. The T1 tree did not list the root-level regions, so the comparison for them is unverifiable and not claimed.
- Visible properties (read-only):
  - **StaticSignIn**: Name `StaticSignIn`; Type Static; Caption `FX_sSignIn`; Theme Class `FX_Header`; Justification `Center`; Bitmap File Name blank; Font blank. **Not visible in this recovery:** No Colon, Size (Width/Height) and Margin (the Layout and Miscellaneous groups are collapsed and below the fold).
  - **StaticImage1**: Name `StaticImage1`; Type Static; Caption blank; Theme Class blank; **Bitmap File Name `20x20_settings.png`** (planned `FX_CustomerSignIn.png`); Justification `Right` (default). **Not visible:** No Colon, Size and Margin.

### Recovery screenshots (what each shows and does not prove)

- `evidence/EXP-111/recovery-01-current-state-before-any-action.png`: canvas with the Customer Portal header, menu column (Sign In, Home, Cart), and the signinpage column showing a bold "Sign In" heading (StaticSignIn) and a second dashed box with a gear icon beneath it (StaticImage1, no picture drawn). Properties show the Form (FX_CustomerPortal) with no component selected, Components grid collapsed to `Pane (00)`, and the Save icon enabled. **Proves:** canvas state and Form-level selection. **Does not prove:** the tree children (grid collapsed at capture), Size, No Colon or Margin, or the saved state of any field.
- `evidence/EXP-111/recovery-02-staticsignin-properties-readonly.png`: StaticSignIn selected; the Components grid shows Region02: signinpage with StaticSignIn and StaticImage1 indented under it; Properties show Name, Caption `FX_sSignIn`, Theme Class `FX_Header`, Justification `Center`; Save enabled. **Proves:** Name, Caption, Theme Class, Justification and nesting in the tree. **Does not prove:** Size, No Colon, Margin, or whether these are saved.
- `evidence/EXP-111/recovery-03-staticimage1-properties-readonly.png`: StaticImage1 selected; Properties show Name `StaticImage1`, Bitmap File Name `20x20_settings.png`, Justification `Right`; Save enabled. **Proves:** the uncommitted wrong bitmap value is displayed. **Does not prove:** No Colon, Size, Margin, or why the value changed.
- Existing `evidence/EXP-111/t2-21-save-5-after-step-a-staticimage1-named.png`: toast "Save: Form [FX_CustomerPortal] and global object(s) were saved."; Save icon greyed; StaticImage1 Name visible; Bitmap blank; Justification Right. **Proves:** Save #5 completed, and the Designer was clean at that point. **Does not prove:** the content of any other save.

### T2 step status (controller audit plus visible state; not a worker report)

| Step | Planned | Evidence in audit and files | Status |
| --- | --- | --- | --- |
| A StaticSignIn | Static in Region02; Name StaticSignIn | Toolbox Static (13); placement click (14); tree `t2-01`; Name typed (19); Save #1 (22, `t2-02`) | Name visible; placement in tree visible; Save #1 response not re-viewed |
| B Caption | FX_sSignIn, no ellipsis | Caption list opened (26); 10 key presses F,X,_,s,S,i,g,n,I,n (29-38); committed by Description click (41); Save #2 (45, `t2-05`, `t2-06`) | Caption `FX_sSignIn` visible in `recovery-02` |
| C StaticSignIn | Theme FX_Header; Justification Center; No Colon True; Size 20; 1.5 | Theme list ArrowDown/ArrowUp/Enter (48-56); Justification (59-66); No Colon (69-78); Size rows (79, 82), Height click (84), Height typed (86), Tab (87); Save #3 (92, `t2-17`) | Theme FX_Header and Justification Center visible. No Colon and Size not visible. **No Width text entry appears in the audit** (only Height was typed), so Width 20 is unverified. |
| D StaticSignIn | Margin 0,1,0,1 | Margin adorner coordinate click (95); Margin dialog screenshot `t2-18`; Margin cell (100); value typed (103); Tab (104); OK failed with ref error (107); OK ok (109); Save #4 (111, `t2-20`) | Not re-verified in recovery (dialog not reopened) |
| A StaticImage1 | Static in Region02; Name StaticImage1 | Toolbox Static (115); placement click (116); Name typed (124), Tab (125); Save #5 (129, `t2-21`) | **Verified saved**: Name visible; Save #5 toast |
| C StaticImage1 | Bitmap FX_CustomerSignIn.png; No Colon True; Size 21; 8 | Bitmap arrow (132); list keys F, X, PageDown, ArrowDown x3 (136-154); textbox entry (158); Tab (159) | **Not achieved.** Bitmap shows `20x20_settings.png` (not the planned value). No Colon and Size: no action in the audit. Save enabled. |
| D StaticImage1 | Margin 0,1,0,1 | none | Not started |

Interpretation (not verified): the ArrowDown highlight in the Bitmap list was probably committed by Tab, which the brief warns about (Tab commits the highlighted first item). Only the Designer's visible state and the audit support this, not a direct check.

### Save accounting

- Save-button clicks in the T2 audit: 7 (orders 22, 45, 90, 92, 111, 127, 129).
- Five ran with an ok result (22, 45, 92, 111, 129). Two (90 and 127) returned "Ref ... not found", so the controller and the tool error say no click was executed. **Settled 2026-10-18 (operator ruling, T12):** orders 90 and 127 did not execute a Designer Save.
- Saves completed: **5** (per the audit). Save #5 is the only one checked against its own toast; #1 to #4 rely on their ok clicks and their screenshots, which were not re-opened here.
- Remaining T2 Save budget: **2 of 7** if 90 and 127 did not execute. If either did, the budget is 1 or 0. Settled 2026-10-18 (operator ruling, T12): 90 and 127 did not execute, so the T2 Save count is 7 of 7 and the run total is 16.
- The unsaved bitmap change must be corrected and saved before the StaticImage1 step C can be complete. That will use one of the two remaining Saves, and the Margin step (D) will need the second.

### Errors and counts

- T2 controller audit: 68 actions and 55 reads. Four errors: #90 Save click (ref), #107 Margin OK click (ref), #120 snapshot (ref), #127 Save click (ref). The controller audit records one issue: "No terminal event".
- No server-event error and no Caption commit with Save disabled appears in the audit or in the visible state.
- Controller flag: `browser_type` x5 (orders 19, 86, 103, 124, 158). These are entries into permitted fields (Name x2, Height, Margin, Bitmap File Name combobox input); the brief does not prohibit typing.

### Recovery action counts (this task only)

- Tool calls: **26**. Repository and evidence reads (Read tool): **12**. Glob: **1**. Browser tab list: **1**. Browser snapshots: **5** (one errored: `e392` targeted snapshot "Ref not found"; one untargeted snapshot saved by the tool to a tool-results file, not opened). Browser find: **1**. Screenshots: **3**. Browser clicks: **3**, each a UI-only selection or view toggle: Components grid Expand (1), StaticSignIn row (1), StaticImage1 row (1).
- Form mutations: **0**. Typed entries: **0**. Key presses: **0**. Coordinate clicks: **0**. Designer Save: **0**. Property lists or editors opened: **0**. Dialogs opened: **0**. Undo or Redo: **0**. Prompts answered: **0**. Form close or reopen: **0**. Re-logins: **0**. Console error readings: **2 errors, 0 warnings** each time.
- Browser errors in this task: 1 (the stale targeted snapshot). Recovery allowance: one stale-ref error followed by one fresh untargeted snapshot. Used up; no further references were used.

### Worker-written file inventory (this recovery task)

- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (status line edited; this section appended)
- `evidence/EXP-111/recovery-01-current-state-before-any-action.png`
- `evidence/EXP-111/recovery-02-staticsignin-properties-readonly.png`
- `evidence/EXP-111/recovery-03-staticimage1-properties-readonly.png`

Written by the browser tool, not by the worker's commands, and outside `evidence/EXP-111/`:

- `evidence/playwright/page-2026-10-17T18-27-17-820Z.yml` (snapshot after Expand)
- `evidence/playwright/page-2026-10-17T18-27-52-802Z.yml` (after the StaticSignIn row click)
- `evidence/playwright/page-2026-10-17T18-28-10-824Z.yml` (after the StaticImage1 row click)
- `evidence/playwright/console-2026-10-17T18-26-48-445Z.log` (written by the tool on the tab list; not read)
- One oversized snapshot saved outside the repository to the Claude tool-results folder (not read)

Written by the harness, present in the EXP-111 evidence folder and not by this worker: `evidence/EXP-111/harness-audit-T2.md`, `evidence/EXP-111/harness-audit-T1.md`.

### Final state (end of this recovery task)

- FX_CustomerPortal open in User scope; Designer **not clean** (Save enabled); no prompt, dialog, list or editor open; StaticImage1 is the selected component.
- Last verified saved step: **Save #5** (StaticImage1 named; toast confirmed). The bitmap change after Save #5 is unsaved and wrong.
- Components under Region02: StaticSignIn and StaticImage1 only. StaticCustID2, EditCustID and ButtonSignIn2 are not present.

### Single next safe action (for the coordinator; no mutation performed)

A fresh read-only task that expands the Layout and Miscellaneous groups of StaticSignIn (no field change) to read Width, Height and No Colon, and reads the Margin dialog of StaticSignIn with Cancel only. That settles whether the Save #3 and Save #4 content is complete, before anyone decides how to correct StaticImage1's Bitmap File Name (one permitted correction, with the list highlight checked before commit) and how the two remaining Saves are used.

*Superseded (2026-10-18, T2 continuation):* the bitmap correction and Steps C and D were performed under the operator ruling, with Saves #6 and #7. The T2 Save budget is exhausted. See "T2 continuation: Saves #6 and #7" below.

## T2 continuation: Saves #6 and #7 (operator-authorized, 2026-10-18)

Operator rulings applied: five T2 Saves had executed before this task (Saves #1 to #5); Saves #6 and #7 were authorized for StaticImage1 Step C (bitmap, No Colon, Size) and Step D (Margin). StaticSignIn Steps A to D received operator disposition and were not revisited. T5 performs the final readback. No new placement was authorized or performed.

### Read-only precheck (before any mutation)

- Browser tabs listed before any selection. Tab 0 (Designer, `MGForm=FX_CustomerPortal`) was already current; tab 1 (Web Client) was not used.
- Fresh snapshots taken in this task. Session usable (no expiry, logout card or sign-in page). User scope in the status bar (`ScopeType: User`). FX_CustomerPortal open. Console **2 errors, 0 warnings** (the T1 baseline). Save enabled (no `[disabled]` flag), so the Designer was dirty as expected. No prompt, dialog, list or editor open.
- Tree under `FlexLayoutMain > Region02: signinpage`: StaticSignIn, then StaticImage1 (indented under Region02 in the Components grid). Nothing else under Region02.
- StaticImage1 (selected): Name `StaticImage1`; **Bitmap File Name `20x20_settings.png`** (matching the operator's stated state); Justification `Right` (default); Size `20; 1` (default); No Colon `False`; Flex Attributes `Index: 2 Target: signinpage`. Recorded before any change.
- Precheck screenshot: `evidence/EXP-111/recovery-03-staticimage1-properties-readonly.png` (from the earlier recovery; not repeated in this task).

### Step C: StaticImage1 (one permitted bitmap correction; No Colon; Size)

| Field | Before | Action | Committed value and evidence |
| --- | --- | --- | --- |
| Bitmap File Name (the one correction) | `20x20_settings.png` | Opened the list (value arrow). Typed `F X _ C u s t o m e r S` key by key into the combobox input. The list did **not** filter (it still started at `20x20_settings.png`, highlighted). A read-only find showed `FX_CustomerSignIn.png` in the list DOM; a targeted listbox snapshot gave its ref. **Clicked the `FX_CustomerSignIn.png` option** (no arrow, Enter or Tab). Left the field by clicking the Description row. | Tree (snapshot after the commit): `Bitmap File Name: FX_CustomerSignIn.png`. Combobox accessible text: `FX_CustomerSignIn.png`. Screenshot `t2c-02`: cell truncated `FX_CustomerSignI...`, Save enabled. |
| No Colon | `False` | Opened the list (value arrow). Targeted listbox snapshot showed `True` (ref option) and `False` (selected). **Clicked `True`**. Left by clicking the Description row. | Tree: `No Colon: True`. Save #6 screenshot `t2c-04`: `No Colon True`. |
| Width | `20` (default) | Opened the value cell, targeted textbox snapshot, plain fill `21`, Tab. | Tree: `Width 21`. Save #6 screenshot `t2c-04`: `Width 21`. |
| Height | `1` (default) | Opened the value cell, targeted textbox snapshot, plain fill `8`, Tab. | Tree: `Height 8`. Save #6 screenshot `t2c-04`: `Height 8`. |
| Size summary | `20; 1` | Recorded after the entries. | Tree: `Size 21; 8`. Save #6 screenshot `t2c-04`: `21; 8`. |
| Justification | `Right` (default) | Not planned for StaticImage1; left unchanged. | Still `Right`. |
| Flex Attributes | `Index: 2 Target: signinpage` | Not changed. | Unchanged. |

- Console error count after every field: 2 errors, 0 warnings. Several tool outputs (the key presses, `browser_type`, the coordinate click and the screenshots) do not print the console line; each such step was checked with the next snapshot, which showed 2/0. Recorded as a limitation.
- **Save #6** (after Step C, once): clicked Save (`e16`). Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save icon greyed and Undo greyed afterwards. Screenshot `t2c-04-save-6-after-step-c-staticimage1-bitmap-nocolon-size.png`. Console 2/0.
- Limitation: the Save #6 screenshot does not show the bitmap value (the Properties panel is scrolled to the Miscellaneous group). The bitmap is verified by the pre-save tree text only.

### Step D: StaticImage1 Margin 0,1,0,1

- Canvas adorner coordinate click at (497, 249), top-left inside StaticImage1's box (the one coordinate click allowed for T2 Step D). Console 2/0. Screenshot `t2c-05-margin-dialog-staticimage1-before-ok.png`: dialog titled "FlexLayout", Design group with Region Index `2` and an empty Margin row; no Type, Auto Size or Regions grid. It belongs to StaticImage1 (Region Index 2, `Index: 2 Target: signinpage`).
- Margin value cell opened (ref click); targeted textbox snapshot; plain fill `0,1,0,1`; Tab. Screenshot `t2c-06-margin-0-1-0-1-entered-before-ok-staticimage1.png`: Margin reads `0,1,0,1` before OK. Snapshot tree row: `Margin 0,1,0,1`.
- **OK clicked once.** Dialog closed. Canvas then drew StaticImage1 with its bitmap picture (an image is visible; this record does not identify its content beyond the property value) and the box shifted down, consistent with the top margin (screenshot `t2c-07-after-margin-ok-before-save-7.png`). The Margin was **not** re-read in the dialog after OK (a limitation; T5 readback).
- **Save #7** (after Step D, once): clicked Save. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save icon greyed and Undo greyed afterwards. Screenshot `t2c-08-save-7-after-step-d-staticimage1-margin.png`. Console 2/0.

### Designer state at the end of this continuation

- FX_CustomerPortal open in User scope. Designer **clean** (Save and Undo greyed after Save #7). No dialog, list or editor open. The Components grid is in its collapsed `Pane (00)` view, and no component is selected in Properties (the Form tab is shown). This is a view state after the OK; the tree was not re-expanded after Save #7.
- Components under Region02: StaticSignIn and StaticImage1 (verified before Save #6 and before Step D). Not re-verified after Save #7 (tree collapsed).
- **Designer Saves cumulative for T2: 7 of 7** (the operator ruled that Saves #1 to #5 had executed; Saves #6 and #7 were performed here, both with success responses). **The T2 Save budget is exhausted.** No further Save is authorized for T2.
- StaticSignIn, StaticCustID2, EditCustID and ButtonSignIn2: not touched in this continuation. StaticCustID2, EditCustID and ButtonSignIn2 do not exist yet.

### Deviations and findings (observed only)

1. **Bitmap list does not filter on typed text.** Typing `FX_CustomerS` into the combobox input left the list unfiltered; the option was reached through the list DOM and a direct click. Observed once; not a repeatable procedure.
2. **Targeted snapshots invalidate refs outside their subtree.** Several "Ref not found" errors followed targeted snapshots (e.g. `e1027`, `e1635`, `e2219`), while depth-limited untargeted snapshots (`depth` 7) returned usable inline refs. Observed in this task; three snapshot errors and one click error occurred. Each was followed by one fresh untargeted snapshot, as the brief allows.
3. **Some tool outputs omit the console line** (key presses, `browser_type`, the coordinate click, screenshots). Counts were checked at the next snapshot or click output, which showed 2/0 every time.
4. **Task-start reads were limited in this task.** AGENTS.md was read in full. The EXP-111 record was searched with Grep for the recovery heading, not re-read in full (it was read in the earlier recovery task). The transcript ranges and recipes were not re-read here (read earlier in this conversation).
5. The persisted full snapshot was not readable (the tool denied a Read of it), so the page-wide refs came from depth-limited and targeted snapshots instead.
6. StaticImage1's Justification (`Right`, default) remains unchanged, as the brief requires (not a planned attribute).

### Action audit: this continuation task (exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Tool calls, total | 85 | Includes 5 errors |
| Read calls | 10 | AGENTS.md (1); image reads of this task's screenshots (8); one Read of a persisted snapshot (denied) (1) |
| Grep calls | 1 | EXP-111 record, heading lookup only |
| Browser tab list / tab selection | 1 / 0 | list only; tab 0 already current |
| Browser snapshots | 27 | 3 "Ref not found" errors (after targeted snapshots); 1 empty targeted result; 1 untargeted full snapshot persisted to a file (not opened); 22 depth-limited or targeted snapshots used |
| Browser find calls | 6 | read-only; no find ref used for a click |
| Browser clicks (`browser_click`) | 13 | Bitmap arrow (1); bitmap option (1); Description row (2); No Colon arrow (1); `True` option (1); Width cell (1); Height cell (2, one "Ref not found"); Margin value cell (1); OK (1); Save (2) |
| Coordinate clicks | 1 | Margin adorner (497, 249) |
| Undo / Redo clicks | 0 / 0 | none |
| Key presses | 15 | 12 bitmap filter keys (`F X _ C u s t o m e r S`); 3 Tabs (after Width, Height, Margin) |
| Typed entries (`browser_type`) | 3 | Width `21`; Height `8`; Margin `0,1,0,1` |
| Field corrections | 1 (bitmap) | the one permitted bitmap correction; no Width, Height or Margin corrections |
| List opens | 2 | Bitmap File Name; No Colon |
| Prompts / String editor OKs | 0 / 0 | none |
| Margin dialog opens / OK / Cancel | 1 / 1 / 0 | one adorner click |
| Designer Saves | 2 | Save #6 and Save #7, both with success toasts; no Save retried |
| Screenshots | 8 | `t2c-01` to `t2c-08` |
| Image reads (Read tool) | 8 | `t2c-01` to `t2c-08`, each viewed once |
| Form closes / reopens / recent-forms opens | 0 / 0 / 0 | none |
| Server-event errors | 0 | none |
| Session expiries / re-logins | 0 / 0 | none |
| Regenerate / unload / checkout / FormSync / deployment | 0 | none |
| Console readings | 2 errors, 0 warnings | every reading observed |

### Worker-written file inventory (this continuation task)

Written by the worker:

- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (status line edited; superseded note added; this continuation section appended)
- `evidence/EXP-111/t2c-01-bitmap-list-filtered-FX_CustomerS.png`
- `evidence/EXP-111/t2c-02-bitmap-committed-FX_CustomerSignIn-save-enabled.png`
- `evidence/EXP-111/t2c-03-no-colon-list-open.png`
- `evidence/EXP-111/t2c-04-save-6-after-step-c-staticimage1-bitmap-nocolon-size.png`
- `evidence/EXP-111/t2c-05-margin-dialog-staticimage1-before-ok.png` (dialog before the Margin value entry)
- `evidence/EXP-111/t2c-06-margin-0-1-0-1-entered-before-ok-staticimage1.png` (Margin `0,1,0,1` before OK)
- `evidence/EXP-111/t2c-07-after-margin-ok-before-save-7.png`
- `evidence/EXP-111/t2c-08-save-7-after-step-d-staticimage1-margin.png`

Written by the browser tool (listed for the inventory; not read):

- `evidence/playwright/page-2026-10-17T18-40-01-040Z.yml`, `...18-40-58-180Z.yml`, `...18-41-06-109Z.yml`, `...18-41-24-698Z.yml`, `...18-41-41-675Z.yml`, `...18-41-50-839Z.yml`, `...18-42-01-853Z.yml`, `...18-42-48-102Z.yml`, `...18-43-22-863Z.yml`, `...18-43-35-271Z.yml`, `...18-43-54-156Z.yml`, `...18-44-24-141Z.yml`, `...18-44-41-406Z.yml` (one per click that returned a snapshot file)
- `evidence/playwright/console-2026-10-17T18-39-24-137Z.log` (written on the tab list; not read)
- One persisted full snapshot outside the repository (the tool's tool-results folder; not read, and a Read of it was denied)

### Final state

- FX_CustomerPortal open, User scope, **clean**, no prompt or dialog open.
- StaticImage1: Name `StaticImage1`; Caption blank; Theme Class blank; Bitmap File Name `FX_CustomerSignIn.png`; Justification `Right` (default, unchanged); No Colon `True`; Size `21; 8`; Margin `0,1,0,1` (set through the dialog; OK; not re-read after OK); Flex Attributes `Index: 2 Target: signinpage`.
- StaticSignIn: unchanged in this continuation (operator-dispositioned; T5 readback to verify).

### Next step (for the operator; no action taken)

T2 is complete. The next component is StaticCustID2 (T3). The operator directed that component work be divided into one component per worker task, so T3 should be a separate task. Its precheck should first confirm the T2 end state (tree under Region02, Designer clean, console 2/0) read-only, then perform StaticCustID2 placement with its Caption FX_sCustomerID (string present per T1; no ellipsis needed). Note that the T3 brief line "Five Designer Saves" is now split across tasks, and the T3 Save budget is untouched.

## T3 StaticCustID2 (operator-authorized; first task and continuation after the usage limit, 2026-10-18)

Scope of this section: StaticCustID2 only (steps A, B and C). EditCustID is the next task, with the remaining two T3 Saves (budget: T3 Saves #4 and #5). No Margin step is planned for StaticCustID2. Briefing note: the task header said "task=T6", but the bounded instruction was the StaticCustID2 portion of T3, which is what was executed.

### Sources and session

- AGENTS.md re-read at the start of the continuation (lines 1 to 30 only in this task; the full file was read earlier in the same conversation). The EXP-110-R3, EXP-107 and EXP-106 Outcome sections, the transcript ranges and the recipes were read earlier in this conversation, not re-read in the continuation. This is a partial task-start read.
- Browser tabs listed before any selection (tab 0 = Designer, `MGForm=FX_CustomerPortal`). No tab selection was made; tab 0 was the current tab throughout. Tab 1 (Web Client) was not used.
- Session usable throughout: no session-expiry modal, logout card or sign-in page. Console **2 errors, 0 warnings** in every reading (baseline 2/0).

### Precheck (continuation, read-only)

- FX_CustomerPortal open in User scope (status bar `ScopeType: User`). **Save was disabled and Undo disabled** at the start of the continuation. No prompt, dialog, list or editor open. Details had collapsed to the Collections view and Properties showed the Form.
- Region02: signinpage (Components grid, expanded): StaticSignIn, StaticImage1, **StaticCustID2** (Container FlexLayoutMain), in that order. Nothing else under Region02. Region00 menu (ButtonSignIn, ButtonHome, ButtonCart), Region01 spacer1, Region03 homepage, Region04 cartpage, Region05 spacer2 and the header and footer components were present as before.
- StaticCustID2 (read-only, row selected): Name `StaticCustID2`; Caption `FX_sCustomerID` (Save 2 persisted); **Justification `Right`** (not Center); **No Colon `False`**; Size `20; 1` (defaults for Width 20 and Height 1); Flex Attributes `Index: 2 Target: signinpage`; Binding Type not read (no binding was set; Binding is not an attribute of this step).
- Observation (not diagnosed): the Justification Center commit and the No Colon True commit, both made after Save 2 and unsaved, were **not present** at the start of the continuation. The Designer had apparently been reset across the usage-limit pause: Save disabled, Details collapsed, Properties on the Form, and Justification and No Colon back to their pre-edit values. Cause not established (possibly a Designer reload by the harness). Only the Save 1 and Save 2 content was retained. The continuation re-applied Justification and No Colon before Save 3.

### Step A: placement and Name (first task, before the usage limit)

- Toolbox Static row clicked once (arming the placement). Placement coordinate click at (560, 425), inside Region02 below StaticImage1's box (1 placement; coordinate click).
- Tree after placement: the new component `static1_USER` is the last child of FlexLayoutMain > Region02, after StaticImage1 and before Region03: homepage. Screenshot `t3a-01-staticcustid2-placed-after-staticimage1-tree-and-canvas.png`. No Undo was needed.
- Default values recorded (read from the Properties grid before any change): Name `static1_USER`; Caption blank; Theme Class blank; Bitmap File Name blank; Justification `Right`; Size `20; 1`; Width 20; Height 1; No Colon `False`; Flex Attributes `Index: 2 Target: signinpage`; Binding Type `None`.
- Name: value cell clicked (1), plain fill `StaticCustID2` (1), Tab (1). Committed Name `StaticCustID2` confirmed in the tree row and the Properties Name row. Console 2/0.
- **T3 Save #1** (after Step A): Save clicked once, from a snapshot taken in the same task. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo greyed after. Screenshot `t3a-02-save-1-after-step-a-staticcustid2-named.png`. Console 2/0.

### Step B: Caption FX_sCustomerID (existing string; no ellipsis; no string created)

- The string was confirmed in T1 (FX_sCustomerID = Customer ID, present), so no prompt was expected and none was seen. The Caption ellipsis was **not** clicked.
- Caption value cell clicked to open its field (1). Typed `FX_sCustomerID` key by key (14 key presses: F, X, _, s, C, u, s, t, o, m, e, r, I, D). Screenshot of the typed field with the list state, taken before leaving the field: `t3a-03-caption-list-typed-FX_sCustomerID-before-description-click.png` (the combobox shows `FX_sCustomerID`; no list was visible in the image). No accessibility snapshot was taken while the field was open.
- Left the field by clicking the Description row (1). Not by Tab, and no list item was chosen by keyboard.
- Verified: committed Caption `FX_sCustomerID` in the Properties Caption row and the tree; **Save became enabled** after the commit; console 2/0 after leaving the field. The canvas showed the resolved label `Customer ID:` (with colon, because No Colon was still False at that time).
- **T3 Save #2** (after Step B): the first Save click raised "Ref e1158 not found" and did not run; after one fresh untargeted snapshot, Save was clicked once. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save greyed after. Screenshot `t3a-04-save-2-after-step-b-caption-fx_scustomerid.png`. Console 2/0.

### Step C: Justification Center, No Colon True, Width 20, Height 1.5 (T3 Save #3)

Attempt 1 (first task, before the usage limit): Justification value cell clicked, then the combobox arrow, the list opened and Center was clicked, then Tab. The Save was enabled after that commit. No Colon: the arrow was clicked and the list opened, but True was not clicked before the usage limit. The Designer reset then removed these unsaved edits (see the precheck).

Attempt 2 (continuation, after the precheck):

| Field | Action (this continuation) | Committed value and evidence |
| --- | --- | --- |
| No Colon | No Colon value arrow clicked (1) (list opened, not screenshot-verified in this attempt; a find showed True and False options). Listbox targeted snapshot; **True clicked** (1). Left by clicking Description row (1). | Tree: `No Colon: True`. Save enabled. Canvas label now `Customer ID` (colon removed). |
| Justification | Value cell clicked (1) (edit state, Right highlighted). Combobox arrow clicked (1), list opened. Listbox targeted snapshot; **Center clicked** (1). **Tab** (1) to commit. | Properties and tree: `Justification: Center`. Save enabled. Screenshot `t3a-10`. |
| Width | Value cell clicked (1). Active textbox confirmed by targeted snapshot. Plain fill `20` (1). Tab (1). | Tree: `Width 20`. |
| Height | Value cell clicked (1). Active textbox confirmed by targeted snapshot (value `1`). Plain fill `1.5` (1). Tab (1). | Tree: `Height 1.5`. |
| Size summary | Read after the entries. | **`20; 1.5`** (screenshot `t3a-10-staticcustid2-size-20-1_5-before-save-3.png`: Justification Center, Size 20; 1.5, Width 20, Height 1.5, Save enabled, canvas `Customer ID`). |

- Groups opened for reading (view-only double-clicks): Appearance, Miscellaneous, Specific Attributes (sub-group), Layout. No Theme Class, Bitmap File Name, Binding Type or Margin was changed.
- Read-only values confirmed before Save 3: Caption `FX_sCustomerID`; Theme Class blank (not planned); Bitmap File Name blank (not planned); Justification `Center`; No Colon `True`; Size `20; 1.5`; Width 20; Height 1.5; Binding Type `None` (not changed; not read again after the Designer reset).
- **T3 Save #3** (after Step C): a targeted toolbar snapshot went stale ("Ref e11 not found", not a Save click); after one fresh untargeted snapshot, Save was clicked once. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." **Save and Undo greyed afterwards (Designer clean).** Screenshot `t3a-11-save-3-after-step-c-staticcustid2-properties.png`: Name StaticCustID2, Caption FX_sCustomerID, Justification Center, Size 20; 1.5, Width 20, Height 1.5 visible. No Colon is not visible in that image; it is recorded from the tree read taken before Save 3.

### Designer state at the end of this task

- FX_CustomerPortal open in User scope, **clean** (Save and Undo disabled after Save 3). No dialog, list or editor open. Properties shows StaticCustID2 (Component tab). Console 2/0.
- Region02: signinpage contains StaticSignIn, StaticImage1, StaticCustID2 (in order). StaticCustID2 is the last child.
- StaticSignIn and StaticImage1 were not re-read after the Designer reset (only their presence in Region02 was verified). Their state is for T5 readback.
- T3 Saves used: **3 of 5**. Remaining T3 Save budget: **2 (for EditCustID only)**.

### Next step (not performed)

EditCustID alone, in a separate task: Toolbox Edit, one placement click after StaticCustID2 (last child of Region02), Name EditCustID, Justification Center, Width 20 and Height 1.5, then Save(s), with Binding Type recorded and left unchanged (`None` on the placed component; the Variable Customer ID binding is deferred to Part 8). The task's precheck should first confirm the end state read-only (tree, Save disabled, console 2/0).

### Action audit (this T3 StaticCustID2 work, both segments; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Toolbox selections | 1 | Static row (first segment) |
| Placement coordinate clicks | 1 | (560, 425), first segment |
| Adorner coordinate clicks | 0 | none (no Margin for StaticCustID2) |
| Undo clicks | 0 | none |
| Name entries (plain fill) | 1 | `StaticCustID2`, then Tab |
| Caption list opens (value cell clicks) | 1 | then 14 key presses `FX_sCustomerID`, then Description click |
| Caption string prompts / String editor OKs | 0 / 0 | none (string existed; ellipsis not clicked) |
| Justification value-cell clicks / list opens (arrow) / option clicks / Tabs | 2 / 2 / 2 / 2 | one pass before the usage limit, one in the continuation; the first pass's commit was lost in the Designer reset |
| No Colon arrow clicks / option clicks / Description-row clicks | 2 / 1 / 1 | first segment opened the list (no True yet); continuation chose True |
| Width entries / Height entries (plain fill) | 1 / 1 | `20`, `1.5`; each followed by Tab |
| Field corrections | 0 | none (the Justification and No Colon loss was a reset, not a correction by the worker) |
| Designer Saves | 3 | Save 1 (Name), Save 2 (Caption), Save 3 (Justification, No Colon, Size); each with a success toast |
| Save clicks that did not run (stale ref) | 1 | the Save #2 attempt ("Ref e1158 not found"); retried once after a fresh snapshot |
| Toolbar/Save-related targeted snapshots that went stale | 1 | "Ref e11 not found" before Save #3 (not a Save click) |
| Justification arrow ref error | 1 | "Ref e1712 not found" in the first segment; recovered by a fresh snapshot |
| Tree/Properties targeted snapshots with "Ref not found" | 3 | continuation; each followed by one fresh untargeted snapshot |
| Expand Details / Components grid / Components tab (view toggles) | 3 | no mutation |
| Double-click group expansions (view-only) | 5 | Appearance, Miscellaneous, Specific Attributes, Layout, Size |
| Tab-selection calls | 0 in the continuation (1 list at the start) | tab 0 current |
| Screenshots (this T3 work) | 11 | `t3a-01` to `t3a-11` (see the inventory); `t3a-05` and `t3a-07` were each written twice (the later image replaced the earlier) |
| Server-event errors | 0 | none |
| Session expiries / re-logins | 0 / 0 | none |
| Console readings | 2 errors, 0 warnings | every reading observed |
| Prompts | 0 | none |
| Form closes / reopens | 0 / 0 | none (the Designer reset across the usage-limit pause was observed, not caused by the worker) |

### Worker-written file inventory (this T3 StaticCustID2 work)

Written by the worker (screenshots; saved by the browser tool at the worker's request):

- `evidence/EXP-111/t3a-01-staticcustid2-placed-after-staticimage1-tree-and-canvas.png`
- `evidence/EXP-111/t3a-02-save-1-after-step-a-staticcustid2-named.png`
- `evidence/EXP-111/t3a-03-caption-list-typed-FX_sCustomerID-before-description-click.png`
- `evidence/EXP-111/t3a-04-save-2-after-step-b-caption-fx_scustomerid.png`
- `evidence/EXP-111/t3a-05-justification-list-open.png` (written twice; the final image shows the Justification list open with Right highlighted)
- `evidence/EXP-111/t3a-06-resume-state-readonly-after-usage-limit.png`
- `evidence/EXP-111/t3a-07-components-tree-after-usage-limit-readonly.png` (written twice; the final image shows the Components tree expanded to Pane (00) rows)
- `evidence/EXP-111/t3a-08-staticcustid2-selected-properties-readonly.png`
- `evidence/EXP-111/t3a-09-staticcustid2-appearance-expanded-readonly.png`
- `evidence/EXP-111/t3a-10-staticcustid2-size-20-1_5-before-save-3.png`
- `evidence/EXP-111/t3a-11-save-3-after-step-c-staticcustid2-properties.png`
- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (this section; the status line)

Written by the browser tool (listed for the inventory; not read): snapshot files under `evidence/playwright/` created for each click that returned a file (e.g. `page-2026-10-17T19-16-42-916Z.yml` through `page-2026-10-18T05-34-38-185Z.yml`), `evidence/playwright/console-2026-10-17T19-16-18-526Z.log` and `console-2026-10-18T05-29-57-234Z.log` (written on the tab list; not read), and some large snapshots saved to the tool-results folder (not read; one persisted snapshot could not be read because access was denied). Written by the harness earlier: `evidence/EXP-111/harness-audit-T1.md`, `evidence/EXP-111/harness-audit-T2.md`.

### Limitations and deviations (observed)

1. The T2 qualifications still stand: the StaticImage1 bitmap was confirmed before Save 6 (not after); the StaticImage1 Margin was not re-read after OK; the task-start reads in this continuation were partial.
2. **The unsaved Justification and No Colon edits after Save 2 did not survive the usage-limit pause** (Designer reset observed). Re-applied and saved in Save 3. The cause is not established.
3. No Colon True is not visible in the Save 3 screenshot; it was confirmed by the tree read before Save 3.
4. Binding Type of StaticCustID2 is not part of this step and was not read in the continuation (no binding was set).
5. Same-session UI evidence only. No cross-session durability or replay verification is claimed.

## T3 EditCustID (operator-authorized EditCustID-only task, run R-20261018-020406-7LK1 cycle 7, task T7, 2026-10-18)

Scope: EditCustID only, Steps A and C of T3. Budget: T3 Saves #4 and #5 (2 remaining at the start). **Result: Step A done (Name, Save #4). Step C not done: the Justification list would not open, so Justification, Width, Height and Save #5 were not performed. Stopped blocked at a clean step boundary.**

### Sources and session

- AGENTS.md read in full at the start of this task (lines 1 to 240). The T3 section of this record, the EXP-110-R3, EXP-107 and EXP-106 Outcome sections, the transcript range and the two recipes were read in the earlier part of the conversation (before the summary), not re-read here.
- Browser tabs listed before any tab selection (tab 0 = Designer, `MGForm=FX_CustomerPortal`). No tab selection was made; tab 0 stayed current. Tab 1 (Web Client) was not used.
- Session usable: no session-expiry modal, logout card or sign-in page. Console **2 errors, 0 warnings** in every reading (baseline 2/0). No console messages were read.

### Precheck (read-only, start of this task)

- FX_CustomerPortal open in User scope (status bar `ScopeType: User`). Save and Undo disabled, no prompt, dialog, list or editor open.
- Region02: signinpage (Components tree): StaticSignIn, StaticImage1, StaticCustID2 (Container FlexLayoutMain), in that order. Menu Buttons, other regions and the header and footer unchanged.

### Step A: placement and Name (T3 Save #4)

- Toolbox Edit row clicked once (1). Placement coordinate click at (560, 470), inside Region02 below StaticCustID2's box (1 placement; coordinate click).
- Tree after placement: `edit1_USER` (Type Edit) is the last child of FlexLayoutMain > Region02, after StaticCustID2 and before Region03: homepage. Screenshot `t3b-01-editcustid-placed-after-staticcustid2-tree-and-canvas.png`.
- Defaults recorded before any change (Properties): Name `edit1_USER`; Caption blank; Type Edit; From Device Master True; Theme Class blank; Bitmap File Name blank; Justification blank; Size `37.05; 2` (Width 37.05, Height 2); Lock Size False; Tab Order 0; Flex Attributes `Index: 2 Target: signinpage`. Binding Type not read.
- Name: value cell clicked (1), plain fill `EditCustID` (1), Tab (1). Committed Name `EditCustID` confirmed in the Components tree row and the Properties Name row (screenshot `t3b-02-editcustid-name-check.png`). The Properties header dropdown still showed `edit1_USER (Edit)`; this is a stale header label, observed, not diagnosed. Console 2/0. Save enabled.
- **T3 Save #4** (after Step A): one Save click from a snapshot taken in this task. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo greyed afterwards. Screenshot `t3b-03-editcustid-save4-response.png`. Console 2/0.

### Step C: Justification Center, Width 20, Height 1.5 (blocked; no Save #5)

- Justification value cell clicked (1): the row became selected (`active`/`selected`) but no option list appeared (screenshot `t3b-04-editcustid-justification-list.png`; the Justification row showed the combobox arrow but no dropdown).
- Same value cell clicked a second time (1): still no list (screenshot `t3b-05-editcustid-justification-list-open.png`). Untargeted snapshot (depth 7), targeted snapshot of the value cell (depth 4) and of its row table (depth 8) were taken: the value cell exposed no child control (no combobox, no textbox, no option list). The combobox arrow has no accessibility ref in this state. A coordinate click on the arrow is not permitted outside placement and Margin adorner clicks, so the list was not opened.
- Stop decision: the planned attempts (two clicks plus one fresh snapshot and one corrected inspection) did not expose a list. Not attempted: keyboard opening of the combobox, an extra coordinate click, any Tab or Enter (no list was open; nothing was chosen).
- Justification remains blank. Width and Height were **not** entered (default 37.05; 2 remains). Binding Type was not read. No Save #5.

### Designer state at the end of this task

- FX_CustomerPortal open in User scope, **clean**: Save and Undo disabled (confirmed in the last untargeted snapshot). No dialog, list or editor open. The Justification row is selected (no editing state).
- Region02: signinpage: StaticSignIn, StaticImage1, StaticCustID2, EditCustID (last child). EditCustID: Name `EditCustID` (saved), Justification blank, Size default `37.05; 2`.
- T3 Saves used: **4 of 5** (Saves #1 to #3 in the earlier StaticCustID2 work, #4 here). Remaining T3 Save budget: **1** (Save #5, for EditCustID Step C, not yet performed).
- Next step (not performed): in a separate task, reopen the Justification editor (Properties, the Justification value cell), if the arrow is reachable, open the list, click Center, Tab; then Width 20 and Height 1.5 (plain fill + Tab each); verify Size `20; 1.5`; read and record Binding Type (leave unchanged; `None` expected per the default); then T3 Save #5 once and verify Save and Undo disabled. If the list still does not expose its arrow, the operator should check the Justification editor in the Designer (possibly a Designer reload) before the next worker task.

### Acceptance and finding status (this task only)

- AC-2 (EditCustID part): Name `EditCustID` committed and saved (Save #4) - supported by `t3b-02` and `t3b-03`. Justification Center, Width 20, Height 1.5, Binding Type recording and Save #5: **not done**.
- AC-1 string check: not repeated in this task (already recorded in T1; FX_sCustomerID was present, so no string was created here).
- Finding (observed only): the Justification combobox of EditCustID did not open a list in two clicks; the row selection changed without an editor. Not diagnosed. Compare: in the StaticCustID2 work the arrow was reachable after one value-cell click.
- The StaticCustID2 String prompt: none was seen in this task or in the earlier StaticCustID2 work (the string existed; the ellipsis was not clicked). Nothing to reconcile.

### Action audit (this T3 EditCustID task; exact counts)

Counts after the context summary (the earlier, pre-summary part of this task is summarised below the table).

| Category | Count | Notes |
| --- | --- | --- |
| Toolbox selections | 1 (earlier in this task) | Edit row (`e136`) |
| Placement coordinate clicks | 1 | (560, 470), below StaticCustID2 |
| Adorner coordinate clicks | 0 | none |
| Undo clicks | 0 | none |
| Name value-cell clicks | 1 | earlier in this task |
| Name entries (plain fill) | 1 | `EditCustID`, then Tab; the fill and Tab were issued in the same response block (not in sequence; both succeeded) |
| Justification value-cell clicks | 2 | no list opened (both); no option clicked; no Tab |
| Justification list opens | 0 | none |
| Width / Height entries | 0 / 0 | not reached |
| Caption, string, prompt, String editor OK | 0 / 0 / 0 / 0 | none in this task |
| Margin dialog opens / OKs / Cancels | 0 / 0 / 0 | none |
| Designer Saves | 1 | Save #4 (Name), toast success; Save #5 not performed |
| Save clicks that did not run | 0 | none |
| Tab-selection calls | 0 | no tab selected; one read-only tab list after the summary (issued in the same block as the first Justification click) |
| Untargeted snapshots (depth 7, inline) | 4 after the summary | name check, after Save #4, after the first Justification click, after the second click; plus the untargeted snapshots taken before the summary (count not itemised) |
| Targeted snapshots after the summary | 2 | `e2005` (depth 4) and `e1995` (depth 8); reads only; neither showed a combobox child. Before the summary: `e362`, `e1050`, `e2240` (reads) |
| Screenshots | 4 after the summary (`t3b-02` to `t3b-05`) + `t3b-01` from before the summary | see inventory |
| Server-event errors | 0 | none |
| Session expiries / re-logins | 0 / 0 | none |
| Console readings | 2 errors, 0 warnings | every reading observed |
| Prompts | 0 | none |
| Form closes / reopens | 0 / 0 | none |
| Parallel browser actions | 1 | the Name fill and Tab were issued in one response block (a deviation from the brief's one-action-at-a-time rule; not repeated) |

Earlier part of this task (before the summary; counts as given in the compacted summary, not re-verified): Edit row click (1), placement coordinate click (1), Name value-cell click (1), Name plain fill (1), Tab (1), read-only targeted snapshots of the tree and Properties (3), one targeted active-textbox snapshot (1). The precheck's untargeted snapshot count before the summary was not itemised.

### Worker-written file inventory (this T3 EditCustID task)

- `evidence/EXP-111/t3b-01-editcustid-placed-after-staticcustid2-tree-and-canvas.png` (placement; written before the summary)
- `evidence/EXP-111/t3b-02-editcustid-name-check.png` (Name committed in the tree and the Properties Name row; Save enabled before Save #4)
- `evidence/EXP-111/t3b-03-editcustid-save4-response.png` (Save #4 toast; Save and Undo greyed)
- `evidence/EXP-111/t3b-04-editcustid-justification-list.png` (Justification row selected, no list)
- `evidence/EXP-111/t3b-05-editcustid-justification-list-open.png` (still no list after the second click)
- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (this section and the status line)

Written by the browser tool (not read): snapshot files under `evidence/playwright/` created by clicks that returned a file (for example `page-2026-10-18T05-40-46-522Z.yml`, `page-2026-10-18T05-41-03-966Z.yml`, `page-2026-10-18T05-41-15-864Z.yml`).

### Limitations and deviations (observed)

1. Superseded: Step C was not performed in this (first) EditCustID task. The Justification list did not open here; the blocked state was resolved in the operator-authorized continuation below.
2. Name fill and Tab were issued in one response block (parallel browser actions). Both succeeded and the commit was verified before Save #4.
3. The Properties header dropdown still showed `edit1_USER (Edit)` after the Name commit; the tree and Name row showed `EditCustID`. Observed only.
4. Same-session UI evidence only. No cross-session durability or replay verification is claimed.

## T3 EditCustID continuation (operator-authorized escalation, task T8, run R-20261018-020406-7LK1 cycle 9, 2026-10-18)

Scope: EditCustID Step C only (Justification Center, Width 20, Height 1.5, Binding Type read unchanged) and T3 Save #5. Not repeated: placement, the Name entry and Save #4. Not started: ButtonSignIn2, T4 and T5.

**Result: Justification committed as Center (Tab after the option click; Save enabled). Size 20; 1.5. Binding Type None (read, not changed). T3 Save #5 ran once with the success toast; Save and Undo are disabled afterwards. Console 2 errors, 0 warnings at every reading. T3 Saves: 5 of 5 used; no Save budget remains for T3.**

### Sources and session

- AGENTS.md read in full at the start of this task (lines 1 to 240). Read also: `docs/mongoose/transcripts/hello-world-pt7.md` lines 219 to 239, 317 and 466 to 492; `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; the Outcome sections of EXP-110-R3 (lines 421 to 437), EXP-107 (lines 868 to 887) and EXP-106 (lines 865 to 886); the record checkpoint (lines 440 to 589). No earlier worker transcript or oversized tool-result file was read.
- Browser tabs listed before any action (tab 0 = Designer, `MGForm=FX_CustomerPortal`). No tab selection was made. Tab 1 (Web Client) was not used.
- Session usable: no session-expiry modal, logout card or sign-in page. No console message was read.

### Precheck (read-only)

- FX_CustomerPortal open in User scope (status bar `ScopeType: User`). Save and Undo disabled. No prompt, dialog, list or editor open. Console 2/0.
- Region02: signinpage (Components grid): StaticSignIn, StaticImage1, StaticCustID2, EditCustID (Container FlexLayoutMain), in that order; EditCustID is the last child; Name `EditCustID`. Region03: homepage follows. Screenshot `t3c-01-precheck-region02-tree-and-editcustid-before-justification.png` (shows the tree rows and the EditCustID Name; Save and Undo greyed).

### Operator escalation: Justification (each interaction and its result)

| Step | Interaction | Result (observed) |
| --- | --- | --- |
| 1 | Justification value cell double-clicked once (ref `e940`, from the untargeted snapshot taken for this task). | Console 2/0. The untargeted snapshot showed no editor and no arrow reference. Screenshot `t3c-02-justification-after-double-click-properties.png`: Justification row selected; a combobox arrow is visible at about x 1841, y 474; field still blank. |
| 3 | One operator-authorized coordinate click on that visible arrow (1841, 474). | Console 2/0. The list opened: blank, Default, Left, Center, Right (screenshot `t3c-03-justification-after-arrow-click.png`). |
| 3 | Untargeted snapshot with the list open, then a read-only targeted snapshot of the listbox (`e1195`). | Option refs: Center = option `e1205` (cell `e1206`). |
| 3 | Center clicked by its ref (`e1205`). | Console 2/0. The list closed and the field showed Center; **Save still disabled** at this point (screenshot `t3c-04-justification-center-clicked-before-tab.png`). |
| commit | Tab pressed once (as the brief specifies for list fields). | Untargeted snapshot: **Save enabled** (`e1210`), Undo enabled, console 2/0. Justification committed as Center. |

- Step 4 (stop probing) was not needed, because the list opened after the one authorized coordinate click.
- The double-click in step 1 revealed the combobox arrow. The two single clicks in the first EditCustID task (before the summary) had not revealed it. Observed in this task only; the cause is not established.

### Width, Height, Size summary, Binding Type and T3 Save #5

- Width: value cell `e1017` clicked (1); the active textbox `e1222` showed 37.05; plain fill `20` (1); Tab (1). Read back: Width 20 (targeted read of the Width row).
- Height: value cell `e1026` clicked (1); the active textbox `e1222` showed 2; plain fill `1.5` (1); Tab (1).
- Size summary before the Save: **20; 1.5** (targeted read of the Size row `e1003`). Save enabled.
- Binding Type: the Data Source group was expanded by a double-click on its label (view only). **Binding Type `None`**, Binding blank, Required False, To Be Determined False. Not changed; no variable, binding or Customer ID setting was selected. Screenshot `t3c-05-editcustid-size-20-1_5-binding-type-before-save-5.png` shows Justification Center, Binding Type None and Save enabled (the Size row is not in that image; it was read from the targeted snapshot).
- **T3 Save #5** (after Step C): one Save click (`e1210`) from the most recent untargeted snapshot of this task. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo greyed afterwards (screenshot `t3c-06-editcustid-save5-response.png`: toast visible; Justification Center; Binding Type None). After the Save, the targeted read of the Size row showed **20; 1.5**. Console 2/0.

### Requirements status (EditCustID, observed)

- Name `EditCustID`: committed and saved (Save #4).
- Justification `Center`: committed (Tab) and saved (Save #5). This requirement is met in the same-session UI only.
- Size Width 20 and Height 1.5: entered and saved (Save #5); summary `20; 1.5`.
- Binding Type `None`: recorded and not changed. The Variable Customer ID binding stays deferred to Part 8 (not set).
- Caption, Theme Class, Bitmap File Name, No Colon and Margin: not planned for EditCustID and not set.

### Acceptance check status (this continuation)

- AC-2 (EditCustID part): Name (Save #4, `t3b-02`, `t3b-03`); Justification Center (`t3c-04`, `t3c-05`, `t3c-06` and the snapshot before Save #5); Size 20; 1.5 (targeted read before and after Save #5); Binding Type recorded as None and unchanged. AC-2 for ButtonSignIn2 and the overall set is not complete (ButtonSignIn2 not placed).
- AC-3 (readback after close and reopen) and AC-5 (final audit): not run in this task. The reopen readback belongs to T5.
- AC-4: no other component, region, string or global object was changed by this continuation; no event handler; no Regenerate; no dragging; no Undo; no runtime action; no unload; no checkout action; User scope only.

### Designer state at the end of this task

- FX_CustomerPortal open in User scope, **clean**: Save and Undo disabled after Save #5. No dialog, list or editor open. Properties shows EditCustID (Edit), with the Data Source group expanded (view state only). Console 2/0.
- Region02: signinpage contains StaticSignIn, StaticImage1, StaticCustID2, EditCustID (last child).
- T3 Saves used: **5 of 5** (Saves #1 to #3 for StaticCustID2; #4 and #5 for EditCustID). Remaining T3 Save budget: 0.

### Action audit (this continuation task; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Tab-list calls | 1 | at the start; tab 0 current; no tab selection |
| Toolbox selections | 0 | none in this task |
| Placement coordinate clicks | 0 | none |
| Adorner coordinate clicks | 0 | none |
| Operator-authorized coordinate clicks (Justification arrow) | 1 | (1841, 474); documented exception to the brief's coordinate rule, per the bounded instruction |
| Undo clicks | 0 | none |
| Justification value-cell double-clicks | 1 | step 1; no editor appeared |
| Justification list opens | 1 | via the arrow coordinate click |
| Justification option clicks | 1 | Center by ref `e1205` |
| Justification Tabs (commit) | 1 | |
| Width value-cell clicks / plain fills / Tabs / corrections | 1 / 1 / 1 / 0 | `20` |
| Height value-cell clicks / plain fills / Tabs / corrections | 1 / 1 / 1 / 0 | `1.5` |
| Data Source group double-clicks (view only) | 1 | Binding Type read |
| Binding Type, binding or variable changes | 0 | none |
| Designer Saves | 1 | Save #5; success toast |
| Save clicks that did not run | 0 | none |
| "Ref not found" errors | 2 | `e1020` (Height row) and `e950` (Data Source row); each followed by one fresh untargeted snapshot before any new ref |
| Untargeted snapshots (depth 7) | 8 | in order: precheck; after the Justification double-click; list open; after the Center Tab; after the Width value-cell click (to find the editor); before the Height recovery after the `e1020` error; before the Data Source read after the `e950` error; before Save #5 (Save ref) |
| Targeted snapshots | 11 | 9 successful, 2 failed as above |
| Screenshots (this continuation) | 6 | `t3c-01` to `t3c-06` |
| Parallel browser actions | 0 | every browser action was sent alone |
| Prompts / dialogs | 0 / 0 | none |
| Server-event errors | 0 | none |
| Session expiries / re-logins | 0 / 0 | none |
| Form closes / reopens | 0 / 0 | none |
| Field corrections | 0 | none |
| Undo | 0 | none |
| Console readings | 2 errors, 0 warnings | every reading shown; three Tab key presses returned no console line in their own output, so the count was read from the next snapshot output (2/0) |
| Document reads | 10 | AGENTS.md, three transcript ranges, two recipes, three Outcome sections, the record checkpoint |

### Worker-written file inventory (this continuation)

- `evidence/EXP-111/t3c-01-precheck-region02-tree-and-editcustid-before-justification.png`
- `evidence/EXP-111/t3c-02-justification-after-double-click-properties.png`
- `evidence/EXP-111/t3c-03-justification-after-arrow-click.png`
- `evidence/EXP-111/t3c-04-justification-center-clicked-before-tab.png`
- `evidence/EXP-111/t3c-05-editcustid-size-20-1_5-binding-type-before-save-5.png`
- `evidence/EXP-111/t3c-06-editcustid-save5-response.png`
- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (the status line, the superseded note in the first EditCustID task, and this section)

Written by the browser tool (listed for the inventory; not read): snapshot files under `evidence/playwright/` returned by clicks in this task (for example `page-2026-10-18T06-14-01-668Z.yml`, `page-2026-10-18T06-14-12-692Z.yml`, `page-2026-10-18T06-14-31-290Z.yml`, `page-2026-10-18T06-14-55-529Z.yml`, `page-2026-10-18T06-15-23-253Z.yml`, `page-2026-10-18T06-15-51-404Z.yml`, `page-2026-10-18T06-16-05-481Z.yml`) and `evidence/playwright/console-2026-10-18T06-13-47-771Z.log` (written on the tab list; not read).

### Cleanup inventory (T3 scope, cumulative)

- Components on FX_CustomerPortal (User scope), Region02: signinpage: StaticSignIn, StaticImage1, StaticCustID2, EditCustID (all placed by this run). ButtonSignIn2 not placed yet.
- Global objects: none created or changed by this continuation. FX_sCustomerID was not created by this run (already present; the ellipsis was never clicked).

### Limitations and deviations (observed)

1. The Justification arrow was reached by one coordinate click, which the brief allows only for placement and Margin adorners. The operator's bounded instruction authorized exactly that one click; it is recorded as an exception.
2. The Size summary after Save #5 comes from a targeted read, not from the screenshot. Binding Type was read from the screenshot and the Data Source group; it is not read from an accessibility snapshot.
3. Justification was not set on the option click alone; it committed on the Tab press (Save enabled only after Tab).
4. The double-click that revealed the arrow is the only difference from the two earlier single clicks; the cause of the earlier failure is not established.
5. Same-session UI evidence only. No cross-session durability or replay verification is claimed; the readback after close and reopen belongs to T5.

### Next step (not performed)

- **ButtonSignIn2 alone**, in a separate worker task: Toolbox Button row; one placement click below EditCustID (last child of Region02); Name `ButtonSignIn2`; Caption `FX_sSignIn` (existing string; no ellipsis); Theme Class `FX_BlueButton`; Width 20, Height 1.5; Margin `0,1,0,1` through the adorner; four Designer Saves (one after each performed step); no event handler.
- **T5** (readback after one ordinary close and reopen, Margin dialogs, canvas check, final audit) in a further separate task after ButtonSignIn2.

## T4 ButtonSignIn2 (operator-authorized ButtonSignIn2-only task, run R-20261018-020406-7LK1 cycle 10, task T9, 2026-10-18)

Scope: ButtonSignIn2 only (Steps A to D of T4). Budget: T4 Saves #1 to #4 (4 of 4 used). Not repeated: the EditCustID work. Not started: T5. **Result: all four steps done; four Designer Saves, each with the success toast; Form open and clean; console 2 errors, 0 warnings at every reading; no server-event error, no prompt, no Caption-commit failure.**

### Sources and session

- AGENTS.md read in full at the start of this task (lines 1 to 240). Also read: `docs/mongoose/transcripts/hello-world-pt7.md` lines 219 to 239, 317 and 466 to 492; `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; the Outcome sections of EXP-110-R3 (lines 421 to 436), EXP-107 (lines 868 to 886) and EXP-106 (lines 865 to 885); this record's checkpoint (lines 590 to 629 and the EditCustID sections). No other record, no console log and no earlier worker transcript was read.
- Browser tabs listed before any action (tab 0 = Designer, `MGForm=FX_CustomerPortal`). No tab was selected. Tab 1 (Web Client) was not used.
- Session usable: no session-expiry modal, logout card or sign-in page. No console message was read.

### Precheck (read-only, start of this task)

- FX_CustomerPortal open in User scope (status bar `ScopeType: User`). Save and Undo disabled. No prompt, dialog or editor open. Console 2/0 (screenshot `t4-01-precheck-region02-tree-before-buttonsignin2.png`).
- Region02: signinpage (Components grid): StaticSignIn (scrolled above the visible rows; confirmed in the later full tree read), StaticImage1, StaticCustID2, EditCustID (last child), then Region03: homepage. Expected order confirmed. No ButtonSignIn2 yet. The menu Buttons (ButtonSignIn, ButtonHome, ButtonCart) and the other regions were unchanged on the canvas (Sign In, Home, Cart buttons; Region03/Region04 rows present).
- EditCustID retained Name `EditCustID`, Justification Center and Binding Type None (screenshot t4-01).

### Step A: placement and Name (T4 Save #1)

- Toolbox Button row clicked once (ref `e91`; 1 Toolbox selection). Placement coordinate click at (560, 500), inside Region02 below EditCustID's box (1 placement; coordinate click). Screenshot `t4-02-button-placed-after-editcustid-tree-and-canvas.png`.
- Tree after placement: `button1_USER` (Type PushButton, Container FlexLayoutMain) is the last child of Region02, after EditCustID, before Region03: homepage. No Undo was needed.
- Defaults recorded before any change (Properties): Name `button1_USER`; Caption blank; Theme Class blank; Bitmap File Name blank; Justification blank; Size `14.25; 1.89` (Width 14.25, Height 1.89, Lock Size False); Flex Attributes `Index: 2 Target: signinpage`; Binding Type `None`; Binding blank.
- Name: value cell clicked (1, ref `e1744`), plain fill `ButtonSignIn2` (1), Tab (1). Committed Name `ButtonSignIn2` confirmed in the tree row and the Properties Name row (screenshot `t4-03-buttonsignin2-name-check-before-save-1.png`). The Properties header still read `button1_USER (Button)` at that moment (stale header label, as in the EditCustID rename; observed only). Console 2/0. Save enabled.
- **T4 Save #1** (after Step A): one Save click (ref `e1289`) from the latest untargeted snapshot of this task. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo greyed afterwards (screenshot `t4-04-save-1-after-step-a-buttonsignin2-named.png`). Console 2/0.

### Step B: Caption FX_sSignIn (existing string; no ellipsis; no string created)

- The Caption ellipsis was **not** clicked. The string FX_sSignIn was confirmed in T1 (Sign In).
- Caption value cell (ref `e1762`; the gridcell holding the combobox; the ellipsis cell `e1766` was not clicked) clicked once (1). Screenshot `t4-05-caption-field-open-before-typing.png` shows an empty focused Caption combobox.
- Typed `FX_sSignIn` key by key (10 key presses: F, X, _, s, S, i, g, n, I, n). No accessibility snapshot was taken while the field was open. Screenshot `t4-06-caption-list-typed-FX_sSignIn-before-description-click.png` shows the combobox with `FX_sSignIn`; no list visible.
- Left the field by clicking the Description row (ref `e1750`, 1 click). Not by Tab.
- Verified after leaving the field: committed Caption `FX_sSignIn` (Properties Caption row and the canvas button label "Sign In", screenshot `t4-07-caption-fx_ssignin-committed-save-enabled.png`); **Save enabled**; console 2/0. The Caption commit did not leave Save disabled, so no stop condition arose.
- **T4 Save #2** (after Step B): one Save click (`e1289`). Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo greyed (screenshot `t4-08-save-2-after-step-b-caption-fx_ssignin.png`). Console 2/0.

### Step C: Theme Class FX_BlueButton, Size 20; 1.5 (T4 Save #3)

- Theme Class: the combobox arrow (ref `e1806`, inside value cell `e1803`) clicked once (1). The list opened with one option, `FX_BlueButton` (screenshot `t4-09-theme-class-list-open.png`). A targeted read of the listbox gave the option ref `e2657`; the option was clicked directly (1). Tab (1) committed it. Verified: Theme Class `FX_BlueButton` (Properties and screenshot `t4-10-theme-class-fx_bluebutton-after-tab.png`); Save enabled; console 2/0.
- Size: the Layout group was below the visible Properties rows. The Data Source group (expanded earlier in the EditCustID task, view state) was collapsed by one double-click on its label (view only, ref `e1878`); the Properties panel was then scrolled by one mouse-wheel step (deltaY 300; view only; no value changed; screenshot `t4-11-properties-scrolled-to-layout-size.png`).
- Width: value cell (`e2042`, text `14.25`) clicked (1); the active textbox (`e2179`) showed 14.25; plain fill `20` (1); Tab (1). Read back: Width 20. Console 2/0.
- Height: value cell (`e2051`, text `1.89`) clicked (1); the active textbox (`e2179`) showed 1.89; plain fill `1.5` (1); Tab (1). Read back: Size summary **`20; 1.5`** (targeted read of the Size row). Console 2/0.
- **T4 Save #3** (after Step C): one Save click (`e1289`) from an untargeted snapshot taken after the Height commit. Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." Save and Undo greyed afterwards. Screenshot `t4-12-save-3-after-step-c-theme-fx_bluebutton-size-20-1_5.png` shows Theme Class area not in frame; Size 20; 1.5, Width 20, Height 1.5 visible in the Layout group. Console 2/0.
- Binding Type (not changed): recorded `None` (screenshot `t4-02` and the Data Source read before collapse). No binding, variable or event was set.

### Step D: Margin 0,1,0,1 through the component dialog (T4 Save #4)

- Adorner coordinate click at (498, 484), the top-left icon inside the ButtonSignIn2 box (1 adorner click; the component was selected in Properties; the tooltip was not captured). The dialog opened (screenshot `t4-13-buttonsignin2-margin-dialog-before-ok.png`) with title `FlexLayout` and only the Design group: Region Index `2` and Margin (empty). **No Type, Auto Size or Regions grid was shown**, so this is the component's own dialog, not a FlexLayout's.
- Margin value cell (`e2719`) clicked (1); the active textbox (`e2747`) was empty; plain fill `0,1,0,1` (1); Tab (1). Screenshot before OK: `t4-14-buttonsignin2-margin-0-1-0-1-before-ok.png` (Region Index 2; Margin `0,1,0,1`; the dialog's Undo enabled).
- OK clicked once (1; ref `e2736`, after one fresh untargeted snapshot showed the dialog row "Margin 0,1,0,1"). The first OK click attempt with the earlier ref `e2736` raised "Ref e2736 not found" and did not run; the fresh snapshot was then used. Console 2/0 after OK. The Properties panel switched to the Form tab after the OK (view only; observed).
- **T4 Save #4** (after Step D): one Save click (`e1289`) from the untargeted snapshot taken after OK (Save enabled in that snapshot; Undo disabled). Response: toast "Form [FX_CustomerPortal] and global object(s) were saved." **Save and Undo greyed afterwards.** Screenshot `t4-15-save-4-after-step-d-margin-buttonsignin2.png`: the canvas shows the Sign In heading, the Customer ID label, the edit box and the Sign In button stacked in the signinpage column; the button sits lower than before the margin (observed; consistent with a one-character top margin, not measured). Console 2/0.

### Designer state at the end of this task

- FX_CustomerPortal open in User scope, **clean**: Save and Undo disabled after Save #4 (screenshot `t4-15`). No dialog, list or editor open. Properties shows the Form (Form tab) after the last dialog OK.
- Region02: signinpage (full tree read in the Margin dialog snapshot): StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2 (in order, each with Container FlexLayoutMain); Region03: homepage follows. Region00 menu (ButtonSignIn, ButtonHome, ButtonCart), Region01 spacer1, Region04 cartpage, Region05 spacer2 and the header and footer unchanged. The footer region row `Region02: footer` was present, as before.
- ButtonSignIn2 values (observed, same session): Name `ButtonSignIn2`; Caption `FX_sSignIn`; Theme Class `FX_BlueButton`; Justification blank (not planned); Size `20; 1.5`; Binding Type `None`; Margin `0,1,0,1` (dialog); Flex Attributes `Index: 2 Target: signinpage`; no event handler.
- T4 Saves used: **4 of 4**. No Save budget remains for T4.
- Canvas (screenshot `t4-15`): the menu column shows Sign In, Home, Cart; the signinpage column shows the Sign In heading, the sign-in picture (from the earlier screenshot), the Customer ID label, the empty edit box and the Sign In button. The button is teal in the unselected state; it was blue while selected (observed). Runtime colour not verified.

### Action audit (this T4 task; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Tab-list calls | 1 | at the start; no tab selection |
| Toolbox selections | 1 | Button row (`e91`) |
| Placement coordinate clicks | 1 | (560, 500), below EditCustID |
| Adorner coordinate clicks | 1 | (498, 484); Margin dialog opened |
| Other coordinate clicks | 0 | none |
| Undo clicks | 0 | none |
| Name value-cell clicks / plain fills / Tabs / corrections | 1 / 1 / 1 / 0 | `ButtonSignIn2` |
| Caption value-cell clicks / key presses / Description-row clicks / Tab commits | 1 / 10 / 1 / 0 | `FX_sSignIn`; left by Description row |
| Caption ellipsis clicks / string prompts / String editor OKs | 0 / 0 / 0 | none (existing string) |
| Theme Class arrow clicks / option clicks / Tabs / corrections | 1 / 1 / 1 / 0 | `FX_BlueButton` |
| Width value-cell clicks / plain fills / Tabs | 1 / 1 / 1 | `20`; corrections 0 |
| Height value-cell clicks / plain fills / Tabs | 1 / 1 / 1 | `1.5`; corrections 0 |
| Data Source group double-clicks (view only) | 1 | collapsed, to reach Layout |
| Mouse-wheel scrolls (view only) | 1 | Properties panel |
| Margin value-cell clicks / plain fills / Tabs / corrections | 1 / 1 / 1 / 0 | `0,1,0,1` |
| Margin dialog opens / OK clicks / Cancels | 1 / 1 / 0 | OK once, after a fresh snapshot |
| Designer Saves | 4 | Save #1 (Name), #2 (Caption), #3 (Theme Class and Size), #4 (Margin); each with the success toast |
| Save clicks that did not run | 0 | none |
| Clicks that did not run (stale ref) | 1 | the first OK click, `e2736` ("Ref not found"); not retried with the old ref |
| Targeted snapshots that failed ("Ref not found") | 1 | `e2045` (Height row) after the Width commit |
| Untargeted snapshots | 15 | one of them at depth 9 (the dialog); each used for refs or state |
| Targeted snapshots (successful) | 11 | reads only |
| Screenshots | 15 | `t4-01` to `t4-15` |
| Key presses (total) | 15 | 10 Caption characters and 5 Tabs (Name, Theme Class, Width, Height, Margin) |
| Browser actions executed (non-read) | 37 | 17 clicks + 1 mouse-wheel + 4 plain fills + 15 key presses (the 17 clicks include the 2 coordinate clicks and the 4 Saves) |
| Parallel browser actions | 0 | every action sent alone |
| Prompts / dialogs answered | 0 / 1 (Margin dialog only) | no save or delete prompt |
| Server-event errors | 0 | none |
| Session expiries / re-logins | 0 / 0 | none |
| Form closes / reopens | 0 / 0 | none (T5 not run) |
| Console readings | 2 errors, 0 warnings | at every reading shown in the tool output; the console messages themselves were never read |
| Regenerate, Delete Form Definition, dragging, unload, checkout, Select Form OK | 0 | none |

### Cumulative Designer Saves (EXP-111, all tasks)

- T2: Saves #1 to #7 (StaticSignIn and StaticImage1; 7 of 7 budgeted).
- T3: Saves #1 to #5 (StaticCustID2 Saves #1 to #3 in the earlier segments; EditCustID Save #4 and Save #5 in the two EditCustID tasks; 5 of 5 budgeted).
- T4: Saves #1 to #4 (ButtonSignIn2; 4 of 4 budgeted).
- **Total Designer Saves across the run: 16** (7 + 5 + 4), each with the success toast recorded in its section. No Save was retried after an uncertain result.
- Components placed (cumulative): 5 (StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2). Placement coordinate clicks in T4: 1 (ButtonSignIn2); the earlier placements' counts are in their own sections and were not re-counted here. Adorner coordinate clicks in T4: 1 (ButtonSignIn2); the T2 adorner clicks for StaticSignIn and StaticImage1 are in the T2 sections and were not re-counted here. T5 adorner clicks (three) are not yet done.

### Worker-written file inventory (this T4 task)

- `evidence/EXP-111/t4-01-precheck-region02-tree-before-buttonsignin2.png`
- `evidence/EXP-111/t4-02-button-placed-after-editcustid-tree-and-canvas.png`
- `evidence/EXP-111/t4-03-buttonsignin2-name-check-before-save-1.png`
- `evidence/EXP-111/t4-04-save-1-after-step-a-buttonsignin2-named.png`
- `evidence/EXP-111/t4-05-caption-field-open-before-typing.png`
- `evidence/EXP-111/t4-06-caption-list-typed-FX_sSignIn-before-description-click.png`
- `evidence/EXP-111/t4-07-caption-fx_ssignin-committed-save-enabled.png`
- `evidence/EXP-111/t4-08-save-2-after-step-b-caption-fx_ssignin.png`
- `evidence/EXP-111/t4-09-theme-class-list-open.png`
- `evidence/EXP-111/t4-10-theme-class-fx_bluebutton-after-tab.png`
- `evidence/EXP-111/t4-11-properties-scrolled-to-layout-size.png`
- `evidence/EXP-111/t4-12-save-3-after-step-c-theme-fx_bluebutton-size-20-1_5.png`
- `evidence/EXP-111/t4-13-buttonsignin2-margin-dialog-before-ok.png` (taken before the Margin value was typed; its name says before OK)
- `evidence/EXP-111/t4-14-buttonsignin2-margin-0-1-0-1-before-ok.png`
- `evidence/EXP-111/t4-15-save-4-after-step-d-margin-buttonsignin2.png`
- `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (the status line and this section)

Written by the browser tool (listed for the inventory; not read): snapshot files returned by clicks (`evidence/playwright/page-2026-10-18T06-20-00-136Z.yml` through `page-2026-10-18T06-26-00-141Z.yml`, 16 files) and the console logs written on the tab list (`evidence/playwright/console-2026-10-18T06-13-47-771Z.log`, `console-2026-10-18T06-19-47-290Z.log`; not read). No snapshot was saved to a file by the worker.

### Acceptance and finding status (this task)

- AC-2 (ButtonSignIn2 part): Name `ButtonSignIn2` committed with Save #1 (`t4-03`, `t4-04`); Caption `FX_sSignIn` committed with Save enabled and saved (`t4-07`, `t4-08`); Theme Class `FX_BlueButton` (`t4-10`, `t4-12`); Size `20; 1.5` (read after Height and after Save #3; `t4-12`); Margin `0,1,0,1` through the component dialog (`t4-13`, `t4-14`) and saved (`t4-15`); no event handler; Binding Type None. Each performed step has one Designer Save with its response. Same-session UI evidence only. AC-2 for the five-component set is not yet complete: T5 readback is outstanding.
- AC-3 and AC-5: not run in this task (readback after close and reopen and final audit belong to T5).
- AC-4: no other component, region, string or global object was changed; no binding, no event handler, no Regenerate, no dragging, no Undo, no runtime action, no unload, no checkout action; User scope throughout; task boundary respected (T5 not started; Form not closed or reopened).
- The Justification of EditCustID (previous task) was resolved through the operator's escalation (one double-click on the value cell, then one coordinate click on the visible arrow, then Center by ref and Tab). This is recorded as one observation in the EditCustID continuation section; it is not a replay-verified procedure.

### Findings (observed only)

1. The Caption typed key by key and committed by the Description-row click enabled Save (observed again; second run). No failure occurred.
2. The Theme Class list showed one option, `FX_BlueButton`, and the option click plus Tab committed it.
3. The Layout > Size rows were not in the accessibility snapshot until the Data Source group was collapsed and the Properties panel scrolled (observed; the Properties tree is virtual and truncated at depth 7).
4. The Properties panel switched to the Form tab after the Margin dialog OK (observed; view state only).
5. After the Margin OK, Save was enabled and Undo was disabled in the snapshot (observed; the Margin change did not appear on the Undo stack).
6. The stale Properties header label (`button1_USER (Button)`) persisted until after Save #1; it later showed `ButtonSignIn2 (Button)` (observed; the same as EditCustID).

### Limitations and deviations (observed)

1. Same-session UI evidence only. No cross-session durability, database-level durability or replay verification is claimed.
2. The Size summary after Save #3 is from the screenshot (Size 20; 1.5 visible in the Layout group) and from a targeted read before the Save; Binding Type was read before the Data Source group was collapsed and was not re-read after Save #4.
3. The Margin is confirmed in the dialog before OK and in the dialog's tree after OK; the on-canvas offset after Save #4 is observed only (not measured).
4. The Caption and Theme Class commits were verified by screenshot and snapshot. The accessibility snapshot taken after Save #4 (dialog snapshot before the OK) shows the Caption value `FX_sSignIn` and the Theme Class value `FX_BlueButton` as text.
5. The Margin dialog's title reads `FlexLayout`, but its content (Design group: Region Index 2 and Margin only) matched the component dialog described in EXP-106 (observed; no Type, Auto Size or Regions grid).
6. One stale-ref OK click (`e2736`) did not run; the OK was then clicked once with a ref from a fresh snapshot. No extra dialog interaction followed.
7. No parallel browser action occurred in this task; every action was sent alone and checked before the next.

### Next step (not performed)

- **T5** in a separate worker task: close FX_CustomerPortal once through its Form-tab control (answer No to any save prompt and record its text; none is expected because Save is disabled), reopen it once through the Form menu recent-forms entry, read the Components tree (five components under Region02: signinpage in order; menu Buttons and other regions unchanged), select each new component by its Components row and record Name, Caption, Theme Class, Justification, Bitmap File Name, No Colon, Size and Binding Type (as applicable), open the Margin dialog of StaticSignIn, StaticImage1 and ButtonSignIn2 through its adorner (three coordinate clicks), record Margin and leave each dialog with Cancel, record the canvas (heading, picture, label, edit box and blue Sign In button), check FX_sCustomerID read-only only if this run created it (it did not: the string was already present, so no string check is needed), leave the Form open and clean, then write the final audit.

## T5 readback and final audit (task T10, run R-20261018-020406-7LK1 cycle 11, 2026-10-18): PARTIAL, BLOCKED AT A CONSOLE RISE

Scope: close and reopen of FX_CustomerPortal once each, the five-component readback, the three Margin dialogs and this final audit. No Designer Save, no property change, no Undo, no global-object change (T5 is read-only except the close and reopen). **Result: the close and reopen ran cleanly; the tree after reopen is as planned; the first property selection raised the console error count from 2 to 3 errors, so the readback was stopped before any further click, as the brief requires. The Margin dialog checks and most of the property readback were not performed.**

### Sources and session

- AGENTS.md read in full at the start of this task (lines 1 to 240). Also read: `docs/mongoose/transcripts/hello-world-pt7.md` lines 219 to 239, 317 and 466 to 492; `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; the Outcome sections of EXP-110-R3 (lines 421 to 436), EXP-107 (lines 868 to 887) and EXP-106 (lines 865 to 886); and this record's checkpoint (lines 1 to 470 read in full; the Grep heading map of the whole file; the T3 EditCustID and T4 sections were not re-read in full in this task and were checked against the earlier writes in this conversation).
- Browser tab list: no `browser_tabs` list call was made in this task. The snapshot outputs printed the open-tab section (tab 0 = Designer, `MGForm=FX_CustomerPortal`, current; tab 1 = Web Client, not used). No tab selection was made in this task.
- Session usable throughout: no session-expiry modal, logout card or sign-in page. No console message was read.

### Precheck (read-only, start of this task)

- FX_CustomerPortal open in User scope (status bar `ScopeType: User`). Save and Undo disabled. No prompt, dialog, list or editor open. Console **2 errors, 0 warnings**.
- Region02: signinpage: StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2 (each Container FlexLayoutMain), then Region03: homepage. Confirmed by a targeted read of the expanded Components tree (`e367`, depth 6; the Components grid was expanded by one view-only click on its Expand button).
- Menu: Region00: menu > ButtonSignIn, ButtonHome, ButtonCart (PushButton, FlexLayoutMain), in this order. Region01: spacer1 (no children); Region04: cartpage and Region05: spacer2 (no children). Header: FlexLayoutHeader > Region00: header > StaticHeader; Region01: user > StaticCustIcon, StaticCustID. Footer: FlexLayoutFooter > Region00: UNKNOWN0 (as before). No extra or missing component.

### Close and reopen (the one authorized close and one reopen)

- Close: FX_CustomerPortal closed once through its Form-tab close control (`closable FX_CustomerPortal`, from a fresh untargeted snapshot). **No save prompt appeared** (no text to record; the Form was clean). The canvas then showed no Form (screenshot `t5-01-after-close-form-tab-no-save-prompt.png`: empty canvas, no Form tab, User scope in the status bar). Console 2/0.
- Reopen: the Form menu was opened (`Form` button), and the recent-forms entry `FX_CustomerPortal` was clicked once (not Select Form OK; no direct navigation). The Form reopened with its tab selected; the status bar shows User scope; Save and Undo disabled. Console 2/0.

### Tree after reopen (readback, read-only)

- Region02: signinpage (Container FlexLayoutMain children, in this order): **StaticSignIn (Static), StaticImage1 (Static), StaticCustID2 (Static), EditCustID (Edit), ButtonSignIn2 (PushButton)**; then Region03: homepage. Nothing extra under Region02.
- Menu, header, footer and the other regions unchanged in the tree (as in the precheck).
- Console 2/0 at this readback.

### Canvas after reopen (screenshot t5-02, taken with StaticSignIn selected after the stop)

- Menu column: Sign In, Home, Cart (teal buttons). Header: "Customer Portal" at the left of the blue strip, the customer icon at the right.
- Signinpage column (top to bottom): the bold "Sign In" heading (StaticSignIn; its selection box is shown), the sign-in picture (a cat holding a microphone; the picture is a rendering of the bitmap, and its filename was **not** confirmed by readback), the "Customer ID" label (no colon), an empty edit box, and a **Sign In button rendered teal, not blue** (the brief expected a blue button; the teal rendering was also noted in EXP-110-R3 and in the T4 canvas). The arrangement is stacked in the column in the planned order. Observed; the runtime colour is not verified.

### Property readback (partial)

- **StaticSignIn** (read from screenshot t5-02, after reopen, Component tab): Name `StaticSignIn`; Type Static; Caption `FX_sSignIn`; Theme Class `FX_Header`; Justification `Center`; No Colon `True` (Miscellaneous > Specific Attributes, visible); From Device Master True; Foreground #000000. **Size (Width 20, Height 1.5) and Margin were NOT read** (the Layout group was not expanded; the Margin dialog was not opened).
- **StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2**: **not read** (the readback was stopped after the first property selection; see the console stop below).
- **EditCustID Binding Type**: not read in T5. It was read earlier as `None` (EditCustID continuation, screenshot `t3c-05`; Binding blank); no binding was set by the worker.
- **Margin dialogs (StaticSignIn, StaticImage1, ButtonSignIn2)**: **not opened** in T5 (no adorner clicks). No dialog screenshot was taken in T5. The Margin values from the earlier sections (T2 and T4 dialog screenshots) remain unverified after the reopen.

### Console stop (mandatory)

- After the reopen, the Components grid was expanded and the tree was read with console 2/0 at every step, up to the StaticSignIn row selection (`e2033`, a single click, selection only). **That click's output reported `Console: 3 errors, 0 warnings`** (the count rose from 2 to 3). Per the brief, the run stopped before any further click, Save or close. The tool also reported a new console entry in its log file; that file was not read.
- The rise coincided with the StaticSignIn selection, not with the earlier Expand, Components-tab or Details clicks (all read 2/0). The operator later diagnosed the cause as a client-side uncaught TypeError at onItemAdd (appendChild) in the Designer app.js and reloaded the Designer; the worker did not reproduce or inspect it. The observed fact is the count change.
- The screenshot after the stop (`t5-02`) and the snapshots do not print the console line, so the **last printed count is 3 errors, 0 warnings**. No later reading exists; this record does not claim the count is stable.
- Operator action needed: the state is left for the operator to inspect (the Designer is open, clean as far as visible, with StaticSignIn selected).

### Cumulative browser action audit (EXP-111, all tasks; exact counts where recorded)

Counts for T1 to T4 are taken from their sections in this record. Where a section gave only a total, that is stated.

| Category | Count | Notes |
| --- | --- | --- |
| Toolbox selections | 5 | one per new component: Static (T2 StaticSignIn), Static (T2 StaticImage1), Static (T3 StaticCustID2), Edit (T3 EditCustID), Button (T4 ButtonSignIn2) |
| Placement coordinate clicks | 5 | one per new component: two in T2 (coordinates in the T2 sections), (560, 425) for StaticCustID2, (560, 470) for EditCustID, (560, 500) for ButtonSignIn2 |
| Margin adorner coordinate clicks | 3 | T2 StaticSignIn; T2 StaticImage1 (497, 249); T4 ButtonSignIn2 (498, 484). T5: 0 |
| Operator-authorized coordinate click (EditCustID Justification arrow) | 1 | (1841, 474) in the EditCustID continuation; the one exception outside placements and adorners |
| Undo clicks | 0 | none recorded in any section; the T2 original-segment audit (`harness-audit-T2.md`) was not re-read in T5 and is the only source not re-checked |
| Designer Saves (successful, as reported) | 16 | T2 7; T3 5; T4 4; T5 0. See the reconciliation below |
| Save clicks reported as not run | 3 | T2 Save clicks 90 and 127 ("Ref not found" per the T2 recovery audit; whether they ran is unverified, see the reconciliation); T3 StaticCustID2 Save #2 first attempt ("Ref e1158 not found", recorded as not run) |
| Caption list opens / Caption key presses | 3 / 34 | T2 StaticSignIn (10 keys), T3 StaticCustID2 (14 keys), T4 ButtonSignIn2 (10 keys). The T2 StaticImage1 bitmap-list entries (12 keys in the continuation) are a combobox filter, not a Caption entry, and are not counted here |
| Plain-fill entries recorded (Name 5, Width/Height 9, Margin 3) | 17 | from the sections. StaticSignIn Width 20 is NOT evidenced in the T2 audit (only Height 1.5 was typed); it is unverified and needs the T5 readback that did not run |
| Field corrections | 1 | T2 StaticImage1 Bitmap File Name (`20x20_settings.png` corrected to `FX_CustomerSignIn.png` after the ArrowDown highlight was committed); no other corrections recorded |
| Margin dialog OK clicks (successful) | 3 | T2 StaticSignIn (one stale OK failed first, then one succeeded); T2 StaticImage1; T4 ButtonSignIn2 (one stale OK did not run, then one succeeded) |
| Margin dialog Cancel clicks | 0 | none |
| Prompts answered | 0 | none in the run (the StaticCustID2 String prompt did not occur because the string existed) |
| String editor OKs / string creations | 0 / 0 | FX_sCustomerID and FX_sSignIn were pre-existing; no string was created |
| Form closes / reopens | 1 / 1 | T5 only (close with no save prompt; reopen through recent forms) |
| Server-event errors | 0 | none recorded |
| Session expiries / re-logins | 0 / 0 | none |
| Console readings | 2 errors / 0 warnings at each reading, except the final stop: **3 errors, 0 warnings** (T5 StaticSignIn selection) | readings are those printed by the tool; several outputs print no console line |
| Regenerate, unload, checkout, FormSync, deployment, direct URL, JavaScript, dragging | 0 | none |
| Tab-list calls | T1 1; T2 recovery 1; T2 continuation 1; T3 StaticCustID2 1 (as recorded); T3 EditCustID 1; T3 EditCustID continuation 1; T4 1; T5 0 | the T2 original segment's list calls are not recorded in this record; T5 snapshot outputs printed the tab section, but no list call and no tab selection were made |

### Save reconciliation (16 reported successful Saves)

- **T2 (7 reported):** Saves #1 to #5 belong to the first T2 segment (StaticSignIn Save #1 to #4, StaticImage1 Save #5). The T2 recovery audit (`evidence/EXP-111/harness-audit-T2.md` as summarised in the T2 recovery section) lists seven Save clicks: orders 22, 45, 92, 111 and 129 returned ok, while 90 and 127 returned "Ref ... not found". The operator ruling counted five executed Saves before the continuation; Saves #6 and #7 were then performed in the continuation and have toasts (`t2c-04`, `t2c-08`). **Unverified:** that Saves 90 and 127 did not execute. If either did, the T2 total would exceed the seven-Save budget and the total would be 17 or 18, not 16. Visible evidence: toast screenshots exist for T2 Save #5 (`t2-21`), #6 (`t2c-04`) and #7 (`t2c-08`); Saves #1 to #4 are recorded with their screenshot names (`t2-02`, `t2-06`, `t2-17`, `t2-20`), but those screenshots were not re-opened in T5.
- **T3 (5 reported):** StaticCustID2 Saves #1 (`t3a-02`), #2 (`t3a-04`) and #3 (`t3a-11`); EditCustID Save #4 (`t3b-03`) and Save #5 (`t3c-06`). Each has a toast screenshot. The "Ref e1158 not found" Save #2 attempt did not run (recorded); no other T3 Save click failed.
- **T4 (4 reported):** ButtonSignIn2 Saves #1 (`t4-04`), #2 (`t4-08`), #3 (`t4-12`) and #4 (`t4-15`). Each has a toast screenshot.
- **Total reported:** 16 (7 + 5 + 4), each with a toast recorded. The two T2 "Ref not found" Save clicks (90 and 127) did not execute (operator ruling, 2026-10-18: settled).

### Deviations (recorded, not classified as compliant)

1. **Partial task-start reads** in the T2 recovery, the T2 continuation and the T3 continuation (recorded in those sections). In T5 the record's T3 EditCustID and T4 sections were not re-read in full.
2. **Stale-reference recoveries**, many: targeted snapshots invalidated refs outside their subtree (`e1027`, `e1635`, `e2219`, `e1284`, `e11`, `e362`, `e1050`, `e1020`, `e950`, `e2045`, `e2736` and others). Each was followed by one fresh untargeted snapshot. In T5 two untargeted refs were used directly after a fresh snapshot.
3. **Earlier usage-limit reset** (T3 StaticCustID2): the unsaved Justification and No Colon edits were lost; re-applied and saved in Save #3. Cause not established.
4. **Operator-approved T2 Save reconciliation**: the two "Ref not found" Save clicks (90, 127) and the continuation Saves #6 and #7 (see the reconciliation above). Settled 2026-10-18 (operator ruling): 90 and 127 did not execute.
5. **Keyboard list navigation in T2** (contrary to the brief's "click the option" rule): the Theme Class list was driven with ArrowDown, ArrowUp and Enter (T2 recovery text, lines 206 to 218; screenshots `t2-08` and `t2-09` show the highlight and the commit); the Justification list with ArrowDown; the No Colon list with ArrowDown (`t2-14`); and the bitmap list with ArrowDown and PageDown (`t2-22` to `t2-28`), which committed the wrong bitmap `20x20_settings.png`, corrected later by a direct option click (T2 continuation). Recorded as a deviation from the brief.
6. **Operator-approved EditCustID Justification escalation**: one double-click on the value cell, then one coordinate click on the visible arrow (1841, 474), then the option by ref and Tab. Observed once; not a replay-verified procedure.
7. **Parallel browser action** in the first EditCustID task: the Name fill and Tab were sent in one response block (the brief forbids parallel browser actions). Both succeeded and the commit was checked before Save #4.
8. **Overwritten evidence files**: `t3a-05-justification-list-open.png` and `t3a-07-components-tree-after-usage-limit-readonly.png` were each written twice (the later image replaced the earlier, per the T3 section). The earlier images are not available.
9. **Denied tool-result read**: a Read of one persisted oversized snapshot (T2 continuation) was denied; nothing from it was used.
10. **ButtonSignIn2 Margin OK stale-reference recovery**: the first OK click with the earlier ref did not run ("Ref e2736 not found"); a fresh snapshot gave a new ref and OK was clicked once.
11. **Console-rise stop in T5** (above): the StaticSignIn selection raised the count to 3 errors; the readback was stopped as required.
12. **Canvas button colour**: the Sign In button rendered teal after reopen (T5) and teal in the T4 unselected state; the planned blue was seen only while selected (observed; not diagnosed).
13. **Bitmap File Name readback**: the StaticImage1 Bitmap File Name was confirmed before Save #6 (tree text) and not re-read in T5; the picture on the canvas is not proof of the filename.

### Acceptance check status (T5, observed only)

- **AC-1: met (T1, plus T5 precheck).** Sources reviewed (T1 full, T5 partial as above); session usable; User scope; FX_CustomerPortal open and clean at the T5 precheck; the Region02 tree and the menu and regions unchanged (T1 and T5); strings FX_sSignIn = Sign In and FX_sCustomerID = Customer ID (T1 screenshot `t1-02`); baseline 2/0. No string check repeated in T5 because T3 did not create FX_sCustomerID.
- **AC-2: supported for the performed steps; not complete for T5 readback.** Each performed step has its Save and toast (as listed above). Properties are supported by earlier screenshots (names, captions, classes, justifications, sizes, margins as recorded in each section). The T5 readback confirms only Name order, Caption, Theme Class, Justification and No Colon of StaticSignIn after reopen. Same-session UI evidence only.
- **AC-3: NOT met.** After one ordinary close and reopen, the tree order is confirmed and the canvas shows the stacked column (`t5-02`), but the planned properties of four components and the Size and Margin of all five components were not read after the reopen. The readback was blocked by the console rise. Form open and clean at the end (visual).
- **AC-4: supported for T5 (no change made by T5).** Across the run the recorded actions changed only the five new components and the Form layout; no other component or region was changed in any section; no binding, no event handler, no Regenerate, no dragging, no runtime action, no unload, no checkout action. The remaining unverified item is whether any other property of an existing component changed; the tree shows no change, but no property-by-property comparison was made.
- **AC-5: partial.** This section gives the evidence and the counts above. It is not a complete final audit because the readback is incomplete (Margin dialogs and four components' properties).

### Worker-written file inventory (whole run, EXP-111)

Worker-written screenshots (PNG, `evidence/EXP-111/`), by task:

- T1 (2): `t1-01-gate-tree-and-canvas.png`, `t1-02-string-check-fx-scustomerid-value.png`.
- T2 original segment (28): `t2-01` to `t2-28` (named per their steps: tree, Save #1 to #5, Caption, Theme Class, Justification, No Colon, Size, Margin, bitmap list states, and so on, as listed by the glob).
- T2 recovery (3): `recovery-01-current-state-before-any-action.png`, `recovery-02-staticsignin-properties-readonly.png`, `recovery-03-staticimage1-properties-readonly.png`.
- T2 continuation (8): `t2c-01` to `t2c-08`.
- T3 StaticCustID2 (11): `t3a-01` to `t3a-11`.
- T3 EditCustID (5): `t3b-01` to `t3b-05`.
- T3 EditCustID continuation (6): `t3c-01` to `t3c-06`.
- T4 ButtonSignIn2 (15): `t4-01` to `t4-15`.
- T5 (2): `t5-01-after-close-form-tab-no-save-prompt.png`, `t5-02-reopened-tree-canvas-after-staticsignin-select-console-rise.png`.
- Total worker-written PNG screenshots: **80**.

Worker-written markdown: `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (this record; updated in T1 to T5).

Harness-written markdown (not authored by the worker; not read in T5): `evidence/EXP-111/harness-audit-T1.md` to `harness-audit-T9.md` (9 files).

Browser-tool automatic files (not read; listed for completeness): `evidence/playwright/page-*.yml` snapshot files returned by clicks (many, one per click that returned a file), `evidence/playwright/console-*.log` files written on tab-list calls and on the T5 selection click (the log entry the tool reported for the selection was not read), and any persisted oversized snapshot outside the repository.

### Cleanup inventory (cumulative)

- **Components created on FX_CustomerPortal (User scope), Region02: signinpage (the five new components):** StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2. These are the only components this run created.
- **Global objects:** none created by this run. FX_sCustomerID was pre-existing (Part 5; T1 confirmed `Customer ID`; reused unchanged; the ellipsis was never clicked). FX_sSignIn was pre-existing (EXP-110-R2; T1 confirmed `Sign In`; the ellipsis was never clicked). FX_CustomerSignIn.png, FX_Header and FX_BlueButton were referenced only.
- **Existing components and regions:** unchanged as far as the tree shows; no property-by-property comparison was made for the existing components.

### Final state (end of this task)

- FX_CustomerPortal **open** (reopened once through the recent-forms entry), User scope. Save and Undo appear **greyed** in the screenshot `t5-02` (visual; no snapshot after the selection click confirmed the state). No dialog, menu, property editor or list open as far as visible. The Components grid is expanded and the StaticSignIn row is selected (view and selection state only).
- Console: **3 errors, 0 warnings** at the last printed reading (the StaticSignIn selection). Not read beyond the count, as required.
- No browser action after the stop. The remaining T5 readback is not done.

### Next step (for the operator; not performed)

1. Inspect the Designer state read-only: whether the Form is clean and whether the console rise (2 to 3) is still present, and what caused it (the tool log entry was not read by the worker).
2. If the state is acceptable, a further readback task (a separate worker task) can read Size and Margin of the five components, the properties of StaticImage1, StaticCustID2, EditCustID (Binding Type None) and ButtonSignIn2, open the three Margin dialogs (three adorner coordinate clicks, Cancel only) and capture one Margin dialog screenshot, then finish the final audit. That task should first confirm the console count read-only.
3. Settled 2026-10-18 (operator ruling): the two "Ref not found" Save clicks (90 and 127) did not execute. No further action.

### Limitations

- Same-session UI evidence only. The close and reopen show UI-level retention within this session. They do **not** show cross-session durability or database-level persistence, and no replay verification is claimed.
- The Margin values of the three components after the reopen were not read in T5; the earlier dialog screenshots (`t2-18` to `t2-20`, `t2c-05` to `t2c-08`, `t4-13` to `t4-15`) show the values before the OK and are not evidence of the saved state.
- The canvas picture is a rendering; the bitmap filename was not confirmed by readback in T5.

### Findings (observed only; none classified as replay_verified)

1. The close with a clean Form produced no save prompt (observed).
2. The Form reopened through the recent-forms entry with the tree as planned (observed, same session).
3. A console count rise (2 to 3 errors) followed the StaticSignIn selection after the reopen (observed; the operator diagnosed a client-side uncaught TypeError at onItemAdd, appendChild, in the Designer app.js, and reloaded the Designer; not reproduced by the worker).
4. The Sign In button rendered teal, not blue, after the reopen (observed; a known EXP-110-R3 issue, out of scope for EXP-111 and not a new EXP-111 defect).
5. Keyboard navigation of list options in T2 committed a wrong bitmap value (observed in T2; corrected by a direct click; unresolved reason).
6. The EditCustID Justification list needed a double-click then one coordinate arrow click to open (observed once; unresolved reason).

## T11 readback continuation (final T5 continuation: readback and final audit only, run R-20261018-020406-7LK1 cycle 13, 2026-10-18): PARTIAL, BLOCKED

Scope: read-only readback of the five components after the operator's Designer reload, three Margin dialogs through their adorners, and this documentation. No Designer Save, no property change, no Undo, no Regenerate, no close or reopen, no reload, no sign-in. **Result: the readback is incomplete. StaticSignIn and StaticImage1 were read. StaticCustID2, EditCustID and ButtonSignIn2 were not read, and the ButtonSignIn2 Margin dialog was not opened. The task stopped on a stale-reference error because the one stale-reference recovery allowed for this task had already been used. The final audit is therefore partial (AC-5 not complete).**

### Sources and session

- AGENTS.md (repository file, lines 1 to 240) and the brief's listed sources were read at the start of the earlier part of this task (per the carried checkpoint). This continuation relied on that checkpoint and did not re-read them.
- Session usable throughout: no session-expiry modal, logout card or sign-in page. No credential was typed or read.
- Tab list and tab selection: **none** in this task (the open-tab section printed by the snapshots was the only tab information; tab 0 = Designer, `MGForm=FX_CustomerPortal`, current).
- No console message was read.

### Baseline and final console count

- Console at the start of this task after the operator's reload: **2 errors, 0 warnings** (the new baseline).
- Every printed reading in this task: **2 errors, 0 warnings** (after the Margin Cancels, after the failed Expand click, after the targeted reads). No rise occurred in this task. The rise recorded in T5 (2 to 3 at the StaticSignIn selection) did not recur at the StaticSignIn or StaticImage1 selections here.

### Components tree (Region02: signinpage, read-only)

- Confirmed earlier in this task by targeted reads of the Components grid (carried checkpoint): Region02: signinpage holds StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2, in that order, and nothing else; Region00 menu (ButtonSignIn, ButtonHome, ButtonCart), Region01 spacer1, Region03 homepage, Region04 cartpage and Region05 spacer2 unchanged.
- The Components grid is now collapsed to the `Pane (00)` row (view-only state). A targeted snapshot of the tree (`e577`, depth 6) showed only that row. Its child rows were not re-read in this continuation.

### Property readback (read-only; Properties panel; view-only group expansion)

- **StaticSignIn** (carried checkpoint, screenshots `t6-02` to `t6-05`): Name `StaticSignIn`; Type Static; Caption `FX_sSignIn`; Theme Class `FX_Header`; Justification `Center`; Binding Type `None` (seen in `t6-03`); Layout Size `20; 1.5`; Flex Attributes Index 2, Container signinpage; Miscellaneous > Specific Attributes No Colon `True`. Margin: see the dialog below.
- **StaticImage1** (carried checkpoint, screenshot `t6-07`): Name `StaticImage1`; Type Static; Caption blank; Theme Class blank; Bitmap File Name shows `FX_CustomerSignI…` (**truncated on screen; the full filename was not confirmed by this readback**); Justification `Right` (not in the brief's planned list for StaticImage1; observed default, not set by the worker); Layout Size `21; 8`; No Colon `True`; Flex Attributes Index 2, Container signinpage.
- **StaticCustID2, EditCustID, ButtonSignIn2**: **not read in this continuation.** Planned values remain as recorded in T3 and T4 (not re-verified after the reopen).

### Margin dialogs (component dialog, Cancel only)

- **StaticSignIn**: the dialog (title `FlexLayout`; screenshot `t6-06-staticsignin-margin-dialog-readback-before-cancel.png`) shows only the Design group: Region Index `2`, Margin `0,1,0,1`; no Type, Auto Size or Regions grid. Cancel was clicked (carried checkpoint). No screenshot after the Cancel.
- **StaticImage1**: the dialog (opened by the second authorized adorner coordinate click at (496, 267)) read from the untargeted snapshot before the Cancel: Design group only; Region Index `2`; Margin `0,1,0,1`. No screenshot was taken of this dialog. **Cancel clicked once (ref `e3868`, in the snapshot taken for this step).** After the Cancel the dialog is absent (final-state screenshot `t6-08`).
- **ButtonSignIn2: NOT opened.** The third and final authorized adorner click was not performed (the run stopped; see below). Margin 0,1,0,1 is therefore **unverified after the reopen** for ButtonSignIn2.

### Stop (mandatory)

- After the StaticImage1 Cancel, a targeted read of the Components tree (`e577`, depth 6) showed only the `Pane (00)` row. The next step was a single click on the grid's Expand button (`e519`, from the untargeted snapshot taken before the Cancel). The tool returned **`Ref e519 not found in the current page snapshot`**; the click did not run. The targeted read had invalidated that ref, as the brief warns for refs outside a targeted subtree.
- Recovery rule: after a Ref-not-found, one fresh untargeted snapshot and one corrected attempt are allowed. The task's one stale-reference recovery had already been used earlier in this task on the Properties expand-all ref (`e1333`). The allowance was therefore treated as exhausted; **no fresh untargeted snapshot was taken to recover this error, and no click was made after it.** The task stopped here with the state preserved.

### Final state (observed)

- FX_CustomerPortal **open**, User scope (status bar `ScopeType: User`; screenshot `t6-08-final-state-after-margin-cancel.png`). Form tab selected. Save and Undo **greyed** (visual in `t6-08`; the earlier untargeted snapshot showed both `disabled`).
- No dialog, list, menu or editor open (`t6-08`). The Properties panel shows the Form (`FX_CustomerPortal`), not a component (no component is selected).
- Components grid collapsed to `Pane (00)` (view-only).
- Canvas (`t6-08`): menu column Sign In, Home, Cart (teal); signinpage column: bold "Sign In" heading, cat picture, "Customer ID" label, empty edit box, and a Sign In button rendered **teal** (the planned FX_BlueButton colour was not seen; unresolved, as in T5).
- Console **2 errors, 0 warnings** at the last printed reading.
- No Save, no Undo, no close, no reopen, no reload, no sign-in in this continuation.

### Acceptance check status (this continuation, observed only; no unconditional acceptance)

- **AC-1: met** (baseline 2/0; Form open in User scope and clean at the end; tree Region02 order confirmed earlier in this task; string check was done in T1 and not repeated).
- **AC-2: partial.** Verified for StaticSignIn (Name, Caption, Theme Class, Justification, No Colon, Size 20; 1.5, Margin 0,1,0,1) and StaticImage1 (Name, No Colon, Size 21; 8, Margin 0,1,0,1; Bitmap File Name truncated, not confirmed). Not verified in this task: StaticCustID2, EditCustID (Justification, Size, Binding Type), ButtonSignIn2 (Caption, Theme Class, Size, Margin). The Save evidence per step is in the earlier sections.
- **AC-3: NOT met.** The readback after the reopen is incomplete (three components' properties and one Margin not read). The canvas (`t6-01`, `t6-08`) shows the stacked column in the planned order; the Form is open and clean.
- **AC-4: supported for this continuation** (no mutation; cancels only; view-only expansions). The run-wide statement is in the T5 section; no property-by-property check of the existing components was made.
- **AC-5: NOT complete.** The final audit below is partial; it cannot be completed until the missing readbacks are performed.

### Action audit (this continuation task; exact counts where recorded)

| Category | Count | Notes |
| --- | --- | --- |
| Tab list calls / tab selections | 0 / 0 | none in this continuation |
| Toolbox selections | 0 | |
| Placement coordinate clicks | 0 | |
| Margin adorner coordinate clicks | 2 | StaticSignIn (first click; its coordinates were not carried into the checkpoint); StaticImage1 at (496, 267). **ButtonSignIn2: not performed** (1 authorized click remains unused) |
| Margin dialog Cancel clicks | 2 | StaticSignIn (carried checkpoint); StaticImage1 (ref `e3868`) |
| Margin dialog OK clicks | 0 | |
| Undo clicks | 0 | |
| Designer Saves | 0 | |
| Caption list opens, prompts, String editor OKs, string creations | 0 / 0 / 0 / 0 | |
| Properties group expansions and scrolls | several | view-only; the exact number was not carried into the checkpoint |
| Grid Expand clicks | at least 1 succeeded earlier in this task; 1 **not run** (`e519` Ref not found) | the second was not recovered (allowance used) |
| Stale-reference events | 2 | `e1333` (Properties expand-all, earlier in this task; recovered with one untargeted snapshot); `e519` (grid Expand, after a targeted read; not recovered; stop) |
| Form closes / reopens | 0 / 0 | |
| Server-event errors | 0 | none observed |
| Session expiries / re-logins | 0 / 0 | |
| Console readings | 2 errors / 0 warnings, all | no rise in this continuation |
| Screenshots written | 8 | `t6-01` to `t6-08` (see inventory); `t6-04` was overwritten by a later scroll capture of the same name |

### Cumulative browser action audit (EXP-111, all tasks; exact counts where recorded)

- Toolbox selections: **5** (one per new component).
- Placement coordinate clicks: **5** (T2 two, T3 one for StaticCustID2 at (560, 425) and one for EditCustID at (560, 470), T4 one for ButtonSignIn2 at (560, 500)).
- Margin adorner coordinate clicks: **5** (T2 two; T4 one at (498, 484); T11 two). The brief's T5 continuation authorised three; two were used; one (ButtonSignIn2) was not performed.
- Operator-authorised coordinate click (EditCustID Justification arrow): **1**, at (1841, 474), in an earlier EditCustID continuation.
- Undo clicks: **0**.
- Designer Saves reported successful: **16** (T2 seven, T3 five, T4 four; T5 and T11 zero). The two T2 "Ref not found" Save clicks (orders 90 and 127) did not execute (operator ruling, 2026-10-18: settled).
- Margin dialog OKs: **3** (T2 StaticSignIn, after one stale OK that failed first; T2 StaticImage1; T4 ButtonSignIn2, after one stale OK that did not run). Margin dialog Cancels: **2** (T11 only).
- Form closes / reopens: **1 / 1** (T5 only).
- Prompts answered: **0**. String editor OKs: **0**; string creations: **0**.
- Session expiries / re-logins: **0 / 0**.
- Console at the start of T11 and at the last reading: **2 errors, 0 warnings** each; the T5 reading of 3 errors (StaticSignIn selection; operator-diagnosed client-side TypeError, Designer reloaded) is the only rise recorded in the run.

### Worker-written file inventory (this continuation)

- Worker-written screenshots (PNG, `evidence/EXP-111/`): `t6-01-new-baseline-reopened-tree-and-canvas.png` (new baseline, tree partly visible), `t6-02-staticsignin-properties-readback.png`, `t6-03-staticsignin-properties-expanded-readback.png`, `t6-04-staticsignin-layout-misc-readback.png` (written three times; the final image is the last scroll capture), `t6-05-staticsignin-misc-no-colon-readback.png`, `t6-06-staticsignin-margin-dialog-readback-before-cancel.png` (decisive Margin dialog), `t6-07-staticimage1-properties-readback.png`, `t6-08-final-state-after-margin-cancel.png` (final state). **8 files.**
- Worker-written markdown: this record (`experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md`).
- Cumulative worker-written PNG screenshots: **88** (80 through T5, plus the 8 above).
- Harness-written files (not read by the worker in this continuation): `evidence/EXP-111/harness-audit-T1.md` to `harness-audit-T9.md`.
- Browser-tool automatic files (not read): `evidence/playwright/page-*.yml` (the snapshot files returned by actions, including the one for the StaticImage1 Cancel) and `evidence/playwright/console-*.log`.

### Cleanup inventory (cumulative)

- Components created on FX_CustomerPortal (User scope), Region02: signinpage: **StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2** (five, the only components this run created).
- Global objects: none created. FX_sCustomerID was pre-existing (Part 5) and was not created or edited; FX_sSignIn was pre-existing (EXP-110-R2) and was not edited. FX_CustomerSignIn.png, FX_Header and FX_BlueButton were referenced only.
- Existing components and regions: no change recorded in any section; no property-by-property comparison was made.

### Final state of the run (as of this continuation)

- FX_CustomerPortal open and clean (Save and Undo disabled; no dialog, list or editor open), User scope. Console 2 errors, 0 warnings. The Components grid is collapsed to `Pane (00)`.

### Next step (for the operator; not performed)

1. A further read-only readback task (a separate worker task with its own stale-reference allowance): confirm the console count, expand the Components grid, select StaticCustID2 and read Caption `FX_sCustomerID`, Justification, No Colon, Size; select EditCustID and read Justification, Size and Binding Type (`None` expected, unchanged); select ButtonSignIn2 and read Caption, Theme Class `FX_BlueButton`, Size; open its Margin dialog through the adorner (one coordinate click, Cancel only) and record Margin `0,1,0,1`; read the StaticImage1 Bitmap File Name in full; then finish the final audit and the cleanup inventory.
2. Settled 2026-10-18 (operator ruling): the two T2 "Ref not found" Save clicks (90 and 127) did not execute.
3. The teal rendering of the Sign In button versus the planned FX_BlueButton is a known EXP-110-R3 issue, out of scope for EXP-111.

### Findings (observed only; none classified as replay_verified)

1. Margin dialogs of StaticSignIn and StaticImage1 show Region Index 2 and Margin 0,1,0,1 (observed, same session, after the reopen).
2. StaticImage1 Justification shows `Right`, the default (not set by the worker; the brief did not plan a value; observed).
3. The Bitmap File Name of StaticImage1 is truncated on screen; the full value was not confirmed (unresolved).
4. The Sign In button renders teal in the final state (observed; known EXP-110-R3 issue, out of scope).
5. A targeted snapshot of the Components tree invalidated a grid Expand ref outside its subtree, so the Expand click did not run (observed; the brief's refresh rule applies).
6. Console stayed at 2 errors, 0 warnings through this continuation; the earlier 2-to-3 rise was operator-diagnosed as a client-side TypeError, and the operator reloaded the Designer.

## T12 final readback and final audit (final T5 continuation, run R-20261018-020406-7LK1 cycle 15, task T12, 2026-10-18): PARTIAL READBACK; FINAL AUDIT WRITTEN

Scope: read-only readback of the five components after the operator's Designer reload, one Margin dialog (ButtonSignIn2) with Cancel, one screenshot, and this documentation. No Designer Save, property edit, placement, Caption or list entry, prompt, OK, Undo, Regenerate, close, reopen, reload, sign-in or runtime action. **Result: the tree and the Margin values of all three components are confirmed; the Size of all five and the Flex Attributes of all five are confirmed as text; several values that the accessibility tree does not expose (ButtonSignIn2 Caption and Theme Class, EditCustID Justification and Binding Type, StaticCustID2 No Colon, StaticImage1 full Bitmap File Name) remain NOT verified in this task, because the one-screenshot allowance was used on StaticCustID2 and no further screenshot was authorized.**

### Sources and session

- AGENTS.md read in full (lines 1 to 240); `docs/mongoose/transcripts/hello-world-pt7.md` lines 219 to 239, 317 and 466 to 492; `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; the Outcome sections of EXP-110-R3 (lines 421 to 436), EXP-107 (lines 868 to 887) and EXP-106 (lines 865 to 886). The earlier EXP-111 sections were not re-read in full in this task; the lines to correct were located by Grep and replaced by exact match.
- Tab list: one call before any tab action (tab 0 = Designer, `MGForm=FX_CustomerPortal`, current; tab 1 = Web Client, not used). No tab selection. The list call reported one new console log entry (`evidence\playwright\console-2026-10-18T07-28-08-061Z.log`); it was not read.
- Session usable: no session-expiry modal, logout card or sign-in page. No credential typed or read. No console message read.

### Precheck (before any browser interaction)

- Fresh untargeted snapshot: FX_CustomerPortal open, Form tab selected, status bar `ScopeType: User`, Save and Undo disabled, no dialog, menu, list or editor open. **Console 2 errors, 0 warnings** (the post-reload baseline).

### Components tree (read-only; targeted reads of the Components tree at depth 6)

- Region02: signinpage, children in order: **StaticSignIn (Static), StaticImage1 (Static), StaticCustID2 (Static), EditCustID (Edit), ButtonSignIn2 (PushButton)**; then Region03: homepage. All five show Container FlexLayoutMain.
- Unchanged: Region00: menu > ButtonSignIn, ButtonHome, ButtonCart (PushButton, FlexLayoutMain); Region01: spacer1; Region04: cartpage; Region05: spacer2; FlexLayoutHeader > Region00: header > StaticHeader and Region01: user > StaticCustIcon, StaticCustID; FlexLayoutFooter > Region00: UNKNOWN0.
- The Components grid collapsed after the Cancel of the Margin dialog (T11 and T12 both), so it was expanded again (view-only) before the reads.

### Property readback (Properties panel; expand-all applied to StaticCustID2 and ButtonSignIn2 groups where shown)

| Component | Property | Expected | Observed in T12 | Source |
| --- | --- | --- | --- | --- |
| StaticCustID2 | Name | StaticCustID2 | StaticCustID2 | accessibility text |
| StaticCustID2 | Type | Static | Static | header "StaticCustID2 (Static)"; screenshot |
| StaticCustID2 | Caption | FX_sCustomerID | **FX_sCustomerID** | screenshot `t12-01` |
| StaticCustID2 | Theme Class | blank (not planned) | blank | screenshot `t12-01` |
| StaticCustID2 | Justification | Center | **Center** | screenshot `t12-01` |
| StaticCustID2 | No Colon | True | **not verified in T12** (below the visible area; no value in accessibility text). T3 record (Step C) states True | none in T12 |
| StaticCustID2 | Size | 20; 1.5 | **20; 1.5** | accessibility text |
| StaticCustID2 | Flex Attributes | Index 2, signinpage | **Index: 2 Target: signinpage** | accessibility text |
| EditCustID | Name / Type | EditCustID / Edit | **EditCustID / Edit** | accessibility text; header "EditCustID (Edit)" |
| EditCustID | Justification | Center | **not verified in T12** (combobox value not exposed as text) | none in T12 |
| EditCustID | Size | 20; 1.5 | **20; 1.5** | accessibility text |
| EditCustID | Binding Type | None (unchanged) | **not verified in T12** (value not exposed as text). Earlier read as None (T3 continuation, `t3c-05`); no step set a binding | none in T12 |
| EditCustID | Flex Attributes | Index 2, signinpage | **Index: 2 Target: signinpage** | accessibility text |
| ButtonSignIn2 | Name / Type | ButtonSignIn2 / Button | **ButtonSignIn2 / PushButton** (tree Type column; header "ButtonSignIn2 (Button)") | accessibility text |
| ButtonSignIn2 | Caption | FX_sSignIn | **not verified in T12** (combobox value not exposed as text). Canvas label "Sign In" is consistent with it | none in T12 |
| ButtonSignIn2 | Theme Class | FX_BlueButton | **not verified in T12** (not exposed as text) | none in T12 |
| ButtonSignIn2 | Size | 20; 1.5 | **20; 1.5** | accessibility text |
| ButtonSignIn2 | Flex Attributes | Index 2, signinpage | **Index: 2 Target: signinpage** | accessibility text |
| ButtonSignIn2 | Event handlers | none planned | Drag From Events **0 event(s)**; Drop On Events **0 event(s)**. The Primary, Data Change, Lose Focus and Gain Focus rows show no count text in the accessibility tree, so their status is **not determined** in T12. The worker recorded no event handler in any step | accessibility text |
| StaticImage1 | Name / Type | StaticImage1 / Static | **StaticImage1 / Static** | accessibility text; header |
| StaticImage1 | Bitmap File Name | FX_CustomerSignIn.png | **not confirmed.** The value is not exposed as accessibility text (blank in the tree). The T11 screenshot `t6-07` shows it truncated as "FX_CustomerSignI…". The full name is **not** inferred from the picture | accessibility text; `t6-07` (T11) |
| StaticImage1 | Size | 21; 8 | **21; 8** | accessibility text |
| StaticImage1 | Flex Attributes | Index 2, signinpage | **Index: 2 Target: signinpage** | accessibility text |
| StaticImage1 | No Colon | True | **not verified in T12**; T11 screenshot `t6-07` shows True | `t6-07` (T11) |
| StaticImage1 | Justification | not planned | Right (default, as observed in T11; not set by the worker) | `t6-07` (T11) |
| StaticSignIn | Caption, Theme Class, Justification, No Colon, Size, Margin | FX_sSignIn, FX_Header, Center, True, 20; 1.5, 0,1,0,1 | not re-read in T12; values as recorded in T11 (`t6-02` to `t6-06`) | T11 |

### Margin dialogs

- **ButtonSignIn2 (T12, the third and final authorized adorner click):** the selected component's canvas box was x 485, y 488, w 148, h 27 (snapshot with boxes). The adorner was clicked at **(498, 501)**: 13 px inside the top-left corner, the same offset as the StaticCustID2 adorner in `t12-01` and the T4 click (498, 484). The dialog titled `FlexLayout` contained only the Design group: **Region Index 2**, **Margin 0,1,0,1**; no Type, Auto Size or Regions grid (so it is the component's own dialog, not a FlexLayout's). **Cancel** clicked once (ref `e3578`, from the untargeted snapshot taken for that dialog). The next snapshot showed no dialog. No screenshot was taken of this dialog (screenshot allowance used). The reading is from accessibility text.
- **StaticSignIn and StaticImage1 (T11):** both read Region Index 2, Margin 0,1,0,1 and were cancelled in T11 (StaticSignIn screenshot `t6-06`; StaticImage1 read from the snapshot, no screenshot). Not re-opened in T12.

### Stale-reference events (T12; each followed by one fresh untargeted snapshot, per AGENTS.md)

1. `Ref e367 not found` on a targeted tree read after the StaticCustID2 selection and expand-all. Intended action: a read only. One fresh untargeted snapshot; the next targeted read succeeded.
2. `Ref e367 not found` on a targeted tree read after the EditCustID selection. Intended action: a read only. One fresh untargeted snapshot; the next targeted read succeeded.
3. `Ref e283 not found` on a targeted canvas read (with boxes) after the ButtonSignIn2 selection. Intended action: a read only. One fresh untargeted snapshot with boxes supplied the adorner position.

No stale reference was used for a click. Every click in T12 used a reference from a snapshot taken in T12 after the most recent change of state.

### Cumulative browser action audit (EXP-111, all tasks; exact counts where recorded)

| Category | Count | Notes |
| --- | --- | --- |
| Toolbox selections | 5 | one per new component |
| Placement coordinate clicks | 5 | StaticSignIn and StaticImage1 (T2), StaticCustID2 (560, 425), EditCustID (560, 470), ButtonSignIn2 (560, 500) |
| Margin adorner coordinate clicks | **6** | T2: StaticSignIn, StaticImage1 (2); T4: ButtonSignIn2 at (498, 484) (1); T11: StaticSignIn (re-open; its coordinates were not carried into the checkpoint), StaticImage1 at (496, 267) (2); T12: ButtonSignIn2 at (498, 501) (1). Authorized total 6 (T2 two, T4 one, T5 three); none left |
| Operator-authorized coordinate click | 1 | EditCustID Justification arrow at (1841, 474) (the only non-placement, non-adorner coordinate click) |
| Undo clicks | 0 | none recorded in any section |
| Designer Saves, successful | **16** | T2 7, T3 5, T4 4; none in T5, T11 or T12 |
| Save clicks rejected or not run | 3 | T2 orders 90 and 127 (`Ref ... not found`; **did not execute**, operator ruling 2026-10-18); T3 StaticCustID2 Save #2 first attempt (`Ref e1158 not found`; not run) |
| Caption list opens / key presses | 3 / 34 | T2 StaticSignIn (10 keys), T3 StaticCustID2 (14), T4 ButtonSignIn2 (10). The bitmap-list keystrokes in T2 are a filter, not a Caption entry |
| Plain-fill entries (Name, Width/Height, Margin) | 17 | Name 5, Width/Height 9, Margin 3 (as recorded in the sections; the earlier sections give no separate Width count for StaticSignIn) |
| Field corrections | 1 | T2 StaticImage1 Bitmap File Name: committed `20x20_settings.png` by keyboard highlight, corrected to `FX_CustomerSignIn.png` by a direct option click |
| Margin dialog OKs (successful) | 3 | T2 StaticSignIn (one stale OK failed first, then one succeeded); T2 StaticImage1; T4 ButtonSignIn2 (one stale OK did not run first) |
| Margin dialog Cancels | 3 | T11 StaticSignIn; T11 StaticImage1; T12 ButtonSignIn2 |
| Prompts answered | 0 | the String prompt did not occur because FX_sCustomerID already existed; the T5 close showed no save prompt |
| String editor OKs / string creations | 0 / 0 | FX_sSignIn and FX_sCustomerID were pre-existing |
| Form closes / reopens | 1 / 1 | T5 only |
| Operator Designer reload | 1 | performed by the operator after the T5 stop; not a worker action |
| Server-event errors | 0 | none recorded |
| Session expiries / re-logins | 0 / 0 | none |
| Console readings | 2 errors / 0 warnings at each reading, except **3 errors, 0 warnings** at the T5 StaticSignIn selection (the only rise recorded in the run) | every T12 reading was 2 / 0 |
| Stale-reference events | T11 2 (`e1333` recovered; `e519` not recovered); T12 3 (all recovered) | earlier sections record many more; no exact cumulative count is given |
| Tab list calls | 8 as recorded (T1, T2 recovery, T2 continuation, T3 StaticCustID2, T3 EditCustID, T3 continuation, T4, T12) | T2 original-segment and T11 calls are not in the sections; no tab selection in T5, T11 or T12 |
| Snapshot calls (T12) | 22 | 11 untargeted, 8 targeted reads that succeeded, 3 that returned `Ref ... not found` (each followed by one untargeted recovery snapshot) |
| Screenshots (T12) | 1 | `t12-01` |
| Regenerate, unload, checkout, FormSync, deployment, direct URL, JavaScript, dragging | 0 | none |

Action counts for T12 alone: tab list 1; tab selections 0; reference clicks 8 (Components Expand, StaticCustID2 row, Properties expand-all, EditCustID row, ButtonSignIn2 row, ButtonSignIn2 dialog Cancel, Components Expand, StaticImage1 row); coordinate clicks 1 (adorner); Saves 0; Undo 0; typed entries 0; Tab presses 0; OKs 0; prompts 0; screenshots 1.

### Save reconciliation (settled per operator ruling, 2026-10-18)

- T2: 7 successful (Saves #1 to #7). The two Save clicks (orders 90 and 127) returned `Ref ... not found` and **did not execute** (operator ruling).
- T3: 5 successful (StaticCustID2 Saves #1 to #3; EditCustID Saves #4 and #5). The T3 Save #2 first attempt (`Ref e1158 not found`) did not run.
- T4: 4 successful (ButtonSignIn2 Saves #1 to #4).
- **Total: 16 successful Designer Saves.** Settled; no further investigation of Designer Save history.

### Acceptance check status (final, observed only; no unconditional acceptance)

- **AC-1: met.** Sources read (T1 and T12); session usable; User scope; FX_CustomerPortal open and clean at the T12 precheck; Region02 empty at T1 and the five components in order at T12; menu Buttons and other regions unchanged; strings FX_sSignIn = Sign In and FX_sCustomerID = Customer ID (T1, `t1-02`); baseline 2 errors / 0 warnings (T1 and T12).
- **AC-2: partially evidenced.** Each performed step has one Save and its record (16 total). Verified in T12 or T11 by text or screenshot: names of all five; Size of all five (20; 1.5 and 21; 8); Caption FX_sCustomerID of StaticCustID2 (`t12-01`); Justification Center of StaticCustID2 (`t12-01`) and StaticSignIn (T11); Caption FX_sSignIn and Theme Class FX_Header of StaticSignIn (T11 `t6-02`, `t6-03`); No Colon True of StaticSignIn and StaticImage1 (T11); Margins 0,1,0,1 of StaticSignIn, StaticImage1 and ButtonSignIn2 (dialogs). **Not verified:** ButtonSignIn2 Caption and Theme Class (FX_BlueButton); EditCustID Justification and Binding Type; StaticCustID2 No Colon; StaticImage1 full Bitmap File Name (FX_CustomerSignIn.png). Console 2/0 at every reading after the operator reload. At most one correction in the run (T2 bitmap).
- **AC-3: NOT met.** The ordinary close and reopen (T5) was followed by a tree check and a StaticSignIn selection that raised the count to 3 errors; the readback was then stopped. After the operator's reload, the T11 and T12 readbacks ran in the same session and did not repeat a close and reopen. The canvas shows the stacked column in the planned order (`t5-02`, `t6-01`, `t6-08`, `t12-01`): "Sign In" heading, the cat picture, a "Customer ID" label, an empty edit box, and a Sign In button rendered teal. The Form is open and clean.
- **AC-4: supported for T12 (no mutation).** Across the run, every tree read showed no change to other components or regions. This is not a property-by-property comparison of the existing components. No binding, event handler, Regenerate, drag, runtime action, unload or checkout action is recorded. T12 did not overrun its task.
- **AC-5: partial.** This section and the sections above give the counts, inventories, dispositions and evidence, but AC-2 and AC-3 items remain unverified as listed. The audit is not an unconditional acceptance.

### Worker-written file inventory (whole run, EXP-111)

- Worker-written PNG screenshots (`evidence/EXP-111/`): T1 2; T2 original 28; T2 recovery 3; T2 continuation 8; T3 StaticCustID2 11; T3 EditCustID 5; T3 EditCustID continuation 6; T4 15; T5 2; T11 8 (`t6-01` to `t6-08`); T12 1 (`t12-01-staticcustid2-properties-readback.png`). **Total: 89.**
- Worker-written markdown: `experiments/EXP-111-hello-world-part-7-section-8-sign-in-page.md` (this record; status header, the T2, T5 and T11 Save and console lines, and this T12 section were edited in T12).
- Harness-written files (not authored by the worker; not read in T12): `evidence/EXP-111/harness-audit-T1.md` to `harness-audit-T9.md`.
- Browser-tool automatic files (not read): `evidence/playwright/page-*.yml` (snapshot files returned by actions), `evidence/playwright/console-*.log` (including the T12 tab-list entry).

### Cleanup inventory (cumulative)

- Components created on FX_CustomerPortal (User scope), Region02: signinpage: **StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2** (five; the only components this run created).
- Global objects: none created or edited by this run. **FX_sCustomerID was pre-existing** (Part 5; value Customer ID per T1; reused unchanged; its ellipsis was never clicked). FX_sSignIn was pre-existing (EXP-110-R2; value Sign In; not edited; ellipsis never clicked). FX_CustomerSignIn.png, FX_Header and FX_BlueButton were referenced only.
- Existing components and regions: no change recorded in any section; no property-by-property comparison of the existing components was made.

### Deviations and qualifications (preserved; observed)

1. **T2 wrong bitmap:** the bitmap list committed `20x20_settings.png` after keyboard highlight; corrected by a direct option click (the only field correction).
2. **T2 keyboard navigation of lists** (contrary to the click rule): Theme Class (ArrowDown, ArrowUp, Enter), Justification (ArrowDown), No Colon (ArrowDown), bitmap (ArrowDown, PageDown).
3. **Worker usage-limit interruption (T3):** the Designer reset during the pause lost the unsaved Justification and No Colon edits after Save #2; re-applied and saved in Save #3. Cause not established by the worker.
4. **Parallel browser actions (first EditCustID task):** the Name fill and Tab were sent in one response block; both succeeded and the commit was checked before Save #4.
5. **Operator-authorized EditCustID Justification escalation:** double-click on the value cell, one coordinate click on the arrow (1841, 474), then the option by reference and Tab.
6. **Stale-reference events:** recovered by one fresh untargeted snapshot each, except T11 `e519` (not recovered; allowance used). The ButtonSignIn2 Margin stale OK (`e2736`) did not run and was repeated after a fresh snapshot.
7. **Overwritten evidence files:** `t3a-05-justification-list-open.png` and `t3a-07-components-tree-after-usage-limit-readonly.png` (earlier images lost); `t6-04-staticsignin-layout-misc-readback.png` (the final image is the last scroll capture).
8. **Denied tool-result read** of a persisted oversized snapshot (T2 continuation); nothing from it was used.
9. **T5 console rise (2 to 3 errors) at the StaticSignIn selection:** the operator diagnosed a client-side uncaught TypeError at onItemAdd (appendChild) in the Designer app.js and reloaded the Designer. The worker did not reproduce or inspect it. Not a current finding.
10. **Teal Sign In button rendering:** a known EXP-110-R3 issue, out of scope for EXP-111; observed only, not a new EXP-111 defect.
11. **Values not exposed as accessibility text** (combobox and checkbox values): verified only where a screenshot exists (T11 `t6-02` to `t6-07`, T12 `t12-01`); the rest is listed as not verified.
12. **Post-reload readbacks:** the T11 and T12 readbacks were in the same session after the operator's reload, not after a further close and reopen.

### Findings (observed only; none classified as replay_verified)

1. Region02: signinpage holds the five components in the planned order (observed, same session after the operator's reload).
2. StaticCustID2: Caption FX_sCustomerID, Justification Center, Size 20; 1.5 (observed, `t12-01` and accessibility text); the canvas label "Customer ID" resolves the caption (observed).
3. Margin 0,1,0,1 on StaticSignIn and StaticImage1 (T11 dialogs) and on ButtonSignIn2 (T12 dialog): observed.
4. StaticImage1 Bitmap File Name: not exposed as text, so the full value is not confirmed; the T11 screenshot shows it truncated (unresolved limitation of the read, not a defect observed).
5. ButtonSignIn2 Caption and Theme Class, and EditCustID Justification and Binding Type: not exposed as text; not verified in T12 (limitation of the read).
6. ButtonSignIn2 Drag From and Drop On events: 0 event(s); the other event rows: status not determined.
7. The Components grid and the Properties selection reset to the Form after each Margin dialog Cancel (observed in T11 and T12).
8. Teal Sign In button: known EXP-110-R3 issue (observed; out of scope).

### Limitations

- Same-session UI evidence only. The close and reopen (T5) showed UI-level retention within the session. No cross-session or database-level durability is claimed. No replay verification is claimed.
- The T11 and T12 readbacks followed the operator's reload in the same session.
- Only one screenshot was taken in T12 (`t12-01`), per the brief. No screenshot exists for the ButtonSignIn2 Margin dialog in T12 (accessibility reading only).

### Next step (for the operator; not performed)

1. Recommended disposition: accept the completed parts as observed-partial. AC-1 is met; AC-2 is partially evidenced; AC-3 is not met for the full property readback; AC-4 is supported; AC-5 is partial. The worker does not declare experiment acceptance.
2. If the operator wants the remaining values confirmed, a separate read-only task should be authorized with a screenshot allowance for: ButtonSignIn2 Caption and Theme Class; EditCustID Justification and Binding Type; StaticCustID2 No Colon; StaticImage1 full Bitmap File Name; StaticImage1 No Colon.
3. The teal rendering of the Sign In button is a known EXP-110-R3 item; no action is proposed in EXP-111.

## Outcome (operator, 2026-10-18)

Accepted (observed), with qualifications. **Hello World Part 7 Section 8 is complete: FlexLayoutMain > Region02: signinpage of FX_CustomerPortal (User scope) holds StaticSignIn, StaticImage1, StaticCustID2, EditCustID and ButtonSignIn2 in that order, built with a Designer Save after each step (16 Saves, each with the standard toast) and read back after an operator Designer reload.** Run R-20261018-020406-7LK1 (12 of 12 worker tasks).

- Planned and saved:
  - **StaticSignIn**: Caption FX_sSignIn, Theme Class FX_Header, Justification Center, No Colon True, Size 20; 1.5, Margin 0,1,0,1.
  - **StaticImage1**: Bitmap File Name FX_CustomerSignIn.png, No Colon True, Size 21; 8, Margin 0,1,0,1.
  - **StaticCustID2**: Caption FX_sCustomerID (existing Part 5 string, value Customer ID, reused unchanged), Justification Center, No Colon True, Size 20; 1.5.
  - **EditCustID**: Justification Center, Size 20; 1.5, Binding Type None (the Variable Customer ID binding is deferred to Part 8 with StaticCustID).
  - **ButtonSignIn2**: Caption FX_sSignIn, Theme Class FX_BlueButton, Size 20; 1.5, Margin 0,1,0,1; no event.
- **Persistence (AC-3):** the operator accepts the readback after the operator's Designer reload (T11, T12) as the persistence check; it reloaded the Form from the server, which is stronger than the same-session close/reopen of T5 that was interrupted. Read back after the reload: the tree order; the Size of all five; Margin 0,1,0,1 in each component's own dialog (StaticSignIn `t6-06`; StaticImage1 and ButtonSignIn2 from snapshot text); every planned StaticSignIn value (`t6-02` to `t6-05`); StaticImage1 No Colon True (`t6-07`); StaticCustID2 Caption FX_sCustomerID and Justification Center (`t12-01`).
- **Not confirmed as text after the reload (carried into the next experiment's gate):** ButtonSignIn2 Caption and Theme Class (canvas label "Sign In"); EditCustID Justification and Binding Type (saved with toast, `t3c-06`); StaticCustID2 No Colon (canvas label has no colon); StaticImage1 full Bitmap File Name (shown truncated `FX_CustomerSignI...`; the sign-in cat picture is drawn).
- Screenshots viewed by the operator assistant: `t2-16` (StaticSignIn Size 20; 1.5, No Colon True), `t2-19` (StaticSignIn Margin dialog), `t2-20`, `t2-21` (Save toasts), `t2-28` (wrong bitmap highlighted), `t2c-07` (cat picture drawn after the correction), `t3b-05` (EditCustID Justification arrow visible but not exposed), `t12-01` (after the reload: tree with the five components; canvas heading, picture, Customer ID label, edit box, Sign In button; StaticCustID2 Caption FX_sCustomerID, Justification Center).
- **Operator rulings during the run:**
  1. T2 turn limit: continued in a new task after a read-only recovery.
  2. "Ref not found" Save clicks (T2 orders 90 and 127) did not execute; the T2 total is 7 and the run total 16.
  3. StaticSignIn accepted complete on `t2-16`, `t2-19`, `t2-20` without a re-inspection task.
  4. Components after StaticImage1 run one per task.
  5. EditCustID Justification escalation: one ref double-click, then one coordinate click on the visible arrow (1841, 474); Center then chosen by ref.
  6. The stale-reference allowance is one fresh untargeted snapshot per "Ref not found" error, not one per task.
- **Console rise in T5 (diagnosed by the operator assistant from `evidence/playwright/console-2026-10-18T06-31-10-985Z.log`):** an uncaught client-side `TypeError: Failed to execute 'appendChild' on 'Node'` at `onItemAdd` in Designer `app.js`, raised by the StaticSignIn row selection after the ordinary reopen. No HTTP 4xx/5xx and no GenerateServerEvent failure; nothing was unsaved. The operator reloaded the Designer; the count stayed at the baseline 2 afterwards. All earlier tasks stayed at 2.
- Findings (observed):
  1. The Bitmap File Name list does not filter on typed text; Tab commits the highlighted first item (`20x20_settings.png`), the same failure mode as the Caption combobox (EXP-106). A direct click on the option works.
  2. The Edit component's Justification combobox arrow was not exposed in the accessibility tree; single clicks on the value cell selected the row only; a double-click showed the arrow, reachable only by a coordinate click.
  3. Default sizes: Static 20; 1, Edit 37.05; 2, Button 14.25; 1.89; new components land in Region02 with Flex Attributes Index 2 Target signinpage.
  4. Each component's own Margin dialog shows only Region Index and Margin; reached through its canvas adorner (coordinate click).
  5. The canvas resolves Captions immediately (Sign In, Customer ID) and drew the sign-in picture after the Margin OK.
  6. The Caption key-by-key entry plus Description-row exit enabled Save every time (StaticSignIn, StaticCustID2, ButtonSignIn2); the console-error stop did not trigger on any Caption commit.
- Deviations accepted as recorded: arrow-key and Enter list navigation in the first T2 task (which committed the wrong bitmap; one correction); one parallel Name fill and Tab; two overwritten screenshots (`t3a-05`, `t3a-07`); partial task-start source reads in continuation tasks; worker re-opening its own screenshots; one denied Read of the worker's own oversized snapshot file outside the repository (nothing read); unsaved StaticCustID2 edits lost at the usage-limit pause and re-applied.
- Pauses: worker turn limit (T2); Claude subscription usage limit (T3, resumed after the reset); coordinator pauses for operator rulings; completed-with-denials (approved).
- Unresolved: the FX_BlueButton buttons (ButtonSignIn2 and the menu Buttons) render teal in the Designer canvas, as in EXP-110-R3; runtime colour not verified. The cause of the T5 Designer script exception is not established.
- Cleanup inventory (Section 8): five components StaticSignIn, StaticImage1, StaticCustID2, EditCustID, ButtonSignIn2 on FX_CustomerPortal (User scope). No global object created or changed (FX_sSignIn, FX_sCustomerID, FX_Header, FX_BlueButton and FX_CustomerSignIn.png referenced only).
- Confinement (git status): only `evidence/EXP-111/` and this record were written by the run in the repository; the browser tool also wrote its usual snapshot and console files under `evidence/playwright/`.
- Next: Hello World Part 7 Section 9 (15:24-16:54, Flex Layout Home in the homepage region), with a gate that reads back the four values above.
