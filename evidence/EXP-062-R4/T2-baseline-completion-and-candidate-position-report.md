# EXP-062-R4 — T2 read-only baseline completion, Form-size confirmation, and candidate-position assessment

Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 1, task **T2**.
Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `dc050cf1-e215-4152-95c2-af98f5cc8014`.
Date 2026-10-12 (tool file names carry 2026-10-11 timestamps). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Continues `evidence/EXP-062-R4/T1-preflight-report.md`. Same Designer session; not closed or reopened.

> **Correction (T3, 2026-10-12):** §5.3 and §5.5 below assumed that the first Location value is x. T3 showed the order is **row; column** (first value = vertical), and that the model fits five components within about 2 px. The "no derivable Location" blocker is resolved by T3: see `T3-coordinate-model-validation-report.md`. The rest of this report is unchanged.

## 1. Outcome

- **T2 completed read-only. No Form change.** No component, string, handler, binding, Caption, Primary, Form-level property, or Design View Size value was changed. Save stayed disabled throughout.
- **Pane (00) and Pane (01): no Component properties are exposed** (the Component property tree is empty when selected). Recorded as N/A, not guessed.
- **All four GridColumns read**: Size `10; 0`, Location `0; 0`, Caption, Binding, Primary (blank). FormCollectionGrid re-read: Size `11; 21`, Location `0; 0`.
- **Form width: the fallback condition holds.** The Form tab Layout Size `69; 21` (Unit Char) is the only Form size row, and its editability could not be established without an edit (not tested). The Design View Size tab's editable fields are the View group, which is a Designer view setting the brief forbids changing. No width edit was made.
- **Candidate position below the input column: NOT established.** The brief's readback formula gives an unusable position, and the Location readbacks do not correspond to canvas placement (§5). Per the brief, this is reported as a **blocker** for the Static's numeric Location. A visual candidate rectangle is recorded (§5.4) to show that space exists, but it cannot be turned into a numeric Location from the readbacks.
- FX_sImport absence (T1) is preserved; T2 did not create or assign it.

## 2. Gate and identity (T2 start)

| Check | Result | Evidence |
| --- | --- | --- |
| Browser tab list before any select | 2 tabs: tab 0 Web Client (current at start), tab 1 Designer | tab list |
| Designer selected after list | Tab 1 selected; FX_Items tab active; Components tab active; FormCollectionGrid selected | tab select; snapshot |
| Footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot |
| Save | disabled | snapshot; find readback at end |
| Dialogs / challenge | none | find `dialog|alertdialog`: none (at end) |
| Console | the tool reported 1 new error entry on the Designer tab after the first component click; console content was not read (console inspection is forbidden) | tool event lines |

## 3. Complete component baseline (17 entries)

Name, Type, parent/container, Caption, Binding, Layout Size and Location, Events/Primary. "N/A" = the native Component tab exposes no value for that row. Values from Component-tab readbacks (T1 and T2). Pane rows: the Component property tree is empty when a Pane is selected.

| # | Name | Type | Pane | Container | Tab | Caption | Binding Type / Binding | Size | Location | Events / Primary |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | 0 | N/A | N/A | N/A | N/A | N/A | N/A | N/A (no Component properties exposed) |
| 2 | FormCollectionGrid | Grid | 0 | none | 0 | blank | Primary Collection Grid / `objects` | `11; 21` | `0; 0` | Primary blank |
| 3 | FX_ItemGridCol | GridColumn | 0 | FormCollectionGrid | 1 | `FX_sItem` | Property / `object.FX_Item` | `10; 0` | `0; 0` | Primary blank |
| 4 | FX_DescriptionGridCol | GridColumn | 0 | FormCollectionGrid | 2 | `FX_sDescription` | Property / `object.FX_Description` | `10; 0` | `0; 0` | Primary blank |
| 5 | FX_CostGridCol | GridColumn | 0 | FormCollectionGrid | 3 | `FX_sCost` | Property / `object.FX_Cost` | `10; 0` | `0; 0` | Primary blank |
| 6 | FX_UMGridCol | GridColumn | 0 | FormCollectionGrid | 4 | `FX_sUM` | Property / `object.FX_UM` | `10; 0` | `0; 0` | Primary blank |
| 7 | Pane (01) | Pane | 1 | N/A | N/A | N/A | N/A | N/A | N/A | N/A (no Component properties exposed) |
| 8 | FX_ItemStatic | Static | 1 | none | 5 | `FX_sItem` | None / blank | `20; 1` | `1; 3` | blank |
| 9 | FX_ItemEdit | Edit | 1 | none | 6 | `C(FX_ItemStatic)` | Property / `object.FX_Item` | `37.05; 2` | `1; 23.75` | blank |
| 10 | FX_DescriptionStatic | Static | 1 | none | 7 | `FX_sDescription` | None / blank | `20; 1` | `3.25; 3` | blank |
| 11 | FX_DescriptionEdit | Edit | 1 | none | 8 | `C(FX_DescriptionStatic)` | Property / `object.FX_Description` | `37.05; 2` | `3.25; 23.75` | blank |
| 12 | FX_CostStatic | Static | 1 | none | 9 | `FX_sCost` | None / blank | `20; 1` | `5.5; 3` | blank |
| 13 | FX_CostEdit | Edit | 1 | none | 10 | `C(FX_CostStatic)` | Property / `object.FX_Cost` | `37.05; 2` | `5.5; 23.75` | blank |
| 14 | FX_UMStatic | Static | 1 | none | 11 | `FX_sUM` | None / blank | `20; 1` | `7.75; 3` | blank |
| 15 | FX_UMCombobox | ComboBox (EnhancedCombo) | 1 | none | 12 | `C(FX_UMStatic)` | Property / `object.FX_UM` | `37.25; 2.15` | `7.75; 23.75` | blank |
| 16 | FX_RefreshButton | PushButton | 1 | none | 0 | `FX_Refresh` (literal) | None / blank | `14.25; 1.89` | `12.1666666666667; 5.25` | Primary `FX_Test` |
| 17 | FX_VarTestEdit | Edit | 1 | none | 0 | blank | Variable / `variables.FX_VarTest` | `37.05; 2` | `12.7222222222222; 30.25` | blank |

Other details (Component tab): Unit `Char` for every Size and Location readback. Glue and Containment for FX_UMCombobox: blank (no anchoring recorded). FX_UMStatic: Type Static; From Device Master True; Justification Right; Read-Only False; Hidden False.

Not read in T2: Specific Attributes and No Colon for existing Statics (not required to finish the baseline; EXP-062-R2 T6 read FX_ItemStatic No Colon False). The four GridColumns are grid columns, not canvas components, so their `10; 0` Size and `0; 0` Location cannot be checked against the canvas (see §5).

Variables and handlers (unchanged since T1; not re-read in T2): FX_VarTest Form-Temporary, `~LIT~()`, Persistent False, Global False. FX_Test group, two disabled actions: seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`. FX_ImportPicture absent.

## 4. Form-level Layout and Design View Size (confirmation; no change)

### 4a. Properties panel, Form tab, Layout section (screenshot `t2-03`)

| Field | Value | Unit | Editability (observed, not tested) |
| --- | --- | --- | --- |
| Splitter | Vertical | enum | dropdown |
| Splitter Position | 11 | none shown | not tested |
| Pane 0 Scroll Bars | Never | enum | dropdown |
| Pane 1 Scroll Bars | As Needed | enum | dropdown |
| Form Pages | blank | dialog | Open Edit Property Dialog button |
| Unit | Char | — | no control visible |
| **Size** | **69; 21** | **Char; W; H** | **single text value; no dropdown or dialog button; no separate Width or Height field** |
| Synchronize FlexLayout attributes | True | boolean | dropdown |

Other Form tab rows (unchanged from T1): Name `FX_Items`; Caption blank; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True; Initial Command `Refresh`; Script Language Visual Basic; Close Box True; Minimize/Maximize Box True; Enable Advanced Filter False; Foreground `#000000`.

### 4b. Details > Design View Size (T1 screenshot `t1-05`; re-read in T2 from the same session)

| Group | Field | Value | Visual state (T1 screenshot) |
| --- | --- | --- | --- |
| Form | Width | 69 | grey |
| Form | Height | 21 | grey |
| View | Width | 69 | white (editable look) |
| View | Height | 21 | white (editable look) |

Toolbar: `Update`, `Revert Form Definition`. Neither clicked.

### 4c. Decision

- The Form tab's Layout Size `69; 21` is a single combined value with no dedicated Width field, and the Design View Size tab's Form group shows the same 69 / 21 as read-only. The only editable width is the View group, which the brief forbids changing.
- **Fallback condition holds.** No unambiguous editable Form width exists. **No Form-level change is made.** Form height, Design View Size, and every other Form-level property stay unchanged.

## 5. Candidate position below the input column (assessment; not applied)

### 5.1 Canvas bounds (screen CSS px; viewport 1920 × 945)

- Canvas outline: left about x 258, right about x 810, top about y 100, bottom about y 480 (red border at the right and bottom edges; from `t1-03`, `t2-02`, `t2-04`). Precision about ±3 px.
- Pane (00) grid column: x 258–345.
- Pane (01) region starts about x 358.

### 5.2 Scale estimates from component outlines and canvas

| Source | Horizontal (px per char unit) | Vertical (px per unit) |
| --- | --- | --- |
| Canvas: 552 px ÷ 69 Form width units; 380 px ÷ 21 Form height units | 8.00 | 18.1 |
| FX_UMStatic outline (`t2-02`): x 380–545, y 239–261 for Size 20; 1 | 8.25 (165 ÷ 20) | 22 (outline; includes handles?) |
| FX_RefreshButton outline (`t1-07`): x 398–515, y 318–355 for Size 14.25; 1.89 | 8.2 | 19.6 (37 ÷ 1.89) |
| FX_UMCombobox outline (`t2-04`): y 240–281 for Size 2.15 | — | 19.1 (41 ÷ 2.15) |

Horizontal scale is consistent (about 8.0–8.25 px per unit). **Vertical scale is not** (18.1 to 22 px per unit across sources), so the vertical extent of a 9-unit Static is between about 163 and 198 px.

### 5.3 Location readbacks versus canvas placement (the blocker)

Observed screen placement does not follow the Location readbacks:

- All label Statics appear at the same screen x (about 380–545), but their Location x readbacks are 1, 3.25, 5.5, 7.75 (FX_ItemStatic, FX_DescriptionStatic, FX_CostStatic, FX_UMStatic). The label rows sit at screen y about 126, 166, 207, 248, but all four Static Location y readbacks are 3.
- All input Edits appear at the same screen x (about 548). Their Location y readbacks are all 23.75, while their screen rows are the same four rows.
- FX_RefreshButton readback (12.1667; 5.25) appears at screen (398, 318). FX_VarTestEdit readback (12.7222; 30.25) appears at screen (600, 330). A larger x readback (12.72 vs 12.17) sits about 200 px further right, and a much larger y readback (30.25 vs 5.25) sits about 12 px lower. No single linear mapping fits all components.
- The brief's formula (x = 7.75 + 37.25 + 2 = 47.0; y = topmost input Location y) gives either y = 23.75 (inputs) or y = 3 (labels). With y = 23.75 and Size height 9, the bottom is y = 32.75, above the Form height of 21 units; yet the input Edit at readback y 23.75 is drawn near the top of the canvas. The readback units therefore do not match the Form-size units. With y = 3 the Static would overlap the input column. The formula cannot be applied.
- A linear fit from one Static (FX_UMStatic readback (7.75; 3) at screen (380, 239)) would place FX_ItemStatic at screen x about 324, but the canvas shows it at about 380. The fit is rejected.

**Conclusion:** the Location readbacks cannot be mapped to canvas coordinates reliably in this session. A numeric Location for FX_PictureStatic cannot be computed without guessing. Per the brief, this is reported as a blocker.

### 5.4 Visual candidate rectangle (screen px; no numeric Location implied)

- Clear of FX_RefreshButton (x 398–515, y 318–355): yes if the Static starts at x ≥ 530.
- Clear of the input column (bottom edge of FX_UMCombobox at about y 281): yes if the Static starts at y ≥ 290.
- Inside canvas (right ≤ 810, bottom ≤ 480): yes for a 20-unit width (about 160–165 px, so x 530–695) and a height of about 163–176 px at the 18.1–19.6 px/unit scales (y 290–466). At the 22 px/unit outline scale the height would be about 198 px (y 290–488), which exceeds the canvas bottom at 480.
- Overlap: FX_VarTestEdit (x 600–810, y 330–365) overlaps the candidate. The brief's sequence deletes FX_VarTestEdit before placement, so this is resolved in order, not a conflict.

Candidate rectangle (visual, to verify in the next task): **x 530–695, y 290–466 (screen px)**, valid only after FX_VarTestEdit is deleted, and only if the vertical scale is about 18–20 px per unit. The vertical scale is unresolved (§5.2), so this rectangle is not established.

### 5.5 Assessment against the brief's acceptance rule

- Numeric Location for a 20 × 9 Static fully inside the canvas with no overlap: **NOT established**. Requires an unresolved readback-to-canvas mapping and an unresolved vertical scale.
- Form width: not available (§4c). The fallback area is the only available route, and its numeric coordinates cannot be derived from readbacks.

## 6. Blockers and open questions

1. **Blocker — Location mapping.** No reliable numeric Location for FX_PictureStatic can be derived from the readbacks (§5.3). Options for the coordinator: (a) confirm a placement method that does not rely on the readback formula (for example, a single drop followed by a readback of the component's Location and its visible outline after the drop, with a documented correction if it fails the canvas test; this is one drop, so the brief's "one Toolbox drop" limit would need explicit confirmation); (b) accept a documented deviation for placement; (c) stop.
2. **Vertical scale** unresolved (18.1 to 22 px per unit) (§5.2).
3. **Form Size editability** not tested (no edit performed). The Size row has no dropdown or dialog control; whether it is editable directly is unverified.
4. **FX_sImport** absent (T1). T2 did not create it. The brief's absent branch authorizes creation with literal `Import`; this remains a coordinator decision (open from T1).
5. **Pane (00) and Pane (01)** expose no Component properties; their Layout values remain N/A.

## 7. Action audit (T2; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list | 1 | Before the first select |
| Browser tab select | 1 | Index 1 (Designer), after the list |
| Browser clicks (tree rows, tabs) | 10 | Pane (00) row; Component tab; Pane (01) row; FX_ItemGridCol row; FX_DescriptionGridCol row; FX_CostGridCol row; FX_UMGridCol row; FX_UMStatic row; Form tab; FX_UMCombobox row. All view/selection only |
| Browser type / press_key / select_option | 0 / 0 / 0 | None |
| Browser find | 12 | Read-only |
| Browser wait_for | 0 | None |
| Explicit snapshots | 2 | Start (depth 4) and after tab select (depth 3). Other page snapshot files were written by the tool on each action |
| Screenshots | 4 | `t2-01` … `t2-04` |
| Browser navigate, reload, new tab | 0 | None |
| Browser JavaScript, console read, network, tracing | 0 | The tool reported console entries; not read |
| Designer Save | **0** | Disabled throughout (last check: disabled) |
| Form close / reopen | 0 / 0 | |
| Component add / delete | 0 / 0 | |
| String create | 0 | FX_sImport absent (T1); not created |
| Handler create | 0 | |
| Binding, Caption, Primary commit | 0 | No picker opened in T2 |
| Form width or height change | 0 | Fallback condition holds |
| Design View Size change; Update or Revert Form Definition click | 0 | |
| Top-toolbar Delete (Delete Form Definition) click | **0** | |
| Components-grid trash click | 0 | |
| Unload (Web Client or Designer) | 0 | |
| Runtime open or import | 0 | |
| Business record change | 0 | |
| Preference change | 0 | |
| IDO checkout, check-in, undo | 0 | |
| Sign-out, reauthentication, restart | 0 | |

**Cumulative (T1 + T2)**: Browser tab lists 2; tab selects 2; Designer Save 0; Form close/reopen 0; Form width changes 0; component deletions 0; component additions 0; string creations 0; handler creations 0; binding, Caption, or Primary commits 0; unloads 0; runtime opens or imports 0; Delete Form Definition clicks 0; Components-grid trash clicks 0. Total browser clicks T1 48 + T2 10 = 58.

## 8. Worker-written file inventory (T2)

- `evidence/EXP-062-R4/T2-baseline-completion-and-candidate-position-report.md` (this file; created)
- PNG screenshots (created): `evidence/EXP-062-R4/t2-01-pane00-selected-component-tab-no-properties-exposed.png`, `evidence/EXP-062-R4/t2-02-fx_umstatic-selected-outline-canvas-scale-readonly.png`, `evidence/EXP-062-R4/t2-03-form-tab-layout-size-69-21-unit-char-readonly.png`, `evidence/EXP-062-R4/t2-04-fx_umcombobox-selected-location-readback-vs-canvas-readonly.png`
- Experiment record updated: `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (T2 status and section)

Tool-written, not requested (under `evidence/playwright/`): accessibility snapshot and console-log files written by the browser tool on each action (timestamps 16-48 to 16-50). The exact count was not verified; the harness inventory is authoritative.

## 9. Decisive evidence per file

- `t2-01`: Pane (00) selected with the Component tab active; the header is blank and the property area is empty. Proves that Pane (00) exposes no Component properties in this session. Does not prove anything about Pane (00)'s canvas placement.
- `t2-02`: FX_UMStatic selected (Static, Caption FX_sUM); outline at about x 380–545, y 239–261 on screen. Proves the 20-unit width scale (about 8.25 px per unit). Does not prove the Location-to-canvas mapping.
- `t2-03`: Form tab Layout section: Size `69; 21`, Unit Char, Splitter and scroll-bar values. Proves the field names and values read. Does not prove Size editability (not tested).
- `t2-04`: FX_UMCombobox selected (EnhancedCombo, Caption C(FX_UMStatic), Binding object.FX_UM, Size 37.25; 2.15, Location 7.75; 23.75) with its outline at about x 548–810, y 240–281. Proves the input row's screen position and the readback-to-canvas disagreement. Does not prove the candidate placement.

## 10. Acceptance matrix (T2 scope)

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | Supported (T1); re-confirmed in T2 (Designer on FX_Items, User footer, Save disabled) | Same session |
| AC-2 | Baseline complete for 17 entries; Pane (00) and (01) values N/A; FX_sImport absence unchanged from T1 | Not closed: FX_sImport value `Import` not readable (absent) |
| AC-3 | Form-size readbacks and Design View Size fields recorded; fallback condition holds; no width change | Size editability not tested |
| AC-4 to AC-13 | Not attempted | Blocked on the placement Location mapping (§5.3) and on FX_sImport absence |

## 11. Knowledge state

| Finding | State |
| --- | --- |
| Pane (00) and Pane (01) expose no Component properties in this session | observed (one session) |
| All four GridColumns: Size `10; 0`, Location `0; 0`, Caption FX_s* string IDs, Binding `object.FX_*`, Primary blank | observed (one session) |
| FormCollectionGrid: Size `11; 21`, Location `0; 0` | observed (one session) |
| Form Layout Size `69; 21` (Char); no separate Width field; fallback condition holds | observed (one session) |
| Horizontal scale ≈ 8.0–8.25 px per unit | observed (screen measurement, ±3 px) |
| Vertical scale unresolved (18.1–22 px per unit) | observed; unresolved |
| Location readbacks do not map to canvas placement (labels, edits, button, VarTestEdit) | observed; cause unresolved |
| Brief's readback formula yields no usable numeric Location | observed (arithmetic plus §5.3) |
| Visual candidate rectangle x 530–695, y 290–466 (valid after VarTestEdit deletion) | observed (screen measurement); numeric Location not established |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 12. Next permitted action

None in T2. The Designer remains open on FX_Items (User), clean, Save disabled, with FX_UMCombobox selected and the Component tab active (`t2-04`); no dialog open. The next step cannot be planned from readbacks alone; the coordinator must choose the placement method (§6, item 1) and confirm the string branch (T1 item) before any mutation.
