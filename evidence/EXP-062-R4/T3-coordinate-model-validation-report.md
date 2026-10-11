# EXP-062-R4 — T3 read-only coordinate model validation

Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 3, task **T3**.
Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `283f1901-1409-4a79-a14c-a3c56217406a`.
Date 2026-10-12 (tool file names carry 2026-10-11 timestamps). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Continues `T1-preflight-report.md` and `T2-baseline-completion-and-candidate-position-report.md` in this directory.

## 1. Outcome

- **Coordinate model validated for the tested components.** The brief's independent prediction for FX_DescriptionStatic (top-left x≈379, y≈159) matches the observed outline (x≈380, y≈159) within about 1 px horizontally and 0 px vertically. The mismatch is far below one row or two columns.
- **Location interpretation: first value = row (vertical), second value = column (horizontal).** The Layout readback `3.25; 3` for FX_DescriptionStatic maps to the observed top-left only under this reading. The same reading fits four other components within about 2 px (§4). This **corrects** the assumption in the T2 report (§5.3), which read the first value as x. That mismatch is the reason T2 reported a blocker; it is resolved by this check.
- **Proposed future FX_PictureStatic Location `10.5; 21.5`, Size `20; 9`:** predicted rectangle **x 529–691, y 290–453**. Fully inside the canvas (x 258–810, y 100–480). Clear of the input column (about 11 px below FX_UMCombobox) and of FX_RefreshButton (about 15 px to its right). It **overlaps FX_VarTestEdit** (x 600–810, y 330–367), so FX_VarTestEdit must be deleted first. The brief's prediction is confirmed by the model.
- **No mutation.** No component was modified, added or deleted. FX_VarTestEdit was not touched. No Toolbox drop, string, handler, binding, Caption, Primary, Form-level change, or Save.
- **Designer state at end:** FX_Items (User), clean, Save disabled, no dialog open. FX_DescriptionStatic selected on the Component tab.

## 2. Gate and identity (T3 start)

| Step | Observation | Evidence |
| --- | --- | --- |
| Tab list (before any select) | 2 tabs: tab 0 `Mongoose` (Web Client, current); tab 1 Designer `FX_Items` runtime shell | tab list |
| Selected tab state at start | **Tab 0 (Web Client, Explorer, no Form) was current**, not the Designer that T2 left current. The Web Client showed the Explorer (no Form, no Designer toolbar). No click or navigation was issued on either tab before the list. Cause not known; recorded as an observation. | snapshot (start) |
| Tab select | Tab 1 selected (after the list) | tab select result |
| Designer after select | FX_Items tab selected; Save disabled; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog | snapshot; finds at end |
| Components grid | Expanded from the T2 state; FX_DescriptionStatic row (Static, Pane 1, Tab 7) selected through the grid row (native selection) | `t3-01` |
| Visible challenge | none | — |

## 3. FX_DescriptionStatic identity and native Layout readbacks (AC-2-style; read-only)

| Field | Value | Source |
| --- | --- | --- |
| Name | `FX_DescriptionStatic` | Properties header `FX_DescriptionStatic (Static)`; Name row |
| Type | Static | Type row; grid Type column |
| Containing pane | Pane 1 | Components grid Pane column `1` (Container column blank = top-level in Pane 1) |
| Tab Order | 7 | Tab Order row |
| Caption | `FX_sDescription` (string ID) | Caption row |
| Binding Type / Binding | None / blank | Data Source row; Binding Type row `None` |
| Justification | Right | Justification row |
| **Size** | **`20; 1`** | Layout > Size row; Unit `Char` |
| **Location** | **`3.25; 3`** | Layout > Location row; Unit `Char` |

## 4. Coordinate model: predicted versus observed

### 4a. Model

- Screen origin of the Pane 1 region used for the model: x ≈ 355, y ≈ 100 (screen CSS px, viewport 1920 × 945).
- Horizontal scale: ≈ 8.1 px per column (the brief's value).
- Vertical scale: ≈ 18.1 px per row (the brief's value).
- Location read as `row; column`: top-left x = 355 + column × 8.1; top-left y = 100 + row × 18.1.

### 4b. Test on FX_DescriptionStatic (the brief's specified test)

| Quantity | Predicted | Observed (outline, `t3-01`) | Δ |
| --- | --- | --- | --- |
| Top-left x | 355 + 3 × 8.1 = **379.3** | **≈ 380** (left handle) | +0.7 px (≈ 0.1 column) |
| Top-left y | 100 + 3.25 × 18.1 = **158.8** | **≈ 159** (top edge) | +0.2 px (≈ 0.01 row) |
| Width | 20 × 8.1 = 162 | ≈ 165 (outline incl. handles) | ≈ +3 px (within outline tolerance) |
| Height | 1 × 18.1 = 18.1 | ≈ 19–20 (outline incl. handles) | ≈ +1–2 px (within outline tolerance) |

Measurement uncertainty: the outline positions were read by eye from the native-size screenshot `t3-01`. Estimated uncertainty ±2–3 px per edge. The brief's threshold (about one row, or two columns) is 18 px vertically or 16 px horizontally. The observed deltas are well inside it. **The independent check passes.** No alternate coordinate values were tried.

### 4c. Cross-check on other recorded components (from T1 and T2 screenshots; the same model, no new interaction)

| Component | Location (row; col) | Predicted TL (x, y) | Observed TL (outline) | Δ (x, y) px | Source |
| --- | --- | --- | --- | --- | --- |
| FX_UMStatic | 7.75; 3 | (379.3, 240.3) | (380, 239) | (+0.7, −1.3) | `t2-02` |
| FX_UMCombobox | 7.75; 23.75 | (547.4, 240.3) | (548, 240) | (+0.6, −0.3) | `t2-04` |
| FX_RefreshButton | 12.1667; 5.25 | (397.5, 320.2) | (398, 318) | (+0.5, −2.2) | `t1-07` |
| FX_VarTestEdit | 12.7222; 30.25 | (600.0, 330.3) | (600, ≈330) | (0, −0.3) | `t1-03` |

Largest residual: 2.2 px vertically on FX_RefreshButton (≈ 0.12 row), within the same uncertainty. All five components agree with the row;column model. The earlier x;y reading in T2 is rejected.

### 4d. Canvas-scale refinement (not a failure)

- Canvas outline: x 258–810 (552 px) and y 100–480 (380 px).
- Form Layout Size `69; 21` (Char) gives 552 ÷ 69 = **8.0 px per column** and 380 ÷ 21 = **18.1 px per row** at the canvas edges.
- The component-based estimate (8.1 px per column) fits the interior columns better (FX_UMCombobox at column 23.75: 8.1 → x 547.4, observed 548; 8.0 → x 545, a 3 px miss). The two horizontal estimates differ by about 1%, which accumulates to about 7 px at the right edge.
- Vertical scale is consistent at 18.1 px per row (canvas and components agree).
- **Unresolved:** the small horizontal scale difference (8.0 at the canvas edge versus 8.1 at component columns). It does not change any conclusion below, because every margin is greater than 10 px.

## 5. Proposed future rectangle: FX_PictureStatic at Location `10.5; 21.5`, Size `20; 9` (assessment only; nothing placed)

### 5a. Predicted rectangle

- Top-left: x = 355 + 21.5 × 8.1 = **529.2**; y = 100 + 10.5 × 18.1 = **290.1**.
- Size: 20 × 8.1 = 162 px wide; 9 × 18.1 = 163 px high.
- Rectangle: **x ≈ 529–691, y ≈ 290–453**. This matches the brief's expected x529–691, y290–453.
- At the 8.0 px-per-column edge scale: x ≈ 527–687. The conclusions below are the same.

### 5b. Canvas containment

- Canvas: x 258–810; y 100–480.
- Left margin 271 px; right margin 119 px; top margin 190 px; bottom margin 27 px.
- **Fully inside the canvas: yes.**

### 5c. Clearance from existing components (predicted rectangles)

| Component | Predicted rectangle (x, y) | Relation to proposed rectangle (529–691 × 290–453) | Result |
| --- | --- | --- | --- |
| FX_UMCombobox (input) | x 547–848 (clipped at 810), y 240–279 | Vertical gap ≈ 11 px above the proposed top (290) | **Clear** |
| FX_CostEdit / FX_DescriptionEdit / FX_ItemEdit (inputs) | y ≈ 110–240 (Location 23.75 row; 2.15 rows high) | Above the proposed top | **Clear** |
| Label Statics (`FX_*Static`) | y ≈ 159–240 | Above the proposed top | **Clear** |
| FX_RefreshButton | x 398–514, y 320–354 | Horizontal gap ≈ 15 px to the right (514 to 529) | **Clear** |
| **FX_VarTestEdit** | **x 600–810 (clipped), y 330–367** | **Overlaps the proposed rectangle at x 600–691, y 330–367** | **Overlap — must be deleted first** |
| Pane (00) grid | x 258–345 | Left of the proposed rectangle | Clear |

### 5d. Conclusion for the next step

- The proposed Location `10.5; 21.5` with Size `20; 9` would yield the rectangle x 529–691, y 290–453. It is fully inside the canvas and clear of every component **except FX_VarTestEdit**.
- **FX_VarTestEdit is the component that must be deleted first** to make this location available (Components-grid trash button, confirmation naming FX_VarTestEdit). That deletion is the brief's step 1, and it is not part of T3.
- The T2 candidate (x 530–695, y 290–466) is superseded: it used an x;y reading and a 18–22 px per row range. The model now gives the more precise rectangle above.

## 6. Limits and unresolved items

1. **Two-point scale check.** Only four independent components and one test component were used. The model fits all of them within about 2 px, but more distant components were not tested beyond the canvas edges.
2. **Horizontal scale** ≈ 8.0 (canvas edge) versus ≈ 8.1 (component columns). About 1% disagreement; does not change any margin here.
3. **Outline measurement** is by eye from the native-size screenshot; ±2–3 px per edge.
4. **Location unit** is recorded as Char in the readbacks; the model assumes the unit maps to the pixel scales above. That assumption is validated only for these components.
5. **Location order** (row; column): inferred from the test above. The brief's own text for the proposed Location (`10.5; 21.5`) uses the same order.
6. **Tab selection at start** (Web Client current, not the Designer) is unexplained. No action on either tab preceded the list.

## 7. Action audit (T3; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list | 1 | Before the first select |
| Browser tab select | 1 | Index 1 (Designer), after the list |
| Browser snapshot (explicit) | 2 | Start (Web Client, depth 3); after select (Designer, depth 3) |
| Browser find | 3 | FX_DescriptionStatic (row ref); Save (disabled check); dialog regex (none) |
| Browser click | 1 | FX_DescriptionStatic tree row (native selection; view/selection only) |
| Browser screenshot | 1 | `t3-01` |
| Browser type, press_key, select_option, drag, mouse | 0 | None |
| Browser navigate, reload, new tab | 0 | None |
| Browser JavaScript, console read, network, tracing | 0 | The tool reported console entries on the Designer; not read |
| Designer Save | **0** | Disabled (checked before and after) |
| Form close / reopen | 0 / 0 | |
| Component add / delete | 0 / 0 | |
| Toolbox drop | 0 | |
| String create | 0 | |
| Handler create | 0 | |
| Binding, Caption, Primary commit | 0 | |
| Form width or height change | 0 | |
| Design View Size change; Update or Revert click | 0 | |
| Top-toolbar Delete (Delete Form Definition) click | **0** | |
| Components-grid trash click | 0 | |
| Unload (Web Client or Designer) | 0 | |
| Runtime open or import | 0 | |
| Business record, preference, checkout change | 0 | |

**Cumulative (T1 + T2 + T3):** browser tab lists 3; tab selects 3; clicks 59 (T1 48, T2 10, T3 1); type 2 (T1, filter only); press_key Escape 2 (T1); find 34 (T1 19, T2 12, T3 3); wait_for 2 (T1); explicit snapshots 11 (T1 7, T2 2, T3 2); screenshots 12 (T1 7, T2 4, T3 1). Mutations: Designer Save 0; Form close 0; Form reopen 0; component add/delete 0; string create 0; handler create 0; binding, Caption, Primary commit 0; Form width change 0; unload 0; runtime open or import 0; Delete Form Definition click 0; trash click 0.

## 8. Worker-written file inventory (T3)

- `evidence/EXP-062-R4/T3-coordinate-model-validation-report.md` (this file; created)
- `evidence/EXP-062-R4/t3-01-fx_descriptionstatic-selected-layout-3-25-3-outline.png` (created)
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (updated: T3 status and section)

Tool-written, not requested (under `evidence/playwright/`): accessibility snapshot and console-log files written by the browser tool on each action (timestamps 16-55 onward). The exact count was not verified; the harness inventory is authoritative.

## 9. Decisive evidence (`t3-01`)

- Visible: the Designer on FX_Items; FX_DescriptionStatic selected; Properties header `FX_DescriptionStatic (Static)`; Name, Caption `FX_sDescription`, Justification Right; Components grid row `FX_DescriptionStatic Static 1 7` highlighted; footer User / anton.ramos; Save greyed in the toolbar.
- Measured: the selection outline's top-left at about (380, 159); right edge about 545; bottom about 178.
- Proves: identity, selection, and the outline used for the model test.
- Does not prove: the exact pixel edges (±2–3 px), the Location-to-canvas mapping for components not measured here, or that the saved definition matches (no Save).

## 10. Acceptance matrix (T3 scope)

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | Re-confirmed in T3: Designer on FX_Items (User footer), Save disabled, no challenge, after tab select | Same session; the Web Client tab had been current at the start |
| AC-2 | Not extended: FX_DescriptionStatic identity and Layout readbacks recorded; the rest of the baseline unchanged from T1/T2 | Not a mutation step |
| AC-3 | Model validation recorded; no Form-level change | Fallback still applies |
| AC-4 to AC-13 | Not attempted | Outside T3 |

## 11. Knowledge state

| Finding | State |
| --- | --- |
| Location readback order is row; column (vertical first) | observed (five components, one session; by outline measurement) |
| Pane 1 model origin ≈ (355, 100); horizontal ≈ 8.1 px per column; vertical ≈ 18.1 px per row | observed (one session; horizontal 8.0 at canvas edge) |
| Brief's prediction for FX_DescriptionStatic (379, 159) confirmed within ≈1 px | observed (one test, one session) |
| Proposed Location 10.5; 21.5 with Size 20; 9 → x 529–691, y 290–453, fully inside the canvas, clear except FX_VarTestEdit | observed as a calculation from the validated model; not placed |
| FX_VarTestEdit must be deleted before this location is available | observed (overlap from the model) |
| T2 blocker (no derivable Location) | **resolved by this model** (T2 had assumed x;y); recorded as a correction |
| Web Client tab current at the start of T3 | observed; cause unresolved |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 12. Next permitted action

None in T3. The Designer remains open on FX_Items (User), clean, Save disabled, with FX_DescriptionStatic selected. The next step (deleting FX_VarTestEdit, then the Toolbox drop and placement at Location `10.5; 21.5`) requires the coordinator's go-ahead and remains subject to the string branch decision (FX_sImport absent).
