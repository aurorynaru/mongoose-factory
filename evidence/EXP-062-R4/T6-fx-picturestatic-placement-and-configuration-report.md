# EXP-062-R4 — T6 add and configure exactly one FX_PictureStatic (unsaved)

Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 6, task **T6**.
Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `a0193aaf-adb6-41d6-a1ae-7100b16d7f72`.
Date 2026-10-12 (tool file names carry 2026-10-11 timestamps). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Same Designer session as T1–T5. The Form was **not** closed, reopened, saved, undone, or reverted.

## 1. Outcome

- **Exactly one Toolbox Static dropped** (one drag, from the Toolbox Static at (81, 788) to canvas (600, 380), inside the planned region). The drop created `static1_USER` with default geometry Size `75; 21.1111111111111`, Location `15.5; 30.25`, clipped at the canvas right and bottom edges (`t6-02`).
- **Geometry set explicitly before any other property**: Layout > Size Width `20`, Height `9` (committed; Size reads `20; 9`); Layout > Location Top `10.5`, Left `21.5` (committed; Location reads `10.5; 21.5`). Native sub-fields: Size → Width, Height, Lock Size; Location → Top, Left, Lock Position.
- **Renamed** to `FX_PictureStatic` (Name row committed; Components grid row `FX_PictureStatic Static 1 0`).
- **Binding**: Data Source Binding Type `Property` (committed), Binding `object.FX_Picture` (selected in the native binding list; committed). The Binding row had defaulted to `object._ItemId` after the Binding Type change; it was corrected to `object.FX_Picture` before any other property.
- **No Colon** (Miscellaneous > Specific Attributes): `False` → `True` through the native True/False combobox (committed; reads `True` after reselection).
- **Reselect readback** (after all edits): Name `FX_PictureStatic`; Type Static; Pane 1; Tab 0; Size `20; 9` (Width 20, Height 9); Location `10.5; 21.5` (Top 10.5, Left 21.5); Binding Type `Property`; Binding `object.FX_Picture`; No Colon `True`.
- **Component count: 17** (16 baseline + FX_PictureStatic). FX_PictureStatic appears exactly once. FX_VarTestEdit absent. All other baseline components present (full inventory `t6-23`).
- **Preserved**: FX_RefreshButton Name `FX_RefreshButton`, Caption `FX_sImport`, Primary `FX_Test` (not changed), Binding None, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`. FX_VarTest `~LIT~()` (Persistent False, Global False). FX_Test group with both original actions unchanged (seq 0 Prompt, seq 1 Set Values, both `false`). FX_ImportPicture absent.
- **Designer state**: FX_Items, User footer, **dirty, Save enabled, not saved**, no dialog open.
- Not done (as briefed): FX_ImportPicture, Primary change, Designer Save, close or reopen, runtime interaction, Form width or height change, metadata operations.

## 2. Gate before the drop (read-only)

| Check | Result | Evidence |
| --- | --- | --- |
| Tab list before any select | 2 tabs (tab 0 Web Client, current at start as in T3–T5; tab 1 Designer) | tab list |
| Tab select | Tab 1 (Designer), after the list | tab select |
| Form identity | `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot; `t6-01` |
| Dirty state | Save enabled (dirty) | snapshot (`button "Save"` not disabled) |
| Dialog or challenge | none | find (none) |
| Component count | **16** (Pane (00), FormCollectionGrid, four GridColumns, Pane (01), FX_RefreshButton, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox) | expanded tree |
| FX_VarTestEdit | absent | find (none) |
| FX_RefreshButton Caption | `FX_sImport` | Properties Caption row (canvas shows `FX_sImport`) |
| Planned region empty | Yes: visibly empty grid at x≈529–691, y≈290–453; canvas bounds x 258–810, y 100–480 | `t6-01` |

Prerequisites passed. The drop proceeded.

## 3. The one Toolbox drop

| Step | Action | Result |
| --- | --- | --- |
| a | Mouse drag from Toolbox Static (81, 788) to canvas (600, 380), one action | `static1_USER (Static)` created in Pane (01), Tab 0, selected; default Size `75; 21.1111111111111`, Location `15.5; 30.25` |
| b | Screenshot | `t6-02`: outline clipped at canvas right and bottom edges (oversized default); FX_RefreshButton and the input column unchanged |

Drop count: **1**. No second drop, no re-drag, no coordinate improvisation.

## 4. Geometry: Size and Location (set before any other property)

| Field (native) | Before | Edited to | Committed readback | Evidence |
| --- | --- | --- | --- | --- |
| Layout > Size > Width | 75 | 20 | 20 | `t6-05` |
| Layout > Size > Height | 21.1111111111111 | 9 | 9 (Size `20; 9`) | `t6-06` |
| Layout > Location > Top | 15.5 | 10.5 | 10.5 (Location `10.5; 30.25`) | `t6-10` |
| Layout > Location > Left | 30.25 | 21.5 | 21.5 (Location `10.5; 21.5`) | `t6-11` |
| Lock Size / Lock Position | False | unchanged | False / False | `t6-11` |

Edits used the native composite sub-rows (double-click on the value opened the active editor; typed the value; Tab committed). The Size and Location rows expanded natively.

Positioned outline (`t6-11`): x ≈ 529–691, y ≈ 290–453 on screen. The canvas bounds are x 258–810 and y 100–480. The outline is fully inside. Clearance: FX_RefreshButton right edge ≈ 513 (gap ≈ 15 px); FX_UMCombobox bottom ≈ 281 (gap ≈ 9 px); no overlap with any component.

## 5. Name, binding and No Colon

| Field | Before | Edited to | Committed readback | Evidence |
| --- | --- | --- | --- | --- |
| Name | `static1_USER` | `FX_PictureStatic` | `FX_PictureStatic` (Name row and grid) | `t6-12` |
| Data Source > Binding Type | None | Property (native list: Variable, Property, SubCollection Grid, ...) | `Property` | `t6-13`, `t6-14` |
| Data Source > Binding | (defaulted to `object._ItemId` after Binding Type) | `object.FX_Picture` (native binding list; option `object.FX_Picture` among `object.FX_Item`, `object.FX_UM`) | `object.FX_Picture` | `t6-14` |
| Miscellaneous > Specific Attributes > No Colon | False | True (True/False combobox) | `True` (reselect readback) | `t6-18`, `t6-19`, `t6-20` |

Specific Attributes rows (native, for reference): Frame False; Group False; Interpret Bound … False; No Colon True; No Interpret New… False; Solid False; Web Heading False. Expanded by double-click on the row label (single click selected only).

## 6. Reselect verification and inventory

- Reselected FX_PictureStatic from the Components grid (selection). Readback: Name `FX_PictureStatic`; Type `Static`; Pane 1; Tab 0; Size `20; 9`; Location `10.5; 21.5`; Binding Type `Property`; Binding `object.FX_Picture`; No Colon `True` (`t6-20`; accessibility snapshot `t6-21`).
- **Stale header observed**: after the rename and reselection, the Properties header and the component drop-down still display `static1_USER (Static)`. The Name row, the Components grid, and the tree all show `FX_PictureStatic`. Treated as a display lag, not a second name. Not confirmed by any further reload (none permitted).
- Full inventory (`t6-23`, after the grid was expanded): 17 entries in order: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_PictureStatic. FX_PictureStatic appears once; FX_VarTestEdit absent.
- FX_RefreshButton recheck (`t6-24` context; grep of the reselect snapshot): Caption `FX_sImport`; Primary `FX_Test`; Binding None; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`.
- FX_VarTest recheck (`t6-25`): Form - Temporary; Value `~LIT~()`; Persistent False; Global False.
- FX_Test recheck (`t6-24`): group present; seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (false); seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` (false). FX_ImportPicture absent.

## 7. Pre-Save comparison against the baseline (T1 / T2 / T5 readbacks)

| Item | Baseline / T5 | Now | Change |
| --- | --- | --- | --- |
| Components | 16 (after T5 deletion) | 17 | +1 (FX_PictureStatic) |
| FX_VarTestEdit | absent (deleted T5) | absent | none |
| FX_RefreshButton Caption / Primary / Name / Size / Location / Binding | `FX_sImport` / `FX_Test` / `FX_RefreshButton` / `14.25; 1.89` / `12.1666666666667; 5.25` / None | same | none |
| FX_PictureStatic | absent | Static, Pane 1, Tab 0, `20; 9`, `10.5; 21.5`, Property `object.FX_Picture`, No Colon True | added |
| FX_VarTest | `~LIT~()` | `~LIT~()` | none |
| FX_Test (two actions) | unchanged | unchanged | none |
| FX_ImportPicture | absent | absent | none (not created; per brief) |
| Other 15 components | present | present | none |

Only the intended change (FX_PictureStatic addition with explicit geometry, binding, and No Colon) is present in this session in addition to the earlier T4 caption/string and T5 deletion.

## 8. Decisive evidence per file

- `t6-01-pre-drop-canvas-planned-region-empty-16-components.png`: canvas before the drop; the planned region is visibly empty; caption `FX_sImport`; Save enabled; User footer; 16 components listed. Proves the pre-drop state. Does not prove the drop.
- `t6-02-after-single-toolbox-static-drop-static1-user-default-geometry.png`: the one drop; `static1_USER` outline clipped at the canvas edges; default Size/Location. Proves the oversized default and the single drop. Does not prove the committed geometry.
- `t6-05-width-20-committed-check.png`: Size `20; 21.11…`, Width 20 committed; outline narrowed. Proves the Width commit.
- `t6-06-size-20-9-committed-readback.png`: Size `20; 9`, Width 20, Height 9. Proves the Size commit.
- `t6-07`, `t6-08`, `t6-09`: Location expansion states (Location expanded on the value double-click; Top 15.5, Left 30.25).
- `t6-10-top-10-5-committed-check.png`: Location `10.5; 30.25`, Top 10.5 committed; outline moved down to y ≈ 290.
- `t6-11-location-10-5-21-5-size-20-9-committed-geometry-readback.png`: Size `20; 9`, Location `10.5; 21.5` (Top 10.5, Left 21.5); outline at x ≈ 529–691, y ≈ 290–453 inside the canvas and clear of FX_RefreshButton and the input column. Proves the geometry gate. Does not prove the saved definition.
- `t6-12-name-fx_picturestatic-committed-check.png`: grid row `FX_PictureStatic Static 1 0`; Name row `FX_PictureStatic`. The header still reads `static1_USER` (stale header; see §6).
- `t6-13-binding-type-selector-open-check.png`: Binding Type combobox active on `None`, before selecting Property.
- `t6-14-binding-property-fx-picture-committed.png`: Binding Type `Property`, Binding `object.FX_Picture`, both committed.
- `t6-15`, `t6-16`, `t6-17`: Specific Attributes row states (collapsed; then expanded by double-click with Frame False visible).
- `t6-18-no-colon-row-visible-before-change.png`: No Colon row `False` with the True/False control visible.
- `t6-19-no-colon-true-committed-check.png`: No Colon `True` committed.
- `t6-20-reselected-fx_picturestatic-readback-component-tab.png`: reselected FX_PictureStatic: Size `20; 9`, Location `10.5; 21.5`, No Colon `True`; grid row `FX_PictureStatic`. Limitation: header still reads `static1_USER`.
- `t6-21`, `t6-22`, `t6-23`, `t6-24`, `t6-25`: accessibility snapshot files (saved by request) for the inventory, the FX_RefreshButton, FX_VarTest and FX_Test readbacks.

Screenshots show the named states only. They do not prove the saved definition (no Save), the string resolution, or the runtime result.

## 9. Action audit (T6; exact counts, worker recount from the call sequence)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list | 1 | Before the first select |
| Browser tab select | 1 | Index 1 (Designer) |
| Toolbox drops | **1** | Mouse drag (81, 788) → (600, 380), one action |
| Components added | **1** | `static1_USER`, renamed to `FX_PictureStatic` |
| Components deleted | 0 | |
| Browser single clicks | 23 | Components tab (1); Components Expand (2); Properties Expand (1); Size value (1); Size label (1); Location label (1); Location arrow (1); Binding Type dropdown arrow (1); Property option (1); Binding dropdown arrow (1); object.FX_Picture option (1); Specific Attributes row (2); No Colon value (1); No Colon arrow (1); True option (1); FX_PictureStatic row (1); FX_RefreshButton row (1); Event Handlers tab (1); Variables tab (1) |
| Browser double-clicks | 9 | Size value; Width value; Height value; Location value; Top value; Left value; Name value; Binding Type value; Specific Attributes row label (each opened an editor or expanded the group) |
| Browser type actions | 5 | Width `20`; Height `9`; Top `10.5`; Left `21.5`; Name `FX_PictureStatic` |
| Browser press_key Tab | 8 | Commits: Width, Height, Top, Left, Name, Binding Type, Binding, No Colon |
| Browser press_key Escape | 0 | |
| Browser press_key Enter | 0 | |
| Browser find | 24 | Read-only (recount) |
| Browser mouse wheel | 2 | View-only scrolls (properties +300; components grid −1000) |
| Browser hover | 0 | |
| Explicit snapshots | 9 | Start (depth 3), after select (depth 2), grid-scoped, and the files saved by request (`t6-21`–`t6-25`), plus the page-level snapshots written by actions |
| Screenshots | 20 | `t6-01` … `t6-20` |
| Browser navigate, reload, new tab | 0 | |
| Browser JavaScript, console read, network | 0 | The tool reported console entries; not read |
| Designer Save | **0** | Save enabled at the end |
| Form close / reopen | 0 / 0 | |
| Top-toolbar Delete (Delete Form Definition) click | **0** | |
| Components-grid trash click | 0 | |
| FX_ImportPicture created | 0 | Not in scope for T6 |
| Primary change | 0 | |
| Form width or height change; Design View Size | 0 | |
| Unload; runtime open or import | 0 / 0 | |
| String create / edit | 0 / 0 | |
| Business record, preference, checkout change | 0 | |

Count note: click, double-click, and find figures are a worker recount from the call sequence. The Browser total is 32 clicks (23 single + 9 double), plus the one drag listed above. The narrative order in §4–§6 is authoritative for the sequence. The harness inventory is authoritative for the totals.

**Cumulative (T1–T6)**: tab lists 6; tab selects 6; components deleted 1 (T5); components added 1 (T6; the drop); Toolbox drops 1 (T6); strings created 1 (T4); Designer Save 0; Form close or reopen 0; Form width changes 0; unloads 0; runtime imports 0; top-toolbar Delete Form Definition clicks 0; Components-grid trash clicks 1 (T5).

## 10. Worker-written file inventory (T6)

- `evidence/EXP-062-R4/T6-fx-picturestatic-placement-and-configuration-report.md` (this file; created)
- PNG screenshots `evidence/EXP-062-R4/t6-01` … `t6-20` (created; 20 files; names as listed in §8)
- Accessibility snapshot files saved by request (created): `evidence/EXP-062-R4/t6-21-full-snapshot-component-inventory-after-placement.yml`, `evidence/EXP-062-R4/t6-22-full-snapshot-after-grid-scroll-top.yml`, `evidence/EXP-062-R4/t6-23-full-snapshot-after-expand-inventory.yml`, `evidence/EXP-062-R4/t6-24-event-handlers-recheck-snapshot.yml`, `evidence/EXP-062-R4/t6-25-variables-recheck-snapshot.yml`
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (updated: T6 status and §3e)

Tool-written, not requested (under `evidence/playwright/`): accessibility snapshot and console-log files written by the browser tool on each action (timestamps 17-07 onward). The exact count was not verified; the harness inventory is authoritative.

## 11. Acceptance matrix (T6 scope)

| AC | Status | Evidence |
| --- | --- | --- |
| AC-1 | Re-confirmed before the drop: Designer on FX_Items (User footer); Save enabled (dirty, as expected); no challenge | §2; `t6-01` |
| AC-2 | Not re-run (no baseline change); FX_sImport Caption and FX_Test/FX_VarTest rechecked | §6 |
| AC-3 | Not applicable in T6 (no Form-level change) | — |
| AC-4 | Carried from T5 (16 after deletion); T6 confirms the count is 17 with FX_VarTestEdit still absent | §6 |
| AC-5 | Partial (unchanged): Caption `FX_sImport`; Name and geometry unchanged. Canvas resolution to `Import` still requires Save and reopen | §6 |
| AC-6 | **Met (pre-Save, in-session):** exactly one Toolbox drop created exactly one Static; Size `20; 9` and Location `10.5; 21.5` set explicitly before other properties; fully inside the canvas; no overlap; named FX_PictureStatic; Binding Type Property; Binding object.FX_Picture; No Colon True; verified after reselection; count 17 | §3–§6; `t6-02`, `t6-11`, `t6-20` |
| AC-7 to AC-13 | Not attempted in T6 (FX_ImportPicture, Primary, Save, close/reopen, runtime are outside T6) | — |

## 12. Limitations and unresolved items

1. **Stale Properties header** (`static1_USER (Static)`) persists after the rename and reselection; the Name row and grid are correct. Not resolved; no reload permitted.
2. **Canvas caption** still shows the raw ID `FX_sImport` pre-Save (resolution to `Import` untested).
3. **Persistence** of the string, the Static, and the geometry is unverified (no Save).
4. **Location unit mapping** (Top = row, Left = column; Char units) is consistent with T3, but the canvas-to-readback mapping is validated only for the components measured in T3.
5. **Action counts** are worker recounts from the call sequence, not from a tool log.

## 13. Final Designer state and next permitted action

- FX_Items (User scope), dirty, **Save enabled, not saved**, no dialog open. Components: 17; FX_PictureStatic at `10.5; 21.5`, `20; 9`, Property `object.FX_Picture`, No Colon True. FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`. FX_VarTest and FX_Test preserved. FX_ImportPicture absent. Selected component: FX_PictureStatic (Component tab).
- Next permitted action: none in T6. Still to do, subject to coordinator approval: FX_ImportPicture (Binary Value Action, Action Type Import, component FX_PictureStatic), the FX_RefreshButton Primary reassignment to FX_ImportPicture, the pre-Save comparison, the single Designer Save, close and reopen, and the runtime check.
