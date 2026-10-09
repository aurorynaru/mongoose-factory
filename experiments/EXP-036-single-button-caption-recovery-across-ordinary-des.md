# EXP-036 — Single Button Caption Recovery Across Ordinary Designer Save and Close/Reopen

Status: **T1 complete (repository-only review; zero browser calls). T2 complete (browser preflight; one Designer launch; no target Form action). T3 partial (Select Form positive control and target zero-match observed; ordinary Cancel; turn limit reached; recovery allowance consumed). T4 complete (read-only current-state reconciliation; no mutation). T5 stopped (Form creation wizard opened, Name entered and Next taken; Save Template uncheck intercepted; Finish NOT pressed; no Form created; wizard left open). T6 complete (operator-authorized Save Template correction: one label click unchecked the box; Finish NOT pressed; no Form created; wizard left open on page 2). T7 complete (AC-3 met: Finish clicked once; Process Completed OK once; Form FX_SingleButtonLab01 created and open clean in User scope; empty component baseline verified; no Button placed). T8 stopped before placement (blocker: canvas placement needs a coordinate click, which the browser click tool cannot issue; no Button placed; Toolbox Button row armed; Save not pressed). T9 partial (operator-stated: only the Playwright MCP tool server was restarted to enable browser_mouse_click_xy; one canvas coordinate click placed exactly one PushButton; Name set to FX_SingleButton01 and committed; Caption NOT set, editing stopped after a corrected-attempt condition; no Save, Regenerate, close, or reopen). T10 complete (Caption entered once via coordinate double-click on the value text area; committed with Enter; Caption shows `Factory Test Button`; exactly one ordinary Designer Save; response `Success: true`; Save disabled after; Form left open; no close or reopen). T11 complete (one Form-tab close; one reopen via the Form-menu recent-forms entry; recovered Button shows Name FX_SingleButton01, Type PushButton (literal), Caption Factory Test Button; exactly one child under Pane (00); Save disabled; reopened Form left open and clean; no Save).** T12 complete (final read-only audit; no Mongoose mutation; matrix in `evidence/EXP-036/t12-final-audit-and-evidence-matrix.md`). **Experiment-level result (observed, single run, not replay_verified):** one ordinary Designer Save (`Success: true`), ordinary Form-tab close, and recent-forms reopen recovered exactly one child Button under `Pane (00)` with Name `FX_SingleButton01`, displayed Type `PushButton` (not `Button`), and Caption `Factory Test Button`. Save disabled after reopen. Target Form left open and clean. Literal-vs-resource Caption representation and all durability, cache and serialization questions remain unresolved and are not claimed. Coordinator decisions 1–6 still open. **T13 (documentation only): experiment ACCEPTED per operator directive; AC-1 to AC-9 each reconciled to exact evidence in `evidence/EXP-036/t12-final-audit-and-evidence-matrix.md` §7; result classified observed UI-level component-definition recovery, not replay_verified.** The worker could not confirm the verbatim AC-1, AC-4 and AC-9 text from its context; the coordinator should confirm those mappings.
Date: 2026-10-09
Run: R-20261009-231134-1eF3 · Cycle 0 · Task T1
Mode: LEARNING MODE. One new User-scoped classic BuildFromScratch Form, one native Toolbox Button, one Name edit, one Caption edit, one ordinary Designer Save, one Form-tab close, one Designer Form-menu reopen.
Editing scope: User (signed-in user as in prior records). Target identities: Form `FX_SingleButtonLab01`; Button Name `FX_SingleButton01`; Button Caption `Factory Test Button`.
Evidence directory: `evidence/EXP-036/`.
Worker identity: `4c394def-9633-44dd-970d-aec5624cf0f1` (task_message_id `69d8c5fb-9e7b-4a39-92bc-855214011a3f`), distinct from all earlier worker identifiers in the records read.

## Objective

Determine whether a single native Button's Name and Caption, set in the Web Designer and committed by one ordinary Designer Save, are recovered on the same User-scoped Form after an ordinary Form-tab close and a Designer Form-menu reopen.

Conclusion is limited to **component-definition recovery across this Save and close/reopen sequence**. This experiment does not establish Forms-database durability, cache eviction, metadata unloading, or server-side serialization. Ordinary close/reopen does not prove those.

## Relationship to prior evidence

- **EXP-027** (observed, single run) is the closest precedent: the same Name-plus-Type lifecycle with `FX_ButtonRecovery02` and `PushButton`. It did not test Caption. EXP-036 adds the Caption check and uses a fresh Form name.
- **EXP-003-R2** (verified) covers Toolbox Button placement and Caption `Test`.
- **EXP-002-R2** (verified) covers Build-from-Scratch Form creation.
- **EXP-019-R2** (replay_verified) covers the fresh-dialog Classic / BuildFromScratch selection prefix.
- **EXP-033-R4** (replay_verified, rendered UI only) and **EXP-035-R2** (replay_verified, rendered UI only) cover the Select Form Name-filter absence check and the retention observation.
- Full source list and cited evidence paths: `evidence/EXP-036/t1-repository-review-notes.md`.

## T1 — repository-only review (completed)

- Browser tool calls: **0**. No tab listing, snapshot, screenshot, click, key, navigation, or evaluate.
- Records and recipes read: AGENTS.md, EXP-002-R2, EXP-003-R2, EXP-019-R2, EXP-027, EXP-033-R4, EXP-035-R2, `recipes/forms/create-basic-form.md`, `recipes/components/add-component-from-toolbox.md`, `recipes/components/configure-basic-component.md`.
- No prior record names `FX_SingleButtonLab01`, `FX_SingleButton01`, or `Factory Test Button`.
- Decisive gaps and risks are listed in §Open decisions below and in the T1 evidence notes.

## T2 — browser preflight (completed; details `evidence/EXP-036/t2-preflight-notes.md`)

Worker session `4c394def-9633-44dd-970d-aec5624cf0f1`, task_message_id `462cef0d-3151-4229-a63c-0f3043e90f4f`.

- **Inherited state:** one Mongoose portal tab; no Designer tab; Web Client usable with the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no sign-in or configuration prompt; Select Form closed; no Form open; Explorer shows four collapsed root folders.
- **Obstruction:** the portal notification banner (`DistributionIFSContactUs…`) covered the Web Client menu bar, identity bar and top of toolbar. Closed once via its own close control (portal UI, not a Mongoose object), as the recipe's precondition requires. Evidence: `t2-01` (before), `t2-03` (after).
- **Designer launch:** one ordinary launch via the Web Client toolbar Designer split control (`f1e39`). New tab `WSWebClient/designer/Default.aspx` with no `MGForm` parameter. Identity-by-name not verified (both toolbar controls are labelled "Designer"); split behaviour observed.
- **Scope:** "Identify Your Editing Scope" showed Scope = User and User = anton.ramos@3mworks.com.ph; confirmed once with OK.
- **Settled Designer:** no Form tab; blank canvas; Properties empty; Save / Regenerate / Undo / Redo disabled (clean); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialog. Evidence: `t2-06` (scope dialog), `t2-08` (settled).
- **Counts:** Designer launch 1/1; Select Form opens 0; Form create 0; component 0; property 0; Save 0; close 0; reopen 0; JavaScript 0; auth 0. Recovery allowance: fresh snapshot 0/1, corrected inspection 0/1.
- **Limits:** T2 proves a usable User-scope Designer with no open Form. It does not prove Form inventory or the absence of `FX_SingleButtonLab01`, which is the Select Form step.
- **Tool-generated files:** `evidence/playwright/*` (gitignored, not worker-authored) were written by the browser tool on each call. Not deleted.

## T3 — Select Form absence check (partial; operator-confirmed; reconciled in T4)

Worker session `4c394def-9633-44dd-970d-aec5624cf0f1` ended at the agent turn limit (80) after the recovery allowance was consumed. Results below are taken from the saved accessibility snapshots; the operator confirmed them as the observations of record.

- **Positive control `FX_ComponentRecoveryLab02`** (Filter By = Name; Case Sensitive and Starts With unchecked): exactly one Name-matching row. Evidence: `evidence/EXP-036/t3-07-positive-control-settled-snapshot.md` (grid row `FX_ComponentRecoveryLab02`, textbox `FX_ComponentRecoveryLab02`, dialog `Select Form`). Viewport capture `t3-08-positive-control-settled-viewport.png` was recorded by the audit; it was not inspected in T4.
- **Target `FX_SingleButtonLab01`**: zero rows in the result grid (grid `f1e93` with no row children); textbox reads `FX_SingleButtonLab01`. Evidence: `evidence/EXP-036/t3-09-target-query-settled-snapshot.md`. The viewport capture `t3-10` timed out and no file was written (`t3-02`, the earlier timed-out capture, is also absent).
- **Ordinary Cancel** (`Cancel` button, `f1e422`) closed the dialog without activating a row. Evidence: `evidence/EXP-036/t3-11-post-cancel-snapshot.md` (no `Select Form` dialog in the tree).
- **Interpretation:** the positive control passed; the zero-match target result is settled for the Name filter in the configured match mode. This is a rendered Select Form result only and does not prove database absence.
- **Counts (T3):** Select Form opened 1 (after one corrected `Open` click); Filter By set to Name 1; positive-control keys 25; target keys 20; Cancel 1; row activation 0; Designer launch 0 (cumulative 1 of 1 from T2); Form create 0; component 0; property 0; Save 0; close 0; reopen 0; JavaScript 0; authentication 0.
- **Errors (T3 audit `evidence/EXP-036/harness-audit-T3.md`):** `Open` click timeout at "visible, enabled and stable" (`aria-ref=f1e23` resolved to the Web Client `Open` toolbar control); screenshot timeouts at "waiting for fonts" for `t3-02`, `t3-10`. Operator reports these background-tab timeouts changed no state.
- **Audit flag:** "FX_ComponentRecoveryLab02 [EXACT MISMATCH]" is expected. The audit compares spelled key runs against the target string; the positive-control string is not the target.

## T4 — read-only current-state reconciliation (completed)

Task: one bounded read-only check after T3. No Designer launch, no Select Form, no Form, component, property, Save, close or reopen action; no JavaScript; no authentication.

- **Browser actions (T4):** tab list 1; tab select index 1 (Designer) 1; planned current-state snapshot 1 (`evidence/EXP-036/t4-01-designer-current-state-snapshot.md`); viewport screenshot 1 (`evidence/EXP-036/t4-02-designer-current-state-viewport.png`). Tab selection is browser navigation, not a Mongoose lifecycle action.
- **Tab listing:** two tabs. Tab 0 is the Web Client (`Mongoose`, portal URL), not re-snapshotted in T4. Tab 1 is the Designer (`mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx`, no `MGForm` parameter, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`). Only one Designer tab exists.
- **Designer observed (tab 1, selected):**
  - Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
  - Save, Regenerate Form, Undo and Redo disabled; alignment and sizing controls disabled.
  - Properties panel: Form tab selected; Name/Value tree empty; no component selected.
  - Canvas blank; no Form-tab heading above the canvas; no `FX_` Form name visible.
  - No Select Form or other dialog in the snapshot or the screenshot.
  - The snapshot structure and refs (e1–e280) match the T2 settled snapshot `evidence/EXP-036/t2-07-designer-settled-snapshot.md`.
- **Screenshot content:** `t4-02` shows the Toolbox (Button row present, not armed), an empty canvas, an empty Properties panel, the greyed Save icon, and the User status bar. It does not show a Form tab, so it does not prove the absence of a Form in other Designer windows; the tab list shows only one Designer.
- **Counts (cumulative):** Designer launch 1 of 1 (unchanged); Select Form opens 1 (T3); Form create 0; component 0; property 0; Save 0; close 0; reopen 0; JavaScript 0; authentication 0. Recovery allowance: fresh untargeted snapshot 1 of 1 and corrected visible inspection 1 of 1, both consumed in T3. T4 used neither (the planned snapshot is a current-state read, not a recovery read).
- **Assessment:** The Designer is usable in User scope, is clean, shows no target Form, and has no blocking prompt. The absence check passed for the observed Select Form. The prerequisites for a separately authorized Form-creation task are met on this evidence.
- **Caveat for the mutation task:** the recovery allowance is exhausted. Steps that previously needed corrected attempts (Save Template checkbox and inline Name editor, EXP-027 T4 and T5) must stop on any failure rather than retry. Any new mutation requires its own authorization.
- **Next permitted action:** a separately authorized Phase M task, beginning with a fresh tab snapshot and a visible User-scope check. Not authorized by T4.

## T5 — Form creation, stopped before Finish (blocker)

Task: create exactly one Form `FX_SingleButtonLab01` (Classic / BuildFromScratch, Save Template unchecked), then verify baseline. Result: **stopped before the creation commit.** No Form exists yet.

- **Preflight (tab 1, Designer, selected):** snapshot `evidence/EXP-036/t5-01-designer-preflight-snapshot.md`. User scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save and Regenerate disabled; no dialog; no Form tab. Matches the T4 state. The Web Client was the selected tab at the start of T5; I selected the Designer tab (tab selection only).
- **New Form Definition:** New toolbar button clicked once. Dialog `Form Wizard Selection` opened (`t5-02`). Screenshot `evidence/EXP-036/t5-03-before-create-wizard-selection.png` shows New Form radio selected, Category and Wizard empty, User scope bar.
- **Category:** dropdown opened (`t5-04`), rendered option `Classic` clicked once. Snapshot `t5-05` shows Category combobox value `Classic`.
- **Wizard:** dropdown opened (`t5-06`), rendered option `Build from Scratch` clicked once. Snapshot `t5-07` (before OK) shows New Form, Category `Classic`, Wizard `BuildFromScratch`.
- **OK:** clicked once. Wizard page 1 `Form Wizard - Build From Scratch` appeared (`t5-08`): Name empty, Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source / Query Form / Comments empty, Back and Finish disabled.
- **Name:** `FX_SingleButtonLab01` entered once into the Name combobox (`browser_type`). Snapshot `t5-09` shows the combobox value exactly `FX_SingleButtonLab01`; other page-1 fields unchanged.
- **Next:** clicked once. Page 2 appeared (`t5-10`): checkbox `Save Template` **checked** (the default), Next disabled, Finish enabled.
- **Save Template uncheck: FAILED.** One native click on the checkbox (`e571`, `SaveTemplateCheckBox`) timed out: `element ... intercepts pointer events` by the checkbox's display `<span>` (`ext-comp-1526-displayEl`), retried until the 5 s timeout. The required corrected attempt would be a second click on the same control, which the brief forbids (recovery allowance already consumed in T3). **Stopped. Finish was NOT clicked.** Post-failure snapshot `t5-11`: Save Template still `[checked]`; Finish enabled; Next disabled; wizard still on page 2. Screenshot `evidence/EXP-036/t5-12-blocked-save-template-page-viewport.png` (viewed): wizard page 2 with Save Template checked over the blank Designer canvas, Finish enabled, and the User scope bar.
- **Blocked state left in place:** the wizard is still open on page 2 with the Name and the Save Template state unsaved. I did not press Cancel because that would discard the entered wizard data and is a lifecycle action outside this task's authority. This is an open in-page dialog, which the task's stable-state rule normally forbids; the rule says to checkpoint rather than discard, so it was left open.
- **Counts (T5):** New 1; Form Wizard Selection OK 1; wizard Name entry 1; Next 1; Save Template uncheck attempts 1 (failed, not applied); Finish 0; Form created 0; component 0; property 0; Save 0; close 0; reopen 0; Designer launch 0 (cumulative 1 of 1); JavaScript 0; authentication 0; row activation in Select Form 0.
- **Recovery allowance:** no `Ref ... not found` error occurred in T5, so no fresh untargeted recovery snapshot was used for recovery. The T5 snapshots `t5-01`, `t5-02`, `t5-04` to `t5-11` were planned state reads after each action. The allowance (1 fresh snapshot, 1 corrected inspection) was already consumed in T3 and was not used again.
- **Interpretation of the failure:** The Save Template checkbox display `<span>` intercepts pointer events over the input. This matches EXP-027 T4's note that Save Template needed a corrected attempt. It is a rendered-UI interaction blocker, not a state-level finding. Whether a visible label click or keyboard action would work is **unresolved** and would need a new authorization.
- **Next permitted action:** a separately authorized task to resolve the open wizard (for example a visible label click on `Save Template`, or an operator-authorized Cancel with confirmation), and to decide whether to finish with Save Template checked. Under the brief, Save Template must be unchecked, so a checked template would not satisfy the brief as written. No Form-creation retry without that authorization.

## T6 — Save Template correction (operator-authorized; succeeded)

Operator authorization: this task authorized one visible label-text click on `Save Template`, then, only if still checked, one Space press on the focused checkbox. Scope limited to the Save Template state; Finish, Cancel, other fields, Save, placement, and scope changes were excluded.

- **Preflight (tab 1, Designer, selected):** snapshot `evidence/EXP-036/t6-01-preflight-wizard-page2-snapshot.md`. Wizard `Form Wizard - Build From Scratch` on page 2; `checkbox "Save Template" [checked]`; Next disabled; Finish enabled and unpressed; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. The Name field is on page 1 and is not visible on page 2. Name was **not re-verified in T6**; the last visible read was T5 `t5-09`. Returning to page 1 (Back) would have been an extra wizard navigation, so I did not do it.
- **Interaction 1 (succeeded):** one native click on the rendered label text `Save Template` (ref `e292`, `page.getByText('Save Template')`), not the checkbox input that was intercepted in T5.
- **Post-click snapshot:** `evidence/EXP-036/t6-02-after-label-click-snapshot.md`. The checkbox is now `[active]` with **no `[checked]` attribute** (previously `[checked]`). Finish enabled, Next disabled, dialog still open.
- **Visual corroboration:** `evidence/EXP-036/t6-03-after-label-click-viewport.png` (viewed). The Save Template box is visibly **unchecked** (empty square with a focus ring); the wizard remains on page 2; Back, Next (disabled), Finish, Cancel, Help visible; scope bar User.
- **Interaction 2 (not performed):** the Space press was conditional on the checkbox remaining checked. It did not, so no keyboard action was taken.
- **Recovery allowance:** unchanged. The experiment-wide allowance was consumed in T3. T6 used no recovery snapshot and no corrected inspection.
- **Finish: not pressed.** No Form has been created. The wizard is still open on page 2, which is an in-page dialog left open because the operator said to keep state rather than cancel.
- **Counts (T6):** Save Template label click 1 (success); Space 0; Finish 0; Form created 0; component 0; property 0; Save 0; close 0; reopen 0; Designer launch 0 (cumulative 1 of 1); JavaScript 0; authentication 0.
- **Next permitted action:** a separate bounded authorization for Finish, with Name verified first (the Name check needs page 1 visible or another read-only approach). No Form-creation step is authorized by T6.

## T7 — Form creation completed (AC-3); component baseline verified

Task: complete the single Finish for `FX_SingleButtonLab01` under the T6 wizard state, then verify the new Form's identity, scope, clean state and empty component baseline. No Button placed.

- **Preflight (tab 1, Designer; the Web Client, tab 0, was selected at task start, so I selected tab 1 via tab selection):** snapshot `t7-01-preflight-wizard-page2-snapshot.md`. Wizard `Form Wizard - Build From Scratch` on page 2; Save Template `[active]` without `[checked]`; Next disabled; Finish enabled; scope bar `User / anton.ramos@3mworks.com.ph`. Screenshot `t7-02-preflight-before-finish-viewport.png` (viewed): Save Template box visibly unchecked; Finish enabled; User scope. Gate passed.
- **Finish: clicked once** (ref `e298`). No error. Snapshot `t7-03-after-finish-snapshot.md` showed an `alertdialog` `Infor Mongoose Application Development Framework - Form Wizard - Build From Scratch` with text `Process Completed Successfully` and an OK button.
- **OK on the success alert: clicked once** (ref `e307`), the recipe's step 5 acknowledgement. This is not a second Finish and not a Save. Post-OK snapshot `t7-04-form-created-snapshot.md`: no remaining dialog in the tree; browser URL changed to `...&MGForm=FX_SingleButtonLab01`.
- **Form identity (rendered and tree):**
  - Form tab heading `FX_SingleButtonLab01` (`tab [selected]`), with `closable FX_SingleButtonLab01` close control.
  - Properties tree: Name `FX_SingleButtonLab01`; Caption blank; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`.
  - Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- **Clean state:** Save `[disabled]`; Regenerate Form disabled; Undo and Redo disabled. Screenshot `t7-05-form-created-viewport.png` (viewed): heading `FX_SingleButtonLab01`, empty grid canvas, Properties panel showing Name, Caption, Version, Device Type, Form Type and Is Master, Save greyed, User scope bar. The Name cell is truncated visually (`FX_SingleButtonLa...`); the full value is from the accessibility tree.
- **Empty component baseline:**
  - Canvas empty (`t7-05`).
  - Details panel was expanded once (view control `Expand Panel`; not a lifecycle action), then its `Components` tab selected (view control). Snapshot `t7-06-details-expanded-baseline-snapshot.md` (Collections tab) and `t7-07-components-tab-baseline-snapshot.md` (Components tab).
  - Components grid shows one root row `Pane (00)` with no child component rows, and no Type value. Screenshot `t7-08-components-baseline-viewport.png` (viewed): one row `Pane (00)` with a page icon under Name, other columns empty.
  - Limitation: `Pane (00)` is the Form's root container row, shown by the Designer. The row is not labelled as a Button or any control. No Button exists before placement.
- **Persistence (what this shows and does not show):** the recipe (`recipes/forms/create-basic-form.md`, verified) states that Finish persists the Form immediately, and the Designer opens it clean. In this run, the Designer opened `MGForm=FX_SingleButtonLab01` with Save disabled after Finish. That is consistent with the recipe, but T7 did not independently confirm persistence (no reload or Select Form re-check, which the brief excluded). Creation persistence is **not separately proven** here. The one ordinary Designer Save is reserved for after Button configuration and was **not** performed.
- **Save Template:** unchecked on page 2 before Finish (visual, `t7-02`). Whether a template artifact was created was **not checked** (no Select Form inventory in T7).
- **Counts (T7):** Finish 1; success-alert OK 1; Designer launch 0 (cumulative 1 of 1); New 0 (T5 only); Save 0; Regenerate 0; component placement 0; property edit 0; close 0; reopen 0; Select Form 0; JavaScript 0; authentication 0; row activation 0; panel and tab view clicks 2 (`Expand Panel`, `Components` tab).
- **Recovery allowance:** unchanged; consumed in T3. T7 used no recovery snapshot and no corrected inspection (every snapshot was a planned state read).
- **Stable state:** no open in-page dialog or browser-native prompt after the OK. Designer tab selected. FX_SingleButtonLab01 open and clean for the separately authorized component task.
- **Next permitted action:** a separately authorized Button-placement task (Toolbox Button, Name `FX_SingleButton01`, Caption `Factory Test Button`, then one ordinary Save). Not authorized by T7.

## T8 — Button placement (stopped before placement; blocker)

Task: place exactly one Toolbox Button on the blank FX_SingleButtonLab01 canvas, then set Name `FX_SingleButton01` and Caption `Factory Test Button`. Result: **not placed. Stopped at the canvas-placement step.**

- **Preflight (tab 1, Designer, selected):** snapshot `evidence/EXP-036/t8-01-preflight-designer-snapshot.md`. Form tab `FX_SingleButtonLab01` selected (heading present, closable control present); Save and Regenerate disabled; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Components grid shows only the root row `Pane (00)`. Screenshot `t8-02-preflight-baseline-viewport.png` (viewed) matches: heading `FX_SingleButtonLab01`, empty canvas, Components grid with `Pane (00)` only, User scope bar. Gate passed.
- **Toolbox Button row armed:** one native click on the Toolbox treeitem `Button` (snapshot ref `e84`). Screenshot `t8-03-button-armed-before-placement-viewport.png` (viewed): the `Button` row is highlighted; canvas unchanged; Components grid still only `Pane (00)`; Save still disabled.
- **Placement: NOT performed.** The canvas exposes no accessibility ref in the Designer snapshot (`t8-01` has no canvas element). The brief permits a single coordinate-based canvas click for this case, but the browser click tool accepts only a snapshot ref or a selector, with no coordinate parameter. I did not guess a selector against the design surface, because a mismatched match could click an unintended control. Per the brief, this is a blocker; placement was not retried and no other route was used.
- **Not done (by stop):** no Button placed; no Name or Caption edit; no property-grid Type reading (no Button exists, so the literal Type label is unobserved); no Save or Regenerate; no close or reopen; no other Form touched.
- **Counts (T8):** Toolbox Button row click 1 (arming only); canvas placement 0; Name edit 0; Caption edit 0; Save 0; Regenerate 0; Form create 0; close 0; reopen 0; Designer launch 0 (cumulative 1 of 1); Select Form 0; JavaScript 0; authentication 0; view-only tab/panel clicks from T7 unchanged.
- **Recovery allowance:** unchanged (consumed in T3). No recovery snapshot or corrected inspection was used in T8.
- **Stable state:** Designer tab selected; FX_SingleButtonLab01 open and clean (Save disabled); no in-page dialog and no browser prompt. The Toolbox Button row remains highlighted (a toolbox selection, not a Form change).
- **Next permitted action:** a separately authorized placement step that can issue one canvas click at a stated screen position (a coordinate-capable action), or an operator-supplied canvas target reference. Until then, the Button is not placed and the Name, Caption, Save and reopen checks are not started.

## T9 — Button placement and Name (Caption not set; stopped)

Task: place exactly one native Toolbox Button, set Name `FX_SingleButton01` and Caption `Factory Test Button`, capture pre-Save evidence. No Save, Regenerate, close or reopen. Result: **one Button placed and Name committed; Caption not set; stopped.**

- **Operator statement (recorded as given in the task; not observed by the worker):** the operator restarted only the Playwright MCP tool server to enable `browser_mouse_click_xy`. Chrome, Mongoose and the Designer were not restarted or reloaded by the worker.
- **Preflight (tab 1, Designer, selected):** snapshot `t9-01-preflight-designer-snapshot.md`; screenshot `t9-02-preplacement-armed-viewport.png` (viewed). FX_SingleButtonLab01 tab selected; User scope bar; Save disabled before placement; Components grid `Pane (00)` only; Toolbox `Button` row highlighted (armed). Gate passed.
- **Placement (one coordinate click, grounded in `t9-02`):** `browser_mouse_click_xy` at (450, 250), an empty point inside the red-bordered Form grid (grid roughly x 259–1222, y 101–825). Not repeated.
- **Placement result:** screenshot `t9-03-after-placement-click-viewport.png` (viewed): one button on the canvas at about (450–565, 250–285), selected with handles; Properties header `button1_USER (Button)`; Type `PushButton`; Components grid shows `Pane (00)` > `button1_USER`, Type `PushButton`, one child row. Save is enabled (dirty). Snapshot `t9-04-after-placement-snapshot.md`: exactly one component row. **Exactly one Button confirmed.**
- **Type label (literal):** the property grid and the Components grid display **`PushButton`**, exactly as the native Toolbox Button reports it. The brief's `Type=Button` was not displayed; the literal label is recorded as observed.
- **Name edit: committed.** Double-click on the Name value (`e624`) opened the inline editor with `button1_USER` fully selected (`t9-05-name-editor-open-viewport.png`, viewed; the editor was confirmed in the property grid, not the Components row). Snapshot `t9-06-name-editor-snapshot.md` gave the active editor textbox `e752`. Entered `FX_SingleButton01` with one entry action (fill followed by Enter). Screenshot `t9-07-after-name-commit-viewport.png` (viewed): Name `FX_SingleButton01` in the property grid; Components grid row `FX_SingleButton01`, Type `PushButton`. Commit method: Enter (the plan's Name step; the Caption step uses Tab per the brief).
- **Caption: NOT set.**
  - Snapshot `t9-08-pre-caption-snapshot.md` gave the Caption value cell `e641`/`e644` and the picker button `e647`.
  - The double-click on `e644` resolved in the browser to `.mg-arrow-cell-icon`, the Caption field's dropdown arrow. It opened a list of string-resource keys (`ApplyFullTextIndexScriptQuestion`, `CatalogNotExistNotice`, `Collection Name`, and so on). Screenshot `t9-09-after-caption-dblclick-viewport.png` (viewed). **No row was selected**; Caption stayed blank.
  - Escape closed the list with no selection (`t9-11-after-escape-viewport.png`, viewed; Caption blank; Name still `FX_SingleButton01`).
  - Snapshot `t9-12-caption-focused-snapshot.md`: the Caption cell is active and selected, but the snapshot exposes **no editable textbox** for it. The description pane's `Caption` textbox is help text, not the editor.
  - One key press `F` (press_key) was sent to test whether the focused Caption editor accepts typed text. The screenshot `t9-13-caption-first-char-viewport.png` (viewed) shows **no character in the Caption field**. Where that key went is **unobserved**. No visible side effect was seen, but this is not proof of none.
  - Stopped here. The brief requires a stop after a corrected-attempt condition, and the recovery allowance is spent. No further keys, no Tab, no clicks in the Caption field, and no picker use.
- **Settled state (read-only):** snapshot `t9-14-settled-state-snapshot.md`: Form tab `FX_SingleButtonLab01`; Components `FX_SingleButton01 / PushButton`; Save **enabled** (unsaved change, expected); no dialog or browser prompt; scope bar User. Screenshot `t9-13` shows Name `FX_SingleButton01`, Caption blank, Type `PushButton`, From Device Master `True`.
- **Counts (T9):** Form creation 0 (cumulative 1 from T7); coordinate placement click 1; component placement successful 1 (one Button); Name edit 1 (committed by Enter); Caption dblclick 1 (opened resource dropdown, no selection); Escape 1; key `F` 1 (no visible effect); Caption committed 0; Tab 0; Save 0; Regenerate 0; close 0; reopen 0; Select Form 0; JavaScript 0; authentication 0; picker button clicks 0.
- **Recovery allowance:** consumed in T3 and unchanged in T9. No fresh untargeted snapshot or corrected inspection was used for recovery.
- **Unresolved for the next task:**
  - The Caption input is not exposed to the accessibility tree and was not focused by the double-click. A supported way to focus the Caption text input (for example one grounded visible click on the editor's text area at its left portion, which needs separate authorization) is required.
  - The stray `F` key's destination is unobserved.
  - Caption commit method (Tab, as the brief specifies) is untested.
- **Next permitted action:** a separately authorized Caption-only step, starting from a fresh snapshot, to focus the Caption text input and enter `Factory Test Button` with one commit. The Form must remain unsaved until a separately authorized Save task.

## T10 — Caption entry and one ordinary Save

Task: enter the Caption on the configured Button, verify pre-Save state, perform exactly one ordinary Designer Save, and verify it returned clean. No close or reopen.

- **Preflight (tab 1, Designer, selected):** snapshot `t10-01-preflight-snapshot.md`; screenshot `t10-02-preflight-viewport.png` (viewed). Form tab `FX_SingleButtonLab01`; scope bar `User / anton.ramos@3mworks.com.ph`; Components grid one row `FX_SingleButton01` / `PushButton` under `Pane (00)`; Caption blank; Save enabled (unsaved change). Gate passed.
- **Caption double-click: coordinate, on the value text area.** The earlier ref-based double-click in T9 landed on the dropdown arrow, so T10 used `browser_mouse_click_xy` with `clickCount: 2` at (1740, 254). In the grounded screenshot (`t10-02`) that point is the left portion of the Caption value cell, left of the arrow at about x 1842.
  - Result: `t10-03-after-caption-dblclick-viewport.png` (viewed) shows the Caption cell as an editable combobox with a white border and no open list. Snapshot `t10-04-after-caption-dblclick-snapshot.md` lists the Caption editor as `combobox [active]` (`e585`). No resource-key list was open.
- **Focus confirmation:** the snapshot reports the Caption combobox as `[active]`, the screenshot shows the editor state, and no list is open. Focus was confirmed from the accessibility state, not by a separate keystroke.
- **Caption entry: ONE entry action.** `browser_type` on `e585` with text `Factory Test Button` and `submit: true` (fill, then Enter). No resource key was selected, and no other keystroke was sent.
- **Post-commit (`t10-05-post-caption-commit-viewport.png`, viewed; `t10-06-post-caption-commit-snapshot.md`):**
  - Caption cell value (exact text from the accessibility tree): `Factory Test Button`.
  - The combobox is no longer `[active]`; no list is open; the editor has exited edit mode.
  - Name `FX_SingleButton01`; Type `PushButton`; From Device Master `True`; Description blank.
  - Components grid: one row `FX_SingleButton01` / `PushButton`.
  - Scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
  - Save enabled before Save.
- **Literal vs resource-key:** the display shows the typed literal text and no resource list. Whether the Enter committed a literal string or a resource whose display text happens to match cannot be distinguished from the rendered grid alone. This is a limitation, not a finding.
- **Save: ONE ordinary Designer Save.** Toolbar Save (`e16`) clicked once.
  - `browser_network_requests` (filter `SaveChanges`): exactly one request, `POST .../DesignerSession/SaveChanges => [200]`.
  - Response body (`browser_network_request`, index 2, response-body): `{"Success":true,"Message":"Form [FX_SingleButtonLab01] and global object(s) were saved.","Payload":[]}`.
  - The message says "global object(s) were saved", a generic server message. It does not itemise what was saved.
- **Post-Save (`t10-07-after-save-viewport.png`, viewed; `t10-08-after-save-snapshot.md`):**
  - Save button `[disabled]`; a Save toast `Form [FX_SingleButtonLab01] and global object(s) were saved.` is visible at top right.
  - No error or blocking dialog.
  - Form tab `FX_SingleButtonLab01`; grid row `FX_SingleButton01` / `PushButton`; Caption `Factory Test Button`; scope User.
- **Counts (T10):** Caption coordinate double-click 1; Caption text entry 1 (committed by Enter); Save 1 (one POST, `Success: true`); Regenerate 0; close 0; reopen 0; Form create 0 (cumulative 1); component placement 0 (cumulative 1); Name edit 0 (T9 only); Select Form 0; JavaScript 0; authentication 0; resource-list selection 0; Designer launch 0 (cumulative 1 of 1).
- **Recovery allowance:** consumed in T3; unchanged in T10. No fresh untargeted snapshot or corrected inspection was used for recovery. The T9 stray `F` keypress is unobserved and was not corrected.
- **Next permitted action:** a separately authorized close (Form-tab `closable FX_SingleButtonLab01`) and reopen (Designer Form-selection path) task for the post-reopen check. Not authorized by T10.

## T11 — Ordinary Form-tab close and Form-menu reopen; recovered Button verified

Task: close `FX_SingleButtonLab01` once via its Form-tab close control, reopen it once via a supported Designer path, verify the recovered Button. No Save, Regenerate, placement, property edit, or other Form action.

- **Pre-close preflight (tab 1, Designer):** snapshot `t11-01-preclose-snapshot.md`; screenshot `t11-02-preclose-viewport.png` (viewed). Form tab `FX_SingleButtonLab01`; scope bar `User / anton.ramos@3mworks.com.ph`; Save `[disabled]`; no dialog; Components `Pane (00)` > `FX_SingleButton01` / `PushButton`; Caption `Factory Test Button`. Gate passed.
- **Tab selection note:** one `browser_tabs select` (index 1) failed with `Tab 1 not found`; a tab list then showed the Designer still at index 1, and the retry succeeded. No browser action was repeated.
- **Close (ONE click):** Form-tab control `closable FX_SingleButtonLab01` (`e240`). After: `t11-03-after-close-viewport.png` (viewed) shows the Designer with no Form tab and no canvas content, the Toolbox and Properties panels, the greyed Save, and the User scope bar. `t11-04-after-close-snapshot.md`: no `dialog` or `alertdialog`; no `FX_` heading; URL no longer carries `MGForm`. **No unsaved-changes prompt, no error.** Designer client stayed open.
- **Reopen path (ONE click):** the Designer top-bar `Form` menu (`e3`) was opened, showing a menu with `Definition`, `Sign Out`, and a recent-forms list (`FX_SingleButtonLab01`, `FX_ComponentRecoveryLab03`, `FX_ComponentRecoveryLab02`, and others). `t11-05-form-menu-open-snapshot.md` lists the entries. The `FX_SingleButtonLab01` entry (`e614`) was clicked once. `Sign Out` was not touched. This is the Designer Form-menu recent-forms path (supported in EXP-027 and EXP-003-R2), not a cold URL and not an unload.
- **Reopen result:** URL now `...&MGForm=FX_SingleButtonLab01`; `t11-06-post-reopen-snapshot.md`: Form tab `FX_SingleButtonLab01` selected with closable control; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Save `[disabled]`; Properties (Form tab): Name `FX_SingleButtonLa…` (truncated on screen; full value in the Components-selected property grid below); Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; Caption blank. `t11-07-post-reopen-viewport.png` (viewed): the canvas shows one blue button captioned `Factory Test Button` at the placed position.
- **Components grid (view controls only):** the Details panel was expanded (`Expand Panel`, `t11-08-details-expanded-snapshot.md`), and the Components tab was clicked (`t11-09-components-tab-post-reopen-snapshot.md`; viewed `t11-10-…png`: `Pane (00)` collapsed, no child shown). The grid's `Expand` toolbar control (`e842`) then showed the children. `t11-11-components-expanded-snapshot.md` and `t11-12-components-expanded-viewport.png` (viewed): `Pane (00)` > exactly **one** child row `FX_SingleButton01`, Type `PushButton`, Pane `0`, Tab `0`.
- **Selection (ONE click):** the `FX_SingleButton01` Components row (`e958`) was clicked once to select the existing Button. No edit. `t11-13-button-selected-snapshot.md` and `t11-14-button-selected-property-grid-viewport.png` (viewed): the Properties header reads `FX_SingleButton01 (Button)`; the property grid shows **Name `FX_SingleButton01`** (snapshot full value), **Caption `Factory Test Button`** (snapshot full value; the screenshot shows the same text in the field), **Type `PushButton`** (literal), From Device Master `True`; Save `[disabled]`; scope bar User; no dialog.
- **Comparison across milestones:**
  - Pre-Save (T9/T10): Name `FX_SingleButton01`, Type `PushButton`, Caption `Factory Test Button` (committed, not saved).
  - Post-Save (T10): Save response `Success: true`; Save disabled; the same three values visible.
  - Post-close (T11): no Form tab; no prompt.
  - Post-reopen (T11): the same one child, Name, Type and Caption, and Save disabled.
- **Type wording:** the brief expected `Type=Button`. The literal displayed value is `PushButton` at every milestone. The Toolbox row is labelled `Button`. The displayed Type is recorded as `PushButton`, not as `Button`.
- **Limitations:** the Components-grid Name column and the property Name cell are visible in full in the snapshot but truncated in the Form-tab Properties panel (`FX_SingleButtonLa…`). The recovered Caption is shown as rendered text and in the accessibility tree; it does not show whether it is a literal or a resource key. The screenshots show text; the snapshots show full values.
- **Counts (T11):** Form-tab close 1; Form-menu open 1; recent-forms reopen 1; Expand Panel 1; Components tab 1; grid Expand 1; Components row selection 1; tab selects 3 (one failed); Save 0; Regenerate 0; placement 0; property edit 0; Select Form 0; JavaScript 0; authentication 0; cold MGForm navigation 0; unload 0. Cumulative since task start: Form create 1; Button placement 1; Name edit 1; Caption edit 1; Save 1; close 1; reopen 1; Designer launch 1 of 1.
- **Recovery allowance:** consumed in T3; unchanged in T11. No recovery snapshot or corrected inspection used.
- **Stable state:** the reopened `FX_SingleButtonLab01` is open and clean (Save disabled), with the Button selected. No in-page dialog or browser prompt.
- **Not established by T11:** database durability, cache eviction, server-side serialization, or literal-versus-resource Caption representation. The close/reopen shows that the Designer re-displays the Button in the same session after an ordinary close and Form-menu reopen. It does not prove what the server stores or how.
- **Next permitted action:** the separately authorized final read-only audit task (recovered-state audit, lifecycle counts, repository confinement). No Save or lifecycle action is authorized by T11.

## T12 — Final read-only audit and evidence matrix

Full matrix with exact paths: `evidence/EXP-036/t12-final-audit-and-evidence-matrix.md`. Summary:

- **Read-only inspection (tab 1, selected):** `t12-01-final-readonly-snapshot.md`, `t12-02-final-readonly-viewport.png` (viewed). Scope User; Form `FX_SingleButtonLab01`; Save `[disabled]`; no dialog; exactly one child `FX_SingleButton01` / `PushButton` under `Pane (00)`; Caption `Factory Test Button`. No property editor, row, Save, close or reopen touched.
- **Lifecycle reconciliation:** Form created 1; Designer launch 1 of 1; Button placed 1; Name edit 1; Caption edit committed 1; ordinary Designer Save 1 (`Success: true`); Form-tab close 1; recent-forms reopen 1; Regenerate 0; Unload 0; cold navigation 0; authentication 0; JavaScript 0.
- **Blocked or corrected interactions (complete list in the matrix §3):** T3 Open-click timeout and screenshot timeouts (allowance consumed); T5 Save Template checkbox intercepted (not applied); T6 operator-authorized Save Template label click (succeeded); T8 placement blocked; T9 operator-stated MCP restart, coordinate placement, Caption dropdown mis-hit, Escape, and one unobserved `F` keypress; T10 coordinate Caption double-click (authorized); T11 one failed tab select, retried. The ambiguity-recovery allowance was consumed in T3 and not extended.
- **Acceptance checks:** IDs AC-2 (absence) and AC-3 (Form creation) are the coordinator-used labels. Designer/scope, placement, Name, Caption, Save, close, reopen and recovered-Button checks are supported as observed (matrix §4). **Type=`Button` is not supported as literal wording: displayed Type is `PushButton`.** Literal-vs-resource Caption is unresolved. Durability, cache and serialization are not tested. IDs beyond AC-3 cannot be bound from the repository, because the brief's full definitions are unreadable here. No acceptance is declared by the worker.
- **Repository confinement:** `git status` not runnable (Bash disabled). Worker-written files are limited to this record and `evidence/EXP-036/` (T4–T12). `evidence/playwright/*` is gitignored browser output. Pre-existing unrelated modifications under `tools/learning-harness/` (listed at session start) were not written by this worker and were not changed.
- **Next:** coordinator decision on acceptance mapping and on Type wording (decision 1). No further browser action is authorized. The target Form is left open and clean.

## T13 — Documentation finalization and acceptance (no browser action)

No browser tool, Mongoose interaction, fresh inspection, or recovery step was used in T13. Files updated: this record and `evidence/EXP-036/t12-final-audit-and-evidence-matrix.md` (section 7 added; §4 Type row and §6 bullet corrected). No other file was created or changed.

**Type clarification (operator, recorded).** `FX_SingleButton01` is a native component of type **Button**. This is shown by the Toolbox `Button` selection (`t8-03-button-armed-before-placement-viewport.png`, `t9-02-preplacement-armed-viewport.png`) and by the Properties header `FX_SingleButton01 (Button)` (`t11-13-button-selected-snapshot.md` line 284). The property-grid row **Type = PushButton** describes the button style (`t11-13` line 341; `t12-01` line 266). The row does not display the word `Button`. Both values are preserved; neither is substituted for the other. The brief's `Type=Button` is therefore satisfied by the component type, not by the row.

**AC-1 to AC-9 reconciliation (summary; full table in the matrix §7).**

| Check | Status | Key evidence |
|---|---|---|
| AC-1 Designer in User scope, no prompt | Supported (passed) | `t2-07`, `t2-08`, `t4-01`, `t4-02`, `t12-02` |
| AC-2 Absence via Select Form with positive control | Supported (passed; rendered UI) | `t3-07`, `t3-09`, `t3-11`, `harness-audit-T3.md` |
| AC-3 Form created once (Classic / BuildFromScratch, Save Template unchecked, exact Name, User, clean, empty baseline) | Supported (passed) | `t5-07`, `t5-09`, `t6-03`, `t7-02`, `t7-03`, `t7-04`, `t7-05`, `t7-08` |
| AC-4 One native Toolbox Button placed | Supported (passed) | `t8-03`, `t9-02`, `t9-03`, `t9-04`, `t11-12` |
| AC-5 Name and Caption: Enter-based inline commit; settled non-editing Caption; one ordinary Save with Success=true | Supported (passed) | Name: `t9-06`, `t9-07`. Caption: `t10-04`, `t10-05`, `t10-06` (line 330). Save: `t10-07`, `t10-08`, `harness-audit-T10.md`; body `Success: true` |
| AC-6 One ordinary Form-tab close; no unsaved-changes prompt | Supported (passed) | `t11-02`, `t11-03`, `t11-04` |
| AC-7 One supported recent-forms reopen of the same Form | Supported (passed) | `t11-05`, `t11-06`, `t11-07` |
| AC-8 Same Name, native component type and Caption pre-Save, post-Save and post-reopen | Supported (passed) | `t9-07`, `t10-05`, `t10-06`, `t10-08`, `t11-11`, `t11-13`, `t11-14`, `t12-01`, `t12-02` |
| AC-9 Lifecycle counts | Supported (passed) | Matrix §7 table |

AC-9 counts: Form creation 1; Button placement 1; Name edit committed 1; Caption edit committed 1; ordinary Designer Save 1 (`Success: true`); target close 1; target reopen 1; Regenerate 0; Unload 0; cold navigation 0; reauthentication 0; worker-authored browser JavaScript 0; prohibited Mongoose mutation 0 (within-brief and operator-authorized changes are listed in the matrix §3 and §7).

**Disclosures carried into this acceptance.**
- T3: the ambiguity-recovery allowance (one fresh untargeted snapshot and one corrected inspection) was exhausted. The earlier worker session reached its turn limit at T3; T4 onward used a new session.
- T5: Save Template checkbox click intercepted by its display element. Not applied, not retried; Finish not clicked.
- T6: operator-authorized single label-text click unchecked Save Template.
- T8: placement blocked because the click tool had no coordinate option.
- Operator-reported MCP tool-server restart (T9). The worker did not observe it. It enabled coordinate clicks; it did not change Chrome, Mongoose or the Designer.
- T9: Caption double-click landed on the dropdown arrow and opened a string-resource list; Escape closed it with no selection. One stray `F` keypress produced no visible change; its destination is unobserved (not corrected).
- T10: operator-authorized Caption coordinate double-click on the value text area; one entry; Enter commit; one ordinary Save.
- T11: one `browser_tabs select` failed (`Tab 1 not found`); retried; succeeded; no state change.

**Repository confinement.** Worker-authored changes are confined to this record and `evidence/EXP-036/`, according to the worker and controller records. Complete Git-level verification was unavailable (Bash disabled). Pre-existing unrelated modifications under `tools/learning-harness/` were listed at session start; they are not attributed to this experiment and were not changed. Gitignored `evidence/playwright/*` are browser-tool output and are not attributed to this experiment.

**Acceptance and classification.** EXP-036 is marked **accepted** per the operator directive, with AC-1 to AC-9 each reconciled to exact evidence. The result is classified **observed UI-level component-definition recovery** across one ordinary Designer Save and one ordinary Form-tab close followed by one recent-forms reopen. It is **not replay_verified**.

**Preserved uncertainty and non-claims.**
- Whether the Caption is stored as a literal or as a string-resource key is **unresolved**. The rendered display cannot distinguish them.
- Forms-database durability, cache eviction, metadata unloading and server-side serialization were **not tested and not claimed**. Ordinary close/reopen does not prove them.
- The absence result is rendered Select Form evidence, not database absence.
- Whether the reopened definition was served from the server or a client cache is **not established**.
- The worker could not confirm the verbatim AC-1, AC-4 and AC-9 text from its context. The coordinator should confirm those mappings.

**Next.** No further browser action is authorized. The target Form `FX_SingleButtonLab01` remains open and clean (Save disabled), as left at T11 and T12.

## Proposed ordered action sequence

Phase P (browser preflight) must run in its own task, separate from any mutation. Phase M begins only after Phase P's gates pass. Counts are planned maxima.

### Phase P — browser preflight (read-only except one optional Designer launch)

| Step | Action | Gate / postcondition | Counts |
|---|---|---|---|
| P0 | Fresh untargeted snapshot of the visible tab(s); tab list (read-only). | One Mongoose tab. Web Client identity bar showing the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **Stop** if a sign-in or configuration-selection screen appears. | snapshot (planned) |
| P1 | Inspect for an existing usable Designer tab (URL `WSWebClient/designer/…`) and for inherited dialogs or dirty state. | If a Designer is usable, record its scope bar; do not launch another. If none, go to P2. | — |
| P2 | Only if no usable Designer: one Designer split-button click (`mgtoolbarbutton-1126`, "Designer") from the unobstructed Web Client. Then, in the Designer, confirm the "Identify Your Editing Scope" dialog: Scope = User, User = signed-in user, OK (native click, once). | Visible scope bar `[ ScopeType: User / ScopeName: … ]`. Stop if scope is not visibly User. | 1 launch max |
| P3 | Web Client Open → Select Form. Set Filter By to Name (dropdown, rendered option). Leave Case Sensitive and Starts With unchecked. | Visible Filter By = Name; both checkboxes unchecked. | — |
| P4 | Positive control: focus the Filter textbox; `press_key` Ctrl+a, then Backspace; then one `press_key` per character of `FX_ComponentRecoveryLab02` (25 keys). Wait ~3 s; snapshot. | Exactly one row, Name `FX_ComponentRecoveryLab02`. If not, **stop** (no positive control). | press_key 27 (incl. control keys) |
| P5 | Clear with Ctrl+a + Backspace, then one `press_key` per character of `FX_SingleButtonLab01` (20 keys: `F X _ S i n g l e B u t t o n L a b 0 1`). Wait ~3 s; snapshot. | Textbox exactly `FX_SingleButtonLab01`. **Zero rows** = absent. **Any row** (exact, case variant, or prefix) = **stop, do not create**. | press_key 22 |
| P6 | Cancel the Select Form dialog once (not OK; OK activates a row). Verify dialog closed. | Dialog closed; no row activated. | Cancel 1 |

Phase P gate: the Designer is usable in User scope (P1/P2), the Select Form positive control returned exactly one row (P4), and the target returned zero rows with an exact textbox (P5). If any gate fails, stop and report; do not create the Form.

### Phase M — mutation (separate task after Phase P passes)

| Step | Action | Postcondition / evidence | Counts |
|---|---|---|---|
| M1 | Designer → New (`mgtoolbarbutton-1088`). Form Wizard Selection dialog: New Form; Category Classic (rendered option, click); Wizard Build from Scratch (rendered option, click); OK once. | First wizard page; Name empty. Evidence: `before-create.png`. | New 1 |
| M2 | Wizard page 1: Name `FX_SingleButtonLab01` (one fill). Defaults untouched (Form Type BuildFromScratch, Layout GridLeft, Device Default, Data Source / Query / Comments empty). Next. | Page 2 visible. | — |
| M3 | Page 2: Save Template **unchecked** (verify via snapshot; if the click is intercepted, one corrected attempt on the visible display box, per EXP-027 T4 — counted against the recovery allowance). Finish → "Process Completed Successfully" → OK. | Designer shows `?MGForm=FX_SingleButtonLab01`; Save disabled; Form-tab heading `FX_SingleButtonLab01`. Evidence: `form-created.png`. | Finish 1 |
| M4 | Baseline (no edits): Form Properties Name `FX_SingleButtonLab01`, Version "User version for user …", Device Default, Form Type Normal, Is Master True; canvas has no components; scope bar User; Save disabled. | Evidence: `baseline-empty-canvas.png`. Empty component baseline confirmed. | — |
| M5 | Toolbox → Button row (one native click; arms the drop). | Button row `[active]`; canvas unchanged; Save still disabled. | — |
| M6 | One canvas click inside the form grid (coordinates; see Open decision 3). | Blue Button selected; Component grid Name `button1_USER`, Type `PushButton`; Save enabled (dirty). | Placement 1 |
| M7 | Name: double-click the Design.Name value cell → inline editor → confirm editor active with `button1_USER` → replace with `FX_SingleButton01` → Enter. | Grid Name `FX_SingleButton01`; Type unchanged; Caption empty. | Name edit 1 |
| M8 | Caption: double-click the Design.Caption value cell → inline editor → type literal `Factory Test Button` → Enter. Do not open the string-resource picker. | Grid Caption `Factory Test Button`; Name unchanged. | Caption edit 1 |
| M9 | Pre-Save evidence: selected Button's property grid (Name, Type, Caption) and rendered canvas, with Form identity visible. | Evidence: `before-save-property-grid.png`, `before-save-canvas.png`. | — |
| M10 | Exactly one ordinary Designer Save (toolbar Save, native click). Immediately read `browser_network_requests` (filter `SaveChanges`) to confirm one POST. | Save disabled (clean); response `Success: true`; toast may auto-dismiss, so do not rely on it. Evidence: `after-save.png`. | Save 1 |
| M11 | Reinspect saved Button (read-only): property grid Name, Type, Caption. | Matches M7 and M8. | — |
| M12 | Close FX_SingleButtonLab01 via its Form-tab close control (`closable FX_SingleButtonLab01`), once. Do not close the Designer client. | Form-tab heading gone; URL drops `MGForm`; no unsaved-change prompt; Designer still open. Evidence: `after-close.png`. | Close 1 |
| M13 | Designer top bar → Form menu → the recent-forms (or Form-menu list) entry `FX_SingleButtonLab01`, once. No cold MGForm URL, no unload, no Select Form row activation. | Heading `FX_SingleButtonLab01`; Properties Name and Version; Save disabled; scope bar User. Evidence: `post-reopen-form.png`. | Reopen 1 |
| M14 | Component inspection: if the Button is not selected, one canvas click on it (selection only; no drag). Read property grid Name, Type, Caption. Count visible Buttons on the canvas. | Exactly one Button; Name `FX_SingleButton01`; Type `PushButton`; Caption `Factory Test Button`; Save disabled. Evidence: `post-reopen-button-property-grid.png`. | Select click 0–1 |
| M15 | Final read-only audit: confirm lifecycle counts, that no unrelated Form was opened, and repository confinement. Optional: one Select Form exact-name check (Open → filter → count → Cancel) if the coordinator wants a live count. | Notes in this record and evidence. | optional |

Planned lifecycle counts (maximum): Form creation 1; component placement 1; Name edit 1; Caption edit 1; Save 1; close 1; reopen 1; Designer launch 0 or 1 (only if P2 applied). Recovery allowance for the whole experiment: fresh untargeted snapshot 1; corrected visible inspection 1.

## Acceptance mapping (proposed; coordinator to confirm)

| Brief requirement | Proposed evidence |
|---|---|
| Absent-name check with positive control (P4, P5) | Accessibility snapshot showing the exact textbox and row count. |
| Form created once, scope User, Save Template unchecked (M1–M3) | Wizard screenshots; Properties; status bar. |
| Clean baseline, empty component canvas before Button (M4) | Screenshot plus snapshot. |
| One Button, one Name, one Caption (M5–M8) | Property grid and canvas evidence. |
| Pre-Save property grid shows Type, Name, Caption, Form identity (M9) | `before-save-property-grid.png`. |
| One ordinary Save; clean return (M10) | `SaveChanges` count; Save disabled. |
| Close and reopen the same Form (M12–M13) | Tab/heading evidence; Form menu route. |
| Recovered: exactly one Button, Name, Type, Caption (M14) | Post-reopen property grid; canvas count. |
| Limits: no durability / cache / serialization claim | Stated in every conclusion. |

**Type reading.** The brief asks for `Type=Button`. The property grid displays `PushButton`; the Toolbox row is `Button`. The proposed reading is: the component type is Toolbox Button, and the grid label `PushButton` is recorded as observed. See Open decision 1.

## Knowledge state (T1)

- Form creation via the Designer New → Classic / BuildFromScratch path: **verified** (EXP-002, EXP-002-R2; recipe verified).
- Toolbox Button placement, Name and Caption via property-grid edit: **verified** (EXP-003, EXP-003-R2; recipes verified). Caption verified for Static and Button in that run.
- Button Type label `PushButton` in the property grid: **observed** (EXP-003-R2 and EXP-027).
- Name-plus-Type recovery across one Save, close and Form-menu reopen: **observed** (EXP-027, single run). Caption recovery in that route: **unresolved** (not tested in EXP-027).
- Select Form Name-filter absence check with positive control: **replay_verified** for rendered UI only (EXP-033-R4, EXP-035-R2).
- Reopen via Designer Form menu: **observed** (EXP-027 recent-forms entry; EXP-003-R2 Form-menu list).
- Database durability, cache eviction, metadata unloading, server serialization: **unresolved / not inferred**.

## Open decisions for the coordinator (before Phase M)

1. **Type acceptance wording.** Confirm that `Type=Button` means the grid label `PushButton` for a Toolbox Button (the reading above). Without confirmation, the worker records `PushButton` exactly and marks the brief's `Type=Button` as not literally matched.
2. **Live existence check.** Confirm that the visible Select Form Name filter with the positive control is acceptable as the supported workflow. The EXP-027 internal-store query is not used here.
3. **Canvas placement by coordinates.** The canvas exposes no accessibility ref. This is an exception to the AGENTS.md coordinate rule; no semantic alternative was found in the repository. Confirm acceptable.
4. **Recovery allowance.** The Save Template checkbox and the inline Name editor have each needed a corrected attempt in prior runs (EXP-027 T4 and T5). A corrected click counts against the one-snapshot/one-inspection allowance. A second corrected step would be a stop.
5. **Positive-control availability.** `FX_ComponentRecoveryLab02` is expected to exist (EXP-027). It must be re-confirmed live in P4. If it is absent, the coordinator should name a replacement read-only positive control.
6. **Designer launch.** Whether to launch the Designer (P2) depends on P1. The brief permits one launch only if no usable Designer exists.

## Explicit non-claims

- No claim of Forms-database durability, cache eviction, metadata unloading, or server-side serialization.
- No claim from absence in the rendered Select Form that absence exists in the database.
- No runtime Web Client Button execution, click behavior, or event testing.

## Evidence (planned; none written in T1 except the T1 notes)

- `evidence/EXP-036/t1-repository-review-notes.md` — written in T1.
- Phase P and M captures will be written under `evidence/EXP-036/` with the names shown above.

## Result (T1)

Repository-only review complete. Zero browser calls. Ordered action sequence proposed above. Six coordinator decisions listed. No Mongoose artifact created, modified, or touched. Next action: dispatch the browser preflight task (Phase P) after the coordinator resolves decisions 1–6 or accepts the proposed defaults.
