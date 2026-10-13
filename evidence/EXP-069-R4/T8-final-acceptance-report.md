# EXP-069-R4 — T8 final acceptance report

Documentation-only task. **T8 made zero browser calls and zero Mongoose changes.** Written 2026-10-13, run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 7 (T8), task_message_id `ef463fc4-3c22-4b4d-bc71-d574eeb67812`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`.

Experiment record: `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (T1–T7 sections, status lines, and the T8 section).

Trust level for everything below: **observed only**. Nothing is `replay_verified`. No independent-session durability, no database durability, no causal isolation, and no Add or Find functionality is claimed.

---

## 1. Recommendation

**ACCEPTED as observed (not replay_verified), with the qualifications in section 7.**

Every acceptance criterion AC-1 to AC-7 has supporting evidence in the saved files. AC-8 is met by this report and the record. I found no disqualifying deviation. The deviations that exist are disclosed in section 6 and each is classified below as not disqualifying. The operator should specifically review deviation D1 (source-reading order in T1) before acceptance, because it is a process rule the worker broke, even though it did not affect any browser decision.

---

## 2. Final states (from the saved evidence)

### 2.1 Designer (end of T7)

| Item | State | Evidence |
| --- | --- | --- |
| Form | `FX_Items` loaded, the only Designer Form | `t7-06` (reopen), `t7-20` (after Cancel) |
| Scope | footer `ScopeType: User / ScopeName: <operator>` | `t7-07`, `t7-21` |
| Dirty state | clean: toolbar Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]` | `t7-20`, `t7-21` |
| Dialog | none open | `t7-20` (no `dialog` node) |
| FX_UM extension | Name `FX_UM`; Add/Details Form `FX_UMs`; Find Form `FX_UMs`; Property `FX_UM`; Right-Click Menu `StdDetailsAddFind` | `t7-18` (accessibility), `t7-19` (screenshot) |
| FX_UMCombobox component | Data Source `object.FX_UM`; View Attributes Inherited From Property `FX_UM`; Edit Property Class Extension For Property Class `FX_UM`; Behavior Add/Details, Find, Property blank; **component-level Right-Click Menu blank** | `t7-14` (accessibility), `t7-15`, `t7-16` (screenshots) |
| View state (not Form changes) | Details panel expanded; Components tab active; Components filter text `FX_UMCombobox`; Pane groups expanded; FX_UMCombobox row selected | `t7-08` to `t7-16`; Save stayed disabled throughout (`t7-20`) |

Note on the FX_UMCombobox Inheritance rows: in `t7-15`/`t7-16` they are below the visible area. Their values come from the accessibility readback `t7-14`, not from a screenshot.

### 2.2 Runtime (end of T6; no runtime action since T6)

| Item | State | Evidence |
| --- | --- | --- |
| Form | `FX_Items` on dumbbell, Unit of Measure `EA`, Description `Each` | `t6-06` (screenshot), `t6-05` (snapshot) |
| Record | `Unit of Measure (Object 1 of 3)` | `t6-06` |
| Runtime Save | disabled (clean) | `t6-05`, `t6-06` |
| Context menu | none open | `t6-06` |
| Dialog | none open | `t6-05` |
| FX_UMs drill-down | closed clean; not open | `t6-05`, `t6-06` |

The runtime FX_Items Form has been clean since T5's reopen (`t5-09`), and T6 returned it to the same state (`t6-06`).

---

## 3. Runtime menu baseline and result (negative and positive)

| Stage | Menu on UM combobox (dumbbell, EA) | Evidence | Extension Right-Click Menu | Component-level Right-Click Menu |
| --- | --- | --- | --- | --- |
| T1, before the change (negative) | 25 standard items: Refresh, Refresh current, Filter, Next, Previous (disabled), First (disabled), Last, Get More Rows (disabled), New, Duplicate, Save (disabled), Save current (disabled), Delete, Validate, Notes for All, Documents for Current, Email for Current, Notes for Current, Graph, To Excel, To Form DataView, View Event Status (disabled), View Workflows, New Workflow, Help. **No Details, Add or Find.** | `t1-03`, `t1-04`, `t1-05` | blank | blank |
| T5, after Save 1 and runtime close/reopen (positive) | Four items: `Add...`, `Details...`, `Find...`, `Help`. | `t5-07` | `StdDetailsAddFind` | blank |
| T6, same state, right-click repeated | Four items: `Add...`, `Details...`, `Find...`, `Help`. | `t6-02` | `StdDetailsAddFind` | blank |

Escape did not dismiss the runtime menu in T1, T5 or T6. A blank-Form click did. No item was chosen in T1, T5 or T6.

**Details drill-down (T6, dumbbell, UM EA):** one click on `Details...` opened the FX_UMs Form in a new tab. Readback: tab heading `FX_UMs`; one grid row `EA` / `Each`; Unit of Measure `EA`; Description `Each`; status `Description (Object 1 of 1)`; toolbar Save disabled (`t6-03`, `t6-04`). The Description field had focus on open with its text selected, and nothing was typed. One click on `Close Panel FX_UMs` closed it with no prompt, and FX_Items came back clean (`t6-05`, `t6-06`).

**Inheritance observation (observed only):** the change from the T1 25-item menu to the T5/T6 four-item menu happened while the component-level Right-Click Menu of FX_UMCombobox stayed blank (`t4-08`, `t7-14`, `t7-16`). No component override was present at any time in this run, so the extension's `StdDetailsAddFind` is the observed source of the menu. This is **not** a causal isolation. The component level was never set and then cleared again in this run, and the tutorial's override lesson (a component-level setting defeats an extension) was **not** reproduced. The tutorial lesson stays **unverified**.

---

## 4. Acceptance matrix (AC-1 to AC-8)

### AC-1 — Sources reviewed; session usable; FX_Items in User scope; leftover editor state; component Right-Click Menu blank; baseline runtime menu

**Status: SUPPORTED (with a disclosed source-order deviation, D1).**

- Sources: AGENTS.md, transcript Section 9, web-designer.md, EXP-069-R3 record, EXP-069-R2 T4 and T10, EXP-064 T2 and T7. All read before browser interaction, except the EXP-069-R3 final report, which was read after interaction began (D1).
- Session usable throughout; no re-login; no session-expiry modal or sign-in page.
- Designer FX_Items, User scope, clean: `t1-00`, `t1-01`, `t2-00`.
- Leftover inline editor (T1, T2): **open** on arrival; four fields Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`, Right-Click Menu blank; Right-Click Menu row **with no dropdown arrow** in the inline view (`t1-01`, `t2-01`). Rows not clicked in T1 or T2 beyond the planned OK.
- FX_UMCombobox component: Data Source `object.FX_UM`; Inheritance `FX_UM`; component-level Right-Click Menu blank (`t1-00` accessibility; `t7-14`, `t7-16` later).
- Baseline runtime menu: 25 standard items, no Details, Add or Find (`t1-04`).

Limit: the component-level Behavior rows were covered by the inline editor in T1 and T2, so they were read by accessibility only.

### AC-2 — Inline editor closed with one no-change OK; Edit > Property Class Extension opened once with layout recorded; FX_UM selected; Right-Click Menu set to StdDetailsAddFind and committed with Tab before one OK (plus parent-dialog OK if present)

**Status: SUPPORTED.**

- **Inline OK (T2):** one click on the inline editor's OK (`e2145`). Native response: **no alert, no error, no message**; the dialog closed (`t2-02`). Designer Save stayed **disabled** after it (`t2-02`, `t2-03`). The page URL lost `MGForm=FX_Items` after the dialog closed (the same drop EXP-064 recorded). Limit: a clean Designer does not prove whether metadata was written; no stored-value readback was made at that point.
- **Edit > Property Class Extension (T2):** opened **once** from the Designer Edit menu. The route opened a **"Global Objects"** dialog with a **Property Class Extensions** list (left), a **Properties** pane (right), icon buttons under the list (+, copy, trash; not clicked), and **OK, Cancel, Help** (`t2-04`, `t2-05`). This differs from the brief's word "editor"; it is recorded as observed.
- **FX_UM selected (T2):** one click on the FX_UM row (`e2421`), selection only. Property sheet read (`t2-06`, `t2-07`, `t2-09`).
- **Right-Click Menu set and committed (T3):** one click on the dropdown arrow (`e2311`) opened the native list, which offered `StdDetailsAddFind` (`t3-02`). One click on `StdDetailsAddFind` (`e2468`). One Tab press. Post-commit readback: Right-Click Menu reads `StdDetailsAddFind`; the other three fields read `FX_UMs`, `FX_UMs`, `FX_UM` (`t3-03`, `t3-04`). No combobox remained active. (A no-change ordering note: the select and the first snapshot were issued in one block; the select is a tab action, and no Mongoose change resulted. Disclosed as D3.)
- **Global Objects OK (T3):** one click. Native response: **no alert, no error text, no parent dialog**. The dialog closed. The Designer toolbar **Save became enabled** (`t3-05`, `t3-06`). FX_Items stayed loaded in User scope.
- **Parent-dialog OK count: 0** (no parent dialog appeared).

Evidence: layout `t2-05`; committed row before OK `t3-04`; after OK `t3-06` and `t3-05` (YML).

### AC-3 — Pre-Save readback shows StdDetailsAddFind with the other three; editor closed without change; Designer Save 1 with native response verbatim; runtime check 1 after one runtime close/reopen with menu items recorded

**Status: SUPPORTED.**

- **Pre-Save readback (T4):** after one Edit > Property Class Extension and FX_UM selection: Add/Details Form `FX_UMs`; Find Form `FX_UMs`; Property `FX_UM`; Right-Click Menu `StdDetailsAddFind` (`t4-02` accessibility; `t4-04` screenshot after a view-only Properties scroll).
- **Editor closed without change (T4):** one **Cancel** (`e2194`). Dialog gone; Designer Save still enabled (`t4-05`, `t4-06`). The Designer was dirty before Save 1, as expected.
- **Designer Save 1 (T4):** one click on the toolbar Save (`e16`); no retry. **Native response, verbatim: toast title "Save", text "Global object(s) were saved."**, with a close (×) control (`t4-07`; the find result read the same text). Post-Save: toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`, FX_Items, User scope, no dialog (`t4-08`).
- **Runtime check 1 (T5):** one runtime Form close (`Close Panel FX_Items`, `f1e101`); one reopen through Form > Open > Select Form, OK once; reopened FX_Items on dumbbell, `EA`, `Each`, record 1 of 3, Save disabled (`t5-05`, `t5-06`). One right-click on the UM combobox: **`Add...`, `Details...`, `Find...`, `Help`** (`t5-07`). Escape did not dismiss; a blank-Form click did; no item chosen (`t5-08`, `t5-09`).

### AC-4 — No component changed (component-level Right-Click Menu stays blank); contingency unload at most once and only under its condition

**Status: SUPPORTED.**

- Component-level Right-Click Menu of FX_UMCombobox blank at every readback: `t1-00`, `t2-02`, `t4-08`, `t7-14`, `t7-16`.
- No component value was set, cleared or saved in T1–T7.
- The contingency unload was **not invoked** (its condition, a runtime check that lacked Details, Add and Find, was never met: T5 showed all three). **Web Client unloads: 0. Designer unloads: 0.**

### AC-5 — Details/Add/Find menu appears at runtime; Details on dumbbell opens FX_UMs on EA (Each); that Form closed clean

**Status: SUPPORTED** (one runtime run; one drill-down).

- Menu with Add, Details, Find: `t5-07` (T5), `t6-02` (T6).
- Details on dumbbell (UM `EA`): opened FX_UMs on record `EA` with Description `Each` (`t6-03` snapshot, `t6-04` screenshot).
- FX_UMs closed clean with its own panel-close control, no edit, no save (`t6-05`, `t6-06`).
- Add and Find were **not** chosen and remain untested.

### AC-6 — Clean Designer Form closed once and reopened once; one Edit > Property Class Extension readback shows the four settings including StdDetailsAddFind; component-level Right-Click Menu blank; editor closed without change; Save 2 only if a no-change OK dirtied the Form

**Status: SUPPORTED** (same browser session only).

- **Close (T7):** the clean FX_Items Designer closed once through its native tab-close control (`e247`). Native response: **no message, no prompt** (`t7-02`, `t7-03`).
- **Reopen (T7):** once through the toolbar Open button (`e13`), Select Form OK (`e1905`). FX_Items, User scope, Save disabled, no dialog (`t7-06`, `t7-07`).
- **Readback (T7):** one Edit > Property Class Extension; FX_UM selected; **Add/Details Form `FX_UMs`; Find Form `FX_UMs`; Property `FX_UM`; Right-Click Menu `StdDetailsAddFind`** (`t7-18` accessibility; `t7-19` screenshot).
- **Component-level Right-Click Menu blank after reopen** (`t7-14`, `t7-16`).
- **Editor closed without change** by one **Cancel** (`e4013`); no dialog remains (`t7-20`, `t7-21`).
- **Save 2: not performed.** The Designer stayed clean through the T7 readback (Save disabled after Cancel), so no no-change OK had dirtied the Form.

Limit: the T7 readback is a read of the same running session after a Designer close and reopen. It does not prove database storage or an independent session (section 7).

### AC-7 — No other change; no Designer unload; no Add or Find used; no dialog or menu left open

**Status: SUPPORTED, with one limitation (L3).**

- Other changes: none observed. The extension field change was limited to Right-Click Menu. No component, class, IDO, string, theme, User Preference or other extension was touched.
- No Designer unload; Web Client unloads 0.
- Add and Find: **none chosen**. Details chosen once (drill-down).
- No dialog or menu left open at the end: T7 final state (`t7-20`, `t7-21`); T6 final state (`t6-05`, `t6-06`); T5 final state (`t5-08`, `t5-09`).
- Typed text: one action, into the Components view filter (see section 5, item T7 flag). Keyboard ArrowRight: one action, focus only (section 5).
- Designer view-state changes (panel expanded; tab; filter text; pane expanded; row selected) are view state, not Form changes; Save stayed disabled through them.

Limitation L3: a Designer Save writes all dirty **global objects in the tenant**, and the message does not list them. The worker saw the Designer dirty only after the T3 Global Objects OK, so the extension is the only dirty object the worker can account for. Other dirty global objects in the tenant, if any, would not be visible here. This is unresolved, not observed.

### AC-8 — Final report with decisive evidence for AC-1 to AC-7; complete audit with exact counts; negative/positive inheritance observation; worker-written-file inventory; final state

**Status: SUPPORTED** by this report and the record (T8 section). Counts, inventory and final state are in sections 5, 8 and 2.

---

## 5. Browser audit reconciliation (exact)

### 5.1 Per-task browser automation calls

| Task | Calls | Tab lists | Tab selects | Snapshots | Finds | Screenshots | Element clicks (incl. right-clicks) | Coordinate clicks | Key presses | Typed text | Mouse move | Mouse wheel |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | 15 | 1 | 2 | 2 | 3 | 4 | 1 | 1 | 1 | 0 | 0 | 0 |
| T2 | 21 | 1 | 1 | 5 | 1 | 6 | 4 | 0 | 0 | 0 | 1 | 2 |
| T3 | 14 | 1 | 1 | 3 | 1 | 4 | 3 | 0 | 1 | 0 | 0 | 0 |
| T4 | 20 | 1 | 1 | 5 | 2 | 4 | 5 | 0 | 0 | 0 | 1 | 1 |
| T5 | 23 | 1 | 1 | 5 | 4 | 5 | 5 | 1 | 1 | 0 | 0 | 0 |
| T6 | 13 | 1 | 1 | 3 | 1 | 4 | 3 | 0 | 0 | 0 | 0 | 0 |
| T7 | 47 | 1 | 1 | 12 | 5 | 10 | 12 | 0 | 1 | 1 | 2 | 2 |
| **Total** | **153** | **7** | **8** | **35** | **17** | **37** | **33** | **2** | **4** | **1** | **4** | **5** |

Check: 153 = 7 + 8 + 35 + 17 + 37 + 33 + 2 + 4 + 1 + 4 + 5. Right-clicks (a subset of element clicks): T1 1, T5 1, T6 1 = **3**.

Parallel browser actions: **none**, apart from the T3 select and snapshot pair (D3), where the select was a tab action and the snapshot was read-only.

Browser errors or timeouts: **0** in T1–T7. Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**. Corrected visible inspections: **0**. JavaScript, evaluate, console, network inspection, navigations, refreshes, restarts: **0**.

### 5.2 Mutation and lifecycle counts (cumulative T1–T7)

| Item | Count | Source |
| --- | --- | --- |
| Extension creations | **0** | T1–T7 |
| FX_UM extension field changes (Right-Click Menu only) | **1** (`StdDetailsAddFind`) | T3 |
| Designer Saves | **1** (Save 1) | T4 |
| Designer Save 2 | **0** | T4 and T7 (no no-change OK dirtied the Form) |
| Designer close / reopen | **1 / 1** | T7 |
| Runtime close / reopen | **1 / 1** | T5 |
| Runtime right-clicks | **3** (T1 baseline; T5; T6) | T1, T5, T6 |
| Details chosen | **1** | T6 |
| Add chosen | **0** | T1–T7 |
| Find chosen | **0** | T1–T7 |
| FX_UMs Form opened / closed clean | **1 / 1** | T6 |
| Web Client Unload All Global Form Objects | **0** | T1–T7 |
| Designer unload | **0** | T1–T7 |
| Inline-editor OK | **1** (no change) | T2 |
| Global Objects OK | **1** (the FX_UM change) | T3 |
| Global Objects Cancel | **2** (read-only; T4 and T7) | T4, T7 |
| Parent-dialog OK | **0** | T3 |
| Runtime record edits | **0** | T1–T7 |
| Runtime Saves | **0** | T1–T7 |
| Component or property changes | **0** | T1–T7 |
| Other class, IDO, string, theme, User Preference or extension changes | **0** | T1–T7 |
| Record edits or imports or exports | **0** | T1–T7 |
| Check-in, undo checkout or checkout actions | **0** | T1–T7 |
| Re-logins | **0** | T1–T7 |
| Dialog or menu left open at end | **0** (end of T7) | `t7-20`, `t7-21` |

Inline-editor OK count and Global Objects OK count are reconciled to the record as stated: they are separate events on separate dialogs. Global Objects Cancel count 2 is also reconciled: two read-only closes, one in T4 and one in T7.

### 5.3 Items the controller flagged

**(a) T7 flag: `browser_type` = 1.** The typed text was `FX_UMCombobox`. The saved audit row (T7 record, action 19) records `browser_type` on `e2207` with the note "view filter". The saved evidence confirms the target and the result:

- `t7-09` (YML, Components tab snapshot): `tabpanel "Components" [ref=e2200]` contains `textbox [ref=e2207]`, which is the Components-grid filter. Before the type action it was empty.
- `t7-10` (YML, after the type): `textbox [active] [ref=e2207]: FX_UMCombobox`, still inside `tabpanel "Components"`.
- `t7-11` (screenshot): the filter box under the Details panel (next to the Components tab, with the Expand/Collapse controls) reads `FX_UMCombobox`. The Properties search box is a different control.
- `t7-14` (YML, after the filter and row selection): component Name `FX_UMCombobox`, Caption `C(FX_UMStatic)`, Type `ComboBox`, Data Source `object.FX_UM`, Right-Click Menu blank: no property changed.
- `t7-20`: Save still `[disabled]` after the filter had been set, so the filter did not dirty the Form.

Interpretation: the text went only into the Components view filter. It did not go into a component property. This is confirmed against the saved audit and the saved evidence. The flag is **not** disqualifying, and it is **not** automatically harmless either: it has been checked. The tool-level script in the T7 record also shows the call as a `fill` on the Components tabpanel's unlabeled textbox, which is the same control.

**(b) T5 documentation no-op error.** This was a **documentation-tool** call, not a browser action. It was one `Edit` on this record with identical `old_string` and `new_string` (the T5 audit row for `t5-06`). The file tool returned `No changes to make: old_string and new_string are exactly the same.` It is **not** in the browser audit, and the browser error count is unchanged at 0. The row still reads `| 15 | browser_take_screenshot t5-06 | Reopened Form before right-click |` in the record (checked by grep in T8), so the row is intact. The T6 record notes that the worker did not read the file back after the no-op call, so no-change rests on the tool's own message. This is a file-tool note, not a browser failure, and earlier sections were not rewritten to address it.

**(c) Documentation-tool errors.** Apart from (b), no other documentation-tool error appears in this worker's record. Other record corrections in T3, T4 and T5 were ordinary successful edits.

**(d) T7 ArrowRight.** One keyboard ArrowRight press (T7 action 25) was made while the Pane (01) tree row had focus. It moved **keyboard focus** into the row's Type cell (`t7-13`, Type cell highlighted). It did not expand the pane, change any value, or type anything. Save stayed disabled afterward (`t7-20`). The focus-only result is observed, once.

---

## 6. Deviations (each classified)

| ID | Deviation | Effect | Classification |
| --- | --- | --- | --- |
| D1 | T1 read the EXP-069-R3 final report **after** browser interaction began (the brief asked for it before). It cannot be corrected. | No browser decision depended on it: the T1 action was read-only and stopped before any change. | Process deviation; disclosed; **not disqualifying**, but the operator should review it. |
| D2 | T1 record's earlier "no parallel browser actions" statement was inaccurate (select and snapshot in one block); corrected in the record. | None (the select is a tab action; the snapshot was read-only). | Disclosed and corrected; not disqualifying. |
| D3 | T3: tab select and first snapshot issued in one block. | None (select on the already-current tab; snapshot read-only). | Disclosed; not disqualifying. |
| D4 | The brief's "Property Class Extensions editor" was a **Global Objects** dialog with a Property Class Extensions pane. | The route is the documented menu item; the same extension list and fields were shown. | Observed difference in naming; not disqualifying. |
| D5 | T5 documentation no-op `Edit` (section 5.3b). | None on the browser; the record row is intact. | Documentation-tool note; not disqualifying. |
| D6 | T7 `browser_type` flag (section 5.3a). | Text went into the Components view filter only; verified. | Verified non-disqualifying. |
| D7 | T7 ArrowRight focus move (section 5.3d). | Focus only; no change. | Observed; not disqualifying. |
| D8 | The T2 inline-editor OK made the Designer clean (not dirty); whether it wrote metadata is not established. | Designer clean; no stored-value readback at that point. | Unresolved detail, bounded by AC-6's later readback (value `StdDetailsAddFind` after the change). Not disqualifying. |

No deviation changed a Mongoose object other than the intended FX_UM Right-Click Menu.

---

## 7. Limitations and what is NOT claimed

- **L1 — No independent-session or database durability.** Persistence evidence is one browser session: Save 1 (T4), a runtime close and reopen (T5), and a Designer close and reopen (T7). No independent session, no database check, no cross-session check. The save acknowledgement is a UI message.
- **L2 — R2 T10 discrepancy (unresolved).** In EXP-069-R2 T10 the same extension read **blank** after its reopen. In this run the T7 readback after reopen shows `StdDetailsAddFind`. Cause not established. Possible explanations were not tested: a different save order, a cache difference, or R2's Save 2. This is not explained, and it should be kept open.
- **L3 — Tenant-wide Save scope (unresolved).** The Save message names "global object(s)" and does not list them. Other dirty global objects in the tenant, if any, would not be visible to the worker.
- **L4 — Single runtime run.** The menu was seen in T5 and again in T6 within the same session. One runtime Form close and reopen was done (T5).
- **L5 — Add and Find not tested.** Neither was chosen, by design. No Add or Find functionality is claimed.
- **L6 — Inheritance not causally isolated.** The component-level Right-Click Menu was blank throughout. The tutorial's override lesson was not tested. The extension is the observed source, not a proven one.
- **L7 — Details only.** The drill-down was one Details selection on dumbbell (EA). No other record or menu item was exercised.
- **L8 — Inline-editor OK effect unknown.** T2's OK was a no-change OK. The Designer stayed clean. Whether it wrote metadata is not established (D8).
- **L9 — Components view state.** The Components filter text, the expanded Details panel and the selected FX_UMCombobox row remain in the Designer's view state. They are not Form changes.

---

## 8. Worker-written-file inventory

**Worker-written repository files (EXP-069-R4 paths only):**

| Group | Count | Files |
| --- | --- | --- |
| Experiment record | 1 | `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (created T1; updated T2–T8) |
| T1 evidence | 6 | `evidence/EXP-069-R4/t1-00-…yml`, `t1-01-…png`, `t1-02-…yml`, `t1-03-…png`, `t1-04-…png`, `t1-05-…png` |
| T2 evidence | 11 | `t2-00` … `t2-10` (`yml` and `png`, as listed in the record) |
| T3 evidence | 7 | `t3-00` … `t3-06` |
| T4 evidence | 9 | `t4-00` … `t4-08` |
| T5 evidence | 10 | `t5-00` … `t5-09` |
| T6 evidence | 7 | `t6-00` … `t6-06` |
| T7 evidence | 22 | `t7-00` … `t7-21` |
| **T8 final report (this file)** | **1** | `evidence/EXP-069-R4/T8-final-acceptance-report.md` |
| **Total worker-written repository files** | **74** | record 1 + evidence 72 + this report 1 |

Worker-written evidence files T1–T7: 72 (checked against a directory listing in T8). Count per task: T1 6, T2 11, T3 7, T4 9, T5 10, T6 7, T7 22 (total 72).

**Excluded from the worker inventory:**

- `evidence/EXP-069-R4/harness-audit-T1.md` through `harness-audit-T7.md` (7 files): harness-written, not worker-written.
- `evidence/playwright/` tool logs: written by the browser tool, not by the worker.

**Repository confinement.** The worker wrote no file outside the EXP-069-R4 paths and did not run git or shell commands. Repository confinement is supported by the worker and harness inventories above. **Operator git review is authoritative** for repository confinement.

Cumulative worker-written file count before T8: 73 (T7 record). T8 adds the report, giving 74.

---

## 9. Knowledge state (per finding)

| Finding | Knowledge state |
| --- | --- |
| Designer FX_Items, User scope, clean at T1, T2, T7 | observed |
| Leftover inline FX_UM editor open on arrival; four fields; Right-Click Menu blank; no dropdown arrow in the inline view | observed |
| FX_UMCombobox component-level Right-Click Menu blank throughout | observed |
| Baseline runtime menu: 25 standard items, no Details, Add or Find | observed |
| Inline editor closes with one no-change OK; Designer stays clean | observed (one run) |
| Edit > Property Class Extension opens a Global Objects dialog with a Property Class Extensions pane | observed (one run) |
| Dropdown offers `StdDetailsAddFind`; Tab commits the text; other three fields unchanged | observed (one run) |
| Global Objects OK closes with no error and no parent dialog; Designer Save enabled | observed (one run) |
| Save 1 native response `Save` / `Global object(s) were saved.`; toolbar Save then disabled | observed (one run) |
| Pre-Save readback and post-reopen readback show the four settings | observed (one run each) |
| Runtime menu after close and reopen: `Add...`, `Details...`, `Find...`, `Help` | observed (one run; repeated T6) |
| Details on dumbbell opens FX_UMs on EA with Description `Each`; closes clean | observed (one run) |
| Designer close gives no prompt; reopen gives FX_Items, User scope | observed (one run) |
| Escape does not dismiss the runtime menu; blank-Form click does | observed (T1, T5, T6) |
| ArrowRight on a Pane row moves focus into the Type cell, no change | observed (one run) |
| Persistence across independent sessions or in the database | **unresolved** (not claimed) |
| Cause of the R2 T10 blank vs this run's `StdDetailsAddFind` after reopen | **unresolved** |
| Tenant-wide Save scope (other dirty global objects) | **unresolved** |
| Add and Find work | **unresolved** (not chosen) |
| The extension is the source of the menu, rather than another source | **unresolved** (not causally isolated) |
| Tutorial inheritance lesson (component override defeats extension) | **unverified** (not reproduced) |
| The EXP-064 Edit > Theme route generalises to extensions | observed for EXP-064 and this run; not verified as a procedure |
| No procedure in this experiment is replay_verified | — |

---

## 10. Final statement

- Recommendation: **ACCEPTED as observed (not replay_verified)**, subject to the operator's review of deviation D1 and the limitations L1–L3.
- The acceptance is for the observed replay in this run only. It does not claim independent-session or database durability, causal isolation, or Add or Find functionality.
- Final Designer state: FX_Items, User scope, clean, no dialog; FX_UM extension Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`; component-level Right-Click Menu blank.
- Final runtime state: FX_Items on dumbbell, UM `EA`, Description `Each`, clean; no context menu and no FX_UMs drill-down open.
- T8 made zero browser calls and zero Mongoose changes.
