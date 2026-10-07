# EXP-026 - Button Component Recovery Across Ordinary Close/Reopen

Status: **BLOCKED AT AC-1 (lifecycle-state loss). T5 documentation-only reconciliation on 2026-10-07. No target mutation verified; AC-2..AC-8 not reached/pending.**
Date: 2026-10-06 (run R-20261006-172006-UMJu); reconciliation updated 2026-10-07
Mode: LEARNING MODE - new User-scope classic BuildFromScratch Form `FX_ComponentRecoveryLab01` with exactly one native Button component `FX_ButtonRecovery01`.
Run: R-20261006-172006-UMJu (cycles 4/6, tasks T2-T5)
Editing scope: User
Target: `FX_ComponentRecoveryLab01` (Form), `FX_ButtonRecovery01` (Button component)
Evidence directory: `evidence/EXP-026/`

## Objective

Observe UI-level structural recovery of one native Button component (exact Name + rendered Type label) across exactly one ordinary Web Designer Save to a clean target state, one Form-tab close, and one same-Designer Form-menu recent-forms reopen. First observation only for this bounded sequence; no database durability, cache eviction, metadata unload, Caption persistence, backend identity, or other component types are inferred.

## Acceptance criteria (map)

- AC-1: read-only preflight - inherited visible Forms/dialogs and dirty state recorded, usable Mongoose workflow + User editing scope proven, target absence proven with the supported case-insensitive Select Form Name filter plus a visible known-existing positive control.
- AC-2: target Form created once (fresh-dialog rendered-selection prefix per EXP-019-R2 + basic-form recipe, Save Template visibly unchecked).
- AC-3: untouched target baseline captured (Name, ScopeType, ScopeName, clean state, rendered canvas/component state; visible absence vs complete inventory distinguished).
- AC-4: exactly one native Button creation operation with visible presence verified.
- AC-5: component Name `FX_ButtonRecovery01` assigned via the verified Name-edit step only; exact Name + rendered Type label recorded (property-grid label normally PushButton for Toolbox Button).
- AC-6: exactly one ordinary Designer Save to clean target state; one Form-tab close; one same-Designer Form-menu recent-forms reopen.
- AC-7: post-reopen comparison shows the same scoped Form with recorded Name/Type recovered unchanged, target clean.
- AC-8: final read-only live target Name-filter count, lifecycle-action audit, repository confinement.

## Worker task log

### T2 - live Designer inspection (per prior handoff report)

- Established a live Web Designer in User scope showing inherited open tabs `FX_StaticNoColonLab01` and `FX_StaticCaptionLab04` with visible static1_USER Static component properties.
- No visible `FX_ComponentRecoveryLab01` or `FX_ButtonRecovery01` in that UI (UI-level absence only).
- No EXP-026 evidence or experiment-record files existed at that time.
- AC-1 remained incomplete: the Select Form Name-filter absence proof with a positive control was not completed.

### T3 - interrupted (repeated-command loop)

- Began the remaining AC-1 preflight and captured partial evidence, then was interrupted by a repeated identical shell command (loop; recorded failure 2026-10-06T09:25:41Z).
- Partial T3 evidence (six PNGs; written 2026-10-06 ~17:23-17:24 local):
  - `evidence/EXP-026/01-ac1-inherited-designer-state-scope-user.png` - full Designer frame: both inherited Form tabs (`FX_StaticNoColonLab01`, `FX_StaticCaptionLab04`), Toolbox expanded, property grid for component `static1_USER (Static)` (Name = static1_USER, Type = Static) visible under the Component tab; no target artifacts in that frame.
  - `evidence/EXP-026/02-ac1-designer-toolbar-clean.png` - same inherited Designer state with Form menu closed (menu-bar toolbar icons rendered, no open dropdown).
  - `evidence/EXP-026/03-form-menu-recent-forms-list.png` - Form-menu dropdown open showing recent forms: `FX_StaticCaptionLab04`, `FX_StaticNoColonLab01`, `FX_StaticCaptionLab01`, `FX_FormPropertyLab13`, `FX_ButtonCaptionLab01`, `FX_FormVariableLab05`, FormsSync, Runtime Builder Selection, `FX_FormVariableLab04`, `FX_FormVariableLab03`; no target name in the visible recent list (recent-list visibility only; not a global absence proof).
  - `evidence/EXP-026/04-form-menu-dropdown-recent-forms.png` - weak crop (292x46 strip): menu bar "Form Edit View Help" with dropdown closed; proves only the rendered closed-menu state, not dropdown contents.
  - `evidence/EXP-026/05-scope-bar-user.png` - same open-dropdown frame as 03 including the bottom status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
  - `evidence/EXP-026/06-restored-inherited-state-clean.png` - last recorded T3 state: inherited tabs preserved, Form-menu dropdown closed, `static1_USER (Static)` property grid under the Component tab, User scope bar visible; no target artifacts in that frame.
- The required Select Form absence proof was not completed before interruption; intended fresh clean-state screenshot after closing the menu was not verified.

### T4 - bounded read-only live reconciliation (fresh worker session)

- Fresh untargeted snapshot + one corrected read-only inspection: the only live Playwright tab was `about:blank` with an empty accessibility tree; no Designer document, no Designer tab present (note: `evidence/EXP-026/t4-live-state-loss-note.txt`).
- T4 confirmed partial T3 evidence exists at the six paths listed above (untracked dir) and inspected 01, 02, 03, 04, 05, 06 directly; did not replay the failed T3 shell command.
- Live current rendered Designer state could not be established without prohibited relaunch/navigation; blocker reported to coordinator.

### T5 - documentation-only reconciliation (this task)

- No browser interaction of any kind. Updated this record and added `evidence/EXP-026/t4-live-state-loss-note.txt` only.
- Reconciled acceptance state from inspected evidence (below).

## Acceptance criteria status

| AC | Status | Basis |
|----|--------|-------|
| AC-1 preflight guards + Select Form Name-filter absence proof with positive control | **FAILED / BLOCKED** | T2 never completed it; T3 partial evidence lacks any Select Form screenshot; T4 found the live Playwright page `about:blank` (lifecycle-state loss). Completing AC-1 now would require a Designer relaunch/navigation that is prohibited under the current brief. |
| AC-2 target Form creation | **NOT REACHED / PENDING** | No creation dialog, wizard selection, or Process Completed evidence exists; no `FX_ComponentRecoveryLab01` appears in any inspected frame or recent-forms list. |
| AC-3 untouched baseline capture | NOT REACHED / PENDING | depends on AC-2 |
| AC-4 one Button creation + visible presence | NOT REACHED / PENDING | no Button component observed anywhere |
| AC-5 Name `FX_ButtonRecovery01` + Type label recording | NOT REACHED / PENDING | - |
| AC-6 one Save / one close / one recent-forms reopen | NOT REACHED / PENDING | - |
| AC-7 post-reopen Name/Type comparison | NOT REACHED / PENDING | - |
| AC-8 final live count + action audit + confinement | NOT REACHED / PENDING | - |

No EXP-026 target mutation was verified at any point in T2-T5. Repository confinement holds: only `evidence/EXP-026/` (partial T3 PNGs + this note) and this record exist for EXP-026; no recipe or non-EXP-026 file was created or modified by these tasks.

## Explicit non-claims

- The target is **not** claimed globally absent: only UI-level absence in inspected Designer frames and the visible recent-forms list (T3) is supported; the Select Form Name-filter proof required by AC-1 never executed.
- Current live Designer state is **not** inferred from the historical PNGs; those prove only the last recorded T3 UI state (up to 2026-10-06 ~17:24 local). Whether the Designer client was closed, navigated away, or lost between T3 and T4 is unresolved.
- No claim that any lifecycle action (create/save/close/reopen) occurred; none was observed.

## Blocker wording (final)

**EXP-026 is BLOCKED at AC-1 due to lifecycle-state loss:** the partial T3 preflight never produced the required Select Form case-insensitive Name-filter absence proof with a positive control, and by T4 the only live Playwright tab was `about:blank` with no Designer document or tab. Under the current brief, re-establishing the Designer would require a prohibited relaunch/navigation, so AC-1 cannot be completed and AC-2..AC-8 were not reached. No EXP-026 target mutation (Form creation, Button creation, Name assignment, Save, close, reopen) was verified. Any resumption requires explicit coordinator authorization of a session-establishment/relaunch path and repeated live/scope/absence guards before any target mutation.

## Knowledge state per finding

- Inherited Designer tabs (`FX_StaticNoColonLab01`, `FX_StaticCaptionLab04`), User scope bar, and `static1_USER (Static)` grid as of last recorded T3 frame: **observed** (inspected historical evidence).
- Target names absent from inspected UI frames/recent list (T3 timeframe): **observed** (UI-level only; not global absence).
- Live Playwright page = `about:blank` at T4: **observed**.
- Current Designer continuity after T3 interruption: **unresolved**.
- Button component recovery across close/reopen (objective finding): **not reached** - no lifecycle actions performed.

## Open questions

- Whether the Web Designer client still exists server-side/browser-side after the blank-page drift (unresolved; not testable under this brief).
- If coordinator authorizes a supported session-establishment sequence, repeat AC-1 guards (live workflow usable, User scope, Select Form Name-filter absence + positive control) before any mutation.
