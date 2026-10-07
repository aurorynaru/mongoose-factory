# EXP-028 T1 — read-only preflight notes (no target mutation)

Run: R-20261007-182351-hVYe, cycle 1, task T1. Date: 2026-10-07.
Experiment: EXP-028 — Button Caption Recovery Across Ordinary Close/Reopen.
Target (not created this task): Form `FX_ButtonCaptionLab02`, Button `FX_ButtonCaption02`.

## Worker/session identity

- Fresh OpenCode conversation (new worker session for run R-20261007-182351-hVYe).
- Harness did not print a raw session id in this task's visible stream; the new
  conversation itself establishes freshness. Prior recorded sessions: EXP-027-R2
  worker `ses_eea48b294ffewiRJGXFlT7uTdC`, EXP-027 `ses_eea6d6124ffes94Z5Ncy8SwXYM`
  — this task is neither.
- Browser was NOT reset by the new session; inherited tabs/state persisted and were audited read-only.

## Procedure inputs read before any mutation (per instruction)

- `experiments/EXP-027-R2-clean-replay-button-component-recovery-in-a-self-c.md` — replay_verified
  create→Button→Name→Save→close→Form-menu recent-forms reopen lifecycle; Select Form Name-filter
  absence proof with Case Sensitive unchecked; Cancel dismissal.
- `experiments/EXP-003-R2-component-fundamentals-replay.md` — Button Caption recovery across FULL-PAGE
  reload/reopen (the separate boundary EXP-028 must not re-test); verified component recipes;
  grid Type label `PushButton` vs Toolbox `Button` vs model `button`; stale-compDef caveat.
- `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` — replay_verified
  fresh-dialog Classic/BuildFromScratch rendered-option selection prefix.
- Blocked `experiments/EXP-020-button-caption-recovery-across-ordinary-close-reop.md` — the AC-4
  failure: committing a literal in the Caption combobox produced named string resource
  `ApplyFullTextIndexScriptQuestion`; recipe says use the literal text portion, not the adjacent
  resource picker. EXP-028 must avoid repeating that failure mode.
- EXP-018 (context only): wizard-selection prerequisite blocked when typed; rendered-option clicks needed.
- Verified recipes: `recipes/forms/create-basic-form.md`, `recipes/components/add-component-from-toolbox.md`
  (incl. Known-pitfalls line 41 authorizing native coordinate clicks),
  `recipes/components/configure-basic-component.md` (Name/Caption inline editor, Enter commit).

## Controlled browser context enumeration (fresh)

- `browser_tabs list`: exactly two tabs.
  - Tab 0: portal Mongoose Web Client (`.../c51080bc-3191-4598-9894-39e1b84f8e87`), authenticated.
  - Tab 1: Web Designer at `designer/Default.aspx?...&MGForm=FX_ComponentRecoveryLab03`.
- Tab 0 fresh snapshot: Portal 2026.09.00 + DEM; Web Client header identity button
  `<signed-in user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; toolbar Open enabled, Save/New/Delete/
  Refresh/FiP/etc. disabled (clean); Explorer tree intact; no Select Form dialog, no alert/prompt.
- Tab 1 fresh snapshot (after one read-only select): inherited form-tab tablist = two tabs:
  `FX_ComponentRecoveryLab02` (unselected) and `FX_ComponentRecoveryLab03` (SELECTED) with its close
  control; Design toolbar Save/Regenerate/Undo/Redo all disabled (clean); component selector header
  `FX_ButtonRecovery03 (Button)`; Properties Component tab selected; Details panel collapsed but visible.
- Evidence: t1-01-webclient-tab-visible.png, t1-02-designer-tab-visible.png (both inspected).

## Usable-workflow determination

Usable authenticated Web Client (tab 0) + one usable Web Designer in visible User scope (tab 1) already
exist. No session-establishment sequence was needed or performed; no new Designer launched.

## Editing scope

Designer status bar visibly `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` in the selected
frame (t1-02 shows it). User scope established without opening any dialog.

## Inherited-state preservation audit

- Tab 1: `FX_ComponentRecoveryLab02` tab present untouched; `FX_ComponentRecoveryLab03` open, SELECTED,
  clean (Save/Regenerate/Undo/Redo disabled), Button `FX_ButtonRecovery03` selected with grid Name
  grid Name `FX_ButtonRecover…` (truncated render; selector header full: `FX_ButtonRecovery03 (Button)`),
  Type `PushButton`, Caption row empty. Untouched.
- Tab 0: Web Client clean; no dialogs before this task; no dirty Forms/prompts/alerts anywhere.
- No close/save/discard/edit/unload/regenerate performed on anything inherited in T1.

## Live Select Form absence proof (sequence + omissions)

1. One native click on Web Client toolbar `Open` → exactly one `Select Form` dialog (Caption/Name columns).
   Inherited filter state at open: textbox already contained `FX_ComponentRecoveryLab03`, Filter By=Name,
   Case Sensitive + Starts With unchecked; grid rendered exactly ONE row (Caption/Name both
   `FX_ComponentRecoveryLab03`) — a visible live populated result. Screenshot t1-03 (inspected) shows this
   row with filter field truncated at the left edge (`…omponentRecoveryLab02` after the fill below; exact
   value from snapshots). Omission: Case Sensitive visibly unchecked in t1-03, but the rendered row's text
   ends `…Lab03` does not match the displayed filter text `…Lab02` — see below.
2. Positive control (known-existing): fill of `FX_ComponentRecoveryLab02` into the filter textbox executed
   (non-mutating). Two fresh dialog-targeted snapshots after the fill still rendered the pre-fill row
   (`FX_ComponentRecoveryLab03`) while the textbox read `FX_ComponentRecoveryLab02` — i.e., this build did
   NOT visibly re-render rows on filter-text change alone. Recorded as observed behavior, not worked around.
3. Corrected attempt: per-character typing + Enter submit into the same textbox. Side effects (recorded):
   - textbox became doubled value `FX_ComponentRecoveryLab02FX_ComponentRecoveryLab02` (fill had already set it);
   - Enter in a Select Form filter box ACTIVATES/opens the current form: Web Client main region gained tab
     `FX_ComponentRecoveryLab03` selected + panel opened; URL gained `?favoriteContext=FX_ComponentRecoveryLab03`;
     menu gained `Actions`; `Help Current Form` became enabled. Non-mutating (no save-side effect), but this is
     a state change on the inherited Web Client that could not be reverted without reload (forbidden in T1).
   - With the non-existent doubled filter text committed, grid ref `f3e94` rendered ZERO data-row tables
     (header row only; accessibility snapshot shows `- grid [ref=f3e94]` with no children) → live case-insensitive
     Name-filter search with a committed non-matching value returns zero rows. Screenshot t1-04 (inspected) shows
     the dialog with header row only, Filter By=Name, Case Sensitive visibly unchecked. LIMITATION: the committed
     filter string at that moment was the doubled `FX_ComponentRecoveryLab02…` text, not exactly
     `FX_ButtonCaptionLab02`; it proves zero-result mechanics + absence of the pre-fill Lab03 row under a
     committed non-matching filter, but is a proxy for the exact target query. The exact-string zero-match for
     `FX_ButtonCaptionLab02` remains to be completed in the next task (dialog may be re-opened then).
4. One Cancel click dismissed the dialog (`find "Select Form"` → no matches; Web Client clean apart from the
   recorded Lab03 runtime-open state above).

## Action counts (T1)

Open×1, filter fills/typed inputs×2 (one fill + one slow-type-with-Enter; Enter's activation recorded), Cancel×1,
OK×0. No auth, no Designer action, no property/Form/component mutation, no save/close/reopen of the Designer.

## Network audit (this session context, non-static)

`t1-network-requests-nonstatic.txt` (87 lines): ZERO `SaveChanges` requests; one AppApi
`GenerateServerEvent` (#215) whose body (`t1-generateServerEvent-request-body.txt`) is
`eventName:"forminit"` from the Enter-activation open of Lab03 — no mutation event. `GetForm`/`SaveUserPref`
(#213/#214) accompany the activation; interpreted as activation bookkeeping, not a target-side effect.

## Repository baseline / confinement

Pre-task `git status --porcelain`: five pre-existing modified `tools/learning-harness/**` files only (untouched).
Last commits: `a01e949 harness: context/briefs update`, `8734ea6 Merge EXP-027-R2 (accepted)`.
This task writes only the permitted EXP-028 record + `evidence/EXP-028/**` files. No FX_ artifact other than
none was created; Lab01/Lab02/Lab03 artifacts untouched by mutation (Lab03 runtime-open = read activation only).

## Repository target scan

`FX_ButtonCaptionLab02` appears in NO experiment/recipe record (harness brief file only) — repository signal,
NOT server proof; live absence proof pending per the proxy limitation above.

## Next permitted action (T2 onward)

Re-open Select Form (or reuse state), set filter exactly `FX_ButtonCaptionLab02` and settle zero rows with the
exact string if achievable in one corrected attempt; then proceed to creation only after AC-1 fully settles.
