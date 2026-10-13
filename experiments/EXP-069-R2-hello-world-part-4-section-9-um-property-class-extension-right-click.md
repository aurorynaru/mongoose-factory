# EXP-069-R2 — Hello World Part 4 Section 9: FX_UM property-class extension with the Details/Add/Find right-click menu on FX_UMCombobox (replay after the creation timeout)

**FINAL status (T11, 2026-10-13; final documentation only, zero browser calls): BLOCKED. Not accepted. Not replay_verified.** AC-1 met with limits; AC-2 met for the initial configuration and single OK, but the extension Right-Click Menu did not persist (blank on the T10 readback); AC-3 and AC-4 met; **AC-5 FAILED** (the Details/Add/Find menu never appeared at runtime; no Details drill-down); AC-6 partially met (Designer close/reopen once each; three of four extension fields verified; the extension Right-Click Menu not verified); **AC-7 FAILED** on its no-dialog criterion (the FX_UM extension editor was deliberately left open and unconfirmed to avoid a potential metadata write from OK); AC-8 documentation complete. The loss point of `StdDetailsAddFind` is unresolved (it was present before OK in T4 and was not read again until T10), and the missing extension value is not established as the cause of the runtime failure. Operator disposition of the open editor is required. Final report: `evidence/EXP-069-R2/t11-final-blocked-report.md`. Final state: Designer FX_Items, User scope, clean, Save disabled, FX_UM extension editor open and unconfirmed; runtime FX_Items clean on dumbbell EA, no menu. Browser calls 318 (T1–T10; T11 zero). Designer Saves 2. Extension creation 1. Extension OK 1. Ellipsis activations 2. Designer close/reopen 1 pair. Runtime close/reopen 3 pairs. Runtime right-clicks 4. Web Client unloads 1. Designer unloads 0. Runtime record edits 0. Add/Find/Details 0. Re-logins 0. Corrected runtime menu count: 25 items (not 24) in checks 2 and 3; 1 item (`Help`) in checks 1 and the baseline.

Earlier status (T10, 2026-10-13; AC-6 Designer recovery and read-only extension readback, bounded): the clean Designer FX_Items Form was closed ONCE (Form-tab close, no prompt) and reopened ONCE (toolbar Open, Select Form OK; one FX_Items row; User scope; Save and Undo disabled). After reopen, FX_UMCombobox shows Data Source `object.FX_UM`, Inheritance property class `FX_UM` (View Attributes and Edit Property Class Extension both `FX_UM`), and a blank component-level Right-Click Menu (Add/Details Form, Find Form and Property also blank). The extension editor opened DIRECTLY on the recovery ellipsis click (no creation prompt): Name `FX_UM`, Version `User version for user …`, Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM` (all persisted), but the extension's Right-Click Menu is BLANK (`StdDetailsAddFind` is NOT shown anywhere in the editor). This is a new, unexplained finding: the extension's menu value did not survive the T4 confirm, T5 Save, T7 Save 2, or the reopen (cause not established). The editor remains OPEN: its only buttons are OK and Help (no Cancel), and Escape did not close it; OK was not clicked (it would confirm the editor). The Designer is clean (Save disabled). No Designer Save, unload, runtime action, or Details/Add/Find action in T10. Classification: observed only. Not replay_verified.** Details: section "T10" below.

Section order note: sections are not in chronological order. T10 is above T9, T9 above T8, and so on down to T1 at the bottom; T4 appears above T3 (and T5 above T4), a result of inserting new sections at the top. The substantive content is unchanged; the order was not rewritten (a full rewrite was judged unsafe for the record).

Earlier status (T9, 2026-10-13; Web Client cache contingency and runtime check 3, bounded): the menu count recorded in T8 was a miscount and is corrected here: the T8 saved snapshot (`evidence/EXP-069-R2/t8-05-runtime-check2-menu-items-snapshot.yml`) lists 25 `menuitem` entries (5 `separator` lines excluded), not 24. ONE Web Client `Form > Definition > Unload All Global Form Objects` was invoked (unload count 1; no alert, error or dialog observed; native response: menu closed, no message). The runtime FX_Items Form was closed once before the unload and reopened once after it (Form > Open > Select Form, OK once): clean, dumbbell, UM EA, record 1 of 3. ONE right-click on the UM combobox showed the same 25 items as T8 (verbatim below); **Details, Add and Find do NOT appear.** Escape did not dismiss; one blank-area click dismissed it with no item chosen. Final: runtime clean and open, no menu. The unload did NOT change the outcome. Classification: observed only. Not replay_verified.** Details: section "T9" below.

Earlier status (T8, 2026-10-13; Runtime Check 2 only, bounded): ONE runtime close and ONE reopen of FX_Items (Form > Open > Select Form, one OK), reopened clean on dumbbell, UM EA, record 1 of 3. ONE right-click on the UM combobox showed a 25-item standard menu (Refresh, Refresh current, Filter, Next, Previous, First, Last, Get More Rows, New, Duplicate, Save, Save current, Delete, Validate, Notes for All, Documents for Current, Email for Current, Notes for Current, Graph, To Excel, To Form DataView, View Event Status, View Workflows, New Workflow, Help). **Details, Add and Find do NOT appear.** Escape did not dismiss; one blank-area click dismissed it with no item chosen. Result: the positive (Details/Add/Find) menu was NOT observed in check 1 (`Help` only, component `StdDefault`) or check 2 (component value blank). The contingency-unload conditions as written in the brief (no menu, no component-level value) are met, but the unload was NOT invoked in T8. Classification: observed only. Not replay_verified.** Details: section "T8" below.

Earlier status (T7, 2026-10-13; override step only, bounded): the component-level Right-Click Menu of FX_UMCombobox was read as `StdDefault`, cleared (Delete on the selected value; readback blank after focus moved away; no menu option selected), and Designer Save 2 was performed ONCE through the native toolbar Save. Native response: toast `Save` / `Form [FX_Items] and global object(s) were saved.`; toolbar Save and Undo became DISABLED; FX_Items stayed open (User scope); the component Right-Click Menu remains blank. The extension row still shows `FX_UM`. Runtime check 2 NOT performed in T7 (the brief stops here; the runtime FX_Items Form is open and clean from T6, still showing the pre-Save-2 state until closed and reopened). No unload, no Designer close/reopen, no Add/Find/Details. Classification: observed only. Not replay_verified.** Details: section "T7" below.

Earlier status (T6, 2026-10-13; Runtime Check 1 only, bounded): ONE runtime close and ONE reopen of FX_Items (via Form > Open > Select Form, one OK) after Designer Save 1. The reopened Form showed dumbbell, UM EA, record 1 of 3. ONE right-click on the Unit of Measure combobox showed ONLY `Help`: the Details/Add/Find menu did NOT appear (negative observation, consistent with the tutorial's expected absence). Escape did not dismiss the menu; one blank-area click dismissed it with no item chosen. Override step NOT performed (the brief stops after Runtime Check 1; component-level `StdDefault` still set). Cache contingency NOT performed. Designer close/reopen NOT performed. Classification: observed only. Not replay_verified.** Details: section "T6" below.

Earlier status (T5, 2026-10-13; Designer Save 1 only, bounded): Designer Save 1 was performed ONCE through the native toolbar Save. Native response: toast `Save` / `Global object(s) were saved.`; toolbar Save and Undo became DISABLED; no alert, validation error or timeout; the Form stayed open (FX_Items, User scope). The component's own Right-Click Menu remains `StdDefault`. The extension's Inheritance row still shows `FX_UM`. The extension's saved state has NOT been read back from a reopen. Runtime checks, override, unload and Designer close/reopen NOT performed in T5. Classification: observed only. Not replay_verified.** Details: section "T5" below.

Earlier status (T4, 2026-10-13; configure and confirm the open extension dialog, bounded): the extension dialog was configured (Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`), read back, and confirmed ONCE with OK. The dialog closed with no alert. The Designer is now DIRTY (toolbar Save enabled, not pressed). Designer Save 1 has NOT been performed; runtime checks NOT run. Extension persistence is NOT yet proven (no Save, no reopen). Classification: observed only. Not replay_verified.** Details: section "T4" below.

Earlier status (T3, 2026-10-13; existence check and single creation confirmation, bounded): the existence check showed the prompt `Property Class Extension FX_UM does not exist. Create it?`; ONE Yes produced the Property Class Extension dialog (Name `FX_UM`, User version) with NO timeout alert. The dialog is OPEN and UNCHANGED, not confirmed (OK not clicked), with no field set and no Designer Save. Extension existence after this step is observed as an open dialog; persistence is NOT confirmed. Classification: observed only. Not replay_verified.** Details: section "T3" below.

Earlier status (T2, 2026-10-13; read-only baseline completion, bounded): COMPLETE. STOPPED before the extension existence check. T2 read the collapsed Behavior groups New and Copy Operations and Dynamic Enabling and Disabling (all child rows and values, section "T2" below), finished the constraint review of EXP-045, EXP-048 and EXP-068-R2, and changed no property. No ellipsis click, no prompt, no Save, no unload, no close/reopen, no Add/Find/Details. The FX_UM extension's existence is still **unresolved**. Classification: **observed only. Not replay_verified.**

Earlier status (T1, 2026-10-13; read-only preflight, bounded): PREFLIGHT COMPLETE. STOPPED before Edit Property Class Extensions. No ellipsis click, no prompt answered, no extension created or inspected, no Designer Save, no unload, no Designer or runtime close/reopen, no Add/Find/Details. The existence of the FX_UM property-class extension is still **unresolved**. Classification: **observed only. Not replay_verified.**

Run identity: run `R-20261013-113227-AVrk`, experiment EXP-069-R2, cycle 0, task T1, task_message_id `8c264404-9766-4211-9b63-546e677200fe`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-069-R2/`. Predecessor record: `experiments/EXP-069-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (T1–T4, BLOCKED at AC-2).

Record creation disclosure: this file did not exist before T1 (a Glob for `experiments/*R2*` did not list it); it was created by this worker in T1.

## Why this replay (from the brief)

EXP-069 pressed Yes once on `Property Class Extension FX_UM does not exist. Create it?`. The response was `Timeout expired waiting for response.` and the extension dialog never appeared, so the creation result is unknown (EXP-069 T3, T4). This replay begins with a single existence check, the Inheritance ellipsis, before any creation. The full replay plan (extension configuration, Designer Save, runtime checks, component override, drill-down) is in the brief. **Only the preflight was authorized for this task.** Those later steps have not been run.

## Scope of T1 (from the bounded instruction)

Read the sources; list tabs and select them; confirm FX_Items in the Designer, User scope, clean; record the FX_UMCombobox Data Source, Inheritance and Behavior values; record the runtime right-click baseline (one right-click, dismissed without choosing an item); write this record with the audit, inventory and screenshots. **Stop before opening Edit Property Class Extensions or making any change.**

## Sources reviewed (T1, before any browser interaction)

- `AGENTS.md`: read in full (238 lines). Applied: FX_ scope extension, User editing scope, evidence rules, recovery rules, knowledge states.
- `docs/mongoose/transcripts/hello-world-pt4.md`, Section 9 (11:04–13:12, lines 228–247): read in full. Trust: unverified tutorial transcript. Inheritance lesson (line 245): a component-level setting can override a class-extension setting, so configuring an extension alone does not prove it is effective. Boundary (line 247): clearing a component menu can change behaviour; record previous values and both negative and positive results.
- `experiments/EXP-069-hello-world-part-4-section-9-…right-click.md` (predecessor): read in full (T1–T4 and the operator outcome).
- `evidence/EXP-069/t4-final-blocked-report.md`: read in full.
- `experiments/EXP-045-…md`: **partial read** (lines 1–40 status and run identity; lines 593–653 T6; lines 751–840 T8). Lessons applied: the ellipsis "does not exist. Create it?" pattern; a **No** answer produced `Timeout expired waiting for response.` (T6); the Strings list (Edit > String) is a read-only lookup. Lines 41–592 and 841–1589 were **not** read.
- `experiments/EXP-048-…md`: **partial read** (lines 1–40 status; lines 158–186 knowledge state and open questions). Relevant point: FX_UM (and FX_UMBase) was still **checked out to the operator** (`anton.ramos@3mworks.com.ph`) with Check In and Undo Check Out enabled. Whether the checkout affects extension creation is **not tested**. Lines 41–157 and 187–1142 were **not** read.
- `experiments/EXP-068-R2-…md`: **partial read** (lines 1–22 status; lines 626–653 operator outcome). Relevant points: a runtime Form opened before a Designer Save keeps its old state until closed and reopened; the Edit Grid Columns route. Lines 23–625 were **not** read.

The partial reads are a limitation: any lesson recorded only in the unread parts of those records was not applied.

## Session and tab handling

- `browser_tabs` list (one, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, current), tab 1 = Web Client (`Mongoose`, `favoriteContext=FX_Items`).
- Tab 0 selected (succeeded). Tab 1 selected once for the runtime check; tab 0 selected again for the Behavior frame. No "tab not found" error and no timeout occurred in this task.
- The session was usable throughout. No "Session Expired" modal, no sign-in page, no portal banner, no unsaved-change prompt and no browser-native dialog were observed. **Re-login count 0.**
- Designer URL no longer carries an `MGForm=` parameter. The Form identity is nonetheless shown by the Designer heading `FX_Items` (screenshot `t1-00`). The URL-parameter change is the same one EXP-069 T3 recorded after its Yes press; this task did not change the Form, so the cause is not established here.

## AC-1 — Designer baseline (FX_Items, User scope, clean)

| Item | Observed (accessibility readback and screenshot `t1-00`, `t1-05`) |
| --- | --- |
| Form | `FX_Items` (Designer heading); Designer tab 0 |
| Scope | Footer `[ ScopeType: User / ScopeName: … ]` (the operator's user name; not copied here) |
| Clean | Toolbar Save `[disabled]` (`find`); Save greyed in `t1-00`; no in-page dialog, no open Property Class Extension dialog |
| Selected component | `FX_UMCombobox (EnhancedCombo)` (Properties header and Name) |
| Components-list filter | Text `FX_UMCombobox` remains in the Components search box (a view filter left from EXP-069 T1; not changed here) |

### FX_UMCombobox — Data Source, Inheritance and Behavior (baseline, read-only)

| Group | Property | Baseline value (this run) |
| --- | --- | --- |
| Components row | Type / Data Source / Pane / Tab | `ComboBox` / `object.FX_UM` / `1` / `12` (`t1-00`) |
| Design | Name / Caption / Type / From Device Master | `FX_UMCombobox` / `C(FX_UMStatic)` / `ComboBox` / `True` (EXP-069 T1–T2; not re-read here) |
| Behavior | Read-Only/Disable; Tab Read-Only Field; Hidden; No Tab Stop; Auto Complete | `False` each (EXP-069 T1–T2; not re-read here) |
| **Behavior → Add/Details and Find Form** | **Add/Details Form** | **blank** (accessibility cell empty; `t1-05`) |
| **Behavior → Add/Details and Find Form** | **Find Form** | **blank** (accessibility cell empty; `t1-05`) |
| **Behavior → Add/Details and Find Form** | **Property** | **blank** (accessibility cell empty; `t1-05`) |
| Behavior | New and Copy Operations | collapsed in T1; **children read in T2** (section "T2") |
| Behavior | Dynamic Enabling and Disabling | collapsed in T1; **children read in T2** (section "T2") |
| **Behavior** | **Right-Click Menu** | **`StdDefault`** (component-level, non-blank; `t1-05`) |
| Behavior | Drag Image; Enabled When; Required When; Theme Class When; Visible When | blank (EXP-069 T2; `t1-05` shows the Enabled/Required/Theme/Visible rows blank) |
| Data Source | Binding Type / Binding | `Property` / `object.FX_UM` (`find`; `t1-05`) |
| Data Source | Required; To Be Determined; Upper or Lower Case; Default Value | `False`; `False`; `Mixed`; blank (`t1-05`) |
| **Inheritance** | View Attributes Inherited From Property | `FX_UM` (`t1-00`, `find`) |
| **Inheritance** | Edit Property Class Extension For Property Class | `FX_UM` (ellipsis present; `t1-00`) |
| Inheritance | Component Class; Component Class Parameters | blank |
| Inheritance | Set Class From | `This Component's Attribute` |

**Existing FX_UM extension: NOT DETERMINED in T1.** The Inheritance row names the property class `FX_UM` but no extension. Whether an extension exists is answered only by the single ellipsis click (the existence check). That click is the first action of the next task and was **not** made here.

**Readings of the Behavior values:** the Add/Details Form, Find Form and Property cells are empty and enabled (dropdowns with no text). This is a blank value, not a disabled field, as EXP-069 T2 recorded. Right-Click Menu is a non-blank component-level value, `StdDefault`.

Screenshots: `evidence/EXP-069-R2/t1-00-designer-start-state.png` (Designer FX_Items, FX_UMCombobox selected, Inheritance group with `Edit Property Class Extension For Property Class` = `FX_UM`, Save greyed, User scope footer; Behavior group not in frame). `evidence/EXP-069-R2/t1-05-fx_umcombobox-baseline-behavior-group.png` (after one view-only scroll of the Properties pane: Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`; Data Source Binding Type `Property`, Binding `object.FX_UM`; Save greyed; User scope footer). **What t1-05 does NOT prove:** the saved (database) state; the New and Copy and Dynamic Enabling groups (collapsed); the Inheritance rows (scrolled out of frame; read by accessibility).

## Runtime baseline — Unit of Measure right-click (AC-1)

- Tab 1 (Web Client) selected after the tab list. The runtime `FX_Items` Form was **already open** (not opened by this worker): tab heading `FX_Items`, record `1 of 3` (dumbbell), status `Unit of Measure (Object 1 of 3)`, Description `Each`, UM combobox `EA`, Save `[disabled]`, no dialog (`t1-01`).
- **One right-click** on the Unit of Measure combobox (ref from a fresh `find`).
- **Menu items, verbatim:** `Help`. Only one item. **No Details, Add or Find items were present.** Screenshot `t1-02` shows the single `Help` item under the combobox, with the value `EA` selected.
- **Dismissal (deviation from the brief's Escape instruction):** one **Escape** (screenshot `t1-03`) did **not** dismiss the menu; the `Help` menu remained visible in the screenshot and in the accessibility tree (`find` "Help" still returned the menu item). Following the operator-accepted pattern recorded in EXP-069 T2 (one Escape, then a blank-area click, no item chosen), one **click on blank Form space** at (1200, 700) dismissed it (`t1-04`). Post-dismissal: menu gone; record `1 of 3` still shown; `EA`; Save `[disabled]`; no record edit. No item chosen.

## Action audit (T1, exact counts)

Browser calls in T1, in order:

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current, tab 1 Web Client |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` (untargeted, Designer) | Succeeded; output over the inline limit and saved by the tool (not read as a file; accessibility readbacks taken with `find`) |
| 4 | `browser_find` "ScopeType" | Footer `User / …` |
| 5 | `browser_find` "FX_UMCombobox" | Components row and Name read |
| 6 | `browser_find` "Save" | Save `[disabled]` |
| 7 | `browser_take_screenshot` `t1-00` | Succeeded (Designer, Inheritance visible) |
| 8 | `browser_find` "Right-Click Menu" | `StdDefault` |
| 9 | `browser_find` "Add/Details" | Group row present; Add/Details Form cell empty |
| 10 | `browser_find` "Find Form" | Find Form cell empty |
| 11 | `browser_snapshot` target `e1190` (Add/Details Form row) | Blank value |
| 12 | `browser_find` "Property" | Property cell empty; Binding Type `Property`; View Attributes `FX_UM`; Edit Property Class Extension `FX_UM` |
| 13 | `browser_find` "New and Copy Operations" | Group header only; no child rows |
| 14 | `browser_find` "Dynamic Enabling and Disabling" | Group header only; no child rows |
| 15 | `browser_snapshot` target `e1227` (New and Copy group) | Header only; children not exposed |
| 16 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 17 | `browser_find` "Unit of Measure" | Runtime FX_Items; UM combobox `EA` |
| 18 | `browser_find` "Save" | Save `[disabled]` |
| 19 | `browser_take_screenshot` `t1-01` | Succeeded (runtime, before right-click) |
| 20 | `browser_click` (right button) on the UM combobox | Succeeded; menu `Help` |
| 21 | `browser_find` "Help" | One menu item `Help` |
| 22 | `browser_take_screenshot` `t1-02` | Succeeded (menu visible) |
| 23 | `browser_press_key` Escape | Menu not dismissed |
| 24 | `browser_find` "Help" | Menu still in the tree |
| 25 | `browser_take_screenshot` `t1-03` | Succeeded (menu still visible) |
| 26 | `browser_mouse_click_xy` (1200, 700), blank Form space | Menu dismissed; no item chosen |
| 27 | `browser_take_screenshot` `t1-04` | Succeeded (menu gone; record 1 of 3; EA; Save greyed) |
| 28 | `browser_tabs` select 0 | Succeeded (Designer) |
| 29 | `browser_mouse_move_xy` (1700, 560), Properties pane | Succeeded (view only) |
| 30 | `browser_mouse_wheel` (0, −600) | Succeeded; Properties pane scrolled up (view only) |
| 31 | `browser_take_screenshot` `t1-05` | Succeeded (Behavior frame visible) |

**Exact counts (T1):**
- Total browser calls: **31**.
- By type: tab lists 1; tab selects 3 (0, 1, 0; all succeeded); snapshots 3 (1 untargeted, 2 targeted; all read-only); finds 13; screenshot calls 6 (all succeeded; `t1-00` to `t1-05`); element clicks 1 (the right-click, executed once); coordinate clicks 1 (the blank-area dismissal); key presses 1 (one Escape, not effective); mouse move 1; mouse wheel 1; typed text 0; drags 0.
- Browser errors or timeouts in T1: **0**. No ref-not-found error. No recovery snapshot needed.
- Successful screenshots saved: **6**.

**Mongoose mutations and lifecycle (T1):**
- Designer Save **0**. Save 1 and Save 2 not performed.
- Edit Property Class Extensions (ellipsis) clicked **0**. Extension prompts answered **0**. Extensions created **0**. Extension fields set **0**. Extension dialogs confirmed **0**.
- Component or property changes **0** (FX_UMCombobox selection and the Properties scroll are view state only).
- Designer unload **0**. Web Client unload (Unload All Global Form Objects) **0**.
- Designer close / reopen **0 / 0**. Runtime close / reopen **0 / 0**.
- Runtime right-clicks **1** (baseline; `Help` only). Runtime Save **0**. Record edits **0**.
- Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0**.
- Checkout, check-in or undo-checkout actions **0**.
- Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0** (tool-generated code is not worker-authored).

## Worker-written file inventory (T1)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (created: this record)
- `evidence/EXP-069-R2/t1-00-designer-start-state.png`
- `evidence/EXP-069-R2/t1-01-runtime-fx_items-before-baseline-right-click.png`
- `evidence/EXP-069-R2/t1-02-runtime-um-combobox-baseline-right-click-menu.png`
- `evidence/EXP-069-R2/t1-03-runtime-after-escape-baseline-menu-state.png`
- `evidence/EXP-069-R2/t1-04-runtime-after-blank-click-menu-dismissed.png`
- `evidence/EXP-069-R2/t1-05-fx_umcombobox-baseline-behavior-group.png`

The tool-generated snapshot logs (for example `evidence/playwright/page-2026-10-13T03-33-28-648Z.yml`, `…03-33-36-127Z.yml`) and console logs (`evidence/playwright/console-…`) were produced by the browser tool, not by the worker. The worker did not write any other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Screenshot evidence (T1)

- `t1-00` (Designer start): FX_Items heading; FX_UMCombobox selected; Inheritance `Edit Property Class Extension For Property Class` = `FX_UM`; Save greyed; User scope footer. **Proves** Form identity, scope, clean toolbar and the Inheritance row as visible. **Does not prove** the Behavior group (not in frame), any extension state, or the saved state.
- `t1-01` (runtime before right-click): FX_Items record 1 of 3, UM `EA`, Save greyed, no menu. **Proves** the pre-right-click runtime state. **Does not prove** the menu contents.
- `t1-02` (runtime menu): single item `Help` under the UM combobox. **Proves** the menu contents on this right-click. **Does not prove** that `Help` is the complete menu definition for every record or the cause of a Help-only menu.
- `t1-03` (after Escape): `Help` still visible. **Proves** Escape did not dismiss the menu in this run.
- `t1-04` (after blank-area click): menu gone; record 1 of 3; `EA`; Save greyed. **Proves** dismissal without a choice. **Does not prove** that nothing else changed on the record.
- `t1-05` (Designer Behavior frame): Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`; Data Source `Property` / `object.FX_UM`; Save greyed; User scope. **Proves** the Behavior values in the frame. **Does not prove** the collapsed New and Copy and Dynamic Enabling groups or the saved state.

## Observations (T1; observed only)

1. FX_UMCombobox carries a component-level Right-Click Menu of `StdDefault` and a blank Add/Details Form, Find Form and Property (same as EXP-069 T1–T2).
2. The runtime right-click on the UM combobox shows only `Help` (same as EXP-069 T1).
3. Escape did not dismiss the runtime context menu (same as EXP-069 T1; now observed twice in total, once per run, with one press each in this run). A blank-area click dismissed it.
4. No Designer tab timeout occurred this time; the first Designer tab select after the list succeeded and screenshots worked. The earlier EXP-069 T1 timeout did not recur, and its cause is still not established.

## Acceptance (T1 preflight)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported with limits.** Sources reviewed (partial reads of EXP-045, EXP-048, EXP-068-R2 disclosed). Session usable; FX_Items open in the Designer, User scope, clean. FX_UMCombobox binding (`object.FX_UM`), Inheritance (`FX_UM`) and Behavior values recorded (Right-Click Menu `StdDefault`; Add/Details Form, Find Form, Property blank). Baseline runtime right-click recorded (`Help` only). | `t1-00`, `t1-05` (Designer); `t1-01`, `t1-02` (runtime menu) | Existing FX_UM extension **not determined** (no ellipsis click, by T1 rule). New and Copy Operations and Dynamic Enabling and Disabling child rows **not read**. Console counts not read. |
| AC-2 | **NOT RUN** (the extension check is the first action of the next task). | — | — |
| AC-3 to AC-6 | **NOT RUN.** | — | — |
| AC-7 | **Supported for T1**: no other change; no dialog or menu left open at the end (`t1-04`). | Audit above; `t1-04` | The Components search box keeps the view filter `FX_UMCombobox` (view state). |
| AC-8 | This record (T1 portion). | Audit counts above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| FX_UMCombobox component-level Right-Click Menu = `StdDefault` (non-blank) before any change | **observed** (one run, T1; agrees with EXP-069 T1–T2) |
| Add/Details Form, Find Form and Property blank on FX_UMCombobox before any change | **observed** (one run, T1; agrees with EXP-069 T1–T2) |
| Runtime right-click on the UM combobox shows only `Help` before any extension | **observed** (one run, T1; agrees with EXP-069 T1) |
| Escape does not dismiss the runtime context menu; a blank-area click does | **observed** (one run, T1; cause unresolved) |
| Existing FX_UM property-class extension | **unresolved** (not checked; the ellipsis is the next task's first action) |
| Tutorial inheritance lesson (component override defeats an extension) | **unverified** (tutorial transcript; not reached) |
| FX_UM checkout to the operator (EXP-048) affects extension creation | **unresolved** (not tested) |

## Open questions and next permitted action

1. **Next permitted action (requires the coordinator's authorization for the next task):** the replay's extension step: one ellipsis click on FX_UMCombobox `Edit Property Class Extension For Property Class` (the existence check). If the prompt `Property Class Extension FX_UM does not exist. Create it?` appears, answer **Yes once** and record the result. If the Property Class Extension dialog opens without the prompt, the extension exists and is configured in that dialog. A second `Timeout expired waiting for response.` stops the run. **Not authorized by T1.**
2. The operator should decide whether FX_UM's checkout to the operator (EXP-048) should be checked before the extension step. This is not tested.
3. The runtime Escape behaviour is recorded as observed; the next task should use the same one-Escape-then-blank-click dismissal, with no item chosen, unless the operator decides otherwise.
4. The Components search box filter `FX_UMCombobox` is a view filter and can be cleared in a view step if the operator wants a clean Designer.
5. Classification remains **observed only, NOT replay_verified**.

---

## T2 — Read-only completion of the Behavior baseline; constraint review; STOPPED before the existence check (cycle 1)

Task T2 (bounded instruction: read-only baseline completion; no property change; stop before the extension existence check). Run `R-20261013-113227-AVrk`, cycle 1, task_message_id `321f34f4-16f3-45b9-a9de-47e0a893e270`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (fresh)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, `mode=designer`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 0 selected (succeeded).
- Designer: FX_Items heading; FX_UMCombobox (EnhancedCombo) selected; footer `[ ScopeType: User / ScopeName: … ]`; toolbar Save greyed; no dialog; the Properties pane scrolled to the Behavior group, as T1 left it. Screenshot `t2-01` (before any expansion).
- Runtime (tab 1): not selected in T2. Last state from T1: runtime FX_Items record 1 of 3, UM `EA`, Save disabled, no menu open.

### Groups expanded (view state only)

Expanding a group changes only the Properties view state. Nothing was typed or selected as a value, and no property was set.

1. **New and Copy Operations.** The first attempt (a click on the group's tree row, `t2-02`) selected the row but did **not** expand it. The corrected attempt was one click on the group's chevron at its visible position (1596, 260); the group expanded (`t2-03`).
2. **Dynamic Enabling and Disabling.** One click on its chevron (1596, 332) expanded it (`t2-04`). No retry was needed.

### Behavior values, full group (accessibility readback and screenshots `t2-03`, `t2-04`)

| Group / row (full name as read) | Value |
| --- | --- |
| Add/Details Form | **blank** |
| Find Form | **blank** |
| Property | **blank** |
| New and Copy Operations → Do Not Clear Value On New | `False` |
| New and Copy Operations → Use Default Value On Copy | `False` |
| Dynamic Enabling and Disabling → Disable In Filter-in-Place | `False` |
| Dynamic Enabling and Disabling → Enable On Non Modified Records | `False` |
| Dynamic Enabling and Disabling → Enable on Required Data Supplied | `False` |
| Dynamic Enabling and Disabling → Read-Only For Deleted Records | `False` |
| Dynamic Enabling and Disabling → Read-Only For Existing Records | `False` |
| Dynamic Enabling and Disabling → Read-Only For New Records | `False` |
| **Right-Click Menu** | **`StdDefault`** (component-level; unchanged) |
| Drag Image | blank |
| Enabled When; Required When; Theme Class When; Visible When | blank (expression buttons; no value) |
| Data Source → Binding Type / Binding | `Property` / `object.FX_UM` |
| Data Source → Required; To Be Determined; Upper or Lower Case; Default Value | `False`; `False`; `Mixed`; blank |

**Reconciliation with T1.** The T1 values are unchanged. The Read-Only/Disable, Tab Read-Only Field, Hidden, No Tab Stop and Auto Complete rows (`False` in T1) sit above this frame and were not re-read in T2. Right-Click Menu `StdDefault`, Add/Details Form, Find Form and Property blank: all unchanged from T1. Inheritance: `FX_UM` (View Attributes) and `FX_UM` (Edit Property Class Extension For Property Class) unchanged; no existing extension name is shown. No extension is determined by T2.

**Limits.** The Dynamic Enabling and New and Copy child names were truncated in the Properties frame; full names were taken from the accessibility tree. The expanded groups remain expanded (view state; not collapsed).

### Constraint review (before the extension step)

Read the relevant portions of EXP-045, EXP-048 and EXP-068-R2 (T1 partial reads, plus a targeted search of all three for `extension`, `Right-Click`, `checkout`, `Check In`, `Revert`). Applicable constraints:

- **EXP-048 — FX_UM checkout:** FX_UM (and FX_UMBase) were checked out to the operator (`anton.ramos@3mworks.com.ph`); Check In and Undo Check Out were enabled; nothing was checked in. Whether that checkout affects creating or saving the extension is **untested**. Checkout-management actions are out of scope.
- **EXP-045 — creation prompts:** a Caption ellipsis on an undefined object raised `… does not exist. Create it?`. A **Yes** created a new object with a **pre-filled generated default** (for the string `FX_sUM`, `FX_s UM`), which the worker had to replace. A **No** produced `Timeout expired waiting for response.` with no visible effect (the record notes the effect was unresolved). Implication for this replay: after a Yes, check the default values in the dialog before setting any field, and do not treat a timeout alert as a confirmation.
- **EXP-068-R2 — runtime staleness:** a runtime Form opened before a Designer Save keeps its old state until it is closed and reopened. This matters for runtime check 1 and any check after Save.
- **EXP-068-R2 — destructive Edit menu item:** the top Edit menu contains `Revert Global Object Definition`. It must not be clicked in any step of this experiment. The Designer Edit menu was not opened in T2.
- **EXP-068-R2 — Escape and dismissal:** the Edit menu and the runtime context menu stayed open after Escape in earlier runs; a blank-area click dismissed them. Observed behaviour only.

### Browser action audit (T2, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_find` "New and Copy Operations" | Group row ref `e1230` (collapsed) |
| 4 | `browser_find` "Dynamic Enabling and Disabling" | Group row ref `e1239` (collapsed) |
| 5 | `browser_snapshot` (untargeted, depth 6; saved `t2-00-designer-fresh-snapshot.yml`) | Designer FX_Items; User scope; Save disabled |
| 6 | `browser_take_screenshot` `t2-01` | Succeeded (Behavior frame before expansion) |
| 7 | `browser_click` `e1230` (New and Copy row) | Row selected; group **not** expanded |
| 8 | `browser_find` "New and Copy Operations" | Row selected; children not yet shown |
| 9 | `browser_take_screenshot` `t2-02` | Succeeded (still collapsed) |
| 10 | `browser_mouse_click_xy` (1596, 260), group chevron | Group expanded (corrected attempt) |
| 11 | `browser_take_screenshot` `t2-03` | Succeeded (New and Copy children visible) |
| 12 | `browser_find` "Do Not Clear" | Full name and value read |
| 13 | `browser_find` "Use Default Value" | Full name and value read |
| 14 | `browser_mouse_click_xy` (1596, 332), Dynamic Enabling chevron | Group expanded |
| 15 | `browser_take_screenshot` `t2-04` | Succeeded (Dynamic Enabling children visible) |
| 16 | `browser_find` "Disable In Filter" | Full name and value read |
| 17 | `browser_find` "Enable On Non" | Full name and value read |
| 18 | `browser_find` "Enable on Required" | Full name and value read |
| 19 | `browser_find` "Read-Only For" | Three rows read |

**T2 counts (exact):** browser calls **19**. Tab lists 1; tab selects 1 (succeeded); finds 9; untargeted snapshots 1; screenshots 4 (`t2-01` to `t2-04`); element clicks 1 (the New and Copy row; it selected the row but did not expand it); coordinate clicks 2 (both chevrons; both expanded their groups); text entries 0; key presses 0; wheel 0; drags 0; runtime actions 0 (tab 1 was not selected). Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots used: 0 beyond the required opening snapshot. The element click's Playwright code was generated by the tool (a DOM-id locator); the worker supplied only the accessibility ref.

**Cumulative browser calls, EXP-069-R2 (T1 + T2): 31 + 19 = 50.** Cumulative screenshots: 6 + 4 = 10.

**Cumulative Mongoose mutations (T1 + T2):** Designer Save 0. Extension ellipsis clicks 0. Extension prompts answered 0. Extensions created 0. Extension fields set 0. Component or property changes 0 (only group expansions, one row selection and the earlier Properties scroll; all view state). Designer unload 0. Web Client unload 0. Designer close/reopen 0 / 0. Runtime close/reopen 0 / 0. Runtime right-click 1 (T1 only). Runtime Save 0. Record edits 0. Details/Add/Find chosen 0 / 0 / 0. FX_UMs Form opened 0. Checkout, check-in or undo actions 0. Re-login 0. Browser JavaScript, console or network inspection 0.

### Designer and runtime state at the end of T2

- **Designer (tab 0, selected):** FX_Items, User scope, clean (toolbar Save and Undo greyed in `t2-04`); no dialog open. FX_UMCombobox selected; the New and Copy and Dynamic Enabling groups are expanded (view state); Components search box still holds the view filter `FX_UMCombobox`.
- **Runtime (tab 1):** not selected in T2. Last observed state (T1, `t1-04`): FX_Items record 1 of 3, UM `EA`, Save disabled, no menu open.
- **Open dialogs:** none in either tab. No unsaved change.

### Worker-written file inventory (T2)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line, two T1 rows, this T2 section)
- `evidence/EXP-069-R2/t2-00-designer-fresh-snapshot.yml` (opening accessibility snapshot, saved by the tool at the requested path)
- `evidence/EXP-069-R2/t2-01-designer-before-group-expand.png`
- `evidence/EXP-069-R2/t2-02-new-and-copy-after-row-click.png`
- `evidence/EXP-069-R2/t2-03-new-and-copy-expanded.png`
- `evidence/EXP-069-R2/t2-04-dynamic-enabling-expanded.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-36-44-228Z.yml`, `page-2026-10-13T03-36-57-719Z.yml`, `console-2026-10-13T03-36-34-391Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T2)

- `t2-01`: FX_Items heading; FX_UMCombobox selected; Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault`; Data Source `object.FX_UM`; Save greyed; User scope. **Proves** the pre-expansion state. **Does not prove** the children of the two collapsed groups or the saved state.
- `t2-02`: the New and Copy group still collapsed after the row click. **Proves** that the row click alone did not expand the group. **Does not prove** the children.
- `t2-03`: New and Copy Operations expanded: Do Not Clear Value On New `False`; Use Default Value On Copy `False`; Dynamic Enabling collapsed below it; Right-Click Menu `StdDefault`. **Proves** these two children and values. **Does not prove** the truncated labels (the full names come from the accessibility tree) or the saved state.
- `t2-04`: Dynamic Enabling and Disabling expanded: six rows, all `False` (Disable In Filter-in-Place, Enable On Non Modified Records, Enable on Required Data Supplied, Read-Only For Deleted, Existing and New Records); Right-Click Menu `StdDefault`; Data Source `Property` / `object.FX_UM`. **Proves** these six values in the frame. **Does not prove** the saved state; the full names are from the accessibility tree.

### Acceptance (T2)

| AC | T2 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported.** The Behavior values, including the two previously collapsed groups, are recorded; Right-Click Menu and the Add/Details and Find Form group recorded; FX_Items User scope and clean; the T1 runtime baseline stands. | `t2-01`, `t2-03`, `t2-04`; T1 `t1-01`, `t1-02`, `t1-05` | Read-Only/Disable and other rows above the frame are from T1, not re-read in T2. Saved (database) state not verified. |
| AC-2 | **NOT RUN** (the existence check is the next task's first action; T2 stopped before it, as instructed). | — | — |
| AC-3 to AC-6 | **NOT RUN.** | — | — |
| AC-7 | **Supported for T2**: no property, component, class, extension, record or object changed; no dialog or menu left open. | Audit above; `t2-04` | The expanded groups are view state; the Components filter is view state. |
| AC-8 | This record (T2 portion). | Audit counts above | — |

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| The full FX_UMCombobox Behavior group values, including New and Copy (`Do Not Clear Value On New`, `Use Default Value On Copy`) and the six Dynamic Enabling rows, are all `False`; Add/Details Form, Find Form and Property blank; Right-Click Menu `StdDefault` | **observed** (one run, T2; agrees with T1 where both read) |
| Constraint from EXP-048: FX_UM checked out to the operator | **observed** (EXP-048, earlier run); effect on extension creation **unresolved** |
| Constraint from EXP-045: a Yes on a creation prompt pre-fills a generated default | **observed** (EXP-045, earlier run); applies to the extension dialog **unverified** |
| Constraint from EXP-068-R2: runtime Form stays stale until closed and reopened after a Save | **observed** (EXP-068-R2, earlier run) |
| Constraint from EXP-068-R2: Edit menu `Revert Global Object Definition` must not be clicked | **observed** (menu listing only; never clicked) |
| Existing FX_UM extension | **unresolved** (the ellipsis is the next task's first action) |
| Tutorial inheritance lesson | **unverified** |

### Open questions and next permitted action (T2)

1. **Next permitted action (needs a separate authorization):** the single Inheritance ellipsis click on FX_UMCombobox (the existence check). Then: if the "does not exist. Create it?" prompt appears, one Yes and record the result (check the dialog's default values before setting fields); if the extension dialog opens, the extension exists; a second timeout stops the run.
2. Operator decision: whether to address FX_UM's checkout to the operator (EXP-048) before the extension step. Not tested.
3. The T1 Components-filter view state and the expanded Properties groups are view state; the operator can have them cleared in a view step if wanted.
4. Classification remains **observed only, NOT replay_verified**.

---

## T11 — Final documentation (cycle 10): BLOCKED; zero browser calls; zero Mongoose changes

Task T11 (bounded instruction: documentation only; no browser calls; no clicks on any application control; leave the FX_UM extension editor open and unconfirmed). Run `R-20261013-113227-AVrk`, cycle 10, task_message_id `3464d50c-0bcb-4bcd-a1bd-44da74702d73`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`.

- **Browser calls in T11: 0.** No Mongoose change. The extension editor remains open and unconfirmed.
- **Final report:** `evidence/EXP-069-R2/t11-final-blocked-report.md` (AC-1 to AC-8 individually; the reconciled audit; the screenshot reconciliation; the worker-written inventory; the final state; the unresolved discrepancies).
- **Audit reconciliation:** the T1–T10 worker counts (31, 19, 27, 53, 12, 29, 27, 29, 35, 56) sum to 318. The controller audit files (`harness-audit-T1.md` through `harness-audit-T10.md`) reconcile row by row to those counts for every task.
- **Corrections recorded in T11:** the cumulative runtime Escape count is 4 (plus 1 on the extension editor in T10), not 5 (T8 and T9 had included two T1 presses from the predecessor run); the runtime menu count is 25 (T8 and T9), not 24; the T9 Select Form pre-OK screenshot was not taken (the T9 section now says so); one screenshot path (`t7-02`) was overwritten, so there are 69 distinct PNG files for 70 capture calls.
- **Loss point of `StdDetailsAddFind`: unresolved.** Present in the T4 readback before OK; the extension's Right-Click Menu was not read again until T10 (blank). It is not established that the loss happened at OK, Save 1 or Save 2, nor that the blank value caused the runtime failure.
- **Specialist guidance (supplied in the T11 brief, not direct environment evidence):** the Mongoose Web Designer documentation describes OK as saving the extension. The repository's copy (`docs/mongoose/guides/web-designer.md`, "Creating a Property Class Extension object", step 7) says the same for creating a new object. Clicking OK with unchanged fields could still affect metadata. No supported non-mutating dismissal was established in this run.

## T10 — AC-6 Designer recovery: one Designer close and one reopen; FX_UMCombobox readback; extension editor opened on the recovery ellipsis; extension Right-Click Menu found BLANK; editor left open (cycle 9)

Task T10 (bounded instruction: Designer close/reopen and read-only extension readback only; no Save, no unload, no runtime right-click, no Details/Add/Find, no checkout, no field change; "Cancel or ordinary dialog close" of the extension editor if possible). Run `R-20261013-113227-AVrk`, cycle 9, task_message_id `288dab14-8fc0-4ad9-b579-a61fcce762ff`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (verified before the close)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, `mode=designer`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 0 selected (succeeded).
- Snapshot `evidence/EXP-069-R2/t10-00-designer-fresh-snapshot-before-close.yml`; `find` Save `[disabled]`; footer `ScopeType: User`; no alertdialog; no Property Class Extension dialog open.
- Screenshot `t10-01`: FX_Items heading; FX_UMCombobox selected (Properties header `FX_UMCombobox (EnhancedCombo)`); Right-Click Menu row blank in the Behavior group; Data Source `object.FX_UM`; Save and Undo greyed. **Clean. Not dirty.** The brief's stop condition (dirty) did not apply.

### Designer close (ONE)

- **ONE click** on the native Form-tab close control (`closable FX_Items`, ref `e247`). No prompt. Screenshot `t10-02`: the Designer canvas empty; the Properties panel empty; footer `ScopeType: User`.

### Designer reopen (ONE)

- **ONE click** on the toolbar Open button (the toolbar control named `Design`, tooltip **`Open`**, ref `e13`; this matches the EXP-068-R2 route).
- The **Select Form** dialog appeared with one row, `FX_Items` / `FX_Items`, selected; Filter `FX_Items`; Filter By `Name` (screenshot `t10-04`).
- **ONE click** on `OK` (`e1903`). Screenshot `t10-05`: FX_Items reopened; URL now carries `MGForm=FX_Items`; Form tab `FX_Items`; Properties header Form-level (Name `FX_Items`; Version `User version for us…`; Device Type `Default`; Form Type `Normal`; Is Master `True`). Toolbar **Save `[disabled]`**, **Undo `[disabled]`**, **Redo `[disabled]`**, Regenerate Form disabled; footer `ScopeType: User / ScopeName: [operator user]`. **Reopened clean, User scope, FX_Items identity confirmed.**

### FX_UMCombobox readback (after reopen)

- Components filter: the Details panel was expanded (`Expand Panel`), the Components tab selected, the filter text `FX_UMCombobox` typed (a view filter, not a Form change), `Pane (01)` expanded and the grid expanded (view state). The row `FX_UMCombobox ComboBox object.FX_UM 1 12` was then selected (screenshot `t10-08`).
- Properties header `FX_UMCombobox (EnhancedCombo)`; Name `FX_UMCombobox`; Caption `C(FX_UMStatic)`; Type `ComboBox`; From Device Master `True`.
- **Data Source:** Binding Type `Property`; Binding **`object.FX_UM`** (accessibility; screenshot `t10-09`).
- **Inheritance:** View Attributes Inherited From Property **`FX_UM`**; Edit Property Class Extension For Property Class **`FX_UM`** (accessibility; ellipsis button `e1695`).
- **Behavior:** Read-Only/Disable, Tab Read-Only Field, Hidden, No Tab Stop, Auto Complete `False`; Add/Details Form, Find Form and Property **blank**; New and Copy Operations `Do Not Clear Value On New` `False`, `Use Default Value On Copy` `False`; Dynamic Enabling and Disabling six rows `False`.
- **Right-Click Menu (component): BLANK.** The value cell holds only the dropdown arrow (no text child; accessibility `find`), and screenshot `t10-09` shows an empty Right-Click Menu value with the `Open Edit` ellipsis. The value was not focused in T10, so this readback is **not** the "after focus moved away" test the brief describes for a clear; it is a readback of the stored clear after a reopen. The component-level clear from T7 persisted (`StdDefault` is not present).
- **Limit:** Enabled When, Required When, Theme Class When and Visible When were blank in the frame (not re-read in full).

### Extension recovery readback (ONE ellipsis click; recovery, not creation)

- **ONE click** on the Edit Property Class Extension ellipsis (`e1695`), the recovery readback. **No creation prompt appeared** (`find` "does not exist": no match). The **Property Class Extension** editor opened directly (screenshot `t10-10`, `evidence/EXP-069-R2/t10-10-extension-editor-opened-directly-recovery.png`).
- **Readbacks (accessibility tree `t10-11`, `evidence/EXP-069-R2/t10-11-extension-editor-tree-readback.yml`; screenshot `t10-12`):**

| Editor row | Value after reopen |
| --- | --- |
| Design → Name | `FX_UM` (**as required**) |
| Design → Version | `User version for user …` (**User scope**, as required; username not copied) |
| Design → Caption | blank |
| Behavior → Read-Only/Disable; Tab Read-Only Field; No Tab Stop; Auto Complete | `False` each |
| Add/Details and Find Form → **Add/Details Form** | **`FX_UMs`** (**as required; persisted**) |
| Add/Details and Find Form → **Find Form** | **`FX_UMs`** (**as required; persisted**) |
| Add/Details and Find Form → **Property** | **`FX_UM`** (**as required; persisted**) |
| **Right-Click Menu** | **BLANK. `StdDetailsAddFind` is NOT present.** (Accessibility gridcell holds no text; the string `StdDetailsAddFind` is not found anywhere in the editor, `find` returned no matches; screenshot `t10-12` shows the row with no value.) **Does not match the T4 pre-OK readback (`StdDetailsAddFind`).** |
| Drag Image; Enabled When; Required When; Theme Class When; Visible When | blank |

- **Interpretation (observed; not diagnosed):** the extension's Right-Click Menu (`StdDetailsAddFind`, set and read back in T4 before OK; the T4 OK closed the dialog with no alert; Save 1 returned `Global object(s) were saved.`) is **blank after the Designer reopen**. The three other extension fields persisted. The cause is not established. Candidate explanations to test later (none tested here): the value was not written at Save 1; Save 2 (which cleared the component-level value) also changed or cleared the extension's value; or the editor displays this combo blank for a value it cannot render. The runtime results in T6, T8 and T9 are consistent with the extension's menu not being configured at runtime, so they may reflect this missing value rather than component-level inheritance; **that attribution is not established.**
- **Not done (by the brief):** no field was changed. The extension was **not** re-set to `StdDetailsAddFind` (no Save is authorized: both Designer Saves are consumed, and the brief forbids field edits in T10).

### Editor state (left OPEN)

- **Attempt to close (ONE Escape press):** the editor did **not** close (`find`: `dialog "Property Class Extension" [active]` still present). The editor's only buttons are **OK** and **Help**; there is **no Cancel** and no close (×) control found (`find` for Close, Close Window, Cancel, X: no matches).
- **OK was NOT clicked.** The brief's options were native Cancel or an ordinary dialog close. Neither exists here, and OK would confirm the editor (the earlier OK in T4 turned the Form dirty). Because the Save budget is consumed, a dirty Form would have no authorized way to save. **The editor is therefore left OPEN for operator disposition.** No field was altered.
- The Designer is clean behind it (Save `[disabled]` after the Escape; `find`).

### Runtime Form

- The runtime FX_Items tab (tab 1) was **not selected** in T10 and was not changed. Its last state (T9): clean, dumbbell, UM EA, record 1 of 3, no menu.

### Browser action audit (T10, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` (untargeted, depth 6; `t10-00`) | Designer FX_Items; Save disabled |
| 4 | `browser_find` "Save" | Save `[disabled]` |
| 5 | `browser_take_screenshot` `t10-01` | Succeeded (clean) |
| 6 | `browser_find` regex (alertdialog / Timeout / does not exist / ScopeType) | Footer User; no dialog |
| 7 | `browser_find` regex (Close Panel / Form / tab) | No match |
| 8 | `browser_find` "FX_Items" | Tab `closable FX_Items` `e247` |
| 9 | `browser_click` `e247` (Form-tab close, **once**) | Closed; no prompt |
| 10 | `browser_take_screenshot` `t10-02` | Succeeded (empty canvas) |
| 11 | `browser_find` "Open" | No match |
| 12 | `browser_snapshot` (untargeted, depth 4; `t10-03`) | Toolbar Design/Open button `e13` |
| 13 | `browser_find` regex (toolbar Design / Open / Select Form) | Toolbar button `e13` |
| 14 | `browser_click` `e13` (toolbar Open, **once**) | Tooltip Open; Select Form dialog |
| 15 | `browser_find` regex (Select Form / FX_Items) | One FX_Items row |
| 16 | `browser_take_screenshot` `t10-04` | Succeeded (one row, selected) |
| 17 | `browser_find` "OK" | OK `e1903` |
| 18 | `browser_click` `e1903` (Select Form OK, **once**) | FX_Items reopened |
| 19 | `browser_take_screenshot` `t10-05` | Succeeded (clean; User scope) |
| 20 | `browser_find` regex (ScopeType / Save / Undo / Right-Click Menu) | Save and Undo disabled; User scope |
| 21 | `browser_find` "Details" | Details panel `e2015` |
| 22 | `browser_click` `e2015` (Expand Panel, view) | Details expanded (Collections) |
| 23 | `browser_find` "FX_UMCombobox" | No match (Collections tab) |
| 24 | `browser_take_screenshot` `t10-06` | Succeeded (Details expanded) |
| 25 | `browser_find` "Components" | Tab `e2134` |
| 26 | `browser_click` `e2134` (Components tab, view) | Components tab |
| 27 | `browser_find` "FX_UMCombobox" | No match (unfiltered) |
| 28 | `browser_find` regex (textbox) | Filter textbox `e2205` |
| 29 | `browser_click` `e2205` (filter field, view) | Focused |
| 30 | `browser_type` `e2205` "FX_UMCombobox" (view filter) | Filter text entered (view only) |
| 31 | `browser_find` "FX_UMCombobox" | Filter shows the name |
| 32 | `browser_take_screenshot` `t10-07` | Succeeded (filter; Pane (00) and (01)) |
| 33 | `browser_find` "Pane (01)" | Tree row `e2295` |
| 34 | `browser_click` `e2295` (Pane (01), view) | Row clicked (no row exposed) |
| 35 | `browser_find` "FX_UMCombobox" | No row yet |
| 36 | `browser_click` `e2207` (Expand all, view) | Tree expanded |
| 37 | `browser_find` "FX_UMCombobox" | Row `e2797` present |
| 38 | `browser_click` `e2798` (FX_UMCombobox row, selection only) | FX_UMCombobox selected |
| 39 | `browser_take_screenshot` `t10-08` | Succeeded (FX_UMCombobox selected) |
| 40 | `browser_find` regex (Right-Click Menu / Binding / View Attributes / Edit Property Class Extension) | Values read |
| 41 | `browser_mouse_move_xy` (1700, 560) (view) | Pointer over Properties |
| 42 | `browser_mouse_wheel` (0, 300) (view) | Pane scrolled |
| 43 | `browser_take_screenshot` `t10-09` | Succeeded (Right-Click Menu blank; Add/Details, Find, Property blank) |
| 44 | `browser_snapshot` target `e3527` (ellipsis row) | Ellipsis `e1695` |
| 45 | `browser_click` `e1695` (ellipsis, **once**, recovery readback) | Editor opened directly; no prompt |
| 46 | `browser_find` regex (does not exist / alertdialog / editor / Timeout) | Editor open; no prompt |
| 47 | `browser_take_screenshot` `t10-10` | Succeeded (editor over Designer) |
| 48 | `browser_find` "Add/Details Form" | Values `FX_UMs` |
| 49 | `browser_snapshot` target `e3672` (editor tree; `t10-11` yml) | Full readback |
| 50 | `browser_mouse_move_xy` (950, 520) (view) | Pointer over editor |
| 51 | `browser_mouse_wheel` (0, 200) (view) | Editor tree scrolled |
| 52 | `browser_take_screenshot` `t10-12` | Succeeded (Find/Property/Right-Click rows) |
| 53 | `browser_find` "StdDetailsAddFind" | No match |
| 54 | `browser_find` regex (Close / Cancel / X) | No match |
| 55 | `browser_press_key` Escape (**once**) | Editor not closed |
| 56 | `browser_find` regex (dialog / alertdialog / Save) | Editor still open; Save disabled |

(The `browser_snapshot` calls at 3, 12, 44 and 49 are counted as snapshots. The Read calls in the audit are local file reads, not browser calls.)

**T10 counts (exact):** browser calls **56**. Tab lists 1; tab selects 1 (succeeded); snapshots 4 (`t10-00`, `t10-03`, the `e3527` readback, `t10-11` yml); finds 24; screenshot calls 10 (`t10-01`, `t10-02`, `t10-04`, `t10-05`, `t10-06`, `t10-07`, `t10-08`, `t10-09`, `t10-10`, `t10-12`; all succeeded, all saved as PNG); element clicks 10 (Form-tab close 1; toolbar Open 1; Select Form OK 1; Details expand 1; Components tab 1; filter field 1; Pane (01) row 1; Expand all 1; FX_UMCombobox row 1; extension ellipsis 1); typed text 1 (view filter); mouse moves 2; mouse wheels 2; key presses 1 (Escape, ineffective). Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots: 0. (Check: 1 + 1 + 4 + 24 + 10 + 10 + 1 + 2 + 2 + 1 = 56.)

**Cumulative browser calls, EXP-069-R2 (T1–T10): 262 + 56 = 318.** Cumulative screenshot calls: 60 + 10 = **70**. Cumulative browser errors or timeouts: 1 (the T4 failed `browser_type`, element not editable; not executed).

**Cumulative mutations and lifecycle (T1–T10):**
- Ellipsis activations **2** (T3: the existence check; T10: the recovery readback). **Creation prompts answered 1** (Yes, T3). **Extension creations: 1.** Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4). Extension Right-Click Menu value on readback (T10): **blank** (not persisted, cause unresolved).
- **Designer Save count: 2** (Save 1 T5; Save 2 T7). No retry. Save 1 `Global object(s) were saved.`; Save 2 `Form [FX_Items] and global object(s) were saved.` (T10 Save: **0**.)
- **Component property changes: 1** (FX_UMCombobox component-level Right-Click Menu, T7; blank persisted through T10).
- **Web Client Unload All Global Form Objects: 1** (T9). Designer unload **0**.
- **Designer close/reopen: 1 / 1** (T10; the single required Designer close/reopen).
- Runtime close/reopen **3 / 3** (T6, T8, T9). Runtime right-clicks **4** (T1, T6, T8, T9). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0** (no Details drill-down; AC-5 not met). Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.

### Worker-written file inventory (T10)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; section-order note; this T10 section)
- `evidence/EXP-069-R2/t10-00-designer-fresh-snapshot-before-close.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t10-01-designer-pre-close-state.png`
- `evidence/EXP-069-R2/t10-02-designer-after-close.png`
- `evidence/EXP-069-R2/t10-03-designer-closed-fresh-snapshot.yml` (snapshot saved by the tool)
- `evidence/EXP-069-R2/t10-04-select-form-dialog-before-ok.png`
- `evidence/EXP-069-R2/t10-05-designer-reopened-fx_items.png`
- `evidence/EXP-069-R2/t10-06-designer-details-expanded.png`
- `evidence/EXP-069-R2/t10-07-components-filter-fx_umcombobox.png`
- `evidence/EXP-069-R2/t10-08-fx_umcombobox-selected-after-reopen.png`
- `evidence/EXP-069-R2/t10-09-fx_umcombobox-behavior-right-click-blank-readback.png`
- `evidence/EXP-069-R2/t10-10-extension-editor-opened-directly-recovery.png`
- `evidence/EXP-069-R2/t10-11-extension-editor-tree-readback.yml` (snapshot saved by the tool)
- `evidence/EXP-069-R2/t10-12-extension-editor-scrolled-property-and-right-click-rows.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-57-09-990Z.yml`, `page-2026-10-13T03-58-21-554Z.yml`, `console-2026-10-13T03-56-58-288Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T10)

- `t10-01`: pre-close clean Designer; FX_UMCombobox; Right-Click Menu blank; Save greyed. **Proves** the clean start and the blank component menu before the close. **Does not prove** the database state.
- `t10-02`: the Designer after the close; canvas and Properties empty; no prompt. **Proves** the close.
- `t10-04`: Select Form, one FX_Items / FX_Items row selected, Filter `FX_Items`. **Proves** the identity offered for reopen.
- `t10-05`: reopened FX_Items; Form-level Properties Name `FX_Items`; Save and Undo greyed; User scope. **Proves** the reopened clean Form and its identity and scope.
- `t10-08`: FX_UMCombobox selected after the reopen; Add/Details Form, Find Form and Property blank in the Behavior group. **Proves** the selection and the blank rows in frame.
- `t10-09`: Right-Click Menu value blank (no text); Binding `object.FX_UM`; Add/Details, Find and Property blank; Save and Undo greyed. **Proves** the component's blank Right-Click Menu after the reopen (not after a focus move; see Limits). **Does not prove** the stored value beyond the displayed readback.
- `t10-10`: the extension editor open directly over the Designer, Name `FX_UM`, Version `User version for user…`, Add/Details and Find Form `FX_UMs`. **Proves** the extension opened directly (no prompt) with those values. **Does not prove** the Property or Right-Click Menu rows (below the frame).
- `t10-11` (YML): the editor readback: Property `FX_UM`; Right-Click Menu gridcell with no text. **Proves** the accessibility values of every row.
- `t10-12`: the editor scrolled: Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu row with no value shown. **Proves** the visible blank Right-Click Menu value in the editor. **Does not prove** why it is blank.

### Acceptance (T10)

| AC | T10 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T2; the Designer identity and scope confirmed again after reopen. | `t10-05`, `t10-08`, `t10-09` | — |
| AC-2 | **Partly met**: the extension opened on the recovery click (no prompt, so no creation); Name `FX_UM`, User version, Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM` read back after the reopen. **NOT met**: Right-Click Menu `StdDetailsAddFind` is **not** present after the reopen (blank). | `t10-10`, `t10-11`, `t10-12` | The extension's Right-Click Menu is not persisted (observed); cause unresolved. |
| AC-3 | Save 1 (T5) and runtime check 1 (T6) unchanged. | `t5-02`, `t6-06` | — |
| AC-4 | Override done (T7); Save 2 (T7); runtime checks 2 (T8) and 3 (T9); contingency unload used once (T9). | `t7-06`, `t8-05`, `t9-06` | — |
| AC-5 | **NOT MET.** No Details/Add/Find menu at runtime; no drill-down. The extension's Right-Click Menu value is blank after the reopen, which may explain this (not established). | `t6-06`, `t8-05`, `t9-06`, `t10-12` | — |
| AC-6 | **Met in part**: the clean Designer Form closed once and reopened once (User scope, clean, FX_Items). The extension's three non-menu settings and the final component-level Right-Click Menu (blank) verified. The extension's Right-Click Menu is **not** verified as configured (blank). | `t10-02`, `t10-05`, `t10-09`, `t10-12` | — |
| AC-7 | **Supported** for T10: no field, component, class, record or object change; no Designer Save; no unload; no Add/Find; the editor left open (see below); the runtime tab not touched. | Audit; `t10-12` | The editor is open (not closed); a dialog is therefore open. |
| AC-8 | T10 portion complete. | Audit counts above | — |

### Editor left open (blocker for operator disposition)

- **State:** the Property Class Extension editor for FX_UM is open (OK and Help; no Cancel or close control found; Escape did not close it). It shows the readback values above. No field was edited.
- **Why not closed:** OK would confirm the editor with its current (blank Right-Click Menu) value and could mark the Form dirty with no authorized Save; Escape did not close it; the brief allows no other close.
- **Needed:** an operator decision on how to close the editor without confirming (or a confirmation, if the operator decides the blank value is to be kept).

### Knowledge state (T10)

| Finding | State |
| --- | --- |
| Designer Form close (native Form-tab control) and reopen (toolbar Open, Select Form OK) completed with no prompt; reopened clean, User scope | **observed** (one run, T10) |
| After the reopen, FX_UMCombobox binding `object.FX_UM`; Inheritance property class `FX_UM`; component Right-Click Menu blank; Add/Details, Find and Property blank | **observed** (one run, T10) |
| The extension editor opens directly on the ellipsis (no creation prompt) and shows Name `FX_UM`, User version, Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM` after the reopen | **observed** (one run, T10); persistence across this reopen is **observed** for these three fields and the Designer reopen |
| The extension's Right-Click Menu `StdDetailsAddFind` (T4) is **blank** after the reopen | **observed** (one run, T10); cause **unresolved** |
| Whether the blank extension menu explains the absent Details/Add/Find menu at runtime | **unresolved** (not tested; no field change authorized) |
| The tutorial inheritance lesson (component override defeats the extension) | **unverified** (not reproduced; the extension's own menu value is in question) |

### Open questions and next permitted action (T10)

1. **Operator decision on the open editor** (see above): how to close it without confirming.
2. **Operator decision on the extension's Right-Click Menu:** the value `StdDetailsAddFind` is not retained on readback. Any re-setting, and any Save, needs authorization (both Designer Saves are consumed; a further Save would be outside the brief's limits).
3. The Details drill-down (AC-5) cannot run while no Details/Add/Find menu appears.
4. The runtime FX_Items tab is unchanged (clean, record 1 of 3, no menu); the Designer is clean behind the open editor.
5. Classification remains **observed only, NOT replay_verified**.

---

## T9 — Web Client cache contingency (ONE Unload All Global Form Objects), runtime close/reopen, right-click: same 25-item menu, no Details/Add/Find; no Designer change (cycle 8)

Task T9 (bounded instruction: the single authorized Web Client cache contingency and its runtime check only; no Designer change, Save, Designer close/reopen, extension edit, checkout operation or other unload). Run `R-20261013-113227-AVrk`, cycle 8, task_message_id `743a4e99-ba51-4881-a952-747a9d74e239`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### T8 menu count reconciliation (performed first)

- The T8 saved snapshot `evidence/EXP-069-R2/t8-05-runtime-check2-menu-items-snapshot.yml` was read. It contains **25 `menuitem` entries** (lines 3, 5, 8, 11, 13, 15, 17, 19, 22, 24, 26, 28, 30, 32, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 56 of the file). Separators (5 `separator` lines) are not items.
- T8 recorded "24 items" in its heading, status line, observations, action table and knowledge table. **That count was wrong.** Its own verbatim list already had 25 names. Every occurrence has been corrected to 25 in this record (the verbatim list and the original snapshot are unchanged).

### Starting state (verified before the close)

- Tab list (one, before any select): tab 0 Designer (current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 1 selected (succeeded).
- Untargeted snapshot `evidence/EXP-069-R2/t9-00-runtime-fresh-snapshot-before-unload.yml`; `find` Save `[disabled]`; combobox `EA`; status `Unit of Measure (Object 1 of 3)`; no menu, no dialog.
- Screenshot `t9-01`: FX_Items clean; dumbbell; Description `45 pound iron`; Cost `45.00`; UM `EA`; Description `Each`. Clean; no menu.

### Runtime close (ONE)

- **ONE click** on `Close Panel FX_Items` (`f1e101`). No prompt. Screenshot `t9-02`: Form area empty.

### Web Client cache contingency — Unload All Global Form Objects (ONE)

- Navigation: Form menu (one click, `f1e10`); hover on `Definition` (`f1e269`) opened the submenu. Submenu items (verbatim, screenshot `t9-03`): `Designer`; `Runtime Builder...`; `Unload All Global Form Objects`; `Site Developer Impersonation`. The Designer item was **not** clicked.
- **ONE click** on `Unload All Global Form Objects` (`f1e315`, Web Client submenu). Native response: the menu closed; **no alert, dialog, error or timeout message** was found (`find` for alert, dialog, timeout, error, unload: no matches). Screenshot `t9-04`: the Web Client Form area empty, toolbar in its no-Form state. **Outcome: completed with no visible message.** The brief forbids retry, so no second unload was made.
- The Designer unload was **not** used.

### Runtime reopen (ONE)

- Form menu (one click, `f1e10`), `Open` (`f1e259`): Select Form dialog. Its single `FX_Items` row was read by accessibility `find` (dialog and OK ref `f1e368`); **no screenshot was taken of the dialog before OK in T9** (a correction to an earlier draft of this section).
- **ONE click** on `OK` (`f1e368`). Screenshot `t9-05`: FX_Items reopened; Description field shows its default focus with text highlighted (not edited; as in T1 and T8); dumbbell; Cost `45.00`; UM `EA`; Description `Each`; Save `[disabled]` (`find`); status `Description (Object 1 of 3)`. **Reopened clean on dumbbell, UM EA, record 1 of 3.** No record navigation was needed.

### Runtime check 3 — right-click (ONE)

- **ONE right-click** on the Unit of Measure combobox (`f1e521`).
- **Menu items, verbatim (targeted snapshot `t9-06-runtime-check3-menu-items-snapshot.yml`, 25 `menuitem` entries; screenshot `t9-06`):** `Refresh`; `Refresh current`; `Filter` (submenu arrow); `Next`; `Previous` (disabled); `First` (disabled); `Last`; `Get More Rows` (disabled); `New`; `Duplicate`; `Save` (disabled); `Save current` (disabled); `Delete`; `Validate`; `Notes for All`; `Documents for Current`; `Email for Current`; `Notes for Current`; `Graph`; `To Excel`; `To Form DataView`; `View Event Status` (disabled); `View Workflows`; `New Workflow`; `Help`.
- **Details: NOT present. Add: NOT present. Find: NOT present.** The menu is identical in content to the T8 check-2 menu (same 25 entries, same disabled states).

### Dismissal

- **Escape (ONE press)**: did **not** dismiss the menu (`find` "Refresh current" still returned the item; screenshot `t9-07-runtime-after-escape-menu-still-open.png`).
- **One ordinary blank-area click** at (1200, 700): menu dismissed; **no item chosen** (no Help, Refresh, New, Save, Delete or other item). Screenshot `t9-08`.

### Final runtime state (T9)

- Runtime FX_Items Form (tab 1, selected): open; **clean** (`find`: Save `[disabled]`); record dumbbell, UM `EA`, `Unit of Measure (Object 1 of 3)`; no menu; no dialog. No runtime Save, no record edit.
- Designer (tab 0): not selected and not changed in T9 (clean after Save 2; Right-Click Menu blank; Inheritance `FX_UM`; no dialog).

### Interpretation (observed; not diagnosed)

- After the single Web Client unload and a fresh reopen, the runtime UM combobox right-click still shows **no Details, Add or Find** menu. The cache reading (a stale runtime definition) is therefore **not supported** by this run as the explanation for the missing extension menu: the contingency that could have separated the cache reading was used, and the result did not change.
- The result remains negative for the extension menu in all three runtime checks: check 1 (component `StdDefault`: `Help` only), check 2 (component blank: 25-item standard menu), check 3 (after unload, component blank: the same 25-item menu).
- **Not established:** whether the stored extension value (`StdDetailsAddFind`, T4) exists as saved; whether the extension applies to this combobox at runtime; whether the Designer reopen (AC-6) shows the extension settings. These remain open.

### Contingency conditions and count

- Conditions per the brief (no menu after the last check; no component-level value): met after T8 and still met. **Web Client Unload All Global Form Objects: 1** (T9; the single allowed use). Designer unload: **0**.

### Browser action audit (T9, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 3 | `browser_snapshot` (untargeted, depth 8; `t9-00`) | Runtime FX_Items clean |
| 4 | `browser_find` "Object 1 of 3" / Save disabled / combobox / menu | Status, Save disabled, combobox EA; no menu |
| 5 | `browser_take_screenshot` `t9-01` | Succeeded (clean; dumbbell EA) |
| 6 | `browser_find` "Close Panel FX_Items" | Button `f1e101` |
| 7 | `browser_click` `f1e101` (close, **once**) | Closed; no prompt |
| 8 | `browser_take_screenshot` `t9-02` | Succeeded (Form closed) |
| 9 | `browser_find` "Form" | Form menu `f1e10` |
| 10 | `browser_click` `f1e10` (Form menu) | Opened |
| 11 | `browser_hover` `f1e269` (Definition) | Submenu opened |
| 12 | `browser_take_screenshot` `t9-03` | Succeeded (Definition submenu items) |
| 13 | `browser_find` regex (Unload / Designer / menuitems) | Submenu items read |
| 14 | `browser_click` `f1e315` (**Unload All Global Form Objects, once**) | Completed; no message |
| 15 | `browser_find` regex (alert / dialog / timeout / error) | No matches |
| 16 | `browser_take_screenshot` `t9-04` | Succeeded (Form area empty) |
| 17 | `browser_find` "Form" | Form menu |
| 18 | `browser_click` `f1e10` (Form menu) | Opened |
| 19 | `browser_find` "Open" | Open `f1e259` |
| 20 | `browser_click` `f1e259` (Form > Open) | Select Form dialog |
| 21 | `browser_find` "OK" | OK `f1e368` |
| 22 | (no action: the Select Form dialog was read by `find` only; no pre-OK screenshot) | — |
| 23 | `browser_click` `f1e368` (OK, **once**) | FX_Items reopened |
| 24 | `browser_take_screenshot` `t9-05` | Succeeded (dumbbell EA; clean) |
| 25 | `browser_find` Save disabled / combobox / Object 1 of 3 | Save disabled; combobox `f1e521` |
| 26 | `browser_click` `f1e521` (right button, **once**) | 25-item menu |
| 27 | `browser_find` menu / Details / Add / Find / Help | Menu present; Help last; no Details/Add/Find |
| 28 | `browser_snapshot` target `f1e523` (menu; `t9-06` yml) | 25 menuitems |
| 29 | `browser_take_screenshot` `t9-06` | Succeeded (full menu) |
| 30 | `browser_press_key` Escape (**once**) | Not dismissed |
| 31 | `browser_find` "Refresh current" | Still present |
| 32 | `browser_take_screenshot` `t9-07` | Succeeded (menu still open) |
| 33 | `browser_mouse_click_xy` (1200, 700) (blank area, **once**) | Menu dismissed; no item chosen |
| 34 | `browser_take_screenshot` `t9-08` | Succeeded (clean; EA; no menu) |
| 35 | `browser_find` menu / Help / Save disabled | No menu; Save disabled |

**T9 counts (exact, recounted from the call sequence):** browser calls **35**. Tab lists 1; tab selects 1 (succeeded); snapshots 2 (1 untargeted, 1 menu subtree; both saved as files); finds 13; screenshot calls 8 (`t9-01` to `t9-08`; all succeeded; all saved as PNG); element clicks 7 (runtime close 1; Form menu 2; Unload All Global Form Objects 1; Form > Open 1; Select Form OK 1; right-click 1); hover 1 (Definition submenu); coordinate clicks 1 (blank-area dismissal); key presses 1 (Escape, ineffective); typed text 0; wheel 0; drags 0. Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots: 0. (Check: 1 + 1 + 2 + 13 + 8 + 7 + 1 + 1 + 1 = 35.)

**Runtime close/reopen (T9): close 1, reopen 1.** Cumulative: runtime close **3** (T6, T8, T9), reopen **3**. **Right-click (T9): 1.** Cumulative right-clicks: T1 1, T6 1, T8 1, T9 1 = **4**. Escape presses (cumulative): T1 2, T6 1, T8 1, T9 1 = **5** (none dismissed the menu). Blank-area dismissals (cumulative): T1 1, T6 1, T8 1, T9 1 = **4**.

**Cumulative browser calls, EXP-069-R2 (T1–T9): 227 + 35 = 262.** Cumulative screenshot calls: 52 + 8 = **60**. Cumulative browser errors or timeouts: 1 (the T4 failed `browser_type`, element not editable; not executed).

**Cumulative mutations and lifecycle (T1–T9):**
- Ellipsis activations **1** (T3). Creation prompts answered **1** (Yes, T3). **Extension creations: 1.** Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4).
- **Designer Save count: 2** (Save 1 T5; Save 2 T7). No retry.
- **Component property changes: 1** (FX_UMCombobox component-level Right-Click Menu, T7).
- **Web Client Unload All Global Form Objects: 1** (T9; the single allowed use).
- Designer unload **0**. Designer close/reopen **0 / 0**. Runtime close/reopen **3 / 3** (T6, T8, T9). Runtime right-clicks **4** (T1, T6, T8, T9). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0** (no Details drill-down). Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.

### Worker-written file inventory (T9)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; the T8 count corrections; this T9 section)
- `evidence/EXP-069-R2/t9-00-runtime-fresh-snapshot-before-unload.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t9-01-runtime-before-close-state.png`
- `evidence/EXP-069-R2/t9-02-runtime-after-close.png`
- `evidence/EXP-069-R2/t9-03-form-definition-submenu-open.png`
- `evidence/EXP-069-R2/t9-04-after-unload-all-global-form-objects.png`
- `evidence/EXP-069-R2/t9-05-runtime-reopened-after-unload.png`
- `evidence/EXP-069-R2/t9-06-runtime-check3-menu-items-snapshot.yml` (menu subtree snapshot)
- `evidence/EXP-069-R2/t9-06-runtime-after-unload-right-click-menu.png`
- `evidence/EXP-069-R2/t9-07-runtime-after-escape-menu-still-open.png`
- `evidence/EXP-069-R2/t9-08-runtime-final-after-blank-click.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-54-08-534Z.yml`, `page-2026-10-13T03-54-15-073Z.yml`, `console-2026-10-13T03-53-39-656Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T9)

- `t9-01`: runtime clean before close; dumbbell EA; `(Object 1 of 3)`. **Proves** the clean pre-close state.
- `t9-02`: Form area empty after close; no prompt. **Proves** the close.
- `t9-03`: the Definition submenu with `Unload All Global Form Objects`. **Proves** the menu item read before the click. **Does not prove** the unload outcome.
- `t9-04`: after the unload: Form area empty; no message. **Proves** no visible alert or error. **Does not prove** the server-side cache state.
- `t9-05`: reopened FX_Items; dumbbell EA; clean. **Proves** the reopened record. **Does not prove** stored values.
- `t9-06`: 25-item menu; no Details, Add or Find. **Proves** the menu contents after the unload. **Does not prove** the menu definition source.
- `t9-07`: menu still open after Escape. **Proves** Escape did not dismiss.
- `t9-08`: final clean state; no menu. **Proves** the final state with no item chosen.

### Acceptance (T9)

| AC | T9 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T2. | T1–T2 | — |
| AC-2 | Carried from T4 (configured and confirmed once; scope as the Version text). | T4 `t4-12`, `t4-13` | — |
| AC-3 | Save 1 (T5); runtime check 1 (T6: `Help` only). | `t5-02`, `t6-06` | — |
| AC-4 | Override DONE (T7); Save 2 DONE (T7); runtime check 2 DONE (T8: 25-item menu). **Contingency unload: used once (T9)**, its condition met as written; runtime check after it (T9): 25-item menu, no Details/Add/Find. | `t7-06`, `t8-05`, `t9-04`, `t9-06` | Unload outcome shown only as the absence of a message. |
| AC-5 | **NOT MET.** Details/Add/Find did not appear at runtime in any check (T6, T8, T9); no drill-down. | `t6-06`, `t8-05`, `t9-06` | Cause unresolved. |
| AC-6 | **NOT RUN** (Designer close/reopen is still outstanding). | — | — |
| AC-7 | **Supported for T9**: no Designer change or save; no Designer unload; no Add/Find/Details; no record edit; no runtime Save; no menu or dialog open at the end (`t9-08`). The Web Client unload is the single authorized tenant-wide cache operation. | Audit; `t9-08` | — |
| AC-8 | T9 portion complete. | Audit counts above | — |

### Knowledge state (T9)

| Finding | State |
| --- | --- |
| The Web Client Unload All Global Form Objects completed with no visible alert, dialog or error (one run) | **observed** |
| After the unload and a runtime reopen, the UM combobox right-click shows the same 25-item standard menu, with no Details, Add or Find | **observed** (one run, T9) |
| The cache explanation (stale runtime definition) is not supported as the cause of the missing extension menu by this run | **observed** as a negative result of the contingency (one run); the cause is **unresolved** |
| Escape does not dismiss the runtime context menu; one blank-area click does (no item chosen) | **observed** (T1, T6, T8, T9) |
| Whether the stored extension value (`StdDetailsAddFind`) exists and applies at runtime | **unresolved** |
| The tutorial inheritance lesson (absence then presence after clearing the override) | **unverified** (not reproduced in this run) |

### Open questions and next permitted action (T9)

1. The Designer close and reopen (AC-6) is the next step (one clean close of the Designer FX_Items tab and one reopen through the toolbar Open), followed by a read-only check of the extension settings and the final component Right-Click Menu. The brief for T9 forbids it, so it was not done here.
2. The Details drill-down (AC-5) cannot run unless a Details/Add/Find menu appears. No further unload is authorized.
3. The runtime FX_Items Form is open and clean (`t9-08`).
4. Classification remains **observed only, NOT replay_verified**.

---

## T8 — Runtime Check 2: one runtime close, one reopen; one right-click shows a 25-item standard menu without Details/Add/Find; Escape ineffective; blank-area dismissal; no unload (cycle 7)

Task T8 (bounded instruction: Runtime Check 2 only; no Designer change or save; no unload; no Designer close/reopen; choose no menu item). Run `R-20261013-113227-AVrk`, cycle 7, task_message_id `976105a9-8d8f-4ef5-9be1-8e62b57bf337`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (verified before the close)

- Tab list (one, before any select): tab 0 Designer (current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 1 selected (succeeded).
- Untargeted snapshot `evidence/EXP-069-R2/t8-00-runtime-fresh-snapshot-before-close.yml`: runtime Mongoose tab; FX_Items tab; Save `[disabled]`.
- Screenshot `t8-01`: FX_Items; dumbbell, Description `45 pound iron`, Cost `45.00`, UM `EA`, Description `Each`; status `Unit of Measure (Object 1 of 3)`; Save greyed; no menu; no dialog. **Clean.**
- The Designer tab was not selected or changed in T8.

### Runtime close (ONE)

- **ONE click** on the native `Close Panel FX_Items` control (`f1e101`). No prompt. Screenshot `t8-02`: the Form area empty.

### Runtime reopen (ONE)

- Form menu (one click, `f1e10`), then `Open` (`f1e259`): the Select Form dialog with one `FX_Items` / `FX_Items` row, selected (screenshot `t8-03`).
- **ONE click** on `OK` (`f1e354`). Screenshot `t8-04`: FX_Items reopened on dumbbell, Item `dumbbell`, Description `45 pound iron` (text highlighted by default focus, not edited, as in T1), Cost `45.00`, UM `EA`, Description `Each`; status `Description (Object 1 of 3)`; Save `[disabled]` (`find`). **Reopened clean on dumbbell, UM EA.** No record navigation was needed.

### Runtime Check 2 — right-click (ONE)

- **ONE right-click** on the Unit of Measure combobox (`f1e507`, ref from a fresh `find`).
- **Menu items, verbatim (accessibility `find` and targeted snapshot `t8-05-runtime-check2-menu-items-snapshot.yml`; order as shown):** `Refresh`; `Refresh current`; `Filter` (submenu arrow); `Next`; `Previous` (disabled); `First` (disabled); `Last`; `Get More Rows` (disabled); `New`; `Duplicate`; `Save` (disabled); `Save current` (disabled); `Delete`; `Validate`; `Notes for All`; `Documents for Current`; `Email for Current`; `Notes for Current`; `Graph`; `To Excel`; `To Form DataView`; `View Event Status` (disabled); `View Workflows`; `New Workflow`; `Help`. **25 items.**
- **Details, Add and Find: none of them appears** (`find` regex over the menu; not in the screenshot `t8-05`). The menu is **not** the Help-only menu of check 1.
- Screenshot `t8-05-runtime-check2-right-click-menu.png`: the full menu under the combobox, value `EA` highlighted.

### Dismissal

- **Escape (ONE press)**: did **not** dismiss the menu. `find` "menuitem Refresh" still returned the item; screenshot `t8-06-runtime-after-escape-menu-still-open.png` shows the menu open. `find` "Help" still showed the menu item.
- **One ordinary blank-area click** at (1200, 700). Result: the menu dismissed (no menu in the tree). Screenshot `t8-07`. **No item was chosen** (no Help, Refresh, New, Save, Delete or other item).

### Final runtime state (T8)

- Runtime FX_Items Form (tab 1, selected): open; **clean** (`find`: Save `[disabled]`); record dumbbell, UM `EA`, `Unit of Measure (Object 1 of 3)`; no menu; no dialog. No Save, no record edit, no runtime Save.
- Designer (tab 0): not selected and not changed in T8 (clean after Save 2 in T7; Right-Click Menu blank; no dialog).

### Interpretation (observed; not diagnosed)

- **Negative for the extension menu:** the Details/Add/Find menu did not appear in check 1 (component value `StdDefault`: menu `Help` only) or check 2 (component value blank: the 25-item standard menu). The positive result the tutorial predicts (the extension menu shown once the component override is cleared) was **not** observed.
- **Observed change between check 1 and check 2:** after the component value was cleared, the menu changed from `Help` only to the broader standard menu. The component-level value therefore affects which menu is offered, but the extension's Details/Add/Find menu was not one of the offered menus in either state.
- **Not established (cause open):** whether the extension's Right-Click Menu value (`StdDetailsAddFind`, confirmed in T4) was stored as the extension value; whether the runtime is serving a cached (pre-extension) definition; or whether the class-extension menu is not applied to this combobox in this environment. The brief's cache contingency (Web Client Unload All Global Form Objects) is the next step that could separate the cache reading from the others; it was not invoked here.

### Contingency conditions (as written in the brief; NOT invoked)

- The brief's cache contingency applies "only if the last check still does not show the menu and no component-level value remains." Both conditions are **met** after check 2 (no Details/Add/Find menu; the component-level Right-Click Menu is blank). T8 does not authorize the unload, so the contingency is **not invoked** (Web Client unload count **0**).

### Browser action audit (T8, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 3 | `browser_snapshot` (untargeted, depth 8; `t8-00`) | Runtime FX_Items clean |
| 4 | `browser_find` "Object 1 of 3" | Status read |
| 5 | `browser_find` combobox / Save disabled | Combobox `EA`; Save disabled |
| 6 | `browser_take_screenshot` `t8-01` | Succeeded (clean; dumbbell EA) |
| 7 | `browser_find` "Close Panel FX_Items" | Button `f1e101` |
| 8 | `browser_click` `f1e101` (close, **once**) | Closed; no prompt |
| 9 | `browser_take_screenshot` `t8-02` | Succeeded (Form closed) |
| 10 | `browser_find` "Form" | Form menu `f1e10` |
| 11 | `browser_click` `f1e10` (Form menu) | Opened |
| 12 | `browser_find` "Open" | Open item `f1e259` |
| 13 | `browser_click` `f1e259` (Form > Open) | Select Form dialog |
| 14 | `browser_find` "OK" | OK `f1e354` |
| 15 | `browser_take_screenshot` `t8-03` | Succeeded (one FX_Items row, selected) |
| 16 | `browser_click` `f1e354` (OK, **once**) | FX_Items reopened |
| 17 | `browser_take_screenshot` `t8-04` | Succeeded (dumbbell EA; clean) |
| 18 | `browser_find` Save disabled / combobox | Save disabled; combobox `f1e507` |
| 19 | `browser_click` `f1e507` (right button, **once**) | 25-item menu |
| 20 | `browser_find` menu items | Items read; no Details/Add/Find |
| 21 | `browser_snapshot` target `f1e509` (menu; `t8-05` yml) | Full menu subtree |
| 22 | `browser_take_screenshot` `t8-05` | Succeeded (full menu) |
| 23 | `browser_press_key` Escape (**once**) | Not dismissed |
| 24 | `browser_find` "menuitem Refresh" | Still present |
| 25 | `browser_take_screenshot` `t8-06` | Succeeded (menu still open) |
| 26 | `browser_find` "Help" | Menu still present |
| 27 | `browser_mouse_click_xy` (1200, 700) (blank area, **once**) | Menu dismissed; no item chosen |
| 28 | `browser_take_screenshot` `t8-07` | Succeeded (clean; EA; no menu) |
| 29 | `browser_find` menu / Help / Save disabled | No menu; Save disabled |

**T8 counts (exact):** browser calls **29**. Tab lists 1; tab selects 1 (succeeded); snapshots 2 (`t8-00`, the `t8-05` menu subtree; both saved as files); finds 11; screenshot calls 7 (`t8-01` to `t8-07`; all succeeded); element clicks 5 (close; Form menu; Open; OK; right-click); coordinate clicks 1 (blank-area dismissal); key presses 1 (Escape, ineffective); typed text 0; wheel 0; drags 0. Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots: 0.

**Runtime close/reopen (T8): close 1, reopen 1.** Cumulative since EXP-069-R2 began: runtime close **2**, reopen **2** (T6 and T8). **Right-click count (T8): 1.** Cumulative right-clicks: T1 1, T6 1, T8 1 = **3**. Escape presses (cumulative): T1 2, T6 1, T8 1 = **4** (none dismissed the menu). Blank-area dismissals (cumulative): T1 1, T6 1, T8 1 = **3**.

**Cumulative browser calls, EXP-069-R2 (T1–T8): 198 + 29 = 227.** Cumulative screenshot calls: 45 + 7 = **52**. Cumulative browser errors or timeouts: 1 (the T4 failed `browser_type`, element not editable; not executed).

**Cumulative mutations and lifecycle (T1–T8):**
- Ellipsis activations **1** (T3). Creation prompts answered **1** (Yes, T3). **Extension creations: 1.** Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4).
- **Designer Save count: 2** (Save 1 in T5; Save 2 in T7). No retry. Save responses: Save 1 `Global object(s) were saved.`; Save 2 `Form [FX_Items] and global object(s) were saved.`
- **Component property changes: 1** (FX_UMCombobox component-level Right-Click Menu, `StdDefault` to blank; T7).
- **Web Client Unload All Global Form Objects: 0.** Designer unload **0**. Designer close/reopen **0 / 0** (the required single Designer close/reopen is still outstanding, see below). Runtime close/reopen **2 / 2** (T6, T8). Runtime right-clicks **3** (T1, T6, T8). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0** (no Details drill-down: the Details item was not present). Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.

### Worker-written file inventory (T8)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; this T8 section)
- `evidence/EXP-069-R2/t8-00-runtime-fresh-snapshot-before-close.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t8-01-runtime-before-close-state.png`
- `evidence/EXP-069-R2/t8-02-runtime-after-close.png`
- `evidence/EXP-069-R2/t8-03-select-form-dialog-before-ok.png`
- `evidence/EXP-069-R2/t8-04-runtime-reopened-fx_items.png`
- `evidence/EXP-069-R2/t8-05-runtime-check2-menu-items-snapshot.yml` (menu subtree snapshot)
- `evidence/EXP-069-R2/t8-05-runtime-check2-right-click-menu.png`
- `evidence/EXP-069-R2/t8-06-runtime-after-escape-menu-still-open.png`
- `evidence/EXP-069-R2/t8-07-runtime-final-after-blank-click.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-51-31-119Z.yml`, `page-2026-10-13T03-51-58-409Z.yml`, `console-2026-10-13T03-51-15-872Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T8)

- `t8-01` (before close): runtime FX_Items clean; dumbbell, UM `EA`, `Unit of Measure (Object 1 of 3)`; no menu. **Proves** the clean pre-close state. **Does not prove** the database state.
- `t8-02` (after close): Form area empty; no prompt. **Proves** the close completed with no prompt.
- `t8-03` (Select Form): one FX_Items row, selected. **Proves** the single candidate row. **Does not prove** which instance opened.
- `t8-04` (after reopen): dumbbell, UM `EA`, `(Object 1 of 3)` with `Description` focus; Save greyed. **Proves** the reopened record and clean state. **Does not prove** stored values.
- `t8-05` (Check 2 menu): the 25-item menu under the combobox, with no Details, Add or Find. **Proves** the menu contents on this right-click. **Does not prove** the menu definition's source or the cause.
- `t8-06` (after Escape): the menu still open. **Proves** Escape did not dismiss it.
- `t8-07` (final): no menu; Save greyed; EA; `(Object 1 of 3)`. **Proves** the final runtime state with no item chosen.

### Acceptance (T8)

| AC | T8 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T2. | T1–T2 | — |
| AC-2 | Carried from T4 (configured and confirmed once; scope as the Version text). | T4 `t4-12`, `t4-13` | Saved values not read from a Designer reopen. |
| AC-3 | Save 1 (T5); runtime check 1 (T6: `Help` only). | `t5-02`, `t6-06` | — |
| AC-4 | Override DONE (T7: `StdDefault` cleared; Save 2 response recorded). **Runtime check 2 DONE in T8** (25-item menu; no Details/Add/Find). **Contingency unload NOT invoked (0).** Its conditions are met as written; it was not authorized in T8. | `t7-02`, `t7-05`, `t7-06`, `t8-05`, `t8-07` | The unload decision is the operator's. |
| AC-5 | **NOT MET.** The Details/Add/Find menu did not appear at runtime in either check; no Details drill-down was performed. | `t6-06`, `t8-05` | Depends on cause (cache or definition); unresolved. |
| AC-6 | **NOT RUN** (the Designer close/reopen is for a later task). | — | — |
| AC-7 | **Supported for T8**: no Designer change or save; no unload; no Add/Find/Details; no record edit; no runtime Save; no menu open at the end (`t8-07`); the runtime Form open and clean. | Audit; `t8-07` | — |
| AC-8 | T8 portion complete. | Audit counts above | — |

### Inheritance observation (negative in both checks)

- **Check 1 (component `StdDefault`, T6):** menu `Help` only. No extension menu. Negative.
- **Check 2 (component value blank, T8):** a 25-item standard menu; no Details, Add or Find. Negative for the extension menu.
- **Positive condition:** **not observed** in this run.
- **Tutorial lesson status:** the absence in check 1 matches the tutorial's description of a component-level override, but check 2 shows that clearing the override did **not** surface the extension menu either. So the tutorial's absence-then-presence result is **not reproduced** in this run.

### Knowledge state (T8)

| Finding | State |
| --- | --- |
| After Save 1, a runtime reopen, and a right-click on the UM combobox with the component value `StdDefault`, the menu shows only `Help` | **observed** (one run, T6) |
| After Save 2 (component value blank), a runtime reopen, and a right-click, the menu shows 25 standard items (Refresh … New Workflow, Help) with no Details, Add or Find | **observed** (one run, T8) |
| Details, Add and Find were not offered at runtime in either check | **observed** (T6 and T8) |
| Escape does not dismiss the runtime context menu; one blank-area click does (no item chosen) | **observed** (T1, T6, T8; cause unresolved) |
| Cause of the missing extension menu (cache, stored extension value, or not applied to this combobox) | **unresolved** |
| The tutorial inheritance lesson (component override defeats the extension; clearing it reveals the extension) | **unverified** (not reproduced in this run) |
| The contingency Web Client unload would separate the cache reading from the others | **candidate** (not invoked; decision for the operator) |

### Open questions and next permitted action (T8)

1. **Operator decision on the cache contingency:** the brief's conditions are met as written (no Details/Add/Find; no component-level value). Its unload is the single allowed Web Client unload, and it requires its own authorization. T8 did not invoke it.
2. **Designer close/reopen (AC-6):** still outstanding (one clean close and one reopen through the toolbar Open), along with a verification of the extension settings and the final component value after the reopen.
3. **Drill-down (AC-5):** cannot run until a Details/Add/Find menu appears.
4. The runtime FX_Items Form is open and clean (`t8-07`).
5. Classification remains **observed only, NOT replay_verified**.

---

## T7 — Override: clear the component-level Right-Click Menu of FX_UMCombobox (StdDefault to blank), readback, Designer Save 2 (one native Save); no runtime, no unload, no close/reopen (cycle 6)

Task T7 (bounded instruction: override step and Designer Save 2 only; no runtime right-click; no unload; no close/reopen; no extension edit; no Add/Find/Details; no checkout). Run `R-20261013-113227-AVrk`, cycle 6, task_message_id `c2683e9d-02d7-447a-8bfa-b784b7f535fd`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (verified before the change)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, `mode=designer`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 0 selected (succeeded).
- Untargeted snapshot `evidence/EXP-069-R2/t7-00-designer-pre-override-fresh-snapshot.yml`: Designer FX_Items; Save `[disabled]`; no dialog.
- Screenshot `t7-01`: FX_Items heading; footer `ScopeType: User / ScopeName: …`; FX_UMCombobox (EnhancedCombo) selected; toolbar Save and Undo greyed; no dialog or alert. **Clean.**
- Positive identification of the property: the Behavior group's **Right-Click Menu** row (treeitem `Right-Click Menu`, value cell with `StdDefault`, dropdown and `Open Edit` ellipsis button). The row was brought into view by a view-only scroll of the Properties pane (mouse wheel over the pane); a second view-only scroll positioned it. Screenshot `t7-02` (`evidence/EXP-069-R2/t7-02-behavior-group-right-click-menu-before-clear.png`): Right-Click Menu `StdDefault`; Drag Image, Enabled When, Required When, Theme Class When, Visible When and the Data Source rows (Binding Type `Property`, Binding `object.FX_UM`) all visible and unchanged. The first wheel scroll overshot to the Data Source rows; its screenshot was overwritten by the corrected one at the same filename.
- **Before value (recorded): `StdDefault`** (the component-level value, as set since EXP-069 T1).
- The Right-Click Menu option list was **not** reopened for this step (the blank value is produced by clearing, not by choosing an option), so `menu_blank` and every other option was not selected.

### Property clear (ONE operation, plus focus move)

- **Operation:** the value cell's text (`StdDefault`) was clicked once (`e1339`; the field took focus with the text highlighted; screenshot `t7-03`). One **Delete** key press (the highlighted text was removed; the field became empty; screenshot `t7-04`). No other key, no typing, no option click.
- **Focus move (neutral):** one click on the Properties panel header (1650, 86), not on any row or option. This is a focus change only.
- **Readback after focus moved (`find` and screenshot `t7-05`):** the Right-Click Menu value cell has **no text child** (the accessibility gridcell now holds only the dropdown arrow). The visible value cell is blank. `menu_blank` and `StdDefault` are not shown. **Verified blank.** The Data Source binding (`Property` / `object.FX_UM`) and all other visible rows are unchanged.
- The Save and Undo became **enabled** after the clear (dirty; `t7-05`), which is the expected sign that the change was registered.

### Designer Save 2 (ONE click)

- **ONE click** on the native toolbar Save (`e1832`). No retry.
- **Native response, verbatim (toast, top right):** heading `Save`; body **`Form [FX_Items] and global object(s) were saved.`**; a Close (×) control on the toast. No alert dialog, no validation error, no timeout.
- **Immediately after (find, `t7-06`):** toolbar Save `[disabled]`; Undo greyed (disabled in the toolbar); Regenerate Form disabled. The Form stays open: `FX_Items` heading; footer `ScopeType: User`.
- **Component state after Save 2 (readback):** Right-Click Menu value cell blank (no text child; `t7-06`). Binding `object.FX_UM` unchanged.
- **Extension row (view-only find):** `Edit Property Class Extension For Property Class` = `FX_UM` (unchanged; the extension editor was not reopened).

### Browser action audit (T7, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` (untargeted, depth 6; `t7-00`) | Designer FX_Items; Save disabled; no dialog |
| 4 | `browser_find` "Right-Click Menu" | Row present; value `StdDefault` |
| 5 | `browser_find` "Save" | Save `[disabled]` |
| 6 | `browser_take_screenshot` `t7-01` | Succeeded (clean; FX_UMCombobox) |
| 7 | `browser_mouse_move_xy` (1700, 560) | Pointer over the Properties pane (view) |
| 8 | `browser_mouse_wheel` (0, −400) | Pane scrolled (overshoot; view) |
| 9 | `browser_find` "Right-Click Menu" | Row now off-frame in the screenshot |
| 10 | `browser_take_screenshot` `t7-02` (first; overshoot) | Succeeded; file later overwritten |
| 11 | `browser_mouse_wheel` (0, −150) | Pane scrolled to the row (view) |
| 12 | `browser_take_screenshot` `t7-02` (corrected; overwrote the same filename) | Succeeded; Right-Click Menu visible |
| 13 | `browser_snapshot` target `e1332` (Right-Click Menu row) | Value cell `StdDefault`; ellipsis `e1343` |
| 14 | `browser_click` `e1339` (value text; focus, text highlighted) | Field focused; `StdDefault` selected |
| 15 | `browser_take_screenshot` `t7-03` | Succeeded (focused, highlighted) |
| 16 | `browser_press_key` Delete (**once**) | Field cleared |
| 17 | `browser_take_screenshot` `t7-04` | Succeeded (blank before focus move) |
| 18 | `browser_mouse_click_xy` (1650, 86), Properties header (focus move) | Focus moved |
| 19 | `browser_find` "Right-Click Menu" | No text child under the value cell (blank) |
| 20 | `browser_take_screenshot` `t7-05` | Succeeded (blank; Save enabled) |
| 21 | `browser_find` "Save" | Save enabled (dirty) |
| 22 | `browser_click` `e1832` (native toolbar Save, **once**, Save 2) | Toast `Save` / `Form [FX_Items] and global object(s) were saved.` |
| 23 | `browser_find` regex (saved / alert / error / timeout) | Toast text; no alert, error or timeout |
| 24 | `browser_find` "Save" | Save `[disabled]` |
| 25 | `browser_find` "Right-Click Menu" | Value blank |
| 26 | `browser_take_screenshot` `t7-06` | Succeeded (toast; Save greyed; blank value) |
| 27 | `browser_find` "Edit Property Class Extension For Property Class" | `FX_UM` (unchanged) |

**T7 counts (exact):** browser calls **27**. Tab lists 1; tab selects 1 (succeeded); snapshots 2 (1 untargeted, 1 targeted); finds 9; screenshot calls 7 (`t7-01`; `t7-02` twice, the second overwriting the first; `t7-03`, `t7-04`, `t7-05`, `t7-06`); element clicks 2 (the value cell; the Save); coordinate clicks 1 (the Properties-header focus move); mouse move 1; mouse wheel 2 (view only); key presses 1 (Delete, once); typed text 0; drags 0. Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots: 0.

**Cumulative browser calls, EXP-069-R2 (T1–T7): 171 + 27 = 198.** Cumulative screenshot calls: 38 + 7 = 45.

**Cumulative mutations and lifecycle (T1–T7):**
- Ellipsis activations **1** (T3). Creation prompts answered **1** (Yes, T3). **Extension creations: 1.** Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4).
- **Designer Save count: 2** (Save 1 in T5; Save 2 in T7). Both succeeded with a toast; no retry. **Save 2 response:** `Form [FX_Items] and global object(s) were saved.`
- **Component property changes: 1** (FX_UMCombobox component-level Right-Click Menu, `StdDefault` to blank; this is the only component-level change in the experiment; no other component or property changed).
- **Web Client Unload All Global Form Objects: 0** (the contingency is not used; its condition is not reached, see below).
- Designer unload **0**. Designer close/reopen **0 / 0**. Runtime close/reopen **1 / 1** (T6). Runtime right-click **2** (T1 and T6). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0**. Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.

### Worker-written file inventory (T7)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; this T7 section)
- `evidence/EXP-069-R2/t7-00-designer-pre-override-fresh-snapshot.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t7-01-pre-override-right-click-menu-stdDefault.png`
- `evidence/EXP-069-R2/t7-02-behavior-group-right-click-menu-before-clear.png` (the corrected frame; the first overshoot frame was overwritten at this path)
- `evidence/EXP-069-R2/t7-03-right-click-menu-focused.png`
- `evidence/EXP-069-R2/t7-04-right-click-menu-after-delete-before-blur.png`
- `evidence/EXP-069-R2/t7-05-right-click-menu-blank-readback-before-save.png`
- `evidence/EXP-069-R2/t7-06-after-designer-save-2.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-49-11-308Z.yml`, `page-2026-10-13T03-49-28-253Z.yml`, `console-2026-10-13T03-48-51-001Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T7)

- `t7-01`: clean pre-override state; FX_UMCombobox; Save greyed; User scope. **Proves** the clean start. **Does not prove** the Behavior rows (not in frame).
- `t7-02`: Right-Click Menu `StdDefault` in the Behavior group, with Data Source `Property` / `object.FX_UM` visible. **Proves** the before value and identity of the row. **Does not prove** the stored value.
- `t7-03`: `StdDefault` highlighted in the focused field (before the Delete). **Proves** the selection the Delete acted on.
- `t7-04`: the field empty after Delete, before focus moved. **Proves** the field is empty while focused. **Does not prove** the value after focus moved (see `t7-05`).
- `t7-05`: value cell blank after focus moved to the Properties header; Save and Undo enabled. **Proves** the blank readback and the dirty state. **Does not prove** the stored value.
- `t7-06`: toast `Save` / `Form [FX_Items] and global object(s) were saved.`; Save and Undo greyed; Form open; the value cell blank. **Proves** the Save 2 response and the clean post-Save UI. **Does not prove** persistence across close and reopen (not yet tested).

### Acceptance (T7)

| AC | T7 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T2. | T1–T2 | — |
| AC-2 | Carried from T4 (confirmed once; scope as the Version text). | T4 `t4-12`, `t4-13` | — |
| AC-3 | Save 1 response (T5); runtime check 1 done (T6; `Help` only). | `t5-02`, `t6-06` | — |
| AC-4 | **Override DONE**: the component-level Right-Click Menu recorded (`StdDefault`), cleared to blank, readback verified after focus moved; **Save 2 DONE** (one click; response recorded). **Runtime check 2 NOT run** (the brief stops in T7). Contingency unload **NOT used (0)**; its condition (no menu after check 2 with a blank component value) is not yet reached. | `t7-02`, `t7-05`, `t7-06` | Runtime check 2 is the next task. |
| AC-5 | **NOT MET yet** (the Details/Add/Find menu has not been observed at runtime; check 2 is pending). | — | Depends on runtime check 2. |
| AC-6 | **NOT RUN** (Designer close/reopen is for a later task). | — | — |
| AC-7 | **Supported for T7**: only the component's own Right-Click Menu value changed (intended); no other component, property, class, extension, record or object changed; no unload; no Add/Find/Details; no dialog or menu left open (the Save toast is a non-modal notification). | Audit; `t7-06` | — |
| AC-8 | T7 portion complete. | Audit counts above | — |

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| FX_UMCombobox's component-level Right-Click Menu was `StdDefault` before the change and is blank after clear and focus move (one run) | **observed** |
| One Delete on the selected value of the editable Right-Click Menu combobox produced a blank value (no option was chosen; `menu_blank` not selected) | **observed** (one run) |
| Save 2 returned the toast `Form [FX_Items] and global object(s) were saved.` and left the Form clean and open | **observed** (one run) |
| The override, check 2 result, persistence across reopen | **unresolved** (runtime check 2 and the Designer reopen are next) |
| Tutorial inheritance lesson (component-level value overrides the class extension) | **unverified** (check 2 will test it) |

### Open questions and next permitted action (T7)

1. **Next permitted action (needs a separate authorization):** runtime check 2. Close the clean runtime FX_Items Form once and reopen it once (through Form > Open > Select Form, one OK), right-click the Unit of Measure combobox once, record the menu verbatim with a screenshot, dismiss with Escape (or one blank-area click, no item chosen). If the Details/Add/Find menu appears, the drill-down (Details on dumbbell, EA) is the next step, and then the Designer close and reopen. If only `Help` appears, the contingency unload applies (one Web Client unload, the only one allowed), per the brief.
2. The runtime FX_Items Form is open and clean from T6 (it shows the state before Save 2 until it is closed and reopened).
3. The Designer is clean after Save 2; the component-level Right-Click Menu is blank.
4. Classification remains **observed only, NOT replay_verified**.

---

## T6 — Runtime Check 1: one runtime close, one reopen (Select Form OK); one right-click shows only `Help`; Escape ineffective; blank-area dismissal; no override (cycle 5)

Task T6 (bounded instruction: Runtime Check 1 only; no Designer change; no Save 2; no unload; no extension edit; no Designer close/reopen; choose nothing in the menu). Run `R-20261013-113227-AVrk`, cycle 5, task_message_id `363ccd6b-86a8-445f-bf34-53148ca268af`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (verified before the close)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 1 selected (succeeded).
- Untargeted snapshot `evidence/EXP-069-R2/t6-00-runtime-fresh-snapshot-before-close.yml`: runtime Mongoose tab; `FX_Items` tab selected; Save disabled.
- Screenshot `t6-01`: runtime FX_Items Form; record `dumbbell` (Item) with Description `45 pound iron`, Cost `45.00`, Unit of Measure combobox `EA`, Description `Each`; the status line reads `Unit of Measure (Object 1 of 3)`; the grid shows rows 1 dumbbell, 2 eggs, 3 guitar; Save greyed. **Clean.** No dirty indicator, no dialog, no menu.
- The Designer tab was **not** selected or changed in T6 (it stays on the clean post-Save-1 state from T5).

### Runtime close (ONE)

- **ONE click** on the native `Close Panel FX_Items` control on the runtime tab (`f1e101`). Result: the FX_Items tab closed with **no prompt** (no unsaved-change dialog). Screenshot `t6-02`: the runtime Form area is empty; the toolbar is in its no-Form state. **Proves** the Form closed with no prompt. **Does not prove** the stored state beyond this close.

### Runtime reopen (ONE)

- Form menu opened (one click, `f1e10`; screenshot `t6-03`): its items are `Open`, `Close and Save Changes` (disabled), `Close and Cancel Changes` (disabled), `Definition` (submenu), `Sign Out`, then the recent Forms `FX_Items`, `IDOs`, `Property Classes`, `Sql Tables`, `Export/Import Strings`, `IDO Projects`, `FX_UMs`, `FX_HelloWorld01`, `Data Maintenance Wizard`, `Runtime Builder Selection`.
- One click on `Open` (`f1e259`). The **Select Form** dialog appeared (screenshot `t6-04`): one row, `FX_Items` / `FX_Items`, selected; Filter `FX_Items`; OK / Cancel / Help.
- **ONE click** on `OK` (`f1e354`). Result: the FX_Items Form reopened (screenshot `t6-05`): record `dumbbell`, Description `45 pound iron`, Cost `45.00`, Unit of Measure `EA`, Description `Each`; the grid shows dumbbell, eggs, guitar; status `(Object 1 of 3)`; Save greyed. **The reopened Form shows the intended current record (dumbbell, UM EA) without any record navigation.** No record navigation, edit or runtime Save was performed.

### Runtime Check 1 — right-click (ONE)

- **ONE right-click** on the Unit of Measure combobox (`f1e506`, ref from a fresh `find`).
- **Menu items, verbatim:** `Help`. **One item only.** **No Details, Add or Find item.** Screenshot `t6-06` (`evidence/EXP-069-R2/t6-06-runtime-check1-right-click-menu.png`): the single `Help` item under the combobox, the value `EA` highlighted.
- **Interpretation (observed, not diagnosed):** the menu matches the T1 baseline (`Help` only). The extension's Details/Add/Find menu was **not** shown. This is a **negative** result for the extension: the component-level `Right-Click Menu` = `StdDefault` (unchanged since T1) is still set on FX_UMCombobox, and the tutorial says a component-level menu overrides the class extension. The brief's override step is the next test of that reading; it was not run here.

### Dismissal

- **Escape (ONE press)**: did **not** dismiss the menu. `find` "menuitem Help" still returned the item, and screenshot `t6-07` shows the `Help` menu still open. (Same as T1 in EXP-069-R2 and EXP-069 T1.)
- **One ordinary blank-area click** at (1200, 700) (the brief's permitted fallback). Result: the menu was dismissed (`find` "menuitem Help": no match). Screenshot `t6-08`: the record is still `dumbbell`, UM `EA`, `(Object 1 of 3)`, Save greyed, no menu. **No item was chosen.** No Details, Add, Find or Help click.

### Final runtime state (T6)

- Runtime FX_Items Form (tab 1, selected): open; **clean** (`find`: Save `[disabled]`); record dumbbell, UM `EA`, `(Object 1 of 3)`; no menu open; no dialog. The FX_Items Form is **open** (it was reopened); no Form is dirty.
- Designer tab (tab 0): not selected and not changed in T6. The Designer is the T5 state (FX_Items clean after Save 1; Save and Undo disabled; FX_UMCombobox selected; component Right-Click Menu `StdDefault`; no dialog).

### What was not done in T6 (by the brief)

- Override step (clear `StdDefault`) **not** performed; Save 2 **not** performed. The override condition holds (check 1 shows no Details/Add/Find menu and the component-level Right-Click Menu is non-blank), so the override is the **next** permitted action, pending authorization.
- Cache contingency unload **not** performed (it applies only after the override step's check).
- Drill-down (Details on dumbbell) **not** performed (the menu that offers Details did not appear).
- Designer close/reopen **not** performed. Extension editor **not** reopened.

### Browser action audit (T6, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 3 | `browser_snapshot` (untargeted, depth 8; `t6-00`) | Runtime FX_Items; clean |
| 4 | `browser_find` "Unit of Measure" | Runtime combobox `EA` read |
| 5 | `browser_find` "Object 1 of 3" | Status line read |
| 6 | `browser_take_screenshot` `t6-01` | Succeeded (clean; dumbbell EA) |
| 7 | `browser_find` "Close Panel FX_Items" | Button ref `f1e101` |
| 8 | `browser_click` `f1e101` (native close, **once**) | Closed; no prompt |
| 9 | `browser_take_screenshot` `t6-02` | Succeeded (Form closed) |
| 10 | `browser_find` "Form" | Form menu ref `f1e10` |
| 11 | `browser_click` `f1e10` (Form menu) | Menu opened |
| 12 | `browser_find` "Select Form" | No match (the Form menu has `Open`, not a Select Form item) |
| 13 | `browser_take_screenshot` `t6-03` | Succeeded (Form menu open) |
| 14 | `browser_find` "Open" | `Open` menu item `f1e259` |
| 15 | `browser_click` `f1e259` (Form > Open) | Select Form dialog opened |
| 16 | `browser_take_screenshot` `t6-04` | Succeeded (one row FX_Items / FX_Items) |
| 17 | `browser_find` "OK" | OK `f1e354` |
| 18 | `browser_click` `f1e354` (Select Form OK, **once**) | FX_Items reopened |
| 19 | `browser_take_screenshot` `t6-05` | Succeeded (dumbbell EA; Object 1 of 3) |
| 20 | `browser_find` "Unit of Measure:" | Combobox `f1e506` |
| 21 | `browser_click` `f1e506` (right button, **once**) | Menu `Help` |
| 22 | `browser_find` menu items | One item: `Help` |
| 23 | `browser_take_screenshot` `t6-06` | Succeeded (Help-only menu) |
| 24 | `browser_press_key` Escape (**once**) | Menu not dismissed |
| 25 | `browser_find` "menuitem Help" | Still present |
| 26 | `browser_take_screenshot` `t6-07` | Succeeded (menu still open) |
| 27 | `browser_mouse_click_xy` (1200, 700) (blank area, **once**) | Menu dismissed; no item chosen |
| 28 | `browser_take_screenshot` `t6-08` | Succeeded (no menu; EA; Object 1 of 3) |
| 29 | `browser_find` "menuitem Help" / Save `[disabled]` | Menu absent; Save disabled |

**T6 counts (exact):** browser calls **29**. Tab lists 1; tab selects 1 (succeeded); snapshots 1 (untargeted; saved as a file); finds 11; screenshots 8 (`t6-01` to `t6-08`; all succeeded); element clicks 5 (Close Panel; Form menu; Form > Open; Select Form OK; the right-click); coordinate clicks 1 (blank-area dismissal); key presses 1 (Escape, ineffective); typed text 0; wheel 0; drags 0. Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots used: 0.

**Runtime close/reopen count (T6): close 1, reopen 1** (cumulative since EXP-069-R2 began: close 1, reopen 1). **Right-click count (T6): 1** (cumulative: T1 1 + T6 1 = **2**). Escape presses (cumulative): T1 2 (the T1 record) + T6 1 = 3 (none dismissed the menu). Blank-area dismissals: T1 1 + T6 1 = 2.

**Cumulative browser calls, EXP-069-R2 (T1–T6): 142 + 29 = 171.** Cumulative screenshots: 30 + 8 = **38**. Cumulative browser errors or timeouts: 1 (the T4 failed `browser_type`, element not editable; not executed).

**Cumulative mutations and lifecycle (T1–T6):**
- Ellipsis activations **1** (T3). Creation prompts answered **1** (Yes, T3). **Extension creations: 1.** Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4).
- **Designer Save count: 1** (T5). Save 2 **0** (not performed; the override is pending). No Save retry.
- **Web Client Unload All Global Form Objects: 0** (the contingency has not been used; the cache step is pending its condition).
- Designer unload **0**. Designer close/reopen **0 / 0**. Runtime close/reopen **1 / 1** (T6). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0**. Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.
- Component changes **0** (FX_UMCombobox's Right-Click Menu remains `StdDefault`).

### Worker-written file inventory (T6)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; this T6 section)
- `evidence/EXP-069-R2/t6-00-runtime-fresh-snapshot-before-close.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t6-01-runtime-before-close-state.png`
- `evidence/EXP-069-R2/t6-02-runtime-after-close.png`
- `evidence/EXP-069-R2/t6-03-form-menu-opened.png`
- `evidence/EXP-069-R2/t6-04-select-form-dialog-after-open.png`
- `evidence/EXP-069-R2/t6-05-runtime-reopened-fx_items.png`
- `evidence/EXP-069-R2/t6-06-runtime-check1-right-click-menu.png`
- `evidence/EXP-069-R2/t6-07-runtime-after-escape.png`
- `evidence/EXP-069-R2/t6-08-runtime-final-after-blank-click.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-46-17-401Z.log`, `page-2026-10-13T03-46-45-703Z.yml`, `page-2026-10-13T03-46-51-432Z.yml`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T6)

- `t6-01` (before close): runtime FX_Items record dumbbell, UM `EA`, `(Object 1 of 3)`, Save greyed, no menu. **Proves** the clean pre-close state and the current record. **Does not prove** the database state.
- `t6-02` (after close): the Form area is empty; no prompt. **Proves** the close completed with no prompt. **Does not prove** persistence.
- `t6-03` and `t6-04`: the Form menu items, and the Select Form dialog with one FX_Items row. **Proves** the reopen route and the single candidate row. **Does not prove** which Form instance opened.
- `t6-05` (after reopen): dumbbell, EA, `(Object 1 of 3)`, Save greyed. **Proves** the reopened Form shows the dumbbell record with UM EA. **Does not prove** the stored values (the screen shows the loaded values).
- `t6-06` (Check 1 menu): `Help` only. **Proves** the menu contents on this right-click. **Does not prove** the complete menu definition or the cause.
- `t6-07` (after Escape): `Help` still open. **Proves** Escape did not dismiss the menu.
- `t6-08` (final): no menu; EA; `(Object 1 of 3)`; Save greyed. **Proves** the final runtime state with no item chosen.

### Acceptance (T6)

| AC | T6 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T2. | T1–T2 | — |
| AC-2 | Carried from T4 (configured, confirmed once). | T4 `t4-12`, `t4-13` | Saved field values not read in a Designer reopen. |
| AC-3 | **Runtime check 1 DONE**: one runtime close and one reopen; the menu items recorded (`Help` only). Save 1 response recorded in T5. | `t6-02`, `t6-05`, `t6-06`, `t6-08` | — |
| AC-4 | **Override NOT performed** (pending; the brief stops after check 1). Save 2 NOT invoked. Contingency unload NOT invoked (0). | `t6-06` (non-blank `StdDefault` still set) | Override and check 2 are the next task's step. |
| AC-5 | **NOT MET yet**: the Details/Add/Find menu did not appear at runtime in check 1; no drill-down. | `t6-06` | Depends on the override step (pending). |
| AC-6 | **NOT RUN** (Designer close/reopen is for a later task). | — | — |
| AC-7 | **Supported for T6**: no Designer change; no Save; no unload; no Add/Find/Help; no menu left open (`t6-08`); the Form is open and clean (not closed dirty). | Audit; `t6-08` | — |
| AC-8 | T6 portion complete. | Audit counts above | — |

### Inheritance observation (T6; negative, the first runtime result after the extension)

- **Negative condition observed:** after one Designer Save of the extension (Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`), the runtime UM combobox right-click shows **only `Help`**. The extension's Details/Add/Find menu is **not** shown.
- **Positive condition:** **not observed** (the override and check 2 are not yet run).
- **Tutorial lesson status:** this matches the tutorial's described absence (the component-level `StdDefault` overrides the class extension), but the absence is **not yet attributed** to the component override: the component-level value has not been cleared. Attribution requires the override step and check 2.

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| A runtime close with no prompt, then Form > Open > Select Form (one row) and OK reopen the FX_Items Form on dumbbell, UM EA, `(Object 1 of 3)` | **observed** (one run, T6) |
| After Designer Save 1 and the runtime reopen, the UM combobox right-click shows only `Help` (no Details/Add/Find) | **observed** (one run, T6); negative for the extension |
| Escape does not dismiss the runtime context menu; one blank-area click does (no item chosen) | **observed** (T1 and T6; cause unresolved) |
| The extension's menu is hidden by the component-level `StdDefault` | **unverified** (tutorial lesson; the override step will test it) |
| The extension is persisted across the Designer close/reopen | **unresolved** (Designer reopen not yet performed) |

### Open questions and next permitted action (T6)

1. **Next permitted action (needs a separate authorization):** the override step. Record the component-level Right-Click Menu (`StdDefault`), clear only that property on FX_UMCombobox, verify the readback, perform Designer Save 2 (the one allowed second Save), record its response; then Runtime check 2 (close and reopen the runtime FX_Items once; right-click once; record; dismiss). Per the brief, an override changes a component property and is a deliberate step, so the operator should confirm it.
2. If check 2 shows the Details/Add/Find menu, the drill-down (Details on dumbbell, EA) is the next step, then the Designer close/reopen. If it still shows `Help` only, the cache contingency (one Web Client unload) applies only after the override check, per the brief.
3. The runtime Form is open and clean; the Designer is clean with the T5 state.
4. Classification remains **observed only, NOT replay_verified**.

---

## T5 — Designer Save 1 (one native toolbar Save); Save disabled; toast "Global object(s) were saved."; Form open; no runtime action (cycle 4)

Task T5 (bounded instruction: Designer Save 1 only; no runtime, no override, no checkout, no close/reopen, no unload). Run `R-20261013-113227-AVrk`, cycle 4, task_message_id `019a4c94-24db-446f-b0f8-84dabf199c23`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (verified read-only before the Save)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, `mode=designer`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 0 selected (succeeded).
- Untargeted snapshot `evidence/EXP-069-R2/t5-00-designer-pre-save-fresh-snapshot.yml`: toolbar Save **enabled**; Regenerate Form and Undo enabled before the Save.
- Screenshot `t5-01`: FX_Items heading; footer `ScopeType: User / ScopeName: …`; FX_UMCombobox (EnhancedCombo) selected; Undo and Save enabled (dirty); no dialog open; Inheritance `View Attributes Inherited From Property` = `FX_UM`, `Edit Property Class Extension For Property Class` = `FX_UM`.
- Read-only dialog check (find for `alertdialog`, `dialog`, `Property Class Extension`, `Timeout`, `does not exist`): the only matches were the Inheritance rows. No alertdialog, no Property Class Extension dialog, no timeout or prompt. The extension editor was **not** reopened.
- Session usable (no Session Expired modal, no sign-in page, no portal banner). Re-login **0**.

### Designer Save 1 (ONE click)

- **ONE click** on the native toolbar Save (`e16`). No retry.
- **Native response, verbatim (toast, top right; accessibility `find`):** heading **`Save`**; body **`Global object(s) were saved.`** with a Close (×) control on the toast. No alert dialog. No validation error. No timeout. No other message text.
- **Immediately after (find, `t5-02`):** toolbar Save `[disabled]`; Undo `[disabled]`; Redo `[disabled]`; Regenerate Form `[disabled]`. The Form stays open: tab heading `FX_Items`; footer `ScopeType: User`.
- Screenshot `evidence/EXP-069-R2/t5-02-after-designer-save-1.png`: toast `Save — Global object(s) were saved.` over the Properties header; the toolbar Save greyed; the Form open with FX_UMCombobox selected; Inheritance `FX_UM` rows visible. **Proves** the Save completed in the UI with that response, and the Form remains open and clean. **Does not prove** the database state, the extension's stored field values, or that the extension is visible in a reopened Form (no reopen was performed).
- The toast's wording differs from EXP-068-R2's Save toast (`Form [FX_Items] and global object(s) were saved.`). Both are recorded as observed; the difference is not interpreted.

### Post-Save readback (view only)

- Component `Right-Click Menu` (find): **`StdDefault`** (unchanged; no component-level change was made).
- Inheritance `Edit Property Class Extension For Property Class`: `FX_UM` (unchanged, per the earlier find rows).
- No extension field was reopened or edited in T5.

### Browser action audit (T5, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` (untargeted, depth 6; `t5-00`) | Designer FX_Items; Save enabled; no dialog in the tree |
| 4 | `browser_find` "Save" | Save enabled |
| 5 | `browser_take_screenshot` `t5-01` | Succeeded (pre-Save state) |
| 6 | `browser_find` regex (alertdialog / dialog / Property Class Extension / Timeout / does not exist) | Only Inheritance rows matched; no dialog |
| 7 | `browser_click` `e16` (native toolbar Save) — **once** | Returned; toast `Save` / `Global object(s) were saved.` |
| 8 | `browser_find` "Save" | Save `[disabled]`; Regenerate Form `[disabled]`; toast visible |
| 9 | `browser_find` regex (saved / Save / alert / error / Timeout / warning) | Toast text read; no alert, error or timeout |
| 10 | `browser_take_screenshot` `t5-02` | Succeeded (toast; Save greyed) |
| 11 | `browser_find` "Right-Click Menu" | `StdDefault` |
| 12 | `browser_find` "Undo" | Undo `[disabled]`; Redo `[disabled]` |

**T5 counts (exact):** browser calls **12**. Tab lists 1; tab selects 1 (succeeded); snapshots 1 (untargeted; saved as a file); finds 6; screenshots 2 (`t5-01`, `t5-02`; both succeeded); element clicks 1 (the Save; executed once); coordinate clicks 0; typed text 0; key presses 0; wheel 0; drags 0; runtime actions 0. Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Recovery snapshots used: 0.

**Cumulative browser calls, EXP-069-R2 (T1 + T2 + T3 + T4 + T5): 31 + 19 + 27 + 53 + 12 = 142.** Cumulative screenshots: 6 + 4 + 5 + 13 + 2 = 30. Cumulative browser errors or timeouts: 1 (the T4 failed `browser_type`, element not editable; not executed).

**Cumulative mutations and lifecycle (T1–T5):**
- Ellipsis activations **1** (T3). Creation prompts answered **1** (Yes, T3). Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4).
- **Designer Save count: 1** (T5, Save 1). Save 2 **0** (not required yet). No Save retry. Save 1 response: toast `Save` / `Global object(s) were saved.`; no error.
- Designer unload **0**. Web Client unload **0**. Designer close/reopen **0 / 0**. Runtime close/reopen **0 / 0**. Runtime right-click **1** (T1 only). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0**. Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.
- Component changes **0** (FX_UMCombobox's own Right-Click Menu remains `StdDefault`).

### Designer and runtime state at the end of T5

- **Designer (tab 0, selected):** FX_Items; footer `ScopeType: User`; **clean** (toolbar Save and Undo disabled); FX_UMCombobox selected; Right-Click Menu (component) `StdDefault`; Inheritance `FX_UM`. **No dialog open.** A non-modal Save toast is visible (its own Close control was not clicked; it is a notification, not a dialog).
- **Runtime (tab 1):** not selected in T5. Last state (T1): record 1 of 3, EA, Save disabled, no menu open. The runtime Form was opened before this Save and therefore still shows the pre-Save state until it is closed and reopened (EXP-068-R2 observation); that reopen is the next task's runtime check 1.

### Worker-written file inventory (T5)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; this T5 section)
- `evidence/EXP-069-R2/t5-00-designer-pre-save-fresh-snapshot.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t5-01-pre-save-designer-state.png`
- `evidence/EXP-069-R2/t5-02-after-designer-save-1.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-44-54-699Z.yml`, `console-2026-10-13T03-44-46-453Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T5)

- `t5-01` (pre-Save): Save and Undo enabled; FX_UMCombobox selected; Inheritance `FX_UM`; no dialog; User scope. **Proves** the dirty pre-Save state with no blocking modal. **Does not prove** the extension's field values (the editor was not reopened).
- `t5-02` (after Save 1): toast `Save` / `Global object(s) were saved.`; Save and Undo greyed; Form open; Inheritance `FX_UM`. **Proves** the Save response and the clean post-Save UI state in this session. **Does not prove** persistence across a close and reopen, or the extension's saved field values.

### Acceptance (T5)

| AC | T5 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T4. | T1–T4 | — |
| AC-2 | Carried from T4 (configured and confirmed once; scope as the Version text). Not re-read in T5. | T4 `t4-12`, `t4-13` | Saved field values not read back from a reopen. |
| AC-3 | **Save 1 done with its native response recorded verbatim** (toast `Save` / `Global object(s) were saved.`). **Runtime check 1 NOT run** (next task, after one runtime close and reopen). | `t5-02` | Save result is observed in this session only. |
| AC-4 to AC-6 | **NOT RUN** (override, contingency and the Designer close/reopen are for later tasks). | — | — |
| AC-7 | **Supported for T5**: no component, property, class, extension field, record or object changed; no unload; no Add or Find; no dialog open (the toast is a non-modal notification). | Audit above; `t5-02` | — |
| AC-8 | T5 portion complete. | Audit counts above | — |

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| A single native toolbar Save after the extension confirmation returned the toast `Save` / `Global object(s) were saved.` and disabled Save and Undo, with the Form open | **observed** (one run, T5) |
| The Save produced no alert, validation error or timeout | **observed** (one run, T5) |
| The component's Right-Click Menu remains `StdDefault` after Save 1 | **observed** (T5 `find`) |
| The extension is persisted (survives close and reopen) | **unresolved** (not yet tested; runtime check 1 and the Designer reopen are next) |
| Tutorial inheritance lesson (component `StdDefault` overrides the extension) | **unverified** (not yet tested) |

### Open questions and next permitted action (T5)

1. **Next permitted action (needs a separate authorization):** runtime check 1. Close the clean runtime FX_Items Form once and reopen it once (the runtime Form was opened before Save 1 and shows the pre-Save state until reopened); right-click the Unit of Measure combobox once; record the menu verbatim with a screenshot; dismiss with Escape (per the observed behaviour, then a blank-area click if Escape does not work, with no item chosen).
2. **Override step:** not yet decided. It applies only if check 1 shows no Details/Add/Find menu while the component-level Right-Click Menu is non-blank (`StdDefault` now).
3. Operator decision: whether to clear the FX_UMCombobox component-level Right-Click Menu value (`StdDefault`) before or after check 1. The brief says the override is for after check 1.
4. FX_UM checkout to the operator (EXP-048) is unchanged and untested for its effect on the save.
5. Classification remains **observed only, NOT replay_verified**.

---

## T4 — Extension dialog configured; four values read back; ONE OK; Designer dirty, Save not pressed (cycle 3)

Task T4 (bounded instruction: configure the already-open extension dialog and confirm once; do not revisit the existence check or the creation prompt; no Designer Save; no runtime action). Run `R-20261013-113227-AVrk`, cycle 3, task_message_id `cdeb049b-0b7e-4475-bffe-fb5d286b5d0a`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (fresh, before any change)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, `mode=designer`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 0 selected (succeeded).
- Untargeted snapshot `evidence/EXP-069-R2/t4-00-designer-fresh-snapshot-dialog-open.yml`: Property Class Extension dialog open; Save present.
- Screenshot `t4-01`: the Property Class Extension dialog open over the Designer, Name `FX_UM`, Add/Details and Find Form group expanded, the four target rows blank. The Designer heading is `FX_Items`; footer `ScopeType: User`; FX_UMCombobox selected; Inheritance `FX_UM`.
- Save at the start: disabled (toolbar `find`, EXP-069-R2 T3 end state).
- The existence check was **not** revisited, and the creation prompt was not answered again (per the brief).

### Field configuration (in the dialog; each value set once)

1. **Add/Details Form = `FX_UMs`.** One click on the value cell's arrow (`e1988`) opened the Form list (alphabetical; accessibility listbox). One click on option `FX_UMs` (`e2776`). Readback: `FX_UMs` (`t4-03`).
2. **Find Form = `FX_UMs`.** The first arrow click (`e2001`) focused the field without opening the list. One coordinate click on the arrow (1080, 436) opened the list; `FX_UMs` option (`e4692`) selected once. Readback: `FX_UMs` (`t4-05`).
3. **Property = `FX_UM`.** The arrow opened no list (two coordinate clicks at (1080, 461); the list was **empty**; a 2-second wait did not populate it). The brief's tutorial route ("select/type") was used: one type attempt with ref `e6005` **failed** (`TimeoutError: element is not editable`; the ref resolved to a read-only description textarea, so nothing was entered; not executed). One corrected type into the expanded Property combobox (`e6011`) entered `FX_UM` (the screenshot `t4-09` shows `FX_UM`). A click on the dialog title bar (848, 215) moved focus off the field. Readback afterwards: the Property row shows `FX_UM` in its committed (non-editing) state (`t4-10`; accessibility: treeitem `Property`, gridcell `FX_UM`).
4. **Right-Click Menu = `StdDetailsAddFind`.** The first arrow click (1080, 533) focused the field; the second opened the list. The full option list (read from the open listbox accessibility tree, 29 options, alphabetical):

   `EventActionEditExpression`; `EventActionRightClickMenu`; `menu_blank`; `menu_Outbound`; `StdAction`; `StdDataView`; `StdDefault`; `StdDetails`; `StdDetailsAdd`; **`StdDetailsAddFind`**; `StdDetailsAddFindSearch`; `StdDetailsAddFindSearchAction`; `StdDetailsAddSearch`; `StdDetailsAddSearchAction`; `StdDetailsFind`; `StdDetailsFindSearch`; `StdDetailsFindSearchAction`; `StdDetailsSearch`; `StdDetailsSearchAction`; `StdFind`; `StdFormHelp`; `StdGaugeCritical`; `StdGrid`; `StdGridWithActions`; `StdHelp`; `StdSearch`; `StdSearchAction`; `SuspendedUpdatesShortCut`; `TreeDefault`.

   **Choice:** `StdDetailsAddFind`. It is the only option that names exactly Details, Add and Find (no Search or Action suffix). The variants `StdDetailsAddFindSearch` and `StdDetailsAddFindSearchAction` add items the tutorial does not name, and `StdDetailsAdd`, `StdDetailsFind`, `StdDetails` cover only part of the set. Clicking the option once selected it (`e6046`). Readback: combobox `StdDetailsAddFind` (not expanded) (`t4-12`; find).

### Readback before confirmation (all four, visible)

| Dialog row | Value (screenshot `t4-12`; accessibility) |
| --- | --- |
| Add/Details Form | `FX_UMs` |
| Find Form | `FX_UMs` |
| Property | `FX_UM` (committed; gridcell `FX_UM` under treeitem `Property`) |
| Right-Click Menu | `StdDetailsAddFind` |

Other dialog values unchanged: Name `FX_UM`; Version `User version for user …`; Behavior checkboxes (Read-Only/Disable, Tab Read-Only Field, No Tab Stop, Auto Complete) `False`; New and Copy and Dynamic Enabling groups collapsed in this run (not expanded; not changed).

### Confirmation (ONE OK)

- **ONE click** on the dialog `OK` (`e2164`). Result: the dialog closed. No timeout alert, no error text (`find` "alert": no matches). Screenshot `t4-13` (`evidence/EXP-069-R2/t4-13-after-extension-ok.png`).
- **Native response (observed UI):** no message text was shown. The toolbar **Save became enabled** (dirty). The Designer Save icon and the Undo icon are active. The FX_UMCombobox Inheritance rows still show `View Attributes Inherited From Property` = `FX_UM` and `Edit Property Class Extension For Property Class` = `FX_UM`; the Inheritance row does not itself name the extension's field values.
- **Component Right-Click Menu after OK:** `StdDefault` (`find`; unchanged; no component-level change was made).
- **Scope of the extension:** the dialog's Version row read `User version for user …`, as in T3. No separate scope field is shown in the dialog. Scope is recorded as the User version shown; not further verified.

### Not performed (T4)

- Designer Save 1: **not** performed (next task). Save remains enabled: the Form is dirty and unsaved. No close, no reopen, no unload.
- Runtime check 1, override step, contingency unload, drill-down, Designer close/reopen: **not** performed.
- Extension dialog reopened: **no**. The existence check and the creation prompt were not repeated.
- Add or Find chosen: **no**. Checkout actions: **none** (FX_UM's checkout state is unchanged from EXP-048).

### Browser action audit (T4, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` (untargeted, depth 6; `t4-00`) | Dialog open; Save present |
| 4 | `browser_find` "Property Class Extension" | Dialog open |
| 5 | `browser_take_screenshot` `t4-01` | Succeeded (dialog start state) |
| 6 | `browser_find` "Add/Details Form" | Row present; value blank |
| 7 | `browser_click` `e1988` (Add/Details arrow cell) | Listbox opened |
| 8 | `browser_take_screenshot` `t4-02` | Succeeded (list open) |
| 9 | `browser_find` "FX_UMs" | Option `FX_UMs` in the listbox |
| 10 | `browser_click` `e2776` (FX_UMs option, Add/Details) | Add/Details = `FX_UMs` (**mutation 1**) |
| 11 | `browser_take_screenshot` `t4-03` | Succeeded |
| 12 | `browser_find` "Find Form Open Edit Property Dialog" | Row ref `e2001` |
| 13 | `browser_click` `e2001` (Find Form arrow cell) | Focused only; list not open |
| 14 | `browser_find` "FX_UMs" | No list |
| 15 | `browser_take_screenshot` `t4-04` | Succeeded (focused, no list) |
| 16 | `browser_find` regex "listbox" | No listbox |
| 17 | `browser_mouse_click_xy` (1080, 436), Find Form arrow | Listbox opened |
| 18 | `browser_find` "FX_UMs" | Option `FX_UMs` present (`e4692`) |
| 19 | `browser_click` `e4692` (FX_UMs option, Find Form) | Find Form = `FX_UMs` (**mutation 2**) |
| 20 | `browser_take_screenshot` `t4-05` | Succeeded |
| 21 | `browser_mouse_click_xy` (1080, 461), Property arrow | Focused only |
| 22 | `browser_find` regex "option FX_UM" | No option |
| 23 | `browser_take_screenshot` `t4-06` | Succeeded (Property focused; no list) |
| 24 | `browser_mouse_click_xy` (1080, 461), Property arrow | Listbox expanded; **empty** |
| 25 | `browser_find` regex "option FX_UM|listbox" | Listbox empty |
| 26 | `browser_snapshot` target `e6012` (listbox) | `listbox` > `list` > `table` with no rows |
| 27 | `browser_take_screenshot` `t4-07` | Succeeded (list empty) |
| 28 | `browser_wait_for` 2 s | Waited |
| 29 | `browser_find` regex "option FX_UM" | No option |
| 30 | `browser_find` "Property" | Textbox ref `e6005` identified (**a read-only description textarea**) |
| 31 | `browser_type` `e6005` "FX_UM" | **Failed**: `TimeoutError … element is not editable` (not executed; no text entered) |
| 32 | `browser_take_screenshot` `t4-08` | Succeeded (Property still empty) |
| 33 | `browser_snapshot` target `e6009` | Expanded `combobox` `e6011` (active) |
| 34 | `browser_type` `e6011` "FX_UM" (corrected) | Property shows `FX_UM` (**mutation 3**) |
| 35 | `browser_take_screenshot` `t4-09` | Succeeded (`FX_UM` in field) |
| 36 | `browser_mouse_click_xy` (848, 215), dialog title bar | Focus moved; Property committed |
| 37 | `browser_find` regex "cell FX_UM" | Name `FX_UM` only; Property readback not visible in this find |
| 38 | `browser_take_screenshot` `t4-10` | Succeeded (Property `FX_UM`, arrow down, committed) |
| 39 | `browser_mouse_click_xy` (1080, 533), Right-Click Menu arrow | Focused only |
| 40 | `browser_take_screenshot` `t4-11` | Succeeded (Right-Click Menu focused; no list) |
| 41 | `browser_mouse_click_xy` (1080, 533), Right-Click Menu arrow | Listbox expanded |
| 42 | `browser_find` regex "option|listbox" | Listbox present |
| 43 | `browser_snapshot` target `e6023` (listbox; 29 options) | Full option list read |
| 44 | `browser_click` `e6046` (`StdDetailsAddFind`) | Right-Click Menu = `StdDetailsAddFind` (**mutation 4**) |
| 45 | `browser_take_screenshot` `t4-12` | Succeeded (four values visible) |
| 46 | `browser_find` regex "StdDetailsAddFind" / "FX_UM" cell | Values read (Property committed; Right-Click combobox) |
| 47 | `browser_find` "StdDetailsAddFind" | Combobox `StdDetailsAddFind`, not expanded |
| 48 | `browser_find` "OK" | OK ref `e2164` |
| 49 | `browser_click` `e2164` (dialog OK, **once**) | Dialog closed; Save enabled (**mutation 5, confirmation**) |
| 50 | `browser_take_screenshot` `t4-13` | Succeeded (Designer dirty; no dialog) |
| 51 | `browser_find` "Save" | Save enabled (not pressed) |
| 52 | `browser_find` "Right-Click Menu" | Component value `StdDefault` |
| 53 | `browser_find` "alert" | No matches |

**T4 counts (exact):** browser calls **53**. Tab lists 1; tab selects 1; snapshots 4 (1 untargeted at start, 3 targeted); finds 19; screenshots 13 (`t4-01` to `t4-13`; all succeeded); element clicks 6 (executed: `e1988`, `e2776`, `e2001`, `e4692`, `e6046`, `e2164`); typed text 2 (1 failed, not executed: `e6005`; 1 executed: `e6011`); coordinate clicks 6 (arrows and the title bar; view or focus only, except that the arrows opened lists and no value was chosen by coordinate); wait 1; mouse wheel 0; key presses 0; drags 0; runtime actions 0. Browser errors or timeouts: **1** (the failed `browser_type`, `e6005`, element not editable). Ref-not-found errors: **0**. Fresh-snapshot recovery: the failed type was a wrong-element error, not a ref-not-found; one corrected untargeted-state inspection (`e6009`) was used.

**Cumulative browser calls, EXP-069-R2 (T1 + T2 + T3 + T4): 31 + 19 + 27 + 53 = 130.** Cumulative screenshots: 6 + 4 + 5 + 13 = 28.

**Cumulative mutations and lifecycle (T1–T4):**
- Ellipsis activations **1** (T3). Creation prompts answered **1** (Yes, T3). Extension dialog confirmed (OK) **1** (T4). Extension fields set **4** of 4 (T4: Add/Details Form, Find Form, Property, Right-Click Menu).
- Designer Save **0** (Save 1 pending). Designer unload **0**. Web Client unload **0**. Designer close/reopen **0 / 0**. Runtime close/reopen **0 / 0**. Runtime right-click **1** (T1 only). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0**. Checkout, check-in or undo actions **0**. Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.
- Component changes **0** (FX_UMCombobox's own Right-Click Menu remains `StdDefault`; only the extension dialog was changed).

### Designer and runtime state at the end of T4

- **Designer (tab 0, selected):** FX_Items; footer `ScopeType: User`; **DIRTY** (toolbar Save enabled; Undo enabled); FX_UMCombobox selected; Inheritance `FX_UM`; Right-Click Menu (component) `StdDefault`; **no dialog open**; no alert.
- **Runtime (tab 1):** not selected in T4. Last state (T1): record 1 of 3, EA, Save disabled, no menu open.
- **Unsaved change:** the extension configuration (Add/Details Form, Find Form, Property, Right-Click Menu) is in the Designer's pending state. It is not saved. Save 1 is for the next task (the brief forbids Save in T4). The Form is not closed (a dirty Form must not be closed without operator approval).

### Worker-written file inventory (T4)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; this T4 section)
- `evidence/EXP-069-R2/t4-00-designer-fresh-snapshot-dialog-open.yml` (snapshot saved by the tool at the requested path)
- `evidence/EXP-069-R2/t4-01-extension-dialog-start-state.png`
- `evidence/EXP-069-R2/t4-02-add-details-form-dropdown-opened.png`
- `evidence/EXP-069-R2/t4-03-add-details-form-set-fx_ums.png`
- `evidence/EXP-069-R2/t4-04-find-form-dropdown-opened.png`
- `evidence/EXP-069-R2/t4-05-find-form-set-fx_ums.png`
- `evidence/EXP-069-R2/t4-06-property-dropdown-state.png`
- `evidence/EXP-069-R2/t4-07-property-list-after-second-arrow-click.png`
- `evidence/EXP-069-R2/t4-08-property-typed-fx_um.png`
- `evidence/EXP-069-R2/t4-09-property-after-typed-fx_um.png`
- `evidence/EXP-069-R2/t4-10-property-after-blur-readback.png`
- `evidence/EXP-069-R2/t4-11-right-click-menu-dropdown-opened.png`
- `evidence/EXP-069-R2/t4-12-right-click-menu-options-and-selected.png`
- `evidence/EXP-069-R2/t4-13-after-extension-ok.png`

The tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-42-54-499Z.yml`, `console-2026-10-13T03-41-01-418Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T4)

- `t4-01`: dialog open; Name `FX_UM`; Add/Details and Find Form group expanded with four blank target rows. **Proves** the start state. **Does not prove** the saved state.
- `t4-03` and `t4-05`: Add/Details Form `FX_UMs` (and Find Form `FX_UMs` in `t4-05`). **Proves** the two Form fields. **Does not prove** that they are saved.
- `t4-07`: the Property list is empty even when expanded. **Proves** that the list offers no options in this state. **Does not prove** why.
- `t4-09` and `t4-10`: Property `FX_UM` in the field; after focus moved, the committed (non-editing) display. **Proves** the visible value. **Does not prove** persistence.
- `t4-12`: all four values visible together (Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`); the Right-Click Menu combobox is not expanded. **Proves** the readback before OK. **Does not prove** the saved state.
- `t4-13`: dialog closed; Save enabled; Designer otherwise clean (no alert). **Proves** the dialog closed and the Form is dirty. **Does not prove** that the extension is persisted; no Save has run.

### Acceptance (T4)

| AC | T4 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1–T3. | T1–T3 evidence | — |
| AC-2 | **Met for configuration and confirmation; persistence NOT yet proven.** Existence check (T3): prompt; ONE creation Yes (T3); the four fields set and read back (T4): Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind` (option list recorded above); dialog confirmed ONCE; scope recorded as the User version shown in the Version row. | `t4-12` (readback), `t4-13` (after OK), `t4-01`, `t4-07`, `t4-08` (failed type; no value) | Persistence not proven (no Save, no reopen). Scope is only the Version text. The Property dropdown was empty; `FX_UM` was entered by typing. |
| AC-3 to AC-6 | **NOT RUN** (Save 1, runtime checks, override, contingency, drill-down and Designer reopen are for later tasks). | — | — |
| AC-7 | **Supported for T4 with one unresolved point:** no component other than the extension dialog changed; no Save; no unload; no Add or Find; no alert or menu left open. The Form is DIRTY with the pending extension configuration (unsaved, by design). | Audit above; `t4-13` | The extension change is unsaved; AC-7 cannot exclude a change to the extension store until Save 1 and a reopen are read back. |
| AC-8 | T4 portion complete. | Audit counts above | — |

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| The extension dialog's Right-Click Menu dropdown offers 29 options; the exact standard Details/Add/Find option is `StdDetailsAddFind` | **observed** (one run, T4) |
| The extension dialog's Property dropdown offered no options (the list was empty), and `FX_UM` was entered by typing into the combobox | **observed** (one run, T4); cause unresolved |
| Add/Details Form and Find Form dropdowns list Forms alphabetically; `FX_UMs` selected by option click | **observed** (one run, T4) |
| One OK on the extension dialog closed it with no alert; the Designer Save became enabled | **observed** (one run, T4) |
| The component's own Right-Click Menu `StdDefault` remains unchanged | **observed** (T4 `find`) |
| The extension is persisted (saved) | **unresolved** (no Save, no reopen yet) |
| Tutorial inheritance lesson (component `StdDefault` overrides the extension) | **unverified** (not reached) |

### Open questions and next permitted action (T4)

1. **Next permitted action (needs a separate authorization):** Designer Save 1 through the native toolbar Save (the Form is dirty; the brief permits one Save in the next task). Record the native response verbatim, then the runtime check 1 (close and reopen runtime FX_Items once; right-click the UM combobox once; dismiss with Escape).
2. **Before the Save, the operator should decide** whether to read back the extension dialog once more (view only) to confirm the four values survived OK. The brief for T4 forbids reopening the editor, so this was not done.
3. The Property dropdown offered no options; the operator should confirm whether `FX_UM` (typed) is the expected entry. The displayed value is `FX_UM`; the Property option list was not available.
4. FX_UM checkout to the operator (EXP-048) is unchanged and untested for its effect on the save.
5. Classification remains **observed only, NOT replay_verified**.

---

## T3 — Existence check (one ellipsis click); the prompt appeared; ONE Yes; the Property Class Extension dialog opened; dialog left OPEN and unchanged (cycle 2)

Task T3 (bounded instruction: existence check and, if prompted, one creation confirmation; stop with the editor open and unchanged; no field configured, no OK, no Designer Save, no runtime action). Run `R-20261013-113227-AVrk`, cycle 2, task_message_id `6bc252f7-af0d-445e-8fe9-8edefc8d078b`, worker session `0e4883ae-9b5a-4e81-a572-6a63c451337d`. Date 2026-10-13.

### Starting state (fresh; verified before the ellipsis click)

- Tab list (one, before any select): tab 0 Designer (`designer/default.aspx`, `mode=designer`, current); tab 1 Web Client (`favoriteContext=FX_Items`). Tab 0 selected (succeeded).
- Designer: FX_Items heading; footer `[ ScopeType: User / ScopeName: … ]`; toolbar Save `[disabled]`; Regenerate Form and Undo greyed; FX_UMCombobox (EnhancedCombo) selected; Components row `FX_UMCombobox` / `object.FX_UM`; no dialog open. Screenshot `t3-01`; snapshot `t3-00`.
- Inheritance row `Edit Property Class Extension For Property Class` = `FX_UM` (ellipsis button `e1696` in the fresh targeted snapshot). Right-Click Menu `StdDefault` (visible in `t3-01`); Behavior values as in T1/T2.
- Session usable; no Session Expired modal; no sign-in page; no portal banner. Re-login **0**.

### The existence check (ONE ellipsis click)

- **ONE click** on the ellipsis `e1696`. Immediate result: an in-page alertdialog `Infor Mongoose Application Development Framework`, with the text, verbatim: **`Property Class Extension FX_UM does not exist. Create it?`**; buttons **`Yes`** (focused, `[active]`, ref `e1829`) and **`No`** (`e1831`). Behind it: the `Property Class Extension` dialog with its Properties search box, OK and Help.
- Screenshot `evidence/EXP-069-R2/t3-02-after-single-ellipsis-click.png`: shows the prompt with its exact text, Yes and No, over the Property Class Extension dialog and the Designer identity (FX_Items, User scope footer). **Does not show** the extension's field values (the dialog body is empty at this point).
- **Reading:** the existence check returned the **prompt**, so no FX_UM extension was found at this point. This means the EXP-069 creation did not persist an extension, as far as this check can show. The EXP-069 Yes produced a timeout alert, and this check is consistent with that timeout having left no extension (single observation; not a database read).

### The one Yes (creation confirmation)

- **ONE click** on `Yes` (`e1829`). The creation path ran; no retry.
- Immediate result: **no timeout alert**. The **Property Class Extension** dialog opened, with the prompt gone. The text `Timeout expired waiting for response.` was **not** found (`find`, no matches). This differs from EXP-069 T3, where the Yes press produced the timeout alert and no dialog.
- Screenshot `evidence/EXP-069-R2/t3-03-after-single-yes-result.png`: shows the Property Class Extension dialog with Design group (Name `FX_UM`; Description blank; Caption blank with an ellipsis; Version `User version for user …`), and collapsed groups Appearance, Behavior, Data Source, Events, Help, Layout, Miscellaneous, Report. **Proves** the dialog opened after one Yes, with Name `FX_UM`. **Does not prove** that the extension is saved (the dialog is not yet confirmed) or its scope beyond the Version text.

### Dialog state read (read-only; view-only expansions)

- Behavior group expanded (chevron, view only): `t3-04` (`evidence/EXP-069-R2/t3-04-extension-dialog-behavior-expanded.png`). Read-Only/Disable `False`; Tab Read-Only Field `False`; No Tab Stop `False`; Auto Complete `False`.
- Add/Details and Find Form group expanded (chevron, view only). Accessibility readback (`evidence/EXP-069-R2/t3-05-extension-dialog-tree-readback.yml`) and screenshot `t3-06` (`evidence/EXP-069-R2/t3-06-extension-dialog-add-details-and-right-click-rows.png`) show:

| Dialog row | Initial value (as read) |
| --- | --- |
| Name (Design) | `FX_UM` |
| Version (Design) | `User version for user [username]` (read from the accessibility tree; the username is not copied here) |
| Caption (Design) | blank (dropdown with an Open Edit Property Dialog button) |
| Add/Details and Find Form → **Add/Details Form** | **blank** (dropdown; no value) |
| Add/Details and Find Form → **Find Form** | **blank** (dropdown; no value) |
| Add/Details and Find Form → **Property** | **blank** (dropdown; no value) |
| **Right-Click Menu** | **blank** (dropdown; no value) |
| Drag Image; Enabled When; Required When; Theme Class When; Visible When | blank |

**Comparison with the component.** On FX_UMCombobox itself the Right-Click Menu is `StdDefault` and the Add/Details, Find and Property rows are blank (T1–T2). The extension dialog's Right-Click Menu is **blank**. So the extension has no menu value set yet, and the component's `StdDefault` is a separate, component-level value.

**Not read:** the option list of the Right-Click Menu dropdown and of Add/Details Form and Find Form (the brief asks for these when the fields are configured; T3 does not configure them, and opening a dropdown was not done). The Scope line: the Version row is the only scope indicator visible, and it reads `User version for user …`; no separate scope field was shown.

### Designer state at the end of T3

- Designer (tab 0, selected): FX_Items; footer `ScopeType: User`; toolbar Save `[disabled]` (`find` after the Yes); FX_UMCombobox still selected; Inheritance `Edit Property Class Extension For Property Class` = `FX_UM`; Right-Click Menu `StdDefault` (unchanged). No timeout alert, no other in-page dialog.
- **Property Class Extension dialog: OPEN, unchanged, NOT confirmed** (OK not clicked; Help not clicked). Per the brief, the task stops here with the editor open.
- Runtime (tab 1): not selected in T3. Last state (T1): runtime FX_Items record 1 of 3, UM `EA`, Save disabled, no menu open.

### Browser action audit (T3, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer current |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_find` "Edit Property Class Extension For Property Class" | Row present; value `FX_UM` |
| 4 | `browser_find` "Save" | Save `[disabled]` |
| 5 | `browser_snapshot` (untargeted, depth 6; saved `t3-00`) | Designer clean; FX_Items User |
| 6 | `browser_take_screenshot` `t3-01` | Succeeded (pre-ellipsis state) |
| 7 | `browser_snapshot` target `e1694` (Inheritance value cell) | Ellipsis button `e1696` |
| 8 | `browser_click` `e1696` (Inheritance ellipsis) — **once** | Prompt appeared |
| 9 | `browser_find` "does not exist" | Prompt text verbatim; Yes `[active]`, No |
| 10 | `browser_find` "Property Class Extension" | Dialog behind the prompt |
| 11 | `browser_take_screenshot` `t3-02` | Succeeded (prompt visible) |
| 12 | `browser_click` `e1829` (Yes) — **once** | Extension dialog opened; no timeout |
| 13 | `browser_find` "Timeout expired" | No matches |
| 14 | `browser_find` "Property Class Extension" | Dialog open, active |
| 15 | `browser_take_screenshot` `t3-03` | Succeeded (dialog Design group) |
| 16 | `browser_find` "Behavior" | Group ref `e1934` |
| 17 | `browser_find` "User version for user" | Version read |
| 18 | `browser_mouse_click_xy` (777, 443), Behavior chevron (dialog; view only) | Behavior expanded |
| 19 | `browser_take_screenshot` `t3-04` | Succeeded |
| 20 | `browser_mouse_click_xy` (787, 587), Add/Details and Find Form chevron (dialog; view only) | Group expanded |
| 21 | `browser_find` "Add/Details Form" | Rows present |
| 22 | `browser_snapshot` target `e1858` (dialog property tree; saved `t3-05`) | Values read (all blank for the four target rows) |
| 23 | `browser_mouse_move_xy` (950, 520) | Pointer over the dialog tree (view) |
| 24 | `browser_mouse_wheel` (0, 200) | Dialog tree scrolled (view) |
| 25 | `browser_take_screenshot` `t3-06` | Succeeded (four target rows visible) |
| 26 | `browser_find` "Save" | Save `[disabled]` |
| 27 | `browser_find` "alert" | No alert |

**T3 counts (exact):** browser calls **27**. Tab lists 1; tab selects 1; finds 11; snapshots 3 (1 untargeted, 2 targeted; all saved as files); screenshots 5 (`t3-01`, `t3-02`, `t3-03`, `t3-04`, `t3-06`); element clicks 2 (the ellipsis once; Yes once); coordinate clicks 2 (view-only chevrons in the dialog); mouse move 1; mouse wheel 1; text entries 0; key presses 0; drags 0; runtime actions 0. Browser errors or timeouts: **0**. Ref-not-found errors: **0**.

**Cumulative browser calls, EXP-069-R2 (T1 + T2 + T3): 31 + 19 + 27 = 77.** Cumulative screenshots: 6 + 4 + 5 = 15.

**Cumulative mutations and lifecycle (T1–T3):**
- Ellipsis activations **1** (T3; the existence check). Creation prompts answered **1** (Yes, T3).
- Extension dialog confirmed (OK) **0**. Extension fields set **0**. Extension scope confirmed: only the Version text (`User version`).
- Designer Save **0**. Designer unload **0**. Web Client unload **0**. Designer close/reopen **0 / 0**. Runtime close/reopen **0 / 0**. Runtime right-click **1** (T1 only). Runtime Save **0**. Record edits **0**. Details / Add / Find chosen **0 / 0 / 0**. FX_UMs Form opened **0**.
- Component or property changes **0** (view-only group and dialog expansions; the dialog's Behavior group is view state).
- Checkout, check-in or undo-checkout actions **0** (the checkout state was not changed; FX_UM remains as EXP-048 recorded, checked out to the operator).
- Re-login **0**. Browser JavaScript, evaluate, console or network inspection **0**.

### Result of the existence check (T3)

- **Prompt present** on the single ellipsis click: the existence check **did not find** an FX_UM extension (the prompt is verbatim: `Property Class Extension FX_UM does not exist. Create it?`).
- **Creation:** ONE Yes was answered; the response was the **Property Class Extension dialog** (not the timeout alert). The extension is **not** yet confirmed: its persistence depends on the dialog being confirmed (OK), which the T3 brief does not authorize. **Created-or-pending is unresolved** until the dialog is confirmed and read back.
- The EXP-069 timeout therefore did not leave a readable extension at the existence check. Whether the EXP-069 Yes created something that the check could not see is not established; this is a single run.

### Worker-written file inventory (T3)

- `experiments/EXP-069-R2-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line; this T3 section)
- `evidence/EXP-069-R2/t3-00-designer-pre-ellipsis-fresh-snapshot.yml` (snapshot, saved by the tool)
- `evidence/EXP-069-R2/t3-01-designer-pre-ellipsis-state.png`
- `evidence/EXP-069-R2/t3-02-after-single-ellipsis-click.png`
- `evidence/EXP-069-R2/t3-03-after-single-yes-result.png`
- `evidence/EXP-069-R2/t3-04-extension-dialog-behavior-expanded.png`
- `evidence/EXP-069-R2/t3-05-extension-dialog-tree-readback.yml` (snapshot, saved by the tool)
- `evidence/EXP-069-R2/t3-06-extension-dialog-add-details-and-right-click-rows.png`

Tool-generated snapshot and console logs under `evidence/playwright/` (for example `page-2026-10-13T03-38-52-475Z.yml`, `page-2026-10-13T03-38-59-277Z.yml`, `page-2026-10-13T03-39-13-164Z.yml`, `console-2026-10-13T03-38-42-551Z.log`) are not worker-authored. The worker wrote no other repository file and did not run git.

### Screenshot evidence (T3)

- `t3-01`: Designer FX_Items, FX_UMCombobox selected, Save greyed, User scope; Right-Click Menu `StdDefault`; Behavior Add/Details rows blank. **Proves** the pre-check state. **Does not prove** the Inheritance rows (below frame; read by accessibility, `e1696`).
- `t3-02`: the creation prompt, verbatim, with Yes and No; the Property Class Extension dialog behind it. **Proves** the existence-check result (prompt). **Does not prove** the extension's content.
- `t3-03`: after one Yes, the Property Class Extension dialog open (Name `FX_UM`; Version `User version for user …`); no timeout alert. **Proves** the Yes led to the dialog. **Does not prove** that the extension is saved (not confirmed) or its Behavior values (collapsed in this frame).
- `t3-04`: the dialog's Behavior group expanded: Read-Only/Disable, Tab Read-Only Field, No Tab Stop, Auto Complete all False; Add/Details and Find Form collapsed in this frame. **Proves** the four Behavior checkboxes. **Does not prove** the four target rows (see `t3-06`).
- `t3-06`: the dialog's Add/Details Form, Find Form, Property and Right-Click Menu rows, all with blank values. **Proves** these four target fields are unset at this point. **Does not prove** the dropdown option lists or persistence.

### Acceptance (T3)

| AC | T3 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1/T2 (Designer FX_Items User, clean; FX_UMCombobox binding, Inheritance and Behavior values recorded; runtime baseline recorded). | `t3-01`; T1/T2 screenshots | — |
| AC-2 | **Partly met.** The existence check is recorded (prompt verbatim, one ellipsis click); ONE Yes was answered; the extension dialog opened (Name `FX_UM`; scope indicated by Version `User version…`). **NOT met:** the fields are not configured (Add Details Form, Find Form, Property, Right-Click Menu all blank), and the dialog is not confirmed (OK not clicked; this task stops with the editor open, as instructed). | `t3-02` (prompt), `t3-03` (dialog open), `t3-06` (four target rows blank) | Persistence not confirmed; the option lists of the dropdowns are not read. |
| AC-3 to AC-6 | **NOT RUN** (the configuration, confirmation, Designer Save 1 and the runtime checks are for the next task). | — | — |
| AC-7 | **Supported for T3**: no component, property, class, record, object or extension field changed; no Designer Save; no unload; no Add or Find; no alert left open. **The Property Class Extension dialog is open by design.** | Audit above; `t3-04`, `t3-06` | The extension creation (through Yes) may have changed the extension store; not established until confirmation and readback. |
| AC-8 | T3 portion complete. | Audit counts above | — |

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| The FX_UMCombobox ellipsis (Inheritance, `Edit Property Class Extension For Property Class`) on the single click returned the prompt `Property Class Extension FX_UM does not exist. Create it?` | **observed** (one run, T3) |
| One Yes on that prompt opened the Property Class Extension dialog (Name `FX_UM`) with no timeout alert | **observed** (one run, T3); differs from EXP-069 T3 (timeout alert) |
| The four target fields (Add/Details Form, Find Form, Property, Right-Click Menu) are blank in the new extension dialog before configuration | **observed** (one run, T3) |
| The Behavior checkboxes (Read-Only/Disable, Tab Read-Only Field, No Tab Stop, Auto Complete) are False in the extension dialog | **observed** (one run, T3) |
| The extension is persisted (created) | **unresolved** (not confirmed by OK; not read back) |
| The EXP-069 timeout left no extension (prompt present at T3 start) | **observed** as the existence-check result (one run); cause and any effect on the store **unresolved** |
| The tutorial's inheritance lesson (component `StdDefault` overrides the extension) | **unverified** (not reached) |

### Open questions and next permitted action (T3)

1. **Next permitted action (needs a separate authorization):** configure the open extension dialog: Add Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu the standard Details/Add/Find option (record its exact name and the full option list first). Then confirm the dialog once (OK), record the scope, and read it back. Per the EXP-045 precedent, check the dialog's default values before setting any field, and do not treat a timeout alert as a confirmation.
2. **Do not** press Yes again and do not click the ellipsis again in the next task unless the operator decides otherwise: the prompt has already been answered once, and the open dialog is the only extension editor observed in this run. (What a second ellipsis click would show is not established.)
3. Operator decision: whether to address FX_UM's checkout to the operator (EXP-048) before confirmation. The checkout state was preserved in T3 (no checkout action). Not tested.
4. The Designer's Save is not performed; Save 1 is for the next task after confirmation.
5. Classification remains **observed only, NOT replay_verified**.

## Outcome (operator, 2026-10-13)

Blocked at AC-5 and AC-6, not accepted. Operator call under the standing authorization of 2026-10-11.

- Run R-20261013-113227-AVrk completed as blocked after 11 worker tasks.
- The T1 permission denial was a Grep on the worker's own tool-result file outside the repo. It was harmless, and the operator approved it.
- Screenshots viewed by the operator assistant:
  - `t3-02`: one ellipsis click showed "Property Class Extension FX_UM does not exist. Create it?".
    - So the EXP-069 timeout had not created the extension.
    - One Yes then opened the editor with no timeout.
  - `t4-12`: the extension editor shows Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`.
    - The Right-Click Menu combobox is still the active editor, with a white field, a dropdown arrow and the focus border.
    - OK was clicked next, without moving focus out of the combobox.
  - `t10-12`: after Save 1, Save 2 and a Designer close/reopen, one ellipsis click opened the editor directly, with no prompt.
    - Add/Details Form, Find Form and Property persisted.
    - The Right-Click Menu is blank.
    - Every row is grey, with no dropdown arrows; only the ellipsis buttons show. Whether the reopened editor is read-only is unresolved.
- Working hypothesis, unverified: the dropdown choice was never committed because OK was clicked while the combobox still had focus.
  - Property was committed by a blur and persisted.
  - The same pattern appears in EXP-066-R2, where a typed lookup value needed Tab to commit.
- Runtime menus:
  - `Help` only while the component-level value was `StdDefault`.
  - Then 25 standard items, without Details, Add or Find, after the override (`StdDefault` cleared and saved by Save 2).
  - The same after the single authorized Web Client unload.
  - The drill-down was not performed.
- Persistent changes from this run:
  - Created the FX_UM property class extension (User version), with Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, and a blank Right-Click Menu.
  - Cleared the FX_UMCombobox component-level Right-Click Menu (was `StdDefault`, now blank).
  - Two Designer Saves.
  - One Web Client Unload All Global Form Objects.
- Final state: the FX_UM Property Class Extension editor is still open in the Designer, unconfirmed. Its only buttons are OK and Help, and Escape does not close it.
  - The worker correctly did not click OK, since no Save remained.
  - The next replay handles it.
- T10 typed a filter into the Components search box. It is a view-only filter and is accepted.
- Confinement (git status): only `evidence/EXP-069-R2/` and this record were written by the run.
- Next: replay EXP-069-R3.
  - Set the extension Right-Click Menu to `StdDetailsAddFind` and commit it with Tab before OK.
  - Re-read it once before Save.
  - The component-level value stays blank, so the override step is no longer needed.
