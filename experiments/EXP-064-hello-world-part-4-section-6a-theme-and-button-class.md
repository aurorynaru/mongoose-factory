# EXP-064 — Hello World Part 4 Section 6a: FX_HelloWorld theme with an FX_BlueButton Button class

**FINAL STATUS (T9, 2026-10-12): documentation-only acceptance review complete. AC-1–AC-8 met as observed (AC-1 with the "Edit Themes" label recorded as "Theme"; AC-5 with the commit via the Designer toolbar Save under the T7 operator exception; AC-6 same-session only). Recommendation: ACCEPTED as observed, not replay-verified, subject to operator acknowledgement of the §6 qualifications in `evidence/EXP-064/T9-ac8-final-acceptance-report.md`.** Final browser state (from T8): FX_Items the only open Designer Form, clean, Save and Undo disabled; no theme dialog open. T9 made zero browser calls.

**STATUS (T8, 2026-10-12): T8 COMPLETE — same-session close/reopen recovery observed (AC-6 and AC-7 met as observed; §19).** Global Objects reopened once via Edit > Theme; theme list = original 10 + FX_HelloWorld; FX_HelloWorld selected and Edit... invoked once; Button > FX_BlueButton (one row) confirmed after one selection of Button; Normal State reads Foreground `#FFFFFFFF`, Background `#FF5CC6C7`. Closed Edit Styles with its Cancel once, and Global Objects with its Cancel once. No dialog open; Designer Save and Undo disabled; FX_Items the only Form. **No Save, no edit, no OK in T8.** Recovery is same-session evidence only; it is not cross-session or database-level durability. Nothing is replay_verified.

**Earlier status (T7, 2026-10-12): T7 COMPLETE — operator-authorized theme-save sequence executed once per step. Native response: toast "Save — Global object(s) were saved."** Steps: Edit Styles OK ×1 (editor closed); Global Objects OK ×1 (dialog closed); Designer toolbar Save ×1 (enabled after the OK steps; one native save message; Save disabled afterwards). **No theme reopen and no close/reopen verification in T7.** Persistence beyond the immediate save acknowledgement is **not** verified (reserved for the next authorized task). No dialog open. Nothing is replay_verified. See §18.5 onward.

**Earlier status (T6, 2026-10-12): T6 STOPPED BEFORE SAVE — no unambiguous native theme Save control is visible; zero Save invocations (§17).** Pre-Save state verified: FX_HelloWorld editor open with one FX_BlueButton under Button; Normal State Background `#FF5CC6C7`, Foreground `#FFFFFFFF`; FX_Items clean. The only visible control named "Save" is the Designer top-toolbar Form Save (disabled), which is not a theme Save and was not clicked. Edit Styles and Global Objects both left open. Nothing is saved, closed, reopened or reverted. Nothing is replay_verified.

**Earlier status (T5, 2026-10-12): T5 COMPLETE — Normal-state Foreground set through its picker to Solid with the default White, confirmed once; readback `#FFFFFFFF` (AC-4 Foreground part met as observed, §16).** Background still reads `#FF5CC6C7`. One environment timeout on the Solid radio (no effect; one corrected label click). **No theme Save, no close/reopen, no class add, no preference or Form change.** Edit Styles and Global Objects are both left open. Nothing is replay_verified.

**Earlier status (T4, 2026-10-12): T4 COMPLETE for Background Color only — `#FF5CC6C7` entered once in FX_BlueButton > Normal State; readback `#FF5CC6C7` (AC-4 Background part met as observed, §15).** Foreground Color **not** set (it is the next task). One colour change; no theme Save, no close/reopen, no class add, no preference or Form change. Edit Styles and Global Objects are both left open. Nothing is replay_verified.

**Earlier status (T3, 2026-10-12): T3 COMPLETE — class FX_BlueButton added once under Button in the Edit Styles editor for FX_HelloWorld. AC-3 met as observed (§14).** One class add (one Add click). The tree did not show the new child immediately after Add; a single re-select of Button (selection only, no second Add) showed Button > FX_BlueButton. **No colour set, no theme Save, no close/reopen, no preference or Form change.** Both theme dialogs (Edit Styles and Global Objects) are left open as instructed. Nothing is replay_verified.

**Earlier status (T2, 2026-10-12): T2 COMPLETE — FX_HelloWorld created once through the dialog's New control and opened once for editing (Edit Styles). AC-2 met as observed (§13).** One theme create; one editor open; **no class added, no colour set, no theme Save, no close/reopen, no preference or Form change.** The Global Objects dialog and the Edit Styles editor are both left open on purpose to keep the unsaved theme state (§13.6). Nothing is replay_verified.

**Earlier status (T1, 2026-10-12): T1 COMPLETE — read-only preflight and baseline. AC-1 met as observed, with one label discrepancy (see §5).** No theme was created, edited, saved or closed-and-reopened in T1. The Designer tab was open on FX_Items (clean). **AC-3 to AC-8 not started.**

## 1. Run identity

- Run `R-20261012-220326-Rdi0`, experiment EXP-064, cycle 0, task **T1** (read-only preflight, baseline, stop before theme creation).
- Worker session `2951d40c-6eba-43f3-948f-b93d203979b6`; task_message_id `c0c1f1c8-d568-4428-b4ad-c0529831ad5d`.
- Brief commits (repository history): `b805189` (draft brief), `570ffae` (approved brief).
- Editing scope: **User** for Forms. Target objects: theme `FX_HelloWorld` and class `FX_BlueButton` (not yet created). Evidence directory: `evidence/EXP-064/`.

## 2. Sources reviewed

- `AGENTS.md` (repository file, read in full).
- `docs/mongoose/transcripts/hello-world-pt4.md` lines 170–191 (Section 6, 05:51–07:29) and the Section 6 source-precision and boundary notes. The transcript says: Edit Themes; create a theme named "Hello World"; Button > "Blue Button" class; Normal state; Background `#FF5CC6C7` (eight hex digits, do not reinterpret); Foreground Solid White. Steps 9–11 (User Preference, Import button) are out of scope for this experiment.
- `environments/current-environment.md` lines 55–99 (Designer entry points, Web Designer, dialog notes) and `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` §2 (Designer launch route, the Form > Definition > Designer route, scope dialog pre-filled as User).
- `experiments/EXP-063-R2-hello-world-part-4-section-5-import-item-pictures.md` (format reference only).
- `grep` of the repository for "Edit Themes": no prior experiment or recipe records the Edit Themes route. This route is therefore unverified and was observed fresh in this run.

## 3. Baseline (T1, observed)

### 3.1 Browser tabs

- Tab list before any tab selection (first list): **1 tab**, `0 (current) Mongoose` (Web Client, portal URL with `favoriteContext=FX_Items`).
- No Web Designer tab existed at task start.
- Tab 0 selected once (succeeded). Fresh snapshot: Web Client, FX_Items runtime Form open, guitar selected, toolbar Save disabled, no dialog, no portal banner, no challenge or sign-in screen.
- The Web Designer was then launched from the Web Client (see §3.3). A second tab list showed **2 tabs**: `0 Mongoose` (Web Client) and `1 (current) Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` at `…/WSWebClient/designer/default.aspx`. Tab 1 was selected once (succeeded), and tab 0 was not acted on after the Designer launch.

### 3.2 Web Client runtime Form (before Designer launch)

- Form identity: FX_Items (runtime); Item / Description / Cost / Unit of Measure fields; Import button; picture displayed.
- Selected record: row 3 `guitar`, `natural acoustic`, `129.99`, `EA`. Rows: 1 `dumbbell`, 2 `eggs`, 3 `guitar`.
- Dirty state: **clean** (toolbar Save disabled; no modified marker).
- Evidence: `evidence/EXP-064/t1-01-webclient-tab-baseline-fx-items-runtime-clean.png`.

### 3.3 Web Designer launch (route)

- Route used: Web Client menu bar **Form > Definition > Designer** (the "Designer" item of the Definition submenu). This is the same route recorded in EXP-062-R4 §2. The Web Client toolbar Designer buttons were not used.
- The launch opened a new browser tab (tab 1). The tab showed the "Identify Your Editing Scope" dialog with Scope `User` and User `anton.ramos@3mworks.com.ph` pre-filled. OK was clicked once to confirm the pre-filled scope (no value was changed).
- After OK the Designer loaded the Form `FX_Items` (URL changed to `designer/default.aspx?MGForm=FX_Items`).

### 3.4 Web Designer tab, open Form and dirty state

- Designer tab: tab 1, title "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)".
- Open Form: **FX_Items** (Designer tab heading "FX_Items", the only Form tab). Properties: Name `FX_Items`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Version `User version for user anton.ramos@3mworks.com.ph`.
- Scope footer: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Dirty state: **clean**. Toolbar Save disabled, Regenerate Form disabled, Undo and Redo disabled.
- Designer FX_Items was **not changed**. No field, property, component or Save action was performed on it.
- Evidence: `t1-02` (Designer after scope OK), `t1-07`/`t1-08` (Designer, menus closed, clean).

### 3.5 Edit Themes command — label and route

- **Visible label: `Theme`** (menu item in the Designer **Edit** menu). The phrase "Edit Themes" does **not** appear in the Designer Edit, View or Form menus (Help menu not inspected).
- **Route: Designer menu bar > Edit > Theme.** The item opens a dialog titled **"Global Objects"** whose left pane is headed **"Themes"** and whose right pane is headed "Properties". Route is one click on Edit, one click on Theme. (The Edit menu also contains "Revert Global Object Definition" directly below the Theme item. It was not clicked.)
- Menus inspected:
  - **View** menu: `User Preferences...`, `Diagnostics`. Neither was clicked (User Preference change is out of scope).
  - **Edit** menu: Undo, Redo, Copy, Cut, Paste, Form Script, Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, **Theme**, Validator, Variable, Web User Control Assets, Revert Global Object Definition.
  - **Form** menu: Definition (submenu), Sign Out, and recent Forms (FX_Items, IDOs, Property Classes, Sql Tables, Export/Import Strings, IDO Projects, FX_UMs, FX_HelloWorld01, Data Maintenance Wizard, Runtime Builder Selection). No theme item. Note: `FX_HelloWorld01` is a recent **Form** name, not the theme `FX_HelloWorld`.

### 3.6 Existing theme list (original) and controls

Themes pane, in order, as read from the dialog (10 themes):

| # | Theme name |
| --- | --- |
| 1 | ButtonTheme |
| 2 | Classic |
| 3 | Dark |
| 4 | Hi world |
| 5 | High Contrast |
| 6 | Infor |
| 7 | InforReport |
| 8 | Light |
| 9 | MyPortal |
| 10 | Projector |

- **`FX_HelloWorld` is not present.** No theme with an FX_ prefix is present. `Hi world` is an existing theme (not FX_-prefixed; not touched).
- Controls seen in the dialog:
  - Themes pane: search textbox (placeholder field, "Search" icon); bottom toolbar of three unlabelled icon buttons, visually a **+** (add), a **copy-like** icon and a **trash** icon. **None of the three was clicked in T1.**
  - Properties pane: search textbox, Expand and Collapse icon buttons, Name/Value tree (empty until a theme is selected), Undo and Redo (both disabled).
  - Dialog buttons: **OK**, **Cancel**, **Help**.
- No theme was selected in T1 (no row click). The Properties pane therefore shows no theme class tree.
- Evidence: `t1-05-edit-theme-global-objects-dialog-observed.png` (theme list and controls visible).

### 3.7 Close of the theme dialog

- The Global Objects dialog was closed with **Cancel** (one click). Nothing was created, edited or saved, so no unsaved-change prompt was expected or seen.
- After Cancel the Designer tab URL changed from `designer/default.aspx?MGForm=FX_Items` to `designer/default.aspx` (the query parameter was dropped). The FX_Items Form remained the selected Form tab and clean. This URL drop matches the EXP-062-R4 observation after a Cancel. Cause unresolved.
- Evidence: `t1-06-after-cancel-global-objects-closed-designer-fx-items-clean.png` (dialog closed; FX_Items clean; Save disabled).

## 4. Action audit (cumulative T1; exact)

| Action | T1 | Cumulative (T1) |
| --- | --- | --- |
| Browser tab lists (explicit `browser_tabs` list) | 2 | 2 |
| Browser tab selects | 2 (tab 0, tab 1) | 2 |
| Snapshots (explicit, untargeted) | 2 (Web Client; Designer) | 2 |
| Finds | 3 (Definition; Designer; Theme) | 3 |
| Successful element clicks | 11 (Web Client: Form, Definition, Designer = 3; Designer: scope OK 1, View 1, Edit 2, Edit > Theme 1, Cancel 1, Form 2) | 11 |
| Failed element click (ref not found; no effect; see §6) | 1 | 1 |
| Key presses | 1 (Escape; no effect) | 1 |
| Screenshots (worker-requested) | 8 (`t1-01` to `t1-08`) | 8 |
| Designer launches (new tab) | 1 | 1 |
| Scope dialog confirmations (pre-filled values) | 1 | 1 |
| Edit Themes / Global Objects dialog opened | 1 | 1 |
| Global Objects dialog closed with Cancel | 1 | 1 |
| **Theme creates** | 0 | 0 |
| **Theme class adds** | 0 | 0 |
| **Colour changes** | 0 | 0 |
| **Theme Saves** | 0 | 0 |
| Theme editor open / close / reopen | 0 / 0 / 0 | 0 |
| Other theme edits (rename, delete, class change) | 0 | 0 |
| **User Preference changes** | 0 | 0 |
| **Designer Form changes / Form Saves / component changes** | 0 / 0 / 0 | 0 |
| Theme-class assignments to components | 0 | 0 |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Theme trash clicks | 0 | 0 |
| Form close / reopen | 0 / 0 | 0 |
| Checkout-management actions | 0 | 0 |
| Navigate (direct URL), refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate or run-code | 0 | 0 |
| Browser console or network inspection (by the worker) | 0 | 0 |
| Coordinate clicks, typing, drag or drop | 0 | 0 |
| Unload, cache, FormSync, deployment or regeneration | 0 | 0 |

- The Playwright tool wrote its own snapshot and console log files under `evidence/playwright/`. These are tool-generated, not worker-requested, and were not opened as console or network inspection. The console counter shown on the page ("3 errors, 10 warnings" in the Web Client; "2 errors, 0 warnings" in the Designer) was observed in the tool output and not investigated.

## 5. Acceptance matrix (T1 scope)

- **AC-1: met as observed, with one label discrepancy.**
  - Sources reviewed: AGENTS.md; hello-world-pt4.md §6 (05:51–07:29); environment and EXP-062-R4 route notes. Met.
  - Session usable without challenge: yes (no sign-in, no challenge, no portal banner, no dialog at start). Met.
  - Web Designer tab identified; open Form and dirty state recorded: tab 1; FX_Items; clean (§3.4). Met.
  - Exact Edit Themes label and route recorded: route Edit > Theme → Global Objects (Themes). **The visible label is `Theme`; the phrase "Edit Themes" was not found in any inspected Designer menu.** Partially met; see §8 Q1.
  - Original theme list recorded with no FX_HelloWorld: 10 themes, §3.6. Met.
  - Evidence: tab lists (§3.1), route screenshots `t1-03` to `t1-05`, theme list `t1-05`.
- **AC-2 to AC-8: not started.** No theme was created, no class added, no colour set, no Save, no close-and-reopen, no preference or Form change.

## 6. Blockers and recovery

- **One failed click (no effect).** After the Designer scope dialog appeared, I clicked the OK button using the Web Client iframe ref `f1e305`. The tool returned `Ref f1e305 not found in the current page snapshot`. The Designer page uses top-level refs, so the ref was from the wrong page. I then clicked OK using `e305`, which came from the untargeted Designer snapshot taken immediately before the failed call. **Deviation (disclosed):** I did not take a new snapshot after the error. The failed call performed no action (the tool reported no page change), and the `e305` ref came from a fresh untargeted snapshot, so no unsafe ref was used. The OK click succeeded once.
- **Escape did not close the Designer Form menu.** A screenshot after Escape showed the Form menu still open. Clicking the Form menu button again closed it. No menu item was clicked. Observed.
- **Edit click after View.** The first Edit click while the View menu was open closed the View menu and did not open Edit. The second Edit click opened Edit. Observed. Not an error.
- No blocker remains. No dialog is open. No browser-native prompt appeared.

## 7. Worker-written file inventory (T1)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (this record; created T1)
- `evidence/EXP-064/t1-01-webclient-tab-baseline-fx-items-runtime-clean.png`
- `evidence/EXP-064/t1-02-designer-tab-fx-items-opened-after-scope-ok.png`
- `evidence/EXP-064/t1-03-designer-view-menu-open-locate-edit-themes.png`
- `evidence/EXP-064/t1-04-designer-edit-menu-open.png` (**name is misleading**: shows the View menu closed and no menu open; the Edit menu was not open at capture)
- `evidence/EXP-064/t1-05-edit-theme-global-objects-dialog-observed.png`
- `evidence/EXP-064/t1-06-after-cancel-global-objects-closed-designer-fx-items-clean.png`
- `evidence/EXP-064/t1-07-designer-final-state-menus-closed-fx-items-clean.png` (**name is misleading**: shows the Form menu still open at capture; the menu was closed afterwards by `t1-08`)
- `evidence/EXP-064/t1-08-designer-menus-closed-final-baseline.png`

No other file was written by the worker. Tool-generated Playwright snapshot and console files under `evidence/playwright/` (timestamps 14:03–14:06 UTC on 2026-10-12) are not worker-written. No asset, AGENTS.md, transcript, recipe or earlier experiment record was changed.

## 8. Screenshot review (what each proves and does not prove)

- `t1-01`: Web Client tab; FX_Items runtime; guitar row selected; Save greyed; Import button; shiba picture; no dialog. **Proves** start state and clean runtime. Does not prove Designer state.
- `t1-02`: Designer tab; FX_Items Form tab heading; Name/Form Type/Is Master/Version in Properties; Save and Regenerate greyed; footer User scope. **Proves** Designer Form identity and clean toolbar. Does not prove persisted state.
- `t1-03`: Designer View menu open; items `User Preferences...` and `Diagnostics` only. **Proves** no Edit Themes item in View. Does not prove the Edit menu contents.
- `t1-04`: Designer top menu bar only; no menu open. **Proves** the View menu closed after the Edit click. Does not show the Edit menu; the Edit menu was captured through the accessibility snapshot (see the Edit list in §3.5) and the `t1-05` dialog.
- `t1-05`: Global Objects dialog; Themes list of 10 names; Properties pane empty; + / copy / trash icons; OK / Cancel / Help. **Proves** the theme list and the dialog controls. Does not prove which icon creates a theme (icons are unlabelled; the + sign is visible only).
- `t1-06`: Global Objects dialog closed; FX_Items clean; no dialog. **Proves** the dialog closed after Cancel and the Form stayed clean. Does not prove the theme list stayed unchanged beyond T1.
- `t1-07`: Form menu open (Definition, Sign Out, recent Forms); FX_Items clean. **Proves** no theme item in the Form menu. Does not prove the menu state after the close click (see `t1-08`).
- `t1-08`: menus closed; FX_Items clean; no dialog. **Proves** the final T1 state. Does not prove any later state.

## 9. Knowledge state (T1)

- Web Designer launch via Web Client Form > Definition > Designer opens a new tab with the scope dialog; OK loads FX_Items: **observed** (also observed in EXP-062-R4).
- Designer Edit > Theme opens the "Global Objects" dialog with a Themes list of 10 existing themes: **observed**.
- Edit Themes as a command label: **unresolved** (visible label is `Theme`; the phrase "Edit Themes" not found).
- Designer menu Escape does not close the Form menu; a second click on the Form button does: **observed**.
- Designer URL drops `?MGForm=FX_Items` after Cancel of the Global Objects dialog: **observed**; cause unresolved.
- Existing theme list (10 themes, `FX_HelloWorld` absent): **observed**.
- Nothing is replay_verified. No procedure is marked verified.

## 10. Next step (not started)

- Next permitted step, for the coordinator to authorize: **T2 — create FX_HelloWorld once** through the Global Objects Themes pane using the **+** control (candidate; not verified), with the base theme default recorded if the dialog asks for one. The Designer tab (tab 1, FX_Items clean) is still open.
- Before any create, the next task must again list tabs, select the Designer tab and take a fresh snapshot.

## 11. Open questions

- **Q1.** Is the Designer **Edit > Theme** item (dialog "Global Objects", Themes pane) the intended "Edit Themes" command from the brief? The Help menu was not inspected. If another menu item is labelled "Edit Themes", the next task should record it.
- **Q2.** Which of the three unlabelled icon buttons under the Themes list is the theme create control? The + sign is the expected candidate. Not verified.
- **Q3.** Whether the Designer launch via Form > Definition > Designer was part of the intended route, or whether the coordinator expects a different launch. Used here because no Designer tab existed (the route is the same as EXP-062-R4).

## 12. Blockers

None (T1). See §13 for T2.

## 13. T2 — FX_HelloWorld created once and opened for editing (cycle 1, task T2; AC-2 met as observed)

### 13.1 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Infor Mongoose Application Development Framework (…/WSWebClient/designer/default.aspx)` and `1 Mongoose` (Web Client). **Tab order changed since T1**: the Designer is now tab 0 (T1 had it at tab 1).
- Tab 0 (Designer) selected once (succeeded). Fresh untargeted snapshot: Designer, Form tab `FX_Items` (single Form tab), Form Type Normal, Name FX_Items, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. **Dirty state: clean** (toolbar Save disabled, Regenerate Form disabled, Undo and Redo disabled). No dialog open. No sign-in screen or challenge.
- Web Client tab (tab 1) was not selected or acted on in T2.

### 13.2 Edit Themes route (confirmed again)

- Designer menu bar **Edit > Theme** (one click on Edit, one on `Theme`). Opened the **"Global Objects"** dialog (Themes pane, Properties pane, OK / Cancel / Help). The phrase "Edit Themes" is still not visible in the Designer menus; the visible label is `Theme`.

### 13.3 Pre-creation theme list (original 10; FX_HelloWorld absent)

- Themes (in order): ButtonTheme, Classic, Dark, Hi world, High Contrast, Infor, InforReport, Light, MyPortal, Projector. **FX_HelloWorld absent.** Same 10 as T1.
- Evidence: `t2-01-global-objects-themes-before-create-original-list.png` (list visible; FX_Items clean behind the dialog).

### 13.4 Create control identification and invocation

- Three unlabelled icon buttons sit at the bottom of the Themes pane (refs `e625`, `e626`, `e627` in the snapshot). The accessibility tree gives no name for them.
- **Hover (read-only) over the first icon (`+`)** displayed the tooltip **"New"** (`t2-02`). Identified as the dialog's native create control. The copy-like and trash icons were not hovered or clicked.
- **Create invocation: one click on `New` (+).** A small dialog titled **"New"** opened with one field, **Name:**, focused, and OK / Cancel. **No base-theme selector was shown**, so no base theme was chosen or recorded. The base theme is therefore not applicable in this dialog.
- Name entered once by typing `FX_HelloWorld` into the Name textbox. Read-back from `t2-04`: `FX_HelloWorld` (exact spelling; no trailing text observed).
- **OK clicked once.** No error observed. A new row **`FX_HelloWorld`** appeared in the Themes list between `Dark` and `Hi world` (alphabetical position), and it was **auto-selected** (highlighted). The Properties pane then showed the theme's option tree: Explorer Style `Classic`; Required Field Indicator `Asterisk`; Group Box Style `Standard`; Notebook Style `Standard`; Button Animation `Standard`; Mode `Light`; Default Pinned Explorer Folder (blank); Base Colors (blank, with Edit button); Allow Portal Color Overrides `False`; Version `User version for user anton.ramos@3mworks.com.ph`. These defaults were not set by the worker and are reported as observed only.
- Create result (observed): the list now holds 11 names (the original 10 plus FX_HelloWorld). Evidence: `t2-05-after-create-fx-helloworld-theme-list-and-editor.png`.
- Transient observation: right after creation the Designer toolbar **Save** and **Undo** icons looked enabled in `t2-05` (both appeared active). In `t2-06` and in the later snapshot they were disabled again. The Designer Form was never changed. Cause not investigated; recorded as observed only.

### 13.5 Open for editing (once)

- Route: with FX_HelloWorld selected, one click on the Properties pane button **`Edit...`** (the creation did not open the editor by itself; the new theme stayed as a selected row with a property list).
- Result: a dialog titled **"Edit Styles"** opened. Its **Elements** tree is rooted at **`FX_HelloWorld`** and contains `UIElement > Application Frame; Form > FormComponent > Button, Calendar, CheckBox, ComboBox, CriticalNumber, DataView, DateCombo, DropList, Edit, FlexLayout, …` (list continues). The Categories and Attributes panes are empty (no element selected yet). Buttons: OK, Cancel, Help. Evidence: `t2-06-fx_helloworld-opened-for-editing-after-edit-click.png`, `t2-07-fx_helloworld-editor-open-final-t2-state.png`.
- Visible identity: root node text `FX_HelloWorld`. The editor's element tree shows the Button component (the class-add step, T3, uses it).

### 13.6 Final state and decision to leave dialogs open

- Open in-page dialogs: **Edit Styles** (theme editor for FX_HelloWorld) over the **Global Objects** dialog. I did **not** click OK or Cancel on either, to avoid discarding or committing any theme state. This was done to preserve the unsaved theme state the instruction asked to preserve. **The coordinator must decide how to close them** (the next task may continue in the editor). No theme Save was performed. Nothing has been saved.
- Designer Form FX_Items: clean; untouched; Form Save not clicked.
- No browser-native dialog. No unsaved-change prompt.

### 13.7 Screenshot review (T2)

- `t2-01`: Global Objects; Themes list of the original 10; FX_Items clean behind it; no FX_HelloWorld. **Proves** the pre-creation list. Does not prove the list in the saved store (only the dialog view).
- `t2-02`: hover over the first icon; tooltip `New`. **Proves** the first icon is labelled New in the tooltip. Does not prove the other two icons' labels (not hovered).
- `t2-03`: `New` dialog with an empty Name field. **Proves** the dialog has no base-theme selector. Does not prove the name entered.
- `t2-04`: Name field shows `FX_HelloWorld` before OK. **Proves** the typed name. Does not prove the saved name.
- `t2-05`: list of 11 names; FX_HelloWorld highlighted; Properties option tree; Designer Save/Undo icons appeared active. **Proves** the create result in the dialog. Does not prove persistence beyond the dialog; the Save-icon state is unexplained.
- `t2-06`: Edit Styles editor opened for FX_HelloWorld over Global Objects; Designer Save/Undo greyed. **Proves** the editor identity (root FX_HelloWorld) and the Elements tree. Does not prove the Normal state or any colour (not yet touched).
- `t2-07`: same state as `t2-06`, final. **Proves** the final T2 state. Does not prove anything about T3–T8.

### 13.8 Action audit (T2, exact)

| Action | T2 (incremental) | Cumulative T1–T2 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 3 |
| Browser tab selects | 1 (tab 0, Designer) | 3 |
| Snapshots (explicit, untargeted) | 2 | 4 |
| Finds | 0 | 3 |
| Successful element clicks | 5 (Edit; Theme; New +; New-dialog OK; Edit...) | 16 |
| Failed element clicks | 0 | 1 |
| Hovers (read-only tooltip check) | 1 | 1 |
| Typing | 1 (Name textbox) | 1 |
| Key presses | 0 | 1 |
| Screenshots (worker-requested) | 6 (`t2-01` to `t2-06`) + 1 final (`t2-07`) = 7 | 15 |
| Edit > Theme / Global Objects opened | 1 | 1 |
| Global Objects closed (Cancel/OK) | 0 | 1 (Cancel, T1) |
| **Theme creates (native New control)** | **1** | **1** |
| Base-theme choices | 0 (no base-theme field) | 0 |
| Theme editor opens (Edit...) | 1 | 1 |
| Theme editor closes | 0 | 0 |
| **Theme class adds** | **0** | **0** |
| **Colour changes** | **0** | **0** |
| **Theme Saves** | **0** | **0** |
| Other theme edits (rename, delete, copy, class change) | 0 | 0 |
| **User Preference changes** | 0 | 0 |
| **Designer Form changes / Form Saves / component changes** | 0 / 0 / 0 | 0 |
| Theme-class assignments to components | 0 | 0 |
| Top-toolbar Delete Form Definition clicks | 0 | 0 |
| Theme trash-icon clicks | 0 | 0 |
| Checkout actions, navigate, refresh, restart, reauth | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 |

Note: the T1 "Failed element click" (ref `f1e305`) and "Key presses" (Escape) are carried in the cumulative column. The "Global Objects closed" T1 Cancel is carried in the cumulative column as a close, not in T2.

### 13.9 Worker-written file inventory (T2)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and this §13)
- `evidence/EXP-064/t2-01-global-objects-themes-before-create-original-list.png`
- `evidence/EXP-064/t2-02-hover-first-themes-icon-tooltip-check.png`
- `evidence/EXP-064/t2-03-after-new-click-theme-name-prompt-or-row.png`
- `evidence/EXP-064/t2-04-new-theme-name-entered-before-ok.png`
- `evidence/EXP-064/t2-05-after-create-fx-helloworld-theme-list-and-editor.png`
- `evidence/EXP-064/t2-06-fx_helloworld-opened-for-editing-after-edit-click.png`
- `evidence/EXP-064/t2-07-fx_helloworld-editor-open-final-t2-state.png`

Tool-generated Playwright snapshot and console files under `evidence/playwright/` are not counted (tool output, not worker-requested). Note: a broad grep over `evidence/playwright/` was run as a read-only file search; it is not a browser action.

### 13.10 Knowledge state (T2)

- Edit > Theme opens Global Objects (themes list of 10 originals): observed (T1 and T2).
- The first Themes-pane icon is the native **New** control (tooltip): observed (single run).
- New dialog creates the theme from a Name field only (no base-theme selector): observed.
- Created theme is auto-selected but its editor is **not** auto-opened; `Edit...` opens the Edit Styles editor with root FX_HelloWorld: observed.
- Designer Save/Undo icons briefly enabled after creation, then disabled: observed; cause unresolved.
- Nothing is replay_verified.

### 13.11 Open questions and next step (T3, not started)

- **Q4.** Confirm the coordinator wants the Edit Styles editor and Global Objects dialog left open (for T3), or closed by a specified control. Not closed by the worker.
- **Q5.** Whether the theme itself is persisted at creation or only on theme Save (T3–T6). Not verified; the brief requires one theme Save later, which is the test.
- **Next permitted step (T3, for the coordinator to authorize):** in Edit Styles, select `Button` (Form Component tree), type `FX_BlueButton` into Class Name, press Add once, verify the tree shows Button > FX_BlueButton. Before that, list tabs, select the Designer tab, and take a fresh snapshot.

### 13.12 Blockers

None.

## 14. T3 — FX_BlueButton class added once under Button (cycle 2, task T3; AC-3 met as observed)

### 14.1 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Designer (…/WSWebClient/designer/default.aspx)` and `1 Mongoose` (Web Client). Same order as T2.
- Tab 0 (Designer) selected once (succeeded). Fresh untargeted snapshot: Edit Styles editor open with root `FX_HelloWorld`; Global Objects dialog open behind it, listing `FX_HelloWorld` among the themes. Designer Form FX_Items: **clean** (toolbar Save disabled, Undo and Redo disabled). Scope footer `User / anton.ramos@3mworks.com.ph`. No sign-in screen or challenge.
- Web Client tab (tab 1) not selected or acted on.

### 14.2 Pre-addition check

- Elements tree before selection: `FormComponent > Button` had **no child** (no `FX_BlueButton` row). Evidence: `t3-01-before-add-edit-styles-button-node-no-child.png` (Button node with no expander and no child).
- Button selected (selection only; one click on the Button treeitem). Categories listed: Font, Normal State, Active State, Disabled/Read-Only State, Hover State, Pressed State. The bottom of the editor showed **Class Name** (textbox) and **Add** button, which were not visible before selection. Evidence: `t3-02-button-selected-class-name-and-add-controls-visible.png`.

### 14.3 Class Name and Add

- Typed `FX_BlueButton` into Class Name (one type action). Read-back in `t3-03`: `FX_BlueButton`.
- **Add clicked once.** The editor refreshed: Button was no longer selected, the Categories and Attributes panes were empty, and the **Class Name / Add controls disappeared**. The immediate post-Add screenshot (`t3-04`) showed **no child under Button** (no FX_BlueButton row). This was an uncertain state and is recorded as such.
- Per the brief, I did **not** click Add again.

### 14.4 Corrected visible inspection (one)

- Re-selected Button (one click, selection only). The Class Name and Add controls reappeared at the bottom. **The tree now shows `Button > FX_BlueButton`** (FX_BlueButton indented one level under Button, before Calendar). Fresh snapshot: a single `treeitem "FX_BlueButton"` under Button; no duplicate row. Evidence: `t3-05-reselect-button-after-add-inspection-tree-and-class-controls.png`.
- Interpretation (observed, not a claim about cause): the tree did not render the new child until Button was re-selected. Whether that is a delayed tree refresh or another rendering behaviour is unresolved. The count of FX_BlueButton rows is 1.

### 14.5 Final state

- Button is selected in the tree; Class Name is empty (no value after the add); Categories are not open on FX_BlueButton.
- No Normal state, colour, or other element was touched. FX_BlueButton has not been selected yet (that is T4).
- Edit Styles (root FX_HelloWorld) and Global Objects both open, as instructed. No theme Save. No close. No reopen.
- Designer Form FX_Items: clean, untouched. Save disabled.
- No browser-native dialog. No unsaved-change prompt from Mongoose at the Designer level.

### 14.6 Screenshot review (T3)

- `t3-01`: Button node with no child; Categories empty. **Proves** the pre-add state (no FX_BlueButton). Does not prove the add result.
- `t3-02`: Button selected; Class Name and Add visible; Categories listed. **Proves** the add controls and the category list. Does not prove any class.
- `t3-03`: Class Name shows `FX_BlueButton` before Add. **Proves** the typed value. Does not prove it was added.
- `t3-04`: right after Add, editor refreshed; Class Name/Add gone; no child under Button visible. **Proves** the immediate post-Add state did not show the class. Does not prove the add failed; the class appeared on re-select (see `t3-05`).
- `t3-05`: Button re-selected; Class Name/Add back; FX_BlueButton indented under Button; Global Objects behind. **Proves** Button > FX_BlueButton in the rendered tree (one row). Does not prove persistence (not saved); does not prove the class's properties.

### 14.7 Action audit (T3, exact)

| Action | T3 (incremental) | Cumulative T1–T3 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 4 |
| Browser tab selects | 1 (tab 0, Designer) | 4 |
| Snapshots (explicit `browser_snapshot`) | 1 (start) | 5 |
| Finds | 0 | 3 |
| Successful element clicks | 3 (Button select; Add; Button re-select) | 19 |
| Failed element clicks | 0 | 1 |
| Typing | 1 (Class Name) | 2 |
| Hovers | 0 | 1 |
| Key presses | 0 | 1 |
| Screenshots (worker-requested) | 5 (`t3-01` to `t3-05`) | 20 |
| **Theme creates** | 0 | 1 |
| **Theme class adds (Add clicks)** | **1** | **1** |
| **Colour changes** | **0** | **0** |
| **Theme Saves** | **0** | **0** |
| Theme editor close / reopen | 0 / 0 | 0 / 0 |
| Other theme edits (rename, delete, copy, other class, other state) | 0 | 0 |
| **User Preference changes** | **0** | **0** |
| **Designer Form changes / Form Saves / component changes** | **0 / 0 / 0** | **0** |
| Theme-class assignments to components | 0 | 0 |
| Top-toolbar Delete Form Definition clicks | 0 | 0 |
| Theme trash-icon clicks | 0 | 0 |
| Checkout actions, navigate, refresh, restart, reauth | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 |

Note on the cumulative column: "Theme creates" 1 and "Editor opens" 1 are carried from T2 (§13.8).

### 14.8 Worker-written file inventory (T3)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and this §14)
- `evidence/EXP-064/t3-01-before-add-edit-styles-button-node-no-child.png`
- `evidence/EXP-064/t3-02-button-selected-class-name-and-add-controls-visible.png`
- `evidence/EXP-064/t3-03-class-name-typed-fx_bluebutton-before-add.png`
- `evidence/EXP-064/t3-04-after-add-button-fx_bluebutton-tree-result.png`
- `evidence/EXP-064/t3-05-reselect-button-after-add-inspection-tree-and-class-controls.png`

Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 14.9 Knowledge state (T3)

- Button in Edit Styles Elements tree exposes Class Name and Add controls only after selection: observed.
- Add with Class Name `FX_BlueButton` produces `Button > FX_BlueButton` in the rendered tree: observed (one run).
- Immediately after Add the new child did not render; it appeared after re-selecting Button: observed; cause unresolved.
- Nothing is replay_verified.

### 14.10 Open questions and next step (T4, not started)

- **Q6.** Whether the delayed render of FX_BlueButton is normal behaviour or a refresh issue. Not resolved; a later task can compare after the Normal-state edit.
- **Next permitted step (T4, needs authorisation):** select the `FX_BlueButton` treeitem under Button, then the **Normal State** category; set Background Color to `#FF5CC6C7` exactly as typed and record the readback; open the Foreground Color picker and record its readback after Solid/White. Before that, list tabs, select the Designer tab, take a fresh snapshot, and confirm the FX_BlueButton row still exists once.

### 14.11 Blockers

None. The uncertain Add result was resolved by one corrected inspection (re-select, no second Add).

## 15. T4 — Normal-state Background Color set once (cycle 3, task T4; AC-4 Background part met as observed; Foreground not set)

### 15.1 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Designer (…/designer/default.aspx)` and `1 Mongoose` (Web Client). Same order as T2 and T3.
- Tab 0 (Designer) selected once (succeeded). Fresh untargeted snapshot.
- Verified before acting: **Edit Styles** open with root `FX_HelloWorld`; **Global Objects** open behind it with `FX_HelloWorld` in its list; Designer Form `FX_Items` **clean** (Form Save and Undo disabled; no modified marker); **exactly one** `FX_BlueButton` treeitem under Button (one row, one indentation level under Button). Scope footer `User / anton.ramos@3mworks.com.ph`. No sign-in screen or challenge.
- Web Client tab (tab 1) not selected or acted on.

### 15.2 Route to Normal State

- Clicked the `FX_BlueButton` treeitem (selection only). Categories list then showed Font selected by default.
- Clicked **Normal State** in the Categories list (selection only). The Attributes pane showed: Opacity; **Foreground**; **Background** (textbox + `...` picker); Border Color; Border Thickness; Default Foreground; Default Background; Default Border; Default Border Thickness. Both Background and Foreground were empty before the change.
- Pre-change screenshot: `t4-02-normal-state-selected-pre-background-change.png`. The FX_BlueButton row is highlighted; Normal State is selected; Background empty. A red **Delete** button sits under the Elements tree; it was **not** clicked.

### 15.3 Background Color entry (once)

- Typed `#FF5CC6C7` once into the Background textbox (one type action). Literal typed exactly, eight hexadecimal digits in the tutorial order; not converted or reinterpreted.
- Pre-commit screenshot `t4-03-background-value-entered-before-commit-check.png`: the field shows `#FF5CC6C7`, focused.
- Commit: **one Tab key press** moved focus out of the field (chosen instead of Enter, because Enter could trigger the dialog's default OK). No other control was clicked. No theme Save.
- **Readback after commit (verbatim, from the snapshot after Tab):** Background textbox value `"#FF5CC6C7"`. Post-commit screenshot `t4-04-background-committed-after-tab-readback.png` shows the same text in the Background field. The Normal State list option remains selected, and the FX_BlueButton row remains highlighted.
- No normalisation or discrepancy was observed in the displayed value. The field shows the literal exactly as typed. Focus moved to the Background `...` picker button after the Tab (the picker was **not** opened or activated).
- Limitation: the readback proves the editor's displayed value only. Whether the value is stored in the theme model is not proven until the single theme Save and the close/reopen (T5–T6).

### 15.4 Foreground Color

- **Not changed in T4.** The Foreground textbox remains empty. It is the next task.

### 15.5 Final state

- Edit Styles (root FX_HelloWorld) and Global Objects both open, as instructed. Nothing saved; theme editor not closed.
- FX_BlueButton > Normal State selected; Background `#FF5CC6C7`; Foreground empty; no other state or element touched.
- Designer FX_Items: clean, Save disabled, untouched.
- Focus sits on the Background `...` picker button. No picker dialog open. No browser-native dialog. No unsaved-change prompt from Mongoose at the Designer level.

### 15.6 Screenshot review (T4)

- `t4-01-start-edit-styles-fx_bluebutton-single-child-under-button.png`: Edit Styles root FX_HelloWorld; FX_BlueButton indented under Button (one row); Class Name/Add present; FX_Items clean behind. **Proves** the starting tree (one child). Does not prove the Normal state or any colour.
- `t4-02-normal-state-selected-pre-background-change.png`: FX_BlueButton highlighted; Normal State selected; Background empty. **Proves** the target state before the colour change. Does not prove any value.
- `t4-03-background-value-entered-before-commit-check.png`: Background shows `#FF5CC6C7` focused. **Proves** the typed literal in the field before commit. Does not prove the commit.
- `t4-04-background-committed-after-tab-readback.png`: Background shows `#FF5CC6C7` after Tab; Normal State and FX_BlueButton still selected; Foreground empty. **Proves** the displayed readback after commit. Does not prove the stored model value (not saved).

### 15.7 Action audit (T4, exact)

| Action | T4 (incremental) | Cumulative T1–T4 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 5 |
| Browser tab selects | 1 (tab 0, Designer) | 5 |
| Snapshots (explicit `browser_snapshot`) | 2 (start; after Tab) | 7 |
| Finds | 0 | 3 |
| Successful element clicks | 2 (FX_BlueButton treeitem; Normal State option) | 21 |
| Failed element clicks | 0 | 1 |
| Typing | 1 (Background textbox) | 3 |
| Key presses | 1 (Tab, commit focus-out) | 2 |
| Hovers | 0 | 1 |
| Screenshots (worker-requested) | 4 (`t4-01` to `t4-04`) | 24 |
| **Theme creates** | 0 | 1 |
| **Theme class adds (Add clicks)** | **0** | **1** |
| **Colour changes (committed value entries)** | **1 (Background)** | **1** |
| **Foreground Color changes** | **0** | **0** |
| **Theme Saves** | **0** | **0** |
| Theme editor close / reopen | 0 / 0 | 0 / 0 |
| Other theme edits (rename, delete, other class or state) | 0 | 0 |
| **User Preference changes** | **0** | **0** |
| **Designer Form changes / Form Saves / component changes** | **0 / 0 / 0** | **0** |
| Theme-class assignments to components | 0 | 0 |
| Top-toolbar Delete Form Definition clicks | 0 | 0 |
| Theme Delete (red button) or trash clicks | 0 | 0 |
| Checkout actions, navigate, refresh, restart, reauth | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 |

Note: the snapshots returned automatically after each click or key press are tool output and are not counted in the "explicit" row.

### 15.8 Worker-written file inventory (T4)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and this §15)
- `evidence/EXP-064/t4-01-start-edit-styles-fx_bluebutton-single-child-under-button.png`
- `evidence/EXP-064/t4-02-normal-state-selected-pre-background-change.png`
- `evidence/EXP-064/t4-03-background-value-entered-before-commit-check.png`
- `evidence/EXP-064/t4-04-background-committed-after-tab-readback.png`

Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 15.9 Knowledge state (T4)

- Selecting FX_BlueButton then Normal State exposes the Background textbox (with a `...` picker) and Foreground textbox: observed (one run).
- Typing `#FF5CC6C7` and leaving the field with Tab displays `#FF5CC6C7` verbatim in the editor: observed (one run).
- Stored value, persistence and the Foreground/Solid/White picker behaviour are **unresolved** until T5–T6 (Save and reopen).
- Nothing is replay_verified.

### 15.10 Open questions and next step (T5, not started)

- **Q7.** Whether the Tab commit fully committed the Background value to the theme model. Only the Save and close/reopen (T5–T6) can answer this. The instruction did not require a different commit control.
- **Next permitted step (T5, needs authorisation):** set **Foreground Color** through its `...` picker in the Normal State: choose **Solid** with the default **White**, confirm, and record the Foreground readback. Before that, list tabs, select the Designer tab, take a fresh snapshot, and confirm the FX_BlueButton row still appears once and the Background readback is still `#FF5CC6C7`.

### 15.11 Blockers

None.

## 16. T5 — Normal-state Foreground Color set through its picker to Solid / White (cycle 4, task T5; AC-4 Foreground part met as observed)

### 16.1 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Designer` and `1 Mongoose` (Web Client). Same order as T2–T4.
- Tab 0 (Designer) selected once (succeeded). Fresh untargeted snapshot.
- Verified before acting: **Edit Styles** open, root `FX_HelloWorld`; **Global Objects** open behind it with `FX_HelloWorld` listed; exactly **one** `FX_BlueButton` treeitem under Button; FX_BlueButton > **Normal State** selected; **Background `#FF5CC6C7`** (read from the snapshot); **Foreground empty**; Designer FX_Items **clean** (Save and Undo disabled). Scope footer `User / anton.ramos@3mworks.com.ph`. No sign-in screen or challenge.
- Web Client tab (tab 1) not selected or acted on.

### 16.2 Pre-change check

- Screenshot `t5-01-pre-foreground-both-color-fields-before-picker.png`: Foreground empty with its **own** `...` picker button (at the Foreground row, x ≈ 1389, y ≈ 340); Background `#FF5CC6C7` with its `...` button, which retained focus from the T4 Tab. The Foreground picker was used, not the Background one.

### 16.3 Picker opened (one click on the Foreground row's `...`)

- Clicked the Foreground row's `...` once. A **Color** picker panel opened inside Edit Styles with radio options **None**, **Solid**, **Base Color**, and **OK** / **Cancel** buttons.
- Initial state (screenshot `t5-02-foreground-picker-opened-initial-state.png`): **None** selected; Solid and Base Color unselected; no preview or colour fields visible yet.

### 16.4 Environment timeout on the Solid radio (no effect), and the corrected attempt

- **Action:** one click on the **Solid** radio input (ref `e1040`). **Result: TimeoutError** after 5000 ms: "waiting for locator … element is visible, enabled and stable … **element is outside of the viewport**" (retried for the full timeout). The radio was not clicked. Suspected environment/rendering issue: the screenshot shows the Solid radio inside the dialog at about (847, 302), so the viewport report disagrees with the screenshot. Recorded as a suspected environment blocker; no repeat of the same radio click.
- **One fresh untargeted snapshot** (recovery allowance): same picker refs (`e1040` Solid, `e1049` OK), same state.
- **One corrected visible inspection:** screenshot `t5-03-picker-visible-inspection-after-solid-click-timeout.png` shows the picker still open with **None** selected and Solid unselected. A `find "Solid"` returned the same refs.
- **One corrected attempt:** clicked the visible **Solid label text** (`e1042`), not the radio input. Result: success, no error. Accessibility tree now shows `radio "Solid" [checked] [active] [ref=e1040]` and None no longer selected. Screenshot `t5-04-after-solid-label-click-picker-selection-before-confirm.png`.
- The timeout produced no change (the radio was not clicked and nothing else was modified). The label click is the only selection action in T5.

### 16.5 Solid / default White, before confirmation (observed, not edited)

- Solid selected. The picker preview and colour fields show the **default White exactly as offered**: **R 255, G 255, B 255, A 100**, hex field **`#FFFFFFFF`**, preview square white (`t5-04`).
- No manual hex or channel value was typed. The default White was not reinterpreted.
- Native representation noted: the hex field shows **eight digits (`FFFFFFFF`)**, consistent with alpha FF first (ARGB order); the A field shows `100` (percent). This is the picker's own representation, observed only.

### 16.6 Confirm (once)

- Clicked the picker's **OK** once (`e1049`). The picker closed. No error observed. No retry.
- Screenshot `t5-05-after-picker-ok-foreground-readback.png`. **Foreground readback (verbatim, from the snapshot):** textbox `"#FFFFFFFF"`. **Background readback (verbatim):** `"#FF5CC6C7"` (unchanged).
- The Designer FX_Items Save and Undo stayed disabled. The Global Objects and Edit Styles dialogs both remain open.

### 16.7 Final state

- Edit Styles (root FX_HelloWorld) and Global Objects both open, as instructed. **No theme Save. No close. No reopen.**
- FX_BlueButton > Normal State: Background `#FF5CC6C7`; Foreground `#FFFFFFFF` (Solid, default White). No other state, class or property changed.
- Focus is in the Edit Styles editor (no picker open).
- Designer FX_Items: clean, Save disabled, untouched.
- No browser-native dialog or unsaved-change prompt from Mongoose at the Designer level.

### 16.8 Screenshot review (T5)

- `t5-01-pre-foreground-both-color-fields-before-picker.png`: Foreground empty; Background `#FF5CC6C7`; FX_BlueButton > Normal State. **Proves** the pre-change values of both colour fields. Does not prove the Foreground value after the change.
- `t5-02-foreground-picker-opened-initial-state.png`: picker open; None selected; Solid unselected; OK/Cancel. **Proves** the initial picker state. Does not prove Solid was chosen.
- `t5-03-picker-visible-inspection-after-solid-click-timeout.png`: picker still open with None selected after the radio timeout. **Proves** no change occurred from the timed-out click. Does not prove the label click (see `t5-04`).
- `t5-04-after-solid-label-click-picker-selection-before-confirm.png`: Solid selected; preview white; R 255 G 255 B 255 A 100; hex `#FFFFFFFF`; OK/Cancel. **Proves** the Solid/White state offered before confirmation. Does not prove the confirmed value (see `t5-05`).
- `t5-05-after-picker-ok-foreground-readback.png`: picker closed; Foreground `#FFFFFFFF`; Background `#FF5CC6C7`; Save disabled. **Proves** the displayed Foreground and Background readbacks after OK. Does not prove the stored model value (not saved).

### 16.9 Action audit (T5, exact)

| Action | T5 (incremental) | Cumulative T1–T5 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 6 |
| Browser tab selects | 1 (tab 0, Designer) | 6 |
| Snapshots (explicit `browser_snapshot`) | 2 (start; fresh after timeout) | 9 |
| Finds | 1 (`Solid`, visible inspection) | 4 |
| Successful element clicks | 3 (Foreground `...`; Solid label; picker OK) | 24 |
| Failed element clicks | 1 (Solid radio timeout, no effect) | 2 |
| Typing | 0 | 3 |
| Key presses | 0 | 2 |
| Hovers | 0 | 1 |
| Screenshots (worker-requested) | 5 (`t5-01` to `t5-05`) | 29 |
| Colour-picker opens | 1 | 1 |
| **Theme creates** | 0 | 1 |
| **Theme class adds (Add clicks)** | 0 | 1 |
| **Colour changes (committed)** | **1 (Foreground Solid/White)** | **2 (Background 1; Foreground 1)** |
| **Background changes** | 0 | 1 |
| **Foreground changes** | **1** | **1** |
| **Theme Saves** | **0** | **0** |
| Theme editor close / reopen | 0 / 0 | 0 / 0 |
| Other theme edits (rename, delete, other class or state) | 0 | 0 |
| **User Preference changes** | **0** | **0** |
| **Designer Form changes / Form Saves / component changes** | **0 / 0 / 0** | **0** |
| Theme-class assignments to components | 0 | 0 |
| Top-toolbar Delete Form Definition clicks | 0 | 0 |
| Theme Delete (red button) or trash clicks | 0 | 0 |
| Checkout actions, navigate, refresh, restart, reauth | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 |

Note: the "Colour changes" row is cumulative 2 (Background in T4 and Foreground in T5), as the acceptance matrix requires. The T5 failed radio click had no effect and is not counted as a colour change.

### 16.10 Worker-written file inventory (T5)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and this §16)
- `evidence/EXP-064/t5-01-pre-foreground-both-color-fields-before-picker.png`
- `evidence/EXP-064/t5-02-foreground-picker-opened-initial-state.png`
- `evidence/EXP-064/t5-03-picker-visible-inspection-after-solid-click-timeout.png`
- `evidence/EXP-064/t5-04-after-solid-label-click-picker-selection-before-confirm.png`
- `evidence/EXP-064/t5-05-after-picker-ok-foreground-readback.png`

Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 16.11 Knowledge state (T5)

- The Foreground row has its own picker button, separate from Background's: observed (one run).
- The picker opens with None selected, and offers None / Solid / Base Color radios with OK / Cancel: observed.
- A click on the Solid radio input timed out with "element is outside of the viewport" although the screenshot shows it visible; the click on its label succeeded: observed (one run); cause unresolved; suspected environment/rendering issue.
- Choosing Solid without typing a value shows the default White as R 255 G 255 B 255 A 100 and hex `#FFFFFFFF`, and OK commits it as Foreground `#FFFFFFFF`: observed (one run).
- The stored model value, persistence, and the reopen readback are unresolved until T6 (Save and reopen).
- Nothing is replay_verified.

### 16.12 Open questions and next step (T6, not started)

- **Q8.** The Solid radio timeout ("outside of the viewport") versus the visible screenshot. Not resolved. The label click worked.
- **Q9.** Whether the Foreground and Background values persist through the single theme Save and the close/reopen. This is the test for T6.
- **Next permitted step (T6, needs authorisation):** list tabs, select the Designer tab, take a fresh snapshot, confirm the Background and Foreground readbacks are still `#FF5CC6C7` and `#FFFFFFFF` and that FX_BlueButton appears once. Then the single theme Save (native control), and the close/reopen steps as the brief specifies.

### 16.13 Blockers

- **Suspected environment blocker (resolved for T5):** the Solid radio click timed out with "element is outside of the viewport" (see §16.4). One fresh snapshot and one corrected visible inspection were used; one corrected label click then succeeded. No repeat of the timed-out click.

## 18. T7 — operator-authorized theme-save sequence (cycle 8, task T7)

### 18.1 Operator authorization note (recorded before any browser mutation)

- The cycle-8 instruction (task message `71ddd16c-5b6a-48ec-a576-c0f25191f595`, the T7 bounded instruction) authorizes **one narrow exception**: the sequence **OK (Edit Styles) once → OK (Global Objects) once → Designer toolbar Save once, only if enabled**, to commit the FX_HelloWorld theme.
- This exception is **not** a general permission. It does not authorize a Form save for any other purpose, a second Save, any retry of an uncertain Save, or any reopen or close/reopen verification. Those remain reserved for the next controlled task.
- Reason for the exception (as stated by the operator): T6 found no theme-specific Save control; the operator decided the theme commit route. My T6 record (§17) had identified this gap and asked for the decision; this note records that decision as received. The operator decision is the authority for T7. I did not independently verify the operator's reasoning.
- The exception covers only the FX_HelloWorld theme. FX_Items must remain the only open Designer Form, unchanged and with no Form edits. Any Save click must be a single click, and its result is recorded verbatim.

### 18.2 Earlier deviation disclosed for this record

- **T1 Designer launch (disclosed deviation, no Form change).** The Web Designer was launched from the Web Client via **Form > Definition > Designer**, which opened a new browser tab. The brief did not name this route; the T1 record disclosed it (§3.3, Q3). The launch confirmed the scope dialog (pre-filled, User) once and changed no Form or data. No Form was saved.

### 18.3 Prerequisite check (read-only, before mutation)

- Tab list (before any select): **2 tabs**: `0 (current) Designer` and `1 Mongoose` (Web Client). Tab 0 selected once (succeeded). Fresh untargeted snapshot taken.
- **Only open Designer Form: FX_Items** (single Form tab heading `FX_Items`). Form tab properties: Name FX_Items; Device Type Default; Form Type Normal; Is Master True. Scope `User / anton.ramos@3mworks.com.ph`.
- **FX_Items dirty state: clean.** Designer toolbar **Save disabled**; Regenerate Form disabled; Undo and Redo disabled.
- **Edit Styles open**, tree root `FX_HelloWorld`.
- **Exactly one FX_BlueButton** under Form > FormComponent > Button (single treeitem `e787`).
- **Normal State**: Foreground `#FFFFFFFF`; Background `#FF5CC6C7`. Read verbatim from the snapshot.
- **Global Objects** open behind Edit Styles, listing `FX_HelloWorld` among the 11 themes.
- No sign-in screen, no challenge, no dialog other than the two theme dialogs.
- All prerequisites matched. The sequence was authorized to proceed.

### 18.4 Pre-commit screenshot

- `t7-01-pre-commit-prerequisites-both-dialogs-open-fx-items-clean.png` (viewed). Shows Edit Styles over Global Objects; Edit Styles root FX_HelloWorld; FX_BlueButton highlighted under Button; Normal State Foreground `#FFFFFFFF`, Background `#FF5CC6C7`; Designer toolbar Save greyed; FX_Items the only Form tab; Undo disabled. **Proves** the prerequisites before the sequence. Does not prove any stored value.

### 18.5 Step 1 — Edit Styles OK, once

- Action: one click on the OK button in the Edit Styles dialog (snapshot ref `e1022`, the dialog's own OK).
- Result: **Edit Styles closed**. Global Objects remained open with `FX_HelloWorld` selected in the Themes list. No error, no prompt, no native dialog.
- Designer toolbar after step 1: Save **appeared enabled** (`t7-03`/snapshot shows `button "Save"` without `[disabled]`), Regenerate Form enabled, Undo still disabled.
- Screenshot: `t7-02-after-edit-styles-ok-once-dialog-state.png` (viewed). Shows Global Objects with `FX_HelloWorld` highlighted and Properties Options (Explorer Style Classic, etc.), no Edit Styles. **Proves** the editor closed and the theme remained selected. Does not prove the saved state.

### 18.6 Step 2 — Global Objects OK, once

- Action: one click on the OK button in the Global Objects dialog (snapshot ref `e723`).
- Result: **Global Objects closed**. No theme dialog remained open. No error or native prompt.
- Screenshot: `t7-03-after-global-objects-ok-once-dialog-state.png` (viewed). Shows the Designer FX_Items Form with no dialog; toolbar Save and Regenerate Form enabled; Undo and Redo disabled (no Form undo history); scope User; FX_Items the only Form tab. **Proves** both theme dialogs closed and that the Designer Save became enabled. Does not prove which objects are dirty.

### 18.7 Step 3 — Designer toolbar Save, once (authorized theme-save exception)

- Reconfirmation before the click: FX_Items the only open Form (single Form tab); no Form edit made by the worker in T7; Undo disabled (no Form undo history); Save enabled from the OK steps. The operator's exception covers this one Save.
- Action: **one click** on the Designer toolbar `Save` (snapshot ref `e1029`). Not repeated.
- **Native response (verbatim):** toast titled **"Save"** with the text **"Global object(s) were saved."**, with a close (×) control. The toast is a notification, not a dialog. It was not dismissed by the worker.
- Post-save state: toolbar **Save disabled**, **Regenerate Form disabled**, Undo and Redo disabled; no dialog open. A hover tooltip "Save" appeared over the Toolbox header from the pointer position.
- Screenshot: `t7-04-after-designer-save-once-response-state.png` (viewed). Shows the toast "Global object(s) were saved." at the top right, FX_Items clean, Save greyed. **Proves** the native save acknowledgement and the clean toolbar state. Does not prove the persisted content, and does not prove that the Form FX_Items itself was not written (see §18.8).

### 18.8 Interpretation and limits (observed only)

- The native message names **global objects** (theme objects), not a Form. The Designer toolbar Save is the Form-level control in the UI, but the message reports the global-object save. I observed the message; I did not verify which records were written beyond it.
- The Designer toolbar showed Save enabled only after the two theme OK steps, and disabled after the one Save. The FX_Items Form received no edit in T7 (no Form edit was made, and Undo was disabled).
- The immediate save acknowledgement is **not** persistence. Persistence (close/reopen, reopen and readback of Button > FX_BlueButton with Normal Background and Foreground) is **unverified** and reserved for the next controlled task.
- The FX_Items Designer Form remains open and clean. No Form was saved or closed by the worker.

### 18.9 Action audit (T7, exact)

| Action | T7 (incremental) | Cumulative T1–T7 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 8 |
| Browser tab selects | 1 (tab 0, Designer) | 8 |
| Snapshots (explicit `browser_snapshot`) | 1 (start) | 11 |
| Finds | 0 | 5 |
| Successful element clicks | 3 (Edit Styles OK ×1; Global Objects OK ×1; Designer toolbar Save ×1) | 27 |
| Failed element interactions | 0 | 3 |
| Typing | 0 | 3 |
| Key presses | 0 | 2 |
| Hovers | 0 | 1 |
| Screenshots (worker-requested) | 4 (`t7-01` to `t7-04`) | 35 |
| **Theme Save invocations (native "Global object(s) were saved.")** | **1** | **1** |
| **Theme editor close (Edit Styles OK)** | **1** | **1** |
| **Theme dialog close (Global Objects OK)** | **1** | **2 (T1 Cancel + T7 OK)** |
| Theme editor reopen | 0 | 0 |
| **Theme creates** | 0 | 1 |
| **Class adds** | 0 | 1 |
| **Colour changes** | 0 | 2 (Background 1, Foreground 1) |
| Other theme edits | 0 | 0 |
| **User Preference changes** | **0** | **0** |
| **Designer Form edits / component changes** | **0 / 0** | **0** |
| Designer toolbar Save invocations (theme-save exception) | 1 | 1 |
| Designer top-toolbar Delete Form Definition clicks | 0 | 0 |
| Theme Delete (red button) or trash clicks | 0 | 0 |
| Checkout actions, navigate, refresh, restart, reauth | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 |

Note: the cumulative "Theme dialog close" count is 2: T1 (Global Objects Cancel) and T7 (Global Objects OK). The Edit Styles editor was closed once in T7 (OK).

### 18.10 Worker-written file inventory (T7)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and §18)
- `evidence/EXP-064/t7-01-pre-commit-prerequisites-both-dialogs-open-fx-items-clean.png`
- `evidence/EXP-064/t7-02-after-edit-styles-ok-once-dialog-state.png`
- `evidence/EXP-064/t7-03-after-global-objects-ok-once-dialog-state.png`
- `evidence/EXP-064/t7-04-after-designer-save-once-response-state.png`

Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 18.11 Final browser state (T7)

- Tab 0 (Designer) selected; FX_Items the only Form tab; Designer toolbar Save disabled, Regenerate Form disabled, Undo and Redo disabled.
- **No theme dialog open** (Edit Styles and Global Objects both closed).
- A native save toast ("Global object(s) were saved.") is visible at the top right; it is an in-page notification with its own close control. Not dismissed by the worker.
- No browser-native dialog or prompt. The Web Client tab was not touched.
- FX_HelloWorld exists in the theme list (per the last Global Objects view before closing); no reopen was performed.

### 18.12 Knowledge state (T7)

- Edit Styles OK closes the theme editor without a separate save prompt: observed (one run).
- Global Objects OK closes the dialog and enables the Designer toolbar Save: observed (one run).
- Designer toolbar Save produced the native message "Global object(s) were saved." and disabled itself: observed (one run).
- Persistence of the class and both colours beyond this acknowledgement: **unresolved**, pending the reopen (next task).
- Nothing is replay_verified.

### 18.13 Blockers and next step

- **Blockers:** none.
- **Next permitted step (not in T7; needs a separate instruction):** reopen FX_HelloWorld for editing once (Global Objects > Edit...), verify Button > FX_BlueButton with Normal Background `#FF5CC6C7` and Foreground `#FFFFFFFF`, then close the theme dialogs with no dialog open. Verify the theme list is the original 10 plus FX_HelloWorld.
- **Operator authorization note (repeated):** the T7 exception covered only the three steps above (one OK per dialog, one Designer toolbar Save). Any further Save or reopen requires a new instruction.

## 17. T6 — theme Save NOT invoked: no unambiguous native theme Save control (cycle 5, task T6; stopped before Save)

### 17.1 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Designer` and `1 Mongoose` (Web Client). Same order as T2–T5.
- Tab 0 (Designer) selected once (succeeded). Fresh untargeted snapshot.
- Verified: **Edit Styles** open, root `FX_HelloWorld`; exactly **one** `FX_BlueButton` treeitem under Button; FX_BlueButton > **Normal State** selected; **Background `#FF5CC6C7`**; **Foreground `#FFFFFFFF`**; **Global Objects** open behind, listing `FX_HelloWorld`; Designer FX_Items **clean** (Form Save disabled, Regenerate disabled, Undo and Redo disabled). Scope `User / anton.ramos@3mworks.com.ph`. No sign-in screen or challenge.
- Web Client tab not selected or acted on.

### 17.2 Pre-Save evidence

- `t6-01-pre-save-both-colors-edit-styles-state.png` (viewed): Edit Styles over Global Objects; Normal State; Foreground `#FFFFFFFF`; Background `#FF5CC6C7`; FX_BlueButton highlighted under Button; Designer Save greyed. **Proves** the pre-Save colour values and editor state. Does not prove any stored value.

### 17.3 Save-control identification (read-only inspection)

Controls visible in the theme editors (from the accessibility tree and `t6-01`):

- **Edit Styles** (theme editor): Close Window (×); Elements tree (FX_HelloWorld > UIElement > Application Frame; Form > FormComponent > Button > FX_BlueButton, Calendar, …); Categories (Font, Normal State, Active State, Disabled/Read-Only, Hover, Pressed); Attributes (Opacity, Foreground + `...`, Background + `...`, Border Color, Border Thickness, Default Foreground/Background/Border, Default Border Thickness); **Delete** (red, under the tree, not clicked); **OK**, **Cancel**, **Help** (bottom). **No control named Save.**
- **Global Objects** (theme list dialog): Themes pane search; three unlabelled icon buttons (`+` = New, confirmed by tooltip in T2; copy-like and trash icons, not identified); Properties pane (Expand, Collapse, Edit..., Undo, Redo); **OK**, **Cancel**, **Help** (bottom). **No control named Save.**
- **Designer top toolbar**: **Save** (Form-level, disabled). This is the Form Save for FX_Items. It is **not** a theme save and was **not** clicked.
- A read-only `find "Save"` on the current tree returned only the Designer top-toolbar Save (disabled).

Conclusion: the rendered UI offers **no theme-specific Save**. The only commit buttons in the theme dialogs are OK and Cancel. OK would confirm and close the dialog (a close, not a Save), and Cancel would discard the edits. The brief forbids both at this stage. The Designer Save would be a Form-level save, which the brief forbids. Under the brief's rule, I stopped without invoking any Save.

### 17.4 Blocked attempt (one hover, no effect)

- Tried to hover the copy-like icon in the Global Objects Themes toolbar to read its tooltip (read-only). **Result: TimeoutError** after 5000 ms: the Edit Styles dialog `div` "intercepts pointer events", so the Global Objects toolbar icon was not reachable. Not repeated. The icon's identity remains unknown; it is not a Save control by its placement, but this is not confirmed.
- One read-only `find "Save"` (the corrected inspection). Result: only the Designer top-toolbar Save.

### 17.5 Post-check (no change)

- `t6-02-no-save-invoked-state-unchanged-both-dialogs-open.png` (viewed): same state as `t6-01`; Foreground `#FFFFFFFF`; Background `#FF5CC6C7`; Edit Styles and Global Objects both open; Designer Save greyed. **Proves** nothing changed during T6. Does not prove the stored value (nothing was saved).

### 17.6 Native response and persistence

- **Native theme Save response: none. No Save was invoked.** No confirmation, message, validation error, dialog transition or unsaved-change indicator was produced by T6.
- Persistence: **unverified**. The colours and the class exist only in the open editor. No close, reopen or Save occurred.

### 17.7 Action audit (T6, exact)

| Action | T6 (incremental) | Cumulative T1–T6 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 7 |
| Browser tab selects | 1 (tab 0, Designer) | 7 |
| Snapshots (explicit `browser_snapshot`) | 1 | 10 |
| Finds | 1 (`Save`, read-only) | 5 |
| Successful element clicks | 0 | 24 |
| Failed element interactions | 1 (hover timeout, no effect) | 3 (2 clicks + 1 hover) |
| Hovers (successful) | 0 | 1 |
| Typing | 0 | 3 |
| Key presses | 0 | 2 |
| Screenshots (worker-requested) | 2 (`t6-01`, `t6-02`) | 31 |
| **Theme Save invocations** | **0** | **0** |
| **Theme creates** | 0 | 1 |
| **Class adds** | 0 | 1 |
| **Colour changes** | 0 | 2 (Background 1, Foreground 1) |
| Theme editor close / reopen | 0 / 0 | 0 / 0 |
| Dialog OK or Cancel clicks (theme dialogs) | 0 | 1 (Global Objects Cancel, T1) |
| Other theme edits (rename, delete, other class or state) | 0 | 0 |
| **User Preference changes** | **0** | **0** |
| **Designer Form changes / Form Saves / component changes** | **0 / 0 / 0** | **0** |
| Designer top-toolbar Save or Delete Form Definition clicks | 0 | 0 |
| Theme Delete (red button) or trash clicks | 0 | 0 |
| Checkout actions, navigate, refresh, restart, reauth | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |
| Unload, cache, FormSync, deployment | 0 | 0 |

### 17.8 Worker-written file inventory (T6)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and this §17)
- `evidence/EXP-064/t6-01-pre-save-both-colors-edit-styles-state.png`
- `evidence/EXP-064/t6-02-no-save-invoked-state-unchanged-both-dialogs-open.png`

Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 17.9 Knowledge state (T6)

- Theme editors expose OK, Cancel, Help and Delete, with no theme-specific Save: observed (one inspection).
- Designer top-toolbar Save is the Form-level Save (disabled while FX_Items is clean): observed.
- Hovering the Global Objects toolbar is blocked while Edit Styles is open (pointer intercept): observed, one run.
- Whether a theme Save exists in another location, or whether Global Objects OK is the intended commit: **unresolved**.
- Nothing is replay_verified. No Save acknowledgement and no persistence has been observed.

### 17.10 Blockers and open questions

- **Blocker (T6).** No unambiguous native theme Save control is visible in the theme editor or the Global Objects dialog. The only controls are OK/Cancel (which would close the dialogs) and the Designer Form Save (forbidden for theme purposes). The brief requires stopping in this case, so no Save was invoked.
- **Q10.** The coordinator should identify the intended native theme Save control, or confirm that the theme is committed by Global Objects OK (which closes the dialog) or by a different route. Either decision needs an operator instruction, because OK closes the dialog and discards nothing only if the change is committed.
- **Q11.** The identity of the copy-like and trash icons in the Themes pane toolbar remains unknown (not hovered because of the intercept). The trash icon must not be clicked.
- **Next step (needs authorisation):** one native Save per the coordinator's chosen control, then the close/reopen steps as the brief specifies. Before that, list tabs, select the Designer tab, take a fresh snapshot, and confirm Background `#FF5CC6C7`, Foreground `#FFFFFFFF`, and a single FX_BlueButton row.

## 19. T8 — same-session close/reopen recovery inspection (cycle 9, task T8; AC-6 and AC-7 met as observed)

### 19.1 Authorization and preserved context

- Task authorization: one read-only close/reopen inspection. Global Objects opened once; Edit... once; Cancel once on Edit Styles; Cancel once on Global Objects. No OK, no Save, no edits.
- **Preserved deviation (T1):** the Web Designer was launched from the Web Client via Form > Definition > Designer (§3.3, §18.2). It changed no Form and was not a route named in the brief.
- **Preserved operator exception (T7):** the one theme-commit sequence (Edit Styles OK ×1, Global Objects OK ×1, Designer toolbar Save ×1) was authorized for T7 only (§18.1). The T7 Save produced the native message "Global object(s) were saved." (§18.7). T8 did not invoke Save and did not rely on T7's acknowledgement as persistence.

### 19.2 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Designer` and `1 Mongoose` (Web Client). Tab 0 selected once (succeeded). Fresh untargeted snapshot.
- Verified: **FX_Items** is the only open Designer Form (single Form tab, Name FX_Items, User scope). Designer toolbar **Save disabled**, Regenerate Form disabled, **Undo and Redo disabled**. **No theme dialog open.** No sign-in or challenge.

### 19.3 Route to the theme (reopen)

1. Edit menu (one click on `Edit`; the menu opened).
2. **Edit > Theme** (one click). Opened **Global Objects** (Themes pane, Properties pane). This is the same route recorded in §3.5.
3. Selected the **FX_HelloWorld** row in the Themes list (one click; selection only).
4. **Edit...** (one click, Properties pane). Opened **Edit Styles** for `FX_HelloWorld`.

### 19.4 Theme list (AC-7 partial, read-only)

- Screenshot `t8-01-global-objects-reopened-theme-list-after-save.png` (viewed). Global Objects Themes list, **11 names** in order: ButtonTheme, Classic, Dark, **FX_HelloWorld**, Hi world, High Contrast, Infor, InforReport, Light, MyPortal, Projector.
- Compared with the original 10 (§3.6, §13.3): **the 10 originals are present once each; FX_HelloWorld is the only addition; no duplicates; no missing names.**
- Create-control and theme-list check: no new theme was created in T8.

### 19.5 Hierarchy and class check (AC-6)

- First render after Edit...: `Button` had **no child row** in the accessibility tree and in the first screenshot (`t8-02-edit-styles-reopened-tree-after-edit-click-button-child-check.png`, viewed). This matches the render-delay behaviour recorded in T3 (§14.4).
- **Corrected inspection (one):** one click on the `Button` treeitem (**selection only**, no Add, no edit). The tree then rendered **`Form > FormComponent > Button > FX_BlueButton`** with **one** FX_BlueButton row (`t8-03-button-reselected-fx_bluebutton-child-check.png`, viewed). A fresh snapshot shows one `treeitem "FX_BlueButton"`.
- Note: I treated the first missing child as a rendering delay, not a discrepancy, because the class's presence was confirmed by the corrected inspection and no mutation was made. The operator may want to confirm this interpretation (see §19.9).

### 19.6 Colour readbacks (AC-6)

- Selected FX_BlueButton (selection only), then **Normal State** (selection only).
- Readbacks, verbatim from the snapshot and the screenshot `t8-04-reopened-fx_bluebutton-normal-state-both-colors.png` (viewed):
  - **Foreground: `#FFFFFFFF`**
  - **Background: `#FF5CC6C7`**
- Both match the T4 and T5 recorded readbacks and the T7 pre-commit values exactly.
- **Observed label change:** in the reopened Normal State the labels read **"\* Foreground:"** and **"\* Background:"** (asterisk added). In T4–T6 the same labels read "Foreground:" and "Background:" without an asterisk. The meaning of the asterisk is **not established** by this run (it may indicate a stored or set value; not verified). Recorded as observed only.
- Other Normal State attributes were not touched. Opacity, Border, and Default fields were empty in the reopened view, as before.

### 19.7 Close (one native Cancel each), and final state

- **Edit Styles Cancel, once** (ref `e997`). Result: Edit Styles closed; Global Objects remained open; Designer toolbar Save still disabled. No prompt.
- **Global Objects Cancel, once** (ref `e669`). Result: Global Objects closed. No prompt.
- Final screenshot `t8-05-final-no-theme-dialog-open-designer-save-disabled.png` (viewed). **No theme dialog open**; FX_Items the only Form tab; toolbar Save and Regenerate Form disabled; Undo and Redo disabled; scope User.
- Final snapshot grep: `button "Save" [disabled]`, `button "Regenerate Form" [disabled]`, `button "Undo" [disabled]`, FX_Items heading only. No "saved" toast or message appeared in T8.

### 19.8 Action audit (T8, exact)

| Action | T8 (incremental) | Cumulative T1–T8 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 9 |
| Browser tab selects | 1 (tab 0, Designer) | 9 |
| Snapshots (explicit `browser_snapshot`) | 1 (start) | 12 |
| Finds (browser `find`) | 0 | 5 |
| Successful element clicks | 9 (Edit; Theme; FX_HelloWorld row; Edit...; Button select; FX_BlueButton select; Normal State select; Edit Styles Cancel; Global Objects Cancel) | 36 |
| Failed element interactions | 0 | 3 |
| Typing | 0 | 3 |
| Key presses | 0 | 2 |
| Hovers | 0 | 1 |
| Screenshots (worker-requested) | 5 (`t8-01` to `t8-05`) | 40 |
| **Global Objects opened** (Edit > Theme) | **1** | **3** (T1, T2, T8) |
| **Theme editor opened** (Edit...) | **1** | **2** (T2, T8) |
| **Theme editor closed** (Edit Styles) | **1** (Cancel) | **2** (T7 OK, T8 Cancel) |
| **Global Objects closed** | **1** (Cancel) | **3** (T1 Cancel, T7 OK, T8 Cancel) |
| **Theme close/reopen cycles (editor)** | **1 reopen** (T7 close → T8 reopen) | **1** |
| **Theme Save invocations** | **0** | **1** (T7) |
| **Theme creates** | 0 | **1** (T2) |
| **Class adds (Add clicks)** | 0 | **1** (T3) |
| **Colour changes (committed)** | 0 | **2** (Background T4; Foreground T5) |
| Other theme edits (rename, delete, other class or state) | 0 | 0 |
| OK clicks in theme dialogs | 0 | 1 (T7 Edit Styles) + 1 (T7 Global Objects) = 2 (T7 only) |
| **User Preference changes** | **0** | **0** |
| **Designer Form edits / Form Saves / component changes** | **0 / 0 / 0** | **0 / 0 / 0** (T7 toolbar Save was the single theme-commit Save under the operator exception, §18.7) |
| Designer top-toolbar Delete Form Definition clicks | 0 | 0 |
| Theme Delete (red button) or trash clicks | 0 | 0 |
| Navigate, refresh, restart, reauth, JS/evaluate, console or network inspection | 0 | 0 |
| Coordinate clicks, drag, drop, typing | 0 | 0 (typing only in T2 Name and T3/T4 colour fields) |
| Unload, cache, FormSync, deployment | 0 | 0 |

Note: the cumulative "close/reopen" count is one theme editor close/reopen cycle (T7 close via OK, T8 reopen via Edit...). The brief's AC-8 expected count "one close/reopen" is satisfied. Note also that T8 contains two Cancel-based closes, which are inspection-only closes (not Saves).

### 19.9 Worker-written file inventory (T8)

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (updated: status line and this §19)
- `evidence/EXP-064/t8-01-global-objects-reopened-theme-list-after-save.png`
- `evidence/EXP-064/t8-02-edit-styles-reopened-tree-after-edit-click-button-child-check.png`
- `evidence/EXP-064/t8-03-button-reselected-fx_bluebutton-child-check.png`
- `evidence/EXP-064/t8-04-reopened-fx_bluebutton-normal-state-both-colors.png`
- `evidence/EXP-064/t8-05-final-no-theme-dialog-open-designer-save-disabled.png`

Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 19.10 Decisive evidence per acceptance check (T8)

- **AC-6 (met as observed, same-session only):** the theme editor was closed once (T7 OK) and reopened once (T8 Edit...). Route: Edit > Theme → Global Objects → select FX_HelloWorld → Edit.... Button > FX_BlueButton exists (one row, `t8-03`). Normal Background `#FF5CC6C7` and Foreground `#FFFFFFFF` match the recorded values (`t8-04`).
- **AC-7 (met as observed for T8):** the theme list is the original 10 plus FX_HelloWorld (`t8-01`). No dialog is open at the end (`t8-05`). No User Preference, Designer Form, or component change in T8. Designer toolbar Save and Undo are disabled. FX_Items is clean.
- **AC-5 (carried from T7):** one theme Save, native response "Global object(s) were saved." (§18.7). The post-save state was not persistence-verified in T7; T8 provides the same-session reopen readback.
- Limitation: the reopen is in the same browser session. It does not establish cross-session, database-level, or runtime durability.

### 19.11 Interpretation and limits (observed only)

- The persisted-looking readbacks (`#FFFFFFFF`, `#FF5CC6C7`, one FX_BlueButton) are read from the editor after a same-session close/reopen. They are not independent database confirmation.
- The first post-reopen render omitted the FX_BlueButton child until Button was selected, as in T3. Cause unresolved; the corrected inspection showed the child.
- The asterisk added to the "Foreground" and "Background" labels in the reopened view is new and its meaning is not established.
- No native Save message appeared in T8, and none was expected (no Save was invoked).

### 19.12 Final browser state (T8)

- Tab 0 (Designer) selected. FX_Items is the only open Designer Form; clean; Save and Undo disabled; untouched by T8.
- **No theme dialog open** (Edit Styles and Global Objects both closed by Cancel).
- No browser-native dialog or prompt. Web Client tab (tab 1) not touched.
- FX_HelloWorld exists in the theme list; Button > FX_BlueButton exists with Normal Background `#FF5CC6C7` and Foreground `#FFFFFFFF` as read back in this session.

### 19.13 Knowledge state (T8)

- Global Objects (Edit > Theme) reopens with the 11-name theme list: observed (one run).
- Selecting FX_HelloWorld and then Edit... reopens Edit Styles with the FX_BlueButton class and both colours: observed (one run, same session).
- Tree child render delay on reopen, cleared by selecting Button: observed (one run; cause unresolved).
- Asterisk on "Foreground"/"Background" labels after reopen: observed (one run; meaning unresolved).
- Same-session close/reopen recovery of the class and both colours: observed (one run). **Not** cross-session, runtime, or database durability.
- Nothing is replay_verified.

### 19.14 Open questions, blockers, and limits

- **Q13.** Is the first-render missing child a normal tree-refresh behaviour, or should the operator re-check it with a fresh session? Not resolved.
- **Q14.** Meaning of the asterisk on "* Foreground:"/"* Background:" in the reopened Normal State. Not resolved.
- **Q15.** Whether the Edit > Theme route, which the brief calls "Edit Themes", is the intended command label. Still unresolved (visible label is "Theme").
- **Blockers:** none for T8. All recovery checks matched the required values after one corrected selection.
- **Limitations:** same-session recovery only; picker and readback values are visual and editor-model readbacks; no cross-session or database-level durability claim.

## 20. T9 — final acceptance review (documentation-only; zero browser calls)

- Full AC-1 to AC-8 matrix, decisive evidence paths, reconciled T1–T8 counts (checked against `harness-audit-T1.md` to `harness-audit-T8.md`), the worker-written inventory (1 record + 40 PNG + the T9 report = 42 worker-written files), the disclosures, and the recommendation are in `evidence/EXP-064/T9-ac8-final-acceptance-report.md`.
- **Clarification of §19.8:** the cumulative row "Designer Form edits / Form Saves / component changes" reads as: Designer Form edits 0; component changes 0; FX_Items Form saves other than the T7 toolbar Save 0; **Designer toolbar Save invocations 1 (T7, the theme commit under the operator exception)**. No count changed.
- Files written in T9: this record (status line and this §20) and `evidence/EXP-064/T9-ac8-final-acceptance-report.md`. No prior experiment record, AGENTS.md, tutorial source or external file was altered.
- Knowledge state: every finding is **observed** or **unresolved**. None is replay_verified.

## Outcome (operator, 2026-10-12)

Accepted. Hello World Part 4 section 6a is complete. The pause and the theme-Save amendment were operator calls under the standing authorization of 2026-10-11.

- Run R-20261012-220326-Rdi0 completed as accepted after 9 worker tasks.
  - It paused once, at T6: the theme dialogs have no Save of their own. Infor documents "Click OK twice. Click Save" (specialist).
  - Amendment: Edit Styles OK, then Global Objects OK, then at most one Designer toolbar Save, only if it became enabled. FX_Items had to be clean with no Form edits.
- Screenshots viewed by the operator assistant:
  - `t7-04`: after the single Designer Save, the native toast reads "Save / Global object(s) were saved."
    - FX_Items in User scope (status bar: ScopeType User, ScopeName = operator).
    - Save is disabled again.
  - `t8-01`: the reopened Global Objects > Themes list shows ButtonTheme, Classic, Dark, FX_HelloWorld, Hi world, High Contrast, Infor, InforReport, Light, MyPortal and Projector.
    - These are the 10 original themes plus FX_HelloWorld.
    - "Hi world" already existed and is not factory-owned.
  - `t8-04`: the reopened Edit Styles for FX_HelloWorld shows UIElement > Form > FormComponent > Button > FX_BlueButton.
    - Its Normal State reads Foreground `#FFFFFFFF` and Background `#FF5CC6C7`.
- Deviation, disclosed and harmless: the Designer was not open at the start despite the attestation. In T1 the worker launched it from the Web Client (Form > Definition > Designer, scope dialog OK) and FX_Items opened clean in User scope. Nothing was changed.
- Audit: the `prohibited-tool hits=1` in T2–T4 are the harness flagging `browser_type`. It was used for the theme name, the class name and the Background value, all in scope.
- Confinement (git status): only `evidence/EXP-064/` and this record were written by the run.
- Findings (observed):
  - Themes live in Designer Edit > Theme (the Global Objects dialog: Themes list with New/Copy/Delete; Edit Styles editor with Elements/Categories/Attributes).
  - A new class appears in the tree only after its parent is reselected.
  - Colours are stored as 8-digit ARGB (`#FFFFFFFF` = Solid White).
  - Theme changes are committed by OK (Edit Styles), then OK (Global Objects), then the Designer toolbar Save, which reports "Global object(s) were saved."
- Persistence is limited to the same-session reopen.
- Next: section 6b. It selects FX_HelloWorld in User Preferences (an operator decision: it changes the operator's Web Client theme) and applies the FX_BlueButton class to the Import button.
