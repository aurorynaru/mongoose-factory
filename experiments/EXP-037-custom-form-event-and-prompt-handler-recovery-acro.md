# EXP-037 — Custom Form Event and Prompt Handler Recovery Across Save and Close/Reopen

Status: **T1 complete (repository-only review; zero browser calls; no Mongoose mutation). T2 complete (read-only browser preflight; one Designer launch; scope confirmed User; target Form not open). T3 complete (target Form opened via the Form-menu recent-forms entry; Form version and User footer identified; Button baseline captured; Button selected only; no mutation).** T4 complete (read-only inventory: Button Events > Primary **blank**; Form Event Handlers list **empty** (0 visible rows); `FX_ButtonPromptEvent01` not present; no conflicting assignment; Form Layout read non-editing; Form clean; no handler opened; no mutation). T5 complete (custom handler configured in the unsaved Form definition: `FX_ButtonPromptEvent01`, one action at sequence 0, Type Prompt, message `Factory Test Prompt`, OK-only response with no generated event; **no Primary assignment; no Designer Save; no close/reopen; no runtime activation**). T6 complete (Button `FX_SingleButton01` Events > Primary assigned exactly `FX_ButtonPromptEvent01` by picker selection and one Enter commit; verified not in an editor; handler list re-read: one event, one Prompt action, literal message; Name/Caption/Type unchanged; Save enabled; **no Designer Save**). The complete definition is ready for a single ordinary Save in a separately authorized task. **T7 complete:** one ordinary Designer Save performed (one `SaveChanges` POST, `Success: true`); post-Save Save/Regenerate/Undo disabled; Designer visibly clean; post-Save reinspection shows the single Prompt handler, Primary `FX_ButtonPromptEvent01`, and Button Name/Caption/Type/component count unchanged. **T9 complete:** one supported recent-forms reopen of `FX_SingleButtonLab01`; recovered custom event `FX_ButtonPromptEvent01` (one sequence-0 Prompt action, exact parameters, literal message `Factory Test Prompt`), Button Primary `FX_ButtonPromptEvent01`, and Button Name/Caption/Type/component count unchanged; Designer clean and in User scope. Observed Form-definition recovery across ordinary close/reopen only. T8 complete: one ordinary close of the `FX_SingleButtonLab01` Form tab (one click on its own closable control); the Form tab disappeared; no unsaved-changes prompt or error; Designer still responsive in User scope; console 0 errors. (The reopen recorded in T9 above is the only reopen; this sentence supersedes the earlier "reopen not yet performed" wording.) **T10 complete:** optional runtime gate not passed (the Web Client toolbar `Open` control timed out; no Form opened; no Button activation); AC-9 recorded as not_applicable. **T11 complete:** repository-only audit and acceptance matrix written (`evidence/EXP-037/t11-final-audit-and-evidence-matrix.md`); see the T11 section below for the recommendation and open items.
Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 0 · Task T1
Mode: LEARNING MODE. One existing User-scoped Form, one existing native Button, one custom form event with one Prompt handler action, one Primary-event assignment, one ordinary Designer Save, one Form-tab close, one Designer Form-menu reopen. Optional single runtime Button click.
Editing scope: User (`anton.ramos@3mworks.com.ph`, to be confirmed visibly in preflight).
Target identities: Form `FX_SingleButtonLab01`; Button `FX_SingleButton01` (Caption `Factory Test Button`); custom form event `FX_ButtonPromptEvent01`.
Evidence directory: `evidence/EXP-037/`.
Worker identity: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `dca24844-a9d8-4859-a73a-e8863d24c34c`).

## Objective

Determine whether one custom form event `FX_ButtonPromptEvent01`, with one Prompt handler action (literal message `Factory Test Prompt`), and the Button's Events > Primary assignment to that event, are recovered unchanged on the same User-scoped Form after one ordinary Designer Save, an ordinary Form-tab close, and a Designer Form-menu reopen. Original Button identity and Caption must also be unchanged.

Conclusion limit: **Form-definition recovery across this Save and close/reopen sequence**, as rendered in the Designer. Optional runtime Prompt behaviour only if separately tested. This experiment does not establish Forms-database durability, cache eviction, metadata unloading, or server-side serialization.

## Relationship to prior evidence

- **EXP-036** (observed, single run; accepted per operator directive; not replay_verified): created `FX_SingleButtonLab01` and `FX_SingleButton01` (Caption `Factory Test Button`) and recovered them across one Save and close/reopen. Its Event Handlers tab and Button Primary event were **not** examined. EXP-037 builds on that baseline.
- **EXP-036-R2** (blocked, 2026-10-10): wizard load error (`ComponentFlags` enum). Relevant as an environment risk, see §Risks.
- **Form events and Prompt guidance**: `docs/mongoose/guides/form-events.md`, `docs/mongoose/guides/form-event-response-types.md` (both marked unverified in this environment).
- **Part 3 narration** (unverified, speech-to-text): `docs/mongoose/transcripts/hello-world-pt3.md`; raw `docs/mongoose/transcripts/raw/raw-hello-world-pt3.txt`.
- Full review and planned evidence matrix: `evidence/EXP-037/t1-repository-review-notes.md`.

## T1 — repository-only review (completed)

- Browser tool calls: **0**. No tab listing, snapshot, screenshot, click, key, navigation, or evaluate.
- Mongoose interaction: **none**.
- Repository writes by T1: this record and `evidence/EXP-037/t1-repository-review-notes.md`. Nothing else.
- Full path reconciliation, workflow reconciliation, and Prompt-documentation gap: `evidence/EXP-037/t1-repository-review-notes.md` §1–§3.

### Key T1 findings

1. **Path corrections.** The raw transcript is `docs/mongoose/transcripts/raw/raw-hello-world-pt3.txt`, not `transcripts/raw/…`. The EXP-037 record and `evidence/EXP-037/` did not exist before T1.
2. **Workflow (documented).** Form Details panel > Event Handlers > New > name the handler > configure its action. A custom form event is created by naming it in a component's event property, such as Primary (`form-events.md` lines 85–89). The brief's route combines both: a handler named `FX_ButtonPromptEvent01`, then Primary set to the same name.
3. **Form events are not Application Events.** Generate Application Event and the Events form belong to the Application Event System and are not used (`form-event-response-types.md` lines 84–90; prohibited by the brief).
4. **Prompt — documented.** Asynchronous; displayed after the event chain completes; each response option may carry an associated form event name; only the last of several Prompts in one chain displays (`form-event-response-types.md` lines 197–207).
5. **Prompt — NOT documented locally.** The local guide does not name the message parameter, the default response options, or whether a response with no associated event is valid. The only source for "Parameters" and "Message Text" is the Part 3 transcript (`hello-world-pt3.md` step 6; raw lines 60–61). That is speech-to-text and is unverified. **The brief's "supported parameters described in the local guide" cannot be fully satisfied from the repository.** Its stop rule therefore applies at the live Prompt editor.
6. **Baseline gaps.** EXP-036 never opened the Event Handlers tab or read the Button's Events > Primary value. The Components grid "Event to generate" cell for `FX_SingleButton01` is blank in `evidence/EXP-036/t11-13-button-selected-snapshot.md` line 271 (indirect only).

## T2 — read-only browser preflight (completed; details `evidence/EXP-037/t2-preflight-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `2c29b65b-140e-4a20-9c2d-e31aa1a19c72`.

- **Inherited state at start:** one tab (Web Client, `Mongoose`), no Designer tab. Signed in as `anton.ramos@3mworks.com.ph`, config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in or configuration prompt. No Form open in the Web Client. Evidence: `p0-initial-tab-snapshot.md`, `p1-webclient-initial-viewport.png`.
- **Designer:** one launch via the Web Client toolbar `Designer` control. A Designer tab opened with no `MGForm` parameter. Evidence: `p2-designer-launch-snapshot.md`.
- **Scope:** "Identify Your Editing Scope" showed Scope = User, User = `anton.ramos@3mworks.com.ph`; confirmed once with OK. Status bar after confirmation: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Evidence: `p2-scope-dialog-viewport.png` (pre-OK), `p3-designer-settled-snapshot.md`, `p3-designer-settled-viewport.png`.
- **Designer state:** no Form tab; no dialog; Save, Regenerate, Undo, Redo disabled; blank canvas; Properties empty. Console: 0 errors, 0 warnings.
- **Target:** `FX_SingleButtonLab01` is **not open**. Not selected or opened in this task (out of scope). Its existence and identity have not yet been verified.
- **Blocking conditions:** none observed (no `ComponentFlags`-type error, no session prompt, no scope ambiguity).
- **Counts (T2):** Designer launch 1; scope OK 1; tab select 1; Form open or select 0; Form create 0; placement 0; property edit 0; event-handler inspection 0; Save 0; Regenerate 0; close 0; reopen 0; preference change 0; JavaScript 0; authentication 0.
- **Recovery allowance:** fresh snapshot 0 of 1; corrected inspection 0 of 1. The untargeted snapshots `p0`, `p2`, `p3` were planned reads.
- **Stable state:** Designer tab selected, clean, User scope, no Form, no dialog. Web Client tab present with no dialog.
- **Next permitted action (not yet authorized):** a separate task to locate `FX_SingleButtonLab01` through a supported Designer path (Form menu recent-forms, or Web Client Select Form), verify Name, ScopeType=User and ScopeName, then capture the Form baseline. Event Handlers and the Primary event stay uninspected until that task.

## T3 — target Form open and identity/Button baseline (completed; details `evidence/EXP-037/t3-baseline-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `aa9e27b8-6818-476b-a19c-de7e0db7033f`.

- **Selection path:** Designer top-bar **Form** menu → recent-forms entry `FX_SingleButtonLab01` (one click). The entry appears once in the list. The list shows names only, so identity was confirmed from the Form's properties and the scope footer after opening. Evidence: `t3-03-form-menu-open-snapshot.md`, `t3-04-form-menu-recent-list-viewport.png`, `t3-05-after-recent-select-snapshot.md`.
- **Form identity (confirmed Form-version identity):** tab heading `FX_SingleButtonLab01`; Properties Name `FX_SingleButtonLab01`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True. Evidence: `t3-05-after-recent-select-snapshot.md` lines 253, 277–301; `t3-06-form-opened-viewport.png`.
- **Designer editing-scope footer (separate observation):** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Evidence: `t3-05…snapshot.md` line 340; `t3-06…png`.
- **Clean state:** Save, Regenerate Form and Undo disabled; no dialog. Evidence: `t3-10-button-selected-snapshot.md`.
- **Component baseline:** Components grid shows `Pane (00)` with exactly one child, `FX_SingleButton01` / `PushButton`, Pane 0, Tab 0, Event to generate blank. Canvas shows one button captioned `Factory Test Button`. Evidence: `t3-09-components-expanded-snapshot.md`, `t3-06-form-opened-viewport.png`.
- **Button properties (selected, read-only):** header `FX_SingleButton01 (Button)`; Name `FX_SingleButton01`; Caption `Factory Test Button`; Type `PushButton`; From Device Master True. Evidence: `t3-10-button-selected-snapshot.md`; `t3-11-button-selected-property-grid-viewport.png`.
- **Not inspected (by instruction):** Button Events group (collapsed; Primary value unread); Form Event Handlers list; Form-level Layout group (unread). Caption literal vs string-resource representation not distinguished. Type `PushButton` is the grid label; component type `Button` comes from the header.
- **Counts (T3):** recent-forms open 1; Form menu open 1; Designer tab select 1; Details Expand 1; Components tab 1; grid Expand 1; Button row selection 1. Event Handlers 0; Primary 0; property edit 0; Save 0; close 0; reopen 0; scope change 0; runtime activation 0; JavaScript 0; authentication 0.
- **Recovery allowance:** fresh snapshot 0 of 1; corrected inspection 0 of 1. No `Ref not found` error or timeout occurred.
- **Stable state:** Designer tab selected; target open and clean; Button selected; Details panel expanded on the Components tab; no dialog. Web Client tab untouched.
- **Assessment:** the Form is safely identified and the Button baseline is visible and unchanged. It is ready for a separate read-only Event Handlers and Primary inventory task. **Not authorized by T3.**

## T4 — read-only Primary-event and Event Handlers inventory (completed; details `evidence/EXP-037/t4-inventory-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `5fd13009-a3df-4826-9a6a-439e85ec9af0`.

- **Target and clean state:** `FX_SingleButtonLab01` tab selected; User footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate Form, Undo disabled; no dialog. Evidence: `t4-02-designer-current-snapshot.md`, `t4-03-designer-current-viewport.png`, `t4-17-final-readonly-snapshot.md`.
- **Button Events > Primary:** **blank** (no assignment). Data Change, Lose Focus, Gain Focus blank; Drag From Events and Drop On Events each `0 event(s)`. Evidence: `t4-07-after-expand-all-snapshot.md` lines 641–697; `t4-09-events-scrolled-primary-viewport.png` (viewed).
- **Event Handlers list (Button selected):** no rows; column headers Sequence / Response Type / Disabled / Response Parameters; right editor empty. Evidence: `t4-11-event-handlers-tab-snapshot.md`; `t4-12-event-handlers-tab-viewport.png` (viewed).
- **Event Handlers list (Form selected):** no rows; same layout. Evidence: `t4-13-form-tab-event-handlers-viewport.png` (viewed).
- **Handler count:** 0 visible. No pagination, filter text, or truncation indicator. The absence is limited to the rendered Designer list; it is not a database-wide proof.
- **Collision assessment:** no `FX_ButtonPromptEvent01` in the list; no nonempty Primary; no replacement needed. No conflicting definition seen.
- **Form layout (non-editing read, Layout group):** Splitter None; Pane 0 and Pane 1 Scroll Bars As Needed; Unit Char; Size 120; 40; Synchronize FlexLayout attributes True; Form Pages has no visible value. The wizard value `GridLeft` is **not shown** in this group, so it stays unverified. Evidence: `t4-15-form-tab-expanded-snapshot.md` lines 457–515; `t4-16-form-layout-scrolled-viewport.png` (viewed).
- **Anomalies (disclosed):** the Events label click selected the row without expanding it. One ArrowRight key press moved focus to the Events value cell without opening an editor and without any change (Save stayed disabled). Expand-all view controls expanded all component and Form property groups. These are view-only.
- **Counts (T4):** handler editor, New, Add, Delete, Copy 0; inline edit 0; Primary assignment 0; Save 0; close/reopen 0; scope or preference change 0; runtime activation 0; JavaScript 0; authentication 0.
- **Recovery allowance:** fresh snapshot 0 of 1 used for recovery. Corrected visible inspection: the failed ArrowRight expansion is **conservatively counted as 1 of 1** (no ambiguous state read; the group was then inspected via a view control).
- **Stable state:** Designer clean; target open; Details on Event Handlers (empty); Properties on Form tab with Layout expanded; Web Client untouched.
- **Assessment:** the inventory supports a separate mutation task. Its preconditions are met (target identified, Primary blank, no conflicting handler). **Mutation is not authorized by T4.**

## T5 — custom Prompt handler configuration (unsaved; completed; details `evidence/EXP-037/t5-handler-configuration-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `a7058644-3e8f-46b0-9e2b-46c66731489f`.

- **Pre-state:** `FX_SingleButtonLab01` open and clean; User footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Form Event Handlers list empty; Version `User version for user anton.ramos@3mworks.com.ph`. Evidence: `t5-02-designer-selected-snapshot.md`, `t5-03-pre-new-handler-viewport.png`.
- **Created:** one Form event handler named `FX_ButtonPromptEvent01` (New → name dialog → typed → OK). Evidence: `t5-05-after-new-click-viewport.png`, `t5-07-name-entered-viewport.png`, `t5-08-after-ok-snapshot.md`.
- **Action (one, sequence 0):** Response Type `Prompt`. Evidence: `t5-12-response-type-prompt-selected-viewport.png`.
- **Prompt parameters (live dialog inspected before entry):** Message Text `Factory Test Prompt` (literal typed in the textbox; the "..." string-resource button was not used); Caption blank; Icon default (information); Responses: **OK only** (checked, default button), Event To Generate blank; all other responses unchecked. Evidence: `t5-15-after-parameters-click-viewport.png`, `t5-17-message-entered-viewport.png`, `t5-18-after-params-ok-viewport.png`.
- **Committed state (pre-Save, read-only):** Parameters summary `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; handler list row sequence 0 / Prompt / false; no dialog; no active editor; Save **enabled** (dirty). Evidence: `t5-19-pre-save-handler-state-snapshot.md`.
- **Not done (by instruction):** Button Events > Primary (`FX_SingleButton01` untouched); Designer Save; close/reopen; runtime activation; preferences; scripts; Application Event System.
- **Observation (unresolved):** after the first OK, the page URL dropped `&MGForm=FX_SingleButtonLab01`. The Form tab stayed selected, the handler state persisted in every later snapshot, and no reload was observed. Not reloaded or navigated. The next step should identify the Form by tab heading and scope footer, not the URL.
- **Recovery allowance:** the `t5-06` snapshot (taken after the screenshot showed the name dialog that the `t5-04` snapshot had not exposed) is counted conservatively as the **single fresh recovery snapshot (1 of 1 used)**. No corrected inspection used. No ref-not-found error.
- **Counts (T5):** New 1; name entry 1; name OK 1; Response Type dropdown 1; Prompt option 1; Parameters dialog open 1; Message Text entry 1; Parameters OK 1; response actions added beyond the one 0; Primary 0; Save 0; close/reopen 0; runtime 0; scope/preference 0; JavaScript 0; authentication 0.
- **Assessment:** the handler configuration is in the unsaved definition as specified. The Primary assignment and the single ordinary Save are the next steps and are **not authorized by T5**.

## T6 — Button Events > Primary assignment and pre-Save verification (unsaved; completed; details `evidence/EXP-037/t6-primary-assignment-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `9aa1f71b-0343-455d-8932-5d2042399b4b`.

- **Identity (rendered, not URL):** tab heading `FX_SingleButtonLab01`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. URL still lacks `MGForm`. Evidence: `t6-02-designer-selected-snapshot.md`, `t6-03-preflight-viewport.png`.
- **Pre-edit:** Save enabled (dirty); handler list had the one Prompt handler; Button Primary **blank**; Data Change / Lose Focus / Gain Focus blank; Drag/Drop `0 event(s)`. Evidence: `t6-07-component-properties-snapshot.md` lines 598–605; `t6-08-primary-before-edit-viewport.png`.
- **Assignment:** Primary picker (arrow) opened once; `FX_ButtonPromptEvent01` (first option, above standard `Std…` events) selected once; Enter once to commit. No standard event selected. Evidence: `t6-09-primary-picker-open-viewport.png`, `t6-10-primary-picker-open-snapshot.md`, `t6-11-primary-after-select-viewport.png`, `t6-12-primary-after-select-snapshot.md`.
- **Post-commit:** combobox no longer active; Primary is a committed cell with `FX_ButtonPromptEvent01` (accessibility, exact); the on-screen value is truncated `FX_ButtonPromptE▾`. Evidence: `t6-13-primary-after-enter-snapshot.md`, `t6-14-primary-committed-viewport.png`.
- **Button properties unchanged:** Name `FX_SingleButton01`; Caption `Factory Test Button`; Type `PushButton`; header `FX_SingleButton01 (Button)`; Pane 0 / Tab 0.
- **Handler re-read (view-only):** one group `FX_ButtonPromptEvent01`; one row: sequence 0, Prompt, Disabled false, `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Evidence: `t6-15-event-handlers-recheck-snapshot.md` lines 250–256; `t6-16-event-handlers-recheck-viewport.png`.
- **Dirty / dialogs:** Save enabled; no dialog; no browser prompt.
- **Anomalies (disclosed):** Primary value visually truncated; the "Event to generate" grid column remains blank (its relation to Primary is unresolved; not treated as evidence).
- **Counts (T6):** Components and Component tab view switches 2; Button row selection 1; picker open 1; option select 1; Enter 1; Event Handlers view 1; Save 0; handler edits 0; standard event selections 0; other property changes 0; close/reopen 0; runtime 0; scope/preference/session change 0; JavaScript 0; authentication 0.
- **Recovery allowance:** none used. T4 and T5 allowances remain exhausted; no ambiguity arose.
- **Assessment:** the complete unsaved definition is ready for one ordinary Designer Save in a separately authorized task. **Save not performed.**

## T7 — single ordinary Designer Save and post-Save verification (completed; details `evidence/EXP-037/t7-save-verification-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `07729c76-81fe-429c-8967-6a4c1968baba`.

- **Pre-Save gate (rendered):** tab `FX_SingleButtonLab01` selected; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save enabled; one handler `FX_ButtonPromptEvent01`, sequence 0, Prompt, exact parameters `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; Primary `FX_ButtonPromptEvent01`; no editor or dialog. Evidence: `t7-02-designer-selected-snapshot.md`, `t7-03-pre-save-viewport.png`.
- **Save:** toolbar Save clicked **once** (`e16`). Network `SaveChanges`: one POST, `[200]`; response `{"Success":true,"Message":"Form [FX_SingleButtonLab01] and global object(s) were saved.","Payload":[]}`. Re-count at end of T7: still one.
- **Post-Save clean state:** Save, Regenerate Form, Undo disabled; no dialog; no error; target tab still selected; footer User scope. Evidence: `t7-04-post-save-snapshot.md`, `t7-05-post-save-viewport.png`.
- **Post-Save reinspection (view-only):** Event Handlers: one group, one row, sequence 0, Prompt, Disabled false, exact parameters (`t7-04` lines 286–332). Primary `FX_ButtonPromptEvent01` (`t7-04` line 663). Button: Name `FX_SingleButton01`, Caption `Factory Test Button`, Type `PushButton`, header `(Button)`; Components: `Pane (00)` root with exactly one child (`t7-06-post-save-components-snapshot.md` lines 251–280). Form: Name, Version `User version for user anton.ramos@3mworks.com.ph`, Form Type Normal, Is Master True (`t7-07-post-save-form-properties-snapshot.md`). Evidence: `t7-08-post-save-form-properties-viewport.png`.
- **Counts (T7):** Save 1; Save repeat 0; Regenerate 0; unload 0; close/reopen 0; runtime 0; handler/Primary/property edits 0; editor entries 0; view-only tab switches 2; JavaScript 0; authentication 0; cold navigation 0; recovery snapshot 0; corrected inspection 0.
- **Limits:** the save response shows the server accepted the save call; it does not show storage or serialization. Recovery across close and reopen is not yet tested. The Primary value is truncated on screen; its full value is from the accessibility tree.
- **Next permitted action (not authorized by T7):** ordinary Form-tab close, then a recent-forms reopen, each in a separately authorized step.

## T8 — ordinary Form-tab close (completed; details `evidence/EXP-037/t8-close-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `be43e7a9-0604-406c-91b4-88fd30ae0ac1`.

- **Pre-close gate (rendered):** `FX_SingleButtonLab01` tab selected; Version `User version for user anton.ramos@3mworks.com.ph`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate Form, Undo disabled; no dialog or active editor. Evidence: `t8-02-designer-preclose-snapshot.md`, `t8-03-preclose-viewport.png`.
- **Close:** the `closable FX_SingleButtonLab01` control (`e247`) clicked **once**. No other control or tab touched.
- **Post-close:** no Form tab, no heading, no closable control, no dialog; Save and Regenerate disabled; canvas blank; Properties empty; footer User scope. No unsaved-changes prompt, no error. Console `error` level: 0 messages. Evidence: `t8-04-post-close-snapshot.md`, `t8-05-post-close-viewport.png`.
- **Counts (T8):** target close 1; other closes 0; reopen 0; Save 0; Regenerate 0; runtime 0; edits 0; preference/session/scope change 0; JavaScript 0; authentication 0; recovery snapshot 0; corrected inspection 0.
- **Limits:** the close shows the Designer dropped the Form; it does not show server state. Recovery after reopen is untested.
- **Next permitted action (not authorized by T8):** recent-forms reopen of `FX_SingleButtonLab01` and recovery verification, in a separately authorized step.

## T9 — single supported reopen and read-only definition-recovery verification (completed; details `evidence/EXP-037/t9-reopen-verification-notes.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `fac1fb4a-82ae-4dff-8391-fb8cc95ac75f`.

- **Pre-reopen:** Designer Form-less; no Form tab; no dialog; Save disabled; User footer. Evidence: `t9-02-designer-formless-snapshot.md`.
- **Reopen (one):** Designer Form menu (view) → recent-forms entry `FX_SingleButtonLab01` clicked once. Supported path; not a cold URL (the URL gained `MGForm` from the menu). Evidence: `t9-03-form-menu-open-snapshot.md`.
- **Identity and state after reopen:** tab `FX_SingleButtonLab01` selected; Name `FX_SingleButtonLab01`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save, Regenerate, Undo disabled; no dialog. Evidence: `t9-04-post-reopen-snapshot.md`, `t9-05-post-reopen-viewport.png`.
- **Handler:** group `FX_ButtonPromptEvent01` was collapsed on first render; expanded by one view-only group click. Recovered row: sequence 0, Prompt, Disabled false, `PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`. Exactly one group and one action. Evidence: `t9-08-event-handlers-recovered-viewport.png`, `t9-09-after-group-click-snapshot.md`, `t9-10-event-handlers-expanded-viewport.png`.
- **Components:** `Pane (00)` with exactly one child `FX_SingleButton01 / PushButton / Pane 0 / Tab 0`. Evidence: `t9-12-components-expanded-snapshot.md` line 269.
- **Button (selection only):** header `FX_SingleButton01 (Button)`; Name `FX_SingleButton01`; Caption `Factory Test Button`; Type `PushButton`; From Device Master True; Events > **Primary `FX_ButtonPromptEvent01`** (accessibility full value; Data Change blank). Evidence: `t9-13-button-selected-snapshot.md` (lines 289–346, 636–651), `t9-14-button-recovered-viewport.png`.
- **Deviation (unresolved):** the Components grid "Event to generate" column now shows `FX_ButtonPromptEvent01`, where T3/T6/T7 showed it blank. Its meaning is not established. The handler collapsed on first render after reopen; cause not established (one run).
- **Final read-only check:** Save, Regenerate, Undo disabled; no dialog; target selected; User footer. Evidence: `t9-15-final-readonly-snapshot.md`.
- **Counts (T9):** reopen 1; close 0; Save 0; Regenerate 0; runtime 0; edits 0; editor entries 0; view-only expands/tab switches; Button row selection 1; JavaScript 0; authentication 0; cold navigation 0; recovery snapshot 0; corrected inspection 0.
- **Acceptance:** AC-7 supported (one supported reopen; rendered identity and clean state). AC-8 supported (handler, action, literal message, Primary, Button identity and Caption). Both are observed Form-definition recovery across ordinary close/reopen only; no durability, cache, or serialization claim. Runtime Prompt untested (requires separate authorization).
- **Limits:** console not separately read after the reopen; Form Layout group not re-expanded; Primary truncated on screen; URL still carries `MGForm`.
- **Next permitted action (not authorized by T9):** optional runtime test or the final read-only audit, each in a separately authorized step.

## T10 — optional Web Client runtime Prompt gate (AC-9: not_applicable; no activation)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `c6c5c3ab-6c7c-483e-a0d0-f1606f1ecf59`.

- **Gate:** the Web Client tab was authenticated (identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) with no Form loaded and no dialog. The supported ordinary route to open the target (toolbar `Open` → Select Form) was attempted once.
- **Blocker:** the `Open` click (`f1e23`, resolved to `mgtoolbarbutton-1100`) timed out at "waiting for element to be visible, enabled and stable" after 5 s. Select Form did not open; a post-timeout state read (`t10-03`) showed no dialog and no Form. Not retried; no alternative route used. Suspected environment blocker (same control timed out in EXP-036 T3).
- **Outcome:** runtime gate not passed. **AC-9 recorded as not_applicable.** Runtime Button activations 0; runtime Prompt observed 0; Web Client Form opened 0.
- **Evidence:** `t10-01-preflight-snapshot.md`; `t10-02-webclient-preflight-viewport.png` (viewed: idle Web Client, identity bar); `t10-03-after-open-timeout-snapshot.md` (no dialog); `t10-runtime-gate-notes.md` (gate table, counts, blocker, final state). Note: the screenshot in `t10-02` followed one earlier timed-out capture ("waiting for fonts"); the second capture succeeded.
- **Counts (T10):** Open click attempts 1 (timed out, not retried); Designer actions 0; Save 0; close/reopen 0; runtime 0; edits 0; JavaScript 0; authentication 0; cold navigation 0; recovery snapshot 0; corrected inspection 0.
- **Final state:** Web Client selected, idle, no dialog. Designer untouched since T9 (reopened, clean, User scope, Save disabled).
- **Next permitted action (not authorized by T10):** coordinator decision on AC-9, or a separately authorized fresh attempt after an operator-side check of the environment. The final read-only audit is separately authorized and not started.

## T11 — final repository-only audit and acceptance matrix (completed; zero browser calls; details `evidence/EXP-037/t11-final-audit-and-evidence-matrix.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `4768ceba-4c85-4fd0-9f00-2a102702c5e2`.

- **Method:** read this record, the T1–T10 notes, the controller-generated `harness-audit-T1.md` … `harness-audit-T10.md`, and the cited snapshots; re-checked citations with Grep. No browser call; no Mongoose interaction.
- **Acceptance text:** superseded in T12. The T11 "proposed mapping" was replaced by the coordinator's canonical AC-1…AC-10 definitions (see the T12 section). The T11 AC labels below are historical.
- **Matrix result (T11, historical):** AC-1 to AC-8 supported as observed; AC-8 partial for reopened Layout; AC-9 not applicable; AC-10 supported by the audit.
- **Counts reconciled (from audits, with order numbers):** Forms created 0; Buttons created 0; custom events 1; sequence-0 Prompt actions 1 (literal message; OK-only, no associated event); Primary assignments 1; Designer Save clicks 1 with one `SaveChanges` POST (`Success: true` from the T7 notes; body not saved to a file); Form-tab close 1; supported reopen 1 (after one initial open in T3); runtime Button activations 0; Prompt dismissals 0; unsuccessful Web Client `Open` attempts 1; Designer launches 1. Key presses: ArrowRight (T4, non-mutating), Enter (T6, Primary commit). Text entries: 2 intended (T5 handler name and message).
- **Allowances:** corrected inspection consumed in T4 (ArrowRight attempt, counted conservatively); fresh recovery snapshot consumed in T5 (`t5-06`, counted conservatively). **Open:** the T10 post-timeout snapshot (`t10-03`, audit order 8) may count as a further fresh snapshot beyond the exhausted allowance; the coordinator should classify it.
- **Confinement:** worker writes limited to this record and `evidence/EXP-037/`. Controller-generated `harness-audit-T*.md` and gitignored `evidence/playwright/*` disclosed separately and not altered.
- **Observations recorded, unresolved:** the `MGForm` URL parameter disappeared after the first handler OK (T5) and returned via the recent-forms selection after reopen (T9); the handler group rendered collapsed after reopen (T9); the Components grid "Event to generate" column changed from blank to `FX_ButtonPromptEvent01` after reopen (T9).
- **Classification:** observed Form-definition recovery across an ordinary Designer close and a supported recent-forms reopen, in one browser client session. Not replay_verified; not database durability, cache eviction, or server serialization. Runtime Prompt behaviour not tested.
- **Recommendation for coordinator:** eligible for acceptance only after the coordinator confirms the AC mapping and classifies the T10 post-timeout snapshot. No disqualifying violation was found in the audits. The worker does not declare acceptance.

## T12 — acceptance-matrix correction to the canonical AC definitions (completed; zero browser calls; details `evidence/EXP-037/t11-final-audit-and-evidence-matrix.md`)

Worker session `739c57f6-5187-451a-a0b9-e0c67297eeb3`, task_message_id `78361221-6685-4bed-a1f5-6bc9be474097`.

- **Action:** rewrote the matrix against the coordinator's canonical AC-1…AC-10 definitions; re-checked every citation with Grep or Read; updated the T11 summary above.
- **Corrected statuses:** AC-1 Supported (repository review; User-scope Designer preflight; actual Form scope). AC-2 Supported (rendered identity, clean state, sole Button baseline, blank Primary, no conflicting handler; layout partial). AC-3 Supported (pre-Save event, one sequence-0 Prompt action, literal message). AC-4 Supported (Primary committed; Button properties unchanged). AC-5 Supported (one Save click; one `SaveChanges` POST; clean post-Save; the `Success: true` body is recorded in `t7-save-verification-notes.md` line 28 and **not stored as a file**). AC-6 Supported (one close; no prompt). AC-7 Supported (one recent-forms reopen; clean). AC-8 Supported for handler, action, message, Primary, Button identity, Type, Caption, and count; **layout partial** (Unit and Size not re-read). AC-9 **Not applicable** (Open control timed out; no activation). AC-10 Supported as an audit, with the open items below.
- **Coordinator rulings reflected:** the T10 post-timeout snapshot is a planned outcome-state verification, not a recovery attempt; the screenshot timeout and retry are disclosed; the T4 corrected inspection and T5 fresh snapshot exhaust the ambiguity-recovery allowance; reopened layout is only partly inspected; tool-generated wrappers and Ext-id locators are disclosed separately and not characterized as worker-authored browser JavaScript.
- **Reconciled counts:** new Forms 0; new Buttons 0; custom event 1; sequence-0 Prompt action 1; Primary assignment 1; Designer Save 1 (click) with 1 `SaveChanges` POST; target close 1; supported reopen 1; runtime activations 0; Prompt dismissals 0; failed Web Client `Open` attempt 1.
- **Preserved unresolved items:** the `MGForm` URL behaviour (absent after the T5 OK; restored by the T9 recent-forms selection); the handler group's initial collapse after reopen; the "Event to generate" column change after reopen; runtime Prompt behaviour; storage durability, serialization, and cache eviction (none established).
- **Gaps:** Save-response body not stored as a file (grounded in the audited click and clean rendered state); reopened layout partial; AC mapping and the id-based wrapper question are for coordinator decision.
- **Ready for coordinator acceptance review:** yes, on the evidence as corrected. No disqualifying violation found. The worker does not declare acceptance. No further task or experiment was started.

## Baseline (from EXP-036; re-verified in T3 as noted above)

| Item | EXP-036 observation | Source |
|---|---|---|
| Form | `FX_SingleButtonLab01`; Classic / BuildFromScratch; Save Template unchecked | EXP-036 T5–T7 |
| Scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `evidence/EXP-036/t11-13-button-selected-snapshot.md` line 417 |
| Form Version | `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True | EXP-036 T7; `t11-06-post-reopen-snapshot.md` |
| Button | One native child under `Pane (00)`; Name `FX_SingleButton01`; Caption `Factory Test Button`; grid Type `PushButton`; header `FX_SingleButton01 (Button)` | `t11-13-button-selected-snapshot.md` lines 264–350 |
| Button Primary event | **Not read**. Events group collapsed (line 377). | — |
| Event Handlers | **Not inspected** (tab exists, line 222) | — |
| Last save | Ordinary Save, `Success: true` | EXP-036 T10; `evidence/EXP-036/t10-08-after-save-snapshot.md` |

Inherited Designer state at T1: not observed (no browser call). EXP-036-R2 left the Designer open with no Form, so Phase P must inspect before opening the target.

## Risks

1. **Designer metadata load error (same day).** EXP-036-R2 (2026-10-10) was blocked by a `ComponentFlags` enum error on the Classic / BuildFromScratch wizard. The portal footer read 2026.10.01, while the recipes record Mongoose 2026.09.08. Cause unresolved. **Stop** if an equivalent error appears in the Event Handlers editor, the Prompt Parameters dialog, or the Events property.
2. **Editor precedents.** EXP-036 needed corrected attempts (Save Template intercepted; Caption resource-arrow mis-hit). Primary-event editing may behave similarly. Confirm with a fresh snapshot that the editor is active and no list is open before typing.
3. **No canvas placement needed.** The Button already exists, so the coordinate-click dependency from EXP-036 does not apply.
4. **Recovery allowance.** Fresh snapshot 1, corrected visible inspection 1, for this experiment. Planned reads do not count.
5. **Runtime.** The Prompt appears after the event chain completes. Click the Button at most once.

## Decisions for the coordinator (recommended defaults; the worker will act on them unless redirected)

1. **Order:** handler first (name `FX_ButtonPromptEvent01`, one sequenced action, Type Prompt, literal message `Factory Test Prompt`), then Button Primary = `FX_ButtonPromptEvent01`. Matches the brief and Part 3.
2. **Prompt responses:** single dismissible OK with no associated event. **Stop before OK** if the editor forces an associated event, extra response rows, or a non-literal message field.
3. **Primary entry:** one typed entry after a fresh snapshot confirms the editor is active with no dropdown open. If a standard-event dropdown opens, do not select from it; stop and record.
4. **Save:** exactly one ordinary Designer Save after all configuration (no Save after the handler alone).
5. **Runtime check (optional):** only after successful definition recovery. Use Web Client Select Form (double-click the target row; OK activates the selected row). Click the Button once, dismiss the Prompt with OK.
6. **Acceptance-check IDs:** the worker cannot read the brief's numbering. Coordinator to map them to the evidence matrix in the notes.

## Planned evidence matrix (summary; full table in `evidence/EXP-037/t1-repository-review-notes.md` §8)

| ID | Milestone | Planned evidence |
|---|---|---|
| P0–P2 | Tab identity; Designer scope; target open | `evidence/EXP-037/p0-…`, `p1-…`, `p2-…` (snapshots and PNGs) |
| B1–B3 | Baseline: components; Event Handlers; Primary (blank or stop) | `evidence/EXP-037/b1-…`, `b2-…`, `b3-…` |
| M1–M5 | Handler new/name; Prompt parameters before OK; handler list after OK; Primary; pre-Save | `evidence/EXP-037/m1-…` to `m5-…` |
| S1 / R1 | One Save (`SaveChanges` count 1, `Success: true`); post-Save reinspection | `evidence/EXP-037/s1-…`, `r1-…` |
| C1 / O1 / V1 | Close (no prompt); reopen via Form menu; recovered-definition verification | `evidence/EXP-037/c1-…`, `o1-…`, `v1-…` |
| RT1 (optional) | Runtime Prompt text, single OK, after one click | `evidence/EXP-037/rt1-…` |
| A1 | Final read-only audit | `evidence/EXP-037/a1-…` |

## Stop conditions (apply through Phase M)

- Login or configuration screen appears.
- Form Name, ScopeType, or ScopeName is not visibly `FX_SingleButtonLab01`, User, `anton.ramos@3mworks.com.ph`.
- Event Handlers already contains `FX_ButtonPromptEvent01`, or a non-empty conflicting Primary value exists on `FX_SingleButton01`.
- Any `ComponentFlags`-type or other metadata-load error appears in the editors.
- The Prompt editor forces an associated event, extra responses, or a non-literal message field.
- Any unsaved-changes prompt appears during the supposedly clean close.
- Ambiguity remains after the single fresh snapshot and single corrected inspection.

## Explicit non-claims (T1)

- No Mongoose behaviour is observed by T1. Every workflow statement is documentation or narration until a browser step proves it.
- The Prompt message parameter label is unverified (transcript-only).
- Primary-event editor behaviour for custom names is unobserved.
- Caption literal vs string-resource representation is unresolved (as in EXP-036).
- No durability, cache eviction, or server-serialization claim is made from any ordinary close/reopen.

## Next permitted action

Coordinator review of the decisions above. Phase P (browser preflight) starts only after that review, in its own task, beginning with a fresh tab snapshot and a visible User-scope check. **No browser action is authorized by T1.**

## Result (T1)

Repository-only review complete. Zero browser calls. Corrected raw-transcript path recorded. The local guide does not document the Prompt message parameter; that label remains transcript-only and must be confirmed in the live editor. Planned evidence matrix recorded. Six decisions listed for the coordinator. Nothing in Mongoose was created, modified, or touched.
