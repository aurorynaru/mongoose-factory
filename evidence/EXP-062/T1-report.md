# EXP-062 — T1 read-only preflight and pre-mutation FX_Items User-scope baseline

Run R-20261011-231213-E1AR, cycle 0, task T1. Worker session 9b0b9fe4-1d91-4845-af41-7213db776f76; task_message_id fa975f76-19c0-4e4a-bbd4-c47d334fd337. Date 2026-10-11.

**Outcome of T1: BLOCKED before any mutation.** The Designer session is usable and identity is established (User scope, `anton.ramos@3mworks.com.ph`), but the required prerequisite **FX_Picture is not offered by any Designer binding surface in this session** (AC-2 binding prerequisite NOT satisfied). Per the brief, no component deletion, string creation, Toolbox placement, handler creation, property edit, or Save was performed. Classification: observed only.

## 1. Sources reviewed before the first browser action

- `AGENTS.md` (full).
- `docs/mongoose/transcripts/hello-world-pt4.md`: Section 4 (lines 133–153, narrated 03:00–05:13); the narration names "our edit component" without identifying it and says to set the button caption to `s import` through the Caption ellipsis; Static bound to Picture; No Colon; Import event with Binary Value Action; Primary Event. The file itself warns that exact identities must be observed in the UI.
- `experiments/EXP-058-…md` (full): Event combobox typing creates a custom event (Tab commits); Primary picker lists custom events; grid "Event to generate" lags until Save and reopen; Events > Primary is authoritative.
- `experiments/EXP-057-…md` (keyword-targeted): recent-forms reopen worked at first attempt; FX_VarTestEdit property readbacks.
- `experiments/EXP-056-…md`, `EXP-054-…md`, `EXP-054-R2-…md`, `EXP-050-…md`, `EXP-051-…md`, `EXP-045-…md` (keyword-targeted only; Caption/Static/Primary/Designer-route notes; EXP-054 failed to create a button; EXP-056 recent-forms timeout once).
- `experiments/EXP-061-…md` (full): FX_Picture Bound property added to the FX_Items IDO (one Finish; no Save; no unload); FX_Items IDO left **checked out** to `anton.ramos@3mworks.com.ph`; EXP-061 notes that whether metadata reload is needed before FX_Picture becomes visible is **unknown**.
- Not read: `tools/` (intentionally unreadable).

## 2. Repository baseline (operator-provided session-start git status; not re-verified; no shell)

- Branch `claude-harness`; main `main`; git user `aurorynaru`.
- Pre-existing modifications (not EXP-062 work): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`; untracked `assets/`.
- Recent commits include `6626dd1 EXP-062: approved brief` and `49b2b6a EXP-062: draft brief`.

## 3. Browser session, identity, and clean state (AC-1)

- Tab list (read-only, before any select): tab 0 `(current)` = Designer `…/designer/default.aspx?MGForm=FX_Items`; tab 1 = Web Client `favoriteContext=FX_Items`.
- Tab select: `index 0` issued once after the list (tab 0 already current); succeeded.
- No sign-in, configuration, authentication, or session challenge. No browser-native dialog. No portal notification banner observed.
- Designer tablist: one tab, `FX_Items`, selected.
- Identity: Form tab Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. The operator identity bar (EXP-061) is `anton.ramos@3mworks.com.ph`. The identity matches.
- Toolbar Save **disabled**; Regenerate Form disabled; Undo disabled; Redo disabled (fresh snapshot and screenshot `t1-01`).
- Designer editability: components selectable and properties readable; no mutation was attempted, so edit permission is inferred from the editable controls only.
- Tool-reported page console header: `4 errors, 0 warnings` (not inspected; no console inspection performed by the worker).

Screenshots:
- `evidence/EXP-062/t1-01-designer-initial-identity-scope-save-disabled.png` (viewed). Shows the FX_Items tab, Save and Undo greyed, the footer User scope, FX_VarTestEdit selected in Properties, the Components grid with FX_VarTestEdit highlighted, and the canvas with FX_Refresh and the input fields. Does **not** prove the Form's server-side editing permission.
- `evidence/EXP-062/t1-02-baseline-fx-refreshbutton-selected-caption-unchanged-save-disabled.png` (viewed). Shows FX_RefreshButton (Button) selected, Caption `FX_Refresh`, Save disabled, footer User scope, no dialog. Caption field shows focus only (from dropdown dismissal); value unchanged.
- `evidence/EXP-062/t1-03-final-settled-clean-state-after-binding-dialog-cancel.png` (viewed). Shows FX_UMCombobox (EnhancedCombo) selected, Binding Type Property, Binding `object.FX_UM`, Save disabled, footer User scope, no dialog. Does not prove the server-side state of the IDO.

## 4. Form-level baseline (Form tab; read from accessibility snapshot `evidence/playwright/page-2026-10-11T15-13-11-696Z.yml`)

| Property | Value |
| --- | --- |
| Name | FX_Items |
| Caption | blank |
| Version | User version for user anton.ramos@3mworks.com.ph |
| Device Type | Default |
| Form Type | Normal |
| Is Master | True |
| Theme Class | blank |
| Background Color | blank |
| Foreground Color | #000000 |
| Background Image / Icon | blank |
| Initial Command | Refresh |
| Script Language | Visual Basic |
| Close Box / Minimize-Maximize Box | True / True |
| Filter Form / Enable Advanced Filter | blank / False |
| Help / Help Context ID / Help File Name | blank / -1 / blank |
| Splitter / Splitter Position | Vertical / 11 |
| Pane 0 Scroll Bars / Pane 1 Scroll Bars | Never / As Needed |
| Form Pages | blank |
| Unit | Char |
| Size | 69; 21 |
| Synchronize FlexLayout attributes | True |

## 5. Component baseline (17 entries; grid from snapshot `page-2026-10-11T15-13-11-696Z.yml`; per-component properties from the snapshot written by each row selection)

Grid columns: Name | Type | Data Source | Pane | Container | Tab | Event to generate (grid).

| # | Name | Type | Data Source (grid) | Pane | Container | Tab | Grid "Event to generate" |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | container | — | — | — | — | — |
| 2 | FormCollectionGrid | Grid | objects | 0 | — | 0 | — |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | — |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | — |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | — |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | — |
| 7 | Pane (01) | container | — | — | — | — | — |
| 8 | FX_ItemStatic | Static | — | 1 | — | 5 | — |
| 9 | FX_ItemEdit | Edit | object.FX_Item | 1 | — | 6 | — |
| 10 | FX_DescriptionStatic | Static | — | 1 | — | 7 | — |
| 11 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | — | 8 | — |
| 12 | FX_CostStatic | Static | — | 1 | — | 9 | — |
| 13 | FX_CostEdit | Edit | object.FX_Cost | 1 | — | 10 | — |
| 14 | FX_UMStatic | Static | — | 1 | — | 11 | — |
| 15 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | — | 12 | — |
| 16 | **FX_RefreshButton** | PushButton | — | 1 | — | 0 | **FX_Test** |
| 17 | **FX_VarTestEdit** | Edit | variables.FX_VarTest | 1 | — | 0 | — |

Cardinality: 17 entries; exactly one `FX_VarTestEdit` (Edit, Pane 1, Tab 0); exactly one `FX_RefreshButton` (PushButton, Pane 1, Tab 0). No `FX_PictureStatic` and no `FX_ImportPicture` present.

Per-component Component-tab readbacks (Name / Caption / Type / Binding Type / Binding / Size / Location / Tab Order / Primary):

| Component | Caption | Binding Type | Binding | Size | Location | Tab | Primary (Events) | Snapshot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FX_RefreshButton | `FX_Refresh` (literal) | None | blank | 14.25; 1.89 | 12.1666666666667; 5.25 | 0 | **FX_Test** | `15-13-34-430Z` |
| FX_ItemStatic | `FX_sItem` (string ID) | None | blank | 20; 1 | 1; 3 | 5 | blank | `15-13-56-702Z` |
| FX_ItemEdit | `C(FX_ItemStatic)` | Property | object.FX_Item | 37.05; 2 | 1; 23.75 | 6 | blank | `15-14-04-275Z` |
| FX_DescriptionStatic | `FX_sDescription` | None | blank | 20; 1 | 3.25; 3 | 7 | blank | `15-14-10-904Z` |
| FX_DescriptionEdit | `C(FX_DescriptionStatic)` | Property | object.FX_Description | 37.05; 2 | 3.25; 23.75 | 8 | blank | `15-14-15-355Z` |
| FX_CostStatic | `FX_sCost` | None | blank | 20; 1 | 5.5; 3 | 9 | blank | `15-14-20-050Z` |
| FX_CostEdit | `C(FX_CostStatic)` | Property | object.FX_Cost | 37.05; 2 | 5.5; 23.75 | 10 | blank | `15-14-24-446Z` |
| FX_UMStatic | `FX_sUM` | None | blank | 20; 1 | 7.75; 3 | 11 | blank | `15-14-28-978Z` |
| FX_UMCombobox (EnhancedCombo) | `C(FX_UMStatic)` | Property | object.FX_UM | 37.25; 2.15 | 7.75; 23.75 | 12 | blank | `15-14-33-548Z` |
| FX_VarTestEdit | blank | Variable | variables.FX_VarTest | 37.05; 2 | 12.7222222222222; 30.25 | 0 | blank | snapshot 1 / `t1-01` |

Common readable properties (all components read): Required False; Read-Only/Disable False; Hidden False; From Device Master True (FX_RefreshButton, FX_VarTestEdit); Foreground `#000000`; Theme Class blank; Right-Click Menu: blank for FX_RefreshButton and FX_VarTestEdit, `StdDefault` for FX_UMCombobox (observed in screenshot `t1-03`; other components' Right-Click Menu not individually re-read). Data Change, Lose Focus, Gain Focus blank for all read (FX_RefreshButton: Drag From 0 events, Drop On 0 events).

Limits of the component baseline:
- Pane (00) and Pane (01) Component-tab property trees were not read (EXP-058 documented them as unavailable in this UI).
- The four GridColumn detail properties (Caption, Binding Type) and FormCollectionGrid detail properties were not individually read; the grid row values are listed above.
- The "Specific Attributes" (incl. No Colon) row was not expanded for existing statics; the default No Colon state of existing statics is unknown.
- Non-visible readbacks are from accessibility snapshots; no database read.

### FX_VarTestEdit identity (AC-2; read before any deletion)
- Name `FX_VarTestEdit`; Type Edit; From Device Master True; Caption blank; Theme Class blank; Foreground `#000000`; Read-Only/Disable False; Tab Read-Only Field False; Hidden False; No Tab Stop False; Auto Complete False; Right-Click Menu blank; Enabled When / Visible When / Required When blank; Data Source row blank (the grid shows `variables.FX_VarTest`, the same Data Source gap EXP-058 recorded); Binding Type Variable; Binding `variables.FX_VarTest`; Required False; Location `12.7222222222222; 30.25`; Size `37.05; 2`; Tab Order 0; Primary, Data Change, Lose Focus, Gain Focus blank; Drag From 0 events; Drop On 0 events.
- Distinguished from the variable `FX_VarTest` (Form - Temporary; see §6): the component is the Edit control; the variable is in the Variables tab.

### FX_RefreshButton identity (AC-2)
- Name `FX_RefreshButton`; Type PushButton; Caption literal `FX_Refresh` (not a string ID; Caption ellipsis button present); Binding Type None; Binding blank; Data Source blank; Events > Primary **`FX_Test`** (authoritative property read); Data Change, Lose Focus, Gain Focus blank; Location `12.1666666666667; 5.25`; Size `14.25; 1.89`; Tab Order 0; Help Context ID 0.
- Note: the Components grid "Event to generate" column already reads `FX_Test`, matching the authoritative Primary (the EXP-058 post-reopen state). The pre-change Primary is therefore `FX_Test`, not `StdFormRefresh`.

## 6. Variable, handler, and string baselines (AC-2)

### Variables tab (Details)
- `Form - Persistent`: `InitialCommand` (Form-level).
- `Form - Temporary`: **`FX_VarTest`** — Description blank; Value `~LIT~()`; Persistent False; Global False.
- `Global - Persistent`: inherited global variables (for example `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`); not part of this Form.

### Event Handlers tab (Details; snapshot `page-2026-10-11T15-14-49-376Z.yml`)
- One group **`FX_Test`** (the handler event name):
  - seq 0: Response Type `Prompt`; Disabled `false`; Response Parameters `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`.
  - seq 1: Response Type `Set Values`; Disabled `false`; Response Parameters `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- Exactly two actions, original order, both enabled. **No `StdFormRefreshCompleted` group** and **no `FX_ImportPicture`** present.

### Caption string lookup (FX_sImport absence check; read-only, dropdown only; not created or edited)
- FX_RefreshButton Caption dropdown (read-only open; closed with Escape; value unchanged `FX_Refresh`). The listbox is sorted case-insensitively and lists the string IDs `fWSFormWizardSelection`…`fWSRuntimeWizardReport`, then `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM`, `fXmlToIdoWizard`, `I=HighRecordCount`, `I=NoTaskSubmitted`, and others (snapshot `page-2026-10-11T15-15-48-849Z.yml`, lines ~1122–2361).
- **`FX_sImport` is absent** from that list (alphabetically it would sit between `FX_sDescription` and `FX_sItem`). The creation prerequisite gate is satisfied for a later task, subject to the list being current (cache not checked).

## 7. FX_Picture binding prerequisite (AC-2) — **NOT SATISFIED (blocker)**

Two supported Designer surfaces were read for IDO property `FX_Picture`:

1. **Binding dropdown** of FX_UMCombobox (Binding Type Property; read-only open; closed with Escape; binding unchanged `object.FX_UM`). The listbox (`page-2026-10-11T15-15-17-064Z.yml`, lines ~1128–1166 and the full file) lists `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, `object.FX_Cost`, `object.FX_Description`, `object.FX_Item`, `object.FX_UM`, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1…`, and more. **`object.FX_Picture` is not listed** (whole-file search for "Picture": 0 matches).
2. **Edit Property Binding dialog** (FX_UMCombobox Binding "Open Edit Property Dialog"; read-only; closed with Escape then **Cancel**, no OK). Fields: `Collection: primary collection`; `Property: FX_UM`; checkbox `Load Just In Time (normally only for large binary data)`; OK / Cancel / Help. The Property picker (Open) listed `CreateDate`, `CreatedBy`, `FX_Cost`, `FX_Description`, `FX_UM`, `InWorkflow`, `NoteExistsFlag`, `RecordDate`, `RowPointer`, `UpdatedBy`, `FX_Item`, `_ItemId`, `_ItemWarnings`, `UDFShortText1…7`, `UDFMediumText1…6`, `UDFLongText1…2`, `UDFDateTime1…6`, `UDFInteger1…6`, `UDFDecimal1…6`, `UDFRecordDate`, `UDFRowPointer` (list ends there). **`FX_Picture` is not listed** (whole-file search for "Picture": 0 matches; snapshot `page-2026-10-11T15-16-44-478Z.yml`).

Interpretation (not verified):
- EXP-061 recorded that `FX_Picture` exists on the IDO (12 properties) in IDO Collections, with the FX_Picture column and class in place.
- The Designer's IDO property list in this Form session does **not** include FX_Picture. The most likely explanation is a stale cached IDO/global-object metadata state in the Designer session (EXP-061 left the question open; the tutorial's narrated step is to unload global form objects). Other explanations (for example, binary properties filtered from the picker) are **not excluded** by the evidence; the dialog's "Load Just In Time (…binary data)" checkbox suggests binary properties are a supported binding type, which argues against a type filter.
- Resolution would need an operator decision: a metadata/global-object unload, a Designer relaunch, or an IDO check-in state change. **All of these are out of scope for this task** (brief: no unload, cache operation, FormSync, checkout-management, or Designer relaunch). The worker did not attempt any of them.

Per the brief: "If it is missing, ambiguous, or unavailable, stop before saving and report the blocker." The Form was not changed.

## 8. Observation: URL query changed after Cancel (not explained)

- Before the binding dialog was opened, the Designer URL was `…/WSWebClient/designer/default.aspx?MGForm=FX_Items` (tool-reported page URL in the snapshots through `15-16-44-478Z`).
- After the dialog's **Cancel** click, the tool reported `…/WSWebClient/designer/default.aspx` (no query); a subsequent tab list also shows that URL.
- Post-Cancel state: FX_Items tab still selected; Save, Regenerate, Undo, Redo disabled; Components selection (FX_UMCombobox), Properties (Component tab, Binding `object.FX_UM`) and footer User scope all unchanged; no dialog. The Designer did **not** reopen the Form and no reload was requested by the worker. Whether the SPA rewrote its URL state or a page navigation occurred is **unresolved** (no console or network inspection was performed, by brief).

## 9. Complete action audit (T1, cumulative; zero mutations)

| Action | Count |
| --- | --- |
| Tab list (read-only) | 2 (before first select; final) |
| Tab select | 1 (index 0; after list) |
| Untargeted snapshot | 1 (initial) |
| Targeted snapshot | 1 (`e7630`; returned only a Foreground Color row; uninformative) |
| Screenshot | 5 calls: 2 TimeoutError (`waiting for fonts`), then 3 successful (`t1-01`, `t1-02`, `t1-03`) |
| Properties-panel tab click (Form / Component view) | 1 Form; Component already selected by default |
| Details-panel tab click (Event Handlers / Variables / Components view) | 3 |
| Component row selections (view only) | 11 (FX_RefreshButton ×2, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox ×2) |
| Dropdown open (read-only) | 2 (Binding dropdown on FX_UMCombobox; Caption dropdown on FX_RefreshButton) |
| Edit Property Binding dialog open (read-only) | 1 |
| Property picker open inside that dialog (read-only) | 1 |
| Escape key (dismiss dropdown / picker; no selection) | 3 |
| **Cancel** on Edit Property Binding dialog (no OK) | 1 |
| browser_find (read-only) | 7 |
| Typing | 0 |
| Form or Component value changed | **0** |
| Save / Regenerate / Undo / Redo invoked | 0 / 0 / 0 / 0 |
| Component delete / New / Copy / Paste | 0 / 0 / 0 / 0 |
| String creation / handler creation / Toolbox placement | 0 / 0 / 0 |
| Designer close / reopen / Form open | 0 / 0 / 0 |
| Browser reload or navigate call by the worker | 0 |
| Runtime interaction (FX_Items runtime, Web Client tab) | 0 |
| IDO Collections / checkout / check-in / undo checkout | 0 / 0 / 0 / 0 |
| Browser JavaScript, run-code, console or network inspection by the worker | 0 |
| Dialogs answered with OK | 0 |
| Dialogs cancelled | 1 (Edit Property Binding; no commit) |
| Tool-timeouts | 2 (screenshot, fonts) |
| Ref-not-found errors | 0 |

Recovery disclosure: the first two screenshot calls both timed out at "waiting for fonts" (a rendering-side timeout on a non-mutating read; no locator or ref failure). I then issued one tab select (index 0, after the tab list) and a third screenshot, which succeeded. That is one more retry than the brief's "one retry" guidance for locator failures; I am disclosing it rather than treating it as compliant. No mutation was retried.

## 10. Worker-written and tool-written file inventory (T1)

Worker-written (this task):
- `experiments/EXP-062-hello-world-part-4-section-4-configure-picture-import-ui.md` (created)
- `evidence/EXP-062/T1-checkpoint.md` (created; superseded by this report)
- `evidence/EXP-062/T1-report.md` (this file; created)
- `evidence/EXP-062/t1-01-designer-initial-identity-scope-save-disabled.png`
- `evidence/EXP-062/t1-02-baseline-fx-refreshbutton-selected-caption-unchanged-save-disabled.png`
- `evidence/EXP-062/t1-03-final-settled-clean-state-after-binding-dialog-cancel.png`

Tool-written (not worker-written; outside the EXP-062 path; accessibility snapshots and console log written by the browser tool into `evidence/playwright/`; the operator's git review decides their confinement):
- `evidence/playwright/page-2026-10-11T15-13-11-696Z.yml` (Form tab)
- `evidence/playwright/page-2026-10-11T15-13-34-430Z.yml` (FX_RefreshButton)
- `evidence/playwright/page-2026-10-11T15-13-56-702Z.yml` (FX_ItemStatic)
- `evidence/playwright/page-2026-10-11T15-14-04-275Z.yml` (FX_ItemEdit)
- `evidence/playwright/page-2026-10-11T15-14-10-904Z.yml` (FX_DescriptionStatic)
- `evidence/playwright/page-2026-10-11T15-14-15-355Z.yml` (FX_DescriptionEdit)
- `evidence/playwright/page-2026-10-11T15-14-20-050Z.yml` (FX_CostStatic)
- `evidence/playwright/page-2026-10-11T15-14-24-446Z.yml` (FX_CostEdit)
- `evidence/playwright/page-2026-10-11T15-14-28-978Z.yml` (FX_UMStatic)
- `evidence/playwright/page-2026-10-11T15-14-33-548Z.yml` (FX_UMCombobox)
- `evidence/playwright/page-2026-10-11T15-14-49-376Z.yml` (Event Handlers)
- `evidence/playwright/page-2026-10-11T15-14-56-597Z.yml` (Variables)
- `evidence/playwright/page-2026-10-11T15-15-10-135Z.yml` (Components view)
- `evidence/playwright/page-2026-10-11T15-15-17-064Z.yml` (**Binding dropdown: FX_Picture absent**)
- `evidence/playwright/page-2026-10-11T15-15-43-563Z.yml` (FX_RefreshButton reselect)
- `evidence/playwright/page-2026-10-11T15-15-48-849Z.yml` (**Caption dropdown: FX_sImport absent**)
- `evidence/playwright/page-2026-10-11T15-16-28-845Z.yml` (FX_UMCombobox reselect)
- `evidence/playwright/page-2026-10-11T15-16-33-458Z.yml` (**Edit Property Binding dialog open**)
- `evidence/playwright/page-2026-10-11T15-16-44-478Z.yml` (**Property picker: FX_Picture absent**)
- `evidence/playwright/page-2026-10-11T15-17-03-028Z.yml` (post-Cancel)
- `evidence/playwright/console-2026-10-11T15-12-29-020Z.log` (tool console log; not inspected by the worker)
- A targeted snapshot (`e7630`) and the initial untargeted snapshot returned inline and wrote no file.

Note: `evidence/playwright/` is the browser tool's output directory. Whether it is gitignored must be confirmed by operator review.

## 11. Acceptance status after T1

| AC | Status | Evidence |
| --- | --- | --- |
| AC-1 | Supported (observed): AGENTS.md and Section 4 and prior records reviewed; usable Designer; no challenge; FX_Items User-scope identity; Save disabled | §1, §3; `t1-01`, `t1-02`, `t1-03` |
| AC-2 | **Partially supported; binding prerequisite NOT satisfied.** Full component/handler/variable/geometry baseline captured; FX_VarTestEdit and FX_RefreshButton identified singly; FX_VarTest and FX_Test (two actions) recorded; FX_ImportPicture absent. FX_Picture **absent** from both Designer binding surfaces. | §5–7; snapshots listed in §10 |
| AC-3 to AC-12 | Not started (deletion, string creation, placement, binding, handler, Primary, Save, close/reopen, runtime). Blocked by the FX_Picture prerequisite and out of T1 scope. | — |

Knowledge state (per finding):
- Designer identity (FX_Items, User, anton.ramos@3mworks.com.ph), Save disabled, clean state: **observed** (one session).
- Component inventory (17 entries; cardinality of FX_VarTestEdit and FX_RefreshButton) and readbacks above: **observed** (one session; Pane and GridColumn detail limits recorded).
- FX_RefreshButton Primary = `FX_Test` (authoritative property) with the Caption `FX_Refresh` literal: **observed**.
- Handler group `FX_Test` with two enabled actions; no StdFormRefreshCompleted; no FX_ImportPicture: **observed**.
- FX_VarTest Form - Temporary, Value `~LIT~()`, Persistent False, Global False: **observed**.
- `FX_sImport` absent from the Caption string list: **observed** (one run; the list is the Designer's current view; cache not checked).
- `FX_Picture` absent from the Designer's binding list and dialog property list: **observed** (two surfaces, one session). Cause (stale metadata versus picker filtering): **unresolved**.
- The post-Cancel URL query loss: **observed**; cause **unresolved**.
- No replay or procedure claim is made. Nothing in this task is replay_verified.

## 12. Open questions and blockers

1. **BLOCKER (AC-2 prerequisite):** `FX_Picture` is not offered by the Designer binding selector or the Edit Property Binding dialog in this session, although EXP-061 reports it on the IDO. Decision needed from the operator on how to make the property visible to the Designer (for example, an explicitly authorised metadata unload, a Designer relaunch, or a documented IDO refresh). The worker did not act on this.
2. The post-Cancel URL-query change needs an operator explanation (SPA state update versus navigation). No reload was requested.
3. Pane (00) and Pane (01) properties and GridColumn detail properties were not read (documented limitation; consistent with EXP-058).
4. The Designer console error count (4, tool-reported) has not been inspected; per brief, no console inspection.
5. The existing statics' default No Colon state (Specific Attributes row) is unknown; not expanded.
6. Confirm the Designer Save remains disabled and the FX_Items IDO remains checked out to the operator (EXP-061 state; not re-read in T1, as the IDO surfaces were out of T1 scope).
