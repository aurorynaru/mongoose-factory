# EXP-086 — Hello World Part 5 Section 5 Step 8: FX_Orders combobox right-click menus and Item / Customer ID drill-downs

**Status (T7, 2026-10-14; cycle 6; documentation-only final acceptance audit; ZERO browser calls; ZERO Mongoose changes): RECOMMENDATION: ACCEPTED AS OBSERVED (same-session UI observations), on the conditions in the T7 report. AC-1 to AC-5 are each supported (AC-1 baseline and Help-only menus; AC-2 two clears, one Save with the verbatim response `Form [FX_Orders] and global object(s) were saved.`, blank after one Designer close/reopen; AC-3 Add..., Details..., Find..., Help on both menus after one runtime close/reopen and one F4, unload 0; AC-4 FX_Items on dumbbell and FX_HelloWorld01 on FX001, both closed clean, FX_Orders closed once in T6 with no prompt; AC-5 this audit). Harness reconciliation: the six harness audits agree with the record after the T1 erratum (corrected totals: 191 browser calls = 62 actions + 129 reads; 80 finds). Worker-written files: 44 through T6 plus the T7 report = 45. Not claimed: database durability, cross-session persistence, replay verification; causal attribution of the menu commands to StdDetailsAddFind was not isolated; FX_UM not re-verified. Full report: `evidence/EXP-086/T7-final-acceptance-report.md`. Classification: **observed only; not replay_verified.** Details: section "T7" at the end of this record.

**Status (T6, 2026-10-14; cycle 5; final clean close of the runtime FX_Orders; documentation-only acceptance deferred): THE RUNTIME FX_Orders WAS CLOSED ONCE WITH ITS TAB CLOSE CONTROL. NO PROMPT APPEARED (no save-new-record prompt, no dirty prompt, no alertdialog); so the No answer was not needed and was not given (count 0). Afterward the runtime shows only the pre-existing `IDO Properties` tab (selected, untouched, Filter in Place status); no FX_Orders, FX_Items or FX_HelloWorld01 tab remains; no menu or dialog. The Designer FX_Orders Form remains open, clean (Save, Undo and Regenerate Form disabled), `ScopeType: User`, no dialog; it was not edited, saved, closed or reopened in T6. No F4, no right-click, no Details, no reopen, no unload, no Designer Save. Final acceptance recommendation NOT issued (deferred to a documentation-only audit, per instruction). Classification: **observed only; not replay_verified.** Details: section "T6" at the end of this record.

**Status (T5, 2026-10-14; cycle 4; the two authorized Details drill-downs): BOTH DRILL-DOWNS OPENED THE EXPECTED FORM ON THE EXPECTED RECORD AND WERE CLOSED CLEAN WITH THEIR OWN TAB CLOSE CONTROLS. ITEM: Details... on the Item combobox (order 1) opened tab `FX_Items` on dumbbell, Description `45 pound iron`, Cost 45.00, UM EA, status `Description (Object 1 of 1)`. CUSTOMER ID: Details... on the Customer ID combobox (order 1) opened tab `FX_HelloWorld01` on FX001, Name `Factory test one`, Address `1 Factory Street`, status `(Object 1 of 1)`. Both drill-down tabs closed clean (Save disabled; no prompt). FX_Orders is open and clean on order 1 (FX001, dumbbell, 45 pound iron), no menu or dialog open. Details chosen: 2 (one per combobox). Add/Find chosen: 0. No unload, no Save, no Designer action, no runtime edit. Runtime FX_Orders is still open for the separately authorized final close. AC-4 SUPPORTED as a same-session UI observation. Classification: **observed only; not replay_verified.** Details: section "T5" at the end of this record.

**Status (T4, 2026-10-14; cycle 3; runtime check after the Designer changes; NO Details, NO Add, NO Find, NO cache operation): THE RUNTIME MENUS NOW OFFER THE EXTENSION COMMANDS. ONE runtime close (clean, no prompt) and ONE reopen through Form > Open > Select Form; mode Add-mode placeholder, switched once to Filter in Place; ONE blank-criteria F4 returned two orders; order 1 = FX001 / dumbbell / 45 pound iron. Item combobox right-click (once) = `Add...`, `Details...`, `Find...`, `Help`. Customer ID combobox right-click (once) = `Add...`, `Details...`, `Find...`, `Help`. Both dismissed without choosing (one Escape each did not close; one blank-area click each did). FX_Orders is open, clean (Save disabled), on order 1, with no menu open. The unload contingency condition was NOT met (both menus offer Details, Add and Find), so the unload was NOT invoked (count 0). AC-3 SUPPORTED (same-session UI observation). The Designer was not touched in T4 (still open, clean, User scope, from T3). NOT RUN: the drill-downs (the next authorized task) and the final runtime close. Classification: **observed only; not replay_verified.** Details: section "T4" at the end of this record.

**Status (T3, 2026-10-14; cycle 2; ONE Designer close and ONE reopen; post-reopen readback): AFTER THE REOPEN BOTH COMPONENT-LEVEL RIGHT-CLICK MENUS READ BLANK; ALL OTHER RECORDED VALUES UNCHANGED FOR BOTH COMBOBOXES (Binding, Inheritance both rows, Add/Details Form, Find Form, Property, Component Class). The Customer ID Binding and Inheritance rows, not re-read after the T2 Save, are now read (`object.FX_CustomerID`; `FX_CustomerID` / `FX_CustomerID`). Designer close: no prompt. Reopen: FX_Orders via Form > recent-forms, `ScopeType: User`, clean, no dialog. No Save invoked; no Web Client interaction. AC-2 now SUPPORTED as a same-session UI observation (not database durability, not replay). NOT RUN: runtime close/reopen, post-change runtime menus, drill-downs, final close. Classification: **observed only; not replay_verified.** Details: section "T3" at the end of this record.

**Status (T2, 2026-10-14; cycle 1; override and ONE Designer Save): BOTH COMPONENT-LEVEL RIGHT-CLICK MENUS CLEARED (blank after focus moved; Binding, Inheritance, Add/Details Form, Find Form and Property unchanged); ONE NATIVE DESIGNER SAVE INVOKED, toast verbatim `Form [FX_Orders] and global object(s) were saved.`; after Save the Designer is clean (Save and Undo disabled), FX_Orders still open, `ScopeType: User`, no dialog. NOT RUN in T2: Designer close/reopen, runtime check after the change, drill-downs, final close. AC-2 partly supported (clear and Save observed; the post-reopen readback is pending). Classification: **observed only; not replay_verified.** Details: section "T2" at the end of this record.

**Status (T1, 2026-10-14; cycle 0; read-only preflight and runtime baseline): PREFLIGHT AND BASELINE COMPLETE. STOPPED before the first Right-Click Menu change, as the T1 instruction required.** Designer FX_Orders is open, `ScopeType: User`, clean (Save, Undo and Regenerate Form disabled, no dialog). FX_ItemCombobox and FX_CustomerIDCombobox both show Inheritance `FX_Item` / `FX_CustomerID`, blank Add/Details Form, Find Form and Property, and Right-Click Menu `StdDefault` (the gate passes; neither Right-Click Menu is blank). On the runtime FX_Orders Form (Filter in Place, blank criteria, one F4, order 1 = FX001 / dumbbell), the **baseline right-click menu on the Item combobox and on the Customer ID combobox shows only `Help`** (no Add..., Details... or Find...). No menu item was chosen. **No Right-Click Menu was cleared; no Designer Save; no Designer close/reopen; no runtime close/reopen; no drill-down; no unload.** AC-1 supported (see the AC-1 section); AC-2 to AC-5 **NOT RUN**. Classification: **observed only; not replay_verified.**

Run identity: run `R-20261014-144223-SAFC`, experiment EXP-086, cycle 0, task T1, task_message_id `b143b937-59a4-4108-b64d-df9ed91d23eb`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-086/`.

Record creation disclosure: `experiments/EXP-086-…md` did not exist before this task (a `find`/`Glob` for `experiments/EXP-086*` returned no file; the repository holds only the brief commits `c9815b4` draft and `4e17ab3` approved). This worker created the record in T1.

## Why this experiment (from the brief)

The tutorial (`docs/mongoose/transcripts/hello-world-pt5.md`, Section 5, 07:49–08:15) says that the component-level Right-Click Menu (`StdDefault`) on the Customer ID and Item combo boxes overrides the property-class extension menus, so it must be cleared before the drill-down menus can be inherited. EXP-085 created the FX_Item and FX_CustomerID property-class extensions (each with Right-Click Menu `StdDetailsAddFind`). This experiment (T1 only so far) records the preflight and the runtime baseline before the component-level override. The later tasks will clear the two component values, save once, and test the runtime menus and the Details drill-downs.

Expected end state after the later tasks (not yet run): both component-level Right-Click Menus blank; runtime right-click on order 1 offers `Add...`, `Details...`, `Find...` (and `Help`); Details on the Item combobox opens FX_Items on dumbbell (45 pound iron); Details on the Customer ID combobox opens FX_HelloWorld01 on FX001.

## Sources reviewed (T1, before any browser interaction)

| Source | Extent of read | Applied lesson |
| --- | --- | --- |
| `AGENTS.md` | Read in full (238 lines). | LEARNING MODE; FX_ scope; User editing scope; evidence rules; recovery rules; knowledge states. |
| `docs/mongoose/transcripts/hello-world-pt5.md` | Read in full (585 lines), including Sections 4–6 (Section 5 step 8 at lines 162–164; Section 5 at 151–166; Section 6 at 168–183) and the transcript 07:49–08:15 (lines ~457–466). Trust: **unverified** tutorial transcript. | Step 5.8 (clear the component Right-Click Menu so the extension menu inherits). The tutorial's Site Default scope is not authorized and is not used. Section 5 replacement (06:37–07:49) was **not** performed (not in this experiment). |
| `experiments/EXP-085-…property-class-extensions.md` | Status headers (T1–T7 lines 1–15 and the T1 gate sections read in full, lines 1–210) and the T2 section through the creation prompt and the Add/Details, Find and Property field entries (lines 211–319). T3–T7 read only through their status headers. | Both extensions (`FX_Item`: `FX_Items` / `FX_Items` / `FX_Item` / `StdDetailsAddFind`; `FX_CustomerID`: `FX_HelloWorld01` / `FX_HelloWorld01` / `FX_Code` / `StdDetailsAddFind`); the comboboxes' StdDefault baseline (T1 gate-04 to gate-06); Save and close/reopen status (T5, T6). |
| `experiments/EXP-069-R2-…property-class-extension-right-click.md` | T6 runtime section (lines ~1000–1137, read in part), T7 property clear (lines 900–920, read in full for the clear route), status headers, and targeted greps (menu items, dismissal, 25-item menu, unload). | Clear route: click the value cell once (text highlighted), one **Delete** key press, one neutral click on the Properties header to move focus, then read the cell (blank). Menu dismissal: one Escape did **not** close the runtime context menu in every run; one blank-area click at (1200, 700) closed it with no item chosen. Help-only menu = component `StdDefault`; the 25-item standard menu appeared with a blank component value (T8, T9); the R2 negative result before the override is recorded there. |
| `experiments/EXP-069-R4-…property-class-extension-right-click.md` | Outcome section (lines 1379–1407, read in full); T5 and T6 by targeted grep for the menu items and the drill-down. | R4 accepted run: runtime menu `Add...`, `Details...`, `Find...`, `Help` once extensions were present and the component value was blank; Details opened the Form **in a new tab** on the matching record; no unload was needed; extension changes reached runtime after a runtime close/reopen. |
| `experiments/EXP-083-…strings-and-runtime-check.md` | Sources and T1 sections by targeted grep (lines 28–40 and 41–150). Not read in full. | Runtime FX_Orders query pattern: Filter in Place on reopen; one F4 returns two rows (row 1 = order 1 / FX001 / dumbbell / count 2; row 2 = order 2 / FX002 / eggs / count 1), as observed again in this task. |

**Partial-read limitation:** EXP-085 T3–T7, EXP-069-R2 (most sections outside T6/T7/T8-by-grep), EXP-069-R4 (T1–T4 and T7–T8 outside the grep matches) and EXP-083 (most sections) were not read in full. The lessons applied in T1 are those listed above; the Designer and runtime state were verified live, so the preflight does not depend on the unread parts.

## Session and tab handling

- Tab list (first browser call of the task, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, current; `MGForm=FX_Orders` in the URL); tab 1 = Web Client (`favoriteContext=IdoProperties` at the start, portal page `mingle-portal.se1.inforcloudsuite.com/…`).
- Tab 0 selected (succeeded), then the Designer fresh snapshot (saved) and finds.
- Tab 1 selected (succeeded) after the Designer preflight, then the Web Client fresh snapshot (saved).
- Session usable throughout. No "Session Expired" modal, no sign-in page, no portal notification banner, no unsaved-change prompt, no browser-native dialog. **Re-login count 0.** The session-expiry procedure was **not** invoked.
- Console counts at snapshots: "2 errors, 0 warnings" (Designer) and "29 errors, 2 warnings" (Web Client). Not inspected (out of scope).
- Designer note: FX_Orders was already the open, clean, User-scoped Designer Form on arrival, so the Form-menu recent-forms open was **not** repeated (the brief allows opening it "if needed"). Identity and scope were established from the open tab, the heading, the footer and the Components rows.

## AC-1 — Designer preflight (FX_Orders, User scope, clean; comboboxes; read-only)

### Designer identity, scope and clean state

| Item | Observed |
| --- | --- |
| Form | `FX_Orders` (tab `selected`, heading `FX_Orders`; screenshot `preflight-01`) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator> ]` (name not copied here) |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; no alertdialog or in-page dialog (find, untargeted snapshot `t1-00`) |
| Selected component at preflight | FX_ItemCombobox (then FX_CustomerIDCombobox), by one click each on the Components row (view state only; no property changed) |

### FX_ItemCombobox and FX_CustomerIDCombobox (component level; read-only)

| Field | FX_ItemCombobox | FX_CustomerIDCombobox |
| --- | --- | --- |
| Properties header | `FX_ItemCombobox (Combobox)`; Caption `C(FX_ItemStatic)`; Type ComboBox; From Device Master True | `FX_CustomerIDCombobox (Combobox)`; Caption `C(FX_CustomerIDS…` (truncated in frame); Type ComboBox; From Device Master True |
| Components row | ComboBox, `object.FX_Item`, pane 1, tab 20 | ComboBox, `object.FX_CustomerID`, pane 1, tab 14 |
| Data Source: Binding Type / Binding | `Property` / `object.FX_Item` | `Property` / `object.FX_CustomerID` |
| **Inheritance: View Attributes Inherited From Property** | **`FX_Item`** (expected) | **`FX_CustomerID`** (expected) |
| **Inheritance: Edit Property Class Extension For Property Class** | **`FX_Item`** (expected) | **`FX_CustomerID`** (expected) |
| **Behavior → Add/Details Form** (component) | **blank** | **blank** |
| **Behavior → Find Form** (component) | **blank** | **blank** |
| **Behavior → Property** (component) | **blank** | **blank** |
| **Behavior → Right-Click Menu** (component) | **`StdDefault`** (expected; not blank) | **`StdDefault`** (expected; not blank) |

The Inheritance rows lie below the visible frame of the screenshots (they were read by accessibility `find`); the Behavior rows are visible in the screenshots. Gate result: **passed** (both Right-Click Menus are `StdDefault`, not blank; the extension values match the expected inheritance).

### Designer screenshots (preflight)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/preflight-01-designer-fx-itemcombobox-properties.png` | FX_Orders heading; footer `ScopeType: User`; Properties header `FX_ItemCombobox (Combobox)`; Behavior expanded; Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`; Components row FX_ItemCombobox, ComboBox, `object.FX_Item`, pane 1, tab 20 selected; toolbar Save and Undo greyed. | Identity, User scope, clean state, the three blank component values and `StdDefault` for FX_ItemCombobox. | The Inheritance rows (below the frame; accessibility only); any saved (persisted) state. |
| `evidence/EXP-086/preflight-02-designer-fx-customeridcombobox-properties.png` | Same frame for `FX_CustomerIDCombobox (Combobox)`; Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`; Components row FX_CustomerIDCombobox, ComboBox, `object.FX_CustomerID`, pane 1, tab 14 selected; Save and Undo greyed. | Identity, scope, clean state, and the component values for FX_CustomerIDCombobox. | The Inheritance rows (accessibility only); persisted state. |

## Runtime baseline (T1; read-only apart from one Filter-in-Place mode switch and one F4)

Steps, in order (one action each):

1. **Pre-check.** Web Client tab (tab 1) showed one open runtime Form, `IDO Properties` (blank, Filter in Place; pre-existing, not touched). Find for `FX_Orders` returned no match, so FX_Orders was **not** open and no close was performed (`rt-00`).
2. **Open.** Form menu (one click) > Open (one click) > Select Form dialog listing one row `FX_Orders` with the filter `FX_Orders` pre-filled. Selected the row (one click) and pressed OK (one click). Result: a new tab `FX_Orders` (URL `favoriteContext=FX_Orders`).
3. **Mode recorded.** On opening, the Form was in **add-mode placeholder** state: blank new-record row, status bar `Order Number (Object 1 of 1)`, Order Number field showing a default value with its text selected (`rt-01`). **No text was typed** into it.
4. **Filter in Place.** One click on the toolbar `Filter in Place` (FiP) button. Result: status bar `Filter in Place`; the tab shows the filter icon; all criteria blank (`rt-02`).
5. **F4 (once).** Blank criteria, F4 pressed once. Result: two rows (rows 1 and 2). Order 1 displays: Order Number `1`, Customer ID `FX001`, Customer Name `Factory test one`, Address `1 Factory Street`, Item `dumbbell`, Item Description `45 pound iron`, Cost `45.00`, Count `2`, Order Total `90.00`, picture shown; status bar `Customer ID (Object 1 of 2)`; the Customer ID combobox has focus with its text selected (`rt-03`). No text was typed into it; the only keys pressed afterwards were the two Escape presses on open menus (steps 7 and 9).
6. **Item combobox right-click (once).** Right-click on the Item combobox (value `dumbbell`, order 1). Menu items, verbatim: **`Help`** (one item only). Status bar `Item (Object 1 of 2)`. Screenshot `rt-04`.
7. **Dismiss (Item).** One Escape: the menu was **not** dismissed (find still returned `menuitem "Help"`). One click on blank Form space at (1200, 700): menu dismissed (find: no menu); Save `[disabled]`; Item value still `dumbbell`. **No item was chosen.**
8. **Customer ID combobox right-click (once).** Right-click on the Customer ID combobox (value `FX001`, order 1). Menu items, verbatim: **`Help`** (one item only). Screenshot `rt-05`.
9. **Dismiss (Customer ID).** One Escape: the menu was **not** dismissed. One click on blank Form space at (1200, 700): menu dismissed (find: no menu); Save `[disabled]`. **No item was chosen.**

### Runtime screenshots (baseline)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/rt-00-webclient-before-baseline.png` | Web Client showing the pre-existing `IDO Properties` Form (blank, Filter in Place); no FX_Orders tab. | FX_Orders was not open before the baseline. | Anything about FX_Orders' definition. |
| `evidence/EXP-086/rt-01-baseline-fx-orders-opened.png` | Two tabs: `IDO Properties` and `FX_Orders` (selected); add-mode placeholder row; status `Order Number (Object 1 of 1)`; Save greyed. | The Select Form open route produced an FX_Orders tab, and the initial mode was add-mode placeholder. | Whether the add-mode placeholder persists beyond reopen. |
| `evidence/EXP-086/rt-02-baseline-fx-orders-filter-in-place.png` | FX_Orders tab with the filter icon; status `Filter in Place`; criteria all blank; FiP tooltip visible. | Filter in Place mode with blank criteria before F4. | The query result (before F4). |
| `evidence/EXP-086/rt-03-baseline-after-f4-blank-query.png` | Two grid rows; order 1 values as listed in step 5; Customer ID combobox focused with `FX001` selected; status `Customer ID (Object 1 of 2)`. | One blank-criteria F4 returned two orders; order 1 = FX001 / dumbbell / 45 pound iron / count 2. | The stored data beyond the screen values; the menu. |
| `evidence/EXP-086/rt-04-baseline-item-combobox-right-click-menu.png` | Item combobox (`dumbbell`) with a single-item menu `Help` beneath it; status `Item (Object 1 of 2)`; Save greyed. | The Item right-click menu on order 1 **before any change** is `Help` only. | The menu definition beyond this run; that the menu would be the same after a reopen. |
| `evidence/EXP-086/rt-05-baseline-customerid-combobox-right-click-menu.png` | Customer ID combobox (`FX001`) with a single-item menu `Help`; status `Customer ID (Object 1 of 2)`; Save greyed in the earlier state. | The Customer ID right-click menu on order 1 **before any change** is `Help` only. | As for rt-04. |

### Baseline result (observed)

- Item combobox, order 1, before any change: right-click menu = **`Help`** only. No `Add...`, `Details...` or `Find...`. Consistent with the component-level `StdDefault`, which EXP-069-R2 T1 and T6 also recorded as a Help-only menu.
- Customer ID combobox, order 1, before any change: right-click menu = **`Help`** only. Same pattern.
- Escape did **not** dismiss either menu in this run (two presses, two not-dismissed results); a blank-area click dismissed each (observed; same as EXP-069-R2).
- Runtime edits **0**; Save stayed disabled throughout; no record was changed.

## Action audit (T1, exact counts; cumulative for EXP-086 = T1 only)

Browser calls: **46** (cumulative for T1; this task's total; each call is numbered in order below). **Erratum (T7):** the figure was recorded as 45 and the finds as 18. The harness controller log shows 46 browser calls and 19 finds: a final `browser_find` (checking that the Web Client had no open menu or dialog) was run after the T1 record edits and was not added to this table. The corrected cumulative totals are 191 calls and 80 finds (see the T7 section).

| Category | Count | Notes |
| --- | --- | --- |
| Tab lists | 1 | Call 1, before the first selection. |
| Tab selects | 2 | Tab 0 (call 2, succeeded) and tab 1 (call 13, succeeded). |
| Untargeted / fresh snapshots | 2 | `t1-00` (Designer start) and `rt-00` (Web Client before baseline); both saved to the worker-requested path by the tool. |
| Finds (`browser_find`, read-only) | 19 (corrected in T7 from 18; see erratum above) | Calls 4, 5, 7, 9, 11, 15, 17, 19, 21, 25, 30, 32, 35, 37, 38, 40, 43, 45. |
| Screenshots | 8 | `preflight-01`, `preflight-02`, `rt-00`, `rt-01`, `rt-02`, `rt-03`, `rt-04`, `rt-05`. All succeeded. |
| Element clicks (ref) | 9 | Designer: Components row FX_ItemCombobox (view selection, call 6); Components row FX_CustomerIDCombobox (view selection, call 10). Runtime: Form menu (call 18); Form > Open (call 20); FX_Orders row in Select Form (call 22); Select Form OK (call 23); Filter in Place button (call 26); right-click Item combobox (call 31); right-click Customer ID combobox (call 39). |
| Right-clicks | 2 | Item combobox (call 31) and Customer ID combobox (call 39), one each. |
| Coordinate clicks | 2 | Blank Form space at (1200, 700): call 36 (Item dismissal) and call 44 (Customer ID dismissal). |
| Key presses | 3 | F4 (call 28; one); Escape (call 34 and call 42; one each). |
| Typed text | 0 | — |
| Fill / drag / file upload / dialog handling | 0 | — |
| Browser JavaScript / evaluate / run-code / console / network inspection | 0 | — |
| Browser errors / timeouts | 0 | No ref-not-found, no timeout. |
| Fresh-snapshot recovery allowance used | 0 | — |
| Parallel browser mutations | 0 | Every action was issued alone, then its result was read. |

**Mongoose mutations and lifecycle (T1), exact:**
- **Right-Click Menu clears: 0** (none performed in T1; the brief stops before the override).
- **Component or property changes: 0** (Components row selections are view state only).
- Designer Saves: **0**. Designer close / reopen: **0 / 0**. Designer unloads: **0**. Web Client unloads (Unload All Global Form Objects): **0**.
- Runtime FX_Orders opens: **1** (Select Form, call 20–23). Runtime closes: **0**. Runtime reopens: **0** (the Form was opened once, not re-opened).
- Runtime FiP (mode switch, view): **1**. Runtime F4: **1**. Runtime right-clicks: **2** (Item, Customer ID). Runtime Escapes: **2**. Runtime blank-area dismissals: **2**.
- Runtime edits: **0**. Records typed: **0**. Runtime New, Save or Delete: **0**. Runtime list values chosen: **0**. Menu items chosen: **0**.
- Details chosen: **0**. Add chosen: **0**. Find chosen: **0**. Drill-down Forms opened: **0**.
- Checkout, check-in, undo checkout: **0**. FormSync, deployment, regeneration: **0**. Regenerate Form clicked: **0**. Designer top-toolbar Delete clicked: **0**.
- Re-logins: **0**. Session-expiry procedure: **not invoked**.
- Pre-existing runtime `IDO Properties` Form: left as it was (not touched).

**Cumulative action audit line for the later tasks (carry forward):** Right-Click Menu clears 0 of 2; Designer Save 0 of 1; Designer close/reopen 0 of 1; runtime FX_Orders opens 1 (closes 0; reopens 0; the close/reopen is pending); F4 1; right-clicks 2; Details 0 of 2; Add/Find 0; unloads 0 of 1 (contingency only); re-logins 0 of 1.

## Worker-written file inventory (T1)

- `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` (created: this record).
- `evidence/EXP-086/t1-00-designer-fresh-snapshot-start.yml` (snapshot saved by the tool at the worker-requested path).
- `evidence/EXP-086/preflight-01-designer-fx-itemcombobox-properties.png`
- `evidence/EXP-086/preflight-02-designer-fx-customeridcombobox-properties.png`
- `evidence/EXP-086/rt-00-webclient-fresh-snapshot-baseline.yml` (snapshot saved by the tool at the worker-requested path).
- `evidence/EXP-086/rt-00-webclient-before-baseline.png`
- `evidence/EXP-086/rt-01-baseline-fx-orders-opened.png`
- `evidence/EXP-086/rt-02-baseline-fx-orders-filter-in-place.png`
- `evidence/EXP-086/rt-03-baseline-after-f4-blank-query.png`
- `evidence/EXP-086/rt-04-baseline-item-combobox-right-click-menu.png`
- `evidence/EXP-086/rt-05-baseline-customerid-combobox-right-click-menu.png`

Total worker-written repository files (T1): **11** (1 record, 8 PNG, 2 YAML snapshots saved at the worker-requested path). The browser tool also wrote its own page snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-14T06-44-41-645Z.yml`, `console-2026-10-14T06-42-58-073Z.log`); those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Acceptance (T1)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported (with limits).** Sources reviewed (partial reads disclosed). Session usable. Designer FX_Orders in User scope and clean. Both comboboxes: Inheritance `FX_Item` / `FX_CustomerID`; Add/Details, Find and Property blank; Right-Click Menu `StdDefault`. Baseline runtime menus on order 1 recorded (both `Help` only) without choosing an item. | `preflight-01`, `preflight-02` (Designer); `rt-04`, `rt-05` (baseline menus); `rt-03` (order 1 and F4); `rt-02` (blank Filter in Place). | Inheritance rows read by accessibility (outside the screenshot frame). Designer and runtime readings are same-session UI observations, not persistence or replay verification. |
| AC-2 | **NOT RUN** (the Right-Click Menu clears are the next task). | — | — |
| AC-3 | **Baseline portion only.** The post-change menus (after close/reopen and F4) are NOT run. Baseline: Item and Customer ID menus = `Help` only. | `rt-04`, `rt-05` | — |
| AC-4 | **NOT RUN** (drill-downs are a later task). | — | — |
| AC-5 | **NOT RUN** (the final report comes after all tasks). Carry-forward audit recorded above. | Action audit and file inventory above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| FX_Orders is open in the Designer, User scope, clean, at the start of the task | **observed** (one run, T1; `preflight-01`, `t1-00`) |
| FX_ItemCombobox: Binding `object.FX_Item`; Inheritance `FX_Item`; Add/Details, Find, Property blank; Right-Click Menu `StdDefault` | **observed** (one run, T1; `preflight-01`; Inheritance by accessibility) |
| FX_CustomerIDCombobox: Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID`; Add/Details, Find, Property blank; Right-Click Menu `StdDefault` | **observed** (one run, T1; `preflight-02`; Inheritance by accessibility) |
| Runtime FX_Orders was not open before the baseline; Select Form opened it in a new tab in add-mode placeholder state | **observed** (one run, T1; `rt-00`, `rt-01`) |
| Filter in Place (FiP toolbar button) switches the add-mode placeholder to blank Filter in Place criteria | **observed** (one run, T1; `rt-02`) |
| One blank-criteria F4 returns two orders; order 1 = FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / count 2 / 90.00 | **observed** (one run, T1; `rt-03`; agrees with EXP-083) |
| Baseline (before any change) runtime right-click on order 1: Item combobox = `Help` only | **observed** (one run, T1; `rt-04`; agrees with EXP-069-R2 T1/T5 for StdDefault) |
| Baseline runtime right-click on order 1: Customer ID combobox = `Help` only | **observed** (one run, T1; `rt-05`) |
| Escape does not dismiss the runtime context menu; one blank-area click does (no item chosen) | **observed** (T1 twice; agrees with EXP-069-R2) |
| Persisted (database) state of the two Right-Click Menus, the extensions, and the form | **unresolved** (UI readback only; no database read) |
| EXP-069-R2 Delete-key clear route, and R4 Details → new tab behaviour | **candidate_procedure** (read from the records; not yet exercised in EXP-086) |

## Deviations and limits (T1)

- **D1:** FX_Orders was already open in the Designer (clean, User scope); the recent-forms open was not repeated.
- **D2:** The runtime FX_Orders Form opened in add-mode placeholder state, not Filter in Place; the brief's "switch to Filter in Place if needed" was applied with one FiP click (step 4).
- **D3:** The Customer ID combobox had focus with its text selected after the F4 (`rt-03`). The next action in that Form was a right-click on the Item combobox (mouse, no keys). No text was typed. Save stayed disabled after both dismissals.
- **D4:** Partial reads of EXP-085 (T3–T7 by status only), EXP-069-R2 (T6 in part; T7 read in full; T8–T9 by grep), EXP-069-R4 (outcome read in full; other sections by grep) and EXP-083 (by grep). Disclosed in the sources table.
- **D5:** The Inheritance rows for both comboboxes are outside the screenshot frames and were read by accessibility `find`.
- **D6:** Two Components-row clicks (FX_ItemCombobox, FX_CustomerIDCombobox) changed only the Designer's selected component (view state). They are counted in the audit and are not Form changes.
- **D7:** The footer and header show the operator's Mongoose user name in the screenshots; it is not copied into this record.

## Next permitted action (requires the coordinator's authorization for the next task)

1. **T2 (override and Save):** from the open, clean FX_Orders Designer, select FX_ItemCombobox, click its Right-Click Menu value (one click, text highlighted), press **Delete** once, move focus with one neutral click on the Properties header, verify the cell reads blank and that Add/Details Form, Find Form, Property and Inheritance are unchanged. Repeat for FX_CustomerIDCombobox. Never choose a value from the Right-Click Menu list. Then **one** Designer Save (native toolbar Save); record the native response verbatim. (Brief: the Save is never retried.)
2. **T3 (Designer close/reopen and readback):** close the clean FX_Orders Designer Form once through its Form-tab control; reopen once through the Form menu recent-forms entry; verify both Right-Click Menus blank and the other values unchanged.
3. **T4 (runtime check 2 and drill-downs):** close the clean runtime FX_Orders once; reopen once; blank-criteria F4 once; right-click each combobox once on order 1; record the menu verbatim. If no Details/Add/Find appears, the one-time contingency unload is permitted; otherwise it is not used. Then Details once on each combobox (FX_Items on dumbbell; FX_HelloWorld01 on FX001); close each drill-down Form clean; close FX_Orders once at the end.

Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 — Source reconciliation; both component-level Right-Click Menus cleared (Delete, then Tab); ONE native Designer Save; post-Save readbacks; Designer NOT closed or reopened (cycle 1)

Task T2 (bounded instruction: complete the source reconciliation T1 left partial; clear FX_ItemCombobox and FX_CustomerIDCombobox Right-Click Menu StdDefault with Delete once and Tab once; verify; ONE native Designer Save; no Designer close/reopen; no runtime action). Run `R-20261014-144223-SAFC`, experiment EXP-086, cycle 1, task T2, task_message_id `4f01b488-65bc-45ce-8aa2-9d12390f1fc7`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14.

### Source reconciliation (T2; completed before any browser mutation)

| Source | Extent read in T2 | Lesson applied |
| --- | --- | --- |
| `experiments/EXP-085-…property-class-extensions.md`, "Outcome (operator, 2026-10-14)" (lines 1287–1326) | Read in full. | Both extensions were created through the combobox inline editor, each field committed with Tab before OK, and both appear in Edit > Property Class Extension after the one Save and the Designer close/reopen. Expected values: FX_Item `FX_Items` / `FX_Items` / `FX_Item` / `StdDetailsAddFind`; FX_CustomerID `FX_HelloWorld01` / `FX_HelloWorld01` / `FX_Code` / `StdDetailsAddFind`. FX_UM untouched. |
| `experiments/EXP-069-R2-…right-click.md`, T6–T8 | T6 (runtime), T7 (override, lines 900–920) and T8 (lines 740–800) read in full for the purpose here; T9–T10 by targeted grep. | T7 route: click the value text once (highlighted), **one Delete key press**, one neutral click on the Properties header, readback blank. T8: with a blank component value and no extension menu, the runtime showed the 25-item standard menu without Details/Add/Find; one Escape did not dismiss; one blank-area click did. **Why the R2 negative does not transfer:** R2 T10 found the **extension's own** Right-Click Menu blank (lost in R2 T4), so the extension had no menu value. In EXP-085, the extensions' `StdDetailsAddFind` values were read back after the Save and reopen (EXP-085 T6). |
| `experiments/EXP-069-R4-…right-click.md`, Outcome (lines 1379–1407) | Read in full (already read in T1). | Runtime menu shows `Add...`, `Details...`, `Find...`, `Help` once the component value is blank and the extension has `StdDetailsAddFind`; Details opens the target Form **in a new tab**; no unload needed after a runtime close/reopen; Tab commit before OK. |
| `experiments/EXP-083-…strings-and-runtime-check.md`, T5 (lines 632–720) | Read in full. | Runtime open via Form > Open > Select Form (filter typed in the picker, then one row checked before OK); the Form opens in add-mode placeholder; one FiP click switches to Filter in Place; one blank-criteria F4 gives two rows; order navigation by row-number cells; one runtime close with no prompt. |

### Starting state (verified before any mutation)

- Tab list (first browser call of T2, before any selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client (`favoriteContext=FX_Orders`, runtime FX_Orders open, clean, from T1). Tab 0 selected (succeeded).
- Fresh snapshot `evidence/EXP-086/t2-00-designer-fresh-snapshot-start.yml`; find: tab `FX_Orders` selected (heading); footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Regenerate Form `[disabled]`, Undo `[disabled]`; no alertdialog or in-page dialog. **Clean and User scope.**
- FX_ItemCombobox (Components row, one click; view state): Binding Type `Property`, Binding `object.FX_Item`; Inheritance View Attributes `FX_Item`, Edit Property Class Extension `FX_Item`; Add/Details Form, Find Form and Property blank (no value text in their cells); Right-Click Menu `StdDefault`. **Matches the T1 baseline.**
- FX_CustomerIDCombobox (Components row, one click; view state): Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID` (both rows); Right-Click Menu `StdDefault`; Add/Details, Find and Property blank (`t2-03`). **Matches the T1 baseline.**

### Clear 1 — FX_ItemCombobox Right-Click Menu (one Delete, one Tab)

- One click on the value text `StdDefault` (find ref `e2108`; the tool resolved it by text). Focus check before Delete, screenshot `t2-01-item-rightclick-value-focused-before-delete.png`: the Right-Click Menu field has focus with `StdDefault` highlighted; Save and Undo still disabled; no menu open.
- **Delete key pressed once.** **Tab pressed once.**
- Readback after focus moved (screenshot `t2-02-item-rightclick-cleared-after-tab.png`): the Right-Click Menu row shows **no value**; the Right-Click Menu row now reads as blank in the Properties panel. Accessibility `find` (`gridcell` `e2106`): the value cell has **no text child** (only the dropdown affordance). Save and Undo are now **enabled** (dirty).
- Other rows, unchanged (find, same snapshot): Add/Details Form, Find Form and Property have no value text; Binding `Property` / `object.FX_Item`; Inheritance View Attributes `FX_Item`; Edit Property Class Extension `FX_Item`.

### Clear 2 — FX_CustomerIDCombobox Right-Click Menu (one Delete, one Tab)

- Components row FX_CustomerIDCombobox selected (one click; view state). One click on the value text `StdDefault` (`e2889`). Focus check before Delete, screenshot `t2-03-customerid-rightclick-focused-before-delete.png`: Right-Click Menu focused with `StdDefault` highlighted; Properties header `FX_CustomerIDCombobox (Combobox)`.
- **Delete key pressed once.** **Tab pressed once.**
- Readback after focus moved (screenshot `t2-04-customerid-rightclick-cleared-after-tab.png`): the Right-Click Menu row has **no value**. Accessibility (`gridcell` `e2887`): the value cell has no text child.
- Other rows, unchanged (find): Add/Details Form, Find Form and Property have no value text; Binding `Property` / `object.FX_CustomerID`; Inheritance View Attributes `FX_CustomerID`; Edit Property Class Extension `FX_CustomerID`.
- Not in the value-cell text list: no value was chosen from the Right-Click Menu list at any point (no list opened).

### ONE native Designer Save

- Pre-Save gate (find): toolbar Save **enabled** (no `[disabled]`), Undo enabled, `ScopeType: User`. The brief's "stop blocked if disabled" condition did **not** apply.
- **Native toolbar Save clicked once** (the toolbar floppy button, `e2670`; not Regenerate Form, not the top-toolbar trash icon).
- **Native response, verbatim:** toast titled `Save`, text **`Form [FX_Orders] and global object(s) were saved.`** (with a Close control). Screenshot `t2-05-designer-save-native-response-and-clean-state.png` shows the toast at the top right, the toolbar Save and Undo greyed, `ScopeType: User`, FX_Orders tab open.
- *Observed difference from EXP-085 T5:* the EXP-085 toast read `Global object(s) were saved.`; the EXP-086 toast also names the Form (`Form [FX_Orders] and …`). Observed only; no cause established.
- Post-Save state (find, same session): toolbar Save **disabled**, Undo **disabled**, Regenerate Form disabled; no alertdialog; FX_Orders still the selected tab. The Save was **not** repeated.

### Post-Save readbacks (read-only; the Designer is NOT closed or reopened in T2)

- FX_ItemCombobox (row re-selected, one click; view state): Right-Click Menu value cell (`e3668`) has **no text**; Binding `Property` / `object.FX_Item`; Inheritance `FX_Item` (both rows). Screenshot `t2-06-item-rightclick-blank-after-save-readback.png`: Right-Click Menu blank; Add/Details Form, Find Form and Property blank; Save and Undo greyed; `ScopeType: User`.
- FX_CustomerIDCombobox (post-Save): its Right-Click Menu row is visibly blank in `t2-05` (Properties header `FX_CustomerIDCombobox (Combobox)`), with Add/Details, Find and Property blank in the same frame. Its Inheritance rows were **not** re-read after the Save (only before it, in `t2-03`). This is a stated gap.

### Screenshots (T2)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/t2-01-item-rightclick-value-focused-before-delete.png` | FX_ItemCombobox; Right-Click Menu field focused, `StdDefault` highlighted; Save and Undo greyed; footer `ScopeType: User`. | The Item value is selected and focused before the Delete (the brief's pre-state). | Anything after Delete. |
| `evidence/EXP-086/t2-02-item-rightclick-cleared-after-tab.png` | FX_ItemCombobox; Right-Click Menu row blank after Delete and Tab; Save and Undo now enabled; Add/Details, Find, Property blank; Binding and Inheritance rows below the frame (accessibility only). | The Item Right-Click Menu reads blank after focus moved; the Designer is dirty. | The stored value (no persistence claim); Inheritance rows (accessibility only). |
| `evidence/EXP-086/t2-03-customerid-rightclick-focused-before-delete.png` | FX_CustomerIDCombobox; Right-Click Menu focused with `StdDefault` highlighted; Add/Details, Find, Property blank; Save enabled. | The Customer ID pre-state before its Delete. | Anything after Delete. |
| `evidence/EXP-086/t2-04-customerid-rightclick-cleared-after-tab.png` | FX_CustomerIDCombobox; Right-Click Menu row blank after Delete and Tab; the Item value was cleared earlier in T2 (not in this frame). | The Customer ID Right-Click Menu reads blank after focus moved. | Inheritance rows (below frame); the Item value (not in frame). |
| `evidence/EXP-086/t2-05-designer-save-native-response-and-clean-state.png` | Toast `Save` / `Form [FX_Orders] and global object(s) were saved.`; toolbar Save and Undo greyed; `ScopeType: User`; FX_Orders tab; FX_CustomerIDCombobox Right-Click Menu blank. | The native Save response, verbatim, and the clean state after Save (toolbar). | Database-level persistence (a UI acknowledgement only); the Item value's post-Save state (see t2-06). |
| `evidence/EXP-086/t2-06-item-rightclick-blank-after-save-readback.png` | FX_ItemCombobox; Right-Click Menu blank after Save; Add/Details, Find, Property blank; Save and Undo greyed; `ScopeType: User`. | The Item Right-Click Menu remains blank after the Save (same session). | Inheritance rows (accessibility only); persistence across a reopen (not yet tested). |

### Designer state at the end of T2

- FX_Orders open in the Designer, `ScopeType: User`, **clean** (Save and Undo disabled), no dialog, no prompt, no menu open. Not closed, not reopened (the next task). The toast cleared by itself after the screenshot.
- Runtime tab (tab 1, FX_Orders on order 1, clean from T1) **not touched** in T2.

### Action audit (T2, exact; 31 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t2-00` | Designer FX_Orders |
| 4 | `browser_find` regex (ScopeType/alertdialog/Save/Undo/Regenerate/tab) | User scope; Save, Undo and Regenerate disabled; no dialog |
| 5 | `browser_find` "FX_ItemCombobox" | Components row `e817` |
| 6 | `browser_click` `e817` (Item row, view) | Row selected |
| 7 | `browser_find` regex (Item properties) | Binding `object.FX_Item`; Inheritance `FX_Item`; Right-Click `StdDefault`; Add/Details, Find, Property blank |
| 8 | `browser_click` `e2108` (Item Right-Click value, focus) | Value focused |
| 9 | `browser_take_screenshot` `t2-01` | Focus and highlight visible |
| 10 | `browser_press_key` Delete (**once**) | Text removed |
| 11 | `browser_press_key` Tab (**once**) | Focus moved |
| 12 | `browser_take_screenshot` `t2-02` | Item Right-Click blank; Save enabled |
| 13 | `browser_find` regex (toolbar Save/Undo) | Save and Undo enabled |
| 14 | `browser_find` regex (Item rows) | Value cell `e2106` no text; other rows unchanged |
| 15 | `browser_find` "FX_CustomerIDCombobox" | Components row `e667` |
| 16 | `browser_click` `e667` (Customer ID row, view) | Row selected |
| 17 | `browser_find` regex (Customer ID properties) | Right-Click `StdDefault` (`e2889`); Binding and Inheritance `FX_CustomerID` |
| 18 | `browser_click` `e2889` (Customer ID Right-Click value, focus) | Value focused |
| 19 | `browser_take_screenshot` `t2-03` | Focus and highlight visible |
| 20 | `browser_press_key` Delete (**once**) | Text removed |
| 21 | `browser_press_key` Tab (**once**) | Focus moved |
| 22 | `browser_take_screenshot` `t2-04` | Customer ID Right-Click blank |
| 23 | `browser_find` regex (Customer ID rows) | Value cell `e2887` no text; other rows unchanged |
| 24 | `browser_find` regex (Save/Undo/ScopeType) | Save enabled before the Save; Undo enabled |
| 25 | `browser_click` `e2670` (native toolbar Save, **once**) | Save invoked |
| 26 | `browser_find` regex (toast/saved/dialog) | Toast `Form [FX_Orders] and global object(s) were saved.`; Save and Undo disabled |
| 27 | `browser_take_screenshot` `t2-05` | Toast visible; toolbar greyed |
| 28 | `browser_find` "FX_ItemCombobox" | Components row `e817` |
| 29 | `browser_click` `e817` (Item row, view) | Row selected |
| 30 | `browser_find` regex (Item post-Save) | Value cell `e3668` no text; Save disabled |
| 31 | `browser_take_screenshot` `t2-06` | Item blank after Save; Save greyed |

**T2 counts (exact):** browser calls **31**. Tab lists **1**; tab selects **1** (succeeded); snapshots **1** (`t2-00`); finds **12**; element clicks **6** (Item row ×2, Item value ×1, Customer ID row ×1, Customer ID value ×1, native Save ×1); coordinate clicks **0**; key presses **4** (Delete ×2, Tab ×2); typed text **0**; screenshots **6** (`t2-01` to `t2-06`; all succeeded); mouse, wheel, drag, dialog or file actions **0**; JavaScript, evaluate, console or network inspection **0**. Browser errors or timeouts **0**; ref-not-found **0**; fresh-snapshot recovery allowance used **0**. Actions were issued one at a time.

**Mongoose mutations and lifecycle (T2), exact:**
- **Right-Click Menu clears: 2** (FX_ItemCombobox; FX_CustomerIDCombobox). Each was the Delete of the highlighted `StdDefault` text followed by one Tab. No value was set or chosen.
- **Designer Save: 1** (native toolbar Save; response recorded verbatim; not retried).
- Designer close / reopen: **0 / 0** (not in T2).
- Other component or property changes: **0** (the two Components row selections are view state only).
- Choices from a Right-Click Menu list: **0**. Designer toolbar Delete: **0**. Regenerate Form: **0**. Designer unloads: **0**. Web Client unloads: **0**.
- Runtime actions: **0** (tab 1 not selected in T2).
- Checkout, check-in, undo checkout: **0**. FormSync, deployment: **0**. Re-logins: **0**. Session-expiry procedure: **not invoked** (no expiry or sign-in observed).

### Cumulative browser action audit (EXP-086, T1 + T2; reconciled)

| Category | T1 | T2 | Cumulative |
| --- | --- | --- | --- |
| Browser calls | 45 | 31 | **76** |
| Tab lists / selects | 1 / 2 | 1 / 1 | 2 / 3 |
| Snapshots (untargeted) | 2 | 1 | 3 |
| Finds | 18 | 12 | 30 |
| Screenshots | 8 | 6 | 14 |
| Element clicks | 9 | 6 | 15 |
| Coordinate clicks | 2 | 0 | 2 |
| Key presses | 3 | 4 | 7 |
| Right-Click Menu clears | 0 | 2 | **2 of 2** |
| Designer Save | 0 | 1 | **1 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | **0 / 0 (pending: 1 / 1)** |
| Runtime FX_Orders opens / closes / reopens | 1 / 0 / 0 | 0 / 0 / 0 | 1 / 0 / 0 (close pending; reopen pending) |
| Runtime F4 | 1 | 0 | 1 |
| Runtime right-clicks | 2 | 0 | 2 |
| Runtime Escapes / blank-area dismissals | 2 / 2 | 0 / 0 | 2 / 2 |
| Details / Add / Find chosen | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0 (Details pending: 2)** |
| Unloads (Web Client contingency) | 0 | 0 | 0 (budget 1, contingency only) |
| Runtime edits / records typed / New, Save, Delete | 0 | 0 | 0 |
| Other component changes | 0 | 0 | 0 |
| Checkout actions / re-logins | 0 / 0 | 0 / 0 | 0 / 0 |

Reconciliation against T1 (the T1 record's audit): T1 counts are unchanged (no T1 count was edited). The T1 "Right-Click Menu clears 0" and "Designer Save 0" are superseded by T2 (2 and 1). Counts for the tab list, snapshot and find categories are the T2 values listed above. Note: the T1 record's `Tab selects` line counts tab 0 and tab 1 (2); T2 counts one select, tab 0 (the Web Client was not selected in T2).

### Worker-written file inventory (T2)

- `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` (updated: status header; this T2 section).
- `evidence/EXP-086/t2-00-designer-fresh-snapshot-start.yml` (snapshot saved by the tool at the requested path).
- `evidence/EXP-086/t2-01-item-rightclick-value-focused-before-delete.png`
- `evidence/EXP-086/t2-02-item-rightclick-cleared-after-tab.png`
- `evidence/EXP-086/t2-03-customerid-rightclick-focused-before-delete.png`
- `evidence/EXP-086/t2-04-customerid-rightclick-cleared-after-tab.png`
- `evidence/EXP-086/t2-05-designer-save-native-response-and-clean-state.png`
- `evidence/EXP-086/t2-06-item-rightclick-blank-after-save-readback.png`

T2 total: **7 new evidence files** (1 YAML snapshot, 6 PNG) and **1 updated record**. Cumulative for EXP-086 (T1 + T2): **18 worker-created files** (1 record created in T1, 17 evidence files: 10 from T1, 7 from T2) and the record updated in T2. The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-14T06-48-45-234Z.yml`, `console-2026-10-14T06-42-58-073Z.log`); those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git.

### Acceptance (T2)

| AC | T2 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (T1 result, reconfirmed in T2 before the change: FX_Orders User scope and clean; both comboboxes Binding and Inheritance as expected, Add/Details, Find and Property blank, Right-Click `StdDefault`). | `t2-00` snapshot; `t2-01`, `t2-03` (pre-change screenshots); T1 `preflight-01`, `preflight-02`, `rt-04`, `rt-05`. | Inheritance rows by accessibility where below frame. |
| AC-2 | **Partly supported.** Both component-level Right-Click Menus cleared (blank after focus moved); other values unchanged (Binding, Inheritance, Add/Details, Find, Property); **exactly one** Designer Save with its native response verbatim; post-Save readback: Item blank, Customer ID blank (visible). **NOT yet:** the post-reopen readback of both (the Designer close/reopen is the next task). | `t2-02`, `t2-04` (clears); `t2-05` (Save response and clean state); `t2-06` (Item post-Save). | Customer ID Inheritance not re-read after Save; Save is a UI acknowledgement, not a database read; no reopen yet. |
| AC-3 | **NOT RUN** (runtime close/reopen and post-change menus are the next tasks). | — | — |
| AC-4 | **NOT RUN.** | — | — |
| AC-5 | **Partial.** Carry-forward audit (76 calls; clears 2 of 2; Save 1 of 1) recorded above. | Audit and inventory above | Final report after all tasks. |

### Knowledge state (per finding; T2)

| Finding | State |
| --- | --- |
| Both component Right-Click Menus were `StdDefault` and their Binding/Inheritance/Add/Details/Find/Property values matched the T1 baseline immediately before the change | **observed** (one run, T2; `t2-00`, `t2-01`, `t2-03`) |
| Focus (one click on the value) + Delete (once) + Tab (once) cleared the component Right-Click Menu to blank, for both comboboxes | **observed** (one run each, T2; `t2-02`, `t2-04`) |
| The clear made Save and Undo enabled (the Designer became dirty) | **observed** (T2; `t2-02`) |
| One native toolbar Save returned the toast `Form [FX_Orders] and global object(s) were saved.` and greyed Save and Undo | **observed** (one run, T2; `t2-05`) |
| The Item Right-Click Menu remained blank after the Save (same session) | **observed** (one run, T2; `t2-06`) |
| Post-reopen (persisted) state of the two cleared Right-Click Menus | **unresolved** (not yet reopened) |
| The Delete-key clear route (EXP-069-R2 T7) works for FX_ comboboxes | **observed** (one run each, T2; candidate_procedure until the reopen and runtime check) |
| The EXP-069-R2 negative (menu without Details/Add/Find) does not apply here, because its extension Right-Click Menu was lost there (R2 T10) and EXP-085 read back `StdDetailsAddFind` | **candidate_procedure** (source-reconciliation reasoning; to be tested by the runtime check) |

### Deviations and limits (T2)

- **D1:** The Components row selections (Item and Customer ID) were re-selected for the post-Save readback. Selection is view state; counted in the audit.
- **D2:** The Save toast text differs from the EXP-085 toast by naming the Form. Recorded as observed; not interpreted.
- **D3:** The Customer ID Inheritance and Binding rows were not re-read after the Save (only before it); the post-Save Customer ID readback is the visible Right-Click Menu and the frame's Add/Details, Find and Property rows (`t2-05`).
- **D4:** The Designer was not closed or reopened (by instruction); the reopen is the next task.
- **D5:** No prompt appeared; no prompt needed an answer. No menu was opened in T2.

### Next permitted action (requires the coordinator's authorization for the next task)

1. **T3 (Designer close/reopen and readback):** close the clean FX_Orders Designer Form once through its Form-tab control (`closable FX_Orders`); reopen it once through the Form menu recent-forms entry; verify both component Right-Click Menus blank and Binding, Inheritance, Add/Details, Find and Property unchanged for both comboboxes (including the Customer ID Inheritance, not re-read after the Save). Screenshot the reopened readback.
2. **T4 (runtime check 2 and drill-downs):** close the clean runtime FX_Orders once; reopen once; blank-criteria F4 once; right-click each combobox once on order 1 and record the menu verbatim (expect `Add...`, `Details...`, `Find...`, `Help`). Contingency unload only if Details, Add and Find are all absent. Details once on each combobox (FX_Items on dumbbell; FX_HelloWorld01 on FX001); close each drill-down clean; close FX_Orders once at the end.

Classification for all T2 findings: **observed only, NOT replay_verified.**

---

## T3 — ONE Designer close (Form tab) and ONE reopen (Form menu recent-forms); post-reopen readback of both comboboxes; Customer ID Binding and Inheritance reconciled; NO Save; NO Web Client interaction (cycle 2)

Task T3 (bounded instruction: verify both Right-Click Menus blank after exactly one Designer close/reopen; reopen only through Form > recent forms; read back Binding, Inheritance, Add/Details, Find, Property and Right-Click for both comboboxes; reconcile Customer ID Binding and Inheritance; no edit; no Save; no runtime interaction). Run `R-20261014-144223-SAFC`, experiment EXP-086, cycle 2, task T3, task_message_id `1929526c-2ef2-4737-be5b-37064588b5ff`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14.

### Starting state (verified before the close)

- Tab list (first browser call; before any selection): tab 0 Designer (`MGForm=FX_Orders`, current); tab 1 Web Client (`favoriteContext=FX_Orders`, runtime clean from T1). Tab 0 selected (succeeded).
- Fresh snapshot `evidence/EXP-086/t3-00-designer-fresh-snapshot-before-close.yml`. Find: tab `FX_Orders` selected (heading); footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`; no alertdialog or in-page dialog. **Clean, User scope, no pending changes.**

### Designer close (ONE)

- One click on the Form tab's close control `closable FX_Orders` (`e247`). **No prompt**: a find for alertdialog, dialog, Yes/No, Discard or Save-changes returned no match. Screenshot `t3-01-designer-after-close-no-prompt.png`: the canvas is empty, no FX_Orders tab, Save greyed, `ScopeType: User` in the footer, Properties panel empty.

### Designer reopen (ONE)

- Designer top-menu `Form` (one click), then the recent-forms entry `FX_Orders` (one click, `e1929`; the menu list shows FX_Orders, IDO Properties, IDOs, FX_HelloWorld01, Sql Tables, IDO Projects, Property Classes, FX_Items, FX_UMs, Export/Import Strings). Not a direct URL.
- Result: the FX_Orders tab opened and is selected (heading `FX_Orders`). Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`; footer `[ ScopeType: User / ScopeName: <operator> ]`; no alertdialog or in-page dialog. Screenshot `t3-02-designer-reopened-fx-orders-before-components-tab.png` (canvas shows the 10 fields; Properties panel on the Form tab with `Name FX_Orders`, `Is Master True`; Details panel collapsed at the bottom).
- The Details panel was collapsed after the reopen. It was expanded once (`Expand Panel`, view state). Components was selected (one click; view state). Pane (00) and Pane (01) were collapsed; the Components grid's `Expand` button (one click, view state) expanded them. The Pane (01) row was selected by one click, and one ArrowRight press only moved focus to its Type cell (it did not expand the row; a focus-only action). These are view-state actions only; no component property was changed.

### Post-reopen readback: FX_ItemCombobox (read-only; row selected, view state)

| Field | Observed (accessibility; screenshot `t3-05`) | Expected | Match |
| --- | --- | --- | --- |
| Properties header | `FX_ItemCombobox (Combobox)`; Name `FX_ItemCombobox`; Caption `C(FX_ItemStatic)`; Type ComboBox; From Device Master True | FX_ItemCombobox | yes |
| Binding Type / Binding | `Property` / `object.FX_Item` (Components row: ComboBox, `object.FX_Item`, pane 1, tab 20) | `Property` / `object.FX_Item` | yes |
| Inheritance: View Attributes Inherited From Property | `FX_Item` | `FX_Item` | yes |
| Inheritance: Edit Property Class Extension For Property Class | `FX_Item` | `FX_Item` | yes |
| Inheritance: Set Class From | `This Component's Attribute` | (T1 value) | yes |
| Inheritance: Component Class; Component Class Parameters | no value text | blank (T1) | yes |
| Behavior → Add/Details Form | no value text (blank) | blank | yes |
| Behavior → Find Form | no value text (blank) | blank | yes |
| Behavior → Property | no value text (blank) | blank | yes |
| Behavior → Right-Click Menu | no value text (blank; the cell holds only its dropdown affordance) | blank (cleared in T2) | **yes** |

Screenshot `t3-05-reopened-item-combobox-behavior-values.png`: Properties header `FX_ItemCombobox (Combobox)`; Add/Details Form, Find Form and Property blank; Right-Click Menu blank; Components row FX_ItemCombobox, ComboBox, `object.FX_Item`, pane 1, tab 20 selected; footer `ScopeType: User`; Save and Undo greyed. The Inheritance rows lie below the frame and were read by accessibility.

### Post-reopen readback: FX_CustomerIDCombobox (read-only; row selected, view state)

| Field | Observed (accessibility; screenshot `t3-06`) | Expected | Match |
| --- | --- | --- | --- |
| Properties header | `FX_CustomerIDCombobox (Combobox)`; Name `FX_CustomerIDCombobox`; Caption `C(FX_CustomerIDS…`; Type ComboBox; From Device Master True | FX_CustomerIDCombobox | yes |
| Binding Type / Binding | `Property` / `object.FX_CustomerID` (Components row: ComboBox, `object.FX_CustomerID`, pane 1, tab 14) | `Property` / `object.FX_CustomerID` | yes |
| Inheritance: View Attributes Inherited From Property | `FX_CustomerID` | `FX_CustomerID` | yes |
| Inheritance: Edit Property Class Extension For Property Class | `FX_CustomerID` | `FX_CustomerID` | yes |
| Inheritance: Set Class From | `This Component's Attribute` | (T1 value) | yes |
| Inheritance: Component Class; Component Class Parameters | no value text | blank (T1) | yes |
| Behavior → Add/Details Form | no value text (blank) | blank | yes |
| Behavior → Find Form | no value text (blank) | blank | yes |
| Behavior → Property | no value text (blank) | blank | yes |
| Behavior → Right-Click Menu | no value text (blank; dropdown affordance only) | blank (cleared in T2) | **yes** |

Screenshot `t3-06-reopened-customerid-combobox-behavior-values.png`: Properties header `FX_CustomerIDCombobox (Combobox)`; Add/Details Form, Find Form, Property and Right-Click Menu blank; Components row FX_CustomerIDCombobox, ComboBox, `object.FX_CustomerID`, pane 1, tab 14 selected; footer `ScopeType: User`; Save and Undo greyed.

### Reconciliation of the Customer ID rows not re-read after the T2 Save

- **Binding:** `object.FX_CustomerID` (the Components-grid row in `t3-06`; and the Binding row of the Data Source group read by accessibility). Unchanged from the T1 baseline and the pre-T2 readback. **Reconciled.**
- **Inheritance:** View Attributes Inherited From Property `FX_CustomerID` and Edit Property Class Extension For Property Class `FX_CustomerID`. Set Class From `This Component's Attribute`. **Reconciled.**
- The Customer ID Right-Click Menu and Add/Details, Find and Property rows are also reconciled above (blank).

### Reading the value differences: none

- No value differed from the expected values for either combobox. **No stop was required.** No correction was made or attempted.

### Designer state at the end of T3

- FX_Orders open (one tab), `ScopeType: User`, **clean** (Save and Undo disabled, Regenerate Form disabled), no dialog, no menu open. The Components row FX_CustomerIDCombobox is selected (view state). The Details panel is expanded (view state).
- No Save invoked in T3. The Designer close/reopen count is **1 / 1**.

### Runtime (tab 1)

- **Not selected and not touched in T3** (by instruction). The runtime FX_Orders Form remains as left at the end of T1 (clean, order 1, Filter in Place, F4 applied, no menu open); its state after the T2 Save has not been re-observed in T3 (not in scope).

### Screenshots (T3)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/t3-01-designer-after-close-no-prompt.png` | Empty canvas after the Form tab close; no FX_Orders tab; Save greyed; `ScopeType: User`; Properties empty. | The close completed with no prompt visible in the frame; no dirty state shown. | The reopen; the stored definition. |
| `evidence/EXP-086/t3-02-designer-reopened-fx-orders-before-components-tab.png` | Reopened FX_Orders canvas (Order Number … Order Total); Properties panel showing Form-level values (`Name FX_Orders`, `Version User version for us…`, `Is Master True`); Details collapsed; Save and Undo greyed; `ScopeType: User`. | The reopen through the Form menu; User scope; clean toolbar. | The component values (Details collapsed in this frame). |
| `evidence/EXP-086/t3-03-designer-components-grid-after-details-expand.png` | Details expanded; Components tab with Pane (00) and Pane (01) collapsed; Save greyed. | Details expanded (view state); pane folders collapsed. | Component values. |
| `evidence/EXP-086/t3-04-components-pane01-expand-attempt.png` | Pane (01) row selected; still collapsed (the ArrowRight press moved the cell focus only). | That the ArrowRight press did not change any property; Save still greyed. | Component rows (not expanded in this frame). |
| `evidence/EXP-086/t3-05-reopened-item-combobox-behavior-values.png` | FX_ItemCombobox Properties: Add/Details Form, Find Form, Property and Right-Click Menu blank; Components row `object.FX_Item`; footer `ScopeType: User`; Save and Undo greyed. | **AC-2** (Item Right-Click blank after the reopen) and the other Behavior values in the frame. | Inheritance rows (below frame; accessibility only); persistence beyond this session. |
| `evidence/EXP-086/t3-06-reopened-customerid-combobox-behavior-values.png` | FX_CustomerIDCombobox Properties: Add/Details Form, Find Form, Property and Right-Click Menu blank; Components row `object.FX_CustomerID`; footer `ScopeType: User`; Save and Undo greyed. | **AC-2** (Customer ID Right-Click blank after the reopen). | Inheritance rows (accessibility only); persistence beyond this session. |

### Action audit (T3, exact; 39 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t3-00` | Designer FX_Orders |
| 4 | `browser_find` regex (ScopeType/Save/Undo/alertdialog) | User scope; clean |
| 5 | `browser_click` `e247` (Form tab close, **once**) | Closed; no prompt |
| 6 | `browser_find` regex (dialog/alertdialog/Discard/Yes/No) | None |
| 7 | `browser_take_screenshot` `t3-01` | Empty canvas; no tab |
| 8 | `browser_find` "Form" menu button | Form button `e3` |
| 9 | `browser_click` `e3` (Form menu, one click) | Menu opened |
| 10 | `browser_find` menuitem list | FX_Orders recent entry `e1929` |
| 11 | `browser_click` `e1929` (FX_Orders recent-forms, **once**) | FX_Orders tab opened |
| 12 | `browser_find` regex (ScopeType/Save/Undo/tab) | User scope; clean; no dialog |
| 13 | `browser_find` "heading Components" / FX_ItemCombobox | No match (Details collapsed) |
| 14 | `browser_take_screenshot` `t3-02` | Reopened; Details collapsed |
| 15 | `browser_find` regex (Details/Expand/Collapse) | `Expand Panel` `e2163` |
| 16 | `browser_click` `e2163` (Details Expand Panel, view) | Details expanded |
| 17 | `browser_find` heading Components | Tab `e2283` |
| 18 | `browser_click` `e2283` (Components tab, view) | Components selected |
| 19 | `browser_find` "FX_ItemCombobox" | No match (panes collapsed) |
| 20 | `browser_take_screenshot` `t3-03` | Panes collapsed |
| 21 | `browser_find` regex "Pane (01)/Pane (00)" | Refs `e2418`, `e2443` |
| 22 | `browser_click` `e2443` (Pane (01) row, view) | Row selected; still collapsed |
| 23 | `browser_find` "FX_ItemCombobox" | No match |
| 24 | `browser_find` regex (Pane (01)/treeitem/ComboBox) | Pane (01) active; collapsed |
| 25 | `browser_press_key` ArrowRight (**once**) | Moved focus to the Type cell only; not expanded |
| 26 | `browser_find` "FX_ItemCombobox" | No match |
| 27 | `browser_take_screenshot` `t3-04` | Still collapsed |
| 28 | `browser_find` button Expand/Collapse | Components `Expand` `e2355` |
| 29 | `browser_click` `e2355` (Components Expand, view, **once**) | Panes expanded |
| 30 | `browser_find` "FX_ItemCombobox" | Row `e3021` |
| 31 | `browser_click` `e3021` (Item row, view) | Row selected; Component properties shown |
| 32 | `browser_find` Item property regex | Behavior blank; Right-Click blank; Inheritance `FX_Item` |
| 33 | `browser_take_screenshot` `t3-05` | Item Behavior values visible |
| 34 | `browser_find` "FX_CustomerIDCombobox" | Row `e2871` |
| 35 | `browser_click` `e2871` (Customer ID row, view) | Row selected |
| 36 | `browser_find` Customer ID property regex | Right-Click blank; Inheritance `FX_CustomerID` |
| 37 | `browser_find` broad property regex (Binding, Inheritance, Behavior) | Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID` ×2; Add/Details, Find, Property, Right-Click blank |
| 38 | `browser_take_screenshot` `t3-06` | Customer ID Behavior values visible |
| 39 | `browser_find` regex (Save/Undo/alertdialog/ScopeType/tab) | Clean; User scope; no dialog |

**T3 counts (exact):** browser calls **39**. Tab lists **1**; tab selects **1** (succeeded; tab 0 only); snapshots **1** (`t3-00`); finds **20**; element clicks **9** (`e247` close ×1; `e3` Form ×1; `e1929` recent-forms ×1; `e2163` Details expand ×1; `e2283` Components tab ×1; `e2443` Pane (01) row ×1; `e2355` Components Expand ×1; `e3021` Item row ×1; `e2871` Customer ID row ×1); coordinate clicks **0**; key presses **1** (ArrowRight ×1); typed text **0**; screenshots **6** (`t3-01` to `t3-06`; all succeeded); mouse, wheel, drag, dialog or file actions **0**; Save clicks **0**; JavaScript, evaluate, console or network inspection **0**; navigations **0**. Browser errors or timeouts **0**; ref-not-found **0**; fresh-snapshot recovery allowance used **0**. Actions issued one at a time.

**Mongoose mutations and lifecycle (T3), exact:**
- Designer close **1**; Designer reopen **1** (both through the Designer Form tab and Form menu recent-forms; no direct navigation).
- Designer Save **0** (none in T3; the T2 Save count of 1 stands).
- Right-Click Menu clears **0** in T3 (the two T2 clears stand).
- Component or property changes **0** (all Components actions were view state: pane and row selection, tree expansion, panel expansion, and one focus-only ArrowRight).
- Runtime actions **0** (tab 1 not selected in T3).
- Choices from a Right-Click Menu list **0**. Designer toolbar Delete **0**. Regenerate Form **0**.
- Unloads **0** (Web Client and Designer).
- Checkout, check-in, undo checkout **0**. FormSync, deployment **0**. Re-logins **0**. Session-expiry procedure **not invoked** (no expiry or sign-in observed).

### Cumulative browser action audit (EXP-086, T1 + T2 + T3; reconciled)

| Category | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| Browser calls | 45 | 31 | 39 | **115** |
| Tab lists | 1 | 1 | 1 | 3 |
| Tab selects | 2 | 1 | 1 | 4 |
| Snapshots (untargeted) | 2 | 1 | 1 | 4 |
| Finds | 18 | 12 | 20 | **50** |
| Screenshots | 8 | 6 | 6 | **20** |
| Element clicks (ref) | 9 | 6 | 9 | 24 |
| Coordinate clicks | 2 | 0 | 0 | 2 |
| Key presses | 3 | 4 | 1 | 8 |
| Right-Click Menu clears | 0 | 2 | 0 | **2 of 2** |
| Designer Save | 0 | 1 | 0 | **1 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 1 / 1 | **1 / 1** |
| Runtime FX_Orders opens / closes / reopens | 1 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 0 / 0 (close and reopen pending) |
| Runtime F4 | 1 | 0 | 0 | 1 |
| Runtime right-clicks | 2 | 0 | 0 | 2 |
| Runtime Escapes / blank-area dismissals | 2 / 2 | 0 / 0 | 0 / 0 | 2 / 2 |
| Details / Add / Find chosen | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0 (Details pending: 2)** |
| Web Client unloads (contingency only) | 0 | 0 | 0 | 0 (budget 1) |
| Designer unloads | 0 | 0 | 0 | 0 |
| Runtime edits / records typed / New, Save, Delete | 0 | 0 | 0 | 0 |
| Other component or property changes | 0 | 0 | 0 | 0 |
| Checkout actions / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |

Reconciliation: the T1 and T2 counts are unchanged. Each T3 count is the T3 table above. Checks: finds 20 + element clicks 9 + key presses 1 + tab lists 1 + tab selects 1 + snapshots 1 + screenshots 6 = 39 = T3 browser calls. Cumulative: 50 + 24 + 8 + 3 + 4 + 4 + 20 = 113 + 2 coordinate clicks = 115 = cumulative browser calls.

### Worker-written file inventory (T3)

- `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` (updated: status header; this T3 section).
- `evidence/EXP-086/t3-00-designer-fresh-snapshot-before-close.yml` (snapshot saved by the tool at the requested path).
- `evidence/EXP-086/t3-01-designer-after-close-no-prompt.png`
- `evidence/EXP-086/t3-02-designer-reopened-fx-orders-before-components-tab.png`
- `evidence/EXP-086/t3-03-designer-components-grid-after-details-expand.png`
- `evidence/EXP-086/t3-04-components-pane01-expand-attempt.png`
- `evidence/EXP-086/t3-05-reopened-item-combobox-behavior-values.png`
- `evidence/EXP-086/t3-06-reopened-customerid-combobox-behavior-values.png`

T3 total: **7 worker-created files** (1 YAML snapshot, 6 PNG) and **1 updated record**. Cumulative for EXP-086 (T1 + T2 + T3): **25 worker-created files** (1 record created in T1; 24 evidence files: 10 from T1, 7 from T2, 7 from T3) plus the record updated in T2 and T3. The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-14T06-52-42-405Z.yml`, `console-2026-10-14T06-51-39-161Z.log`); those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git.

### Acceptance (T3)

| AC | T3 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (T1 baseline; reconfirmed before the close: FX_Orders User scope and clean; Binding and Inheritance as expected). | `t3-00` snapshot; T1 `preflight-01`, `preflight-02`. | Same session. |
| AC-2 | **SUPPORTED (same-session UI observation).** Both component-level Right-Click Menus cleared in T2 (blank after focus moved); all other recorded values unchanged (Binding, Inheritance both rows, Add/Details Form, Find Form, Property, Component Class); exactly one Designer Save in T2 with its native response verbatim; **after one Designer close/reopen both Right-Click Menus read blank** (`t3-05`, `t3-06`); the Customer ID Binding and Inheritance rows are reconciled. | `t2-02`, `t2-04` (clears); `t2-05` (Save response); `t3-05`, `t3-06` (post-reopen). | Same browser session; the reopen is a client Designer reopen, not a database read or a new session; no replay or cross-session durability is claimed. |
| AC-3 | **NOT RUN** (runtime close/reopen and post-change menus are the next task). | — | — |
| AC-4 | **NOT RUN.** | — | — |
| AC-5 | **Partial.** Carry-forward audit (115 calls; clears 2 of 2; Save 1 of 1; Designer close/reopen 1 of 1) recorded above. | Audit and inventory above | Final report after all tasks. |

### Knowledge state (per finding; T3)

| Finding | State |
| --- | --- |
| Designer close via the Form tab close control raised no prompt after the T2 Save | **observed** (one run, T3; `t3-01`) |
| Reopen through Form > recent-forms FX_Orders opened a clean User-scoped Designer Form | **observed** (one run, T3; `t3-02`) |
| After the reopen, FX_ItemCombobox's Right-Click Menu is blank; Add/Details, Find and Property are blank; Binding `object.FX_Item`; Inheritance `FX_Item` | **observed** (one run, T3; `t3-05`; Inheritance by accessibility) |
| After the reopen, FX_CustomerIDCombobox's Right-Click Menu is blank; Add/Details, Find and Property are blank; Binding `object.FX_CustomerID`; Inheritance `FX_CustomerID` (both rows, now read) | **observed** (one run, T3; `t3-06`; Binding and Inheritance by accessibility) |
| The T2 clears persisted across one Designer close/reopen in this session | **observed** (same session; not database durability) |
| Persistence across a server or session boundary | **unresolved** (not tested; no new session or cache step in EXP-086 so far) |
| The Delete-key clear route (focus, Delete, Tab) for the two FX_ comboboxes | **observed** (two runs, T2; candidate_procedure until the runtime check confirms the inherited menu) |

### Deviations and limits (T3)

- **D1:** The Designer's Details panel was collapsed after the reopen. It was expanded once, and the Components grid's Pane folders were expanded once (view state). Not a Form change.
- **D2:** One ArrowRight press was intended to expand the Pane (01) row but moved only the cell focus. The row was not expanded by it; the Components grid's Expand button was used instead. The press changed no property.
- **D3:** The brief said "Details > Components ... select FX_ItemCombobox". The grid was collapsed by pane after the reopen; the row was reached after the pane expansion. No other row was selected.
- **D4:** The Customer ID Inheritance rows, not re-read after the T2 Save, are now read (accessibility) and match.
- **D5:** The Inheritance rows lie below the screenshot frames; they were read by accessibility only.
- **D6:** The runtime FX_Orders tab was not re-observed in T3 (by instruction). Its state after the T2 Save is therefore not re-verified in this task.

### Next permitted action (requires the coordinator's authorization for the next task)

1. **T4 (runtime check 2, drill-downs):** the Designer is clean and needs no further action (leave it open; do not Save). In the Web Client, select tab 1 (list tabs first); the runtime FX_Orders tab is the one from T1 (clean, order 1). Close it once (Close Panel control; clean, no prompt expected), reopen once through Form > Open > Select Form (FX_Orders row, OK), Filter in Place if needed, blank criteria, F4 once; on order 1 right-click the Item combobox once and record the menu verbatim (expect `Add...`, `Details...`, `Find...`, `Help`), screenshot, dismiss without choosing; repeat for the Customer ID combobox. Contingency unload only if Details, Add and Find are all absent. Then Details once on each combobox (FX_Items on dumbbell 45 pound iron; FX_HelloWorld01 on FX001), closing each drill-down clean; close FX_Orders once at the end.

Classification for all T3 findings: **observed only, NOT replay_verified.**

---

## T4 — Runtime menu verification after the Designer changes: ONE runtime close, ONE reopen (Form > Open > Select Form), ONE blank-criteria F4, two right-clicks (Item, Customer ID), no command chosen, no cache operation (cycle 3)

Task T4 (bounded instruction: verify the runtime FX_Orders menus after the Designer changes; close the clean runtime Form once; reopen once through Form > Open > Select Form; initial mode; Filter in Place if needed; blank criteria; F4 once; right-click each combobox once on order 1; record every command verbatim; dismiss without choosing; determine whether each menu offers Add..., Details..., Find...; stop without the cache operation if a required command is missing, otherwise leave FX_Orders open and clean on order 1 for a separately authorized drill-down). Run `R-20261014-144223-SAFC`, experiment EXP-086, cycle 3, task T4, task_message_id `d621ef71-803d-4947-b872-803455dc03e9`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14.

### Source review (T4)

- The T4 brief's source reads were completed in the earlier tasks (EXP-085 outcome; EXP-069-R2 T6–T8 by section; EXP-069-R4 outcome; EXP-083 T5). No additional source was read in T4 (the bounded T4 instruction is a runtime-only check).

### Starting state (verified before the close)

- Tab list (first browser call; before any selection): tab 0 Designer (`MGForm=FX_Orders`); tab 1 Web Client (`favoriteContext=FX_Orders`). Tab 1 selected (succeeded).
- Fresh snapshot `evidence/EXP-086/t4-00-webclient-fresh-snapshot-before-close.yml`. Find: runtime tab `FX_Orders` selected (heading); status `Customer ID (Object 1 of 2)`; toolbar Save `[disabled]`; no `menu`, no `menuitem`, no alertdialog or dialog, no Session Expired, no sign-in, no portal banner. **Clean; order 1 showing; no menu or dialog open.** Screenshot `t4-01-runtime-before-close-state.png`: FX_Orders tab selected; order 1 row 1; Customer ID FX001 / Customer Name Factory test one / Address 1 Factory Street / Item dumbbell / Item Description 45 pound iron / Cost 45.00 / Count 2 / Order Total 90.00; picture shown; Save greyed.
- The Designer tab was not selected in T4.

### Runtime close (ONE)

- One click on the runtime tab control `Close Panel FX_Orders` (`f1e104`). **No prompt** (find for alertdialog, dialog, Save new record, Yes/No returned no match). The tab closed; the remaining tab is the pre-existing `IDO Properties` Form (not touched). The URL returned to `favoriteContext=IdoProperties`.

### Runtime reopen (ONE) and initial mode

- Form menu (one click) → `Open` (one click) → Select Form dialog listing one row `FX_Orders` (filter `FX_Orders` pre-filled). Selected the row (one click); OK (one click). The FX_Orders runtime tab opened and is selected (URL `favoriteContext=FX_Orders`).
- **Initial mode (observed; screenshot `t4-02-runtime-reopened-initial-mode.png`):** add-mode placeholder: blank row with the new-row star; Order Number shows the placeholder value (text selected, not typed); Customer ID, Item empty; Count 1; status bar `Order Number (Object 1 of 1)`. Not Filter in Place, so the switch applied.
- **Filter in Place (ONE click on the FiP toolbar button, `f1e38`).** Status bar then read `Filter in Place`; all criteria blank (verified by find and the screenshot `t4-02` / `t4-03`). The Delete toolbar button (adjacent) was not clicked.

### Query (ONE blank-criteria F4)

- F4 pressed once with every criterion blank. Result: **two rows** (row-number cells `1` and `2`). Order 1 values (screenshot `t4-03-runtime-after-f4-loaded-order-1.png`): Order Number `1`; Customer ID `FX001`; Customer Name `Factory test one`; Address `1 Factory Street`; Item `dumbbell`; Item Description `45 pound iron`; Cost `45.00`; Count `2`; Order Total `90.00`; picture shown; status bar `Customer ID (Object 1 of 2)`. **Matches the expected order 1 (FX001, dumbbell, 45 pound iron).** Row 2 was not opened.
- The Customer ID combobox had focus with its text selected after the F4 (the same state as T1). No text was typed into it.

### Item combobox right-click (ONE) — menu, verbatim and in order

- One right-click on the Item combobox (`dumbbell`, order 1; `f1e1299`).
- **Menu items, verbatim, in display order:** `Add...` ; `Details...` ; `Find...` ; `Help`. (Four items; accessibility `menuitemcheckbox` / `menuitem` nodes `Add...`, `Details...`, `Find...`, `Help`, in that order.)
- Screenshot `t4-04-runtime-item-combobox-menu-after-change.png`: the menu under the Item combobox with `Add...`, `Details...`, `Find...`, `Help`; the Item value `dumbbell` highlighted; order 1 values (FX001, Factory test one, 45 pound iron, 45.00, count 2, 90.00) visible; status `Item (Object 1 of 2)`; Save greyed.
- **Required commands present: Add... yes; Details... yes; Find... yes.**
- Dismissal: one **Escape** (`browser_press_key`): the menu was **not** dismissed (find still returned all four items). One click on blank Form space at (1200, 700): menu dismissed (find: no menu); Save `[disabled]`; status `Item (Object 1 of 2)`; Item value still `dumbbell`. **No menu command was chosen.**

### Customer ID combobox right-click (ONE) — menu, verbatim and in order

- One right-click on the Customer ID combobox (`FX001`, order 1; `f1e1271`).
- **Menu items, verbatim, in display order:** `Add...` ; `Details...` ; `Find...` ; `Help`.
- Screenshot `t4-05-runtime-customerid-combobox-menu-after-change.png`: the menu under the Customer ID combobox with `Add...`, `Details...`, `Find...`, `Help`; the Customer ID value `FX001` highlighted; Item still `dumbbell` (order 1); status `Customer ID (Object 1 of 2)`; Save greyed.
- **Required commands present: Add... yes; Details... yes; Find... yes.**
- Dismissal: one **Escape**: the menu was **not** dismissed. One click on blank Form space at (1200, 700): menu dismissed (find: no menu); Save `[disabled]`; status `Customer ID (Object 1 of 2)`. **No menu command was chosen.**

### Final runtime state (screenshot `t4-06-runtime-final-state-after-dismissal.png`)

- FX_Orders runtime tab open and selected (plus the pre-existing `IDO Properties` tab); order 1 (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, count 2, 90.00); status `Customer ID (Object 1 of 2)`; Save `[disabled]`; no menu, no dialog. **Clean on order 1.**
- Not closed (by instruction: the close is the final-task step, after the drill-downs). No Details clicked; no Add or Find; no record edit; no typing.

### Conditional cache operation (NOT invoked)

- Condition (brief): invoke the cache operation **only if** the runtime check shows no Details, Add or Find on a combobox. **Condition not met**: both combobox menus show Details, Add and Find. Unload count **0**. The Web Client `Unload All Global Form Objects` was not invoked; the Designer unload was not used.

### Acceptance (T4)

| AC | T4 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (T1 baseline; reconfirmed in T2 and T3 before the changes; the T4 runtime baseline menus were recorded in T1 as `Help`). | T1 `preflight-01`, `preflight-02`, `rt-04`, `rt-05`. | Same session. |
| AC-2 | **Supported** (T3: both Right-Click Menus blank after one Designer close/reopen; the single Save in T2). | T2 `t2-02`, `t2-04`, `t2-05`; T3 `t3-05`, `t3-06`. | Same session; not database durability. |
| AC-3 | **SUPPORTED (same-session UI observation).** After ONE runtime close/reopen and ONE blank-criteria F4, the Item menu offers `Add...`, `Details...`, `Find...`, `Help`, and the Customer ID menu offers the same. The contingency unload: **used 0 times** (its condition was not met). | `t4-04` (Item menu), `t4-05` (Customer ID menu), `t4-03` (F4 result), `t4-06` (final). | The menus were observed on one runtime open; not replay verification. |
| AC-4 | **NOT RUN** (drill-downs are the next task; authorization to proceed was not part of T4). | — | — |
| AC-5 | **Partial** (the carry-forward audit below; the final report is written after the drill-downs and final close). | Audit and inventory below | — |

### Knowledge state (per finding; T4)

| Finding | State |
| --- | --- |
| Runtime FX_Orders close (Close Panel control) raised no prompt when clean | **observed** (one run, T4; `t4-01`) |
| Reopen via Form > Open > Select Form presents the add-mode placeholder; Filter in Place switch and one blank-criteria F4 return two orders | **observed** (one run, T4; `t4-02`, `t4-03`; consistent with T1) |
| After the Designer Right-Click Menu clears, the runtime Item combobox right-click on order 1 offers `Add...`, `Details...`, `Find...`, `Help` | **observed** (one run, T4; `t4-04`) |
| After the same change, the runtime Customer ID combobox right-click on order 1 offers `Add...`, `Details...`, `Find...`, `Help` | **observed** (one run, T4; `t4-05`) |
| Both runtime menus were produced without any cache unload, after a runtime close/reopen | **observed** (one run, T4; the unload was not invoked) |
| Escape does not dismiss the runtime context menu; one blank-area click does (no command chosen) | **observed** (T1 and T4, four presses in total) |
| The menu definition is the extension's (inherited) definition, now that the component-level override is blank | **candidate_procedure** (consistent with the EXP-069-R4 accepted run and with the cleared component values; not separately proven here) |
| Persistence of the runtime menu across a server or session boundary | **unresolved** (not tested) |

### Screenshots (T4)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/t4-01-runtime-before-close-state.png` | Runtime FX_Orders tab selected; order 1 (FX001, dumbbell, 45 pound iron); Save greyed; no menu. | The pre-close state: clean, order 1, no menu. | The stored data beyond the screen values. |
| `evidence/EXP-086/t4-02-runtime-reopened-initial-mode.png` | Reopened FX_Orders in add-mode placeholder; status `Order Number (Object 1 of 1)`; Save greyed. | The initial mode after the Select Form open. | Filter in Place (after the switch: see t4-03). |
| `evidence/EXP-086/t4-03-runtime-after-f4-loaded-order-1.png` | Filter in Place; F4 result; order 1 values; status `Customer ID (Object 1 of 2)`; Save greyed. | The blank-criteria F4 loaded two orders; order 1 = FX001 / dumbbell / 45 pound iron. | Row 2 content (not opened). |
| `evidence/EXP-086/t4-04-runtime-item-combobox-menu-after-change.png` | The Item combobox menu: `Add...`, `Details...`, `Find...`, `Help`; Item `dumbbell` highlighted; order 1 visible. | The Item menu contents on this right-click **after** the change. | That the menu items are the definition beyond this run; Details not invoked. |
| `evidence/EXP-086/t4-05-runtime-customerid-combobox-menu-after-change.png` | The Customer ID combobox menu: `Add...`, `Details...`, `Find...`, `Help`; `FX001` highlighted; Item `dumbbell`. | The Customer ID menu contents **after** the change. | As for t4-04. |
| `evidence/EXP-086/t4-06-runtime-final-state-after-dismissal.png` | After both dismissals: no menu; FX_Orders clean; order 1; status `Customer ID (Object 1 of 2)`. | The final runtime state of T4: clean, on order 1, menu closed. | Drill-downs (not run). |

### Action audit (T4, exact; 38 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current; tab 1 runtime FX_Orders |
| 2 | `browser_tabs` select 1 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t4-00` | Runtime FX_Orders; order 1; no menu/dialog |
| 4 | `browser_find` regex (menu/dialog/Save/Close Panel/Object/Session) | Clean; no menu; order 1 |
| 5 | `browser_take_screenshot` `t4-01` | Pre-close state |
| 6 | `browser_click` `f1e104` (Close Panel FX_Orders, **once**) | Closed; no prompt |
| 7 | `browser_find` regex (alertdialog/Save new/Yes/No/tab) | None; IDO Properties remains |
| 8 | `browser_find` Form / Open / Explorer | Form button `f1e10` |
| 9 | `browser_click` `f1e10` (Form menu) | Menu opened |
| 10 | `browser_find` menuitem Open | `f1e1051` |
| 11 | `browser_click` `f1e1051` (Open) | Select Form opened |
| 12 | `browser_find` Select Form dialog | Row `f1e1121`; OK `f1e1149` |
| 13 | `browser_click` `f1e1121` (FX_Orders row) | Row selected |
| 14 | `browser_find` OK / row | OK present |
| 15 | `browser_click` `f1e1149` (OK, **once**) | FX_Orders opened |
| 16 | `browser_find` Object / Filter in Place / Save | Add-mode placeholder; Object 1 of 1; Save disabled |
| 17 | `browser_take_screenshot` `t4-02` | Initial mode |
| 18 | `browser_click` `f1e38` (Filter in Place, **once**) | Status Filter in Place |
| 19 | `browser_find` textbox Filter in Place / combobox | Filter in Place; criteria blank |
| 20 | `browser_press_key` F4 (**once**) | Two rows loaded |
| 21 | `browser_take_screenshot` `t4-03` | Order 1 values |
| 22 | `browser_find` combobox Item / Customer ID | Refs `f1e1299`, `f1e1271` |
| 23 | `browser_click` `f1e1299` (Item, right button, **once**) | Menu opened |
| 24 | `browser_find` menuitem list | `Add...`, `Details...`, `Find...`, `Help` |
| 25 | `browser_take_screenshot` `t4-04` | Item menu visible |
| 26 | `browser_press_key` Escape (**once**) | Not dismissed |
| 27 | `browser_find` menu | Still open |
| 28 | `browser_mouse_click_xy` (1200, 700) (blank Form space, **once**) | Dismissed; no command chosen |
| 29 | `browser_find` menu / Save / Object | Menu gone; Save disabled; Item Object 1 of 2 |
| 30 | `browser_find` combobox Customer ID | Ref `f1e1271` (fresh) |
| 31 | `browser_click` `f1e1271` (Customer ID, right button, **once**) | Menu opened |
| 32 | `browser_find` menuitem list | `Add...`, `Details...`, `Find...`, `Help` |
| 33 | `browser_take_screenshot` `t4-05` | Customer ID menu visible |
| 34 | `browser_press_key` Escape (**once**) | Not dismissed |
| 35 | `browser_find` menu | Still open |
| 36 | `browser_mouse_click_xy` (1200, 700) (blank Form space, **once**) | Dismissed; no command chosen |
| 37 | `browser_find` menu / Save / Object | Menu gone; Save disabled; Customer ID Object 1 of 2 |
| 38 | `browser_take_screenshot` `t4-06` | Final runtime state |

**T4 counts (exact):** browser calls **38**. Tab lists **1**; tab selects **1** (tab 1, succeeded); snapshots **1** (`t4-00`); finds **16**; screenshots **6** (`t4-01` to `t4-06`; all succeeded); element clicks **8** (runtime close ×1; Form menu ×1; Open ×1; Select Form row ×1; OK ×1; Filter in Place ×1; Item right-click ×1; Customer ID right-click ×1); coordinate clicks **2** (blank-space dismissals); key presses **3** (F4 ×1; Escape ×2); typed text **0**; drags, file, dialog or mouse-wheel actions **0**; Save clicks **0**; Designer actions **0**; JavaScript, evaluate, console or network inspection **0**; navigations **0**. Browser errors or timeouts **0**; ref-not-found **0**; fresh-snapshot recovery allowance used **0**. Actions issued one at a time.

**Mongoose mutations and lifecycle (T4), exact:**
- Runtime FX_Orders close **1**; runtime reopen (Select Form) **1**.
- Runtime F4 **1**. Filter in Place switch **1**.
- Runtime right-clicks **2** (Item **1**; Customer ID **1**). Escapes **2** (none dismissed). Blank-area dismissals **2**.
- **Details chosen 0. Add chosen 0. Find chosen 0.** No menu command chosen at all.
- Runtime edits **0**; records typed **0**; runtime New, Save or Delete **0**; list values chosen **0**.
- Drill-down Forms opened **0**; drill-down Forms edited **0**.
- Designer actions **0** (Designer tab not selected); Designer Save **0**; Designer close/reopen **0**.
- Right-Click Menu clears **0** in T4 (the two T2 clears stand).
- Web Client unload (Unload All Global Form Objects) **0**; Designer unload **0** (not used).
- Component or property changes **0**.
- Checkout, check-in, undo checkout **0**. FormSync, deployment, regeneration **0**. Re-logins **0**. Session-expiry procedure **not invoked**.

### Cumulative browser action audit (EXP-086, T1 + T2 + T3 + T4; reconciled)

| Category | T1 | T2 | T3 | T4 | Cumulative |
| --- | --- | --- | --- | --- | --- |
| Browser calls | 45 | 31 | 39 | 38 | **153** |
| Tab lists | 1 | 1 | 1 | 1 | 4 |
| Tab selects | 2 | 1 | 1 | 1 | 5 |
| Snapshots (untargeted) | 2 | 1 | 1 | 1 | 5 |
| Finds | 18 | 12 | 20 | 16 | **66** |
| Screenshots | 8 | 6 | 6 | 6 | **26** |
| Element clicks (ref) | 9 | 6 | 9 | 8 | 32 |
| Coordinate clicks | 2 | 0 | 0 | 2 | 4 |
| Key presses | 3 | 4 | 1 | 3 | 11 |
| Right-Click Menu clears | 0 | 2 | 0 | 0 | **2 of 2** |
| Designer Save | 0 | 1 | 0 | 0 | **1 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **1 / 1** |
| Runtime FX_Orders opens (Select Form) | 1 | 0 | 0 | 1 | **2** |
| Runtime FX_Orders closes | 0 | 0 | 0 | 1 | **1** (the final close is pending) |
| Runtime F4 (blank criteria) | 1 | 0 | 0 | 1 | **2** |
| Runtime Filter in Place switches | 1 | 0 | 0 | 1 | **2** |
| Runtime right-clicks | 2 | 0 | 0 | 2 | **4** (Item 2; Customer ID 2) |
| Runtime Escapes / blank-area dismissals | 2 / 2 | 0 / 0 | 0 / 0 | 2 / 2 | **4 / 4** |
| Details / Add / Find chosen | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | **0 / 0 / 0 (Details: 2 required, pending)** |
| Web Client unloads (contingency) | 0 | 0 | 0 | 0 | **0** (budget 1; condition not met) |
| Designer unloads | 0 | 0 | 0 | 0 | 0 |
| Runtime edits / records typed / New, Save, Delete | 0 | 0 | 0 | 0 | 0 |
| Other component or property changes | 0 | 0 | 0 | 0 | 0 |
| Checkout actions / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |

Reconciliation: T4 checks — finds 16 + screenshots 6 + element clicks 8 + coordinate clicks 2 + key presses 3 + tab lists 1 + tab selects 1 + snapshots 1 = 38 = T4 browser calls. Cumulative: tab lists 4 + tab selects 5 + snapshots 5 + finds 66 + screenshots 26 + element clicks 32 + coordinate clicks 4 + key presses 11 = 153 = cumulative browser calls. Earlier tasks' counts are unchanged.

### Worker-written file inventory (T4)

- `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` (updated: status header; this T4 section).
- `evidence/EXP-086/t4-00-webclient-fresh-snapshot-before-close.yml` (snapshot saved by the tool at the requested path).
- `evidence/EXP-086/t4-01-runtime-before-close-state.png`
- `evidence/EXP-086/t4-02-runtime-reopened-initial-mode.png`
- `evidence/EXP-086/t4-03-runtime-after-f4-loaded-order-1.png`
- `evidence/EXP-086/t4-04-runtime-item-combobox-menu-after-change.png`
- `evidence/EXP-086/t4-05-runtime-customerid-combobox-menu-after-change.png`
- `evidence/EXP-086/t4-06-runtime-final-state-after-dismissal.png`

T4 total: **7 worker-created files** (1 YAML snapshot, 6 PNG) and **1 updated record**. Cumulative for EXP-086 (T1–T4): **32 worker-created files** (1 record created in T1, plus 31 evidence files: 10 from T1, 7 from T2, 7 from T3, 7 from T4) with the record updated in T2–T4. Per-task evidence: T1 10, T2 7, T3 7, T4 7 = 31 evidence files; plus the record = **32 worker-created files**. The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/` (for example `page-2026-10-14T06-56-09-334Z.yml`, `console-2026-10-14T06-55-09-658Z.log`); those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git.

### Current state at the end of T4

- **Runtime (tab 1):** FX_Orders open and selected, **clean** (Save disabled), **on order 1** (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, count 2, Order Total 90.00), status `Customer ID (Object 1 of 2)`, no menu, no dialog, not dirty. The `IDO Properties` runtime tab (pre-existing) remains open and was not touched.
- **Designer (tab 0):** FX_Orders open, `ScopeType: User`, clean (unchanged since T3), no dialog; the Customer ID component row is selected (view state).
- No menu or dialog is open in either tab.

### Deviations and limits (T4)

- **D1:** The runtime reopen presented the add-mode placeholder (as in T1), so Filter in Place was switched on once (as the brief allows).
- **D2:** The Escape presses did not dismiss either context menu (as in T1); one blank-area click dismissed each. Recorded as observed.
- **D3:** The T4 menu is observed after one runtime open; it is not a replay and is not cross-session evidence.
- **D4:** After the F4 the Customer ID field had focus with its text selected. No text was typed into it; the only keys pressed afterwards were the two Escape presses, which were sent while each context menu was open.
- **D5:** The drill-downs were not run (the brief stops T4 after the menu check, and the drill-downs need a separate authorization step). AC-4 is therefore not yet run.

### Next permitted action (requires the coordinator's authorization)

1. **Drill-down task (AC-4):** on the runtime FX_Orders (order 1, clean, Filter in Place, F4 done): right-click the Item combobox once and choose `Details...` once; verify the FX_Items Form opens on dumbbell (description `45 pound iron`); record its tab, record position and mode; close it once (clean, no edits). Then right-click the Customer ID combobox once and choose `Details...` once; verify the FX_HelloWorld01 Form opens on FX001 and record its other visible values; close it once (clean). Return to the runtime FX_Orders and confirm it is clean and on order 1. Then close FX_Orders once at the end (answer No once only if a save-new-record prompt appears). Never choose `Add...` or `Find...`.

Classification for all T4 findings: **observed only, NOT replay_verified.**

---

## T5 — The two authorized Details drill-downs from runtime FX_Orders (order 1): Item → FX_Items on dumbbell; Customer ID → FX_HelloWorld01 on FX001; both closed clean; FX_Orders left open, clean, on order 1 (cycle 4)

Task T5 (bounded instruction: verify FX_Orders runtime start state; Item combobox right-click once, verify Details..., choose Details... once, verify FX_Items on dumbbell, close it once clean; Customer ID right-click once, verify Details..., choose Details... once, verify FX_HelloWorld01 on FX001, close it once clean; return to FX_Orders, clean on order 1; no Add/Find, no runtime edit, no F4, no Save, no Designer change, no unload). Run `R-20261014-144223-SAFC`, experiment EXP-086, cycle 4, task T5, task_message_id `689ee438-6700-4b33-89fc-e8129849cc4d`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14.

### Starting state (verified before any action)

- Tab list (first browser call; before any selection): tab 0 Designer (`MGForm=FX_Orders`); tab 1 Web Client (`favoriteContext=FX_Orders`). Tab 1 selected (succeeded).
- Fresh snapshot `evidence/EXP-086/t5-00-webclient-fresh-snapshot-start.yml`. Find: runtime tab `FX_Orders` selected; IDO Properties tab present (pre-existing, untouched); status `Customer ID (Object 1 of 2)`; Customer ID combobox `FX001`; Item combobox `dumbbell`; Item Description `45 pound iron`; toolbar Save `[disabled]`; no menu, no menuitem, no alertdialog, no dialog, no Session Expired, no sign-in, no portal banner.
- Screenshot `t5-01-runtime-start-state-before-item-details.png`: FX_Orders tab selected; order 1 row 1 (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, count 2, Order Total 90.00); picture shown; Save greyed; no menu.
- **Mode note (observed limit):** the status bar reads a record position (`Customer ID (Object 1 of 2)`), not the mode label. The Filter in Place switch was made in T4 and was not repeated. The mode is therefore recorded as Filter in Place from T4 (not re-read from the status bar in T5).

### ITEM test

- **Right-click (ONE)** on the Item combobox (`dumbbell`, order 1). Menu items, verbatim, in order: `Add...`, `Details...`, `Find...`, `Help`. **Details... visible: yes.** Screenshot `t5-02-runtime-item-menu-before-details.png` (the menu under the Item combobox, with Details... in the second position; dumbbell highlighted; order 1 visible).
- **Details... (ONE)** chosen from that menu (menuitem `Details...`, one click). No other command chosen.
- **Result:** a new runtime tab `FX_Items` opened and was selected (URL `favoriteContext=FX_Items`). The FX_Orders tab remained in the tab strip (the tab strip order: `IDO Properties`, `FX_Orders`, `FX_Items`).
- **FX_Items identity and record (observed; screenshot `t5-03-fx-items-drilldown-opened-dumbbell.png`):**
  - Tab: `FX_Items`, selected, with its close control `Close Panel FX_Items`; positioned as the third tab, to the right of FX_Orders.
  - Record: Item `dumbbell`; Description `45 pound iron` (the Description field holds focus with the text highlighted by default focus; not edited); Cost `45.00`; Unit of Measure `EA`; Unit description `Each` (the Description label next to the picture).
  - Record position: status bar `Description (Object 1 of 1)`; grid row 1 (`dumb…`) selected.
  - Mode: a record view of one object (`Object 1 of 1`), not add mode and not Filter in Place; Save greyed (clean). The Import button and the item picture are shown.
  - **Matches the expected drill-down (dumbbell, 45 pound iron).**

### FX_Items close (ONE)

- One click on the tab control `Close Panel FX_Items` (`f1e339`, from the current snapshot). **No prompt** (find for alertdialog and dialog returned none). Control returned to FX_Orders: tab `FX_Orders` selected; status bar `Item (Object 1 of 2)`; Save `[disabled]`. Screenshot `t5-04-runtime-after-fx-items-closed.png`: FX_Orders on order 1 (FX001, dumbbell, 45 pound iron), clean.

### CUSTOMER ID test

- **Right-click (ONE)** on the Customer ID combobox (`FX001`, order 1; a fresh ref was taken after the FX_Items close, because the first find returned no combobox match; the second find returned it). Menu items, verbatim, in order: `Add...`, `Details...`, `Find...`, `Help`. **Details... visible: yes.** Screenshot `t5-05-runtime-customerid-menu-before-details.png` (menu under the Customer ID combobox; Details... in the second position; FX001 highlighted; order 1 visible).
- **Details... (ONE)** chosen (menuitem `Details...`, one click). No other command chosen.
- **Result:** a new runtime tab `FX_HelloWorld01` opened and was selected (URL `favoriteContext=FX_HelloWorld01`).
- **FX_HelloWorld01 identity and record (observed; screenshot `t5-06-fx-helloworld01-drilldown-opened-fx001.png`):**
  - Tab: `FX_HelloWorld01`, selected, with close control `Close Panel FX_HelloWorld01`; positioned as the third tab, to the right of FX_Orders.
  - Visible values: `Factory test one` (name field, top); `FX001` (customer ID; grey, read-only-looking field); `1 Factory Street` (Address; text area, holds focus; not edited).
  - Grid: row 1 (`Facto…`) selected; the grid's visible column is the name.
  - Record position: status bar `(Object 1 of 1)`.
  - Mode: a record view of one object; Save greyed (clean). Not add mode.
  - **Matches the expected drill-down (FX001).**

### FX_HelloWorld01 close (ONE)

- One click on the tab control `Close Panel FX_HelloWorld01` (`f1e511`). **No prompt.** Control returned to FX_Orders (tab `FX_Orders` selected). Screenshot `t5-07-final-runtime-state-fx-orders-order-1.png`.

### Final runtime state (screenshot `t5-07`; find)

- Tabs: `IDO Properties` (pre-existing, untouched) and `FX_Orders` (selected). `FX_Items` and `FX_HelloWorld01` are closed.
- FX_Orders: order 1 (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, Cost 45.00, Count 2, Order Total 90.00); picture shown; status bar `Customer ID (Object 1 of 2)`; toolbar Save `[disabled]`; **no menu, no dialog, no alertdialog**. **Clean on order 1.**
- FX_Orders is **not** closed (by instruction: the final close is the separately authorized final step). No F4 was run in T5; no record was edited; nothing was typed.

### Acceptance (T5)

| AC | T5 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (T1 baseline; reconfirmed in T2, T3 and the T5 start state: User scope, clean Designer; runtime order 1, clean). | T1 `preflight-01`, `preflight-02`, `rt-04`, `rt-05`; T5 `t5-01`. | Same session. |
| AC-2 | **Supported** (T2 clears; T2 Save; T3 post-reopen readback; unchanged in T4 and T5). | T2 `t2-02`, `t2-04`, `t2-05`; T3 `t3-05`, `t3-06`. | Same session; not database durability. |
| AC-3 | **Supported** (T4: after one runtime close/reopen and one blank-criteria F4, both menus offer Add..., Details..., Find..., Help; unload 0). | T4 `t4-04`, `t4-05`; T5 `t5-02`, `t5-05` (the same menus, before the Details choices). | Same session. |
| AC-4 | **SUPPORTED (same-session UI observation).** Details on the Item combobox opened FX_Items on dumbbell (45 pound iron); Details on the Customer ID combobox opened FX_HelloWorld01 on FX001; both drill-down Forms closed clean with their own close controls and no prompt; FX_Orders still clean on order 1; FX_Orders closed **not yet** (the final close is the separate step). | `t5-03` (FX_Items), `t5-06` (FX_HelloWorld01), `t5-04` (after FX_Items closed), `t5-07` (final). | Drill-down values read from the visible frames and accessibility; the Form-level data source (stored record) is not read; same session. |
| AC-5 | **Partial.** Carry-forward audit (179 calls; see below) and inventory recorded; the final report follows the final close. | Audit and inventory below | — |

### Knowledge state (per finding; T5)

| Finding | State |
| --- | --- |
| Item combobox right-click on order 1 offers `Add...`, `Details...`, `Find...`, `Help` (second run after the Designer change) | **observed** (T4 and T5; `t5-02`) |
| Customer ID combobox right-click on order 1 offers `Add...`, `Details...`, `Find...`, `Help` | **observed** (T4 and T5; `t5-05`) |
| Details... on the Item combobox opens a **new runtime tab** `FX_Items` on the record dumbbell, description `45 pound iron`, Object 1 of 1 | **observed** (one run, T5; `t5-03`) |
| Details... on the Customer ID combobox opens a **new runtime tab** `FX_HelloWorld01` on FX001, name `Factory test one`, address `1 Factory Street`, Object 1 of 1 | **observed** (one run, T5; `t5-06`) |
| Closing a drill-down with its own tab close control, with no edits, raised no prompt | **observed** (two runs, T5; `t5-04`, `t5-07`) |
| The drill-down Form opens on the record that the combobox value identifies (the value is passed as the lookup key) | **observed** (one run each, T5); the lookup mechanism itself is not established |
| Escape does not dismiss a runtime context menu; one blank-area click does | **observed** (T1, T4; not needed in T5, no Escape pressed) |
| Persistence of the drill-down behaviour across a server or session boundary | **unresolved** (not tested) |

### Screenshots (T5)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/t5-01-runtime-start-state-before-item-details.png` | FX_Orders tab selected; order 1 (FX001, dumbbell, 45 pound iron); Save greyed; no menu. | The start state: clean, order 1, no menu open. | The mode label (not in the status bar); the stored data. |
| `evidence/EXP-086/t5-02-runtime-item-menu-before-details.png` | Item combobox menu: `Add...`, `Details...`, `Find...`, `Help`; dumbbell highlighted; order 1. | The menu contents and that Details... is visible before the choice. | That Details... opens the Form (the next frame shows it). |
| `evidence/EXP-086/t5-03-fx-items-drilldown-opened-dumbbell.png` | Tabs `IDO Properties`, `FX_Orders`, `FX_Items` (selected); FX_Items: Item `dumbbell`, Description `45 pound iron`, Cost `45.00`, UM `EA`, `Each`; grid row 1 `dumb…`; status `Description (Object 1 of 1)`; Save greyed. | **AC-4 (Item)**: FX_Items opened on dumbbell with description 45 pound iron; its tab and record position; clean. | The stored record beyond the screen; the lookup mechanism. |
| `evidence/EXP-086/t5-04-runtime-after-fx-items-closed.png` | FX_Orders tab selected again; order 1 (FX001, dumbbell); `IDO Properties` and `FX_Orders` tabs only; Save greyed; status `Item (Object 1 of 2)`. | The FX_Items tab closed and control returned to FX_Orders on order 1. | — |
| `evidence/EXP-086/t5-05-runtime-customerid-menu-before-details.png` | Customer ID combobox menu: `Add...`, `Details...`, `Find...`, `Help`; FX001 highlighted; order 1 with dumbbell. | The menu contents before the Customer ID Details... choice. | That Details... opens the Form (the next frame shows it). |
| `evidence/EXP-086/t5-06-fx-helloworld01-drilldown-opened-fx001.png` | Tabs `IDO Properties`, `FX_Orders`, `FX_HelloWorld01` (selected); name `Factory test one`; ID `FX001`; address `1 Factory Street`; status `(Object 1 of 1)`; Save greyed. | **AC-4 (Customer ID)**: FX_HelloWorld01 opened on FX001; its tab and record position; clean. | The stored record beyond the screen. |
| `evidence/EXP-086/t5-07-final-runtime-state-fx-orders-order-1.png` | `IDO Properties` and `FX_Orders` (selected) tabs; order 1 (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, Cost 45.00, Count 2, Order Total 90.00); picture; status `Customer ID (Object 1 of 2)`; Save greyed; no menu. | The final state: both drill-downs closed; FX_Orders clean on order 1. | That FX_Orders is closed (it is not; the final close is pending). |

### Action audit (T5, exact; 26 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer; tab 1 runtime FX_Orders |
| 2 | `browser_tabs` select 1 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t5-00` | Runtime FX_Orders on order 1 |
| 4 | `browser_find` regex (menu/Save/dialog/Object/combobox/session) | Clean; no menu/dialog; order 1 |
| 5 | `browser_take_screenshot` `t5-01` | Start state |
| 6 | `browser_click` `f1e274` (Item combobox, right button, **once**) | Menu opened |
| 7 | `browser_find` menuitem list | `Add...`, `Details...`, `Find...`, `Help` |
| 8 | `browser_take_screenshot` `t5-02` | Menu before the choice |
| 9 | `browser_click` `f1e329` (`Details...`, **once**) | FX_Items tab opened |
| 10 | `browser_find` tab/heading/record regex | FX_Items selected; dumbbell; `45 pound iron`; Object 1 of 1 |
| 11 | `browser_take_screenshot` `t5-03` | FX_Items on dumbbell |
| 12 | `browser_click` `f1e339` (Close Panel FX_Items, **once**) | Closed; control back to FX_Orders |
| 13 | `browser_find` alertdialog/tab/status | No dialog; FX_Orders selected; Save disabled |
| 14 | `browser_find` combobox Customer ID / Item | No match (aria-hidden tab panel at that moment) |
| 15 | `browser_take_screenshot` `t5-04` | FX_Orders on order 1, clean |
| 16 | `browser_find` combobox / Customer ID | Combobox `f1e485` (FX001) |
| 17 | `browser_click` `f1e485` (Customer ID combobox, right button, **once**) | Menu opened |
| 18 | `browser_find` menuitem list | `Add...`, `Details...`, `Find...`, `Help` |
| 19 | `browser_take_screenshot` `t5-05` | Menu before the choice |
| 20 | `browser_click` `f1e501` (`Details...`, **once**) | FX_HelloWorld01 tab opened |
| 21 | `browser_find` tab/heading/record regex | FX_HelloWorld01 selected; Object 1 of 1 |
| 22 | `browser_find` tabpanel/textbox/Save | Tabpanel FX_HelloWorld01; Save disabled |
| 23 | `browser_take_screenshot` `t5-06` | FX_HelloWorld01 on FX001 |
| 24 | `browser_click` `f1e511` (Close Panel FX_HelloWorld01, **once**) | Closed; control back to FX_Orders |
| 25 | `browser_take_screenshot` `t5-07` | Final state |
| 26 | `browser_find` regex (dialog/menu/Save/tab/Object) | No dialog; no menu; Save disabled; FX_Orders selected |

**T5 counts (exact):** browser calls **26**. Tab lists **1**; tab selects **1** (tab 1, succeeded); snapshots **1** (`t5-00`); finds **10**; screenshots **7** (`t5-01` to `t5-07`; all succeeded); element clicks **6** (Item right-click ×1; Details... Item ×1; Close FX_Items ×1; Customer ID right-click ×1; Details... Customer ID ×1; Close FX_HelloWorld01 ×1); coordinate clicks **0**; key presses **0**; typed text **0**; Save clicks **0**; Designer actions **0**; JavaScript, evaluate, console or network inspection **0**; navigations **0**. Browser errors or timeouts **0**; ref-not-found **0**; fresh-snapshot recovery allowance used **0**.

**Mongoose mutations and lifecycle (T5), exact:**
- **Right-clicks 2** (Item 1; Customer ID 1 each: one each).
- **Details chosen 2** (Item 1; Customer ID 1). Each Details was chosen once; no Details repeated.
- **Add chosen 0. Find chosen 0.** No command other than Details was chosen.
- **Drill-down Forms opened 2** (`FX_Items`; `FX_HelloWorld01`). **Drill-down Forms closed 2**, each with its own tab close control, clean, no prompt. Drill-down Forms edited 0.
- Runtime FX_Orders opens **0**, closes **0** in T5 (still open, clean, order 1).
- Runtime F4 **0**; runtime edits **0**; records typed **0**; runtime New, Save or Delete **0**; list values chosen **0**.
- Designer actions **0**; Designer Save **0**; Designer close/reopen **0**.
- Right-Click Menu clears **0** in T5 (the two T2 clears stand).
- Web Client unload **0**; Designer unload **0**.
- Component or property changes **0**.
- Checkout, check-in, undo checkout **0**. FormSync, deployment, regeneration **0**. Re-logins **0**. Session-expiry procedure **not invoked** (no expiry or sign-in observed).

**Note on the parallel calls (disclosed):** call 2 (tab select) and call 3 (snapshot) were issued in one block, and calls 4 and 5 (a read-only find and a read-only screenshot) in another. The select is a tab navigation and the others are read-only; no two browser mutations ran in parallel.

### Cumulative browser action audit (EXP-086, T1–T5; reconciled)

| Category | T1 | T2 | T3 | T4 | T5 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 45 | 31 | 39 | 38 | 26 | **179** |
| Tab lists | 1 | 1 | 1 | 1 | 1 | 5 |
| Tab selects | 2 | 1 | 1 | 1 | 1 | 6 |
| Snapshots (untargeted) | 2 | 1 | 1 | 1 | 1 | 6 |
| Finds | 18 | 12 | 20 | 16 | 10 | **76** |
| Screenshots | 8 | 6 | 6 | 6 | 7 | **33** |
| Element clicks (ref) | 9 | 6 | 9 | 8 | 6 | 38 |
| Coordinate clicks | 2 | 0 | 0 | 2 | 0 | 4 |
| Key presses | 3 | 4 | 1 | 3 | 0 | 11 |
| Right-Click Menu clears | 0 | 2 | 0 | 0 | 0 | **2 of 2** |
| Designer Save | 0 | 1 | 0 | 0 | 0 | **1 of 1** |
| Designer close / reopen | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | **1 / 1** |
| Runtime FX_Orders opens / closes | 1 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **2 / 1** (final close pending) |
| Runtime F4 (blank criteria) | 1 | 0 | 0 | 1 | 0 | **2** |
| Runtime Filter in Place switches | 1 | 0 | 0 | 1 | 0 | **2** |
| Runtime right-clicks | 2 | 0 | 0 | 2 | 2 | **6** (Item 3; Customer ID 3) |
| Runtime Escapes / blank-area dismissals | 2 / 2 | 0 / 0 | 0 / 0 | 2 / 2 | 0 / 0 | **4 / 4** |
| **Details chosen** | 0 | 0 | 0 | 0 | 2 | **2 of 2** (Item 1; Customer ID 1) |
| Add / Find chosen | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Drill-down Forms opened / closed | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 2 / 2 | **2 / 2** |
| Web Client unloads (contingency) | 0 | 0 | 0 | 0 | 0 | **0** (budget 1; condition not met) |
| Designer unloads | 0 | 0 | 0 | 0 | 0 | 0 |
| Runtime edits / records typed / New, Save, Delete | 0 | 0 | 0 | 0 | 0 | 0 |
| Other component or property changes | 0 | 0 | 0 | 0 | 0 | 0 |
| Checkout actions / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |

Reconciliation: T5 checks — finds 10 + screenshots 7 + element clicks 6 + tab lists 1 + tab selects 1 + snapshots 1 = 26 = T5 browser calls. Cumulative: 5 + 6 + 6 + 76 + 33 + 38 + 4 + 11 = 179 = cumulative browser calls. Earlier tasks' counts are unchanged. Cumulative right-clicks: T1 2 + T4 2 + T5 2 = 6 (Item 3; Customer ID 3). Cumulative Details: 2 (one per combobox, both in T5).

### Worker-written file inventory (T5)

- `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` (updated: status header; this T5 section).
- `evidence/EXP-086/t5-00-webclient-fresh-snapshot-start.yml` (snapshot saved by the tool at the requested path).
- `evidence/EXP-086/t5-01-runtime-start-state-before-item-details.png`
- `evidence/EXP-086/t5-02-runtime-item-menu-before-details.png`
- `evidence/EXP-086/t5-03-fx-items-drilldown-opened-dumbbell.png`
- `evidence/EXP-086/t5-04-runtime-after-fx-items-closed.png`
- `evidence/EXP-086/t5-05-runtime-customerid-menu-before-details.png`
- `evidence/EXP-086/t5-06-fx-helloworld01-drilldown-opened-fx001.png`
- `evidence/EXP-086/t5-07-final-runtime-state-fx-orders-order-1.png`

T5 total: **8 worker-created files** (1 YAML snapshot, 7 PNG) and **1 updated record**. Cumulative for EXP-086 (T1–T5): **40 worker-created files** (1 record created in T1, plus 39 evidence files: T1 10, T2 7, T3 7, T4 7, T5 8). The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/`; those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git.

### Current state at the end of T5

- **Runtime (tab 1):** `IDO Properties` (pre-existing, untouched) and `FX_Orders` (selected). FX_Orders is **open, clean** (Save disabled), **on order 1** (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, count 2, Order Total 90.00), no menu, no dialog. `FX_Items` and `FX_HelloWorld01` are closed.
- **Designer (tab 0):** FX_Orders open, `ScopeType: User`, clean (unchanged since T3), no dialog; the Customer ID component row is selected (view state). Not touched in T5.
- The final FX_Orders runtime close is **not yet performed** (the separately authorized final step).

### Deviations and limits (T5)

- **D1:** The FX_Orders status bar shows the record position, not the mode label; Filter in Place was set in T4 and not re-read in T5.
- **D2:** The first find for the Customer ID combobox after the FX_Items close returned no match (the tab panel was aria-hidden at that moment); a second find returned the combobox. No action was taken on the first result, and no ref was reused from a stale snapshot.
- **D3:** The FX_Items Description field and the FX_HelloWorld01 Address field received focus on open (default focus). No keys were pressed and no text was typed into either.
- **D4:** The FX_HelloWorld01 Form's Name/ID labels are partly truncated in the frame (`:` markers); the values were read from the visible fields and the accessibility tree.
- **D5:** The drill-down Form's data was not read beyond the visible values; the stored record was not queried.
- **D6:** Call 2 (tab select) and call 3 (snapshot) were issued in one block (disclosed above).

### Next permitted action (requires the coordinator's authorization)

1. **Final close (T6, separately authorized):** close the clean runtime FX_Orders once through its tab close control (`Close Panel FX_Orders`); expect no prompt; if a save-new-record prompt appears, answer No once and record it. Then the EXP-086 final report (AC-5) can be written with the full audit.

Classification for all T5 findings: **observed only, NOT replay_verified.**

---

## T6 — Final clean close of the runtime FX_Orders (one close; no prompt); post-close runtime check; Designer left open, clean, User scope (cycle 5)

Task T6 (bounded instruction: confirm the runtime start state; close FX_Orders exactly once with its runtime tab close control; answer any save-new-record prompt No once and record it; otherwise stop safely on any dirty or ambiguous prompt; verify the runtime tab is absent and IDO Properties is untouched; leave the Designer FX_Orders open and clean; no reopen, no F4, no right-click, no Details, no Designer change or Save, no unload; no final acceptance recommendation). Run `R-20261014-144223-SAFC`, experiment EXP-086, cycle 5, task T6, task_message_id `7fe37cb9-117b-4b22-b6aa-412d200c6024`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`. Date 2026-10-14.

### Starting state (verified before the close)

- Tab list (first browser call; before any selection): tab 0 Designer (`MGForm=FX_Orders`); tab 1 Web Client (`favoriteContext=FX_Orders`). Tab 1 selected (succeeded).
- Fresh snapshot `evidence/EXP-086/t6-00-webclient-fresh-snapshot-before-final-close.yml`. Find: runtime tab `FX_Orders` selected (tab `f1e102`, close control `f1e104`); pre-existing `IDO Properties` tab present (`f1e99`, not selected); status `Customer ID (Object 1 of 2)`; Customer ID combobox `FX001`; Item combobox `dumbbell`; toolbar Save `[disabled]`; no `menu`, no `menuitem`, no alertdialog or dialog, no Session Expired, no portal banner. No `FX_Items` or `FX_HelloWorld01` tab present.
- Pre-close screenshot `t6-01-runtime-pre-close-state.png`: FX_Orders tab selected; order 1 (FX001, Factory test one, 1 Factory Street, dumbbell, 45 pound iron, 45.00, count 2, 90.00); picture shown; Save greyed; no menu, no dialog; the IDO Properties tab to the left, not selected.

### Final close (ONE)

- One click on the runtime tab control `Close Panel FX_Orders` (`f1e104`). **Exact sequence:** (1) click; (2) the Web Client's tab strip re-rendered and the tab selection moved to the pre-existing `IDO Properties` tab (URL `favoriteContext=IdoProperties`); (3) no prompt appeared. The find after the close returned no alertdialog, no dialog, no `Save new` text, no menu, and no `FX_Orders`, `FX_Items` or `FX_HelloWorld01` heading.
- **Prompt occurred: NO.** No save-new-record prompt; no dirty-changes prompt; no ambiguous state. **The No answer was therefore not needed and was NOT given (count 0).**
- Post-close screenshot `t6-02-runtime-after-final-close.png`: only the `IDO Properties` Form is visible (title `IDO Properties`, the Property Name / Description / Property Class / Data / Formatting / Domain layout, blank); the status bar reads `Filter in Place`; the toolbar Save is greyed; no menu, no dialog. The FX_Orders tab is absent.

### Runtime final state (observed)

- The FX_Orders runtime tab is **absent** (closed once, clean).
- The pre-existing `IDO Properties` runtime Form is **present and untouched** (it was not selected or edited in T1–T6 beyond the view-state selections that occurred when FX_Orders was opened in front of it; no change to its values). Its status is `Filter in Place`, which is the state it was in before the T1 baseline (observed at T1 `rt-00`).
- No unresolved prompt, no open menu, no open dialog, no unsaved change.
- Runtime FX_Orders has **not** been reopened.

### Designer final state (observed; read-only check)

- Designer tab 0 selected (a tab navigation only). Find: FX_Orders tab `selected` (heading `FX_Orders`, closable); footer `[ ScopeType: User / ScopeName: <operator> ]`; toolbar Save `[disabled]`, Undo `[disabled]`, Regenerate Form `[disabled]`; no alertdialog or in-page dialog.
- Screenshot `t6-03-designer-final-state-fx-orders-clean-user-scope.png`: FX_Orders heading; canvas with the 10 fields; Components tab with `FX_CustomerIDCombobox` selected (view state); Properties panel with `FX_CustomerIDCombobox (Combobox)`, Add/Details Form, Find Form and Property blank, Right-Click Menu blank; footer `ScopeType: User`; Save and Undo greyed.
- The Designer was **not** edited, saved, closed or reopened in T6. Its Form is open and clean in User scope, as the brief required.

### Acceptance (T6 status; final recommendation NOT issued)

| AC | T6 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (T1 baseline; re-observed as the Designer start state in T2, T3, T6). | T1 `preflight-01`, `preflight-02`, `rt-04`, `rt-05`; T6 `t6-03`. | Same session. |
| AC-2 | **Supported** (T2 clears and single Save; T3 post-reopen readback; values unchanged through T6). | T2 `t2-02`, `t2-04`, `t2-05`; T3 `t3-05`, `t3-06`; T6 `t6-03`. | Same session; not database durability. |
| AC-3 | **Supported** (T4 after one runtime close/reopen and one blank-criteria F4: Add..., Details..., Find..., Help on both combobox menus; T5 re-observed). Unload count **0** (condition not met). | T4 `t4-04`, `t4-05`; T5 `t5-02`, `t5-05`. | Same session. |
| AC-4 | **Supported** (T5: FX_Items on dumbbell, 45 pound iron, closed clean; FX_HelloWorld01 on FX001, closed clean). FX_Orders closed once at the end **in T6** (`t6-02`). | T5 `t5-03`, `t5-06`; T6 `t6-02`. | Same session; drill-down values from visible frames and accessibility. |
| AC-5 | **Not issued in T6** (the final acceptance recommendation is deferred to a separate documentation-only audit, per the T6 instruction). Evidence, counts and inventory are complete through T6 (below). | Audit and inventory below | Final recommendation pending. |

### Knowledge state (per finding; T6)

| Finding | State |
| --- | --- |
| The runtime FX_Orders tab closed with its tab close control with no prompt (clean Form, order 1) | **observed** (one run, T6; `t6-01`, `t6-02`) |
| After the close, only the pre-existing IDO Properties runtime Form remains, untouched | **observed** (one run, T6; `t6-02`) |
| The Designer FX_Orders Form remains open, clean, User scope after the T6 runtime close | **observed** (one run, T6; `t6-03`) |
| Save-new-record prompt on close: did not occur (the No answer not needed) | **observed** (one run, T6) |
| Persistence of the EXP-086 state across a server or session boundary | **unresolved** (not tested; no new session or cache step in EXP-086) |

### Screenshots (T6)

| File | What it shows | What it proves | What it does NOT prove |
| --- | --- | --- | --- |
| `evidence/EXP-086/t6-01-runtime-pre-close-state.png` | Runtime FX_Orders tab selected; order 1 (FX001, dumbbell, 45 pound iron, 90.00); Save greyed; no menu or dialog; IDO Properties tab present, not selected. | The pre-close state: FX_Orders clean on order 1, no menu, no dialog. | The stored data beyond the screen values. |
| `evidence/EXP-086/t6-02-runtime-after-final-close.png` | Only the IDO Properties Form (blank layout) visible; status `Filter in Place`; Save greyed; no FX_Orders tab; no menu or dialog. | The FX_Orders runtime tab is absent after the single close; IDO Properties is the remaining Form. | That the runtime FX_Orders was saved or persisted; the IDO Properties Form's stored state. |
| `evidence/EXP-086/t6-03-designer-final-state-fx-orders-clean-user-scope.png` | Designer FX_Orders (clean): footer `ScopeType: User`; Save and Undo greyed; FX_CustomerIDCombobox Properties with Add/Details, Find, Property and Right-Click Menu blank. | The Designer final state: open, clean, User scope; the Customer ID Right-Click Menu blank. | Persistence across a session boundary; the Item component (not in frame). |

### Action audit (T6, exact; 11 browser calls, in order)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer; tab 1 runtime |
| 2 | `browser_tabs` select 1 | Succeeded |
| 3 | `browser_snapshot` untargeted, saved `t6-00` | Runtime FX_Orders selected; order 1; no menu/dialog |
| 4 | `browser_find` regex (menu/dialog/Save/Object/combobox/tab) | Clean; FX_Orders selected; FX001; dumbbell |
| 5 | `browser_take_screenshot` `t6-01` | Pre-close state |
| 6 | `browser_click` `f1e104` (Close Panel FX_Orders, **once**) | Closed; no prompt; selection moved to IDO Properties |
| 7 | `browser_find` regex (alertdialog/menu/Save new/heading) | No dialog; no menu; IDO Properties selected; no FX_Orders heading |
| 8 | `browser_take_screenshot` `t6-02` | Only IDO Properties visible |
| 9 | `browser_tabs` select 0 (Designer; navigation) | Succeeded |
| 10 | `browser_find` regex (ScopeType/Save/Undo/Regenerate/alertdialog/tab) | User scope; clean; FX_Orders selected; no dialog |
| 11 | `browser_take_screenshot` `t6-03` | Designer final state |

**T6 counts (exact):** browser calls **11**. Tab lists **1**; tab selects **2** (tab 1 and tab 0; both succeeded); snapshots **1** (`t6-00`); finds **3**; screenshots **3** (`t6-01` to `t6-03`; all succeeded); element clicks **1** (the runtime close, once); coordinate clicks **0**; key presses **0**; typed text **0**; Save clicks **0**; drags, file, dialog or wheel actions **0**; JavaScript, evaluate, console or network inspection **0**; navigations **0**. Browser errors or timeouts **0**; ref-not-found **0**; fresh-snapshot recovery allowance used **0**. Actions issued one at a time; the tab select and the snapshot in call 2–3 were issued as separate calls in one block (the select is navigation, the snapshot is read-only; disclosed in the T5 note style).

**Mongoose mutations and lifecycle (T6), exact:**
- Runtime FX_Orders close **1**; runtime FX_Orders reopen **0**; runtime F4 **0**; runtime right-clicks **0**; Escapes **0**; blank-area dismissals **0**.
- **Details chosen 0. Add chosen 0. Find chosen 0.** Drill-down Forms opened **0**.
- Save-new-record prompt answered No **0** (no such prompt occurred).
- Runtime edits **0**; records typed **0**; runtime New, Save or Delete **0**; list values chosen **0**.
- Designer actions: tab selection only (navigation). Designer Save **0**; Designer close/reopen **0**; Right-Click Menu clears **0** in T6; component or property changes **0**; Designer toolbar Delete **0**; Regenerate Form **0**.
- Web Client unload **0**; Designer unload **0**.
- Checkout, check-in, undo checkout **0**. FormSync, deployment **0**. Re-logins **0**. Session-expiry procedure **not invoked** (no expiry or sign-in observed).

### Cumulative browser action audit (EXP-086, T1–T6; reconciled)

| Category | T1 | T2 | T3 | T4 | T5 | T6 | Cumulative |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Browser calls | 45 | 31 | 39 | 38 | 26 | 11 | **190** |
| Tab lists | 1 | 1 | 1 | 1 | 1 | 1 | 6 |
| Tab selects | 2 | 1 | 1 | 1 | 1 | 2 | 8 |
| Snapshots (untargeted) | 2 | 1 | 1 | 1 | 1 | 1 | 7 |
| Finds | 18 | 12 | 20 | 16 | 10 | 3 | **79** |
| Screenshots | 8 | 6 | 6 | 6 | 7 | 3 | **36** |
| Element clicks (ref) | 9 | 6 | 9 | 8 | 6 | 1 | 39 |
| Coordinate clicks | 2 | 0 | 0 | 2 | 0 | 0 | 4 |
| Key presses | 3 | 4 | 1 | 3 | 0 | 0 | 11 |
| **Right-Click Menu clears** | 0 | 2 | 0 | 0 | 0 | 0 | **2 of 2** |
| **Designer Save** | 0 | 1 | 0 | 0 | 0 | 0 | **1 of 1** |
| **Designer close / reopen** | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 0 | 0 / 0 | **1 / 1** |
| **Runtime FX_Orders opens / closes** | 1 / 0 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | 0 / 1 | **2 / 2** |
| **Runtime F4 (blank criteria)** | 1 | 0 | 0 | 1 | 0 | 0 | **2** |
| Runtime Filter in Place switches | 1 | 0 | 0 | 1 | 0 | 0 | 2 |
| **Runtime right-clicks** | 2 | 0 | 0 | 2 | 2 | 0 | **6** (Item 3; Customer ID 3) |
| Runtime Escapes / blank-area dismissals | 2 / 2 | 0 / 0 | 0 / 0 | 2 / 2 | 0 / 0 | 0 / 0 | 4 / 4 |
| **Details chosen** | 0 | 0 | 0 | 0 | 2 | 0 | **2 of 2** (Item 1; Customer ID 1) |
| **Add / Find chosen** | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| **Drill-down Forms opened / closed** | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 2 / 2 | 0 / 0 | **2 / 2** |
| Save-new-record prompts answered No | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Web Client unloads** (contingency) | 0 | 0 | 0 | 0 | 0 | 0 | **0** (budget 1; condition not met) |
| Designer unloads | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Runtime edits / records typed / runtime New, Save, Delete | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Other component or property changes | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Checkout actions | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Reconciliation: T6 checks — finds 3 + screenshots 3 + element clicks 1 + tab lists 1 + tab selects 2 + snapshots 1 = 11 = T6 browser calls. Cumulative: tab lists 6 + tab selects 8 + snapshots 7 + finds 79 + screenshots 36 + element clicks 39 + coordinate clicks 4 + key presses 11 = 190 = cumulative browser calls (T1 45 + T2 31 + T3 39 + T4 38 + T5 26 + T6 11 = 190). Earlier tasks' counts are unchanged.

**Zero-action safety counters (cumulative, EXP-086):** Designer unloads 0; Web Client unloads 0 (of budget 1); Designer Save 1 (of 1; none retried); runtime edits 0; records typed 0; runtime New, Save or Delete 0; Add 0; Find 0; checkout actions 0; FormSync or deployment 0; Regenerate Form 0; Designer toolbar Delete 0; component or property changes other than the two Right-Click Menu clears 0; browser JavaScript, evaluate, console or network inspection 0; re-logins 0; session-expiry procedure invoked 0.

### Worker-written file inventory (T6)

- `experiments/EXP-086-hello-world-part-5-section-5-step-8-fx-orders-right-click-drill-downs.md` (updated: T6 status header; this T6 section).
- `evidence/EXP-086/t6-00-webclient-fresh-snapshot-before-final-close.yml` (snapshot saved by the tool at the requested path).
- `evidence/EXP-086/t6-01-runtime-pre-close-state.png`
- `evidence/EXP-086/t6-02-runtime-after-final-close.png`
- `evidence/EXP-086/t6-03-designer-final-state-fx-orders-clean-user-scope.png`

T6 total: **4 worker-created evidence files** (1 YAML snapshot, 3 PNG) and **1 updated record**.

**Cumulative for EXP-086 (T1–T6): 44 worker-created files** = 1 record (created in T1) + 43 evidence files (T1 10, T2 7, T3 7, T4 7, T5 8, T6 4). The record was updated in T2–T6. The browser tool also wrote its own page snapshots and console logs under `evidence/playwright/`; those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git.

### Final state (end of T6)

- **Runtime (tab 1):** FX_Orders **closed** (its tab absent). The pre-existing `IDO Properties` Form is the only runtime tab, selected, untouched, status `Filter in Place`. No menu, no dialog, no unresolved prompt.
- **Designer (tab 0):** FX_Orders open, **clean**, `ScopeType: User`, Save/Undo/Regenerate disabled, no dialog. Selected component FX_CustomerIDCombobox (view state). Right-Click Menu blank on both comboboxes (T2/T3 readbacks; not re-read component by component in T6 beyond the frame).
- No Designer Save, close or reopen in T6; no runtime reopen in T6.

### Remaining acceptance gaps (for the separate documentation-only audit)

1. **AC-5 final recommendation** is not issued in T6 (deferred by instruction). The evidence, counts and inventory above are complete for it.
2. **Same-session scope:** all AC-1 to AC-4 results are same-session UI observations. No database durability, server persistence, or replay verification has been performed, and none is claimed.
3. **Customer ID Right-Click Menu after the T2 Save:** visibly blank in T2 `t2-05` and T3 `t3-06`; not re-read in T6 beyond the frame (the Designer frame `t6-03` shows it blank).
4. **Drill-down lookup mechanism:** the drill-downs opened the record matching the combobox value; the lookup mechanism itself is not established.
5. **Save toast wording:** EXP-086 T2 toast named the Form (`Form [FX_Orders] and global object(s) were saved.`); EXP-085's toast did not. Recorded as observed; not interpreted.
6. **FX_UM extension:** not edited; not re-read in EXP-086 (out of scope).

Classification for all T6 findings: **observed only, NOT replay_verified.**

---

## T7 — Documentation-only final acceptance audit (cycle 6): ZERO browser calls; ZERO Mongoose changes

Scope (bounded instruction): review this record, the T1–T6 evidence, the six harness audits (`evidence/EXP-086/harness-audit-T1.md` to `harness-audit-T6.md`, controller-generated) and the worker-written inventories; write `evidence/EXP-086/T7-final-acceptance-report.md`; update only this record. Run `R-20261014-144223-SAFC`, cycle 6, task T7, task_message_id `570a58ab-b1eb-4c02-8c61-d105405ab733`, worker session `b92f69ca-6bec-4614-b91b-e98c2b65b3c7`.

### Outcome

- **Recommendation: ACCEPTED AS OBSERVED**, same-session UI observations only (conditions in the T7 report, section 11).
- **AC-1 supported.** Designer User-scoped and clean at the start; both comboboxes Binding and Inheritance as expected, Add/Details, Find and Property blank, Right-Click Menu `StdDefault`; runtime order 1 baseline menus `Help` only, nothing chosen. Evidence: `preflight-01`, `preflight-02`, `rt-04`, `rt-05`.
- **AC-2 supported.** Exactly two Right-Click Menu clears (Item, Customer ID; Delete then Tab each; blank after focus moved). Exactly one Designer Save; native response verbatim `Form [FX_Orders] and global object(s) were saved.` (`t2-05`). After one Designer close (no prompt) and one recent-forms reopen (`t3-01`, `t3-02`), both Right-Click Menus blank (`t3-05`, `t3-06`); the enumerated other rows unchanged.
- **AC-3 supported.** After one runtime close/reopen (`t4-01`, `t4-02`) and one blank-criteria F4 (`t4-03`), the Item and Customer ID menus on order 1 each offered `Add...`, `Details...`, `Find...`, `Help` (`t4-04`, `t4-05`). Contingency unload used **0** times (condition not met).
- **AC-4 supported.** Item Details opened FX_Items on dumbbell, description `45 pound iron`, Object 1 of 1 (`t5-03`), closed clean (`t5-04`). Customer ID Details opened FX_HelloWorld01 on FX001, Object 1 of 1 (`t5-06`), closed clean (`t5-07`). FX_Orders clean on order 1 (`t5-07`, `t6-01`) and closed once in T6 with no prompt (`t6-02`).
- **AC-5 supported** (this audit). The T1 count was corrected (see below).

### Count reconciliation (harness versus record)

- The six harness audits give, per task: T1 46 browser calls (16 actions, 30 reads), T2 31 (11, 20), T3 39 (11, 28), T4 38 (14, 24), T5 26 (7, 19), T6 11 (3, 8). Total **191** = 62 actions + 129 reads. Prohibited-tool hits 0 and exact mismatches 0 in every task; errors: T1 2 (both non-browser, see below), T2–T6 0.
- The record's T1 table had 45 calls and 18 finds; the harness has 46 and 19. The erratum is in the T1 section. **Corrected cumulative: 191 browser calls; finds 80 (not 79); all other categories as previously reported** (tab lists 6, tab selects 8, snapshots 7, screenshots 36, element clicks 39, coordinate clicks 4, key presses 11).
- Cross-checks: 62 actions = 39 clicks + 4 coordinate clicks + 11 keys + 8 tab selects; 129 reads = 6 lists + 7 snapshots + 80 finds + 36 screenshots; 36 screenshot calls produced 36 PNG files; 7 snapshot calls produced 7 YAML files.
- T1 non-browser errors recorded by the harness: a `Grep` with a wrong file name and one `Edit` whose old string did not match (fixed by a second `Edit`). Neither touched Mongoose or the browser.

### Operation counts (cumulative, verified)

Right-Click Menu clears **2**; Designer Save **1**; Designer close/reopen **1/1**; runtime FX_Orders opens **2**, closes **2**; F4 **2**; right-clicks **6** (Item 3, Customer ID 3); Details **2** (one per combobox); Add **0**; Find **0**; drill-down Forms opened **2**, closed **2**; Web Client unloads **0**; Designer unloads **0**; runtime edits **0**; other component changes **0**; checkout actions **0**; re-logins **0**; save-new-record prompts answered No **0**. Escapes 4; blank-area dismissals 4.

### Inventory

- Worker-written: 43 evidence files in `evidence/EXP-086/` (T1 10, T2 7, T3 7, T4 7, T5 8, T6 4) plus this record (created in T1) = **44 through T6**. This T7 adds `evidence/EXP-086/T7-final-acceptance-report.md`; **total 45**.
- Controller-generated, same directory (not worker-written): `harness-audit-T1.md` to `harness-audit-T6.md`.
- Tool-written, outside the EXP-086 path: 50 files under `evidence/playwright/` in the EXP-086 timestamp window (06:42:58 to 07:02:18). Repository confinement is judged from the worker inventories and harness audits; operator git review is authoritative.

### Final state

- Runtime: FX_Orders tab closed; the pre-existing `IDO Properties` Form is the only tab, untouched; no menu, dialog or prompt.
- Designer: FX_Orders open, clean, `ScopeType: User`, no dialog; both component Right-Click Menus blank; Binding and Inheritance as recorded.
- FX_UM was not edited and was not re-verified field by field in this experiment.

### Discrepancies (none affects an acceptance check)

- D-1 T1 count (corrected above). D-2 T1 non-browser tool errors (disclosed). D-3 a tab select issued in the same response block as a read-only snapshot or find in several opening blocks (no browser mutation parallelised; harness order numbers are sequential). D-4 the Save toast names the Form (EXP-085's did not). D-5 Customer ID rows after the Save read only after the T3 reopen (closed in T3). D-6 "other values unchanged" covers the enumerated rows only. D-7 drill-down mode is a record view with `Object n of n`.

### Knowledge classification (T7)

- The results above: **observed** (same session; one run each).
- Causal attribution of the menu commands to `StdDetailsAddFind`: **candidate_procedure** (not isolated).
- Drill-down lookup mechanism and stored data: **unresolved** (not queried).
- Database durability, cross-session persistence, replay: **unresolved** (not tested; none claimed).
- FX_UM state: **unresolved** (not re-verified).

Classification for all T7 findings: **observed only, NOT replay_verified.**

## Outcome (operator, 2026-10-14)

Accepted (observed). Hello World Part 5 section 5 is complete: the Item and Customer ID drill-downs work from FX_Orders. The operator decided acceptance.

- Run R-20261014-144223-SAFC completed as accepted after 7 worker tasks, with no pauses.
- Changed, for later cleanup (Form `FX_Orders`, User scope):
  - the component-level Right-Click Menu of **FX_ItemCombobox** and **FX_CustomerIDCombobox**, cleared from `StdDefault` to blank by selecting it, pressing Delete and then Tab. Both now inherit `StdDetailsAddFind` from the FX_Item and FX_CustomerID extensions (EXP-085).
  - One Designer Save: "Form [FX_Orders] and global object(s) were saved."
  - Both cells read blank after one Designer close/reopen.
- Screenshots viewed by the operator assistant:
  - `t4-04`: the runtime FX_Orders on order 1 (FX001, Factory test one, dumbbell, 45 pound iron, Count 2, total 90.00, the puppy picture). The Item right-click menu shows `Add...`, `Details...`, `Find...`, `Help`. The baseline before the change was `Help` only (T7 report, `rt-04`/`rt-05`).
  - `t5-03`: Details on Item opened the FX_Items Form in a new tab on dumbbell / 45 pound iron / 45.00 / EA (Each), Object 1 of 1.
  - `t5-06`: Details on Customer ID opened the FX_HelloWorld01 Form in a new tab on FX001 / Factory test one / 1 Factory Street, Object 1 of 1.
    - Its first two fields show a bare ":" label with no caption text. This was not checked against the record that built that Form, and is out of scope here.
- Accepted deviations, none affecting any acceptance check:
  1. The T1 browser-call count was one short; T7 corrected it.
  2. Two non-browser tool errors: a Grep on a wrong filename, and one Edit that was retried.
  3. Tab selects were issued in the same block as read-only snapshots or finds.
  4. There were 4 coordinate clicks (T1 2, T4 2). T7 does not itemize them.
  5. The Save toast names the Form here, while the EXP-085 toast did not.
- Counts:
  - Right-Click Menu clears 2, Designer Save 1, Designer close/reopen 1;
  - Details 2, Add 0, Find 0;
  - Web Client unloads 0 (the contingency condition was not met), Designer unloads 0;
  - runtime edits 0, checkout actions 0, re-logins 0;
  - flagged `browser_type` calls 0.
- Findings (observed):
  1. **The component-level `StdDefault` blocks inheritance.** With the extensions in place and `StdDefault` on the comboboxes, the runtime menu shows only `Help`. Clearing it lets the extension's `StdDetailsAddFind` appear: Add, Details, Find and Help. This matches the tutorial and EXP-069-R2/R4.
  2. **No unload is needed.** The changed menus appeared after one Designer Save and one runtime Form close/reopen.
  3. **Details opens the target Form in a new tab,** filtered to the current value (Object 1 of 1).
- Limits:
  - Same-session UI evidence only.
  - The attribution of the menus to the extensions is consistent with the evidence but was not isolated separately.
- Confinement (git status): only `evidence/EXP-086/` and this record were written by the run.
- Next: Part 5 sections 7-13: In Collection validators and component classes for Customer ID and Item, then the runtime test and the unload.
