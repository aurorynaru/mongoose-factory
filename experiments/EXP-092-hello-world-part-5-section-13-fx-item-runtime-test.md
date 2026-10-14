# EXP-092 — Hello World Part 5 section 13: FX_Item runtime test on FX_Orders (detail combobox and grid column; unsaved, discarded)

Run: R-20261014-234410-teAm · cycle 0 · task T1 (read-only gates and runtime baseline; stopped before any Item drop-down)
Worker session: 8d00c9fd-3a4f-4db5-bdfe-d598fbf368af · task message: aa68adde-ce08-4d66-88de-a3b5fa2e6571
Scope: User (Form `FX_Orders`); Designer read-only; tenant-wide objects not touched.
Status: **T1 complete (AC-1 met). T2 complete (AC-2 met: detail choice and Discard 1 with reopen verification). T3 complete (AC-3 met: one splitter drag, grid-row choice, Discard 2 with No, reopen verification; AC-4 met: runtime Form closed clean). The T3 section below is the final report (AC-5).** T4 (documentation-only audit, zero browser calls) reconciled the counts against the controller audits; see the T4 section. The runtime FX_Orders Form is **closed**; no prompt or menu is open. The cache contingency was **not** triggered in any task. Recommendation: **ACCEPTED AS OBSERVED** (observed only; see `evidence/EXP-092/T4-final-acceptance-report.md`).

## Why this experiment (from the brief)

Part 5 section 13 of the tutorial (transcript 19:24–20:21) tests whether the component class applied in EXP-091 fills Item Description and Cost immediately, before any Save, in both the detail combobox (`FX_ItemCombobox`) and the grid column (`FX_ItemGridCol`). The tutorial's own runtime test used a class change plus an unload; this run uses no unload and no Save.

## Sources reviewed (T1, before any browser interaction)

- `AGENTS.md` (learning mode; FX_ prefix; evidence rules; browser rules).
- `docs/mongoose/transcripts/hello-world-pt5.md`: Section 13 (lines 277–288) and transcript lines 574–583 (19:24–20:21). Section 13 is a narrated, unverified test; the brief's scope governs.
- `recipes/components/apply-component-class.md` (status: observed, candidate for verified; runtime steps; pitfalls: discard with close then No; never press Save at runtime; unload only as explicitly authorized contingency).
- `recipes/session/session-expiry-and-stale-designer.md` (expiry symptoms; at-most-once top-level re-login; stale Designer Edit-menu error; never sign in inside the embedded frame).
- Outcome (operator) sections only: EXP-089 (lines 1025–1068), EXP-090 (lines 1216–1245), EXP-091 (lines 275–294). Other sections of these records were not read.

Relevant carried-forward facts (from the Outcome sections, not re-verified here):
- EXP-089: `FX_CustomerIDCombobox` and `FX_CustomerIDGridCol` runtime proof of immediate fill before Save; discard by close then No; the Web Client unload was not needed.
- EXP-090: validator `FX_Item` (In Collection; `FX_Items( PROPERTY(FX_Item) SETP(%1=FX_Description,%2=FX_Cost) )`; `mIsNotAValid`).
- EXP-091: component class `FX_Item` (validator `FX_Item(%1,%2)`, Validate Immediately True, list source on `FX_Items`); applied to `FX_ItemCombobox` and `FX_ItemGridCol` with Parameters `FX_ItmsDescription,FX_ItmsCost`; two Saves; read back after reopen. Runtime behavior was not established by EXP-091.

## Session and tab handling (T1)

- Tab list taken once before the first tab selection: tab 0 = Designer (`mode=designer`, FX_Orders); tab 1 = Mongoose Web Client inside the Infor OS portal page (`favoriteContext=FX_Orders`, embedded iframe).
- Tab 0 selected, snapshot taken; tab 1 selected, snapshot taken. No "Tab N not found" error.
- **No session expiry observed.** No "Session Expired" modal, no sign-in page. Session usable. **Re-login count: 0.**
- No Infor OS portal notification banner was visible in either snapshot or the Web Client screenshot; no dismissal was performed.
- The Web Client's Form menu contains "Sign Out" — not clicked.

## Gate 1 — Designer identity, User scope, clean state, Component Class (observed; AC-1 part)

Observed in the Designer tab (snapshot and screenshot `evidence/EXP-092/designer-gate.png`):
- Selected Form tab: `FX_Orders` (Designer, Component editing).
- Toolbar: Save disabled, Undo disabled, Regenerate Form disabled → clean.
- Status bar: `[ ScopeType: User / ScopeName: … ]` → User scope (the ScopeName value is the operator user and is not recorded here).
- Details > Components grid, Component Class column:
  - `FX_ItemCombobox` (ComboBox, object.FX_Item, Pane 1, container 20) → **FX_Item** (accessibility snapshot only; this row is below the visible grid area in the screenshot).
  - `FX_ItemGridCol` (GridColumn, object.FX_Item, FormCollectionGrid, column 5) → **FX_Item** (visible in the screenshot and in the snapshot).
- Properties for `FX_ItemGridCol`: Inheritance > Component Class = FX_Item; Component Class Parameters = `FX_ItmsDescription,FX_ItmsCost` (snapshot). Validators and List Source are blank on the component (inherited from the class), Validate Immediately = False (inherited), as in the EXP-089 recipe.
- Other Designer components include `FX_CustomerIDCombobox` (Component Class FX_CustomerID) and `FX_CusNameGridCol` etc.; not relevant to this test.

Gate result: **pass.** Neither component differs from the expected `FX_Item`; no blocker. No dialog was opened in the Designer; no Designer click was made.

## Runtime baseline (T1; read-only; AC-1 part)

Steps performed in the Web Client (tab 1):
1. Checked for an open FX_Orders runtime Form: none open (no FX_Orders tab; Save, New, Filter in Place and Refresh disabled). **No close was needed.**
2. Form > Open > Select Form. Dialog "Select Form" listed one match `FX_Orders` (filter text already present; not typed). OK clicked once. **Runtime open #1.**
3. The Form opened in the **add-mode placeholder** state: one unsaved row (Order Number 3, Count 1, Cost 0.00, Order Total 0.00), Save disabled (clean), "Order Number (Object 1 of 1)".
4. Filter in Place clicked once (FiP button became active). Every criterion field (Order Number, Customer ID, Customer Name, Address, Item, Item Description, Cost, Count, Order Total) was blank in the snapshot.
5. F4 pressed once (**F4 count = 1**). Two rows returned.
6. Order 2 verified by clicking its row-number cell (`2`) once; order 1 verified by clicking its row-number cell (`1`) once. **Row-number clicks = 2.** Final selection: order 1 ("Object 1 of 2" confirmed by a read-only find).
7. No drop-down was opened. No value was typed. No Save.

Observed values:

| Field | Order 1 (detail view and grid row) | Order 2 (detail view and grid row) | Expected (brief) | Result |
| --- | --- | --- | --- | --- |
| Order Number | 1 | 2 | — | — |
| Customer ID | FX001 | FX002 | FX001 / FX002 | match |
| Customer Name | Factory test one | Factory test two | Factory test one / two | match |
| Address | 1 Factory Street | 2 Factory Street | 1 / 2 Factory Street | match |
| Item | dumbbell | eggs | dumbbell / eggs | match |
| Item Description | 45 pound iron | cage free | 45 pound iron / cage free | match |
| Cost | 45.00 | 6.99 | 45.00 / 6.99 | match |
| Count | 2 | 1 | 2 / 1 | match |
| Order Total | 90.00 | 6.99 | 90.00 / 6.99 | match |

Source: accessibility snapshots after F4 (both grid rows and detail values for order 1) and the order-2 detail snapshot; screenshots `evidence/EXP-092/runtime-baseline-order1.png` (detail view order 1, "Customer ID (Object 1 of 2)") and `evidence/EXP-092/runtime-baseline-order2.png` (detail view order 2, "(Object 2 of 2)").

### Grid column visibility (observed; the grid layout was not changed)

- The grid pane is collapsed to a narrow strip at the left of the Form (about 90 px wide). In `runtime-baseline-order1.png` only the start of the first header ("Orde…", the Order Number column) and the row-number column (1, 2) are visible.
- The accessibility tree lists the grid's columns as: Order Number, Customer ID, Customer Name, Address, Item, Item Description, Cost, Count, Order Total, plus an unnamed picture column. **These are not visible on screen in the current layout.**
- **The order 1 grid row Item cell is not reachable without a layout change.** The grid check (splitter drag, at most once) will be needed in a later task.
- No grid column was resized, reordered or hidden.

### Layout note

No splitter drag has been performed (splitter drags = 0). The splitter handle is the vertical "⋮" marker at the boundary between the grid pane and the detail view (screenshot `runtime-baseline-order1.png`, near x≈393, y≈520).

## Action audit (cumulative; T1 only; exact counts)

Browser calls, total 22 (tool-level counts; read-only calls included):

| Category | Count | Detail |
| --- | --- | --- |
| Tab list | 1 | before the first tab selection |
| Tab select | 2 | index 0 (Designer), index 1 (Web Client) |
| Snapshot | 6 | 5 untargeted; 1 targeted to the Select Form dialog (ref f1e137) |
| Find | 3 | "Select Form" (no match), "Select Form" (1 match), "Object 1 of 2" (1 match) |
| Screenshot | 3 | designer-gate, runtime-baseline-order1, runtime-baseline-order2 |
| Click | 6 | Form menu (1); Open menu item (1); Select Form OK (1); Filter in Place (1); row-number cell 2 (1); row-number cell 1 (1) |
| Key press | 1 | F4 (1) |
| Type | 0 | — |
| Drag / splitter drag | 0 | — |

Mongoose lifecycle and mutation counts:

| Item | Count |
| --- | --- |
| Runtime opens (Select Form OK) | 1 |
| Runtime closes | 0 |
| F4 (runtime query) | 1 |
| Drop-down opens | 0 |
| Item choices (eggs) | 0 |
| Grid-cell Item edits | 0 |
| Runtime Saves | 0 |
| Designer Saves | 0 |
| Yes answers to any prompt | 0 |
| Prompts answered No | 0 |
| Designer dialogs / property edits | 0 |
| Designer clicks | 0 |
| Web Client Unload All Global Form Objects | 0 |
| Designer unloads | 0 |
| Checkout actions (check-in, undo check-out, etc.) | 0 |
| New / Delete / Add / Details / Find at runtime | 0 |
| Typed runtime values | 0 |
| Splitter drags | 0 |
| Grid column resize/reorder/hide | 0 |
| Re-logins (session-expiry procedure) | 0 |
| Browser evaluate / run-code / script calls | 0 |
| Row-number cell clicks (navigation only) | 2 |

## Worker-written file inventory (cumulative; T1)

Written by the worker (this task):
- `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md` (this record; created).
- `evidence/EXP-092/designer-gate.png` (screenshot).
- `evidence/EXP-092/runtime-baseline-order1.png` (screenshot).
- `evidence/EXP-092/runtime-baseline-order2.png` (screenshot).

Tool-side outputs (written automatically by the Playwright MCP tool, not authored by the worker; outside EXP-092 paths; listed for transparency only):
- `evidence/playwright/page-2026-10-14T15-44-51-164Z.yml` (snapshot after the Form menu click)
- `evidence/playwright/page-2026-10-14T15-44-56-644Z.yml` (snapshot after the Open click)
- `evidence/playwright/page-2026-10-14T15-45-03-657Z.yml` (snapshot after the Select Form OK click)
- `evidence/playwright/page-2026-10-14T15-45-09-781Z.yml` (snapshot after the Filter in Place click)
- `evidence/playwright/page-2026-10-14T15-45-28-219Z.yml` (snapshot after the row-number 2 click)
- `evidence/playwright/page-2026-10-14T15-45-35-294Z.yml` (snapshot after the row-number 1 click)
- Console log entries referenced by the tool (`evidence\playwright\console-2026-10-14T15-44-29-858Z.log`, `…-859Z.log`) were **not** opened or inspected (console inspection is out of scope).

No other files were written. No Git commands were run by the worker (no shell access).

## Evidence (decisive; what each proves and does not prove)

- `evidence/EXP-092/designer-gate.png` — Proves: Designer tab is `FX_Orders`, Save and Undo greyed (clean), status bar shows User scope, Components grid row `FX_ItemGridCol` shows Component Class `FX_Item`, Properties Inheritance shows `FX_Item`. Does not prove: the `FX_ItemCombobox` class (row below the visible area; accessibility snapshot only). Does not prove runtime behavior.
- `evidence/EXP-092/runtime-baseline-order1.png` — Proves: after F4 with blank criteria, the Form shows order 1 with FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00, status "Customer ID (Object 1 of 2)"; the grid is collapsed (only the Order Number header start visible). Does not prove: anything after this step; grid columns beyond Order Number are not on screen.
- `evidence/EXP-092/runtime-baseline-order2.png` — Proves: clicking row-number 2 shows order 2 FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99, status "(Object 2 of 2)". Does not prove: the state after order 1 is re-selected (confirmed only by a find, "Object 1 of 2").

## Acceptance checks (T1 status)

- **AC-1** (sources reviewed; session usable; Designer FX_Orders User scope and clean with FX_Item on both components; runtime baseline both orders; grid column visibility recorded; evidence): **met for T1.** Evidence: `designer-gate.png`, `runtime-baseline-order1.png`, `runtime-baseline-order2.png`. Limitation: FX_ItemCombobox class is accessibility-only.
- **AC-2** (detail choice; drop-down columns; Order Total; Discard 1): **not run** (next task).
- **AC-3** (grid check; splitter; Discard 2): **not run.**
- **AC-4** (no Designer change; no runtime Save; no Yes; no typed value; runtime closed clean at end): **so far met** (0 Designer changes, 0 Saves, 0 Yes, 0 typed values). Runtime Form still open at the end of T1 (clean; see final state).
- **AC-5** (final report): **pending** (final report only after the last task).

## Knowledge state (per finding)

- Designer gate (User scope; clean; FX_Item on FX_ItemGridCol and FX_ItemCombobox in the Components grid): **observed**.
- Runtime baseline values for both orders after one F4 and one Filter in Place on a freshly opened Form: **observed**.
- Grid column collapse and Item-cell unreachability in the current layout: **observed**.
- Reopen of the runtime Form (add-mode placeholder on Select Form open, then Filter in Place plus F4): **observed** (same session only).
- Runtime immediate-fill behavior of `FX_ItemCombobox` and `FX_ItemGridCol`: **unresolved** (not yet tested).

## Deviations and limits (T1)

- The Designer tab's `FX_ItemCombobox` class was verified only through the accessibility snapshot (not visible in the screenshot).
- The Select Form dialog arrived with its filter text already present (`FX_Orders`); it was not typed.
- The Form was opened in the add-mode placeholder state (an unsaved placeholder row was shown before Filter in Place). Save stayed disabled throughout; the placeholder was replaced by the F4 query.
- No console or network inspection was performed (the console error counts in the tool headers were not inspected).
- Same-session UI observations only. No cross-session durability or replay verification is claimed.

## Final state (end of T1)

- Designer tab (tab 0): `FX_Orders` open, clean, User scope; not changed.
- Web Client (tab 1): `FX_Orders` runtime Form open, clean (Save disabled), order 1 selected ("Object 1 of 2"), F4 query result shown, Filter in Place active. No dialog open. No drop-down open. No unsaved change. The Customer ID combobox holds focus with its text selected (no typing).
- The runtime Form is **not** closed at the end of T1; the next task (detail check) begins from this state after a fresh snapshot.

## T2 — detail-view Item choice (eggs, unsaved), Discard 1 with No, reopen verification (cycle 1)

Run: R-20261014-234410-teAm · task message aa68adde… was T1; this is task message 12763942-fac9-4348-9aef-a421b7ee3d3e · scope: detail check, Discard 1, reopen. Not run in T2: grid check, splitter drag, Discard 2, cache contingency (condition not met; see below).

### T2 start (fresh state, read-only)

- Tab list taken first (tab 0 Designer, tab 1 Web Client); tab 1 selected; fresh snapshot.
- Web Client: `FX_Orders` runtime open, order 1 selected ("Object 1 of 2"), Save disabled (clean), no dialog, no drop-down, no menu. Order 1 values identical to the T1 baseline (FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00).
- Designer tab not touched in T2.

### Detail check (order 1)

1. **Drop-down opened once** (the Item combobox's Open button). Visible columns: **Item** and **Item Description** only (Cost is not displayed). Visible rows: `dumbbell | 45 pound iron` (highlighted as the current value), `eggs | cage free`, `guitar | natural acoustic`. Screenshot `evidence/EXP-092/detail-item-dropdown-open.png` (shows the two columns and three rows; does not show a Cost column because none is displayed).
2. **Choice: eggs, once**, by clicking the eggs row of the list (no typing).
3. **Immediately after the choice, before any Save** (accessibility snapshot and screenshot `evidence/EXP-092/detail-after-eggs-choice.png`):
   - Item: **eggs**
   - Item Description: **cage free** (changed from 45 pound iron)
   - Cost: **6.99** (changed from 45.00)
   - Count: 2 (unchanged)
   - Order Total: **90.00** (observed; unchanged at this point; not recalculated; no expected value is asserted for it by the brief)
   - Save became enabled; the order 1 row marker shows an unsaved change (orange marker in the row-number column of the screenshot).
   - **Result: Item Description and Cost changed immediately in the detail view, before any Save.**
4. **Grid row 1 after the choice (accessibility tree only; NOT visually verified):** the tree lists `1 FX001 Factory test one 1 Factory Street eggs cage free 6.99 2 90.00`. The grid is clipped on screen (only the Order Number header start and row-number cells are visible), so Item, Item Description, Cost, Count and Order Total in the grid row are **not visibly established** in the screenshot; they are recorded here from the accessibility tree only. The unsaved marker on row 1 is visible.
5. **Cache contingency: condition NOT met** (both Item Description and Cost changed). The Web Client unload was **not** used, and no unload of any kind was performed in T2. The coordinator decides the next task.

### Discard 1 (close once, answer No once)

- Closed the FX_Orders Form once (Form tab close control). **Prompt appeared.** Screenshot before answering: `evidence/EXP-092/discard1-save-prompt.png` (dialog title "Infor Mongoose Application Development Framework - FX_Orders"; body text, exact: **"Do you want to save your changes to primary collection?"**; buttons Yes (carrying the focus ring; default focus), **No**, Cancel).
- **Answered No once** (clicked the No button; not Yes; Enter not pressed).
- **Prompt text (exact):** `Do you want to save your changes to primary collection?`
- **No other prompt appeared** after No. The Form closed; the snapshot shows no FX_Orders tab, the toolbar disabled, no dialog.

### Reopen verification (Form > Open > Select Form; blank criteria; F4 once; row-number navigation)

- Form menu > Open > Select Form: the dialog listed `FX_Orders` (only match; filter text already present; not typed); OK clicked once.
- The Form opened in the add-mode placeholder state (unsaved placeholder row Order Number 3, Count 1, Cost 0.00; Save disabled). Filter in Place clicked once; a fresh snapshot confirmed Filter in Place active and every criterion blank. **F4 pressed once.**
- Order 1 (screenshot `evidence/EXP-092/reopen1-order1.png`, status "Customer ID (Object 1 of 2)"): **FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / Count 2 / Order Total 90.00 — unchanged.** Grid row 1 tree shows the same values.
- Order 2 (row-number 2 clicked once; screenshot `evidence/EXP-092/reopen1-order2.png`, status "(Object 2 of 2)"): **FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / Count 1 / Order Total 6.99 — unchanged.**
- Order 1 re-selected by clicking its row-number cell once (find confirmed "Object 1 of 2").
- **AC-2 reopen result: both orders unchanged after Discard 1.**
- No Save was pressed at any time. Item was changed only through the drop-down, once.

### Layout and visibility (T2)

- No splitter drag, no column resize/reorder/hide. The grid layout after reopen is the same collapsed layout as T1 (Item cell not visually reachable).

### Action audit — T2 (exact counts)

| Category | T2 | Detail |
| --- | --- | --- |
| Tab list | 1 | before the first tab selection |
| Tab select | 1 | index 1 (Web Client) |
| Snapshot | 10 | 6 untargeted; 4 targeted (listbox `f1e321`, Select Form dialog `f1e400`, grid `f1e528`, form region `f1e96`) |
| Find | 6 | "natural acoustic" (detail drop-down rows), "save your changes" (prompt), "Open" (menu), "Select Form", "Object 2 of 2", "Object 1 of 2" (corrected in T4: the "natural acoustic" find was omitted from the T2 ledger) |
| Screenshot | 5 | detail-item-dropdown-open, detail-after-eggs-choice, discard1-save-prompt, reopen1-order1, reopen1-order2 |
| Click | 10 | Item Open button (1), eggs row (1), Form tab close (1), No (1), Form menu (1), Open item (1), Select Form OK (1), Filter in Place (1), row-number 2 (1), row-number 1 (1) |
| Key press | 1 | F4 (1) |
| Type | 0 | — |
| Drag | 0 | — |
| **Total** | **34** | corrected in T4 from 33 (see Find row) |

Mongoose lifecycle counts (T2): runtime opens 1 (Select Form OK); runtime closes 1 (Discard 1); F4 1; detail drop-down opens 1; eggs choices (detail) 1; grid drop-down opens 0; grid Item edits 0; splitter drags 0; prompts answered **No 1** (text above); prompts answered Yes 0; other prompts 0; runtime Saves 0; Designer Saves 0; Designer clicks 0; Web Client unloads 0; Designer unloads 0; checkout actions 0; re-logins 0; typed runtime values 0; New/Delete/Add/Details/Find 0; row-number clicks 2 (navigation only); evaluate/run-code 0.

### Action audit — cumulative (T1 + T2)

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Tab list | 1 | 1 | 2 |
| Tab select | 2 | 1 | 3 |
| Snapshot | 6 | 10 | 16 |
| Find | 3 | 6 | 9 |
| Screenshot | 3 | 5 | 8 |
| Click | 6 | 10 | 16 |
| Key press (F4) | 1 | 1 | 2 |
| Type | 0 | 0 | 0 |
| Drag | 0 | 0 | 0 |
| **Total browser calls** | **22** | **34** | **56** |
| Runtime opens | 1 | 1 | 2 |
| Runtime closes | 0 | 1 | 1 |
| F4 (runtime query) | 1 | 1 | 2 |
| Detail drop-down opens | 0 | 1 | 1 |
| Grid drop-down opens | 0 | 0 | 0 |
| Eggs choices (detail) | 0 | 1 | 1 |
| Eggs choices (grid) | 0 | 0 | 0 |
| Splitter drags | 0 | 0 | 0 |
| Prompts answered No | 0 | 1 | 1 |
| Prompts answered Yes | 0 | 0 | 0 |
| Runtime Saves | 0 | 0 | 0 |
| Designer Saves | 0 | 0 | 0 |
| Designer clicks / dialogs | 0 | 0 | 0 |
| Web Client unloads | 0 | 0 | 0 |
| Designer unloads | 0 | 0 | 0 |
| Checkout actions | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 |
| Row-number clicks | 2 | 2 | 4 |
| Typed runtime values | 0 | 0 | 0 |

### Worker-written file inventory — cumulative (T1 + T2)

Written or updated by the worker:
- `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md` (created in T1; updated in T2: status line, this T2 section, superseded next-action list)
- `evidence/EXP-092/designer-gate.png` (T1)
- `evidence/EXP-092/runtime-baseline-order1.png` (T1)
- `evidence/EXP-092/runtime-baseline-order2.png` (T1)
- `evidence/EXP-092/detail-item-dropdown-open.png` (T2)
- `evidence/EXP-092/detail-after-eggs-choice.png` (T2)
- `evidence/EXP-092/discard1-save-prompt.png` (T2)
- `evidence/EXP-092/reopen1-order1.png` (T2)
- `evidence/EXP-092/reopen1-order2.png` (T2)

Tool-side snapshot files (created automatically by the Playwright tool after clicks; not authored by the worker; outside the EXP-092 paths; listed for transparency): `evidence/playwright/page-2026-10-14T15-48-18-729Z.yml`, `…15-48-29-077Z.yml`, `…15-48-38-659Z.yml`, `…15-48-45-561Z.yml`, `…15-48-49-848Z.yml`, `…15-48-52-828Z.yml`, `…15-48-59-590Z.yml`, `…15-49-03-185Z.yml`, `…15-49-14-093Z.yml`, `…15-49-23-531Z.yml`. Console-log notices (`evidence/playwright/console-2026-10-14T15-48-13-962Z.log`, `…963Z.log`) were announced by the tool; they were not opened.

### Acceptance checks (T2 status)

- **AC-1**: met (T1); re-confirmed at T2 start (Designer and runtime state unchanged).
- **AC-2**: **met.** Detail choice before any Save: Item Description cage free and Cost 6.99 in the detail view (screenshot `detail-after-eggs-choice.png`). Drop-down columns Item and Item Description, rows dumbbell/eggs/guitar recorded (`detail-item-dropdown-open.png`). Order Total 90.00 recorded, unchanged. Contingency not used (condition not met). Discard 1: one close, one No, prompt text recorded (`discard1-save-prompt.png`); reopen shows both orders unchanged (`reopen1-order1.png`, `reopen1-order2.png`).
- **AC-3**: **not run** (grid check, splitter drag, Discard 2 are for the next bounded task).
- **AC-4**: so far met: no Designer change, no runtime Save, no Yes answer, no typed value, no grid edit. The runtime Form is **open and clean** at the end of T2 (AC-4's "closed clean" check is pending the final close).
- **AC-5**: pending (final report after the last task).

### Evidence (decisive; what each proves and does not prove)

- `evidence/EXP-092/detail-item-dropdown-open.png` — Proves: the detail Item drop-down open on order 1 with two visible columns (Item, Item Description) and three rows (dumbbell, eggs, guitar); dumbbell highlighted. Does not prove: any Cost column (none is shown); the choice itself.
- `evidence/EXP-092/detail-after-eggs-choice.png` — Proves: after the eggs click and before any Save, the detail shows Item eggs, Item Description cage free, Cost 6.99, Count 2, Order Total 90.00, with the unsaved-change marker on order 1 and Save enabled. Does not prove: the grid row values (clipped in this layout); durability; any recalculation of Order Total.
- `evidence/EXP-092/discard1-save-prompt.png` — Proves: the single save prompt text "Do you want to save your changes to primary collection?" with Yes (focused), No and Cancel. Does not prove: the answer's effect beyond the reopen check.
- `evidence/EXP-092/reopen1-order1.png` — Proves: after close, reopen, F4, order 1 is FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00 ("Customer ID (Object 1 of 2)"). Does not prove: grid columns beyond Order Number (clipped).
- `evidence/EXP-092/reopen1-order2.png` — Proves: order 2 is FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99 ("(Object 2 of 2)"). Does not prove: anything about order 1 after reselection (order 1 reselection confirmed by find only).

### Knowledge state (T2)

- Detail-view immediate fill of Item Description and Cost on FX_ItemCombobox after one choice, before Save, in one session: **observed** (single same-session run; not replayed).
- Drop-down columns Item and Item Description (Cost hidden) and rows: **observed**.
- Order Total unchanged (90.00) at the unsaved observation: **observed** (not recalculated at that point; no conclusion drawn).
- Grid row values after the detail choice (eggs / cage free / 6.99): **observed in accessibility tree only; visually unverified** (clipped).
- Discard by close and No, with the prompt text, and reopen showing both orders unchanged: **observed** (same session only; no cross-session durability claimed).
- Cache contingency: **not used** (condition not met).

### Final state (end of T2)

- Web Client (tab 1): `FX_Orders` runtime open, **clean** (no edit since the reopen), order 1 selected ("Object 1 of 2"), F4 result shown, Filter in Place active. No dialog, drop-down or menu open. The Customer ID combobox holds focus with its text selected (no typing).
- Designer (tab 0): `FX_Orders` open, clean, User scope; not changed in T2.

### Next permitted action (after T2; superseded by T3)

- The cache contingency is not triggered. The grid check (AC-3) and Discard 2 are the remaining steps. The order 1 grid Item cell is not visually reachable in the current layout, so the one permitted splitter drag is needed; the coordinator should authorize it as a separate bounded task. Begin that task with a tab list, a fresh snapshot of the Web Client, and confirmation that order 1 is selected and the Form is clean.

## T3 — grid-row Item choice (eggs, unsaved), splitter drag, Discard 2 with No, reopen verification, final clean close (cycle 2)

Run: R-20261014-234410-teAm · task message 11eef828-1547-4fa6-836e-cf6f448f1b71 · scope: grid check, Discard 2, reopen, final clean close. No Designer access, no unload, no Save, no Yes.

### T3 start (fresh state, read-only)

- Tab list taken first (tab 0 Designer, tab 1 Web Client); tab 1 selected; fresh untargeted snapshot.
- Web Client: `FX_Orders` runtime open, clean (Save disabled), order 1 selected ("Object 1 of 2"), values FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00. No prompt, no drop-down, no menu. Grid collapsed (layout as in T1/T2).

### Splitter (at most one drag)

- **Before** (`evidence/EXP-092/splitter-before.png`): the grid pane is a narrow strip about 88 px wide (x≈300–388). Only the Order Number header start and row numbers are visible. The splitter handle (vertical dots) is at about x=393, y=520.
- **Drag: one**, from (393, 520) to (900, 520), using mouse down/move/up at coordinates. The handle has no accessibility ref; coordinates were the only available target (recorded as a last-resort control). No other drag was made.
- **After** (`evidence/EXP-092/splitter-after.png`): grid widened to about x=300–895; handle now at about x=900. The detail view moved right (labels now at about x≈1000).
- **Visible grid columns after the drag (screenshot):** Order Number ("Order N…"), Customer ID ("* Custo…"), Customer Name ("Custom…", truncated), Address ("Address", truncated values), Item ("* Item"), Item Description ("Item De…"), Cost. **Count and Order Total are not visible** (off-screen right; a horizontal scrollbar sits at the bottom of the grid). The order 1 Item cell (dumbbell) is visible at about x≈700, y≈190.
- Column resize, reorder or hide: **none**.

### Grid check (order 1 Item cell, eggs once)

1. Clicked the order 1 Item cell once (dumbbell). The cell became an active combobox editor (accessibility: combobox "dumbbell" with an Open button).
2. **Drop-down opened once** (the cell's Open button). Visible columns: **Item** and **Item Description** (Cost not displayed). Visible rows: `dumbbell | 45 pound iron` (highlighted as current), `eggs | cage free`, `guitar | natural acoustic`. Screenshot `evidence/EXP-092/grid-item-dropdown-open.png`.
3. **Choice: eggs, once**, by clicking the eggs option (no typing).
4. **Before any Save** (screenshot `evidence/EXP-092/grid-after-eggs-choice.png`; accessibility snapshot):

| Field | Visually rendered on screen? | Value | Source |
| --- | --- | --- | --- |
| Grid row 1 Item | Yes (editor cell shows "eggs") | eggs | screenshot + editor combobox |
| Grid row 1 Item Description | Yes | **cage free** | screenshot |
| Grid row 1 Cost | Yes | **6.99** | screenshot |
| Grid row 1 Count | **No** (off-screen) | 2 | accessibility tree only |
| Grid row 1 Order Total | **No** (off-screen) | 90.00 | accessibility tree only |
| Detail Item | Yes | eggs | screenshot + snapshot |
| Detail Item Description | Yes | cage free | screenshot + snapshot |
| Detail Cost | Yes | 6.99 | screenshot + snapshot |
| Detail Count | Yes | 2 | screenshot + snapshot |
| Detail Order Total | Yes | 90.00 | screenshot + snapshot |

   - Row 2 (not edited) remained FX002 / eggs / cage free / 6.99 / 1 / 6.99.
   - The unsaved-change marker shows on order 1 (orange marker in the row-number column) and Save is enabled.
   - **Result: Item Description and Cost in the order 1 grid row changed to cage free and 6.99 immediately, before any Save.** Order Total is recorded as observed (90.00, unchanged; not recalculated; no conclusion drawn).
   - The Item cell editor remained in edit state after the choice (no list open); the close below discarded it.

### Discard 2 (close once, answer No once)

- Closed the FX_Orders Form once (Form tab close control). **Prompt appeared (only one).** Screenshot before answering: `evidence/EXP-092/discard2-save-prompt.png`. Exact text: **"Do you want to save your changes to primary collection?"** (buttons Yes (focus ring), No, Cancel).
- **Answered No once** (not Yes; Enter not pressed).
- **Other prompts: none** (no layout or grid prompt appeared). The Form closed; toolbar disabled; no dialog.

### Reopen verification (after Discard 2)

- Form menu > Open > Select Form; dialog listed `FX_Orders` (only match; filter text pre-filled; not typed); OK once. The Form opened in the add-mode placeholder (Save disabled). Filter in Place clicked once (criteria blank). **F4 once.**
- Order 1 (`evidence/EXP-092/reopen2-order1.png`, status "Customer ID (Object 1 of 2)"): **FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / Count 2 / Order Total 90.00 — unchanged.**
- Order 2 (row-number 2 clicked once; `evidence/EXP-092/reopen2-order2.png`, status "(Object 2 of 2)"): **FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / Count 1 / Order Total 6.99 — unchanged.**
- **Widened grid layout did NOT persist:** after the reopen the grid is back to the narrow strip (`reopen2-order1.png` and `reopen2-order2.png` show the collapsed grid with only the Order Number header start and row numbers visible).
- Order 1 re-selected by its row-number cell once ("Object 1 of 2" confirmed by find).
- **AC-3 reopen result: both orders unchanged after Discard 2.**

### Final clean close

- Closed the FX_Orders Form once (clean; Save disabled; no prompt). Find for "save your changes" returned no match; snapshot shows no FX_Orders tab, toolbar disabled, no dialog, no menu.
- **Runtime Form is closed. No prompt, menu or unsaved change is open.**

### Action audit — T3 (exact counts)

| Category | T3 | Detail |
| --- | --- | --- |
| Tab list | 1 | before the first tab selection |
| Tab select | 1 | index 1 (Web Client) |
| Snapshot | 13 | 6 untargeted; 7 targeted (grid f1e177 ×2, listbox f1e331, dialog f1e411, form f1e470, grid f1e473, tablist f1e465) |
| Find | 6 | "natural acoustic", "save your changes" ×2, "Open", "Select Form", "Object 1 of 2" |
| Screenshot | 7 | splitter-before, splitter-after, grid-item-dropdown-open, grid-after-eggs-choice, discard2-save-prompt, reopen2-order1, reopen2-order2 |
| Click | 12 | grid Item cell (1), grid Item Open button (1), eggs option (1), Form tab close (1), No (1), Form menu (1), Open item (1), Select Form OK (1), Filter in Place (1), row-number 2 (1), row-number 1 (1), final Form tab close (1) |
| Splitter drag | 1 | (393,520) → (900,520) |
| Key press | 1 | F4 (1) |
| Type | 0 | — |
| **Total** | **42** | |

Mongoose lifecycle counts (T3): runtime opens 1 (Select Form OK after Discard 2); runtime closes 2 (Discard 2; final clean close); F4 1; grid drop-down opens 1; grid eggs choices 1; detail drop-down opens 0; detail eggs choices 0; splitter drags 1; prompts answered **No 1** (`Do you want to save your changes to primary collection?`); other prompts 0; Yes answers 0; runtime Saves 0; Designer Saves 0; Designer clicks/dialogs 0; Web Client unloads 0; Designer unloads 0; checkout actions 0; re-logins 0; typed values 0; New/Delete/Add/Details/Find 0; row-number clicks 2; grid-cell click 1 (the Item cell that was edited); evaluate/run-code 0.

### Action audit — cumulative (T1 + T2 + T3)

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 2 | 1 | 1 | 4 |
| Snapshot | 6 | 10 | 13 | 29 |
| Find | 3 | 6 | 6 | 15 |
| Screenshot | 3 | 5 | 7 | 15 |
| Click | 6 | 10 | 12 | 28 |
| Key press (F4) | 1 | 1 | 1 | 3 |
| Splitter drag | 0 | 0 | 1 | 1 |
| Type | 0 | 0 | 0 | 0 |
| **Total browser calls** | **22** | **34** | **42** | **98** |
| Runtime opens | 1 | 1 | 1 | 3 |
| Runtime closes | 0 | 1 | 2 | 3 |
| F4 (runtime query) | 1 | 1 | 1 | 3 |
| Detail drop-down opens | 0 | 1 | 0 | 1 |
| Grid drop-down opens | 0 | 0 | 1 | 1 |
| Eggs choices (detail) | 0 | 1 | 0 | 1 |
| Eggs choices (grid) | 0 | 0 | 1 | 1 |
| Splitter drags | 0 | 0 | 1 | 1 |
| Prompts answered No | 0 | 1 | 1 | 2 |
| Prompts answered Yes | 0 | 0 | 0 | 0 |
| Runtime Saves | 0 | 0 | 0 | 0 |
| Designer Saves | 0 | 0 | 0 | 0 |
| Designer clicks / dialogs | 0 | 0 | 0 | 0 |
| Web Client unloads | 0 | 0 | 0 | 0 |
| Designer unloads | 0 | 0 | 0 | 0 |
| Checkout actions | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |
| Row-number clicks | 2 | 2 | 2 | 6 |
| Typed runtime values | 0 | 0 | 0 | 0 |

### Worker-written file inventory — cumulative (T1 + T2 + T3)

Written or updated by the worker:
- `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md` (created in T1; updated in T2 and T3)
- `evidence/EXP-092/designer-gate.png` (T1)
- `evidence/EXP-092/runtime-baseline-order1.png`, `runtime-baseline-order2.png` (T1)
- `evidence/EXP-092/detail-item-dropdown-open.png`, `detail-after-eggs-choice.png`, `discard1-save-prompt.png`, `reopen1-order1.png`, `reopen1-order2.png` (T2)
- `evidence/EXP-092/splitter-before.png`, `splitter-after.png`, `grid-item-dropdown-open.png`, `grid-after-eggs-choice.png`, `discard2-save-prompt.png`, `reopen2-order1.png`, `reopen2-order2.png` (T3)

Tool-side files written automatically by the Playwright MCP after actions (not authored by the worker; outside the EXP-092 paths; listed for transparency): `evidence/playwright/` snapshot files for T3 — `page-2026-10-14T15-52-11-628Z.yml`, `…15-52-18-760Z.yml`, `…15-52-22-850Z.yml`, `…15-52-30-629Z.yml`, `…15-52-39-649Z.yml`, `…15-52-45-533Z.yml`, `…15-52-48-620Z.yml`, `…15-52-51-438Z.yml`, `…15-52-55-944Z.yml`, `…15-52-59-545Z.yml`, `…15-53-10-354Z.yml`, `…15-53-16-786Z.yml`, `…15-53-22-891Z.yml`; and console-log notice `evidence/playwright/console-2026-10-14T15-52-03-131Z.log` (announced by the tool at both the T3 tab list and tab select; not opened). Corrected in T4: the earlier reference to a second file `…15-52-03-963Z.log` was wrong; no such T3 file exists. The T1 and T2 tool-side files are listed in their sections.

No other files were written. No Git commands were run by the worker.

### Acceptance checks (final)

- **AC-1**: met (T1; re-confirmed at T2 and T3 starts).
- **AC-2**: met (T2): detail choice; drop-down columns and rows; Order Total 90.00 recorded; Discard 1 with one No (prompt text recorded); reopen unchanged. Contingency: **not used** (condition not met).
- **AC-3**: **met.** One splitter drag, layout before/after recorded (`splitter-before.png`, `splitter-after.png`); eggs chosen once in the order 1 grid Item cell; grid row visibly shows cage free and 6.99 before Save (`grid-after-eggs-choice.png`); drop-down columns and rows recorded (`grid-item-dropdown-open.png`). Discard 2 with one No (prompt text recorded, `discard2-save-prompt.png`); reopen shows both orders unchanged (`reopen2-order1.png`, `reopen2-order2.png`); widened layout **did not persist**.
- **AC-4**: met. No Designer change or Designer access in T3; no runtime Save; no Yes answer; no typed runtime value; the only grid edit was the order 1 Item cell; no column resize, reorder or hide; runtime Form closed clean at the end (no prompt).
- **AC-5**: this section and the cumulative audit above.

### Evidence (decisive; what each proves and does not prove)

- `evidence/EXP-092/splitter-before.png` — Proves: the collapsed grid (about 88 px) before the drag; handle at about x=393. Does not prove: anything about the column set after the drag.
- `evidence/EXP-092/splitter-after.png` — Proves: after one drag, the grid shows Order Number, Customer ID, Customer Name, Address, Item, Item Description and Cost; order 1 Item = dumbbell visible at about x≈700. Does not prove: Count or Order Total (off-screen).
- `evidence/EXP-092/grid-item-dropdown-open.png` — Proves: the grid Item drop-down open for order 1 with columns Item and Item Description and rows dumbbell, eggs, guitar; dumbbell highlighted. Does not prove: any Cost column (not displayed); the choice itself.
- `evidence/EXP-092/grid-after-eggs-choice.png` — Proves: before Save, order 1 grid row shows eggs (editor), cage free, 6.99; detail shows eggs, cage free, 6.99, Count 2, Order Total 90.00; unsaved marker and Save enabled. Does not prove: grid Count or Order Total on screen (off-screen; accessibility only); durability.
- `evidence/EXP-092/discard2-save-prompt.png` — Proves: the single save prompt with the exact text; Yes focused; No and Cancel present. Does not prove: the answer's effect (shown by the reopen screenshots).
- `evidence/EXP-092/reopen2-order1.png` — Proves: after close, No, reopen, F4, order 1 is FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00 ("Customer ID (Object 1 of 2)"); the grid is collapsed again (layout did not persist). Does not prove: grid columns beyond Order Number.
- `evidence/EXP-092/reopen2-order2.png` — Proves: order 2 is FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99 ("(Object 2 of 2)"). Does not prove: order 1 after reselection (find only).

### Knowledge state (T3)

- Grid-row immediate fill of Item Description and Cost (cage free, 6.99) after one grid choice, before Save, in one session: **observed** (single same-session run; not replayed; visual for Item Description and Cost).
- Grid-row Count and Order Total: **observed in accessibility tree only** (off-screen; not visually verified).
- Grid drop-down columns Item and Item Description (Cost hidden) and rows: **observed**.
- Splitter drag widens the grid and makes the Item column reachable: **observed** (one drag; coordinate-based).
- Discard by close and No, with the prompt text, and reopen showing both orders unchanged: **observed** (same session).
- Widened grid layout not persisting after close/reopen: **observed** (same session).
- Order Total unchanged (90.00) at the unsaved observations in both checks: **observed**; no recalculation claim.
- Cache contingency: **not triggered** in any task.
- Cross-session durability or replay of any check: **not claimed** (unresolved).
- The `apply-component-class.md` recipe status remains "candidate for verified"; this run adds a same-session runtime observation for the detail and grid paths, but a recipe promotion needs a separate verification decision by the operator.

### Final state (end of T3)

- Web Client (tab 1): `FX_Orders` runtime Form **closed**; no FX_Orders tab; toolbar buttons disabled; no dialog, drop-down or menu open; no unsaved change; no typed value.
- Designer (tab 0): not accessed in T3; `FX_Orders` remains open and clean as observed at T1.
- Session: no expiry or sign-in in T1–T3; re-login count 0.

### Open items / limits (final)

- Splitter drag was coordinate-based (no accessibility ref for the handle).
- Grid Count and Order Total were not visible on screen; they were read from the accessibility tree.
- The layout did not persist after reopen; the coordinator should decide whether any later task needs it.
- Results are same-session UI observations only.

## T4 — documentation-only final audit (cycle 3; ZERO browser calls; ZERO Mongoose changes)

Sources: this record (T1–T3 ledgers); controller audits `evidence/EXP-092/harness-audit-T1.md` (39 rows), `harness-audit-T2.md` (42 rows), `harness-audit-T3.md` (52 rows); read-only Glob of `evidence/EXP-092/` and `evidence/playwright/`. No browser tool was called in T4.

### Reconciled browser-call counts (controller audit is authoritative)

| Operation | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Tab list | 1 | 1 | 1 | 3 |
| Tab select | 2 | 1 | 1 | 4 |
| Snapshot | 6 | 10 | 13 | 29 |
| Find | 3 | 6 | 6 | 15 |
| Screenshot | 3 | 5 | 7 | 15 |
| Click | 6 | 10 | 12 | 28 |
| Key press (F4) | 1 | 1 | 1 | 3 |
| Splitter drag | 0 | 0 | 1 | 1 |
| Type | 0 | 0 | 0 | 0 |
| **Total browser calls** | **22** | **34** | **42** | **98** |

Corrections made in T4 to the earlier ledgers: T2 Find 5 → 6 (the "natural acoustic" find, controller T2 row 7, had been omitted); T2 total 33 → 34; cumulative Find 14 → 15; cumulative total 97 → 98. The T2 section's and T3 section's cumulative tables are corrected to match.

Cross-check against the controller header tallies: "actions" = clicks + F4 + tab selects + drag and "reads" = snapshots + screenshots + finds + tab lists. T1: 9 actions (6+1+2) and 13 reads (6+3+3+1). T2: 12 actions (10+1+1) and 22 reads (10+5+6+1). T3: 15 actions (12+1+1+1) and 27 reads (13+7+6+1). All consistent with the table above.

Non-browser tool calls (controller audit, reported for completeness; not browser calls): T1 17 (Glob 2, Grep 2, Read 11, Write 1 for this record, Edit 1); T2 8 (Read 6, Edit 2); T3 10 (Read 7, Edit 3). Total 35 (Glob 2, Grep 2, Read 24, Write 1, Edit 6). Reads include the EXP-092 screenshots, one Playwright snapshot file, and the source documents. Edits and the Write touched only this record.

### Reconciled lifecycle totals

| Item | Count | Controller row(s) / source |
| --- | --- | --- |
| Runtime opens (Select Form OK) | 3 | T1 row 25; T2 row 24; T3 row 32 |
| Runtime closes (Form tab close) | 3 | T2 row 13 (Discard 1); T3 row 21 (Discard 2); T3 row 47 (final clean close) |
| F4 (runtime query) | 3 | T1 row 29; T2 row 28; T3 row 36 |
| Detail drop-down opens | 1 | T2 row 4 |
| Grid drop-down opens | 1 | T3 row 12 |
| Eggs choices (detail) | 1 | T2 row 9 |
| Eggs choices (grid) | 1 | T3 row 17 |
| Splitter drags | 1 | T3 row 6 |
| Prompts answered No | 2 | T2 row 17; T3 row 25 |
| Prompts answered Yes | 0 | no Yes-element click in any task |
| Runtime Saves | 0 | no Save-element click in any task |
| Designer Saves | 0 | no Designer click in any task |
| Web Client unloads | 0 | no Unload element in any task |
| Designer unloads | 0 | none |
| Checkout actions | 0 | none |
| Typed runtime values | 0 | no `browser_type` call in any task |
| Re-logins | 0 | no sign-in or session-expiry action; no expiry page recorded |
| Row-number clicks (navigation only) | 6 | T1 rows 33, 36; T2 rows 32, 37; T3 rows 40, 44 |
| Grid cell edits | 1 | the order 1 Item cell only (T3 rows 10, 12, 17) |

Prompt texts (both discard cycles): the exact text is **"Do you want to save your changes to primary collection?"**. Discard 1 (T2): screenshot `evidence/EXP-092/discard1-save-prompt.png`, answered No. Discard 2 (T3): screenshot `evidence/EXP-092/discard2-save-prompt.png`, answered No. Neither cycle showed any other prompt. Both screenshots were viewed in their task and show the text with Yes focused and No and Cancel present.

### Worker-written file inventory (reconciled)

Worker-authored, EXP-092 paths (17 files):
- `experiments/EXP-092-hello-world-part-5-section-13-fx-item-runtime-test.md` (created T1; updated T2, T3, T4).
- `evidence/EXP-092/T4-final-acceptance-report.md` (created T4).
- 15 screenshots: `designer-gate.png`, `runtime-baseline-order1.png`, `runtime-baseline-order2.png`, `detail-item-dropdown-open.png`, `detail-after-eggs-choice.png`, `discard1-save-prompt.png`, `reopen1-order1.png`, `reopen1-order2.png`, `splitter-before.png`, `splitter-after.png`, `grid-item-dropdown-open.png`, `grid-after-eggs-choice.png`, `discard2-save-prompt.png`, `reopen2-order1.png`, `reopen2-order2.png`.

Controller-generated, in `evidence/EXP-092/` (not worker-authored; not written by the worker): `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`.

Playwright MCP tool-side files (generated automatically; not worker-authored; outside the EXP-092 paths; Glob confirmed each exists): 29 page snapshots in `evidence/playwright/` (T1: `page-2026-10-14T15-44-51-164Z`, `…15-44-56-644Z`, `…15-45-03-657Z`, `…15-45-09-781Z`, `…15-45-28-219Z`, `…15-45-35-294Z`; T2: `…15-48-18-729Z`, `…15-48-29-077Z`, `…15-48-38-659Z`, `…15-48-45-561Z`, `…15-48-49-848Z`, `…15-48-52-828Z`, `…15-48-59-590Z`, `…15-49-03-185Z`, `…15-49-14-093Z`, `…15-49-23-531Z`; T3: `…15-52-11-628Z`, `…15-52-18-760Z`, `…15-52-22-850Z`, `…15-52-30-629Z`, `…15-52-39-649Z`, `…15-52-45-533Z`, `…15-52-48-620Z`, `…15-52-51-438Z`, `…15-52-55-944Z`, `…15-52-59-545Z`, `…15-53-10-354Z`, `…15-53-16-786Z`, `…15-53-22-891Z`), and 5 console files (T1 `console-…15-44-29-858Z.log`, `…859Z.log`; T2 `console-…15-48-13-962Z.log`, `…963Z.log`; T3 `console-…15-52-03-131Z.log`). Earlier console files from 15:07 to 15:25 belong to other runs and are excluded.

No other files were written by the worker. No Git commands were run (no shell access). Repository confinement remains for operator git review.

### Final state (reconciled; documented, not re-inspected in T4)

- Web Client: `FX_Orders` runtime Form **closed** at the end of T3 (controller T3 row 47; post-close find "save your changes" no match; snapshot shows no FX_Orders tab, toolbar disabled, no dialog). Closed clean; no prompt, menu or unsaved change open.
- Designer: `FX_Orders` clean and User scope as last observed at T1. The controller audit shows no Designer click or Designer dialog in T2 or T3; in T1 the Designer tab was only snapshotted and screenshotted. Not re-inspected in T4 (zero browser calls).

### Evidence review (AC-1 to AC-4) and limitations

- **AC-1**: `designer-gate.png` shows the User scope status bar, Save and Undo disabled, and `FX_ItemGridCol` Component Class `FX_Item` (in the Components grid and in Properties). `FX_ItemCombobox` Component Class `FX_Item` was established from the accessibility snapshot only; its row is below the visible grid area in the screenshot. `runtime-baseline-order1.png` and `runtime-baseline-order2.png` show both orders' values; the grid is collapsed and only the Order Number header start is visible. Supported, with the FX_ItemCombobox limitation.
- **AC-2**: `detail-item-dropdown-open.png` shows the drop-down columns Item and Item Description (Cost not displayed) and rows dumbbell, eggs, guitar. `detail-after-eggs-choice.png` shows Item Description cage free, Cost 6.99, Count 2, Order Total 90.00 with Save enabled, before any Save. `discard1-save-prompt.png` shows the exact prompt. `reopen1-order1.png` and `reopen1-order2.png` show both orders unchanged. Limitations: Order Total is observed only (90.00, not recalculated); the effect of No is shown by the reopen, not by the prompt. Supported.
- **AC-3**: `splitter-before.png` and `splitter-after.png` record the layout before and after one coordinate-based drag. `grid-item-dropdown-open.png` shows the grid drop-down columns and rows. `grid-after-eggs-choice.png` visibly shows cage free and 6.99 in the order 1 grid row before Save. Limitation: grid Count (2) and Order Total (90.00) are off-screen and were read from the accessibility tree only. `discard2-save-prompt.png` shows the exact prompt. `reopen2-order1.png` and `reopen2-order2.png` show both orders unchanged, and the widened layout did not persist. Supported, with the limitations above.
- **AC-4**: the controller audits show zero `browser_type` calls, zero Save, Yes, Designer, or unload clicks, one splitter drag, one grid edit (the order 1 Item cell), and no column resize, reorder or hide. The final close (T3 row 47) was followed by a find and a snapshot showing no open Form. Supported. Limitation: the Designer state was not re-inspected in T4.
- **AC-5**: this section and the T4 report `evidence/EXP-092/T4-final-acceptance-report.md`.

Limitations carried forward (all tasks): same-session UI observations only; no replay verification; no cross-session durability or database durability claim; the splitter drag was coordinate-based because the handle has no accessibility ref; grid Count and Order Total were not visually displayed.

## Next permitted action (T1 list; superseded by T2)

1. Fresh snapshot of the Web Client tab; confirm FX_Orders runtime, order 1 selected, values as above, no dialog open, Save disabled.
2. Detail check: open the detail-view Item drop-down once on order 1, record its columns and rows with a screenshot, choose eggs once (no typing); record Item, Item Description, Cost, Count, Order Total without Save.
3. Discard 1 (close once; answer No once; record the prompt text), reopen, verify both orders.
   - Cache contingency only if neither Item Description nor Cost changed after the detail choice: after Discard 1, close the clean Form, one Web Client Form > Definition > Unload All Global Form Objects, reopen, one more detail choice, record, discard as in Discard 1; then **stop for the coordinator** (no grid check).
4. Grid check (unless the contingency stopped the run), with the single allowed splitter drag if the order 1 grid Item cell is still unreachable; then Discard 2 and reopen verification, as the brief specifies.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 5 section 13 is complete: on FX_Orders, choosing an Item fills Item Description and Cost immediately, before Save, in both the detail combobox (FX_ItemCombobox) and the grid column (FX_ItemGridCol). **Hello World Part 5 is finished.** The operator decided acceptance.

- No objects were created or changed. Both runtime changes were discarded, and no Designer change was made.
- **Run R-20261014-234410-teAm:**
  - T1-T3 did all browser work with no flagged tools and no errors.
  - T4 (documentation-only count reconciliation, requested by the coordinator) completed and recommended ACCEPTED AS OBSERVED.
  - The harness then classified T4 as `worker_blocked:permission` because of one denied Glob into `C:\Users\juara\AppData\Local\Temp`, which is outside the repo and blocked by the read-root setting. This is the same harmless case as EXP-090, and the worker did not work around it.
  - The operator accepted on the assistant's review and ended the run with `stop`, so the coordinator's final review never ran.
- Screenshots viewed by the operator assistant:
  - `detail-after-eggs-choice.png`: order 1 with Item `eggs`, Item Description `cage free` and Cost `6.99`; Count 2 and Order Total `90.00`, not recalculated; unsaved-row marker on row 1.
  - `grid-after-eggs-choice.png`: after one splitter drag, the order 1 grid row shows `eggs`, `cage free`, `6.99`, and the detail view matches.
- Both close prompts read "Do you want to save your changes to primary collection?" and were answered **No**. No grid or splitter layout prompt appeared. Each reopen showed both orders unchanged (order 1 dumbbell, 45 pound iron, 45.00, 90.00), and the widened grid layout did not persist.
- Counts:
  - runtime opens 3, closes 3, F4 presses 3;
  - drop-down opens 2 (detail 1, grid 1), eggs choices 2, grid cell edits 1, splitter drags 1;
  - No answers 2, Yes answers 0, runtime Saves 0, Designer Saves 0;
  - unloads 0 (the contingency was not needed), typed values 0, re-logins 0, checkout actions 0.
- Findings (observed):
  1. The FX_Item class with forwarded parameters fills both targets immediately in the detail view and in the grid. No unload was needed after the EXP-091 Designer Save and a runtime close/reopen. This differs from the tutorial, which unloads first.
  2. Order Total (a derived property) did not recalculate before Save.
  3. The drop-down shows Item and Item Description only. Cost is fetched but hidden, consistent with `DISPLAY(1,2)`.
- Deviations and limits:
  - The splitter drag was coordinate-based because the handle had no accessibility reference.
  - The FX_ItemCombobox Designer gate value and the grid Count/Total come from the accessibility tree only.
  - This is same-session UI evidence only.
- Harness gap, second occurrence: an out-of-repo Glob denial on a completed task should be classified as `completed_with_denials`.
- Confinement (git status): only `evidence/EXP-092/` and this record were written by the run.
- Next: Hello World Part 6 (chart, form script attached to an event, images, theme).
