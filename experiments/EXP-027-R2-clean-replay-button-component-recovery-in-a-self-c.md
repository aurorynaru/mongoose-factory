# EXP-027-R2 — Clean Replay: Button Component Recovery in a Self-Contained Designer Session

Status: **T1 complete — fresh-worker read-only preflight + preservation audit done. No Mongoose mutation performed in T1. Lifecycle replay pending (T2 onward).**
Date: 2026-10-07
Run: R-20261007-173418-s6vM (cycle 1, task T1)
Mode: LEARNING MODE — clean independent replay of the accepted EXP-027 procedure.
Editing scope: User. Target: `FX_ComponentRecoveryLab03` (Form), `FX_ButtonRecovery03` (Button component). Evidence directory: `evidence/EXP-027-R2/`.
Source experiment: `experiments/EXP-027-button-component-recovery-in-a-self-contained-desi.md` (accepted, single observation). Procedure inputs re-read here: EXP-027, EXP-019-R2 (replay_verified selection prefix), EXP-003-R2, and verified recipes `create-basic-form`, `add-component-from-toolbox`, `configure-basic-component`.

## Objective

Independently replay the accepted EXP-027 procedure on a new User-scoped classic BuildFromScratch Form `FX_ComponentRecoveryLab03`: establish/confirm a usable workflow before mutation, prove the target absent, create exactly one target Form with an untouched clean baseline, place exactly one native Toolbox Button, assign only Name=`FX_ButtonRecovery03`, record the exact property-grid Type label, perform exactly one ordinary Designer Save, exactly one ordinary Form-tab close, and exactly one same-Designer Form-menu recent-forms reopen, then verify the same scoped Form recovers the component with Name `FX_ButtonRecovery03` and an identical Type label. If every semantic postcondition reproduces with decisive evidence, classify the EXP-027 procedure **replay_verified only for this tested User-scope self-contained close/reopen workflow**.

## Acceptance criteria (map)

- AC-1: read-only preflight — inherited visible Forms/dialogs + dirty state recorded; worker freshness recorded (distinct from EXP-027's `ses_eea6d6124ffes94Z5Ncy8SwXYM`); usable Mongoose workflow + User editing scope proven; target absence proven via supported case-insensitive Select Form Name filter + a visible known-existing positive control.
- AC-2: target Form created once (replay-verified fresh-dialog Classic/BuildFromScratch selection prefix + verified basic-form procedure; Save Template visibly unchecked).
- AC-3: untouched target baseline captured (Name, ScopeType, ScopeName, clean state, rendered canvas state; visible absence vs complete inventory distinguished).
- AC-4: exactly one native Button creation operation with visible presence verified.
- AC-5: component Name `FX_ButtonRecovery03` assigned via the verified Name-edit step only; exact Name + exact property-grid Type label recorded before Save (Toolbox "Button" vs property-grid Type value distinguished).
- AC-6: exactly one ordinary Designer Save to clean target state; one Form-tab close; one same-Designer Form-menu recent-forms reopen.
- AC-7: post-reopen comparison shows the same scoped Form with recorded Name/Type recovered unchanged, target clean.
- AC-8: final read-only live target Name-filter count + lifecycle-action audit + repository-confinement audit.

## Worker task log

### T1 — strictly read-only preflight and preservation audit (this task)

No browser mutation, authentication, navigation-to-establish-session, Designer launch, Form open/create/save/close/reopen, or component action performed. Read-only enumeration of the controlled Playwright context plus fresh snapshots with one corrected visible tab inspection. Details in `evidence/EXP-027-R2/t1-preflight-notes.md`.

**Worker/session identity:** harness events (`worker.session_created`, ts 2026-10-07T09:34:56.880Z) record this fresh worker session as `ses_eea48b294ffewiRJGXFlT7uTdC` — distinct from EXP-027's recorded worker session `ses_eea6d6124ffes94Z5Ncy8SwXYM`. Freshness came from the new OpenCode conversation; the browser and existing usable Designer were not restarted or replaced to establish it.

**Procedure review (read before any mutation):** summaries recorded in `evidence/EXP-027-R2/t1-preflight-notes.md` §A — EXP-019-R2 replay_verified fresh-dialog Classic/BuildFromScratch dropdown selection prefix; verified basic-form creation with Save Template unchecked; verified Button placement (Toolbox row arm → one canvas click; expected generated name `button1_USER`, itemId `bt2`, 114×34); verified Name-only inline-editor edit step with the stale-`compDef` / lagging-selector-header caveats; Type-label distinction (Toolbox "Button" / property-grid "PushButton" / model `ctrl` "button").

**Controlled Playwright browser context enumeration:**
- `browser_tabs list`: exactly two tabs. Tab 0: Mongoose portal tab (`.../c51080bc-3191-4598-9894-39e1b84f8e87`, title "Mongoose") — live authenticated Web Client. Tab 1: Web Designer tab at `designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab02`.
- Fresh untargeted snapshot (active tab 0): Portal 2026.09.00 + DEM badge; Web Client iframe live (menu Explorer/Form/Edit/View/Window/Help; header identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar Open enabled, Save/New/Delete/Refresh/FiP/etc. disabled = clean; Explorer tree intact; main region empty — no Select Form dialog, no alert/prompt). Evidence screenshot t1-01 inspected.
- One read-only tab select (index 1) then fresh snapshot → Page URL is the Designer: inherited selected form-tab heading `FX_ComponentRecoveryLab02` with its close control; Design toolbar Save/Regenerate/Undo/Redo disabled (clean); Component property grid Name=`FX_ButtonRecover…` (truncated render), Caption empty, **Type=`PushButton`**, From Device Master True; selector textbox refreshed to `FX_ButtonRecovery02 (Button)`; Toolbox expanded with Button row; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Evidence screenshot t1-02 inspected.

**Usable-workflow determination:** A usable authenticated Web Client (tab 0) AND one usable Web Designer in visible User scope (tab 1) already exist. No session-establishment sequence and no Designer launch is required for this replay; EXP-027's "launch exactly one Designer" precondition does not apply to this inherited context.

**Inherited-state preservation audit:** Tab 1's open Form `FX_ComponentRecoveryLab02` with Button `FX_ButtonRecovery02` (clean, Save disabled) was left untouched — no close/save/property action. No dialogs/prompts/dirty Forms on either tab; Tab 0 Web Client clean. Nothing was closed, saved, discarded, or altered in T1.

**Target-absence preflight:** NOT yet performed (deferred to next permitted task). Repository scan shows `FX_ComponentRecoveryLab03` appears in no experiment record (only in the harness brief file); live server-backed absence proof via Select Form store/Name filter is pending.

**Repository confinement:** `git status --porcelain` showed only five pre-existing modified `tools/learning-harness/**` files before this task (harness tooling, not touched here). This task writes only its permitted record and `evidence/EXP-027-R2/` files.

### T4 — Button placement + Name assignment

Details in `evidence/EXP-027-R2/t5-compliance-audit-notes.md` §2 (action history). One Toolbox **Button** row click armed the item (t4-01: row highlighted, canvas empty); several ref/selector targeting attempts for the canvas click errored and created nothing; the sole component-producing canvas action was `run_code_unsafe → page.mouse.click(420,300)` inside the snapshot-documented grid box — the verified recipe's authorized "native Playwright clicks (the click tool or `mouse.click` at coordinates)" mechanism. Result: one Button, selector `button1_USER (Button)`, grid Name `button1_USER`, **Type `PushButton`**, From Device Master True; form dirty. Exactly one Name edit (double-click value cell → inline editor → fill `FX_ButtonRecovery03` + Enter); post-edit grid Name `FX_ButtonRecovery03`, Type unchanged `PushButton`. Zero Saves, zero closes/reopens. Lab02 untouched.

### T8 — one Form-menu recent-forms reopen + post-reopen verification (this task)

Guard: fresh snapshot confirmed only Lab02 open/selected, same Designer client/session active, no dialog. One click on menu-bar **Form** → recent-forms list located via bounded find: entry `FX_ComponentRecoveryLab03` present exactly once (`#menuitem-1073-itemEl`). Exactly ONE click on that entry → URL returned to `&MGForm=FX_ComponentRecoveryLab03`. Post-reopen: form-tab heading Lab03 (selected) + Lab02 tab still present; toolbar Save/Regenerate/Undo/Redo disabled (clean); Form-level grid Name=`FX_ComponentRecoveryLab03`, Version "User version for user <signed-in user>", Device Type Default, Form Type Normal, Is Master True; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no auth/unsaved-change/error prompt. Component post-reopen required one selection step (component not auto-selected): first canvas click missed at device-scale coords (no effect, grid stayed empty); corrected via boxes inspection (Button CSS box 420,300,114,34) and ONE click at (477,317) → selector `FX_ButtonRecovery03 (Button)`; component grid Name=`FX_ButtonRecovery03`, **Type=`PushButton`**, From Device Master True — exact equality with pre-close AC-4 values. Zero saves/closes/property edits this task beyond the reopen selection click (selection is non-mutating: Save remained disabled).

### T7 — one ordinary Form-tab close of Lab03 (this task)

No reopen performed. Pre-close guard (fresh snapshots): Lab03 selected, clean (Save/Regenerate/Undo/Redo disabled); grid Name=`FX_ButtonRecovery03`, Type=`PushButton`; Lab02 tab present untouched; t7-01 captured. One stale-ref error → one fresh snapshot + one corrected native click on the closable control (`closable FX_ComponentRecoveryLab03`) = exactly ONE close action. Post-close: URL switched to `&MGForm=FX_ComponentRecoveryLab02`; form-tab tablist contains ONLY Lab02 (selected, close control present); **no Lab03 tab anywhere**; no unsaved-change/save-discard/error/prompt in snapshot; toolbar Save/Regenerate/Undo/Redo disabled; Properties reset to Lab02 Form-level tree (Name `FX_ComponentRec…`, Version "User version for us…", Default/Normal/True); scope bar unchanged. Network audit: still only the two prior `SaveChanges` (#115, #157) — no new save/cache/unload request from this task. t7-02 inspected: Lab02 tab heading + its Button on canvas + Form-level grid + greyed toolbar + User-scope bar; Lab03 absent.

### T6 — one ordinary Designer Save + clean-return verification (this task)

Details in `evidence/EXP-027-R2/t6-network-savechanges-audit.txt`. Pre-Save guard: Lab03 selected, dirty (Save enabled), authoritative grid Name=`FX_ButtonRecovery03`, Type=`PushButton`; stale selector header `button1_USER (Button)` recorded, not edited. One ref-staleness error then ONE fresh snapshot + one corrected native click on toolbar **Save** = exactly one Save action. Post-Save: toast `Form [FX_ComponentRecoveryLab03] and global object(s) were saved.`; toolbar Save/Regenerate/Undo/Redo all **disabled** (clean); grid re-read Name=`FX_ButtonRecovery03`, Type=`PushButton` unchanged; no error/prompt. Network audit: this-task `SaveChanges` = exactly one (#157 `{"formId":97}` → Success:true Lab03 message); a prior #115 targeted inherited `FX_ComponentRecoveryLab02` (earlier experiment; Lab02 untouched this task). t6-01 inspected: greyed toolbar, Button selected on canvas, grid Name+Type, scope bar. Zero property mutations, zero close/reopen.

### T5 — specialist read-only compliance audit (this task)

No mutation. One fresh untargeted snapshot documented the current dirty state: Lab03 selected (close control present), grid Name `FX_ButtonRecovery03` / Type `PushButton`, selector header still lagging at `button1_USER (Button)` (known caveat), Save/Regenerate enabled = **unsaved**. Audit determination (see notes §3–§4): the verified add-component-from-toolbox recipe line 41 explicitly authorizes `mouse.click` at coordinates for canvas placement, so AC-4's placement mechanism is COMPLIANT; failed targeting attempts created no component; counts remain one creation + one Name assignment. Coordinator may continue the lifecycle (Save/close/reopen) from the preserved unsaved state.

### T2 — read-only Select Form absence proof (this task)

No Mongoose mutation. Details in `evidence/EXP-027-R2/t2-select-form-absence-notes.md`.

- Context re-inspected first: two tabs unchanged; **no Select Form dialog was open** at task start.
- One native click on Web Client toolbar Open → exactly one Select Form dialog (Caption/Name columns). Inherited filter settings recorded: textbox already `FX_ComponentRecoveryLab02`, Filter By=Name, Case Sensitive + Starts With unchecked.
- Positive control: fill `FX_ComponentRecoveryLab02` → grid renders exactly ONE row `"FX_ComponentRecoveryLab02 FX_ComponentRecoveryLab02"` (normal visible case-insensitive Name-filter result). OK never pressed.
- Target: fill `FX_ComponentRecoveryLab03` → Filter By=Name, Case Sensitive still visibly unchecked; a permitted FRESH untargeted snapshot settled the visible result: grid = header row only, **zero rendered data rows**. Supporting read-only DOM reads (x-cell count 0; first `.x-grid-row` read 0) corroborate; ambiguous `[class*=grid-row]`=1 (container self-match) recorded and not relied on. Two further selector-probe attempts errored and were abandoned per the no-widening rule.
- One Cancel click dismissed the dialog (`find "Select Form"` → none). Web Client clean again.
- Designer preservation reconfirmed read-only (tab select 1 + fresh snapshot): URL still `&MGForm=FX_ComponentRecoveryLab02`; form tab selected with close control; Save/Regenerate/Undo/Redo disabled (clean); selector `FX_ButtonRecovery02 (Button)`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Inherited state untouched.
- Action counts T2: Open 1, filter fills 2, OK 0, Cancel 1, no auth/Designer/property/Form actions; target remains absent.

### T3 — create one target Form + untouched baseline (this task)

No component action; no ordinary Save. Details in `evidence/EXP-027-R2/t3-creation-baseline-notes.md`.

- Re-inspected first (fresh conversation boundary): Designer clean, Lab02 open, target absent → proceeded.
- One New click → fresh "Form Wizard Selection" dialog (New Form radio; both comboboxes empty). Replay-verified prefix reproduced: Category picker → rendered **Classic** option clicked (no typing) → `Classic`; Wizard picker → rendered **Build from Scratch** option clicked → `BuildFromScratch`. Exactly one OK, no rejection.
- Wizard page 1: Name filled `FX_ComponentRecoveryLab03` (one corrected fill; first attempt hit a non-input ref, no effect); defaults untouched; one Next.
- Page 2: "Save Template" default `[checked]`; first uncheck click intercepted by the Ext displayEl span (documented pitfall, no effect); one corrected click on the visible checkbox box → checkbox renders WITHOUT `[checked]` (t3-06 visibly unchecked, Finish enabled). Exactly one Finish → "Process Completed Successfully" (t3-07) → one OK.
- Creation postcondition: same Designer tab URL gained `&MGForm=FX_ComponentRecoveryLab03`. Baseline snapshot + t3-08: BOTH form tabs present — Lab02 still open/untouched; **Lab03 selected** with close control; canvas rendered EMPTY (absence recorded without claiming cardinality); grid Name=`FX_ComponentRecoveryLab03`, Version "User version for user <signed-in user>", Device Type Default, Form Type Normal, Is Master True, Caption/Description empty; Save/Regenerate/Undo/Redo disabled (clean); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Counts T3: exactly one Form created; zero components; zero ordinary Saves; zero closes/reopens/auth.

## Acceptance criteria status

| AC | Status | Basis |
|----|--------|-------|
| AC-1 preflight guards + absence proof + positive control | **COMPLETE** | T1: freshness + two-tab enumeration + usable Web Client/Designer + inherited-state audit. T2: populated Select Form live result; positive control `FX_ComponentRecoveryLab02` returns exactly one row with Filter By=Name and Case Sensitive visibly unchecked; target `FX_ComponentRecoveryLab03` renders zero rows under the same settings (fresh accessibility snapshot decisive); Cancel dismissal; Designer preserved untouched. |
| AC-2 target Form creation | **COMPLETE** | T3: fresh-dialog Classic/BuildFromScratch dropdown selection reproduced (t3-01–t3-04); wizard Name `FX_ComponentRecoveryLab03` (t3-05); Save Template visibly unchecked before Finish (t3-06); Process Completed Successfully (t3-07); exactly one Form created; no template artifact intended. |
| AC-3 untouched baseline capture | **COMPLETE** | T3 t3-08 + accessibility snapshot: selected form tab `FX_ComponentRecoveryLab03` with close control; grid Name/Version "User version for user …"/Default/Normal/True with Caption+Description empty; Save disabled (clean); rendered canvas state recorded without claiming complete cardinality; Lab02 tab still open and untouched. |
| AC-4 one Button creation | **COMPLETE** | T4: one Toolbox Button arm click + exactly one authorized coordinate canvas click (`page.mouse.click(420,300)`, recipe-authorised native mechanism); `button1_USER` created and selected (t4-03 viewport crop shows blue Button with handles on Lab03 canvas). Mechanism compliance audit in T5 notes §3–§4. |
| AC-5 Name + Type label recording | **PASS** | T4 pre-Save grid Name `FX_ButtonRecovery03` / Type `PushButton`; T6 post-Save equality re-read (clean return); one ordinary Save (#157 Success:true). Selector-header staleness documented as known caveat. |
| AC-6 one Save / one close / one reopen | **PASS (3/3)** | T6: exactly one ordinary Save → clean. T7: exactly one Form-tab close, no prompt. T8: exactly one Form-menu recent-forms entry click (`#menuitem-1073-itemEl`), no fallback route. |
| AC-7 post-reopen identity/scope/clean + Name/Type equality | **PASS** | T8: reopened grid Name=`FX_ComponentRecoveryLab03`, Version "User version for user <signed-in user>", scope bar User/<current user>; clean (all four controls disabled); recovered component grid Name=`FX_ButtonRecovery03`, Type=`PushButton` — exactly equal to pre-close values; selector refreshed (`FX_ButtonRecovery03 (Button)`); Lab02 still present untouched. |
| AC-8 final Select Form count + action audit + confinement | **COMPLETE** | T9: one Open → Select Form with Filter By=Name, Case Sensitive visibly unchecked; EXACTLY ONE row `FX_ComponentRecoveryLab03` (t9-01 inspected); Cancel dismissal. Lifecycle action counts reconciled 1/1/1/1/1/1 in `t9-final-audit-notes.md`; confinement audit (pre-existing harness paths vs two permitted paths). |

## Final finding classification

**replay_verified — scoped**: the EXP-027 Button-recovery procedure (create → place one native Toolbox Button → Name-only assign → ordinary Save → Form-tab close → same-Designer Form-menu recent-forms reopen → Name/Type equality recovery) reproduced completely in this second, fresh-worker-session execution for the tested **User-scope self-contained close/reopen workflow**, with decisive evidence supporting AC-1…AC-8. Scope caveats: User scope only; single native Button component type only; no claims about other component types, Forms-database durability, cache/backend object identity, unrelated property persistence, or complete inventory.

## Final acceptance table AC-1…AC-8

| AC | Verdict | Evidence |
|----|---------|----------|
| AC-1 preflight guards + absence + positive control | PASS | T1/T2: worker-session freshness record; two-tab enumeration; Lab02 positive-control single row (t2-01); target zero rows under Filter By=Name, Case Sensitive visibly unchecked (t2-02 + fresh accessibility snapshot); Cancel dismissal. |
| AC-2 one target Form creation | PASS | t3-01…t3-07: fresh-dialog Classic/BuildFromScratch rendered-option clicks, wizard Name `FX_ComponentRecoveryLab03`, Save Template visibly unchecked, "Process Completed Successfully"; exactly one Form created (t3-08). |
| AC-3 untouched clean baseline | PASS | t3-08 + accessibility snapshot: selected Lab03 tab with close control; grid Version "User version for user …", Default/Normal/True, Caption/Description empty; Save disabled (clean); rendered canvas empty recorded without claiming cardinality; Lab02 open untouched. |
| AC-4 one native Button creation | PASS | t4-01 arm state (row highlighted, canvas still empty — creation not implied); sole component-producing action = ONE authorized coordinate canvas click per verified recipe Known-pitfalls line 41 (`page.mouse.click(420,300)` inside snapshot box); exactly one Button created; failed targeting attempts created nothing (t5 audit notes §2). |
| AC-5 Name + Type label pre-Save | PASS | T4 grid reads: Name `FX_ButtonRecovery03`, property-grid Type **`PushButton`** (distinguished from Toolbox label "Button"); t4-03/t4-04 inspected; selector-header staleness recorded as known caveat. |
| AC-6 one Save / one close / one reopen | PASS | T6: exactly one ordinary Save (`#157 SaveChanges` → Success:true Lab03; #115 pre-existing Lab02 save excluded — `t6-network-savechanges-audit.txt`; t6-01 clean-toolbar screenshot). T7: exactly one Form-tab close, no prompt (t7-01/t7-02; network audit shows no new save/unload). T8: exactly one recent-forms entry click (`#menuitem-1073-itemEl`), no fallback route. |
| AC-7 post-reopen identity/scope/clean + Name/Type equality | PASS | T8 accessibility snapshots: Form grid Name `FX_ComponentRecoveryLab03` / Version "User version for user …"; scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar Save/Regenerate/Undo/Redo all disabled (clean); recovered component grid Name=`FX_ButtonRecovery03`, Type=`PushButton` exactly equal to AC-4 values; selector refreshed (`FX_ButtonRecovery03 (Button)`); t8-03 inspected decisive; Lab02 still present. |
| AC-8 final Select Form one-match + counts + confinement | PASS | t9-01: Select Form dialog, Filter By=Name, Case Sensitive visibly unchecked, EXACTLY ONE row (Caption/Name both `FX_ComponentRecoveryLab03`); OK never pressed; Cancel dismissal. Count reconciliation + confinement audit in `t9-final-audit-notes.md`; git shows only pre-existing harness paths plus the two permitted paths. |

## Explicit non-claims

- No target mutation (Form creation, Button, Name assignment, Save, close, reopen) was performed or claimed in T1.
- Absence of any other Designer/session applies only to the enumerated controlled Playwright context at this moment.
- `FX_ComponentRecoveryLab03` live absence is not yet proven; repository scan alone is not server state.

## Knowledge state per finding

- Prior procedures (EXP-019-R2 selection prefix replay_verified; create-basic-form / add-component-from-toolbox / configure-basic-component verified): **inherited verified/replay_verified**, re-read in T1, not re-executed here.
- Controlled context = two tabs: live authenticated Web Client (tab 0, clean) + one usable User-scope Web Designer with inherited clean `FX_ComponentRecoveryLab02`/`FX_ButtonRecovery02` (tab 1), no dialogs/prompts: **observed** (T1).
- Select Form dialog opens via one Open click on the live Web Client; Name-filter positive control returns exactly one row for `FX_ComponentRecoveryLab02`; target `FX_ComponentRecoveryLab03` zero rows, Case Sensitive visibly unchecked in both; Cancel dismissal non-activating: **observed** (T2).
- Worker session `ses_eea48b294ffewiRJGXFlT7uTdC` distinct from EXP-027's `ses_eea6d6124ffes94Z5Ncy8SwXYM`: **observed** (harness event record).
- T3 creation replay: fresh-dialog Classic/BuildFromScratch dropdown selection + Name + Save Template unchecked + Finish/"Process Completed Successfully" reproduced, one Form `FX_ComponentRecoveryLab03` created in User scope, baseline clean with empty rendered canvas; Lab02 preserved untouched: **observed** (replay execution of the inherited verified procedure; contributes to the eventual replay_verified classification only when the full lifecycle completes).
- Replay outcome of the EXP-027 lifecycle procedure: **replay_verified (scoped)** — full create→Button→Name→Save→close→Form-menu recent-forms reopen→Name/Type-equality cycle reproduced in this second worker session with AC-1…AC-8 PASS; User scope and single native Button type only.

## Open questions / blockers

- No blocker through T3. Inherited `FX_ComponentRecoveryLab02` must remain untouched throughout the replay. Recorded nuances so far: dialog-open filter-textbox behavior, checkbox displayEl interception (both matching EXP-027's documented pitfalls).

## Evidence files

- `evidence/EXP-027-R2/t7-01-preclose-clean.png` - T7 pre-close: Lab03 selected, Button on canvas, grid Name `FX_ButtonRecover…`/Type `PushButton`, greyed toolbar (clean), Lab02 tab present.
- `evidence/EXP-027-R2/t8-01-formmenu-recent-entry.png` - Form menu open with recent-forms entries Lab03/Lab02 visible (pre-reopen).
- `evidence/EXP-027-R2/t8-02-reopen-component-grid.png` - immediately post-reopen: Button rendered on canvas but Properties Component grid EMPTY / selector blank — documents the reopened component is NOT auto-selected (supports need for one selection click; proves nothing about Name/Type).
- `evidence/EXP-027-R2/t8-03-reopened-name-type-pushtype.png` - inspected decisive AC-7: Lab03 tab selected, Button with selection handles, selector `FX_ButtonRecovery03 (Button)`, grid Name `FX_ButtonRecover…` + Type `PushButton` + From Device Master True, greyed toolbar (clean), User-scope bar. Exact full values additionally confirmed in accessibility snapshot (full strings not truncated).
- `evidence/EXP-027-R2/t7-02-postclose-lab02-preserved.png` - T7 post-close: only form tab = Lab02 (its Button rendered, Form-level grid Name `FX_ComponentRec…`, Version "User version for us…"), no Lab03 tab, no prompt, greyed toolbar, User-scope bar.

- `evidence/EXP-027-R2/t6-network-savechanges-audit.txt` - read-only network audit: this-task SaveChanges count = 1 (#157 formId 97 → Success:true Lab03); prior #115 targeted inherited Lab02.
- `evidence/EXP-027-R2/t5-compliance-audit-notes.md` - T5 audit: current unsaved state, full T4 action history (failed targeting vs sole coordinate-click creation), recipe authorization quote (add-component-from-toolbox.md Known pitfalls line 41), compliance determination, confinement.

- `evidence/EXP-027-R2/t1-preflight-notes.md` — procedure summaries, tab enumeration, snapshot detail, preservation audit, identity record, next-action recommendation.
- `evidence/EXP-027-R2/t1-01-webclient-tab-visible.png` — inspected: live authenticated Web Client on tab 0 (header menu bar + identity string + clean disabled toolbar + Explorer tree), empty main area (no Select Form dialog). Proves the usable Web Client and clean Web Client state; does not show the Designer tab.
- `evidence/EXP-027-R2/t1-02-designer-tab-visible.png` — inspected: inherited Designer tab 1 — form-tab heading `FX_ComponentRecoveryLab02` + close X, blue Button selected on canvas with handles, Properties grid Name `FX_ButtonRecover…` (truncated render; exact full values from accessibility snapshot), Type `PushButton`, From Device Master True, selector `FX_ButtonRecovery02 (Button)`, Toolbox tree incl. Button row, User-scope status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Save greyed. Proves the usable Designer + visible User scope + inherited-state audit; proves nothing about `FX_ComponentRecoveryLab03`.
- `evidence/EXP-027-R2/t4-01-toolbox-button-armed.png` — T4: Toolbox arm state after Button row click; canvas still empty (arm does not create).
- `evidence/EXP-027-R2/t4-03-name-renamed-pushtype.png` / `t4-04-component-grid-name-rename.png` — post-placement component selected; grid Name `FX_ButtonRecovery03`, Type `PushButton` pre-Save.
- `evidence/EXP-027-R2/t6-savechanges-network-evidence.txt` — raw network request dump supporting the audit file.
- `evidence/EXP-027-R2/t9-01-selectform-one-match.png` — inspected decisive AC-8: Select Form dialog, filter textbox `FX_ComponentRecoveryLab03` (Starts With/Case Sensitive boxes visibly unchecked, Filter By dropdown shows "Name"), grid exactly ONE row Caption/Name both `FX_ComponentRecoveryLab03`, OK/Cancel/Help buttons visible; proves live count = exactly one for the target.
- `evidence/EXP-027-R2/t9-final-audit-notes.md` — T9 audit: one-match proof details, action-count reconciliation (1 creation / 1 authorized placement click / 1 Name assign / 1 Save #157 / 1 close / 1 reopen; non-mutations excluded), confinement result, final Designer state note.
- `evidence/EXP-027-R2/t2-select-form-absence-notes.md` — T2 sequence, filter-setting facts, count-inspection detail and omissions, decisive-result interpretation, action counts.
- `evidence/EXP-027-R2/t2-grid-count.txt`, `t2-grid-count-corrected.txt`, `t2-item-container-count.txt` (attempt only; errored) — read-only DOM count observations supporting (not sole-decisive for) the zero-row result; omission: the container-class ambiguity and two abandoned selector probes are recorded in the notes.
- `evidence/EXP-027-R2/t2-01-select-form-positive-control.png` — inspected decisive: Select Form dialog showing exactly one row (Caption/Name both `FX_ComponentRecoveryLab02`, highlighted), Filter By=Name, **Case Sensitive visibly unchecked**, Starts With unchecked, OK/Cancel/Help visible but not pressed; filter field truncated at edge (`…omponentRecoveryLab02`; exact string from snapshot). Supports AC-1 positive-control + live/populated result.
- `evidence/EXP-027-R2/t2-02-select-form-target-zero.png` — inspected: same dialog, Filter By=Name and Case Sensitive visibly unchecked, filter field `…omponentRecoveryLab03`, and the visible grid area below the header row shows no data row. Supports AC-1 target-zero via the normal visible result; exact count additionally settled by the fresh accessibility snapshot (header-only grid). Does NOT prove Forms-database durability or inventory completeness.
- `evidence/EXP-027-R2/t3-creation-baseline-notes.md` — T3 sequence detail, corrections/omissions (wrong-ref fill attempt, displayEl interception), baseline facts, counts, preservation facts.
- `evidence/EXP-027-R2/t3-01-fresh-wizard-selection-dialog.png` — inspected: fresh "Form Wizard Selection" dialog over the still-open Lab02 canvas; radio New Form selected, Category/Wizard comboboxes visibly empty. Supports AC-2 precondition (fresh dialog).
- `evidence/EXP-027-R2/t3-02-category-dropdown-options.png` — inspected: rendered options list with **Classic** first ("WinStudio classic form wizards") before selection; Category field still empty. Supports the replay-verified prefix.
- `evidence/EXP-027-R2/t3-03-wizard-dropdown-options.png` — inspected: Category combobox visibly "Classic"; Wizard dropdown rendered with **Build from Scratch** first ("Plain form without defined components"), Wizard field still empty. Supports the second dropdown selection precondition.
- `evidence/EXP-027-R2/t3-04-classic-buildfromscratch-selected.png` — inspected: pre-OK dialog shows New Form radio, Category "Classic", Wizard "BuildFromScratch" committed by rendered-option clicks (no typing). Supports AC-2 visible Classic+BuildFromScratch proof.
- `evidence/EXP-027-R2/t3-05-wizard-page1-name-filled.png` — inspected: "Form Wizard - Build From Scratch" page 1, Name combobox `FX_ComponentRecoveryLab03`, Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query Form/Comments empty; Next enabled. Supports AC-2 name entry with defaults untouched.
- `evidence/EXP-027-R2/t3-06-save-template-unchecked.png` — inspected: wizard page 2 with **Save Template checkbox visibly empty/unchecked**, Finish enabled, Next disabled. Supports AC-2 Save Template unchecked before the single creation action.
- `evidence/EXP-027-R2/t3-07-process-completed.png` — inspected: alertdialog "Process Completed Successfully" (title names the wizard) with OK. Supports single creation commit.
- `evidence/EXP-027-R2/t3-08-target-created-clean-baseline.png` — inspected decisive AC-3: BOTH form tabs visible (Lab02 unselected still open, Lab03 selected heading + close X), empty rendered canvas for Lab03, Properties grid Name `FX_Component…` (truncated render; exact from accessibility snapshot incl. Version "User version for us…"), Device Type Default / Form Type Normal / Is Master True, Design toolbar Save greyed (clean). Proves target identity+clean+untouched canvas + Lab02 preservation; does NOT prove complete component cardinality nor lifecycle persistence.
- (this record) — experiment status/log.
