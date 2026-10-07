# EXP-027-R2 — T1 read-only preflight notes (no Mongoose mutation)

Run: R-20261007-173418-s6vM, cycle 1, task T1. Date: 2026-10-07.
Editing scope (to be used): User. Targets: FX_ComponentRecoveryLab03 (Form), FX_ButtonRecovery03 (Button).

## 0. Worker/session identity

- Harness-provided worker session for this task, recorded from `tools/learning-harness/data/runs/R-20261007-173418-s6vM/events.jsonl`:
  - event `worker.session_created` ts 2026-10-07T09:34:56.880Z → session `ses_eea48b294ffewiRJGXFlT7uTdC` (run R-20261007-173418-s6vM, cycle 1, action SEND_TO_OPENCODE).
- Distinctness check: EXP-027's recorded worker session is `ses_eea6d6124ffes94Z5Ncy8SwXYM`. The two IDs differ (prefix `ses_eea4…` vs `ses_eea6…`; full strings shown here are harness session identifiers, not credentials). CONFIRMED DISTINCT.
- Freshness obtained from the new worker conversation only; the browser and the existing usable Designer were NOT restarted or replaced to establish freshness.

## A. Procedure review before mutation (from records/recipes read in T1)

- **EXP-019-R2 selection prefix (replay_verified):** one native click on Designer toolbar New → fresh "Form Wizard Selection" dialog (New Form radio active, Category/Wizard comboboxes empty). One native click on the Category picker → rendered options (Classic first) → one native click on the rendered Classic option (no typing). One native click on the Wizard picker → rendered options (Build from Scratch first) → one native click on it → Wizard displays "BuildFromScratch". Then exactly one OK → first Build-from-Scratch wizard page appears with Name empty, no rejection alert.
- **create-basic-form.md (verified):** wizard page 1 Name=`FX_…`, other defaults untouched, Next; page 2 uncheck "Save Template" (checked by default; uncheck avoids template artifact); Finish → "Process Completed Successfully" → OK; Finish persists immediately and the form opens with Save disabled (clean). Pitfall honored: a first checkbox click on the Ext displayEl span may be intercepted; click the visible checkbox box itself.
- **add-component-from-toolbox.md (verified):** click the Toolbox row (e.g. Button) to arm, then exactly one canvas click places it; component becomes selected; generated name `<typePrefix><n>_USER` (expected `button1_USER`, itemId expected `bt2`, size 114×34); form becomes dirty (Save enabled).
- **configure-basic-component.md (verified) Name-only edit:** double-click the Design.Name value cell → inline editor → select-all/type/Enter. Commits server-side immediately (`updcompprop`). Do NOT verify via stale local compDef; the panel component-selector header may lag (display nuance, recorded in EXP-027 and EXP-003-R2).
- **Type-label distinction:** Toolbox row label "Button" vs property-grid Design.Type display value "PushButton" vs model `ctrl` "button". The tested equality is on the property-grid label ("PushButton" expected in this environment).
- **EXP-027 lifecycle sequence (observed, to be replayed):** ordinary Designer Save (Save button → toast + clean return), ordinary Form-tab close control (no unsaved-change prompt when clean), same-Designer Form-menu recent-forms reopen, post-reopen Name/Type equality.

Capture note: a first viewport capture taken while tab 1 was selected rendered the Web Client content again (same framing as t1-01); it was inspected, found duplicative, and deleted (`t1-02-designer-tab-context.png` removed). The decisive Designer capture is `t1-02-designer-tab-visible.png`, taken after the tab select and fresh snapshot; its content matches the accessibility snapshot of the selected Designer page.

## B. Controlled Playwright browser context enumeration (read-only)

`browser_tabs list`:
- Tab 0 (was active): Mongoose portal tab, URL `.../<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`, title "Mongoose".
- Tab 1: Web Designer tab at `WSWebClient/designer/Default.aspx?...configgroup=G6R8LJ9Q4E8C2Z8Y_Mongoose_DEM...&MGForm=FX_ComponentRecoveryLab02`.

Fresh untargeted snapshot (active tab 0): Portal "Infor OS Portal 2026.09.00", DEM badge, "Mongoose" portal tab selected; Web Client iframe live: menu Explorer/Form/Edit/View/Window/Help; header identity button shows user email + `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar Open enabled with Save/New/Delete/Refresh/FiP/etc. all disabled (no dirty state); Explorer panel tree (My/Master/Public/User Folders) intact; main region empty — no Select Form dialog, no alert/prompt; portal-notification banner not present. Screenshot `t1-01-webclient-tab-visible.png` inspected: shows the live Web Client header + clean toolbar + identity string and an empty main area. Proves live authenticated Web Client with clean Web Client state on tab 0; does NOT prove anything about the Designer tab (out of that frame).

Corrected visible inspection after one read-only tab select (`browser_tabs select index 1`; then fresh snapshot, now Page URL = designer/Default.aspx):
- Tab is the live **Web Designer** with an inherited loaded Form: form-tab tablist renders selected tab heading `FX_ComponentRecoveryLab02` with its close control ("closable FX_ComponentRecoveryLab02").
- Design toolbar: Save / Regenerate Form / Undo / Redo all disabled → clean saved state. Align/space buttons disabled (no components selected).
- Properties panel Component tab active; component selector textbox reads `FX_ButtonRecovery02 (Button)`; property grid shows Name `FX_ButtonRecover…` (truncated render), Caption empty, **Type = PushButton**, From Device Master True; groups Appearance/Behavior/Data Source/Events/Help/Inheritance/Layout/Miscellaneous present.
- Toolbox panel expanded: Framework Components tree with Button row visible among others.
- Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (user value substituted from configured secrets; displayed by the page itself).
- Screenshot `t1-02-designer-tab-visible.png` inspected: shows blue Button selected on canvas with handles, form-tab heading FX_ComponentRecoveryLab02 + close X, Properties grid (Name FX_ButtonRecover…, Type PushButton, From Device Master True), Toolbar tree incl. Button row, User-scope status bar bottom-left, Save greyed. Proves the inherited tab-1 state above; does NOT prove persistence beyond what EXP-027 already recorded.

## C. Usable-workflow determination

- A usable authenticated Mongoose **Web Client** session (tab 0) and one usable **Web Designer** (tab 1, User scope confirmed by its live status bar) already exist in the controlled context. No session-establishment sequence and no Designer launch is needed for this replay; EXP-027's AC-1 precondition "no usable Designer exists → launch exactly one" does NOT apply to this context.

## D. Inherited-state preservation audit (must remain untouched)

- Tab 1 inherited open Form `FX_ComponentRecoveryLab02` with Button component `FX_ButtonRecovery02`: clean (Save disabled). Left open and untouched; no close/save/discard/property action performed in T1.
- No dialogs, prompts, alerts, or dirty Forms observed on either tab. Scheduled-maintenance alert from EXP-027's T2 not currently rendered.
- Tab 0 Web Client: clean; Open enabled; nothing opened (Select Form NOT opened in this task).

## E. Target-absence preflight status

- NOT yet performed (deferred to next task, permitted): read-only Select Form Name-filter proof of zero case-insensitive matches for `FX_ComponentRecoveryLab03` with a known-existing positive control and Case Sensitive visibly unchecked.
- Repository evidence so far: `rg -c "FX_ComponentRecoveryLab03"` in the repo matched only `tools/learning-harness/briefs/EXP-027-R2.brief.json` (the brief itself) — no experiment record ever created this name; live absence still must be proven on the server-backed Select Form store.

## F. Repository confinement (this task)

- `git status --porcelain` shows five pre-existing modified files under `tools/learning-harness/**` (harness tooling, unrelated to this task; not touched here). This task writes only `experiments/EXP-027-R2-clean-replay-button-component-recovery-in-a-self-c.md` and files under `evidence/EXP-027-R2/`.

## Next permitted safe pre-mutation action (recommendation)

T2: read-only AC-1 guards on the live workflow — Open Select Form once in the Web Client, prove populated grid + known-existing positive control, set Filter By=Name with Case Sensitive visibly unchecked and filter text `FX_ComponentRecoveryLab03` (do NOT press OK), close via Cancel (non-activating), and authoritatively prove zero Name matches for `FX_ComponentRecoveryLab03` in the grid store. No Designer launch; no session establishment; inherited tab-1 state preserved.
