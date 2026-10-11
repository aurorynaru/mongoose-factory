# EXP-062-R4 — Hello World Part 4 Section 4: Configure picture import UI on the User-scope FX_Items Form (replay with Form width and explicit Layout geometry)

**FINAL STATUS (T14, 2026-10-12): OBSERVED, ACCEPTED UNDER OPERATOR AMENDMENTS AND THE G8 WAIVER. NOT replay_verified.** The experiment's configuration is saved and recovered in the Designer (17 components; FX_VarTestEdit deleted; FX_RefreshButton caption FX_sImport rendering Import; FX_RefreshButton Primary FX_ImportPicture; FX_PictureStatic Size 20; 9, Location 10.5; 21.5, binding object.FX_Picture, No Colon True; FX_ImportPicture one Binary Value Action with ACTION(Import) COMPONENT(FX_PictureStatic); FX_Test two original actions; Form Size 69; 21, Splitter Vertical, Position 11). The runtime Form was read without activating Import. Amendments: two ordinary Designer Saves (T9 intermediate, T12 final) instead of one; one operator-authorized discard (T10, "No" at the save prompt) and two close/reopen cycles. **FX_VarTest / Form - Temporary is WAIVED BY OPERATOR, not verified as preserved** (absent in the native Variables grid after the final save and reopen; the cause is a candidate_procedure only). AC-12 is substantially met: the picture region is visually blank for all three runtime records, which is not proof of an empty binary value. The design-time broken-image glyph is unresolved and not a verified import failure. Full acceptance matrix and audit: §11 below and `evidence/EXP-062-R4/T14-final-acceptance-and-audit-report.md`. T14 made zero browser calls.

**Current status (T13, 2026-10-12): T13 COMPLETE for the read-only runtime scope. FX_Items runtime Form opened through Web Client Form > Open > Select Form (one FX_Items entry; title FX_Items). The three original records were read through native row navigation: dumbbell (45 pound iron, 45.00, EA), eggs (cage free, 6.99, DZ), guitar (natural acoustic, 129.99, EA). Each shows a visible Import button (captioned Import; not activated). The picture region is blank for all three records (no element, glyph or image; visual observation only; whether a binary value exists is unresolved). Runtime Save stayed disabled; no prompt; no record edited. The Designer was re-checked read-only: Save and Undo disabled, User scope, clean. Cumulative Designer Saves: 2 (T9, T12); T13 Saves: 0. AC-12 is substantially met, with the limitation that the picture region is verified visually only. Full report: `evidence/EXP-062-R4/T13-runtime-readonly-verification-report.md`.**

**Previous status (T12, 2026-10-12): T12 COMPLETE for the scoped steps. The final Designer Save succeeded (native toast: "Form [FX_Items] and global object(s) were saved."; Save, Undo and Redo disabled afterwards). The Form was closed once with no unsaved-changes prompt and reopened once from the Form menu's recent list. The recovered definition is clean (Save and Undo disabled; ScopeType User; ScopeName anton.ramos@3mworks.com.ph) and matches the pre-Save values: 17 components, FX_VarTestEdit absent, FX_PictureStatic Size 20; 9, Location 10.5; 21.5, Binding object.FX_Picture, No Colon True; FX_RefreshButton Caption FX_sImport (canvas shows Import), authoritative Primary FX_ImportPicture, geometry unchanged; FX_ImportPicture one Binary Value Action with ACTION(Import) COMPONENT(FX_PictureStatic); FX_Test two original actions; Form Unit Char, Size 69; 21, Splitter Vertical, Position 11. Gate G8 (FX_VarTest) is OPERATOR-WAIVED: the Form - Temporary group is still absent from the Variables grid after save and reopen. This is NOT evidence that FX_VarTest persisted, and the loss cause remains a candidate_procedure. The broken-image glyph still shows on the picture Static (not fixed). Runtime check NOT performed (outstanding; the Import action was not activated). Cumulative Designer Saves: 2 (T9 intermediate, T12 final). Full report: `evidence/EXP-062-R4/T12-final-save-and-saved-form-recovery-report.md`.**

**Previous status (T11, 2026-10-12): T11 STOPPED at pre-Save gate G8. FX_RefreshButton Events > Primary is committed to FX_ImportPicture (one change; authoritative readback after reselect; Components-grid "Event to generate" still shows FX_Test, a stale column). FX_ImportPicture sequence 0 (Binary Value Action, Import, FX_PictureStatic), FX_PictureStatic (Size 20; 9, Location 10.5; 21.5, Binding object.FX_Picture, No Colon True), FX_RefreshButton (Caption FX_sImport, geometry unchanged), 17 components, FX_Test two actions and the Form layout (Size 69; 21, Splitter Vertical, Position 11) all match. **Gate G8 fails: the Variables grid lists no "Form - Temporary" group and no FX_VarTest row** (Form - Persistent, Global - Persistent and Global - Temporary only), although the T9 post-Save screenshot showed FX_VarTest. Cause unresolved (possibly lost in the T10 discard-and-reopen; the T10 pass did not check the Variables tab, so the earlier "FX_VarTest present" note was unverified and is corrected here). Per the brief, the worker stopped without correction and without any Save. The Form is dirty, open and unsaved (Save enabled). Operator decision needed on FX_VarTest before any Save. Full report: `evidence/EXP-062-R4/T11-primary-reassignment-and-pre-save-gate-report.md`.**

**Previous status (T10, 2026-10-12): T10 COMPLETE for the scoped steps. The unintended post-T9 dirty state was discarded under the operator authorization (close, then "No" at the prompt "Form FX_Items has changed / Do you want to save the form definition?"; one close, one reopen from the Form menu's recent list). The reopened saved definition is clean (Save disabled) and matches the T9 intermediate readbacks: 17 components, FX_VarTestEdit absent, FX_PictureStatic Size 20; 9, Location 10.5; 21.5, Binding object.FX_Picture, No Colon True; FX_RefreshButton Caption FX_sImport (canvas shows Import), Primary FX_Test, geometry unchanged; Form Size 69; 21, Splitter Vertical, Position 11. FX_ImportPicture sequence 0 now commits Response Type Binary Value Action, Action Type Import, and component FX_PictureStatic (one OK; reselect verified; exactly one action; FX_Test unchanged). The Form is dirty and open, NOT saved. Not done (outside T10): final Save, Primary reassignment, final close/reopen, runtime check. Full report: `evidence/EXP-062-R4/T10-discard-recovery-and-action-configuration-report.md`.**

**Previous status (T9, 2026-10-12): T9 STOPPED (blocked before the selector check). One operator-approved intermediate Save SUCCEEDED (native toast: "Form [FX_Items] and global object(s) were saved."; Save disabled right after). The Form is now DIRTY again (Save and Undo enabled) after an unintended Form-level Splitter/Size Width focus event; readbacks Size 69; 21 and Splitter Vertical are unchanged. Under the uncertain-mutation stop rule, the Parameters selector was NOT opened, no action value was set, and nothing was undone or saved again. Operator decision needed on the dirty state, then on the selector (and on a conditional close/reopen, which needs a clean Form). Full report: `evidence/EXP-062-R4/T9-intermediate-save-and-action-selector-report.md`.**

**Previous status (T8, 2026-10-12): T8 BLOCKED at AC-7 (component target not offered). Form dirty, NOT saved.** The property-pane Expand control expanded the Response node (Type, Parameters, Edit in-line Script). Response Type is committed as `Binary Value Action` on the sequence-0 action. In the Event Handler Parameters dialog, Action `Import` was selected, but the Component dropdown does not offer `FX_PictureStatic`: it lists FX_VarTestEdit (deleted in T5) and omits FX_PictureStatic (added in T6), so the list is stale. The dialog was cancelled (no OK); Action Type and component are not committed. Nothing guessed or typed; FX_Test (both actions) unchanged; FX_RefreshButton Primary still `FX_Test`. Full report: `evidence/EXP-062-R4/T8-fx-importpicture-action-configuration-report.md`. Decision needed on refreshing the component list (the operator must approve any Save or reopen route).

**Previous status (T7, 2026-10-12): T7 BLOCKED at AC-7 (event action not configured). Form dirty, NOT saved.** The Event Handler dialog created one group `FX_ImportPicture` (OK once). The group has one action row (seq 0, Disabled false) whose Response Type, Action Type and target component are **not set**: the Response node in the Event To Handle editor does not expand and no Response Type / Action Type / component control is reachable at the current Details panel size. Nothing guessed; no second action; FX_Test (both original actions) unchanged; FX_RefreshButton Primary still `FX_Test`. Preflight passed (FX_PictureStatic readback correct; 17 components). Save enabled; no dialog. Full report: `evidence/EXP-062-R4/T7-fx-importpicture-event-handler-report.md`. Decision needed on the route to configure or remove the unconfigured action.

**Previous status (T6, 2026-10-12): T6 COMPLETE. Exactly one Toolbox drop; FX_PictureStatic added and configured (unsaved).** The drop created `static1_USER` (default Size `75; 21.11`, Location `15.5; 30.25`, clipped). Layout > Size Width 20 and Height 9 (committed, `20; 9`); Layout > Location Top 10.5 and Left 21.5 (committed, `10.5; 21.5`), set before any other property. Renamed FX_PictureStatic; Binding Type Property; Binding `object.FX_Picture` (committed); No Colon True (committed). Reselect readback confirms all values. Count 17; FX_PictureStatic once; FX_VarTestEdit absent; FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test` unchanged; FX_VarTest and FX_Test preserved; FX_ImportPicture absent. The Form is dirty and NOT saved (Save enabled). Canvas caption still raw ID. The Properties header lags (shows `static1_USER`) though the Name row shows FX_PictureStatic. Full report: `evidence/EXP-062-R4/T6-fx-picturestatic-placement-and-configuration-report.md`.

**Previous status (T5, 2026-10-12): T5 COMPLETE. Exactly one component deleted: FX_VarTestEdit** (Components-grid trash button; confirmation `Are you sure you want to delete FX_VarTestEdit and all the components it contains?`; OK once). Component count 17 → 16; every other baseline component present; FX_VarTest (`~LIT~()`) and FX_Test (both original actions) unchanged; FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`, Name/Size/Location/Binding unchanged. The Form is dirty and NOT saved (Save enabled). The canvas caption still shows the raw ID `FX_sImport`. No Static, binding, No Colon, event, Primary change, Save, close or reopen. Full report: `evidence/EXP-062-R4/T5-fx-vartestedit-deletion-report.md`.

**Previous status (T4, 2026-10-12): T4 COMPLETE. FX_sImport created once (literal `Import`, Yes at the exact-ID prompt) and assigned as the FX_RefreshButton Caption. The Form is dirty and NOT saved.** Readbacks: String `FX_sImport` = `Import` (reopened string editor, read-only); Caption dropdown lists `FX_sImport`; FX_RefreshButton Name, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`, Primary `FX_Test` unchanged. The canvas caption shows the raw ID `FX_sImport` before Save (resolution to `Import` untested). No deletion, Static, Primary, event, width change, or Save. Full report: `evidence/EXP-062-R4/T4-fx-simport-string-and-caption-assignment-report.md`.

**Previous status (T3, 2026-10-12): T3 read-only coordinate model validation COMPLETE. Zero mutations.** The Location readback order is **row; column** (the T2 record assumed x; y, which was wrong). The brief's prediction for FX_DescriptionStatic (top-left x≈379, y≈159) matches the observed outline (≈380, 159) within about 1 px. Four other components fit the same model within about 2 px. The proposed FX_PictureStatic Location `10.5; 21.5`, Size `20; 9` yields x 529–691, y 290–453: fully inside the canvas (x 258–810, y 100–480) and clear of the inputs and FX_RefreshButton, but it **overlaps FX_VarTestEdit**, which must be deleted first. The T2 blocker is resolved by this check. FX_sImport is still absent (T1). Save disabled. Full report: `evidence/EXP-062-R4/T3-coordinate-model-validation-report.md`.

**Previous status (T2, 2026-10-12): T2 read-only baseline completion COMPLETE. Stopped before any change; blocked on Location mapping.** Pane (00) and Pane (01) expose no Component properties (N/A). All four GridColumns are read. The Form Layout Size `69; 21` is the only Form size row; the fallback condition holds (no Form width edit). **The brief's readback formula gives no usable numeric Location for FX_PictureStatic:** the Location readbacks do not correspond to canvas placement, and the vertical scale is unresolved (18–22 px per unit). This is a blocker for the Static's Location (no guess made). A visual candidate rectangle (screen x 530–695, y 290–466; valid only after FX_VarTestEdit is deleted) is recorded. FX_sImport is still absent. Save disabled throughout. Full report: `evidence/EXP-062-R4/T2-baseline-completion-and-candidate-position-report.md`.

**Previous status (T1, 2026-10-12): T1 read-only preflight COMPLETE. Stopped before any change.** FX_Items reopened from its saved definition (User scope, clean, Save disabled). The discard is confirmed (FX_VarTestEdit present; Caption `FX_Refresh`; Primary `FX_Test`; no default-named Static). FX_Picture is offered by the Binding picker. **FX_sImport is absent** (the brief's AC-2 expects it to exist with value `Import`; the brief's step allows creation in this case; coordinator decision needed). The Form width field is ambiguous, so the fallback area below the input column is chosen. Nothing is replay_verified. Full report: `evidence/EXP-062-R4/T1-preflight-report.md`.

Replay of EXP-062-R3 (blocked at preflight by a Designer session expiry; nothing changed) and of EXP-062-R2 (blocked at picture Static placement; discarded unsaved session). Date 2026-10-12. LEARNING MODE. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.

## 1. Run identity

- Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 0, task **T1** (read-only preflight, baseline, and Form-size investigation).
- Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `ca311ac6-0042-460c-aa9a-a8e8fcc74f39`.
- Brief commits: `8cf50ea` (R3 blocked; R4 draft), `b7f64bd` (R4 approved brief).
- Full T1 report: `evidence/EXP-062-R4/T1-preflight-report.md`.

## 2. Starting state and route

- At task start the browser had **one** Web Client tab (`Mongoose`). The Designer tab that R2 and R3 used was not present. No challenge, no dialog, no portal banner.
- The Designer was launched from the Web Client (Form > Definition > Designer). The "Identify Your Editing Scope" dialog was confirmed with its pre-filled values (Scope User; anton.ramos@3mworks.com.ph). This route is not in the brief; the coordinator should confirm it.
- FX_Items opened from the Designer Form menu's recent list on the **first** attempt. No error, no retry, no Open > Select Form fallback.

## 3. T1 results (observed only)

| Gate / check | Result | Evidence |
| --- | --- | --- |
| Tab list (before any select) | 1 tab (Web Client); Designer launched; tab 1 selected after the list | `t1-01` |
| Identity: Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | Passed | `t1-03` |
| Clean state: Save disabled (Regenerate, Undo, Redo disabled) | Passed | `t1-03`, `t1-07` |
| Discard: FX_VarTestEdit present; FX_RefreshButton Caption `FX_Refresh`; Primary `FX_Test`; no default-named Static (17 components) | Passed | `t1-04` |
| Complete component baseline (Layout Size and Location for 10 components and FormCollectionGrid; Pane and GridColumn Layout not read) | Observed (T1 report §4) | `t1-04` |
| FX_VarTest variable (`~LIT~()`, Form-Temporary, Persistent False, Global False) | Observed | T1 report §5 |
| FX_Test handler group: seq 0 Prompt; seq 1 Set Values (both disabled `false`) | Observed | T1 report §5 |
| FX_ImportPicture absent; FX_PictureStatic absent | Observed | `t1-04`; T1 report §5 |
| FX_Picture offered by the native Binding picker (between `object.FX_Item` and `object.FX_UM`); Escape without commit | Passed | `t1-06`; binding unchanged after Escape |
| **FX_sImport absent** (Caption list: `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM` only; Global Objects filter returned no rows); Cancelled without commit | **Observed absent** (AC-2 string sub-check not met as written) | `t1-07`; T1 report §6b |
| Form tab Layout: Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Unit Char; **Size `69; 21`**; Synchronize FlexLayout True | Observed (no change) | T1 report §7a |
| Details > Design View Size: Form group Width 69 / Height 21 (greyed); View group Width 69 / Height 21 (editable; Designer view setting, not to be changed) | Observed (no change) | `t1-05`; T1 report §7b |
| Canvas extent (screen px): about x 258–810, y 100–480; input boxes x ≈ 548–810 (clipped at the right edge) | Observed | `t1-03`, `t1-04`; T1 report §7c |

## 3a. T2 — read-only baseline completion (cycle 1, task T2)

Full report: `evidence/EXP-062-R4/T2-baseline-completion-and-candidate-position-report.md`.

- Tab list (before any select): 2 tabs (Web Client, Designer). Designer tab selected once; FX_Items open, User footer, Save disabled, no dialog.
- Pane (00) and Pane (01): Component property tree empty when selected; recorded N/A. Four GridColumns read: Size `10; 0`, Location `0; 0`, Captions `FX_sItem`, `FX_sDescription`, `FX_sCost`, `FX_sUM`, Bindings `object.FX_Item`, `object.FX_Description`, `object.FX_Cost`, `object.FX_UM`, Primary blank. FormCollectionGrid re-read: Size `11; 21`, Location `0; 0`.
- Form tab Layout re-read (`t2-03`): Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed; Unit Char; Size `69; 21`; Synchronize FlexLayout True. No Width field; Size row has no dropdown or dialog control (editability not tested). Design View Size: Form group 69 / 21 (greyed); View group 69 / 21 (editable; forbidden to change). **Fallback applies; no Form-level change.**
- Location assessment (`t2-02`, `t2-04`): horizontal scale ≈ 8.0–8.25 px per unit; vertical scale 18.1–22 px per unit (unresolved). Label Statics share one screen x but have Location x readbacks 1 to 7.75; Edits share one screen x with y readbacks all 23.75; FX_RefreshButton (12.17; 5.25) and FX_VarTestEdit (12.72; 30.25) do not fit any linear mapping. The brief's formula gives x = 47.0 and y = 23.75 (or 3), which is outside the Form height or overlaps the input column. **No numeric Location can be derived; blocker.**
- Visual candidate (screen px; valid only after deletion of FX_VarTestEdit): x 530–695, y 290–466. Clear of FX_RefreshButton (x 398–515) and of the input column (bottom ≈ 281). Inside the canvas if the vertical scale is ≈18–20 px per unit; at 22 px per unit it would reach y 488 (past the canvas bottom at 480).
- Counts (T2): browser tab list 1; tab select 1; clicks 10 (tree rows and tabs, view/selection only); find 12; explicit snapshots 2; screenshots 4 (`t2-01` … `t2-04`); type, press_key, navigate, reload 0; Designer Save 0; component add/delete 0; string create 0; handler create 0; binding, Caption, Primary commit 0; Form width or height change 0; top-toolbar Delete Form Definition click 0; Components-grid trash click 0; unload 0; runtime open or import 0.
- Cumulative (T1 + T2): tab lists 2; tab selects 2; clicks 58; Designer Save 0; Form close or reopen 0; mutations 0.
- Worker-written files (T2): `evidence/EXP-062-R4/T2-baseline-completion-and-candidate-position-report.md`; `evidence/EXP-062-R4/t2-01-pane00-selected-component-tab-no-properties-exposed.png`; `evidence/EXP-062-R4/t2-02-fx_umstatic-selected-outline-canvas-scale-readonly.png`; `evidence/EXP-062-R4/t2-03-form-tab-layout-size-69-21-unit-char-readonly.png`; `evidence/EXP-062-R4/t2-04-fx_umcombobox-selected-location-readback-vs-canvas-readonly.png`; this record (updated).

**Blockers and decisions for the coordinator (T2):**
1. Placement method: no numeric Location can be derived from the readbacks. Options: (a) a documented placement method (for example, one Toolbox drop, then a readback and visual check, with a correction if it fails the canvas test; this needs explicit confirmation given the one-drop limit); (b) accept a documented placement deviation; (c) stop.
2. The string branch from T1 (FX_sImport absent; create with literal `Import` through the Caption ellipsis) remains a decision.
3. Form Size editability not tested (no edit performed).

## 3b. T3 — read-only coordinate model validation (cycle 3, task T3)

Full report: `evidence/EXP-062-R4/T3-coordinate-model-validation-report.md`.

- Tab list (before any select): 2 tabs. Tab 0 (Web Client) was **current at the start** although the Designer was current at the end of T2 (cause unknown; no action preceded the list). Tab 1 (Designer) selected after the list. FX_Items: User footer, Save disabled, no dialog.
- FX_DescriptionStatic selected through its Components-grid row: Static, Pane 1, Tab 7, Caption `FX_sDescription`, Binding None, Size `20; 1`, Location `3.25; 3`.
- **Location order corrected: row; column.** Model: top-left x = 355 + column × 8.1; y = 100 + row × 18.1. Predicted (379.3, 158.8); observed ≈ (380, 159); Δ ≤ 0.7 px in x and ≤ 0.2 px in y. Cross-check: FX_UMStatic, FX_UMCombobox, FX_RefreshButton and FX_VarTestEdit all within about 2 px (T1/T2 screenshots). The T2 record's x;y reading is superseded.
- Canvas: 552 px ÷ 69 Form columns = 8.0 px per column at the edge (component estimate 8.1; about 1% difference, unresolved, no effect on margins). 380 px ÷ 21 rows = 18.1 px per row (consistent).
- Proposed FX_PictureStatic at Location `10.5; 21.5`, Size `20; 9`: predicted x 529–691, y 290–453. Fully inside the canvas. Clear of the inputs (≈11 px) and FX_RefreshButton (≈15 px). **Overlaps FX_VarTestEdit (x 600–810, y 330–367); FX_VarTestEdit must be deleted first.** Assessment only; nothing placed.
- Counts (T3): tab lists 1; tab selects 1; clicks 1 (tree row, selection only); find 3; snapshots 2; screenshots 1 (`t3-01`); mutations 0; Designer Save 0; Delete Form Definition click 0; trash click 0; unload 0; runtime open 0.
- Cumulative (T1 + T2 + T3): tab lists 3; tab selects 3; clicks 59; type 2 (filter only); Escape 2; find 34; wait_for 2; explicit snapshots 11; screenshots 12; Designer Save 0; mutations 0.
- Worker-written files (T3): `evidence/EXP-062-R4/T3-coordinate-model-validation-report.md`; `evidence/EXP-062-R4/t3-01-fx_descriptionstatic-selected-layout-3-25-3-outline.png`; this record (updated).

## 3c. T4 — FX_sImport created and assigned as the FX_RefreshButton Caption (cycle 4, task T4; unsaved)

Full report: `evidence/EXP-062-R4/T4-fx-simport-string-and-caption-assignment-report.md`.

- Tab list before select: 2 tabs; Web Client was current at the start (as at T3); Designer selected after the list. FX_Items User footer; Save disabled; no dialog before mutation.
- Pre-check: FX_RefreshButton Caption `FX_Refresh`, Primary `FX_Test`, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`, Binding None. FX_sImport absent on the Caption list (read-only; Escape; no commit).
- Caption committed to `FX_sImport` (typed; Tab). Ellipsis prompt: **`String FX_sImport does not exist. Create it?`** → Yes, once (exact ID; no other string created). String editor opened with the prefill `FX_s Import`; corrected to `Import` in the active String Value textbox; Tab; OK once. No second prompt.
- Read-only verification: Caption dropdown lists `FX_sImport`; reopened string editor shows Name `FX_sImport`, String Value `Import` (closed with OK, no change). Escape used for the list (no commit).
- Canvas: caption displays the raw ID `FX_sImport` before Save (`t4-01`, `t4-04`). Resolution to `Import` is untested until Save and reopen.
- Counts (T4): browser tab lists 1; tab selects 1; clicks 10; type 2 (FX_sImport; Import); Tab 2; Escape 2; find 13 (recount); snapshots 6; screenshots 4; **string created 1**; string creation prompts declined 0; existing strings edited 0; Caption assignments 1; Primary, handler, binding, component, Form-width, Designer Save, Form close or reopen, Delete Form Definition click, trash click, unload, runtime open all 0.
- Cumulative (T1 + T2 + T3 + T4): tab lists 4; tab selects 4; clicks 69; strings created 1; Designer Save 0; mutations other than the string and the Caption: 0.
- Worker-written files (T4): `evidence/EXP-062-R4/T4-fx-simport-string-and-caption-assignment-report.md`; `evidence/EXP-062-R4/t4-01-caption-committed-fx_simport-before-ellipsis-state.png`; `evidence/EXP-062-R4/t4-02-string-editor-opened-after-yes-prefill-fx-s-import-before-value-edit.png`; `evidence/EXP-062-R4/t4-03-string-value-import-committed-before-ok.png`; `evidence/EXP-062-R4/t4-04-final-state-caption-fx_simport-string-import-canvas-raw-id-save-enabled-unsaved.png`; this record (updated).

**Open items after T4:** the Form is dirty (Save enabled); the canvas shows the raw ID; string persistence after Save is unverified. Remaining configuration (FX_VarTestEdit deletion; FX_PictureStatic at Location `10.5; 21.5` after deletion; binding; No Colon; FX_ImportPicture; Primary) and the single Designer Save are not performed. Next step needs coordinator approval.

## 3d. T5 — deletion of exactly FX_VarTestEdit (cycle 5, task T5)

Full report: `evidence/EXP-062-R4/T5-fx-vartestedit-deletion-report.md`.

- Tab list before select: 2 tabs; Web Client was current at the start (as at T3 and T4); Designer selected after the list. FX_Items User footer; Save enabled (dirty, expected from T4); Caption `FX_sImport`; no dialog.
- Pre-deletion FX_VarTestEdit readbacks: Name `FX_VarTestEdit`; Type Edit; Pane 1; Tab 0; Caption blank; Binding Variable `variables.FX_VarTest`; Size `37.05; 2`; Location `12.7222222222222; 30.25`; Primary blank; Read-Only/Hidden/Required False. Matches the T1 baseline.
- Inventory before deletion: 17 entries; FX_VarTestEdit once. FX_VarTest (`~LIT~()`, Persistent False, Global False) and FX_Test (both actions) read before mutation.
- Tooltip of the Components-grid trash (inside the Components tabpanel toolbar): `Delete`. Click once → confirmation `Are you sure you want to delete FX_VarTestEdit and all the components it contains?` → OK once. No Enter. Top-toolbar Delete not clicked; no Delete Form Definition dialog.
- After deletion (Components expanded): 16 entries; FX_VarTestEdit absent; the other 16 present. FX_VarTest unchanged; FX_Test both actions unchanged; FX_ImportPicture absent. FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`, Name/Size/Location/Binding unchanged.
- Canvas: the FX_VarTestEdit box is no longer drawn; caption still shows the raw ID `FX_sImport`.
- Counts (T5): tab lists 1; selects 1; clicks 10 (incl. the deletion and its OK); hover 1; find 9; snapshots 4; screenshots 3; **components deleted 1**; Designer Save 0; Form close or reopen 0; strings 0; handlers 0; Primary or binding changes 0; Toolbox drops 0; Form-width change 0; unloads 0; runtime 0.
- Cumulative (T1–T5): tab lists 5; selects 5; clicks 79; hovers 1; type 4; Tab 2; Escape 4; find 56; wait_for 2; snapshots 21; screenshots 19; components deleted 1; strings created 1; Designer Save 0; Form close or reopen 0; Toolbox drops 0; Form-width changes 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Worker-written files (T5): `evidence/EXP-062-R4/T5-fx-vartestedit-deletion-report.md`; `evidence/EXP-062-R4/t5-01-before-deletion-fx_vartestedit-selected-components-17-entries-save-enabled.png`; `evidence/EXP-062-R4/t5-02-components-grid-trash-confirmation-names-fx_vartestedit.png`; `evidence/EXP-062-R4/t5-03-after-deletion-16-entries-fx_vartestedit-absent-save-enabled-unsaved.png`; this record (updated).

**Open items after T5:** the Form is dirty (Save enabled). Still to do, subject to coordinator approval: FX_PictureStatic at Location `10.5; 21.5`, Size `20; 9` (the validated T3 candidate, now clear of FX_VarTestEdit); binding to FX_Picture; No Colon True; FX_ImportPicture; Primary reassignment; the single Designer Save; close and reopen; runtime check. The canvas caption resolution and string persistence after Save remain untested.

## 3e. T6 — one Toolbox drop; FX_PictureStatic configured (cycle 6, task T6; unsaved)

Full report: `evidence/EXP-062-R4/T6-fx-picturestatic-placement-and-configuration-report.md`.

- Gate: tab list before select (2 tabs); Designer selected; FX_Items User footer; Save enabled (dirty); no dialog; 16 components; FX_VarTestEdit absent; FX_sImport Caption on FX_RefreshButton; planned region visibly empty; canvas bounds x 258–810, y 100–480.
- **One drop** (mouse drag from Toolbox Static (81, 788) to (600, 380)). Created `static1_USER`, default Size `75; 21.1111111111111`, Location `15.5; 30.25`, clipped at canvas edges (`t6-02`).
- Native fields (Layout): Size → Width, Height, Lock Size; Location → Top, Left, Lock Position. Top = row, Left = column (consistent with T3).
- Geometry committed before other properties: Width 20; Height 9 (Size `20; 9`); Top 10.5; Left 21.5 (Location `10.5; 21.5`). Outline inside the canvas at x ≈ 529–691, y ≈ 290–453; clear of FX_RefreshButton (≈15 px) and the input column (≈9 px); no overlap.
- Name → `FX_PictureStatic` (committed; grid `FX_PictureStatic Static 1 0`).
- Data Source: Binding Type → Property (committed). Binding defaulted to `object._ItemId` on the type change; corrected to `object.FX_Picture` (committed).
- Specific Attributes > No Colon: False → True (committed; reselect readback True).
- Reselect readback: Name FX_PictureStatic; Type Static; Pane 1; Tab 0; Size `20; 9`; Location `10.5; 21.5`; Binding Type Property; Binding `object.FX_Picture`; No Colon True.
- Inventory: 17 entries; FX_PictureStatic once; FX_VarTestEdit absent; the other 16 baseline components present. FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`, Binding None, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`. FX_VarTest `~LIT~()`. FX_Test: both original actions unchanged. FX_ImportPicture absent.
- Limitation: the Properties header and component drop-down still show `static1_USER (Static)` after the rename and reselect; the Name row and grid show FX_PictureStatic (display lag; unresolved).
- Counts (T6): tab lists 1; tab selects 1; **Toolbox drops 1**; **components added 1**; components deleted 0; Browser single clicks 23; double-clicks 9; type 5; Tab presses 8; Escape 0; Enter 0; find 24 (recount); mouse wheel 2; screenshots 20; snapshot files saved 5; Designer Save 0; Form close/reopen 0; strings 0; handlers 0; Primary change 0; Form width/height change 0; top-toolbar Delete Form Definition click 0; trash click 0; unloads 0; runtime 0.
- Cumulative (T1–T6): tab lists 6; tab selects 6; components deleted 1 (T5); components added 1 (T6); Toolbox drops 1 (T6); strings created 1 (T4); Designer Save 0; Form close/reopen 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Worker-written files (T6): `evidence/EXP-062-R4/T6-fx-picturestatic-placement-and-configuration-report.md`; `evidence/EXP-062-R4/t6-01` … `t6-20` PNGs (20 files); `evidence/EXP-062-R4/t6-21-…yml` … `t6-25-…yml` (5 snapshot files); this record (updated).

**Open items after T6:** the Form is dirty (Save enabled). Still to do, subject to coordinator approval: FX_ImportPicture (Binary Value Action, Action Type Import, component FX_PictureStatic); FX_RefreshButton Primary to FX_ImportPicture; the pre-Save comparison; the single Designer Save; close and reopen; the runtime check. Unresolved: canvas caption resolution after Save; string and geometry persistence; the stale Properties header.

## 3f. T7 — FX_ImportPicture event group created; action not configured (cycle 7, task T7; blocked)

Full report: `evidence/EXP-062-R4/T7-fx-importpicture-event-handler-report.md`.

- Preflight: tab list before select (2 tabs); Designer selected; FX_Items User footer; Save enabled; no dialog; 17 components; FX_PictureStatic once with Name, Type Static, Binding Type Property, Binding `object.FX_Picture`, No Colon True, Size `20; 9`, Location `10.5; 21.5` (authoritative readback; the stale `static1_USER` header noted, not repaired). FX_Test group had both original actions; FX_ImportPicture absent.
- Event creation: bottom Event Handlers toolbar `New` (tooltip) → `Event Handler` dialog with Name combobox → dropdown read (built-in `Std*` events plus `FX_Test`; no FX_ImportPicture) → Escape → typed `FX_ImportPicture` → OK once. **One group `FX_ImportPicture` created.**
- Created with the group: one action row (sequence 0, Disabled false). **Response Type, Action Type and target component are not set.**
- Blocker: the Response node in the Event To Handle editor does not expand (expander click and double-click had no visible effect). Its children and the Response Type / Action Type / component selectors are not visible at the current Details size. Per the brief, no value was guessed, no second action or handler was created, and the uncertain action was not retried. Changing the Details panel size is a Designer view change and was not made.
- FX_Test: both original actions unchanged. FX_RefreshButton: Caption `FX_sImport`, Primary `FX_Test` (not reassigned), geometry unchanged. Components 17; FX_VarTestEdit absent.
- Counts (T7): tab lists 1; tab selects 1; event handler groups created 1; event action rows created 1 (unconfigured); actions configured 0; clicks 10 (element) + 1 (coordinate); hover 1; type 1; Escape 1; find 9; snapshots 9; screenshots 8 PNG; Designer Save 0; Form close/reopen 0; Primary change 0; Components added/deleted 0; Toolbox drops 0; strings 0; Form width 0; Delete Form Definition click 0; trash click 0; unload 0; runtime 0.
- Cumulative (T1–T7): tab lists 7; tab selects 7; components deleted 1 (T5); components added 1 (T6); Toolbox drops 1 (T6); strings created 1 (T4); event groups created 1 (T7); event action rows created 1 (T7; unconfigured); Designer Save 0; Form close/reopen 0; Form width changes 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Worker-written files (T7): `evidence/EXP-062-R4/T7-fx-importpicture-event-handler-report.md`; PNGs `t7-04-…`, `t7-05-…`, `t7-07-…`, `t7-09-…`, `t7-11-…`, `t7-13-…`, `t7-14-…`, `t7-15-…` (8 files) under `evidence/EXP-062-R4/`; snapshot files `t7-01-…yml`, `t7-02-…yml`, `t7-03-…yml`, `t7-06-…yml`, `t7-08-…yml`, `t7-10-…yml`, `t7-12-…yml`; this record (updated).

**Open items after T7:** the Form is dirty (Save enabled). Blocked: the FX_ImportPicture action is unconfigured and no route to its Response Type / Action Type / component controls has been confirmed. Decision needed on configuring or removing it (removal requires its own confirmation). The Primary reassignment, the pre-Save comparison, Save, close and reopen, and the runtime check are not performed.

## 3g. T8 — FX_ImportPicture action: Response Type set; Action Type cancelled; component not offered (cycle 9, task T8; blocked)

Full report: `evidence/EXP-062-R4/T8-fx-importpicture-action-configuration-report.md`.

- Route: the Event To Handle property-pane Expand control (not the grid's Expand, not the Response row expander) expanded the Response node: Type, Parameters (Open Edit Property Dialog), Edit in-line Script. This resolves the T7 expansion blocker.
- Response Type: `Binary Value Action` selected and committed (grid readback after dialog cancel: Binary Value Action; Disabled false; Response Parameters blank).
- Parameters dialog "Event Handler Parameters" / "Edit Binary Value Action": Action set to `Import` in the dropdown; Component dropdown does not offer `FX_PictureStatic`. Its 15 entries include FX_VarTestEdit (deleted in T5) and omit FX_PictureStatic (added in T6): a stale list. Dialog cancelled; no OK. Action Type and component not committed.
- FX_Test: both original actions unchanged. FX_RefreshButton: Primary `FX_Test` (not reassigned).
- Counts (T8): tab lists 0; tab selects 0; snapshots 2; targeted finds 14; element clicks 8; mouse moves 1; wheels 2; screenshots 8 PNG; config mutations committed 1 (Response Type); Action Type committed 0; component committed 0; Parameters OK 0; Save 0; close/reopen 0; Primary change 0; components added/deleted 0; toolbox drops 0; strings 0; Form width 0; Delete Form Definition click 0; trash click 0; unload 0; runtime 0.
- Cumulative (T1–T8): tab lists 7; tab selects 7; components deleted 1 (T5); components added 1 (T6); Toolbox drops 1 (T6); strings created 1 (T4); event groups created 1 (T7); event action rows created 1 (T7); Designer Save 0; Form close/reopen 0; Form width changes 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Worker-written files (T8): `evidence/EXP-062-R4/T8-fx-importpicture-action-configuration-report.md`; snapshots `t8-01-event-handlers-pre-select-snapshot.yml`, `t8-03-event-to-handle-tree-after-expand.yml`; PNGs `t8-02`, `t8-04`, `t8-05`, `t8-06`, `t8-07`, `t8-08`, `t8-09`, `t8-10` (8 files); this record (updated).

**Open items after T8:** the Form is dirty (Save enabled). Blocked: the sequence-0 action needs Action Type `Import` and component `FX_PictureStatic`, which the stale dropdown does not offer. Decision needed: a route that refreshes the component list (any Save or reopen needs explicit approval; the Save gate has not passed). Primary reassignment, pre-Save comparison, Save, close and reopen, and the runtime check are not performed.

## 3h. T9 — operator-approved intermediate Save; action selector check stopped (cycle 12, task T9; stopped, dirty)

Full report: `evidence/EXP-062-R4/T9-intermediate-save-and-action-selector-report.md`.

- Pre-Save gate: passed (17 components; FX_VarTestEdit absent; FX_PictureStatic Size 20; 9, Location 10.5; 21.5, Binding object.FX_Picture, No Colon True; FX_RefreshButton Caption FX_sImport, Primary FX_Test; FX_VarTest present; FX_Test two actions; FX_ImportPicture one sequence-0 row, Binary Value Action, Disabled false).
- Intermediate Save (count 1): succeeded. Native response: "Form [FX_Items] and global object(s) were saved." Save and Regenerate Form disabled immediately after.
- Post-Save: FX_ImportPicture row and FX_Test two rows unchanged; FX_PictureStatic present (Static, Pane 1, Tab 0); FX_RefreshButton Event to generate FX_Test (Primary unchanged). FX_PictureStatic Size, Location, Binding and No Colon were NOT re-read after the Save (only pre-Save readbacks exist).
- Unexpected: after the Save, the Properties panel switched to the Form tab with a Form-level Splitter dropdown open. Escape closed it (Splitter still Vertical) and moved focus into Size > Width (69). The toolbar Save and Undo then became enabled: the Form is dirty. Size 69; 21 and Splitter Vertical read back unchanged. Cause not established (likely a same-value commit on blur; not verified). Treated as an uncertain mutation: stopped.
- Not performed: Parameters dialog and selector check; any action value; final Save; undo or revert; close/reopen; Primary change; runtime.
- Counts (T9): tab lists 1; tab selects 1; snapshots 5 (4 untargeted, 1 targeted); finds 11; element clicks 7 (of which 1 is the Save); Escape 1; mouse move 1; wheel 1; screenshots 7 PNG; Designer Save 1 (intermediate); final Save 0; close/reopen 0; Parameters dialog 0; action values committed 0; components added/deleted 0; toolbox drops 0; strings 0; Form width edits 0; Delete Form Definition clicks 0; trash clicks 0; unloads 0; runtime 0.
- Correction to the T8 counts: the T8 report recorded tab lists 0 and tab selects 0. Those counts cover only the post-compaction sequence. The carried-over summary records one tab list and one select before compaction (not verifiable from the current transcript). Read T8 as "pre-compaction per summary: 1 list, 1 select (unverified here); post-compaction: 0 and 0."
- Cumulative (T1–T9): components deleted 1 (T5); components added 1 (T6); toolbox drops 1 (T6); strings created 1 (T4); event groups created 1 (T7); action configuration committed: Response Type only (T8, persisted by the T9 Save); Designer Save 1 (T9, intermediate); final Save 0; close/reopen 0; Form width edits 0 (see the dirty-state note); unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Worker-written files (T9): `evidence/EXP-062-R4/T9-intermediate-save-and-action-selector-report.md`; snapshots `t9-01-baseline-snapshot.yml`, `t9-03-components-tabpanel-snapshot.yml`, `t9-04-refreshbutton-properties-snapshot.yml`, `t9-06-post-save-snapshot.yml`, `t9-10-stop-state-snapshot.yml`; PNGs `t9-02-baseline-components-tab.png`, `t9-05-after-intermediate-save.png`, `t9-07-post-save-event-handlers.png`, `t9-08-after-escape-splitter-dropdown.png`, `t9-09-action-row-selected.png`, `t9-11-post-save-components-tab.png`, `t9-12-post-save-components-scrolled.png`; this record (updated).

**Open items after T9:** the Form is dirty and open (Save and Undo enabled). Decision needed: (a) accept the Form-level state as unchanged and continue to the selector check; (b) authorize a route to revert the possible Form-level commit; or (c) stop. The selector refresh after Save is untested. The Action Type and component target are not configured. Primary, the final Save, close/reopen, and the runtime check are not performed.

## 3i. T10 — authorized discard of the post-Save dirty state; saved-Form recovery; action Import/FX_PictureStatic committed (cycle 14, task T10; complete for scope; dirty, unsaved)

Full report: `evidence/EXP-062-R4/T10-discard-recovery-and-action-configuration-report.md`.

- Discard: the Form-tab close (×) produced the prompt "Form FX_Items has changed / Do you want to save the form definition?" (buttons Yes with default focus, No, Cancel). Chose **No** (close without saving). Form closed; Save disabled; no Form tab left.
- Recovery: Form menu > recent list > FX_Items (first attempt). Identity FX_Items, ScopeType User, ScopeName anton.ramos@3mworks.com.ph; Save and Undo disabled.
- Saved readbacks: 17 components; FX_VarTestEdit absent; FX_PictureStatic Static, Size 20; 9, Location 10.5; 21.5, Binding Type Property, Binding object.FX_Picture, No Colon True; FX_RefreshButton PushButton, Caption FX_sImport (canvas shows Import), Primary FX_Test, Size 14.25; 1.89, Location 12.1666666666667; 5.25; Form Unit Char, Size 69; 21, Splitter Vertical, Position 11; FX_VarTest **not verified in T10** (the Variables tab was not read after the reopen; see the T11 correction below); FX_Test two actions (Prompt seq 0, Set Values seq 1) unchanged; FX_ImportPicture one sequence-0 row, Binary Value Action, Disabled false before configuration.
- String check: Caption ellipsis read FX_sImport = `Import` (String dialog has only OK and Help; no edits; OK once; Save and Undo remained disabled).
- Selector: after reopen, the Component Bound to Binary Value Property list offers FX_PictureStatic (last entry) and no longer FX_VarTestEdit (T8 list was stale). Selected FX_PictureStatic; Action Import; OK once.
- Reselect: FX_ImportPicture sequence 0, Binary Value Action, Disabled false, Response Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)`; exactly one action; FX_Test unchanged; FX_RefreshButton Primary FX_Test (not changed). Form dirty, open, unsaved.
- Stale selector: observed fresh after close/reopen; whether Save alone refreshes it is untested (inference only).
- Canvas caption: `Import` resolved on the reopened Form (observed). Picture Static shows a broken-image glyph (cause unresolved).
- Counts (T10): tab lists 1; tab selects 1; snapshots 9 (7 untargeted, 2 targeted); finds 27; element clicks 23; screenshots 15 PNG; keys 0; mouse 0; Designer Save 0 (intermediate Save total 1; final Save 0); Form close 1; reopen 1; discard No 1; Yes 0; Parameters dialog opened 1; Action Type committed 1; component committed 1; Parameters OK 1; String OK (no edits) 1; components added/deleted 0; toolbox drops 0; strings created 0; Form width edits 0; Primary change 0; Delete Form Definition clicks 0; trash clicks 0; unloads 0; runtime 0.
- Cumulative (T1–T10): tab lists 10 (T8 counted 1 per carried summary, unverified); components deleted 1; added 1; toolbox drops 1; strings created 1; event groups 1; action rows 1; Designer Save 1 (intermediate); final Save 0; Form close 1 and reopen 1 (T10 only); Form width edits 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Worker-written files (T10): `evidence/EXP-062-R4/T10-discard-recovery-and-action-configuration-report.md`; snapshots `t10-01-preflight-snapshot.yml`, `t10-06-reopened-snapshot.yml`, `t10-07-details-expanded-snapshot.yml`, `t10-08-recovered-components-snapshot.yml`, `t10-09-recovered-components-tabpanel.yml`, `t10-11-recovered-components-expanded-tree.yml`, `t10-14-after-string-ok-state.yml`, `t10-15-recovered-event-handlers.yml`, `t10-22-reselect-action-readback.yml`; PNGs `t10-02-preclose-dirty-state.png`, `t10-03-after-close-click.png`, `t10-04-after-no-discard.png`, `t10-05-reopened-saved-form.png`, `t10-10-recovered-components-expanded.png`, `t10-12-recovered-picturestatic-selected.png`, `t10-13-string-dialog-readonly.png`, `t10-16-recovered-event-handlers-screenshot.png`, `t10-17-recovered-handlers-expanded.png`, `t10-18-selector-lists-picturestatic.png`, `t10-19-component-selected-picturestatic.png`, `t10-20-action-import-and-component-before-ok.png`, `t10-21-after-parameters-ok.png`, `t10-23-final-state-dirty-open.png`, `t10-24-form-tab-layout-readback.png`; this record (updated).

**Open items after T10:** the Form is dirty and open (Save enabled). Not performed (need explicit authorization): the final Save, the FX_RefreshButton Primary reassignment to FX_ImportPicture, the pre-Save comparison, the final close/reopen, and the runtime check. Unresolved: whether Save alone refreshes the selector; the broken-image glyph in the picture Static.

## 3j. T11 — FX_RefreshButton Primary committed to FX_ImportPicture; pre-Save gate stopped at G8 (cycle 15, task T11; stopped, dirty, unsaved)

Full report: `evidence/EXP-062-R4/T11-primary-reassignment-and-pre-save-gate-report.md`.

- Action re-verified (reselect): Binary Value Action, Disabled false, one action, Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)`; FX_Test Prompt and Set Values unchanged.
- FX_RefreshButton: Name FX_RefreshButton, PushButton, Caption FX_sImport, Binding Type None, Binding empty, Size 14.25; 1.89, Location 12.1666666666667; 5.25. Primary changed FX_Test -> FX_ImportPicture through the native Primary dropdown (one change); authoritative readback after reselect: FX_ImportPicture. The Components-grid "Event to generate" column still reads FX_Test (stale).
- Gates: G1 identity/ScopeName/dirty/no dialog PASS; G2 action PASS; G3 FX_Test PASS; G4 button readbacks PASS; G5 Primary PASS; G6 17 components, FX_VarTestEdit absent PASS; G7 FX_PictureStatic PASS; **G8 FX_VarTest Form-Temporary definition FAIL (not found)**; G9 Form Layout PASS (Unit Char; Size 69; 21; Splitter Vertical; Position 11); G10 string Import PASS (carried from T10); G11 button shows Import PASS; G12 picture Static shows a broken-image glyph (observed, not fixed).
- Stop: G8 is a required value that differs from the T9 post-Save state. No correction, no Save, no close or reopen.
- Counts (T11): tab lists 1; tab selects 1; snapshots 9 (7 untargeted, 2 targeted); screenshots 9 PNG; element clicks 13; finds 16; mouse moves 1; wheels 3; keys 0; typing 0; Primary change 1; Designer Save 0 (intermediate total 1; final 0); close/reopen 0; Parameters OK 0; components added/deleted 0; toolbox drops 0; strings 0; Form-level edits 0; Delete Form Definition clicks 0; trash clicks 0; unloads 0; runtime 0.
- Cumulative (T1–T11): tab lists 11 (T8 per carried summary); components deleted 1; added 1; toolbox drops 1; strings created 1; event groups 1; action rows 1; Primary changes 1; Designer Save 1 intermediate, 0 final; Form close 1 and reopen 1 (T10 only); Form width edits 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.
- Correction to T10 (section 3i): the note "FX_VarTest present" was not verified in T10. The Variables tab was not read after the reopen. T11 found no Form - Temporary group in the Variables grid.
- Worker-written files (T11): `evidence/EXP-062-R4/T11-primary-reassignment-and-pre-save-gate-report.md`; snapshots `t11-01-preflight-snapshot.yml`, `t11-03-action-reselect-readback.yml`, `t11-04-refreshbutton-properties.yml`, `t11-06-refreshbutton-component-properties.yml`, `t11-08-refreshbutton-reselect-readback.yml`, `t11-10-components-tree-presave.yml`, `t11-11-picturestatic-presave-readback.yml`, `t11-13-variables-expanded-tree.yml`, `t11-16-fresh-snapshot-variables-check.yml`; PNGs `t11-02-preflight-state.png`, `t11-05-refreshbutton-selected-state.png`, `t11-07-primary-after-selection.png`, `t11-09-primary-after-reselect.png`, `t11-12-variables-tab-presave.png`, `t11-14-variables-after-scroll.png`, `t11-15-variables-top.png`, `t11-17-variables-after-collapse.png`, `t11-18-variables-global-temporary-expanded.png`; this record (updated).

**Open items after T11:** the Form is dirty and open (Save enabled). Blocked before the final Save: gate G8 (FX_VarTest Form-Temporary group not found). Decision needed: the cause of the missing variable (possibly the T10 discard and reopen), then whether to continue to the final Save or stop. The second Save, the final close and reopen, and the runtime check remain unperformed and need explicit authorization.

## 3k. T12 — final Designer Save; clean close and reopen; saved-definition recovery (cycle 17, task T12; complete for scope; clean; runtime not run)

Full report: `evidence/EXP-062-R4/T12-final-save-and-saved-form-recovery-report.md`.

- G8 waiver: FX_VarTest Form-Temporary absence is operator-waived. Recorded as waived, not technically verified; the cause (the T10 discard-and-reopen) is a candidate_procedure only. Not claimed as persisted.
- Pre-Save checks (read-only): identity and dirty state; FX_ImportPicture action; FX_Test two actions; FX_RefreshButton Caption, Binding None, authoritative Primary FX_ImportPicture, geometry; 17 components; FX_PictureStatic values; Form Layout (Unit Char; 69; 21; Vertical; 11). No mutation before the Save.
- Final Save (cumulative 2; this task 1): native toast "Form [FX_Items] and global object(s) were saved." Save, Undo, Redo and Regenerate Form disabled afterwards. No retry.
- Clean close (this task 1): Form-tab close; no unsaved-changes prompt. Reopen (this task 1): Form menu recent list, first attempt. Identity FX_Items / User / anton.ramos@3mworks.com.ph; Save and Undo disabled.
- Recovery readbacks (all PASS): 17 components; FX_VarTestEdit absent; FX_PictureStatic Static, Pane 1, Size 20; 9, Location 10.5; 21.5, Binding Type Property, Binding object.FX_Picture, No Colon True; FX_RefreshButton Caption FX_sImport, Binding None, Primary FX_ImportPicture (authoritative), Size 14.25; 1.89, Location 12.1666666666667; 5.25; canvas button shows Import; FX_ImportPicture one sequence-0 Binary Value Action, Disabled false, ACTION(Import) COMPONENT(FX_PictureStatic); FX_Test Prompt and Set Values unchanged; Form Unit Char, Size 69; 21, Splitter Vertical, Position 11.
- Components-grid Event to generate for FX_RefreshButton: FX_ImportPicture after the reopen (secondary; the authoritative Primary is FX_ImportPicture).
- Variables grid after reopen: Form - Persistent, Global - Persistent and Global - Temporary only; no Form - Temporary group (observed absence; not a preservation claim).
- Picture Static: broken-image glyph still displayed (not fixed; no picture loaded).
- Runtime: not performed (outstanding; no Import activation).
- Counts (T12): tab lists 1; tab selects 1; snapshots 15 (all untargeted); screenshots 7 PNG; element clicks 18 (of which Save 1, close 1, reopen path 2 (Form menu, FX_Items item)); finds 16; keys 0; typing 0; mouse 0; Designer Save 1 (cumulative 2); close 1; reopen 1; unsaved-changes prompt 0; Parameters dialog 0; Primary change 0; components added/deleted 0; toolbox drops 0; strings 0; Form-level edits 0; Delete Form Definition clicks 0; trash clicks 0; unloads 0; runtime 0.
- Cumulative (T1–T12): Designer Save 2 (T9 intermediate, T12 final); close/reopen 2 each (T10, T12); components deleted 1; added 1; toolbox drops 1; strings created 1; event groups 1; action rows 1; Primary changes 1 (T11); Form width edits 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1; tab lists 12 (T8 per carried summary).
- Worker-written files (T12): `evidence/EXP-062-R4/T12-final-save-and-saved-form-recovery-report.md`; snapshots `t12-01-preflight-snapshot.yml`, `t12-03-event-handlers-presave.yml`, `t12-04-components-presave.yml`, `t12-05-refreshbutton-presave-readback.yml`, `t12-06-picturestatic-presave-readback.yml`, `t12-07-form-layout-presave.yml`, `t12-10-post-save-clean-snapshot.yml`, `t12-13-reopened-snapshot.yml`, `t12-14-recovered-components.yml`, `t12-15-recovered-components-expanded.yml`, `t12-16-recovered-refreshbutton-readback.yml`, `t12-17-recovered-picturestatic-readback.yml`, `t12-18-recovered-event-handlers.yml`, `t12-19-recovered-handlers-expanded.yml`, `t12-20-recovered-form-layout.yml`; PNGs `t12-02-presave-state.png`, `t12-08-presave-matrix-state.png`, `t12-09-after-final-save.png`, `t12-11-after-clean-close.png`, `t12-12-reopened-form.png`, `t12-21-final-recovered-state.png`, `t12-22-variables-after-reopen.png`; this record (updated).

**Open items after T12:** the Form is clean and open (Save disabled). Not performed: the runtime check (needs separate authorization; the Import button must not be activated). Unresolved: the FX_VarTest / Form - Temporary absence (waived; cause a candidate_procedure only); the broken-image glyph; whether a Save alone refreshes the component selector.

## 3l. T13 — FX_Items runtime read-only verification (cycle 18, task T13; complete for read-only scope; runtime Save disabled; no Import activated)

Full report: `evidence/EXP-062-R4/T13-runtime-readonly-verification-report.md`.

- Route: tabs listed; Web Client (tab 0) inspected (Explorer, no Form open). Web Client Form menu > Open > Select Form (pre-filtered FX_Items, one entry, Caption and Name FX_Items) > OK once. Runtime identity: tab and title FX_Items; footer `Description (Object 1 of 3)`. The Form menu's recent-list entry directly under IDOs was not used (may be the IDO).
- Records (native row navigation only; no edits):
  - 1 of 3: dumbbell; 45 pound iron; 45.00; EA.
  - 2 of 3: eggs; cage free; 6.99; DZ.
  - 3 of 3: guitar; natural acoustic; 129.99; EA.
- Import: visible, captioned `Import`, enabled; **not clicked**; no key sent; no file picker.
- Picture region: blank for all three records (no picture element in the accessibility tree; no glyph; no image; visual observation at the designer position). Whether a binary value exists is unresolved; no value was inferred. The Designer shows a broken-image glyph at design time; the runtime does not. The design-time glyph does not establish an invalid binding.
- Save: runtime Save `[disabled]` throughout; no prompt; Designer Save and Undo disabled at the final check.
- Designer final check (tab 1, then tab 0): clean; User scope anton.ramos@3mworks.com.ph; Splitter Vertical, Position 11, Size 69; 21 visible; no edit, no Save, no close/reopen.
- Counts (T13): tab lists 2; tab selects 4; snapshots 2 requested (t13-01, t13-05); PNG files 6 (one timed-out attempt, retried); element clicks 5; finds 9; keys 0; typing 0; mouse 0; Designer Save 0 (cumulative 2: T9 intermediate, T12 final); close/reopen 0; runtime Import 0; runtime Save clicks 0; record edits 0; component/string changes 0; unloads 0; Delete Form Definition clicks 0.
- Cumulative (T1–T13): Designer Saves 2; Designer close/reopen T10 and T12 (1 each); components deleted 1; added 1; toolbox drops 1; strings created 1; event groups 1; action rows 1; Primary changes 1; Form width edits 0; metadata unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1; tab lists 14 (T8 per carried summary; see the T8 correction).
- Worker-written files (T13): `evidence/EXP-062-R4/T13-runtime-readonly-verification-report.md`; snapshots `t13-01-webclient-initial-snapshot.yml`, `t13-05-runtime-initial-snapshot.yml`; PNGs `t13-02-webclient-initial-state.png`, `t13-03-open-dialog.png`, `t13-04-runtime-form-initial.png`, `t13-06-record-2-eggs.png`, `t13-07-record-3-guitar.png`, `t13-08-designer-final-clean-state.png`; this record (updated).

**Open items after T13:** the runtime picture region is unverified beyond visual observation (AC-12 limitation). FX_VarTest / Form - Temporary (waiver G8) remains unverified as preserved. The broken-image glyph cause (design time) and whether a Save alone refreshes the component selector are unresolved. Nothing is replay_verified. The experiment has completed its scoped steps (Designer saves: 2; runtime read-only check done).

## 4. Decisions made in T1 (recorded; none applied)

1. **Form width (conditional edit): not made.** The brief's test requires an unambiguous editable Form width. The Form-level Size `69; 21` is the only Size row, and the Design View Size tab shows the Form group as greyed and the editable fields only in the View group (the forbidden Designer view size). The meaning is ambiguous, so the brief's fallback applies: no Form-level change; place FX_PictureStatic in the free area below the input column, clear of FX_RefreshButton, after FX_VarTestEdit is deleted.
2. **Readback-derived position is not usable as-is.** The brief's formula gives x = 47.0 (7.75 + 37.25 + 2) and y = 23.75. The declared Form height is 21, so that position lies outside the Form extent. The next task must choose the position by a visual check inside the free area, then record the Location readback. Limitation recorded: Edit Location readbacks do not match the canvas (also seen in EXP-062-R2).
3. **FX_sImport absent.** AC-2 expects an existing string with value `Import`. The step text allows creation through the Caption ellipsis (literal `Import`) when the read-only check finds it absent. T1 did not create it. Coordinator decision: confirm that branch, or stop. The R2 string creation did not persist after the discarded session (inferred from absence).

## 5. Action audit (T1; cumulative for this task; exact counts)

Browser tab list 1; tab select 1; browser clicks 48 = menus and menu items 6 (Web Client Form, Definition, Designer item; Designer Form menu; Edit menu; String item) + scope OK 1 + recent-forms FX_Items 1 + Expand-type 16 (Details panel 1; Components grid 1; Properties 11; Form tab 1; Event Handlers 1; Variables 1) + tab selections 8 + row selections 13 (12 tree rows; 1 variable row) + Binding and Caption arrows 2 + Global Objects Cancel 1; browser type 2 (filter only); press_key Escape 2; find 19; wait_for 2; explicit snapshots 7; screenshots 7.

Mutations: **Designer Save 0**; Form close 0; Form reopen 0; Designer launch 1 (from the Web Client, non-mutating); unloads 0; component add 0; component delete 0; string create 0; handler create 0; binding, Caption, or Primary commit 0; Form width change 0; Revert Form Definition or Update click 0; **Delete Form Definition (top toolbar) click 0**; Components-grid trash click 0; runtime Form open or import 0; business record change 0; preference change 0; IDO checkout, check-in, or undo 0; sign-out, reauthentication, restart 0; browser JavaScript, console, network, tracing 0; coordinate mouse actions 0.

## 6. Acceptance matrix (T1 scope) — SUPERSEDED by §11 (final, T14)

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | **Supported (observed, one session).** Session usable; FX_Items opened from the saved definition; identity, clean state, Save disabled; discard confirmed | Launch route is a new Designer tab, not an existing one |
| AC-2 | **Partial.** Baseline, FX_VarTest, FX_Test, FX_ImportPicture absence, and FX_Picture offer observed. **FX_sImport absent** (value `Import` not readable) | Pane and GridColumn Layout not read; Edit Location unreconciled |
| AC-3 | **Supported for the investigation.** Form tab Layout and Design View Size fields recorded; no change; fallback chosen | Form Size readback from the snapshot (not a screenshot of that row) |
| AC-4 to AC-13 | Not attempted (outside T1) | — |

## 7. Next steps (not performed in T1) — historical; all steps are complete or superseded (see §11)

Next task (after coordinator decisions in §4): the brief's Section 4 steps, in order: delete FX_VarTestEdit through the Components-grid trash button only; assign `FX_sImport` (created via the Caption ellipsis only if still absent) to the FX_RefreshButton Caption; add one Toolbox Static, set Size `20; 9` and a visually verified Location below the input column, clear of FX_RefreshButton; name it FX_PictureStatic, bind to FX_Picture, No Colon True; create FX_ImportPicture (Binary Value Action, Import, FX_PictureStatic); set Primary to FX_ImportPicture; one Save; close and reopen; runtime read-only check.

## 8. Evidence index (T1)

- `evidence/EXP-062-R4/t1-01-start-single-webclient-tab-no-designer-tab.png`: starting state; one Web Client tab; no Designer tab; no Form.
- `evidence/EXP-062-R4/t1-02-designer-launched-from-webclient-definition-menu-no-form-open.png`: Designer launched; no Form open; footer User; Save disabled.
- `evidence/EXP-062-R4/t1-03-fx_items-reopened-recent-forms-identity-scope-save-disabled.png`: FX_Items open; Name and Version; footer User; Save disabled; canvas caption `FX_Refresh`.
- `evidence/EXP-062-R4/t1-04-components-grid-expanded-17-entries-discard-check.png`: Components grid expanded (Pane, grid, 17 entries in the tree); trash button visible (not clicked).
- `evidence/EXP-062-R4/t1-05-details-design-view-size-tab-width-69-height-21-readonly.png`: Design View Size tab (Form group greyed; View group editable; not changed).
- `evidence/EXP-062-R4/t1-06-binding-picker-open-lists-object-fx-picture-readonly.png`: binding picker open; `object.FX_Picture` listed; dismissed with Escape.
- `evidence/EXP-062-R4/t1-07-caption-list-readonly-fx_sImport-absent-after-escape-caption-unchanged.png`: after the Caption list Escape; Caption `FX_Refresh`; Save disabled.

Screenshots show what is named above. They do not prove database state, string durability across sessions, or runtime behavior. The `t1-04` image shows the components grid partially (not all 17 rows are in frame); the complete list is in the T1 report §4 and the snapshot readback.

## 9. Knowledge state

| Finding | State |
| --- | --- |
| Designer launch from the Web Client gives a new Designer tab; the scope dialog is pre-filled with User / operator | observed |
| FX_Items reopens on the first recent-forms attempt; User scope; clean; Save disabled | observed (one session) |
| Discard confirmed (17 components; FX_VarTestEdit present; Caption `FX_Refresh`; Primary `FX_Test`; no default-named Static) | observed (one session) |
| FX_Picture offered by the binding picker | observed (one session) |
| FX_sImport absent (Caption list; Global Objects filter) | observed (one session); cause unresolved |
| Form Size `69; 21`; Design View Size Form group greyed, View group editable | observed (one session) |
| Brief's right-of-input formula yields a position outside the Form height | observed (arithmetic); canvas unit mapping unresolved |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 10. Open questions (T1 scope) — superseded by §11 (T14); items 1 and 3 were resolved in T4 and T6

1. Confirm FX_sImport creation under the brief's absent branch (Caption ellipsis, literal `Import`) for the next task, or stop.
2. Confirm the Designer launch route used in T1 (Web Client Form > Definition > Designer).
3. Confirm the fallback (free area below the input column, chosen visually) given the unreliable readback mapping.
4. Canvas-to-readback unit mapping for Edit Location and Size (unresolved; recurs from EXP-062-R2).
5. The Global Objects filter was verified with one term only.

## 11. Final acceptance audit (T14, cycle 19; documentation only; zero browser calls)

Full report: `evidence/EXP-062-R4/T14-final-acceptance-and-audit-report.md`. Final classification: **OBSERVED, ACCEPTED UNDER OPERATOR AMENDMENTS AND THE G8 WAIVER — NOT replay_verified.**

### 11.1 Operator amendments and controlled deviations

- **A1 Two ordinary Designer Saves** (brief: one). T9 intermediate Save (`t9-05`, toast "Form [FX_Items] and global object(s) were saved.") and T12 final Save (`t12-09`, same toast). Controller: one Save click in `harness-audit-T9.md` row 21 and one in `harness-audit-T12.md` row 28. The T9 intermediate Save persisted an interim action state (Binary Value Action, blank parameters; Primary FX_Test).
- **A3 Unintended post-T9 dirty state.** A Form-tab focus event after the T9 Save (Escape moved focus into Size > Width; cause not established) made the Form dirty. Readbacks unchanged. Reverted by the discard in A4.
- **A4 Authorized discard (T10).** Form-tab close, then "No" at "Form FX_Items has changed / Do you want to save the form definition?" (`t10-03`, `t10-04`). Controller rows 9 and 13 of `harness-audit-T10.md`.
- **A5 Two close/reopen cycles** (brief: one). T10 (A4) and T12 (planned clean close; no prompt, `t12-11`). Reopens: `harness-audit-T10.md` row 19, `harness-audit-T12.md` row 42.
- **A6 FX_sImport absent at T1 (`t1-07`); created at T4 under the brief's absent branch** (Caption ellipsis, literal `Import`, Yes once; `harness-audit-T4.md` row 28). Value Import read at T4 and T10 (`t10-13`).
- **A7 G8 waiver (operator, cycle 17): FX_VarTest / Form - Temporary absent.** Present in the T9 post-Save screenshot (`t9-05`); absent at T11 (`t11-12`–`t11-18`), after the T12 final Save and reopen (`t12-22`) and at T13 (`t13-08`). WAIVED BY OPERATOR, NOT verified as preserved. The loss explanation (tied to the discard-and-reopen path) is a **candidate_procedure only**, not a verified Mongoose rule.
- **A8 No Form-level width edit.** Fallback area used (T1 ambiguity judgment). Width 69 and height 21 unchanged in all later readbacks.
- **A9 Placement.** T2 blocker resolved by the T3 row;column model (Δ ≤ 0.7 px); final Size `20; 9`, Location `10.5; 21.5` (`t6-11`).
- **A10 View-only toggles.** Details panel expand/collapse and Components/Variables/Event Handlers grid Expand/Collapse. No Designer view setting changed.

### 11.2 Acceptance matrix AC-1 to AC-13

| AC | Status | Key evidence (pre-Save → post-Save/reopen → runtime) |
|---|---|---|
| AC-1 | Met | `t1-03`, `t1-04` (T1 identity, clean, 17 components) → `t12-12`, `t12-13` (reopen identity, Save and Undo disabled) → `t13-08` |
| AC-2 | Met as amended (A6) | `t1-06` (FX_Picture offered, no commit); `t1-07` (string absent at T1) → `t4-03`, `t4-04` (created, Import) → `t10-13` (Import) |
| AC-3 | Met (fallback) | T1 §7a/§7b; `t1-05`; `t2-03` → `t12-07`, `t12-20` (Unit Char; 69; 21; Vertical; 11) |
| AC-4 | Partly met | `t5-01`–`t5-03` (17 → 16; confirmation named FX_VarTestEdit; `harness-audit-T5.md` row 27) → `t12-04`, `t12-14`, `t12-15` (17 recovered; FX_VarTestEdit absent). FX_VarTest **waived (G8), not verified**. FX_Test two actions verified `t12-18`, `t12-19`. |
| AC-5 | Met | `t4-01`, `t4-04` (raw ID before Save) → `t12-16` (Caption FX_sImport; geometry unchanged) → `t12-12`, `t12-21` (canvas caption **Import**); runtime `t13-04`, `t13-06`, `t13-07` (Import) |
| AC-6 | Met | `t6-02` (one drop); `t6-06`, `t6-11` (Size and Location committed first); `t6-12`, `t6-14`, `t6-19`, `t6-20` (name, binding, No Colon) → `t12-06`, `t12-17` (recovered) |
| AC-7 | Met | `t7-09`, `t7-11` (group); `t8-05` (Binary Value Action); `t10-20`–`t10-22` and `t11-03` (Import, FX_PictureStatic, one action) → `t12-18`, `t12-19` (recovered). Event never executed. |
| AC-8 | Met | `t11-07`–`t11-09` (Primary FX_ImportPicture; authoritative) → `t12-16` (recovered); Components-grid column lagged (FX_Test) before Save and showed FX_ImportPicture after reopen (`t12-15`) |
| AC-9 | Partly met | `t12-02`–`t12-08` (pre-Save matrix). Intended changes verified. FX_VarTest difference unexplained (G8 waiver). Not every untouched component's geometry was re-compared field-by-field after the final Save. |
| AC-10 | Met as amended (A1) | Gates passed before the final Save; toast `t12-09`; Save, Undo, Redo and Regenerate Form disabled `t12-10` |
| AC-11 | Met except FX_VarTest (waived) | `t10-03`, `t10-04` (discard); `t12-11` (clean close, no prompt); `t12-12`, `t12-13` (reopen); Static geometry `t12-06` = `t12-17`; FX_RefreshButton `t12-05` = `t12-16`; Form Layout `t12-07` = `t12-20`; caption **Import** |
| AC-12 | Substantially met (visual limitation) | `t13-03` (Select Form, one FX_Items); `t13-04` (title FX_Items; dumbbell 45 pound iron 45.00 EA; Import visible); `t13-06` (eggs cage free 6.99 DZ); `t13-07` (guitar natural acoustic 129.99 EA); `t13-05` (Save disabled; no picture element). Picture region visually blank; "empty" not proven. |
| AC-13 | Met by T14 report, with limitations | `T14-final-acceptance-and-audit-report.md` §2–§5 |

### 11.3 Persisted values (T12 recovery, Designer, clean)

FX_PictureStatic: Static; Pane 1; Size 20; 9; Location 10.5; 21.5; Binding Type Property; Binding object.FX_Picture; No Colon True. FX_RefreshButton: Caption FX_sImport (renders Import); Primary FX_ImportPicture; Binding None; Size 14.25; 1.89; Location 12.1666666666667; 5.25. FX_ImportPicture: one sequence-0 Binary Value Action, Disabled false, `ACTION(Import) COMPONENT(FX_PictureStatic)`. FX_Test: Prompt (seq 0) and Set Values (seq 1), both unchanged. Form: Unit Char; Size 69; 21; Splitter Vertical; Position 11. FX_VarTestEdit absent. Components 17.

### 11.4 Runtime summary (T13, read-only)

Runtime FX_Items opened through Web Client Form > Open > Select Form (one FX_Items entry). Records: dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA. Import visible, captioned Import; **never activated**. Picture region visually blank for all three records (no picture element in the accessibility tree). Runtime Save disabled. No prompt. No record edited. Designer re-checked and clean.

**Not tested:** image upload, picture chooser, binary import, and functional execution of FX_ImportPicture or the Import action. The design-time broken-image glyph is an unresolved observation, not a verified import failure.

### 11.5 Counts and reconciliation

- Designer Saves: **2** (controller-confirmed). Designer closes: **2** (T10, T12; controller-confirmed). Reopens from recent list: **2** (T10, T12), plus the initial T1 open and the T13 runtime open.
- Toolbox drops 1; components deleted 1 (trash, controller-confirmed); components added 1; strings created 1; event groups 1; event action rows 1; Primary changes 1; Parameters OK 1 (T10); Form width edits 0; metadata unloads 0; Regenerate Form 0; Delete Form Definition clicks 0 (none in any controller audit); runtime Import activations 0; runtime record edits 0.
- **T8 tab counts reconciled:** controller `harness-audit-T8.md` records one tab list (row 5) and one tab select (row 7), matching the carried summary. The worker's post-compaction 0/0 is superseded.
- **Cumulative tab lists 14; tab selects 16** (T1–T12 one each; T13 two lists and four selects per `harness-audit-T13.md`).
- **Find calls: controller total 192** (worker reports total 182; per-task differences in `T14` §4). **Click-tool rows: controller total 192.** Mouse, screenshot, snapshot and keyboard totals are not independently reconstructed (limitation).

### 11.6 Remaining unknowns

FX_VarTest preservation (waived; candidate_procedure only). Whether a Save alone refreshes the component selector (untested). Design-time broken-image glyph cause (unresolved). Runtime picture binary content (not checked; visual blankness only). Whether the Save covered the FX_sImport string row specifically (the toast covers global objects; not separately proven). T1 Designer launch route (coordinator to confirm).

### 11.7 Worker-written files (EXP-062-R4)

T14: `evidence/EXP-062-R4/T14-final-acceptance-and-audit-report.md` (created); this record (edited). T1–T13 inventories are listed in each task section above and in the individual reports. `evidence/EXP-062-R4/harness-audit-T1.md` … `harness-audit-T13.md` are controller-generated (not worker-written) and were used as the independent reference.

## Outcome (operator, 2026-10-12)

**Accepted. Hello World Part 4 section 4 is complete** (run R-20261012-003624-ROx0, completed/accepted at cycle 21, 14 of 15 worker tasks). All findings are observed only.
- **Confinement** (operator git review): the only new paths are this record and `evidence/EXP-062-R4/`. `assets/` is the operator's.
- **Final saved FX_Items (User scope):**
  - FX_VarTestEdit deleted, through the Components-grid trash button;
  - FX_RefreshButton Caption `FX_sImport`, which resolves to **Import** after Save and reopen, and Primary `FX_ImportPicture`;
  - FX_PictureStatic: Static, Size `20; 9`, Location `10.5; 21.5` (Top; Left), Binding `object.FX_Picture`, No Colon True;
  - FX_ImportPicture, seq 0: Binary Value Action `ACTION(Import) COMPONENT(FX_PictureStatic)`;
  - FX_Test unchanged.
- **Decisive evidence** (viewed by the operator):
  - `t12-09`: the save message "Form [FX_Items] and global object(s) were saved.", the canvas button reading Import, and FX_PictureStatic → object.FX_Picture in the Components grid;
  - `t13-04`: the runtime FX_Items Form showing dumbbell (Object 1 of 3) with the Import button and runtime Save disabled. `t13-06` and `t13-07` show eggs and guitar. The Import action was never activated.

**Operator calls under the standing authorization of 2026-10-11:**
1. **Scope pause:** approved. The coordinator only asked the worker to read EXP-055/056 evidence.
2. **Stale component list:** the Binary Value Action component selector listed the last saved definition (it still offered the deleted FX_VarTestEdit and lacked FX_PictureStatic). I authorized an intermediate Save, as in the tutorial order, so the run has **two Saves** in total; AC-9/AC-10 were amended to match.
3. **Unexplained dirty state after the intermediate Save:** pressing Escape on a Form-level Splitter dropdown left focus in Form Size > Width. That change was discarded through close → "Do you want to save the form definition?" → **No** (buttons Yes (default focus), No, Cancel), followed by a reopen. The reopen also refreshed the selector.
4. **Gate G8 waived:** FX_VarTest, a Form - Temporary variable with Persistent False, is no longer listed once its only bound component is deleted. FX_Test's SETVARVALUES still references it. This explanation is a candidate only.
5. **Worker task limit** raised from 12 to 15.

**Form-size findings (answers the operator's canvas question; read-only):**
- Form tab Layout: Size `69; 21` (Char).
- Details > Design View Size: a greyed **Form** group (69/21) and an editable **View** group (69/21), with the buttons **Update** and **Revert Form Definition**.
- Neither was changed. The picture went into the free area below the inputs (fallback).
- Widening the Form through the View group plus Update, or through the Form Size row, is a candidate only.

**Learned (observed):**
- Toolbox drops produce oversized default geometry. Setting Layout > Size and Location explicitly afterwards works. Location is shown as **Top; Left**.
- The Binary Value Action component selector reads the saved definition, so save before configuring it.
- A caption string shows its raw ID on the canvas until Save and reopen, then resolves.
- The Designer Form menu has no Open item. Use the recent list or the toolbar Open button.
- The Designer top-toolbar trash icon is Delete Form Definition (EXP-062-R2 near miss; now covered by a worker preamble rule).
