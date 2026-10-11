# EXP-062-R4 T8 — FX_ImportPicture sequence-0 action configuration (cycle 9; BLOCKED at the component target; Form dirty, NOT saved)

Run `R-20261012-003624-ROx0`, task T8, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`. Date 2026-10-12.

## Outcome (observed only)

- **Response Type set and committed: `Binary Value Action`** (grid Response Type cell for FX_ImportPicture sequence 0 reads `Binary Value Action`; Event To Handle Type reads `Binary Value Action`).
- **Action Type set to `Import` in the Event Handler Parameters dialog, then the dialog was CANCELLED (not OK).** The Action Type was never committed.
- **Target component NOT set.** The "Component Bound to Binary Value Property" dropdown does not offer `FX_PictureStatic`. Its option list (15 entries, read by find) is: FormCollectionGrid, FX_RefreshButton, **FX_VarTestEdit**, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox. The list ends at FX_UMCombobox (scrollbar at end). It still contains FX_VarTestEdit (deleted in T5) and lacks FX_PictureStatic (added in T6). This indicates a **stale component list** in the dialog's dropdown, not a missing component (the Components grid and the Properties readback show FX_PictureStatic present).
- Per the brief, no value was guessed or typed, no other component was substituted, and the dialog was not confirmed. The brief's stop rule applies: the target is not offered, so the step is blocked.
- Action Parameters (grid Response Parameters column): blank. No action committed beyond Response Type.

## Route that worked (new observation)

- The **Event To Handle property-pane Expand control** (toolbar button at the right of the Event To Handle search box, tooltip "Expand", ref e457; the grid's own Expand at e375 was NOT used) expanded the Response node. Its children appeared: **Type**, **Parameters** (with an `Open Edit Property Dialog` button), **Edit in-line Script**. This resolves the T7 blocker (Response node did not expand via its row expander).
- The Type dropdown listed Add Breadcrumb, Add entry to the Audit Log, **Binary Value Action**, Collection Copy, ... (option found and selected by ref).
- The Parameters dialog "Event Handler Parameters" shows General fields (Error Message, Success Message, Only When Current Collection Is `<all collections>`, Only When Platform Is, Keep, Ignore Failure, Message as Toast?, Disabled) and the section **Edit Binary Value Action**: Action (combobox; options include Import, Export, ...), Silent (checkbox), Component Bound to Binary Value Property (combobox), Filename (textbox). Only Action and Component were relevant; General fields and Filename left untouched.

## Action sequence (T8, in order)

1. Snapshot (untargeted) — t8-01 (Event Handlers panel: FX_ImportPicture group with one row seq 0, Disabled false; Event To Handle Event FX_ImportPicture, Sequence 0, Disabled False; FX_Test two rows).
2. Click the Event To Handle property-pane Expand (e457) — Response node expanded (children Type, Parameters, Edit in-line Script). Screenshot `t8-02-after-property-pane-expand.png`.
3. Snapshot (targeted to the Event To Handle tree) — `t8-03-event-to-handle-tree-after-expand.yml` (Type value empty; Parameters row present).
4. Click the Type dropdown caret (e1421) — list opened. Screenshot `t8-04-type-dropdown-open.png`.
5. Click option `Binary Value Action` (e1458). Screenshot `t8-05-type-binary-value-action-selected.png` (Type reads Binary Value Action; grid cell still blank at this moment).
6. Click Parameters `Open Edit Property Dialog` (e1433). Screenshot `t8-06-parameters-dialog-opened.png` (dialog open; Action empty; Component empty). Grid cell now reads Binary Value Action.
7. Click the Action combobox Open (e1625); click option `Import` (e1657). Action shows `Import` in dialog.
8. Click the Component combobox Open (e1638). Screenshot `t8-07-component-bound-dropdown-open.png` (list shows FX_VarTestEdit; FX_PictureStatic not visible at the top).
9. Mouse wheel over the list (after a pointer move to the list) — list scrolled to its end. Screenshot `t8-09-component-list-scrolled-over-list.png` (last entry FX_UMCombobox). A first wheel without the pointer over the list did not scroll (`t8-08-component-list-after-scroll.png`).
10. Finds: option cells list read (15 FX_/Form entries; FX_PictureStatic absent).
11. Click **Cancel** (e1649) — dialog closed without OK. Screenshot `t8-10-after-parameters-cancel.png`: grid row 0 Response Type `Binary Value Action`, Disabled false, Response Parameters blank; FX_Test rows Prompt (seq 0) and Set Values (seq 1) present; Event To Handle Event FX_ImportPicture, Sequence 0, Disabled False.

## Counts (T8, exact)

- Tab lists: 0 and tab selects: 0 in the post-compaction sequence. Correction (added in T9): the carried-over summary records one tab list and one tab select before compaction (Designer tab selected at T8 start); those calls are not visible in the current transcript and are unverified here. Read T8 as pre-compaction 1 list / 1 select (per summary) and post-compaction 0 / 0.
- Snapshot calls: 2 (`t8-01`, `t8-03`). Targeted finds: 14 (one returned a syntax error; one returned no match for a cell name).
- Element clicks: 8 (e457 Expand; e1421 Type caret; e1458 Binary Value Action; e1433 Parameters; e1625 Action open; e1657 Import; e1638 Component open; e1649 Cancel).
- Mouse: 1 pointer move; 2 wheel events (the first did not scroll the list; the second did).
- Keyboard: 0. Typing: 0.
- Screenshots (PNG): 8 (`t8-02`, `t8-04`, `t8-05`, `t8-06`, `t8-07`, `t8-08`, `t8-09`, `t8-10`).
- **Config mutations committed: 1** (Response Type = Binary Value Action; Type readback confirmed after Cancel in the grid).
- Action Type committed: 0 (dialog cancelled). Component target committed: 0. Parameters OK clicks: 0.
- Event handler groups created: 0. Event action rows created: 0 (the T7 row reused).
- Components added: 0. Components deleted: 0. Toolbox drops: 0. Strings created or edited: 0.
- FX_RefreshButton Primary change: 0 (remains FX_Test). FX_Test: unchanged (two actions).
- Form width edits: 0. Designer Save: 0. Form close/reopen: 0. Toolbar Delete Form Definition clicks: 0. Trash clicks: 0. Metadata unloads: 0. Runtime actions: 0. Browser JavaScript, console, network: 0.
- Cumulative from T1 (for the record): tab lists 7; tab selects 7; components deleted 1 (T5); components added 1 (T6); Toolbox drops 1 (T6); strings created 1 (T4); event groups created 1 (T7); event action rows created 1 (T7); config mutations committed on that row 1 (T8, Response Type only); Designer Save 0; Form close/reopen 0; Form width changes 0; unloads 0; runtime imports 0; Delete Form Definition clicks 0; trash clicks 1.

## Acceptance check status

- AC-7 (FX_ImportPicture one action: Response Type Binary Value Action, Action Type Import, component FX_PictureStatic): **NOT MET.** Response Type committed; Action Type and component not committed. Blocked.
- AC-8 (Primary to FX_ImportPicture): NOT STARTED (not in T8 scope).
- AC-9 to AC-13: not reached in T8.

## Blocker and decision needed

- The Component dropdown in the action's Parameters dialog is stale: it lists FX_VarTestEdit (deleted in T5) and omits FX_PictureStatic (added in T6). Nothing was guessed, typed or committed for the target.
- Not attempted (brief rules): retry of the dialog OK; typing the name into the combobox; a Save, close or reopen to refresh the list (each would need its own approval and the Save gate has not passed); any other handler route.
- The unconfigured-target state is preserved: the group FX_ImportPicture has one row with Response Type Binary Value Action and blank Action Type and component. Its Response Parameters are blank.
- Options for the coordinator: (a) the operator approves a route that refreshes the component list (for example, an explicitly approved Save of the current dirty definition followed by a reopen, which would itself change the save-once plan); (b) the operator checks the dialog list behaviour in the Designer and gives a route for setting the component target; (c) stop the replay here and keep the Form dirty.

## Evidence files (T8, worker-written)

- `evidence/EXP-062-R4/T8-fx-importpicture-action-configuration-report.md` (this report).
- `evidence/EXP-062-R4/t8-01-event-handlers-pre-select-snapshot.yml` (untargeted snapshot, saved in this folder).
- `evidence/EXP-062-R4/t8-03-event-to-handle-tree-after-expand.yml`.
- PNGs: `t8-02-after-property-pane-expand.png`, `t8-04-type-dropdown-open.png`, `t8-05-type-binary-value-action-selected.png`, `t8-06-parameters-dialog-opened.png`, `t8-07-component-bound-dropdown-open.png`, `t8-08-component-list-after-scroll.png`, `t8-09-component-list-scrolled-over-list.png`, `t8-10-after-parameters-cancel.png`.

## What each decisive screenshot shows and does NOT prove

- `t8-02`: Event To Handle editor after the property-pane Expand; Response collapsed/expanded state visible; Event FX_ImportPicture Sequence 0 Disabled False. Does NOT show the child Type/Parameters rows (below the visible area at that moment; confirmed by `t8-03`).
- `t8-05`: Type reads Binary Value Action in the editor. Does NOT prove the grid cell is committed (grid blank at that moment; committed in `t8-10`).
- `t8-06`: Parameters dialog fields (Action, Silent, Component, Filename) and the General section. Does NOT prove any value.
- `t8-07` / `t8-09`: the stale component list (FX_VarTestEdit present; FX_PictureStatic absent). Proves the dropdown content at that moment, not the cause.
- `t8-10`: after Cancel — grid row 0 Response Type Binary Value Action; Response Parameters blank; FX_Test two rows; no dialog open. Does NOT prove the Form-level state beyond this view; the Save state was not re-read (Save remains enabled, unsaved).

## Knowledge state

- Expand control route: observed (T8), supersedes the T7 non-expansion.
- Binary Value Action Type selection and grid readback: observed.
- Component list staleness in the Parameters dialog: observed; cause unresolved.
- Action Type Import and component target: not configured (blocked).
