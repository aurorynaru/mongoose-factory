# EXP-041-R3 T8 — AC-7 ordinary Designer close and reopen verification

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 9 · task T8.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `5666785e-6afd-47fb-a515-687d130c19fd`.
Scope: one ordinary Form-tab close and one reopen through the Designer Form menu. No runtime open, no Designer Save, no Select Form inventory search, no property, component or data edit.
Classification: observed (single run). Not replay_verified. Caching and timing causes are **not** claimed.

## 0. Context carried from T7

- T7 returned **exactly one** `FX_HelloWorld01` row after a successful SqlTables positive control (Case Sensitive and Starts With unchecked, Name filter).
- T6's zero-row observation for the same query remains **unexplained**. This T8 does not claim caching or timing as a proven cause.

## 1. Pre-close verification (fresh Designer snapshot; read-only)

| Item | Observed (pre-close) | Evidence |
|---|---|---|
| Open Form | Form tab `FX_HelloWorld01` (selected, closable); URL `…designer/default.aspx?MGForm=FX_HelloWorld01` | fresh snapshot; `t8-01` |
| Name | FX_HelloWorld01 | Properties > Design > Name |
| Version | User version for user anton.ramos@3mworks.com.ph | Properties > Version (accessibility) |
| ScopeType / ScopeName | User / anton.ramos@3mworks.com.ph | status bar |
| Primary Collection | FX_HelloWorld01 | Details > Collections (view; `t8-01`) |
| Form Type | **Normal** (as rendered; not replaced) | Properties |
| Device Type | Default | Properties |
| Is Master | True | Properties |
| Save | disabled | toolbar `[disabled]` |
| Undo / Redo | disabled | toolbar |
| Dialog | none | snapshot |

### 1a. Pre-close component baseline (fresh snapshot of the Components tree; view-only expand)

| Level | Name | Type | Data Source | Pane | Container | Tab |
|---|---|---|---|---|---|---|
| Root | Pane (00) | (pane) | — | — | — | — |
| child | FormCollectionGrid | Grid | objects | 0 | — | 0 |
| grandchild | FX_LabelGridCol | GridColumn | object.FX_Label | 0 | FormCollectionGrid | 1 |
| grandchild | FX_CodeGridCol | GridColumn | object.FX_Code | 0 | FormCollectionGrid | 2 |
| Root | Pane (01) | (pane) | — | — | — | — |
| child | FX_LabelStatic | Static | — | 1 | — | 3 |
| child | FX_LabelEdit | Edit | object.FX_Label | 1 | — | 4 |
| child | FX_CodeStatic | Static | — | 1 | — | 5 |
| child | FX_CodeEdit | Edit | object.FX_Code | 1 | — | 6 |

Pre-close screenshot: `t8-01-pre-close-form-open-clean-user-scope-primary-collection.png` (viewed). Shows Name, Version (truncated on screen), Device Type, Form Type Normal, Is Master, the Collections view with `Primary Collection: FX_HelloWorld01`, User scope, Save greyed. It does not show the component tree in full; the tree is from the snapshot above.

## 2. Close — exactly once

- Fresh find: `closable FX_HelloWorld01` (ref `e247`), the Form-tab close control.
- Clicked **once**.
- Post-close snapshot: tab list empty; URL `…designer/default.aspx` (no `MGForm`); no dialog; no alert; no unsaved-change prompt; Save `[disabled]`.
- Screenshot `t8-02-after-single-close-no-form-tab-no-dialog.png` (viewed): no Form tab, blank canvas, Save and Undo greyed, User scope in the status bar, no dialog.
- No save, discard, authentication or other prompt appeared, so none was answered.

## 3. Reopen — exactly once

- The Designer's **Form** menu (`e3`, label "Form" verified in the post-close snapshot) was opened. Its items included `Definition`, `Sign Out`, and a recent-forms list: `FX_HelloWorld01`, `Sql Tables`, `IDOs`, `Data Maintenance Wizard`, `Runtime Builder Selection`, `IDO Projects`, `FX_SingleButtonLab01`, `FX_ComponentRecoveryLab03`, `FX_ComponentRecoveryLab02`.
- The `FX_HelloWorld01` recent-form item (`e840`, label verified in the same snapshot) was clicked **once**. `Definition` (`e831`) and `Sign Out` (`e835`) were not used.
- Post-reopen snapshot: URL `…designer/default.aspx?MGForm=FX_HelloWorld01`; Form tab `FX_HelloWorld01` selected, closable; Save `[disabled]`; Undo `[disabled]`; Redo `[disabled]`.
- The Details panel was collapsed after reopen. It was expanded with its `Expand Panel` view control (once), the Collections tab showed `Primary Collection: FX_HelloWorld01` (find), the Components tab was selected (once), and the tree's `Expand` view control was used once to show the children.

## 4. Comparison: pre-close vs post-reopen

| Item | Pre-close | Post-reopen | Equal? |
|---|---|---|---|
| Name | FX_HelloWorld01 | FX_HelloWorld01 | **Yes** |
| Version | User version for user anton.ramos@3mworks.com.ph | User version for user anton.ramos@3mworks.com.ph | **Yes** |
| ScopeType | User | User (status bar) | **Yes** |
| ScopeName | anton.ramos@3mworks.com.ph | anton.ramos@3mworks.com.ph | **Yes** |
| Primary Collection / data source | FX_HelloWorld01 | FX_HelloWorld01 | **Yes** |
| Form Type | Normal | Normal | **Yes** |
| Device Type | Default | Default | **Yes** |
| Is Master | True | True | **Yes** |
| Save | disabled | disabled | **Yes** |
| Undo / Redo | disabled | disabled | **Yes** |
| Pane (00) row | `Pane (00)` | `Pane (00)` | **Yes** |
| FormCollectionGrid row | Grid, objects, 0, 0 | Grid, objects, 0, 0 | **Yes** |
| FX_LabelGridCol row | GridColumn, object.FX_Label, 0, FormCollectionGrid, 1 | identical | **Yes** |
| FX_CodeGridCol row | GridColumn, object.FX_Code, 0, FormCollectionGrid, 2 | identical | **Yes** |
| Pane (01) row | `Pane (01)` | `Pane (01)` | **Yes** |
| FX_LabelStatic row | Static, 1, 3 | identical | **Yes** |
| FX_LabelEdit row | Edit, object.FX_Label, 1, 4 | identical | **Yes** |
| FX_CodeStatic row | Static, 1, 5 | identical | **Yes** |
| FX_CodeEdit row | Edit, object.FX_Code, 1, 6 | identical | **Yes** |

**Comparison basis and limits:** equality is established at the level of the rendered rows (name, type, data source, pane, container, tab) read from the accessibility trees before and after. Component captions, Component Class, Enabled/Visible/Required When, and any component's internal property values were **not** read before or after, so equality of those is **not** claimed. The canvas screenshot after reopen shows the header, the properties and the first component rows; the lower component rows are visible only in the snapshot.

Post-reopen screenshot: `t8-03-after-single-reopen-components-expanded-readonly.png` (viewed). It shows the Form tab `FX_HelloWorld01`, Properties Name / Version / Device Type / Form Type Normal / Is Master, the Components rows `Pane (00)`, `FormCollectionGrid`, `FX_LabelGridCol`, `FX_CodeGridCol`, `Pane (01)` and `FX_LabelStatic`, and User scope. It does not show `FX_LabelEdit`, `FX_CodeStatic` or `FX_CodeEdit` (below the visible area); those are read from the snapshot file `page-2026-10-10T08-19-21-306Z.yml`.

## 5. AC-7 evidence matrix (this task)

| Requirement | Result | Evidence |
|---|---|---|
| Exactly one ordinary Form-tab close | **Met**: one click on `closable FX_HelloWorld01`; no prompt | `t8-02`; post-close snapshot |
| One supported reopen through the Designer Form menu | **Met**: one click on recent-form `FX_HelloWorld01` | post-reopen snapshot; `t8-03` |
| Same Name, ScopeType, ScopeName | **Met** (see §4) | `t8-01`; `t8-03`; snapshots |
| Same data source (Primary Collection) | **Met** (Collections tab after reopen) | find after reopen |
| Same generated field components and bindings (rows) | **Met** at row level (see §4) | pre- and post-reopen snapshots |
| Save disabled and no pending changes after reopen | **Met** (Save and Undo disabled) | post-reopen snapshot |
| Before/after screenshots and property evidence | **Partly**: pre-close screenshot `t8-01`, post-close `t8-02`, post-reopen `t8-03`; lower component rows only in snapshots; captions and component properties not read | files listed in §6 |

**AC-7 status: met at the rendered-row and property level for the items read; not met for captions and other component properties, which were not read.** Stated plainly: this is a same-session ordinary close and reopen only. It is not a database, cache or cross-session test.

## 6. Artifact inventory (T8)

| File | Shows | Does not show |
|---|---|---|
| `t8-01-pre-close-form-open-clean-user-scope-primary-collection.png` (viewed) | Pre-close: Name, Version, Device Type, Form Type Normal, Is Master; Collections view `Primary Collection: FX_HelloWorld01`; User scope; Save greyed. | Component rows (not in view). |
| `t8-02-after-single-close-no-form-tab-no-dialog.png` | After the one close: no Form tab; no dialog; Save greyed; User scope. | Reopen. |
| `t8-03-after-single-reopen-components-expanded-readonly.png` (viewed) | After the one reopen: Form tab `FX_HelloWorld01`; Properties; Components rows through `FX_LabelStatic`; User scope. | Lower component rows; captions. |
| Accessibility snapshot files under `evidence/playwright/` (gitignored tool output): `…08-18-56-787Z.yml` (Collections), `…08-19-04-598Z.yml` (after close), `…08-19-07-900Z.yml` (Form menu open), `…08-19-11-327Z.yml` (after reopen), `…08-19-14-613Z.yml` (Details expanded), `…08-19-18-455Z.yml` (Components tab), `…08-19-21-306Z.yml` (Components expanded) | Full accessibility states used in §§1–4. | — (tool output; not worker-authored evidence) |

Note on `t8-02`: the screenshot was taken after the close click and before the Form menu was opened (the file name records this).

## 7. Operation counts (T8)

| Operation | Count |
|---|---|
| Form-tab close (ordinary) | **1** |
| Form-tab reopen (Designer Form menu, recent-form item) | **1** |
| Form menu opened | 1 (the menu was opened once; `Definition` and `Sign Out` not used) |
| Designer Save | **0** |
| Runtime Web Client Form open | **0** |
| Select Form searches | **0** (T7 was the last inventory check) |
| Finish | 0 |
| Views (Details expand 1; Collections tab 1; Components tab 1; tree Expand 1) | 4 view-only actions |
| Component, property, caption, layout or data edits | **0** |
| Prompt affirmations | 0 (no prompt appeared) |
| Recovery snapshots used | 0 (no stale ref in T8; the T7 stale-ref allowance was not reused) |
| Corrected inspections | 0 |
| Screenshots (worker-authored PNG) | 3 (`t8-01`–`t8-03`) |
| JavaScript / evaluate / run-code | 0 |
| Authentication / logout / session reset | 0 |

## 8. Browser end state (T8)

- Tab 0 (Designer) selected. **FX_HelloWorld01 is open and clean** (Save and Undo disabled), URL `?MGForm=FX_HelloWorld01`, User scope. Details panel expanded on the Components tab with the tree expanded (a layout state, not a Mongoose object change).
- No dialog, alert or unsaved-change prompt.
- Tab 1 (Web Client) not used in T8.
