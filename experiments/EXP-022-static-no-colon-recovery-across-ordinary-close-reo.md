# EXP-022 — Static No Colon Recovery Across Ordinary Close/Reopen

Status: **BLOCKED at T4-R — pre-No-Colon baseline not capturable on the permitted rendered property-grid surface (No Colon not exposed). No further mutation permitted.**
Date: 2026-10-06 (Asia/Singapore)
Run: R-20261006-125233-BECN (cycle 1, task T1; T4-R recovery cycle 5)
Mode: LEARNING MODE
Editing scope: User
Target: `FX_StaticNoColonLab01` (Form), `FX_StaticNoColonStatic01` (Static component)
Evidence directory: `evidence/EXP-022/`

## Objective

Create one new User-scoped classic BuildFromScratch Form `FX_StaticNoColonLab01` with exactly one Static component `FX_StaticNoColonStatic01`. Before the property under test, establish a visible setup baseline (Caption exactly `Static No Colon Test`; record component Name, Caption, No Colon, and the comparison properties exposed by the verified component workflow). Require the pre-test No Colon value to be **False**; otherwise record the experiment blocked rather than manufacturing a transition. Then change **only** No Colon False→True, perform exactly one ordinary Designer Save to clean state, close the target exactly once via its ordinary Form-tab close control, reopen exactly once via the Designer Form-menu recent forms in the same Designer/client context, and verify No Colon=True, Caption and comparison properties unchanged, and the rendered Static display reflecting the no-colon state. Claims are UI-level recovery across the tested weak close-only boundary only — no database-durability, cache-eviction, serialization, or internal-instance claim.

## Required reading before mutation (done in T1, read-only)

- `experiments/EXP-003-R2-component-fundamentals-replay.md` — replay-verified Static placement + Name/Caption editing + persistence; Static label renders Caption with a **trailing colon** at runtime; header-lag caveat (header refreshes on reselection, not on commit).
- `experiments/EXP-008-R2-clean-replay-form-description-recovery-across-ordi.md` — accepted ordinary close/reopen boundary: Form-tab close control (`.x-tab-close-btn`) of a clean form is immediate with no unsaved-change prompt; reopen via Designer **Form menu → recent-forms entry**; `Definition` submenu never opened; evidence discipline (store vs UI-level proof).
- `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` — replay-verified fresh-dialog Classic + BuildFromScratch wizard-selection prefix (rendered dropdown options, no typing, single OK).
- `experiments/EXP-021-static-caption-recovery-across-ordinary-close-reo.md` — accepted Static Caption recovery precedent (same boundary): create → Static + Caption → one ordinary Save → ordinary tab close → recent-forms reopen → component recovery; Save toast "Form [...] and global object(s) were saved."; canvas renders Caption text only after reopen (`Static Caption Close Only:` with trailing colon); exact grid values accessibility-derived.
- `experiments/EXP-021-R2-clean-replay-static-caption-recovery-across-ordina.md` — blocked replay checkpoint (not replayed here; read for the No Colon baseline requirement context: its brief required a pre-Caption baseline **including No Colon**).
- `recipes/forms/create-basic-form.md` (verified), `recipes/components/add-component-from-toolbox.md` (verified), `recipes/components/configure-basic-component.md` (verified).

Key extracted steps for this experiment:
- Creation: Designer **New** → Form Wizard Selection (New Form radio; Category **Classic**; Wizard **BuildFromScratch**) → OK → wizard page Name entry → Next → **Save Template unchecked** → Finish → "Process Completed Successfully" → OK; Finish persists immediately, Save disabled (clean).
- Component: Toolbox **Static** row click → single canvas click → generated name `static1_USER` (itemId `lb0` on a fresh form); rename via double-click Name value cell → type → Enter; Caption likewise via `Design.Caption` value cell. Grid value cell updates immediately; header may lag.
- Boundary: ordinary Save (toolbar Save, native click) → clean; tab close control once; Form-menu recent-forms entry once; verify by Form Name + ScopeType + ScopeName and component Name + recorded properties.
- Known: Static Caption renders with trailing colon; **No Colon** is the candidate property expected to control that colon (unverified until this experiment).

## Starting state / preflight facts (T1, 2026-10-06)

- Environment: Mongoose Web Client / Designer 2026.09.08, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, Portal shell 2026.09.00 (per `environments/current-environment.md` and the live portal banner).
- Browser state at T1 start (inspected first): **one tab** — the Mongoose portal tab with the Web Client iframe loaded and **signed in** (user badge `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge). Toolbar clean (Save/New/Delete/Refresh/… disabled; Open and Designer buttons enabled). No visible windows, no form open, no `Session Expired` alert, no `portal-notification` banner. **No login/session-establishment was needed or performed.**
- **No Web Designer tab is currently open** (the prior experiment's Designer tab is gone from this browser session). Designer readiness for the creation task remains to be established via the supported Designer split-button route in a later task; this does not block AC-1 (the brief's AC-1 surface is the visible Select Form Name filter + positive control, as in EXP-021).
- Repository: git repo, branch `exp/EXP-022`, HEAD `14e2609` ("harness: context/briefs update"). `git status --porcelain` at T1 end: exactly one untracked path — `evidence/EXP-022/` — plus this record file. No tracked file modified. EXP-021 record is committed (`6e4c382` "EXP-021: accepted"); EXP-021-R2 merged as blocked (`8098f32`).

## Preflight method (T1, read-only)

1. Read the required records/recipes above (read-only; none modified).
2. Inspected current browser state (1 tab as above) — no login performed at inspection time.
3. Clicked Web Client **Open** (toolbar `Open`, native Playwright click) → **Select Form** dialog opened. It reopened **remembering** the leftover filter `fx_staticcaptionlab02` (0 rows) from the EXP-021-R2 attempts — known verified behavior (filter persists across dialog reopen in the same Web Client session); the remembered 0-row state was **not** used as evidence.
4. **Filter By = Name** was already set to `Name` (combobox visibly "Name"); **Case Sensitive unchecked** (case-insensitive mode, as required); **Starts With unchecked**.
5. **Positive control (visible hit):** cleared the filter (40× real Backspace key events over the filter field) then typed `FX_FormPropertyLab13` via real key events (`pressSequentially`) → grid re-rendered **exactly 1 row**: Caption `Form Property Caption Close Only Replay 2`, Name `FX_FormPropertyLab13` (the known-existing EXP-010-R3 lab, supported by the EXP-021 record's 21-row `FX_` inventory). (evidence `02`.)
6. **Target-zero (visible):** cleared the filter again (40× Backspace) then typed `FX_StaticNoColonLab01` (same case-insensitive Name mode) → grid body rendered **0 rows** (no row elements in the accessibility subtree; grid body empty). (evidence `03`.)
7. Restored the dialog (filter cleared) and closed via **Cancel** (native click). Web Client verified clean: no dialog, no windows, toolbar Save disabled. (evidence `04`.)
8. Editing scope evidence: Web Client user badge `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (signed-in user per `environments/current-environment.md`). The **Designer status bar `[ ScopeType: User / ScopeName: <user> ]`** was not visible in this T1 because no Designer tab is open; the Designer-scope guard is deferred to the creation task (same pattern as EXP-021 T1, where scope was proven on the inherited Designer tab).

## Target-absence evidence — pre-mutation absence of `FX_StaticNoColonLab01`

| Check | Method | Result |
|---|---|---|
| UI filter, case-insensitive (Case Sensitive off, Filter By Name) | Filter `FX_StaticNoColonLab01` | **0 rows** (evidence `03`) |
| Positive control (filter works, same mode) | Filter `FX_FormPropertyLab13` | **1 row**: Name `FX_FormPropertyLab13`, Caption `Form Property Caption Close Only Replay 2` (evidence `02`) |

**Counts (UI-filtered, case-insensitive): target `FX_StaticNoColonLab01` = 0; positive control = 1.**

Case-insensitive matching accounted for by the Case Sensitive checkbox being **off** in both reads plus the positive control proving the filter mechanism live-renders on real key events. A store-level scan was not used; the UI filter + positive control is the permitted rendered-UI proof (same method as EXP-021 / EXP-010-R3).

**Name/Caption ambiguity:** Filter By = **Name**; the positive-control row shows both Caption and Name columns. No row's Name or Caption resembles `FX_StaticNoColonLab01` in the filtered view. A full `FX_` inventory enumeration was not re-run in T1 (not required by this brief); the positive control is a single known-existing Form rather than a broad prefix control — noted as a limitation.

## Repository / worktree starting state (T1)

- Git repository; branch `exp/EXP-022`; HEAD `14e2609`. New in this run: `evidence/EXP-022/` (screenshots `01`–`04`) and this record file. No prior experiment file, recipe, environment file, or `AGENTS.md` modified; no tracked file staged or modified.

## Observations (T1)

- The inherited Web Client session is **live and usable** without any session-establishment action: signed-in badge visible, Select Form dialog loaded a live server-backed inventory (positive control rendered a row; no `Session Expired` alert).
- The Select Form dialog **remembered** the EXP-021-R2 leftover filter `fx_staticcaptionlab02` (0 rows) on open; re-read after real key events; the stale state was not used as evidence.
- Filter field clearing required real Backspace key events over the field (a single `Delete` press did not clear the 47-char remembered value; 40× Backspace did). `pressSequentially` (real key events) triggers the grid re-render; this matches the verified EXP-021 pitfall about `fill()` not re-rendering.
- No Mongoose artifact created/modified/deleted; no User Preference touched; no unload invoked; no form opened from the dialog; no Designer mutation; no authentication action.

## Knowledge state (as of T1)

- `FX_StaticNoColonLab01` absent (case-insensitive Name filter 0 rows + positive control 1 row): **observed** (T1).
- Positive-control Form `FX_FormPropertyLab13` present with Caption `Form Property Caption Close Only Replay 2`: **observed** (T1; corroborates the EXP-021 inventory record).
- Live usable Web Client session without establishment action: **observed** (T1).
- Editing scope **User**: partially proven in T1 (Web Client user badge); Designer status-bar proof deferred to the creation task (no Designer tab currently open): **observed (Web Client badge) / unresolved (Designer status bar)**.
- The EXP-022 **Static No Colon recovery-across-ordinary-close/reopen** procedure remains **unverified** (all mutation steps pending).

## Open questions / blockers

- None blocking. AC-1 (preflight: live usable session, target absent via supported visible Select Form Name filter + positive control) is **PASS**.
- No Web Designer tab is open; the next task must open the Designer via the supported route (Web Client Designer split button per the verified recipe) and re-prove the Designer status-bar scope guard `[ ScopeType: User / ScopeName: <user> ]` before any mutation.
- The pre-test **No Colon=False** requirement cannot be checked until the Static component exists; if the recorded baseline No Colon is not False, the experiment must be recorded blocked.

## T2 — Read-only Designer launch + visible User-scope proof (AC-1 completion, 2026-10-06)

### T2.1 — State inspected first (read-only)

- Browser at T2 start: **one tab** — the Mongoose portal tab, Web Client iframe signed in, toolbar clean, no windows/alerts (same state as T1 end; no session change).
- No login/authentication/session-establishment performed or needed.

### T2.2 — Designer launch via the supported split-button route

1. Native Playwright click on the Web Client **Designer split button** (the second `Designer` toolbar button, `mgtoolbarbutton-1126` per `environments/current-environment.md`) → a **new browser tab** opened at `WSWebClient/designer/Default.aspx` with **no `MGForm` parameter** (no Form created, opened, saved, or modified).
2. The Designer opened with the documented **"Identify Your Editing Scope"** dialog: **Scope: `User`**, **User: `anton.ramos@3mworks.com.ph`** (both visibly rendered in the dialog combos). (evidence `05`.)
3. Confirmed via the dialog's **OK** button (the documented supported step of the verified launch route; no scope switch — the combos already showed User/signed-in user). No other dialog, prompt, or error appeared.

### T2.3 — Post-OK Designer state (read-only)

- **Status bar (rendered-visible):** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` + `en-US` + "powered by Infor". (evidence `06`.)
- Designer chrome live: menu bar (Form/Edit/View/Help), toolbar (Design/Save/Regenerate Form/New/Copy/Delete/align/Undo/Redo — **Save and Regenerate Form disabled = clean**), Toolbox panel expanded with **Framework Components** tree including the **Static** row, Properties panel (Form/Component tabs), blank canvas (no form loaded, no form tabs).
- No Form was created/opened; no property edited; no Save/Regenerate; no unload; no preference change; no authentication action; the Web Client tab remains present and clean.

### T2.4 — T2 evidence (under `evidence/EXP-022/`)

- `05-designer-open-scope-dialog.png` — inspected: Designer tab just opened; "Identify Your Editing Scope" dialog visibly showing **Scope: User**, **User: anton.ramos@3mworks.com.ph**, OK/Cancel/Help; Toolbox (Static row visible) and Properties panel present; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` already rendered at bottom-left. Proves: supported launch route reached the scope dialog with User scope for the signed-in user. Does not prove any Form state (none loaded).
- `06-designer-loaded-scope-user-statusbar.png` — inspected: after OK — no dialog; live Designer chrome; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` rendered-visible; Toolbox Framework Components with **Static** row; blank canvas; toolbar clean (Save/Regenerate greyed). Proves: live usable Designer/client context in **User** scope with the signed-in user, no form loaded, clean state. Does not prove target absence (that is T1's filter evidence) or any persistence behavior.

### T2.5 — Observations / corrections

- The fresh Designer tab (new session) re-prompts the "Identify Your Editing Scope" dialog; confirming OK with the already-selected **User / signed-in user** values is the documented step of the verified recipe ("If 'Identify Your Editing Scope' appears, confirm User scope… OK"). This is not an authentication/session-establishment action and changed nothing.
- The Designer opened with **no form loaded** (no `MGForm` param, no form tabs) — exactly the precondition for the later creation task.
- Repository unchanged by T2 (no new files beyond the record + evidence dir).

### T2.6 — Knowledge-state updates

- Live usable Web Designer client context, launched via the supported split-button route, **Editing Scope = User / ScopeName = anton.ramos@3mworks.com.ph** (dialog + status bar, rendered-visible): **observed** (T2).
- Combined with T1 (live signed-in Web Client, target absent via Name filter + positive control): **AC-1 is now fully proven** — live usable session, visible User editing scope, and `FX_StaticNoColonLab01` absence all established with rendered-visible evidence.

### T2.7 — Stopped here (per instruction)

Did **not** create `FX_StaticNoColonLab01`; did not place any component; did not Save/Regenerate/open any Form; did not touch any non-`FX_` artifact; did not change any preference; did not invoke any unload; did not authenticate. The Designer tab is left **open, clean, no form loaded** for the next task (creation). **Next task:** create `FX_StaticNoColonLab01` via the verified wizard path, then Static placement/rename/Caption + pre-No-Colon baseline (No Colon must read False).

## T3 — Creation of `FX_StaticNoColonLab01` (AC-2, 2026-10-06)

### T3.1 — Guards re-verified first (read-only; PASS)

- Browser at T3 start: Tab 0 Web Client (signed in, clean); Tab 1 (current) Designer from T2 — `designer/Default.aspx` with **no `MGForm` param**, no form tabs, toolbar clean, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Same Designer/client context as T2 (no client replacement).
- **Guard 1 — scope (PASS):** status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (T2 evidence `06`; re-present this session).
- **Guard 2 — target absence (PASS):** proven in T1 (case-insensitive Name filter 0 rows + positive control 1 row); no intervening creation occurred. Target absent immediately before the mutation.

### T3.2 — Creation method (verified fresh-dialog prefix + verified basic-form suffix)

1. Native click on Designer toolbar **New** (`#mgtoolbarbutton-1088`, "New Form Definition") → **fresh "Form Wizard Selection"** dialog: radio **New Form** active, Category and Wizard comboboxes **empty** (no carried-over values). (evidence `07`.)
2. **Category selection (rendered option, no typing):** clicked the Category dropdown picker → rendered options (Classic "WinStudio classic form wizards" first). Clicked the rendered **Classic** option → Category combobox displays "Classic"; Wizard still empty. (evidence `08`.)
3. **Wizard selection (rendered option, no typing):** clicked the Wizard dropdown picker → rendered options (Build from Scratch "Plain form without defined components" first). Clicked it → Wizard combobox displays "BuildFromScratch"; Category still "Classic". (evidence `09`, `10`.)
4. **Single OK submission:** clicked the selection dialog **OK** exactly once → **no rejection alert**; first **"Form Wizard - Build From Scratch"** page appeared with **Name empty** (`*` only), Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source/Query Form/Comments empty, Back/Finish disabled, Next enabled.
5. **Name entry:** set the Name combo to exactly `FX_StaticNoColonLab01` (combo then displays the exact value); all other page-1 defaults left untouched (BuildFromScratch / GridLeft / Default / empty). (evidence `11`.)
6. **Next** (native) → Save Template step: checkbox "Save Template" **checked by default** (`[checked]` in accessibility); Next disabled, Finish enabled. (evidence `12`.)
7. **Save Template unchecked:** first click attempt on the checkbox input timed out (the `x-form-checkbox` **display face span intercepts pointer events** — Playwright reported the interception repeatedly; post-check showed the checkbox still `[checked]`, i.e., the failed click had **no effect**). Corrected attempt: native click on the display-face element (`#ext-comp-1526-displayEl`) → checkbox now **unchecked** (accessibility: no `[checked]` state). (evidence `13`.)
8. **Finish** (native, once) → **"Process Completed Successfully"** alertdialog → **OK** (native click on the dialog's OK button). (evidence `14`.)
9. Designer loaded the new form: URL now `…&MGForm=FX_StaticNoColonLab01`; form tab **`FX_StaticNoColonLab01`** appeared (the only form tab) and is selected; toolbar **clean** (Save/Regenerate Form/Undo/Redo all disabled) — **Finish persisted immediately**, no separate Save performed. (evidence `15`.)

### T3.3 — Post-creation identity + untouched Form baseline (read-only, from the loaded property grid)

| Property | Value | Source |
|---|---|---|
| **Name** | `FX_StaticNoColonLab01` | property grid (accessibility, full value) |
| **Description** | *(empty)* | property grid |
| **Caption** | *(empty)* | property grid |
| **Version** | `User version for user anton.ramos@3mworks.com.ph` | property grid (accessibility) |
| **Device Type** | `Default` | property grid |
| **Form Type** | `Normal` | property grid |
| **Is Master** | `True` | property grid |
| **ScopeType** | `User` | status bar (rendered-visible) |
| **ScopeName** | `anton.ramos@3mworks.com.ph` | status bar (rendered-visible) |

- **Exact editing identity:** Name `FX_StaticNoColonLab01`, ScopeType `User`, ScopeName `anton.ramos@3mworks.com.ph` — three agreeing surfaces: form tab heading, URL `MGForm=FX_StaticNoColonLab01`, property grid Name.
- **Classic/BuildFromScratch creation result:** visible in the wizard flow (Category "Classic", Wizard "BuildFromScratch", wizard page Form Type `BuildFromScratch`, "Process Completed Successfully"); the loaded form's grid Form Type displays `Normal` (the recipe-documented post-creation display).
- **No components** — canvas blank (Static not yet placed, per task boundary).
- **Designer clean:** Save/Regenerate Form/Undo/Redo disabled; no visible windows; no dirty state.

### T3.4 — Ordinary-Save accounting (explicit)

- **No ordinary Designer Save was performed in T3.** The toolbar Save button was never clicked. The only creation-transaction completion was the wizard **Finish → "Process Completed Successfully" → OK** (creation-dialog completion, distinct from the later experiment ordinary Save). Finish persisted the form immediately with Save disabled (clean), per the verified recipe.

### T3.5 — T3 evidence (under `evidence/EXP-022/`)

- `07-fresh-wizard-selection-dialog.png` — fresh Form Wizard Selection dialog: New Form radio, Category/Wizard dropdowns empty. Supports the fresh-dialog precondition.
- `08-category-dropdown-options.png` — Category dropdown rendered options (Classic first), before selection. Supports the rendered-Classic-option precondition.
- `09-wizard-dropdown-options.png` — Wizard dropdown rendered options (Build from Scratch first); Category "Classic". Supports the rendered-Build-from-Scratch-option precondition.
- `10-wizard-buildfromscratch-selected.png` — Wizard combobox "BuildFromScratch"; Category "Classic". Supports the Wizard-selected postcondition.
- `11-wizard-name-entered.png` — wizard page: Name `FX_StaticNoColonLab01`, Form Type BuildFromScratch, Form Layout GridLeft, Device Type Default, Data Source/Query/Comments empty. Supports exact-Name + untouched-defaults precondition before Finish.
- `12-save-template-checked-before.png` — Save Template checkbox checked (default) before unchecking. Supports the deliberate-uncheck record.
- `13-save-template-unchecked.png` — Save Template checkbox visibly unchecked; Finish enabled. Supports the Save-Template-unchecked precondition before Finish.
- `14-process-completed-successfully.png` — "Process Completed Successfully" dialog after Finish. Supports the creation-transaction success.
- `15-form-created-loaded-clean.png` — inspected: form tab heading **`FX_StaticNoColonLab01`** (only form tab); blank canvas; Properties Design group: Name `FX_StaticNoColonL…` (truncated in crop), Description/Caption empty, Version `User version for us…`, Device Type `Default`, Form Type `Normal`, Is Master `True`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar clean (Save/Undo greyed). Proves: target Form visibly loaded + User scope + same ScopeName + clean state + no components. Limitation: Name/Version grid cells truncated in crop — exact strings from the accessibility tree (labeled separately).

### T3.6 — Observations / corrections

- **The Save Template checkbox requires clicking its display-face element** (`x-form-checkbox` display span intercepts pointer events over the input element); the first click on the input ref timed out with **no effect** (verified by re-inspection before the corrected attempt — no blind retry). Matches the EXP-010-R3/EXP-021 verified finding (visible display-face click is the reliable toggle).
- **`fill()` worked on the wizard Name combo** (editable combo) — consistent with EXP-021's note (unlike the Select Form filter field, which required real key events).
- Wizard numeric IDs drifted this session (formwizard dialog `e309`/`e517`, Category combo `mginfoconexpandable-1245`, Wizard combo `mginfoconexpandable-1250`, Save Template checkbox `ext-comp-1526`) — resolved at runtime.
- No User Preference inspected/changed; no unload invoked; no Regenerate; no form other than the new `FX_StaticNoColonLab01` created/modified/deleted; editing scope stayed **User**; no session-establishment action (session live throughout).

### T3.7 — Knowledge-state updates

- `FX_StaticNoColonLab01` **created, exactly one**, User scope (ScopeName `anton.ramos@3mworks.com.ph`), via the fresh-dialog Classic/BuildFromScratch prefix + verified basic-form suffix with Save Template unchecked; baseline Caption **empty**, Description **empty**; loaded clean with no components: **observed** (T3).
- The composed creation path is **observed** in this run (prefix replay_verified in EXP-019-R2; suffix verified recipe; single execution of the composition).
- EXP-022 Static No Colon recovery procedure remains **unverified** (component + Caption + No Colon baseline/mutation + Save + close + reopen pending).

### T3.8 — Stopped here (per instruction)

Did **not** place any component; did **not** set any Caption; did **not** perform an ordinary Designer Save; did **not** close/reopen; did **not** touch any other artifact. The target `FX_StaticNoColonLab01` is left **open and clean** for the next task (Static placement + rename + Caption + pre-No-Colon baseline; No Colon must read False or the experiment is recorded blocked). **Next task:** AC-3 — add exactly one Static `FX_StaticNoColonStatic01` via the verified toolbox/configure procedures and capture the pre-No-Colon baseline.

## T4-R — Recovery inspection after interrupted T4 (read-only, 2026-10-06)

Context: T4 (AC-3: Static placement + rename + Caption + pre-No-Colon baseline) was interrupted by a repeated-tool loop after possible side effects. This T4-R is recovery-only: one fresh untargeted snapshot + one corrected read-only inspection; no mutation, no replay, no Save/close/reopen, no session action.

### T4-R.1 — Fresh untargeted snapshot (current Designer page)

- Browser: Tab 0 = portal/Web Client tab; Tab 1 (current) = Designer tab, URL `…&MGForm=FX_StaticNoColonLab01` — the target Form is still the loaded form in the same Designer/client context (no client replacement).
- Form tab **`FX_StaticNoColonLab01`** present, selected, with its ordinary close control ("closable FX_StaticNoColonLab01").
- Properties panel: **Component** tab selected (a component is selected); component header textbox renders **`static1_USER (Static)`** — the generated Static name, i.e., the component was **not renamed** to `FX_StaticNoColonStatic01`.
- Component property grid (expanded, accessibility-derived): **Name = `FX_StaticNoColonStatic01`**, **Description empty**, **Caption = `Static No Colon Test`**, **Type = Static**, **From Device Master = True**, Appearance group (Theme Class empty, Background Color empty, Foreground Color `#000000`, Bitmap empty, Font empty, **Justification = Right**), Behavior group (Read-Only/Disable False, Tab Read-Only Field False, Hidden False, No Tab Stop False, Auto Complete False), Data Source group (Binding Type None, Required False, To Be Determined False, Upper or Lower Case Mixed), Events group (Drag From/Drop On 0 events), Help group (Help Context ID 0), Inheritance group (Set Class From "This Component's Attribute"), Layout group (**Unit Char, Size 20; 1, Location 3.66666666666667; 20.25, Tab Order 0**), Miscellaneous group.
- **No `No Colon` row is present anywhere in the expanded grid** (all groups enumerated: Design, Appearance, Behavior, Add/Details and Find Form, New and Copy Operations, Dynamic Enabling and Disabling, Data Source, Events, Help, Inheritance, Layout, Miscellaneous). The Search Properties field still contains the leftover text **`No Colon`** from the failed T4 attempt; it produced no matching row.
- Toolbar: **Save and Regenerate Form enabled** (not greyed) → the Designer is **dirty** from the component/setup mutations. Undo enabled, Redo disabled.
- Status bar (rendered-visible): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` + `en-US`.
- Screenshot saved: `evidence/EXP-022/16-t4r-recovery-state-property-grid.png` (full page; inspected — shows the form tab heading, component panel header `static1_USER (Static)`, expanded component property grid with Name/Caption/Type rows, Search Properties field containing "No Colon", enabled Save/Regenerate toolbar buttons, and the User-scope status bar).
- **Orphan evidence discovered in `evidence/EXP-022/`** (numbering collides with this recovery capture; these were written by the interrupted T4, not accepted by the controller; content inspected read-only this session):
  - `16-toolbox-static-armed.png` — inspected: form `FX_StaticNoColonLab01` tab, **blank canvas** (no component yet), Toolbox **Static** row highlighted/armed, Properties panel on the **Form** tab (Name `FX_StaticNoColonL…`, Caption empty), status bar User scope. Proves: T4 reached the Static-toolbox-armed precondition with no component placed. Does not prove any placement occurred.
  - `17-ac3-component-baseline-expanded.png` — inspected: one Static component **placed and selected** on canvas (header `static1_USER (Static)`), expanded component grid with Search Properties field "No Colon": Name `FX_StaticNoColonS…` (truncated), Caption `Static No Colon Tes…` (truncated), Type Static, From Device Master True, Appearance (Theme Class, Background Color, Bitmap File Name, Font rows; Foreground Color `#000000`, Justification `Right`), Behavior (Read-Only/Disable, Tab Read-Only Field, No Tab Stop, Hidden, Auto Complete all `False`), then Add/Details and…, New and Copy O…, Dynamic Enabli…, Right-Click Menu, Drag Image, Enabled When, Required When, Theme Class When. **No `No Colon` row visible in this rendered crop.** Proves: component placement + grid state at T4's checkpoint; corroborates the T4-R accessibility enumeration (grid value cells truncated in the crop — exact strings come from the accessibility tree).

### T4-R.2 — What the recovery establishes vs. leaves unresolved

Established (read-only, current state):
- Target `FX_StaticNoColonLab01` still loaded, User scope, same Designer/client context; form tab close control present.
- Exactly one component is selected in the Component panel; its grid Name is `FX_StaticNoColonStatic01` and Caption is `Static No Colon Test` (so the interrupted T4's rename/Caption side effects did occur at the grid level, while the component header still shows the generated name `static1_USER` — the known header-lag behavior).
- Designer is dirty (Save enabled); no ordinary Save has been performed yet.

Unresolved / not established:
- **`No Colon` is not exposed on this rendered component property-grid surface** (expanded grid fully enumerated; the Search Properties "No Colon" query returned no row). The pre-test No Colon=False baseline required by AC-3 **cannot be captured** on this permitted surface.
- Component cardinality: only the selected component's grid is visible; no supported visible inventory surface was used, so total component count remains unproven (one creation action + visible presence is not cardinality proof).
- Rendered Static display text on the canvas: not evaluated in this recovery step (canvas text not required for the pre-reopen baseline; left unresolved).

### T4-R.3 — Blocker

Per the brief, the experiment requires the pre-test No Colon baseline to be captured and to read **False**; if it cannot be established, stop rather than manufacture a transition. The permitted rendered property-grid surface does not expose a `No Colon` row for this Static component, and recovery is limited to this one snapshot + one inspection (no further search surfaces, no mutation, no second attempt). **AC-3 baseline is BLOCKED: No Colon not visibly exposed; experiment recorded blocked at this checkpoint.** No further action performed.

### T4-R.4 — Knowledge-state updates

- Static component grid state after interrupted T4 (Name `FX_StaticNoColonStatic01`, Caption `Static No Colon Test`, Type Static, header still `static1_USER`, Designer dirty): **observed** (T4-R).
- `No Colon` **not exposed** on the expanded rendered component property grid (full enumeration + Search Properties "No Colon" → no row): **observed (absence on this surface)** — does not prove the property does not exist elsewhere; only that this permitted surface does not expose it.
- EXP-022 procedure: **blocked** at the pre-No-Colon baseline requirement (No Colon baseline not capturable on the permitted visible surface).
