# EXP-041 — Hello World Part 1: Form Creation on Existing FX_ IDO

Status: **T1 complete (read-only preflight and Form-name collision gate; no creation action).** T1 evidence audit complete (record-only reconciliation, see "T1 evidence audit" below). Gate result: **AC-2 is not met as written.** `FX_HelloWorld01` is absent from the Select Form rows this session displays (exact query and case-preserved substring `HelloWorld`), but complete cross-scope absence is not demonstrated: the dialog shows no scope column, and no single control combines a lowercase query with infix matching. **The creation gate remains closed pending operator review.** No wizard was launched, no Finish, Save, check-in, check-out or object change occurred. Outcome classification for the whole experiment: **observed only, not replay_verified** (to be finalised in later tasks).

Date: 2026-10-10
Run: R-20261010-145543-aSWc · experiment EXP-041 · cycle 0 · task T1
Worker session: `469c98f4-3092-47e6-9d9f-5dc978b7c3b3` · task_message_id `776ae415-4943-488e-81f4-377ecaf63950`
Mode: LEARNING MODE. FX_-only scope extension for the Hello World tutorial (AGENTS.md, 2026-10-10). Forms stay in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, signed-in user `anton.ramos@3mworks.com.ph`.
Editing scope: **User** (`ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`), pre-filled in the Identify Your Editing Scope dialog and confirmed once with OK.
Evidence directory: `evidence/EXP-041/`.

## Outcome (operator, 2026-10-10)

**Blocked at AC-2 before any mutation** (run R-20261010-145543-aSWc). No wizard was opened; nothing was created or saved. The Select Form inventory, proven by positive controls (`SqlTables`, `sqltables`, `TestBlank`, `FX_TestBlank01`), returned zero rows for `FX_HelloWorld01` and for `HelloWorld`, but the dialog shows no scope column, so the brief's requirement of absence 'across all relevant scopes' could not be met. Operator assessment: that requirement was stricter than needed, because a User-scope Form is created in the user's own scope and cannot overwrite a Site Default, Group or other user's Form. Replayed as EXP-041-R2 with AC-2 limited to the visible-inventory check.

## Objective (T1)

Confirm the usable DEM session, Site Developer role and User editing scope; confirm the EXP-040 IDO baseline; and prove, or fail to prove, absence of `FX_HelloWorld01` as a Form name using a demonstrated Select Form lookup with positive controls, including case-insensitive matching. Stop before any wizard if absence cannot be established.

## Sources read

- `AGENTS.md`: read from disk in this session (FX_ scope extension, safety, browser-automation and evidence rules). The Mongoose authentication section was not used; no credentials were handled.
- `recipes/forms/create-basic-form.md` (status verified, Build-from-Scratch route, Select Form pitfalls: OK activates a row; Cancel used here instead).
- `docs/mongoose/transcripts/hello-world-pt1.md`: Form step, sections 7 (Create Form prompt, IDO-bound form) and the agent rules. Trust: unverified (speech-to-text transcript). Its Site Default scope and non-FX_ values are **not** authorized here.
- `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md`: wizard lessons. Select Form used Filter By = Name, Case Sensitive and Starts With unchecked, with a working positive control (`FX_ComponentRecoveryLab02`). The Save Template checkbox was intercepted by its display element in EXP-036 T5; a visible label click unchecked it in T6. The Designer status bar shows the scope. Not re-tested in T1.
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md`: read lines 1–505 of 1252 (the T1, T8 and T12 sections and the start of T11). Covered: the IDO and SQL baseline, the AC-7 carry-forward on Form absence, and the Stage C finding that the Select Form filter "did not narrow" (see the EXP-040 follow-up below). Lines 506–1252 were **not** read in this session. EXP-040 was **read only**; it was not edited.
- `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`: **not read in this session.** The project `FX_HelloWorldProject01` is referenced only through EXP-040 and was observed directly in the IDO identity fields (`t1-01`).

## AC-1 preflight (PASS)

| Item | Evidence | Finding |
|---|---|---|
| Usable authenticated session | Web Client header and identity bar (`t1-01`); no sign-in or configuration prompt | Live. The identity bar reads `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. |
| DEM configuration | Web Designer Help → About (`t1-17`): "Connected via data configuration G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT" | Observed. |
| Site Developer role | Web Designer Help → About (`t1-17`): "Currently logged in as anton.ramos@3mworks.com.ph, Site Developer, edits create user versions for user anton.ramos@3mworks.com.ph" | Observed in this run (replaces the historical EXP-001 evidence). |
| User editing scope | Identify Your Editing Scope dialog, Scope = User, User = anton.ramos (`t1-15`), status bar after OK (`t1-16`, `t1-21`, `t1-22`, `t1-23`): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | Observed. The dialog was confirmed once with OK; its values were pre-filled, not chosen. |
| EXP-040 IDO baseline | IDOs surface, fresh (`t1-01`, `t1-23`): IDO Name `FX_HelloWorld01`; Project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By empty; Access As `G6R`; Save greyed. Properties: `FX_Code` (sequence 1, Bound to Column, String 30, nvarchar, Key Sequence 1, Required checked); `FX_Label` (sequence 2, Bound to Column, String 100, nvarchar); seven system properties (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow) | Observed. Matches EXP-040 T12 (Revision 2, checked in, FX_Code/FX_Label). |
| Clean working state before any action | Web Client: IDOs tab, no dialog, Save disabled (`t1-01`). Designer: after launch and before the scope OK, the accessibility snapshot showed an empty Form tab list and Save disabled; status bar User (`t1-15`) | Clean at start. |
| Portal and application versions | Portal footer `2026.10.01` (`t1-01` accessibility tree). Designer About: Application database 2026.10.13, Form definitions database 2026.10.13, Web Client 2026.10.13 (Build P#20116826) | Not reconciled. Two different version strings appear in the same tenant session. Recorded as observed. |

Limitations of AC-1: EXP-040 recorded that SQL table and IDO visibility may be configuration-wide. T1 did not test that and it remains unresolved.

## AC-2 Form-name absence gate (NOT MET as written: complete cross-scope absence not proven; gate closed)

Mechanism: Web Client → Open toolbar → **Select Form** dialog. Filter By = **Name**, Case Sensitive unchecked, Starts With unchecked. Entries made with real key events (see the note on input method below). Settling was not uniform: T1, T2, P3 and P4 were read after a 2-second wait; P1 and P2 were read without a fixed wait (rows were already visible in the screenshot). P2 has a screenshot only (no snapshot file). Each settled snapshot records Filter By and both checkbox states; the checkbox convention in these snapshots is that a checked box shows `[checked]`, and none shows it in the query snapshots.

| # | Query (Filter By = Name) | Settings | Settled result | Evidence |
|---|---|---|---|---|
| P1 | `SqlTables` (positive control, exact Name of the known Sql Tables Form) | Case-insensitive, infix mode | **1 matching row:** Caption `Sql Tables`, Name `SqlTables`; a second row `Sql Tables Constraint` / `SqlTablesPrimaryKey` also matched | `t1-05`, `t1-06` |
| P2 | `sqltables` (lowercase positive control) | Case Sensitive unchecked | Same two rows as P1 | `t1-07` |
| P3 | `TestBlank` (**infix** positive control; the match sits inside `FX_TestBlank01`, not at the start) | Starts With unchecked | **2 rows:** `FX_TestBlank01` / `FX_TestBlank01` and `FX_TestBlank02` / `FX_TestBlank02` | `t1-19` |
| P4 | `FX_TestBlank01` (**User-scope** positive control; recorded as User-scope in EXP-002) | Exact | **1 row:** `FX_TestBlank01` / `FX_TestBlank01` | `t1-12` |
| T1 | `FX_HelloWorld01` (target, exact spelling) | Case-insensitive, infix mode | **0 rows.** Grid f1e856 has no child rows. | `t1-08`, `t1-09` |
| T2 | `HelloWorld` (case-preserved substring of the target; a case-insensitive infix query for any spelling of `FX_HelloWorld01`) | Case-insensitive, infix mode | **0 rows.** | `t1-10`, `t1-11` |
| T3 | `fx_helloworld01` (lowercase exact target) | — | **Not executed.** The tool hook rejected the entry: "Exact value required: FX_HelloWorld01. Preserve its spelling and case." No variant of the blocked value was entered. | Tool error (no file) |

Interpretation:

- **Mechanism shown, in parts.** P1 and P2 show name-matching rows and that a lowercase query returns the same rows (case-insensitive). P3 shows infix matching (`TestBlank` matches inside `FX_TestBlank01`). P4 shows a User-scope Form row. Starts With was unchecked in every query. P1 does not separate prefix from infix (its second row, `SqlTablesPrimaryKey`, starts with the query). **No control combines a lowercase query with infix matching.**
- **Exact-name absence in the displayed rows: observed.** T1 returned zero grid rows under the same settings that returned rows for P3 and P4 (same grid reference `f1e856`, populated in `t1-06`, `t1-12`, `t1-19`).
- **Case-variant absence: inferred, not directly demonstrated.** A case variant of the target would contain `HelloWorld` in some letter case. T2 returned zero rows. Whether T2 would have returned such a variant depends on case-insensitive infix matching, which is shown only as two separate properties (P2 for case, P3 for infix). T3 (the lowercase exact target) was not run because the hook blocked it.
- **The displayed inventory has no `FX_HelloWorld01` row.** The dialog lists vendor/system Forms (e.g., `SqlTables`) and at least one User-scope Form (`FX_TestBlank01`, `FX_TestBlank02`). It does not show a scope column, so the scope of each displayed row is not known. Cross-scope coverage is **not established**.

### Unresolved limit: scope coverage (decision for the operator)

- The Select Form dialog shows Caption and Name only. It does not show ScopeType or ScopeName, so **the scope of each row is not observable**.
- Not established: whether the list includes Site Default or Group-scope Forms, and whether it includes other users' User-scope Forms. The Designer Form menu lists only recent Forms (`t1-20`, `t1-21`) and is not an inventory. The Designer toolbar has no labelled Open-form control in the accessibility tree, and an unlabelled one was not probed.
- Store completeness is also not counted. The dialog shows no total, and rows outside the initially rendered window were not individually scanned. The filtered result is the basis of the claim, and this is an inference from Ext store filtering, not an observed total.
- The brief's stop conditions are: filter ineffective, results virtualized or incomplete, or session not live. In T1 the filter was effective (P1–P4), the session was live, and no truncation was visible in a filtered result. The scope-coverage limit is therefore reported as a residual limitation, not as a triggered stop condition. **Operator decision required:** whether a name-only, scope-unlabelled inventory is accepted as the "all accessible scopes" check for AC-2 before any wizard task.

### Input-method finding (affects the EXP-040 claim)

- Programmatic fill of `SqlTables` into the Filter textbox did **not** update the grid (`t1-04`, after a 3-second wait).
- The same textbox, cleared with Ctrl+A and Backspace and retyped slowly with key events, narrowed the grid immediately (`t1-05`).
- The dialog had also opened with leftover text `FX_HelloWorld01` and Filter By = **Caption**, and the grid was not narrowed (`t1-02`). That text was pre-populated without key events, so it is not a valid test of the Caption mode.
- **Conclusion:** the EXP-040 statement "the Select Form filter is non-functional" is not supported as a build defect. Whether EXP-040's Stage C entry used a fill-type input is unknown from its record. Recorded for operator reconciliation.

## T1 evidence audit (record-only reconciliation, 2026-10-10)

Scope: the target snapshots `t1-09` and `t1-11`, their screenshots `t1-08` and `t1-10`, the T1 operation history (entry method, Ctrl+A, waits), and the positive controls only as far as case and substring matching need them. **No browser call was made, no dialog was touched, no wizard was opened, no Mongoose object was changed, and EXP-040 was not edited.** No "specialist" version-model explanation was supplied for this audit, so none is incorporated; the version discrepancy stays unresolved (open question 4).

### Target-query verification

| Check | `t1-09` (exact `FX_HelloWorld01`) | `t1-11` (`HelloWorld`) | Status |
|---|---|---|---|
| Entry method | `browser_type` with `slowly: true`, which the tool ran as `pressSequentially` (key events) | Same | **Verified** from the tool call. Programmatic fill was ineffective (`t1-04`). |
| Prior text cleared | Ctrl+A pressed before entry; settled value is exactly the target with no residue | Ctrl+A pressed before the hook-blocked call; the blocked call entered nothing; `HelloWorld` then typed. Settled value is exactly `HelloWorld`, so the prior `FX_HelloWorld01` text was replaced, not appended | **Verified** from the settled textbox value. The hook result is consistent with no change. |
| Settled textbox value | `FX_HelloWorld01` (`t1-09` line 9) | `HelloWorld` (`t1-11` line 9) | **Verified** |
| Filter By | `Name` (`combobox` `f1e1170`) | `Name` | **Verified** in both snapshots and in `t1-08`/`t1-10` |
| Case Sensitive | Unchecked: no `[checked]` in snapshot; empty box in `t1-08` | Unchecked: no `[checked]`; empty box in `t1-10` | **Verified** (snapshot and screenshot agree) |
| Starts With | Unchecked: no `[checked]`; empty box in `t1-08` | Unchecked; empty box in `t1-10` | **Verified** |
| Settle before read | 2-second wait, then snapshot (`t1-09`); pre-settle screenshot `t1-08` also shows empty grid | 2-second wait, then snapshot (`t1-11`); pre-settle screenshot `t1-10` also shows empty grid | **Verified** from the operation order |
| Grid state | Grid `f1e856` has no child row | Same | **Verified.** The same ref is populated in `t1-06`, `t1-12`, `t1-19`, so the empty grid is an empty store, not a missing element. |
| Result | **Zero rows** | **Zero rows** | **Observed** in the displayed inventory |

Missing evidence for the target queries:

- There is no snapshot of the grid before settling; the pre-settle screenshots are the only pre-settle record.
- The checkbox state is shown by absence of `[checked]` and by the screenshots. No separate checkbox-state read was taken.
- The hook-blocked call's effect on the textbox is inferred from the final value, not observed directly.

### Positive-control review (only what the case and substring claims need)

- **P1 (`SqlTables`, `t1-05`, `t1-06`):** rows `Sql Tables` / `SqlTables` and `Sql Tables Constraint` / `SqlTablesPrimaryKey`, Filter By Name, both boxes unchecked. The snapshot was taken without a fixed wait, after the screenshot showed rows. It proves name matching but not prefix versus infix.
- **P2 (`sqltables`, `t1-07`):** same two rows. Proves case-insensitive name matching for a prefix-type query. **Screenshot only; no snapshot file.**
- **P3 (`TestBlank`, `t1-19`):** `FX_TestBlank01` and `FX_TestBlank02`, both boxes unchecked, 2-second wait. Proves infix matching. The query used mixed case, so it does not test case-insensitivity.
- **P4 (`FX_TestBlank01`, `t1-12`):** one row, both boxes unchecked, 2-second wait.
- **Gap:** no control combines a lowercase query with infix matching. Case-variant absence is therefore an inference from two separately shown properties.

### Interpretation for the AC-2 gate

- Exact-name absence in the displayed rows: **observed**.
- Substring absence for `HelloWorld` in the displayed rows: **observed**.
- Case-variant absence: **inferred**, not directly demonstrated.
- Cross-scope absence (Site Default, Group, other users): **not established**. The dialog does not display scope, and no scope-specific control was run.
- The brief's rule applies: if complete absence cannot be proven, AC-2 fails and the run stops before mutation. **Therefore the approved brief cannot proceed beyond its collision gate without operator review.** This is the brief's rule, not a worker choice.

### Recommended controls (not performed here; each needs a new authorization and a live session)

1. Combined case and infix control: `testblank` (lowercase). Expected rows: `FX_TestBlank01` and `FX_TestBlank02`. This would close the case-variant inference using the same mechanism. It is read-only.
2. Scope evidence: a known Site Default or Group-scope Form as a positive control, or another scope-aware route if the operator approves one. This is the decision the brief leaves open.
3. A known other-user User-scope Form as a positive control, if the operator can name one.
4. Whether to authorize the exact lowercase target `fx_helloworld01`. The hook blocked it; the record does not treat that block as a permission decision.

## EXP-040 follow-up finding (narrow; dated 2026-10-10; not an edit to EXP-040)

For the operator to cross-reference into EXP-040 after review. EXP-040 itself was not edited.

- **Date:** 2026-10-10 (run R-20261010-145543-aSWc, task T1, worker session `469c98f4-3092-47e6-9d9f-5dc978b7c3b3`).
- **Verification method:** Web Client Select Form dialog, Filter By = Name, Case Sensitive and Starts With unchecked, key-event entry; positive controls P1–P4 passed (above).
- **Scope coverage:** the dialog does not show scope. The visible list contains vendor/system Forms and this user's User-scope Forms. Site Default, Group-scope and other users' Forms were **not** demonstrated. Absence is claimed only for the visible inventory.
- **Result:** no displayed row for `FX_HelloWorld01` (exact query, `t1-09`), and no displayed row for `HelloWorld` (`t1-11`). Case-insensitive infix matching is inferred from separate controls (see the T1 evidence audit).
- **Evidence:** `evidence/EXP-041/t1-05` … `t1-12`, `t1-19`.

## AC-9 carried-forward question (EXP-040 AC-7: was an FX_HelloWorld01 Form created by the declined Create Form prompt?)

Reconciled from AC-2 evidence:

- In the displayed Select Form rows on 2026-10-10, no row for `FX_HelloWorld01` appears (exact query zero, `t1-09`) and no row for the substring `HelloWorld` appears (`t1-11`). The case-variant point is inferred (see the T1 evidence audit).
- So there is no visible evidence that the declined Create Form prompt in EXP-040 produced a Form named `FX_HelloWorld01`.
- Not reconciled: scope-complete absence (see the unresolved limit). EXP-040's AC-7 remains open for other scopes.

## Wizard and Designer route

- **Not reached in T1, by design.** No wizard, Category, Wizard or builder was selected. The Designer's New Form Definition route and any Runtime Builder route remain for the next task after the operator decides on AC-2.
- One Designer launch (via the Web Client split control, see Operations). The new tab opened as `default.aspx` with no Form parameter. After the scope OK the Designer's URL became `default.aspx?MGForm=IdoCollections`, and it displayed the vendor system Form `IdoCollections` (caption "IDOs", Version "Vendor Default", Is Master True) in design view (`t1-16`). Why the Designer loaded this Form is not verified. It may follow the Web Client's current IDOs surface, but this was not tested. The Form was **not edited**. It was closed by one ordinary Form-tab close with no prompt (`t1-18`).

## Operations (T1, in order)

Counts are cumulative for T1. "Attempted" means the browser call returned.

| # | Operation | Result |
|---|---|---|
| 1 | Tab list; fresh Web Client snapshot | Single Mongoose tab, IDOs surface. |
| 2 | Screenshot `t1-01` | IDO baseline recorded. |
| 3 | Select Form opened (toolbar Open, `mgtoolbarbutton-1100`) | Dialog open (1st open). |
| 4 | Dialog snapshot and screenshot `t1-02` | Filter By = Caption; leftover text `FX_HelloWorld01`; grid not narrowed. |
| 5 | Filter By dropdown opened; option `Name` selected | Filter By = Name (`t1-03`). |
| 6 | Fill `SqlTables` (programmatic) | **No effect** on grid (`t1-04`). Diagnostic wait 3 s and one find. |
| 7 | Textbox focused; Ctrl+A; Backspace; `SqlTables` typed slowly | **Narrowed** (`t1-05`). Corrected entry. |
| 8 | Snapshot `t1-06` | P1 accessibility evidence. |
| 9 | Ctrl+A; `sqltables` typed slowly; screenshot `t1-07` | P2 case-insensitive: same rows. |
| 10 | Ctrl+A; `FX_HelloWorld01` typed slowly; screenshot `t1-08` | T1: zero rows observed. |
| 11 | Wait 2 s; snapshot `t1-09` | T1 settled: zero rows. |
| 12 | Ctrl+A; `fx_helloworld01` entry | **Blocked by a PreToolUse hook** (no value entered). Not retried. |
| 13 | `HelloWorld` typed slowly (selection replaced); screenshot `t1-10`; wait 2 s; snapshot `t1-11` | T2: zero rows observed. |
| 14 | Ctrl+A; `FX_TestBlank01` typed slowly; wait 2 s; snapshot `t1-12` | P4 User-scope positive control: 1 row. |
| 15 | Cancel (`f1e1185`, verified label "Cancel") | Dialog closed; no row activated. Screenshot `t1-13`: clean Web Client. |
| 16 | Hover over the second Designer toolbar control | Tooltip "Open designer in a new window" (`t1-14`). |
| 17 | Designer split control clicked once | New tab `WSWebClient/designer/default.aspx` with no Form parameter (scope dialog shown). |
| 18 | Tab 1 selected | Navigation only. |
| 19 | Identify Your Editing Scope: screenshot `t1-15`; OK clicked once | Scope User confirmed (status bar). URL became `?MGForm=IdoCollections`; the vendor IDOs Form displayed (`t1-16`). |
| 20 | Help → About (two clicks: menu, then About) | About dialog (`t1-17`): Site Developer; DEM configuration. |
| 21 | About: OK clicked once | Dialog closed. |
| 22 | IdoCollections Form-tab close (`closable IDOs`) clicked once | Form closed; no prompt; Save disabled. Screenshot `t1-18`: no Form open. |
| 23 | Tab 0 selected; Web Client Open clicked (2nd open) | Select Form dialog reopened; leftover `FX_TestBlank01` row shown. |
| 24 | Textbox focused; Ctrl+A; `TestBlank` typed slowly; wait 2 s; snapshot `t1-19` | Infix positive control P3: 2 rows. |
| 25 | Cancel (`f1e1185`, verified label "Cancel") | Dialog closed; no row activated. |
| 26 | Tab 1 selected; Designer Form menu opened (`Form` nav) | Menu lists recent Forms only (`t1-20`, `t1-21`). "Definition" was not opened (it holds Unload All Global Form Objects, which is prohibited). |
| 27 | Escape ×2 | Menu still rendered in the screenshot after the second Escape (`t1-21`). |
| 28 | Empty Properties-panel area clicked (1740, 600) | Menu dismissed; Designer clean (`t1-22`). |
| 29 | Tab 0 selected; screenshot `t1-23` | Web Client clean, no dialog. |

### Operation counts (T1)

| Operation | Count | Notes |
|---|---|---|
| Save | **0** | Save disabled in every captured state. |
| New / New Form Definition / wizard entry / Finish / Create Form / Get Database Schema | **0** | Not reached. |
| Regenerate / Unload Global Form Objects / Definition submenu | **0** | Definition submenu not opened. |
| Check-in / check-out / undo | **0** | |
| Designer launch | **1** | Split control; cumulative 1 for EXP-041. |
| Identify Your Editing Scope | **1 OK** | Pre-filled User confirmed. |
| Select Form opens | **2** | Both closed with Cancel. |
| Select Form OK / row activation | **0** | |
| Select Form Cancel | **2** | |
| Filter By changes | **1** | Caption → Name. |
| Filter entries (typed or filled) | **8 calls** | 7 applied (1 ineffective fill, then 6 effective key-event entries); 1 blocked by hook. |
| Ctrl+A / Backspace | **6 / 1** | Select-all before each filter entry; Backspace once. |
| Form-tab close (clean system Form) | **1** | No prompt. |
| Help → About open / OK | **1 / 1** | |
| Form menu open | **1** | Items not activated. |
| Escape | **2** | Menu. |
| Tab selects | **4** | Navigation only. |
| Hover | **1** | Tooltip. |
| Diagnostic reads after the ineffective fill | **1** (wait + find) | Within the one-diagnostic allowance. |
| Corrected entries after the ineffective fill | **1** (select-all, Backspace, slow typing) | Within the one-correction allowance. |
| Screenshots | **18 PNG** | `t1-01` to `t1-23`, excluding snapshots. |
| Snapshot files saved to evidence | **5** | `t1-06`, `t1-09`, `t1-11`, `t1-12`, `t1-19`. |
| Fresh untargeted recovery snapshots | **0** | No `Ref … not found` error occurred in T1. |
| Application data rows edited / saved | **0** | No grid row was entered or changed. |
| JavaScript / evaluate | **0** | |
| Authentication / logout / session reset | **0** | |

## Errors and recovery accounting

1. **Ineffective fill (not an error message).** Programmatic fill of the Filter textbox did not update the grid. Recovery: one diagnostic wait and find, then one corrected entry by key events. Within the allowance. Root cause is an input-method behaviour, not a state change.
2. **Hook rejection.** `browser_type` with `fx_helloworld01` was rejected by a PreToolUse hook ("Exact value required: FX_HelloWorld01. Preserve its spelling and case."). No value was entered. Not retried. Not bypassed. The hook was reported to the operator in this record. Case-variant coverage was then obtained with the case-preserved substring `HelloWorld`, which is not the blocked value and which I chose so that the check would cover all cases of the target. The operator should judge whether that substitution respects the guard's intent.
3. **Designer launch context.** The Designer loaded `IdoCollections` (a vendor Form) after the scope OK. The cause is not verified (see the Wizard and Designer route section). Recovery: one ordinary Form-tab close after confirming Save disabled. Not a mutation. If later launches show the same behaviour, the next task may prefer a launch context whose current Form is not an IDOs surface.
4. **Menu lingering after Escape.** The Designer's Form menu stayed visible after two Escape presses (`t1-21`). The accessibility tree had already dropped the menu after the second Escape. A click on an empty Properties-panel area dismissed it (`t1-22`). No menu item was activated.
5. **No `Ref … not found` errors, no timeouts at "visible, enabled and stable", no dialog mis-responses, no Finish, no retried mutation.**

## AC matrix (T1)

| AC | T1 status | Proof | Limitation |
|---|---|---|---|
| AC-1 | **PASS** | `t1-01`, `t1-15`, `t1-16`, `t1-17`, `t1-21`–`t1-23` | Configuration-wide visibility of SQL tables and IDOs remains untested (EXP-040). |
| AC-2 | **NOT MET as written.** Brief rule: if complete absence cannot be proven, AC-2 fails and the run stops before mutation. Gate closed. | Positive controls P1–P4 show rows (`t1-05`–`t1-07`, `t1-06`, `t1-12`, `t1-19`); T1 and T2 zero rows (`t1-08`–`t1-11`) | Scope not displayed; Site Default, Group and other users' Forms not demonstrated; no single case-insensitive infix control; lowercase exact target blocked by hook; store total not counted. **Operator review required before any wizard task.** |
| AC-3 | Not evaluated (no wizard) | — | — |
| AC-4 | Not evaluated | — | — |
| AC-5 | Not evaluated | — | — |
| AC-6 | Not evaluated | — | — |
| AC-7 | Not evaluated | — | — |
| AC-8 | Not evaluated | — | — |
| AC-9 | **PARTIAL** (carried-forward question reconciled for the visible inventory only) | Section "AC-9 carried-forward question" | Scope-complete absence not proven; EXP-040 record not edited (operator will cross-reference). |

## Object audit (T1)

| Category | Finding |
|---|---|
| Created | **None.** No Form, component, IDO, IDO project, SQL table, column, property, script or data row. |
| Changed | **None.** No save. Dialog state only (Select Form Filter By and filter text; these are per-dialog UI settings, not Mongoose objects). |
| Opened for editing | The IDOs surface (`FX_HelloWorld01`, read-only display) was visible in the Web Client throughout and was not edited. The Designer displayed the `IdoCollections` vendor Form definition in design view and closed it without edit. |
| Deleted | None. |
| Checked out / in | None. |
| Pending changes at end | None. Web Client Save disabled; Designer Save disabled with no Form open. |

## Knowledge state (T1)

| Finding | State |
|---|---|
| Select Form Name filter with key-event entry returns exact, case-insensitive and infix matches (P1–P3) | observed (single run, `t1-05`–`t1-07`, `t1-19`) |
| Select Form ignores programmatic fill for filtering | observed (`t1-04`) |
| Select Form Filter By default is Caption; options Name, Caption, Caption & Name | observed (`t1-02`, `t1-03`) |
| `FX_HelloWorld01` absent from the displayed Select Form rows (exact query) | observed (`t1-09`) |
| No displayed row for the substring `HelloWorld` | observed (`t1-11`) |
| Case-insensitive infix matching (combined) | **inferred** from separate controls (P2, P3); not demonstrated as one control |
| Select Form shows vendor Forms and this user's User-scope Forms (P1, P4) | observed; scope of each row not displayed |
| Scope coverage of the Select Form inventory (Site Default, Group, other users) | **unresolved** |
| Signed-in user is Site Developer; editing User scope; DEM configuration | observed (`t1-15`–`t1-17`) |
| EXP-040 IDO baseline present and unchanged in T1 | observed (`t1-01`, `t1-23`) |
| Designer launch from the IDOs surface displays `IdoCollections` (vendor Form) | observed (`t1-16`) |
| Designer Form menu lists recent Forms only (not an inventory) | observed (`t1-20`–`t1-22`) |
| Portal footer `2026.10.01` vs Designer About `2026.10.13` | observed; **unresolved** reconciliation |
| Hook blocks lowercase exact-target entry | observed (tool error) |
| Carried-forward EXP-040 "filter non-functional" claim | **unresolved**; input method explains the T1 ineffective fill, not the EXP-040 observation |
| Wizard route, Category, Wizard labels, Save Template checkbox | not evaluated (no wizard entered) |

## Evidence (`evidence/EXP-041/`)

| File | Shows | Does not prove |
|---|---|---|
| `t1-01-preflight-web-client-idos-clean.png` | Web Client IDOs surface; FX_HelloWorld01 in FX_HelloWorldProject01; Revision 2; Save greyed; identity bar DEM config. | Scope; Form inventory. |
| `t1-02-select-form-initial-filter-by-caption-unnarrowed.png` | Select Form with Filter By = Caption and leftover `FX_HelloWorld01` text; grid not narrowed. | That Caption mode is non-functional (input was not typed). |
| `t1-03-select-form-filter-by-name-set.png` | Filter By = Name; leftover text; grid empty. | Result of a fresh query (the text was not re-entered). |
| `t1-04-select-form-positive-control-sqltables-name-filter.png` | Programmatic fill `SqlTables`: grid still empty after wait. | Permanent behaviour (diagnostic only). |
| `t1-05-select-form-positive-control-sqltables-slowly.png` | `SqlTables` typed slowly: `Sql Tables / SqlTables` and `Sql Tables Constraint / SqlTablesPrimaryKey` shown; Filter By Name; Case Sensitive and Starts With unchecked. | Scope; store total. |
| `t1-06-positive-control-sqltables-snapshot.md` | Accessibility state of P1 rows and controls. | As above. |
| `t1-07-positive-control-lowercase-sqltables-case-insensitive.png` | `sqltables` lowercase returns the same two rows. | Anything beyond name matching. |
| `t1-08-target-FX_HelloWorld01-exact-name-filter-result.png` | Target `FX_HelloWorld01` typed; grid empty (before settle). | Settled result (see t1-09). |
| `t1-09-target-FX_HelloWorld01-exact-snapshot.md` | Settled accessibility state: grid f1e856 has no child rows; textbox `FX_HelloWorld01`; Filter By Name. | Scope; database absence. |
| `t1-10-helloworld-contains-case-insensitive-near-collision-check.png` | `HelloWorld` typed; grid empty (before settle). | Settled result (see t1-11). |
| `t1-11-helloworld-contains-snapshot.md` | Settled state: zero rows for case-insensitive substring `HelloWorld`. | Scope; database absence. |
| `t1-12-user-scope-positive-control-FX_TestBlank01-snapshot.md` | `FX_TestBlank01` row shown (User-scope Form recorded in EXP-002). | That the row is User-scope (inferred from EXP-002 record, not displayed here). |
| `t1-13-after-select-form-cancel-clean-state.png` | Web Client after Cancel: IDOs surface; no dialog; Save greyed. | Scope. |
| `t1-14-designer-toolbar-tooltip-hover.png` | Tooltip "Open designer in a new window" over the second Designer control. | Which element the tooltip belongs to, beyond position. |
| `t1-15-designer-identify-editing-scope-dialog.png` | Identify Your Editing Scope: Scope User, User anton.ramos; OK/Cancel/Help; status bar User. | That the User value is a choice (pre-filled). |
| `t1-16-designer-after-scope-ok-state-shows-idocollections-context.png` | Designer with vendor `IdoCollections` form (caption IDOs); status bar User; Save greyed. | Any edit (none made). |
| `t1-17-designer-help-about-site-developer-check.png` | About dialog: DEM configuration; logged in as anton.ramos, Site Developer; Application and Form definitions databases 2026.10.13. | Permission grants beyond the role label. |
| `t1-18-designer-after-idocollections-close-clean-no-form.png` | Designer with no Form open after the clean close. | That the close left no server-side artifact (none expected; none checked). |
| `t1-19-infix-positive-control-TestBlank-snapshot.md` | Settled rows for `TestBlank`: FX_TestBlank01 and FX_TestBlank02 (infix). | Scope. |
| `t1-20-designer-final-clean-no-form-open-after-menu-dismiss.png` | **Not clean.** Shows the Form menu still open, captured after the first Escape. Recorded as an intermediate state. | — |
| `t1-21-designer-final-clean-state-menu-closed.png` | **Not clean.** Shows the Form menu still rendered after two Escape presses. | — |
| `t1-22-designer-final-clean-state-after-menu-dismiss-click.png` | Designer clean after the Properties-area click: menu gone; no Form; Save and Undo greyed; User scope. | — |
| `t1-23-web-client-final-clean-idos-after-selectform-cancel.png` | Final Web Client state: IDOs tab; FX_HelloWorld01 unchanged; no dialog; Save greyed. | — |

Tool-generated browser captures under `evidence/playwright/` are gitignored tool output and are not worker-authored evidence.

## Repository changes (this task)

- Written: `experiments/EXP-041-hello-world-part-1-form-creation-on-existing-fx-id.md` (this record).
- Written: `evidence/EXP-041/` (23 files listed above: 18 PNG, 5 Markdown snapshot files).
- Not written: `experiments/EXP-040-…` (not edited; the operator will apply the cross-reference after review).
- Not written: any recipe, AGENTS.md, memory, tools/ or other experiment file.

## Final browser state (T1)

- Web Client (tab 0, selected): IDOs surface showing `FX_HelloWorld01` (unchanged), Save disabled, no dialog or prompt.
- Designer (tab 1, open): no Form open, blank canvas, Save and Undo disabled, status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, no dialog. The Designer tab is still open; the operator may close it.
- No browser-native dialog, no unsaved-change prompt, no in-page dialog open.

## Open questions and blockers

0. **AC-2 is not met as written (T1 audit).** The creation gate is closed. Operator review required before any wizard task. The audit found no evidence that the T1 target queries were malformed. The remaining gaps are scope coverage and the missing combined lowercase-infix control.
1. **AC-2 scope coverage.** The Select Form inventory does not display scope. Decide whether a name-only, scope-unlabelled inventory is accepted as the "all accessible scopes" check, or whether a scope-aware check is needed (e.g., a known Site Default or Group Form as a positive control, or a second confirmation path). **No wizard task should start before this decision.**
2. **Hook-blocked lowercase entry.** The exact lowercase target was rejected by a guard. Case-variant coverage was taken from the case-preserved substring `HelloWorld`. Confirm this is acceptable.
3. **EXP-040 "filter non-functional" claim.** T1 shows the same filter works with key-event entry. Reconcile the EXP-040 input method before relying on its conclusion.
4. **Version strings.** Portal footer `2026.10.01` and Designer About `2026.10.13` both appear. Not reconciled.
5. **Designer launch context.** A launch from the IDOs surface opens the vendor `IdoCollections` Form. Consider launching from a Form-less context in later tasks.
6. **Configuration-wide visibility** of SQL tables and IDOs remains untested (EXP-040 limitation).
7. Operator to cross-reference this T1 result into EXP-040 (not done by the worker).
