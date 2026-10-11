# EXP-062-R2 — T3 Designer global-form-object unload, User-scope reopen, and FX_Picture binding gate

Run `R-20261011-233114-6TXk`, experiment EXP-062-R2, cycle 2, task **T3**.
Worker session `1a1726ce-7754-4c7b-81f9-602aedcce8ec`; task_message_id `abbf2978-c464-482a-82c5-427ab71b7055`.
Date 2026-10-11. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Prior reports: `evidence/EXP-062-R2/T1-preflight-report.md` (baseline, preference gate), `evidence/EXP-062-R2/T2-runtime-unload-report.md` (Web Client unload, runtime closes).

## 1. Outcome

- **FX_Picture is offered by the native Designer binding picker** (`FX_UMCombobox` > Binding dropdown lists `object.FX_Picture`, between `object.FX_Item` and `object.FX_UM`). Observed in `t3-15`. The binding was **not** changed (`object.FX_UM` remains; `t3-16`).
- Baseline unchanged after reopen: 17 components (same names/types/order), `FX_RefreshButton` (Name, Caption `FX_Refresh`, Primary `FX_Test`, geometry), `FX_VarTest` variable, `FX_Test` group with both original actions. `FX_PictureStatic` and `FX_ImportPicture` absent.
- Designer Save disabled. The reopened Form is clean.
- **Stopped successfully at the gate, as instructed.** No Form mutation, string creation, component deletion, handler creation, binding commit, or Save was performed. Section 4 is **not** implemented (waiting for coordinator review).
- One slip is disclosed in §5 (an Add-handler dialog was opened by mistake and cancelled; nothing committed).

## 2. Action counts (cumulative for EXP-062-R2 through T3)

| Category | Count | Notes |
| --- | --- | --- |
| Web Client unloads | 1 | T2 only; not repeated |
| **Designer unloads** | **1** | T3: `Unload All Global Form Objects`, invoked once |
| Runtime FX_Items closes | 2 | T2 only; no runtime open in T3 |
| Designer FX_Items close | 1 | T3 (clean; no prompt) |
| Designer FX_Items reopen | 1 | T3, recent-forms route; no retry needed |
| Designer Save | 0 | |
| Form / component / string / handler / binding / Caption / Primary mutation | 0 | |
| Event-handler dialog opened and cancelled | 1 | Unintended (§5); Cancel; no handler created |
| Binding dropdown opened read-only and dismissed with Escape | 1 | `FX_UMCombobox`; no commit |
| Preference change | 0 | Not opened in T3 |
| Business-record edit or runtime action | 0 | |
| IDO checkout / check-in / undo | 0 | |
| Navigation, reload, reauthentication, restart | 0 | Designer URL query `?MGForm=FX_Items` changed by the app (see §4) |
| Browser JavaScript / console / network inspection | 0 | |
| Chrome tab list / select | 1 / 4 | |
| Menu opens | 2 | Designer Form (×2, for Definition and for recent forms) |
| Designer Definition submenu opens | 1 | Label recorded before click |
| Explicit snapshots | 4 | Designer, reopened-grid, handler-grid, and targeted checks |
| Find calls | 14 | Read-only |
| Screenshots | 16 | `t3-01` … `t3-16` |
| Row / tab selections (view or selection only) | 9 | Components, Variables, Event Handlers tabs; FX_RefreshButton, FX_UMCombobox, FX_VarTest rows |
| Expand/collapse view actions | 3 | Components Expand; Form-temporary group; Event Handlers group (see §5) |

## 3. Sequence, labels, and native responses

1. **Tab list, select Designer** (index 0), fresh snapshot. Designer tab `FX_Items` selected. Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Save and Regenerate Form disabled; Undo and Redo disabled. No challenge, no native dialog, no unsaved-change prompt (`t3-01`). The Caption cell of `FX_RefreshButton` read blank in one accessibility snapshot; the screenshot shows `FX_Refresh` (accessibility artifact, not a change).
2. **Review of the T1 baseline** before the close (T1 report §5–6).
3. **Close the FX_Items Designer Form tab once** via its closable control (`closable FX_Items`). No prompt; the Designer shows an empty canvas (`t3-02`).
4. **Form > Definition** opened. Submenu (with the Form closed) observed verbatim (`t3-03`): `Design`, `Revert Form Definition`, `Regenerate Form` (disabled), `Regenerate Form from Cache` (disabled), `Site Developer Impersonation`, **`Unload All Global Form Objects`**, separator, `New`, `Copy`, `Delete`. Exact label recorded: `Unload All Global Form Objects`. Only one global-form-object unload item.
5. **Invoked `Unload All Global Form Objects` once.** Immediate and settled response: the menu closed; no dialog, toast, or error visible; empty Designer canvas (`t3-04`). **Native response: silent.**
6. **Reopen FX_Items through the recent-forms route**: Designer `Form` menu, then the `FX_Items` entry in the recent-forms list (one entry present). First attempt succeeded; no retry. The Designer URL changed to `…/designer/default.aspx?MGForm=FX_Items` (app-set, after the click).
7. **Identity after reopen** (`t3-05`, find readback): Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Save greyed in the toolbar.
8. The Details panel reopened collapsed; I expanded it (view only). The component grid's Pane (00)/(01) nodes were collapsed; expanded them (view only).

## 4. Baseline comparison after reopen (T1 vs T3)

| Item | T1 baseline | T3 after reopen | Match |
| --- | --- | --- | --- |
| Component count (incl. FormCollectionGrid, Panes) | 17 | 17 | Yes |
| Components listed | Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_RefreshButton; FX_VarTestEdit | Same names, same order (`treeitem` readback, `t3-07`/`e2459`–`e2913`) | Yes |
| FX_VarTestEdit present | Yes (1) | Yes (1) in tree; detail readback not repeated | Yes (presence) |
| FX_RefreshButton Name / Type | FX_RefreshButton / PushButton | FX_RefreshButton / PushButton | Yes |
| FX_RefreshButton Caption | `FX_Refresh` (literal) | `FX_Refresh` | Yes |
| FX_RefreshButton Binding Type / Binding | None / blank | None / blank | Yes |
| FX_RefreshButton Size / Location / Tab | 14.25; 1.89 / 12.1666666666667; 5.25 / 0 | 14.25; 1.89 / 12.1666666666667; 5.25 / 0 | Yes |
| FX_RefreshButton Events > Primary | `FX_Test` | `FX_Test` | Yes |
| FX_VarTest variable | Form - Temporary; Value `~LIT~()`; Persistent False; Global False | Same (`t3-14`) | Yes |
| InitialCommand variable | Form - Persistent | Form - Persistent (`t3-13` group collapsed; not re-read in detail) | Presence only |
| FX_Test group | seq 0 Prompt (`PROMPT(Hello World) ICON(DEFAULT) RESP…`); seq 1 Set Values (`SETVARVALUES(FX_VarTest=P(FX_Description))`); both `false` | Both present; both `false`; same summaries (`t3-09`, `t3-11`) | Yes |
| FX_ImportPicture | absent | absent (only FX_Test group in the handler list) | Yes |
| FX_PictureStatic | absent | absent (no such row in the component tree) | Yes |
| FX_sImport string | absent (T1) | not re-checked in T3 (not required by the T3 brief); T1 observation stands | n/a |
| Form Save | disabled | disabled (`t3-05`, `t3-16`) | Yes |

Not re-read in T3 (disclosed): per-component detail for the input fields and labels, Pane and GridColumn details, Specific Attributes, FX_VarTestEdit Binding detail. The T1 values for these stand unverified after reopen (see §6).

## 5. Deviations and disclosures

1. **Accidental Add-handler dialog.** While trying to expand the FX_Test group, I clicked the grid-toolbar button `e3685`, which is the **Add (New)** control, not Expand. An **Event Handler** dialog (Name combobox; OK and Cancel) opened. I clicked **Cancel** (`e3734`). No name was entered and OK was never clicked. The handler list afterwards still showed only `FX_Test`. Snapshot `t3-10` shows the Form still open, clean, and the footer User scope. The group was then expanded by clicking its row cell (view only). This is the only non-view action beyond the gate steps.
2. **URL query loss after the Cancel.** After the Cancel, the Designer URL lost `?MGForm=FX_Items` again. The Form stayed open (`t3-10`). This is the same observation as T1 (cause unresolved). It was not treated as a state change.
3. **Expand/collapse and row selections** were view or selection only. No value was edited.
4. **Snapshot sizes.** One snapshot (`t3`, `e3676` target) returned inline, not as a file.

## 6. Binding-picker finding (the gate)

- Surface: Designer Properties > Component (`FX_UMCombobox`, EnhancedCombo) > Data Source > Binding dropdown (Binding Type Property).
- Open list (read-only; `t3-15`), sorted: `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, `object.FX_Cost`, `object.FX_Description`, `object.FX_Item`, **`object.FX_Picture`**, `object.FX_UM` (selected), `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, …
- Find for `FX_Picture` returned exactly one option (`object.FX_Picture`), so it is unambiguous.
- Dismissed with **Escape**; Binding still `object.FX_UM` (`t3-16`); Save disabled; no dialog open.
- **Result: FX_Picture is visibly offered by a supported native Designer binding surface.** The gate passes. Picture binding was not committed.
- Not tested: the Edit Property Binding dialog's picker (not required by the T3 brief).

## 7. Current browser and Designer state

- Chrome tab 0 (Designer): `FX_Items` open, User scope footer, Save disabled, no dialog, no unsaved-change prompt. `FX_UMCombobox` selected; Binding `object.FX_UM`. Details panel: Components tab expanded; Form is clean. The Designer URL is `…/designer/default.aspx` (query lost; see §5.2).
- Chrome tab 1 (Web Client): IDOs panel, no runtime FX_Items tab open, `Unload IDO Metadata With Forms` checked (T2 readback), no dialog.
- **The Form is open, clean, and unmodified.** No stray dialog or prompt is left open.

## 8. Evidence written (T3)

| File | Visible | Does not prove |
| --- | --- | --- |
| `t3-01-designer-pre-close-identity-scope-save-disabled.png` | FX_Items tab; Caption `FX_Refresh`; Save greyed; User footer; pre-close state | Metadata state |
| `t3-02-after-designer-fx_items-tab-close-no-prompt.png` | Form closed; empty canvas; no prompt | Persistence |
| `t3-03-designer-form-definition-submenu-unload-label-before-click.png` | Exact label `Unload All Global Form Objects` in Form > Definition (Form closed) | Effect of the click |
| `t3-04-immediate-after-designer-unload-click-settled.png` | Silent completion; no dialog | Cache effect |
| `t3-05-reopened-fx_items-recent-forms-identity-scope.png` | Reopened Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, footer User scope | Database state |
| `t3-06-reopened-fx_items-details-expanded-components-tab.png` | Details panel expanded; Collections tab shown | — |
| `t3-07-reopened-fx_items-components-grid-readback.png` | Components grid collapsed (Pane nodes only) | Component list (see t3 snapshot readback) |
| `t3-08-reopened-fx_items-event-handlers-fx_test-group.png` | FX_Test group collapsed | — |
| `t3-09-reopened-fx_items-fx_test-group-expanded-readback.png` | Accidental Event Handler dialog open (see §5.1) | — |
| `t3-10-after-accidental-event-handler-dialog-cancel-state.png` | After Cancel: Form open, clean, handler list unchanged (one FX_Test group) | — |
| `t3-11-reopened-fx_test-group-after-cell-click-readback.png` | FX_Test expanded: Prompt (seq 0) and Set Values (seq 1), both `false` | Action internals beyond summaries |
| `t3-12-reopened-variables-tab-fx_vartest-readback.png` | Variables tab; groups collapsed | — |
| `t3-13-reopened-variables-form-temporary-expanded-fx_vartest.png` | Form - Temporary expanded; FX_VarTest listed | — |
| `t3-14-reopened-fx_vartest-selected-definition-readback.png` | FX_VarTest Name, Value `~LIT~()`, Persistent False, Global False | — |
| `t3-15-binding-picker-open-lists-object-fx-picture-readonly.png` | Binding dropdown open; `object.FX_Picture` listed between `object.FX_Item` and `object.FX_UM` | Binding commit (none made) |
| `t3-16-after-binding-picker-escape-binding-unchanged-save-disabled.png` | Dropdown closed; Binding `object.FX_UM`; Save disabled | — |

Note on `t3-09`: despite its filename, the image shows the Event Handler dialog that resulted from the mis-click in §5.1. The expanded FX_Test readback is `t3-11`. The filename for `t3-09` is kept as written to avoid renaming a captured file; reviewers should read `t3-09` as the accidental-dialog state.

Tool-generated accessibility snapshots under `evidence/playwright/` (written automatically by the browser tool): `page-2026-10-11T15-44-59-674Z.yml`, `…15-45-06-727Z.yml`, `…15-45-10-600Z.yml`, `…15-45-19-641Z.yml`, `…15-45-26-032Z.yml`, `…15-45-30-861Z.yml`, `…15-45-41-313Z.yml`, `…15-45-49-565Z.yml`, `…15-46-03-935Z.yml`, `…15-46-10-692Z.yml`, `…15-46-17-391Z.yml`, `…15-46-25-748Z.yml`, `…15-46-36-203Z.yml`, `…15-46-46-848Z.yml`, `…15-46-54-122Z.yml`, `…15-47-01-881Z.yml`, `…15-47-11-044Z.yml`, `…15-47-21-756Z.yml`, `…15-47-26-728Z.yml`, `…15-47-31-972Z.yml`; console log `console-2026-10-11T15-44-49-409Z.log`. Gitignore status not verified; operator git review is authoritative.

## 9. Worker-written file inventory (T3)

- `evidence/EXP-062-R2/T3-designer-unload-and-binding-gate.md` (this file; created)
- `experiments/EXP-062-R2-hello-world-part-4-section-4-picture-import-ui.md` (updated: T3 status and section)
- PNG screenshots `evidence/EXP-062-R2/t3-01-…` through `t3-16-…` (created at worker request)

No other repository file was written. The EXP-062 record and evidence, AGENTS.md, tutorial sources, and prior records were not modified.

## 10. Knowledge state (T3)

| Finding | State |
| --- | --- |
| Designer FX_Items closed once with no prompt | observed |
| Exact Designer label `Unload All Global Form Objects` (Form > Definition, Form closed) | observed |
| One Designer `Unload All Global Form Objects` invoked; silent completion | observed (effect not verified in UI beyond the binding check) |
| Reopen via recent-forms yields identical User-scope identity | observed |
| Baseline (17 components, FX_RefreshButton Caption/Primary/geometry, FX_VarTest, FX_Test two actions) unchanged after reopen | observed (detail readback for most components not repeated) |
| `object.FX_Picture` offered in native Designer binding dropdown | observed |
| Binding not committed; Save disabled after the check | observed |
| Designer URL query loss after a dialog Cancel | observed; cause unresolved (also T1) |
| Form-definition recovery is distinct from database durability, cache invalidation, binary storage, and runtime image import | not claimed; not tested here |
| Replay status | not claimed; nothing replay_verified |

## 11. Open questions and blockers

1. **Coordinator review.** The gate passed. Confirm whether Section 4 implementation should proceed (FX_VarTestEdit deletion, FX_sImport creation, FX_PictureStatic, FX_ImportPicture, Primary reassignment, one Save) in the next task.
2. Disclosed slip (§5.1): one Event Handler dialog was opened by mistake and cancelled, with no commit. Review if this matters for the audit.
3. Detail readbacks not repeated after reopen (§4): input/label component properties, Specific Attributes, FX_VarTestEdit binding detail, InitialCommand. These should be re-read as part of any later baseline comparison.
4. Unresolved: cause of the Designer URL query loss after dialog Cancel (T1 and T3).
5. Edit Property Binding dialog's picker was not checked (not required).

Next permitted action: none in T3. Stop for coordinator review.
