# EXP-056 T8 — pre-Save gate, ONE ordinary Designer Save, immediate saved-state inspection; Designer left open

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 10, task T8.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `72cd7294-6919-4329-a3d8-d669a76b223f`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: one ordinary Designer Save was performed and reported native success: `Form [FX_Items] and global object(s) were saved.` Save, Regenerate Form, Undo and Redo are disabled afterwards. The saved handler still has two ordered actions, and FX_VarTestEdit is still bound to `variables.FX_VarTest`. Immediately after the Save, the Form-variable definition FX_VarTest is ABSENT from Details > Variables (observation; not recreated). The Designer is left open on the saved FX_Items Form. Save count: 1.**

## 1. Pre-Save gate (passed)

- `browser_tabs list` (before any select) → tab 0 Designer, tab 1 Web Client. `browser_tabs select 0` succeeded.
- Fresh snapshot `t8-snapshot-00-fresh-designer-pre-save.md`: FX_Items heading and tab; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save **enabled**; no dialog.
- **Drag From / Drop On (brief-required check before Save):**
  - FormCollectionGrid: Drag From `0 event(s)`, Drop On `0 event(s)` (`t8-snapshot-02-formcollectiongrid-readback.md`). Matches T1.
  - FX_ItemGridCol: Drag From `0 event(s)`, Drop On `0 event(s)` (`t8-snapshot-03-fx-itemgridcol-readback.md`). Matches T1.
- Components: 17 entries (`t8-snapshot-01-components-tab.md`), exactly one FX_VarTestEdit. T7's 15-of-15 original-component comparison was not repeated (view-only, consistent with T7).
- Handler (`t8-snapshot-04-event-handlers-pre-save-recheck.md`): one `StdFormRefreshCompleted` group; sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- FX_VarTestEdit pre-Save: Binding Type Variable and full Binding `variables.FX_VarTest` (T7 readback). The blank Components-grid Data Source cell was recorded as an unresolved observation and not edited.
- Final pre-Save screenshot `t8-01-pre-save-final-two-actions-save-enabled.png`.
- All gates passed → proceeded to the single Save.

## 2. The single ordinary Designer Save

- Clicked the Designer toolbar Save **once** (`e16`, the Save button in the toolbar).
- Immediate result (`t8-snapshot-05-immediately-after-single-save.md`):
  - Native message (accessibility text, line 1003): **`Form [FX_Items] and global object(s) were saved.`**
  - Save `[disabled]` (line 10); Regenerate Form `[disabled]` (line 12); Undo `[disabled]` (line 52); Redo `[disabled]` (line 54).
- Screenshot `t8-02-immediately-after-single-save-native-message.png`: Save icon greyed; a "Save" tooltip is shown. **The toast text is not visible in this frame.** The success evidence is the accessibility snapshot text, not the screenshot.
- No retry, no second Save, no Regenerate Form.

## 3. Saved handler (immediately after Save, `t8-snapshot-05`)

- One `StdFormRefreshCompleted` group.
- Row 0: sequence `0`; Prompt; Disabled `false`; `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. **Unchanged.**
- Row 1: sequence `1`; Set Values; Disabled `false`; `SETVARVALUES(FX_VarTest=P(FX_Description))`. **Retained.**
- Limit: full Parameters of sequence 0 were not re-opened after the Save in T8 (the summary row is unchanged; T7 read the full Parameters pre-Save).

## 4. Variables immediately after Save (AC-7, observation only)

- Details > Variables (`t8-snapshot-06-variables-immediately-after-save-ac7.md`, `t8-03-variables-immediately-after-save-definition-absent.png`): Form category `Form - Persistent` lists **`InitialCommand` only**. Global groups begin with `ccvw_*`.
- Filter `VarTest` (read-only; applied to the virtualised Global groups; cleared afterwards): **no rows**. (Filter behaviour was validated in T2 with the positive control `Initial`.)
- **Result: FX_VarTest is absent immediately after the Save.** Observed. Not recreated. Not repaired.
- The Set Values assignment row (`FX_VarTest=P(FX_Description)`) remains in the handler; it is a separate object and is not evidence of a Form-variable definition.

## 5. Post-Save readback of the Edit binding (`t8-snapshot-07`, `t8-snapshot-08`, `t8-04`)

- Components tab: 17 entries (`t8-snapshot-07-components-after-save-inventory.md`). Rows (grid, post-Save): FormCollectionGrid `Grid objects 0 0`; four GridColumns; Pane (01) children; FX_RefreshButton `PushButton 1 0 StdFormRefresh`; FX_VarTestEdit `Edit 1 0`.
- FX_VarTestEdit reselected (`t8-snapshot-08-fx-vartestedit-post-save-readback.md`):
  - Name `FX_VarTestEdit`; Type `Edit`; Caption blank.
  - Binding Type `Variable`; Binding `variables.FX_VarTest`.
  - Size `37.05; 2`; Location `12.7222222222222; 30.25`; Tab Order `0`.
  - Events: Primary, Data Change, Lose Focus, Gain Focus blank; Drag From `0 event(s)`; Drop On `0 event(s)`.
  - Properties header `FX_VarTestEdit (Edit)`.
- Components grid Data Source cell for FX_VarTestEdit: **still blank** after the Save (recorded, not changed).
- Screenshot `t8-04-post-save-FX_VarTestEdit-selected-binding-variable.png`: header `FX_VarTestEdit (Edit)`, Name `FX_VarTestEdit`, Type Edit; Components row FX_VarTestEdit selected (Pane 1, Tab 0; Data Source blank); Save greyed; User footer. The Binding row is below the visible area of the Properties panel in this frame; the Binding value is from the snapshot readback (`t8-snapshot-08` line 822).

## 6. Original-component preservation (post-Save, limited)

- Components grid rows (post-Save, `t8-snapshot-07`): all 16 originals present with the same Name, Type, Data Source, Pane, Container, Tab, Event to generate as T1/T7 for the grid columns.
- FX_RefreshButton grid row: `PushButton 1 0 StdFormRefresh`, unchanged.
- Limit: the full per-property readback (Location, Size, Events) of the 15 originals was **not** repeated after the Save in T8. T7 did this pre-Save; no change was made between T7 and the Save except the Save itself.

## 7. Designer state after T8

- FX_Items Designer open on the saved Form. Save, Regenerate Form, Undo, Redo disabled (`t8-snapshot-08` lines 10–13). No dialog open. Details panel on Components with FX_VarTestEdit selected. Not closed or reopened.

## 8. Acceptance assessment

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 | Supported (re-verified pre-Save) | `t8-snapshot-00`: FX_Items, User footer, Save enabled, no dialog |
| AC-2 | Supported with limits (T1) | 16-row baseline; Pane containers unavailable as documented |
| AC-3 | Supported (pre-Save, T7/T8) | Two ordered actions before Save (`t8-snapshot-04`) |
| AC-4 | Supported (pre-Save) | Definition absent; assignment present; captured separately (T5, T7) |
| AC-5 | Supported (T7) | Edit properties and originals verified pre-Save; not re-verified post-Save in full |
| **AC-6** | **Supported (mandatory gate met)** | One ordinary Save; native success message `Form [FX_Items] and global object(s) were saved.`; Save disabled after; sequence 0 Prompt summary unchanged (`t8-snapshot-05` line 303); sequence 1 `SETVARVALUES(FX_VarTest=P(FX_Description))` retained (line 310); FX_VarTestEdit Binding `variables.FX_VarTest` (`t8-snapshot-08` line 822). Limits: full sequence-0 Parameters not re-opened post-Save; SaveChanges response body not captured; toast text not visible in the screenshot (text from accessibility snapshot). |
| **AC-7** | **Observation documented** | Immediately after the Save: FX_VarTest **absent** from Variables (`InitialCommand` only; filter `VarTest` no rows). Not recreated. Satisfies AC-7 as an observation. |
| AC-8 to AC-12 | Not tested (close/reopen, runtime are later tasks) | — |

## 9. Counts (T8)

- Designer **Save: 1** (native success message; no retry).
- Regenerate Form: 0. Designer close/reopen: 0. Runtime open/close/activation: 0. FX_RefreshButton clicks: 0.
- Tab lists 1; tab selects 1.
- Fresh snapshots (saved, `t8-snapshot-00` … `-08`): 9.
- Screenshots: 4 calls, 4 files (`t8-01`, `t8-02`, `t8-03`, `t8-04`).
- Successful clicks: 8 — Components tab 2; FormCollectionGrid row 1; FX_ItemGridCol row 1; Event Handlers tab 1; Save 1; Variables tab 1; FX_VarTestEdit row 1. (Components tab counted at pre-Save and post-Save.)
- Typing: 2 (filter `VarTest`; filter cleared). Enter key presses: 2 (apply/clear filter).
- Components created, moved, resized, renamed or deleted: 0. Variables created or changed: 0. Handler actions added, changed or removed: 0. Parameters committed: 0. Original-component property edits: 0.
- Diagnostics, User Preferences, Diagnostic Log, FormSync, cache unload, SQL, scripts, reauthentication: 0.
- Ref-not-found errors: 0.

## 10. Evidence files (T8)

- `T8-report.md` (this report).
- Screenshots (`evidence/EXP-056/`):
  - `t8-01-pre-save-final-two-actions-save-enabled.png` — pre-Save: Event Handlers rows 0 and 1 with `SETVARVALUES(FX_VarTest=P(FX_Description))`; Save icon active; User footer. Proves the pre-Save two-action state. Does not show Save's result.
  - `t8-02-immediately-after-single-save-native-message.png` — after Save: Save icon greyed; "Save" tooltip. The toast text is **not visible in this frame**; the message is in `t8-snapshot-05` line 1003. Proves the disabled Save state only.
  - `t8-03-variables-immediately-after-save-definition-absent.png` — Variables Form category `InitialCommand` only; Save greyed. Proves AC-7 absence in the unfiltered Form category. The Global groups are partly off-frame; the filter result is in `t8-snapshot-06`.
  - `t8-04-post-save-FX_VarTestEdit-selected-binding-variable.png` — FX_VarTestEdit selected; header `FX_VarTestEdit (Edit)`; Name; Type Edit; Components row Pane 1 Tab 0; Data Source blank. Proves post-Save selection and name. The Binding row is below the visible area; the value is in `t8-snapshot-08` line 822.
- Accessibility snapshots: `t8-snapshot-00-fresh-designer-pre-save.md`, `t8-snapshot-01-components-tab.md`, `t8-snapshot-02-formcollectiongrid-readback.md`, `t8-snapshot-03-fx-itemgridcol-readback.md`, `t8-snapshot-04-event-handlers-pre-save-recheck.md`, `t8-snapshot-05-immediately-after-single-save.md` (native message; saved handler rows), `t8-snapshot-06-variables-immediately-after-save-ac7.md` (AC-7), `t8-snapshot-07-components-after-save-inventory.md`, `t8-snapshot-08-fx-vartestedit-post-save-readback.md`.
- Tool-generated snapshots (gitignored, `evidence/playwright/`): `page-2026-10-11T09-08-58-762Z.yml` onward; cited by name above.

## 11. Proof limitations

- The native success is established from the accessibility snapshot text (`Form [FX_Items] and global object(s) were saved.`) and the disabled Save state. The toast is not visible in the screenshot. The SaveChanges response body was not captured.
- "Saved" is a Designer-session observation. No durability claim is made. Cross-session persistence is not tested.
- The sequence-0 Prompt was checked by its summary row after the Save, not by re-opening its Parameters.
- The original components' Location/Size/Events were re-read only pre-Save (T7), not after the Save.
- The blank Components-grid Data Source cell for FX_VarTestEdit is unresolved; the Save did not change it.
- The FX_VarTest absence after Save is an observation of the Designer session, not a persistence test. A close/reopen (a later task) is needed to observe retention; retention is not a gate.

## 12. Repository writes (T8)

- `evidence/EXP-056/T8-report.md` (created)
- `evidence/EXP-056/t8-01` … `t8-04` PNG files; `t8-snapshot-00` … `t8-snapshot-08` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T8 section)
- No other repository files written.

## 13. Next step (not started)

- The Designer remains open on the saved FX_Items Form. The next separate task (not started) is the single close and recent-forms reopen (AC-8, AC-9). Save must not be retried.
