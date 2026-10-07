# EXP-027 AC-8 final read-only audit notes (T9, run R-20261007-165419-NP63)

Date: 2026-10-07. No mutation performed in this task.

## Select Form Name-filter audit (Web Client tab 0)
- Opened Select Form once from the live Web Client toolbar (Open button); Cancel used to close (non-activating).
- Read state as inherited/applied (same dialog shape as T2): Filter textbox `FX_ComponentRecoveryLab02` (active), Filter By combobox = **Name**, checkbox "Case Sensitive" rendered WITHOUT `[checked]`, "Starts With" unchecked.
- Accessibility snapshot grid: exactly one row — gridcell Caption `FX_ComponentRecoveryLab02` + gridcell Name `FX_ComponentRecoveryLab02`.
- Evidence t9-01-select-form-one-match.png (inspected): dialog titled "Select Form", single row for the target, Filter By=Name rendered, **Case Sensitive checkbox visibly empty/unchecked**; Filter text field truncated at left edge showing `...ComponentRecoveryLab02` — full exact filter string proven from accessibility snapshot, not from the image alone.
- Exact case-insensitive Name match count: **1**.
- Caveat recorded: this audit proves live-session Select Form state; it does not prove Forms-database durability or complete inventory beyond the populated Select Form data.

## Action-count reconciliation (from record T1–T8)
| Action | Count | Where |
| --- | --- | --- |
| Target Form creation (`FX_ComponentRecoveryLab02`) | 1 | T4 (Finish/Persist Completed, no separate save; wizard p1/p2) |
| Native Toolbox Button creation operations | 1 | T5 (Toolbox Button row click + single canvas click) |
| Component Name assignments (`FX_ButtonRecovery02`) | 1 | T5 (one inline-editor fill+Enter) |
| Ordinary Designer Saves after placement/Name setup | 1 | T6 (one Save click; sole `SaveChanges` POST #115 → 200 Success:true) |
| Target Form-tab closes | 1 | T7 (one click on `closable FX_ComponentRecoveryLab02`) |
| Form-menu recent-forms reopens | 1 | T8 (one click on `menuitem "FX_ComponentRecoveryLab02"`, `#menuitem-1073-itemEl`) |
| Fallback reopen routes (cold MGForm nav / Select Form reopen) | 0 | none used; reopen path was the recent-forms menu entry only |
| Explicit unload actions (Unload All Global Form Objects etc.) | 0 | T7 network audit: zero Unload/ClearCache/RemoveForm requests since load |
| Post-mutation authentication/session-establishment actions | 0 | session established pre-mutation only (T2); no Sign-In action after T4 |
| User Preference changes / Regenerate Form | 0 | none invoked in any task log |
| Component/Form property mutations besides the permitted Name | 0 | Caption never edited; all other grids unchanged across T5–T8 snapshots (Caption cells empty at every inspection) |
| Additional target Forms or Button components created | 0 | single creation/one placement recorded in logs; final Select Form shows exactly one target row |

## Repository-confinement audit
- `git status --porcelain` (verified during T9): experiment-attributable entries are only `?? experiments/EXP-027-button-component-recovery-in-a-self-contained-desi.md` and `?? evidence/EXP-027/` — both permitted paths.
- Separately present (pre-existing, NOT experiment-attributable): modified tracked files under `tools/learning-harness/` (`M` at first column, harness's own working-tree state; these were never touched by any EXP-027 task action). Conclusion: all changes attributable to this experiment are confined to the two permitted paths.

## Reopened Designer target state at audit time
- Tab 1 remains the reopened clean target: heading/Properties Name `FX_ComponentRecoveryLab02`, Version "User version for user <signed-in user>", scope bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, Save disabled (clean); recovered component grid Name `FX_ButtonRecovery02` / Type `PushButton` (proven in T8, evidence t8-02). Not re-inspected redundantly; state preserved.
