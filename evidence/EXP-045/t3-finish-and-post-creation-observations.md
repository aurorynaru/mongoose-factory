# EXP-045 T3 — Gate revalidation, one Finish, post-creation observations (worker-authored)

Run `R-20261010-214137-Ia7F` · cycle 2 · task T3 · worker session `9f2fb920-cc07-4930-b468-a5c8910aab86` · task_message_id `4367afca-e13e-4f98-88c2-37a3b6f83e72`.
Finish was pressed **exactly once**. No Caption dialog, no string change, no Designer Save, no close/reopen, no runtime open, no data row.

## 1. Gate revalidation (Web Client, before Finish)

Select Form opened from the Web Client toolbar `Open` (`f1e25`). The wizard in the Designer tab was not touched.

| # | Step | Result | Evidence |
|---|---|---|---|
| G0 | Dialog opened with a leftover criterion `String` (Export/Import Strings) from the earlier session | Not used as a result | — |
| G1 | Filter By = Name; Case Sensitive and Starts With unchecked (verified in snapshot) | Settings as expected | — |
| G2 | Positive control `FX_HelloWorld01`: click Filter, Control+a, key-event entry (slowly), wait 2 s, snapshot | **1 row:** Caption `FX_HelloWorld01` / Name `FX_HelloWorld01` | `t3-01-select-form-positive-control-FX_HelloWorld01-settled.png` |
| G3 | Target `FX_UMs` exact: click Filter, Control+a, key-event entry (slowly), wait 2 s, snapshot | **0 rows.** Grid empty; criterion `FX_UMs` in Filter | `t3-02-select-form-target-FX_UMs-exact-settled-zero-rows.png` |
| G4 | Cancel (`f1e855`) | Dialog closed; no row activated; no prompt | — |

Gate result: **PASS** (positive control returned its row; target returned no row). Limits: no scope column; no total count; case variants not re-tested in T3.

## 2. Designer wizard after returning (no discard)

- The wizard `Form Wizard - MultiView` was intact on its final page on return (`e1559`).
- Reverify path: Back (final → page 3), Back (page 3 → page 2), Back (page 2 → page 1), then Next three times to the final page. No value was changed.

| Page | Verified | Evidence |
|---|---|---|
| Final (before reverify) | Text "...named FX_UMs with the data source FX_UMs."; Save Template unchecked; Finish enabled | `t3-03` |
| Page 3 (after Back) | Row 1 `FX_UM` (Caption `FX_sUM`), row 2 `FX_Description` (Caption `FX_sDescri…`), both Include checked | `t3-04` |
| Page 2 (after Back) | Selected list `FX_Description`, `FX_UM` (defaults; not changed) | `t3-05` |
| Page 1 (after Back) | Name `FX_UMs`; Form Type MultiView; Layout GridLeft; Device Default; Data Source `FX_UMs`; Query Form and Comments empty; Back disabled | `t3-06` |
| Page 2 (after Next) | Same as above | — |
| Page 3 (after Next) | Order verified again: `FX_UM` row 1, `FX_Description` row 2 | `t3-07` |
| Final (before Finish) | Save Template unchecked; Finish enabled; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t3-08` |

## 3. Finish (once)

- Invoked: the visible `Finish` button (`e1576`), **one** click. Not retried.
- Immediate response: an informational alertdialog `Infor Mongoose Application Development Framework - Form Wizard - MultiView` with the text **"Process Completed Successfully"** and one **OK** button. This is the expected completion notice (the same notice as the EXP-036 precedent). It was **not** an unexpected prompt.
- Evidence: `t3-09-after-finish-process-completed-alert-before-ok.png` (before OK).
- OK (`e1918`) was clicked **once** to acknowledge the completion notice.

## 4. Immediate Designer outcome (after OK)

Designer URL: `.../designer/default.aspx?MGForm=FX_UMs` (the generated Form was opened in the Designer).

Fresh snapshot and screenshot (`t3-10`):

- Tab list: `Property Classes` (the vendor `IdoPropertyClasses` Form, not selected) and **`FX_UMs`** (selected).
- Properties panel: **Name** `FX_UMs`; Description empty; Caption empty; **Version** `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`.
- Status bar: **`[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`**.
- Save: **disabled** in the snapshot (`[disabled]`); the screenshot shows the Save icon greyed.
- Design surface: two label/edit pairs stacked; the top label reads `FX_sUM*` and the lower label reads `FX_sDescription:`. The labels display the **raw string IDs** as their text. The grid on the left shows one row (`1`) with column headers `* FX_sUM` and `FX_sDescription` as captions.
- No unexpected prompt, validation error or unresolved dialog after OK.

**Observed, not interpreted:** the labels display the string IDs as text. This means either the string resources are absent or the Designer shows the ID when no value is resolved. The Caption dialogs were not opened (T3 scope). The displayed text is therefore **not** a finding about the resources' existence or values.

**Field order observed:** the canvas and the grid show `FX_UM` (`FX_sUM`) above `FX_Description` (`FX_sDescription`). This is the Designer's generated order immediately after Finish; the reopen check is for a later task.

## 5. Post-creation inventory (Web Client Select Form; Designer not touched)

- Select Form opened from the Web Client `Open` (`f1e25`) with a leftover criterion `FX_UMs` in the filter. The criterion was re-entered (click, Control+a, key events slowly, wait 2 s) before reading.
- Settled result: **exactly one row**, Caption `FX_UMs` / Name `FX_UMs`. Filter By Name; both checkboxes unchecked.
- Evidence: `t3-11-select-form-post-finish-FX_UMs-exact-settled-one-row.png`.
- Closed with **Cancel** (`f1e855`). No row activated. No prompt.

Limits: the dialog has no scope column, so the row's scope is not shown here. The User scope of the generated Form is observed in the Designer status bar and the Version text, not in the Select Form row.

## 6. Operation counts (T3)

| Operation | Count |
|---|---|
| **Finish** | **1** (not retried) |
| Save (Designer or Web Client) | **0** |
| Form created (observed in Designer) | **1** |
| Template created | **0** (Save Template unchecked) |
| Caption dialog opened | **0** |
| String created or changed | **0** |
| Designer Form close / reopen | **0 / 0** |
| Select Form opened | **2** (gate; post-creation) |
| Select Form OK (row activation) | **0** |
| Select Form Cancel | **2** |
| Key-event filter entries (Select Form, `slowly`) | **3** (`FX_HelloWorld01`, `FX_UMs`, `FX_UMs`) |
| Control+a before filter entries | **3** |
| Settle waits (2 s) | **3** |
| Wizard Back | **3** |
| Wizard Next | **3** |
| Wizard Cancel | **0** |
| Wizard Save Template clicks | **0** in T3 (unchecked in T2) |
| Informational alert OK (Process Completed Successfully) | **1** |
| Other prompts or confirmations answered | **0** |
| Tab selects | **4** (0, 1, 0, 1) |
| Screenshots (worker-saved PNG) | **11** (`t3-01` to `t3-11`) |
| Ref-not-found errors | **0** |
| Timeouts | **0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload, Regenerate Form | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

## 7. Limits

- The generated Form is observed in the Designer only. The database, the Form inventory row's scope and the Form's durability are **not** verified.
- "User version for user anton.ramos@3mworks.com.ph" is the Designer's Version text; it is not a database read.
- The Select Form row shows no scope; scope is taken from the Designer status bar and the Version text.
- The label captions show raw IDs (see §4); the Caption dialogs are needed in the next task.
- The Select Form gate was run in the same worker session as T1 and T2; the T3 repetition is in the same session. The brief's "own session" wording was not met literally; this is recorded.

## 8. Screenshots (T3)

| File | Shows | Does not prove |
|---|---|---|
| `t3-01-select-form-positive-control-FX_HelloWorld01-settled.png` | Select Form: Filter `FX_HelloWorld01`; one row `FX_HelloWorld01` / `FX_HelloWorld01` | Scope; store total |
| `t3-02-select-form-target-FX_UMs-exact-settled-zero-rows.png` | Select Form: Filter `FX_UMs`; grid empty | Scope; case variants; database absence |
| `t3-03-wizard-final-page-before-reverify-save-template-unchecked.png` | Final page: text; Save Template unchecked; Finish enabled | The Designer result |
| `t3-04-wizard-back-to-page3-order-reverify.png` | Page 3: `FX_UM` (`FX_sUM`) row 1; `FX_Description` row 2 | Designer order |
| `t3-05-wizard-back-to-page2-default-selection-reverify.png` | Page 2 defaults (FX_Description, FX_UM) | — |
| `t3-06-wizard-back-to-page1-name-and-data-source-reverify.png` | Page 1: Name `FX_UMs`; Data Source `FX_UMs`; MultiView, GridLeft, Default | The model commit |
| `t3-07-wizard-forward-to-page3-order-reverify.png` | Page 3 after Next: order `FX_UM` then `FX_Description` | — |
| `t3-08-wizard-final-page-pre-finish-configuration-verified.png` | Final page; Save Template unchecked; Finish enabled; status bar User scope | That Finish succeeds |
| `t3-09-after-finish-process-completed-alert-before-ok.png` | Alert "Process Completed Successfully" with OK | The Form's identity (the Designer behind it) |
| `t3-10-after-finish-generated-FX_UMs-form-designer-state.png` | Designer `FX_UMs` tab: Name `FX_UMs`; User version; User scope; labels `FX_sUM*` and `FX_sDescription:`; Save greyed | The database; the caption values; durability |
| `t3-11-select-form-post-finish-FX_UMs-exact-settled-one-row.png` | Select Form: Filter `FX_UMs`; one row `FX_UMs` / `FX_UMs` | Scope of the row; no other scope |
