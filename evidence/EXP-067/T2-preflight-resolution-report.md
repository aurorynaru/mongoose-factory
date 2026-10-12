# EXP-067 — T2 read-only preflight resolution report

Run `R-20261013-002531-dQHH`, EXP-067, cycle 1, task T2. Worker session `5f313844-ef7c-4b87-857e-e2a659f0f6c3`; task_message_id `7c5b36da-0405-4723-9bf2-e08fcfdb018a`. Date 2026-10-13 (tool timestamps 2026-10-12T16:33Z). Editing scope User. Target Form `FX_Items`.

**Outcome: BLOCKED (session expired) before any mutation. Preflight item (1) partly resolved (geometry model); items (2) and (3) incomplete.** No unload, close, reopen, Toolbox drop, property change, Save, or dialog confirmation was performed. Both browser tabs now show an in-page **"Session Expired"** modal (`Your session has expired.`, one OK button). OK was **not** clicked: clicking it would route to re-sign-in, and reauthentication, refresh and restart are out of scope. The operator needs to re-establish the session.

## 1. Session event (the blocker)

- The Designer's Pane (01) selection (a view-only row click) raised `Session Expired` (`t2-01`).
- The Web Client IDOs tab click (a tab switch) raised the same modal on the Web Client (`t2-02`).
- Both modals are in-page Mongoose dialogs, not browser-native. Left open deliberately (see §6).
- The Designer URL changed between the T1 end (`designer/default.aspx?MGForm=FX_Items`) and the T2 tab list (`designer/default.aspx`, no query). The title still reads FX_Items. Cause unresolved.

## 2. Designer: Pane 1 native properties (preflight item 1)

- Pane (01) Components row: selected (view only). The Properties tree is empty in the post-click snapshot (no Pane Layout rows exposed). This matches EXP-062-R4 T2 ("Pane (00)/(01) expose no Component properties"). The Properties header is blank. `t2-01` shows the Pane row highlighted but the Properties panel still showing FX_RefreshButton values, so that screenshot is stale or not refreshed.
- **Conclusion: Pane 1 dimensions are not exposed by the native Pane row.** The only native Pane-related values are on the Form tab: Splitter Vertical, Splitter Position `11`, Pane 0 Scroll Bars Never, Pane 1 Scroll Bars As Needed (accessibility readback at T1; `page-2026-10-12T16-28-11-048Z.yml`). Declared derivation: Pane 1 = Form width 69 − splitter 11 = **58 columns**. This is derived, not read.
- Designer Form tab, Design View Size: not re-read in T2 (view group is editable and forbidden to change; reading was not needed once the session expired).

## 3. Geometry model (calibrated from the rendered canvas)

Visible canvas measurements (`t1-01`, `t1-02`; T1 readbacks):

- Horizontal: `x = 355 + column × 8.0` px. Checks: FX_PictureStatic Location column 21.5 → x 527 (observed outline left ≈ 530); FX_RefreshButton column 5.25 → x 397 (observed ≈ 398–400); FX_UMCombobox column 23.75 → x 545 (observed ≈ 547). Width = size × 8.0 px.
- Vertical: `y = 100 + row × 18.1` px. Checks: FX_RefreshButton row 12.17 → y 320 (observed Import button top ≈ 320); FX_PictureStatic row 10.5 → y 290 (observed ≈ 290); FX_UMCombobox row 7.75 → y 240, height 2.15 × 18.1 → bottom 279 (observed ≈ 279).
- The 8.0 px scale fits all four points better than the earlier 8.1 estimate used in T1 (8.1 would put the FX_UMsDescription edge 2–3 px further right).

Clipping boundary: the canvas right edge is at **x ≈ 810 px**. FX_UMCombobox (Size 37.25 from column 23.75, so it extends to column 61.0) is visibly **clipped at x 810**. So the rendered boundary is a real clip, not just a viewport end. Using the model: **x 810 ↔ column (810 − 355) / 8.0 = 56.9.** Pane 1 at 58 columns from a left edge near x 346 gives a right edge at x 810 (346 + 58 × 8.0 = 810), which is consistent. This is a coincidence of the two readings and is not independently confirmed.

## 4. Target rectangles against the boundary

| Item | Rows (top–bottom) | Columns (left–right) | Pixels (x; y) | vs boundary x 810 / existing components |
| --- | --- | --- | --- | --- |
| FX_UMsDescriptionStatic (Location 10.5; 42.5; Size 14; 1.5) | 10.5–12.0 | 42.5–56.5 | x 695–807; y 290–317 | right edge **3 px inside** the clip; left edge 8 px right of FX_PictureStatic (right edge x 687); no overlap |
| FX_UMsDescriptionEdit (Location 12.5; 42.5; Size 14; 1.89) | 12.5–14.39 | 42.5–56.5 | x 695–807; y 326–360 | right edge **3 px inside**; bottom y 360 vs canvas bottom 480 (Form height 21 → 480); no overlap |

- Overlap: none. Nearest existing items: FX_PictureStatic (x 527–687, y 290–453) and FX_UMCombobox (bottom y 279). Clearances: 8 px horizontally to FX_PictureStatic; 11 px vertically above the target to the Unit of Measure field.
- Vertical extent: inside the Form (row 14.39 < 21).
- Horizontal extent: inside the declared Form (56.5 < 69) and inside the rendered Pane clip (x 807 < 810), **with a margin of about 3 px (≈ 0.4 column)**. The margin is within the 8.0 px / 1-px rounding uncertainty of the model.

**Result: the target area is free and inside the visible clip by a very small margin.** It is not confirmed inside a native Pane 1 boundary, because Pane 1 is not exposed. The brief says that if the effective boundary remains ambiguous after the permitted inspection, the result is unresolved and the run stops before any mutation. This stop follows that rule.

## 5. Rendered Layout capture (preflight item 2)

Not completed. The session modal blocked further Properties navigation before the Layout rows of FX_UMCombobox, FX_PictureStatic, FX_RefreshButton or the Form could be scrolled into view.

- Rendered Layout rows **not** captured in T2. `t2-03` shows the Properties top section (Name FX_RefreshButton, Caption FX_sImport, Theme Class FX_BlueButton) and the Layout group off-screen below.
- Accessibility readbacks, the supporting evidence only, are unchanged from T1: FX_UMCombobox Size `37.25; 2.15` / Location `7.75; 23.75` (Unit Char); FX_PictureStatic Size `20; 9` / Location `10.5; 21.5`; FX_RefreshButton Size `14.25; 1.89` / Location `12.1666666666667; 5.25` (re-read at the T2 start, unchanged); Form Size `69; 21`, Splitter Position 11.

## 6. Web Client runtime Forms and dirty state (preflight item 3)

- Portal tab `System Administrator` (not a Mongoose artifact; not acted on).
- Mongoose tab, two Form tabs:
  - **`FX_Items` runtime Form**: at the start of T2 it was the active tab. Accessibility `button "Save" [disabled]`; the record reads `(Object 1 of 3)` at T1 and dumbbell / 45 pound iron / 45.00 / EA. Clean. Its tab was **not** clicked in T2 (the IDOs tab was selected instead).
  - **`IDOs` (IDO Collections, `favoriteContext=IdoCollections`)**: selected by a tab-heading click (tab switch only). Read in `page-2026-10-12T16-33-45-727Z.yml` and `t2-02`: Save disabled (clean); IDO Name `FX_Items`; Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Check In and Undo Check Out enabled (still checked out to the operator); Tables sub-view: `FX_Items | fxitms | Primary Base | Inner` and `FX_UMs | fxum | Secondary | Left Outer | fxum.[FX_UM] = fxitms.[FX_UM]`. These values match EXP-066-R2 T6/T7.
- Dirty state: **none dirty.** Both Forms show Save disabled. However, both tabs are covered by the session modal, so the Save state was read under the dialog. Unresolved whether the modal affects it.
- The Web Client status bar text `Show Configuration Name On Caption (Object 1 of 1)` is the focused-field text from the dismissed preference dialog (T1). It is not a record count.
- Preference: not re-read (per the brief). The T1 reading (`Unload IDO Metadata With Forms` checked, unchanged) stands.

## 7. Browser-call counts

T2 explicit browser calls: tab list **1**; tab selects **2** (Web Client, Designer); untargeted snapshots **3** (depth 6, depth 3, depth 12); finds **1** (`Pane (01)`); clicks **2** (Pane (01) row, IDOs tab heading); screenshots **3** (`t2-01`, `t2-02`, `t2-03`; all succeeded). **T2 total: 12.** Mutation actions: **0** (no unload, close, reopen, drop, property change, Save, binding, string, Delete, check-in, undo, typed entry, key press, wheel, JavaScript, console or network inspection, navigation or refresh).

Cumulative (T1 + T2): tab lists **2**; tab selects **5**; snapshots **6** (5 untargeted, 1 targeted); finds **19**; clicks **19**; key presses **1**; mouse wheel **2**; screenshots **19 successful** and **2 timed out** (T1 `t1-01` attempts); total explicit browser calls **75** (T1 63 + T2 12). Designer Save **0**; unloads **0 / 0**; Designer close/reopen **0 / 0**; runtime close/reopen **0 / 0**; component add/delete/rename/property change **0 / 0 / 0 / 0**; preference change **0**; record edit / runtime Save **0 / 0**; check-in or undo checkout **0**.

## 8. Evidence

- `evidence/EXP-067/t2-01-pane01-selected-properties.png`: Designer. Pane (01) row highlighted. The `Session Expired` modal is centred over the canvas. Save and Undo disabled. The Properties panel still shows FX_RefreshButton values, so the Pane properties are not shown. **Proves** the session modal and the Designer's clean footer `ScopeType: User / ScopeName: anton.ramos@…`. **Does not prove** Pane 1 dimensions.
- `evidence/EXP-067/t2-02-webclient-idos-tab-readonly-save-disabled.png`: Web Client, IDOs tab active under the `Session Expired` modal. Shows FX_Items IDO, Revision Num 2, Revision Date 10/10/2026, Locked By the operator, Check In and Undo Check Out enabled, and the two Tables rows with the join. Save is dimmed. **Proves** the IDOs identity and checkout state under the modal. **Does not prove** Save-disabled independent of the modal (the icon is greyed, and the accessibility readback shows `disabled`).
- `evidence/EXP-067/t2-03-designer-session-expired-state-layout-visible.png`: Designer under the modal. Properties show FX_RefreshButton top section; Layout rows are not in the visible area. **Proves** the modal is still up and Save/Undo are disabled. **Does not prove** any Size or Location (not visible).

Accessibility snapshots (tool-written, outside the EXP-067 path): `evidence/playwright/page-2026-10-12T16-33-24-719Z.yml` (Pane click result), `evidence/playwright/page-2026-10-12T16-33-45-727Z.yml` (IDOs tab). Console logs `evidence/playwright/console-2026-10-12T16-33-18-231Z.log`, `…-232Z.log` (tool-written; not read).

## 9. Blockers, decisions and open questions

1. **Session expired in both tabs (blocker).** Operator action needed: re-establish the Mongoose session (outside this worker's scope). The worker did not click OK and did not reauthenticate, refresh or restart.
2. **Pane 1 boundary (unresolved).** Pane 1 is not exposed natively. The rendered clip at x 810 matches a derived 58-column Pane 1, and the target right edge sits about 3 px inside it. Ruling out ambiguity needs either a native Pane 1 readback or an approved, observable placement test. A placement test would be a mutation, so it is not in T2 scope.
3. **Rendered Layout captures (incomplete).** The brief's rendered Size and Location screenshots of the four items and the Form were not captured in T2. The Layout values remain accessibility-only.
4. **Designer URL lost its `MGForm` query** between T1 and T2 (cause unresolved; possibly linked to the session event).
5. **Save state under the modal.** The IDOs and FX_Items Save states were read with a modal open. Re-check after the session is restored.

Per the brief, the mutation stage (unload pair, binding gate, Static, Edit, Save, reopens, runtime check) has **not** started and must not start until the session is restored and the coordinator decides on item 2.

## 10. Worker-written file inventory (T2)

- `evidence/EXP-067/T2-preflight-resolution-report.md` (created; this file).
- `evidence/EXP-067/t2-01-pane01-selected-properties.png`
- `evidence/EXP-067/t2-02-webclient-idos-tab-readonly-save-disabled.png`
- `evidence/EXP-067/t2-03-designer-session-expired-state-layout-visible.png`
- `experiments/EXP-067-hello-world-part-4-section-8a-um-description-static-and-edit.md` (updated: T2 section and status).
- Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files from this task (listed in §8).

## 11. Knowledge state (T2)

| Finding | State |
| --- | --- |
| Session expired in both Designer and Web Client (in-page `Session Expired` modal) | observed (one session; cause unresolved) |
| Designer and runtime Forms clean (Save disabled), with modals present | observed |
| IDOs tab: clean, Revision 2, checked out to the operator, two Tables rows with the join | observed (under modal) |
| Pane (01) exposes no native Layout properties | observed |
| Pane 1 width 58 columns | derived from Form Size 69 and Splitter 11; **not** observed natively |
| Geometry model x = 355 + 8.0·col, y = 100 + 18.1·row fits four components and the clip at x 810 | observed (calibration fit; ±1 px) |
| Target right edge about 3 px inside the clip | observed (computed); boundary **unresolved** |
| Rendered Size and Location screenshots | **not** observed (incomplete) |
| Any replay or procedure status | not claimed; nothing replay_verified |
