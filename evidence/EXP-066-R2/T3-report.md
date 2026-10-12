# EXP-066-R2 — T3 report: alias fxum, builder join, one wizard OK; Tables view lists FX_UMs (fxum) with the join

- Run `R-20261012-234530-k6cU`, cycle 2, task **T3**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `ab0e5fcb-8adc-4558-9f87-8bd4fde0d16b`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: the join table entry was created by one wizard OK.** The Tables view now lists `FX_Items / fxitms / Primary Base / Inner` and `FX_UMs / fxum / Secondary / Left Outer / fxum.[FX_UM] = fxitms.[FX_UM]`, status `(IDO Tables 1 of 2)`. **No property was added. New Property, Finish, Save, IDO Collections close/reopen and runtime checks were NOT performed.**

## 1. Tabs and gate

- Tab list (read-only) performed first, before any tab selection: tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`), shown as **current**; tab 1 = Web Client (`favoriteContext=IdoTableWizard`).
- **Deviation (recorded):** the first untargeted snapshot was taken while tab 0 (Web Designer) was the current tab. It was read-only; the Designer was not clicked, typed in, screenshotted or otherwise acted on. I did not act on the snapshot's content. The mistake was not checking the current tab before snapshotting; I then selected tab 1.
- Tab 1 selected once (succeeded). A second untargeted snapshot showed the **IDO Table Wizard** tab active in the Web Client, with the IDOs tab and the IDO Tables tab behind it.
- Pre-entry gate (second snapshot): IDO Name `FX_Items`; **Table Name `FX_UMs`** (combobox); Table Alias blank and active; Table Type `Secondary`; Join Type `Left Outer`; builder blank; Join Text blank; OK and Cancel. Find for `validation|required|error|invalid|not valid|must` returned **no matches**. Screenshot `t3-01`.

## 2. Table Alias

- Typed `fxum` once into Table Alias (one type action; the tool filled the field).
- Tab pressed once. Focus moved to Table Type (its text `Secondary` highlighted, not changed). Wait 2 s. Readback (snapshot and `t3-02`): Table Alias **`fxum`**; Table Name still **`FX_UMs`**; Table Type **`Secondary`**; Join Type **`Left Outer`**. No validation message.
- Table Type and Join Type were not changed.

## 3. Join builder (builder choices offered; no typed join)

The builder offered the values, so the join was built with the builder and **the typed join-text route was not used** (no typing into Join Text).

| Step | Control | Value chosen | Readback |
|---|---|---|---|
| 1 | First **Column Name** (Open list, one click, then one option click) | `FX_UM` | `FX_UM` (`t3-03`, options visible) |
| 2 | **Table Name** of the join (Open list, one click, then one option click) | `FX_Items (fxitms)` | `FX_Items (fxitms)` (`t3-04`) |
| 3 | Second **Column Name** (Open list, one click, then one option click) | `FX_UM` | `FX_UM` (`t3-05`) |

- Options offered by the first Column Name list (the fxum side): FX_UM, FX_Description, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (nine; the framework columns are included).
- Options offered by the join Table Name list: a single option, `FX_Items (fxitms)`.
- Options offered by the second Column Name list (fxitms side): FX_Item, FX_Description, FX_Cost, FX_UM, CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow, FX_Picture (twelve).
- Pre-Add configured wizard (`t3-06`, verified by viewing): Table Name `FX_UMs`; Table Alias `fxum`; Table Type `Secondary`; Join Type `Left Outer`; builder `FX_UM` = `FX_Items (fxitms)` . `FX_UM`; Join Text empty.
- **Add (1 of 1):** one click on the builder Add. Result: the join text was filled in by the builder; no dialog; no error (`t3-07`, `find`).
- **Join text (verbatim):** `fxum.[FX_UM] = fxitms.[FX_UM]`. It expresses the intended equality, `fxum.FX_UM = fxitms.FX_UM`, with the builder's square-bracket identifier quoting. The brackets were not added by the worker. This is recorded as an observed difference in form, not a difference in meaning.

Pre-OK configured state (the last state before OK; `t3-07`): Table Name `FX_UMs`; Table Alias `fxum`; Table Type `Secondary`; Join Type `Left Outer`; join text `fxum.[FX_UM] = fxitms.[FX_UM]`; OK and Cancel enabled.

## 4. Wizard OK (one invocation) and native response

- **OK (1 of 1):** one click on OK.
- **Native response (verbatim, observed):** no dialog, alert, confirmation or error text appeared. The wizard tab closed by itself; the page moved to the **IDO Tables** context (`favoriteContext=IdoTables`), with the IDO Tables tab active. No Cancel was needed.
- Post-OK wait 2 s, then screenshot `t3-08` and an untargeted snapshot. The status line shows `&New Table... (IDO Tables 1 of 2)`.

## 5. Tables view after OK (AC-2 result)

Two rows (`t3-08`, snapshot verified):

| # | Table Name | IDO Name | Table Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|---|
| 1 | FX_Items | FX_Items | fxitms | Primary Base | Inner | (blank) |
| 2 | **FX_UMs** | FX_Items | **fxum** | **Secondary** | **Left Outer** | **fxum.[FX_UM] = fxitms.[FX_UM]** |

- The Tables view lists `FX_Items (fxitms)` and `FX_UMs (fxum)` only. No other entry.
- The detail area shows row 1 (FX_Items, fxitms, Primary Base, Inner); its Join Text field is disabled and blank. Row 2 is shown in the grid with the join text.
- Save (toolbar) is **disabled** in the IDOs and IDO Tables contexts in the post-OK snapshot. No dirty indicator.

## 6. Action audit (T3, exact counts)

| Action | T3 count | Notes |
|---|---|---|
| Browser tab list (read-only) | 1 | before the first tab selection |
| Browser tab select | 1 | tab 1 (Web Client); succeeded |
| Untargeted snapshots | 6 | #1 showed tab 0 (Web Designer) as current (read-only, not acted on); #2 wizard gate; #3–#5 after each builder choice; #6 after OK (Tables) |
| Finds | 6 | validation (none); Table Alias/combobox readback; first Column Name option list; builder Table Name option list; second Column Name option list; Join Text readback |
| Clicks | 8 | Open first Column Name; FX_UM option; Open builder Table Name; FX_Items (fxitms) option; Open second Column Name; FX_UM option; builder Add (1); wizard OK (1) |
| Typed entries | 1 | `fxum` into Table Alias |
| Key presses | 1 | Tab (one, after `fxum`) |
| Enter key presses | 0 | — |
| Typed join text | 0 | builder route used; no typed join |
| Table Name (main) Tab commit | 0 | T2 only |
| Waits | 6 | 2 s each |
| Screenshot calls | 8 | `t3-01` to `t3-08` |
| Dialogs answered | 0 | none appeared |
| Ref-not-found / timeouts | 0 / 0 | — |
| Fresh-snapshot recovery allowance used | 0 | the wrong-tab snapshot was a current-tab check error, not a ref error |
| **New Table** | **0 (T3)** | cumulative 1 (T2) |
| **Builder Add** | **1** | one click |
| **Wizard OK** | **1** | native response in §4 |
| Wizard Cancel | 0 | the wizard closed on OK |
| Table entries added | **1** (FX_UMs / fxum) | cumulative 1 |
| Properties added | 0 | — |
| New Property wizard / Finish | 0 / 0 | not opened (brief) |
| Save | 0 | — |
| Check Out / check-in / undo checkout | 0 / 0 / 0 | — |
| IDO Collections close / reopen | 0 / 0 | not repeated (brief) |
| Runtime FX_Items Form open / close / reopen / interaction | 0 / 0 / 0 / 0 | not touched (brief) |
| Web Designer actions | 0 | tab 0 was current in snapshot #1 only; no click, typing or screenshot on it |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |

Total explicit browser calls (T3): tab list 1; tab select 1; snapshots 6; finds 6; clicks 8; type 1; key press 1; waits 6; screenshots 8 = **38**.

### Cumulative (T1 + T2 + T3), exact

| Action | T1 | T2 | T3 | Total |
|---|---|---|---|---|
| New Table invoked | 0 | 1 | 0 | **1** |
| Table Name Tab commit | 0 | 1 | 0 | **1** |
| Builder Add | 0 | 0 | 1 | **1** |
| Typed join text | 0 | 0 | 0 | **0** |
| Wizard OK | 0 | 0 | 1 | **1** |
| Wizard Cancel | 0 | 0 | 0 | 0 |
| Table entries added | 0 | 0 | 1 | **1** (FX_UMs / fxum) |
| Properties added | 0 | 0 | 0 | 0 |
| New Property wizard | 0 | 0 | 0 | 0 |
| Finish | 0 | 0 | 0 | 0 |
| Save | 0 | 0 | 0 | 0 |
| Check-in / undo checkout | 0 | 0 | 0 | 0 |
| IDO Collections close / reopen | 0 | 0 | 0 | 0 |
| Runtime close / reopen | 0 | 0 | 0 | 0 |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 | 0 |
| Designer actions | 0 | 0 | 0 | 0 |
| Explicit browser calls | 20 | 17 | 38 | **75** |

## 7. Worker-written file inventory (cumulative, T1–T3)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created at T1; updated at T2 and T3).
- `evidence/EXP-066-R2/T1-report.md` (T1).
- `evidence/EXP-066-R2/T2-report.md` (T2).
- `evidence/EXP-066-R2/T3-report.md` (T3; this file).
- Screenshots (`evidence/EXP-066-R2/`):
  - T1: `t1-01-webclient-initial-state-idos-reused.png`, `t1-02-idos-FX_Items-after-f4-settled.png` (misnamed: Filter in Place state), `t1-03-idos-FX_Items-query-settled-identity-tables.png` (misnamed: identity and rows 1–8), `t1-04-ido-tables-baseline-one-entry.png`, `t1-05-final-state-idos-checked-out-save-disabled.png`.
  - T2: `t2-01-pre-new-table-tables-view-one-entry.png`, `t2-02-new-table-wizard-opened-blank-defaults.png`, `t2-03-table-name-typed-before-tab.png`, `t2-04-table-name-after-tab-commit.png`.
  - T3: `t3-01-wizard-precheck-before-alias.png`, `t3-02-alias-fxum-after-tab.png`, `t3-03-builder-first-column-list-open.png`, `t3-04-builder-table-name-list-open.png`, `t3-05-builder-second-column-list-open.png`, `t3-06-wizard-builder-configured-before-add.png`, `t3-07-join-text-after-builder-add.png` (the last state before OK), `t3-08-tables-view-after-ok.png`.
- Tool-written (not worker-authored; outside the EXP-066-R2 path; reported in tool outputs): `evidence/playwright/` files from this task, including `console-2026-10-12T15-53-04-782Z.log`, `page-2026-10-12T15-53-20-534Z.yml`, `page-2026-10-12T15-53-26-152Z.yml`, `page-2026-10-12T15-53-29-556Z.yml`, `page-2026-10-12T15-53-34-948Z.yml` through `page-2026-10-12T15-54-20-997Z.yml` (the full set is not enumerated). The harness and the operator's git review are authoritative.

## 8. Decisive evidence (what each T3 screenshot proves and does not)

- **`t3-01`** (pre-alias gate): proves the wizard is open on tab 1 with Table Name `FX_UMs`, Table Alias empty and focused, Table Type Secondary, Join Type Left Outer, empty builder and join text. Does not prove server acceptance of `FX_UMs`.
- **`t3-02`** (after alias Tab): proves Table Alias `fxum`, Table Name still `FX_UMs`, Table Type Secondary, Join Type Left Outer, focus on Table Type; no visible message. Does not prove the alias is accepted by the server.
- **`t3-03`** (first Column Name list open): proves the list offers FX_UM among the fxum-side columns. Does not prove the selection until `t3-06`.
- **`t3-04`** (builder Table Name list open): proves `FX_Items (fxitms)` is the single offered option. Does not prove the later join.
- **`t3-05`** (second Column Name list open): proves FX_UM is offered among the fxitms-side columns, with FX_Picture also listed. Does not prove the selection until `t3-06`.
- **`t3-06`** (pre-Add configuration; viewed): proves Table Name `FX_UMs`; alias `fxum`; Secondary; Left Outer; builder `FX_UM` = `FX_Items (fxitms)` . `FX_UM`; Join Text empty before Add. Does not prove the join text generated by Add.
- **`t3-07`** (after builder Add, before OK; viewed): proves the join text `fxum.[FX_UM] = fxitms.[FX_UM]` in the Join Text box with the full configuration present, OK and Cancel enabled. This is the pre-submission state. Does not prove the server accepted the join.
- **`t3-08`** (Tables view after OK; viewed): proves two rows, FX_Items (fxitms, Primary Base, Inner) and FX_UMs (fxum, Secondary, Left Outer, join `fxum.[FX_UM] = fxitms.[FX_UM]`), status `(IDO Tables 1 of 2)`; no wizard tab; Save disabled. Does not prove the database, the generated SQL, or persistence across close/reopen (not yet tested).

## 9. Acceptance status (T3)

- **AC-2: SUPPORTED (observed; UI and accessibility level).** Table Name `FX_UMs` committed with Tab (readback `FX_UMs`, no validation message; T2 and T3 gates); Table Alias `fxum`; Table Type Secondary and Join Type Left Outer kept; join text `fxum.[FX_UM] = fxitms.[FX_UM]` recorded verbatim (builder Add, no typed join); every field recorded; one wizard OK with its native response (no text; wizard closed); Tables view lists FX_Items (fxitms) and FX_UMs (fxum) only.
  - Limits: the brackets in the join text come from the builder; the meaning is the intended equality. Server-side validity and generated SQL are not observed in this task. Persistence is not yet tested.
- AC-1: supported (T1); re-checked in the T3 gate (Revision 2, Locked By the operator, 12 properties not re-read in T3; the Tables inventory was re-read after OK).
- AC-3 to AC-6: not started (New Property not opened).
- AC-7: no change beyond the one table entry and the one wizard OK; no other IDO, property, checkout, SQL, Form, preference or Designer change observed. Unload not performed.
- AC-8: partial (T1–T3 audits and inventories recorded; final report reserved).

## 10. Final UI state

- Tab 1 (Web Client) selected, showing the **IDO Tables** tab (`favoriteContext=IdoTables`) for FX_Items: two rows, status `(IDO Tables 1 of 2)`. The IDO Tables panel is clean and was **left open** (the brief does not instruct closing it; no unsaved change).
- The IDOs tab (behind it) for FX_Items: Revision 2, Locked By the operator, Save disabled (per the post-OK snapshot). Not re-read after OK beyond the toolbar state.
- The IDO Table Wizard tab: **closed** by OK (no wizard tab remains; no close action was needed).
- Tab 0 (Web Designer): not acted on (read-only snapshot #1 only, see §1).
- The inherited FX_Items runtime tab: not acted on.
- No browser-native dialog; no unsaved-change prompt observed.

## 11. Blockers and open questions

- No blocker for T3. All prerequisites passed before OK; OK ran once; the Tables result matches the intended two entries.
- Open: whether the server accepted `FX_UMs` and the join as a SQL join, and what SQL it generates. Only the close/reopen recovery (AC-5) can show persistence. Generated SQL is not claimed.
- Open: the Revision Num of the IDO after the table change (not re-read in T3; revision changes are not expected from a table entry alone and are not claimed).
- Open: the join text's bracket quoting: the builder produced `fxum.[FX_UM] = fxitms.[FX_UM]`. Whether a later task should use a typed join instead is not decided; the builder route was used.
- Open (carried): whether the Table Name lookup is complete (EXP-066 T2 issue). The Tab-committed `FX_UMs` was accepted at the readback level and the table entry was created; the lookup completeness question is not resolved by this step.

## 12. Next permitted step

Not permitted in T3: the New Property wizard, Finish, Save, IDO Collections close/reopen, runtime interaction. The next step needs a new decision (for example, a fresh snapshot, then the New Property wizard for FX_UMsDescription under the brief's AC-3 rules).
