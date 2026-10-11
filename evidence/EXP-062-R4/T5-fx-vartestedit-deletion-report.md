# EXP-062-R4 — T5 deletion of exactly FX_VarTestEdit (Components-grid trash), verified; unsaved

Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 5, task **T5**.
Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `6b0090cc-0168-43f6-9e53-d305792575e3`.
Date 2026-10-12 (tool file names carry 2026-10-11 timestamps). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Same Designer session as T1–T4. The Form was **not** closed, reopened, saved, or discarded.

## 1. Outcome

- **Prerequisites passed**: tab list before select; Designer selected; FX_Items User footer; Save enabled (dirty, as expected from T4); unsaved Caption `FX_sImport`; no dialog or challenge before the deletion.
- **Exactly one component deleted: FX_VarTestEdit.** Via the Components-grid trash button at the bottom of the Details > Components grid (tooltip `Delete`). The native confirmation read: **`Are you sure you want to delete FX_VarTestEdit and all the components it contains?`** (dialog title `Infor Mongoose Application Development Framework - FX_Items`). It names FX_VarTestEdit. OK approved once. Enter not used. The top-toolbar Delete (Delete Form Definition) was **not** clicked.
- **Component count 17 → 16.** FX_VarTestEdit absent from the tree and from a name search. Every other baseline component present.
- **Preserved**: FX_VarTest (Form-Temporary, `~LIT~()`, Persistent False, Global False); FX_Test group with both original actions unchanged (seq 0 Prompt; seq 1 Set Values); FX_RefreshButton Name `FX_RefreshButton`, Caption `FX_sImport`, Primary `FX_Test`, Binding None, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`.
- **Designer state**: FX_Items, User footer, **dirty, Save enabled, not saved**, no dialog open.
- No Save, string creation, handler, binding, Caption, Primary, Form-width, Static, close, reopen, undo, revert, runtime, or unload action.

## 2. Prerequisite gate (before mutation; read-only)

| Check | Result | Evidence |
| --- | --- | --- |
| Tab list before any select | 2 tabs: tab 0 Web Client (current at start, as at T3/T4); tab 1 Designer | tab list |
| Tab select | Tab 1 (Designer), after the list | tab select |
| Form identity / scope | Form tab title `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot; `t5-01` |
| Save state | Enabled (dirty) — as expected from T4 | snapshot (`button "Save" [ref=e16]`, not disabled); `t5-01` |
| Dialog / challenge | none (find `alertdialog`/`dialog`: none) | finds |
| Caption FX_sImport on FX_RefreshButton | Present (Caption row `FX_sImport`; canvas shows `FX_sImport`) | snapshot; `t5-01` |
| Component inventory before deletion | **17 entries**, FX_VarTestEdit appears **exactly once** | tree snapshot (`e432`) |

Prerequisites passed. Proceeded.

## 3. FX_VarTestEdit identity and properties before deletion (complete record)

Selected by a single row click on `FX_VarTestEdit Edit variables.FX_VarTest 1 0` (selection only). Properties header `FX_VarTestEdit (Edit)`; Name row `FX_VarTestEdit`.

| Property | Value | T1 baseline |
| --- | --- | --- |
| Name | `FX_VarTestEdit` | matches |
| Type | Edit | matches |
| Parent / container | Pane (01); Container blank (top-level); Tab 0 | matches (Pane 1, Tab 0) |
| Data Source | `variables.FX_VarTest` | matches |
| Caption | blank | matches (blank) |
| Binding Type / Binding | Variable / `variables.FX_VarTest` | matches |
| Size | `37.05; 2` (Unit Char) | matches |
| Location | `12.7222222222222; 30.25` (Unit Char) | matches |
| Primary | blank | matches (blank) |
| Data Change / Lose Focus / Gain Focus | blank | not in T1 (blank here) |
| From Device Master | True | not in T1 |
| Read-Only/Disable; Tab Read-Only; Hidden; No Tab Stop; Auto Complete | False each | matches (False) |
| Required | False | matches (False) |
| Tab Order | 0 | matches |
| Glue; Containment | blank | not in T1 |

Identity: name, type, pane, binding and geometry match the T1 baseline exactly. FX_VarTestEdit is the only component with Binding Variable `variables.FX_VarTest` in the tree.

## 4. Pre-deletion handler and variable readbacks (read-only)

- **Variables** (Form-scope): `InitialCommand` (Form - Persistent); `FX_VarTest` (Form - Temporary): Value `~LIT~()`; Persistent False; Global False. (Global groups not in scope.)
- **Event Handlers**: group `FX_Test` with two actions, both `Disabled: false`:
  - seq 0 Prompt — `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`
  - seq 1 Set Values — `SETVARVALUES(FX_VarTest=P(FX_Description))`
- **FX_ImportPicture**: absent (no other group in the handler list).

## 5. Deletion (the one mutation)

| Step | Action | Native response (verbatim) | Result |
| --- | --- | --- | --- |
| a | Hover the Components-grid trash button (ref `e860`, inside the Components tabpanel toolbar `e859`) | Tooltip `Delete` | identity confirmed (not the top-toolbar Delete) |
| b | Click the trash button (once) | Alert: `Are you sure you want to delete FX_VarTestEdit and all the components it contains?` (title `Infor Mongoose Application Development Framework - FX_Items`; buttons OK [default focus], Cancel) | confirmation read before response |
| c | Screenshot `t5-02` taken before answering | confirmation visible; names FX_VarTestEdit | approved |
| d | Click **OK** (once; Enter not used) | dialog closed; no further prompt (find dialog: none) | deletion accepted |

The confirmation names FX_VarTestEdit explicitly, is the component-delete prompt (not the "delete the definition for form" prompt), and the "all the components it contains" clause refers to an Edit with no children. Proceeded on that basis.

## 6. Post-deletion verification

### 6a. Component inventory (expanded tree; after Components-grid Expand)

| # | Name | Type | Pane | Tab | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | 0 | — | present |
| 2 | FormCollectionGrid | Grid | 0 | 0 | present |
| 3 | FX_ItemGridCol | GridColumn | 0 | 1 | present |
| 4 | FX_DescriptionGridCol | GridColumn | 0 | 2 | present |
| 5 | FX_CostGridCol | GridColumn | 0 | 3 | present |
| 6 | FX_UMGridCol | GridColumn | 0 | 4 | present |
| 7 | Pane (01) | Pane | 1 | — | present |
| 8 | FX_RefreshButton | PushButton | 1 | 0 | present |
| — | FX_VarTestEdit | Edit | 1 | 0 | **deleted (absent)** |
| 9 | FX_ItemStatic | Static | 1 | 5 | present |
| 10 | FX_ItemEdit | Edit | 1 | 6 | present |
| 11 | FX_DescriptionStatic | Static | 1 | 7 | present |
| 12 | FX_DescriptionEdit | Edit | 1 | 8 | present |
| 13 | FX_CostStatic | Static | 1 | 9 | present |
| 14 | FX_CostEdit | Edit | 1 | 10 | present |
| 15 | FX_UMStatic | Static | 1 | 11 | present |
| 16 | FX_UMCombobox | ComboBox | 1 | 12 | present |

Cardinality: **17 → 16** (decrease of exactly one). Baseline components removed: **none other than FX_VarTestEdit**. FX_VarTestEdit: absent (search returned no match). No new components.

### 6b. Variable and handler recheck (independent, after deletion)

- **FX_VarTest**: present; Form - Temporary; Value `~LIT~()`; Persistent False; Global False. **Unchanged.**
- **FX_Test**: present; two actions; seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (false); seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` (false). **Unchanged.**
- **FX_ImportPicture**: absent.

### 6c. FX_RefreshButton recheck

- Name `FX_RefreshButton`; Type PushButton; Caption `FX_sImport`; Binding Type None; Primary `FX_Test`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab 0. **Name, Size, Location, Binding unchanged; Caption from T4 preserved.**

### 6d. Designer state

- Footer User (anton.ramos@3mworks.com.ph). Save enabled (dirty). No dialog. Form tab `FX_Items` open. Details panel on Event Handlers (FX_Test visible with both actions).

## 7. Before / after comparison (pre-Save)

| Item | Before deletion (T4 end) | After deletion (T5) | Change |
| --- | --- | --- | --- |
| Components | 17 | 16 | −1 (FX_VarTestEdit) |
| FX_VarTestEdit | present (Edit; Binding Variable `variables.FX_VarTest`; 37.05; 2; 12.7222222222222; 30.25) | absent | deleted |
| Other 16 components | present | present | none |
| FX_VarTest | present (`~LIT~()`) | present (`~LIT~()`) | none |
| FX_Test | present, two actions | present, two actions unchanged | none |
| FX_ImportPicture | absent | absent | none |
| FX_RefreshButton Caption | `FX_sImport` | `FX_sImport` | none |
| FX_RefreshButton Primary | `FX_Test` | `FX_Test` | none |
| FX_RefreshButton Name / Size / Location / Binding | `FX_RefreshButton` / `14.25; 1.89` / `12.1666666666667; 5.25` / None | same | none |
| Save | enabled | enabled (dirty) | none (not saved) |

Canvas: the lower-right FX_VarTestEdit box (about x 600–810, y 330–367) is no longer drawn (`t5-03`). The canvas caption shows `FX_sImport` (raw ID; unchanged).

## 8. Decisive evidence per file

- `t5-01-before-deletion-fx_vartestedit-selected-components-17-entries-save-enabled.png`: FX_VarTestEdit selected (header `FX_VarTestEdit (Edit)`, Name, Caption blank, Binding row in grid); Components grid shows FX_RefreshButton, FX_VarTestEdit, FX_ItemStatic rows; Save enabled; footer User. Proves identity and dirty state before deletion. Does not show all 17 rows (partly in frame; full list in the §6a readback).
- `t5-02-components-grid-trash-confirmation-names-fx_vartestedit.png`: confirmation `Are you sure you want to delete FX_VarTestEdit and all the components it contains?` with OK (focused) and Cancel; FX_VarTestEdit still selected behind it. Proves the confirmation text and that it names FX_VarTestEdit. Does not prove the outcome (see t5-03).
- `t5-03-after-deletion-16-entries-fx_vartestedit-absent-save-enabled-unsaved.png`: the canvas without the FX_VarTestEdit box; caption `FX_sImport`; Event Handlers tab with FX_Test two actions; Save enabled; User footer; FX_RefreshButton selected with Caption `FX_sImport`. Proves the canvas change and FX_Test presence. The 16-entry count and absence are from the accessibility readbacks (§6a), not this image.

## 9. Action audit (T5; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| Browser tab list | 1 | Before the select |
| Browser tab select | 1 | Index 1 (Designer) |
| Browser clicks | 10 | FX_VarTestEdit row (selection); Variables tab; Event Handlers tab; Components tab; **trash button (deletion)**; **OK (confirmation)**; Components Expand (view); FX_RefreshButton row (selection); Variables tab (recheck); Event Handlers tab (recheck) |
| Browser hover | 1 | Trash button tooltip (no click) |
| Browser type / press_key / select_option | 0 / 0 / 0 | None |
| Browser find | 9 | Read-only |
| Explicit snapshots | 4 | Start (depth 3); after select (depth 4); Components tree before deletion; Components tree after deletion |
| Screenshots | 3 | `t5-01`, `t5-02`, `t5-03` |
| Browser navigate, reload, new tab | 0 | |
| Browser JavaScript, console read, network | 0 | Tool reported console entries; not read |
| **Components deleted** | **1** | FX_VarTestEdit only |
| Components-grid trash clicks | 1 | Confirmation named FX_VarTestEdit |
| Top-toolbar Delete (Delete Form Definition) clicks | **0** | Not clicked |
| "Delete the definition for form" dialogs | 0 | Did not appear |
| Designer Save | **0** | |
| Form close / reopen | 0 / 0 | |
| String create / edit | 0 / 0 | |
| Handler create / change | 0 / 0 | |
| Binding, Caption, Primary change | 0 | |
| Toolbox drop / Static added | 0 / 0 | |
| Form width or height change; Design View Size; Update / Revert click | 0 | |
| Unload; runtime open or import | 0 / 0 | |
| Business record, preference, checkout change | 0 | |
| Escape presses | 0 | |

**Cumulative (T1–T5), per-task figures summed:**
- Browser tab lists 5 (one per task); tab selects 5.
- Browser clicks 79 (T1 48, T2 10, T3 1, T4 10, T5 10).
- Hovers 1 (T5).
- Type actions 4 (T1 2 filter-only; T4 2 Caption and String Value).
- Tab presses 2 (T4). Escape presses 4 (T1 2; T4 2). Enter presses 0.
- Find calls 56 (T1 19, T2 12, T3 3, T4 13, T5 9). wait_for 2 (T1).
- Explicit snapshots 21 (T1 7, T2 2, T3 2, T4 6, T5 4).
- Screenshots 19 (T1 7, T2 4, T3 1, T4 4, T5 3).
- Mutations: **components deleted 1** (FX_VarTestEdit); **strings created 1** (FX_sImport, T4); Caption assignments 1 (T4); Designer Save **0**; Form close/reopen **0**; Toolbox drops **0**; Form width changes **0**; unloads **0**; runtime imports **0**; top-toolbar Delete Form Definition clicks **0**; Components-grid trash clicks **1**.

Count note: these are worker recounts from the per-task reports, not from a tool log. The harness inventory is authoritative.

## 10. Worker-written file inventory (T5)

- `evidence/EXP-062-R4/T5-fx-vartestedit-deletion-report.md` (this file; created)
- `evidence/EXP-062-R4/t5-01-before-deletion-fx_vartestedit-selected-components-17-entries-save-enabled.png` (created)
- `evidence/EXP-062-R4/t5-02-components-grid-trash-confirmation-names-fx_vartestedit.png` (created)
- `evidence/EXP-062-R4/t5-03-after-deletion-16-entries-fx_vartestedit-absent-save-enabled-unsaved.png` (created)
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (updated: T5 status and §3d)

Tool-written, not requested (under `evidence/playwright/`): accessibility snapshot and console-log files written by the browser tool on each action (timestamps 17-02 onward). The exact count was not verified; the harness inventory is authoritative.

## 11. Acceptance matrix (T5 scope)

| AC | Status | Evidence |
| --- | --- | --- |
| AC-1 | Re-confirmed before mutation: Designer on FX_Items (User footer), Save enabled (dirty, as expected), no challenge | §2; `t5-01` |
| AC-2 | Re-read before mutation: FX_VarTest; FX_Test with both actions; FX_ImportPicture absent; FX_sImport Caption on FX_RefreshButton. The FX_Picture picker and the Form-size readbacks were not repeated (they are in T1/T2) | §4; §6b |
| AC-3 | Not applicable in T5 (no Form-level change) | — |
| **AC-4** | **Met (pre-Save, in-session):** exactly one component (FX_VarTestEdit) deleted via the Components-grid trash button with a confirmation naming it; identity absent; count 17 → 16; no other baseline component removed; FX_VarTest and FX_Test remain; toolbar Delete Form Definition not used | §5–§7; `t5-02`, `t5-03` |
| AC-5 | Partial (unchanged): Caption `FX_sImport` preserved; FX_RefreshButton Name, geometry and Binding unchanged. Resolution to `Import` on canvas still requires Save and reopen | §6c |
| AC-6 to AC-13 | Not attempted (outside T5) | — |

## 12. Knowledge state

| Finding | State |
| --- | --- |
| The Components-grid trash button (tooltip `Delete`, inside the Components tabpanel toolbar) deletes the selected component after a confirmation naming it | observed (one deletion, one session) |
| Confirmation wording for a component delete: `Are you sure you want to delete FX_VarTestEdit and all the components it contains?` | observed |
| Post-deletion inventory: 16 entries; FX_VarTestEdit absent; all other baseline components present | observed (expanded tree, one session) |
| FX_VarTest and FX_Test (two actions) unchanged after the deletion | observed |
| FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`, geometry unchanged after the deletion | observed |
| Canvas no longer draws the FX_VarTestEdit box | observed (screenshot `t5-03`) |
| Deletion is in-session only (Form unsaved) | observed (Save enabled) |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 13. Open items and next permitted action

- Unresolved: the canvas caption still shows the raw ID `FX_sImport` pre-Save (resolution to `Import` untested). The string persistence after Save is unverified.
- The Form is dirty (Save enabled). Next steps (FX_PictureStatic placement at Location `10.5; 21.5`, Size `20; 9`; binding; No Colon; FX_ImportPicture; Primary; Save; close and reopen; runtime) are **not** performed in T5 and need coordinator approval.
- Next permitted action: none in T5. The Designer remains open on FX_Items (User), dirty, Save enabled, no dialog.
