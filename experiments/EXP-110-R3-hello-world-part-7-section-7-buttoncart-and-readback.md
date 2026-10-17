# EXP-110-R3 — Hello World Part 7 Section 7: read back ButtonSignIn and ButtonHome after the operator reload, complete ButtonCart, close/reopen readback

Experiment: EXP-110-R3
Run: R-20261018-012827-clGk, cycle 0
Task T1 (read-only gate, Button readback and string check). Written 2026-10-18.
Worker session: 1081947a-2059-4dd8-b513-811405f7e05d
Mode: LEARNING MODE (AGENTS.md). Findings are observed only.
Scope: User scope; Form FX_CustomerPortal; FlexLayoutMain > Region00: menu.
Predecessors: EXP-110 (blocked at the first Save), EXP-110-R2 (blocked at ButtonCart step B; operator reloaded the Designer).

## Status

- **T1 complete. No change was made in T1.** No Designer Save, no property edit, no Undo, no dialog OK.
- **T2 complete (cycle 1; see the T2 section).** ButtonCart steps B, C and D performed, each followed by one Designer Save; all three Saves succeeded. Step A was not repeated (ButtonCart already existed). Console error count stayed at 2 errors, 0 warnings at every checkpoint.
- **T3 complete (cycle 2): one close and one reopen of FX_CustomerPortal, same-session readback of the three Buttons and the three strings, and the final audit (see the T3 section).** No Designer Save, no property edit, no Undo, no global-object change in T3. Console 2 errors, 0 warnings at every checkpoint.

## Sources reviewed (before any browser action)

- `AGENTS.md` (repository file, read in full).
- `docs/mongoose/transcripts/hello-world-pt7.md` lines 205–217 (Section 7 table and notes).
- `docs/mongoose/transcripts/hello-world-pt7.md` transcript lines for [10:54] to [12:08] (lines 454–465 of the file, read with lines 466–467 in the same range). Disclosure: that range read included two transcript lines starting at [12:08] (lines 466–467), which belong to Section 8 (the Section 8 header is at line 219). The Section 8 content was not used. A keyword search of the file returned its line numbers, including line 219, but no other Section 8 content was read.
- `recipes/components/add-component-from-toolbox.md` (read in full).
- `recipes/session/session-expiry-and-stale-designer.md` (read in full).
- Outcome (operator) sections only: `experiments/EXP-110-R2-hello-world-part-7-section-7-menu-buttons-stepwise.md` lines 585–603; `experiments/EXP-110-hello-world-part-7-section-7-fx-customer-portal-menu-buttons.md` lines 304–315; `experiments/EXP-109-hello-world-part-7-section-6b-fx-customer-portal-main-regions.md` lines 760–776. A heading search across `experiments/` listed Outcome headings for other records; their content was not read.
- The EXP-110-R3 record did not exist before this task; it was created here.

## Starting state (observed)

- Browser tabs listed once before any selection (`browser_tabs list`):
  - Tab 0 (current): Infor Mongoose Designer, `MGForm=FX_CustomerPortal`.
  - Tab 1: "Mongoose" portal page (Infor OS portal URL).
  - No tab selection was performed in this task. Tab 1 was not selected, screenshotted or inspected, so its session state is not established by this task. The Designer tab showed no session-expiry modal, logout card or sign-in page.
- Designer tab, Form tab selected, Form FX_CustomerPortal (Name row), Form Type Flex, Device Type Default.
- Status bar: `[ ScopeType: User / ScopeName: … ]` (User scope; the scope name is omitted from this record).
- Save disabled; Regenerate Form disabled; Undo disabled; no dialog open.
- Console error count at the start and after every action in T1: **2 errors, 0 warnings** (the count shown in the tool output; console messages were not read).

## Designer gate (AC-1)

- Gate: passed. FX_CustomerPortal was already open and clean; it was not reopened (no Form-menu recent-forms action was needed).
- Components tree was viewed after expanding the Details panel and its Components tab, and expanding the Components grid (view-only).

Components tree (observed, in tree order; the Container column of the three Buttons reads `FlexLayoutMain`):

- flexlayoutPane_FX_CustomerPortal (FlexLayout), with Region00: header; FlexLayoutHeader (FlexLayout) with Region00: header; StaticHeader (Static); Region01: user; StaticCustIcon (Static); StaticCustID (Static); Region01: main.
- FlexLayoutMain (FlexLayout), with **Region00: menu** and the three Buttons below it:
  - ButtonSignIn (PushButton, Container FlexLayoutMain)
  - ButtonHome (PushButton, Container FlexLayoutMain)
  - ButtonCart (PushButton, Container FlexLayoutMain)
- Then Region01: spacer1; Region02: signinpage; Region03: homepage; Region04: cartpage; Region05: spacer2.
- FlexLayoutFooter (FlexLayout), with Region02: footer, and Region00: UNKNOWN0 (already present, not touched; the footer's Region00: UNKNOWN0 was noted as pre-existing).
- No other component appears under Region00: menu. Header and footer components are unchanged in name and position.

Button readback (selection only; each Button selected by its Components row):

| Button | Name | Caption (value) | Theme Class | Size | Type | Container | Result against expected |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ButtonSignIn | ButtonSignIn | FX_sSignIn | FX_BlueButton | 15; 2 | PushButton | FlexLayoutMain (Flex Attributes: Index 0, Target: menu) | Matches expected |
| ButtonHome | ButtonHome (Name from the Properties title "ButtonHome (Button)") | FX_sHome | FX_BlueButton | 15; 2 | PushButton | FlexLayoutMain | Matches expected |
| ButtonCart | ButtonCart | **blank** | **blank** | **14.25; 1.89** (default) | PushButton | FlexLayoutMain | Partial: only Name persisted |

- ButtonSignIn and ButtonHome match the expected values, so the run did not stop blocked on them.
- ButtonCart: Name persisted. Caption and Theme Class are blank and Size is the default 14.25; 1.89. This is the state after EXP-110-R2 step A (placement and Name). No Caption value had persisted.
- The Properties panel shows Caption in the raw ID form (`FX_sSignIn`, `FX_sHome`) for the two Buttons.

Canvas labels (observed in the snapshot and screenshot t1-01 / t1-02): **"Sign In"** and **"Home"** (light teal buttons, showing the resolved string values, not raw IDs), and a third button with no label (ButtonCart, blank Caption; drawn in solid blue at capture time because it was the selected component). This differs from EXP-110-R2, where the canvas showed raw IDs FX_sSignIn and FX_sHome.

## String check (AC-1, read-only)

Edit menu > String opened the Global Objects dialog (Strings group, filter textbox). Filtering required clicking the dialog's search icon; typing alone did not filter, and Enter was not used. Each result was read from the dialog's own snapshot or find output.

| String ID | Result | Value |
| --- | --- | --- |
| FX_sCustomerPortal (positive control) | found, one row | not read (not required) |
| FX_sSignIn | found, one row | **Sign In** |
| FX_sHome | found, one row | **Home** |
| FX_sCart | **absent** (empty filtered grid) | n/a |

- FX_sSignIn = Sign In and FX_sHome = Home, as expected.
- FX_sCart is absent. Step B of T2 must therefore create it through the Caption ellipsis, not reuse it.
- The dialog was left with **Cancel**. After Cancel, the Designer tab still showed FX_CustomerPortal selected, Save disabled, and no dialog. (Observation: after Cancel the page URL no longer contains `MGForm=FX_CustomerPortal`; the Form tab and its title stayed the same, so this was not treated as a change of Form.)
- Limitation: FX_sCart absence rests on one filtered check (the grid was empty after the search icon was clicked, confirmed in one dialog snapshot). It was not re-checked after Cancel.

## Actions performed in T1 (in order)

1. Read sources (listed above) with no browser action.
2. `browser_tabs list` (listing only; no tab selection).
3. Designer snapshot (inline, untargeted) — gate state.
4. Click: Details "Expand Panel" (view: shows Details panel).
5. Inline snapshot.
6. Click: Details "Components" tab (view).
7. Inline snapshot.
8. Click: Components grid "Expand" (view: shows the tree).
9. Inline snapshot.
10. Screenshot `evidence/EXP-110-R3/t1-01-gate-components-tree-and-canvas.png`.
11. Click: ButtonSignIn row (selection only).
12. Inline snapshot (ButtonSignIn properties; Appearance and Layout categories collapsed).
13. Click: Properties "Appearance" row (selected the row; did not expand it).
14. Inline snapshot.
15. Click: Properties expand-all (view).
16. Inline snapshot (Theme Class, Size read for ButtonSignIn).
17. Click: ButtonHome row (selection only); Find (read Caption, Theme Class, Size).
18. Click: ButtonCart row (selection only); Find (read Name, Caption, Theme Class, Size).
19. Click: Edit menu.
20. Targeted snapshot of Edit menu (e5); String menu item located (no other Edit item used).
21. Click: Edit > String (Global Objects dialog opened).
22. Find ("Global Objects"); targeted snapshot of the dialog.
23. Type FX_sCustomerPortal into the Strings filter (no Enter); wait 2 s; find.
24. Click: dialog search icon (filter applied).
25. Find (FX_sCustomerPortal: one row).
26. Type FX_sSignIn into the filter; click search icon; find; click FX_sSignIn row (selection); targeted dialog snapshot (String Value "Sign In").
27. Type FX_sHome; click search icon; find; click FX_sHome row (selection); find ("String Value": "Home").
28. Type FX_sCart; click search icon; find; targeted dialog snapshot (empty grid).
29. Screenshot `evidence/EXP-110-R3/t1-02-string-check-fx-scart-filter-empty.png`.
30. Click: dialog **Cancel**.
31. Find (Save disabled; FX_CustomerPortal tab selected; no dialog present).

## Evidence

- `evidence/EXP-110-R3/t1-01-gate-components-tree-and-canvas.png` — viewed by the worker. Shows the Designer on FX_CustomerPortal (tab title, Form tab), the status bar User scope, the Components tree with the menu Buttons under FlexLayoutMain (ButtonSignIn, ButtonHome, ButtonCart indented under Region00: menu, which is under FlexLayoutMain), and the canvas with "Sign In" and "Home" labels and a third blank blue button. Save is disabled in the toolbar. Does NOT show the Caption/Theme Class/Size values (these are in the snapshot readback above, not in this image). Does NOT show the Designer's Save state after any change (no change was made).
- `evidence/EXP-110-R3/t1-02-string-check-fx-scart-filter-empty.png` — viewed by the worker. Shows the Global Objects dialog (Strings group) with the filter "FX_sCart" and an empty list. The Properties pane still shows the stale FX_sHome row (Name FX_sHome, String Value Home) from the earlier selection; this is not a FX_sCart value. The Components tree (lower panel) highlights the ButtonCart row, and the Properties pane (right) shows ButtonCart (Button) with Caption blank and Theme Class blank. Does NOT prove FX_sCart's absence in the database; it shows only the filtered list in this session.

## Action audit (cumulative through T1)

- Browser tab listings: 1. Tab selections: 0.
- Clicks: 17 — Designer UI view clicks 6 (Details expand, Components tab, Components grid Expand, Properties Appearance row, Properties expand-all, Edit menu); component row selections 3 (ButtonSignIn, ButtonHome, ButtonCart); string dialog 8 (String menu item, four search-icon clicks, two FX row selections, Cancel). Total = 6 + 3 + 8 = 17.
- Typed entries: 4 (into the Global Objects Strings filter only: FX_sCustomerPortal, FX_sSignIn, FX_sHome, FX_sCart). Typed entries into Designer properties: 0.
- Corrections: 0. Waits: 1 (2 s).
- Find calls: 12.
- Snapshots: inline untargeted 7; targeted 5 (Edit menu e5 ×1; Global Objects dialog e3363 ×4); one untargeted snapshot after String that exceeded the output limit (its saved output not read). Tool-written page snapshot files were produced automatically after each click; the worker did not read them.
- Screenshots taken: 2 (t1-01, t1-02); both viewed by the worker.
- Designer Saves: 0. Undo clicks: 0. Dialog OKs: 0. Cancel: 1 (Global Objects).
- Caption ellipsis clicks: 0. Prompts answered: 0. String editor OKs: 0.
- Property edits: 0. Placement clicks: 0. Toolbox selections: 0. Drags: 0.
- Form closes/reopens: 0. Recent-forms opens: 0. Select Form OK: 0.
- Re-logins: 0. Session expiries: 0. Server-event errors: 0. Console messages read: 0.
- Console error count: 2 errors, 0 warnings at every recorded point in T1.

## Worker-written file inventory (T1)

- Written: `experiments/EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md` (this record, created).
- Written: `evidence/EXP-110-R3/t1-01-gate-components-tree-and-canvas.png`.
- Written: `evidence/EXP-110-R3/t1-02-string-check-fx-scart-filter-empty.png`.
- Not written by the worker (tool-generated, outside this record): page snapshot files saved automatically by the browser tool under `evidence/playwright/`, one per click, plus oversized tool output files under the session `tool-results` folder (one untargeted snapshot and one find result). The worker did not read or edit them.

## Cleanup inventory (T1 state; to be completed in T3)

- Buttons: ButtonSignIn (present; from EXP-110-R2), ButtonHome (present; from EXP-110-R2), ButtonCart (present, Name only; created in EXP-110-R2).
- Strings: FX_sSignIn (present, Sign In; created in EXP-110-R2), FX_sHome (present, Home; created in EXP-110-R2), FX_sCart (absent at T1).
- EXP-110-R2 created two of the three strings (FX_sSignIn, FX_sHome); FX_sCart is for T2 if created there.

## Next step for T2 (superseded: T2 performed, see the T2 section)

- Step A (placement and Name) is complete: ButtonCart exists under Region00: menu with Name ButtonCart. No placement click and no Save for step A in T2.
- **Start at step B**: set ButtonCart's Caption to FX_sCart. FX_sCart is absent, so: click the Caption ellipsis once, expect the prompt "String FX_sCart does not exist. Create it?" (record verbatim), answer Yes once, in the String editor replace the pre-filled value with `Cart` (plain fill and Tab), verify, OK once. Then Designer Save once (record response). Record the console error count after each action; stop before any further click if it rises.
- Then step C (Theme Class FX_BlueButton, one Save) and step D (Width 15, Height 2, one Save). Record the Size summary after each entry and after the Save.
- Caution from EXP-110-R2: a Caption commit may fail silently with HTTP 400 and surface only at the next server event; the console error count after the Caption step is the early warning.

## T2 — ButtonCart steps B, C and D (cycle 1)

Scope: step B (Caption FX_sCart and string FX_sCart = Cart), step C (Theme Class FX_BlueButton), step D (Width 15, Height 2). Step A was not performed (ButtonCart existed from EXP-110-R2). No other component, region, Form or global object was touched. T3 was not executed.

### Sources (re-read at the start of T2)

- `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` lines 205–217; transcript lines 454–465 (10:54 to 12:01 narration, the Section 7 range); `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; Outcome sections only: EXP-110-R2 lines 585–603, EXP-110 lines 304–315, EXP-109 lines 760–776.
- **Procedural qualification (T1):** the T1 transcript read covered lines 454–467, so it included two lines (466–467) from the Section 8 header area. Those lines were not used for any decision. T2 read only lines 454–465.

### Starting state (observed)

- Browser tabs listed once (tab 0 Designer, FX_CustomerPortal; tab 1 portal page). No tab selection was made.
- Console error count at task start: **2 errors, 0 warnings**.
- Designer: FX_CustomerPortal, User scope (status bar `ScopeType: User`), Save disabled, Undo disabled, no dialog open.
- ButtonCart selected (Properties header "ButtonCart (Button)"): Name ButtonCart; Caption blank; Theme Class blank; Size 14.25; 1.89.
- Components tree under FlexLayoutMain > Region00: menu: ButtonSignIn, ButtonHome, ButtonCart (Container FlexLayoutMain), as in T1.

### Step B — Caption FX_sCart, then string FX_sCart = Cart

1. Clicked the Caption value control of ButtonCart (ref from the task-start snapshot). The Caption list opened with ApplyFullTextIndexScriptQuestion highlighted. Console 2. Screenshot `evidence/EXP-110-R3/t2-01-caption-list-open-buttoncart.png` (viewed: list open, combo in edit mode, canvas and tree visible; no snapshot was taken while the list was open).
2. Typed `FX_sCart` key by key: F, X, _, s, C, a, r, t. **Deviation:** the F and then X and _ presses were not all sent one at a time: X and _ were issued in one parallel call. Both completed. Remaining presses were one per action. The press-key output carries no console count, so the count was read after typing with a one-second wait: **2 errors**.
3. Left the field by clicking the **Description** row (no Tab). Console **2**. Inline snapshot: Caption shows FX_sCart committed; Save became enabled (dirty); canvas label for the third button reads FX_sCart (raw ID).
4. Caption ellipsis clicked once. Console **2**. Prompt text (verbatim, viewed in `evidence/EXP-110-R3/t2-02-prompt-string-fx-scart-does-not-exist.png`): **"String FX_sCart does not exist. Create it?"** The prompt named FX_sCart, so no stop applied. Answered **Yes** once. Console **2**.
5. String editor (dialog "String"): Name FX_sCart; String Value pre-filled "FX_s Cart". Clicked the String Value cell, plain-filled `Cart`, Tab. Targeted snapshot showed String Value "Cart". Console **2**. OK clicked once. Console **2**.
6. **Save B** (one Designer Save): no error dialog; Save disabled and Undo disabled afterward; no server-event text found; console **2**. Toast not captured.

Note: the string's value was checked in the editor before OK. It was not re-read after OK in T2; T3 reads it back.

### Step C — Theme Class FX_BlueButton

1. Clicked the Theme Class value control. The list opened with a single option, FX_BlueButton. Console 2. An untargeted snapshot showed the list (the list was small enough to snapshot).
2. Clicked the FX_BlueButton option. Console 2. Tab. Console 2. Snapshot: Theme Class FX_BlueButton committed; Save enabled.
3. **Save C** (one Designer Save): no error; Save disabled; Undo disabled; console **2**.

### Step D — Size 15; 2

1. Size row (Layout) read as 14.25; 1.89 before the double-click. Double-clicked the Size row: the Width (14.25) and Height (1.89) sub-rows appeared (Lock Size False). Console 2.
2. Width: clicked the value cell (editor opened, value 14.25), plain-filled `15`, Tab. Size summary after the entry: **15; 1.89** (updated at once). Console 2.
3. Height: clicked the value cell (editor opened, value 1.89), plain-filled `2`, Tab. Size summary after the entry: **15; 2**. Console 2.
4. Screenshot `evidence/EXP-110-R3/t2-03-size-rows-15-2-before-save-d.png` (viewed: Size 15; 2, Width 15, Height 2 in the Layout section, the third canvas button in the blue theme labelled FX_sCart, Save icon active).
5. **Save D** (one Designer Save): no error; Save disabled; Undo disabled; no server-event text; console **2**.
6. Post-save find (same session): Caption FX_sCart; Theme Class FX_BlueButton; Size 15; 2.

### Results against AC-2 (T2)

- Each performed step (B, C, D) was followed by exactly one Designer Save; each Save response had no error, and Save was disabled afterward.
- Name ButtonCart (from EXP-110-R2) unchanged. Caption FX_sCart, Theme Class FX_BlueButton, Size 15; 2 — verified in the same session after Save D.
- String FX_sCart created once through the Caption ellipsis prompt (the prompt named FX_sCart; it was absent at that point). Value entered: Cart.
- Corrections: **0** (each field entered once).
- Console error count: 2 errors, 0 warnings after every action in T2; no rise; no server-event error.
- Limits: canvas label reads the raw ID "FX_sCart" (not "Cart") after the Caption commit and after Save D (observed). The string value Cart is not re-read after OK in T2. Nothing here is cross-session durability; T3 checks the readback.

### Action audit — T2 only

- Browser tab listings: 1. Tab selections: 0.
- Clicks: **14** (Caption value 1; Description row 1; Caption ellipsis 1; prompt Yes 1; String Value cell 1; String editor OK 1; Designer Save 3 (B, C, D); Theme Class control 1; Theme Class option 1; Size row double-click 1; Width cell 1; Height cell 1).
- Key presses: **12** (8 Caption characters F, X, _, s, C, a, r, t; 4 Tab: String Value, Theme Class, Width, Height).
- Typed fills (browser_type): **3** (String Value "Cart", Width "15", Height "2").
- Waits: 1 (1 s, after the Caption typing; to read the console count).
- Field entries: Caption 1 (committed by Description click, 0 corrections); String Value 1; Theme Class 1; Width 1; Height 1; Name 0 (not performed).
- Prompts: 1 (verbatim above; answered Yes). String editor OK: 1. Cancel: 0.
- List opens: 2 (Caption; Theme Class).
- Designer Saves: **3** (B, C, D), each with a response and Save state as above.
- Undo clicks: 0. Placement clicks: 0. Toolbox selections: 0. Drags: 0. Regenerate: 0.
- Form closes/reopens: 0. Recent-forms opens: 0. Re-logins: 0. Session expiries: 0.
- Server-event errors: 0. Console rises: 0 (2 errors at every checkpoint).
- Screenshots: 3 (t2-01, t2-02, t2-03), all viewed.
- Snapshots, untargeted: 8 (6 inline; 2 too large, saved by the tool, not read — the one after the Caption ellipsis and one recovery snapshot after a `Ref e11 not found`). Snapshots, targeted successful: 10 (prompt e17050 ×1; String dialog e17011 ×3; Properties panel e935 ×5; Save button e17003 ×1). Targeted failed: 1 (e11, Ref not found; recovered with the untargeted snapshot above).
- Finds: 7. Read calls: 12 (8 source reads; 3 screenshot views; 1 denied read of a tool-saved snapshot file, outside the repository, not a repository file).
- Object creation: global object FX_sCart (string) created once, value Cart; no other global object created or changed.

### Cumulative action audit (T1 + T2)

- Browser tab listings: 2. Tab selections: 0.
- Clicks: 31 (T1 17; T2 14). Key presses: 12 (T2). Typed fills: 7 (T1 4 filter entries; T2 3). Caption characters typed by key press: 8 (T2).
- Finds: 19 (T1 12; T2 7). Waits: 2.
- Snapshots, untargeted inline: 13 (T1 7; T2 6). Untargeted saved by the tool, not read: 3 (T1 1; T2 2). Targeted successful: 15 (T1 5; T2 10). Targeted failed: 1 (T2).
- Screenshots: 5 (T1 2; T2 3), all viewed.
- Designer Saves: 3 (all T2). Undo: 0. Dialog OKs (String editor): 1. Cancel (Global Objects): 1 (T1). Prompts answered: 1 (Yes). List opens: 2 (T2).
- Form closes/reopens: 0. Re-logins: 0. Server-event errors: 0. Console rises: 0.
- Corrections: 0. Placement clicks: 0. Drags: 0. Toolbox selections: 0.

### Worker-written file inventory (T2)

- Written/updated: `experiments/EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md` (status lines, T2 section; the record was created in T1).
- Written: `evidence/EXP-110-R3/t2-01-caption-list-open-buttoncart.png`; `evidence/EXP-110-R3/t2-02-prompt-string-fx-scart-does-not-exist.png`; `evidence/EXP-110-R3/t2-03-size-rows-15-2-before-save-d.png`.
- Not worker-written: the browser tool saved page snapshot files under `evidence/playwright/` automatically (one per action); the tool also saved three oversized snapshot results outside the repository. The worker did not read or edit them.

### Final state after T2 (observed)

- FX_CustomerPortal open in the Designer, User scope; Save disabled; Undo disabled; no dialog, menu or editor open; no unsaved change.
- Selected component ButtonCart; Details Components tab; Properties Layout section with Size expanded.
- Console error count: 2 errors, 0 warnings.

## T3 — close/reopen readback and final audit (cycle 2)

Scope: one ordinary close and one reopen of FX_CustomerPortal; readback of the three Buttons and the three strings; leave the Form open and clean; write this audit. No Designer Save, no edit, no Undo, no global-object change, no Regenerate, no Form other than FX_CustomerPortal.

### Sources (re-read at the start of T3)

- `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt7.md` lines 205–217; transcript lines 454–465 (the 10:54–12:01 narration of Section 7; the Section 8 header at line 219 was not read); `recipes/components/add-component-from-toolbox.md`; `recipes/session/session-expiry-and-stale-designer.md`; Outcome sections only: EXP-110-R2 lines 585–603, EXP-110 lines 304–315, EXP-109 lines 760–776.
- This record was read only for the audit (the T1 and T2 sections are the source of the prior counts).
- Procedural qualification: the T1 transcript read covered lines 454–467 (two Section 8 lines, 466–467). T3 did not read them.

### Starting state (observed)

- Tabs listed once before any tab selection (tab 0 Designer FX_CustomerPortal; tab 1 portal page). No tab was selected or screenshotted in T3.
- The first untargeted snapshot persisted to a file too large to show inline. The state was established with read-only finds and one-second waits (console count shown in the tool output). Observed: FX_CustomerPortal tab selected; Save disabled; Undo disabled; `[ ScopeType: User / ScopeName: … ]`; no dialog; no sign-in or session-expiry indication. Console **2 errors, 0 warnings**.
- The Designer was clean, so the close was performed.

### Close (Form-tab control)

- Clicked the Form-tab close control (closable FX_CustomerPortal). Console 2. Afterward a find showed no alertdialog, no dialog, and the FX_CustomerPortal heading absent.
- **Prompt: none appeared.** No save prompt was answered, and no prompt text exists to record. The Form closed clean.

### Reopen (Form menu, recent-forms entry)

- Clicked Form menu; the menu listed FX_CustomerPortal among recent forms. Clicked the FX_CustomerPortal menu entry (not Select Form OK). Console 2. The URL then carried `MGForm=FX_CustomerPortal`; the tab title FX_CustomerPortal; Save disabled; User scope.
- Details panel was collapsed after reopen; expanded it (view), selected the Components tab, and expanded the Components grid (view). Console 2 at each step.

### Components tree after reopen (observed)

Under FlexLayoutMain (Container `flexlayoutPane_FX_CustomerPortal`):
- **Region00: menu** with three children in this order: ButtonSignIn (PushButton, Container FlexLayoutMain), ButtonHome (PushButton, Container FlexLayoutMain), ButtonCart (PushButton, Container FlexLayoutMain). Flex Attributes: "Index: 0 Target: menu" for ButtonSignIn and ButtonHome; ButtonCart's Flex Attributes read "Index: 0 Target: menu" in its own Properties snapshot.
- Region01: spacer1; Region02: signinpage; Region03: homepage; Region04: cartpage; Region05: spacer2 (siblings of Region00 under FlexLayoutMain, as in T1).
- Header branch unchanged as in T1: Region00: header; FlexLayoutHeader (Region00: header, StaticHeader); Region01: user (StaticCustIcon, StaticCustID); Region01: main.
- Footer branch: FlexLayoutFooter with Region02: footer; Region00: UNKNOWN0 (already present; not touched).
- Compared with T1 and T2 (names, order, and container), no other component appears under Region00: menu and no region was added or removed. Positions and sizes of the other components were not measured.

### Button readback (selection only; Properties read from the Properties panel)

| Button (Components row) | Name (Name row) | Caption (value) | Theme Class | Size summary | Width / Height | Expected | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ButtonSignIn | ButtonSignIn | FX_sSignIn | FX_BlueButton | 15; 2 | 15 / 2 | FX_sSignIn / FX_BlueButton / 15; 2 | Matches |
| ButtonHome | ButtonHome | FX_sHome | FX_BlueButton | 15; 2 | 15 / 2 | FX_sHome / FX_BlueButton / 15; 2 | Matches |
| ButtonCart | ButtonCart | FX_sCart | FX_BlueButton | 15; 2 | 15 / 2 | FX_sCart / FX_BlueButton / 15; 2 | Matches |

- Type PushButton and From Device Master True for all three (observed).
- Canvas labels (observed in the reopened canvas): **"Sign In"**, **"Home"**, **"Cart"** — the resolved string values, not raw IDs. The Caption property still holds the raw IDs (FX_sSignIn, FX_sHome, FX_sCart).
- Visual style (observed): the three menu buttons render in the same light-teal style in the screenshot. The brief expected "blue". Theme Class FX_BlueButton is verified in the Properties panel; the rendered colour is not verified by this record.

### Strings readback (read-only; Edit > String, Global Objects dialog; filter applied with the search icon; Cancel)

| String ID | Result | Value (read from the dialog) |
| --- | --- | --- |
| FX_sCustomerPortal (positive control) | one row | (not required) |
| FX_sSignIn | one row | **Sign In** (Name row FX_sSignIn) |
| FX_sHome | one row | **Home** (Name row FX_sHome) |
| FX_sCart | one row | **Cart** (Name row FX_sCart) |

- The dialog was left with **Cancel**. Afterward: no dialog; Save and Undo disabled; FX_CustomerPortal selected.
- Screenshot `evidence/EXP-110-R3/t3-02-strings-check-fx-scart-cart.png` shows the FX_sCart row selected with String Value "Cart", and the canvas third button labelled "Cart". The FX_sSignIn and FX_sHome values come from dialog text (find and snapshot output), not from the screenshot.
- The FX_sCart value Cart is read back here, after the editor OK in T2. This is same-session readback only.

### Screenshots (T3)

- `evidence/EXP-110-R3/t3-01-reopened-canvas-and-components-tree.png` — viewed. Shows the reopened Designer on FX_CustomerPortal (title), status bar User scope, the canvas labels "Sign In", "Home" and "Cart", the Components tree with ButtonSignIn, ButtonHome and ButtonCart under Region00: menu (container FlexLayoutMain), and the Properties panel for ButtonCart (Caption FX_sCart, Theme Class FX_BlueButton). The Size row is not visible in this crop; Size 15; 2 comes from the snapshot. It does NOT prove persistence across sessions or the Size value by image.
- `evidence/EXP-110-R3/t3-02-strings-check-fx-scart-cart.png` — viewed. Shows the Global Objects dialog with the FX_sCart filter, one row, String Value "Cart"; the canvas behind shows "Cart". It does NOT show FX_sSignIn or FX_sHome.

### Final state (observed)

- FX_CustomerPortal open in the Designer, User scope, clean: Save disabled, Undo disabled, no dialog or menu open.
- Selected component ButtonCart; Details panel expanded on the Components tab (view state only).
- Console error count: 2 errors, 0 warnings.
- URL no longer carries `MGForm=FX_CustomerPortal` after the Global Objects Cancel (observed in T1 and again in T3; the Form tab stayed selected). Unresolved; the Form is open.

### Action audit — T3 only (worker-recorded)

- Tab listings: 1. Tab selections: 0.
- Clicks: **20** (19 succeeded; 1 failed with "Ref e2405 not found" and was re-issued). Breakdown: Form-tab close 1; Form menu 1; recent-forms entry 1; Details Expand Panel 1; Details Components tab 1; Components grid Expand 1; Components tree row selections 4 (ButtonSignIn 1; ButtonHome 2, of which the first failed with "Ref not found"; ButtonCart 1); Edit menu 1; Edit > String 1; dialog search-icon clicks 4; dialog string-row selections 3 (FX_sSignIn, FX_sHome, FX_sCart); dialog Cancel 1. (Sum: 1+1+1+1+1+1+4+1+1+4+3+1 = 20.)
- Type entries: **4** (Global Objects filter textbox only: FX_sCustomerPortal, FX_sSignIn, FX_sHome, FX_sCart). Designer property entries: 0.
- Key presses: 0. Navigations: 0. Drags: 0. Waits: 1 (1 s; console count read).
- Finds: **20**. Targeted snapshots: 22 (19 succeeded; 3 failed: e2 navigation "Ref not found" once; e2047 "Ref not found" once; e1981 "Ref not found" once). Untargeted snapshots: 2 (both persisted to tool-saved files too large to show inline; not read; no reference taken from them).
- Screenshots: 2 (t3-01, t3-02), both viewed.
- Designer Saves: **0**. Undo clicks: 0. Placement clicks: 0. Toolbox selections: 0. Regenerate: 0.
- Form closes: 1 (no prompt). Form reopens: 1 (recent-forms entry). Select Form OK: 0.
- Prompts answered: 0 (none appeared). String editor OK: 0. Dialog Cancel: 1 (Global Objects).
- List opens: 0. Caption/Theme/Size entries: 0.
- Re-logins: 0. Session expiries: 0. Server-event errors: 0. Console rises: 0 (2 errors, 0 warnings at each checkpoint). Console messages read: 0.

### Cumulative browser action audit (T1 + T2 + T3; worker-recorded; from the T1 and T2 sections above)

- Tab listings: 3 (T1 1, T2 1, T3 1). Tab selections: 0.
- Clicks: **51** (T1 17, T2 14, T3 20).
- Key presses: 12 (T2 only: eight Caption characters; four Tab commits).
- Typed entries: 11 (T1 4 filter entries; T2 3 field fills — String Value, Width, Height; T3 4 filter entries). Designer property typed entries: 3 (T2).
- Finds: 39 (T1 12, T2 7, T3 20).
- Waits: 3 (T1 1, T2 1, T3 1).
- Snapshots — untargeted inline: 13 (T1 7, T2 6). Untargeted saved by the tool, not read: 5 (T1 1, T2 2, T3 2). Targeted successful: 34 (T1 5, T2 10, T3 19). Targeted failed: 4 (T2 1, T3 3).
- Screenshots: 7 (T1 2, T2 3, T3 2), all viewed.
- Designer Saves: **3** (T2: Save B, Save C, Save D; each succeeded; no server-event error).
- Undo: 0. Placement clicks: 0. Toolbox selections: 0. Drags: 0. Regenerate: 0. Checkout actions: 0. Unloads: 0. Runtime actions: 0.
- Prompts: 1 (T2 "String FX_sCart does not exist. Create it?", answered Yes). Prompts in T1 or T3: 0.
- String editor OK: 1 (T2). Dialog Cancel: 2 (T1, T3). Global Objects dialog OK: 0.
- List opens: 2 (T2: Caption list; Theme Class list).
- Caption ellipsis clicks: 1 (T2).
- Field entries: Caption 1 (T2); String Value 1 (T2); Theme Class 1 (T2); Width 1 (T2); Height 1 (T2); Name 0 (not performed; EXP-110-R2 had set it). Corrections: 0.
- Form closes: 1 (T3). Form reopens: 1 (T3). Form-menu recent-forms opens: 1 (T3).
- Re-logins: 0. Session expiries: 0. Server-event errors: 0. Console rises: 0.
- Console error count across the run: 2 errors, 0 warnings at every recorded checkpoint (the tool-output count; console messages were never read).

Reconciliation: no controller audit is available in this worker session, so the counts above are worker-recorded only. The operator's controller audit or git review is authoritative for the reconciliation.

### Acceptance checks (observed; support and limits)

- **AC-1** (sources, session, scope, open and clean, trees and properties, canvas labels, string check, baseline console): supported by the T1 record and by T3's start-state finds (User scope; Save disabled; no dialog; console 2/0). Gate and string screenshots: `t1-01-gate-components-tree-and-canvas.png`, `t1-02-string-check-fx-scart-filter-empty.png`. Limit: the T1 strings check of FX_sCart was an absence check on one filter; T2 confirmed absence by the prompt.
- **AC-2** (T2 steps B, C, D; one Save each with responses; Caption, prompt, string, Theme, Size; Size summary; console after each action; corrections 0): supported in worker records. Evidence present: `t2-01-caption-list-open-buttoncart.png` (Caption list open, before the list was typed into), `t2-02-prompt-string-fx-scart-does-not-exist.png` (prompt text), `t2-03-size-rows-15-2-before-save-d.png` (Size 15; 2 before Save D). **Missing:** screenshots of each Save response and of the String editor (not captured). **Not observed:** Save toasts (none captured; Save success rests on Save disabled and absence of error text).
- **AC-3** (after one ordinary close and reopen: three Buttons in order under Region00: menu; Name, Caption, Theme FX_BlueButton, Size 15; 2; canvas labels Sign In, Home, Cart; strings read back; other components unchanged; Form open and clean): supported in the same session. Evidence: `t3-01-reopened-canvas-and-components-tree.png`, `t3-02-strings-check-fx-scart-cart.png`. Limits: same-session only; the rendered button colour is not verified as blue; the Size values come from snapshot text, not the screenshot; the other components were compared by tree names and order only.
- **AC-4** (no other component, region or Form changed; no global object created or changed except FX_sCart; no event handler; no Regenerate; no dragging; Undo at most once; no runtime action; no unload; no checkout; User scope only; no task-boundary overrun): supported by the action audit. Global objects: FX_sCart created once in T2 (Yes to the prompt; value Cart). No other global object was created or changed. Undo: 0. Regenerate: 0. T3 made no edits. No event handler was added; no runtime action; no unload; no checkout. Task boundary: T3 is the last step of the brief; nothing beyond it was performed.
- **AC-5** (final audit with evidence, action counts, file inventory, cleanup inventory, final state): this section, with the qualifications listed below.

### Worker-written file inventory (T3)

- Written or updated: `experiments/EXP-110-R3-hello-world-part-7-section-7-buttoncart-and-readback.md` (status line and this T3 section).
- Written: `evidence/EXP-110-R3/t3-01-reopened-canvas-and-components-tree.png`; `evidence/EXP-110-R3/t3-02-strings-check-fx-scart-cart.png`.
- Across T1–T3 the worker wrote the record and the 7 screenshots listed in the T1 and T2 sections (`t1-01`, `t1-02`, `t2-01`, `t2-02`, `t2-03`, `t3-01`, `t3-02`), all under `evidence/EXP-110-R3/`.
- Tool-generated files (not written by the worker): the browser tool saved page snapshot files under `evidence/playwright/` automatically (one per action), and saved untargeted snapshot results under the session `tool-results` folder outside the repository (T2: 2 files; T3: 2 files). The worker did not read or edit them. The T2 read of one tool-saved snapshot was denied by the permission settings (outside the repository); no T3 read was attempted or denied.
- Repository confinement is supported by this worker inventory and the harness inventory, subject to the operator's git review, which is authoritative.

### Cleanup inventory (for operator disposition; nothing deleted in this run)

- Buttons under FlexLayoutMain > Region00: menu: **ButtonSignIn** (present; created by EXP-110-R2), **ButtonHome** (present; created by EXP-110-R2), **ButtonCart** (present; placed by EXP-110-R2, Name persisted there, Caption/Theme/Size completed in EXP-110-R3).
- Strings (tenant-wide): **FX_sSignIn** = Sign In (created by EXP-110-R2); **FX_sHome** = Home (created by EXP-110-R2); **FX_sCart** = Cart (created by EXP-110-R3 T2 through the Caption ellipsis prompt).
- Changes to FX_CustomerPortal (User scope) from earlier runs (EXP-102 to EXP-109) are unchanged by this run.
- Not touched: footer `Region00: UNKNOWN0` (pre-existing), header components, other regions, other Forms (including FX_FlexProbe01).

### Final worker report basis (qualifications requiring operator disposition)

1. Missing screenshots required by the brief: each Save response (B, C, D) and the String editor (step B). Not claimed as captured.
2. Save toasts not captured; no toast observed; Save success inferred from Save disabled and absence of error text.
3. Same-session readback only. No cross-session durability or replay verification is claimed.
4. T1 over-read of transcript lines 466–467 (Section 8 header area); not used.
5. T2 parallel key presses: X and underscore were sent in one parallel call; both completed.
6. T2 denied read of a tool-saved snapshot file (outside the repository); not repeated.
7. Stale references: T2 e11 (not found; recovered); T3 e2, e2047, e1981 (not found) and e2405 click (not found). Recovery used one untargeted snapshot (persisted, unread) and targeted snapshots of ancestor references located by read-only find. Clicks used references from snapshots taken in the task.
8. The canvas now labels the buttons with resolved values after reopen, whereas before reopen the Designer canvas showed raw IDs (observed in T1, T2, EXP-110-R2).
9. Rendered colour of the three buttons not verified as blue (Theme Class FX_BlueButton verified).
10. The URL lost the `MGForm` parameter after a Global Objects Cancel (observed in T1 and T3; unresolved).
11. Worker-recorded counts; no controller audit available to reconcile in this session.
12. Operator disposition needed for the cleanup inventory (strings and buttons above) if the experiment is to be reverted; no cleanup was performed.

## Findings (observed only)

1. ButtonSignIn and ButtonHome persisted with the expected Caption, Theme Class FX_BlueButton and Size 15; 2 after the operator's Designer reload (same-session UI readback; no cross-session durability claim).
2. ButtonCart persisted only its Name. Its Caption, Theme Class and Size did not persist (Size is the default 14.25; 1.89).
3. FX_sCart is absent in this session's String list.
4. The canvas shows the resolved string values ("Sign In", "Home") for the two persisted Buttons; in EXP-110-R2 it showed raw IDs.
5. Filtering in the Global Objects dialog applies only after clicking the search icon (typing alone did not filter in this session).
6. After Cancel the page URL lost the `MGForm=FX_CustomerPortal` query parameter while the Form tab stayed selected (observed; not investigated).

## Knowledge state

- Findings 1 to 5: observed (single session, single run).
- Finding 6: observed; unresolved significance.
- No procedure is claimed as verified or replay-verified.

## Open questions / blockers

- None blocking. The Web Client tab (tab 1) was not inspected for session state in any task; the Designer showed no session expiry in T1, T2 or T3.
- The final list of qualifications requiring operator disposition is in the T3 section ("Final worker report basis").
- T2 should confirm, before its Caption step, that FX_sCart is still absent (one read-only filter check), since the record relies on one check in T1. **Resolved in T2 (not by a separate filter check):** the Caption ellipsis raised "String FX_sCart does not exist. Create it?", which showed FX_sCart absent at that point; the string was created once with value Cart.

## Outcome (operator, 2026-10-18)

Accepted (observed). **Hello World Part 7 Section 7 is complete: ButtonSignIn, ButtonHome and ButtonCart under FlexLayoutMain > Region00: menu of FX_CustomerPortal, each with its Caption string ID, Theme Class FX_BlueButton and Size 15; 2, read back after one ordinary close and reopen.** The run (R-20261018-012827-clGk, 3 worker tasks) completed accepted.

- T1 (after the operator's Designer reload): ButtonSignIn (FX_sSignIn, FX_BlueButton, 15; 2) and ButtonHome (FX_sHome, FX_BlueButton, 15; 2) had persisted from EXP-110-R2; ButtonCart had persisted its Name only (Caption and Theme Class blank, Size 14.25; 1.89); FX_sSignIn = Sign In and FX_sHome = Home found; FX_sCart absent. The canvas showed the resolved labels Sign In and Home.
- T2: ButtonCart steps B to D (step A skipped, ButtonCart existed), each with one Designer Save: Caption FX_sCart (left by clicking Description); prompt "String FX_sCart does not exist. Create it?", Yes, value Cart, OK; Theme Class FX_BlueButton; Width 15, Height 2 (Size summary 15; 2). Console error count stayed at 2 (the baseline) after every action; no server-event error.
- T3: close (no prompt) and reopen through the recent-forms entry; the three Buttons in order with Caption FX_sSignIn / FX_sHome / FX_sCart, Theme Class FX_BlueButton and Size 15; 2; canvas labels Sign In, Home, Cart; strings FX_sSignIn = Sign In, FX_sHome = Home, FX_sCart = Cart; Form left open and clean.
- Screenshots viewed by the operator assistant: `t3-01-reopened-canvas-and-components-tree.png` (canvas buttons labelled Sign In, Home, Cart in the menu column; tree ButtonSignIn, ButtonHome, ButtonCart under Region00: menu; ButtonCart Properties: Caption FX_sCart, Theme Class FX_BlueButton); `t3-02-strings-check-fx-scart-cart.png` (Global Objects: FX_sCart, String Value Cart).
- **Correction to the end-of-record "Findings" list**: items 2 and 3 describe the T1 state only. After T2 and T3, ButtonCart has Caption FX_sCart, Theme Class FX_BlueButton and Size 15; 2, and FX_sCart = Cart exists.
- **Caption-commit lesson (observed, two runs)**: when committing the Caption by clicking the Description row enabled Save (dirty), the change persisted (EXP-110-R2 T2 and T3, this T2); in EXP-110-R2 T4 the same commit left Save disabled and was followed by silent HTTP 400 responses from Designer/Form/GenerateServerEvent. A Caption commit that does not enable Save is a stop signal. Root cause still unresolved.
- Findings (observed): the Designer canvas shows raw Caption IDs right after the strings are created and the resolved values after a reload or reopen; the Global Objects Strings filter applies only after clicking the search icon.
- Unresolved: the three buttons render light teal in the reopened Designer canvas rather than the blue seen before the reopen; FX_BlueButton is set on all three, and the runtime colour is not verified.
- Qualifications accepted by the operator: no screenshots of the T2 Save responses (results recorded from find and snapshot text); two key presses sent in parallel in T2; one denied Read of the worker's own oversized tool-result file outside the repository (harmless, nothing read); the T1 transcript read included two Section 8 lines.
- Confinement (git status): only `evidence/EXP-110-R3/` and this record were written by the run.
- Cleanup inventory (Section 7): Buttons ButtonSignIn, ButtonHome, ButtonCart on FX_CustomerPortal (User scope); tenant-wide strings FX_sSignIn, FX_sHome (EXP-110-R2) and FX_sCart (this run).
- Next: Hello World Part 7 Section 8 (the Sign-In page contents).
