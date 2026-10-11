# EXP-062-R2 — T1 read-only preflight report

Run `R-20261011-233114-6TXk`, experiment EXP-062-R2, cycle 0, task **T1** (read-only preflight, baseline, preference reading, record creation).
Worker session `1a1726ce-7754-4c7b-81f9-602aedcce8ec`; task_message_id `0617ab24-7194-4a1f-8578-8b06512ee837`.
Date 2026-10-11. LEARNING MODE. Editing scope **User**. Target Form `FX_Items`.
Experiment record: `experiments/EXP-062-R2-hello-world-part-4-section-4-picture-import-ui.md`.

## 1. Outcome

- Designer identity established: Form `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. No sign-in or configuration challenge, no browser-native dialog, no unsaved-change state. Save disabled.
- Preference gate read: `Unload IDO Metadata With Forms` is **checked** (read-only; dialog closed with `Close Window`, not OK; no change).
- Runtime: two `FX_Items` runtime Form tabs are open, both clean (Save disabled). No other runtime Form tab was touched.
- Pre-unload binding check: `object.FX_Picture` is **absent** from the Binding dropdown of `FX_UMCombobox` (sorted list checked; dismissed without commit). This matches the EXP-062 blocker and is expected before the authorized unload.
- FX_sImport absent from the string list (read-only Caption dropdown; dismissed without commit).
- **No unload was invoked. No Form change, component deletion, string creation, handler creation, binding commit, Caption change, Primary change, Save, Form close, or Form reopen was performed.** Stopped at the T1 boundary, before the unload step.

## 2. Repository baseline (operator-provided at conversation start; not re-verified, no shell)

- Branch `claude-harness`. Modified (operator-provided git status): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. Untracked: `assets/`.
- Recent commits: `b39bfa4` (EXP-062-R2 approved brief), `4cd8984` (EXP-062-R2 draft brief), `ac790aa` (EXP-062 blocked), `6626dd1`, `49b2b6a`.
- Pre-existing changes are not worker-authored. The harness computes confinement from before/after Git state; operator git review is authoritative.

## 3. Source review (completed before browser interaction, read-only)

- `AGENTS.md`: read in full (LEARNING MODE; FX_ scope; evidence capture; recovery rules).
- `docs/mongoose/transcripts/hello-world-pt4.md`:
  - Section 3 (lines 119–131), step 7: "Close the form and unload global form objects as the tutorial directs."
  - Section 4 (lines 133–153), steps 1–13: delete "our edit component" (not identified by name in the tutorial; the brief identifies FX_VarTestEdit), reposition button, Caption via `s import` (string created via the Caption ellipsis), Static bound to Picture with No Colon True, Save, custom event `Import Picture` with Binary Value Action (Import; Static Picture), button Primary = Import Picture, Save.
  - Full transcript unload narration: lines 419–420 (about 2:00–2:08, global form objects), 428 (about 2:53), 492–494 (about 9:09–9:23, close and unload all global form objects, reopen), 550–551 (about 14:45–14:51).
- EXP-062 record and T1/T2 evidence (`evidence/EXP-062/`): blocked at AC-2; FX_Picture absent from binding dropdown and Edit Property Binding dialog; FX_sImport absent; FX_RefreshButton Primary `FX_Test`; FX_VarTest, FX_Test (two actions) present; FX_ImportPicture absent.
- EXP-005-R2 (unload mechanics): `Unload IDO Metadata With Forms` read as **checked**; command labels `Unload Global Form Objects` / `Unload All Global Form Objects` documented. **Source conflict noted:** EXP-005-R2's own rule (line 216) says "If `Unload IDO Metadata with Forms` is enabled, stop and mark the replay blocked before invoking Unload…", which treats checked as a block. EXP-006-R2 (line 105), EXP-029 (expected CHECKED/enabled), and the EXP-062-R2 brief require checked. This brief governs. The EXP-005-R2 wording is flagged for the coordinator (unresolved; not edited).
- EXP-006-R2 (unload mechanics): the exact unload label must be re-observed in the UI before invocation; observed earlier as `Unload All Global Form Objects`.
- EXP-029 (reopen mechanics): Designer Form-menu recent-forms reopen; reopen identity check; `Unload All Global Form Objects` invoked once with target closed.
- EXP-058 (handler/Primary procedure, targeted grep): typed `FX_Test` into the native Event combobox with no Enter (the open list highlighted `StdFormRefreshCompleted`), committed with one Tab; Primary readback then authoritative; the Components-grid "Event to generate" column lagged (stale) until after Save.
- EXP-061 (FX_Picture creation, targeted grep): one `FX_Picture` IDO property (Bound, Bind To `fxitms.FX_Picture`, class `FX_Picture`, Binary/-1/varbinary); FX_Items checked out by the operator; Finish count 1.
- **Not reviewed in this T1 window:** EXP-045, EXP-050, EXP-051, EXP-054-R2, EXP-056, EXP-057 (listed in the full brief; deferred to the later steps that need them). Disclosed omission.

## 4. Designer identity, scope, and cleanliness (AC-1)

- Designer tab (tab 0) title `FX_Items`; Form-tab readback (Properties > Form, screenshot `t1-02`): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph` (find readback); Caption blank; Device Type Default; Form Type Normal; Is Master True; Initial Command `Refresh`; Script Language Visual Basic; Close Box True.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Toolbar: Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled (snapshot and screenshot `t1-01`).
- Designer URL at task start: `…/WSWebClient/designer/default.aspx` with **no** `?MGForm=FX_Items` query (observed; same loss was observed in EXP-062 T1 after a binding dialog Cancel; cause unresolved). The tab nonetheless shows the FX_Items Form.
- No authentication challenge, no native dialog, no Mongoose unsaved-change prompt, no portal notification banner visible in the Web Client tab.

## 5. Designer component baseline (AC-3, partial)

Components-tab grid (17 entries; full list from the initial snapshot):

| # | Name | Type | Data Source | Pane | Container | Tab | Event to generate (grid) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | | | | | |
| 2 | FormCollectionGrid | Grid | (objects) | 0 | | 0 | |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | 0 | FormCollectionGrid | 1 | |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 0 | FormCollectionGrid | 2 | |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | 0 | FormCollectionGrid | 3 | |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | 0 | FormCollectionGrid | 4 | |
| 7 | Pane (01) | Pane | | | | | |
| 8 | FX_ItemStatic | Static | | 1 | | 5 | |
| 9 | FX_ItemEdit | Edit | object.FX_Item | 1 | | 6 | |
| 10 | FX_DescriptionStatic | Static | | 1 | | 7 | |
| 11 | FX_DescriptionEdit | Edit | object.FX_Description | 1 | | 8 | |
| 12 | FX_CostStatic | Static | | 1 | | 9 | |
| 13 | FX_CostEdit | Edit | object.FX_Cost | 1 | | 10 | |
| 14 | FX_UMStatic | Static | | 1 | | 11 | |
| 15 | FX_UMCombobox | ComboBox | object.FX_UM | 1 | | 12 | |
| 16 | FX_RefreshButton | PushButton | | 1 | | 0 | FX_Test |
| 17 | FX_VarTestEdit | Edit | variables.FX_VarTest | 1 | | 0 | |

Cardinality: exactly one `FX_VarTestEdit` (Edit, Binding Type Variable) and exactly one `FX_RefreshButton` (PushButton). No `FX_PictureStatic`.

Per-component property readbacks (selected via the Components grid; values from saved accessibility snapshots, grep-verified):

| Name | Type | Binding Type / Binding | Caption | Size | Location | Tab Order | Events > Primary | Other read values |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FX_RefreshButton | PushButton | None / blank | `FX_Refresh` (literal) | 14.25; 1.89 | 12.1666666666667; 5.25 | 0 | **FX_Test** | Required False; Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Foreground #000000; Data Change / Lose Focus / Gain Focus blank; Drag From 0 events; Drop On 0 events |
| FX_VarTestEdit | Edit | Variable / `variables.FX_VarTest` | blank | 37.05; 2 | 12.7222222222222; 30.25 | 0 | blank | Required False; Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Component Class blank; Unit Char |
| FX_ItemStatic | Static | None / blank | `FX_sItem` (string ID) | 20; 1 | 1; 3 | 5 | blank | Justification Right; Read-Only False; Hidden False; Required False; Foreground #000000 |
| FX_ItemEdit | Edit | Property / `object.FX_Item` | `C(FX_ItemStatic)` | 37.05; 2 | 1; 23.75 | 6 | blank | Required False; Read-Only False; Hidden False; Auto Complete False; Default Value blank |
| FX_DescriptionStatic | Static | None / blank | `FX_sDescription` | 20; 1 | 3.25; 3 | 7 | blank | Justification Right; Required False |
| FX_DescriptionEdit | Edit | Property / `object.FX_Description` | `C(FX_DescriptionStatic)` | 37.05; 2 | 3.25; 23.75 | 8 | blank | Required False |
| FX_CostStatic | Static | None / blank | `FX_sCost` | 20; 1 | 5.5; 3 | 9 | blank | Justification Right; Required False |
| FX_CostEdit | Edit | Property / `object.FX_Cost` | `C(FX_CostStatic)` | 37.05; 2 | 5.5; 23.75 | 10 | blank | Required False |
| FX_UMStatic | Static | None / blank | `FX_sUM` | 20; 1 | 7.75; 3 | 11 | blank | Justification Right; Read-Only False; Hidden False; Required False; From Device Master True |
| FX_UMCombobox | ComboBox (EnhancedCombo) | Property / `object.FX_UM` | `C(FX_UMStatic)` | 37.25; 2.15 | 7.75; 23.75 | 12 | blank | Required False; Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Upper or Lower Case Mixed; Default blank |

Known gaps (limitations, not guesses):
- Pane (00)/(01), FormCollectionGrid, and the four GridColumn detail properties were not read in full.
- The Miscellaneous > Specific Attributes group (including the existing statics' No Colon state) was not expanded or read.
- Some Edit `Location` y-values (23.75) differ from Static y-values (3) and do not visibly match the canvas row order (`t1-01`, `t1-05`). Recorded as property-grid readbacks; unresolved; later geometry comparisons should use the same readback method.

## 6. Variables and handler inventory (AC-3, partial)

- Details > Variables (screenshot `t1-03`): Form - Persistent: `InitialCommand`. Form - Temporary: `FX_VarTest` (Name `FX_VarTest`; Description blank; Value `~LIT~()`; Persistent False; Global False). Global - Persistent group present, not expanded.
- Details > Event Handlers (screenshot `t1-04`): one group `FX_Test`, two actions, both disabled `false`:
  - seq 0 Prompt — `PROMPT(Hello World) ICON(DEFAULT) RESP…` (grid truncated; EXP-062 recorded the full string as `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; not re-read in full here).
  - seq 1 Set Values — `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- `FX_ImportPicture`: absent. No `StdFormRefreshCompleted` group visible.

## 7. Prerequisite gates (read-only; no commit)

**FX_Picture binding surface (AC-2 pre-unload observation):**
- Opened `FX_UMCombobox` Binding dropdown (Binding Type Property; current `object.FX_UM`) read-only (screenshot `t1-06`). The sorted visible list runs `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, `object.FX_Cost`, `object.FX_Description`, `object.FX_Item`, **`object.FX_UM`** (highlighted), `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`. `object.FX_Picture` would sort between `object.FX_Item` and `object.FX_UM`; it is not present.
- A find for `FX_Picture` against the open list returned no match.
- Dismissed with Escape. Binding still `object.FX_UM` (screenshot `t1-07`); Save disabled.
- Not tested in this task: the Edit Property Binding dialog's picker, and whether binary-typed properties are filtered from this dropdown (unresolved).

**FX_sImport absence (AC-5 gate, read-only):**
- Opened `FX_RefreshButton` Caption dropdown read-only (screenshot `t1-08`). FX_-prefixed entries present: `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM`. No `FX_sImport`.
- A find for `import` across the open list returned 58 matches (for example `sImport`, `sImportFileName`, `sImportFormLicenses`). None is `FX_sImport` or an FX_-prefixed variant.
- Dismissed with Escape. Caption still literal `FX_Refresh` (screenshot `t1-09`); Save disabled.

## 8. Web Client runtime Form tabs and preference (AC-2 preference gate; AC-12 not attempted)

- Chrome tab 1 `Mongoose` (portal) selected; frame Mongoose. Tabs inside the Mongoose frame (screenshot `t1-10`): `Sql Tables`, `Sql Columns`, `FX_Items` (middle, inactive at start), `Property Classes`, `IDOs`, `FX_Items` (right-most, active at start).
- **Both FX_Items tabs are runtime Forms.** Selecting the middle tab (screenshot `t1-11`) displayed the same runtime FX_Items Form (record 1 `dumbbell`, status `(Object 1 of 3)`); the right-most tab shows the same record. This was verified by content and status, not by name.
- Dirty state: toolbar Save disabled for the middle tab (find readback, `Save [disabled]`), and Save disabled for the right-most tab (initial snapshot). Both are clean. Neither was closed.
- The middle tab was selected for the read and the original right-most tab was restored (screenshot `t1-10`, `t1-15`).
- Runtime visible data (not interacted): Item column rows 1 `dumbbell`, 2 `eggs`, 3 `guitar`… (truncated); record 1 Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`. The `FX_Refresh` button and an empty Edit are visible in the form.
- Preference: `View > User Preferences...` opened (Behavior tab; screenshot `t1-14`). Readback: **Unload IDO Metadata With Forms = checked** (right column, first row). Other visible values noted and not changed: Show Configuration Name On Caption checked; Prompt to Save Form Splitter Changes unchecked; Prompt to Save Grid Changes checked; Prompt to Save Flex Layout Changes checked; Display Captions in Most Recently Used forms list checked; Load/Replace form with extended form checked; Disable Form Aliases For Session unchecked.
- Closed with the dialog's `Close Window` control (`f1e929`), not OK. Post-close screenshot (`t1-15`) shows the dialog closed; the Mongoose tab returned to `favoriteContext=FX_Items`.
- Path note: the preference was reached through `View > User Preferences...` (EXP-005-R2 path). EXP-029's `Form > User Preferences` wording was not what the menu showed.
- Form menu (opened read-only, dismissed with Escape; screenshot `t1-12`): Open; Close and Save Changes; Close and Cancel Changes; Export to File; Definition ▸; Sign Out; FX_Items; IDOs; Property Classes; Sql Tables; Export/Import Strings; IDO Projects; FX_UMs; FX_HelloWorld01; Data Maintenance Wizard; Runtime Builder Selection. The `Definition` submenu was **not expanded**; the exact global-form-object unload label is therefore **not yet observed** and must be re-observed at the unload step.

## 9. Action audit (cumulative, this task)

| Category | Count | Notes |
| --- | --- | --- |
| Unloads (Web Client or Designer) | 0 | Not invoked (T1 boundary) |
| Designer Save | 0 | |
| Component add/delete, string creation, handler creation | 0 | |
| Binding, Caption, Primary, or other property commit | 0 | Dropdowns opened read-only and dismissed with Escape |
| Designer Form close / reopen | 0 / 0 | |
| Runtime Form close | 0 | Middle FX_Items tab selected for read and restored; no close |
| Runtime data edit / business record change | 0 / 0 | |
| Preference change | 0 | Dialog closed with `Close Window`, not OK |
| IDO checkout / check-in / undo | 0 | |
| Navigation, reload, reauthentication, restart | 0 | |
| Browser JavaScript / console / network inspection | 0 | Tool-generated Playwright code lines in action outputs are harness reports, not worker evaluation; console counts were not read |
| Chrome tab list / select | 1 / 2 | Select index 0 (Designer), select index 1 (Web Client) |
| Browser snapshot (explicit) | 2 | Designer initial; Web Client depth 12 |
| Find calls | 19 | 2 returned no match (`^FX_Refresh$` regex; `User Preferences` in Form menu); 1 invalid regex rejected, no effect |
| Screenshots (explicit) | 15 | `t1-01` … `t1-15` |
| Component row selections (view only) | 11 | RefreshButton ×2, VarTestEdit, ItemStatic, ItemEdit, DescriptionStatic, DescriptionEdit, CostStatic, CostEdit, UMStatic, UMCombobox |
| Details / Properties tab clicks (view only) | 5 | Form tab, Component tab (Properties); Variables, Event Handlers, Components (Details) |
| Dropdowns opened read-only | 2 | Binding (`FX_UMCombobox`); Caption (`FX_RefreshButton`); each dismissed with Escape |
| Menus opened | 2 | Web Client Form menu (Escape); Web Client View menu (first click showed no menu; second click opened it) |
| Dialogs opened | 1 | User Preferences (closed with Close Window) |
| Escape presses | 3 | Binding list; Caption list; Form menu |

## 10. Worker-written file inventory

Worker-written by the Write tool:
- `experiments/EXP-062-R2-hello-world-part-4-section-4-picture-import-ui.md` (created)
- `evidence/EXP-062-R2/T1-preflight-report.md` (this file; created)

Browser-tool screenshots written at worker request (PNG, under `evidence/EXP-062-R2/`):
- `t1-01-designer-initial-state-save-disabled.png`
- `t1-02-form-tab-identity-name-version-scope.png`
- `t1-03-variables-tab-fx-vartest-readback.png`
- `t1-04-event-handlers-tab-fx-test-group.png`
- `t1-05-fx_umcombobox-selected-before-binding-picker-readonly.png`
- `t1-06-binding-dropdown-open-readonly-fx_picture-check.png`
- `t1-07-after-binding-picker-escape-binding-unchanged.png`
- `t1-08-caption-string-list-readonly-fx_simport-absence.png`
- `t1-09-after-caption-list-escape-caption-unchanged-save-disabled.png`
- `t1-10-webclient-initial-runtime-tabs-dirty-state.png`
- `t1-11-webclient-inactive-fx_items-tab-identity-readonly.png`
- `t1-12-web-client-form-menu-open-user-preferences-locate.png`
- `t1-13-web-client-view-menu-open-preferences-locate.png`
- `t1-14-user-preferences-unload-ido-metadata-checked-readonly.png`
- `t1-15-after-preferences-close-window-settled.png`

Tool-generated accessibility snapshot files (written automatically by the browser tool on each action, not requested by the worker) under `evidence/playwright/`:
- `page-2026-10-11T15-31-53-595Z.yml`, `…15-32-15-155Z.yml`, `…15-32-19-403Z.yml`, `…15-32-43-772Z.yml`, `…15-32-55-828Z.yml`, `…15-33-02-570Z.yml`, `…15-33-12-917Z.yml`, `…15-33-19-137Z.yml`, `…15-33-25-985Z.yml`, `…15-33-30-497Z.yml`, `…15-33-35-135Z.yml`, `…15-33-45-740Z.yml`, `…15-33-51-858Z.yml`, `…15-33-59-238Z.yml`, `…15-34-03-278Z.yml`, `…15-34-21-616Z.yml`, `…15-34-38-277Z.yml`, `…15-34-46-255Z.yml`, `…15-35-21-751Z.yml`, `…15-35-35-792Z.yml`, `…15-35-42-408Z.yml`, `…15-35-52-054Z.yml`, `…15-35-59-084Z.yml`, `…15-36-06-742Z.yml`, `…15-36-16-581Z.yml` (all `page-2026-10-11T…`).
- Console logs written by the browser tool: `evidence/playwright/console-2026-10-11T15-31-37-593Z.log`, `…15-31-37-594Z.log`.
- Limitation: these files are tool-written. Gitignore status is not verified here; operator git review is authoritative.

## 11. Decisive evidence per acceptance check (T1 scope)

| AC | Status in T1 | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Supported (observed, one session) | `t1-01`, `t1-02` (identity, scope, Save disabled); Form-tab Version readback (find) | User-scope edit permission inferred from editable controls; not separately proven |
| AC-2 (preference, pre-unload) | Preference gate **passed** (checked, read, unchanged). Unload steps **not yet attempted** | `t1-14`, `t1-15` | Single read; the unload label not yet re-observed |
| AC-2 (FX_Picture gate) | Pre-unload absence observed (expected); post-unload check **not reached** | `t1-06`, `t1-07` (sorted dropdown list; find no match) | Dropdown only; Edit Property Binding picker not checked; binary filtering not excluded |
| AC-3 (baseline) | Partial: component inventory (17), property readbacks for 10 components, variable, handler inventory | `t1-01`, `t1-03`, `t1-04`, `t1-05`, `t1-09`; the readback tables above | Pane, GridColumn, FormCollectionGrid detail properties, Specific Attributes/No Colon not read; Edit Location values unreconciled with canvas |
| AC-5 (gate) | FX_sImport absence observed | `t1-08` (FX_-prefixed list), find `import` | One session; list read through search |
| AC-12 (runtime) | Not attempted (runtime data observed only, not interacted) | `t1-10`, `t1-11` | Visible grid rows only |

Not attempted in T1 (by design): AC-4, AC-6 through AC-11, and the post-unload half of AC-2 and AC-12.

## 12. Knowledge state

| Finding | State |
| --- | --- |
| Designer `FX_Items` User scope identity, Save disabled, no challenge | observed (one session) |
| `Unload IDO Metadata With Forms` checked (read-only) | observed (one read; dialog closed without save) |
| Two clean `FX_Items` runtime Form tabs open at start | observed (one session) |
| 17-entry component inventory; one FX_VarTestEdit, one FX_RefreshButton; readbacks above | observed (one session) |
| FX_RefreshButton Primary `FX_Test`; Caption literal `FX_Refresh` | observed |
| FX_Test group with two actions; FX_ImportPicture absent | observed |
| FX_VarTest Form-Temporary, `~LIT~()`, Persistent False, Global False | observed |
| FX_Picture absent from the `FX_UMCombobox` Binding dropdown (pre-unload) | observed; cause unresolved |
| FX_sImport absent from string list | observed (one session; cache not checked) |
| View > User Preferences path | observed |
| Runtime Form Definition submenu label for the unload | **not observed** (submenu not expanded) |
| Replay or procedure status | not claimed; nothing replay_verified |

## 13. Open questions and blockers for the next step

1. **Runtime tab selection for the unload step.** Two clean `FX_Items` runtime Form tabs are open (middle and right-most). The brief says "close only a clean FX_Items runtime Form if one is open." It is unclear whether one or both should be closed before the single runtime global-form-object unload. Coordinator decision needed. Both are clean (Save disabled); closing them is outside this T1 task.
2. **Source conflict on the preference.** EXP-005-R2 treats a checked `Unload IDO Metadata With Forms` as a block; EXP-006-R2, EXP-029, and this brief require checked. The brief was followed. Coordinator to confirm.
3. **FX_Picture cause.** Still unresolved. The unload is the next authorized check. Whether binary-typed properties are filtered from the dropdown is not tested; the Edit Property Binding picker could be checked after the unload.
4. **Edit Location readbacks** do not visibly match the canvas order. Unresolved; not a blocker.
5. **Designer URL** lacks the `MGForm` query at task start. Not caused by this task; unresolved.

Next permitted action: none in T1. The unload step (Web Client runtime global-form-object unload, then Designer close, Unload All Global Form Objects, reopen, FX_Picture binding check) requires coordinator direction on open question 1 and is not performed here.
