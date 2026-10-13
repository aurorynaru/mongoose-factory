# EXP-073 — Hello World Part 4 Section 12: Enter Two FX_Orders Records at Runtime and Observe AUTONUMBER() Order Numbers and the Domain Lists

**CURRENT STATUS (after T6, cycle 5; final documentation only, zero browser calls): ACCEPTED AS OBSERVED.** All nine acceptance checks are supported at same-session UI level. The qualifications (inferred Save success, inferred Order Number read-only state, clipped grid cells, screenshot-only stars, no independent database read, no close screenshot between close and reopen) are stated in `evidence/EXP-073/T6-final-acceptance-report.md`. Final browser state (inherited from T5): FX_Orders runtime open and selected, clean, two unstarred rows, no dialog. Classification: observed only; NOT replay_verified.

**Earlier status (after T5, cycle 4): RECOVERY OBSERVED AT UI LEVEL, SAME SESSION. One clean Form-tab close (no prompt), one reopen through Form > Open and Select Form (OK once), one Filter in Place with blank criteria and one F4. The settled grid shows exactly two unstarred data rows: `1`/FX001/dumbbell/`2` and `2`/FX002/eggs/`1`; no third row; no placeholder. Status `Customer ID (Object 1 of 2)` (focus prefix; row 1 current). Save disabled; no unsaved-change indication; no dialog. The reopened add-mode placeholder displayed Order Number `3` before the query (displayed value; source not established). Stopped after documenting recovery. AC-7 and AC-8 supported at UI level; AC-9 NOT finalised. Classification: observed only (same session, UI level). NOT replay_verified. Not independent database durability, not cross-session persistence, not uniqueness across sessions.

**Earlier status (after T4, cycle 3): ONE ordinary toolbar Save invoked, once, with no retry. Native response: no alert, toast, message or prompt; Save button went disabled. Post-Save grid shows two rows, `1`/FX001/dumbbell/2 and `2`/FX002/eggs/1, unchanged; row-header stars gone; Order Number header asterisk gone; Order Number field shaded grey (read-only inferred from shading, not from an accessibility attribute); status `Count (Object 2 of 2)`. Form open and clean (Save disabled). No close, no reopen, no recovery query, no New. Displayed numbers after Save are client-side values, not database readbacks. Classification: observed only (same session, UI level). NOT replay_verified. No database persistence, durability, saved-value or cross-session claim.

**Earlier status (after T3, cycle 2): BOTH ROWS ENTERED AND VERIFIED IN THE UNSAVED GRID — row 1 `1` / FX001 / dumbbell / 2; row 2 `2` / FX002 / eggs / 1 (Count default, not edited). Displayed Order Numbers `1` and `2`, distinct, not typed. Exactly one toolbar New was invoked (T3). Toolbar Save NOT invoked. The Form is open and dirty (Save enabled). No close, no reopen, no gate rerun.** Next permitted action (separate authorisation): ONE ordinary toolbar Save of the two verified rows, then the post-Save readbacks. Classification: **observed only (same session, UI level). NOT replay_verified.** No saved value, no AUTONUMBER() source, no database read, no durability, no cross-session or replay claim.

**Earlier status (after T2, cycle 1):** row one entered and verified in the unsaved grid (FX001 / dumbbell / 2; displayed `1`).

**Earlier status (after T1, cycle 0):** T1 COMPLETE — preflight, empty-collection gate and both list inspections PASSED at observed UI level, same session. NO VALUE ENTERED.

## Run identity

- Experiment EXP-073, cycle 0, task T1 (bounded: read-only preflight, gate and list inspection; stop before entry).
- Worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`; run `R-20261013-171432-pH6P`; task_message_id `cdc3eeb5-c635-4283-874c-a63b14bd2e03`.
- Date 2026-10-13. Mode: LEARNING MODE. FX_-only scope (AGENTS.md, 2026-10-10). Editing scope User (Forms stay User-scoped; the table and IDOs are tenant-wide and were not touched).
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; identity bar shows the operator account (not recorded as a credential).
- Target: runtime Form `FX_Orders` (EXP-072, User scope), table `dbo.FX_Orders` (EXP-071-R2), IDO `FX_Orders`.
- Evidence directory `evidence/EXP-073/`.

## Sources reviewed before any browser action

- `AGENTS.md` (full).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 12, lines 569–575 (16:34–17:04). The narration says the form opens in add mode with Order Number defaulting to 1 "because it's using the autonumber keyword which will automatically increment the value by 1", that the ID and item fields have list sources from the domain IDO information in the property classes, that the order number increments by one each time a record is added, and then Save. Trust: unverified (speech-to-text transcript). The transcript's `AUTO NUMBER()` narration is treated as the `AUTONUMBER()` default recorded in EXP-070 and EXP-071-R2 (observed there in the definitions).
- `experiments/EXP-072-hello-world-part-4-section-11b-fx-orders-form.md` (FX_Orders Classic Multi-View Form; captions `FX_sOrderNumber`, `FX_sCustomerID`, `FX_sItem`, `FX_sCount`; runtime Add-mode baseline with Order Number 1; Add mode not confirmed by a label in EXP-072).
- `experiments/EXP-071-R2-hello-world-part-4-section-11a-fx-orders-table-and-ido.md` (IDO `FX_Orders` and `dbo.FX_Orders`; FX_Count default 1; the table's FX_Count SQL default is blank and nullable — noted in EXP-071-R2 T9). The T1 for EXP-073 does not re-read the IDO or table.
- `experiments/EXP-046-hello-world-part-2-two-fx-ums-test-records-and-run.md` (empty-criteria gate: one FiP + F4 with blank criteria; one starred blank row; status count token `(Object 1 of 1)`; the caption prefix in the status text is expected).
- `experiments/EXP-051-hello-world-part-2-fx-items-domain-validation-and-.md` (combobox list selection by clicking the native option; closing a list with its Open toggle; no Escape; a focus move settles the editor).
- The EXP-073 brief text in the task message. The brief file itself (`experiments/…` record) did not exist in the repository when T1 started; this record was created by this worker.

## Starting state

- Web Client tab list (before any selection): tab 0 Designer (URL `MGForm=FX_Orders`, not selected, not touched); tab 1 Mongoose (`favoriteContext=SqlTables`, current). Tab 1 was selected after the list.
- Web Client Form tabs before the open: `FX_Items`, `Property Classes`, `IDO Projects`, `IDOs`, `Sql Tables` (Sql Tables selected). No `FX_Orders` runtime open. Left as found.
- Session usable. No `Session Expired` modal, no Infor sign-in page, no portal banner, no native dialog. **No re-login.**

## Actions (T1, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | Tab 0 Designer; tab 1 Mongoose (current) | — |
| 2 | `browser_tabs` select tab 1; untargeted snapshot | Web Client selected; Sql Tables panel; no FX_Orders runtime open | — |
| 3 | Form menu (click `Form`) | Form menu opened, listing Open, Close and Save Changes, … | tool snapshot |
| 4 | Click menu item `Open` (not `Close and Save Changes`) | Select Form dialog opened; Filter pre-filled `FX_Orders` (set by Mongoose, not typed); Filter By Name; Case Sensitive and Starts With unchecked; exactly one row `FX_Orders / FX_Orders` | `find` "Select Form"; targeted snapshot |
| 5 | Click the row `FX_Orders / FX_Orders` (one click) | Row selected | — |
| 6 | Click Select Form `OK` (one click) | Page `favoriteContext` changed to `FX_Orders`; runtime FX_Orders tab opened and selected | URL |
| 7 | Untargeted snapshot | Runtime Form identity and state (see the preflight section) | inline snapshot |
| 8 | Screenshot — preflight | Captured | `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png` |
| 9 | Click the toolbar `FiP` (Filter in Place) (one click) | Status `Filter in Place`; criteria blank; New and Refresh disabled | snapshot `page-2026-10-13T09-15-22-069Z.yml` (tool) |
| 10 | Press `F4` (one key) | Mode exited; one starred placeholder row; blank Customer ID and Item | snapshot `page-2026-10-13T09-15-32-289Z.yml` (tool) |
| 11 | Wait 2 s (settle) | — | — |
| 12 | Screenshot — gate (settled) | One starred row; Order Number `1` (display); Customer ID and Item blank; Count `1`; status `Order Number (Object 1 of 1)` | `evidence/EXP-073/gate-after-one-f4-empty-criteria.png` |
| 13 | `find` regex `button "Open"` (read-only, to get current refs) | Customer ID Open `f1e469`; Item Open `f1e479` | — |
| 14 | Click the Customer ID combobox `Open` toggle (one click) | Native list opened: FX001, FX002 | snapshot `page-2026-10-13T09-15-45-956Z.yml` (tool) |
| 15 | Screenshot — Customer ID list open | Captured | `evidence/EXP-073/list-fx-customer-id-open.png` |
| 16 | Click the Customer ID `Open` toggle again (close; no option clicked; no Escape) | List closed; combobox has no value; Save disabled | snapshot `page-2026-10-13T09-15-54-913Z.yml` (tool) |
| 17 | Click the Item combobox `Open` toggle (one click) | Native list opened: dumbbell, eggs, guitar | snapshot `page-2026-10-13T09-16-01-705Z.yml` (tool) |
| 18 | Screenshot — Item list open | Captured | `evidence/EXP-073/list-fx-item-open.png` |
| 19 | Click the Item combobox `Open` toggle again (close; no option clicked; no Escape) | List closed; combobox has no value; Save disabled | snapshot `page-2026-10-13T09-16-08-653Z.yml` (tool) |

Not done in T1 (by instruction): no typing; no value selected or committed; no `New`; no `Save`; no Order Number or Count edit; no second query; no Refresh; no close or reopen of the runtime Form; no Designer tab action; no unload, FormSync, deployment, check-in or check-out; no Escape; no JavaScript, evaluate, run-code, console or network inspection; no direct URL navigation; no refresh or restart; no re-login.

## Preflight (AC-1)

| Item | Observed |
| --- | --- |
| Identity | Form tab `FX_Orders` selected (`tab [selected] "FX_Orders"`); tabpanel `FX_Orders`; close control `Close Panel FX_Orders`. Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Add-mode state | **Add mode inferred, not labelled.** One starred new-row placeholder (screenshot); Order Number pre-filled `1`; Count pre-filled `1`; Save disabled. No explicit mode caption was observed (same as EXP-072 T11). |
| Captions | `Order Number:*`, `Customer ID:*`, `Item:*`, `Count:`. Grid columns `* Order Number`, `* Customer ID`, `* Item`, `Count`. |
| Controls | Order Number textbox (value `1`, focused, value selected); Customer ID combobox (blank, Open button); Item combobox (blank, Open button); Count textbox (`1`). |
| Status bar | `Order Number (Object 1 of 1)` |
| Save / toolbar | Save disabled; New and Refresh enabled; no dialog. |
| Mutation before preflight | None. |

Screenshot: `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png` — shows the FX_Orders tab selected under the DEM identity bar, one starred row showing 1 and Count 1, the blank Customer ID and Item comboboxes, Save greyed and the status `Order Number (Object 1 of 1)`. **Does not prove:** the mode as a label; that `1` is a database-generated value (no row has been saved); the table's contents beyond the query.

## Empty-collection gate (AC-2) — PASSED under the accepted count rule

Query: one FiP click (criteria read blank in the FiP snapshot: Order Number, Customer ID, Item and Count all empty; no criteria row star), then ONE `F4`. Two-second settle. No Refresh, no second F4.

| Condition (EXP-042-R3 / EXP-046 rule) | Observed after F4 | Met |
| --- | --- | --- |
| Grid shows exactly one row | One row (row header `1`; data row `1 1`) | Yes |
| That row carries the blue new-row star | Blue star in the screenshot `gate-after-one-f4-empty-criteria.png` (star not in the accessibility tree, as in EXP-046) | Yes (screenshot) |
| Customer ID and Item blank | Both comboboxes blank | Yes |
| Status-bar count token reads `(Object 1 of 1)` | `Order Number (Object 1 of 1)` | Yes (the focused-field caption prefix `Order Number` is expected and does not change the count) |

Gate verdict: **holds.** The zero-record baseline is established at UI level for the Web Client's FX_Orders primary collection under the accepted rule. **Limits:** the F4 execution and its query are inferred from the FiP exit and the settled placeholder (the same inference EXP-046 T2 recorded); no database read; the FiP-blank criteria are read from the accessibility snapshot. Not evidence of uniqueness or durability.

Screenshot: `evidence/EXP-073/gate-after-one-f4-empty-criteria.png` — one starred row; Order Number displayed `1` (not typed); Customer ID and Item blank; Count `1`; Save greyed; FiP off; status `Order Number (Object 1 of 1)`. **Does not prove:** the query's completeness beyond the display; the placeholder's cause.

## List sources (AC-3) — read-only; nothing selected

### FX_CustomerID list (one open, one close by the Open toggle)

| Option (key) | FX_Label text shown |
| --- | --- |
| FX001 | Factory test one |
| FX002 | Factory test two |

Expected: FX001 and FX002. **Matches.** Closed by the Open toggle (`f1e469`); no option clicked; no Escape. After close the combobox shows no value and no listbox remains. Screenshot `evidence/EXP-073/list-fx-customer-id-open.png` shows both options with the combobox empty. **Does not prove:** list completeness beyond the rendered options (two rows).

### FX_Item list (one open, one close by the Open toggle)

| Option (key) | FX_Description text shown |
| --- | --- |
| dumbbell | 45 pound iron |
| eggs | cage free |
| guitar | natural acoustic |

Expected: dumbbell, eggs and guitar. **Matches.** Closed by the Open toggle (`f1e479`); no option clicked; no Escape. After close the combobox shows no value and no listbox remains. Screenshot `evidence/EXP-073/list-fx-item-open.png` shows the three options with the combobox empty. **Does not prove:** completeness beyond the rendered options.

### Other observations during the list inspection

- The Customer ID caption border turned red when focus moved to Item. This is the required-field indicator on an empty required field. No message, alert or prompt appeared. It is recorded as an observation, not as a validation result.
- The status bar caption prefix changes with the focused field: `Customer ID (Object 1 of 1)` and `Item (Object 1 of 1)`. Count token unchanged.

## Acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 Sources reviewed; session usable; FX_Orders runtime open with identity, Add mode, captions and status bar recorded; no mutation | **SUPPORTED (observed, UI level).** | `preflight-fx-orders-runtime-add-mode.png`; `T1-accessibility-readbacks.md` R1 | Add mode inferred (no label). Form definition cited from EXP-072, not re-read. |
| AC-2 Empty-collection gate: one empty-criteria query; one starred blank row; `(Object 1 of 1)` | **SUPPORTED (observed, UI level).** Gate holds under the accepted rule. | `gate-after-one-f4-empty-criteria.png`; readbacks R2, R3 | Star from screenshot; query inferred from the FiP exit; no database read. |
| AC-3 List sources: FX001 and FX002; dumbbell, eggs and guitar, with descriptions recorded; both closed by the Open toggle with nothing selected | **SUPPORTED (observed, UI level).** | `list-fx-customer-id-open.png`; `list-fx-item-open.png`; readbacks R4–R7 | Rendered options only. |
| AC-4 to AC-9 | **NOT RUN** (T1 stops before entry, per the bounded instruction). | — | — |

## AUTONUMBER() observations so far (displayed, not saved)

| Observation | Value | State |
| --- | --- | --- |
| Order Number displayed on the add-mode placeholder before any entry (preflight) | `1` | observed (one run) |
| Order Number displayed on the same placeholder after one FiP + F4 | `1` | observed (one run) |
| Order Number for row one or row two (not yet entered) | not yet observed | — |
| Whether the displayed `1` is the `AUTONUMBER()` default or a placeholder value | **unresolved** (no row saved; the source is not established) | — |

No Order Number was typed or edited. No database-generated value is claimed.

## Action audit (T1, exact counts; worker-requested browser calls)

| Operation | T1 | Cumulative (EXP-073) |
| --- | --- | --- |
| Runtime opens (Form > Open; Select Form row click; OK) | **1** (Form menu 1; Open item 1; row 1; OK 1) | **1** |
| Runtime close / reopen | **0 / 0** | **0 / 0** |
| Gate queries (FiP click + F4) | **1** (FiP 1; F4 1) | **1** |
| Recovery queries after reopen | **0** | **0** |
| List inspections (open + close by Open toggle) | **2** (Customer ID 1; Item 1) | **2** |
| Rows entered; New; Save | **0 / 0 / 0** | **0 / 0 / 0** |
| Order Number / Count / Customer ID / Item edits | **0** | **0** |
| Values selected in lists | **0** | **0** |
| Designer actions (tab selections or changes) | **0** | **0** |
| Metadata changes (Forms, IDOs, property classes, SQL tables, strings) | **0** | **0** |
| Unloads / FormSync / deployment / check-in / check-out | **0 / 0 / 0 / 0 / 0** | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | **0 / 0 / 0 / 0 / 0** | **0** |
| Browser JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Clicks (successful / failed) | **9 / 0** (Form menu; Open item; row; OK; FiP; Customer ID Open ×2; Item Open ×2) | **9 / 0** |
| `browser_type` fills (succeeded / refused) | **0 / 0** | **0 / 0** |
| Key presses | **1** (F4) | **1** |
| Waits | **1** (2 s) | **1** |
| `browser_tabs` list / select | **1 / 1** | **1 / 1** |
| Snapshots untargeted / targeted | **2 / 1** | **2 / 1** |
| `browser_find` calls | **4** (`Open`; `Select Form`; `OK`; regex `button "Open"`) | **4** |
| Screenshots (worker-requested PNG) | **4** (`preflight`, `gate`, `list-fx-customer-id-open`, `list-fx-item-open`) | **4** |
| In-page dialogs answered | **1** (Select Form OK) | **1** |
| Native browser dialogs | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Ref-not-found errors / recovery snapshots used / timeouts | **0 / 0 / 0** | **0 / 0 / 0** |

Tool-generated snapshot YAML files and console logs under `evidence/playwright/` are written by the MCP tool, not by the worker, and are not counted.

## Worker-written-file inventory

| File | Action |
| --- | --- |
| `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | created (this record) |
| `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png` | created |
| `evidence/EXP-073/gate-after-one-f4-empty-criteria.png` | created |
| `evidence/EXP-073/list-fx-customer-id-open.png` | created |
| `evidence/EXP-073/list-fx-item-open.png` | created |
| `evidence/EXP-073/T1-accessibility-readbacks.md` | created |

Tool-generated (not worker-authored): snapshot YAML files `evidence/playwright/page-2026-10-13T09-14-52-837Z.yml` through `page-2026-10-13T09-16-08-653Z.yml` (10 files written by the click and find calls) and console logs under `evidence/playwright/` (`console-2026-10-13T09-14-46-895Z.log`, `console-2026-10-13T09-14-46-896Z.log`, and any later console files, not enumerated). Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

## Decisive evidence (what each file shows and does not prove)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `preflight-fx-orders-runtime-add-mode.png` | FX_Orders tab selected; DEM identity bar; one starred row `1` / Count `1`; blank Customer ID and Item; Save greyed; status `Order Number (Object 1 of 1)` | AC-1 identity, captions and the status bar before any action | The mode label; that `1` is database-generated; table contents |
| `gate-after-one-f4-empty-criteria.png` | Same tab; one starred row; Order Number `1`; Customer ID and Item blank; Count `1`; FiP off; Save greyed; status `Order Number (Object 1 of 1)` | AC-2 gate under the accepted count rule (UI level) | Database emptiness; query completeness beyond display |
| `list-fx-customer-id-open.png` | Customer ID list open: FX001 `Factory test one`; FX002 `Factory test two`; combobox empty | AC-3 FX_CustomerID options and labels | Completeness beyond two rows; the close step (verified by snapshot, not screenshot) |
| `list-fx-item-open.png` | Item list open: dumbbell `45 pound iron`; eggs `cage free`; guitar `natural acoustic`; combobox empty | AC-3 FX_Item options and descriptions | Completeness beyond three rows; the close step (verified by snapshot, not screenshot) |
| `T1-accessibility-readbacks.md` | Transcribed accessibility readbacks R1–R7 with snapshot file references | Exact text of captions, options, the status bar and toolbar state | Visual layout (use the screenshots) |

Closed-state checks for both lists are recorded in the readback file (R5, R7) from the accessibility snapshots, not from a screenshot. The brief's AC-3 evidence is the open-list screenshots.

## Final state (end of T1)

- Web Client (tab 1) selected. Runtime Form `FX_Orders` open and selected (clean: Save disabled; FiP off; no dialog; no unsaved-change indication). Its one row is the add-mode placeholder; no value has been entered.
- Customer ID and Item comboboxes are closed and empty. The Item combobox holds focus (`[active]`) with no value.
- Designer (tab 0) not selected or acted on. No dialog, no native prompt, no portal banner.
- Form tabs other than FX_Orders are unchanged (`FX_Items`, `Property Classes`, `IDO Projects`, `IDOs`, `Sql Tables`).
- No row is saved; no database value is claimed.

## T2 — Row one entered and verified; stopped before New and Save (cycle 1)

- Task T2, cycle 1, worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`, run `R-20261013-171432-pH6P`, task_message_id `25be06ef-9d98-4985-8f44-15591b65387e`. Date 2026-10-13.
- Scope (bounded instruction): one row only. Re-check the runtime state by one fresh snapshot; record the displayed Order Number without editing it; select FX001 and dumbbell from the native lists by click; replace Count `1` with `2` by one fill; move focus once; verify; screenshot; stop before New and Save. No close. The T1 gate and list inspections were not repeated.
- Readbacks: `evidence/EXP-073/T2-row1-accessibility-readbacks.md` (S1–S8). Screenshot: `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png`.

### Disclosed deviation at the start of T2

- The tab list taken before any selection showed **tab 0 (Designer) as the current tab**. The first untargeted snapshot therefore returned the Designer page. The worker did not read or act on that content and did not interact with the Designer. Tab 1 (Web Client) was then selected (tab selection, not a Mongoose action), and a second untargeted snapshot read the Web Client state used for all T2 observations. This snapshot read counts as one untargeted snapshot.

### Actions (T2, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer **(current)**; tab 1 Mongoose (`favoriteContext=FX_Orders`) | — |
| 2 | Untargeted snapshot (taken while tab 0 was current; see the disclosed deviation) | Designer page returned; no action taken on it | tool-saved output (not read) |
| 3 | `browser_tabs` select tab 1 | Tab 1 (Web Client) current | — |
| 4 | Untargeted snapshot of tab 1 | FX_Orders selected; starred add-mode row `1` / Count `1`; Customer ID and Item blank; Save disabled; no dialog; status `Item (Object 1 of 1)`; Order Number textbox `1` | S2 |
| 5 | Click the Customer ID `Open` toggle (f1e184) | List open: FX001, FX002 | `page-2026-10-13T09-18-54-133Z.yml` (tool) |
| 6 | Click the `FX001` option (f1e219) | Customer ID `FX001`; list closed; grid cell `FX001`; Save enabled (dirty) | S4; `page-2026-10-13T09-18-57-912Z.yml` (tool) |
| 7 | Click the Item `Open` toggle (f1e194) | List open: dumbbell, eggs, guitar | `page-2026-10-13T09-19-03-320Z.yml` (tool) |
| 8 | Click the `dumbbell` option (f1e234) | Item `dumbbell`; list closed; grid cell `dumbbell` | S6; `page-2026-10-13T09-19-06-983Z.yml` (tool) |
| 9 | One fill: Count textbox (f1e203) `2` | Count `2` in the textbox and in the grid cell `2` | S7 |
| 10 | One focus move: one Tab key press | Focus left Count; status `Count (Object 1 of 1)`; values settled | S8 |
| 11 | Untargeted snapshot after the Tab | Values verified (see below) | S8 |
| 12 | Screenshot | Captured | `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png` |

Not done in T2 (by instruction): no New; no Save; no Order Number edit or typing; no typing into either combo box; no Escape; no second row; no close or reopen; no F4 or FiP; no Designer action; no list value other than FX001 and dumbbell; no re-run of the gate or list inspection.

### Row one verification (settled; accessibility readback S8)

| Item | Observed (displayed) |
| --- | --- |
| Displayed Order Number | `1` — **displayed, not typed, not edited** |
| Customer ID | `FX001` (native list option, clicked) |
| Item | `dumbbell` (native list option, clicked) |
| Count | `2` (one fill, replacing the default `1`) |
| Grid row | one row: `1` / `FX001` / `dumbbell` / `2` (grid cells, accessibility) |
| Row indicator | blue new-row star visible in the screenshot (not in the accessibility tree) |
| Row count | one data row; no second row |
| Save | enabled (dirty, **not invoked**) |
| Status bar | `Count (Object 1 of 1)` (focus-field caption prefix, expected) |
| Dialogs, alerts, validation text | none observed |

Acceptance (T2 scope):
- **AC-4 (row one):** supported at UI level. Displayed Order Number recorded and not typed; FX001 and dumbbell chosen from the native lists; Count `2`; all four values verified in the input fields and the grid row. Screenshot supports the input values and the star; the grid cells are supported by the accessibility readback only (the screenshot clips them).
- AC-5 to AC-9: not run (row two, Save, close/reopen and recovery are later steps).

### AUTONUMBER() observations (displayed only; no save has occurred)

| Observation | Value | State |
| --- | --- | --- |
| Order Number displayed on the add-mode row before any entry (T1 preflight) | `1` | observed (one run) |
| Order Number displayed on the same row after the FiP + F4 gate (T1) | `1` | observed (one run) |
| Order Number displayed on row one after entry and focus move (T2) | `1` | observed (one run); displayed, not saved |
| Whether this `1` is the `AUTONUMBER()` default or a placeholder | **unresolved** (no row saved; the source is not established) | — |
| Row-two displayed Order Number | not yet observed (T3 step) | — |
| Saved Order Number | not yet observed (no Save) | — |

### Action counts (T2, incremental and cumulative)

| Operation | T2 | Cumulative (T1 + T2) |
| --- | --- | --- |
| Runtime opens / closes / reopens | 0 / 0 / 0 | **1 / 0 / 0** |
| Gate queries (FiP click + F4) | 0 | **1** (FiP 1; F4 1) |
| Recovery queries | 0 | **0** |
| List inspections (open + close) | 0 (the two T1 inspections are not repeated; T2 used the Customer ID and Item lists only to select values) | **2 inspections (T1)**; T2 opened each list once more to select (Customer ID 1, Item 1) |
| Rows entered (row one in progress, unsaved) | 1 (row one, not saved) | **1** |
| New | 0 | **0** |
| Save | 0 | **0** |
| Order Number edits / typing | 0 / 0 | **0 / 0** |
| Combo box typing | 0 | **0** |
| Field fills (Count `2`) | 1 (succeeded 1 / refused 0) | **1 (1 / 0)** |
| Values selected from lists (FX001; dumbbell) | 2 | **2** |
| Values committed by accident | 0 | **0** |
| Clicks (successful / failed) | 4 / 0 (Customer ID Open; FX001 option; Item Open; dumbbell option) | **13 / 0** (T1 9 / 0; T2 4 / 0) |
| Key presses | 1 (Tab, one focus move) | **2** (F4 1; Tab 1) |
| Waits | 0 | **1** (2 s, T1) |
| `browser_tabs` list / select | 1 / 1 | **2 / 2** |
| Snapshots untargeted / targeted | 3 / 0 | **5 / 1** |
| `browser_find` calls | 0 | **4** |
| Screenshots (worker-requested PNG) | 1 | **5** |
| In-page dialogs answered | 0 | **1** (Select Form OK, T1) |
| Native browser dialogs | 0 | **0** |
| Portal banner dismissals | 0 | **0** |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | **0 / 0 / 0** |
| Designer actions (interaction) | 0 | **0** (one read-only snapshot taken while tab 0 was current; disclosed above) |
| Designer metadata changes | 0 | **0** |
| Unloads / FormSync / deployment / check-in / check-out | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| JavaScript, evaluate, run-code, console or network inspection, direct SQL | 0 | **0** |

### Worker-written-file inventory (T2)

| File | Action |
| --- | --- |
| `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | edited (status line; this T2 section) |
| `evidence/EXP-073/T2-row1-accessibility-readbacks.md` | created |
| `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png` | created |

Tool-generated (not worker-authored): snapshot YAML and console files under `evidence/playwright/` written by the MCP tool during T2 (for example `page-2026-10-13T09-18-54-133Z.yml` through `page-2026-10-13T09-19-06-983Z.yml`, the post-Tab snapshot file, and `console-2026-10-13T09-18-46-446Z.log`/`…447Z.log` and related files). The harness-saved output of the first (Designer) snapshot is in the tool-results area, not in the repository. Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

### Decisive evidence (T2)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `row1-fx001-dumbbell-count2-settled.png` | FX_Orders tab selected; DEM identity bar; starred row-header `1`; Order Number textbox `1`; Customer ID `FX001`; Item `dumbbell`; Count `2`; Save icon coloured; status `Count (Object 1 of 1)` | Input-field values of row one; star; Save enabled (dirty); no dialog | Grid data cells (clipped at the left of the image); the saved state; the database |
| `T2-row1-accessibility-readbacks.md` (S8) | Grid row `1` / `FX001` / `dumbbell` / `2`; inputs `1` (Order Number), `FX001`, `dumbbell`, `2`; Save enabled; one data row | Exact text of the grid cells and inputs after settle | Star (not in the tree); persistence |

### Blockers and state at the stop

- **No blocker.** No Ref-not-found, no timeout, no validation message, no alert, no unexpected prompt, no Order Number change, no session expiry.
- **Stopped** with the Form open and dirty (Save enabled, not invoked) and row one holding FX001 / dumbbell / 2. Toolbar New was not invoked. Nothing has been saved.
- Customer ID and Item comboboxes are closed; focus is in the status-bar text box after the Tab (the Count textbox is not focused). No open list.

## T3 — Row two entered and verified; both rows unsaved; stopped before Save (cycle 2)

- Task T3, cycle 2, worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`, run `R-20261013-171432-pH6P`, task_message_id `5b652617-59c2-40c2-8a14-93f5ad1b0fe1`. Date 2026-10-13.
- Scope (bounded instruction): one toolbar New; record the displayed Order Number without typing; FX002 and eggs from the native lists by click; leave Count at its default; one focus move; verify both rows; screenshot; stop before Save. No close, reopen, gate rerun or metadata change.
- Readbacks: `evidence/EXP-073/T3-row2-accessibility-readbacks.md` (T3-S1 to T3-S9).

### Actions (T3, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer **(current)**; tab 1 Mongoose (`favoriteContext=FX_Orders`) | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 (Web Client) current. Designer not touched | — |
| 3 | Untargeted snapshot of tab 1 | FX_Orders selected; row one `1` / FX001 / dumbbell / 2; Save enabled; Count textbox `2`; no dialog; status `Count (Object 1 of 1)` | T3-S1 |
| 4 | Click toolbar `New` (f1e31) — **one click** | Second row added; Order Number displayed `2`; Count `1`; Customer ID and Item blank; status `Order Number (Object 2 of 2)`; no alert, prompt or validation | T3-S2; `page-2026-10-13T09-21-22-818Z.yml` (tool) |
| 5 | Screenshot before the next action | Two starred row headers (1 and 2; row 2 current) | `evidence/EXP-073/row2-after-new-before-selection.png` |
| 6 | Click the Customer ID `Open` toggle (f1e186) | List open: FX001, FX002 | T3-S4; `page-2026-10-13T09-21-32-545Z.yml` (tool) |
| 7 | Click the `FX002` option (f1e247) | Customer ID `FX002`; list closed; status `Customer ID (Object 2 of 2)` | T3-S5; `page-2026-10-13T09-21-36-557Z.yml` (tool) |
| 8 | Click the Item `Open` toggle (f1e196) | List open: dumbbell, eggs, guitar | T3-S6; `page-2026-10-13T09-21-40-283Z.yml` (tool) |
| 9 | Click the `eggs` option (f1e260) | Item `eggs`; list closed; grid cell `eggs` on row 2 | T3-S7; `page-2026-10-13T09-21-44-171Z.yml` (tool) |
| 10 | One focus move: one Tab key press | Focus moved to Count (value `1`, not edited); status `Count (Object 2 of 2)` | T3-S8 |
| 11 | Untargeted snapshot after the Tab | Both rows verified (see below) | T3-S8 |
| 12 | Screenshot | Two-row pre-Save state | `evidence/EXP-073/two-rows-before-save-settled.png` |

Not done in T3 (by instruction): no toolbar Save; no second New; no Order Number edit or typing; no typing into either combo box; no Escape; no third row; no value other than FX002 and eggs; no Count edit; no close or reopen; no gate or FiP or F4; no Designer action; no metadata change; no unload, FormSync, deployment, check-in or check-out.

### Two-row verification (T3-S8, settled)

| Row | Displayed Order Number (not typed) | Customer ID | Item | Count | Verified in |
| --- | --- | --- | --- | --- | --- |
| 1 | `1` | `FX001` | `dumbbell` | `2` | grid cells (`1`, `FX001`, `dumbbell`, `2`) and T1/T2 input values; row unchanged by T3 |
| 2 | `2` | `FX002` | `eggs` | `1` (default; not edited) | grid cells (`2`, `FX002`, `eggs`, `1`) and the Count textbox `1` |

- Displayed Order Numbers `1` and `2`: **distinct, nonblank, not duplicated**. The brief's stop condition (equal, blank or ambiguous) was not met; the worker proceeded to the selections.
- Exactly two data rows; **no third row**.
- Row-header stars: visible in the screenshots (both rows); not in the accessibility tree.
- Save: enabled (dirty), **not invoked**.
- Status bar at the stop: `Count (Object 2 of 2)` (focus-field caption prefix; the count token is `(Object 2 of 2)`).
- No dialog, alert, validation text, unexpected prompt, automatic commit or ambiguous state was observed at any step.

Acceptance (T3 scope):
- **AC-5 (row two):** supported at observed UI level. Displayed Order Number `2` recorded (not typed) and distinct from row one's `1`; FX002 and eggs chosen from the native lists; Count default `1` recorded; both rows verified; no third row. Pre-Save two-row screenshot supports the input values, stars and status; the grid's data cells are clipped in the image and are supported by accessibility readback T3-S8 only.
- AC-4 (row one): carried from T2; not re-run.
- AC-6 to AC-9: not run (Save, post-Save readback, close/reopen and recovery are later steps).

### AUTONUMBER() observations (displayed only; no save has occurred)

| Observation | Value | State |
| --- | --- | --- |
| Order Number displayed on the add-mode row before any entry (T1 preflight) | `1` | observed (one run) |
| Order Number displayed on row one after entry and focus move (T2) | `1` | observed (one run); displayed, not saved |
| Order Number displayed on the row created by one toolbar New (T3) | `2` | observed (one run); displayed, not saved |
| Increment by 1 between displayed row numbers | `1` → `2` | observed (one run) in the displayed values only; the mechanism is not established |
| Saved Order Number for either row | not yet observed (no Save) | — |
| Whether the displayed values are the `AUTONUMBER()` default or client-side placeholders | **unresolved** (no row saved; the source is not established) | — |

No claim is made about the AUTONUMBER() source, the saved values, or database persistence.

### Action counts (T3, incremental and cumulative T1–T3)

| Operation | T3 | Cumulative (T1 + T2 + T3) |
| --- | --- | --- |
| Runtime opens / closes / reopens | 0 / 0 / 0 | **1 / 0 / 0** |
| Gate queries (FiP click + F4) | 0 | **1** (FiP 1; F4 1) |
| Recovery queries | 0 | **0** |
| List inspections, read-only (open + close, no selection) | 0 | **2** (T1: Customer ID 1; Item 1) |
| List opens used to select a value | 2 (Customer ID 1; Item 1) | **4** (T2 2; T3 2) |
| Rows entered | 1 (row two) | **2** (row one T2; row two T3) |
| New (toolbar) | **1** | **1** |
| Save (toolbar) | **0** | **0** |
| Order Number edits / typing | 0 / 0 | **0 / 0** |
| Combo-box typing | 0 | **0** |
| Field fills | 0 | **1** (T2 Count `2`) |
| Values selected from lists | 2 (FX002; eggs) | **4** (FX001, dumbbell, FX002, eggs) |
| Values committed by accident | 0 | **0** |
| Clicks (successful / failed) | 5 / 0 (New; Customer ID Open; FX002; Item Open; eggs) | **18 / 0** (T1 9; T2 4; T3 5) |
| Key presses | 1 (Tab) | **3** (F4 1; Tab 2) |
| Waits | 0 | **1** (T1, 2 s) |
| `browser_tabs` list / select | 1 / 1 | **3 / 3** |
| Snapshots untargeted / targeted | 2 / 0 | **7 / 1** (the T2 count includes the Designer snapshot disclosed in T2) |
| `browser_find` calls | 0 | **4** (T1) |
| Screenshots (worker-requested PNG) | 2 | **7** (T1 4; T2 1; T3 2) |
| In-page dialogs answered | 0 | **1** (Select Form OK, T1) |
| Native browser dialogs | 0 | **0** |
| Portal banner dismissals | 0 | **0** |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | **0 / 0 / 0** |
| Designer actions (interaction) | 0 | **0** (one read-only snapshot while tab 0 was current in T2; disclosed) |
| Designer metadata changes | 0 | **0** |
| Unloads / FormSync / deployment / check-in / check-out | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| JavaScript, evaluate, run-code, console or network inspection, direct SQL | 0 | **0** |

### Worker-written-file inventory (T3)

| File | Action |
| --- | --- |
| `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | edited (status line; this T3 section; knowledge-state rows) |
| `evidence/EXP-073/T3-row2-accessibility-readbacks.md` | created |
| `evidence/EXP-073/row2-after-new-before-selection.png` | created |
| `evidence/EXP-073/two-rows-before-save-settled.png` | created |

Tool-generated (not worker-authored): snapshot YAML and console files under `evidence/playwright/` written by the MCP tool during T3 (for example `page-2026-10-13T09-21-22-818Z.yml` through `page-2026-10-13T09-21-44-171Z.yml`, the post-Tab snapshot file, and `console-2026-10-13T09-21-16-903Z.log` through the console files for this task). Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

### Decisive evidence (T3)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `row2-after-new-before-selection.png` | FX_Orders selected under the DEM identity bar; starred row headers `1` and `2` (row 2 current); Order Number `2` in the focused field; Count `1`; Customer ID and Item blank; status `Order Number (Object 2 of 2)` | Row two created by one New; displayed Order Number `2`; Count default `1`; two rows | Grid data cells (clipped); the saved number; the database |
| `two-rows-before-save-settled.png` | Same tab; two starred row headers; Order Number `2`; Customer ID `FX002`; Item `eggs`; Count `1` (focused); status `Count (Object 2 of 2)`; Save icon coloured | Input-field values of row two after settling; two rows; Save enabled (dirty) | Grid data cells for row one and row two (clipped at the left edge); persistence; the saved state |
| `T3-row2-accessibility-readbacks.md` (T3-S8) | Grid row 1 `1` / `FX001` / `dumbbell` / `2`; grid row 2 `2` / `FX002` / `eggs` / `1`; exactly two data rows; Save enabled; status `Count (Object 2 of 2)` | Exact text of both rows' grid cells and inputs before Save | Stars (not in the tree); persistence |

### Blockers and state at the stop

- **No blocker.** No Ref-not-found, no timeout, no validation message, no alert, no unexpected prompt, no duplicate Order Number, no automatic commit, no session expiry.
- **Stopped** with the Form open and dirty (Save enabled, not invoked), two unsaved rows, focus on the row-two Count textbox (value `1`, not edited). No list open.

## T4 — One toolbar Save of the two verified rows; post-Save readbacks; stopped with Form open and clean (cycle 3)

- Task T4, cycle 3, worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`, run `R-20261013-171432-pH6P`, task_message_id `ff2131f9-1ec4-4674-8e1d-0cd02f185ff0`. Date 2026-10-13.
- Scope (bounded instruction): confirm the pre-Save prerequisites; invoke ONE ordinary toolbar Save; record the native response and the post-Save state; inspect saved rows by selection only; no New, no second Save, no close/reopen, no recovery query, no field edit.
- Readbacks: `evidence/EXP-073/T4-save-accessibility-readbacks.md` (T4-S0 to T4-S5).

### Actions (T4, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer **(current)**; tab 1 Mongoose (`favoriteContext=FX_Orders`) | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 (Web Client) current; Designer not touched | — |
| 3 | Untargeted snapshot (pre-Save) | All prerequisites matched (two rows; row one 1/FX001/dumbbell/2; row two 2/FX002/eggs/1; Save enabled; no dialog; status `Count (Object 2 of 2)`) | T4-S1 |
| 4 | Click toolbar `Save` (f1e28), **one click** | Tool result without error, timeout or dialog; Save became disabled | T4-S2; `page-2026-10-13T09-23-55-844Z.yml` (tool) |
| 5 | Screenshot, immediate post-Save | Stars gone; Save greyed; Order Number field grey; status `Count (Object 2 of 2)` | `evidence/EXP-073/save-immediate-after-one-save.png` |
| 6 | `browser_wait_for` 3 s (settle) | — | — |
| 7 | `browser_find` "Order Number:" (read-only) | Textbox `"2"` (row two current); no dialog | — |
| 8 | Screenshot, settled post-Save | Both rows (plain headers); Save greyed; status `Count (Object 2 of 2)` | `evidence/EXP-073/save-settled-both-rows.png` |
| 9 | Click row-header gridcell `1` (f1e129), selection only | Row one current; values read back; no field edited | `page-2026-10-13T09-24-21-199Z.yml` (tool) |
| 10 | Screenshot, row one inspection | Order Number `1` (grey); FX001; dumbbell; Count `2`; Save greyed; status `(Object 1 of 2)` | `evidence/EXP-073/save-settled-row1-selected-inspection.png` |

Not done in T4 (by instruction): no second Save; no New; no Order Number typing or edit; no typing into either combo box; no list opened; no Count edit; no close or reopen; no recovery query; no gate or FiP or F4; no Designer action; no metadata change; no unload, FormSync, deployment, check-in or check-out.

### Native response and post-Save state

- **Native response:** no alert, no toast, no message or validation text, no prompt. The only observable change was the Save button going to the disabled state. A Save tooltip appeared on hover. The success is inferred from the disabled state and the clean grid; no explicit success message was shown.
- **Stars:** gone on both rows in the screenshots. Not in the accessibility tree.
- **Save state:** disabled immediately after Save, on the settled snapshot, and after the row-one inspection.
- **Order Number header:** the required asterisk was removed (`* Order Number` became `Order Number`). `* Customer ID` and `* Item` keep their asterisks.
- **Order Number read-only state:** the textbox is shaded grey on saved rows (both rows, in the screenshots). The accessibility tree shows no `readonly` or `disabled` attribute on the textbox. The read-only state is therefore **inferred from the shading and the absent required marker**, not confirmed by an accessibility property. No typing was attempted.
- **Status bar:** `Count (Object 2 of 2)` with row two current; `(Object 1 of 2)` with row one current.

### Post-Save readbacks of both rows

| Row | Order Number (displayed) | Customer ID | Item | Count | Verified in |
| --- | --- | --- | --- | --- | --- |
| 1 | `1` | `FX001` | `dumbbell` | `2` | grid cells after Save (T4-S3, T4-S4); Form fields after row-one selection (T4-S5) |
| 2 | `2` | `FX002` | `eggs` | `1` | grid cells after Save (T4-S3, T4-S4); Form fields (T4-S3) |

Exactly two data rows after Save; no third row. The values are the Form's client-side display after the Save. They are not a database read and do not establish what was persisted; the recovery step (not run) is the check for that.

### AUTONUMBER() observations: displayed versus saved

| Row | Displayed before Save (T2/T3) | Displayed after Save (T4) | Saved value in a database | Source |
| --- | --- | --- | --- | --- |
| 1 | `1` | `1` | not read | display only |
| 2 | `2` | `2` | not read | display only |

- The displayed numbers did not change across the Save (`1` and `2` before and after). The Save did not show a different Order Number in the Form.
- Increment by one in the displayed values (`1`, then `2`) is observed in this session only. The mechanism is not established; the brief does not claim AUTONUMBER() source or database assignment.
- No saved, database-generated or cross-session value is claimed. Recovery (after close and reopen) is the next step to observe whether the same numbers return.

### Action counts (T4, incremental and cumulative T1–T4)

| Operation | T4 | Cumulative (T1–T4) |
| --- | --- | --- |
| Runtime opens / closes / reopens | 0 / 0 / 0 | **1 / 0 / 0** |
| Gate queries (FiP click + F4) | 0 | **1** (FiP 1; F4 1) |
| Recovery queries | 0 | **0** |
| List inspections, read-only (open + close, no selection) | 0 | **2** (T1) |
| List opens used to select a value | 0 | **4** (T2 2; T3 2) |
| Rows entered | 0 | **2** |
| New (toolbar) | 0 | **1** |
| Save (toolbar) | **1** | **1** |
| Order Number edits / typing | 0 / 0 | **0 / 0** |
| Combo-box typing | 0 | **0** |
| Field fills | 0 | **1** (T2 Count `2`) |
| Values selected from lists | 0 | **4** |
| Values committed by accident | 0 | **0** |
| Clicks (successful / failed) | 2 / 0 (Save; row-header selection) | **20 / 0** (T1 9; T2 4; T3 5; T4 2) |
| Key presses | 0 | **3** (F4 1; Tab 2) |
| Waits | 1 (3 s) | **2** (T1 2 s; T4 3 s) |
| `browser_tabs` list / select | 1 / 1 | **4 / 4** |
| Snapshots untargeted / targeted | 1 / 0 | **8 / 1** |
| `browser_find` calls | 1 | **5** |
| Screenshots (worker-requested PNG) | 3 | **10** (T1 4; T2 1; T3 2; T4 3) |
| In-page dialogs answered | 0 | **1** (Select Form OK, T1) |
| Native browser dialogs | 0 | **0** |
| Portal banner dismissals | 0 | **0** |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | **0 / 0 / 0** |
| Designer actions (interaction) | 0 | **0** (one read-only snapshot while tab 0 was current in T2; disclosed) |
| Designer metadata changes | 0 | **0** |
| Unloads / FormSync / deployment / check-in / check-out | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| JavaScript, evaluate, run-code, console or network inspection, direct SQL | 0 | **0** |

Note: the tool-generated snapshot files written after the click calls (Save and row-header) are not counted as worker-requested snapshots.

### Worker-written-file inventory (T4)

| File | Action |
| --- | --- |
| `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | edited (status line; this T4 section; knowledge-state rows) |
| `evidence/EXP-073/T4-save-accessibility-readbacks.md` | created |
| `evidence/EXP-073/save-immediate-after-one-save.png` | created |
| `evidence/EXP-073/save-settled-both-rows.png` | created |
| `evidence/EXP-073/save-settled-row1-selected-inspection.png` | created |

Tool-generated (not worker-authored): snapshot YAML and console files under `evidence/playwright/` written by the MCP tool during T4 (`page-2026-10-13T09-23-49…`, `page-2026-10-13T09-23-55-844Z.yml`, `page-2026-10-13T09-24-10-173Z.yml`, `page-2026-10-13T09-24-21-199Z.yml`, and the console logs `console-2026-10-13T09-23-49-865Z.log`, `…09-23-49-866Z…` and related files). Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

### Decisive evidence (T4)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `save-immediate-after-one-save.png` | FX_Orders tab selected; DEM identity bar; row headers `1` and `2` without stars; Order Number field grey with value `2`; Save greyed; status `Count (Object 2 of 2)`; no dialog | Save state disabled and stars gone immediately after the one Save; no native message visible | Grid data cells (clipped at the left edge); database persistence; the read-only attribute (shading only) |
| `save-settled-both-rows.png` | Same tab after a 3 s settle; plain row headers `1` and `2`; Order Number `2` (grey); FX002; eggs; Count `1`; Save greyed; status `Count (Object 2 of 2)` | Settled post-Save state of the current row; no dialog | Grid cells for row one (clipped); persistence |
| `save-settled-row1-selected-inspection.png` | Row header `1` current (outlined); Order Number `1` (grey); FX001; dumbbell; Count `2`; Save greyed; status `(Object 1 of 2)` | Saved row one's Form values after selection; Save disabled | Persistence beyond the Form; the read-only attribute |

### Blockers and state at the stop

- **No blocker.** No Ref-not-found, no timeout, no validation message, no alert, no unexpected prompt, no duplicate Order Number, no session expiry. Save was invoked once and not retried.
- **Stopped** with the Form open and clean (Save disabled), row one currently selected (selection only), no list open, no dialog.

## T5 — Clean close, one reopen, and one empty-criteria recovery query (cycle 4)

- Task T5, cycle 4, worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`, run `R-20261013-171432-pH6P`, task_message_id `9362c833-757e-453c-a3df-94f2676cb02c`. Date 2026-10-13.
- Scope (bounded instruction): confirm the clean pre-close state; close FX_Orders once through its Form-tab control; reopen once through Form > Open and Select Form; capture the reopened Form before querying; ONE Filter in Place with blank criteria and ONE F4; verify recovery. No New, no Save, no field edit, no criteria typed, no other Form closed, no Designer action. AC-9 not finalised.
- Readbacks: `evidence/EXP-073/T5-recovery-accessibility-readbacks.md` (T5-S0 to T5-S8).

### Actions (T5, in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any selection) | Tab 0 Designer **(current)**; tab 1 Mongoose (`favoriteContext=FX_Orders`) | — |
| 2 | `browser_tabs` select tab 1 | Tab 1 (Web Client) current; Designer not touched | — |
| 3 | Untargeted snapshot (pre-close) | FX_Orders selected; Save disabled; no dialog; two rows `1`/FX001/dumbbell/`2` and `2`/FX002/eggs/`1`; status `(Object 1 of 2)` | T5-S0 |
| 4 | Click `Close Panel FX_Orders` (f1e116), **one click** | No error, no prompt, no dialog. Tab removed. URL `favoriteContext=SqlTables`. Remaining Form tabs: FX_Items, Property Classes, IDO Projects, IDOs, Sql Tables (selected) | T5-S1; `page-2026-10-13T09-26-37-092Z.yml` (tool) |
| 5 | Click toolbar-area `Form` menu (f1e10) | Form menu opened | `page-2026-10-13T09-26-43-118Z.yml` (tool) |
| 6 | `find` `menuitem "Open"` (read-only) | `Open` menuitem located (f1e407) | — |
| 7 | Click the `Open` menuitem (f1e407), **one click** | Select Form dialog opened; filter pre-filled `FX_Orders`; one row `FX_Orders / FX_Orders` | T5-S2; `page-2026-10-13T09-26-46-732Z.yml` (tool) |
| 8 | `find` "Select Form" and targeted snapshot of the dialog (f1e457) | Dialog content read: one row; filter textbox `FX_Orders`; Filter By Name | T5-S2 |
| 9 | Click the `FX_Orders` caption cell (f1e477), **one click** | Row selected | `page-2026-10-13T09-26-51-808Z.yml` (tool) |
| 10 | `find` "OK" (read-only) | OK button located (f1e505) | — |
| 11 | Click `OK` (f1e505), **one click** | Dialog closed; URL `favoriteContext=FX_Orders`; no error | T5-S2; `page-2026-10-13T09-26-55-497Z.yml` (tool) |
| 12 | Read reopened state (saved snapshot) | Form tab `FX_Orders` selected; Save disabled; one add-mode placeholder row with Order Number `3`, Count `1`; Customer ID and Item blank; status `Order Number (Object 1 of 1)`; saved rows not loaded | T5-S3 |
| 13 | Screenshot of the reopened Form BEFORE querying | Captured | `evidence/EXP-073/reopened-form-before-query-addmode.png` |
| 14 | Click toolbar `FiP` (f1e39), **one click**, blank criteria | `FiP` active; status `Filter in Place`; all four criteria blank | T5-S5; `page-2026-10-13T09-27-06-156Z.yml` (tool) |
| 15 | Press `F4`, **one key press** | Filter in Place exited; two data rows; no placeholder; no third row | T5-S6 |
| 16 | `browser_wait_for` 3 s (settle) | — | — |
| 17 | Read settled result (saved snapshot) | Two data rows: `1`/FX001/dumbbell/`2`; `2`/FX002/eggs/`1`; Save disabled; status `Customer ID (Object 1 of 2)`; Order Number textbox `1`, Customer ID FX001 (focus), Item dumbbell, Count `2` | T5-S6; `page-2026-10-13T09-27-13-617Z.yml` (tool) |
| 18 | Screenshot of the recovery result | Two unstarred row headers; row 1 current; FX001 focused; dumbbell; Count `2`; Save greyed; status `Customer ID (Object 1 of 2)` | `evidence/EXP-073/recovery-query-after-reopen-two-rows.png` |

Not done in T5 (by instruction): no New; no Save; no field edit; no criteria typed; no second F4; no second query or Refresh; no second close or reopen; no other Form closed; no Designer action; no metadata change; no unload, FormSync, deployment, check-in or check-out; no JavaScript, console, network or direct URL navigation; no refresh or restart; no re-login.

### Native responses

- **Close (Form-tab control):** no error; no unsaved-change, save, discard or other prompt; no dialog; the FX_Orders tab was removed; the page returned to the Sql Tables context. Remaining tabs listed above.
- **Reopen (Form > Open > Select Form OK):** the Select Form dialog listed one row `FX_Orders / FX_Orders`; OK closed it once; FX_Orders reopened in add mode. No prompt.
- **Query (FiP blank + one F4):** Filter in Place exited; the grid showed the two saved rows and no placeholder; Save stayed disabled; no dialog; no unsaved-change indication.

### Recovery verification (AC-8)

| Recovered row | Order Number | Customer ID | Item | Count | Starred | Pre-Save value | Match |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `1` | `FX001` | `dumbbell` | `2` | no (screenshot) | `1` / FX001 / dumbbell / `2` | **Yes** |
| 2 | `2` | `FX002` | `eggs` | `1` | no (screenshot) | `2` / FX002 / eggs / `1` | **Yes** |

- Exactly two recovered data rows; no third row; no placeholder row.
- Status bar: `Customer ID (Object 1 of 2)` with row 1 current. The `Customer ID` text is the focus-field caption prefix. The count token `(Object 1 of 2)` matches the rule (Object 1 of 2 or 2 of 2 by the selected row).
- Save: disabled. No unsaved-change indication.
- Star state: not in the accessibility tree; no star marker visible in the recovery screenshot.
- Recovery evidence split (as the brief requires): **screenshot** shows the two row headers, the current row's Order Number, Customer ID, Item and Count (row 1 only, in the input fields), the status and Save state. **Accessibility readback** supplies the grid cells for both rows, because the screenshot clips the grid data columns.

### Screenshots (T5)

- `reopened-form-before-query-addmode.png` — reopened Form, add-mode placeholder, Order Number `3`, status `Order Number (Object 1 of 1)`, saved rows not loaded. Supports AC-7 (reopen identity) and the pre-query state. Does not prove the saved rows, the database, or any query result.
- `recovery-query-after-reopen-two-rows.png` — settled recovery result: two unstarred row headers; row 1 current; Order Number `1` (greyed); FX001 focused; dumbbell; Count `2`; Save greyed; FiP off; status `Customer ID (Object 1 of 2)`. Supports AC-8 for the two row headers, the current row's inputs, Save state and status. Does not prove the grid data cells for either row (clipped) or the database.

### AUTONUMBER() observations after reopen

| Observation | Value | State |
| --- | --- | --- |
| Saved row 1 Order Number before Save (displayed) | `1` | observed (T2/T3) |
| Saved row 2 Order Number before Save (displayed) | `2` | observed (T3) |
| Saved row 1 Order Number after Save (grid, client) | `1` | observed (T4) |
| Saved row 2 Order Number after Save (grid, client) | `2` | observed (T4) |
| Saved row 1 Order Number after close/reopen/query (recovered grid) | `1` | observed (T5) |
| Saved row 2 Order Number after close/reopen/query (recovered grid) | `2` | observed (T5) |
| Reopened add-mode placeholder Order Number (before any query) | `3` | observed (T5); displayed on a new placeholder; the source (database next value or client default) is **unresolved** |
| T1 preflight placeholder Order Number (empty collection, before any entry) | `1` | observed (T1) |

- The recovered saved numbers match the numbers displayed before Save: `1` and `2` for FX001/dumbbell and FX002/eggs. In the same session, displayed-before-save equals recovered-after-reopen for both rows.
- The reopened placeholder displayed `3` after the two saved rows. Its source is not established: it may reflect a next-value calculation at the server or a client-side value. The placeholder was removed by the query and was not saved (no third row, Save disabled). Nothing in this observation is a claim about the AUTONUMBER() default, the database, or uniqueness across sessions.

### Action counts (T5, incremental and cumulative T1–T5)

| Operation | T5 | Cumulative (T1–T5) |
| --- | --- | --- |
| Runtime open (first open, Form menu > Open > Select Form OK) | 0 | **1** (T1) |
| Runtime close (Form-tab control) | **1** | **1** |
| Runtime reopen (Form menu > Open > Select Form OK) | **1** | **1** |
| Gate queries (FiP click + F4) | 0 | **1** (T1) |
| Recovery queries (FiP blank + one F4 after reopen) | **1** (FiP 1; F4 1) | **1** |
| List inspections, read-only (open + close, no selection) | 0 | **2** (T1) |
| List opens used to select a value | 0 | **4** (T2 2; T3 2) |
| Rows entered | 0 | **2** |
| New (toolbar) | 0 | **1** |
| Save (toolbar) | 0 | **1** |
| Order Number edits / typing | 0 / 0 | **0 / 0** |
| Combo-box typing | 0 | **0** |
| Field fills | 0 | **1** (T2 Count `2`) |
| Values selected from lists | 0 | **4** |
| Values committed by accident | 0 | **0** |
| Clicks (successful / failed) | **6 / 0** (Close Panel; Form menu; Open item; FX_Orders row; Select Form OK; FiP) | **26 / 0** (T1 9; T2 4; T3 5; T4 2; T5 6) |
| Key presses | **1** (F4) | **4** (F4 2; Tab 2) |
| Waits | **1** (3 s) | **3** (T1 2 s; T4 3 s; T5 3 s) |
| `browser_tabs` list / select | 1 / 1 | **5 / 5** |
| Snapshots untargeted / targeted | 1 / 1 | **9 / 2** |
| `browser_find` calls | **3** (menuitem Open; Select Form; OK) | **8** |
| Screenshots (worker-requested PNG) | **2** | **12** (T1 4; T2 1; T3 2; T4 3; T5 2) |
| In-page dialogs answered | **1** (Select Form OK) | **2** (T1 Select Form OK; T5 Select Form OK) |
| Native browser dialogs | 0 | **0** |
| Portal banner dismissals | 0 | **0** |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | **0 / 0 / 0** |
| Designer actions (interaction) | 0 | **0** (one read-only snapshot while tab 0 was current in T2; disclosed) |
| Designer metadata changes | 0 | **0** |
| Unloads / FormSync / deployment / check-in / check-out | 0 | **0** |
| Re-logins / session expiry / refresh / restart / direct URL navigation | 0 | **0** |
| JavaScript, evaluate, run-code, console or network inspection, direct SQL | 0 | **0** |

Note: tool-generated snapshot files written after click calls are not counted as worker-requested snapshots. The T5 targeted snapshot was the Select Form dialog (f1e457).

### Worker-written-file inventory (T5)

| File | Action |
| --- | --- |
| `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | edited (status line; this T5 section; AUTONUMBER and knowledge-state rows) |
| `evidence/EXP-073/T5-recovery-accessibility-readbacks.md` | created |
| `evidence/EXP-073/reopened-form-before-query-addmode.png` | created |
| `evidence/EXP-073/recovery-query-after-reopen-two-rows.png` | created |

Tool-generated (not worker-authored): snapshot YAML and console files under `evidence/playwright/` written by the MCP tool during T5 (`page-2026-10-13T09-26-37-092Z.yml`, `page-2026-10-13T09-26-43-118Z.yml`, `page-2026-10-13T09-26-46-732Z.yml`, `page-2026-10-13T09-26-51-808Z.yml`, `page-2026-10-13T09-26-55-497Z.yml`, `page-2026-10-13T09-27-06-156Z.yml`, `page-2026-10-13T09-27-13-617Z.yml`, and console files `console-2026-10-13T09-26-30-943Z.log`, `…944Z.log`). Repository confinement is supported by the worker and harness inventories; operator git review is authoritative.

### Decisive evidence (T5)

| File | Visible identity / scope / result | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `reopened-form-before-query-addmode.png` | FX_Orders tab selected; DEM identity bar; one starred add-mode row; Order Number `3` (focused); Customer ID and Item blank; Count `1`; Save greyed; status `Order Number (Object 1 of 1)` | AC-7 reopen identity and add-mode state before the query; saved rows not loaded yet | The saved rows; any database value; the source of `3` |
| `recovery-query-after-reopen-two-rows.png` | Same tab; two unstarred row headers `1` and `2`; row 1 current; Order Number `1` (grey); FX001 focused; dumbbell; Count `2`; Save greyed; FiP off; status `Customer ID (Object 1 of 2)` | AC-8: two rows after the one query; no placeholder; no stars; Save disabled; current-row values; status | Grid data cells for both rows (clipped at the left edge); row 2's values (see readback T5-S6); persistence |
| `T5-recovery-accessibility-readbacks.md` (T5-S6) | Grid data row 1 `1`/FX001/dumbbell/`2`; row 2 `2`/FX002/eggs/`1`; no third row; Save disabled; status `Customer ID (Object 1 of 2)` | AC-8 exact values for both recovered rows (accessibility) | Stars (not in the tree); database persistence |

### Blockers and state at the stop

- **No blocker.** Close, reopen and query each ran once, with no error, timeout, prompt or unexpected dialog.
- **Stopped** after documenting recovery. The Form is open and clean (Save disabled, no unsaved-change indication), FiP is off, the Customer ID combobox has focus with `FX001` highlighted (no typing), no dialog is open, and the Designer tab was not touched.
- AC-9 is not finalised, per the bounded instruction.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Clean Form-tab close of FX_Orders produced no prompt and removed the tab | observed (one run, T5) |
| Reopen through Form > Open > Select Form (OK once) opens FX_Orders in add mode with a placeholder and no saved rows loaded | observed (one run, T5) |
| After one FiP (blank) + one F4, exactly two unstarred rows are shown with values 1/FX001/dumbbell/2 and 2/FX002/eggs/1, matching the pre-Save rows | observed (one run, T5, same session, UI level); grid cells by accessibility readback |
| Recovered Order Numbers `1` and `2` equal the displayed numbers before Save | observed (one run, T5); same-session UI, not a database read |
| The reopened add-mode placeholder displayed Order Number `3` before the query | observed (one run, T5); source **unresolved** |
| Whether `1` and `2` are database-generated (AUTONUMBER() default) rather than client-side | **unresolved**; not established by any step |
| Database persistence, durability, cross-session persistence, uniqueness across sessions, replay | **not claimed** (same-session UI recovery only) |

## Knowledge state (earlier findings, per finding)

| Finding | State |
| --- | --- |
| One toolbar Save of the two rows left Save disabled, removed row-header stars, and showed no native message | observed (one run, T4); the success is inferred from the disabled state and clean grid |
| After Save, both rows show the same displayed Order Numbers as before the Save (`1` and `2`), FX001/dumbbell/2 and FX002/eggs/1 | observed (one run, T4); client-side display, not a database readback |
| The Order Number header asterisk is removed and the Order Number field is shaded grey after Save | observed (one run, T4); read-only state **inferred** from shading, not confirmed by an accessibility attribute |
| Displayed Order Numbers `1` then `2` are an increment by one in this session | observed (one run); mechanism and AUTONUMBER() source **unresolved** |
| Saved Order Numbers as displayed in the Form after Save, and as recovered after close/reopen | observed (T4 and T5, same session, UI level); database persistence **not read** |
| Toolbar New adds a second starred row showing a displayed Order Number `2`, distinct from row one's `1`, with Count `1` and blank Customer ID and Item | observed (one run, T3); displayed only |
| Native-list selection fills FX002 and eggs in row two, with each list closing on selection | observed (one run, T3) |
| Row two Count keeps its displayed default `1` (not edited) | observed (one run, T3) |
| Both rows are present, unsaved, with values FX001/dumbbell/2 and FX002/eggs/1 | observed (one run, T3); grid cells by accessibility readback; not persisted |
| Runtime `FX_Orders` opens through Form > Open > Select Form (one row, OK) under the DEM configuration | observed (one run) |
| The runtime shows an add-mode row with Order Number `1` and Count `1` before any entry | observed (one run); Add mode not labelled |
| FiP with blank criteria + one F4 returns one starred placeholder with `Order Number (Object 1 of 1)`; the count rule holds | observed (one run); query inferred from FiP exit; not a database read |
| FX_CustomerID list: FX001 `Factory test one`, FX002 `Factory test two` | observed (one run) |
| FX_Item list: dumbbell `45 pound iron`, eggs `cage free`, guitar `natural acoustic` | observed (one run) |
| Lists close by the Open toggle with no selection and no Escape | observed (one run each) |
| Native-list selection (click on the option) fills FX_CustomerID = FX001 and FX_Item = dumbbell in row one, with the list closing on selection | observed (one run, T2) |
| Count replaced by one fill (`1` to `2`) and settled with one Tab; grid row shows `1` / `FX001` / `dumbbell` / `2` | observed (one run, T2); grid cells by accessibility only |
| The displayed `1` is the `AUTONUMBER()` default | **unresolved** (displayed value only; no database read; see T6) |
| Row-level Order Number increments after one or two entries | observed in displayed values only (`1`, then `2` for row two in T3; unchanged after Save in T4 and after recovery in T5); mechanism unresolved |
| Saved Order Number, persistence and recovery | recovery after close/reopen observed (T5, same session, UI level); database persistence **not read** |
| Replay, cross-session uniqueness, database durability | **not claimed** |

## Blockers, open questions and next permitted action (T1 state; superseded by T2–T6, see the T6 section)

- **No blocker in T1.** No Ref-not-found, no timeout, no dialog other than the Select Form OK. No session expiry.
- The Customer ID required-field indicator (red border) appeared after focus moved to Item. Recorded only; no action taken.
- The console counts reported by the tool rose from 7 errors / 3 warnings to 9 errors / 4 warnings during T1. Not inspected, per the brief.
- (Superseded: T2 through T5 have since completed. The former next action was T2.) Former text: row one (FX001, dumbbell, Count 2) and row two (after one New; FX002, eggs, Count default), verification of both rows before one ordinary toolbar Save, and the post-Save readbacks. T2 must start with a fresh untargeted snapshot of the Web Client; the Item combobox is currently focused and the Form is clean.
- Classification of all findings above: **observed only, NOT replay_verified.**

## T6 — Final acceptance (documentation only; zero browser calls; cycle 5)

- Task T6, cycle 5, worker session `da63ecb3-7001-414c-83da-605bbb1d52f6`, run `R-20261013-171432-pH6P`, task_message_id `79ff8df7-a915-4904-a9c6-e9a748ea6633`. Date 2026-10-13.
- **Zero browser calls and zero Mongoose changes in T6.** Tools used: Glob, Read, Grep (read-only), Write (the report), Edit (this record).
- Full report: `evidence/EXP-073/T6-final-acceptance-report.md` (acceptance matrix AC-1 to AC-9, per-task audit reconciled to the five harness audits `evidence/EXP-073/harness-audit-T1.md` to `harness-audit-T5.md`, file inventory T1 to T6, final state, limitations).

### Recommendation

**ACCEPTED AS OBSERVED.** All nine acceptance checks are supported at the same-session, UI level. The qualifications are:

- **AC-6:** no native success message was displayed; Save success is **inferred** from the disabled Save button and the clean grid. The Order Number read-only state is **inferred** from the grey shading and the removed required asterisk, not from an accessibility attribute. Stars are screenshot-only.
- **AC-7:** the close has no screenshot; it is evidenced by the T5-S1 readback and the tool snapshot.
- **AC-8:** the screenshot clips the grid data cells, so row 2 is not visible in the grid data of the image. Both rows' values are supported by the accessibility readback T5-S6. The status token is `Customer ID (Object 1 of 2)` (focus prefix; row 1 current).
- **AC-2 and AC-3:** the F4 query's execution is inferred from the FiP exit; list closure is taken from the snapshots (the screenshots show only the open state).

### Acceptance matrix (summary; detail in the T6 report, section 3)

| ID | Status | Principal evidence |
| --- | --- | --- |
| AC-1 | Supported | `evidence/EXP-073/preflight-fx-orders-runtime-add-mode.png`; `T1-accessibility-readbacks.md` R1 |
| AC-2 | Supported | `evidence/EXP-073/gate-after-one-f4-empty-criteria.png`; `T1-accessibility-readbacks.md` R2, R3 |
| AC-3 | Supported | `evidence/EXP-073/list-fx-customer-id-open.png`; `list-fx-item-open.png`; `T1-accessibility-readbacks.md` R4 to R7 |
| AC-4 | Supported | `evidence/EXP-073/row1-fx001-dumbbell-count2-settled.png`; `T2-row1-accessibility-readbacks.md` S8 |
| AC-5 | Supported | `evidence/EXP-073/row2-after-new-before-selection.png`; `two-rows-before-save-settled.png`; `T3-row2-accessibility-readbacks.md` T3-S2, T3-S8 |
| AC-6 | Supported (native response and read-only state inferred) | `evidence/EXP-073/save-immediate-after-one-save.png`; `save-settled-both-rows.png`; `save-settled-row1-selected-inspection.png`; `T4-save-accessibility-readbacks.md` T4-S2 to T4-S5 |
| AC-7 | Supported (close by readback, reopen by screenshot) | `evidence/EXP-073/reopened-form-before-query-addmode.png`; `T5-recovery-accessibility-readbacks.md` T5-S1 to T5-S3 |
| AC-8 | Supported (star and clipped cells stated) | `evidence/EXP-073/recovery-query-after-reopen-two-rows.png`; `T5-recovery-accessibility-readbacks.md` T5-S6, T5-S8 |
| AC-9 | Supported by the T6 report and this record | `evidence/EXP-073/T6-final-acceptance-report.md` |

### Reconciliation of the cumulative audit (T1 to T5)

- Every expected figure in the T6 brief matches the per-task record and the harness audits: runtime open 1, close 1, reopen 1, gate query 1, recovery query 1, list inspections 2, list opens for selection 4, native option selections 4, rows entered 2, New 1, Save 1, field fills 1, FX_OrderNumber edits 0, combo-box typing 0, clicks 26 (0 failed), F4 2, Tab 2, waits 3, tab listings 5, tab selections 5, untargeted snapshots 9, targeted snapshots 2, `browser_find` 8, screenshots 12, Select Form OK 2, Designer interactions 0, metadata changes 0, unloads 0, session expiries 0, re-logins 0.
- The **runtime open** is one operation made of four clicks (Form menu, Open item, row, OK). The same applies to the reopen; the close is one click.
- Discrepancies recorded and not silently adjusted (report section 6.3): the T1 audit's header summary ("11 actions, 13 reads") cannot be reproduced from its 51-row table (the row table was used); one non-browser `Read` error in T1 before the record existed; the T2 read-only snapshot taken while the Designer tab was current (disclosed, not an interaction, not a violation); the T2 Count `browser_type` flagged by the controller as a prohibited-tool hit (the single authorised fill, not a violation); the audit does not capture snapshot target arguments, so the two targeted snapshots are classified from the worker's own calls.

### AUTONUMBER() observations (displayed versus recovered)

| Row | Displayed at entry | Displayed after Save | Recovered after reopen and query | Note |
| --- | --- | --- | --- | --- |
| 1 | `1` | `1` | `1` | Recovered value equals the displayed value in this session |
| 2 | `2` | `2` | `2` | Same |
| Reopened placeholder | `3` (before the query; not saved) | n/a | removed by the query | Source unresolved |

- The **mechanism and source** of the displayed and recovered numbers are **unresolved**. The recovered values were read from the same Web Client session that displayed them. No independent database read was made, so the observation cannot separate a database-generated AUTONUMBER() value from a client-side display value.
- No uniqueness across sessions, no parallel-session behaviour and no replay is claimed.

### Worker-written-file inventory (T6)

| File | Action |
| --- | --- |
| `evidence/EXP-073/T6-final-acceptance-report.md` | created |
| `experiments/EXP-073-hello-world-part-4-section-12-fx-orders-runtime-records.md` | edited (T6 status line; four stale knowledge rows; the T1-era blockers heading and next-action bullet marked superseded; this T6 section) |

Full T1–T6 inventory (worker-authored): see the T6 report, section 7.1. Harness-generated audits: `evidence/EXP-073/harness-audit-T1.md` to `harness-audit-T5.md`.

### Final browser state (inherited from T5; unchanged by T6)

- Web Client tab selected. Runtime `FX_Orders` open and selected; clean (Save disabled; no unsaved-change indication; FiP off).
- Two unstarred rows: `1`/FX001/dumbbell/`2` (current row) and `2`/FX002/eggs/`1`. No placeholder and no third row.
- Customer ID combobox focused with `FX001` highlighted (focus only; nothing typed).
- Status `Customer ID (Object 1 of 2)`. No dialog. Designer tab 0 untouched.

### Classification

Observed only. Same session, UI level. NOT replay-verified. No database durability, cross-session, parallel-session uniqueness or replay claim.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 4 section 12 is complete, and with it **Part 4** (sections 1-12). No pause or waiver was needed. The standing authorization of 2026-10-11 ends here.

- Run R-20261013-171432-pH6P completed as accepted after 6 worker tasks (5 browser tasks + 1 documentation task) in 6 cycles.
- Created, for later cleanup — two rows in the factory-owned table `dbo.FX_Orders`, entered through the User-scope runtime Form FX_Orders:

  | Order Number | Customer ID | Item | Count |
  |---|---|---|---|
  | 1 | FX001 | dumbbell | 2 |
  | 2 | FX002 | eggs | 1 (default) |

- Screenshots viewed by the operator assistant:
  - `gate-after-one-f4-empty-criteria.png`: FX_Orders tab, one starred row, Order Number 1, Customer ID and Item blank, Count 1, status "Order Number (Object 1 of 1)". The empty-table check passed.
  - `list-fx-customer-id-open.png`: the Customer ID list shows `FX001 / Factory test one` and `FX002 / Factory test two`.
  - `list-fx-item-open.png`: the Item list shows `dumbbell / 45 pound iron`, `eggs / cage free` and `guitar / natural acoustic`.
  - `two-rows-before-save-settled.png`: two starred rows 1 and 2. Row 2 is current with Order Number 2, FX002, eggs, Count 1, and status "Count (Object 2 of 2)".
  - `save-settled-row1-selected-inspection.png`: after the Save, the stars are gone and Save is disabled. Row 1 shows Order Number 1 greyed (no asterisk), FX001, dumbbell and Count 2, with status "(Object 1 of 2)".
  - `reopened-form-before-query-addmode.png`: after the close and reopen, there is one starred placeholder with **Order Number 3** and no saved rows loaded.
  - `recovery-query-after-reopen-two-rows.png`: after one blank query, rows 1 and 2 with no placeholder. Row 1 shows 1 / FX001 / dumbbell / 2, with status "Customer ID (Object 1 of 2)" and Save disabled.
    - Row 2's values (2 / FX002 / eggs / 1) come from the accessibility readback, `T5-recovery-accessibility-readbacks.md`, because the narrow grid clips the data cells.
- Operator review of the flagged items (T6 report D1-D9):
  - T2 `browser_type` ×1 was the authorized Count fill of `2`.
  - T2 took one read-only snapshot while the Designer tab was current; there was no Designer interaction.
  - No screenshot exists between the close and the reopen; the close is shown by the readback. All three are accepted.
- Counts:
  - runtime open 1; gate query 1; read-only list inspections 2; rows 2; New 1; Save 1 (no native message);
  - close/reopen 1; recovery query 1;
  - Order Number typing 0; combo-box typing 0; Escape 0;
  - Designer actions 0; metadata changes 0; unloads 0; re-logins 0.
- Findings (observed, same session, UI level):
  1. AUTONUMBER() fills the next order number when a new row is added: 1 on the empty table, 2 after New, and **3** on the placeholder after reopening with two saved rows.
     - The numbers saved were the ones displayed before the Save.
     - Whether the number comes from the server or the client is unresolved, and uniqueness across parallel sessions is not claimed.
  2. A domain-backed property class gives a two-column combo-box list at runtime: the domain value plus its list property (FX_Label, FX_Description). This works with no unload after the EXP-070 class creation.
  3. After a Save, the key field (Order Number) is greyed, and its caption loses the required asterisk. This matches EXP-046.
  4. The runtime Save showed no message; success is shown by Save becoming disabled and the stars clearing.
- Confinement (git status): only `evidence/EXP-073/` and this record were written by the run.
- Next: Hello World Part 5 (`docs/mongoose/transcripts/hello-world-pt5.md`). It needs a new scope review; the run-pause auto-accept does not carry over.
