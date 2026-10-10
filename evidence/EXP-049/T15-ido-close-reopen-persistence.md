# EXP-049 — T15 IDOs ordinary close/reopen persistence (PARTIAL: close and reopen completed; recovery query NOT completed)

Run: R-20261011-020822-9Eej, cycle 17, task T15 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).

**Result: the native IDO Properties and IDOs runtime Forms were each closed with their own Form-tab Close control, and the IDOs Form was reopened once through the Select Form route. The Form list and the reopened Form were confirmed. The fresh exact-name recovery query for FX_Items was NOT completed: the editable criteria element could not be reached after two browser-reference failures, so the task stopped without retrying. AC-10 is therefore NOT established by this run.** No check-in, checkout, Save, New, Delete, wizard, property or SQL change was performed.

## Pre-close state (observed)
- Tab 1 (Web Client) selected. Open Form tabs: Property Classes, IDOs, Sql Tables, IDO Projects, Export/Import Strings, IDO Properties, Sql Columns.
- IDOs Form: Save disabled; IDO Name FX_Items; Locked By blank; Check Out offered; no dialog (`T15-00-fresh-snapshot-precheck.yml`). The IDO Properties child tab was present and clean.

## Close actions
| # | Action | Result |
| --- | --- | --- |
| 1 | Close Panel IDO Properties (`f1e112`), native Form-tab close, once | Tab removed from the Form-tab list. No dialog. Save disabled. Snapshot `page-...19-02-57-505Z.yml`. |
| 2 | Close Panel IDOs (`f1e100`), native Form-tab close, once | IDOs heading removed from the Form-tab list (remaining: Property Classes, Sql Tables, IDO Projects, Export/Import Strings, Sql Columns). No dialog, no unsaved-change prompt. Snapshot `page-...19-03-02-509Z.yml`. Screenshot `T15-01-after-IDOs-and-IDOProperties-closed.png`. |

Closed-state evidence: the Form-tab list no longer contains IDOs or IDO Properties (the screenshot and snapshot both show the tab bar without them). Switching tabs was not used as the close test.

## Reopen (observed)
- Open toolbar button (`f1e25`), once → Select Form dialog. The filter initially held `ExportImportStrings` (stale from an earlier use); its only row was Export/Import Strings.
- Filter text changed to `IdoCollections` (fill), committed with Tab. The list then showed `G6RIdoCollectionSearch` and **IDOs / IdoCollections** (`f1e985`/`f1e987`). The IDOs row was selected (click) and OK clicked once (`f1e969`).
- Page context changed to `favoriteContext=IdoCollections`. Post-open snapshot `page-...19-03-40-854Z.yml`: IDOs tab selected; Save disabled; no dialog; IDO Name field read-only (`CollectionNameEdit`).
- Form-tab list after reopen: Property Classes, IDOs (selected), Sql Tables, IDO Projects, Export/Import Strings, Sql Columns. IDO Properties was not reopened. The brief allowed this only "where safely supported", and the recovery query needed to come first; it was not reached.

## Recovery query (NOT completed)
- The record detail was blank on reopen (no record selected in the detail) and the IDO Name field was read-only. In the reopened snapshot, Check Out and Undo Check Out both showed `[disabled]`, but no record was selected, so those disabled buttons do not indicate a lifecycle state and are not used as evidence.
- Filter in Place (`f1e38`, the reference from the pre-reopen layout) timed out: it resolved to the **disabled System Notes** button, because the reopened Form's toolbar refs differ. This is a stale-reference failure. One fresh snapshot (`T15-03-fresh-snapshot-after-timeout.yml`) gave the current Filter in Place ref `f1e34`; that click succeeded (`page-...19-04-02-828Z.yml`).
- The Filter in Place criteria field (`f1e1084`) held the retained value `ABDataServices` from an earlier session on this Form. Entering `FX_Items` failed: the element resolved to `CollectionNameEdit`, which is **read-only** (`readonly`, `aria-readonly=true`). This is a second browser-reference failure on the same step.
- One corrected inspection (`T15-04-fresh-snapshot-corrected-inspection.yml`) listed the unfiltered IDO list (including `ABDataServices`) and did not expose an active, editable criterion cell for FX_Items. The brief permits one corrected visible inspection; this did not establish an editable criterion, so I stopped rather than retry, guess a different element, or use a route outside the brief.
- **No F4 was invoked and no FX_Items query result exists in this run.** The pre-F4 screenshot, the settled result, the Tables sub-grid, and the IDO Properties check were therefore not obtained.

## Counts (T15)
| Action | Count |
| --- | --- |
| Native Form-tab close (IDO Properties) | 1 |
| Native Form-tab close (IDOs) | 1 |
| Open toolbar / Select Form opens | 1 / 1 |
| Select Form filter edits (fill) | 1 (`IdoCollections`) |
| Select Form row selection / OK | 1 / 1 |
| Filter in Place clicks | 2 (first timed out on a disabled System Notes ref; second succeeded on the corrected ref) |
| Stale-ref timeouts | 1 (`f1e38`, System Notes disabled) |
| Read-only field fill refusals | 1 (`f1e1084`, CollectionNameEdit) |
| Fresh untargeted snapshots (recovery allowance) | 2 (`T15-03`, `T15-04`); the brief's one-fresh-snapshot-plus-one-corrected-inspection allowance is exhausted |
| FiP criterion entries completed | 0 |
| F4 runs | 0 |
| Recovery queries completed | **0** |
| Check In / Check Out / Undo | 0 / 0 / 0 |
| Save / New / Delete / Refresh | 0 / 0 / 0 |
| Wizard / Finish / Create Form | 0 / 0 / 0 |
| Property class, string, SQL, column changes | 0 |
| Direct SQL, browser evaluate, metadata unload, refresh, session restart | 0 |
| Screenshots (worker) | 1 (`T15-01`) |
| Worker YAML snapshots | 5 (`T15-00`, `T15-02`, `T15-03`, `T15-04`) plus tool snapshots |

## Acceptance conclusion
- **AC-10 (IDO recovery after ordinary close and reopen): NOT ESTABLISHED.** The close and reopen steps completed and the IDOs Form was confirmed present again, but no fresh exact-name query returned FX_Items, so project, alias, four properties and the checked-in indicator were **not recovered** in this run. Do not treat the reopen alone as recovery.
- **Checked-in state after reopen:** not observed (no record was shown). AC-8's earlier same-session result (T14) stands unchanged; it is not re-verified here.
- **AC-11 (SQL recovery):** reserved for a later task; not performed.

## Limitations
- The Select Form route was the one EXP-044 and EXP-040 documented; the filter text needed correction because the dialog retained `ExportImportStrings`.
- The reopened IDOs Form exposed a read-only IDO Name field and the criterion element named `CollectionNameEdit` was read-only, which is inconsistent with the earlier T6 and T12 query behaviour, where the same IDOs criteria field accepted a fill. Whether this is a state difference after reopen or a layout difference was not established.
- Retained criterion `ABDataServices` on the reopened Form (from an earlier session) was not treated as a result.

## Evidence files written in T15
- `evidence/EXP-049/T15-ido-close-reopen-persistence.md` (this file)
- `evidence/EXP-049/T15-00-fresh-snapshot-precheck.yml`
- `evidence/EXP-049/T15-01-after-IDOs-and-IDOProperties-closed.png`: closed-state tab bar (no IDOs or IDO Properties). Shows the Form-tab list, not the recovered IDO.
- `evidence/EXP-049/T15-02-select-form-filtered-idocollections.yml` (Select Form dialog state)
- `evidence/EXP-049/T15-03-fresh-snapshot-after-timeout.yml` and `T15-04-fresh-snapshot-corrected-inspection.yml` (recovery attempt)
- Tool snapshots `page-...19-02-57-505Z.yml`, `...19-03-02-509Z.yml`, `...19-03-14-561Z.yml`, `...19-03-33-895Z.yml`, `...19-03-40-854Z.yml`, `...19-04-02-828Z.yml`, and console logs.

## Next permitted action (coordinator decision)
Stop for coordinator review. Before AC-10 can be claimed, a fresh and authorised recovery attempt is needed: an operator-approved step to make the IDOs criteria field editable (or a supported route to the IDO list the coordinator names), then one FX_Items query with a pre-F4 screenshot and settled result. The remaining IDO Properties recovery and the SQL close/reopen (AC-11) are not started. No check-in, save, or creation has been performed.
