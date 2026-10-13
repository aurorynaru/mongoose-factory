# EXP-075 — T4 report: IDOs recovery pair and recovered-inventory verification (cycle 3)

Task message `0fb29e69-d684-4680-a526-1e99396b625d`; worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

**Scope:** the second IDOs close/reopen (recovery pair), one visible-criterion FX_HelloWorld01 query, and inventory verification. No Check Out, no Check In, no Undo Check Out, no wizard, no Finish, no Save, no runtime open, no runtime Refresh. Observed only; same-session UI recovery, not database durability and not replay verification.

**Result:** The recovered IDO matches the T1–T3 record. FX_HelloWorld01 is the only IDO row; project FX_HelloWorldProject01; base table FX_HelloWorld01, alias fxhw, Primary Base, Inner; Revision Num 2, Revision Date 10/10/2026; Locked By the operator; Check In and Undo Check Out enabled (still checked out); Save disabled. The Properties grid has exactly ten rows: the nine baseline properties plus exactly one FX_Address. FX_Address is bound to column FX_Address, String 150, nvarchar, Key Sequence 0, Property Class blank, Read Only / Required / Pseudo Key / Read Only Record unchecked. The label was not offered by the wizard and is not visible in the grid.

**Deviation (recorded, no effect on data):** One click intended for the Select Form OK button used a ref that I had not read from a snapshot (f1e1071). It landed on the Filter By combobox body in the Select Form dialog and expanded its three-option list (Name / Caption / Caption & Name). Filter By still read Name and nothing was committed. Per the brief I did not press Escape. Recovery: one fresh untargeted snapshot, then one visible inspection (`t4-02`), then I closed the list by selecting the already-current value "Name" (no change), re-read the OK ref from a current find (f1e1087), and pressed OK once. The mistaken ref was not a mutation; the list closed with the same value.

## Pre-close gates (fresh, read-only)

- Tab list before any select (tab 0 Designer not touched; tab 1 Web Client). Tab 1 selected.
- IDOs tab active; IDO Name FX_HelloWorld01; Project FX_HelloWorldProject01; Revision 2; Save disabled; Check In enabled (checked out); no dialog.
- Ten property rows including exactly one FX_Address (accessibility readback before close).

## Close (once)

- `Close Panel IDOs` clicked once. Result: the IDOs tab was removed; the runtime FX_HelloWorld01 tab became active (`favoriteContext=FX_HelloWorld01`); no prompt (clean Form).

## Reopen (once) through Form > Open > Select Form

1. Form menu clicked; the Open item (menu ref from a fresh snapshot file) clicked. The Select Form dialog was already open with its Filter pre-populated `IdoCollections` and the two rows `G6RIdoCollectionSearch` and `IDOs / IdoCollections`.
2. Row `IDOs / IdoCollections` selected by one click (`t4-01`).
3. OK: the intended click was mis-targeted (see Deviation). Recovered and pressed OK once with a current ref (after the Filter By list was closed by selecting its current value Name).
4. Result: `favoriteContext=IdoCollections`; a fresh IDOs tab active; Save disabled.

## Filter in Place state

- Status bar before any interaction: `Filter in Place` (status textbox), and the IDOs tab showed the Filter in Place icon. The Form opened already in Filter in Place (the EXP-074 and EXP-071-R2 pattern). **FiP was not clicked.**

## Criterion, query (one F4)

- IDO Name criterion (the active textbox) filled with `FX_HelloWorld01` by one fill; committed with Tab.
- Pre-F4 capture `t4-03`: IDO Name `FX_HelloWorld01`; echo row `FX_HelloWorld01`; Filter in Place icon on the IDOs tab; status `Filter in Place`; Save disabled.
- F4 pressed once; 3 s settle.
- Result (`t4-04`): exactly one IDO row, FX_HelloWorld01 (checkbox checked). Status `Description (IDOs 1 of 1)` (the Description field received focus after the query; no text was typed into it).

## Recovered identity and state (`t4-04`, accessibility readback)

| Field | Recovered value | T1/T2/T3 baseline | Match |
| --- | --- | --- | --- |
| IDO Name | FX_HelloWorld01 | FX_HelloWorld01 | yes |
| Project Name | FX_HelloWorldProject01 | FX_HelloWorldProject01 | yes |
| Base table / alias (Tables sub-tab) | FX_HelloWorld01 / fxhw / Primary Base / Inner | same | yes |
| Revision Num | 2 | 2 | yes |
| Revision Date | 10/10/2026 | 10/10/2026 | yes |
| Locked By | operator login placeholder (identity bar shows the same account) | operator | yes |
| Check Out / Check In state | Check In enabled; Undo Check Out enabled; Check Out not offered; row checkbox checked | checked out (T2, T3) | yes |
| Access As | G6R | G6R | yes |
| Save | disabled | disabled | yes |
| Dialog | none | none | yes |

## Recovered property inventory (ten rows)

Read from the accessibility rows (`page-2026-10-13T12-06-52-045Z.yml`) and screenshots `t4-05` (left columns, rows 1–8), `t4-06` (right-hand flags, rows 3–10), `t4-07` (right-hand flags, rows 1–8).

| # | Property | Seq | Class | Type | Column | Key Seq | Data Type | Length | Column Type | Read Only | Required | Upper Case | Pseudo Key | Read Only Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Code | 1 | blank | Bound to Column | FX_Code | 1 | String | 30 | nvarchar | no | yes | blank | no | no |
| 2 | FX_Label | 2 | blank | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | no | no | blank | no | no |
| 3 | CreatedBy | 3 | blank | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes | no | blank | no | no |
| 4 | UpdatedBy | 4 | blank | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | blank | no | no |
| 5 | CreateDate | 5 | blank | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType | yes | no | blank | no | no |
| 6 | RecordDate | 6 | blank | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType | yes | no | blank | no | no |
| 7 | RowPointer | 7 | blank | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType | yes | no | blank | no | no |
| 8 | NoteExistsFlag | 8 | blank | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | no | no | blank | no | no |
| 9 | InWorkflow | 9 | blank | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType | no | no | blank | no | **yes** |
| 10 | **FX_Address** | 10 | blank | Bound to Column | **FX_Address** | 0 | **String** | **150** | **nvarchar** | no | no | blank | no | no |

- Baseline comparison: rows 1–9 match the T1/T2 baseline and the T3 post-Finish readback on every readable field and flag (names, sequences, classes, property types, columns, key sequences, data types, lengths, column types, Read Only, Required, Pseudo Key, Read Only Record). Upper Case is blank on every row, including rows 1–9 (as at baseline).
- FX_Address: exactly one property whose name or column matches address (case-insensitive). The only address hits in the snapshot are the row's name and column cells (`/address/i`).
- The wizard offered no Label String ID field, so no label is set; the grid has no label column to show it.
- FX_Address Bound to Column with column FX_Address, String 150, nvarchar, Key Sequence 0, no class: observed in the grid. The nvarchar and length 150 are the grid's Column Type and Length values, consistent with the T3 pre-Finish readback.

## Screenshots (this task)

| File | Shows | Does not prove |
| --- | --- | --- |
| `t4-01-select-form-idos-row-selected-before-ok.png` | Select Form: Filter IdoCollections; `IDOs / IdoCollections` highlighted; OK, Cancel, Help; status `(Object 1 of 2)` behind the dialog. | That OK committed the Form (see t4-04). |
| `t4-02-select-form-after-misclick-recovery-filter-by-name-before-ok.png` | Select Form after the mis-click recovery: Filter By `Name` with focus, the dropdown closed; IDOs row highlighted; OK visible. | Anything about the recovered IDO. |
| `t4-03-pre-f4-idos-fx-helloworld01-criterion-visible-recovery.png` | **Pre-F4 criterion:** IDO Name `FX_HelloWorld01`; echo row; FiP icon on the IDOs tab; status `Filter in Place`; Save greyed; operator identity bar. | That F4 returns one row (see t4-04). |
| `t4-04-recovered-identity-checkout-state-after-f4.png` | **Decisive recovered identity:** one checked row FX_HelloWorld01; Project FX_HelloWorldProject01; Revision 2 / 10/10/2026; Locked By operator (clipped); Check In and Undo enabled; Access As G6R; Tables sub-tab `FX_HelloWorld01 / fxhw / Primary Base / Inner`; Save greyed; status `Description (IDOs 1 of 1)`. | The property inventory (see t4-05 to t4-07). Database state. |
| `t4-05-recovered-properties-left-columns-top.png` | Properties grid, left columns, rows 1–8 (FX_Code to NoteExistsFlag); Sequence, Property Class blank, Bound to Column, Column Name, Key Sequence, Data Type, Length. | Row 9–10 (see t4-06); right-hand flags (see t4-06/07). |
| `t4-06-recovered-properties-right-columns-bottom-fx-address.png` | **Decisive for FX_Address and rows 3–10:** right-hand columns (Read Only, Required, Upper Case, Pseudo Key, Read Only Record); row 9 InWorkflow Read Only Record checked; row 10 FX_Address Column Name FX_Address, String 150, nvarchar; all of its flags unchecked; Save greyed. | Rows 1–2 right-hand flags (see t4-07). |
| `t4-07-recovered-properties-right-columns-top-rows-1-2.png` | Right-hand columns, rows 1–8: FX_Code Required checked, Read Only and Pseudo Key unchecked; rows 3–7 Read Only checked; NoteExistsFlag all unchecked. | Rows 9–10 (see t4-06). |

Limitations of the screenshots: the Locked By value is clipped in each image; the full value comes from the accessibility readback (the operator login placeholder, matching the identity bar). The label is not shown because no label column exists in this grid and the wizard offered no label field.

## Acceptance checks (T4)

| AC | Status (T4) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-6 | **Established (observed, same session).** One clean close of the IDOs Form and one reopen through Select Form (IDOs / IdoCollections). One visible-criterion FX_HelloWorld01 query (criterion `t4-03` before F4). Recovered identity, checkout state (checked out to the operator), and ten-row inventory = baseline plus FX_Address (`t4-04`, `t4-05`–`t4-07`). | `t4-01`–`t4-07` | Same-session UI recovery only; not database durability; the Locked By value is the accessibility placeholder; the mis-click deviation (see above) did not change data. |
| AC-7 | **Not performed in T4** (the runtime Refresh is the last step). | — | Pending. |
| AC-8 | Final report pending (after AC-7). | — | — |

## Action audit (T4 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list / select | 1 / 1 | List before the first select; select index 1 (Web Client). Designer not touched. |
| `browser_snapshot` (untargeted) | 4 | Start; after the close; after the mis-click (recovery); after the reopen. |
| `browser_find` (read-only) | 5 | Select Form dialog check; combobox list state after the mis-click; list state after the Name option; post-F4 readback; Properties heading ref. |
| Clicks | 8 | (1) `Close Panel IDOs` (×1); (2) Form menu; (3) Form menu Open item; (4) `IDOs / IdoCollections` row; (5) **mis-targeted click** (landed on the Filter By combobox body; opened its list; no value change); (6) Filter By option `Name` (current value; closed the list by selection); (7) Select Form **OK** (×1); (8) Properties sub-tab (view only). |
| Typed entries | 1 | IDO Name criterion `FX_HelloWorld01` (one fill). |
| Key presses | 2 | Tab (criterion commit) ×1; F4 (the single target query) ×1. |
| Escape presses | **0** | None. |
| Mouse moves / wheel | 1 / 3 | Grid horizontal scroll (+1200), vertical scroll (+600 then −600). View only. |
| Waits | 1 | 3 seconds after F4. |
| Screenshots | 7 | `t4-01` to `t4-07`. |
| **Check Out / Check In / Undo Check Out** | **0 / 0 / 0** | None. |
| **New Property wizard / Finish** | **0 / 0** | None. |
| **Save** | **0** | None (Save disabled throughout). |
| IDOs close / reopen (T4) | 1 / 1 | The recovery pair. |
| Select Form opens / OK / Cancel | 1 / 1 / 0 | OK was the intended single OK press. |
| Target F4 queries (T4) | 1 | The recovery query. |
| Runtime Refresh / runtime open / runtime edits (T4) | 0 / 0 / 0 | Not in T4 scope. |
| Strings, property classes, SQL, Forms, runtime records (T4) | 0 | None. |
| IDO or property changes (T4) | 0 | None. |
| Designer actions | 0 | None. |
| Unloads / cache / FormSync / deploy / regenerate | 0 | None. |
| Re-login | 0 | Session usable. |
| Worker-authored JavaScript, console or network reads, direct navigation, refresh, restart | 0 | None. (The tool's "Ran Playwright code" wrappers contain tool-generated locators; for example `#menuitem-1025-itemEl` and `#combo-1262-bodyEl` (the mis-target) are harness-generated, not worker-authored.) |
| Ref-not-found errors | 0 | None. The mis-target was a stale-ref choice, not a ref-not-found error. |
| Recovery snapshot / corrected inspection | 1 / 1 | Used once, for the mis-click recovery (within the allowance). |
| Dialogs answered | 1 | Select Form OK. |
| Portal banner dismissals | 0 | None visible. |

### Cumulative browser action audit (T1 + T2 + T3 + T4; exact counts against the brief's budgets)

| Action | T1 | T2 | T3 | T4 | Cumulative | Budget status |
| --- | --- | --- | --- | --- | --- | --- |
| Check Out | 0 | 1 | 0 | 0 | **1** | Used (limit 1). |
| Check In / Undo Check Out | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | None (prohibited). |
| New Property wizard | 0 | 0 | 1 | 0 | **1** | Used (limit 1). |
| Finish | 0 | 0 | 1 | 0 | **1** | Used (limit 1). |
| Save | 0 | 0 | 0 | 0 | **0** | Conditional; not needed (Form clean after Finish). |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | **2 pairs** | Used (limit 2). |
| Target F4 queries (FX_HelloWorld01) | 1 | 0 | 0 | 1 | **2** | Used (limit 2). |
| Runtime Refresh | 0 | 0 | 0 | 0 | **0** | 1 left (AC-7). |
| Select Form opens / OK / Cancel | 1 / 1 / 0 | 0 | 0 | 1 / 1 / 0 | 2 / 2 / 0 | — |
| Tab lists / selects | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 4 / 4 | — |
| Clicks | 7 | 3 | 7 | 8 | **25** | — (includes one mis-target in T4) |
| Typed entries | 2 | 0 | 1 | 1 | **4** | — |
| Key presses (Tab, F4) | 3 | 0 | 0 | 2 | **5** | — |
| Escape presses | 0 | 0 | 0 | 0 | **0** | — |
| Untargeted snapshots / targeted | 3 / 0 | 1 / 0 | 2 / 0 | 4 / 0 | **10 / 0** | — |
| `browser_find` | 3 | 7 | 14 | 5 | **29** | — |
| Screenshots | 6 | 3 | 6 | 7 | **22** | — |
| Mouse moves / wheel | 1 / 1 | 2 / 2 | 1 / 1 | 1 / 3 | **5 / 7** | — |
| Waits | 1 | 1 | 1 | 1 | **4** | — |
| Dialogs answered | 1 | 0 | 0 | 1 | **2** (both Select Form OK) | — |
| IDO / property changes | 0 | 1 (Check Out) | 1 (FX_Address) | 0 | **2 (Check Out; FX_Address)** | Only FX_Address added. |
| Strings, classes, SQL, Forms, runtime records | 0 | 0 | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deploy / regenerate | 0 | 0 | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | 0 | 0 | **0** | — |
| JavaScript / console / network / direct navigation / refresh / restart | 0 | 0 | 0 | 0 | **0** | — |

## Worker-written-file inventory (T4)

Written by this worker in T4:

- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (edited: status header; T4 section).
- `evidence/EXP-075/T4-report.md` (created; this report).
- `evidence/EXP-075/t4-01-select-form-idos-row-selected-before-ok.png`
- `evidence/EXP-075/t4-02-select-form-after-misclick-recovery-filter-by-name-before-ok.png`
- `evidence/EXP-075/t4-03-pre-f4-idos-fx-helloworld01-criterion-visible-recovery.png`
- `evidence/EXP-075/t4-04-recovered-identity-checkout-state-after-f4.png`
- `evidence/EXP-075/t4-05-recovered-properties-left-columns-top.png`
- `evidence/EXP-075/t4-06-recovered-properties-right-columns-bottom-fx-address.png`
- `evidence/EXP-075/t4-07-recovered-properties-right-columns-top-rows-1-2.png`

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T12-05-53-668Z.yml`, `page-2026-10-13T12-06-40-683Z.yml`, `page-2026-10-13T12-06-52-045Z.yml`, `page-2026-10-13T12-06-26-660Z.yml`, `console-2026-10-13T12-05-48-690Z.log`). The worker read one of them (`page-2026-10-13T12-06-52-045Z.yml`) with Grep for the property rows and the address search. No other file was written.

## Final browser state (end of T4)

- Mongoose Web Client tab (tab 1) selected; Designer tab (tab 0) untouched.
- Active: the recovered IDOs Form (`favoriteContext=IdoCollections`), Properties sub-tab selected (last view). Status bar `Description (IDOs 1 of 1)` from the query; Filter in Place mode still active (inherited, not toggled).
- FX_HelloWorld01 is the one record, **checked out to the operator** (Check In and Undo Check Out enabled). Revision 2 / 10/10/2026. **Save disabled (clean).** Ten properties including FX_Address.
- No dialog. No unsaved change. The Description textbox has focus with no text typed. The Select Form dialog is closed. The runtime FX_HelloWorld01 tab is open, untouched (its two records were not refreshed or changed in T4).

## Limits

- Same-session UI recovery only. This is not database durability and not replay verification.
- Locked By is the login placeholder in the accessibility tree and clipped in images; the match to the operator is by the identity bar and the prior state.
- The label is not offered by the wizard and not visible in the grid; it is recorded as unset.
- The Upper Case column is blank on every row, including the nine baseline rows.
- The mis-targeted click (Filter By dropdown) was closed by selecting its current value; the dropdown's value stayed Name; this is recorded as a deviation.
- The Description textbox received focus after the query (no edit).
