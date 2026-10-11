# EXP-062-R4 T9 — operator-approved intermediate Save; FX_ImportPicture action selector check (cycle 12, task T9; BLOCKED — stopped before Parameters selection; Form dirty and open)

Run `R-20261012-003624-ROx0`, task T9, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`, task_message_id `df4ab5c5-5fa3-4133-ae25-70e62f69bdad`. Date 2026-10-12.

## Outcome (observed only)

- Pre-Save prerequisites: PASSED (17 components; FX_VarTestEdit absent; FX_PictureStatic Static, Pane 1, Tab 0, Size 20; 9, Location 10.5; 21.5, Binding object.FX_Picture, No Colon True; FX_RefreshButton Caption FX_sImport, Primary FX_Test, Size 14.25; 1.89, Location 12.1666666666667; 5.25; FX_VarTest present; FX_Test two actions; FX_ImportPicture one sequence-0 row, Response Type Binary Value Action, Disabled false).
- **Intermediate Save (count 1): succeeded.** Native response (toast, verbatim): `Save` / `Form [FX_Items] and global object(s) were saved.` Toolbar Save and Regenerate Form then read disabled (t9-06 snapshot). No prompt appeared.
- **Post-Save state, observed:** FX_ImportPicture sequence-0 row still reads Binary Value Action, Disabled false; FX_Test still shows Prompt (seq 0) and Set Values (seq 1); FX_PictureStatic present as Static, Pane 1, Tab 0; FX_RefreshButton PushButton, Pane 1, Tab 0, Event to generate `FX_Test` (Primary unchanged, as intended for T9).
- **Unintended dirty state after the Save (not explained):** after the Save, the Properties panel switched to the Form tab and a Form-level Splitter dropdown was found open (Vertical current). I pressed Escape once to close it (t9-08): the dropdown closed with Splitter still Vertical, but keyboard focus moved into the Form-level Size > Width field (value 69, text selected). I typed nothing. Afterwards the toolbar Save and Undo were **enabled** (t9-09; the t9-10 snapshot shows Save enabled and Regenerate Form enabled). So the Form is dirty again. Readbacks after this: Size `69; 21` (Width 69, Height 21), Splitter Vertical, Splitter Position 11 (t9-09, t9-11). The likely cause is a same-value commit of a Form-level field on blur. This is an inference; the commit was not observed directly and no value changed by readback. Under the brief this is an uncertain mutation, so the step was stopped.
- **Not performed (stop rule):** the Parameters dialog was not opened; the Component Bound to Binary Value Property selector was not inspected in T9; no Action Type or component value was set; no final Save; no Undo or revert; no close or reopen (the conditional close/reopen requires a verified clean Form and was not available); no Primary change; no runtime action.

## Action sequence (T9, in order)

1. `browser_tabs` list — tab 0 Mongoose (current), tab 1 Designer.
2. `browser_tabs` select index 1 — Designer (succeeded).
3. Snapshot untargeted → `t9-01-baseline-snapshot.yml` (FX_Items, User footer, Save enabled, Event Handlers tab, FX_ImportPicture seq 0 Binary Value Action).
4. Find "Components".
5. Click Components tab (e357) → `t9-02-baseline-components-tab.png` (FX_PictureStatic last row, Static, Pane 1, Tab 0; trash button visible).
6. Find "FX_VarTestEdit" (no match); find "FX_RefreshButton" (row: PushButton, Pane 1, Tab 0, Event to generate FX_Test).
7. Snapshot targeted to Components tabpanel (e1443) → `t9-03-components-tabpanel-snapshot.yml` (17 treeitems: Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_PictureStatic).
8. Click FX_RefreshButton row (selection only) → snapshot untargeted `t9-04-refreshbutton-properties-snapshot.yml` (Caption FX_sImport; Primary FX_Test; Size 14.25; 1.89; Location 12.1666666666667; 5.25).
9. Find "Variables"; click Variables tab (e360); find "FX_VarTest" → Form-Temporary FX_VarTest present.
10. Find "Save"; **click Save (e16): the single intermediate Save** → `t9-05-after-intermediate-save.png` (toast text above; Save icon greyed).
11. Snapshot untargeted → `t9-06-post-save-snapshot.yml` (Save `[disabled]`, Regenerate Form `[disabled]`).
12. Find "Event Handlers"; click Event Handlers tab (e358) → `t9-07-post-save-event-handlers.png` (Properties panel had switched to Form tab; Splitter dropdown open).
13. **Press Escape** → `t9-08-after-escape-splitter-dropdown.png` (dropdown closed; focus in Form Size Width 69).
14. Find "Expand"; find "Binary Value Action".
15. Click FX_ImportPicture sequence cell 0 (e407) (selection) → `t9-09-action-row-selected.png` (toolbar Save and Undo **enabled**; Width 69 focused).
16. Find "Splitter" (Vertical; Splitter Position 11).
17. Snapshot untargeted, depth 6 → `t9-10-stop-state-snapshot.yml` (Save enabled, Regenerate Form enabled).
18. Find "Components"; click Components tab (e357) → `t9-11-post-save-components-tab.png` (FX_RefreshButton Event to generate FX_Test; Size 69; 21 visible).
19. Mouse move to (900, 800); mouse wheel deltaY 400 over the Components grid (view only) → `t9-12-post-save-components-scrolled.png` (FX_PictureStatic row visible: Static, Pane 1, Tab 0; FX_UMCombobox, FX_UMStatic, FX_CostEdit rows visible).
20. Stopped. No further browser action.

## Counts (T9, exact)

- Tab lists: 1. Tab selects: 1 (index 1; succeeded).
- Snapshots: 5 (untargeted 4: t9-01, t9-04, t9-06, t9-10; targeted 1: t9-03).
- Finds: 11.
- Element clicks: 7 (Components tab ×2, FX_RefreshButton row, Variables tab, Save, Event Handlers tab, sequence-0 cell). Of these, **1 is a Designer Save**; the rest are tab or row selections.
- Key presses: 1 (Escape).
- Mouse: 1 move; 1 wheel (view scroll).
- Screenshots (PNG): 7 (t9-02, t9-05, t9-07, t9-08, t9-09, t9-11, t9-12).
- Snapshot files: 5 YAML (t9-01, t9-03, t9-04, t9-06, t9-10).
- **Designer Save: 1 (intermediate, authorized). Final Save: 0.**
- Form close/reopen: 0 (conditional close/reopen not performed; the Form was not clean at the decision point).
- Parameters dialog opened: 0. Action Type committed: 0. Component target committed: 0. Action configured: 0.
- Components added 0; deleted 0; Toolbox drops 0; strings created 0; Form width edits 0 (Width unchanged at 69; a same-value commit is possible and unverified); Primary change 0.
- Delete Form Definition clicks 0; trash clicks 0; metadata unloads 0; runtime actions 0; browser JavaScript/console/network 0.

## Reconciliation of the T8 tab-list audit

- The T8 report recorded `tab lists 0; tab selects 0`. That count covers only the post-compaction tool sequence visible in T8's transcript.
- The carried-over summary for T8 states that, before compaction, the tabs were listed (tab 0 Web Client; tab 1 Designer) and the Designer tab was selected. Those calls are not visible in the current transcript, so they cannot be re-verified here.
- Correction: T8 counts should read **pre-compaction (per carried summary, unverified here): 1 tab list and 1 tab select; post-compaction sequence: 0 tab lists and 0 tab selects.** The T8 report and record should be read with this qualifier. No action was invented to reconcile it.

## Cumulative audit (T1–T9)

- Tab lists: 7 (T1–T7) + 1 (T8, pre-compaction, per summary; post-compaction 0) + 1 (T9) = 9 recorded, with the T8 entry flagged as above. Tab selects: 7 + 1 (T8, per summary) + 1 (T9) = 9, with the same T8 flag.
- Components deleted: 1 (T5, FX_VarTestEdit). Components added: 1 (T6, FX_PictureStatic). Toolbox drops: 1 (T6).
- Strings created: 1 (T4, FX_sImport, value Import).
- Event groups created: 1 (T7, FX_ImportPicture). Event action rows created: 1 (T7).
- Action configuration committed: Response Type `Binary Value Action` (T8; persisted by the T9 Save). Action Type and component: not committed.
- **Designer Save: 1 (T9, intermediate).** Final Save: 0.
- Form close/reopen: 0. Form width edits: 0 (see unexplained dirty state). Unloads: 0. Runtime imports: 0. Delete Form Definition clicks: 0. Trash clicks: 1 (T5).

## Stop rule applied

- Stopped under "uncertain mutation": after the authorized Save, a Form-level commit occurred (or may have occurred) that was not intended and is not explained. The brief directs a stop on any uncertain mutation, and the Parameters selector check is therefore not performed.
- The conditional close and reopen (which needs a verified clean Form) is not available in the current state.
- Nothing was undone, reverted or discarded. The Form remains open and dirty.

## Decision needed

1. Operator decision on the unexplained dirty state: (a) accept the Form-level Size/Splitter state as unchanged (values read back as 69; 21 and Vertical) and authorize the next step; (b) authorize a route that reverts only that Form-level change, which the brief does not allow without approval; or (c) stop the replay here.
2. After (a), the selector check (Parameters > Component Bound to Binary Value Property) can be performed; if FX_PictureStatic is still absent, the conditional close/reopen needs explicit approval because the Form would then need to be clean first (the current dirty state blocks it unless the operator approves a route).
3. Any final Save remains unauthorized until the complete definition is verified.

## What each decisive screenshot shows and does NOT prove

- `t9-05`: toast "Form [FX_Items] and global object(s) were saved." and Save icon greyed. Proves the native Save message at that moment. Does not prove the saved content beyond the subsequent readbacks.
- `t9-06` (snapshot): Save `[disabled]` and Regenerate Form `[disabled]` right after the Save. Proves the clean state at that moment only.
- `t9-07`: Form-tab Splitter dropdown open after the Save; cause not determined. Does not show what triggered it.
- `t9-08`: dropdown closed, Splitter still Vertical; Width 69 focused. Does not show whether focus-out committed anything.
- `t9-09` / `t9-10`: Save and Undo enabled; Save enabled in snapshot. Proves the dirty state; does not prove which change made it dirty.
- `t9-11` / `t9-12`: post-Save component rows (FX_RefreshButton Event to generate FX_Test; FX_PictureStatic Static, Pane 1, Tab 0). Proves the rows, not the Size/Location/Binding/No Colon values of FX_PictureStatic (not re-read after the Save; only pre-Save readbacks exist).

## Acceptance checks (T9 scope)

- AC-10 (one ordinary Designer Save): Save invoked once and the native response captured (succeeded). The Form is not clean afterwards, so AC-10's "Save disabled after the complete configuration" is not met in the final sense (this is an intermediate Save; the final Save has not been authorized or performed).
- AC-7 (action Action Type Import; component FX_PictureStatic): NOT MET (Response Type only).
- AC-8 (Primary): NOT STARTED.
- AC-9 to AC-13: not reached.

## Evidence files (T9, worker-written, under evidence/EXP-062-R4/)

- `T9-intermediate-save-and-action-selector-report.md` (this report)
- Snapshots: `t9-01-baseline-snapshot.yml`, `t9-03-components-tabpanel-snapshot.yml`, `t9-04-refreshbutton-properties-snapshot.yml`, `t9-06-post-save-snapshot.yml`, `t9-10-stop-state-snapshot.yml`
- PNGs: `t9-02-baseline-components-tab.png`, `t9-05-after-intermediate-save.png`, `t9-07-post-save-event-handlers.png`, `t9-08-after-escape-splitter-dropdown.png`, `t9-09-action-row-selected.png`, `t9-11-post-save-components-tab.png`, `t9-12-post-save-components-scrolled.png`

## Knowledge state

- Intermediate Designer Save succeeded with the native toast text above: observed.
- Post-Save clean state (Save disabled) immediately after the Save: observed (t9-06).
- Form-level focus/commit causing a dirty state after the Save: observed (dirty state), cause unresolved (inference: same-value commit on blur, not verified).
- Selector refresh after Save: NOT tested (the Parameters dialog was not opened in T9). The question of whether Save refreshes the selector is therefore unresolved.
- FX_ImportPicture Action Type and component: not configured (unresolved).
- Nothing is replay_verified.
