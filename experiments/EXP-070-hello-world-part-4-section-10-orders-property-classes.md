# EXP-070 — Hello World Part 4 Section 10: Orders Property Classes (FX_CustomerID, FX_Item, FX_OrderNumBase)

**Final status (T9, documentation only; zero browser calls; zero Mongoose changes): every acceptance check AC-1 to AC-8 is supported at UI level, same session, as observed only. Recommendation: ACCEPTED as observed only, subject to one operator confirmation of the harness `browser_type` flag (see the T9 section and `evidence/EXP-070/final-acceptance-report.md`). NOT replay_verified. NOT database-durable. Final counts: New 3; toolbar Save 1; Form close 1; Form reopen 1; absence queries 3; recovery queries 3; existing-class modifications 0; strings created 0; unloads 0; checkout-management actions 0; re-logins 0.**

**Chronological status log (superseded by the final status above): T1 COMPLETE (read-only preflight, baseline, positive control and the three absence gates; NO New, NO Save, NO class created). T2 COMPLETE (ONE New; FX_CustomerID configured with its seven values and verified in the pending row; row left PENDING; Save NOT invoked; FX_Item and FX_OrderNumBase NOT created; Form left OPEN with Save enabled, awaiting a separately authorized task). AC-3 SUPPORTED at UI level (pending, pre-Save). T3 COMPLETE (ONE New; FX_Item configured with its five explicit fields and verified in the pending row 3; FX_CustomerID still pending in row 2 and unchanged; both rows pending; Save enabled and NOT invoked; FX_OrderNumBase NOT created; Form left OPEN). AC-4 SUPPORTED at UI level (pending, pre-Save). T4 COMPLETE (ONE New, the third and last permitted; FX_OrderNumBase configured with its five explicit fields and verified in pending row 4; rows 2 (FX_CustomerID) and 3 (FX_Item) still pending and unchanged; all three new rows pending together; Save enabled and NOT invoked; Form left OPEN). AC-5 SUPPORTED at UI level (pending, pre-Save). T5 COMPLETE (READ-ONLY final pre-Save verification: each of the three pending rows inspected separately by native row selection and read back; all values match the brief; FX_ItemBase unchanged; three pending stars present; Save enabled; no dialog; NO New, NO Save, NO close/reopen, NO FiP, NO checkout action). T6 COMPLETE (ONE toolbar Save, invoked once and not retried; the browser action returned without error and NO native success, warning, validation or error text was displayed; Save settled disabled, pending stars cleared on rows 2-4; settled values verified by read-only row selection; FX_Item's inherited Data Type, Length, Column Data Type and Label String ID now displayed; NO close/reopen, NO recovery, NO checkout action). AC-6 SUPPORTED at UI level (one Save invoked; native response recorded verbatim as none; settled state observed). T7 COMPLETE (ONE clean close of Property Classes through its Form-tab control; ONE reopen through Form > Open > Select Form as IdoPropertyClasses; reopened clean in Filter in Place mode with blank criteria, Save and New disabled, no dialog; NO recovery query, NO New, NO Save, NO checkout action, NO unload). T8 COMPLETE (THREE read-only exact-name Filter in Place recovery queries, one per class, each run once: FX_CustomerID, FX_Item, FX_OrderNumBase; each returned exactly ONE data row matching its pre-Save configuration; the recovered values match the pre-Save records, with inherited FX_Item values displayed and AUTONUMBER() displayed; Save disabled; no dialog; NO New, NO Save, NO close/reopen, NO checkout action, NO unload). AC-7 SUPPORTED at UI level, same session: the clean Form was closed once and reopened once (T7), and one recovery query per class returned exactly one matching row (T8). Limitations: same-session UI recovery only; the asterisk on the FX_Item Domain IDO Name label differs between the screenshot and an accessibility read (unresolved). AC-8 is left open for separate documentation and acceptance review. Ordinary Form close/reopen is a weak persistence boundary and does NOT establish database durability. Persistence is NOT verified.**

Classification: **observed only (single session, UI level). NOT replay_verified.** Nothing here establishes database durability, cross-session persistence, or any metadata state beyond the displayed Web Client values.

## Run identity

- Run `R-20261013-132859-BBJH`, experiment EXP-070, **cycle 0, task T1** (task_message_id `4bacbc6a-7b70-4806-b56b-c930ed338107`), worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`.
- Date 2026-10-13 (system date). Mongoose Revision Date values for existing rows read `10/10/2026`; the add-mode placeholder read `10/13/2026`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar; the operator's sign-in account is shown in the same bar). The "Site Developer" context was not visible and is not verified.
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User. Target IdoPropertyClasses, FX_CustomerID, FX_Item, FX_OrderNumBase (absence only), FX_ItemBase (read only), FX_HelloWorld01, FX_Items (reference only).
- Evidence directory `evidence/EXP-070/`.
- **Record creation disclosure:** this record did not exist at the start of T1 (a Glob for `experiments/EXP-070*` found nothing). It was created by this worker in T1. The git log at session start lists `EXP-070: approved brief` (commit `d1f374a`); the brief text itself was not read (`tools/` is out of scope).

## Sources read before any browser action

- `AGENTS.md` (full): LEARNING MODE; FX_ scope extension; safety; experiment rules; evidence capture; recovery.
- `docs/mongoose/transcripts/hello-world-pt4.md`: Section 10 (lines 249–257, narrated 13:12–14:56 at lines 535–552), the schema quick reference (lines 333–344), and the Section 11 narration (lines 552+) for scope only (not executed). Trust: unverified (speech-to-text transcript).
- `experiments/EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md` (lines 1–457 read; the first page): Select Form route to IdoPropertyClasses; Filter-in-Place exact-match behaviour; zero-row placeholder; checkout indications; inherited values blank before Save and populated after.
- `experiments/EXP-048-hello-world-part-2-two-property-classes-with-one-s.md` (lines 1–572 read; the first page): Filter-in-Place absence gates with post-gate positive controls; F2 lookup for Column Data Type with prefix filter; numeric Default Value entry; asterisk inventory; settled-Save and close/reopen patterns.
- `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md` (header and AC-2 section): FX_HelloWorld01 IDO and SQL table; `FX_Code` nvarchar(30) NOT NULL primary key; `FX_Label` nvarchar(100) nullable. The IDO was accepted and checked in (Revision 1 to 2).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 10 narrated values (adapted to FX_ names in the brief): Customer ID class String, Length 50 in the tutorial (brief: 30), Label `s id` (brief: FX_sCustomerID), Domain IDO Customer (brief: FX_HelloWorld01), Domain Property ID (brief: FX_Code), List Name (brief: FX_Label). Item class: base class Item Base (brief: FX_ItemBase), Domain IDO Items (brief: FX_Items), Domain Property Item (brief: FX_Item), List Description (brief: FX_Description). Order Num Base: Long Integer, `AUTO NUMBER()` spoken, Int, `s order number` (brief: FX_sOrderNumber), Justify Right.

## Scope of T1 (bounded instruction)

Read-only preflight: list tabs; open IdoPropertyClasses once through Form > Open > Select Form; read FX_ItemBase as the positive control; run one fresh exact-name Class Name query each for FX_CustomerID, FX_Item and FX_OrderNumBase; create this record with the baseline, action audit and file inventory. **Stop before any New.** No class, string, IDO, table or other object was created, changed or unloaded.

## Acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Property Classes open and clean; FX_ItemBase positive control with checkout indication | **SUPPORTED (UI level, qualified).** Sources reviewed (above). Session usable: Mongoose Web Client loaded, no Session Expired modal, no sign-in page, no portal banner, no dialog. IdoPropertyClasses opened once through Form > Open > Select Form (filter `PropertyClass`; one row Property Classes / IdoPropertyClasses; OK). Identity: tab heading `Property Classes` selected, URL `favoriteContext=IdoPropertyClasses`, status `Filter in Place` with blank criteria, Save `[disabled]`. Positive control FX_ItemBase read: String, 20, nvarchar, FX_sItem; Base Class and Domain blank; checkout indication: row checkbox checked and Check In / Undo Check Out enabled (see Observations). | `t1-00` (baseline identity, blank FiP); `t1-01` (positive control after F4) | Display values only. Checkout meaning ("checked out to the operator") is inferred from prior records (EXP-047-R2, EXP-048) and not re-established here. Locked By is masked in the accessibility tree and was read from the screen. |
| **AC-2** Absence gate: one fresh exact-name query each for FX_CustomerID, FX_Item, FX_OrderNumBase; zero rows | **SUPPORTED (UI level, one run).** Each query: exact text in Class Name only, other criteria blank, one Tab, one F4, settled result: **zero data rows** and only the add-mode placeholder (blue star, blank Class Name, red asterisk on the Class Name label and grid header). Save greyed in each settled screenshot (the accessibility check of Save was made at the end of T1, not after each gate). Post-gate positive control FX_ItemBase returned its row again (one row, no star) after the three gates. | `t1-03` / `t1-04` (FX_CustomerID criteria before F4 / zero rows); `t1-05` (FX_Item zero rows); `t1-06` (FX_OrderNumBase zero rows); `t1-07` (post-gate control) | Pre-F4 screenshots were NOT captured for FX_Item and FX_OrderNumBase; their criteria were confirmed by an accessibility read of the Class Name textbox immediately before F4 (`find` "FX_Item"; targeted snapshot of the Class Name textbox showing `FX_OrderNumBase`). Zero-row results rest on the displayed grid and placeholder, not on an empty-grid accessibility snapshot. Case-variant queries were not typed (case-insensitive coverage by inference, as in EXP-044 and EXP-048). |
| **AC-3** FX_CustomerID pending (one New) | **NOT RUN** (creation prohibited in T1). | — | — |
| **AC-4** FX_Item pending (one New) | **NOT RUN** (creation prohibited in T1). | — | — |
| **AC-5** FX_OrderNumBase pending; Default Value route recorded | **NOT RUN** (creation prohibited in T1). Default Value control observed in the layout only (see Observations). | `t1-00` / `t1-01` layout | No lookup options recorded because no row was created. |
| **AC-6** Three News, one Save | **NOT RUN.** | — | — |
| **AC-7** Close, reopen, recovery | **NOT RUN.** | — | — |
| **AC-8** Final report with audit | **PARTIAL (T1).** Action audit and file inventory below (counts reconciled to the action log and the screenshot list). Creation, Save, close, reopen and recovery counts are zero by design of T1. | Action audit section | Observed only. |

## Baseline (AC-1)

### Form identity and clean state (`t1-00`)

| Check | Observed |
| --- | --- |
| Tab / Form | Two runtime tabs: `FX_Items` (existing, unchanged, not acted on) and `Property Classes` (selected, heading `Property Classes`, Filter-in-Place icon) |
| URL | `favoriteContext=IdoPropertyClasses` |
| Identity bar | Operator sign-in account (not recorded here) · `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (visible in `t1-00`) |
| Mode / status bar | `Filter in Place`; criteria blank; one empty criteria row (not a starred placeholder) |
| Save | `[disabled]` (toolbar, `find` "Save"); greyed in `t1-00` |
| Dialog / prompt / banner | None (`find` "dialog": no match) |
| Placeholder row | None at baseline |

Path used: toolbar `Form` menu > `Open` > Select Form dialog (filter pre-filled `FX_Items` from the earlier session; cleared; typed `PropertyClass`; one row Caption `Property Classes`, Name `IdoPropertyClasses`; row selected; OK). After OK the toolbar was briefly disabled and enabled roughly two seconds later (observed UI timing).

### Positive control: FX_ItemBase (read only)

Criterion `FX_ItemBase` (plain text, Class Name only), one Tab, one F4, wait 2 s, screenshot `t1-01`.

| Attribute | Observed |
| --- | --- |
| Class Name | `FX_ItemBase` (row 1, row checkbox checked) |
| Base Class | blank |
| Description | blank |
| Revision No / Revision Date | `1` / `10/10/2026` |
| Locked By | Operator sign-in account (the accessibility value is masked by the tool as a secret placeholder; the on-screen field is clipped, so the account name is not transcribed here) |
| Access As | `G6R` |
| Data Type / Length | `String` / `20` |
| Decimal Position / Default Value | blank / blank |
| Column Data Type | `nvarchar` |
| Label String ID | `FX_sItem` |
| Domain IDO Name / Domain Property / Domain List Properties / Domain Additional Settings | blank / blank / blank / blank |
| Checkout indication | Check In and Undo Check Out **enabled** (accessibility: no `disabled`; solid blue on screen). Row checkbox checked. Not acted on. |
| Save | `[disabled]` |
| Status | `Base Class (IDO Property Classes 1 of 1)` (browse mode) |

Asterisks on the FX_ItemBase browse record (observed): `*Data Type`, `*Length`, `*Label String ID`, `*Column Data Type`. No asterisk on Class Name, Base Class, Description, Revision, Locked By, Access As, Domain labels. Meaning (required versus override) **unresolved**.

## Absence gates (AC-2)

Each query: F4-driven Filter-in-Place query after re-entering Filter in Place (toolbar `Filter in Place`), replacing the retained Class Name criterion. The add-mode placeholder left by each zero-row result was replaced by the next query silently (no prompt).

| # | Criterion (exact text; others blank) | Settled result | Evidence |
| --- | --- | --- | --- |
| Gate 1 | `FX_CustomerID` | **0 data rows.** One blue-star placeholder (Class Name blank; red asterisk on Class Name label and grid header `* Class Name`); status `Base Class (IDO Property Classes 1 of 1)`; Save `[disabled]`. Placeholder Revision Date `10/13/2026`, Locked By operator, Access As `G6R`. | `t1-03` (criterion before F4: textbox `FX_CustomerID`, grid echo row `FX_CustomerID`, status `Filter in Place`, other criteria blank); `t1-04` (zero rows) |
| Gate 2 | `FX_Item` | **0 data rows.** Same placeholder pattern; Save `[disabled]`. Note: the existing class `FX_ItemBase` was not returned by the plain-text query `FX_Item`, consistent with exact matching (the same pattern as EXP-047-R2 for `FX_UM` vs `FX_UMBase`). | `t1-05` (zero rows); criterion confirmed by `find` "FX_Item" (criterion echo) before F4 |
| Gate 3 | `FX_OrderNumBase` | **0 data rows.** Same placeholder pattern; Save `[disabled]`. | `t1-06` (zero rows); criterion confirmed by targeted snapshot of the Class Name textbox (value `FX_OrderNumBase`) before F4 |

Limits: no pre-F4 screenshot exists for Gates 2 and 3 (see AC-2). Other criteria were blank in `t1-03`; for Gates 2 and 3 they were not screenshot before F4 but were not set by the worker.

## Post-gate positive control (not an absence query)

Criterion `FX_ItemBase` after the three gates (the same method as EXP-047-R2 and EXP-048): **one data row** `FX_ItemBase`, no star, placeholder replaced silently. Values identical to the baseline (String, 20, nvarchar, FX_sItem; Save `[disabled]`; status `Base Class (IDO Property Classes 1 of 1)`). Evidence `t1-07`. This extra read was added by the worker to show that retrieval still works after the zero-row queries; it is not one of the three permitted absence queries.

## Final browser state (end of T1)

- One Mongoose tab selected. Runtime tabs: `FX_Items` (unchanged, not acted on) and `Property Classes` (selected, browse mode, FX_ItemBase row displayed, checked out per the indication above).
- Save `[disabled]`. No dialog, prompt, banner or unsaved-change indication (`find` "dialog": no match; `find` "Save": disabled).
- No placeholder row remains (the post-gate positive control replaced the last one).
- The Designer tab (tab 0, `mode=designer`) was not selected or acted on.
- The Property Classes Form was left OPEN, clean, with no class created.

## Observations (observed only)

- The Select Form dialog keeps the last filter (`FX_Items` pre-filled). Filter typed as `PropertyClass` returned one row (`Property Classes` / `IdoPropertyClasses`).
- Browse-mode key field: in browse mode the Class Name textbox is a read-only key (greyed). Typing into it requires entering Filter in Place first; the worker re-entered Filter in Place before each query (no typing was made in browse mode).
- The add-mode placeholder row after a zero-row result carries a red asterisk on Class Name and the grid header `* Class Name`, and shows Locked By and Revision Date (system-populated, not typed).
- Layout observation for AC-5 (no row created, no lookup opened): in the browse layouts `t1-00`, `t1-01` and `t1-03` the Default Value field is a plain text box with no dropdown arrow or `...` control, while Data Type, Column Data Type and Justify show dropdown arrows. Whether an add-mode row exposes an AUTONUMBER entry is **not established** and is for the creation task to record.
- The Column Data Type control is a combobox with an Open arrow (EXP-048 used F2 prefix lookups on it). Justify is a combobox.
- The Mongoose tab title counter reported `7 errors, 3 warnings` for the Web Client console. Console inspection is out of scope and was not performed; the counter is not evidence of a fault in this task.
- No Ref-not-found error, timeout, dialog, banner or unsaved-change prompt occurred during T1.

## Action audit (T1, exact counts)

Counts are for worker-requested browser actions. Tool-generated snapshot files and "Ran Playwright code" wrapper output that accompany each action are not counted; the worker supplied no code.

| Operation | Count |
| --- | --- |
| **New** | **0** |
| **Save** (invoked) | **0** (toolbar Save `[disabled]` throughout) |
| Class creations / changes to existing classes (FX_ItemBase, FX_UMBase, FX_UM, FX_Cost or any other) | **0 / 0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** |
| Unloads / cache / FormSync / deployment / regeneration | **0** |
| Checkout actions (Check In, Check Out, Undo Check Out) | **0** |
| Form close / reopen | **0 / 0** (one Form open, via Select Form) |
| Recovery (exact-name) queries | **0** (none in T1 by design) |
| Absence queries (FX_CustomerID, FX_Item, FX_OrderNumBase) | **3** (one each) |
| Positive-control reads (FX_ItemBase) | **2** (pre-gate baseline read; post-gate control) |
| Browser clicks (successful / failed) | **9 / 0** (Form menu 1; Open menu item 1; Select Form filter textbox 1; Select Form row caption 1; Select Form OK 1; toolbar Filter in Place 4) |
| Plain fills (`browser_type` without `slowly`) | **5** (Class Name criteria: `FX_ItemBase`, `FX_CustomerID`, `FX_Item`, `FX_OrderNumBase`, `FX_ItemBase`) |
| Key-by-key typing (`slowly`) | **1** (`PropertyClass` in the Select Form filter) |
| Key presses | **12**: Control+a 1; Backspace 1; Tab 5; F4 5 |
| Waits (2 s each) | **6** |
| Worker-requested full snapshots (untargeted) | **2** (initial page; after Select Form OK) |
| Worker-requested targeted snapshots | **4** (Select Form dialog twice; Locked By textbox; Class Name textbox) |
| `browser_find` calls | **19** |
| `browser_tabs` list / select | **2 / 1** (list at start; select of tab 1; list at end) |
| Screenshots (worker-requested PNG) | **8** (`t1-00` to `t1-07`) |
| Ref-not-found errors / recovery snapshots used / timeouts | **0 / 0 / 0** |
| Dialogs or prompts answered | **0** |
| Portal banner dismissals | **0** (none visible) |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**; the session-expiry procedure was not triggered) |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** |
| Designer actions | **0** |

## Worker-written-file inventory

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | created (this record) |
| `evidence/EXP-070/t1-00-baseline-property-classes-fip-blank-save-disabled.png` | created |
| `evidence/EXP-070/t1-01-positive-control-FX_ItemBase-after-f4-settled.png` | created |
| `evidence/EXP-070/t1-02-fip-reentered-retained-FX_ItemBase-before-gate.png` | created |
| `evidence/EXP-070/t1-03-absence-gate-FX_CustomerID-criteria-before-f4.png` | created |
| `evidence/EXP-070/t1-04-absence-gate-FX_CustomerID-after-f4-settled.png` | created |
| `evidence/EXP-070/t1-05-absence-gate-FX_Item-after-f4-settled.png` | created |
| `evidence/EXP-070/t1-06-absence-gate-FX_OrderNumBase-after-f4-settled.png` | created |
| `evidence/EXP-070/t1-07-positive-control-FX_ItemBase-after-gates-settled.png` | created |

No other repository file was written by the worker. The Playwright tool wrote its own snapshot and console logs under `evidence/playwright/` (tool-generated, not worker-authored; listed for completeness, not as worker output).

## Evidence (decisive screenshots: what each shows and what it does not prove)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t1-00-baseline-…-save-disabled.png` | Property Classes tab selected; FiP icon; status `Filter in Place`; blank criteria; one empty criteria row; identity bar; Save greyed; Check In / Undo Check Out light (no row) | AC-1 identity and clean start | Database state; Site Developer context |
| `t1-01-positive-control-FX_ItemBase-after-f4-settled.png` | One row FX_ItemBase (checked); String, 20, nvarchar, FX_sItem; Base Class and Domain blank; Revision 1 / 10/10/2026; Check In and Undo Check Out enabled; Save greyed; status `Base Class … 1 of 1` | AC-1 positive control and checkout indication (as displayed) | Locked By in full (clipped on screen); the meaning of the checkout |
| `t1-02-fip-reentered-retained-FX_ItemBase-before-gate.png` | Filter in Place; retained criterion FX_ItemBase selected in Class Name; Save greyed | That the retained criterion existed before the first gate | Any gate result |
| `t1-03-absence-gate-FX_CustomerID-criteria-before-f4.png` | Criterion `FX_CustomerID`; echo row FX_CustomerID; other criteria blank; status `Filter in Place` | AC-2 criterion before F4 (FX_CustomerID) | The F4 result |
| `t1-04-absence-gate-FX_CustomerID-after-f4-settled.png` | Zero data rows; blue-star placeholder; red asterisk on Class Name; Save greyed; status `Base Class … 1 of 1` | AC-2 zero rows for FX_CustomerID (displayed grid) | Completeness beyond the display; case variants |
| `t1-05-absence-gate-FX_Item-after-f4-settled.png` | Zero data rows; placeholder; Save greyed | AC-2 zero rows for FX_Item (displayed grid) | Its criterion before F4 (not captured; see AC-2 limit) |
| `t1-06-absence-gate-FX_OrderNumBase-after-f4-settled.png` | Zero data rows; placeholder; Save greyed | AC-2 zero rows for FX_OrderNumBase (displayed grid) | Its criterion before F4 (not captured) |
| `t1-07-positive-control-FX_ItemBase-after-gates-settled.png` | One row FX_ItemBase; no star; same values as t1-01; placeholder replaced; Save greyed | Retrieval works after the three gates; placeholder replaced silently | Database state |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Form > Open > Select Form, filter `PropertyClass`, row, OK opens IdoPropertyClasses as a second runtime tab (status Filter in Place, Save disabled) | **observed** (one run) |
| FX_ItemBase browse values: String, 20, nvarchar, FX_sItem; Base Class and Domain blank; Check In / Undo Check Out enabled | **observed** (one run; consistent with EXP-047-R2 and EXP-048) |
| "Checked out to the operator" for FX_ItemBase | **candidate** (inferred from prior records; not re-established here) |
| Exact-name FiP queries for FX_CustomerID, FX_Item and FX_OrderNumBase return zero data rows in this session | **observed** (one run, UI level) |
| Plain-text FX_Item does not return FX_ItemBase (exact matching) | **observed** (one run); consistent with EXP-047-R2 |
| A zero-row FiP query leaves a blue-star placeholder replaced silently by the next query | **observed** (one run; consistent with EXP-043, EXP-047-R2, EXP-048) |
| Default Value appears as a plain text box in the browse layout (no lookup control) | **observed** (layout only; add-mode and AUTONUMBER entry not checked) |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Case-insensitive coverage for the three names | **not demonstrated** (inference only; no variant typed) |
| Creation, Save, close, reopen, recovery of the three classes | **not performed** (T1) |

## Open questions and blockers

1. **No blocker in T1.** All T1 steps completed as bounded.
2. **Next permitted action (requires separate authorization):** the creation task (T2): three native New operations, configuration of the listed fields only, verification of all three pending rows, one toolbar Save, then close/reopen and the three recovery queries in later tasks. T1 does not authorize creation.
3. The creation task must record the Default Value route for FX_OrderNumBase (lookup options if offered; otherwise typed `AUTONUMBER()` with the exact stored text), and must inventory the asterisks on each new row without assuming a meaning.
4. The FX_ItemBase checkout indication and the Locked By value should be re-read before any further action if the coordinator wants the baseline re-confirmed.
5. Classification remains **observed only, NOT replay_verified**.

---

## T2 — ONE New; FX_CustomerID configured and verified; row left PENDING (Save NOT invoked)

- Task T2, cycle 1, task_message_id `cce73d16-c528-4c19-a7e5-820d53b8a916`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: confirm the Form is still showing FX_ItemBase with Save disabled; ONE native New; positively confirm a blank record is active; configure ONLY FX_CustomerID's seven fields; verify each; capture pending-row and asterisk state. **No Save, no FX_Item, no FX_OrderNumBase, no absence query, no close, no reopen, no recovery, no change to any existing class, no checkout or check-in.**

### Result

- The single New produced one pending row (row 2, starred, blank, status `Class Name (IDO Property Classes 2 of 2)`). FX_CustomerID is configured: Class Name `FX_CustomerID`; Data Type `String`; Length `30`; Column Data Type `nvarchar`; Label String ID `FX_sCustomerID`; Domain IDO Name `FX_HelloWorld01`; Domain Property `FX_Code`; Domain List Properties `FX_Label`. Base Class, Description, Default Value, Decimal Position, Input Mask, Justify and the other optional fields were not set (blank, verified in the accessibility snapshot).
- **Save is enabled and was NOT clicked.** Row 1 FX_ItemBase is unchanged. No dialog, prompt, validation message or session-expiry condition appeared.
- Pending indication: row 2 star (`*`), status counter `2 of 2`, Save enabled, Check In and Undo Check Out `[disabled]` on the pending record (accessibility). Inferred from these; no database read.

### Preflight (before any mutation)

| Check | Observed |
| --- | --- |
| Tab / Form | Web Client tab (tab 1) selected after the tab list; runtime tab `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses` |
| Record | Browse mode: row 1 FX_ItemBase, checkbox checked; Class Name `FX_ItemBase`; String; 20; nvarchar; FX_sItem; Base Class and Domain blank; Revision 1 / 10/10/2026 |
| Checkout indication (FX_ItemBase) | Check In and Undo Check Out enabled (unchanged; not acted on) |
| Save | `[disabled]` (`find` "Save") |
| Dialog / banner / placeholder | None (`find` "dialog": no match); status `Base Class (IDO Property Classes 1 of 1)` |

Note on the first snapshot: the first untargeted snapshot of this task was taken while the tab list still marked tab 0 (the Designer tab) as current, so it did not establish the Web Client state. The Web Client identity was then established after selecting tab 1 by `find`, a screenshot (`t2-00`) and the tab listing, not by a second untargeted snapshot. Tab 0 was not acted on.

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | Tab 0 (Designer) marked current; tab 1 Web Client | — |
| 2 | Untargeted snapshot | Returned the tab-0 page (see note above); not used for mutation | — |
| 3 | `browser_tabs` select tab 1 | Success (after the list) | — |
| 4 | `find` "Property Classes"; `find` "Save"; `find` "dialog"; screenshot `t2-00` | Preflight as above | `t2-00` |
| 5 | ONE click on toolbar `New` (`f1e29`) | Row 2 added (starred, blank); status `Class Name (IDO Property Classes 2 of 2)`; FX_ItemBase row unchanged | `t2-01` |
| 6 | `find` "Class Name:"; screenshot `t2-01` | Blank active Class Name field (focused) | `t2-01` |
| 7 | ONE plain fill `FX_CustomerID` into Class Name (`f1e449`); ONE Tab | Class Name `FX_CustomerID` | — |
| 8 | `find` "Data Type:"; ONE click on Data Type `Open` (`f1e522`); `find` "String"; ONE click on option `String` (`f1e915`) | Data Type `String` | — |
| 9 | `find` "Length:"; ONE plain fill `30` into Length (`f1e531`); ONE Tab | Length `30` | — |
| 10 | `find` "Column Data Type:"; ONE click on `Open` (`f1e559`); ONE key-by-key type `nvar` (slowly) into combobox (`f1e558`); ONE F2; `find` "nvarchar" | List filtered to one entry `nvarchar` (selected) | — |
| 11 | ONE click on option `nvarchar` (`f1e1357`); ONE Tab | Column Data Type `nvarchar` | — |
| 12 | `find` "Label String ID:"; ONE plain fill `FX_sCustomerID` (`f1e619`); ONE Tab | Label String ID `FX_sCustomerID` | — |
| 13 | `find` "Domain IDO Name:"; ONE click on `Open` (`f1e738`); `find` "FX_HelloWorld01"; ONE click on option `FX_HelloWorld01` (`f1e1397`) | Domain IDO Name `FX_HelloWorld01` (project column `FX_HelloWorldProject01` shown in the list) | — |
| 14 | `find` "Domain Property:"; ONE click on `Open` (`f1e748`); `find` "FX_Code"; ONE click on option `FX_Code` (`f1e1987`) | Domain Property `FX_Code` | — |
| 15 | `find` "Domain List Properties:"; ONE click on `Open` (`f1e758`); `find` "FX_Label"; ONE click on option `FX_Label` (`f1e2019`) | Domain List Properties `FX_Label` | `t2-02` |
| 16 | Screenshot `t2-02`; targeted accessibility snapshot of the form (`f1e106`); `find` "Save" (enabled) | All seven values verified (below) | `t2-02`, snapshot |

Errors: none (no Ref-not-found, no timeout, no validation message). Recovery snapshots: 0. The toolbar and form refs used were taken from fresh `find` results and the targeted form snapshot.

Two notes on the entries: the Domain list options are displayed as a grid whose first column is the IDO or property name (the second column is the project for IDO names and blank for properties). Each option was clicked by its name cell. The Domain fields were not committed with Tab; each list selection updated the field and the grid cell in the same snapshot.

### Pre-Save verification (AC-3)

| Value | Native control (accessibility) | Grid row 2 cell | Result |
| --- | --- | --- | --- |
| Class Name | textbox `FX_CustomerID` | `FX_CustomerID` | Matches |
| Data Type | combobox `String` | `String` | Matches |
| Length | textbox `30` | `30` | Matches |
| Column Data Type | combobox `nvarchar` | `nvarchar` | Matches |
| Label String ID | textbox `FX_sCustomerID` | `FX_sCustomerID` | Matches |
| Domain IDO Name | combobox `FX_HelloWorld01` | `FX_HelloWorld01` | Matches |
| Domain Property | combobox `FX_Code` | `FX_Code` | Matches |
| Domain List Properties | combobox `FX_Label` | `FX_Label` | Matches |
| Base Class; Description; Default Value; Decimal Position; Input Mask; Justify; Domain Additional Settings | blank | blank | Not set (as required) |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/13/2026` / operator account (system-populated; masked by the tool) / `G6R` | identical | Not typed by the worker; system population inferred |

### Asterisk inventory (observed; meaning not assumed)

- Class Name: the form label carries a red asterisk (`Class Name:*`) and the grid header reads `* Class Name`.
- Form labels with an asterisk on the pending row: `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`.
- Form labels without an asterisk: `Base Class`, `Description`, `Revision No`, `Revision Date`, `Locked By`, `Access As`, `Decimal Position`, `Default Value`, `Input Mask`, `Justify`, `Domain Additional Settings`.
- Grid headers with an asterisk: `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`, `*Label String ID`.
- Comparison (observed in this session): FX_ItemBase's browse record carries asterisks on `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` and not on the Domain labels. Meaning (required, override or other) is **unresolved**.

### Acceptance checks (T2)

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1, re-checked at T2 start (Form identity, Save disabled, FX_ItemBase browse record, no dialog) | `t2-00` | The untargeted snapshot at T2 start was taken on the Designer tab (see note); identity established by find and screenshot |
| AC-2 | Not repeated (per T2 instruction); carried from T1 | `t1-03`–`t1-06` | — |
| AC-3 | **SUPPORTED (UI level, pre-Save, one run).** One New; FX_CustomerID pending with exactly String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label; no other field set | `t2-01` (blank pending row), `t2-02` (configured row and form), targeted form snapshot | Pending state inferred from the star, status counter and enabled Save; no database read. The grid's right-hand columns are verified in the accessibility snapshot only, not in a screenshot. |
| AC-4 | **NOT RUN** (FX_Item not created in T2) | — | — |
| AC-5 | **NOT RUN** (FX_OrderNumBase not created in T2) | — | — |
| AC-6 | **Open**: one New recorded; Save NOT invoked (by design of T2) | — | — |
| AC-7, AC-8 | **NOT RUN** | — | — |

### Evidence (T2)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t2-00-preflight-FX_ItemBase-browse-before-New.png` | Property Classes tab selected; status `Base Class (IDO Property Classes 1 of 1)`; row 1 FX_ItemBase (checkbox checked; String, 20, nvarchar, FX_sItem); Check In and Undo Check Out enabled; Save greyed; identity bar | Pre-mutation identity and clean state; FX_ItemBase unchanged before New | Locked By in full (clipped); database state |
| `evidence/EXP-070/t2-01-after-single-New-blank-pending-row.png` | Row 2 starred and blank; status `Class Name (IDO Property Classes 2 of 2)`; Class Name field focused; FX_ItemBase row 1 unchanged; Save icon enabled | One pending row added by one New; a blank record is active before entry | Field values (blank at this point) |
| `evidence/EXP-070/t2-02-FX_CustomerID-configured-pre-save-view1.png` | Row 2 `FX_CustomerID` starred; form: Class Name `FX_CustomerID`; Data Type `String`; Length `30`; Column Data Type `nvarchar`; Label String ID `FX_sCustomerID`; Domain IDO Name `FX_HelloWorld01`; Domain Property `FX_Code`; Domain List Properties `FX_Label`; status `Domain List Properties (IDO Property Classes 2 of 2)`; asterisks on the seven set labels | AC-3 visual values with the pending row | The grid's right-hand columns (shown in the accessibility snapshot, not in this image); persistence |
| Targeted accessibility snapshot of the form (`f1e106`, no file saved) | Control and grid-cell values for row 2 and row 1; Check In and Undo Check Out `[disabled]` on row 2; Save enabled (`find`) | AC-3 control and grid values; row-1 FX_ItemBase unchanged | Persistence; the origin of system-populated fields |

Limitation: the snapshot was not written to a file (the tool returned it inline); the values above are transcribed from that inline output.

### Operation counts (T2)

| Operation | T2 | Cumulative (T1 + T2) |
| --- | --- | --- |
| New | **1** | **1** (FX_CustomerID; no further New) |
| Save | **0** | **0** |
| Class configuration changes to existing classes (FX_ItemBase, FX_UMBase, FX_UM, FX_Cost or other) | **0** | **0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Checkout actions (Check In, Check Out, Undo Check Out) | **0** | **0** |
| Form close / reopen | **0 / 0** | **0 / 0** |
| Recovery queries | **0** | **0** |
| Absence queries | **0** (none repeated) | **3** (T1) |
| Positive-control reads | **0** (FX_ItemBase read only from the T1 record and the T2 preflight screenshot) | **2** (T1) |
| Browser clicks (successful / failed) | **11 / 0** (New 1; Data Type Open, String; Column Data Type Open, nvarchar; Domain IDO Open, FX_HelloWorld01; Domain Property Open, FX_Code; Domain List Properties Open, FX_Label) | **20 / 0** |
| Plain fills (`browser_type` without `slowly`) | **3** (Class Name, Length, Label String ID) | **8** |
| Key-by-key typing (`slowly`) | **1** (`nvar`) | **2** |
| Key presses | **Tab 4; F2 1** | **Control+a 1, Backspace 1, Tab 9, F4 5, F2 1** |
| Waits | **0** | **6** |
| Worker-requested full snapshots / targeted snapshots | **1 / 1** (the full snapshot was taken on the Designer tab before selection) | **3 / 5** |
| `browser_find` calls | **19** (self-reported; the T9 controller reconciliation shows **20**, see the T9 section) | **38** (**39** with the corrected T2 value) |
| `browser_tabs` list / select | **1 / 1** | **3 / 2** |
| Screenshots (worker-requested PNG) | **3** (`t2-00`, `t2-01`, `t2-02`) | **11** |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** | **0 / 0 / 0** |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0** cumulative) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |

The "Ran Playwright code" wrappers accompanying each action are tool-generated; the worker supplied refs and text only.

### Worker-written-file inventory (T2)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T2 section) |
| `evidence/EXP-070/t2-00-preflight-FX_ItemBase-browse-before-New.png` | created |
| `evidence/EXP-070/t2-01-after-single-New-blank-pending-row.png` | created |
| `evidence/EXP-070/t2-02-FX_CustomerID-configured-pre-save-view1.png` | created |

Cumulative inventory (T1 + T2): the T1 record and T1 PNGs `t1-00` to `t1-07` (listed in the T1 section) plus the three T2 files above. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` are not worker output.

### Final browser state (end of T2)

- One Mongoose Web Client tab (tab 1) selected; the Designer tab (tab 0) was not acted on.
- Property Classes runtime tab open and selected, in browse mode. Row 1 FX_ItemBase (unchanged); row 2 FX_CustomerID **pending** (starred, unsaved).
- **Save enabled and NOT clicked.** Status `Domain List Properties (IDO Property Classes 2 of 2)`. No dialog, prompt, banner or session-expiry condition (`find` "dialog": no match).
- The pending FX_CustomerID record is intentionally left unsaved. A later Save would commit it; the next task must be decided with the operator before any further action. The Form has not been closed.

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| One toolbar New adds one blank pending row beside an existing row and makes it the active record | **observed** (one run) |
| Typed Class Name, Length and Label String ID commit with Tab and are mirrored in the grid | **observed** (one run) |
| Column Data Type prefix `nvar` with F2 yields one `nvarchar` option (as in EXP-048) | **observed** (one run) |
| Domain IDO Name, Domain Property and Domain List Properties accept list selections (FX_HelloWorld01, FX_Code, FX_Label) and mirror them in the grid | **observed** (one run) |
| The pending row shows Check In and Undo Check Out `[disabled]`; Save enabled | **observed** (one run) |
| Revision No, Revision Date, Locked By and Access As are populated on the new row without typing | **observed**; origin **inferred** |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Persistence of FX_CustomerID (Save not invoked) | **not performed** |

### Open questions and next permitted action

1. **AC-3 is supported at UI level** for the pending row. AC-4 to AC-8 are not run.
2. **Next permitted action (requires separate authorization):** FX_Item and FX_OrderNumBase creation (two further New operations, which the brief limits to one New each), then the single shared Save for all pending rows, then close/reopen and the recovery queries. The operator should confirm that FX_CustomerID may remain pending until that task.
3. The FX_OrderNumBase Default Value route (lookup options or typed `AUTONUMBER()`) is still to be recorded; the browse layout shows Default Value as a plain text box.
4. Classification remains **observed only, NOT replay_verified**.

---

## T3 — ONE New; FX_Item configured and verified; BOTH FX_CustomerID and FX_Item pending (Save NOT invoked)

- Task T3, cycle 2, task_message_id `cc89e819-34a7-4eab-8590-93844fc7c003`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: confirm the Form state without changing it (FX_CustomerID pending with seven values, Save enabled, no dialog); ONE native New; confirm a separate blank record is active while FX_CustomerID stays pending; configure ONLY FX_Item's five fields (Class Name, Base Class, Domain IDO Name, Domain Property, Domain List Properties); read back the whole record and distinguish blank local fields from displayed inherited values. **No Save, no FX_OrderNumBase, no absence query, no edit to FX_CustomerID or any existing class, no close, no reopen, no recovery, no checkout or check-in.**

### Result

- The single New produced a separate blank pending row 3 (starred, active, status `Class Name (IDO Property Classes 3 of 3)`). **FX_CustomerID remained pending in row 2 (starred) and unchanged.** No implicit commit prompt, no dialog, no validation message.
- FX_Item is configured: Class Name `FX_Item`; Base Class `FX_ItemBase`; Domain IDO Name `FX_Items`; Domain Property `FX_Item`; Domain List Properties `FX_Description`. **Data Type, Length, Decimal Position, Default Value, Column Data Type, Label String ID, Input Mask, Justify and Description were not set by the worker and are blank in the form and in the grid row.** Base Class was chosen from the lookup, not typed.
- **Save remains enabled and was NOT clicked.** Both new records are pending. Status at end `Domain List Properties (IDO Property Classes 3 of 3)`.

### Preflight (fresh untargeted snapshot on the Web Client tab, selected after the tab list)

| Check | Observed |
| --- | --- |
| Tab / Form | Tab 1 (Web Client) selected; runtime tab `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses` |
| Row 1 | FX_ItemBase (checked, not starred); String, 20, nvarchar, FX_sItem; Base Class and Domain blank; Revision 1 / 10/10/2026; unchanged |
| Row 2 | FX_CustomerID (starred, pending); Data Type String; Length 30; Column Data Type nvarchar; Label String ID FX_sCustomerID; Domain IDO FX_HelloWorld01; Domain Property FX_Code; Domain List Properties FX_Label; Revision 1 / 10/13/2026 (unchanged from T2) |
| Save | Enabled (toolbar `Save` without `disabled`) |
| Dialog / validation / session expiry | None |
| Status | `Domain List Properties (IDO Property Classes 2 of 2)` (before New) |

Absence queries and positive controls were NOT repeated (per the T3 instruction).

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | Tab 0 Designer current; tab 1 Web Client | — |
| 2 | `browser_tabs` select tab 1 | Success (after the list) | — |
| 3 | Untargeted snapshot (Web Client tab) | Preflight as above | snapshot (inline) |
| 4 | ONE click on toolbar `New` (`f1e31`) | Blank pending row 3 added and active; FX_CustomerID still starred; status `3 of 3` | `t3-00` |
| 5 | `find` "Class Name:"; plain fill `FX_Item` into Class Name (`f1e536`); ONE Tab | Class Name `FX_Item` | — |
| 6 | `find` "Base Class:"; ONE click on Base Class `Open` (`f1e546`); `find` "FX_ItemBase"; ONE click on option `FX_ItemBase` (`f1e1238`) | Base Class `FX_ItemBase`, committed (confirmed by `find`) | — |
| 7 | Targeted snapshot of the form (`f1e102`) | Inherited/local fields blank; grid row 3 shows `FX_Item` / `FX_ItemBase` with Data Type, Length, Column Data Type and Label String ID blank | snapshot (inline) |
| 8 | ONE click on Domain IDO Name `Open` (`f1e825`, from the step 7 targeted snapshot); `find` "FX_Items"; ONE click on option `FX_Items` (`f1e1447`) | Domain IDO Name `FX_Items` | — |
| 9 | `find` "Domain Property:"; ONE click on `Open` (`f1e835`); `find` "FX_Item"; ONE click on option `FX_Item` (`f1e2037`) | Domain Property `FX_Item` | — |
| 10 | `find` "Domain List Properties:"; ONE click on `Open` (`f1e845`); `find` "FX_Description"; ONE click on option `FX_Description` (`f1e2073`) | Domain List Properties `FX_Description` | — |
| 11 | Screenshot `t3-01`; targeted snapshot of the form (`f1e102`); `find` "Save" (enabled); `find` "dialog" (none) | Full readback below | `t3-01`, snapshot |

Errors: none (no Ref-not-found, no timeout, no validation message). Recovery snapshots: 0. Each list option was taken from a `find` result in the same state.

### Pre-Save verification (AC-4)

| Field | FX_Item (row 3, active) | FX_CustomerID (row 2, unchanged) | Result |
| --- | --- | --- | --- |
| Class Name | `FX_Item` | `FX_CustomerID` | Matches |
| Base Class | `FX_ItemBase` | blank | Matches (FX_Item); FX_CustomerID not changed |
| Data Type | **blank** (combobox empty; grid blank) | `String` | FX_Item local field not set |
| Length | **blank** | `30` | FX_Item local field not set |
| Column Data Type | **blank** | `nvarchar` | FX_Item local field not set |
| Label String ID | **blank** | `FX_sCustomerID` | FX_Item local field not set |
| Domain IDO Name | `FX_Items` | `FX_HelloWorld01` | Matches |
| Domain Property | `FX_Item` | `FX_Code` | Matches |
| Domain List Properties | `FX_Description` | `FX_Label` | Matches |
| Description; Decimal Position; Default Value; Input Mask; Justify; Domain Additional Settings | blank | blank | Not set |
| Revision No / Revision Date / Locked By / Access As (row 3) | `1` / `10/13/2026` / operator account (system-populated; masked by the tool) / `G6R` | — | Not typed by the worker; system population inferred |

**Inherited display (observed):** before Save, the local type and label fields on FX_Item remain blank, both in the form and in the grid row. No inherited Data Type, Length, Column Data Type or Label String ID is displayed on row 3 before Save. This is the same pre-Save blank pattern recorded in EXP-047-R2 T2 for the derived FX_UM. Whether the inheritance is applied at Save or on the post-Save refresh remains **unresolved** until the recovery task.

### Asterisk inventory (observed; meaning not assumed)

- FX_Item row (active record): form labels `*Class Name`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. No asterisk on `Data Type`, `Length`, `Column Data Type`, `Label String ID`, `Base Class`, `Description`, `Decimal Position`, `Default Value`.
- Grid headers (active record FX_Item): `* Class Name`, `* Revision No`, `* Revision Date`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. No asterisk on `Data Type`, `Length`, `Column Data Type`, `Label String ID`.
- Difference from T2: when FX_CustomerID was the active record (T2), its form labels and grid headers carried asterisks on `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`. The asterisks on those four fields therefore follow the active record (or its data state); their meaning (required, override or other) is **unresolved**.

### Checkout indications (observed; not acted on)

- Row 3 FX_Item (active, pending): `Check In` and `Undo Check Out` `[disabled]` (accessibility).
- Row 2 FX_CustomerID: not made active in T3; its checkout buttons were read as `[disabled]` as the active pending record in T2. Not re-read in T3.
- Row 1 FX_ItemBase: not made active in T3; its checkout buttons were enabled as the active record in T2 preflight. Not re-read in T3; row checkbox checked.
- Row checkboxes on the grid: checked for all three rows.

### Acceptance checks (T3)

| AC | T3 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; T3 preflight confirmed the Web Client tab, Save enabled, no dialog | snapshot, `t3-00` | Locked By masked |
| AC-2 | Not repeated (per T3 instruction) | `t1-03`–`t1-06` | — |
| AC-3 | **Still supported** (FX_CustomerID re-read unchanged in the T3 preflight and readback) | snapshot, `t3-01` | Pending inferred; no database read |
| AC-4 | **SUPPORTED (UI level, pre-Save, one run).** One New; FX_Item pending with exactly Base Class `FX_ItemBase`, Domain IDO `FX_Items`, Domain Property `FX_Item`, Domain List `FX_Description`; local type and label fields blank; FX_CustomerID remained pending and unchanged | `t3-01` (configured row, both pending), targeted form snapshot | The grid's right-hand columns are verified in the snapshot, not in the image; pending is inferred from the star and enabled Save |
| AC-5 | **NOT RUN** (FX_OrderNumBase not created in T3) | — | — |
| AC-6 | **Open**: two News recorded (FX_CustomerID in T2, FX_Item in T3); the single shared Save has NOT been invoked | — | — |
| AC-7, AC-8 | **NOT RUN** | — | — |

### Evidence (T3)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t3-00-after-single-New-blank-third-row-FX_CustomerID-pending.png` | Grid rows 1 FX_ItemBase (unstarred), 2 FX_CustomerID (starred), 3 blank (starred, active); status `Class Name (IDO Property Classes 3 of 3)`; Class Name focused; Save icon enabled | One New added a separate blank pending row; FX_CustomerID still pending in row 2 | Field values of row 3 (blank at this point) |
| `evidence/EXP-070/t3-01-FX_Item-configured-pre-save-both-pending.png` | Grid rows: FX_ItemBase, FX_CustomerID (starred), FX_Item (starred, active); form: Class Name `FX_Item`; Base Class `FX_ItemBase`; Domain IDO Name `FX_Items`; Domain Property `FX_Item`; Domain List Properties `FX_Description`; Data Type, Length, Column Data Type, Label String ID blank; status `Domain List Properties (IDO Property Classes 3 of 3)` | AC-4 visual values for FX_Item and the simultaneous pending state of both new rows | FX_CustomerID's values (its form is not displayed in this image; they are verified in the targeted snapshot); the grid's right-hand columns (snapshot only); persistence |
| Targeted accessibility snapshot of the form (`f1e102`, inline, not saved) | Control and grid values for rows 1–3; checkout `[disabled]` on row 3; FX_CustomerID values unchanged | AC-4 control and grid values, distinguishing blank local fields | Persistence; the origin of system-populated fields |

Limitation: the accessibility snapshots were returned inline and not written to a file; their values above are transcribed from that inline output.

### Operation counts (T3)

| Operation | T3 | Cumulative (T1 + T2 + T3) |
| --- | --- | --- |
| New | **1** | **2** (FX_CustomerID in T2; FX_Item in T3). Budget: one more New (FX_OrderNumBase) remains |
| Save | **0** | **0** |
| Changes to existing classes (FX_ItemBase, FX_UMBase, FX_UM, FX_Cost or other) | **0** | **0** |
| Changes to FX_CustomerID | **0** | **0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Checkout actions (Check In, Check Out, Undo Check Out) | **0** | **0** |
| Form close / reopen | **0 / 0** | **0 / 0** |
| Recovery queries | **0** | **0** |
| Absence queries | **0** (none repeated) | **3** (T1) |
| Positive-control reads | **0** | **2** (T1) |
| Browser clicks (successful / failed) | **9 / 0** (New 1; Base Class Open 1; FX_ItemBase 1; Domain IDO Open 1; FX_Items 1; Domain Property Open 1; FX_Item 1; Domain List Open 1; FX_Description 1) | **29 / 0** (T1 9, T2 11, T3 9) |
| Plain fills (`browser_type` without `slowly`) | **1** (Class Name `FX_Item`) | **9** (T1 5, T2 3, T3 1) |
| Key-by-key typing (`slowly`) | **0** | **2** (T1 1, T2 1) |
| Key presses | **Tab 1** | **Control+a 1, Backspace 1, Tab 10, F4 5, F2 1** |
| Waits | **0** | **6** (T1) |
| Worker-requested full snapshots (untargeted) | **1** (Web Client tab, at T3 start) | **4** (T1 2, T2 1, T3 1) |
| Worker-requested targeted snapshots | **2** (`f1e102` after Base Class; `f1e102` final readback) | **7** (T1 4, T2 1, T3 2) |
| `browser_find` calls | **11** | **49** (T1 19, T2 19, T3 11) |
| `browser_tabs` list / select | **1 / 1** | **4 / 3** (T1 2 / 1, T2 1 / 1, T3 1 / 1) |
| Screenshots (worker-requested PNG) | **2** (`t3-00`, `t3-01`) | **13** (T1 8, T2 3, T3 2) |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** | **0 / 0 / 0** |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |

The "Ran Playwright code" wrappers accompanying each action are tool-generated; the worker supplied refs and text only.

### Worker-written-file inventory (T3)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T3 section) |
| `evidence/EXP-070/t3-00-after-single-New-blank-third-row-FX_CustomerID-pending.png` | created |
| `evidence/EXP-070/t3-01-FX_Item-configured-pre-save-both-pending.png` | created |

Cumulative inventory (T1 + T2 + T3): the T1 record and PNGs `t1-00` to `t1-07`; the T2 PNGs `t2-00` to `t2-02` (the T2 section lists them); this record edit; and the two T3 PNGs above. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` are not worker output.

### Final browser state (end of T3)

- One Mongoose Web Client tab (tab 1) selected; the Designer tab (tab 0) was not acted on.
- Property Classes runtime tab open and selected, in browse mode, on the FX_Item record (row 3, active).
- Row 1 FX_ItemBase (unchanged); row 2 FX_CustomerID **pending** (unchanged); row 3 FX_Item **pending** (active).
- **Save enabled and NOT clicked.** Status `Domain List Properties (IDO Property Classes 3 of 3)`. No dialog, prompt, banner, validation message or session-expiry condition (`find` "dialog": no match).
- The Form has not been closed. FX_OrderNumBase has not been created.

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| A second toolbar New adds a separate blank pending row while the earlier pending row stays starred and unchanged (no implicit commit observed) | **observed** (one run); commit state not independently verified |
| FX_Item accepts FX_ItemBase (from the Base Class lookup), FX_Items, FX_Item and FX_Description through native lookups, mirrored in the grid | **observed** (one run; pre-Save) |
| Local Data Type, Length, Column Data Type and Label String ID remain blank on FX_Item before Save, while Base Class is set | **observed** (one run, form and grid) |
| Inherited Data Type/Length/Column Data Type/Label String ID are displayed before Save | **not observed** (none displayed before Save in T3) |
| Asterisks on the four local type and label fields follow the active record | **observed** pattern; meaning **unresolved** |
| Checkout buttons disabled on the active pending record (row 3) | **observed** (one run) |
| Persistence of FX_Item and FX_CustomerID (Save not invoked) | **not performed** |

### Open questions and next permitted action

1. **AC-4 is supported at UI level** for the pending row. AC-5 (FX_OrderNumBase) and AC-6 to AC-8 are not run.
2. **Next permitted action (requires separate authorization):** FX_OrderNumBase creation (the third and last permitted New, with the Default Value route to be recorded), then the single shared Save for all three rows, then close/reopen and the three recovery queries. The operator should confirm that FX_CustomerID and FX_Item may remain pending until that task.
3. Inherited-value display for FX_Item (blank before Save) is to be compared on recovery (AC-7).
4. Classification remains **observed only, NOT replay_verified**.

---

## T4 — ONE New; FX_OrderNumBase configured and verified; ALL THREE new rows PENDING (Save NOT invoked)

- Task T4, cycle 3, task_message_id `f1c40982-a217-482b-83a4-f9ea13c4b920`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: confirm the Form (FX_CustomerID and FX_Item pending, Save enabled, no dialog); ONE native New; confirm a separate blank fourth row is active; configure ONLY FX_OrderNumBase's five fields (Class Name, Data Type, Default Value, Column Data Type, Label String ID, Justify); read back the full record; record the Default Value route. **No Save, no close, no reopen, no recovery, no absence query, no change to FX_CustomerID or FX_Item or any existing class, no checkout or check-in, no further New.**

### Result

- The single New produced a blank pending row 4 (starred, active, status `Class Name (IDO Property Classes 4 of 4)`). Rows 2 (FX_CustomerID) and 3 (FX_Item) stayed starred and unchanged.
- FX_OrderNumBase is configured: Class Name `FX_OrderNumBase`; Data Type `Long Integer`; Default Value `AUTONUMBER()` (typed; displayed as `AUTONUMBER()`); Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`. Length, Decimal Position, Binary Format, Date Format, Input Mask, Prompt Char, Base Class and Domain fields were not set (blank).
- **Save is enabled and was NOT clicked.** Three new rows are pending together. No dialog, validation message or session-expiry condition.

### Default Value route (AC-5)

- **Route used: typed `AUTONUMBER()`.** The Default Value control is a plain text box in the browse and add-mode layout. It shows no combobox, `Open` button or `...` control in the accessibility tree, so there were no lookup or list options to record.
- Text after commit (Tab): `AUTONUMBER()`. No normalization was observed in the form field or the grid cell. The field label gained an asterisk (`*Default Value:`).
- Whether Mongoose stores the same string as the displayed text is not verified (no database read).

### Lookup options recorded (for the fields that do offer lists)

- Data Type list (13 options): String, Short Integer, Long Integer, Byte, Decimal, Date, GUID, Float, Currency, Binary, NumSortedString, EncryptedString, Big Integer. Selected `Long Integer`.
- Justify list (3 options): Left, Center, Right. Selected `Right`.
- Column Data Type: F2 after typing the prefix `int` (slowly) displayed `int` (selected) first, followed by InternetMediaTypeType, IntLineNoType and IntranetNameType in the accessibility list. The list was not enumerated to its end. `int` was selected from this list. (EXP-048's `nvar` prefix returned a single entry; the `int` prefix returned several.)

### Preflight (before any mutation)

| Check | Observed |
| --- | --- |
| Tab / Form | Tab 1 (Web Client) selected after the tab list; runtime tab `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses` |
| Row 1 | FX_ItemBase (checked, unstarred); String, 20, nvarchar, FX_sItem; Base Class and Domain blank; unchanged |
| Row 2 | FX_CustomerID (starred, pending); String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label; unchanged |
| Row 3 | FX_Item (starred, pending); Base Class FX_ItemBase; Domain IDO FX_Items; Domain Property FX_Item; Domain List Properties FX_Description; local type and label fields blank; unchanged |
| Save | Enabled |
| Dialog / validation / session expiry | None |

Absence queries and positive controls were NOT repeated.

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | Tab 0 Designer current; tab 1 Web Client | — |
| 2 | `browser_tabs` select tab 1 | Success | — |
| 3 | Untargeted snapshot (Web Client) | Preflight as above | snapshot (inline) |
| 4 | ONE click on toolbar `New` (`f1e31`) | Blank pending row 4 added and active; rows 2 and 3 still starred; status `4 of 4` | `t4-00` |
| 5 | `find` "Class Name:"; plain fill `FX_OrderNumBase` (`f1e627`), then ONE Tab — **both sent in the same turn** (see deviation note) | Class Name `FX_OrderNumBase` | — |
| 6 | `find` "Data Type:"; ONE click on Data Type `Open` (`f1e700`); targeted read of the option list (`f1e1100`); ONE click on `Long Integer` (`f1e1109`) | Data Type `Long Integer` | — |
| 7 | `find` "Default Value:" (plain text box, no lookup); plain fill `AUTONUMBER()` (`f1e727`); ONE Tab; `find` "Default Value:" | Default Value `AUTONUMBER()` | — |
| 8 | `find` "Column Data Type:"; ONE click on `Open` (`f1e737`); targeted read of the list (`f1e1140`) | List expanded | — |
| 9 | ONE slow type `int` into Column Data Type combobox (`f1e736`) | **Error: `Ref f1e736 not found in the current page snapshot`.** No text entered; no action executed | — |
| 10 | ONE fresh untargeted snapshot (**recovery snapshot, 1 of 1**) | Captured; output (63 KB) was persisted to a tool-results file that I could not read back (permission denied), so the ref was confirmed by a live `find` | — |
| 11 | `find` "Column Data Type:" (live tree): combobox `f1e736` expanded and active; Open `f1e737` | Same ref, active and expanded | — |
| 12 | ONE corrected slow type `int` into `f1e736` | Combobox shows `int` | — |
| 13 | ONE F2 | Lookup filtered; `int` selected (`f1e1546`) | — |
| 14 | ONE click on option `int` (`f1e1546`); ONE Tab | Column Data Type `int` | — |
| 15 | `find` "Label String ID:"; plain fill `FX_sOrderNumber` (`f1e797`); ONE Tab | Label String ID `FX_sOrderNumber` | — |
| 16 | `find` "Justify:"; ONE click on `Open` (`f1e825`); `find` "Right"; targeted read of the list (`f1e1564`); ONE click on `Right` (`f1e1573`); ONE Tab | Justify `Right` | — |
| 17 | Targeted readback of the form (`f1e102`) | All values verified (below) | snapshot (inline) |
| 18 | Screenshot `t4-01`; `find` "Save" (enabled); `find` "dialog" (none) | Three pending rows visible in one screenshot | `t4-01` |

**Deviation (disclosed):** step 5 sent the plain fill and the Tab in the same turn. The brief says browser actions must be sent one at a time. Both calls returned successfully and the readback verifies the result, but that pair was not sequenced as required.

**Error and recovery:** one Ref-not-found error (step 9; the action was not executed). One fresh untargeted snapshot was used (recovery 1 of 1). One corrected attempt with the same ref, confirmed live, succeeded. No further recovery was needed.

### Pre-Save verification (AC-5)

| Field | FX_OrderNumBase (row 4) | Grid row 4 | Result |
| --- | --- | --- | --- |
| Class Name | `FX_OrderNumBase` | `FX_OrderNumBase` | Matches |
| Data Type | `Long Integer` | `Long Integer` | Matches |
| Default Value | `AUTONUMBER()` | `AUTONUMBER()` | Matches (typed route) |
| Column Data Type | `int` | `int` | Matches |
| Label String ID | `FX_sOrderNumber` | `FX_sOrderNumber` | Matches |
| Justify | `Right` | `Right` | Matches |
| Length; Decimal Position; Binary Format; Date Format; Input Mask; Prompt Char; Base Class; Domain IDO; Domain Property; Domain List Properties; Description | blank | blank | Not set (as required) |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/13/2026` / operator account (masked by the tool) / `G6R` | identical | System-populated; not typed |

### Pending state of all three new records (verified together)

| Row | Record | Star | Key values (pre-Save) |
| --- | --- | --- | --- |
| 2 | FX_CustomerID | starred | String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label (unchanged) |
| 3 | FX_Item | starred | Base FX_ItemBase; FX_Items, FX_Item, FX_Description; local type/label blank (unchanged) |
| 4 | FX_OrderNumBase | starred (active) | Long Integer, AUTONUMBER(), int, FX_sOrderNumber, Right |
| 1 | FX_ItemBase | unstarred (existing; not changed) | String, 20, nvarchar, FX_sItem |

### Checkout and asterisk observations (observed; no meaning assigned)

- Active pending record FX_OrderNumBase: `Check In` and `Undo Check Out` `[disabled]` in the accessibility tree. Row checkbox checked.
- Rows 1, 2 and 3 were not made active in T4; their checkout buttons were not re-read in T4. Row checkboxes are checked for all rows.
- Asterisks on FX_OrderNumBase (form labels): red `*Class Name`; `*Data Type`, `*Default Value`, `*Column Data Type`, `*Label String ID`, `*Justify`. No asterisk on `Length`, `Decimal Position`, `Binary Format`, `Date Format`, `Base Class`, `Description`, `Input Mask`, `Prompt Char`, or the three Domain labels.
- Grid headers: `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Default Value`, `*Column Data Type`, `*Label String ID`, `*Justify`.
- Observed correlation (not an explanation): on each record, asterisks appear on the local fields that carry a value and not on the unset ones (FX_CustomerID carried them on its set Domain fields; FX_Item on its set Domain fields only). Meaning (required, override or other) remains **unresolved**.

### Acceptance checks (T4)

| AC | T4 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; T4 preflight confirmed the Web Client tab, Save enabled, no dialog | snapshot, `t4-01` | Locked By masked |
| AC-2 | Not repeated (per T4 instruction) | `t1-03`–`t1-06` | — |
| AC-3 | Still supported (FX_CustomerID unchanged in the T4 preflight and readback) | snapshot, `t4-01` | Pending inferred |
| AC-4 | Still supported (FX_Item unchanged in the T4 preflight and readback) | snapshot, `t4-01` | Pending inferred |
| AC-5 | **SUPPORTED (UI level, pre-Save, one run).** One New; FX_OrderNumBase pending with exactly Long Integer, `AUTONUMBER()` (typed route; no lookup offered), `int`, `FX_sOrderNumber`, `Right`; no other field set | `t4-00` (blank row 4), `t4-01` (configured row and three pending rows), targeted readback | Pending inferred from the star and the enabled Save; no database read; the stored value of Default Value is the displayed text only |
| AC-6 | **Open**: three News recorded (FX_CustomerID, FX_Item, FX_OrderNumBase); the single toolbar Save for the three rows has **not** been invoked | — | — |
| AC-7, AC-8 | **NOT RUN** | — | — |

### Evidence (T4)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t4-00-after-single-New-blank-fourth-row-three-pending.png` | Grid rows 1 (unstarred), 2, 3 (starred) and 4 (starred, blank, active); status `Class Name (IDO Property Classes 4 of 4)`; Class Name focused; Save icon enabled | One New added a separate blank pending row; rows 2 and 3 still pending | Row 4 field values (blank at this point) |
| `evidence/EXP-070/t4-01-FX_OrderNumBase-configured-pre-save-four-rows-three-pending.png` | Grid rows FX_ItemBase (unstarred), FX_CustomerID (starred), FX_Item (starred), FX_OrderNumBase (starred, active); form shows Class Name `FX_OrderNumBase`; Data Type `Long Integer`; Default Value `AUTONUMBER()`; Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`; Length and Decimal Position blank; status `Binary Format (IDO Property Classes 4 of 4)`; Save enabled | AC-5 visual values; the three new rows pending together | The grid's right-hand columns for row 4 (verified in the inline snapshot, not in the image); FX_CustomerID's and FX_Item's full forms (verified in the snapshot only); persistence. Focus is on Binary Format after the last Tab (no value entered) |

Limitation: the accessibility snapshots were returned inline (one was persisted to a file I could not read back); the values above are transcribed from the inline outputs and the live `find` results.

### Operation counts (T4)

| Operation | T4 | Cumulative (T1 + T2 + T3 + T4) |
| --- | --- | --- |
| New | **1** | **3** (FX_CustomerID, FX_Item, FX_OrderNumBase). Limit reached: no further New permitted |
| Save | **0** | **0** |
| Changes to existing classes (FX_ItemBase, FX_UMBase, FX_UM, FX_Cost or other) | **0** | **0** |
| Changes to FX_CustomerID or FX_Item | **0** | **0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Checkout actions | **0** | **0** |
| Form close / reopen | **0 / 0** | **0 / 0** |
| Recovery (exact-name) queries | **0** | **0** |
| Absence queries | **0** | **3** (T1) |
| Positive-control reads | **0** | **2** (T1) |
| Browser clicks (successful / failed) | **7 / 0** (New; Data Type Open; Long Integer; Column Data Type Open; `int`; Justify Open; `Right`) | **36 / 0** |
| Plain fills (`browser_type` without `slowly`) | **3** (Class Name, Default Value, Label String ID) | **12** |
| Key-by-key typing (`slowly`) | **1 successful** (`int`), **1 failed** (Ref not found; not executed) | **3 successful** (T1 1, T2 1, T4 1); **4 attempts**, 1 failed (T4) |
| Key presses | **Tab 5; F2 1** | **Control+a 1, Backspace 1, Tab 15, F4 5, F2 2** |
| Waits | **0** | **6** (T1) |
| Worker-requested full snapshots (untargeted) | **2** (Web Client at T4 start; recovery after the Ref error) | **6** (T1 2, T2 1, T3 1, T4 2) |
| Worker-requested targeted snapshots | **4** (listbox `f1e1100`; listbox `f1e1140`; listbox `f1e1564`; form readback `f1e102`) | **11** (T1 4, T2 1, T3 2, T4 4) |
| `browser_find` calls | **13** | **62** (T1 19, T2 19, T3 11, T4 13) |
| `browser_tabs` list / select | **1 / 1** | **5 / 4** (T1 2 / 1, T2 1 / 1, T3 1 / 1, T4 1 / 1) |
| Screenshots (worker-requested PNG) | **2** (`t4-00`, `t4-01`) | **15** (T1 8, T2 3, T3 2, T4 2) |
| Ref-not-found errors / recovery snapshots / timeouts | **1 / 1 / 0** | **1 / 1 / 0** |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |
| Failed or sequencing-deviating actions | **1 failed** (Ref not found); **1 same-turn pair** (fill and Tab sent together) | — |

Total requested browser calls in T4: 41 (tabs 2, snapshots 6, clicks 7, plain fills 3, slow type 2 of which 1 failed, Tab 5, F2 1, finds 13, screenshots 2). Non-browser reads (PNG and record reads, and a denied Grep of a tool-results file) are not counted.

The "Ran Playwright code" wrappers accompanying each action are tool-generated; the worker supplied refs and text only.

### Worker-written-file inventory (T4)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T4 section) |
| `evidence/EXP-070/t4-00-after-single-New-blank-fourth-row-three-pending.png` | created |
| `evidence/EXP-070/t4-01-FX_OrderNumBase-configured-pre-save-four-rows-three-pending.png` | created |

Cumulative inventory (T1–T4): the T1 record and PNGs `t1-00`–`t1-07`; T2 PNGs `t2-00`–`t2-02`; T3 PNGs `t3-00`–`t3-01`; T4 PNGs `t4-00`–`t4-01`; and the record. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` and the tool-results directory are not worker output.

### Final browser state (end of T4)

- One Mongoose Web Client tab (tab 1) selected; the Designer tab (tab 0) was not acted on.
- Property Classes runtime tab open and selected, in browse/add mode on the FX_OrderNumBase record (row 4, active; focus on the Binary Format control with no value entered).
- Row 1 FX_ItemBase (unchanged, unstarred); row 2 FX_CustomerID **pending**; row 3 FX_Item **pending**; row 4 FX_OrderNumBase **pending** (active).
- **Save enabled and NOT clicked.** Status `Binary Format (IDO Property Classes 4 of 4)`. No dialog, prompt, banner or validation message (`find` "dialog": no match).
- The Form has not been closed. No further New is permitted.

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| A third toolbar New adds a separate blank pending row while earlier pending rows stay starred and unchanged (no implicit commit observed) | **observed** (one run); commit state not independently verified |
| Default Value is a plain text box with no lookup or list; typed `AUTONUMBER()` is displayed as `AUTONUMBER()` | **observed** (one run; display only; no database read) |
| Data Type list offers 13 options including `Long Integer` | **observed** (one run) |
| Justify list offers Left, Center, Right | **observed** (one run) |
| Column Data Type prefix `int` with F2 returns `int` first and several `Int…` options | **observed** (one run; list not enumerated to its end) |
| All three new rows pending together with values as configured | **observed** (one run; UI level) |
| Asterisk pattern: asterisks on set local fields and not on unset ones (correlation only) | **observed**; meaning **unresolved** |
| Checkout buttons disabled on the active pending record (row 4) | **observed** (one run) |
| Persistence of any new record (Save not invoked) | **not performed**. Nothing is replay_verified |

### Open questions and next permitted action

1. **AC-5 is supported at UI level** for the pending row. AC-6 to AC-8 are open or not run.
2. **Next permitted action (requires separate authorization):** the single toolbar Save for the three pending rows, the native response and settled-state record, the close and reopen (once each), and the three exact-name recovery queries (one per class). The operator should confirm the three-row Save.
3. The Default Value route is recorded as typed `AUTONUMBER()`. Whether Mongoose stores the same text is to be checked in the recovery queries (displayed value only in this session).
4. Classification remains **observed only, NOT replay_verified**.

---

## T5 — READ-ONLY final pre-Save verification of the three pending rows (no mutation; Save NOT invoked)

- Task T5, cycle 4, task_message_id `39df6232-ae81-4691-ba43-031cddbffaf7`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: inspect the current Form without changing it; confirm FX_ItemBase unchanged and exactly three new pending rows; inspect each pending row separately by native visible row selection and read-only accessibility reads; capture screenshots. **No New, no Save, no close, no reopen, no Filter in Place, no field edit, no checkout or check-in, no recovery, no absence query.**

### Result

- All three new rows verified against the brief, with no differences:
  - **FX_CustomerID (row 2):** Class Name `FX_CustomerID`; Data Type `String`; Length `30`; Column Data Type `nvarchar`; Label String ID `FX_sCustomerID`; Domain IDO Name `FX_HelloWorld01`; Domain Property `FX_Code`; Domain List Properties `FX_Label`. Base Class, Default Value, Decimal Position, Input Mask, Justify and Domain Additional Settings blank.
  - **FX_Item (row 3):** Class Name `FX_Item`; Base Class `FX_ItemBase`; Domain IDO Name `FX_Items`; Domain Property `FX_Item`; Domain List Properties `FX_Description`. **Local Data Type, Length, Column Data Type and Label String ID blank** (form and grid row). Default Value, Decimal Position, Justify and Input Mask blank.
  - **FX_OrderNumBase (row 4):** Class Name `FX_OrderNumBase`; Data Type `Long Integer`; Default Value displayed exactly `AUTONUMBER()`; Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`. Length, Decimal Position, Base Class and all Domain fields blank.
- **FX_ItemBase (row 1)** unchanged: String, 20, nvarchar, FX_sItem; Base Class and Domain blank; Revision 1 / 10/10/2026; not starred.
- **Pending indicators:** stars on rows 2, 3 and 4; row 1 unstarred (`screenshot t5-04`).
- **Save:** enabled (toolbar `Save` without `disabled`; `find` "Save"). **Not clicked.**
- **Dialogs / validation / unexpected commit:** none (`find` "dialog": no match). No value changed during this task.

### Method (native visible row selection and read-only reads)

- Row selection used the grid row-number cells (rows 2, 3, 4). Selecting a row changes which record the form displays; it does not edit a field. Row 1 was not selected (its values were read from the grid row in the full-form snapshot).
- Each row was confirmed as the active record by the `Class Name` textbox value before reading its values.
- AUTONUMBER() is reported as **display** only; no database read was performed, so it is not storage proof.

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | Tab 0 Designer current; tab 1 Web Client | — |
| 2 | `browser_tabs` select tab 1 | Success | — |
| 3 | Untargeted snapshot (Web Client) | Four rows; FX_ItemBase unchanged; Save enabled; row 4 active; status `Binary Format (IDO Property Classes 4 of 4)` | snapshot (inline) |
| 4 | ONE click on row-2 selector (`f1e129`) | Row 2 active (`gridcell "2" [active] [selected]`) | — |
| 5 | Screenshot `t5-01`; `find` "Class Name:" (`FX_CustomerID`); targeted form snapshot (`f1e102`) | All FX_CustomerID values verified | `t5-01`, snapshot |
| 6 | ONE click on row-3 selector (`f1e137`) | Row 3 active | — |
| 7 | Screenshot `t5-02`; `find` "Class Name:" (`FX_Item`); targeted form snapshot (`f1e102`) | All FX_Item values verified; local fields blank | `t5-02`, snapshot |
| 8 | ONE click on row-4 selector (`f1e145`) | Row 4 active | — |
| 9 | Screenshot `t5-03`; `find` "Default Value:" (`AUTONUMBER()`); targeted form snapshot (`f1e102`) | All FX_OrderNumBase values verified | `t5-03`, snapshot |
| 10 | Screenshot `t5-04` (grid with all rows); `find` "Save" (enabled); `find` "dialog" (none) | Three pending stars, FX_ItemBase unstarred, Save enabled | `t5-04` |

Errors: none in T5 (no Ref-not-found, no timeout, no validation message). No recovery snapshot was used; none was needed.

### Asterisks and checkout indications (observed; no meaning assigned)

- Row 2 FX_CustomerID (active in step 5): `*Class Name` (red), `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. Check In and Undo Check Out `[disabled]`. Grid headers `* Class Name`, `*Data Type`, `*Length`, `*Column Data Type`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`, `*Label String ID`.
- Row 3 FX_Item (active in step 7): `*Class Name`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties` (no asterisk on the blank local type and label fields). Check In and Undo Check Out `[disabled]`.
- Row 4 FX_OrderNumBase (active in step 9): `*Data Type`, `*Default Value`, `*Column Data Type`, `*Label String ID`, `*Justify` (no asterisk on Length, Decimal Position or Domain labels). Check In and Undo Check Out `[disabled]`.
- Row 1 FX_ItemBase: not made active in T5. Its checkout state was not re-read in T5. The row checkbox is checked.
- The asterisk meanings (required versus override) remain **unresolved**. The T4 observation that asterisks follow set local fields is a correlation only, and T5 does not change that conclusion.

### Acceptance checks (T5)

| AC | T5 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; T5 confirmed the Web Client tab, Save enabled, no dialog | snapshot, `t5-04` | Locked By masked by the tool |
| AC-2 | Not repeated | `t1-03`–`t1-06` | — |
| AC-3 | **Re-verified read-only (UI level):** FX_CustomerID pending with exactly String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label | `t5-01`, targeted snapshot | Pending inferred from the star and the enabled Save; no database read |
| AC-4 | **Re-verified read-only (UI level):** FX_Item pending with exactly Base Class FX_ItemBase, FX_Items, FX_Item, FX_Description and blank local type and label fields | `t5-02`, targeted snapshot | Same |
| AC-5 | **Re-verified read-only (UI level):** FX_OrderNumBase pending with Long Integer, displayed `AUTONUMBER()`, int, FX_sOrderNumber, Right; Default Value route recorded as typed `AUTONUMBER()` (no lookup offered) | `t5-03`, targeted snapshot | Display only; stored text not verified |
| AC-6 | **Open**: three News recorded and three rows pending together; the single toolbar Save has **not** been invoked | `t5-04` | — |
| AC-7, AC-8 | **NOT RUN** | — | — |

### Evidence (T5)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t5-01-row2-FX_CustomerID-selected-readonly.png` | Row 2 selected and active; Class Name `FX_CustomerID`; form values (String, 30, nvarchar, FX_sCustomerID, FX_Code, FX_Label, FX_HelloWorld01) visible; row 2 starred; status `(IDO Property Classes 2 of 4)`; toolbar Save icon appears enabled (dark, not greyed) | AC-3 visual values with row 2 active | The Save enabled state is confirmed by `find` (see `t5-04`), not by the icon alone; the grid's right-hand columns (snapshot only); persistence |
| `evidence/EXP-070/t5-02-row3-FX_Item-selected-readonly.png` | Row 3 selected; Class Name `FX_Item`; Base Class `FX_ItemBase`; Domain IDO Name `FX_Items`; Domain Property `FX_Item`; Domain List Properties `FX_Description`; blank Data Type, Length, Column Data Type and Label String ID | AC-4 visual values with row 3 active | Grid right-hand columns (snapshot only); persistence |
| `evidence/EXP-070/t5-03-row4-FX_OrderNumBase-selected-readonly.png` | Row 4 selected; Class Name `FX_OrderNumBase`; Data Type `Long Integer`; Default Value `AUTONUMBER()`; Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right` | AC-5 visual values with row 4 active | Stored Default Value text (display only); persistence |
| `evidence/EXP-070/t5-04-grid-all-rows-pending-pre-save-readonly.png` | Grid rows 1 (unstarred), 2, 3 and 4 (starred); FX_OrderNumBase active; Save icon enabled; status `(IDO Property Classes 4 of 4)` | All three new rows pending together; FX_ItemBase unstarred; Save enabled | Save result (not invoked); persistence |

Limitation: the full accessibility snapshots were returned inline and not saved to files. The values above are transcribed from those inline outputs. The status-bar text shown in `t5-04` differs from the T4 status text because row selection changes it; this is observed only.

### Operation counts (T5)

| Operation | T5 | Cumulative (T1 + T2 + T3 + T4 + T5) |
| --- | --- | --- |
| New | **0** | **3** (FX_CustomerID, FX_Item, FX_OrderNumBase) |
| Save | **0** | **0** |
| Changes to existing classes (FX_ItemBase, FX_UMBase, FX_UM, FX_Cost or other) | **0** | **0** |
| Field edits to any record | **0** | **0** (T1–T4 new-row edits as recorded in T2–T4) |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Checkout actions (Check In, Check Out, Undo Check Out) | **0** | **0** |
| Form close / reopen | **0 / 0** | **0 / 0** |
| Recovery (exact-name) queries | **0** | **0** |
| Filter in Place queries | **0** | **3** absence (T1) + 2 positive-control (T1) |
| Browser clicks (successful / failed) | **3 / 0** (row-selector clicks for rows 2, 3 and 4; no field clicked) | **39 / 0** |
| Plain fills / slow typing / key presses | **0 / 0 / 0** | unchanged from T4: plain fills 12; slow typing 3 successful / 4 attempts; Control+a 1, Backspace 1, Tab 15, F4 5, F2 2 |
| Waits | **0** | **6** (T1) |
| Worker-requested full snapshots (untargeted) | **1** (Web Client, T5 start) | **7** (T1 2, T2 1, T3 1, T4 2, T5 1) |
| Worker-requested targeted snapshots | **3** (form `f1e102` after each row selection) | **14** (T1 4, T2 1, T3 2, T4 4, T5 3) |
| `browser_find` calls | **5** | **67** (T1 19, T2 19, T3 11, T4 13, T5 5) |
| `browser_tabs` list / select | **1 / 1** | **6 / 5** (T1 2 / 1, T2 1 / 1, T3 1 / 1, T4 1 / 1, T5 1 / 1) |
| Screenshots (worker-requested PNG) | **4** (`t5-01` to `t5-04`) | **19** (T1 8, T2 3, T3 2, T4 2, T5 4) |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** | **1 / 1 / 0** (both in T4) |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |
| Total requested browser calls in T5 | **18** = tabs 2, full snapshot 1, targeted snapshots 3, row clicks 3, `find` 5, screenshots 4 | — |

**Non-browser errors and process notes (recorded here as the brief requires; not counted as browser operations):**
- **Process deviation (T4, not repeated in T5):** in T4 step 5, the Class Name plain fill and its Tab were sent in the same turn, contrary to the one-action-at-a-time rule. Both succeeded and the T4 readback verified the result.
- **Denied Grep (T4):** an attempt to search a tool-results file in T4 was denied by the permission system. No content from that file was used, and the failed read changed nothing in the repository.
- **Failed Edit (T4):** a documentation Edit in T4 failed because its anchor text matched more than one place in the record (non-unique match). The edit was not applied; the record was then updated with a unique anchor. No browser action was affected.

### Worker-written-file inventory (T5)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T5 section) |
| `evidence/EXP-070/t5-01-row2-FX_CustomerID-selected-readonly.png` | created |
| `evidence/EXP-070/t5-02-row3-FX_Item-selected-readonly.png` | created |
| `evidence/EXP-070/t5-03-row4-FX_OrderNumBase-selected-readonly.png` | created |
| `evidence/EXP-070/t5-04-grid-all-rows-pending-pre-save-readonly.png` | created |

Cumulative inventory (T1–T5): the T1 record and PNGs `t1-00`–`t1-07`; T2 PNGs `t2-00`–`t2-02`; T3 PNGs `t3-00`–`t3-01`; T4 PNGs `t4-00`–`t4-01`; T5 PNGs `t5-01`–`t5-04`; and this record. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` are not worker output.

### Final browser state (end of T5)

- One Mongoose Web Client tab (tab 1) selected; the Designer tab (tab 0) was not acted on.
- Property Classes runtime tab open and selected, in browse mode. Row 4 (FX_OrderNumBase) is the active record.
- Row 1 FX_ItemBase unchanged and unstarred. Rows 2, 3 and 4 **pending and unsaved**.
- **Save enabled and NOT clicked.** No dialog, prompt, banner, validation message or unexpected commit.
- The Form has not been closed. No further New, Save or recovery action has been taken.

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| Row selection of pending rows displays each record's values unchanged (no field edit) | **observed** (one run) |
| FX_CustomerID, FX_Item and FX_OrderNumBase carry the values specified in the brief at the pre-Save stage (display) | **observed** (one run; UI level) |
| Local Data Type, Length, Column Data Type and Label String ID remain blank on FX_Item before Save | **observed** (one run) |
| Default Value displays `AUTONUMBER()` on FX_OrderNumBase (display only) | **observed** (one run); stored text **not verified** |
| Three pending indicators present together; Save enabled; no dialog | **observed** (one run) |
| Checkout buttons disabled on each of the three pending rows as read | **observed** (one run) |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Persistence of any new record | **not performed**. Nothing is replay_verified |

### Open questions and next permitted action

1. **AC-3, AC-4 and AC-5 are re-verified read-only** at UI level. AC-6 to AC-8 remain open or not run.
2. **Next permitted action (requires separate authorization):** the single toolbar Save for the three pending rows, the native response and settled-state record, the close and reopen (once each), and the three exact-name recovery queries (one per class).
3. Whether Mongoose stores `AUTONUMBER()` exactly as typed remains open until the recovery queries.
4. No blocker in T5. The three rows are pending and unsaved. The Form is open and clean apart from those pending rows.
5. Classification remains **observed only, NOT replay_verified**.

---

## T6 — ONE shared toolbar Save for the three pending rows; settled state verified read-only (no close, reopen or recovery)

- Task T6, cycle 5, task_message_id `b6a1cb56-7441-49ec-bf62-b3b6854a8209`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: confirm prerequisites read-only (Property Classes displayed, three new rows pending, Save enabled, no dialog or session-expiry condition); invoke the native toolbar Save **exactly once**; record the immediate and settled responses; verify all three configurations by read-only row selection. **No New, no second Save, no field edit, no close, no reopen, no recovery query, no checkout or check-in, no unload.**

### Pre-Save prerequisites (verified before the Save)

| Check | Observed |
| --- | --- |
| Tab / Form | Tab 1 (Web Client) selected after the tab list; runtime tab `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses` |
| Rows | Row 1 FX_ItemBase (unstarred, unchanged); rows 2 FX_CustomerID, 3 FX_Item and 4 FX_OrderNumBase starred (pending) |
| Row 4 values (active record) | Long Integer; AUTONUMBER(); int; FX_sOrderNumber; Right |
| Save | Enabled (`find` "Save" without `disabled`) |
| Dialog / validation / session expiry | None (`find` "dialog": no match) |
| Pre-Save screenshot | `t6-00` |

### Save invocation and immediate response

- **One click on the toolbar Save (`f1e28`).** The browser action returned without a tool error (no timeout, no ref error).
- **Native response text: none.** No success, warning, validation, error or confirmation text was displayed, and no dialog appeared (`find` "dialog": no match). The Save control showed the tooltip `Save` on hover. The brief asked for verbatim text; the verbatim response is therefore the absence of any message.
- **Immediately after Save (`t6-01`):** Save `[disabled]` (greyed in the screenshot; `find` "Save" shows `[disabled] [active]`); pending stars cleared on rows 2, 3 and 4; the form stayed on FX_OrderNumBase (row 4); Check In and Undo Check Out enabled on the displayed row 4 record (checked out, per the usual meaning recorded in EXP-047-R2; not acted on).
- **After a 2-second settle (`t6-02`):** same state. Save `[disabled]` (`find`); no dialog; no message.

### Settled state and read-only verification of each class

| Row | Record | Post-Save state (read-only row selection) | Difference from pre-Save |
| --- | --- | --- | --- |
| 1 | FX_ItemBase | Unstarred; String, 20, nvarchar, FX_sItem; Base Class and Domain blank; Revision 1 / 10/10/2026 (grid row, in the post-Save snapshot) | None (not re-selected; read from the grid row) |
| 2 | FX_CustomerID | Selected (`t6-03`): Class Name `FX_CustomerID`; Data Type `String`; Length `30`; Column Data Type `nvarchar`; Label String ID `FX_sCustomerID`; Domain IDO Name `FX_HelloWorld01`; Domain Property `FX_Code`; Domain List Properties `FX_Label`; Base Class, Default Value, Decimal Position, Input Mask, Justify blank; **Check In and Undo Check Out enabled** | Star cleared; checkout buttons changed from disabled (pending) to enabled; values unchanged |
| 3 | FX_Item | Selected (`t6-04`): Class Name `FX_Item`; Base Class `FX_ItemBase`; Domain IDO Name `FX_Items`; Domain Property `FX_Item`; Domain List Properties `FX_Description`; **Data Type `String`, Length `20`, Column Data Type `nvarchar`, Label String ID `FX_sItem` now displayed**; Check In and Undo Check Out enabled | Star cleared; checkout enabled; **inherited local fields now displayed (blank before Save)** |
| 4 | FX_OrderNumBase | Selected (`t6-05`): Class Name `FX_OrderNumBase`; Data Type `Long Integer`; Default Value `AUTONUMBER()`; Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`; Length, Decimal Position and Domain blank; Check In and Undo Check Out enabled | Star cleared; checkout enabled; values unchanged |

- **Row count:** four (unchanged). **Row identities and order:** unchanged (FX_ItemBase, FX_CustomerID, FX_Item, FX_OrderNumBase).
- **Revision No / Revision Date:** `1` / `10/13/2026` on the new rows (unchanged display).
- **Checkout indications:** rows 2, 3 and 4 displayed Check In and Undo Check Out enabled after Save (pre-Save these were disabled on the pending rows). Row 1 was not selected in T6; its checkout state was not re-read.

### Asterisk states after Save (observed; no meaning assigned)

- **FX_CustomerID (row 2):** `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. Grid header `Class Name` (asterisk removed).
- **FX_Item (row 3):** `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties` on the form. **No asterisk** on the now-displayed Data Type, Length, Column Data Type or Label String ID labels. Grid header `Class Name` (no asterisk).
- **FX_OrderNumBase (row 4):** `*Data Type`, `*Default Value`, `*Column Data Type`, `*Label String ID`, `*Justify`. Grid header `Class Name` (no asterisk).
- Pre-Save asterisks on FX_CustomerID and FX_OrderNumBase local fields are unchanged; the red Class Name asterisk (add-mode marker) is gone after Save. Meaning (required versus override) remains **unresolved**.

### Pre-Save to post-Save differences (recorded as observed)

1. Save control: enabled → disabled.
2. Pending stars on rows 2, 3 and 4: present → cleared.
3. Check In / Undo Check Out on rows 2, 3 and 4: disabled → enabled (the records now display as checked out to the operator; not acted on).
4. **FX_Item inherited fields:** Data Type, Length, Column Data Type and Label String ID were **blank** pre-Save and are **displayed** post-Save as `String`, `20`, `nvarchar` and `FX_sItem`. The mechanism (applied at Save, or derived on display) is **unresolved** in this UI.
5. FX_OrderNumBase `AUTONUMBER()` was displayed pre-Save and remains displayed post-Save; no normalization was observed. **Display is not database storage proof.**
6. Class Name red add-mode asterisk removed on all three records; no other value changed.

### Acceptance checks (T6)

| AC | T6 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; T6 prerequisite check confirmed the Web Client, identity bar, Save enabled, no dialog | `t6-00` | Locked By masked by the tool |
| AC-2 | Not repeated | `t1-03`–`t1-06` | — |
| AC-3 | **Settled, displayed (UI level):** FX_CustomerID shows exactly String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label after Save | `t6-03` and the targeted post-Save snapshot | Same-session display; not a database read |
| AC-4 | **Settled, displayed (UI level):** FX_Item shows Base Class FX_ItemBase, FX_Items, FX_Item, FX_Description; the inherited local fields now display String, 20, nvarchar, FX_sItem (blank pre-Save) | `t6-04` and the post-Save snapshot | Inheritance mechanism unresolved |
| AC-5 | **Settled, displayed (UI level):** FX_OrderNumBase shows Long Integer, AUTONUMBER(), int, FX_sOrderNumber, Right | `t6-05`, `t6-02` | AUTONUMBER() display only; stored text not verified |
| AC-6 | **SUPPORTED (UI level, one run):** exactly three News recorded; exactly one toolbar Save invoked (not retried); native response recorded verbatim as **none** (no text displayed); clean settled state (Save disabled, no stars, no dialog); checkout indications recorded as enabled on rows 2–4 | `t6-00` (pre-Save), `t6-01` (immediate), `t6-02` (settled) | The browser action completing is distinct from a confirmed native application Save response; the absence of a message is observed, not a confirmation. No database read |
| AC-7 | **NOT RUN** (close and reopen not performed in T6) | — | — |
| AC-8 | **Partial** (T6 audit and inventory below; final report awaits AC-7) | — | — |

### Evidence (T6)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t6-00-pre-save-three-pending-rows-save-enabled.png` | Rows 2–4 starred, FX_ItemBase unstarred; FX_OrderNumBase active; Save icon enabled; status `(IDO Property Classes 4 of 4)` | Pre-Save state: three pending rows, Save enabled, no dialog | Save result |
| `evidence/EXP-070/t6-01-immediately-after-single-Save.png` | Save greyed; tooltip `Save`; stars cleared on all rows; row 4 displayed with Check In / Undo Check Out enabled; no dialog or message | Immediate native state after the one Save: no message, Save disabled, pending stars cleared | Persistence; a success message (none shown) |
| `evidence/EXP-070/t6-02-settled-after-single-Save-grid-and-form.png` | Same as `t6-01` after a 2-second settle; Save greyed; four rows, none starred; FX_OrderNumBase values visible; Check In / Undo Check Out enabled | Settled UI state after Save | Persistence; row 2 and row 3 values (see `t6-03`, `t6-04`) |
| `evidence/EXP-070/t6-03-settled-row2-FX_CustomerID-readonly.png` | Row 2 selected and active (status `(IDO Property Classes 2 of 4)`); Class Name `FX_CustomerID`; Data Type `String`; Length `30`; Column Data Type `nvarchar`; Label String ID `FX_sCustomerID`; Domain IDO Name `FX_HelloWorld01`; Domain Property `FX_Code`; Domain List Properties `FX_Label`; Check In / Undo Check Out enabled; Save greyed; no row starred | AC-3 settled display of all seven values, with identity and post-Save checkout state | Persistence; the grid's right-hand columns (targeted snapshot only) |
| `evidence/EXP-070/t6-04-settled-row3-FX_Item-readonly-inherited-values.png` | Row 3 selected; Class Name `FX_Item`; Base Class `FX_ItemBase`; Data Type `String`; Length `20`; Column Data Type `nvarchar`; Label String ID `FX_sItem`; Domain IDO `FX_Items`; Domain Property `FX_Item`; Domain List `FX_Description`; Check In / Undo Check Out enabled; status `(IDO Property Classes 3 of 4)` | The inherited values displayed after Save (AC-4 settled) | Mechanism of inheritance; persistence |
| `evidence/EXP-070/t6-05-settled-row4-FX_OrderNumBase-readonly.png` | Row 4 selected; Class Name `FX_OrderNumBase`; Data Type `Long Integer`; Default Value `AUTONUMBER()`; Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`; Check In / Undo Check Out enabled; Save greyed; no dialog | AC-5 settled display; no differences from pre-Save | Stored Default Value text; persistence |

Limitation: the post-Save row 2 record is verified by the targeted accessibility snapshot (`f1e102`, inline), not all of its fields are visible in one image. Full snapshots were returned inline and not saved to files.

### Operation counts (T6)

| Operation | T6 | Cumulative (T1 through T6) |
| --- | --- | --- |
| New | **0** | **3** (FX_CustomerID, FX_Item, FX_OrderNumBase) |
| **Save (toolbar)** | **1** (one invocation; no retry; no second Save) | **1** |
| Close / reopen | **0 / 0** | **0 / 0** (the one permitted close/reopen remains for the next task) |
| Recovery (exact-name) queries | **0** | **0** |
| Changes to existing classes (FX_ItemBase, FX_UMBase, FX_UM, FX_Cost or other) | **0** | **0** |
| Field edits to any record | **0** | **0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Checkout actions (Check In, Check Out, Undo Check Out) | **0** | **0** |
| Browser clicks (successful / failed) | **4 / 0** (Save 1; row selectors 3) | **43 / 0** |
| Plain fills / slow typing / key presses | **0 / 0 / 0** | unchanged: plain fills 12; slow typing 3 successful / 4 attempts; Tab 15; F2 2; F4 5; Control+a 1; Backspace 1 |
| Waits | **1** (2 s, post-Save settle) | **7** (T1 6, T6 1) |
| `browser_find` calls | **10** | **77** (T1 19, T2 19, T3 11, T4 13, T5 5, T6 10) |
| Worker-requested full snapshots (untargeted) | **1** (pre-Save, Web Client tab) | **8** (T1 2, T2 1, T3 1, T4 2, T5 1, T6 1) |
| Worker-requested targeted snapshots | **2** (grid `f1e116`; form `f1e102`) | **16** (T1 4, T2 1, T3 2, T4 4, T5 3, T6 2) |
| `browser_tabs` list / select | **1 / 1** | **7 / 6** (T1 2 / 1, T2 1 / 1, T3 1 / 1, T4 1 / 1, T5 1 / 1, T6 1 / 1) |
| Screenshots (worker-requested PNG) | **6** (`t6-00` to `t6-05`) | **25** (T1 8, T2 3, T3 2, T4 2, T5 4, T6 6) |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** | **1 / 1 / 0** (T4) |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |
| Total requested browser calls in T6 | **26** = tabs 2, snapshots 3, finds 10, screenshots 6, wait 1, clicks 4 | — |

The "Ran Playwright code" wrappers accompanying each action are tool-generated; the worker supplied refs and text only.

### Process deviations and non-browser errors carried forward (not successful operations)

1. **T4 process deviation:** the Class Name plain fill and its Tab were sent in the same turn, contrary to the one-action-at-a-time rule. Both succeeded and the T4 readback verified the result.
2. **T4 browser error:** `Ref f1e736 not found` on the Column Data Type combobox (the slow type did not execute). One fresh untargeted snapshot (recovery 1 of 1) was used; the same ref was then confirmed by a live `find` and the corrected attempt succeeded. The recovery allowance is exhausted for this experiment's Property Classes Form work; none was used in T5 or T6.
3. **T4 non-browser error:** a `Grep` of a tool-results file was denied by the permission system. No content from that file was used.
4. **T4 non-browser error:** a documentation `Edit` failed because its anchor text matched more than one place. It was not applied; the record was updated with a unique anchor.
5. **T2 note:** the first untargeted snapshot of T2 was taken while the Designer tab was marked current; the Web Client was then selected and identified by `find`, screenshot and tab listing.

No deviation occurred in T6.

### Worker-written-file inventory (T6)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T6 section) |
| `evidence/EXP-070/t6-00-pre-save-three-pending-rows-save-enabled.png` | created |
| `evidence/EXP-070/t6-01-immediately-after-single-Save.png` | created |
| `evidence/EXP-070/t6-02-settled-after-single-Save-grid-and-form.png` | created |
| `evidence/EXP-070/t6-03-settled-row2-FX_CustomerID-readonly.png` | created |
| `evidence/EXP-070/t6-04-settled-row3-FX_Item-readonly-inherited-values.png` | created |
| `evidence/EXP-070/t6-05-settled-row4-FX_OrderNumBase-readonly.png` | created |

Cumulative inventory (T1–T6): the record; T1 PNGs `t1-00`–`t1-07`; T2 `t2-00`–`t2-02`; T3 `t3-00`–`t3-01`; T4 `t4-00`–`t4-01`; T5 `t5-01`–`t5-04`; T6 `t6-00`–`t6-05`. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` are not worker output.

### Final UI state (end of T6)

- Web Client tab (tab 1) selected; Designer tab (tab 0) not acted on.
- Property Classes runtime tab open and selected, in browse mode, on FX_OrderNumBase (row 4, active).
- **Save disabled.** Four rows, none starred. FX_ItemBase unchanged. FX_CustomerID, FX_Item and FX_OrderNumBase displayed as saved, with checkout buttons enabled.
- No dialog, prompt, banner, validation message or session-expiry condition. The Form has **not** been closed or reopened, and no recovery query has been run.

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| One toolbar Save clears the pending stars on all three new rows and disables Save, with no message or dialog | **observed** (one run; UI level) |
| The native response displayed no success, warning, validation or error text | **observed** (one run) |
| Check In and Undo Check Out are enabled on the three new records after Save (were disabled while pending) | **observed** (one run); not acted on |
| FX_Item's inherited Data Type, Length, Column Data Type and Label String ID display after Save (blank before Save) | **observed** (one run); mechanism **unresolved** |
| FX_OrderNumBase's `AUTONUMBER()` remains displayed after Save | **observed** (display only); stored text **not verified** |
| Persistence of the three records beyond this session | **not performed**; same-session UI evidence only. **Nothing is replay_verified** |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |

### Open questions and next permitted action

1. **AC-6 is supported at UI level** (one Save, native response: no text, settled clean state). AC-7 (close, reopen and three recovery queries) is not run.
2. **Next permitted action (requires separate authorization):** one close of the Property Classes Form through its Form-tab control, one reopen through Form > Open > Select Form, and one exact-name recovery query per class (three in total), compared against the pre-Save configuration.
3. Open questions carried into AC-7: whether FX_Item's inherited values persist on reopen; whether `AUTONUMBER()` is stored exactly as typed; the checkout state after a reopen.
4. The checkout state of the three new records (checked out to the operator, per the enabled buttons) is an operator decision for check-in outside this experiment; no check-in was performed.
5. Classification remains **observed only, NOT replay_verified**.

---

## T7 — ONE clean close and ONE reopen of Property Classes; no recovery query (Save NOT invoked; no New)

- Task T7, cycle 6, task_message_id `7b56844f-1a50-438f-ac38-f8e493a0a54e`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: confirm the baseline (Property Classes open, Save disabled, four rows, no pending indicators, no dialog); ONE native close via the Form-tab control; confirm the tab is gone; ONE reopen via Form > Open > Select Form (IdoPropertyClasses); verify identity, mode and clean state. **No recovery query, no New, no Save, no field edit, no checkout or check-in, no unload, no refresh, no direct URL navigation, no second close or reopen.**

### Baseline before close (verified read-only)

| Check | Observed |
| --- | --- |
| Tab / Form | Tab 1 (Web Client) selected after the tab list; runtime tab `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses` |
| Rows | Four rows: FX_ItemBase, FX_CustomerID, FX_Item, FX_OrderNumBase; row 4 active; **no pending stars**; row checkboxes checked |
| Save | `[disabled]` (`find` "Save"; greyed in `t7-00`) |
| Status | `(IDO Property Classes 4 of 4)` |
| Dialog / banner / validation / session expiry | None (`find` "dialog": no match) |
| Baseline screenshot | `t7-00` |

Baseline status: clean. The brief's stop condition (dirty or ambiguous) did not apply, so the close proceeded.

### Close (one operation)

- **One click on `Close Panel Property Classes` (ref `f1e104`, the Form-tab control, not a browser tab).** The click returned without error.
- **Native response:** no save prompt, no discard prompt, no dialog (`find` "Close Panel Property Classes" after the close: no match; the URL changed to `favoriteContext=FX_Items`).
- **Post-close state (`t7-01`):** the Property Classes tab is gone; the remaining runtime tab shows FX_Items (Unit of Measure record). The FX_Items tab was not acted on.

### Reopen (one operation)

- A fresh untargeted snapshot was taken after the close (the page had changed). Form menu clicked (`f1e10`); `Open` menu item clicked (`f1e1215`); `find` "Select Form" showed the dialog (`f1e1265`) pre-filled with `PropertyClass` and one row `Property Classes` / `IdoPropertyClasses`.
- One click on the row caption (`f1e1285`); one click on `OK` (`f1e1313`).
- The URL changed to `favoriteContext=IdoPropertyClasses`. After a 2-second wait, the Form was verified (`t7-02`).

### Reopened state (verified read-only)

| Check | Observed |
| --- | --- |
| Identity | Tab heading `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses`; status bar text `Filter in Place` |
| Mode | Filter in Place (the FiP icon appears beside the tab heading); criteria blank; one empty criteria row (not a starred record) |
| Records loaded | None displayed (no rows; blank fields) |
| Save | `[disabled]` (`find` "Save") |
| New / Delete | `[disabled]` (per `find` and `t7-02`) |
| Dialog / banner / validation / session expiry | None (`find` "dialog": no match) |

This reopened state is the same clean FiP reopen pattern recorded in EXP-048 T5 and EXP-047-R2 T3. **No recovery query was run** in T7. The three exact-name recovery queries are reserved for the separate task.

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list | Tab 0 Designer current; tab 1 Web Client | — |
| 2 | `browser_tabs` select tab 1 | Success | — |
| 3 | Untargeted snapshot (Web Client) | Baseline as above | snapshot (inline) |
| 4 | `find` "dialog" (none); screenshot `t7-00` | Clean baseline; Save disabled | `t7-00` |
| 5 | ONE click on `Close Panel Property Classes` (`f1e104`) | Close returned; URL `favoriteContext=FX_Items` | — |
| 6 | `find` "Close Panel Property Classes" (none); screenshot `t7-01` | Property Classes tab gone | `t7-01` |
| 7 | Fresh untargeted snapshot (page changed after the close) | FX_Items tab current; Form menu available | snapshot (inline) |
| 8 | ONE click on the `Form` menu button (`f1e10`) | Menu open | — |
| 9 | `find` "Open"; ONE click on `Open` menu item (`f1e1215`) | Select Form dialog opened | — |
| 10 | `find` "Select Form"; targeted snapshot of the dialog (`f1e1265`) | Filter `PropertyClass`; one row `Property Classes` / `IdoPropertyClasses` | snapshot (inline) |
| 11 | ONE click on the row caption (`f1e1285`) | Row selected | — |
| 12 | ONE click on `OK` (`f1e1313`) | Form reopened; URL `favoriteContext=IdoPropertyClasses` | — |
| 13 | `wait_for` 2 s; screenshot `t7-02`; `find` "Save" (disabled); `find` "dialog" (none) | Reopened clean in FiP mode | `t7-02` |

Errors: none (no Ref-not-found, no timeout, no validation message). Recovery snapshots: 0 (none needed; the post-close snapshot was a planned fresh snapshot, not a recovery).

### Evidence (T7)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t7-00-pre-close-four-rows-clean-save-disabled.png` | Property Classes tab selected; rows 1–4 (none starred); FX_OrderNumBase active; Save greyed; status `(IDO Property Classes 4 of 4)`; identity bar | Clean pre-close baseline | Database state; Locked By in full |
| `evidence/EXP-070/t7-01-after-single-close-Property-Classes-tab-gone.png` | The Property Classes tab is gone; FX_Items tab shows the Unit of Measure record; no prompt | The close removed the Form tab with no prompt | Whether the saved records persisted (not tested by close alone) |
| `evidence/EXP-070/t7-02-after-single-reopen-Property-Classes-via-Select-Form.png` | Property Classes tab selected; `Filter in Place` mode; blank criteria; one empty criteria row; Save and New greyed; identity bar | Reopen through Select Form; clean FiP state; no records loaded | That any class record was reloaded (no recovery query run); persistence |

### Operation counts (T7)

| Operation | T7 | Cumulative (T1 through T7) |
| --- | --- | --- |
| New | **0** | **3** (FX_CustomerID, FX_Item, FX_OrderNumBase) |
| Save | **0** | **1** (T6) |
| Form close | **1** (native Form-tab control) | **1** |
| Form reopen | **1** (Form > Open > Select Form) | **1** |
| Recovery (exact-name) queries | **0** | **0** (three permitted, not run) |
| Changes to existing classes | **0** | **0** |
| Field edits | **0** | **0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Checkout actions | **0** | **0** |
| Browser clicks (successful / failed) | **5 / 0** (close 1; Form menu 1; Open menu item 1; Select Form row 1; OK 1) | **48 / 0** |
| Plain fills / slow typing / key presses | **0 / 0 / 0** | unchanged: plain fills 12; slow typing 3 successful / 4 attempts; Tab 15; F2 2; F4 5; Control+a 1; Backspace 1 |
| Waits | **1** (2 s) | **8** |
| `browser_find` calls | **6** | **83** |
| Worker-requested full snapshots (untargeted) | **2** (Web Client at T7 start; fresh post-close snapshot) | **10** |
| Worker-requested targeted snapshots | **1** (Select Form dialog, `f1e1265`) | **17** |
| `browser_tabs` list / select | **1 / 1** | **8 / 7** |
| Screenshots (worker-requested PNG) | **3** (`t7-00`, `t7-01`, `t7-02`) | **28** |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** | **1 / 1 / 0** (T4 only) |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |
| Total requested browser calls in T7 | **20** = tabs 2, full snapshots 2, targeted snapshot 1, finds 6, clicks 5, wait 1, screenshots 3 | — |

### Process limitations carried forward

1. **T4 same-turn deviation** (a Class Name fill and its Tab sent together; both succeeded and were verified by readback).
2. **T4 Ref-not-found** on the Column Data Type combobox (not executed; one recovery snapshot used; corrected attempt succeeded). The T4 browser-reference recovery allowance is exhausted for this task series.
3. **T4 denied `Grep`** of a tool-results file (no content used).
4. **T4 failed `Edit`** on a non-unique anchor (not applied; re-applied with a unique anchor).
5. **Save response is absent text (T6):** the Save produced no visible message. The record treats this as an observed absence, not a confirmation of application Save.
6. **Locked By** is masked by the tool, so the account name is not transcribed.
7. **Reopen mode:** the reopened Form is in Filter in Place mode with no records loaded. Any checkout state, inherited value or AUTONUMBER() display on the three new classes was **not** re-read in T7. These are the purpose of the recovery queries (AC-7), which are not run here.

### Worker-written-file inventory (T7)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T7 section) |
| `evidence/EXP-070/t7-00-pre-close-four-rows-clean-save-disabled.png` | created |
| `evidence/EXP-070/t7-01-after-single-close-Property-Classes-tab-gone.png` | created |
| `evidence/EXP-070/t7-02-after-single-reopen-Property-Classes-via-Select-Form.png` | created |

Cumulative inventory (T1–T7): the record; T1 PNGs `t1-00`–`t1-07`; T2 `t2-00`–`t2-02`; T3 `t3-00`–`t3-01`; T4 `t4-00`–`t4-01`; T5 `t5-01`–`t5-04`; T6 `t6-00`–`t6-05`; T7 `t7-00`–`t7-02`. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` are not worker output.

### Final UI state (end of T7)

- Web Client tab (tab 1) selected; Designer tab (tab 0) not acted on.
- Property Classes reopened (IdoPropertyClasses) in Filter in Place mode, blank criteria, no records loaded, Save and New disabled.
- The FX_Items runtime tab remains open in the background, not acted on.
- No dialog, prompt, banner or validation message. No unsaved change.
- The three new classes exist as saved in the prior T6 settled state; their post-reopen values are **not verified** in T7 (no recovery query).

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| Native Form-tab close of a clean Property Classes Form removes the tab with no prompt | **observed** (one run) |
| Reopen through Form > Open > Select Form selects IdoPropertyClasses and returns it in Filter in Place mode with blank criteria | **observed** (one run; consistent with EXP-047-R2 T3 and EXP-048 T5) |
| Save and New are disabled on the reopened blank Filter in Place Form | **observed** (one run) |
| The three new classes persist across the close/reopen | **not tested** (no recovery query in T7) |
| Ordinary close/reopen establishes database durability | **not established** (a weak same-session UI boundary only). Nothing is replay_verified |

### Open questions and next permitted action

1. **AC-7 is partial:** the clean Form was closed once and reopened once. The three exact-name recovery queries (one per class, compared against the pre-Save configuration, including the inherited FX_Item values and the AUTONUMBER() text) are NOT RUN.
2. **Next permitted action (requires separate authorization):** exactly one exact-name Filter in Place recovery query per new class (three in total, each run once), with screenshots, compared against the pre-Save configuration recorded in T2–T6.
3. The reopened Form is in Filter in Place mode. Entering criteria for the recovery queries would use that mode; no mutation is involved.
4. Classification remains **observed only, NOT replay_verified**.

---

## T8 — THREE read-only exact-name recovery queries (one per class, each run once); AC-7 recovery evidence

- Task T8, cycle 7, task_message_id `95c9fcec-d4d4-4353-8b09-2c186f67fe3b`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: confirm the reopened Property Classes (IdoPropertyClasses) is in Filter in Place with blank criteria, Save disabled, no dialog; then, in the order FX_CustomerID, FX_Item, FX_OrderNumBase, enter only the exact Class Name, commit with Tab, verify the criterion, run exactly one F4, and verify exactly one data row. **No New, no Save, no field edit, no close, no reopen, no checkout or check-in, no unload, no second query for any name.**

### Starting state (verified before any query)

| Check | Observed |
| --- | --- |
| Tab / Form | Tab 1 (Web Client) selected after the tab list; runtime tab `Property Classes` selected; URL `favoriteContext=IdoPropertyClasses` |
| Mode | `Filter in Place`; Class Name criteria blank; no records loaded |
| Save | `[disabled]` |
| New, Delete, Refresh | `[disabled]` |
| Dialog | None (`find` "dialog": no match) |
| Screenshot | `t8-00` |

### Recovery query 1 of 3: FX_CustomerID

| Step | Observed |
| --- | --- |
| Criterion entered | Class Name textbox (`f1e435`) = `FX_CustomerID` (plain fill); ONE Tab |
| Criterion verified before F4 | `find` "Class Name:" showed the textbox value `FX_CustomerID` and the echo row; pre-F4 screenshot `t8-01` shows `FX_CustomerID`, other criteria blank |
| Query | ONE F4; 2-second settle |
| Result | **Exactly one data row**: `FX_CustomerID` (row 1, row checkbox checked, no star). Status `Base Class (IDO Property Classes 1 of 1)`. No placeholder. |
| Values recovered | Data Type `String`; Length `30`; Column Data Type `nvarchar`; Label String ID `FX_sCustomerID`; Domain IDO Name `FX_HelloWorld01`; Domain Property `FX_Code`; Domain List Properties `FX_Label`. Base Class, Description, Decimal Position, Default Value, Input Mask, Justify, Domain Additional Settings blank. Revision No `1`; Revision Date `10/13/2026`; Access As `G6R`; Locked By (operator account, masked by the tool, not transcribed). |
| Checkout indication | Check In and Undo Check Out **enabled** (accessibility: no `disabled`; blue on screen). Not acted on. |
| Save / dialog | Save `[disabled]`; no dialog |
| Screenshots | `t8-01` (criterion before F4); `t8-02` (settled result) |

### Recovery query 2 of 3: FX_Item

| Step | Observed |
| --- | --- |
| Re-entry | Toolbar `Filter in Place` (`f1e32`) clicked once; the retained criterion `FX_CustomerID` was present and replaced |
| Criterion entered | Class Name textbox (`f1e435`) = `FX_Item` (plain fill); ONE Tab |
| Criterion verified before F4 | `find` "Class Name:" showed `FX_Item`; echo row `FX_Item`; pre-F4 screenshot `t8-03` |
| Query | ONE F4; 2-second settle |
| Result | **Exactly one data row**: `FX_Item` (row 1, checked, no star). Status `Base Class (IDO Property Classes 1 of 1)`. No placeholder. |
| Values recovered (configured) | Base Class `FX_ItemBase`; Domain IDO Name `FX_Items`; Domain Property `FX_Item`; Domain List Properties `FX_Description`. |
| Values recovered (inherited, displayed) | Data Type `String`; Length `20`; Column Data Type `nvarchar`; Label String ID `FX_sItem`. |
| Revision / Locked By / Access As | Revision No `1`; Revision Date `10/13/2026`; Access As `G6R`; Locked By masked (not transcribed). |
| Checkout indication | Check In and Undo Check Out **enabled** (blue in `t8-04`). Not acted on. |
| Save / dialog | Save `[disabled]`; no dialog |
| Focus note | After the settled result the Base Class combobox held focus with its text highlighted. No text was typed into it. |
| Screenshots | `t8-03` (criterion before F4); `t8-04` (settled result) |

### Recovery query 3 of 3: FX_OrderNumBase

| Step | Observed |
| --- | --- |
| Re-entry | Toolbar `Filter in Place` (`f1e32`) clicked once; retained `FX_Item` replaced |
| Criterion entered | Class Name textbox (`f1e435`) = `FX_OrderNumBase` (plain fill); ONE Tab |
| Criterion verified before F4 | `find` "Class Name:" showed `FX_OrderNumBase`; echo row `FX_OrderNumBase`; pre-F4 screenshot `t8-05` |
| Query | ONE F4; 2-second settle |
| Result | **Exactly one data row**: `FX_OrderNumBase` (row 1, checked, no star). Status `Base Class (IDO Property Classes 1 of 1)`. No placeholder. |
| Values recovered | Data Type `Long Integer`; Default Value `AUTONUMBER()` (the text field and the grid cell both read `AUTONUMBER()`); Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`. Length, Decimal Position, Domain fields blank. Revision No `1`; Revision Date `10/13/2026`; Access As `G6R`; Locked By masked. |
| Checkout indication | Check In and Undo Check Out **enabled** (blue in `t8-06`). Not acted on. |
| Save / dialog | Save `[disabled]`; no dialog |
| Screenshots | `t8-05` (criterion before F4); `t8-06` (settled result) |

Errors: none. No Ref-not-found, timeout, validation message or dialog during T8. No recovery snapshot was used.

### Comparison: recovered versus pre-Save and post-Save records

| Class | Field | Pre-Save (T2–T5) | Post-Save (T6) | Recovered (T8) | Result |
| --- | --- | --- | --- | --- | --- |
| FX_CustomerID | Data Type / Length / Column Data Type / Label | String / 30 / nvarchar / FX_sCustomerID | same | same | Match |
| FX_CustomerID | Domain IDO / Property / List | FX_HelloWorld01 / FX_Code / FX_Label | same | same | Match |
| FX_CustomerID | Checkout | disabled (pending) | enabled | enabled | Match to post-Save |
| FX_Item | Base Class / Domain IDO / Property / List | FX_ItemBase / FX_Items / FX_Item / FX_Description | same | same | Match |
| FX_Item | Data Type / Length / Column Data Type / Label (local) | **blank** | **String / 20 / nvarchar / FX_sItem displayed** | **String / 20 / nvarchar / FX_sItem displayed** | Differs from pre-Save; matches post-Save. Mechanism unresolved (display, not stored value) |
| FX_Item | Checkout | disabled (pending) | enabled | enabled | Match to post-Save |
| FX_OrderNumBase | Data Type / Column Data Type / Label / Justify | Long Integer / int / FX_sOrderNumber / Right | same | same | Match |
| FX_OrderNumBase | Default Value | `AUTONUMBER()` typed | displayed `AUTONUMBER()` | displayed `AUTONUMBER()` | Match (display only; stored text not verified) |
| FX_OrderNumBase | Checkout | disabled (pending) | enabled | enabled | Match to post-Save |

### Asterisk states observed on recovery (recorded without assigning meaning)

- **FX_CustomerID:** `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. Same as the post-Save state (T6).
- **FX_Item:** `*Domain Property`, `*Domain List Properties` (accessibility). The Domain IDO Name label reads `Domain IDO Name:` in the accessibility snippet but `*Domain IDO Name:` appears in the screenshot `t8-04`. **These two readings differ and this is not resolved.** Post-Save (T6) recorded `*Domain IDO Name`. The local labels Data Type, Length, Column Data Type and Label String ID carry no asterisk on this record.
- **FX_OrderNumBase:** `*Data Type`, `*Default Value`, `*Column Data Type`, `*Label String ID`, `*Justify`. Same as the post-Save state.
- Meaning (required versus override) remains **unresolved**.

### Column header observation (observed; not explained)

- The grid column captions in the reopened Form's accessibility tree differ from the pre-close grid in the last column (`Hidden` in the reopened grid; `UI hidden` pre-close). The reopened header also drops some asterisks while the Form is in blank Filter in Place mode, and shows them again on the recovered rows. Recorded as observed only.

### Acceptance checks (T8)

| AC | T8 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; T8 start confirmed the reopened Form, clean state | `t8-00` | Locked By masked by the tool |
| AC-2 | Not repeated | `t1-03`–`t1-06` | — |
| AC-3 | **Recovered (UI level, same session):** FX_CustomerID returns exactly one row with String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label | `t8-01`, `t8-02` | Same-session display; not a database read |
| AC-4 | **Recovered (UI level):** FX_Item returns exactly one row with Base Class FX_ItemBase, FX_Items, FX_Item, FX_Description; inherited String, 20, nvarchar, FX_sItem displayed | `t8-03`, `t8-04` | Inherited display mechanism unresolved; Domain IDO asterisk discrepancy noted |
| AC-5 | **Recovered (UI level):** FX_OrderNumBase returns exactly one row with Long Integer, `AUTONUMBER()` (typed route), int, FX_sOrderNumber, Right | `t8-05`, `t8-06` | Display only; stored Default Value text not verified |
| AC-6 | Unchanged from T6 (one Save; no visible native text; settled clean) | T6 evidence | — |
| AC-7 | **SUPPORTED (UI level, same session):** Form closed once and reopened once (T7); one exact-name recovery query per class returned exactly one row matching its pre-Save configuration; differences (inherited FX_Item display versus blank pre-Save) recorded | `t7-00`–`t7-02`; `t8-01`–`t8-06` | Same-session UI recovery only; not database durability or replay verification |
| AC-8 | **Open (left for separate documentation and acceptance review, as instructed)** | — | — |

### Evidence (T8)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-070/t8-00-reopened-FiP-blank-start-of-recovery.png` | Property Classes in Filter in Place, blank criteria, Save and New greyed, identity bar | Clean starting state before recovery | Any query result |
| `evidence/EXP-070/t8-01-recovery-1-FX_CustomerID-criterion-before-F4.png` | Class Name `FX_CustomerID`; echo row `FX_CustomerID`; other criteria blank; status `Filter in Place`; Save greyed | Criterion before the first F4 | The result |
| `evidence/EXP-070/t8-02-recovery-1-FX_CustomerID-settled-result.png` | One row `FX_CustomerID` (checked, no star); String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label; checkout enabled; status `Base Class … 1 of 1`; Save greyed | AC-3 recovery: one matching row, values as configured | Persistence beyond this session |
| `evidence/EXP-070/t8-03-recovery-2-FX_Item-criterion-before-F4.png` | Criterion `FX_Item`; echo row `FX_Item`; other criteria blank | Criterion before the second F4 | The result |
| `evidence/EXP-070/t8-04-recovery-2-FX_Item-settled-result.png` | One row `FX_Item`; Base Class `FX_ItemBase`; Data Type `String`; Length `20`; Column Data Type `nvarchar`; Label String ID `FX_sItem`; Domain IDO `FX_Items`; Domain Property `FX_Item`; Domain List `FX_Description`; checkout enabled; Save greyed; Base Class combobox focused (no text typed) | AC-4 recovery: one matching row, with inherited values displayed | The inheritance mechanism; the Domain IDO asterisk discrepancy |
| `evidence/EXP-070/t8-05-recovery-3-FX_OrderNumBase-criterion-before-F4.png` | Criterion `FX_OrderNumBase`; echo row; other criteria blank | Criterion before the third F4 | The result |
| `evidence/EXP-070/t8-06-recovery-3-FX_OrderNumBase-settled-result.png` | One row `FX_OrderNumBase`; Long Integer; Default Value `AUTONUMBER()`; Column Data Type `int`; Label String ID `FX_sOrderNumber`; Justify `Right`; checkout enabled; Save greyed | AC-5 recovery: one matching row; AUTONUMBER() displayed | Stored Default Value text |

I opened every T8 screenshot after writing it. The settled screenshots show one data row, the values listed, and checkout buttons enabled.

### Operation counts (T8)

| Operation | T8 | Cumulative (T1 through T8) |
| --- | --- | --- |
| New | **0** | **3** (FX_CustomerID, FX_Item, FX_OrderNumBase) |
| Save | **0** | **1** (T6) |
| Form close / reopen | **0 / 0** | **1 / 1** (T7) |
| **Recovery (exact-name) queries** | **3** (one per class, each run once) | **3** |
| Changes to existing classes | **0** | **0** |
| Field edits (text typed into the record) | **0** (criteria only) | unchanged from prior tasks |
| Plain fills (criteria) | **3** | **15** |
| Slow typing | **0** | **3 successful / 4 attempts** |
| Tab presses | **3** | **18** |
| F4 presses | **3** | **8** |
| Toolbar `Filter in Place` clicks | **2** | **2** (T8 only) |
| Other clicks | **0** | **50 successful / 0 failed** (T7 48 + T8 2) |
| F2 / Control+a / Backspace | **0** | **2 / 1 / 1** |
| Waits (2 s) | **3** | **11** |
| `browser_find` calls | **16** | **99** |
| Worker-requested full snapshots | **1** (Web Client at start) | **11** |
| Worker-requested targeted snapshots | **1** (grid/form `f1e92` after query 1) | **18** |
| `browser_tabs` list / select | **1 / 1** | **9 / 8** |
| Screenshots (worker-requested PNG) | **7** (`t8-00` to `t8-06`) | **35** |
| Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0** | **1 / 1 / 0** (T4 only) |
| Dialogs or prompts answered | **0** | **0** |
| Portal banner dismissals | **0** | **0** |
| Login, logout, re-login, session expiry, refresh, restart, direct URL navigation | **0** (re-login count **0**) | **0** |
| Worker-authored JavaScript, evaluate, run-code, console or network inspection, direct SQL | **0** | **0** |
| Designer actions | **0** | **0** |
| Checkout actions (Check In, Check Out, Undo Check Out) | **0** | **0** |
| Unloads / cache / FormSync / deployment | **0** | **0** |
| Strings, IDOs, tables, extensions, themes, Forms created | **0** | **0** |
| Total requested browser calls in T8 | **41** = tabs 2, full snapshots 1, targeted 1, screenshots 7, finds 16, plain fills 3, Tab 3, F4 3, toolbar FiP clicks 2, waits 3 | — |

The "Ran Playwright code" wrappers that accompany each action are tool-generated. The worker supplied refs and text only.

### Process deviations and limitations (carried forward; none new in T8)

1. **T4 same-turn deviation:** a Class Name plain fill and its Tab were sent in the same turn. Both succeeded and were verified by the T4 readback.
2. **T4 Ref-not-found** on the Column Data Type combobox (not executed). One recovery snapshot was used and the corrected attempt succeeded. The browser-reference recovery allowance remains consumed and was not renewed in T8.
3. **T4 denied `Grep`** of a tool-results file (no content used).
4. **T4 failed `Edit`** on a non-unique anchor (not applied; re-applied with a unique anchor).
5. **T6 Save returned no visible native text.** Recorded as an observed absence, not a confirmation of the application Save.
6. **Locked By** is masked by the tool and is not transcribed.
7. **T8 asterisk discrepancy:** the FX_Item Domain IDO Name label reads without an asterisk in the accessibility snippet but appears with one in `t8-04`. Unresolved.

### Worker-written-file inventory (T8)

| File | Action |
| --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | edited (status line; this T8 section) |
| `evidence/EXP-070/t8-00-reopened-FiP-blank-start-of-recovery.png` | created |
| `evidence/EXP-070/t8-01-recovery-1-FX_CustomerID-criterion-before-F4.png` | created |
| `evidence/EXP-070/t8-02-recovery-1-FX_CustomerID-settled-result.png` | created |
| `evidence/EXP-070/t8-03-recovery-2-FX_Item-criterion-before-F4.png` | created |
| `evidence/EXP-070/t8-04-recovery-2-FX_Item-settled-result.png` | created |
| `evidence/EXP-070/t8-05-recovery-3-FX_OrderNumBase-criterion-before-F4.png` | created |
| `evidence/EXP-070/t8-06-recovery-3-FX_OrderNumBase-settled-result.png` | created |

Cumulative inventory (T1–T8): the record; T1 PNGs `t1-00`–`t1-07`; T2 `t2-00`–`t2-02`; T3 `t3-00`–`t3-01`; T4 `t4-00`–`t4-01`; T5 `t5-01`–`t5-04`; T6 `t6-00`–`t6-05`; T7 `t7-00`–`t7-02`; T8 `t8-00`–`t8-06`. No other repository file was written by the worker. Tool-generated snapshot and console logs under `evidence/playwright/` are not worker output.

### Final UI state (end of T8)

- Web Client tab (tab 1) selected; Designer tab (tab 0) not acted on.
- Property Classes (IdoPropertyClasses) open in browse mode, showing one record (FX_OrderNumBase, row 1) from the third recovery query.
- Save disabled. No pending stars. No dialog, prompt, banner or validation message.
- The Form has not been closed again. No further query, New, Save or checkout action has been taken.
- The Base Class combobox on the last displayed record holds focus with no text typed.

### Knowledge state (T8)

| Finding | State |
| --- | --- |
| Exact-name Filter in Place query returns exactly one row for each of FX_CustomerID, FX_Item and FX_OrderNumBase after the reopen | **observed** (one run; same session; UI level) |
| Recovered configured values match the pre-Save records for all three classes | **observed** (one run) |
| FX_Item's inherited Data Type, Length, Column Data Type and Label String ID are displayed on recovery (blank pre-Save) | **observed** (one run); mechanism **unresolved** |
| `AUTONUMBER()` is displayed on recovery | **observed** (display only); stored text **not verified** |
| Checkout buttons enabled on all three recovered records | **observed** (one run); checkout state not acted on |
| FX_Item Domain IDO Name asterisk: screenshot and accessibility readings differ | **unresolved** |
| Asterisk meanings (required versus override) | **observed** pattern; meaning **unresolved** |
| Persistence or database durability of the three classes | **not established**. Same-session UI recovery only; ordinary close and reopen is a weak boundary. Nothing is replay_verified |

### Open questions and next step

1. **AC-7 is supported at UI level** in this session. AC-8 is left open for the separate documentation and acceptance review, as instructed.
2. Open for the review: the stored Default Value text; whether inherited FX_Item values are stored or derived on display; the FX_Item Domain IDO Name asterisk discrepancy; and the checkout state (enabled on all three records; check-in is an operator decision outside this experiment).
3. Classification remains **observed only, NOT replay_verified**.

---

## T9 — Final acceptance review and documentation only (zero browser calls; no Mongoose change)

- Task T9, cycle 8, task_message_id `a34f7465-e739-4eeb-ad34-234ef008f629`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`, run `R-20261013-132859-BBJH`. Date 2026-10-13 (system date).
- Scope: read this record and the saved evidence; reconcile the T1–T8 audit against the controller audits `evidence/EXP-070/harness-audit-T1.md` … `harness-audit-T8.md`; write the final acceptance report; update only this record. **No browser tool, no New, no Save, no close, no reopen, no query, no checkout operation.**
- Full report: `evidence/EXP-070/final-acceptance-report.md`.

### Acceptance matrix (final)

| AC | Final status | Principal evidence | Principal limitation |
| --- | --- | --- | --- |
| AC-1 | Supported (UI, qualified) | `t1-00`, `t1-01`, `t2-00` | Locked By masked; "checked out to the operator" is an inference |
| AC-2 | Supported (UI, one run), criteria-visibility limitation | `t1-04`, `t1-05`, `t1-06` (zero rows); `t1-03` (criterion, FX_CustomerID only); `t1-01`, `t1-07` (controls) | Pre-F4 criterion screenshots only for FX_CustomerID |
| AC-3 | Supported (UI) | `t2-02`, `t3-01`, `t5-01`, `t6-03`, `t8-02` | Pending inferred from stars; no database read |
| AC-4 | Supported (UI) | `t3-01`, `t5-02`, `t6-04`, `t8-04` | Inheritance mechanism unresolved; asterisk discrepancy (T8) |
| AC-5 | Supported (UI) | `t4-01`, `t5-03`, `t6-05`, `t8-06`; route: typed `AUTONUMBER()` (no lookup offered) | Display only; stored text not verified |
| AC-6 | Supported (UI), native-response limitation | `t6-00`, `t6-01`, `t6-02`; three New clicks (T2, T3, T4); one Save click (T6) | No visible native message; absence recorded, not confirmation |
| AC-7 | Supported (UI, same session) | `t7-00`–`t7-02`; `t8-01`–`t8-06` | Same session only; weak persistence boundary |
| AC-8 | Supported by the final report (for operator review) | `evidence/EXP-070/final-acceptance-report.md` | Counts reconciled across two definitions; `browser_type` flag |

### Required counts (reconciled)

| Count | Value | Controller audit agrees |
| --- | --- | --- |
| New | 3 | Yes (T2 r9, T3 r4, T4 r4) |
| Toolbar Save | 1 | Yes (T6 r7 only) |
| Form close | 1 | Yes (T7 r7) |
| Form reopen | 1 | Yes (T7 r12, r14, r17, r18) |
| Absence queries | 3 | Yes (T1) |
| Recovery queries | 3 | Yes (T8) |
| Existing-class modifications | 0 | Yes (T3 lookup selected FX_ItemBase as FX_Item's Base Class; FX_ItemBase not edited) |
| Strings created | 0 | Yes |
| Unloads | 0 | Yes |
| Checkout-management actions | 0 | Yes |
| Re-logins | 0 | Yes |

Controller totals across T1–T8: **actions** (click, type, key press, tab select) **107**; **reads** (find, snapshot, tab list, screenshot, wait) **184**; non-browser rows 76; total rows 367. The controller counts finds at **100** cumulatively. The earlier T1–T8 sum was 99 because **T2's find count is 20, not 19**. The T2 line in this record is annotated with the correction; the original value stays visible.

### Process deviations and flags carried forward

1. T4 same-turn sequencing deviation (Class Name fill and Tab sent as parallel calls); both succeeded and were verified.
2. T4 `Ref f1e736 not found` (one recovered; one fresh untargeted snapshot used, output not readable back; ref confirmed by live `find`; corrected attempt succeeded). The browser-reference recovery allowance is exhausted and was not renewed.
3. T4 denied `Grep` of a tool-results file (non-browser; no content used).
4. T4 failed documentation `Edit` (non-unique anchor; not applied; re-applied with a unique anchor).
5. T6 Save returned no visible native message (recorded as an absence).
6. Harness `browser_type` flag: 19 "prohibited-tool" classifications across T1, T2, T3, T4 and T8. The audits note that flagged tools may be allowed by other briefs. These were rendered-UI text entries for the brief's required values and criteria; no evaluate or run-code tool was used. **Operator decision needed:** if `browser_type` is not permitted for this brief, the field-entry steps need review before acceptance.
7. The first T1 draft of this record contained the operator's sign-in account name; it was removed within T1. The record contains no account name.

### Worker-written files (T9)

- Created: `evidence/EXP-070/final-acceptance-report.md`.
- Edited: this record (status line; T2 find annotation; this T9 section).
- Cumulative EXP-070 inventory: this record (created T1, edited T1–T9), 35 PNG captures (`evidence/EXP-070/t1-00` … `t8-06`), and the final report: **37 worker-written files**. The eight `harness-audit-T*.md` files are controller-generated and were read, not edited.

### Final UI state (last recorded at end of T8; not re-read in T9)

- Web Client tab selected; Property Classes (IdoPropertyClasses) open in browse mode on FX_OrderNumBase; Save disabled; no pending stars; no dialog, prompt, banner or validation message.
- The three new classes are saved (T6 settled state), reopened and recovered (T7–T8). Checkout buttons enabled on all three; no checkout action taken.

### Knowledge state (T9 summary)

- Acceptance is recorded as **observed only** (UI level, single session). Nothing is replay_verified. Same-session Form close and reopen is a weak persistence boundary and does not establish database durability.
- Unresolved: stored `AUTONUMBER()` text; whether FX_Item's inherited values are stored or derived; the FX_Item Domain IDO Name asterisk discrepancy (T8); meaning of asterisks and checkout indications; the `browser_type` classification.

### Recommendation

**ACCEPTED as observed only** (UI level, single session), with the qualifications above, subject to the operator confirming that the `browser_type` classification does not affect this brief. Every AC is supported at UI level. This is not acceptance as replay-verified or database-durable.

### Open questions for the operator

1. Confirm the `browser_type` classification (the only condition on the ACCEPTED recommendation).
2. Whether a database or metadata read is wanted for the stored Default Value text and the inheritance mechanism (outside this experiment as scoped).
3. Check-in of the three records (an operator decision outside this experiment; none performed).
4. The Section 11 Designer unload remains with its own brief.
5. Classification remains **observed only, NOT replay_verified**.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 4 section 10 is complete. Operator call under the standing authorization of 2026-10-11.

- Run R-20261013-132859-BBJH completed as accepted after 9 worker tasks.
- The T4 permission denial was a Grep on the worker's own tool-result file outside the repo. It was harmless, and the operator approved it.
- The `browser_type` flags in T1, T2, T3, T4 and T8 are the permitted typing of field values and query criteria.
- Created, tenant-wide, for later cleanup. Each is at Revision 1 and checked out to the operator.
  - Property class `FX_CustomerID`: String, Length 30, Column Data Type nvarchar, Label String ID FX_sCustomerID. Domain IDO Name FX_HelloWorld01, Domain Property FX_Code, Domain List Properties FX_Label.
  - Property class `FX_Item`: Base Class FX_ItemBase. Domain IDO Name FX_Items, Domain Property FX_Item, Domain List Properties FX_Description.
    - After the Save, the inherited String/20/nvarchar/FX_sItem is displayed.
  - Property class `FX_OrderNumBase`: Long Integer, Default Value `AUTONUMBER()` (typed; the field has no lookup), Column Data Type int, Label String ID FX_sOrderNumber, Justify Right.
- Screenshots viewed by the operator assistant:
  - `t6-01`: right after the single Save, the grid shows FX_ItemBase, FX_CustomerID, FX_Item and FX_OrderNumBase, all unstarred. Save is disabled, and the record count is 4 of 4.
  - `t8-02`, `t8-04`, `t8-06`: after the Form close/reopen, one exact-name query per class returns 1 of 1 with the values above.
    - The asterisks mark locally set fields, with only the Domain fields starred on FX_Item, as in EXP-047-R2 and EXP-048.
- Counts:
  - 3 News, 1 Save, 1 Form close/reopen, 3 recovery queries.
  - 0 changes to existing classes, 0 strings created, 0 unloads, 0 checkout actions.
- Deviations accepted, none with any effect:
  - T4 sent a fill and its Tab in the same turn.
  - One stale ref, recovered with one fresh snapshot.
  - Two failed record edits.
- Unverified:
  - Whether `AUTONUMBER()` is the correct expression. Section 12 tests it at runtime (Order Number 1, then increments).
  - Whether the inherited FX_Item values are stored or only displayed.
- Strings FX_sCustomerID and FX_sOrderNumber do not exist yet.
- Confinement (git status): only `evidence/EXP-070/` and this record were written by the run.
- Next: section 11. Designer Unload All Global Form Objects (needs authorization), then New Form Definition > New Data > Maintenance wizard for FX_Orders, using these classes.
