# EXP-102 — Hello World Part 7 Sections 1–2: Flex Form FX_CustomerPortal, Collections, One Regenerate Form, Readback

Status: **T1 complete (read-only gate, absence check, Flex wizard discovery). T2 complete (FX_CustomerPortal created once through Flex > Basic; Designer open, clean, User scope). T3 complete (Primary FX_Orders and Secondary FX_Items set; one prompt answered OK; one toolbar Regenerate Form; post-Regenerate Form clean with both collections shown). T4 complete (one ordinary close with no save prompt; one reopen via the Form menu recent-forms entry; readback of Properties, Components tree and both collections; Form left open and clean). Acceptance not declared (operator audit pending).**
Run: R-20261015-225823-jK6W, tasks T1, T2, T3 and T4 (cycles 0, 1, 2 and 3). Worker session fc6dfbce-b980-4b99-844a-b820e52a96a1.
Date: 2026-10-15. Environment: Mongoose 2026.10.01 demo, configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT.
Editing scope: **User** (anton.ramos@3mworks.com.ph). No Site Default or Group scope used.

## Brief summary (scope and gates)

- Objective: create Form `FX_CustomerPortal` through New Form Definition > Category Flex > Wizard Basic with Form Unit Character (T2); set Primary Collection `FX_Orders` and Secondary Collection `FX_Items` in Details > Collections; click Regenerate Form exactly once on `FX_CustomerPortal` (T3); close and reopen once and verify (T4).
- The tutorial's Site Default scope is **not** authorized. The narrator's "Save + Close + Reopen" description of Regenerate is historical and unverified.
- Source narrative (unverified, speech transcript): `docs/mongoose/transcripts/hello-world-pt7.md` Sections 1–2 (lines 109–131). It is a historical reference, not an authorized execution plan.

## Sources read (T1)

- `AGENTS.md`: read in full (240 lines) before the first browser action.
- `docs/mongoose/transcripts/hello-world-pt7.md`: read lines 100–134 (brief asked for 109–131). The extra lines are the map caveat (100–108) and the Section 3 heading (133–134). Section 3 body was **not** read.
- `docs/mongoose/transcripts/hello-world-pt7.md` "Sequence-sensitive checks / source ambiguities" (lines 309–321): read as a whole list, not only item 9. Item 9 (Regeneration): "A controlled persistence experiment must distinguish those lifecycle transitions from ordinary Save and ordinary close/reopen."
- `recipes/forms/create-basic-form.md`: read in full. Note: this recipe documents the **Classic BuildFromScratch** wizard, not the Flex Basic wizard. Its Save Template and Finish steps are used only as a checklist. Not verified for Flex.
- `recipes/session/session-expiry-and-stale-designer.md`: read in full.
- `experiments/EXP-041-R3-hello-world-part-1-form-creation-replay.md`: the "Outcome (operator, 2026-10-10)" section (lines 15–24) was read. **Overread:** the read window (lines 15–54) also included the next section headings and content ("Sources read (T1)", "AC-1 preflight"). Those lines were not used for any decision except the Outcome facts below.
  - Relevant Outcome facts used: the wizard Name combobox takes one plain fill (`browser_type` without `slowly`); key-event typing leaves it uncommitted (EXP-041-R2); an early Select Form lookup returned zero rows, unexplained.
- `experiments/EXP-101-hello-world-part-7-prereq-fx-customer-images.md`: "Outcome (operator, 2026-10-15)" section (lines 254–272, end of file) read. Facts used: FX_CustomerIcon.png and FX_CustomerSignIn.png exist in the image library; the Designer Save after the library OK; the Next step is Part 7 Form creation in User scope with Flex > Basic.

Not read by design: later Part 7 sections, the rest of the EXP-041-R3 and EXP-101 records.

## Gate (T1, read-only) — AC-1

| Item | Observation | Evidence |
|---|---|---|
| Browser tabs (list taken before the first select) | Tab 0: "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)", URL `.../WSWebClient/designer/Default.aspx`, the Web Designer, was current. Tab 1: "Mongoose", portal URL `mingle-portal.se1.inforcloudsuite.com/.../c51080bc-...` (Web Client in the portal). | tab list output (text) |
| Designer state at start | No Form open (empty canvas, no Form tab, no Properties content). Save disabled, Undo disabled, Regenerate Form disabled. No dialog open. | `t1-01-designer-gate-user-scope-no-form-open.png` |
| Scope | Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. | `t1-01-…png` (status bar), `t1-09-…png` |
| Dirty state | None. Save disabled before and after every T1 action. | `t1-01`, `t1-05`, `t1-09` |
| Web Client tab (read-only identification) | Portal Explorer page; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No Session Expired modal, sign-in page or configuration prompt. No action performed in the Web Client. | `t1-10-web-client-portal-tab-identified-read-only.png` |
| Session usable | The Designer and the Web Client responded to reads and to Designer actions in this task. No re-login (count 0). | same-session observation only |
| Portal banner | No `portal-notification` banner seen in the captures; none dismissed. | `t1-10` |

Limits: the Designer's Console line reports "2 errors" in the page header. Console was **not** inspected (brief prohibition). The Web Client frame's internals were not inspected beyond the identity bar.

## Absence check (T1, read-only) — AC-1

Mechanism: Designer toolbar **Open** (see "Toolbar identity" below) > Select Form dialog. Filter By = Name; Case Sensitive and Starts With left unchecked. Dialog default filter was `IdoCollections` (3 rows: G6RIdoCollectionSearch, IdoCollections, IdoCollections.ids). The filter textbox was changed only through the textbox (click, Control+a, slow typing).

| Filter entered | Result | Evidence |
|---|---|---|
| `FX_CustomerPortal` | **0 rows** (grid empty, no OK pressed). FX_CustomerPortal **absent** in this observation. | `t1-03-absence-check-filter-FX_CustomerPortal-no-rows.png` |
| `FX_Orders` (positive control) | 2 rows: `FX_Orders` (Caption FX_Orders, Name FX_Orders) and `FX_OrdersChart`. The dialog pre-highlighted the FX_Orders row; this was not a worker click. | `t1-04-absence-check-positive-control-FX_Orders-row-listed.png` |

Left with **Cancel** (one click). Designer returned clean: no dialog, no Form open, Save disabled. Evidence: `t1-05-select-form-cancelled-designer-clean.png`.

Interpretation (observed only): the positive control shows the list loads and filters by name. The zero rows for `FX_CustomerPortal` are a single same-session observation. EXP-041-R3 recorded one unexplained zero-row lookup, so T2 must re-check absence before creating the Form if the session changes.

## Wizard discovery (T1, read-only) — AC-1

Dialog: **Form Wizard Selection** (opened by the Designer toolbar **New**; the dialog title and "New Form" radio confirm New Form Definition).

Controls, as found (initial state, `t1-06-form-wizard-selection-initial-state.png`):
- Close Window button (x, top right).
- **New Form** radio: selected by default.
- **Category:** combobox, blank by default, with dropdown arrow.
- **Wizard:** combobox, blank by default, with dropdown arrow.
- **Extend Form** radio: not selected.
- Buttons: **OK**, **Cancel**, **Help**.

Category options (7), from the accessibility tree of the open list (`t1-07-wizard-category-list-open.png` shows the first five; New Data and REST are present in the tree only):

| Category | Description as shown |
|---|---|
| Classic | WinStudio classic form wizards |
| ExtDataSource | STRINGS(mWizard_ExtDatasource) |
| Flex | Wizard to create a form built on FlexLayout components |
| Form Builder | Wizards to create forms on Runtime Builder |
| IDS | Wizard to create a form based entirely on the IDS layout grid and IDS controls |
| New Data | Wizards to create forms with their required SQL tables, IDOs, and components |
| REST | REST API wizards |

Selected **Flex** (one click, Category set in the dialog only). Wizard options for Flex (1):

| Wizard | Description as shown (`t1-08-wizard-flex-category-wizard-list-open.png`) |
|---|---|
| Basic | Creates a Flex form with three FlexLayout components, arranged horizontally |

Note for T2: the Basic description says **three** FlexLayout components. The brief and AC-2 refer to "its automatically added Flex Layout component" (singular). T2 must record the actual component tree and not assume a count.

Selected **Basic** (one click, Wizard set in the dialog only; not committed). Left with **Cancel** (one click). OK was never clicked in T1. Designer clean afterwards: `t1-09-wizard-selection-cancelled-designer-state.png`.

## Toolbar identity (observed)

- First toolbar control: accessible name **"Design"** in the snapshot; hover/tooltip **"Open"** (visible in `t1-02-absence-check-select-form-dialog-opened.png`). Opens Select Form. Used once in T1.
- Toolbar **New**: opens Form Wizard Selection (see above).
- Toolbar **Save**: disabled in the clean state.
- Toolbar **Regenerate Form**: accessible name "Regenerate Form", disabled with no Form open. Not clicked.
- Toolbar **Delete** (trash, accessible name "Delete"): **Delete Form Definition**. **Never clicked.**
- **Form** menu (menu bar): contains a **Definition** submenu, a **Sign Out** item (adjacent to the recent-forms list; **never clicked**), recent forms FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items, then IDO Properties, IDOs, Sql Tables, IDO Projects, Property Classes. Recent-forms entries are a permitted way to reopen a Form (T4).
- Pressing **Escape** did not close the Form menu; a second click on the "Form" menu title closed it (`t1-01b`, `t1-01c`, `t1-01d`).

## Errors and recovery (T1)

1. Hover on toolbar "Design" (ref e13) timed out: `Timeout 5000ms exceeded`; the Form menu (`menu-1021`, `mg-designer-toolbar-menu`) intercepted pointer events. No state change. Evidence: `t1-01c-designer-toolbar-first-button-hover.png` (shows the Form menu still open). Recovery: one fresh untargeted snapshot (depth 3), the Form menu closed by clicking the "Form" menu title, a clean-state screenshot (`t1-01d`), then the Open click. This is the only "timeout" in T1. No "Ref not found" occurred.
2. Escape did not close the Form menu (recorded in the toolbar notes above). No further action taken.

No prompts appeared in T1. No session expiry or sign-in appeared.

**Additional items found in the T5 audit (not in the original T1 entry):**

- *Filesystem error, not a browser error:* in the first source-reading batch, a Read of `experiments/EXP-102-…md` returned "File does not exist" (the record had not yet been created). It was not a browser action and is not counted as a browser error. The record was then created with Write.
- *Reference-recency deviation (outcome-neutral):* the toolbar "Design" click (Open) used ref e13 from the depth-3 snapshot taken before the menu-toggle click (`e3`). The brief requires refs from the most recent snapshot in the task. The click landed on Open as intended and the Select Form dialog was verified in the next snapshot. Recorded as a deviation for disposition.

## Action audit — cumulative through T1 (exact counts)

| Category | Count | Detail |
|---|---|---|
| Browser tab list | 1 | before the first select |
| Browser tab select | 3 | 0 (Designer, first), 1 (Web Client, read-only identification), 0 (Designer, return) |
| Snapshots (full or targeted, read-only) | 16 | includes 1 depth-3 and 1 depth-2 and 1 depth-4 partial snapshot |
| Find (read-only) | 2 | "Open" (no useful result), "Wizard descriptions" (no matches); neither was used for a click |
| Successful clicks | 12 | Form menu open 1, Form menu close 1, Open 1, filter textbox 2, Select Form Cancel 1, New 1, Category arrow 1, Category Flex 1, Wizard arrow 1, Wizard Basic 1, Wizard Cancel 1 |
| Failed hover | 1 | timeout (see Errors) |
| Key presses | 3 | Escape 1 (no effect), Control+a 2 (filter entries) |
| Typing actions (slowly) | 2 | `FX_CustomerPortal`, `FX_Orders` (filter only) |
| Waits | 5 | 2 s, 2 s, 2 s, 1 s, 1 s |
| Screenshots | 13 | `t1-01` … `t1-10` (with `t1-01b`, `t1-01c`, `t1-01d`) |
| Select Form opens | 1 | left by **Cancel** 1; OK 0; double-click 0 |
| New Form Definition clicks | 1 | opened Form Wizard Selection; OK 0; Next 0; Finish 0; Cancel 1 |
| Wizard Category selections | 1 | Flex (dialog only) |
| Wizard Wizard selections | 1 | Basic (dialog only) |
| Wizard OK clicks | 0 | |
| Wizard Next / Finish clicks | 0 / 0 | |
| Name entries / Form Unit entries | 0 / 0 | |
| Save Template changes | 0 | no wizard page reached |
| Forms created / templates created | 0 / 0 | |
| Designer Saves | 0 | |
| Regenerate Form clicks | 0 | |
| Details/Collections changes / corrections | 0 / 0 | |
| Collections New clicks | 0 | |
| Prompts | 0 | none |
| Form opens / closes / reopens | 0 / 0 / 0 | |
| Delete Form Definition clicks | 0 | |
| Checkout actions | 0 | |
| Unloads / FormSync / deployment | 0 / 0 / 0 | |
| Runtime actions in Web Client | 0 | |
| Re-logins | 0 | session not expired |
| Errors | 1 | hover timeout (intercepted by open Form menu); no repeat |

## Worker-written file inventory

Written by the worker (Write tool or the Playwright MCP screenshot tool, which the worker called):

- `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md` (this record; created)
- `evidence/EXP-102/t1-01-designer-gate-user-scope-no-form-open.png`
- `evidence/EXP-102/t1-01b-designer-form-menu-recent-forms-closed.png` (**filename misleading**: the image shows the Form menu still open after Escape; not overwritten, not renamed)
- `evidence/EXP-102/t1-01c-designer-toolbar-first-button-hover.png` (shows the Form menu still open after the hover timeout)
- `evidence/EXP-102/t1-01d-designer-form-menu-closed-by-toggle.png`
- `evidence/EXP-102/t1-02-absence-check-select-form-dialog-opened.png`
- `evidence/EXP-102/t1-03-absence-check-filter-FX_CustomerPortal-no-rows.png`
- `evidence/EXP-102/t1-04-absence-check-positive-control-FX_Orders-row-listed.png`
- `evidence/EXP-102/t1-05-select-form-cancelled-designer-clean.png`
- `evidence/EXP-102/t1-06-form-wizard-selection-initial-state.png`
- `evidence/EXP-102/t1-07-wizard-category-list-open.png`
- `evidence/EXP-102/t1-08-wizard-flex-category-wizard-list-open.png`
- `evidence/EXP-102/t1-09-wizard-selection-cancelled-designer-state.png`
- `evidence/EXP-102/t1-10-web-client-portal-tab-identified-read-only.png`

Not worker-authored: the Playwright MCP wrote page-snapshot (`.yml`) and console (`.log`) output files under `evidence\playwright\` as a side effect of tool calls (for example `page-2026-10-15T14-58-59-133Z.yml`, `console-2026-10-15T14-58-47-980Z.log`). These are outside the EXP-102 paths. Their names are listed only for transparency; the harness inventory is authoritative.

No other file was written. No memory file was written. No edit to AGENTS.md, tutorial sources, recipes, assets or earlier experiment records.

## Evidence index (T1) — what each capture shows and does not prove

| File | Shows | Does not prove |
|---|---|---|
| `t1-01` | Empty Designer canvas; no Form open; Save/Undo disabled; status bar User scope (anton.ramos@3mworks.com.ph) | absence of FX_CustomerPortal (see t1-03) |
| `t1-02` | Select Form dialog open; filter `IdoCollections` pre-filled; "Open" tooltip at the toolbar | the absence result (filter not yet changed) |
| `t1-03` | Filter `FX_CustomerPortal`: zero rows, Caption/Name headers only | that the grid had fully loaded (positive control in t1-04 supports it) |
| `t1-04` | Filter `FX_Orders`: rows FX_Orders and FX_OrdersChart listed; FX_Orders row pre-highlighted by the dialog | a click or OK (none performed) |
| `t1-05` | Select Form closed by Cancel; Designer clean | the dialog's internal state after close |
| `t1-06` | Form Wizard Selection initial state: New Form selected, Category/Wizard blank, Extend Form unselected | the category list contents (see t1-07) |
| `t1-07` | Category list open: Classic, ExtDataSource, Flex, Form Builder, IDS (partial) with descriptions | New Data and REST (in the accessibility tree only, not visible in the image) |
| `t1-08` | Category = Flex; Wizard list open with Basic and its description | that Basic is the only Flex wizard beyond what the list shows (the accessibility tree showed one option) |
| `t1-09` | Wizard dialog closed by Cancel; Designer clean (no Form, Save disabled, User scope) | any server-side state (none expected; nothing committed) |
| `t1-10` | Web Client portal tab: Explorer, identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no expiry or sign-in | Web Client internals (not inspected) |

## Acceptance checks — T1 status

- **AC-1** (sources reviewed; session usable; Designer in User scope with no dirty Form; FX_CustomerPortal absent with FX_Orders positive control; Flex wizard list recorded read-only and left with Cancel): **met for the T1 observations**, with the reading overreads disclosed above. Same-session evidence only.
- **AC-2 to AC-4**: not run in T1 (T2–T4).
- **AC-5** (no scope change, no other Form created or edited, no component changed, no template, no runtime action, no unload, no checkout action): **no violation observed in T1**. No mutation occurred; Regenerate and Save count 0.
- **AC-6**: this record is the T1 part. The final report covers all tasks.

## Knowledge state (T1)

- Designer gate in User scope with no Form open and Save disabled: **observed** (same session).
- FX_CustomerPortal absent from the Select Form list in this session (filter by name, positive control present): **observed**, single observation.
- Category list (7 options) and Flex wizard list (Basic only, "three FlexLayout components") on this build: **observed**.
- Toolbar "Design" accessibility name vs. "Open" tooltip: **observed**.
- Escape not closing the Form menu: **observed**.
- The Classic recipe (`create-basic-form.md`) applies to Flex Basic only as a checklist: **unverified**.

## T2 — Create FX_CustomerPortal through Flex > Basic (2026-10-15, cycle 1)

Scope of T2: New Form Definition once; wizard OK once; Name and Unit set; Next once; Finish once; informational completion message answered OK once. No Collections work, no Regenerate, no Save, no component change, no Form other than FX_CustomerPortal touched.

**Sources.** No re-read in T2. The sources in the T2 brief were read in T1 of this same worker session (AGENTS.md, hello-world-pt7.md, create-basic-form.md, session recipe, EXP-041-R3 and EXP-101 Outcome sections) and remain in context. Brief reading order therefore was not repeated.

**Gate (T2 start, read-only).** One untargeted snapshot: Designer selected (tab 0), User scope in status bar, no Form open, Save disabled, Regenerate Form disabled, no dialog. No session change visible; no absence check repeated (per the T2 instruction). Evidence: none beyond the snapshot (no T2 gate screenshot was taken).

### Wizard pages and selections

| Step | Observation | Evidence |
|---|---|---|
| Form Wizard Selection (New Form Definition, one click) | New Form radio selected; Category blank; Wizard blank; Extend Form unselected. | `t2-01-form-wizard-selection-opened-initial.png` |
| Category | Opened the list; selected **Flex** (same 7 options as T1). | (T1 list: `t1-07`) |
| Wizard | Opened the list; only **Basic** (description "Creates a Flex form with three FlexLayout components, arranged horizontally"); selected Basic. | (T1: `t1-08`) |
| Form Wizard Selection OK (once) | Category Flex, Wizard Basic; the dialog closed and the wizard "Form Wizard - Flex Basic" opened on page 1. | `t2-02-wizard-selection-flex-basic-selected-before-ok.png` |
| **Page 1, before filling** | Group heading "Flex Form". Fields with exact labels: **Name:** (combobox, blank by default, with an "Open" button); **Unit:** (combobox, blank by default, with an "Open" button; list options **Pixel** and **Char**); **Comments:** (text box, blank by default). Buttons: Back (disabled), Next (enabled), Finish (disabled), Cancel, Help. | `t2-03-wizard-page1-flex-basic-before-filling.png` |
| Name (one plain fill, `browser_type` without `slowly`) | Typed `FX_CustomerPortal`; the combobox shows FX_CustomerPortal. No correction. | `t2-04-wizard-page1-name-entered-FX_CustomerPortal.png` |
| Unit | Opened the list (Pixel, Char); selected **Char**. The brief says "Character"; the wizard option is labelled **Char** (not "Character"); the Properties panel later shows Unit = Char. No correction. | `t2-05-wizard-page1-name-and-unit-set-before-next.png` |
| Comments | Left blank (default). | `t2-05` |
| Next (once) | Accepted; page 2 opened. | (no response text) |
| **Page 2, before changes** | One field: checkbox **"Save Template"**, **unchecked by default**. Buttons: Back (enabled), Next (disabled), Finish (enabled), Cancel, Help. No value was changed, so no template was requested. | `t2-06-wizard-page2-before-changes-save-template-default.png` |
| Page 2 after filling | No field changed (Save Template left unchecked); the page is therefore identical before and after. | `t2-06` |
| Finish (once) | Response: the dialog closed and an informational completion alert appeared. | `t2-07-after-finish-click-response.png` |
| **Completion message (verbatim)** | Title: "Infor Mongoose Application Development Framework - Form Wizard - Flex Basic". Body: "Process Completed Successfully". Button: **OK**. | `t2-07` |
| Completion answered | OK (once). | — |

Save Template: present on page 2, **unchecked by default**; not changed. Templates created by the worker: 0 (no template was requested; no template object was inspected).

### New Form (after OK on the completion message)

- Designer URL now carries `MGForm=FX_CustomerPortal`; the open tab is labelled **FX_CustomerPortal** (closable). Save **disabled**; Regenerate Form disabled; no dialog open; status bar **ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph**.
- Canvas: three vertical columns separated by dotted dividers (visible in the screenshot).
- Form Properties (Properties panel, Form tab; all read-only, none edited):

| Property | Value observed |
|---|---|
| Name | FX_CustomerPortal |
| Version | "User version for user anton.ramos@3mworks.com.ph" (the accessibility text is "User version for user" with the signed-in user; truncated in the panel) |
| Device Type | Default |
| Form Type | Flex |
| Unit (Layout) | Char |
| Size | 120; 40 (Width 120, Height 40) |
| Auto Height | False |
| Synchronize FlexLayout attributes | True |
| Script Language | Visual Basic |
| Close Box | True |
| Minimize/Maximize Box | True |
| Enable Advanced Filter | False |

Evidence: `t2-08-new-form-FX_CustomerPortal-designer-after-finish.png`.

### Component tree (Details > Components, read-only; screenshot `t2-09`)

The Details pane at the bottom was expanded (a layout change only). Its Components grid lists, in order:

1. **Pane (00)** — root row, folder icon, Pane column 0.
2. **flexlayoutPane_FX_CustomerPortal** — Type **FlexLayout**; Pane 0; Tab 0. This is the automatically added Flex Layout component. Its name is `flexlayoutPane_FX_CustomerPortal`.
3. **Region00: FLEX_PANE_REGION0** — child of the FlexLayout row; FlexLayout icon; Type column blank.
4. **Region01: FLEX_PANE_REGION1** — child; same as 3.
5. **Region02: FLEX_PANE_REGION2** — child; same as 3.

**Count reconciliation (observed vs. narration).** The wizard description says "three FlexLayout components, arranged horizontally"; the grid shows **one** FlexLayout component (`flexlayoutPane_FX_CustomerPortal`) with **three** child regions (FLEX_PANE_REGION0–2), and the canvas shows three columns. Whether the description's "three" refers to the regions is **unresolved**; the record does not assume either reading. No component was added, moved, renamed or edited.

### Save state

Save **disabled** after Finish, after the completion alert, and at the end of T2 (final read-only snapshot: Save disabled; no dialog; FX_CustomerPortal tab selected).

### Action audit — T2 only (exact counts)

| Category | T2 count | Detail |
|---|---|---|
| Browser tab list | 1 | before any action |
| Browser tab select | 0 | none needed; Designer tab already selected |
| Snapshots (read-only) | 18 | untargeted and dialog-scoped |
| Successful clicks | 14 | New 1; Category arrow 1; Category Flex 1; Wizard arrow 1; Wizard Basic 1; Form Wizard Selection OK 1; Unit arrow 1; Unit Char 1; Next 1; Finish 1; completion OK 1; Details Expand Panel 1; Details Components tab 1; Components grid Expand 1 |
| Failed clicks / timeouts / Ref not found | 0 | none |
| Text entries (plain `browser_type`) | 1 | Name FX_CustomerPortal |
| Name entries / corrections | 1 / 0 | |
| Unit selections / corrections | 1 / 0 | Char |
| Keys pressed | 0 | |
| Waits | 3 | 2 s, 2 s, 3 s |
| Screenshots | 9 | `t2-01` … `t2-09` |
| New Form Definition clicks | 1 | opened Form Wizard Selection |
| Form Wizard Selection OK clicks | 1 | Flex / Basic |
| Wizard Next clicks | 1 | page 1 → page 2 |
| Wizard Finish clicks | 1 | once |
| Wizard Back / Cancel clicks | 0 / 0 | |
| Save Template changes | 0 | checkbox unchecked by default; not changed |
| Templates created (by worker) | 0 | |
| Forms created (by worker) | 1 | FX_CustomerPortal (Finish) |
| Prompts | 1 | "Process Completed Successfully" (informational); answered OK |
| Designer Saves | 0 | |
| Regenerate Form clicks | 0 | |
| Collections changes / corrections | 0 / 0 | the Collections tab was **not** edited (see note on the read below) |
| Collections New clicks | 0 | |
| Select Form opens | 0 | |
| Form closes / reopens | 0 / 0 | the Form opened automatically after Finish (not a Select Form open) |
| Delete Form Definition clicks | 0 | the top toolbar trash icon was not clicked |
| Checkout / unload / FormSync / deployment | 0 / 0 / 0 / 0 | |
| Runtime actions in Web Client | 0 | |
| Re-logins | 0 | session stayed usable |
| Errors | 0 | |

**Note on the Collections read.** The T2 snapshot of the Details pane showed the Collections tab with a row "Primary Collection:" and no value text in the accessibility tree. The Collections tab was not clicked or edited in T2; the snapshot was incidental and is not the T3 "before" record.

### Cumulative action audit (T1 + T2)

| Category | T1 | T2 | Total |
|---|---|---|---|
| Browser tab lists | 1 | 1 | 2 |
| Browser tab selects | 3 | 0 | 3 |
| Snapshots | 16 | 18 | 34 |
| Finds | 2 | 0 | 2 |
| Successful clicks | 12 | 14 | 26 |
| Failed hover (timeout) | 1 | 0 | 1 |
| Key presses | 3 | 0 | 3 |
| Text entries | 2 (filter, slow) | 1 (Name, plain fill) | 3 |
| Waits | 5 | 3 | 8 |
| Screenshots | 13 | 9 | 22 |
| Select Form opens | 1 (Cancel 1) | 0 | 1 |
| New Form Definition clicks | 1 (Cancel 1) | 1 (OK path) | 2 |
| Form Wizard Selection OK clicks | 0 | 1 | 1 |
| Wizard Next / Finish clicks | 0 / 0 | 1 / 1 | 1 / 1 |
| Name entries / corrections | 0 / 0 | 1 / 0 | 1 / 0 |
| Unit entries / corrections | 0 / 0 | 1 / 0 | 1 / 0 |
| Save Template changes | 0 | 0 | 0 |
| Forms created / templates created | 0 / 0 | 1 / 0 | 1 / 0 |
| Designer Saves | 0 | 0 | 0 |
| Regenerate Form clicks | 0 | 0 | 0 |
| Collections changes / New clicks | 0 / 0 | 0 / 0 | 0 / 0 |
| Prompts | 0 | 1 (OK) | 1 |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 |
| Delete Form Definition clicks | 0 | 0 | 0 |
| Errors | 1 (hover timeout, not repeated) | 0 | 1 |
| Re-logins | 0 | 0 | 0 |

Reconciliation: these are the worker's own counts from the tool-call sequence in this session. The controller audit was not available to the worker, so the counts are **not reconciled** with it; the operator should reconcile them.

### Worker-written file inventory (T2)

- `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md` (updated in T2: status, run line, T2 section, cumulative audit; the T1 sections are retained unchanged)
- `evidence/EXP-102/t2-01-form-wizard-selection-opened-initial.png`
- `evidence/EXP-102/t2-02-wizard-selection-flex-basic-selected-before-ok.png`
- `evidence/EXP-102/t2-03-wizard-page1-flex-basic-before-filling.png`
- `evidence/EXP-102/t2-04-wizard-page1-name-entered-FX_CustomerPortal.png`
- `evidence/EXP-102/t2-05-wizard-page1-name-and-unit-set-before-next.png`
- `evidence/EXP-102/t2-06-wizard-page2-before-changes-save-template-default.png`
- `evidence/EXP-102/t2-07-after-finish-click-response.png`
- `evidence/EXP-102/t2-08-new-form-FX_CustomerPortal-designer-after-finish.png`
- `evidence/EXP-102/t2-09-details-components-tree-after-finish-readonly.png`

Not worker-authored: the Playwright MCP wrote page-snapshot (`.yml`) and console (`.log`) files under `evidence\playwright\` as a side effect of tool calls. These are outside the EXP-102 paths; the harness inventory is authoritative.

### Decisive evidence for T2 (what each capture shows / does not prove)

| File | Shows | Does not prove |
|---|---|---|
| `t2-02` | Category Flex and Wizard Basic set in the selection dialog before OK | that the wizard creates the Form (see t2-07, t2-08) |
| `t2-03` | Page 1 before filling: Name, Unit, Comments blank; Back and Finish disabled | the defaults of hidden fields (none visible) |
| `t2-04` | Name combobox shows FX_CustomerPortal | that the value is committed server-side (Next accepted it; persistence not verified) |
| `t2-05` | Name FX_CustomerPortal; Unit Char; Comments blank | the wizard option label versus the brief's "Character" (noted) |
| `t2-06` | Page 2: Save Template unchecked; Next disabled; Finish enabled | that no template exists elsewhere (no template object was inspected) |
| `t2-07` | Completion alert with the verbatim text and an OK button | the server-side result beyond the message |
| `t2-08` | FX_CustomerPortal tab; Properties (Name, Version, Device Type Default, Form Type Flex, Unit Char, Size 120;40); canvas with three columns; Save greyed; status bar User scope | the component tree (see t2-09) and persistence |
| `t2-09` | Components grid: Pane (00) → flexlayoutPane_FX_CustomerPortal (FlexLayout) → Region00–02 | whether the grid is the full persisted metadata (same-session view) |

### Acceptance checks — T2

- **AC-2** (created once via Flex > Basic with Name FX_CustomerPortal and Form Unit Char; every wizard page recorded before filling; no template; completion recorded; Designer shows the Form in User scope with its auto-added FlexLayout component; no component changed): **met for the same-session observations**, with the unit label "Char" (not "Character") and the one-versus-three FlexLayout count recorded as observed and not resolved.
- **AC-3, AC-4, AC-5 (Regenerate and readback parts), AC-6 (final report)**: not run in T2. AC-5 holds for T2: no scope change, no other Form touched, no component changed, no template, no runtime action, no unload, no checkout action.

## T3 — Collections (Primary FX_Orders, Secondary FX_Items) and one Regenerate Form (2026-10-15, cycle 2)

Scope of T3 (per the bounded instruction): Details > Collections; Primary and Secondary set; prompts answered by the prompt rule; one toolbar Regenerate Form on FX_CustomerPortal; read-only post-state. No close, no reopen, no manual Designer Save, no T4.

**Sources.** No re-read in T3. The sources were read in T1 of this worker session and remain in context.

### Gate (T3 start, read-only) — AC-1 carry-forward

- Tab list (before any select); no tab selects. Tab 0 = Designer, selected; snapshot: FX_CustomerPortal tab active; status bar **ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph**; Save **disabled**; Regenerate Form **disabled**; no dialog or prompt open; no session-expiry indication. Evidence: `t3-01-gate-FX_CustomerPortal-active-clean-user-scope.png`.
- Designer state at T3 start matches the end of T2 (Details pane expanded; the Components tab was selected).

### Collections tab — before changes (AC-3)

| Control / item | Observed before any change |
|---|---|
| Details tabs | Collections (selected), Components, Event Handlers, Variables, Design View Size |
| Left grid (collection list) | Search box; Expand and Collapse icon buttons; one row **"Primary Collection:"** with **no value** shown; **no Secondary entry** |
| Bottom-left toolbar | Blue **+** (New collection) and blue **trash** (Delete collection). The trash was **not** clicked. |
| Right grid (properties of the selected row) | Empty until a row is selected |
| Evidence | `t3-02-collections-tab-before-changes.png` |

Selecting the Primary row (a selection only, no value changed) showed its property grid, `t3-03-collections-primary-row-selected-properties-before-change.png`:

| Property (General group) | Control type | Observed value before change |
|---|---|---|
| Collection | **ExtJS combobox that opens a list of IDO names** (list-type picker; not a text box; no edit dialog button) | empty |
| Base Table and Alias | read-only text | "The primary table and its alias for this IDO is" (descriptive text) |
| Collection Name | combobox with an **Open Edit Property Dialog** button | empty |
| Custom Load Method | combobox | empty |
| Method Parameters | **Open Edit Property Dialog** button | (not opened) |
| Read Mode | combobox | (not opened) |
| Options | group | (not opened) |

The Collection list (`t3-04-collection-property-dropdown-opened-inspect-only.png`) contains alphabetical IDO names from ABDataServices through WSFormWizards and includes **FX_HelloWorld01, FX_Items, FX_Orders, FX_UMs**. The list was opened to inspect it, and FX_Orders was then chosen from it.

### Primary Collection = FX_Orders (AC-3)

- One click on the **FX_Orders** option (cell in the open list). Corrections: **0**.
- Result (`t3-05-primary-collection-FX_Orders-after-select.png`): the Collection combobox shows **FX_Orders**; the Base Table and Alias text is unchanged. **No prompt** appeared. Save remained **disabled** on the snapshot taken after the change.
- The left tree row still read "Primary Collection:" (no value) at this point. It later read **"Primary Collection: FX_Orders"** after the next re-render (see the New step).

### Collections New — Secondary entry created (AC-3)

- One click on the Collections **+** (New). Corrections: 0. Click count: **1**.
- Result (`t3-06-after-collections-New-click-secondary-entry.png`): a prompt appeared (below), and afterwards the tree showed a new entry **"Secondary Collection 2: [New]"** (no IDO yet).
- After the prompt was answered, Save, Undo and Regenerate Form were **enabled** (`t3-07`). The Form became dirty at this point.

**Prompt 1 (verbatim), answered OK (informational):**

- Title: "Infor Mongoose Application Development Framework - FX_CustomerPortal"
- Text: "You must regen this form (save the form definition and re-open it) to see the list of properties defined in this collection (FX_Orders)."
- Buttons: **OK** (only).
- Answer: **OK**. The prompt offered no regenerate-now option, so it was treated as informational under the prompt rule. Evidence: `t3-06` (prompt visible), `t3-07` (after OK).

### Secondary Collection = FX_Items (AC-3)

- Selected the new row ("Secondary Collection 2: [New]"). Its property grid showed Collection = "[New]" (combobox), Base Table and Alias = empty, Collection Name = empty (combobox with edit button), Custom Load Method = empty, Method Parameters, Read Mode and Options.
- Opened the Collection dropdown (same IDO list) and clicked **FX_Items**. Corrections: **0**.
- Result (`t3-08-secondary-collection-FX_Items-after-select.png`): the Collection combobox shows **FX_Items**. **No prompt** appeared.
- Display lag (unresolved, see open questions): the tree label still read **"Secondary Collection 2: [New]"** in every snapshot before Regenerate. The Primary label showed its value only after the New-click re-render. The property value is the observed evidence of the set value.

### Pre-Regenerate state (confirmed before the click)

- `t3-09-pre-regenerate-both-collections-set-form-dirty.png`: FX_CustomerPortal active; User scope; **Save enabled**; Regenerate Form **enabled**; no dialog or prompt open.
- Collections: Primary Collection = FX_Orders; Secondary Collection 2 = FX_Items (property value); tree label for Secondary still "[New]".

### Regenerate Form — exactly once (AC-3)

- One click on the Designer toolbar **Regenerate Form** with FX_CustomerPortal active. Click count: **1**. The tooltip "Regenerate Form" was shown.
- **Response:** no prompt, no message and no error appeared. Captured about 3 s after the click (`t3-10-after-regenerate-click-response.png`).
- **Post-Regenerate Form** (`t3-10`): FX_CustomerPortal active (tab); status bar User scope (anton.ramos@3mworks.com.ph); the canvas is unchanged (three columns); Properties: Name FX_CustomerPortal; Version "User version for us…" (truncated); Device Type Default; Form Type Flex; Unit Char; Size 120; 40; Synchronize FlexLayout attributes True.
- **Save state after Regenerate:** **disabled**; Undo **disabled**; Regenerate Form **disabled**. The Form is clean. No manual Designer Save was made.
- **Details pane after Regenerate:** collapsed on the first view; expanded by one click on "Expand Panel" (layout only). Collections tab shows:
  - **Primary Collection: FX_Orders**
  - **Secondary Collection 2: FX_Items**
  - Both rows now show an expand arrow.
- Evidence: `t3-11-post-regenerate-collections-FX_Orders-and-FX_Items.png`. This is a same-session UI state; it is not a persistence check.

Note: the narrator describes Regenerate as Save + Close + Reopen. **Observed:** the Form stayed open, no close or reopen occurred, and the Save state moved from enabled to disabled. No separate close or reopen was performed; T4 is the first persistence check.

### Evidence index (T3) — what each capture shows / does not prove

| File | Shows | Does not prove |
|---|---|---|
| `t3-01` | Gate: FX_CustomerPortal active; User scope; Save and Regenerate disabled; no dialog | server-side state |
| `t3-02` | Collections tab before changes: one "Primary Collection:" row with no value; + and trash icons; no Secondary | the trash icon was not clicked |
| `t3-03` | Primary row selected: property grid (Collection empty; Collection Name empty; Base Table and Alias text) | the control's full option set (see t3-04) |
| `t3-04` | Collection dropdown open: IDO list including FX_Items and FX_Orders (inspect only) | that an option was chosen here (none was) |
| `t3-05` | Collection = FX_Orders after the click; no prompt | the tree label (still no value) |
| `t3-06` | Prompt "You must regen this form…(FX_Orders)" after the New click; New entry present | which entry the prompt refers to beyond its text |
| `t3-07` | After OK: Save, Undo and Regenerate enabled (Form dirty); tree now shows "Primary Collection: FX_Orders" and "Secondary Collection 2: [New]" | that the dirty state is a server-side change |
| `t3-08` | Secondary Collection = FX_Items (combobox value); no prompt | the tree label (still [New]) |
| `t3-09` | Pre-Regenerate: Save and Regenerate enabled; FX_CustomerPortal; User scope | the content of the Regenerate action |
| `t3-10` | Post-Regenerate: no prompt or error; Save, Undo, Regenerate disabled; Form properties | the outcome beyond the UI (no message is shown) |
| `t3-11` | Post-Regenerate Collections tab: "Primary Collection: FX_Orders", "Secondary Collection 2: FX_Items"; Save disabled | persistence across a close and reopen (T4) |

### Action audit — T3 only (exact counts)

| Category | T3 count | Detail |
|---|---|---|
| Browser tab lists | 1 | before any select |
| Browser tab selects | 0 | Designer already selected |
| Successful snapshots | 14 | untargeted 4; targeted (e248, e743) 10 |
| Failed snapshots ("Ref e… not found") | 2 | one on the toolbar ref after the Primary change, one on the Details panel ref after Expand; each recovered with one fresh untargeted snapshot (recovery allowance used twice) |
| Successful clicks | 11 | Collections tab 1; Primary row 1; Collection dropdown open 1; FX_Orders option 1; Collections + (New) 1; prompt OK 1; Secondary row 1; Secondary Collection dropdown open 1; FX_Items option 1; Regenerate Form 1; Details Expand Panel 1 |
| Timeouts | 0 | |
| Key presses / text entries | 0 / 0 | |
| Waits | 5 | 2 s, 2 s, 2 s, 2 s, 3 s |
| Screenshots | 11 | `t3-01` … `t3-11` |
| Primary Collection changes | 1 (FX_Orders) | corrections 0 |
| Secondary Collection changes | 1 (FX_Items) | corrections 0 |
| Collections New clicks | 1 | corrections 0 |
| Collection deletions | 0 | trash not clicked |
| Collection Name / other properties changed | 0 | |
| Prompts | 1 | Prompt 1 (regen informational, after New), answered OK |
| Regenerate Form clicks | 1 | response: none observed |
| Designer manual Saves | 0 | Save state after Regenerate: disabled |
| Form closes / reopens | 0 / 0 | T4 not run |
| Select Form opens | 0 | |
| New Form Definition / wizard clicks | 0 | |
| Delete Form Definition clicks | 0 | |
| Checkout / unload / FormSync / deployment | 0 / 0 / 0 / 0 | |
| Runtime actions in Web Client | 0 | |
| Re-logins | 0 | session usable throughout |

### Cumulative action audit (T1 + T2 + T3)

| Category | T1 | T2 | T3 | Total |
|---|---|---|---|---|
| Browser tab lists | 1 | 1 | 1 | 3 |
| Browser tab selects | 3 | 0 | 0 | 3 |
| Successful snapshots | 16 | 18 | 14 | 48 |
| Failed snapshots (Ref not found) | 0 | 0 | 2 | 2 |
| Finds | 2 | 0 | 0 | 2 |
| Successful clicks | 12 | 14 | 11 | 37 |
| Failed hover (timeout) | 1 | 0 | 0 | 1 |
| Key presses | 3 | 0 | 0 | 3 |
| Text entries | 2 (filter, slow) | 1 (Name, plain fill) | 0 | 3 |
| Waits | 5 | 3 | 5 | 13 |
| Screenshots | 13 | 9 | 11 | 33 |
| Select Form opens (Cancel) | 1 | 0 | 0 | 1 |
| New Form Definition clicks | 1 (Cancel) | 1 (OK path) | 0 | 2 |
| Form Wizard Selection OK | 0 | 1 | 0 | 1 |
| Wizard Next / Finish | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 1 |
| Name / Unit entries | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 1 |
| Corrections (name, unit, collections) | 0 | 0 | 0 | 0 |
| Save Template changes | 0 | 0 | 0 | 0 |
| Forms created / templates created | 0 / 0 | 1 / 0 | 0 / 0 | 1 / 0 |
| Designer manual Saves | 0 | 0 | 0 | 0 |
| Regenerate Form clicks | 0 | 0 | 1 | 1 |
| Primary / Secondary changes | 0 | 0 | 1 / 1 | 1 / 1 |
| Collections New clicks | 0 | 0 | 1 | 1 |
| Collection deletions | 0 | 0 | 0 | 0 |
| Prompts (answered) | 0 | 1 (OK) | 1 (OK) | 2 (OK) |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Delete Form Definition clicks | 0 | 0 | 0 | 0 |
| Checkout / unload / FormSync | 0 | 0 | 0 | 0 |
| Runtime actions | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Errors | 1 (hover timeout) | 0 | 2 (Ref not found, recovered) | 3 |

Reconciliation: these are the worker's own counts from the tool-call sequence in this session. The controller audit was not available to the worker, so the counts are **not reconciled** with it; the operator should reconcile them.

### Worker-written file inventory (T3)

- `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md` (updated in T3: status and run lines; T3 section; open questions)
- `evidence/EXP-102/t3-01-gate-FX_CustomerPortal-active-clean-user-scope.png`
- `evidence/EXP-102/t3-02-collections-tab-before-changes.png`
- `evidence/EXP-102/t3-03-collections-primary-row-selected-properties-before-change.png`
- `evidence/EXP-102/t3-04-collection-property-dropdown-opened-inspect-only.png`
- `evidence/EXP-102/t3-05-primary-collection-FX_Orders-after-select.png`
- `evidence/EXP-102/t3-06-after-collections-New-click-secondary-entry.png`
- `evidence/EXP-102/t3-07-after-regen-informational-prompt-OK-collections-state.png` (note: the filename says "regen" but this is the state after the informational prompt was answered with OK; no Regenerate had been clicked at that point)
- `evidence/EXP-102/t3-08-secondary-collection-FX_Items-after-select.png`
- `evidence/EXP-102/t3-09-pre-regenerate-both-collections-set-form-dirty.png`
- `evidence/EXP-102/t3-10-after-regenerate-click-response.png`
- `evidence/EXP-102/t3-11-post-regenerate-collections-FX_Orders-and-FX_Items.png`

Not worker-authored: MCP snapshot (`.yml`) and console (`.log`) outputs under `evidence\playwright\` (side effects of tool calls; outside the EXP-102 paths; the harness inventory is authoritative).

### Final Designer state (end of T3)

- FX_CustomerPortal open and active in the Designer; **clean** (Save disabled; Undo and Regenerate Form disabled); **User scope** (status bar); no dialog or prompt open; Details pane expanded on the Collections tab (layout state).
- Collections: Primary Collection = FX_Orders; Secondary Collection 2 = FX_Items (Collections tab, post-Regenerate).
- Not done (T4 boundary): close, reopen, readback of Properties and collections after a close and reopen.

### Acceptance checks — T3

- **AC-3**: met for the same-session observations. The Collections tab was recorded before changes; Primary FX_Orders and Secondary FX_Items were set with 0 corrections; the single prompt was recorded verbatim and answered OK (informational); Regenerate Form was clicked exactly once on FX_CustomerPortal, with no prompt or error observed, the post-Regenerate Form, Save state (disabled) and collections recorded.
- **AC-5 (T3 part)**: no scope change, no other Form touched, no component changed, Regenerate once, no template, no runtime action, no unload, no checkout action, no close or reopen. Holds for T3.
- **AC-4**: not run (T4).
- **AC-6**: this record is the T3 part; the final report covers all tasks.

## T4 — Ordinary close and reopen readback (2026-10-15, cycle 3)

Scope of T4 (per the bounded instruction): gate; one close through the Form-tab control; one reopen; read-only readback of Properties, the Components tree and Details > Collections; leave the Form open and clean. No Regenerate, no Save, no wizard, no component or collection edit, no runtime action.

**Sources.** No re-read in T4. The sources were read in T1 and remain in context.

### Gate (T4 start, read-only) — AC-4 precondition

- Tab list (before any select; no tab selects in T4). Tab 0 = Designer, selected; snapshot: the only Form tab is **FX_CustomerPortal** (active); status bar **ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph**; **Save disabled**; Regenerate Form disabled; Undo disabled; no dialog and no menu open; no session-expiry indication.
- Details pane (expanded in T3) on the Collections tab showed **Primary Collection: FX_Orders** and **Secondary Collection 2: FX_Items** (the "[New]" label from T3 was already resolved at T4 start). Evidence: `t4-01-gate-pre-close-FX_CustomerPortal-clean-user-scope.png`.

### Close — one time (AC-4)

- One click on the **Form-tab close control** ("closable FX_CustomerPortal", ref from the T4 gate snapshot). Click count: **1**.
- **Save prompt:** **none appeared**. No prompt text and no button list to record; no answer was given.
- **Immediate post-close state:** the Form tab list is empty; no Form is open; the Designer canvas is blank (the same empty state as T1); toolbar Save, Regenerate Form and Undo disabled; no dialog or menu; status bar still User scope. The URL dropped the `MGForm=FX_CustomerPortal` parameter. Evidence: `t4-02-post-close-immediate-state.png` (empty canvas; Properties panel empty; status bar User scope).

### Reopen attempt 1 — Select Form dialog (not a Form open; list stale)

- One click on the toolbar **Open** control (tooltip "Open"). The Select Form dialog opened with its filter still reading the earlier "FX_Orders" text and two rows (FX_Orders, FX_OrdersChart).
- Filter changed to **FX_CustomerPortal** (click, Control+a, slow typing). **Result: zero rows** (`t4-03-select-form-filter-FX_CustomerPortal-zero-rows-after-reopen-attempt.png`). Filter then changed to **FX_C** (click, Control+a, slow typing): rows **FX_ComponentLab01, FX_ComponentLab02, FX_ComponentRecoveryLab02, FX_ComponentRecoveryLab03** (no FX_CustomerPortal row). FX_CustomerPortal was **not** listed in the Select Form grid in this T4 session, although the Form exists and reopens (see attempt 2).
- Interpretation (observed; cause unresolved): the Select Form grid appears to hold a list loaded before the Form existed (the dialog was first opened in T1, before creation; EXP-041-R3 recorded a similar zero-row lookup). This was **not** verified; it is a hypothesis.
- The dialog was left with **Cancel** (one click). **OK was not clicked; no row was double-clicked** in this dialog. Designer clean afterwards (snapshot: no dialog). Evidence of the cancelled state: a snapshot after Cancel (no separate screenshot).

### Reopen — one time through the Form menu recent-forms entry (AC-4)

- The Form menu (menu bar, "Form") opened (one click). Its recent-forms list now showed **FX_CustomerPortal** at the top, above FX_OrdersChart, FX_Orders, FX_HelloWorld01, FX_Items and the IDO entries. (In T1 the list had no FX_CustomerPortal entry.) Observed: the entry was added at some point after the T2 creation and the T4 close (the exact trigger is not established).
- One click on the **FX_CustomerPortal** recent-forms item (ref from the snapshot taken in T4 with the menu open). Reopen count: **1**. Wait 3 s, then the Designer opened `MGForm=FX_CustomerPortal`, tab **FX_CustomerPortal** (active, closable).
- **Reopen response:** no save prompt, no message, no error. Evidence: `t4-04-reopened-FX_CustomerPortal-properties-save-state.png`.

### Readback after reopen — Form identity, Properties, Save state (AC-4)

| Property (Form tab, Properties panel) | Observed after reopen |
|---|---|
| Form identity | Tab "FX_CustomerPortal"; URL `MGForm=FX_CustomerPortal`; status bar **ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph** |
| Name | FX_CustomerPortal |
| Version | "User version for user <signed-in user>" (panel text truncated as "User version for us…"; accessibility text shows the full string with the signed-in user) |
| Device Type | Default |
| Form Type | Flex |
| Unit (Layout) | Char |
| Size | 120; 40 (Width 120, Height 40) |
| Auto Height | False |
| Synchronize FlexLayout attributes | True |
| Save | **disabled**; Undo disabled; Regenerate Form disabled |

The Details pane was collapsed on reopen; it was expanded by one click on "Expand Panel" (layout only).

### Components tree after reopen (AC-4)

- The Components tab (one click) initially showed only the root row. The grid's Expand control (one click) expanded it. Observed rows (`t4-05-reopened-components-tree-flexlayout-and-regions.png`):
  1. **Pane (00)** — root, folder icon, Pane column blank.
  2. **flexlayoutPane_FX_CustomerPortal** — Type **FlexLayout**; Pane **0**; Tab **0**.
  3. **Region00: FLEX_PANE_REGION0** — FlexLayout icon; Type column blank.
  4. **Region01: FLEX_PANE_REGION1** — same.
  5. **Region02: FLEX_PANE_REGION2** — same.
- Same structure as at T2 and T3 (one FlexLayout component with three child regions). The count question from T2 (the Basic description's "three FlexLayout components") remains unresolved: the grid shows one FlexLayout component and three regions. No component was added, moved, renamed or edited; nothing was selected in the grid.

### Details > Collections after reopen (AC-4; one selection per row)

- The Collections tab (one click) listed:
  - **Primary Collection: FX_Orders**
  - **Secondary Collection 2: FX_Items**
  (`t4-06` shows the list and the Secondary grid.) The "[New]" label seen in T3 **is now resolved**: the Secondary row reads FX_Items at reopen.
- Each row was selected once (read-only; selection only, no value changed) to confirm its Collection property:
  - **Primary row** → property grid: **Collection = FX_Orders**; Base Table and Alias text: "The primary table and its alias for this IDO is FX_Orders fxords" (this text now names the table; in T3 it read only "The primary table and its alias for this IDO is").
  - **Secondary row** → property grid: **Collection = FX_Items**; Base Table and Alias: empty (unchanged from T3); Collection Name: empty; Custom Load Method: empty.
- **Qualification (T3):** Collection Name is empty for both entries (not set by the brief; unchanged). No prompt, error, missing or duplicate entry was observed.
- Evidence: `t4-06-reopened-collections-FX_Orders-FX_Items-secondary-selected-readback.png` (Secondary row selected, FX_Items shown; Save disabled; User scope).

### Final Designer state (end of T4) — AC-4 final

- FX_CustomerPortal open and active; **clean** (Save disabled; Undo and Regenerate Form disabled); **User scope**; **no dialog, menu or prompt** open. The Details pane is expanded on the Collections tab with the Secondary row selected (UI layout state only).
- Not performed (per the T4 boundary): no further Regenerate, no manual Save, no wizard operation, no component or collection edit, no runtime action, no acceptance declaration.

### Evidence index (T4) — what each capture shows / does not prove

| File | Shows | Does not prove |
|---|---|---|
| `t4-01` | Pre-close gate: FX_CustomerPortal the only Form; clean; User scope; Collections Primary FX_Orders and Secondary FX_Items | server-side persistence |
| `t4-02` | Post-close: empty canvas, no Form tab, no dialog, User scope status bar; no save prompt | that the close persisted anything server-side |
| `t4-03` | Select Form after typing FX_CustomerPortal: zero rows (grid empty) | that the Form does not exist (it reopens via the recent-forms entry) |
| `t4-04` | Reopened FX_CustomerPortal: Properties (Name, Form Type Flex, Device Type Default, Unit Char, Size 120; 40, Save disabled, User scope) | version string beyond the visible "User version for us…" (full text in the accessibility snapshot) |
| `t4-05` | Components tree: Pane (00) → flexlayoutPane_FX_CustomerPortal (FlexLayout, Pane 0, Tab 0) → Region00, Region01, Region02 | attributes or regions beyond their names (out of scope) |
| `t4-06` | Collections (Primary FX_Orders; Secondary FX_Items); Secondary property Collection = FX_Items; Save disabled | that the value is durable across sessions |

Note on the Select Form screenshot `t4-03`: the grid is empty for FX_CustomerPortal while the same dialog lists FX_ComponentLab/Recovery forms for "FX_C"; this is the stale-list observation above.

### Action audit — T4 only (exact counts)

| Category | T4 count | Detail |
|---|---|---|
| Browser tab lists | 1 | before any action |
| Browser tab selects | 0 | |
| Snapshots (successful) | 14 | untargeted 10; dialog-scoped (e610) 2; targeted (e989, e1000) 2 |
| Snapshots (failed, Ref not found) | 1 | after the Components tab click (ref e1000); recovered with one fresh untargeted snapshot. *Correction (T5 audit):* an earlier draft of this row also listed a failure on ref e248 after Details expand; that failure occurred in T3 (see the T3 audit), not in T4, and is removed here. |
| Successful clicks | 13 | Form-tab close 1; toolbar Open 1; Select Form filter 2; Select Form Cancel 1; Form menu 1; recent-forms FX_CustomerPortal 1; Details Expand 1; Components tab 1; Components Expand 1; Collections tab 1; Primary row 1; Secondary row 1 |
| Timeouts | 0 | |
| Key presses | 2 | Control+a (filter) × 2 |
| Text entries (slow typing) | 2 | FX_CustomerPortal; FX_C (filter only) |
| Waits | 3 | 2 s, 2 s, 3 s |
| Screenshots | 6 | `t4-01` … `t4-06` |
| Form closes | 1 | Form-tab close; no save prompt |
| Save prompts | 0 | none appeared on close |
| Form reopens | 1 | recent-forms entry |
| Select Form opens | 1 | opened via toolbar Open; filter changed twice; left by Cancel; OK 0; double-click 0; the dialog showed no FX_CustomerPortal row |
| Form menu opens | 1 | used for the reopen |
| Regenerate Form clicks | 0 | |
| Designer manual Saves | 0 | |
| Collections changes / New clicks / deletions | 0 / 0 / 0 | selections only (no value changed) |
| Components edits | 0 | |
| Prompts | 0 | none in T4 |
| Delete Form Definition clicks | 0 | the top toolbar trash was not clicked |
| Checkout / unload / FormSync / deployment | 0 / 0 / 0 / 0 | |
| Runtime actions in Web Client | 0 | |
| Re-logins | 0 | session usable throughout |
| Errors | 1 | one "Ref not found" (ref e1000, after the Components tab click), recovered with one fresh untargeted snapshot; no repeat of any mutation (*corrected in T5 from 2*) |

### Cumulative action audit (T1 + T2 + T3 + T4)

| Category | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| Browser tab lists | 1 | 1 | 1 | 1 | 4 |
| Browser tab selects | 3 | 0 | 0 | 0 | 3 |
| Successful snapshots | 16 | 18 | 14 | 14 | 62 |
| Failed snapshots (Ref not found) | 0 | 0 | 2 | 1 | 3 |
| Finds | 2 | 0 | 0 | 0 | 2 |
| Successful clicks | 12 | 14 | 11 | 13 | 50 |
| Failed hover (timeout) | 1 | 0 | 0 | 0 | 1 |
| Key presses | 3 | 0 | 0 | 2 | 5 |
| Text entries | 2 (filter, slow) | 1 (Name, plain fill) | 0 | 2 (filter, slow) | 5 |
| Waits | 5 | 3 | 5 | 3 | 16 |
| Screenshots | 13 | 9 | 11 | 6 | 39 |
| Select Form opens (Cancel) | 1 | 0 | 0 | 1 | 2 |
| Select Form OK / double-click | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| New Form Definition clicks | 1 (Cancel) | 1 (OK path) | 0 | 0 | 2 |
| Form Wizard Selection OK | 0 | 1 | 0 | 0 | 1 |
| Wizard Next / Finish | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 |
| Name / Unit entries | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 |
| Corrections (name, unit, collections) | 0 | 0 | 0 | 0 | 0 |
| Save Template changes | 0 | 0 | 0 | 0 | 0 |
| Forms created / templates created | 0 / 0 | 1 / 0 | 0 / 0 | 0 / 0 | 1 / 0 |
| Designer manual Saves | 0 | 0 | 0 | 0 | 0 |
| Regenerate Form clicks | 0 | 0 | 1 | 0 | 1 |
| Primary / Secondary changes | 0 | 0 | 1 / 1 | 0 | 1 / 1 |
| Collections New clicks | 0 | 0 | 1 | 0 | 1 |
| Collection deletions | 0 | 0 | 0 | 0 | 0 |
| Prompts (answered) | 0 | 1 (OK) | 1 (OK) | 0 | 2 (both OK) |
| Form closes / reopens | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 1 / 1 |
| Delete Form Definition clicks | 0 | 0 | 0 | 0 | 0 |
| Checkout / unload / FormSync | 0 | 0 | 0 | 0 | 0 |
| Runtime actions | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 |
| Errors (browser) | 1 (hover timeout) | 0 | 2 (Ref not found) | 1 (Ref not found) | 4 browser errors, all recovered; none repeated as a mutation. Filesystem errors (not browser): 1 (T1 Read of a path not yet created), listed in the T5 audit. |

Reconciliation: these are the worker's own counts from the tool-call sequence in this session. The controller audit was not available to the worker, so the counts are **not reconciled** with it; the operator should reconcile them.

### Worker-written file inventory (T4)

- `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md` (updated in T4: status and run lines; T4 section; open questions)
- `evidence/EXP-102/t4-01-gate-pre-close-FX_CustomerPortal-clean-user-scope.png`
- `evidence/EXP-102/t4-02-post-close-immediate-state.png`
- `evidence/EXP-102/t4-03-select-form-filter-FX_CustomerPortal-zero-rows-after-reopen-attempt.png`
- `evidence/EXP-102/t4-04-reopened-FX_CustomerPortal-properties-save-state.png`
- `evidence/EXP-102/t4-05-reopened-components-tree-flexlayout-and-regions.png`
- `evidence/EXP-102/t4-06-reopened-collections-FX_Orders-FX_Items-secondary-selected-readback.png`

Not worker-authored: MCP snapshot (`.yml`) and console (`.log`) outputs under `evidence\playwright\` (side effects of tool calls; outside the EXP-102 paths; the harness inventory is authoritative).

### Acceptance checks — T4

- **AC-4** (after one ordinary close and one reopen, FX_CustomerPortal shows User version, its Flex Layout component, Primary Collection FX_Orders and Secondary Collection FX_Items; left open and clean): **met for the same-session UI observations**. Close: one, no save prompt. Reopen: one, via the recent-forms entry. Properties, the Flex Layout component (`flexlayoutPane_FX_CustomerPortal`) with Region00–02, and both collections are shown after reopen. Left open, clean, no dialog. Limit: same-session UI observation only; not a cross-session or database-level durability check.
- **AC-5 (T4 part)**: no scope change; no other Form opened, edited or saved; no component changed; Regenerate not repeated; no template; no runtime action; no unload; no checkout action. Holds for T4.
- **AC-6**: this record is the T4 part. The final acceptance audit is for the operator; the worker does not declare the experiment accepted.

## Open questions / next step

- **Operator decision — acceptance:** the final EXP-102 acceptance audit (AC-1 to AC-6, the reconciled action audit, and the disposition of the items below) is the operator's. This worker has not declared the experiment accepted.
- **Unresolved (T4 — Select Form list):** the Select Form grid did not list FX_CustomerPortal after the Form existed (filter FX_CustomerPortal → zero rows; FX_C → other forms only), although the recent-forms entry opened it. Hypothesis: a stale list loaded in T1 (before creation). Not verified; a fresh Designer or list reload would be needed to test it, which this task did not do.
- **Unresolved (T4 — recent-forms entry):** the FX_CustomerPortal recent-forms entry appeared after the T2 creation and the T4 close; the exact trigger is not established.
- **Observed (T4 — Secondary label):** the T3 "Secondary Collection 2: [New]" label is resolved; it reads "Secondary Collection 2: FX_Items" after reopen. Whether the T3 lag was display-only is still not established (the value was FX_Items throughout in the property grid).
- **Unresolved (T4 — Regenerate effect):** a same-session close and reopen showed both collections, but the Regenerate's effect (save + reload) is not separated from the plain close and reopen by this evidence. The narrator's "Save + Close + Reopen" description was not verified.
- **Unresolved (T2/T3 carried):** unit label "Char" versus the brief's "Character"; the Basic description's "three FlexLayout components" versus one FlexLayout component (`flexlayoutPane_FX_CustomerPortal`) with three child regions (FLEX_PANE_REGION0–2).
- **Unresolved (T3 carried):** Collection Name is empty for both collection entries (not set by the brief; unchanged). The T3 prompt "You must regen this form (save the form definition and re-open it) to see the list of properties defined in this collection (FX_Orders)." was answered OK; no regenerate-now option was offered.
- **Pending (carried, T1):** the reading-scope deviations (`hello-world-pt7.md` read at lines 100–134 instead of 109–131; Section 3 body not read; "Sequence-sensitive checks" read as a whole list; EXP-041-R3 Outcome read window (lines 15–54) overran into the next sections, Outcome facts only used).
- **Pending (carried):** the Designer's Console "2 errors" were not inspected (brief prohibits console inspection).
- **Pending (T2, UI state):** the Details pane is expanded on the Collections tab with the Secondary row selected (layout only, not Form metadata).
- **Superseded:** the T1 absence result (zero rows for FX_CustomerPortal before creation) applies only to T1; the Form now exists.
- **Unresolved (T3):** the Secondary tree label read "Secondary Collection 2: [New]" until after Regenerate, while the property value was FX_Items. The post-Regenerate label reads FX_Items. Whether the lag was a display refresh or a metadata issue is not established; T4 is the check.
- **Unresolved (T3):** Collection Name (and Base Table and Alias for the Secondary entry) were empty for both entries. The brief did not set Collection Name; the Base Table and Alias text was shown for the Primary entry only. Operator decision if these matter for later Parts.
- **Unresolved (T3):** the Regenerate response: no message or prompt appeared in ~3 s; whether a completion message would have appeared later is not known.
- **Observed (T3):** Save was enabled after the New-click prompt, while Save was disabled after the Primary change alone. The cause (the New action or the prompt) is not separated by the evidence.
- **Carried from T1 (reading-scope deviations, for operator disposition):** `hello-world-pt7.md` read at lines 100–134 instead of 109–131 (Section 3 body not read); "Sequence-sensitive checks" read as a whole list; EXP-041-R3 Outcome read window (lines 15–54) overran into the next sections (Outcome facts only used).
- **Pending (carried):** whether the Designer's Console "2 errors" matter (not inspected by brief).

- **Carried from T2 (still open):** whether the Form is persisted server-side (same-session observation only; T4 is the first persistence check); the unit label "Char" versus the brief's "Character" (operator decision if it matters); the Basic description's "three FlexLayout components" versus the observed one FlexLayout component (`flexlayoutPane_FX_CustomerPortal`) with three child regions (FLEX_PANE_REGION0–2) (unresolved).
- **Pending (T2, UI state):** the Details pane is expanded on the Collections tab (layout only, not Form metadata).
- **Superseded:** the T1 absence result (zero rows for FX_CustomerPortal before creation) no longer applies; the Form now exists.

---

## T5 — Final documentation-only acceptance audit (2026-10-15, cycle 4)

**Scope of T5 (per the bounded instruction).** Documentation-only. **Zero browser calls. Zero Mongoose changes.** No close, reopen, Regenerate, Save, refresh, authentication, Form inspection or other UI action. No new browser evidence was created and no prior image was modified. This audit edits only this record. Its findings are observed-only and same-session where stated. It does not declare the experiment accepted.

**Note on the open-questions block above.** Lines in the "Open questions" section from before T4 (the bullets beginning "Unresolved (T3)", "Observed (T3)", "Carried from T1" and the duplicated "Carried from T2") were not removed when T4 replaced the earlier block. They are retained here as history and are superseded by the T5 dispositions below.

### 1. Sources reviewed for T5

- This record, in full (T1–T4 sections, the T1 and T4 corrections, and the reconciliation below).
- `evidence/EXP-102/` (Glob): **39 PNG files** — T1 13, T2 9, T3 11, T4 6. The count matches each task's recorded screenshot count.
- Images re-viewed in T5 (read-only, no browser): `t4-03` (Select Form, FX_CustomerPortal zero rows), `t3-09` (pre-Regenerate: Secondary entry FX_Items, Save enabled), `t2-04` (Name entry FX_CustomerPortal, Unit empty before selection). These match the descriptions in the task sections. Other captures were viewed during their tasks and their descriptions are retained.
- Sources read in T1 (AGENTS.md; hello-world-pt7.md; create-basic-form.md; session recipe; EXP-041-R3 and EXP-101 Outcome sections) — see the three reading deviations in section 4.
- **Controller tables: not available to the worker in this session.** The T5 instruction refers to controller-generated audit tables. None was supplied to the worker, so none was used. The only controller facts used are the two stated in the T5 instruction (T4: one error, snapshot #34, ref e1000; T1: a missing-file Read error plus the hover timeout). Both are consistent with the corrected worker record.

### 2. Reconciliation of errors (the T4 discrepancy)

| Task | Worker-recorded errors (corrected) | Type | Controller statement (from the T5 instruction) | Status |
|---|---|---|---|---|
| T1 | 1 — hover timeout on toolbar "Design" (ref e13), intercepted by the open Form menu | Browser | Hover timeout recorded | Consistent |
| T1 | 1 — "File does not exist" on a Read of the EXP-102 record path (before the record was created) | **Filesystem**, not browser | Missing-file Read recorded | Consistent (not a browser error) |
| T2 | 0 | — | not supplied | unreconciled |
| T3 | 2 — "Ref e11 not found" (toolbar, after the Primary change); "Ref e248 not found" (Details panel, after Expand Panel) | Browser (both recovered) | not supplied | unreconciled |
| T4 | **1** — "Ref e1000 not found" (Collections/Components panel, after the Components tab click) | Browser (recovered) | One error, snapshot #34, ref e1000 | **Consistent after correction** |

**The T4 discrepancy, explained.** The T4 section as first written listed two failures: e248 (after Details expand) and e1000 (after Components tab). The e248 failure actually occurred in **T3**, after the Details "Expand Panel" click made after Regenerate. The T4 Details expand used a fresh untargeted snapshot and succeeded. The error came from drafting, not from the tool log, and it is corrected above (T4 snapshot-failure row, T4 error row, cumulative snapshot-failure row and cumulative error row). After correction the worker record and the controller agree: **T4 had one Ref not found (e1000).**

**Totals (explicit).**
- Browser errors across T1–T4: **4** (1 hover timeout T1; 2 Ref not found T3; 1 Ref not found T4). All four were recovered. Three were followed by one fresh untargeted snapshot before any new ref was used. None was repeated as a mutation.
- Filesystem errors: **1** (T1 Read of a not-yet-created path). Not a browser error.
- Total error events of any kind: **5**.

**Other counts (snapshots, clicks, waits, key presses, screenshots).** These per-task tallies were kept by the worker during the session and were not checked against a tool-call log. Treat them as worker estimates until the controller tables are reconciled. The mutation counts in section 3 are the ones that matter for AC-5 and were checked against the recorded action text.

### 3. Count verification (mutations and prohibited operations)

Each count below was checked against the recorded action text in the task sections of this record. The source is noted for each.

| Item (brief's AC-6 list) | Verified count | Detail / source |
|---|---|---|
| Select Form opens | **2** | T1 (opened, left by **Cancel**); T4 (opened for the reopen attempt, filter typed, left by **Cancel**). OK 0. Double-click 0. No row was opened from Select Form. |
| New Form Definition clicks | **2** | T1 (wizard opened, Cancel); T2 (wizard opened, OK path). |
| Form Wizard Selection OK | **1** | T2 (Category Flex, Wizard Basic). |
| Wizard page Next | **1** | T2, page 1 → page 2. |
| Wizard page Finish | **1** | T2, page 2 (the wizard was not run to Finish again). |
| Completion-alert OK | **1** | T2 ("Process Completed Successfully"). |
| Wizard Back / Cancel (after T1) | 0 / 0 | — |
| Name entries / corrections | **1 / 0** | T2, one plain fill "FX_CustomerPortal". |
| Unit entries / corrections | **1 / 0** | T2, selected "Char" (option label; brief says "Character"). |
| Save Template changes | **0** | T2: checkbox present on page 2 and **unchecked by default**; not changed. |
| Templates created (worker) | **0** | No template was requested; no template object was inspected. |
| Forms created | **1** | FX_CustomerPortal (Finish). No other Form was created. |
| Collections "New" clicks | **1** | T3. |
| Primary Collection set / corrections | **1 / 0** | T3, FX_Orders (control: ExtJS combobox listing IDO names). |
| Secondary Collection set / corrections | **1 / 0** | T3, FX_Items (same control). |
| Collection deletions | **0** | Trash icon not clicked. |
| Prompts (answered) | **2** (both OK) | (a) T2 completion alert, verbatim in section T2. (b) T3 collections prompt, verbatim in section T3. |
| Regenerate Form clicks | **1** | T3, on FX_CustomerPortal active. Response: none visible (no prompt, message or error). |
| Designer manual Saves | **0** | No manual Save. |
| Form closes / reopens | **1 / 1** | T4: Form-tab close (no save prompt); reopen via Form menu recent-forms. |
| Other Forms opened / edited / saved / regenerated | **0 / 0 / 0 / 0** | Select Form dialogs listed FX_Orders, FX_OrdersChart and FX_C-prefixed forms only as filter results; no row was activated. |
| Delete Form Definition clicks | **0** | Top-toolbar trash not clicked. |
| Component add / move / rename / edit / delete | **0** | Components grid expanded and read only. |
| Checkout / unload / FormSync / deployment | **0** | — |
| Runtime actions (Web Client) | **0** | — |
| Re-logins | **0** | Session usable throughout. |

**Reconciled statement for the controller.** The mutation and prohibited-operation counts above are the worker's own, verified against the recorded text. The controller tool audit could not be used to reconcile them. The operator should reconcile them with the controller tables before recording AC-5 as fully met.

### 4. Execution deviations requiring operator disposition

| ID | Task | Deviation | Effect on outcome | Proposed disposition |
|---|---|---|---|---|
| D1 | T1 | `hello-world-pt7.md` read at lines 100–134 (the brief specified 109–131). Lines 100–108 are the map caveat; lines 132–134 are the Section 3 heading. The Section 3 body was **not** read. | None on decisions (only Sections 1–2 were used). | Operator waiver. |
| D2 | T1 | "Sequence-sensitive checks" (lines 309–321) read as a whole list (items 1–11). The brief specified item 9 only. | None on decisions (item 9 was the only item used). | Operator waiver. |
| D3 | T1 | EXP-041-R3 read at lines 15–54. The brief specified the Outcome section only, which ends at line 24. Lines 25–54 (sources read and AC-1 preflight) were read. | None (only the Outcome facts were used; the T1 record states this). | Operator waiver. |
| D4 | T1 | The toolbar "Design" click (Open) used ref e13 from the depth-3 snapshot taken **before** the menu-toggle click (e3). The brief requires refs from the most recent snapshot. | None observed: the click opened Select Form as intended and the next snapshot verified it. | Note for disposition. |
| D5 | T1 | A Read of the not-yet-created EXP-102 record path returned "File does not exist". Filesystem, not browser. | None (the record was then created). | Note only. |
| D6 | T3, T4 | The Collection dropdown arrow was opened with the tool target reported as a ref, but the tool log shows a CSS locator (`.mg-arrow-cell-icon` first). Target identity was checked by the next snapshot (the combobox and the option list) before any option was clicked. | None observed. | Note for disposition; tool behaviour, not a worker choice. |
| D7 | T3 | The informational prompt after the New click (text in section T3) was answered **OK** under the prompt rule. Its wording ("save the form definition and re-open it") could be read as a regenerate prompt. No regenerate-now option was offered, and no regeneration was triggered by the prompt. | A judgment call; Regenerate was clicked only once, from the toolbar. | Operator to confirm the classification. |
| D8 | T4 | A Select Form dialog was opened as a reopen attempt before the recent-forms route. The filter was typed (zero rows for FX_CustomerPortal), the dialog was left by Cancel, and no row was opened from it. The brief allowed either route but asked for one reopen. | Non-mutating extra open. Only one reopen occurred. | Note for disposition. |
| D9 | T3 | The T3 Regenerate was preceded by a parallel read-only screenshot and snapshot. | None (both read-only; permitted by the brief). | Note only. |

**Not deviations (recorded to close the question):** no `find`-derived ref was used for a click (the T1 finds were followed by fresh snapshots before any click, per the record); no Site Default or Group scope was chosen; no Delete Form Definition click; no OK in Select Form; no component edit; no template change.

### 5. Snapshot-reference behaviour, T2–T4 (assessment)

- **T2:** no reference errors. Every click used refs from the most recent snapshot in the task.
- **T3:** two Ref not found events, each followed by one fresh untargeted snapshot before any new ref was used. The first (`e11`) was a toolbar ref used after the Primary change; the second (`e248`) was a Details-panel ref used after the Expand click. Both are recovery events within the allowance (one fresh untargeted snapshot each). No mutation was repeated.
- **T4:** one Ref not found (`e1000`, after the Components tab click), recovered with one fresh untargeted snapshot. No mutation was repeated.
- **Assessment:** this is recovery behaviour within the brief's rule. It is not a further deviation, provided the operator accepts the statements in section 4 about refs and the recovery counts.

### 6. The T4 Select Form zero-row anomaly (observed; cause unresolved)

- **Observed:** after creation and the T4 close, the Select Form dialog filtered on **FX_CustomerPortal** returned **zero rows** (`t4-03`). Filtering on **FX_C** listed FX_ComponentLab01, FX_ComponentLab02, FX_ComponentRecoveryLab02 and FX_ComponentRecoveryLab03, and did not list FX_CustomerPortal.
- **Observed (same session):** the **recent-forms** entry for FX_CustomerPortal reopened the Form (`t4-04`).
- **Cause:** **unresolved.** The stale-list explanation is a hypothesis that was **not verified**. A fresh Designer or list reload would be needed to test it, and T4 did not perform one. The pre-creation positive control (T1, `t1-04`) only shows that FX_Orders and FX_OrdersChart were listed before the Form existed.
- **Consequence for AC-4:** none on the reopen, which succeeded by the recent-forms route. It is recorded as an open operator observation.

### 7. Preserved qualifications (unchanged; restated for the final disposition)

1. **Unit label:** the wizard option is "Char"; the brief says "Character". The Properties panel shows **Unit = Char** in T2, T3 and T4. Observed. Disposition needed if the label matters.
2. **FlexLayout structure:** the Basic wizard description says "three FlexLayout components, arranged horizontally". The Components grid shows **one** FlexLayout component (`flexlayoutPane_FX_CustomerPortal`) with **three** child regions (FLEX_PANE_REGION0–2), identical in T2, T3 and T4. The canvas shows three columns. Unresolved.
3. **Collection Name:** empty for both entries (the brief did not set it). The Primary Base Table and Alias text reads "…alias for this IDO is FX_Orders fxords" after reopen (it was the descriptive text only in T3). The Secondary Base Table and Alias is empty. Observed; not set by the brief.
4. **Regeneration effect:** not separated from an ordinary close and reopen. The Regenerate response was none visible. The narrator's "Save + Close + Reopen" description is **unverified**.
5. **Secondary tree label:** showed "[New]" in T3 until after Regenerate, while the property value was FX_Items. It reads FX_Items after Regenerate and after reopen. Observed; the cause of the lag is unresolved.
6. **Prompt classification (D7):** see section 4.
7. **Readback limits:** the readback is same-session UI only. No cross-session, database-level or replay verification is claimed.
8. **Designer Console "2 errors":** the page header reports two console errors. Not inspected (the brief prohibits console inspection). Unresolved.

### 8. Acceptance checks — decisive evidence (AC-1 to AC-6)

| Check | Status | Decisive evidence (files in `evidence/EXP-102/`) | Limits |
|---|---|---|---|
| **AC-1** Sources reviewed; session usable; Designer in User scope, no dirty Form; FX_CustomerPortal absent with FX_Orders as positive control; Form Wizard Selection read-only (Category options; Flex list with Basic); left with Cancel | **Met** (same session) | `t1-01` gate (no Form, User scope, Save disabled); `t1-02` Select Form opened; `t1-03` FX_CustomerPortal filter → zero rows; `t1-04` FX_Orders positive control (FX_Orders, FX_OrdersChart); `t1-05` cancelled, clean; `t1-06` wizard initial; `t1-07` Category list; `t1-08` Flex → Basic with description; `t1-09` cancelled, clean; `t1-10` Web Client identity (no expiry). | Absence is a single pre-creation observation. The New Data and REST category descriptions appear in the accessibility tree only (not in `t1-07`). Reading deviations D1–D3. |
| **AC-2** FX_CustomerPortal created once via Flex > Basic; Name FX_CustomerPortal; Unit Char; every page recorded before filling; no template; completion recorded; Designer shows User scope with auto-added FlexLayout; no component changed | **Met** (same session), with the qualifications in section 7 | `t2-02` selection; `t2-03` page 1 before fill (Name, Unit, Comments blank); `t2-04` Name entered; `t2-05` Name and Unit set; `t2-06` page 2 before change (Save Template unchecked); `t2-07` completion "Process Completed Successfully" (OK); `t2-08` new Form (Name, Version, Device Type Default, Form Type Flex, Unit Char; Save disabled; User scope); `t2-09` Components tree. | Unit label "Char" vs "Character". One FlexLayout + three regions vs "three FlexLayout components". Template absence is per the Save Template checkbox state; no template object was inspected. |
| **AC-3** Collections tab recorded before changes; Primary FX_Orders and Secondary FX_Items set with ≤1 correction each; every prompt recorded verbatim and answered by the rule; Regenerate Form clicked exactly once with response, post-state, Save state and collections recorded | **Met** (same session), with qualifications | `t3-02` before; `t3-03` Primary row properties before change; `t3-04` Collection list (inspect only); `t3-05` FX_Orders set; `t3-06` New click and prompt; `t3-07` after OK; `t3-08` FX_Items set; `t3-09` pre-Regenerate (Save enabled); `t3-10` Regenerate response (none) and post-state; `t3-11` post-Regenerate collections (Save disabled). | Prompt classification (D7). No Regenerate response visible. Secondary label lag (section 7.5). Regenerate's effect not isolated (section 7.4). |
| **AC-4** After one ordinary close and reopen: User version, Flex Layout component, Primary FX_Orders, Secondary FX_Items; left open and clean | **Met** (same session) | `t4-02` post-close (no save prompt; no Form); `t4-04` reopened Properties (User version, Flex, Default, Char, 120; 40; Save disabled); `t4-05` Components tree (flexlayoutPane_FX_CustomerPortal → Region00–02); `t4-06` Collections (Primary FX_Orders; Secondary FX_Items; Save disabled; User scope). | Same-session only; not a cross-session or database check. Reopen route was recent-forms (the Select Form route did not list the Form, section 6). "User version" is truncated in the panel and full in the accessibility text. |
| **AC-5** No scope other than User; no other Form created, edited, saved or regenerated; no component added, changed or deleted; Regenerate ≤1; no template; no runtime action; no unload; no checkout action; no task-boundary overrun | **Met on the worker record**; controller reconciliation outstanding | Section 3 verification table; section 4 (no prohibited operations recorded); `t2-08`, `t2-09` (no component edit); `t3-10`, `t4-06` (User scope). | Counts are the worker's own (section 2). Reading overruns D1–D3 are not AC-5 violations but are recorded for disposition. |
| **AC-6** Final report: decisive evidence for AC-1 to AC-5; complete audit with exact counts; file inventory; final state | **Worker portion complete; reconciliation and final acceptance are operator actions** | This record (T1–T5); section 3 counts; section 9 inventory; section 10 final state. | Controller reconciliation not possible from this session (section 2). Not an acceptance declaration. |

### 9. Worker-written file inventory (complete, for the experiment)

- `experiments/EXP-102-hello-world-part-7-sections-1-2-fx-customer-portal-form.md` — created in T1; updated in T2, T3, T4 and T5 (this record only).
- `evidence/EXP-102/` — **39 PNG captures**, written by the worker's screenshot tool calls with the EXP-102 path:
  - T1 (13): `t1-01-designer-gate-user-scope-no-form-open.png`; `t1-01b-designer-form-menu-recent-forms-closed.png` (**filename misleading**: the menu is still open in the image); `t1-01c-designer-toolbar-first-button-hover.png` (menu open after the hover timeout); `t1-01d-designer-form-menu-closed-by-toggle.png`; `t1-02` … `t1-10` (as listed in the T1 section).
  - T2 (9): `t2-01` … `t2-09`.
  - T3 (11): `t3-01` … `t3-11`. (**Filename note:** `t3-07-after-regen-informational-prompt-OK-collections-state.png` shows the state after the informational prompt was answered OK; it was captured **before** the Regenerate click.)
  - T4 (6): `t4-01` … `t4-06`.
- **Not worker-authored, but written as side effects of MCP tool calls:** snapshot (`.yml`) and console (`.log`) files under `evidence\playwright\` (for example `page-2026-10-15T…yml`, `console-2026-10-15T…log`). These are outside the `evidence/EXP-102/` path. The worker did not enumerate them. The harness inventory is authoritative for these.
- **Nothing else was written by the worker.** No memory file was written. No change was made to AGENTS.md, tutorial sources, recipes, assets or any other experiment record.

**Repository confinement, judged from worker and harness inventories.** Worker-written files are confined to `experiments/EXP-102-…md` and `evidence/EXP-102/`. The MCP side-effect files under `evidence\playwright\` lie outside the EXP-102 paths; they are recorded here for the harness to dispose of. Operator git review remains authoritative.

### 10. Final Designer state

- **As of the last browser observation (end of T4; T5 made no browser calls):** FX_CustomerPortal is open and the active tab. The Form is **clean** (Save, Undo and Regenerate Form disabled). Status bar: **ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph**. No dialog, menu or prompt open. The Details pane is expanded on the Collections tab, with the Secondary row selected (UI layout only, not Form metadata).
- **Collections:** Primary Collection = FX_Orders; Secondary Collection 2 = FX_Items (both confirmed by property values after reopen).
- **Components:** one FlexLayout component (`flexlayoutPane_FX_CustomerPortal`) with Region00, Region01 and Region02 (unchanged since T2).
- **Not verified after T4** (no calls made in T5).

### 11. Recommendation

**ACCEPTED AS OBSERVED WITH LIMITS — conditional on the operator waivers and dispositions in section 12.**

The functional checks AC-1 to AC-5 are supported by the recorded same-session evidence: the Form was created once through Flex > Basic in User scope; both collections were set and read back after a close and reopen; Regenerate was clicked exactly once; no other Form or component was touched; and no template, runtime action, unload or checkout action is recorded. This recommendation is **not** an unconditional acceptance, and it makes no cross-session, database-level or replay claim.

**Failed checks:** none recorded.

**Unresolved checks (not functional failures, but they must be dispositioned):** the Select Form zero-row anomaly (cause unknown); the Regenerate effect (not isolated from close and reopen); the unit label "Char"; the one-FlexLayout versus three-regions structure; the empty Collection Name properties; the Secondary label lag (cause unknown); the recent-forms trigger (unknown); the Designer console errors (not inspected); and the controller reconciliation of the counts (not available).

### 12. Outstanding operator dispositions (for coordinator/operator)

1. **D1–D3 (T1 source-reading overruns):** waive, or require a re-read under the exact bounds. Decisions did not depend on the overread text.
2. **Count reconciliation:** reconcile the worker counts (sections 2–3) with the controller audit. If the controller tables are not available, accept the worker counts as a stated limit.
3. **Filesystem error (D5)** versus the browser counts: confirm the classification (1 filesystem, 4 browser, all recovered).
4. **D4 and D6 (ref recency, tool locator):** accept as outcome-neutral, or require a re-run of the affected steps (not recommended; the outcomes were verified).
5. **D7 (prompt classification):** confirm that answering the T3 informational prompt with OK was correct under the prompt rule.
6. **D8 (extra Select Form open in T4):** accept as a non-mutating attempt.
7. **Unit label "Char" versus "Character":** decide whether a later Part needs the literal "Character".
8. **One FlexLayout + three regions versus "three FlexLayout components":** decide whether this matters for later Parts; the observed structure is recorded as observed.
9. **Collection Name empty for both entries:** decide whether later Parts need it set (not set here, per the brief).
10. **Regenerate effect:** accept that it was not isolated from close and reopen, and that the narrator's description is unverified.
11. **Select Form zero-row anomaly:** accept as an open observation, or request a separate read-only test in a later task (for example a fresh Designer or list reload).
12. **Secondary label lag:** accept as resolved-with-unknown-cause.
13. **Readback scope:** accept that the evidence is same-session UI only and that no durability claim is made.
14. **Console errors (2) in the Designer header:** decide whether to inspect them in a later task.
15. **Evidence filenames:** `t1-01b` and `t1-01c` show the Form menu open (names say otherwise); `t3-07` is named "regen" but predates the Regenerate click. Accept as recorded, or rename in the harness (no renames were made).
16. **MCP side-effect files** under `evidence\playwright\`: harness disposition.

### 13. Verification of the decisive claims in this record

- The **T4 error count** is one (`e1000`), matching the controller statement. The earlier two-error entry was an attribution error and is corrected above.
- The **T1 error list** now includes the filesystem Read error and the e13 recency deviation.
- The **mutation counts** in section 3 were checked against the recorded task actions. The **snapshot, click, wait and key-press tallies** are worker estimates pending reconciliation.
- **Close and reopen** each occurred once (T4). **Regenerate** occurred once (T3). **Prompts** were two, both answered OK. **Designer manual Saves** were zero. **Re-logins** were zero.

**Stop.** T5 is complete. No further browser action was taken, and the experiment is not declared accepted. The operator disposition is the next step.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 7 sections 1-2 are complete: the User-scope Flex Form **FX_CustomerPortal** exists with **Primary Collection FX_Orders** and **Secondary Collection FX_Items**, verified after an ordinary close and reopen. The operator decided acceptance and waived the deviations below for EXP-102 only.

- Created, for later cleanup (User scope, ScopeName = the operator's user):
  - Form `FX_CustomerPortal` through New Form Definition > New Form > Category Flex > Wizard Basic; Name FX_CustomerPortal, Unit Char; Save Template unchecked by default and left unchanged (no template). Form Type Flex, Device Type Default, Size 120; 40, Synchronize FlexLayout attributes True, Caption blank.
  - Collections: Primary Collection FX_Orders; Secondary Collection 2 FX_Items; committed by one toolbar Regenerate Form (operator-authorized once). No manual Designer Save.
- **Run R-20261015-225823-jK6W** (5 worker tasks): T1 read-only gate, absence check and wizard discovery; T2 create; T3 collections and one Regenerate; T4 close/reopen readback; T5 documentation-only audit. Paused once, for the operator disposition. The first start attempt failed before creating a run (the coordinator ChatGPT Chrome on port 9223 timed out on CDP connect; it was closed and relaunched with its original profile `C:\AI\learning-harness-chatgpt-profile`).
- Screenshots viewed by the operator assistant: `t3-06` (prompt "You must regen this form (save the form definition and re-open it) to see the list of properties defined in this collection (FX_Orders).", OK only), `t4-05` (reopened Components: Pane (00) > flexlayoutPane_FX_CustomerPortal (FlexLayout) > Region00-02 FLEX_PANE_REGION0-2), `t4-06` (reopened Collections Primary FX_Orders, Secondary 2 FX_Items; User scope; Save disabled).
- Findings (observed):
  1. **Form Wizard Selection:** Category Flex offers only Wizard **Basic** ("Creates a Flex form with three FlexLayout components, arranged horizontally"). It creates **one** FlexLayout `flexlayoutPane_FX_CustomerPortal` with **three regions** (FLEX_PANE_REGION0-2), shown as three canvas columns.
  2. **Flex Basic wizard:** page 1 Name (combobox), Unit (combobox: Pixel, Char; blank by default; the tutorial's "Character" is **Char**), Comments; page 2 Save Template, unchecked by default. Finish shows "Process Completed Successfully" (OK) and opens the Form clean.
  3. **Collections tab** (Details pane): a tree of entries with + (New) and trash; each entry's property grid has Collection (IDO combobox), Base Table and Alias, Collection Name, Custom Load Method, Method Parameters, Read Mode, Options. Setting the Primary did not dirty the Form or prompt; clicking + raised the OK-only regen prompt and then enabled Save, Undo and Regenerate. The tree label of a new Secondary entry stays "[New]" until Regenerate.
  4. **Regenerate Form** showed no message; the Form stayed open and Save, Undo and Regenerate became disabled. It did not visibly close and reopen as narrated; the collections survived the later ordinary close/reopen.
  5. **Open finding:** after creation the Designer Select Form dialog listed no FX_CustomerPortal row (filters FX_CustomerPortal and FX_C) while the Form menu recent-forms entry opened it. Possibly a list cached before creation or a Classic-only list; unresolved. A Select Form zero-row result is therefore not proof of absence.
- Counts: Forms created 1; templates 0; Regenerate Form clicks 1; Designer Saves 0; prompts 2 (both OK-only, both answered OK); Form closes / reopens 1 / 1 (no save prompt); Select Form opens 2 (T1 absence check, T4 extra attempt), both cancelled without opening a row; components changed 0; re-logins 0; successful clicks 50; screenshots 39.
- Operator rulings (EXP-102 only): D7 confirmed (OK-only prompt correctly treated as informational); D1-D3 source overreads, D4 outdated ref, D5 missing-file Read, D6 tool-chosen CSS locator, D8 extra Select Form open, D9 parallel reads waived. The five harness `browser_type` flags are the filter and Name entries.
- Limits: same-session UI evidence only; no runtime open of FX_CustomerPortal; whether Regenerate saved server-side is inferred from the clean state and the reopen.
- Confinement (git status): only `evidence/EXP-102/` and this record were written by the run.
- Next: Part 7 section 3 (04:10-05:16): edit the FlexLayout attributes of flexlayoutPane_FX_CustomerPortal into the root Header / Main / Footer regions (Vertical Box; fixed Header and Footer, flexible Main). The tutorial's root layout has three regions, which matches the three the wizard created.
