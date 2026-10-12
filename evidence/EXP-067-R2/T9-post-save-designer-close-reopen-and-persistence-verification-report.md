# EXP-067-R2 — T9 report: post-save Designer close, reopen and read-only persistence verification

Run `R-20261013-011002-lSgL`, cycle 8, task T9. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `d04e1885-a78f-4ba9-b1e0-b9fa4826b1c3`. Date 2026-10-13. Editing scope User.

**Outcome: the clean FX_Items Designer Form was closed once with its native Form-tab close control (no unsaved-changes prompt) and reopened once through the Designer toolbar Open control and Select Form. The reopened Form is FX_Items, User scope (ScopeName anton.ramos@3mworks.com.ph), clean (Save and Undo disabled). The component tree holds 19 entries: the original 17 identities plus `FX_UMsDescriptionStatic` and `FX_UMsDescriptionEdit`. Both new components read back with the configured values after the reopen, so the saved configuration persisted through the close and reopen. The runtime was not opened (not authorized by T9). The Designer is left open and clean.**

## 1. Preconditions (fresh, before close)

- Tab list (before any select): 2 tabs. Tab 0 = Designer (`MGForm=FX_Items`, current); tab 1 = Web Client (`favoriteContext=UserPreferences`). No tab select was needed.
- Fresh untargeted snapshot: FX_Items; toolbar Save disabled, Regenerate Form disabled, Undo disabled, Redo disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog; Properties header `FX_UMsDescriptionStatic (Static)`.
- The Form was clean, so the close was permitted.

## 2. Native close (count 1; post-save close)

- One click on the native Form-tab close control (`closable FX_Items`, the Form tab's close button). **Not retried.**
- Prompt observed: **none**. The find `dialog` returned no match; the screenshot shows no dialog.
- Post-close: find `closable FX_Items` → no match (Form tab gone); the URL no longer carries `MGForm`; the canvas and Properties are empty.
- Evidence: `t9-01-designer-fx_items-closed-after-save-no-prompt.png` (viewed: empty canvas, empty Properties, no dialog, footer User scope). Limitation: the screenshot shows the empty workspace, not the tab strip.

## 3. Reopen (count 1; toolbar Open and Select Form)

- Designer toolbar first button (folder icon; accessibility name `Design`; `mgtoolbarbutton-1084`) clicked once. The find for `Select Form` then returned the dialog, and its tooltip reads `Open`, so the control is confirmed as the Open control.
- Select Form dialog (read from a targeted snapshot): one row, Caption `FX_Items`, Name `FX_Items`; filter `FX_Items`; Case Sensitive and Starts With unchecked. The row was clicked once and OK clicked once (dialog closed).
- Post-reopen fresh snapshot: tab heading `FX_Items` (closable); URL `MGForm=FX_Items`; toolbar Save **disabled**, Regenerate Form disabled, Undo disabled, Redo disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog.
- Form Size and Unit were not re-read (not part of the required verification; limitation).

## 4. Component tree (complete; Pane 00 and Pane 01 expanded; saved snapshot `page-2026-10-12T17-55-06-769Z.yml`)

Row count by grep = **19** (`^\s+- row "` occurrences). Rows in order:

| # | Row | Expected | Result |
| --- | --- | --- | --- |
| 1 | Pane (00) | original | present |
| 2 | FormCollectionGrid (Grid; objects; 0; 0) | original | present |
| 3–6 | FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol (GridColumns; FormCollectionGrid; 1–4) | original | present |
| 7 | Pane (01) | original | present |
| 8 | FX_PictureStatic (Static; object.FX_Picture; 1; 0) | original | present |
| 9 | FX_RefreshButton (PushButton; FX_ImportPicture; 1; 0) | original | present |
| 10–17 | FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox (Tabs 5–12) | original | present |
| 18 | FX_UMsDescriptionEdit (Edit; object.FX_UMsDescription; 1; 0) | authorized | present |
| 19 | FX_UMsDescriptionStatic (Static; 1; 0) | authorized | present |

Result: 17 original identities present; exactly the two authorized additions; no additional, missing or renamed entry in the tree identities. Limitation: identity and visible-column comparison only; not an exhaustive property diff.

## 5. New component readbacks after reopen

### FX_UMsDescriptionStatic (Static; Pane 1; Tab 0)
- Name: `FX_UMsDescriptionStatic` (Properties header `FX_UMsDescriptionStatic (Static)`; component row `FX_UMsDescriptionStatic Static 1 0`). MATCH.
- Type `Static`; Pane `1`; Tab `0` (component row). MATCH.
- Location `10.5; 42.5` (live readback). MATCH.
- Size `12; 1.5` (live readback). MATCH.
- Caption `FX_sDescription` (live readback; combobox and Properties). MATCH.
- Rendered label on canvas: `Description:` (screenshot `t9-02`). MATCH.
- Justification `Right` (drop default; unchanged).

### FX_UMsDescriptionEdit (Edit; Pane 1; Tab 0)
- Name: `FX_UMsDescriptionEdit` (Properties header `FX_UMsDescriptionEdit (Edit)`; component row). MATCH.
- Type `Edit`; Pane `1`; Tab `0` (component row). MATCH.
- Location `12.5; 42.5` (live readback). MATCH.
- Size `12; 1.89` (live readback). MATCH.
- Binding Type `Property` (live readback). MATCH.
- Binding `object.FX_UMsDescription` (live readback; also the component row Data Source). MATCH.

Screenshots: `t9-02-reopened-static-properties-caption-and-canvas.png` (viewed: Static Properties with Caption `FX_sDescription`, Justification Right; canvas "Description:" above the Edit's box; footer User scope). The Location and Size rows are below the visible area in this capture; their values come from the readbacks above. `t9-03-reopened-edit-properties-binding-and-canvas-both-components.png` (viewed: Edit Properties Type `Edit`, Name in the header, Binding Type and Binding rows below the visible area; canvas shows both components in the target area without overlap; Components rows show the Edit and Static on Pane 1, Tab 0; footer User scope; Save and Undo greyed). Limitation: the Binding rows are not visible in the screenshot; the binding value is the readback.

## 6. Non-overlap and placement

- Static (rows 10.5–12.0; columns 42.5–54.5) and Edit (rows 12.5–14.39; columns 42.5–54.5) occupy the target area; the canvas (`t9-02`, `t9-03`) shows no overlap between them or with FX_UMCombobox, FX_PictureStatic, FX_RefreshButton or the Import button.
- Readback-based clearance estimate (not a pixel measurement).

## 7. Original components (view only; live accessibility readbacks)

| Component | Location (T1 / T9) | Size (T1 / T9) |
| --- | --- | --- |
| FX_UMCombobox | 7.75; 23.75 / not re-read in T9 | 37.25; 2.15 / not re-read in T9 |
| FX_PictureStatic | 10.5; 21.5 / not re-read in T9 | 20; 9 / not re-read in T9 |
| FX_RefreshButton | 12.1666666666667; 5.25 / not re-read in T9 | 14.25; 1.89 / not re-read in T9 |

T9 did not repeat the original-geometry reads (the T7 readbacks matched T1; no Save or reopen-driven change to these components is indicated by the 19-row tree, but this is a limitation). The Form Layout was not re-read.

## 8. Counts (T9)

**T9 explicit browser calls: 33.** Breakdown:

| Category | Count |
| --- | --- |
| Tab lists | 1 |
| Tab selects | 0 |
| Snapshots | 4 (depth 3 at start; depth 2 before Open; targeted to the Select Form dialog; depth 3 after OK) |
| Finds | 16 |
| Clicks | 9 (close tab; Open toolbar; Select Form row; OK; Details Expand Panel; Components tab; Components Expand; FX_UMsDescriptionStatic row; FX_UMsDescriptionEdit row) |
| Screenshots | 3 (`t9-01`, `t9-02`, `t9-03`) |
| Typed entries / key presses / waits / hovers / wheel | 0 / 0 / 0 / 0 / 0 |

Local Grep reads of the saved snapshot files are not browser calls.

## 9. Corrected T8 audit (per the T9 instruction)

- The T8 report stated 22 calls. The correct T8 count is **17** (1 tab list; 1 snapshot; 11 finds; 2 clicks — the Components row selection of `FX_UMsDescriptionStatic` and the native Save; 2 screenshots `t8-01`, `t8-02`). The earlier figure of 22 was an overcount in the worker tally and is withdrawn.
- Cumulative T1–T8 is therefore **328** (T1–T7 311, controller-reconciled, plus 17), not 333.

## 10. Audit record, including the T6 deviations carried forward

- **T6 sequencing deviation (preserved):** the T6 Name entry (`browser_type`) and its Tab press (`browser_press_key`) were issued in one response, contrary to the one-call-at-a-time rule. Independently verified: the Name is `FX_UMsDescriptionStatic` (T6, T7, T8 and T9 readbacks).
- **T6 stale-reference error (preserved):** a targeted `browser_snapshot` on ref `e2534` returned "Ref e2534 not found". The recovery did not use the brief's fresh untargeted snapshot; it used fresh finds and a successful targeted snapshot of a fresh ref. No mutation was repeated.
- **Typed-entry flags (carried forward):** the T5 and T6 typed entries were native rendered Properties entries; no restriction violation identified.

## 11. Cumulative counts

- T1–T8 corrected: **328** (T1–T7 311 + T8 17).
- **Cumulative T1–T9: 328 + 33 = 361 explicit browser calls.**

| Operation (cumulative) | Count |
| --- | --- |
| Preference reads | 1 (T1; checked; unchanged) |
| Preference changes | 0 |
| Web Client `Unload All Global Form Objects` | **1** (T2; silent) |
| Designer `Unload All Global Form Objects` | **1** (T3; silent) |
| Designer close / reopen (pre-change) | 1 / 1 (T3) |
| Toolbox drops | **2** (T5 Edit; T6 Static) |
| Designer Save | **1** (T8; native confirmation) |
| Designer close / reopen (post-save) | **1 / 1** (T9) |
| Runtime close / reopen | 0 / 0 (not yet performed) |
| Components added | 2 (authorized) |
| Other component changes | 0 |
| Runtime record edits / runtime Save | 0 / 0 |
| Undo / trash / delete (T9) | 0 |
| Check-in / undo checkout | 0 |
| Browser JavaScript, console, network | 0 |

## 12. Limitations

1. Persistence is shown by close and reopen within the same session, and the Designer reading after reopen. It is not a database read and does not establish cross-session durability.
2. The stored `FX_sDescription` resource value was not read or modified; only the Caption reference and the rendered "Description:" text were observed.
3. The component comparison is identity and visible-column based; no exhaustive original-property diff is claimed.
4. The Form Layout and the original components' geometry were not re-read in T9.
5. The Select Form dialog was not captured in a screenshot (it was open for under a minute and closed after OK); its row was confirmed by snapshot only.
6. Location and Size rows are below the visible area in the T9 screenshots; their values are the accessibility readbacks.

## 13. Worker-written file inventory (T9)

- `evidence/EXP-067-R2/T9-post-save-designer-close-reopen-and-persistence-verification-report.md` (created; this file).
- `evidence/EXP-067-R2/t9-01-designer-fx_items-closed-after-save-no-prompt.png` (created).
- `evidence/EXP-067-R2/t9-02-reopened-static-properties-caption-and-canvas.png` (created).
- `evidence/EXP-067-R2/t9-03-reopened-edit-properties-binding-and-canvas-both-components.png` (created).
- `evidence/EXP-067-R2/T8-single-designer-save-and-immediate-verification-report.md` (updated: T8 count corrected to 17; cumulative 328).
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: status, §27 T9, §28 inventory, §25 correction, knowledge rows, next step).
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (timestamps 2026-10-12T17:54–17:56 UTC, including `page-2026-10-12T17-55-06-769Z.yml`, the T9 tree snapshot). Not exhaustively listed; the harness and operator git review are authoritative.

## 14. Final state

- **Designer:** tab 0; FX_Items open after reopen; User scope (ScopeName anton.ramos@3mworks.com.ph); **clean** (Save, Regenerate Form, Undo, Redo disabled); 19 component rows; `FX_UMsDescriptionEdit` selected (view state); no dialog or picker open.
- **Web Client:** tab 1; not operated on in T9.
- **Runtime:** not opened (not authorized by T9). Runtime close and reopen with dumbbell, eggs and guitar remain for the next authorized task.
- **Counts:** Web Client unload 1; Designer unload 1; Toolbox drops 2; Designer Saves 1; pre-change Designer close/reopen 1/1; post-save Designer close/reopen 1/1; runtime close/reopen 0/0 so far.
