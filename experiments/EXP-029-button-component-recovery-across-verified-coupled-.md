# EXP-029 — Button Component Recovery Across Verified Coupled Unload

Status: **T1 complete — read-only preflight + preservation audit done. AC-1 PENDING/BLOCKED at T1 (settled rendered positive-control row for the exact known-existing Name filter NOT established within the bounded inspection; target-match count therefore not attempted). No Mongoose mutation in T1. Lifecycle pending.**
Date: 2026-10-07
Run: R-20261007-183958-H9GE (cycle 1, task T1)
Mode: LEARNING MODE — first observation for this coupled-unload Button-recovery setup.
Editing scope: User. Target: `FX_ComponentUnloadLab01` (Form), `FX_ButtonUnload01` (Button component). Evidence directory: `evidence/EXP-029/`.
Procedure inputs re-read in T1: EXP-027, accepted replay EXP-027-R2, EXP-006-R2, EXP-007-R2, EXP-003-R2, EXP-019-R2, blocked EXP-028, and the three verified recipes (`create-basic-form`, `add-component-from-toolbox`, `configure-basic-component`).

## Objective

On one new User-scoped classic BuildFromScratch Form `FX_ComponentUnloadLab01`: create exactly one native Toolbox Button, assign only Name=`FX_ButtonUnload01`, record its exact visible property-grid Type label, perform exactly one ordinary Designer Save, close the target Form exactly once, verify the existing `Unload IDO Metadata With Forms` preference remains enabled WITHOUT changing it (via the Web Client > Form > User Preferences > Behavior route), invoke `Form > Definition > Unload All Global Form Objects` exactly once after close, then reopen the target exactly once through the same Designer's Form-menu recent-forms entry. Verify the same scoped Form recovers `FX_ButtonUnload01` with the identical Type label. Treat the result only as UI-level recovery of this Button definition across the tested coupled-unload workflow; do not claim database durability, backend identity, Caption persistence, IDO-metadata semantics, or behavior of other component properties/types.

## Acceptance criteria (map)

- AC-1: read-only preflight — inherited visible Forms/dialogs + dirty state recorded; fresh-worker session identity; usable authenticated live workflow + User editing scope; Live Select Form positive-control proof (settled rendered row corresponding to the exact known-existing Name filter, Case Sensitive visibly unchecked) PLUS zero case-insensitive Name matches for `FX_ComponentUnloadLab01` before creation. If the positive control cannot be proven within one fresh snapshot plus at most one corrected visible inspection, stop blocked without mutation or retry.
- AC-2: exactly one target Form created (replay-verified Classic/BuildFromScratch selection prefix + verified basic-form procedure; Save Template visibly unchecked).
- AC-3: untouched clean post-creation baseline captured before component placement (rendered absence; no complete-cardinality claim).
- AC-4: exactly one native Toolbox Button placed with visible presence verified (recipe-authorized native Playwright canvas click incl. `mouse.click` at the currently inspected visible canvas box per EXP-027-R2).
- AC-5: component Name `FX_ButtonUnload01` assigned via the verified Name-edit step only; exact Name + exact visible property-grid Type label recorded before Save.
- AC-6: exactly one ordinary Designer Save with clean return (Name/Type unchanged).
- AC-7: exactly one Form-tab close of the target; then read-only preference gate `Unload IDO Metadata With Forms` visibly CHECKED/enabled via Web Client > Form > User Preferences > Behavior, left unchanged, preferences closed without Save.
- AC-8: `Form > Definition > Unload All Global Form Objects` invoked exactly once with target closed; Designer remains active; target still closed after unload.
- AC-9: exactly one reopen through the same Designer's Form-menu recent-forms entry; post-reopen exact identity (Name + ScopeType + ScopeName), clean state, recovered component Name=`FX_ButtonUnload01` and Type exactly equal to the pre-close value.
- AC-10: final read-only Select Form exactly-one target proof, controlled-action reconciliation, preference re-check, repository-confinement audit.

## Worker task log

### T1 — strictly read-only preflight + preservation audit (this task)

No Mongoose mutation, authentication, session establishment, Designer launch/selection, Form open/create/save/close/reopen, component action, or preference change performed. Details in `evidence/EXP-029/t1-preflight-notes.md` (§A procedure review, §B session identity, §C context enumeration, §D preservation audit, §E bounded AC-1 Select Form attempt, §F scope read, §G repository scan, §H action counts).

**Session identity:** harness events for this run record fresh worker session `ses_eea0c7626ffeTQlCpKcve6xjzi` (worker.session_created, 2026-10-07T10:40:44.508Z) — distinct from prior EXP-028/EXP-027-R2 sessions; browser state inherited, not reset.

**Context:** two tabs — authenticated live Web Client portal tab (clean toolbar, Open enabled/Save disabled, DEM badge, `favoriteContext=FX_ComponentRecoveryLab03` with the Web Client workspace form tab `FX_ComponentRecoveryLab03` open as inherited state) and one usable Web Designer at `&MGForm=FX_ComponentRecoveryLab03` (inherited Designer from EXP-027-R2; panel not inspected, dirty/clean status recorded as UNVERIFIED). Portal top-bar "System Administrator" tab left untouched.

**Preservation audit:** inherited `FX_ComponentRecoveryLab03` Web Client open state and the Designer tab both left exactly as found; no dialog/dirty form existed or was created on the Web Client at start; nothing saved/discarded/closed/edited; no second Designer launched. Repository confinement: `git status` shows only five pre-existing modified `tools/learning-harness/**` harness-tooling files (untouched by this task); only the permitted EXP-029 record and `evidence/EXP-029/` were written.

**AC-1 attempt (bounded, read-only):** one Open click → one Select Form dialog (grid header Caption/Name; inherited remembered filter text `FX_ButtonCaptionLab02`; Filter By=Name; Case Sensitive + Starts With visibly UNCHECKED at every inspection). Positive-control fill of exact known-existing Name `FX_ComponentRecoveryLab02` (no OK, no Enter) settled in both the fresh targeted snapshot and one corrected visible screenshot inspection: filter textbox renders the exact string, but the grid shows header row only with an EMPTY inner rows-container — zero data rows; a settled rendered positive-control row for the exact Name filter was NOT established within the bounded window (matching EXP-028's recorded non-re-render-on-fill behavior). Per rule, the `FX_ComponentUnloadLab01` target-filter fill was NOT attempted and no retry/widening was performed. One Cancel click dismissed the dialog; Web Client verified restored to its inherited state (form tab present again, Save disabled, console 0 errors / 10 pre-existing warnings unchanged).

**AC-1 status: PENDING/BLOCKED at T1** — positive-control row correspondence unproven within the allowed bounded inspection; target-match count not attempted. Stop before any target mutation this task; no retry.

## Acceptance criteria status

| AC | Status | Basis |
|----|--------|-------|
| AC-1 preflight + positive control + absence proof | **PARTIAL — PENDING/BLOCKED (T1)** | T1 evidence: fresh-worker session record; usable authenticated Web Client + one usable Designer; inherited-state preservation audit; populated-dialog liveness at open with Case Sensitive visibly unchecked; **settled rendered positive-control row NOT established** within fresh snapshot + one corrected visible inspection → target-zero check not attempted per rule. |
| AC-2…AC-10 | not started | lifecycle pending (no mutation performed). |

## Final finding classification

Pending — no finding yet; T1 read-only preflight only.

## Explicit non-claims

- No target Form/Button creation, Save, close/reopen, unload, preference change, or authentication was performed or claimed in T1.
- The inherited Designer's dirty/clean state is not claimed (panel not inspected); only its URL identity and existence as one usable tab were read.
- Absence of any other session/Designer applies only to the enumerated controlled Playwright context at this moment.
- Repository absence signal for `FX_ComponentUnloadLab01` is not server-state proof; live absence was not completed (positive control unproven).

## Knowledge state per finding

- Prior procedures (EXP-019-R2 selection prefix replay_verified; create-basic-form / add-component-from-toolbox / configure-basic-component verified; EXP-027/EXP-027-R2 Button-recovery lifecycle observed/replay_verified; EXP-006-R2/EXP-007-R2 coupled-unload preference-gate + unload mechanics replay_verified incl. `ClearCache` single-invocation marker; EXP-003-R2 component facts; EXP-028 blocked Select Form settle-mechanics caution): **inherited verified/replay_verified**, re-read in T1, not re-executed here.
- Controlled context = two tabs: live authenticated Web Client (clean toolbar; inherited open Web Client form tab `FX_ComponentRecoveryLab03`) + one usable Designer at `&MGForm=FX_ComponentRecoveryLab03`: **observed** (T1).
- Fresh worker session `ses_eea0c7626ffeTQlCpKcve6xjzi` distinct from prior runs: **observed** (harness event record).
- Select Form dialog opens via one Open click; inherited remembered filter text; Filter By=Name with Case Sensitive/Starts With visibly unchecked; header-only grid after ordinary fill of an exact known-existing Name (`FX_ComponentRecoveryLab02`) in this bounded window — settled positive-control row correspondence UNPROVEN: **observed** (T1) supporting the AC-1 blocker; target-match count for `FX_ComponentUnloadLab01` **not attempted**.
- Cancel dismissal non-activating + inherited Web Client state restored after Cancel: **observed** (T1).
- AC-1 overall: **unresolved/pending** (blocked at the positive-control gate within the bounded inspection; no retry permitted).

## Open questions / blockers

- **AC-1 blocker at T1:** settled rendered positive-control row for the exact known-existing Name filter not established within one fresh snapshot + one corrected visible inspection; target-zero check deferred; next task may re-attempt per its own bounded rules (fresh-dialog exploration was used successfully in EXP-028 T1 and remains the reference mechanic).
- Inherited `FX_ComponentRecoveryLab03` (Web Client open tab + Designer open form) must remain untouched throughout this experiment.
- Unresolved from prior records: selector-header staleness after rename; component not auto-selected post-reopen (needs one selection click); these will be re-observed, not assumed.

## Evidence files

- `evidence/EXP-029/t1-preflight-notes.md` — full T1 detail (procedure review, session identity, enumeration, preservation audit, bounded AC-1 attempt with omissions, scope read, repository scan, action counts).
- `evidence/EXP-029/t1-webclient-tab-snapshot.yml`, `t1-selectform-dialog-initial.yml`, `t1-selectform-positive-control-fill.yml` — targeted accessibility snapshots (dialog controls + header-only grid state; filter text exact strings).
- `evidence/EXP-029/t1-01-selectform-positive-control-rendered.png` — inspected screenshot of the Select Form dialog with positive-control filter text and zero rendered rows (see its description below for what it does and does not prove).
- `evidence/playwright/page-2026-10-07T10-42-34-185Z.yml`, `page-2026-10-07T10-42-57-776Z.yml` — auto-generated full-page snapshots at dialog open and post-Cancel (shared Playwright output dir; gitignored).
- (this record) — experiment status/log.
