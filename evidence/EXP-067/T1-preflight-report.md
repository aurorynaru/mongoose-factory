# EXP-067 — T1 read-only preflight report (Hello World Part 4 Section 8a)

Run: EXP-067, cycle 0, task T1. Worker session `5f313844-ef7c-4b87-857e-e2a659f0f6c3`; task_message_id `6465fc12-6e50-45e9-9103-2e45172f8fc0`. Date 2026-10-13 (tool timestamps in `evidence/playwright/` read 2026-10-12T16:26–16:29Z). Editing scope User. Target Form `FX_Items`.

Outcome: **T1 complete; stopped before any Form change, unload, close or Save.** Read-only, except view-state changes (Details panel expanded, Components tree expanded, Properties groups expanded, component/Form selection, tab selection). No Form definition change.

## 1. Sources reviewed

| Source | Read | Note |
| --- | --- | --- |
| `AGENTS.md` | Full | Learning mode; FX_ scope; evidence and recovery rules |
| `docs/mongoose/transcripts/hello-world-pt4.md` Section 8 (lines 209–226) | Full section | Steps 1–10 of 09:18–11:04; step 5–7 (Grid) out of scope |
| `experiments/EXP-062-R2-…picture-import-ui.md` | Full | Unload sequence (T2 Web Client, T3 Designer), binding gate, Caption string behaviour |
| `experiments/EXP-062-R4-…picture-import-ui.md` | Lines 1–188 of 413 (T1–T9 entries) | Layout model: Location = **row; column**, Size = **width; height** (T3, line 88); Toolbox drop creates an oversized Static; Caption literal creates prompt. T10–T14 not read (outside T1 need). |
| `experiments/EXP-066-R2-…section-7-…md` | Full | FX_UMsDescription added to FX_Items IDO (Bound to Column, `fxum.FX_Description`), accepted 2026-10-13; Section 8 unload deferred to this experiment |
| `experiments/EXP-067-…md` | Did not exist at start; created by this worker (see record) | — |

Not read: `tools/` (intentionally unreadable); no secrets file; no shell or git commands.

## 2. Browser tabs and selection

- Tab list (before any select): 2 tabs. Tab 0 = Mongoose Designer (`designer/default.aspx?MGForm=FX_Items`), current at start. Tab 1 = Web Client (`mingle-portal…favoriteContext=FX_Items`).
- Selects: tab 0 (once, after two screenshot timeouts, see §8), tab 1 (once, for the Web Client reads), tab 0 (once, to return to the Designer for the Layout capture).

## 3. Designer baseline (tab 0)

**Identity (observed):** Designer tab heading `FX_Items`; Design Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Form Type Normal; Is Master True. (`t1-01`; snapshot first in this task.)

**Clean state (observed):** toolbar `Save` disabled, `Regenerate Form` disabled, `Undo` disabled, `Redo` disabled (accessibility). Save icon greyed in `t1-01`. No dialog or unsaved-change prompt.

**Component list (observed; Components grid, accessibility readback `evidence/playwright/page-2026-10-12T16-26-30-788Z.yml`):** 17 tree entries, 2 Pane containers + 15 components.

| Pane | Name | Type | Data Source | Tab | Other |
| --- | --- | --- | --- | --- | --- |
| 00 | FormCollectionGrid | Grid | objects | 0 | |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 1 | FormCollectionGrid |
| 00 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 2 | FormCollectionGrid |
| 00 | FX_CostGridCol | GridColumn | object.FX_Cost | 3 | FormCollectionGrid |
| 00 | FX_UMGridCol | GridColumn | object.FX_UM | 4 | FormCollectionGrid |
| 01 | FX_PictureStatic | Static | object.FX_Picture | 0 | |
| 01 | FX_RefreshButton | PushButton | — | 0 | Event to generate FX_ImportPicture |
| 01 | FX_ItemStatic | Static | — | 5 | |
| 01 | FX_ItemEdit | Edit | object.FX_Item | 6 | |
| 01 | FX_DescriptionStatic | Static | — | 7 | |
| 01 | FX_DescriptionEdit | Edit | object.FX_Description | 8 | |
| 01 | FX_CostStatic | Static | — | 9 | |
| 01 | FX_CostEdit | Edit | object.FX_Cost | 10 | |
| 01 | FX_UMStatic | Static | — | 11 | |
| 01 | FX_UMCombobox | ComboBox | object.FX_UM | 12 | |

**Absence proof:** `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` are not in the list above (full list read, grid expanded). `FX_VarTestEdit` also absent (consistent with EXP-062-R4 T5). `FX_ImportPicture` is a Form event group (EXP-062-R4), not a component.

**Geometry (observed; accessibility readbacks; units Char; Location = row; column):**

| Item | Size (width; height) | Location (row; column) | Source snapshot |
| --- | --- | --- | --- |
| FX_UMCombobox | 37.25; 2.15 | 7.75; 23.75 | `page-2026-10-12T16-27-07-788Z.yml` (Layout rows) |
| FX_PictureStatic | 20; 9 | 10.5; 21.5 | `page-2026-10-12T16-27-46-112Z.yml` |
| FX_RefreshButton | 14.25; 1.89 | 12.1666666666667; 5.25 | `page-2026-10-12T16-27-53-786Z.yml` |
| Form | 69; 21 (Layout Size) | n/a | `page-2026-10-12T16-28-11-048Z.yml` |

Form Layout also read: Unit Char; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Synchronize FlexLayout True. These match EXP-062-R4 T1/T2.

FX_PictureStatic also: Name `FX_PictureStatic`, Binding Type Property, Binding `object.FX_Picture`. FX_RefreshButton also: Caption `FX_sImport`, Binding None, Primary `FX_ImportPicture`, Theme Class `FX_BlueButton` (`t1-16` shows Name, Caption and Theme Class; Layout not visible in that capture).

**Target-area check (measured from the readbacks above; model calibrated in EXP-062-R4 T3):**

- FX_UMsDescriptionStatic target: rows 10.5–12.0; columns 42.5–56.5 (Size 14; 1.5).
- FX_UMsDescriptionEdit target: rows 12.5–14.39; columns 42.5–56.5 (Size 14; 1.89).
- Overlap: none. FX_PictureStatic occupies columns 21.5–41.5 (target starts 1.0 column to its right). FX_UMCombobox occupies rows 7.75–9.90 (target starts 0.6 row below it). FX_RefreshButton occupies columns 5.25–19.5. Input-column components (Item/Description/Cost/UM) sit in rows ≤ ~9.9 on the canvas (`t1-01`). Area visually empty (`t1-01`).
- Inside the Form: the vertical extent (to row 14.39) is inside height 21. The horizontal right edge (56.5) is inside the declared width 69. If Pane 1 is the 58 columns right of the splitter at 11, the edge is 1.5 columns inside Pane 1.
- **Caveat (decision point, not a T1 block):** the visible canvas right edge (x ≈ 810 px) maps to about column 56.2 under the calibrated model (origin x 355 px, 8.1 px per column). The target right edge (x ≈ 813 px) therefore sits about 3 px past the visible edge. FX_UMCombobox (columns 23.75–61.0) already runs past that visible edge and is clipped at x 810 (`t1-01`), so the visible edge is a display clip and not a reliable bound. The brief's stop rule covers "exceeds the Form". By declared geometry the target is inside; the coordinator should confirm the Pane 1 width model before any Toolbox drop.

## 4. Web Client runtime Forms (tab 1)

- Portal tabs: `System Administrator` (portal home, not a Mongoose artifact; not acted on) and `Mongoose` (selected).
- Inside Mongoose: two Form tabs.
  - `FX_Items` runtime Form, selected, `(Object 1 of 3)`, dumbbell / 45 pound iron / 45.00 / EA. Toolbar `Save` disabled (accessibility `button "Save" [disabled]`; `t1-10`, `t1-13`). **Clean.** Not closed, not acted on.
  - `IDOs` (IDO Collections; not a runtime Form), inactive. Its dirty state was not read because it was not selected (limitation).
- Only one runtime FX_Items Form is open. No dirty runtime Form. No Form closed (brief: close only a clean FX_Items runtime Form if one is open; none closed in T1).
- Observation (not interpreted): the runtime FX_Items Form displays a puppy image in the picture region for dumbbell (`t1-10`, `t1-11`, `t1-13`). EXP-062-R4 T13 recorded the region as blank for all three records. This difference is recorded only; cause not established.

## 5. Preference reading (read-only; User Preferences)

- Route: Web Client `View` menu > `User Preferences...`, with the dialog's Behavior page showing.
- Reading: **`Unload IDO Metadata With Forms` = checked** (screenshot `t1-12`; accessibility `checkbox "Unload IDO Metadata With Forms" [checked]`).
- Close: the dialog has **no Cancel button** (footer buttons are OK and Help). The non-committing close used was the dialog's `Close Window` control (title-bar X). **OK was not pressed.** This differs from the brief's "close it with Cancel" and is recorded as a deviation.
- Result: dialog closed (`t1-13`). No preference value changed (no checkbox was clicked; focus only).
- Status bar after the close reads `Show Configuration Name On Caption (Object 1 of 1)`. This is the focused field of the dismissed dialog, not a record change.

## 6. Action audit (T1, cumulative; explicit calls)

| Category | Count |
| --- | --- |
| Browser tab list | 1 |
| Browser tab selects | 3 (tab 0, tab 1, tab 0) |
| Untargeted snapshots (explicit) | 2 (Designer start; Web Client) |
| Targeted snapshot | 1 (Properties panel `e1120`) |
| Finds | 18 |
| Clicks | 17 (Details expand; Components tab; Pane 01 row select; Components Expand; FX_UMCombobox row; Layout group select; Properties Expand All; FX_PictureStatic row; FX_RefreshButton row; Form tab; Form Expand; Web Client Form menu; Web Client View menu ×2; User Preferences...; Close Window; Component tab) |
| Key presses | 1 (ArrowRight; moved focus to the Layout value cell; no value changed) |
| Mouse wheel | 2 (Form Properties scroll; no value changed) |
| Screenshots (successful) | 16 (`t1-01` to `t1-16`) |
| Screenshot timeouts | 2 (both on `t1-01` before the tab select; tab-select recovery applied; see §8) |
| Typed entries | 0 |
| Designer Save | **0** |
| Unload (Web Client or Designer) | **0** |
| Form close / reopen (Designer or runtime) | **0 / 0** |
| Runtime Form close / reopen | **0 / 0** |
| Component add / delete / rename / property change | **0 / 0 / 0 / 0** |
| Preference change | **0** |
| Runtime record edit / runtime Save | **0 / 0** |
| Check-in / undo checkout | **0** |
| Browser JavaScript, console, network, direct URL, refresh, restart | **0** |
| Designer view-state changes (no Form-definition change) | Details panel expanded; Components tree expanded; Properties Expand All and Form Layout expanded; component and Form selection; tab selections. Designer remains clean. |

Total explicit browser calls in T1: **63** (tab list 1, selects 3, snapshots 3, finds 18, clicks 17, key 1, wheel 2, screenshot attempts 18 of which 16 succeeded and 2 timed out).

## 7. Acceptance state (T1 scope)

| AC | State | Note |
| --- | --- | --- |
| AC-1 | **Supported for the baseline** (identity, scope, clean state, component list, the four geometry readbacks, absences, target-area check) | Geometry screenshots do not show the Layout rows (see §8); the values come from accessibility readbacks |
| AC-2 | **Partial.** Preference read as checked and left unchanged: passed. Unload steps not performed (out of T1) | Binding picker gate not reached |
| AC-3 to AC-8 | Not attempted | Out of T1 scope |

## 8. Screenshots (what each proves, and does not prove)

All under `evidence/EXP-067/`.

- `t1-01-designer-baseline-fx-items-user-scope-clean.png`: after the tab select. Shows tab title `FX_Items`, Properties Name `FX_Items`, Version beginning `User version for us…`, footer `ScopeType: User / ScopeName: anton.ramos@…`, greyed Save icon, canvas with Item/Description/Cost/Unit of Measure fields, Import button and the picture region with a broken-image glyph. **Does not prove:** the Version string in full (truncated), the Save state beyond the greyed icon (accessibility disabled is the proof), any geometry. Note: two earlier `t1-01` attempts timed out (`TimeoutError … taking page screenshot`, waiting for fonts); the tab select succeeded and the third attempt wrote the file.
- `t1-02-designer-details-expanded-components-tab.png`: Details panel expanded, Collections tab shown (`Primary Collection: FX_Items`). Does not show the component list.
- `t1-03-components-grid-baseline.png`: Components tab, Pane (00) and Pane (01) collapsed. Does not show the components.
- `t1-04-components-grid-expanded-baseline.png`: Components tree expanded; only the top rows visible (Pane 00, FormCollectionGrid, first GridColumns). **Does not show the full list**; the full list is the accessibility file `evidence/playwright/page-2026-10-12T16-26-30-788Z.yml`.
- `t1-05-fx_umcombobox-selected-properties.png`: FX_UMCombobox selected; Properties header `FX_UMCombobox (EnhancedCombo)`, Caption `C(FX_UMStatic)`, Type ComboBox. Geometry not visible.
- `t1-06-fx_umcombobox-layout-size-location.png`: Layout group highlighted but **collapsed**; no Size or Location visible. (Filename overstates content.)
- `t1-07-fx_umcombobox-layout-expanded.png`: after ArrowRight; the group is **not** expanded (focus on the Layout value cell). (Filename overstates content.)
- `t1-08-fx_umcombobox-properties-expanded-layout.png`: Expand All applied; Behavior group visible; Layout rows **below the visible area**. (Filename overstates content.)
- `t1-09-form-properties-tab-before-layout.png`: Form tab selected; Layout collapsed; FX_RefreshButton selected on the canvas (Import button has selection handles).
- `t1-10-webclient-form-menu-open.png`: Web Client Form menu open: Open, Close and Save Changes, Close and Cancel Changes, Export to File, Definition (submenu), Sign Out, then recent forms (FX_Items, IDOs, Property Classes, Sql Tables, Export/Import Strings, IDO Projects, FX_UMs, FX_HelloWorld01, Data Maintenance Wizard, Runtime Builder Selection). **No Preferences entry in this menu.** Runtime shows Object 1 of 3 and the picture. The Definition submenu was not opened.
- `t1-11-webclient-view-menu-open.png`: taken after the first View click, which **closed the Form menu but did not open the View menu** (see §9). Runtime unchanged; Import not activated.
- `t1-12-user-preferences-unload-ido-metadata-readonly.png`: User Preferences dialog, Behavior page. `Unload IDO Metadata With Forms` in the right column, first row, checked (blue, ticked). Footer: OK and Help only. The accessibility readback confirmed `[checked]`. **Does not prove** the stored value beyond the dialog's current display.
- `t1-13-after-preferences-close-window-webclient-runtime-state.png`: dialog closed; runtime FX_Items, Object 1 of 3, Save icon greyed; status bar shows the dismissed dialog's focus text.
- `t1-14-designer-form-layout-after-scroll.png`: Designer Form tab after the tab select; Layout rows visible: Splitter Vertical, Splitter Position 11, Pane 0 Scroll Bars Never. Size row **not visible**. Save icon greyed. (Filename was intended for Size.)
- `t1-15-designer-form-layout-size-69-21.png`: second wheel scroll did not move the Properties tree; same view as `t1-14`. **Does not show Size 69; 21.** (Filename overstates content.) The Size value is the accessibility readback `page-2026-10-12T16-28-11-048Z.yml` (`Size` = `69; 21`, `Unit` = `Char`).
- `t1-16-fx_refreshbutton-component-properties-layout.png`: Component tab; `FX_RefreshButton (Button)`; Name `FX_RefreshButton`; Caption `FX_sImport`; Theme Class `FX_BlueButton`. **Layout rows not visible**; geometry is the accessibility readback `page-2026-10-12T16-27-53-786Z.yml`.

**Limitation (AC-1 evidence):** no screenshot in this task shows the Size or Location rows for the four baseline items. Their values are accessibility readbacks (tool-written files under `evidence/playwright/`), which the record cites. Visual geometry capture would need more Properties scrolling (not completed).

## 9. Blockers, incidents and deviations

1. **Screenshot timeouts (environment).** The first two `t1-01` attempts failed at `taking page screenshot … waiting for fonts … fonts loaded` (5 s timeout) while Designer tab 0 was current. A tab select of tab 0 (the brief's permitted navigation) preceded the third attempt, which succeeded. Suspected rendering timing, not repeated further.
2. **View menu click dismissed the Form menu** (one extra click; no action). The second View click opened the menu. No menu item was clicked before the preference route.
3. **Preferences dialog has no Cancel button.** Used `Close Window` (no OK). Brief said "Cancel". Operator to confirm the non-committing close is acceptable.
4. **Layout expansion.** ArrowRight moved focus to the value cell but did not expand; no value changed. Expand All used instead.
5. **Second Form wheel scroll** did not move the Properties tree (cause unknown).

No stop-blocker for T1. The target-area caveat (§3) is a decision point for the mutation stage.

## 10. Worker-written file inventory (T1)

- `experiments/EXP-067-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created).
- `evidence/EXP-067/T1-preflight-report.md` (this file; created).
- `evidence/EXP-067/t1-01-designer-baseline-fx-items-user-scope-clean.png`
- `evidence/EXP-067/t1-02-designer-details-expanded-components-tab.png`
- `evidence/EXP-067/t1-03-components-grid-baseline.png`
- `evidence/EXP-067/t1-04-components-grid-expanded-baseline.png`
- `evidence/EXP-067/t1-05-fx_umcombobox-selected-properties.png`
- `evidence/EXP-067/t1-06-fx_umcombobox-layout-size-location.png`
- `evidence/EXP-067/t1-07-fx_umcombobox-layout-expanded.png`
- `evidence/EXP-067/t1-08-fx_umcombobox-properties-expanded-layout.png`
- `evidence/EXP-067/t1-09-form-properties-tab-before-layout.png`
- `evidence/EXP-067/t1-10-webclient-form-menu-open.png`
- `evidence/EXP-067/t1-11-webclient-view-menu-open.png`
- `evidence/EXP-067/t1-12-user-preferences-unload-ido-metadata-readonly.png`
- `evidence/EXP-067/t1-13-after-preferences-close-window-webclient-runtime-state.png`
- `evidence/EXP-067/t1-14-designer-form-layout-after-scroll.png`
- `evidence/EXP-067/t1-15-designer-form-layout-size-69-21.png`
- `evidence/EXP-067/t1-16-fx_refreshbutton-component-properties-layout.png`
- Tool-written, not worker-authored (outside the EXP-067 path): accessibility snapshot files under `evidence/playwright/` created by this task at timestamps 2026-10-12T16:26–16:29Z, including `page-2026-10-12T16-26-12-538Z.yml`, `…16-26-19-171Z.yml`, `…16-26-26-610Z.yml`, `…16-26-30-788Z.yml`, `…16-26-44-262Z.yml`, `…16-26-50-621Z.yml`, `…16-27-07-788Z.yml`, `…16-27-46-112Z.yml`, `…16-27-53-786Z.yml`, `…16-28-00-084Z.yml`, `…16-28-11-048Z.yml`, `…16-28-26-347Z.yml`, `…16-28-36-118Z.yml`, `…16-28-43-264Z.yml`, `…16-28-48-899Z.yml`, `…16-29-00-574Z.yml`, `…16-29-37-730Z.yml`. The harness and the operator's git review are authoritative for this list.

## 11. Knowledge state (T1)

| Finding | State |
| --- | --- |
| Designer identity FX_Items, User scope, clean (Save disabled) | observed (one session) |
| Component list (17 tree entries; 15 components) and absence of FX_UMsDescriptionStatic/Edit | observed (one session; accessibility) |
| Geometry of FX_UMCombobox, FX_PictureStatic, FX_RefreshButton, Form | observed (accessibility readback; no screenshot shows the values) |
| Target area free of overlap (declared geometry) | observed (computed from readbacks) |
| Target right edge at the visible canvas edge (≈3 px past it) | observed (measured); **Pane 1 width model unresolved** |
| `Unload IDO Metadata With Forms` checked, unchanged | observed (one session) |
| Only one runtime Form open (FX_Items, Object 1 of 3, clean) | observed |
| Runtime picture region renders an image for dumbbell (EXP-062-R4 T13 said blank) | observed; cause unresolved |
| Preferences dialog has no Cancel (OK and Help only) | observed |
| Unload label, binding picker, Save, reopen, runtime records | not attempted (later tasks) |
| Any replay or procedure status | not claimed |
