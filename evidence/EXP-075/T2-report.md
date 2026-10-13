# EXP-075 — T2 report: one Check Out of FX_HelloWorld01 (cycle 1; task_message_id `7131023e-7db9-479e-bc8a-55b19bc079d1`; worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`)

**Scope:** Check Out only. No wizard, no property added, no Save, no Form close, no recovery query, no runtime open or Refresh, no Check In or Undo Check Out. Observed only.

**Result:** Check Out succeeded once. FX_HelloWorld01 is now checked out to the operator (Locked By shows the operator username, which matches the identity bar account `anton.ramos@3mworks.com.ph`). Revision Num 2 and Revision Date 10/10/2026 are unchanged. Check In and Undo Check Out are enabled. Toolbar Save is disabled. No dialog, confirmation or error text appeared. Ownership is unambiguous (Locked By was blank before the click; it is not locked by another user).

## Identity and baseline confirmation (before the Check Out)

| Item | Observed (fresh untargeted snapshot; Tables sub-tab readback; Properties grid) |
| --- | --- |
| Tab state | Tab list taken first (tab 0 Designer, tab 1 Web Client, favoriteContext `IdoCollections`). Tab 1 selected (succeeded). Designer not touched. |
| Form | IDOs tab selected (the Form opened in T1 via Select Form; still open and clean since T1). |
| IDO Name | `FX_HelloWorld01` (textbox) |
| Project Name | `FX_HelloWorldProject01` |
| Base table / alias (Tables sub-tab, one row) | `FX_HelloWorld01` / `fxhw` / `Primary Base` / `Inner` (find readback; the Tables sub-tab was not screenshotted) |
| Revision Num / Revision Date | `2` / `10/10/2026` |
| Locked By | blank |
| Check Out / Undo Check Out | Check Out enabled; Undo Check Out disabled |
| Toolbar Save | disabled |
| Status bar | `P&roperties` (not Filter in Place; FiP was not clicked) |
| Property inventory | nine rows (FX_Code seq 1; FX_Label seq 2; CreatedBy 3; UpdatedBy 4; CreateDate 5; RecordDate 6; RowPointer 7; NoteExistsFlag 8; InWorkflow 9). Same as T1. |
| FX_Address (case-insensitive) | `find` with `/address/i` on the IDOs page: **no matches** |

Identity matches T1 and the brief. The target is the T1 record, retrieved in the same Form; no new F4 query was run in T2 (the brief's pre-F4 criterion applies to the query tasks, not this one).

## Column-header resolution (Properties grid)

The grid headers to the right of Column Type are: Read Only, Required, Upper Case, Pseudo Key, Read Only Record. The per-row checkbox that was unresolved in T1 is resolved as follows.

| Column | FX_Code (row 1) | FX_Label (row 2) | CreatedBy … RowPointer (rows 3–7) | NoteExistsFlag (row 8) | InWorkflow (row 9) |
| --- | --- | --- | --- | --- | --- |
| Read Only | unchecked | unchecked | **checked** | unchecked | unchecked |
| Required | **checked** | unchecked | unchecked | unchecked | unchecked |
| Upper Case | blank (no checkbox, no value) | blank | blank | blank | blank |
| Pseudo Key | unchecked | unchecked | unchecked | unchecked | unchecked |
| Read Only Record | unchecked | unchecked | unchecked | unchecked | **checked** |

Evidence: `t2-01` (rows 2–9, right-hand columns visible), `t2-02` (row 1 with the same columns). Read from the accessibility rows as well. The DOM order in each row is: checkbox (Read Only), checkbox (Required), plain gridcell (Upper Case), checkbox (Pseudo Key), checkbox (Read Only Record). The screenshots confirm the mapping by header alignment.

**Correction to T1:** the T1 record described the unidentified fourth checkbox as checked on CreatedBy … RowPointer and InWorkflow. That was a misreading. The checks on CreatedBy … RowPointer are in the **Read Only** column, and the check on InWorkflow is in the **Read Only Record** column. Pseudo Key is unchecked on every row.

**Limit:** Upper Case shows no value on any row (a blank cell with no checkbox). Whether blank means false, not applicable, or unset is not established by the UI.

## Check Out (one click; AC-3)

- Pre-click gate (fresh ref `f1e337`): Locked By blank, Check Out enabled, Undo Check Out disabled, Save disabled, no dialog.
- One click on `Check Out`. Native response: **no dialog, no confirmation text, no error** (`browser_click` output and the page snapshot after a 3-second settle). No retry.
- Settled state after 3 seconds (`t2-03`; fresh find readback):
  - Locked By: operator username (accessibility value; the screenshot shows the start of it, `anton.ramos@3m`, clipped). Matches the identity bar.
  - Row checkbox: checked.
  - Check In: enabled. Undo Check Out: enabled.
  - Revision Num `2`, Revision Date `10/10/2026` (unchanged).
  - Status bar: `Check Out (IDOs 1 of 1)`.
  - Toolbar Save: disabled. No dialog.
- Property inventory after the Check Out: all nine rows present, text identical to the baseline (`find` on the rows).

## Evidence files

| File | Shows | Does not prove |
| --- | --- | --- |
| `evidence/EXP-075/t2-01-pre-checkout-properties-right-columns-upper-case-pseudo-key.png` | IDOs Form, Properties tab, columns Read Only / Required / Upper Case / Pseudo Key / Read Only Record for rows 2–9 (scrolled to the bottom). Status `P&roperties`. Locked By blank; Check Out enabled. Revision 2 / 10/10/2026. | Row 1 (see `t2-02`). The Tables sub-tab (no screenshot). |
| `evidence/EXP-075/t2-02-pre-checkout-properties-row1-fx-code-right-columns.png` | Row 1 (FX_Code) and rows 2–8 with the same right-hand columns (scrolled to the top). FX_Code: Read Only unchecked, Required checked, Upper Case blank, Pseudo Key and Read Only Record unchecked. | Row 9 (see `t2-01`). |
| `evidence/EXP-075/t2-03-checkout-result-settled-locked-by-operator.png` | After the Check Out (settled): Locked By `anton.ramos@3m…` (clipped), row checkbox checked, Check In and Undo Check Out enabled, Check Out greyed, Revision 2 / 10/10/2026, Save greyed, status `Check Out (IDOs 1 of 1)`. Identity bar: operator account and DEM configuration. | The full Locked By string (read from the accessibility tree, which shows the operator username). Database state. Server-side lock (UI state only). |

## Action audit (T2 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer (tab 0) not selected. |
| `browser_snapshot` (untargeted) | 1 | Fresh start snapshot. |
| `browser_find` (read-only) | 7 | Tables readback; Properties sub-tab ref; `/address/i`; Check Out ref; Locked By / Check In / Undo / Revision readback; Save and dialog check; nine-row check. |
| Clicks | 3 | (1) Tables sub-tab (view only); (2) Properties sub-tab (view only); (3) **Check Out (×1)**. |
| Typed entries | 0 | None. |
| Key presses | 0 | None. |
| Escape presses | **0** | None. |
| Mouse moves / wheel | 2 / 2 | Grid horizontal scroll (deltaX +1200) and vertical scroll (deltaY −600); view only. |
| Waits | 1 | 3 seconds after Check Out. |
| Screenshots | 3 | `t2-01`, `t2-02`, `t2-03`. |
| Snapshot files read (worker) | 0 | Tool-written snapshot files were not read in T2. |
| **Check Out** | **1** | One click; response: no dialog. |
| Check In / Undo Check Out | 0 / 0 | None. |
| New Property wizard / Finish | 0 / 0 | None. |
| Save | 0 | None. |
| IDOs close / reopen | 0 / 0 | None in T2. |
| Target F4 queries (T2) | 0 | None in T2. |
| Runtime Refresh / runtime open / runtime edits | 0 / 0 / 0 | None. |
| Strings, classes, SQL, Forms, records, IDO or property changes | 0 | None. |
| Designer actions | 0 | None. |
| Unload, cache, FormSync, deployment, regeneration | 0 | None. |
| Re-login | 0 | Session usable throughout. |
| Worker-authored JavaScript, console or network reads, direct navigation, refresh, restart | 0 | None. (Tool wrappers "Ran Playwright code" contain tool-generated locators only.) |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Portal banner dismissals | 0 | None visible. |

### Cumulative browser action audit (T1 + T2)

| Action | T1 | T2 | Cumulative (brief budget) |
| --- | --- | --- | --- |
| Check Out | 0 | 1 | **1** (budget 0 or 1: used) |
| Check In / Undo Check Out | 0 / 0 | 0 / 0 | **0 / 0** |
| New Property wizard | 0 | 0 | **0** (budget 1 remaining) |
| Finish | 0 | 0 | **0** (budget 1 remaining) |
| Save | 0 | 0 | **0** (conditional, budget 1 remaining) |
| IDOs close / reopen pairs | 1 / 1 (pair 1) | 0 / 0 | **1 pair** (budget 2 total; 1 remaining) |
| Target queries (F4, FX_HelloWorld01) | 1 | 0 | **1** (budget 2; 1 remaining) |
| Runtime Refresh | 0 | 0 | **0** (budget 1 remaining) |
| Select Form opens / OK / Cancel | 1 / 1 / 0 | 0 / 0 / 0 | 1 / 1 / 0 |
| Tab lists / selects | 1 / 1 | 1 / 1 | 2 / 2 |
| Clicks | 7 | 3 | 10 |
| Typed entries | 2 | 0 | 2 |
| Key presses (Tab, F4) | 3 | 0 | 3 |
| Escape presses | 0 | 0 | **0** |
| Untargeted snapshots / targeted | 3 / 0 | 1 / 0 | 4 / 0 |
| `browser_find` | 3 | 7 | 10 |
| Screenshots | 6 | 3 | 9 |
| Mouse moves / wheel | 1 / 1 | 2 / 2 | 3 / 3 |
| Waits | 1 | 1 | 2 |
| Strings, classes, SQL, Forms, records, IDO or property changes | 0 | 0 | **0** |
| Designer actions | 0 | 0 | **0** |
| Unloads / cache / FormSync / deploy / regenerate | 0 | 0 | **0** |
| Re-logins | 0 | 0 | **0** |
| JavaScript / console / network / direct navigation / refresh / restart | 0 | 0 | **0** |

## Worker-written-file inventory (T2)

Written by this worker in T2:

- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (edited: status header, T2 section, the T1 checkbox-header open question resolved, final state).
- `evidence/EXP-075/T2-report.md` (created; this report).
- `evidence/EXP-075/t2-01-pre-checkout-properties-right-columns-upper-case-pseudo-key.png`
- `evidence/EXP-075/t2-02-pre-checkout-properties-row1-fx-code-right-columns.png`
- `evidence/EXP-075/t2-03-checkout-result-settled-locked-by-operator.png`

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` written by the harness on browser events during T2 (for example `page-2026-10-13T11-58-49-196Z.yml`, `page-2026-10-13T11-58-55-886Z.yml`, `page-2026-10-13T11-59-14-770Z.yml`, `page-2026-10-13T11-59-19-697Z.yml`, `console-2026-10-13T11-58-30-582Z.log`). The worker did not read them. No other file was written.

## Final browser state (end of T2)

- Mongoose Web Client tab (tab 1) selected. Designer tab (tab 0) untouched.
- IDOs Form active (`favoriteContext=IdoCollections`), Properties sub-tab selected. FX_HelloWorld01 is the one record, **checked out to the operator** (Locked By operator; Revision 2 / 10/10/2026; Check In and Undo Check Out enabled; Check Out greyed). Save disabled. Status `Check Out (IDOs 1 of 1)`.
- No dialog. No unsaved change. The wizard was not opened. FX_HelloWorld01 is not checked in.

## Limits

- UI level, same session only. No database read; no server-side lock verification beyond the UI's Locked By and enabled controls.
- The Check Out response had no displayed text; the state change is read from Locked By and the enabled controls.
- Locked By is clipped in the screenshot; its full value was read from the accessibility tree (the operator username, shown by the harness as the login placeholder). The match to the identity bar is by account name, not by a database read.
- Upper Case shows no value on any row; its meaning (false, not applicable or unset) is unresolved.
- The Tables sub-tab readback (base table and alias) was read by find only, not screenshotted.
- No F4 query was run in T2; identity was confirmed in the Form already open from T1 (the pre-F4 criterion is therefore not part of T2).
