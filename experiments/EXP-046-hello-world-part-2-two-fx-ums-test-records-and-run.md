# EXP-046 — Hello World Part 2: Two FX_UMs Test Records and Runtime Persistence

**Current status (T10, cycle 11, final evidence audit, documentation only): all nine acceptance checks are SUPPORTED at the same-session runtime UI level, with the limits stated in the T10 section. Classification: OBSERVED ONLY, NOT replay_verified. No database-durability, cross-session or replay claim is made. Ready for coordinator acceptance. The reopened FX_UMs runtime was left unchanged. No browser call was made in T10.**

Earlier status (T9, cycle 10): ONE fresh empty-criteria query (Filter in Place, then one F4) on the reopened FX_UMs runtime. Criteria were blank. The settled result shows exactly two populated rows, `DZ` / `Dozen` and `EA` / `Each`, distinct keys, no blank placeholder, no other row, Get More Rows disabled, no restrictive filter indicator, Save disabled, status `Description (Object 1 of 2)`. AC-8 is SUPPORTED at the same-session runtime UI level only. Not a database read, not cross-session, not replay_verified. AC-9 final audit remains. See the T9 section.**

Earlier status (T8, cycle 9): the FX_UMs runtime Form was REOPENED once through the native toolbar Open, one Select Form match (`FX_UMs` / `FX_UMs`), and one OK. The reopened tab `FX_UMs` shows identity, the Unit of Measure and Description captions, ONE starred blank placeholder row, blank inputs, status `Unit of Measure (Object 1 of 1)`, and Save disabled. The two saved rows were NOT loaded on open. No Refresh, F4, Filter-in-Place or query was run. AC-7 is now supported at UI level (close and one reopen). AC-8 remains pending: it needs a separately authorized fresh empty-criteria query. See the T8 section.**

Earlier status (T7, cycle 8): the FX_UMs runtime Form was CLOSED once through its own `Close Panel FX_UMs` tab control. No save, discard, authentication, validation or other prompt appeared. The FX_UMs tab is no longer in the tab list. Mongoose activated the pre-existing `Property Classes` tab, which was not touched. The close portion of AC-7 is supported at UI level. The reopen is NOT yet done and needs a separate authorization. AC-7 remains pending. See the T7 section.**

Earlier status (T6, cycle 7): ONE ordinary toolbar Save clicked (no retry) after all preconditions held. Settled UI: new-row stars gone, Save DISABLED, no prompt or message, status `Unit of Measure (Object 2 of 2)`; rows show keys EA and DZ, with descriptions in the accessibility tree. This is UI-level evidence of Save processing only. It is NOT a database read and NOT cross-session persistence. AC-6 supported at UI level. The runtime is left open for a separately authorized lifecycle task (close, reopen, recovery). See the T6 section.**

Earlier status (T5, cycle 6): BOTH authorized records STAGED, UNSAVED. Row 1 EA / Each; row 2 DZ / Dozen; two starred rows; status `Unit of Measure (Object 2 of 2)`; Save enabled; Save NOT invoked; no prompt. AC-5 supported at UI level (accessibility tree for both rows; the screenshot clips the Description column). The runtime is left open with both rows staged for a separately authorized single toolbar Save. See the T5 section.**

Earlier status (T4, cycle 5): ONE native toolbar New clicked after the EA / Each precondition was verified. Runtime now shows two starred rows: row 1 EA / Each (staged, unsaved) and row 2 blank and current; status `Unit of Measure (Object 2 of 2)`; Save enabled; no prompt. No Save, no DZ / Dozen, no Refresh, no F4, no close or reopen. Proceeding to second-record entry is NOT yet authorized; the coordinator must review T4. See the T4 section.**

Earlier status (T3, cycle 3): FIRST record EA / Each STAGED in the placeholder row, UNSAVED (Save enabled, not invoked). AC-4 supported at UI level.

Earlier status (T2, read-only empty-criteria verification, cycle 1): ONE Filter-in-Place F4 empty-criteria query observed. The grid, star, blank inputs, Save state and status text match the accepted R3 count rule, with the caption prefix still present. Whole-collection emptiness is supported by observation but NOT declared; AC-3 is NOT declared passed. Operator review of the prefix and of the F4 mechanism is required before any entry.** No entry, no Save, no close or reopen, no Designer action, no Refresh in T2 (see "T2" section below).

Earlier status (T1, read-only preflight, cycle 0): PRECONDITIONS OBSERVED; ENTRY GATE NOT YET DECLARED PASSED. Operator decision required before any entry. No record was entered, no New, no Save, no close or reopen, no Designer action. One empty-criteria toolbar Refresh was run as the gate query. Two limits stop the worker from declaring the zero-record gate passed on its own authority (see "Entry-gate determination"): the status text carries a caption prefix, and the query criteria cannot be read from the UI.

Run: `R-20261010-235906-HC6Q` · experiment EXP-046 · cycle 0 · task T1
Worker session: `1d00d19a-0f56-49a1-a7af-2718f21b469a` · task_message_id `a1f5d197-9ab5-4ac1-aa43-f14dfd72c4f9`
Date: 2026-10-10. Mode: LEARNING MODE. FX_-only scope (AGENTS.md, 2026-10-10). The Form stays in User editing scope.
Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; signed-in user `anton.ramos@3mworks.com.ph` (identity bar, not a credential).
Evidence directory: `evidence/EXP-046/`.
Predecessors: `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md` (accepted with limits: empty-criteria Refresh gate, count rule, Save and reopen method); `experiments/EXP-045-hello-world-part-2-fx-ums-multi-view-form-and-capt.md` (FX_UMs User-scope Form created by one Finish, captions `FX_sUM` / `FX_sDescription` resolved to `Unit of Measure` / `Description`, bindings `object.FX_UM` / `object.FX_Description`, accepted with limitations).

## Scope of T1

Read-only preflight plus the one permitted empty-criteria query. Not in T1: entry of EA or DZ, insertion actions, toolbar Save, Form close or reopen, Find Value in Collection, Designer, Filter-in-Place, resource or metadata change.

## Sources reviewed

- EXP-042-R3 (accepted with limits): gate = one empty-criteria query (toolbar Refresh) with the status-bar count rule (add mode counts the uncommitted placeholder). Observed there: the status bar needed one operator browser refresh to be displayed; after Save the status read `(Object 2 of 2)`, after Refresh `(Object 1 of 2)`; the reopen opens in add mode and rows load only after Refresh.
- EXP-045 (accepted with limits): T14 Designer read after reopen (bindings `object.FX_UM` / `object.FX_Description`, FX_UM above FX_Description); T15 runtime check (captions `Unit of Measure` / `Description`, empty fields, Save disabled, no record entered).
- `AGENTS.md` and the brief text in the task message. The `tools/` directory was not read.
- The experiment record file for EXP-046 did not exist in the repository at the start of T1; this record was created in T1.

## Operations (T1, in order)

| # | Operation | Result | Evidence |
|---|---|---|---|
| 1 | `browser_tabs` list | Tab 0 `Mongoose` (Web Client, current); tab 1 Designer. | tool output |
| 2 | Read EXP-042-R3 and EXP-045 records (read-only) | Method and prior evidence recorded above. | — |
| 3 | Fresh untargeted snapshot of tab 0 | Mongoose tab selected; tab panel `FX_UMs` selected (`f1e108`, `f1e111`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no portal banner; no dialog; toolbar `Save` disabled (`f1e28`); status textbox `Unit of Measure (Object 1 of 1)` (`f1e175`). | snapshot (tool-generated) |
| 4 | Screenshot, pre-query | Shows the state described under AC-1 to AC-3 below. | `evidence/EXP-046/T1-preflight-initial-state.png` |
| 5 | ONE click on toolbar `Refresh` (`f1e35`, label verified `Refresh`; ref taken from the snapshot in step 3) | Completed without error or prompt. Tooltip `Refresh` displayed. | tool output |
| 6 | Fresh untargeted snapshot, after the Refresh | Same state as step 3: one row `gridcell "1"` (`f1e183`); both inputs blank (`f1e160` Unit of Measure, `f1e169` Description); Save disabled; status textbox `Unit of Measure (Object 1 of 1)` (`f1e175`). No dialog. | snapshot (tool-generated) |
| 7 | Screenshot, post-Refresh (gate query state) | Same as step 4; focus no longer on the Unit of Measure input. | `evidence/EXP-046/T1-gate-after-one-refresh-empty-criteria.png` |

No Refresh retry. No Find dialog, Filter-in-Place, F4, Get More Rows, typing, New, Save, Delete, Form close, reopen, Designer tab selection, browser reload, navigation, JavaScript, evaluate or run-code. The only browser mutation-class action was the one Refresh (a query, not a data change).

## Observations (what was seen)

**Target identity (AC-1).** The runtime Form tab is `FX_UMs` (tab heading, selected) and the tab panel is named `FX_UMs`. The identity bar reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The Form has two captioned inputs. No sign-in, configuration, authentication, unsaved-change or Save/discard prompt was present. The Web Client is authenticated. Who opened this runtime tab, and when, is not established by the worker. It was present at the first snapshot of T1 and was not opened by the worker.

**Field mapping (AC-2).** The runtime captions are `Unit of Measure` (grid column header `* Unit of Measure`, with a red required asterisk; field label `Unit of Measure:` with a red `*`) and `Description` (grid column header `Description`; field label `Description:`). These match the captions recorded for the EXP-045 T15 runtime check. The required marker on Unit of Measure is consistent with the IDO property `FX_UM` (Required checked, EXP-045 T1) and with the Designer binding `object.FX_UM` (EXP-045 T14). `Description` (no marker) is consistent with `FX_Description` (not Required, EXP-045 T1) and with `object.FX_Description`. The Find Value in Collection route was not used, because the captions and the required marker agree with the prior accepted evidence. The runtime-to-binding link is therefore inferred from the captions, the required marker and the prior Designer evidence, not observed directly at runtime. No field was selected for entry.

**Zero-record gate (AC-3).** After one toolbar Refresh (the accepted empty-criteria query method):
- Grid: exactly one row, `gridcell "1"`, with the blue new-row star in the screenshot (star visible at the row-header position; the accessibility tree shows only `gridcell "1"`).
- Inputs: both blank.
- Status bar: `Unit of Measure (Object 1 of 1)`. The count token `(Object 1 of 1)` matches. The text also carries the caption prefix `Unit of Measure`, which the EXP-042-R3 accepted reading did not describe; the R3 status was recorded as `(Object 1 of 1)`. The prefix was present before the Refresh and after it, and it persists when focus has left the input.
- Save: disabled. No pending change.
- No filter indicator is visible in the Form, and no unsaved change is indicated.

## Entry-gate determination (for the operator)

Conditions of the accepted EXP-042-R3 count rule, as observed after the one Refresh:

| Condition | Observed | Met? |
|---|---|---|
| Grid shows exactly one row | One row `1` | Yes |
| That row carries the blue new-row star | Star in the screenshot | Yes (screenshot read; not in the accessibility tree) |
| Both inputs blank | Blank | Yes |
| Status bar reads exactly `(Object 1 of 1)` | `Unit of Measure (Object 1 of 1)` | **Partly.** Count token matches; a caption prefix is present, which the literal "exactly" does not describe. |

Two limits prevent the worker from declaring the zero-record gate passed:
1. **Caption prefix in the status text.** The count is 1, which is the placeholder only, so the prefix does not change the count. Whether the prefix is acceptable under "reads exactly" is an operator decision.
2. **Query criteria not readable.** The Refresh was the only query run. The worker cannot read from the UI whether the Form held retained criteria before the Refresh. A zero-match filtered result and a true empty collection would look the same here. Inspecting criteria would need Filter-in-Place, which this task does not authorize, so it was not done. The Form's history before T1 is not established. The EXP-045 T15 record shows the Form opened without criteria in that session, but that is not proof for this runtime instance.

Recommended disposition: the operator reviews `evidence/EXP-046/T1-gate-after-one-refresh-empty-criteria.png` and this record. If the operator accepts the caption prefix and the no-retained-criteria assumption (or authorizes one further empty-criteria check in a separate task), the separate entry task may proceed. The worker has not entered any record.

## Acceptance checks (T1 status)

| AC | T1 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | **Observed** | Snapshot (step 3), `evidence/EXP-046/T1-preflight-initial-state.png` | FX_UMs Form definition is the User-scope version established in EXP-045 (cited, not re-read in T1). Who opened the runtime tab is not established. |
| AC-2 | **Supported** (captions, required marker, prior Designer evidence) | Both screenshots; EXP-045 T1 and T14 | Runtime link to binding inferred, not observed directly. Find Value in Collection not run (not needed). |
| AC-3 | **Observed with two limits; operator decision required** | Step 6 snapshot; `T1-gate-after-one-refresh-empty-criteria.png` | Caption prefix in status text; query criteria not readable. |
| AC-4 to AC-9 | **Not evaluated** (no entry, Save, close, reopen or recovery in T1) | — | — |

## Evidence files (T1)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T1-preflight-initial-state.png` | Pre-query: Mongoose identity bar; tab `FX_UMs` selected; one starred row `1`; inputs `Unit of Measure*` and `Description` blank; Unit of Measure input focused; Save greyed; status `Unit of Measure (Object 1 of 1)`. | Query criteria; whether this is a settled query result (taken before the Refresh); database content. |
| `evidence/EXP-046/T1-gate-after-one-refresh-empty-criteria.png` | Post-Refresh: same identity; one starred row; inputs blank; no focus ring on the inputs; tooltip `Refresh` (fading hover text); Save greyed; status `Unit of Measure (Object 1 of 1)`. | Criteria state before the Refresh; database content; that no filter was retained. |

Snapshot files `evidence\playwright\page-2026-10-10T15-59-37-165Z.yml` (tool-generated, not worker-authored) hold the post-Refresh accessibility tree.

## Repository changes (T1)

- Written: `experiments/EXP-046-hello-world-part-2-two-fx-ums-test-records-and-run.md` (this record, created).
- Written: `evidence/EXP-046/T1-preflight-initial-state.png`, `evidence/EXP-046/T1-gate-after-one-refresh-empty-criteria.png`.
- Not written: any other repository file. No `tools/`, AGENTS.md, recipe or other experiment record was edited.

## Cleanup inventory (T1)

- **Created in Mongoose:** none.
- **Changed in Mongoose:** none. One empty-criteria Refresh (query only).
- **Records:** none entered, edited or deleted. Preexisting `FX_UMs` rows: none observed (the grid shows only the placeholder).
- **Pending changes at end:** none (Save disabled).
- **Leftover runtime tabs (not touched):** `FX_HelloWorld01` (EXP-042-R3 runtime, open), `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns` (link icon). Left as found.

## Final browser state (T1)

- Tab 0 `Mongoose` (Web Client) selected; runtime tab `FX_UMs` selected and open; placeholder row only; inputs blank; Save disabled; status `Unit of Measure (Object 1 of 1)`.
- No dialog, no browser-native prompt, no unsaved-change prompt, no portal banner.
- Tab 1 Designer (`Infor Mongoose Application Development Framework`) untouched.
- The Refresh tooltip is still displayed on hover; this is not a dialog.

## Knowledge state (T1)

| Finding | State |
|---|---|
| FX_UMs runtime Form open with captions `Unit of Measure` (required) and `Description`, Save disabled, status bar displayed | observed (one run) |
| One toolbar Refresh (empty criteria) returns one starred placeholder row, blank inputs | observed (one run) |
| Status text includes the caption prefix `Unit of Measure` before `(Object 1 of 1)` | observed (one run); its meaning is unresolved |
| The query criteria before the Refresh were empty | **unresolved** (not readable from the UI) |
| Runtime captions map Unit of Measure → FX_UM and Description → FX_Description | supported by captions and prior Designer evidence; runtime link inferred |
| Zero-record gate for the whole primary collection | **unresolved** — operator decision required (see Entry-gate determination) |
| Any database-level or cross-session persistence | not in scope; not claimed |

## Open questions / blockers

1. **Operator decision on the entry gate:** accept or reject the caption prefix in the status text under "reads exactly `(Object 1 of 1)`", and accept or reject the no-retained-criteria assumption (or authorize one further empty-criteria check).
2. **Entry task:** not authorized by T1. The runtime is open, clean and left available for a separately reviewed entry task.
3. Who opened the `FX_UMs` runtime tab before T1, and when, is not established.
4. Classification of T1: **observed only; not replay_verified.** No database-durability, cross-session or replay claim is made.

---

## T2 — Read-only empty-criteria verification with one Filter-in-Place F4 (cycle 1)

Task: T2, run `R-20261010-235906-HC6Q`, cycle 1, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `c7c79fe8-5fc4-458d-ac21-4456b4e42d47`.
Scope (bounded instruction): one read-only empty-criteria verification of the FX_UMs primary collection. No entry, no Save, no close or reopen, no Designer, no second query, no session recovery.

### Operations (T2, in order)

| # | Operation | Observed | Evidence |
|---|---|---|---|
| 1 | Fresh untargeted snapshot of tab 0 | FX_UMs tab selected (`f1e108`), tab panel `FX_UMs` (`f1e111`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; one row `gridcell "1"` (`f1e127`); both inputs blank (`f1e160`, `f1e169`); Save disabled; status `Unit of Measure (Object 1 of 1)` (`f1e175`); no dialog, no prompt, no portal banner. | snapshot (tool-generated) |
| 2 | ONE click on toolbar `Filter in Place` (`f1e38`, label verified `FiP`) | Form entered Filter-in-Place mode: status text changed to `Filter in Place` (`f1e175`); toolbar New, Delete, Refresh, Export To Excel disabled; Save disabled; grid header `Unit of Measure` (asterisk gone); the row `1` lost its star; both inputs still blank. Tab `FX_UMs` shows a filter-mode icon. Tooltip `Filter in Place`. No dialog. | snapshot `evidence\playwright\page-2026-10-10T16-02-04-531Z.yml` (tool-generated); `T2-fip-criteria-state-before-f4.png` |
| 3 | Criteria state read before any query (screenshot and snapshot) | Both criteria inputs blank. The FX_UMs tab showed **no** filter icon in the T1 screenshot (before FiP was entered), so no retained restrictive filter was indicated before FiP. The filter icon appeared only after FiP was entered. | `T2-fip-criteria-state-before-f4.png`; T1 screenshot `T1-preflight-initial-state.png` |
| 4 | ONE F4 key press (`browser_press_key` `F4`), no other key | Form left Filter-in-Place mode: tab filter icon removed; status text returned to `Unit of Measure (Object 1 of 1)`; toolbar New, Delete, Refresh, Export To Excel enabled again; row `1` now starred (blue star in the screenshot); both inputs blank; Save disabled; `Get More Rows` disabled. No dialog. | snapshot (`f1e196`–`f1e199`); `T2-after-one-f4-empty-criteria-query.png` |
| 5 | Fresh untargeted snapshot after F4 | Same as operation 4 in the accessibility tree. Grid `gridcell "1"` (`f1e199`); inputs `f1e160`, `f1e169` blank; status textbox `f1e175` `Unit of Measure (Object 1 of 1)`; FiP button shows `[active]` (`f1e39`). | snapshot (tool output) |
| 6 | Screenshot after F4 | Starred row 1; blank inputs; no filter icon on the FX_UMs tab; Save greyed; status `Unit of Measure (Object 1 of 1)`. | `T2-after-one-f4-empty-criteria-query.png` (read) |

Not done in T2: no Refresh, no second F4, no criteria typed, no entry, no Save, no Find dialog, no close or reopen, no Designer tab, no JavaScript, evaluate or run-code, no reload or navigation.

### Gate evaluation (accepted EXP-042-R3 count rule)

| Condition | Observed after F4 | Met? |
|---|---|---|
| Grid shows exactly one row | One row `1` | Yes |
| Row carries the blue new-row star | Blue star in the screenshot (accessibility tree shows only `gridcell "1"`) | Yes (screenshot read) |
| Both inputs blank | Blank | Yes |
| Status bar reads exactly `(Object 1 of 1)` | `Unit of Measure (Object 1 of 1)` | **Count token matches; literal prefix `Unit of Measure ` precedes it. Operator review required.** |

### Whole-collection emptiness (what the evidence does and does not show)

**Observed:**
- Before F4, the criteria inputs were visibly blank and no retained filter indicator was present on the tab (T1 screenshot).
- F4 in Filter-in-Place mode left the mode, and the grid showed only a starred placeholder row with blank inputs.
- `Get More Rows` is disabled after the query, and no unstarred row appeared.
- The status-bar count token is `(Object 1 of 1)`, which in add mode counts only the placeholder.

**Consistent with, but not directly observed:**
- That the F4 executed a query. The mode exit plus the starred placeholder suggests a settled query result, but the UI does not show a separate query-completion indicator, and the same placeholder appears in T1 before any query.
- That the result is zero records for the whole primary collection. The worker cannot see the database, the Mongoose row limit, or any criterion not shown in the two bound fields.

**Interpretation:** the evidence supports an observed empty result for the FX_UMs primary collection, unfiltered as displayed. It does not, by itself, establish whole-collection emptiness with the reliability AC-3 requires. The literal status prefix also remains open, and the same caption prefix appeared in T1. The worker does not declare AC-3 passed.

### Acceptance checks (T2 status)

| AC | T2 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed: target identity, authenticated session, no prompt | Operation 1; `T1-preflight-initial-state.png` | Form definition from EXP-045 (cited). |
| AC-2 | Not re-run; carried from T1 | T1 captions and Designer evidence | Runtime link inferred. |
| AC-3 | **Not declared passed.** Observed empty result under the R3 rule, with the prefix and F4-mechanism limits | Operations 3 to 6; `T2-fip-criteria-state-before-f4.png`, `T2-after-one-f4-empty-criteria-query.png` | Prefix requires operator decision; query execution inferred; no database read. |
| AC-4 to AC-9 | Not evaluated (no entry, Save, close, reopen or recovery) | — | — |

### Evidence files (T2)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T2-fip-criteria-state-before-f4.png` | FiP mode: status `Filter in Place`; inputs blank; no star on row `1`; FX_UMs tab filter icon; toolbar New, Delete, Refresh disabled; Save greyed. | That no hidden criterion exists; that F4 will return zero rows. |
| `evidence/EXP-046/T2-after-one-f4-empty-criteria-query.png` | After one F4: starred row `1`; blank inputs; no tab filter icon; status `Unit of Measure (Object 1 of 1)`; Save greyed. | Query completion as a separate event; whole-collection count; database content; the literal prefix meaning. |

### Operation counts (T2)

| Operation | Count |
|---|---|
| Browser clicks | 1 (toolbar FiP) |
| F4 key presses | 1 |
| Refresh / New / Save / Delete / Find dialog / Filter-in-Place criteria typing | 0 / 0 / 0 / 0 / 0 / 0 |
| Accessibility snapshots | 3 (pre-FiP, post-FiP, post-F4) |
| Screenshots (worker-saved PNG) | 2 |
| Dialogs or prompts answered | 0 |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

### Browser state at end of T2

- Tab 0 `Mongoose` (Web Client) selected; runtime tab `FX_UMs` selected and open; one starred placeholder row; both inputs blank; Save disabled; status `Unit of Measure (Object 1 of 1)`.
- No dialog, no browser-native prompt, no unsaved-change prompt, no portal banner.
- Tab 1 Designer untouched.

### Repository changes (T2)

- Written: this record (status header updated; T2 section appended).
- Written: `evidence/EXP-046/T2-fip-criteria-state-before-f4.png`, `evidence/EXP-046/T2-after-one-f4-empty-criteria-query.png`.
- Not written: any other repository file.

### Blocker assessment (T2)

- **No browser blocker.** The FiP, F4, snapshot and screenshot steps all completed once, with no error, timeout, or prompt.
- **Gate not closed.** AC-3 needs operator review of two items: (a) the literal `Unit of Measure ` caption prefix in the status text, which the R3 rule's "reads exactly" does not describe; (b) whether an F4 with blank visible criteria is accepted as the query that establishes whole-collection emptiness, given that the mode exit is the only visible sign of the query. The worker has not entered any record.
- **Next permitted action (operator-authorized, separate task):** either accept the observed result and authorize the entry task, or authorize one further empty-criteria check. T2 does not authorize entry.

---

## T3 — First authorized record staged: EA / Each (cycle 3, no Save)

Task: T3, run `R-20261010-235906-HC6Q`, cycle 3, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `93e52dfb-f74d-40c9-84e6-1dec4ddfc18a`.
Scope (bounded instruction): enter and visually verify ONLY EA / Each in the existing placeholder row. No DZ or Dozen, no Save, no New, no close or reopen, no query, no Designer.
Operator clarification applied: the status-bar caption prefix (for example `Unit of Measure (Object 1 of 1)` or `Description (Object 1 of 1)`) is expected and does not affect the gate; the count token in parentheses is what must match.

### Pre-mutation verification (fresh snapshot and screenshot)

| Check | Observed | Evidence |
|---|---|---|
| Runtime Form | Tab `FX_UMs` selected (`f1e108`), tab panel `FX_UMs` (`f1e111`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | snapshot; `T3-pre-entry-placeholder-blank.png` |
| Placeholder | One row `gridcell "1"` (`f1e127`) with blue star in the screenshot | same |
| Inputs | Unit of Measure `f1e160` blank; Description `f1e169` blank | same |
| Save | Disabled (`f1e28`) | same |
| Status | `Unit of Measure (Object 1 of 1)` (`f1e175`) | same |
| Prompts | None | same |

No Refresh and no F4 were repeated, as instructed. The T2 empty-criteria result is the carried gate.

### Operations (T3, in order)

| # | Operation | Observed | Evidence |
|---|---|---|---|
| 1 | Fresh snapshot and screenshot (pre-mutation) | State as in the table above | `T3-pre-entry-placeholder-blank.png` |
| 2 | Plain fill (`browser_type`, no `slowly`) into Unit of Measure (`f1e160`) with `EA` | Input shows `EA` and is `[active]`. Save still disabled. Grid cell not yet updated (empty). Status still `Unit of Measure (Object 1 of 1)`. | snapshot; `T3-after-EA-typed-before-tab.png` |
| 3 | ONE click on Description input (`f1e169`) to move focus | Focus moved to Description. The grid row committed the first value: row cell `gridcell "EA"` (`f1e184`). Save became **enabled**. Status changed to `Description (Object 1 of 1)`. No new row, no prompt, no alert. | fresh snapshot (pre-entry snapshot ref list) |
| 4 | Plain fill (`browser_type`, no `slowly`) into Description (`f1e169`) with `Each` | Input shows `Each` and is `[active]`. Grid Description cell still empty (`f1e149`), i.e. not yet committed to the row. | snapshot; `T3-after-EA-and-Each-typed-before-blur.png` |
| 5 | ONE click on Unit of Measure input (`f1e160`) to move focus within the same record | Row cell `gridcell "Each"` (`f1e186`) now present; row `gridcell "EA"` (`f1e184`). Input `EA` is focused and selected. Status `Unit of Measure (Object 1 of 1)`. | snapshot; `T3-first-record-EA-Each-staged-before-save.png` |

Not done in T3: no Save, no New, no DZ or Dozen, no second record, no Refresh, no F4, no close, no reopen, no Find dialog, no Designer, no keyboard commit (no Tab, no Enter), no JavaScript, evaluate or run-code, no reload or navigation.

### Observed result (after entry, before Save)

| Item | Observed |
|---|---|
| Row count | One row `1` (the same placeholder). Status count token `(Object 1 of 1)`. No third record. |
| Row indicator | Blue star (screenshot `T3-first-record-EA-Each-staged-before-save.png`). Accessibility tree shows the row as `row` with no star text. |
| Unit of Measure cell | `EA` (accessibility `gridcell "EA"`; screenshot shows `EA` in the first column) |
| Description cell | `Each` (accessibility `gridcell "Each"`). **The Description column is clipped out of the screenshot viewport**, so `Each` in the row is confirmed by the accessibility tree only. |
| Unit of Measure input | `EA` |
| Description input | `Each` |
| Save | **Enabled** (toolbar Save `f1e28` has no `disabled`). Enabled because the record now holds an uncommitted change. **Not invoked.** |
| Prompts, alerts, validation text | None observed. |
| Unrelated fields | None selected or changed. Only the two authorized inputs were typed into. |

### Acceptance checks (T3 status)

| AC | T3 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed before mutation: authenticated runtime FX_UMs, identity bar, one starred placeholder, no prompt | snapshot; `T3-pre-entry-placeholder-blank.png` | FX_UMs User-scope definition: EXP-045 (cited). |
| AC-2 | Field mapping carried; both typed values landed in the captioned fields Unit of Measure and Description. No unrelated field selected | Snapshot labels; the `*` on Unit of Measure; grid header `* Unit of Measure` | Runtime binding inferred from captions and prior EXP-045 Designer evidence. Find Value in Collection not used. |
| AC-3 | Carried from T2 (not repeated, per instruction). The count token stayed `(Object 1 of 1)` through entry | T2 records; this run's status readings | Still subject to the operator's T2 review of the F4 mechanism. |
| AC-4 | **Supported (UI level).** A newly entered record with FX_UM `EA` and FX_Description `Each` is visible in the runtime collection before Save | `gridcell "EA"` (`f1e184`) and `gridcell "Each"` (`f1e186`) in the same row; inputs `EA` / `Each`; `T3-first-record-EA-Each-staged-before-save.png` shows `EA` in the grid and the Description input | `Each` in the grid is from the accessibility tree; the Description column is not visible in the screenshot. Not a database read. |
| AC-5 to AC-9 | Not evaluated (second record, Save, close, reopen, recovery and audit come later) | — | — |

### Uncommitted state (as far as the native UI can establish)

- The row carries the star and the status count stays `(Object 1 of 1)`: the placeholder has not become a second persisted row.
- Save is enabled, which indicates a pending change not yet saved. No Save was invoked, so the row has not been persisted through the toolbar.
- The native UI cannot establish whether the row is uncommitted at the database level. This is a UI-state inference only.

### Evidence files (T3)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T3-pre-entry-placeholder-blank.png` | Before entry: identity bar, FX_UMs tab, one starred row, blank inputs, Save greyed, status `Unit of Measure (Object 1 of 1)`. | Any entry; the database state. |
| `evidence/EXP-046/T3-after-EA-typed-before-tab.png` | `EA` typed in Unit of Measure; Description blank; Save greyed; grid cell not yet updated; status `Unit of Measure (Object 1 of 1)`. | Commit of `EA` to the row (not yet committed at this point). |
| `evidence/EXP-046/T3-after-EA-and-Each-typed-before-blur.png` | (Written after `Each` typed, before the focus move.) `Each` in Description input; grid Description cell not yet committed. | The committed row state. |
| `evidence/EXP-046/T3-first-record-EA-Each-staged-before-save.png` | After focus move: starred row with `EA` in the first column; inputs `EA` (selected) and `Each`; Save enabled; status `Unit of Measure (Object 1 of 1)`. | Description column in the grid (clipped); persistence; the database state. |

Snapshot files (tool-generated, not worker-authored): `evidence\playwright\page-2026-10-10T16-05-47-398Z.yml` (after the EA-to-Description focus move, showing `gridcell "EA"`), `evidence\playwright\page-2026-10-10T16-05-58-049Z.yml` (after the Each-to-Unit focus move, showing `gridcell "EA"` and `gridcell "Each"`).

### Operation counts (T3)

| Operation | Count |
|---|---|
| Plain fills (`browser_type`, no `slowly`) | 2 (`EA`, `Each`) |
| Focus-move clicks within the record | 2 (Description, then Unit of Measure) |
| Save clicks | **0** |
| New / DZ / Dozen / second record | **0 / 0 / 0** |
| Refresh / F4 / Filter-in-Place | **0 / 0 / 0** |
| Close / reopen / Designer / Find dialog | **0 / 0 / 0 / 0** |
| Accessibility snapshots | 5 (pre-entry, after EA typed, after focus move 1, after Each typed, after focus move 2) |
| Screenshots (worker-saved PNG) | 4 |
| Dialogs or prompts answered | 0 |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

### Browser state at end of T3

- Tab 0 `Mongoose` (Web Client) selected; runtime tab `FX_UMs` selected and open.
- One row, starred; Unit of Measure `EA`, Description `Each` (Unit of Measure input focused and selected); Save **enabled** (pending, not saved); status `Unit of Measure (Object 1 of 1)`.
- No dialog, no browser-native prompt, no portal banner.
- Designer tab untouched.
- The FX_UMs runtime is in a pending, unsaved state. The next step (Save, second record, reopen) is not authorized by T3.

### Repository changes (T3)

- Written: this record (T3 section appended).
- Written: `evidence/EXP-046/T3-pre-entry-placeholder-blank.png`, `evidence/EXP-046/T3-after-EA-typed-before-tab.png`, `evidence/EXP-046/T3-after-EA-and-Each-typed-before-blur.png`, `evidence/EXP-046/T3-first-record-EA-Each-staged-before-save.png`.
- Not written: any other repository file.

### Blocker assessment (T3)

- **No blocker.** Each step completed once without error, timeout, `Ref not found`, validation message, or unexpected prompt.
- The record is staged and unsaved. The grid's Description column is clipped in the screenshot; the `Each` cell is confirmed only by the accessibility tree. The operator may want a wider view captured in a later task if visual proof of that cell is required.
- Next permitted action (operator-authorized, separate task): review the staged first record and authorize the second record (DZ / Dozen). T3 does not authorize Save or the second record.

---

## T4 — One native New after EA / Each (cycle 5, no Save)

Task: T4, run `R-20261010-235906-HC6Q`, cycle 5, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `f88f59bb-6641-4436-9ed6-1b1858ea632c`.
Scope (bounded instruction): test exactly ONE toolbar New, then stop for coordinator review. No DZ / Dozen, no Save, no Refresh, no F4, no close or reopen, no navigation between records.

### Precondition (fresh snapshot and screenshot, before New)

| Check | Observed | Evidence |
|---|---|---|
| Authenticated runtime Form | Tab `FX_UMs` selected (`f1e110`), tab panel `FX_UMs` (`f1e113`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | snapshot; `T4-pre-new-state-EA-Each-save-enabled.png` |
| Row 1 values | `gridcell "EA"` (`f1e149`), `gridcell "Each"` (`f1e151`) | snapshot |
| Row 1 indicator | Blue star in the screenshot | `T4-pre-new-state-EA-Each-save-enabled.png` |
| Save | Enabled (`f1e28`, no `disabled`); toolbar Save icon coloured in the screenshot | snapshot; screenshot |
| Status | `Unit of Measure (Object 1 of 1)` (`f1e177`) | snapshot |
| Prompts | None | snapshot; screenshot |

Precondition met. One New was then clicked.

### Operation (one New)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | ONE click on toolbar `New` (`f1e31`, label verified `New`) | Completed without error. Tooltip `New` shown. No prompt, no alert. | tool output |
| 2 | Fresh snapshot (no action) and screenshot `T4-after-one-new-click.png` | See the observed state below. | snapshot (`evidence\playwright\page-2026-10-10T16-09-17-905Z.yml`); screenshot |

No second New, no retry.

### Observed state after New

| Item | Observed |
|---|---|
| (1) Status-bar text | `Unit of Measure (Object 2 of 2)` (`f1e177`). Count token `(Object 2 of 2)`. |
| (2) Grid rows | **Two** rows: row `1` (`f1e125`–`f1e129`) and row `2` (`f1e185`–`f1e190`). |
| (3) Row 1 | Retains `gridcell "EA"` (`f1e149`) and `gridcell "Each"` (`f1e151`). Blue star visible in the screenshot. |
| (4) Row 2 | Blank: gridcells `f1e196` (Unit of Measure) and `f1e198` (Description) empty. Blue star visible in the screenshot. Current-row arrow shown. Inputs `f1e162` and `f1e171` are blank, so row 2 is the current record. |
| (5) Save | **Enabled** (`f1e28`, no `disabled`). |
| (6) Messages / prompts / validation | None observed. No alert, no validation or Required text, no requery indication, no save-changes or discard prompt. Row 1 kept EA / Each unchanged. |

Note: the screenshot clips the Description column, so row 1's `Each` is shown only in the accessibility tree.

### Interpretation (not conclusive)

- The result matches the candidate state in the instruction: two rows, row 1 EA / Each, row 2 blank and current, count `(Object 2 of 2)`, Save enabled, no unexpected message.
- Both rows are starred in the screenshot. This is a pending/new-row indicator in the UI, not database-level proof.
- No evidence of an implicit commit: Save remains enabled, and no Save-related message appeared. The native UI cannot establish database state.

### Acceptance checks (T4 status)

| AC | T4 status | Basis | Limitation |
|---|---|---|---|
| AC-4 | Still supported at UI level (row 1 EA / Each present with its indicator) | T4 snapshot and screenshot | Description clipped in the image; tree only. Not a database read. |
| AC-5 | **Not yet evaluated.** DZ / Dozen has not been entered; row 2 is blank | row 2 blank in snapshot | Requires second-record authorization. |
| AC-6 to AC-9 | Not evaluated | — | — |

### Evidence files (T4)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T4-pre-new-state-EA-Each-save-enabled.png` | Before New: identity bar; FX_UMs tab; one starred row with `EA` in the first column; Description input `Each`; Save enabled (coloured); status `Unit of Measure (Object 1 of 1)`. | That row 1 is committed; database state. |
| `evidence/EXP-046/T4-after-one-new-click.png` | After New: two starred rows; row 1 `EA`; row 2 blank and current; inputs blank; status `Unit of Measure (Object 2 of 2)`; tooltip `New`; Save coloured. | Row 1 Description (clipped); commit to the database; whether row 2 is persisted. |

Tool-generated snapshot (not worker-authored): `evidence\playwright\page-2026-10-10T16-09-17-905Z.yml` (post-New).

### Operation counts (T4)

| Operation | Count |
|---|---|
| New clicks | **1** |
| Save clicks | **0** |
| DZ / Dozen entry, typing, fills | **0** |
| Refresh / F4 / Filter-in-Place | **0 / 0 / 0** |
| Close / reopen / Designer / Find dialog | **0 / 0 / 0 / 0** |
| Accessibility snapshots | **2** (pre-New, post-New) |
| Screenshots (worker-saved PNG) | **2** (pre-New, post-New) |
| Dialogs or prompts answered | 0 |
| Ref-not-found / recovery | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

### Browser state at end of T4

- Tab 0 `Mongoose` selected; runtime tab `FX_UMs` open.
- Two starred rows: row 1 `EA` / `Each` (staged, unsaved); row 2 blank and current.
- Status `Unit of Measure (Object 2 of 2)`; Save enabled; inputs blank; no dialog, no prompt, no portal banner.
- Designer tab untouched.

### Blocker assessment (T4)

- **No blocker.** The New click completed once with no error, timeout, or prompt. No retry.
- The state is pending and unsaved. Save is enabled. Proceeding to DZ / Dozen entry is not authorized by T4; the coordinator must review this state.

### Repository changes (T4)

- Written: this record (T4 section appended; header updated).
- Written: `evidence/EXP-046/T4-pre-new-state-EA-Each-save-enabled.png`, `evidence/EXP-046/T4-after-one-new-click.png`.
- Not written: any other repository file.

### Open questions (T4)

1. Coordinator decision: authorize second-record entry (DZ / Dozen into row 2), or hold here.
2. Whether a wider view is needed to visually confirm row 1's Description cell (`Each`) in the screenshot. The accessibility tree shows it.
3. The T2 gate (caption prefix and F4 mechanism) remains under operator review.

---

## T5 — Second authorized record DZ / Dozen staged; both rows pending (cycle 6, no Save)

Task: T5, run `R-20261010-235906-HC6Q`, cycle 6, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `22f63d66-e9c8-4d55-9491-124ec85de4ab`.
Scope (bounded instruction): enter and verify ONLY DZ / Dozen in row 2. No Save, Refresh, F4, Filter-in-Place, New, close, reopen, Enter, Tab, record navigation, or further mutation.
Gate note: per the operator's instruction the AC-3 empty-collection gate was approved in cycle 3 and is not treated as pending in T5.

### Precondition (fresh snapshot and screenshot, before typing)

| Check | Observed | Evidence |
|---|---|---|
| Authenticated runtime Form | Tab `FX_UMs` selected (`f1e110`), tab panel `FX_UMs` (`f1e113`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no portal banner; no dialog | snapshot; `T5-pre-entry-two-rows-row2-blank.png` |
| Row 1 | `gridcell "EA"` (`f1e154`), `gridcell "Each"` (`f1e156`); blue star in the screenshot | snapshot; screenshot |
| Row 2 | Blank (`gridcell` `f1e161`, `f1e163`); blue star and current-row arrow in the screenshot; both inputs blank | snapshot; screenshot |
| Row count | Two (`gridcell "1"` `f1e129`, `gridcell "2"` `f1e134`) | snapshot |
| Save | Enabled (`f1e28`, no `disabled`); toolbar Save icon coloured in the screenshot | snapshot; screenshot |
| Status | `Unit of Measure (Object 2 of 2)` (`f1e189`) | snapshot; screenshot |
| Prompts | None | snapshot; screenshot |

Precondition met.

### Operations (T5, in order)

| # | Operation | Observed | Evidence |
|---|---|---|---|
| 1 | Plain fill (`browser_type`, no `slowly`) of `DZ` into row-2 Unit of Measure (`f1e174`) | Input `DZ` `[active]`. Row-2 grid cell still empty. Row count two. Status `(Object 2 of 2)`. No prompt. | snapshot |
| 2 | ONE click on row-2 Description input (`f1e183`) to move focus | Row-2 grid cell `gridcell "DZ"` (`f1e196`) committed. Row count two. Description input `[active]`. Status changed to `Description (Object 2 of 2)`. No prompt. | snapshot |
| 3 | Plain fill of `Dozen` into row-2 Description (`f1e183`) | Input `Dozen` `[active]`. Row-2 Description grid cell still empty. Row count two. No prompt. | snapshot |
| 4 | ONE click on row-2 Unit of Measure input (`f1e174`) to move focus within row 2 | Row-2 grid cells `gridcell "DZ"` (`f1e196`) and `gridcell "Dozen"` (`f1e198`) present. Row count two. Status `Unit of Measure (Object 2 of 2)`. No prompt. | snapshot |

No Enter, no Tab, no New, no Save, no record navigation, no Refresh, no F4.

### Observed result (before Save)

| Item | Observed (accessibility tree) | Observed (screenshot) |
|---|---|---|
| Row count | Two rows (`gridcell "1"` and `gridcell "2"`); no third row | Two starred rows (`1` and `2`) |
| Row 1 | `gridcell "EA"` (`f1e154`), `gridcell "Each"` (`f1e156`) | Star on row 1; `EA` in the first column. **Description column clipped; `Each` not visible.** |
| Row 2 | `gridcell "DZ"` (`f1e196`), `gridcell "Dozen"` (`f1e198`) | Star on row 2; `DZ` in the first column; row 2 current. **Description column clipped; `Dozen` not visible.** |
| Distinct keys | `EA` and `DZ` (two distinct Unit of Measure values) | `EA` and `DZ` visible |
| Matching descriptions | `Each` for `EA`; `Dozen` for `DZ` | Not visible in the screenshot (clipped) |
| Unit of Measure input | `DZ` (`f1e174`) | `DZ`, selected |
| Description input | `Dozen` (`f1e183`) | `Dozen` |
| Status | `Unit of Measure (Object 2 of 2)` | `Unit of Measure (Object 2 of 2)` |
| Save | Enabled (`f1e28`) | Coloured (enabled) |
| Prompts, alerts, validation | None | None |
| Unrelated field changed | None observed | None observed |

**Evidence distinction:** the key values `EA` and `DZ` are visible in the screenshot and in the tree. The Description values `Each` and `Dozen` are confirmed by the accessibility tree only. The Description column is clipped in every screenshot in this run.

### Interpretation (not conclusive)

- The UI shows two staged rows with the expected pairings, count two, Save enabled, and no third row. This is consistent with AC-5 at the UI level.
- Both rows are starred. This is a pending/new-row indicator in the UI, not database-level proof.
- No database read has been performed, and none is authorized. Nothing here shows that either row is persisted.

### Acceptance checks (T5 status)

| AC | T5 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed before entry: authenticated FX_UMs runtime, identity bar, no prompt | pre-entry snapshot; `T5-pre-entry-two-rows-row2-blank.png` | FX_UMs User-scope definition: EXP-045 (cited). |
| AC-2 | Carried; both typed values landed in the captioned Unit of Measure and Description inputs; no unrelated field selected | snapshot labels; the `*` on Unit of Measure | Runtime binding inferred from captions and EXP-045 evidence. Find Value in Collection not used. |
| AC-3 | Approved by the operator in cycle 3; not treated as pending in T5 | operator instruction (cycle 3) | — |
| AC-4 | Still supported (row 1 EA / Each present, indicator visible) | T5 snapshot and screenshot | Description clipped in the image. |
| AC-5 | **Supported at UI level.** Both authorized rows are visible before Save: row 1 `EA` / `Each`, row 2 `DZ` / `Dozen`, distinct keys, count two, no third row, no unrelated change | Accessibility tree rows `f1e154`/`f1e156` and `f1e196`/`f1e198`; screenshot `T5-both-rows-staged-EA-Each-DZ-Dozen-before-save.png` (keys visible; descriptions clipped) | Description values from the tree only. Not a database read. |
| AC-6 to AC-9 | Not evaluated (no Save, close, reopen, recovery yet) | — | — |

### Evidence files (T5)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T5-pre-entry-two-rows-row2-blank.png` | Before entry: identity bar; FX_UMs tab; two starred rows; row 1 `EA`; row 2 blank and current; inputs blank; Save coloured; status `(Object 2 of 2)`. | That row 2 is persisted; any description value. |
| `evidence/EXP-046/T5-both-rows-staged-EA-Each-DZ-Dozen-before-save.png` | Before Save: two starred rows; `EA` (row 1) and `DZ` (row 2) in the first column; row 2 current; inputs `DZ` (selected) and `Dozen`; Save coloured; status `Unit of Measure (Object 2 of 2)`. | `Each` and `Dozen` in the grid (clipped); persistence; database state. |

Tool-generated snapshots (not worker-authored) of this run's changes: `evidence\playwright\page-2026-10-10T16-11-04-188Z.yml` (after the DZ-to-Description focus move), `evidence\playwright\page-2026-10-10T16-11-11-422Z.yml` (after the Dozen-to-Unit focus move).

### Operation counts (T5)

| Operation | Count |
|---|---|
| Plain fills (`browser_type`, no `slowly`) | 2 (`DZ`, `Dozen`) |
| Focus-move clicks within row 2 | 2 (Description, then Unit of Measure) |
| Record insertions (new rows) | **0** (no New; row 2 was created in T4) |
| Save clicks | **0** |
| New / Enter / Tab / record navigation | **0 / 0 / 0 / 0** |
| Refresh / F4 / Filter-in-Place | **0 / 0 / 0** |
| Close / reopen / Designer / Find dialog | **0 / 0 / 0 / 0** |
| Accessibility snapshots | **5** (pre-entry; after DZ typed; after the Description focus move; after Dozen typed; after the Unit of Measure focus move) |
| Screenshots (worker-saved PNG) | **2** (pre-entry; both rows staged before Save) |
| Dialogs or prompts answered | 0 |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

Note on counts: the snapshot and screenshot counts above are the actual calls made in T5 (corrected from an earlier draft that overstated them).

### Cumulative record state (AC-9 inventory, pending)

| Record | FX_UM | FX_Description | Status | Introduced by |
|---|---|---|---|---|
| Placeholder row → row 1 | `EA` | `Each` | Staged, unsaved (new-row star) | T3 (typed); T4 (New added row 2) |
| Row 2 | `DZ` | `Dozen` | Staged, unsaved (new-row star) | T4 (New), T5 (typed) |

Total authorized insertions so far: **2** (within the limit of 2). Total Save clicks: **0** (the one permitted Save is still pending the operator's authorization).

### Browser state at end of T5

- Tab 0 `Mongoose` selected; runtime tab `FX_UMs` selected and open. The FX_UMs tab is not closed or reopened.
- Two starred rows: row 1 `EA` / `Each`; row 2 `DZ` / `Dozen` (row 2 current). Inputs show `DZ` (selected) and `Dozen`.
- Status `Unit of Measure (Object 2 of 2)`; Save enabled and not invoked. No dialog, no prompt, no portal banner.
- Designer tab untouched.

### Blocker assessment (T5)

- **No blocker.** Each step completed once without error, timeout, `Ref not found`, validation message, or unexpected prompt.
- The record is staged and unsaved, and the two-row state is as expected. Nothing has been persisted by the UI as far as observed.
- Next permitted action (separately authorized): one ordinary toolbar Save, then the close/reopen and recovery steps. T5 does not authorize Save.

### Repository changes (T5)

- Written: this record (header updated; T5 section appended).
- Written: `evidence/EXP-046/T5-pre-entry-two-rows-row2-blank.png`, `evidence/EXP-046/T5-both-rows-staged-EA-Each-DZ-Dozen-before-save.png`.
- Not written: any other repository file.

### Open questions (T5)

1. Coordinator decision: authorize the single ordinary toolbar Save of both staged rows.
2. Visual confirmation of the Description column (`Each`, `Dozen`) would need a wider grid view. The accessibility tree is the only proof for those two values.
3. Whether the new-row stars clear on Save, and what the post-Save status count shows, is unknown until the Save is authorized.

---

## T6 — ONE ordinary toolbar Save of the two staged records (cycle 7)

Task: T6, run `R-20261010-235906-HC6Q`, cycle 7, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `e6d8ab96-5690-4586-bd92-1fd40a9c1e79`.
Scope (bounded instruction): exactly ONE toolbar Save, then stop for review. No retry, no New, no further entry, no Refresh, no F4, no Filter-in-Place, no close or reopen, no Designer.

### Pre-Save preconditions (fresh untargeted snapshot and screenshot)

| Check | Observed | Evidence |
|---|---|---|
| Authenticated runtime Form | Tab `FX_UMs` selected (`f1e110`), tab panel `FX_UMs` (`f1e113`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no portal banner | snapshot; `T6-pre-save-two-rows-staged.png` |
| Exactly two collection rows | `gridcell "1"` (`f1e129`), `gridcell "2"` (`f1e134`); no third row | snapshot |
| Row 1 values | `gridcell "EA"` (`f1e154`), `gridcell "Each"` (`f1e156`) | snapshot |
| Row 2 values | `gridcell "DZ"` (`f1e161`), `gridcell "Dozen"` (`f1e163`) | snapshot |
| New-row indicators | Blue stars on rows 1 and 2 | `T6-pre-save-two-rows-staged.png` |
| Status | `Unit of Measure (Object 2 of 2)` (`f1e189`) | snapshot; screenshot |
| Save | Enabled (`f1e28`, no `disabled`) | snapshot; screenshot (coloured) |
| Prompts / validation / messages | None | snapshot; screenshot |

All preconditions held.

### The one Save

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | ONE click on toolbar `Save` (`f1e28`, label verified `Save`) | Completed without error or timeout. No retry. | tool output; `evidence\playwright\page-2026-10-10T16-12-58-100Z.yml` (post-click snapshot) |
| 2 | Fresh untargeted snapshot (no action) | See settled result. | snapshot |
| 3 | Settled screenshot `T6-post-save-settled-result.png` | See settled result. | screenshot (read) |

### Settled result after Save (one observation)

| Item | Observed (accessibility tree) | Observed (screenshot) |
|---|---|---|
| Row count | Two rows (`gridcell "1"`, `gridcell "2"`) | Two rows, numbered `1` and `2` |
| New-row indicators | Not present in the tree | **Stars gone** from rows 1 and 2; plain numbers; row 2 keeps the current-row arrow |
| Row 1 values | `gridcell "EA"` (`f1e154`), `gridcell "Each"` (`f1e156`) | `EA` in the key column (Description clipped) |
| Row 2 values | `gridcell "DZ"` (`f1e161`), `gridcell "Dozen"` (`f1e163`) | `DZ` in the key column (Description clipped) |
| Status-bar text | `Unit of Measure (Object 2 of 2)` (`f1e189`) | `Unit of Measure (Object 2 of 2)` |
| Save | **Disabled** (`f1e28` `[disabled]`) | Save icon greyed; tooltip `Save` shown |
| Unit of Measure input | `DZ` (`f1e174`) | Input shown **grey** (non-editing background); value `DZ` |
| Description input | `Dozen` (`f1e183`) | `Dozen` |
| Success message | None in this UI | None visible |
| Validation / alert / error | None | None |
| Save/discard prompt | None | None |
| Unexpected navigation or tab change | None: FX_UMs still selected; Designer not touched | Same |

Note: the grey Unit of Measure input after Save matches the EXP-042-R3 observation. It is visual evidence only. Read-only enforcement was not tested, and no edit was attempted.

### Interpretation (what is and is not established)

- **Click execution:** established. The toolbar Save click returned without error, and the Save control then reported disabled.
- **Runtime Save processing:** supported at UI level only. Evidence: stars cleared, Save disabled, grey key input, no message or prompt, status count `Object 2 of 2` with two rows and no placeholder. This is consistent with the runtime accepting the rows, but the UI shows no explicit success message.
- **Not established:** a database write, durability, or cross-session persistence. No database read was performed and none is authorized. The status count is the current-object position over two rows. It does not prove two stored rows, which EXP-042-R3 also noted.
- **Add-mode placeholder:** no star is visible, so no uncommitted placeholder is shown. The count of two with two rows is consistent with no placeholder, but the add-mode state is inferred from the missing star, not observed directly.

### Acceptance checks (T6 status)

| AC | T6 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed before Save: authenticated FX_UMs runtime, identity bar, no prompt | pre-Save snapshot; `T6-pre-save-two-rows-staged.png` | FX_UMs User-scope definition cited from EXP-045. |
| AC-2 | Carried: captioned Unit of Measure and Description received the values; no unrelated field | snapshot labels | Runtime binding inferred from captions and EXP-045 evidence. |
| AC-3 | Approved in cycle 3; not treated as pending | operator instruction | — |
| AC-4 | Supported before Save (T3, T4, T5); carried | T3 to T5 evidence | Description clipped in images. |
| AC-5 | Supported before Save (T5); carried | T5 evidence; pre-Save snapshot | Descriptions from the tree only. |
| AC-6 | **Supported at UI level.** One ordinary toolbar Save clicked; click executed; settled UI shows stars cleared, Save disabled, no message or prompt, status `(Object 2 of 2)` | post-Save snapshot; `T6-post-save-settled-result.png` | Not a database read. No explicit success message. Not durability or cross-session persistence. |
| AC-7 to AC-9 | Not evaluated (close, reopen, recovery, final audit come later) | — | — |

### Evidence files (T6)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T6-pre-save-two-rows-staged.png` | Before Save: identity bar; FX_UMs tab; two starred rows; key column `EA` (row 1) and `DZ` (row 2); row 2 current; inputs `DZ` (selected) and `Dozen`; Save coloured; status `(Object 2 of 2)`. | Description values in the grid (clipped); persistence. |
| `evidence/EXP-046/T6-post-save-settled-result.png` | After the one Save: two rows numbered `1` and `2` (stars cleared); key column `EA` and `DZ`; Unit of Measure input grey with `DZ`; Description `Dozen`; Save greyed; status `Unit of Measure (Object 2 of 2)`; no dialog. | Persistence; Description grid cells (clipped); database state; that the grey input is a read-only setting. |

Tool-generated snapshot (not worker-authored): `evidence\playwright\page-2026-10-10T16-12-58-100Z.yml` (post-click).

### Operation counts (T6)

| Operation | Count |
|---|---|
| Save clicks | **1** (no retry) |
| New / Refresh / F4 / Filter-in-Place | **0 / 0 / 0 / 0** |
| Entry, typing, fills, Tab, Enter | **0** |
| Close / reopen / Designer / Find dialog | **0 / 0 / 0 / 0** |
| Accessibility snapshot calls | **2** (one pre-Save precondition snapshot; one post-Save settled snapshot). The click tool's own output included a page snapshot, which is not counted as a separate call. |
| Screenshots (worker-saved PNG) | **2** (pre-Save; post-Save) |
| Dialogs or prompts answered | 0 |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

Running totals (AC-9): record insertions **2** (EA / Each and DZ / Dozen; the limit is reached). Save clicks **1** (the limit is reached).

### Browser state at end of T6

- Tab 0 `Mongoose` selected; runtime tab `FX_UMs` selected and open; not closed or reopened.
- Two rows numbered `1` and `2`, stars cleared; key values `EA` and `DZ`; status `Unit of Measure (Object 2 of 2)`; Save disabled; no dialog, prompt, or message.
- Designer tab untouched.

### Blocker assessment (T6)

- **No blocker.** The one Save click executed once with no error or timeout, and was not retried. The settled state showed no validation message or prompt.
- Save processing is supported at UI level only, not as a database-level result.

### Repository changes (T6)

- Written: this record (header updated; T6 section appended).
- Written: `evidence/EXP-046/T6-pre-save-two-rows-staged.png`, `evidence/EXP-046/T6-post-save-settled-result.png`.
- Not written: any other repository file.

### Open questions (T6)

1. Coordinator decision: authorize the lifecycle task (one ordinary close and one reopen through supported Web Client navigation), followed by one fresh empty-criteria collection query for AC-7 and AC-8.
2. Operator review of the T2 gate (caption prefix and F4 mechanism) and a wider grid view to see the Description cells remain open. Neither blocks the lifecycle task.

---

## T7 — ONE native Form-tab close of FX_UMs (cycle 8, no reopen)

Task: T7, run `R-20261010-235906-HC6Q`, cycle 8, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `81cac0c9-9264-4be3-a567-0bdc57b08f73`.
Scope (bounded instruction): close the FX_UMs runtime tab exactly once, then stop. No reopen, no Refresh, no F4, no New, no Save, no record edits, no Designer, no session recovery.

### Pre-close preconditions (fresh untargeted snapshot and screenshot)

| Check | Observed | Evidence |
|---|---|---|
| Authenticated FX_UMs runtime Form | Tab `FX_UMs` selected (`f1e114`), tab panel `FX_UMs` (`f1e117`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | snapshot; `T7-pre-close-state.png` |
| Exactly two collection rows | `gridcell "1"` (`f1e133`), `gridcell "2"` (`f1e138`) | snapshot |
| Row 1 values | `gridcell "EA"` (`f1e158`), `gridcell "Each"` (`f1e160`) | snapshot |
| Row 2 values | `gridcell "DZ"` (`f1e165`), `gridcell "Dozen"` (`f1e167`) | snapshot |
| New-row stars | **Absent**: the screenshot shows plain numbers `1` and `2` with no blue star | `T7-pre-close-state.png` (read) |
| Save | Disabled (`f1e28` `[disabled]`); greyed in the screenshot | snapshot; screenshot |
| Status count | `Unit of Measure (Object 2 of 2)` (`f1e193`) | snapshot; screenshot |
| Dialogs or prompts | None | snapshot; screenshot |

All preconditions held.

### The one close

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | ONE click on `Close Panel FX_UMs` (`f1e116`, label verified in the fresh snapshot and the tab's own close control) | Completed without error or timeout. No retry. | tool output; `evidence\playwright\page-2026-10-10T16-14-55-180Z.yml` (post-click snapshot) |
| 2 | Fresh untargeted snapshot and screenshot `T7-post-close-state.png` | See the result below. | snapshot; screenshot (read) |

### Result after the close (observed)

| Item | Observed |
|---|---|
| FX_UMs runtime tab | **No longer in the tab list.** The tab list shows `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns`. |
| FX_UMs tabpanel | Not present in the snapshot. |
| Active tab | `Property Classes` (`f1e102`, selected). Mongoose activated this pre-existing tab. The URL `favoriteContext` changed from `FX_UMs` to `IdoPropertyClasses`. |
| Property Classes content | The `FX_UMBase` class view, checked out and locked (`Locked By anton.ramos@3mworks.com.ph`, `Undo Check Out` and `Check In` buttons). This is the pre-existing state recorded in EXP-045 T1. It was not changed by T7. |
| Save / discard / authentication / validation / other prompt | **None.** No dialog in the snapshot or the screenshot. The Property Classes view shows no unsaved-change indication. |
| Toolbar | Save greyed; Open enabled. |
| Status bar | `Base Class (IDO Property Classes 1 of 1)`. This belongs to the active Property Classes view, not to FX_UMs. |

### Interpretation (what is and is not established)

- **Close execution:** established. One click on the FX_UMs tab's own close control completed, and the FX_UMs tab is absent from the tab list.
- **Normal close (no prompt):** supported at UI level. No Save, discard, or unsaved-change prompt appeared, and none was answered.
- **Closed state of FX_UMs as a Form:** the tab and tabpanel are absent, which shows the runtime Form is no longer open in this session. It does not show whether the saved rows were written to the database. No database read was performed.
- **Reopen:** not performed. AC-7 remains pending for the reopen.
- **Browser state:** the Property Classes tab is now active. This was a side effect of closing the tab. It is not an action the worker took.

### Acceptance checks (T7 status)

| AC | T7 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed before close: authenticated FX_UMs runtime, identity bar, no prompt | pre-close snapshot; `T7-pre-close-state.png` | FX_UMs User-scope definition cited from EXP-045. |
| AC-2 | Carried: captioned fields received the values; no unrelated field | snapshot labels | Runtime binding inferred from captions and EXP-045 evidence. |
| AC-3 | Approved in cycle 3; not reopened | operator instruction | — |
| AC-4 and AC-5 | Supported before Save (T3 to T5); carried | T3 to T5 evidence | Descriptions clipped in images. |
| AC-6 | Supported at UI level (T6); carried | T6 evidence | Not a database read. |
| AC-7 | **Close portion supported at UI level.** Tab closed by one native close control; no unexpected prompt; FX_UMs not in the tab list. **Reopen NOT yet performed. AC-7 remains pending.** | post-close snapshot; `T7-post-close-state.png` | The reopen needs separate authorization. Closed state is a UI observation. |
| AC-8 and AC-9 | Not evaluated | — | — |

### Evidence files (T7)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T7-pre-close-state.png` | Before close: identity bar; FX_UMs tab selected; two rows numbered `1` and `2` with **no stars**; key column `EA` and `DZ`; Unit of Measure input grey with `DZ`; Description `Dozen`; Save greyed; status `Unit of Measure (Object 2 of 2)`; no dialog. | Persistence; the Description cells (clipped); the database state. |
| `evidence/EXP-046/T7-post-close-state.png` | After close: the FX_UMs tab is gone from the tab bar; the active tab is `Property Classes` (`FX_UMBase`, checked out, pre-existing); no dialog or prompt visible; Save greyed. | Whether the rows persisted; the reopened Form identity (not reopened); any FX_UMs content. |

Tool-generated snapshot (not worker-authored): `evidence\playwright\page-2026-10-10T16-14-55-180Z.yml` (post-click).

### Operation counts (T7)

| Operation | Count |
|---|---|
| Form-tab close clicks | **1** (no retry) |
| Reopen / Open / Select Form | **0 / 0 / 0** |
| Save / New / Refresh / F4 / Filter-in-Place | **0 / 0 / 0 / 0 / 0** |
| Entry, typing, fills, Tab, Enter | **0** |
| Designer / Find dialog | **0 / 0** |
| Accessibility snapshot calls | **2** (pre-close; post-close) |
| Screenshots (worker-saved PNG) | **2** (pre-close; post-close) |
| Dialogs or prompts answered | **0** |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

Running totals (AC-9): record insertions **2**; Save clicks **1**; Form-tab closes **1** (of the authorized one).

### Browser state at end of T7

- Tab 0 `Mongoose` selected; the active runtime tab is `Property Classes` (pre-existing, untouched). FX_UMs is closed.
- No dialog, browser-native prompt, or unsaved-change prompt.
- Designer tab untouched.

### Blocker assessment (T7)

- **No blocker.** The one close click completed without error, timeout, or prompt. No retry was made.

### Repository changes (T7)

- Written: this record (header updated; T7 section appended).
- Written: `evidence/EXP-046/T7-pre-close-state.png`, `evidence/EXP-046/T7-post-close-state.png`.
- Not written: any other repository file.

### Open questions (T7)

1. Coordinator decision: authorize the single reopen of FX_UMs through supported Web Client navigation (toolbar Open, Select Form, OK), followed by one fresh empty-criteria query for AC-7 (reopen) and AC-8 (recovery).
2. Operator review of the T2 gate (caption prefix and F4 mechanism) and the wider grid view for the Description cells remain open. Neither blocks the reopen.

---

## T8 — ONE native reopen of FX_UMs through Select Form (cycle 9); no query

Task: T8, run `R-20261010-235906-HC6Q`, cycle 9, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `2495044c-a879-4bb4-b18c-e2a23b9084ec`.
Scope (bounded instruction): reopen FX_UMs once through supported native navigation, capture the result, then stop. No Refresh, F4, Filter-in-Place, query, entry, New, Save, second close or reopen, Designer, Property Classes edit, reload, or session recovery.

### Pre-reopen preconditions (fresh untargeted snapshot)

| Check | Observed | Evidence |
|---|---|---|
| Authenticated Web Client | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; portal tab `Mongoose` selected | snapshot |
| FX_UMs absent from the Form tabs | Tab list: `FX_HelloWorld01`, `Property Classes` (selected), `IDOs`, `Sql Tables`, `Sql Columns`. No FX_UMs tab. | snapshot |
| Current tab | `Property Classes` (`f1e102`, selected); view unchanged | snapshot |
| Prompts / dialogs | None | snapshot |
| Save | Disabled (Property Classes view) | snapshot |

All preconditions held.

### Operations (T8, in order)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | ONE click on toolbar `Open` (`f1e25`, label verified `Open`) | Click completed without error. Tooltip `Open`. | tool output; `evidence\playwright\page-2026-10-10T16-16-31-102Z.yml` |
| 2 | Fresh snapshot | Select Form dialog open (`f1e805`): one populated row, Caption `FX_UMs` and Name `FX_UMs`. Filter `FX_UMs`, Filter By `Name`, both checkboxes unchecked. Only one match. | snapshot |
| 3 | Screenshot before selection `T8-select-form-one-match-before-select.png` | Single highlighted row `FX_UMs` / `FX_UMs`; OK, Cancel and Help visible. | screenshot (read) |
| 4 | ONE click on dialog `OK` (`f1e853`, label verified `OK`) | Completed without error. The dialog closed. Page `favoriteContext` changed to `FX_UMs`. No second OK. No row click was needed, since the row was already highlighted. | tool output; `evidence\playwright\page-2026-10-10T16-16-41-043Z.yml` |
| 5 | Fresh snapshot and screenshot `T8-reopened-fx-ums-after-one-open-ok.png` | See the result below. | snapshot; screenshot (read) |

Exactly one Open click, one OK click, and no second reopen.

### Reopened Form result (observed, no query)

| Item | Observed |
|---|---|
| Form tab identity | `FX_UMs` tab selected (`f1e859`); tabpanel `FX_UMs` (`f1e862`); Mongoose identity bar unchanged |
| Captions | `* Unit of Measure` (grid column header, required marker); `Unit of Measure:` (field label with red `*`); `Description` (column) and `Description:` (field label) |
| Grid rows | **One row** (`gridcell "1"`, `f1e878`), with a blue star in the screenshot. Cells `f1e898` and `f1e900` are blank. |
| Inputs | Unit of Measure (`f1e911`, focused, blank); Description (`f1e920`, blank) |
| Status-bar text | `Unit of Measure (Object 1 of 1)` (`f1e799`) |
| Save | **Disabled** (`f1e28`, `[disabled]`); greyed in the screenshot |
| Saved rows `EA` / `DZ` | **Not loaded** on open. No `EA` or `DZ` text in the tree or the screenshot. |
| Prompts, messages, validation, unsaved-change indication | None |

### Interpretation (not conclusive)

- **Exactly one native reopen** was observed: one toolbar Open, one Select Form match, one OK. The reopened identity is `FX_UMs`.
- **AC-7 reopen portion:** supported at UI level.
- **Rows on open:** the Form opened in add mode with a blank placeholder and did not load the saved rows. This matches the EXP-042-R3 T9 observation, where rows appeared only after an explicit Refresh. The brief does not allow a Refresh in T8, so the rows were not requested.
- **Interpretation limit:** the absence of `EA` / `DZ` on open does not show that the rows were not stored. It also does not show that they were. Only the separately authorized empty-criteria query in the next task can test recovery (AC-8). That query can still return a settled view, but it is still not a database read.
- **Gate note:** the status `(Object 1 of 1)` on reopen is the add-mode placeholder count (one placeholder, no loaded rows). It is not an emptiness result. The operator-approved AC-3 gate from cycle 3 is not re-evaluated here.

### Acceptance checks (T8 status)

| AC | T8 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed at reopen: authenticated Web Client, FX_UMs identity, captions, no prompt | reopen snapshot and `T8-reopened-fx-ums-after-one-open-ok.png` | FX_UMs User-scope definition cited from EXP-045. |
| AC-2 | Captions re-observed on reopen (Unit of Measure with required marker; Description) | snapshot labels | Runtime binding inferred from captions and EXP-045 evidence. |
| AC-3 | Approved in cycle 3; not re-evaluated | operator instruction | — |
| AC-4 to AC-6 | Carried from T3 to T6 | earlier evidence | Descriptions clipped in images; UI-level only. |
| AC-7 | **Fully supported at UI level.** Close (T7, no prompt) and exactly one reopen (T8) through native Web Client controls; reopened identity `FX_UMs`; no unexpected Save, discard, authentication or validation prompt. | T7 and T8 snapshots; `T8-reopened-fx-ums-after-one-open-ok.png` | UI-level only; not a database read; not cross-session. |
| AC-8 | **Pending.** Requires one fresh empty-criteria query after the reopen, which this task did NOT run. Automatically displayed rows do not satisfy AC-8. | — | Needs separate authorization. |
| AC-9 | Not yet evaluated (final audit after AC-8) | — | — |

### Evidence files (T8)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T8-select-form-one-match-before-select.png` | Select Form before OK: one highlighted row `FX_UMs` / `FX_UMs`; Filter `FX_UMs`; Name; both checkboxes unchecked; OK, Cancel, Help. Behind the dialog: Property Classes tab. | The Form's rows; the database. |
| `evidence/EXP-046/T8-reopened-fx-ums-after-one-open-ok.png` | Reopened: FX_UMs tab selected; identity bar; captions `Unit of Measure` (required) and `Description`; one starred blank placeholder row; blank inputs; Save greyed; status `Unit of Measure (Object 1 of 1)`; no dialog. | That `EA` / `DZ` are stored; any loaded saved rows; recovery (AC-8). |

Tool-generated snapshots (not worker-authored): `evidence\playwright\page-2026-10-10T16-16-31-102Z.yml` (post-Open), `evidence\playwright\page-2026-10-10T16-16-41-043Z.yml` (post-OK).

### Operation counts (T8)

| Operation | Count |
|---|---|
| Toolbar Open clicks | **1** |
| Select Form OK clicks | **1** |
| Select Form row clicks | **0** (row already highlighted) |
| FX_UMs reopens (native) | **1** |
| Refresh / F4 / Filter-in-Place / query | **0 / 0 / 0 / 0** |
| New / Save / entry / typing | **0 / 0 / 0** |
| Form-tab close (in T8) | **0** |
| Designer / Property Classes edit | **0 / 0** |
| Accessibility snapshot calls | **3** (pre-Open precondition; post-Open Select Form; post-OK reopened result) |
| Screenshots (worker-saved PNG) | **2** (pre-selection; reopened) |
| Dialogs or prompts answered | 0 |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

### Cumulative operation counts (AC-9 running totals, before AC-8)

| Operation | Total to date | Limit |
|---|---|---|
| Record insertions (EA / Each; DZ / Dozen) | **2** | 2 |
| Toolbar Save clicks | **1** | 1 |
| Form-tab closes | **1** | 1 (authorized) |
| FX_UMs reopens | **1** | 1 (authorized) |
| Fresh collection queries after reopen (AC-8) | **0** | 1 (pending authorization) |

### Browser state at end of T8

- Tab 0 `Mongoose` selected; the FX_UMs runtime tab is open and selected (reopened once). The Property Classes tab is still open but not active.
- One starred placeholder, blank inputs, status `Unit of Measure (Object 1 of 1)`, Save disabled. No saved rows loaded.
- No dialog, browser-native prompt, or unsaved-change prompt.
- Designer tab untouched.

### Blocker assessment (T8)

- **No blocker.** The Open and OK clicks each completed once with no error, timeout, prompt, or ambiguous result. No second reopen was attempted.

### Repository changes (T8)

- Written: this record (header updated; T8 section appended).
- Written: `evidence/EXP-046/T8-select-form-one-match-before-select.png`, `evidence/EXP-046/T8-reopened-fx-ums-after-one-open-ok.png`.
- Not written: any other repository file.

### Open questions (T8)

1. Coordinator decision: authorize ONE fresh empty-criteria collection query after the reopen (for example, toolbar Refresh or F4 with empty criteria) for AC-8 recovery. Its result is the first test of whether the two saved rows are returned.
2. The T2 gate caption prefix and F4 mechanism review, and the wider grid view for the Description cells, remain open items for the operator.

---

## T9 — ONE fresh empty-criteria query after reopen (cycle 10): Filter in Place, then one F4

Task: T9, run `R-20261010-235906-HC6Q`, cycle 10, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `d89bc3de-4624-45fa-b74d-6936ae83a6a6`.
Scope (bounded instruction): one empty-criteria query on the reopened FX_UMs runtime Form (Filter in Place, then F4 exactly once), then stop. No Refresh, no second F4, no New, no Save, no entry, no close or reopen, no Designer, no reload, no session recovery.

### Pre-query preconditions (fresh untargeted snapshot and screenshot)

| Check | Observed | Evidence |
|---|---|---|
| Authenticated FX_UMs runtime Form | Tab `FX_UMs` selected (`f1e108`), tab panel `FX_UMs` (`f1e111`); identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no portal banner | snapshot; `T9-pre-query-reopened-placeholder.png` |
| Placeholder | One row `gridcell "1"` (`f1e127`) with a blue star in the screenshot; blank | snapshot; screenshot |
| Inputs | Unit of Measure (`f1e160`) and Description (`f1e169`) blank | snapshot; screenshot |
| Save | Disabled (`f1e28`) | snapshot; screenshot |
| Status | `Unit of Measure (Object 1 of 1)` (`f1e175`) | snapshot; screenshot |
| Prompts / dialogs | None | snapshot; screenshot |

All preconditions held.

### Criteria check (Filter in Place, one click, no query yet)

| Action | Observed | Evidence |
|---|---|---|
| ONE click on toolbar `Filter in Place` (`f1e38`, label verified `FiP`) | Filter-in-Place mode entered: status `Filter in Place` (`f1e175`); New, Delete, Refresh and Export disabled; Save disabled; row `1` lost its star; both criteria inputs (`f1e160`, `f1e169`) blank; FX_UMs tab shows the filter icon. | snapshot; `T9-filter-in-place-criteria-state-before-f4.png` (read) |

Criteria confirmed blank in both inputs. No retained restrictive criteria is visible. The filter-mode icon is the expected indicator of this mode, not a retained criterion. No criterion was typed.

### The one query (F4, exactly once)

| # | Action | Observed | Evidence |
|---|---|---|---|
| 1 | ONE `F4` key press | Filter-in-Place mode exited; tab filter icon gone; toolbar enabled again; query settled with populated rows (see below). No error, no prompt. | snapshot; screenshot |

No second F4, no Refresh.

### Result after the query (observed)

| Item | Observed (accessibility tree) | Observed (screenshot) |
|---|---|---|
| Form identity | Tab `FX_UMs` selected (`f1e110`); tabpanel `FX_UMs` (`f1e111`); identity bar unchanged | Tab `FX_UMs` active; identity bar visible |
| Row count | **Two** rows: `gridcell "1"` (`f1e205`) and `gridcell "2"` (`f1e211`) | Two rows numbered `1` and `2` |
| Row 1 values | `gridcell "DZ"` (`f1e216`), `gridcell "Dozen"` (`f1e218`) | `DZ` visible in the key column; row 1 current; Description clipped |
| Row 2 values | `gridcell "EA"` (`f1e223`), `gridcell "Each"` (`f1e225`) | `EA` visible in the key column; Description clipped |
| Row order | DZ before EA | Same |
| Blank placeholder | **None.** No blank row in the tree; no starred row in the screenshot | No star on either row |
| Other populated rows | **None.** Only two value rows in the tree | Only two rows |
| Unit of Measure input | `DZ` (`f1e160`); screenshot shows it greyed with `DZ` | Greyed |
| Description input | `Dozen` (`f1e169`, focused and selected) | `Dozen` selected |
| Status-bar text | `Description (Object 1 of 2)` (`f1e175`) | `Description (Object 1 of 2)` at bottom left |
| Get More Rows | **Disabled** (`f1e41`, `[disabled]`) | Not separately visible (toolbar) |
| Restrictive filter indicator | None: the FX_UMs tab shows no filter icon; status text is not `Filter in Place` | No filter icon on the tab |
| Save | **Disabled** (`f1e28`, `[disabled]`) | Save greyed |
| Unsaved-change indication | None | None |
| Validation, authentication, or other message | None | None |

### Cardinality interpretation (same-session runtime UI only)

- **Exactly two populated records** are shown: `DZ` / `Dozen` and `EA` / `Each`. They are distinct keys, and the descriptions match their keys in the accessibility tree.
- **No blank placeholder** is present after this query, so no placeholder needs excluding from the count.
- **No third populated row**, and no unexpected value, appears.
- **Status count** `(Object 1 of 2)` has denominator 2, which matches the two records. The numerator is the current-record position (row 1, DZ), as accepted in EXP-042-R3. It is not a count of populated records by itself.
- **Get More Rows is disabled**, which supports that no further rows were pending from the same query. This is a same-session client observation, not a database read.
- **Row order** differs from the insertion order (EA was entered first). The cause of the ordering is not established: it could be the IDO sort, the key, or a client default. It does not affect cardinality.

### Acceptance checks (T9 status)

| AC | T9 status | Basis | Limitation |
|---|---|---|---|
| AC-1 | Re-observed before the query: authenticated FX_UMs runtime, identity bar, no prompt | pre-query snapshot; `T9-pre-query-reopened-placeholder.png` | FX_UMs User-scope definition cited from EXP-045. |
| AC-2 | Captions re-observed: Unit of Measure (required) and Description | snapshot labels | Runtime binding inferred from captions and EXP-045 evidence. |
| AC-3 | Approved in cycle 3; not re-evaluated | operator instruction | — |
| AC-4 to AC-6 | Carried from T3 to T6 | earlier evidence | Descriptions clipped in images; UI level only. |
| AC-7 | Fully supported at UI level (T7 close, T8 reopen), carried | T7 and T8 evidence | UI level only; not a database read; not cross-session. |
| AC-8 | **Supported at same-session runtime UI level.** One fresh empty-criteria query after the reopen returned exactly two populated records, `EA` / `Each` and `DZ` / `Dozen`, with distinct keys, no blank placeholder, no other populated row, Get More Rows disabled, no restrictive filter indicator, Save disabled, and no unsaved-change indication. The Description values are confirmed by the accessibility tree; the screenshot clips the column. | snapshot (`f1e205`–`f1e225`); `T9-after-one-f4-empty-criteria-query-result.png` | Same session only. The count is the client's loaded view. This is not an independent database read, not cross-session persistence, and not replay verification. |
| AC-9 | Not yet complete (final audit below) | — | — |

### Evidence files (T9)

| File | Shows | Does not prove |
|---|---|---|
| `evidence/EXP-046/T9-pre-query-reopened-placeholder.png` | Before the query: identity bar; FX_UMs tab; one blue-starred blank row; blank inputs; Save greyed; status `Unit of Measure (Object 1 of 1)`; no dialog. | Any saved row; the query result. |
| `evidence/EXP-046/T9-filter-in-place-criteria-state-before-f4.png` | Filter-in-Place mode before F4: status `Filter in Place`; both criteria inputs blank; FX_UMs tab filter icon; toolbar New, Refresh, Delete disabled. | That no hidden criterion exists beyond the two bound fields. |
| `evidence/EXP-046/T9-after-one-f4-empty-criteria-query-result.png` | After the one F4: two rows numbered `1` (DZ) and `2` (EA); no stars; no filter icon; Unit of Measure greyed with `DZ`; Description `Dozen` selected; status `Description (Object 1 of 2)`; Save greyed. | The Description cells (clipped); persistence in the database; the query mechanism beyond the observed result. |

Tool-generated snapshots (not worker-authored): `evidence\playwright\page-2026-10-10T16-18-30-348Z.yml` (after Filter in Place). The post-F4 snapshot is in the tool output.

### Operation counts (T9)

| Operation | Count |
|---|---|
| F4 key presses (empty-criteria query) | **1** |
| Filter in Place clicks | **1** |
| Refresh / New / Save / entry / typing | **0 / 0 / 0 / 0** |
| Reopen / close / Designer / Get More Rows clicks | **0 / 0 / 0 / 0** |
| Accessibility snapshot calls | **3** (pre-query precondition; after Filter in Place; after F4) |
| Screenshots (worker-saved PNG) | **3** (pre-query; Filter in Place criteria; post-F4 result) |
| Dialogs or prompts answered | 0 |
| Ref-not-found errors / recovery snapshots | 0 / 0 |
| Portal banner dismissals | 0 (none visible) |

### Cumulative totals (preserved as instructed)

| Item | Total | Limit / note |
|---|---|---|
| Authorized record insertions (EA / Each; DZ / Dozen) | **2** | 2 |
| Toolbar Save clicks | **1** | 1 |
| Form-tab closes | **1** | 1 |
| FX_UMs reopens | **1** | 1 |
| Post-reopen collection queries (F4 empty-criteria) | **1** | 1 |

### Browser state at end of T9

- Tab 0 `Mongoose` selected; runtime tab `FX_UMs` selected and open.
- Two populated rows (`DZ` / `Dozen`, `EA` / `Each`); no blank placeholder; Save disabled; no filter mode; status `Description (Object 1 of 2)`; Unit of Measure greyed; Description `Dozen` selected.
- No dialog, browser-native prompt, or unsaved-change prompt.
- Designer tab untouched.

### Blocker assessment (T9)

- **No blocker.** The Filter in Place click and the one F4 each completed once, with no error, prompt, or ambiguous state.

### Repository changes (T9)

- Written: this record (header updated; T9 section appended).
- Written: `evidence/EXP-046/T9-pre-query-reopened-placeholder.png`, `evidence/EXP-046/T9-filter-in-place-criteria-state-before-f4.png`, `evidence/EXP-046/T9-after-one-f4-empty-criteria-query-result.png`.
- Not written: any other repository file.

### Open questions (T9)

1. The Description cells are visible in the accessibility tree only. Operator may want a wider grid view for visual proof.
2. The row order (DZ before EA) is not explained by the observed UI. Not a cardinality issue; noted for the final audit.
3. AC-9 final audit and the cleanup inventory (the two authorized rows and the preexisting objects left untouched) are the remaining step. The operator should confirm whether AC-9 should be completed in this run or in a separately authorized documentation task.

---

## T10 — Final evidence audit (cycle 11, documentation only; no browser call, no Mongoose change)

Task: T10, run `R-20261010-235906-HC6Q`, cycle 11, worker session `1d00d19a-0f56-49a1-a7af-2718f21b469a`, task_message_id `e637e260-82cc-4786-8320-2cd1d81f302a`.
Scope: reconcile AC-1 to AC-9 from the existing record, the 21 EXP-046 PNG captures, and the controller-generated `harness-audit-T1.md` to `harness-audit-T9.md` files (controller output, not worker prose). No browser tool, no query, no data change, no Designer, no new screenshot. The operator's cycle-3 approval of the AC-3 gate (including the caption-prefixed count token) is preserved and not reopened.

### 1. Chronology (observed)

| Step | Task | Observed action | Result | Source |
|---|---|---|---|---|
| 1. Initial zero-record gate (Refresh) | T1 | One toolbar Refresh, empty criteria, no retained filter indicator | One starred placeholder; both inputs blank; status `Unit of Measure (Object 1 of 1)`; Save disabled | `T1-gate-after-one-refresh-empty-criteria.png`; `harness-audit-T1.md` (one Refresh click) |
| 2. Initial zero-record gate (Filter in Place + F4) | T2 | Filter in Place, criteria inspected blank, one F4 | Same state; filter mode exited; no unstarred row | `T2-fip-criteria-state-before-f4.png`; `T2-after-one-f4-empty-criteria-query.png`; `harness-audit-T2.md` (FiP click, F4 key once) |
| 3. EA / Each entry | T3 | Two plain fills (`EA`, `Each`) and two focus-move clicks inside the placeholder row; no Save | Row shows `EA` and `Each`; status `(Object 1 of 1)`; Save enabled after commit | `T3-first-record-EA-Each-staged-before-save.png`; `harness-audit-T3.md` |
| 4. One New | T4 | One toolbar New click | Two rows; row 1 EA / Each; row 2 blank and current; status `(Object 2 of 2)`; Save enabled; no message | `T4-after-one-new-click.png`; `harness-audit-T4.md` (New click once) |
| 5. DZ / Dozen entry | T5 | Two plain fills (`DZ`, `Dozen`) and two focus-move clicks inside row 2; no Save | Row 2 shows `DZ` and `Dozen`; two rows; status `(Object 2 of 2)`; Save enabled | `T5-both-rows-staged-EA-Each-DZ-Dozen-before-save.png`; `harness-audit-T5.md` |
| 6. One toolbar Save | T6 | One click on toolbar Save; no retry | Stars cleared; Save disabled; no message or prompt; status `(Object 2 of 2)`; Unit of Measure input greyed | `T6-pre-save-two-rows-staged.png`; `T6-post-save-settled-result.png`; `harness-audit-T6.md` (Save click once) |
| 7. Normal Form close | T7 | One click on `Close Panel FX_UMs` | FX_UMs tab absent; no save, discard, authentication or validation prompt; Property Classes became active (not touched) | `T7-pre-close-state.png`; `T7-post-close-state.png`; `harness-audit-T7.md` |
| 8. Native reopen | T8 | One toolbar Open; one Select Form match (`FX_UMs` / `FX_UMs`); one OK | Reopened `FX_UMs` tab; one starred blank placeholder; blank inputs; status `(Object 1 of 1)`; saved rows NOT loaded on open | `T8-select-form-one-match-before-select.png`; `T8-reopened-fx-ums-after-one-open-ok.png`; `harness-audit-T8.md` |
| 9. Post-reopen blank-criteria F4 query | T9 | Filter in Place (criteria blank), then one F4 | Settled result: row 1 DZ / Dozen, row 2 EA / Each; no placeholder; status `Description (Object 1 of 2)`; Get More Rows disabled; Save disabled; no filter indicator | `T9-pre-query-reopened-placeholder.png`; `T9-filter-in-place-criteria-state-before-f4.png`; `T9-after-one-f4-empty-criteria-query-result.png`; `harness-audit-T9.md` (F4 key once) |

Recovery result (step 9): row 1 `DZ` / `Dozen`; row 2 `EA` / `Each`. Count token `(Object 1 of 2)`. No blank placeholder. Get More Rows disabled. Save disabled. No retained filter indicator. Row order (DZ before EA) is observed; its cause is **unresolved** (not explained by the UI; EA was entered first).

### 2. Acceptance matrix (AC-1 to AC-9)

| AC | Verdict | Exact supporting evidence | Limits of the observation |
|---|---|---|---|
| AC-1 Preflight | **Supported** | `T1-preflight-initial-state.png` (authenticated Web Client, FX_UMs selected, identity bar, Unit of Measure and Description fields, no prompt, Save disabled); `T3-pre-entry-placeholder-blank.png`; `T9-pre-query-reopened-placeholder.png`. The User-scope FX_UMs definition was established in EXP-045 (cited, not re-read here). | The Designer tab was not re-observed in EXP-046. Authentication is shown by the identity bar and the absence of a sign-in screen, not by an auth record. |
| AC-2 Field mapping | **Supported with limit** | Runtime captions `* Unit of Measure` (grid header and field label, required marker) and `Description` in T1, T3, T5, T8 and T9 snapshots. Designer bindings `object.FX_UM` and `object.FX_Description` and the required marker from EXP-045 T1 and T14 (cited). No unrelated field was selected for entry; only the two inputs were typed into. | The runtime-to-binding link was **inferred** from captions, the required marker and prior Designer evidence. Edit > Find Value in Collection was not used (not needed, because captions agreed). Not directly observed at runtime. |
| AC-3 Empty-collection gate | **Supported (operator-accepted, cycle 3)** | `T1-gate-after-one-refresh-empty-criteria.png` and `T2-after-one-f4-empty-criteria-query.png` (one starred placeholder row, blank inputs, Save disabled, status `Unit of Measure (Object 1 of 1)`); `T2-fip-criteria-state-before-f4.png` (criteria blank, no retained filter before F4); `harness-audit-T1.md` (one Refresh) and `harness-audit-T2.md` (FiP click, F4 once). | The caption prefix `Unit of Measure ` precedes the count token. Per the operator clarification and the cycle-3 approval, the prefix does not affect the gate. Emptiness is the UI's zero-record indication for the primary collection as displayed; it is not a database read. Hidden criteria beyond the two bound fields cannot be ruled out from the UI. |
| AC-4 First record (EA / Each) | **Supported at UI level** | Tree rows `gridcell "EA"` and `gridcell "Each"` (T3 snapshot after the focus move; carried in T4, T5 and T6 snapshots); `T3-first-record-EA-Each-staged-before-save.png` shows a starred row with `EA` in the key column and `Each` in the Description input. | The Description cell `Each` is visible only in the accessibility tree. The screenshot clips the column. |
| AC-5 Second record (DZ / Dozen) | **Supported at UI level** | Tree rows: row 1 `EA` / `Each` and row 2 `DZ` / `Dozen` (T5 and T6 pre-Save snapshots); `T5-both-rows-staged-EA-Each-DZ-Dozen-before-save.png` and `T6-pre-save-two-rows-staged.png` show two starred rows with keys `EA` and `DZ`. No third row. | Descriptions `Each` and `Dozen` are from the tree only (clipped). Distinct keys are visible. |
| AC-6 Save | **Supported at UI level** | `harness-audit-T6.md` shows one Save click (order 4) and no retry; `T6-post-save-settled-result.png`: stars cleared, Save disabled, no message, alert or prompt, status `Unit of Measure (Object 2 of 2)`. | No explicit success message in this UI. "Saved" is inferred from the state change. This is the click's execution plus a UI state change. It is not a database write and not a durability result. The greyed Unit of Measure input after Save is visual only; read-only enforcement was not tested. |
| AC-7 Runtime lifecycle | **Supported at UI level** | Close: `harness-audit-T7.md` (one `Close Panel FX_UMs` click); `T7-post-close-state.png` (tab absent, no prompt). Reopen: `harness-audit-T8.md` (one toolbar Open, one Select Form OK, one native reopen); `T8-reopened-fx-ums-after-one-open-ok.png` (identity `FX_UMs`, captions, placeholder, status `(Object 1 of 1)`, no prompt). | Closed and reopened state are UI observations. Reopen is one native event in one session. Not cross-session. |
| AC-8 Recovery | **Supported at same-session runtime UI level, cardinality qualified** | `T9-after-one-f4-empty-criteria-query-result.png` and the post-F4 accessibility snapshot: exactly two populated rows, `DZ` / `Dozen` and `EA` / `Each`, distinct keys; no blank placeholder; no other row; status `Description (Object 1 of 2)`; Get More Rows disabled; no filter indicator; Save disabled; no unsaved-change indication. `harness-audit-T9.md` (F4 once, no Refresh). | Cardinality is the loaded view in one session, not a stored-row count. "Exactly two stored rows" is **not** claimed. The Description values are from the tree only. The reopen loaded no rows until this query. |
| AC-9 Final evidence audit | **Supported (this section)** | This section; the chronology above; the inventory below; the counts below; the confinement statement below. | Observed only, with the database-durability and cross-session limits stated below. |

**Overall:** all nine checks are supported at the same-session runtime UI level, with the limits in the table. The evidence supports AC-8 without claiming stored-row cardinality. No check is supported by a database read.

### 3. Inventory

**Authorized data rows (two; created by this run):**

| Row | FX_UM | FX_Description | Key evidence | Description evidence | Status |
|---|---|---|---|---|---|
| A | `EA` | `Each` | Screenshot (keys visible, T3, T4, T5, T6); tree (`gridcell "EA"` and `gridcell "Each"`) | Tree only | Saved by one toolbar Save (T6); recovered in the post-reopen query (T9) |
| B | `DZ` | `Dozen` | Screenshot (keys visible, T5, T6, T7, T9); tree (`gridcell "DZ"` and `gridcell "Dozen"`) | Tree only | Saved by the same Save (T6); recovered in the post-reopen query (T9) |

No third record, no other value, and no modified field was observed. Only FX_UM and FX_Description were typed into.

**Preexisting objects (left untouched, as far as the evidence supports):**

| Object | State at the end of EXP-046 | Evidence | Limit |
|---|---|---|---|
| FX_UMs runtime Form (User scope) | Closed once and reopened once; still open in tab 0 | T7, T8, T9 snapshots and screenshots | Definition cited from EXP-045; not re-read here |
| FX_UMs IDO and dbo.FX_UMs table | Not edited. No IDO or table view was opened in EXP-046 | No EXP-046 action targeted them; tool history shows no IDOs or Sql Tables edit | Not re-read in EXP-046; the table was accessed only through runtime rows |
| FX_UMBase property class | Unchanged: still checked out to the operator (`Locked By anton.ramos@3mworks.com.ph`), Label String ID `FX_sUM`, Revision 1, Check In and Undo Check Out present but not clicked | Viewed in the Property Classes tab in T7 and T8 snapshots | Viewed only; not checked in or out by EXP-046 |
| FX_sUM and FX_sDescription string resources | Not accessed in EXP-046 | — | Not re-read |
| Designer (tab 1) | Not used in EXP-046 | Every EXP-046 task recorded no Designer action | Not re-observed |
| FX_HelloWorld01 runtime tab and dbo.FX_HelloWorld01 rows FX001 / FX002 (EXP-042-R3) | Tab left open and not used; rows not touched | Tab appears in every snapshot | Not re-read |
| Property Classes, IDOs, Sql Tables, Sql Columns runtime tabs | Left open. Property Classes was activated by the T7 close and not edited | T7 and T8 snapshots | — |

### 4. Counts (cumulative, reconciled to the controller audits)

| Operation | Count | Limit | Reconciliation |
|---|---|---|---|
| Record insertions (EA / Each, DZ / Dozen) | **2** | 2 | Typing: 4 plain fills (`EA`, `Each`, `DZ`, `Dozen`). The EA placeholder was the pre-existing add-mode row; the DZ placeholder was created by the single New. |
| Toolbar New | **1** | — | `harness-audit-T4.md` (order 4) |
| Toolbar Save clicks | **1** | 1 | `harness-audit-T6.md` (order 4). No retry. |
| Form-tab closes | **1** | 1 (authorized) | `harness-audit-T7.md` (order 4) |
| Native reopens (toolbar Open + Select Form OK) | **1** | 1 (authorized) | `harness-audit-T8.md` (Open click order 2; OK click order 6) |
| Post-reopen collection queries (Filter in Place + F4) | **1** | 1 (F4 once; no Refresh) | `harness-audit-T9.md` (FiP click order 4; F4 key order 8) |
| Earlier zero-record gate queries (T1 Refresh; T2 FiP + F4) | **1 Refresh + 1 FiP/F4** | — | `harness-audit-T1.md`, `harness-audit-T2.md` |
| Focus-move clicks inside a record (no commit by Tab or Enter) | **4** (T3: 2; T5: 2; the T4 New click is counted separately) | — | `harness-audit-T3.md`, `harness-audit-T5.md`. Recorded for transparency: the brief permitted click-to-change-focus. |
| Plain fills (`browser_type`, authorized) | **4** | Only the authorized values | `harness-audit-T3.md` (flagged `browser_type` 2) and `harness-audit-T5.md` (flagged `browser_type` 2). Flagged only by the prohibited-tool audit; the brief authorizes these fills. |
| Accessibility snapshot calls (all tasks) | T1 2, T2 3, T3 5, T4 2, T5 5, T6 2, T7 2, T8 3, T9 3 = **27** | — | Each task's snapshot list reconciles to its `harness-audit` file. |
| Screenshots (worker-saved PNG) | T1 2, T2 2, T3 4, T4 2, T5 2, T6 2, T7 2, T8 2, T9 3 = **21** | — | The 21 PNG files under `evidence/EXP-046/` |
| Browser evaluate, run-code, JavaScript, direct SQL, internal API | **0** | — | No such tool was used; the audits show none |
| Designer opens, reloads, navigation, session recovery | **0** | — | — |
| Dialogs or prompts answered | **0** | — | — |
| Portal banner dismissals | **0** | — | No banner appeared |
| Ref-not-found errors and recovery snapshots | **0** | — | — |
| Record edit errors (worker-side, no browser effect) | 2 (T4 and T6 append anchors not found; retried with exact anchors) | — | `harness-audit-T4.md` (order 9) and `harness-audit-T6.md` (order 9). Both produced no browser effect. |

### 5. Evidence limitations and gaps (reported, not filled)

- **Description cells are not visible in any screenshot.** The Description column is clipped in every EXP-046 capture (T3 to T9). `Each` and `Dozen` are established by the accessibility tree only. The brief permitted this distinction, but a wider grid view was never captured. This is the main visual gap.
- **Runtime binding (AC-2) not directly observed.** Find Value in Collection was not used. The captions and prior Designer evidence agree, but a runtime-level binding check was not performed.
- **Save outcome.** No explicit success message appeared. Save is inferred from the stars clearing, Save becoming disabled, and the status count. The grey Unit of Measure input after Save was not tested for read-only enforcement.
- **Row order.** DZ appears before EA after the post-reopen query. The cause is not established (IDO sort, key order, or a client default). Cardinality is not affected.
- **Status count meaning.** `(Object 1 of 2)` has total 2 (matching the two rows); the numerator is the current-record position, as accepted in EXP-042-R3. It is not an independent stored-row count.
- **No database read.** Nothing in this run reads `dbo.FX_UMs` directly. Durability is unverified.

### 6. Repository confinement

- Written by EXP-046 (all tasks): `experiments/EXP-046-hello-world-part-2-two-fx-ums-test-records-and-run.md` (created in T1; edited T2 to T10).
- Written by EXP-046 (evidence): 21 PNG files under `evidence/EXP-046/` (T1 x2, T2 x2, T3 x4, T4 x2, T5 x2, T6 x2, T7 x2, T8 x2, T9 x3).
- Not written by EXP-046: any other repository file. The `harness-audit-T*.md` files are controller-generated. The `evidence/playwright/` snapshots and console logs are browser-tool output outside `evidence/EXP-046/`. No recipe, AGENTS.md, memory, `tools/` file or other experiment record was edited. `tools/` was not read.
- T10 writes: this record only. No new screenshot and no other file.

### 7. Classification

- **Observed only.** One execution. Same-session, Web Client UI-level observations.
- **Not replay_verified.** The procedure is a **candidate_procedure** only.
- **Database durability:** untested. No `dbo.FX_UMs` read was performed.
- **Cross-session persistence:** untested. The reopen and the recovery query were in the same session.
- **Replay verification:** not performed.

### 8. Readiness

All nine acceptance checks have recorded support at the stated same-session UI level. The record is **ready for coordinator acceptance**, subject to the limits in section 5. Two items the coordinator may wish to decide: whether to capture a wider grid view for the Description cells (a separate, authorized observation), and whether to authorize a database read of `dbo.FX_UMs` (out of this experiment's scope so far).

### 9. Browser state

The reopened FX_UMs runtime was left unchanged. It was not queried, saved, closed or edited in T10. No browser call was made in T10.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (run R-20261010-235906-HC6Q, completed/accepted in cycle 12, 10 of 12 worker tasks). Observed only, not replay-verified. Created, for later cleanup:
- **Rows in `dbo.FX_UMs`:** `EA` / `Each` and `DZ` / `Dozen`. They were entered one at a time through the runtime Form FX_UMs, saved by one toolbar Save (T6) and recovered after a close/reopen and one empty-criteria query (T9).

Operator screenshot review:
- `T2-after-one-f4-empty-criteria-query.png`: one row with the blue star, both inputs blank, status "Unit of Measure (Object 1 of 1)". This is the zero-record gate.
- `T6-post-save-settled-result.png`: after the Save, rows EA and DZ, Save disabled, and the key input greyed for the saved row. The status reads "Unit of Measure (Object 2 of 2)", so the count-rule prediction held.
- `T9-after-one-f4-empty-criteria-query-result.png`: after the reopen and query, two rows (DZ, EA, in key order), no placeholder, status "Description (Object 1 of 2)", DZ shown as "Dozen". The screenshot clips the grid's Description column. EA's value "Each" comes from the accessibility snapshot (`gridcell "Each"`).

Operator decision during the run:
1. **Clarification:** the status bar puts the focused field's caption in front of the count (for example "Unit of Measure (Object 1 of 1)"). The gate compares only the count in parentheses. The EXP-042-R3 inputs had no captions, so no prefix appeared there.

Learned (observed):
1. **Count rule confirmed on a second Form:** in add mode, "(Object 1 of 1)" with only the starred blank row means zero persisted records. After the Save the count matched the persisted rows.
2. **Status-bar format:** the text is "<focused field caption> (Object n of N)".
3. **Key field locked after Save:** a saved record's key field (FX_UM) is shown greyed (read-only).
4. **Rows load only on request:** a reopened runtime Form starts in add mode and does not load saved rows until a query (Filter in Place + F4, or Refresh). This matches EXP-042-R3.
5. **Typed values reach the grid on blur:** a typed value reaches the grid cell only after focus leaves the input.

Limits:
- Only the same session, at the UI level.
- No database read.
- The EA description after reopen comes from the accessibility tree, not from the screenshot.

Next in Part 2: the FX_UM property class with a domain on IDO FX_UMs (Domain Property FX_UM, Additional List Properties FX_Description), then FX_ItemBase and FX_Cost, then FX_Items.
