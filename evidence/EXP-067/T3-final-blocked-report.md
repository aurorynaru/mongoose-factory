# EXP-067 — T3 final blocked report (documentation only)

Run `R-20261013-002531-dQHH`, EXP-067, cycle 2, task T3. Worker session `5f313844-ef7c-4b87-857e-e2a659f0f6c3`; task_message_id `ec4ff6bf-b8ef-4275-b184-2ed637589aad`. Date 2026-10-13. Editing scope User. Target Form `FX_Items`.

**Outcome: BLOCKED at AC-2.** Both browser tabs display an in-page Mongoose `Session Expired` modal. The continuation the brief requires (the authenticated session for the unload pair and the binding gate) is unavailable under this experiment's restrictions: no reauthentication, refresh, restart or session replacement. The brief's own stop conditions were reached before any unload or Form change.

**Scope of this step:** documentation only. **Zero browser calls. Zero application changes.** No interaction with either modal and no session restoration was attempted.

## 1. Acceptance state

| AC | State | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Incomplete.** Sources reviewed; session usable at the T1 start; Designer `FX_Items` User scope and clean; component list recorded; FX_UMsDescriptionStatic and FX_UMsDescriptionEdit absent; accessibility geometry recorded for FX_UMCombobox, FX_PictureStatic, FX_RefreshButton and the Form. **Not established:** the effective Pane 1 boundary, and the requested rendered Size and Location screenshots | Identity and clean footer: `t1-01`, `t2-01`. Component list and absences: accessibility `page-2026-10-12T16-26-30-788Z.yml`. Geometry: accessibility `…16-27-07-788Z.yml` (FX_UMCombobox), `…16-27-46-112Z.yml` (FX_PictureStatic), `…16-27-53-786Z.yml` (FX_RefreshButton), `…16-28-11-048Z.yml` (Form) | No screenshot shows a Size or Location row. Pane 1 is not exposed natively (Pane row shows no Properties). Pane 1 width 58 is derived (Form 69 − splitter 11), not read |
| AC-2 | **Blocked / partial.** Preference read as checked and left unchanged: supported. Web Client unload: **0**. Designer unload: **0**. Designer close/reopen before unload: **0**. Binding picker: **not reached**. Unload menu labels: **not observed** | Preference: `t1-12` (checked; dialog footer OK and Help only), `t1-13` (dialog closed). Session modals: `t2-01` (Designer), `t2-02` (Web Client) | The Web Client Form > Definition submenu was not expanded, so the unload label was not observed |
| AC-3 | **Not attempted** | — | Blocked before any Toolbox drop |
| AC-4 | **Not attempted** | — | Blocked before any Toolbox drop |
| AC-5 | **Not attempted** | — | No Designer Save |
| AC-6 | **Not attempted** | — | No Designer close/reopen after changes |
| AC-7 | **Not attempted** | — | No runtime close/reopen |
| AC-8 | **Documentation completed for the stop state** (this report and §3–§6 below). The complete decisive set for AC-3 to AC-7 does not exist | — | The brief's AC-8 expects outcomes for AC-1 to AC-7; those outcomes do not exist |

## 2. Preference reading and the accepted substitution

- `Unload IDO Metadata With Forms` read as **checked** (`t1-12`; accessibility `checkbox "Unload IDO Metadata With Forms" [checked]`). Its value was not changed.
- The brief asked for the dialog to be closed with **Cancel**. The dialog has **no Cancel button** (its footer shows OK and Help only). T1 closed it with the dialog's `Close Window` control, without OK. The coordinator accepted that substitution. Recorded as an accepted deviation.
- No other User Preference was read or changed.

## 3. Session state at the stop

- **Designer (tab 0):** `Session Expired` alertdialog over the canvas, with its OK button active (accessibility ref `e1824` in the T2 snapshot; `t2-03`). It was raised by a view-only click on the Pane (01) row (`t2-01`). Left **open**. OK was **not** clicked. Save and Undo are disabled, so no dirty Designer Form was observed. Designer URL is `designer/default.aspx` (the `?MGForm=FX_Items` query was not present at the T2 tab list; cause unresolved). Title `FX_Items`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`.
- **Web Client (tab 1):** `Session Expired` modal over the Mongoose frame, raised after the IDOs tab-heading click (`t2-02`). The modal is visible in the screenshot; an accessibility snapshot taken after the click does not confirm it (limitation). Left **open**. OK was **not** clicked. The active Web Client tab is now the **IDOs** tab (IDO Collections, `favoriteContext=IdoCollections`), Save disabled, Revision Num 2, Locked By the operator. The `FX_Items` runtime tab, which was active at the start of T2, was not closed and is clean (Save disabled at the last read).
- **Dirty state:** no dirty Form observed. Designer Save and Undo disabled (last read: `t2-03`). Web Client IDOs and FX_Items runtime Save disabled (last read under the modal: `t2-02`).
- **Tabs:** 2 (Designer, Web Client). The portal tab `System Administrator` is untouched.

## 4. Baseline observations (AC-1 detail, observed only)

- Components (17 tree entries): Pane (00): FormCollectionGrid (Grid, objects, Tab 0); FX_ItemGridCol (Tab 1), FX_DescriptionGridCol (Tab 2), FX_CostGridCol (Tab 3), FX_UMGridCol (Tab 4). Pane (01): FX_PictureStatic (Static, object.FX_Picture, Tab 0); FX_RefreshButton (PushButton, Tab 0, Event FX_ImportPicture); FX_ItemStatic (Static, Tab 5); FX_ItemEdit (Edit, object.FX_Item, Tab 6); FX_DescriptionStatic (Static, Tab 7); FX_DescriptionEdit (Edit, object.FX_Description, Tab 8); FX_CostStatic (Static, Tab 9); FX_CostEdit (Edit, object.FX_Cost, Tab 10); FX_UMStatic (Static, Tab 11); FX_UMCombobox (ComboBox, object.FX_UM, Tab 12).
- FX_UMsDescriptionStatic and FX_UMsDescriptionEdit: absent from the full list.
- Geometry (Unit Char; Location = row; column; Size = width; height), accessibility readbacks only:

| Item | Size | Location |
| --- | --- | --- |
| FX_UMCombobox | 37.25; 2.15 | 7.75; 23.75 |
| FX_PictureStatic | 20; 9 | 10.5; 21.5 |
| FX_RefreshButton | 14.25; 1.89 | 12.1666666666667; 5.25 |
| Form | 69; 21 (Splitter Vertical; Splitter Position 11) | — |

- Target area (Static 10.5; 42.5 / 14; 1.5; Edit 12.5; 42.5 / 14; 1.89): spans columns 42.5–56.5 and rows 10.5–14.39. No overlap with any listed component (nearest: FX_PictureStatic right column 41.5; FX_UMCombobox bottom row 9.90). Inside the declared Form (56.5 < 69; 14.39 < 21).

## 5. Target-area boundary: estimate versus verification

- **The effective Pane 1 boundary is not established.** The native Pane (01) row exposes no Layout properties. Pane 1 = 58 columns is derived from Form width and splitter position, not read.
- **Rendered boundary:** the Designer canvas clips FX_UMCombobox at x ≈ 810 px. Under the calibrated model (x = 355 + 8.0 × column; y = 100 + 18.1 × row, fitted to four components to about ±1 px), x 810 corresponds to column ≈ 56.9.
- **Estimated clearance:** the target right edge (column 56.5) maps to x ≈ 807, about **3 px inside** the clip. This is a computed estimate from a fitted model, not a measured placement.
- **Correction of an earlier estimate:** the T1 report and the record (§3, §6 item 1, §10) said the target edge sat "about 3 px past" the visible edge. That used an 8.1 px scale. T2 recalibrated to 8.0 px, which places the edge inside. **The T1 "past" statement is superseded**, and the T2 "inside" statement stands as an estimate only.
- **Verified placement: none.** No component was placed, so no placement was verified. No rendered Size or Location screenshot confirms the boundary.

## 6. Counts and reconciliation

Explicit browser calls: T1 **63** (tab list 1; tab selects 3; snapshots 3; finds 18; clicks 17; key press 1; mouse wheel 2; screenshots 18, of which 16 succeeded and 2 timed out). T2 **12** (tab list 1; tab selects 2; snapshots 3; finds 1; clicks 2; screenshots 3). T3 **0**. **Cumulative 75** (63 + 12 + 0). Worker-side sum by category: tab lists 2; tab selects 5; snapshots 6 (5 untargeted, 1 targeted); finds 19; clicks 19; key presses 1; wheel 2; screenshots 21 (19 succeeded, 2 timed out); total 75. Controller audit verification: **pending**, not available to the worker.

| Count | Value |
| --- | --- |
| Preference read | 1 (unchanged) |
| Web Client unload | **0** |
| Designer unload | **0** |
| Pre-change Designer close/reopen | **0 / 0** |
| Toolbox drops | **0** |
| Other component changes (add, delete, rename, property, event) | **0** |
| Designer Save | **0** |
| Post-Save Designer close/reopen | **0 / 0** |
| Runtime close/reopen | **0 / 0** |
| Runtime record edits; runtime Save | **0; 0** |
| Preference changes | **0** |
| Check-in or undo checkout | **0** |
| Session modal OK clicks; reauthentication; refresh; restart | **0; 0; 0; 0** |
| Browser JavaScript, console, network inspection, direct URL navigation | **0** |

## 7. Worker-written file inventory (EXP-067, all tasks)

Repository files written by this worker (23 total):

- `experiments/EXP-067-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created in T1; updated in T2 and T3)
- `evidence/EXP-067/T1-preflight-report.md`
- `evidence/EXP-067/T2-preflight-resolution-report.md`
- `evidence/EXP-067/T3-final-blocked-report.md` (this file)
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
- `evidence/EXP-067/t2-01-pane01-selected-properties.png`
- `evidence/EXP-067/t2-02-webclient-idos-tab-readonly-save-disabled.png`
- `evidence/EXP-067/t2-03-designer-session-expired-state-layout-visible.png`

Tool-written, not worker-authored: accessibility snapshot and console files under `evidence/playwright/` from T1 and T2 (for example the snapshots cited above). This list is not exhaustive. The harness and operator git review are authoritative.

Screenshot names that overstate content, with what they actually show: `t1-06`, `t1-07`, `t1-08` (Layout not expanded or not visible); `t1-15` (Size 69; 21 not visible; same view as `t1-14`).

## 8. Final browser and application state

- Designer tab 0: current; `FX_Items` (User scope, clean); `Session Expired` modal open; Save and Undo disabled; no Form change; no component change.
- Web Client tab 1: IDOs tab active (IDO Collections, clean, Save disabled); `Session Expired` modal open (`t2-02`); `FX_Items` runtime tab open, clean, not closed.
- No unload, Designer close/reopen, runtime close/reopen, Save, drop, property change, record edit, check-in or undo has occurred.
- Stable page state: **not reached**. Two in-page modals remain open, as directed (no interaction).

## 9. Knowledge state

| Finding | State |
| --- | --- |
| Designer identity FX_Items, User scope, clean, at the T1 and T2 starts | observed (one session) |
| Component list and absence of the two new components | observed (accessibility) |
| Layout geometry of the four items and the Form | observed (accessibility only; no rendered Size or Location capture) |
| Native Pane 1 boundary, and Pane 1 width 58 | **unresolved** (derived, not read) |
| Target area inside the visible clip by about 3 px | **unresolved** (estimate from a fitted model; not verified placement) |
| T1 statement "about 3 px past" the visible edge | **superseded** by the T2 recalibration (8.0 px scale) |
| `Unload IDO Metadata With Forms` checked and unchanged | observed (one session) |
| Preferences dialog has no Cancel; `Close Window` used | observed; accepted substitution |
| `Session Expired` modal on both tabs | observed (one session); cause **unresolved** |
| Designer URL lost its `MGForm` query between T1 and T2 | observed; cause **unresolved** |
| Runtime picture region renders an image for dumbbell (T1) | observed; cause **unresolved** |
| Unload menu labels, binding picker, Save, reopen, runtime records | **not observed** (not reached) |
| Any replay or procedure status | not claimed; **nothing replay_verified** |

## 10. Blocker and next permitted action

- **Blocker:** `Session Expired` on both tabs. The required continuation (the unload pair, the binding gate and every Form change) needs an authenticated session. Re-establishing it is outside this worker's scope.
- **Operator decisions before any future run:** (a) restore the session through the operator's own route; (b) decide the Pane 1 boundary question, either by accepting the estimate or by approving a native readback or observable placement test; (c) confirm the Designer URL/`MGForm` loss is not a problem for a later run; (d) re-read the Save state of both Forms after the session is restored.
- **Next permitted action:** none in this experiment. This step is complete. No further browser call is authorized by this report.
