# EXP-128 - Read-Only Study of the Mock Inventory Portal (MockLoginPortal, MockInventory, Inventory Dashboard, MockLoginIDO)

Status: **T27 MockLoginIDO exact-name lookup (2026-10-25; one operator-authorized query): the status gate passed (empty IDO Name, one blank row, Save disabled, no prompt). One typed criterion (`MockLoginIDO`) and one F4 returned ZERO IDO rows; MockLoginIDO was NOT located and no metadata was inspected (T27 section). AC-1 to AC-5 remain pending. EXP-128 is NOT accepted; EXPERIMENT_COMPLETE is not declared.** Previously: T26 final qualified review (2026-10-25; repository only; no browser action): EXP-128 is a qualified observational study. It is not accepted and not complete; all five acceptance criteria are pending (each partly met). The review is `evidence/EXP-128/t26-final-qualified-review.md`; a T26 section closes this record. Previously, T25 final status-bar-gated MockLogin IDO lookup (2026-10-25): the gate FAILED. No "Filter in Place" status text was found, and after the single Filter in Place click the IDO Name field held ABDataServices. The MockLogin IDO definition was NOT located; nothing was typed into the criteria, F4 was not pressed, and no further MockLogin lookup is scheduled (T25 section; operator option C). Experiment NOT accepted.** Previously: T24 MockLogin IDO lookup, hard gate (2026-10-25): the runtime IDOs Form already appeared to be in filter mode before any Filter In Place click (blank IDO Name field, editable fields, filter glyph on the tab), so the lookup stopped at the pre-filter step and the Form was closed. Filter In Place was not clicked, MockLogin was not typed, F4 was not pressed, and the IDO definition was NOT located (T24 section). Experiment NOT accepted.** Previously: T23 MockLogin IDO lookup (2026-10-25): the IDO definition was NOT located. The Web Client Filter In Place state could not be confirmed as a criteria state, so nothing was typed into the IDO Name field and F4 was not pressed (T23 section). Experiment NOT accepted.** Previously: T22 MockLogin IDO (2026-10-25): the IDO definition was NOT located or read (the Designer's IDO grids show no rows without typed criteria or Filter In Place, both outside T22's authorization). The Form-side collection view of MockLogin was read (collection name, base table alias, 36 property names; `Username` absent from that list, unresolved). Operator authorization is needed to continue (T22 section). Experiment NOT accepted.** Previously: T21 global Script entry inspected (2026-10-25): Edit > Script opens the "Global Objects" dialog with a Scripts list; no Mock-, mocklogin-, UserControl- or WSForm-named entry appears in the 131 captured names; no script was opened and no global-script copy was written; experiment NOT accepted.** Previously (T20): `UserControl.js` stayed blocked at its Properties pane and was not read. Previously: T19 independent verification and correction completed (repository-only task, 2026-10-25). T12 is retained with corrections (T19 correction log at the end of this record). All read-only observation phases (T1 to T11) and the MockLoginPortal Form Script recovery (T17) are recorded. Acceptance: AC-1 passed (qualified); AC-2 to AC-5 pending. The shared `$app/scripts/UserControl.js` and the MockLogin IDO definition remain uninspected. Operator decisions: T12 section 13 and the T19 section (D-1 to D-12).
Mode: LEARNING MODE, read-only study. Nothing is changed, saved or created. Findings are observed descriptions only.
Brief: approved (commit 6b966f1). Evidence directory: `evidence/EXP-128/`.
Knowledge state of everything below: **observed** (one read-only pass), not verified and not replay-verified.

Redaction: the signed-in account name shown in the Designer status bar is written here as `<signed-in user>`. Credential values were never read or copied.

---

## T1 - Gate and inventory

### Sources reviewed (before any browser action)
- `AGENTS.md`
- `docs/mongoose/guides/user-control.md`
- `docs/mongoose/guides/scripts.md` lines 1-130
- `docs/mongoose/guides/variables.md`
- `recipes/session/session-expiry-and-stale-designer.md`

### Browser tabs at task start
- Tab 0 (only tab): `Mongoose` (Web Client, Infor OS portal frame, tab "Mongoose" selected). Console baseline: **3 errors, 2 warnings**.
- No Designer tab existed at task start, so no Designer tab was identified before the task.
- Session state: usable. No Session Expired modal, logout card, "Logout Successful" or sign-in page was seen.

### Web Client state at task start (pre-existing, not opened by this task)
Five Form tabs were already open in the Web Client, in this order: `MockLoginPortal`, `MockInventoryDashboard`, `MockInventory`, `MockInventory`, `MockLoginIDO` (selected). These were left as found. Operator question: the two `MockInventory` tabs and the open MockLoginIDO tab were not opened by this experiment; T11 (runtime look) may need them closed or reused by the operator.

### Designer opened (new tab)
- Action: clicked the Web Client toolbar `Designer` button. It opened a new browser tab, `Infor Mongoose Application Development Framework (...DEM_DEFAULT)` at `.../WSWebClient/designer/default.aspx?MGForm=MockLoginIDO`.
- **Deviation (recorded):** the brief expects Forms to be opened through Select Form or a recent entry. The Designer opened the Form the Web Client was showing (`MockLoginIDO`) by its own button. No other Form was opened in the Designer during T1.
- Designer tab console baseline: **2 errors, 0 warnings**.

### Editing scope
- An "Identify Your Editing Scope" dialog appeared with Scope = **User** and User = `<signed-in user>`. Accepted unchanged with **OK** (the permitted action for this dialog).
- Designer status bar after acceptance: `[ ScopeType: User / ScopeName: <signed-in user> ]`. Scope is User.

### Starting Designer Form (clean)
- Form open in the Designer: **MockLoginIDO**.
- Design properties shown: Name `MockLoginIDO`; Description empty; Caption empty; Version `User version for <signed-in user>`; Device Type `Default`; Form Type `Normal`; Is Master `True`; groups Appearance, Behavior, Help, Layout (collapsed).
- Save button: **disabled** (snapshot at the Designer's first read). Regenerate Form: disabled.
- No dialog, menu or list open at that time.
- Result: **clean**. No unsaved change. Stop condition not triggered.
- The Designer canvas shows one grid with columns ID, Username, Password, Role, Store, and one data row (screenshot t1-01). Row values were not recorded.
- Form Type `Normal` is shown as the Form's type. It does not match the Classic / Flex / portal-shell wording in the brief; recorded as shown.

### Designer Edit menu (opened once, closed by its menu-bar button)
All 18 entries, in order (screenshot `evidence/EXP-128/t1-01-designer-edit-menu-open.png`):
1. Undo (disabled)
2. Redo (disabled)
3. Copy
4. Cut
5. Paste (disabled)
6. **Form Script**
7. Background Color
8. Component Class
9. Image
10. Property Class Extension
11. **Script** (no entry labelled "Global Script" appeared; the global-script entry for T3 is probably this one; to be confirmed in T3)
12. Shortcut Menu
13. String
14. Theme
15. Validator
16. **Variable** (the global-variables entry for T9 is probably this one; to be confirmed in T9)
17. **Web User Control Assets**
18. Revert Global Object Definition (not clicked)

The menu was closed with its menu-bar button. A find after closing returned no menu entries.

### Designer Form menu (observed; no entry was clicked)
- Top items: `Definition` (submenu), `Sign Out` (not clicked).
- Recent Form entries: `MockLoginIDO`, `MockInventory`, `MockInventoryDashboard`, `MockLoginPortal`, `MockLogin`.
- Then: `Sql Tables`, `IDOs`, `Runtime Builder Selection`, `TestMongoose`, `IDO Projects`.
- **No `Open` (Select Form) entry exists in this Designer Form menu.** The Select Form dialog was therefore used from the Web Client toolbar (see below).
- `Definition` submenu (hovered only; screenshot `t1-03`): `Design`, `Revert Form Definition`, `Regenerate Form` (disabled), `Regenerate Form from Cache` (disabled), `Site Developer Impersonation`, `Unload All Global Form Objects`, `New`, `Copy`, `Delete`. None of these was clicked. `Delete`, `Regenerate Form`, `Unload All Global Form Objects` and `Revert Form Definition` are prohibited.

### Select Form list filtered on "Mock" (Web Client toolbar Open)
- Opened with the Web Client toolbar `Open` button (the Select Form dialog). The filter initially held leftover text `fx_item`. It was cleared with Control+A then Backspace, and `Mock` was typed key by key into the filter (Filter By = Name; Case Sensitive and Starts With unchecked).
- Result: 6 rows. The dialog has two columns, Caption and Name. **No description column is shown**. Caption equals Name on every row.

| Caption | Name |
| --- | --- |
| MockInventory | MockInventory |
| MockInventoryDashboard | MockInventoryDashboard |
| MockLogin | MockLogin |
| MockLoginIDO | MockLoginIDO |
| MockLoginPortal | MockLoginPortal |
| RODashboard_Mockup | RODashboard_Mockup |

- The inventory dashboard Form's exact name is **`MockInventoryDashboard`** (operator note wrote "MockIventoryDashboard"; the list shows the spelling above).
- Dialog closed with **Cancel**. OK was not pressed. A find afterwards found no "Select Form" text.
- Screenshot `t1-04`: the dialog with Filter = `Mock` and six rows; first row highlighted but not chosen.

### Server events, session, prompts
- No "The server event processing returned an error" message was seen.
- No session expiry, sign-in page or logout card was seen.
- No browser-native dialog was seen.

### Console error counts (tool output; the console content itself was never read)
| Point | Tab | Errors / warnings |
| --- | --- | --- |
| Task start | Web Client | 3 / 2 |
| After Designer button click | Web Client | 3 / 2 |
| Designer first read | Designer | 2 / 0 |
| After tab select, OK, Edit open/close, Form open, hover, Form close | Designer | 2 / 0 |
| After Web Client tab select, Open click, filter click | Web Client | 3 / 2 |
| After Control+A, Backspace (press_key outputs show no count) | Web Client | not shown by these tool outputs |
| After typing `Mock` | Web Client | 3 / 2 |
| After Cancel | Web Client | 3 / 2 |

No rise in either tab. The stop rule was not triggered.

### Final state at the end of T1
- Web Client tab (tab 0): selected. The Select Form dialog is closed. No menu open. Five Form tabs remain open, as found at the start.
- Designer tab (tab 1): open on Form `MockLoginIDO`, clean (Save disabled at the first read; the later actions were menu open/close and a hover, no edit). No menu, dialog or list open.
- The Designer's `MockLoginIDO` Form is still open. Its close through the Form-tab control is planned for the start or end of the next Form task (T2), as the brief's T2 closing rule states. It was not closed here because T1 has no such step.

### Screenshots (T1)
| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-128/t1-01-designer-edit-menu-open.png` | Designer, MockLoginIDO, Edit menu open with 18 entries; Save greyed; status bar shows User scope and `<signed-in user>` account (name visible in the image) | Does not show the Save state after later actions; does not show the Form's components tree |
| `evidence/EXP-128/t1-02-designer-form-menu-open.png` | Designer, Form menu open with Definition, Sign Out and five recent Forms, and the Form's Design properties | Does not show Definition's submenu |
| `evidence/EXP-128/t1-03-designer-definition-submenu-check.png` | Definition submenu open (Design, Revert Form Definition, Regenerate Form, Site Developer Impersonation, Unload All Global Form Objects, New, Copy, Delete) | Does not show any action result; no entry was clicked |
| `evidence/EXP-128/t1-04-select-form-filtered-mock.png` | Web Client Select Form dialog, Filter = `Mock`, six rows listed, Cancel and OK visible | Does not show descriptions (no such column); does not show any Form opened |

Note for the operator: the status bar and header of screenshots `t1-01` to `t1-04` display the signed-in account name. The record uses `<signed-in user>`. The images are kept because they are the required gate evidence; the operator should decide whether they need redaction before sharing.

### Acceptance check status after T1
- AC-1: Partly met. Sources reviewed; session usable; User scope; Designer Form `MockLoginIDO` recorded clean; Edit menu entries and the Mock Form names recorded; gate screenshots present. Deviations: Designer opened by its own button; no Open entry in the Designer Form menu.
- AC-2 to AC-5: not yet addressed (later tasks).

---

## T2 - MockLoginPortal structure (read-only)

### Sources and tabs at task start
- AGENTS.md re-read at task start (first 60 lines in this task; the full file was read in T1). The T2 part of this record was read in T1 context; the guides were not re-read (continuation rule).
- Tab list (before any tab selection): **2 tabs**. Tab 0 = Designer (`designer/default.aspx?MGForm=MockLoginIDO`, current). Tab 1 = Web Client (`Mongoose`, `favoriteContext=MockLoginIDO`). The tab order changed since T1 (the Designer was tab 1 in T1).
- Designer console baseline: **2 errors, 0 warnings**. Web Client tab not used in T2.
- Designer status bar: `[ ScopeType: User / ScopeName: <signed-in user> ]`. No "Identify Your Editing Scope" dialog appeared in T2.
- Starting Designer Form: **MockLoginIDO**, clean (Save disabled), no dialog or menu open. Not dirty, so no stop for the operator.
- No session expiry, sign-in, logout card, server-event error or console rise was seen in T2.

### Opening MockLoginPortal in the Designer
- Entry used: the Designer Form menu's **recent-forms entry `MockLoginPortal`** (one click). No Select Form dialog was used in T2, and the Web Client toolbar Open was not used.
- Result: a new Form tab `MockLoginPortal` opened next to the still-open `MockLoginIDO` tab. Designer URL: `designer/default.aspx?MGForm=MockLoginPortal`. Save disabled.
- **Blocker encountered and recovered (recorded):** the first two clicks on the Designer Form menu button (ref `e3`) timed out at "waiting for element to be visible, enabled and stable" although the locator resolved (`button-1020`, class `x-btn-over`). A screenshot in the same window also timed out. A fresh snapshot showed the menu closed and the state unchanged. The Designer tab was then selected explicitly (tab select index 0, which the brief describes as the fix for an unselected tab), a fresh snapshot was taken, and **one corrected click** on the same button succeeded. Suspected cause: the Designer was not the rendered tab after the tab order changed. This is a suspected environment issue, not a confirmed one.

### Form-level properties (MockLoginPortal)
- Name `MockLoginPortal`; Description blank; **Caption blank** (ellipsis present, no value shown).
- Version `User version for user <signed-in user>`; Device Type `Default`.
- **Form Type `Flex`** (MockLoginIDO in T1 showed `Normal`). No separate template row was shown in the Form properties grid. Appearance, Behavior, Help and Layout groups were not expanded (limitation).
- Save remained disabled through the whole task (checked by screenshot after the opening, after the component reads, and after the close).

### Collections (Details > Collections)
- Left list: **one row, `Primary Collection:`**. No secondary collection row is listed.
- Primary Collection properties (General group, after selecting the row and expanding the grid): `Collection` (value blank, dropdown), `Base Table and Alias` (value cell shows only the hint text "The primary table and its alias for this IDO is"), `Collection Name` (value blank), `Custom Load Method` (blank), `Method Parameters` (ellipsis, blank), `Read Mode` (blank), `Options` (group; its child rows were not exposed and it was not expanded).
- **Observed: no IDO name and no filter are visible.** Unresolved: the blank values may mean the Form has no primary IDO binding, or the value editors did not render. Not resolved in T2.

### Components tree (all components, Details > Components, fully expanded)
| Name | Type | Parent (tree nesting) | Pane | Container column | Tab |
| --- | --- | --- | --- | --- | --- |
| `Pane (00)` | (folder; Type blank) | Form root | | | |
| `flexlayoutPane_MockLoginPortal` | FlexLayout | Pane (00) | 0 | (blank) | 0 |
| `Region00: FLEX_PANE_REGION0` | FlexLayout (icon) | flexlayoutPane_MockLoginPortal | (blank) | (blank) | (blank) |
| `userControl1_USER` | UserControl | Region00: FLEX_PANE_REGION0 | 0 | `flexlayoutPane_MockLoginPortal` | 0 |

- Data Source, Event to generate, Component Class, Enabled When, Visible When and Required When are **blank for all four rows** (accessibility tree and the visible screenshot columns). The Visible When and Required When columns were off-screen in the screenshots; their blank values were read from the accessibility tree.
- **Observed discrepancy:** the `Container` column for `userControl1_USER` shows `flexlayoutPane_MockLoginPortal`, while the tree nests it under `Region00`. Recorded as shown; not interpreted.
- Only one UserControl exists on this Form: `userControl1_USER`.

### UserControl `userControl1_USER` (Properties, Component tab)
- Header combo: `userControl1_USER (ActivexControl)`. Design group: Name `userControl1_USER`; Description blank; Caption blank; **Type `UserControl`**; From Device Master `True`.
- Appearance: Theme Class blank; Background Color blank; **Foreground Color `#000000`**; Bitmap File Name blank; Font blank; Justification blank.
- Behavior: Breadcrumb blank; Read-Only/Disable `False`; Tab Read-Only Field `False`; Hidden `False`; No Tab Stop `False`; Auto Complete `False`; Add/Details and Find Form, New and Copy Operations, Dynamic Enabling and Disabling (groups, not expanded); Right-Click Menu blank; Drag Image blank; **Enabled When blank; Required When blank; Theme Class When blank; Visible When blank**.
- Data Source: **Binding Type `None`**; Binding blank; Required `False`; To Be Determined `False`; Upper or Lower Case `Mixed`; Default Value blank; Data Type, List Source, Validation, Formatting (groups or blank).
- Events: Primary, Data Change, Lose Focus, Gain Focus (dropdowns blank, each with an ellipsis); Drag From Events `0 event(s)`; Drop On Events `0 event(s)`.
- Help: ToolTip blank; Help Context ID `0`; Help File Name blank.
- Inheritance: Component Class blank; Component Class Parameters blank; Set Class From `This Component's Attribute`; View Attributes Inherited From Property blank; Edit Property Class Extension blank.
- Layout: Unit `Pixel`; **Size `964; 684`**; Containment (group); Tab Order `0`; Order blank; **Flex Attributes `Index: 0 Target: FLEX_PANE_REGION0`**.
- Miscellaneous: **Extension Properties** (ellipsis) opened once: dialog `Edit Extension Properties` with radio options `Edit Key Value Pairs` (selected) and `Edit JSON String`, an empty Key/Value table, and buttons Add, Delete, OK, Cancel. **Not the user-control reference dialog.** Closed with Cancel. **Specific Attributes** (group): expanded by one coordinate click on its chevron (recorded). Free-Form Data Type blank.
- Specific Attributes row shows **`User Control Name` = `V(UserCtrl_userControl1_USER)`** (read with find; the value is a variable reference, see Variables below), with an ellipsis.

### UserControl reference dialog (`Edit User Control References`)
Opened once from the ellipsis of `User Control Name` (Specific Attributes), read-only, then closed with **Cancel**. Fields:
- **Windows section:** Assembly Name combobox `<Not Applicable>` (its ellipsis disabled); Class Override textbox `<Not Applicable>`; **Use Web Control: checked**.
- **Web section:** Assembly Name combobox blank (Open button and ellipsis present); Class Override textbox blank; **Control URL combobox `mocklogin/index.html`** (Open button).
- URL-type radios **Relative URL, Absolute URL, Web User Control Asset** are all disabled. Their checked state is **not exposed** in the accessibility tree; the screenshot shows a ring on the Web User Control Asset radio. Which one is selected is **unresolved**.
- Buttons: OK, Cancel, Help. No credential field appears in this dialog.

### Event Handlers (Details > Event Handlers)
- Form-level grid: columns `Sequence`, `Response Type`, `Disabled`, `Response Parameters`. **No rows.** The right-hand pane is empty.
- Component-level: `userControl1_USER` has no event rows (Primary, Data Change, Lose Focus, Gain Focus blank; Drag/Drop 0 events).

### Variables (Details > Variables; categories expanded with the grid's Expand control)
Three categories: **Form - Persistent** (3 entries), **Global - Persistent** (48 entries), **Global - Temporary** (6 entries).

Form - Persistent:
| Name | Value (as shown) | Persistent | Global |
| --- | --- | --- | --- |
| `UserCtrl_userControl1_USER` | `V(UserCtrlAsm_userControl1_USER) V(UserCtr…` (truncated; full text not read) | True | False |
| `UserCtrlAsm_userControl1_USER` | `ASSEMBLY(UNIFIED)` (read with find; Persistent/Global not captured) | not captured | not captured |
| `UserCtrlUrl_userControl1_USER` | `URL(METADATA()mocklogin/index.html)` | True | False |

Global - Persistent (48 names; values **not read** in T2; names only):
`ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`, `gbgc_GradientTest1`, `gbgc_GradientTest2`, `gbgc_GradientTest3`, `IncludeBadgeStatusVar`, `IsDiagnosticsTimerElapsed`, `LoginFoundUser`, `lse_BackgroundQueue.MonthlyDay`, `lse_BackgroundQueue.Weekly`, `lse_DataTypeCode`, `lse_EventActionType`, `lse_EventChronoFrsLstInlineList`, `lse_EventChronoInlineList`, `lse_EventChronoNoInsteadInlineList`, `lse_MethodType`, `lse_MIMEType`, `lse_MonthlyDayVar`, `lse_OutputFormatInline`, `lse_OutputFormatInlineAll`, `lse_PreviewFormatInline`, `lse_PropertyTypeInlineList`, `lse_PropertyTypeNoSubInlineList`, `lse_TableTypeInlineList`, `lse_TableTypeNoPrimInlineList`, `lse_TimerInterval`, `lse_TimeZoneMonth`, `lse_UetDataType`, `lse_WBDateRange`, `lse_WBDrillColName`, `lse_WBFilterExpressionDateRangeVar`, `lsm1_CoreDocumentType`, `lsm1_CustomMethodNameVar`, `lsm1_DefaultReporType`, `lsm1_DocumentationClass`, `lsm1_GetCharacterTypeColumns`, `lsm1_TemplateNameClass`, `lsm1_TimeZone`, `lsm1_UserName_Default`, `lsp_CoreDocumentType`, `MPPassword`, `MPUsername`, `SiteFormName`, `vInventoryJson`, `vsc_OnSelectDocType`, `vsv_CoreDocumentType`, `vsv_WBKPINumGaugeSettings`.
- Count note: 32 names were read in the first pass and 16 in the second pass after scrolling; the two passes overlap, and the list ends at the last row shown in the second pass.
- Names with a Mock-related or login-related reading (for T9 to check, not interpreted here): `LoginFoundUser`, `MPUsername`, `MPPassword`, `SiteFormName`, `vInventoryJson`, `IncludeBadgeStatusVar`. **`MPPassword` and `MPUsername` are names only; their values were not read or recorded** (credential rule).

Global - Temporary (6 names): `AccessAs`, `FarmEnableExtensionBundle`, `FarmEnforcePrefixFromAccessAs`, `Parm_DefaultStartingToEnding`, `Parm_DisplayReportHeaders`, `Parm_Site`.

### Observed chain (not yet verified)
`userControl1_USER` → Specific Attributes `User Control Name` = `V(UserCtrl_userControl1_USER)` → Form variable `UserCtrl_userControl1_USER` (value `V(UserCtrlAsm_userControl1_USER) V(UserCtr…`) → `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)` and `UserCtrlUrl_userControl1_USER` = `URL(METADATA()mocklogin/index.html)` → the reference dialog's Control URL `mocklogin/index.html`. This is a reading of design-time values only; the runtime use of these variables is not observed.

### Form script, assets, runtime
Not inspected in T2 (T3 and T7 to T8 scope). The Designer Edit menu was not reopened in T2.

### Final state of T2
- `MockLoginPortal` Form tab **closed** through its Form-tab close control (ref `e510`). No save prompt appeared (the Form was clean). The tool output afterwards showed the Designer URL as `MGForm=MockLoginIDO`; `find "MockLoginPortal"` returned no match.
- The Designer `MockLoginIDO` Form remains open and clean (Save disabled; screenshot `t2-21`). It was left open, as in T1; the operator may decide whether it closes before T3.
- No menu, dialog, list or editor is open. Web Client tab untouched (its five pre-existing Form tabs remain).

### T2 screenshots
| File | Shows | Does not prove |
| --- | --- | --- |
| `t2-01-designer-mockloginportal-opened.png` | MockLoginPortal tab selected beside MockLoginIDO; Form Type `Flex`; Save greyed; status bar with User scope and the account name | Components, collections, Save state after later actions |
| `t2-02-mockloginportal-details-collections.png` | Details > Collections: one row `Primary Collection:`; right pane empty before selection | Collection values (not yet selected) |
| `t2-03-mockloginportal-primary-collection-props.png` | Primary Collection selected; General group values blank (Collection, Collection Name); Base Table and Alias shows the hint text | Options child rows; whether blanks are real |
| `t2-04-mockloginportal-primary-collection-props-scrolled.png` | Grid scrolled: Custom Load Method, Method Parameters, Read Mode blank; Options collapsed | Options contents |
| `t2-05-mockloginportal-components-tree.png` | Details > Components with root `Pane (00)` collapsed; column headers Name … Enabled When | Child rows (collapsed) |
| `t2-06-mockloginportal-components-expanded.png` | Full tree: Pane (00) > flexlayoutPane_MockLoginPortal (FlexLayout) > Region00: FLEX_PANE_REGION0 > userControl1_USER (UserControl), Container `flexlayoutPane_MockLoginPortal` | Visible When / Required When columns (off-screen) |
| `t2-07-mockloginportal-usercontrol1-properties.png` | userControl1_USER selected; Component tab; Design group (Type UserControl, From Device Master True); canvas highlight covers most of the design area | Groups below Design (collapsed at this point) |
| `t2-08-mockloginportal-usercontrol1-properties-expanded.png` | Appearance and Behavior expanded: Foreground `#000000`, Hidden False, Enabled When blank | Lower groups |
| `t2-09-mockloginportal-usercontrol1-properties-scrolled.png` | Behavior tail (Enabled When, Required When, Theme Class When, Visible When blank); Data Source (Binding Type None) | Events rows |
| `t2-10-mockloginportal-usercontrol1-properties-bottom.png` | Events (Primary, Data Change, Lose Focus, Gain Focus; Drag/Drop 0 events); Help; Inheritance; Layout (Size 964; 684; Flex Attributes) | Miscellaneous rows |
| `t2-11-mockloginportal-usercontrol1-properties-miscellaneous.png` | Miscellaneous: Extension Properties, Specific Attributes, Free-Form Data | Specific Attributes children (not yet expanded) |
| `t2-12-mockloginportal-usercontrol1-extension-properties-dialog.png` | `Edit Extension Properties` dialog (empty key/value table) before Cancel | Any reference field (none on this dialog) |
| `t2-13-mockloginportal-usercontrol1-specific-attributes.png` | Specific Attributes selected; description "Type's Specific Attributes" | Children (chevron not yet expanded) |
| `t2-14-mockloginportal-usercontrol1-specific-attributes-expanded.png` | Specific Attributes expanded: `User Control Name` = `V(UserCtrl_userControl1_USER)` (truncated) | Full dialog contents |
| `t2-15-mockloginportal-usercontrol1-user-control-reference-dialog.png` | `Edit User Control References`: Use Web Control checked; Control URL `mocklogin/index.html`; Windows `<Not Applicable>`; radios greyed | Which radio is selected (ring not conclusive) |
| `t2-16-mockloginportal-event-handlers.png` | Details > Event Handlers: columns Sequence, Response Type, Disabled, Response Parameters; no rows | Component-level handlers beyond the blank Events rows |
| `t2-17-mockloginportal-variables.png` | Details > Variables: categories Form - Persistent, Global - Persistent, Global - Temporary (collapsed) | Entries (collapsed at this point) |
| `t2-18-mockloginportal-variables-expanded.png` | Variables expanded; Form - Persistent entries and first Global - Persistent entries visible | Global entries below the fold (read in snapshots) |
| `t2-19-mockloginportal-form-variable-selected.png` | `UserCtrl_userControl1_USER` selected: Value `V(UserCtrlAsm_userControl1_USER) V(UserCtr…`, Persistent True, Global False | Full value (truncated) |
| `t2-20-mockloginportal-form-variable-urlvar-selected.png` | `UserCtrlUrl_userControl1_USER` selected: Value `URL(METADATA()mocklogin/index.html)`, Persistent True, Global False | Runtime behaviour |
| `t2-21-designer-after-mockloginportal-close.png` | After the close: only `MockLoginIDO` remains (clean, Save greyed); no dialog | Global list details |

Screenshots show the signed-in account name in the status bar (`ScopeName`). The record uses `<signed-in user>`. These images are not to be shared externally without redaction; the operator decides.

### Limitations (T2)
- Collections: the IDO name and filter were not visible (blank values); Options not expanded.
- Form Type `Flex` is shown, but the template/portal-shell kind is not shown in the properties grid.
- The URL-type radio state is not exposed in the accessibility tree; the screenshot is not conclusive.
- Visible When / Required When columns were read from the accessibility tree only (off-screen in screenshots).
- The Designer canvas does not render the HTML user control; only a highlight is visible.
- Variable values were read only for the three Form variables; Global values are not read in T2 (T9 scope).

## T3 - MockLoginPortal Form script (partial, blocked)

### Gate for this task
- AGENTS.md re-read (first 30 lines) and the T3 part of this record read before any browser action.
- Tab list before selection: **2 tabs**. Tab 0 = Designer (`designer/default.aspx?MGForm=MockLoginIDO`, current); tab 1 = Web Client (`favoriteContext=MockLoginIDO`). Tab 0 was selected explicitly, then a fresh snapshot was taken.
- Designer console baseline: **2 errors, 0 warnings**. Web Client console not read (not used in T3).
- Starting state: Designer scope `[ ScopeType: User / ScopeName: <signed-in user> ]`; Form **MockLoginIDO**, clean (Save disabled); no dialog open; no menu open.
- No session expiry, sign-in, logout card or server-event error at any point in T3.

### Opening MockLoginPortal
- Entry used: Designer Form menu recent-forms entry `MockLoginPortal`. The entry moved to the first row of the recent list since T2 (ref changed); the first click on the Form menu this time **did not time out** (the T2 timeouts did not recur).
- Result: Form tab `MockLoginPortal` selected; Form Type `Flex`; Save disabled; User scope; console 2/0. Screenshot is not separately saved for this step; the state is visible in t3-01.

### Edit menu (entries re-read, not re-screenshotted)
Same 18 entries as T1, in the same order. Re-read from a snapshot (not from a new screenshot): Undo, Redo, Copy, Cut, Paste (disabled); **Form Script**; Background Color; Component Class; Image; Property Class Extension; **Script**; Shortcut Menu; String; Theme; Validator; **Variable**; **Web User Control Assets**; Revert Global Object Definition.
- The entry used for the Form script: **Edit > Form Script**.

### Form script: what was opened and what was copied
- The dialog that opened is titled **`Script Editor`** (tab `Script`; top-right icons; a collapsed `Compile Result` panel; a right-hand `Options` panel; buttons OK, Cancel, Help, Download). **No Save button is shown.** The editor is a code editor (line numbers, Go-to field, compile/run triangle icon at the top left; neither was used).
- The source is **C# and is present**. Namespace `Mongoose.FormScripts`; one class `MockLoginPortal : FormScript`.
- Copy: `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` holds **lines 1–77** verbatim (exact text from the accessibility text, indentation from screenshots). **The copy is partial.** Lines 78 to the end (the closing braces of the catch block, the method, the class and the namespace, and any further members) were **not copied**. The editor's scroll was blocked by the harness (see blocker below).
- Redaction: none needed; no credential value appears in lines 1–77. **Zero values redacted.**

### Form script: observed content (lines 1–77)
Methods (one method visible in lines 1–77):
- `public string ProcessLogin(string username, string password)` - the only method in the visible part. Its header comment says it is called from the user control as `WSForm.invoke("ProcessLogin", username, password, callback)`. **That comment is text in the script, not a verified call; the call was not observed.**
- Returns string values: `"missing"` (line 23), `"empty"` (line 44), `"invalid"` (line 67), `"ok"` (line 71), `"error"` (line 77).

What the method does, in order (observed from the code):
1. Returns `"missing"` with an alert `Username and password are required.` if either argument is null or empty.
2. Builds a property list `"Username, Password, Store, Role"` and a filter `Username = '<username>'`, where single quotes in the username are doubled.
3. Calls `IDOClient.LoadCollection("MockLogin", properties, filter, "", 1)` (IDO name **`MockLogin`** as written in the script, not `MockLoginIDO`; see open questions). Arguments: IDO name, property list, filter, an empty string (its meaning is not shown in the visible part), and `1`.
4. If `response.Items.Count == 0`: alert `No data found. No user matches '<username>'.` and return `"empty"`.
5. Otherwise reads `response.Items[0]` and its `PropertyValues[0..3]` (Username, Password, Store, Role by the order of the property list): `storedPassword`, `store`, `role`.
6. Builds a `Dictionary<string, object>` record with keys `Username`, **`Password` (the stored password value from the IDO)**, `Store`, `Role`, and serialises it with `JsonConvert.SerializeObject(record, Formatting.Indented)`.
7. Writes the JSON to the **form variable `vMockLoginJson`** via `ThisForm.Variables("vMockLoginJson").Value = json;`.
8. If `storedPassword != password`: alert `Data received, but the password is incorrect.` and return `"invalid"`.
9. Otherwise alert `Data received:` followed by the JSON (`ShowMongooseAlert("Data received:\n" + json)`) and return `"ok"`.
10. `catch (Exception ex)`: alert `Login error: ` + `ex.Message` and return `"error"`.

Observed facts for T12 (not verified at runtime):
- **Observed:** the JSON written to `vMockLoginJson` and shown in the alert on success contains the stored password. The code places it there (line 56 and line 70). This is a design observation for later review; no value was read or recorded here.
- **Observed:** the password is compared on the C# side (line 64), not in the IDO filter.

### Event handlers, IDO, variables and events named in the visible script
- **WSForm.invoke target (named in the comment only):** `ProcessLogin`.
- **IDO call:** `IDOClient.LoadCollection` (one call) on IDO `MockLogin`.
- **IDO properties requested:** `Username`, `Password`, `Store`, `Role`.
- **Form variables read or set:** `vMockLoginJson` (set, line 62). None read.
- **Generated events:** none visible in lines 1–77 (no event generation call seen). The lines after 77 were not read, so this is "none in the visible part".
- **Alerts:** `ShowMongooseAlert` (5 calls in the visible part; the messages are listed above).

### Global Script entry (Edit > Script)
- The Edit menu has a `Script` entry (listed in T1 and again in T3). **It was not opened in T3.** Its identity (global script or another kind of script) is **not verified**. Opening it would have needed the same long scroll to read its content, which was blocked; the step was left for the next task rather than opened partially.
- No `evidence/EXP-128/global-script.cs.txt` was written.

### Blocker (recorded)
- The Form script's lines 78 to the end could not be read. The editor was scrolled with the mouse wheel (view only). After five identical consecutive wheel calls (`browser_mouse_wheel`, deltaY 500), the harness denied a sixth identical call (identical-consecutive threshold) with the message to inspect once with a different permitted call and report a blocker. One inspection (a screenshot) was taken and showed the view at lines 29–76, so the five calls had moved the editor. No further scroll was attempted.
- Each wheel call moved the editor about three lines, so the remainder would have needed many more calls. The next step, for the next task, is to read lines 78 to the end of the file (for example with the maximized editor and a view-only scroll in separate, non-identical steps, or another view-only method the operator approves).
- The Designer Form-menu clicks in T3 did not time out (the T2 timeouts did not recur).

### Recovery steps taken (recorded)
- Snapshot reference e682 (dialog) became stale after the scroll: "Ref e682 not found". One fresh untargeted snapshot was taken (recovery allowance 1 of 1 for this step).
- Snapshot reference e1034 (toolbar) became stale after the view change: "Ref e1034 not found". The next fresh untargeted snapshot gave the Cancel reference (e1037) and the code text through line 77. This was the **second** recovery snapshot for the same editor (allowance was 1); it was taken because the Cancel reference was needed and no other source of the Cancel reference existed. Recorded here as a deviation.

### Closing
- Editor closed with **Cancel** (ref e1037). No save prompt appeared. The Designer then showed MockLoginPortal clean (Save disabled), screenshot `t3-09`.
- **MockLoginPortal Form closed** through its Form-tab close control (ref e510). No save prompt. The tab list then showed only `MockLoginIDO`.
- Final Designer state: Form **MockLoginIDO** open and clean (as before T3). No menu, dialog, editor or list open.

### Acceptance check status after T3
- AC-2 (script part): **partly met** for MockLoginPortal. The Form script is copied for lines 1–77 only; the reason for the remainder is the blocker above. Methods, IDO calls, variables and events are recorded for the visible part.
- AC-3: no assets read yet (T7–T8). The `ProcessLogin` invoke is documented only from the script comment.
- AC-1 (T3 part): Sources reviewed; session usable; User scope; starting Form clean; Edit entries re-read; console baselines recorded.

### T3 screenshots
| File | Shows | Does not prove |
| --- | --- | --- |
| `t3-01-form-script-editor-open.png` | Script Editor open (title, Script tab, lines 1–33 visible, OK/Cancel/Help/Download) | Lines past 33 |
| `t3-02-form-script-editor-scrolled-1.png` | Lines 4–37 after a view scroll | Lines past 37 |
| `t3-03-form-script-editor-scrolled-2.png` | Lines 7–40 | Lines past 40 |
| `t3-04-form-script-editor-after-view-toggle.png` | Maximized editor (view toggle), lines 7–55 | Lines past 55 |
| `t3-05-form-script-editor-maximized-scroll-a.png` | Maximized, lines 10–58 | Lines past 58 |
| `t3-06-form-script-editor-maximized-scroll-b.png` | Maximized, lines 13–61 | Lines past 61 |
| `t3-07-form-script-editor-maximized-settle-check.png` | Same view as t3-06 after settling (no further scroll) | Lines past 61 |
| `t3-08-form-script-editor-after-scroll-batch.png` | Maximized, lines 29–76 after the five-call batch | Line 77 onward |
| `t3-09-designer-after-script-editor-cancel.png` | Designer after Cancel: MockLoginPortal clean, Save greyed, console not shown in image | Form close (done after this screenshot) |

Note: t3-01 to t3-09 show the signed-in account name in the status bar. The record uses `<signed-in user>`; the operator decides on sharing.

### Open questions after T3
13. The script's IDO is `MockLogin`, not `MockLoginIDO`. Is `MockLogin` an IDO (it appears as a Form name in the Select Form list)? T10 must check which IDO the login reads.
14. The copy stops at line 77. Lines 78 to the end (including any further methods) are unread; the number of methods in the Form script is therefore not final.
15. The `WSForm.invoke("ProcessLogin", ...)` call is documented only from the script comment. The call from the user control (T7–T8) and the callback value are not verified.
16. The third `LoadCollection` argument `""` and the trailing `1` are not explained in the visible part (their meanings need the IDO documentation or the lines after 77).
17. The Edit > Script entry (global script or other) is not identified; it was not opened. Its check is for the next task.
18. Design observation (for T12): the success JSON in `vMockLoginJson` and in the success alert includes the stored password value (lines 56 and 70). Not a credential value copy; recorded as a property of the code.
19. Operator: the blocker is the harness denial of the sixth identical wheel call. Operator to decide the scroll method for the rest of the file (or accept a copy limited to line 77).

## T4 - MockInventory structure (partial, stopped by the console-error rule)

### Gate for this task
- AGENTS.md read in full (repository file) and the T4 part of this record read before any browser action. No guide was re-read (continuation rule).
- Tab list before any tab selection: **2 tabs**. Tab 0 = Designer (`designer/default.aspx?MGForm=MockLoginIDO`, current); tab 1 = Web Client (`favoriteContext=MockLoginIDO`). Tab 0 was then selected explicitly and a fresh snapshot taken.
- Designer console baseline: **2 errors, 0 warnings** (Form `MockLoginIDO`). Web Client console not read (not used in T4).
- Starting state: scope `[ ScopeType: User / ScopeName: <signed-in user> ]`; Form **MockLoginIDO**, clean (Save disabled); no dialog, menu or list open. Result: **clean**. No "Identify Your Editing Scope" dialog appeared.
- No session expiry, sign-in page, logout card or "The server event processing returned an error" message at any point in T4.

### Opening MockInventory
- Entry used: Designer Form menu, recent-forms entry `MockInventory`. The recent list order had changed since T1 and T3: `MockLoginPortal`, `MockLoginIDO`, `MockInventory`, `MockInventoryDashboard`, `MockLogin`. The entry was clicked by its reference from a fresh snapshot taken after the menu opened.
- Result: a new Form tab `MockInventory` opened beside the still-open `MockLoginIDO` tab. Designer URL `designer/default.aspx?MGForm=MockInventory`. Save disabled. Console 2/0.

### Form-level properties (MockInventory)
- Name `MockInventory`; Description blank; **Caption blank** (ellipsis present, no value shown); Version `User version for user <signed-in user>`; Device Type `Default`; **Form Type `Normal`**; **Is Master `True`**.
- Appearance, Behavior, Help and Layout groups were not expanded (limitation).
- Form Type `Normal` matches MockLoginIDO (T1). It differs from MockLoginPortal, which is `Flex` (T2). No template row was shown.

### Canvas (as displayed; not a structure read)
- The Designer canvas shows a grid with the column headers `* ID`, `* Item`, `* Description`, `* Warehouse`, `* Quantity On Hand`, `* Reorder Level`, `* Location` (all marked required), and a detail area with labelled fields ID, Item, Description, Warehouse, Quantity On Hand, Reorder Level and Location (each marked required). The one visible grid row shows `15` in the ID cell; the accessibility tree shows the other grid cells empty. The ID textbox shows `15`; the other textboxes are empty.

### Details > Collections
- Left list: **one row, `Primary Collection: MockInventory`**. No secondary collection row is listed.
- Primary Collection, General group (row selected, t4-02):
  - `Collection` = **`MockInventory`**
  - `Base Table and Alias` = **`MockInventory mock_inv`** (full text: "The primary table and its alias for this IDO is MockInventory mock_inv"; table `MockInventory`, alias `mock_inv`)
  - `Collection Name` blank (ellipsis present)
  - `Custom Load Method` blank
  - `Method Parameters` blank (ellipsis present)
  - `Read Mode` blank
  - `Options` (group): collapsed; its child rows were **not exposed** (see the coordinate clicks below).
- The grid's Expand button (view only) exposed the groups `Standard Operations`, `Advanced Options` and `Selection`. They were not expanded and not read.
- **Filter: not read.** The collection's filter, if any, would sit under `Options`, which stayed collapsed. Unresolved.
- Observation for T2 comparison: in T2, the same rows for MockLoginPortal showed blank values. Here, the same editor shows values, which makes a real blank on MockLoginPortal more likely than a rendering failure. This is an inference, not verified.

### Primary Collection child nodes (exposed after the stop-triggering click)
- The click described under "Console-error stop" expanded the `Primary Collection: MockInventory` node in the left tree. Its child rows (read from the accessibility snapshot after the expansion; the first six also visible in t4-04) are **36 property names**, in this order: `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `Description`, `ID`, `InWorkflow`, `Item`, `Location`, `NoteExistsFlag`, `QuantityOnHand`, `RecordDate`, `ReorderLevel`, `RowPointer`, `UDFDateTime1` to `UDFDateTime6`, `UDFDecimal1` to `UDFDecimal6`, `UDFInteger1` to `UDFInteger6`, `UDFLongText1` to `UDFLongText2`, `UDFMediumText1` to `UDFMediumText2`.
- Interpretation (unverified): these are the properties of the IDO that the primary collection is built on. Their property classes and bindings were not read (T10 scope).

### Components, UserControls, Event Handlers, Variables
- **Not read in T4.** The Details > Components tab was not opened. No UserControl, no user-control reference dialog, no component event, no Event Handlers and no Variables were read for MockInventory. Whether MockInventory contains a UserControl is therefore **unknown**.

### Console-error stop (recorded)
- The collection-properties reads before this point ran at **2 errors / 0 warnings** after every action listed below.
- Action that raised the count: `browser_mouse_click_xy` at **(278, 722)**, the expander chevron of the left-tree node `Primary Collection: MockInventory` (its accessibility row had no expander reference). This was the second coordinate click in T4 and the single attempt for that field.
- Console before the action: **2 errors, 0 warnings**. Console after the action: **3 errors, 0 warnings** (tool output of that click).
- Effect seen: the node expanded and listed the IDO property names above.
- The tool output reported new console entries at `evidence\playwright\console-2026-10-23T03-34-33-934Z.log#L3-L13`. **The worker did not read or inspect the console messages.** The cause is not established by the worker.
- Stop action taken: no further click, no Save, no close, no ellipsis and no dialog. Only read-only actions followed: one untargeted snapshot (recovery, see below), one targeted snapshot of the Save button (Save disabled, console 3/0), one screenshot (`t4-04`) and one untargeted snapshot (expanded tree, console 3/0).

### Coordinate click that did not expand Options (recorded)
- `browser_mouse_click_xy` at **(928, 764)**, the Options row's chevron position after one wheel scroll. Console 2/0 before and after. Result: the grid view moved, the `Options` row was selected and stayed **collapsed** (t4-03). No value was edited. This was the single coordinate attempt for the Options field.

### Recovery and deviations (recorded)
- A targeted snapshot of ref `e811` (the Collections tree) returned **"Ref e811 not found"** after the Options click. One fresh **untargeted** snapshot was taken (recovery allowance 1 of 1 for this step). No other recovery snapshot was taken.
- One mouse-wheel call (deltaY 300, view only) was used to bring the Options row into view.
- The Designer's Details panel was expanded with its Expand Panel control (layout change only).
- The Designer tab's Form tab for MockInventory was **not closed** (see Final state).

### Final state of T4 first task (superseded by the T4 continuation: MockInventory was closed there)
- Designer tab selected. Two Form tabs are open: `MockLoginIDO` (not selected, clean, as before T4) and `MockInventory` (selected, clean, Save disabled in the last read).
- Details panel expanded; Collections tab selected; `Primary Collection: MockInventory` expanded (view state only); the `Options` row selected in the properties grid, collapsed. The description area shows the Options label and an empty description textbox, which was not edited.
- No menu, dialog, list or editor open. No unsaved change observed.
- The Designer console reads **3 errors / 0 warnings**.
- The Web Client tab was not used in T4 and its console was not read. Its five pre-existing Form tabs were not touched.

### Acceptance check status after T4
- AC-1 (T4 part): **met** for the T4 start (sources reviewed, session usable, User scope, starting Form `MockLoginIDO` recorded clean, console baseline recorded).
- AC-2 (MockInventory): **partly met**. Recorded: Form type `Normal`, name, caption (blank), collections (primary IDO `MockInventory`, table `MockInventory` with alias `mock_inv`, no secondary), and 36 IDO property names. **Not recorded:** the Components tree, UserControl references, Event Handlers, Variables, the collection Options and filter, and the Form script (T5 scope).
- AC-5: no overrun of the T4 boundary. The MockInventory Form is still open because the close needs clicks that the console-error rule prohibits; this is a stop, not an accidental change.

### T4 screenshots
| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-128/t4-01-mockinventory-opened.png` | MockInventory tab selected beside MockLoginIDO; Form Type `Normal`; Is Master `True`; Caption blank; Save greyed; status bar with User scope and the account name (visible in the image, not written here) | The components tree; the collections; Save after later actions |
| `evidence/EXP-128/t4-02-mockinventory-collections-properties.png` | Collections tab: `Primary Collection: MockInventory` selected; General group shows Collection `MockInventory`; Base Table and Alias truncated ("...is Mo..."); Save greyed | Options contents; the full Base Table text (the snapshot gives it); the console state |
| `evidence/EXP-128/t4-03-mockinventory-collection-options-check.png` | After the Options click and grid scroll: Options selected and collapsed; Collection Name, Custom Load Method, Method Parameters and Read Mode blank; Save greyed | Options contents; the left-tree expander (not yet clicked) |
| `evidence/EXP-128/t4-04-mockinventory-blocked-console-rise.png` | State after the console rise (3/0): `Primary Collection: MockInventory` expanded, showing the first IDO property names (down to `ID`); Save greyed; no dialog | The cause of the console rise; the remaining 30 property names (read from the accessibility snapshot, not from this image) |

Note: `t4-01` to `t4-04` show the signed-in account name in the status bar. The record uses `<signed-in user>`. The images are not redacted; the operator decides whether they need redaction before sharing.

### Limitations (T4)
- Components, UserControl references, Event Handlers, Variables: not read (task stopped).
- Options and the collection filter: not exposed; not read.
- Form Type `Normal` is shown without a template row.
- The properties grid's Appearance, Behavior, Help and Layout groups were not expanded.

## T4 continuation (task fd81c666, operator disposition 2026-10-23)

### Gate for this task
- AGENTS.md re-read (full, 130 lines) and the T4 part of this record read before any browser action. No guide was re-read.
- Tab list before any selection: **2 tabs**. Tab 0 = Designer (`designer/default.aspx?MGForm=MockInventory`, current); tab 1 = Web Client (`favoriteContext=MockLoginIDO`). Tab 0 was then selected explicitly and a fresh untargeted snapshot taken.
- Starting state matched the expected state given by the operator: **MockInventory** selected and clean (Save disabled); MockLoginIDO also open; scope `[ ScopeType: User / ScopeName: <signed-in user> ]`; Details on the Collections tab; `Primary Collection: MockInventory` expanded; `Options` collapsed; no dialog, menu or list open.
- Designer console at the start: **3 errors, 0 warnings**. This is the baseline set by the operator disposition below.
- **Operator disposition applied.** The operator reviewed the 2-to-3 rise (at the coordinate click on the tree chevron, T4 first task) and attributed it to a client-side `visibilityMode` TypeError in `res/Designer/app.js`. The operator treats it as non-blocking and sets 3 as the current baseline. The worker did **not** read or inspect the console log; the attribution is the operator's and is not verified by the worker. Rises during expand or scroll operations attributable to the same TypeError are permitted to be documented; no such rise occurred in this continuation.
- No session expiry, sign-in page, logout card, "The server event processing returned an error" message, "Logout Successful" or identified HTTP 4xx/5xx was seen.

### Collections: Options and filter (not resolved)
- Screenshot `t4-05` (taken at the start of this task) shows the Collections panel as it was: Primary Collection expanded, IDO property rows `_ItemId` to `ID` visible, the properties grid at the top with Options below the fold, Save greyed.
- Not repeated: the Options row (`Options` treeitem) was not clicked again, and the chevron coordinates (928, 764) and (278, 722) were not used again. No coordinate click was made in this continuation.
- The earlier grid-level `Expand` control revealed three groups, `Standard Operations`, `Advanced Options` and `Selection`, which appear directly after `Options` in the flat accessibility list. Whether they are children of Options is **unverified**. No filter row was exposed. **Options contents and the collection filter remain unresolved** (not accessible through the rendered UI in this task).

### Components tab (blocked)
- Click on the `Components` tab (ref `e411`): executed; console 3/0 before and after. The tab is selected.
- Screenshot `t4-06`: the Details body is **blank** under the Components tab (no grid rows drawn). The accessibility tree shows the column header row (Name, Type, Data Source, Pane, Container, Tab, Event to generate, Component Class, Enabled When, Visible When, Required When) and an **empty tree with no rows**. A targeted read of the panel returned only the heading; an untargeted snapshot gave the same empty tree. A 3-second wait and a re-read gave the same result.
- Attempt 1: `Expand` control of the Components grid (ref `e895`) from a fresh snapshot: **timed out** after 5 s. The log reports that the Details body (`panel-2199-body`) and the `Event Handlers` tab span intercept the pointer events, so the control is covered. Recovery: one fresh untargeted snapshot (recovery allowance used 1 of 1; no other recovery read). Attempt 2: the same reference from the fresh snapshot, as the one corrected attempt: **timed out again** with the same interception. Not retried.
- Consequence: **no component rows are readable for MockInventory** (no name, type, parent region, binding, event, Visible When or Enabled When). Whether MockInventory has a UserControl is **unknown**. The canvas (`t4-01`, `t4-06`) shows labelled fields and a grid (ID, Item, Description, Warehouse, Quantity On Hand, Reorder Level, Location) and no visible user-control area. This is a visual observation of the canvas only, not a structure read.
- No UserControl component was readable, so **no user-control reference dialog was opened** in this continuation.

### Event Handlers (read; no rows)
- Click on the `Event Handlers` tab (ref `e413`): executed; console 3/0.
- Grid columns: `Sequence`, `Response Type`, `Disabled`, `Response Parameters`. **No rows.** Screenshot `t4-07`: Details body blank. Event Handler groups and rows: **none readable** in this task. Whether none exist, or the grid does not render rows, is **unresolved**.

### Form Variables (read; no rows)
- Click on the `Variables` tab (ref `e414`): executed; console 3/0.
- Grid column: `Name` only. **No categories and no variables were rendered or exposed.** Screenshot `t4-08`: Details body blank. Categories and variables: **none readable**. Unresolved.
- For comparison, the MockLoginPortal Variables tab in T2 showed three categories (Form - Persistent, Global - Persistent, Global - Temporary). The MockInventory difference is recorded as shown; its cause is not established.

### Hypothesis (unverified, not a finding)
- The three blank Details tabs (Components, Event Handlers, Variables) appeared after the Collections tree had been expanded, which is also when the Designer console rose from 2 to 3. A link to the operator's `visibilityMode` TypeError is a hypothesis only. The worker did not establish a cause and did not read the log.

### Closing MockInventory (done)
- Click on the MockInventory Form-tab close control (ref `e250`, from the latest snapshot): executed. **No save prompt appeared** (Save was disabled). The Designer returned to `MGForm=MockLoginIDO`; console 3/0.
- MockLoginIDO was not clicked; it remains open and clean (Save disabled). The Web Client tab was not used.

### Result of T4 (after the continuation)
- MockInventory is **closed**. T4 is **not complete**.
- Recorded: Form type `Normal`, Is Master `True`, caption blank, Primary Collection `MockInventory` (table `MockInventory`, alias `mock_inv`), 36 IDO property names, and the blank collection rows.
- **Not recorded (blocked or empty):** the collection Options and filter; the Components tree (empty); any UserControl and its reference dialog (none readable); Event Handlers (no rows); Form Variables (no rows).
- **Blocker for the operator:** the Components, Event Handlers and Variables panels render blank for MockInventory after the Collections expansion, and the Components expander is covered by the Details tab bar. This is a suspected Designer rendering problem (possibly the same client-side error; unverified). Recovery needs an operator decision (for example, a Designer reload, which the worker is not authorized to perform, or acceptance of these gaps).

### T4 continuation screenshots
| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-128/t4-05-mockinventory-collections-options-state-resumed.png` | MockInventory tab selected; Collections tab; Primary Collection expanded with IDO property rows; Save greyed; User scope; status bar with the account name (not redacted) | Options contents; the filter |
| `evidence/EXP-128/t4-06-mockinventory-components-tree.png` | Components tab selected; Details body blank; Save greyed | Any component (none rendered) |
| `evidence/EXP-128/t4-07-mockinventory-event-handlers.png` | Event Handlers tab selected; Details body blank; Save greyed | Any Event Handler row (none rendered) |
| `evidence/EXP-128/t4-08-mockinventory-variables-empty-grid.png` | Variables tab selected; Details body blank; Save greyed | Any variable or category (none rendered) |

Note: `t4-05` to `t4-08` show the signed-in account name in the status bar. The record uses `<signed-in user>`; the images are not redacted, and the operator decides on sharing.

### Acceptance check status after the T4 continuation
- AC-1 (T4 part): met (sources re-read; session usable; User scope; starting Form MockLoginIDO clean; console baseline recorded as 3 by the operator disposition).
- AC-2 (MockInventory): **partly met**. Form type, caption, collections (primary only), 36 IDO property names recorded. **Not met:** Components tree, UserControl references, Event Handlers, Variables, and the collection Options and filter. The MockInventory Form script (T5) was not part of this task.
- AC-5: no change, save or create; the MockInventory close was answered by no save prompt; no dialog left open.

### Procedural qualifications (this continuation)
- Two action timeouts on the same covered reference (`e895`); the second was the one corrected attempt after the one fresh untargeted recovery snapshot. Not retried further.
- One targeted read (`e405`) returned only a heading; it was a read and changed nothing.
- **Worker-written file outside the permitted directory:** the snapshot `evidence/playwright/t4-components-snapshot-check.yml` was written because the worker passed a `filename` argument to `browser_snapshot`. The brief permits writes only under `evidence/EXP-128/` and this record. The file is harmless read output, but it is outside the permitted scope. The worker has no delete tool; the operator may remove it.
- No coordinate click, wheel scroll, typing or key press was used in this continuation.

## T4 completion attempt (task 893366b8; operator-authorized recovery at the start of T5)

Label note: the harness header of this task read `task=T6`, but the bounded instruction said "execute only T5, including the T4 structural recovery" and "stop after T5 and report the next step, T6". The bounded instruction was followed. The T4 recovery is recorded here; T5 is recorded in its own section below.

### Gate
- AGENTS.md re-read (full) and the T4 and T5 parts of this record read before any browser action.
- Tab list before selection: **2 tabs** (tab 0 Designer `MGForm=MockLoginIDO`, current; tab 1 Web Client). Tab 0 selected, then a fresh untargeted snapshot.
- Starting state: MockLoginIDO only in the Designer Form strip, clean (Save disabled), User scope `[ ScopeType: User / ScopeName: <signed-in user> ]`, no dialog, console **3 errors / 0 warnings**. This matches the operator's baseline (3). MockInventory was **not** open (it had been closed at the end of T4 continuation), so the operator's expected state "MockInventory already open" did not hold; the task then reopened it, as the bounded instruction allowed.

### Reopen of MockInventory (Designer Form menu recent entry)
- Form menu button (`e3`) clicked: console 3/0. Fresh snapshot: recent list begins `MockInventory` (`e480`); the list order had changed.
- Click on `MockInventory` (`e480`): executed; console 3/0. The URL became `MGForm=MockInventory`. The Properties panel shows Name `MockInventory`, Form Type `Normal`, Is Master `True`, Caption blank.
- **Observed rendering problem (not resolved):** the Form tab strip lists **only `MockLoginIDO`** (not selected), the canvas is **blank**, and the tab panel carries the class `mg-landingpage`. The Details panel is collapsed. Screenshot `t5-01`.

### Details panels (inaccessible)
- Details expand control (`e642`), fresh reference from a snapshot: **timed out** twice (before the F5 reload, and as the one retry after it). The log says the control is intercepted by the Form tab panel (`mgformtabpanel-1132-body`, class `mg-landingpage`) and by the `MockLoginIDO` form tab (`FormTab_MockLoginIDO`) subtree.
- Components, Event Handlers and Variables could **not be displayed at all** in this task, so they are recorded as **inaccessible**, not as empty. Per the instruction, an empty rendered panel is not proof of absent definitions; here the panels were not displayed.
- Collections Options and filter: not read (no Details access). No coordinate click was used. No Collections node was expanded.
- The UserControl check and the user-control reference dialog: not reached. **Whether MockInventory has a UserControl remains unknown.**

### Pre-reload check (instruction-required)
- Save disabled on the visible Form (snapshot `e15` disabled); no dialog, menu or editor open; console 3/0. The only Form tab in the strip was `MockLoginIDO` (clean at the task start). The check was done before the reload.

### Single F5 reload (operator-authorized, executed once)
- `browser_press_key` **F5** executed once (console 3/0 before). Waited 8 s. Fresh snapshot: the URL, the tab strip (MockLoginIDO only), the blank canvas, the collapsed Details control (`e642`), Save disabled, and console **3/0** were all **unchanged**. **The reload could not be confirmed** (no change in URL, console count, or rendering). No second reload was made, per the instruction.
- No sign-in page, logout card, session-expiry modal, "Logout Successful" or "The server event processing returned an error" was seen before or after F5.

### One retry of the Details inspection (after F5)
- `e642` retried once: **timed out** with the same interception. Not retried again. Result: the three Details panels are **inaccessible** in this task.

### Designer state after the T4 recovery (before the T5 editor)
- Designer scope User; console 3/0; the MockInventory URL with a blank canvas; the Form strip showing MockLoginIDO only.

### Acceptance (T4 completion)
- AC-2 (MockInventory): **still partly met**. Recorded in earlier tasks: type `Normal`, Is Master `True`, caption blank, primary collection `MockInventory` (table `MockInventory`, alias `mock_inv`), 36 IDO property names. **Not met:** Components tree, UserControl references, Event Handlers, Variables, Options and filter. The T4 gaps stand.

## T5 - MockInventory Form Script (blocked; no source copied)

### Entry and identity
- Edit menu opened (`e5`): console 3/0. The 18 entries were the same as in T1 (Undo, Redo, Copy, Cut, Paste, **Form Script**, Background Color, Component Class, Image, Property Class Extension, **Script**, Shortcut Menu, String, Theme, Validator, **Variable**, **Web User Control Assets**, Revert Global Object Definition).
- Entry used: **Edit > Form Script** (`e775`): executed; console 3/0. A dialog titled **`Script Editor`** opened (Compile Result panel, Options panel, OK, Cancel, Help, Download). The dialog exposes no Form name; identity relies on the URL `MGForm=MockInventory` and the Properties panel Name `MockInventory`. The script's own class name could not be read, so identity is **not confirmed from the source**.

### What was readable
- **The code area did not render.** Screenshots `t5-02` and `t5-03` show an empty white dialog frame at the top-left, and the accessibility snapshot exposed no code text (a find for `public` returned no match; a targeted dialog snapshot showed only the toolbar, the Compile Result header and the four buttons).
- Therefore **no method, parameter, IDO call, WSForm entry point, variable, event or API call was observed in the MockInventory script**. Nothing is recorded as a finding for it.
- The script may be empty, unloaded or un-rendered. The blank editor does **not** prove the absence of a script.

### Accidental change (recorded; not saved)
- After the Form Script entry opened the editor, the **Save** button (`e815` in the later snapshots) became **enabled**, and the **Regenerate Form** button (`e817`) also shows as enabled in the snapshot (both were disabled before the click). The accessibility tree still shows **Undo disabled**. In screenshot `t5-04` the Save icon is active; the Undo icon's rendering is ambiguous and is not counted as a change. The worker did not click Save, Undo, Regenerate or Ctrl+S. The change flag was **not** cleared.
- The cause is established only as "after Edit > Form Script was opened". Whether the editor itself marked the Form dirty is not known.

### Closing the editor
- Cancel (`e858`): **timed out** twice (the Script Editor window and its mask intercept the pointer). Recovery: one fresh untargeted snapshot (the recovery allowance for this error), then the window header control (`e822`, a window tool next to the dialog's own frame) clicked once: executed. The dialog closed. **No save prompt appeared.**
- Console 3/0 after the close.

### Result of T5
- The MockInventory Form Script copy **was not obtained**. `evidence/EXP-128/MockInventory-form-script.cs.txt` was written as a header-only file that states 0 source lines were copied (no invented text).
- Not done (not reached or inaccessible): the Web User Control assets (T7–T8), the global variables (T9), the IDO (T10), the runtime look (T11) and the MockLoginPortal script recovery (lines 78 to the end, which the operator preserved for a later bounded task before T12).

### Final state (T5)
- The Designer shows the **MockInventory** URL with the Form-level Properties panel (Name `MockInventory`) and a **blank canvas**. The Form strip lists **only `MockLoginIDO`** (clean as at the start; not the selected tab in the last snapshot).
- **MockInventory was not closed.** The brief's close step requires its Form-tab control, and that tab is not in the Form strip. Closing `MockLoginIDO` was not permitted, so no close was attempted. **The Form remains open with an accidental unsaved-change flag (Save enabled).** This needs the operator: a close answered with No, or the Designer reload the operator permits.
- No dialog, menu or editor is open. The console is 3/0. The Web Client tab was not used.

### Screenshots (T4 completion and T5)
| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-128/t5-01-mockinventory-reopened-recent-entry.png` | After the recent-entry reopen: Properties Name `MockInventory`, Form Type `Normal`; canvas blank; Form strip shows only `MockLoginIDO` | Components, Details, any canvas field |
| `evidence/EXP-128/t5-02-mockinventory-form-script-editor-open.png` | Script Editor frame open at the top-left; code area empty; Properties panel shows MockInventory | Any script line; the Form the editor belongs to |
| `evidence/EXP-128/t5-03-mockinventory-form-script-editor-after-wait.png` | Same empty editor after a 3 s wait | Any script line |
| `evidence/EXP-128/t5-04-designer-after-script-editor-close.png` | After the editor close: Save icon active (accessibility also shows Save and Regenerate enabled; Undo disabled); Form strip MockLoginIDO; Properties MockInventory; blank canvas | Which action set the change flag; the saved state |

Note: `t5-01` to `t5-04` show the account name in the status bar; not redacted. The operator decides on sharing.

## MockInventory retry (task bbc76dc0, after the operator's manual refresh, cycle 10)

Operator disposition recorded: both browser tabs were refreshed manually by the operator; the accidental MockInventory unsaved state from T5 was discarded without saving; the worker's F5 allowance is closed (no refresh in this task).

### Gate
- AGENTS.md re-read (full) and the T4/T5 parts of this record re-read before any browser action. No guide re-read.
- Tab list before any selection: **2 tabs** (tab 0 Designer `MGForm=MockInventory`, current; tab 1 Web Client `favoriteContext=MockLoginIDO`). Tab 0 selected; a fresh untargeted snapshot taken.
- Designer state: **MockInventory is the only Form tab in the strip** (the MockLoginIDO Form tab is no longer open after the refresh). Form Type `Normal`, Is Master `True`, Name `MockInventory`. Save **disabled**, Regenerate Form disabled, Undo disabled, no dialog or menu open, scope `[ ScopeType: User / ScopeName: <signed-in user> ]`.
- **Designer console baseline: 2 errors / 0 warnings** (new baseline after the refresh; the earlier 3 did not survive). The Web Client console was not read (not used).
- No sign-in page, logout card, session-expiry modal, "Logout Successful" or "The server event processing returned an error" at any point.

### Components tree (live, rendered; screenshot t5-05; fresh snapshot after the Components tab click)
All rows are the tree as rendered; the Components grid's Expand control was used once (view only) and worked in this task.
- `Pane (00)` (folder; pane blank) > `FormCollectionGrid` (type Grid; data source `objects`; pane 0; container blank; tab 0) > seven GridColumn children, all in pane 0 with container `FormCollectionGrid`:
  - `IDGridCol` (GridColumn, data source `object.ID`, tab 1)
  - `ItemGridCol` (`object.Item`, tab 2)
  - `DescriptionGridCol` (`object.Description`, tab 3)
  - `WarehouseGridCol` (`object.Warehouse`, tab 4)
  - `QuantityOnHandGridCol` (`object.QuantityOnHand`, tab 5)
  - `ReorderLevelGridCol` (`object.ReorderLevel`, tab 6)
  - `LocationGridCol` (`object.Location`, tab 7)
- `Pane (01)` (folder; pane blank) > fourteen controls, pane 1, container blank:
  - `IDStatic` (Static, tab 8), `IDEdit` (Edit, `object.ID`, tab 9)
  - `ItemStatic` (Static, tab 10), `ItemEdit` (Edit, `object.Item`, tab 11)
  - `DescriptionStatic` (Static, tab 12), `DescriptionEdit` (Edit, `object.Description`, tab 13)
  - `WarehouseStatic` (Static, tab 14), `WarehouseEdit` (Edit, `object.Warehouse`, tab 15)
  - `QuantityOnHandStatic` (Static, tab 16), `QuantityOnHandEdit` (Edit, `object.QuantityOnHand`, tab 17)
  - `ReorderLevelStatic` (Static, tab 18), `ReorderLevelEdit` (Edit, `object.ReorderLevel`, tab 19)
  - `LocationStatic` (Static, tab 20), `LocationEdit` (Edit, `object.Location`, tab 21)
- Total: **24 tree rows** (2 panes, 1 grid, 7 grid columns, 14 controls).
- **No UserControl component exists on MockInventory** (observed in the rendered tree). This resolves T4 open question 24 for this Form: no user-control reference dialog applies, so none was opened.
- Columns "Event to generate", "Component Class", "Enabled When", "Visible When" and "Required When" are **blank for every row in the accessibility tree**. These columns sit at the right edge of the grid (horizontal scroll); their blank values are read from the accessibility cells, not from a visible screenshot.
- **Limitation:** each component's Properties (Binding Type, Events, Visible When, Enabled When) was **not opened** in this task. The Data Source column shows the binding expression for the grid columns and Edit controls; Static controls have no data source.

### Event Handlers (live; screenshot t5-06)
- Grid columns `Sequence`, `Response Type`, `Disabled`, `Response Parameters`. **No rows rendered.** Form-level and component-level handler groups: none rendered. This is the rendered state only; it is not treated as proof that the Form has no handlers.

### Form Variables (live; screenshot t5-07 and t5-08)
- Categories rendered: **`Global - Persistent`** (expanded with the grid's Expand control) and **`Global - Temporary`** (present before the expansion; not reached in this task). **No `Form - Persistent` category appears for MockInventory.** This differs from MockLoginPortal (T2), which had Form - Persistent with three entries.
- `Global - Persistent` rendered entries (**35 names read**, in grid order): `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`, `gbgc_GradientTest1`, `gbgc_GradientTest2`, `gbgc_GradientTest3`, `IncludeBadgeStatusVar`, `IsDiagnosticsTimerElapsed`, `LoginFoundUser`, `lse_BackgroundQueue.MonthlyDay`, `lse_BackgroundQueue.Weekly`, `lse_DataTypeCode`, `lse_EventActionType`, `lse_EventChronoFrsLstInlineList`, `lse_EventChronoInlineList`, `lse_EventChronoNoInsteadInlineList`, `lse_MethodType`, `lse_MIMEType`, `lse_MonthlyDayVar`, `lse_OutputFormatInline`, `lse_OutputFormatInlineAll`, `lse_PreviewFormatInline`, `lse_PropertyTypeInlineList`, `lse_PropertyTypeNoSubInlineList`, `lse_TableTypeInlineList`, `lse_TableTypeNoPrimInlineList`, `lse_TimerInterval`, `lse_TimeZoneMonth`, `lse_UetDataType`, `lse_WBDateRange`, `lse_WBDrillColName`, `lse_WBFilterExpressionDateRangeVar`, `lsm1_CoreDocumentType`, `lsm1_CustomMethodNameVar`, `lsm1_DefaultReporType`.
- **Limitation:** the grid did not render any rows past `lsm1_DefaultReporType` (a view-only wheel scroll in the earlier attempt and no further scroll here). The remaining Global - Persistent names seen in the T2 list (`lsm1_DocumentationClass` to `vsv_WBKPINumGaugeSettings`) and the whole `Global - Temporary` category were **not read** here. Values were not read (T9 scope; credential names such as `MPUsername` and `MPPassword` are not in the rendered part).
- Form-level variable values: none (no Form category rendered).

### Form Script (retry; copy complete)
- Entry: **Edit > Form Script** (menu item ref e1494). The Script Editor rendered this time and exposed its full text.
- **Language: VB.NET** as displayed (`Option Explicit On`, `Imports`, `Namespace Mongoose.FormScripts`, `Public Class MockInventory`, `Inherits FormScript`). The MockLoginPortal script (T3) was C#; the two differ.
- **Content: a skeleton with no methods.** The class body contains only the comment `' Methods go here`. No method, WSForm.invoke target, IDO call (LoadCollection, InvokeIDOMethod, CallIDOMethod or IDO request), Form variable or generated event exists in the file. Imports `Mongoose.IDO.Protocol` and `Mongoose.Scripting` are present but unused in the file.
- Copy: `evidence/EXP-128/MockInventory-form-script.cs.txt` (**complete, 20 lines, verbatim**; replaced the header-only file from T5). Redactions: **0** (no credential value present). Screenshot `t5-09` shows the whole file in the editor.
- Closed with **Cancel** (ref e1691): no save prompt; console 2/0.
- What this does not prove: the file as displayed is the whole Form Script; it does not show that the Form has no other script, and no compile or run was done (out of scope).

### Accidental change (recorded; not saved)
- After **Edit > Form Script** was opened and cancelled, the **Save** button became enabled again (`e15` no longer disabled), as in the first T5 attempt. Regenerate Form is not clicked and was not observed as an action. **Not saved.** The flag remains until the Form is closed with No.

### Screenshots (retry)
| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-128/t5-05-mockinventory-components-tree-expanded.png` | Components grid expanded: panes, grid, grid columns (rows at the top of the list, Name to Location) in the lower Details panel; Save greyed; User scope | The right-hand Enabled/Visible/Required columns (cut off); the Pane (01) rows below the fold |
| `evidence/EXP-128/t5-06-mockinventory-event-handlers.png` | Event Handlers tab: four column headers, no rows | Whether any handler exists in other groups |
| `evidence/EXP-128/t5-07-mockinventory-variables-expanded.png` | Variables tab: Global - Persistent expanded, first four names visible | Any name after `gbgc_GradientTest1`; Global - Temporary |
| `evidence/EXP-128/t5-08-mockinventory-variables-global-persistent-scrolled.png` | Variables after a view-only wheel scroll: the same first names; the grid did not move the visible rows | The remaining names (not reachable in this view) |
| `evidence/EXP-128/t5-09-mockinventory-form-script-editor-rendered.png` | Script Editor with the full 20-line VB.NET source; Compile Result panel collapsed; OK, Cancel, Help, Download buttons | Any compile result; any other script |

Note: the status bar of `t5-05` to `t5-09` shows the signed-in account name; the record uses `<signed-in user>`. The images are not redacted; the operator decides on sharing.

### Acceptance (MockInventory, after the retry)
- AC-2 (MockInventory): Form type `Normal`; caption blank; primary collection `MockInventory` (table `MockInventory`, alias `mock_inv`) with 36 IDO property names (T4); Components tree **recorded (24 rows, no UserControl)**; Event Handlers **recorded as empty**; Form Variables **partly recorded** (Global - Persistent 35 of ~48 names; Global - Temporary not read; no Form category); Form Script **copied verbatim (complete, VB.NET skeleton, no methods)**.
- AC-1 gate for this task: met.
- AC-5: MockInventory closed in this task (see "Closing" below).

### Closing MockInventory (this task)
- Close control: the Form tab's `closable MockInventory` button (ref e247, fresh snapshot). The click did **not** close the tab directly: the Designer raised the save prompt **"Form MockInventory has changed. Do you want to save the form definition?"** (alertdialog; buttons Yes (focused by default), No, Cancel).
- Answered **No** (ref e1704, from a fresh snapshot). Yes and Cancel were not used. Nothing was saved. The Designer returned to `designer/default.aspx` with no Form open; console 2/0; a find for "has changed" returned no match.
- The accidental change was caused by opening and cancelling **Edit > Form Script** (the Save button became enabled after that; not clicked). Recorded; the prompt confirmed the change flag; No discarded it.
- Net effect on MockInventory: none saved; the Form definition is unchanged by this task.

## T6 - MockInventoryDashboard structure (partial checkpoint, task bbc76dc0)

### Gate and open
- Designer: no Form open at the gate (`default.aspx`), Save disabled, console 2/0. Form menu recent entry `MockInventoryDashboard` clicked (executed); URL `MGForm=MockInventoryDashboard`; console 2/0.
- **Exact Form name (confirmed from the Designer Properties Name row): `MockInventoryDashboard`** (the operator's note "MockIventoryDashboard" is a misspelling).
- Properties: Name `MockInventoryDashboard`; Description blank; Caption blank; Version `User version for user <signed-in user>`; Device Type `Default`; **Form Type `Normal`**; Is Master `True`. Save disabled. Designer opened on the Form canvas, which is **blank** (no visible component rendered on the canvas; the UserControl is not drawn).
- Form type note: the Form shows `Normal` (same as MockInventory and MockLoginIDO); it is not `Flex` (MockLoginPortal, T2) as far as the Properties show. No template row is shown.

### Details > Collections (observed)
- One row: **`Primary Collection: MockInventory`**. No secondary collection row.
- Primary Collection General group (row selected, not expanded): Collection `MockInventory`; Base Table and Alias "The primary table and its alias for this IDO is MockInventory mock_inv"; Collection Name, Custom Load Method, Method Parameters, Read Mode blank; `Options` collapsed (not expanded; filter not read). Same as MockInventory (T4).

### Details > Components (observed; screenshot t6-01)
- After the grid's Expand control (view only): `Pane (00)` (folder) > **`userControl1_USER`** (type **UserControl**; pane 0; container blank; tab 0). Screenshot t6-01 shows userControl1_USER indented under Pane (00).
- Total: **2 rows** (Pane (00), userControl1_USER). **One UserControl** on this Form, the same component name as MockLoginPortal's (T2), with no secondary components.
- Its Properties, Binding, Specific Attributes (User Control Name), and the Edit User Control References dialog were **not read** in this checkpoint (see next step).

### Not yet done (T6 remainder)
- userControl1_USER Properties (Component tab) and its User Control Reference dialog (Cancel after reading).
- Details > Event Handlers and Details > Variables (categories and entries).
- Edit > Form Script (Edit menu, read verbatim to `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt`), then Cancel.

### Acceptance (T6, checkpoint)
- AC-2 (dashboard): Form type `Normal`; primary collection `MockInventory`; Components tree recorded (2 rows, 1 UserControl); Event Handlers, Variables and Form Script **not yet read**.

### Closing MockInventoryDashboard (this task)
- Closed through its Form-tab control (`closable MockInventoryDashboard`, fresh snapshot ref e1751). **No save prompt appeared** (the Form was clean: Save disabled before the close). Designer back on `default.aspx`; a find for "has changed" returned no match; console 2/0.
- Nothing saved; no Form definition changed in this task.

### Worker-written files (task bbc76dc0)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: MockInventory retry section, closing of MockInventory, T6 checkpoint, T6-to-T12 pending section, this audit).
- `evidence/EXP-128/MockInventory-form-script.cs.txt` (overwritten: now the complete 20-line VB.NET source of MockInventory's Form Script; **0 values redacted**).
- `evidence/EXP-128/t5-09-mockinventory-form-script-editor-rendered.png` (new).
- `evidence/EXP-128/t6-01-mockinventorydashboard-components-tree.png` (new).
- Not written: no `MockInventoryDashboard-form-script.cs.txt`, no assets, no `global-script.cs.txt`.
- Tool-written (not worker-authored): `evidence/playwright/page-*.yml` and `console-*.log` produced automatically by the browser tool. No `filename` argument was passed to `browser_snapshot` in this task.

### Action audit (task bbc76dc0; exact)
Executed in this task:
- Tab select: **1** (Designer, index 0). Explicit tab listings: **1** (before the select, at the start of the task). Tab listings cumulative: previous 6 + 1 = **7**.
- Clicks executed: **13** (Components tab; Edit menu; Form Script; Script Editor Cancel; MockInventory close; save-prompt No; Form menu; MockInventoryDashboard recent entry; Details Expand; Primary Collection row; Components tab (dashboard); Components grid Expand (dashboard); MockInventoryDashboard close).
- Clicks attempted but not executed (`Ref not found`, no action taken): **2** (dashboard Components tab, first attempt; dashboard close, first attempt). Attempted clicks total: **15**.
- Key presses, typing, hover, coordinate clicks, mouse wheel, drags: **0**.
- **Executed browser actions in this task: 14** (13 clicks + 1 tab select).
- Timeouts in this task: **0**.
Read-only calls in this task:
- `browser_snapshot`: **16** (all succeeded; 1 of them was a targeted read that returned a heading-level subset; several targeted reads were used for panel views).
- `browser_find`: **6** ("Form Script"; "Save changes"; "closable"; "save"; "has changed" x2).
- `browser_take_screenshot`: **2** calls, **2 files** (`t5-09`, `t6-01`).
- `browser_wait_for`: **0**.
- Repository and file reads: AGENTS.md (1, full); the record (2 Greps); PNG reads (`t5-05`, `t5-06`, `t5-07`, `t5-08` from the previous task, and `t5-09`, `t6-01` new, plus the Script Editor and file re-reads: 7 PNG reads total); 1 Read of the existing `MockInventory-form-script.cs.txt` before the overwrite.
**Cumulative browser actions T1 to bbc76dc0 (executed):**
- Clicks by reference: previous 55 + 13 = **68**.
- Coordinate clicks: **3** (T2 1; T4 first task 2). Hover **1**. Mouse moves **5**. Mouse wheel (view only) **16** executed (plus 1 denied in T3).
- Tab selects: previous 7 + 1 = **8**. Key presses **3**. Typing **1**.
- **Browser actions executed, cumulative: 105** (previous 91 + this task 14).
- Action timeouts (not executed), cumulative: previous 8 (no new timeouts). Click-level `Ref not found` (not executed): **2** in this task.
- Snapshot calls, cumulative: previous 74 + 16 = **90**; `Ref not found` for snapshots: **4** in total (none in this task).
- Finds, cumulative: previous 18 + 6 = **24**.
- Screenshot calls, cumulative: previous 47 + 2 = **49**, **48 files** written under `evidence/EXP-128/`.
Prohibited or out-of-scope actions (this task): **none**. No Save click, no Ctrl+S, no OK/Apply on any dialog, no Delete, Regenerate, Unload, Revert, Check-In or Undo, no component edit or drag, no compile or run, no runtime interaction, no sign-in, no navigation, no refresh or reload. The one Script Editor close used Cancel; the save prompt was answered **No** (Yes not used).
Accidental unsaved change: **observed on MockInventory after Edit > Form Script** (Save enabled); **discarded with No** when the Form was closed. Not saved.
Session expiry, sign-in, server-event error, logout card: **none**. Console (Designer): **2 errors / 0 warnings** at every reading in this task, for both MockInventory and MockInventoryDashboard (the new baseline after the operator's refresh).

### Stop state (end of this task)
- Designer on `designer/default.aspx`; **no Form open**; no dialog, menu or editor open; Save disabled; console 2/0. The Web Client tab was not used; its console was not read.
- The bounded instruction asked to continue to T6 onward; the dashboard checkpoint is the furthest point reached. T6 is **partly complete** (structure and collections recorded; UserControl properties, reference dialog, event handlers, variables and form script not read). The next permitted step is T6's remainder, starting with a Designer gate, then the dashboard's `userControl1_USER` properties and its user-control reference dialog (Cancel after reading).

## T6 completion - MockInventoryDashboard (continuation task, worker session f6a97a00; bounded instruction: remaining T6 only)

### Gate
- Tabs listed (read-only) before the first select. Designer tab (index 0) selected. Console 2 errors / 0 warnings (baseline for the Designer tab). Save disabled. No Form open at the start of the continuation, no dialog.
- Form reopened in this task through the Form menu recent entry (User scope: `[ ScopeType: User ]` in the status bar). Form identity re-confirmed from the Form tab heading `MockInventoryDashboard` and the bbc76dc0 Properties read (Form Type `Normal`, Is Master `True`).

### userControl1_USER (Component tab; Properties read view-only)
Properties groups expanded with the Properties toolbar expand control. Observed values:
- Design: Name `userControl1_USER`; Description blank; Caption blank; Type `UserControl`; From Device Master `True`.
- Appearance: Theme Class blank; Background Color blank; Foreground Color `#000000`; Bitmap File Name blank; Font blank; Justification blank.
- Behavior: Read-Only/Disable `False`; Tab Read-Only Field `False`; Hidden `False`; No Tab Stop `False`; Auto Complete `False`; Breadcrumb blank.
- Data Source: **Binding Type `None`**; Binding blank; Required `False`; To Be Determined `False`; Upper or Lower Case `Mixed`; Default Value, Data Type, List Source, Validation, Formatting blank.
- Dynamic Enabling and Disabling: **Enabled When blank; Required When blank; Theme Class When blank; Visible When blank.**
- Events: Primary blank; Data Change blank; Lose Focus blank; Gain Focus blank; Drag From Events `0 event(s)`; Drop On Events `0 event(s)`. **No event is set on this component.**
- Help: ToolTip blank; Help Context ID `0`; Help File Name blank.
- Inheritance: Component Class blank; Component Class Parameters blank; Set Class From `This Component's Attribute`.
- Layout: Unit `Char`; Size `150; 50`; Location `-0.722222222222222; -1.25`; Glue, Containment blank; Tab Order `0`; Order blank.
- Miscellaneous: Extension Properties blank; Group `False`; Need Right-Click `False`; Free-Form Data Type blank.
- **Specific Attributes > User Control Name = `V(UserCtrl_userControl1_USER)`.** The row was expanded by one coordinate click at (1596, 784) after the row was selected (recorded below in the audit). The User Control Name value is a variable reference, not the URL itself.

### Edit User Control References (opened once, closed with Cancel)
- Opened from the User Control Name ellipsis (fresh ref e1439). Fields as shown: **Use Web Control** checked; **Control URL `MockInventory/index.html`**; Windows section: Assembly / Class `<Not Applicable>`; Web section: the **Web User Control Asset** radio shows a filled dot; the radios are disabled, so the URL-type state is not exposed beyond that dot.
- Closed with **Cancel** (ref e1541). Observation: after this Cancel the browser address readout changed to `designer/default.aspx` while the Form tab stayed open; a fresh snapshot showed the Form still present, Save disabled and no save prompt. Recorded as an observation only.

### Details > Event Handlers (Form level, read view-only)
- Group **StdFormPredisplay** (2 rows):
  - Row 0: Response Type **Collection Refresh**; the flag column shows `false`; the parameter column shows `object`.
  - Row 1: Response Type **Form Script Method**; the flag column shows `false`; Response Parameters **`LoadInventoryFromIDO()`**.
- The column headings for the flag and parameter values were not re-read in this step; their meaning is unverified.
- Observed: the Form's pre-display event calls the Collection Refresh and then the C# method `LoadInventoryFromIDO()` (see the Form Script below). The link from the Web User Control JavaScript to this event is not read (T7/T8).

### Details > Variables (read view-only)
- **Form - Persistent** (5 entries): `fds_SC2` (value not read); `InitialCommand` = `FilterInPlace`; `UserCtrl_userControl1_USER` (value not read); `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)`; `UserCtrlUrl_userControl1_USER` = `URL(METADATA()MockInventory/index.html)`. For the entries whose attribute rows were read, Persistent is `True` and Global is `False`.
- **Global - Persistent** (group header visible): 30 names listed in the snapshot, from `ccvw_OutputFormatInlineAll` to `lse_WBDateRange` (for example `ccvw_PrinterName`, `gbgc_bg`, `gbgc_GradientTest1..3`, `IncludeBadgeStatusVar`, `IsDiagnosticsTimerElapsed`, `LoginFoundUser`, `lse_BackgroundQueue.MonthlyDay`/`.Weekly`, `lse_DataTypeCode`, `lse_EventActionType`, `lse_EventChrono*`, `lse_MethodType`, `lse_MIMEType`, `lse_MonthlyDayVar`, `lse_OutputFormatInline`/`InlineAll`, `lse_PreviewFormatInline`, `lse_PropertyType*`, `lse_TableType*`, `lse_TimerInterval`, `lse_TimeZoneMonth`, `lse_UetDataType`). Values not read here (T9). Whether the grid holds rows below `lse_WBDateRange` was not checked.
- **No Form - Temporary group** is shown between the two groups in the tree. Whether such a category exists elsewhere was not verified.
- **`vInventoryJson` (written by the Form script) does not appear in the Form - Persistent list.** Open question (see below).

### Edit > Form Script (C#; copy verbatim)
- Entry: Edit menu (ref e5), then **Form Script** (ref e2206). The editor is titled **Script Editor** (Script tab). Language: **C#** (`using System;` ... `namespace Mongoose.FormScripts` / `public class MockInventoryDashboard : FormScript`). This differs from the MockInventory script (VB.NET, no methods).
- Full text copied verbatim (59 lines): **`evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt`**. The copy is assembled from eight accessibility snapshots during view-only wheel scrolling (lines 1 to 59; the last line is blank). Indentation is not exposed by the accessibility text and is absent from the copy. **0 values redacted** (no credential in the script).
- Content, observed:
  - Method: **`public void LoadInventoryFromIDO()`** (no parameters). It is the only method. A WSForm.invoke can target it (see the Event Handlers row 1).
  - IDO call: **`IDOClient.LoadCollection(idoName, properties, "", "", 100)`** with `idoName = "MockInventory"` and `properties = "Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse"`. The meaning of the two empty strings and of `100` is not shown in the script (unverified).
  - Reads `response.Items.Count` and `response.Items[i].PropertyValues[0..5].Value` into a `Dictionary<string, object>` per row, keyed by the six property names; rows go into `List<Dictionary<string, object>> inventory`.
  - Serializes with `JsonConvert.SerializeObject(inventory, Formatting.Indented)` (Newtonsoft.Json; `//<Ref>Newtonsoft.Json.dll</Ref>` comment).
  - **Form variable written: `ThisForm.Variables("vInventoryJson").Value = json;`**. No Form variable is read.
  - Events generated: none in the script.
  - Lines 53 to 55 are a commented-out `Application.ShowMessage(...)` debug call.
  - No error handling (no try/catch, no null checks).
- Editor closed with **Cancel** (ref e2585). A fresh snapshot after the Cancel showed no dialog; Save disabled.

### Screenshots (this task, continuation and pre-compaction part)
Descriptions of t6-02 to t6-09 come from the pre-compaction inspection of each image; they were not re-viewed in this step (only t6-10 was re-viewed).
- `t6-02-mockinventorydashboard-usercontrol-properties.png`: userControl1_USER Properties top groups (Design, Appearance, Behavior). Shows identity and the first property groups; does not show the Specific Attributes values.
- `t6-03-usercontrol-specific-attributes-row.png`: Specific Attributes row selected; Layout values visible; User Control Name not yet expanded.
- `t6-04-specific-attributes-after-coordinate-click.png`: Specific Attributes expanded; User Control Name `V(UserCtrl_userControl1_USER)`.
- `t6-05-dashboard-user-control-references-dialog.png`: Edit User Control References (Control URL `MockInventory/index.html`; the Web User Control Asset radio shows its filled dot). Proves the dialog fields; the URL-type state beyond the dot is not exposed.
- `t6-06-dashboard-event-handlers.png`: StdFormPredisplay group collapsed.
- `t6-07-dashboard-event-handlers-expanded.png`: rows 0 and 1 (Collection Refresh; Form Script Method `LoadInventoryFromIDO()`).
- `t6-08-dashboard-variables-form-persistent.png`: Form - Persistent expanded (the five Form variables).
- `t6-09-dashboard-form-script-editor-open.png`: Script Editor showing C# lines 1 to 33 (the top of the file).
- `t6-10-dashboard-form-script-editor-tail.png` (this step, viewed): Script Editor at the end-of-file scroll position, lines 26 to 58 visible (58 = the namespace closing brace; line 59 is cut off at the bottom edge). The image also shows the Properties panel and the status bar, which contains the signed-in account (not transcribed here). Proves the tail of the script text; does not prove compile or runtime behaviour.

### Closing MockInventoryDashboard (this step)
- Script Editor closed with **Cancel** (e2585), not OK. Fresh snapshot after the Cancel: no dialog.
- Form closed through its Form-tab control (**`closable MockInventoryDashboard`, ref e332**, taken from the fresh snapshot). **No save prompt appeared**: the Form was clean (Save disabled before and after the close). Finds after the close: `MockInventoryDashboard` (no matches; the tab is gone), `save` (only the toolbar Save button, disabled), `Script Editor` (no matches). Console 2/0 at every reading.
- Nothing saved; no Form definition, component, script, asset or variable changed. No accidental unsaved change was observed in this task.

### Acceptance (AC-2 for MockInventoryDashboard)
- Type `Normal`; Is Master `True`; primary collection `MockInventory` (no secondary); Components: 2 rows (Pane (00), userControl1_USER, UserControl); UserControl reference recorded; Event Handlers recorded; Variables recorded (Form - Persistent in full; Global - Persistent names only; Global - Temporary not read); Form Script copied verbatim (59 lines, 0 redactions).
- Gaps (not closed in T6): Global variable values (T9); whether `vInventoryJson` exists and in which category (not in Form - Persistent; Form - Temporary not shown); column headings of the Event Handlers rows; the meaning of the two `""` arguments and `100` in `LoadCollection`; the grid rows below `lse_WBDateRange`; the URL-type radio state.

### Worker-written files (this continuation task)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: this T6 completion section, a status note in the T6-to-T12 section, and the audit below).
- `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` (new; 59 lines; 0 redactions; a wheel-count correction was made in the same file).
- `evidence/EXP-128/t6-02-mockinventorydashboard-usercontrol-properties.png` through `t6-09-dashboard-form-script-editor-open.png` (8 PNG files, pre-compaction part of this task).
- `evidence/EXP-128/t6-10-dashboard-form-script-editor-tail.png` (new in this step).
- Tool-written, not worker-authored: `evidence/playwright/page-2026-10-23T07-39-31-188Z.yml`, `evidence/playwright/page-2026-10-23T07-39-37-914Z.yml` and similar snapshot files produced by the browser tool when it returns a snapshot link. No `filename` argument was passed to `browser_snapshot`.

### Action audit (continuation task; exact for this step, reconstructed for the pre-compaction part)
Pre-compaction part (reconstructed from the continuation summary; not independently re-verified):
- Tab select: 1 (Designer). Tab listings: 1.
- Clicks by reference: about 12 (Form menu; recent entry e297; Details expand; Components tab; Components grid expand; userControl1_USER row; Properties expand control e700; User Control Name ellipsis e1439; Cancel e1541; Event Handlers tab; Edit e5; Form Script e2206). A Variables tab click, if any, is not reconstructed.
- Coordinate click: 1 (Specific Attributes expand at (1596, 784)).
- Mouse wheel: 1 (Properties).
- Screenshots: 8 (t6-02 to t6-09).
This step (exact):
- Executed browser actions: **11** = 1 mouse move (to 800, 500) + 8 mouse wheel steps (1 of 300 px, then 7 of 1500 px; view only; the last step moved the view by 50 px only) + 2 clicks (Script Editor **Cancel** e2585; Form-tab close e332).
- Clicks executed this step: **2**; coordinate clicks this step: **0**; key presses: **0**; typing: **0**; drags: **0**; hover: **0**; timeouts: **0**; `Ref not found`: **0**.
- Read-only calls this step: `browser_snapshot` **12** (3 untargeted: start, before Cancel, after Cancel; 9 targeted to `e2281` (the Script Editor code area), one with bounding boxes); `browser_find` **3**; `browser_take_screenshot` **1**.
- Repository reads/writes this step: 1 Grep and 1 Read of the record; 1 Read of the screenshot t6-10; 1 Write (the dashboard copy); 1 Edit (the copy's wheel-count correction); 1 Edit (this record).
Totals for this task (continuation counted from the bbc76dc0 checkpoint):
- Executed browser actions this task: **26** (pre-compaction 15 = 1 tab select + 12 clicks + 1 coordinate click + 1 wheel; this step 11). Cumulative T1 to this task: previous 105 + 26 = **131** (one more if a Variables tab click is confirmed).
- Clicks by reference, cumulative: previous 68 + 14 = **82** (pre-compaction 12 reconstructed + 2 this step). Coordinate clicks, cumulative: previous 3 + 1 = **4**. Mouse wheel, cumulative: previous 16 + 9 = **25**. Mouse moves, cumulative: previous 5 + 1 = **6**. Tab selects, cumulative: previous 8 + 1 = **9**. Key presses cumulative: **3** (unchanged). Typing cumulative: **1** (unchanged).
- Snapshot and find counts for the pre-compaction part are not reconstructed. This step: snapshots 12 (previous cumulative 90 + 12 = **102**, excluding the unreconstructed pre-compaction reads); finds previous 24 + 3 = **27** (excluding the unreconstructed pre-compaction finds).
- Screenshot calls cumulative: previous 49 + 9 = **58**; PNG files under `evidence/EXP-128/`: previous 48 + 9 = **57**.
- Prohibited or out-of-scope actions in this task: **none** (no Save, no Ctrl+S, no OK/Apply/Compile, no Delete, Regenerate, Revert, Check-In or Undo, no component edit, no drag, no compile or run, no runtime interaction, no sign-in, no navigation, no refresh, no typing in any field).
- Session expiry, sign-in, server-event error, logout card: **none**.

### Stop state (end of T6)
- Designer on `designer/default.aspx`; **no Form open**; no dialog, menu or editor open (verified by the post-close finds and the untargeted snapshot); Save disabled; console 2/0. No unsaved change. The Web Client tab was not used.
- **T6 is complete** (MockInventoryDashboard). **The next permitted step is T7** (the Web User Control asset tree and the HTML pages, including `MockInventory/index.html` and `mocklogin/index.html`). T7 has not been started. The MockLoginPortal script recovery (lines 78 to end, see the T3 and T6-to-T12 sections) remains pending and is not part of this task.

## T6 to T12
Status note: the T6 completion section above supersedes the "Not yet done (T6 remainder)" items in the bbc76dc0 checkpoint. T6 is complete; T7 is the next permitted step.

Status note (T7 task, cycle 12): **T7 is complete** (Web User Control assets, HTML pages only). The T7 section records the asset tree, the two HTML copies and the WSForm/MG calls.

Status note (T11 task, cycle 16): **T11 is complete** (runtime look, no interaction). The three Forms were opened once each from the Web Client Form menu's recent entries, observed, and closed through their Form-tab controls. MockLoginPortal shows its own login card with empty fields (not signed in); MockInventory shows its detail form with one current record; MockInventoryDashboard renders its inventory UserControl with 14 records and auto-refreshes on its own. The T11 section at the end records the observations, screenshots, console counts (Web Client baseline 5 errors / 2 warnings, unchanged), the audit and the open questions. T12 synthesis is not started.

Status note (T10 task, cycle 15): **T10 is partly complete.** The Form `MockLoginIDO` was inspected (type, collections, components, event handlers, variables, Form Script copied). **The IDO definition behind it was NOT inspected.** Its primary collection is the IDO named `MockLogin` (not `MockLoginIDO`). The Designer's IDOs entry shows an empty IDO list without typing. The Web Client Filter In Place route was not run because this bounded task prohibits it. The T10 section at the end records the detail, the one unsaved-change flag (closed with No) and the open questions. T11 (runtime look) is the next planned phase; recovery work before T12 still outstanding: the MockLoginPortal Form Script lines 78 onward, the $app/scripts/UserControl.js block, and the IDO definition if the operator authorises the Web Client route.

Status note (T9 task, cycle 14): **T9 is complete** (global variables; read-only). The T9 section at the end of this file records the 54-row list, the vInventoryJson and SiteFormName flags, the absence of vMockLoginJson from the global list, and the redactions (none needed). The inventory file is `evidence/EXP-128/global-variables-inventory.txt`. T10 (MockLoginIDO metadata) is the next permitted task; the header of the T9 task said T12, but the bounded instruction said T9 only, so T9 was done and nothing later.

Status note (T8 task, cycle 13): **T8 is partly complete.** Three of the four directly referenced JavaScript and CSS assets were copied (`mocklogin/script/app.js`, `mocklogin/style/app.css`, `MockInventory/style.css`). `$app/scripts/UserControl.js` was **not** read: its Properties pane did not render (blocker, see the T8 section). The optional, unreferenced `MockInventory/script.js` was also copied. The T8 section at the end of this file has the details. T9 (global variables) is the next permitted task. The MockLoginPortal script recovery (lines 78 onward) is still pending before T12.

Pending. Not started in this task: T7 and T8 (Web User Control assets), T9 (global variables), T10 (MockLoginIDO), T11 (runtime look), T12 (synthesis). The MockLoginPortal script recovery (lines 78 to end) is also still pending. Earlier open items: the T3 copy (lines 78 to the end of `MockLoginPortal`) and the Edit > Script (global script) entry; the dashboard remainder above. (a) the T3 copy of `MockLoginPortal` lines 78 to the end, and the Edit > Script entry (global script); (b) the T4 gaps listed above. Operator decisions needed before T5: whether the T4 gaps are accepted or a Designer reload is authorized, and how the lines 78-to-end copy should proceed.

Next permitted step (T6, next task; the bounded instruction says stop after T5): first an operator decision on the MockInventory Form (open with the accidental unsaved-change flag; its tab is not in the Form strip) and on the blank Designer rendering (Details panels, Form script editor). Options for the operator: a Designer reload with a Save-disabled confirmation, or closing MockInventory through its Form-tab control with No to any save prompt. Only after that, a read-only Designer tab check (tab list, select, fresh snapshot: Save state, no dialog, console baseline 3). T6 (the dashboard Form `MockInventoryDashboard`, structure first) would follow, with the MockLoginPortal script recovery (lines 78 to the end) still pending for a later bounded task before T12.

---

## Action audit (T1 only; the cumulative audit through T2 is below the T2 files list)

Browser actions (mutating or interactive):
- Clicks: **9** (Designer toolbar button; Identify Your Editing Scope OK; Edit menu open; Edit menu close; Form menu open; Form menu close; Web Client toolbar Open; filter textbox focus; Cancel)
- Hover: **1** (Definition menu item, to expand its submenu)
- Tab selects: **2** (Designer tab; Web Client tab)
- Key presses: **2** (Control+A; Backspace)
- Typing actions: **1** (`Mock`, key by key, filter only)
- Browser actions total: **15**

Read-only tool calls:
- Tab listings: **1** explicit (task start). Tab lists also appeared inside the output of the Designer button click and the select calls.
- Snapshots (explicit `browser_snapshot`): **6**
- Finds: **5**
- Screenshots: **4** (`t1-01` to `t1-04`)

Repository and file reads (not browser): AGENTS.md, user-control.md, scripts.md (lines 1-130), variables.md, session-expiry recipe (5 reads); two Glob existence checks; two reads of Playwright snapshot files (40 and 30 lines); four PNG reads (verification of screenshots `t1-01` to `t1-04`).

Prohibited or out-of-scope actions: **none**. No Save, Ctrl+S, OK on any dialog except the scope confirmation, no Designer or runtime save, no edit to any component, no Delete, Regenerate, Unload or Revert click, no runtime click inside a Mock Form, no sign-in, no re-login, no navigation, no refresh.

Session expiry, sign-in, server-event error, console rise: **none**.

## Action audit (cumulative through T2)

Browser actions (interactive), T1 + T2:
- `browser_click` calls: **33** (T1 9; T2 24, of which 2 timed out before the corrected Form-menu click succeeded)
- Coordinate click (`browser_mouse_click_xy`): **1** (T2; the Specific Attributes chevron, once)
- Hover: **1** (T1; Definition submenu)
- Tab selects: **3** (T1 2; T2 1)
- Key presses: **2** (T1; Control+A, Backspace)
- Typing: **1** (T1; `Mock` in the Select Form filter)
- Mouse moves (hover positioning only): **3** (T2)
- Mouse wheel scrolls (view only): **6** (T2)
- **Browser actions total: 50** (T1 15; T2 35)

Read-only tool calls, T1 + T2:
- Tab listings (explicit): **2** (T1 1; T2 1)
- `browser_snapshot` calls: **33** (T1 6; T2 27, of which 1 returned "Ref e625 not found")
- `browser_find` calls: **13** (T1 5; T2 8)
- `browser_take_screenshot` calls: **26**, of which **25 wrote a file** (T1 4; T2 22 calls, 21 files; 1 T2 call timed out and wrote nothing)
- Repository and file reads in T2: AGENTS.md (first 60 lines), this record (1), one tool-written snapshot file (30 lines), 21 PNG reads (verification of T2 screenshots)

Failed or blocked actions, T2:
- Designer Form-menu button click timed out twice ("visible, enabled and stable"); recovered by a Designer tab select, a fresh snapshot and one corrected click (see T2).
- A screenshot timed out once in the same window (not retried).
- One targeted snapshot returned "Ref e625 not found" (recovered with one fresh untargeted snapshot).

Prohibited or out-of-scope actions (T1 + T2): **none**. No Save, Ctrl+S, OK, Apply or Delete in any dialog; no Designer or runtime save; no component edit or drag; no Regenerate, Delete Form Definition, Unload, Revert or Check-in action; no runtime interaction; no sign-in, re-login, navigation or refresh; no script opened (T3 not done); the Extension Properties and User Control Reference dialogs were both closed with Cancel.

Session expiry, sign-in, server-event error, console rise: **none**. Console (Designer tab): 2 errors / 0 warnings at every reading in T2.

Accidental unsaved change: **none observed.** Save stayed disabled in every Form screenshot.

## Action audit (cumulative through T3)

T3 executed browser actions (exact):
- `browser_tabs` select: **1** (Designer, index 0). Tab list: **1**.
- `browser_click` calls executed: **7** (Form menu; recent entry MockLoginPortal; Edit menu; Form Script menu item; dialog maximize icon `e684`; editor Cancel `e1037`; MockLoginPortal Form-tab close `e510`).
- `browser_mouse_move_xy`: **2** (view positioning over the editor).
- `browser_mouse_wheel`: **9 executed** (view-only scroll: 500; 2500; 3000; 15000; then 500 five times). **1 further call denied** by the harness (sixth identical consecutive call; not executed).
- Typing / key presses / hover / coordinate clicks in T3: **0**.
- **T3 browser actions executed: 19** (7 clicks + 2 moves + 9 wheels + 1 tab select).

T3 read-only calls:
- `browser_snapshot`: **10** explicit (8 successful; 2 returned "Ref not found": `e682`, `e1034`).
- `browser_find`: **2** ("Script Editor"; "MockLoginPortal").
- `browser_take_screenshot`: **9** (`t3-01` to `t3-09`); all 9 wrote files.
- Repository and file reads in T3: AGENTS.md (first 30 lines), one tool-written snapshot file (Grep for Edit menu entries), one tool-written snapshot file (Read of the Form menu), this record (before and after the edits).
- Repository writes in T3: 1 new `.txt` (`MockLoginPortal-form-script.cs.txt`), 9 screenshots, 1 record update (several edits).

**Cumulative browser actions T1 to T3 (executed):**
- `browser_click` calls: T1 9 + T2 24 + T3 7 = **40** (the T2 coordinate click is counted separately below).
- Coordinate clicks: **1** (T2).
- Hover: **1** (T1).
- Mouse moves (positioning): T2 3 + T3 2 = **5**.
- Mouse wheel (view only): T2 6 + T3 9 = **15** executed (plus 1 denied in T3).
- Tab selects: T1 2 + T2 1 + T3 1 = **4**.
- Key presses: **2** (T1).
- Typing: **1** (T1, Select Form filter `Mock`).
- **Browser actions executed, cumulative: 69** (T1 15; T2 35; T3 19).
- Explicit snapshots cumulative: T1 6 + T2 27 + T3 10 = **43** (one T2 "Ref not found"; two T3 "Ref not found").
- Finds cumulative: T1 5 + T2 8 + T3 2 = **15**.
- Screenshot calls cumulative: T1 4 + T2 22 (21 files) + T3 9 = **35 calls**, **34 files** written under `evidence/EXP-128/` (the failed T2 `t2-01-designer-form-menu-timeout-state` wrote nothing).

Prohibited or out-of-scope actions (T1 to T3): **none**. No Save (Designer or runtime), no Ctrl+S, no OK/Apply in any dialog or editor (the OK button of the scope dialog in T1 was the permitted one), no Delete, Regenerate, Unload, Revert, Check-In or Undo Check-Out, no component edit or drag, no compile or run, no Download click in the Script Editor, no Go-to typing, no runtime interaction, no sign-in, no re-login, no navigation, no refresh. The Compile/run icon of the Script Editor was not clicked.

Accidental unsaved change: **none** in T3 (Save disabled in every MockLoginPortal state checked: opening, after the editor, after the Cancel, after the close).

Console (Designer tab) at every reading in T3: **2 errors / 0 warnings**. No rise. No server-event error.

## Worker-written files (T3)

- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: status line, T3 section, T4-to-T12 pending line, cumulative audit through T3, file list, open questions).
- `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (new; PARTIAL copy, lines 1–77 of the Form script; redactions: 0 values; header lines state the partial status and the assembly method).
- `evidence/EXP-128/t3-01-form-script-editor-open.png` … `t3-09-designer-after-script-editor-cancel.png` (9 screenshots).
- No `global-script.cs.txt` (the Edit > Script entry was not opened).

## Worker-written files (T2)

- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: T2 section, audit, file list, open questions)
- `evidence/EXP-128/t2-01-designer-mockloginportal-opened.png` … `t2-21-designer-after-mockloginportal-close.png` (21 screenshots; full names in the T2 screenshots table)
- No `.txt` copies: T2 does not copy scripts or assets.
- The failed screenshot attempt `t2-01-designer-form-menu-timeout-state` wrote no file.
- Tool-written snapshot and console files under `evidence/playwright/` were written by the tool, not by the worker.

## Worker-written files (T1)

- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (created)
- `evidence/EXP-128/t1-01-designer-edit-menu-open.png`
- `evidence/EXP-128/t1-02-designer-form-menu-open.png`
- `evidence/EXP-128/t1-03-designer-definition-submenu-check.png`
- `evidence/EXP-128/t1-04-select-form-filtered-mock.png`

No `.txt` copies were written in T1 (none were due). The Playwright snapshot and console-log files under `evidence/playwright/` were written by the tool, not by the worker.

## Open questions after T1

1. The Designer has no Select Form entry in its Form menu. Confirm with the operator whether Select Form should be reached from the Web Client toolbar as done here, or whether the brief's wording should be changed.
2. The Edit menu has `Script` and `Variable` entries, not `Global Script` / `Global Variables`. T3 and T9 will confirm which one holds the global script and the global variables.
3. Five Web Client Form tabs were already open before this task (two of them MockInventory). Operator to say whether these should be closed before T11.
4. The MockLoginIDO Form remains open in the Designer tab; it should be closed through its Form-tab control at the start of T2, unless the operator prefers otherwise.
5. Screenshots show the account name (see the note above).

### Open questions after T2
6. MockLoginPortal's primary collection shows no IDO name and no filter (blank values). Is the Form unbound, or did the value editors fail to render? Needs an operator view or a T10/T11 cross-check; not resolved in T2.
7. The `userControl1_USER` Container column reads `flexlayoutPane_MockLoginPortal` while the tree nests it under `Region00: FLEX_PANE_REGION0`. Recorded as shown; the meaning is not known.
8. The URL-type radio (Relative, Absolute, Web User Control Asset) selected in the reference dialog is not exposed. The Control URL `mocklogin/index.html` and the variable value `URL(METADATA()mocklogin/index.html)` suggest the Web User Control Asset route, but this is unverified.
9. The Form Type is `Flex`, but no template row is shown. Whether this is a portal shell needs a check of the Form's other groups (not expanded).
10. Blocker (suspected environment): the Designer Form-menu button timed out twice after the tab order changed. Recovered by selecting the Designer tab; the operator may want to know if this recurs in T3.
11. Operator decision: the `MockLoginIDO` Designer tab is still open and clean; close it before T3 or leave it.
12. Global variable values, including `MPUsername` and `MPPassword` (names only in T2), are for T9 under the credential rule.

### Open questions after T4
13. **Console-error stop (operator decision needed).** The Designer console rose from 2 to 3 errors after the coordinate click at (278, 722) on the `Primary Collection: MockInventory` tree chevron. The tool-written log is `evidence\playwright\console-2026-10-23T03-34-33-934Z.log` (lines 3 to 13 per the tool output). The worker did not read it. Whether the rise is a client-side Designer error during tree expansion or a server-side event is unresolved.
14. MockInventory's collection filter (if any) is unresolved: the `Options` group did not expand (one coordinate attempt, no change). The operator may decide another route, or accept the limitation.
15. MockInventory's Components tree, UserControl references (if any), Event Handlers and Variables are not read (T4 remainder).
16. The MockInventory IDO is named by the collection value `MockInventory`. Whether this is a different IDO from `MockLoginIDO` and from the `MockLogin` IDO named in the MockLoginPortal script (T3 open question 13) is unresolved (T10 scope).
17. MockLoginPortal's blank collection rows (T2) versus MockInventory's populated rows: a real blank or a rendering difference is not verified.
18. The MockInventory Form tab is still open and clean. The operator decides whether it is closed before the T4 remainder, or the next task closes it through the Form-tab control after the reads.
19. Screenshots `t4-01` to `t4-04` show the signed-in account name in the status bar and are not redacted.

### Action audit (cumulative through T4)

T4 browser actions (exact):
- Tab select: **1** (Designer, index 0). Explicit tab list: **1** (task start).
- Clicks by reference: **6** (Form menu `e3`; recent entry `MockInventory` `e486`; Details Expand Panel `e667`; `Primary Collection` row `e816`; properties grid Expand `e831`; `Options` row `e929`).
- Coordinate clicks: **2** (`(928, 764)`, Options chevron, no expansion; `(278, 722)`, Primary Collection chevron, expanded the node and raised the console count from 2 to 3).
- Mouse wheel (view only): **1** (deltaY 300).
- Typing, key presses, hover, mouse moves, drags: **0**.
- **T4 browser actions executed: 10** (6 clicks + 2 coordinate clicks + 1 wheel + 1 tab select). Attempted: 10. Denied by the harness: 0. Timed out: 0.

T4 read-only calls:
- `browser_snapshot`: **13** calls, **12 succeeded**, **1 failed** ("Ref e811 not found"). The one fresh untargeted recovery snapshot is counted in the 12.
- `browser_find`: **0**.
- `browser_take_screenshot`: **4** calls, **4 files** (`t4-01` to `t4-04`).
- Repository and file reads in T4: AGENTS.md (1, full); this record (2: one full read and one grep); PNG reads (4: `t4-01` to `t4-04`).

**Cumulative browser actions T1 to T4 (executed):**
- Clicks by reference: T1 9 + T2 24 + T3 7 + T4 6 = **46**.
- Coordinate clicks: T2 1 + T4 2 = **3**.
- Hover: **1** (T1).
- Mouse moves (positioning): T2 3 + T3 2 = **5**.
- Mouse wheel (view only): T2 6 + T3 9 + T4 1 = **16** executed (plus 1 denied in T3).
- Tab selects: T1 2 + T2 1 + T3 1 + T4 1 = **5**.
- Key presses: **2** (T1). Typing: **1** (T1, Select Form filter `Mock`).
- **Browser actions executed, cumulative: 79** (T1 15; T2 35; T3 19; T4 10).
- Explicit tab listings, cumulative: **4** (one per task, T1 to T4).
- Snapshots cumulative: T1 6 + T2 27 + T3 10 + T4 13 = **56** (failed "Ref not found": T2 1, T3 2, T4 1, total 4).
- Finds cumulative: **15** (T1 5 + T2 8 + T3 2 + T4 0).
- Screenshot calls cumulative: T1 4 + T2 22 + T3 9 + T4 4 = **39 calls**, **38 files** written under `evidence/EXP-128/` (the failed T2 `t2-01-designer-form-menu-timeout-state` wrote nothing).

Prohibited or out-of-scope actions (T4): **none**. No Save (Designer or runtime), no Ctrl+S, no OK, Apply or Save in any dialog or editor (no dialog was opened), no Delete, Regenerate, Unload, Revert, Check-In or Undo Check-Out, no component edit or drag, no compile or run, no runtime interaction, no sign-in, no re-login, no navigation, no refresh. The Options description textbox was not typed in.

Accidental unsaved change: **none observed** in T4. Save was disabled at every read where it was visible (`e15` snapshots, `t4-01` to `t4-04`).

Console (Designer tab): **2 errors / 0 warnings** at every reading before the coordinate click at (278, 722); **3 errors / 0 warnings** after it and at every later read. The stop rule was applied: no click after the rise.

Session expiry, sign-in, server-event error: **none** in T4.

### Worker-written files (T4)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: status line, T4 section, T5-to-T12 pending line, open questions after T4, cumulative audit through T4, this file list).
- `evidence/EXP-128/t4-01-mockinventory-opened.png`
- `evidence/EXP-128/t4-02-mockinventory-collections-properties.png`
- `evidence/EXP-128/t4-03-mockinventory-collection-options-check.png`
- `evidence/EXP-128/t4-04-mockinventory-blocked-console-rise.png`
- No `.txt` copy: T4 does not copy scripts or assets. No `MockInventory-form-script.cs.txt` was written (T5 scope).
- Tool-written snapshot and console files under `evidence/playwright/` were written by the tool, not by the worker.

### Stop state for the operator (T4)
- Blocked by the console-error rule at the Collections step. The MockInventory Form is left open, clean and un-closed. No dialog, menu or editor is open.
- Designer tab console: 3 errors / 0 warnings. Operator to diagnose from the tool-written console log (`evidence\playwright\console-2026-10-23T03-34-33-934Z.log`).
- Next permitted step (after the operator clears the stop): a read-only Designer check, then the T4 remainder (Components tree, UserControl properties and reference dialog if any, Event Handlers, Variables), then the MockInventory Form-tab close with No to any save prompt.

**Update (T4 continuation, task fd81c666):** the operator disposition was applied (baseline 3). The remainder was read where the UI allowed. The Components, Event Handlers and Variables panels rendered blank, and the MockInventory Form was closed with no save prompt. See "T4 continuation" above. The stop state above is superseded.

### Action audit (T4 continuation, task fd81c666; exact)

Executed browser actions in this task:
- Tab select: **1** (Designer, index 0). Explicit tab list: **1** (before the select).
- Clicks by reference, executed: **4** (`Components` tab `e411`; `Event Handlers` tab `e413`; `Variables` tab `e414`; MockInventory Form-tab close `e250`).
- Coordinate clicks: **0**. Mouse wheel: **0**. Typing, key presses, hover, drags: **0**.
- Wait (no browser mutation): **1** (3 seconds).
- **Executed browser actions in this task: 5** (4 clicks + 1 tab select).
- Attempted but not executed (timed out before the action): **2** clicks, both on `e895` (Components grid Expand). Attempted total: **7**.

Read-only calls in this task:
- `browser_snapshot`: **8** explicit (7 untargeted, 1 targeted `e405`, which returned only a heading). Failed "Ref not found": **0**.
- `browser_find`: **1** ("Components").
- `browser_take_screenshot`: **4** calls, **4 files** (`t4-05` to `t4-08`).
- Repository and file reads: AGENTS.md (1, full), this record (1 Grep), snapshot file (2 Greps), PNG reads (4: `t4-05` to `t4-08`).
- Tool-written files (not worker-authored): `evidence/playwright/page-*.yml` and `console-*.log` created automatically by the tool with each action.

**Cumulative browser actions T1 to T4 continuation (executed):**
- Clicks by reference: T1 9 + T2 24 + T3 7 + T4 first task 6 + T4 continuation 4 = **50**.
- Coordinate clicks: T2 1 + T4 first task 2 = **3** (none in the continuation).
- Hover: **1** (T1). Mouse moves: T2 3 + T3 2 = **5**. Mouse wheel (view only): T2 6 + T3 9 + T4 first task 1 = **16** (1 further T3 call denied).
- Tab selects: T1 2 + T2 1 + T3 1 + T4 first task 1 + T4 continuation 1 = **6**.
- Key presses: **2** (T1). Typing: **1** (T1, Select Form filter `Mock`).
- **Browser actions executed, cumulative: 84** (T1 15; T2 35; T3 19; T4 first task 10; T4 continuation 5).
- Action timeouts (not executed), cumulative: T2 3 (two Form-menu clicks and one screenshot); T4 continuation 2 (`e895`, twice). Total **5**.
- Explicit tab listings, cumulative: **5** (T1, T2, T3, T4 first task, T4 continuation).
- Snapshots, cumulative: T1 6 + T2 27 + T3 10 + T4 first task 13 + T4 continuation 8 = **64** (failed "Ref not found": T2 1, T3 2, T4 first task 1; total **4**; continuation 0).
- Finds, cumulative: **16**.
- Screenshot calls, cumulative: **43**, of which **42 wrote files** under `evidence/EXP-128/` (the failed T2 `t2-01-designer-form-menu-timeout-state` wrote nothing; T1 4 + T2 22 calls (21 files) + T3 9 + T4 first task 4 + T4 continuation 4).

Prohibited or out-of-scope actions (T4 continuation): **none**. No Save (Designer or runtime), no Ctrl+S, no OK, Apply or Save in any dialog (none opened), no Delete, Regenerate, Unload, Revert, Check-In or Undo Check-Out, no component edit or drag, no compile or run, no Form script or asset opened, no runtime interaction, no sign-in, no re-login, no navigation, no refresh. No reference dialog (user-control reference, Edit Extension Properties) was opened in this continuation.

Accidental unsaved change: **none observed**. Save was disabled at every visible read (`e15` in each snapshot; `t4-05` to `t4-08`).

Session expiry, sign-in, server-event error, logout card: **none**. Console (Designer tab): **3 errors / 0 warnings** at every reading in the continuation, including after the Components, Event Handlers and Variables tab clicks and after the MockInventory close. No rise in the continuation. The worker did not read the console log.

### Worker-written files (T4 continuation, task fd81c666)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: status line, the superseded T4 final-state heading, the T4 continuation section, T5-to-T12 pending section, this audit and file list, the stop-state update).
- `evidence/EXP-128/t4-05-mockinventory-collections-options-state-resumed.png`
- `evidence/EXP-128/t4-06-mockinventory-components-tree.png`
- `evidence/EXP-128/t4-07-mockinventory-event-handlers.png`
- `evidence/EXP-128/t4-08-mockinventory-variables-empty-grid.png`
- `evidence/playwright/t4-components-snapshot-check.yml`: **outside the permitted directory**. Written by the worker through the `filename` argument of `browser_snapshot`. Harmless read output; the operator may remove it (the worker has no delete tool).
- No `.txt` copy was written (T4 copies no scripts or assets).

### Open questions after the T4 continuation
20. **Blank Details panels (operator decision).** The MockInventory Components tree, Event Handlers and Variables panels render with no rows, although the Components header and the Event Handlers and Variables column headers are present and the canvas shows labelled fields. Whether the data is not loaded, the grids do not render, or the Form genuinely has no rows in these tabs is unresolved. A Designer reload is outside the worker's authority.
21. **Possible link to the visibilityMode TypeError (operator attribution, unverified).** The blank panels appeared after the console rise. The worker has not verified a link and did not read the log (`evidence\playwright\console-2026-10-23T03-34-33-934Z.log`, and the later tool-written log names in the tool output).
22. **Components expander covered.** The Components grid Expand control (`e895`) is intercepted by the Details tab bar (two timeouts). An operator-approved alternative is needed to expand any tree if the rows return.
23. **Collection Options and filter.** Not readable through the UI. Whether the three groups after Options are its children is unverified.
24. **UserControl on MockInventory.** Unknown: no component row was readable. The user-control reference dialog was therefore not opened.
25. **Screenshots show the account name.** `t4-01` to `t4-08` are not redacted; the operator decides on sharing.
26. **Worker-written snapshot outside the permitted directory.** `evidence/playwright/t4-components-snapshot-check.yml` (see the file list); the operator may remove it.

### Open questions after T4 completion attempt and T5 (task 893366b8)
27. **MockInventory is still open, with an accidental unsaved-change flag.** Save is enabled after the Form Script entry (`e815`; Regenerate `e817` also enabled). The Form's tab is not in the Form strip, so the brief's Form-tab close could not be done. Operator: close MockInventory with No to any save prompt, or direct another route. The worker did not save.
28. **Blank Designer rendering.** The MockInventory canvas, the Details panels, and the Script Editor code area are all unrendered in this session. Whether this is the operator's `visibilityMode` TypeError, a stale client state, or a missing Form-load step is unresolved. The console count stayed at 3 throughout, so no new rise was seen.
29. **Whether F5 reloaded the page is unconfirmed.** The post-F5 state was identical (URL, Form strip, canvas, console count).
30. **The MockInventory Form Script is unknown.** The editor showed no text, so the script may exist but not render, or may be empty. No method, IDO call or variable of this script is recorded.
31. **Label mismatch (procedural).** The harness header read `task=T6`, while the bounded instruction said T5 and T6 as the next step. The bounded instruction was followed.
32. **Screenshots `t5-01` to `t5-04` show the account name in the status bar** and are not redacted.

### Action audit (T5 task 893366b8; exact)

Executed browser actions in this task:
- Tab select: **1** (Designer, index 0). Explicit tab listing: **1** (before the select).
- Clicks executed: **5** (Form menu `e3`; recent entry `MockInventory` `e480`; Edit menu `e5`; Form Script `e775`; Script Editor header tool `e822`).
- Key press executed: **1** (F5, once; the reload is unconfirmed).
- Coordinate clicks: **0**. Mouse wheel: **0**. Typing: **0**. Hover and drags: **0**.
- Waits (non-mutating): **3** (3 s, 8 s, 3 s).
- **Executed browser actions in this task: 7** (5 clicks + 1 key press + 1 tab select).
- **Attempted but not executed (timed out):** **3** clicks (Details expand `e642` twice; Script Editor Cancel `e858` once). **Attempted total: 10** (7 executed + 3 timed out).
- Denied by the harness: **0**.

Read-only calls in this task:
- `browser_snapshot`: **10** explicit (all succeeded; none failed "Ref not found"). No `filename` argument was passed to `browser_snapshot`.
- `browser_find`: **2** ("closable"; "public").
- `browser_take_screenshot`: **4** calls, **4 files** (`t5-01` to `t5-04`).
- Repository and file reads: AGENTS.md (1, full); the record (1 Grep for headings and 1 Grep for the next-step line); PNG reads (4: `t5-01` to `t5-04`).
- Tool-written files (not worker-authored): `evidence/playwright/page-*.yml` and `console-*.log` created automatically with each action.

**Cumulative browser actions T1 to T5 (executed):**
- Clicks by reference: T1 9 + T2 24 + T3 7 + T4 first 6 + T4 continuation 4 + T5 5 = **55**.
- Coordinate clicks: **3** (T2 1; T4 first task 2; none in T5).
- Hover: **1** (T1). Mouse moves: **5** (T2 3; T3 2). Mouse wheel (view only): **16** executed (T2 6; T3 9; T4 first 1; plus 1 further T3 call denied by the harness).
- Tab selects: T1 2 + T2 1 + T3 1 + T4 first 1 + T4 continuation 1 + T5 1 = **7**.
- Key presses: **3** (T1 2 Control+A and Backspace; T5 1 F5).
- Typing: **1** (T1, Select Form filter `Mock`).
- **Browser actions executed, cumulative: 91** (T1 15; T2 35; T3 19; T4 first 10; T4 continuation 5; T5 7).
- Action timeouts (not executed), cumulative: T2 3; T4 continuation 2; T5 3 = **8**.
- Explicit tab listings, cumulative: **6**.
- Snapshots, cumulative: T1 6 + T2 27 + T3 10 + T4 first 13 + T4 continuation 8 + T5 10 = **74** (failed "Ref not found": T2 1, T3 2, T4 first 1; total **4**).
- Finds, cumulative: **18** (T1 5; T2 8; T3 2; T5 2; T4 0).
- Screenshot calls, cumulative: **47**, of which **46 wrote files** under `evidence/EXP-128/` (the failed T2 `t2-01-designer-form-menu-timeout-state` wrote nothing).

Prohibited or out-of-scope actions (T5): **none**. No Save click (the Save button was enabled but not clicked), no Ctrl+S, no OK, Apply or Save in any dialog (the Script Editor was closed with its header tool, not OK), no Delete, Regenerate, Unload, Revert, Check-In or Undo Check-Out, no Undo click, no component edit or drag, no compile or run, no source edit, no typing, no runtime interaction, no sign-in, no re-login, no navigation, no refresh. The F5 key press reloaded or attempted a reload of the Designer page as authorized by the operator (one press; the effect is unconfirmed).

Accidental unsaved change: **observed after Edit > Form Script** (Save and Regenerate Form enabled; Undo accessibility still disabled). Not saved; the flag remains. Operator to decide on close.

Session expiry, sign-in, logout card, "Logout Successful", server-event processing error, HTTP 4xx/5xx: **none** in T5.

Console (Designer tab): **3 errors / 0 warnings** at every reading in T5 (after every action and wait). No rise. The worker did not read the console log.

### Worker-written files (T5 task 893366b8)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: status line; the T4 completion attempt section; the T5 section; the T6-to-T12 pending section and next step; open questions 27–32; this audit).
- `evidence/EXP-128/t5-01-mockinventory-reopened-recent-entry.png`
- `evidence/EXP-128/t5-02-mockinventory-form-script-editor-open.png`
- `evidence/EXP-128/t5-03-mockinventory-form-script-editor-after-wait.png`
- `evidence/EXP-128/t5-04-designer-after-script-editor-close.png`
- `evidence/EXP-128/MockInventory-form-script.cs.txt` (new; **header-only: 0 lines of source copied**; redactions: 0 values, because no text was copied).
- Tool-written snapshot and console files under `evidence/playwright/` (not worker-authored).

### Stop state after T5 (for the operator)
- MockInventory still open, with the accidental unsaved-change flag and a Save-enabled toolbar. The Form strip lists only MockLoginIDO (clean at task start; not selected at the last snapshot).
- The Script Editor is closed; no dialog, menu or list is open.
- Designer console 3/0. Web Client tab not used; its console not read.
- The next step is an operator decision (close MockInventory with No, or a permitted reload); then T6 (the dashboard Form structure) under the same rules.

---

## T7: Web User Control assets (HTML pages only), task cycle 12

Status: **T7 complete.** The asset tree was read, the two HTML pages were copied and their WSForm/MG calls recorded. T8 (JavaScript and CSS contents) was not started. The MockLoginPortal script recovery (lines 78 onward) was not performed.

### Gate (T7)
- Sources: AGENTS.md (read in full) and the current-task part of this record. Per the continuation rule, docs/mongoose/guides/user-control.md, scripts.md, variables.md and the session recipe were not re-read in this task (procedural note).
- Tabs: listed once before the first selection. Tab 0 = Designer (`designer/default.aspx`, "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)"). Tab 1 = Mongoose Web Client (`favoriteContext=MockLoginIDO`). Tab 0 was selected; tab 1 was not selected or read in T7.
- Designer start state: no Form open (no Form tab in the strip), no dialog, Save disabled, status bar `ScopeType: User`. Console 2 errors / 0 warnings at the start and at every reading in T7 (Designer tab).
- Session: usable. No sign-in page, session-expiry modal, logout card or server-event error in T7.

### Edit menu (no Form open)
- Opened with the Edit button (ref e5). Items shown: Undo, Redo, Copy, Cut, Paste (the first five disabled), Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition (17 items, 3 separators).
- **Form Script is not shown in this state.** It appeared when a Form was open (T3, T6). The reason is not verified.

### Asset tree (Edit > Web User Control Assets)
- Entry: Edit > **Web User Control Assets** (ref e335). The dialog's title is **"Global Objects"**. Its left pane is labelled **"Web Assets"** and its right pane **"Properties"**. No "Page Elements" tab label is visible, which differs from the brief's wording. Buttons: OK, Cancel, Help. OK was not clicked. The three icon buttons at the bottom-left (add, copy, delete) were not clicked.
- Tree as read (names as displayed; `/` marks a folder; "expanded" means its children were read):
```
$app/                     (expanded)
    appbuilder/           (NOT expanded)
    apphub/               (NOT expanded)
    images/               (NOT expanded)
    scripts/              (expanded)
        UserControl.js
MockInventory/            (expanded)
    index.html
    script.js
    style.css
mocklogin/                (expanded)
    script/               (expanded)
        app.js
    style/                (expanded)
        app.css
    index.html
mongoose/                 (NOT expanded)
sohoComponents/           (NOT expanded)
sohoxi/                   (NOT expanded)
custom                    (file at root; not opened)
```
- Omissions: appbuilder, apphub, images, mongoose, sohoComponents and sohoxi were not expanded (framework and library folders outside the Mock assets; their contents are unknown). The root file `custom` was not opened.
- Expansion: the tree arrows expose no references. Six coordinate clicks were used, one per arrow: (582,337) mocklogin; (603,359) mocklogin/script; (603,405) mocklogin/style; (582,313) MockInventory; (582,290) $app; (603,382) $app/scripts. Clicks on the tree rows (e374, e454, e469) only selected them.

### HTML 1: `mocklogin/index.html` (Control URL of MockLoginPortal's userControl1_USER, T2)
- Opened by selecting the row (ref e454), then the Properties panel's Content row "Open Edit Property Dialog" (ref e532). The **Edit Browser File** dialog showed File `mocklogin/index.html` and Content Type `text/html`, with the full source in a textbox. The text was exposed in one snapshot; the textbox was not scrolled. Closed with **Cancel** (ref e569).
- Verbatim copy: `evidence/EXP-128/assets/mocklogin_index.html.txt`. Line breaks and indentation are not exposed by the accessibility text, so line breaks are flattened to spaces in the copy. Token content and order are as exposed. **0 values redacted** (no credential-like value is present; the password input has no value).
- Structure: HTML5 login page, `<title>Login</title>`, `lang="en"`, viewport meta. Static layout with the brand "WAREHOUSE / MANAGEMENT SYSTEM" and the heading "Sign in to your account".
- Head: `<script type="text/javascript" src="../$app/scripts/UserControl.js">` and `<link rel="stylesheet" type="text/css" href="style/app.css" />`.
- Body ids and elements: `form#loginForm` (`novalidate`, no `action` attribute); `input#username` (text); `input#password` (password); `button#passwordToggle` (type button); `div#usernameError`, `div#passwordError`; `div#generalError` containing `span#generalErrorText`; `button#loginButton` (type submit, "Sign In") containing `span#buttonLoader`; footer text "Secure access to your workspace".
- Inline `<script>` body: **none**. Inline event attributes: **none**. The only script element in the body is the last line `<script src="script/app.js"></script>`.
- **WSForm, MG or other Mongoose API calls in this HTML: none observed.** Any Mongoose call made by this page must be in `mocklogin/script/app.js` (T8).
- External URLs, iframes, images and other HTML pages referenced by this file: none.
- Dependencies for T8: `../$app/scripts/UserControl.js` (present in the tree), `style/app.css` = `mocklogin/style/app.css` (present), `script/app.js` = `mocklogin/script/app.js` (present).

### HTML 2: `MockInventory/index.html` (Control URL of MockInventoryDashboard's userControl1_USER, T6)
- Opened by selecting the row (ref e469), then the Content row "Open Edit Property Dialog" (ref e604). The **Edit Browser File** dialog showed File `MockInventory/index.html` and Content Type `text/html`. Closed with **Cancel** (ref e642, from a targeted snapshot of the dialog).
- Verbatim copy: `evidence/EXP-128/assets/MockInventory_index.html.txt`. The text was taken from the accessibility text (the find output and the targeted snapshot carry the same text). Line breaks flattened as above; JSON escapes of the accessibility text decoded; source escapes such as `→` kept. **0 values redacted.** No screenshot of this dialog was taken in T7 (the copy rests on the accessibility text).
- Structure: page title "Mongoose Inventory Dashboard". Head: `<link rel="stylesheet" href="style.css">` (= `MockInventory/style.css`) and `../$app/scripts/UserControl.js`. Body: header with `#pollEnabled` and `#notifyEnabled` checkboxes (`onchange` = `onPollToggle()`, `onNotifyToggle()`), `#pollInterval` (`onchange` = `onPollIntervalChange()`), `#pollStatusText`, `#refreshButton` (`onclick="loadInventory()"`); four summary cards (`#totalItems`, `#totalUnits`, `#lowStock`, `#outOfStock`); search `#searchInput` (`onkeyup="filterInventory()"`); table `#inventoryTableBody`; `#recordCount`; raw JSON `<pre id="jsonOutput">`; `#toastContainer`; detail modal `#inventoryModal` with its close handlers.
- One inline `<script type="text/javascript">` block at the end of the body. Functions declared: getText, getNumber, escapeHtml, formatNumber, getItemStatus, getStatusClass, showSkeleton, startLoading, stopLoading, updateSummary, buildTable, filterInventory, parseInventoryData, renderInventory, **getInventoryJson**, **invokeLoadInventoryFromIDO**, ensureToastStyles, dismissToast, startToastTimer, showToast, indexRows, describeInventoryChanges, notifyInventoryChanges, onNotifyToggle, clampPollSeconds, loadPollSettings, savePollSettings, refreshPollStatus, setPollBusy, clearPollTimer, schedulePoll, pollInventory, onPollToggle, onPollIntervalChange, initPolling, getRowKey, refreshOpenModal, **loadInventory(silent)**, showError, openInventoryModalByIndex, openInventoryModal, closeInventoryModal, closeModalOutside, stopModalClick, **initializeInventoryDashboard**.
- Bootstrap at the end of the script: `initPolling();`, then `if (typeof MG !== "undefined" && typeof MG.onReady === "function") MG.onReady(initializeInventoryDashboard);`, otherwise `showError("MG.onReady is unavailable. ...")`.
- The per-row "View" buttons are generated with `onclick="openInventoryModalByIndex(i)"` (Mongoose call: none; a page function).

**Mongoose API calls observed in this HTML (exact arguments as written):**

| # | Call as written | Where in the page | What the page does with it |
|---|---|---|---|
| 1 | `WSForm.invoke("LoadInventoryFromIDO", function(result) {...})` | `invokeLoadInventoryFromIDO()`, called first by `loadInventory()` | Invokes the C# Form script method by name, with no arguments. The callback logs the result and resolves the promise. |
| 2 | `WSForm.getVarValue("vInventoryJson", function(value) {...})` | `getInventoryJson()`, called after call 1 resolves | Reads the Form variable `vInventoryJson`. A 15-second timeout rejects the promise if no callback arrives. |
| 3 | `MG.onReady(initializeInventoryDashboard)` | bootstrap at the end of the script | Runs `loadInventory()` once, guarded by `inventoryDashboardStarted`. |
| 4 | `typeof WSForm`, `typeof WSForm.invoke`, `typeof WSForm.getVarValue`, `typeof MG`, `typeof MG.onReady` | guards | Error messages mention the UserControl.js path and "Mongoose Web User Control". |

- **Not present in this HTML (observed):** `WSForm.generate`, `WSForm.setVarValue`, `WSForm.getCompValue`, `WSForm.setCompValue`, and any `MG` member other than `onReady`. No event name, component name or IDO name is passed from this page; the only Form-side names are the method `LoadInventoryFromIDO` and the variable `vInventoryJson`.
- Comments inside the page (not calls, not verified): `C#: public void LoadInventoryFromIDO()`; `IDOClient.LoadCollection(...)`; `ThisForm.Variables("vInventoryJson").Value = json;`; and the bootstrap comment "HTML, LoadInventoryFromIDO(), MockInventory IDO, vInventoryJson, JavaScript".
- Behaviour described by the source text, not executed: auto-refresh polling (default 5 seconds, one timer at a time), change-detection toasts, polling settings saved in `window.localStorage` under the key `inventoryDashboard.polling`.
- Dependencies for T8: `style.css` (MockInventory/style.css); `../$app/scripts/UserControl.js`; `script.js` in the MockInventory folder, which **this HTML does not reference** (its role is unknown).

### Preliminary WSForm mapping (for T12; observed names only, runtime not observed)
| JavaScript call | Form feature it reaches, as recorded | Status |
|---|---|---|
| `WSForm.invoke("LoadInventoryFromIDO")` in MockInventory/index.html | MockInventoryDashboard Form Script method `LoadInventoryFromIDO()` (T6): `IDOClient.LoadCollection("MockInventory", ..., 100)`, then `ThisForm.Variables("vInventoryJson").Value = json` | Name match in the source text only |
| `WSForm.getVarValue("vInventoryJson")` | Form variable `vInventoryJson` (T6: written by the script; not in the Form - Persistent list; category not read) | Category unresolved |
| `MG.onReady(initializeInventoryDashboard)` | Page-ready hook; no Form feature named | Call observed; behaviour not observed |
| Form event StdFormPredisplay (T6): Collection Refresh, then Form Script Method `LoadInventoryFromIDO()` | The same C# method is also listed on the Form's pre-display event | Observed in Event Handlers; runtime order not observed |
| MockLoginPortal `userControl1_USER` to `mocklogin/index.html` (T2) | This HTML makes no WSForm call; any call is in `mocklogin/script/app.js` (T8) | Open |

### Screenshots (T7)
- `evidence/EXP-128/t7-01-web-user-control-assets-dialog-top-level.png`: the Global Objects dialog with the top-level Web Assets entries and the root file `custom`; OK, Cancel, Help. Also visible: the status bar with `ScopeType: User`. Proves the dialog identity, the top-level entries and User scope. Does not prove children of collapsed folders.
- `evidence/EXP-128/t7-02-web-assets-mocklogin-expanded.png`: mocklogin expanded (folders script and style, file index.html). Proves those child names.
- `evidence/EXP-128/t7-03-web-assets-mocklogin-script-expanded.png`: mocklogin/script contains app.js. Proves that name only.
- `evidence/EXP-128/t7-04-edit-browser-file-mocklogin-index-html.png`: the Edit Browser File dialog for `mocklogin/index.html`, Content Type `text/html`; the textbox is scrolled to the file end (`<script src="script/app.js"></script>`, `</body>`, `</html>`). Proves file identity and the file's tail. Does not show the head of the file (the head is in the copy).
- `evidence/EXP-128/t7-05-web-assets-tree-expanded.png`: $app (subfolders collapsed), MockInventory (index.html selected, script.js, style.css), mocklogin tree; Properties of `MockInventory/index.html` (Name; Content `text/html`). Does not show mongoose, sohoComponents, sohoxi or custom (below the scroll).
- `evidence/EXP-128/t7-06-web-assets-scripts-folder-expanded.png`: `$app/scripts` contains UserControl.js. Proves the referenced file exists in the tree; does not show its content.
- **Account name:** the status bar of t7-01 to t7-06 shows the signed-in account name, and the Version row of the Properties panel shows it. Neither was transcribed in this record or in any copy. **The screenshots are not redacted; the operator decides on sharing.**

### Credential and redaction note (T7)
- 0 values redacted in `mocklogin_index.html.txt` and `MockInventory_index.html.txt`. No password, token, key, connection string or user credential appears in either HTML source. The localStorage key name `inventoryDashboard.polling` is a storage key, not a credential.

### Action audit (T7, exact)
Executed browser actions in this task: **17**
- Tab select: **1** (Designer, index 0). Explicit tab listing: **1** (before the select).
- Clicks by reference: **10**: e5 (Edit menu); e335 (Web User Control Assets); e374 (mocklogin tree row); e454 (mocklogin/index.html row); e532 (Open Edit Property Dialog, mocklogin); e569 (Cancel, mocklogin file dialog); e469 (MockInventory/index.html row); e604 (Open Edit Property Dialog, MockInventory); e642 (Cancel, MockInventory file dialog); e436 (Cancel, Global Objects dialog).
- Coordinate clicks: **6** (tree arrows, one per arrow; listed under Asset tree).
- Mouse moves, hover, mouse wheel, key presses, typing, drags: **0**.
- Attempted but not executed: **0**. Timeouts: **0**. "Ref not found": **0**. Denied by the harness: **0** browser actions.

Read-only browser calls in this task:
- `browser_snapshot`: **14**: 12 untargeted (after the tab select; after the Edit click; after the Web User Control Assets click; after the mocklogin row click; after the mocklogin arrow; after the MockInventory arrow and the style arrow; after the $app arrow; after the mocklogin/index.html row; after its Open Edit Property Dialog; after its Cancel; after the MockInventory/index.html row; after its Open Edit Property Dialog) and 2 targeted (dialog refs e616 and e341, to read the Cancel references). The $app/scripts arrow and the final Cancel were read from the targeted snapshot e341 and a screenshot.
- `browser_find`: **4** (one to locate the MockInventory file dialog, "Edit Browser File", "Global Objects", "Save"). Find output was not used as a click reference.
- `browser_take_screenshot`: **6** (t7-01 to t7-06), **6 files** written.

Repository and file activity in this task (not browser):
- AGENTS.md read (1). This record: 2 Grep calls and 3 Read range calls. Screenshot reads: 6 (t7-01 to t7-06).
- One Grep of a harness-held snapshot file (outside the repository) was **denied** by the permission system; it was not retried.
- Writes: `evidence/EXP-128/assets/mocklogin_index.html.txt` (new), `evidence/EXP-128/assets/MockInventory_index.html.txt` (new), 6 PNG files, and this record (edited).

Cumulative browser actions T1 to T7 (executed):
- Clicks by reference: **92 as recorded** = 82 through T6 (the T6 section's own running total, which starts from "previous 68") + T7 10. **Unreconciled:** the T5 section's own sum is 55 (T1 9 + T2 24 + T3 7 + T4 6 + T4 continuation 4 + T5 5), and adding the T6 section's 14 gives 69. The record does not explain the 13-click difference. Recount needed before any figure is used as exact.
- Coordinate clicks: 4 cumulative (T2 1; T4 2; T6 1) + T7 6 = **10**.
- Mouse wheel (view only): 25 (unchanged). Mouse moves: 6 (unchanged). Hover: 1 (T1). Key presses: 3 (T1 2; T5 1). Typing: 1 (T1, Select Form filter `Mock`). Drags: 0.
- Tab selects: 9 through T6 as recorded (the T5 section's sum plus T6's 1 gives 8; unreconciled) + T7 1 = **10 as recorded**.
- **Browser actions executed, cumulative: 148 as recorded** (131 through T6 as recorded, which starts from "previous 105", + 17 in T7). **Unreconciled:** the T5 section's cumulative total is 91; with T6's 26 and T7's 17 the total would be **134**. The record does not explain the 14-action difference.
- Snapshots, cumulative: 102 through T6 (excluding the T6 pre-compaction reads, which were not reconstructed) + 14 = **116**.
- Finds, cumulative: 27 through T6 + 4 = **31**.
- Screenshot calls, cumulative: 58 through T6 + 6 = **64**; PNG files under `evidence/EXP-128/`: 57 through T6 + 6 = **63**.
- Explicit tab listings: T7 1. The cumulative listing count is not reconciled for T6 (T6 recorded 1 in its own section).

Prohibited or out-of-scope actions (T7): **none.** No Save (Save was disabled at every read); no Ctrl+S; no OK, Apply or Save in any dialog; the Global Objects OK button was not clicked; the asset dialog's New, Import, Delete and Copy controls were not clicked; no text was typed in any field; no file content was edited; no component, Form or script was opened; no runtime interaction; no sign-in; no navigation; no refresh; no unload.

Accidental unsaved change: **none observed** in T7. Save was disabled at each read.

Session expiry, sign-in, logout card, "Logout Successful", server-event processing error, HTTP 4xx/5xx: **none** in T7.

Console: **Designer tab 2 errors / 0 warnings** at the start and at every reading after each action in T7. No rise, so the stop rule was not triggered. The Web Client tab was not selected or read in T7, so its console baseline is not recorded for this task. The worker did not read the console log. Tab-listing output mentioned a tool-written log `evidence\playwright\console-2026-10-23T07-44-36-482Z.log`; it was not opened.

### Procedural deviations (T7)
1. The continuation rule was applied: AGENTS.md and the current-task part of the record were read; the four docs guides were not re-read.
2. Six coordinate clicks were used for the tree arrows, which expose no references (one per arrow; allowed).
3. The untargeted snapshot taken for the MockInventory file dialog was about 54 KB and was saved to a harness file; a later Grep of that file was denied. The copy was taken from the find output and a targeted dialog snapshot (e616). No retry was made.
4. The brief's "Page Elements" tab label was not present; the tree is under "Web Assets".
5. No other deviation observed. No stale-reference error occurred.

### Worker-written files (T7)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: the status note in the T6-to-T12 section; this T7 section; open questions 33 to 43; this audit and file list).
- `evidence/EXP-128/assets/mocklogin_index.html.txt` (new; 0 redactions; flattened line breaks as described).
- `evidence/EXP-128/assets/MockInventory_index.html.txt` (new; 0 redactions; flattened line breaks as described).
- `evidence/EXP-128/t7-01-web-user-control-assets-dialog-top-level.png` to `evidence/EXP-128/t7-06-web-assets-scripts-folder-expanded.png` (6 new PNG files).
- Tool-written (not worker-authored): 16 `evidence/playwright/page-2026-10-23T07-*.yml` snapshot files (one per action result that carried a snapshot link), and `evidence/playwright/console-2026-10-23T07-44-36-482Z.log` from the tab listing. The harness holds the 54 KB dialog snapshot outside the repository.

### Open questions after T7
33. The unexpanded folders (appbuilder, apphub, images, mongoose, sohoComponents, sohoxi) and the root file `custom` may hold something relevant to the Mock Forms (for example a shared WSForm helper). Not inspected in T7; T8 or the operator decides.
34. `MockInventory/script.js` is not referenced by `MockInventory/index.html`. Whether any other asset or Form loads it is unknown (T8).
35. `$app/scripts/UserControl.js` is present in the tree. The page's own messages suggest it supplies WSForm and MG. Its content and API are not inspected (T8).
36. Whether `mocklogin/script/app.js` calls `WSForm.invoke("ProcessLogin", ...)` (the hypothesis from the MockLoginPortal script comment) is unverified (T8).
37. The category and persistence of the Form variable `vInventoryJson` are not known (T6 and T12).
38. The dashboard page calls `LoadInventoryFromIDO` in two ways: its `MG.onReady` bootstrap, and the Form's StdFormPredisplay event (T6). Whether a page load triggers two loads is not known (no runtime was observed; T11 is a look only).
39. The tree's folder names are recorded as displayed (`MockInventory`, `mocklogin`, `script`, `style`). The folder name `MockInventory` matches the Form name (T4) and the IDO name (T6). The MockInventory Form has no UserControl (T4), so only the dashboard Form uses this folder.
40. The Edit menu without an open Form does not list Form Script (17 items). The cause is not verified.
41. The status bars and the Properties panel in the screenshots t7-01 to t7-06 show the signed-in account name. **Operator to decide on redaction before sharing.**
42. Carried forward: the T6 action-audit reconciliation and the earlier T5-to-T6 task-boundary overrun remain open.
43. Carried forward: MockLoginPortal Form Script lines 78 onward are not collected. The operator authorized this recovery before T12; it was not part of T7.

### Stop state after T7
- Designer on `designer/default.aspx`. No Form open. No dialog, menu, editor or list open (verified by the find after the last Cancel). Save disabled. User scope (status bar). Console 2 errors / 0 warnings (Designer tab).
- The Web Client tab (tab 1) was not used in T7.
- Next permitted step (not performed in this task): **T8**, the JavaScript and CSS assets (`mocklogin/script/app.js`, `mocklogin/style/app.css`, `MockInventory/style.css`, `MockInventory/script.js`, `$app/scripts/UserControl.js`), in its own task. The MockLoginPortal script recovery (lines 78 onward) remains pending before T12.

---

## T8: JavaScript and CSS Web User Control assets, task cycle 13

**Task label note (procedural):** the harness header of this task read `task=T11`, while the bounded instruction read "Execute ONLY T8". The bounded instruction was followed. T8 only. T9, T10 and T11 were **not** performed. No runtime Form was opened.

Status: **partly complete.** Copies of `mocklogin/script/app.js`, `mocklogin/style/app.css` and `MockInventory/style.css` were written (text-equivalent, not byte-exact, 0 redactions each). `$app/scripts/UserControl.js` is **blocked**: it was not read and no copy exists. The optional `MockInventory/script.js` was also copied and is labelled **not referenced** by `MockInventory/index.html`.

### Gate (T8)
- Sources: AGENTS.md (first 30 lines read in this task; full text read in T7). The T8 portion of the record was searched with Grep; the four docs guides were not re-read (continuation rule).
- Tabs: listed once before the first selection. Tab 0 = Designer (`designer/default.aspx`). Tab 1 = Web Client (`favoriteContext=MockLoginIDO`), not selected or read in T8.
- Start state (Designer): no Form open, no dialog, Save disabled, status bar `ScopeType: User`, console **2 errors / 0 warnings**. The same 2 / 0 reading was taken after every action in T8.
- Session: usable. No sign-in, session-expiry modal, logout card or server-event error.

### Asset tree (T8, Global Objects dialog)
- Edit > Web User Control Assets (menu item `e335`) opened the same **Global Objects** dialog as in T7 (Web Assets tree, OK/Cancel/Help). OK was not clicked; the asset dialog's New, Import, Delete and Copy controls were not clicked.
- Expanded in T8 with coordinate clicks (no references on tree arrows): `mocklogin` (script, style), `mocklogin/script`, `mocklogin/style`, `$app`, `$app/scripts`, `MockInventory`. Not expanded: `$app/appbuilder`, `$app/apphub`, `$app/images`, `mongoose`, `sohoComponents`, `sohoxi`; root file `custom` not opened.
- Tree as read: `$app/scripts/UserControl.js`; `MockInventory/index.html`, `script.js`, `style.css`; `mocklogin/script/app.js`, `mocklogin/style/app.css`, `mocklogin/index.html`. Names as displayed (same as T7).

### Results per asset

| Asset | Referenced by (source) | Copy written | Redactions | Status |
|---|---|---|---|---|
| `mocklogin/script/app.js` | `mocklogin/index.html`: `<script src="script/app.js">` | `evidence/EXP-128/assets/mocklogin_script_app.js.txt` | 0 | Text-equivalent; whole text exposed by one find; file tail checked against t8-01 |
| `mocklogin/style/app.css` | `mocklogin/index.html`: `<link href="style/app.css">` | `evidence/EXP-128/assets/mocklogin_style_app.css.txt` | 0 | Text-equivalent; whole text exposed; ends at the `@media (max-width: 560px)` block |
| `$app/scripts/UserControl.js` | both HTML pages: `../$app/scripts/UserControl.js` | **none** | - | **BLOCKED**: not read (see below) |
| `MockInventory/style.css` | `MockInventory/index.html`: `<link href="style.css">` | `evidence/EXP-128/assets/MockInventory_style.css.txt` | 0 | Text-equivalent; whole text exposed; ends at the `prefers-reduced-motion` block |
| `MockInventory/script.js` (optional) | **not referenced**: `MockInventory/index.html` loads only `UserControl.js` and its inline script | `evidence/EXP-128/assets/MockInventory_script.js.txt` | 0 | Observed, not referenced; its runtime use is unknown |

**Copy method (all four):** the text was taken from the `browser_find` output of the open Edit Browser File textbox, which carries the whole file on one flattened line (the accessibility text does not expose line breaks or indentation). Each copy's header states this. For `app.js`, the screenshot t8-01 shows the real line breaks at the file tail. No copy was verified byte-for-byte.

### `mocklogin/script/app.js` (observed source; not runtime)
**Structure.** `"use strict";` Element lookups by id (`loginForm`, `username`, `password`, `usernameWrapper`, `passwordWrapper`, `usernameError`, `passwordError`, `generalError`, `generalErrorText`, `passwordToggle`, `loginButton`). Functions: `showFieldError`, `clearFieldError`, `showGeneralError`, `clearGeneralError`, `validateUsername` (trimmed; required; minimum 3 characters), `validatePassword` (required; minimum 6 characters), `togglePassword` (switches the password input's `type` between `password` and `text`, and the button's aria-label), `handleUsernameInput`, `handlePasswordInput`, `setLoginLoading` (disables the button, sets `aria-busy`, adds or removes class `loading`), `invokeAsync(methodName, arg1, arg2, timeoutMs)`, `processLogin`, `handleLogin`.

**Mongoose API calls in this file (exhaustive for the file):**
- **One call:** `WSForm.invoke(methodName, arg1, arg2, function (result) { finish(false, result); })`, made inside `invokeAsync`.
- Its only caller: `processLogin()` → `invokeAsync("ProcessLogin", usernameInput.value.trim(), passwordInput.value, 15000)`.
- So the observed call is **`WSForm.invoke("ProcessLogin", <trimmed username>, <password from the input>, <callback>)`**: 4 arguments, a 15000 ms timeout (`Timed out: ProcessLogin`), and a callback that resolves the promise with the callback's `result`.
- Not present in this file: `WSForm.getVarValue`, `WSForm.setVarValue`, `WSForm.generate`, `WSForm.getCompValue`, `WSForm.setCompValue`, any `MG.*` call, any component, event or IDO name, `window.location`, `href`, `fetch`, XHR, or any storage access (checked by grep on the copy).
- Result handling: `console.log("ProcessLogin completed:", result)` on success; `console.error("ProcessLogin failed:", error)` and the on-page text "Could not reach the server. Please try again." on any rejection (timeout or an exception from `WSForm.invoke`). The page does not use the returned value. The source comment says: "C# shows the Mongoose alert, so there is nothing to render here."

**Login flow, as the source describes it:**
1. Form `submit` → `preventDefault` → `handleLogin()`.
2. Client validation: the username is trimmed and must have at least 3 characters; the password is not trimmed and must have at least 6 characters. A failed check shows the field message and makes **no** server call.
3. Button disabled and `loading` class added.
4. `WSForm.invoke("ProcessLogin", username, password, callback)`.
5. C# `ProcessLogin(string username, string password)` (MockLoginPortal Form Script, copy lines 17–84 of the T3 file): empty values → alert "Username and password are required." → `"missing"`; `IDOClient.LoadCollection("MockLogin", "Username, Password, Store, Role", "Username = '<escaped username>'", "", 1)`; no item → alert "No data found…" → `"empty"`; otherwise it builds a record `{Username, Password, Store, Role}` from the stored values, serializes it as JSON, **writes `ThisForm.Variables("vMockLoginJson").Value = json`**, compares the stored value with the value sent (plain-text comparison), and returns `"invalid"` with an alert on mismatch; on a match it shows the alert `"Data received:\n" + json` and returns `"ok"`; an exception shows "Login error: …" and returns `"error"`.
6. The callback receives the returned string (per the C# comment; not verified at runtime) and JavaScript only logs it. Re-enable the button.

**Mapping to the C# method (source-level, both sides read):** the JavaScript call `WSForm.invoke("ProcessLogin", …)` matches the C# method name and its two `string` parameters. The C# file's own comment (line 21) also records `JS: WSForm.invoke("ProcessLogin", username, password, callback)`. Therefore the **earlier hypothesis is now supported by the JavaScript source text**, not only by the C# comment. The trailing callback is not declared by the C# signature; how the Mongoose bridge passes it to the C# method and back is in `UserControl.js`, which was not read. **Runtime behaviour is not observed.**

**Credential handling (observed in source; values not recorded):**
- The password is read from the password input at submit time and passed as the second argument of `WSForm.invoke`. It is not stored in any page variable; the input element holds it.
- The password toggle sets the input's `type` to `text` on click (the password is then visible in the field). This is the source's behaviour, not a test result.
- Console calls log only the result or the error object (not the password variable).
- **Observation for T12 (not interpreted as a finding of insecurity without runtime evidence):** the C# method (a) places the **stored password** into the `vMockLoginJson` Form variable as a JSON field `Password` and (b) includes that JSON in the success alert text. The password comparison is plain text. These are source observations only; no credential value was read or copied in T8.

### `mocklogin/style/app.css` (observed source)
- No `@import`, no `url(`, no font file. Font family is the system stack (`-apple-system, …, Arial`).
- Class selectors that the `app.js` text adds or removes, and so the names the JavaScript and the stylesheet share: `.input-wrapper.error` and `.input-wrapper.error:focus-within` (JS adds class `error` on the wrapper); `.validation-message.show` (JS adds `show` on the message element); `.general-error.show` (JS adds `show`); `.login-button.loading` (hides `.button-text` and `.button-arrow`, shows `.button-loader`); `.login-button:disabled`; `@keyframes spin`.
- Other selectors (`.login-page`, `.login-card`, `.brand*`, `.card-accent`, `.password-toggle`, `.input-icon`, `.login-footer`, responsive `@media` blocks) are not referenced by `app.js`.
- Shape of the styling is recorded only as text. No behaviour is inferred from it.

### `MockInventory/style.css` (observed source)
- No `@import`, no `url(`. The stylesheet defines the dashboard layout and the classes used by the inline script of `MockInventory/index.html`.
- Classes used by the inline script and defined here: `.poll-dot` with `.is-active`, `.is-off`, `.is-error`, `.is-busy` (the script writes `"poll-dot is-" + state` and `"poll-dot is-busy"`); `.status-badge` with `.status-in`, `.status-low`, `.status-out`; `.modal-overlay` (the script toggles its `style.display`), `.modal-card`, `.modal-header`, `.modal-body`, `.modal-footer`, `.detail-*`, `.stock-message`, `.btn-close`, `.modal-close`; `.toast-container`, `.toast`, `.toast.is-leaving`, `.toast-title`, `.toast-description`, `.toast-close`.
- **Gap (observed):** the **skeleton classes** used by the inline script (`skeleton-row`, `skeleton`, `skeleton-item`, `skeleton-description`, `skeleton-location`, `skeleton-warehouse`, `skeleton-number`, `skeleton-status`, `skeleton-button`, `summary-skeleton`) have **no rule** in `MockInventory/style.css`. The index head loads only this stylesheet and `UserControl.js`. Whether `UserControl.js` defines them is unknown (not read).
- **Redundancy (observed):** `:root` defines `--toast-*` variables and the `.toast` rules here, while the inline script's `ensureToastStyles()` injects the same selectors into a `<style>` element and its comment says "no CSS file is needed". Both exist.

### `MockInventory/script.js` (observed; optional; not referenced)
- Declares `renderInventory(items)` (uses element ids **`inventoryBody`** and **`search`**), `receiveInventoryData(value)`, and `loadInventoryFromForm()`, which calls `WSForm.getVarValue("vInventoryJson", callback)`. A `DOMContentLoaded` listener calls `loadInventoryFromForm()`.
- **Not referenced:** `MockInventory/index.html` does not load it. Its element ids do **not** match that page (`inventoryTableBody`, `searchInput`). Nothing in the inspected files loads it.
- Its purpose and history are unknown. No runtime use is claimed.

### `$app/scripts/UserControl.js`: BLOCKED (not read)
- Attempts, all in this task: (1) the tree row selected (`e632`) after `scripts` was expanded; (2) a targeted dialog snapshot: the file was highlighted but the **Properties pane was empty** (no Name, no Content, no Open Edit Property Dialog button); (3) a second targeted snapshot: still empty; (4) one screenshot `t8-02`; (5) one corrected re-select of the same row (`e632`); (6) a third targeted snapshot: still empty.
- The same stage rendered Properties for `app.js`, `app.css`, `MockInventory/style.css` and `script.js`, so the cause is not established. Possible causes (not verified): the Properties grid does not populate for this file, or a client-side issue.
- Consequence: **the WSForm and MG API implementation and the `WSForm.invoke` argument and callback contract are unverified.** The statement that `UserControl.js` supplies `WSForm` and `MG` comes from page text (the inline comments and guards), not from this file.
- Action taken: no copy was written. The gap is recorded here as the T8 blocker. No further retry was made in this task (the brief allows one corrected inspection).
- **T20 note (2026-10-25):** the operator authorized one further bounded attempt. It also ended with an empty Properties pane and no copy. See the T20 section at the end of this record.

### Cross-asset mapping (T8 additions to the T7 table)

| JavaScript call | File | Arguments (as written) | Form feature it reaches (source) | Status |
|---|---|---|---|---|
| `WSForm.invoke("ProcessLogin", …, cb)` | `mocklogin/script/app.js` | 4: name, username, password, callback | C# `public string ProcessLogin(string username, string password)` (MockLoginPortal Form Script) | Name and parameters match in source (JS and C# comment); runtime not observed |
| `WSForm.invoke("LoadInventoryFromIDO", cb)` | `MockInventory/index.html` (inline) | 2: name, callback | C# `public void LoadInventoryFromIDO()` (MockInventoryDashboard) | From T7; unchanged |
| `WSForm.getVarValue("vInventoryJson", cb)` | `MockInventory/index.html` (inline); also `MockInventory/script.js` (unreferenced) | 2: name, callback | Form variable `vInventoryJson` (written by `LoadInventoryFromIDO`) | From T7; unchanged |
| `WSForm.generate`, `setVarValue`, `getCompValue`, `setCompValue` | none of the files read in T8 | - | - | **Absent** in `app.js`, `app.css`, `MockInventory/style.css`, `MockInventory/script.js` and the two HTML copies. `UserControl.js` unread, so absence there is unknown. |
| `MG.onReady(...)` | `MockInventory/index.html` (inline) | 1 | page-ready hook (T7) | From T7; `UserControl.js` unread |

**Form variable written by the login, not read by any inspected asset:** `vMockLoginJson` (C#, observed). No inspected JavaScript reads it. Whether another asset or the Form reads it is open.

### Dependency chains (observed in the text; no runtime)
- **Login:** `mocklogin/index.html` → (`../$app/scripts/UserControl.js`, `style/app.css`, `script/app.js`) → `app.js` `WSForm.invoke("ProcessLogin", user, password, cb)` → C# `ProcessLogin` → IDO `MockLogin` (`LoadCollection`) → Form variable `vMockLoginJson` and a Mongoose alert → return string → callback → console log only.
- **Inventory:** `MockInventory/index.html` (`style.css`, `UserControl.js`, inline script) → `WSForm.invoke("LoadInventoryFromIDO")` → C# `LoadInventoryFromIDO()` → IDO `MockInventory` (`LoadCollection`) → Form variable `vInventoryJson` → `WSForm.getVarValue("vInventoryJson")` → render.
- **No link observed** between the login chain and the inventory chain: no shared Form variable, no navigation token in `app.js`, and no call from the login page to the dashboard. How a successful login leads to the dashboard is **not shown** by these assets (open question for T12).

### Screenshots (T8)
- `evidence/EXP-128/t8-01-edit-browser-file-mocklogin-script-app-js.png`: Edit Browser File dialog, File `mocklogin/script/app.js`, Content Type `text/javascript`; the textbox is scrolled to the file end (the last visible line is `);`, with the real line breaks and indentation). Proves identity and the tail of `app.js`. Does **not** show the head of the file (the head is covered by the find text only). The status bar shows the signed-in account name: **not redacted**.
- `evidence/EXP-128/t8-02-web-assets-usercontrol-js-selected.png`: Global Objects dialog with `UserControl.js` highlighted under `$app/scripts`; the Properties pane is empty. Proves that the row was selected; does **not** show any content of `UserControl.js`. The status bar shows the signed-in account name: **not redacted**.
- No Edit Browser File image was taken for `app.css`, `MockInventory/style.css` or `script.js`. Their copies rest on the find text.

### Credential and redaction note (T8)
- Redactions: **0** in each of the four `.txt` copies. No password, token, key or connection string appears in any copied asset. The strings `"Password is required."`, the `password` input type, and the field name `Password` in the C# JSON are names or messages, not values.
- The sign-in form itself was **not** screenshotted, and no credential was typed.

### Action audit (T8, exact; this task only)
**Executed browser actions: 24** = 17 clicks by reference + 6 coordinate clicks + 1 tab select.
- Clicks by reference (17): `e5` (Edit menu); `e335` (Web User Control Assets); `e458` (app.js row); `e491` (app.js Open Edit Property Dialog); `e528` (Cancel, app.js); `e534` (app.css row); `e567` (app.css Open Edit Property Dialog); `e605` (Cancel, app.css); `e632` (UserControl.js row); `e632` (corrected re-select); `e649` (style.css row); `e682` (style.css Open Edit Property Dialog); `e719` (Cancel, style.css); `e644` (script.js row); `e753` (script.js Open Edit Property Dialog); `e791` (Cancel, script.js); `e436` (Global Objects Cancel).
- Coordinate clicks (6), one per tree arrow, no reference: (582,337) `mocklogin`; (603,359) `mocklogin/script`; (603,405) `mocklogin/style`; (582,290) `$app`; (603,382) `$app/scripts`; (582,428) `MockInventory`.
- Tab selects: 1 (Designer). Mouse wheel 0; mouse moves 0; hover 0; key presses 0; typing 0; drags 0.
- Timeouts: 0. "Ref not found": 0. Denied by the harness: 0. Attempted but not executed: 0.

Read-only browser calls (T8):
- Tab listings: **1** (explicit, before the select).
- `browser_snapshot`: **23** (2 untargeted: after the tab select and after the Web User Control Assets click; 21 targeted, of which 4 read the dialog text for the Cancel references: `e502`, `e579`, `e693`, `e765`; the rest read `e286` (Edit menu) or `e341` (Global Objects)).
- `browser_find`: **6** (Edit Browser File ×4 for text copies; "Global Objects" ×1 and "Save" ×1 for the closed-state check). Find output was used for **text only**, never for a click reference.
- `browser_take_screenshot`: **2** (`t8-01`, `t8-02`); 2 files written.

Repository and file activity (T8, not browser):
- Reads: AGENTS.md (30 lines); this record (Grep for the T8 headings); the MockLoginPortal Form Script copy (Read of lines 1–100; Grep for `ProcessLogin` and the API names); the asset folder (Grep for import, URL, API and storage tokens; Grep for skeleton and element-id tokens); PNG reads (`t8-01`, `t8-02`).
- Writes: **4 new `.txt` copies** (listed in the worker-written-file inventory below); this record (status note, T8 section and the audit).

Cumulative figures (as recorded; **not reconciled**, see the T7 section for the discrepancy): browser actions through T7 were recorded as 148; with T8's 24 the recorded figure is **172**. Clicks by reference recorded as 92 through T7, now 109. Coordinate clicks 10, now 16. Tab selects 10, now 11. Snapshots 116, now 139. Finds 31, now 37. Screenshots 64, now 66 (PNG files 63, now 65). These totals inherit the T7 unreconciled gap and must not be used as exact.

### Prohibited or out-of-scope actions (T8)
**None.** No Save (Save was disabled at every visible read; the find "Save" showed it disabled at the end); no Ctrl+S; no OK, Apply or Save in any dialog; the Global Objects dialog was closed with Cancel; no New, Import, Delete or Copy control was used; no text was typed; no file content was edited; no component, Form or script was opened; no runtime interaction; no sign-in; no navigation; no refresh; no unload; no compile or run; no browser JavaScript; no console or network inspection.

Accidental unsaved change: **none observed**.

Session expiry, sign-in, logout card, "Logout Successful", server-event processing error, HTTP 4xx/5xx: **none** in T8.

Console (Designer tab): **2 errors / 0 warnings** at the start and after every action and reading. No rise; the stop rule was not triggered. The worker did not read the console log. The Web Client console was not read.

### Procedural deviations (T8)
1. Harness header `task=T11` versus the bounded instruction "T8 only": the bounded instruction was followed (see the note at the top of this section).
2. One extra targeted snapshot and one re-select were used on `UserControl.js` beyond the "one corrected inspection" in the brief (see the blocker section). No further retry.
3. Find output (not a snapshot) was used as the source of each copy's text, because the untargeted snapshot is large. Click references came from snapshots only.
4. The "Page Elements" tab named in the brief is not present; the tree is under "Web Assets" (as in T7).

### Worker-written files (T8)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: the T6-to-T12 status note; this T8 section).
- `evidence/EXP-128/assets/mocklogin_script_app.js.txt` (new; 0 redactions; text-equivalent, not byte-exact).
- `evidence/EXP-128/assets/mocklogin_style_app.css.txt` (new; 0 redactions; text-equivalent, not byte-exact).
- `evidence/EXP-128/assets/MockInventory_style.css.txt` (new; 0 redactions; text-equivalent, not byte-exact).
- `evidence/EXP-128/assets/MockInventory_script.js.txt` (new; 0 redactions; text-equivalent, not byte-exact; labelled not referenced).
- `evidence/EXP-128/t8-01-edit-browser-file-mocklogin-script-app-js.png` and `evidence/EXP-128/t8-02-web-assets-usercontrol-js-selected.png` (2 new PNG files).
- Not written: `UserControl.js` (blocked; no copy).
- Tool-written, not worker-authored: `evidence/playwright/page-2026-10-23T08-*.yml` snapshot files and `evidence/playwright/console-2026-10-23T08-08-38-624Z.log` from the tab listing.

### Open questions after T8
44. **UserControl.js is unread (blocker).** The WSForm and MG implementation, the `WSForm.invoke` argument and callback contract, the `getVarValue` contract and the `MG.onReady` behaviour are all unverified. Operator decision needed: retry in a separate bounded task, or accept the gap.
45. Does `WSForm.invoke` pass the trailing callback to C#, and what does the callback receive (the string returned by `ProcessLogin`)? Unverified; depends on 44.
46. The Form variable `vMockLoginJson` (written by the login) is not read by any asset inspected. Which code reads it, if any?
47. The skeleton classes used by the dashboard's inline script have no rule in `MockInventory/style.css`. Are they defined in `UserControl.js`, or nowhere?
48. `MockInventory/script.js` is not referenced by `MockInventory/index.html`, and its element ids do not match that page. Is it a stale copy? Operator to say whether it should be kept as a reference or removed (no change was made).
49. The login chain and the inventory chain share no observed Form variable or navigation. How a successful login leads to the dashboard is not shown by the assets (T12).
50. Security observation (source only; for operator review before T12): the C# login method places the stored password into `vMockLoginJson` and into the success alert text, and compares the password in plain text. No value was read or recorded. Runtime effect not tested.
51. The login queries the IDO `MockLogin` (not `MockLoginIDO`); the relation between `MockLogin` and `MockLoginIDO` remains open (T10).
52. Screenshots `t7-01` to `t7-06` and `t8-01`, `t8-02` show the signed-in account name in the status bar or the Version row. **Not redacted; operator decides before sharing.**
53. Carried forward: the MockLoginPortal Form Script lines 78 onward (operator-authorized before T12); the cumulative-count reconciliation (T6 and T7 gaps); the earlier T5-to-T6 task-boundary overrun; T9 to T12 pending.

### Stop state after T8
- Designer on `designer/default.aspx`. No Form open. No dialog, menu, editor or list open (verified by the find for "Global Objects" returning no match after the last Cancel). Save disabled. User scope (status bar). Console 2 errors / 0 warnings.
- The Web Client tab (tab 1) was not used.
- **Next permitted task after T8: T9** (global variables). Done in the T9 task below. The `UserControl.js` retry (open question 44) is an operator decision, not a permitted step of T8.

---

## T9: Global variables (read-only), task cycle 14

**Task label note (procedural):** the harness header of this task read `task=T12`, while the bounded instruction read "Execute ONLY T9". The bounded instruction was followed. T9 only. T10 (MockLoginIDO), T11 (runtime) and T12 (synthesis) were **not** performed. No runtime Form was opened.

**AGENTS.md read in full in this task** (all 240 lines). The T8 task read only its first 30 lines; that earlier qualification stands and is not retroactively corrected.

Status: **complete** for the global-variable list. The Form-level counterpart (Form variables of the three Forms) was not part of this task beyond what earlier tasks recorded.

### Gate (T9)
- Tabs listed once before the first selection. Tab 0 = Designer (`designer/default.aspx`). Tab 1 = Web Client (`favoriteContext=MockLoginIDO`), not selected or read.
- Start state (Designer): no Form open (no Form tab), no dialog, Save disabled, status bar `ScopeType: User`, console **2 errors / 0 warnings**. The same 2 / 0 reading was taken after every action in T9.
- Session: usable. No sign-in, session-expiry modal, logout card or server-event error.

### Where the global variables are (observed)
- Edit menu (opened with no Form open) lists: Undo, Redo, Copy, Cut, Paste, Background Color, Component Class, Image, Property Class Extension, **Script**, Shortcut Menu, String, Theme, Validator, **Variable**, Web User Control Assets, Revert Global Object Definition.
- The entry used: **Edit > Variable** (menu item `e332`). It opened a dialog titled **"Global Objects"** with a **Variables** pane (flat list, one "name" column) and a **Properties** pane. Buttons: OK, Cancel, Help. Closed with **Cancel** (`e646`). OK was not clicked.
- **Edit > Script** was not opened in T9 (not needed for global variables; its identity remains open from T3).
- **The list has no category headers.** The categories recorded in T2 (Form - Persistent, Global - Persistent, Global - Temporary) come from the Form's Details > Variables grid, not from this dialog. Here, the Temporary rows are shown in a salmon colour and the others in the default colour.

### Global variable list (observed; 54 entries; full list in `evidence/EXP-128/global-variables-inventory.txt`)
- **Salmon-coloured group: 6 entries** = AccessAs, FarmEnableExtensionBundle, FarmEnforcePrefixFromAccessAs, Parm_DefaultStartingToEnding, Parm_DisplayReportHeaders, Parm_Site. These match the 6 Global - Temporary names recorded in T2 exactly.
- **Default-colour group: 48 entries** = the 48 Global - Persistent names recorded in T2 (the T2 list is reproduced in the inventory file).
- **Total: 54 = 48 + 6**, which reconciles the T2 counts (48 persistent and 6 temporary) with this dialog.
- **Completeness:** two passes. The top of the list (AccessAs to Parm_Site, 49 rows) and, after one view-only wheel scroll (deltaY 1500), the bottom (gbgc_bg to vsv_WBKPINumGaugeSettings). The two passes overlap, so the union is contiguous and the last row is vsv_WBKPINumGaugeSettings. The bottom screenshot shows the scrollbar at the end.
- **Colour-to-persistence link:** verified for one salmon row (`Parm_Site`: Persistent **False**, Global **True**). The other five salmon rows are grouped by colour and name match only.

### Relevant entries (values as shown when selected; credential rule applied)
| Name | Group | Value (as shown) | Persistent | Global | Version | Notes |
|---|---|---|---|---|---|---|
| `vInventoryJson` | default | empty (no text in the Value cell) | True | True | User version for user `<signed-in user>` | Global definition with the exact name the dashboard script writes/reads (T6, T7, T8). |
| `SiteFormName` | default | `Sites` | True | True | Vendor Default version | Form-related name; not otherwise used by the inspected assets. |
| `Parm_Site` | salmon | `~LIT~(DEFAULT)` | **False** | True | (no Version row shown) | Confirms the salmon group = non-persistent. |
| `MPUsername` | default | **not read** | not read | not read | not read | Name only. Credential rule: a selection would display the value. |
| `MPPassword` | default | **not read** | not read | not read | not read | Name only. Credential rule: a selection would display the value. |
| `LoginFoundUser` | default | **not read** | not read | not read | not read | Name only; may hold a user name, treated as credential-bearing. |
| `IncludeBadgeStatusVar` | default | **not read** | not read | not read | not read | Name only. Relation to the Mock Forms not established. |
| `vMockLoginJson` | - | - | - | - | - | **Not present in the global list** (checked against all 54 rows). It is a Form variable set by MockLoginPortal's `ProcessLogin` (T3 copy, line 69). |

### Answers to the T9 questions
- **MPUsername and MPPassword appear** as names in the global list (rows 42–43 of the default group). Their values, persistence and versions were **not** inspected, copied or displayed. No credential value was read or recorded.
- **vInventoryJson appears as a global definition**: Persistent True, Global True, Value empty at design time. This is a global definition, not a reference to a Form variable. The dashboard Form's Form - Persistent list (T6) does not contain it, so the script's `ThisForm.Variables("vInventoryJson")` write has a global definition of the same name in the tenant. **Which definition the script writes at runtime, and whether a Form-level `vInventoryJson` also exists in the dashboard's Form - Temporary category (not read), is not established.**
- **vMockLoginJson does not appear** in the global list. Because the list was read end to end, its absence from the global list is established. Its existence as a Form variable of MockLoginPortal is observed only from the script source (line 69). MockLoginPortal's Form - Persistent list (T2) does not contain it; its Form - Temporary category was not inspected.

### Historical observations, reconciled
- MockLoginPortal (T2): Global - Persistent 48 and Global - Temporary 6. **Reconciled**: 48 + 6 = 54 in this dialog.
- MockInventory (T4/T5): only part of the Global - Persistent list rendered (35 of about 48). **Not a difference in the global set**: the list here is tenant-wide and complete. The partial reading was a rendering limit of the Form's Details > Variables grid (recorded in T4–T5).
- MockInventoryDashboard (T6): Global - Persistent names only; Global - Temporary not read. **The global set is the same**; the gap is the same grid limit.
- The earlier MockInventory "no Form - Persistent category" observation (T4) stays a Form-level fact; it does not concern the global list.

### Screenshots (T9)
- `evidence/EXP-128/t9-01-global-variables-dialog-list.png`: Global Objects dialog, Variables list at the top (AccessAs, ccvw rows, FarmEnableExtensionBundle, FarmEnforcePrefixFromAccessAs, gbgc rows, IncludeBadgeStatusVar, ... to lse_EventChronoFrsLstInlineList); scrollbar at the top; Properties pane empty; OK, Cancel, Help. Proves the dialog identity, the flat list and the salmon rows at the top. Does not show the bottom of the list or any value.
- `evidence/EXP-128/t9-02-global-variables-dialog-list-scrolled-end.png`: the same dialog after one view-only scroll; the bottom rows (lsm1_DefaultReporType ... vsv_WBKPINumGaugeSettings); salmon Parm_DefaultStartingToEnding, Parm_DisplayReportHeaders, Parm_Site; scrollbar at the end; `MPUsername` has a pointer-hover highlight only (the Properties pane is empty, so no row is selected). Proves the bottom of the list and the group colours. Does not prove the flags of any row, and shows no values.
- The screenshots show the signed-in account name in the status bar. **Not redacted; operator decides before sharing.**

### Redactions (T9)
- **0 credential values** copied or displayed in the evidence. The only account-related text is `User version for user <signed-in user>` (written as the placeholder, not the name). No file contains a password, token, key or connection string.
- Names `MPPassword` and `MPUsername` are recorded as names only, as the operator authorised earlier.

### Action audit (T9, exact; this task only)
**Executed browser actions: 9** = 6 clicks by reference + 1 mouse move + 1 mouse wheel (view only) + 1 tab select.
- Clicks by reference executed (6): `e5` (Edit menu); `e332` (Variable menu item); `e658` (vInventoryJson row, selected); `e604` (Parm_Site row, selected); `e653` (SiteFormName row, selected; the first attempt failed with "Ref not found" and was not executed; the second attempt used a ref from a fresh snapshot); `e646` (Cancel).
- Mouse move: 1 (to (760, 480), over the Variables list, to make the wheel scroll the list).
- Mouse wheel: 1 (deltaY 1500, view only).
- Tab selects: 1 (Designer). Tab listings: 1 (before the select).
- Coordinate clicks: 0. Key presses: 0. Typing: 0. Hover actions other than the pointer position above: 0. Drags: 0.
- **Attempted but not executed:** 2 — (a) click `e653` returned "Ref e653 not found" (no action executed); (b) targeted snapshot of `e341` returned "Ref e341 not found" (no content). Both were followed by one fresh untargeted snapshot. Timeouts: 0. Denied by the harness: 0.
- Attempted total: 11 (9 executed + 1 failed click + 1 failed snapshot).

Read-only calls (T9):
- `browser_snapshot`: 10 calls: 4 untargeted (start; after the Variable click; the recovery after the `e653` error; the recovery after the `e341` error) and 6 targeted (`e286` Edit menu; `e341` dialog ×3 of which one failed; `e633` Properties tree ×2). **9 succeeded, 1 failed** ("Ref e341 not found").
- `browser_find`: 2 ("Global Objects" and "Save"; both used for the closed-state check; no find output was used as a click reference).
- `browser_take_screenshot`: 2 (`t9-01`, `t9-02`); 2 PNG files written.
- Repository and file activity (not browser): AGENTS.md (full read); this record (Grep and Read of the T9 context); 2 PNG reads (`t9-01`, `t9-02`); 1 new text file written (`global-variables-inventory.txt`); this record edited (status notes and the T9 section).

**Cumulative figures:** the T7 and T8 sections recorded cumulative totals (browser actions 148 through T7 and 172 through T8) that do not reconcile with the per-section sums (see the T7 section). Those totals are not forced into agreement here. As recorded, adding T9's 9 executed actions gives **181 (as recorded, not reconciled)**; clicks by reference 109 + 6 = **115 (as recorded)**; snapshots 139 + 10 = **149 (as recorded)**, of which 9 succeeded; finds 37 + 2 = **39 (as recorded)**; screenshots 66 + 2 = **68 calls (as recorded)**, PNG files 65 + 2 = **67 (as recorded)**; tab selects 11 + 1 = **12 (as recorded)**; mouse wheel 25 + 1 = **26 (as recorded)**; mouse moves 6 + 1 = **7 (as recorded)**; coordinate clicks 16 (unchanged). These are the T8 figures plus the T9 counts above and carry the same unreconciled gap.

Prohibited or out-of-scope actions (T9): **none**. No Save (Save disabled at every read); no Ctrl+S; no OK, Apply or Save in any dialog; the Global Objects dialog was closed with Cancel; no variable was created, edited, deleted or renamed; no New, Delete or Copy control was used (the dialog's icon buttons at the bottom-left were not clicked); no text was typed; no Edit > Script opened; no runtime Form opened; no sign-in; no navigation; no refresh; no unload; no compile or run; no browser JavaScript; no console or network inspection.

Accidental unsaved change: **none observed.** Save disabled before and after every step.

Session expiry, sign-in, logout card, "Logout Successful", server-event processing error, HTTP 4xx/5xx: **none** in T9.

Console (Designer tab): **2 errors / 0 warnings** at the start and after every action and reading. No rise; the stop rule was not triggered. The worker did not read the console log.

### Worker-written files (T9)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: the T6-to-T12 status note; the T8 "next permitted task" line; this T9 section).
- `evidence/EXP-128/global-variables-inventory.txt` (new; 54 names; 0 credential values; the account name written as `<signed-in user>`).
- `evidence/EXP-128/t9-01-global-variables-dialog-list.png` and `evidence/EXP-128/t9-02-global-variables-dialog-list-scrolled-end.png` (2 new PNG files).
- Tool-written, not worker-authored: `evidence/playwright/page-2026-10-23T08-*.yml` snapshot files and `evidence/playwright/console-2026-10-23T08-18-27-024Z.log` from the tab listing.

### Open questions after T9
54. Which definition does `ThisForm.Variables("vInventoryJson")` write or read at runtime: the global definition found here (Value empty at design time), or a Form-level variable of the dashboard's Form - Temporary category (not read)? Needs a read of that category (a bounded task), not inferred.
55. `vMockLoginJson` (a Form variable of MockLoginPortal, set at line 69 of the C# method) does not appear in the global list. Its Form - Temporary category, if any, was not inspected in T9. Also unresolved: which asset or Form reads it (none of the inspected assets does).
56. MPUsername and MPPassword: present as names; their values and flags were withheld under the credential rule. Whether these are the credentials that the login flow compares against is an open question for the operator. The login C# method reads the stored password from the MockLogin IDO (T3), not from these globals; no link is observed in the source read so far.
57. The salmon group is confirmed as non-persistent for one row (`Parm_Site`). The other five salmon rows are matched by colour and by the T2 names; their flags are not individually verified.
58. The Global Objects Variables list has no category headers; the T2 category view belongs to Details > Variables. The two views agree in total (54) and in membership of the temporary group.
59. `LoginFoundUser` and `IncludeBadgeStatusVar`: names only. Whether either is used by the Mock Forms is not established; the value and flags were not read (LoginFoundUser possibly a user name).
60. Screenshots `t9-01` and `t9-02` show the signed-in account name in the status bar. **Not redacted; operator decides before sharing.**
61. Carried forward: the UserControl.js block (T8, open question 44); the MockLoginPortal Form Script lines 78 onward (operator-authorised before T12); the cumulative-count reconciliation (T6 to T9); the earlier T5-to-T6 task-boundary overrun; T10 to T12 pending.

### Stop state after T9
- Designer on `designer/default.aspx`. No Form open. No dialog, menu, editor or list open (the `Global Objects` find returns no match after the Cancel). Save disabled (find). User scope (status bar). Console 2 errors / 0 warnings.
- The Web Client tab (tab 1) was not used.
- **Next permitted task: T10** (MockLoginIDO metadata in the Web Client, as the brief describes; not performed here). The `UserControl.js` retry and the Form-level `vInventoryJson` / `vMockLoginJson` checks are operator or bounded-task decisions.

---

## T10: MockLoginIDO metadata (read-only), task cycle 15

**Task label note (procedural):** the harness header read `task=T13`, while the bounded instruction read "Execute ONLY T10". The bounded instruction was followed. T10 only. T11 (runtime look), T12 (synthesis) and the remaining recovery items were **not** performed. No runtime Form was opened in the Web Client.

**AGENTS.md read in full in this task** (240 lines). The record's T10 notes and the T1 and T4 notes on `MockLoginIDO` were read before the first browser action.

### Core result (what the Form is bound to)
- **The Designer Form named `MockLoginIDO` has its primary collection `MockLogin`, not an IDO named `MockLoginIDO`.** Observed directly in Details > Collections: `Primary Collection: MockLogin`; Collection `MockLogin`; Base Table and Alias "The primary table and its alias for this IDO is MockLogin mock_login".
- The IDO `MockLogin` is also the name passed to `IDOClient.LoadCollection("MockLogin", …)` in the MockLoginPortal `ProcessLogin` method (T3 copy, line 36). **Source-level name match only** between the MockLoginIDO Form's bound IDO and the login method's IDO. Whether the two are the same runtime object is not verified.
- No IDO named `MockLoginIDO` is shown anywhere in the Form's metadata. Whether such an IDO exists is **not established** (the IDO list could not be read without typing).
- **The IDO definition itself (project, assembly, methods, property classes, bindings) was NOT inspected.** Reasons below.

### Gate (T10)
- Tabs listed once before the first selection. Tab 0 = Designer (`designer/default.aspx`). Tab 1 = Web Client (`favoriteContext=MockLoginIDO`), not selected or read.
- Start state: no Form open, no dialog, Save disabled, status bar `ScopeType: User`, console **2 errors / 0 warnings**.
- Session usable. No sign-in, session-expiry, logout card or server-event error in T10.

### Form MockLoginIDO (Designer; opened by the Form menu's recent entry `MockLoginIDO`)
- Properties (Form tab): Name `MockLoginIDO`; Description blank; Caption blank; Version `User version for user <signed-in user>`; Device Type `Default`; Form Type `Normal`; Is Master `True`. No template row. (Consistent with T1, which recorded the same values.)
- Details > Collections: Primary Collection `MockLogin`; no secondary collection shown. Expanded once with the tree's Expand button. Property list (36 names, rendered): _ItemId, _ItemWarnings, CreateDate, CreatedBy, ID, InWorkflow, NoteExistsFlag, Password, RecordDate, Role, RowPointer, Store, UDFDateTime1–6, UDFDecimal1–6, UDFInteger1–6, UDFLongText1–2, UDFMediumText1–4. **`Username` is not in the rendered list** although the grid binds `object.Username`; the list ends at UDFMediumText4. Unresolved (may be cut off in the tree).
- Collection node properties: Collection `MockLogin`; Base Table and Alias "MockLogin mock_login"; Collection Name, Custom Load Method, Method Parameters, Read Mode, Options: no value shown.
- Details > Components: `Pane (00)` > `FormCollectionGrid` (Type Grid; Binding Type `Primary Collection Grid`; Binding `objects`; Enabled When, Visible When, Required When and all Events blank; Drag and Drop 0 events) > five GridColumn rows: `IDGridCol` (`object.ID`), `UsernameGridCol` (`object.Username`), `PasswordGridCol` (`object.Password`), `RoleGridCol` (`object.Role`), `StoreGridCol` (`object.Store`). Seven component rows in total. No UserControl.
- Details > Event Handlers: column headers (Sequence, Response Type, Disabled, Response Parameters) and **no rows rendered**. Recorded as "no rows visible", not as proof of none.
- Details > Variables: categories `Global - Persistent` and `Global - Temporary` only. **No Form-level category**, so this Form declares no Form variables. The global lists were not expanded (T9 covered them).
- Form Script (Edit > Form Script; opened once; closed with Cancel): a **VB.NET skeleton** (despite the `.cs.txt` file name, which follows the existing convention). `Option Explicit On`, `Option Strict On`, four `Imports` (System, Microsoft.VisualBasic, Mongoose.IDO.Protocol, Mongoose.Scripting), `Namespace Mongoose.FormScripts`, `Public Class MockLoginIDO : Inherits FormScript`, body only `' Methods go here`. **No method, no IDO call, no variable, no event.** Copy: `evidence/EXP-128/MockLoginIDO-form-script.cs.txt` (complete, 20 lines, 0 redactions; blank-line positions from the screenshot).

### The Designer's IDO interface (why the IDO definition was not inspected)
- Form menu entry `IDOs` (its recent-form list has `MockLogin`, `MockLoginIDO`, `MockInventory`, `MockInventoryDashboard`, `MockLoginPortal`) **opened a Mongoose system Form, `IdoCollections`** (Name `IdoCollections`, caption `fIDOs`, Version `Vendor Default version`, Form Type `Normal`), in a new Form tab named `IDOs`.
- That Form has an IDO grid (columns IDO Name, Description, Locked By, Revision Date, Revision Num) with **no rows rendered**, and blank detail fields. Reading the list needs a typed `IDO Name:` filter. Typing is restricted to the Select Form filter in this task, so no filter was typed.
- The same Form exposes **Check Out, Undo Check Out, New IDO, New Table, New Property, New Method, New Data Rule, Compare** and other editing controls. **None was clicked.**
- Screenshot: `evidence/EXP-128/t10-02-designer-idos-idocollections-form.png` (empty grid; buttons visible).
- Closed through its Form-tab close control (`closable IDOs`). No save prompt (clean).
- **Conclusion:** the Designer's IDO interface does not show MockLoginIDO or MockLogin without typing. **The IDO was not inspected via the Designer.**

### Web Client route (not performed)
- The original T10 step (runtime IDOs Form, one Filter In Place click, `MockLoginIDO` typed in the IDO name criteria, F4, then the Properties and Methods tabs) was **not** run. This bounded instruction lists Filter In Place among prohibited actions for this step, so it was not run. **The operator must authorise it in a separate bounded task** if the IDO definition is required.

### Unsaved change observed (accidental; not saved)
- Save was **disabled** at the Edit-menu read (taken just before the Form Script step) and **enabled** at the next read (after the Form Script editor was opened and cancelled, and the Form menu was opened). The sequence is the same as the T5 observation: the Form Script editor open and Cancel are the probable cause. Not confirmed by a single-step read.
- Save and Regenerate Form were enabled in the toolbar, and the Save icon was active in the screenshot `t10-03`.
- At the Form close, a prompt appeared: "Form MockLoginIDO has changed. Do you want to save the form definition?" **Answered No** (the default-focus button Yes was not used). The Designer returned to `designer/default.aspx` with Save disabled.

### Screenshots (T10)
- `t10-01-mockloginido-form-script-editor.png`: Script Editor, lines 1–20 (VB.NET skeleton). Proves the script text and layout; no credential shown.
- `t10-02-designer-idos-idocollections-form.png`: IdoCollections (`IDOs`) Form, empty IDO grid. Proves the grid shows no rows in this view; does **not** prove that no IDOs exist.
- `t10-03-mockloginido-details-collections.png`: MockLoginIDO Form with canvas (ID 3; other cells blank), Details > Collections (`Primary Collection: MockLogin`, collapsed in this image), Form properties (Name, Form Type Normal, Is Master True), active Save icon. Proves the collection name and the Form properties; does not show the expanded property list (the text record holds it).
- The status bars show the signed-in account name. **Not redacted; the operator decides before sharing.**

### Redactions (T10)
- 0 credential values. The canvas data row's Username, Password, Role and Store cells are blank in the accessibility text and in the screenshot; no record value was read or copied. The Version placeholder is written as `<signed-in user>`. One placeholder used; 0 credential values.

### Metadata file
- `evidence/EXP-128/MockLoginIDO-metadata.txt` (new): Form metadata (A), the bound IDO `MockLogin` (B), what was not inspected (C), redactions (D), screenshots (E), source-copy status (F).

### Action audit (T10, exact; this task only)
Executed browser actions: **20** = 1 tab select + 19 clicks by reference. (No coordinate clicks, mouse moves, wheel, key presses, typing, drags or hovers.)
- Clicks by reference (19): `e3` Form menu; `e306` MockLoginIDO recent entry; `e396` Details Expand Panel; `e534` Collections tree Expand; `e545` Primary Collection row; `e515` Components tab; `e854` Components grid Expand; `e970` FormCollectionGrid row; `e517` Event Handlers tab; `e519` Variables tab; `e5` Edit menu (the first attempt returned "Ref e5 not found" and was not executed; the second attempt followed a fresh snapshot); `e2100` Form Script menu item; `e2297` Script Editor Cancel; `e3` Form menu (second); `e315` IDOs menu item; `e2313` IDOs Form-tab close; `e2807` Collections tab; `e332` MockLoginIDO Form-tab close; `e2980` No (save prompt).
- Attempted but not executed: 1 (the `e5` click, "Ref not found").
- Tab selects: 1 (Designer). Tab listings: 1 (before the select).
- Read-only calls: `browser_snapshot` **23** (21 succeeded; 2 returned "Ref not found": `e523` and `e286`, each followed by one fresh untargeted snapshot). Of the 23, 9 were targeted (`e333` ×3, `e510`, `e523`, `e286`, `e2144`, `e3`, `e2974`; the two error reads are among them) and 14 were untargeted. `browser_find` **3** ("Script Editor"; "IDOs"; one regex for the save prompt; find output was not used as a click reference). `browser_take_screenshot` **3** (`t10-01`, `t10-02`, `t10-03`).
- Repository and file activity (not browser): AGENTS.md (full read); this record (Grep and Read of the T1, T4 and T9 notes); PNG reads (`t10-01` to `t10-03`); 2 new text files written (`MockLoginIDO-form-script.cs.txt`, `MockLoginIDO-metadata.txt`); this record edited (status note and this section).
- Tool-written, not worker-authored: `evidence/playwright/page-2026-10-23T08-*.yml` snapshot files and `evidence/playwright/console-2026-10-23T08-23-50-938Z.log` from the tab listing.

**Cumulative figures (as recorded; not reconciled):** the T9 section recorded 181 executed actions through T9 (as recorded). Adding T10's 20 gives **201 (as recorded, not reconciled)**. Clicks by reference: T9 recorded 115, now 134. Coordinate clicks: 16 (unchanged). Tab selects: T9 recorded 12, now 13. Snapshots: T9 recorded 149, now 172 (of which 21 succeeded in T10). Finds: 39 + 3 = 42. Screenshot calls: 68 + 3 = 71; PNG files 67 + 3 = 70. Mouse wheel 26 (unchanged). These totals inherit the T6–T9 gaps described in the T7 and T9 sections and must not be used as exact.

### Prohibited or out-of-scope actions (T10)
**None.** No Save (Save was not clicked; the prompt's No was answered); no Ctrl+S; no OK, Apply or Save in any dialog; the Script Editor was closed with Cancel; the IDOs Form was closed with its close control; no Check Out, Undo Check Out, New, Regenerate or Delete control was clicked; no text was typed; no Filter In Place was run; no IDO method was invoked; no record data was opened; no runtime Form was opened; no sign-in; no navigation; no refresh; no unload; no compile or run; no browser JavaScript; no console or network inspection.

Session expiry, sign-in, logout card, "Logout Successful", server-event processing error, HTTP 4xx/5xx: **none** in T10.

Console (Designer tab): **2 errors / 0 warnings** at the start and after every action and reading. No rise; the stop rule was not triggered. The worker did not read the console log.

### Worker-written files (T10)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: the T10 status note; this T10 section).
- `evidence/EXP-128/MockLoginIDO-form-script.cs.txt` (new; complete; 20 lines; 0 redactions; VB.NET despite the file name).
- `evidence/EXP-128/MockLoginIDO-metadata.txt` (new; inventory; 0 credential values).
- `evidence/EXP-128/t10-01-mockloginido-form-script-editor.png`, `evidence/EXP-128/t10-02-designer-idos-idocollections-form.png`, `evidence/EXP-128/t10-03-mockloginido-details-collections.png` (3 new PNG files).

### Open questions after T10
62. **The IDO definition behind MockLoginIDO is not inspected.** The bound IDO is `MockLogin`. Operator decision: authorise the Web Client IDOs Filter In Place route (original T10 step) in a separate bounded task, or accept the gap.
63. Is `MockLogin` the same runtime object as the IDO that `ProcessLogin` queries? Source-level name match only. Not verified.
64. `Username` is bound by `UsernameGridCol` (object.Username) but is not in the rendered 36-name property list. Whether the property is absent from the IDO or cut off in the tree is unresolved.
65. The Form `MockLogin` appears as a recent Form entry in the Designer's Form menu. Its existence and contents were not inspected in T10 (not in scope); it may be relevant to the MockLogin IDO relationship.
66. The Form `MockLoginIDO` has no Form variables and an empty Form Script (no IDO call). Its only data binding is the grid on `MockLogin`. Whether the runtime Form shows the login data is a T11 question.
67. The Event Handlers panel showed no rows (rendering not cross-checked). Recorded as "no rows visible".
68. Accidental unsaved change after the Form Script editor open and Cancel (sequence-based, not single-step confirmed). Answered No; the Form is closed.
69. Carried forward: the MockLoginPortal Form Script lines 78 onward (operator-authorised before T12); the `$app/scripts/UserControl.js` block (T8); the login method's plaintext-password handling (T3 copy lines 33–77, T6, T8, T9 notes), a source-level security observation for operator review, not tested; the cumulative-count gaps (T6–T10); the earlier T5-to-T6 task-boundary overrun; the MockInventory 'script.js' status (unreferenced).

### Stop state after T10
- Designer on `designer/default.aspx`. **No Form open.** No dialog, menu, editor, prompt or list open (a fresh untargeted snapshot confirms; the `Global Objects` and save-prompt finds were not needed after the No). **Save disabled.** User scope (status bar). Console 2 errors / 0 warnings.
- The Web Client tab (tab 1) was not used.
- **Next planned phase: T11** (runtime look: MockLoginPortal, MockInventory and the dashboard in the Web Client, one open each, no interaction). T11 was not started. Recovery work still required before T12 synthesis: the MockLoginPortal Form Script lines 78 onward; the `UserControl.js` block (needs a separate bounded authorisation); and the IDO definition if the operator authorises the Web Client route.

---

## T11: Runtime look, Web Client (no interaction), task cycle 16

**Task label note (procedural):** the harness header of this task read `task=T14`, while the bounded instruction read "Execute ONLY T11". The bounded instruction was followed. T11 only. T12 (synthesis) and the recovery items were **not** started.

**AGENTS.md read in full in this task** (240 lines). The T11 instructions in the record were read before the first browser action.

### Gate (T11)
- Tabs listed once before the first selection: tab 0 = Designer (`designer/default.aspx`), tab 1 = Web Client (`favoriteContext=MockLoginIDO`). Tab 1 was selected by index, then a fresh untargeted snapshot taken. Tab 0 was **not** selected or read in T11.
- **Web Client console baseline, established in this task: 5 errors / 2 warnings.** This is the Web Client tab's own count (the Designer's 2 / 0 is separate). It was not read in an earlier task, so the "previously 2" figure in the brief does not apply to this tab. It was unchanged at every reading after each action.
- Session: active. No sign-in page, logout card, "Logout Successful", expired-session condition or server-event error.
- Forms open at the start: **only `MockLoginIDO`** (Form tab, pre-existing, not touched). The five Form tabs recorded in T1 were no longer open; the operator's earlier refresh is the likely cause (not verified).
- Form menu recent entries (order differed between openings): `MockLoginPortal`, `MockInventory`, `MockInventoryDashboard`, `MockLogin`, `MockLoginIDO`.

### Method (all three Forms)
- Each Form was opened once from the Web Client's Form menu recent entry. Not used: Select Form (`Open`), Filter in Place, typing, any key press.
- After each open: a wait of 5 s, 6 s or 8 s, one snapshot and one screenshot. Then the Form was closed through its own Form-tab close control. **No save prompt appeared for any of the three.**
- No control inside any Form was clicked. No text was typed. No credential was entered, and the Sign In control of the login card was not pressed.

### MockLoginPortal (runtime, observed)
- Form tab `MockLoginPortal` selected, beside `MockLoginIDO`. The Form body is its user-control page (`mocklogin/index.html`), rendered in a nested frame.
- **The Form shows its own sign-in card** (this is the Form's page, not a Mongoose sign-in; the Web Client stayed signed in). Visible: brand "WAREHOUSE / MANAGEMENT SYSTEM"; "WELCOME BACK"; heading "Sign in to your account"; line "Enter your credentials to continue to your workspace."; "Username" with an empty text field (placeholder "Enter your username"); "Password" with an empty password field (placeholder "Enter your password") and a "Show password" toggle; a "Sign In" button; footer "Secure access to your workspace".
- No validation or error text was visible at open (the page's error elements are hidden by default in its source, T8).
- Form toolbar: Save disabled; New, Delete, Refresh, Filter in Place, Export To Excel disabled (no Web Client grid on this Form).
- Not done: no entry in the fields, no Sign In press, no `ProcessLogin` call. No filled credential field exists in any capture.
- Screenshot: `evidence/EXP-128/t11-01-runtime-mocklogin-portal.png`. **Proves:** the card renders in the Web Client with empty fields and no visible error. **Does not prove:** that the page's JavaScript initialised (only the visual state is seen; no interaction was made to test it). Status bar at top right shows the signed-in account (not redacted; the operator decides before sharing).

### MockInventory (runtime, observed)
- Form tab `MockInventory` selected, beside `MockLoginIDO`. Layout: a narrow grid at the left with one current row, and a detail form to the right of it.
- **Column headers as exposed in the accessibility tree:** ID*, Item*, Description*, Warehouse*, Quantity On Hand*, Reorder Level*, Location* (asterisks as rendered, marking required fields). **In the screenshot, only the ID column is visible in the grid area**; the other headers are not visible in the image. This difference is recorded, not resolved (possibly a clipped or overlapping layout).
- Detail form labels: ID*, Item*, Description*, Warehouse*, Quantity On Hand*, Reorder Level*, Location*. The ID field holds the current record's key (shown as 15) and has the runtime's default focus with its text selected (I did not type or press keys). The other detail fields are empty in the view. Business values of the record were not recorded.
- Toolbar: Save disabled; New, Delete, Refresh, Filter in Place and Export To Excel enabled (these were not used).
- Not done: no selection, filter, edit, search or key press.
- Screenshot: `evidence/EXP-128/t11-02-runtime-mockinventory.png`. **Proves:** the detail layout, the record key and the focus state at open, and that the grid area shows only the ID column in this view. **Does not prove:** the other grid columns or their values. The account name in the status bar is visible (not redacted).

### MockInventoryDashboard (runtime, observed)
- Form tab `MockInventoryDashboard` selected, beside `MockLoginIDO`. A small funnel-shaped icon appears beside the Form title in the tab; its meaning was not established (not inspected).
- The Form body renders the HTML UserControl (`MockInventory/index.html`) in a nested frame. **Rendered content after the settle period (8 s):**
  - Header: "INFOR MONGOOSE"; "Inventory Dashboard"; "Monitor inventory levels and stock availability."
  - Controls: "Auto-refresh" (checked); "Alerts" (checked); "every [5] sec"; status "Updated 4:34:47 PM" in the snapshot; "Refresh Data" button.
  - Four summary cards: **Total Items 14; Total Units 1,075; Low Stock 3; Out of Stock 1.**
  - "Inventory Records" panel, search box "Search item, description, warehouse...", table headers Item, Description, Location, Warehouse, Quantity, Reorder Level, Status, Action; **14 rows, SKU001 to SKU014**, each with a "View" button; footer "14 records" and "Inventory overview"; collapsed "View Raw Inventory JSON".
  - Status badges per row (In Stock, Low Stock, Out of Stock) follow the page's rule (quantity against reorder level).
- No loading skeleton, no "Unable to load" message and no empty-state text was visible at settle.
- **Autonomous refresh, observed:** the status text changed from "Updated 4:34:47 PM" (snapshot, about 8–10 s after the open) to "Updated 4:34:57 PM" (screenshot, 10 s later), with no interaction. This matches the page's own 5-second auto-refresh (T8 source). The T8 source writes this timestamp only after `vInventoryJson` has been read and rendered, so the change is **consistent with** the `WSForm.invoke` → `getVarValue` chain completing on a later cycle. It is not separately verified: no console or network reading was made, which the brief prohibits.
- **Rendered data, observed:** in two rows the Location and Warehouse values appear in each other's columns. SKU005: Location `WH02`, Warehouse `C-02-05`. SKU012: Location `WH01`, Warehouse `D-01-03`. The other 12 rows show a location-style code in Location and a `WH` code in Warehouse. The cause (the data as stored, or the page's column mapping) is **not established**. The page maps `row.Location` and `row.Warehouse` as written (T8).
- Alerts is checked, but no toast appeared in the captures or the observation window (no change occurred that the page would notify).
- Not done: "Refresh Data" was not clicked; no search; no "View"; no toggle of Auto-refresh or Alerts.
- Screenshot: `evidence/EXP-128/t11-03-runtime-mockinventory-dashboard.png`. **Proves:** the rendered dashboard, the summary figures, the 14 rows and the second timestamp reading. **Does not prove:** any console or network result, or which call produced the data. The account name in the status bar is visible (not redacted).

### Console counts (T11, Web Client tab)
- Baseline 5 errors / 2 warnings. Reading after **every** action (tab select, each click, each wait, each screenshot-bearing step): **5 / 2, unchanged**. No rise, so the stop rule was not triggered.
- The tool output showed "New console entries" lines on several actions. The worker did not read the tool-written log.
- Designer tab (tab 0): not selected in T11. Its last reading (T10) was 2 / 0; not re-read.

### Stop rules and state checks
- No sign-in, logout, expired-session, "Logout Successful" or server-event processing error occurred.
- No Form showed Save enabled; no save prompt appeared on close.
- The Web Client scope was not re-read (the status bar in the captures shows the Mongoose user label, not the scope); the Designer's User scope was last read in T10.

### Action audit (T11, exact; this task only)
Executed browser actions: **10** = 1 tab select + 9 clicks by reference.
- Clicks by reference (9): `f1e10` Form menu (three times, before each open); `f1e186` MockLoginPortal recent entry; `f1e211` close MockLoginPortal; `f1e231` MockInventory recent entry; `f1e235` close MockInventory; `f1e189` MockInventoryDashboard recent entry; `f1e383` close MockInventoryDashboard. All nine succeeded; none timed out; no "Ref not found" occurred.
- Coordinate clicks: 0. Typing: 0. Key presses: 0. Mouse wheel: 0. Mouse moves: 0. Hover: 0. Drags: 0.
- Attempted but not executed: 0. Timeouts: 0. Denied by the harness: 0.
- Non-mutating waits: 3 (5 s, 6 s and 8 s; the 6 s wait was combined with a snapshot).
- Tab listings: 1 (before the first selection). Tab selects: 1 (index 1, Web Client).
- `browser_snapshot`: 10 (all untargeted; all succeeded). `browser_find`: 0.
- `browser_take_screenshot`: 3 (`t11-01`, `t11-02`, `t11-03`), 3 PNG files written.
- Repository and file activity (not browser): AGENTS.md (full read, once); the record (two Grep calls and this edit set); three PNG reads for verification.

**Cumulative figures, as recorded (not reconciled):** the T10 section gave 201 executed actions through T10. Adding T11's 10 gives **211 (as recorded)**. Clicks by reference 134 + 9 = **143 (as recorded)**; coordinate clicks 16 (unchanged); tab selects 13 + 1 = **14 (as recorded)**; snapshots 172 + 10 = **182 (as recorded)**; finds 42 (unchanged); screenshot calls 71 + 3 = **74 (as recorded)**; PNG files 70 + 3 = **73 (as recorded)**; mouse wheel 26 and mouse moves 7 (unchanged). These totals carry the T6–T10 gaps described in the earlier sections and must not be used as exact.

### Prohibited or out-of-scope actions (T11)
**None.** No Save; no Ctrl+S; no OK, Apply or Save in any dialog (no dialog was opened); no save prompt answered Yes; no text typed; no control inside any Form clicked; no login attempted; no ProcessLogin or any Form method invoked; no Filter in Place; no IDO inspection; no record data read or copied; no refresh; no navigation; no unload; no compile or run; no browser JavaScript; no console or network inspection.

### Credential handling and redactions (T11)
- No credential value was typed, read, displayed or copied. The login fields were empty in every capture.
- The account name appears in the status bar of `t11-01` to `t11-03` and is not redacted in those images. In the text it is written as `<signed-in user>`.
- Redactions made in this section: 1 placeholder (the account name). 0 credential values.

### Worker-written files (T11)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (edited: the T11 status note; this T11 section).
- `evidence/EXP-128/t11-01-runtime-mocklogin-portal.png`, `evidence/EXP-128/t11-02-runtime-mockinventory.png`, `evidence/EXP-128/t11-03-runtime-mockinventory-dashboard.png` (3 new PNG files).
- No `.txt` copy (T11 copies no script or asset).
- Tool-written, not worker-authored: `evidence/playwright/page-2026-10-23T08-*.yml` snapshot files and `evidence/playwright/console-2026-10-23T08-33-00-357Z.log` (tab listing).

### Open questions after T11
70. **MockInventory grid:** the accessibility tree lists seven column headers, but the screenshot shows only the ID column in the grid area. Layout clipping, or a grid that shows one column in this view? Unresolved; needs a bounded view, not inferred.
71. **Dashboard Location/Warehouse swap** in SKU005 and SKU012: data as stored, or the page's mapping? Not established. Resolving it would mean reading the underlying rows, which needs operator authorisation.
72. **Funnel icon** beside the MockInventoryDashboard title: meaning not established (possibly a Form-level filter setting).
73. **Dashboard refresh chain:** the timestamp change shows the page refreshing on its own; the individual `WSForm.invoke` and `getVarValue` calls were not observed (no console or network reading is permitted in this experiment).
74. **MockLoginPortal login card:** its visual state was seen; whether its JavaScript initialised (for example, whether the controls respond) was not tested, because no interaction is permitted in T11.
75. **Alerts toast:** none appeared. Whether it would appear on a data change is unverified (no change occurred in the window).
76. **Account name** appears unredacted in `t11-01` to `t11-03` and in the earlier screenshots. Operator decides before sharing.
77. **Web Client `MockLoginIDO` tab** remains open and untouched. The operator decides whether it is closed before T12.
78. **Carried forward (not done in T11):** the MockLoginPortal Form Script from line 78 onward (operator-authorised before T12); the `$app/scripts/UserControl.js` block (T8, needs separate authorisation); the `MockLogin` IDO definition (T10; the Web Client Filter In Place route needs separate authorisation); the cumulative-count gaps (T6–T11); the earlier T5-to-T6 overrun; the plaintext-password source observation in the login method (T3, T6, T8, T9), for operator review, not tested.

### Stop state after T11
- **Web Client:** only `MockLoginIDO` is open (pre-existing, untouched). No Form other than that is open. No dialog, menu, prompt or list is open (the snapshot after the last close confirms). Save disabled. Console 5 errors / 2 warnings (Web Client baseline; unchanged).
- **Designer (tab 0):** not selected in T11. Its last state (from T10) was: no Form open, no dialog, Save disabled, User scope, console 2 / 0. Not re-verified in T11.
- No runtime Form is left open that T11 opened.

### Is T12 ready to begin? (for the operator)
- **Yes, as a qualified draft.** The observed material now covers all three Forms at runtime (T11), the Form structures (T2, T4, T6), the scripts (T3 partial, T5, T6, T10), the assets (T7, T8 partial), the globals (T9) and the IDO's bound collection (T10).
- **Two items would materially change the synthesis and are still open:**
  1. The **MockLoginPortal Form Script after line 77** (the rest of `ProcessLogin`, including what it returns and whether it navigates or updates anything after a successful login). The login-to-dashboard link cannot be described completely without it. The operator authorised this recovery before T12.
  2. **`$app/scripts/UserControl.js`** (the shared WSForm and MG implementation, including the `invoke` callback contract). The WSForm mapping stays name-level without it.
- **Recommendation:** run the bounded MockLoginPortal script recovery (item 1) first, and decide on UserControl.js (item 2). Then start T12. If the operator prefers, T12 can start now, with the login-to-dashboard path and the callback contract explicitly marked as unresolved.

---

## Pre-T12 source recovery, MockLoginPortal Form Script (task cycle 17, header label T16): BLOCKED

**Task label note (procedural):** the harness header read `task=T16`; the bounded instruction was "Inspect current state and continue the saved bounded task; do not replay prior actions." The saved task is the MockLoginPortal Form Script recovery from line 78 (T15 bounded instruction). That reading was applied. T12 synthesis was not started.

**AGENTS.md:** read in full earlier in this conversation (T15 task). It was **not re-read in this task** (procedural deviation; recorded, not corrected retroactively).

### Starting state (observed, read-only)
- Tab list (before any selection): tab 0 = Designer, `designer/Default.aspx`, with a long launch query (`inforSessionId`, `configgroup`); tab 1 = Web Client at the portal root, without `favoriteContext`. The Web Client tab was not selected, read or interacted with.
- Designer: no Form open (no Form tab), no dialog, no Script Editor, Save disabled, Regenerate Form disabled, console **2 errors / 0 warnings** (Designer baseline).
- Status bar: `ScopeType: User`, with a **different ScopeName** from every earlier task in this record. Written as `<signed-in user>`. This is an observed change in the signed-in account and needs operator confirmation.
- The Script Editor position from T15 (scrolled to line 90) was **no longer present**: MockLoginPortal was closed and no editor was open. The cause is not established (possibly a page reload or new session launch; not verified). Nothing was replayed.
- Designer Form menu, recent entries: `FX_CustomerPortal`, `FX_Orders`, `Test ION API Invoke`, `Access As`, `EX_Items`, `IDO Projects`, `FX_Items`, `FX_FlexProbe01`, `FX_OrdersChart`, `FX_HelloWorld01`. **No `MockLoginPortal`, `MockInventory`, `MockInventoryDashboard` or `MockLoginIDO` entry.**
- The Designer's Form menu has no Select Form entry (confirmed again; T1 note). The only Select Form route is in the Web Client, which this recovery does not permit (T15: no Web Client interaction). The Mock Forms could therefore not be reopened from the Designer.

### What was observed before the editor closed (T15 session; view-only accessibility snapshots)
These lines are from the T15 snapshots. They are **not** in `MockLoginPortal-form-script.cs.txt`, which remains lines 1–77, because indentation for lines 78 onward was not verified by screenshot.
- Gutter numbering matched the existing copy and the editor screenshot (line 1 `using System;`, line 16 `ProcessLogin`, line 77 `return "error";`).
- Line 78 `}` (closes `catch`); line 79 `}` (closes `ProcessLogin`); line 80 blank.
- Lines 81–84: a comment block. Its text reads "Single alert helper — if this one line doesn't compile in your version, swap it for the alternative shown in the comment."
- Line 85: `private void ShowMongooseAlert(string message)`; line 86: `{`.
- Line 87: `// Swap this ONE line:`. Line 88: `// ThisForm.ShowMessage(message);`. Line 89: `Application.ShowMessage(message);`. Line 90: `// ThisForm.ShowMessage("Mongoose Login", message);`.
- **Lines 91 onward were not seen.** The expected closing braces of the helper, class and namespace are not confirmed.

### New source-level finding (observed in the script text; correction for T12)
- Every `ShowMongooseAlert(...)` call in `ProcessLogin` (editor lines 22, 40, 66, 70 and 76, from the screenshot and snapshots) resolves to a **`private void ShowMongooseAlert(string message)` defined in this same class** (line 85). Its body calls `Application.ShowMessage(message)` (line 89), with two commented alternatives.
- Earlier records (T3, T8) treated `ShowMongooseAlert` as an external Mongoose call. The source shows it is a local helper; the Mongoose call is `Application.ShowMessage`. The single-line swap comment indicates the author anticipated a version difference. **Observed in source only; not compiled or run.**
- The string literals in these lines are messages, not credential values.

### Result
- **Not resumed.** The copy `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` is unchanged (lines 1–77; PARTIAL). Lines 78 to the end remain unrecovered.
- Required before the recovery can continue: operator confirmation of the signed-in account and session (scope name changed), and either the Mock Forms back in the Designer recent list or a permitted route to open MockLoginPortal. Then re-read from line 78 with one targeted snapshot after each wheel event, until the end of the file.

### Action audit (this task only, exact)
- Tab listings: **1** (before any selection). Tab selects: **0**.
- Clicks by reference: **2** (`e3` Form menu opened; `e3` Form menu closed, by its menu-bar button as the brief specifies). No coordinate clicks.
- Snapshots: **3** (all untargeted: after the tab list; after the Form menu opened; final state). No `filename` argument used. No "Ref not found" errors.
- Finds: **0**. Screenshots: **0**. Mouse wheel: **0**. Typing, key presses, drags, hover: **0**.
- Attempted but not executed: **0**. Timeouts: **0**. Denied by the harness: **0**.
- Repository activity (not browser): one Grep of this record; this section added.
- Prohibited or out-of-scope actions in this task: **none**. No Save, no Ctrl+S, no OK, Apply or Save, no save prompt answered, no Form opened, no script edited or compiled, no Web Client interaction, no sign-in, no navigation, no refresh.

### Final Designer state
- `designer/Default.aspx`. No Form open. No dialog, menu, editor or prompt open (the final snapshot confirms the menu closed). Save disabled. User scope (status bar). Console 2 errors / 0 warnings. Accidental unsaved change: **none**.

### Worker-written files (this task)
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (this section only).
- No `.txt` copy and no screenshots written.

### Open items after this attempt
- Operator: confirm the signed-in account and session (the status-bar scope name changed; the recent-form list no longer shows the Mock Forms). Decide whether to restore access to MockLoginPortal from the Designer or authorise a Web Client route for Select Form.
- The MockLoginPortal Form Script recovery from line 78 remains pending before T12 (see the T15 section and the blocker above).
- `$app/scripts/UserControl.js`, the MockLogin IDO definition, the historical cumulative-count gaps, the T5-to-T6 overrun, and the plaintext-password source observation (T3, T6, T8, T9): all unchanged.
- The ShowMongooseAlert helper finding above should be carried into the T12 synthesis as a correction of the earlier assumption, subject to confirmation of lines 91 onward.

### Next permitted step
- Stop for operator disposition. **T12 synthesis is not the next task while the MockLoginPortal Form Script recovery is incomplete.** The recovery is to be resumed only after the operator confirms the session and a route to MockLoginPortal.

## Pre-T12 source recovery, MockLoginPortal Form Script (worker task, cycle 17, 2026-10-25): COMPLETE to end of file

**Result:** the MockLoginPortal Form Script is now recovered to the end of the file (source line 140 is the namespace closing brace; line 141 is the empty last line). The copy `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` is updated. One indentation limit remains (lines 78–97, see below). The Designer is returned to a clean state. T12 synthesis was **not** started.

### Gate for this task
- **AGENTS.md** read in full at the start of this task (`C:\AI\mongoose-factory\AGENTS.md`). The previous task had not re-read it; this task did.
- Read before any browser action: the T3 section of this record, the pre-T12 section above (header label T16), and the existing copy `MockLoginPortal-form-script.cs.txt` (lines 1–77 verified earlier).
- **Operator disposition (recorded from the brief):** the operator signed back into the original T1–T15 account, restored User editing scope and opened MockLoginPortal in the Designer. The operator also authorized Select Form routes (Designer or Web Client) for read-only work. No Select Form route was needed.
- **Tabs (listed before any selection):** 2 tabs. Tab 0 = Designer (`designer/Default.aspx`, launch query containing `MGForm=MockLoginPortal`). Tab 1 = Web Client (`favoriteContext=MockLoginPortal`). Tab 0 was selected (selection succeeded). Tab 1 was not selected, read or used.
- **Designer gate state (fresh untargeted snapshot):** Form tab `MockLoginPortal` open and selected (Form Type Flex); Save disabled; Regenerate Form disabled; Undo and Redo disabled; no dialog, menu or editor open; console **2 errors / 0 warnings** (the Designer baseline).
- **Scope:** `ScopeType: User`. The snapshot shows the scope name only as a tool placeholder. The gate screenshot `t17-01` shows the status-bar name, which **visually matches** the name in the T3 screenshot `t3-01`. The name is not transcribed in this record. This is a visual comparison, not a text comparison.
- No session expiry, logout card, sign-in page or server-event error at any point in this task.
- Gate screenshot `evidence/EXP-128/t17-01-designer-gate-mockloginportal-clean.png`: proves the Designer tab, the `MockLoginPortal` tab title, Save greyed, the Flex Form Properties panel and User scope in the status bar. It does **not** prove the Form's component content (the canvas shows no control in that view; the component tree was not re-read in this task).

### Route used
- Edit button (click) → Edit menu opened; the menu showed the same entries as T1 and T3, including **Form Script**. Form Script (click) → **Script Editor** dialog (tab `Script`; buttons OK, Cancel, Help, Download; no Save button).
- Console after each action in this task: 2 errors / 0 warnings (after the Edit click, the Form Script click, the Cancel click and the Form close click). Every explicit snapshot (37) also read 2 errors / 0 warnings.
- The editor was **not** reopened; the T16 state had already shown the editor closed, and this task opened it once.

### Scroll procedure (view only)
- Pointer moved over the editor code area (`mouse move` to x=900, y=450, no click). No key was pressed and no text was typed.
- Each step was one `browser_mouse_wheel` call followed by one targeted snapshot of the code container (ref `e497`). Ref `e497` stayed valid for every snapshot; no "Ref not found" occurred.
- Measured: each wheel call moved the view by about **three lines**, whether deltaY was 1000 or 3000 (one call at 3000 was made to test this). The view advanced from lines 1–34 to 110–141 in 35 wheel calls.
- The harness' identical-consecutive wheel guard was not triggered, because each wheel call was followed by a snapshot.

### Verified source ranges
| Lines | Verification |
| --- | --- |
| 1–77 | Unchanged from T3. Lines 45–77 re-checked in screenshot `t17-02` (viewport shows lines 45–77). |
| 78–97 | Text from the accessibility snapshot only. **Indentation and the blank lines 80 and 92 are not visually verified** (no screenshot shows lines 78–97 as a view). Transcription limit recorded in the copy. |
| 98–130 | Text and indentation from screenshot `t17-03` (viewport shows lines 98–130). |
| 110–141 | Text and indentation from screenshot `t17-04` (viewport shows lines 110–141; line 141 is empty). |

- Lines 131–141 were corrected by the screenshot: there is **no** blank line before the `}` at 131. The text-only count had suggested one.

### Source after line 77 (observed, source level)
- **78** `}` closes the `catch` of `ProcessLogin`; **79** `}` closes `ProcessLogin`.
- **81–84** comment block. **85** `private void ShowMongooseAlert(string message)` (a **same-class helper**, not an external call). Body (86–91): line 88 `// ThisForm.ShowMessage(message);` (commented alternative), **line 89 `Application.ShowMessage(message);` (the only active statement)**, line 90 `// ThisForm.ShowMessage("Mongoose Login", message);` (commented alternative). Behaviour is therefore: each `ShowMongooseAlert` call in `ProcessLogin` → `Application.ShowMessage(message)`. Not compiled or run.
- **93–96** comment block; **96 `public string LoadMockLoginJson()`** (no parameters).
  - Lines 98–99: `string idoName = "MockLogin";` and `string properties = "Username, Password, Store, Role";`.
  - Lines 103–109: `IDOClient.LoadCollection(idoName, properties, "", "", 100)`. The filter argument is the empty string, the fourth is the empty string, the fifth is `100`. Their meanings are not documented in the code (**unverified**).
  - Lines 113–124: a loop over `response.Items`. For each item it builds a `Dictionary<string, object>` with keys `Username`, `Password`, `Store`, `Role` from `item.PropertyValues[0..3]` and adds it to `users`.
  - Line 126: `JsonConvert.SerializeObject(users, Formatting.Indented)`. **Line 128: `ThisForm.Variables("vMockLoginJson").Value = json;`** (second writer of this variable). Line 130: `return json;`.
  - Lines 132–137: `catch (Exception ex)` returns a JSON object with `error` = `ex.ToString()`.
  - No `WSForm`-style call, no generated event, no navigation, no session call and no `ShowMongooseAlert` call occurs in `LoadMockLoginJson`.
- **Observed (source level, not executed):** `LoadMockLoginJson` serializes the stored `Password` value of **every** returned row into `vMockLoginJson` and returns it as a string. This is a data-handling concern for later review. No value was read or recorded.
- **Observed:** no caller of `LoadMockLoginJson` appears in any evidence copy (`Grep` of `evidence/EXP-128` for the name: no match). Any caller would be in the shared `UserControl.js`, which was not read (**unresolved**).

### Corrections to earlier records (source-level; runtime not observed)
- **Login alert helper:** every `ShowMongooseAlert(...)` call in `ProcessLogin` (lines 22, 40, 66, 70, 76) resolves to the same-class helper at line 85, which calls `Application.ShowMessage`. The T3 and T8 treatment as an external Mongoose call is **corrected** here. No runtime alert was observed in any task.
- **Form variable line number:** the assignment `ThisForm.Variables("vMockLoginJson").Value = json;` in `ProcessLogin` is at **line 62** (verified in `t17-02`). The T9 section cites "line 69", which is wrong. T3 cited line 62 correctly.
- **Login JavaScript call:** the asset copy `evidence/EXP-128/assets/mocklogin_script_app.js.txt` (line 5) calls `invokeAsync( "ProcessLogin", usernameInput.value.trim(), passwordInput.value, 15000 )` inside `processLogin()`. The C# comment says `WSForm.invoke("ProcessLogin", username, password, callback)`. The `invokeAsync` wrapper is defined outside the recovered copies (in `UserControl.js`, not read), so whether it reaches `WSForm.invoke` is **unverified**.

### Redaction (this recovery)
- Lines 78–141 contain **no credential value**. Zero values redacted. The identifiers `password`, `storedPassword`, `vMockLoginJson`, `idoName` and `properties` are names; `"MockLogin"` is an IDO name; the quoted property list is a list of property names.

### Action audit (this task only, exact)
- Tab listings: **1** (before any selection). Tab selects: **1** (tab 0, succeeded).
- Clicks (`browser_click`): **4** — Edit menu button (ref e5); Form Script menu item (ref e422); Script Editor **Cancel** (ref e820); MockLoginPortal **Form-tab close control** (ref e247; no save prompt appeared). No coordinate click.
- Mouse moves: **1** (to x=900, y=450, over the editor; no click).
- Mouse wheel: **35** (34 at deltaY 1000, 1 at deltaY 3000); all view-only.
- Explicit snapshots (`browser_snapshot`): **37** = 1 untargeted (gate) + **35 targeted** to the code container (`e497`, one after each wheel) + 1 untargeted (before Cancel, to obtain the Cancel reference). Click outputs also returned snapshot files (4; not counted as explicit snapshots).
- Screenshots (`browser_take_screenshot`): **4** (`t17-01` to `t17-04`).
- Finds: **0**. Typing: **0**. Key presses: **0**. Hover: **0**. Drags: **0**. Coordinate clicks: **0**.
- "Ref not found": **0**. Timeouts: **0**. Harness denials: **0**. Tool errors: **0**.
- Browser actions executed (clicks + moves + wheels + tab selects): **41** (4 + 1 + 35 + 1).
- Prohibited or out-of-scope actions: **none**. No Save, no Ctrl+S, no OK/Apply/Save in any dialog, no save prompt answered, no edit, no compile or run, no navigation, no refresh, no sign-in, no Web Client interaction, no asset-dialog action.
- Cumulative browser actions for the whole experiment: **not restated as exact.** The earlier cumulative audits (T5 to T7 sections) are internally inconsistent and were recorded as unreconciled. This task adds 41 executed browser actions to the record's total; the operator should decide whether a full reconciliation is required before any cumulative figure is used.

### Worker-written files (this task)
- `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (edited: status and assembly header lines, BEGIN marker, lines 78–141 appended, END marker; lines 1–77 unchanged).
- `evidence/EXP-128/t17-01-designer-gate-mockloginportal-clean.png` (gate; see above).
- `evidence/EXP-128/t17-02-mockloginportal-script-editor-lines-44-78.png` (**the viewport shows lines 45–77**; line 78 is cut off the bottom; the file name is kept as written).
- `evidence/EXP-128/t17-03-mockloginportal-script-editor-lines-97-131.png` (**the viewport shows lines 98–130**).
- `evidence/EXP-128/t17-04-mockloginportal-script-editor-tail-lines-110-141.png` (shows lines 110–141).
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (this section only).
- Tool-written (not authored by the worker; content not read): `evidence/playwright/page-2026-10-25T06-12-35-836Z.yml`, `page-2026-10-25T06-12-43-734Z.yml`, `page-2026-10-25T06-18-56-936Z.yml`, `page-2026-10-25T06-19-04-720Z.yml`, and `console-2026-10-25T06-12-13-211Z.log`.

### Screenshots and what they show (status bar shows the account name in all four; the operator decides on sharing)
| File | Shows | Does not prove |
| --- | --- | --- |
| `t17-01-designer-gate-mockloginportal-clean.png` | Designer, MockLoginPortal tab, Flex properties, Save greyed, no editor, User scope | Component content; Form Script content |
| `t17-02-mockloginportal-script-editor-lines-44-78.png` | Script Editor open, lines 45–77 with indentation | Lines 78–97 (cut off) |
| `t17-03-mockloginportal-script-editor-lines-97-131.png` | Lines 98–130 with indentation and blank lines | Line 97 (`{`) and line 131 onward |
| `t17-04-mockloginportal-script-editor-tail-lines-110-141.png` | Lines 110–141; end of file | Anything before line 110 |

### Final browser state
- Designer tab (tab 0) selected. **No Form open** (the Form tab list is empty), **no dialog, editor, menu or prompt open**, Save disabled, Regenerate Form disabled, Undo and Redo disabled. Console **2 errors / 0 warnings**. User scope in the status bar. No unsaved change.
- Web Client tab (tab 1) was not selected or touched; it still reports `favoriteContext=MockLoginPortal`.

### Open items after this recovery
- **Indentation of lines 78–97** and the blank lines 80 and 92 are not visually verified. One targeted view (the editor scrolled to lines 78–111) would settle them, if the operator wants that verification.
- **Unresolved:** `$app/scripts/UserControl.js` (the `invokeAsync` wrapper and its use of `WSForm.invoke`); the MockLogin IDO definition (IDO name `MockLogin` in source vs `MockLoginIDO` in the record); the meaning of the `LoadCollection` arguments (`""`, `""`, `1`, `100`); whether `LoadMockLoginJson` is called from any script; the cumulative action reconciliation.
- **Security observation (source level):** the stored password value is written to `vMockLoginJson` and included in the success alert JSON (`ProcessLogin`, lines 56 and 70), and `LoadMockLoginJson` writes every row's `Password` value into `vMockLoginJson` (lines 119 and 128). Not executed; no value recorded.
- **T12 synthesis** remains a separate task and was not started.

---

## T12 - Qualified architectural synthesis and evidence audit (repository only, 2026-10-25)

> **Superseded in part by T19.** Corrections, the exact controller-count reconciliation and the open items are in the T19 section at the end of this record. The T12 text below is retained as written; where it conflicts with T19, T19 governs.

Harness header read `task=T18`; the bounded instruction read "Execute T12 ... NO BROWSER WORK IS AUTHORIZED". The bounded instruction was followed. The T12 section is written after the T17 recovery, which had closed the MockLoginPortal copy at line 141.

### Gate and method
- **Browser:** no browser tool was called. No tab was listed or selected, and no Designer, Web Client or Mongoose object was touched. The browser state is therefore the last state recorded in T17 (section 12).
- **Sources read in this task:** `AGENTS.md` (240 lines, full); this record (full, read before this edit); the 12 `.txt` copies under `evidence/EXP-128/` (four Form scripts, the MockLoginIDO metadata, the global-variable inventory, six asset copies); the controller audits `evidence/EXP-128/harness-audit-T1.md` to `harness-audit-T17.md` (summary line 3, flagged-tool line 13, key-sequence line 9, errors line 15); and screenshot `t17-03-mockloginportal-script-editor-lines-97-131.png`, to corroborate the `LoadMockLoginJson` lines.
- **Not read:** the four docs guides (not in T12 scope); other experiment records; `$app/scripts/UserControl.js` (never readable in this experiment); the MockLogin IDO definition (never inspected). Screenshots other than `t17-03` were not opened; their descriptions come from the record.
- **Git:** no shell tool is available in this task, so no `git` command was run. The Git state below comes from the session-start status snapshot. `experiments/EXP-128-mock-inventory-portal-read-only-study.md` and `evidence/EXP-128/` are untracked. Committed brief commits: `904000d` (draft) and `6b966f1` (approved). The same snapshot lists modified and untracked files under `tools/claude-harness/`, which are outside EXP-128 and were not touched by this task.
- **Evidence labels:** **[S]** primary source copy (verbatim text; asset copies are text-equivalent and flattened, not byte-exact); **[C]** controller audit (authoritative tool-call count; not rendered-state proof); **[I]** screenshot (visual only, limited to what is visible); **[R]** worker record prose (observation by the worker, not independently checked); **[U]** unresolved. Knowledge states follow AGENTS.md (observed, unverified, verified, superseded). `candidate_procedure` marks a technique that has not been run.
- **Line numbering:** source line numbers for the MockLoginPortal script are the numbers of the editor (`using System;` = line 1). The copy file has a 9-line header, so copy line N = source line N − 9 for that file. Dashboard and MockLoginIDO copies use their own numbering. Line references below are source lines.

**Summary.** The three Forms and MockLoginIDO are described from source copies and design-time observations. The three Forms were observed once at runtime (T11) without interaction. The login chain and the inventory chain are described separately. No artifact inspected in this experiment shows a link from a successful login to the dashboard. Two material pieces remain unread: `UserControl.js` and the MockLogin IDO definition. EXP-128 is not accepted in this task (section 13).

### 1. Corrections to earlier records
| # | Earlier record | Current reading | Basis |
| --- | --- | --- | --- |
| 1 | T3 and T8 treat `ShowMongooseAlert` as an external Mongoose call. | It is a `private void` helper in the same class (source line 85). Its only active statement is `Application.ShowMessage(message);` (source line 89). The `ThisForm.ShowMessage` lines are comments. The login alerts therefore reach `Application.ShowMessage`. The helper text is in lines 78–97, whose indentation was not verified visually. [S] | T17 copy lines 78–97 (text only) |
| 2 | T3 comment and T8 wording suggest the login JavaScript calls `WSForm.invoke("ProcessLogin", ...)` directly. | The login JavaScript calls `invokeAsync("ProcessLogin", username, password, 15000)`. `invokeAsync` calls `WSForm.invoke(methodName, arg1, arg2, callback)`. The C# comment at source line 14 repeats the direct form; that is comment text. Whether `invokeAsync` reaches the bridge as written is [U] because `UserControl.js` was not read. | [S] `mocklogin_script_app.js.txt` |
| 3 | T9 and `global-variables-inventory.txt` give the `vMockLoginJson` assignment in ProcessLogin as "line 69". | It is source line 62 (copy line 71). Source line 69 is blank; the `SerializeObject` call is at source line 60. T17 corrected the number; the T9 text and the inventory file were not edited. | [S] copy; [I] `t17-02` |
| 4 | T3 lists the Form-script copy as lines 1–77 (partial). | Superseded. The copy runs to line 141 (the namespace closing brace is line 140; line 141 is the empty last line). Indentation and two blank lines of 78–97 are not verified (operator accepted this as nonblocking). | [S] copy header; [I] `t17-03`, `t17-04` |
| 5 | T3 and T9 notes: `vMockLoginJson` is written only by ProcessLogin. | There are two writers: ProcessLogin (source 62) and LoadMockLoginJson (source 128). | [S] copy |
| 6 | Before T17 the record did not mention `LoadMockLoginJson`. | It is in the MockLoginPortal copy (source 96–136). Its only occurrence in the evidence `.txt` files is its own definition. Its callers are unresolved (section 4, S-3). | [S] Grep of `evidence/EXP-128/*.txt` |
| 7 | T3 says the MockInventory script copy was not obtained (T5 header-only). | Superseded by the complete 20-line VB.NET copy (task bbc76dc0). | [S] copy |
| 8 | `MockLoginIDO-form-script.cs.txt` (file name) implies C#. | Its content is VB.NET (documented in T10). | [S] copy |
| 9 | T4 continuation records "AGENTS.md re-read (full, 130 lines)". | The present `AGENTS.md` is 240 lines. The difference is not explained by the record. Noted only. | [R] |
| 10 | T1 records the Global script entry as "probably" `Script`; T3 says the entry was not opened. | Still unidentified. No `global-script.cs.txt` exists (see the brief gap in section 10). | [R] |

### 2. Architecture description

#### 2.1 Object inventory
| Object | Kind | Form type | Primary collection (IDO) | UserControl | Form variables (design) | Form Script | Runtime (T11) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `MockLoginPortal` | Form | Flex | Blank (no IDO name or filter shown) [R, T2] | `userControl1_USER` → `mocklogin/index.html` | 3 Form-Persistent: `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)`, `UserCtrlUrl_userControl1_USER` = `URL(METADATA()mocklogin/index.html)` | C#, 141 lines: `ProcessLogin` (public), `ShowMongooseAlert` (private), `LoadMockLoginJson` (public) | Login card rendered; fields empty; no interaction |
| `MockInventory` | Form | Normal | `MockInventory` (table `MockInventory`, alias `mock_inv`); 36 property names rendered | None (24 tree rows: 2 panes, 1 grid, 7 grid columns, 14 controls) | No Form-level category shown | VB.NET skeleton, 20 lines, no methods, no IDO call | Detail layout; record key 15; grid header discrepancy |
| `MockInventoryDashboard` | Form | Normal | `MockInventory` (same as above; no secondary) | `userControl1_USER` → `MockInventory/index.html` | 5 Form-Persistent: `fds_SC2`, `InitialCommand` = `FilterInPlace`, `UserCtrl_userControl1_USER`, `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)`, `UserCtrlUrl_userControl1_USER` = `URL(METADATA()MockInventory/index.html)` | C#, 59 lines: `public void LoadInventoryFromIDO()` | Populated table (14 rows), summary cards, timestamp advancing |
| `MockLoginIDO` | Form (data form only) | Normal | `MockLogin` (table `MockLogin`, alias `mock_login`); 36 property names rendered; `Username` not in the rendered list | None (7 tree rows: Pane (00), the grid and five grid columns) | None | VB.NET skeleton, 20 lines, no methods, no IDO call | Not run; the tab was already open and was left untouched |
| IDO `MockLogin` | IDO (definition not inspected) | — | — | — | — | — | Name only, from the Form and from `ProcessLogin` [S, R] |

[R] Form type values: T1 and T4 read `Normal` for MockLoginIDO and MockInventory; T2 read `Flex` for MockLoginPortal; T6 read `Normal` for the dashboard. The brief's Classic / Flex / portal-shell wording was not reflected in any reading. "Portal shell" was not observed.

#### 2.2 MockLoginPortal (login)
- **Form layout [R, T2]:** a Flex Form. Tree: `Pane (00)` → `flexlayoutPane_MockLoginPortal` (FlexLayout) → `Region00: FLEX_PANE_REGION0` → `userControl1_USER` (UserControl; size 964; 684; Flex attribute target `FLEX_PANE_REGION0`). Binding Type `None`; no events; Visible When, Enabled When and Required When blank. The Container column shows `flexlayoutPane_MockLoginPortal` while the tree nests the control under Region00 (recorded as shown).
- **UserControl binding [R, T2]:** Specific Attributes → `User Control Name` = `V(UserCtrl_userControl1_USER)`. The reference dialog (`Edit User Control References`) shows Use Web Control checked, Control URL `mocklogin/index.html`, Windows section `<Not Applicable>`. The URL-type radio button state is not exposed in the accessibility tree; the screenshot is inconclusive. Reading the form variable names (`ASSEMBLY(UNIFIED)`, `URL(METADATA()mocklogin/index.html)`), the Web User Control Asset route is the likely one. [U]
- **Collections [R, T2]:** primary collection row present; its Collection, Collection Name and Options values are blank, and its Base Table value shows only hint text. The Form therefore shows no data binding. The login reads its data through a script call, not through a Form binding. [U] whether the blanks are real or a rendering gap.
- **Event handlers [R, T2]:** Form-level grid has no rows; the UserControl has no event rows.
- **Form Script [S]:** `ProcessLogin(string username, string password)` (public, returns string). Its parameters are the two values the login page passes. Returns: `"missing"`, `"empty"`, `"invalid"`, `"ok"`, `"error"`.
  - Flow: empty values → alert, `"missing"`. Otherwise `IDOClient.LoadCollection("MockLogin", "Username, Password, Store, Role", filter, "", 1)` with the username escaped for a single-quoted filter (source 27, 29–35). No row → alert, `"empty"`. Otherwise it reads `PropertyValues[0..3]`, builds a dictionary `{Username, Password, Store, Role}`, serialises it, and writes `vMockLoginJson` (source 56–62). Password differs from the stored value → alert, `"invalid"` (source 64–67). Match → alert with the JSON, `"ok"` (source 70). Exception → alert and `"error"` (source 76).
  - `LoadMockLoginJson()` (public, source 96–136): calls `LoadCollection` on MockLogin with an empty filter and row argument 100 (source 103–109; argument meanings unverified), builds one dictionary per row, serialises the list, writes `vMockLoginJson` (source 128), returns the JSON (source 130). Its catch returns an error JSON (source 136).
  - No `WSForm`-style call, no generated event and no navigation call appears in the copy.
- **Assets [S]:** `mocklogin/index.html` has no WSForm or MG call. It loads `../$app/scripts/UserControl.js`, `style/app.css` and `script/app.js`. `script/app.js` makes one bridge call (`invokeAsync` → `WSForm.invoke`), validates input client-side (username ≥ 3 characters, password ≥ 6), disables the button while the call is pending, and logs only the result or the error. Its 15-second timeout produces "Could not reach the server. Please try again." on rejection. The source comment says "C# shows the Mongoose alert, so there is nothing to render here."
- **Runtime [I, T11]:** the card shows the brand, "Sign in to your account", empty Username and Password fields, "Show password" toggle, "Sign In" button and footer. No error text was visible. No interaction took place.

#### 2.3 MockInventory (data Form; no UserControl)
- **Type and binding [R, T4 and T5 retry]:** Normal Form; primary collection `MockInventory` (table `MockInventory`, alias `mock_inv`). The rendered IDO property list has 36 names (ends at `UDFMediumText2`; `Warehouse` is not in the list, see section 5, I-2). Options and filter not read.
- **Components [R, T5 retry; screenshot `t5-05`]:** `Pane (00)` → `FormCollectionGrid` (Grid, data source `objects`) with seven GridColumns (`object.ID`, `object.Item`, `object.Description`, `object.Warehouse`, `object.QuantityOnHand`, `object.ReorderLevel`, `object.Location`). `Pane (01)` → 14 controls: Static and Edit pairs for ID, Item, Description, Warehouse, QuantityOnHand, ReorderLevel and Location (Edit bound to `object.<name>`). No UserControl exists on this Form.
- **Event handlers [R, T5 retry; `t5-06`]:** none rendered.
- **Variables [R, T5 retry; `t5-07`, `t5-08`]:** `Global - Persistent` partly rendered (35 names of about 48, through `lsm1_DefaultReporType`). `Global - Temporary` not read in this view. No Form-level category.
- **Form Script [S]:** VB.NET skeleton: `Option Explicit On`, `Option Strict On`, four `Imports` (`System`, `Microsoft.VisualBasic`, `Mongoose.IDO.Protocol`, `Mongoose.Scripting`), `Public Class MockInventory : Inherits FormScript`, body `' Methods go here`. No method, no WSForm target, no IDO call, no variable, no event.
- **Runtime [I, T11; `t11-02`]:** detail layout with labelled fields; the ID field shows 15 with default focus; other fields empty in the view. The grid area shows only the ID column in the screenshot, although the accessibility tree lists seven column headers (section 5, I-3).
- **Relationship to the dashboard [S]:** the dashboard script queries the same IDO by name (`"MockInventory"`), not through this Form's binding. This Form does not call any WSForm method.

#### 2.4 MockInventoryDashboard (inventory)
- **Type and binding [R, T6]:** Normal Form; primary collection `MockInventory` (no secondary). Components: `Pane (00)` → `userControl1_USER` (UserControl; Binding Type `None`; no events; Visible/Enabled When blank; Size 150; 50; Unit Char). Two rows in total.
- **UserControl reference [R, T6; `t6-05`]:** Use Web Control checked; Control URL `MockInventory/index.html`; Web User Control Asset radio shows a filled dot (the other two radios are disabled and not exposed).
- **Event handlers [R, T6; `t6-07`]:** group `StdFormPredisplay` with two rows: row 0 Response Type `Collection Refresh` (flag `false`); row 1 Response Type `Form Script Method`, Response Parameters `LoadInventoryFromIDO()` (flag `false`). Column headings for flag and parameters were not re-read.
- **Variables [R, T6; `t6-08`]:** `Form - Persistent` (5): `fds_SC2`; `InitialCommand` = `FilterInPlace`; `UserCtrl_userControl1_USER`; `UserCtrlAsm_userControl1_USER` = `ASSEMBLY(UNIFIED)`; `UserCtrlUrl_userControl1_USER` = `URL(METADATA()MockInventory/index.html)`. `vInventoryJson` is not in this list. `Global - Persistent` names only (30 of 48 in the Form view; full set in the T9 dialog). No Form - Temporary group shown.
- **Form Script [S]:** C#, 59 lines. Namespace `Mongoose.FormScripts`; class `MockInventoryDashboard : FormScript`. Method `public void LoadInventoryFromIDO()` (no parameters). Calls `IDOClient.LoadCollection("MockInventory", "Item, Description, Location, QuantityOnHand, ReorderLevel, Warehouse", "", "", 100)`. Copies `response.Items[i].PropertyValues[0..5].Value` into a dictionary per row (index order follows the property string), serialises the list with Newtonsoft (`Formatting.Indented`), and writes `ThisForm.Variables("vInventoryJson").Value = json`. No try/catch, no null check. Lines 53–55 are a commented-out `Application.ShowMessage` debug call. No event is generated.
- **Asset [S]:** `MockInventory/index.html` (text-equivalent copy). The page has one inline script and loads `style.css` and `../$app/scripts/UserControl.js`. Its functions and call sites are listed in section 2.6.
- **Runtime [I, T11; `t11-03`]:** header "INFOR MONGOOSE" and "Inventory Dashboard"; auto-refresh and alerts checkboxes; "every 5 sec"; "Updated" timestamp; "Refresh Data"; summary cards Total Items 14, Total Units 1,075, Low Stock 3, Out of Stock 1; table of 14 rows SKU001 to SKU014 with a View button; footer "14 records". No loading or error text visible at settle. The timestamp changed from 4:34:47 PM to 4:34:57 PM over about 10 seconds with no interaction.

#### 2.5 MockLoginIDO (Form) and the MockLogin IDO
- **Form [R, T10]:** Normal Form, primary collection `MockLogin` (table `MockLogin`, alias `mock_login`). Components: `FormCollectionGrid` (Grid, `objects`) with five GridColumns (`object.ID`, `object.Username`, `object.Password`, `object.Role`, `object.Store`). No UserControl, no Form variable, no event rows. Form Script: VB.NET skeleton, no methods.
- **IDO [R, T10]:** the Form's primary collection is named `MockLogin`. The Form name `MockLoginIDO` does not appear as an IDO name in the Form's metadata. The 36 rendered property names are listed in `MockLoginIDO-metadata.txt`; `Username` is absent from that list although the grid binds `object.Username`.
- **Source match [S]:** `ProcessLogin` uses `IDOClient.LoadCollection("MockLogin", ...)`. The name matches the Form's collection by name only. Whether they are the same runtime object is [U].
- **Not inspected:** the IDO's project, extension class or assembly, methods, property classes, bindings, data rules; whether an IDO named `MockLoginIDO` exists. The Designer's IDOs entry opened an empty `IdoCollections` grid without typing; the Web Client Filter In Place route was not run (prohibited in the T10 bounded instruction). [U]

#### 2.6 JavaScript-to-Form call map
| # | Call as written | File | Form feature it reaches (source) | Runtime status | Knowledge state |
| --- | --- | --- | --- | --- | --- |
| 1 | `WSForm.invoke(methodName, arg1, arg2, callback)` inside `invokeAsync`; called as `invokeAsync("ProcessLogin", trimmedUsername, password, 15000)` | `mocklogin/script/app.js` | C# `public string ProcessLogin(string username, string password)` (MockLoginPortal). Two string arguments match. The callback is not in the C# signature. | Not run (no interaction) | Name and parameters match in source [S]; callback contract [U] |
| 2 | `WSForm.invoke("LoadInventoryFromIDO", callback)` in `invokeLoadInventoryFromIDO()`, called first by `loadInventory()` | `MockInventory/index.html` (inline) | C# `public void LoadInventoryFromIDO()` (MockInventoryDashboard); no arguments | Consistent with the populated table; the call itself was not observed [I, C] | Name match in source [S]; invocation [U] |
| 3 | `WSForm.getVarValue("vInventoryJson", callback)` in `getInventoryJson()`, called after call 2 resolves; 15-second timeout | `MockInventory/index.html` (inline); also `MockInventory/script.js` (unreferenced) | Form or global variable `vInventoryJson`, written by call 2's method | Rendering is consistent with a value being read; which definition holds it is [U] | Name match [S]; definition [U] |
| 4 | `MG.onReady(initializeInventoryDashboard)` at the end of the script; guarded by `typeof` checks | `MockInventory/index.html` | Page-ready hook; no Form feature named. `initializeInventoryDashboard` runs `loadInventory()` once | Populated view after settle is consistent [I] | Call text [S]; hook behaviour [U] |
| 5 | Form event `StdFormPredisplay` (design): row 0 Collection Refresh; row 1 Form Script Method `LoadInventoryFromIDO()` | Designer (not a JavaScript call) | The same C# method as call 2, triggered by the Form event | Order at runtime not observed [U] | Design-time row [R] |
| 6 | `typeof WSForm`, `typeof WSForm.invoke`, `typeof WSForm.getVarValue`, `typeof MG`, `typeof MG.onReady` | `MockInventory/index.html` only (`app.js` has no typeof guard) | Guards only; error messages name `UserControl.js` and "Mongoose Web User Control" | — | [S] |
| 7 | Not present in any inspected JavaScript: `WSForm.generate`, `WSForm.setVarValue`, `WSForm.getCompValue`, `WSForm.setCompValue`, any other `MG.*` | All copies (`app.js`, `app.css`, two HTML pages, `style.css`, `script.js`) | — | — | Absence in inspected copies [S]; absence in `UserControl.js` [U] |
| 8 | Form variable `vMockLoginJson` written by C# (both methods); read by no inspected JavaScript | C# and all JS copies | None found | — | [S]; readers [U] |

- **Unreferenced asset:** `MockInventory/script.js` calls `WSForm.getVarValue("vInventoryJson", ...)` and renders `inventoryBody` and `searchInput` ids that do not exist in `index.html`. It is not loaded by any inspected page. Its use is unknown [S].
- **Polling [S, T7]:** the dashboard's own timer polls at a default 5 seconds (one timer at a time) and saves polling settings in `window.localStorage` under `inventoryDashboard.polling`. Runtime timestamp change is observed [I]; the individual calls behind it are not [C: no console or network reading is permitted].

#### 2.7 Global and Form variables
- **Global definitions [R, T9 and `global-variables-inventory.txt`]:** 54 in the Edit > Variable dialog: 48 default-coloured (`Global - Persistent` in the Form view) and 6 salmon-coloured (`Global - Temporary`). Persistence was read for three rows only (SiteFormName True, vInventoryJson True, Parm_Site False); the other 51 rows are grouped by colour and name match.
- **`vInventoryJson` (global):** Persistent True, Global True, Value empty at design time, Version "User version". It is the only global name that the dashboard script writes. Whether the script's `ThisForm.Variables("vInventoryJson")` binds to this definition or to a Form-level variable is **[U]**: no Form-level `vInventoryJson` appears in the dashboard's Form-Persistent list; the Form-Temporary category was not observed. The runtime display of 14 rows shows that a value reaches the page, so some definition holds one at runtime.
- **`vMockLoginJson`:** not in the 54-row global list (read end to end). It is a Form variable set by the login method. The MockLoginPortal Form-Persistent list (3 entries) does not include it. Its Form-Temporary category was not observed. Absence from the global list is established; the existence of a Form-level definition is not [U].
- **Other globals:** `SiteFormName` = `Sites` (no reference in inspected code). `MPUsername`, `MPPassword`, `LoginFoundUser` and `IncludeBadgeStatusVar` are names only; values were withheld by the credential rule. No reference to them was found in inspected code. `Parm_Site` = `~LIT~(DEFAULT)` (non-persistent; one row verified).
- **Design-time Form variables:** MockLoginPortal 3; MockInventoryDashboard 5; MockInventory and MockLoginIDO none shown.

#### 2.8 Data flow: login and inventory (what is and is not connected)
- **Login chain [S]:** `mocklogin/index.html` → `app.js` `processLogin` → `invokeAsync` → `WSForm.invoke("ProcessLogin", username, password, cb)` → C# `ProcessLogin` → `IDOClient.LoadCollection("MockLogin", ...)` → plaintext comparison → alert through `Application.ShowMessage` → Form variable `vMockLoginJson` → return string → callback logs the result only. No navigation and no Form change appear in any inspected copy.
- **Inventory chain [S]:** `MockInventory/index.html` → `WSForm.invoke("LoadInventoryFromIDO")` → C# `LoadInventoryFromIDO()` → `IDOClient.LoadCollection("MockInventory", ...)` → Form or global variable `vInventoryJson` → `WSForm.getVarValue("vInventoryJson")` → render; repeated by the 5-second poll. The same method is also run by the Form's `StdFormPredisplay` event (design).
- **Link between them [S, R]: none observed.** The chains share no Form variable (`vMockLoginJson` is not read by any inspected code). No inspected code navigates or opens the dashboard after login. `LoadMockLoginJson` has no caller in the copies. The dashboard opened and rendered in T11 without any login. **How a successful login leads to the dashboard is not shown by any inspected artifact.** This is the central open question (section 7, Q-3).

### 3. Source-to-runtime evidence mapping
| # | Claim | Source basis | Runtime basis | Status |
| --- | --- | --- | --- | --- |
| R-1 | The login card renders with empty fields and a Sign In button | `mocklogin/index.html` [S] | `t11-01` [I]; T11 reading [R] | Observed (display only) |
| R-2 | Submitting the login calls `ProcessLogin` and shows a Mongoose alert | `app.js` and C# [S] | Not run; no interaction permitted | Unverified |
| R-3 | `ProcessLogin` reads the MockLogin IDO by `LoadCollection` | C# [S] | Not run | Unverified |
| R-4 | The dashboard renders 14 records SKU001 to SKU014 | HTML template [S] | `t11-03` [I]; T11 reading [R] | Observed (display) |
| R-5 | Summary cards: Total Items 14, Total Units 1,075, Low Stock 3, Out of Stock 1 | Labels and arithmetic in HTML [S] | T11 reading [R], `t11-03` [I] | Observed (display); not checked against IDO data |
| R-6 | Dashboard data comes from IDO `MockInventory` through `LoadInventoryFromIDO` | C# and HTML [S] | Populated view consistent with the chain; no trace [C] | Consistent; path unverified |
| R-7 | The "Updated" timestamp changes without interaction (4:34:47 → 4:34:57 PM) | 5-second poll in HTML [S] | T11 readings [R], `t11-03` [I] | Observed (display); cause consistent with polling, calls not observed |
| R-8 | SKU005 and SKU012 show Location and Warehouse values in each other's columns | HTML maps `row.Location` and `row.Warehouse` as written [S]; C# maps by index [S] | T11 reading [R], `t11-03` [I] | Observed; cause unresolved (section 5, I-1) |
| R-9 | MockInventory detail view shows record key 15 and seven labelled fields | Form design [R, T5] | `t11-02` [I] | Observed |
| R-10 | MockInventory grid shows seven headers in the accessibility tree and only ID in the screenshot | Components tree [R] | `t11-02` [I] | Observed discrepancy; cause unresolved |
| R-11 | Login writes `vMockLoginJson` | C# line 62 [S] | Not run | Unverified |
| R-12 | Global `vInventoryJson` is empty at design time | Global list [R] | Runtime value not read | Observed (design); runtime definition unresolved |
| R-13 | Dashboard summary toasts appear on data change | HTML [S] | No change observed in the window | Not tested |

### 4. Security and data-handling observations (source level; not executed; no values read or recorded)
- **S-1. Stored password compared in plain text.** `ProcessLogin` reads the `Password` value of the matched MockLogin row (source 50) and compares it with the submitted password by string equality (source 64). The copy shows no hashing. [S]
- **S-2. Stored password written to a Form variable and an alert.** The same method puts a record containing the stored `Password` into the JSON (source 56, 60), writes the JSON to `vMockLoginJson` (source 62), and, on a match, shows the JSON in the success alert (source 70). [S] Runtime effect not observed.
- **S-3. Bulk password serialisation in `LoadMockLoginJson`.** The method is `public` (source 96). It calls `LoadCollection` on MockLogin with an empty filter and row argument 100 (source 103–109; argument meanings unverified), writes each row's `Password` into the JSON (source 119), writes the JSON to `vMockLoginJson` (source 128) and returns it (source 130). No caller is in any inspected copy. Whether the user control or any other path can invoke it by name depends on `UserControl.js` (unread). This is a source observation; no exploit is asserted and the method was not run. [S][U]
- **S-4. Password in the page.** `app.js` reads the password from the input at submit time and passes it as an argument to `WSForm.invoke`. The password toggle switches the field to plain text on click (source behaviour). Console calls log the result or the error object, not the password variable. [S]
- **S-5. Credential-named globals.** `MPUsername` and `MPPassword` exist as global names. Their values were not read (credential rule). No reference to them was found in the inspected code, and `ProcessLogin` reads the stored password from the IDO, not from these globals. [S][R]
- **S-6. No credential values in the copies.** A pattern check over the 12 `.txt` copies for `password`, `pwd`, `token`, `secret`, `api key` or `connection string` followed by a literal value returned no matches (T12 check). The copies record 0 credential values redacted. [S]
- **S-7. Recommendation (operator review).** Review S-1 to S-3 before the login pattern is reused. Any runtime test of these paths is outside EXP-128 (no interaction is authorised here) and would need its own authorised brief.

### 5. Observed inconsistencies (no root cause assigned)
- **I-1. SKU005 and SKU012 swap.** The dashboard shows Location `WH02` with Warehouse `C-02-05` (SKU005), and Location `WH01` with Warehouse `D-01-03` (SKU012). The other 12 rows show the expected pattern [I, R]. The C# maps Location to `PropertyValues[2]` and Warehouse to `PropertyValues[5]`, which matches the requested order. If the IDO returns values in another order, the swap could come from the response; if the stored data is swapped, it comes from the data. Neither is verified. [U]
- **I-2. Property names missing from the rendered lists.** `Warehouse` (used by the dashboard script and the MockInventory grid) is absent from the 36-name MockInventory list, and `Username` (used by the MockLoginIDO grid and by `ProcessLogin`) is absent from the 36-name MockLoginIDO list. Both names would sort after the last rendered name in their lists (`UDFMediumText2` and `UDFMediumText4`), so the Details tree may cut off the end of the list. The dashboard displays Warehouse values at runtime, which suggests the property exists on the IDO. Whether `Username` exists is unresolved. If it does not, `ProcessLogin`'s property request would be expected to fail; this is a hypothesis, not a finding. [U]
- **I-3. MockInventory grid headers.** The accessibility tree lists seven column headers; the T11 screenshot shows only the ID column in the grid area. Layout clipping or a single-column rendering in that view is not established. [I, R]
- **I-4. MockLoginPortal collection blank.** The Form has no visible data binding, yet its UserControl's script reads an IDO by name. Whether the blank fields are real is unresolved (section 2.2). [R, U]
- **I-5. Save enabled after Script Editor open and Cancel.** This happened on MockInventory (T5, two attempts) and on MockLoginIDO (T10). It did not happen on MockLoginPortal (T3, T17) or on MockInventoryDashboard (T6). Cause not established. [R]
- **I-6. Design-empty global and runtime value.** `vInventoryJson` is empty as a global definition at design time, yet the dashboard shows 14 records at runtime. Which definition holds the runtime value is unresolved (section 2.7). [R, I]
- **I-7. Two load triggers for the dashboard.** The `StdFormPredisplay` event (design) and the page's `MG.onReady` bootstrap both lead to `LoadInventoryFromIDO`. Whether one page load triggers two calls is not known. [R, S, U]
- **I-8. Partial variable views.** The MockInventory Global-Persistent view showed 35 of about 48 names; the dashboard Form view showed 30. The full set (54) was read in the T9 dialog. These are view limits, not differences in the global set. [R]
- **I-9. Unreferenced `script.js`.** `MockInventory/script.js` is not loaded by its page and uses element ids that the page does not have. It looks stale. Not established. [S]
- **I-10. `InitialCommand` = `FilterInPlace`.** A Form-Persistent variable on the dashboard. Its effect is not known. [R]

### 6. Candidate techniques (candidate_procedure; unverified; none replayed)
None of these has been run in this experiment. "Observed" below means a design-time or source-level reading only. The Hello World record set was not read in T12, so whether each technique is new to the factory is **not determined** (Q-22).
- **T-1. Attach an HTML asset to a Form through a UserControl.** A UserControl component with Specific Attributes `User Control Name` = `V(<var>)`; Form variables `<var>Asm` = `ASSEMBLY(UNIFIED)` and `<var>Url` = `URL(METADATA()<asset path>)`; reference dialog with Use Web Control checked. [observed at design time: T2, T6]
- **T-2. Asset store.** Edit > Web User Control Assets (Global Objects dialog, Web Assets tree, Edit Browser File text view) holds the HTML, JS and CSS. Only read use was observed; New, Import, Delete and Copy were not used. [observed read-only]
- **T-3. Arguments from JavaScript into a C# Form Script method.** `WSForm.invoke(methodName, arg1, arg2, callback)` calls `public string M(string, string)`; the return value goes to the callback. [source-level, login page]
- **T-4. No-argument call.** `WSForm.invoke("<Method>", callback)` calls `public void <Method>()`. [source-level; the dashboard's rendered data is consistent with it]
- **T-5. C# to JavaScript by Form variable.** `ThisForm.Variables("<name>").Value = json` in C#, then `WSForm.getVarValue("<name>", callback)` in JavaScript, with a timeout around the callback. [source-level; the dashboard's rendered data is consistent with it]
- **T-6. Read an IDO collection in C#.** `IDOClient.LoadCollection(idoName, "<comma-separated properties>", filter, "", rowLimit)`; iterate `response.Items` and read `PropertyValues[k].Value` in the same order as the property string. [source-level; the index-order assumption is untested, see I-1]
- **T-7. Serialise rows to JSON in C#.** `JsonConvert.SerializeObject(list, Formatting.Indented)` (Newtonsoft; `//<Ref>Newtonsoft.Json.dll</Ref>` comment) into a Form variable. [source-level]
- **T-8. Pre-display C# call.** A Form Event Handlers group `StdFormPredisplay` with a `Collection Refresh` row followed by a `Form Script Method` row. [design-time rows; runtime order not observed]
- **T-9. Client-side refresh and settings.** A `setTimeout` poll (default 5 seconds, one timer at a time), settings in `window.localStorage`, and a page-ready hook `MG.onReady(fn)` behind `typeof` guards. [source-level; the timestamp change was observed on screen]
- **T-10. Client-side input checks before the server call.** Minimum lengths, field error elements and a loading state on the button. [source-level; not run]
- **T-11. Global variable definitions as cross-Form state.** Edit > Variable entries with the Persistent flag. [design-time; the runtime definition behind `vInventoryJson` is unresolved, I-6]
- **T-12. UserControl as the whole Form body.** A Normal or Flex Form whose only component is a UserControl, with no Web Client grid. [observed rendering at T11; the Form has no data grid]

### 7. Open questions (T12 numbering; earlier numbers 1–78 remain in their sections)
- **Q-1.** `$app/scripts/UserControl.js`: the WSForm and MG implementation, the `invokeAsync` bridge, callback and return semantics, `getVarValue`, `MG.onReady`, and whether public C# methods other than `LoadInventoryFromIDO` (ProcessLogin, LoadMockLoginJson) can be invoked by name. Blocked since T8. [D-1]
- **Q-2.** MockLogin IDO definition: whether `Username` exists, property classes and bindings, methods, and whether an IDO named `MockLoginIDO` exists. [D-2]
- **Q-3.** The login-to-dashboard link. No inspected artifact shows it (section 2.8). [D-3]
- **Q-4.** `vMockLoginJson`: its Form category, persistence and any reader. None was found in the copies.
- **Q-5.** `vInventoryJson`: which definition `ThisForm.Variables` binds to at runtime (global, design-empty; Form-level Temporary category not observed).
- **Q-6.** `LoadCollection`: the meanings of the empty-string arguments and of the numeric arguments 1 and 100. Whether 100 is a row cap is not tested (the dashboard showed 14 rows).
- **Q-7.** Cause of the SKU005 and SKU012 swap (I-1).
- **Q-8.** Whether the rendered property lists are truncated at their end (I-2), and whether `Username` exists on the IDO.
- **Q-9.** The MockInventory grid header discrepancy (I-3).
- **Q-10.** Whether the MockLoginPortal collection blanks are real (I-4).
- **Q-11.** Not read: MockInventory Options and filter; `Global - Temporary` in the MockInventory Form view; any Form-Temporary category on the dashboard.
- **Q-12.** Why Save became enabled after the Script Editor was cancelled on some Forms and not on others (I-5).
- **Q-13.** Whether one dashboard page load triggers `LoadInventoryFromIDO` twice (I-7).
- **Q-14.** The global Script entry (Edit > Script): identity and content. Never opened; no `global-script.cs.txt`.
- **Q-15.** `MockInventory/script.js`: keep as a reference or remove (I-9). No change was made.
- **Q-16.** Unexpanded asset folders (`$app/appbuilder`, `$app/apphub`, `$app/images`, `mongoose`, `sohoComponents`, `sohoxi`) and the root file `custom`: they may hold shared helpers. Not inspected.
- **Q-17.** Purpose of the credential-named globals (`MPUsername`, `MPPassword`) and of `LoginFoundUser` and `IncludeBadgeStatusVar`. Values withheld by the credential rule.
- **Q-18.** Controller tasks H7 (12 attempts) and H15 (24 attempts) have no record section (section 9). Their content and the session-limit messages they contain are unrecorded.
- **Q-19.** Controller task H9: 17 attempts exceed the 26 recorded executed actions (section 9).
- **Q-20.** The "T5-to-T6 task-boundary overrun" is carried forward in six places but never defined. [D-5]
- **Q-21.** `evidence/EXP-128/t12rec-01-script-editor-open-start.png` is in the folder but in no record section. Provenance unknown; not viewed in T12.
- **Q-22.** Whether the candidate techniques (section 6) are new to the factory. The Hello World records were not read in T12.
- **Q-23.** Git: the record and evidence folder are untracked (section 11). Commit and review are the operator's.
- **Q-24.** Meaning of the dashboard Form variable `InitialCommand` = `FilterInPlace` and of the funnel icon beside the dashboard title (T11).
- **Q-25.** Whether a data change raises the dashboard's alert toast (untested; no change occurred).

### 8. Evidence matrix, AC-1 to AC-5 (qualified)
| AC | Status | Supporting evidence (repo-relative) | Qualifications and gaps |
| --- | --- | --- | --- |
| AC-1 Sources, session, scope, gate, menus, names | **Met, with procedural exceptions** | `evidence/EXP-128/t1-01-designer-edit-menu-open.png` (Edit menu, 18 entries, User scope); `t1-02`, `t1-03` (Form and Definition menus); `t1-04` (Select Form filtered on Mock, six rows); record T1 (starting Form MockLoginIDO clean, Save disabled) | AGENTS.md was read in full in some tasks only: T2 (first 60 lines), T3 (first 30 lines), T8 (first 30 lines), T16 (not re-read); T4 continuation records "130 lines" against the present 240. Select Form was reached from the Web Client toolbar, because the Designer Form menu has no Open entry. T1 Designer opened MockLoginIDO by the Web Client button. Gate screenshots show the account name (not transcribed). |
| AC-2 Each Form: type, collections, components, UserControl references, event handlers, variables, Form Script | **Partially met** | MockLoginPortal: `t2-01` to `t2-21`, `t3-01` to `t3-09`, `t17-01` to `t17-04`; script `MockLoginPortal-form-script.cs.txt` (complete to line 141). MockInventory: `t4-01` to `t4-08`, `t5-01` to `t5-09`; script `MockInventory-form-script.cs.txt` (complete, VB). Dashboard: `t6-01` to `t6-10`; script `MockInventoryDashboard-form-script.cs.txt` (59 lines) | MockLoginPortal: collection values blank (Q-10); URL radio state unresolved; indentation of lines 78–97 unverified (accepted by the operator). MockInventory: Options and filter unreadable (Q-11); Form-view variables 35 of about 48 Global-Persistent, Global-Temporary not in the view. Dashboard: copy has no indentation; Form-view globals 30 of 48 (full set in T9). Global script (Edit > Script) not captured (Q-14), which is a brief requirement from T3. |
| AC-3 Web User Control assets: list, verbatim copies, WSForm/MG calls; related globals; MockLoginIDO properties and methods | **Partially met** | Asset tree `t7-01`, `t7-02`, `t7-03`, `t7-05`, `t7-06`; copies `assets/mocklogin_index.html.txt` (`t7-04`), `assets/MockInventory_index.html.txt`, `assets/mocklogin_script_app.js.txt` (`t8-01`), `assets/mocklogin_style_app.css.txt`, `assets/MockInventory_style.css.txt`, `assets/MockInventory_script.js.txt`; globals `global-variables-inventory.txt` (`t9-01`, `t9-02`); MockLoginIDO property list `MockLoginIDO-metadata.txt` (`t10-03`) | `$app/scripts/UserControl.js` not read or copied (`t8-02` shows an empty Properties pane). Copies are text-equivalent and flattened, not byte-exact. Six asset folders not expanded (Q-16). IDO methods, property classes and bindings not recorded because the IDO was not inspected (Q-2). `Username` not in the rendered property list (I-2). |
| AC-4 Runtime look without interaction; T12 mapping; candidate techniques marked unverified | **Partially met** | `t11-01` (login card, empty fields), `t11-02` (MockInventory detail), `t11-03` (dashboard, 14 rows, timestamp); T12 section 2.6 call map; section 6 | Each Form opened and closed once. No runtime login, so `ProcessLogin` and its alert were not observed. Individual `WSForm` calls were not observed; their contracts depend on `UserControl.js`. Candidate techniques are unverified. |
| AC-5 No save or creation; dialogs closed; accidental changes discarded; no credential copied; no runtime interaction; User scope; no task-boundary overrun | **Met, with qualifications** | Controller audits `harness-audit-T1.md` to `T17.md`; accidental flags A-1 and A-2 (section 10) were answered No; pattern check of the 12 copies (S-6): no credential-like values; User scope in each gate (T1 to T17) | 53 attempts of unknown execution status (H7, H9, H15; section 9). Two tasks without record sections (H7, H15), each with a session-limit terminal message. One repository Edit failed (H17, no content change). One worker file outside the permitted directory (`evidence/playwright/t4-components-snapshot-check.yml`). One unrecorded PNG (`t12rec-01`). The "T5-to-T6 overrun" is not defined. |

### 9. Browser action audit, reconciled to controller counts (authoritative per harness task)
**Counting basis (verified against record totals).** Controller `actions` = attempted browser actions (tab selects, clicks, coordinate clicks, mouse moves, wheels, key presses, typing), including those that timed out, returned "Ref not found" or were denied. Controller `reads` = snapshots, finds, screenshots, tab listings and waits. Repository Read, Grep, Glob and Edit calls are in neither count. Each harness task H*n* matches the file `harness-audit-T*n*.md`. Mapping to record sections is inferred from matching counts and from the record's own notes, and is marked where it is not stated.

| H | Controller actions | Controller reads | Controller errors | Record section (basis) | Record executed | Attempted, not executed (record) | Difference |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 15 | 16 | 0 | T1 (counts match) | 15 | 0 | 0 |
| 2 | 35 | 58 | 4 | T2 (counts match) | 35 as recorded; 33 executed + 2 timed-out clicks | 2 | Record labels the 2 timed-out clicks "executed" |
| 3 | 20 | 22 | 3 | T3 (counts match) | 19 | 1 (harness denial, wheel) | 0 |
| 4 | 10 | 18 | 1 | T4 first task (counts match) | 10 | 0 | 0 |
| 5 | 7 | 15 | 2 | T4 continuation, task fd81c666 | 5 | 2 (timeouts) | 0 |
| 6 | 10 | 20 | 4 | T4 completion and T5, task 893366b8 | 7 | 3 (timeouts) | 0 (record body says 4 timeouts; audit says 3) |
| 7 | 12 | 19 | 3 | **No record section** | unknown | unknown | Unrecorded (Q-18) |
| 8 | 16 | 25 | 2 | MockInventory retry and T6 checkpoint, task bbc76dc0 | 14 | 2 (Ref not found) | 0 |
| 9 | 43 | 58 | 7 | T6 completion, continuation task f6a97a00 | 26 (pre-compaction part reconstructed) | not stated | 17 unexplained (Q-19) |
| 10 | 17 | 25 | 1 | T7 | 17 | 0 | 0 (the 1 error is a denied repository Grep, not a browser error) |
| 11 | 24 | 32 | 0 | T8 | 24 | 0 | 0 |
| 12 | 10 | 15 | 2 | T9 | 9 | 1 (Ref not found) | 0 |
| 13 | 21 | 30 | 3 | T10 | 20 | 1 (Ref not found) | 0 |
| 14 | 10 | 17 | 0 | T11 | 10 | 0 | 0 |
| 15 | 24 | 27 | 2 | **No record section**; described only as "the T15 session" in the pre-T12 blocked section | unknown | unknown | Unrecorded (Q-18) |
| 16 | 2 | 4 | 0 | Pre-T12 source recovery, blocked | 2 | 0 | 0 |
| 17 | 41 | 42 | 1 | Pre-T12 source recovery, complete (T17) | 41 | 0 | 0 (the 1 error is the failed repository Edit) |
| **Total** | **317** | **443** | **35** | | **252 (record; H9 partly reconstructed)** | **12 known non-executed** | **53 of unknown status** |

**Totals.**
- Attempted browser actions, all controller tasks H1–H17: **317** (authoritative).
- Known non-executed attempts (timeouts, Ref not found, one harness denial): **12** (H2 2, H3 1, H5 2, H6 3, H8 2, H12 1, H13 1).
- Record executed actions (H2 with its two timed-out clicks removed; H9 partly reconstructed): **252**.
- Attempts of unknown execution status: **53** (H7 12, H9 17, H15 24). The executed total therefore lies between **252** and **305**. It cannot be given as a single exact figure.
- Reads (controller): **443**. Reconciled exactly for H1–H6, H8, H10–H14, H16 and H17 (waits included). Not reconcilable for H7, H9 and H15.
- Browser-tool errors: **31** (including one harness denial in H3). Repository errors: **2** (denied Grep, H10; failed Edit, H17). Session-limit terminal messages: **2** (H7 and H15; not recorded in those sections).
- Record cumulative figures (148, 172, 181, 201, 211 as recorded, T7 to T11) are superseded by this reconciliation and are not used as exact. The record's 211 through T11 equals 209 with H2 at 33, plus 2 for H2's timed-out clicks.
- Controller key sequences: T1 (H1) `Control+a`, `Backspace` (matches record); T6 (H6) `F5` once (matches record; effect unconfirmed). Every controller file reports `exact mismatches=0` and `key string (none)`, and lists the same expected names (MockLoginPortal, MockInventory, MockLoginIDO). The controller summary does not list the text typed in the Select Form filter or the IDO criteria, so typing is only partly verified by it.
- Controller flagged-tool hit (H1): `browser_type` ×1. This is the permitted Select Form filter entry ("Mock") and is not a prohibited action.
- **T12 (this task):** browser actions **0**; browser reads **0**. Repository calls only.

### 10. Procedural deviations, accidental changes and brief gaps
**Accidental unsaved changes (observed, all discarded with No; none outstanding at the last record).**
- **A-1.** MockInventory (task 893366b8): Save enabled after Edit > Form Script was opened and cancelled. Flag left in place. Closed with "No" to the save prompt in task bbc76dc0 (prompt "Form MockInventory has changed"). Nothing saved.
- **A-2.** MockLoginIDO (T10): Save enabled after Edit > Form Script was opened and cancelled. Closed with "No". Nothing saved.

**Procedural deviations and brief gaps (not excused).**
- **P-1.** T1: the Designer Form menu has no Select Form entry; the Web Client toolbar was used. The Designer was opened by the Web Client button (MockLoginIDO), not by a Form-menu entry.
- **P-2.** T2: two Designer Form-menu clicks timed out; recovered after a tab select and one corrected click. T2: one screenshot timed out.
- **P-3.** T3: the copy stopped at line 77 after a harness denial of a repeated wheel call; completed in T17. The global Script entry was not opened in T3 as the brief required, so `global-script.cs.txt` does not exist (Q-14).
- **P-4.** T4: the console count rose from 2 to 3 after a coordinate click. The operator set 3 as the baseline; the worker did not read the log. The cause is the operator's attribution and is not verified.
- **P-5.** T4 and T5: the Components, Event Handlers and Variables panels rendered blank in one task and were inaccessible in the next. A single F5 reload was operator-authorised; its effect is unconfirmed.
- **P-6.** T5 (893366b8): the first MockInventory script editor was empty; its header tool, not Cancel, closed it after two Cancel time-outs. The MockInventory copy was header-only until the retry.
- **P-7.** T4 continuation: a snapshot was written to `evidence/playwright/t4-components-snapshot-check.yml` through a `filename` argument. That path is outside the permitted directory. The operator may remove it.
- **P-8.** T5 and T6 labels: the harness header labels differed from the bounded instructions in several tasks (for example T6 for T5, T11 for T8, T12 for T9, T13 for T10, T14 for T11, T16 for the pre-T12 task). Each time the bounded instruction was followed and the mismatch recorded.
- **P-9.** "T5-to-T6 task-boundary overrun" (Q-20): carried forward in six places and never defined. The nearest candidate is task bbc76dc0, which covered the MockInventory retry (T5) and the dashboard checkpoint (T6) in one task; its record says the instruction asked to continue to T6. The operator should define or withdraw this item.
- **P-10.** AGENTS.md reads were incomplete in some tasks (section 8, AC-1).
- **P-11.** Controller task H7 (12 attempts, 2 Ref errors, session-limit message) and H15 (24 attempts, 1 Ref error, session-limit message) have no record section. The record does not mention either session-limit message.
- **P-12.** Controller task H9 (T6 completion): 43 attempts and 7 stale-reference errors against 26 recorded executed actions. The record says its pre-compaction counts were reconstructed, and did not reconcile them.
- **P-13.** T15 to T16: the signed-in account name changed (observed by scope-name comparison). The operator signed back in and restored User scope (recorded in the pre-T12 COMPLETE section, "Gate for this task"). The Mock Forms were absent from the Designer recent list until then.
- **P-14.** Between T1 and T11 the five Web Client Form tabs recorded at T1 were no longer open at T11. The record attributes this to an operator refresh (not verified). The T1 tabs were "left as found", so their later state is not known.
- **P-15.** T17: one repository Edit failed ("String to replace not found"; controller #105). The later Edits succeeded. The failed Edit changed no content.
- **P-16.** An unrecorded PNG, `evidence/EXP-128/t12rec-01-script-editor-open-start.png`, is in the folder (Q-21).

### 11. Worker-written file inventory and redaction
**Record (worker-authored; edited in every task; edited in T12):**
- `experiments/EXP-128-mock-inventory-portal-read-only-study.md`

**Text copies (worker-authored; 12 files; each checked by pattern in T12; 0 credential values redacted in any):**
| File | Source | Redactions |
| --- | --- | --- |
| `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` | Form Script, 141 lines (copy header 9 lines) | 0 |
| `evidence/EXP-128/MockInventory-form-script.cs.txt` | Form Script, VB.NET, 20 lines | 0 |
| `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` | Form Script, C#, 59 lines | 0 |
| `evidence/EXP-128/MockLoginIDO-form-script.cs.txt` | Form Script, VB.NET (file name says .cs), 20 lines | 0 |
| `evidence/EXP-128/MockLoginIDO-metadata.txt` | Designer metadata inventory | 0 credential; 1 account placeholder (`<signed-in user>`) |
| `evidence/EXP-128/global-variables-inventory.txt` | Global variables, 54 names | 0 credential; 1 account placeholder; `MPUsername`, `MPPassword`, `LoginFoundUser` and `IncludeBadgeStatusVar` recorded as names only |
| `evidence/EXP-128/assets/mocklogin_index.html.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/MockInventory_index.html.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/mocklogin_script_app.js.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/mocklogin_style_app.css.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/MockInventory_style.css.txt` | Asset, text-equivalent, flattened | 0 |
| `evidence/EXP-128/assets/MockInventory_script.js.txt` | Asset, text-equivalent, flattened (not referenced) | 0 |
Not written: `global-script.cs.txt` (Q-14); `UserControl.js` (blocked).

**Screenshots (worker-authored):** 82 PNG files in `evidence/EXP-128/`. 81 are recorded in the record's screenshot tables, by task: T1 4; T2 21; T3 9; T4 8; T5 9; T6 10; T7 6; T8 2; T9 2; T10 3; T11 3; T17 4. One (`t12rec-01-script-editor-open-start.png`) is in no record section (Q-21). The record states that the status bar shows the signed-in account name in `t1-01` to `t11-03` and `t17-01` to `t17-04`. `t17-03` was viewed in T12 and shows the name; its text is not transcribed here. `t12rec-01` was not viewed.

**Harness-generated (not worker-authored):** `evidence/EXP-128/harness-audit-T1.md` to `harness-audit-T17.md` (17 files; each begins "controller-generated audit"). These are read-only references for section 9.

**Tool-generated (not worker-authored):** `evidence/playwright/page-*.yml` and `console-*.log` files produced by the browser tool, including EXP-128 sessions dated 2026-10-23 and 2026-10-25. The folder is shared with other experiments; these were not enumerated and their content was not read.

**Worker-written outside the permitted directory:** `evidence/playwright/t4-components-snapshot-check.yml` (P-7).

**Written in T12:** only the experiment record (this section and the top status line). No evidence file was created, changed or deleted in T12.

**Git state (session-start snapshot; no `git` command run in T12):** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` and `evidence/EXP-128/` are untracked. Committed brief commits are `904000d` (draft) and `6b966f1` (approved). Modified and untracked files under `tools/claude-harness/` are outside EXP-128 and were not written by T12.

### 12. Final browser state
- **Last observed:** T17 (controller-verified, 41 actions). Designer tab on the Designer page; no Form open; no dialog, editor, menu or prompt; Save, Regenerate Form and Undo disabled; console 2 errors / 0 warnings; scope `User`; no unsaved change.
- **Web Client tab:** T17 recorded it as untouched, still reporting `favoriteContext=MockLoginPortal`. Its last console reading was in T11 (5 errors / 2 warnings). Its open Form tabs after T11 are not recorded.
- **T12:** no browser tool was called. The browser state is unchanged by this task.
- **Unsaved changes outstanding:** none recorded (A-1 and A-2 were closed with No). **Dialogs or prompts open:** none recorded.

### 13. Operator decisions and acceptance recommendation
**Decisions needed (in order of effect on the synthesis):**
- **D-1.** Authorise a bounded read of `$app/scripts/UserControl.js` (Q-1), or accept it as a permanent gap. Without it the WSForm contract and the `invokeAsync` link stay unverified.
- **D-2.** Authorise the MockLogin IDO read through the Web Client Filter In Place route (Q-2), or accept the gap. Without it `Username`, property classes and IDO methods stay unknown.
- **D-3.** Accept the login-to-dashboard link as unresolved (Q-3), or open a new brief to establish it. Any runtime login is outside EXP-128.
- **D-4.** Accept the reconciled counts (317 attempted; 252 record-executed, H9 partly reconstructed; 53 of unknown status), or request record sections for H7 and H15 and a reconciliation of H9 (Q-18, Q-19).
- **D-5.** Define or withdraw the "T5-to-T6 task-boundary overrun" (Q-20).
- **D-6.** Decide on `evidence/playwright/t4-components-snapshot-check.yml` (outside the permitted directory), on `t12rec-01-script-editor-open-start.png` (provenance), and on `MockInventory/script.js` (Q-15). T12 made no change to any of them.
- **D-7.** Redaction before external distribution of the screenshots (section 11). The record itself uses `<signed-in user>`; the images do not.
- **D-8.** Accept the global-script gap (Q-14), or authorise a read-only Script entry check.
- **D-9.** Review the source-level observations S-1 to S-3 as a separate decision. No runtime test of them is authorised here.
- **D-10.** Git review of the untracked EXP-128 files and of the tools changes outside this experiment (Q-23). T12 did not stage, commit, switch, reset or clean anything.

**Recommendation.** Do not mark EXP-128 complete or accepted. The recommended status is **partially complete, qualified observational study**: AC-1 met with procedural exceptions; AC-2 and AC-3 partially met; AC-4 partially met; AC-5 met with qualifications. Accept the observations as observed (not verified). Record the open items (Q-1 to Q-25) as open. Final acceptance is the operator's decision.

**Remaining work, if the operator authorises it (repository-only work first):** a reconciliation note for H7, H9 and H15 from the worker sessions; the cross-check of section 6 against the Hello World records (Q-22). Browser work (D-1, D-2) needs separate bounded authorisation.

**Next step:** stop here. T12 is complete as a qualified draft. No further task is started.

## T19 - Independent verification and correction of the T12 synthesis (repository only, 2026-10-25)

Harness header read `task=T19`. The bounded instruction asked for independent verification and correction of T12 with no browser work. It was followed.

### Gate and method
- **Browser:** no browser tool was called. No tab was listed, selected or read. The browser state is the last state recorded in T17 (section 12); T19 did not re-observe it.
- **Sources read:** AGENTS.md (240 lines, full). This record: the T12 section, the pre-T12 BLOCKED section (lines 1811 to 1866) and parts of the T4, T5, T6, MockInventory retry and T3 sections. The login JavaScript copy (`assets/mocklogin_script_app.js.txt`); the MockLoginPortal Form Script copy (lines 1 to 141); the dashboard Form Script copy; `assets/MockInventory_index.html.txt`; `assets/MockInventory_script.js.txt`; `assets/mocklogin_index.html.txt`; the MockInventory and MockLoginIDO Form Script copies. Controller audits `harness-audit-T1.md` to `T18.md` (counts and selected rows).
- **Not read:** `$app/scripts/UserControl.js` (never readable in this experiment); the MockLogin IDO definition; the content of any screenshot (T19 viewed no image); the console logs (not permitted); the docs guides (not in T19 scope).
- **Git:** no shell tool is available. A read-only Grep of `.git/logs/HEAD` was denied by the harness permission and was not retried. Authoritative Git verification remains outstanding for the operator.
- **Credential scan:** a pattern scan of the 12 `.txt` copies found 3 matching lines. None is a literal credential value. Two are code assignments; one is a credential-named global label whose line carries a withheld or name-only note (confirmed by pattern count; the line was not displayed). No redaction was needed in T19.
- **Evidence written:** `evidence/EXP-128/t19-audit-reconciliation.md` (controller reconciliation, file inventory, mapping gaps). Full detail is there; this section summarises it.

### Verified against the copies (source-level; line numbers are source lines)
- **Login Form Script (MockLoginPortal):** `ProcessLogin` is at lines 16 to 79. `vMockLoginJson` is written at lines 62 and 128 (`LoadMockLoginJson`). The stored password is read at line 50 and compared at line 64. The helper `ShowMongooseAlert` is at line 85 and calls `Application.ShowMessage` at line 89. `LoadMockLoginJson` is at lines 96 to 136. Its only occurrence in any copy is its definition (copy line 105): **no caller exists in any copy**. Return strings: `"missing"` (32), `"empty"` (53), `"invalid"` (76), `"ok"` (80), `"error"` (86).
- **Login JavaScript (`mocklogin/script/app.js`):** one bridge call, `invokeAsync("ProcessLogin", usernameInput.value.trim(), passwordInput.value, 15000)`. The wrapper `invokeAsync` contains the text `WSForm.invoke(methodName, arg1, arg2, function (result) {...})` inside a try/catch. The `15000` is the wrapper's `timeoutMs`, not an argument of `WSForm.invoke`.
- **Dashboard Form Script (`MockInventoryDashboard`):** `LoadInventoryFromIDO` writes `ThisForm.Variables("vInventoryJson").Value = json` at line 51. The `LoadCollection` call is at lines 19 to 25 with the property string at line 17. Index mapping `PropertyValues[0..5]` at lines 36 to 41 follows that string. Lines 53 to 55 are a commented-out `Application.ShowMessage`.
- **Dashboard HTML (`MockInventory/index.html`):** `WSForm.invoke("LoadInventoryFromIDO", …)` in `invokeLoadInventoryFromIDO()`. `WSForm.getVarValue("vInventoryJson", …)` in `getInventoryJson()` with a 15000 ms timer. `MG.onReady(initializeInventoryDashboard)`. Default poll 5 s. Local-storage key `inventoryDashboard.polling`.
- **Asset call inventory:** the only `WSForm` and `MG` calls in any copy are those listed here (login: `WSForm.invoke`; dashboard: `WSForm.invoke`, `WSForm.getVarValue`, `MG.onReady` and typeof guards; `MockInventory/script.js`: `WSForm.getVarValue` and typeof guards). No `WSForm.generate`, `setVarValue`, `getCompValue`, `setCompValue` or other `MG.*` call appears in any copy.
- **Login-to-dashboard link:** no copy links them. There is no navigation, no shared variable and no caller of `LoadMockLoginJson`. The T12 "none observed" statement holds at source level.

### Correction log (T12 statement, T19 result, status)
Status values: corrected; retained with qualification; unresolved; verified.

| # | T12 statement (section) | T19 result | Status |
| --- | --- | --- | --- |
| C-1 | Login call written as `invokeAsync("ProcessLogin", trimmedUsername, password, 15000)` (2.6 row 1) | The argument expressions are `usernameInput.value.trim()` and `passwordInput.value`. `15000` is `invokeAsync`'s `timeoutMs`. "trimmedUsername" was a paraphrase. | corrected |
| C-2 | `invokeAsync` calls `WSForm.invoke` (2.6 row 1; 2.8; T-3); "the return value goes to the callback" (T-3) | The wrapper's source text contains the `WSForm.invoke` call. Whether the `UserControl.js` bridge delivers the call, the callback argument and the C# return value as the wrapper expects is not verified. | retained with qualification (source text); the return-to-callback contract is unresolved (Q-1) |
| C-3 | `MockInventory/script.js` uses ids that `index.html` lacks, including `searchInput` (2.6; I-9; Q-15) | `script.js` uses `inventoryBody` and `search`. Both are absent from `index.html`. `index.html` does contain `searchInput`. | corrected |
| C-4 | "Known non-executed attempts: 12" (section 9) | 19 action attempts returned errors: 7 timeouts, 11 `Ref not found` clicks (including H7 row 18 and six H9 rows), and 1 hook denial. The T12 list omitted H7 and H9. | corrected |
| C-5 | "Attempts of unknown execution status: 53" (section 9) | Of the 53, 46 returned tool success (`ok`) and 7 returned `Ref not found`. The controller result column leaves none unknown. The "unknown" label reflected missing record sections, not missing controller results. | corrected |
| C-6 | "The executed total therefore lies between 252 and 305" (section 9) | Tool-reported successes are exactly **298**. Record-attested executions are 252, a subset. "Executed" in this record means tool-reported success; the UI effect of each action is not verified. | corrected |
| C-7 | "Browser-tool errors: 31"; "Repository errors: 2" (section 9; section 8 AC-5) | 30 browser-tool errors (19 action, 11 read). 3 repository errors (H6 row 39, H10 row 40, H17 row 105). 2 session-limit terminal messages. Total 35, equal to the controller `errors=` sum. | corrected |
| C-8 | "T6 (H6) F5 once" (section 9 key sequences) | H6 is the T4-completion and T5 task (893366b8), not T6. The F5 press (H6 row 16) is confirmed once. Its effect is unconfirmed (P-5). | corrected (label) |
| C-9 | H7 has "no record section" (section 9; P-11) | H7's captures t5-05 to t5-08 are described at record lines 583 to 658, under the bbc76dc0 label, with no action count. The H7 session-limit message is in `harness-audit-T7.md` line 15. | corrected (partly) |
| C-10 | H15 has "no record section" and is described only as "the T15 session" (section 9; P-11) | H15 is described in the pre-T12 BLOCKED section (lines 1825 to 1837) without its action count (24: 4 clicks, 18 view-only wheel scrolls, 1 mouse move, 1 tab select), the screenshot `t12rec-01`, or its session-limit message. The heading "before the editor closed" (line 1825) is not supported: H15 has no close row. | corrected |
| C-11 | H9: "17 attempts unexplained" (section 9; Q-19; P-12) | Controller: 43 actions = 37 tool-ok + 6 `Ref not found` clicks; 30 of the 43 are clicks. The record's 26 is a reconstruction that undercounts tool-ok actions by 11 and clicks by about 16. The count discrepancy is resolved; the UI effect of each action is not. | corrected (partly resolved) |
| C-12 | "harness-audit-T1.md to T17.md (17 files)" (section 11) | 18 controller audit files exist (T1 to T18). | corrected |
| C-13 | `t12rec-01-script-editor-open-start.png` in "no record section; provenance unknown" (Q-21; section 11; P-16) | Controller attribution: H15 row 16 (`browser_take_screenshot`, relative filename `evidence/EXP-128/t12rec-01-script-editor-open-start.png`, result ok). Its purpose is not recorded and its content was not viewed. | partly resolved |
| C-14 | AGENTS.md reads: "T2 (first 60 lines), T3 (first 30 lines), T8 (first 30 lines), T16 (not re-read)" (section 8, AC-1; P-10) | Controller: AGENTS.md is the first row of 16 of the 17 H tasks. H16 has no AGENTS.md row (non-read confirmed). The audit records only `file_path`, so partial reads cannot be checked. | retained with qualification (H16 confirmed) |
| C-15 | "One repository Edit failed (H17)" (P-15; section 8; section 11) | H6 row 39 is also a failed repository Edit, on the experiment record (`String to replace not found`), and was not recorded before T19. The H17 failure targeted the MockLoginPortal `.txt` copy, not the record. | corrected |
| C-16 | "T5-to-T6 task-boundary overrun" (Q-20; P-9; D-5) | Cannot be established either way: the bounded instruction texts are not retained. Record lines 511 and 725 are the only retained statements of those instructions. | unresolved |
| C-17 | Section 11 and D-7: the name is shown in t1-01 to t11-03 and t17-01 to t17-04, and "the images do not [use <signed-in user>]" | The record names the status-bar name in those files only. T19 viewed no image, so it does not establish that all 82 PNG files show it. All 82 must be reviewed before any external sharing. | corrected |
| C-18 | Correction 3: the `vMockLoginJson` write is at source line 62, not 69 (section 1) | Verified (copy line 71). The T9 note in `global-variables-inventory.txt` (line 93) still says line 69. That file is not edited. | verified (T9 note superseded) |
| C-19 | Dashboard index mapping, `LoadCollection` arguments, `vInventoryJson` write and the 15 s `getVarValue` timeout (2.4; 2.6; 2.8) | Verified against the copies (see above). Individual calls are not observed. | verified (source-level) |
| C-20 | Login line references and password observations (2.2; section 4 S-1 to S-3) | Verified (see above). Lines 78 to 97 keep the operator-accepted transcription qualification. | verified (source-level) |
| C-21 | MockLoginIDO script "20 lines" (2.1; file inventory) | The copy has 19 text lines and an empty 20th line, matching the editor count. | retained |

### Controller audit reconciliation (exact; detail in `evidence/EXP-128/t19-audit-reconciliation.md`)
- **Attempted browser actions:** 317 (the controller total, reproduced by an action rule applied to every file).
- **Tool-reported success:** 298. **Tool-reported action errors:** 19 (7 timeouts, 11 `Ref not found` clicks, 1 hook denial). **Read errors:** 11. **Repository errors:** 3 (H6, H10, H17). **Session-limit messages:** 2 (H7, H15).
- **Reads:** 443. Verified: total browser rows minus actions, with repository rows counted independently (H1 to H9: 135; H10 to H17: 103).
- **Record-attested executions:** 252, a subset of the 298. The difference of 46 is H7 (11), H9 (11 above the record's 26) and H15 (24).
- **Screenshots:** 82 successful `browser_take_screenshot` calls, matching the 82 PNG files.
- **Writes:** 14 calls, 13 unique files (`MockInventory-form-script.cs.txt` was written in H6 and again in H8). **Edits:** 62 calls in H1 to H17 (60 ok, 2 failed). T18 made 19 Edit calls to this record.
- **Save, Apply, OK and prohibited controls:** the only Save-related row is H8's "Save prompt No" (answered No). The only OK is H1's Identify Your Editing Scope OK, which is permitted. No Regenerate, Delete, Check In or Out, Undo, Import, Copy, Paste, Unload, FormSync, Deploy, Ctrl+S or Enter row appears in any task.

### Procedural findings added in T19
1. **H15 session end with the Script Editor open.** The controller records no close row for H15, which opened the MockLoginPortal Script Editor and ended with a session-limit message after row 54. H16 found no editor and a changed scope name (record lines 1817 to 1823). The cause is not established. No Save was clicked.
2. **H7 session end with MockInventory open.** H7 ended after a read of t5-08 with no close row. The H8 gate (line 662) found no Form open after the operator's manual refresh (section header at line 583).
3. **H6 repository Edit failure (row 39)** on this record was not recorded before T19. The same wording (line containing "Undo toolbar") appears at line 557, in the T5 section. The link is an inference.
4. **H16 did not read AGENTS.md.** Confirmed by the controller.
5. **Out-of-scope file:** `evidence/playwright/t4-components-snapshot-check.yml` was written by H5 row 15 (`browser_snapshot` with a `filename` argument). It is a historical exception. It was not moved, renamed or edited.
6. **Relative-path screenshot filenames** (H9 row 107; H10 rows 11, 17, 20, 31, 46 and 49; H15 row 16) resolve inside `evidence/EXP-128/`. Harmless, but not the form used elsewhere.
7. **F5 key press (H6 row 16):** a single press under the operator-authorised recovery. The record's own reload-unconfirmed statement stands.

### Acceptance checks (reassessed in T19)
| AC | Status | Qualification |
| --- | --- | --- |
| AC-1 Sources, session, scope, gate, menus, names | passed (qualified) | Gate, scope, Edit menu and Mock Form names recorded in T1 with screenshots. AGENTS.md is the first row of 16 of 17 H tasks (not H16). Select Form was reached from the Web Client (P-1). Partial reads cannot be verified from the audit. |
| AC-2 Each Form: type, collections, Components, UserControl references, events, variables, Form Script | pending | Recorded for all three Forms and their copies. MockLoginPortal collection values blank (Q-10). MockInventory Options and filter unread (Q-11). Global Script entry not captured (Q-14). Dashboard global view partial (full set in T9). |
| AC-3 Web User Control assets, WSForm/MG calls, related globals, MockLoginIDO properties and methods | pending | Six asset copies and all calls recorded. `$app/scripts/UserControl.js` never read (Q-1). MockLogin IDO definition not inspected (Q-2). |
| AC-4 Runtime look without interaction; T12 mapping; candidate techniques unverified | pending | Each Form viewed once at runtime (T11, without interaction). T19 corrected the mapping (C-1 to C-3). No individual WSForm call was observed. Candidates are unverified. |
| AC-5 Nothing saved or created; dialogs closed; no credential copied; User scope; no task-boundary overrun; final audit | pending | No Save was clicked; the two accidental flags were closed with No. Session-limit ends with a Form (H7) and an editor (H15) open, with no close row (section above). Repository Edit failures H6 and H17 (one not previously recorded). The T5-to-T6 item is unresolved (C-16). Git outstanding. |

Status values use the coordinator vocabulary (passed, failed, pending, not_applicable); qualifications are in the table.

### Candidate procedures (T-1 to T-12)
Unchanged and untested. No replay verification is claimed. T-3 and T-4 are retained as source-level call contracts; their bridge behaviour depends on `UserControl.js` (C-2).

### Operator decisions (update to T12 section 13)
- **D-1** (`UserControl.js`): a bounded read is still required to verify the bridge. Browser authorisation needed.
- **D-2** (MockLogin IDO): still required. The T10 route was prohibited; separate authorisation needed.
- **D-3** (login-to-dashboard link): accept as unresolved, or open a new brief. Any runtime login is outside EXP-128.
- **D-4** (counts): adopt the controller figures (317 attempts; 298 tool-reported success; 19 action errors; 11 read errors; 3 repository errors; 2 session-limit messages) as authoritative. The 252 is record-attested only.
- **D-5** (T5-to-T6 overrun): define it with the bounded instruction text, or withdraw it as unverifiable. T19 recommends withdrawal unless that text is supplied.
- **D-6** (out-of-scope and provenance items): keep `evidence/playwright/t4-components-snapshot-check.yml` as a recorded exception (not moved). Keep `t12rec-01` (controller-attributed to H15; its purpose to be recorded). Keep `MockInventory/script.js` as an unreferenced asset.
- **D-7** (screenshots): review all 82 PNG files before any external sharing. T19 did not view them.
- **D-8** (global Script entry): accept the gap, or authorise a read-only entry check.
- **D-9** (source-level security observations S-1 to S-3): review as a separate decision. No runtime test is authorised.
- **D-10** (Git): the operator reviews the untracked EXP-128 files and the `tools/` changes outside this experiment. T19 could not run Git.
- **D-11 (new)** (H7 and H15 session ends): accept them as recorded procedural exceptions, or record the operator's knowledge of the Form and editor states at those times.
- **D-12 (new)** (one credential-named global line in `global-variables-inventory.txt`, line 89): confirm during the operator's review that the line records a name only, without copying any value.

### Worker-written files (T19)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (status line; a note under the T12 heading; this T19 section).
- **Created:** `evidence/EXP-128/t19-audit-reconciliation.md`.
- **Not changed:** any copy, screenshot, controller audit or unrelated repository file.

### Final state and recommendation
- **Browser:** not touched in T19. Last observed in T17 (section 12): Designer, no Form open, no dialog, Save disabled, console 2 errors. Unverified in T19.
- **Recommended disposition:** partially complete, qualified observational study. Do not mark EXP-128 accepted or complete. Operator Git review is required.
- **Next step:** stop at the T19 boundary. No further repository-only task is needed for T19's scope. Remaining gaps (`UserControl.js`, the MockLogin IDO, the global Script entry) need operator browser authorisation. EXPERIMENT_COMPLETE is not declared.

---

## T20 - Bounded inspection of `$app/scripts/UserControl.js` (BLOCKED at the Properties pane; repository source check)

Task boundary (operator): inspect only `$app/scripts/UserControl.js`. The MockLogin IDO definition and the global Script entry were **not** inspected. No runtime test, no Web Client interaction, no edit, no Save.

### Result in one paragraph
`UserControl.js` was **not read**. No copy was written and `evidence/EXP-128/assets/_app_scripts_UserControl.js.txt` does **not** exist. The asset is present and selectable in Edit > Web User Control Assets > Web Assets (`$app` > `scripts` > `UserControl.js`), but its Properties pane rendered no rows (no Name, no Content, no "Open Edit Property Dialog" control) on the first selection and again after one corrected selection (folder, then file). The same stage rendered Properties for four other assets in T8. The cause is not established. The invokeAsync-to-`WSForm.invoke` call **is** visible in the saved `mocklogin/script/app.js` copy (see the bridge section below), but the implementation of `WSForm.invoke` and the callback contract remain unverified because they live in `UserControl.js`.

### Gate (T20)
- Sources: AGENTS.md read in full at the start of this task (240 lines, repository file). The T7, T8, T12 and T19 parts of this record were read; `evidence/EXP-128/t19-audit-reconciliation.md` was read in full. The four docs guides were not re-read (continuation rule).
- Tabs: listed once before the first selection. Tab 0 = Designer (`designer/Default.aspx`, current). Tab 1 = Web Client (`favoriteContext=MockLoginPortal`). Tab 0 was selected successfully. **Tab 1 was not selected and its console baseline was not taken** (no action was taken on it).
- Designer baseline at task start: no Form open (blank canvas), no dialog, Save disabled, status bar `ScopeType: User`, Properties pane empty, console **2 errors / 0 warnings**. The same 2 / 0 reading was taken after every action in T20 and was unchanged at the end. No rise.
- Session usable: no sign-in page, no session-expiry modal, no logout card, no server-event error.
- Account identity: the status bar shows the signed-in account name. It is written here as `<signed-in user>`. (Screenshots `t20-01` to `t20-04` show that name unredacted; see privacy note below.)

### Edit menu (observed in T20; opened once, not used further)
Entries, in order: Undo, Redo, Copy, Cut, Paste, Background Color, Component Class, Image, Property Class Extension, **Script**, Shortcut Menu, String, Theme, Validator, Variable, **Web User Control Assets**, Revert Global Object Definition. The Script entry is the global script entry (not opened, as the T20 boundary requires). Revert Global Object Definition was not clicked.

### Steps performed (in order; one row per browser call)
1. Tab list (read); tab 0 select (action, ok).
2. Untargeted snapshot (read): Designer, Save disabled, no Form open.
3. Click Edit menu (ref `e5`) (action, ok); snapshot (read): entries above.
4. Click Web User Control Assets (ref `e335`) (action, ok). Global Objects dialog opened. Top-level Web Assets tree: `$app`, `MockInventory`, `mocklogin`, `mongoose`, `sohoComponents`, `sohoxi`, `custom`.
5. Targeted snapshot with bounding boxes on the dialog (read); screenshot `t20-01` (read).
6. Coordinate click on the `$app` arrow at (582, 290) (action, ok; one coordinate click for that arrow, as the brief allows). Children: `appbuilder`, `apphub`, `images`, `scripts`, `MockInventory`, `mocklogin`, `mongoose`, `sohoComponents`, `sohoxi`, `custom`.
7. Coordinate click on the `scripts` arrow at (603, 382) (action, ok). Sole child: `UserControl.js` (ref `e463`, box 567,394). No other child.
8. Click `UserControl.js` (ref `e463`) (action, ok). The row became the active row. Targeted snapshot of the dialog (read): the Properties tree (ref `e423`) had no child rows. Screenshot `t20-02` (read): `UserControl.js` highlighted under `$app/scripts`; Properties pane empty.
9. Fresh untargeted snapshot (read): same state; Save disabled.
10. **One corrected selection:** click the `scripts` folder row (ref `e458`) (action, ok), a targeted snapshot (read), then click `UserControl.js` again (ref `e463`) (action, ok). Targeted snapshot of the Properties group (read): empty tree. Screenshot `t20-03` (read): `UserControl.js` highlighted; Properties pane empty. This is the only corrected selection; it differs from the T8 re-select, which re-clicked the same row without a folder selection in between.
11. Targeted snapshot of the dialog by ref `e341` returned **Ref not found** (read error). One fresh untargeted snapshot (read, ok) gave Cancel as `e436`; state unchanged.
12. Click **Cancel** (ref `e436`) (action, ok). Global Objects closed. Targeted snapshot of the toolbar (read): Save disabled. Screenshot `t20-04` (read): dialog closed, blank canvas (no Form open), Save icon greyed, status bar `ScopeType: User`, Properties pane empty.

### Why the inspection stopped (blocker)
Per the brief (step 8), the file is inaccessible through the Properties route after one corrected selection. No Name, Content or Edit control was shown, so the Edit Browser File dialog could not be opened. No other route was attempted: no double-click, no keyboard, no developer tools, no JavaScript, no network inspection, no undocumented endpoint.
- Comparison: in T8, the same stage populated the Properties pane for `mocklogin/script/app.js`, `mocklogin/style/app.css`, `MockInventory/style.css` and `MockInventory/script.js`. So the blank pane is specific to `UserControl.js` in this environment, or to a state the worker cannot see. The cause is **unresolved**.
- Suggested next step for the operator (not performed): check the asset's Properties in the Designer by hand (read-only) or accept the gap. A further worker attempt would need a new authorization, since the brief's one-correction allowance is used.

### Bridge comparison (repository copies only; source-level; no runtime)
Copies used: `evidence/EXP-128/assets/mocklogin_script_app.js.txt` (T8, flattened text, not byte-exact), `evidence/EXP-128/assets/MockInventory_index.html.txt` (T7), `evidence/EXP-128/assets/MockInventory_script.js.txt` (T8, unreferenced).

| Item | Source text (copy) | Status |
|---|---|---|
| `invokeAsync(methodName, arg1, arg2, timeoutMs)` | Defined in `mocklogin/script/app.js`. Returns a Promise. Its body calls `WSForm.invoke(methodName, arg1, arg2, function (result) { finish(false, result); })` inside a `try`. A timer rejects with `"Timed out: " + methodName` after `timeoutMs`. A `catch` routes exceptions to reject. | **Observed in source** (copy). `invokeAsync` calls `WSForm.invoke` directly. |
| `processLogin()` → `invokeAsync("ProcessLogin", trimmed username, password, 15000)` | Only caller of `invokeAsync` in that file. | Observed in source. |
| `WSForm.invoke("LoadInventoryFromIDO", function(result){...})` | `MockInventory/index.html` inline script. Two arguments: name, callback. Comment names C# `public void LoadInventoryFromIDO()`. | Observed in source. |
| `WSForm.getVarValue("vInventoryJson", function(value){...})` | `MockInventory/index.html` inline script, inside a 15 s timer guard. Also in unreferenced `MockInventory/script.js`. | Observed in source. |
| `MG.onReady(initializeInventoryDashboard)` | `MockInventory/index.html`, guarded by `typeof MG.onReady === "function"`. | Observed in source. |
| Guards | `typeof WSForm.invoke`, `typeof WSForm.getVarValue`, `typeof MG.onReady`; error text says to check the `UserControl.js` path. | Observed in source. |

Source-level conclusions:
- **The `invokeAsync` → `WSForm.invoke` link is now source-verified inside `app.js`** (the copy's function body calls it). This corrects the T19 statement that "the implementation connecting invokeAsync to WSForm.invoke remains unread". What remains unread is the **implementation of `WSForm.invoke`** (and of `WSForm.getVarValue`, `MG.onReady`), which is expected in `UserControl.js`.
- **Argument arity differs between the two call sites:** `ProcessLogin` passes two data arguments and a callback through `invokeAsync` (`WSForm.invoke(name, a, b, cb)`); `LoadInventoryFromIDO` passes no data arguments (`WSForm.invoke(name, cb)`). The convention that maps these to the C# parameters, and where the callback is taken from when it is not in the last position, is **unresolved** (it would be in `UserControl.js`).
- **Callback signature:** both callbacks take one `result` argument. The login callback value is not used by the page. The inventory callback only logs. The C# return values (string for `ProcessLogin`, none for `LoadInventoryFromIDO`) are established only by the C# comments, not at runtime.
- **Timeouts:** the page enforces its own timers (15 s in `invokeAsync`; 15 s around `getVarValue`). Whether `WSForm` itself has a timeout is unresolved.
- **Initialization order:** `index.html` checks `WSForm` and `MG` before use and calls `MG.onReady`, which implies the page can load before the bridge is ready. The order and the bridge's readiness guarantees are unresolved.
- **Not present in `app.js`:** `WSForm.getVarValue`, `setVarValue`, `generate`, `getCompValue`, `setCompValue`, and any `MG.*` call (T8 result, unchanged).
- **Runtime behaviour:** not observed in T20. Nothing here claims that any call executed.

### Redactions and credential check (T20)
- No source text of `UserControl.js` was read, so none was copied.
- Text read from the saved copies (grep snippets above) contains call text and code only. No credential value appeared.
- Redactions: **0**.

### Corrections and procedural notes (T20)
- **C-22 (correction to T19, record section T19 item on `invokeAsync`):** the `invokeAsync`-to-`WSForm.invoke` call is present in the saved `app.js` copy. The open question is the `WSForm.invoke` implementation and contract in `UserControl.js`, not the `invokeAsync` link.
- The T20 copy of `app.js` text is taken from the T8 flattened find text. The call text is text-equivalent, not byte-exact; the T8 screenshot shows real line breaks only at the file tail.
- One read error: a targeted snapshot returned `Ref e341 not found` after the corrected selection (no action error). Recovered with one fresh untargeted snapshot, as the brief allows.
- The file `evidence/EXP-128/assets/_app_scripts_UserControl.js.txt` was **not** created. No copy exists for this asset.

### Screenshots (T20)
- `evidence/EXP-128/t20-01-global-objects-tree-top-level.png`: Global Objects dialog, Web Assets top-level tree (`$app` … `custom`), Properties pane empty. Proves the dialog and the top-level tree (ScopeType User in the status bar). Does not show any file content. **Shows the status-bar account name unredacted.**
- `evidence/EXP-128/t20-02-usercontrol-js-selected-properties-check.png`: `UserControl.js` highlighted under `$app/scripts`; Properties pane empty; Save icon greyed; status bar `ScopeType: User`. Proves the selection and the blank pane. Does not show content. **Account name unredacted.**
- `evidence/EXP-128/t20-03-usercontrol-js-after-corrected-reselect.png`: the same state after the corrected selection. Proves the blank pane persisted. **Account name unredacted.**
- `evidence/EXP-128/t20-04-designer-final-state-after-cancel.png`: Designer after Cancel: dialog closed, blank canvas (no Form open), Save icon greyed, `ScopeType: User`, Properties pane empty. Proves the final state. Does not prove the absence of unsaved changes in any Form (none was open). **Account name unredacted.**
- Privacy: the four T20 screenshots, like the earlier `t8-01` and `t8-02`, show the status-bar account name. They need privacy review before any external sharing (D-7 is extended to these four).

### Action audit (T20, exact; this task only)
**Browser actions attempted: 9. Returned ok: 9. Errors: 0.**
- Tab select: 1 (index 0).
- Clicks by reference: 6 (`e5` Edit menu; `e335` Web User Control Assets; `e463` UserControl.js; `e458` scripts folder; `e463` corrected re-select; `e436` Cancel).
- Coordinate clicks: 2 (`(582,290)` `$app` arrow; `(603,382)` `scripts` arrow). Each is one coordinate click on a list arrow that has no reference.
- Typing: 0. Key presses: 0. Mouse wheel: 0. Drags: 0. Hover: 0. Dialog handling: 0. Navigation: 0. Refresh: 0.
- Not used: OK, Apply, Save, Ctrl+S, New, Import, Delete, Copy (asset dialog), Undo/Redo, Regenerate Form, Delete Form Definition, any Form, any script editor, the global Script entry, the MockLogin IDO, the Web Client tab.

**Browser read calls attempted: 18. Returned ok: 17. Errors: 1.**
- Tab list: 1.
- Snapshots: 13 (12 ok; 1 error: `Ref e341 not found`).
- Screenshots: 4 (`t20-01` to `t20-04`; all ok; 4 PNG files written).

**Cumulative (controller baseline + T20; the worker tally for T20 is not a controller row):**
- Controller baseline through T19 (H1 to H17 audit, reconciled in T19): 317 actions attempted (298 ok; 19 errors); 443 reads (432 ok; 11 read errors); H18 and H19 recorded 0 actions.
- With T20: **326 actions attempted (307 ok; 19 errors)**; **461 reads attempted (449 ok; 12 errors)**. The controller will reconcile its own T20 rows; these sums are the worker's tally.

### Worker-written files (T20)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; a T20 pointer under the T8 blocked subsection; this T20 section).
- **Created (tool-written PNG):** `evidence/EXP-128/t20-01-global-objects-tree-top-level.png`; `evidence/EXP-128/t20-02-usercontrol-js-selected-properties-check.png`; `evidence/EXP-128/t20-03-usercontrol-js-after-corrected-reselect.png`; `evidence/EXP-128/t20-04-designer-final-state-after-cancel.png`.
- **Not created:** `evidence/EXP-128/assets/_app_scripts_UserControl.js.txt` (no text read).
- **Not changed:** any copy, controller audit file, the T19 reconciliation, or any other repository file.
- Redactions in T20 files: 0 (no text copied).

### Final browser state (end of T20)
- Designer tab (tab 0) selected and current. Web Client tab (tab 1) not selected.
- Designer: no Form open (blank canvas); no dialog open (Global Objects closed with Cancel); Save disabled; status bar `ScopeType: User`; Properties pane empty; no unsaved change observed (none was made); no list, editor or menu left open.
- Console: Designer **2 errors / 0 warnings**, unchanged from the task-start baseline. No rise, no server-event error, no sign-in or session expiry.

### Acceptance (T20 view)
- AC-1: passed (qualified; unchanged).
- AC-2: pending. Unchanged: no new Form data in T20.
- AC-3: pending. `UserControl.js` is still **unread** (blocker above). The invokeAsync → `WSForm.invoke` call is now source-visible in `app.js`. The MockLogin IDO and the global Script entry remain uninspected (outside T20).
- AC-4: pending. The bridge mapping for `WSForm.invoke` is still partly unresolved (above).
- AC-5: T20 scope satisfied (nothing saved or created; dialogs closed with Cancel; no credential copied; User scope; no task-boundary overrun). The experiment as a whole remains pending.

### Answers to brief step 23
- **Was `UserControl.js` read?** No. Blocked at the Properties pane after one corrected selection. No copy exists.
- **Is the invokeAsync → `WSForm.invoke` relationship source-verified?** Partly. It is verified inside `app.js` (the function body calls `WSForm.invoke`). The `WSForm.invoke` implementation and its contract are not verified (they are in `UserControl.js`).
- **Which acceptance evidence changed?** AC-3 and AC-4 gained a source-level call comparison (above). No acceptance status changed to passed.
- **Exact final Designer state:** see "Final browser state (end of T20)".

### Operator decision needed (new)
- **D-13:** the `UserControl.js` Properties pane is blank in this environment (T8 and T20). Options: (a) the operator checks the asset's Properties by hand (read-only) and reports what it shows; (b) a new bounded authorization for one further attempt with a different route; (c) accept the gap and mark AC-3 and AC-4 partial. The worker recommends (a), since it is the cheapest way to settle the blocker.

---

## T21 - Designer global Script entry (Edit > Script): read-only identification and name check (no source read)

Task boundary (operator): inspect only the global Script interface reachable from Edit > Script, and relevant script definitions. Not inspected: the MockLogin IDO definition, `UserControl.js` (no retry). No edit, Save, add, copy, delete, compile or run.

### Gate (T21)
- Sources: AGENTS.md read in full (240 lines, repository file). This record's T8, T12, T19 and T20 parts read; `evidence/EXP-128/t19-audit-reconciliation.md` read in full; `docs/mongoose/guides/user-control.md`, `scripts.md` lines 1 to 130, `variables.md` and `recipes/session/session-expiry-and-stale-designer.md` read (pre-browser reads of the brief).
- Tabs: listed once before the first selection. Tab 0 = Designer (`designer/Default.aspx`). Tab 1 = Web Client (`favoriteContext=MockLoginPortal`). Tab 0 selected successfully (one select). **Tab 1 was not selected; its console baseline was not taken** (no action on it).
- Designer at task start: blank canvas, **no Form open**, **no dialog**, Save disabled, status bar `ScopeType: User`. Designer console **2 errors / 0 warnings** (baseline). Session usable: no sign-in page, no session-expiry modal, no logout card, no server-event error.
- Account: the status bar shows the signed-in account name; it is written here as `<signed-in user>`.

### Route and interface (observed)
1. Edit menu opened from its menu-bar button (one click). Entries, in order: Undo, Redo, Copy, Cut, Paste, Background Color, Component Class, Image, Property Class Extension, **Script**, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition (17 entries; same as T20). Screenshot `t21-01`.
2. Clicked **Script** (ref `e317`). The dialog that opened is titled **"Global Objects"**. Its left pane is headed **"Scripts"** (a filter box, a list with a column header `name`, and three buttons at the bottom of the list: add, copy and delete icons; **none was clicked**). Its right pane is headed **"Properties"** (empty; no script selected). Bottom buttons: OK, Cancel, Help. Screenshot `t21-02`.
3. The Scripts pane lists global objects by name only. It shows no object type and no source. The Web User Control Assets dialog (T20) opened the same "Global Objects" title with a tree; this Script route shows a flat name list.
4. Filter box: **not typed in** (the brief permits typing only in the Select Form and IDO filters). The list was read by view-only mouse wheel steps.

### Script names observed (names only)
- **131 names captured** (48 + 49 + 34 in three windows). Full list with segment boundaries: `evidence/EXP-128/t21-global-script-names-observed.txt`.
- First name `AccessAs`; last rendered name `WBSearchSourceLOV`. The last wheel step did not move the rendered window, so the list end is taken as `WBSearchSourceLOV`.
- **Coverage gap:** the rows between `GetChartTypeByChartStyle` and `GetDataLakeObjects` were skipped by the wheel steps and were not captured. The exact total is therefore not established (at least 131).
- Name families visible: `Check...`, `Validate...`, `Set...`, `Get...`, `FB_Get...` (form-builder helpers), `WB...LOV` (lookup helpers), `Encrypt...`, `Password...`, `ObjectName...`. These look like framework helper or validator objects. Their type and source were **not** verified.
- **Checks on the captured rows:** no name containing `Mock` or `mocklogin`; no `MockLoginPortal`, `MockInventory`, `MockInventoryDashboard` or `MockLoginIDO`; no `UserControl` or `WSForm`; no name starting with X, Y or Z.

### Result of the name check
- **No global script whose name relates to the Mock Forms, the Mock IDO or the user-control bridge is visible** in the captured rows. Relevance is judged from names only, so this is an observation about names, not about source. No entry was opened, because none is related by name (brief step 10).
- No `global-script.cs.txt` was written, because no global-script source was read (brief step 8).
- `$app/scripts/UserControl.js` is a **Web User Control asset** (Edit > Web User Control Assets), not an entry in this list. Its absence here is expected and is not evidence about it.

### Relationship to earlier findings (brief steps 14 to 18)
- The Form Script methods `ProcessLogin`, `ShowMongooseAlert`, `LoadMockLoginJson` and `LoadInventoryFromIDO` remain classified as **Form Scripts** (T3, T5, T6, T17). Nothing in T21 classifies them as global scripts.
- The `invokeAsync` → `WSForm.invoke` relationship (T20, C-22) is unchanged: it is visible in the `app.js` copy. The `WSForm.invoke` implementation is in `UserControl.js`, which T21 did not read.
- The dashboard relationships (`LoadInventoryFromIDO`, `vInventoryJson`, `WSForm.getVarValue`, `MG.onReady`) are unchanged. Nothing was executed.
- **No login-to-dashboard navigation path** was established. The global-object list shows no entry that links the login Form to the dashboard, so the T12 statement (Q-3) stands.

### Effect on the architecture synthesis (T12 section 2, as corrected in T19)
- **No change to the architecture description.** The T21 result narrows Q-14 (global Script entry): the interface is now identified and its names were checked; no Mock-related or bridge-related global script was found by name.
- The remaining sources of `WSForm.invoke`, `getVarValue` and `MG.onReady` behaviour are the asset `UserControl.js` (blocked) and the runtime (not observed).

### Source copies
- **None written.** No script source was opened or read, so no `.cs.txt` file was created (brief step 8: no empty source-copy file).

### Screenshots (T21)
- `evidence/EXP-128/t21-01-designer-edit-menu-open-script-entry.png`: Edit menu open with 17 entries; the **Script** entry is visible; the status bar shows `ScopeType: User` and the account name (**unredacted**; privacy review before sharing). Proves the menu entries; does not show the dialog.
- `evidence/EXP-128/t21-02-global-script-dialog-open-top.png`: "Global Objects" dialog with the Scripts pane (first 17 names: `AccessAs` to `CopyCompletedMarkComponentsValid`), the empty Properties pane and OK/Cancel/Help. Proves the dialog title, pane headings and the list start. Does not show the rest of the list (captured through the snapshot text). **Account name unredacted.**
- `evidence/EXP-128/t21-03-designer-after-global-script-dialog-cancel.png`: Designer after Cancel: blank canvas, no dialog, Save icon greyed, `ScopeType: User`. Proves the closed state. **Account name unredacted.**
- Privacy: all three T21 screenshots show the account name in the status bar. D-7 is extended to them.

### Console and state checks (T21)
- Designer console: **2 errors / 0 warnings** at the task start and after every action in T21 (the outputs of the three wheel steps carry no console line; the count after wheel steps 1 and 2 was read from the following snapshots, which showed 2 / 0; after wheel step 3 the count was read from the untargeted snapshot taken before Cancel, which showed 2 / 0). No rise.
- Web Client console: not read (tab not selected in T21).
- No server-event error, no sign-in or session expiry, no unsaved change, no accidental change.

### Action audit (T21, exact; this task only)
**Browser actions attempted: 8. Returned ok: 8. Errors: 0.**
- Tab select: 1 (index 0).
- Clicks by reference: 3 (`e5` Edit menu; `e317` Script; `e646` Cancel of the Global Objects dialog).
- Hover: 1 (`e359`, the name grid, before the wheel steps).
- Mouse wheel: 3 (deltaY 1500, 3000, 1000; view only).
- Typing: 0. Key presses: 0. Drags: 0. Dialog handling: 0. Navigation: 0. Refresh: 0.
- Not clicked: the Scripts pane add, copy and delete buttons; OK, Apply, Save; the Properties pane; any script row; the filter box; Web User Control Assets; any Form.

**Browser read calls attempted: 13. Returned ok: 13. Errors: 0.**
- Tab list: 1 (before the first selection).
- Snapshots: 6 (4 untargeted; 2 targeted at `e359`).
- Finds: 3 (a regex name check; `Global Objects` absent after Cancel; `Save` disabled after Cancel).
- Screenshots: 3 (`t21-01`, `t21-02`, `t21-03`).
- No "Ref not found" in T21. Every click used a reference from a snapshot taken in T21 (`e5`, `e317` from the untargeted snapshots; `e646` from the untargeted snapshot taken immediately before Cancel).

**Cumulative (worker tally; controller rows not yet reconciled for T20 and T21):**
- Through T20 (worker tally, as recorded in the T20 section): 326 actions attempted (307 ok; 19 errors); 461 reads attempted (449 ok; 12 errors).
- With T21: **334 actions attempted (315 ok; 19 errors)**; **474 reads attempted (462 ok; 12 errors)**.
- The controller baseline through T19 (317 / 298 / 19; reads 443 / 432 / 11) is unchanged.

### Worker-written files (T21)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this T21 section).
- **Created (text):** `evidence/EXP-128/t21-global-script-names-observed.txt` (name list; no source; no credential; 0 redactions).
- **Created (tool-written PNG):** `evidence/EXP-128/t21-01-designer-edit-menu-open-script-entry.png`; `evidence/EXP-128/t21-02-global-script-dialog-open-top.png`; `evidence/EXP-128/t21-03-designer-after-global-script-dialog-cancel.png`.
- **Not created:** `evidence/EXP-128/global-script.cs.txt` (no source read); `evidence/EXP-128/assets/_app_scripts_UserControl.js.txt` (still not read).
- **Redactions in T21 files: 0** (no credential value appears in any T21 file; the account name appears only in the screenshots and is written as `<signed-in user>` in text).

### Acceptance (T21 view)
- **AC-1:** unchanged (passed, qualified).
- **AC-2:** the global Script item of the T3 requirement is narrowed: the interface is identified, its names were checked, and no Mock-related global script is visible. The item is answered with "no relevant entry found by name; no source read". AC-2 overall remains pending (T19 list: MockLoginPortal collection values blank; MockInventory Options and filter unread; Dashboard global view partial).
- **AC-3:** unchanged. `UserControl.js` remains unread; the MockLogin IDO definition is not inspected.
- **AC-4:** unchanged. No runtime call was observed; no candidate was tested.
- **AC-5:** T21 scope satisfied (nothing saved or created; the dialog closed with Cancel; no credential copied; User scope; no task-boundary overrun). The experiment as a whole remains not accepted.

### Final browser state (end of T21)
- Designer tab (tab 0) selected and current. Web Client tab (tab 1) not selected and not touched.
- Designer: blank canvas, **no Form open**, **no dialog open** (find for "Global Objects": no matches), **Save disabled** (find), status bar `ScopeType: User`, no list, menu or editor open, no unsaved change.
- Console: Designer **2 errors / 0 warnings**, unchanged from the baseline.

### Operator notes (T21)
- **Q-14 is narrowed, not closed.** The Script list is identified; relevance was judged from names only. If the operator wants source-level confirmation that no Mock-related global script exists, a separate bounded read of one or more named entries would be needed. T21 did not open any entry.
- The coverage gap between `GetChartTypeByChartStyle` and `GetDataLakeObjects` is uncaptured. A Mock-named entry would sort in the `M` range, which was captured in full, so the gap does not affect the Mock-name check; it does affect the total count.
- `UserControl.js` (D-13) and the MockLogin IDO (D-2) remain open decisions.
- Next step: stop at the T21 boundary. No further browser action is taken in T21.

---

## T22 - MockLogin IDO metadata (read-only): definition NOT located; Form-side collection view read

Task boundary (operator): read-only metadata of the IDO `MockLogin` only. Not done: any `UserControl.js` retry, reopening the global Script inventory, login testing, runtime Form opening, Filter In Place, any typing, any create or edit.

### Gate (T22)
- Sources: AGENTS.md read in full (240 lines, repository file). This record's header and T1 Select Form section, T10, T12 (headline), T19, T20 and T21 read. `evidence/EXP-128/MockLoginIDO-metadata.txt` read in full. The MockLoginPortal Form Script copy was searched for `LoadCollection`, `IDOClient` and the property strings (lines 35 to 137). The four docs guides were not re-read (continuation rule).
- Tabs: listed once before the first selection. Tab 0 = Designer (`designer/Default.aspx`, current). Tab 1 = Web Client (`favoriteContext=MockLoginPortal`). Tab 0 selected (ok). **Tab 1 was not selected; its console baseline was not taken; it was not touched.**
- Designer at task start: blank canvas, **no Form open**, **no dialog**, **Save disabled**, status bar `ScopeType: User`, console **2 errors / 0 warnings** (baseline).
- Session usable: no sign-in page, no session-expiry modal, no logout card, no server-event error.
- Account: the status bar shows `ScopeType: User` with the signed-in account name, written here as `<signed-in user>`. No stored value exists in the record to compare the name against; the scope check is the User scope.

### Route taken (observed; every step read back)
1. **Form menu** (button `e3`). The recent-forms list shows: Definition, Sign Out, MockLoginPortal, MockInventoryDashboard, MockInventory, IDOs, MockLoginIDO, MockLogin, Sql Tables, Runtime Builder Selection, TestMongoose, IDO Projects. `MockLogin` appears here as a Form name (also in the T1 Select Form list), not as an IDO; it was **not** opened.
2. **IDOs** (recent entry; `MGForm=IdoCollections`, tab `IDOs`). Designer canvas of the system Form `IdoCollections` (caption `fIDOs`, Form Type Normal, Is Master True). The IDO grid shows its five column headers (IDO Name, Description, Locked By, Revision Date, Revision Num) and **zero rows**. The IDO Name criteria field is empty. Save disabled. Screenshot `t22-01`. Closed with its Form-tab close control (no prompt).
3. **One corrective navigation** (the single one the brief allows): **IDO Projects** (recent entry; `MGForm=IdoProjects`, caption `fIDOProjects`). Its grid shows three column headers (Project Name, Description, Access As) and **zero rows**. Save disabled. Screenshot `t22-02`. Closed with its Form-tab close control (no prompt).
4. **MockLoginIDO** (recent entry; `MGForm=MockLoginIDO`). Opened the Details panel (bottom), selected its Collections tab (already active), used the tree's `Expand` once, hovered the tree and wheeled it one step (view only), then selected the node `Primary Collection: MockLogin` (a selection; no value changed) to read its General properties. The canvas preview grid shows one row with ID `3`; the Username, Password, Role and Store cells are blank in the accessibility text and in `t22-03`. The runtime data grid was **not** opened and no login record was read. Screenshot `t22-03`. Closed with its Form-tab close control (no prompt; Save disabled in the last snapshot).

### Is the IDO MockLogin located? No (blocker recorded)
- **Not located, not read.** The only IDO lists in the Designer (IdoCollections, IdoProjects) show headers and no rows. Those Designer canvases are design-time layouts; their empty grids are **not** evidence that MockLogin or any other IDO is absent (the brief's step 8 caution). Whether a typed criteria would populate a Designer canvas grid is **not established**.
- A reliable read of the IDO definition needs an IDO-name criteria typed into the IDO list (the Designer IdoCollections `IDO Name` criteria, or the Web Client runtime IDOs Filter In Place, the T10 route). Both are outside this task's authorization (steps 9 and 16). **Stopped here.**
- Not read: IDO project, extension class or custom assembly name, base table beyond the collection's text, property data types, property classes and bindings, key properties, IDO methods with parameters and types, data rules, filters, and any IDO-level relationship.

### The three names (step 11): kept apart
- **Form `MockLoginIDO`** (Designer Form, Form Type Normal, Is Master True). Its primary collection is the IDO named `MockLogin`.
- **IDO `MockLogin`** (the collection name; also the name passed to `IDOClient.LoadCollection` in the login Form Script). Its existence as an IDO is **not** established by an interface; the name match is source-level only.
- **IDO `MockLoginIDO`**: existence **not established**. The earlier brief typed `MockLoginIDO` as the IDO name, but that is the Form's name. The IDO filter for any future read should use `MockLogin`.
- Form `MockLogin` (in the Select Form list): not opened; its relation to IDO `MockLogin` is unknown.

### Form-side collection view of MockLogin (observed; names only; Designer Details > Collections)
- Collection: `MockLogin`. Base Table and Alias: "The primary table and its alias for this IDO is MockLogin mock_login".
- Collection Name, Custom Load Method, Read Mode and Options: value cells with **no text**; Method Parameters: an "Open Edit Property Dialog" button with no text. Read as "no value displayed", **not** confirmed as empty.
- Property names in the collection tree: **36**, the same set as T10: `_ItemId`, `_ItemWarnings`, `CreateDate`, `CreatedBy`, `ID`, `InWorkflow`, `NoteExistsFlag`, `Password`, `RecordDate`, `Role`, `RowPointer`, `Store`, `UDFDateTime1`–`6`, `UDFDecimal1`–`6`, `UDFInteger1`–`6`, `UDFLongText1`–`2`, `UDFMediumText1`–`4`.
- **`Username` is not in this list.** After one view-only wheel step the tree still ends at `UDFMediumText4`. The list is alphabetical, so an entry named `Username` would sort after the UDF names and would appear there. The grid column `UsernameGridCol` binds `object.Username` and the Designer grid header reads `* Username`. This conflict is **unresolved**: the tree may not list every IDO property, or the grid binding may not match the IDO. Not inferred either way.
- Property types, classes, bindings and key flags are not shown in this tree and were not read.

### Source correlation (steps 17 to 21; source copies, not runtime)
- MockLoginPortal Form Script copy: `ProcessLogin` sets the property string `"Username, Password, Store, Role"` (line 35) and calls `IDOClient.LoadCollection("MockLogin", …)` (line 38). `LoadMockLoginJson` sets `idoName = "MockLogin"` (line 107), the same property string (line 108) and calls `IDOClient.LoadCollection` (line 112). Both methods name the same IDO.
- **Metadata result:** the Form-side view confirms that `MockLogin` is the primary collection name and that `Password`, `Role` and `Store` are listed property names of that collection. **`Username` is not confirmed** by the metadata (see above). This confirms a name match only; it does **not** confirm the IDO exists as such, that the call succeeds, or any runtime row.
- No primary key, auto-numbering, table structure or password storage scheme is inferred. `ID` is only a property name here.
- **Security-relevant (source level only; no runtime test; the stored value was not read):** the login Form Script reads the stored `Password` value (copy line 59) and writes it into the `vMockLoginJson` Form variable as a JSON field (copy lines 65 and 71), and compares it with the entered value (copy line 73). The T8 and T12 records describe the success-message content; those lines were not re-read in T22. The metadata shows `Password` as a property name and as a grid column; whether it is stored in clear text or hashed is **not visible** here. No access-control behaviour was observed. Concern S-1 to S-3 is **preserved**, not confirmed.
- **Login-to-dashboard link:** nothing in this task's metadata links MockLogin to the inventory IDO (`MockInventory`, T4 record). T22 does not assert a navigation relationship.

### Acceptance (T22 view)
- **AC-1:** unchanged (passed, qualified).
- **AC-2:** unchanged for the three Forms. The MockLoginIDO Form was re-read (Form properties, the collection, the Components grid) and it matches T10.
- **AC-3:** advanced in part. The collection name, base table alias and 36 property names of MockLogin are recorded from the Form-side view. The IDO definition (project, property types, methods, keys) is **not** read; `Username` is unresolved; `UserControl.js` is still unread (T20). **Pending.**
- **AC-4:** unchanged. No runtime call was observed.
- **AC-5:** T22 scope satisfied (nothing saved or created; every Form closed with its tab close control, no save prompt; no typing; no credential value copied; User scope; no task-boundary overrun). The experiment as a whole is **not accepted**.

### Authorization needed to continue (operator decision; not performed)
- **Option 1 (recommended):** one bounded read in the Web Client runtime IDOs Form, using the T10 route with the correct criteria: one Filter In Place click, the IDO name criteria typed as **`MockLogin`** (exact), F4, then the IDO row's Tables, Properties and Methods tabs (view only; no runtime data grid, no login record). Optionally a second criteria `MockLoginIDO` only to test whether an IDO of that name exists. This needs explicit approval for Filter In Place (a metadata query), because the brief prohibits it without authorization.
- **Option 2:** a typed `MockLogin` in the Designer's IdoCollections `IDO Name` criteria (view only, no Save, no Check Out). Whether the Designer canvas loads rows for typed criteria is **not established**; the Check Out and New IDO buttons are beside the criteria and would need care.
- **Option 3:** accept the gap. AC-3 stays partial, and the Designer evidence in this section stands.
- Separately, the Form named `MockLogin` (not an IDO) could be inspected if the operator wants to know whether it is bound to IDO `MockLogin`. Not requested; not opened.

### Action audit (T22, exact; this task only)
**Browser actions attempted: 15. Returned ok: 15. Errors: 0.**
- Tab select: 1 (index 0).
- Clicks by reference: 12 — Form menu `e3` ×3; IDOs `e306`; closable IDOs tab `e332`; IDO Projects `e324`; closable IDO Projects tab `e826`; MockLoginIDO `e1030`; Details panel title `e1104`; Collections `Expand` `e1242`; `Primary Collection: MockLogin` node `e1253`; closable MockLoginIDO tab `e1041`.
- Hover: 1 (`e1248`, the collections tree). Mouse wheel: 1 (deltaY 600, view only).
- Typing: 0. Key presses: 0. Drags: 0. Dialog handling: 0. Navigation: 0. Refresh: 0. Save, OK, Apply: 0. Filter In Place: 0. Check Out, Undo Check Out, New IDO, Compare: 0.
- Every click used a reference from the most recent snapshot taken in T22. No "Ref not found" occurred. No coordinate click.

**Browser read calls attempted: 6. Returned ok: 6. Errors: 0.**
- Tab list: 1. Snapshots: 2 (the baseline snapshot; one after the wheel step). Screenshots: 3 (`t22-01`, `t22-02`, `t22-03`).
- Repository reads (AGENTS.md, this record, the copies) are not browser reads and are not counted here.

**Cumulative (worker tally; the controller will reconcile its own T22 rows):**
- Controller-reconciled baseline through T21 (as preserved in the brief): 334 actions attempted (315 ok; 19 errors); 474 reads attempted (462 ok; 12 errors).
- With T22: **349 actions attempted (330 ok; 19 errors)**; **480 reads attempted (468 ok; 12 errors)**.

### Console and state checks (T22)
- Designer console: **2 errors / 0 warnings** at the start and after every action in T22. The outputs of the tab select, the wheel step and the screenshots carry no console line; their counts were read from the next output (snapshot or action), which showed 2 / 0.
- Web Client console: not read (tab not selected).
- No server-event error, no sign-in, no session expiry, no unsaved change, no accidental change. Save was disabled in every snapshot taken after an opening or closing step.

### Worker-written files (T22)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this T22 section).
- **Modified:** `evidence/EXP-128/MockLoginIDO-metadata.txt` (a T22 addendum at the end; observed Form-side view only).
- **Created (tool-written PNG):** `evidence/EXP-128/t22-01-idocollections-grid-state-before-action.png`; `evidence/EXP-128/t22-02-idoprojects-grid-state.png`; `evidence/EXP-128/t22-03-mockloginido-collection-node-properties.png`.
- **Tool-written, not worker-written (for review):** 13 snapshot files in `evidence/playwright/` created by the browser tool (`page-2026-10-25T07-25-24-949Z.yml`, `…07-25-44-721Z`, `…07-26-13-087Z`, `…07-26-19-480Z`, `…07-26-23-454Z`, `…07-26-32-607Z`, `…07-26-49-813Z`, `…07-26-53-635Z`, `…07-26-58-260Z`, `…07-27-06-320Z`, `…07-27-17-243Z`, `…07-27-36-174Z`, `…07-27-51-082Z`) and `evidence/playwright/console-2026-10-25T07-25-15-079Z.log` (written by the tab-list call; **not read** by the worker). The snapshot files contain the page URL with a session identifier fragment and the account placeholder; they should be reviewed before any sharing. No value from them was copied into the record.
- **Not created:** any IDO metadata copy (the IDO definition was not read); no global-script copy; no `UserControl.js` copy.
- **Redactions in T22 text:** 1 placeholder (the account name as `<signed-in user>`); **0 credential values** present or copied.

### Screenshots (T22)
- `evidence/EXP-128/t22-01-idocollections-grid-state-before-action.png`: `IdoCollections` canvas (tab `IDOs`), IDO grid headers only, IDO Name criteria empty, Properties Name `IdoCollections`, Caption `fIDOs`, Save greyed, status bar `ScopeType: User`. Proves the empty design-time grid at this time. Does **not** prove that no IDO exists. **Account name shown unredacted** in the status bar.
- `evidence/EXP-128/t22-02-idoprojects-grid-state.png`: `IdoProjects` canvas (tab `IDO Projects`), grid headers Project Name, Description, Access As, no rows, Save greyed, `ScopeType: User`. Proves the empty design-time grid. Does **not** prove that no project exists. **Account name unredacted.**
- `evidence/EXP-128/t22-03-mockloginido-collection-node-properties.png`: `MockLoginIDO` canvas with its preview grid (ID `3`, other cells blank); Details > Collections with `Primary Collection: MockLogin` selected; General properties Collection `MockLogin`, Base Table and Alias text, Collection Name and Custom Load Method blank. Proves the Form-side values shown. Does **not** show the 36-name list in full, the IDO definition or any property type. **Account name unredacted.**
- Privacy: all three T22 screenshots show the status-bar account name. D-7 is extended to them.

### Final browser state (end of T22)
- Designer tab (tab 0) selected and current. Web Client tab (tab 1) not selected and not touched.
- Designer: blank canvas, **no Form open** (the three Forms opened in T22 were closed with their tab close controls, with no save prompt), **no dialog, menu, editor or list open**, **Save disabled** (last snapshot `page-2026-10-25T07-27-51-082Z.yml`), status bar `ScopeType: User`, no unsaved change.
- Console: Designer **2 errors / 0 warnings**, unchanged from the baseline.

### Open questions (T22)
1. Does an IDO named `MockLogin` exist, and what are its project, base table, property types, classes, bindings, keys and methods? (Needs Option 1 or 2 above.)
2. Is `Username` an IDO property of MockLogin? The Form's collection tree does not list it, but the grid column binds it. (Needs the IDO definition.)
3. Does an IDO named `MockLoginIDO` exist? (Not established; test only with explicit authorization.)
4. Is the Form named `MockLogin` bound to IDO `MockLogin`? (Not opened; not requested.)
5. Do the blank collection values (Collection Name, Custom Load Method, Method Parameters, Read Mode, Options) mean "not set", or is the Designer rendering them without text? (Not confirmed.)
6. Carried forward: `UserControl.js` (D-13), global Script source (Q-14, narrowed in T21), the MockLoginPortal copy gap at lines 78 to 97 (accepted qualification), the Git review (operator).

### Acceptance and status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is not declared. The T22 boundary is reached: the next step (Option 1, 2 or 3) needs operator authorization, and nothing further was performed.

---

## T23 - MockLogin IDO metadata lookup (authorized; Filter In Place): IDO NOT located (2026-10-25)

Harness header: `task=T23`, bounded instruction "authorized read-only MockLogin IDO metadata lookup". The operator authorization (typing `MockLogin` and running Filter In Place or an exact-name metadata criterion in the system IDO metadata Forms) was used only up to the point below. The IDO definition was not reached.

### Gate (T23)
- Sources: AGENTS.md read in full (240 lines). `evidence/EXP-128/MockLoginIDO-metadata.txt` read in full. `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` read in full. The T10, T19 and T22 sections of this record were located by Grep and read as excerpts, not in full. The docs guides were not re-read (continuation rule).
- Tabs (listed before the first selection): tab 0 = Infor Mongoose Designer (`WSWebClient/designer`); tab 1 = the Infor OS portal page hosting the Mongoose Web Client, `favoriteContext=MockLoginPortal`. The MockLoginPortal runtime Form was already open in tab 1 when the task began (not opened by T23 and not touched).
- Designer baseline: blank canvas, no Form, no dialog, Save disabled, `ScopeType: User`, console **2 errors / 0 warnings**.
- Web Client baseline (first reading in this task; T22 took none): console **3 errors / 10 warnings**.
- No session expiry, sign-in page, logout card or server-event error was seen at any point.

### Phase 2 - the lookup (what was done)
1. **Designer route (not usable for a filter).** Form menu recent entry `IDOs` opened `IdoCollections` in the Designer. Its IDO Name, Project Name and Caption boxes are greyed design-time components of the Form layout (`t23-01`), not a runtime criteria field. Nothing was typed there. The tab was closed with its close control (no prompt; Save disabled).
2. **Web Client route.** Runtime Form menu recent entry `IDOs` opened the runtime IDO list (tab "IDOs"). Grid columns: IDO Name, Description, Locked By, Revision Date, Revision Num. The list shows many IDOs (rows 1 to 29 visible). Row 1 was selected automatically (`ABDataServices`), and the detail fields showed that IDO's values.
3. **Filter in Place clicked once.** A targeted snapshot then read the toolbar button as `FiP [active]`, Save disabled. The IDO Name field still held `ABDataServices`, and the list was not filtered. A later fresh snapshot read the FiP button without `[active]`, the field still held `ABDataServices`, and the list was still unfiltered.
4. **Editing keys, no effect.** Control+A and then Backspace were pressed while the IDO Name field had focus. The field still read `ABDataServices` afterwards, and Save stayed disabled. Neither key press changed the value that was read back.
5. **Not done, deliberately.** `MockLogin` was **not typed** and **F4 was not pressed**. The criteria state could not be confirmed: the FiP state changed between two reads, and the fields still showed one record's values. Typing into those fields could edit the real `ABDataServices` record in memory (unsaved). The brief's stop rule for ambiguity applied.
6. The runtime IDOs tab was closed with its close control (`Close Panel IDOs`). No prompt appeared; Save was disabled.

### Result
- **MockLogin IDO: NOT located and NOT inspected.** No project, assembly, base table, property, property class, key, method or method signature for `MockLogin` was observed. This does **not** establish that `MockLogin` is absent from the system.
- The following are **unresolved** (not observed): whether `ID`, `Username`, `Password`, `Store` and `Role` are defined on the IDO; the key definitions; the method list; the table-column bindings.
- The `Username` discrepancy from T22 is **not resolved** (no IDO definition was read).
- No MockLogin record was opened, previewed or read. No credential value was read.
- Incidental: `t23-02` and the snapshot text show the auto-selected, unrelated IDO `ABDataServices` (Project `AppBuilder`, Access As `Core`, one table `ABDataServices`, alias `ds`, primary base, revision 5). It was not requested (the brief excludes unrelated IDOs), was not analysed, and is listed for the operator's boundary review.

### Why the lookup stopped (observed mechanism, unverified meaning)
- In this runtime Form, the FiP toolbar state flipped between two reads, and the IDO Name field kept the selected record's value after the click. The brief expected the criteria field to be usable after one FiP click. This was **not** confirmed.
- Routes ruled out: the Designer `IdoCollections` canvas (design-time only, no filter); a second FiP click (outside the one-click instruction).

### Options for the operator (no choice made by the worker)
- **Option A (recommended):** the operator performs Filter In Place once in the Web Client, observes whether the IDO Name field becomes blank, and reports the MockLogin row, or authorizes a new bounded task whose first gate is a screenshot proving a blank criteria field before any typing.
- **Option B:** a new bounded task with the step order: one FiP click, one targeted snapshot of the IDO Name field, stop if it still shows a value, otherwise type `MockLogin` (after a verified clear), one F4, then Properties and Methods tabs.
- **Option C:** accept the gap and record `MockLogin` as an unresolved Form-side binding.

### Action audit (T23, exact)
- Actions attempted **13**; successful **13**; errors **0**.
  - Tab selections 3 (tab 0, tab 1, tab 0 again).
  - Clicks 8: Designer Form menu, Designer `IDOs` entry, Designer tab close, Web Client Form menu, runtime `IDOs` entry, Filter in Place, IDO Name field, runtime tab close.
  - Key presses 2: Control+A, Backspace (in the IDO Name field; see step 4 above).
  - Typed characters 0. F4 presses 0. Wheel 0. Drags 0. Dialog handling 0. Navigation 0. Refresh 0. Save, OK, Apply or Yes clicks 0. Filter in Place clicks 1. IDO Name criteria text entries 0.
- Browser reads attempted **19**; successful **16**; errors **3**.
  - Tab list 1 (ok). Find 1 (ok). Screenshots 2 (ok). Snapshots 15: 12 ok, 3 errors.
  - Read errors: (a) one untargeted full snapshot returned 75,308 characters and was saved to a file instead of inline (no targeting error); (b) `Ref f1e214 not found` (targeted snapshot); (c) `Ref f1e24 not found` (targeted snapshot).
- Fresh untargeted recovery snapshots after the two "Ref not found" errors: 2 (both at depth 11). The second recovery (after error c) is disclosed as a second recovery in this task.
- Cumulative worker tally (historical baseline through T22 was 349 attempted / 330 ok / 19 errors actions and 480 / 468 / 12 reads, from the brief): **actions 362 attempted (343 ok, 19 errors); reads 499 attempted (484 ok, 15 errors).** Subject to controller reconciliation.

### Console and state checks (T23)
- Designer tab: **2 errors / 0 warnings** at the baseline and after every Designer action that displayed a count. The count did not rise.
- Web Client tab: **3 errors / 10 warnings** at its first reading and after every action that displayed a count (Form menu, runtime IDOs entry, Filter in Place, IDO Name click, runtime close). The outputs of tab selections and the two key presses showed no count; their counts were read from the next output, which showed 3 / 10. The count did not rise.
- No stop rule was triggered.

### Screenshots (T23)
- `evidence/EXP-128/t23-01-idocollections-open-before-filter.png`: Designer `IdoCollections` canvas with a header-only IDO grid, greyed design-time components, Save disabled, status bar `ScopeType: User` with the account name shown **unredacted**. Proves the Designer surface is a design canvas, not a runtime criteria form. Does not prove that no IDO exists.
- `evidence/EXP-128/t23-02-runtime-idos-after-filter-in-place-click.png`: Web Client runtime IDOs Form, tab "IDOs" beside tab "MockLoginPortal"; unfiltered IDO list rows 1 to 29; detail fields of the auto-selected `ABDataServices`; header shows the account name **unredacted**. Proves the record view with no criteria visible in the image. The FiP active state is visible only in the snapshot text, not in this image. Does not prove a criteria state.
- Privacy: both T23 screenshots show the account name. They join D-7 (privacy review of every PNG before external sharing).

### Worker-written files (T23)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this T23 section).
- **Created:** `evidence/EXP-128/t23-01-idocollections-open-before-filter.png`; `evidence/EXP-128/t23-02-runtime-idos-after-filter-in-place-click.png`.
- **Not created or modified:** no `.txt` copy (no IDO definition was inspected); `evidence/EXP-128/MockLoginIDO-metadata.txt` unchanged in T23.
- **Tool-written, not read by the worker:** eight browser snapshot files under `evidence/playwright/` (`page-2026-10-25T08-42-20-859Z.yml`, `08-42-30-192Z`, `08-43-05-042Z`, `08-43-22-648Z`, `08-43-33-051Z`, `08-43-43-080Z`, `08-45-06-041Z`, `08-45-31-827Z`), and one console event log `console-2026-10-25T08-42-10-876Z.log` (not read or inspected). The oversized untargeted snapshot was saved outside the evidence directory, under the session tool-results folder. A Grep attempt on that file was **denied** by the permission layer; it was not read, and no other route was used.
- Note: the snapshot files can contain session-identifier fragments. Review before any sharing (as in T22).

### Credential handling (T23)
- Redactions in the text: 1 placeholder (`<signed-in user>`). Credential values copied: 0. Credential values typed: 0.
- The tool output showed placeholder tokens (`<secret>...</secret>`) for the account and tenant in the URLs; they are not values and were not copied.

### Accidental change (T23)
- None observed. The Designer's Save stayed disabled. The runtime Save stayed disabled after the two editing keys, and the field read back unchanged, so no unsaved change was observed. No record was saved; no record field was typed into.

### Final browser state (end of T23)
- **Tab 0 (Designer), selected:** blank canvas, no Form open, no dialog, menu or editor, Save disabled, `ScopeType: User`, console 2 / 0 (baseline).
- **Tab 1 (Web Client):** only the pre-existing MockLoginPortal tab (operator's favorite, untouched) remains; the IDOs tab was closed; Filter in Place disabled; Save disabled; console 3 / 10 (baseline). Tab 1 was not selected at the end.

### Acceptance (T23 view)
- **AC-1** unchanged: sources read; User scope; Designer clean at the gate; Web Client baseline now recorded.
- **AC-2** unchanged for the three Forms.
- **AC-3** not advanced: the MockLogin IDO was not located; its properties, keys and methods remain unrecorded.
- **AC-4** unchanged.
- **AC-5** met for T23 scope: nothing saved or created; each opened Form closed with its close control and no save prompt; no credential value copied; User scope only. Disclosed exceptions: the two editing keys in the IDO Name field (no change read back), and the incidental view of the unrelated `ABDataServices` IDO in one screenshot and the snapshot text.

### Open questions and carried-forward items (after T23)
1. Does an IDO named `MockLogin` exist, and what are its project, base table, property definitions, keys and methods? (Needs Option A, B or C.)
2. Is `Username` (and `ID`, `Password`, `Store`, `Role`) defined on the IDO? (Needs the IDO definition.)
3. Is the Form `MockLogin` bound to the IDO `MockLogin`? (Not opened; not requested.)
4. Carried forward: `UserControl.js` (D-13); the global Script source (Q-14); the MockLoginPortal copy gap at lines 78 to 97 (accepted qualification); privacy review of every PNG (D-7); Git review (operator).
5. Operator decision: Option A, B or C above.

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is not declared. The T23 boundary is reached: the MockLogin IDO was not located, and no further browser action was taken.

---

## T24 - MockLogin IDO metadata lookup, hard gate: gate stopped before Filter In Place; IDO NOT located (2026-10-25)

Harness header: `task=T24`, bounded instruction "one hard-gated, read-only MockLogin IDO metadata lookup" (operator authorization, with a mandatory screenshot-and-snapshot criteria-state gate before any typing).

### Sources (Phase 1)
- AGENTS.md read in full (240 lines, `C:\AI\mongoose-factory\AGENTS.md`).
- T22 and T23 sections of this record read in full. `evidence/EXP-128/MockLoginIDO-metadata.txt` read in full. `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` read at lines 25 to 124 (ProcessLogin and LoadMockLoginJson, including the `LoadCollection("MockLogin", ...)` calls at lines 38 and 112). The docs guides were not re-read (continuation rule).

### Tabs and baselines (Phase 1)
- Tabs listed before the first selection: tab 0 = Infor Mongoose Designer (`WSWebClient/designer`); tab 1 = the Infor OS portal page hosting the Mongoose Web Client, `favoriteContext=MockLoginPortal`.
- **Web Client baseline (tab 1):** console **3 errors / 10 warnings**. Only the pre-existing MockLoginPortal tab was open. Save and Filter in Place disabled. No dialog.
- **Designer baseline (tab 0):** console **2 errors / 0 warnings**. Blank canvas, no Form open, no dialog, Save disabled, `ScopeType: User`.
- No sign-in page, session-expiry modal, logout card or server-event error was seen at any point.

### Phase 2 (before Filter In Place)
1. Web Client Form menu (one click), then the recent entry `IDOs`. The page opened with `favoriteContext=IdoCollections` and the tab "IDOs": the runtime system IDO metadata Form (IDO Name, Extends, Project Name, Tables/Properties/Methods tabs). It is not the MockLoginIDO application-data Form.
2. Fresh snapshot after the open (`evidence/playwright/page-2026-10-25T08-56-02-180Z.yml`): IDOs tab selected. The IDO Name textbox is `[active]` with no value text in the accessibility tree. The Filter in Place button is enabled and not marked `[active]`. The grid has one row (row number 1) with a blank IDO Name cell. The detail fields are blank.
3. Screenshot `evidence/EXP-128/t24-01-idos-before-filter.png` (the one pre-filter screenshot; viewed). It shows the IDOs tab with a filter-shaped glyph beside its title. The IDO Name box is empty and has the focus outline. The detail fields are white (editable style) and empty. The grid row is blank. New IDO, New Table and related buttons are visible; Check Out and Undo Check Out are visible. The status-bar header shows the account name unredacted (privacy, D-7).
4. Comparison, read-only (`evidence/EXP-128/t23-02-runtime-idos-after-filter-in-place-click.png`, the T23 image): the same Form in T23 showed a populated list (rows 1 to 29), an auto-selected `ABDataServices` with grey read-only detail fields, and no glyph beside the tab title. The T24 pre-click state therefore differed from T23's record view.

### Stop decision (Phase 2, step 10)
- Before any Filter In Place click, the Form showed filter-mode indicators: the glyph on the tab title, editable empty fields and a blank grid. The FiP button was not marked active in the snapshot. The brief's step 10 treats an unexpectedly filter-mode initial state as a stop condition and says not to toggle Filter in Place to resolve an ambiguous state. I applied that rule.
- The meaning of the glyph is **not established** (unverified). It is not documented in this record.
- **Result of the gate:** not evaluated after a click. The pre-filter check failed, so Filter In Place was never clicked (Phase 3 was not entered).
- Closed the IDOs Form with its own tab close control (`Close Panel IDOs`). No save prompt appeared; Save was disabled before the close.

### Not done (deliberately)
- Filter In Place clicks: **0**. `MockLogin` typed: **0**. F4 pressed: **0**. Ctrl+A, Backspace or Delete pressed: **0**. No IDO row selected; no IDO name criteria entered.
- No Properties or Methods tab was opened; no MockLogin record was opened.
- Screenshots `t24-02-idos-after-filter`, `t24-03-mocklogin-ido-properties` and `t24-04-mocklogin-ido-methods` were **not created**, because their steps were not reached.

### Result (T24)
- **Hard criteria-state gate: did not pass** (stopped at the pre-filter check; see the stop decision).
- **MockLogin IDO: NOT located and NOT inspected.** No project, assembly, base table, property, property class, binding, key, method or method signature for `MockLogin` was observed in T24. This does **not** establish that `MockLogin` is absent from the system.
- Not verified in T24: which Properties and Methods metadata exist. Whether `Username`, `ID`, `Password`, `Store` and `Role` are defined on the IDO remains **unresolved** (as in T22 and T23).
- Note: in T24 no IDO row was visible before any click, so the auto-selected unrelated IDO seen in T23 was not present in this view.

### Action audit (T24, exact)
- **Browser actions attempted: 7. Returned ok: 7. Errors: 0.**
  - Tab selections: 4 (Web Client, Designer, Web Client, Designer).
  - Clicks: 3 (Web Client Form menu; `IDOs` recent entry; `Close Panel IDOs`).
  - Typed characters: 0. Key presses: 0. F4: 0. Filter in Place: 0. Ctrl+A, Backspace, Delete: 0. Save, OK, Apply, Yes, No clicks: 0 (no prompt appeared). Wheel: 0. Drags: 0. Dialog handling: 0. Navigation: 0. Refresh: 0. Coordinate clicks: 0.
- **Browser reads attempted: 7. Returned ok: 7. Errors: 0.**
  - Tab list: 1 (before the first selection).
  - Snapshots: 5 (Web Client baseline, inline; Designer baseline, inline; a targeted snapshot of ref `f1e22`, which returned only the account button; the Web Client baseline saved to a file; the Designer final saved to a file).
  - Screenshots: 1 (`t24-01`).
  - Each click also returned its own snapshot file (`page-2026-10-25T08-55-53-950Z.yml`, `page-2026-10-25T08-56-02-180Z.yml`, `page-2026-10-25T08-56-37-129Z.yml`). These are output of the action, not separate reads, and are not counted above.
- **Cumulative** (controller baseline through T23 as stated in the brief: 362 actions attempted, 343 ok, 19 errors; 499 reads attempted, 484 ok, 15 errors): **actions 369 attempted (350 ok, 19 errors); reads 506 attempted (491 ok, 15 errors)**, subject to authoritative controller reconciliation.
- Repository reads (AGENTS.md, this record, the copies, the saved snapshot files and the T23 screenshot) are not browser actions or browser reads and are not counted.
- No "Ref not found", timeout or other tool error occurred in T24. The earlier stale-reference and oversized-snapshot errors in T23 are unchanged and are not repeated here.

### Console and state checks (T24)
- **Web Client (tab 1):** 3 errors / 10 warnings at the baseline, after the Form menu click, after the `IDOs` entry click, and after the close click. No rise.
- **Designer (tab 0):** 2 errors / 0 warnings at the baseline and at the final check. No rise.

### Final browser state (end of T24)
- **Designer (tab 0), selected at the end:** blank canvas, no Form open, Save and Regenerate Form disabled, no dialog, menu or editor, `ScopeType: User`, console 2 / 0. Snapshot `evidence/playwright/t24-designer-final-snapshot.yml`. The Designer was not touched except for tab selection.
- **Web Client (tab 1):** not selected at the end. Only the pre-existing MockLoginPortal tab remains; the IDOs tab was closed; Save and Filter in Place disabled; no dialog; console 3 / 10.
- No unsaved change. No save prompt was answered.

### Screenshots (T24)
- `evidence/EXP-128/t24-01-idos-before-filter.png`: runtime IDOs Form before any Filter In Place click. Proves: the tab identity (IDOs, beside MockLoginPortal), an empty IDO Name field with focus, editable detail fields, a blank grid row, and the glyph beside the tab title. Does **not** prove: the meaning of the glyph, the internal filter state, or the absence of any IDO. The account name is visible unredacted in the header (privacy, D-7).
- Not created: `t24-02-idos-after-filter.png`, `t24-03-mocklogin-ido-properties.png`, `t24-04-mocklogin-ido-methods.png` (steps not reached).

### Worker-written files (T24)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this T24 section).
- **Created:** `evidence/EXP-128/t24-01-idos-before-filter.png`.
- **Saved by the worker as snapshot files (via the filename option):** `evidence/playwright/t24-webclient-baseline-snapshot.yml`; `evidence/playwright/t24-designer-final-snapshot.yml`.
- **Tool-written, not read beyond Grep or Read of the lines shown above:** `evidence/playwright/page-2026-10-25T08-55-53-950Z.yml`, `…08-56-02-180Z.yml` (read at lines 126 to 215), `…08-56-37-129Z.yml`; and `evidence/playwright/console-2026-10-25T08-55-28-965Z.log` (the tab-list event; not read or inspected).
- **Not created:** any `.txt` copy (no IDO definition was inspected); `evidence/EXP-128/MockLoginIDO-metadata.txt` unchanged in T24.
- Note: the snapshot files can contain session-identifier fragments. Review before any sharing (as in T22 and T23).

### Credential handling (T24)
- Redactions in this text: 1 placeholder (`<signed-in user>`). Credential values read: 0. Copied: 0. Typed: 0. The tab URLs and snapshot files show tenant and session placeholders (`<secret>`), which are not values and were not copied.

### Accidental change (T24)
- None observed. Save stayed disabled throughout, no value was typed, and no prompt appeared.

### Acceptance (T24 view)
- **AC-1:** unchanged (passed, qualified). Sources read; session usable; User scope; the Designer clean at the gate; the Web Client baseline recorded.
- **AC-2:** unchanged for the three Forms.
- **AC-3:** not advanced. The MockLogin IDO was not located; its properties, keys and methods remain unrecorded; `Username` remains unresolved.
- **AC-4:** unchanged. No runtime interaction beyond opening and closing.
- **AC-5:** met for T24 scope. Nothing saved or created; the one Form opened was closed with its own close control and no save prompt; no credential value copied; User scope only; the task stopped at the T24 boundary. The unexpected pre-filter state is disclosed here.

### Operator decision (not performed)
The pre-filter gate stopped the lookup. The worker has not chosen a route. Options:
- **A (recommended):** the operator checks in the Web Client, by opening the runtime IDOs Form from its recent entry without clicking anything, whether the IDO Name field is editable and the tab shows the same glyph. If that is the normal opening state, the operator says how to reach record mode first. Then a new bounded task may run the same gate (blank field, screenshot and snapshot agreeing on filter mode) before typing `MockLogin`.
- **B:** accept the gap and record `MockLogin` as an unresolved Form-side binding (the Form-side view and the login script name match only).

### Open questions and carried-forward items (after T24)
1. Does an IDO named `MockLogin` exist, and what are its project, base table, property definitions, keys and methods? (Needs Option A or B above.)
2. Is `Username` (and `ID`, `Password`, `Store`, `Role`) defined on the IDO?
3. What does the filter-shaped glyph on the IDOs tab title mean, and why did the IDOs Form open in that state in T24 but in record view in T23?
4. Carried forward: `UserControl.js` (D-13); the global Script source (Q-14); the MockLoginPortal copy gap at lines 78 to 97 (accepted qualification); privacy review of every PNG and snapshot (D-7); Git review (operator).

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is not declared. The T24 boundary is reached: the hard gate stopped before Filter In Place, the MockLogin IDO was not located, and no further browser action was taken.

---

## T25 - Final status-bar-gated MockLogin IDO lookup: gate FAILED; IDO NOT located (2026-10-25)

Harness header: `task=T25`, bounded instruction "final, status-bar-gated MockLogin IDO metadata lookup" (operator option B; procedure modelled on EXP-127 T7 steps 8–14). The operator stated that this is the last authorized MockLogin IDO lookup attempt.

### Sources (Phase 1)
- AGENTS.md read in full (240 lines) at task start.
- EXP-127 T7 (steps 8–14): located by Grep and read as excerpts (the step table rows 10–14 and the criteria-verification text). The full EXP-127 T7 section was not read.
- T23 and T24 sections of this record: located by Grep (headers and the T24 gate lines). They were **not re-read in full in this task**. The T24 text was written earlier in this session; the T23 facts used here (an unfiltered list with `ABDataServices` auto-selected after Filter in Place; criteria state unconfirmed) come from that record as summarized in the continuation handoff. This is a procedural qualification.
- The T24 screenshot `t24-01` and the T23 screenshot `t23-02` were viewed for comparison in T24 (not re-viewed in T25, except as the T25 screenshots below).

### Tabs and baselines (Phase 1)
- Tabs listed before the first selection: tab 0 = Infor Mongoose Designer (`WSWebClient/designer`); tab 1 = the Infor OS portal page hosting the Mongoose Web Client, `favoriteContext=MockLoginPortal`.
- **Web Client baseline (tab 1, first reading in T25):** console **3 errors / 10 warnings**. Only the pre-existing MockLoginPortal tab was open and selected. Save and Filter in Place disabled. No dialog, no unsaved change.
- **Designer baseline (tab 0):** console **2 errors / 0 warnings**. No Form open, no dialog, Save and Regenerate Form disabled, status bar `ScopeType: User` (the account name written as `<signed-in user>`; not transcribed).
- No sign-in page, session-expiry modal, logout card or server-event error at any point.

### Phase 2 (initial state, before Filter in Place)
1. Web Client Form menu (`f1e10`, one click), then the recent entry `IDOs` (`f1e113`, one click). Result: `favoriteContext=IdoCollections`, tab "IDOs". This is the runtime **system IDO definition Form** (fields IDO Name, Extends, Project Name, Replace, IDO Assembly Name, Label String ID, Caption, Ext Class Name, Access As; tabs Tables, Properties, Methods and others). It is not the MockLoginIDO application-data Form.
2. Fresh untargeted snapshot taken after the open (returned inline; no filename argument). Observed: IDO Name textbox `[active]` with **no value text**; Filter in Place button enabled and not marked `[active]`; the grid shows one blank row; detail fields empty; Tables tab selected; Check Out and Undo Check Out disabled. **No status-bar text** appeared in the snapshot: no `(Object n of m)` text and no `Filter in Place` status text.
3. Screenshot `evidence/EXP-128/t25-01-idos-initial-state.png` (viewed). Shows the IDOs tab with the filter-shaped glyph beside its title, an empty IDO Name box with focus, empty detail fields, one blank grid row, and New IDO / New Table buttons. No status-bar text is visible in the viewport.
4. **Exact status-bar text at the initial state: none visible** (no status bar text found in the screenshot or in the snapshot). **Initial IDO Name value: empty.**

### Branch decision (Phase 3, step 12)
- **Branch A was NOT met.** Branch A requires the status bar to read exactly `Filter in Place` and the IDO Name field to be empty in both sources. No status-bar text reading `Filter in Place` was visible.
- **Branch B applied:** one Filter in Place click for an ordinary initial state (the blank placeholder row with no status text). The tab glyph, empty fields and blank grid were treated as supporting observations only, as the instruction requires.
- Branch C (prompt or dialog): **not triggered**. No prompt or dialog appeared at any point.

### Filter in Place click and gate (Phase 3)
1. **One click** on Filter in Place (`f1e32`, from the snapshot taken after the IDOs open). Console 3 / 10.
2. Wait **3 seconds** (within the five-second limit). Console 3 / 10.
3. Fresh untargeted snapshot (no filename argument). It exceeded the output limit (75,258 characters) and was saved to the session tool-results folder, outside the repository. **It was not read**: a Grep on it was denied by the permission layer and was not retried; no other route was used. This is a read error (see audit).
4. Post-wait snapshot file `evidence/playwright/page-2026-10-25T09-03-16-931Z.yml` (tool-written; searched by Grep, read as lines only):
   - The Filter in Place button is marked `[active]` on its FiP child (line 71). This is supporting evidence only.
   - **IDO Name textbox value: `ABDataServices`** (line 1092).
   - Check Out and Undo Check Out disabled (lines 1148–1149).
   - No status-bar text reading `Filter in Place` (the only match for "Filter in Place" is the toolbar button label at line 70).
5. Screenshot `evidence/EXP-128/t25-02-idos-after-filter.png` (viewed). Shows the IDO Name field populated with **`ABDataServices`**; the 29-row IDO list visible; the auto-selected row 1; detail fields for ABDataServices in grey read-only style (Project `AppBuilder`, Access As `Core`, Revision Num `5`, Revision Date `2/13/2018`, Label String ID and Caption `oABDataServices`); the Tables tab showing one row `ABDataServices`, alias `ds`, `Primary Base`, `Inner`; Check Out disabled. **No status bar is visible.**

**Gate result: FAILED.** Both sources agree that the IDO Name field is **populated** (`ABDataServices`), which the gate forbids. Neither source shows the status-bar text `Filter in Place`. The FiP `[active]` flag and the glyph do not substitute for the status-bar text. Per Phase 3 step 15 the lookup stopped.

Observation (observed, meaning unresolved): the single Filter in Place click moved this view from the blank placeholder to the populated record view with the unrelated IDO `ABDataServices` auto-selected. That is the same record view T23 recorded after its FiP click. The view therefore does not show the blank criteria state that EXP-127 T7 described.

### Safe exit (Phase 3, step 15; Phase 6)
- The IDO Name field was **not clicked**. **No text was typed.** **No key was pressed.** No second Filter in Place click. No F4. No alternative route.
- Closed the IDOs tab with its own tab close control `Close Panel IDOs` (`f1e146`, from the post-wait snapshot, the most recent snapshot in the task). **No save prompt appeared.** The Web Client returned to the pre-existing MockLoginPortal tab. Console 3 / 10.

### Phases 4 and 5 (not entered)
- Gate not passed, so the exact lookup was **not performed**: `MockLogin` typed **0**; F4 **0**; no result set; no zero/one/many match count (no query ran).
- No MockLogin row opened, no Tables/Properties/Methods tab of any IDO opened, no record opened, no method run.
- No Ctrl+A, Backspace or Delete. No Save, Apply, Compile, Regenerate, New Record or edit.
- Not created: `evidence/EXP-128/t25-03-mocklogin-query-result.png`, `t25-04-mocklogin-properties.png`, `t25-05-mocklogin-methods.png` (their steps were not reached).

### Result (T25)
- **Hard status-bar gate: FAILED** (IDO Name populated, `ABDataServices`; no `Filter in Place` status text in either source).
- **MockLogin IDO definition: NOT located and NOT inspected.** No project, assembly, base table, property name, property class, binding, key flag, method name, parameter or method type was observed for `MockLogin`. This does **not** establish that `MockLogin` is absent from the system.
- **Username:** whether it exists as an IDO property remains **unresolved**. It is not inferred from Form bindings. The Form-side list (36 names, T22) and the grid binding (`object.Username`) still conflict.
- **Disposition (step 46):** the MockLogin IDO definition is recorded as an **operator-accepted unresolved limitation under Option C**. No further MockLogin IDO lookup is recommended or scheduled, as the operator instructed.

### Action audit (T25, exact; this task only)
**Browser actions attempted: 9. Returned ok: 9. Errors: 0.**
- Tab selections: 4 (tab 1, tab 0, tab 1, tab 0).
- Clicks: 4 (Web Client Form menu `f1e10`; recent `IDOs` `f1e113`; Filter in Place `f1e32`; `Close Panel IDOs` `f1e146`). Filter in Place clicks: **1**.
- Waits: 1 (3 seconds; counted as ok).
- Typed characters: **0**. Key presses: **0**. F4: **0**. Ctrl+A, Backspace, Delete: **0**. Save, OK, Apply, Yes and No clicks: **0** (no prompt appeared). Coordinate clicks: 0. Drags: 0. Dialog handling: 0. Navigation: 0. Refresh: 0. Unload: 0.

**Browser reads attempted: 8. Returned ok: 7. Errors: 1.**
- Tab list: 1 (ok).
- Snapshots: 5 attempted, 4 ok, 1 error. The four ok snapshots were inline (Web Client baseline; Designer baseline; after the IDOs open; Designer final). The error was the post-click untargeted snapshot, which exceeded the output limit (75,258 characters) and was saved outside the repository; it is an output-size error, not a targeting error.
- Screenshots: 2 (`t25-01`, `t25-02`), both ok.
- Snapshot action outputs (files written under `evidence/playwright/` by the tool for each click and the wait) are not counted as separate reads.

**Repository tool errors (not browser actions):** 1 denied Grep on the oversized snapshot in the session tool-results folder.

**Reference and procedure qualifications:**
- The Form menu click (`f1e10`) used a reference from the Web Client baseline snapshot of this task. That snapshot was the most recent for tab 1, but a Designer baseline snapshot came between it and the click. The click returned ok and the open that followed was verified by a fresh snapshot. Recorded as a deviation from the "most recent snapshot" rule.
- The earlier T24 snapshots `evidence/playwright/t24-webclient-baseline-snapshot.yml` and `t24-designer-final-snapshot.yml` were produced with a filename argument. That contravenes the T25 instruction (step 7) and is preserved as a procedural qualification from T24. **No filename argument was passed to `browser_snapshot` in T25.**

**Cumulative (controller baseline through T24 as stated in the brief: 369 actions attempted, 350 ok, 19 errors; 506 reads attempted, 491 ok, 15 errors):** with T25, **378 actions attempted (359 ok, 19 errors); 514 reads attempted (498 ok, 16 errors)**, subject to authoritative controller reconciliation.

### Console and state checks (T25)
- **Web Client (tab 1):** 3 errors / 10 warnings at the baseline and after every action that displayed a count (Form menu, IDOs open, Filter in Place, the wait, the IDOs close) and at the final check. **No rise.**
- **Designer (tab 0):** 2 errors / 0 warnings at the baseline and at the final check. The Designer was not otherwise touched. **No rise.**
- No stop rule was triggered.

### Screenshots (T25)
- `evidence/EXP-128/t25-01-idos-initial-state.png`: the runtime system IDOs Form (tab "IDOs" beside MockLoginPortal) before the FiP click. **Proves:** the Form identity (system IDO definition interface), the empty focused IDO Name box, the blank grid row, the Tables tab, and the absence of visible status-bar text. **Does not prove:** the internal filter state, the meaning of the glyph, or the absence of any IDO. The account name is visible **unredacted** in the header (privacy, D-7).
- `evidence/EXP-128/t25-02-idos-after-filter.png`: the same Form after the single FiP click and a 3-second wait. **Proves:** the IDO Name field holds `ABDataServices`, the 29-row list is shown, and the detail fields are the grey read-only record view. **Does not prove:** any criteria state, and it shows no status bar. The account name is visible **unredacted** in the header (D-7).

### Worker-written files (T25)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this T25 section).
- **Created:** `evidence/EXP-128/t25-01-idos-initial-state.png`; `evidence/EXP-128/t25-02-idos-after-filter.png`.
- **Not created:** any `.txt` copy (no IDO definition was inspected). `evidence/EXP-128/MockLoginIDO-metadata.txt` is unchanged.
- **Tool-written, not read beyond the Grep lines noted:** `evidence/playwright/page-2026-10-25T09-02-45-124Z.yml` (menu-item lines only); `page-2026-10-25T09-02-49-701Z.yml`; `page-2026-10-25T09-03-11-980Z.yml`; `page-2026-10-25T09-03-16-931Z.yml` (the lines listed above); `page-2026-10-25T09-03-44-267Z.yml` (tab and button lines only); `evidence/playwright/console-2026-10-25T09-02-36-453Z.log` and `console-2026-10-25T09-02-36-454Z.log` (not read or inspected).
- **Session tool-results folder (outside the repository):** the oversized post-click snapshot file `mcp-playwright-browser_snapshot-1792918998836.txt`. **Not read**; the Grep on it was denied and was not retried.
- Note: the snapshot files can contain session-identifier fragments. Review before any sharing (as in T22–T24).

### Credential handling (T25)
- Redactions in this text: 1 placeholder (`<signed-in user>`). Credential values read: 0. Copied: 0. Typed: 0. The tab URLs and snapshots show tenant and session placeholders (`<secret>`), which are not values and were not copied.
- The snapshot line that holds the IDO Name value (`ABDataServices`) is an application metadata value, not a credential.

### Accidental change (T25)
- None observed. Save stayed disabled in every snapshot. No value was typed. No prompt appeared. No record was saved.

### Final browser state (end of T25)
- **Designer (tab 0), selected at the end:** blank canvas, no Form open, no dialog, menu or editor, Save and Regenerate Form disabled, `ScopeType: User`, console **2 / 0** (baseline). Final snapshot returned inline (no file saved).
- **Web Client (tab 1):** not selected at the end. Only the pre-existing MockLoginPortal tab remains (operator's favorite, untouched). Save and Filter in Place disabled. No dialog. Console **3 / 10** (baseline). Final snapshot `evidence/playwright/page-2026-10-25T09-03-44-267Z.yml`.

### Acceptance (T25 view)
- **AC-1:** unchanged (passed, qualified). Sources read (with the T23/T24 and EXP-127 qualifications above); session usable; User scope; the Designer clean at the gate; the Web Client baseline recorded.
- **AC-2:** unchanged for the three Forms.
- **AC-3:** **not advanced.** The MockLogin IDO definition was not located; its properties, classes, bindings, keys and methods remain unrecorded; `Username` remains unresolved; MockLoginIDO's properties and methods are not recorded beyond the Form-side view. Recorded as an operator-accepted unresolved limitation (Option C).
- **AC-4:** unchanged. Runtime interaction limited to opening and closing, plus the single FiP click described above.
- **AC-5:** met for T25 scope. Nothing saved or created; the one IDOs Form was closed with its own tab close control and no save prompt; no credential value copied; no typing; User scope only; the task stopped at the T25 boundary. Disclosed: the single Filter in Place click that did not produce the criteria state, and the populated `ABDataServices` view it produced.

### Open questions and carried-forward items (after T25)
1. The MockLogin IDO definition (project, tables, property names and classes, bindings, keys, methods): **unresolved**; operator-accepted limitation (Option C). No further lookup recommended.
2. Whether `Username` (and `ID`, `Password`, `Store`, `Role`) is defined on the IDO: **unresolved**.
3. The meaning of the filter-shaped glyph and the `[active]` flag when no status-bar text is shown, and why a single FiP click produced the populated record view in T23, T24 and T25: **unresolved**.
4. Carried forward: `UserControl.js` (D-13); the global Script source (Q-14); the MockLoginPortal copy gap at lines 78–97 (accepted qualification); privacy review of every PNG and snapshot (D-7); Git review (operator).

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is not declared. The T25 boundary is reached. The gate failed, the MockLogin IDO was not located, and the worker has stopped for the coordinator's final qualified review and disposition. No further browser investigation was performed.

---

## T26 - Final qualified review and operator acceptance preparation (repository only, 2026-10-25)

Harness header: `task=T26`. Bounded instruction: final qualified study review and operator acceptance preparation; no browser work; no Git; EXPERIMENT_COMPLETE not declared. The full review is `evidence/EXP-128/t26-final-qualified-review.md` (sections 1 to 14). This section summarises it.

### Gate and sources
- No browser tool was called. No tab was listed, selected or read. Last observed browser state: the T25 final state (review section 13).
- Read in full: `AGENTS.md` (240 lines). Read in this record: the header and T1; the T17, T12, T19, T20, T21, T22, T23, T24 and T25 sections. Not re-read: T2 to T11, the pre-T12 BLOCKED section and T13 to T16.
- Controller audits read: `harness-audit-T18.md` to `T25.md` (summary and error lines); AGENTS.md match counts in `T15` (1) and `T16` (0).
- Evidence read: the MockLoginPortal, dashboard and login-JavaScript copies (full); `t21-global-script-names-observed.txt` (full); the T19 reconciliation (full). Global-variable and asset copies were searched for tokens only.

### Verified and corrected in T26 (review section 3)
- **H16 read no AGENTS.md:** confirmed by the controller (`harness-audit-T16.md` has 0 matches). AC-1 is therefore not fully met.
- **T1 AC-1 self-assessment ("Partly met") restored.** T19's "passed (qualified)" had no new basis.
- **T19 return-string line numbers** (32, 53, 76, 80, 86) were copy-file lines. Source lines are 23, 44, 67, 71 and 77. Labelling only.
- **Line-number conventions** in the record are mixed (copy-file and source). For the MockLoginPortal copy, source = copy − 9.
- **Accidental flag A-1 (MockInventory)** is recorded with two dispositions: an operator refresh (lines 585 and 662) and a close answered No (line 720; controller H8). Not reconciled; operator to confirm (E-10).
- **Worker-directed files outside `evidence/EXP-128/`:** `t4-components-snapshot-check.yml` (H5), plus `t24-webclient-baseline-snapshot.yml` and `t24-designer-final-snapshot.yml` (T24). T19 listed only the first (E-11).
- **Controller audit files:** 25 exist (`harness-audit-T1.md` to `T25.md`).
- **Edit menu:** 18 entries (T1, Form open) and 17 (T20, T21, no Form open). The difference is "Form Script" only; the cause is inferred.

### Reconciled controller counts (review section 6)
- **Browser actions through T25: 377 attempted; 358 ok; 19 errors.** T20 to T25 contributed 60 actions, all ok.
- **Browser reads through T25: 515 attempted; 499 ok; 16 errors.** T20 to T25 contributed 72 reads, 67 ok.
- The brief's totals (377/358/19 and 515/499/16) are reproduced. The controller counts T25 as 8 actions and 9 reads (the worker had counted 9 and 8 by treating the wait as an action).
- Repository tool errors through T25: 8. Session-limit messages: 2 (H7, H15). Total tool errors: 45.
- Record-attested executions: 312 of the 358 ok actions. The other 46 have no record count (H7 11, H9 11, H15 24).

### Acceptance (review section 9; all `pending`, each partly met)
- **AC-1 (sources, session, scope, clean start, menus, names):** partly met. Gate elements are recorded with screenshots; the source-review element is not fully met (E-01 to E-03).
- **AC-2 (Form structures and scripts):** partly met. Gaps: MockLoginPortal collection values blank (Q-10); MockInventory collection Options unread (Q-11); global views partial; Global Script bodies not read (Q-14).
- **AC-3 (assets, WSForm/MG calls, globals, MockLogin IDO):** partly met. `UserControl.js` is referenced by both HTML pages but was never read (D-13). The MockLogin IDO definition is an accepted limitation under Option C.
- **AC-4 (runtime look, synthesis, candidates):** partly met. Runtime display observed without interaction. No login was run and no individual WSForm or MG call was observed.
- **AC-5 (no save or creation; closures; credentials; scope; boundary; audit):** partly met (qualified). No save, creation or credential copy was found. Gaps: H7 and H15 ended with an open Form and an open editor (no close row); A-1 disposition; T23 key presses in the IDO criteria field; the filename snapshots (E-11); Q-20 undefined; privacy and Git reviews outstanding.

### Synthesis (review section 4)
- MockLoginPortal (Flex): `ProcessLogin(string, string)` calls `IDOClient.LoadCollection("MockLogin", ...)`, writes `vMockLoginJson`, alerts through `Application.ShowMessage`, and returns a string. `LoadMockLoginJson` has no caller in any copy.
- Login bridge (source): `app.js` `invokeAsync` calls `WSForm.invoke("ProcessLogin", username, password, callback)`. The `WSForm.invoke` implementation is unread.
- MockInventoryDashboard: `LoadInventoryFromIDO()` calls `LoadCollection("MockInventory", ...)` and writes `vInventoryJson`. The page calls `WSForm.invoke("LoadInventoryFromIDO")`, `WSForm.getVarValue("vInventoryJson")` and `MG.onReady`. No other WSForm or MG call appears in any copy.
- MockInventory: a data Form with no UserControl, no method and no IDO call from script.
- Login-to-dashboard link: **none observed** in any inspected artifact (Q-3).

### Security observations (source level; not executed; review section 4.6)
- The stored password is compared in plain text (source 50, 64). It is written to `vMockLoginJson` and shown in the success alert (source 62, 70). `LoadMockLoginJson` serialises every row's password (source 119, 128) and has no caller in any copy. These are concerns for operator review, not demonstrated disclosures.

### Action audit (T26, exact)
- **Browser actions: 0. Browser reads: 0.** No tab listed, selected or read.
- **Repository calls before writing: 34** (19 Read, 9 Grep, 6 Glob), all successful.
- Writes and edits: the review file was created (1 Write) and corrected (2 Edits); this record received 2 Edits (the top status line and this section).
- Redactions in T26 files: 0. No credential value was displayed or copied.

### Worker-written files (T26)
- **Created:** `evidence/EXP-128/t26-final-qualified-review.md`.
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this section).
- **Not changed:** any copy, screenshot, controller audit, the T19 and T21 files, any asset, and any other repository file.
- **Cumulative inventory through T26** (review section 12): this record and 3 notes; 12 verbatim copies; 97 PNG files (82 through T17, 15 from T20 to T25; none viewed in T26); 3 worker-directed files outside the permitted directory.

### Final browser state
- Unchanged by T26. Last observed at T25: Designer clean (no Form, no dialog, Save disabled, `ScopeType: User`, console 2/0). Web Client: only the pre-existing `MockLoginPortal` tab; Save and Filter in Place disabled; console 3/10. Neither tab was re-observed in T26.

### Operator decision (review section 11)
- **Decision A (recommended):** accept EXP-128 as a qualified observational study, with the gaps retained (not waived): `UserControl.js` (D-13); the runtime login trace; global Script bodies (D-8); the MockLogin IDO definition (Option C, accepted); MockInventory collection Options; the MockLoginPortal blank collection; the login-to-dashboard link (D-3); Q-20. The operator dispositions the exceptions in review section 8, particularly E-04, E-05, E-10, E-11, E-12 and E-19. EXPERIMENT_COMPLETE only after those dispositions are recorded.
- **Decision B:** decline acceptance pending separate authorised work outside EXP-128 (a bounded `UserControl.js` read, a runtime login trace, global Script bodies). The MockLogin IDO lookup is **not** a continuation of EXP-128.
- **Before any external sharing:** privacy review of the 97 PNG files and the snapshot files (account name; session fragments); Git review of the untracked EXP-128 files and of the `tools/claude-harness/` changes (D-10). T26 could not run Git.

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is **not declared**. The T26 boundary is reached: the final review is written. No further browser work is recommended under EXP-128. The next step is the coordinator's review and the operator's explicit disposition.

---

## T27 - MockLoginIDO exact-name lookup (operator-authorized, status-gated): gate PASSED; zero result; IDO NOT located (2026-10-25)

Harness header: `task=T27`. Bounded instruction: one exact-name lookup of `MockLoginIDO` in the runtime system IDOs Form, with a hard initial-state gate, one F4, and read-only metadata inspection only after a unique exact match.

### Operator information (not verified by browser evidence before this task)
- The intended IDO name is `MockLoginIDO` (one word, no spaces). `MockLogin` is the collection name observed in the Designer and in the `LoadCollection` calls of the MockLoginPortal Form Script. Operator information only; it is tested here by the single typed criterion below.
- The earlier Option C disposition for that name was withdrawn by the operator for this task.

### Correction note for T22 to T25
- T22 to T25 searched for, or aimed at, `MockLogin` (the collection name) under the earlier understanding. None of them established a typed-name lookup result: T22 read the Designer Form-side collection view only; T23 pressed Filter in Place once and Control+A and Backspace in the IDO Name field, and typed nothing; T24 stopped at its gate before any Filter in Place click; T25 pressed Filter in Place once, which populated the view with `ABDataServices`, and typed nothing. Their recorded observations stand. They do not conclusively disprove the existence of any IDO, and they are not a completed search for `MockLogin` or `MockLoginIDO`. This note does not erase them.

### Sources (Phase 1)
- AGENTS.md read in full (240 lines) at the start of this task.
- T24 and T25 sections of this record read in full (lines 2808 to 3030). T22 and T23 were checked for the name distinction: the T22 addendum in `evidence/EXP-128/MockLoginIDO-metadata.txt` (section G) and the T23 gate and Phase 2 (lines 2714 to 2753) were read.
- `evidence/EXP-128/MockLoginIDO-metadata.txt` read in full. `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` read at lines 25 to 54 (`ProcessLogin`, property string and the `LoadCollection("MockLogin", ...)` call at copy line 38). The T24 and T25 screenshots were not re-viewed; their recorded observations were used. The docs guides were not re-read (continuation rule).

### Tabs and baselines (Phase 1)
- Tab list, before the first selection: tab 0 = Infor Mongoose Designer (`WSWebClient/designer`); tab 1 = the Infor OS portal page hosting the Mongoose Web Client (`favoriteContext=MockLoginPortal`).
- **Web Client baseline (tab 1):** console **3 errors / 10 warnings**. Only the operator-loaded MockLoginPortal Form tab; Save and Filter in Place disabled; no dialog; no unsaved change.
- **Designer baseline (tab 0):** console **2 errors / 0 warnings**. No Form open; Save and Regenerate Form disabled; no dialog; `ScopeType: User` (account name written as `<signed-in user>`).
- No sign-in page, session-expiry modal, logout card or server-event error at any point.
- The MockLoginPortal runtime tab was preserved: not closed, refreshed or modified.

### Phase 2 (system IDOs Form opened once)
1. Web Client Form menu (one click, ref `f1e10` from the most recent snapshot of this task). The menu snapshot listed recent entries in this order: IDOs, MockLoginPortal, MockInventoryDashboard, MockInventory, MockLoginIDO, MockLogin, Sql Tables, Runtime Builder Selection, TestMongoose, IDO Projects. The object type of the `MockLoginIDO` and `MockLogin` entries was not checked, and neither was opened.
2. Recent entry `IDOs` (one click, ref `f1e113` from the snapshot captured by the Form click). Result: `favoriteContext=IdoCollections`, tab "IDOs" beside MockLoginPortal. This is the runtime system IDO definition Form (IDO Name, Extends, Project Name, Tables/Properties/Methods tabs), not the MockLoginIDO application-data Form.
3. Fresh untargeted snapshot (read 5, inline, no filename argument): IDO Name textbox `[active]` with no value; grid with one row (row number 1) and blank cells; detail fields empty; Tables tab selected; Save disabled; the Filter in Place button not marked `[active]`; no dialog or prompt.
4. Screenshot `evidence/EXP-128/t27-01-idos-initial-state.png` (viewed): tab "IDOs" with a filter-shaped glyph beside its title; IDO Name box empty with focus; one blank grid row (arrow marker and unchecked checkbox); detail fields empty; New IDO, New Table, New Property, New Method and New Data Rule buttons, and Check Out and Undo Check Out, visible; the Save icon greyed; no status bar in the viewport; no dialog. The header shows the account name unredacted (privacy item D-7; not copied into this record).

### Phase 3: hard initial-state gate: PASSED (on the brief's listed conditions)
- IDO Name field empty: **yes** (snapshot and screenshot).
- Exactly one blank grid row: **yes** (both).
- No existing IDO record visibly loaded: **yes** (both; detail fields empty; no selected IDO name).
- No ABDataServices or other IDO value shown as selected: **yes** (both).
- Save disabled: **yes** (snapshot disabled; screenshot icon greyed).
- No prompt or dialog: **yes** (both).
- The snapshot and screenshot agree, so the gate did not fail on disagreement.
- **Not established:** the internal Form mode. The gate tests only the visible conditions above. The filter glyph beside the IDOs title and the unmarked Filter in Place button were noted; their meaning is unverified and was not used as a pass condition.
- Filter in Place clicks in T27: **0**. Filter in Place was not clicked, as the brief required.

### Phase 4: one exact-name query
- One click on the empty IDO Name field (ref `f1e239`, from the most recent snapshot). The click's snapshot file was checked by Grep (repository read): textbox `[active]`, no value, Save disabled, no dialog or alert.
- Typed `MockLoginIDO` key by key (12 characters, slow typing, no paste, no correction, no clearing key). Post-type check by Grep on the type output: textbox value `MockLoginIDO`; Save disabled; no dialog or alert; grid still one row ("1") with blank cells. Not typed: `MockLogin`.
- F4 pressed **once**. Wait of 5 seconds. Fresh untargeted snapshot (inline) then screenshot `evidence/EXP-128/t27-02-mockloginido-query-result.png` (viewed).
- Observed after F4 (snapshot and screenshot agree): the IDO grid shows **no data rows** (header "IDO Name", "Description", "Locked By", "Revision Date", "Revision Num" only); the IDO Name box is empty with focus outline (no value text in the snapshot); the filter-shaped glyph beside the IDOs title is gone; detail fields are grey read-only; Save icon greyed and Save disabled; no dialog or prompt. The snapshot also shows Delete, Refresh, Send email and Export To Excel toolbar buttons enabled, and New IDO enabled; the screenshot shows the Delete, Refresh, email and export icons coloured, consistent with the snapshot. These toolbar states are recorded and not interpreted.
- No Ctrl+A, Backspace or Delete. No Save, OK, Apply, Yes or No click. No second F4. No second query.

### Result (Phase 4, steps 24 to 26)
- **Observed result count: ZERO** IDO rows in the grid. The brief's rule for zero results applied: document and stop. No second query and no alternate criterion were run.
- **MockLoginIDO: NOT located as an IDO.** This does **not** establish that `MockLoginIDO` is absent from the system. A single query with an unverified execution path cannot establish absence.
- **Limit on this result (unresolved):** after F4 the typed text was no longer shown in the IDO Name field, and the glyph changed. Whether F4 ran the exact-name query and the view then cleared, or whether the criterion was lost or reset without a query, is **not established**. The zero-row view is observed; it is not proven to be an exhaustive search result for the criterion.

### Phase 5: NOT entered
- No Tables, Properties or Methods tab of any IDO was opened. No IDO record was opened. No project, assembly, extension class, base table, property name, property class, binding, key flag or method was observed for `MockLoginIDO`.
- `Username`, `ID`, `Password`, `Store` and `Role` on the IDO: **unresolved** (not inspected). The Form-side list (T22, 36 names) and the grid binding `object.Username` still conflict.
- No relationship between `MockLoginIDO` (or any IDO) and the `MockLogin` collection was established by this task.
- No observed-definition evidence copy was created (step 43 not applicable). No `.txt` copy was created. `evidence/EXP-128/MockLoginIDO-metadata.txt` was not modified.

### Safe exit (Phase 6)
- Closed the IDOs tab with its own control `Close Panel IDOs` (ref `f1e146`, from the post-F4 snapshot). No save prompt appeared, because Save was disabled before the close.
- Web Client afterwards (snapshot, Grep check): only the pre-existing MockLoginPortal Form tab, selected; Save and Filter in Place disabled (as in baseline); no dialog; console **3 / 10**.
- Designer (tab 0), final snapshot: blank canvas, no Form open, no dialog, menu or editor; Save and Regenerate Form disabled; `ScopeType: User`; console **2 / 0**.

### Console and state checks (T27)
- Web Client (tab 1): 3 errors / 10 warnings at baseline and at every later count shown (Form click, IDOs open, IDO Name click, type, wait after F4, IDOs close). The tab selects and the type output did not display a count; the next output did. **No rise.**
- Designer (tab 0): 2 errors / 0 warnings at baseline and final. **No rise.**
- No stop rule was triggered (no server-event error, no console rise, no Caption commit, no unexpected prompt).

### Action audit (T27, exact; this task only)
- **Browser actions attempted: 10. Returned ok: 10. Errors: 0.**
  - Tab selections: 4 (tab 1, tab 0, tab 1, tab 0).
  - Clicks: 4 (Web Client Form menu `f1e10`; recent `IDOs` `f1e113`; IDO Name field `f1e239`; `Close Panel IDOs` `f1e146`). Coordinate clicks: 0. Filter in Place clicks: 0.
  - Type actions: 1 (`MockLoginIDO`, 12 characters, slowly). Typed characters: 12. No credential value typed.
  - Key presses: 1 (F4, once). Ctrl+A, Backspace, Delete: 0.
  - Save, OK, Apply, Yes and No clicks: 0 (no prompt appeared). Dialog handling: 0. Navigation: 0. Refresh: 0. Unload: 0. Drags: 0. Wheel: 0.
- **Browser reads attempted: 10. Returned ok: 10. Errors: 0.**
  - Tab list: 1 (before the first selection).
  - Snapshots: 6, all untargeted and inline, none with a filename argument (Web Client baseline; Designer baseline; Web Client before the Form click; after the IDOs open; after F4; Designer final).
  - Screenshots: 2 (`t27-01`, `t27-02`).
  - Wait: 1 (5 seconds, counted as a read, following the controller's T25 classification).
- Action-output files written by the tool (not counted as separate reads): 6 page snapshot files under `evidence/playwright/` (listed below) and one console-event log for the first tab selection.
- Repository tool calls (not browser actions or reads): AGENTS.md, this record and the copies, plus Grep on the tool-written snapshot files. Repository errors: 0.
- **Cumulative** (controller baseline through T26 as stated in the brief: 377 actions attempted, 358 ok, 19 errors; 515 reads attempted, 499 ok, 16 errors): **with T27: actions 387 attempted (368 ok, 19 errors); reads 525 attempted (509 ok, 16 errors)**, subject to controller reconciliation. If the controller counts the wait as an action, the T27 figures become 11 actions and 9 reads.

### Credential handling and redactions (T27)
- Redactions in this text: 1 placeholder (`<signed-in user>`). Credential values read: 0. Copied: 0. Typed: 0 (the only typed text is the IDO name criterion `MockLoginIDO`). Tenant and session placeholders in the tab URLs were not copied.

### Accidental change (T27)
- None observed. Save stayed disabled in every snapshot and screenshot; no prompt appeared; nothing was saved or created.

### Screenshots (T27)
- `evidence/EXP-128/t27-01-idos-initial-state.png`: the runtime system IDOs Form before the query, after the gate. **Proves:** the IDOs tab identity beside MockLoginPortal; an empty IDO Name box with focus; one blank grid row; empty detail fields; the Save icon greyed; no dialog. **Does not prove:** the internal Form mode, the meaning of the glyph, or the absence of any IDO. The account name is visible **unredacted** in the header (D-7).
- `evidence/EXP-128/t27-02-mockloginido-query-result.png`: the same Form after the F4 and a 5-second wait. **Proves:** no IDO data rows are shown; the IDO Name box is empty; the detail fields are grey; the glyph is gone; Save is greyed; no dialog. **Does not prove:** that the query ran, that the criterion was applied, or any match count beyond the visible grid. The account name is visible **unredacted** in the header (D-7).

### Worker-written files (T27)
- **Created:** `evidence/EXP-128/t27-01-idos-initial-state.png`; `evidence/EXP-128/t27-02-mockloginido-query-result.png`.
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (top status line; this T27 section).
- **Not created:** any `.txt` copy (no IDO definition was inspected); any observed-definition copy. `evidence/EXP-128/MockLoginIDO-metadata.txt` unchanged.
- **Tool-written, not by the worker (browser action outputs; not read beyond the Grep lines noted):** `evidence/playwright/page-2026-10-25T09-21-28-890Z.yml` (Grep: menu lines 48 to 83); `page-2026-10-25T09-21-40-386Z.yml` (not read); `page-2026-10-25T09-22-05-681Z.yml` (Grep); `page-2026-10-25T09-22-13-185Z.yml` (Grep); `page-2026-10-25T09-22-25-533Z.yml` (not read); `page-2026-10-25T09-22-47-232Z.yml` (Grep); `evidence/playwright/console-2026-10-25T09-21-04-731Z.log` (tab-select event; not read or inspected).
- Note: the snapshot files can contain session-identifier fragments. Review before any sharing (as in T22 to T26).

### Acceptance (T27 view)
- **AC-1:** remains **pending** (as set in T26). T27 adds the gate evidence (`t27-01`): session usable, User scope, Designer clean at the start, and the Web Client baseline recorded.
- **AC-2:** unchanged (pending). No Mock Form was opened in T27.
- **AC-3:** **not advanced.** The MockLoginIDO definition was not located, and its properties, classes, bindings, keys and methods remain unrecorded. `Username` remains unresolved. `UserControl.js` is still unread (D-13) and the global Script bodies are still not read. AC-3 is **not** marked passed.
- **AC-4:** unchanged (pending).
- **AC-5:** met for the T27 scope, with disclosed exceptions: nothing saved or created; the IDOs Form closed with its own control and no save prompt; no credential value read or copied; User scope only; the task ended at its boundary. The exceptions are the single typed criterion and the single F4 in the runtime IDOs Form (the operator-authorized exact-name query), and the account name shown unredacted in two screenshots (D-7).

### Result summary (T27)
- Gate: **PASSED** on the brief's listed conditions.
- MockLoginIDO as an IDO: **NOT located** (zero result from one exact-name query; the query's execution is not verified).
- Metadata observed (Tables, Properties, Methods, project, assembly, extension class): **none**. Phase 5 was not entered.
- Relationship to the MockLogin collection: **not established**.

### Open questions (after T27)
1. Does an IDO named `MockLoginIDO` exist? **Unresolved.** One exact-name query gave zero rows; execution of the query is not verified.
2. Did F4 run the exact-name query, and why did the typed text disappear from the IDO Name field after F4? **Unresolved.**
3. The meaning of the filter-shaped glyph beside the IDOs title and of the Filter in Place state: **unresolved**.
4. Is `MockLogin` an IDO name at all, and is the `MockLogin` entry in the Web Client Form menu's recent list a Form or an IDO? **Unresolved** (not opened; not checked).
5. Is `Username` (and `ID`, `Password`, `Store`, `Role`) a property of any IDO? **Unresolved.**
6. Carried forward: `UserControl.js` (D-13); global Script bodies (D-8); the MockLoginPortal copy gap (accepted qualification); the login-to-dashboard link (Q-3); MockInventory collection Options (Q-11); MockLoginPortal blank collection values (Q-10); privacy review of every PNG and snapshot file (D-7); Git review (D-10).
7. Any further IDO lookup would be a new bounded instruction. None was performed in T27.

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is **not declared**. The T27 boundary is reached: the gate passed, the single exact-name query returned zero IDO rows, MockLoginIDO was NOT located, no metadata was inspected, the IDOs Form was closed, and the worker has stopped for the coordinator's return and the operator's deferred acceptance disposition. No second query was run.

## T28 - MockLogin IDO definition (operator correction): Phase 2 gate NOT MET; no query run; IDO header and Tables observed in an already-open IDOs Form (2026-10-25)

Harness header: `task=T28`. Bounded instruction: operator correction (IDO = `MockLogin`; `MockLoginIDO` = Form name); Phase 1 baselines; the T27 initial-state gate; one exact-name query of `MockLogin` only if the gate passed; header, Properties and Methods inspection only after an exact match; safe exit.

### Operator correction (supersedes the T27 IDO identity)
- The intended IDO is **`MockLogin`** (Project `Mockup`, primary base table `MockLogin`, alias `mock_login`). **`MockLoginIDO` is the Form name** (the Designer Form described in `evidence/EXP-128/MockLoginIDO-metadata.txt`, section A).
- The operator-supplied header and Tables values are **operator-observed**. They are recorded as such and were not verified by an exact-match lookup in T28 (see Phase 4 below).
- Interpretation of T22 to T27, corrected: T22 to T25 did not complete a verified typed-name lookup for `MockLogin`. T27 searched `MockLoginIDO` once and saw a zero-row view that was inconclusive. These observations stand and are not erased.

### Phase 1: sources and baselines
- **Sources read:** AGENTS.md in full (240 lines); the T27 section in full (record lines 3103 to 3227); `evidence/EXP-128/MockLoginIDO-metadata.txt` in full; `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` lines 1 to 60 (`ProcessLogin` at lines 25 to 54; `LoadCollection("MockLogin", "Username, Password, Store, Role", ...)` at lines 38 to 44). T24 to T26 were not re-read in full; the T27 section's summary of them was used. The T24 and T25 screenshots were not re-viewed.
- **Tab list, before any selection:** tab 0 = Designer (`WSWebClient/designer`, URL carries `MGForm=MockLoginIDO`); tab 1 = Mongoose Web Client inside the Infor OS portal (URL carries `favoriteContext=IdoCollections`). Tab 0 was the current tab at the start.
- **Designer baseline (tab 0, inline snapshot, no selection needed):** console **2 errors / 0 warnings** (same as the T27 baseline). A Form tab **`MockLoginIDO`** is open and selected. The **Save** button is **not** marked `[disabled]`, and neither is **Regenerate Form**. The buttons that are disabled in the same snapshot (Undo, Redo, Align, Make Same Size, Space) carry the `[disabled]` marker, so the absence of the marker on Save is meaningful. ScopeType: **User** (account name written as `<signed-in user>`). **This is not the clean Designer that T27 ended with (no Form open, Save disabled).** Two screenshot attempts of this tab timed out (`waiting for fonts to load`), so Save was not confirmed visually.
- **Web Client baseline (tab 1, selected; fresh snapshots):** console **3 errors / 10 warnings** (same as the T27 baseline). Configuration shown in the header: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The toolbar **Save** is `[disabled]`. No dialog. The Form tab list contains **one** tab, **`IDOs`** (active), with `Close Panel IDOs`. **The MockLoginPortal runtime tab that T27 left open is not present** in the Form tab list (Phase 1 step 7 requires it to be preserved).
- **Session:** no sign-in page, session-expiry modal, logout card or server-event error at any point in T28.

### Phase 2: IDOs Form and the T27 initial-state gate: NOT MET (lookup stopped)
- The runtime IDOs Form was **already open** in the Web Client when this task began. I did not open it again (no Form menu click, no recent-entry click). The worker did not open or change it in T28.
- Read-only observations of that open Form (snapshot and screenshot `evidence/EXP-128/t28-01-idos-state-observed-gate-not-met.png`, viewed):
  - IDO Name textbox: **`MockLogin`** (the gate requires empty).
  - IDO list (left): populated, with rows around 186 to 214 visible. Row 200 `MockLogin` is highlighted with the selection marker. The gate requires one blank row.
  - A specific IDO record is loaded: the detail header and Tables grid are filled, so the gate condition "no existing IDO record loaded or selected" fails.
  - Save: `[disabled]`. No dialog or prompt.
- **Gate result: NOT MET** on the IDO Name, one-blank-row and no-record-loaded conditions. Per Phase 2 step 14, the lookup stopped at once. No click into any field, no key press, no typing, no Filter in Place click and no recovery filtering was performed.
- **Provenance of the loaded state is unknown.** T27 ended with the IDOs Form closed and only the MockLoginPortal tab open. The state observed here arose between T27 and the start of T28. T28 did not produce it through an authorized query. Its cause is not attributed to any actor.
- The screenshot is named `t28-01-idos-state-observed-gate-not-met.png` rather than `t28-01-idos-initial-state.png`, so that its file name does not assert that the gate passed.

### Phase 3: exact-name query: NOT RUN
- No click on the IDO Name field, no typing (`MockLogin` was not typed), no F4 and no Filter in Place click. Phase 3 is therefore not performed, and no exact-match result exists for T28.

### Phase 4: header, Tables, Properties and Methods (visible only, not verified by lookup)
- **Header values visible in the already-open IDOs Form** (snapshot and screenshot agree): IDO Name `MockLogin`; Project Name `Mockup`; Description blank; Label String ID `oMockLogin`; Caption `oMockLogin`; Extends blank; IDO Assembly Name blank; Ext Class Name blank; Ext Class Namespace blank; Profile Name blank; Revision Num `2`; Revision Date `10/16/2026`; Locked By blank; Access As `G6R`; Replace checkbox disabled and unchecked. Check Out enabled; Undo Check Out disabled.
- **Comparison with the operator-supplied header:** every visible value matches the operator's list. Because no exact-match lookup was run, this comparison is **not independent verification**. The operator values remain operator-observed. No discrepancy was found.
- **Tables tab (already selected in the open Form; visible without navigation):** one row, `MockLogin` | alias `mock_login` | Table Type `Primary Base` | Join Type `Inner` | Join Text blank. Visible in `t28-01`. This matches the operator's Tables value. It is recorded as visible in T28, not as a verified lookup result.
- **Properties and Methods: NOT inspected.** Phase 4 steps 29 to 38 were not entered, because the gate failed. Whether `Username`, `ID`, `Password`, `Store` and `Role` are actual IDO properties is **unresolved**. The Form-side list (36 names, T10 and T22) and the grid binding `object.Username` still conflict.
- The IDO list also shows `MockInventory` and `MPLogin` rows with a checked box in the second column. Their meaning is unknown. They were not opened or inspected, as the operator instructed.
- **Existence of `MockLogin`:** observed as a row in the populated IDO list and as the loaded IDO Name in the open Form. This is **not** the Phase 3 exact-match result the brief requires for "independently confirmed". The IDO is therefore observed but not independently confirmed by the authorized lookup.

### Phase 5: safe exit: NOT PERFORMED (stopped at the gate)
- The IDOs Form was left open. The worker did not close it, because it was not opened by this task and closing it is an action on pre-existing state that the stop rule does not authorize. Save was disabled in that Form, so no unsaved change was present in it.
- The Designer `MockLoginIDO` Form was left as found (open, Save apparently enabled; see the Phase 1 Designer baseline). The worker did not touch it. The T10 metadata file records that the Save icon was active on this Form during T10 (`t10-03`). This observation is consistent with that unsaved state persisting. Its cause is not established.
- The Designer was not re-read at the end (no final Designer snapshot was taken after the baseline).

### Action audit (T28 only, exact)
- **Browser actions attempted: 1. Returned ok: 1. Errors: 0.** The only action was one tab selection (tab 1). Clicks: 0. Coordinate clicks: 0. Filter in Place clicks: 0. Type actions: 0 (typed characters 0). Key presses: 0. Save, OK, Apply, Yes and No clicks: 0. Dialog handling: 0. Navigation: 0. Refresh: 0. Unload: 0. Drags: 0. Wheel: 0.
- **Browser reads attempted: 11. Returned ok: 8. Errors: 3.**
  1. Tab list (ok).
  2. Designer inline snapshot (ok).
  3. Designer screenshot attempt (error: `TimeoutError`, `waiting for fonts to load`).
  4. Designer screenshot retry (error: same timeout).
  5. Web Client untargeted snapshot (error: output of 85,221 characters exceeded the maximum; the tool saved it outside the repository, and a Grep on that file was denied, so it was not read).
  6. `browser_find` "warnings" (ok, no match; used as a probe for the console line, which it did not show).
  7. Web Client snapshot, depth 4 (ok; gave the Web Client console line 3 / 10).
  8. `browser_find` "closable" (ok, no match; the iframe content is not searched by find).
  9. Snapshot of iframe `e70`, depth 5 (ok).
  10. Snapshot of tab panel `f1e98`, depth 6 (ok).
  11. Screenshot `t28-01` (ok).
- Repository tool calls (not browser actions or reads): AGENTS.md, the record, the metadata file, the MockLoginPortal copy, one Read of `t28-01` (image view), and the repository writes listed below. One Grep of the tool-saved snapshot file was denied and not retried.
- **Cumulative** (from the reconciled T27 baseline of 387 actions, 368 ok, 19 errors; 525 reads, 509 ok, 16 errors): **with T28: actions 388 attempted (369 ok, 19 errors); reads 536 attempted (517 ok, 19 errors)**, subject to controller reconciliation. The controller's classifications are authoritative.
- Keyboard operations: 0. Typed characters: 0. Credential values read, copied or typed: 0.

### Console and state checks (T28)
- Web Client (tab 1): 3 errors / 10 warnings at baseline, after the depth-4 snapshot, and at the later snapshots. **No rise.**
- Designer (tab 0): 2 errors / 0 warnings at the baseline snapshot. No later Designer count was taken. The two screenshot timeouts were not console events.
- No server-event error, no sign-in page and no Caption commit occurred. The stop was caused by the Phase 2 gate failure and the Phase 1 Designer and tab-state observations, not by a console rise.

### Credential handling and redactions (T28)
- Redactions: 1 placeholder (`<signed-in user>`). The account name appears unredacted in the Web Client header of `t28-01` (privacy item D-7). It is not written in this record.
- Tenant and session placeholders in the tab URLs were not copied. Credential values read, copied or typed: 0.

### Screenshots (T28)
- `evidence/EXP-128/t28-01-idos-state-observed-gate-not-met.png` (viewed). **Proves:** the runtime IDOs Form in the Web Client; IDO Name `MockLogin`; the header values listed above; the Tables row `MockLogin` / `mock_login` / `Primary Base` / `Inner`; a populated IDO list with `MockLogin` highlighted at row 200; Save greyed; no dialog. **Does not prove:** how the state was reached, the total number of IDOs, the Properties or Methods of `MockLogin`, or any exact-match query result. The account name is visible unredacted in the header (D-7).
- Not created in T28: `t28-02-mocklogin-query-result.png`, `t28-03-mocklogin-properties.png`, `t28-04-mocklogin-methods.png` (the query and inspection were not reached).

### Worker-written files (T28)
- **Created:** `evidence/EXP-128/t28-01-idos-state-observed-gate-not-met.png`.
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (this T28 section appended; the top status line was not changed).
- **Not created:** `evidence/EXP-128/MockLogin-ido-definition.txt` (the definition was not inspected through the authorized route); any `.txt` copy; any Properties or Methods screenshot.
- **Tool-written, not by the worker (not read):** `evidence\playwright\console-2026-10-25T09-34-07-203Z.log` (tab-list event) and `evidence\playwright\console-2026-10-25T09-34-07-204Z.log` (tab-select event). The Web Client full snapshot saved by the tool is outside the repository (in the Claude project's `tool-results` folder); it may contain session identifiers and needs review before sharing.

### Acceptance (T28 view)
- **AC-1:** still **pending**. The session was usable and the scope is User. The starting Designer Form was **not** clean (`MockLoginIDO` open, Save not marked disabled), so the AC-1 clean-start condition is not met for T28.
- **AC-2:** unchanged (pending). No Mock Form was opened in T28.
- **AC-3:** **not advanced.** `MockLogin` was observed in the open IDOs Form but not independently confirmed by the authorized lookup. Its Properties and Methods were not read. `Username`, `ID`, `Password`, `Store` and `Role` remain **unresolved**. `UserControl.js` remains unread, and the global Script bodies remain incomplete. AC-3 is **not** marked passed.
- **AC-4:** unchanged (pending).
- **AC-5:** met for the T28 scope. Nothing was saved, created or changed by the worker. No dialog or editor was opened. No credential value was read or copied. The only browser action was one tab selection. The task ended at its gate boundary. **Exceptions to disclose:** the IDOs Form (not opened by this task) and the Designer `MockLoginIDO` Form (with apparently enabled Save) were left as found for the operator.

### Result summary (T28)
- **Gate: NOT MET.** The IDOs Form was already open with `MockLogin` loaded. The Designer was not clean. The MockLoginPortal Web Client tab was absent.
- **Query: not run.** **`MockLogin` as an IDO: observed (row in the IDO list; loaded in the open Form), but not independently confirmed by an exact-match lookup.**
- **Properties and Methods: not inspected.** Presence or absence of `Username`, `ID`, `Password`, `Store` and `Role` as IDO properties: **unresolved.**
- **Header and Tables:** visible values match the operator-supplied values, observed without the lookup; not independently verified.

### Open questions (after T28)
1. Who or what loaded `MockLogin` into the open IDOs Form between T27 and T28, and why did the MockLoginPortal Web Client tab disappear? **Unresolved; for the operator.**
2. The Designer `MockLoginIDO` Form is open with Save apparently enabled. The operator decides its disposition (for example a close with No). **Unresolved.** The Save state was not confirmed visually (two screenshot timeouts).
3. Does the exact-name query, once the gate is met, return exactly one `MockLogin` row? **Not tested in T28.** This needs a new bounded instruction, and the gate must first be reset by the operator.
4. Properties and Methods of `MockLogin`, including `Username`, `ID`, `Password`, `Store` and `Role`: **unresolved.** Also the property classes, bindings, keys and methods.
5. The meaning of the checked boxes beside `MockInventory` and `MPLogin` in the IDO list: **unknown**; not inspected.
6. Carried forward: `UserControl.js` (D-13); global Script bodies (D-8); the login-to-dashboard link (Q-3); MockInventory collection Options (Q-11); MockLoginPortal blank collection values (Q-10); privacy review of every PNG and snapshot file (D-7); Git review (D-10).

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is **not declared**. T28 stopped at the Phase 2 gate. No query was run. The worker has returned to the coordinator for the operator's disposition of the IDOs Form, the Designer `MockLoginIDO` Form and the missing MockLoginPortal tab, and for the deferred acceptance decision.

## T29 - MockLogin IDO Properties and Methods inspection (operator-authorized, already-open IDOs Form) and authorized safe closure (2026-10-25)

Harness header: `task=T29`. Bounded instruction: inspect only the already-loaded `MockLogin` IDO through the runtime system IDOs Form (Properties and Methods tabs, view only); no query, typing, keyboard operation, Filter in Place or record access; then close the IDOs Form and the Designer `MockLoginIDO` Form with No to any save prompt; do not restore MockLoginPortal.

### Operator attribution (OPERATOR-SUPPLIED; not independently verified by the worker)
- The operator states that between T27 and T28 they opened the runtime IDOs Form, loaded `MockLogin` into it, closed the MockLoginPortal runtime tab and opened the `MockLoginIDO` Form in Designer, and that **nothing was edited in either application**.
- The worker did not reconstruct these actions and does not claim to have verified them. The worker's own T29 actions are listed in the audit below.
- Historical note (observed in the repository, not in T29): `evidence/EXP-128/MockLoginIDO-metadata.txt` section E records that on the T10 `MockLoginIDO` Form the Save icon was active (`t10-03`, labelled "accidental change"). The unsaved flag may therefore predate T28. The worker cannot establish its origin.

### Sources (Phase 1)
- AGENTS.md read in full (240 lines). The T28 section read in full (record lines 3229 to the end of T28).
- Existing Form-side and metadata references consulted: `evidence/EXP-128/MockLoginIDO-metadata.txt` (section A, Form-side 36-name list; section G, T22 addendum) and `evidence/EXP-128/MockLoginPortal-form-script.cs.txt` (`ProcessLogin`, `LoadCollection("MockLogin", ...)`). The docs guides were not re-read (continuation rule).

### Tabs and baselines (Phase 1)
- Tab list, before any selection: tab 0 = Designer (`WSWebClient/designer`, URL carries `MGForm=MockLoginIDO`, current at the start); tab 1 = Mongoose Web Client inside the Infor OS portal (URL carries `favoriteContext=IdoCollections`).
- **Designer baseline (tab 0):** console **2 errors / 0 warnings** (same as T27 and T28). Form tab `MockLoginIDO` open and selected. **Save and Regenerate Form are not marked `[disabled]`** in the inline snapshot (the disabled buttons Undo, Redo and Align carry the marker). ScopeType **User**. No dialog. This is **not** the clean Designer that T27 ended with; the operator expected the open `MockLoginIDO` Form, so this was recorded and not treated as a stop.
- **Web Client baseline (tab 1):** console **3 errors / 10 warnings** (same as T27 and T28). IDOs Form open (tab `IDOs`, the only Form tab; the MockLoginPortal tab is absent, as the operator stated). Toolbar **Save `[disabled]`**. No dialog, no sign-in page, no session-expiry modal, no logout card, no server-event error.
- Account context: the header shows the signed-in account (not reproduced here; `<signed-in user>`). Tenant and session placeholders in the tab URLs were not copied.

### Phase 2: confirm the existing MockLogin IDO (gate PASSED on the five listed conditions)
- Open Form is the system IDOs metadata Form (tab `IDOs`, header "IDOs"): **yes**.
- IDO Name exactly `MockLogin`: **yes** (snapshot textbox and screenshot `t29-01`).
- Project Name `Mockup`: **yes** (snapshot combobox and screenshot).
- Save disabled: **yes** (toolbar `[disabled]` in the snapshot; Save icon greyed in `t29-01`).
- No prompt or dialog: **yes**.
- The snapshot and the screenshot agree.
- Note: the gate is satisfied by this observation of the already-open Form. The worker did not perform an exact-match lookup in T29, and the brief forbids one. The IDO's identity is therefore established by the worker's direct observation of its header, Tables and Properties in the open Form, not by a lookup result.
- Screenshot: `evidence/EXP-128/t29-01-mocklogin-ido-initial.png` (viewed). **Proves:** IDO Name `MockLogin`, Project `Mockup`, the header values listed below, the Tables row, Save greyed, no dialog. **Does not prove:** how the state was reached, the total IDO count, or any exact-match query result. The account name is visible unredacted in the header (privacy item D-7).

### Header and Tables (worker-observed in T29; corroborates the operator values)
- IDO Name `MockLogin`; Project Name `Mockup`; Description blank; Label String ID `oMockLogin`; Caption `oMockLogin`; Profile Name blank; Extends blank; Replace disabled and unchecked; IDO Assembly Name blank; Ext Class Name blank; Ext Class Namespace blank; Revision Num `2`; Revision Date `10/16/2026`; Locked By blank; Access As `G6R`.
- Tables tab (visible in `t29-01`): one row, `MockLogin` | `mock_login` | `Primary Base` | `Inner` | Join Text blank.
- Comparison with the operator values: every value matches. No discrepancy. The match is an observation of the same Form, not an independent lookup.
- Custom assembly name and extension class: blank (no value shown).

### Phase 3: Properties (view only; 12 rows; grid end confirmed)
- Procedure: one click on the lower tab `Properties` (ref `f1e1720`, from the most recent snapshot of this task). Screenshot `t29-02`. Then one `browser_mouse_move_xy` to (1100, 760), so the pointer rests over the Properties grid, and two mouse-wheel steps inside the grid (300 px, then 600 px). Screenshots `t29-02b` (after the first step: rows 4 to 12) and `t29-02c` (after the second step: same rows; the grid ends at row 12).
- Columns (header order): Property Name, Sequence, Property Class, Property Type, Column Name, Property Value, Key Sequence, Data Type, Length, Column Type, Read Only, Required, Upper Case, Pseudo Key, Read Only Record.
- Columns Upper Case, Pseudo Key and Read Only Record are to the right of the visible viewport in every screenshot; their values are read from the accessibility snapshot (`evidence/playwright/page-2026-10-25T09-43-25-357Z.yml`, lines 1526 to 1829).

| # | Property Name | Seq | Column Name | Key Seq | Data Type | Length | Column Type | Read Only | Required | Pseudo Key | Read Only Record |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ID | 1 | ID | 1 | Long Integer | blank | int | no | yes | no | no |
| 2 | Username | 2 | Username | 0 | String | 50 | nvarchar | no | yes | no | no |
| 3 | Password | 3 | Password | 0 | String | 255 | nvarchar | no | yes | no | no |
| 4 | Store | 4 | Store | 0 | String | 255 | nvarchar | no | yes | no | no |
| 5 | Role | 5 | Role | 0 | String | 255 | nvarchar | no | yes | no | no |
| 6 | CreatedBy | 6 | CreatedBy | 0 | String | 128 | UsernameType | yes | no | no | no |
| 7 | UpdatedBy | 7 | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | no | no |
| 8 | CreateDate | 8 | CreateDate | 0 | Date | blank | CurrentDateType | yes | no | no | no |
| 9 | RecordDate | 9 | RecordDate | 0 | Date | blank | CurrentDateType | yes | no | no | no |
| 10 | RowPointer | 10 | RowPointer | 0 | GUID | blank | RowPointerType | yes | no | no | no |
| 11 | NoteExistsFlag | 11 | NoteExistsFlag | 0 | Byte | blank | FlagNyType | no | no | no | no |
| 12 | InWorkflow | 12 | InWorkflow | 0 | Byte | blank | FlagNyType | no | no | no | yes |

- Property Type: `Bound to Column` for all 12. Property Class: blank for all 12. Property Value: blank for all 12. Upper Case: no text or checkbox in the accessibility text for any row.
- Screenshots: `t29-02` (rows 1 to about 10 visible; Required and Read Only checkboxes visible); `t29-02b` (rows 4 to 12); `t29-02c` (same as 02b; confirms the end).
- Limitation: the grid's filter state and any hidden rows were not inspected. "End of grid" means the last visible row after a second wheel step did not change.

### Phase 3 (cont.): the five named properties (classification)
- **Username: PRESENT** (row 2; Bound to Column `Username`; String 50; Required).
- **ID: PRESENT** (row 1; Bound to Column `ID`; Key Sequence 1; Long Integer; Required).
- **Password: PRESENT** (row 3; Bound to Column `Password`; String 255; Required).
- **Store: PRESENT** (row 4; Bound to Column `Store`; String 255; Required).
- **Role: PRESENT** (row 5; Bound to Column `Role`; String 255; Required).
- Classification basis: each row is listed in the IDO Properties grid as displayed, and the whole rendered list was inspected to its end. These are not "ABSENT" findings.

### Username discrepancy (record item 50)
- The Form-side primary-collection tree (T10 and T22) listed 36 names and did **not** list `Username`. The Form's `UsernameGridCol` binds `object.Username`.
- **Resolved in part:** `Username` is an actual IDO property (PRESENT, row 2, Bound to Column). The IDO metadata supports the grid binding.
- **Not resolved:** why the Form-side tree did not show `Username`. The tree ended at `UDFMediumText4`, and in alphabetical order `Username` would follow that entry, so a truncated tree display is one possible explanation. This is **not** established.
- Additional discrepancy (recorded, not reconciled): the Form-side tree lists `_ItemId`, `_ItemWarnings` and the UDF* names, which are **not** among the 12 IDO Properties rows. Whether the Properties grid is complete for those names (for example through a hidden filter) was not verified. The Form-side list is not used here as an IDO property source.

### Phase 4: Methods (view only)
- Procedure: one click on the lower tab `Methods` (ref `f1e1722`, from the most recent snapshot of this task). Screenshot `t29-03`.
- Result: the Methods grid shows **column headers only** (`Method Name`, `Method Type`, `Stored Procedure`). The grid body is empty in the accessibility snapshot (`evidence/playwright/page-2026-10-25T09-45-04-236Z.yml`, lines 1425 to 1437) and in the screenshot.
- Interpretation limit: an empty rendered grid is recorded as "no method rows visible in this view". It is **not** evidence that `MockLogin` has no methods. Method names, types, parameters and stored-procedure targets are **unavailable**. No method-detail dialog was opened.
- Screenshot: `evidence/EXP-128/t29-03-mocklogin-methods.png` (viewed). **Proves:** the Methods tab is selected and its grid renders no rows. **Does not prove:** the absence of methods.

### Phase 5: Safe exit
- **IDOs Form closed** with its own tab control (`Close Panel IDOs`, ref `f1e97`, from the most recent snapshot). **No save prompt appeared** (Save was disabled). Post-close snapshot (`evidence/playwright/page-2026-10-25T09-45-30-510Z.yml`): no Form tab list or Form tab in the Web Client; only the portal tabs; Save `[disabled]`.
- The Web Client has **no Form open**. MockLoginPortal was **not** restored (operator instruction).
- **Designer `MockLoginIDO` Form closed** with its own Form-tab control (`closable MockLoginIDO`, ref `e251`, from the most recent Designer snapshot of this task). **A save prompt appeared**, with this exact wording: **"Form MockLoginIDO has changed. Do you want to save the form definition?"** The prompt's toolbar offers **Yes** (shown with active/default focus), **No** and **Cancel**.
- Answer: **No**, by a click on the `No` button (ref `e479`, from the prompt's snapshot). Enter was **not** pressed. Yes and Cancel were not clicked. Nothing was saved.
- Post-No Designer snapshot (`evidence/playwright/page-2026-10-25T09-45-58-399Z.yml`): no Form tab, no dialog, **Save `[disabled]`**, **Regenerate Form `[disabled]`**, ScopeType **User**, console **2 / 0**.
- Accidental change: the "has changed" prompt is a change flag on `MockLoginIDO`. The worker made **no edit** in T28 or T29 (no typing, no keys, no Form edits). The origin is **not established** by T29 (see the historical note above). Recorded as observed; the change was discarded with No.

### Action audit (T29, exact; this task only)
- **Browser actions attempted: 10. Returned ok: 10. Errors: 0.**
  - Tab selections: 2 (tab 1; tab 0).
  - Clicks: 5 (Properties tab `f1e1720`; Methods tab `f1e1722`; `Close Panel IDOs` `f1e97`; `closable MockLoginIDO` `e251`; save-prompt `No` `e479`). Coordinate clicks: 0. Filter in Place clicks: 0.
  - Mouse moves: 1 (`browser_mouse_move_xy` to (1100, 760), a pointer placement for the grid wheel; no click).
  - Mouse-wheel steps: 2 (300 px and 600 px, inside the Properties grid).
  - Typing actions: 0 (typed characters: 0). Key presses: 0. Ctrl+A, Backspace, Delete: 0.
  - Save, OK, Apply, Yes and Cancel clicks: 0. Prompt answered: 1 (No, by click).
  - Navigation, refresh, unload, drags, dialog handling other than the prompt: 0.
- **Browser reads attempted: 11. Returned ok: 11. Errors: 0.**
  - Tab list: 1 (before the first selection). Snapshots, inline: 4 (Designer baseline depth 12; Web Client depth 4; Web Client iframe `e70` depth 6; Web Client panel `f1e98` depth 7); plus the Designer snapshot before the close (depth 12; inline). Screenshots: 5 (`t29-01`, `t29-02`, `t29-02b`, `t29-02c`, `t29-03`).
  - Snapshots written by tool output on click (not separate reads): 4 (`page-…09-43-25-357Z`, `page-…09-45-04-236Z`, `page-…09-45-30-510Z`, `page-…09-45-48-579Z`), plus the post-No snapshot `page-…09-45-58-399Z`. These were read through Grep and Read of repository files.
- **Cumulative** (controller baseline through T28: 388 actions attempted, 369 ok, 19 errors; 536 reads attempted, 517 ok, 19 errors): **with T29: actions 398 attempted (379 ok, 19 errors); reads 547 attempted (528 ok, 19 errors)**, subject to controller reconciliation.
- Redactions: 1 placeholder (`<signed-in user>`) in this text. Credential values read, copied or typed: 0.

### Console and state checks (T29)
- Web Client (tab 1): 3 errors / 10 warnings at baseline, at every later count (Properties click, wheel, Methods click, IDOs close) and after the IDOs close. **No rise.**
- Designer (tab 0): 2 errors / 0 warnings at baseline, after the Form close click, after No, and at the post-No snapshot. **No rise.**
- No server-event error, no sign-in page, no session-expiry modal, no Caption commit.

### Procedural exceptions (carried and new)
- **New:** the T29 Phase 2 gate was passed on the operator's listed conditions, but the IDOs Form was opened by the operator, not by this task; the worker did not reconstruct its state.
- **New:** the pointer was placed over the Properties grid with a coordinate move (`browser_mouse_move_xy`) before the wheel steps. This is a pointer placement for ordinary scrolling and not a click; it is disclosed.
- **New:** the Designer save prompt appeared at close. It was answered No by click, as authorized.
- **Carried:** T23 key presses; T24 named snapshot files; T27 flagged `browser_type` operation; T28 Designer screenshot timeouts (`waiting for fonts to load`, two attempts) and the oversized Web Client snapshot (85,221 characters; saved outside the repository). The T28 Grep of that out-of-repository file was denied and was not retried. In T29 the Designer screenshot did not time out.
- **Carried:** incomplete global Script source coverage; unread `UserControl.js` (D-13); MockLoginPortal copy qualification.

### Worker-written files (T29)
- **Created:**
  - `evidence/EXP-128/t29-01-mocklogin-ido-initial.png` (IDO header and Tables, Web Client; gate evidence)
  - `evidence/EXP-128/t29-02-mocklogin-properties.png` (Properties rows 1 to about 10)
  - `evidence/EXP-128/t29-02b-mocklogin-properties.png` (Properties rows 4 to 12)
  - `evidence/EXP-128/t29-02c-mocklogin-properties.png` (Properties end-of-grid check)
  - `evidence/EXP-128/t29-03-mocklogin-methods.png` (Methods tab, no rows)
  - `evidence/EXP-128/MockLogin-ido-definition.txt` (the observed definition, with operator-supplied values in a separate section; no credential value; 0 redactions of credential values)
- **Modified:** `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (this T29 section appended only).
- **Tool-written, not by the worker (browser action outputs in the repository):** `evidence/playwright/page-2026-10-25T09-43-25-357Z.yml` (Properties; read by Grep and Read of the Properties rows); `page-2026-10-25T09-45-04-236Z.yml` (Methods; read by Grep and Read); `page-2026-10-25T09-45-30-510Z.yml` (IDOs close; read by Grep and Read lines 1 to 40); `page-2026-10-25T09-45-48-579Z.yml` (Designer prompt; read by Grep and Read lines 376 to 386); `page-2026-10-25T09-45-58-399Z.yml` (post-No Designer; read by Grep). Console-event logs `evidence/playwright/console-2026-10-25T09-42-39-290Z.log` and `…-291Z.log` (tab events; not read).
- **Privacy:** the screenshots show the account name unredacted in the header; the snapshot files may contain session-identifier fragments. Review before sharing (as in T22 to T28). The Web Client full snapshot from T28 is outside the repository and was not re-read.

### Acceptance (T29 view)
- **AC-1:** remains **pending**. The session was usable and the scope is User. The starting Designer was **not** clean (`MockLoginIDO` open with the unsaved flag), so the clean-start condition is not met. The Edit menu and Mock Form names were recorded in T1 and are unchanged.
- **AC-2:** unchanged (pending). No Mock Form structure was re-read in T29.
- **AC-3:** **advanced in part; still PENDING.** Now recorded: the `MockLogin` IDO header, Tables row, the complete 12-row Properties list (with Username, ID, Password, Store and Role **PRESENT**), and the empty Methods view. **Not** met: `UserControl.js` remains unread (D-13); the global Script bodies are incomplete (D-8); the WSForm call mapping for the user controls and the login-to-dashboard link remain unverified (Q-3). Even complete IDO metadata does not satisfy AC-3 by itself.
- **AC-4:** unchanged (pending).
- **AC-5:** met for the T29 scope, with disclosed exceptions: the IDOs Form and the `MockLoginIDO` Form were closed (the first with no prompt, the second with a No answer to the save prompt); nothing was saved or created; no credential value read or copied; no typing; User scope throughout; no runtime interaction beyond opening, scrolling and closing; the save-prompt wording and the unsaved flag are disclosed above.

### Result summary (T29)
- **Gate:** PASSED on the five listed conditions in the already-open IDOs Form.
- **MockLogin as an IDO:** **independently observed** in the open Form (header, Tables, Properties) in T29. **Not** confirmed by an exact-match lookup, which T29 did not perform.
- **Properties:** 12 rows. **PRESENT:** Username, ID, Password, Store, Role. Full list in the table above.
- **Methods:** none visible (empty grid). Method details **unavailable**.
- **Form closure:** the IDOs Form closed without a prompt. The `MockLoginIDO` Designer Form closed after a No answer to the save prompt. The Web Client has no Form open; MockLoginPortal not restored.

### Open questions (after T29)
1. Are there IDO methods on `MockLogin`? **Unresolved.** The Methods grid rendered no rows; whether this is an empty set or a display limit was not established.
2. Why did the Form-side tree omit `Username` and list `_ItemId`, `_ItemWarnings` and UDF* names that the IDO Properties grid does not show? **Unresolved.**
3. Origin of the `MockLoginIDO` unsaved flag (T10 history or the operator's T28 inspection). **Unresolved; for the operator.**
4. Operator disposition of the IDO header and Tables observed without a lookup (corroborated by the worker's own T29 observation).
5. `UserControl.js` (D-13); global Script bodies (D-8); the login-to-dashboard link (Q-3); MockInventory collection Options (Q-11); MockLoginPortal blank collection values (Q-10); privacy review of every PNG and snapshot file (D-7); Git review (D-10).

### Status
- EXP-128 is **not accepted**. EXPERIMENT_COMPLETE is **not declared**. T29 stopped at its boundary: the IDO Properties and Methods were inspected view-only, both Forms were closed, and the worker has returned to the coordinator for the operator's deferred acceptance disposition. No query was run and no further task was started.

