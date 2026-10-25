# EXP-133 T2 — Form creation summary (AC-2)

Harness header: `run_id=R-20261025-234739-gn7q`, `experiment_id=EXP-133`, `cycle_id=1`, `task=T2`, `worker_session_id=6363642e-00e1-445c-878d-aa7d841ad506`, `task_message_id=70337d0a-2379-465e-be67-a04989ca5ee2`.

## Outcome

- **Created:** one Form `FX_LoginPortal` through the Designer Form Wizard (New → Form Wizard Selection → Category `Classic`, Wizard `BuildFromScratch`). The wizard's Finish was the only persistence operation.
- **Scope (observed):** Designer status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Form Properties `Version: User version for user anton.ramos@3mworks.com.ph`.
- **Form properties (observed):** Name `FX_LoginPortal`; Caption empty; Device Type `Default`; Form Type `Normal`; Is Master `True`; Initial Command empty; Close Box `True`; Minimize/Maximize `True`; Enable Advanced Filter `False`.
- **Script Language (observed): `Visual Basic`. Not `Visual C#`.** The wizard offers no Script Language option. A Designer property change to Visual C# would dirty the Form, and the single ordinary Designer Save is not authorized in T2. It was **not** changed. See Deviation D-1.
- **Components (observed):** Details > Components shows only `Pane (00)` with no child components. No UserCtrl variables or other generated artifacts are visible for this Form.
- **Clean state (observed):** Designer toolbar Save `[disabled]` after Finish; no dirty marker. No ordinary Designer Save was performed.
- **Persistence (observed, same session only):** Finish showed `Process Completed Successfully`; the Designer then opened `MGForm=FX_LoginPortal`; the Web Client Select Form, after a reopen, lists exactly one row `FX_LoginPortal` (Caption and Name both `FX_LoginPortal`) for the filter `FX_LoginPortal`. Cross-session persistence is not verified.

## Wizard settings captured before Finish

| Page | Setting | Value captured | Evidence |
|---|---|---|---|
| Form Wizard Selection | New Form radio | selected | `t2-01` |
| Form Wizard Selection | Category | `Classic` (option text "WinStudio classic form wizards") | `t2-02` |
| Form Wizard Selection | Wizard | `BuildFromScratch` (option text "Build from Scratch — Plain form without defined components") | `t2-02` |
| Page 1 | Name | `FX_LoginPortal` | `t2-03` |
| Page 1 | Form Type | `BuildFromScratch` (read-only field) | `t2-03` |
| Page 1 | Form Layout | `GridLeft` (read-only field) | `t2-03` |
| Page 1 | Device Type | `Default` | `t2-03` |
| Page 1 | Data Source | empty | `t2-03` |
| Page 1 | Query Form | empty | `t2-03` |
| Page 1 | Comments | empty | `t2-03` |
| Page 2 | Save Template | unchecked (was checked by default) | `t2-04` |

Recipe: `recipes/forms/create-basic-form.md` (verified). Wizard label is "Build from Scratch"; the Wizard combobox then displays `BuildFromScratch`. Same option as the recipe.

## Readback sequence

1. `t2-00` — Designer before wizard: `FX_BridgeTest` open and clean; `ScopeType: User`; Save greyed.
2. `t2-01`–`t2-04` — wizard dialog states (selection, page 1, page 2 before Finish).
3. `t2-05` — `Process Completed Successfully` (behind it the Designer still showed `FX_BridgeTest`; OK opened `FX_LoginPortal` in a new Form tab).
4. `t2-06` — Designer with `FX_BridgeTest` tab and `FX_LoginPortal` tab (selected); Save greyed; ScopeType User.
5. `t2-07` — Form Properties readback (Script Language `Visual Basic`) and Details Collections tab.
6. `t2-08` — Details > Components: `Pane (00)` only.
7. `t2-09` — Web Client Select Form, first open after Finish, filter `FX_LoginPortal`: **zero rows** (stale client store; see D-3).
8. `t2-10` — Web Client Select Form, reopened, filter `FX_LoginPortal`: **one row** `FX_LoginPortal`.

## Action ledger (T2)

- Browser actions: 22 — tab selects 2 (index 0, index 1); clicks 17 (includes one timeout, D-2); text entries 2 (wizard Name, Select Form filter); key presses 1 (End, Select Form filter refresh).
- Browser reads: 33 — tab list 1; snapshots 7 (one fresh untargeted recovery snapshot); screenshots 11; finds 14. Plus 11 image reads and 2 document reads from disk.
- Mutations: Forms created 1 (wizard Finish). Ordinary Designer Saves 0. Assets 0. Global objects 0. Components 0. Form Script methods 0. Designer close/reopen 0. Runtime open 0. Sign In 0.
- View-only actions (no definition change): Details panel expand; Details Components tab; Select Form Cancel x2 (no OK, so no row was activated).
- Recovery usage: fresh untargeted snapshot 1 of 1 used; corrected inspection/attempt 1 of 1 used (see D-2). No further recovery.
- Browser JavaScript / evaluate: 0.
- Destructive commands: none. The top-toolbar `Delete` (ref e25) was not activated.

## Console

- Designer tab: 2 errors / 0 warnings before the wizard (`t2-00`), after Finish, and at the end of T2.
- Web Client tab: 3 errors / 10 warnings at the T1 end; the same counts after the Select Form opens and Cancels. No increase.

## Deviations

- **D-1 (blocking for AC-2 Visual C#).** The wizard has no Script Language option, so the Form was created with `Visual Basic`. Setting `Visual C#` is a Designer property change that dirties the Form. The brief's single ordinary Save is not authorized in T2, so the change was not applied. Operator disposition needed (see EXP-133 record).
- **D-2 (environment).** Clicking the wizard's Save Template checkbox (ref e930) failed with `TimeoutError ... element is visible, enabled and stable ... <span data-ref="displayEl" ...> intercepts pointer events` (5 s). One fresh untargeted snapshot confirmed the box was still checked and no mutation had occurred. One corrected attempt clicked the visible label text "Save Template" (ref e932); a follow-up find showed the box unchecked, and `t2-04` confirms it.
- **D-3 (client cache).** The first Select Form open after Finish did not show `FX_LoginPortal` (`t2-09`). The dialog was closed with Cancel and reopened once; then the row appeared (`t2-10`). The first result is treated as a stale client store, not as absence. Not used as an absence finding.
- **D-4.** Select Form retained the filter text `FX_CustomerPortal` from the T1 session; it was replaced with `FX_LoginPortal` (no effect on the Form).
- **D-5 (intentional, from brief).** Classic BuildFromScratch rather than the MockLoginPortal Flex structure.
- **D-6.** A tab selection (Web Client) and a read-only find were issued in the same step. The find was read-only and returned the expected tab.

## Generated artifacts

- None observed. The Form has no components, and no `UserCtrl_*` variables appear in the readbacks available in T2. The Global Objects list was not re-read in T2 (T1 inventory stands).

## Limitations

- Persistence is shown only within the current browser session (Designer and Web Client). No cross-session or database-level durability claim.
- Absence checks from T1 remain scoped to visible inventories; tenant-wide absence is not proven.
- The Visual Basic Script Language is observed; no Visual C# method has been written.
- Excluded objects (`MockLoginPortal`, `FX_InventoryPrototype01`) were not opened.
- `FX_BridgeTest` was left open and clean, not edited or saved.

## Repository writes (T2)

- Created: `evidence/EXP-133/T2-creation-summary.md`.
- Created: `evidence/EXP-133/t2-00-designer-before-wizard-bridgetest-clean-user-scope.png`, `t2-01-form-wizard-selection-before-category.png`, `t2-02-wizard-selection-classic-buildfromscratch-before-ok.png`, `t2-03-wizard-page1-name-fx-loginportal-buildfromscratch-gridleft-default.png`, `t2-04-wizard-page2-save-template-unchecked-before-finish.png`, `t2-05-wizard-process-completed-successfully.png`, `t2-06-designer-fx-loginportal-created-clean-user-scope.png`, `t2-07-fx-loginportal-designer-readback-script-language-components.png`, `t2-08-fx-loginportal-components-tab-empty.png`, `t2-09-web-client-select-form-filter-fx-loginportal-after-create.png`, `t2-10-web-client-select-form-reopened-fx-loginportal-one-row.png`.
- Modified: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T2 status and section).
- Tool-written outside this directory (disclosed): `evidence/playwright/page-2026-10-25T15-*.yml` snapshot files and console log entries.
