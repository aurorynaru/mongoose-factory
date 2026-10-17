# EXP-110 - Hello World Part 7 section 7: menu Buttons on FX_CustomerPortal

Status: **in progress, blocked at T2.** T1 complete. T2 (ButtonSignIn and string FX_sSignIn) ended blocked by a server-event error on the Designer Save (see T2). T3 to T5 not run.
Date: 2026-10-18 (local UTC+8). Browser tool logs are stamped 2026-10-17T16:18Z to 16:21Z.
Run: R-20261018-001834-0Gr6, cycle 0. Worker session f8b4fbff-bfee-4723-a4d5-4c32b7e305a3. Task message a3f4f917-4ac4-4f2e-ad95-2240f9662a68.
Environment: Mongoose 2026.10 demo, config group G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT, User editing scope.
Depends on: EXP-109 (FlexLayoutMain six regions), EXP-106 (FX_sCustomerPortal, FX_WhiteHeader), EXP-107 (header user region).

## Goal

Follow `docs/mongoose/transcripts/hello-world-pt7.md` Section 7 (10:54-12:08) on the User-scope Form FX_CustomerPortal. Place three Buttons, one per task, into `FlexLayoutMain > Region00: menu`, top to bottom:

| Task | Name | Caption string ID (value) | Theme Class | Size |
| --- | --- | --- | --- | --- |
| T2 | ButtonSignIn | FX_sSignIn (Sign In) | FX_BlueButton | Width 15, Height 2 |
| T3 | ButtonHome | FX_sHome (Home) | FX_BlueButton | Width 15, Height 2 |
| T4 | ButtonCart | FX_sCart (Cart) | FX_BlueButton | Width 15, Height 2 |

Transcript note (Section 7 table, lines 205-217): the spoken Width/Height for Button Sign In may be reversed. The brief sets 15; 2 for all three; the transcript's Sign In values are not used. No click events, navigation, visibility conditions or page switching are assigned. No Regenerate.

## Sources read (T1, before any browser action)

- `AGENTS.md`
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 205-217 (Section 7 block; carries the 10:54-12:08 range). No other transcript lines read.
- `recipes/components/add-component-from-toolbox.md`
- `recipes/session/session-expiry-and-stale-designer.md`
- Outcome (operator) sections only: EXP-106 (from line 865), EXP-107 (from line 868), EXP-109 (from line 760).

No other record was read.

## T1 starting state (read-only gate)

- Browser tabs listed before any selection: tab 0 is the Web Designer (Infor Mongoose Application Development Framework, `WSWebClient/designer`); tab 1 is the portal tab titled "Mongoose". Tab 0 was then selected.
- Tab 1 (Web Client) was **not selected or screenshot-inspected** in T1. Its identity rests on title and URL only.
- Designer on entry: no Form open. Canvas and Properties empty, Save and Undo disabled, status bar `[ ScopeType: User / ScopeName: <operator account> ]`. Evidence: `evidence/EXP-110/t1-01-designer-gate-before-open.png`.
- Opened FX_CustomerPortal once through the **Form menu recent-forms entry** (not Select Form). Result: Properties Name FX_CustomerPortal, Version "User version for user ...", Form Type Flex, Save disabled, Undo disabled, no dialog open. Evidence: `evidence/EXP-110/t1-02-gate-form-open-clean-canvas.png`.
- No session-expiry modal, logout card or sign-in page appeared. No server-event error appeared.

## Components tree (T1, view only)

Read from the Details > Components grid after its Expand view button. Nesting inferred from row order; the screenshot shows only the top rows.

```
flexlayoutPane_FX_CustomerPortal (FlexLayout)
  Region00: header
    FlexLayoutHeader (FlexLayout)
      Region00: header
        StaticHeader (Static)                      caption FX_sCustomerPortal (EXP-106)
      Region01: user
        StaticCustIcon (Static)                    (EXP-107)
        StaticCustID (Static)                      (EXP-107)
  Region01: main
    FlexLayoutMain (FlexLayout)
      Region00: menu                               EMPTY (no Buttons yet)
      Region01: spacer1
      Region02: signinpage
      Region03: homepage
      Region04: cartpage
      Region05: spacer2
  Region02: footer
    FlexLayoutFooter (FlexLayout)
      Region00: UNKNOWN0                           see open question 1
```

Buttons placed so far: **none** (T1 places none).

**Menu region on the canvas:** the left column of the main area, x about 258 to 406 CSS px in `t1-02` (from the canvas left edge to the first vertical dotted divider at x about 406). Canvas dividers at about x 406, 449, 669, 886 and 1104 give six columns in tree order: menu, spacer1, signinpage, homepage, cartpage, spacer2. The header strip is above the main area (y about 100 to 173).

## String collision check (T1, read-only)

Opened Edit > String, which opens a "Global Objects" dialog with a Strings group and a name filter. Each filter needed a key event to apply; a programmatic fill left the full list in place.

| Filter ID | Expected | Observed | Evidence |
| --- | --- | --- | --- |
| FX_sCustomerPortal (positive control) | one row | **one row**, gridcell `FX_sCustomerPortal` (accessibility snapshot) | snapshot only |
| FX_sSignIn | no row | **no row** (grid empty after filter, no gridcell match in the dialog) | accessibility find only |
| FX_sHome | no row | **no row** (same method) | accessibility find only |
| FX_sCart | no row | **no row** (grid visibly empty) | `t1-04-string-collision-check-fx_scart-empty.png` |

The dialog was closed with **Cancel** (no OK). Save remained disabled afterwards. No string was created, edited or selected. Strings were not read for value.

## Findings (observed)

1. The Global Objects Strings filter did not apply to a programmatic fill (the unfiltered list stayed). It applied after key events (Backspace and a retyped letter, then slowly typed text). Enter was not used, to avoid the dialog's default OK.
2. The Components grid's Expand view button expanded all regions. The Details panel was expanded to show the grid; it is left expanded on the Components tab (view state only).
3. The browser tool saved most snapshots to `evidence/playwright/` automatically, so inline snapshots were used for reading state.

## Open questions (T1)

1. **Footer region "Region00: UNKNOWN0".** It appears after FlexLayoutFooter and, by row order, is its child. The brief expects only header and footer components. Observed only; this run did not change it. Operator to confirm whether it predates EXP-110 (not checked; the EXP-109 and other records were not read beyond their Outcome sections).
2. The footer row's indentation is not confirmed visually; `t1-03` shows only the top of the tree.
3. The Web Client tab (tab 1) was not inspected; no expiry was observed in the Designer.
4. The FX_sSignIn and FX_sHome absence rests on the accessibility tree, not a screenshot.

## Action audit (cumulative through T1)

| Action | Count |
| --- | --- |
| Tab list / tab select | 1 / 1 (select of tab 0) |
| Inline untargeted snapshots | 13 |
| Snapshot files auto-saved by the browser tool | 12 (see inventory) |
| Screenshots | 4 |
| Reference clicks | 8 (Form menu 1; FX_CustomerPortal recent-forms entry 1; Details Expand Panel 1; Components tab 1; Components Expand 1; Edit menu 1; Edit > String item 1; Global Objects Cancel 1) |
| Coordinate clicks | 0 |
| Typed entries (filter text) | 4 (FX_sCustomerPortal, FX_sSignIn, FX_sHome, FX_sCart) |
| Key presses | 5 (Backspace 1; "l" 1; Control+a 3; all in the filter box) |
| Finds | 4 |
| Waits | 1 (2 s) |
| Toolbox selections | 0 |
| Placement clicks | 0 |
| Undo / Redo | 0 / 0 |
| Drags | 0 |
| Form opens (recent-forms) | 1 |
| Form closes / reopens | 0 / 0 |
| Designer Saves | 0 |
| Save prompts | 0 |
| String creations / String editor opens / String editor OK | 0 / 0 / 0 |
| Global Objects dialog opened / closed with Cancel | 1 / 1 |
| Prompts answered | 0 |
| Regenerate / Delete Form Definition / Select Form OK | 0 / 0 / 0 |
| Server-event errors | 0 |
| Re-logins / session expiry seen | 0 / none |
| Checkout, FormSync, deployment, unload, runtime action | 0 |

Note: the browser tool's reported code for the recent-forms and String menu clicks referred to Ext menu-item element IDs. The targets were the refs from the most recent snapshot, not IDs written by the worker.

## Worker-written file inventory (T1)

Written by the worker:

- `experiments/EXP-110-hello-world-part-7-section-7-fx-customer-portal-menu-buttons.md` (this record; created in T1)
- `evidence/EXP-110/t1-01-designer-gate-before-open.png`: Designer before opening the Form; no Form loaded; User scope in the status bar.
- `evidence/EXP-110/t1-02-gate-form-open-clean-canvas.png`: FX_CustomerPortal open, Save disabled, header with Customer Portal caption and icon, main area with five dividers; menu column left of the first divider.
- `evidence/EXP-110/t1-03-components-tree-and-menu-region.png`: Components tree (top rows: flexlayoutPane, FlexLayoutHeader, its regions); the lower rows are scrolled out of view.
- `evidence/EXP-110/t1-04-string-collision-check-fx_scart-empty.png`: Global Objects dialog, Strings filter FX_sCart, empty list; the FX_sCustomerPortal and FX_sSignIn/FX_sHome results are not in this image.

Generated by the browser tool on the worker's calls (not written by a worker command; listed for completeness):

- `evidence/playwright/page-2026-10-17T16-19-03-712Z.yml` through `page-2026-10-17T16-21-23-124Z.yml`: 12 snapshot files (timestamps: 16-19-03-712Z, 16-19-11-923Z, 16-19-23-576Z, 16-19-28-018Z, 16-19-33-321Z, 16-19-59-073Z, 16-20-04-638Z, 16-20-18-289Z, 16-20-46-945Z, 16-20-59-271Z, 16-21-06-531Z, 16-21-23-124Z).
- `evidence/playwright/console-2026-10-17T16-18-52-454Z.log`: console log written on the tab listing.

No other file was written.

## Acceptance checks (T1 status)

- **AC-1** (partly met in T1): sources read before browser action (yes); session usable (Designer usable, no expiry seen; tab 1 not inspected); User scope (status bar); FX_CustomerPortal open and clean (Name, Save disabled); six FlexLayoutMain regions and empty menu region in the tree and on the canvas; string check (FX_sCustomerPortal found; FX_sSignIn, FX_sHome and FX_sCart absent, with the last one screenshotted and the first two read from the accessibility tree).
- **AC-2 to AC-5:** not yet applicable to T1 (no Buttons, strings or Saves created). AC-4 checked for T1: no change made, no Save, no global object created.

## Final state (end of T1)

- Designer: FX_CustomerPortal open, User scope, clean (Save and Undo disabled). No Form dialog, no open menu, no unsaved change. Global Objects dialog closed with Cancel.
- Components tree and canvas unchanged from the gate. No Buttons. No strings created.
- Details panel left expanded on the Components tab (view state).

## T2 - Button 1: ButtonSignIn, caption string FX_sSignIn (blocked at Save)

Run R-20261018-001834-0Gr6, cycle 1, task T2 (worker session f8b4fbff-bfee-4723-a4d5-4c32b7e305a3, task message 92f63e39-51a9-4e27-b738-308f5dd6d3c6). Tool stamps 2026-10-17T16:24Z to 16:31Z.

### Sources (start of T2)

AGENTS.md, hello-world-pt7.md lines 205-217, add-component-from-toolbox.md and session-expiry-and-stale-designer.md were re-read. The EXP-109, EXP-106 and EXP-107 Outcome sections were not re-read; they were read in T1 and carried forward.

### Gate (fresh snapshot, tab 0 selected after the tab list)

FX_CustomerPortal open; User scope in the status bar; Save and Undo disabled; no dialog; Region00: menu empty. No T1 string check was repeated, as instructed.

### Steps

1. **Toolbox:** Button row clicked once (ref e91, toolbox selection 1).
2. **Placement:** one canvas click at (330, 230), coordinate click 1, inside the left menu column below its top edge. Result: `button1_USER` (PushButton, Container FlexLayoutMain). The tree row sits under `Region00: menu`, indented deeper than `Region01: spacer1`. Later, Flex Attributes read `Index: 0 Target: menu`. No Undo was needed. Evidence `t2-01`.
3. **Name:** value cell clicked, then one plain fill `ButtonSignIn` and Tab. Name row and tree show `ButtonSignIn`.
4. **Caption, first attempt (no effect):** ten keystrokes `FX_sSignIn` were sent with the Caption list closed (after an Escape). The field stayed empty and the Name was unchanged. Those keys reached no field.
5. **Caption, second attempt (wrong commit):** the Caption value cell was clicked to open the list. Typing `FX_sSignIn` key by key showed `FX` then `FX_sSignIn` in the field. The list did not filter; its first row, `ApplyFullTextIndexScriptQuestion`, was highlighted. Tab then committed `ApplyFullTextIndexScriptQuestion` (an existing string) instead of the typed ID. The canvas label showed that string's message text. No string was edited. Evidence `t2-02` to `t2-06`.
6. **Caption correction (the one allowed correction for this field):** the list was reopened, the text selected with Ctrl+A, and `FX_sSignIn` retyped key by key. The field was then left by clicking the neutral Description row, not by Tab. The committed Caption reads `FX_sSignIn`. Evidence `t2-07`, `t2-08`. This is a deviation from the brief's Tab rule.
7. **String creation:** the Caption ellipsis was clicked once. Prompt (verbatim): `String FX_sSignIn does not exist. Create it?`. Answered **Yes** once. The String editor showed Name `FX_sSignIn` and a pre-filled String Value `FX_s Sign In` (recorded). Its value was replaced by one plain fill `Sign In` and Tab, verified, and OK clicked once. Version: User. Evidence `t2-09` (prompt), `t2-10` (editor before OK).
8. **Theme Class:** the Appearance group was expanded (single click selected it; double-click expanded it). The Theme Class list had one entry, `FX_BlueButton`. Clicked, then Tab. The grid shows `FX_BlueButton`.
9. **Size:** the Layout group was expanded (double-click). Unit `Char`; Size row `14.25; 1.89`; Lock Size `False`. Size was double-clicked to show Width and Height sub-rows. Width: plain fill `15` and Tab (shows `15`). Height: plain fill `2` and Tab (shows `2`). The Size summary row still reads `14.25; 1.89` in the snapshots taken after the entries, and in the post-error screenshot; it was not seen to refresh before the Save.
10. **Designer Save (one):** the Save response was the server-event error dialog: `The server event processing returned an error. If this persists, contact your system administrator.` (OK only). Evidence `t2-11`. Per the server-event rule: OK clicked once; no retry; no second Save; stop blocked. Evidence `t2-12` shows the end state.

### Blocker

The server-event error on Save is the stop condition for T2. The Designer is left with unsaved changes (Save enabled, see end state). Not verified: whether any part of the Save persisted (the string, the Caption, the Theme Class, the Size), and what caused the error. The operator needs to decide the Designer reload and whether to discard or re-apply these edits. T3 was not started.

### Observed in T2 (same session only)

- The Caption list ignores typed text as a filter. A highlighted first row is committed by Tab (EXP-106 finding 2 holds, and the first row is what is committed when the list is open). Typing with the list closed does nothing.
- Clicking a neutral Properties row (Description) left the typed Caption text in place, so blur was a working alternative to Tab (single case).
- Opening a Caption list made the accessibility snapshot exceed the output limit (about 784k characters). The tool saved that output to a file outside the repository that the worker cannot read.
- After the String editor is created, the Caption canvas label showed the raw ID `FX_sSignIn`, not `Sign In`, before the Save.
- The Size summary row did not update to `15; 2` in the same session. Width and Height sub-rows show 15 and 2.
- Stray keystrokes (ten, `FX_sSignIn`, sent while focus was not in an editor) changed no visible state. Evidence: the Name and tree were unchanged afterwards.
- The page console error count rose from 2 at the start of T2 to 5 after the Save. Console inspection is out of scope, so the entries were not read.

### End state (T2)

FX_CustomerPortal open, User scope. Unsaved changes present: Save button active in the accessibility tree and the Save icon is dark; Undo enabled. No dialog, menu, String editor or prompt open. The server-event error dialog was dismissed (OK once). Components tree: `Region00: menu` now contains `ButtonSignIn` (PushButton, Container FlexLayoutMain), above `Region01: spacer1`; no other component changed in the tree. Button properties in the grid: Name `ButtonSignIn`, Caption `FX_sSignIn`, Theme Class `FX_BlueButton`, Width 15, Height 2 (sub-rows). Evidence `t2-12`.

### Evidence (T2, worker-written)

- `evidence/EXP-110/t2-01-button-placed-in-menu-region.png`: after placement and Name entry (later state). Shows the blue button in the left column top area; tree row `ButtonSignIn`/`button1_USER` indented under `Region00: menu`; Properties Name `button1_USER`, Caption empty. Proves placement under the menu region (Flex Attributes confirmed later in text). Does not prove any persisted state.
- `evidence/EXP-110/t2-02-caption-field-state-after-escape.png`: Caption combobox empty, Name `ButtonSignIn`, no list open. Stray keystrokes had no visible effect.
- `evidence/EXP-110/t2-03-caption-typed-fx_ssignin-before-tab.png`: Caption still empty after the stray keystrokes. Shows that the keys did not reach the field.
- `evidence/EXP-110/t2-04-caption-list-check-after-fx.png`: Caption shows `FX` with the list open; first row shaded. Shows the unfiltered list.
- `evidence/EXP-110/t2-05-caption-typed-fx_ssignin-list-check.png`: Caption shows `FX_sSignIn`; list open, first row shaded, unfiltered.
- `evidence/EXP-110/t2-06-caption-after-tab-verify.png`: after Tab, Caption shows `ApplyFullTextIndexScriptQuestion` (wrong commit); canvas label shows that string's message text.
- `evidence/EXP-110/t2-07-caption-correction-typed-fx_ssignin-no-tab.png`: correction in progress; Caption input shows `FX_sSignIn`, list open with the first row highlighted.
- `evidence/EXP-110/t2-08-caption-after-blur-verify.png`: Caption committed `FX_sSignIn` after the neutral-row click; canvas label `FX_sSignIn`.
- `evidence/EXP-110/t2-09-creation-prompt-string-fx_ssignin.png`: prompt `String FX_sSignIn does not exist. Create it?` (Yes/No) over the String editor header.
- `evidence/EXP-110/t2-10-string-editor-value-sign-in-before-ok.png`: String editor: Name `FX_sSignIn`, String Value `Sign In`, Description empty, Version User; OK not yet clicked.
- `evidence/EXP-110/t2-11-save-response-after-button-signin.png`: Save response error dialog over the Designer; Properties show Name, Caption `FX_sSignIn`, Theme Class `FX_BlueButton`, Width 15, Height 2; Size summary `14.25; 1.89`. Shows the error text; does not show why it occurred.
- `evidence/EXP-110/t2-12-after-error-ok-save-state.png`: after OK; no dialog; Save icon appears enabled; Properties unchanged. The accessibility tree also showed Save active (not disabled).

Deviation: the brief asked for named screenshots only (placement, prompt, String editor, Save response). Eight further captures (`t2-02` to `t2-08`, `t2-12`) were taken to show the Caption state; they are recorded here as extra.

### T2 action audit (this task)

| Action | Count |
| --- | --- |
| Tab list / tab select | 1 / 1 (select of tab 0) |
| Inline snapshots, successful | 23 (one is the fresh recovery after a Ref-not-found error) |
| Snapshot attempts failed | 1 (output too large, Caption list open) |
| Screenshots | 12 (4 named, 8 extra; see deviation) |
| Successful reference clicks | 20 (of which double-clicks 3: Appearance, Layout, Size) |
| Failed reference clicks | 1 (Ref e1397 not found after the Caption list changed) |
| Coordinate clicks | 1 (canvas placement at 330, 230) |
| Toolbox selections | 1 |
| Placement clicks | 1 |
| Undo clicks | 0 |
| Drags | 0 |
| Typed entries (browser type) | 4 (Name; String Value; Width; Height) |
| Key presses | 38 (Name Tab 1; Escape 1; stray Caption keys 10; Caption keys first list-open attempt 10; Tab 1; Ctrl+A 1; Caption correction keys 10; Tab after String Value, Theme Class, Width, Height 4) |
| Per-field entries and corrections | Name 1, 0 corrections. Caption 2 commits (1 wrong, 1 correction, by blur, not Tab). String Value 1, 0 corrections. Theme Class 1 (list pick plus Tab), 0 corrections. Width 1, 0 corrections. Height 1, 0 corrections. |
| Caption list opens | 3 (Caption) |
| Theme Class list opens | 1 |
| Ellipsis clicks | 1 |
| Prompts | 1: `String FX_sSignIn does not exist. Create it?` answered Yes |
| String editor opens / OKs | 1 / 1 |
| Designer Saves | 1; response: server-event error dialog; OK 1 |
| Server-event errors | 1 (OK once; not retried) |
| Form closes / reopens | 0 / 0 |
| Recent-forms opens | 0 |
| Re-logins / session expiry | 0 / none |
| Find calls | 0 |
| Waits | 0 |
| Regenerate / Delete Form Definition / Select Form OK | 0 / 0 / 0 |
| Checkout, FormSync, deployment, unload, runtime action | 0 |

### Cumulative action audit (T1 + T2)

| Action | T1 | T2 | Total |
| --- | --- | --- | --- |
| Tab list / tab select | 1 / 1 | 1 / 1 | 2 / 2 |
| Inline snapshots, successful | 13 | 23 | 36 |
| Snapshot attempts failed | 0 | 1 | 1 |
| Screenshots | 4 | 12 | 16 |
| Successful reference clicks | 8 | 20 | 28 |
| Failed reference clicks | 0 | 1 | 1 |
| Coordinate clicks | 0 | 1 | 1 |
| Toolbox selections | 0 | 1 | 1 |
| Placement clicks | 0 | 1 | 1 |
| Undo | 0 | 0 | 0 |
| Typed entries | 4 (filter text) | 4 | 8 |
| Key presses | 5 | 38 | 43 |
| Finds | 4 | 0 | 4 |
| Waits | 1 | 0 | 1 |
| Form opens (recent-forms) | 1 | 0 | 1 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 |
| Global Objects (String) dialog opens / Cancel | 1 / 1 | 0 | 1 / 1 |
| String creations (prompt Yes) | 0 | 1 | 1 (persistence unverified) |
| String editor OK | 0 | 1 | 1 |
| Designer Saves | 0 | 1 (error) | 1 |
| Server-event errors | 0 | 1 | 1 |
| Re-logins / session expiry | 0 / none | 0 / none | 0 / none |
| Regenerate / Delete / Select Form OK / Undo / drags | 0 | 0 | 0 |

### Worker-written file inventory (cumulative)

- `experiments/EXP-110-hello-world-part-7-section-7-fx-customer-portal-menu-buttons.md` (created T1, updated T1 and T2)
- `evidence/EXP-110/t1-01-designer-gate-before-open.png`, `t1-02-gate-form-open-clean-canvas.png`, `t1-03-components-tree-and-menu-region.png`, `t1-04-string-collision-check-fx_scart-empty.png` (T1)
- `evidence/EXP-110/t2-01` to `t2-12` (12 files, listed above) (T2)

Tool-generated, not written by a worker command (listed for completeness):

- `evidence/playwright/page-2026-10-17T16-*.yml`: 12 files from T1 and 21 from T2 (snapshot outputs returned by click and tool actions).
- `evidence/playwright/console-2026-10-17T16-18-52-454Z.log` (T1) and `console-2026-10-17T16-24-26-243Z.log` (T2).
- A harness-saved snapshot-output file outside the repository (`.claude` tool-results), created by the too-large snapshot. The worker has no read access to it.

### Cleanup inventory (for later tasks)

- Button `ButtonSignIn` (created; under `Region00: menu`); unsaved changes present.
- String `FX_sSignIn` (created through the prompt; value `Sign In`; persistence not verified).
- Not changed: the existing string `ApplyFullTextIndexScriptQuestion` (selected transiently, then replaced; no edit).

### Procedural notes for the operator

1. Caption combobox: typing needs the list open. Tab commits the highlighted first row. Use a neutral click to leave the field if the typed value must stay.
2. Opening a Caption list makes the accessibility snapshot too large; read the state from a screenshot instead.
3. The Save error occurred after the String OK and all property edits. Its cause is unknown.

### Next step

Operator Designer reload (the stale-Designer procedure). The brief's T3 (ButtonHome, FX_sHome) must not start until the reload and a read-only gate. Decide whether T2's unsaved edits and the string FX_sSignIn are kept.

## Outcome (operator, 2026-10-18)

Blocked (observed). **The first Button's Designer Save raised "The server event processing returned an error."** The run (R-20261018-001834-0Gr6, 2 worker tasks) ended blocked; the operator reloaded the Designer, which discarded the unsaved ButtonSignIn. The operator chose to retry in steps (EXP-110-R2).

- T1: gate passed; string check: FX_sCustomerPortal found, FX_sSignIn, FX_sHome, FX_sCart absent.
- T2 before the error: Button placed in Region00: menu (`button1_USER`, PushButton, default Size 14.25; 1.89), Name ButtonSignIn; Caption first committed `ApplyFullTextIndexScriptQuestion` (first list item, again as in EXP-106 D3; the existing string was not edited), corrected to FX_sSignIn and left by clicking the Description row; string FX_sSignIn created (prompt Yes once; pre-filled `FX_s Sign In` replaced with `Sign In`; OK once); Theme Class FX_BlueButton; Width 15 and Height 2 in the sub-rows, **but the Size summary row stayed `14.25; 1.89`** (in EXP-106 it updated at once). Then one Save: server-event error, OK once, stop.
- Screenshot viewed by the operator assistant: `t2-11-save-response-after-button-signin` (Error dialog; ButtonSignIn under Region00: menu; Caption FX_sSignIn; FX_BlueButton; Width 15 and Height 2 with edit markers; Size 14.25; 1.89).
- **Unknown, for EXP-110-R2:** which edit made the Save fail (hypothesis: the Width/Height edits did not reach the server, since the Size summary did not refresh); whether the tenant-wide string FX_sSignIn was created by the String editor OK before the failed Save.
- Findings (observed): the Caption combobox ignores typed text as a filter and Tab commits the highlighted first row; leaving the field by clicking another Properties row keeps the typed ID; opening the Caption list makes the accessibility snapshot exceed the tool limit (about 784k characters); a Button's default Size in a Vertical Flex region is 14.25; 1.89.
- Ruling: the denied Read of the oversized snapshot file (outside the repository) is accepted as harmless.
- Confinement (git status): only `evidence/EXP-110/` and this record were written by the run.
- Next: EXP-110-R2: read-only check of FX_sSignIn, then ButtonSignIn with a Designer Save after each step (placement and Name; Caption and string; Theme Class; Size) to isolate the failing edit; stop at a second server-event error.
