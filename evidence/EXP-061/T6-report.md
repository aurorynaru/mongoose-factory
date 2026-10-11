# EXP-061 — T6 report (cycle 5): read-only FX_Items runtime verification (AC-8)

**Status: T6 COMPLETE (read-only verification).** The existing FX_Items runtime Form was opened once through Open > Select Form. Its identity was confirmed as `FX_Items`. Three records loaded without any retrieval action (no F4, no Refresh): dumbbell / 45 pound iron / 45.00 / EA; eggs / cage free / 6.99 / DZ; guitar / natural acoustic / 129.99 / EA. The status read `Description (Object 1 of 3)`, Save was disabled, and no dialog appeared. The recovered IDO Collections form still shows the operator's checkout. AC-8 **supported at observed, UI and accessibility level**. Classification: **observed only; not replay_verified.** Final consolidated audit and closure are reserved for a separate task.

Run `R-20261011-223208-4y9y`, cycle 5, task **T6**. Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `52879b86-7806-442d-a191-139721071c43`. Date 2026-10-11. Editing scope User.

---

## 1. Pre-open review and identifier provenance

- Reviewed `T5-report.md`, `t5-snapshot-03-recovery-query-settled.yml` and `t5-snapshot-04-recovered-properties-tab.yml` (recovered IDO identity and 12-row inventory).
- **Provenance of the three original records (documented, not invented):**
  - `experiments/EXP-051-…domain-validation-and-.md`, T8 (lines 197–241 region): the empty-criteria query returned three rows; the T8 keys were dumbbell, eggs and guitar, and the values match the three valid records entered in EXP-051 T5 (eggs was the last one added).
  - `experiments/EXP-052-…runtime-filtering-and-.md`: automatic load (AC-9) showed `dumbbell / 45 pound iron / 45.00 / EA`, `eggs / cage free / 6.99 / DZ`, `guitar / natural acoustic / 129.99 / EA`; status `Description (Object 1 of 3)`, Save disabled, Cost shown with two decimals.
  - `experiments/EXP-054-…` (line 82): runtime with three records, dumbbell first.
  - `EXP-059` T7 (per its record): the three rows matched the same values in the inherited runtime.
- **Limitation:** the records have no surrogate identifier visible in the runtime grid. Row identity in this task is therefore the Item value, with the Description, Cost and Unit of Measure values as the readable fields. The historical records' RowPointer or key values were **not** available in the documents reviewed and were **not** read in T6. No identifier was invented.

## 2. Gates (fresh, read-only; no change)

| Gate | Observation | Result |
| --- | --- | --- |
| Tab list (read-only) | Tab 0 Designer (not acted on); tab 1 Web Client (`favoriteContext=IdoCollections`) | Pass |
| Tab select | Tab 1 on the first attempt | Pass |
| Start snapshot (fresh) | IDOs tab active for `FX_Items`; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled; 12 rows incl. `FX_Picture`; no dialog | Pass |
| Authentication / configuration / session challenge | none; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no portal banner | Pass |
| Inherited tabs at start | Sql Tables, Sql Columns, FX_Items (inherited runtime tab), Property Classes, IDOs | Recorded; not acted on |

Evidence: `t6-snapshot-00-start-fresh.yml`.

## 3. Runtime open (count: 1)

- Toolbar **Open** clicked once (`f1e25`). Select Form dialog opened with filter `IdoCollections`.
- Filter textbox replaced with `FX_Items` (one type action); **End** key once to refresh the list (the list refreshed to one row).
- Row `FX_Items / FX_Items` (`f1e1497`) activated (verified active in a dialog snapshot).
- **OK** clicked once. Result: `favoriteContext=FX_Items`; a new `FX_Items` tab became active; the form loaded its records automatically.
- **No retrieval action** was taken (no F4, no Refresh, no Get More Rows). The rows appeared on opening (EXP-052 documented the same automatic load).

**Duplicate tab (disclosed):** the tab strip now holds **two FX_Items tabs**: the inherited FX_Items runtime tab (from EXP-059, not acted on in T6) and the newly opened instance (active). The brief asked for one open of the runtime Form, which was done. The second tab was not closed (close is a lifecycle action outside T6 scope). The inherited instance's clean state was **not** re-read in T6.

## 4. Runtime identity and three-record inventory (AC-8)

**Identity (accessibility):** the active tab heading `FX_Items` (`f1e1504`); tabpanel `FX_Items`; status text `Description (Object 1 of 3)`. The form's Item field is `dumbbell` for the current row.

**Grid rows (accessibility readback, `t6-snapshot-01-runtime-fx-items-after-open-settled.yml`):**

| Row | Item | Description | Cost | Unit of Measure | Documented pre-existing record (EXP-051 T8 / EXP-052) | Match |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | dumbbell | 45 pound iron | 45.00 | EA | dumbbell / 45 pound iron / 45.00 / EA | Yes |
| 2 | eggs | cage free | 6.99 | DZ | eggs / cage free / 6.99 / DZ | Yes |
| 3 | guitar | natural acoustic | 129.99 | EA | guitar / natural acoustic / 129.99 / EA | Yes |

- **Record count:** three rows, numbered 1, 2, 3 in the row-number column. The status `Object 1 of 3` gives the same count.
- **No extra row:** no fourth row and no blue-star placeholder or add-mode row appeared.
- **Identity limit:** the match is on the four readable fields and the Item value. Historical surrogate identifiers were not read (see §1).
- **Detail pane (dumbbell, current row):** Item `dumbbell`; Description `45 pound iron` (text highlighted by form focus, not edited); Cost `45.00`; Unit of Measure `EA`. The inherited value box beside FX_Refresh is blank (as recorded in EXP-059 T7; not a business-data change).

Evidence: `t6-01-runtime-fx-items-three-records-save-disabled.png` — decisive: rows 1–3 numbered in the grid (Item values partly clipped by the detail pane: dumb…, eggs, guitar…); detail pane dumbbell; status `Description (Object 1 of 3)`; toolbar Save greyed. Does not show rows 2 and 3 in full (the accessibility readback `t6-snapshot-01` is the complete source for their values). The DevTools pane is visible in the image and was not used.

## 5. Clean-state readback (AC-8)

| Item | Observed |
| --- | --- |
| Toolbar Save | `[disabled]` (accessibility; greyed icon in the screenshot) — in `t6-snapshot-01` and `t6-snapshot-03` |
| Pending-change or star indicator on rows | none (no star, no placeholder row) |
| Status | `Description (Object 1 of 3)` (`t6-snapshot-03`) |
| Dialog | none (`browser_find` "dialog": no matches, after open and after the final state) |
| Form focus | Description field has keyboard focus (form-driven). **No value was typed or changed.** |

Final settled state (`t6-snapshot-03-runtime-final-state-settled.yml`): Save disabled; three rows; `Object 1 of 3`; no dialog.

## 6. IDO Collections ownership (preserved; re-read, view only)

- To confirm checkout ownership was preserved, the IDOs tab was selected once (view-only; `f1e109`). Readback (`t6-snapshot-02-idos-ownership-readback.yml`): IDO `FX_Items`; Revision Num `2`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Check In and Undo Check Out enabled; Save disabled; the in-form Properties tab still lists 12 rows including `FX_Picture` (Bound to Column, column FX_Picture, class FX_Picture).
- The IDOs tab was then deselected by reselecting the runtime FX_Items tab (view-only, `f1e1503`).
- **No IDO change occurred.** The recovered IDO Collections form remains open, clean, and checked out to the operator.

## 7. Counts and action audit (T6)

| Action | Count | Detail |
| --- | --- | --- |
| Runtime FX_Items Form opened | **1** | toolbar Open (1); Select Form filter typed (1); End (1); row (1); OK (1) |
| Runtime retrieval (F4 / Refresh / Get More Rows) | **0** | none; rows loaded on open |
| Typed entries | 1 | Select Form filter only (`FX_Items`) |
| Tab selections (view-only) | 2 | IDOs tab (ownership readback); runtime FX_Items tab (reselect) |
| Tab list | 1 | read-only |
| Clicks | 5 | Open; Select Form row; OK; IDOs tab; runtime tab |
| Keys | 1 | End (Select Form list refresh) |
| Waits | 1 | 3 s settle |
| Snapshots (untargeted, worker-saved) | 4 | `t6-snapshot-00` to `-03` |
| Targeted dialog snapshots | 3 | `f1e1433` (before filter change; after End; after row) |
| `browser_find` | 3 | "Select Form" (1); "dialog" (2) |
| Screenshots | 1 | `t6-01` |
| Business-record edits / inserts / deletes | 0 | none |
| New / Delete / Save / Refresh | 0 / 0 / 0 / 0 | none |
| Checkout / check-in / undo checkout | 0 / 0 / 0 | none |
| IDO Collections close / reopen (T6) | 0 / 0 | none |
| Wizard / Finish | 0 / 0 | none |
| Picture component / PNG / binary test | 0 | none |
| Designer / Form definition edit | 0 | none |
| Dialogs answered | 1 | Select Form OK (in-form Mongoose dialog; no alert, prompt or confirmation text) |
| Ref-not-found / timeouts | 0 / 0 | none |
| JavaScript / run-code / console / network | 0 | none |
| Fresh-snapshot recoveries | 0 | none needed |

**Cumulative irreversible / lifecycle actions (T1–T6):** FX_Items checkout **1**; New Property wizard initiation **1**; Finish **1**; toolbar Save **0**; check-in **0**; undo checkout **0**; IDO Collections close **1**; IDO Collections reopen **1**; post-reopen recovery query **1**; runtime FX_Items Form opened **1**; runtime retrieval **0**; business-record edits **0**; dialogs answered **2** (T1 Select Form OK; T6 Select Form OK), none of them an unexpected confirmation.

## 8. Written-file inventory (T6)

- `evidence/EXP-061/T6-report.md` — created (this report).
- `evidence/EXP-061/t6-01-runtime-fx-items-three-records-save-disabled.png` — created.
- `evidence/EXP-061/t6-snapshot-00-start-fresh.yml`, `t6-snapshot-01-runtime-fx-items-after-open-settled.yml`, `t6-snapshot-02-idos-ownership-readback.yml`, `t6-snapshot-03-runtime-final-state-settled.yml` — created (accessibility snapshots written at the worker's request).
- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` — updated (T6 status and section, AC-8 row, next step, documentation list).
- Tool-generated (not worker-authored): `evidence\playwright\page-*.yml` and `console-*.log` written automatically on each action. The worker did not read the console logs.

No other repository file was written by T6. `tools/`, `AGENTS.md`, tutorial sources and prior experiment records were not touched.

## 9. Acceptance status (after T6)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 – AC-4 | Supported (observed) — T1, T2 | T1 and T2 reports | As recorded |
| AC-5 | Supported (observed, UI and accessibility) — T4 | T4 report | Length -1 wizard-only |
| AC-6 | Supported (observed, UI level) — T4 | T4 report | Revision unchanged (unresolved) |
| AC-7 | Supported (observed, UI and accessibility; same session) — T5; ownership re-read in T6 §6 | T5 report; `t6-snapshot-02` | No database read |
| **AC-8** | **Supported (observed, UI and accessibility level; T6)**: FX_Items runtime Form opened once through Open > Select Form; identity `FX_Items`; three rows (dumbbell, eggs, guitar) with the documented field values; status `Object 1 of 3`; Save disabled; no dialog; no picture component, no PNG, no binary test; no business-record edit | `t6-01`; `t6-snapshot-01`, `-03`; §3–5 | Identity by Item and readable fields (no surrogate ID read); documented values from EXP-051/052 (not a database read); a second FX_Items tab is open (inherited instance not re-read); no database read |
| AC-9 | Partial: cumulative audit §7; final consolidated audit reserved for a separate task | §7 | — |
| AC-10 | Not started (final report reserved) | — | — |

## 10. Limitations and uncertainty

1. **Identity by readable fields only.** The records' surrogate identifiers were not visible in the runtime grid and were not read (no database access, no internal query). Matching is against the values documented in EXP-051/EXP-052.
2. **Two FX_Items tabs.** The inherited tab and the opened instance both exist. The inherited tab's Save state and values were not re-read in T6.
3. **Runtime loading is same-session.** The rows came up on opening; no retrieval was performed, so no statement about database query behaviour is made.
4. **Revision unchanged after property add** (carried from T4/T5). Mechanism unresolved.
5. **Length -1 for FX_Picture** is not shown in the grid (wizard-observed, T3/T4).
6. **Runtime image functionality** is not tested or claimed. No picture component exists in the runtime, and no PNG or binary operation was performed.
7. **Database durability, cache state and independent session recovery** are not established. The three-row result is same-session UI evidence.

## 11. Next step (NOT started; separate task)

The consolidated final audit (AC-9) and final report and closure (AC-10) require a separate task. T6 is complete. The IDO Collections form remains open, clean and checked out to the operator. The runtime FX_Items tab is the active tab. The inherited FX_Items tab was not acted on. No further action is permitted in this experiment within T6.
