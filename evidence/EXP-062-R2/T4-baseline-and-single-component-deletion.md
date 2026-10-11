# EXP-062-R2 — T4 complete baseline and single-component deletion (FX_VarTestEdit)

Run `R-20261011-233114-6TXk`, experiment EXP-062-R2, cycle 3, task **T4**.
Worker session `1a1726ce-7754-4c7b-81f9-602aedcce8ec`; task_message_id `10b49350-3a4c-4126-8a38-0be61ed4c564`.
Date 2026-10-11. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Prior reports: `T1-preflight-report.md`, `T2-runtime-unload-report.md`, `T3-designer-unload-and-binding-gate.md`.

## 1. Outcome

- **Pre-mutation gates passed.** Identity (Form Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), Save disabled, no authentication challenge, no open dialog, 17 components with one FX_VarTestEdit and one FX_RefreshButton, FX_VarTest, FX_Test with two actions, FX_ImportPicture absent, FX_PictureStatic absent.
- **Exactly one component deleted: `FX_VarTestEdit`.** Component count 17 → 16. Confirmed by the component tree after the deletion. Other 16 entries unchanged in name and order.
- **Designer is now dirty** (Save and Undo enabled), as expected. **Not saved, not closed, not reopened.**
- **Disclosed deviation:** I first clicked the Designer toolbar **Delete** button, whose tooltip is **Delete Form Definition**. It opened "Are you sure you want to delete the definition for form FX_Items?" I clicked **No**. The Form stayed open and nothing was deleted (`t4-07`, `t4-08`). The component deletion was then done from the Components grid's trash button, whose confirmation named FX_VarTestEdit (`t4-09` to `t4-11`).
- Not done in T4 (per instructions): FX_sImport, FX_PictureStatic, FX_ImportPicture, Caption and Primary changes, Save, close, reopen, runtime.

## 2. Action counts (cumulative, EXP-062-R2 through T4)

| Category | Count | Notes |
| --- | --- | --- |
| Web Client unloads | 1 | T2 only |
| Designer unloads | 1 | T3 only |
| Runtime FX_Items closes | 2 | T2 only |
| Designer FX_Items close / reopen (pre-mutation) | 1 / 1 | T3 only |
| Designer Save | 0 | Not invoked |
| **Component deletions** | **1** | FX_VarTestEdit (T4) |
| Form-definition delete dialog opened, declined with No | 1 | Unintended; No; Form intact |
| Component-delete dialog confirmed with OK | 1 | Named FX_VarTestEdit |
| String, handler, binding, Caption, Primary, or property change | 0 | |
| Preference change | 0 | Not opened in T4 |
| Business-record edit or runtime action | 0 | |
| IDO checkout / check-in / undo | 0 | |
| Navigation, reload, reauthentication, restart | 0 | |
| Browser JavaScript / console / network inspection | 0 | |
| Tab list / select | 1 / 1 | Designer only |
| Snapshots (explicit, file or inline) | 9 | |
| Find calls | 20 | Read-only |
| Screenshots | 13 | `t4-01` … `t4-13` |
| Row, tab, and group selections (no value change) | ~45 | Components, Variables, Event Handlers; no edits |
| Expand/collapse (view only) | 5 | Form-persistent group, Components Expand, Specific Attributes toggle attempt, Pane rows |
| Hover (tooltip read only) | 1 | Components-grid trash control |
| Menu opens | 0 | |
| Escape presses | 0 | |

## 3. Pre-deletion baseline (17 components, live readback in T4)

Source: Components-grid rows (inline snapshot), Properties readbacks by row selection (saved snapshot files, grep), screenshots `t4-01`, `t4-02`, `t4-03`, `t4-06`.

| # | Name | Type | Data Source (binding) | Parent / Container | Pane | Tab | Caption | Size | Location | Primary (Events) | Other readable values |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | (none) | Form | 0 | — | — | — | — | — | Selecting the row shows **Form-level properties** (Splitter Vertical, Splitter Position 11, Pane 0 Scroll Bars Never). Pane-specific properties are not readable separately. |
| 2 | FormCollectionGrid | Grid | objects | Pane (00) | 0 | 0 | (none) | 11; 21 | 0; 0 | (none) | Tab Order 0; Read-Only False; Hidden False; Component Class blank |
| 3 | FX_ItemGridCol | GridColumn | object.FX_Item | FormCollectionGrid | 0 | 1 | — | 10; 0 | 0; 0 | — | Tab Order 1; Read-Only False; Hidden False |
| 4 | FX_DescriptionGridCol | GridColumn | object.FX_Description | FormCollectionGrid | 0 | 2 | — | 10; 0 | 0; 0 | — | Tab Order 2 |
| 5 | FX_CostGridCol | GridColumn | object.FX_Cost | FormCollectionGrid | 0 | 3 | — | 10; 0 | 0; 0 | — | Tab Order 3 |
| 6 | FX_UMGridCol | GridColumn | object.FX_UM | FormCollectionGrid | 0 | 4 | — | 10; 0 | 0; 0 | — | Tab Order 4 |
| 7 | Pane (01) | Pane | (none) | Form | 1 | — | — | — | — | — | As Pane (00): Form-level properties shown |
| 8 | **FX_RefreshButton** | PushButton | None (Binding blank) | Pane (01) | 1 | 0 | **FX_Refresh** (literal) | 14.25; 1.89 | 12.1666666666667; 5.25 | **FX_Test** | Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Required False; Data Change / Lose Focus / Gain Focus blank; Drag From 0 event(s); Drop On 0 event(s); From Device Master True; Unit Char; Foreground #000000 |
| 9 | **FX_VarTestEdit** | Edit | Variable `variables.FX_VarTest` (Binding Type **Variable**) | Pane (01) | 1 | 0 | blank | 37.05; 2 | 12.7222222222222; 30.25 | blank | Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Required False; Default Value blank; Data Type blank; Justification blank; Unit Char; From Device Master True; Foreground #000000; Component Class blank |
| 10 | FX_ItemStatic | Static | None | Pane (01) | 1 | 5 | `FX_sItem` | 20; 1 | 1; 3 | blank | Justification Right; Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Required False |
| 11 | FX_ItemEdit | Edit | Property `object.FX_Item` | Pane (01) | 1 | 6 | `C(FX_ItemStatic)` | 37.05; 2 | 1; 23.75 | blank | Read-Only False; Hidden False; Required False; Default Value blank; Auto Complete False |
| 12 | FX_DescriptionStatic | Static | None | Pane (01) | 1 | 7 | `FX_sDescription` | 20; 1 | 3.25; 3 | blank | Justification Right; Read-Only False; Hidden False; Required False |
| 13 | FX_DescriptionEdit | Edit | Property `object.FX_Description` | Pane (01) | 1 | 8 | `C(FX_DescriptionStatic)` | 37.05; 2 | 3.25; 23.75 | blank | Read-Only False; Hidden False; Required False |
| 14 | FX_CostStatic | Static | None | Pane (01) | 1 | 9 | `FX_sCost` | 20; 1 | 5.5; 3 | blank | Justification Right; Read-Only False; Hidden False; Required False |
| 15 | FX_CostEdit | Edit | Property `object.FX_Cost` | Pane (01) | 1 | 10 | `C(FX_CostStatic)` | 37.05; 2 | 5.5; 23.75 | blank | Read-Only False; Hidden False; Required False |
| 16 | FX_UMStatic | Static | None | Pane (01) | 1 | 11 | `FX_sUM` | 20; 1 | 7.75; 3 | blank | Justification Right; Read-Only False; Hidden False; From Device Master True; Unit Char |
| 17 | FX_UMCombobox | ComboBox (EnhancedCombo) | Property `object.FX_UM` | Pane (01) | 1 | 12 | `C(FX_UMStatic)` | 37.25; 2.15 | 7.75; 23.75 | blank | Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Upper or Lower Case Mixed; Required False |

Notes on the baseline:
- **Reconciliation with T1 and T3:** every value above matches T1 (`T1-preflight-report.md` §5) and T3 §4, except that the Pane and GridColumn values are now recorded for the first time (T1 had not read them). No discrepancy found.
- **Limit:** the Specific Attributes group was not expanded. My single expander attempt on FX_UMStatic only selected that row; the chevron was not toggled. **No Colon value of any existing Static is therefore unread.** This was not guessed.
- **Limit:** Pane (00) and Pane (01) rows show Form-level properties, not separate Pane properties.
- **Tree order observation:** after the Form reopen and tab changes, the Components tree lists `FX_RefreshButton` and `FX_VarTestEdit` **before** the input and label rows (T1 and T3 listed them last). Same 17 names. Recorded as observed; no mutation was involved.

### FX_VarTestEdit complete pre-deletion record (identity check)

- Exactly one component named FX_VarTestEdit in the tree (cardinality 1; `treeitem "FX_VarTestEdit"` appears once in the saved snapshot).
- Identity immediately before deletion (`t4-06`): Properties header `FX_VarTestEdit (Edit)`; Name `FX_VarTestEdit`; Type `Edit`; From Device Master True; Caption blank; Binding Type **Variable**; Binding `variables.FX_VarTest`; Size `37.05; 2`; Location `12.7222222222222; 30.25`; Tab Order 0; Pane 1; Read-Only/Disable False; Tab Read-Only Field False; Hidden False; No Tab Stop False; Auto Complete False; Required False; Default Value blank; Data Type blank; Unit Char; Justification blank; Events Primary blank; Data Change / Lose Focus / Gain Focus blank.
- **Distinguished from the variable:** `FX_VarTest` is a Form-Temporary variable (Variables tab, separate inventory). FX_VarTestEdit is a Components-tab Edit control whose binding points to that variable.

### Variables inventory (pre-deletion and post-deletion, unchanged)

| Group | Name | Value | Persistent | Global | Result |
| --- | --- | --- | --- | --- | --- |
| Form - Persistent | InitialCommand | (not opened in detail) | — | — | Present (group expanded; name visible) |
| Form - Temporary | FX_VarTest | `~LIT~()` | False | False | Unchanged before and after deletion (`t4-05`, `t4-13`) |
| Global - Persistent | (group collapsed) | — | — | — | Not expanded |
| Global - Temporary | (group collapsed) | — | — | — | Not expanded |

### Event handler inventory (pre-deletion and post-deletion, unchanged)

Group `FX_Test`, two enabled actions (both Disabled `false`):
- seq 0, Response Type **Prompt**: `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (full text from find readback).
- seq 1, Response Type **Set Values**: `SETVARVALUES(FX_VarTest=P(FX_Description))`.

`FX_ImportPicture`: **absent** (only the FX_Test group is listed). Verified before and after deletion (`t4-04`, `t4-12`).

### FX_RefreshButton Events > Primary

`FX_Test` (Properties readback; authoritative Events > Primary field, not the grid column). Unchanged before and after deletion.

## 4. Gate results before deletion

| Gate | Result |
| --- | --- |
| Designer identity (Name, User version, ScopeType User, ScopeName) | Passed (footer `t4-01`; Form-tab Version find readback) |
| Save disabled, no dialog, no unsaved change | Passed (find `Save [disabled]`; no `alertdialog`) |
| Exactly one FX_VarTestEdit and one FX_RefreshButton | Passed (tree rows, single `treeitem` each) |
| FX_VarTest and FX_Test group with two actions | Passed (`t4-04`, `t4-05`) |
| FX_ImportPicture absent | Passed |
| FX_PictureStatic absent | Passed (17-row tree; no such row) |
| Complete baseline captured for all 17 components | Passed, with the limits in §3 (Pane properties; Specific Attributes and No Colon not read) |
| FX_VarTestEdit identity before deletion | Passed (`t4-06`) |

## 5. Deletion record

1. **Selection:** FX_VarTestEdit selected in the Components grid (row highlighted; Properties header `FX_VarTestEdit (Edit)`; `t4-06`).
2. **First control (declined):** Designer **top toolbar Delete** (`e25`). Its tooltip reads **"Delete Form Definition"**. Dialog: "Are you sure you want to delete the definition for form FX_Items?" (`t4-07`). **I clicked No.** Form still open; FX_VarTestEdit still in tree (`t4-08`). Save still disabled at that point.
3. **Hover:** the Components-grid bottom trash control (unlabeled, `e856`). Tooltip reads **"Delete"** (`t4-09`).
4. **Second control (confirmed):** clicked that trash control once. Dialog: "Are you sure you want to delete **FX_VarTestEdit** and all the components it contains?" (`t4-10`). **Clicked OK once.**
5. **Result (`t4-11`):** canvas input box removed; tree collapsed to Pane (00) and Pane (01); toolbar Save and Undo enabled (dirty). No dialog open.
6. **Post-deletion tree after expanding (view only):** 16 entries: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox. **FX_VarTestEdit absent.** Cardinality 17 → 16 (exactly one). No other baseline component removed.

## 6. Post-deletion readbacks

- FX_RefreshButton (selection; saved snapshot): Name FX_RefreshButton; Caption `FX_Refresh`; Type PushButton; Binding Type None; Required False; Primary `FX_Test`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab Order 0. **Unchanged.**
- FX_Test group (Event Handlers; `t4-12`): seq 0 Prompt (false) and seq 1 Set Values (false), both present with the same summaries. **Unchanged.**
- FX_VarTest (Variables; `t4-13`): Name FX_VarTest; Value `~LIT~()`; Persistent False; Global False. InitialCommand present under Form - Persistent. **Unchanged.**
- Designer dirty state: Save enabled, Undo enabled (`t4-12`, `t4-13`; find readback `Save` not disabled). **Not saved, not closed, not reopened, not abandoned.**

Other components' post-deletion detail readbacks were not repeated beyond the tree and FX_RefreshButton. The tree shows all 16 remaining names and identities unchanged.

## 7. Evidence written (T4)

| File | Visible | Does not prove |
| --- | --- | --- |
| `t4-01-designer-baseline-start-identity-scope-save-disabled.png` | FX_VarTestEdit selected (Edit); User footer; Save greyed at the start | Save state at the instant of the first click |
| `t4-02-baseline-pane00-row-selected-properties-readback.png` | Pane (00) row selected; Properties shows Form tab (Form-level values) | Pane-specific properties |
| `t4-03-fx_umstatic-specific-attributes-expanded-readback.png` | FX_UMStatic selected; Specific Attributes row shows collapsed chevron (not expanded) | No Colon value |
| `t4-04-pre-deletion-event-handlers-tab-readback.png` | FX_Test group, seq 0 Prompt and seq 1 Set Values; no FX_ImportPicture | Full Prompt text (in find readback) |
| `t4-05-pre-deletion-variables-tab-readback.png` | FX_VarTest `~LIT~()`, Persistent False, Global False; Form - Persistent collapsed | InitialCommand value |
| `t4-06-pre-deletion-fx_vartestedit-selected-identity-properties.png` | Properties header `FX_VarTestEdit (Edit)`; Name; Type Edit; Tab 0 | Full property set below the fold |
| `t4-07-immediate-after-single-delete-click-state.png` | **Delete Form Definition** confirmation for FX_Items (declined in t4-08) | — |
| `t4-08-after-declining-form-definition-delete-no-state-check.png` | After No: Form open; FX_VarTestEdit still present; Save greyed | — |
| `t4-09-components-grid-trash-button-hover-tooltip.png` | Tooltip `Delete` on the grid trash control | Its target before click (confirmed by t4-10) |
| `t4-10-immediate-after-grid-delete-click-read-dialog.png` | Confirmation: "delete FX_VarTestEdit and all the components it contains?" | — |
| `t4-11-after-component-delete-ok-settled-state.png` | Canvas input removed; tree collapsed to Panes; Save and Undo enabled | Exact component list (see t4 tree readback) |
| `t4-12-post-deletion-event-handlers-fx_test-two-actions-readback.png` | FX_Test two actions; Save enabled | — |
| `t4-13-post-deletion-variables-fx_vartest-readback.png` | FX_VarTest unchanged; InitialCommand present | — |

Accessibility snapshot files written at worker request under `evidence/EXP-062-R2/`: `t4-snap-baseline-vartestedit-selected.yml`, `t4-snap-after-form-delete-declined-components-toolbar.yml`.

Tool-generated snapshot and console files under `evidence/playwright/` (not requested): `page-2026-10-11T15-50-48…` through `…15-55-36…` (about 24 files) and `console-2026-10-11T15-50-48-042Z.log`. Gitignore status not verified; operator git review is authoritative.

## 8. Worker-written file inventory (T4)

- `evidence/EXP-062-R2/T4-baseline-and-single-component-deletion.md` (this file; created)
- `experiments/EXP-062-R2-hello-world-part-4-section-4-picture-import-ui.md` (updated: status and T4 section)
- PNG screenshots `evidence/EXP-062-R2/t4-01` … `t4-13` (created at worker request)
- Snapshot files `evidence/EXP-062-R2/t4-snap-baseline-vartestedit-selected.yml` and `evidence/EXP-062-R2/t4-snap-after-form-delete-declined-components-toolbar.yml`

No other repository file was written.

## 9. Knowledge state (T4)

| Finding | State |
| --- | --- |
| Designer identity (User scope), Save disabled, no dialog before mutation | observed |
| 17-component baseline with per-component readbacks (§3) | observed (Pane and Specific Attributes limits noted) |
| FX_VarTestEdit identity immediately before deletion | observed |
| FX_VarTest and FX_Test (two actions) unchanged by the deletion | observed |
| Toolbar Delete = Delete Form Definition (declined) | observed |
| Components-grid trash button = component delete (confirmation named FX_VarTestEdit) | observed |
| Exactly one component deleted (17 → 16); other names unchanged | observed |
| Designer dirty after deletion (Save enabled) | observed |
| No Colon of existing Static components | **unresolved** (not read) |
| Persistence of the deletion | **not claimed**; not saved (no Save invoked) |
| Replay status | not claimed; nothing replay_verified |

## 10. Open questions and blockers

1. **Coordinator review.** T4 stopped after the single deletion, as instructed. The Designer holds an unsaved deletion of FX_VarTestEdit. Next steps (FX_sImport, FX_PictureStatic, FX_ImportPicture, Primary, single Save) need approval; no Save has been performed.
2. **Unsaved deletion risk.** The deletion is only in the open Designer session until Save. Closing the Form without Save would discard it, so the Form must not be closed or reloaded without an explicit decision.
3. **Disclosed slip:** the first delete click hit **Delete Form Definition**, which I declined with No. The Form and definition are intact. Review whether this should be recorded as an audit exception.
4. **Specific Attributes / No Colon** of existing Statics unread; needed before FX_PictureStatic is configured to match the tutorial (the brief requires verifying the attribute before Save).
5. **Tree order change** of FX_RefreshButton and FX_VarTestEdit after the reopen (observed; not explained).
6. Designer URL query `?MGForm=FX_Items` dropping after dialog cancel (T1 and T3) was not re-observed in T4.

Next permitted action: none in T4. Stop for coordinator review.
