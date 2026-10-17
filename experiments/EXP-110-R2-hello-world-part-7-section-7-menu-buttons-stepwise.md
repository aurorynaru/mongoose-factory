# EXP-110-R2: Hello World Part 7 section 7 menu buttons, stepwise replay

Status: **blocked at T4 (ButtonCart, step B)**: T1, T2 and T3 complete; T4 step A (placement and Name, Save A) complete; the Caption ellipsis for FX_sCart raised "The server event processing returned an error" instead of the create prompt; OK clicked once; run stopped for an operator Designer reload. Steps C and D, T5 (readback and final audit) not performed. Run R-20261018-004719-xU81, experiment EXP-110-R2. Worker session bf237b00-e420-4f2b-8d18-1e5eb547cd8b (T1 cycle 0; T2 cycle 1; T3 cycle 2; T4 cycle 3).
Scope: User-scope Form FX_CustomerPortal; new Buttons ButtonSignIn, ButtonHome, ButtonCart in FlexLayoutMain > Region00: menu; Theme Class FX_BlueButton; Size 15; 2; global strings FX_sSignIn = Sign In, FX_sHome = Home, FX_sCart = Cart (created only if absent, through the Caption ellipsis).
Predecessor: `experiments/EXP-110-hello-world-part-7-section-7-fx-customer-portal-menu-buttons.md` (blocked by the server-event error on the first Button's Designer Save).
Evidence directory: `evidence/EXP-110-R2/`

## T1: read-only gate and string collision check (2026-10-18)

### Sources read before any browser action

- `AGENTS.md` (repository root).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 205-217 (Section 7 table) and transcript lines 456-466 (10:54-12:08).
- `recipes/components/add-component-from-toolbox.md`, `recipes/session/session-expiry-and-stale-designer.md`.
- Outcome (operator) sections only: EXP-110 (lines 304-315), EXP-109 (lines 760-776), EXP-106 (lines 865-885).
- Incidental: a Grep over the transcript for the timestamp range also printed the section 6 heading (line 184), the section 8 heading (line 219, "12:08-15:24") and one table row at line 294 (a Blue Button row citing "11:06-12:01; 14:09-14:34"). No other content from section 8 or later was read. Logged as a scope deviation (see Action audit).

### Starting state (observed)

- Browser tabs listed before any selection: tab 0 = Mongoose Designer, `MGForm=FX_CustomerPortal` (current); tab 1 = Mongoose portal (Web Client). No tab selection was needed; tab 0 was already current.
- No Session Expired modal, logout card or sign-in page was visible. No re-login was performed.
- Designer: ScopeType **User** / ScopeName (the operator user); Form tab selected; Form FX_CustomerPortal (Name row); Form Type Flex; Save **disabled** (accessibility snapshot, and again after the String check); Undo disabled; no dialog open at start.
- Details panel was collapsed at the start; it was expanded (UI toggle only) to read the Components tree.

### Components tree (observed; Details > Components, grid expanded)

Rows in order, with nesting from the screenshots where visible:

```
Pane (00)
  flexlayoutPane_FX_CustomerPortal (FlexLayout)
    Region00: header
      FlexLayoutHeader (FlexLayout)
        Region00: header
          StaticHeader (Static)
        Region01: user
          StaticCustIcon (Static)
          StaticCustID (Static)
    Region01: main
      FlexLayoutMain (FlexLayout)
        Region00: menu            (no children: no Buttons)
        Region01: spacer1
        Region02: signinpage
        Region03: homepage
        Region04: cartpage
        Region05: spacer2
    Region02: footer
      FlexLayoutFooter (FlexLayout)
        Region00: UNKNOWN0        (see finding F2)
```

- FlexLayoutMain has the six regions expected after EXP-109. Region00: menu is empty (no Button).
- No Button row appears anywhere in the tree.
- Nesting for the header and footer rows and for Region03-Region05 is confirmed by indentation in `t1-02`/`t1-03`; the other rows are nested by their order in the grid (not separately verified by indentation).

### Canvas location of the menu region (observed; screenshot t1-01)

- The canvas header strip (top, y about 100-172) shows the bold text "Customer Portal" (StaticHeader) and a small icon (StaticCustIcon) at the right.
- The main area has dotted vertical dividers at x about 406, 449, 669, 886 and 1104. Six columns result: the **menu** column is the leftmost one, x about 258-406, directly below the header strip and left of the first vertical dotted divider. The next columns are spacer1 (406-449), signinpage (449-669), homepage (669-886), cartpage (886-1104) and spacer2 (1104-1148). The column-to-region mapping is inferred from the divider positions and the tree order, not from a per-region click.
- The menu column is empty (no Buttons). The canvas pane is cut at about y 600 in the viewport, so the lower part of the menu column was not visible.

### String check (read-only; Edit > String, Global Objects dialog, Strings filter)

Method: Edit > String opened the Global Objects dialog (Strings list). Each ID was typed in the Strings filter box and applied by clicking the box's magnifier icon. The dialog was closed with **Cancel** (no OK). Enter was not used (the dialog has OK as its default button).

| ID | Result | Value | Evidence |
| --- | --- | --- | --- |
| FX_sCustomerPortal (positive control) | **found**: one row, `FX_sCustomerPortal` (inline snapshot text; the filtered state was not screenshotted) | not opened (control only) | snapshot text only; `t1-04` shows the unfiltered list after typing |
| FX_sSignIn | **absent**: grid empty | n/a | `t1-05-strings-filter-fx-ssignin.png` |
| FX_sHome | **absent**: grid empty | n/a | `t1-06-strings-filter-fx-shome.png` |
| FX_sCart | **absent**: grid empty; a pre-Cancel snapshot showed the grid with no rows | n/a | `t1-07-strings-filter-fx-scart.png` |

- The control proves the filter-and-apply path returns rows, so the empty grids are read as "absent".
- Result: none of the three planned strings exists. T2 to T4 will therefore each take the Caption ellipsis path ("does not exist. Create it?" prompt) for their own string. No string was created or edited in T1.
- After Cancel, the Designer showed no dialog; Save was still disabled (`browser_find` for "Save": `[disabled]`).

### Gate result

- Gate passed: User scope; FX_CustomerPortal open and clean (Save disabled); no dialog open; FlexLayoutMain six regions present; menu region empty and located on the canvas; no Button present.
- The gate required "header and footer components unchanged". The footer contains an extra region (finding F2), whose origin cannot be established from the sources this task is allowed to read. Flagged for the operator; T1 made no change.

### Findings (observed only)

- **F1. FX_sSignIn is absent after the operator's Designer reload.** EXP-110 reported creating FX_sSignIn through the String editor OK before its failed Save. In this session the Strings list has no FX_sSignIn, so that OK did not persist (or was discarded with the reload). T2 must expect the "does not exist" prompt again.
- **F2. Region00: UNKNOWN0 under FlexLayoutFooter.** A region named "Region00: UNKNOWN0" (no `_USER` suffix, no children) appears as a child of FlexLayoutFooter. It is not in the brief's expected list, and this worker did not create it. EXP-109 records UNKNOWN0 as a FlexLayoutMain region renamed to menu; the footer one is not explained by the allowed sources. Operator to confirm whether it predates this run.
- **F3. Components grid starts collapsed.** Only the root row "Pane (00)" showed until the grid's toolbar Expand button was clicked.
- **F4. Strings filter applies on the magnifier click.** Typing into the Strings filter did not filter the list; clicking the magnifier icon did. Enter was not tested.
- **F5. Snapshot output size.** The tool saved 11 page snapshots to `evidence/playwright/` automatically (after clicks and a wait) and returned inline output for each explicit snapshot call. These files are tool artifacts, not worker-authored (see the file inventory).
- **F6. Page URL after the strings Cancel.** The page URL lost its `MGForm=FX_CustomerPortal` query parameter after Cancel; the Designer still showed FX_CustomerPortal. Not investigated (no reload was allowed).
- **F7.** The footer of the browser snapshot reported "2 errors" in the console. Console inspection is out of scope; not inspected.

## Action audit (cumulative, T1)

Counts from this worker's tool calls in T1:

| Action | Count | Notes |
| --- | ---: | --- |
| Browser tab list | 1 | before any selection |
| Browser tab selections | 0 | tab 0 was already current |
| `browser_snapshot` (explicit, untargeted) | 9 | all returned inline |
| Clicks (total) | 10 | see breakdown below |
| - Details panel "Expand Panel" (UI layout) | 1 | view only |
| - Components sub-tab | 1 | view only |
| - Components grid toolbar "Expand" (tree) | 1 | view only |
| - Edit menu | 1 | opens menu |
| - Edit menu > String | 1 | opens Global Objects dialog |
| - Strings filter magnifier (apply filter) | 4 | control, FX_sSignIn, FX_sHome, FX_sCart |
| - Global Objects "Cancel" | 1 | no change |
| Typed entries | 4 | all in the Strings filter box (no Designer field typed) |
| Mouse move (no click) | 1 | to place the pointer over the tree grid |
| Mouse wheel | 2 | the first did not reach the tree; the second scrolled it |
| Wait | 1 | 2 seconds, filter settle |
| Screenshots (saved, under evidence/EXP-110-R2/) | 8 | t1-01 to t1-08 |
| `browser_find` (read-only) | 1 | "Save" disabled check |
| Canvas placement clicks | 0 | none |
| Coordinates used for clicks | 0 | no coordinate click |
| Toolbox selections | 0 | none |
| Undo clicks | 0 | none |
| Global object creations / edits | 0 | none |
| Designer Saves | 0 | none |
| Prompts / dialogs answered | 0 | none (no prompt appeared) |
| String editor OKs | 0 | none |
| Form closes / reopens | 0 | none |
| Server-event errors | 0 | none |
| Re-logins / session expiries | 0 / 0 | none |
| Browser total tool calls | 37 | 1 tabs + 9 snapshots + 10 clicks + 4 types + 1 move + 2 wheels + 1 wait + 8 screenshots + 1 find |

Other tool actions (not browser):
- Repository reads: 7 Read calls for the named sources; 8 Read calls on this run's screenshots (opened once each, to check content); 4 Grep calls (1 transcript timestamp Grep with incidental output described above, 3 Outcome heading Greps); 5 Glob calls (file-name checks: EXP-110, EXP-109, EXP-106, EXP-110-R2 records, evidence folder).
- Scope deviation: the transcript Grep printed section 6 and section 8 headings and one later table row (see Sources). Not further read.

## Worker-written file inventory (T1)

Worker-authored:
- `experiments/EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md` (this record; created).
- `evidence/EXP-110-R2/t1-01-gate-components-tree-canvas.png` (gate: Components tree and canvas; Form, User scope, Save disabled).
- `evidence/EXP-110-R2/t1-02-components-tree-scrolled-bottom.png` (tree before the effective scroll; shows the top of the tree; the view did not move).
- `evidence/EXP-110-R2/t1-03-components-tree-lower-rows.png` (lower tree rows: Region03 to Region05, Region02: footer, FlexLayoutFooter, Region00: UNKNOWN0).
- `evidence/EXP-110-R2/t1-04-strings-filter-fx-customerportal.png` (Strings dialog after typing FX_sCustomerPortal and before the filter was applied: the box shows the text, the grid still lists unfiltered IDs. It does not show the control's one-row result; that result is in the inline snapshot text only).
- `evidence/EXP-110-R2/t1-05-strings-filter-fx-ssignin.png` (FX_sSignIn: empty grid).
- `evidence/EXP-110-R2/t1-06-strings-filter-fx-shome.png` (FX_sHome: empty grid).
- `evidence/EXP-110-R2/t1-07-strings-filter-fx-scart.png` (FX_sCart: empty grid).
- `evidence/EXP-110-R2/t1-08-final-state-after-strings-cancel.png` (after Cancel: no dialog; Form open; Save disabled by icon and by the `browser_find` check).

Tool-generated (written by the Playwright MCP on worker actions; not worker-authored content; left in place):
- 11 page snapshot files: `evidence/playwright/page-2026-10-17T16-47-48-547Z.yml`, `...16-47-57-129Z.yml`, `...16-48-02-453Z.yml`, `...16-48-55-884Z.yml`, `...16-49-03-908Z.yml`, `...16-49-19-945Z.yml`, `...16-49-29-241Z.yml`, `...16-49-46-224Z.yml`, `...16-49-57-232Z.yml`, `...16-50-07-351Z.yml`, `...16-50-21-195Z.yml`.
- 1 console log: `evidence/playwright/console-2026-10-17T16-47-41-115Z.log`.

Note: the `evidence/playwright/` files lie outside `evidence/EXP-110-R2/`. They were not created by the worker's file tools; the operator should decide whether to keep them.

## Next step (not performed in T1)

- T2 (Button 1, ButtonSignIn): by the Button rules, step A placement and Name with a Designer Save, then step B Caption FX_sSignIn (the string is absent per F1, so the Caption ellipsis prompt is expected), Save; step C Theme Class FX_BlueButton, Save; step D Width 15 and Height 2, Save. Before T2, the operator should confirm F2 (the footer region UNKNOWN0) is acceptable.

## Acceptance checks (T1 status)

- AC-1: sources reviewed (yes); session usable (yes); User scope (yes); FX_CustomerPortal open and clean with six FlexLayoutMain regions and an empty menu region located on the canvas (yes, F2 caveat for the footer); string check recorded for FX_sCustomerPortal (found, from snapshot text) and FX_sSignIn, FX_sHome, FX_sCart (all absent). Evidence: `t1-01`, `t1-05` to `t1-08` (empty-grid states), and snapshot text for the control. Remaining AC-1 items (footer unchanged) are for the operator to confirm.
- AC-2 to AC-5: not applicable to T1 (no mutation performed). Final audit is T5.

## T2: ButtonSignIn, steps A to D (2026-10-18)

Result (observed): **all four Designer Saves succeeded** (toast "Form [FX_CustomerPortal] and global object(s) were saved."). No server-event error, no retry, no correction. The EXP-110 failure did not recur in this run, so the cause of the EXP-110 error remains **unresolved**.

### Gate (read-only, before mutation)

- Sources reread (AGENTS.md; hello-world-pt7 lines 205-217; transcript lines 456-466; both recipes; EXP-110, EXP-109, EXP-106 Outcome sections).
- Tabs listed before any selection: tab 0 = Designer (`MGForm=FX_CustomerPortal`, current); tab 1 = portal. No tab was selected.
- Snapshot: FX_CustomerPortal open, ScopeType User, Save disabled, no dialog. Components tree: Region00: menu empty (no Button), then Region01: spacer1, Region02: signinpage, Region03: homepage, Region04: cartpage, Region05: spacer2; header and footer components as in T1. Region00: UNKNOWN0 under FlexLayoutFooter unchanged (not inspected further, not modified).
- No session-expiry, logout card or sign-in page appeared at any time.

### Step A: placement and Name (evidence: `t2-01`, `t2-02`)

- Toolbox "Button" row selected once (1 Toolbox selection).
- Placement: one coordinate click at (330, 260) inside the menu column (below the header strip, left of the first dotted divider at x≈406). Result: `button1_USER` (PushButton, From Device Master True).
- Tree after placement (`t2-01`): `button1_USER PushButton 0 FlexLayoutMain` shown indented under **Region00: menu** (deeper than the Region00: menu row, which is under FlexLayoutMain). Canvas: blue button at the top of the left column, x≈281-385, y≈191-225. Undo not needed (no misplacement).
- Name: plain fill `ButtonSignIn` + Tab. Committed: Name row `ButtonSignIn`; tree row `ButtonSignIn PushButton 0 FlexLayoutMain` directly after Region00: menu.
- **Save A**: success toast (`t2-02`). Save disabled after the save (confirmed in a later read).

### Step B: Caption and string (evidence: `t2-03` to `t2-10`)

- Caption value cell clicked once: list opened (`t2-03`: empty input over the list, first items ApplyFullTextIndexScriptQuestion, CatalogNotExistNotice, …). No snapshot taken while the list was open.
- ID typed key by key with one key press per character: F, X, _, s, S, i, g, n, I, n (10 presses). Check after the first key (`t2-04`: "F" in the field) and after all keys (`t2-05`: field reads "FX_sSignIn", list still open).
- Left the field by clicking the **Description** row (not Tab). Snapshot after leaving: Caption row value **FX_sSignIn** (committed; the first list item ApplyFullTextIndexScriptQuestion was NOT committed, unlike EXP-110).
- Caption ellipsis clicked once. **Prompt (verbatim): "String FX_sSignIn does not exist. Create it?"** (buttons Yes / No). Answered **Yes** once (1 prompt, Yes). Screenshot `t2-06`.
- String editor (`t2-07`): Name `FX_sSignIn`; String Value pre-filled **`FX_s Sign In`**. The value was replaced by one plain fill `Sign In` and Tab; verified (`t2-08`: String Value `Sign In`). **OK** clicked once (1 String editor OK). No prompt or editor named another ID.
- Canvas label after the string OK (`t2-09`) and after Save B (`t2-10`): the button still shows the raw text **FX_sSignIn**, not "Sign In". Observed; not explained.
- **Save B**: success toast (`t2-10`). Save disabled afterwards.

### Step C: Theme Class (evidence: `t2-11`, `t2-12`, `t2-13`)

- Theme Class row (Appearance group, expanded by double-click; a single click only selected it). Value cell clicked: list opened showing one item, **FX_BlueButton** (`t2-11`).
- Item clicked once, then Tab. Committed: Theme Class **FX_BlueButton** (`t2-12`; canvas button turned blue).
- **Save C**: success toast (`t2-13`).

### Step D: Size 15; 2 (evidence: `t2-14`, `t2-15`)

- Layout group expanded by double-click; Size summary row (before entry) `14.25; 1.89`; double-click on Size revealed sub-rows Width 14.25, Height 1.89, Lock Size False.
- Width: value cell clicked; plain fill `15` + Tab. Size summary then read **`15; 1.89`** (the summary updated at once, unlike EXP-110's stuck summary).
- Height: value cell clicked; plain fill `2` + Tab. Size summary read **`15; 2`**; Width 15, Height 2 (`t2-14`, taken before Save D).
- **Save D**: success toast (`t2-15`). Save disabled (read-only find: `Save [disabled]`); Size remains `15; 2`.

### T2 state at end

- ButtonSignIn: child of FlexLayoutMain > Region00: menu; Name ButtonSignIn; Caption FX_sSignIn; Theme Class FX_BlueButton; Size 15; 2 (as read in-session before Save D; not yet read back after a reopen).
- String FX_sSignIn created (User-scope tenant-wide global object) with value `Sign In` (as read in the String editor before OK; not yet read back).
- Form FX_CustomerPortal: open, Save disabled, no dialog open, no Undo used.
- No change to any other component or region; no event handler; no Regenerate; no drag; no runtime action.
- T2 ends here. Next permitted step (T3, not performed): ButtonHome with FX_sHome (the string is absent per T1; the Caption ellipsis path applies).

### Deviations (procedural, T2)

1. **Name fill and Tab issued in parallel** (one `browser_type` and one `browser_press_key` in the same response). Breaks the one-browser-action-at-a-time rule. The result was checked with a snapshot (Name ButtonSignIn committed; no side effect seen).
2. **Accessibility snapshot taken while the Theme Class list was open** (one inline snapshot to read the single list item's reference). The Caption-list restriction (EXP-110) was not applied to this list; the response was small and no tool limit was hit.
3. **Scoped snapshots used** (targets e15 and e1359, the Properties tree) for 10 of the reads, in place of one untargeted snapshot per step. Used to limit output size; the references were taken from the most recent snapshot each time.
4. **One Ref-not-found error**: the Save D reference e15 failed after the Size entries (the Properties tree had re-rendered). One fresh untargeted snapshot was used (recovery allowance: 1 of 1 used), then Save D was clicked from its reference.
5. `browser_find` was used once to locate the prompt's Yes button; the click used the reference from a fresh untargeted snapshot taken after it (not the find output).

## T2 action audit (exact counts; browser calls only)

| Action | Count | Notes |
| --- | ---: | --- |
| Tab list | 1 | before any selection |
| Tab selections | 0 | tab 0 already current |
| Untargeted (inline) snapshots | 14 | includes the 1 recovery snapshot |
| Scoped snapshots (target e15 / e1359) | 10 successful + 1 error (Ref e15 not found) | 11 calls |
| `browser_find` | 2 | prompt Yes locate (1); final Save disabled check (1) |
| Click-tool clicks | 20 | Toolbox 1; Name value 1; Save 4; Caption cell 1; Description 1; Caption ellipsis 1; prompt Yes 1; String value cell 1; String OK 1; Appearance 1 (single); Appearance double 1; Theme cell 1; Theme item 1; Layout double 1; Size double 1; Width cell 1; Height cell 1 |
| Coordinate click (canvas placement) | 1 | at (330, 260); the only coordinate click in T2 |
| Toolbox selections | 1 | Button row |
| Placement clicks | 1 | (see coordinate click) |
| Undo clicks | 0 | none |
| Typed entries (`browser_type`) | 4 | Name `ButtonSignIn`; String Value `Sign In`; Width `15`; Height `2` |
| Key presses (caption ID) | 10 | F X _ s S i g n I n |
| Tab key presses | 5 | Name; String Value; Theme Class; Width; Height (the Name Tab was parallel: deviation 1) |
| Screenshots (saved under `evidence/EXP-110-R2/`) | 15 | `t2-01` to `t2-15` |
| Caption list opens | 1 | |
| Theme Class list opens | 1 | |
| Prompts | 1 | "String FX_sSignIn does not exist. Create it?" answered Yes once |
| String editor OKs | 1 | |
| Designer Saves | 4 | A, B, C, D; each success toast; response and Save state recorded |
| Per-field entries | Name 1; Caption 1 (10 keys) + list; String Value 1; Theme 1 selection; Width 1; Height 1 | |
| Corrections | 0 | none |
| Form closes / reopens | 0 | |
| Server-event errors | 0 | |
| Re-logins / session expiries | 0 | |
| **Total browser calls in T2** | **83** | 1 + 14 + 11 + 2 + 20 + 1 + 4 + 15 + 15 |

Auto-saved tool files: each click returned a snapshot file under `evidence/playwright/` (21 files, timestamps 16-54-26 to 16-59-52) and the tab list added 1 console log (`evidence/playwright/console-2026-10-17T16-54-18-082Z.log`). These are tool artifacts; not opened, read or grepped.

## Cumulative browser action audit (T1 + T2)

| Action | T1 | T2 | Total |
| --- | ---: | ---: | ---: |
| Tab list | 1 | 1 | 2 |
| Snapshots (inline + scoped; find excluded) | 9 | 25 | 34 |
| `browser_find` | 1 | 2 | 3 |
| Click-tool clicks | 10 | 20 | 30 |
| Coordinate clicks (placement) | 0 | 1 | 1 |
| Toolbox selections | 0 | 1 | 1 |
| Undo clicks | 0 | 0 | 0 |
| Typed entries (`browser_type`) | 4 | 4 | 8 |
| Key presses (caption ID + Tab) | 0 | 15 | 15 |
| Screenshots | 8 | 15 | 23 |
| Mouse move / wheel / wait | 4 | 0 | 4 |
| Designer Saves | 0 | 4 | 4 |
| Prompts answered | 0 | 1 | 1 |
| String editor OKs | 0 | 1 | 1 |
| Caption/theme list opens | 0 | 2 | 2 |
| Form closes / reopens | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| **Total browser calls** | **37** | **83** | **120** |

## Worker-written file inventory (T2 addition)

- `evidence/EXP-110-R2/t2-01-placement-button1-tree-canvas.png` (placement; tree shows button1_USER under Region00: menu; canvas blue button in the left column)
- `evidence/EXP-110-R2/t2-02-saveA-response-buttonsignin-name.png` (Save A toast; Name ButtonSignIn; tree row under Region00: menu)
- `evidence/EXP-110-R2/t2-03-caption-list-open-before-typing.png` (Caption list open, input empty)
- `evidence/EXP-110-R2/t2-04-caption-typing-check-F.png` (after the first key; "F" in the field; list open)
- `evidence/EXP-110-R2/t2-05-caption-typed-FX_sSignIn-list-open.png` (all 10 keys; field reads FX_sSignIn; list open)
- `evidence/EXP-110-R2/t2-06-caption-ellipsis-create-prompt.png` (prompt verbatim; Yes/No; the String dialog behind)
- `evidence/EXP-110-R2/t2-07-string-editor-after-yes-prefilled.png` (String editor; Name FX_sSignIn; String Value FX_s Sign In)
- `evidence/EXP-110-R2/t2-08-string-editor-value-Sign-In-before-OK.png` (String Value Sign In; before OK)
- `evidence/EXP-110-R2/t2-09-after-string-OK-before-saveB.png` (after the string OK; Caption FX_sSignIn; canvas label FX_sSignIn; Save enabled)
- `evidence/EXP-110-R2/t2-10-saveB-response-caption-string.png` (Save B toast)
- `evidence/EXP-110-R2/t2-11-theme-class-list-open.png` (Theme Class list with FX_BlueButton)
- `evidence/EXP-110-R2/t2-12-theme-class-set-before-saveC.png` (Theme Class FX_BlueButton; blue canvas button; Save enabled)
- `evidence/EXP-110-R2/t2-13-saveC-response-theme-class.png` (Save C toast)
- `evidence/EXP-110-R2/t2-14-size-rows-15-2-before-saveD.png` (Size 15; 2; Width 15; Height 2; before Save D)
- `evidence/EXP-110-R2/t2-15-saveD-response-size-15-2.png` (Save D toast; Save icon greyed)
- Record: `experiments/EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md` (T2 sections added; status line updated).
- Tool-generated (not authored by the worker; left in place): 21 page-snapshot files and 1 console log under `evidence/playwright/` (see T2 audit).

## Cleanup inventory (created so far)

- Buttons: `ButtonSignIn` (button1_USER renamed; under FlexLayoutMain > Region00: menu). Remaining: ButtonHome, ButtonCart (T3, T4).
- Strings: `FX_sSignIn` = `Sign In` (created in T2 through the Caption ellipsis; tenant-wide). Remaining: FX_sHome, FX_sCart (T3, T4).

## Knowledge state (T1)

- F1 to F6: observed. F7: observed (not investigated).
- No candidate procedure or verified finding is claimed. The filter behavior (F4) is one successful execution, observed only.

## T3: ButtonHome, steps A to D (2026-10-18)

Result (observed): **all four Designer Saves were invoked** (A, B, C, D), with no server-event error and no retry. Saves A, B and C each showed the success toast "Form [FX_CustomerPortal] and global object(s) were saved." Save D shows the Save button disabled and no error dialog, but its success toast was **not captured** in the screenshot taken straight after the click (t3-10), so the D response is recorded as "Save disabled, no error dialog" rather than as a confirmed success message.

### Gate (read-only, before mutation)

- Sources reread (AGENTS.md; hello-world-pt7 lines 205-217; transcript lines 456-466; both recipes; EXP-110, EXP-109, EXP-106 Outcome sections).
- Tabs listed before any selection: tab 0 = Designer (current); tab 1 = portal. No tab was selected.
- Snapshot: FX_CustomerPortal open, ScopeType User, Save disabled, no dialog. Region00: menu held ButtonSignIn only (PushButton, Caption FX_sSignIn, Theme Class FX_BlueButton, Size 15; 2); no ButtonHome. Header, footer and the other five FlexLayoutMain regions unchanged in the rows listed by the snapshot. The FlexLayoutFooter children were not rendered in the grid viewport at this snapshot; Region00: UNKNOWN0 was not inspected further and not modified.
- Session: no expiry, logout card or sign-in page at any time.

### Step A: placement and Name (evidence: `t3-01`, `t3-02`)

- Toolbox "Button" row selected once.
- Placement: one coordinate click at (330, 300) inside the menu column, below ButtonSignIn (which occupies about y 191-225) and left of the first dotted divider (x about 406). Result: `button1_USER` (PushButton, From Device Master True). Tree (`t3-01`): `button1_USER PushButton 0 FlexLayoutMain` indented at the same depth as ButtonSignIn under **Region00: menu**, below it. Canvas: a second blue placeholder in the menu column, below FX_sSignIn. No Undo needed.
- Name: plain fill `ButtonHome` (one `browser_type`), then Tab as a separate action. Committed: Name row `ButtonHome`; tree row `ButtonHome PushButton 0 FlexLayoutMain` directly after ButtonSignIn under Region00: menu.
- **Save A**: success toast (`t3-02`). Tree: ButtonSignIn and ButtonHome both under Region00: menu. Save disabled afterwards.
- Recovery: one `browser_snapshot` targeted at the tree reference e1359 returned "Ref e1359 not found" after the Name Tab; one fresh untargeted snapshot was used (1 recovery). No mutation was repeated.

### Step B: Caption and string (evidence: `t3-03` to `t3-06`)

- Caption value cell clicked once: list opened. Checked by screenshot only (`t3-03`: empty input over the list; first items ApplyFullTextIndexScriptQuestion, CatalogNotExistNotice, Collection Name, ...). No snapshot taken while the list was open.
- ID typed key by key, one key per call: F, X, _, s, H, o, m, e (8 presses). Checked by screenshot (`t3-04`: field reads "FX_sHome", list still open).
- Left the field by clicking the **Description** row (not Tab), using a reference from the snapshot taken before the list opened (the most recent snapshot in the task). Snapshot after: Caption row **FX_sHome** (committed). ApplyFullTextIndexScriptQuestion was not committed.
- Caption ellipsis clicked once. **Prompt (verbatim): "String FX_sHome does not exist. Create it?"** (buttons Yes / No). Answered **Yes** once (1 prompt, Yes). The prompt names the planned ID, so the answer was permitted.
- String editor (`t3-05`): Name `FX_sHome`; String Value pre-filled **`FX_s Home`**. The value was replaced by one plain fill `Home`, then Tab as a separate action. Verified in `t3-05`: String Value `Home`. **OK** clicked once (1 String editor OK). Editor closed; no dialog remained.
- **Save B**: success toast (`t3-06`). The canvas label of ButtonHome shows the raw ID "FX_sHome" (as ButtonSignIn did). Save disabled afterwards.

### Step C: Theme Class (evidence: `t3-07`, `t3-08`)

- Theme Class value cell clicked (Appearance group already expanded): list opened with one item, **FX_BlueButton**. A snapshot was needed for the item reference; it was taken while the (one-item) Theme Class list was open. This is the same deviation as T2 (not the Caption list, so the EXP-110 snapshot restriction did not apply; no tool limit was hit).
- Item clicked once, then Tab as a separate action. Committed: Theme Class **FX_BlueButton** (`t3-07`: canvas button turned blue).
- **Save C**: success toast (`t3-08`). Save disabled afterwards.

### Step D: Size 15; 2 (evidence: `t3-09`, `t3-10`)

- Layout group already expanded. Size row (summary `14.25; 1.89`) double-clicked once: it selected the row but did **not** reveal the Width and Height sub-rows (observed). One corrected attempt (double-click on the same row) revealed Width 14.25, Height 1.89, Lock Size False.
- Width: value cell clicked; plain fill `15`; Tab as a separate action. Size summary then read **`15; 1.89`** (the summary updated at once; EXP-110's summary had stayed at 14.25; 1.89).
- Height: value cell clicked; plain fill `2`; Tab as a separate action. Size summary read **`15; 2`**. Width 15, Height 2 (`t3-09`, taken before Save D).
- **Save D**: Save button disabled afterwards; no error dialog in the snapshot after the click (`t3-10` and the following snapshot). Success toast not captured (see result note above).

### T3 state at end

- ButtonHome: child of FlexLayoutMain > Region00: menu, placed directly below ButtonSignIn; Name ButtonHome; Caption FX_sHome; Theme Class FX_BlueButton; Size 15; 2 (as read in-session before Save D; not yet read back after a reopen).
- String FX_sHome created in T3 (User-scope, tenant-wide) with value `Home` (as read in the String editor before OK; not yet read back).
- ButtonSignIn: not modified in T3 (only viewed in the tree; it was not selected for editing).
- Form FX_CustomerPortal: open, Save disabled, no dialog open. No Undo used. No Regenerate. No drag.
- T3 ends here. Next permitted step (T4, not performed): ButtonCart with FX_sCart (absent per T1; the Caption ellipsis path applies).

### Deviations (procedural, T3)

1. Snapshot taken while the Theme Class list was open (one item; to read its reference). Same as T2 deviation 2.
2. Scoped snapshot target e1359 failed with "Ref not found" after the Name Tab; one fresh untargeted snapshot recovered it (recovery allowance: 1 used).
3. The Size row's first double-click did not reveal the sub-rows; one corrected double-click revealed them. Not a field correction (no field value was changed by it).
4. The Description-row reference (e1395) came from the snapshot taken before the Caption list opened (no snapshot was possible while the list was open); it committed the caption as expected.
5. Save D's success toast was not captured (see result note). Recorded as a limitation, not as a confirmed toast.
6. Two successful snapshots were scoped to the tree reference e1359 during the Size step (to limit output); their references were taken from the immediately preceding snapshot in the task.

## T3 action audit (exact counts; browser calls only)

| Action | Count | Notes |
| --- | ---: | --- |
| Tab list | 1 | before any selection |
| Tab selections | 0 | tab 0 already current |
| Snapshots (successful) | 19 | 17 untargeted + 2 scoped to the tree reference e1359 (Size stage) |
| Snapshot calls that failed | 1 | "Ref e1359 not found" (scoped snapshot after the Name Tab; the one recovery) |
| `browser_find` | 0 | none |
| Click-tool clicks | 18 | Toolbox 1; Name cell 1; Save 4; Caption cell 1; Description 1; Caption ellipsis 1; prompt Yes 1; String value cell 1; String OK 1; Theme cell 1; Theme item 1; Size double 2 (one retry); Width cell 1; Height cell 1 |
| Coordinate click (canvas placement) | 1 | at (330, 300); the only coordinate click in T3 |
| Toolbox selections | 1 | Button row |
| Placement clicks | 1 | (the coordinate click) |
| Undo clicks | 0 | none |
| Typed entries (`browser_type`) | 4 | Name `ButtonHome`; Caption none (typed by key presses); String Value `Home`; Width `15`; Height `2` |
| Key presses (caption ID) | 8 | F X _ s H o m e |
| Tab key presses | 5 | Name; String Value; Theme Class; Width; Height |
| Screenshots (saved under `evidence/EXP-110-R2/`) | 10 | `t3-01` to `t3-10` |
| Caption list opens | 1 | |
| Theme Class list opens | 1 | |
| Prompts | 1 | "String FX_sHome does not exist. Create it?" answered Yes once |
| String editor OKs | 1 | |
| Designer Saves | 4 | A, B, C, D; responses as recorded above |
| Per-field entries | Name 1; Caption 1 (8 keys + list); String Value 1; Theme Class 1 selection; Width 1; Height 1 | |
| Corrections | 0 | none |
| Form closes / reopens | 0 | |
| Server-event errors | 0 | |
| Re-logins / session expiries | 0 / 0 | |
| **Total browser calls in T3** | **67** | 1 tabs + 20 snapshot calls (19 ok, 1 failed) + 18 clicks + 1 coordinate + 4 typed + 13 keys + 10 screenshots |

Note on the snapshot count: 20 snapshot calls in total: 17 untargeted successful (including one fresh recovery snapshot), 2 successful scoped to the tree reference e1359 during the Size step, and 1 scoped call to e1359 that failed with "Ref not found" after the Name Tab.

Auto-saved tool files: each click returned a snapshot file under `evidence/playwright/` (19 files, timestamps 17-03-52 to 17-08-48), and the tab list added one console log (`evidence/playwright/console-2026-10-17T17-03-40-362Z.log`). Tool artifacts; not opened, read or grepped.

## Cumulative browser action audit (T1 + T2 + T3)

| Action | T1 | T2 | T3 | Total |
| --- | ---: | ---: | ---: | ---: |
| Tab list | 1 | 1 | 1 | 3 |
| Snapshot calls (incl. failed) | 9 | 25 | 20 | 54 |
| `browser_find` | 1 | 2 | 0 | 3 |
| Click-tool clicks | 10 | 20 | 18 | 48 |
| Coordinate clicks (placement) | 0 | 1 | 1 | 2 |
| Toolbox selections | 0 | 1 | 1 | 2 |
| Undo clicks | 0 | 0 | 0 | 0 |
| Typed entries (`browser_type`) | 4 | 4 | 4 | 12 |
| Key presses (caption ID + Tab) | 0 | 15 | 13 | 28 |
| Screenshots | 8 | 15 | 10 | 33 |
| Mouse move / wheel / wait | 4 | 0 | 0 | 4 |
| Designer Saves | 0 | 4 | 4 | 8 |
| Prompts answered | 0 | 1 | 1 | 2 |
| String editor OKs | 0 | 1 | 1 | 2 |
| Caption/theme list opens | 0 | 2 | 2 | 4 |
| Form closes / reopens | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| **Total browser calls** | **37** | **83** | **67** | **187** |

## Worker-written file inventory (T3 addition)

- `evidence/EXP-110-R2/t3-01-placement-buttonhome-tree-canvas.png` (placement; button1_USER under Region00: menu below ButtonSignIn; Properties Name button1_USER)
- `evidence/EXP-110-R2/t3-02-saveA-response-buttonhome-name.png` (Save A toast; tree ButtonSignIn and ButtonHome under Region00: menu)
- `evidence/EXP-110-R2/t3-03-caption-list-open-buttonhome.png` (Caption list open; input empty)
- `evidence/EXP-110-R2/t3-04-caption-typed-FX_sHome-list-open.png` (field reads FX_sHome; list open)
- `evidence/EXP-110-R2/t3-05-string-editor-FX_sHome-value-Home-before-OK.png` (String editor: Name FX_sHome; String Value Home; before OK; the prompt was answered earlier, not shown in this capture)
- `evidence/EXP-110-R2/t3-06-saveB-response-buttonhome-caption-string.png` (Save B toast; Caption FX_sHome)
- `evidence/EXP-110-R2/t3-07-theme-class-set-before-saveC.png` (Theme Class FX_BlueButton; blue canvas button; Save enabled)
- `evidence/EXP-110-R2/t3-08-saveC-response-buttonhome-theme.png` (Save C toast)
- `evidence/EXP-110-R2/t3-09-size-rows-15-2-before-saveD.png` (Size 15; 2; Width 15; Height 2; before Save D)
- `evidence/EXP-110-R2/t3-10-saveD-response-buttonhome-size.png` (after Save D: Save icon disabled; no toast visible; the mouse is over the Save button)
- Record: `experiments/EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md` (T3 sections added; status line updated).
- Tool-generated (not authored by the worker; left in place): 19 page-snapshot files and 1 console log under `evidence/playwright/` (T3 list above).
- Earlier tool-generated files from T1 and T2 remain (see those sections).

## Cleanup inventory (created so far, after T3)

- Buttons: `ButtonSignIn` (T2) and `ButtonHome` (T3), both under FlexLayoutMain > Region00: menu (placed in order). Remaining: ButtonCart (T4).
- Strings: `FX_sSignIn` = `Sign In` (T2) and `FX_sHome` = `Home` (T3), both created through the Caption ellipsis (tenant-wide). Remaining: FX_sCart (T4).
- Form FX_CustomerPortal (User scope): all Designer Saves recorded above; Form currently open and clean.

## Knowledge state (T3)

- T3-1: Caption typed key by key and left through the Description row committed FX_sHome (second execution of the procedure). Observed, two executions in this run (T2 and T3).
- T3-2: Prompt "String FX_sHome does not exist. Create it?" then String editor pre-filled "FX_s Home", replaced by plain fill and Tab. Observed, two executions.
- T3-3: The Size summary updated immediately after Width and Height entries (`15; 2`). Observed, two executions (T2 and T3).
- T3-4: The Size row's first double-click revealed no sub-rows; the second double-click did. Observed once in T3; the T2 Size double-click behaved differently. Unresolved which action made the difference.
- T3-5: Canvas labels show the raw Caption ID (FX_sSignIn, FX_sHome) after the string creation and Saves. Observed; unresolved (T5 readback after reopen should check).
- T3-6: Save D's success toast was not captured; the Save button is disabled afterwards and no error dialog appeared. Observed only; not a confirmed success message; not replay-verified.
- AC status after T3: AC-2 steps A to D with Saves recorded for ButtonHome; AC-1 gate passed for T3 (footer caveat F2 unchanged); AC-3 and AC-5 pending T5.

## Knowledge state (T2)

- T2-1: Caption typed key by key and left through the Description row committed FX_sSignIn (the first list item was not committed). Observed, one execution.
- T2-2: Caption ellipsis prompt "String FX_sSignIn does not exist. Create it?" then String editor with pre-filled "FX_s Sign In", replaced by plain fill and Tab. Observed, one execution.
- T2-3: Size summary updated immediately after Width and Height entries (`15; 2`). Observed; contrasts with the EXP-110 stuck summary; cause of the EXP-110 error still unresolved.
- T2-4: Canvas button label kept showing the raw ID "FX_sSignIn" after the string was created and after Saves B, C and D. Observed; unresolved (T5 readback to check after reopen).
- T2-5: All four Saves succeeded in this run; no server-event error. Observed in one same-session run only; no replay verification and no cross-session durability claim.
- AC status after T2: AC-2 steps A to D (Designer Saves with responses) recorded for ButtonSignIn; AC-1 and AC-4 hold for T2 subject to the footer caveat (F2); AC-3 and AC-5 pending T5.

## T4: ButtonCart, steps A to D (2026-10-18): BLOCKED at step B by the server-event error

Result (observed): **Step A completed** (placement, Name, Save A). **Step B stopped**: the Caption ellipsis for FX_sCart returned the error dialog "The server event processing returned an error. If this persists, contact your system administrator." (`t4-03`) and did **not** show the planned prompt "String FX_sCart does not exist. Create it?". OK was clicked once. No Save was made after the error; steps C and D, Save C and Save D were not performed. No retry, close or reopen. T5 was not performed.

### Gate (read-only, before mutation)

- Sources reread at the start of T4 (before the context summary; not repeated in this context): AGENTS.md, hello-world-pt7 Section 7, transcript lines, both recipes, EXP-110, EXP-109 and EXP-106 Outcome sections.
- Gate state recorded in the pre-summary part of this task (no screenshot of the gate itself): User scope; FX_CustomerPortal open; Save disabled; no dialog; Region00: menu held ButtonSignIn then ButtonHome; no ButtonCart.
- Session: no expiry, logout card or sign-in page observed at any time in T4.

### Step A: placement and Name (evidence: `t4-01`; no screenshot before Save A)

- Toolbox "Button" row selected once.
- Placement: one coordinate click at **(330, 350)** inside the menu column, below ButtonHome (ButtonHome at about y 264-298 in `t4-01`; the new Button at about y 336-368; left of the first dotted divider). Result: `button1_USER` (PushButton, From Device Master True) under **Region00: menu** after ButtonHome. No Undo.
- Name: the Name editor filled once with `ButtonCart` (one `browser_type`), then Tab as a separate action. Committed: Name row `ButtonCart`; tree row `ButtonCart PushButton 0 FlexLayoutMain 0` after ButtonHome.
- **Save A**: Save button clicked once (toolbar ref e15). Save disabled afterwards (`t4-01`). The success toast is **not visible** in `t4-01`; Save A is recorded as "Save disabled, no error dialog", not as a confirmed toast. Tree after Save A: ButtonSignIn, ButtonHome, ButtonCart listed in order under Region00: menu (the rows are visible in `t4-01`).

### Step B: Caption and string (evidence: `t4-02`, `t4-03`; BLOCKED)

- Caption value cell clicked once (ref e1463 from the post-Save-A snapshot): list opened. Checked by screenshot only (`t4-02`: empty input over the list; first items ApplyFullTextIndexScriptQuestion, CatalogNotExistNotice, Collection Name, DisplayReportHeaders, E=Invalid, fAccessAs, ...). No snapshot taken while the list was open.
- ID typed key by key, one key per call: F, X, _, s, C, a, r, t (8 presses). No screenshot between typing and leaving the field.
- Left the field by clicking the **Description** row (not Tab), using the Description reference (e1449) from the post-Save-A snapshot (taken before the list opened). Snapshot after: Caption row **FX_sCart** (committed; the first list item was not committed). Save stayed disabled.
- Caption ellipsis clicked once (ref e1466). **Expected prompt "String FX_sCart does not exist. Create it?" did not appear.** The response was the error dialog "The server event processing returned an error. If this persists, contact your system administrator." (`t4-03`: the dialog over the Designer, ButtonCart selected, Caption FX_sCart, Size 14.25; 1.89, Save icon greyed). Because no prompt appeared, no prompt text is recorded as observed and Yes was not clicked.
- OK clicked once on the error dialog (ref e17434). Snapshot after: no dialog; Caption FX_sCart; Save disabled. The String editor did not open. **Whether FX_sCart was created is not verified** (no String check was run; the brief forbids further action after the error).
- **Stopped blocked.** Per the brief, no retry, no route change, no second ellipsis click, no close or reopen.

### Steps C and D: not performed

- Theme Class FX_BlueButton: not set (the Theme Class value is blank in `t4-03`). Save C: not made.
- Size Width 15, Height 2: not set (Size 14.25; 1.89 in `t4-03`). Save D: not made.

### T4 state at stop

- ButtonCart: child of FlexLayoutMain > Region00: menu, placed after ButtonHome; Name ButtonCart; Caption FX_sCart shown in the Caption field; Theme Class blank; Size 14.25; 1.89 (defaults). Whether the Caption FX_sCart is saved on the server is not verified (Save disabled after the Caption commit).
- Form FX_CustomerPortal: open; Save disabled; no dialog open (the error dialog was dismissed by OK). No Undo, no Regenerate, no drag.
- Operator action needed: a Designer reload (per the server-event rule). T5 and the remaining ButtonCart steps need a new instruction.

### Deviations (procedural, T4)

1. No screenshot of the placement and Name before Save A (the brief asks for a placement screenshot with the tree). `t4-01` (after Save A) is the first image showing the tree and Name.
2. The expected create prompt did not appear; the server-event error appeared instead, on the Caption ellipsis. This is the stop point. Not a Save error.
3. `t4-03` is named "create-prompt" by the planned filename but shows the error dialog; the file is kept as written and described here, not renamed.
4. Console error count from the tool headers (not inspected, per the brief): 2 after Save A, 3 after the Description click, 4 after the ellipsis click, 4 after OK.

## T4 action audit (exact counts; browser calls only)

| Action | Count | Notes |
| --- | ---: | --- |
| Tab list | 1 | before any selection (pre-summary part of T4) |
| Tab selections | 0 | tab 0 already current |
| Snapshots (successful) | 9 | 5 untargeted (pre-summary) + 4 untargeted (after Save A, after Description, after the ellipsis error, final) |
| Snapshot calls that failed | 0 | none |
| `browser_find` | 0 | none |
| Click-tool clicks | 7 | Toolbox 1; Name value 1; Save A 1; Caption cell 1; Description 1; Caption ellipsis 1; error OK 1 |
| Coordinate click (canvas placement) | 1 | at (330, 350); the only coordinate click in T4 |
| Toolbox selections | 1 | Button row (counted within the click-tool clicks) |
| Placement clicks | 1 | the coordinate click |
| Undo clicks | 0 | none |
| Typed entries (`browser_type`) | 1 | Name `ButtonCart` |
| Key presses | 9 | Tab after Name 1; caption ID F X _ s C a r t 8 |
| Screenshots (saved under `evidence/EXP-110-R2/`) | 3 | `t4-01` to `t4-03` |
| Caption list opens | 1 | |
| Theme Class list opens | 0 | not reached |
| Prompts | 0 | expected prompt did not appear; no Yes click |
| String editor OKs | 0 | String editor not opened |
| Designer Saves | 1 | Save A only; no Save after the error |
| Per-field entries | Name 1; Caption 1 (8 keys + Description commit) | |
| Corrections | 0 | none |
| Form closes / reopens | 0 | |
| Server-event errors | 1 | on the Caption ellipsis; OK answered once; run stopped |
| Re-logins / session expiries | 0 / 0 | |
| **Total browser calls in T4** | **31** | 1 tab list + 9 snapshots + 7 clicks + 1 coordinate + 1 typed + 9 keys + 3 screenshots |

## Cumulative browser action audit (T1 + T2 + T3 + T4)

| Action | T1 | T2 | T3 | T4 | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Tab list | 1 | 1 | 1 | 1 | 4 |
| Snapshot calls (incl. failed) | 9 | 25 | 20 | 9 | 63 |
| `browser_find` | 1 | 2 | 0 | 0 | 3 |
| Click-tool clicks | 10 | 20 | 18 | 7 | 55 |
| Coordinate clicks (placement) | 0 | 1 | 1 | 1 | 3 |
| Toolbox selections | 0 | 1 | 1 | 1 | 3 |
| Undo clicks | 0 | 0 | 0 | 0 | 0 |
| Typed entries (`browser_type`) | 4 | 4 | 4 | 1 | 13 |
| Key presses (caption ID + Tab) | 0 | 15 | 13 | 9 | 37 |
| Screenshots | 8 | 15 | 10 | 3 | 36 |
| Mouse move / wheel / wait | 4 | 0 | 0 | 0 | 4 |
| Designer Saves | 0 | 4 | 4 | 1 | 9 |
| Prompts answered | 0 | 1 | 1 | 0 | 2 |
| String editor OKs | 0 | 1 | 1 | 0 | 2 |
| Caption/theme list opens | 0 | 2 | 2 | 1 | 5 |
| Form closes / reopens | 0 | 0 | 0 | 0 | 0 |
| Server-event errors | 0 | 0 | 0 | 1 | 1 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| **Total browser calls** | **37** | **83** | **67** | **31** | **218** |

## Worker-written file inventory (T4 addition)

- `evidence/EXP-110-R2/t4-01-saveA-response-buttoncart-name.png` (after Save A: Name ButtonCart; tree rows ButtonSignIn, ButtonHome, ButtonCart; Save icon greyed; no toast visible; Size 14.25; 1.89; canvas third button blank).
- `evidence/EXP-110-R2/t4-02-caption-list-open-buttoncart.png` (Caption list open with empty input; first items as listed above; Name ButtonCart).
- `evidence/EXP-110-R2/t4-03-caption-ellipsis-create-prompt-buttoncart.png` (named for the planned prompt; shows the server-event error dialog over the Designer after the Caption ellipsis click; Caption FX_sCart; Theme Class blank; Size 14.25; 1.89).
- Record: `experiments/EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md` (status line updated; T4 sections appended).
- Tool-generated (not authored by the worker; left in place, not opened or grepped): page-snapshot and console files under `evidence/playwright/` written by the tool during T4.

## Cleanup inventory (after T4)

- Buttons: `ButtonSignIn` (T2), `ButtonHome` (T3) and `ButtonCart` (T4, step A only; Caption FX_sCart shown, Theme Class and Size not set), all under FlexLayoutMain > Region00: menu in order. The three Buttons exist in the Designer; ButtonCart is incomplete.
- Strings: `FX_sSignIn` = `Sign In` (T2) and `FX_sHome` = `Home` (T3), both created through the Caption ellipsis. `FX_sCart`: **not verified** as created (the ellipsis raised the server-event error; no prompt or String editor appeared).
- Form FX_CustomerPortal (User scope): Saves A (T4), and the earlier Saves recorded above; open and clean (Save disabled); no dialog open.

## Knowledge state (T4)

- T4-1: Caption typed key by key and left through the Description row committed FX_sCart (third execution). Observed.
- T4-2: The Caption ellipsis for FX_sCart returned "The server event processing returned an error..." instead of the create prompt. The same ellipsis action produced the create prompt in T2 and T3. Observed once; cause unresolved; not replay-verified.
- T4-3: Save A (first Save of T4) left Save disabled; no success toast visible in `t4-01`. Observed only; not a confirmed success message.
- T4-4: The Caption commit (FX_sCart) left the Save button disabled. Observed once; unresolved whether the Caption change is held on the server.
- T4-5: The server-event error in this run appeared on the Caption ellipsis, not on a Designer Save as in EXP-110. Observed once; the EXP-110 cause remains unresolved.
- AC status after T4: AC-2 holds for ButtonSignIn and ButtonHome (steps A to D with Saves recorded); for ButtonCart only step A (with Save A) is complete and step B is blocked, so AC-2 is **not met** for ButtonCart. AC-1 gate passed for T4 (footer caveat F2 unchanged). AC-3 and AC-5 pending T5. AC-4: no other component changed in T4; no Undo, no Regenerate, no drag, no runtime action, no unload, no checkout action.

## Next step (not performed)

- Operator: Designer reload (the server-event rule). Then a new instruction is needed to resume ButtonCart at step B (Caption FX_sCart and the ellipsis, after inspecting whether FX_sCart exists), then steps C and D. T5 (close/reopen readback and final audit) is not authorized by this task and was not performed.

## Outcome (operator, 2026-10-18)

Blocked (observed). **ButtonSignIn and ButtonHome completed steps A to D with a Save after each; ButtonCart stopped at step B, where the Caption ellipsis for FX_sCart raised "The server event processing returned an error."** The run (R-20261018-004719-xU81, 4 worker tasks, 4 cycles) ended blocked; the operator reloaded the Designer. T5 (close/reopen readback) was not reached, so nothing in this run is persistence-verified.

- T1: gate passed; string check: FX_sCustomerPortal found; FX_sSignIn, FX_sHome, FX_sCart absent (so the EXP-110 String editor OK did not leave FX_sSignIn behind).
- T2 ButtonSignIn: Name, Caption FX_sSignIn (left by clicking Description, no first-row commit), string FX_sSignIn = Sign In created, FX_BlueButton, Size 15; 2; Saves A to D each with the success toast.
- T3 ButtonHome: the same with FX_sHome = Home; Saves A to C with the toast; Save D left Save disabled with no error, toast not captured.
- T4 ButtonCart: Name and Save A (Save disabled, no error, toast not captured); Caption FX_sCart committed in the panel; the ellipsis then raised the error; OK once; stop. Theme Class blank and Size 14.25; 1.89 at the stop. Whether FX_sCart exists and whether the Caption reached the server are unknown.
- **The EXP-110 Width/Height hypothesis is refuted**: in T2 and T3 the Size summary updated at once (15; 1.89, then 15; 2) and Save D succeeded.
- **Console diagnosis by the operator assistant** (tool-written console logs under `evidence/playwright/`, not read by the worker; ignoring the two baseline "unload is not allowed" policy errors):
  - EXP-110 T2 (`console-2026-10-17T16-24-26-243Z.log`): two `POST Designer/Form/GenerateServerEvent` responses with HTTP 400 during the Caption edits, with no dialog, then HTTP 400 from `Designer/DesignerSession/SaveChanges` (the visible Save error). The EXP-110 Save failure was a consequence of earlier silent server-event failures.
  - EXP-110-R2 T2 and T3: no HTTP 400.
  - EXP-110-R2 T4 (`console-2026-10-17T17-13-00-731Z.log`): HTTP 400 from `GenerateServerEvent` when the Caption was committed by the Description click (worker-reported console error count 2 to 3, no dialog), and again at the ellipsis click (3 to 4, the dialog).
  - Cause unresolved. Not the discriminator: the stale Properties header `button1_USER (Button)` appears in T2, T3 and T4 alike (`t2-03`, `t3-03`, `t4-01`); the Caption procedure was the same in all three tasks.
- Screenshots viewed by the operator assistant: `t4-01` (after Save A: tree ButtonSignIn, ButtonHome, ButtonCart under Region00: menu; Name ButtonCart; header still button1_USER; canvas raw labels FX_sSignIn, FX_sHome); `t4-03` (Error dialog over the Designer; Caption FX_sCart; Theme Class blank; Size 14.25; 1.89); `t3-10` (ButtonHome: FX_sHome, FX_BlueButton, 15; 2; Save disabled; no toast).
- Findings (observed): Saving after each step works for a Button in a Vertical Flex region (two executions); the Size summary updates after the Width and Height entries; the canvas shows the raw Caption string ID (FX_sSignIn, FX_sHome) in the Designer after the string is created (unresolved whether a reopen shows the value); a Caption commit can fail silently with HTTP 400 and surface only at the next server event.
- Open: the footer region `Region00: UNKNOWN0` under FlexLayoutFooter (F2) predates this run; its origin is to be inspected separately.
- Confinement (git status): only `evidence/EXP-110-R2/` and this record were written by the run; `evidence/playwright/` holds tool-written files outside version control.
- Next: EXP-110-R3: read-only check after the reload (the three Buttons and their properties, strings FX_sSignIn, FX_sHome, FX_sCart); finish ButtonCart from the first step that did not persist, with a Save after each step and a stop if the console error count rises after a Caption commit; then the close/reopen readback of all three Buttons.
