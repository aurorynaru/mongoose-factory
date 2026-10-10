# EXP-043 — Hello World Part 2: Create and Recover One FX_ IDO Property Class

**Current status: T5 AUDIT COMPLETE (documentation only). T1 (collision gate) PASSED. T2 (pre-Save configuration) complete. T3 (one explicit Save, one post-Save query) complete. T4 (one ordinary Form close, one reopen, one exact-name query) complete. All nine acceptance checks are supported at the level stated in the T5 section, with limits. Recommendation: accepted with limits, pending the operator's decision. Classification: observed only, NOT replay_verified. See the "T5" section at the end.**

## Outcome (operator, 2026-10-10)

**Accepted** (run R-20261010-193233-I3F2, completed/accepted in cycle 6, no operator pauses). The tenant-wide property class **FX_UMBase** exists with Data Type String, Length 10, Column Data Type `nvarchar` (exact UI label) and Label String ID `FX_sUM`. It was created with one New and one Save in the IDO Property Classes Form and recovered after one ordinary close and reopen (same session, UI level).

Operator screenshot review:
- `t1-10`: the FX_UM* gate returned only the new-row placeholder.
- `t2-04`: all values staged before Save.
- `t3-03`: post-Save query, one row; Class Name greyed out (key).
- `t4-04`: after reopen, one row with identical values.

Learned (observed):
- The IDO Property Classes Form is captioned, opens through Select Form, and FiP with `FX_UM*` works as a prefix query.
- The Column Data Type list accepts a prefix filter (`nvar` + F2) and labels the type `nvarchar`.
- Property classes follow check-out/check-in. After Save, FX_UMBase is **still checked out** (Locked By = operator, Check In / Undo Check Out enabled). No check-in was done, because the brief prohibited it.

Carry-forward to the FX_UMs step:
- First test, read-only, whether the New Data Maintenance wizard's Property Class list offers FX_UMBase as it stands (checked out, no cache unload).
- If it does not, ask the operator before any brief includes Check In or Unload All Global Form Objects. Both are tenant-wide.
- The cleanup inventory lists FX_UMBase; no deletion was done.


- Date: 2026-10-10
- Run: R-20261010-193233-I3F2, cycle 0, task T1 (task_message_id `61a64c87-2eba-4a72-9cbc-2cd111a3eabe`), worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`
- Mode: LEARNING MODE. Scope extension for FX_-prefixed Hello World tutorial objects (AGENTS.md, 2026-10-10). Property classes are tenant-wide shared metadata. The Form stays in User editing scope.
- Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar visible in `t1-01`). The "Site Developer" context named in the brief was not visible in the UI and was not verified.
- Predecessors: EXP-042-R3 (accepted with limits; `FX_HelloWorld01` rows FX001/FX002), EXP-041-R3, EXP-040.
- Evidence directory: `evidence/EXP-043/`

## Objective (from the brief)

Using the existing IDO Property Classes runtime Form, opened through Select Form, create exactly one tenant-wide factory-owned property class `FX_UMBase`:

| Attribute | Required value |
| --- | --- |
| Class Name | `FX_UMBase` |
| Data Type | String |
| Length | 10 |
| Column Data Type | The NVARCHAR option exactly as displayed in the UI (recorded at T2, not assumed) |
| Label String ID | `FX_sUM` (reference only; the string resource is NOT created) |

Then one explicit Save, verification, one ordinary close, one reopen, and recovery by exact-name query.

## Transcript and prior-record reading (done before any browser action)

- `AGENTS.md`: read in full. Relevant rules: FX_-only artifacts; no non-FX_ changes; check before retrying a mutation; one explicit Save per mutation; evidence under `evidence/<experiment-id>/`.
- `docs/mongoose/transcripts/hello-world-pt2.md`, 02:18–04:08 (narration): define property class `um base` (String, length 10, column type NVARCHAR filtered via the list, label `s-u-m`), Save, close, then **Form → Definition → Unload All Global Form Objects**. The transcript's source spellings are unverified (speech-to-text). Its cache unload is **not authorized** in this experiment. The file itself warns against literal replication (`UM Base` → `FX_UMBase`; Site Default → User scope).
- `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md`: the decisive learned items were (1) runtime inputs of the Form are uncaptioned and need Find Value to identify; (2) a zero-result Filter-in-Place query leaves an add-mode placeholder counted in the status bar; (3) an Infor OS portal banner can cover the menu bar; (4) the FX_HelloWorld01 tab is left open between runs. Items (2)–(4) were re-observed in this T1 (see below). Item (1) did **not** apply to this Form: its inputs carry accessible labels (`Class Name:`, `Data Type:`, `Length:`, `Column Data Type:`, `Label String ID:`).
- `evidence/EXP-042-R3/` decisive images were not re-read in full here. The T1 evidence below is the primary source.

## Repository baseline (AC-1)

- Branch `claude-harness`. Session-start git status (from the harness context) already showed `tools/learning-harness/*` files modified (README, EXP-035 brief, config example, shadow CLI/runner/test). These are **pre-existing and not touched by this experiment**. `tools/` was not read.
- Commits before this task: `790805f` (approved EXP-043 brief), `4293f26` (draft brief with operator guards), `18063dd` (EXP-042-R3 accepted with limits).
- `experiments/EXP-043-*.md` did not exist before T1 (this record was created in T1). `evidence/EXP-043/` did not exist before T1.

## Intended tenant-wide object scope (documented; nothing created in T1)

- One shared tenant-wide IDO property class `FX_UMBase`, factory-owned (FX_ prefix). Scope: shared tenant metadata, not User-scoped. The Form (IDO Property Classes) remains the User-scope editing surface.
- Reference only: Label String ID `FX_sUM`. The FX_sUM string resource is **not** created.
- Out of scope: any other property class, IDO, SQL object, the existing `FX_HelloWorld01` Form/IDO/table and rows FX001/FX002, metadata cache unload, FormSync, check-in/out, deployment, the downstream IDO wizard.
- Cleanup ownership: factory (FX_ test artifact). No cleanup is performed in EXP-043. Deletion is out of scope.

## T1 execution log (browser actions in order)

Tab state at start: one Mongoose tab (selected). In-page Form tabs: `FX_HelloWorld01` (selected; 2 saved rows FX001/Factory test one, FX002/Factory test two; Save disabled; no uncommitted changes), left in place.

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Tab listing; fresh snapshot; screenshot | DEM identity bar `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; `FX_HelloWorld01` tab selected; no Select Form or other dialog; no portal banner; Save disabled | `t1-01` (snapshot) |
| 2 | Click toolbar `Open` (`f1e25`) | Select Form dialog opened. Filter pre-filled with `FX_HelloWorld01` (one row). | snapshot |
| 3 | Click Filter textbox; `Control+a`; `Backspace` | Filter emptied; full inventory rendered | snapshot (`find` "Filter:" showed the empty textbox) |
| 4 | Type `Property Classes` with key events (`slowly`) | Zero rows (no class named with a space) | snapshot `f1e178` |
| 5 | `Control+a`; `Backspace`; type `PropertyClass` with key events | **One row**: Caption `Property Classes`, Name `IdoPropertyClasses` | snapshot `f1e178`; `t1-02` |
| 6 | Click row Caption cell (`f1e536`); find OK (`f1e226`, verified label `OK`); click OK | Runtime tab `Property Classes` opened (selected) next to `FX_HelloWorld01`. Status `Filter in Place`. New, Refresh and Save disabled at open. | snapshot; `t1-03` |
| 7 | `F4` with blank criteria (inventory) | Status `Class Name (IDO Property Classes 1 of 200)`; **Get More Rows enabled** (more than 200 classes exist; the list is paged). Row 1 = stock class `AccessAs`; the form then showed that record read-only. Not an absence proof. | `t1-04` |
| 8 | Click toolbar `Filter in Place` (`f1e38`) | FiP mode re-entered. Criteria textbox retained the prior value `AccessAs` (selected). | snapshot; `t1-05`, `t1-07` |
| 9 | Fill `AccessAs`; Tab; F4 (positive control: exact known class) | **1 row** `AccessAs`; status `Base Class (IDO Property Classes 1 of 1)`. Record: Data Type String; Length 50; Column Data Type `AccessAsType`; Label String ID `sAccessAs`; Description `Infor ERP SL autogenerated`; Access As `Core`. No change. | `t1-06` |
| 10 | FiP; fill `AccessA*`; Tab; F4 (wildcard control) | 1 row `AccessAs` (status `1 of 1`). See note on the ambiguity in step 11. | `t1-07`(pre), grid find |
| 11 | FiP; fill `Alpha*`; Tab; F4 (wildcard control, multi-row) | **2 rows**: `AlphaKey`, `AlphaPrefix`; status `(1 of 2)`. This proves the `*` wildcard and that F4 executed. | `t1-09` |
| 12 | FiP; fill `FX_UM*`; Tab; F4 (prefix absence gate) | **0 data rows.** Only a starred blank add-mode placeholder remained (status `Base Class (IDO Property Classes 1 of 1)`). Confirmed by an accessibility snapshot of the grid (one row, Class Name empty, `Locked By` = the current user, `Revision Date` 10/10/2026). | `t1-10`; grid snapshot |
| 13 | FiP click `f1e38` | **Error: `Ref f1e38 not found`** (stale ref). Recovery allowance used: one fresh untargeted snapshot (the one permitted). | error; recovery snapshot |
| 14 | FiP click `f1e38` (ref from the fresh snapshot) | FiP re-entered (retained `FX_UM*`) | `find` "Class Name:" |
| 15 | Fill `FX_UMBase`; Tab; F4 (exact absence gate) | **0 data rows** (placeholder only, `1 of 1`) | `t1-11` |
| 16 | FiP; fill `fx_um*`; Tab; F4 (lowercase prefix; case-insensitive check) | **0 data rows** (placeholder only, `1 of 1`) | `t1-12` |
| 17 | FiP; fill `AccessAs`; Tab; F4 (restore a clean record view; **no Save, no New, no Check Out**) | Placeholder replaced silently (no prompt). `AccessAs` shown read-only. Star gone. Save disabled. Status `Base Class (IDO Property Classes 1 of 1)`. | `t1-13` |
| 18 | Final `find` for dialog / alertdialog / portal-notification / Close Window; `find` "Save"; `browser_tabs` list | No dialog; no portal banner; Save disabled; one tab | finds |

## Blank placeholder observation (affects the next task)

- A zero-row Filter-in-Place query leaves an **unsaved blank add-mode placeholder** (blue star, `Locked By` = current user, today's `Revision Date`, New enabled, Check In / Undo Check Out shown). It was **not** saved and nothing was typed into it. It was cleared in step 17 by a new FiP query for `AccessAs`, which produced no prompt.
- The Check In and Undo Check Out buttons appeared for the placeholder. They were **not clicked**. Check-in/check-out is out of scope.
- The step-13 error (`Ref f1e38 not found`) occurred after the step-12 FiP query returned the placeholder state. The fresh snapshot confirmed the placeholder and Save disabled, and the next click succeeded.

## Positive control and absence gate (AC-2) — results

| Check | Criteria | Method | Result | Interpretation |
| --- | --- | --- | --- | --- |
| Positive control A (exact, known row) | `AccessAs` | FiP, Tab, F4 | 1 row (`AccessAs`, stock) | Exact FiP works; `AccessAs` exists and was not changed |
| Positive control B (wildcard, multi-row) | `Alpha*` | FiP, Tab, F4 | 2 rows (`AlphaKey`, `AlphaPrefix`) | `*` wildcard works; F4 executed |
| Inventory context | (blank) | FiP, F4 | First 200 of more; `Get More Rows` enabled | Paged list. Not used as the absence proof |
| Prefix absence (case as-written) | `FX_UM*` | FiP, Tab, F4 | 0 data rows | No FX_UM-prefixed class in the collection |
| Exact absence | `FX_UMBase` | FiP, Tab, F4 | 0 data rows | `FX_UMBase` absent |
| Case-insensitive prefix absence | `fx_um*` | FiP, Tab, F4 | 0 data rows | No case-insensitive collision |

Caveat on step 10 (`AccessA*`): the status and the grid showed `AccessAs` and the state moved from criteria to a record view, but the result is identical to the earlier exact control, so it does not separately prove the wildcard. Step 11 (`Alpha*`, 2 rows) is the decisive wildcard control.

Note on zero-row results: each `FX_UM*`, `FX_UMBase` and `fx_um*` result was checked by a state change from the criteria row (e.g. `FX_UM*` in the criteria row → blank placeholder after F4). The grid snapshot in step 12 confirms no data row.

**Gate verdict: PASSED** under the brief's rule. Positive controls returned the expected rows. Every FX_UM-prefixed query (prefix as-written, exact, and lowercase prefix) returned zero data rows. No FX_UMBase or FX_UM-prefixed class exists in the IDO Property Classes collection visible to this session. The claim is UI-level, single session, through this Web Client user. It makes no claim about other users, the database, or tenant-wide visibility beyond this query.

## Field identity (AC-3 readiness; no field was typed into)

Accessible labels observed on the IDO Property Classes Form (from the accessibility tree; no Find Value needed):
- `Class Name:` (textbox), `Base Class:` (combobox + Open), `Description:`, `Revision No:`, `Revision Date:`, `Locked By:`, `Access As:`.
- Data: `Data Type:` (combobox + Open), `Length:` (textbox), `Decimal Position:`, `Default Value:`, `Column Data Type:` (combobox + Open), `Inline List:`, `Validators:`, `Required`, `Read Only Record`, `Validate Immediately`, `Validate Immediately Prompt:`.
- Formatting: `Label String ID:` (textbox), `Input Mask:`, `Prompt Char:`, `Justify:`, `Binary Format:`, `Date Format:`, `IME Char Set:`, `Boolean True/False:`, `Display Decimal Position:`, `Read Only`, `Upper Case`, `HTML`, `UI hidden`.
- Domain: `Domain IDO Name:`, `Domain Property:`, `Domain List Properties:`, `Domain Additional Settings:`. Expression: `Property Value:`.
- Toolbar: `Save` (disabled at open), `New` (disabled at open), `Refresh`, `Filter in Place`, `Delete`, `Get More Rows`.
- Whether `Column Data Type` offers `NVARCHAR` (and its exact displayed label) has **not** been checked. That is for T2 (supported dropdown, prefix filter permitted).

## Acceptance matrix (T1 scope)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (preflight) | `t1-01` (DEM identity bar, no dialog, Save disabled), `t1-02` (Select Form one row `Property Classes` / `IdoPropertyClasses`), `t1-03` (Form opened via Select Form), repository baseline above | The "Site Developer" context was not visible. The FX_HelloWorld01 tab was left open and untouched. |
| AC-2 | **Supported** (gate PASSED) | `t1-06` (exact control, 1 row), `t1-08`/`t1-09` (wildcard control, 2 rows), `t1-10` (FX_UM* 0 rows), `t1-11` (FX_UMBase 0 rows), `t1-12` (fx_um* 0 rows), grid snapshot | UI-level, single session, this user's collection. Zero-row results rely on the state change and the grid snapshot. The inventory is paged (200+), so the absence proof uses server-side FiP criteria, not the list. |
| AC-3 to AC-9 | **Not run** (out of T1 scope) | — | Creation, Save, close/reopen, recovery and cleanup inventory belong to T2. |

## Operation counts (T1)

| Operation | Count |
| --- | --- |
| Browser action calls (clicks, key presses, typing, fills) | 41 calls, 1 error (`Ref f1e38 not found`) |
| — clicks | 13 attempts (12 successful, 1 error): toolbar Open, Select Form filter textbox, row caption, OK, 9 FiP clicks |
| — key presses | 19: `Control+a` ×2, `Backspace` ×2, `F4` ×8, `Tab` ×7 |
| — typing | 9: 2 key-event (`slowly`) into the Select Form filter; 7 plain fills into FiP criteria |
| Accessibility snapshots (explicit `browser_snapshot`) | 8 (preflight, after Open, two Select Form filter checks, after OK, Form grid after blank F4, recovery untargeted snapshot, zero-row grid check) |
| `browser_find` calls | 13 (Select Form and status checks; 7 `Class Name:` focus checks; Save; dialog check) |
| Tab listings | 2 (start and end) |
| Screenshots (worker-requested PNG) | 13 (`t1-01` to `t1-13`) |
| Recovery snapshots | 1 (after the stale-ref error) |
| Corrected visible inspections | 0 separate (the screenshots taken between steps are inspections, not corrections) |
| Ref-not-found errors | 1 |
| Save / New / Delete / Refresh / Check In / Check Out | **0 / 0 / 0 / 0 / 0 / 0** |
| Class edits | **0** |
| Prompts or dialogs answered | **0** (none appeared) |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code tools | **0** invoked by the worker |
| Designer, User Preferences, Explorer shortcut, browser reload/navigation, login | **0** |
| Get More Rows | 0 (control disabled-to-enabled, not used) |

## Errors, deviations and recovery accounting

1. **Deviation (process):** at step 10 (`AccessA*`), the fill and the Tab were issued in one response, so the two browser actions were not strictly sequential. Both returned normally and no unexpected effect was observed. Corrected: later actions were one at a time.
2. **Error (step 13):** `Ref f1e38 not found` on the FiP toolbar click. Recovery: one fresh untargeted snapshot (the one permitted), then the click on the new ref succeeded. Accounting: 1 error, 1 recovery snapshot, 0 extra attempts.
3. **Observation (not an error):** a zero-row FiP query leaves an unsaved placeholder. Cleared at step 17 without any prompt.
4. **Observation:** Select Form's Name filter needed `PropertyClass`; the caption `Property Classes` with a space gave zero rows. The Name is `IdoPropertyClasses`.

## Final browser state (T1)

- Mongoose is the only browser tab, selected.
- Runtime tabs: `FX_HelloWorld01` (unchanged; 2 saved rows; Save disabled) and `Property Classes` (selected). The `Property Classes` Form shows the stock record `AccessAs` read-only (no placeholder, no star), with Save disabled.
- The `Property Classes` tab is still open and selected, with Check Out not clicked. No in-page dialog, no browser-native prompt, no unsaved-change prompt, no portal banner. Stable.
- No `FX_UMBase` record exists; nothing was saved.

## Repository confinement (T1, self-audit)

Files written by this worker in T1:
- `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (created)
- `evidence/EXP-043/t1-01-preflight-state.png` through `evidence/EXP-043/t1-13-final-state-fip-AccessAs-restore-view.png` (13 screenshots, created)

Not written or touched: any other repository file; `tools/` (not read); `evidence/playwright/` (tool-generated snapshot and console logs, not worker-authored).

## Evidence index (T1)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t1-01-preflight-state.png` | DEM identity bar, `FX_HelloWorld01` tab (2 rows, Save greyed), no dialog | AC-1 preflight, configuration, no obstructing dialog | Site Developer context |
| `t1-02-select-form-filter-propertyclass-one-row.png` | Select Form, Filter `PropertyClass`, one row `Property Classes` / `IdoPropertyClasses` | Identity of the target Form via Select Form (AC-1) | That the Form opened |
| `t1-03-ido-property-classes-form-opened-via-select-form.png` | `Property Classes` tab next to `FX_HelloWorld01`, status `Filter in Place`, one blank criteria row, Class Name focused | The Form opened through Select Form, in FiP mode (AC-1) | Any collection result |
| `t1-04-blank-fip-f4-inventory-property-classes.png` | Status `Class Name (IDO Property Classes 1 of 200)`; row 1 `AccessAs`, read-only | The inventory is paged (200+); a stock class exists | Absence (not a proof) |
| `t1-05-fip-mode-reentered-blank-criteria.png` | FiP re-entered; blank criteria | FiP mode re-entry (no change) | Query results |
| `t1-06-positive-control-fip-exact-AccessAs-f4.png` | One row `AccessAs`; String, Length 50, `AccessAsType`, `sAccessAs` | Exact FiP works; positive control A | Wildcard behaviour |
| `t1-07-fip-reentered-retains-prior-criteria.png` | FiP re-entered; criteria `AccessAs` retained and selected | Criteria retention behaviour | Query result |
| `t1-08-positive-control-wildcard-AccessA-star-f4.png` | One row `AccessAs`, status `1 of 1` (filename's "star" is the wildcard, not a row star) | Consistent with the wildcard | Wildcard on its own (ambiguous, see caveat) |
| `t1-09-positive-control-wildcard-Alpha-star-f4.png` | Two rows `AlphaKey`, `AlphaPrefix`; status `1 of 2` | `*` wildcard works; F4 executed (positive control B) | Any FX_UM result |
| `t1-10-gate-fip-prefix-FX_UM-star-f4.png` | Zero data rows; starred blank placeholder; status `1 of 1` | `FX_UM*` returned no FX_UM-prefixed class | That the grid is complete (paged list not used) |
| `t1-11-gate-fip-exact-FX_UMBase-f4.png` | Zero data rows; placeholder; `1 of 1` | `FX_UMBase` absent | Case variants (see t1-12) |
| `t1-12-gate-fip-lowercase-prefix-fx_um-star-f4.png` | Zero data rows; placeholder; `1 of 1` | Lowercase prefix absent (case-insensitive) | — |
| `t1-13-final-state-fip-AccessAs-restore-view.png` | `AccessAs` read-only record; no star; Save greyed; status `1 of 1` | Clean state restored; no prompt | Any persisted change (none made) |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Select Form Name filter for `Property Classes` returns zero rows; the Name is `IdoPropertyClasses`; `PropertyClass` returns one row | observed (one run) |
| Select Form Name filter, with native `Control+a`, `Backspace` and key-event typing, works | observed (one run) |
| The IDO Property Classes Form opens in its own tab in Filter-in-Place mode | observed (one run) |
| A blank FiP F4 returns a paged list (200 shown; more exist), so it is not an absence proof | observed (one run) |
| The FiP `*` wildcard works in criteria (`Alpha*` → 2 rows) | observed (one run) |
| A zero-row FiP result leaves an unsaved blank add-mode placeholder; a later FiP query clears it without a prompt | observed (one run) |
| `AccessAs` exists (stock): String, Length 50, `AccessAsType`, `sAccessAs` | observed (one run) |
| No `FX_UM`-prefixed property class exists in the queried collection (absence gate passed) | observed (one session, UI-level) |
| The Form's inputs carry accessible labels, so Find Value is not needed to identify them | observed (one run) |
| A Filter-in-Place query for FX_UMBase/FX_UM is repeatable and persistent | **unresolved** (not tested) |
| The NVARCHAR option and its exact displayed label | **unresolved** (T2) |

## Open questions and next permitted action

1. **Next permitted action:** T2 (creation) requires the operator/coordinator to authorize it. T2 would then: use the native toolbar `New` exactly once; set Class Name `FX_UMBase`, Data Type String, Length 10, Label String ID `FX_sUM` (reference only); inspect and select the displayed NVARCHAR option (prefix filter permitted), recording its exact label; take a pre-Save snapshot; one Save; post-Save read; ordinary close; one reopen; exact-name recovery; and `evidence/EXP-043/cleanup-inventory.md`.
2. The stock placeholder behaviour means the next task should first confirm the Form is clean (it is clean now: AccessAs read-only, no placeholder).
3. Whether the absence result holds for other users or for the database is not claimed.
4. The brief's cache-unload step from the transcript (Form → Definition → Unload All Global Form Objects) is **not** authorized and was not performed.
5. The "Site Developer" context was not visible in the UI. The configuration identity bar was observed.

## Operator review status (after T1)

Runtime left clean for operator review before the creation step: no unsaved placeholder, no dialog, Save disabled, `FX_HelloWorld01` tab unchanged. Classification: **observed only, NOT replay_verified** (single execution).

---

## T2 — Pre-Save configuration of one unsaved FX_UMBase record (STOPPED BEFORE SAVE)

- Date: 2026-10-10. Task T2 (task_message_id `3afc8d41-5227-4497-a556-5d74df8da5cb`), worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`.
- Scope of T2: one native `New`, configure four attributes, verify each, capture the pre-Save state. **No Save, no close, no reopen, no recovery.**
- Result: **the record is configured and staged, but NOT saved.** `FX_UMBase` does not yet exist in the collection. The Save button is enabled, and it was not clicked.

### Actions performed (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Fresh untargeted snapshot | Property Classes tab selected, `AccessAs` displayed read-only, Save disabled, `FX_HelloWorld01` tab present, no dialog, status `Base Class (IDO Property Classes 1 of 1)` | snapshot (in-session) |
| 2 | Click toolbar `New` (`f1e29`), once | New add-mode row: row 2 starred, Class Name blank; status `(2 of 2)`; `AccessAs` row 1 not starred or selected for editing | `t2-01` |
| 3 | Fresh snapshot of the form region (`f1e104`) | Row 2 starred, blank; Class Name textbox `f1e447`; Data Type `f1e518`; Length `f1e527`; Column Data Type `f1e554`; Label String ID `f1e613` | snapshot |
| 4 | Class Name: one plain fill `FX_UMBase`, then Tab | Textbox reads `FX_UMBase`; grid row 2 shows `FX_UMBase`; status `2 of 2` | find/snapshot |
| 5 | Data Type: opened the visible dropdown (`f1e900`), clicked the `String` option (`f1e919`) | Combobox reads `String`; grid cell `String` | snapshot |
| 6 | Length: one plain fill `10`, then Tab | Textbox reads `10`; grid cell `10` | snapshot |
| 7 | Column Data Type: opened the visible dropdown (`f1e901`); the list was unfiltered and virtualized (first ~200 names, `nvar` not present in the DOM) | Options are lowercase SQL types (`bigint`, `binary`, `char`, `date`, `datetime`, `decimal`, `float`) mixed with `*Type` names | snapshot `f1e954` |
| 8 | Typed the prefix `nvar` as key events (`slowly`) into the combobox | Text shown as `nvar`; **the list did NOT filter** (unfiltered items still shown) | snapshot `f1e954` |
| 9 | Pressed `F2` (the transcript's implied-wildcard shortcut) | List filtered to **one** entry: `nvarchar`. Combobox shows `nvarchar`. | `t2-02`; find `f1e1360` marked `[selected]` |
| 10 | Clicked the visible option `nvarchar` (`f1e1360`) | Dropdown closed; combobox reads `nvarchar` | `t2-03` |
| 11 | Tab (commit) | Grid row cell `nvarchar` (`f1e1366`) present for the first time (it was blank before the Tab) | find |
| 12 | Label String ID: one plain fill `FX_sUM`, then Tab | Textbox reads `FX_sUM`; grid cell `FX_sUM` (`f1e1371`); focus moved to Input Mask (not touched) | snapshot |
| 13 | Screenshot of the configured unsaved record | All four attributes visible; row 2 starred; `AccessAs` row 1 unchanged | `t2-04` |
| 14 | Read-only check: `find` for Save and dialog | Save **enabled** (`f1e28`, no `disabled`). No dialog. No portal banner. | find |

### Column Data Type — exact recorded value (AC-4)

- **Displayed option text:** `nvarchar` (lowercase).
- **Selected value:** `nvarchar`.
- **How selected:** prefix `nvar` typed, then `F2` (implied `*`), which produced a one-entry list; that visible option was then clicked. Typed text was not committed on its own.
- **Not verified:** whether the stored value matches the display exactly (SQL type casing). That is for T3 post-Save recovery.
- **Other NVARCHAR-like options:** not checked. Only one entry matched `nvar`.

### Acceptance checks for T2

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-3 | **Supported** for the single New and the field mapping | `t2-01`, the snapshot at step 3 | No Find Value was needed, because the fields carry accessible labels. |
| AC-4 | **Supported** pre-Save (all four attributes + the exact NVARCHAR text) | `t2-04`; grid row 2; combobox and textbox refs above | Pre-Save only. The stored value is unconfirmed until T3. |
| AC-5 | **NOT RUN** (no Save, by design) | — | Next task. |
| AC-6 to AC-9 | **NOT RUN** | — | Next task. |
| AC-2 | Carried from T1 (gate passed) | T1 evidence `t1-06` to `t1-12` | Single session. |
| AC-1 | Carried from T1 | `t1-01`, `t1-03` | — |

### Operation counts (T2)

| Operation | Count |
| --- | --- |
| Clicks | 5 (New; Data Type Open; `String`; Column Data Type Open; `nvarchar`) |
| Plain fills (`browser_type`, no `slowly`) | 3 (Class Name, Length, Label String ID) |
| Key-event typing (`slowly`) | 1 (`nvar`, Column Data Type lookup) |
| Tab (commit) | 4 (Class Name, Length, Column Data Type, Label String ID) |
| F2 | 1 (lookup prefix filter) |
| Explicit `browser_snapshot` calls | 9 |
| `browser_find` calls | 8 |
| Screenshots | 4 (`t2-01` to `t2-04`) |
| New | **1** (no second New) |
| Save | **0** (stopped before Save) |
| Close / reopen / recovery | **0 / 0 / 0** |
| Errors | **0** (no Ref-not-found, no timeout) |
| Recovery snapshots | **0** of the 1 permitted (not needed) |
| Corrected visible inspections | **0** of the 1 permitted |
| Prompts or dialogs answered | **0** (none appeared) |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code | **0** (worker-initiated) |
| Designer, preferences, Explorer shortcut, reload, login | **0** |
| Other property classes edited | **0** (`AccessAs` displayed only) |

### Deviations and limitations (T2)

1. **Process:** none this time. Each browser action was sent alone.
2. **Lookup behaviour:** typing `nvar` as key events did not filter the Column Data Type list. F2 did. This was observed in one run only. The transcript's F2 method held here, but the first attempt needed F2 to get the filter.
3. **Grid commit:** the Column Data Type cell in the grid stayed blank after the option click and only showed `nvarchar` after a Tab. The combobox showed `nvarchar` before the Tab. The Tab was needed for the grid, so the record commit was unverified until that Tab.
4. **Unsaved state left in the runtime:** the record is staged and unsaved, with Save enabled. The operator or the next task decides whether to save it or discard it. This worker did not discard it.

### Final browser state (T2)

- One Mongoose tab, selected. Runtime tabs: `FX_HelloWorld01` (unchanged, 2 saved rows) and `Property Classes` (selected).
- `Property Classes`: unsaved new row 2 with Class Name `FX_UMBase`, Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM`. The focus is on the empty Input Mask field. **Save is enabled and not clicked.** `AccessAs` (row 1) is unchanged.
- No dialog, prompt, or portal banner. The focus is in Input Mask.

### Evidence (T2)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-043/t2-01-after-single-new-click-placeholder.png` | Row 2 starred and blank; status `2 of 2`; `AccessAs` row 1 not selected; New tooltip | One new add-mode record (AC-3) | The field values |
| `evidence/EXP-043/t2-02-column-data-type-lookup-after-nvar-f2.png` | Column Data Type lookup filtered to one entry `nvarchar`; the form shows Class Name `FX_UMBase`, Data Type `String`, Length `10` | The F2 prefix filter returns `nvarchar` (AC-4 lookup) | That `nvarchar` is saved |
| `evidence/EXP-043/t2-03-column-data-type-nvarchar-selected-after-option-click.png` | Column Data Type shows `nvarchar`; dropdown closed; grid row starred | The visible option selection (AC-4) | The committed record value (the grid cell was blank in this image) |
| `evidence/EXP-043/t2-04-fully-configured-unsaved-record-pre-save.png` | All four attributes visible on the new row, `AccessAs` unchanged, Save enabled, status `2 of 2` | AC-4 pre-Save configuration as displayed | Persistence (no Save) |

Evidence inventory: `evidence/EXP-043/cleanup-inventory.md` (staged, not persisted).

### Repository confinement (T2, self-audit)

Files written by this worker in T2:
- `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (edited: header status line, plus this T2 section)
- `evidence/EXP-043/cleanup-inventory.md` (created)
- `evidence/EXP-043/t2-01-after-single-new-click-placeholder.png` to `t2-04-fully-configured-unsaved-record-pre-save.png` (4 PNGs, created)

Not written: any other repository file. `tools/` was not read.

### Open items for the next step (T3)

1. **Decide and authorize T3:** one explicit Save of the staged `FX_UMBase` record, then the post-Save read, close, reopen, and recovery. The Save must be the only one.
2. Confirm the `nvarchar` display casing against the stored value in the post-Save read (AC-6).
3. The grid's Column Data Type cell was blank until a Tab. Re-check that the value is committed before Save (the T3 pre-Save snapshot should show the grid cell `nvarchar`).
4. Classification remains **observed only, NOT replay_verified.**

---

## T3 — Single explicit Save and post-Save exact-name query (STOPPED BEFORE CLOSE/REOPEN)

- Date: 2026-10-10. Task T3 (task_message_id `a189d20f-fb71-463d-a52e-95df14fc40a5`), worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`.
- Scope: verify the staged record, one Save, one post-Save exact-name query. **No close, no reopen, no second Save, no New, no delete, no string resource, no cache operation.**
- Result: **Save SUCCEEDED in the UI (observed). `FX_UMBase` recovered as exactly one row in the same session with all five values matching the pre-Save baseline.**

### Pre-Save verification (fresh snapshot, `t3-01`)

| Check | Observed |
| --- | --- |
| Selected tab / Form | `Property Classes` selected; `FX_HelloWorld01` tab present and untouched |
| Staged record | Row 2 starred (new), status `Input Mask (IDO Property Classes 2 of 2)` |
| Class Name | `FX_UMBase` (textbox `f1e536` in the T3 snapshot; grid cell `FX_UMBase`) |
| Data Type | `String` (combobox `f1e608`; grid cell `String`) |
| Length | `10` (textbox `f1e618`; grid cell `10`) |
| Column Data Type | `nvarchar` (combobox `f1e645`; **grid cell `nvarchar` (`f1e469`) present**, so the T2 grid-commit question is resolved) |
| Label String ID | `FX_sUM` (textbox `f1e706`; grid cell `FX_sUM`) |
| Existing record `AccessAs` | Row 1, unchanged, not selected for editing |
| Save | Enabled (`f1e28`, no `disabled`) |
| Dialogs / prompts / banners | None |

Gate passed; Save was performed once.

### Save (one explicit click)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Clicked the enabled toolbar `Save` (`f1e28`, label verified in the same snapshot) | Click returned with no error. No timeout, no `Ref not found`. | tool log |
| 2 | Settled screenshot and fresh snapshot (no further action) | **Save disabled** (`[disabled]`, tooltip `Save`). Row 2 no longer starred. Class Name, Data Type, Length, Column Data Type and Label String ID shown in the saved read-only style. Status still `Input Mask (IDO Property Classes 2 of 2)`. **No validation text, no duplicate-name message, no alert or confirmation prompt.** | `t3-02` |
| 3 | Observed side effect | **Check In** and **Undo Check Out** are now enabled (they were disabled before Save). `Locked By` shows the current user. The record appears checked out to the user. Not acted on. | `t3-02`, `t3-03` |

**Save response (exact):** no success message is shown in this UI, which matches EXP-042-R3. Success is inferred from the settled state: Save greyed, the new-row star cleared, the fields in saved style, and no error or prompt. No retry was made.

### Post-Save exact-name query (one FiP query)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Clicked toolbar `Filter in Place` (`f1e40`) | FiP mode entered. The criteria box retained the prior value `AccessAs`. | snapshot |
| 2 | Plain fill `FX_UMBase` into the Class Name criteria box (`f1e536`), then one Tab | Criteria `FX_UMBase` | snapshot |
| 3 | F4 | Query ran. **One data row**: `FX_UMBase` (row `1`, row-selector checked, **no starred placeholder**). Status `Base Class (IDO Property Classes 1 of 1)`. | `t3-03`; snapshot `f1e1002` |

**Recovered row (full attributes):** Class Name `FX_UMBase`; Base Class blank; Description blank; Revision No `1`; Locked By `anton.ramos@3mworks.com.ph`; Revision Date `10/10/2026`; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; all other columns unset.

**Casing:** the recovered Class Name is `FX_UMBase`, the same as typed. The Column Data Type is `nvarchar` as displayed. The stored SQL casing was not separately inspected.

### Acceptance checks for T3

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried | T1 evidence | — |
| AC-2 | Carried (gate PASSED in T1) | `t1-06` to `t1-12` | Single session. |
| AC-3 | Carried | `t2-01`; T2 snapshots | — |
| AC-4 | Carried (pre-Save, all five values verified in T3) | `t3-01`; T2 `t2-04` | — |
| AC-5 | **Supported (UI level)**: one explicit Save, settled UI with no validation, duplicate-name or confirmation message; Save disabled after | `t3-01` (pre), `t3-02` (post) | Success inferred from UI state. No database read. No explicit success message in this UI. |
| AC-6 | **Supported (same session)**: one post-Save exact-name query returned exactly one `FX_UMBase` row with String, 10, `nvarchar`, `FX_sUM` | `t3-03`; snapshot `f1e1002` | Same-session Web Client read. Not a database read. Stored `nvarchar` casing not inspected. |
| AC-7 | **NOT RUN** (close is T4) | — | — |
| AC-8 | **NOT RUN** (reopen is T4) | — | — |
| AC-9 | **Partial**: cleanup inventory updated (one created class, four attributes, FX_sUM reference, tenant-wide scope, factory ownership, no deletion, lock state noted) | `evidence/EXP-043/cleanup-inventory.md` | Final reconciliation after AC-7/AC-8. |

### Operation counts (T3)

| Operation | Count |
| --- | --- |
| Save (toolbar) | **1** (no retry, no second Save) |
| New | 0 (T2's single New is the only New in EXP-043 so far) |
| Close / reopen | **0 / 0** |
| Class edits after Save | **0** |
| Browser clicks | 2 (toolbar Save; toolbar Filter in Place) |
| Plain fills | 1 (criteria `FX_UMBase`) |
| Key presses | 2 (Tab, F4) |
| Explicit snapshots | 3 (pre-Save `t3-01` context; post-Save; post-query grid) |
| `browser_find` calls | 2 (Class Name criteria check; dialog and Save-state check) |
| Screenshots | 3 (`t3-01`, `t3-02`, `t3-03`) |
| Tab listings | 1 (end) |
| Errors | **0** |
| Recovery snapshots | **0** of the one permitted (not needed) |
| Corrected visible inspections | **0** of the one permitted |
| Prompts or dialogs answered | **0** (none appeared) |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code | **0** |
| Designer, preferences, Explorer shortcut, reload, login, check-in, check-out | **0** |

**Cumulative recovery allowance (EXP-043 so far):** one stale-ref error in T1 (`Ref f1e38 not found`), recovered with the one fresh snapshot allowed. No recovery allowance remains for that step. T2 and T3 used none.

### Repository confinement (T3, self-audit)

Files written by this worker in T3:
- `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (edited: status line, plus this T3 section)
- `evidence/EXP-043/cleanup-inventory.md` (rewritten for the saved state)
- `evidence/EXP-043/t3-01-pre-save-staged-record-verified.png`, `t3-02-post-save-settled-after-single-save-click.png`, `t3-03-post-save-fip-exact-FX_UMBase-query-result.png` (created)

Not written: any other repository file. `tools/` was not read.

### Final browser state (T3)

- One Mongoose tab, selected. Runtime tabs: `FX_HelloWorld01` (unchanged) and `Property Classes` (selected).
- `Property Classes`: FiP mode with the criteria `FX_UMBase`; one data row `FX_UMBase`; status `1 of 1`; Save disabled; Check In and Undo Check Out enabled. The Form is **open and not closed**, per the brief.
- No dialog, prompt, unsaved-change prompt or portal banner. Stable.

### Open items for T4

1. **Close and reopen (AC-7, AC-8):** one ordinary close of the clean IDO Property Classes Form, one Select Form reopen, one exact-name query, and comparison with the AC-6 baseline above.
2. **Lock state:** `FX_UMBase` shows as locked by the current user with Check In enabled. Decide whether it is checked in before any further use. Check-in is outside this experiment.
3. **Stored casing:** the post-save display is `nvarchar`. The stored SQL casing is not inspected.
4. Classification remains **observed only, NOT replay_verified**.

---

## T4 — Ordinary Form close, one reopen, same-session exact-name recovery

- Date: 2026-10-10. Task T4 (task_message_id `c15e7f10-52d8-4186-aee2-5f6d9a1b58ff`), worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`.
- Scope: one ordinary close of the Property Classes Form, one reopen through Select Form, one exact-name query. **No Save, no New, no edit, no check-in or undo, no lifecycle control, no cache operation.** Final acceptance reconciliation is reserved for a separate review.
- Result: **close verified (AC-7). Reopen and same-session exact-name recovery verified (AC-8), with all attributes identical to the T3 post-Save baseline.**

### Pre-close state (fresh snapshot, `t4-01`)

| Check | Observed |
| --- | --- |
| Selected Form | `Property Classes` (tab `f1e102`, tabpanel `f1e105`) |
| Record | One row `FX_UMBase` (`f1e359`); Class Name textbox `f1e449` = `FX_UMBase` |
| Attributes | Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM` |
| Save | Disabled |
| Starred / unsaved record | None |
| Dialogs | None |
| Unrelated tab | `FX_HelloWorld01` present |
| Ownership / lock | `Locked By` = `anton.ramos@3mworks.com.ph`; Check In (`f1e506`) and Undo Check Out (`f1e508`) **enabled**; not activated |
| Status | `Base Class (IDO Property Classes 1 of 1)` |

### Actions and observations

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Screenshot of the pre-close baseline | Matches the snapshot above | `t4-01` |
| 2 | Click `Close Panel Property Classes` (`f1e104`, verified label), **once** | The click returned with no error. The page URL changed from `favoriteContext=IdoPropertyClasses` to `favoriteContext=FX_HelloWorld01`. | tool log; URL |
| 3 | Fresh snapshot | `Property Classes` tab **removed**. `FX_HelloWorld01` tab selected; grid `1`/`2`, Factory test one/FX001 and Factory test two/FX002; status `(Object 1 of 2)`; Save disabled. **No save-changes, discard, or validation prompt.** | snapshot; `t4-02` |
| 4 | Toolbar `Open` (`f1e25`), once | Select Form dialog opened (`f1e861`); the filter already held `PropertyClass` from a prior session | snapshot `f1e861` |
| 5 | Click the filter textbox (`f1e890`); `Control+a`; `Backspace`; key-event type `PropertyClass` (`slowly`) | Filter cleared, then re-entered; one grid row: Caption `Property Classes` (`f1e918`), Name `IdoPropertyClasses` (`f1e920`) | snapshot `f1e861` |
| 6 | Click row Caption cell `f1e918` | Row active (`[active]` on `Property Classes`) | snapshot |
| 7 | Click OK `f1e909` (verified label `OK`), **once** | Form reopened; URL `favoriteContext=IdoPropertyClasses`; `Property Classes` tab selected, `FX_HelloWorld01` tab still present | snapshot |
| 8 | Screenshot of the reopened state | Status `Filter in Place`; blank criteria row (no saved row loaded on open); Class Name textbox focused and empty; New, Refresh and Get More Rows disabled; Save disabled | `t4-03` |
| 9 | Plain fill `FX_UMBase` into the Class Name criteria box (`f1e1269`), then Tab, then F4 | **One data row** `FX_UMBase` (row 1, no starred placeholder). Status `Base Class (IDO Property Classes 1 of 1)`. Criteria box `FX_UMBase`. | snapshot `f1e925`; `t4-04` |

**Ref typo (own error):** one attempt used `f1269` instead of the snapshot ref `f1e1269`. The call returned `does not match any elements` and executed nothing. The correct ref was in the snapshot taken immediately before, with no browser action since, so the retry used it directly. This was a transcription error, not a stale-ref recovery. The recovery snapshot allowance was not used in T4.

### Recovered record compared with the T3 post-Save baseline (AC-8)

| Attribute | T3 post-Save baseline | T4 recovered | Match |
| --- | --- | --- | --- |
| Class Name | `FX_UMBase` | `FX_UMBase` | Yes |
| Data Type | `String` | `String` | Yes |
| Length | `10` | `10` | Yes |
| Column Data Type | `nvarchar` | `nvarchar` | Yes (displayed text; stored SQL casing not inspected) |
| Label String ID | `FX_sUM` | `FX_sUM` | Yes |
| Revision No | `1` | `1` | Yes |
| Revision Date | `10/10/2026` | `10/10/2026` | Yes |
| Locked By | `anton.ramos@3mworks.com.ph` | `anton.ramos@3mworks.com.ph` | Yes |
| Access As | `G6R` | `G6R` | Yes |
| Rows returned | 1 | 1 | Yes (no unexpected rows) |

### Acceptance checks for T4

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried | T1 | — |
| AC-2 | Carried (gate PASSED, T1) | `t1-06` to `t1-12` | Single session. |
| AC-3 | Carried | `t2-01` | — |
| AC-4 | Carried (pre-Save) | `t2-04`, `t3-01` | — |
| AC-5 | Carried (one Save, T3) | `t3-01`, `t3-02` | UI-level success inferred; no database read. |
| AC-6 | Carried (one post-Save query, T3) | `t3-03` | Same session. |
| AC-7 | **Supported**: one ordinary Form-tab close; tab removed; unrelated `FX_HelloWorld01` preserved; no prompt | `t4-01`, `t4-02`, post-close snapshot | Close is observed UI-level; no database read. |
| AC-8 | **Supported (same session only)**: one reopen via Select Form (verified Name `IdoPropertyClasses`, Caption `Property Classes`); one exact-name query returned exactly one `FX_UMBase` row, all attributes identical to the T3 baseline, no error | `t4-03`, `t4-04`, snapshots | Observed same-session Web Client recovery only. Not cross-session, not cross-user, not database durability. |
| AC-9 | Cleanup inventory updated with the created class, four attributes, the FX_sUM reference, shared scope, factory ownership, no deletion, and the retained lock state. **Final reconciliation reserved for a separate review.** | `evidence/EXP-043/cleanup-inventory.md` | Reconciliation pending. |

### Operation counts (T4)

| Operation | Count |
| --- | --- |
| Save / New / Delete | **0 / 0 / 0** |
| Close (Property Classes form tab) | **1** |
| Reopen (toolbar Open + Select Form OK) | **1** |
| Exact-name queries | **1** |
| Clicks | **5** successful (close; Open; filter textbox; row Caption; OK) |
| Plain fills | **1** (`FX_UMBase` criteria) |
| Key-event typing (`slowly`) | **1** (`PropertyClass`) |
| Key presses | **4** (`Control+a`, `Backspace`, Tab, F4) |
| Explicit snapshots | **7** |
| `browser_find` calls | **2** |
| Screenshots | **4** (`t4-01` to `t4-04`) |
| Tab listings | **1** |
| Errors | **1** (own ref-typo: `f1269`, no action executed) |
| Recovery snapshots used in T4 | **0** (allowance consumed in T1; not reset) |
| Corrected visible inspections in T4 | **0** |
| Prompts or dialogs answered | **0** (none appeared) |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code | **0** |
| Check In / Undo Check Out / lifecycle control | **0** |
| Designer, preferences, Explorer shortcut, reload, login | **0** |

### Recovery accounting (EXP-043 cumulative)

- T1: one stale-ref error (`Ref f1e38 not found`), handled with the one permitted fresh snapshot. The allowance is consumed.
- T2: none. T3: none. T4: one own ref-typo error, not a stale ref; no recovery snapshot or inspection used.

### Repository confinement (T4, self-audit)

Files written by this worker in T4:
- `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (edited: status line; T4 section appended)
- `evidence/EXP-043/cleanup-inventory.md` (edited: T4 status line; same-session recovery section added)
- `evidence/EXP-043/t4-01-pre-close-saved-FX_UMBase-baseline.png`, `t4-02-post-close-property-classes-tab-removed-no-prompt.png`, `t4-03-reopened-property-classes-fip-mode-blank-criteria.png`, `t4-04-reopened-fip-exact-FX_UMBase-query-result.png` (created)

Not written: any other file. `tools/` not read.

### Final browser state (T4)

- One Mongoose browser tab, selected.
- Runtime: `Property Classes` is the **selected** tab (reopened; T4 post-reopen snapshot `tab [selected] [ref=f1e922]`; `t4-04` shows it highlighted), in Filter-in-Place mode with the criteria `FX_UMBase`, one data row `FX_UMBase`, status `1 of 1`. `FX_HelloWorld01` is present, unchanged (FX001/FX002, `(Object 1 of 2)` when last shown in `t4-02`), but not selected. *(Corrected in T5: the original T4 bullet said `FX_HelloWorld01` was selected.)*
- Save disabled. Check In and Undo Check Out enabled (lock indicators, not activated).
- No dialog, prompt, unsaved-change prompt or portal banner. Stable.
- The `Property Classes` Form is **open** (reopened). The brief does not ask for a second close.

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| The ordinary Form-tab close removed the tab with no prompt, and the unrelated Form remained | observed (one run) |
| The Select Form route reopened the Form in Filter-in-Place mode with a blank criteria row; no saved row loaded on open | observed (one run) |
| An exact-name FiP query after reopen returned one `FX_UMBase` row whose attributes match the T3 baseline | observed (same session) |
| The record shows as locked to the current user with Check In enabled, before and after close and reopen | observed (one run) |
| Database durability, cross-session persistence, other-user visibility | **unresolved** (not tested; out of scope) |
| Stored SQL casing of `nvarchar` | **unresolved** (not inspected) |
| Any procedure for this flow | **candidate_procedure** only; not replay_verified |

### Open items for the separate final review

1. Reconcile AC-1 to AC-9 against this record and the evidence (this section gives the per-check status).
2. Decide the lock state: `FX_UMBase` is still locked to the current user with Check In enabled. No check-in was performed.
3. Cleanup: `FX_UMBase` remains in place. Deletion and cleanup are out of scope for EXP-043.
4. Classification remains **observed only, NOT replay_verified**.

---

## T5 — Final evidence audit and acceptance reconciliation (documentation only; no browser calls)

- Date: 2026-10-10. Task T5 (task_message_id `30c56b15-cc73-4a78-8123-b0286bb00904`), worker session `a54ff2db-45f2-4d14-b10b-a71747e2986b`.
- Scope: no browser calls and no Mongoose changes. Reviewed this record, the cleanup inventory, the four controller audits (`evidence/EXP-043/harness-audit-T1.md` to `T4.md`), and the decisive screenshots. The Mongoose runtime was left as found in T4.
- Screenshots re-read in T5 (contents, not filenames): `t1-09` (Alpha control, 2 rows), `t1-10` (FX_UM* gate, placeholder only), `t1-12` (lowercase gate, placeholder only), `t2-04` (pre-Save record), `t3-02` (post-Save), `t3-03` (exact recovery row), `t4-02` (tab removed, no prompt), `t4-04` (reopened exact recovery). Earlier tasks' `t1-06`, `t1-11`, `t2-02`, `t2-03` and `t3-01` were read in their own tasks; their contents are as recorded.

### Acceptance matrix (AC-1 to AC-9)

| AC | Verdict | Observed fact | Evidence | Limits |
| --- | --- | --- | --- | --- |
| AC-1 | **Supported, with limit** | Identity bar reads `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no dialog; the Select Form row `Property Classes` / `IdoPropertyClasses` was identified before OK; `FX_HelloWorld01` preserved; controller audits show no Explorer, Designer or preference action. | `t1-01`, `t1-02`, `t1-03`; `harness-audit-T1` (no Explorer/Preference calls) | The **Site Developer role was never displayed** in the UI; only the configuration name is observed. Repository baseline is the session-start git snapshot from the harness context, not re-run (no git or shell in T5). |
| AC-2 | **Supported, with limit** | Positive control A: exact `AccessAs` → 1 row with its attributes. Positive control B: `Alpha*` → 2 rows (`AlphaKey`, `AlphaPrefix`, status `1 of 2`). Negative gates: `FX_UM*`, `FX_UMBase` and `fx_um*` each show a single starred blank placeholder and no data rows (status `1 of 1`). | `t1-06`, `t1-09` (controls); `t1-10` (FX_UM*, plus grid snapshot), `t1-11`, `t1-12` (negatives) | **Case-insensitivity is not positively controlled in this collection.** No lowercase positive control (for example `accessas`) was run, so the `fx_um*` zero result shows absence for that query but does not prove the filter is case-insensitive here. A mixed-case variant (for example `Fx_Um`) was not queried. The prior observation of lowercase recovery is in `experiments/EXP-040-...md` (lines 64, 67), which covered SQL Tables and IDOs only. The blank-criteria inventory is paged (200 shown, more exist), so absence rests on the server-side criteria, not on the list. |
| AC-3 | **Supported** | One `New` (controller T2 #2, `New toolbar button`). The new row (row 2) is starred with a blank Class Name; status `2 of 2`; row 1 `AccessAs` is unchecked and not selected. Labels identify the fields (no Find Value needed). | `t2-01`; T2 snapshot; `harness-audit-T2` | — |
| AC-4 | **Supported** | Pre-Save: Class Name `FX_UMBase`, Data Type `String`, Length `10`, Column Data Type `nvarchar` (combobox and grid cell), Label String ID `FX_sUM`; `AccessAs` row unchanged. Recorded displayed option text: **`nvarchar`** (lowercase, the single entry matching the `nvar` prefix after F2). | `t2-02`, `t2-03`, `t2-04`, `t3-01` | The NVARCHAR identity rests on the displayed label alone. Other SQL types were not compared. |
| AC-5 | **Supported, UI level** | Controller T3 has exactly one Save click (#4, toolbar `Save`), no retry. Settled UI (`t3-02`): Save disabled, the new row unstarred, the fields in read-only style, no validation, duplicate-name, or confirmation text. | `t3-02`; `harness-audit-T3` | No explicit success message exists in this UI. Success is inferred from the settled state. No database read. |
| AC-6 | **Supported, same session** | One exact-name Filter-in-Place query after Save. `t3-03` shows one `FX_UMBase` data row with Class Name `FX_UMBase`, Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM`, and Revision/Locked By/Access As; status `1 of 1`; no starred placeholder. | `t3-03`; T3 snapshot row `f1e1002` | Same Web Client session. Not a database read. Stored SQL casing unverified. |
| AC-7 | **Supported** | Controller T4 has one click on `Close Panel Property Classes` (#4). `t4-02` shows the Property Classes tab removed, `FX_HelloWorld01` remaining (FX001/FX002, `(Object 1 of 2)`), and no save-changes, discard or validation prompt. | `t4-02`; post-close snapshot; `harness-audit-T4` | Close is observed in the UI, not in the server state. |
| AC-8 | **Supported, same session only** | One reopen: toolbar Open (#8), Select Form filter cleared and re-typed (`Control+a`, `Backspace`, key-event `PropertyClass`), row activated, OK (#18). One exact-name query (`FX_UMBase`, Tab, F4; #23 to #25; #22 was the mistyped ref that did not execute). `t4-04` shows one `FX_UMBase` data row with all attributes matching the T3 baseline; no unexpected row; no error. | `t4-03`, `t4-04`; `harness-audit-T4` | Same-session Web Client recovery only. Not cross-session, cross-user, or database durability. |
| AC-9 | **Supported** (inventory); reconciliation now complete | `cleanup-inventory.md` lists exactly one created class `FX_UMBase`, its four attributes plus the `FX_sUM` reference, shared tenant-wide scope, factory ownership, no deletion, and the lock state. Counts reconciled in the table below. | `evidence/EXP-043/cleanup-inventory.md`; this section | Tenant scope is **the brief's stated intent**; the UI did not display a scope value. Cleanup responsibility is documented, not verified. |

**Overall:** all nine checks are supported at the level stated, with the limits shown. No check is unsupported. AC-2's case-insensitive coverage is the weakest point (see the limit above).

### Count reconciliation (worker record vs controller audit)

Controller audits are generated by the harness and record attempted tool calls and native results. They are not rendered-state proof. Where they differ, both are kept.

| Category | T1 worker / controller | T2 worker / controller | T3 worker / controller | T4 worker / controller | Total worker / controller |
| --- | --- | --- | --- | --- | --- |
| Clicks (incl. errors) | 13 / 12 | 5 / 5 | 2 / 2 | 5 / 5 | **25 / 24** |
| Key presses | 19 / 19 | 5 / 5 | 2 / 2 | 4 / 4 | **30 / 30** |
| Typing (`browser_type`) | 9 / 9 | 4 / 4 | 1 / 1 | 2 ok / 3 calls (1 error) | **16 ok / 17 calls** |
| Browser actions (clicks + keys + typing), calls (ok) | 41 (40 ok, 1 error) / 40 (39 ok, 1 error) | 14 (14 ok) / 14 (14 ok) | 5 (5 ok) / 5 (5 ok) | 12 (11 ok, 1 error) / 12 (11 ok, 1 error) | **72 calls (70 ok, 2 errors) / 71 calls (69 ok, 2 errors)** |
| Snapshots | 8 / 8 | 9 / 8 | 3 / 3 | 7 / 7 | **27 / 26** |
| `browser_find` | 13 / 13 | 8 / 8 | 2 / 2 | 2 / 2 | **25 / 25** |
| Screenshots | 13 / 13 | 4 / 4 | 3 / 3 | 4 / 4 | **24 / 24** |
| Tab listings | 2 / 2 | 0 / 0 | 1 / 1 | 1 / 1 | **4 / 4** |
| Tool-level errors | 1 (Ref) / 2 (Ref + Grep path) | 0 / 0 | 0 / 0 | 1 / 1 | **2 / 3** |
| New | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** |
| Explicit Save | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **1 / 1** |
| Ordinary Form close | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Reopen (Open + Select Form OK) | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Class deletion | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Refresh, check-in/out, cache unload, FormSync | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Prohibited-tool flags (controller) | — / 9 | — / 4 | — / 1 | — / 3 | **— / 17** (all `browser_type`) |

**Discrepancies, kept as recorded:**
1. **T1 clicks (worker 13, controller 12).** The worker counted 9 Filter-in-Place clicks. The controller records 8 (one of them is the stale-ref error). The controller count is the tool-call record, so T1 is 40 actions by the controller and 41 by the worker. The worker count is not corrected in place.
2. **T1 errors (worker 1, controller 2).** The worker's T1 error list omitted the controller's #32, a read-only `Grep` whose path did not exist. That was a wrong guessed filename for the EXP-040 record. It had no browser effect. It is added here.
3. **T2 snapshots (worker 9, controller 8).** The worker's count is one higher. The controller count is retained as the authoritative tool-call count.
4. **Prohibited-tool flags (17 total, all `browser_type`).** The brief authorizes plain fills and key-event typing. Every flag is one of those. No `evaluate` or `run-code` call was made, and the audits show no other flagged tool.
5. **Strings.** All four audits report `exact mismatches=0` and `key string (none)`, and list `FX_UMBase` and `FX_sUM` as the only exact values. Typed values match.

**Cumulative mutation counts (controller and worker agree):** New 1; explicit Save 1; ordinary Form close 1; reopen 1; class deletion 0; metadata lifecycle mutations (cache unload, FormSync, Refresh, check-in or check-out, source control, deployment) 0. The `Check In` and `Undo Check Out` buttons were displayed and never clicked.

### Error and recovery accounting

| # | Task / controller # | What happened | Recovery | Allowance effect |
| --- | --- | --- | --- | --- |
| E1 | T1 / #32 | `Grep` on a guessed EXP-040 filename returned `Path does not exist`. Read-only; no browser effect. | Re-ran the search with a different path (#33) | None (not a browser recovery) |
| E2 | T1 / #74 | `Ref f1e38 not found` on the FiP toolbar click, after the placeholder-state gate query | One fresh untargeted snapshot (#75), then the click on the new ref (#76) succeeded | **Consumed the single recovery snapshot** for EXP-043. No allowance remains. |
| E3 | T4 / #22 | `f1269` does not match any elements. My transcription error: I dropped `e1` from the ref `f1e1269`. | No recovery needed. Retried with `f1e1269` from the snapshot taken immediately before (#23); no browser action had run between them | None (no stale ref, no allowance used) |
| S1 | T1 / step 10 (controller #54 to #55) | **Sequencing deviation:** the `AccessA*` fill (#54) and the Tab (#55) were issued in one response. The controller records them as consecutive and both `ok`. It records order, not concurrency, so this deviation rests on the worker's own record. | No effect was observed. Later actions were sent one at a time. | None |

**Remaining recovery limitations:** the one permitted recovery snapshot was consumed in T1 and is not reset. Future work on this record has no recovery allowance left. The controller audits do not record concurrency, so S1 is worker-attested only.

### Repository confinement audit

- **Baseline:** the session-start git status from the harness context. Branch `claude-harness`; commits `790805f`, `4293f26`, `18063dd` before EXP-043. **Pre-existing modifications, not authored by EXP-043 and not touched:** `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. `tools/` was not read. T5 did not re-run git (no shell in this task), so the baseline is the session-start snapshot.
- **Worker-authored EXP-043 files:** `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (created T1; edited T2 to T5); `evidence/EXP-043/cleanup-inventory.md` (created T2; rewritten T3; edited T4 and T5); `evidence/EXP-043/t1-01` to `t1-13`, `t2-01` to `t2-04`, `t3-01` to `t3-03`, `t4-01` to `t4-04` (PNG, created).
- **Controller-generated (not worker-authored):** `evidence/EXP-043/harness-audit-T1.md` to `T4.md`.
- **Tool-generated (not worker-authored):** `evidence/playwright/` snapshot and console logs from the browser MCP, outside `evidence/EXP-043/`.
- **Writes or edits outside the EXP-043 record and evidence directory:** none (controller Write/Edit lists for T1 to T4 name only these two files).

### Final browser state (last observed in T4; not re-inspected in T5)

- One Mongoose tab, selected.
- `Property Classes` selected, in Filter-in-Place mode with criteria `FX_UMBase`, one data row `FX_UMBase`, status `1 of 1`. Save disabled. Check In and Undo Check Out enabled but not activated.
- `FX_HelloWorld01` tab present and unchanged (not selected).
- No dialog, unsaved-change prompt, or portal banner. The Form is **open** (the brief did not ask for a second close).

### Limits retained (not resolved by this audit)

1. **Site Developer role** not visibly confirmed (the identity bar shows the configuration name and user only).
2. **Independent database durability** untested. Persistence rests on same-session Web Client recovery.
3. **Cross-session and cross-user visibility** untested.
4. **Underlying SQL type casing** unverified. `nvarchar` is recorded as displayed (lowercase). It is not compared with the database.
5. **Case-insensitive coverage** of the absence gate for this collection not positively controlled (see AC-2).
6. **Save success** inferred from the settled UI. This Web Client shows no explicit success message.
7. **Lock state** (the record shows as checked out to the current user with Check In enabled) is observed in the UI only. Its server-side state was not verified and was not changed.
8. **Metadata cache unload** from the transcript was not performed, and the record was not seen by any downstream wizard or Form. Their visibility is untested.
9. **Tenant-wide scope** is the brief's stated intent. The UI did not display a scope value.

### Recommendation

- **All nine acceptance checks are supported** at the level stated, with the limits above. Recommended disposition: **accepted with limits**, the same style as EXP-042-R3. This is the operator's decision.
- If the operator wants AC-2 fully controlled, a separately authorized lowercase positive control (for example `accessas`, which should return `AccessAs`) would close the case-insensitivity gap. T5 did not run it.
- Classification: **observed only. NOT replay_verified** (one execution).

### Corrections made in T5

1. T4 final-state bullet: `FX_HelloWorld01` was called selected. The correct state is `Property Classes` selected. Corrected in place and marked.
2. Header status line: updated from "final review pending" to the T5 audit result.
3. Worker counts were **not** overwritten. The controller differences are recorded in the table above instead.

### Documentation changes (T5)

- `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (status line; T4 final-state correction; this T5 section)
- `evidence/EXP-043/cleanup-inventory.md` (T5 reconciliation section appended)

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| Positive controls (exact `AccessAs`, wildcard `Alpha*`) and the three absence gates returned the stated results | observed (one session) |
| One New, one explicit Save, one ordinary close, one reopen, zero deletion, zero lifecycle mutations (controller and worker agree) | observed (one run) |
| Same-session exact-name recovery returns one `FX_UMBase` row with baseline attributes | observed (same session) |
| Case-insensitive absence in the Property Classes collection | **unresolved** (no positive control in this collection) |
| Stored SQL casing of `nvarchar`; database durability; cross-session and cross-user visibility; Site Developer role; server-side lock state | **unresolved** |
| Any procedure for this flow | **candidate_procedure** only; not replay_verified |
