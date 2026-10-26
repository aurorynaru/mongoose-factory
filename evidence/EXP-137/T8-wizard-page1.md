# EXP-137 — T8 Data Maintenance Wizard opened, page 1 configured (wizard OPEN; Finish NOT invoked)

Run `R-20261026-104057-G85J`, cycle 12, task T8. Worker session `93e27632-eec8-4c27-968d-0ac8726ea3b0`, task_message_id `5e676f36-c447-4a56-bc3e-43ad458d8b28`. Date 2026-10-26.

**Result: COMPLETE for page 1 only.** The Data Maintenance Wizard is open on page 1 with IDO Name, IDO Project Name and Table Alias committed. Nothing else was changed. Finish, Next, Create Form, Save, check-in and property-row edits were not performed. No Mongoose application object was created.

## Operator statements carried into T8 (not re-verified here)

- The cycle-12 operator waived the AC-1 exact-name IDO query. T1–T7 collision queries were not repeated.
- The operator accepted the qualified T1–T4 absence evidence.
- The operator diagnosed the earlier screenshot timeouts as background-tab rendering failures.
- Operator identity evidence (cited, not worker-observed): `operator-01-webclient-account-header-after-restart.png` and `operator-02-designer-user-scope-idocollections-after-restart.png`.

## Route (EXP-134 T6 precedent, followed)

1. `browser_tabs` list (read-only) at task start; then one select of index 1 (the Designer tab). Select succeeded.
2. Fresh untargeted snapshot: Designer live. Save disabled. Form `IdoCollections` (vendor, not edited). Footer `[ ScopeType: User / ScopeName: <masked> ]` (the account value is masked as the secret placeholder in the snapshot; identity rests on the operator evidence above). No alertdialog, no Session Expired modal, no sign-in page.
3. Designer toolbar `New` (one click) → dialog `Form Wizard Selection`, Form type `New Form` selected.
4. Category dropdown opened; rendered options listed (Classic, ExtDataSource, Flex, Form Builder, IDS, New Data, REST). Option `New Data` selected once → Category shows `NewData`.
5. Wizard dropdown opened; rendered options listed (Maintenance, XML To IDO). Option `Maintenance` selected once ("Creating a table, IDO, and (optionally) form") → Wizard shows `Maintenance`.
6. OK once → dialog `Data Maintenance Wizard` opened on page 1. URL changed to `designer/default.aspx`.
7. IDO Name: `browser_type` of `FX_LoginUsers` into the IDO Name textbox (one action). Fresh snapshot: value `FX_LoginUsers` committed.
8. Table Alias: `browser_type` of `fxlogin` (one action). Snapshot: value `fxlogin` committed.
9. IDO Project Name: Open lookup once; list displayed `amoveMock` (selected) and `FX_HelloWorldProject01` (one row, verified in the list). Option `FX_HelloWorldProject01` clicked once. Snapshot: combobox shows `FX_HelloWorldProject01`; the default `amoveMock` was replaced.
10. Element screenshot of the wizard dialog (one, succeeded): `evidence/EXP-137/t8-01-data-maintenance-wizard-page1-committed.png`.

No Tab, Enter or Escape keys were pressed. No coordinate clicks. No Property Class lookup opened. No property row edited.

## Page-1 state (fresh snapshot after the project commit, and screenshot)

| Field | Value (committed) | Source |
|---|---|---|
| IDO Name | `FX_LoginUsers` | snapshot; screenshot |
| IDO Project Name | `FX_HelloWorldProject01` | snapshot; screenshot |
| Table Alias | `fxlogin` | snapshot; screenshot |
| Site Split | unchecked | screenshot (checkbox empty) |
| Table Name / View Name | blank; greyed (disabled) | screenshot |
| Form Type | `MultiView` (wizard default, unchanged) | snapshot; screenshot |
| Form Layout | `GridLeft` (wizard default, unchanged) | snapshot; screenshot |
| Device Type | `Default` (wizard default, unchanged) | snapshot; screenshot |
| Property rows | one blank row (star row 1, Name empty) | snapshot; screenshot |
| Back | disabled | screenshot |
| Next | enabled | screenshot |
| Finish | disabled | screenshot |

Form Type, Form Layout and Device Type are the EXP-134 accepted defaults. No A1 requirement changes them, so they were left unchanged.

## Observations

- Designer identity: Designer tab 1 live, Form `IdoCollections`, Save disabled, footer User scope (masked name).
- The wizard's `Create Form` prompt is not reached in T8. A1 requires `No` only after Finish, which is not in T8.
- The `Table Name` field is greyed and blank, consistent with EXP-134 (Site Split unchecked). The physical table name is not shown before Finish.
- Designer Save stayed disabled throughout. No Designer edit was made.

## Action accounting (T8)

| Category | Count |
|---|---|
| Tab lists (read-only) | 1 |
| Tab selects | 1 (index 1, succeeded) |
| Fresh untargeted snapshots | 3 (task start; after IDO Name; after Alias) |
| Scoped snapshot (wasted, returned one label) | 1 (target `e549`, after the Alias commit) |
| Snapshots auto-returned by actions | 9 |
| Screenshots | 1 (succeeded) |
| Mutating-class UI actions | 10: Designer New 1; Category trigger 1, option 1; Wizard trigger 1, option 1; OK 1; IDO Name type 1; Alias type 1; Project Open 1; Project option 1 |
| Ref-not-found errors | 0 |
| Timeouts | 0 |
| Finish / Next / Back / Cancel | 0 |
| Create Form (Yes or No) | 0 |
| Save / Check In / Check Out | 0 |
| Property Class lookup / property-row edits | 0 |
| Tab, Enter, Escape keys | 0 |
| Coordinate clicks | 0 |
| Browser JavaScript authored by worker | 0 |
| Session recovery / sign-in / Session Expired | 0 |
| Designer edits to IdoCollections | 0 |

## Tool-policy note

The worker cannot set `worker_tool_policy.deny_browser_javascript` through any tool available to this worker (as recorded in the T1 deviations). It was not set in T8. The worker authored no browser JavaScript. The click tool's output displayed a "Ran Playwright code" wrapper for each click; this is the MCP tool's own output and is disclosed here for operator review.

## Limitations

- The wizard's IDO Project Name was verified in the list and in the committed combobox snapshot. The committed screenshot (`t8-01`) shows it after the commit.
- The masked account value was not revealed; identity rests on the operator's evidence.
- The tab-0 screenshot timeouts in T6 and T7 happened while tab 0 was listed as `(current)`. The successful T8 capture followed an explicit select of tab 1. The operator's background-tab diagnosis is consistent with this, but this is not independently proven.

## Acceptance mapping (T8 scope)

- AC-1: Designer scope and identity observed (masked footer; operator evidence cited). Absence checks not repeated (waived by the operator). AC-1 is not re-declared passed.
- AC-2: partial. Page 1 identifiers are captured. The four-property grid, Create Scripts and the full pre-Finish configuration are NOT yet reached.
- AC-3 to AC-12: not reached.

## Outstanding prerequisites (for the next task, not taken)

1. Configure the four property rows (Name, Data Type, Length, Primary Key/Required) on page 1, using rendered Data Type options and fresh snapshots after each commit. Tab is not to be used from Name to Data Type. Escape must not be used in the Property Class combobox.
2. Navigate to page 2 (Next) only after the page-1 property grid is verified.
3. Verify Create Scripts is unchecked on page 2.
4. Capture the full pre-Finish configuration before the single Finish.
5. The wizard is left OPEN on page 1 with the page-1 values. This is an in-progress wizard, not a completed object. Cancel would discard the typed entries, and the brief forbids discarding unsaved work, so the wizard was not closed.
