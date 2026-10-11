# EXP-057 T2D — read-only Designer Variables verification of FX_VarTest (AC-5)

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 4. The task header reads `task=T5`; the bounded instruction is **T2D** (native Variables-tab inspection only, no runtime work). The bounded instruction was followed.
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `226e51a5-2f7e-44d0-9249-770e836a92ae`.
Date: 2026-10-11. Browser tab 0 (Designer) only. Tab 1 (runtime) was not selected or touched. The FX_Items Form was not reopened or closed.

**Outcome: AC-5 passed on evidence of presence, observed in this Designer session.** The Form-variable definition `FX_VarTest` is listed under the **Form - Temporary** category with Name `FX_VarTest`, Description blank, Value `~LIT~()`, Persistent `False`, Global `False`. It is returned by the exact-name filter `FX_VarTest` and by the filter `VarTest`.

**Discrepancy with EXP-056 (not resolved):** EXP-056 T1, T2, T5, T6, T7, and T8 reported `FX_VarTest` **absent** from the Variables collection. The same filter string `VarTest`, applied here, returns the row. The cause is not established. See section 6.

## 1. Identity and clean state at start (`t5-snapshot-00`, `t5-snapshot-01`)

- Tab list before any selection: tab 0 Designer (current), tab 1 Mongoose portal. `browser_tabs select 0` succeeded.
- One Form tab, selected, heading `FX_Items`.
- Properties > Form tab (selected by one click; view state): Design > Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save, Regenerate Form, Undo, Redo `[disabled]`. No dialog.
- Designer state inherited from T2C: Details panel open on the Components tab; the Properties panel was on the Component tab. The Properties panel was switched to the Form tab (view only) to read Version.

## 2. Navigation and actions (view state, selection, filter only)

| # | Action | Target | Result |
| --- | --- | --- | --- |
| 1 | Click Properties `Form` tab (view state) | Properties panel | Form properties shown; Version and Name readable |
| 2 | Click Details `Variables` tab (view state) | Details tablist | Variables tab shown: four collapsed categories (Form - Persistent, Form - Temporary, Global - Persistent, Global - Temporary) |
| 3 | Screenshot of collapsed categories | — | `t5-01` |
| 4 | Click Variables grid `Expand` (labelled; view state) | Variables grid | All categories expanded; FX_VarTest visible under Form - Temporary |
| 5 | Click the `FX_VarTest` row (selection only) | Form - Temporary row | Selected; Properties > General shows the definition attributes |
| 6 | Screenshot | — | `t5-02` |
| 7 | Click the Variables grid Search textbox (filter only) | Variables search | Focused |
| 8 | Type `FX_VarTest` + Enter (native filter) | Variables search | One group: Form - Temporary → FX_VarTest (`t5-snapshot-05`) |
| 9 | Type `Initial` + Enter (positive control, native filter) | Variables search | One group: Form - Persistent → InitialCommand (`t5-snapshot-06`) |
| 10 | Type `VarTest` + Enter (the EXP-056 filter string) | Variables search | One group: Form - Temporary → FX_VarTest (`t5-snapshot-07`) |
| 11 | Clear the search (empty text + Enter) | Variables search | Filter cleared; all categories visible again (`t5-snapshot-08`) |
| 12 | Screenshot final | — | `t5-03` |

Not done: "New" (variable creation); any typing into a variable property (Name, Description, Value, Persistent, Global); any edit to the Value cell; any definition, handler, component, or Form metadata change; any Save, Regenerate, Undo, Redo; Designer close or reopen; any runtime action; Components or Event Handlers tabs (not required here).

## 3. Form-category inventory (AC-5 evidence)

Evidence: `t5-snapshot-03-variables-tab-expanded-all-categories.md` (lines 291–302); `t5-02`.

| Category (as displayed) | Rows (Form categories) | Source line |
| --- | --- | --- |
| Form - Persistent | `InitialCommand` (1 row) | `t5-snapshot-03` lines 294–296 |
| Form - Temporary | **`FX_VarTest` (1 row)** | `t5-snapshot-03` lines 300–302 |
| Global - Persistent | many rows (`ccvw_*`, `gbgc_*`, `lse_*`, `lsm1_*`, …); virtualised; no FX_ row in the rendered portion | `t5-snapshot-03` lines 306–436 |
| Global - Temporary | header not present in the rendered snapshot (virtualised) | not visible |

Form categories are complete: Form - Persistent and Form - Temporary each show their rows in full, with no truncation.

## 4. FX_VarTest definition attributes (read-only; `t5-snapshot-04`, `t5-02`, `t5-03`)

Properties > General (FX_VarTest row selected; the Properties panel shows the variable's attributes):

| Attribute | Observed value | Note |
| --- | --- | --- |
| Name | `FX_VarTest` | exact |
| Description | blank | — |
| Value | `~LIT~()` | displayed exactly as rendered; not edited; meaning not interpreted |
| Persistent | `False` | native dropdown (not changed) |
| Global | `False` | — |
| Category | Form - Temporary (grid group) | from the grid group, not a property |

The category `Form - Temporary` together with `Persistent False` is consistent with a temporary Form variable. This is an observation of the displayed values only.

Not exposed in the Properties panel for this variable (not read): any data type, default, or scope fields beyond those listed. Unavailable fields are recorded as unavailable, not inferred.

## 5. Exact-name filter results (AC-5 evidence)

| Filter | Result | Evidence |
| --- | --- | --- |
| `FX_VarTest` | One group, `Form - Temporary`, one row `FX_VarTest` | `t5-snapshot-05`, lines 291–296 |
| `Initial` (positive control) | One group, `Form - Persistent`, one row `InitialCommand` | `t5-snapshot-06`, lines 291–298 |
| `VarTest` (EXP-056 string) | One group, `Form - Temporary`, one row `FX_VarTest` | `t5-snapshot-07`, lines 291–299 |
| (cleared) | All categories visible again; `InitialCommand` and `FX_VarTest` both listed | `t5-snapshot-08`, lines 294–302 |

The positive control shows that the filter reaches the Form categories and returns the expected match, so an empty result for `FX_VarTest` would have been a real empty result. The filter is not a substitute for reading the Form - Temporary group, and both were read.

## 6. Discrepancy with EXP-056 (unresolved; not repaired; not inferred)

- EXP-056 reported `FX_VarTest` **absent** at T1 (`t1-05`), T2 (`t2-snapshot-01`, filter `VarTest` with positive control `Initial`), T4 (`t4-snapshot-13`), T5 (`t5-05`, `t5-snapshot-14`/`-15`), T6 (`t6-snapshot-20`), T7 (`t7-snapshot-03`), T8 (`t8-03`, `t8-snapshot-06`), and in the T10 final report. EXP-056 described the Form category as holding `InitialCommand` only.
- In this session, the same filter string `VarTest` returns the row. The Form - Temporary group is present and lists FX_VarTest.
- Possible explanations, **none tested or established**:
  1. The Form - Temporary group was not rendered or expanded in the EXP-056 readings, and the EXP-056 filter did not show it.
  2. The definition was created after the EXP-056 checks (for example, during the Designer Save, the close, or the recovery in this experiment).
  3. The Set Values Target typed as `FX_VarTest` (EXP-056 T5) creates or declares a temporary Form variable on load or Save. This is a candidate only; the Persistent False value is consistent with it, but no test supports it.
- This task does not choose between these. EXP-056's record is not modified (prohibited). The discrepancy is recorded here and in the EXP-057 record.

## 7. Final clean state (`t5-snapshot-08`, `t5-03`)

- FX_Items Form tab selected; heading `FX_Items`; Save, Regenerate Form, Undo, Redo `[disabled]`; no dialog.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Variables grid: filter cleared; Form - Persistent `InitialCommand`; Form - Temporary `FX_VarTest`.
- Properties panel: Form tab; FX_VarTest General attributes still shown (selection only).
- Screenshot `t5-03`: shows the Designer with FX_Items open, the Variables panel with Form - Persistent / InitialCommand and Form - Temporary / FX_VarTest (selected), the General readback (Name FX_VarTest, Description blank, Value ~LIT~(), Persistent False, Global False), Save greyed, and the User footer. It proves the filter cleared and the Designer clean. It does not prove the definition's state in any other session.

## 8. Counts (T2D)

- Tab lists 1 (before the first select). Tab selects 1 (tab 0; succeeded).
- Clicks 5 (Properties Form tab 1; Details Variables tab 1; grid Expand 1; FX_VarTest row select 1; search box focus 1). All succeeded; timeouts 0.
- Typing (native filter only) 4 entries: `FX_VarTest`, `Initial`, `VarTest`, and an empty string to clear. Submit by Enter 4.
- Snapshots 9 (`t5-snapshot-00` … `-08`); screenshots 3 (`t5-01`, `t5-02`, `t5-03`); finds 0.
- Variable creation (New) 0; variable property edits 0; variable definition changes 0; handler changes 0; component changes 0; Designer Save 0; Regenerate 0; Undo 0; Redo 0; Form close or reopen 0; runtime tab interaction 0; FX_Refresh 0; diagnostics, preferences, FormSync, cache, SQL, scripts, reauthentication 0. Browser-reference errors 0. Recovery snapshots used 0.

## 9. Acceptance (T2D scope)

| AC | Status | Basis |
| --- | --- | --- |
| AC-2 identity and clean state | Supported (carried from T2A; re-confirmed at the start of T2D) | `t5-snapshot-00`, `-01`: Name FX_Items; Version; footer User / `anton.ramos@3mworks.com.ph`; Save disabled; no dialog |
| AC-3 handler | Supported (T2B) | `T2B-handler-verification-report.md` |
| AC-4 components | Supported with one unresolved discrepancy (T2C) | `T2C-component-inventory-report.md` |
| **AC-5** Variables tab independently inspected for a distinct FX_VarTest Form-variable definition; presence or absence recorded with Form-category and filtered evidence; Designer clean, Save disabled | **Passed on evidence of presence (observed, single session).** Form category inventory (`t5-snapshot-03`), exact filter (`t5-snapshot-05`), positive control (`t5-snapshot-06`), EXP-056 string (`t5-snapshot-07`), attributes (`t5-snapshot-04`, `t5-02`), clean final state (`t5-snapshot-08`, `t5-03`). The outcome is not inferred from the Set Values assignment, the Edit binding, or the Data Source cell. **Unresolved:** the contradiction with EXP-056's absence reports (section 6). |
| AC-6 to AC-11 | **Not tested** | Runtime and reconciliation tasks; not started. |

## 10. Limits

- Observed in one Designer session. Not a persistence, cross-session, cache, or database claim.
- The Global - Temporary category was not rendered in the snapshot (virtualised); Global rows were filtered, not enumerated. The AC-5 presence result rests on the Form categories, which were rendered in full.
- Attributes shown for FX_VarTest: Name, Description, Value, Persistent, Global. Other attributes were not exposed in the native panel for this row and are unavailable.
- `Value` displays as `~LIT~()`; its meaning was not interpreted and was not edited.
- The EXP-056 contradiction is unresolved. The brief forbids inferring existence from the Set Values assignment or Edit binding; this report follows that rule.

## 11. Files written (T2D)

- `evidence/EXP-057/T2D-variables-verification-report.md` (this report)
- Snapshots: `evidence/EXP-057/t5-snapshot-00-designer-fresh-pre-variables.md`, `t5-snapshot-01-designer-form-properties-identity.md`, `t5-snapshot-02-variables-tab-unfiltered-inventory.md`, `t5-snapshot-03-variables-tab-expanded-all-categories.md`, `t5-snapshot-04-fx-vartest-row-selected-definition-readback.md`, `t5-snapshot-05-variables-filter-exact-FX_VarTest.md`, `t5-snapshot-06-variables-filter-positive-control-Initial.md`, `t5-snapshot-07-variables-filter-VarTest-same-string-as-EXP-056.md`, `t5-snapshot-08-final-clean-designer-filter-cleared-FX_Items-open.md`
- Screenshots: `evidence/EXP-057/t5-01-variables-tab-unfiltered-categories-collapsed.png`, `t5-02-form-temporary-fx-vartest-row-selected-definition-attributes.png`, `t5-03-final-clean-designer-variables-filter-cleared-FX_Items-open.png`
- Tool-generated (gitignored): `evidence/playwright/page-2026-10-11T09-34-*.yml`, `09-35-*.yml`
- `experiments/EXP-057-hello-world-part-3-section-8-fx-items-saved-defini.md` (updated: status and T2D section)
