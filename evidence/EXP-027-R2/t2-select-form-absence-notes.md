# EXP-027-R2 — T2 read-only Select Form absence proof (no Mongoose mutation)

Run R-20261007-173418-s6vM cycle 2, task T2. Date: 2026-10-07.

## Sequence executed (controlled context, both tabs inherited from T1)

1. `browser_tabs list` + fresh snapshot of active tab 0: two tabs unchanged; Web Client live/clean; NO Select Form dialog present at task start (contrary to a naive assumption — the EXP-027 session's open dialog was no longer open in this context).
2. One native click on Web Client toolbar **Open** (`f3e23`, accessibility name "Open") → exactly one **"Select Form"** dialog appeared with grid columns Caption/Name, Filter textbox, Filter By combobox, Case Sensitive + Starts With checkboxes, OK/Cancel/Help.
3. **Filter settings before positive control:** the inherited dialog already displayed `Filter textbox = FX_ComponentRecoveryLab02` and `Filter By = Name` (leftover settings from EXP-027's earlier session — recorded fact). Case Sensitive checkbox rendered WITHOUT `[checked]`; Starts With likewise unchecked.
4. **Positive control (normal mechanism):** one `fill("FX_ComponentRecoveryLab02")` into the Filter textbox (id `#textfield-1143-inputEl`) → fresh snapshot of the dialog: grid renders exactly ONE row: `"FX_ComponentRecoveryLab02 FX_ComponentRecoveryLab02"` (Caption+Name). Screenshot t2-01 inspected: shows Select Form with that single highlighted row, Filter By=Name, Case Sensitive visibly unchecked; filter field truncated at field edge showing `…omponentRecoveryLab02` (exact full string from the accessibility snapshot). OK NOT pressed; no Form opened.
5. **Target filter:** one `fill("FX_ComponentRecoveryLab03")` into the same textbox → dialog snapshot: Filter By still `Name`, Case Sensitive still unchecked, and the grid rowgroup contained NO data rows (header row only).
6. Read-only count inspection attempts on gridview (`gridview-1140`): first read reported renderedRows=0 using selector `.x-grid-row`; a disambiguation read showed `cellCount=0` but `rowLike("[class*=grid-row]")=1` (the container itself matches that class — ambiguous), so count semantics were NOT concluded from these reads alone. Omitted: two further DOM-selector attempts errored (invalid selectors) and were abandoned per the no-widening rule.
7. One permitted FRESH untargeted page snapshot settled the visible result with current accessibility refs: dialog `Select Form`, Filter textbox `FX_ComponentRecoveryLab03`, combobox `Name`, checkbox "Case Sensitive" without `[checked]`, grid children = header row `"Caption Name"` + empty inner grid (zero rendered data rows).
8. One native click on **Cancel** (`f3e423`) → dialog dismissed; `find("Select Form")` returned no matches; Web Client tab clean again (Save/New/etc. disabled).
9. Read-only reconfirmation of Designer tab 1 (`browser_tabs select 1` + fresh snapshot): Page URL still `…&MGForm=FX_ComponentRecoveryLab02`; selected form-tab heading `FX_ComponentRecoveryLab02` with close control; Save/Regenerate Form/Undo/Redo all disabled (clean); Properties selector textbox `FX_ButtonRecovery02 (Button)`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Inherited state preserved untouched.

## Decisive result interpretation

- **Positive control:** the Name filter with Case Sensitive unchecked rendered exactly one row for `FX_ComponentRecoveryLab02` (a known-existing Form independently visible in T1) → the case-insensitive Name-filter mechanism works and returns that Form.
- **Target zero:** with Filter By=Name, Case Sensitive visibly unchecked, and filter text `FX_ComponentRecoveryLab03`, the normal visible result shows ZERO rendered rows (fresh accessibility snapshot). Supporting read-only DOM reads corroborate (x-cell count 0; first row-selector read 0) but their exact semantics were not fully settled — the accessibility snapshot is treated as decisive.
- Caveat: this proves live-session Select Form state at this moment, not Forms-database durability or complete inventory.

## Action counts (T2)

Open clicks: 1. Filter text fills: 2 (`…Lab02`, `…Lab03`). OK presses: 0. Cancel closes: 1. Designer launches: 0. Authentications: 0. Properties changed: none. Target Form created/modified: none (target remains absent).
