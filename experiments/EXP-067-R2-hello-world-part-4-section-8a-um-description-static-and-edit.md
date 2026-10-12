# EXP-067-R2 — Hello World Part 4 Section 8a: Unload, then show FX_UMsDescription in a Static and Edit on the User-scope FX_Items Form (replay after session expiry)

**Current status (after T12, 2026-10-13): T12 COMPLETE — final documentation correction only; zero browser calls; no Mongoose change. Verified by filename enumeration: 45 worker-authored PNG screenshots (the earlier 49 was an error and is corrected in the T11 report and this record); 1 YAML snapshot; 11 task reports; 1 experiment record; total 58 worker-authored files. Harness-audit files `harness-audit-T1`…`T11` (11) and tool-written `evidence/playwright/` files are classified separately. The T11 controller audit reported one failed Edit (#17) — a documentation edit whose replacement string did not match the file — followed by corrected edits that succeeded; it is not a browser failure or an application blocker. Controller-authoritative browser totals unchanged: T1 53, T2 15, T3 41, T4 15, T5 81, T6 75, T7 31, T8 17, T9 33, T10 41, T11 0, T12 0; cumulative **402**. Recommendation unchanged: ACCEPTED as observed, with qualifications; not replay_verified; not cross-session durability.**

**Earlier status (after T11, 2026-10-13): T11 COMPLETE — documentation-only final acceptance review; zero browser calls; no Mongoose state altered. Recommendation: ACCEPTED as observed, with qualifications; NOT replay_verified; NOT cross-session durability. All eight acceptance checks are supported by saved evidence (matrix in `evidence/EXP-067-R2/T11-final-acceptance-report.md`). Controller-authoritative cumulative browser calls: **402** (T1 53, T2 15, T3 41, T4 15, T5 81, T6 75, T7 31, T8 17, T9 33, T10 41). Lifecycle: preference read 1 (unchanged); Web Client unload 1; Designer unload 1; Toolbox drops 2; Designer Save 1; pre-change Designer close/reopen 1/1; post-save Designer close/reopen 1/1; runtime conditional close 0 (none open); runtime initial open 1; runtime Save 0; record edits 0; preference changes 0; other component modifications 0. Qualifications: same-session close/reopen only; stored `FX_sDescription` value and exhaustive original-property equality not verified; Save toast seen in the accessibility tree, not in a screenshot (`t8-02`); unload effects silent. Final runtime values: dumbbell EA/Each, eggs DZ/Dozen, guitar EA/Each (match).**

**Earlier status (after T10, 2026-10-13): T10 COMPLETE — runtime verification. No runtime Form was open at the start (no dirty Form; the conditional close was unnecessary and was not performed). The Web Client runtime FX_Items Form was opened once through Form > Open > Select Form (one row FX_Items / FX_Items). Identity: tab panel `FX_Items`; status `Description (Object 1 of 3)` on open. Actual values (accessibility readbacks, verbatim): dumbbell — Unit of Measure `EA`, FX_UMsDescriptionEdit `Each` (matches EA/Each); eggs — `DZ`, `Dozen` (matches DZ/Dozen); guitar — `EA`, `Each` (matches EA/Each). Save disabled throughout; the Form is clean at the end and left open. No record edit, runtime Save, Unit of Measure change, or Designer change. One grid-click timeout on record 3 (pane splitter and row-number cell intercepting the pointer); one fresh snapshot, then a corrected click on the row-number cell succeeded.** Unloads: Web Client 1, Designer 1. Toolbox drops 2. Designer Saves 1. Designer close/reopen: pre-change 1/1, post-save 1/1. Runtime close/reopen: 0/0 (the open was the first runtime open; no close). Cumulative explicit browser calls: **402** (T10 **41**, controller-authoritative; the earlier worker figures of 40 and 401 are superseded; base 361 through T9). Full T10 report: `evidence/EXP-067-R2/T10-runtime-fx_items-verification-report.md`. Nothing is replay_verified.

**Earlier status (after T9, 2026-10-13): T9 COMPLETE — post-save persistence verification by close and reopen. The clean FX_Items Designer Form was closed once with its native Form-tab close control (no prompt) and reopened once through the toolbar Open control and Select Form (one row FX_Items / FX_Items). The reopened Form is FX_Items, User scope (ScopeName anton.ramos@3mworks.com.ph), clean (Save, Regenerate Form, Undo, Redo disabled), no dialog. The Components tree has 19 entries: the original 17 identities plus exactly `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit`. After reopen, Static: Name, Static, Pane 1, Tab 0, Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription`, canvas "Description:". Edit: Name, Edit, Pane 1, Tab 0, Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription`. The configuration persisted across the close and reopen. The runtime was not opened (not authorized by T9). Designer left open and clean.** Unloads: Web Client 1, Designer 1. Toolbox drops 2. Designer Saves 1. Designer close/reopen: pre-change 1/1; post-save 1/1. Cumulative explicit browser calls: **361** (T9 33; T1–T8 corrected 328). Full T9 report: `evidence/EXP-067-R2/T9-post-save-designer-close-reopen-and-persistence-verification-report.md`. Nothing is replay_verified.

**Earlier status (after T8, 2026-10-13): T8 COMPLETE — the single native Designer toolbar Save was invoked once (Save count 1; no retry). Native response (toast, verbatim): `Save` — `Form [FX_Items] and global object(s) were saved.` with a Close button. Immediately afterwards toolbar Save, Regenerate Form, Undo and Redo were disabled; FX_Items remained open with its identity (User scope, ScopeName anton.ramos@3mworks.com.ph) and both components present (`FX_UMsDescriptionStatic` Caption `FX_sDescription`; `FX_UMsDescriptionEdit` binding `object.FX_UMsDescription`). No dialog or prompt. Not closed or reopened. Persistence not yet verified; Location, Size and Caption values were not re-read after Save.** Unloads: Web Client 1, Designer 1. Toolbox drops: 2. Designer Save: 1. Cumulative explicit browser calls: **328** (T8 corrected to 17 in T9; the earlier 22 was an overcount; base 311 is controller-reconciled). Full T8 report: `evidence/EXP-067-R2/T8-single-designer-save-and-immediate-verification-report.md`. Nothing is replay_verified.

**Earlier status (after T7, 2026-10-13): T7 COMPLETE — read-only pre-save verification and audit reconciliation. The Designer FX_Items Form is open, User scope (ScopeName anton.ramos@3mworks.com.ph), **dirty and UNSAVED** (Save and Undo enabled), no dialog. The expanded Components tree has 19 rows: the original 17 (Pane 00 grid branch and Pane 01 rows) plus exactly `FX_UMsDescriptionEdit` and `FX_UMsDescriptionStatic`. Both new components match the configuration (Static: Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription`, canvas "Description:"; Edit: Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription`). Original FX_UMCombobox, FX_PictureStatic and FX_RefreshButton geometry matches T1. No unexpected change found.** Reconciled counts: T6 = 75 (controller; the earlier ~78 is superseded); cumulative T1–T6 = 280 (controller); T7 = 31; **cumulative T1–T7 = 311**. Unloads: Web Client 1, Designer 1. Toolbox drops: 2. Designer Save: 0. Runtime record edits: 0. Full T7 report: `evidence/EXP-067-R2/T7-pre-save-verification-and-audit-reconciliation-report.md`. Nothing is replay_verified.

**Earlier status (after T6, 2026-10-13): T6 COMPLETE — one Toolbox Static dropped (auto-named `static1_USER`; Toolbox drop count now 2); configured as `FX_UMsDescriptionStatic`: Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription` (selected from the Caption dropdown; canvas renders "Description:"). `FX_UMsDescriptionEdit` re-verified intact (Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription`). The Components list now holds the original 17 entries plus exactly these two new components.** The Form is **dirty and UNSAVED** (Save and Undo enabled). Designer Save count 0. Unloads unchanged: Web Client 1, Designer 1. Cumulative explicit browser calls: **~283** (approximate; T6 reconstructed at ~78 — see T6 report §8). Full T6 report: `evidence/EXP-067-R2/T6-static-drop-and-configuration-report.md`. Nothing is replay_verified.

**Earlier status (after T5, 2026-10-13): T5 COMPLETE — one Toolbox Edit dropped (auto-named `edit1_USER`, Pane 1, Tab 0; drop count 1); the native binding picker of the NEW Edit listed `object.FX_UMsDescription` before selection (under Binding Type `None` and under `Property`); the same Edit was configured as `FX_UMsDescriptionEdit`: Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription` (readbacks recorded; grid Data Source `object.FX_UMsDescription`).** The Form is **dirty and UNSAVED** (Save and Undo enabled). Designer Save count 0. FX_UMsDescriptionStatic not yet added (absent). Unloads unchanged: Web Client 1, Designer 1. Cumulative explicit browser calls: **205** (T1 53 + T2 15 + T3 41 + T4 15 + T5 81). Full T5 report: `evidence/EXP-067-R2/T5-edit-drop-binding-gate-and-configuration-report.md`. Nothing is replay_verified.

**Earlier status (after T4, 2026-10-13): T4 COMPLETE — read-only preliminary binding check. `object.FX_UMsDescription` is offered by the Designer Binding picker of the existing FX_UMCombobox (observed; picker opened once and dismissed with Escape; no commit; Binding still `object.FX_UM`).** The Designer is clean (Save and Undo disabled), FX_Items User scope, no dialog. **AC-2 remains PENDING** until the binding picker of the new FX_UMsDescriptionEdit confirms the entry (that Edit does not exist yet). No component was added. Unloads unchanged: Web Client 1, Designer 1. Cumulative explicit browser calls: **124** (T1 53 + T2 15 + T3 41 + T4 15). Full T4 report: `evidence/EXP-067-R2/T4-binding-picker-readonly-report.md`. Nothing is replay_verified.

**Earlier status (after T3, 2026-10-13): T3 COMPLETE — the clean FX_Items Designer Form was closed once (no prompt); the Designer `Unload All Global Form Objects` was invoked exactly once with no Form open (count 1; no visible response); FX_Items was reopened once through the Designer toolbar Open button and Select Form. Identity (FX_Items, User scope, ScopeName anton.ramos@3mworks.com.ph), clean state (Save and Undo disabled) and the 17-component baseline were re-verified, and the target area is unchanged and free.** Both authorized unloads are now done (Web Client 1, Designer 1); neither is to be repeated. **The binding gate (FX_UMsDescription in the picker) is NOT yet performed.** Cumulative explicit browser calls: **109** (T1 53 + T2 15 + T3 41). Full T3 report: `evidence/EXP-067-R2/T3-designer-unload-report.md`. Nothing is replay_verified.

**Earlier status (after T2, 2026-10-13): T2 COMPLETE — the Web Client `Unload All Global Form Objects` was invoked exactly once (count 1); no visible response (silent).** The Web Client is clean (no runtime Form). The Designer FX_Items Form was **not** operated on: it remains open, User scope, clean (Save and Undo disabled), and the Designer unload is **not** done (count 0). Cumulative explicit browser calls: **68** (T1 53 + T2 15). Full T2 report: `evidence/EXP-067-R2/T2-webclient-unload-report.md`. Nothing is replay_verified.

**Earlier status (after T1, 2026-10-13): T1 COMPLETE — read-only preflight, baseline and preference reading.** The Designer baseline matches EXP-067 T1 (FX_Items, User scope, clean; the two new components absent). The target area is free and inside the declared Form. The preference `Unload IDO Metadata With Forms` is checked and unchanged. **Stopped before any unload, close, reopen, Toolbox drop or Save**, as the bounded T1 instruction requires. The mutation stage (unload pair, binding gate, Static, Edit, one Save, reopens, runtime check) has **not** started. Nothing is replay_verified.

## 1. Run identity

- Run `R-20261013-011002-lSgL`, experiment EXP-067-R2, cycle 0, task **T1** (read-only preflight). Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `18bef299-8845-4dea-a448-9e372515f8ee`.
- Replay of EXP-067, which stopped before any change because the Mongoose session expired during preflight (unloads 0 of 2). Brief commits (session-start git log): `3e12f07` (draft), `d3f6ff7` (worker preamble; approved with the re-login allowance).
- LEARNING MODE. Editing scope **User**. Target Form `FX_Items`, ScopeType User, ScopeName `anton.ramos@3mworks.com.ph` (footer; same account as EXP-066-R2 and EXP-067).
- Repository starting state (git status at session start, not re-verified: no shell): branch `claude-harness`; `?? assets/` (untracked; not written by this worker).
- Full T1 report with the per-screenshot notes and the browser call log: `evidence/EXP-067-R2/T1-preflight-report.md`.

## 2. Objective (from the brief)

Replay of EXP-067 (blocked at AC-2 by session expiry). Follow `docs/mongoose/transcripts/hello-world-pt4.md` Section 8 steps 1–4 and 8–9 (09:18–11:04), adapted to FX_ names:

1. Refresh the cached metadata with the operator-authorized pair: one Web Client `Unload All Global Form Objects` (no dirty runtime Form), then the Designer `Unload All Global Form Objects` once with the FX_Items Designer Form closed. Reopen the same User-scope FX_Items Form.
2. Binding gate: `FX_UMsDescription` must be offered by the Designer binding picker. If not, stop blocked before any Form change, without a second unload.
3. Add `FX_UMsDescriptionStatic` (Static; Caption `FX_sDescription`; Layout Location `10.5; 42.5`, Size `12; 1.5`) and `FX_UMsDescriptionEdit` (Edit; Binding Type Property, Binding `FX_UMsDescription`; Layout Location `12.5; 42.5`, Size `12; 1.89`).
4. One Designer Save; one Designer close/reopen; one runtime close/reopen; description check per record (EA → Each, DZ → Dozen). The Section 8 grid column is a later experiment.

**Change from EXP-067:** the Edit and Static width is **12** columns (not 14), so the right edge is column 54.5 rather than 56.5. This removes the EXP-067 edge doubt about the visible canvas (see §6).

## 3. Sources reviewed (T1)

| Source | Read | Note |
| --- | --- | --- |
| `AGENTS.md` | Full | LEARNING MODE; FX_ scope; evidence and recovery rules |
| `docs/mongoose/transcripts/hello-world-pt4.md` Section 8 (lines 209–226) | Full section | Steps 1–10; steps 5–7 (grid) out of scope |
| `experiments/EXP-062-R2-…picture-import-ui.md` | Targeted grep | Unload sequence (§6a Web Client, §6b Designer), binding gate, Caption string behaviour (`FX_sImport` prompt). Not read in full |
| `experiments/EXP-062-R4-…picture-import-ui.md` | Targeted grep | Layout model (Location row; column; Size width; height), Toolbox drop giving an oversized Static, T6–T7 geometry. Not read in full |
| `experiments/EXP-066-R2-…section-7-…md` | Full | `FX_UMsDescription` added to the FX_Items IDO (Bound to Column; `fxum.FX_Description`); accepted 2026-10-13 |
| `experiments/EXP-067-…md` | Full | Blocked record; T1 and T2 summaries (§3, §6, §7a) |
| `evidence/EXP-067/T1-preflight-report.md` | Full | Baseline readbacks, preference reading |
| `evidence/EXP-067/T2-preflight-resolution-report.md` | Targeted grep | Calibrated geometry model (x = 355 + 8.0·col; y = 100 + 18.1·row) and Pane 1 boundary note |
| `evidence/EXP-067/T3-final-blocked-report.md` | Not opened | Summarised in the EXP-067 record §7b |

Not read: `tools/` (intentionally unreadable); the secrets file (not read); no shell or git commands.

## 4. Starting browser state (observed)

- **Tabs:** one tab at start (Mongoose Web Client). **No Designer tab** (EXP-067 T1 had two). The Designer was opened from the Web Client Designer toolbar button (new tab 1). See §10.
- **Web Client:** Explorer view; **no runtime Form tabs open**; no IDOs tab; no Session Expired modal; no portal notification banner. No dirty runtime Form exists, and no clean FX_Items runtime Form is open to close.
- **Session:** usable (identity `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in the Web Client header).

## 5. Designer baseline (observed; live)

**Identity:** Designer tab heading `FX_Items`; Name `FX_Items`; Version `User version for user …` (operator); Form Type `Normal`; Is Master `True`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.

**Clean state:** toolbar Save, Regenerate Form, Undo and Redo disabled (accessibility); no dirty indicator; no prompt.

**Scope and open route:** the Designer showed an `Identify Your Editing Scope` dialog (Scope `User`, User = the operator). OK was clicked once. FX_Items was opened from the Form menu's recent-forms entry (the Form menu in this view has `Definition`, `Sign Out` and the recent list; no `Open` item).

**Component list (Components grid expanded; live accessibility read; 17 rows):**

| Pane | Name | Type | Data Source | Tab |
| --- | --- | --- | --- | --- |
| 00 | FormCollectionGrid | Grid | objects | 0 |
| 00 | FX_ItemGridCol | GridColumn | object.FX_Item | 1 |
| 00 | FX_DescriptionGridCol | GridColumn | object.FX_Description | 2 |
| 00 | FX_CostGridCol | GridColumn | object.FX_Cost | 3 |
| 00 | FX_UMGridCol | GridColumn | object.FX_UM | 4 |
| 01 | FX_PictureStatic | Static | object.FX_Picture | 0 |
| 01 | FX_RefreshButton | PushButton | (Event to generate: FX_ImportPicture) | 0 |
| 01 | FX_ItemStatic | Static | — | 5 |
| 01 | FX_ItemEdit | Edit | object.FX_Item | 6 |
| 01 | FX_DescriptionStatic | Static | — | 7 |
| 01 | FX_DescriptionEdit | Edit | object.FX_Description | 8 |
| 01 | FX_CostStatic | Static | — | 9 |
| 01 | FX_CostEdit | Edit | object.FX_Cost | 10 |
| 01 | FX_UMStatic | Static | — | 11 |
| 01 | FX_UMCombobox | ComboBox | object.FX_UM | 12 |

Two panes plus 15 components = 17 rows. Same as EXP-067 T1.

**Absence proof:** `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` are not in the complete list above.

**Geometry (live accessibility readbacks; units Char; Location = row; column; Size = width; height):**

| Item | Size | Location | Matches EXP-067 T1 |
| --- | --- | --- | --- |
| FX_UMCombobox | 37.25; 2.15 | 7.75; 23.75 | yes |
| FX_PictureStatic | 20; 9 | 10.5; 21.5 | yes |
| FX_RefreshButton | 14.25; 1.89 | 12.1666666666667; 5.25 | yes |
| Form | 69; 21 (Unit `Char`) | n/a | yes |

Form Layout also read (screenshot `t1-04`): Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never. The Size and Unit rows are below the visible area of that screenshot, so their values rest on the accessibility readback.

## 6. Target-area check (computed from the readbacks above)

| Rectangle | Rows (top–bottom) | Columns (left–right) |
| --- | --- | --- |
| FX_UMsDescriptionStatic (Location 10.5; 42.5; Size 12; 1.5) | 10.5–12.0 | 42.5–54.5 |
| FX_UMsDescriptionEdit (Location 12.5; 42.5; Size 12; 1.89) | 12.5–14.39 | 42.5–54.5 |

| Existing component | Extent (rows; columns) | Clearance to target |
| --- | --- | --- |
| FX_PictureStatic | rows 10.5–19.5; columns 21.5–41.5 | 1.0 column to the left of the target |
| FX_UMCombobox | rows 7.75–9.90; columns 23.75–61.0 | 0.6 row above the Static top |
| FX_RefreshButton | rows 12.17–14.06; columns 5.25–19.5 | no column overlap |
| Input column (Item, Description, Cost, UM) | rows above about 9.9 (visual) | above the target (their Location readbacks were not read) |

- **Overlap:** none.
- **Inside the Form:** bottom 14.39 < 21; right 54.5 < 69 (declared Form width). If Pane 1 is 58 columns (69 − splitter 11, derived, not read natively), the right edge is 3.5 columns inside it.
- **Visible canvas (estimate):** under the calibrated model (x = 355 + 8.0·col), the right edge is at about x 791. The visible clip is at about x 810 (FX_UMCombobox is clipped there). The margin is about 19 px (≈2.4 columns). EXP-067 had a 14-column width, which put the edge about 3 px inside the clip. The 12-column width removes that doubt, on the estimate. This is not a native measurement.
- **Result:** **free and inside the Form.** The brief's stop rule (overlap or exceeding the Form) is not triggered.

**Canvas evidence:** `t1-03` and `t1-04` show the target area as empty (between the Picture region and the right edge, below the Unit of Measure field).

## 7. Web Client runtime Forms and preference reading (observed)

- **Runtime Forms open at start:** none (`t1-01`). **At the end of T1:** none (`t1-06`). No dirty runtime Form. No Form was closed. (EXP-067 T1 had one clean FX_Items runtime Form; the cause of the difference is not established.)
- **Preference:** View > `User Preferences...`, Behavior page. **`Unload IDO Metadata With Forms` = [checked]** (accessibility `checkbox "Unload IDO Metadata With Forms" [checked]`; screenshot `t1-05`). **Unchanged;** no checkbox was clicked.
- **Close:** the dialog's `Close Window` control (title-bar close). **OK was not pressed.** The dialog has no Cancel button (footer OK and Help only; same deviation as EXP-067 T1, accepted by the coordinator in EXP-067 §6). The dialog is closed (`t1-06`).

## 8. Action audit (T1, cumulative explicit browser calls)

| Category | Count |
| --- | --- |
| Browser tab list | 2 |
| Browser tab selects | 2 (tab 1 Designer; tab 0 Web Client) |
| Snapshots | 5 (3 untargeted; 2 targeted) |
| Finds | 22 |
| Clicks | 16 (Designer toolbar button; scope OK; Form menu; FX_Items recent entry; Details Expand Panel; Components tab; Components Expand; FX_UMCombobox row; Properties Expand all; FX_PictureStatic row; FX_RefreshButton row; Form tab; Form Expand; Web Client View; User Preferences...; Close Window) |
| Key presses / typed entries / waits / mouse wheel | 0 / 0 / 0 / 0 |
| Screenshots (successful / timed out) | 6 / 0 (`t1-01` to `t1-06`) |
| **Total explicit browser calls** | **53** (2 + 2 + 5 + 22 + 16 + 6) |

Mutation counts (cumulative for this task):

| Operation | Count |
| --- | --- |
| Preference reads | 1 (unchanged) |
| Preference changes | 0 |
| Web Client unloads / Designer unloads | 0 / 0 |
| Designer Save | 0 |
| Designer Form close / reopen (after the initial open) | 0 / 0 |
| Designer Form open (FX_Items, from recent-forms) | 1 (initial open for baseline; not a close/reopen) |
| Designer tab opened (Web Client Designer button) | 1 |
| Designer scope dialog OK | 1 |
| Runtime Form close / reopen | 0 / 0 |
| Toolbox drops | 0 |
| Component add / delete / rename / property change | 0 / 0 / 0 / 0 |
| Record edits / runtime Save | 0 / 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console, network inspection | 0 (console summary text was shown by the tool; not read) |
| Direct URL navigation / refresh / restart / session re-login | 0 / 0 / 0 / 0 |
| Dialogs answered | 1 (Designer scope OK) |

Expand, collapse and selection actions in the Designer changed the view state only. The Form definition is unchanged; the Save button stayed disabled.

## 9. Acceptance matrix (T1 scope)

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | **Supported** for identity, clean state, component list, geometry readbacks, absences, and target area (free; inside the declared Form) | Evidence: `t1-02` (Form menu and recent list), `t1-03` (canvas, target area empty), `t1-04` (identity, Components grid, target area). Geometry values are accessibility readbacks; no screenshot shows the Size or Location rows |
| AC-2 | **Partial.** The preference is read as checked and unchanged: supported. The unload steps and the binding gate are not performed in T1 | Next task |
| AC-3 to AC-8 | Not attempted | Out of the T1 scope |

## 10. Deviations, observations and open items

1. **Designer tab absent at start.** The brief assumed an open Designer tab. The Designer was opened from the Web Client Designer toolbar button. This creates a new browser tab and does not change any Form.
2. **Designer Form menu lacks an `Open` item in this view.** FX_Items was opened from the Form menu's recent-forms list. The brief's later reopen route (Designer toolbar Open button, then Select Form) is therefore not yet observed. The toolbar's first button (labelled `Design`) was not tested. Unresolved.
3. **No runtime FX_Items Form open at start** (EXP-067 T1 had one). Cause not established.
4. **Preference dialog has no Cancel.** `Close Window` was used, as in EXP-067 T1.
5. **Screenshot name overstatement.** `t1-04-designer-form-layout-size-unit-and-canvas-target-area.png` shows the Form Layout splitter rows and the canvas; its Size and Unit rows are below the visible area. The name overstates the content. (A rename was not possible without a shell.)
6. Snapshot and console files written by the tool (`evidence/playwright/`) are outside this path and are not enumerated here; the console was not inspected.

## 11. Worker-written file inventory (T1)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created; this record).
- `evidence/EXP-067-R2/T1-preflight-report.md` (created).
- `evidence/EXP-067-R2/t1-01-webclient-start-state-no-runtime-form-visible.png`
- `evidence/EXP-067-R2/t1-02-designer-opened-form-menu-state.png`
- `evidence/EXP-067-R2/t1-03-fx_umcombobox-selected-properties-state.png`
- `evidence/EXP-067-R2/t1-04-designer-form-layout-size-unit-and-canvas-target-area.png` (name overstates content; see §10.5)
- `evidence/EXP-067-R2/t1-05-user-preferences-unload-ido-metadata-read-only.png`
- `evidence/EXP-067-R2/t1-06-after-preferences-close-window-webclient-state.png`
- Tool-written, not worker-authored (outside this path): `evidence/playwright/` snapshot files from this task (timestamps 2026-10-12T17:10–17:13 UTC) and console log files. The harness and the operator's git review are authoritative.

## 12. Knowledge state

| Finding | State |
| --- | --- |
| Designer identity FX_Items, User scope, clean (Save disabled) | observed (one session) |
| Baseline component list (17 rows) and absence of the two new components | observed (one session; accessibility) |
| Geometry of FX_UMCombobox, FX_PictureStatic, FX_RefreshButton, Form; same values as EXP-067 T1 | observed (accessibility readbacks, re-read live) |
| Target area free; inside the declared Form; right edge about 19 px inside the visible clip at the 12-column width | observed (computed from readbacks; estimate from the calibrated model; not a native measurement) |
| `Unload IDO Metadata With Forms` checked and unchanged | observed (one session) |
| No runtime Form open at start or end of T1 | observed (one session) |
| Designer opened from the Web Client Designer button; the recent-forms entry opens FX_Items | observed (one session) |
| Designer toolbar `Open` route (needed for the reopen step) | unresolved |
| Web Client `Form > Definition > Unload All Global Form Objects` label; invoked once with no runtime Form open (T2) | observed (one session) |
| Web Client unload returned no visible response (T2) | observed (UI only); server-side completion not established |
| Designer FX_Items still clean and User scope after the Web Client unload (T2 read-only check) | observed (one session) |
| `object.FX_UMsDescription` listed in the Designer Binding picker of the existing FX_UMCombobox, after both unloads (T4; picker dismissed with Escape; no commit) | observed (one session; existing ComboBox, not the new Edit) |
| The new Edit's native Binding picker lists `object.FX_UMsDescription` before selection, under Binding Type `None` and `Property` (T5) | observed (one session; unsaved) |
| Selecting `Property` as Binding Type auto-assigned Binding `object._ItemId`; corrected to `object.FX_UMsDescription` (T5) | observed (one session) |
| Edit Name/Location/Size/Binding readbacks set on the new Edit (`FX_UMsDescriptionEdit`, `12.5; 42.5`, `12; 1.89`, Property, `object.FX_UMsDescription`) (T5) | observed (unsaved; live session only) |
| Edit persisted after Save and close/reopen | **pending** (no Save yet) |
| Static drop creates `static1_USER` (Static; Pane 1; Tab 0) with drop geometry Location `11.0555555555556; 42.75`, Size `87.5; 16.6666666666667` (T6) | observed (one session; unsaved) |
| Static configured as `FX_UMsDescriptionStatic`: Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription` selected from the Caption dropdown (T6) | observed (one session; unsaved) |
| `FX_sDescription` resolves to "Description" (canvas renders `Description:`; string value not read in the editor) (T6) | observed (rendered text only) |
| Components list after T6: original 17 entries plus exactly `FX_UMsDescriptionEdit` and `FX_UMsDescriptionStatic` (Pane 01 rows read; Pane 00 children not re-read) (T6) | observed (one session) |
| Designer Save invoked before T6 close (0 so far) | observed |
| T7 re-read: 19 component rows (17 original by identity and visible columns + 2 authorized); not an exhaustive property diff | observed (one session; unsaved) |
| T7 re-read: Static and Edit readbacks match T5/T6 configuration | observed (one session; unsaved) |
| T7 re-read: original FX_UMCombobox, FX_PictureStatic, FX_RefreshButton Location and Size match T1 | observed (one session) |
| Designer Save count after T7 | 0 (observed) |
| Single native Designer Save: native response `Save — Form [FX_Items] and global object(s) were saved.`; Save and Undo disabled immediately after (T8) | observed (one session; no reopen yet) |
| Components and identity unchanged immediately after Save (T8) | observed (one session) |
| Persistence of geometry, Caption and binding after post-save Designer close and reopen (T9): Static Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription`; Edit Location `12.5; 42.5`, Size `12; 1.89`, Binding `object.FX_UMsDescription`; 19 components | observed (one session; close and reopen only; not a database read) |
| Designer reopened clean with User scope and unchanged identity after the post-save close (T9) | observed (one session) |
| Runtime record description per record (EA Each, DZ Dozen, EA Each) | **pending** (runtime not yet opened) |
| Designer FX_Items closed via the Form-tab close control with no unsaved-changes prompt (T3) | observed (one session) |
| Designer `Form > Definition > Unload All Global Form Objects` label; invoked once with no Form open; no visible response (T3) | observed (one session); server completion not established |
| Reopen through the Designer toolbar folder button (accessibility name `Design`) and Select Form (one row FX_Items / FX_Items) restores FX_Items, User scope, clean, 17-component baseline, target geometry unchanged (T3) | observed (one session; UI and accessibility level) |
| `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` absent after the Designer unload and reopen (T3) | observed (one session) |
| Replay or procedure status | not claimed; nothing replay_verified |

## 13. T2 — Web Client unload (cycle 1; count 1)

Full report: `evidence/EXP-067-R2/T2-webclient-unload-report.md`. Task message `0d473097-4324-4d51-9dae-e89beee32f46`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before the first select; tab 1 (Web Client) selected; fresh snapshot: Explorer, **no runtime Form tab** (no dirty and no clean FX_Items runtime Form), no modal. The Designer (tab 0) was not selected for action.
- **Preference:** not re-read in T2. Read as `[checked]` in T1 (`t1-05`) and not changed (T1 close: Close Window).
- **Menu label (re-observed):** Form > Definition submenu: `Designer`, `Runtime Builder...`, **`Unload All Global Form Objects`**, `Site Developer Impersonation`. Captured before the click (`t2-01`).
- **Invocation (1 of 1):** one click on `Unload All Global Form Objects`. Not retried.
- **Visible response (verbatim):** none. The menu closed; no dialog, alert, message or confirmation (`t2-02`).
- **Post-state:** Web Client clean (Explorer, no runtime Form, no dialog). Designer FX_Items (read-only check after selecting tab 0; not operated on): Save and Regenerate Form disabled; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save and Undo greyed in `t2-03`.
- **Counts (T2):** 15 explicit browser calls (tab list 1; tab select 2; snapshot 2; find 4; click 2; hover 1; screenshot 3). **Web Client unloads 1; Designer unloads 0.** Designer Save 0; Designer close/reopen 0; component changes 0; record edits 0; preference changes 0.
- **Cumulative (T1 + T2):** 68 explicit browser calls (T1 53 + T2 15). Unloads: Web Client 1, Designer 0.
- **Worker-written files (T2):** `evidence/EXP-067-R2/T2-webclient-unload-report.md`; `t2-01` to `t2-03` PNGs; this record (updated).
- **Limits:** the unload's server-side completion is not observable (silent UI). The Designer unload is not yet performed.

## 14. Worker-written file inventory (cumulative, T1–T2)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2).
- `evidence/EXP-067-R2/T1-preflight-report.md`; `evidence/EXP-067-R2/T2-webclient-unload-report.md`.
- `evidence/EXP-067-R2/t1-01` … `t1-06` (6 PNG); `evidence/EXP-067-R2/t2-01` … `t2-03` (3 PNG).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 15. T3 — Designer close, one Designer unload, controlled reopen (cycle 2; count 1)

Full report: `evidence/EXP-067-R2/T3-designer-unload-report.md`. Task message `c7265483-a12a-4ad7-a786-39776b7dc68b`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any select; tab 0 (Designer) selected; fresh snapshot: FX_Items, User footer, Save and Undo disabled, no dialog, 17-component tree (the T2 Designer state).
- **Designer close (1):** the Form-tab close control (`closable FX_Items`). **No unsaved-changes prompt.** Tab list empty afterwards (`t3-01`).
- **Unload label (re-observed with Form closed):** Form > Definition: `Unload All Global Form Objects` (among `Design`, `Revert Form Definition`, disabled `Regenerate Form` and `Regenerate Form from Cache`, `Site Developer Impersonation`, `New`, `Copy`, `Delete`) (`t3-02`).
- **Designer unload (1 of 1):** one click; not retried. **Visible response: none** (menu closed; no dialog or message) (`t3-03`).
- **Reopen (1):** Designer toolbar first button (folder icon; accessible name `Design`) → **Select Form** dialog (one row FX_Items / FX_Items) → row click → OK (once each).
- **Verification after reopen (fresh snapshots and readbacks):** Name `FX_Items`; Version `User version for user …`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` (`t3-04`); Save and Undo disabled; Form Size `69; 21`, Unit `Char`; 17 components (grep of the component rows); `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` absent; FX_UMCombobox Location `7.75; 23.75` / Size `37.25; 2.15`; FX_PictureStatic Location `10.5; 21.5` / Size `20; 9`; FX_RefreshButton Location `12.1666666666667; 5.25` / Size `14.25; 1.89` / Caption `FX_sImport`. Baseline unchanged.
- **Counts (T3):** 41 explicit browser calls (tab list 1; tab select 1; snapshots 4; finds 17; clicks 12; hovers 2; screenshots 4). **Web Client unloads 1 (T2); Designer unloads 1 (T3).** Designer close/reopen (pre-change) 1/1. Designer Save 0. Toolbox drops 0. Component or property changes 0. Record edits 0. Preference changes 0.
- **Cumulative (T1–T3):** 109 explicit browser calls (T1 53 + T2 15 + T3 41).
- **Worker-written files (T3):** `evidence/EXP-067-R2/T3-designer-unload-report.md`; `t3-01` to `t3-04` PNGs; this record (updated).
- **Limits:** the unload's server-side completion is not observable (silent UI). The Designer toolbar button is labelled `Design` in the accessibility tree; its Open role is inferred from its icon and the Select Form result. The Select Form dialog shows no scope or version; those were confirmed from the reopened Form.

## 16. Worker-written file inventory (cumulative, T1–T3)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2, T3).
- `evidence/EXP-067-R2/T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`.
- `evidence/EXP-067-R2/t1-01` … `t1-06` (6 PNG); `t2-01` … `t2-03` (3 PNG); `t3-01` … `t3-04` (4 PNG).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 18. T4 — read-only preliminary binding check on the existing FX_UMCombobox (cycle 3)

Full report: `evidence/EXP-067-R2/T4-binding-picker-readonly-report.md`. Task message `f1db10e5-4d5f-46ef-8310-5115b05b405c`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any action; tab 0 (Designer) already current (no select needed). Fresh snapshot: FX_Items, User footer (ScopeName anton.ramos@3mworks.com.ph), Save and Undo disabled, no dialog.
- **Steps:** selected the FX_UMCombobox row (view only); read Binding Type `Property` and Binding `object.FX_UM`; opened the Binding dropdown once; located the entries; captured `t4-01`; dismissed with Escape (one key press); Binding re-read `object.FX_UM` (unchanged); captured `t4-02`; verified Save and Undo disabled and no dialog.
- **Result (observed):** the open picker lists `object.FX_Picture`, `object.FX_UM` (selected), **`object.FX_UMsDescription`**, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1`…`5`. Accessibility: one `option` cell `object.FX_UMsDescription`; prefix search `FX_UMs` matched only `object.FX_UM` and `object.FX_UMsDescription` inside the listbox.
- **Limits:** this is an existing ComboBox's picker, not the new Edit's picker (AC-2 pending). The entries above `object.FX_Picture` and below `object.UDFDateTime5` were not scrolled to.
- **Counts (T4):** 15 explicit browser calls (tab list 1; selects 0; snapshots 2; finds 7; clicks 2; key press 1; screenshots 2). Commits 0; Designer Save 0; Toolbox drops 0; component changes 0; unloads unchanged (Web Client 1; Designer 1).
- **Cumulative (T1–T4):** 124 explicit browser calls.
- **Worker-written files (T4):** `evidence/EXP-067-R2/T4-binding-picker-readonly-report.md`; `t4-01`, `t4-02` PNGs; this record (updated).
- **Gate verdict for the next task:** the Edit binding gate can proceed. The brief's gate needs a new Edit, which means one Toolbox drop first, so the Designer becomes dirty before the picker is checked. If the entry is missing, the uncommitted Edit must be removed without a second unload; the removal route (Undo or the Components-grid trash button after confirmation) is not named in the brief and needs a decision in that task.

## 19. T5 — one Toolbox Edit drop; native binding gate passed; same Edit configured, unsaved (cycle 4)

Full report: `evidence/EXP-067-R2/T5-edit-drop-binding-gate-and-configuration-report.md`. Task message `c4fdf4fa-bcc2-42b5-ad82-85bb0ab1f63f`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any select; tab 0 (Designer) already current. Fresh snapshot: FX_Items, User footer (ScopeName anton.ramos@3mworks.com.ph), Save and Undo disabled, no dialog, 17 original components, `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit` absent.
- **Drop (1):** one mouse drag from the Toolbox `Edit` item to the target area. Result: `edit1_USER` (Edit; Pane 1; Tab 0) created and selected; Save and Undo enabled (dirty). Drop geometry: Size `87.5; 18.5`; Location `12.888888888888889; 42.75`.
- **Binding gate (native picker, before selection):** with Binding Type `None`, the Binding dropdown opened a populated list containing `object.FX_UMsDescription` (one accessibility option; `t5-03` captured before selection). Dismissed with Escape (no commit). Binding Type set to `Property` (one list selection). Selecting `Property` auto-assigned `object._ItemId` (observed; corrected). Reopened picker under `Property` listed `object.FX_UMsDescription` (`t5-06` captured before selection). Selected it; one Tab committed the value (`t5-07`, `t5-08`).
- **Configuration (same Edit):** Name `FX_UMsDescriptionEdit` (readback in Properties and Components grid); Location `12.5; 42.5` (Top `12.5`, Left `42.5`); Size `12; 1.89` (Width `12`, Height `1.89`); Binding Type `Property`; Binding `object.FX_UMsDescription` (Properties and grid Data Source). Canvas (`t5-12`): the Edit sits right of the picture box and below the Unit of Measure field, inside the canvas edge, not overlapping existing components.
- **Unchanged:** the 17 original components (visible rows); Form Size and Unit; FX_UMCombobox still `object.FX_UM`.
- **Saved?** No. Designer Save **0**. The Form is dirty and unsaved, with the Edit open and selected.
- **Counts (T5):** 81 explicit browser calls (tab list 1; snapshots 4; finds 35; clicks 16 (10 single, 6 double); Toolbox drag 1; key presses 7 (Escape 1, Tab 6); typed entries 5; screenshots 12). Toolbox drops 1. Components added 1. Component deletes or other changes 0. Undo, trash, delete, close 0. Designer Save 0. Unloads Web Client 1 / Designer 1 (unchanged).
- **Cumulative (T1–T5):** 205 explicit browser calls.
- **Worker-written files (T5):** `evidence/EXP-067-R2/T5-edit-drop-binding-gate-and-configuration-report.md`; `t5-01` to `t5-12` PNGs; this record (updated).
- **Observations and limits:** (1) auto-assignment of `object._ItemId` on the type change, corrected before Save; (2) the picker lists the full property set even under `None`; (3) a binding value reaches the grid only after focus leaves the editor (Tab); (4) the full component tree was not re-read after configuration; (5) the Edit's readbacks are from the live unsaved session, not a reopen.

## 20. Worker-written file inventory (cumulative, T1–T5)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T5).
- `evidence/EXP-067-R2/`: `T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`.
- Screenshots: `t1-01`…`t1-06` (6); `t2-01`…`t2-03` (3); `t3-01`…`t3-04` (4); `t4-01`, `t4-02` (2); `t5-01`…`t5-12` (12).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 21. T6 — one Toolbox Static drop; configured as FX_UMsDescriptionStatic; unsaved (cycle 5)

Full report: `evidence/EXP-067-R2/T6-static-drop-and-configuration-report.md`. Task message `955349dd-5d02-4ac2-a8fb-79135d11bbd6`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any select; tab 0 (Designer) already current. Fresh snapshot: FX_Items, User footer (ScopeName anton.ramos@3mworks.com.ph), Save and Undo enabled (dirty), no dialog, Edit configuration intact, Static absent.
- **Drop (1):** one mouse drag from the Toolbox `Static` item to the target. Result: `static1_USER` (Static; Pane 1; Tab 0) created and selected. Drop geometry: Location `11.0555555555556; 42.75`, Size `87.5; 16.6666666666667`; Justification defaulted to Right.
- **Configuration (same Static):** Name `FX_UMsDescriptionStatic` (typed; Tab); Location Top `10.5` and Left `42.5` (typed; Tab each); Size Width `12` and Height `1.5` (typed; Tab each); Caption `FX_sDescription` selected from the dropdown (one selection; Tab). Readbacks at the end of T6: Location `10.5; 42.5`; Size `12; 1.5`; Caption `FX_sDescription`; Components row `FX_UMsDescriptionStatic Static 1 0`.
- **Caption resolution:** the canvas shows the Static as `Description:` (the same rendering as `FX_DescriptionStatic`). The string value was not read in the string editor (limitation).
- **Placement:** the Static sits above the Edit, right of the picture box and below the Unit of Measure field; no overlap with the Edit or existing components.
- **Components:** the full Pane 01 rows read from the saved snapshot show the 10 original components plus `FX_UMsDescriptionEdit` (Tab 0) and `FX_UMsDescriptionStatic` (Tab 0). The Pane 00 grid columns sat in a collapsed branch and were not re-read (limitation).
- **Deviation recorded:** the Name entry (`browser_type`) and its Tab press (`browser_press_key`) were issued in one response, which the browser-sequencing rule prohibits. Both returned results; the Name was verified afterwards; no repeat occurred.
- **Counts (T6):** **75** explicit browser calls (controller-authoritative; the earlier worker estimate of approximately 78 is superseded). Toolbox drops 1 (total 2). Designer Save 0. Undo, trash, delete, close 0. Unloads unchanged (Web Client 1, Designer 1).
- **Cumulative (T1–T6):** **280** explicit browser calls (controller-authoritative).
- **Worker-written files (T6):** `evidence/EXP-067-R2/T6-static-drop-and-configuration-report.md`; `t6-01` to `t6-05` and `t6-07` PNGs; `t6-06-full-snapshot-components-list-readback.yml`; this record (updated).

## 22. Worker-written file inventory (cumulative, T1–T6)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T6).
- `evidence/EXP-067-R2/`: `T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`; `T6-static-drop-and-configuration-report.md`.
- Screenshots: `t1-01`…`t1-06` (6); `t2-01`…`t2-03` (3); `t3-01`…`t3-04` (4); `t4-01`, `t4-02` (2); `t5-01`…`t5-12` (12); `t6-01`…`t6-05` and `t6-07` (6).
- Snapshot file: `t6-06-full-snapshot-components-list-readback.yml` (1).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 23. T7 — read-only pre-save verification and audit reconciliation (cycle 6)

Full report: `evidence/EXP-067-R2/T7-pre-save-verification-and-audit-reconciliation-report.md`. Task message `073c2a8f-2d2e-476d-a93e-a316a188bb41`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any action; tab 0 (Designer) current; untargeted snapshot: FX_Items, User footer, Save and Undo enabled, no dialog.
- **Component tree (expanded Pane 00 and Pane 01; saved snapshot `page-2026-10-12T17-46-39-214Z.yml`):** 19 rows = the 17 T1 entries (2 panes, FormCollectionGrid, 4 GridColumns, 10 Pane 01 components; identities, data sources and tabs match) plus `FX_UMsDescriptionEdit` (Pane 1, Tab 0) and `FX_UMsDescriptionStatic` (Pane 1, Tab 0). Comparison is by identity and visible columns; not an exhaustive property diff.
- **New component readbacks:** Static Name `FX_UMsDescriptionStatic`, Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription` (canvas "Description:"). Edit Name `FX_UMsDescriptionEdit`, Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription`. All match the brief.
- **Original geometry re-read (live):** FX_UMCombobox Location `7.75; 23.75` / Size `37.25; 2.15`; FX_PictureStatic Location `10.5; 21.5` / Size `20; 9`; FX_RefreshButton Location `12.1666666666667; 5.25` / Size `14.25; 1.89`. All match T1. Form Size `69; 21` not re-read (limitation).
- **Overlap:** the Static (rows 10.5–12.0) and Edit (rows 12.5–14.39) occupy columns 42.5–54.5 with no overlap with each other or existing components (readback estimate; canvas `t7-01`, `t7-02`).
- **Audit reconciliation:** T6 = 75 (controller); the T6 report's ~78 is superseded. The T6 stale-ref error (targeted ref `e2534`) was followed by fresh finds and a successful targeted snapshot, not the brief's fresh untargeted snapshot; no mutation was repeated. The T6 Name typing and Tab were sent in one response (sequencing deviation); the Name is independently verified as `FX_UMsDescriptionStatic`. The five typed-entry flags (T5 Edit: Name, Top, Left, Width, Height; T6 Static: the same five) were native rendered Properties entries; no worker-authored script or restriction violation was identified.
- **Counts (T7):** 31 explicit browser calls (tab list 1; snapshot 1; finds 20; clicks 7 — Components Expand and six tree-row or Properties selections; screenshots 2). No property change, Save, Undo, close, reopen, unload or drop.
- **Cumulative:** T1–T6 = 280 (controller); **T1–T7 = 311**.
- **Worker-written files (T7):** `evidence/EXP-067-R2/T7-pre-save-verification-and-audit-reconciliation-report.md`; `t7-01-static-properties-and-canvas-pre-save-readback.png`; `t7-02-edit-properties-and-canvas-pre-save-readback.png`; this record (updated).
- **Final state:** Designer dirty, unsaved, Save enabled; Web Client untouched; ready for the separately authorized single Save.

## 24. Worker-written file inventory (cumulative, T1–T7)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T7).
- `evidence/EXP-067-R2/`: `T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`; `T6-static-drop-and-configuration-report.md`; `T7-pre-save-verification-and-audit-reconciliation-report.md`.
- Screenshots: `t1-01`…`t1-06` (6); `t2-01`…`t2-03` (3); `t3-01`…`t3-04` (4); `t4-01`, `t4-02` (2); `t5-01`…`t5-12` (12); `t6-01`…`t6-05`, `t6-07` (6); `t7-01`, `t7-02` (2).
- Snapshot files: `t6-06-full-snapshot-components-list-readback.yml` (1).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 25. T8 — single native Designer Save and immediate verification (cycle 7)

Full report: `evidence/EXP-067-R2/T8-single-designer-save-and-immediate-verification-report.md`. Task message `f7b37279-18b7-4f8f-8359-f19d0ce0109a`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any select; tab 0 (Designer) current; fresh snapshot: FX_Items, User footer (ScopeName anton.ramos@3mworks.com.ph), Save enabled, Undo enabled, no dialog. Reconfirmed by read-only find: `FX_sDescription` (Static Caption) and `object.FX_UMsDescription` (Edit Binding). Pre-save screenshot `t8-01`.
- **Save (1 of 1):** one click on the native toolbar Save. Native response (verbatim, from the toast in the accessibility tree): `Save` — `Form [FX_Items] and global object(s) were saved.` with a `Close` button. No error, no confirmation dialog. Not retried.
- **Immediate state (fresh finds):** toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo `[disabled]`; Redo `[disabled]`; `dialog` none. Identity unchanged (footer ScopeType User, ScopeName unchanged). Both components present.
- **Post-save screenshot `t8-02`** (viewed): Save and Undo icons greyed; components in place; canvas target area; footer User scope. The toast had auto-dismissed, so the message text is from the find, not the screenshot.
- **Not performed:** close, reopen, unload, Undo, component or property edit, Web Client operation, runtime edit, a second Save.
- **Counts (T8, corrected in T9):** 17 explicit browser calls: tab lists 1; snapshots 1; finds 11; clicks 2 (Components row selection; Save 1); screenshots 2.
- **Cumulative:** Save count 1; Web Client unload 1; Designer unload 1; Toolbox drops 2; cumulative browser calls 328 (T1–T7 base of 311 controller-reconciled, plus 17).
- **Worker-written files (T8):** `evidence/EXP-067-R2/T8-single-designer-save-and-immediate-verification-report.md`; `t8-01-pre-save-state-both-components-dirty-save-enabled.png`; `t8-02-post-save-save-undo-disabled-native-response-message.png`; this record (updated).
- **Limitations:** the toast auto-dismissed before the screenshot; Location, Size and Caption values were not re-read after Save; persistence beyond this session is not verified (requires the reopen).

## 26. Worker-written file inventory (cumulative, T1–T8)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T8).
- `evidence/EXP-067-R2/`: `T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`; `T6-static-drop-and-configuration-report.md`; `T7-pre-save-verification-and-audit-reconciliation-report.md`; `T8-single-designer-save-and-immediate-verification-report.md`.
- Screenshots: `t1-01`…`t1-06` (6); `t2-01`…`t2-03` (3); `t3-01`…`t3-04` (4); `t4-01`, `t4-02` (2); `t5-01`…`t5-12` (12); `t6-01`…`t6-05`, `t6-07` (6); `t7-01`, `t7-02` (2); `t8-01`, `t8-02` (2).
- Snapshot files: `t6-06-full-snapshot-components-list-readback.yml` (1).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 27. T9 — post-save Designer close, reopen and persistence verification (cycle 8)

Full report: `evidence/EXP-067-R2/T9-post-save-designer-close-reopen-and-persistence-verification-report.md`. Task message `d04e1885-a78f-4ba9-b1e0-b9fa4826b1c3`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any select; tab 0 (Designer) current; fresh snapshot: FX_Items, Save and Undo disabled, User footer, no dialog.
- **Close (1):** native Form-tab close control. **No unsaved-changes prompt.** Tab gone; canvas and Properties empty (`t9-01`).
- **Reopen (1):** Designer toolbar folder control (tooltip `Open`) → Select Form (one row FX_Items / FX_Items) → row click → OK. Reopened: tab heading FX_Items; URL `MGForm=FX_Items`; Save and Undo disabled; footer User scope, ScopeName anton.ramos@3mworks.com.ph; no dialog.
- **Component tree:** 19 rows (grep count): the original 17 identities plus `FX_UMsDescriptionEdit` (Pane 1, Tab 0) and `FX_UMsDescriptionStatic` (Pane 1, Tab 0). Identity and visible-column comparison; not an exhaustive property diff.
- **Persistence readbacks (live, after reopen):** Static Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription`, canvas "Description:" (`t9-02`). Edit Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription` (`t9-03`). Both components non-overlapping on the canvas.
- **Original geometry:** not re-read in T9 (matched T1 in T7). Form Layout not re-read.
- **Runtime:** not opened (not authorized by T9).
- **Counts (T9):** 33 explicit browser calls: tab lists 1; snapshots 4; finds 16; clicks 9; screenshots 3. Designer close/reopen post-save 1/1. Designer Saves 0 in T9 (count remains 1 from T8). Toolbox drops 0 in T9 (total 2). Unloads unchanged (Web Client 1, Designer 1).
- **Corrections:** T8 audit corrected from 22 to **17** (1 tab list; 1 snapshot; 11 finds; 2 clicks; 2 screenshots). Cumulative T1–T8 = **328** (not 333). Cumulative T1–T9 = **361**.
- **Carried-forward audit items:** the T6 Name typing and Tab sequencing deviation (verified Name `FX_UMsDescriptionStatic`), and the T6 stale-reference error (`e2534`; recovered with finds and a successful targeted snapshot of a fresh ref).
- **Limitations:** persistence shown by close and reopen within the same session (not a database read); the stored `FX_sDescription` value not read; no exhaustive original-property diff; Select Form dialog not screenshotted; Location and Size rows below the visible area in screenshots (readbacks used).
- **Worker-written files (T9):** `T9-post-save-…-report.md`; `t9-01`, `t9-02`, `t9-03` PNGs; `T8-…-report.md` (updated: count corrected); this record (updated).

## 28. Worker-written file inventory (cumulative, T1–T9)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T9).
- `evidence/EXP-067-R2/`: `T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`; `T6-static-drop-and-configuration-report.md`; `T7-pre-save-verification-and-audit-reconciliation-report.md`; `T8-single-designer-save-and-immediate-verification-report.md` (updated); `T9-post-save-designer-close-reopen-and-persistence-verification-report.md`.
- Screenshots: `t1-01`…`t1-06` (6); `t2-01`…`t2-03` (3); `t3-01`…`t3-04` (4); `t4-01`, `t4-02` (2); `t5-01`…`t5-12` (12); `t6-01`…`t6-05`, `t6-07` (6); `t7-01`, `t7-02` (2); `t8-01`, `t8-02` (2); `t9-01`…`t9-03` (3).
- Snapshot files: `t6-06-full-snapshot-components-list-readback.yml` (1).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 29. T10 — Web Client runtime FX_Items verification: dumbbell, eggs, guitar (cycle 9)

Full report: `evidence/EXP-067-R2/T10-runtime-fx_items-verification-report.md`. Task message `d832f47f-49f8-46af-a34a-8fc08c20673c`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Gate:** tab list (2) before any select; Web Client (tab 1) selected after the list; fresh snapshot: Explorer, no runtime Form tab, no modal. Dirty-state check: no runtime Form open, so none dirty; the conditional close was unnecessary and not performed.
- **Open (1):** Form menu → Open → Select Form (one row FX_Items / FX_Items) → row click → OK. Result: `favoriteContext=FX_Items`; tab panel `FX_Items`; status `Description (Object 1 of 3)`; Save disabled. Screenshot `t10-02`.
- **Record values (actual):**
  - dumbbell (Object 1 of 3): Unit of Measure `EA`; FX_UMsDescriptionEdit `Each`; Cost `45.00`; base Description `45 pound iron`. Expected EA/Each: match. Screenshots `t10-02`, `t10-03`.
  - eggs (Object 2 of 3): Unit of Measure `DZ`; FX_UMsDescriptionEdit `Dozen`; Cost `6.99`; base Description `cage free`. Expected DZ/Dozen: match. Screenshot `t10-04`.
  - guitar (Object 3 of 3): Unit of Measure `EA`; FX_UMsDescriptionEdit `Each`; Cost `129.99`; base Description `natural acoustic`. Expected EA/Each: match. Screenshot `t10-05`.
- **Incident (1):** the first click on the guitar row's Item cell timed out (the pane splitter and the locked grid's row-number cell intercepted pointer events). One fresh untargeted snapshot (Form on Object 2 of 3, Save disabled, guitar row present), then one corrected click on the row-number cell (row 3), which succeeded. No field changed.
- **Clean state:** Save disabled after open, after record 2, after record 3, and at the final check. No dialog.
- **Counts (T10):** **41** explicit browser calls (controller-authoritative; the worker estimate of 40 is superseded): tab lists 1; tab selects 1; snapshots 4; finds 19; clicks 10; screenshots 5. Runtime close 0; runtime reopen (first open) 1. Record edits 0; runtime Save 0; preference changes 0; Designer touched 0.
- **Cumulative:** T1–T9 361 (carried forward); **T1–T10 = 402** (controller-authoritative sum; the worker tally of 401 is superseded).
- **Limitations:** `t10-03` (record 1) was not viewed as an image; record 1's values rest on the accessibility readbacks, and `t10-02` (viewed) shows record 1's Item, Unit of Measure and Description Edit. The Form's own name is not displayed in the runtime beyond the tab panel name. Runtime cross-session durability not claimed.
- **Carried forward:** the T6 Name sequencing deviation (verified Name `FX_UMsDescriptionStatic`) and the T6 stale-reference error (`e2534`).

## 30. Worker-written file inventory (cumulative, T1–T10)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T10).
- `evidence/EXP-067-R2/`: `T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`; `T6-static-drop-and-configuration-report.md`; `T7-pre-save-verification-and-audit-reconciliation-report.md`; `T8-single-designer-save-and-immediate-verification-report.md`; `T9-post-save-designer-close-reopen-and-persistence-verification-report.md`; `T10-runtime-fx_items-verification-report.md`.
- Screenshots: `t1-01`…`t1-06` (6); `t2-01`…`t2-03` (3); `t3-01`…`t3-04` (4); `t4-01`, `t4-02` (2); `t5-01`…`t5-12` (12); `t6-01`…`t6-05`, `t6-07` (6); `t7-01`, `t7-02` (2); `t8-01`, `t8-02` (2); `t9-01`…`t9-03` (3); `t10-01`…`t10-05` (5).
- Snapshot file: `t6-06-full-snapshot-components-list-readback.yml` (1).
- Tool-written `evidence/playwright/` snapshot and console files are outside this path and not exhaustively listed. The harness and operator git review are authoritative.

## 31. T11 — documentation-only final acceptance review (cycle 10)

Full report: `evidence/EXP-067-R2/T11-final-acceptance-report.md`. Task message `50000760-0dcb-4fc5-ad4a-ad9107a68c21`, worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`.

- **Browser calls:** zero in T11. The two runtime screenshots `t10-03` and `t10-04` were read as image files through the file reader (no browser interaction). Their contents match the T10 readbacks.
- **Reconciliation:** the controller's per-task counts sum to 402. The T10 worker figure of 40 (and cumulative 401) is superseded by the controller's 41 (and 402). The T6 figure is 75 (cumulative T1–T6 280), superseding the earlier ~78 estimate. Corrections were applied to the T10 report and to this record's status line and §29.
- **Acceptance:** AC-1 to AC-8 supported (matrix in the T11 report, §3). Recommendation: ACCEPTED as observed, with qualifications (§8 of the T11 report). Not replay_verified.
- **Preserved incidents:** the single recovered guitar-row timeout (controller error #33; recovered by a fresh snapshot and a corrected row-number click); the T6 stale snapshot-reference error (`e2534`); the T6 Name-entry/Tab sequencing deviation (Name verified); the `browser_type` flags treated as native Properties entry.
- **Worker-written files (T11):** `evidence/EXP-067-R2/T11-final-acceptance-report.md` (created); this record (updated); the T10 report (count correction and the `t10-03`/`t10-04` viewing status). No other prior record was modified.
- **Harness-generated files present:** `harness-audit-T1.md` … `harness-audit-T10.md` (controller records, not worker-authored).

## 32. Final worker-written file inventory (cumulative, T1–T11)

- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T11).
- `evidence/EXP-067-R2/`: reports `T1`–`T11` (eleven Markdown; `T11-final-acceptance-report.md` created in T11; `T10` and `T9` count/status corrections applied in T11).
- Screenshots (45 PNG, verified by filename enumeration in T12): `t1-01`…`t1-06`; `t2-01`…`t2-03`; `t3-01`…`t3-04`; `t4-01`, `t4-02`; `t5-01`…`t5-12`; `t6-01`…`t6-05`, `t6-07`; `t7-01`, `t7-02`; `t8-01`, `t8-02`; `t9-01`…`t9-03`; `t10-01`…`t10-05`.
- Snapshot: `t6-06-full-snapshot-components-list-readback.yml`.
- Harness/controller-generated (not worker-authored): `harness-audit-T1.md` … `harness-audit-T11.md` (11 files). The T11 audit records 0 browser actions and 0 reads; its one error (#17) was a documentation `Edit` whose replacement string did not match the file (a T10 report edit); the subsequent corrected edits succeeded. Not a browser failure or application blocker.
- Tool-written `evidence/playwright/` files outside the EXP-067-R2 evidence path: not enumerated; the harness and operator git review are authoritative.

## 17. Next permitted step (updated after T11)

**None authorized.** T11 is the documentation-only final acceptance review. The experiment record is complete as observed, with the recommendation ACCEPTED (observed, with qualifications; not replay_verified). Any further verification (for example, a database read of the stored `FX_sDescription` value, a cross-session reopen, or exhaustive property comparison) would need a separate operator authorization and is not part of this experiment. No unload may be repeated, and Save must not be invoked again.

## 17c. Previous next permitted step (updated after T10)

**None authorized in this experiment.** The runtime verification (AC-7) is complete as observed. The remaining step is the final documentation acceptance (AC-8) reconciling the controller counts (T9, T10 and the cumulative total), which needs controller reconciliation rather than further browser action. No unload may be repeated, and Save must not be invoked again.

## 17b. Previous next permitted step (updated after T9)

**Not yet authorized.** The next step is the clean runtime FX_Items close and reopen (Form > Open > Select Form; FX_Items / FX_Items row), with dumbbell, eggs and guitar selected in turn to record the Unit of Measure and the FX_UMsDescriptionEdit description (expected EA Each, DZ Dozen, EA Each); no record edits; no runtime Save; the Form must remain clean. No unload may be repeated, and Save must not be invoked again.

## 17a. Next permitted step (previous, updated after T7)

**Not yet authorized.** The next step is the single Designer Save through the native toolbar Save (once; record the native response verbatim; no retry), then the close and reopen of the clean Designer Form, verification of both new components, then the clean runtime FX_Items close and reopen with dumbbell, eggs and guitar. The Designer is dirty and ready for that Save. No unload may be repeated.

## 17a. Next permitted step (previous, updated after T6)

**Not yet authorized.** The next task is the single Designer Save through the native toolbar Save (once; record the native response verbatim; no retry), then the close and reopen of the clean Designer Form, verification of both new components (names, geometry, Caption, binding), then the clean runtime FX_Items close and reopen with the dumbbell, eggs and guitar checks. Both new components are configured and unsaved; neither may be undone or removed. Neither unload may be repeated. If it is missing or ambiguous, stop blocked without committing and without a second unload. Then, if the gate passes: add FX_UMsDescriptionStatic (one Toolbox drop; Location 10.5; 42.5; Size 12; 1.5; Caption `FX_sDescription`), add FX_UMsDescriptionEdit (one Toolbox drop; Location 12.5; 42.5; Size 12; 1.89; Binding Type Property, Binding `FX_UMsDescription`), one Designer Save, one close/reopen, and the runtime check. Both unloads are complete; neither may be repeated.

## Outcome (operator, 2026-10-13)

Accepted. Hello World Part 4 section 8a is complete. Operator call under the standing authorization of 2026-10-11, and the operator unload authorization of 2026-10-13.

- Run R-20261013-011002-lSgL completed as accepted after 12 worker tasks, with no pauses. The session did not expire, so the new re-login rule was not exercised (re-login count 0).
- Unloads: exactly one Web Client and one Designer Unload All Global Form Objects, the Designer one with FX_Items closed. The binding gate passed: the picker listed `object.FX_UMsDescription` (`t4-01`, `t5-06`).
- Screenshots viewed by the operator assistant:
  - `t9-03`: the reopened Designer, User scope.
    - FX_UMsDescriptionEdit (Edit) Data Source `object.FX_UMsDescri…`.
    - FX_UMsDescriptionStatic (Static).
    - Both in Pane 1, to the right of the picture box and below Unit of Measure.
  - `t8-02` (the companion image to `t9-03`): FX_UMsDescriptionStatic shows Caption `FX_sDescription`, canvas text "Description:", Justification Right. Save and Undo are disabled.
    - The worker recorded the toast verbatim: "Form [FX_Items] and global object(s) were saved."
  - `t10-04`: the reopened runtime shows eggs, DZ, with "Description:" and a read-only field reading **Dozen**.
    - `t10-03` and `t10-05` show dumbbell and guitar, both EA → Each, per the worker's readback.
- Confinement (git status): only `evidence/EXP-067-R2/` and this record were written by the run.
- Findings (observed):
  - After the unload pair, the joined IDO property is offered by the Designer binding picker as `object.FX_UMsDescription`.
  - The bound Edit renders read-only (grey) at runtime.
  - Both new components got Tab 0; tab order was not set in this experiment.
  - Persistence is limited to the same-session close/reopen.
- Next: section 8b adds the UM description grid column (Edit Grid Columns). No further unload is needed, because the property is already visible to the Designer.
