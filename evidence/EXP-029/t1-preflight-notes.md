# EXP-029 — T1 read-only preflight notes (no Mongoose mutation)

Run: R-20261007-183958-H9GE, cycle 1, task T1. Date: 2026-10-07.
Experiment: EXP-029 — Button Component Recovery Across Verified Coupled Unload.
Target (not yet created): `FX_ComponentUnloadLab01` (Form), `FX_ButtonUnload01` (Button). Editing scope: User.

## §A Procedure review (read before any mutation)

Inherited inputs re-read this task (statuses as recorded there):

1. **EXP-027 / EXP-027-R2** (accepted + replay_verified): self-contained Designer lifecycle
   create LabNN → Toolbox Button arm-click + ONE canvas click (`button1_USER`, itemId `bt2`,
   114x34) → Name-only inline edit (double-click Design.Name value cell → inline editor →
   fill+Enter; server-committed via `updcompprop`; do NOT verify via stale local compDef)
   → one ordinary Save (`SaveChanges` 200; toast "Form [...] and global object(s) were saved.")
   → Form-tab close control (clean close = no prompt, URL drops `&MGForm=`) → same-Designer
   Form-menu recent-forms reopen (`menuitem` entry click) → Name/Type equality recovery.
   Property-grid Type label recorded pre-close: **PushButton** (Toolbox row "Button", model
   ctrl "button"). Known nuance: component-selector combobox header lags after rename
   (readonly tree-picker input; refreshed post-reopen). EXP-027-R2 resolved that native
   Playwright `page.mouse.click(x,y)` at the currently inspected visible canvas box is the
   recipe-authorized placement mechanism (add-component-from-toolbox.md Known pitfalls line 41).
2. **EXP-006 / EXP-006-R2** (replay_verified): coupled-unload procedure — close target, then
   Web Client `Form > User Preferences` (Behavior page) read-only gate: checkbox boxLabel
   `Unload IDO Metadata With Forms` must be CHECKED (`checked/getValue/aria-checked true`);
   close via tab-close control (not OK; no save prompt when unchanged). Then Designer
   `Form > Definition > Unload All Global Form Objects` (`menuitem-1030`-family; click on the
   menuitem root fires it) exactly once — definitive marker: exactly one
   `POST /WSWebClient/Designer/DesignerSession/ClearCache` → 200 `{"Success":true}`; completion
   is silent (no dialog). Reopen via Form-menu recent-forms entry with no scope re-prompt.
3. **EXP-007 / EXP-007-R2**: same coupled-unload route for Description persistence; AC-1 and
   preference-gate mechanics as above; label must be RE-OBSERVED in the live UI, not assumed.
4. **EXP-003 / EXP-003-R2** (component recipes verified): placement facts (generated name/
   itemId/typeCode 8), Name-edit `updcompprop`, stale-compDef caveat, header-lag caveat,
   `PushButton` vs `button` type labels.
5. **EXP-019 / EXP-019-R2** (replay_verified): fresh "Form Wizard Selection" dialog via Designer
   New; Category Classic and Wizard Build-from-Scratch selected by clicking RENDERED dropdown
   options (no typing); single OK → first BuildFromScratch wizard page.
6. **EXP-028 (blocked record)**: exact-string live zero-match mechanics with Filter By=Name,
   Case Sensitive visibly unchecked were proven there in T2; also records that this build's
   Select Form dialog does NOT re-render rows on filter-text change alone (header-only grid
   after fill), and Enter in the filter textbox activates/opens the current form (avoid OK/Enter).
7. **Recipes**: `create-basic-form.md` (verified), `add-component-from-toolbox.md` (verified;
   canvas click via native Playwright clicks incl. `mouse.click` at coordinates),
   `configure-basic-component.md` (verified Name/Caption editor steps + stale-compDef caveat).

## §B Session identity

- Harness event record (`tools/learning-harness/data/runs/R-20261007-183958-H9GE/events.jsonl`,
  ts 2026-10-07T10:40:44.508Z): fresh worker session `ses_eea0c7626ffeTQlCpKcve6xjzi`
  (`worker.session_created`). Distinct from EXP-028's run R-20261007-182351-hVYe and EXP-027-R2's
  `ses_eea48b294ffewiRJGXFlT7uTdC`. Freshness = new OpenCode conversation; browser/Mongoose state
  inherited, NOT reset by this session.

## §C Controlled browser context enumeration (fresh)

`browser_tabs list`: exactly two tabs.
- Tab 0 (current): Mongoose portal tab `.../c51080bc-3191-4598-9894-39e1b84f8e87?favoriteContext=FX_ComponentRecoveryLab03`.
  Fresh untargeted snapshot (`evidence/EXP-029/t1-webclient-tab-snapshot.yml`): authenticated Web
  Client iframe live; identity button `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (username
  masked by secrets layer); menu bar Explorer/Form/Actions/Edit/View/Window/Help; toolbar **Open
  enabled, Save/New/Delete/Refresh/FiP/etc. all disabled = clean**; Web Client workspace shows an
  OPEN form tab `FX_ComponentRecoveryLab03` (`tablist > heading "FX_ComponentRecoveryLab03"` +
  `Close Panel FX_ComponentRecoveryLab03` control) — inherited runtime-open state (same as EXP-028
  T1's observation); no Select Form dialog; no alert/prompt; DEM badge, Portal 2026.09.00.
- Tab 1: Web Designer tab `designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab03` — one usable
  Designer with the inherited target-lab Form open (identity from tab URL only; its panel was not
  inspected this task, so its dirty/clean status is UNVERIFIED and recorded as unknown).

## §D Inherited-state preservation audit

Preserved exactly as found; nothing saved/discarded/closed/edited/launched:
- Web Client workspace form tab `FX_ComponentRecoveryLab03` (left open before this task): untouched.
- Designer tab with `&MGForm=FX_ComponentRecoveryLab03`: untouched, not selected, not inspected for mutation.
- No dialogs/prompts/dirty Forms were present or created on the Web Client tab at start.
- Portal top-bar "System Administrator" tab (portal-level): left as found; never touched.
- Repository: `git status --porcelain` shows ONLY five pre-existing modified `tools/learning-harness/**`
  harness-tooling files (present before this task; not touched by me). No experiments/recipes/evidence
  file outside the two permitted EXP-029 paths was created or changed.

## §E AC-1 read-only Select Form attempt (bounded)

Sequence on tab 0 (read-only; OK never pressed; Enter never sent):
1. One native click on Web Client toolbar **Open** → exactly one "Select Form" dialog
   (window controls: grid header Caption/Name, filter textbox, Filter By combobox, Case Sensitive +
   Starts With checkboxes, OK/Cancel/Help). Inherited remembered filter text was `FX_ButtonCaptionLab02`
   (left by EXP-028 T2); Filter By = **Name**; Case Sensitive / Starts With visibly UNCHECKED at every
   inspection. Grid rendered HEADER ROW ONLY with inner rows-container EMPTY at open
   (`grid [f3e94]` empty; `x-grid-row` count 0 in the full page snapshot).
2. Positive control: one ordinary fill (no submit) of exact known-existing Name
   `FX_ComponentRecoveryLab02` into the filter textbox → fresh targeted dialog snapshot + inspected
   screenshot (`t1-01-selectform-positive-control-rendered.png`) settle with: filter textbox rendering
   exactly `...omponentRecoveryLab02` (full string proven by accessibility snapshot), Filter By=Name,
   Case Sensitive visibly unchecked — but the grid still shows ZERO data rows (no row corresponding to
   the exact known-existing Name filter appears). This build's dialog did not re-render matching rows
   on text-fill alone in this bounded inspection window (consistent with the EXP-028 T1 recorded
   behavior; a settled row↔filter correspondence was NOT established here).
3. Bounded rule applied: fresh snapshot + one corrected visible inspection consumed; the target-filter
   fill for `FX_ComponentUnloadLab01` was therefore NOT attempted (positive control unproven → AC-1
   absence check not advanced, per brief).
4. One Cancel click dismissed the dialog (`find "Select Form"` → none afterward); Web Client restored to
   its inherited state (form tab `FX_ComponentRecoveryLab03` present again in snapshot; toolbar clean:
   Save disabled; console unchanged 0 errors / 10 pre-existing warnings). No row was ever activated.

**AC-1 status: PENDING/BLOCKED at T1** — populated-dialog liveness shown by the open dialog and prior
verified records, but the SETTLED RENDERED POSITIVE-CONTROL ROW CORRESPONDING TO THE EXACT KNOWN-EXISTING
NAME FILTER IS UNPROVEN within the allowed fresh snapshot + one corrected visible inspection. Per the
brief, target-zero results alone are insufficient; stop before any target mutation without retrying or
widening.

## §F Editing scope / identity (live UI, read-only)

- Web Client header identity button renders `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (username
  masked by the secrets layer; DEM badge visible). No mutation of any identity/scope control.
- Designer scope bar was not re-inspected this task (tab left unselected to avoid touching inherited
  state); prior records show `[ ScopeType: User / ScopeName: <signed-in user> ]` for this session —
  carried, not re-proven here.

## §G Repository scan (signal only, not server proof)

`FX_ComponentUnloadLab01` appears in no experiment/recipe record (only the harness brief). This is a
repository signal; live absence proof was NOT completed (see §E).

## §H Action counts (T1)

Open 1 · filter fills 1 · OK/Enter 0 · Cancel 1 · Designer actions 0 · saves/close/reopen/unload/auth
0. No Mongoose artifact created/modified/deleted. evidence written under `evidence/EXP-029/` only.

## §I Next permitted action (for a later task, not this one)

Re-establish the settled positive-control ↔ exact known-existing Name row correspondence (fresh-dialog
or as-explored mechanics per prior records), then prove zero case-insensitive Name matches for
`FX_ComponentUnloadLab01`, before any target mutation. No session establishment needed (usable live
Web Client + one usable Designer already exist).
