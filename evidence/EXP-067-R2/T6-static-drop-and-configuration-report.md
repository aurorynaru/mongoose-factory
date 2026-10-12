# EXP-067-R2 — T6 report: one Toolbox Static drop and configuration of FX_UMsDescriptionStatic on the unsaved Form

Run `R-20261013-011002-lSgL`, cycle 5, task T6. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `955349dd-5d02-4ac2-a8fb-79135d11bbd6`. Date 2026-10-13. Editing scope User.

**Outcome: one Static was dropped from the Toolbox (auto-named `static1_USER`, Pane 1, Tab 0) and configured as `FX_UMsDescriptionStatic`: Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription` (selected from the Caption dropdown; canvas renders "Description:"). The Edit `FX_UMsDescriptionEdit` remains configured (Location `12.5; 42.5`, Size `12; 1.89`, Binding Type `Property`, Binding `object.FX_UMsDescription`). The Form is dirty and UNSAVED (Save and Undo enabled). Designer Save count 0. Unloads unchanged: Web Client 1, Designer 1. Toolbox drops now total 2.**

## 1. Preconditions (fresh)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, current); tab 1 = Web Client. No tab select was needed.
- Fresh untargeted snapshot: FX_Items; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; **Save enabled**; Undo enabled; no dialog; Components tree 17 original rows plus `FX_UMsDescriptionEdit` (Edit; Pane 1; Tab 0; Data Source `object.FX_UMsDescription`); `FX_UMsDescriptionStatic` absent.
- Edit readbacks (pre-drop): Name `FX_UMsDescriptionEdit`; Location `12.5; 42.5`; Size `12; 1.89`; Binding Type `Property`; Binding `object.FX_UMsDescription`. All intact.
- Pre-drop screenshot `t6-01` (viewed): Edit visible at the target; target area for the Static empty.

## 2. Toolbox drop (count 1)

- One mouse drag from the Toolbox `Static` item (about x 81, y 788) to the canvas target (about x 700, y 300). Not repeated.
- Result (`t6-02`, viewed): one new component `static1_USER` (Static; Pane 1; Tab 0) appeared and was selected. Save and Undo remained enabled.
- Drop-time geometry: Location `11.0555555555556; 42.75`; Size `87.5; 16.6666666666667`. Justification defaulted to `Right`; Type `Static`; From Device Master `True`.

## 3. Configuration of the same Static (native Properties)

| Property | Before | Set to | Readback after | Evidence |
| --- | --- | --- | --- | --- |
| Name | `static1_USER` | `FX_UMsDescriptionStatic` (typed once; Tab) | Properties Name `FX_UMsDescriptionStatic`; Components row `FX_UMsDescriptionStatic Static 1 0` | `t6-05`, `t6-07` |
| Location Top (row) | `11.0555555555556` | `10.5` (typed once; Tab) | Location `10.5; 42.5` | readback at end of T6 |
| Location Left (column) | `42.75` | `42.5` (typed once; Tab) | Location `10.5; 42.5` (Left `42.5`) | readback at end of T6 |
| Size Width | `87.5` | `12` (typed once; Tab) | Size `12; 1.5` | readback at end of T6 |
| Size Height | `16.666666666666668` | `1.5` (typed once; Tab) | Size `12; 1.5` | readback at end of T6 |
| Caption | blank | `FX_sDescription` (one list selection from the Caption dropdown; Tab) | Caption `FX_sDescription` (combobox and Properties); canvas renders `Description:` | `t6-04` (list before selection), `t6-05`, `t6-07` |

Other properties were not edited. Justification `Right` (drop default) was not changed. Caption was selected from the existing list; no string was created and no literal caption was typed.

Note on Location/Size editing: as with the Edit in T5, the first double-click on a value expanded nothing; a second double-click (or a single click on the row's expand control) exposed the Top/Left and Width/Height sub-rows, which were then edited individually.

## 4. Caption resolution

- The Caption dropdown listed `FX_sCost`, `FX_sDescription`, `FX_sImport` (plus further entries below the visible list). `FX_sDescription` was selected and committed with Tab.
- Resolved text (observed): the canvas shows the Static as **`Description:`** (`t6-05`, `t6-07`), the same rendering as the existing `FX_DescriptionStatic` label (`Description:`), which indicates the string resolves to "Description" with the usual colon.
- Limitation: the string's stored value was not read in the string editor (to avoid an unrequested editor interaction); the resolution rests on the rendered canvas text.

## 5. Placement and overlap

- Static on canvas (`t6-07`, viewed): above the Edit, right of the picture box, at about x 697–795, y 290–317. Rendered as "Description:" with the right-justified value.
- Edit on canvas: about x 697–795, y 326–361.
- No overlap between the two new components. No overlap with FX_PictureStatic (box right edge about x 689), FX_UMCombobox (bottom about y 279), FX_RefreshButton or the Import button.
- Both components are inside the canvas (right edge about x 810).

## 6. Complete Components list (saved accessibility snapshot `evidence/EXP-067-R2/t6-06-full-snapshot-components-list-readback.yml`; rows read by grep)

Pane (00): `Pane (00)` present (its child rows FormCollectionGrid and the four GridColumns sit in a collapsed branch and were **not** expanded in this read; limitation).

Pane (01) rows, in order:
`FX_PictureStatic` (Static; object.FX_Picture; Tab 0) ·
`FX_RefreshButton` (PushButton; FX_ImportPicture; Tab 0) ·
`FX_ItemStatic` (Static; Tab 5) ·
`FX_ItemEdit` (Edit; object.FX_Item; Tab 6) ·
`FX_DescriptionStatic` (Static; Tab 7) ·
`FX_DescriptionEdit` (Edit; object.FX_Description; Tab 8) ·
`FX_CostStatic` (Static; Tab 9) ·
`FX_CostEdit` (Edit; object.FX_Cost; Tab 10) ·
`FX_UMStatic` (Static; Tab 11) ·
`FX_UMCombobox` (ComboBox; object.FX_UM; Tab 12) ·
**`FX_UMsDescriptionEdit`** (Edit; object.FX_UMsDescription; Tab 0) ·
**`FX_UMsDescriptionStatic`** (Static; Tab 0).

So the component count is the original 17 entries plus exactly these two additions (19 entries). The original Pane 01 components are present in the same order, and their visible Data Source and Tab values are unchanged from the T1 baseline. The Pane 00 grid columns were not re-read in this task.

## 7. Final state

- Designer: tab 0; FX_Items; User scope (ScopeName anton.ramos@3mworks.com.ph); **dirty and UNSAVED** (Save and Undo enabled); FX_UMsDescriptionStatic selected; no dialog or picker open.
- Web Client: tab 1; not operated on in T6.
- Unloads: Web Client 1, Designer 1 (not repeated).
- Next (not authorized by T6): the one Designer Save (the native Save, once), then the close/reopen and the runtime check.

## 8. Counts (T6)

**T6 browser calls: approximately 78 (reconstructed from the call sequence; the harness controller log is authoritative for the exact figure).**

| Category | Count (reconstructed) |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Snapshots | 5 (2 untargeted; 3 targeted, one of which returned a stale-ref error) |
| Finds | ~40 |
| Clicks (single and double) | ~14 |
| Toolbox drag | 1 |
| Key presses (Tab) | 6 |
| Typed entries | 5 (Name; Top; Left; Width; Height) |
| Screenshots | 6 (`t6-01` to `t6-05`, `t6-07`) |

Recovery: one stale-ref error on a targeted snapshot (e2534) was followed by a fresh find, not a repeated action.

**Cumulative T1–T6: approximately 283 explicit browser calls** (205 at the end of T5 + ~78).

| Operation (cumulative) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged) |
| Preference changes | 0 |
| Web Client `Unload All Global Form Objects` | **1** (T2) |
| Designer `Unload All Global Form Objects` | **1** (T3) |
| Designer close / reopen (pre-change) | 1 / 1 (T3) |
| Toolbox drops | **2** (T5 Edit; T6 Static) |
| Components added | 2 (`FX_UMsDescriptionEdit`, `FX_UMsDescriptionStatic`) |
| Designer Save | **0** |
| Other component deletes / changes | 0 |
| Undo / trash / delete / close actions | 0 |
| Runtime close / reopen | 0 / 0 |
| Record edits / runtime Save | 0 / 0 |
| Check-in / undo checkout | 0 / 0 |
| Browser JavaScript, console, network | 0 |
| Direct URL / refresh / restart / session re-login | 0 / 0 / 0 / 0 |

## 9. Deviations, restrictions and observations

1. **Parallel browser actions (deviation).** In the Name edit I issued the `browser_type` (Name entry) and the `browser_press_key` (Tab) as two calls in one response, which the browser-recovery rules prohibit (browser actions must be sequential). Both returned results and the outcome was verified afterwards (Name committed as `FX_UMsDescriptionStatic`). Recorded here as a deviation; no repeat occurred.
2. **T5 browser_type audit flags.** As instructed, the typed entries are interpreted as native entry into authorized Edit/Static properties. For transparency, the `browser_type` tool reports its execution as a locator `fill` on the rendered Properties textbox. This is the permitted `browser_type` tool operating on the rendered UI; no JavaScript was authored or evaluated by the worker, and no restriction was encountered that blocked the work.
3. **Double-click expansion.** The first double-click on a Location or Size value did not expand the sub-rows; a second double-click or a single caret click did. This matches the T5 behaviour and is observed only.
4. **Caption resolution not read in the string editor.** Resolution to "Description" is established from the canvas text `Description:` only.
5. **Pane 00 grid columns not re-read** in T6 (collapsed branch).
6. **Drop-time geometry** is recorded as readback only; the explicit values were applied after.
7. **Count reconstruction.** The T6 call total is reconstructed from the call sequence in this session and is approximate (see §8). The controller log is authoritative.

## 10. Worker-written file inventory (T6)

- `evidence/EXP-067-R2/T6-static-drop-and-configuration-report.md` (created; this file).
- `evidence/EXP-067-R2/t6-01-pre-static-drop-state-dirty-edit-present-static-absent.png` (created).
- `evidence/EXP-067-R2/t6-02-post-static-drop-auto-named-canvas-and-components.png` (created).
- `evidence/EXP-067-R2/t6-03-static-layout-location-expansion-check.png` (created).
- `evidence/EXP-067-R2/t6-04-caption-dropdown-lists-fx_sdescription-before-select.png` (created).
- `evidence/EXP-067-R2/t6-05-static-configured-properties-and-canvas-caption-resolution.png` (created).
- `evidence/EXP-067-R2/t6-06-full-snapshot-components-list-readback.yml` (created; accessibility snapshot saved to the evidence directory).
- `evidence/EXP-067-R2/t6-07-final-both-components-target-area-dirty-unsaved.png` (created).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: status, §21 T6, inventory, knowledge state, next step).
- Cumulative from T1–T5 (unchanged in T6): `T1-preflight-report.md`, `T2-webclient-unload-report.md`, `T3-designer-unload-report.md`, `T4-binding-picker-readonly-report.md`, `T5-edit-drop-binding-gate-and-configuration-report.md`; `t1-01`…`t1-06`; `t2-01`…`t2-03`; `t3-01`…`t3-04`; `t4-01`, `t4-02`; `t5-01`…`t5-12`.
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:38–17:43 UTC). Not read in full; the harness and operator git review are authoritative.

## 11. Acceptance status (T6 scope)

- **AC-3 (Static):** added once (one drop); Location `10.5; 42.5`; Size `12; 1.5`; Caption `FX_sDescription` (resolves to "Description" on canvas); readbacks recorded. **Supported for configuration (observed, unsaved).**
- **AC-4 (Edit):** still configured as in T5; intact at the start and end of T6 (readbacks re-verified). **Supported (observed, unsaved).**
- **Canvas / no overlap:** supported by the canvas screenshot and the layout readbacks (observed).
- **AC-5 (Save), AC-6 (reopen), AC-7 (runtime):** pending (not attempted; Save count 0).
- **AC-2:** supported as in T5 (both unloads 1/1; binding picker; preference T1).
