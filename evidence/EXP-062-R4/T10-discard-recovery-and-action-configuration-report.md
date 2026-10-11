# EXP-062-R4 T10 — operator-authorized discard of the post-Save dirty state; saved-Form recovery; FX_ImportPicture action Import/FX_PictureStatic committed (cycle 14; COMPLETE for the scoped steps; Form dirty and open, NOT saved)

Run `R-20261012-003624-ROx0`, task T10, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`, task_message_id `9e9e3bf6-c200-49a8-aa6e-a21273ee68cf`. Date 2026-10-12.

## Outcome (observed only)

- **Pre-close state (t10-02):** FX_Items, ScopeType User, ScopeName anton.ramos@3mworks.com.ph, Save and Undo enabled (dirty). Form-level Size 69; 21, Unit Char, Splitter Vertical, Splitter Position 11.
- **Discard (STEP 1, count 1 close + 1 "No"):** the Form-tab close control (×) produced the native prompt (t10-03). Exact text: title `Infor Mongoose Application Development Framework - FX_Items`; body `Form FX_Items has changed` / `Do you want to save the form definition?`; buttons **Yes** (default focus), **No**, **Cancel**. I chose **No** (closes without saving). Enter not pressed. Yes/Cancel not used. Form closed; Save and Undo disabled; no Form tab remained (t10-04).
- **Recovery (STEP 2, count 1 reopen, first attempt):** Form menu > recent list > `FX_Items` (the menu entry is the `FX_Items` item; no retry, no Open > Select Form needed). The Form opened with identity FX_Items, ScopeType User, ScopeName anton.ramos@3mworks.com.ph, **Save disabled, Undo disabled** (clean) (t10-05, t10-06).
- **Saved-definition readbacks (all match T9 intermediate; no mutation):**
  - Form-level Layout: Unit `Char`; Size `69; 21`; Splitter `Vertical`; Splitter Position `11` (accessibility readback, Form tab, t10-24). Identical to the pre-close values, so the discard removed the unintended dirty state without changing these values.
  - Components: **17 entries**, in order: Pane (00); FormCollectionGrid (Grid, objects, Pane 0, Tab 0); FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol (GridColumns, object.FX_Item / FX_Description / FX_Cost / FX_UM, Pane 0, Container FormCollectionGrid, Tabs 1–4); Pane (01); FX_RefreshButton (PushButton, Pane 1, Tab 0, Event to generate FX_Test); FX_ItemStatic (Static, Pane 1, Tab 5); FX_ItemEdit (Edit, object.FX_Item, Tab 6); FX_DescriptionStatic (Static, Tab 7); FX_DescriptionEdit (Edit, object.FX_Description, Tab 8); FX_CostStatic (Static, Tab 9); FX_CostEdit (Edit, object.FX_Cost, Tab 10); FX_UMStatic (Static, Tab 11); FX_UMCombobox (ComboBox, object.FX_UM, Tab 12); FX_PictureStatic (Static, object.FX_Picture, Pane 1, Tab 0). **FX_VarTestEdit absent.** (t10-09, t10-11.)
  - FX_PictureStatic (reselected; Properties header `FX_PictureStatic (Static)`; t10-12): Type Static; Name FX_PictureStatic; **Size `20; 9`** (Width 20, Height 9, Lock Size False); **Location `10.5; 21.5`** (Top 10.5, Left 21.5); **Binding Type Property**; **Binding `object.FX_Picture`**; **No Colon `True`**.
  - FX_RefreshButton (reselected; t10-12 area): Name FX_RefreshButton; Type PushButton; **Caption `FX_sImport`**; **Primary `FX_Test`** (unchanged); **Size `14.25; 1.89`**; **Location `12.1666666666667; 5.25`** (Top 12.166666666666666, Left 5.25). Geometry and Name unchanged.
  - Canvas caption: the recovered button canvas shows **`Import`** (t10-05; button name `Import` in the accessibility tree). The caption resolves to the string value after the Save and reopen.
  - Picture Static on canvas: the Static box is drawn at the expected position, with a **broken-image glyph** at its top-left (t10-05, t10-10). The cause is not established (empty binary value / no image; not investigated).
- **Handlers (recovered, t10-15, t10-17):** FX_ImportPicture group with one row, sequence 0, Binary Value Action, Disabled false (before this turn's configuration). FX_Test group with two rows: sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (false); sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` (false). Both unchanged.

## String check (STEP 2, read only, t10-13)

- The Caption ellipsis of FX_RefreshButton opened the String dialog: Name `FX_sImport`; String Value `Import`; Description empty; Version `User version for user an…`. The dialog offers only **OK** and **Help** (no Cancel). No field was edited. OK was clicked once to dismiss it (count 1 String OK). Afterwards Save and Undo remained **disabled** (t10-14). The string was not modified.

## Selector check and configuration (STEP 3 and 4)

- Opened the FX_ImportPicture sequence-0 action: selected the row (sequence cell); the Event To Handle property-pane **Expand** control (view only) showed Response > Type `Binary Value Action`, Parameters (Open Edit Property Dialog), Edit in-line Script. Parameters ellipsis opened `Event Handler Parameters` / `Edit Binary Value Action` (t10-18).
- **Component Bound to Binary Value Property (native selector), first inspection:** the list is fresh (no FX_VarTestEdit). It contains: FormCollectionGrid, FX_RefreshButton, FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol, FX_ItemStatic, FX_ItemEdit, FX_DescriptionStatic, FX_DescriptionEdit, FX_CostStatic, FX_CostEdit, FX_UMStatic, FX_UMCombobox, **FX_PictureStatic** (last entry). **FX_PictureStatic is offered by its exact name**, so the brief's STEP 4 applies and the dialog was not cancelled.
- Selected `FX_PictureStatic` from the list (t10-19). Selected `Action` = **Import** from the Action list (options included Import, Export, Delete, ...) (t10-20). Silent unchecked (unchanged); Filename empty (unchanged); General fields unchanged (Error/Success message empty; Only When Current Collection Is `<all collections>`; Only When Platform Is empty; Keep empty; Ignore Failure, Message as Toast?, Disabled unchecked). Both target values verified visibly before OK.
- **OK clicked once** (count 1). Dialog closed (t10-21). Grid Response Parameters now reads `ACTION(Import) COMPONENT(FX_PictureStatic)`. Form is **dirty** (Save and Undo enabled), as expected.
- **Reselect verification (t10-22):** one row in FX_ImportPicture: sequence 0, Response Type `Binary Value Action`, Disabled `false`, Response Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)`. Event To Handle: Event FX_ImportPicture, Sequence 0, Disabled False; Response Type `Binary Value Action`; Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)`. Exactly one action. FX_Test: still two rows (sequence 0 Prompt, sequence 1 Set Values, both unchanged).
- **Primary:** FX_RefreshButton Primary still reads `FX_Test` (readback after the action commit, t10-22 area). Not changed (per brief).

## Conditional close/reopen decision (brief rule)

- The brief's conditional close/reopen applies only if FX_PictureStatic was absent from the selector. It was present on the first inspection, so the conditional reopen was **not needed** and was not performed. The only close/reopen this turn is the authorized STEP 1 discard and recovery (count 1 each).

## Stale selector (T8 observation) — status

- T8 (pre-Save, before any close): the selector offered FX_VarTestEdit (deleted in T5) and omitted FX_PictureStatic.
- T10 (after the T9 intermediate Save, the discard close and the reopen): the selector offers FX_PictureStatic and no longer offers FX_VarTestEdit.
- Observed: the list was current after the close/reopen. **Not tested:** whether the Save alone refreshes the list (T9 did not open the selector after its Save). Cause inference (reopen refreshes the component list) is an inference, not verified.

## Counts (T10, exact)

- Browser tab lists: 1 (start, before any selection). Tab selects: 1 (index 1, Designer; succeeded).
- Browser snapshots: 9 total (7 untargeted: t10-01, t10-06, t10-07, t10-08, t10-14, t10-15, t10-22; 2 targeted to a tabpanel: t10-09, t10-11).
- Finds: 27.
- Element clicks: 23. Of these: Form-tab close × 1; discard **No** 1; Form menu 1; recent-list FX_Items 1 (reopen); Details "Expand Panel" 1; tab selections (Components 2, Event Handlers 1, Form 1); grid Expand (Components 1; Event Handlers 1); FX_PictureStatic row selection 1; FX_RefreshButton row selection 1; Caption ellipsis 1; String OK 1; sequence-cell selections 2; property-pane Expand 1; Parameters ellipsis 1; selector Open 1; selector option FX_PictureStatic 1; Action Open 1; Action option Import 1; Parameters OK 1; Form tab selection (readback) 1.
- Keyboard: 0. Mouse wheel/move: 0. Typing: 0. Escape: 0. Enter: 0.
- Screenshots (PNG): 15.
- Snapshot YAML files: 9.
- **Designer Save: 0 in T10** (intermediate Save from T9 remains 1; final Save 0 cumulative).
- Form close: 1 (authorized discard). Form reopen: 1 (recent-forms route). Discard "No" clicks: 1. Yes clicks: 0. Cancel clicks: 0.
- Parameters dialog opened: 1. Action Type committed (Import): 1. Component target committed (FX_PictureStatic): 1. Silent/Filename/General changed: 0. Parameters OK: 1. Additional actions created: 0.
- Event handler groups created: 0. Components added/deleted: 0. Toolbox drops: 0. Strings created or edited: 0 (String dialog read; OK without edits: 1).
- Primary change: 0. Form width edits: 0. Form-level property edits: 0 (Form tab selected for read only; Splitter dropdown not opened this turn).
- Delete Form Definition clicks: 0. Trash clicks: 0. Metadata unloads: 0. Runtime actions: 0. Import activations: 0. Checkout operations: 0. Browser JavaScript/console/network: 0.
- Designer view changes: the Details panel was collapsed after the reopen; **Expand Panel** restored it (layout toggle, not a Design View Size, zoom or preference change). Components and Event Handlers grid Expand controls were used for view only.

## Cumulative audit (T1–T10)

- Tab lists: 10 recorded (T1–T7: 7; T8: 1 per carried summary, visible post-compaction count 0; T9: 1; T10: 1). Tab selects: 10 (same basis).
- Components deleted: 1 (T5, FX_VarTestEdit). Components added: 1 (T6, FX_PictureStatic). Toolbox drops: 1 (T6).
- Strings created: 1 (T4, FX_sImport = Import). String dialogs read: 2 (T4, T10).
- Event groups created: 1 (T7, FX_ImportPicture). Event action rows created: 1 (T7).
- Action configuration committed: Response Type `Binary Value Action` (T8; persisted by the T9 Save); Action Type `Import` and component `FX_PictureStatic` (T10, one OK; not yet saved).
- Designer Save: 1 (T9, intermediate, succeeded; native toast "Form [FX_Items] and global object(s) were saved."). **Final Save: 0.**
- Form close/reopen: 1 close + 1 reopen (T10, authorized discard of the unintended post-Save dirty state; the saved definition was recovered).
- Form width edits: 0. Metadata unloads: 0. Runtime imports: 0. Delete Form Definition clicks: 0. Trash clicks: 1 (T5).

## Unintended post-Save dirty state (T9) — resolution

- After the T9 intermediate Save, a Form-level Splitter/Size Width focus event (cause not established; presumed a same-value commit on blur) made the Form dirty. The operator-authorized discard (No) was used. After the reopen, the Form-level Layout values (Size 69; 21, Splitter Vertical, Position 11) match the pre-discard values, and the Form was clean (Save disabled). The discard therefore did not discard any intended change; the intended changes present after T9 (caption, Static, binding, No Colon, FX_ImportPicture Response Type) were all recovered.

## What each decisive screenshot shows and does NOT prove

- `t10-03`: the native prompt "Form FX_Items has changed / Do you want to save the form definition?" with Yes, No, Cancel. Proves the prompt text and buttons; does not prove the choice made (shown by `t10-04`).
- `t10-04`: the Form closed, Save disabled, no Form tab. Proves the discard closed the Form; does not show the saved content.
- `t10-05`: reopened FX_Items (identity in the title and the footer ScopeType User, ScopeName anton.ramos@3mworks.com.ph); Save disabled; Import button on the canvas; a picture Static with a broken-image glyph. Proves identity, clean state and the caption; does not prove the Static's Size/Location/binding (checked by readback, not by this picture).
- `t10-12`: FX_PictureStatic selected with Static type in the Properties header; the readbacks above come from the accessibility tree, not from this image.
- `t10-13`: String dialog with Name FX_sImport and String Value Import. Proves the string value read; does not prove the stored value beyond the dialog.
- `t10-18`: the selector list with FX_PictureStatic at the end of the list. The image shows the top of the list only; the FX_PictureStatic entry was confirmed by accessibility ref e4460, not by the image.
- `t10-19` / `t10-20`: component and action values before OK. Prove the selected values before the commit.
- `t10-21`: after OK, the grid Response Parameters `ACTION(Import) COMPONENT(FX_PictureSt…`; Save and Undo enabled. Proves the commit and the dirty state.
- `t10-23`: final dirty state, FX_RefreshButton selected, FX_ImportPicture row selected. Proves the open dirty state; does not prove that the value is saved (it is not saved).
- `t10-24`: Form tab Layout: Splitter Vertical, Splitter Position 11 visible; Size and Unit read by accessibility (69; 21, Char).

## Acceptance checks (T10 scope)

- AC-1 (reopen from saved definition, identity, clean, discard confirmation): met for the reopened Form (identity, User scope, Save disabled, 17 components, FX_VarTestEdit absent, FX_RefreshButton Caption FX_sImport and Primary FX_Test, no default-named Static). The T1 discard confirmation text (FX_Refresh) is superseded by the T4 caption assignment and is not re-checked here.
- AC-2 (string value Import read without change): met (String dialog: `Import`), with the caveat that the dialog was closed with OK (no edits).
- AC-5 (Caption resolves to Import after save and reopen): **observed** (button caption `Import` on the reopened canvas).
- AC-6 (FX_PictureStatic Size/Location/Binding/No Colon after reselect): met (readbacks above).
- AC-7 (exactly one FX_ImportPicture action with Binary Value Action, Import, FX_PictureStatic): **met in the open, unsaved Designer** (reselect readback). Not yet proven in the saved definition (no final Save).
- AC-8 (Primary to FX_ImportPicture): **not met; not in T10 scope** (Primary remains FX_Test).
- AC-9 to AC-13: not reached in T10 (final Save, final close/reopen, runtime check, and the final report remain).

## Evidence files (T10, worker-written, under evidence/EXP-062-R4/)

- `T10-discard-recovery-and-action-configuration-report.md` (this report)
- Snapshots (YAML): `t10-01-preflight-snapshot.yml`, `t10-06-reopened-snapshot.yml`, `t10-07-details-expanded-snapshot.yml`, `t10-08-recovered-components-snapshot.yml`, `t10-09-recovered-components-tabpanel.yml`, `t10-11-recovered-components-expanded-tree.yml`, `t10-14-after-string-ok-state.yml`, `t10-15-recovered-event-handlers.yml`, `t10-22-reselect-action-readback.yml`
- Screenshots (PNG): `t10-02-preclose-dirty-state.png`, `t10-03-after-close-click.png`, `t10-04-after-no-discard.png`, `t10-05-reopened-saved-form.png`, `t10-10-recovered-components-expanded.png`, `t10-12-recovered-picturestatic-selected.png`, `t10-13-string-dialog-readonly.png`, `t10-16-recovered-event-handlers-screenshot.png`, `t10-17-recovered-handlers-expanded.png`, `t10-18-selector-lists-picturestatic.png`, `t10-19-component-selected-picturestatic.png`, `t10-20-action-import-and-component-before-ok.png`, `t10-21-after-parameters-ok.png`, `t10-23-final-state-dirty-open.png`, `t10-24-form-tab-layout-readback.png`

## Knowledge state

- Discard prompt "Form FX_Items has changed / Do you want to save the form definition?" with Yes/No/Cancel: observed.
- Close with No: closes without saving; reopen from the Form menu recent list recovers the saved definition: observed.
- Saved definition matches T9 intermediate readbacks (17 components, FX_PictureStatic geometry/binding/No Colon, FX_RefreshButton caption/primary/geometry, Form Layout): observed.
- Canvas caption resolves to Import after the Save and reopen: observed.
- Selector offers FX_PictureStatic after the close/reopen and omits FX_VarTestEdit: observed. Cause (reopen vs Save) unresolved.
- Action Type Import and component FX_PictureStatic committed on the existing sequence-0 action (unsaved): observed in the open Designer.
- Broken-image glyph in the picture Static on canvas: observed; cause unresolved.
- Nothing is replay_verified.

## Open questions / next permitted action

- The Form is dirty and open with Save enabled, as the brief requires. The final Save, the Primary reassignment (FX_RefreshButton Primary to FX_ImportPicture), the pre-Save comparison, the final close/reopen and the runtime check are **not** performed (outside T10). They need explicit authorization.
- Unresolved: whether the Save alone refreshes the selector; the broken-image glyph cause; string persistence beyond this session.
