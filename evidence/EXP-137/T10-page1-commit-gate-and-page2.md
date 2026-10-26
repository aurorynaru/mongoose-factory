# EXP-137 T10 — Page-1 commit gate, Next once, page-2 inspection (no Finish)

Task scope: commit the row-4 Data Type editor left active by T9, verify all four page-1 rows, click Next exactly once, and inspect page 2 with Create Scripts unchecked. No Finish, no Create Form, no Save, no check-in, no Form creation, no runtime record, no Create Scripts change, no Property Class lookup, no Back, no Cancel.

## Start identity

- Tab list (read-only) → tab 1 `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` (`designer/default.aspx`) → tab select 1 succeeded on the first attempt.
- Fresh untargeted snapshot (start): Designer live; Form `IdoCollections` in the Designer (vendor Form, not edited); footer `[ ScopeType: User / ScopeName: <masked> ]` (operator identity screenshots remain the account evidence; the masked name was not re-read by the worker); Save disabled; no dialog; console `2 errors, 0 warnings`.
- Dialog `Data Maintenance Wizard` open on page 1: IDO Name `FX_LoginUsers`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxlogin`; Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default`; Site Split unchecked; Table Name and View Name disabled and blank; Back disabled, Next enabled, Finish disabled.
- Row-4 Data Type combobox (`String`) was `[active]` (ref `e1046`), and the row-4 Data Type cell showed no static text. This matches T9's last report.

## Row-4 blur (the single non-mutating commit action)

- Target: wizard label `Table Alias:` (non-editable label; not Property Class, not a grid cell, not an editable field). Click result: succeeded (no error, no timeout).
- Chosen because the instruction permits a safe, visible, non-editable wizard label. Enter, Escape, Tab, Property Class controls and grid cells were not used. No coordinate click.
- Fresh untargeted snapshot after the blur (the post-blur targeted `browser_find` for `FX_Store` was a read-only check and is not counted as the fresh snapshot):
  - The row-4 combobox `[active]` editor is gone.
  - Row 4 Data Type now shows static `String` (ref `e1069`, cell re-keyed from `e1024`); SQL Data Type `nvarchar`; Property Length `50`; Primary Key unchecked; Required unchecked; Property Class blank; Label String ID and Default Value blank.
  - The form container carries `[active]`; that is the form container, not an editor.

## Page-1 committed readback (fresh snapshot after the blur, before Next)

| Row | Name | Data Type | SQL type | Length | Primary Key | Required | Property Class | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Username | String | nvarchar | 50 | checked | checked | blank (empty cell) | blank | blank |
| 2 | FX_PasswordHash | String | nvarchar | 64 | unchecked | unchecked | blank (empty cell) | blank | blank |
| 3 | FX_Role | String | nvarchar | 50 | unchecked | unchecked | blank (empty cell) | blank | blank |
| 4 | FX_Store | String | nvarchar | 50 | unchecked | unchecked | blank (empty cell) | blank | blank |

- Exactly four rows in the Name grid (`1`–`4`) and four rows in the property grid. No fifth configured row; the add-row placeholder is not a configured row.
- Intended values (`FX_Username` String 50 PK+Required; `FX_PasswordHash` String 64; `FX_Role` String 50; `FX_Store` String 50; no Property Class) match the committed grid values in every row. No mismatch found; the page-1 gate passed.
- Primary Key / Required on row 1: both checked. The Required mechanism (automatic with Primary Key, or the one click reaching both) remains unresolved; it was not clicked again, per the instruction.
- Page-1 identifiers unchanged: IDO Name `FX_LoginUsers`, Project `FX_HelloWorldProject01`, Alias `fxlogin`, MultiView, GridLeft, Default, Site Split unchecked.
- Property Class: the column cells are empty in the accessibility tree for all four rows. The Property Class combobox was never opened, and the Property Class column is off-screen in the page-1 screenshot.

## Screenshot t10-01 (page 1 after blur)

- `t10-01-page1-after-row4-blur.png`: element capture of the wizard dialog, page 1, after the row-4 blur. Visibly shows: IDO Name `FX_LoginUsers`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxlogin`; Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default`; Site Split unchecked; the grid's Name column `FX_Username`, `FX_PasswordHash`, `FX_Role`, `FX_Store`; Required checked on row 1 only; Label String ID and Default Value blank; Back disabled, Next enabled, Finish disabled.
- Does not show: Data Type, SQL Data Type, Property Length, Primary Key or Property Class (horizontally scrolled off-screen in this capture). The lengths and Primary Key are evidenced by the page-1 snapshot readback above and by T9's `t9-02`.

## Next (single click)

- Next clicked once (target `Next`, ref `e1061`, from the fresh post-blur snapshot). Succeeded. No retry.
- Fresh untargeted snapshot on page 2 (the click's own returned snapshot file was not used as the fresh inspection).

## Page-2 state

- Wizard message: `Click "Finish" to create the database table, IDO and optional form.`
- Checkbox `Create Scripts` (ref `e1073`): **unchecked** (no checked state in the accessibility tree; visibly an empty box in `t10-02`).
- A disabled, empty grey preview textbox (ref `e1082`) occupies the page body. No text in the accessibility tree; it is empty in the screenshot.
- Buttons: Back enabled (`e1059`); Next **disabled** (`e1061`, last page); Finish **enabled** (`e1063`, not clicked); Cancel (`e1065`, not clicked); Help (`e1067`).
- No Create Form prompt, no completion message, no dialog, no session-expiry modal, no sign-in.
- Console after the Next click: `2 errors, 0 warnings` (unchanged from the start; not investigated).

## Screenshot t10-02 (page 2 before Finish)

- `t10-02-page2-before-finish.png`: element capture of the wizard dialog, page 2. Visibly shows: Create Scripts checkbox unchecked; the instruction message naming Finish; an empty disabled preview area; Back, Next (disabled), Finish, Cancel and Help.
- Does not show: the IDO name, project, alias or any property definition. Page 2 has no summary of the configuration. The page-1 configuration is not visible on page 2 without going Back, which was not done.

## Pre-Finish confirmation gaps (AC-2 status)

1. Create Scripts unchecked: **observed on page 2** (accessibility state and `t10-02`).
2. IDO Name, Project, Alias, Form Type, Layout, Device Type: observed on page 1 (`t10-01` and the pre-Next snapshot). **Not visible on page 2**; a final pre-Finish capture of these identifiers while the wizard is on page 2 is not available from this page.
3. Property names, String types, lengths 50/64/50/50, PK and Required flags, blank Property Class: observed in the page-1 accessibility readback. Screenshot coverage of the Data Type, Length, Primary Key and Property Class columns is partial (T9 `t9-02` shows length and Primary Key; `t9-03` shows Required; the Property Class column is not visually captured).
4. The Required mechanism: unresolved.
5. The page-2 grey preview area is empty. Its meaning (for example, a script preview that is empty because Create Scripts is unchecked) is an inference and is not evidenced.
6. Whether the wizard's page-2 Finish will create exactly the configured four properties: not evidenced until Finish; the completion response is the only later source.

## Action accounting (T10)

Mutating browser actions (2):
- Row-4 blur click on `Table Alias:` label (1).
- Next click (1).

Totals: Finish 0; Create Form 0; Save 0; check-in 0; Create Scripts change 0; Back 0; Cancel 0; Property Class lookup 0; Escape 0; Tab 0; Enter 0; coordinate clicks 0; runtime records 0; vendor Form edits 0; worker-authored JavaScript 0.

Reads and snapshots:
- Tab list 1; tab select 1 (succeeded first attempt).
- Fresh untargeted snapshots 3 (start; post-blur; post-Next).
- Targeted `browser_find` 1 (`FX_Store`, post-blur, read-only; not a fresh snapshot, not a recovery step).
- Screenshots 2 (both succeeded; no timeouts); both viewed for content.
- The click results returned tool-generated snapshot files (`evidence/playwright/page-...yml`); these were not used as the fresh inspection.

Errors and recovery:
- Ref-not-found 0; timeouts 0; fresh-snapshot recovery allowance unused in T10; corrected-inspection allowance unused in T10.
- Session-expiry modal 0; sign-in 0; session-expiry procedure 0.
- Console `2 errors, 0 warnings` at start and after Next (unchanged; not investigated).

Flag: `worker_tool_policy.deny_browser_javascript` was not set or verified by this worker. The worker wrote no browser JavaScript; the Playwright wrapper lines in the tool output are the tool's own display.

## Acceptance (this task)

- AC-2 (pre-Finish configuration): **partially evidenced**. Page-1 committed readback and `t10-01` establish the four properties, their String types, lengths 50/64/50/50, PK and Required on FX_Username, blank Property Class, and the identifiers. Page-2 `t10-02` establishes Create Scripts unchecked. Gaps listed above. **Not declared passed.**
- AC-1, AC-3 to AC-12: not reached in T10. No Finish, no Create Form, no check-in, no runtime record.

## Status

Wizard is left OPEN on page 2 with Finish enabled and not clicked. Awaiting coordinator review before the single authorized Finish. No second Next, no Back, no Cancel. Create Form is not answered; under A1 it is a later step requiring "No" once after the single Finish.
