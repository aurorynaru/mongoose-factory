# EXP-062-R4 T11 — FX_RefreshButton Primary reassigned to FX_ImportPicture; final pre-Save gate matrix (cycle 15; STOPPED at gate G8 — FX_VarTest Form-Temporary definition not found; Form dirty, open, NOT saved)

Run `R-20261012-003624-ROx0`, task T11, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`, task_message_id `8ceff8b3-ece1-4158-83dd-f614eeeca9a7`. Date 2026-10-12.

## Outcome (observed only)

- **Primary reassigned (1 mutation):** FX_RefreshButton Events > Primary changed from `FX_Test` to `FX_ImportPicture` through the native Primary dropdown (option list offered FX_ImportPicture first; FX_Test was the selected option). Authoritative readback after reselect: Primary `FX_ImportPicture` (t11-08 accessibility readback, t11-09 screenshot). Components-grid "Event to generate" still shows `FX_Test` (stale column, as the brief anticipated; not treated as failure).
- **Pre-Save gate matrix: NOT fully passed.** Gate G8 failed (FX_VarTest Form-Temporary definition not found in the Variables grid). Per the brief, the worker stopped without a correction and without any Save.
- No Save, no close or reopen, no Form-level edit, no component or action creation or deletion, no runtime action.

## Pre-Save gate matrix

| Gate | Check | Result | Evidence |
|---|---|---|---|
| G1 | Identity: FX_Items, ScopeType User, ScopeName anton.ramos@3mworks.com.ph; dirty (Save enabled); no dialog or challenge | PASS | t11-02, t11-16 (Save and Undo enabled; footer ScopeName) |
| G2 | FX_ImportPicture sequence 0: Response Type Binary Value Action, Disabled false, exactly one action, Response Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)` | PASS | t11-03 (reselect readback; Event To Handle Type, Parameters, Disabled False) |
| G3 | FX_Test keeps exactly two original actions: seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (false); seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` (false) | PASS | t11-03 |
| G4 | FX_RefreshButton authoritative Name FX_RefreshButton, Type PushButton, Caption FX_sImport, Binding Type None, Binding empty, Size 14.25; 1.89, Location 12.1666666666667; 5.25 | PASS | t11-04, t11-06 (component property readback), t11-08 |
| G5 | FX_RefreshButton Events > Primary = FX_ImportPicture (authoritative property) | PASS | t11-06 (Primary FX_Test before), t11-07 (Primary dropdown shows FX_ImportPicture), t11-08 (reselect readback FX_ImportPicture), t11-09 |
| G6 | 17 components; FX_PictureStatic present once; FX_VarTestEdit absent; other baseline components retained (names) | PASS | t11-10 (targeted snapshot, 17 treeitems: Pane (00), FormCollectionGrid, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol, Pane (01), FX_RefreshButton, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox, FX_PictureStatic). Geometry of the other baseline components not re-read this turn. |
| G7 | FX_PictureStatic: Name FX_PictureStatic; Type Static; Pane 1; Size 20; 9 (Width 20); Location 10.5; 21.5 (Top 10.5, Left 21.5); Binding Type Property; Binding object.FX_Picture; No Colon True | PASS | t11-11 (reselect; accessibility readback); t11-10 grid row Pane 1, Tab 0 |
| G8 | FX_VarTest retains its original Form-Temporary definition and value (`~LIT~()`, Persistent False, Global False) | **FAIL (not found)** | t11-12, t11-13, t11-14, t11-15, t11-16, t11-17, t11-18: the Variables grid lists **Form - Persistent** (InitialCommand), **Global - Persistent**, and **Global - Temporary** only. **No "Form - Temporary" group and no FX_VarTest row** in the rendered grid (collapsed and expanded; find returned no match for "FX_VarTest", "Form - Temporary"). The T9 post-Save screenshot (`t9-05`) showed Form - Temporary > FX_VarTest. |
| G9 | Form Layout (read-only, Form tab): Unit Char; Size 69; 21; Splitter Vertical; Splitter Position 11; no Form or Design View Size change | PASS | t11-03 (Form tab accessibility readback: Unit Char, Size 69; 21, Width 69, Height 21, Splitter Vertical, Splitter Position 11) |
| G10 | String FX_sImport = Import (from T10 native evidence; not reopened) | PASS (carried from T10) | T10 `t10-13-string-dialog-readonly.png` (Name FX_sImport, String Value Import) |
| G11 | Button visibly shows Import | PASS | t11-02, t11-05, t11-07, t11-09 (canvas button caption `Import`) |
| G12 | Picture Static display | Observed: a broken-image glyph is drawn at the Static's top-left corner (t11-02, t11-09, t11-12). Not fixed, not imported (out of scope). | t11-12 |

## Stop decision

- G8 (FX_VarTest Form-Temporary definition) is a required pre-Save value that differs from the T9 post-Save state. Per the brief ("if a required value differs, STOP and do not attempt a correction outside the approved Primary change"), the worker stopped here.
- Not performed: any correction of FX_VarTest; any Save (intermediate or final); any close or reopen; any Form-level edit; any further mutation.
- Unknown: whether the Form - Temporary group is absent from the saved definition (the discard-and-reopen cycle in T10 is the only operation between `t9-05` and now that could have changed it), or whether it is a display issue of the Variables grid. The T10 report did **not** check the Variables tab after the reopen; the T10 record's note "FX_VarTest present" was unverified and is corrected in the experiment record.
- Operator decision needed before any Save: (a) confirm whether FX_VarTest exists in the Form (for example, through an approved read-only route outside this worker's scope), (b) decide whether to save the configured Form as-is (which would persist the variable state as displayed) or to stop the replay.

## Mutation audit (T11)

- Primary change: 1 (FX_RefreshButton Events > Primary: FX_Test -> FX_ImportPicture; OK committed through the dropdown selection).
- Designer Save: 0 in T11. Cumulative intermediate Save: 1 (T9). Final Save: 0.
- Form close: 0. Form reopen: 0.
- Components added/deleted: 0. Toolbox drops: 0. Strings created/edited: 0. Event groups or actions created: 0. Parameters dialog OK: 0 (no parameter edits).
- Form width or Form-level property edits: 0.
- Delete Form Definition clicks: 0. Trash clicks: 0. Metadata unloads: 0. Runtime actions: 0. Import activations: 0. Checkout operations: 0. Browser JavaScript, console or network: 0.
- View-only actions (not Designer properties): Variables grid Expand (1) and Collapse (1); Global - Temporary group expansion (1); Components and Variables tab switches; Properties Component and Form tab switches; mouse move (1) and mouse wheel (3) over the Variables grid.

## Counts (T11, exact, from this turn's call log)

- Browser tab lists: 1. Tab selects: 1 (index 1, Designer; succeeded).
- Browser snapshots: 9 (untargeted 7: t11-01, t11-03, t11-04, t11-06, t11-08, t11-11, t11-16; targeted 2: t11-10 to the Components tabpanel, t11-13 to the Variables tabpanel).
- Screenshots (PNG): 9 (t11-02, t11-05, t11-07, t11-09, t11-12, t11-14, t11-15, t11-17, t11-18).
- Element clicks: 13 (e407 action sequence cell; e357 Components tab; e1203 FX_RefreshButton row; e948 Component tab; e1913 Primary dropdown; e2296 FX_ImportPicture option; e1228 FX_ItemStatic row (neutral); e1203 FX_RefreshButton row (reselect); e1428 FX_PictureStatic row; e360 Variables tab; e5076 Variables Expand; e5077 Variables Collapse; e5698 Global - Temporary group).
- Finds: 16 (including 1 call that returned a syntax error and several that returned no match).
- Mouse: 1 move; 3 wheel events (view only).
- Keyboard: 0 (no Escape or Tab). Typing: 0.
- Designer Save: 0. Form close/reopen: 0. Primary change: 1. Parameter OK: 0.

## Cumulative audit (T1–T11)

- Tab lists: 11 recorded (T8 counted per carried summary; see T8 correction). Tab selects: 11 (same basis).
- Components deleted: 1 (T5). Components added: 1 (T6). Toolbox drops: 1 (T6).
- Strings created: 1 (T4). Event groups created: 1 (T7). Event action rows created: 1 (T7).
- Action configuration: Response Type Binary Value Action (T8; persisted by the T9 intermediate Save); Action Type Import and component FX_PictureStatic (T10, OK once; committed after the T9 Save, so unsaved).
- FX_RefreshButton Primary changes: 1 (T11).
- Designer Save: 1 intermediate (T9, succeeded). Final Save: 0.
- Form close: 1 and reopen: 1 (T10 authorized discard and recovery).
- Form width edits: 0. Metadata unloads: 0. Runtime imports: 0. Delete Form Definition clicks: 0. Trash clicks: 1 (T5).

## Unresolved display differences

- FX_VarTest / Form - Temporary group not listed in the Variables grid after the T10 reopen (T11 gate G8). Cause unresolved.
- Components-grid "Event to generate" still shows FX_Test for FX_RefreshButton (stale column; the authoritative Primary is FX_ImportPicture).
- The Properties header after the T9 intermediate Save and T10 reopen matched the selected component (the stale `static1_USER` header seen earlier was not present after the reopen).
- Picture Static broken-image glyph on the canvas (observed; cause not established).
- Whether Save alone refreshes the component selector (untested; the selector was current after the T10 reopen).

## Acceptance checks (T11 scope)

- AC-1: met for identity and Save state (G1); discard confirmation was in T10.
- AC-2: string value Import carried from T10 (G10); FX_Test two actions (G3); FX_ImportPicture absent before T5 to T7 (historical).
- AC-3: Form Layout read-only values (G9) met; no Form-level change.
- AC-4: deletion of FX_VarTestEdit is reflected in the 17-component inventory (G6); FX_VarTest variable preservation **not met** (G8).
- AC-5: FX_RefreshButton Name, Caption FX_sImport, geometry (G4) met; visible caption Import (G11) observed.
- AC-6: FX_PictureStatic geometry, binding, No Colon (G7) met.
- AC-7: FX_ImportPicture one action, Binary Value Action, Import, FX_PictureStatic (G2) met in the open Designer; not yet in the saved definition.
- AC-8: Primary FX_ImportPicture (G5) met in the open Designer; not yet saved.
- AC-9: pre-Save comparison **not complete** (G8 fails; the comparison cannot establish "everything else matches baseline" for the variable).
- AC-10 to AC-13: not reached (no final Save; no final close and reopen; no runtime check).

## Evidence files (T11, worker-written, under evidence/EXP-062-R4/)

- `T11-primary-reassignment-and-pre-save-gate-report.md` (this report)
- Snapshots (YAML): `t11-01-preflight-snapshot.yml`, `t11-03-action-reselect-readback.yml`, `t11-04-refreshbutton-properties.yml`, `t11-06-refreshbutton-component-properties.yml`, `t11-08-refreshbutton-reselect-readback.yml`, `t11-10-components-tree-presave.yml`, `t11-11-picturestatic-presave-readback.yml`, `t11-13-variables-expanded-tree.yml`, `t11-16-fresh-snapshot-variables-check.yml`
- Screenshots (PNG): `t11-02-preflight-state.png`, `t11-05-refreshbutton-selected-state.png`, `t11-07-primary-after-selection.png`, `t11-09-primary-after-reselect.png`, `t11-12-variables-tab-presave.png`, `t11-14-variables-after-scroll.png`, `t11-15-variables-top.png`, `t11-17-variables-after-collapse.png`, `t11-18-variables-global-temporary-expanded.png`

## Knowledge state

- FX_RefreshButton Primary FX_ImportPicture committed and authoritative readback: observed (unsaved).
- FX_ImportPicture sequence-0 action readback (Binary Value Action, Import, FX_PictureStatic): observed (unsaved).
- FX_PictureStatic geometry, binding, No Colon in the open Designer: observed (unsaved).
- FX_VarTest Form-Temporary group absent from the Variables grid after the reopen: observed; cause unresolved.
- Nothing is replay_verified.
