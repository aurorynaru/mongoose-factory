# EXP-062-R4 — T4 create FX_sImport (literal Import) and assign it as the FX_RefreshButton Caption (unsaved)

Run `R-20261012-003624-ROx0`, experiment EXP-062-R4, cycle 4, task **T4**.
Worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`; task_message_id `faee8091-2ff1-4b86-9da1-e8eb94575c16`.
Date 2026-10-12 (tool file names carry 2026-10-11 timestamps). Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
Continues T1, T2 and T3 reports in this directory. Same Designer session; the Form was **not** closed, reopened, saved, or discarded.

## 1. Outcome

- **String FX_sImport created once** (ID exact, `String FX_sImport does not exist. Create it?` → Yes, once). String Value committed as **`Import`**. The String dialog's prefilled value `FX_s Import` was replaced before OK.
- **FX_RefreshButton Caption assigned `FX_sImport`** through the Caption property (typed into the Caption combobox, committed with Tab).
- **Readback:** the reopened String editor shows Name `FX_sImport` and String Value `Import` (read-only; closed with OK, no change). The Caption dropdown lists `FX_sImport` between `FX_sDescription` and `FX_sItem`.
- **FX_RefreshButton unchanged** apart from Caption: Name `FX_RefreshButton`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Primary `FX_Test`; Binding None.
- **Canvas caption before Save: the raw ID `FX_sImport`** (not `Import`). Expected per EXP-045; resolution to `Import` is checked only after Save and reopen (later task).
- **Save: NOT invoked.** The Form is dirty (Save and Undo enabled). FX_VarTestEdit, all other components, FX_VarTest, the FX_Test group, and every other property are unchanged.
- No Form width, Primary, handler, Static, deletion, or Save.

## 2. Gate before mutation (AC-1 re-check; read-only)

| Check | Result | Evidence |
| --- | --- | --- |
| Tab list before any select | 2 tabs: tab 0 Web Client (current at start, as at T3 start); tab 1 Designer | tab list |
| Tab select | Tab 1 (Designer), after the list | tab select |
| Form identity | `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot |
| Initial state | Save disabled; Undo disabled; no dialog or challenge | snapshot; find dialog (none) |
| FX_RefreshButton before change | Name `FX_RefreshButton`; Caption `FX_Refresh`; Primary `FX_Test`; Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Binding None | `t4-01` context; snapshot readback |
| FX_sImport absent (re-check) | Caption dropdown (read-only) lists `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM`; find `FX_sImport` → no match. Dismissed with Escape; Caption still `FX_Refresh` | find readbacks |

The saved definition matches the T1/T2 baseline (17 components; FX_RefreshButton Caption and Primary as recorded). Gate passed.

## 3. Actions and native responses (in order)

| # | Action | Native response (verbatim where text was read) | Result |
| --- | --- | --- | --- |
| 1 | Click FX_RefreshButton (Components grid row) | Properties header `FX_RefreshButton (Button)` | view / selection |
| 2 | Click Caption dropdown arrow (read-only) | List opened | list read |
| 3 | Escape | — | list dismissed; Caption `FX_Refresh` |
| 4 | Click Caption value `FX_Refresh` | Combobox entered edit mode (`combobox [active]: FX_Refresh`) | edit mode |
| 5 | Type `FX_sImport` into the Caption combobox | Combobox reads `FX_sImport` (active) | typed, not committed |
| 6 | Tab | Caption committed: Properties Caption `FX_sImport`; canvas button now displays `FX_sImport` (raw ID); Save and Undo enabled | committed |
| 7 | Click Caption ellipsis (Open Edit Property Dialog) | Alert: **`String FX_sImport does not exist. Create it?`** (buttons Yes [default focus], No) | prompt read |
| 8 | Click **Yes** (once; Enter not used) | Prompt closed; String dialog opened: Name `FX_sImport`; String Value `FX_s Import` (prefill); Description blank; Version `User version for user anton.ramos@3mworks.com.ph` | string created in the Designer |
| 9 | Click the String Value cell | Active textbox (String Value) shows `FX_s Import` | editor active |
| 10 | Type `Import` into the active String Value textbox | Textbox reads `Import` (active) | typed, not committed |
| 11 | Tab | String Value committed: `Import` (String dialog text row reads `String Value`) | committed |
| 12 | Click OK (String dialog, once) | Dialog closed; no further prompt (`dialog` find: none) | string saved to the Designer session |
| 13 | Click Caption dropdown arrow (read-only verification) | List includes `FX_sImport` between `FX_sDescription` and `FX_sItem` | verified |
| 14 | Escape | List dismissed; Caption still `FX_sImport` | no commit |
| 15 | Click Caption ellipsis (read-only readback of the existing string) | String dialog for `FX_sImport`: Name `FX_sImport`; String Value `Import` (no create prompt) | readback |
| 16 | Click OK (read-only close; no edit) | Dialog closed; no prompt | no change |

Escape presses: 2 (steps 3, 14). Tab presses: 2 (steps 6, 11). No Enter pressed.

## 4. Readbacks after the change (AC-5 partial; pre-Save)

| Item | Readback | Source |
| --- | --- | --- |
| FX_RefreshButton Name | `FX_RefreshButton` | Properties Name row (snapshot after commit) |
| FX_RefreshButton Caption | `FX_sImport` | Caption row; canvas button text |
| FX_RefreshButton Primary | `FX_Test` (unchanged) | Primary row |
| FX_RefreshButton Size / Location | `14.25; 1.89` / `12.1666666666667; 5.25` (unchanged) | Layout rows |
| FX_RefreshButton Binding Type | None (unchanged) | Binding Type row |
| String FX_sImport | Name `FX_sImport`; String Value `Import`; Version User (read-only readback in the reopened editor) | String dialog readback (step 15) |
| Caption dropdown | `FX_sImport` listed | step 13 |
| Canvas caption display | `FX_sImport` (raw ID) before Save | `t4-04` |

## 5. Mutation audit (T4; exact counts)

| Category | Count | Notes |
| --- | --- | --- |
| **String created** | **1** | `FX_sImport`, literal `Import`, created once through Yes at the exact-ID prompt |
| String creation prompts declined | 0 | No `FX_Refresh` prompt was opened |
| String value committed on the new string | 1 | Prefill `FX_s Import` replaced by `Import` before OK (the string is the one created in this step; no existing string was edited) |
| Existing string edited or overwritten | 0 | |
| Caption assignments | 1 | FX_RefreshButton Caption `FX_Refresh` → `FX_sImport` |
| Caption dropdown reads (read-only) | 2 | steps 2 and 13 |
| Primary change | 0 | |
| Handler create / change | 0 | |
| Binding change | 0 | |
| Component add / delete / geometry change | 0 / 0 / 0 | No Toolbox drop; FX_VarTestEdit not deleted |
| Form width or height change; Design View Size change | 0 | |
| Designer Save | **0** | |
| Form close / reopen | 0 / 0 | |
| Top-toolbar Delete Form Definition click | **0** | |
| Components-grid trash click | 0 | |
| Unload (Web Client or Designer) | 0 | |
| Runtime open or import | 0 | |
| Business record, preference, checkout change | 0 | |
| Browser tab lists | 1 | Before the select |
| Browser tab selects | 1 | Index 1 (Designer), after the list |
| Browser clicks | 10 | FX_RefreshButton row (step 1); Caption arrow (step 2); Caption value (step 4); ellipsis (step 7); Yes (step 8); String Value cell (step 9); OK (step 12); Caption arrow (step 13); ellipsis (step 15); OK (step 16) |
| Browser type actions | 2 | Step 5 (FX_sImport, Caption combobox); step 10 (Import, String Value textbox) |
| Browser press_key Tab | 2 | Steps 6, 11 |
| Browser press_key Escape | 2 | Steps 3, 14 |
| Browser find | 13 | Read-only checks (absence, dialog, Caption, combobox, OK, Save) |
| Explicit snapshots | 6 | Start (depth 3); post-select (full); post-Tab (depth 3); untargeted (depth 2); Properties panel (ref); Caption row (ref) |
| Screenshots | 4 | `t4-01` … `t4-04` |
| Browser navigate, reload, new tab | 0 | |
| Browser JavaScript, console read, network | 0 | The tool reported console entries; not read |

Note on the click list: the 10 clicks are the row, two Caption arrows, the Caption value, the ellipsis twice, Yes, the String Value cell, and OK twice. Step numbers above are the narrative order.

**Cumulative (T1 + T2 + T3 + T4):** browser tab lists 4 (one per task); tab selects 4; browser clicks 69 (T1 48, T2 10, T3 1, T4 10). Strings created cumulatively 1 (T4). Designer Save **0**. Form close/reopen **0**. Component deletions **0**. Toolbox drops **0**. Unloads **0**. Runtime imports **0**. Delete Form Definition clicks **0**. Components-grid trash clicks **0**.

## 6. Decisive evidence per file

- `t4-01-caption-committed-fx_simport-before-ellipsis-state.png`: FX_RefreshButton selected; Caption `FX_sImport`; canvas button `FX_sImport` (raw ID); Save enabled (dirty); FX_VarTestEdit present in the grid. Proves the Caption commit and the dirty state. Does not prove the string value or Save.
- `t4-02-string-editor-opened-after-yes-prefill-fx-s-import-before-value-edit.png`: String dialog for `FX_sImport`; String Value prefilled `FX_s Import`; Version User. Proves the string was created in the Designer session with the exact ID; the prefill is visible and is replaced in step 10. Does not prove the committed value.
- `t4-03-string-value-import-committed-before-ok.png`: String Value `Import` committed; Name `FX_sImport`. Proves the value entered before OK. Does not prove the persisted value (no Save).
- `t4-04-final-state-caption-fx_simport-string-import-canvas-raw-id-save-enabled-unsaved.png`: final state; Caption `FX_sImport`; canvas raw ID; Save and Undo enabled; FX_RefreshButton selected; Components grid shows FX_RefreshButton (Pane 1, Tab 0, Event `FX_Test`) and FX_VarTestEdit (Pane 1, Tab 0). Proves the pre-Save state and that FX_VarTestEdit is not yet deleted. Does not prove the Save result.

Screenshot note: `t4-04` was read by the worker. Its FX_VarTestEdit row is visible in the grid (`FX_VarTestEdit Edit variables.FX_VarTest`). The string readback is from the accessibility snapshot, not the screenshot.

## 7. Limitations and unresolved items

1. **Canvas caption** still shows the raw ID `FX_sImport` before Save. Resolution to `Import` is untested (AC-5/AC-11).
2. **String persistence** is not verified: the string was created in the open, unsaved Designer session. Whether it persists independently of the Form Save is unverified (EXP-045 suggests string commits persist with the Form Save; not claimed here).
3. **Read-only string readback** used the Caption ellipsis, which opens the existing string's editor. It has OK and Help only; the readback closed with OK after no edit.
4. **Pre-existing string absence** was established by two independent reads (T1 Global Objects filter and Caption list; T4 Caption list and find). No Global Objects re-check was done in T4.
5. **Initial tab state:** the Web Client tab was current at the start of T4, as it was at the start of T3. No action preceded the list. Cause unknown.
6. **Action counts** (clicks 10, find 13, snapshots 6, type 2, Tab 2, Escape 2): worker recounts from the call sequence, not from a tool log. The narrative order in §3 is authoritative for the sequence.

## 8. Acceptance matrix (T4 scope)

| AC | Status | Evidence |
| --- | --- | --- |
| AC-1 | Re-confirmed: Designer on FX_Items, User footer, Save disabled before mutation; no challenge | §2; snapshot |
| AC-2 | Extended: FX_sImport exists with value `Import`, read through the native string editor without change (after creation in this step) | §4; `t4-03`; readback step 15 |
| AC-3 | Unchanged from T2/T3 (no Form-level change) | — |
| AC-4 | Not attempted (no deletion in T4) | — |
| AC-5 | **Partial:** Caption `FX_sImport` assigned; string created once with value `Import`; Name and geometry unchanged. Visible resolution to `Import` not checked (requires Save and reopen) | §4; `t4-01`, `t4-04` |
| AC-6 to AC-13 | Not attempted (outside T4) | — |

## 9. Worker-written file inventory (T4)

- `evidence/EXP-062-R4/T4-fx-simport-string-and-caption-assignment-report.md` (this file; created)
- `evidence/EXP-062-R4/t4-01-caption-committed-fx_simport-before-ellipsis-state.png` (created)
- `evidence/EXP-062-R4/t4-02-string-editor-opened-after-yes-prefill-fx-s-import-before-value-edit.png` (created)
- `evidence/EXP-062-R4/t4-03-string-value-import-committed-before-ok.png` (created)
- `evidence/EXP-062-R4/t4-04-final-state-caption-fx_simport-string-import-canvas-raw-id-save-enabled-unsaved.png` (created)
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (updated: T4 status and section)

Tool-written, not requested (under `evidence/playwright/`): accessibility snapshot and console-log files written by the browser tool on each action (timestamps 16-58 to 17-00). The exact count was not verified; the harness inventory is authoritative.

## 10. Final Designer state

- FX_Items (User scope), **dirty (Save enabled, Undo enabled), not saved**.
- FX_RefreshButton selected; Caption `FX_sImport`; canvas displays `FX_sImport` (raw ID).
- Strings: `FX_sImport` = `Import` (created in this session, unsaved with the Form).
- No dialog open. The Web Client tab remains as the second tab.
- Components: 17, unchanged (FX_VarTestEdit present). Handlers: FX_Test unchanged. No FX_ImportPicture. No FX_PictureStatic.

## 11. Next permitted action

None in T4. The Form is dirty and must not be saved, closed, or reopened until the coordinator approves the next step. The remaining configuration (FX_VarTestEdit deletion; FX_PictureStatic placement at Location `10.5; 21.5` after deletion; binding; No Colon; FX_ImportPicture; Primary) and the single Designer Save are not performed.
