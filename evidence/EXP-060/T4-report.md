# EXP-060 — T4 report: one clean close of the Property Classes tab; one native reopen (no query)

- Run `R-20261011-215916-hvC7`, experiment EXP-060, cycle 3, task T4.
- Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `d4485948-9342-4829-8de3-b318cbc0d547`.
- Date 2026-10-11 (system date). Editing scope User. Target `FX_Picture`.
- Result: **AC-6 supported (observed, UI level).** The clean Property Classes tab was closed once with no unsaved-changes prompt and the tab is absent. The Property Classes Form was reopened once through Open > Select Form. The reopened Form is usable and clean (Save disabled, no dialog, no authentication challenge).
- **No recovery query was performed.** Persistence of FX_Picture has not yet been tested. AC-7 requires the single authorized post-reopen Filter in Place query, which is for the coordinator to authorize separately.
- Not performed: New, Save, F2, checkout controls, Filter in Place query, Designer, diagnostics, JavaScript, unload, FormSync.

## 1. Pre-close state (fresh; no mutation)

| Check | Observed (`t4-00-pre-close-accessibility.yml`, `t4-01-pre-close-property-classes-tab.png`) |
| --- | --- |
| Tabs | Tab list (1); select tab 1 (first attempt). Tabs present: Sql Tables, Sql Columns, FX_Items, Property Classes (selected). |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Heading | `Property Classes` (tab selected, `f1e108`); close control `Close Panel Property Classes` (`f1e110`) |
| Save | `[disabled]` (clean) |
| Record | One row `FX_Picture` (not starred); `FX_Picture 1 anton.ramos@3mworks.com.ph 10/11/2026 G6R Binary -1 varbinary … PNG` |
| Values | Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary`; Binary Format `PNG`; Base Class, Domain IDO Name, Domain Property, Domain List Properties and Label String ID empty |
| Checkout controls | Check In and Undo Check Out enabled (`f1e512`, `f1e514`); Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R` (as at T3; not acted on) |
| Status | `Date Format (IDO Property Classes 1 of 1)` |
| Dialog | none (`find` "dialog": no match) |

Gate result: **clean and not dirty**; the saved record is visible; no dialog. Close was permitted.

## 2. Close (exactly once)

| Step | Observed |
| --- | --- |
| Action | One click on `Close Panel Property Classes` (`f1e110`). No retry. |
| Immediate result | No unsaved-changes prompt. No dialog (`find` "dialog": no match). The Property Classes tab is absent (`find` "Close Panel Property Classes": no match). |
| Post-close tab state (`t4-02-post-close-tab-state.png`) | Tabs now Sql Tables, Sql Columns, FX_Items (FX_Items is the active inherited EXP-059 runtime form, displayed by the platform after the close; not acted on). Save greyed. Identity bar unchanged. |
| Post-close accessibility (`t4-03-post-close-accessibility.yml`) | Selected tab heading `FX_Items`; `Save [disabled]`; `Open [ref=f1e25]`; no dialog. |
| Close count | **1** |

The brief's expected state was "absent Property Classes tab, no prompt"; both observed. The inherited Sql Tables, Sql Columns and FX_Items tabs were not closed.

## 3. Reopen (exactly once; native route)

| Step | Observed |
| --- | --- |
| Open | One click on toolbar `Open` (`f1e25`). Select Form dialog appeared. |
| Select Form state | Filter pre-filled `PropertyClass` (retained from T1). One row: `Property Classes` / `IdoPropertyClasses` (`f1e1399`). No filter key press was needed this time (the row was already listed). |
| Row | One click on the `Property Classes` row (`f1e1399`); find confirmed `[active]`. |
| OK | One click on OK (`f1e1427`). |
| Result | URL `favoriteContext=IdoPropertyClasses`; tab `Property Classes` active. No dialog after OK. |
| Reopen count | **1** |

## 4. Reopened Form verification (no query)

| Check | Observed (`t4-04-reopened-property-classes-via-select-form.png`, `t4-05-reopened-accessibility.yml`) |
| --- | --- |
| Heading | `Property Classes` (`tab [selected] [ref=f1e1433]`, `heading "Property Classes" [ref=f1e1434]`) |
| Usable | Tab is active; Filter in Place icon shown; the record grid is in Filter in Place mode |
| Mode and content | Status `Filter in Place`; Class Name criterion empty and focused; one blank placeholder row (not a saved record). No record shown. |
| Save | `button "Save" [disabled]` |
| New | `button "New" [disabled]` (Filter in Place state) |
| Check In / Undo Check Out | `[disabled]` (no record selected; **not a checkout reading** for FX_Picture) |
| Dialog | none (`find` "dialog": no match) |
| Authentication or session challenge | none |

**Important limitation:** the reopened Form shows no record, because it opens in Filter in Place mode with empty criteria. This does **not** show whether FX_Picture persisted. As the brief states, persistence is not inferred from this blank view. The check is the AC-7 query.

## 5. Action audit (T4, in order)

| # | Tool | Target / input | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | — | Two tabs; tab 0 Designer current |
| 2 | `browser_tabs` select | index 1 | Web Client selected (first attempt) |
| 3 | `browser_snapshot` (untargeted, saved) | `t4-00-pre-close-accessibility.yml` | Pre-close clean state |
| 4 | `Grep` (repository file read) | `t4-00` yml | Pre-close values and controls |
| 5 | `browser_take_screenshot` | `t4-01-pre-close-property-classes-tab.png` | Pre-close visual |
| 6 | `Read` (image) | `t4-01` | Clean, saved record |
| 7 | `browser_click` | `Close Panel Property Classes` (`f1e110`) | **Close (1 of 1)**; no prompt |
| 8 | `browser_find` | `dialog` | No match |
| 9 | `browser_find` | `Close Panel Property Classes` | No match (tab absent) |
| 10 | `browser_take_screenshot` | `t4-02-post-close-tab-state.png` | Post-close tabs |
| 11 | `Read` (image) | `t4-02` | Property Classes absent; FX_Items displayed |
| 12 | `browser_snapshot` (untargeted, saved) | `t4-03-post-close-accessibility.yml` | Post-close refs; Open `f1e25`; Save disabled |
| 13 | `Grep` (repository file read) | `t4-03` yml | Refs confirmed |
| 14 | `browser_click` | toolbar `Open` (`f1e25`) | **Reopen route (1 of 1)** |
| 15 | `browser_find` | `Select Form` | Dialog found |
| 16 | `browser_snapshot` (dialog, `f1e1379`) | — | Row `Property Classes` / `IdoPropertyClasses`; OK `f1e1427` |
| 17 | `browser_click` | `Property Classes` row (`f1e1399`) | Row active |
| 18 | `browser_find` | `Property Classes` | Row `[active]` |
| 19 | `browser_click` | Select Form OK (`f1e1427`) | Property Classes opened (`favoriteContext=IdoPropertyClasses`) |
| 20 | `browser_take_screenshot` | `t4-04-reopened-property-classes-via-select-form.png` | Reopened Form (Filter in Place, blank) |
| 21 | `Read` (image) | `t4-04` | Heading, mode, blank criteria |
| 22 | `browser_snapshot` (untargeted, saved) | `t4-05-reopened-accessibility.yml` | Reopened readback |
| 23 | `Grep` (repository file read) | `t4-05` yml | Save and New disabled; no dialog; heading selected |

### Reconciled counts (T4 only)

| Operation | Count |
| --- | --- |
| **Close (Property Classes tab)** | **1** |
| **Reopen (Open > Select Form)** | **1** |
| Filter in Place / recovery query | **0** |
| New | 0 |
| Save | 0 |
| F2 | 0 |
| Checkout, check-in, undo checkout | 0 |
| Close or reopen of any other tab | 0 (Sql Tables, Sql Columns, FX_Items untouched) |
| Designer, unload, FormSync, cache, SQL | 0 |
| Browser console, network, or other diagnostic call | 0 |
| JavaScript / evaluate / run-code | 0 |
| Dialogs answered | 0 |
| Typed entries | 0 |
| Ref-not-found / timeouts | 0 / 0 |
| Tab-list / tab-select | 1 / 1 |
| Snapshots (untargeted) | 3 (`t4-00`, `t4-03`, `t4-05`) plus 1 Select Form dialog snapshot (not saved) |
| Finds | 4 |
| Screenshots (PNG) | 3 (`t4-01`, `t4-02`, `t4-04`); see §6 |
| Clicks | 4 (close; Open; Select Form row; OK) |

Cumulative (T1–T4): **New 1** (T2); **Save 1** (T3); **pre-creation query 1** (T1); **post-reopen recovery query 0**; **close 1** (T4); **reopen 1** (T4); F2 1 (T2); checkout actions 0.

## 6. Screenshot count reconciliation

PNG screenshots written in T4: `t4-01-pre-close-property-classes-tab.png`, `t4-02-post-close-tab-state.png`, `t4-04-reopened-property-classes-via-select-form.png`. **Three** PNG screenshots. The earlier count of five is corrected to three. Accessibility files saved by snapshot: `t4-00`, `t4-03`, `t4-05`.

## 7. Acceptance status (T4)

| AC | T4 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1 (identity re-confirmed at T4 start, tab 1). | `t4-00`, `t4-01` | — |
| AC-2 | Carried from T1 (not repeated). | `t1-03`, `t1-04`, `t1-05` | — |
| AC-3 | Carried from T2 (not repeated). | `t2-02`–`t2-04` | — |
| AC-4 | Carried from T3 (not repeated). | `t3-02`, `t3-03`, `t3-05` | No native success text; inferred from disabled Save |
| AC-5 | Carried from T3 (not repeated). Ownership last observed at T4 pre-close: Locked By operator; Check In and Undo Check Out enabled. | `t4-00`, `t4-01`; T3 report §4 | Checked-out status is interpreted from enabled controls |
| **AC-6** | **Supported (observed, UI level).** Clean close once (no prompt; tab absent); reopen once via Open > Select Form; heading `Property Classes`; usable; Save disabled; no dialog or challenge. | `t4-01`, `t4-02`, `t4-03`, `t4-04`, `t4-05`; this report §2–4 | Reopen shows the blank Filter in Place state, not the record. Persistence is not established by T4 (see AC-7). |
| AC-7 | **Not started.** The recovery query requires separate authorization. | — | — |
| AC-8 | Cumulative audit open until the final task (New 1, Save 1, close 1, reopen 1, pre-creation query 1; recovery query 0). | §5 | — |
| AC-9 | Not started (final report). | — | — |

## 8. Unexpected responses and limitations

1. The platform displayed the inherited FX_Items runtime tab after the Property Classes close (as EXP-059 observed). It was not acted on.
2. The Select Form filter `PropertyClass` was retained from T1. The row was listed without a refresh key press, so the End-key refresh used in T1 was not needed.
3. The reopened Form shows Filter in Place mode with blank criteria and no record. This is the same display as T1's pre-query state. It does not establish persistence and was not used as evidence of it.
4. Check In and Undo Check Out are disabled on the reopened blank view because no record is selected. They are not a checkout reading for FX_Picture. The checkout state for the saved record must be read in the AC-7 recovery task.
5. No browser console inspection was performed (the tool output header reports a console count, not read).

## 9. Final Form state (end of T4)

- Web Client tab selected. Tabs: Sql Tables, Sql Columns, FX_Items (inherited EXP-059 runtime), and Property Classes (reopened, active).
- Property Classes: heading `Property Classes`; Filter in Place mode; blank criteria; one blank placeholder row; **Save disabled**; New disabled; no record shown; no dialog; no in-page prompt.
- The Form is open and clean. **No query has been run after the reopen.** The AC-7 recovery query is the next step and requires separate authorization.

## 10. Repository-written file inventory (T4)

- `evidence/EXP-060/T4-report.md` (created)
- `evidence/EXP-060/t4-00-pre-close-accessibility.yml` (created)
- `evidence/EXP-060/t4-01-pre-close-property-classes-tab.png` (created)
- `evidence/EXP-060/t4-02-post-close-tab-state.png` (created)
- `evidence/EXP-060/t4-03-post-close-accessibility.yml` (created)
- `evidence/EXP-060/t4-04-reopened-property-classes-via-select-form.png` (created)
- `evidence/EXP-060/t4-05-reopened-accessibility.yml` (created)
- `experiments/EXP-060-hello-world-part-4-section-2-create-and-recover-fx.md` (edited: status line, T4 section, AC-6 row)
- No other repository file was written by the T4 worker. `tools/` was not read.
