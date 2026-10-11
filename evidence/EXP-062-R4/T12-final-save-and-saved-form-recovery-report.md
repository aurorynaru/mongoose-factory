# EXP-062-R4 T12 — final Designer Save; clean close and reopen; saved-definition recovery (cycle 17; COMPLETE for scope; Form clean and open; runtime NOT run)

Run `R-20261012-003624-ROx0`, task T12, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`, task_message_id `7fa10f46-25bf-4a50-a591-38eb1ce50162`. Date 2026-10-12.

## G8 waiver (operator cycle-17)

- Gate G8 (FX_VarTest Form-Temporary definition) is **OPERATOR-WAIVED, not technically verified**. The T11 gate (`T11-primary-reassignment-and-pre-save-gate-report.md`) found no Form - Temporary group and no FX_VarTest row in the Variables grid.
- The waiver covers the absence only. It is **not** evidence that FX_VarTest was preserved, and it does not authorize recreating the variable, altering FX_Test, or restoring FX_VarTestEdit. None of these was done.
- The explanation that the T10 discard-and-reopen removed the variable remains a **candidate_procedure**, not an observed or verified cause.
- T12 re-checked the Variables grid after the final Save and reopen (t12-22): the same three groups (Form - Persistent, Global - Persistent, Global - Temporary) and no Form - Temporary group. This is recorded as observed presence/absence only.

## Pre-Save matrix (read-only; all PASS except G8 which is waived)

| Gate | Check | Result | Evidence |
|---|---|---|---|
| P1 | Identity FX_Items, ScopeType User, ScopeName anton.ramos@3mworks.com.ph; dirty (Save and Undo enabled); no dialog or challenge | PASS | t12-01, t12-02, t12-08 |
| P2 | FX_ImportPicture: one sequence-0 row, Binary Value Action, Disabled false, Response Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)` | PASS | t12-03 (grid row + Event To Handle Type / Parameters readback) |
| P3 | FX_Test keeps Prompt (seq 0) and Set Values (seq 1), both false, unchanged text | PASS | t12-03 |
| P4 | FX_RefreshButton: Caption FX_sImport, Binding Type None, Binding empty, Primary FX_ImportPicture (authoritative), Size 14.25; 1.89, Location 12.1666666666667; 5.25 | PASS | t12-05 |
| P5 | 17 components; FX_VarTestEdit absent; FX_PictureStatic once | PASS | t12-04 (17 treeitems) |
| P6 | FX_PictureStatic: Static; Size 20; 9; Location 10.5; 21.5; Binding Type Property; Binding object.FX_Picture; No Colon True | PASS | t12-06 |
| P7 | Form Layout (read-only): Unit Char; Size 69; 21; Splitter Vertical; Position 11 | PASS | t12-07 |
| P8 | FX_VarTest Form-Temporary definition | **WAIVED (G8)** | t11 evidence; t12-22 |
| P9 | String FX_sImport = Import | PASS (carried from T10 native evidence; not reopened) | T10 `t10-13-string-dialog-readonly.png` |

No Form-level field was edited. No mutation occurred before the Save.

## Final Save (count 2 cumulative; T12 count 1)

- Action: one click on the Designer top-toolbar **Save** (not Delete Form Definition).
- Native response (verbatim toast, t12-09): title `Save`; body `Form [FX_Items] and global object(s) were saved.` No prompt, no error text, no retry.
- Post-Save state (t12-10): Save `[disabled]`, Undo `[disabled]`, Redo `[disabled]`, Regenerate Form `[disabled]`. Conclusively clean.
- Post-Save visible checks: the FX_RefreshButton Event to generate cell was not read immediately after the Save (t12-09 and t12-10 show the Save state, not that row). The column showed FX_ImportPicture after the reopen (t12-15). The authoritative Primary readback (t12-16) is FX_ImportPicture. Before the Save, the column had read FX_Test (T11 and the t12-05 pre-save snapshot).

## Clean close and reopen (count 1 each)

- **Close:** Form-tab close control (`closable FX_Items`) once. **No unsaved-changes prompt appeared** (t12-11 screenshot; find for "has changed"/"save the form definition" returned no match). No Save, Discard, Yes, No or Cancel was clicked.
- **Reopen:** Form menu > recent list > FX_Items, first attempt (no retry, no Open > Select Form fallback).
- Reopened identity (t12-12, t12-13): title FX_Items; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Undo `[disabled]`.

## Post-reopen persistence verification (authoritative readbacks)

| Item | Recovered value | Result | Evidence |
|---|---|---|---|
| Form identity | FX_Items, User, anton.ramos@3mworks.com.ph | PASS | t12-12, t12-13 |
| Clean state | Save and Undo disabled | PASS | t12-13, t12-21 |
| Components | 17: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_PictureStatic | PASS | t12-15 (expanded tree) |
| FX_VarTestEdit | absent | PASS | t12-15 |
| FX_PictureStatic | Static; Pane 1; Size 20; 9; Location 10.5; 21.5; Binding Type Property; Binding object.FX_Picture; No Colon True | PASS | t12-17 |
| FX_RefreshButton | Name FX_RefreshButton; PushButton; Caption FX_sImport; Binding None; Size 14.25; 1.89; Location 12.1666666666667; 5.25; **Primary FX_ImportPicture (authoritative)** | PASS | t12-16 |
| Button canvas caption | `Import` (button shows "Import") | **Resolved to Import** | t12-12, t12-21 |
| FX_ImportPicture | one sequence-0 row: Binary Value Action; Disabled false; `ACTION(Import) COMPONENT(FX_PictureStatic)`; exactly one action | PASS | t12-19 |
| FX_Test | two original actions: seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (false); seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` (false) | PASS | t12-19 |
| Form Layout | Unit Char; Size 69; 21; Splitter Vertical; Position 11 | PASS | t12-20 |
| FX_VarTest | **not present in Variables grid** (groups: Form - Persistent, Global - Persistent, Global - Temporary) | Observed absence; G8 waiver applies; **not claimed as persisted** | t12-22 |
| Components-grid Event to generate (secondary) | FX_ImportPicture for FX_RefreshButton (lagged FX_Test before Save; caught up after reopen) | Secondary only; authoritative Primary is FX_ImportPicture | t12-15 |
| Broken-image glyph (picture Static) | **Still displayed** at the Static's top-left corner | Not fixed; no picture loaded | t12-12, t12-21, t12-22 |

## Runtime

- **Not performed in T12** (the instruction excludes the runtime check and Import activation). The Import button was not activated; no record was touched.

## Action audit (T12, exact)

- Browser tab lists: 1. Tab selects: 1 (index 1, Designer; succeeded).
- Browser snapshots: 15 (all untargeted; t12-01, t12-03, t12-04, t12-05, t12-06, t12-07, t12-10, t12-13, t12-14, t12-15, t12-16, t12-17, t12-18, t12-19, t12-20).
- Screenshots (PNG): 7 (t12-02, t12-08, t12-09, t12-11, t12-12, t12-21, t12-22).
- Element clicks: 18: Event Handlers tab (pre-save) 1; Components tab (pre-save) 1; FX_RefreshButton row (pre-save) 1; FX_PictureStatic row (pre-save) 1; Form tab 1 (pre-save); **Save 1 (final)**; close × 1; Form menu 1; FX_Items recent item 1; Details Expand Panel 1 (layout toggle); Components tab (recovered) 1; Components grid Expand 1 (view); FX_RefreshButton row (recovered) 1; FX_PictureStatic row (recovered) 1; Event Handlers tab (recovered) 1; Event Handlers grid Expand 1 (view); Form tab (recovered) 1; Variables tab 1.
- Finds (browser find): 16 (reconstructed from the call log: tab state; Form heading; Save/Undo state; "were saved" check; "has changed" check; closable control; Form menu; menu item; Expand Panel; tab/heading lookups; Expand/Collapse; Component/Event Handlers/Variables lookups; final Save/Undo state).
- Keyboard: 0 (no Escape, Tab or Enter). Typing: 0. Mouse moves/wheels: 0.
- **Designer Save: 1 in T12. Cumulative Designer Save: 2 (T9 intermediate + T12 final).** No retry, no further Save.
- Form close: 1; Form reopen: 1 (this task). Unsaved-changes prompt: none; Yes/No/Cancel clicks: 0.
- Parameters dialog opened: 0. Action values changed: 0. Primary changed: 0 (changed in T11; unchanged in T12). Components added/deleted: 0. Toolbox drops: 0. Strings created or edited: 0. Event groups or actions created: 0.
- Form-level property edits: 0. Form width edits: 0.
- Delete Form Definition clicks: 0. Component trash clicks: 0. Metadata unloads: 0. Regenerate Form: 0. Runtime actions: 0. Import activations: 0. Checkout operations: 0. Browser JavaScript, console or network: 0. Preference changes: 0.

## Cumulative audit (T1–T12)

- Tab lists: 12 recorded (T8 counted 1 per carried summary; T8 post-compaction visible count was 0; see the T8 correction).
- Components deleted: 1 (T5, FX_VarTestEdit). Components added: 1 (T6, FX_PictureStatic). Toolbox drops: 1 (T6).
- Strings created: 1 (T4, FX_sImport = Import). String dialogs read: 2 (T4, T10).
- Event groups created: 1 (T7, FX_ImportPicture). Event action rows created: 1 (T7).
- Action configuration: Response Type Binary Value Action (T8); Action Type Import and component FX_PictureStatic (T10). Both persisted by the T12 final Save.
- FX_RefreshButton Primary: changed FX_Test -> FX_ImportPicture (T11), persisted by the T12 final Save.
- Designer Saves: **2** (T9 intermediate, T12 final). Form close/reopen: T10 (1 close, 1 reopen) and T12 (1 close, 1 reopen).
- Form width edits: 0. Metadata unloads: 0. Runtime imports: 0. Delete Form Definition clicks: 0. Trash clicks: 1 (T5).
- Gate G8: waived by the operator (T12); FX_VarTest absence observed in T11 and T12.

## What each decisive screenshot shows and does NOT prove

- `t12-09`: the native Save toast "Form [FX_Items] and global object(s) were saved." and the greyed Save icon. Proves the native response; does not prove the saved content (read back in t12-15 to t12-20).
- `t12-10` (accessibility snapshot): Save, Undo and Redo disabled. Proves the clean state at that moment.
- `t12-11`: the Designer after the Form-tab close with no prompt. Proves no prompt was shown; does not prove the close was a clean save (the clean state was checked before the close).
- `t12-12` / `t12-13`: reopened FX_Items; footer ScopeType User and ScopeName; Save and Undo disabled; button "Import". Proves identity, clean state and the caption; does not prove the Static geometry (read back in t12-17).
- `t12-15`: expanded 17-component tree; FX_RefreshButton Event to generate FX_ImportPicture. Proves the component rows; the Event column is secondary.
- `t12-16` / `t12-17`: accessibility readbacks of FX_RefreshButton and FX_PictureStatic on the recovered Form.
- `t12-19`: expanded handler groups. Proves the action rows.
- `t12-20`: Form Layout readback. Proves the values read; no Form field was edited.
- `t12-21`: final state (identity, Import on canvas, broken-image glyph, dirty-free). Does not prove runtime behaviour.
- `t12-22`: Variables grid after reopen; no Form - Temporary group. Proves the group is not listed; does not prove FX_VarTest was or was not saved, and is not a preservation claim.

## Acceptance checks (T12 scope)

- AC-1: identity and clean state on reopen (met; t12-12, t12-13); discard confirmation was earlier (T1, T10).
- AC-2: string Import carried from T10; FX_Test two actions; picker check was T1 (historical).
- AC-3: Form Layout read-only values (met; t12-20; no edit).
- AC-4: FX_VarTestEdit absent (met; 17 components); FX_VarTest preservation **not established** (G8 waived; not claimed).
- AC-5: FX_RefreshButton Name and geometry unchanged; Caption FX_sImport; visible caption resolves to Import (met; t12-12, t12-21).
- AC-6: FX_PictureStatic Size, Location, binding, No Colon (met after reopen).
- AC-7: FX_ImportPicture one action, Binary Value Action, Import, FX_PictureStatic (met after reopen).
- AC-8: Primary FX_ImportPicture (met after reopen; authoritative readback).
- AC-9: pre-Save comparison: performed as the P1 to P9 matrix; Form-level and handler differences from the baseline are as listed in the T11 report (no further mutation). The FX_VarTest difference is waived (G8), not verified as unchanged.
- AC-10: exactly one ordinary Designer Save (met; native response verbatim; Save disabled afterwards).
- AC-11: clean close without prompt; reopen through the recent-forms route; identity recovered; intended items recovered (met). FX_VarTest recovery **not claimed** (G8). The recovered Form Layout and FX_PictureStatic Size/Location match pre-Save values (met).
- AC-12: **not performed in T12** (runtime check excluded by the instruction).
- AC-13: final report with exact counts and inventory: this report plus the experiment record. The final runtime outcome is outstanding.

## Unresolved observations

- FX_VarTest / Form - Temporary absent from the Variables grid before the final Save (T11) and after the final Save and reopen (T12). Cause unresolved; the T10 discard-and-reopen is a **candidate_procedure**, not verified.
- The picture Static shows a broken-image glyph (not fixed; not loaded).
- Components-grid Event to generate lagged (FX_Test) until the final Save; cleared after the reopen. Authoritative Primary was always read from the property.
- The Properties header and selector behaviour after Save: the component selector list was current after the T10 reopen; whether a Save alone refreshes it remains untested.
- T8 tab-list count discrepancy (carried; see the T8 correction).

## Evidence files (T12, worker-written, under evidence/EXP-062-R4/)

- `T12-final-save-and-saved-form-recovery-report.md` (this report)
- Snapshots (YAML, 15): `t12-01-preflight-snapshot.yml`, `t12-03-event-handlers-presave.yml`, `t12-04-components-presave.yml`, `t12-05-refreshbutton-presave-readback.yml`, `t12-06-picturestatic-presave-readback.yml`, `t12-07-form-layout-presave.yml`, `t12-10-post-save-clean-snapshot.yml`, `t12-13-reopened-snapshot.yml`, `t12-14-recovered-components.yml`, `t12-15-recovered-components-expanded.yml`, `t12-16-recovered-refreshbutton-readback.yml`, `t12-17-recovered-picturestatic-readback.yml`, `t12-18-recovered-event-handlers.yml`, `t12-19-recovered-handlers-expanded.yml`, `t12-20-recovered-form-layout.yml`
- Screenshots (PNG, 7): `t12-02-presave-state.png`, `t12-08-presave-matrix-state.png`, `t12-09-after-final-save.png`, `t12-11-after-clean-close.png`, `t12-12-reopened-form.png`, `t12-21-final-recovered-state.png`, `t12-22-variables-after-reopen.png`

## Knowledge state

- Final Designer Save succeeded with the native message above: observed.
- Clean state after the Save and after the reopen (Save and Undo disabled): observed.
- Clean close with no unsaved-changes prompt; reopen from recent-forms: observed.
- Intended items recovered (17 components; FX_VarTestEdit absent; FX_PictureStatic geometry, binding and No Colon; FX_RefreshButton caption, Primary, geometry; FX_ImportPicture Binary Value Action with Import and FX_PictureStatic; FX_Test two actions; Form layout): observed.
- Canvas caption resolves to Import after save and reopen: observed.
- Picture Static broken-image glyph persists: observed; cause unresolved.
- FX_VarTest Form-Temporary absent after save and reopen: observed (presence/absence); preservation not claimed; loss cause is a candidate_procedure only.
- Runtime behaviour: not tested in T12 (outstanding).
- Nothing is replay_verified.

## Open questions / next permitted action

- The runtime check (three records, visible Import button, empty picture Static, runtime Save disabled) is outstanding and needs a separate authorization. The Import button must not be activated.
- FX_VarTest: decide whether the absence is acceptable under the waiver for the final report, or whether the operator wants a separate investigation (outside this experiment's scope).
