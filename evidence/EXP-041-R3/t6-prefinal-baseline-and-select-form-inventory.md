# EXP-041-R3 T6 — Pre-close baseline (read-only) and post-creation Select Form check

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 7 · task T6.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `ce77385f-bc24-433f-a620-58203b84fe10`.
Read-only. No Designer close or reopen, no runtime open, no Save, no Finish, no Form opened from the Select Form results.

**Outcome: STOPPED on a discrepancy.** The Select Form query for the exact name `FX_HelloWorld01` returned **zero rows**, but the Designer shows the Form `FX_HelloWorld01` open after the T5 Finish. The brief requires exactly one row for the target name. Nothing was mutated.

## 1. Designer identity and clean state (fresh snapshot at T6 start)

- Tab 0 selected: `…/WSWebClient/designer/default.aspx?MGForm=FX_HelloWorld01`.
- Form tab heading `FX_HelloWorld01` (selected), with `closable FX_HelloWorld01`.
- Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`.
- No dialog, no alert, no unsaved-change prompt.
- Evidence: `t6-01-designer-prebaseline-form-open-clean-user-scope.png` (viewed).

## 2. Pre-close baseline (read-only; from the T5 saved snapshots, re-checked against the current Designer screenshot)

Source snapshots: `evidence/playwright/page-2026-10-10T08-09-01-189Z.yml` (Form open), `…08-09-10-431Z.yml` (Collections tab), `…08-09-24-350Z.yml` (Components tab expanded). These are tool outputs; the worker read them, did not write them.

| Item | Value as rendered | Source |
|---|---|---|
| Name | **FX_HelloWorld01** | Properties Design > Name (T5 snapshot line ~446; `t6-01`) |
| Description | empty | Properties |
| Caption | empty | Properties |
| Version | **User version for user anton.ramos@3mworks.com.ph** (screen truncates to "User version for us…") | Properties (T5 snapshot line ~468) |
| Device Type | **Default** | Properties |
| **Form Type** | **Normal** (as rendered; **not** replaced by the wizard label MultiView) | Properties (T5 snapshot line ~484; `t6-01`) |
| Is Master | True | Properties |
| ScopeType / ScopeName | User / anton.ramos@3mworks.com.ph | status bar |
| Form-level collection / data source | **Primary Collection: FX_HelloWorld01** | Details > Collections (T5) |

### 2a. Component hierarchy (as displayed; not modified)

| Level | Name | Type | Data Source | Pane | Container | Tab |
|---|---|---|---|---|---|---|
| Root | Pane (00) | (pane) | — | — | — | — |
| child of Pane (00) | FormCollectionGrid | Grid | objects | 0 | (blank) | 0 |
| child of FormCollectionGrid | FX_LabelGridCol | GridColumn | object.FX_Label | 0 | FormCollectionGrid | 1 |
| child of FormCollectionGrid | FX_CodeGridCol | GridColumn | object.FX_Code | 0 | FormCollectionGrid | 2 |
| Root | Pane (01) | (pane) | — | — | — | — |
| child of Pane (01) | FX_LabelStatic | Static | (blank) | 1 | (blank) | 3 |
| child of Pane (01) | FX_LabelEdit | Edit | object.FX_Label | 1 | (blank) | 4 |
| child of Pane (01) | FX_CodeStatic | Static | (blank) | 1 | (blank) | 5 |
| child of Pane (01) | FX_CodeEdit | Edit | object.FX_Code | 1 | (blank) | 6 |

- **FX_Code**: bound by `FX_CodeGridCol` (GridColumn, `object.FX_Code`) and `FX_CodeEdit` (Edit, `object.FX_Code`); label `FX_CodeStatic` (Static, no data source).
- **FX_Label**: bound by `FX_LabelGridCol` (GridColumn, `object.FX_Label`) and `FX_LabelEdit` (Edit, `object.FX_Label`); label `FX_LabelStatic` (Static, no data source).
- **Additional wizard-generated elements (inventoried, not modified):** `FormCollectionGrid` (Grid) and the two panes.

### 2b. Limits of the baseline
- Component captions, Component Class, and Enabled/Visible/Required When values are **not read**.
- The canvas's required-marked edit box is **inferred** to be FX_CodeEdit (position and key role); not read directly.
- The star markers on the page-3 property rows of the wizard are **unexplained**.
- The Designer shows the Form as open; no server-side read was made.

## 3. Post-creation Select Form check (Web Client tab)

### 3a. Settings (verified in the dialog snapshots)
- Dialog: `Select Form` (opened from the Web Client toolbar Open control, `#mgtoolbarbutton-1100`, after a fresh find).
- Filter By: **Name**. Case Sensitive: **unchecked**. Starts With: **unchecked** (no `[checked]` in any dialog snapshot).
- Entry: click Filter textbox; Control+a; `browser_type` with `slowly: true` (key events), text `FX_HelloWorld01` (exact target, spelled as in the brief).
- Settle: 2-second wait (snapshot `page-…08-13-13-719Z.yml`), then a further 3-second wait (snapshot `page-…08-13-26-612Z.yml`).

### 3b. Result
- Grid `f1e856` has **no child rows** at both settled reads (about 2 s and about 5 s after the last key).
- Textbox reads `FX_HelloWorld01`; Filter By `Name`; both checkboxes unchecked.
- Screenshot `t6-02-select-form-FX_HelloWorld01-exact-settled-result.png` (taken after the settle; the grid is empty).
- **Target rows returned: 0.** The brief requires **exactly one** row. This is the discrepancy.

### 3c. Positive control in this check
- **No positive control was run in T6.** The T1 gate (SqlTables positive control; FX_HelloWorld01 and HelloWorld zero rows; testblank lowercase infix control) ran earlier in this same worker session, before the Form existed.
- Under the brief's rule, an empty grid counts only after a positive control in the same check. T6 did not run one, and the brief forbids further inspection after an unexplained discrepancy without a stop. The zero-row result is therefore **not** accepted as proof of anything in this check.

### 3d. What this result does and does not establish
- **Does establish:** in this dialog session, the exact-name Name filter returned no row for `FX_HelloWorld01`.
- **Does not establish:**
  - whether the Form exists in the Select Form inventory (the Designer shows it open, so the Form exists in the Designer's view);
  - why the inventory differs (possibilities not tested: the Select Form list store was loaded earlier and not refreshed after the Designer created the Form; the filter did not apply to the new Form's scope; or a session-level issue). None is confirmed;
  - whether a case-insensitive variant exists (no `HelloWorld` substring query was run in T6).
- The no-scope-column limitation still applies. The dialog does not show ScopeType.

### 3e. Dialog closed
- Cancel (ref `f1e898`, label "Cancel", verified in a fresh snapshot). **OK was not used.** No row was activated.
- Post-Cancel snapshot: no Select Form dialog. Web Client IDOs surface unchanged: `FX_HelloWorld01` Revision Num `2`, Check Out enabled, Save disabled.
- Evidence: the post-Cancel snapshot `page-2026-10-10T08-13-31-490Z.yml`.

## 4. Browser end state (T6)

- Tab 0 (Designer) selected: `FX_HelloWorld01` open, Save `[disabled]`, Undo `[disabled]`, User scope, no dialog.
- Tab 1 (Web Client): IDOs surface, no dialog, Save disabled.
- No browser-native dialog. No unsaved-change prompt.

## 5. Operation counts (T6)

| Operation | Count |
|---|---|
| Designer snapshots (fresh; post-Cancel find) | 2 (+1 find ScopeType, +1 find Save) |
| Designer screenshots | 1 (`t6-01`) |
| Tab selects | 2 (to Web Client, back to Designer) |
| Web Client Open (Select Form) | **1** |
| Select Form filter entries (key events, `slowly: true`) | **1** (`FX_HelloWorld01`) |
| Control+a | 1 |
| Settle waits | 2 (2 s; 3 s) |
| Select Form dialog snapshots | 4 (open; after entry; after 2 s; after 3 s) + 1 post-Cancel |
| Select Form screenshots | 1 (`t6-02`) |
| Select Form row activation / OK | **0 / 0** |
| Select Form Cancel | 1 (verified label) |
| Designer Form-tab close / reopen | **0 / 0** |
| Designer Save | **0** |
| Finish | **0** |
| Runtime Web Client Form open | **0** |
| Component or property edits | **0** |
| Fresh recovery snapshots | **0** (no stale-ref error in T6) |
| Corrected inspections | 0 |
| JavaScript / evaluate / run-code | 0 |
| Authentication / logout / session reset | 0 |

## 6. Acceptance status (T6)

- **AC-5 (exactly one new FX_HelloWorld01 Form): NOT CONFIRMED.** The Designer evidence (T5) shows the Form FX_HelloWorld01 open in User scope and clean. The Select Form check did not show exactly one row. The discrepancy must be resolved before AC-5 can be marked met.
- **AC-6 (Designer data-source binding and components): observed** for the baseline in §2 (names, types, bindings, parent structure). Unchanged in T6.
- AC-4, AC-7, AC-8, AC-9: not changed by T6 (AC-9 is re-confirmed only as recorded in the T1 section and the T6 record section).

## 7. Recommended next step (for operator decision; not performed)

1. **Resolve the discrepancy** with a bounded, read-only check that the operator authorizes: a Select Form positive control (for example `SqlTables`) in a fresh dialog, then the same exact-name query. If the positive control passes and the target still returns zero rows, the inventory does not show the Form (possibly a store-refresh issue) and that must be reported before any close or reopen.
2. Only after AC-5 is confirmed, authorize the Designer close and reopen (AC-7).
3. Keep the Form open and clean until the operator decides.
