# EXP-137 T9 — Four property rows on Data Maintenance Wizard page 1

Task scope: configure exactly four business-property rows on page 1 of the existing wizard. No Next, no Finish, no Create Form, no Save, no check-in, no Form creation, no runtime record, no Create Scripts change, no Property Class.

## Start identity (fresh snapshot, before any action)

- Tab list (read-only) → tab 1 selected (succeeded) → fresh untargeted snapshot.
- Designer tab 1 (`designer/default.aspx`), footer `ScopeType: User / ScopeName: <masked>` (operator identity screenshots remain the account evidence; the masked name is not re-read by the worker).
- Dialog `Data Maintenance Wizard` open on page 1. IDO Name `FX_LoginUsers`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxlogin`; Form Type `MultiView`; Form Layout `GridLeft`; Device Type `Default`; Site Split unchecked (Table Name and View Name disabled and blank).
- Back disabled; Next enabled; Finish disabled.
- No unexpected dialog, no session-expiry modal, no non-FX_ artifact prompt observed.

## Committed property matrix (fresh snapshots after the final commit; screenshots t9-01 to t9-03)

| Row | Name | Property Class | Data Type | SQL Data Type | Property Length | Primary Key | Required | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|
| 1 | FX_Username | blank | String | nvarchar | 50 | checked | checked | blank | blank |
| 2 | FX_PasswordHash | blank | String | nvarchar | 64 | unchecked | unchecked | blank | blank |
| 3 | FX_Role | blank | String | nvarchar | 50 | unchecked | unchecked | blank | blank |
| 4 | FX_Store | blank | String | nvarchar | 50 | unchecked | unchecked | blank | blank |

- Exactly four rows in the Name grid and exactly four rows in the property grid. No fifth row. The blank add-row placeholder is not a configured row.
- Decimal Precision blank on all rows (not applicable to String).
- Property Class: the column reads blank for all four rows in the first screenshot and in the snapshot. The Property Class combobox was never opened.

## Screenshots (decisive)

- `t9-01-wizard-page1-four-property-rows.png`: shows the IDO Name, Project, Alias and the four Name, Data Type and SQL Data Type rows (FX_Username, FX_PasswordHash, FX_Role, FX_Store; String; nvarchar). Shows the Property Class column header and blank cells, partly clipped on the left. Row 4's Data Type combobox is still an active editor showing `String`. Proves: names, String types, nvarchar SQL types, four rows. Does not prove: lengths or flags (clipped on the right).
- `t9-02-wizard-page1-grid-scrolled-lengths-flags.png`: grid scrolled horizontally once. Shows Property Length 50 / 64 / 50 / 50 and Primary Key checked on row 1 only. Does not show Required or Label String ID.
- `t9-03-wizard-page1-grid-scrolled-required-label.png`: grid scrolled further. Shows Required checked on row 1 only; Label String ID and Default Value blank. Property Class is not visible in this crop; its blank state rests on t9-01 and the snapshot.

## Action accounting (T9)

Mutating browser actions (in order, grouped by row):

- Row 1: Name cell click (1); name typed `FX_Username` (1); Data Type cell click (1); Data Type Open (1); option `String` (1); Property Length cell click (1); length `50` typed (1); Data Type cell click to commit length (first attempt failed "Ref not found", no effect; corrected attempt succeeded) (2); Primary Key checkbox click (1).
- Row 2: Add Row (1); name `FX_PasswordHash` typed (1); Data Type cell click (1); Open (1); option `String` (1); Length cell click (1); length `64` typed (1); Data Type cell click to commit (1).
- Row 3: Add Row (1); name `FX_Role` typed (1); Data Type cell click (1); Open (1); option `String` (1); Length cell click (1); length `50` typed (1); Data Type cell click to commit (1).
- Row 4: Add Row (1); name `FX_Store` typed (1); Data Type cell click (1); Open (1); option `String` (1); Length cell click (1); length `50` typed (1); Data Type cell click to commit (1).
- View-only: mouse wheel horizontal ×2 (no data change).

Totals: Add Row 3; Finish 0; Next 0; Back 0; Create Form 0; Save 0; check-in 0; Create Scripts change 0; Property Class lookup 0; Escape 0; Tab 0; coordinate clicks 0; runtime records 0; worker-authored JavaScript 0 (the tool output shows a Playwright wrapper line per click; the worker authored none).

Fresh untargeted snapshots: 2 in this task (start, and one recovery snapshot). Targeted dialog snapshots: several, used as the normal post-commit readback. One broad `browser_find` ("Name") returned an unfocused result; it was a read and is not counted as recovery. Screenshots: 3 (all succeeded). Tab list: 1; tab select: 1.

## Recovery

- One Ref-not-found after the row 1 length commit (`e934`, the Data Type cell, which the fresh snapshot had re-keyed to `e1019`). Recovery used: one fresh untargeted snapshot, then one corrected inspection/click on `e1019` (succeeded). The recovery allowance for this task is now used. No further recovery was needed.
- No timeouts. No session-expiry modal. No sign-in. No Escape. No Tab.

## Observations and qualifications

1. **Required on row 1 was set together with Primary Key by a single click on the Primary Key checkbox.** The worker clicked Primary Key once (`e942`) and did not click Required. The next snapshot showed both checked. Whether the product sets Required when Primary Key is set, or the click reached both, is not established. The committed state (PK checked and Required checked on FX_Username) matches the brief.
2. Row 4's Data Type combobox is still the active editor (showing `String`, with its Open button) after the last commit. The row's static readback shows `String` / `nvarchar` / `50`. This is the same benign state EXP-134 T9 left on its last row. The coordinator should decide whether to commit it before any later page-2 navigation.
3. The grid's horizontal scroll position was changed for the screenshots. This is a view state only.
4. The Property Class column was never opened, so its blank state is shown by the grid rendering and snapshots, not by a readback of a lookup.
5. The Designer footer scope and the account identity were not re-read in this task beyond the masked `ScopeType: User`. Operator identity screenshots remain the account evidence.
6. `worker_tool_policy.deny_browser_javascript` could not be set or verified by this worker. Unchanged from T8.

## Remaining pre-Finish requirements (not done in T9)

- Page 2: Next once, then verify Create Scripts unchecked (AC-2).
- Full pre-Finish capture of the final configuration (AC-2).
- Single Finish (AC-3) only after the configuration gate; then the Create Form decision (AC-4) under the A1 route (answer No) with its own gate.
- The row 4 active Data Type editor should be resolved by the next task's first committed action (coordinator decision).

## Acceptance

- AC-2 (property half): property names, String types, nvarchar, lengths 50/64/50/50, PK and Required on FX_Username, blank Property Class and Label String ID shown in the committed grid. **Partially met for page 1 only.** Create Scripts and project/alias confirmation on the final pre-Finish capture are still pending. Not declared passed.
- AC-1, AC-3 to AC-12: not reached in T9.
