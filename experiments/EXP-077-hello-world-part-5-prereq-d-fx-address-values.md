# EXP-077 — Hello World Part 5 Prerequisite D: enter Address values for FX001 and FX002 at runtime

**Final disposition (after T6, 2026-10-13; final acceptance report `evidence/EXP-077/T6-final-acceptance-report.md`): ACCEPTED AS OBSERVED (worker recommendation; operator decision authoritative). AC-1 to AC-7 supported at the same-session, UI level. NOT replay_verified. Same-session runtime recovery does NOT independently prove database durability in `dbo.FX_HelloWorld01`.** Final counts reconcile: 2 toolbar Refreshes, 2 Address fills, 2 Tab presses, 0 Enter, 1 toolbar Save, 1 clean runtime close, 1 Select Form reopen, 0 New/Delete, 0 Code/Label edits, 0 Designer actions, 0 metadata changes, 0 unloads, 0 re-logins, 0 checkout actions. T6 made no browser calls.

**Current status (after T5, 2026-10-13; EXPERIMENT FUNCTIONALLY COMPLETE AT THE SAME-SESSION UI LEVEL: AC-5 and AC-6 SUPPORTED AS OBSERVED).** The clean runtime Form was closed once (no prompt), reopened once through Form > Open > Select Form, and refreshed once. After that single Refresh the runtime shows exactly two records: FX001 / `Factory test one` / `FX001` / Address `1 Factory Street` (status `(Object 1 of 2)`), and FX002 / `Factory test two` / `FX002` / Address `2 Factory Street` (status `(Object 2 of 2)` after one row-number click), with Save disabled, no third row and no dirty markers. This is same-session UI recovery only. It is **not** database durability or replay verification.

**Earlier status (after T4, 2026-10-13; ONE TOOLBAR SAVE PERFORMED; AC-4 SUPPORTED AS OBSERVED; Save now DISABLED; the runtime Form is open and clean; NOT yet closed or reopened).** After one ordinary toolbar Save (no prompt, alert or validation text), Save is disabled, both row dirty markers are gone, FX001 still shows `1 Factory Street`, and FX002 shows `2 Factory Street` after one row-number click (Code `FX002`, Label `Factory test two`, `(Object 2 of 2)`, no third row). Native response: none visible beyond the Save button going disabled (`T4-01`, `T4-02`). This is UI evidence of a completed Save only, not database durability. Next task (not performed here): close the clean Form once, reopen once through Select Form, one Refresh, verify both rows' Code, Label and Address and the status count.

**Earlier status (after T3, 2026-10-13; BOTH ADDRESSES ENTERED AND VERIFIED BEFORE SAVE, UNSAVED; NO SAVE PERFORMED).** Pre-Save state (observed): FX001 / `Factory test one` / Code `FX001` / Address `1 Factory Street`; FX002 / `Factory test two` / Code `FX002` / Address `2 Factory Street` (verified on FX002 before FX001 was reselected, see T3); exactly two rows; status `(Object 1 of 2)` with FX001 current; toolbar Save **enabled**; dirty diamonds visible on both row headers (`T3-02`). AC-3 is supported as observed (UI level, same session, unsaved). The Form is left open and dirty for the next task (one toolbar Save, then close/reopen and recovery Refresh). No Save, no Refresh, no New, no Delete, no close or reopen, no Code or Label edit, no Designer action in T3.

**Earlier status (after T2, 2026-10-13; FX001 ADDRESS FILLED AND VERIFIED, UNSAVED; STOPPED BEFORE FX002).** FX001 / `Factory test one` Address now shows `1 Factory Street` after one plain fill and one Tab. Code `FX001` and Label `Factory test one` are unchanged, status `(Object 1 of 2)`, toolbar Save **enabled** (dirty). AC-2 is supported as observed (same session, UI level; not saved, not persisted). FX002 was not edited. No Save, no Refresh, no New, no Delete, no close or reopen, no Code or Label edit, no Designer action. The Form is left open and dirty for the next task (FX002 fill, then one Save). T1 (read-only preflight, AC-1) is preserved below.

**Earlier status (after T1, 2026-10-13; READ-ONLY PREFLIGHT COMPLETE; STOPPED BEFORE ANY FILL).** The FX_HelloWorld01 runtime Form was in use (already open, clean). One toolbar Refresh returned exactly two rows, `Factory test one` / `FX001` and `Factory test two` / `FX002`, each with an empty Address, status `(Object n of 2)` and Save disabled. AC-1 is supported as observed (same session, UI level). No Address was filled, no Save, no New, no Delete, no close or reopen, no Code or Label edit, no Designer action. The remaining steps (FX001 fill, FX002 fill, one Save, close/reopen, recovery Refresh) are for the next task.

## Run identity

- Run `R-20261013-230351-ESoP`, experiment EXP-077, cycle 0, task **T1** (read-only preflight; stop before any fill).
- Worker session `7771dc15-b498-4323-aebf-372e1070e7ba`; task_message_id `8361621c-1e9f-469f-aa31-078df98f3f53`.
- Date 2026-10-13. Mode: LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope **User** (Forms only). Target: `FX_HelloWorld01` Form, IDO `FX_HelloWorld01`, table `dbo.FX_HelloWorld01`, Address values of rows FX001 and FX002.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (visible in the screenshots; no credential value recorded).
- Brief commits (session-start git log, not re-verified; no shell): `bb0b0ed` (EXP-077 approved brief), `7874344` (draft brief). This record did not exist at the start of T1 (the Read and Glob for `EXP-077*` returned nothing); it was created by the T1 worker at the brief's path.

## Objective (T1 scope)

Confirm the starting state of the runtime FX_HelloWorld01 Form, run one Refresh, and verify exactly two rows with empty Address fields, status count and Save disabled. **Stop before any fill** (the brief's rule: fill only after exactly the two expected rows with empty Address are demonstrated after one Refresh; the preflight passed, but the T1 instruction stops before the first fill).

## Sources reviewed (before the first browser action)

- `AGENTS.md` (LEARNING MODE; FX_ scope extension; safety; experiment rules; browser automation, recovery and evidence rules).
- `docs/mongoose/transcripts/hello-world-pt5.md` header and Sections 1–2 (lines 1–111). Context only, unverified transcript. Section 2 step 5 maps the joined customer Address to a label string (`s address`). Under the factory rules the tutorial's unprefixed names and Site Default scope are not used here; FX_Address (EXP-074/075) and FX_AddressEdit (EXP-076) are the adapted objects.
- `experiments/EXP-076-hello-world-part-5-prereq-c-fx-address-form-field.md`: FX_AddressEdit (Multi-Line, Binding `object.FX_Address`, caption `FX_sAddress` = `Address`) added to the User-scope FX_HelloWorld01 Form (Designer Save count 1 in T11). T11/T12 runtime presentation: after one Refresh, FX001 and FX002 show the caption `Address:`, a box taller than the Label and Code fields, and empty values. Note: the multi-line property was not DOM-proven (EXP-076 T12, observation 3); the FX_Address binding was not read back at runtime.
- `experiments/EXP-042-R3-hello-world-part-1-two-test-records-replay.md`: runtime FX_HelloWorld01 has uncaptioned Label and Code inputs (upper = FX_Label, lower = FX_Code, required); toolbar Refresh loads the saved rows; a reopen opens in add mode and the rows load only after Refresh; FX_Code is read-only after Save (visual corroboration only); status count `(Object n of N)`, where the numerator is the current-record position (after Refresh it is 1).
- `experiments/EXP-046-hello-world-part-2-two-fx-ums-test-records-and-run.md`: count rule (add mode counts the uncommitted placeholder); typed values reach the grid cell on blur (a focus move commits the grid row; a plain fill alone did not update the grid).
- Tool output: `browser_tabs` list (taken before the first select).

Not read: `tools/` (intentionally unreadable); the secrets file; no shell or git commands.

## Browser preflight (AC-1)

| Item | Observed | Evidence |
| --- | --- | --- |
| Tab list (before the first select) | Tab 0: Infor Mongoose Application Development Framework (Web Designer, `mode=designer`, not selected, not touched). Tab 1: Mongoose Web Client (`favoriteContext=FX_HelloWorld01`, current). | `browser_tabs` list output |
| Tab selected | Tab 1 (Web Client), by one select after the list. Tab 0 was never selected, clicked or captured. | `browser_tabs` select output |
| Session | Usable. No Session Expired modal, no Infor sign-in page, no portal notification banner, no native dialog. Re-login count 0. | snapshot 1 |
| Runtime FX_HelloWorld01 | Already open as the selected Web Client tab (`FX_HelloWorld01` tab and tabpanel). No Form was opened by this worker. Clean at the start: toolbar Save disabled. Status `(Object 2 of 2)`, with FX002 the current record. Other Web Client tabs present and not touched: FX_Items, Property Classes, IDO Projects, FX_Orders, Sql Tables, Sql Columns, IDOs. | snapshot 1; `preflight-00` |
| As-found values before Refresh | Current record `Factory test two` / `FX002` (Code read-only grey box); Address box visible with caption `Address:`, empty. | `preflight-00` |
| After one toolbar Refresh | **Exactly two rows**: `gridcell "1"` / `Factory test one` / `FX001`; `gridcell "2"` / `Factory test two` / `FX002`. No third row. Status `(Object 1 of 2)` (current record 1). Save **disabled** (`[disabled]`, toolbar `f1e28`). Tooltip `Refresh`. No dialog, no error. | snapshot 2; `preflight-01` |
| Row 1 (FX001) Address | Current record after Refresh: Label `Factory test one`, Code `FX001`, Address box **empty** (accessibility textbox has no value; screenshot shows an empty box under `Address:`). | snapshot 2; `preflight-01` |
| Row 2 (FX002) Address | Made current by one click on its grid cell (`Factory test two`). Label `Factory test two`, Code `FX002`, Address box **empty**. Status `(Object 2 of 2)`. Save disabled (read-only `find` "Save": `[disabled]`). | snapshot 3 (targeted to `f1e125`); `preflight-02`; `find` "Save" |

## Baseline (AC-1)

| Row | Label (FX_Label) | Code (FX_Code) | Address (FX_Address) | Current-record status |
| --- | --- | --- | --- | --- |
| 1 | `Factory test one` | `FX001` | empty | `(Object 1 of 2)` after Refresh |
| 2 | `Factory test two` | `FX002` | empty | `(Object 2 of 2)` when current |

- Row count: exactly 2 (the row-header grid shows `1` and `2`; the Label and Code grid shows two rows).
- Save: disabled before the Refresh, after the Refresh, and after the row click.
- Address presentation: the runtime Address box is the EXP-076 `Address:` field. Its multi-line property is not DOM-proven (no multiline attribute in the accessibility snapshot); the taller box is the only visual evidence.
- The grid shows Label and Code only; Address is readable only for the current record (form area).

## Observations (observed only)

1. The runtime FX_HelloWorld01 Form was already open and clean at the start of this task. It is the runtime tab left by EXP-076 T12, which reopened it. This worker did not open it; the preflight rule (use the open clean tab) applied, so no Select Form was opened.
2. As found, the current record was row 2 (`(Object 2 of 2)`). The one Refresh moved the current record to row 1 (`(Object 1 of 2)`), which matches the EXP-042-R3 and EXP-046 numerator behaviour.
3. Clicking the FX002 grid cell made the row current and placed the **Label** grid cell into an active in-place text editor (the accessibility snapshot shows `textbox [active]` with `Factory test two` inside the grid, ref `f1e241`). The text was not changed; no key was pressed; Save remained disabled. The next task must not type until the focus is moved deliberately (for example by a click into the Address box). The operator should know about this focus state before the fill steps.
4. The FX_Code box is grey for both rows (read-only style, the same as EXP-042-R3). Not tested for read-only enforcement.
5. The left row-header grid and the Label/Code grid agree on two rows. No third row exists.

## Acceptance checks (T1)

| AC | Status (T1) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported (observed, UI level, same session).** Sources reviewed; session usable; FX_HelloWorld01 runtime Form in use; after one Refresh exactly FX001 / Factory test one and FX002 / Factory test two with empty Address; Save disabled. | `preflight-00` (as found), `preflight-01` (after Refresh, row 1 current), `preflight-02` (row 2 current); `find` "Save" | Address is empty by accessibility and screenshot; the FX_Address binding is not read back at runtime. Same session only. No database read. |
| AC-2 to AC-7 | **Not started** (the fill, Save, close/reopen and recovery steps are the next task). | — | — |

## Action audit (T1; exact counts; cumulative for this task)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer tab 0 select: **0**. |
| `browser_snapshot` (untargeted) | 2 | After the select (snapshot 1); after the Refresh (snapshot 2). |
| `browser_snapshot` (targeted, `f1e125`) | 1 | After the FX002 row click (snapshot 3). Read only. |
| `browser_find` (read-only) | 1 | Text `Save`: 2 matches; toolbar Save `[disabled]`. |
| `browser_take_screenshot` | 3 | `preflight-00`, `preflight-01`, `preflight-02`. |
| Toolbar Refresh clicks | **1** | Ref `f1e35`, label `Refresh`. Planned total for EXP-077: 2 (not yet reached). |
| Grid row clicks | **1** | FX002 grid cell (ref `f1e228`, `Factory test two`), once. |
| Other clicks | 0 | — |
| Fills (`browser_type`) | **0** | No fill (planned 2 in the next task). |
| Key presses (incl. Enter, Tab, Escape, F4) | **0** | — |
| Save clicks | **0** | Planned 1 in the next task. |
| New / Delete | **0 / 0** | — |
| Runtime close / reopen / Select Form / Form open | **0 / 0 / 0 / 0** | Existing runtime tab used. Planned 1 close and 1 reopen in the next task. |
| FX_Code or FX_Label edits | **0** | — |
| Designer actions (tab 0 selected, clicked or captured) | **0** | — |
| Metadata changes, Form/IDO/property/SQL/string changes | **0** | — |
| Unloads / cache / FormSync / deployment / regeneration | **0** | — |
| Checkout, check-in, undo checkout | **0** | — |
| Browser JavaScript / evaluate / run-code (worker-authored) | **0** | Tool outputs echo a harness-generated code wrapper for each click and screenshot. These were not authored by the worker. |
| Console or network reads | **0** | — |
| Direct URL navigation / refresh / restart | **0 / 0 / 0** | — |
| Re-login (session-expiry procedure) | **0** | Session stayed usable. |
| Dialogs seen / answered | **0 / 0** | — |
| Portal banner dismissals | **0** | None visible. |
| Ref-not-found errors / fresh recovery snapshots | **0 / 0** | — |
| Timeouts | **0** | — |
| Shell commands | **0** | Not used (Bash disabled for this task). |

## Worker-written-file inventory (T1)

Written by this worker in T1:

- `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` (created; this record).
- `evidence/EXP-077/preflight-00-pre-refresh-runtime-state-as-found.png`
- `evidence/EXP-077/preflight-01-after-one-refresh-row1-current-two-rows.png`
- `evidence/EXP-077/preflight-02-row2-FX002-current-address-empty.png`

Tool-generated, not worker-authored (outside this path): `evidence/playwright/` snapshot and console files written by the harness on browser events (for example `page-2026-10-13T15-04-26-552Z.yml` after the Refresh, `page-2026-10-13T15-04-39-476Z.yml` after the FX002 row click, `console-2026-10-13T15-03-58-723Z.log`). Not EXP-077 evidence.

No other file was written, edited or deleted in T1.

## Screenshot notes (what each proves and does not prove)

- `preflight-00-pre-refresh-runtime-state-as-found.png`: the FX_HelloWorld01 runtime tab (selected, title `FX_HelloWorld01`), identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, toolbar Save greyed, status `(Object 2 of 2)`, current record `Factory test two` / `FX002` (Code box grey), Address box empty under `Address:`. The Label column of the grid is clipped (`Facto`). **Proves** the as-found runtime state and Save disabled. **Does not prove** database contents or the FX_Address value; the box is empty on screen, not in the table.
- `preflight-01-after-one-refresh-row1-current-two-rows.png`: after one Refresh, row 1 current (arrow on row 1; row headers `1` and `2`), `Factory test one` / `FX001`, Address box empty, status `(Object 1 of 2)`, Save greyed. **Proves** the post-Refresh current record and empty Address for FX001 on screen, and the two-row count from the row headers. **Does not prove** row 2's content from this image (its grid cell is clipped to `Facto`); row 2 is proven by `preflight-02` and the accessibility snapshot.
- `preflight-02-row2-FX002-current-address-empty.png`: after the single FX002 row click, row 2 current; Label `Factory test two`, Code `FX002`, Address box empty; status `(Object 2 of 2)`; Save greyed. The Label grid cell shows its text highlighted, which is the in-place editor noted in observation 3. **Proves** FX002's empty Address when current and Save disabled. **Does not prove** the stored value, the multi-line property, or that no hidden text exists beyond the visible box.

## Final state (end of T1)

- Web Client tab (tab 1) selected. Runtime `FX_HelloWorld01` tab active and open. Row 2 (FX002) current; status `(Object 2 of 2)`; Save **disabled**; no dialog; no portal banner; no unsaved change.
- The Label grid cell of FX002 is in an active in-place editor (value `Factory test two`, unchanged). No key pressed. Recommended for the next task: move focus to the Address box by one click before any fill, and do not type into the grid.
- Designer tab 0 untouched (not selected since the list).
- Save count, Refresh count and all other audit counts as in the table above.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Runtime FX_HelloWorld01 was already open and clean at the start (EXP-076 T12 left it open) | **observed** (one run; `preflight-00`) |
| One Refresh returns exactly two rows FX001 / Factory test one and FX002 / Factory test two | **observed** (one run; snapshot 2, `preflight-01`) |
| Address is empty for FX001 and FX002 at the start (UI level) | **observed** (one run; accessibility and screenshots) |
| Save disabled after the Refresh and after the row click | **observed** (one run; `find` and screenshots) |
| Refresh moved the current record to row 1 (`(Object 1 of 2)`) from row 2 | **observed** (one run; consistent with EXP-042-R3 and EXP-046) |
| A grid row click activated the Label cell's in-place editor | **observed** (one run; snapshot 3) |
| The runtime Address box is multi-line | **unresolved** (box size only; not DOM-proven) |
| Row content is stored in `dbo.FX_HelloWorld01` | **unresolved** (no database read; not claimed) |
| Any replay or procedure status | **not claimed** (not replay_verified) |

Classification: **observed only (UI level, same session); not replay_verified.**

## Open questions and blockers

1. **No blocker in T1.** The preflight passed. Next permitted action (separate task, after coordinator approval as the brief requires): fill FX001 Address with `1 Factory Street` (one plain fill, one Tab), then FX002 Address with `2 Factory Street`, verify both, one toolbar Save, close and reopen the runtime once, one Refresh, and verify the recovered Address values.
2. **Grid focus state:** the FX002 Label cell is an active in-place editor from the row click (observation 3). The next task should move focus deliberately before typing, to avoid writing into a grid cell.
3. **Address multi-line and binding:** the Address box is taller than the Label and Code boxes. Multi-line presentation is inferred, and the FX_Address binding was not read back at runtime. The EXP-077 fill should show whether the value lands in the Address box after the Refresh.

---

## T2 — FX001 Address entry and verification (cycle 1; FX001 filled; unsaved; FX002 not edited)

Run `R-20261013-230351-ESoP`, experiment EXP-077, cycle 1, task T2. Worker session `7771dc15-b498-4323-aebf-372e1070e7ba`; task_message_id `a817cc22-92e0-458f-8bb0-3c810168f80c`. Bounded instruction: FX001 Address entry and verification only; no Save, no Refresh, no FX002 edit, no close or reopen.

### Steps (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any select) | Tab 0 marked `(current)` in the list output (Designer; not selected, clicked or captured by this worker); tab 1 Mongoose Web Client. | tool output |
| 2 | `browser_tabs` select index 1 (Web Client) | Succeeded. Designer tab 0 not selected. | tool output |
| 3 | Fresh untargeted snapshot | Runtime `FX_HelloWorld01` tab selected and its tabpanel visible. Save disabled. No dialog, no portal banner, no sign-in page. Status `(Object 2 of 2)`. FX002 current: its Label grid cell is an active in-place editor left from T1 (value `Factory test two`, unchanged). Address textbox empty. Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. | snapshot (tool-generated) |
| 4 | ONE click on the FX001 Label grid cell (ref `f1e164`) | **TimeoutError** after 5000 ms: "element intercepts pointer events". Playwright reported the locked grid's row-number cell (`MGRowNumber`) and the grid view and vertical splitter (`paneZero108-splitter`) as overlapping the target. The click did not land. Not retried with the same ref. | tool error output |
| 5 | Fresh untargeted snapshot (recovery allowance: 1) and screenshot `T2-01` | State unchanged after the timeout: FX002 still current, `(Object 2 of 2)`, Save disabled, Address empty. Screenshot shows the Label column clipped to about `Facto` and `ory te` under the splitter at about x 388; row 1's row-number cell `1` is visible. | snapshot; `T2-01` |
| 6 | ONE corrected click on the FX001 row-number cell (ref `f1e141`, from the snapshot of step 5) | Completed without error. | tool output |
| 7 | Read-only snapshot and screenshot `T2-02` (post-action verification; refs needed; not a recovery snapshot) | FX001 current: row-number `1` selected, Label `Factory test one` selected, Code `FX001`, Address empty. Status `(Object 1 of 2)`. Save disabled. FX002 Label is no longer an in-place editor. | snapshot; `T2-02` |
| 8 | ONE click on the Address textbox (ref `f1e185`) | Completed. | tool output |
| 9 | Read-only snapshot (post-click verification) | Address textbox `[active]`, empty. FX001 still current; status `(Object 1 of 2)`; Save disabled. | snapshot |
| 10 | ONE plain fill (`browser_type`, no `slowly`, no submit) of `1 Factory Street` into the Address textbox (`f1e185`) | Completed once. | tool output |
| 11 | ONE Tab key press (focus out; no Enter) | Completed once. Focus moved to the Label textbox (`Factory test one`, text selected; no typing). | tool output |
| 12 | Read-only snapshot and screenshot `T2-03` | Address textbox value `1 Factory Street`. Label textbox `Factory test one` (focused). Code textbox `FX001`. Status `(Object 1 of 2)`. Toolbar Save **enabled** (no `disabled` attribute; Save icon coloured in the screenshot). FX001 row-number cell shows a dirty marker (orange diamond). FX002 Label `Factory test two` and Code `FX002` unchanged in the grid. | snapshot; `T2-03` |
| 13 | Stop | No FX002 selection or fill, no Save, no Refresh, no New, no Delete, no close or reopen. Form left open and dirty. | — |

### Observations (observed only)

1. The first FX001 row click (step 4) timed out on pointer interception. The Label column of the grid is clipped by the vertical splitter, so the row's Label cell is partly covered. The row-number cell of the same row (step 6) was a working target. This is one occurrence, observed in one run; the cause is not established.
2. After the fill and Tab, the Address value is visible in the Address textbox (`T2-03`). The grid does not show an Address column, so the Address value is verified in the form textbox only.
3. The Tab moved focus to the Label textbox, which shows its text selected. No keystroke other than the Tab was sent to it.
4. Save became enabled after the fill (dirty). The dirty marker appears on the FX001 row header. No save was invoked.
5. FX002's Label grid cell was an active in-place editor from T1. It closed when FX001 became current (step 7). Its value stayed `Factory test two`.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-observed at the start of T2: session usable; runtime FX_HelloWorld01 in use; FX001 / Factory test one and FX002 / Factory test two present with empty Address; Save disabled before the fill. The T2 instruction says not to repeat the preflight Refresh; the T1 Refresh stands (`preflight-01`). | `T2-01` (state before FX001 row became current); T1 `preflight-00`–`02` | Same session. The grid cannot show Address. |
| AC-2 | **Supported (observed, UI level, same session).** FX001 Address = `1 Factory Street` after one plain fill and one Tab. Code `FX001` and Label `Factory test one` unchanged. Dirty, not saved. | `T2-02` (FX001 current, Address empty before fill); `T2-03` (value after fill and Tab, Label focused, Save enabled) | Not saved; not persisted; no database read. The fill's value is read from the form textbox. |

### Action audit (T2; exact counts)

| Action | T2 count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer select 0. |
| `browser_snapshot` (untargeted) | 5 | Steps 3, 5, 7, 9, 12. Step 5 was the one fresh recovery snapshot (after the timeout). Steps 7, 9 and 12 were read-only verification snapshots after successful actions, to obtain current refs and confirm state; they are not recovery snapshots for a Ref-not-found error (disclosed for operator review). |
| `browser_snapshot` (targeted) | 0 | — |
| `browser_find` | 0 | — |
| `browser_take_screenshot` | 3 | `T2-01`, `T2-02`, `T2-03`. |
| Clicks (succeeded) | 2 | Step 6 (FX001 row-number cell); step 8 (Address textbox). |
| Clicks (failed, timeout, no effect) | 1 | Step 4 (FX001 Label cell, ref `f1e164`). |
| Fills (`browser_type`) | 1 | Step 10 (FX001 Address `1 Factory Street`). |
| Key presses | 1 | Tab (step 11). Enter 0. Escape 0. |
| Toolbar Refresh / Save / New / Delete | **0 / 0 / 0 / 0** | — |
| Runtime close / reopen / Select Form | **0 / 0 / 0** | — |
| FX_Code or FX_Label edits | **0** | — |
| Designer actions (tab 0 selected, clicked or captured) | **0** | — |
| Metadata changes; unloads; cache; FormSync; deployment; checkout | **0** | — |
| Browser JavaScript / console / network; direct navigation; refresh; restart | **0** | Tool output shows a harness-generated code wrapper for each action; not worker-authored. |
| Re-login | **0** | Session stayed usable. |
| Dialogs seen / answered; portal banner dismissals | **0 / 0** | — |
| Ref-not-found errors | **0** | — |
| Timeout errors | **1** | Step 4. |
| Fresh recovery snapshots used | **1 of 1** | Step 5. |
| Corrected visible inspections | **1** | `T2-01` (step 5), then one corrected click (step 6). |

### Cumulative audit (EXP-077, T1 + T2; exact counts)

| Action | T1 | T2 | Total | Planned for EXP-077 |
| --- | --- | --- | --- | --- |
| `browser_tabs` list | 1 | 1 | 2 | — |
| `browser_tabs` select | 1 | 1 | 2 | — |
| `browser_snapshot` untargeted | 2 | 5 | 7 | — |
| `browser_snapshot` targeted | 1 | 0 | 1 | — |
| `browser_find` | 1 | 0 | 1 | — |
| Screenshots | 3 | 3 | 6 | — |
| Toolbar Refresh | 1 | 0 | **1** | 2 (one remaining) |
| Fills | 0 | 1 | **1** | 2 (one remaining, FX002) |
| Toolbar Save | 0 | 0 | **0** | 1 |
| Runtime close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 |
| Grid row clicks (succeeded) | 1 | 1 | **2** | — |
| Address field clicks (succeeded) | 0 | 1 | 1 | — |
| Clicks (failed, no effect) | 0 | 1 | 1 | — |
| Key presses (Tab only; Enter 0) | 0 | 1 | 1 | — |
| New / Delete | 0 / 0 | 0 / 0 | **0 / 0** | 0 / 0 |
| Code or Label edits | 0 | 0 | **0** | 0 |
| Designer actions | 0 | 0 | **0** | 0 |
| Metadata changes; unloads | 0; 0 | 0; 0 | **0; 0** | 0; 0 |
| Re-login | 0 | 0 | **0** | — |

### Worker-written-file inventory (T2)

- `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` (edited: status header and this T2 section).
- `evidence/EXP-077/T2-01-after-row1-click-timeout-state-inspection.png` (state after the timeout; FX002 current; Address empty).
- `evidence/EXP-077/T2-02-fx001-current-before-address-focus.png` (FX001 current; Address empty; Save disabled).
- `evidence/EXP-077/T2-03-fx001-address-1-factory-street-after-fill-and-tab.png` (FX001 Address `1 Factory Street`; Save enabled; Label focused).

No other file was written in T2. The T1 files `preflight-00`, `preflight-01` and `preflight-02` are preserved unchanged. Harness-generated `evidence/playwright/` files are not EXP-077 evidence.

### Screenshot notes (what each proves and does not prove)

- `T2-01`: runtime FX_HelloWorld01 (selected), identity bar, Save greyed, `(Object 2 of 2)`, FX002 current, Address empty. **Proves** the state after the timeout (nothing changed). **Does not prove** the FX001 value or that the Label cell is fully visible (it is clipped).
- `T2-02`: FX001 current (row `1` selected), Label `Factory test one`, Code `FX001`, Address box empty, `(Object 1 of 2)`, Save greyed. **Proves** the FX001 identity and the empty Address before the fill. **Does not prove** anything after the fill.
- `T2-03`: after the fill and Tab: Address `1 Factory Street`; Label `Factory test one` (focused, selected); Code `FX001`; `(Object 1 of 2)`; Save coloured (enabled); dirty marker on the FX001 row header. **Proves** the Address value in the form, the unchanged Label and Code on screen, and the dirty state. **Does not prove** that the value is stored, that it appears in the grid (no Address column), or the multi-line property.

### Final state (end of T2)

- Web Client tab (tab 1) selected. Runtime `FX_HelloWorld01` tab active and open. FX001 current; status `(Object 1 of 2)`.
- FX001 Address `1 Factory Street` (unsaved; dirty). Label textbox has focus with its text selected; no typing after the Tab.
- FX002 Address empty and unchanged; FX002 not edited. Save **enabled** (dirty). No dialog; no portal banner; no in-page prompt.
- Designer tab 0 not touched.
- The dirty Form was not saved or closed (per the brief).

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| A plain fill of `1 Factory Street` into the FX001 Address textbox, followed by one Tab, shows the value in the Address textbox with Save enabled and Code and Label unchanged | **observed** (one run; `T2-03`) |
| A grid row click on the FX001 Label cell timed out on pointer interception by the splitter and the locked grid; the row-number cell of the same row worked | **observed** (one run); cause **unresolved** (suspected environment or layout overlap) |
| FX002's Label grid cell remained an in-place editor after T1 and closed when FX001 became current | **observed** (one run) |
| The Address value is stored in `dbo.FX_HelloWorld01` | **unresolved** (not saved; no database read) |
| Any replay or procedure status | **not claimed** (not replay_verified) |

Classification: **observed only (UI level, same session); not replay_verified.**

### Open questions and next step (T2)

1. **Blocker:** none. One pointer-interception timeout (step 4) was handled by one fresh snapshot, one screenshot and one corrected click on the row-number cell. Suspected environment or layout overlap; the operator may want to check the Label column clipping. The EXP-077 next steps are unchanged.
2. **Next permitted action (separate task, not performed here):** FX002 Address `2 Factory Street` by one plain fill and one Tab, verify FX001 still shows `1 Factory Street` after reselecting it with one row click, no third row, then exactly one toolbar Save.
3. **Note for the next task:** the Form is dirty with FX001's value. The row-number click works as a row selection; the Label-cell click did not.

---

## T3 — FX002 Address entry and pre-Save verification of both records (cycle 2; both unsaved; no Save)

Run `R-20261013-230351-ESoP`, experiment EXP-077, cycle 2, task T3. Worker session `7771dc15-b498-4323-aebf-372e1070e7ba`; task_message_id `7b8e1700-161b-4ff5-814c-60f4226a8e01`. Bounded instruction: FX002 Address entry and verification of both records before Save; one row-number click for FX002, one fill, one Tab, one row-number click back to FX001; no Save, Refresh, New, Delete, close, reopen or Designer action.

### Steps (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any select) | Tab 0 marked `(current)` in the list output (Designer); tab 1 Mongoose Web Client. | tool output |
| 2 | Untargeted `browser_snapshot` (start-of-task read) | **The page returned was the Web Designer (tab 0)**, even though the list marked tab 0 current. The snapshot showed Designer content (FX_HelloWorld01 in the Designer, `FX_AddressStatic` selected in the Properties panel, Save disabled). **No action was taken on the Designer**: no click, typing, screenshot or selection. Recorded as a read-only observation of the active page, not as a Designer interaction. | snapshot (tool-generated) |
| 3 | `browser_tabs` select index 1 (Web Client) | Succeeded (after the list in step 1). | tool output |
| 4 | Untargeted `browser_snapshot` | Web Client runtime `FX_HelloWorld01` tab selected. FX001 current; Address `1 Factory Street`; Label textbox `Factory test one` focused; status `(Object 1 of 2)`; Save **enabled**. Matches the expected T2 end state. No dialog, no portal banner. | snapshot (tool-generated) |
| 5 | ONE click on the FX002 row-number header (`2`, ref `f1e149`) | Completed without error. | tool output |
| 6 | Untargeted `browser_snapshot` (read-only verification of current record) | FX002 current: row-number `2` selected; Label `Factory test two`; Code `FX002`; Address textbox `f1e182` **empty**; status `(Object 2 of 2)`; two rows (`1` and `2`). | snapshot (tool-generated) |
| 7 | ONE click on the Address textbox (`f1e182`) | Completed. | tool output |
| 8 | Untargeted `browser_snapshot` (read-only verification of focus) | Address textbox `[active]`, empty. FX002 still current; status `(Object 2 of 2)`. | snapshot (tool-generated) |
| 9 | ONE plain fill (`browser_type`, no `slowly`, no submit) of `2 Factory Street` into Address (`f1e182`) | Completed once. | tool output |
| 10 | ONE Tab key press (focus out; no Enter) | Completed once. Focus moved to the Label textbox (`Factory test two`). | tool output |
| 11 | Untargeted `browser_snapshot` + screenshot `T3-01` | Address `2 Factory Street`; Label `Factory test two` (focused); Code `FX002`; status `(Object 2 of 2)`; Save **enabled**; dirty diamonds on row headers `1` and `2` (screenshot). | snapshot; `T3-01` |
| 12 | ONE click on the FX001 row-number header (`1`, ref `f1e143`) | Completed without error. | tool output |
| 13 | Untargeted `browser_snapshot` + screenshot `T3-02` (pre-Save recheck) | FX001 current; Label `Factory test one`; Code `FX001`; Address `1 Factory Street`; status `(Object 1 of 2)`; Save **enabled**; dirty diamonds on row headers `1` and `2`; two rows, no third row. | snapshot; `T3-02` |
| 14 | Stop | No Save, Refresh, New, Delete, close, reopen, Designer action, or further fill. FX002's Address was not re-read after FX001 became current (see Observations). The Form is left open and dirty. | — |

### Observations (observed only)

1. The first snapshot of this task returned the Web Designer page, although the tab list marked tab 0 as current. This is the same stale-current pattern seen in T2. Selecting tab 1 corrected it. No Designer element was clicked, typed into or captured.
2. Save was enabled before T3 started (dirty from FX001), and remained enabled through every step.
3. FX002's Address `2 Factory Street` was verified on screen only while FX002 was current (`T3-01`). After the single FX001 row click (step 12), the screenshot and snapshot show FX001's Address. The brief allowed only one FX001 click in T3, so FX002's value was **not** re-read after it lost focus. Its retained value is therefore not separately proven before Save; the post-Save recovery step covers it later.
4. Both row headers carry the dirty diamond in `T3-02` (rows 1 and 2). This is the same indicator as after the FX001 fill in T2 (`T2-03`).
5. The FX002 row-number click (step 5) did not repeat the T2 pointer-interception problem: the row-number header was a working target.
6. No validation text, alert, unexpected prompt or portal banner appeared at any step.

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Not re-run in T3 (the T1 preflight stands: `preflight-00`–`02`). | T1 files | — |
| AC-2 | Carried from T2 (FX001 `1 Factory Street`; unsaved). Re-confirmed in T3 `T3-02` on FX001 after the FX002 fill. | `T2-03`; `T3-02` | Not saved; not persisted. |
| AC-3 | **Supported (observed, UI level, same session, unsaved).** FX002 Address `2 Factory Street` after one plain fill and one Tab, with Code `FX002` and Label `Factory test two` unchanged (`T3-01`). FX001 still shows `1 Factory Street` after one row click (`T3-02`). Two rows, no third row, both rows dirty (`T3-02`). | `T3-01` (FX002 before FX001 reselected); `T3-02` (FX001 with dirty markers on both rows) | FX002's value was not re-read after FX001 became current (Observation 3). Pre-Save only; no database read. |

### Action audit (T3; exact counts)

| Action | T3 count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer select 0. |
| `browser_snapshot` (untargeted) | 6 | Steps 2, 4, 6, 8, 11, 13. Read-only verification snapshots after successful actions and the start-of-task read. **Step 2 returned the Designer page; no Designer interaction followed.** Recovery snapshots: **0** (the T2 allowance was not used). |
| `browser_snapshot` (targeted) | 0 | — |
| `browser_find` | 0 | — |
| `browser_take_screenshot` | 2 | `T3-01`, `T3-02`. |
| Clicks (succeeded) | 3 | Step 5 (FX002 row-number `2`); step 7 (Address textbox); step 12 (FX001 row-number `1`). |
| Clicks (failed) | 0 | — |
| Fills (`browser_type`) | 1 | Step 9 (`2 Factory Street`). |
| Key presses | 1 | Tab (step 10). Enter 0. Escape 0. |
| Toolbar Refresh / Save / New / Delete | **0 / 0 / 0 / 0** | — |
| Runtime close / reopen / Select Form | **0 / 0 / 0** | — |
| FX_Code or FX_Label edits | **0** | — |
| Designer actions (tab 0 selected, clicked, typed, captured) | **0** | — |
| Metadata changes; unloads; cache; FormSync; deployment; checkout | **0** | — |
| Browser JavaScript / console / network; direct navigation; refresh; restart | **0** | Tool output shows a harness-generated code wrapper per action; not worker-authored. |
| Re-login | **0** | Session stayed usable. |
| Dialogs seen / answered; portal banner dismissals | **0 / 0** | — |
| Ref-not-found errors; timeouts | **0 / 0** | — |
| Fresh recovery snapshots used | **0** | — |

### Cumulative audit (EXP-077, T1 + T2 + T3; exact counts)

| Action | T1 | T2 | T3 | Total | Planned for EXP-077 |
| --- | --- | --- | --- | --- | --- |
| `browser_tabs` list | 1 | 1 | 1 | **3** | — |
| `browser_tabs` select | 1 | 1 | 1 | **3** | — |
| `browser_snapshot` untargeted | 2 | 5 | 6 | **13** | — |
| `browser_snapshot` targeted | 1 | 0 | 0 | **1** | — |
| `browser_find` | 1 | 0 | 0 | **1** | — |
| Screenshots | 3 | 3 | 2 | **8** | — |
| Toolbar Refresh | 1 | 0 | 0 | **1** | 2 (one remaining: post-reopen) |
| Fills | 0 | 1 | 1 | **2** | 2 (complete) |
| Toolbar Save | 0 | 0 | 0 | **0** | 1 (not yet) |
| Runtime close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | 1 / 1 |
| Grid row-number or row clicks (succeeded) | 1 | 1 | 2 | **4** | — |
| Address field clicks (succeeded) | 0 | 1 | 1 | **2** | — |
| Clicks failed (no effect) | 0 | 1 | 0 | **1** | — |
| Key presses (Tab only; Enter 0) | 0 | 1 | 1 | **2** | — |
| New / Delete | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | 0 / 0 |
| Code or Label edits | 0 | 0 | 0 | **0** | 0 |
| Designer actions | 0 | 0 | 0 | **0** | 0 |
| Metadata changes; unloads | 0; 0 | 0; 0 | 0; 0 | **0; 0** | 0; 0 |
| Re-login | 0 | 0 | 0 | **0** | — |

### Worker-written-file inventory (T3)

- `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` (edited: status header; T3 section; cumulative audit).
- `evidence/EXP-077/T3-01-fx002-address-2-factory-street-after-fill-and-tab-presave.png` (FX002 current; Address `2 Factory Street`; Label focused; `(Object 2 of 2)`; Save enabled; dirty diamonds on rows 1 and 2).
- `evidence/EXP-077/T3-02-presave-both-rows-recheck-fx001-1-factory-street-status-1-of-2.png` (FX001 current; Address `1 Factory Street`; `(Object 1 of 2)`; Save enabled; dirty diamonds on rows 1 and 2).

No other file was written in T3. The T1 files (`preflight-00`–`02`) and T2 files (`T2-01`–`T2-03`) are preserved unchanged. Harness-generated `evidence/playwright/` files are not EXP-077 evidence.

### Screenshot notes (what each proves and does not prove)

- `T3-01`: runtime FX_HelloWorld01 (selected); identity bar; FX002 current; Label `Factory test two` (focused, selected); Code `FX002`; Address `2 Factory Street`; `(Object 2 of 2)`; Save coloured (enabled); dirty diamonds on the row headers of rows 1 and 2. **Proves** the FX002 Address value on screen before any FX001 reselection, the two-row count from the headers, and the dirty state. **Does not prove** the stored value, the value after focus leaves FX002, or the multi-line property.
- `T3-02`: FX001 current (row `1` selected with the current-row arrow); Label `Factory test one`; Code `FX001`; Address `1 Factory Street`; `(Object 1 of 2)`; Save coloured (enabled); dirty diamonds on rows 1 and 2. **Proves** FX001's Address still shows `1 Factory Street` after the FX002 entry, the two-row count with no third row, and the dirty state for both rows. **Does not prove** FX002's retained value after focus left it (not visible in this image), storage or database content.

### Final state (end of T3)

- Web Client tab (tab 1) selected. Runtime `FX_HelloWorld01` tab active and open; FX001 current; status `(Object 1 of 2)`.
- FX001 Address `1 Factory Street` and FX002 Address `2 Factory Street`, **both unsaved**; Save **enabled**; no third row; Code and Label unchanged in both rows.
- No dialog, no portal banner, no unsaved-change prompt, no validation or alert text.
- Designer tab 0 not selected, clicked, typed into or captured (one start-of-task snapshot returned its page content; read-only, no action).

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| A plain fill of `2 Factory Street` into the FX002 Address, followed by one Tab, shows the value with Save enabled and FX002's Code and Label unchanged | **observed** (one run; `T3-01`) |
| FX001 still shows `1 Factory Street` after one row-number click, with dirty markers on both rows and two rows only | **observed** (one run; `T3-02`) |
| FX002's retained value after focus left FX002 | **unresolved** (not re-read in T3; covered only by the post-Save recovery step) |
| The tab list marks the Designer as current while the Web Client is the intended page; the first snapshot returned the Designer page | **observed** (one run; stale current-tab metadata; corrected by one select) |
| The stored value in `dbo.FX_HelloWorld01` | **unresolved** (nothing saved; no database read) |
| Any replay or procedure status | **not claimed** (not replay_verified) |

Classification: **observed only (UI level, same session); not replay_verified.**

### Open questions and next step (T3)

1. **Blocker:** none in T3. The row click, fill, Tab and verification completed once each.
2. **Next permitted action (separate task, coordinator approval required):** one ordinary toolbar Save of both pending values; record the native response and the Save state; then close the clean Form once and reopen it once through Form > Open > Select Form; one toolbar Refresh; verify Code, Label and Address for both rows and the status count.
3. **Coordinator note:** the Form is dirty with two pending values. Per the brief, do not close it dirty; do not discard changes without operator approval.

---

## T4 — exactly one toolbar Save and post-Save verification (cycle 3; no reopen; no Refresh)

Run `R-20261013-230351-ESoP`, experiment EXP-077, cycle 3, task T4. Worker session `7771dc15-b498-4323-aebf-372e1070e7ba`; task_message_id `fcaccac1-08d4-4f40-86e8-cb7eef13b23c`. Bounded instruction: one toolbar Save, post-Save verification only; no Refresh, New, Delete, close, reopen, additional Save, Designer or metadata action; no fill repeated.

### Steps (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any select) | Tab 0 marked `(current)` in the list output (Designer; not selected, clicked or captured). Tab 1 Mongoose Web Client. | tool output |
| 2 | `browser_tabs` select index 1 (Web Client) | Succeeded. | tool output |
| 3 | Untargeted `browser_snapshot` (pre-mutation state check) | Runtime `FX_HelloWorld01` tab selected. FX001 current; Label `Factory test one`; Code `FX001`; Address `1 Factory Street`; status `(Object 1 of 2)`; two rows; toolbar Save **enabled**; no dialog, no portal banner. FX002's Address is not readable while FX001 is current (no row click was permitted before Save). | snapshot (tool-generated) |
| 4 | Screenshot `T4-00` (read-only dirty-state check) | Dirty diamonds on row headers `1` and `2`; FX001 current with `1 Factory Street`; `(Object 1 of 2)`; Save enabled. Expected pre-Save state confirmed. | `T4-00` |
| 5 | ONE click on the toolbar `Save` (ref `f1e28`, label `Save`) | Completed without error. No retry. | tool output |
| 6 | Untargeted `browser_snapshot` (post-Save) | Toolbar Save `[disabled]`. FX001 current; `Factory test one` / `FX001`; Address `1 Factory Street`; status `(Object 1 of 2)`; two rows; tooltip `Save` visible. No dialog, no alert, no validation text, no prompt. | snapshot (tool-generated) |
| 7 | Screenshot `T4-01` (post-Save) | Dirty diamonds gone from both row headers; Save icon greyed; tooltip `Save`; FX001 values as before; `(Object 1 of 2)`. No dialog. | `T4-01` |
| 8 | ONE click on the FX002 row-number header (`2`, ref `f1e149`) | Completed without error. | tool output |
| 9 | Untargeted `browser_snapshot` (post-Save FX002 check) | FX002 current (row `2` selected); Label `Factory test two`; Code `FX002`; Address `2 Factory Street`; status `(Object 2 of 2)`; **two rows only** (`gridcell "1"` and `gridcell "2"`); toolbar Save `[disabled]`. | snapshot (tool-generated) |
| 10 | Screenshot `T4-02` (post-Save FX002 check) | FX002 current; Label `Factory test two`; Code `FX002`; Address `2 Factory Street`; `(Object 2 of 2)`; Save greyed; no dirty marker on row 2 (the row-number header shows `2` with the current-row arrow only). | `T4-02` |
| 11 | Stop | No second Save, no Refresh, New, Delete, close, reopen, fill or Designer action. The Form is open and clean. | — |

### AC-4 observations (observed only)

- **Native response to the one Save:** no confirmation message, toast, validation message, alert, dialog or prompt appeared. The only visible change was the toolbar Save button becoming disabled and the dirty markers clearing. Success is inferred from that state change, as in EXP-042-R3 and EXP-046 (no explicit success text in this UI).
- **Save state afterwards:** toolbar Save `[disabled]` in the step 6 and step 9 snapshots, and greyed in `T4-01` and `T4-02`.
- **Both rows afterwards:** FX001 shows `1 Factory Street` (step 6, `T4-01`); FX002 shows `2 Factory Street` (step 9, `T4-02`). Each was read in the form textbox for the current record only. The grid has no Address column, so the grid itself does not show addresses.
- **Row count:** two rows (`1` and `2`); no third row.
- **Dirty indication:** after the Save, no row-header dirty marker was visible in `T4-01`. FX002's marker state in `T4-02` is judged from the row-header screenshot (current-row arrow, no diamond); this is a visual judgement, not a read of an underlying flag.
- **Code and Label:** FX001 `FX001` / `Factory test one`; FX002 `FX002` / `Factory test two`. Unchanged in every post-Save read.
- **Limits:** the Save is a UI state change in the same session. It is **not** a database read, and no durability or replay claim is made.

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Not re-run (T1 stands). | T1 `preflight-00`–`02` | — |
| AC-2 | Carried from T2. FX001 Address `1 Factory Street` visible after the Save (step 6, `T4-01`). | `T2-03`; `T4-01` | Same session; no DB read. |
| AC-3 | Carried from T3. FX002 `2 Factory Street` and no third row visible after the Save (step 9, `T4-02`). | `T3-01`; `T4-02` | Same session; no DB read. |
| AC-4 | **Supported (observed, UI level, same session).** Exactly one toolbar Save; native response: no visible message, only the Save button disabled and the dirty markers cleared; Save disabled afterwards; FX001 and FX002 addresses shown after the Save. | `T4-00` (pre-Save dirty state); `T4-01` (Save result and disabled state); `T4-02` (FX002 post-Save) | "Success" inferred from UI state. The grid shows no address column. No database read. The FX002 post-Save dirty state is a visual judgement. |

### Action audit (T4; exact counts)

| Action | T4 count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer select 0. |
| `browser_snapshot` (untargeted) | 3 | Steps 3, 6, 9. Read-only checks after the pre-mutation state, the Save, and the FX002 row click. No recovery snapshots. |
| `browser_snapshot` (targeted) | 0 | — |
| `browser_find` | 0 | — |
| `browser_take_screenshot` | 3 | `T4-00`, `T4-01`, `T4-02`. |
| Toolbar Save clicks | **1** | Step 5. No retry. |
| Grid row-number clicks (succeeded) | 1 | Step 8 (FX002 row-number `2`). |
| Fills | 0 | — |
| Key presses | 0 | — |
| Refresh / New / Delete | **0 / 0 / 0** | — |
| Runtime close / reopen / Select Form | **0 / 0 / 0** | — |
| FX_Code or FX_Label edits | **0** | — |
| Designer actions (tab 0 selected, clicked, typed, captured) | **0** | — |
| Metadata changes; unloads; cache; FormSync; deployment; checkout | **0** | — |
| Browser JavaScript / console / network; direct navigation; refresh; restart | **0** | Tool output shows a harness-generated code wrapper per action; not worker-authored. |
| Re-login | **0** | Session stayed usable. |
| Dialogs seen / answered; portal banner dismissals | **0 / 0** | — |
| Ref-not-found errors; timeouts | **0 / 0** | — |
| Fresh recovery snapshots used | **0** | — |

### Cumulative audit (EXP-077, T1 + T2 + T3 + T4; exact counts)

| Action | T1 | T2 | T3 | T4 | Total | Planned for EXP-077 |
| --- | --- | --- | --- | --- | --- | --- |
| `browser_tabs` list | 1 | 1 | 1 | 1 | **4** | — |
| `browser_tabs` select | 1 | 1 | 1 | 1 | **4** | — |
| `browser_snapshot` untargeted | 2 | 5 | 6 | 3 | **16** | — |
| `browser_snapshot` targeted | 1 | 0 | 0 | 0 | **1** | — |
| `browser_find` | 1 | 0 | 0 | 0 | **1** | — |
| Screenshots | 3 | 3 | 2 | 3 | **11** | — |
| Toolbar Refresh | 1 | 0 | 0 | 0 | **1** | 2 (one remaining: post-reopen) |
| Fills | 0 | 1 | 1 | 0 | **2** | 2 (complete) |
| Toolbar Save | 0 | 0 | 0 | 1 | **1** | 1 (complete) |
| Runtime close / reopen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | 1 / 1 (not yet) |
| Grid row-number or row clicks (succeeded) | 1 | 1 | 2 | 1 | **5** | — |
| Address field clicks (succeeded) | 0 | 1 | 1 | 0 | **2** | — |
| Clicks failed (no effect) | 0 | 1 | 0 | 0 | **1** | — |
| Key presses (Tab only; Enter 0) | 0 | 1 | 1 | 0 | **2** | — |
| New / Delete | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | 0 / 0 |
| Code or Label edits | 0 | 0 | 0 | 0 | **0** | 0 |
| Designer actions | 0 | 0 | 0 | 0 | **0** | 0 |
| Metadata changes; unloads | 0; 0 | 0; 0 | 0; 0 | 0; 0 | **0; 0** | 0; 0 |
| Re-login | 0 | 0 | 0 | 0 | **0** | — |

### Worker-written-file inventory (T4)

- `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` (edited: status header; T4 section; cumulative audit).
- `evidence/EXP-077/T4-00-pre-save-dirty-state-check-before-single-save.png` (pre-Save: FX001 `1 Factory Street`; dirty markers on rows 1 and 2; `(Object 1 of 2)`; Save enabled).
- `evidence/EXP-077/T4-01-post-single-save-fx001-state.png` (post-Save: FX001 values; dirty markers gone; Save greyed; `(Object 1 of 2)`).
- `evidence/EXP-077/T4-02-post-save-fx002-current-address-2-factory-street.png` (post-Save: FX002 current; `2 Factory Street`; Code `FX002`; Label `Factory test two`; `(Object 2 of 2)`; Save greyed).

No other file was written in T4. The T1–T3 files are preserved unchanged. Harness-generated `evidence/playwright/` files are not EXP-077 evidence.

### Screenshot notes (what each proves and does not prove)

- `T4-00`: runtime FX_HelloWorld01 (selected); identity bar; FX001 current with `1 Factory Street`; dirty markers on rows 1 and 2; `(Object 1 of 2)`; Save coloured (enabled). **Proves** the dirty state before the one Save. **Does not prove** FX002's value (not visible while FX001 is current) or that the Save would succeed.
- `T4-01`: after the one Save; Save greyed; no dirty markers on the row headers; FX001 `1 Factory Street`, Code `FX001`, Label `Factory test one`; `(Object 1 of 2)`; a `Save` tooltip is visible; no dialog. **Proves** the post-Save disabled state and the FX001 values on screen. **Does not prove** a database write or FX002's stored value.
- `T4-02`: FX002 current after one row-number click; `2 Factory Street`; Code `FX002`; Label `Factory test two`; `(Object 2 of 2)`; Save greyed; two rows visible in the row headers. **Proves** FX002's post-Save value and disabled Save on screen. **Does not prove** that the Save persisted the value, the multi-line property, or the absence of a hidden row beyond the two visible header rows (the snapshot shows two rows only).

### Final state (end of T4)

- Web Client tab (tab 1) selected. Runtime `FX_HelloWorld01` open and **clean** (Save disabled). FX002 current; status `(Object 2 of 2)`.
- FX001 `1 Factory Street` and FX002 `2 Factory Street` after one Save; Code and Label unchanged in both rows; two rows, no third row.
- No dialog, no portal banner, no unsaved-change prompt, no validation or alert text. The Form is not closed or reopened.
- Designer tab 0 not selected, clicked, typed into or captured.

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| One toolbar Save on the dirty runtime Form produced no visible message; Save became disabled and the dirty markers cleared | **observed** (one run; `T4-01`) |
| FX002 `2 Factory Street` shown after the Save with Code `FX002`, Label `Factory test two`, Save disabled, two rows | **observed** (one run; `T4-02`) |
| FX001 `1 Factory Street` shown after the Save with Code `FX001`, Label `Factory test one`, Save disabled | **observed** (one run; `T4-01`) |
| The Save wrote the values to `dbo.FX_HelloWorld01` | **unresolved** (no database read; not claimed) |
| Save result as an explicit success | **unresolved** (no success message exists in this UI; inferred from the state change) |
| Any replay or procedure status | **not claimed** (not replay_verified) |

Classification: **observed only (UI level, same session); not replay_verified.**

### Open questions and next step (T4)

1. **Blocker:** none in T4. Save ran once and completed with no visible error.
2. **Next permitted action (separate task, coordinator approval required):** close the clean FX_HelloWorld01 runtime Form once through its Form-tab control; reopen once through Form > Open > Select Form; one toolbar Refresh; verify Code, Label and Address (`1 Factory Street`, `2 Factory Street`) and the status count for each row. This is AC-5 and AC-6.
3. **Limit to carry forward:** the FX002 row's dirty marker after the Save is a visual judgement. The reopen and Refresh are the first reads from a fresh load, so they are the first check of whether the Save reached the stored rows at UI level.

---

## T5 — runtime close, one reopen, one Refresh, and recovery verification (cycle 4; AC-5 and AC-6 observed)

Run `R-20261013-230351-ESoP`, experiment EXP-077, cycle 4, task T5. Worker session `7771dc15-b498-4323-aebf-372e1070e7ba`; task_message_id `2f9a8000-4ef8-4fdf-b6a7-9632db92a226`. Bounded instruction: verify the clean runtime state; close the clean runtime Form once through its Form-tab control; reopen once through Form > Open > Select Form; one toolbar Refresh; verify both records; no edits, no typing, no Save, no add or delete, no Designer action.

### Pre-close clean-state check (before any close)

- Tab list (before the select): tab 0 marked `(current)` in the list output (Designer; not acted on). Tab 1 Web Client selected explicitly. Then a fresh snapshot.
- Snapshot: runtime `FX_HelloWorld01` selected; Save `[disabled]`; FX002 current (`gridcell "2"` `[selected]`); Label `Factory test two`; Code `FX002`; Address `2 Factory Street`; **exactly two rows** (`gridcell "1"` and `gridcell "2"`); status `(Object 2 of 2)`; no dialog and no prompt.
- Screenshot `T5-00`: no dirty markers on either row header; Save greyed. **Clean state demonstrated, so the close proceeded.**

### Steps (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list (before any select) | Tab 0 `(current)` in the list output; tab 1 Web Client. | tool output |
| 2 | `browser_tabs` select index 1 | Succeeded. | tool output |
| 3 | Untargeted snapshot (S1) | Clean state as above. | snapshot |
| 4 | Screenshot `T5-00` | Clean: no dirty markers; Save greyed; FX002 current; `(Object 2 of 2)`. | `T5-00` |
| 5 | **ONE click on the Form-tab control `Close Panel FX_HelloWorld01` (ref `f1e122`)** | Completed without error. | tool output |
| 6 | Untargeted snapshot (S2) and screenshot `T5-01` | **No save prompt, no alert dialog, no unsaved-change prompt.** The `FX_HelloWorld01` tab is gone from the tab list. The Web Client's existing `IDOs` tab became active and shows the `FX_HelloWorld01` IDO (checked out, `Locked By` the operator, with `Check In` and `Undo Check Out` buttons visible). Not clicked, not changed. The page URL changed to `favoriteContext=IdoCollections`. | snapshot; `T5-01` |
| 7 | **ONE click on the Form menu** (ref `f1e10`) | Menu opened. | tool output |
| 8 | Read-only `browser_find` "Open" | Found the Form menu item `Open` (ref `f1e989`). The same menu also lists `Close and Save Changes` (not clicked). | find output |
| 9 | **ONE click on the Form menu item `Open`** (ref `f1e989`) | Completed. The `Select Form` dialog opened. | tool output |
| 10 | Untargeted snapshot (S3) | Select Form dialog: one row `FX_HelloWorld01` / `FX_HelloWorld01`; Filter `FX_HelloWorld01` (pre-filled); Filter By `Name`; OK, Cancel, Help. | snapshot |
| 11 | **ONE click on the Select Form row** (Name cell, ref `f1e1061`) | Completed. Row highlighted. | tool output |
| 12 | Screenshot `T5-02` (read-only, before OK) | Select Form dialog with the row highlighted and the filter `FX_HelloWorld01`. | `T5-02` |
| 13 | **ONE click on Select Form `OK`** (ref `f1e1087`) | Completed. No prompt. The `FX_HelloWorld01` runtime tab reopened and became the active tab. | tool output |
| 14 | Untargeted snapshot (S4) | Identity: tab `FX_HelloWorld01` selected; tabpanel `FX_HelloWorld01`; identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Status `(Object 1 of 1)`. One blank add-mode placeholder row (`gridcell "1"` with star in the screenshot); Label and Code inputs blank; Address blank; Save `[disabled]`. The record opens in add mode, consistent with EXP-042-R3 and EXP-046. | snapshot |
| 15 | Screenshot `T5-03` (required before Refresh) | Reopened Form before Refresh: blank placeholder; `(Object 1 of 1)`; Save greyed. | `T5-03` |
| 16 | **ONE toolbar Refresh** (ref `f1e36`) | Completed. Tooltip `Refresh`. No prompt. | tool output |
| 17 | Untargeted snapshot (S5) | **Two rows**: `gridcell "1"` and `gridcell "2"`. Row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002`. Current record = row 1: Label `Factory test one`; Code `FX001`; Address `1 Factory Street`. Status `(Object 1 of 2)`. Toolbar Save `[disabled]`. No dialog. | snapshot |
| 18 | Screenshot `T5-04` (FX001 recovered row) | FX001 current; `Factory test one` / `FX001` / `1 Factory Street`; `(Object 1 of 2)`; Save greyed; no dirty markers on rows 1 or 2. | `T5-04` |
| 19 | **ONE click on the row-number header `2`** (FX002, ref `f1e1166`) | Completed without error. | tool output |
| 20 | Untargeted snapshot (S6) and screenshot `T5-05` (FX002 recovered row) | FX002 current (row `2` `[selected]`); Label `Factory test two`; Code `FX002`; Address `2 Factory Street`; status `(Object 2 of 2)`; **two rows only**; Save `[disabled]`. | snapshot; `T5-05` |
| 21 | Stop | No edit, no typing, no further Refresh, no Save, no New or Delete, no close or reopen. The Form is open and clean. | — |

### Observations (observed only)

1. The close (step 5) completed with no prompt. The snapshot and `T5-01` show no alert or save-changes prompt, and the runtime tab was removed. The brief's Form-tab control was used.
2. The reopen (steps 7–13) went through the Form menu's `Open` item and the Select Form dialog, with one row click and one OK. The reopened runtime opened in add mode (one blank placeholder, `(Object 1 of 1)`), and the saved rows loaded only after the one Refresh, as in EXP-042-R3 and EXP-046.
3. After the single Refresh, both saved rows loaded with their Code, Label and Address values. The status count was `(Object 1 of 2)` with FX001 current; after the FX002 row-number click it read `(Object 2 of 2)`.
4. **Both dirty indicators remain cleared**: `T5-04` and `T5-05` show no diamond markers on either row header. This is a visual judgement; the accessibility tree has no dirty flag to read.
5. The record was not modified in T5: no typing, no fill, no Save, no New or Delete.
6. The `IDOs` tab that became active after the runtime close shows the `FX_HelloWorld01` IDO with a `Check In` button and an `Undo Check Out` button, and `Locked By` the operator. These were visible and **not** clicked. Checkout-management actions were out of scope and were not performed. Observed only.

### AC-5 and AC-6

| AC | T5 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-5 | **Supported (observed, UI level, same session).** The clean runtime Form was closed once through its Form-tab control with no prompt, and reopened once through Form > Open > Select Form (identity `FX_HelloWorld01`, User-scope Form not re-read). | `T5-00` (clean before close); `T5-01` (after close, no prompt); `T5-02` (Select Form row before OK); `T5-03` (reopened, add mode, before Refresh) | Same session. The reopen is UI-level only. No database read. |
| AC-6 | **Supported (observed, UI level, same session).** After one Refresh: FX001 / `Factory test one` / `1 Factory Street` (status `(Object 1 of 2)`), and FX002 / `Factory test two` / `2 Factory Street` (status `(Object 2 of 2)` after one row click). Save disabled. Code and Label unchanged in both rows. | `T5-04` (FX001 row); `T5-05` (FX002 row); snapshots S5 and S6 | Same session only. The status numerator reflects the current row, as in EXP-042-R3. Not a database read, so no durability claim. |

### Action audit (T5; exact counts)

| Action | T5 count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer select 0. |
| `browser_snapshot` (untargeted) | 6 | S1 (clean check), S2 (after close), S3 (after Form > Open), S4 (after Select Form OK, reopened), S5 (after Refresh), S6 (after FX002 row click). |
| `browser_snapshot` (targeted) | 0 | — |
| `browser_find` | 1 | Text `Open` (read-only; located the Form menu `Open` item in the current frame). |
| Screenshots | 6 | `T5-00`, `T5-01`, `T5-02`, `T5-03`, `T5-04`, `T5-05`. |
| Clicks (succeeded) | 7 | (1) Form-tab close `Close Panel FX_HelloWorld01`; (2) Form menu; (3) Form > Open; (4) Select Form row; (5) Select Form OK; (6) toolbar Refresh; (7) FX002 row-number header. |
| Clicks (failed) | 0 | — |
| Toolbar Refresh | **1** | Step 16. No retry. |
| Toolbar Save | **0** | None in T5. |
| Fills / typing | **0 / 0** | — |
| Key presses (incl. Enter, Tab, Escape) | **0** | — |
| New / Delete | **0 / 0** | — |
| Runtime close / reopen | **1 / 1** | Close step 5; reopen steps 7–13. |
| Select Form dialog (in-page) | OK 1 | Step 13. Not a native prompt. |
| Native prompts or unexpected dialogs | **0** | None seen (`T5-01`, snapshots S2, S4). |
| FX_Code or FX_Label edits | **0** | — |
| Designer actions | **0** | Tab 0 never selected, clicked or captured. |
| Metadata; unloads; cache; FormSync; deployment; checkout actions | **0** | The visible `Check In` and `Undo Check Out` buttons on the IDOs tab were not clicked. |
| Re-login | **0** | Session stayed usable. |
| Portal banners dismissed | **0** | None visible. |
| Ref-not-found; timeouts; recovery snapshots | **0 / 0 / 0** | — |

### Cumulative audit (EXP-077, T1–T5; exact counts)

| Action | T1 | T2 | T3 | T4 | T5 | Total | Planned for EXP-077 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `browser_tabs` list | 1 | 1 | 1 | 1 | 1 | **5** | — |
| `browser_tabs` select | 1 | 1 | 1 | 1 | 1 | **5** | — |
| `browser_snapshot` untargeted | 2 | 5 | 6 | 3 | 6 | **22** | — |
| `browser_snapshot` targeted | 1 | 0 | 0 | 0 | 0 | **1** | — |
| `browser_find` | 1 | 0 | 0 | 0 | 1 | **2** | — |
| Screenshots | 3 | 3 | 2 | 3 | 6 | **17** | — |
| **Toolbar Refresh** | 1 | 0 | 0 | 0 | 1 | **2** | 2 (complete) |
| **Fills** | 0 | 1 | 1 | 0 | 0 | **2** | 2 (complete) |
| **Toolbar Save** | 0 | 0 | 0 | 1 | 0 | **1** | 1 (complete) |
| **Runtime close / reopen** | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** | 1 / 1 (complete) |
| Grid row-number or row clicks (succeeded) | 1 | 1 | 2 | 1 | 1 | **6** | — |
| Address field clicks (succeeded) | 0 | 1 | 1 | 0 | 0 | **2** | — |
| Menu and dialog clicks (Form, Open, Select Form row, OK, Form-tab close) | 0 | 0 | 0 | 0 | 5 | **5** | — |
| Clicks failed (no effect) | 0 | 1 | 0 | 0 | 0 | **1** | — |
| Total clicks (incl. failed) | 2 | 3 | 3 | 2 | 7 | **17** | — |
| Key presses (Tab only; Enter 0) | 0 | 1 | 1 | 0 | 0 | **2** | — |
| **New / Delete** | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | 0 / 0 (complete) |
| **Code or Label edits** | 0 | 0 | 0 | 0 | 0 | **0** | 0 (complete) |
| **Designer actions** | 0 | 0 | 0 | 0 | 0 | **0** | 0 (complete) |
| **Metadata changes; unloads** | 0; 0 | 0; 0 | 0; 0 | 0; 0 | 0; 0 | **0; 0** | 0; 0 (complete) |
| Re-login | 0 | 0 | 0 | 0 | 0 | **0** | — |

Note on the T1 click count: T1 made 2 clicks (Refresh and the FX002 row click). The "Menu and dialog clicks" row counts clicks that were not grid row clicks, Refresh or Save, and T5 is the only task that has them.

### Worker-written-file inventory (T5)

- `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` (edited: status header; T5 section; cumulative audit).
- `evidence/EXP-077/T5-00-pre-close-clean-state-fx002-current.png` (clean state before close: FX002 current; no dirty markers; Save greyed; `(Object 2 of 2)`).
- `evidence/EXP-077/T5-01-after-single-close-no-prompt.png` (after close: the runtime tab is gone; the IDOs tab is active; no prompt).
- `evidence/EXP-077/T5-02-select-form-dialog-fx_helloworld01-row-selected-before-ok.png` (Select Form: one row highlighted; filter `FX_HelloWorld01`; before OK).
- `evidence/EXP-077/T5-03-reopened-runtime-before-refresh-add-mode-placeholder.png` (reopened: one blank placeholder; `(Object 1 of 1)`; Save greyed; before Refresh).
- `evidence/EXP-077/T5-04-recovered-fx001-after-one-refresh-address-1-factory-street.png` (after Refresh: FX001 current; `1 Factory Street`; `(Object 1 of 2)`).
- `evidence/EXP-077/T5-05-recovered-fx002-current-address-2-factory-street.png` (after FX002 row click: FX002 current; `2 Factory Street`; `(Object 2 of 2)`).

No other file was written in T5. Files T1–T4 are preserved unchanged. Harness-generated `evidence/playwright/` files are not EXP-077 evidence.

### Screenshot notes (what each proves and does not prove)

- `T5-00`: runtime FX_HelloWorld01 selected before close; FX002 current; Label `Factory test two`; Code `FX002`; Address `2 Factory Street`; `(Object 2 of 2)`; no dirty markers; Save greyed. **Proves** the clean state the brief required before the close. **Does not prove** the stored value.
- `T5-01`: after the close, the Web Client's IDOs tab is active and shows the `FX_HelloWorld01` IDO (checked out, `Locked By` the operator); the FX_HelloWorld01 runtime tab is gone; no prompt visible. **Proves** the close with no prompt on screen. **Does not prove** that the close left no unsaved state in the database. The IDO tab's checkout buttons are visible but were not touched.
- `T5-02`: Select Form dialog with the row highlighted and the filter `FX_HelloWorld01`, before OK. **Proves** the reopen target identity before activation. **Does not prove** the reopened record's values.
- `T5-03`: reopened runtime `FX_HelloWorld01`: one blank starred placeholder; Label and Code inputs blank (Code shows the required `*`); Address blank; `(Object 1 of 1)`; Save greyed. **Proves** the reopened Form opens in add mode with no saved rows loaded before Refresh. **Does not prove** the saved values, which only load after the Refresh.
- `T5-04`: FX001 current after the one Refresh: `Factory test one` / `FX001` / `1 Factory Street`; `(Object 1 of 2)`; Save greyed; no dirty markers on rows 1 or 2. **Proves** FX001's recovered Address and Code and Label on screen after the reopen. **Does not prove** database storage.
- `T5-05`: FX002 current after one row-number click: `Factory test two` / `FX002` / `2 Factory Street`; `(Object 2 of 2)`; Save greyed; two rows only; no dirty markers. **Proves** FX002's recovered Address on screen and the absence of a third row. **Does not prove** database storage.

### Final state (end of T5)

- Web Client tab (tab 1) selected. Runtime `FX_HelloWorld01` tab open and **clean**. FX002 current; status `(Object 2 of 2)`; Save **disabled**; two rows; no dirty markers; no dialog or prompt.
- Recovered values in the open Form: FX001 `1 Factory Street`; FX002 `2 Factory Street`. Code and Label unchanged in both rows.
- The IDOs tab remains open in the Web Client (not touched). Designer tab 0 not touched.
- No further lifecycle action is pending in EXP-077. The brief's steps are complete.

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| The clean runtime Form closed once through its Form-tab control with no save prompt | **observed** (one run; `T5-01`) |
| Reopen through Form > Open > Select Form opens FX_HelloWorld01 in add mode with one blank placeholder | **observed** (one run; `T5-03`); consistent with EXP-042-R3 and EXP-046 |
| One toolbar Refresh loads both saved rows with Code, Label and Address (`1 Factory Street`, `2 Factory Street`) | **observed** (one run; `T5-04`, `T5-05`) |
| Save disabled and no dirty markers after the reopen and Refresh | **observed** (one run; visual judgement for the dirty markers) |
| The saved values are stored in `dbo.FX_HelloWorld01` | **unresolved** as an independent fact. The recovery is same-session UI evidence only. **Not claimed as database durability.** |
| Replay or procedure status | **not claimed** (not replay_verified) |

Classification: **observed only (UI level, same session); not replay_verified.**

### Open questions and blockers (T5)

1. **No blocker in T5.** Every step ran once. No recovery sequence was needed.
2. **Limit (unchanged):** the recovery is in the same browser session. The reopened Form loaded the saved rows from the Web Client's query, which is the first fresh-load read, but this is not an independent database read and cannot establish durability or replay.
3. **For the coordinator:** the IDOs tab that was left active after the close shows the `FX_HelloWorld01` IDO checked out to the operator, with `Check In` and `Undo Check Out` buttons. This was observed only. Any checkout decision is outside this experiment.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 5 prerequisite D is complete, and with it the Address prerequisites A-D (EXP-074 to EXP-077). The operator decided acceptance; auto-accept was not renewed for Part 5.

- Run R-20261013-230351-ESoP completed as accepted after 6 worker tasks, with no pauses.
- Changed, for later cleanup — data in the factory-owned table `dbo.FX_HelloWorld01`, entered through the User-scope runtime Form FX_HelloWorld01:

  | FX_Code | FX_Label | FX_Address |
  |---|---|---|
  | FX001 | Factory test one | 1 Factory Street |
  | FX002 | Factory test two | 2 Factory Street |

  Each address was one plain fill, and both were saved by one toolbar Save. FX_Code and FX_Label are unchanged.
- Screenshots viewed by the operator assistant:
  - `T4-01`: after the Save, FX001 / Factory test one / 1 Factory Street, Save disabled, "(Object 1 of 2)".
  - `T5-04`: after the runtime close/reopen and one Refresh, FX001 / Factory test one / 1 Factory Street, "(Object 1 of 2)".
  - `T5-05`: FX002 / Factory test two / 2 Factory Street, "(Object 2 of 2)"; there are two grid rows and no placeholder.
- Operator decisions: the three procedural points in the T6 report are accepted. None changed any data.
  1. **T2 click timeout:** the click on the FX001 Label grid cell timed out because the splitter or locked columns intercepted the pointer. It was recovered within the allowance with one click on the row-number cell.
  2. **T3 snapshot:** one read-only snapshot was taken while the Designer tab was current.
  3. **Tab handling (T2-T5):** each tab select was issued in the same step as its snapshot.
- Counts:
  - Refresh 2; fills 2; Save 1; runtime close/reopen 1;
  - New 0; Delete 0; Code/Label edits 0;
  - Designer actions 0; metadata changes 0; unloads 0; re-logins 0.
- Findings (observed):
  1. **Saving changes to several rows:** edits made on several existing rows are kept while moving between rows, and one toolbar Save stores them all.
  2. **Grid cell clicks can fail:** a click on a clipped grid cell can be intercepted by the splitter. Selecting a row by its row-number cell works.
  3. **Recovery:** the multi-line Address values survive a runtime close/reopen. This is same-session UI evidence only.
- Confinement (git status): only `evidence/EXP-077/` and this record were written by the run.
- Next: Part 5 Section 1. Join FX_Orders to FX_HelloWorld01 and FX_Items in IDO Collections. FX_Orders is checked in (EXP-071-R2), so it needs one Check Out.
