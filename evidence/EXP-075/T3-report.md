# EXP-075 — T3 report: New Property wizard (once) and one Finish — FX_Address on FX_HelloWorld01 (cycle 2)

Task message `12c39aa0-e069-4ee6-b369-9f6d180f00e3`; worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

**Scope:** one New Property wizard, one Finish, no Save (Form was clean after Finish), no Check Out, no recovery close/reopen, no target query, no runtime Refresh. Observed only.

**Result:** One new Bound property `FX_Address` was created on IDO FX_HelloWorld01 (project FX_HelloWorldProject01). It is bound to column FX_Address (Bind To readback `fxhw.FX_Address` before Finish; Column Name `FX_Address` in the grid after Finish). Data Type String, Length 150, Column Data Type nvarchar. No Property Class. No Label String ID field was offered by the wizard, so no label was set. Finish returned no dialog or text; the wizard closed; the Form is clean (toolbar Save disabled). The nine baseline properties are unchanged on every readable field. FX_HelloWorld01 remains checked out to the operator (Check In enabled, Locked By the operator, Revision Num 2, Revision Date 10/10/2026). Persistence has NOT been verified yet (the recovery pair is the next task).

## Pre-wizard gates (fresh, read-only)

| Gate | Observed |
| --- | --- |
| Tab list before select | Tab 0 Designer (not touched); tab 1 Web Client. Tab 1 selected. |
| Form | IDOs tab selected; IDO Name `FX_HelloWorld01`. |
| Project / base table / alias | `FX_HelloWorldProject01`; Tables sub-tab one row `FX_HelloWorld01` / `fxhw` / `Primary Base` / `Inner` (find readback). |
| Revision | `2`; Revision Date `10/10/2026`. |
| Locked By | the operator's login (accessibility value; the harness renders it as the login placeholder; the identity bar shows the same account). Not another user. |
| Check state | Check In enabled; Undo Check Out enabled; row checkbox checked (from T2). No second Check Out performed. |
| Toolbar Save | disabled. |
| Status bar | `Check Out (IDOs 1 of 1)` before the wizard (not Filter in Place). |
| Properties before wizard | nine rows (FX_Code 1 … InWorkflow 9); `/address/i` on the page: no matches. |
| Gate verdict | All gates passed. No conflict, no ambiguity. |

Evidence: `t3-01-pre-wizard-baseline-checkout-state-nine-properties.png`.

## Wizard (opened once)

1. **New Property** clicked once (ref from a fresh find). favoriteContext became `IdoPropertyWizard`; the wizard opened as a tab named "IDO Property Wizard".
2. **Page 1 (initial):** IDO Name `FX_HelloWorld01` (labelled "Property Name:" in the accessibility tree, the same mislabel EXP-061 recorded). Binding radio **Bound** active (default retained). Derived, Unbound and Subcollection not selected. Back disabled; Next enabled; Finish disabled. Evidence `t3-02`.
3. **Next** clicked once (page 1 to page 2). Page 2 (Property Attributes) initially blank: Bind To empty, Property Name empty, Property Class empty, Data Type empty with its Inherit checkbox unchecked, Length empty, Decimal empty, Column Data Type empty with its Inherit checkbox unchecked, plus an unlabelled text area with an Inherit checkbox. Next disabled; Finish shown enabled (not clicked at this point). Evidence `t3-03`.
4. **Bind To lookup opened** (Open trigger, one click). The list had ten `fxhw.` entries: CreateDate, CreatedBy, FX_Address, FX_Code, FX_Label, InWorkflow, NoteExistsFlag, RecordDate, RowPointer, UpdatedBy. Exactly one `fxhw.FX_Address`. (The lookup was closed by selecting an option, not by Escape.)
5. **`fxhw.FX_Address` selected** by one click on its option cell. Readback: Bind To combobox `fxhw.FX_Address`.
6. **Property Name:** the wizard had already populated `FX_Address` after the Bind To selection (the same auto-population EXP-061 recorded). The brief's one plain fill was performed once with `FX_Address`; the value is `FX_Address`.
7. **Property Class:** left blank (not touched).
8. **Data Type / Column Data Type / Length:** populated by the wizard after the binding (no class): Data Type `String`; Length `150`; Column Data Type `nvarchar`; Decimal blank. The Data Type and Column Data Type Inherit checkboxes are disabled (no class). Gates met (String / 150 / nvarchar). Not inherited from a Property Class. Evidence `t3-04`.
9. **Label String ID:** the wizard shows no Label String ID field (find for "Label": no match on the wizard). Label left unset (omission recorded). The unlabelled text area at the bottom was not typed into and its identity is not established (it may be Default Value; not verified).
10. Pre-Finish readback (accessibility and screenshot): Bind To `fxhw.FX_Address`; Property Name `FX_Address`; Property Class empty; Data Type `String`; Length `150`; Column Data Type `nvarchar`; Next disabled; Finish enabled. No consequential prompt; no conversion prompt.

## Finish (invoked once)

- **Native response:** no dialog, no alert, no confirmation or error text. The wizard tab closed; the IDOs tab became active; the status bar read `New Property (IDOs 1 of 1)` (the record's position text; this is the post-Finish state, not Filter in Place). Settled after 3 s.
- The IDOs Form is clean: toolbar Save disabled. **No Save was needed; none was performed.**
- Checkout state unchanged: Locked By the operator; Check In enabled; Undo Check Out enabled; Revision Num `2`; Revision Date `10/10/2026`.

## Post-Finish verification (inventory)

Ten rows now. Row 10 is new; rows 1–9 match the T2 baseline on every readable field (Property Name, Sequence, Property Class blank, Property Type Bound to Column, Column Name, Key Sequence, Data Type, Length, Column Type, Read Only, Required, Upper Case, Pseudo Key, Read Only Record):

| # | Property | Seq | Class | Type | Column | Key Seq | Data Type | Length | Column Type | Read Only | Required | Pseudo Key | Read Only Record |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Code | 1 | blank | Bound to Column | FX_Code | 1 | String | 30 | nvarchar | no | yes | no | no |
| 2 | FX_Label | 2 | blank | Bound to Column | FX_Label | 0 | String | 100 | nvarchar | no | no | no | no |
| 3 | CreatedBy | 3 | blank | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType | yes | no | no | no |
| 4 | UpdatedBy | 4 | blank | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType | yes | no | no | no |
| 5 | CreateDate | 5 | blank | Bound to Column | CreateDate | 0 | Date | (blank) | CurrentDateType | yes | no | no | no |
| 6 | RecordDate | 6 | blank | Bound to Column | RecordDate | 0 | Date | (blank) | CurrentDateType | yes | no | no | no |
| 7 | RowPointer | 7 | blank | Bound to Column | RowPointer | 0 | GUID | (blank) | RowPointerType | yes | no | no | no |
| 8 | NoteExistsFlag | 8 | blank | Bound to Column | NoteExistsFlag | 0 | Byte | (blank) | FlagNyType | no | no | no | no |
| 9 | InWorkflow | 9 | blank | Bound to Column | InWorkflow | 0 | Byte | (blank) | FlagNyType | no | no | no | **yes** |
| 10 | **FX_Address** | 10 | blank | Bound to Column | **FX_Address** | 0 | **String** | **150** | **nvarchar** | no | no | no | no |

- Rows 1–2 right-hand flags were read from the accessibility rows (the grid showed them in T2 and T3 readbacks). Rows 3–10 are visible in `t3-06`.
- Exactly one FX_Address property (case-insensitive search of the page: only the grid row and no other address text; the snapshot's only /address/ hit is the row itself).
- The Property Class column is blank for row 10 (no class, as specified).
- The label is not visible in this grid (the wizard offered no label field); it is recorded as unset.
- The alias `fxhw` is not shown in the grid; the binding `fxhw.FX_Address` is the pre-Finish readback, and the grid shows Column Name `FX_Address`.

## Evidence files (this task)

| File | Shows | Does not prove |
| --- | --- | --- |
| `t3-01-pre-wizard-baseline-checkout-state-nine-properties.png` | IDOs Form before the wizard: FX_HelloWorld01; Revision 2 / 10/10/2026; Locked By operator (clipped `anton.ramos@3…`); Check In and Undo enabled; row checkbox checked; Save greyed; nine rows (rows 1–8 visible). Status `Ta&bles` (the last sub-tab label; not FiP). | Row 9 (see accessibility rows and `t3-06`). Database state. |
| `t3-02-wizard-page1-bound-default-ido-name.png` | Wizard page 1: IDO Name `FX_HelloWorld01`; Bound radio selected (others not); Next enabled; Finish disabled; Back disabled. | Page 2 values. |
| `t3-03-wizard-page2-attributes-before-bind-to.png` | Page 2 before binding: Bind To, Property Name, Property Class empty; Data Type and Column Data Type empty with Inherit unchecked; Length and Decimal empty; unlabelled text area; Finish enabled (not clicked). | The bound values (see t3-04). |
| `t3-04-wizard-page2-bind-to-and-property-name-set-types-readback.png` | **Decisive pre-Finish gate:** Bind To `fxhw.FX_Address`; Property Name `FX_Address`; Property Class empty; Data Type `String`; Length `150`; Column Data Type `nvarchar`; Decimal empty; Inherit checkboxes greyed (no class); Next disabled; Finish enabled. | The Finish response (see t3-05). Label (not offered). |
| `t3-05-finish-result-idos-form-after-wizard.png` | After Finish: wizard closed; IDOs tab active; status `New Property (IDOs 1 of 1)`; Check In enabled; Revision 2 / 10/10/2026; Locked By operator; Save greyed; no dialog; rows 1–8 visible. | Row 10 (see t3-06). Database state. |
| `t3-06-post-finish-properties-fx-address-row-and-original-nine.png` | **Decisive post-Finish inventory:** rows 3–10 with the right-hand flags; row 10 `FX_Address`, Bound to Column, Column Name FX_Address, Key Sequence 0, String, 150, nvarchar, flags unchecked; row 9 InWorkflow Read Only Record checked (unchanged); status `New Property (IDOs 1 of 1)`; Save greyed. | Rows 1–2 (accessibility readback only); the alias in the binding (readback before Finish only). Persistence (recovery pending). |

## Acceptance checks (T3)

| AC | Status (T3) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-4 | **Established (observed, UI level).** One New Property wizard; Bound retained; Bind To `fxhw.FX_Address` selected from the lookup; Property Name `FX_Address`; Property Class blank; Label String ID not offered (unset); shown type String / 150 / nvarchar (wizard-populated, not inherited from a class); one Finish with the native response above. | `t3-02`, `t3-03`, `t3-04`, `t3-05` | Wizard shows no label field; the unlabelled text area not identified; the Finish response has no displayed text (inferred success from the post-Finish inventory). |
| AC-5 | **Established (observed, UI level), same session.** After Finish: Form clean (Save disabled); exactly one new FX_Address property with Column Name FX_Address, String 150 nvarchar; original nine unchanged on readable fields. No Save. | `t3-05`, `t3-06`; accessibility rows | Label not offered; the alias `fxhw` not shown in the grid; right-hand flags of rows 1–2 from the accessibility rows only. Not a database read. |
| AC-3 | Not in T3 scope (Check Out done in T2). Remains: checked out to operator, confirmed again in `t3-05`. | `t2-03`, `t3-05` | — |
| AC-6 | **Not started** (recovery pair is the next task). | — | — |
| AC-7 | **Not started** (runtime Refresh is the final step). | — | — |

## Action audit (T3 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Tab 0 (Designer) not selected. |
| `browser_snapshot` (untargeted) | 2 | Start snapshot; snapshot after Next (page 2). Tool-written snapshot files were not read as evidence. |
| `browser_find` (read-only) | 14 | Address absence; Locked By; Tables readback; Properties heading ref; New Property ref; wizard page 1 read; "Label"; "Default"; lookup fxhw.FX_Address; lookup fxhw list (10 entries); Bind To and Property Name readback; pre-Finish type readback; post-Finish inventory rows; Save and address/dialog check. |
| Clicks | 7 | (1) Tables sub-tab (view); (2) Properties sub-tab (view); (3) **New Property (×1)**; (4) **Next (×1)**; (5) Bind To Open trigger (lookup); (6) `fxhw.FX_Address` option (lookup selection); (7) **Finish (×1)**. |
| Typed entries | 1 | Property Name `FX_Address` (one plain fill). |
| Key presses | 0 | None. |
| Escape presses | **0** | None. |
| Mouse moves / wheel | 1 / 1 | Grid vertical scroll (deltaY +600) for the row-10 view. |
| Waits | 1 | 3 seconds after Finish. |
| Screenshots | 6 | `t3-01` to `t3-06`. |
| **New Property wizard** | **1** | Opened once. |
| **Finish** | **1** | Invoked once; response: no dialog, no text. |
| **Check Out (T3)** | **0** | None in T3. |
| **Save (T3)** | **0** | Not needed: Form clean after Finish. |
| IDOs close / reopen (T3) | 0 / 0 | None. |
| Target F4 queries (T3) | 0 | None. |
| Runtime Refresh / open / edits (T3) | 0 / 0 / 0 | None. |
| Strings, property classes, SQL, Forms, runtime records (T3) | 0 | None. |
| The IDO or property changes (T3) | 1 | The sole mutation: one new property FX_Address on FX_HelloWorld01. |
| Designer actions | 0 | None. |
| Unloads / cache / FormSync / deploy / regenerate | 0 | None. |
| Re-login | 0 | Session usable. |
| Worker-authored JavaScript, console or network reads, direct navigation, refresh, restart | 0 | None. |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Portal banner dismissals | 0 | None visible. |

### Cumulative browser action audit (T1 + T2 + T3; exact counts against the brief's budgets)

| Action | T1 | T2 | T3 | Cumulative | Budget status |
| --- | --- | --- | --- | --- | --- |
| Check Out | 0 | 1 | 0 | **1** | Used (limit 1). |
| Check In / Undo Check Out | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | None (prohibited). |
| New Property wizard | 0 | 0 | 1 | **1** | Used (limit 1). |
| Finish | 0 | 0 | 1 | **1** | Used (limit 1). |
| Save | 0 | 0 | 0 | **0** | Conditional, 1 unused (not needed). |
| IDOs close / reopen pairs | 1 / 1 (pair 1) | 0 / 0 | 0 / 0 | **1 pair** | 1 pair left (AC-6 recovery). |
| Target F4 queries (FX_HelloWorld01) | 1 | 0 | 0 | **1** | 1 left (AC-6 recovery). |
| Runtime Refresh | 0 | 0 | 0 | **0** | 1 left (AC-7). |
| Select Form opens / OK / Cancel | 1 / 1 / 0 | 0 | 0 | 1 / 1 / 0 | — |
| Tab lists / selects | 1 / 1 | 1 / 1 | 1 / 1 | **3 / 3** | — |
| Clicks | 7 | 3 | 7 | **17** | — |
| Typed entries | 2 | 0 | 1 | **3** | — |
| Key presses (Tab, F4) | 3 | 0 | 0 | **3** | — |
| Escape presses | 0 | 0 | 0 | **0** | — |
| Untargeted snapshots / targeted | 3 / 0 | 1 / 0 | 2 / 0 | **6 / 0** | — |
| `browser_find` | 3 | 7 | 14 | **24** | — |
| Screenshots | 6 | 3 | 6 | **15** | — |
| Mouse moves / wheel | 1 / 1 | 2 / 2 | 1 / 1 | **4 / 4** | — |
| Waits | 1 | 1 | 1 | **3** | — |
| Dialogs answered | 1 | 0 | 0 | **1** (Select Form OK, T1) | — |
| IDO/property changes | 0 | 1 (Check Out) | 1 (FX_Address) | **2 (plus 1 Check Out)** | Only FX_Address added. |
| Strings, classes, SQL, Forms, runtime records | 0 | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deploy / regenerate | 0 | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | 0 | **0** | — |
| JavaScript / console / network / direct navigation / refresh / restart | 0 | 0 | 0 | **0** | — |

## Worker-written-file inventory (T3)

Written by this worker in T3:

- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (edited: status header; T3 section).
- `evidence/EXP-075/T3-report.md` (created; this report).
- `evidence/EXP-075/t3-01-pre-wizard-baseline-checkout-state-nine-properties.png`
- `evidence/EXP-075/t3-02-wizard-page1-bound-default-ido-name.png`
- `evidence/EXP-075/t3-03-wizard-page2-attributes-before-bind-to.png`
- `evidence/EXP-075/t3-04-wizard-page2-bind-to-and-property-name-set-types-readback.png`
- `evidence/EXP-075/t3-05-finish-result-idos-form-after-wizard.png`
- `evidence/EXP-075/t3-06-post-finish-properties-fx-address-row-and-original-nine.png`

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` (for example `page-2026-10-13T12-01-51-264Z.yml`, `page-2026-10-13T12-02-06-916Z.yml`, `page-2026-10-13T12-02-57-284Z.yml`, `page-2026-10-13T12-03-02-000Z.yml`, `console-2026-10-13T12-01-40-809Z.log`). Not read as evidence in T3. No other file was written.

## Final browser state (end of T3)

- Mongoose Web Client tab (tab 1) selected; Designer tab (tab 0) untouched.
- IDOs Form active (`favoriteContext=IdoCollections`), Properties sub-tab, status `New Property (IDOs 1 of 1)`. Ten properties (FX_Address the new row 10). **Clean: toolbar Save disabled.**
- **FX_HelloWorld01 is checked out to the operator** (Check In enabled; Locked By operator; Revision 2 / 10/10/2026).
- No wizard open; no dialog; no unsaved change. The recovery close/reopen, the second target query and the runtime Refresh were NOT performed.

## Limits

- UI level, same session only. No database read; no catalogue check that the property persisted (recovery pending).
- The Finish response had no displayed text; success is inferred from the wizard closing, the status change and the post-Finish inventory.
- Label String ID was not offered; no label set (the omission is the wizard's, not verified as a product rule).
- The unlabelled text area on page 2 (with an Inherit checkbox) was not identified and was left empty.
- Data Type `String`, Length `150` and Column Data Type `nvarchar` were shown by the wizard after binding (no class). They are the wizard's values, not confirmed in the database.
- The alias `fxhw` is not in the post-Finish grid; the binding readback was taken before Finish.
- Locked By is the login placeholder in the accessibility tree; the match to the operator is by the identity bar and the Form's prior state.
- The status bar `Ta&bles` (T3 start) and `New Property (IDOs 1 of 1)` are the status-bar text, not Filter in Place mode.
