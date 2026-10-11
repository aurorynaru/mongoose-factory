# EXP-058 T1 — read-only preflight and pre-mutation baseline (AC-1, AC-2)

Run `R-20261011-175814-gBsz`, experiment EXP-058, cycle 0, task T1.
Worker session `58915b7d-301b-463b-b9b2-c6b7146c1118`; task_message_id `ddeaf1f2-174c-4346-a5a0-6b29cbc93192`.
Date: 2026-10-11. Mode: LEARNING MODE. Editing scope: User (footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.
Bounded instruction: read-only preflight and baseline only. No Mongoose metadata mutation, no runtime activation, no Save, no Form open or close.

## 0. Outcome

- **AC-1 (preflight): passed, with limits.** Both inherited tabs identified; exact Form identity confirmed; clean Save-disabled Designer; no session challenge, no error dialog.
- **AC-2 (pre-mutation baseline): captured, with limits.** One `StdFormRefreshCompleted` group with two enabled actions, correct parameters, Initial Command Refresh, FX_RefreshButton Primary `StdFormRefresh`, FX_VarTestEdit bound to `variables.FX_VarTest`, FX_VarTest Form - Temporary, and no FX_Test handler. The 17-entry inventory is captured. Limits are in §6.
- **No mutation performed.** Next step (not started): the migration, which requires operator approval (§8).

## 1. Reading performed (before any browser operation)

- `AGENTS.md`: read in full (LEARNING MODE; FX_ artifacts only; evidence and screenshot rules; no browser evaluation).
- `docs/mongoose/transcripts/hello-world-pt3.md`, Section 8 "Move handlers to a custom Test event — 07:39–08:31" (lines 228–243). Agent boundary (line 243): changing the event names changes the trigger; both original handlers must be verified as moved before treating a custom-event test as isolated. Section 7 agent boundary (line 226): tutorial runtime observation does not prove definition persistence; treat definition serialization, runtime evaluation, and reopened visibility as separate questions.
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md`: read in full. Key carry-forward facts: FX_VarTest visible as Form - Temporary after the EXP-056 Save and reopen; Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`; runtime value box shows the selected row's Description only after refresh (eggs-row selection did not change it); last runtime state eggs-row current with value `45 pound iron`.
- `evidence/EXP-057/T2D-variables-verification-report.md`: read (first 40 lines) for the Variables method.
- `evidence/EXP-056/T10-final-blocked-report.md`: read (first 60 lines) for the EXP-056 outcome and the unresolved Data Source and FX_VarTest-absence discrepancies.
- `experiments/EXP-055-…`: **only the directory index was inventoried** (`evidence/EXP-055/` file list). Its T-reports were not opened in this task. This is a gap in the review, recorded here rather than papered over.
- Note: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md` did not exist in the working tree at the start of T1 (glob `**/*EXP-058*` returned nothing). This T1 creates it.

## 2. Browser identity and tab handling

- `browser_tabs list` (before any selection): tab 0 Designer (current), `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/default.aspx`; tab 1 Mongoose portal (`mingle-portal.se1.inforcloudsuite.com … favoriteContext=FX_Items`).
- `select 0` succeeded (Designer). `select 1` succeeded (runtime). `select 0` succeeded again (Designer, for the grid screenshots). Tab selections: 3; tab lists: 1.

## 3. AC-1 — preflight (inherited state, read-only)

### 3.1 Designer (tab 0)

| Check | Observed | Evidence |
| --- | --- | --- |
| One Form tab, selected, heading | `FX_Items` (single tab `closable FX_Items`) | `t1-snapshot-00-designer-tab0-fresh-pre-mutation.md` (lines ~212–214) |
| Form Properties > Design > Name | `FX_Items` | snapshot-00 (`e699`); `t1-01` |
| Version | `User version for user anton.ramos@3mworks.com.ph` | snapshot-00 (`e730`); `t1-01` |
| Footer scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot-00 (`e760`); `t1-01` (bottom line) |
| Save, Regenerate Form, Undo, Redo | all `[disabled]` | snapshot-00 (`e15`, `e16`, `e49`, `e50`); snapshot-24 (after the Cancels) |
| Dialogs | none open at start, after each Cancel, and at the end of T1 | snapshot-00, snapshot-21, snapshot-24 |
| Session challenge / error dialog | none | all Designer snapshots |
| Designer console | 3 errors, 0 warnings (same count as EXP-057; source unidentified) | every Designer snapshot header |

Screenshots: `evidence/EXP-058/t1-01-designer-pre-mutation-inherited-user-scope.png` (shows Form properties and FX_VarTest selected under Form - Temporary, footer scope, Save greyed).

### 3.2 Runtime (tab 1, inherited, not acted on)

| Check | Observed | Evidence |
| --- | --- | --- |
| Form tab | `FX_Items` selected; `Close Panel FX_Items` present | `t1-snapshot-26-runtime-tab1-fresh-inherited-preflight.md` |
| Records (three) | dumbbell / `45 pound iron` / `45.00` / `EA`; eggs / `cage free` / `6.99` / `DZ`; guitar / `natural acoustic` / `129.99` / `EA` | snapshot-26 (`f1e158`–`f1e186`) |
| Current row | **eggs** (`gridcell "eggs" [active] [selected]`; Item `eggs`, Description `cage free`, Cost `6.99`, UoM `DZ`; status `Item (Object 2 of 3)`). Matches the EXP-057 T8 final state, so the "last-known selected item" is visibly confirmed as eggs | snapshot-26; `t1-08` (status bar shows `Item (Object 2 of 3)`) |
| FX_Refresh button | rendered (`f1e190`) | snapshot-26 |
| Unnamed value box (right of FX_Refresh) | textbox `45 pound iron` (no accessible name; identity inferred by position, as in EXP-057) | snapshot-26 (`f1e195`); `t1-08` |
| Save | disabled | snapshot-26 (`f1e28`); `t1-08` |
| Dialogs / prompts | none | snapshot-26 |
| Runtime console | 0 errors, 2 warnings | snapshot-26 header |

Screenshot: `evidence/EXP-058/t1-08-runtime-tab1-inherited-fx-items-not-acted.png`. The runtime was not clicked, typed in, or refreshed. The DevTools Log Messages panel shows entries from 07:08 (inherited; not analysed).

## 4. AC-2 — pre-mutation baseline (Designer)

### 4.1 Initial Command and Form-level properties

- Behavior > Initial Command: `Refresh` (snapshot-00 `e837`; `t1-01` shows `Refresh` in Initial Command).
- Form Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; Is Master True; Form Type Normal; Device Type Default; Size `69; 21`; Splitter Vertical; Splitter Position 11; Pane 0 Scroll Bars Never; Pane 1 Scroll Bars As Needed. (snapshot-00.)

### 4.2 StdFormRefreshCompleted (Event Handlers tab, view-only; `t1-snapshot-01`, `t1-09`)

| Group | Seq | Response Type | Disabled | Response Parameters (grid) |
| --- | --- | --- | --- | --- |
| `StdFormRefreshCompleted` (one group) | 0 | Prompt | false | `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` |
| | 1 | Set Values | false | `SETVARVALUES(FX_VarTest=P(FX_Description))` |

- No other handler group is listed. **No FX_Test group exists** (conflicting handler check: none).
- Prompt action properties (`t1-snapshot-19`): Event To Handle > Event `StdFormRefreshCompleted`; Type `Prompt`; Parameters `PROMPT(Hello World) …`.
- Prompt Parameters readback (native dialog `Event Handler Parameters`, `t1-snapshot-20`, `t1-06`): Message Text `Hello World`; OK checked (the only checked response); Yes/No/Abort/Retry/Ignore/Cancel unchecked; Ignore Failure, Message as Toast?, Disabled, Stop-if unchecked. Closed with **Cancel** (`t1-snapshot-21`: dialog closed, Save disabled, grid unchanged).
- Set Values action properties (`t1-snapshot-22`): Event To Handle > Event `StdFormRefreshCompleted`; Sequence 1; Disabled False; Type `Set Values`; Parameters `SETVARVALUES(FX_VarTest=P(FX_Description))`.
- Set Values Parameters readback (native dialog, `t1-snapshot-23`, `t1-07`): Variables `FX_VarTest=P(FX_Description)`; Components blank; Properties blank. Closed with **Cancel** (`t1-snapshot-24`: no dialog, Save disabled).
- Screenshot of the handler grid (`t1-09`): one `StdFormRefreshCompleted` group, rows 0 Prompt and 1 Set Values, both `false`; row 1 selected, Event To Handle showing `StdFormRefreshCompleted`, Sequence 1, Disabled False. The Properties header still reads `FX_UMCombobox (EnhancedCombo)` (a component-context label carried over from the Components selection; limitation).

### 4.3 FX_VarTest definition (Variables tab, view-only; `t1-snapshot-00` and `t1-snapshot-25`)

- Form - Persistent: `InitialCommand` only (Form-persistent category).
- **Form - Temporary: `FX_VarTest`** (`t1-snapshot-25` line ~302).
- Attributes: Name `FX_VarTest`; Description blank; Value `~LIT~()` (displayed; not edited); Persistent `False`; Global `False`. Both readbacks agree (snapshot-00 and snapshot-25; screenshot `t1-01`).
- Global groups are virtualised; not enumerated (as in EXP-057).

### 4.4 Components (17 entries; Components tab, view-only; `t1-snapshot-02`, `t1-10`)

Grid columns read from the accessibility snapshot. Pane (00) and Pane (01) row properties were not opened in T1 (EXP-056 and EXP-057 recorded them as unavailable).

| # | Name | Type | Data Source (grid) | Pane | Container | Tab | Event to generate | Properties: Binding Type / Binding | Location | Size | Tab Order | Other events |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pane (00) | Pane | (blank) | — | — | — | — | not read | — | — | — | — |
| 2 | FormCollectionGrid | Grid | `objects` | 0 | (blank) | 0 | (blank) | Primary Collection Grid / `objects` | 0; 0 | 11; 21 | 0 | blank; drag/drop 0/0 |
| 3 | FX_ItemGridCol | GridColumn | `object.FX_Item` | 0 | FormCollectionGrid | 1 | (blank) | Property / `object.FX_Item` | 0; 0 | 10; 0 | 1 | blank; 0/0 |
| 4 | FX_DescriptionGridCol | GridColumn | `object.FX_Description` | 0 | FormCollectionGrid | 2 | (blank) | Property / `object.FX_Description` | 0; 0 | 10; 0 | 2 | blank; 0/0 |
| 5 | FX_CostGridCol | GridColumn | `object.FX_Cost` | 0 | FormCollectionGrid | 3 | (blank) | Property / `object.FX_Cost` | 0; 0 | 10; 0 | 3 | blank; 0/0 |
| 6 | FX_UMGridCol | GridColumn | `object.FX_UM` | 0 | FormCollectionGrid | 4 | (blank) | Property / `object.FX_UM` | 0; 0 | 10; 0 | 4 | blank; 0/0 |
| 7 | Pane (01) | Pane | (blank) | — | — | — | — | not read | — | — | — | — |
| 8 | FX_ItemStatic | Static | (blank) | 1 | (blank) | 5 | (blank) | None / (blank); Caption `FX_sItem` | 1; 3 | 20; 1 | 5 | blank |
| 9 | FX_ItemEdit | Edit | `object.FX_Item` | 1 | (blank) | 6 | (blank) | Property / `object.FX_Item`; Caption `C(FX_ItemStatic)` | 1; 23.75 | 37.05; 2 | 6 | blank; 0/0 |
| 10 | FX_DescriptionStatic | Static | (blank) | 1 | (blank) | 7 | (blank) | None / (blank); Caption `FX_sDescription` | 3.25; 3 | 20; 1 | 7 | blank |
| 11 | FX_DescriptionEdit | Edit | `object.FX_Description` | 1 | (blank) | 8 | (blank) | Property / `object.FX_Description`; Caption `C(FX_DescriptionStatic)` | 3.25; 23.75 | 37.05; 2 | 8 | Primary blank; Data Change/Lose/Gain blank; drag/drop 0/0 |
| 12 | FX_CostStatic | Static | (blank) | 1 | (blank) | 9 | (blank) | None / (blank); Caption `FX_sCost` | 5.5; 3 | 20; 1 | 9 | blank |
| 13 | FX_CostEdit | Edit | `object.FX_Cost` | 1 | (blank) | 10 | (blank) | Property / `object.FX_Cost`; Caption `C(FX_CostStatic)` | 5.5; 23.75 | 37.05; 2 | 10 | blank; 0/0 |
| 14 | FX_UMStatic | Static | (blank) | 1 | (blank) | 11 | (blank) | None / (blank); Caption `FX_sUM` | 7.75; 3 | 20; 1 | 11 | blank |
| 15 | FX_UMCombobox | ComboBox | `object.FX_UM` | 1 | (blank) | 12 | (blank) | Property / `object.FX_UM`; Caption `C(FX_UMStatic)` | 7.75; 23.75 | 37.25; 2.15 | 12 | blank; 0/0 |
| 16 | FX_RefreshButton | PushButton | (blank) | 1 | (blank) | 0 | **StdFormRefresh** | None / (blank); Caption `FX_Refresh` | 12.1666666666667; 5.25 | 14.25; 1.89 | 0 | Data Change/Lose/Gain blank; drag/drop 0/0; Primary `StdFormRefresh` |
| 17 | FX_VarTestEdit | Edit | `variables.FX_VarTest` | 1 | (blank) | 0 | (blank) | **Variable / `variables.FX_VarTest`**; Caption blank | 12.7222222222222; 30.25 | 37.05; 2 | 0 | blank; drag/drop 0/0 |

Notes on the table:
- Pane column: `0` for the FormCollectionGrid column children (rows 3–6), `1` for the Pane (01) children (rows 8–17). Container reads `FormCollectionGrid` for the four GridColumn rows and is blank elsewhere. The grid's `Enabled When`, `Visible When`, `Required When` and `Component Class` columns were blank for all 17 rows as read.
- FX_VarTestEdit's **Properties-panel "Data Source" row is blank** while the grid's Data Source column shows `variables.FX_VarTest` and the Binding row shows `variables.FX_VarTest`. This is the EXP-056/057 discrepancy in a different form (EXP-056 recorded the grid cell blank; EXP-057 and now T1 record it populated). Cause unresolved; not repaired.
- The Pane column for FX_RefreshButton reads `1` (grid), and Tab `0`.

### 4.5 Explicit component readbacks (Component tab, view-only; `t1-snapshot-03`–`-05`; `t1-02`–`t1-05`)

**FX_RefreshButton** (`t1-02`):
- Name `FX_RefreshButton`; Type PushButton; From Device Master True; Caption `FX_Refresh`.
- Binding Type `None`; Binding blank.
- Events: **Primary `StdFormRefresh`**; Data Change, Lose Focus, Gain Focus blank; Drag From 0 event(s); Drop On 0 event(s).
- Size `14.25; 1.89`; Location `12.1666666666667; 5.25`; Tab Order `0`.
- Other: Foreground `#000000`; Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Auto Complete False; Required False; To Be Determined False; Unit Char; Upper or Lower Case Mixed; Enabled When / Visible When blank; Help Context ID 0; Component Class blank.

**FX_DescriptionEdit** (`t1-03`):
- Name `FX_DescriptionEdit`; Type Edit; Caption `C(FX_DescriptionStatic)`.
- Binding Type `Property`; Binding `object.FX_Description`.
- Events: Primary blank; Data Change / Lose / Gain blank; Drag From 0; Drop On 0.
- Size `37.05; 2`; Location `3.25; 23.75`; Tab Order `8`.
- Other: Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Required False.

**FX_VarTestEdit** (`t1-04`, `t1-05`):
- Name `FX_VarTestEdit`; Type Edit; Caption blank.
- Binding Type `Variable`; Binding `variables.FX_VarTest`; Data Source row blank (see §4.4).
- Events: Primary blank; Data Change / Lose / Gain blank; Drag From 0; Drop On 0.
- Size `37.05; 2`; Location `12.7222222222222; 30.25`; Tab Order `0`.
- Other: Read-Only False; Tab Read-Only False; Hidden False; No Tab Stop False; Required False.

### 4.6 Form Temporary variable and Designer clean state after T1

- After all reads, the Designer shows Save, Regenerate Form, Undo, Redo `[disabled]`; no dialog (`t1-snapshot-24`). The Variables tab was last viewed (`t1-snapshot-25`).

## 5. Action audit (T1)

| Action | Count |
| --- | --- |
| Tab lists (`browser_tabs list`) | 1 |
| Tab selects (0, 1, 0) | 3 (all succeeded) |
| Designer view-only tab clicks (Event Handlers ×3, Components ×2, Variables ×1) | 6 |
| Component row selections (single click, Components grid) | 15 |
| Handler row selections (Prompt, Set Values) | 2 |
| Native parameter dialogs opened | 2 |
| Native parameter dialogs closed with **Cancel** | 2 (no OK) |
| Designer clicks total (tabs + row selections + dialog opens + Cancels) | 27 |
| Designer Save / Regenerate / Undo / Redo | 0 |
| Metadata-changing actions (add, delete, copy, reorder, edit, handler or component change) | 0 |
| Typing into any field | 0 |
| Key presses | 0 |
| Runtime clicks, activations, dismissals, typing | 0 |
| Designer Form open / close / reopen | 0 |
| Browser-reference errors | 0 |
| Accessibility snapshots saved (`t1-snapshot-00` to `-28`) | 29 |
| Screenshots saved (`t1-01` to `t1-10`) | 10 |
| Diagnostics, User Preferences, cache, FormSync, SQL, scripts, browser JavaScript | 0 |

## 6. Limitations

1. **Pane (00) and Pane (01)** property rows were not opened in T1; their Binding, Location, Size and events are unread here. EXP-056 and EXP-057 recorded them as unavailable (no Component property rows). Not inferred.
2. **Components grid screenshot** (`t1-10`) shows only the lower rows, because the grid was scrolled; the top rows (Pane 00 through FX_DescriptionStatic) are not visible in any screenshot. The full 17-row inventory is established by the accessibility snapshot `t1-snapshot-02`, not the image.
3. **Properties Data Source row** for FX_VarTestEdit is blank while the grid and Binding show `variables.FX_VarTest` (see §4.4). Unresolved.
4. **Value box identity** on the runtime (unnamed textbox right of FX_Refresh) remains inferred by position and Designer definition; the runtime accessibility tree gives no name.
5. **Event Handlers screenshot** (`t1-09`): the Properties header shows `FX_UMCombobox (EnhancedCombo)`, a stale component-context label; the handler readback itself is the Event To Handle block.
6. **Inherited runtime** state is the EXP-057 T8 final instance (eggs current, value `45 pound iron`). It is not the EXP-057 T1 instance. The LOG at 07:08 is not analysed.
7. **Repository confinement baseline**: this worker has no shell and cannot run `git status` itself. The harness computes repository status from before/after Git state. This report claims only the files it wrote.
8. **EXP-055** T-reports not opened (see §1).
9. **Designer console**: 3 errors, source unidentified (not investigated; no diagnostics used).

## 7. Discrepancies and unresolved items (not repaired)

- FX_VarTestEdit Properties Data Source row blank vs grid `variables.FX_VarTest` (new precision on the EXP-056 blank-cell observation).
- EXP-056 recorded `FX_VarTest` absent; EXP-057 and T1 record it present as Form - Temporary (cause unresolved).
- Runtime value box did not follow the eggs row in EXP-057 T8 (unresolved).
- Pane (00) and Pane (01) properties unread in T1 (see §6.1).

## 8. Proposed next permitted step (NOT STARTED; requires operator approval)

**T2 — the single migration plus the one Designer Save.** The operator must approve this before it runs, because it is the first metadata mutation of EXP-058.

Planned sequence (from the brief; the actual route is confirmed at execution):
1. Select the sequence 0 Prompt row in the Event Handlers grid; change Event To Handle > Event from `StdFormRefreshCompleted` to `FX_Test` (use the combobox dropdown if `FX_Test` is offered; otherwise the documented editable entry). Capture the intermediate state and whether `FX_Test` appeared automatically.
2. Repeat for sequence 1 Set Values (same native route).
3. Verify before Save: one `FX_Test` group containing both original actions in order; no `StdFormRefreshCompleted` group remains; parameters, sequence, and enabled states unchanged.
4. Select FX_RefreshButton; change only Events > Primary from `StdFormRefresh` to `FX_Test`.
5. Full before-Save comparison against §4 (Initial Command, all 17 components, FX_VarTestEdit binding and geometry, FX_VarTest definition, unrelated Form properties).
6. **One** ordinary Designer Save. Verify clean state with Save disabled.

Operator-decision points before T2:
- Approve the migration mutation (two Event changes, one Primary change, one Save).
- Confirm that the Pane (00)/(01) property readbacks may be skipped in the pre-Save comparison (recorded as limitation) or should be attempted in T2 as read-only steps.

## 9. Knowledge state (T1)

| Finding | State |
| --- | --- |
| Designer identity (Name FX_Items, User scope, ScopeName anton.ramos@3mworks.com.ph), clean Save-disabled state | observed (single session) |
| Runtime tab inherited: records, eggs current, value box `45 pound iron`, Save disabled | observed (single session) |
| Two original handler actions in one StdFormRefreshCompleted group, enabled, with parameters as listed | observed (single session) |
| No FX_Test handler group before migration | observed (single session) |
| FX_RefreshButton Primary `StdFormRefresh`; FX_VarTestEdit binding `variables.FX_VarTest`; FX_VarTest Form - Temporary | observed (single session) |
| 17-entry component inventory and grid-level properties | observed (single session) |
| Explicit property readbacks for FX_RefreshButton, FX_DescriptionEdit, FX_VarTestEdit | observed (single session) |
| Pane (00)/(01) property values | not observed (limitation) |
| Data Source discrepancy (grid vs Properties row) | observed; cause unresolved |
| Replay-verified findings | none |

## 10. Evidence files written (T1)

Under `evidence/EXP-058/`:
- Reports: `T1-preflight-baseline-report.md` (this file).
- Snapshots (accessibility, saved): `t1-snapshot-00` … `t1-snapshot-28` (29 files; pre-run and post-run Designer and runtime states, component and handler readbacks, dialogs).
- Screenshots: `t1-01-designer-pre-mutation-inherited-user-scope.png`; `t1-02-fx-refreshbutton-selected-component-properties.png`; `t1-03-fx-descriptionedit-selected-component-properties.png`; `t1-04-fx-vartestedit-selected-component-properties-binding.png`; `t1-05-fx-vartestedit-selected-component-properties-binding-tab.png`; `t1-06-prompt-parameters-dialog-readback-before-cancel.png`; `t1-07-set-values-parameters-dialog-readback-before-cancel.png`; `t1-08-runtime-tab1-inherited-fx-items-not-acted.png`; `t1-09-event-handlers-grid-one-group-two-actions-baseline.png`; `t1-10-components-grid-17-entries-baseline.png`.
- Experiment record created: `experiments/EXP-058-hello-world-part-3-section-8-fx-items-custom-fx-te.md`.

No Mongoose artifact was modified. No file outside `experiments/EXP-058-…md` and `evidence/EXP-058/` was written by this worker.
