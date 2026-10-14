# EXP-088 — T8 final acceptance report (documentation only)

Run `R-20261014-173235-Jbt8`, cycle 7, task T8, task_message_id `757f05ec-7261-463c-903a-f7ea5bb525c3`, worker session `95ccc4bc-8d6b-441b-a22c-1397669f23e2`. Date 2026-10-14.

**Scope of this task:** documentation and acceptance audit only. **Zero browser calls. Zero Mongoose changes.** No live inspection, no cleanup of FX_ artifacts, no git or shell use, no edits to older experiments. Findings are observed only. This report does not claim runtime behaviour, database durability or replay verification.

**Recommendation (detail in section 9):** ACCEPTED AS OBSERVED, with the conditions and one open gap listed there. The coordinator makes the authoritative acceptance decision.

---

## 1. Sources reviewed in T8 (permitted repository reads only)

| Source | Extent | Use in this audit |
| --- | --- | --- |
| `experiments/EXP-088-hello-world-part-5-section-9-fx-customerid-component-class.md` | Status headers T1–T7 (Grep, all `**Status (T…` lines); T1–T7 section bodies as recorded in the prior tasks. | Worker prose, counts, screenshot tables, deviations. |
| `evidence/EXP-088/harness-audit-T1.md` … `harness-audit-T7.md` | Read in full (7 files). Controller-generated tool ledgers. | Row-level reconciliation of browser calls, dialog OKs and Cancels, Tab commits, flagged tools, errors. |
| `evidence/EXP-088/*.png` (46 files) | Directory listing (Glob). Eight pre-OK and decisive frames re-opened in T8 (see section 4). | What each decisive frame does and does not show. |

Not re-read in T8: the remaining 38 PNGs (their content was viewed in the T1–T7 tasks and is described from those records); the full text of EXP-087 and EXP-085 (T1 and T2 read them in part, as their records disclose); the tutorial transcript. No live application state was checked.

---

## 2. Reconciliation of browser calls against the controller ledgers

The controller headers in `harness-audit-T*.md` report "actions" and "reads" tallies on definitions that the files do not state, and those tallies could not be reproduced from the rows. The row tables themselves are complete and were counted directly: each row is one tool call, and the non-browser rows (Read, Glob, Grep, Edit, Write) were separated out. The browser-call totals below are the row counts.

| Task | Worker-reported browser calls | Controller row count | Difference | Finds (controller) | Finds (worker) | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| T1 | 37 | 37 | 0 | 15 | 15 | Non-browser rows: 11 Read, 3 Glob, 4 Grep, 1 Write (19). Controller header "errors=1" is a **Read** error on the record path before the record existed (not a browser error). |
| T2 | 40 | 40 | 0 | 13 | 13 | Non-browser: 1 Grep, 10 Read, 2 Edit (13). Controller flags one `browser_type` (row 23, the name entry). |
| T3 | **47** | **48** | **+1** | **17** | **16** | Non-browser: 8 Read, 2 Edit (10). Controller flags one `browser_type` (row 38, the `%1,%2` entry). **The worker's own T3 table lists 47 rows; the controller ledger has one more find.** Which find is missing from the worker record cannot be determined from the ledgers. |
| T4 | 53 | 53 | 0 | 19 | 19 | Non-browser: 1 Grep, 7 Read, 4 Edit (12). |
| T5 | 29 | 29 | 0 | 12 | 12 | Non-browser: 4 Read, 2 Edit (6). |
| T6 | 11 | 11 | 0 | 3 | 4 | Non-browser: 3 Read, 3 Edit (6). The worker's T6 summary says "finds 4", but its own arithmetic (1+1+1+3+3+1+1 = 11) uses 3, and the ledger has 3 (rows 4, 8, 12). |
| T7 | 34 | 34 | 0 | 13 | 13 | Non-browser: 4 Read, 2 Edit (6). |
| **Cumulative** | **251** | **252** | **+1** | | | The brief expects 251. **The controller ledger gives 252**, the difference being T3's missing find. |

Cumulative counts from the controller ledgers (the cumulative figures in the record are the worker totals):

| Item | Brief expectation | Controller-ledger value | Status |
| --- | --- | --- | --- |
| Component classes created | 1 | 1 (T2 row 27: name OK, after New at row 20) | Matches. |
| Component Classes "New" (+) uses | 1 | 1 (T2 row 20) | Matches. |
| Validators-editor "+" uses | (not in brief) | 1 (T3 row 12; opened a "New"-titled picker of existing validators) | Recorded for transparency; no validator was created (no name typed). |
| Validators added to the class | 1 | 1 (T3 row 25, picker OK after choosing FX_CustomerID) | Matches. |
| Validator definitions created or changed | 0 | 0 (no action targeted a validator definition's own properties; T1 row 48 and T3 row 27 selected the row to read it) | Matches (see section 5, AC-4). |
| List-source properties added | 3 | 3 (T4 rows 29, 32, 35: Add for FX_Code, FX_Label, FX_Address) | Matches. |
| Displayed columns selected | 2 | 2 (T4 rows 45 and 46: FX_Code, FX_Label; FX_Address not selected) | Matches; see the T4 accessibility conflict in section 6. |
| Tab commits | 6 (worker) | 6 (T2 row 24: 1; T3 rows 22, 39, 52: 3; T4 rows 15, 20: 2) | Matches. |
| Dialog OK clicks | 8 (worker) | 8 (T2 row 27: 1; T3 rows 25, 42, 46: 3; T4 rows 39, 51, 55: 3; T5 row 7: 1 outer) | Matches. |
| Dialog Cancel clicks | 6 (worker) | 6 (T1 rows 35, 53: 2; T5 rows 25, 29: 2; T7 rows 32, 34: 2) | Matches. |
| String or message prompts / answers / created | 0 / 0 / 0 | 0 / 0 / 0 (no spelled-string or create prompt appears in any ledger; the controller's "Spelled strings" field is empty in all seven) | Matches. |
| Contingency corrections | 0 | 0 | Matches. |
| Designer Saves (native) | ≤ 1 | 1 (T6 row 7) | Matches. |
| Designer close / reopen | 1 / 1 | 1 / 1 (T7 rows 6 and 14) | Matches. |
| Component changes | 0 | 0 (no ledger row changes a component, caption or layout) | Matches. |
| Runtime actions | 0 | 0 (no tab 1 selection after T1's list; no runtime Form opened) | Matches. |
| Checkout actions | 0 | 0 | Matches. |
| Re-logins / session-expiry procedure | 0 | 0 (no sign-in or expiry text in any ledger or record) | Matches. |
| Screenshot calls | 47 (worker: 46 PNG + t2-06 overwritten) | 47 (T1 5, T2 9, T3 9, T4 9, T5 5, T6 3, T7 7) | Matches; the 47 calls produce **46 files** because `t2-06` was written twice. |

**Corrected cumulative browser-call total: 252** (controller row count). The worker-reported 251 is short by the one T3 find the worker's own table does not list.

---

## 3. Flagged tools, prohibited-tool hits and the authorized entries

The controller reports `prohibited-tool hits` of 1 in T2 and 1 in T3, both `browser_type`. The brief's enforced restriction is on **evaluate / run-code** and browser JavaScript. `browser_type` is not in that set, and the controller header itself states that "flagged tools may be allowed by other briefs". Each use is reviewed:

| Ledger row | Task | Value entered (exact, from the ledger) | Target | Assessment |
| --- | --- | --- | --- | --- |
| T2 row 23 | T2 | `FX_CustomerID` | Name textbox of the component-class name prompt (New) | **Authorized**: the brief requires "enter the Name FX_CustomerID". The value is the exact class name and matches `t2-04`. |
| T3 row 38 | T3 | `%1,%2` | Parameters text box of the validator's Parameters dialog | **Authorized**: the brief requires "enter %1,%2 exactly". The value matches `t3-06` and the Validators grid entry `%1,%2`. |

No prohibited action was found in any ledger. The T1–T7 ledgers record zero evaluate or run-code calls, zero console or network calls, zero direct navigation (the only navigation is the tab-level Form-menu entry, which is not a URL), and zero refresh or restart.

---

## 4. Decisive frames re-opened in T8

Frames re-opened in T8 (in addition to the frames read in T1–T7): `t2-04`, `t3-03`, `t3-06`, `t4-02`, `t5-04`, `t7-00`, `t7-02`, `t7-06`. What each shows and does not show:

| File | Shows | Proves | Does NOT prove |
| --- | --- | --- | --- |
| `t2-04-name-prompt-FX_CustomerID-before-OK.png` | New name prompt, Name = `FX_CustomerID`, OK / Cancel; Global Objects behind. | The exact name entered before the name OK. | That the class was stored. |
| `t3-03-add-validator-picker-FX_CustomerID-before-OK.png` | The "New"-titled picker with `FX_CustomerID` in its Name combobox, OK / Cancel. | The validator was chosen before the picker OK. The title "New" on this picker is misleading (it is a picker of existing validators). | That a new validator was created (none was). |
| `t3-06-validator-Parameters-%1-%2-before-OK.png` | Parameters dialog: text box `%1,%2`; combobox empty; OK / Cancel. | `%1,%2` entered before the Parameters OK. | The meaning of the empty combobox (unresolved). |
| `t4-02-list-source-Type-IDO-Collection-and-IDO-FX_HelloWorld01-committed.png` | Edit List Source Specifications: Type `IDO Collection`, IDO `FX_HelloWorld01`; **Properties textbox empty and enabled; Columns to Display greyed**. | Type and IDO committed before the Properties step. **Corrects** the T4 record's wording: Columns stayed disabled until Properties was set. | Anything about the stored list source. |
| `t5-04-after-readback-Cancel-state-Save-enabled-no-dialog.png` | FX_Orders frame after the readback Cancel; no dialog. | The dialog closed and the Designer is in the FX_Orders frame. | The toolbar Save state. At this scale the Save icon is not clearly distinguishable; the enabled state rests on the accessibility read (T5 find). |
| `t7-00-pre-close-clean-FX_Orders-User-no-dialog.png` | FX_Orders canvas; Save and Undo greyed; footer `ScopeType: User`; no dialog. | The clean pre-close state (Save greyed in the frame). | Stored state. |
| `t7-02-form-menu-recent-forms-before-choosing-FX_Orders.png` | Form menu open: `Definition`, `Sign Out`, recent forms including `FX_Orders`, `IDO Properties`, `IDOs`, `FX_HelloWorld01`, … | The `FX_Orders` recent entry was present before it was chosen. | That the entry opened the right Form (see t7-03). |
| `t7-06-final-state-after-readback-Cancel-clean-FX_Orders-User.png` | FX_Orders canvas; footer `ScopeType: User`; no dialog. | The final frame: no dialog, FX_Orders, User. | Save/Undo state at this scale (accessibility: both disabled). |

Frames re-read in earlier tasks and relied on here (decisive): `g0-01`, `g0-02`, `g0-05` (validator In Collection), `t2-02` (F–G slice, no FX_CustomerID), `t2-01` (E/F slice; name misleading), `t2-05`, `t3-04`, `t3-07`, `t3-08`, `t4-06`, `t4-07`, `t4-08`, `t5-00`, `t5-01`, `t5-02`, `t5-03`, `t6-00`, `t6-01` (toast), `t6-02`, `t7-01`, `t7-03`, `t7-04`, `t7-05`.

---

## 5. Acceptance checks AC-1 to AC-5

### AC-1 — Sources reviewed; session usable; Designer User and clean with FX_Orders; Component Class dialog layout; FX_CustomerID absent; validator present (In Collection)

**Status: SUPPORTED, with limits.**

- Sources: T1 record, "Sources reviewed" table (AGENTS.md; hello-world-pt5 Sections 9–10 and transcript 13:06–16:22; web-designer "Creating a Component Class object"; global-objects-additional "Modifying global objects"; EXP-087 status and sections; EXP-085 outcome and partial read; EXP-064 outcome). Limits: EXP-085 read in part; EXP-087 read in part (lines 1–507 of 1409 in T1, then T2 read T5–T6 sections).
- Session usable: no expiry, sign-in or Session Expired text in any ledger or record; re-login count 0.
- Designer: FX_Orders heading and tab selected, `ScopeType: User`, Save and Undo disabled, no dialog. Evidence: `g0-01-designer-fx-orders-start-state.png` (identity, scope, clean); T2 snapshot text (`t2-00` was not saved as an image; the state is recorded by find and by `t2-03`–`t2-04`).
- Dialog layout: `g0-02` (Component Classes heading; list controls `+`, copy, trash; Properties pane empty; OK / Cancel / Help). Layout also recorded at T2 (`t2-01`, `t2-02`).
- FX_CustomerID absent: `t2-02-component-classes-FG-slice-before-New.png` shows the F–G slice with `FrequencyVar` followed directly by `GetCharacterTypeColumns` (no FX_CustomerID). `t2-01` shows the E/F slice (name `…FG…` is misleading; content is E/F). Accessibility reads in T1 and T2 agree. **Limit:** `g0-03` is named "after-scroll" and shows the D rows, not F–G; the T1 F–G absence rests on accessibility only. The absence is a client-view observation, not a database read.
- Validator present (In Collection): `g0-05-validator-FX_CustomerID-readonly-In-Collection.png` shows FX_CustomerID selected between `FullTextIndexNameValidator` and `GE`, Type `In Collection`, Error Message `mIsNotAValid`; Parameters is clipped in the frame, and its full text (`FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`) is from accessibility. T3 `t3-04` re-read the same validator's definition after the picker add (In Collection, same Parameters, `mIsNotAValid`).

### AC-2 — Class created once through New; validator added once with `%1,%2`; Validate Immediately True; List Source Type/IDO; three properties in order; two displayed columns; Tab before OK; each dialog confirmed once; pre-OK screenshots

**Status: SUPPORTED.**

| Element | Count / value | Evidence (before OK) |
| --- | --- | --- |
| Class created via New (+) | 1 (T2 row 20); name prompt OK 1 (row 27) | `t2-03` (empty prompt), `t2-04` (name before OK), `t2-05` (new row and property sheet). |
| Validator added once | 1 (T3 row 25) | `t3-03` (picker, FX_CustomerID chosen, before OK); `t3-04` (one grid row). |
| Parameters `%1,%2` | entered (row 38), Tab (row 39), OK (row 42) | `t3-06` (before OK); `t3-07` (grid `%1,%2` before the Validators OK). |
| Validators editor OK | 1 (row 46) | `t3-07` (before). Post-OK value `FX_CustomerID(%1,%2)` (T3 find; T5 and T7 readbacks). |
| Validate Immediately True | Tab 1 (row 52); no OK in this step | `t3-08` (after Tab). Readbacks in T5 and T7 (accessibility). |
| List Source Type / IDO | Type `IDO Collection` (Tab, row 15); IDO `FX_HelloWorld01` (Tab, row 20) | `t4-02` (both committed, before the Properties step). |
| Properties FX_Code, FX_Label, FX_Address | 3 Adds (rows 29, 32, 35), in order | `t4-03` (empty picker), `t4-04` (right list in order, before the picker OK). Field `FX_Code,FX_Label,FX_Address` (T4 find). |
| Columns to Display FX_Code and FX_Label | 2 selections (rows 45, 46); FX_Address not selected | `t4-05` (none selected), `t4-06` (FX_Code and FX_Label highlighted, FX_Address not), result `1,2` (T4 find). Accessibility conflict: see section 6. |
| Dialog OKs, each with a pre-OK frame | 8 OKs: name (t2-04), validator picker (t3-03), Parameters (t3-06), Validators editor (t3-07), Properties (t4-04), Columns (t4-06), List Source (t4-07), outer Global Objects (t5-00) | Each of the eight OKs has a pre-OK frame. Validate Immediately had no OK. |

**Limits:**
- The Properties and Columns picker values were set by picker actions, not by typing, so the "Tab before OK" rule was met for typed fields (Name, Parameters, Type, IDO, Validate Immediately) but not as a Tab press before the picker OKs. The value was visible in the field before each picker OK. Disclosed as T4 D4.
- The validator was chosen from a picker whose title reads "New" (see section 7).

### AC-3 — Readback (validator `%1,%2`, Validate Immediately True, List Source verbatim with FX_HelloWorld01, three properties, two displayed columns); exactly one native Save with its response

**Status: SUPPORTED, in-session readback only.**

- **First readback (T5):** Name `FX_CustomerID`; Validators `FX_CustomerID(%1,%2)`; Validate Immediately `True`; List Source (accessibility, verbatim): `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`. The List Source editor (read-only, closed with its own Cancel) shows Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties `FX_Code,FX_Label,FX_Address`, Columns to Display `1,2`, Rec Cap Override `0`. Evidence: `t5-02` (Name; Data Source group; Validators, Validate Immediately and List Source are below the frame, accessibility only), `t5-03` (List Source clipped, Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True` in one frame). The T5 editor was not screenshotted.
- **Native Save (T6, one invocation):** pre-Save `t6-00` (Save enabled, no dialog). Immediately after the click, `t6-01` shows the toast, title **`Save`**, text **`Global object(s) were saved.`**, with a `Close` control; the toolbar Save and Undo are disabled. The toast cleared on its own after about six seconds (`t6-02`: clean, no dialog). **The native response is a UI acknowledgement.** It is not a database read.
- Corrections: none. The contingency was not invoked.
- Exactly one Designer Save: the ledger (T6 row 7) and the T6 record agree.

**Limits:** the readback values are the Designer's in-session state (no stored or database read). The "1,2" displayed-column encoding is positional, read as FX_Code and FX_Label on the basis of the picker order and the T4 rendered highlight; the editor value alone does not name the columns. The `STDOLE`, `DISPLAY(1,2)` and `RECORDCAP(0)` tokens were generated by the UI (the worker typed none of them).

### AC-4 — Clean Form closed once and reopened once; reopened readback matches AC-3; no component changed; no validator or other class changed

**Status: SUPPORTED as observed, across a weak boundary; one gap on the validator (section 9).**

- Close: one Form-tab close (T7 row 6). Pre-close clean (`t7-00`: Save greyed, User, no dialog). Immediately after: no save or discard prompt; the canvas is blank and the footer still reads User (`t7-01`).
- Reopen: one Form-menu recent-forms entry (T7 row 14). The menu was captured before the choice (`t7-02`, `FX_Orders` listed). The reopened Form is clean, User, heading FX_Orders (`t7-03`).
- Reopened readback (T7): Name `FX_CustomerID` (`t7-04`); Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (accessibility; the Validators and List Source rows are below `t7-04`'s frame); the List Source editor (read-only, closed with its own Cancel) shows the same fields (`t7-05`). The reopened readback matches the T5 readback on every value.
- Final: the List Source editor was closed with its own Cancel once (T7 row 32), and the readback dialog with its outer Cancel once (T7 row 34). `t7-06`: no dialog, FX_Orders, User, Save and Undo disabled.
- No component changed: zero component, caption or layout actions in any ledger.
- No other class changed: the only class action was the FX_CustomerID row selection (view state). The component classes list was scrolled but no other row was selected or edited (zero "other class" actions in the ledgers).
- No validator changed: see the gap below.

**Interpretation limits:** the close and reopen are a same-session, close-only boundary. The reopened values are Designer state reloaded through the Form menu. **This is a weak persistence boundary. It is not replay verification and not independent database durability.**

**Gap (not blocking, must be disclosed):** the validator's own definition was read in T1 (`g0-05`, In Collection, Parameters, `mIsNotAValid`) and again in T3 (`t3-04`, after the picker add and before the class-level Parameters step). It was **not re-read after the class-level Parameters entry (T3 rows 37–46) or after the reopen**. The "no validator changed" finding therefore rests on the ledgers: no action in T1–T7 edited a validator's own properties, and the Parameters dialog that received `%1,%2` was the class-level row's Parameters control (its Validators grid column changed from blank to `%1,%2`). A read-only re-check of the validator definition would close this gap; T8 does not perform it.

### AC-5 — Final report; decisive evidence for AC-1 to AC-4; exact audit counts; worker-written-file inventory; final state

**Status: SUPPORTED by this report.** Counts are reconciled in section 2. The file inventory is in section 8. The final state is in section 10.

---

## 6. Discrepancies, corrections and unexplained transitions

These are disclosed without inventing causes.

1. **T3 browser-call count (corrected).** The worker reported 47 calls and 16 finds; the controller row ledger shows 48 calls and 17 finds. The worker's own T3 table does not list the extra find, and the ledgers do not identify it. The cumulative figure is therefore **252**, not 251. The record's T3 audit heading was annotated in T8.
2. **T3 misleading filename.** `t3-02-validators-plus-opened-New-name-prompt-cancelled.png` shows the "New"-titled picker **before any choice**. The prompt was **not cancelled**. The word "cancelled" in the name is wrong and the frame is **not** evidence of a cancellation. What it shows is that the `+` opened a prompt with an empty Name combobox.
3. **T2 overwritten screenshot.** `t2-06-property-sheet-data-source-expanded.png` was captured twice. The collapsed frame no longer exists; the surviving frame shows Data Source expanded. Recorded as D2 in T2 and in the T8 file count (47 calls, 46 files).
4. **T2 misnamed screenshot.** `t2-01-component-classes-EF-FG-slice-before-New.png` shows the E/F slice, not F–G. `t2-02` shows F–G. Recorded in T2 (D1).
5. **T4 column-selection accessibility disagreement.** After FX_Code and a Control-click on FX_Label, the rendering (`t4-06`) highlights both rows and leaves FX_Address unhighlighted. The accessibility tree marks only FX_Code `[selected]` (FX_Label is `[active]`). The worker did not click again to resolve it. The picker's result, `1,2`, which the List Source editor reads in T4, T5 and T7, is consistent with **both** FX_Code and FX_Label being selected and FX_Address not. The rendered selection and the positional result agree with each other; the accessibility state is the outlier.
6. **T4 Columns enabled-state wording (corrected in the record).** The T4 record said the Properties and Columns rows became enabled after the IDO commit. `t4-02` shows Properties enabled and Columns greyed. Corrected in the record.
7. **Designer Save state transitions (unexplained).** Observed sequence: enabled at T2 after the name OK; enabled at the start of T3 and at the start of T4; **disabled at the post-OK check after the T4 List Source OK** (the exact step at which it changed was not sampled between the T4 start and that check); disabled at the start of T5 (before the outer OK); **enabled after the T5 outer OK**; enabled after the T5 readback Cancel; enabled at T6 pre-Save; disabled after the T6 Save; disabled at T7 pre-close, after the close, after the reopen and after the T7 readback Cancel. Enabled while the outer dialog was open in T3, disabled while it was open in T4 and T5 before its OK. **The cause is not established.** The state did not track every class edit, so it cannot be explained from the edits alone. It is not acceptance-critical: exactly one native Save was invoked, and its response is recorded.
8. **Rec Cap Override transition (corrected in the record).** The T5 record said the blank-to-`0` change happened between the T4 List Source OK and the T5 readback. The T4 post-OK find already shows `RECORDCAP(0)` in the List Source string, so the change is tied to the T4 List Source OK. The T4 screenshot `t4-07` (before that OK) shows the field blank. The cause is not verified (the record says the UI generated the token; the worker did not type it).
9. **Controller header metrics.** The "actions" and "reads" figures in the controller headers (e.g., T1 "14 actions, 23 reads") do not match any definition the files state, and they could not be reproduced from the rows. The row tables were used instead. This is a limit on the controller summaries, not on the rows.
10. **T1 controller error.** `harness-audit-T1` lists one error: a Read of the EXP-088 record path, before the record existed. It is not a browser error and is consistent with the T1 record (which created the record in T1).

---

## 7. Interpretation of the validator picker ("New" title)

The Validators editor's leftmost list button (`+`, T3 row 12) opened a prompt titled **"New"**. Its Name combobox listed the **existing** validators (283 entries in the accessibility tree, including FX_CustomerID). The worker chose FX_CustomerID from that list, committed with Tab, and confirmed with OK. The ledgers show no typed name in this prompt and no create path. The title "New" is therefore misleading for this control; it is an add-from-existing picker.

**Unresolved:** whether typing an unlisted name into this prompt would create a validator. It was not tested and must not be tested as part of this experiment.

---

## 8. Worker-written file inventory (T8 reconciliation)

Files written by the worker, reconciled per task against the screenshot ledgers:

| Task | Worker-written files | Count |
| --- | --- | ---: |
| T1 | `experiments/EXP-088-…md` (created); `g0-01`–`g0-05` PNG | 1 + 5 |
| T2 | `t2-01`–`t2-08` PNG (`t2-06` written twice) | 8 |
| T3 | `t3-00`–`t3-08` PNG | 9 |
| T4 | `t4-00`–`t4-08` PNG | 9 |
| T5 | `t5-00`–`t5-04` PNG | 5 |
| T6 | `t6-00`–`t6-02` PNG | 3 |
| T7 | `t7-00`–`t7-06` PNG | 7 |
| **Subtotal (T1–T7)** | 1 record + **46 PNG** | **47** |
| T8 (this task) | `evidence/EXP-088/T8-final-acceptance-report.md` (created); the record edited (T8 corrections and status) | 1 new file + 1 edit |

Other files present in `evidence/EXP-088/` that were **not** worker-written: `harness-audit-T1.md` … `harness-audit-T7.md` (7 files, controller-generated). The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/`; those are excluded. The worker ran no git or shell command.

**Repository confinement:** the worker's inventory above is the worker's account. The harness computes confinement from before/after Git state; operator git review is authoritative. This report does not assert a git result.

---

## 9. Recommendation

**ACCEPTED AS OBSERVED**, with these conditions:

1. **The validator was not re-read after the class-level Parameters entry (T3) or after the reopen.** The "no validator changed" statement (AC-4) rests on the action ledgers, not on a post-T3 read of the validator definition. If the coordinator requires a direct read, that is a separate read-only task. T8 does not perform it.
2. **The Designer Save state transitions (section 6.7) are unexplained.** They do not affect the single native Save and its recorded response, but they should be understood before any later experiment relies on the Save-enabled indicator.
3. **The reopen and readback are a weak persistence boundary.** They support "the Designer re-presents the class after a same-session close and reopen", and nothing more.
4. **The T3 count discrepancy (47 reported, 48 in the ledger).** The cumulative total is 252. This is a reporting correction, not a missing action: the ledger shows one more find, and no other task is affected.

Nothing in the ledgers is a prohibited action, and no string or message was created.

**Not claimed by this report:** database durability of the class; that the saved definition equals the Designer readback; runtime behaviour of the FX_CustomerID component class (Section 10 and Section 13 are out of scope); replay verification of any step; that the T5 and T7 readbacks reflect stored metadata.

---

## 10. Final inherited application state (as of T7; not re-checked in T8)

- Browser: Designer tab (index 0) selected; tab 1 (Mongoose portal) untouched by T2–T8 except the tab list. The URL carries `&MGForm=FX_Orders`.
- Form: `FX_Orders` open; `ScopeType: User`; heading `FX_Orders`.
- Designer: clean (toolbar Save disabled, Regenerate Form disabled, Undo and Redo disabled) as read in T7 (`t7-06`).
- Dialogs: none open.
- Component class: `FX_CustomerID` exists (User version), Validators `FX_CustomerID(%1,%2)`, Validate Immediately `True`, List Source `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))`, Validate Immediately Prompt blank, Message On Status Bar `False`.
- Validator `FX_CustomerID`: In Collection on `FX_HelloWorld01`; Parameters `FX_HelloWorld01( PROPERTY(FX_Code) SETP(%1=FX_Label,%2=FX_Address) )`; Error Message `mIsNotAValid` (as last read in T3).
- Cleanup: none performed. The FX_ artifacts (class, validator from EXP-087) remain and need an explicit operator decision.

---

## 11. T8 documentation-only action audit

| Item | T8 |
| --- | ---: |
| Browser calls | **0** |
| Mongoose changes (any) | **0** |
| Search calls (Glob 2, Grep 2) | 4 |
| Read calls (7 audit files, 8 PNG frames) | 15 |
| Edit calls on the EXP-088 record (T3 heading; T4 Columns sentence; T5 Rec Cap sentence; top status line; T8 section) | 5 |
| Edit calls on this report (5 successful; 1 failed on a non-matching string, then retried) | 6 |
| Write calls (this report, created) | 1 |
| Non-browser calls in total | 31 |
| Session-expiry procedure, re-login | 0 |

Cumulative browser-call audit (T1–T8), using the controller row ledgers: 37 + 40 + 48 + 53 + 29 + 11 + 34 + 0 = **252** browser calls.

Cumulative counts (T1–T8): component classes created **1**; Component Classes "New" **1**; validators added to the class **1**; list-source properties **3**; displayed columns **2**; dialog OK clicks **8** (outer Global Objects OK **1**); dialog Cancel clicks **6**; Tab commits **6**; string or message prompts **0** (answers **0**; created **0**); contingency corrections **0**; Designer Saves **1**; Designer close / reopen **1 / 1**; component changes **0**; runtime actions **0**; checkout actions **0**; re-logins **0**.

---

## 12. Knowledge state (per finding; observed only)

| Finding | State |
| --- | --- |
| Edit > Component Class opens a Global Objects dialog with a Component Classes list and a Properties pane | observed |
| FX_CustomerID was absent from the Component Classes list before creation (F–G slice, `t2-02`; client view) | observed |
| The validator FX_CustomerID is In Collection on FX_HelloWorld01 with `mIsNotAValid` (T1, T3) | observed |
| The Component Classes "New" (+) opens a name prompt; OK creates the class | observed |
| The Validators editor's "+" opens a "New"-titled picker of existing validators; choosing one and OK adds one class row | observed (create-new path untested) |
| The class Parameters control (cube) opens a Parameters dialog; `%1,%2` entered, Tab, OK stored as `%1,%2` on the row | observed |
| Validate Immediately `True` set from its dropdown, Tab-committed | observed |
| List Source Type `IDO Collection`, IDO `FX_HelloWorld01`, Properties FX_Code, FX_Label, FX_Address, Columns 1,2 (positional) | observed |
| The List Source string `STDOLE FX_HelloWorld01( PROPERTIES(FX_Code,FX_Label,FX_Address) DISPLAY(1,2)RECORDCAP(0))` (verbatim, accessibility) | observed |
| One native Designer Save produced the toast `Save` / `Global object(s) were saved.` | observed (UI acknowledgement) |
| A same-session close and reopen re-presents the class values | observed, across a **weak persistence boundary**; not replay_verified; not independent database durability |
| Designer Save state transitions (T3 enabled; T4 disabled after the List Source OK; T5 enabled after the outer OK) | unresolved (cause not established) |
| Rec Cap Override blank → `0` tied to the T4 List Source OK | observed (cause unresolved) |
| T4 accessibility shows only FX_Code `[selected]` while the rendering highlights FX_Code and FX_Label | observed (conflict unresolved by a further click; `1,2` consistent with both selected) |
| The validator definition was unchanged by the class-level Parameters step | unresolved (no post-T3 read; ledger-based inference only) |
| The class is persisted to the database; the Save wrote the stored definition | unresolved (not checked) |
| Runtime behaviour of the class (Sections 10 and 13) | unresolved (out of scope; not claimed) |
| Tutorial Section 9 as a whole | unverified (tutorial transcript; the FX_ mapping is the brief's) |

---

## 13. Items for the coordinator

1. Decide whether to accept EXP-088 as observed with conditions 1–4 in section 9, or to request a read-only validator-definition check first.
2. Decide the cleanup of the FX_ artifacts created by EXP-087 and EXP-088 (the class `FX_CustomerID`, the validator `FX_CustomerID`, and the List Source). Not performed here.
3. Section 10 (EXP-089) would apply the class to the FX_Orders combobox and grid column. That needs a fresh task and the coordinator's authorization.
