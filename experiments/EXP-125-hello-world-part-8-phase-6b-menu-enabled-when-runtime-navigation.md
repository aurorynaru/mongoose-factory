# EXP-125 - Hello World Part 8 Phase 6b: Enabled When FX_CustomerID Not Blank on the Menu Buttons, Close/Reopen Readback and Runtime Navigation Check

Status: accepted (observed)

Worker status at T9 (history): **the run's planned steps T1 to T9 are complete as same-session UI observations; the T1 gate was completed in attempt 4; experiment acceptance is NOT declared by the worker and requires operator disposition (see the T9 section).** The original T1 stop is kept below as history. Historical T1 stop: two stop conditions met in T1: (1) a Mongoose "Session Expired" modal ("Your session has expired.") appeared over the Web Client runtime FX_CustomerPortal; (2) the Web Client console error count rose after the modal's OK click (8 to 16, then 17). No Designer change, no Save, no runtime save, no Enabled When change was made at that point (the later T2 to T9 steps are recorded in their own sections).

- Run: R-20261020-205105-2ynw, cycle 0, task T1 (worker session 61fbe074-ca98-4144-a3c7-b243bd03e602; task message 88cd69fb-7645-452b-9c02-2600c205528a).
- Date: 2026-10-20.
- Brief: Part 8 Phase 6 (15:05-16:54) on FX_CustomerPortal, User scope. Menu buttons ButtonSignIn, ButtonHome and ButtonCart get Enabled When `FX_CustomerID` not equal to a blank literal; Designer close/reopen readback; runtime check of the disabled menu, Customer ID 1 plus ButtonSignIn2, and Cart/Home/Sign In navigation. Findings are observed only. The sign-in is a UI demonstration, not authentication.

## Operator decision needed before anything else

1. **Session.** The Web Client tab's Mongoose session ended while the runtime FX_CustomerPortal was open. The modal's OK was clicked once (the one permitted dismissal); the console then rose. Per the brief, the operator signs in manually (EXP-107). The worker did not navigate, did not sign in, and did not type any credential.
2. **Console rise.** Web Client console 8 errors / 2 warnings before the OK click; 16 errors / 3 warnings right after it; 17 errors / 3 warnings after the next read-only screenshot. Designer tab 2 errors / 0 warnings (unchanged). The tool-written console log was not read by the worker; the operator diagnoses the cause from it.
3. **Restart of the gate.** The T1 gate is incomplete (see below). The next permitted step is a fresh T1 gate, read-only, after the operator signs in and reloads the Designer as the operator decides. No Designer state was changed in T1, so nothing needs to be undone.

## Sources reviewed (T1, before any browser interaction)

- `AGENTS.md` (full, 240 lines).
- `docs/mongoose/transcripts/hello-world-pt8.md`: "Instructions for AI agents" lines 12-22; Phase 6 lines 170-186; transcript lines 457-473 (15:05-16:54).
- `recipes/session/session-expiry-and-stale-designer.md` (full).
- Operator Outcome sections only: EXP-124 (lines 1001-1024), EXP-123 (lines 925-945), EXP-118 (lines 361-380), EXP-111 (lines 1309-1342), EXP-095 (lines 956-975).
- Glob listings of experiment file names (names only, no content). No other record was read.

Facts taken from those Outcomes that set T1 expectations: EXP-124 left FX_CustomerID under Form - Temporary, EditCustID and StaticCustID bound to `variables.FX_CustomerID`, EditCount `variables.FX_Count(INITIALVALUE(1))`, and the handlers FX_SignInBtn2, FX_HomeBtn and FX_CartBtn as Primary of ButtonSignIn, ButtonHome and ButtonCart. EXP-123 documents the Edit Condition builder's blank clause `= |` and the CListBox::SetCurSel error after New (never click New). EXP-111 documents the banner and the Save behaviour after a Caption commit. EXP-118 documents that a second click on the menu-bar button closes a Form menu.

## Gate (T1): what was observed

### Tabs (read-only list before any selection)

- Tab 0: Web Client, portal app ("Mongoose"), tab title `Mongoose`. At the start it was the current tab and had the FX_CustomerPortal runtime Form tab.
- Tab 1: Web Designer, `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`, mode=designer.

### Web Client (tab 0)

- **Runtime Form open:** FX_CustomerPortal (tab heading `FX_CustomerPortal`). Visible content: heading "Customer Portal"; left menu buttons Sign In, Home, Cart; sign-in page with "Sign In" heading, Customer ID label, a textbox and a Sign In button. The page under the modal is greyed.
- **Session state at start:** a Mongoose modal "Session Expired" with the text "Your session has expired." and one OK button. Its accessibility name is `Session Expired` (alertdialog). The runtime tab also carries a yellow portal notification strip at the top: "The DistributionIFSContactUs group does not have any active users assigned to the group..." (an Infor OS portal banner, not a Mongoose artifact).
- **Unsaved changes in the runtime Form:** not established. The runtime Form shows no unsaved-change indicator in the snapshot or screenshot; the expiry modal was already present, so the worker could not assess it further.
- **Console baseline (tool-written header):** 8 errors, 2 warnings (snapshot 1, and unchanged on snapshots 2 and 3).

### Designer (tab 1)

- **Designer baseline (targeted snapshot of the Form tab strip):** `Console: 2 errors, 0 warnings`. The Designer's own console baseline is 2 errors.
- **Form tab:** `FX_CustomerPortal` is the selected Form tab (tablist, `closable FX_CustomerPortal`). A targeted find showed the Components tree with flexlayoutPane_FX_CustomerPortal, Region00: header (FlexLayoutHeader), Region01: main (FlexLayoutMain) and Region02: footer (FlexLayoutFooter), which is consistent with the form being open; this is not a readback of the Designer's scope or of its dirty state beyond the Save check below.
- **Save:** disabled (targeted find, toolbar: `Save [disabled]`, `Regenerate Form [disabled]`).
- **Dialogs:** a targeted find for OK, Cancel and dialog returned no dialog element. This is not a full dialog check (the full snapshot was too large to return; see Findings).
- **Not read in T1 (stop reached first):** Details > Event Handlers; Details > Variables; ButtonSignIn, ButtonHome and ButtonCart Events > Primary; their Behavior > Enabled When rows; the "Identify Your Editing Scope" check and the User-scope readback; the Event Handlers and ButtonSignIn Behavior screenshots. These are not established by this run.

## Actions performed in T1 (in order)

1. Read the sources listed above (file reads; no browser action).
2. `browser_tabs` list (tabs 0 and 1 identified). Before any tab selection.
3. Untargeted snapshot of the current tab (tab 0, Web Client). Result: Session Expired modal present; console 8 errors / 2 warnings.
4. `browser_click` OK on the modal (ref f1e127, from snapshot 1). **Timed out** at "waiting for element to be visible, enabled and stable" (the locator resolved). Not dispatched. Console unchanged.
5. Untargeted snapshot (fresh, read-only). Modal still present; console 8 / 2.
6. `browser_click` on the portal banner's close (×) control (ref e85). **Timed out** at the same check. Not dispatched.
7. `browser_take_screenshot` (tab 0). **Timed out** ("taking page screenshot"; fonts loaded; no image). Not captured. The brief says a background tab does not render, so the cause is the tab not being the rendered one (see Findings).
8. `browser_tabs` select index 0 (Web Client). **Succeeded.**
9. `browser_take_screenshot` `evidence/EXP-125/t1-01-webclient-session-expired-modal.png`. **Succeeded.** Read back (see Decisive evidence).
10. Untargeted snapshot (fresh, after the tab selection, before any click). Modal OK button `[active]`; console 8 / 2.
11. `browser_click` OK on the modal (ref f1e127, from snapshot 10). **Dispatched.** Console rose to **16 errors / 3 warnings** in the click's output. This is the first stop condition for the console.
12. `browser_take_screenshot` `evidence/EXP-125/t1-02-webclient-after-ok-console-rise.png` (read-only). Console **17 errors / 3 warnings**. Read back (see Decisive evidence).
13. `browser_tabs` select index 1 (Designer). **Succeeded.** (Selection is browser navigation, not a Mongoose action.)
14. Untargeted snapshot of the Designer. **Returned an error:** the result was 70,615 characters and was saved by the tool to a file in the Claude tool-results folder (outside the repository). The worker did not open that file. Per the size rule (EXP-114), targeted reads were used instead.
15. `browser_find` text `FX_CustomerPortal` (read-only). Found the FX_CustomerPortal tab (selected) and the component tree. Refs not used for any click.
16. `browser_snapshot` targeted at the Designer tablist (ref e244, from find 15). **Succeeded.** Page header: `Console: 2 errors, 0 warnings`.
17. `browser_find` regex `button "(Save|OK|Cancel)"` or `dialog` (read-only). Found the toolbar: Save disabled, Regenerate Form disabled. No dialog element.

Not performed (T1 stopped): any Designer click, any Designer Save, any Details or Properties selection, any Enabled When dialog, any close or reopen, any runtime open, any typing.

## Cumulative action audit (through T1)

Counts are exact for this task.

| Category | Count | Notes |
| --- | --- | --- |
| Tab list | 1 | Before the first selection |
| Tab selections | 2 | index 0 succeeded (step 8); index 1 succeeded (step 13) |
| Clicks dispatched | 1 | OK on the Session Expired modal (step 11), Web Client tab |
| Clicks timed out (not dispatched) | 2 | OK (step 4, pre-selection); banner close (step 6) |
| Coordinate clicks | 0 | |
| Arrow-key or Enter or Tab presses | 0 | |
| Typing | 0 | |
| Dialogs or lists opened | 0 | |
| Prompts answered | 1 | "Session Expired" modal, answered with OK (1 click) |
| Designer Saves | 0 | Save disabled throughout |
| Form closes | 0 | |
| Form reopens | 0 | |
| Runtime clicks | 0 | the OK in step 11 is the Mongoose modal's, not a runtime control |
| Runtime typing | 0 | |
| Navigations | 0 | Permitted navigation not used (see Findings) |
| Re-logins | 0 | |
| Untargeted snapshots (successful) | 3 | steps 3, 5, 10 (Web Client) |
| Untargeted snapshot (failed, too large) | 1 | step 14 (Designer) |
| Targeted snapshots | 1 | step 16 |
| Finds | 2 | steps 15, 17 (refs not used for clicks) |
| Screenshots (successful) | 2 | steps 9, 12 |
| Screenshots (failed) | 1 | step 7 |
| "Ref not found" errors | 0 | fresh-snapshot allowance unused |
| Timeouts at "visible, enabled and stable" | 2 | steps 4 and 6 (locators resolved; not dispatched) |
| Server-event errors | 0 | none seen |
| Console stop events | 1 | step 11 (8 to 16) and step 12 (to 17) |

Console error counts recorded after each action (tool-written header):

| Step | Action | Web Client | Designer |
| --- | --- | --- | --- |
| baseline | start | 8 errors, 2 warnings | 2 errors, 0 warnings (at step 16) |
| 3 | snapshot | 8 / 2 | - |
| 4 | click OK (timed out) | 8 / 2 (no change) | - |
| 5 | snapshot | 8 / 2 | - |
| 6 | click banner × (timed out) | 8 / 2 (no change; from step 10 read) | - |
| 7 | screenshot (timed out) | not reported | - |
| 10 | snapshot (fresh) | 8 / 2 | - |
| 11 | click OK (dispatched) | **16 / 3 (rise)** | - |
| 12 | screenshot | **17 / 3 (rise)** | - |
| 14 | snapshot (Designer, too large) | - | not reported |
| 16 | snapshot (Designer targeted) | - | 2 / 0 |

Stop rule applied after step 12: no further click, no Save, no close, no ellipsis.

## Worker-written file inventory (T1)

Written by the worker (in the repository):

- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (this record, created)
- `evidence/EXP-125/t1-01-webclient-session-expired-modal.png` (screenshot, step 9)
- `evidence/EXP-125/t1-02-webclient-after-ok-console-rise.png` (screenshot, step 12)

Written by the browser tool (not by the worker's own edits): snapshot and console files under `evidence/playwright/` (for example the page snapshot file named in the step 11 output, and console log entries for the console header lines). The worker did not read or Grep these files. The oversized Designer snapshot (step 14) was saved by the tool in the Claude tool-results folder outside the repository; it was not read.

Not written by the worker: no other experiment record, no AGENTS.md, no tutorial source, no recipe, no asset, no brief.

## Decisive evidence

- **`evidence/EXP-125/t1-01-webclient-session-expired-modal.png`** (Web Client tab, after tab selection, before the OK click). Shows: the portal banner at top; the runtime FX_CustomerPortal Form tab; the "Customer Portal" runtime with menu buttons Sign In, Home and Cart and the sign-in page behind a greyed overlay; the "Session Expired" dialog reading "Your session has expired." with an OK button. Supports: AC-1 session expiry observed in the Web Client; the runtime Form was open. Does **not** prove: the menu buttons' enabled or disabled state (they are under the overlay, so the pale colour is not a valid observation); the Customer ID value; the unsaved-change state of the runtime Form; the server-side cause of the expiry.
- **`evidence/EXP-125/t1-02-webclient-after-ok-console-rise.png`** (Web Client after the OK click). Shows: the modal gone; the runtime Form area blank (no FX_CustomerPortal Form, no sign-in page, no menu); the Explorer pane and toolbar; the banner still at top. Supports: the session-expired modal was dismissed by one OK click, and the Form region is no longer showing the runtime Form. Does **not** prove: whether the session is signed out on the server (no "Logout Successful" or sign-in card read in this run); the cause of the console rise (the console log was not read).
- **Designer (no screenshot taken in T1; targeted snapshot step 16 and find step 17):** the FX_CustomerPortal Form tab selected; Save disabled; Regenerate Form disabled; console 2 / 0. Supports: AC-1 Designer baseline recorded and Save disabled. Does **not** prove: User scope (the Identify Your Editing Scope readback was not performed); FX_CustomerPortal clean in a full sense (only the Save state was read); no dialog open (targeted find only, not a full snapshot).

## Acceptance checks (T1 state)

- **AC-1:** Partly met. Sources reviewed (yes). Session usable: **no** (Session Expired observed; the operator must sign in). User scope: **not verified** (not read). No runtime Form dirty: **not established** (the runtime Form was open; its dirty state cannot be read from the modal state). FX_CustomerPortal open and clean in the Designer: open yes; Save disabled yes; clean not otherwise verified. Handlers and variables as left by EXP-124: **not read**. Three menu buttons' Primary and Enabled When: **not read**. Each tab's baseline console count recorded: **yes** (Web Client 8/2 before the OK click; Designer 2/0).
- **AC-2 to AC-5:** not started (T2 to T9 not reached). AC-5 (no change made) holds for T1: no Designer click, no Save, no Enabled When change, no runtime action beyond the modal's OK.

## Findings (observed only)

1. **Session expiry during the Web Client runtime.** A Mongoose "Session Expired" modal ("Your session has expired.", OK) was shown over the open runtime FX_CustomerPortal in the Web Client tab at the start of T1. The worker did not sign in, navigate or type a credential; the modal was answered with its OK.
2. **Background-tab timeouts.** Before the Web Client tab was selected (its selection had been listed but not done), the modal's OK click, the banner's × click and a screenshot each timed out at "visible, enabled and stable" (or "fonts loaded" for the screenshot) while the locator resolved. After `browser_tabs` select on that tab (and a fresh snapshot), the same screenshot and the OK click succeeded. Observed: selecting the tab before acting resolved the timeouts. This matches the brief's background-tab rule.
3. **Console rise on the expiry OK.** The Web Client console rose from 8 to 16 errors (and from 2 to 3 warnings) in the output of the OK click, and to 17 errors after the next read-only screenshot. Unexplained in T1; the operator diagnoses it from the tool-written console log.
4. **Runtime Form cleared by the OK.** After the OK, the runtime FX_CustomerPortal Form area was blank (no Form, no sign-in page); the Explorer remained. No sign-in card, "Logout Successful" or server-event error was read in T1.
5. **Oversized Designer snapshot.** The untargeted Designer snapshot returned 70,615 characters (1,658 lines) and was saved by the tool; a targeted snapshot of the Form tablist returned the page header including the console count. Observed: the untargeted Designer snapshot is too large for inline use; targeted reads are needed.
6. **Portal banner not dismissed.** The DistributionIFSContactUs portal banner is still visible at the top of the Web Client; its close click timed out (not dispatched), so no dismissal was recorded.

## Documentation changes

- Created `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (this file).

## Next (not performed)

- Operator: sign in manually (EXP-107) in the Web Client; the operator decides whether to reload the Designer (the Designer tab was not changed).
- Operator: diagnose the console rise from the tool-written console log (8 to 17 errors in the Web Client tab; Designer unchanged at 2).
- Then a fresh T1 gate, read-only, from the start: list tabs, identify the runtime state, read the Designer's User scope, FX_CustomerPortal clean state, Event Handlers, Variables and the three menu buttons' Primary and Enabled When rows, with the screenshots listed in the brief. No change until the gate passes.

## Cleanup inventory

None. No change was made to FX_CustomerPortal, to any other Form, to any global object, or to any runtime record. The Designer is unchanged (Save disabled; FX_CustomerPortal open).

## Final state (end of T1)

- Web Client (tab 0): session-expired modal dismissed by one OK click; the runtime FX_CustomerPortal Form area is blank; the portal banner visible at top; console 17 errors / 3 warnings; no dialog or list open.
- Designer (tab 1, selected): FX_CustomerPortal Form tab selected; Save disabled; Regenerate Form disabled; console 2 errors / 0 warnings; no dialog found by targeted find (not a full check).
- No menu, dialog, list or unsaved change opened by the worker. The banner remains visible (not dismissed).

## T1 re-gate attempt 2 (2026-10-20, after operator recovery; run R-20261020-205105-2ynw, cycle 2, task label T2 with bounded instruction "T1 read-only gate")

Scope of this attempt: the T1 gate only, read-only, under the operator's resumed-run ruling. The task label in the header said T2, but the bounded instruction limited the work to T1 and said not to start T2; T2 was not started. The attempt's prior entries above are kept unchanged.

### Sources reread
- `AGENTS.md` (full, 240 lines) and this record's T1 section (reread at the start of the attempt).

### Gate observations
- **Tabs (list before any selection):** tab 0 Web Client (`Mongoose`); tab 1 Designer (`...mode... MGForm=FX_CustomerPortal`).
- **Web Client (tab 0), selected, snapshot 5:** no "Session Expired" modal, no sign-in page, no "Logout Successful" card. The runtime **FX_CustomerPortal Form is open** (tab heading `FX_CustomerPortal`; "Customer Portal" heading; left menu buttons Sign In, Home and Cart; sign-in page with "Sign In" heading, "Customer ID" label, an empty textbox and a Sign In button). The Form toolbar's Save reads `[disabled]`. This suggests the runtime Form is clean; it is not a full dirty-state check.
- **Web Client console baseline (this attempt):** 18 errors, 2 warnings. (The previous attempt ended at 17 errors / 3 warnings; the warning count differs and is not explained.)
- **Portal banner:** the DistributionIFSContactUs strip is still visible at the top. Not dismissed (its close was not clicked in this attempt).
- **Designer (tab 1), selected:** the FX_CustomerPortal Form tab is selected (targeted snapshot of the tablist). Console baseline **2 errors, 0 warnings**. Toolbar `Save [disabled]`, `Regenerate Form [disabled]`. A find for Save, OK, Cancel, Yes, No and dialog returned no dialog element.
- **Not read (stop rule):** the Designer's User-scope readback, Details > Event Handlers, Details > Variables, ButtonSignIn/ButtonHome/ButtonCart Events > Primary and Behavior > Enabled When, and the required screenshots of Event Handlers and ButtonSignIn Behavior. The bounded instruction says to stop when a runtime Form is open, and the gate was stopped there.

### Stop
The bounded instruction says: if any runtime Form is open, record its identity and whether it is dirty, then stop without modifying or closing it. The runtime FX_CustomerPortal Form is open in the Web Client (not dirty as far as the toolbar shows; not closed; no click, no typing). The gate therefore stops here. The Designer was read only to record its baseline (console 2 / 0; Save disabled; no dialog found).

### Actions performed in this attempt (exact)
1. Read `AGENTS.md` (file read; no browser action).
2. Read this record (file read).
3. `browser_tabs` list (before any selection).
4. `browser_tabs` select index 0 (Web Client): succeeded.
5. `browser_snapshot` untargeted, tab 0: no modal; runtime Form open; console 18 / 2.
6. `browser_take_screenshot` `evidence/EXP-125/t1r-01-webclient-runtime-form-open.png`: succeeded (read back; see below).
7. `browser_tabs` select index 1 (Designer): succeeded.
8. `browser_find` text `FX_CustomerPortal` (read-only): Form tab selected; refs not used for clicks.
9. `browser_snapshot` targeted at the Designer tablist (ref e244 from step 8): console 2 / 0.
10. `browser_find` regex for Save, OK, Cancel, Yes, No and dialog (read-only): Save disabled; no dialog.

Not performed in this attempt: no click on any control (no OK, banner ×, Session Expired, runtime or Designer control); no typing; no coordinate click; no arrow, Enter or Tab press; no list, dialog or builder opened; no Designer Save; no Form close or reopen; no runtime interaction; no navigation; no re-login; no untargeted Designer snapshot (the earlier one was too large); no Designer Details, Properties or ellipsis.

### Cumulative browser action audit (both T1 attempts, exact)
| Category | Attempt 1 | Attempt 2 | Total |
| --- | --- | --- | --- |
| Tab lists | 1 | 1 | 2 |
| Tab selections (succeeded) | 2 | 2 | 4 |
| Clicks dispatched | 1 (modal OK) | 0 | 1 |
| Clicks timed out, not dispatched | 2 | 0 | 2 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 |
| Lists or dialogs opened | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 0 | 0 | 0 |
| Form closes or reopens | 0 | 0 | 0 |
| Runtime clicks or typing | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Untargeted snapshots (succeeded / failed) | 3 / 1 | 1 / 0 | 4 / 1 |
| Targeted snapshots | 1 | 1 | 2 |
| Finds | 2 | 2 | 4 |
| Screenshots (succeeded / failed) | 2 / 1 | 1 / 0 | 3 / 1 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

Console counts recorded (tool header): Web Client 8/2 before attempt 1's OK; 16/3 then 17/3 after it; 18/2 at the start of attempt 2. Designer 2/0 at both attempts.

### Worker-written file inventory (this attempt)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (this record: appended section only; earlier entries unchanged).
- `evidence/EXP-125/t1r-01-webclient-runtime-form-open.png` (screenshot, step 6).
- Earlier attempt files are unchanged: `evidence/EXP-125/t1-01-webclient-session-expired-modal.png`, `evidence/EXP-125/t1-02-webclient-after-ok-console-rise.png`.
- Browser-tool files under `evidence/playwright/` (not read by the worker).

### Decisive evidence (this attempt)
- **`evidence/EXP-125/t1r-01-webclient-runtime-form-open.png`** (Web Client tab, selected, read-only). Shows: the runtime FX_CustomerPortal Form in the Web Client, with the title "FX_CustomerPortal" and the "Customer Portal" heading; left menu Sign In, Home and Cart (drawn in the normal teal, not greyed); the sign-in page with "Sign In", the "Customer ID" label, an empty textbox and the Sign In button; the portal banner at top; the Form toolbar Save icon greyed. Supports: the runtime Form was open with no modal; the sign-in page is the visible region. Does **not** prove: the Form's dirty state (a toolbar read only); the menu's enabled state (drawn normal; the Enabled When is not yet set, so a plain colour is not a state read); the Customer ID value (empty textbox in the picture only); server-side session state.
- **Designer (steps 8-10, targeted reads):** FX_CustomerPortal Form tab selected; console 2 / 0; Save disabled; no dialog element. Supports: the Designer baseline and Save state. Does **not** prove: User scope; FX_CustomerPortal clean in full; the Form's handlers, variables or menu properties.

### AC status after this attempt
- **AC-1: not fully supported.** Partly supported: the Designer has FX_CustomerPortal selected with Save disabled and no dialog found; both tab baselines recorded (Web Client 18/2; Designer 2/0); the Web Client has no modal and shows the runtime Form open. Not supported: User scope (not read), the Designer handlers and variables, the three menu buttons' Primary and Enabled When rows, and a full clean check of the runtime Form.
- **AC-2 to AC-5:** not started.

### Blockers and next steps (not performed)
- Blocker for T1: the runtime FX_CustomerPortal Form is open in the Web Client, and the bounded instruction says to stop there. The operator decides whether to close it (the close is an operator action, not this worker's) and whether to resume the T1 gate.
- Operator diagnosis still open: the Web Client console rise in attempt 1 (8 to 17) and the drop of warnings to 2 at the start of attempt 2 (the count changed without an action by the worker).
- Next after the operator's decision: a fresh T1 gate, read-only, to read the Designer's User scope, Event Handlers, Variables and the three menu buttons' Primary and Enabled When rows, with the Event Handlers and ButtonSignIn Behavior screenshots.

## T1 re-gate attempt 3 (2026-10-20; run R-20261020-205105-2ynw, cycle 4; header task label T3, bounded instruction "EXP-125 T1 read-only gate under the latest operator ruling", T2 not started)

Scope: the T1 gate only, read-only. Earlier attempts above are unchanged.

### Sources reread
- `AGENTS.md` (full, 240 lines) and this record's T1 sections (reread at the start of the attempt).

### Gate observations
- **Tabs (listed before any selection):** tab 0 Web Client (`Mongoose`); tab 1 Designer (`...designer/default.aspx`; the `MGForm=FX_CustomerPortal` query is no longer in its URL).
- **Web Client (tab 0), selected, snapshot (untargeted):** no "Session Expired" modal, no sign-in page, no "Logout Successful" card. **No runtime Form is open**: no FX_CustomerPortal tab, no "Customer Portal" page, no menu buttons, no sign-in page. The Form toolbar's Save is `[disabled]` and "Help Current Form" is `[disabled]`. The portal banner is not in this snapshot (it was not dismissed by the worker in this attempt). This is consistent with the operator's manual close of the runtime Form, as the bounded instruction expected. Console baseline **18 errors, 2 warnings** (unchanged since the start of attempt 2).
- **Designer (tab 1), selected:** the Form tablist is **empty**. A find for `FX_CustomerPortal` returned **no matches**, so FX_CustomerPortal is **not open** in the Designer. A targeted snapshot of the tablist (ref e240) returned an empty tablist. Console baseline **2 errors, 0 warnings**. Screenshot `t1r2-01-designer-no-form-open.png`: empty canvas, Toolbox and Properties panes with no Form, the Save icon greyed, status bar `ScopeType: User` (the scope name is not recorded here).
- **Not established:** that FX_CustomerPortal is clean (it is not open); the Designer's Event Handlers, Variables, and the three menu buttons' Primary and Enabled When rows; the Event Handlers and ButtonSignIn Behavior screenshots (not reachable).

### Stop
The bounded instruction says to confirm FX_CustomerPortal is open, and to stop without correction when a required value differs. FX_CustomerPortal is not open in the Designer, so the gate stops here. **Not done (decision for the operator):** the T1 gate's recent-forms route (open FX_CustomerPortal once through the Form menu recent-forms entry, never Select Form OK). That route would be the next step if the operator authorizes it; the worker did not open the Form, because the latest ruling forbids correction. No menu was opened, no list, no dialog, no Save.

### Actions performed in this attempt (exact)
1. Read `AGENTS.md` (file read; no browser action).
2. Read this record, from line 170 (file read).
3. `browser_tabs` list (before any selection).
4. `browser_tabs` select index 0 (Web Client): succeeded.
5. `browser_snapshot` untargeted, tab 0: no modal; no runtime Form; console 18 / 2.
6. `browser_tabs` select index 1 (Designer): succeeded.
7. `browser_find` text `tablist` (read-only, Designer): the Form tablist shown as empty.
8. `browser_find` text `FX_CustomerPortal` (read-only): no matches.
9. `browser_snapshot` targeted at ref e240 (Designer tablist, from step 7): console 2 / 0; empty tablist.
10. `browser_take_screenshot` `evidence/EXP-125/t1r2-01-designer-no-form-open.png`: succeeded (read back). The output of this call did not report a console count; the last reading was 2 / 0 at step 9.

Not performed in this attempt: no click on any control; no typing; no coordinate click; no arrow, Enter or Tab press; no list, dialog or builder opened; no Designer Save; no Form open, close or reopen; no runtime interaction; no navigation; no re-login; no Designer Details, Properties or ellipsis.

### Cumulative browser action audit (all T1 attempts, exact)
| Category | Attempt 1 | Attempt 2 | Attempt 3 | Total |
| --- | --- | --- | --- | --- |
| Tab lists | 1 | 1 | 1 | 3 |
| Tab selections (succeeded) | 2 | 2 | 2 | 6 |
| Clicks dispatched | 1 (modal OK) | 0 | 0 | 1 |
| Clicks timed out, not dispatched | 2 | 0 | 0 | 2 |
| Coordinate clicks | 0 | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 | 0 |
| Lists or dialogs opened | 0 | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 0 | 1 |
| Designer Saves | 0 | 0 | 0 | 0 |
| Form opens, closes or reopens | 0 | 0 | 0 | 0 |
| Runtime clicks or typing | 0 | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Untargeted snapshots (succeeded / failed) | 3 / 1 | 1 / 0 | 1 / 0 | 5 / 1 |
| Targeted snapshots | 1 | 1 | 1 | 3 |
| Finds | 2 | 2 | 2 | 6 |
| Screenshots (succeeded / failed) | 2 / 1 | 1 / 0 | 1 / 0 | 4 / 1 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 0 | 1 |

Console counts recorded (tool header): Web Client 8/2 before attempt 1's OK; 16/3 then 17/3 after it; 18/2 at the start of attempts 2 and 3. Designer 2/0 at attempts 1, 2 and 3 (attempt 3 at step 9; step 10 reported no count).

### Worker-written file inventory (this attempt)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended section only; earlier entries unchanged).
- `evidence/EXP-125/t1r2-01-designer-no-form-open.png` (screenshot, step 10).
- Earlier files unchanged: `evidence/EXP-125/t1-01-webclient-session-expired-modal.png`, `evidence/EXP-125/t1-02-webclient-after-ok-console-rise.png`, `evidence/EXP-125/t1r-01-webclient-runtime-form-open.png`.
- Browser-tool files under `evidence/playwright/` (not read by the worker).

### Decisive evidence (this attempt)
- **`evidence/EXP-125/t1r2-01-designer-no-form-open.png`** (Designer tab, selected, read-only). Shows: an empty canvas with the Toolbox and Properties panes but no Form open and no Form tab; the toolbar Save icon greyed; the status bar `ScopeType: User`. Supports: FX_CustomerPortal is not open in the Designer, and the editing scope shown is User. Does **not** prove: which Form the Designer last had open, whether a Form is clean, the console count at this moment (the tool did not report one), or the Form's handlers, variables or menu properties.
- **Web Client snapshot (step 5, untargeted):** supports that no runtime Form is open, no modal, no sign-in page and no logout card. Does **not** prove the server-side session state.
- **Designer targeted reads (steps 7-9):** support the empty Form tablist and the FX_CustomerPortal search with no matches. Do **not** prove the absence of FX_CustomerPortal on the server or in other tabs.

### AC status after this attempt
- **AC-1: not supported.** Session: the Web Client shows no expiry state, which is partial support for "session usable" (not a server-side check). User scope: shown in the Designer status bar (`ScopeType: User`) with no Form open; not verified for a Form. No runtime Form dirty: supported, because no runtime Form is open. FX_CustomerPortal open and clean in the Designer: **not met**, since it is not open. Handlers, variables and the three menu buttons' Primary and Enabled When: **not read**. Each tab's baseline console count: recorded (Web Client 18/2; Designer 2/0).
- **AC-2 to AC-5:** not started.

### Blockers and next steps (not performed)
- Blocker for T1: FX_CustomerPortal is not open in the Designer. The operator decides whether the worker may open it once through the Form menu recent-forms entry (the original T1 route, never Select Form OK). After that decision: a fresh T1 gate, read-only, to read the Event Handlers, Variables, and the three menu buttons' Primary and Enabled When rows, with the two required screenshots.
- Operator diagnosis still open: the Web Client console rise in attempt 1 (8 to 17 errors) and the warnings count (3 in attempt 1, 2 from attempt 2 onward).
- The portal banner is no longer in the Web Client snapshot. The worker did not dismiss it in this attempt.

## T1 Designer gate attempt 4 (2026-10-20; run R-20261020-205105-2ynw, cycle 5, header task label T4; bounded instruction "complete ONLY the remaining T1 read-only Designer gate", T2 not started)

Scope: the T1 Designer gate only, read-only, after the operator's ruling that FX_CustomerPortal may be opened once through the Form menu recent-forms entry (never Select Form OK). The Web Client was not selected in this attempt; its state rests on attempt 3 (no runtime Form, no modal or sign-in card, 18 errors / 2 warnings).

### Sources reread
- `AGENTS.md`: lines 124-153 only (partial reread in this attempt; the full file was read in earlier attempts of this run). Disclosed as a deviation from the full reread the brief asked for.
- This record's attempt 3 section (line 248 on).

### Gate observations
- **Tabs (listed before any selection):** tab 0 Web Client; tab 1 Designer (`...designer/default.aspx`, no `MGForm` query).
- **Designer baseline (before opening):** tab 1 selected; console **2 errors, 0 warnings**; Form tablist empty; Save `[disabled]`; find `FX_CustomerPortal`: no match in the tab strip.
- **Open (one recent-forms route):** Form menu opened (click), menu contained `FX_CustomerPortal` among recent forms; targeted snapshot of the menu; the exact `FX_CustomerPortal` menu item was clicked once. Console 2 / 0 after the open. URL now `...default.aspx?MGForm=FX_CustomerPortal`. The menu closed. The tab strip shows the `FX_CustomerPortal` Form tab selected (heading `FX_CustomerPortal`).
- **Designer state after open (screenshot `t1r3-01`, read back):** FX_CustomerPortal Form on the design canvas; toolbar Save greyed; no dialog; status bar `[ ScopeType: User / ScopeName: ... ]`. The Form Properties panel reads Name `FX_CustomerPortal`, Form Type Flex, and the scope line `ScopeType: User`. (The scope name is not copied into the record.)
- **Details > Event Handlers (screenshot `t1r3-02`; accessibility readback of all five groups):**
  - `FX_CartBtn`: seq 0, Set Values, Disabled false, `SETVARVALUES(FX_Page=3)`.
  - `FX_HomeBtn`: seq 0, Set Values, Disabled false, `SETVARVALUES(FX_Page=2)`.
  - `FX_SignInBtn`: seq 0, Collection Refresh, Disabled false, parameter `object2`; seq 1, Set Values, Disabled false, `SETVARVALUES(FX_Page=2)`.
  - `FX_SignInBtn2`: seq 0, Set Values, Disabled false, `SETVARVALUES(FX_Page=1)`.
  - `StdFormPredisplay`: seq 0, Set Values, Disabled false, `SETVARVALUES(FX_Page=1)`.
  - All match the expected list. The screenshot shows only the first two groups (FX_CartBtn, FX_HomeBtn) because the grid scrolls; the other three groups are read from the accessibility readback only.
- **Details > Variables (accessibility readback; no screenshot):** Form - Persistent: `fds_SC2` (not an FX_ name; not inspected further). **Form - Temporary: `FX_Count`, `FX_CustomerID`, `FX_Page`** (as expected). Global - Persistent and Global - Temporary groups listed (non-FX_ names; not inspected).
- **Components (Details, targeted tree snapshot; expanded view only):** `StaticCustID` Static, binding `variables.FX_CustomerID`; `EditCustID` Edit, binding `variables.FX_CustomerID`; `EditCount` Edit, binding `variables.FX_Count(INITIALVALUE(1))`; `ButtonSignIn` PushButton, Event to generate `FX_SignInBtn2`; `ButtonHome` PushButton, `FX_HomeBtn`; `ButtonCart` PushButton, `FX_CartBtn`; `ButtonSignIn2` PushButton, `FX_SignInBtn`; `GridItems` Grid, `objects2`; `GridOrders` Grid, `objects`. The Enabled When column cells of the three menu rows read empty. An unexplained tree row `Region00: UNKNOWN0` appears at the end of the tree (not inspected).
- **ButtonSignIn (Type cell e1485; Properties header read `ButtonSignIn (Button)`):**
  - Events > Primary: `FX_SignInBtn2` (expected).
  - Behavior > Enabled When: value cell empty (expected blank). Its ellipsis was not clicked.
  - Screenshot `t1r3-03` (read back): header `ButtonSignIn (Button)`; Behavior group expanded; Enabled When row with an empty value and its ellipsis button visible; Events > Primary `FX_SignInBtn2`; Components grid shows the menu rows with FX_SignInBtn2, FX_HomeBtn and FX_CartBtn in Event to generate and the Enabled When column empty.
- **ButtonHome (Type cell e1510; header read `ButtonHome (Button)`):** Events > Primary `FX_HomeBtn` (expected); Behavior > Enabled When value cell empty (expected blank). Ellipsis not clicked.
- **ButtonCart (Type cell e1535; header read `ButtonCart (Button)`):** Events > Primary `FX_CartBtn` (expected); Behavior > Enabled When value cell empty (expected blank). Ellipsis not clicked.
- **Save:** `Save [disabled]`; `Regenerate Form [disabled]`; a find for Save, OK, Cancel, Yes, No, dialog and "Identify Your Editing Scope" found no dialog; the Identify Your Editing Scope dialog did not appear.
- **Console (Designer, tool header):** 2 errors / 0 warnings after every action in this attempt (the baseline and each of the 14 dispatched clicks and the 3 screenshots' calls); no rise, so no stop.

### Stop
The bounded instruction limits this attempt to the T1 Designer gate and says to stop at the T1 boundary. The gate is complete. Nothing was changed: no property edit, no ellipsis or list, no Save, no Form close or reopen, no runtime interaction, no Web Client action. FX_CustomerPortal is open in the Designer and clean. The Details panel is expanded and the Components row ButtonCart is selected (view state only). No menu, list or dialog is open.

### Actions performed in this attempt (exact, in order)
1. Read `AGENTS.md` lines 124-153 (partial; file read, no browser action).
2. Read this record from line 248 (file read).
3. `browser_tabs` list (before any selection).
4. `browser_tabs` select index 1 (Designer): succeeded.
5. `browser_snapshot` target `e1` (stale): **ref not found** (error 1).
6. `browser_snapshot` untargeted (fresh, the one allowed for error 1): succeeded; console 2 / 0.
7. Click Form menu `e3`: dispatched; console 2 / 0.
8. `browser_find` `FX_CustomerPortal`: menu item found (read-only).
9. `browser_snapshot` targeted `e285` (Form menu): succeeded.
10. Click recent-forms menu item `e296` (FX_CustomerPortal): dispatched; console 2 / 0.
11. `browser_find` `FX_CustomerPortal`: tab found (read-only).
12. `browser_snapshot` targeted `e240` (Form tablist): succeeded; console 2 / 0.
13. Screenshot `t1r3-01-designer-form-opened-recent.png`: succeeded (read back).
14. `browser_find` `Details`: found the Details panel (read-only).
15. `browser_snapshot` targeted `e449`: succeeded but returned only a separator node.
16. `browser_snapshot` targeted `e332`: **ref not found** (error 2).
17. `browser_snapshot` untargeted (fresh, allowance for error 2): succeeded; console 2 / 0.
18. Click Details Expand Panel `e451`: dispatched; console 2 / 0.
19. `browser_find` `Event Handlers` (read-only).
20. `browser_snapshot` targeted `e558` (Details tablist): succeeded.
21. Click Event Handlers tab `e563`: dispatched; console 2 / 0.
22. `browser_find` `StdFormPredisplay` (read-only).
23. `browser_snapshot` targeted `e630` (Event Handlers panel): succeeded (groups collapsed).
24. Click Expand (grid) `e641`: dispatched; console 2 / 0.
25. `browser_snapshot` targeted `e630`: succeeded (all rows read).
26. Screenshot `t1r3-02-event-handlers.png`: succeeded (read back).
27. `browser_snapshot` targeted `e558`: **ref not found** (error 3).
28. `browser_snapshot` untargeted (fresh, allowance for error 3): succeeded; console 2 / 0.
29. Click Variables tab `e565`: dispatched; console 2 / 0.
30. `browser_find` `FX_CustomerID`: no match (the panel was collapsed).
31. `browser_find` `Variables`: panel found (read-only).
32. `browser_snapshot` targeted `e818` (Variables panel): succeeded (groups collapsed).
33. Click Expand (grid) `e829`: dispatched; console 2 / 0.
34. `browser_snapshot` targeted `e818`: succeeded (Form - Temporary read).
35. `browser_snapshot` targeted `e558`: **ref not found** (error 4).
36. `browser_snapshot` untargeted (fresh, allowance for error 4): succeeded; console 2 / 0.
37. Click Components tab `e561`: dispatched; console 2 / 0.
38. `browser_find` `ButtonSignIn`: no match (tree collapsed).
39. `browser_find` `FlexLayoutMain`: no match.
40. `browser_find` `Components`: panel found (read-only).
41. `browser_snapshot` targeted `e1083` (Components panel): succeeded (only Pane (00) collapsed).
42. Click Expand (grid) `e1092`: dispatched; console 2 / 0.
43. `browser_snapshot` targeted `e1150` (components tree): succeeded (rows read).
44. Click ButtonSignIn Type cell `e1485`: dispatched; console 2 / 0.
45. `browser_find` `ButtonSignIn`: header found (read-only).
46. `browser_snapshot` targeted `e2484` (Properties panel): succeeded.
47. Double-click Behavior label `e2590`: dispatched (view expansion); console 2 / 0.
48. `browser_snapshot` targeted `e2484`: succeeded (Behavior rows; Enabled When blank).
49. Double-click Events label `e2608`: dispatched (view expansion); console 2 / 0.
50. `browser_snapshot` targeted `e2484`: succeeded (Primary FX_SignInBtn2).
51. Screenshot `t1r3-03-buttonsignin-behavior-enabledwhen.png`: succeeded (read back).
52. Click ButtonHome Type cell `e1510`: **ref not found** (error 5; not dispatched).
53. `browser_snapshot` untargeted (fresh, allowance for error 5): **too large** (58,769 characters); saved by the tool to the Claude tool-results folder; not read; not searched; no ref taken from it.
54. `browser_find` `ButtonHome` (read-only).
55. `browser_snapshot` targeted `e1150` (components tree): succeeded (current refs; e1510 present).
56. Click ButtonHome Type cell `e1510`: dispatched; console 2 / 0.
57. `browser_find` `ButtonHome (Button)`: header found (read-only).
58. `browser_snapshot` targeted `e2484`: succeeded (Primary FX_HomeBtn; Enabled When blank).
59. `browser_find` `ButtonCart`: found (read-only).
60. Click ButtonCart Type cell `e1535` (from step 59's tree): **ref not found** (error 6; not dispatched). Recovery deviation: a targeted snapshot and a find were used, not one untargeted snapshot.
61. `browser_find` `ButtonCart` (tree).
62. `browser_snapshot` targeted `e1530` (ButtonCart row table): succeeded (current ref e1535).
63. Click ButtonCart Type cell `e1535`: dispatched; console 2 / 0.
64. `browser_find` `ButtonCart (Button)`: header found (read-only).
65. `browser_snapshot` targeted `e2484`: succeeded (Primary FX_CartBtn; Enabled When blank).
66. `browser_find` regex Save, OK, Cancel, Yes, No, dialog, Identify Your Editing Scope (read-only): Save disabled; no dialog.

Note: step 60 was a click on a stale ref. Step 61 is a find used as a recovery read; no click depended on a find ref (the click at step 63 used the ref from snapshot 62).

### Browser action audit, this attempt (exact)
| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections (succeeded) | 1 (tab 1 only; the Web Client was not selected) |
| Clicks dispatched | 14 (of which 2 were double-clicks on group labels: Behavior, Events; the others were single clicks) |
| Clicks not dispatched (ref not found) | 2 (steps 52 and 60) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 0 |
| Lists opened | 0 |
| Dialogs opened | 0 |
| Ellipsis or builder opened | 0 |
| Prompts answered | 0 |
| Designer Saves | 0 |
| Form opens (recent-forms route) | 1 |
| Form closes or reopens | 0 |
| Runtime clicks or typing | 0 |
| Navigations | 0 |
| Re-logins | 0 |
| Untargeted snapshots (succeeded) | 4 (steps 6, 17, 28, 36) |
| Untargeted snapshot (too large, not returned inline) | 1 (step 53) |
| Targeted snapshots (succeeded) | 17 |
| Targeted snapshots (ref not found) | 4 (steps 5, 16, 27, 35) |
| Finds | 17 (steps 8, 11, 14, 19, 22, 30, 31, 38, 39, 40, 45, 54, 57, 59, 61, 64, 66) |
| Screenshots (succeeded) | 3 (t1r3-01, t1r3-02, t1r3-03) |
| Screenshots (failed) | 0 |
| "Ref not found" errors | 6 (4 on snapshots, 2 on clicks) |
| Timeouts at "visible, enabled and stable" | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |
| Console baseline and after-action readings | Designer 2 / 0 throughout |

### Cumulative browser action audit (attempts 1 to 4, exact)
| Category | Attempt 1 | Attempt 2 | Attempt 3 | Attempt 4 | Total |
| --- | --- | --- | --- | --- | --- |
| Tab lists | 1 | 1 | 1 | 1 | 4 |
| Tab selections (succeeded) | 2 | 2 | 2 | 1 | 7 |
| Clicks dispatched | 1 | 0 | 0 | 14 | 15 |
| Clicks not dispatched (timeout or ref not found) | 2 (timeout) | 0 | 0 | 2 (ref not found) | 4 |
| Coordinate clicks | 0 | 0 | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 | 0 | 0 |
| Lists opened | 0 | 0 | 0 | 0 | 0 |
| Dialogs opened | 0 | 0 | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 0 | 0 | 1 |
| Designer Saves | 0 | 0 | 0 | 0 | 0 |
| Form opens | 0 | 0 | 0 | 1 | 1 |
| Form closes or reopens | 0 | 0 | 0 | 0 | 0 |
| Runtime clicks or typing | 0 | 0 | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| Untargeted snapshots (succeeded / too large or failed) | 3 / 1 | 1 / 0 | 1 / 0 | 4 / 1 | 9 / 2 |
| Targeted snapshots (succeeded / ref not found) | 1 / 0 | 1 / 0 | 1 / 0 | 17 / 4 | 20 / 4 |
| Finds | 2 | 2 | 2 | 17 | 23 |
| Screenshots (succeeded / failed) | 2 / 1 | 1 / 0 | 1 / 0 | 3 / 0 | 7 / 1 |
| "Ref not found" errors | 0 | 0 | 0 | 6 | 6 |
| Server-event errors | 0 | 0 | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 0 | 0 | 1 |

Note on attempt 1 "clicks not dispatched": the two timeouts are the modal OK (before the tab selection) and the banner × close; both were recorded as not dispatched.

### Console counts (tool header)
- Web Client: 8 / 2 before attempt 1's OK; 16 / 3 and 17 / 3 after it (attempt 1); 18 / 2 at the start of attempts 2 and 3; not read in attempt 4 (not selected).
- Designer: 2 / 0 at attempts 1, 2, 3 and 4 (every read in attempt 4, after every action).

### Worker-written file inventory (this attempt)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this section only; earlier entries unchanged).
- `evidence/EXP-125/t1r3-01-designer-form-opened-recent.png` (step 13).
- `evidence/EXP-125/t1r3-02-event-handlers.png` (step 26).
- `evidence/EXP-125/t1r3-03-buttonsignin-behavior-enabledwhen.png` (step 51).
- Earlier files unchanged: `t1-01-webclient-session-expired-modal.png`, `t1-02-webclient-after-ok-console-rise.png`, `t1r-01-webclient-runtime-form-open.png`, `t1r2-01-designer-no-form-open.png`.
- Browser-tool files under `evidence/playwright/` and the oversized snapshot in the Claude tool-results folder (both written by the tool; neither read or searched by the worker).

### Decisive evidence (this attempt)
- **`evidence/EXP-125/t1r3-01-designer-form-opened-recent.png`** (Designer, after the recent-forms open). Shows: FX_CustomerPortal on the design canvas with its tab; toolbar Save greyed; no dialog; the Form Properties panel; status bar `ScopeType: User`. Supports: FX_CustomerPortal is open in the Designer, Save disabled, User scope. Does **not** prove: that the Form is clean beyond the Save state; the console count at capture time (not reported by the tool at that call); handlers or variables (not visible on this capture).
- **`evidence/EXP-125/t1r3-02-event-handlers.png`** (Details > Event Handlers). Shows: the Event Handlers tab with FX_CartBtn (SETVARVALUES(FX_Page=3)) and FX_HomeBtn (SETVARVALUES(FX_Page=2)) rows, Response Type Set Values, Disabled false. Supports: two of five handler groups by eye; the other three groups (FX_SignInBtn with its Collection Refresh and FX_Page=2 rows, FX_SignInBtn2 and StdFormPredisplay) are not visible on this capture and are supported only by the accessibility readback in steps 23-25. Does **not** prove the other three groups visually.
- **`evidence/EXP-125/t1r3-03-buttonsignin-behavior-enabledwhen.png`** (ButtonSignIn). Shows: header `ButtonSignIn (Button)`; Behavior expanded; Enabled When row with an empty value and its ellipsis button; Events > Primary `FX_SignInBtn2`; Components grid with the three menu rows, Event to generate FX_SignInBtn2 / FX_HomeBtn / FX_CartBtn, and an empty Enabled When column. Supports: AC-1 (Primary as planned; Enabled When blank for ButtonSignIn). Does **not** prove: the Enabled When for ButtonHome and ButtonCart (read from the accessibility readback only, no screenshot); that the stored value is blank beyond the display (the value cell was read, not edited).

### AC-1 status (this attempt)
- **Sources reviewed:** partly. AGENTS.md was reread only in lines 124-153 in this attempt (full in earlier attempts); the record was reread from line 248.
- **Session usable:** not re-read in this attempt; attempt 3 showed no expiry state in the Web Client (no modal, no sign-in card).
- **User scope:** supported (Designer status bar `ScopeType: User`; Form properties name the user scope; no scope dialog).
- **No runtime Form dirty:** supported for attempt 3 (no runtime Form open); not re-read in this attempt.
- **FX_CustomerPortal open and clean in the Designer:** supported (open via the recent-forms route in this attempt; Save disabled; no dialog; `t1r3-01`).
- **Handlers and variables as left by EXP-124:** supported by the accessibility readback (steps 23-25 and 32-34): the five handler groups and the Form - Temporary variables FX_Count, FX_CustomerID and FX_Page; the Components bindings (EditCustID, StaticCustID to variables.FX_CustomerID; EditCount to variables.FX_Count(INITIALVALUE(1))).
- **Three menu buttons' Primary as planned:** supported (FX_SignInBtn2, FX_HomeBtn, FX_CartBtn; steps 48, 58, 65).
- **Three menu buttons' Enabled When blank:** supported by the readback of each value cell (steps 48, 58, 65); the screenshot `t1r3-03` supports ButtonSignIn only.
- **Each tab's baseline console count recorded:** Designer 2 / 0 recorded; Web Client 18 / 2 recorded in attempt 3, not re-read in attempt 4.

### Qualifications and unverified items
- Partial AGENTS.md reread in this attempt (lines 124-153).
- Web Client not re-read in this attempt; its state comes from attempt 3.
- Enabled When for ButtonHome and ButtonCart is read from the accessibility value cells, not from a screenshot.
- The Event Handlers screenshot shows only two of five groups.
- Details > Variables shows `fds_SC2` under Form - Persistent and Global groups with non-FX_ names; these were not inspected or changed.
- The Components tree's last row `Region00: UNKNOWN0` was not inspected.
- The oversized Designer snapshot (step 53) was not read; the step 60 recovery used a targeted snapshot, not an untargeted one, which deviates from the brief's recovery rule.

### AC-1 verdict
AC-1 is **supported for the Designer and the handler, variable, Primary and Enabled When checks**, with the qualifications above. It is **not fully supported in the strict sense**, because the session and Web Client part was not re-read in this attempt, and because AGENTS.md was only partly reread here. Both gaps are small and can be closed by a short read-only Web Client check.

### Blockers and next steps (not performed)
- Operator decision: whether to close the Web Client check into the next task (read-only), or to accept AC-1 as is.
- The next permitted step after the T1 gate is the T2 task (ButtonSignIn Enabled When through the builder). It was not started here.
- Operator diagnosis still open: the Web Client console rise in attempt 1 (8 to 17 errors).
- The portal banner is still not dismissed.

## T2 (run R-20261020-205105-2ynw, cycle 7; header label T5; bounded instruction "Execute ONLY EXP-125 T2: ButtonSignIn Enabled When through the Edit Condition builder, one Save, then STOP")

Scope: ButtonSignIn's Enabled When only. ButtonHome, ButtonCart, ButtonSignIn2, handlers, variables, bindings, regions and other properties were not touched. No runtime interaction; no Form close or reopen; T3 not started.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- This record's sections (the T1 sections and attempt 4). No T2 section existed before this one.

### Prerequisites verified before any edit
- **Tabs (listed before any selection):** tab 0 Web Client; tab 1 Designer (`...default.aspx?MGForm=FX_CustomerPortal`).
- **Designer (tab 1, selected):** FX_CustomerPortal Form tab selected; scope line `ScopeType: User / ScopeName: <signed-in user>` (name not copied into the record); Save `[disabled]` before the edit; no dialog; Designer console baseline **2 errors, 0 warnings**.
- **ButtonSignIn** selected through its Components row Type cell (FlexLayoutMain > Region00: menu). Properties header read `ButtonSignIn (Button)`.
- **Events > Primary** read `FX_SignInBtn2` (expected).
- **Behavior > Enabled When** value cell read **blank** (expected).
- Prerequisites met, so the edit proceeded.

### Builder (EXP-123 route)
- Enabled When ellipsis clicked once. Two dialogs opened: the parent **"Edit Set of Conditional Actions"** (listbox with one option `NONE:, = |,`; controls New, Edit Action, Edit Condition, Edit Value, Delete, Up, Down, OK, Cancel, Help) and the child **"Edit Condition"** builder.
- Builder at open (screenshot `t2-01-buttonsignin-builder-at-open.png`, read back): title `Edit Condition`; clause list with exactly one clause `= |` (selected, blank); Left Value blank with Edit Value; Operator `=`; Right Value blank with Edit Value; And With Next Clause checkbox; OK, Cancel, Help. New was not clicked.
- **Left value:** Edit Value clicked once. The Edit Value Expression dialog's Value Type was blank. Value Type list opened and **Variable Value** clicked (the list offered Literal, Variable Value, Component Value, Property Value). The Value combobox's list was opened (it offered an exact `FX_CustomerID` entry among FX_Count, FX_CustomerID and FX_Page, plus many other variables) and **FX_CustomerID** was clicked. Value read `FX_CustomerID`. Global unchecked (not touched). OK. The builder's Left Value then read `#V(FX_CustomerID)`.
- **Operator:** the operator list opened and offered, in order: `=`, `<>`, `<=`, `>=`, `<`, `>`, `ELSE`. **`<>`** clicked. Operator read `<>`. (The tutorial's "less than or greater than" was realised as `<>`, which is the not-equal option the brief expected.)
- **Right value:** Edit Value clicked once. The Value Type was blank; the list offered Literal, Variable Value, Component Value, Property Value. **Literal** clicked. The Value combobox was left empty (no text entered). OK. The builder's Right Value read `""` (an empty literal, displayed with two quote characters).
- **Clause text shown by the builder** (before its OK; screenshot `t2-02-buttonsignin-builder-before-ok.png`, read back): clause `#V(FX_CustomerID) <> "" |`; Left Value `#V(FX_CustomerID)`; Operator `<>`; Right Value `""`; And With Next Clause unchecked.
- **Builder OK** clicked once. Builder closed. The parent dialog's single action read `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "" |, "True"`.
- **Parent OK** clicked once (the planned change). The parent dialog closed. No dialog left open (targeted find: none).

### Resulting property text and Primary
- **Enabled When** (ButtonSignIn Properties, read after the OK, before the Save, and again after the Save) reads, accessibility text: **`Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"`**. The grid cell shows it truncated as `Enabled:#C(Button...`. The brief's example text `#V(FX_CustomerID) <> ""` is the **condition part only**; the property stores it inside an action form (`Enabled:` target `#C(ButtonSignIn)` with value `"True"`). Recorded as observed; not edited as text.
- **Events > Primary** after the edit and after the Save: `FX_SignInBtn2` (unchanged).

### Designer Save (one)
- Save clicked once (targeted toolbar ref after a fresh toolbar snapshot). Response: toast `Save` / `Form [FX_CustomerPortal] and global object(s) were saved.` (screenshot `t2-04-save-response-state.png`, read back). Save state after: `[disabled]`. No prompt; no error.
- Behavior/Events before the Save: screenshot `t2-03-buttonsignin-behavior-rows-before-save.png` (read back): Save icon enabled; Enabled When row `Enabled:#C(Button...`; Primary `FX_SignInBtn2`; Components grid shows FX_SignInBtn2 / FX_HomeBtn / FX_CartBtn in Event to generate.

### Console (Designer tool header, after every action)
- Baseline 2 errors / 0 warnings; every action in this task (17 clicks, 16 finds, 18 targeted snapshots, 4 screenshots, the tab selections) read 2 / 0 after its result. No rise, so no stop. Web Client not selected in this task; its last reading was 18 / 2 (T1 attempt 3).

### Acceptance check status (AC-2 for ButtonSignIn only)
- **AC-2 (ButtonSignIn part):** built in the Edit Condition builder by editing its existing clause (no New): Left Variable Value `FX_CustomerID`, operator `<>`, right Literal empty: **met** (observed). Exact Enabled When text recorded: **met** (`Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"`; the brief's example text is the condition part of it). Primary unchanged: **met** (`FX_SignInBtn2`). One Save: **met** (one Save, toast, Save disabled after). Console recorded after every action: **met** (2 / 0 throughout). At most one correction per field: **met** (0 corrections). Screenshots (builder, row, Save): **met** (`t2-01`, `t2-02`, `t2-03`, `t2-04`).
- **AC-2 for ButtonHome (T3) and ButtonCart (T4):** not started.
- **AC-3, AC-4, AC-5:** not started (T5 onward). AC-5 for this task: no other handler, variable, binding, component, region or Form property changed; no Toolbox placement; no New; no copy or paste; no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; no Undo; no runtime action; no Form close or reopen.

### Qualifications
- The Enabled When text stored/displayed is the action form, not the bare condition. The Enabled When for ButtonSignIn is therefore `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"`. Whether the runtime honours this form the same way as the tutorial's condition is unverified; runtime is T6 to T9.
- The T2 Save is observed in the same session. It is not verified across a close and reopen (T5) and not verified at runtime.
- The operator text `<>` is the not-equal option; the tutorial's wording "less than or greater than" is the narrator's, not a displayed label.
- Recovery counts: no "Ref not found" in this task.

### Action audit, this task (T2, exact)
| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 1 Designer; succeeded) |
| Clicks dispatched | 17 (Select ButtonSignIn; Enabled When ellipsis; left Edit Value; left Value Type Open; Variable Value; Value Open; FX_CustomerID; left OK; Operator Open; `<>`; right Edit Value; right Value Type Open; Literal; right OK; builder OK; parent OK; Save) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 0 |
| Lists opened | 4 (left Value Type; left Value; operator; right Value Type) |
| List options chosen | 4 (Variable Value; FX_CustomerID; `<>`; Literal) |
| Dialogs opened | 4 (Edit Set of Conditional Actions; Edit Condition; Edit Value Expression x2) |
| Dialogs closed with OK | 4 (two Edit Value Expression; builder; parent) |
| Dialogs closed with Cancel | 0 |
| Prompts | 0 |
| Designer Saves | 1 (toast; Save disabled after) |
| Per-field entries | 3 (left Value Type; left Value; operator) plus 1 right Value Type; 0 typed entries |
| Corrections | 0 |
| Form close or reopen | 0 |
| Runtime clicks or typing | 0 |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 16 |
| Targeted snapshots (succeeded) | 18 |
| Untargeted snapshots | 0 |
| Screenshots (succeeded) | 4 (`t2-01`, `t2-02`, `t2-03`, `t2-04`) |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |

Cumulative counts across the whole run, attempts 1 to 4 plus this T2 (exact):
| Category | Attempts 1 to 4 (T1) | T2 | Total |
| --- | --- | --- | --- |
| Tab lists | 4 | 1 | 5 |
| Tab selections | 7 | 1 | 8 |
| Clicks dispatched | 15 | 17 | 32 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 |
| Lists opened | 0 | 4 | 4 |
| Dialogs opened | 0 | 4 | 4 |
| Dialogs closed with OK | 0 | 4 | 4 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 0 | 1 | 1 |
| Form opens | 1 | 0 | 1 |
| Form closes or reopens | 0 | 0 | 0 |
| Runtime clicks or typing | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Untargeted snapshots (succeeded / too large) | 9 / 2 | 0 | 9 / 2 |
| Targeted snapshots (succeeded / ref not found) | 20 / 4 | 18 / 0 | 38 / 4 |
| Finds | 23 | 16 | 39 |
| Screenshots (succeeded / failed) | 7 / 1 | 4 / 0 | 11 / 1 |
| "Ref not found" errors | 6 | 0 | 6 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this T2 section only; earlier entries unchanged).
- `evidence/EXP-125/t2-01-buttonsignin-builder-at-open.png` (builder at open).
- `evidence/EXP-125/t2-02-buttonsignin-builder-before-ok.png` (builder before its OK).
- `evidence/EXP-125/t2-03-buttonsignin-behavior-rows-before-save.png` (rows before the Save).
- `evidence/EXP-125/t2-04-save-response-state.png` (Save response).
- Earlier files unchanged (`t1-01`, `t1-02`, `t1r-01`, `t1r2-01`, `t1r3-01`, `t1r3-02`, `t1r3-03`).
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Cleanup inventory (so far)
- ButtonSignIn Enabled When: one entry, `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"` (created in T2). To be undone by the operator if the experiment is cleaned up.
- Nothing else created or changed.

### Final state (end of T2)
- Designer: FX_CustomerPortal open, Save disabled, User scope; ButtonSignIn selected in the Components grid, Properties panel on the Component tab; no dialog, list or builder open; console 2 errors / 0 warnings.
- Web Client: not touched in this task (last reading 18 / 2; no runtime Form open at T1 attempt 3).

### Next (not performed)
- T3 (ButtonHome Enabled When through the same builder route, one Save), only on the operator's instruction. Not started.

## T3 (run R-20261020-205105-2ynw, cycle 8; header label T6; bounded instruction "Execute ONLY EXP-125 T3: configure ButtonHome Enabled When and stop at the T3 boundary")

Scope: ButtonHome's Enabled When only. ButtonSignIn (T2 result), ButtonCart, ButtonSignIn2, handlers, variables, bindings, regions and other properties were not touched. No runtime interaction; no Form close or reopen; T4 not started. The header's "T6" label is a controller label; the bounded instruction was followed (T3).

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's T2 section (headers only, by grep), then the T3 steps.

### Prerequisites verified before any edit
- **Tabs (listed before any selection):** tab 0 Web Client (not selected in this task); tab 1 Designer.
- **Designer (tab 1, selected):** FX_CustomerPortal Form tab selected; scope `ScopeType: User / ScopeName: <signed-in user>` (name not copied); Save `[disabled]` before the edit; no dialog; console **2 errors, 0 warnings** (baseline).
- **ButtonHome** selected through its Components row Type cell under FlexLayoutMain > Region00: menu (targeted snapshot of the row table, then click). Properties header read `ButtonHome (Button)`.
- **Events > Primary** read `FX_HomeBtn` (expected).
- **Behavior > Enabled When** value cell read **blank** (expected).
- Prerequisites met, so the edit proceeded.

### Builder (EXP-123 route)
- Enabled When ellipsis clicked once. Two dialogs opened: the parent "Edit Set of Conditional Actions" (listbox with one option `NONE:, = |,`) and the "Edit Condition" builder.
- Builder at open (screenshot `t3-01-buttonhome-builder-at-open.png`, read back): title `Edit Condition`; one clause `= |` (selected, blank); Left Value blank; Operator `=`; Right Value blank; OK, Cancel, Help. New not clicked.
- **Left value:** Edit Value clicked once. Edit Value Expression opened; Value Type list opened and **Variable Value** clicked (the list offered Literal, Variable Value, Component Value, Property Value). The Value list was opened; the exact `FX_CustomerID` entry was offered among FX_Count, FX_CustomerID and FX_Page, and **FX_CustomerID** was clicked. Value read `FX_CustomerID`; Global unchecked (not touched). OK. Builder Left Value read `#V(FX_CustomerID)`.
- **Operator:** the operator list opened and offered, in order: `=`, `<>`, `<=`, `>=`, `<`, `>`, `ELSE`. **`<>`** clicked. Operator read `<>`.
- **Right value:** Edit Value clicked once. Value Type was blank; the list offered Literal, Variable Value, Component Value, Property Value. **Literal** clicked. Value left empty (no text typed). OK. Builder Right Value read `""` (an empty literal, shown with two quote characters).
- **Clause before OK** (screenshot `t3-02-buttonhome-builder-before-ok.png`, read back): `#V(FX_CustomerID) <> "" |`; Left Value `#V(FX_CustomerID)`; Operator `<>`; Right Value `""`; And With Next Clause unchecked.
- **Builder OK** clicked once. The parent action read `Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "" |, "True"`. The target is **#C(ButtonHome)**, not ButtonSignIn.
- **Parent OK** clicked once (the planned change). Parent closed. No dialog open (targeted find: none).

### Resulting property text and Primary
- **Enabled When** (ButtonHome Properties, read before and after the Save; accessibility text): **`Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"`**. The grid shows it truncated as `Enabled:#C(Button...`. As with ButtonSignIn in T2, the stored text is the action form (`Enabled:` target `#C(ButtonHome)`, condition, `"True"`), not the bare condition. Recorded as observed; not edited as text.
- **Events > Primary** before and after the Save: `FX_HomeBtn` (unchanged).

### Designer Save (one)
- Save clicked once, using a targeted toolbar snapshot (ref e2870) taken in this task. Response: toast `Save` / `Form [FX_CustomerPortal] and global object(s) were saved.` (screenshot `t3-04-save-response-state.png`, read back). Save state after: `[disabled]`. No prompt; no error. Console 2 / 0 at the Save click's output. (The find and screenshot calls after the Save did not report a console count.)
- Behavior rows before the Save: screenshot `t3-03-buttonhome-behavior-rows-before-save.png` (read back): Save enabled; Enabled When `Enabled:#C(Button…`; Primary FX_HomeBtn; ButtonHome row selected in the Components grid.

### Console (Designer tool header)
- Baseline 2 errors / 0 warnings. Every reported count in this task (every click, the selections and snapshots) read 2 / 0. No rise, so no stop. Web Client not selected; its last reading was 18 / 2 (T1 attempt 3).

### Acceptance check status
- **AC-2 (ButtonHome portion):** built in the Edit Condition builder by editing its existing clause (no New): Left Variable Value FX_CustomerID, operator `<>`, right empty Literal: **met** (observed). Exact Enabled When text recorded: **met**. Primary unchanged (FX_HomeBtn): **met**. One Save: **met**. Console recorded after each action: **met** (2 / 0). At most one correction per field: **met** (0 corrections). Screenshots (builder at open, builder before OK, Behavior rows before Save, Save response): **met** (`t3-01` to `t3-04`).
- **AC-2 for ButtonCart (T4):** not started.
- **AC-3, AC-4:** not started. **AC-5** holds for this task: only ButtonHome Enabled When changed; no New; no copy or paste; no Toolbox; no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; no Undo; no runtime action; no Form close or reopen.

### Qualifications
- The stored Enabled When is the action form, as with ButtonSignIn. Whether the runtime honours this form the same way the tutorial's condition does is unverified; runtime is T6 to T9.
- The T3 Save is observed in the same session; not verified across a close and reopen (T5) and not verified at runtime.
- `<>` is the offered not-equal operator; the tutorial's wording "less than or greater than" is the narrator's.
- Counts below are reconstructed from the task sequence (the sequence was not logged step by step during the task); they are exact by this reconstruction but were not independently recounted.

### Action audit, this task (T3)
| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 1 Designer; succeeded) |
| Clicks dispatched | 17 (select ButtonHome; Enabled When ellipsis; left Edit Value; left Value Type Open; Variable Value; Value Open; FX_CustomerID; left OK; Operator Open; `<>`; right Edit Value; right Value Type Open; Literal; right OK; builder OK; parent OK; Save) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 0 |
| Lists opened | 4 (left Value Type; left Value; operator; right Value Type) |
| List options chosen | 4 (Variable Value; FX_CustomerID; `<>`; Literal) |
| Dialogs opened | 4 (Edit Set of Conditional Actions; Edit Condition; Edit Value Expression x2) |
| Dialogs closed with OK | 4 (two Edit Value Expression; builder; parent) |
| Dialogs closed with Cancel | 0 |
| Prompts | 0 |
| Designer Saves | 1 (toast; Save disabled after) |
| Per-field entries | 0 typed; 4 list selections |
| Corrections | 0 |
| Form close or reopen | 0 |
| Runtime clicks or typing | 0 |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 13 |
| Targeted snapshots (succeeded) | 18 |
| Untargeted snapshots | 0 |
| Screenshots (succeeded) | 4 (`t3-01`, `t3-02`, `t3-03`, `t3-04`) |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |

Cumulative counts across the run (attempts 1 to 4 and T2 and T3):
| Category | Through T2 | T3 | Total |
| --- | --- | --- | --- |
| Tab lists | 5 | 1 | 6 |
| Tab selections | 8 | 1 | 9 |
| Clicks dispatched | 32 | 17 | 49 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 |
| Lists opened | 4 | 4 | 8 |
| List options chosen | 4 | 4 | 8 |
| Dialogs opened | 4 | 4 | 8 |
| Dialogs closed with OK | 4 | 4 | 8 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 1 | 1 | 2 |
| Form opens | 1 | 0 | 1 |
| Form closes or reopens | 0 | 0 | 0 |
| Runtime clicks or typing | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Finds | 39 | 13 | 52 |
| Targeted snapshots (succeeded / ref not found) | 38 / 4 | 18 / 0 | 56 / 4 |
| Untargeted snapshots (succeeded / too large) | 9 / 2 | 0 | 9 / 2 |
| Screenshots (succeeded / failed) | 11 / 1 | 4 / 0 | 15 / 1 |
| "Ref not found" errors | 6 | 0 | 6 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this T3 section only; earlier entries unchanged).
- `evidence/EXP-125/t3-01-buttonhome-builder-at-open.png` (builder at open).
- `evidence/EXP-125/t3-02-buttonhome-builder-before-ok.png` (builder before its OK).
- `evidence/EXP-125/t3-03-buttonhome-behavior-rows-before-save.png` (Behavior rows before the Save).
- `evidence/EXP-125/t3-04-save-response-state.png` (Save response).
- Earlier files unchanged (`t1-01`, `t1-02`, `t1r-01`, `t1r2-01`, `t1r3-01` to `t1r3-03`, `t2-01` to `t2-04`).
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Cleanup inventory (so far)
- ButtonSignIn Enabled When: `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"` (T2).
- ButtonHome Enabled When: `Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"` (T3).
- Nothing else created or changed.

### Final state (end of T3)
- Designer: FX_CustomerPortal open, Save disabled, User scope; ButtonHome selected in the Components grid; Properties on the Component tab; no dialog, list or builder open; console 2 errors / 0 warnings.
- Web Client: not touched in this task (last reading 18 / 2).

### Next (not performed)
- T4 (ButtonCart Enabled When through the same builder route, one Save), only on the operator's instruction. Not started.

## T4 (run R-20261020-205105-2ynw, cycle 9; header label T7; bounded instruction "Execute ONLY EXP-125 T4: configure ButtonCart Enabled When ... stop at the T4 boundary")

Scope: ButtonCart's Enabled When only. ButtonSignIn (T2) and ButtonHome (T3) were not touched. ButtonSignIn2, handlers, variables, bindings, regions and other properties were not touched. No runtime interaction; no Form close or reopen; no second Save; T5 not started. The header's "T7" label is a controller label; the bounded instruction (T4) was followed.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's T3 section (headers located by grep; the T3 section was read in the previous task).

### Prerequisites verified before any edit
- **Tabs (listed before any selection):** tab 0 Web Client (not selected in this task); tab 1 Designer.
- **Designer (tab 1, selected):** FX_CustomerPortal tab selected; scope `ScopeType: User / ScopeName: <signed-in user>` (name not copied); Save `[disabled]`; no dialog; console **2 errors, 0 warnings** (baseline).
- **ButtonCart** selected through its Components row Type cell (FlexLayoutMain > Region00: menu), after a targeted row-table snapshot. Properties header read `ButtonCart (Button)`.
- **Events > Primary** read `FX_CartBtn` (expected).
- **Behavior > Enabled When** value cell read **blank** (expected).
- Prerequisites met.

### Builder (EXP-123 route)
- Enabled When ellipsis clicked once. The parent "Edit Set of Conditional Actions" and the "Edit Condition" builder opened.
- Builder at open (screenshot `t4-01-buttoncart-builder-at-open.png`, taken; the image was not re-read in this task): one clause `= |` (selected, blank); Left Value blank; Operator `=`; Right Value blank; OK, Cancel, Help. New not clicked.
- **Left value:** Edit Value clicked once. Value Type list opened; **Variable Value** clicked (options offered: Literal, Variable Value, Component Value, Property Value). Value list opened; the exact **FX_CustomerID** entry was offered (among FX_Count, FX_CustomerID, FX_Page) and clicked. Value read `FX_CustomerID`; Global unchecked (not touched). OK. Builder Left Value read `#V(FX_CustomerID)`.
- **Operator:** list opened; options offered, in order: `=`, `<>`, `<=`, `>=`, `<`, `>`, `ELSE`. **`<>`** clicked. Operator read `<>`.
- **Right value:** Edit Value clicked once. Value Type list opened; **Literal** clicked. Value left empty (no text typed). OK. Builder Right Value read `""`.
- **Clause before OK** (screenshot `t4-02-buttoncart-builder-before-ok.png`, read back): header `ButtonCart (Button)`; Primary `FX_CartBtn`; clause `#V(FX_CustomerID) <> "" |`; Left Value `#V(FX_CustomerID)`; Operator `<>`; Right Value `""`; And With Next Clause unchecked.
- **Builder OK** clicked once. Parent action read `Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "" |, "True"`. The target is **#C(ButtonCart)**.
- **Parent OK** clicked once (planned change). Parent closed. No dialog open (targeted find: none).

### Resulting property text and Primary
- **Enabled When** (ButtonCart Properties, before and after the Save; accessibility text): **`Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"`**. The grid cell shows it truncated as `Enabled:#C(Button...`. Same action form as ButtonSignIn (T2) and ButtonHome (T3). Recorded as observed; not edited as text.
- **Events > Primary** before and after the Save: `FX_CartBtn` (unchanged).

### Designer Save (one)
- Save clicked once, using the toolbar ref (e2870) from a targeted toolbar snapshot taken in this task. Response: toast `Save` / `Form [FX_CustomerPortal] and global object(s) were saved.` (screenshot `t4-04-save-response-state.png`, read back). Save state after: `[disabled]`. No prompt; no error.
- Behavior rows before the Save: screenshot `t4-03-buttoncart-behavior-rows-before-save.png` (taken; not re-read in this task). The before-save state was confirmed by a targeted read: Save enabled; Enabled When `Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"`; Primary `FX_CartBtn`.

### Console (Designer tool header)
- Baseline 2 errors / 0 warnings. Every reported count in this task (each click, selection, find and snapshot) read 2 / 0. No rise, so no stop. Web Client not selected in this task.

### Acceptance check status
- **AC-2 (ButtonCart portion):** built in the Edit Condition builder by editing the existing clause (no New): Left Variable Value FX_CustomerID, operator `<>`, right empty Literal: **met** (observed). Exact Enabled When text recorded: **met**. Primary unchanged (FX_CartBtn): **met**. One Save: **met**. Console recorded after each action: **met** (2 / 0). At most one correction per field: **met** (0 corrections). Screenshots (builder at open, before OK, Behavior rows before the Save, Save response): **met** (`t4-01` to `t4-04`; `t4-01` and `t4-03` were not re-read).
- **AC-2 across all three buttons (T2 to T4):** ButtonSignIn (T2), ButtonHome (T3), ButtonCart (T4) are each built, saved once, and read back in the same session. **Supported as same-session UI observations.** Not verified across a close and reopen (T5), and not verified at runtime (T6 to T9).
- **AC-3, AC-4:** not started. **AC-5** holds for this task: only ButtonCart Enabled When changed; no New; no copy or paste; no Toolbox; no Regenerate, unload, Delete Form Definition or Select Form OK; no drag; no Undo; no runtime action; no Form close or reopen.

### Qualifications
- The stored Enabled When is the action form for all three buttons. Whether the runtime honours it as the tutorial's condition does is unverified; runtime is T6 to T9.
- Same-session only; the close-and-reopen readback is T5.
- `<>` is the offered not-equal operator; the tutorial wording "less than or greater than" is the narrator's.

### Action audit, this task (T4)
Counts are a reconstruction of the task sequence (not logged step by step during the task); they are recounted from the tool calls made in this task.

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 1 Designer; succeeded) |
| Clicks dispatched | 17 (select ButtonCart; Enabled When ellipsis; left Edit Value; left Value Type Open; Variable Value; Value Open; FX_CustomerID; left OK; Operator Open; `<>`; right Edit Value; right Value Type Open; Literal; right OK; builder OK; parent OK; Save) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 0 |
| Lists opened | 4 (left Value Type; left Value; operator; right Value Type) |
| List options chosen | 4 (Variable Value; FX_CustomerID; `<>`; Literal) |
| Dialogs opened | 4 (Edit Set of Conditional Actions; Edit Condition; Edit Value Expression x2) |
| Dialogs closed with OK | 4 (two Edit Value Expression; builder; parent) |
| Dialogs closed with Cancel | 0 |
| Prompts | 0 |
| Designer Saves | 1 (toast; Save disabled after) |
| Per-field entries | 0 typed; 4 list selections |
| Corrections | 0 |
| Form close or reopen | 0 |
| Runtime clicks or typing | 0 |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 14 |
| Targeted snapshots (succeeded) | 16 |
| Untargeted snapshots | 0 |
| Screenshots (succeeded) | 4 (`t4-01`, `t4-02`, `t4-03`, `t4-04`) |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |

Cumulative counts across the run (exact through T3 as recorded; T4 added):

| Category | Through T3 | T4 | Total |
| --- | --- | --- | --- |
| Tab lists | 6 | 1 | 7 |
| Tab selections | 9 | 1 | 10 |
| Clicks dispatched | 49 | 17 | 66 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 |
| Lists opened | 8 | 4 | 12 |
| List options chosen | 8 | 4 | 12 |
| Dialogs opened | 8 | 4 | 12 |
| Dialogs closed with OK | 8 | 4 | 12 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 2 | 1 | 3 |
| Form opens | 1 | 0 | 1 |
| Form closes or reopens | 0 | 0 | 0 |
| Runtime clicks or typing | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Finds | 52 | 14 | 66 |
| Targeted snapshots (succeeded / ref not found) | 56 / 4 | 16 / 0 | 72 / 4 |
| Untargeted snapshots (succeeded / too large) | 9 / 2 | 0 | 9 / 2 |
| Screenshots (succeeded / failed) | 15 / 1 | 4 / 0 | 19 / 1 |
| "Ref not found" errors | 6 | 0 | 6 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

The "Through T3" column reproduces the counts recorded in the earlier T3 section. Those earlier counts were reconstructed, not logged step by step, and were not independently recounted here.

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this T4 section only; earlier entries unchanged).
- `evidence/EXP-125/t4-01-buttoncart-builder-at-open.png` (builder at open).
- `evidence/EXP-125/t4-02-buttoncart-builder-before-ok.png` (builder before OK).
- `evidence/EXP-125/t4-03-buttoncart-behavior-rows-before-save.png` (Behavior rows before the Save).
- `evidence/EXP-125/t4-04-save-response-state.png` (Save response).
- Earlier files unchanged (`t1-01`, `t1-02`, `t1r-01`, `t1r2-01`, `t1r3-01` to `t1r3-03`, `t2-01` to `t2-04`, `t3-01` to `t3-04`).
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Cleanup inventory (so far)
- ButtonSignIn Enabled When: `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"` (T2).
- ButtonHome Enabled When: `Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"` (T3).
- ButtonCart Enabled When: `Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"` (T4).
- Nothing else created or changed.

### Final state (end of T4)
- Designer: FX_CustomerPortal open, Save disabled, User scope; ButtonCart selected in the Components grid; Properties on the Component tab; no dialog, list or builder open; console 2 errors / 0 warnings.
- Web Client: not touched in this task (last reading 18 / 2, T1 attempt 3).

### Next (not performed)
- T5 (Designer close and reopen readback) only on the operator's instruction. Not started.

## T5 (run R-20261020-205105-2ynw, cycle 10; header label T8; bounded instruction "Execute ONLY EXP-125 T5: one ordinary Designer close/reopen followed by read-only property verification")

Scope: one close and one reopen of FX_CustomerPortal in the Designer, then read-only verification. No property edit, no Save, no builder, no dialog, no runtime action, no unload. T6 not started. The header's "T8" label is a controller label; the bounded instruction (T5) was followed.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's T4 section (located by grep; the T2 to T4 results were taken from the record, not re-derived).

### Prerequisites verified before the close
- **Tabs (listed before any selection):** tab 0 Web Client (not selected in this task); tab 1 Designer.
- **Designer (tab 1, selected):** FX_CustomerPortal Form tab selected (targeted snapshot of the tablist); Save `[disabled]`; scope `ScopeType: User / ScopeName: <signed-in user>` (name not copied); no dialog; console **2 errors, 0 warnings** (baseline).

### Close and reopen sequence
1. **Close:** clicked the FX_CustomerPortal Form-tab close control (`closable FX_CustomerPortal`, ref from the fresh tablist snapshot). **No save prompt appeared** (no prompt text to record; no answer given). Console 2 / 0. After the close: no Form tab remains; Save `[disabled]`; no dialog listed (find). Screenshot `t5-01-after-close-no-prompt.png` (taken; not re-read).
2. **Reopen:** clicked the Form menu (`Form`), then the recent-forms entry `FX_CustomerPortal` (exact menu item, ref from a targeted menu snapshot). The reopen completed without any prompt. Console 2 / 0. After the reopen: tab `FX_CustomerPortal` selected; Save `[disabled]`; scope `ScopeType: User`; no dialog (find). Screenshot `t5-02-reopened-form-clean.png` (taken; not re-read).
3. After reopen, the Details panel was collapsed (the reopen does not keep it expanded). Expanded it (view-only, Expand Panel), selected the Components tab, and expanded the Components tree (view-only, grid Expand). Console 2 / 0 after each.

### Readback of the reopened Form (accessibility text; each row selected by its Components Type cell and header confirmed)
- **ButtonSignIn**: header `ButtonSignIn (Button)`; **Enabled When** `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"`; **Events > Primary** `FX_SignInBtn2`. Matches the T2 result; Primary unchanged. The Components grid row also shows Event to generate `FX_SignInBtn2` and the Enabled When column with the same text.
- **ButtonHome**: header `ButtonHome (Button)`; **Enabled When** `Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"`; **Events > Primary** `FX_HomeBtn`. Matches T3.
- **ButtonCart**: header `ButtonCart (Button)`; **Enabled When** `Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"`; **Events > Primary** `FX_CartBtn`. Matches T4.
- **ButtonSignIn2** (not edited): header `ButtonSignIn2 (Button)`; **Events > Primary** `FX_SignInBtn`; **Enabled When** value cell **empty** (blank, as expected). Components grid row: Event to generate `FX_SignInBtn`, Enabled When column empty.
- No value differed from the expected values. The "expected" strings in the brief were compared against what was displayed; the displayed text was recorded as read.

### Screenshots (this task)
- `evidence/EXP-125/t5-01-after-close-no-prompt.png`: taken after the close; not re-read. Expected to show the canvas with no Form tab; not verified visually in this task.
- `evidence/EXP-125/t5-02-reopened-form-clean.png`: taken after the reopen; not re-read. Expected to show FX_CustomerPortal open, Save disabled; the same state was confirmed by the find readback.
- `evidence/EXP-125/t5-03-buttonsignin-behavior-rows-after-reopen.png`: taken after the ButtonSignIn selection and Behavior readback; not re-read.
- `evidence/EXP-125/t5-04-buttoncart-behavior-rows-after-reopen.png`: **read back**. Shows the Form on the canvas; Properties header `ButtonCart (Button)`; Behavior group present with Enabled When value `Enabled:#C(Button…` (truncated on screen; full text from the accessibility readback); Events > Primary `FX_CartBtn`; Save greyed; Components grid with ButtonSignIn, ButtonHome and ButtonCart rows and their Enabled When column populated (truncated). Proves the reopened state and the ButtonCart selection; does not show the full text.

### Save state
- Save `[disabled]` after every readback (the last check after ButtonSignIn2's readback: find shows Save disabled, FX_CustomerPortal selected, User scope, no dialog). No Designer Save was performed in this task.

### Console (Designer tool header)
- Baseline 2 errors / 0 warnings. Every reported count in this task (every click, selection, find and snapshot) read 2 / 0. No rise, so no stop. Web Client not selected in this task; last reading 18 / 2 (T1 attempt 3).

### AC-3 status
- **AC-3 (same-session close and reopen readback):** the three Enabled When conditions read back as planned (text above); the three Primary events read back as planned (FX_SignInBtn2, FX_HomeBtn, FX_CartBtn); ButtonSignIn2 unchanged (Primary FX_SignInBtn; Enabled When blank); the Form is open and clean (Save disabled; no dialog; no prompt on the close or the reopen). **Supported as same-session UI observation.**
- **Not verified:** cross-session persistence, database-level persistence, or replay. These are same-session observations, and the reopen was a Designer reopen in the same browser session, not a server reload after a Designer reload.
- **AC-4 (runtime, T6 to T9):** not started. **AC-5** holds for this task: no property edit; no Save; no builder; no list; no dialog opened; no runtime action; no unload; no Regenerate.

### Qualifications
- The stored Enabled When text is the action form for all three buttons (as in T2 to T4), not the bare condition.
- Whether the runtime honours it is unverified until T6 to T9.
- The close and reopen were performed with a clean Form (Save disabled before the close), so no unsaved work was at risk and no save prompt was expected or shown.

### Action audit, this task (T5)
Counts are reconstructed from the sequence of tool calls made in this task.

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 1 Designer; succeeded) |
| Clicks dispatched | 10 (Form-tab close control; Form menu; recent-forms FX_CustomerPortal; Details Expand Panel; Components tab; Components grid Expand; ButtonSignIn Type cell; ButtonHome Type cell; ButtonCart Type cell; ButtonSignIn2 Type cell) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 0 |
| Lists opened | 0 |
| Dialogs opened | 0 |
| Prompts | 0 (no save prompt on the close; no other prompt) |
| Designer Saves | 0 |
| Form closes | 1 |
| Form reopens | 1 (recent-forms route; no Select Form OK) |
| Runtime clicks or typing | 0 |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 13 (approximate; reconstructed) |
| Targeted snapshots (succeeded) | 11 (approximate; reconstructed) |
| Untargeted snapshots | 0 |
| Screenshots (succeeded) | 4 (`t5-01` to `t5-04`) |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |

Cumulative counts across the run (through T4 as recorded, plus T5):

| Category | Through T4 | T5 | Total |
| --- | --- | --- | --- |
| Tab lists | 7 | 1 | 8 |
| Tab selections | 10 | 1 | 11 |
| Clicks dispatched | 66 | 10 | 76 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing | 0 | 0 | 0 |
| Lists opened | 12 | 0 | 12 |
| Dialogs opened | 12 | 0 | 12 |
| Dialogs closed with OK | 12 | 0 | 12 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 3 | 0 | 3 |
| Form opens (incl. reopen) | 1 | 1 | 2 |
| Form closes | 0 | 1 | 1 |
| Runtime clicks or typing | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Finds | 66 | 13 | 79 |
| Targeted snapshots (succeeded / ref not found) | 72 / 4 | 11 / 0 | 83 / 4 |
| Untargeted snapshots (succeeded / too large) | 9 / 2 | 0 | 9 / 2 |
| Screenshots (succeeded / failed) | 19 / 1 | 4 / 0 | 23 / 1 |
| "Ref not found" errors | 6 | 0 | 6 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

The "Through T4" column reproduces the counts recorded in earlier sections. Those counts were reconstructed from task sequences, not logged step by step during the tasks, and were not independently recounted here. The T5 counts are also reconstructed.

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this T5 section only; earlier entries unchanged).
- `evidence/EXP-125/t5-01-after-close-no-prompt.png`
- `evidence/EXP-125/t5-02-reopened-form-clean.png`
- `evidence/EXP-125/t5-03-buttonsignin-behavior-rows-after-reopen.png`
- `evidence/EXP-125/t5-04-buttoncart-behavior-rows-after-reopen.png`
- Earlier files unchanged (`t1-01`, `t1-02`, `t1r-01`, `t1r2-01`, `t1r3-01` to `t1r3-03`, `t2-01` to `t2-04`, `t3-01` to `t3-04`, `t4-01` to `t4-04`).
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Cleanup inventory (so far)
- ButtonSignIn Enabled When: `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"` (T2).
- ButtonHome Enabled When: `Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"` (T3).
- ButtonCart Enabled When: `Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"` (T4).
- Nothing else created or changed.

### Final state (end of T5)
- Designer: FX_CustomerPortal open and clean (Save disabled), User scope, no dialog, no list; Components tree expanded and ButtonSignIn2 selected (view state only); Details panel expanded; console 2 errors / 0 warnings.
- Web Client: not touched in this task (last reading 18 / 2, T1 attempt 3).

### Next (not performed)
- T6 (runtime open of FX_CustomerPortal in the Web Client, read-only) only on the operator's instruction. Not started.

## T6 (run R-20261020-205105-2ynw, cycle 11; header label T9; bounded instruction "Execute ONLY EXP-125 T6: open FX_CustomerPortal once in the Web Client and inspect its initial runtime state ... STOP at the T6 boundary")

Scope: open FX_CustomerPortal once at runtime and observe its initial state. No typing, no F4, no click on any runtime control (EditCustID, ButtonSignIn2, left menu, tiles, grid rows, query controls), no Save, no close, no unload. T7 (Customer ID entry and sign-in) not started. The header's "T9" label is a controller label; the bounded instruction (T6) was followed.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's T5 section (located by grep).

### Prerequisites verified before the open
- **Tabs (listed before any selection):** tab 0 Web Client (`Mongoose`); tab 1 Designer (`...designer/default.aspx?MGForm=FX_CustomerPortal`).
- **Web Client (tab 0), selected:** baseline **18 errors, 2 warnings**. No runtime Form was open (no FX_CustomerPortal tab, no Customer Portal page). No "Session Expired" modal, no sign-in page, no "Logout Successful" card. The Form menu was **absent** from the Web Client menu bar, which is consistent with no Form being open; the Form-menu recent-forms route (EXP-095/EXP-118) was therefore not available. The toolbar `Open` button was enabled.
- The Designer tab was **not selected** in this task and was not read (the brief keeps it unchanged).

### Open route (Web Client Open / Select Form dialog)
1. Clicked the Web Client toolbar `Open` button (the Form menu was absent). Dialog `Select Form` opened. Console 18 / 2.
2. The dialog's filter textbox held a leftover value `fx_item` (pre-existing, not typed by the worker). Clicked the filter field (console 18 / 2). Selected all (Ctrl+A) and deleted (Backspace) to clear it (two key presses; console 18 / 2 after each). A first attempt to type using a DOM id was rejected by the tool (`does not match any elements`; not dispatched); a fresh untargeted snapshot was taken and its reference was used.
3. Typed `FX_CustomerPortal` into the filter key by key (`slowly`). The list filtered to **one row**: Caption `FX_CustomerPortal`, Name `FX_CustomerPortal`. Console 18 / 2.
4. **Double-clicked the exact `FX_CustomerPortal` Name cell** (not OK). Dialog closed; Form opened. Console 18 / 2.
- No prompt appeared at any step (no informational prompt, no question). No Select Form OK was clicked. No Select Form row other than FX_CustomerPortal was touched.

### Opened Form (observed, accessibility snapshot and screenshot `t6-01`)
- **Tab title / Form title:** tab heading `FX_CustomerPortal` (selected). Form caption text: `Customer Portal`. Window title area shows `FX_CustomerPortal`.
- **Status bar:** the Web Client's bottom-right shows only `en-US` and the Infor mark; no status text (for example "Sign In (Object 1 of 3)") is visible in the screenshot or the snapshot. Recorded as **not visible**, not as an error.
- **Visible page region:** only the sign-in page is visible: heading `Sign In`; picture (cat with microphone); `Customer ID` label; an empty edit (`textbox`); and the sign-in page's `Sign In` button (ref `f1e491`, ButtonSignIn2). The home page (tiles, `Home` heading) and the cart page (`Cart:` heading, GridOrders, `Checkout`, `Count`, `Add To Cart`) are **not present** in the accessibility tree and are not drawn in the screenshot. Consistent with hidden home and cart regions.
- **Header Customer ID display (StaticCustID):** no text is present in the header in the snapshot or the screenshot; the header shows `Customer Portal` and the small picture only. Recorded as **blank (no text observed)**. The StaticCustID component is not separately addressable in the snapshot, so its value is read as absent text, not as a separately read value.
- **Customer ID edit (EditCustID) value:** the accessibility `textbox` carries **no value** (empty); the screenshot shows an empty box. Recorded as **blank**.
- **Left menu buttons (accessibility snapshot, disabled state):**
  - `Sign In` (ButtonSignIn, ref `f1e474`): **[disabled]**.
  - `Home` (ButtonHome, ref `f1e476`): **[disabled]**.
  - `Cart` (ButtonCart, ref `f1e478`): **[disabled]**.
  - Screenshot: all three menu buttons are drawn pale (faded), consistent with disabled.
  - Enabled When for each is the action form written in T2 to T4 (`Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"`); with Customer ID blank the three are reported disabled. This is observed initial enablement only.
- **Sign-in page button (ButtonSignIn2, ref `f1e491`):** enabled (no `[disabled]` flag; `cursor=pointer`). Not clicked.
- **Other runtime toolbar:** Save `[disabled]`; `Help Current Form` enabled. No dialog, list or menu open after the open.

### Screenshot (decisive)
- `evidence/EXP-125/t6-01-runtime-signin-menu-blank.png` (read back). **Shows:** the runtime FX_CustomerPortal tab; `Customer Portal` header with no visible customer text; left menu Sign In, Home and Cart drawn pale; the sign-in page with picture, `Customer ID` label, an empty box and a Sign In button; the home and cart regions not drawn. **Supports:** the initial runtime state with Customer ID blank: sign-in page only, menu drawn pale (consistent with the disabled state read from the accessibility tree). **Does not prove:** the status-bar text (not visible); the Form's dirty state beyond the toolbar Save readback; that the menu's disabled state is caused by the Enabled When conditions (not tested by changing the variable); any menu functionality (not clicked).

### Console (Web Client tool header)
- Baseline 18 errors / 2 warnings. Recorded after every action in this task: Open (18/2); filter click (18/2); Ctrl+A (18/2); Backspace (18/2); the failed type (18/2); fresh snapshot (18/2); typing (18/2); targeted dialog snapshot (18/2); double-click (18/2); find (18/2); snapshot (18/2); screenshot (18/2). **No rise, so no stop.**
- The Designer tab's console was not read in this task (not selected).

### AC-4 (initial runtime portion) status
- **Observed:** with Customer ID blank the runtime Form shows the sign-in page only; the three left menu buttons are disabled in the accessibility tree and drawn pale; the sign-in button (ButtonSignIn2) is enabled.
- **Supported:** the initial enablement of the three left menu buttons with Customer ID blank (AC-4 first part), as an observed same-session runtime state.
- **Not yet done (T7 to T9):** typing 1 and sign-in (AC-4 second part); menu navigation (AC-4 third part); runtime close without saving (AC-4 fourth part).

### Qualifications
- Same-session runtime observation; the Form was opened through the Select Form dialog, not through the recent-forms entry, because the Form menu was absent.
- The Form status bar text was not visible; the Designer tab was not read in this task.
- The disabled state is read from the accessibility tree and the faded appearance; it is not tested by a variable change.

### Action audit, this task (T6, exact)
Counts recorded from the tool calls made in this task.

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 0 Web Client; succeeded) |
| Clicks dispatched | 3 (Open toolbar button; filter field; FX_CustomerPortal row double-click) |
| Clicks not dispatched | 0 (the failed `browser_type` with a DOM id was a selector error, not a click) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Key presses (non-click) | 2 (Ctrl+A; Backspace, in the filter field only) |
| Typing | 1 entry (`FX_CustomerPortal`, slowly, in the filter field only; no runtime typing) |
| Runtime typing | 0 |
| Lists opened | 0 |
| Dialogs opened | 1 (Select Form; closed by the row double-click, not OK) |
| Dialogs closed with OK | 0 |
| Select Form OK clicks | 0 |
| Prompts | 0 |
| Form opens | 1 (Select Form route) |
| Form closes | 0 |
| Designer Saves | 0 |
| Runtime clicks (buttons, tiles, rows) | 0 |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 2 |
| Targeted snapshots (succeeded) | 1 (dialog) |
| Untargeted snapshots | 3 (start; after the failed type; after the Form opened) |
| Screenshots (succeeded) | 1 (`t6-01`) |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |

Cumulative counts across the run (through T5 as recorded, plus T6; the through-T5 figures were reconstructed in earlier tasks and were not independently recounted):

| Category | Through T5 | T6 | Total |
| --- | --- | --- | --- |
| Tab lists | 8 | 1 | 9 |
| Tab selections | 11 | 1 | 12 |
| Clicks dispatched | 76 | 3 | 79 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Lists opened | 12 | 0 | 12 |
| Dialogs opened | 12 | 1 | 13 |
| Dialogs closed with OK | 12 | 0 | 12 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 3 | 0 | 3 |
| Form opens | 2 | 1 | 3 |
| Form closes | 1 | 0 | 1 |
| Runtime clicks or typing | 0 | 0 | 0 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this T6 section only; earlier entries unchanged).
- `evidence/EXP-125/t6-01-runtime-signin-menu-blank.png` (runtime Form with the menu and sign-in page).
- Earlier files unchanged.
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Cleanup inventory (so far)
- ButtonSignIn, ButtonHome, ButtonCart Enabled When: one `Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"` each (T2 to T4).
- Nothing created at runtime; the runtime Form is open and unsaved (no change made).

### Final browser state (end of T6)
- **Web Client (tab 0, selected):** FX_CustomerPortal runtime Form open (the one opened in this task); sign-in page visible; left menu disabled; Customer ID blank; no dialog, list or menu open; Save disabled; console 18 errors / 2 warnings. The Form was **not** closed (the close is the T9 step).
- **Designer (tab 1):** not selected or read in this task; its last reading in T5 was FX_CustomerPortal open and clean, console 2 / 0.

### Next (not performed)
- T7 (type `1` into EditCustID and click ButtonSignIn2 once) performed in the T7 section below; T8 (menu navigation) not started.

## T7 (run R-20261020-205105-2ynw, cycle 12; header label T10; bounded instruction "Execute ONLY EXP-125 T7: enter Customer ID 1, activate ButtonSignIn2 exactly once ... STOP before T8")

Scope: type `1` into EditCustID once, click the sign-in page's ButtonSignIn2 once, observe. No menu-button click, no tile or grid-row click, no Save, no Form close or reopen, no F4, no unload, no other typing. T8 not started. The header's "T10" label is a controller label; the bounded instruction (T7) was followed.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's T6 section (located by grep).

### Pre-action state (verified before any interaction)
- **Tabs (listed before any selection):** tab 0 Web Client (`Mongoose`, current); tab 1 Designer (`...designer/default.aspx?MGForm=FX_CustomerPortal`). Tab 0 was selected (succeeded) and a fresh snapshot taken.
- **Web Client:** runtime `FX_CustomerPortal` open (tab heading `FX_CustomerPortal`, selected); visible region the sign-in page (heading `Sign In`, `Customer ID` label, empty textbox, `Sign In` button); left menu `Sign In`, `Home`, `Cart` all `[disabled]`; header shows only `Customer Portal` (no customer number text); no `Session Expired` modal; no sign-in card; no `Logout Successful`; no unexpected dialog.
- **Console baseline (Web Client, current reading):** **18 errors, 2 warnings** (same as T6; the operator's ruling that the earlier Web Client increase was a reload artifact is preserved and not reinterpreted).
- **Designer tab:** not selected or read in this task; its last reading (T5) was FX_CustomerPortal clean, console 2 / 0.
- Prerequisites met; proceeded.

### Customer ID entry (EditCustID)
- Clicked the Customer ID textbox once (fresh snapshot reference f1e110, the sign-in page's EditCustID). Console 18 / 2.
- Typed the single character `1` (one key, `slowly`). No other characters typed.
- Snapshot after typing: the textbox holds value `"1"` and has focus. **Header: no customer number displayed** (the header still shows only `Customer Portal`). **Left menu after typing: `Sign In`, `Home`, `Cart` still `[disabled]`**. The variable did not visibly update before focus left the edit, consistent with the brief's note that the variable may update only on blur.
- Console after typing: **18 / 2**.
- Screenshot `t7-01-customer-id-entered.png` (taken; the state is recorded from the accessibility snapshot taken immediately before the screenshot).

### ButtonSignIn2 activation (sign-in page button, once)
- Clicked the sign-in page's `Sign In` button (f1e112, the ButtonSignIn2 below the Customer ID edit; the left-menu Sign In button was not used). Clicked **exactly once**. Console after the click: **18 / 2**.
- Waited 3 seconds (within the 10-second limit), then took a fresh snapshot.
- **No prompt, no message, no dialog, no server-event error** appeared.

### Result after the click (observed)
- **Visible region:** the **home page** (heading `Home`). The sign-in page controls (`Customer ID`, edit, sign-in button) are no longer present; the cart controls (`Cart:`, cart grid, `Checkout`) are not present in the accessibility tree. Consistent with the expected home-page-only region.
- **GridItems (tiles):** **three tiles** rendered (accessibility text and screenshot agree):
  1. Price `45.00`, item `dumbbell`, description `45 pound iron` (highlighted pale blue in the screenshot, i.e. the current row).
  2. Price `6.99`, item `eggs`, description `cage free`.
  3. Price `129.99`, item `guitar`, description `natural acoustic` (grey background in the screenshot).
  Tile pictures are visible in the screenshot (a dog for dumbbell, an egg-like picture for eggs, a dog-like picture for guitar); these identifications are visual only and are not recorded as verified.
- **Header Customer ID display:** the header now shows **`1`** beside the small picture at the top right (accessibility text `1`; screenshot shows `1`). Its attribution to the StaticCustID component is inferred from its position in the header, not from a component-level readback (the accessibility tree does not label it).
- **Status bar:** `Sign In (Object 1 of 3)` (read from the Web Client's status-bar text; screenshot shows it bottom left).
- **Left menu buttons (accessibility, disabled state):** `Sign In`, `Home` and `Cart` are **no longer marked `[disabled]`** (enabled). Screenshot: all three menu buttons are drawn in the normal teal, not faded. Enabled state read from the accessibility tree and confirmed by the screenshot.
- **Sign-in page button and textbox:** the sign-in page is no longer visible; not re-read as a separate control.
- **Count edit (`1`) and `Add To Cart` button:** visible on the home page; **not clicked** (out of scope).
- **Console after the settle and snapshot:** **18 / 2** (unchanged).

### Screenshots (decisive)
- `evidence/EXP-125/t7-01-customer-id-entered.png`: taken after typing `1`; not re-read in this task. Expected to show the sign-in page with the edit holding `1`; the field value and the menu states are recorded from the accessibility snapshot taken before the screenshot. The screenshot itself was not visually verified in this task.
- `evidence/EXP-125/t7-02-after-signin-home.png`: **read back**. **Shows:** the runtime FX_CustomerPortal; header `Customer Portal` with `1` at the top right; the left menu `Sign In`, `Home`, `Cart` in the normal teal (enabled); the `Home` heading; three tiles (`dumbbell / 45 pound iron / 45.00`, `eggs / cage free / 6.99`, `guitar / natural acoustic / 129.99`); the `Count:` edit with `1` and the `Add To Cart` button (not used); status bar `Sign In (Object 1 of 3)`. **Supports:** the home page is the visible region after Customer ID `1` and one ButtonSignIn2 click; the tiles render; the header shows `1`; the menu is drawn enabled. **Does not prove:** that the menu enabling is caused by the Enabled When conditions (not tested by clearing the value); the tile pictures' identity (visual only); cross-session behaviour; any menu functionality (not clicked in T7).

### Console (Web Client tool header)
- 18 / 2 at the start of the task; after the Customer ID click; after typing `1`; after the sign-in click; after the settle wait; after the snapshot; after the screenshot readings. **No rise; no stop.** The Designer's console was not read in this task.

### Observations (summary)
- Customer ID `1` typed; the header and the menu did not change until the sign-in click (the variable appears to update through the sign-in action, not on typing alone; not separately tested).
- One ButtonSignIn2 click moved the visible region to the home page, populated three tiles, showed `1` in the header, and enabled the left menu (accessibility and screenshot).
- The status bar text `Sign In (Object 1 of 3)` is the same text recorded in the EXP-118 operator Outcome for this same sign-in mechanism (for context only; not used as evidence here).

### AC-4 (sign-in portion) status
- **Observed (same session):** with Customer ID `1` and one ButtonSignIn2 click: the visible region is the home page; the three tiles render; the header displays `1`; the left menu Sign In, Home and Cart are enabled. **Supported as a same-session runtime observation** for the sign-in portion.
- **Not yet done (T8 and T9):** menu navigation to Cart, Home and Sign In and their region switches (T8); runtime close without saving (T9).

### Qualifications
- The runtime Form is the same instance opened in T6 (not reopened); the menu state change is attributed to the sign-in action by observation order, not by isolating the variable.
- The header `1` is attributed to StaticCustID by position only.
- Tile identities from the pictures are visual only.
- Same-session observations; no cross-session or replay claims.

### Action audit, this task (T7, exact)
Counts are recorded from the tool calls made in this task.

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 0 Web Client; succeeded) |
| Clicks dispatched | 2 (EditCustID once; ButtonSignIn2 once) |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 1 entry (single character `1`, in EditCustID) |
| Runtime typing | 1 character (`1`) |
| Lists opened | 0 |
| Dialogs opened | 0 |
| Prompts | 0 |
| Waits | 1 (3 seconds, after the sign-in click) |
| Designer Saves | 0 |
| Form opens / closes | 0 / 0 |
| Runtime clicks (other than the two above) | 0 (no menu button, tile, grid row, query control clicked) |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 0 |
| Untargeted snapshots (succeeded) | 3 (pre-action; after typing; after the settle wait) |
| Targeted snapshots | 0 |
| Screenshots (succeeded / failed) | 2 / 0 |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |
| Console readings | 18 / 2 at every reported reading (no rise) |

Cumulative counts across the run (through T6 as recorded, plus T7). Through-T6 figures were reconstructed in earlier tasks and are not independently recounted here; the T7 figures are recounted from this task's sequence.

| Category | Through T6 | T7 | Total |
| --- | --- | --- | --- |
| Tab lists | 9 | 1 | 10 |
| Tab selections | 12 | 1 | 13 |
| Clicks dispatched | 79 | 2 | 81 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing entries | 1 (Select Form filter, T6) | 1 (runtime `1`) | 2 |
| Runtime typing characters | 0 | 1 | 1 |
| Lists opened | 12 | 0 | 12 |
| Dialogs opened | 13 | 0 | 13 |
| Dialogs closed with OK | 12 | 0 | 12 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Dialog closed by row double-click (Select Form, T6) | 1 | 0 | 1 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 3 | 0 | 3 |
| Form opens | 3 | 0 | 3 |
| Form closes | 1 | 0 | 1 |
| Runtime button clicks (ButtonSignIn2 only) | 0 | 1 | 1 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Finds | 81 | 0 | 81 |
| Targeted snapshots (succeeded / ref not found) | 84 / 4 | 0 | 84 / 4 |
| Untargeted snapshots (succeeded / too large or failed) | 12 / 2 | 3 | 15 / 2 |
| Screenshots (succeeded / failed) | 24 / 1 | 2 / 0 | 26 / 1 |
| Waits | 0 | 1 | 1 |
| "Ref not found" errors | 6 | 0 | 6 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (appended this T7 section and replaced the T7 pointer line; earlier entries otherwise unchanged).
- `evidence/EXP-125/t7-01-customer-id-entered.png` (after typing `1`).
- `evidence/EXP-125/t7-02-after-signin-home.png` (after the ButtonSignIn2 click).
- Earlier files unchanged.
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Deviations
- Header said T10; the bounded instruction (T7) was followed.
- The after-typing snapshot was taken before the screenshot; the screenshot `t7-01` was not re-read.
- The brief asked for the status bar, header and menu states "after typing" and "after the click"; the status bar text was read only after the click (it is not shown after typing in the snapshot).
- The 3-second wait is an explicit wait, not a settle-check against an element; the post-wait snapshot showed a settled home page.

### Cleanup inventory (so far)
- ButtonSignIn, ButtonHome, ButtonCart Enabled When: one `Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"` each (T2 to T4).
- Runtime state (T7): Customer ID `1` entered in the runtime edit and the sign-in action performed. Nothing saved at runtime; the runtime Form remains open and unsaved for the T9 close. (The `1` in the edit is an unsaved runtime input, not a record change.)

### Final browser state (end of T7)
- **Web Client (tab 0, selected):** runtime FX_CustomerPortal open on the home page; header `1`; left menu enabled; status bar `Sign In (Object 1 of 3)`; no dialog, list or menu open; console 18 errors / 2 warnings.
- **Designer (tab 1):** not selected or read in this task; its last reading (T5) was FX_CustomerPortal open and clean, console 2 / 0.

### Next (not performed)
- T8 (one click each on the left menu Cart, Home and Sign In buttons, only if enabled) performed in the T8 section below; T9 (runtime close and final audit) not started.

## T8 (run R-20261020-205105-2ynw, cycle 13; header label T11; bounded instruction "Execute ONLY EXP-125 T8: runtime navigation through the LEFT MENU Cart, Home, and Sign In buttons, in exactly that order. Stop at the T8 boundary.")

Scope: one click each on the left menu Cart (ButtonCart), Home (ButtonHome) and Sign In (ButtonSignIn), in that order, each only if enabled. No click on the sign-in page's ButtonSignIn2, no tile or grid-row click, no Add To Cart, no Checkout, no typing, no F4, no query control, no Save, no Form close or reopen, no unload. T9 not started. The header's "T11" label is a controller label; the bounded instruction (T8) was followed.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's T7 section (located by grep).

### Pre-action state (verified before any click)
- **Tabs (listed before any selection):** tab 0 Web Client (`Mongoose`, runtime FX_CustomerPortal in the tab's frame); tab 1 Designer (`...designer/default.aspx?MGForm=FX_CustomerPortal`). Tab 0 selected (succeeded); fresh untargeted snapshot taken.
- **Web Client console baseline (current reading):** **18 errors, 2 warnings** (same as T7; the operator's ruling that the earlier Web Client increase was a reload artifact is preserved).
- **Runtime state:** FX_CustomerPortal tab selected; header shows **`1`** (top right, beside the small picture); the **home page** is visible with three tiles (`dumbbell 45 pound iron 45.00`, `eggs cage free 6.99`, `guitar natural acoustic 129.99`); status bar `Sign In (Object 1 of 3)`; no modal, no sign-in card, no `Logout Successful`, no unexpected dialog.
- **Left menu enabled states (accessibility snapshot):** `Sign In` (f1e96) enabled; `Home` (f1e98) enabled; `Cart` (f1e100) enabled. None marked `[disabled]`. All three planned clicks were therefore eligible.
- **Designer tab:** not selected or read in this task; its last reading (T5) was FX_CustomerPortal open and clean, 2 / 0.

### Step 1: CART (ButtonCart, left menu)
- Clicked `Cart` (f1e100, from the pre-action snapshot) **once**. Console 18 / 2. Waited 3 seconds (within the 10-second limit); fresh snapshot.
- **Result (observed):** the **cart page** is visible: heading `Cart:`; GridOrders shown with columns `Order Number`, `Item`, `Count`, `Customer ID` and **no data rows** in the accessibility tree and no rows drawn in the screenshot; the `Checkout` button is visible (not clicked). The home tiles and the sign-in controls are absent. Header shows **`1`**. Status bar shows **`Cart`**. The Cart menu button is drawn dark blue (active); Sign In and Home are drawn teal (not active). The cart's Count and Add To Cart are not present on the cart page.
- **Prompts:** none. **Server-event error:** none. **Console:** 18 / 2 after the click, after the wait and after the snapshot.
- **Screenshot:** `evidence/EXP-125/t8-01-after-cart.png` (read back). **Shows:** the runtime FX_CustomerPortal with header `1`; the `Cart:` heading; the empty GridOrders header row (`Order Nu…`, `Item`, `Count`, `Customer…`); the `Checkout` button; left menu with Cart highlighted; status bar `Cart`. **Supports:** the cart region is the visible region after the Cart click; GridOrders is empty (no rows observed). **Does not prove:** that no rows exist in the data (only that none are drawn; the grid may be filtered or empty); the Checkout behaviour (not clicked); the grid's Customer ID values (none drawn).

### Step 2: HOME (ButtonHome, left menu)
- The Home reference (f1e98) was taken from the snapshot after the Cart click (the Home button was enabled there). Clicked `Home` **once**. Console 18 / 2. Waited 3 seconds; fresh snapshot.
- **Result (observed):** the **home page** is visible: heading `Home`; the **three tiles** are shown with the same text as in T7: `45.00 dumbbell 45 pound iron`, `6.99 eggs cage free`, `129.99 guitar natural acoustic`. The cart controls and the sign-in controls are absent. Header shows **`1`**. Status bar shows **`Home`**. The Home menu button is drawn active. The Count edit reads `1` and `Add To Cart` is visible (not clicked). Tiles not clicked; no grid row clicked.
- **Prompts:** none. **Console:** 18 / 2 after the click, after the wait, after the snapshot.
- **Screenshot:** `evidence/EXP-125/t8-02-after-home.png` (taken; not re-read in this task; the state is recorded from the accessibility snapshot taken immediately before it).

### Step 3: SIGN IN MENU (ButtonSignIn, left menu; NOT ButtonSignIn2)
- The Sign In menu reference (f1e96) was taken from the snapshot after the Home click (the menu Sign In button was enabled there). Clicked the **left menu** `Sign In` (f1e96) **once**. Console 18 / 2. Waited 3 seconds; fresh snapshot.
- **Result (observed):** the **sign-in page** is visible: heading `Sign In`; the picture (cat with microphone); the `Customer ID` label; the Customer ID edit **still holds `1`** (value `"1"` in the accessibility tree and the screenshot); the sign-in page's `Sign In` button (ButtonSignIn2) visible, not clicked. The home tiles and the cart controls are absent. Header shows **`1`**. Status bar shows **`Sign In`**. The left menu `Sign In` is drawn active (dark blue); Home and Cart are teal.
- **Prompts:** none. **Console:** 18 / 2 after the click, after the wait and after the snapshot.
- **Screenshot:** `evidence/EXP-125/t8-03-after-menu-signin.png` (read back). **Shows:** the runtime FX_CustomerPortal with header `1`; the `Sign In` heading; the picture; the `Customer ID` label; the edit holding `1`; the sign-in button; the left menu with Sign In highlighted; status bar `Sign In`. **Supports:** the sign-in region is the visible region after the menu Sign In click, with the home and cart regions hidden. **Does not prove:** the menu's enabled state beyond the accessibility snapshot; that the typed value came from a new sign-in (no sign-in button was clicked in T8; the edit's `1` is the value entered in T7).

### Summary of the navigation sequence (observed)
| Step | Click | Visible region | Header | Status bar | Console (after click) | Prompt |
| --- | --- | --- | --- | --- | --- | --- |
| Pre-action | (none) | Home (3 tiles) | 1 | Sign In (Object 1 of 3) | 18 / 2 | none |
| 1 | Cart (ButtonCart, enabled) | Cart (GridOrders empty, Checkout) | 1 | Cart | 18 / 2 | none |
| 2 | Home (ButtonHome, enabled) | Home (3 tiles) | 1 | Home | 18 / 2 | none |
| 3 | Sign In menu (ButtonSignIn, enabled) | Sign In (edit `1`, sign-in button) | 1 | Sign In | 18 / 2 | none |

All three menu buttons were enabled when clicked; none was skipped. Each click switched the visible page region as expected. The navigation portion of AC-4 is observed as a same-session result.

### Console (Web Client tool header)
- 18 errors / 2 warnings at the start and after every action (the three clicks, the three waits and the snapshots). **No rise; no stop.** The Designer's console was not read in this task.

### AC-4 (navigation portion) status
- **Observed (same session):** Cart shows the cart page (GridOrders empty, Checkout visible); Home shows the home page with three tiles; Sign In menu shows the sign-in page with the home and cart regions hidden. Each switched the visible region as planned. The header kept `1` throughout.
- **Not yet done (T9):** the runtime Form close without saving and the final audit. The runtime Form is still open.

### Qualifications
- Only the enabled-state readings from the accessibility snapshot were used to decide the clicks; the screenshots of the menu state were not used as the decisive evidence.
- The cart GridOrders was read for its columns and absence of drawn rows only; no data was inspected beyond that.
- The header `1` is attributed to StaticCustID by position only (as in T7).
- Same-session observations; no cross-session, database-level or replay claims.

### Action audit, this task (T8, exact)
Counts are recorded from the tool calls made in this task.

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 1 (tab 0 Web Client; succeeded) |
| Clicks dispatched | 3 (ButtonCart; ButtonHome; ButtonSignIn menu) |
| Clicks not dispatched | 0 |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Typing | 0 |
| Lists opened | 0 |
| Dialogs opened | 0 |
| Prompts | 0 |
| Waits | 3 (3 seconds each, after each click; within the 10-second limit) |
| Designer Saves | 0 |
| Form opens / closes | 0 / 0 |
| Runtime clicks (other than the three planned menu clicks) | 0 (ButtonSignIn2 not clicked; no tile, grid row, Checkout or Add To Cart clicked) |
| Navigations | 0 |
| Re-logins | 0 |
| Finds | 0 |
| Untargeted snapshots (succeeded) | 4 (pre-action; after Cart; after Home; after Sign In) |
| Targeted snapshots | 0 |
| Screenshots (succeeded / failed) | 3 / 0 |
| "Ref not found" errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |
| Console readings | 18 / 2 at every reported reading (no rise) |

Cumulative counts across the run (through T7 as recorded, plus T8). Through-T7 figures were reconstructed in earlier tasks and are not independently recounted; the T8 figures are from this task's sequence.

| Category | Through T7 | T8 | Total |
| --- | --- | --- | --- |
| Tab lists | 10 | 1 | 11 |
| Tab selections | 13 | 1 | 14 |
| Clicks dispatched | 81 | 3 | 84 |
| Clicks not dispatched | 4 | 0 | 4 |
| Coordinate clicks | 0 | 0 | 0 |
| Arrow, Enter or Tab presses | 0 | 0 | 0 |
| Typing entries | 2 | 0 | 2 |
| Runtime typing characters | 1 | 0 | 1 |
| Lists opened | 12 | 0 | 12 |
| Dialogs opened | 13 | 0 | 13 |
| Dialogs closed with OK | 12 | 0 | 12 |
| Dialogs closed with Cancel | 0 | 0 | 0 |
| Prompts answered | 1 (Session Expired, OK) | 0 | 1 |
| Designer Saves | 3 | 0 | 3 |
| Form opens | 3 | 0 | 3 |
| Form closes | 1 | 0 | 1 |
| Runtime button clicks (ButtonSignIn2 once; menu Cart, Home, Sign In once each) | 1 | 3 | 4 |
| Navigations | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Finds | 81 | 0 | 81 |
| Targeted snapshots (succeeded / ref not found) | 84 / 4 | 0 | 84 / 4 |
| Untargeted snapshots (succeeded / too large or failed) | 15 / 2 | 4 | 19 / 2 |
| Waits | 1 | 3 | 4 |
| Screenshots (succeeded / failed) | 26 / 1 | 3 / 0 | 29 / 1 |
| "Ref not found" errors | 6 | 0 | 6 |
| Server-event errors | 0 | 0 | 0 |
| Console stop events | 1 | 0 | 1 |

### Worker-written file inventory (this task)
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (replaced the T8 pointer line and appended this T8 section; earlier entries otherwise unchanged).
- `evidence/EXP-125/t8-01-after-cart.png` (after the Cart click).
- `evidence/EXP-125/t8-02-after-home.png` (after the Home click; not re-read).
- `evidence/EXP-125/t8-03-after-menu-signin.png` (after the menu Sign In click).
- Earlier files unchanged.
- Browser-tool files under `evidence/playwright/` and the Claude tool-results folder (written by the tool; not read or searched by the worker).

### Deviations
- Header said T11; the bounded instruction (T8) was followed.
- Screenshot `t8-02` was taken but not re-read; its content is recorded from the snapshot taken immediately before it.
- The 3-second waits are fixed waits, not element-based settle checks; each post-wait snapshot showed the expected settled region.
- The Cart GridOrders was read from the accessibility tree and the screenshot; no rows were observed, but whether the data source holds rows was not checked (the brief forbids inspecting records beyond the grid).

### Cleanup inventory (so far)
- ButtonSignIn, ButtonHome, ButtonCart Enabled When: one `Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"` each (T2 to T4).
- Runtime state: Customer ID `1` in the runtime edit (unsaved runtime input; not a record change). Nothing saved at runtime. The runtime Form remains open for the T9 close.

### Final browser state (end of T8)
- **Web Client (tab 0, selected):** runtime FX_CustomerPortal open on the sign-in page; Customer ID edit holds `1`; header `1`; status bar `Sign In`; left menu enabled; no dialog, list or menu open; console 18 errors / 2 warnings.
- **Designer (tab 1):** not selected or read in this task; its last reading (T5) was FX_CustomerPortal open and clean, console 2 / 0.

### Next (not performed)
- T9 (runtime close through the Form-close control, save-prompt check, final audit) performed in the T9 section below. No further planned step remains; the next step is the operator's disposition.

## T9 (run R-20261020-205105-2ynw, cycle 14; header label T12; bounded instruction "Execute ONLY EXP-125 T9: runtime Form close and documentation-only final audit. This is the final planned task.")

Scope: one close of the runtime FX_CustomerPortal through the Web Client Form-close control; read-only Designer check; this documentation-only final audit. No Designer Save, no property edit, no builder or list, no Designer close or reopen, no runtime click or typing, no unload, no navigation, no re-login. The header's "T12" label is a controller label; the bounded instruction (T9) was followed.

### Sources reread
- `AGENTS.md`, in full (240 lines), at the start of this task.
- The record's section index (grep of headers) and the T8 section (the T8 figures were taken from that section, not re-derived).

### Pre-action state
- Tabs listed before any selection: tab 0 Web Client (`Mongoose`, runtime FX_CustomerPortal in its frame); tab 1 Designer (`...designer/default.aspx?MGForm=FX_CustomerPortal`).
- Web Client (tab 0, selected): runtime FX_CustomerPortal open on the sign-in page; Customer ID edit holds **`1`**; header shows **`1`**; left menu `Sign In`, `Home`, `Cart` enabled (not disabled); no dialog, no modal, no session-expiry state, no sign-in card. Console **18 errors, 2 warnings** (baseline for this task).
- Prerequisites met; the close was performed once.

### Close (Web Client Form-close control, once)
- Clicked the Form-close control `Close Panel FX_CustomerPortal` (ref f1e85, from the pre-action snapshot). Console **18 / 2** after the click.
- **Save prompt: none.** The find after the click returned no dialog, no `Save`/`Yes`/`No`/`Cancel` button, no unsaved-change text, no session or logout text. No prompt was answered (none appeared); no Yes was given.
- A fresh untargeted snapshot confirmed: **no FX_CustomerPortal tab** remains; the runtime region is empty; no dialog; Form-related toolbar buttons inactive (`Help Current Form` disabled); console **18 / 2**.
- Screenshot `evidence/EXP-125/t9-01-webclient-after-close.png` (read back). **Shows:** the Web Client with the Explorer panes and toolbar, an empty main region, no runtime Form, no dialog; status text `en-US` only. **Supports:** the runtime FX_CustomerPortal was closed and no runtime Form is open. **Does not prove:** whether the server side recorded the close as a Form close with no save (only the absence of a prompt and of the Form in the UI); the Customer ID `1` input was discarded (not observed directly).
- Observation: the portal notification banner that was visible in T1 is not visible in this screenshot or any snapshot since T1 attempt 2. The worker did not dismiss it in any task after T1 attempt 1 (the T1 close step was the one OK click on the expiry modal, and the T1 banner × click timed out). The banner's disappearance is recorded as an observation, not attributed to a worker action.

### Designer (read-only check)
- Selected tab 1 (succeeded). Find: `FX_CustomerPortal` tab selected (heading `FX_CustomerPortal`); toolbar `Save [disabled]`; `Regenerate Form [disabled]`; scope line `ScopeType: User / ScopeName: <signed-in user>` (name not copied); no dialog element. Targeted snapshot of the tablist: **console 2 errors, 0 warnings**.
- The Designer's Form was not closed, reopened, modified or saved. Designer state: FX_CustomerPortal open and clean.

### Console (tool header)
- Web Client: 18 / 2 before the close; 18 / 2 after the close click; 18 / 2 at the post-close snapshot; 18 / 2 at the screenshot's adjacent snapshot. Some tool outputs (the finds and the screenshot) do not report a count; the counts above are the ones the tool reported in adjacent outputs.
- Designer: 2 / 0 (the targeted tablist snapshot; the Designer tab's last reported count before this task was also 2 / 0 in T8's record).
- No count rose; no stop event in T9.

### Acceptance-check status (final, observed only; the worker does not declare acceptance)

**AC-1 (gate): supported with qualifications.** Sources reviewed at each task start (AGENTS.md in full in most tasks; attempt 4 reread lines 124 to 153 only, disclosed). Session usable at T5 to T9 (no expiry state seen after T1 attempt 1). User scope shown in the Designer status bar at every Designer read (T1 attempt 3 and 4, T2 to T5, T9). No runtime Form dirty: the runtime Form's toolbar Save was disabled at T1 attempt 2, T6 and T7–T8 snapshots, and the close raised no prompt (T9). FX_CustomerPortal open and clean in the Designer at T1 attempt 4, T2 to T5 and T9 (Save disabled). Handlers and variables as left by EXP-124: observed in T1 attempt 4 (Event Handlers: StdFormPredisplay SETVARVALUES(FX_Page=1); FX_SignInBtn seq 0 Collection Refresh `object2` and seq 1 SETVARVALUES(FX_Page=2); FX_SignInBtn2 SETVARVALUES(FX_Page=1); FX_HomeBtn SETVARVALUES(FX_Page=2); FX_CartBtn SETVARVALUES(FX_Page=3); Variables Form - Temporary FX_Count, FX_CustomerID, FX_Page). Primary as planned (FX_SignInBtn2, FX_HomeBtn, FX_CartBtn) and Enabled When blank: observed in T1 attempt 4 before any edit. Console counts recorded for each tab at each stage. Evidence: `t1-01`, `t1-02`, `t1r-01`, `t1r2-01`, `t1r3-01` to `t1r3-03`.
- Qualifications: (a) T1 was completed in four attempts across an operator recovery; (b) attempt 4 reread only lines 124 to 153 of AGENTS.md (the earlier full reread was in attempt 3's predecessor tasks, not in attempt 4); (c) the Web Client was not re-read in attempt 4; its gate state comes from attempt 3 (no runtime Form, no modal, 18 / 2); (d) attempt 1's Web Client console rise (8 to 17) was a stop event and is unexplained in the record; the operator ruled it a reload artifact and that ruling is preserved here, not reinterpreted; (e) the Web Client count moved from 17 / 3 to 18 / 2 between attempts without a worker action (unexplained).

**AC-2 (builder Enabled When, T2 to T4): supported as same-session UI observations, with qualifications.**
- ButtonSignIn (T2): built by editing the existing clause (no New); left Variable Value `FX_CustomerID` (exact entry offered and clicked); operator `<>` (offered options, in order: `=`, `<>`, `<=`, `>=`, `<`, `>`, `ELSE`); right Literal empty (displayed as `""`). Clause shown before OK: `#V(FX_CustomerID) <> "" |`. Designer-generated Enabled When text: **`Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"`**. Primary unchanged `FX_SignInBtn2`. One Save (toast; Save disabled after). Evidence: `t2-01` (builder at open), `t2-02` (before OK), `t2-03` (rows before Save), `t2-04` (Save response).
- ButtonHome (T3): same route and operator choice; clause `#V(FX_CustomerID) <> "" |`; generated text **`Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"`**; Primary `FX_HomeBtn` unchanged; one Save (toast). Evidence: `t3-01` to `t3-04`.
- ButtonCart (T4): same route; clause `#V(FX_CustomerID) <> "" |`; generated text **`Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"`**; Primary `FX_CartBtn` unchanged; one Save (toast). Evidence: `t4-01` to `t4-04`.
- Exactly three successful Designer Saves across T2 to T4 (T2, T3, T4), each with the toast `Form [FX_CustomerPortal] and global object(s) were saved.` and Save disabled afterwards. No Save was retried. The toast is the only Save evidence; it is not independent proof that a global object was changed, and no global object was edited.
- Corrections: zero field corrections recorded in T2 to T4.
- Qualifications: (a) the stored value is the builder's action form (`Enabled:#C(<button>), <condition>, "True"`), not the bare condition in the brief's example `#V(FX_CustomerID) <> ""`; the condition part is exactly as the example; whether the action-form storage is acceptable is for the operator to judge; (b) the right literal's displayed form is `""` (two quote characters), which the record treats as the empty literal; (c) the three Saves' responses were read from the toast and the adjacent state, not from a server log; (d) T2 to T4 screenshots `t2-03`, `t3-03`, `t4-03` and `t4-01` were not re-read in T9 (their content is recorded from the same-task readbacks).

**AC-3 (one close and reopen readback, T5): supported as a same-session readback, with a qualification.** After one Designer close (no save prompt) and one reopen (recent-forms entry, no prompt), the accessibility readback showed: ButtonSignIn Enabled When `Enabled:#C(ButtonSignIn), #V(FX_CustomerID) <> "", "True"`, Primary `FX_SignInBtn2`; ButtonHome `Enabled:#C(ButtonHome), #V(FX_CustomerID) <> "", "True"`, Primary `FX_HomeBtn`; ButtonCart `Enabled:#C(ButtonCart), #V(FX_CustomerID) <> "", "True"`, Primary `FX_CartBtn`; ButtonSignIn2 Primary `FX_SignInBtn`, Enabled When cell empty. Form open and clean (Save disabled; no dialog). Evidence: `t5-01` (after close), `t5-02` (reopened), `t5-03` (ButtonSignIn rows), `t5-04` (ButtonCart rows; read back, shows the Enabled When cell truncated on screen). Qualifications: (a) same session only; not cross-session, database-level or replay verification; (b) ButtonSignIn2 "unchanged" has no pre-edit baseline recorded in this run (its Primary and Enabled When were first read in T5), so "unchanged" rests on the absence of any recorded edit to it and on the T5 readback; (c) `t5-01` and `t5-02` were not re-read in T9.

**AC-4 (runtime, T6 to T9): observed, same session; the causal link is NOT established.**
- Initial (T6, Customer ID blank): the Form opened through the Web Client Select Form route (the Form menu was absent; the filter text `fx_item` pre-existed and was cleared before typing `FX_CustomerPortal`; the single matching row was double-clicked; OK not clicked). Visible region: sign-in page only (picture, `Customer ID` label, empty edit, `Sign In` button); home and cart controls absent from the accessibility tree. Header Customer ID display: no text. Customer ID edit: empty. Left menu `Sign In`, `Home`, `Cart`: all `[disabled]` in the accessibility tree and drawn pale. Sign-in button (ButtonSignIn2): enabled. Status bar text: not visible at T6 (recorded as not visible, not as an error). Evidence: `t6-01` (read back; shows the pale menu and the sign-in page).
- Sign-in (T7): the edit was clicked once and `1` typed once (the header and menu did not change before the click; the edit held `1`). ButtonSignIn2 clicked once. Result: visible region the home page (sign-in and cart controls absent); three tiles: `45.00 dumbbell 45 pound iron`, `6.99 eggs cage free`, `129.99 guitar natural acoustic` (tile pictures identified visually only); header Customer ID display `1` (attributed by position); status bar `Sign In (Object 1 of 3)`; left menu `Sign In`, `Home`, `Cart` enabled (accessibility and screenshot). No prompt or message. Evidence: `t7-01` (after typing; not re-read), `t7-02` (read back).
- Navigation (T8, each click once, each only when enabled, each followed by a 3-second wait and a fresh snapshot): (1) Cart → cart page, heading `Cart:`, GridOrders with columns Order Number, Item, Count, Customer ID and no drawn data rows, Checkout visible (not clicked), header `1`, status bar `Cart`; (2) Home → home page, the same three tiles, header `1`, status bar `Home`; (3) menu Sign In → sign-in page, edit holding `1`, sign-in button visible (not clicked), header `1`, status bar `Sign In`. Evidence: `t8-01` (read back), `t8-02` (not re-read), `t8-03` (read back).
- Close (T9): the runtime Form closed through the Form-close control, once, with no save prompt, leaving no runtime Form open. Evidence: `t9-01` (read back).
- Qualifications: (a) the enabled state of the menu was observed as accessibility `[disabled]` / enabled and as the screenshot's pale vs teal appearance; no menu control was used to test its enabling beyond the planned clicks; (b) the menu went from disabled (T6) to enabled (T7) across the sign-in action; the record did not isolate whether the variable change, the collection refresh or another handler caused it; (c) the three tiles' identities are visual (the pictures) plus the item text, which is read from the accessibility tree; (d) GridOrders showed no drawn rows; the data was not inspected beyond the grid; (e) the status-bar texts are the Web Client's status text as read; (f) the runtime observations do not establish that the Enabled When conditions themselves cause the enabling (see "Not established" below).
- Not established: whether the Enabled When conditions (as stored in the action form) are the cause of the disabled and enabled states. Testing that would require a control (for example a blank-Customer-ID comparison after a non-blank value, or a different variable) that was not part of the bounded runtime steps and was not performed.

**AC-5 (scope and prohibited actions): qualified; exact-count requirement NOT fully satisfied; operator disposition required.**
- Changed: only the Enabled When of ButtonSignIn, ButtonHome and ButtonCart (three Designer Saves, T2 to T4). No other handler, variable, binding, component, region value, Form property or global object was edited in the record. Expansion and selection of groups, the component tree and the Details panel were view-state operations.
- Prohibited actions not performed (per the recorded sequences): no Toolbox placement; no New in the builder (none clicked in T2 to T4); no copy or paste; no global object created or changed; no Regenerate; no unload; no Delete Form Definition; no Select Form OK (the T6 Select Form row was double-clicked; OK not clicked); no drag; no Undo; no runtime Save; no record change; no F4; no Refresh; no query control; no tile or grid-row click; no Checkout, Add To Cart or ButtonAddToCart click; no ButtonSignIn2 click other than the one T7 click; no typing outside EditCustID (`1`) and the Select Form filter (T6, the authorized route).
- Disclosed deviations from the letter of the brief (all recorded in their task sections): (1) T6 cleared the leftover Select Form filter text with Ctrl+A and Backspace (two key presses in that filter) and typed `FX_CustomerPortal` there; (2) T6 had one failed type call with a DOM id (no effect); (3) T1 attempt 1 clicked the Mongoose expiry modal's OK (the standing rule); (4) T1 attempt 4's stale-ref recovery in one case used a targeted snapshot and a find instead of one untargeted snapshot (step 60); (5) fixed 3-second waits (T7 and T8) instead of element-based settle checks; (6) the controller task labels in the headers did not match the bounded instructions in several tasks (T1 attempt 2 to T9); each bounded instruction was followed and the stop boundary respected; (7) the Designer snapshot of 70,615 characters (T1 attempt 1) and one 58,769-character snapshot (T1 attempt 4) were not returned inline and were not read.
- Exact-count status: the per-task counts for T1 attempt 1, T1 attempts 2 and 3 (small), T1 attempt 4, and T2 to T8 were **reconstructed from each task's own step sequence** in that task's section; they were not logged from a tool-call log during those tasks and were not independently recounted in T9. The T9 counts are exact for this task's own calls. No controller audit or tool log was available to this worker to reconcile against; the cumulative totals below are therefore **reconciled arithmetically from the recorded per-task figures**, not from an independent source. This is the reason AC-5's exact-count requirement is qualified.
- Repository confinement: supported by the worker inventory below; the harness and the operator's Git review are authoritative.

### Browser-action audit, this task (T9, exact)
| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selections | 2 (tab 0 Web Client, tab 1 Designer; both succeeded) |
| Clicks dispatched | 1 (Form-close control, once) |
| Clicks not dispatched | 0 |
| Coordinate clicks | 0 |
| Arrow, Enter or Tab presses | 0 |
| Key presses (non-click) | 0 |
| Typing | 0 |
| Lists opened | 0 |
| Dialogs opened / closed | 0 / 0 |
| Prompts | 0 (no save prompt on the close; none answered) |
| Designer Saves | 0 |
| Form closes | 1 (runtime) |
| Form opens / reopens | 0 |
| Runtime clicks (other than the close) | 0 |
| Navigations / re-logins | 0 / 0 |
| Waits | 0 |
| Finds | 2 |
| Untargeted snapshots (succeeded) | 2 |
| Targeted snapshots (succeeded / ref not found) | 1 / 0 |
| Screenshots (succeeded / failed) | 1 / 0 |
| Ref-not-found errors | 0 |
| Server-event errors | 0 |
| Console stop events | 0 |
| Console readings | Web Client 18 / 2 (before, after the click, post-close snapshot); Designer 2 / 0 |

### Cumulative browser-action audit (T1 attempts 1 to 4 and T2 to T9)
Basis: the per-task figures recorded in each task section. Figures for T1 attempt 1, T1 attempt 4 and T2 to T8 are **reconstructed** from those sections (not from a tool log); T9 is exact for this task. The totals are arithmetic sums of the recorded figures.

| Category | Total | Basis |
| --- | --- | --- |
| Tab lists | 12 | reconstructed + exact (T9) |
| Tab selections | 16 | reconstructed + exact (T9) |
| Clicks dispatched | 85 | reconstructed 84 (T1 15 incl. attempts 1 and 4; T2 17; T3 17; T4 17; T5 10; T6 3; T7 2; T8 3) + exact T9 1 |
| Clicks not dispatched | 4 | reconstructed (T1 attempt 1: 2 timeouts; attempt 4: 2 ref-not-found) |
| Coordinate clicks | 0 | recorded as 0 in every task |
| Arrow, Enter or Tab presses | 0 | recorded as 0 in every task |
| Key presses (non-click) | 2 | T6 (Ctrl+A and Backspace in the Select Form filter) |
| Typing entries | 2 | T6 (Select Form filter `FX_CustomerPortal`), T7 (`1` in EditCustID) |
| Typed characters at runtime | 1 | T7 |
| Lists opened | 12 | T2, T3, T4 (four each) |
| List options chosen | 12 | T2, T3, T4 (Variable Value; FX_CustomerID; `<>`; Literal, per task) |
| Dialogs opened | 13 | T2, T3, T4 (four each, incl. parent and builder) and T6 (Select Form, once) |
| Dialogs closed with OK | 12 | T2, T3, T4 (four each) |
| Dialog closed by row double-click | 1 | T6 (Select Form; not OK) |
| Dialogs closed with Cancel | 0 | none |
| Prompts answered | 1 | T1 attempt 1 (Mongoose "Session Expired", OK). No save prompt in T5 or T9; no other prompt |
| Designer Saves | 3 | T2, T3, T4 (each one toast; Save disabled after) |
| Form menu opens | 2 | T1 attempt 4 and T5 |
| Form opens | 3 | Designer: T1 attempt 4 (recent-forms) and T5 reopen; runtime: T6 (Select Form) |
| Form closes | 2 | Designer: T5 (Form-tab control, no prompt); runtime: T9 (Form-close control, no prompt) |
| Runtime button activations | 4 | ButtonSignIn2 once (T7); menu Cart, Home, Sign In once each (T8) |
| Runtime clicks other than activations | 2 | T7 EditCustID click; T9 Form-close control (counted in the close) |
| Waits | 4 | T7 (1 × 3 s), T8 (3 × 3 s) |
| Finds | 83 | reconstructed (T1 att.1–4: 2+2+2+17; T2 16; T3 13; T4 14; T5 13; T6 2) + exact T9 2 |
| Targeted snapshots (succeeded / ref not found) | 85 / 4 | reconstructed + exact T9 (1) |
| Untargeted snapshots (succeeded / failed or too large) | 21 / 2 | reconstructed (9/2 through T1; 3 in T6; 3 in T7; 4 in T8) + exact T9 (2) |
| Screenshots (succeeded / failed) | 30 / 1 | reconstructed (29/1 through T8) + exact T9 (1) |
| Ref-not-found errors | 6 | reconstructed, all in T1 attempt 4 (4 on snapshot calls, 2 on clicks); recovery used one fresh snapshot each, with the step-60 deviation above |
| Server-event errors | 0 | recorded in every task |
| Console stop events | 1 | T1 attempt 1 (8 to 16, then 17, after the modal OK) |
| Re-logins | 0 | recorded in every task |

Reconciliation note: the figures above agree with the cumulative totals recorded at the end of T8 (84 clicks dispatched, four runtime activations, three Designer Saves, 81 finds, 84 succeeded targeted snapshots, 19 succeeded untargeted snapshots, 29 succeeded screenshots); T9 adds one click, two finds, two untargeted snapshots, one targeted snapshot and one screenshot. No controller audit was available to confirm these totals independently.

### Worker-written file inventory (all tasks, this run)
Repository files written by the worker:
- `experiments/EXP-125-hello-world-part-8-phase-6b-menu-enabled-when-runtime-navigation.md` (created in T1; updated in every later task).
- `evidence/EXP-125/` screenshots (30 PNG files, written by the worker's screenshot calls):
  - T1: `t1-01-webclient-session-expired-modal.png`, `t1-02-webclient-after-ok-console-rise.png`, `t1r-01-webclient-runtime-form-open.png`, `t1r2-01-designer-no-form-open.png`, `t1r3-01-designer-form-opened-recent.png`, `t1r3-02-event-handlers.png`, `t1r3-03-buttonsignin-behavior-enabledwhen.png`
  - T2: `t2-01-buttonsignin-builder-at-open.png`, `t2-02-buttonsignin-builder-before-ok.png`, `t2-03-buttonsignin-behavior-rows-before-save.png`, `t2-04-save-response-state.png`
  - T3: `t3-01-buttonhome-builder-at-open.png`, `t3-02-buttonhome-builder-before-ok.png`, `t3-03-buttonhome-behavior-rows-before-save.png`, `t3-04-save-response-state.png`
  - T4: `t4-01-buttoncart-builder-at-open.png`, `t4-02-buttoncart-builder-before-ok.png`, `t4-03-buttoncart-behavior-rows-before-save.png`, `t4-04-save-response-state.png`
  - T5: `t5-01-after-close-no-prompt.png`, `t5-02-reopened-form-clean.png`, `t5-03-buttonsignin-behavior-rows-after-reopen.png`, `t5-04-buttoncart-behavior-rows-after-reopen.png`
  - T6: `t6-01-runtime-signin-menu-blank.png`
  - T7: `t7-01-customer-id-entered.png`, `t7-02-after-signin-home.png`
  - T8: `t8-01-after-cart.png`, `t8-02-after-home.png`, `t8-03-after-menu-signin.png`
  - T9: `t9-01-webclient-after-close.png`
Not repository files written by the worker (tool-generated; not read or searched by the worker): page snapshot and console log files under `evidence/playwright/` written by the browser tool; oversized Designer and Web Client snapshot outputs saved by the tool to the Claude tool-results folder outside the repository (T1 attempt 1, T1 attempt 4, T2 to T9 where noted).
No other repository file was written by the worker in this run.

### Cleanup inventory (final)
- Intentional persistent changes (Designer, saved): **ButtonSignIn, ButtonHome and ButtonCart Enabled When** — one entry each, `Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"` (T2, T3, T4). Nothing else was intentionally changed. The worker did not clear or edit these; any cleanup to blank them is an operator action through the same Designer route.
- Runtime: nothing created, saved or deleted. Customer ID `1` was entered into the runtime edit (an unsaved runtime input) and the runtime Form was closed without a save prompt; no record was changed.
- Designer view state only (not saved properties): the Details panel was expanded; component groups were expanded; the Components tree was expanded; ButtonSignIn2 was the last component selected.
- No Form, template, handler, variable, binding, global object (string, image, theme, component class) or IDO was created or changed.

### Final browser state (end of T9)
- **Web Client (tab 0, selected):** no runtime FX_CustomerPortal Form open; main region empty; no dialog, list or menu open; no unsaved change; console **18 errors, 2 warnings**. Screenshot `t9-01` shows this state.
- **Designer (tab 1):** FX_CustomerPortal open and clean (Save disabled), User scope, no dialog; Form not modified, closed or reopened in this task; console **2 errors, 0 warnings**.
- No prompt, list, editor or dialog is left open by the worker in any task.

### Findings (observed only; none is classified as verified across sessions)
1. Designer: Enabled When for ButtonSignIn, ButtonHome and ButtonCart is set to the action form `Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"`; the Primary events are unchanged. Observed, same session, and after one close and reopen (T5).
2. Runtime with Customer ID blank: the three menu buttons are disabled in the accessibility tree and drawn pale. Observed, same session (T6).
3. Runtime after Customer ID `1` and one ButtonSignIn2 click: home page, three tiles, header `1`, menu enabled. Observed, same session (T7).
4. Runtime navigation: Cart, Home and Sign In each switch the visible region as described above. Observed, same session (T8).
5. Runtime close: no save prompt; no runtime Form remains open (T9).
6. Web Client console: 18 / 2 from T1 attempt 2 onward, with an unexplained 17 / 3 to 18 / 2 change between attempts; the T1 attempt 1 rise (8 to 17) is a recorded stop event whose cause the record does not establish (operator ruling: reload artifact; preserved).
7. The portal notification banner was not visible from T1 attempt 2 onward; the worker did not dismiss it after attempt 1.

### Open items requiring operator disposition (not resolved by the worker)
1. **Experiment acceptance** is not declared. The worker records the observations above and leaves acceptance to the operator.
2. **AC-5 exact-count requirement** is qualified: earlier per-task counts are reconstructed, and no controller audit or tool log was available to reconcile them.
3. **Stored Enabled When form:** the Designer stores the action form (`Enabled:#C(...), <condition>, "True"`), not the bare condition in the brief's example. Acceptability is for the operator.
4. **Causal link:** whether the Enabled When conditions cause the disabled and enabled menu states is not established by these runtime observations; no control test was part of the steps.
5. **ButtonSignIn2 baseline:** no pre-edit readback of ButtonSignIn2 exists in this run; "unchanged" rests on the absence of recorded edits and the T5 readback.
6. **Web Client console:** the T1 attempt 1 rise (8 to 17) needs the operator's diagnosis from the tool-written console log; the 17 / 3 to 18 / 2 change between attempts is also unexplained.
7. **Status bar at T6** was not visible; the T7 and T8 status texts are the only recorded status readings.
8. **Cart data:** GridOrders showed no drawn rows; whether the data source holds rows was not checked.
9. **Tile identities** are visual only; item text is from the accessibility tree.
10. **Controller labels:** the task headers' labels did not match the bounded instructions in several tasks; recorded as cosmetic, the bounded instruction was followed each time.
11. **Designer snapshot size:** two oversized snapshots were saved by the tool and not read; the sizes are recorded above.

## Outcome (operator, 2026-10-23)

Accepted (observed), with qualifications. **Hello World Part 8 Phase 6 is complete on FX_CustomerPortal (User scope): ButtonSignIn, ButtonHome and ButtonCart have Enabled When `#V(FX_CustomerID) <> ""`, stored by the Designer in the builder's action form `Enabled:#C(<button>), #V(FX_CustomerID) <> "", "True"`. All three read back after one ordinary close and reopen (T5). At runtime the left menu is disabled while Customer ID is blank. Customer ID 1 plus one ButtonSignIn2 click shows the home page with three FX_Items tiles and enables the menu. Cart, Home and Sign In each switch the visible region.** Run R-20261020-205105-2ynw (12 of 12 worker tasks: T1 took four gate attempts, then T2 to T9 took one task each; three Designer Saves (T2, T3, T4), each with the saved toast; no runtime save).

- Screenshots viewed by the operator: `t6-01` (runtime sign-in page with the menu drawn pale, Customer ID blank); `t7-02` (home page after Customer ID 1 + ButtonSignIn2: tiles dumbbell 45.00, eggs 6.99, guitar 129.99; header 1; menu enabled); `t8-01` (cart page: GridOrders columns, no rows, Checkout).
- Operator rulings:
  1. T1 attempt 1: an idle runtime Form showed Mongoose "Session Expired". The worker's OK click reloaded the page, and the Web Client console rose from 8 to 17. Ruling: reload artifact. The log re-lists the "Permissions policy violation: unload is not allowed" messages and shows no server error. The 17/3 to 18/2 drift between attempts is accepted as the same kind of noise.
  2. T1 attempt 2: the operator's re-login reopened the runtime Form (the portal's favorite context), so the gate stopped. The operator closed that runtime Form manually.
  3. T1 attempts 3 and 4: after the re-login the Designer had FX_CustomerPortal closed. The worker reopened it from the recent forms and the gate passed with all of EXP-124's state. These T1 deviations are accepted.
  4. Merging T6 and T7 was allowed as a fallback but was not needed.
  5. Acceptance was decided by the operator on 2026-10-23.
- Findings (observed):
  1. The Edit Condition builder, used on the existing blank clause (no New), offers the operators `=`, `<>`, `<=`, `>=`, `<`, `>`, `ELSE`. An empty Literal right side is shown as `""`. The Designer stores Enabled When in the action form `Enabled:#C(comp), cond, "True"`.
  2. A re-login reopens the runtime Form from the portal's favorite context and closes the Designer Form.
  3. An idle Web Client runtime Form shows "Session Expired". Its OK reloads the page and re-lists old console errors.
  4. The Web Client Form menu may have no recent entry. Select Form works: clear leftover filter text (Ctrl+A, Backspace), type the Form name, then double-click the row.
  5. The Enabled When conditions, the FX_Page Set Values handlers (EXP-124) and the VisibleWhen regions (EXP-123) work together at runtime as the tutorial describes.
- Qualifications accepted by the operator:
  - The cumulative counts were reconstructed from each task's own step list, not from a tool log.
  - There was no reverse test, so the run does not prove that Enabled When caused the menu's state.
  - ButtonSignIn2 had no readback before the edits.
  - Waits were fixed at 3 seconds.
  - The controller's task labels did not match the bounded instructions (cosmetic).
  - The AGENTS.md reread in T1 attempt 4 was partial.
  - The status bar was not read at T6.
  - The cart data source was not checked.
- Record hygiene: a grep for the account's email domain and for ScopeName values found no account name in this record. The status bar in the screenshots still shows it, as in earlier experiments.
- Confinement (git status): the run wrote only `evidence/EXP-125/` and this record in the repository, plus the tool's usual files under `evidence/playwright/`. `tools/claude-harness/briefs/EXP-119.brief.json` stays untracked and untouched.
- Cleanup inventory (Phase 6b, FX_CustomerPortal, User scope): Enabled When on ButtonSignIn, ButtonHome and ButtonCart. Nothing was created or saved at runtime. No global object was created or changed.
- Limits: same-session UI evidence only (the Designer readback after reopen; one runtime pass). Not verified across sessions.
- Next: EXP-126, Part 8 Phase 7: the Add To Cart pipeline and drag/drop (transcript 16:54 onward; `docs/mongoose/transcripts/hello-world-pt8.md` Phase 7 from line 188).
