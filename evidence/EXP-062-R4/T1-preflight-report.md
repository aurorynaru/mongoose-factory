# EXP-062-R4 — T1 read-only preflight, baseline, and Form-size investigation

Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 0, task **T1**.
Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `ca311ac6-0042-460c-aa9a-a8e8fcc74f39`.
Date 2026-10-12 (browser clock shows 2026-10-11 in tool file names). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Experiment record: `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md`.

## 1. Outcome

- **T1 completed read-only. No Form change was made.** Save was never invoked (disabled throughout). No component, string, handler, binding, Caption, Primary, or Form-level property was changed.
- **Identity, scope, clean state, and discard: established.** FX_Items reopened on the first recent-forms attempt. Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled. FX_VarTestEdit present; FX_RefreshButton Caption `FX_Refresh`, Primary `FX_Test`; no default-named Static (17 entries, none new).
- **FX_Picture: offered** by the native Binding picker (`object.FX_Picture` between `object.FX_Item` and `object.FX_UM`). Dismissed with Escape; binding still `object.FX_UM`.
- **FX_sImport: ABSENT** (not `Import`). The Caption string list shows only `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM`. The Edit > String (Global Objects) filter for `FX_sImport` returned no rows. Cancelled with no commit. **AC-2's string sub-check is not met as written.** The brief's step text allows creation when the string is absent (see §8 and the experiment record).
- **Form width: no unambiguous editable Form width field.** Form tab Layout > Size reads `69; 21`. The Design View Size tab shows a greyed `Form` group (69/21) and an editable `View` group (69/21). The View group is the Designer view setting the brief forbids changing. **Fallback chosen**: the picture Static goes in the free area below the input column, not a Form width edit.
- **Starting state differed from the brief's expectation.** At task start the browser had one Web Client tab (`Mongoose`, `favoriteContext=IdoCollections`) and no Designer tab. The R3 Designer session was gone. The Designer was launched from the Web Client (Form > Definition > Designer), then the Identify Your Editing Scope dialog was confirmed with its pre-filled values (Scope User; anton.ramos@3mworks.com.ph). See §2.

## 2. Starting state and route (observed)

| Step | Observation | Evidence |
| --- | --- | --- |
| Browser tab list (before any select) | 1 tab: Web Client `Mongoose` (`favoriteContext=IdoCollections`). No Designer tab. | `t1-01`, tab list |
| Web Client state | Explorer; no Form open; no challenge, no dialog, no portal banner. | `t1-01` |
| Designer launch | Web Client Form menu > Definition > Designer (menu item listed; Sign Out not clicked). New Designer tab (tab 1) opened at `…/WSWebClient/designer/Default.aspx`. | tab list after launch |
| Editing-scope dialog | "Identify Your Editing Scope": Scope `User`; User `anton.ramos@3mworks.com.ph`. OK clicked once. | `t1-02` (no-Form state after OK) |
| Designer before Form open | No Form tab; footer User / anton.ramos; Save, Regenerate Form, Undo, Redo disabled. | `t1-02` |
| Open FX_Items | Designer Form menu > recent list > `FX_Items` (first attempt; success; no retry; no fallback). URL gained `MGForm=FX_Items`. | `t1-03` |

Decision to note (not in the brief): the brief assumed an existing Designer tab. Launching the Designer from the Web Client was the supported route the tutorial uses ("launch Designer from runtime"). No authentication, configuration, or preference was changed. The coordinator should confirm this route is acceptable.

## 3. Identity, scope, cleanliness, and discard (AC-1)

| Check | Result | Evidence |
| --- | --- | --- |
| Form tab Name | `FX_Items` | `t1-03`; snapshot readback |
| Version | `User version for user anton.ramos@3mworks.com.ph` | `t1-03` |
| Footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t1-03`, `t1-07` |
| Save / Regenerate Form / Undo / Redo | Save disabled and Regenerate disabled. Undo and Redo disabled at identity; Undo/Redo remained disabled afterward. | `t1-03`, `t1-07` |
| Dialogs / challenge | None at any point (no Session Expired alert; the R3 error did not recur). | snapshots |
| FX_VarTestEdit present | Yes (Edit, Binding Variable `variables.FX_VarTest`, Pane 1, Tab 0) | `t1-04` |
| FX_RefreshButton Caption / Primary | Caption literal `FX_Refresh`; Event to generate / Primary `FX_Test` | `t1-04`, `t1-07` |
| Default-named Static (e.g., `static1_USER`) | None. 17 entries; names match the EXP-062-R2 T1 baseline exactly. | `t1-04` |

Discard confirmed against the saved definition: the saved Form matches the EXP-062-R2 T1 baseline (17 components, FX_VarTestEdit present, Caption `FX_Refresh`, Primary `FX_Test`). The R2 unsaved changes (FX_VarTestEdit deletion, Caption `FX_sImport`, `static1_USER`) are not present.

## 4. Complete component baseline (AC-2)

Components-tab grid: 17 entries, Pane (00) through FX_UMCombobox. Readbacks from the Properties Component tab after Expand (the Expand control was clicked once per component). Layout values are the `Size` and `Location` rows under Layout.

| # | Name | Type | Pane | Container | Tab | Binding Type / Binding | Caption | Size | Location | Primary |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | | | | | | not read | not read | |
| 2 | FormCollectionGrid | Grid | 0 | | 0 | Primary Collection Grid / `objects` | | `11; 21` | `0; 0` | |
| 3 | FX_ItemGridCol | GridColumn | 0 | FormCollectionGrid | 1 | `object.FX_Item` | | not read | not read | |
| 4 | FX_DescriptionGridCol | GridColumn | 0 | FormCollectionGrid | 2 | `object.FX_Description` | | not read | not read | |
| 5 | FX_CostGridCol | GridColumn | 0 | FormCollectionGrid | 3 | `object.FX_Cost` | | not read | not read | |
| 6 | FX_UMGridCol | GridColumn | 0 | FormCollectionGrid | 4 | `object.FX_UM` | | not read | not read | |
| 7 | Pane (01) | Pane | | | | | | not read | not read | |
| 8 | FX_ItemStatic | Static | 1 | | 5 | None / blank | `FX_sItem` | `20; 1` | `1; 3` | blank |
| 9 | FX_ItemEdit | Edit | 1 | | 6 | Property / `object.FX_Item` | `C(FX_ItemStatic)` | `37.05; 2` | `1; 23.75` | blank |
| 10 | FX_DescriptionStatic | Static | 1 | | 7 | None / blank | `FX_sDescription` | `20; 1` | `3.25; 3` | blank |
| 11 | FX_DescriptionEdit | Edit | 1 | | 8 | Property / `object.FX_Description` | `C(FX_DescriptionStatic)` | `37.05; 2` | `3.25; 23.75` | blank |
| 12 | FX_CostStatic | Static | 1 | | 9 | None / blank | `FX_sCost` | `20; 1` | `5.5; 3` | blank |
| 13 | FX_CostEdit | Edit | 1 | | 10 | Property / `object.FX_Cost` | `C(FX_CostStatic)` | `37.05; 2` | `5.5; 23.75` | blank |
| 14 | FX_UMStatic | Static | 1 | | 11 | None / blank | `FX_sUM` | `20; 1` | `7.75; 3` | blank |
| 15 | FX_UMCombobox | ComboBox (EnhancedCombo) | 1 | | 12 | Property / `object.FX_UM` | `C(FX_UMStatic)` | `37.25; 2.15` | `7.75; 23.75` | blank |
| 16 | FX_RefreshButton | PushButton | 1 | | 0 | None / blank | literal `FX_Refresh` | `14.25; 1.89` | `12.1666666666667; 5.25` | `FX_Test` |
| 17 | FX_VarTestEdit | Edit | 1 | | 0 | Variable / `variables.FX_VarTest` | blank | `37.05; 2` | `12.7222222222222; 30.25` | blank |

Other FX_RefreshButton readbacks (Component tab): Name `FX_RefreshButton`; Type PushButton; From Device Master True; Read-Only/Disable False; Tab Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Required False; Upper or Lower Case Mixed; Data Change / Lose Focus / Gain Focus blank; Drag From Events 0; Drop On Events 0; Unit Char; Tab Order 0.

Other FX_VarTestEdit readbacks: From Device Master True; Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Required False; To Be Determined False; Upper or Lower Mixed; Unit Char; Glue and Containment blank.

Limits: Pane (00), Pane (01), and the four GridColumn Layout values were not read (the grid columns are not positioned by Size/Location in this readback). The Specific Attributes group (No Colon) was not read for existing Statics (not required for the baseline).

Known readback-to-canvas inconsistency (unchanged from R2, now re-observed): the Edit Location y values (23.75) do not match the canvas row order (the Item edit box sits on the same row as the Item label, whose Static y is 3). Edit x values (1, 3.25, 5.5, 7.75) are not visually staggered on the canvas. Unresolved.

## 5. FX_VarTest variable, FX_Test handler group, FX_ImportPicture (AC-2)

- Variables tab: Form - Persistent `InitialCommand`; Form - Temporary `FX_VarTest`; Global groups (ccvw_*, gbgc_*) not in scope. FX_VarTest readback: Value `~LIT~()`; Persistent False; Global False.
- Event Handlers tab (group expanded once for view): one group `FX_Test`, two actions, both disabled `false`:
  - seq 0 Prompt — `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`
  - seq 1 Set Values — `SETVARVALUES(FX_VarTest=P(FX_Description))`
- `FX_ImportPicture`: **absent** (no other handler group listed).
- `FX_PictureStatic`: **absent** (not in the component list).

## 6. Prerequisite checks (read-only; no commit)

### 6a. FX_Picture binding picker (AC-2)

- Opened FX_UMCombobox's Binding dropdown (read-only arrow on `object.FX_UM`).
- The open list includes `object.FX_Picture` (between `object.FX_Item` and `object.FX_UM`). Screenshot `t1-06` taken while the list was open.
- Dismissed with Escape. Binding still `object.FX_UM`; no `object.FX_Picture` in the closed state. No commit.

### 6b. FX_sImport string (AC-2)

- Caption dropdown on FX_RefreshButton (read-only; arrow only). The FX_-prefixed entries are `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM`. `FX_sImport` would sort between `FX_sDescription` and `FX_sItem` and is not listed. Dismissed with Escape; Caption still `FX_Refresh` (`t1-07`).
- Second surface: Edit > String (Global Objects dialog). The filter text `FX_sImport` (typed with key events) returned no rows. Cancelled (no OK). URL lost its `MGForm` query after Cancel (same as R2, cause unresolved); the FX_Items tab stayed selected, Save disabled, footer User (checked with find).
- **Result: FX_sImport absent in this session.** No value is available to read, so the "value Import" readback was not obtained. The R2 string created in the discarded session did not persist (inference from absence; cause not verified).
- The Global Objects filter was tested only with this one term. Its behavior with other terms is unverified.

## 7. Form-size investigation (AC-3; read-only; no change)

### 7a. Properties panel, Form tab, Layout section (every field read; units as displayed)

| Field | Value | Unit / note |
| --- | --- | --- |
| Splitter | Vertical | enum |
| Splitter Position | 11 | number (no unit shown) |
| Pane 0 Scroll Bars | Never | enum |
| Pane 1 Scroll Bars | As Needed | enum |
| Form Pages | (Open Edit Property Dialog button; value blank) | dialog |
| Unit | Char | units for Size |
| **Size** | **69; 21** | **Char; W; H** (the Form's only Size row; no separate Width field) |
| Synchronize FlexLayout attributes | True | boolean |

Other Form tab rows (Design): Name `FX_Items`; Description blank; Caption blank (dropdown + ellipsis); Version `User version for us…` (truncated in grid); Device Type Default; Form Type Normal; Is Master True. Behavior: Initial Command `Refresh`; Script Language Visual Basic; Close Box True; Minimize/Maximize Box True; Filter Form blank; Enable Advanced Filter False. Appearance: Foreground `#000000`; Theme Class blank.

Limit: the Size row's value was read from the Form tab snapshot. The Form tab screenshot does not show the Size row (it sits below the visible area). Snapshot readbacks are the evidence for it.

### 7b. Details > Design View Size tab (screenshot `t1-05`)

| Group | Field | Value | Visual state |
| --- | --- | --- | --- |
| Form | Width | 69 | grey (read-only look) |
| Form | Height | 21 | grey (read-only look) |
| View | Width | 69 | white (editable look) |
| View | Height | 21 | white (editable look) |

Toolbar: `Update`, `Revert Form Definition`. Neither was clicked. The `View` group is the Designer view size that the brief forbids changing.

### 7c. Canvas extent (screen pixels; from `t1-03`/`t1-04`, viewport at 1920×945 CSS px)

- Form canvas outline: about x 258–810, y 100–480. The red border sits at x ≈ 810 and y ≈ 480.
- Pane (00) FormCollectionGrid: about x 258–345 (Item column header visible).
- Input column: labels x ≈ 381–541; input boxes x ≈ 548–810 (clipped at the canvas right edge).
- FX_RefreshButton: x ≈ 400–513, y ≈ 320–353.
- FX_VarTestEdit: x ≈ 600–810, y ≈ 330–365 (to be deleted in the next task).
- Free area below the input column, clear of FX_RefreshButton once FX_VarTestEdit is deleted: about x 530–805, y 290–478.

### 7d. Decision for the next task (recorded; not applied)

- **Conditional Form width edit: not authorized by the brief's own test.** The Form-level Size (69; 21) is not clearly the editable field. The only editable width is the View group, which is a Designer view setting. Changing it is out of scope. Meaning is ambiguous, so the brief's fallback applies: no Form-level change; place FX_PictureStatic in the free area below the input column, clear of FX_RefreshButton.
- **Readback-derived position is not usable as-is.** The brief's formula gives x = rightmost input Location x (7.75 for FX_UMCombobox) + width (37.25) + 2 = 47.0 and y = topmost input Location y (23.75). Size 20; 9 at (47.0; 23.75) extends to y 32.75 and x 67.0. The declared Form height is 21, so this position is outside the Form extent. The formula therefore cannot be used without a visual check. The next task must choose a position visually inside the free area, then record the Location readback.

## 8. Discrepancies and open items

1. **FX_sImport absent** (vs. AC-2 "exists with value Import"). The brief's step allows creation through the Caption ellipsis with literal `Import` when the read-only check finds it absent. Coordinator decision needed: confirm this branch for the next task, or stop.
2. **Designer tab absent at start**; the Designer was launched from the Web Client (decision in §2).
3. **Readback-to-canvas inconsistency** for Edit Location (§4) and the derived position falling outside the Form height (§7d). Unresolved.
4. **Pane and GridColumn Layout values** not read (limitation).
5. **Form width:** no editable Form width (§7). Fallback chosen.
6. **Global Objects filter** tested with one term only (§6b).

## 9. Action audit (T1, cumulative; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list | 1 | Before any select |
| Browser tab select | 1 | Index 1 (new Designer tab), after the list |
| Browser clicks | 48 | Includes Web Client menu clicks (2 menus + Designer item), scope-dialog OK (1), Designer Form menu (1), recent-forms FX_Items (1), Expand/collapse and tab selections (view), tree-row selections (view), Binding and Caption arrow opens (2), Edit menu and String item (2), Global Objects Cancel (1) |
| Browser type | 2 | `FX_s` (fill, filter only); `Import` (slow key events, filter only). No value committed |
| Browser press_key Escape | 2 | Binding picker; Caption list |
| Browser find | 19 | Read-only; 1 broad query (`Edit`) returned a large result; no change |
| Browser wait_for | 2 | 2 s each |
| Browser snapshot (explicit) | 7 | 5 untargeted; 2 targeted (one a narrow separator read, one the dialog) |
| Screenshots | 7 | `t1-01` … `t1-07` |
| Browser navigate, reload, new tab (worker) | 0 | The Designer tab opened from a click, not navigation |
| Browser JavaScript, console, network, tracing | 0 | |
| Coordinate mouse actions, drag, file upload | 0 | |
| Designer Save | **0** | Disabled throughout |
| Form close | 0 | |
| Form reopen | 0 | First open only |
| Designer launch | 1 | From the Web Client (Form > Definition > Designer) |
| Editing-scope dialog confirmed | 1 | OK, values already User / anton.ramos@3mworks.com.ph |
| Designer top-toolbar Delete (Delete Form Definition) click | **0** | Never clicked |
| Components-grid trash click | 0 | |
| Component add / delete | 0 / 0 | |
| String create | 0 | |
| Handler create | 0 | |
| Binding, Caption, or Primary commit | 0 | Pickers opened and dismissed with Escape |
| Form width change | 0 | Fallback chosen |
| Revert Form Definition or Update (Design View Size) click | 0 | Not clicked |
| Unload (Web Client or Designer) | 0 | |
| Runtime FX_Items open or import | 0 | |
| Business record change | 0 | |
| Preference change | 0 | |
| IDO checkout / check-in / undo | 0 | |
| Auth, sign-out, reauthentication, restart | 0 | Sign Out menu item was not clicked |
| Panel state change | 1 | Details panel expanded (UI layout, not a Designer view setting) |

## 10. Worker-written file inventory (T1)

Written by the worker (Write tool or screenshot request):
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (created)
- `evidence/EXP-062-R4/T1-preflight-report.md` (this file; created)
- PNG screenshots under `evidence/EXP-062-R4/` (7 files, created): `t1-01-start-single-webclient-tab-no-designer-tab.png`, `t1-02-designer-launched-from-webclient-definition-menu-no-form-open.png`, `t1-03-fx_items-reopened-recent-forms-identity-scope-save-disabled.png`, `t1-04-components-grid-expanded-17-entries-discard-check.png`, `t1-05-details-design-view-size-tab-width-69-height-21-readonly.png`, `t1-06-binding-picker-open-lists-object-fx-picture-readonly.png`, `t1-07-caption-list-readonly-fx_sImport-absent-after-escape-caption-unchanged.png`

Tool-written, not requested (under `evidence/playwright/`): accessibility snapshot files with timestamps `page-2026-10-11T16-37…` to `page-2026-10-11T16-43…`. The exact count was not verified in this session; the harness inventory is authoritative. No other repository file was written by the worker.

## 11. Acceptance matrix (T1 scope)

| AC | Status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported (observed, one session)**: session usable, no challenge; FX_Items reopened from the saved definition (first recent-forms attempt); Name/Version/footer/Save disabled; discard confirmed | `t1-02`, `t1-03`, `t1-04`, `t1-07`; §2–3 | Designer launched fresh from the Web Client (not an existing tab); User-scope edit permission inferred from editable controls |
| AC-2 | **Partial**: baseline and FX_VarTest, FX_Test (two actions), FX_ImportPicture absent, and FX_Picture offered are observed; **FX_sImport is absent** (value Import not readable) | `t1-04`, `t1-06`, `t1-07`; §4–6 | Pane and GridColumn Layout values not read; Edit y-readbacks unreconciled |
| AC-3 | **Supported for the investigation** (readbacks, no change). Fallback chosen; no Form width edit | `t1-05`; §7 | Form Layout Size readback from the snapshot (not screenshot); coordinate mapping unresolved |
| AC-4 to AC-13 | Not attempted (outside T1) | — | — |

## 12. Knowledge state

| Finding | State |
| --- | --- |
| Designer launch from the Web Client Form > Definition > Designer gives a new Designer tab; the editing-scope dialog is pre-filled with User / operator | observed (one session) |
| FX_Items reopens from the recent-forms list on the first attempt; identity User; Save disabled; no challenge | observed (one session) |
| Discard confirmed: 17 components; FX_VarTestEdit present; Caption `FX_Refresh`; Primary `FX_Test`; no default-named Static | observed (one session) |
| Component baseline (§4) | observed (one session); Pane and GridColumn Layout not read |
| FX_VarTest (`~LIT~()`, Form-Temporary, Persistent False, Global False); FX_Test (two actions); FX_ImportPicture absent | observed |
| FX_Picture offered by the native binding picker | observed (one session) |
| FX_sImport absent from the Caption list and from the Global Objects filter | observed (one session); cause unresolved |
| R2's string creation did not persist after the discarded session | observed as absence; not verified |
| Form tab Layout Size 69; 21 (Char); Design View Size Form group greyed, View group editable | observed (one session) |
| Brief's right-of-input formula yields y 23.75 with height 21 | observed (arithmetic from readbacks; canvas unit mapping unresolved) |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 13. Blockers and next permitted action

- **No blocker stops T1.** T1 is complete as a read-only preflight.
- **Decision needed before the next task:** (a) confirm FX_sImport creation through the Caption ellipsis (literal `Import`) under the brief's absent branch, or stop; (b) confirm the Designer launch route used in T1; (c) confirm the free-area fallback (below the input column) and the visual placement method (readback unreliable as in §7d).
- Next permitted action: none in T1. FX_VarTestEdit deletion, string creation, Static placement, binding, No Colon, FX_ImportPicture, Primary, and Save are **not** performed. The Designer remains open on FX_Items (User), clean, Save disabled, with FormCollectionGrid selected.
