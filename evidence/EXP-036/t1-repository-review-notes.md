# EXP-036 — T1 Repository-Only Review Notes

Run: R-20261009-231134-1eF3 · Experiment: EXP-036 · Cycle 0 · Task T1
Worker session: `4c394def-9633-44dd-970d-aec5624cf0f1` · task_message_id: `69d8c5fb-9e7b-4a39-92bc-855214011a3f`
Browser tool calls in T1: **0**. Mongoose interaction: none. `tools/` not read.

## A. Worker identity freshness

The worker UUID was compared by reading against every worker identifier recorded in the records read below:
EXP-035 `d2542b8f-…`, EXP-033-R3 `60cc08ec-…`, EXP-033-R4 `66e4d74e-…`, EXP-035-R2 `4adf1fa1-…` and `69ed601b-…`.
No match. This is a comparison against those records only, not a repository-wide search.

## B. Sources read (repository only)

| Source | Recorded status | Contribution to EXP-036 |
|---|---|---|
| `AGENTS.md` | governing rules | Learning mode; FX_ prefix; verify scope before mutation; close/reopen then verify; screenshots at milestones; recovery rule (one fresh untargeted snapshot, no navigation as recovery). |
| `experiments/EXP-002-R2-create-basic-form-replay.md` | verified creation (2 runs) | Form creation via Designer New → Form Wizard Selection → Classic / BuildFromScratch → wizard page 1 (Name) → Next → page 2 (Save Template unchecked) → Finish → "Process Completed Successfully" → OK. Finish persists; Save disabled after Finish; no template artifact (count delta +1). |
| `experiments/EXP-003-R2-component-fundamentals-replay.md` | verified component placement + configuration (2 runs) | Toolbox row click arms, one canvas click places. Button generated name `button1_USER`, itemId `bt2`, typeCode 8, default 114×34. Name and Caption committed via property grid double-click → type → Enter (`updcompprop`). Button Caption `Test` rendered as face text. Reopen via Designer **Form** menu lists the form. |
| `experiments/EXP-019-R2-clean-replay-fresh-dialog-classic-wizard-selection.md` | replay_verified (coupled sequence) | Fresh Form Wizard Selection dialog; Classic and BuildFromScratch chosen from rendered dropdown options by native click (nothing typed); one OK; first wizard page with Name empty. |
| `experiments/EXP-027-button-component-recovery-in-a-self-contained-desi.md` | observed (single run; closest precedent) | Full precedent for this exact lifecycle: create → Toolbox Button + one canvas click → Name edit → one Save (`SaveChanges` 200) → one Form-tab close → one reopen via Designer **Form** menu recent-forms entry `#menuitem-1073-itemEl`. Recovered Name and Type `PushButton` matched pre-close. Caveats listed in §D below. |
| `experiments/EXP-033-R4-clean-replay-select-form-native-keyboard-filter-re.md` | replay_verified (rendered-UI only, its environment) | Select Form Name-filter procedure: Filter By → Name via dropdown; Ctrl+A + Backspace via `press_key`; one printable character per `press_key`; settle ~3 s; exact-row count read from the accessibility snapshot; close with Cancel (not OK). Positive control `FX_ComponentRecoveryLab02` → exactly one row. Probe string → zero rows. Lowercase/uppercase handled per character (uppercase `K` and `P` worked). |
| `experiments/EXP-035-R2-clean-replay-select-form-positive-state-retention.md` | replay_verified (rendered-UI retention, one Cancel/reopen) | Same 25-key native sequence for the positive control; one Cancel and one toolbar Open reopen; retained textbox text, Filter By Name, checkboxes and single row. Reopen text was visibly highlighted without worker action. Do not type after reopen. |
| `recipes/forms/create-basic-form.md` | verified | Steps above. Pitfalls: Select Form OK activates a row (do not use OK); numeric Ext IDs drift; synthetic DOM clicks do not drive Ext window buttons; portal-notification banner can intercept pointer events. |
| `recipes/components/add-component-from-toolbox.md` | verified | Toolbox row → single canvas click. Click the canvas, not the Toolbox, to place. Placement makes the form dirty. |
| `recipes/components/configure-basic-component.md` | verified | Name and Caption via property-grid double-click value cell → inline editor → Enter. Do not verify by the local `compDef` (stale). Caption cell may be a combobox: type the literal, do not pick a string resource. Header `<name> (<Type>)` may lag. |

Existence of every cited evidence path was confirmed by glob (EXP-035-R2, EXP-019-R2, EXP-033-R4, EXP-002-R2, EXP-003-R2, and EXP-027 evidence).

No existing repository record or evidence file uses `SingleButton`, `FX_SingleButtonLab01`, `FX_SingleButton01`, or `Factory Test Button` (grep returned no matches), so no name collision is recorded in the repository. This does not prove absence in Mongoose; that requires the live check.

## C. Reviewed-decisive evidence paths (cited, not re-opened in T1)

- `evidence/EXP-002-R2/09-form-created-in-designer.png`, `08-process-completed.png`, `07-save-template-page.png`
- `evidence/EXP-003-R2/10-titlestatic-name-caption-set.png`, `13-reopened-persisted-components.png`
- `evidence/EXP-019-R2/08-first-wizard-page-after-ok.png`
- `evidence/EXP-027/t5-02-button-placed-name-button1.png`, `t5-03-name-renamed-type-pushbutton.png`, `t6-01-after-save-clean-name-type.png`, `t6-savesavechanges-response.json`, `t7-01-after-close-designer-empty-tabs.png`, `t8-01-reopened-component-tab-empty.png`, `t8-02-reopened-component-name-type.png`, `t9-01-select-form-one-match.png`
- `evidence/EXP-033-R4/t3-01-positive-control-settled-viewport.png`, `t4-01-probe-settled-viewport.png`
- `evidence/EXP-035-R2/t6-04-post-reopen-viewport.png`

Note: these PNGs were cited from the summarizing records. T1 did not open them, and T1 makes no claim about their pixel content. Visual inspection is required before they are cited as evidence in EXP-036.

## D. Known limitations carried into EXP-036

1. **Type label mismatch.** The brief's acceptance asks for `Type=Button`. The property grid displays `PushButton` for a Toolbox Button (EXP-003-R2 deviation 2; EXP-027 T5 and T8). The model `ctrl` is `button`, but reading it requires internal model access, which is prohibited. Proposed reading: Toolbox Button → grid Type `PushButton`, recorded exactly. Coordinator to confirm.
2. **Stale component selector.** After a Name commit, the panel component-selector combobox kept showing `button1_USER (Button)` (EXP-027 T5). After reopen it refreshed to the new name (EXP-027 T8). The property-grid Name row is treated as authoritative; the selector is not used as proof.
3. **Reopen selection.** After reopen the Button rendered but was not selected (EXP-027 T8). A single canvas click selects it without changing a property (EXP-027 T8: Save stayed disabled).
4. **Existence check method.** EXP-027 T2 used an internal store query (`store.findRecord`). That is not permitted for this experiment. The planned check is the visible Select Form Name filter only (EXP-033-R4 and EXP-035-R2 method), with a positive control.
5. **Save Template click.** EXP-027 T4: first click on the checkbox input was intercepted by the Ext display span; a corrected attempt on the visible display box succeeded. This is a recovery event and draws on the shared allowance (one fresh snapshot + one corrected inspection for the whole experiment).
6. **Canvas placement by coordinates.** The canvas exposes no accessibility ref (EXP-027 T5 used viewport coordinates). No semantic alternative was found in the repository. Coordinates are the last resort under AGENTS.md; this is recorded as an exception.
7. **Filter live-refresh.** EXP-027 T2 saw no live filtering after typing; EXP-033-R4 and EXP-035-R2 saw the grid settle after key presses. Use a settle wait and a fresh snapshot before reading counts.
8. **Environment stop conditions.** EXP-027 T2 needed portal sign-in and a configuration-selection click. Both are forbidden here. If either appears, stop and report. A Scheduled Maintenance alert appeared in EXP-027 T2; it is not a blocker but must not be dismissed as a mutation-free shortcut.
9. **Scope of prior evidence.** Every verified procedure is a single environment (Mongoose 2026.09.08 DEM, User scope, one signed-in user). EXP-027 is the only run of the full Button lifecycle, and it is observed (single run). Nothing here supports durability, cache eviction, or serialization claims.

## E. Notes on the Mongoose-side name collision check

- The brief requires a live `FX_SingleButtonLab01` absence check before creation. The repository cannot establish live absence. Any ambiguity (duplicate row, case-variant row, or no positive control) stops creation.
- Positive control options: `FX_ComponentRecoveryLab02` (created in EXP-027 and used as positive control in EXP-033-R4 and EXP-035-R2; must be re-confirmed live). `UserPreferences` was a positive control in EXP-027 T2. Either may be used; both are read-only.

## F. Files written in T1

- `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md` (created)
- `evidence/EXP-036/t1-repository-review-notes.md` (this file; created)

No other path was written. No browser tool was called.
