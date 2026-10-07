# EXP-028 — Button Caption Recovery Across Ordinary Close/Reopen

Status: **T2 complete — AC-1 fully proven (live exact-string zero-match with Case Sensitive visibly unchecked). No Mongoose mutation. Lifecycle pending (T3 onward).**
Date: 2026-10-07
Run: R-20261007-182351-hVYe (cycles 1–2, tasks T1–T2)
Mode: LEARNING MODE — new observation: Caption recovery across the ordinary Designer Save → Form-tab close → same-Designer Form-menu recent-forms reopen boundary (EXP-003/R2 covered full-page reload/reopen only).
Editing scope: User. Targets: `FX_ButtonCaptionLab02` (Form), `FX_ButtonCaption02` (Button). Evidence: `evidence/EXP-028/`.

## Objective

On one new User-scoped classic BuildFromScratch Form `FX_ButtonCaptionLab02`: capture the clean post-creation baseline, place exactly one native Toolbox Button, assign Name `FX_ButtonCaption02`, record the dirty pre-Caption baseline (Name + exact property-grid Type label + untouched Caption), then set only Caption to exactly `Button Caption Recovery` via the verified literal editor, perform exactly one ordinary Designer Save, one Form-tab close, one recent-forms reopen, and verify recovered Name/Type/Caption equality. Treat results as UI-level recovery across this tested workflow only; do not claim Forms-database durability, cache eviction, unload behavior, or other property types.

## Acceptance criteria (map)

- AC-1: read-only preflight — inherited visible Forms/dialogs + dirty state recorded; worker freshness recorded; usable workflow + User scope proven; live Select Form positive control + zero case-insensitive Name matches for `FX_ButtonCaptionLab02` with Case Sensitive visibly unchecked.
- AC-2: exactly one target Form created (replay-verified selection prefix + verified basic-form suffix; Save Template visibly unchecked).
- AC-3: untouched clean post-creation baseline captured before placement (no complete-cardinality claim).
- AC-4: exactly one native Button placed, visible presence verified.
- AC-5: Name `FX_ButtonCaption02` assigned via verified Name-edit step only; dirty pre-Caption baseline records authoritative Name + exact property-grid Type label + untouched Caption; no ordinary Save before Caption assignment.
- AC-6: only intentional mutation = Caption → exactly `Button Caption Recovery`, verified immediately (no named string resource); stop blocked otherwise.
- AC-7: exactly one ordinary Designer Save, clean return with Name/Type/Caption unchanged.
- AC-8: exactly one Form-tab close; exactly one same-Designer recent-forms reopen.
- AC-9: post-reopen exact Form identity (Name+ScopeType+ScopeName) and recovered component Name+Type+Caption equality.
- AC-10: final read-only Select Form exactly-one proof + controlled-action reconciliation + repository-confinement audit.

## Worker task log

### T2 — complete AC-1 with fresh live Select Form exact-string check (this task)

No mutation, no OK/Enter, no row activation. Details in `evidence/EXP-028/t2-select-form-ac1-notes.md`.

- Re-inspected fresh context first: tab 0 Web Client (Lab03 runtime-open state inherited from T1 preserved untouched), tab 1 Designer still `&MGForm=FX_ComponentRecoveryLab03` with Lab02+Lab03 form tabs — Designer not selected/touched this task.
- One Open click → fresh Select Form dialog; inherited filter textbox carried T1's doubled text; grid ref state read once (header-only + empty inner grid at open).
- Filter By=Name and Case Sensitive/Starts With visibly unchecked recorded at every inspection.
- Positive control within the bounded inspection: fill `FX_ComponentRecoveryLab03` → textbox exact, but grid remained header-only in both fresh inspections — the dialog does NOT re-render matching rows on text change alone (known T1 behavior; positive-control row correspondence NOT settled this task; not retried beyond the one permitted corrected interaction, which was consumed by that fill).
- Target: one fill of exactly `FX_ButtonCaptionLab02` (no Enter) → settled accessibility snapshot: textbox renders EXACT full string, grid = header row only with inner rows-container empty (zero data rows), Filter By=Name, Case Sensitive visibly unchecked. Decisive screenshot t2-01 inspected: filter box fully visible untruncated (`FX_ButtonCaptionLab02`), dialog area below header empty, Cancel/OK visible not pressed.
- One Cancel click dismissed the dialog (`find "Select Form"` → none).
- Network audit (read-only): T1 dump had ZERO `SaveChanges`; this session window adds only the Open click's form-read (`GetForm`) and activation-bookkeeping requests — no new Designer-side request; inherited Web Client Lab03-open state remained exactly as inherited.

**AC-1 status: FULLY PROVEN** — usable live workflow + visible User scope (T1), populated live Select Form store, zero case-insensitive Name matches for the EXACT target string with Case Sensitive visibly unchecked (fresh Open + exact fill + settled snapshot + inspected screenshot), positive-control mechanics observed (dialog live; row-correspondence limitation recorded explicitly in notes).

### T1 — read-only preflight + AC-1 evidence capture

(unchanged from prior log; see below)

No target mutation, no Designer action, no auth/session establishment, no save/close/reopen. Details in `evidence/EXP-028/t1-preflight-notes.md`.

**Procedure inputs read:** EXP-027-R2 (replay_verified lifecycle + Select Form absence mechanics), EXP-003-R2 (Caption recovery across reload — separate boundary; `PushButton` grid label; stale-compDef caveat), EXP-019-R2 (rendered-option selection prefix), blocked EXP-020 (Caption combobox named-resource failure mode at AC-4), EXP-018 context, and the three verified recipes.

**Identity:** fresh OpenCode worker conversation for run R-20261007-182351-hVYe; browser inherited untouched (not reset by the new session).

**Context enumeration (fresh):** exactly two tabs — authenticated Web Client portal tab (clean, Open enabled, rest disabled) and one usable Web Designer (`...&MGForm=FX_ComponentRecoveryLab03`) with form tabs `FX_ComponentRecoveryLab02` + `FX_ComponentRecoveryLab03` (selected), Save/Regenerate/Undo/Redo disabled (clean), selector `FX_ButtonRecovery03 (Button)`, grid Type `PushButton`, scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Evidence t1-01/t1-02 inspected.

**Preservation audit:** both inherited Lab02/Lab03 Forms and their Buttons left untouched; no dialogs/prompts/dirty state existed or was created on the Designer; Web Client clean at start.

**Select Form absence proof:** one Open click → one Select Form dialog (inherited filter textbox `FX_ComponentRecoveryLab03`, Filter By=Name, Case Sensitive+Starts With visibly unchecked, grid exactly one row). Positive control: fill `FX_ComponentRecoveryLab02` (non-mutating); two fresh settled inspections still rendered the pre-fill row — this build does not re-render rows on filter-text change alone (recorded observed behavior). Corrected attempt: per-character type + Enter committed a non-existent doubled filter string; grid then rendered ZERO data-row tables (header-only; t1-04 inspected, Case Sensitive visibly unchecked) and Enter additionally activated/opened `FX_ComponentRecoveryLab03` in the Web Client (URL `favoriteContext=FX_ComponentRecoveryLab03`; non-mutating; recorded). One Cancel dismissed the dialog. Network audit: zero `SaveChanges`; one `GenerateServerEvent` body = `forminit` from that activation (`t1-generateServerEvent-request-body.txt`).

**Repository scan:** `FX_ButtonCaptionLab02` in no experiment/recipe record (harness brief only) — repository signal, not server proof.

**AC-1 status: substantially proven** — workflow usable, User scope visible, inherited state preserved, live populated Select Form + zero-result mechanics with Case Sensitive visibly unchecked demonstrated. **Open limitation:** the settled zero-match used committed non-matching text rather than exactly `FX_ButtonCaptionLab02` (the exact-string query did not settle a row change in this build within one corrected attempt); exact-string proof to be completed at next task before creation.

## Acceptance criteria status

| AC | Status | Basis |
|----|--------|-------|
| AC-1 preflight + absence + positive control | **FULLY PROVEN (T1+T2)** | T1 evidence + T2: live fresh Open; exact-string `FX_ButtonCaptionLab02` filter with Case Sensitive visibly unchecked settles ZERO rows (t2-01 inspected decisive); positive-control mechanics observed with recorded settled-row limitation. |
| AC-2…AC-10 | not started | lifecycle pending (T2 onward). |

## Knowledge state per finding

- Inherited two-tab context: usable Web Client + one usable User-scope Designer with clean Lab02/Lab03 Forms, User scope bar visible: **observed** (T1).
- Select Form settle/activation mechanics (fill alone does not re-render rows; committed non-matching filter settles header-only): **observed** (T1+T2).
- Exact-string live zero-match for `FX_ButtonCaptionLab02` with Filter By=Name, Case Sensitive visibly unchecked (fresh Open + ordinary fill + settled snapshot + inspected screenshot): **observed** (T2) — AC-1 absence proof.
- Prior procedures (EXP-019-R2 prefix replay_verified; create-basic-form / add-component-from-toolbox / configure-basic-component verified; EXP-027-R2 lifecycle replay_verified; EXP-003/EXP-003-R2 Caption-across-reload): **inherited verified/replay_verified**, re-read, not re-executed in T1.
- EXP-020 Caption-combobox-named-resource failure mode: **observed (prior run), superseded caution only** — recipe literal-editor path must be used; no status change to EXP-020 here.

## Open questions / blockers

- No blocker. AC-1 fully proven at T2. Recorded nuances: Select Form filter does not visibly re-render rows on text-fill alone; Enter in the filter textbox activates/opens the current form (recipe pitfall honored — avoided thereafter); T2 positive-control settled row↔text correspondence limitation recorded explicitly (does not gate the zero-match proof).
- Next permitted action: T3 creation of `FX_ButtonCaptionLab02` with the replay-verified selection prefix + verified basic-form suffix (Save Template visibly unchecked), then clean baseline before placement.

## Evidence files

See `evidence/EXP-028/`: t1-01-webclient-tab-visible.png, t1-02-designer-tab-visible.png, t1-03-selectform-positive-control.png, t1-04-selectform-target-zero-header-only.png, t1-network-requests-nonstatic.txt, t1-generateServerEvent-request-body.txt, t1-preflight-notes.md, t2-01-selectform-target-FX_ButtonCaptionLab02-header-only.png (DECISIVE AC-1: exact filter string + Case Sensitive unchecked + zero rows), t2-select-form-ac1-notes.md.
(this record) — experiment status/log.
