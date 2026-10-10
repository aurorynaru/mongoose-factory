# EXP-041-R3 T9 — AC-8 Web Client runtime opening (single open, no data entry)

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 10 · task T9.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `1656d6b0-302d-4cd4-acb8-9da86be341f9`.
Classification: observed (single run). Not replay_verified.
Scope: one Select Form lookup for the target, one Open of the Form. No typing into any runtime field, no record creation or save, no mode change, no record navigation, no Designer close, reopen or Save, no positive-control query.

## 1. AC-7 carried forward (from T8; not re-tested)

Passed for the explicitly compared items: Name, Version, ScopeType, ScopeName, Primary Collection (data source), Form Type (Normal), Device Type, Is Master, Save and Undo state, and the eight component rows. Limitations kept: captions, Component Class and Enabled/Visible/Required When values were not read; cache behaviour and server-side persistence not tested; the T6 zero-row Select Form result remains unexplained and no cause is claimed.

## 2. Designer state before any Web Client action (fresh finds)

- Tab 0: `…designer/default.aspx?MGForm=FX_HelloWorld01`. Form tab `FX_HelloWorld01` (closable). Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Save `[disabled]`. Find for "dialog" returned no matches. Clean; no unexpected dialog.

## 3. Web Client lookup (settings and settled result)

- Tab 1 selected. Fresh find: the Open toolbar control `f1e25` labelled "Open". Clicked once. Select Form dialog `f1e841` opened.
- Dialog at open (fresh snapshot): Filter By **Name**; **Case Sensitive unchecked**; **Starts With unchecked**; Filter text `FX_HelloWorld01`; grid already showed one row (carried over from T7's last query, not a T9 query). Screenshot `t9-01`.
- Because the displayed row was carried over, the target was **re-entered once** with the established method: click the textbox (`f1e870`), Control+a, `browser_type` `FX_HelloWorld01` with `slowly: true`, 2-second settle. No positive-control query and no other query were run in T9.
- Settled result (fresh dialog snapshot): grid one row, Caption `FX_HelloWorld01` (`f1e898`), Name `FX_HelloWorld01` (`f1e900`). Screenshot `t9-02` (taken before the row selection).
- Identification: the intended Form is visibly identifiable as the one row. The dialog has no scope column, so the row's scope is not shown.

## 4. Open — exactly once

- The row's Name cell (`f1e900`) was clicked once to make it the active row (fresh snapshot showed `[active]` on that cell).
- The OK button `f1e889` was verified as labelled "OK" in a fresh snapshot, then clicked **once**. (The recipe warns that OK activates the selected row; the list had one row.)
- Result: the Select Form dialog closed; a new Web Client tab labelled `FX_HelloWorld01` opened and is selected. The browser page URL changed to `…favoriteContext=FX_HelloWorld01…`.
- No second open. No double-click. No other Form was opened.
- Tool note: the tool reported the row click as `#ext-12742` and the OK click as `getByRole('button', {name:'OK'})` inside the iframe. These are tool locators, not worker-written code.

## 5. Runtime state observed (fresh snapshots and screenshot `t9-03`, viewed)

| Item | Observed (directly) | Not observed |
|---|---|---|
| Runtime Form identity | Tab heading `FX_HelloWorld01` (selected, Ext tab `f1e906`–`f1e908`, close control "Close Panel FX_HelloWorld01"); tab panel `FX_HelloWorld01` | Form Name in the Form's properties (not visible in the runtime) |
| Grid | One row, marked with a **blue star** and row number `1`; grid column headers render **blank** | Column header text (none rendered) |
| Detail inputs | Two text inputs stacked on the right: upper input (focused, blue border) with a `:` label and no caption text; lower input with a **red required asterisk** and a `:` label | Visible caption text for either input |
| Field names | **Not rendered.** Labels show only `:` | — |
| Messages / errors | None visible in the screenshot or in the snapshots | — |
| Mode indicator | **No explicit mode text.** The blue-star new-row marker on the grid row, the empty inputs, and Save disabled are consistent with add mode | An explicit "Add mode" label |
| Save | `[disabled]` | — |
| Toolbar | `New` (`f1e29`) and `Delete` (`f1e30`) enabled; `Get More Rows` disabled; System Notes, Documents and Send email disabled | — |
| Dialog | None | — |

Screenshot `t9-03-web-client-runtime-FX_HelloWorld01-initial-state-after-single-open.png` (viewed): shows the four-tab bar with the active `FX_HelloWorld01` tab, the starred grid row, and the two inputs. Does **not** show the field captions or any Form Name text; the labels in the screenshot are only colon glyphs.

## 6. AC-8 assessment

- **Opened through a supported path:** yes (Select Form row + OK, once). Identity: the tab heading and the tab panel name `FX_HelloWorld01`; the URL carries `favoriteContext=FX_HelloWorld01`.
- **Add mode actually observed?** Strong indication only: starred new-row marker, empty inputs, Save disabled. No explicit mode text is rendered, so "add mode" is **inferred**, not directly confirmed.
- **FX_Code and FX_Label visibly represented?** Two editable inputs are rendered, one with a required marker. **Neither input is labelled with a field name in the runtime.** The mapping of the required input to FX_Code (key, Required) and the other to FX_Label is an **inference** from the IDO properties recorded in T8 and EXP-040, not a directly observed rendering.
- **Messages:** none rendered.

**AC-8 status: PARTIAL.** The Form opened once through a supported path and its identity is visible. The required evidence that FX_Code and FX_Label are rendered by name, and an explicit add-mode label, were not observed. I do not report AC-8 as passed.

## 7. Operation counts (T9)

| Operation | Count |
|---|---|
| Designer fresh finds (read-only) | 4 (closable, ScopeType, Save, dialog) |
| Designer tab selects | 1 (to the Web Client, at the start of the Web Client work) |
| Web Client Open (Select Form) | **1** |
| Select Form textbox click | 1 (before the target re-entry) |
| Control+a | 1 |
| Filter entries (`slowly: true`) | 1 (`FX_HelloWorld01`) |
| Settle waits | 1 (2 s) |
| Row Name-cell click (activate row) | 1 |
| Select Form OK | **1** (opened the Form) |
| Runtime Form opens | **1** |
| Typing into runtime fields | **0** |
| Record create / save / New / Delete / navigation actions | **0** |
| Designer close / reopen / Save | **0 / 0 / 0** |
| Finish | 0 |
| Positive-control queries in T9 | **0** |
| Recovery snapshots | 0 (no stale ref in T9) |
| Corrected inspections | 0 |
| Screenshots (worker-authored PNG) | 3 (`t9-01`, `t9-02`, `t9-03`) |
| JavaScript / evaluate / run-code | 0 |
| Authentication / logout / session reset | 0 |

## 8. Artifact inventory (T9)

| File | Shows | Does not show |
|---|---|---|
| `t9-01-select-form-open-leftover-filter-before-reentry.png` | Select Form at open: Filter By Name; both checkboxes unchecked; filter `FX_HelloWorld01`; carried-over row. | A fresh T9 result (the row is carried over). |
| `t9-02-select-form-target-fresh-settled-one-row.png` | Fresh settled result after the target re-entry: one row `FX_HelloWorld01`/`FX_HelloWorld01`; settings as above. | Scope of the row. |
| `t9-03-web-client-runtime-FX_HelloWorld01-initial-state-after-single-open.png` (viewed) | Runtime tab `FX_HelloWorld01`; starred grid row; two inputs (one required); no messages. | Field captions or names; Form Name text. |
| Accessibility snapshots under `evidence/playwright/` (tool output, gitignored): `…08-22-04-790Z.yml` (after re-entry typing), `…08-22-08-172Z.yml` (settled), `…08-22-13-764Z.yml` (after row click), `…08-22-18-133Z.yml` (after OK; runtime state) | Accessibility states used in §§3–6. | — (tool output; not worker-authored) |

## 9. Browser end state (T9)

- Tab 1 (Web Client) selected and showing the runtime tab `FX_HelloWorld01` (the requested observed state). Selected Form tab in the runtime: `FX_HelloWorld01`. The first runtime input has focus (not typed into). Save `[disabled]`. No dialog, alert or browser-native prompt.
- Tab 0 (Designer) not touched in T9. At the start of T9 it held FX_HelloWorld01 open and clean (Save disabled, User scope, no dialog); it was not changed.
- No unsaved-change prompt. The Select Form dialog is closed (OK).
