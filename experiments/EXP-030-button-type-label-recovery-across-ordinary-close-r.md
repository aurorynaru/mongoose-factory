# EXP-030 — Additional Confidence Replay: Button Name/Type Recovery Across Ordinary Close/Reopen

Status: **T1 complete — read-only preflight + preservation audit done. No Mongoose mutation performed in T1. Lifecycle replay pending (next cycles).**
Date: 2026-10-07
Run: R-20261007-195234-KQJh (cycle 1, task T1)
Mode: LEARNING MODE — additional confirming replay of the canonical EXP-027 procedure, already independently **replay_verified (scoped)** by accepted EXP-027-R2. This experiment tests no new Mongoose capability; success = an accepted additional confirming replay, not a new promotion.
Editing scope: User. Target: `FX_ButtonTypeRecoveryLab01` (Form), `FX_ButtonTypeRecovery01` (Button component). Evidence directory: `evidence/EXP-030/`.
Procedure inputs re-read before mutation: EXP-027, EXP-027-R2, EXP-019-R2, EXP-002-R2, EXP-003-R2, and verified recipes `create-basic-form`, `add-component-from-toolbox`, `configure-basic-component`.

## Objective

On one new User-scoped classic BuildFromScratch Form `FX_ButtonTypeRecoveryLab01`: capture the untouched baseline, place exactly one native Toolbox Button, assign only Name=`FX_ButtonTypeRecovery01`, record the exact visible property-grid Type label before Save, perform exactly one ordinary Designer Save (clean return, Name/Type unchanged), close the target exactly once via its Form-tab close control, reopen exactly once through the same Designer's Form-menu recent-forms entry, then verify the same scoped Form recovers Name + exact Type label. Loaded/reopened identity must be Form/version-specific (not solely the status bar). Final read-only Select Form check: exactly one visible case-insensitive matching row in the inspected result (no database-uniqueness inference).

## Acceptance criteria (map)

- AC-1: fresh-worker read-only preflight — distinct session identity vs EXP-027 `ses_eea6d6124ffes94Z5Ncy8SwXYM` and EXP-027-R2 `ses_eea48b294ffewiRJGXFlT7uTdC`; inherited state preserved; usable live workflow + User editing scope proven; settled rendered Select Form positive-control row (Case Sensitive visibly unchecked) for an exact known-existing Name per EXP-027/EXP-027-R2 evidence; zero visible case-insensitive Name matches for `FX_ButtonTypeRecoveryLab01`.
- AC-2: exactly one target Form created via the verified fresh-dialog Classic/BuildFromScratch procedure, Save Template visibly unchecked; loaded Name+ScopeType+ScopeName proven Form/version-specific.
- AC-3: untouched clean post-creation baseline before placement (rendered state recorded; no complete-cardinality claim).
- AC-4: exactly one native Toolbox Button; only Name assigned to `FX_ButtonTypeRecovery01`; authoritative Name + exact visible Type label recorded before Save.
- AC-5: exactly one ordinary Designer Save; clean return; Name/Type unchanged.
- AC-6: exactly one Form-tab close (no unexpected prompt, same Designer retained); exactly one Form-menu recent-forms reopen (not URL/Select Form).
- AC-7: post-reopen Form/version-specific Name=`FX_ButtonTypeRecoveryLab01`, ScopeType=User, ScopeName matching pre-close version; clean state; recovered component Name + Type exactly equal to the AC-4 pre-close values.
- AC-8: final read-only Select Form result shows exactly one visible case-insensitive match (no database-uniqueness inference); action counts 1/1/1/1/1/1 + zero unloads reconciled; repository confined to this record + `evidence/EXP-030/`; success recorded as an accepted additional confirming replay of the existing replay_verified finding (no new capability claim, no separate observed finding, no new Type-label promotion).

## Worker task log

### T2 — bounded read-only AC-1 completion check: Select Form refresh attempt (this task)

Read-only only; no Mongoose artifact created/saved/closed/reopened/altered. Details in `evidence/EXP-030/t2-selectform-refresh-attempt-notes.md`.

**Documentation lookup first:** the accepted sources record NO supported refresh mechanic that re-renders rows from an already-open dialog (canonical EXP-027 used the recipe store query, not a settled refreshed view; EXP-027-R2's zero-row relied on the filter-already-equal-at-open coincidence; EXP-028/EXP-029 recorded "fill alone does not re-render rows"; the only settled zero-row path in EXP-028 T1 was an Enter-commit which additionally activates/opens a form — forbidden here as reopen).

**Bounded attempt:** fresh targeted snapshot (dialog open: textbox exact `FX_ButtonTypeRecoveryLab01`, Filter By=Name, Case Sensitive visibly unchecked, grid = stale pre-fill row `FX_ComponentRecoveryLab02`); one EXP-027-R2 fill of the IDENTICAL exact string (no Enter/OK — no effect on an already-matching textbox); one fresh untargeted settled snapshot: state unchanged, grid still stale single row (screenshot t2-01 inspected; filter field truncated at left edge in the render). Network audit: ZERO new GetAllForms after the fill — the documented action issues no refresh query from an open dialog.

**Outcome: AC-1 completion check BLOCKED per the task's stop rule** — the rendered result remains stale/ambiguous (proven non-refreshing + zero issued queries), so a settled refreshed zero-match for `FX_ButtonTypeRecoveryLab01` is not provable within this task's constraints. No Cancel/reopen substitute performed; inherited Web Client (dialog open, Lab03 panel), Designer tab, and all Forms preserved exactly as inherited. AC-1 remains PARTIAL: positive control PROVEN (t1-03 settled single row for `FX_ComponentRecoveryLab02`); target absence proven only as "zero visible case-insensitive matches in the inspected result" over stale rendered content (t1-04 + t2-01), with the refreshed-view limitation explicitly recorded.

### T1 — read-only preflight and preservation audit (this task)

No Mongoose mutation, authentication, Designer launch, Form open/create/save/close/reopen, or component action. Details in `evidence/EXP-030/t1-preflight-notes.md`.

**Procedure review:** recorded in notes §A (EXP-027 lifecycle + nuances; EXP-027-R2 accepted replay_verified finding and its Select Form mechanics; EXP-019-R2 selection prefix; create-basic-form incl. Save Template unchecked; Button placement incl. `mouse.click` authorization at inspected canvas; Name-only inline-editor step with stale-compDef caveat; Type-label distinction Button/PushButton/button).

**Worker/session identity:** harness event `worker.session_created` (ts 2026-10-07T11:53:20.279Z, run R-20261007-195234-KQJh) records session `ses_ee9c9ff6bffebD2xDO1DnlAMke` — distinct from EXP-027's `ses_eea6d6124ffes94Z5Ncy8SwXYM` and EXP-027-R2's `ses_eea48b294ffewiRJGXFlT7uTdC`. Freshness via new OpenCode conversation only; browser not restarted; retained usable Designer not replaced.

**Browser context (two tabs):** tab 0 authenticated live Web Client (runtime panel `FX_ComponentRecoveryLab03` open, toolbar clean); tab 1 one usable Web Designer at `&MGForm=FX_ComponentRecoveryLab03` with Lab02 + Lab03 form tabs selected-Lab03, Button grid Name `FX_ButtonRecovery03` / Type `PushButton` / Caption empty, selector refreshed `FX_ButtonRecovery03 (Button)`, Toolbox incl. Button row, Save/Regenerate/Undo/Redo all disabled (clean), status bar `[ ScopeType: User / ScopeName: <signed-in user> ]`. No dialog/prompt/dirty state anywhere. Both inherited Forms + Buttons preserved untouched.

**Usable-workflow determination:** retained workflow usable — no session establishment and no Designer launch performed or needed.

**Select Form AC-1 evidence:** one Open click -> Select Form dialog (Caption/Name columns; inherited filter textbox exact `FX_ComponentRecoveryLab02`, Filter By=Name, **Case Sensitive visibly unchecked**, Starts With unchecked) with exactly ONE settled rendered row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02` — positive control reproduced from accepted EXP-027-R2 evidence (t1-03). Target query: one ordinary fill of exactly `FX_ButtonTypeRecoveryLab01` (no Enter/OK); corrected fresh untargeted snapshot settled: textbox exact, settings unchanged, grid still the stale pre-fill row — **zero visible case-insensitive Name matches for the target in this inspected result** (t1-04; observed mechanic: fill alone does not re-render filtered rows in this build). Network audit: new requests only `GetAllForms` (#221/#228/#256); ZERO `SaveChanges` this task; prior-session #213–#215 match EXP-028's recorded inherited Lab03 activation bookkeeping. Repository scan: target in no experiment/recipe record (signal only).

**AC-1 status:** guards substantially proven with one recorded limitation — the inspected zero-match is over stale rendered grid content (no settled refreshed zero-row view for the changed filter text within the bounded inspection; EXP-027-R2's refreshed-view mechanic was not exercised this task). Next cycle must re-confirm absence via a settled/refreshed Select Form view (per EXP-027-R2's working mechanic) before creation.

## Acceptance criteria status

| AC | Status | Basis |
|----|--------|-------|
| AC-1 preflight + positive control + target-absence | **PARTIAL — refresh attempt blocked (T2); limitation recorded** | T1: identity, preservation, usable workflow, visible User scope, reproduced positive-control single rendered row (Case Sensitive unchecked), zero visible case-insensitive target matches in the inspected result. T2: documented refresh-from-open mechanic does not exist in accepted evidence; identical-string re-fill produced no refresh and issued no query; settled state remains stale — absence remains "zero visible over stale content", NOT a settled refreshed zero-row view. |
| AC-2…AC-8 | pending | lifecycle not started; no mutation performed through T2. |

## Final finding classification

Pending — T1 only. Expected outcome if all AC pass in later cycles: **accepted additional confirming replay** of the existing EXP-027/EXP-027-R2 replay_verified finding (no new capability claim, no separate observed finding, no new Type-label promotion).

## Explicit non-claims

- No target mutation (creation, Button, Name assignment, Save, close, reopen) was performed or claimed in T1.
- Target absence = zero visible case-insensitive matches in the inspected Select Form result; not Forms-database durability or inventory completeness.
- Statements about other Designer clients/sessions apply only to the enumerated controlled Playwright context at this moment.

## Knowledge state per finding

- Prior procedures (EXP-019-R2 selection prefix replay_verified; create-basic-form / add-component-from-toolbox / configure-basic-component verified; EXP-027/EXP-027-R2 lifecycle replay_verified): **inherited verified/replay_verified** — re-read in T1, not re-executed.
- Retained two-tab context: live authenticated Web Client + one usable User-scope Designer with clean inherited Lab02/Lab03 state: **observed** (T1).
- Worker session `ses_ee9c9ff6bffebD2xDO1DnlAMke` distinct from EXP-027/EXP-027-R2 sessions: **observed** (harness event record).
- Select Form positive control renders exactly one row for exact known-existing `FX_ComponentRecoveryLab02` with Filter By=Name, Case Sensitive visibly unchecked (inherited-at-open state): **observed** (T1; reproduces accepted EXP-027-R2 mechanic).
- Target filter settles with zero visible case-insensitive matches over stale rendered content (fill does not re-render rows): **observed** (T1; absence limited to the inspected result).
- T2: identical-exact-string re-fill from an already-open dialog produces no refresh and issues zero queries (no supported refresh-from-open mechanic in accepted evidence): **observed** (T2) — AC-1 completion attempt blocked per stop rule; no status change to inherited findings.

## Open questions / blockers

- T2 BLOCKER (AC-1 completion check): no supported refresh mechanic exists in the accepted evidence to settle a refreshed filtered view from the currently open dialog; bounded attempt left grid stale and issued zero queries. Prohibited inside-task substitutes (Cancel-dismiss + fresh two-step reopen, Enter-commit activation) NOT performed. Next cycle may take the documented two-step (ordinary Cancel, then fresh Open with filter settling at open — EXP-027/EXP-027-R2 mechanic) under its own instruction before any creation.
- Next permitted action: next cycle's read-only Select Form two-step refresh per accepted EXP-027-R2 mechanic; still no AC-2 creation until a settled refreshed zero-match is obtained or the coordinator accepts the recorded stale-inspection limitation.

## Evidence files

See `evidence/EXP-030/`: `t1-preflight-notes.md` (full detail); `t2-selectform-refresh-attempt-notes.md` (T2 bounded refresh attempt, stale outcome, network evidence); `t1-01-designer-preserved-user-scope.png` (visible Designer tab: Lab02/Lab03 tabs, Button grid Name/Type PushButton, greyed clean toolbar, User-scope bar — proves usable retained Designer + visible User scope + preserved inherited state; proves nothing about the target); `t1-02-webclient-live-clean.png` (live authenticated Web Client with Lab03 panel, clean disabled toolbar — proves usable workflow; does not show the dialog); `t1-03-select-form-positive-control.png` (Select Form dialog: filter textbox exact `FX_ComponentRecoveryLab02`, Filter By=Name, Case Sensitive visibly unchecked, exactly one settled rendered row — supports AC-1 positive control; OK/Cancel not pressed); `t1-04-selectform-target-fill-stale-grid.png` and `t2-01-selectform-refill-stale-grid.png` (same dialog: filter renders `…uttonTypeRecoveryLab01` truncated at the field's left edge — exact full string proven by accessibility snapshots; Filter By=Name, Case Sensitive visibly unchecked; grid = stale pre-fill row `FX_ComponentRecoveryLab02` only, i.e. no visible row matches the target — supports zero visible case-insensitive target matches in the inspected result ONLY over stale content; does NOT prove a refreshed filtered view or database durability).
(this record) — experiment status/log.
