# EXP-049 — T9 wizard property configuration: pre-Finish matrix (INCOMPLETE — STOPPED)

Run: R-20261011-020822-9Eej, cycle 10, task T9 (worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
**Result: STOPPED before the four-property configuration was complete.** Two of four properties are fully configured; property 3 is named but has no property class; property 4 is not configured. **Finish was NOT invoked** and must not be invoked until all four are verified. The wizard is left open on the Designer tab (tab 0) with the staged configuration intact.

## Stop reason (non-tab-related timeout; no retry, per instruction)
- Action: click on the Property Class cell of row 3 (ref `e1908`).
- Result: `TimeoutError` (5 s, retried by the tool for ~5 s more). Log: the click target `td` (row 3 Property Class cell) was **intercepted** by an active grid-cell editor overlay: `<input id="mgcombo-3499-inputEl" ... name="UbValue2">` inside `div.mg-active-cell-editor`. That is the Property Class combobox editor of row 1, which stayed attached after row 1's lookup selection in T8.
- Follow-up snapshot (read only): row 3's Property Class cell is now the active editor (combobox `[active]`, blank). The screenshot shows an open-looking dropdown arrow on row 3. The editor was not clicked again. No value was entered into it.
- Per the brief, a non-tab-related timeout stops the step immediately. No retry was made.

## Wizard identity (re-verified before property work; not modified)
| Field | Value (snapshot) | Status |
| --- | --- | --- |
| IDO Name | `FX_Items` | Preserved (T8 entry). |
| IDO Project Name | `FX_HelloWorldProject01` | Preserved. Pre-populated by the wizard; lookup not opened. |
| Table Alias | `fxitms` | Preserved (T8 entry). |
| Site Split | unchecked | Preserved. |
| Table Name | empty, read-only | Preserved as expected (derived on Finish; not typed). |
| View Name | empty | Preserved. |
| Form Type / Form Layout / Device Type | `MultiView` / `GridLeft` / `Default` | Defaults, unchanged. |

## Four-property matrix (state at stop)
| # | Name | Property Class | Data Type | SQL Data Type | Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `FX_Item` | `FX_ItemBase` (native lookup) | String (inherited, displayed) | nvarchar (inherited) | 20 (inherited) | blank | **checked** | **checked** (auto, with PK) | `FX_sItem` (inherited) | blank | **Configured and verified (T8).** Unchanged in T9. |
| 2 | `FX_Description` | none (intended) | `String` (native list, T9) | `nvarchar` (auto) | `150` (typed, T9) | blank | unchecked | unchecked | `FX_sDescription` (typed combobox, T9) | blank | **Configured and verified in the grid (T9).** |
| 3 | `FX_Cost` | **NOT SET** (editor open) | blank | blank | blank | blank | blank | blank | blank | blank | **INCOMPLETE.** Name only. |
| 4 | — | — | — | — | — | — | — | — | — | — | **NOT CONFIGURED.** |

Row count at stop: **3** (row 3 is the intended third business property, not a blank insertion row). No fifth property. No relationship assigned in T9.

## Property 2 detail (T9)
- Name `FX_Description` typed (Name cell); Tab.
- Data Type: list option `String` chosen from the native Data Type lookup (list options: Long Integer, NumSortedString, Short Integer, String, Big Integer, ...). Row shows `String`; SQL Data Type auto-populated `nvarchar`.
- Property Length `150` typed; Tab. Row shows `150`.
- Label String ID: `FX_sDescription` typed into the combobox; Tab. Row shows `FX_sDescription`. **Not confirmed as a selection from a resource list.** The combobox accepted the typed text. This is consistent with the brief's string but does **not** verify the string resource (AC-3 for FX_sDescription remains unverified).
- Primary Key and Required left unchecked (correct for a non-key column).
- Default Value and Decimal Precision left blank (preserved unrelated defaults).
- Focus briefly landed in the Decimal Precision and Default Value editors (no typing there).

## Property 3 detail (T9, incomplete)
- Row added with Add Row; Name `FX_Cost` typed; Tab. Name verified in the grid.
- Property Class: **not set.** The click on the class cell was intercepted (see Stop reason). The editor on row 3 is open and blank.
- Not verified: class resolution to `FX_Cost`; inherited Decimal, 18, 2, default 0, decimal, FX_sCost; Label String ID.

## Property 4 detail
- Not added. Not configured.

## Lookup and resolution status
- Native Property Class lookup (T8, row 1): the list showed FX_Cost, FX_ItemBase and FX_UM. **FX_ItemBase was selected and verified.** FX_Cost and FX_UM were **not selected** in T9, so their resolution is **not verified** by a wizard selection in this task.
- The lookup list was visible only in the T8 page (partly scrolled); the full list was not inspected.

## Action counts (T9)
| Category | Count |
| --- | --- |
| Add Row | 2 (rows 2 and 3) |
| Name entries (typed) | 2 (`FX_Description`, `FX_Cost`) |
| Data Type list selection | 1 (row 2, `String`) |
| Property Length typed | 1 (`150`) |
| Label String ID typed | 1 (`FX_sDescription`) |
| Property Class lookup selection | 0 |
| Checkbox clicks (PK/Required) | 0 |
| Intercepted / timed-out clicks | 1 (row 3 Property Class cell; no retry) |
| Tab commits | 5 (after each text entry) |
| Finish | **0** |
| Next / Back | 0 / 0 |
| Cancel | 0 |
| Create Form response | 0 |
| Save (any) | 0 |
| New (Designer or wizard) | 0 (the Designer `New` was not clicked) |
| Check in / check out | 0 |
| Designer edits | 0 |
| Tab selections | 0 (tab 0 was current at start; no selection needed) |
| Close / reopen runtime Form | 0 |
| Browser evaluate / run-code | 0 |

## Browser snapshots and screenshots (T9)
- Fresh snapshot, start of T9 (wizard confirmed open): `evidence/EXP-049/T9-00-fresh-snapshot-wizard-open.yml`.
- After row 2 name: `evidence/EXP-049/T9-01-snapshot-after-row2-name.yml`.
- After row 2 length: `evidence/EXP-049/T9-02-snapshot-after-row2-length.yml`.
- After row 2 label: `evidence/EXP-049/T9-03-snapshot-after-row2-label.yml`.
- After row 3 name: `evidence/EXP-049/T9-04-snapshot-after-row3-name.yml`.
- At stop: `evidence/EXP-049/T9-05-snapshot-at-stop-row3-class-intercepted.yml`.
- Screenshot at stop: `evidence/EXP-049/T9-06-wizard-stop-state-row3-class-intercepted.png` — wizard page 1; rows 1 (FX_Item, FX_ItemBase, String, nvarchar), 2 (FX_Description, blank class, String, nvarchar), 3 (FX_Cost, editor open with blank class); Finish greyed; Next enabled, not pressed. Shows the rows and the open editor. Does **not** show the PK/Required/Label columns (scrolled out), nor properties 2 and 4 in full.
- Tool-written snapshots `evidence/playwright/page-2026-10-10T18-42-*.yml` (Add Row, row edits) and console logs were not written by the worker.

## Acceptance-check status (pre-Finish, after T9)
| AC | Status after T9 | Basis |
| --- | --- | --- |
| AC-4 wizard identity | Supported at the stage T8 reached, and preserved here. Route and identity visible. Schema dbo not visible before Finish (accepted by operator). | T9-00 snapshot; T9-06 screenshot. |
| AC-5 property configuration | **NOT MET.** Properties 1 and 2 verified; property 3 incomplete (no class, no inherited values); property 4 absent. Lookup of FX_Cost and FX_UM not performed in T9. | Matrix above. |
| AC-6 single completion | **NOT PERFORMED.** Finish not invoked. | Action counts. |
| AC-1, AC-2, AC-3 | Unchanged from T5–T8 (AC-2 same-session UI passed; AC-3 FX_sDescription unverified). | Prior records. |
| AC-7 to AC-12 | Not performed. | — |

## Limitations
- Inherited values are shown in the grid, not read from stored metadata.
- The FX_sDescription label was typed, not verified against a resource.
- The row-1 Property Class editor remained attached after T8; its presence over row 3 is the observed cause of the intercept. The cause of the overlay persisting is not established.
- The tab-0 current-tab state at T9 start matches earlier occurrences; no cause identified.

## Next permitted action (coordinator decision)
A new, separately authorized task is needed to finish property 3 (select FX_Cost through the native lookup, verify inherited values) and property 4 (select FX_UM, verify the FX_UMs domain relationship), after the row-1 editor overlay is cleared by a supported action the coordinator approves. Finish remains prohibited until all four rows are verified. The wizard is staged and open; no discard, cancel, or save has been done.
