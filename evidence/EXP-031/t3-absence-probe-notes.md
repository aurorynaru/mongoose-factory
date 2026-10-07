# EXP-031 T3 — absence-probe sequence notes (AC-3: retention PASS / applied-filter UNRESOLVED)

Run: R-20261007-200942-NcTj, cycle 4, task T3. Date: 2026-10-07.
Zero Mongoose mutations besides permitted filter input + dialog Cancel/Open. Designer tab untouched; no Form opened/closed/saved/created; OK/Enter never pressed; no row activated; probe string NEVER created anywhere.

## §A Start-state guard (no lifecycle change since T2)

First targeted snapshot on the T2 dialog ref errored as not found (cross-task conversation = stale refs, no Mongoose action taken). Per browser recovery rule: ONE fresh untargeted settled snapshot — current refs verified: same two tabs/URLs; Web Client clean toolbar (Open enabled, Save/others disabled); Lab03 panel selected; Select Form dialog OPEN with textbox exact `FX_ComponentRecoveryLab02`, combobox `Name`, Case Sensitive unchecked, Starts With unchecked, grid exactly one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02` — exactly the T2 post-reopen retained state. Guard PASS.

## §B Sequence (exact counts)

1. ONE filter-setting operation (#2 cumulative): typed exactly `FX_SelectFormFilterProbe01` into the active textbox (`#textfield-1143-inputEl`). No Enter/OK.
2. Settled pre-Cancel evidence captured: accessibility facts (`t3-precancel-dialog-facts.txt`: textbox exact probe string, combobox `Name`, both checkboxes unchecked; grid still one row `FX_ComponentRecoveryLab02` — known non-re-render on fill alone) + inspected screenshot `t3-01-precancel-probe-filter.png`.
3. ONE ordinary Cancel (#2 cumulative): dialog dismissed (`find "Select Form"` -> none), non-activating.
4. ONE supported reopen (#2 cumulative): click on Web Client toolbar **Open** (`f3e23`); `find "Select Form"` confirmed exactly one reopened dialog.
5. Corrected visible inspection (authorized allowance, consumed once this task; no further recovery permitted): full subtree snapshot of the reopened dialog BEFORE any further input: textbox active with EXACT retained probe text `FX_SelectFormFilterProbe01`; combobox `Name`; checkbox "Case Sensitive" unchecked; checkbox "Starts With" unchecked; grid = header row Caption|Name + exactly ONE rendered data row: `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02`. OK/Cancel/Help present not pressed.
6. Rendered screenshot of that settled state captured and inspected: `t3-02-reopened-probe-retained-stale-grid.png` — shows the dialog with Filter textbox rendering `…SelectFormFilterProbe01` (truncated at field's left edge; exact string from accessibility subtree), Filter By dropdown "Name", Case Sensitive/Starts With boxes visibly empty, and the grid displaying exactly one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02` under the header.

Counts this task: filter-setting operations = 1 (cumulative 2); tested Cancels = 1 (cumulative 2); tested reopens = 1 (cumulative 2); initial Open = 0 cumulative; OK/Enter = 0; recovery cycles beyond allowance = none (the stale-ref snapshot error was the authorized fresh-snapshot recovery; no extra Cancel/Open/filter input after reopen). No final dismissal Cancel performed (dialog left in post-reopen state per instruction).

## §C AC-3 result: retention leg PASS; applied-filter leg UNRESOLVED — STOP, do not extend

Retention leg: exact probe text AND settings retained across ordinary Cancel + reopen (`FX_SelectFormFilterProbe01` / Name / unchecked / unchecked), inspected BEFORE any further input.
Applied/zero-match leg: the settled reopened grid does NOT show a zero-row result; it shows one rendered row `FX_ComponentRecoveryLab02`, which is NOT a case-insensitive match for the probe filter text (it equals the PREVIOUS filter's positive-control row). The visible result is therefore STALE/AMBIGUOUS with respect to whether the reopened dialog applied the retained probe filter: either it re-applied and matched a real record named `FX_SelectFormFilterProbe01`-insensitively rendering... no — the rendered Name cell is exactly `FX_ComponentRecoveryLab02`, which cannot be an applied-filter output for the probe text; hence the interpretation reduces to "grid content not refreshed on reopen in this build" (consistent with EXP-030 T2's accepted observation that refresh does not occur, and EXP-028 T1's header-only zero case which used a different path).

Per the task's stop rule (ambiguity-recovery allowance consumed in T2; no extra filter input, Cancel/Open, or recovery cycle permitted), AC-3 is recorded **UNRESOLVED — not PASS**. No repair/refill performed; dialog left exactly as found post-reopen.

## §D Mechanic-check against accepted evidence (documentation check, not an action)

Accepted records show zero-row outcomes settled only where the filter TEXT was in place AT OPEN (EXP-027-R2 T2: no dialog at start, Open -> textbox ALREADY `FX_ComponentRecoveryLab02` -> one row; target `FX_ComponentRecoveryLab03` already equal-at-open -> zero rows decisive). No accepted evidence records a supported mechanic that RE-RENDERS rows when text changes between opens. Therefore the observed stale grid here is consistent with no supported refresh mechanic existing — it is NOT proof of applied-filter failure and not proof of applied-filter success; it is an unresolved rendering-state observation.

## §E Network audit (corroboration only)

`t3-network-audit.txt`: filtered non-static list identical to T1/T2's (#155–#256; network panel reset at the session navigation boundary again); ZERO SaveChanges visible; no post-T2 request detail naturally available. Corroboration of clean state only.

## §F End state

Tab 0: Select Form dialog OPEN in its post-reopen state — textbox exact `FX_SelectFormFilterProbe01`, Filter By=Name, Case Sensitive unchecked, Starts With unchecked, visible grid one row `FX_ComponentRecoveryLab02 / FX_ComponentRecoveryLab02`; Lab03 runtime panel open; toolbar clean (Save disabled). Tab 1: Designer at `&MGForm=FX_ComponentRecoveryLab03` untouched. No prompts/dirty state anywhere.
