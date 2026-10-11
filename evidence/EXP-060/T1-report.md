# EXP-060 — T1 report: read-only preparation, Property Classes open, pre-creation absence query

- Run `R-20261011-215916-hvC7`, experiment EXP-060, cycle 0, task T1.
- Worker session `94f4c67d-1fd5-4ff9-9792-9ff15f4b0271`; task_message_id `7f3efe37-76d8-48be-b4ec-fc699739ef8b`.
- Date 2026-10-11 (system date). Editing scope User. Target `FX_Picture` (property class; not yet created).
- Result: **AC-1 supported; AC-2 supported (observed, UI level).** No New, no Save, no close or reopen, no checkout action, no diagnostics, no JavaScript.

## 1. Web Client identity and start state

| Check | Observed |
| --- | --- |
| Tabs at start | Tab 0: Mongoose Designer page (`designer/default.aspx?MGForm=FX_Items`), not selected and not acted on. Tab 1: Mongoose Web Client (portal URL), selected after a tab list then one select. |
| Identity bar | `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t1-01`). |
| Authentication / configuration challenge | None. No sign-in or configuration screen. |
| Active Form before T1 | FX_Items runtime (inherited from EXP-059), Save disabled, `Description (Object 1 of 3)`, no dialog. |
| Other open tabs before T1 | `Sql Tables`, `Sql Columns` (both inherited from EXP-059; their state was not inspected in T1). |
| Portal banner | None visible. |

## 2. Opening the IDO Property Classes runtime Form (native Open > Select Form)

| Step | Observed |
| --- | --- |
| Toolbar Open | Select Form dialog opened (`Filter` pre-filled `FX_Items`, `Filter By` Name). |
| Filter | Replaced with `PropertyClass` (fill), then one End key press in the active filter box (EXP-059 precedent: the list refreshes only on a key event). |
| Row | One row: Caption `Property Classes`, Name `IdoPropertyClasses` (same as EXP-047-R2). Row selected, then OK once. |
| Result | Tab `Property Classes` opened; URL `favoriteContext=IdoPropertyClasses`; heading `Property Classes`; status `Filter in Place` (`t1-02`). |
| Clean state | Save `[disabled]`; New `[disabled]` (Filter in Place state; it became enabled only after the zero-row query, step 26); Check In and Undo Check Out `[disabled]` in the accessibility tree; no dialog. |
| Selected record | None. A blank placeholder row in Filter in Place mode; Class Name criteria blank. |
| Designer | Not opened. The vendor Form definition was not read or edited. |

## 3. Pre-creation absence query (AC-2)

| Step | Observed |
| --- | --- |
| Criterion | Class Name = `FX_Picture` (literal, plain text; no wildcard, no lowercase variant). Other criteria blank. |
| Pre-F4 state | Criterion visible in the Class Name field and the echo row `FX_Picture`; status `Filter in Place`; Save disabled (`t1-03`). |
| F4 | One press. Wait 2 s. |
| Settled result | **Zero data rows.** One blue-star add-mode placeholder row (Class Name blank; red asterisk on the Class Name label and the `* Class Name` header; Locked By `anton.ramos@3mwo…`; Revision Date `10/11/2026`; Access As `G6R`). Status `Base Class (IDO Property Classes 1 of 1)`. Criteria no longer shown in the Class Name field. Save `[disabled]`. `dialog` find: no match (`t1-04`, `t1-05`). |
| Interpretation | No property class named `FX_Picture` exists in the displayed result. The placeholder is the zero-row add-mode row seen in EXP-047-R2 T1 and EXP-048 T1, not a saved record (Save disabled). |

## 4. Action audit (T1, in order)

| # | Tool | Target / input | Result |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | — | 2 tabs (Designer; Web Client) |
| 2 | `browser_tabs` select | index 1 | Web Client selected, first attempt |
| 3 | `browser_snapshot` (untargeted) | — | Identity bar; FX_Items active; Save disabled |
| 4 | `browser_take_screenshot` | `t1-01-webclient-initial-state.png` | Start state |
| 5 | `browser_click` | toolbar `Open` (`f1e25`) | Select Form dialog |
| 6 | `browser_find` | `Select Form` | Dialog found |
| 7 | `browser_snapshot` (dialog) | `f1e696` | Filter `FX_Items`; one row FX_Items |
| 8 | `browser_type` | Select Form Filter textbox (`f1e725`) = `PropertyClass` | Filter text set; list not yet refreshed |
| 9 | `browser_find` | `Property Classes` | No match (pre-refresh) |
| 10 | `browser_snapshot` (dialog) | `f1e696` | Still FX_Items row |
| 11 | `browser_press_key` | `End` (active filter box) | List refreshed |
| 12 | `browser_snapshot` (dialog) | `f1e696` | One row: Property Classes / IdoPropertyClasses |
| 13 | `browser_click` | row caption (`f1e753`) | Row active |
| 14 | `browser_snapshot` (dialog) | `f1e696` | Row active; OK available |
| 15 | `browser_click` | OK (`f1e744`) | Property Classes opened; URL `favoriteContext=IdoPropertyClasses` |
| 16 | `browser_take_screenshot` | `t1-02-property-classes-opened-via-select-form.png` | Form identity, clean state |
| 17 | `browser_find` | `Save` | `[disabled]` |
| 18 | `browser_find` | `Check In` | Check In and Undo Check Out `[disabled]` |
| 19 | `browser_find` | `Class Name:` | Criteria textbox (`f1e1104`) |
| 20 | `browser_type` | Class Name (`f1e1104`) = `FX_Picture` | Criterion entered |
| 21 | `browser_press_key` | `Tab` | Focus to Base Class |
| 22 | `browser_take_screenshot` | `t1-03-precreation-criteria-FX_Picture-before-query.png` | Criterion before F4 |
| 23 | `browser_press_key` | `F4` | **The single pre-creation query** |
| 24 | `browser_wait_for` | 2 s | — |
| 25 | `browser_take_screenshot` | `t1-04-precreation-query-FX_Picture-settled.png` | Zero data rows; placeholder |
| 26 | `browser_find` | `Save` | `[disabled]` |
| 27 | `browser_find` | `dialog` | No match |
| 28 | `browser_snapshot` (untargeted, saved) | `t1-05-precreation-zero-result-accessibility.yml` | Heading, Save disabled, `* Class Name` header, status |
| 29 | `Grep` / `Read` (repository file read) | `t1-05` yml | Confirmed items listed above |

Reconciled counts (T1):

| Operation | Count |
| --- | --- |
| Toolbar Open (Select Form route) | 1 |
| Select Form row selection / OK | 1 / 1 |
| **Pre-creation query (F4 execution)** | **1** |
| **New** | **0** |
| **Save** | **0** |
| Form close / reopen | 0 / 0 |
| Checkout, check-in, undo checkout | 0 |
| Designer open, FormSync, unload, cache operation | 0 |
| Browser console, network, or other diagnostic call | 0 (the tool output headers show a generic `Console: 1 errors, 2 warnings` count, which I did not read) |
| JavaScript / evaluate / run-code | 0 (the tool wrappers display generated Playwright code; I supplied none) |
| Dialogs answered | 0 |
| Ref-not-found errors / recovery snapshots / timeouts | 0 / 0 / 0 |
| Mutations of any Mongoose artifact | 0 |

Two text entries were typed: the Select Form filter (`PropertyClass`) and the Class Name criterion (`FX_Picture`). Neither changed a business record or property class.

## 5. Evidence index

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-060/t1-01-webclient-initial-state.png` | Identity bar; tabs Sql Tables, Sql Columns, FX_Items (active); Save greyed; FX_Items Description `45 pound iron` (selected, not edited) | AC-1: start state and identity | Property Classes; database state |
| `evidence/EXP-060/t1-02-property-classes-opened-via-select-form.png` | Tab `Property Classes` (active), Filter in Place icon, blank Class Name criteria, blank placeholder row, Save greyed, status `Filter in Place`, identity bar | AC-1: maintenance Form opened via the native route, clean | Checkout ownership of any class; Save state beyond the accessibility readback |
| `evidence/EXP-060/t1-03-precreation-criteria-FX_Picture-before-query.png` | Class Name `FX_Picture`; echo row `FX_Picture`; other criteria blank; status `Filter in Place` | AC-2: exact literal criterion before F4 | The result |
| `evidence/EXP-060/t1-04-precreation-query-FX_Picture-settled.png` | Zero data rows; one blue-star placeholder (Class Name blank, red asterisk); status `Base Class (IDO Property Classes 1 of 1)`; Save greyed; Locked By and Revision Date populated on the placeholder | AC-2: zero matching property classes (display level) | Completeness beyond the display; case variants |
| `evidence/EXP-060/t1-05-precreation-zero-result-accessibility.yml` | Tabpanel `Property Classes`; column header `* Class Name`; `textbox "Class Name:"`; Save `[disabled]`; Check In and Undo Check Out `[disabled]`; status `Base Class (IDO Property Classes 1 of 1)`; no dialog | AC-2: accessibility readback of the zero-result state | Database state |

Tool-generated snapshot logs (not worker-authored) were written by the Playwright tool to `evidence\playwright\` (for example `page-2026-10-11T14-00-07-802Z.yml`, `page-2026-10-11T14-00-28-994Z.yml`). They are outside `evidence/EXP-060/`.

## 6. Acceptance matrix (T1)

| AC | T1 status | Limits |
| --- | --- | --- |
| AC-1 | **Supported (observed, UI level).** Sources reviewed; start state and repository state documented (record); identity bar; Property Classes maintenance Form opened via Open > Select Form with no challenge; heading and clean state verified. | Designer scope (User) not visible on the runtime Form; "Site Developer" context not verified. |
| AC-2 | **Supported (observed, UI level).** One exact-name query for `FX_Picture`; zero data rows; criteria, active Form and zero-result state visible before any New. | Case-insensitive variants not typed (brief permits one query only; prior runs EXP-047-R2 and EXP-048 used the same method). No same-session positive control (the brief allows one query). Display-level result. |
| AC-3 to AC-9 | **Not started.** | — |

## 7. Limitations (T1)

- Display-level absence only; no catalogue query and no database read.
- The inherited `Sql Tables` and `Sql Columns` tabs remain open from EXP-059; their state was not inspected in T1 and they were not acted on.
- The Property Classes Form now holds a zero-row placeholder in Filter in Place mode. Save is disabled, so no pending value exists. In EXP-048, the next Filter in Place query replaced the placeholder silently; the New step (not authorized in T1) must confirm this before adding a row.
- The Designer tab (tab 0) was not acted on.
- The tool-reported console count (`1 errors, 2 warnings`) was not inspected (diagnostics out of scope).
