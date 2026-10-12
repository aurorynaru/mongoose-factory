# EXP-067-R2 — T7 report: read-only pre-save verification and audit reconciliation

Run `R-20261013-011002-lSgL`, cycle 6, task T7. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `073c2a8f-2d2e-476d-a93e-a316a188bb41`. Date 2026-10-13. Editing scope User.

**Outcome: read-only verification passed. The Designer FX_Items Form is open, User scope (ScopeName anton.ramos@3mworks.com.ph), dirty and UNSAVED (Save enabled), with no dialog open. The component tree holds exactly the original 17 entries plus the two authorized components (19 rows). The two new components match the T5/T6 configuration. The re-read geometry of the original components FX_UMCombobox, FX_PictureStatic and FX_RefreshButton matches the T1 baseline. No unexpected change was found. No Save, Undo, close, reopen, unload, drop or property change was performed.** The Designer is left dirty and ready for the separately authorized single Save.

## 1. Preconditions

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, current); tab 1 = Web Client. No tab select was needed.
- Fresh untargeted snapshot: tab heading `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **Save enabled** (no disabled attribute), Undo enabled, Regenerate Form enabled; Redo disabled; no dialog; Properties header `FX_UMsDescriptionStatic (Static)`.

## 2. Component tree (complete; expanded Pane 00 and Pane 01)

Read from the saved accessibility snapshot `evidence/playwright/page-2026-10-12T17-46-39-214Z.yml` (grep of tree rows; count = 19).

| # | Row (Name, Type, Data Source, Pane, Container, Tab) | Matches T1 baseline? |
| --- | --- | --- |
| 1 | Pane (00) | yes |
| 2 | FormCollectionGrid (Grid; objects; Pane 0; Tab 0) | yes |
| 3 | FX_ItemGridCol (GridColumn; object.FX_Item; 0; FormCollectionGrid; 1) | yes |
| 4 | FX_DescriptionGridCol (GridColumn; object.FX_Description; 0; FormCollectionGrid; 2) | yes |
| 5 | FX_CostGridCol (GridColumn; object.FX_Cost; 0; FormCollectionGrid; 3) | yes |
| 6 | FX_UMGridCol (GridColumn; object.FX_UM; 0; FormCollectionGrid; 4) | yes |
| 7 | Pane (01) | yes |
| 8 | FX_PictureStatic (Static; object.FX_Picture; Pane 1; Tab 0) | yes |
| 9 | FX_RefreshButton (PushButton; event FX_ImportPicture; Pane 1; Tab 0) | yes |
| 10 | FX_ItemStatic (Static; Tab 5) | yes |
| 11 | FX_ItemEdit (Edit; object.FX_Item; Tab 6) | yes |
| 12 | FX_DescriptionStatic (Static; Tab 7) | yes |
| 13 | FX_DescriptionEdit (Edit; object.FX_Description; Tab 8) | yes |
| 14 | FX_CostStatic (Static; Tab 9) | yes |
| 15 | FX_CostEdit (Edit; object.FX_Cost; Tab 10) | yes |
| 16 | FX_UMStatic (Static; Tab 11) | yes |
| 17 | FX_UMCombobox (ComboBox; object.FX_UM; Tab 12) | yes |
| 18 | **FX_UMsDescriptionEdit** (Edit; object.FX_UMsDescription; Pane 1; Tab 0) | authorized addition (T5) |
| 19 | **FX_UMsDescriptionStatic** (Static; Pane 1; Tab 0) | authorized addition (T6) |

Result: 17 original entries present with the same names, types, data sources (where T1 recorded one), panes and tabs; exactly two additions. No unapproved addition, deletion or rename observed.

Limitation: this is an identity and visible-column comparison, **not an exhaustive property diff**. Original property values other than the Layout geometry of three components and the Pane 00 grid column identity were not re-read in T7.

## 3. New component readbacks (live Properties; view-only selection)

### FX_UMsDescriptionStatic (Static; Pane 1; Tab 0)
- Name: `FX_UMsDescriptionStatic` (Properties header `FX_UMsDescriptionStatic (Static)`; component row).
- Type: `Static`. Pane 1. Tab 0.
- Location: `10.5; 42.5` (expected `10.5; 42.5`). MATCH.
- Size: `12; 1.5` (expected `12; 1.5`). MATCH.
- Caption: `FX_sDescription` (expected `FX_sDescription`). MATCH. Rendered canvas text `Description:` (`t7-01`).
- Justification: `Right` (drop default; not edited in T5–T6).

### FX_UMsDescriptionEdit (Edit; Pane 1; Tab 0)
- Name: `FX_UMsDescriptionEdit` (Properties header `FX_UMsDescriptionEdit (Edit)`; component row).
- Type: `Edit`. Pane 1. Tab 0.
- Location: `12.5; 42.5` (expected `12.5; 42.5`). MATCH.
- Size: `12; 1.89` (expected `12; 1.89`). MATCH.
- Binding Type: `Property` (expected `Property`). MATCH.
- Binding: `object.FX_UMsDescription` (expected `object.FX_UMsDescription`). MATCH; also the Components row Data Source `object.FX_UMsDescription`.
- Caption: blank (not required by the brief).

Screenshots: `t7-01-static-properties-and-canvas-pre-save-readback.png` (Static Properties: Caption `FX_sDescription`, Justification Right; canvas "Description:" above the Edit's box, no overlap); `t7-02-edit-properties-and-canvas-pre-save-readback.png` (Edit Properties: Type Edit, Name truncated in the header; canvas Edit box below the Static). Limitation: the Location and Size rows are below the visible area of both captures; their values are the accessibility readbacks above.

## 4. Geometry of original components (live accessibility readbacks; view-only selection)

| Component | Location (T1) | Location (T7) | Size (T1) | Size (T7) |
| --- | --- | --- | --- | --- |
| FX_UMCombobox | 7.75; 23.75 | 7.75; 23.75 | 37.25; 2.15 | 37.25; 2.15 |
| FX_PictureStatic | 10.5; 21.5 | 10.5; 21.5 | 20; 9 | 20; 9 |
| FX_RefreshButton | 12.1666666666667; 5.25 | 12.1666666666667; 5.25 | 14.25; 1.89 | 14.25; 1.89 |

All match. The Form Layout (Size `69; 21`, Unit `Char`) was **not** re-read in T7 (not required; recorded as a limitation).

## 5. Overlap and placement

- Target rectangles: Static rows 10.5–12.0, columns 42.5–54.5; Edit rows 12.5–14.39, columns 42.5–54.5. Vertical gap between them about 0.5 row (Static bottom 12.0; Edit top 12.5).
- Nearest existing components: FX_PictureStatic (columns 21.5–41.5; 1 column to the left of the target); FX_UMCombobox (rows 7.75–9.90; above the target); FX_RefreshButton (columns 5.25–19.5; no column overlap).
- Canvas (`t7-01`, `t7-02`): the two new components sit in the target area, right of the picture box and below the Unit of Measure field, with no visible overlap with each other or existing components (observed; estimate of clearances from readbacks, not a pixel measurement).

## 6. Anomalies and uncertainty

- **No unexpected change found** in the components identified.
- **Not verified in T7:** original component property values beyond geometry; original event bindings beyond the FX_RefreshButton event shown in its row; the Form Layout; the Pane 00 GridColumn geometry; the stored string value of `FX_sDescription` (only the rendered text `Description:` is observed).
- **Session:** valid throughout; no expiry, no re-login.

## 7. Reconciliation of prior audits

- **T6 browser audit:** the controller's authoritative count is **75 calls** (26 actions plus 49 reads). The worker's approximate figure of ~78 in the T6 report is superseded by 75. Cumulative T1–T6 = **280** (controller).
- **T6 stale-ref error:** one `browser_snapshot` with a targeted ref (`e2534`) returned "Ref e2534 not found". The recovery did **not** follow the brief's rule (one fresh untargeted snapshot); instead I used fresh `browser_find` calls and a successful targeted snapshot of a fresh ref (`e2563`). After recovery, the Location and Size values were re-read (`10.5; 42.5`; `12; 1.5`). No mutation was repeated because of the error.
- **T6 Name typing and Tab sequencing deviation:** the Name entry (`browser_type`) and its Tab (`browser_press_key`) were issued in one response, which breaks the one-call-at-a-time rule. Independent verification: the Name readback is `FX_UMsDescriptionStatic` (Properties header; Components row `FX_UMsDescriptionStatic Static 1 0`; find results in T6 and T7). No repeat occurred.
- **Typed-entry flags (the coordinator's "five browser_type flags"):** the typed entries in T5 were Name, Top, Left, Width and Height on the Edit, and in T6 Name, Top, Left, Width and Height on the Static. Each went into a native rendered Properties editor (`browser_type` on the rendered textbox; the tool reports its execution as a Playwright `fill` on that textbox). No worker-authored script, JavaScript, console, network or internal-store action was used. No restriction violation was identified, so these are recorded as native Properties entry.
- **Parallel-call check, T7:** no parallel browser actions were issued in T7 (reads were sent alone; tabs list and snapshot were read-only and sent together as read-only calls).

## 8. Counts (T7)

**T7 explicit browser calls: 31.** Breakdown:

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Snapshots | 1 (untargeted, depth 4) |
| Finds | 20 |
| Clicks | 7 (Components Expand 1; component tree rows 6: Edit, FX_UMCombobox, FX_PictureStatic, FX_RefreshButton, FX_UMsDescriptionStatic, FX_UMsDescriptionEdit) |
| Screenshots | 2 (`t7-01`, `t7-02`) |
| Typed entries / key presses / waits / hovers / wheel | 0 / 0 / 0 / 0 / 0 |

Clicks are view-state selections and one Components Expand; none changed a property. Grep and Read calls on the saved snapshot files are local reads, not browser calls.

**Cumulative T1–T7 = 280 (T1–T6, controller) + 31 (T7) = 311 explicit browser calls.**

| Operation (cumulative) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged) |
| Preference changes | 0 |
| Web Client `Unload All Global Form Objects` | **1** (T2) |
| Designer `Unload All Global Form Objects` | **1** (T3) |
| Designer close / reopen (pre-change) | 1 / 1 (T3) |
| Toolbox drops | **2** (T5 Edit; T6 Static) |
| Designer Save | **0** |
| Components added | 2 (authorized) |
| Other component changes (T7) | 0 |
| Runtime record edits / runtime Save | 0 / 0 |
| Undo / trash / delete / close (T7) | 0 |
| Check-in / undo checkout | 0 |
| Browser JavaScript, console, network | 0 |

## 9. Final state

- **Designer:** tab 0; FX_Items open; User scope (ScopeName anton.ramos@3mworks.com.ph); **dirty and UNSAVED** (Save enabled; Undo enabled); 19 component rows (17 original + 2 authorized); `FX_UMsDescriptionStatic` selected (view state); no dialog or picker open.
- **Web Client:** tab 1; not operated on in T7.
- **Readiness:** the Form is consistent with the T5/T6 configuration and ready for the separately authorized single Designer Save. Nothing in T7 requires an operator stop.
- **Not performed (by instruction):** Save, Undo, close, reopen, unload, drops, property edits, runtime checks, Web Client operations.

## 10. Worker-written file inventory (T7)

- `evidence/EXP-067-R2/T7-pre-save-verification-and-audit-reconciliation-report.md` (created; this file).
- `evidence/EXP-067-R2/t7-01-static-properties-and-canvas-pre-save-readback.png` (created).
- `evidence/EXP-067-R2/t7-02-edit-properties-and-canvas-pre-save-readback.png` (created).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: status, §23 T7, knowledge rows, §24 inventory, next step).
- Cumulative from T1–T6 (unchanged in T7): reports `T1`–`T6`; screenshots `t1-01`…`t1-06`, `t2-01`…`t2-03`, `t3-01`…`t3-04`, `t4-01`, `t4-02`, `t5-01`…`t5-12`, `t6-01`…`t6-05`, `t6-07`; snapshot `t6-06-full-snapshot-components-list-readback.yml`.
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:46–17:48 UTC, including `page-2026-10-12T17-46-39-214Z.yml`, which holds the T7 component tree). Not exhaustively listed; the harness and operator git review are authoritative.
