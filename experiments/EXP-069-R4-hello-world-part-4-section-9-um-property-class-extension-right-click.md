# EXP-069-R4 — Hello World Part 4 Section 9: FX_UM property-class extension with the Details/Add/Find right-click menu on FX_UMCombobox (replay: edit the extension through Edit > Property Class Extension)

**FINAL STATUS (T8, 2026-10-13; cycle 7; documentation only; zero browser calls; zero Mongoose changes): RECOMMENDED ACCEPTED AS OBSERVED (not replay_verified), subject to operator review of deviation D1 (T1 read the EXP-069-R3 final report after browser interaction began) and the limitations L1–L3 (single-session persistence only; unexplained difference from EXP-069-R2 T10; tenant-wide Save scope). AC-1 to AC-7 supported as observed; AC-8 met by `evidence/EXP-069-R4/T8-final-acceptance-report.md`. Totals: 153 browser calls (T1–T7); 1 extension field change; 1 Designer Save (native response "Global object(s) were saved."); 0 Save 2; 1 Designer close/reopen; 1 runtime close/reopen; 3 runtime right-clicks; 1 Details drill-down (FX_UMs on EA/Each, closed clean); 0 Add/Find; 0 unloads; 0 extension creations; 0 other changes; 0 re-logins. Worker-written repository files: 74. Details in "T8" below.**

**STATUS (T7, 2026-10-13; cycle 6): AC-6 READBACK PASSED AS OBSERVED. The clean Designer Form was closed ONCE (native Form-tab close; no prompt; empty canvas) and reopened ONCE through the toolbar Open button and Select Form OK (FX_Items; User scope; Save disabled; no dialog). After that close and reopen, Edit > Property Class Extension (Global Objects) showed FX_UM with Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM` and Right-Click Menu `StdDetailsAddFind`; the dialog was closed with ONE Cancel and no change; the Designer stayed clean (Save disabled), so Save 2 was NOT performed. FX_UMCombobox component-level Right-Click Menu is blank (no component value changed). Designer Saves total: 1. Observed only, single browser session; no independent-session or database durability claimed. AC-7 and AC-8 final reconciliation is for the next task. Details in "T7" below.**

**STATUS (T6, 2026-10-13; cycle 5): DETAILS DRILL-DOWN PASSED AS OBSERVED. With dumbbell selected (UM `EA`), the runtime right-click menu showed `Add...`, `Details...`, `Find...`, `Help`. ONE click on `Details...` opened the FX_UMs Form as a second tab: one record, Unit of Measure `EA`, Description `Each`, status `Description (Object 1 of 1)`, toolbar Save disabled. ONE click on that Form's own panel-close control (`Close Panel FX_UMs`) closed it without any edit or save. The runtime returned to FX_Items on dumbbell, UM `EA`, Description `Each` (Object 1 of 3), Save disabled, no menu, no dialog. Add and Find were NOT chosen. The Designer, the cache-contingency unload and any Designer recovery were NOT touched in T6. Observed only; single runtime run; no cross-session persistence or causal-isolation claim. Details in "T6" below.**

**STATUS (T5, 2026-10-13; cycle 4): RUNTIME CHECK 1 PASSED AS OBSERVED. After one runtime Form close and one reopen (Form > Open > Select Form, OK once), a single right-click on the Unit of Measure combobox (dumbbell, UM `EA`) showed exactly four items: `Add...`, `Details...`, `Find...`, `Help`. Details, Add and Find are PRESENT; the 25-item standard menu of the T1 baseline is not shown. No item was chosen. Escape did not dismiss the menu; one blank-Form click did. The Form is clean (Save disabled), dumbbell, UM `EA`, Description `Each`, record 1 of 3. The cache-contingency unload was NOT invoked (condition not met). Details drill-down, Designer close/reopen and the Designer readback are NOT run in T5. Observed only; a single runtime run; not replay_verified; no cross-session or database durability claimed. Details in "T5" below.**

**STATUS (T4, 2026-10-13; cycle 3): pre-Save readback PASSED (all four FX_UM settings read: Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`); the read-only Global Objects dialog was closed with ONE Cancel (Designer Save stayed enabled); Designer Save 1 was performed ONCE through the native toolbar Save. Native response (verbatim toast): "Save" / "Global object(s) were saved." Post-Save: Save and Regenerate Form disabled; Undo disabled; FX_Items in User scope; no dialog open. Save 2 NOT performed (no no-change OK after Save 1). Runtime check 1 and all later steps NOT run. The save is an observed UI acknowledgement; persistence is NOT verified (requires a later close/reopen and runtime check). Not replay_verified. Details in "T4" below.**

**STATUS (T3, 2026-10-13; cycle 2): the single permitted FX_UM change was made and committed, and the Global Objects dialog was confirmed with ONE OK. Native result: the dialog closed with no error text; the Designer toolbar Save became ENABLED (the Designer is dirty). FX_Items stays loaded in User scope. The Right-Click Menu of FX_UM was set to `StdDetailsAddFind` from the native list (one choice), committed with one Tab, and visibly shows `StdDetailsAddFind` before OK; Add/Details Form `FX_UMs`, Find Form `FX_UMs` and Property `FX_UM` were unchanged. NO Designer Save, NO pre-Save readback, NO runtime action was performed (separate tasks). Nothing is saved, persisted or replay_verified. Details in "T3" below.**

**STATUS (T2, 2026-10-13; cycle 1): the inline FX_UM editor was closed with ONE no-change OK (response: closed, no error; Designer Save stayed disabled). Edit > Property Class Extension opened once and showed a "Global Objects" dialog; FX_UM selected; its Right-Click Menu row is blank and shows a dropdown arrow in this view. NO value changed, NO dropdown opened, NO OK or Save on the global dialog. The global dialog is left OPEN as instructed. AC-2 (the change and commit) NOT YET RUN. Not accepted. Not replay_verified. Details in "T2" below.**

**STATUS (T1, 2026-10-13; read-only preflight and baseline): PREFLIGHT COMPLETE. STOPPED before the inline-editor OK and before the Designer Edit menu, as the T1 instruction required.** AC-1 supported with limits. AC-2 to AC-8 **NOT RUN**. Not accepted. Not replay_verified. Classification: observed only.

- The FX_UM Property Class Extension editor (left open by EXP-069-R2 and EXP-069-R3) is **still open** at the end of T1, unchanged. Its Right-Click Menu is **blank**; its row shows **no dropdown arrow** in the screenshot. No field was changed and OK was not clicked.
- The runtime baseline on the Unit of Measure combobox shows the 25 standard items with **no Details, Add or Find** (negative baseline). Nothing was chosen; the menu was dismissed.
- The FX_UMCombobox component-level Right-Click Menu is blank (accessibility readback).

Run identity: run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 0, task T1, task_message_id `0c76b869-e323-40d6-a561-db6040cf0af5`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (tab title). Editing scope User. Mode LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Evidence directory `evidence/EXP-069-R4/`.

Record creation disclosure: a Glob for `**/*EXP-069-R4*` found no file before this task; this worker created the record in T1. The predecessor brief commits (`b879b3e` draft, `f776062` approved) are recorded in repository history.

## Sources reviewed (T1)

- `AGENTS.md`: read in full (238 lines). Applied: FX_ scope extension, User editing scope, evidence rules, recovery rules, knowledge states.
- `docs/mongoose/transcripts/hello-world-pt4.md`, Section 9 (11:04–13:12, lines 228–247): read in full. Trust: **unverified** tutorial transcript. Inheritance lesson (line 245): a component-level setting can override a class-extension setting, so configuring an extension alone does not prove it is effective. Boundary (line 247): clearing a component menu can change behaviour; record previous values and both negative and positive results.
- `docs/mongoose/guides/web-designer.md`, "Creating a Property Class Extension object" (lines 277–289): read. Documented route: Edit > Property Class Extension; the editor's New (+) creates objects (not used in R4); step 7 says OK saves. Trust: **unverified** documentation.
- `experiments/EXP-069-R3-…-right-click.md`: read in full (T1, T2, T3 status, outcome).
- `evidence/EXP-069-R3/T3-final-blocked-report.md`: read **after** browser interaction had begun (after screenshot `t1-05`). **Ordering deviation** (the brief asked for it before any browser call). No browser decision depended on it: the baseline was read-only and the T1 instruction stopped before any change.
- `experiments/EXP-069-R2-…-right-click.md`: T4 (lines 1282–1331: configuration, pre-OK readback, the one OK, the Save state) and T10 (lines 365–424: the Designer close/reopen readback, the extension editor's blank Right-Click Menu, the open editor with only OK and Help) read in full. Other R2 sections not read.
- `experiments/EXP-064-…-theme-and-button-class.md`: T2 (the Edit > Theme > Global Objects route and the New control) and T7 (Edit Styles OK ×1, Global Objects OK ×1, Designer toolbar Save ×1, native response "Global object(s) were saved.") read.
- `experiments/EXP-069-R4` (this record): created in T1.

## Session and tab handling

- `browser_tabs` list (first browser call of the task, before any selection): tab 0 = Designer (`designer/default.aspx`, `mode=designer`, `MGForm=FX_Items`, current); tab 1 = Web Client (`favoriteContext=FX_Items`, title `Mongoose`).
- Tab 0 selected (succeeded). Tab 1 selected (succeeded). Tab 0 was not re-selected.
- Session usable throughout. No "Session Expired" modal, no sign-in page, no portal notification banner, no unsaved-change prompt and no browser-native dialog. **Re-login count 0.**
- The tool reported console counts (Designer 3 errors; Web Client 7 errors, 3 warnings at the runtime snapshot). The console was **not** inspected (out of scope).

## AC-1 — Designer baseline (FX_Items, User scope)

| Item | Observed (snapshot `t1-00`, screenshot `t1-01`) |
| --- | --- |
| Form | `FX_Items` (Designer heading `FX_Items`; tab 0 `MGForm=FX_Items`; single Form tab) |
| Scope | Footer `[ ScopeType: User / ScopeName: <operator user> ]` (user name not copied) |
| Clean | Toolbar Save `[disabled]`; Regenerate Form `[disabled]`; Undo and Redo `[disabled]`; Save greyed in `t1-01` |
| Selected component | `FX_UMCombobox (EnhancedCombo)` (Properties header); Components row `FX_UMCombobox ComboBox object.FX_UM 1 12` |

### Leftover extension editor (state on arrival; NOT changed in T1)

| Item | Observed |
| --- | --- |
| Open? | **YES.** Dialog `Property Class Extension` (accessibility `[active]`), over the Designer in `t1-01`. Buttons: **OK** and **Help** only (no Cancel, no close control). |
| Name | `FX_UM` |
| Version | `User version for user <operator>` (User scope) |
| **Add/Details Form** | **`FX_UMs`** |
| **Find Form** | **`FX_UMs`** |
| **Property** | **`FX_UM`** |
| **Right-Click Menu** | **BLANK.** The value gridcell has no text and no combobox child; the row holds only its `Open Edit Property Dialog` ellipsis button. The gridcell is already `[active] [selected]` in the fresh snapshot: that focus state was left by the R3 T2 focus click, not by a click in T1. |
| Other rows | Read-Only/Disable `False`; Tab Read-Only Field `False`; No Tab Stop `False`; Auto Complete `False`; Drag Image, Enabled When, Required When, Theme Class When, Visible When blank; New and Copy and Dynamic Enabling groups collapsed |
| Editability | **Dropdown arrow ABSENT** in the Right-Click Menu row in `t1-01` (only the ellipsis is drawn); no combobox in the accessibility subtree. **Not tested by a click in T1** (no focus click permitted). Consistent with R3 T2 (not editable after one focus click). |

### FX_UMCombobox component settings (read-only; accessibility readback of `t1-00`)

| Property | Observed |
| --- | --- |
| Data Source | Binding Type `Property`; Binding `object.FX_UM` |
| Inheritance: View Attributes Inherited From Property | `FX_UM` |
| Inheritance: Edit Property Class Extension For Property Class | `FX_UM` (ellipsis present) |
| Inheritance: Set Class From | `This Component's Attribute` |
| **Behavior → Add/Details Form, Find Form, Property (component-level)** | **BLANK** (accessibility gridcells with no text) |
| **Behavior → Right-Click Menu (component-level)** | **BLANK** (gridcell with no text; accessibility only). **Limit:** the Behavior group is covered by the open editor, so it is not visible in a screenshot. |

### Runtime baseline — Unit of Measure right-click (AC-1)

- Tab 1 (Web Client) selected. The runtime `FX_Items` Form was already open (not opened by this worker): tab heading `FX_Items`; record `Unit of Measure (Object 1 of 3)`; Item `dumbbell`; Description `45 pound iron`; Cost `45.00`; Unit of Measure combobox `EA`; Description `Each`; Save `[disabled]`; no dialog (`t1-02` snapshot, `t1-03` screenshot).
- **One right-click** on the Unit of Measure combobox (ref `f1e245`).
- **Menu items, verbatim (25 `menuitem` entries; separators excluded):** Refresh; Refresh current; Filter; Next; Previous (disabled); First (disabled); Last; Get More Rows (disabled); New; Duplicate; Save (disabled); Save current (disabled); Delete; Validate; Notes for All; Documents for Current; Email for Current; Notes for Current; Graph; To Excel; To Form DataView; View Event Status (disabled); View Workflows; New Workflow; Help.
- **Details, Add and Find: ABSENT** (negative baseline). This matches the expected 25 standard items.
- **Dismissal:** one **Escape** did not dismiss the menu (the menu was still in the snapshot). One **click on blank Form space** at (1200, 700) dismissed it with **no item chosen** (`t1-05`: menu gone; record `Object 1 of 3`; UM `EA`; Save greyed).

## Stop point (T1)

- Per the T1 instruction, the inline editor was **not** closed: its OK was **not** clicked, and the Designer **Edit menu was not opened**. The extension was not configured. The next task's brief decides the inline-OK step and the Edit > Property Class Extension route.
- The editor is open over a clean Designer (Save and Undo disabled), so AC-7's no-open-dialog condition is **not yet met** at the end of T1 (expected at this stop point).

## Action audit (T1, exact counts)

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer; tab 1 Web Client |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` (untargeted, Designer; saved `t1-00-designer-fresh-snapshot.yml`) | Designer FX_Items; editor open; Save disabled |
| 4 | `browser_take_screenshot` `t1-01` | Succeeded (Designer; editor open; Right-Click Menu blank, no arrow) |
| 5 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 6 | `browser_snapshot` (untargeted, runtime; saved `t1-02-runtime-fresh-snapshot.yml`) | Runtime FX_Items; record 1 of 3; UM `EA`; Save disabled |
| 7 | `browser_find` text `Unit of Measure` | Runtime record and UM combobox located (`f1e245`) |
| 8 | `browser_take_screenshot` `t1-03` | Succeeded (runtime, before right-click) |
| 9 | `browser_click` (right button) `f1e245` (UM combobox) | Menu opened (**runtime right-click 1**) |
| 10 | `browser_find` regex `menuitem\|menu "` | 25 items read |
| 11 | `browser_take_screenshot` `t1-04` | Succeeded (25-item menu visible) |
| 12 | `browser_press_key` Escape | Menu **not** dismissed |
| 13 | `browser_find` text `Help` | Menu still present (`menuitem "Help"`) |
| 14 | `browser_mouse_click_xy` (1200, 700), blank Form space | Menu dismissed; no item chosen |
| 15 | `browser_take_screenshot` `t1-05` | Succeeded (menu dismissed; record unchanged) |

**T1 counts (exact):**
- Total browser calls: **15**. Tab lists **1**; tab selects **2** (both succeeded); snapshots **2** (untargeted; both read-only); finds **3** (read-only); screenshots **4** (`t1-01`, `t1-03`, `t1-04`, `t1-05`; all succeeded); element clicks **1** (the runtime right-click, executed once); coordinate clicks **1** (blank-area dismissal); key presses **1** (one Escape, ineffective); typed text **0**; drags **0**; wheel **0**; hovers **0**; navigations **0**; browser JavaScript, evaluate, console or network inspection **0**.
- Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**.
- Parallel browser actions: **none**. Every browser action was issued alone and awaited; the only same-block calls were read-only.
- Successful screenshots saved: **4**. Snapshots saved to worker-requested paths: **2**.

**Mongoose mutations and lifecycle (T1), exact:**
- Extension creations **0**; extension field changes **0**; extension ellipsis clicks **0**; creation prompts answered **0**; inline-editor OK clicks **0**; Edit-menu openings **0**.
- Designer Saves **0** (Save 1 and Save 2 not performed).
- Component or property changes **0**.
- Designer unloads **0**; Web Client unloads (Unload All Global Form Objects) **0**.
- Designer close/reopen **0 / 0**; runtime close/reopen **0 / 0**.
- Runtime right-clicks **1**. Runtime Save **0**. Record edits **0**.
- Details / Add / Find chosen **0 / 0 / 0**; FX_UMs Form opened **0**.
- Checkout, check-in, undo-checkout **0**. Re-login **0**.
- Dialogs or menus left open at end of T1: the **Property Class Extension editor** (open on arrival; left open by design). The runtime menu was dismissed.

## Worker-written file inventory (T1)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (created: this record).
- `evidence/EXP-069-R4/t1-00-designer-fresh-snapshot.yml` (accessibility snapshot saved by the browser tool at the worker-requested path).
- `evidence/EXP-069-R4/t1-01-designer-baseline-extension-editor-open.png`
- `evidence/EXP-069-R4/t1-02-runtime-fresh-snapshot.yml` (accessibility snapshot, same mechanism).
- `evidence/EXP-069-R4/t1-03-runtime-before-baseline-right-click.png`
- `evidence/EXP-069-R4/t1-04-runtime-baseline-um-right-click-menu.png`
- `evidence/EXP-069-R4/t1-05-runtime-after-blank-click-menu-dismissed.png`

**Total worker-written repository files (T1): 7** (1 record, 6 evidence). The browser tool also writes its own logs under `evidence/playwright/` (for example `page-2026-10-13T04-32-06-091Z.yml`, `page-2026-10-13T04-32-16-158Z.yml`, `console-2026-10-13T04-31-36-449Z.log`). Those were written by the tool, not the worker, and are excluded. The worker wrote no other repository file and did not run git. Repository confinement is authoritative in the harness and operator git review.

## Screenshot and snapshot evidence (T1)

- `t1-00` (Designer snapshot): FX_Items; editor `Property Class Extension` open (`[active]`); Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`; Right-Click Menu gridcell blank with `[active] [selected]`; component Right-Click Menu and Add/Details, Find, Property rows blank; Inheritance `FX_UM` / `FX_UM`; Save and Undo disabled; `ScopeType: User`. **Proves** the accessibility state at the start. **Does not prove** the saved (database) value of the extension's Right-Click Menu, nor whether the editor's blank value is stored.
- `t1-01` (Designer screenshot): FX_Items heading; editor open over the Designer with buttons OK and Help only; Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`; Right-Click Menu row blank, highlighted, with only the ellipsis button (no dropdown arrow); FX_UMCombobox selected; Components row `object.FX_UM`; Inheritance `FX_UM` / `FX_UM`; Save greyed; footer `ScopeType: User`. **Proves** the editor state, the four visible field values, the absence of a dropdown arrow, and the Designer identity and scope. **Does not prove** the component-level Behavior rows (covered by the editor) or the rows' editability under a click.
- `t1-02` (runtime snapshot): FX_Items tab; record `Unit of Measure (Object 1 of 3)`; UM combobox `EA`; Save disabled. **Proves** the runtime state before the right-click. **Does not prove** the menu.
- `t1-03` (runtime screenshot, before right-click): FX_Items; dumbbell; `45 pound iron`; cost `45.00`; UM `EA`; Description `Each`; Save greyed; no menu. **Proves** the clean pre-right-click state. **Does not prove** the menu contents.
- `t1-04` (runtime, menu open): FX_Items dumbbell with the UM combobox selected (`EA`); a context menu directly below the combobox listing the 25 standard items ending in `Help`; no Details, Add or Find. **Proves** the 25 items on this right-click. **Does not prove** that this is the complete definition for every record.
- `t1-05` (runtime, after blank-area click): menu gone; dumbbell; `EA`; `Unit of Measure (Object 1 of 3)`; Save greyed. **Proves** dismissal with no item chosen and an unchanged record. **Does not prove** that nothing else changed beyond the visible fields.

## Observations (T1; observed only)

1. The FX_UM extension editor was open on arrival. Its Add/Details Form `FX_UMs`, Find Form `FX_UMs` and Property `FX_UM` are shown; its Right-Click Menu is blank (same as R2 T10 and R3 T1/T2).
2. The extension's Right-Click Menu row shows no dropdown arrow and no combobox child in its non-focused state; its gridcell is carried in `[active] [selected]` state from R3 T2.
3. The component-level Add/Details, Find, Property and Right-Click Menu of FX_UMCombobox are blank (accessibility readback; covered by the editor visually).
4. The runtime right-click on the UM combobox shows the 25 standard items and no Details, Add or Find (negative baseline; consistent with R2 T8, T9 and R3 T1).
5. Escape did not dismiss the runtime context menu; one blank-area click did (consistent with R3 T1).
6. The session was usable; no re-login, no banner, no unsaved-change prompt, no browser-native dialog.

## Acceptance (T1 preflight)

| AC | T1 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported with limits.** Sources reviewed (the R3 final report read after browser interaction began; disclosed). Session usable; FX_Items in the Designer, User scope, clean; editor state recorded (open; four fields; Right-Click Menu blank; no dropdown arrow); FX_UMCombobox Data Source `object.FX_UM`, Inheritance `FX_UM`, component Right-Click Menu blank; runtime baseline recorded (25 items; no Details, Add or Find). | `t1-00`, `t1-01` (Designer); `t1-02`, `t1-03`, `t1-04`, `t1-05` (runtime) | Component-level Behavior rows shown by accessibility only (covered by the editor). The extension row's editability was not tested by a click. The stored value was not read from a fresh reopen. |
| AC-2 | **NOT RUN** (inline OK, Edit > Property Class Extension, the Right-Click Menu change and its commit are for the next authorized task). | — | — |
| AC-3 to AC-6 | **NOT RUN.** | — | — |
| AC-7 (T1 portion) | **Not yet met for the no-open-dialog condition**: the extension editor is still open at the planned stop. No other change was made in T1. | `t1-01`; audit above | The editor cannot be closed without OK (the only buttons are OK and Help). Its OK is the next task's step. |
| AC-8 | This record (T1 portion). | Audit counts above | — |

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| The FX_UM extension editor is open on arrival (2026-10-13 T1), with Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, Right-Click Menu blank | **observed** (one run, T1; agrees with R2 T10 and R3 T1/T2) |
| The extension's Right-Click Menu row shows no dropdown arrow in its non-focused state | **observed** (screenshot `t1-01`; one run) |
| Editability of the extension's Right-Click Menu row under a click (the next focus route) | **unresolved** (not tested in T1) |
| FX_UMCombobox component-level Add/Details, Find, Property and Right-Click Menu are blank | **observed** (accessibility readback; one run, T1) |
| The runtime UM combobox right-click shows the 25 standard items without Details, Add or Find | **observed** (one run, T1; agrees with R2 T8, T9 and R3 T1) |
| Escape does not dismiss the runtime context menu; a blank-area click does | **observed** (one run, T1; agrees with R3 T1; cause unresolved) |
| The editor's OK is the only way to close it (no Cancel, no close control) | **observed** (T1 and R2 T10; the T1 instruction forbids clicking it) |
| Stored extension Right-Click Menu value (R2 T4 pre-OK `StdDetailsAddFind`; R2 T10 blank after reopen) | **unresolved** (the reopen readback in R2 T10 was blank; no stored-value check in T1) |
| Tutorial inheritance lesson (a component-level override defeats an extension) | **unverified** (tutorial transcript; not reached) |
| The web-designer guide's route for editing an existing extension (Edit > Property Class Extension) | **unverified** (documentation; not performed in T1) |

## Open items and next permitted action

1. **Next step (needs the next task's authorization):** close the inline FX_UM editor with one no-change OK, record the response and the Designer Save state (the OK may make the Designer dirty), then open Edit > Property Class Extension once and record its layout (the R4 brief's Extension step). Before any OK, verify that no combobox in the editor is active.
2. **Dirty-state note for the next task:** the R2 T4 OK turned the Designer dirty. The R4 brief allows Save 2 only if a no-change OK made the Designer dirty; the Save budget (two) must be tracked from that point.
3. **Source-reading ordering deviation (T1):** the R3 final report was read after browser interaction had begun. Recorded above; not correctable.
4. **Partial reads:** R2 sections other than T4 and T10 were not read; EXP-064 sections other than T2 and T7 were not read; the rest of the EXP-064 T7 audit (after line 726) was not read.
5. Classification for all T1 findings: **observed only, NOT replay_verified.**

---

## T2 — Inline editor closed with one no-change OK; Edit > Property Class Extension (Global Objects) opened once; FX_UM selected; Right-Click Menu read, NOT changed; global dialog left open (cycle 1)

Task T2 (bounded instruction: close the inline editor with one no-change OK; open Designer Edit > Property Class Extension once; select FX_UM without New; inspect editability; stop before changing any value, opening a value dropdown, pressing OK or saving; leave the global editor open). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 1, task_message_id `1cc3dc69-8112-4dc0-b843-1c817afecfbd`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Starting state (fresh)

- Tab list (one, before any select): tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client. Tab 0 selected (succeeded).
- Snapshot `t2-00-designer-fresh-snapshot-before-inline-ok.yml`: Designer FX_Items; footer `ScopeType: User`; toolbar Save and Undo `[disabled]` (clean). The inline `Property Class Extension` dialog open with buttons OK and Help only.
- Combobox check (Grep of `t2-00`): the only combobox in the snapshot is the Unit of Measure preview control (outside the editor). The editor has no combobox child. The Right-Click Menu gridcell is `[active] [selected]`, carried from the R3 T2 focus click; no combobox or listbox.
- Pre-OK readback (`t2-01`): Name `FX_UM`; Version `User version for user <operator>`; Add/Details Form `FX_UMs`; Find Form `FX_UMs`; Property `FX_UM`; **Right-Click Menu blank with no dropdown arrow** (only the ellipsis). Save greyed.

### Inline editor OK (ONE; no field changed)

- One click on the inline dialog's OK (ref `e2145`). **Native response: no alert, no error, no message.** The dialog closed (no `dialog` node in `t2-02`).
- **Designer Save stayed disabled** and Undo stayed disabled after the OK (`t2-02`, `t2-03`). The Designer was not dirty after this OK in this run.
- The page URL lost its `MGForm=FX_Items` parameter after the dialog closed (the same drop EXP-064 recorded after a dialog close). The Designer still showed FX_Items, footer `ScopeType: User`.
- Limit: the Designer clean state does not prove whether the OK wrote metadata; no stored-value readback was made here.

### Designer Edit > Property Class Extension (ONE open)

- One click on the Designer top-menu `Edit` (ref `e5`). One targeted find for `Property Class Extension` located the menu item. One click on it.
- **Result: the dialog is titled "Global Objects"**, not a separate "Property Class Extensions" editor. Layout (`t2-04`, `t2-05`):
  - Left pane, heading **Property Class Extensions**: a search textbox; an alphabetical list (AccessAs, Amount, AppModule, ApsInt, … CustomerID …, FX_UM, G6RUM, GenericInt, IDOCollections …); at the bottom three icon buttons (blue **+**, a copy-like icon, a trash icon). **None of the three was clicked.**
  - Right pane, heading **Properties**: a search textbox; Expand and Collapse icon buttons; a property tree (empty until an extension is selected); Undo and Redo (both disabled).
  - Dialog buttons: **OK**, **Cancel**, **Help**.
- The dialog opened with no extension selected. Designer Save stayed disabled.

### FX_UM selected (ONE click on the list row, ref `e2421`)

- The `FX_UM` row was selected (highlighted, `t2-07`). No New, no +, no copy, no delete.
- Property sheet for FX_UM (`t2-06`, `t2-07`, `t2-09`):

| Row | Value (this view) | Control visible |
| --- | --- | --- |
| Name | `FX_UM` | text |
| Version | `User version for user <operator>` | text |
| Read-Only/Disable; Tab Read-Only Field; No Tab Stop; Auto Complete | `False` each | dropdown arrow |
| Add/Details Form | `FX_UMs` | dropdown arrow and ellipsis |
| Find Form | `FX_UMs` | dropdown arrow and ellipsis |
| Property | `FX_UM` | dropdown arrow |
| **Right-Click Menu** | **blank** | **dropdown arrow and ellipsis** (`t2-09`) |
| Drag Image | blank | dropdown arrow |
| Enabled When; Required When | blank | ellipsis only |

- **Editability (observed, visible rendering only):** in this Global Objects view the Right-Click Menu row **shows a dropdown arrow**, and so do the Add/Details Form, Find Form and Property rows. This differs from the inline editor (R3 T2, and this run's `t2-01`), where the Right-Click Menu row showed no arrow. In the accessibility tree these value cells are generic elements with a pointer cursor, not combobox roles, so editability is established from the rendering only.
- **Not tested:** opening the Right-Click Menu dropdown, choosing a value, or committing with Tab. These are forbidden in T2.

### View-only scrolling (no value changed)

- First mouse wheel (deltaY 200) at the pointer's previous position scrolled the **extension list**, not the Properties pane (`t2-08`). The selected FX_UM stayed in the Properties pane.
- The pointer was then moved over the Properties pane (1150, 500) and the wheel (deltaY 200) was repeated; the Properties pane scrolled to show the Right-Click Menu row (`t2-09`).

### Stop (per T2)

- **No value changed. No dropdown opened. No focus click on any value cell. No OK or Cancel clicked on the Global Objects dialog. No Save. No New, +, copy or trash.**
- The Global Objects dialog is **left OPEN**, as the brief asked, and is usable (FX_UM selected; the Right-Click Menu row has a visible dropdown arrow).
- Designer: FX_Items, User scope, clean (Save and Undo disabled; `t2-10`).
- **Component-level FX_UMCombobox (`t2-02`, accessibility after the inline OK):** Right-Click Menu gridcell blank (no text); component Add/Details Form and Find Form gridcells blank. **Not changed.**

### Browser action audit (T2, exact counts) — 21 calls

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, tab 1 Web Client |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (`t2-00`) | Designer FX_Items; inline editor open; Save disabled |
| 4 | `browser_take_screenshot` `t2-01` | Pre-OK readback; Right-Click Menu blank, no arrow |
| 5 | `browser_click` `e2145` (inline OK, once) | Dialog closed; no error |
| 6 | `browser_snapshot` untargeted (`t2-02`) | No dialog; Save and Undo disabled; component Right-Click Menu blank |
| 7 | `browser_take_screenshot` `t2-03` | Designer clean after OK |
| 8 | `browser_click` `e5` (Designer Edit menu) | Edit menu open |
| 9 | `browser_find` text `Property Class Extension` | Menu item located |
| 10 | `browser_click` `e2181` (Property Class Extension item) | Global Objects dialog opened |
| 11 | `browser_snapshot` untargeted (`t2-04`) | Layout and buttons read |
| 12 | `browser_take_screenshot` `t2-05` | Dialog layout visible |
| 13 | `browser_click` `e2421` (FX_UM row) | FX_UM selected |
| 14 | `browser_snapshot` untargeted (`t2-06`) | Property sheet read |
| 15 | `browser_take_screenshot` `t2-07` | FX_UM four fields; Right-Click Menu blank (scrolled out of view) |
| 16 | `browser_mouse_wheel` (0, 200) | Extension list scrolled (view only) |
| 17 | `browser_take_screenshot` `t2-08` | List scrolled; FX_UM still shown in Properties |
| 18 | `browser_mouse_move_xy` (1150, 500) | Pointer over Properties pane |
| 19 | `browser_mouse_wheel` (0, 200) | Properties pane scrolled (view only) |
| 20 | `browser_take_screenshot` `t2-09` | Right-Click Menu row visible with dropdown arrow |
| 21 | `browser_snapshot` untargeted (`t2-10`) | Global dialog open; Save and Undo disabled |

**T2 counts (exact):** browser calls **21**. Tab lists **1**; tab selects **1** (succeeded); snapshots **5** (all untargeted: `t2-00`, `t2-02`, `t2-04`, `t2-06`, `t2-10`); finds **1** (read-only); screenshots **6** (`t2-01`, `t2-03`, `t2-05`, `t2-07`, `t2-08`, `t2-09`; all succeeded); element clicks **4** (inline OK ×1, Designer Edit menu ×1, Property Class Extension item ×1, FX_UM row ×1); mouse wheel **2** (view-only scrolls); mouse move **1**; coordinate clicks **0**; key presses **0**; typed text **0**; right-clicks **0**; drags **0**; navigations **0**; browser JavaScript, evaluate, console or network inspection **0**.
- Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**.
- Parallel browser actions: **none**. Every browser action was issued alone and awaited.
- Local reads (not browser calls): Grep of the saved snapshots.

### Mutation and lifecycle counts, T2 and cumulative T1+T2

| Item | T2 | Cumulative T1+T2 |
| --- | --- | --- |
| Browser calls | 21 | **36** (T1 15 + T2 21) |
| Extension creations | 0 | **0** |
| Extension field changes | 0 | **0** |
| Inline-editor OK clicks | 1 (no change) | **1** |
| Global Objects OK clicks | 0 | **0** |
| Designer Saves | 0 | **0** (Save 2 not needed: the no-change OK did not dirty the Designer) |
| Designer close / reopen | 0 / 0 | **0 / 0** |
| Runtime close / reopen | 0 / 0 | **0 / 0** |
| Runtime right-clicks | 0 | **1** (T1 baseline) |
| Details / Add / Find chosen | 0 / 0 / 0 | **0 / 0 / 0** |
| FX_UMs Form opened | 0 | **0** |
| Web Client unloads / Designer unloads | 0 / 0 | **0 / 0** |
| Edit-menu openings | 1 | **1** |
| Global Objects dialogs opened | 1 | **1** |
| Value dropdowns opened | 0 | **0** |
| Focus clicks on the Right-Click Menu value | 0 | **0** |
| Component or property changes | 0 | **0** |
| Re-logins | 0 | **0** |

### Worker-written file inventory (T2)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: status line and this T2 section).
- `evidence/EXP-069-R4/t2-00-designer-fresh-snapshot-before-inline-ok.yml`
- `evidence/EXP-069-R4/t2-01-inline-editor-before-ok-readback.png`
- `evidence/EXP-069-R4/t2-02-after-inline-ok-snapshot.yml`
- `evidence/EXP-069-R4/t2-03-after-inline-ok-designer-state.png`
- `evidence/EXP-069-R4/t2-04-global-pce-editor-layout-snapshot.yml`
- `evidence/EXP-069-R4/t2-05-edit-property-class-extension-global-objects-layout.png`
- `evidence/EXP-069-R4/t2-06-fx-um-selected-property-sheet-snapshot.yml`
- `evidence/EXP-069-R4/t2-07-fx-um-selected-four-fields-right-click-row-visual.png`
- `evidence/EXP-069-R4/t2-08-after-wheel-scroll-properties-pane.png` (shows the extension list scrolled; not decisive for the property sheet)
- `evidence/EXP-069-R4/t2-09-properties-pane-scrolled-to-right-click-menu.png`
- `evidence/EXP-069-R4/t2-10-final-state-global-editor-open-snapshot.yml`

Cumulative worker-written repository files (T1+T2): **18** (the record, 6 T1 evidence, 11 T2 evidence). Tool-written logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git.

### Screenshot and snapshot evidence (T2)

- `t2-01` (inline editor before OK): Designer FX_Items; the inline editor with OK and Help; Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`; Right-Click Menu blank with only the ellipsis; Save greyed; footer `ScopeType: User`. **Proves** the pre-OK state. **Does not prove** the stored value.
- `t2-03` (after inline OK): no dialog; Designer clean; Save and Undo greyed; component FX_UMCombobox selected with Inheritance `FX_UM`. **Proves** the editor closed with the Designer clean. **Does not prove** whether metadata was written.
- `t2-05` (Global Objects layout): dialog with the Property Class Extensions list (FX_UM in it), the Properties pane, the three icon buttons under the list, and OK/Cancel/Help. **Proves** the layout reached by Edit > Property Class Extension. **Does not prove** the stored content of any extension.
- `t2-07` (FX_UM selected): Name `FX_UM`; Version `User version for user …`; Add/Details and Find values `FX_UMs`, `FX_UMs`, `FX_UM`; dropdown arrows on those rows and on the Behavior rows. The Right-Click Menu row is below the visible area in this capture. **Proves** the selection and the three values. **Does not prove** the Right-Click Menu row, which is shown in `t2-09`.
- `t2-09` (Properties scrolled): Right-Click Menu row blank with a dropdown arrow and ellipsis; Drag Image with a dropdown arrow; Enabled When and Required When with ellipsis; Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`. **Proves** the Right-Click Menu row is blank with a visible dropdown in this view. **Does not prove** that the dropdown accepts a value (not opened).
- `t2-08`: list scrolled, not the property sheet. Not decisive.
- `t2-10` (final snapshot, YML): Global Objects open; FX_UM selected; Right-Click Menu gridcell with no text; Save and Undo disabled; no combobox role in the global dialog. **Proves** the final accessibility state. **Does not prove** the dropdown behaviour.

### Acceptance (T2)

| AC | T2 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Re-confirmed for T2**: Designer FX_Items, User scope, clean; the inline editor state recorded (open; four values; Right-Click Menu blank with no arrow in the inline view); FX_UMCombobox component-level Right-Click Menu blank (`t2-02`). The runtime baseline was recorded in T1 and not repeated. | `t2-00`, `t2-01`, `t2-02` | Component Behavior rows by accessibility only. |
| AC-2 | **PARTLY RUN.** Inline editor closed with one no-change OK (response and Save state recorded). Edit > Property Class Extension opened once with its layout recorded. FX_UM selected. **Right-Click Menu NOT set; NO commit; NO OK after a change** (those are the next step). | `t2-01`, `t2-03`, `t2-05`, `t2-07`, `t2-09` | The Global Objects dialog is the route here; no separate parent dialog was observed yet. |
| AC-3 to AC-6 | **NOT RUN** (no change, no pre-Save readback, no Save, no runtime check, no drill-down, no Designer close/reopen in T2). | — | — |
| AC-7 (T2 portion) | **Supported for T2**: no other change; no Add, New or Find; no unload; no runtime action. **The Global Objects dialog is open on purpose** (the brief asked to leave it open). | `t2-10`; audit above | Open dialog expected at this stop. |
| AC-8 | T2 portion complete. | Audit counts above | — |

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| The inline FX_UM editor closes with one no-change OK; the Designer stays clean (Save disabled) | **observed** (one run, T2; `t2-02`, `t2-03`) |
| Edit > Property Class Extension opens a "Global Objects" dialog (Property Class Extensions list, Properties pane, OK/Cancel/Help), not a separate editor | **observed** (one run, T2; `t2-05`) |
| In the Global Objects view, the FX_UM Right-Click Menu row shows a blank value with a dropdown arrow | **observed** (one run, T2; `t2-09`) |
| In the inline editor, the same row showed no arrow | **observed** (one run, T1 and T2) |
| The difference between the inline and global views is unresolved (view mode, or a different editing route) | **unresolved** |
| The Right-Click Menu dropdown accepts a value and a Tab commit | **unresolved** (not tested; forbidden in T2) |
| The stored Right-Click Menu value (R2 T4 pre-OK `StdDetailsAddFind`; R2 T10 blank after reopen) | **unresolved** |
| Whether the inline OK wrote metadata | **unresolved** (the Designer stayed clean; no stored-value readback) |
| Page URL drops `MGForm=FX_Items` after a dialog closes | **observed** (T2; also EXP-064) |
| Mouse-wheel events scroll the element under the pointer, not necessarily the pane that was intended | **observed** (one run, T2) |

### Open items and next permitted action

1. **Next step (AC-2 commit; needs the next task's authorization):** with the Global Objects dialog open and FX_UM selected, open the Right-Click Menu dropdown once, choose `StdDetailsAddFind` once, press Tab once to commit, and verify the committed text and that the Add/Details Form `FX_UMs`, Find Form `FX_UMs` and Property `FX_UM` are unchanged. Then OK once on the Global Objects dialog (there may be no separate parent dialog in this route). Record the response and whether the Designer Save became enabled.
2. Do not click OK while the Right-Click Menu combobox is still active; commit with Tab first.
3. Save 1 only after the pre-Save readback. Save 2 is allowed only if a no-change OK dirties the Designer; the inline OK in T2 did not.
4. Classification for all T2 findings: **observed only, NOT replay_verified.**

---

## T3 — FX_UM Right-Click Menu set to StdDetailsAddFind, committed with Tab, Global Objects confirmed with ONE OK; Designer dirty, Save NOT pressed (cycle 2)

Task T3 (bounded instruction: commit the single permitted FX_UM change from the open Global Objects dialog; capture before OK; ONE OK; stop before Designer Save, pre-Save readback and runtime). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 2, task_message_id `e1df26ce-a784-49a2-b353-11e2ce25e5e1`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Starting state (fresh)

- Review: T2 evidence (the Global Objects layout; FX_UM selected; Right-Click Menu blank with a dropdown arrow in this view) read from the T2 section and `t2-09`. The dialog was not reopened.
- Tab list (one, before any select): tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client. Tab 0 selected (succeeded).
- **Ordering note:** in this task the `browser_tabs` select (tab 0) and the first `browser_snapshot` were issued in the same block. The select is a browser tab action, not a read, so this pair was not strictly sequential. The snapshot was read-only, and the select was on the already-current tab; no Mongoose change resulted. Disclosed here, as in EXP-069-R3 T1.
- Snapshot `t3-00-fresh-snapshot-before-commit.yml`: Global Objects dialog open; FX_UM gridcell `[active]` (selected); Name `FX_UM`; Version `User version for user <operator>`; Add/Details Form `FX_UMs`; Find Form `FX_UMs`; Property `FX_UM`; Right-Click Menu gridcell empty (no text). Designer toolbar Save `[disabled]`; Undo `[disabled]`. Footer `ScopeType: User`.
- Screenshot `t3-01` (pre-commit, dialog visible): the Right-Click Menu row at about (1280, 533) shows a dropdown arrow; the three other fields unchanged.

### Identity and unchanged-field check before the change

| Field | Value (before change) |
| --- | --- |
| Name | `FX_UM` |
| Add/Details Form | `FX_UMs` |
| Find Form | `FX_UMs` |
| Property | `FX_UM` |
| Right-Click Menu | blank |

### Dropdown and native choices (ONE dropdown open)

- ONE click on the Right-Click Menu dropdown arrow (ref `e2311`, from the fresh snapshot). The combobox opened (`[expanded] [active]`).
- Native list (`t3-02`), first options: `EventActionEditExpression`, `EventActionRightClickMenu`, `menu_blank`, `menu_Outbound`, `StdAction`, `StdDataView`, `StdDefault`, `StdDetails`, `StdDetailsAdd`, `StdDetailsAddFind`, `StdDetailsAddFindSearch`, `StdDetailsAddFindSearchAction`, `StdDetailsAddSearch`, … The list matches the R2 T4 option list. `StdDetailsAddFind` **was offered**.

### Choice and commit (ONE choice; ONE Tab)

- ONE click on the `StdDetailsAddFind` option (ref `e2468`). The combobox closed its list.
- ONE Tab key press to commit. No other key or click was made.
- Post-commit snapshot (`t3-03`): the Right-Click Menu gridcell reads **`StdDetailsAddFind`** (committed text; generic node `StdDetailsAddFind`). No combobox or listbox remains in the accessibility tree. Focus moved to the row's ellipsis cell (`[active] [selected]`), not into a combobox.
- Other three fields after the commit (`t3-03`, `t3-04`): Add/Details Form `FX_UMs`; Find Form `FX_UMs`; Property `FX_UM`. **Unchanged.**
- Screenshot `t3-04` (before OK): the committed Right-Click Menu row reads `StdDetailsAddFind` with the dropdown arrow and ellipsis; no dropdown open; Save greyed in the Designer behind the dialog. Note: the dialog's own Properties Undo icon (lower pane) is drawn enabled after the change; the Designer toolbar Undo stayed disabled.

### Global Objects OK (ONE)

- Preconditions checked before the OK: combobox not active (no combobox in the tree); the committed text visible; the three other fields unchanged.
- ONE click on the Global Objects **OK** (ref `e2433`).
- **Native response:** no alert, no error text, no message. The dialog **closed**. There was **no separate parent dialog** (the post-OK snapshot shows no `dialog` node). No second OK was clicked.
- **Designer Save became ENABLED** (`t3-05` snapshot: `button "Save"` without `[disabled]`; `t3-06` screenshot: the Save icon is active; Regenerate Form enabled; Designer Undo still disabled). The Designer is dirty.
- FX_Items remains loaded: heading `FX_Items`, tab `closable FX_Items`, footer `[ ScopeType: User / ScopeName: <operator> ]`.

### Component-level check after OK (read-only)

- Post-OK snapshot (`t3-05`), the FX_UMCombobox Behavior → Right-Click Menu row (line 910): gridcell has **no text** (blank). The component-level value was **not** changed. Component-level Add/Details Form and Find Form were not re-read after the dialog closed (not required; not changed).

### Browser action audit (T3, exact counts) — 14 calls

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, tab 1 Web Client |
| 2 | `browser_tabs` select 0 (issued with #3) | Succeeded |
| 3 | `browser_snapshot` untargeted (`t3-00`) (issued with #2) | Global Objects open; FX_UM selected; Right-Click Menu blank; Save disabled |
| 4 | `browser_take_screenshot` `t3-01` | Pre-commit dialog; arrow visible |
| 5 | `browser_click` `e2311` (Right-Click Menu dropdown arrow, once) | Combobox expanded and active; native list open |
| 6 | `browser_find` text `StdDetailsAddFind` | Option `e2468` located |
| 7 | `browser_take_screenshot` `t3-02` | Native list visible; `StdDetailsAddFind` offered |
| 8 | `browser_click` `e2468` (StdDetailsAddFind, once) | Option selected |
| 9 | `browser_press_key` Tab (once) | Committed; combobox no longer active |
| 10 | `browser_snapshot` untargeted (`t3-03`) | Row text `StdDetailsAddFind`; other three unchanged |
| 11 | `browser_take_screenshot` `t3-04` | Committed row visible before OK |
| 12 | `browser_click` `e2433` (Global Objects OK, once) | Dialog closed; no error; Save enabled |
| 13 | `browser_snapshot` untargeted (`t3-05`) | No dialog; Save enabled; FX_Items User scope |
| 14 | `browser_take_screenshot` `t3-06` | Designer after OK; Save icon active |

**T3 counts (exact):** browser calls **14**. Tab lists **1**; tab selects **1** (succeeded); snapshots **3** (untargeted: `t3-00`, `t3-03`, `t3-05`); finds **1** (read-only); screenshots **4** (`t3-01`, `t3-02`, `t3-04`, `t3-06`; all succeeded); element clicks **3** (dropdown arrow ×1, option ×1, Global Objects OK ×1); key presses **1** (Tab ×1); typed text **0**; coordinate clicks **0**; mouse wheel **0**; right-clicks **0**; drags **0**; navigations **0**; JavaScript, evaluate, console or network inspection **0**.
- Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**.
- Parallel actions: the tab select (#2) and the snapshot (#3) were issued in one block (disclosed above). No other pair was parallel.

### Cumulative browser audit (T1 + T2 + T3), exact

| Task | Browser calls |
| --- | --- |
| T1 | 15 |
| T2 | 21 |
| T3 | 14 |
| **Total** | **50** |

Cumulative detail: tab lists 3; tab selects 4 (all succeeded); snapshots 10; finds 5; screenshots 14; element clicks 8 (T1 runtime right-click 1; T2 inline OK 1, Edit menu 1, Property Class Extension item 1, FX_UM row 1; T3 dropdown arrow 1, option 1, Global Objects OK 1; 1 + 4 + 3 = 8); coordinate clicks 1 (T1 blank-area dismissal); mouse wheel 2 (T2 view-only); mouse move 1 (T2); key presses 2 (T1 Escape; T3 Tab); typed text 0; drags 0; navigations 0; JavaScript, console or network inspection 0; errors or timeouts 0; ref-not-found 0; fresh-snapshot recovery 0. Right-clicks 1 (T1 runtime baseline). Total of the listed categories: 3 + 4 + 10 + 5 + 14 + 8 + 1 + 2 + 1 + 2 = 50. ✓

### Mutation and lifecycle counts (cumulative T1–T3)

| Item | T3 | Cumulative T1–T3 |
| --- | --- | --- |
| Extension creations | 0 | **0** |
| Extension field changes (FX_UM Right-Click Menu only) | **1** (`StdDetailsAddFind`) | **1** |
| Extension ellipsis clicks | 0 | **0** |
| Inline-editor OK clicks | 0 | **1** (T2, no change) |
| Global Objects OK clicks | **1** | **1** |
| Parent-dialog OK clicks | 0 (no parent dialog) | **0** |
| Designer Saves | **0** | **0** (Save 1 not yet performed; Save 2 not authorized: T2's no-change OK did not dirty the Designer, and T3's change is the authorized dirty state for Save 1) |
| Designer close / reopen | 0 / 0 | **0 / 0** |
| Runtime close / reopen | 0 / 0 | **0 / 0** |
| Runtime right-clicks | 0 | **1** (T1) |
| Details / Add / Find chosen | 0 / 0 / 0 | **0 / 0 / 0** |
| FX_UMs Form opened | 0 | **0** |
| Web Client / Designer unloads | 0 / 0 | **0 / 0** |
| Component or property changes | 0 | **0** |
| Other extension field changes | 0 | **0** |
| Re-logins | 0 | **0** |

### Designer and runtime state at the end of T3

- **Designer (tab 0, selected):** FX_Items, User scope; **dirty** (toolbar Save enabled, from the Global Objects OK). Designer Undo disabled. No dialog open. FX_Items remains the only Form.
- **Runtime (tab 1):** not selected in T3; last state T1 (`t1-05`): dumbbell, UM `EA`, clean, no menu.
- **Dialogs:** none open. No browser-native dialog.

### Worker-written file inventory (T3)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: T3 status line and this T3 section).
- `evidence/EXP-069-R4/t3-00-fresh-snapshot-before-commit.yml`
- `evidence/EXP-069-R4/t3-01-pre-commit-global-dialog-fx-um-selected.png`
- `evidence/EXP-069-R4/t3-02-right-click-menu-dropdown-open-native-choices.png`
- `evidence/EXP-069-R4/t3-03-after-tab-commit-snapshot.yml`
- `evidence/EXP-069-R4/t3-04-right-click-menu-committed-before-ok.png`
- `evidence/EXP-069-R4/t3-05-after-global-objects-ok-snapshot.yml`
- `evidence/EXP-069-R4/t3-06-after-global-objects-ok-designer-save-enabled.png`

**Cumulative worker-written repository files (T1–T3): 25** (the record 1; T1 evidence 6; T2 evidence 11; T3 evidence 7). Tool logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git.

### Screenshot and snapshot evidence (T3)

- `t3-01` (pre-commit): Global Objects open; FX_UM selected; Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`; Right-Click Menu blank with a dropdown arrow; Save greyed; footer `ScopeType: User`. **Proves** the pre-change identity, the three unchanged fields and the control's presence. **Does not prove** that a value is offered until `t3-02`.
- `t3-02` (native list open): the Right-Click Menu combobox expanded with its option list; `StdDetailsAddFind` is listed between `StdDetailsAdd` and `StdDetailsAddFindSearch`. **Proves** the native choice is offered. **Does not prove** the selection or commit (see `t3-04`).
- `t3-04` (committed, before OK): Right-Click Menu reads `StdDetailsAddFind` with no dropdown open; Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM` unchanged; Save greyed in the Designer behind. **Proves** the visible committed text and the three unchanged fields before the OK. **Does not prove** that the value was stored (the OK and Save come later).
- `t3-06` (after the Global Objects OK): no dialog; Designer toolbar Save icon active; Regenerate Form active; Undo greyed; FX_Items heading; footer `ScopeType: User`. **Proves** the dialog closed and the Designer is dirty. **Does not prove** what the dirty state contains or that it is persisted.
- `t3-05` (YML after OK): no dialog; Save enabled; the FX_UMCombobox component-level Right-Click Menu gridcell blank. **Proves** the accessibility state. **Does not prove** the stored value.

### Acceptance (T3)

| AC | T3 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed in T1–T2; not repeated. | T1 `t1-00`, `t1-01`; T2 `t2-00`, `t2-01` | — |
| AC-2 | **Met for the change, commit and OK (as observed).** Inline editor closed with one no-change OK (T2). Edit > Property Class Extension opened once (T2; Global Objects). FX_UM selected. Right-Click Menu set to `StdDetailsAddFind` and committed with Tab (text visible; other three unchanged) before one Global Objects OK; the parent-dialog OK was not needed (no parent dialog appeared). Responses and Save state recorded. | `t3-02`, `t3-04`, `t3-06`; `t3-05` (YML) | The committed value's **stored** form is not proven (the Designer is dirty and unsaved). |
| AC-3 | **NOT RUN** (pre-Save readback, Save 1, runtime check 1 are the next task). | — | — |
| AC-4 | **Supported so far**: component-level Right-Click Menu blank after OK (`t3-05`, line 910). Unloads 0. | `t3-05` | — |
| AC-5 to AC-6 | **NOT RUN.** | — | — |
| AC-7 (T3 portion) | **Partly supported**: only the FX_UM Right-Click Menu changed; no Add or Find; no unload; no runtime action. **Open state:** none (dialog closed). **The Designer is dirty**, which is expected before Save 1. | `t3-05`, `t3-06`; audit | — |
| AC-8 | T3 portion complete. | Audit counts above | — |

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| The FX_UM Right-Click Menu dropdown in the Global Objects view offers `StdDetailsAddFind` (native list; same option set as R2 T4) | **observed** (one run; `t3-02`) |
| Choosing `StdDetailsAddFind` and pressing Tab commits the text, leaving no active combobox | **observed** (one run; `t3-03`, `t3-04`) |
| The other three extension fields are unchanged by the commit | **observed** (one run; `t3-03`, `t3-04`) |
| The Global Objects OK closes the dialog with no error text and no parent dialog | **observed** (one run; `t3-05`, `t3-06`) |
| The Global Objects OK makes the Designer toolbar Save enabled | **observed** (one run; `t3-06`) |
| The component-level FX_UMCombobox Right-Click Menu remains blank after the OK | **observed** (accessibility, one run; `t3-05`) |
| The stored extension Right-Click Menu value | **unresolved** (not yet saved or re-read; Save 1 and the pre-Save readback are next) |
| Whether Save 1 persists the extension change | **unresolved** |
| Runtime Details/Add/Find after the change | **unresolved** (runtime check 1 is next) |

### Open items and next permitted action

1. **Next task (not performed in T3):** the pre-Save readback through Edit > Property Class Extension (select FX_UM; read all four fields; close with Cancel or, if no Cancel, OK without change), then Designer Save 1 with the native response verbatim.
2. **Save budget:** Save 1 is the first Designer Save in this run. Save 2 is allowed only if a no-change OK dirties the Designer after Save 1, per the brief.
3. Classification for all T3 findings: **observed only, NOT replay_verified.**

---

## T4 — Pre-Save readback (four fields), read-only dialog closed with Cancel, Designer Save 1 once (cycle 3)

Task T4 (bounded instruction: review T3; confirm the retained Designer state; open Edit > Property Class Extension once; read the four FX_UM fields without changing them; close with Cancel once; Designer Save 1 once through the toolbar; record the native response; stop before runtime, unload, drill-down and reopen). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 3, task_message_id `e9e0aff6-78a3-45d3-ae67-a44a14a258d8`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Review before browser interaction

- T3 record and its decisive evidence (`t3-02`, `t3-04`, `t3-06`) read from this record's T3 section. The Global Objects OK and the Designer dirty state were recorded in T3.

### Starting state (fresh)

- Tab list (one, before any select): tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client. Tab 0 selected (succeeded).
- Snapshot `t4-00-fresh-snapshot-before-readback.yml`: Designer heading `FX_Items`; footer `ScopeType: User / ScopeName: <operator user>`; toolbar **Save enabled** (`button "Save"` without `[disabled]`); Undo `[disabled]`; no dialog open.

### Edit > Property Class Extension (ONE open) and FX_UM selection

- One click on the Designer top-menu `Edit` (`e5`); one click on the `Property Class Extension` menu item (`e1862`). The Global Objects dialog opened (`t4-01` snapshot: dialog with OK, Cancel, Help; the Property Class Extensions list includes FX_UM).
- One click on the `FX_UM` row (`e2102`). It is selected (`[active]`, `t4-02` snapshot). No New, +, copy or trash.

### Pre-Save readback (all four fields; read, not changed)

| Field | Readback (accessibility `t4-02`) | Visible (`t4-03`, `t4-04`) |
| --- | --- | --- |
| Name | `FX_UM` | yes (`t4-03`) |
| Add/Details Form | **`FX_UMs`** | yes |
| Find Form | **`FX_UMs`** | yes |
| Property | **`FX_UM`** | yes |
| Right-Click Menu | **`StdDetailsAddFind`** | yes (`t4-04`, after a view-only Properties scroll) |

- The Properties pane was scrolled once (mouse wheel 200 with the pointer moved over the pane) to bring the lower rows into view. No value was touched.
- Result: the four settings match the required values. **No blank Right-Click Menu. No stop condition.**

### Close the read-only dialog (ONE Cancel)

- One click on the dialog's **Cancel** (`e2194`). The dialog closed (`t4-05` snapshot: no `dialog` node).
- Designer Save **stayed enabled** after Cancel (`t4-05`, `t4-06`). Undo stayed disabled. FX_Items heading and footer `ScopeType: User` unchanged.
- Cancel was used (it exists), so no no-change OK was needed. The Cancel's effect on the dirty state is recorded as observed: the Save stayed enabled.

### Designer Save 1 (ONE)

- One click on the Designer toolbar **Save** (`e16`). No retry.
- **Native response (verbatim):** toast titled **"Save"** with the text **"Global object(s) were saved."** and a close (×) control (`t4-07` screenshot; `find` text `saved` returned the same text).
- **Post-Save state (`t4-08` snapshot):** toolbar **Save `[disabled]`**; Regenerate Form `[disabled]`; Undo `[disabled]`; heading `FX_Items`; footer `ScopeType: User / ScopeName: <operator user>`; no dialog open.
- Limit: the message names **global objects**, as in EXP-064 T7. It does not state which records were written. Persistence is not verified.

### Component-level check after Save (read-only)

- `t4-08` snapshot, FX_UMCombobox Behavior → Right-Click Menu gridcell: **blank** (no text). **Not changed** by T4.

### Browser action audit (T4, exact counts) — 22 calls

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, tab 1 Web Client |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` untargeted (`t4-00`) | Designer FX_Items; Save enabled; no dialog |
| 4 | `browser_click` `e5` (Edit menu) | Edit menu open |
| 5 | `browser_find` text `Property Class Extension` | Menu item `e1862` located |
| 6 | `browser_click` `e1862` (Property Class Extension item) | Global Objects dialog opened |
| 7 | `browser_snapshot` untargeted (`t4-01`) | Dialog layout; OK, Cancel, Help |
| 8 | `browser_click` `e2102` (FX_UM row) | FX_UM selected |
| 9 | `browser_snapshot` untargeted (`t4-02`) | Four fields read in the accessibility tree |
| 10 | `browser_take_screenshot` `t4-03` | Name, Add/Details, Find (partly), Property not all visible |
| 11 | `browser_mouse_move_xy` (1150, 500) | Pointer over the Properties pane (view only) |
| 12 | `browser_mouse_wheel` (0, 200) | Properties pane scrolled (view only) |
| 13 | `browser_take_screenshot` `t4-04` | Four fields visible, Right-Click Menu `StdDetailsAddFind` |
| 14 | `browser_click` `e2194` (Cancel, once) | Dialog closed |
| 15 | `browser_snapshot` untargeted (`t4-05`) | No dialog; Save still enabled |
| 16 | `browser_take_screenshot` `t4-06` | Designer dirty before Save |
| 17 | `browser_click` `e16` (Designer Save 1, once) | Toast "Global object(s) were saved." |
| 18 | `browser_find` text `saved` | Toast text read |
| 19 | `browser_take_screenshot` `t4-07` | Toast visible; toolbar Save greyed |
| 20 | `browser_snapshot` untargeted (`t4-08`) | Save disabled; no dialog; component Right-Click Menu blank |

Note: the call-count list above has 20 rows; the two view-only mouse actions (rows 11–12) are counted in the mouse row below.

**T4 counts (exact):** browser calls **20**. Tab lists **1**; tab selects **1** (succeeded); snapshots **5** (untargeted: `t4-00`, `t4-01`, `t4-02`, `t4-05`, `t4-08`); finds **2** (`Property Class Extension`; `saved`); screenshots **4** (`t4-03`, `t4-04`, `t4-06`, `t4-07`; all succeeded); element clicks **5** (Edit menu, Property Class Extension item, FX_UM row, Cancel ×1, Designer Save ×1); mouse move **1** and mouse wheel **1** (view-only); key presses **0**; typed text **0**; coordinate clicks **0**; right-clicks **0**; navigations **0**; JavaScript, evaluate, console or network inspection **0**. Check: 1 + 1 + 5 + 2 + 4 + 5 + 1 + 1 = **20**.
- Browser errors or timeouts: **0**. Ref-not-found errors: **0**. Fresh-snapshot recovery allowance used: **0**.
- Parallel actions: **none**.

### Cumulative browser audit (T1 + T2 + T3 + T4), exact

| Task | Browser calls |
| --- | --- |
| T1 | 15 |
| T2 | 21 |
| T3 | 14 |
| T4 | 20 |
| **Total** | **70** |

### Mutation and lifecycle counts (cumulative T1–T4)

| Item | T4 | Cumulative T1–T4 |
| --- | --- | --- |
| Extension creations | 0 | **0** |
| Extension field changes (FX_UM Right-Click Menu only) | 0 | **1** (`StdDetailsAddFind`, T3) |
| Extension ellipsis clicks | 0 | **0** |
| Inline-editor OK clicks | 0 | **1** (T2, no change) |
| Global Objects OK clicks | 0 | **1** (T3) |
| Global Objects Cancel clicks | **1** (read-only close, T4) | **1** |
| Parent-dialog OK clicks | 0 | **0** |
| Designer Saves | **1** (Save 1) | **1** |
| Save 2 | 0 (not authorized: no no-change OK after Save 1) | **0** |
| Designer close / reopen | 0 / 0 | **0 / 0** |
| Runtime close / reopen | 0 / 0 | **0 / 0** |
| Runtime right-clicks | 0 | **1** (T1 baseline) |
| Details / Add / Find chosen | 0 / 0 / 0 | **0 / 0 / 0** |
| FX_UMs Form opened | 0 | **0** |
| Web Client / Designer unloads | 0 / 0 | **0 / 0** |
| Component or property changes | 0 | **0** |
| Other extension changes | 0 | **0** |
| Re-logins | 0 | **0** |

### Designer state at the end of T4

- **Designer (tab 0, selected):** FX_Items, User scope; **clean** (Save `[disabled]`, Undo `[disabled]`). No dialog open.
- **Runtime (tab 1):** not selected in T4; last state T1 (dumbbell, UM `EA`, clean, no menu).

### Worker-written file inventory (T4)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: T4 status line and this T4 section).
- `evidence/EXP-069-R4/t4-00-fresh-snapshot-before-readback.yml`
- `evidence/EXP-069-R4/t4-01-global-objects-layout-after-open-snapshot.yml`
- `evidence/EXP-069-R4/t4-02-fx-um-selected-readback-snapshot.yml`
- `evidence/EXP-069-R4/t4-03-pre-save-readback-fx-um-four-fields.png`
- `evidence/EXP-069-R4/t4-04-pre-save-readback-scrolled-right-click-menu-visible.png`
- `evidence/EXP-069-R4/t4-05-after-cancel-snapshot.yml`
- `evidence/EXP-069-R4/t4-06-after-cancel-before-save-designer-dirty.png`
- `evidence/EXP-069-R4/t4-07-designer-save-1-native-response.png`
- `evidence/EXP-069-R4/t4-08-post-save-1-snapshot.yml`

**Cumulative worker-written repository files (T1–T4): 34** (the record 1; T1 evidence 6; T2 evidence 11; T3 evidence 7; T4 evidence 9). Tool logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git.

### Screenshot and snapshot evidence (T4)

- `t4-03` (pre-Save readback, before scroll): Global Objects open; FX_UM selected; Name `FX_UM`; Add/Details Form `FX_UMs`; Find Form and Property and Right-Click Menu below the visible area. **Proves** Name and Add/Details; **does not prove** the other three in this image (see `t4-04` and the T4 snapshot `t4-02`).
- `t4-04` (pre-Save readback, scrolled): Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`, with Drag Image, Enabled When and Required When below. **Proves** the three visible values and the Right-Click Menu value on screen; Name is shown in `t4-03`. **Does not prove** the stored value. (The Designer toolbar is not legible enough in this capture to state its Save state; the Save state before Save 1 is taken from the `t4-05` snapshot, which shows Save enabled.)
- `t4-06` (after Cancel, before Save): no dialog; Designer Save enabled; FX_Items heading; `ScopeType: User`. **Proves** the read-only dialog closed and the Designer was dirty before Save. **Does not prove** what the dirty state contains.
- `t4-07` (after Save): toast "Save — Global object(s) were saved."; toolbar Save greyed; FX_Items; scope User. **Proves** the native save acknowledgement and the clean toolbar. **Does not prove** persistence, or that the save wrote the FX_UM record specifically.
- `t4-08` (YML post-Save): Save disabled; no dialog; component Right-Click Menu blank. **Proves** the accessibility state after Save. **Does not prove** persistence.

### Acceptance (T4)

| AC | T4 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed in T1–T3. | T1 `t1-00`, `t1-01`; T2 `t2-00`, `t2-01` | — |
| AC-2 | **Met** as observed (T2 inline OK; T3 change, commit and Global Objects OK; T3 committed row `t3-04`). | `t3-02`, `t3-04`, `t3-06` | — |
| AC-3 | **Pre-Save readback PASSED** (four fields read; `t4-02`, `t4-04`). Editor closed with Cancel without change (`t4-05`). **Designer Save 1 performed once with the native response recorded** (`t4-07`). **Runtime check 1: NOT RUN** (next task). | `t4-02`, `t4-04`, `t4-05`, `t4-07`, `t4-08` | Runtime portion not run. |
| AC-4 | **Supported**: component-level Right-Click Menu blank after Save (`t4-08`); contingency unload not invoked (condition not reached). Unload count 0. | `t4-08` | — |
| AC-5 to AC-6 | **NOT RUN** (runtime check, drill-down, Designer close/reopen not in T4). | — | — |
| AC-7 (T4 portion) | **Supported**: no other change; no Add, New or Find; no unload; the Global Objects dialog closed with Cancel; no dialog open at the end; Save greyed. | `t4-05`, `t4-07`, `t4-08` | — |
| AC-8 | T4 portion complete. | Audit counts above | — |

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| Pre-Save readback in the Global Objects view shows FX_UMs, FX_UMs, FX_UM, StdDetailsAddFind | **observed** (one run; `t4-02`, `t4-04`) |
| Global Objects Cancel closes the dialog and leaves the Designer dirty (Save enabled) | **observed** (one run; `t4-05`) |
| Designer Save 1 returns the native toast "Global object(s) were saved." and leaves the toolbar Save disabled | **observed** (one run; `t4-07`, `t4-08`) |
| The save message names global objects, not a Form | **observed** (one run; same wording as EXP-064 T7) |
| The save wrote the FX_UM extension (persistence) | **unresolved** (requires a later Designer close/reopen and a runtime check) |
| Runtime Details/Add/Find after the change | **unresolved** (runtime check 1 is the next task) |
| Component-level FX_UMCombobox Right-Click Menu blank after Save | **observed** (accessibility, one run; `t4-08`) |

### Open items and next permitted action

1. **Next task (not performed in T4):** runtime check 1 — one runtime FX_Items close and reopen, one right-click on the Unit of Measure combobox, record the menu items verbatim with a screenshot, dismiss as in the baseline. Contingency unload only if Details, Add and Find are absent.
2. Save 2 is not authorized (no no-change OK after Save 1 dirtied the Designer).
3. Classification for all T4 findings: **observed only, NOT replay_verified**; no runtime success or database durability is claimed.

---

## T5 — Runtime check 1: one runtime Form close and one reopen; right-click shows Add, Details, Find, Help; no item chosen; cache contingency NOT invoked (cycle 4)

Task T5 (bounded instruction: runtime check 1 only; review T4; list tabs; select the Web Client tab; verify the runtime FX_Items on dumbbell, UM `EA`, Description `Each`, Save disabled; close the clean runtime Form once; reopen once through Form > Open > Select Form; verify identity and record; right-click the UM combobox once; transcribe the menu; dismiss with Escape once, then one blank-Form click if needed; stop. No contingency unload, no Details/Add/Find, no record change, no runtime Save, no Designer action). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 4, task_message_id `a164d3f3-d521-4d56-add9-fdbc11718795`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Starting state (fresh)

- Tab list (one, before any select): tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client. Tab 1 selected (succeeded). The Designer tab was not selected, touched or read in T5.
- Snapshot `t5-00-runtime-fresh-snapshot-baseline.yml`: Web Client; tabpanel `FX_Items`; record `Unit of Measure (Object 1 of 3)`; Item `dumbbell`; Description `45 pound iron`; Unit of Measure `EA`; Description `Each`; runtime Save `[disabled]`; no dialog. Console line: 7 errors, 3 warnings (not inspected).
- Screenshot `t5-01` (baseline before close): FX_Items heading; dumbbell; `45 pound iron`; cost `45.00`; UM `EA`; Description `Each`; Save greyed; footer `Unit of Measure (Object 1 of 3)`; no menu, no dialog. The Form was clean; the identity was certain; no stop condition.

### Runtime close (ONE)

- One click on the FX_Items Form-tab close control `Close Panel FX_Items` (`f1e101`, native Form-tab close; the same kind of control EXP-069-R2 T10 used on the Designer). No prompt.
- `t5-02` snapshot: no FX_Items tabpanel; Save `[disabled]`; no dialog. **Runtime close: observed.**

### Runtime reopen (ONE)

- Form menu (`f1e10`) opened once; the Form menu item `Open` (`f1e259`) clicked once. The Select Form dialog appeared with one row, `FX_Items` / `FX_Items`, filter `FX_Items` (`t5-03`, `t5-04`); the row was highlighted (selected).
- One click on the dialog's OK (`f1e354`). The dialog closed.
- `t5-05` snapshot: tabpanel `FX_Items` open again; **dumbbell** (grid row 1 and the Item textbox); UM combobox **`EA`**; Description `Each`; Save `[disabled]`; no `dialog` node; footer status `Description (Object 1 of 3)`.
- `t5-06` screenshot: FX_Items heading; dumbbell; `45 pound iron`; cost `45.00`; UM `EA`; Description `Each`; Save greyed. The Description field is **focused with its text selected** (a focus state from reopening; nothing typed).
- **Difference recorded (not a data change):** the reopened Form's focus was on Description (status `Description (Object 1 of 3)`); the baseline's status was `Unit of Measure (Object 1 of 3)`. Record identity (dumbbell, EA, 1 of 3) is the same.

### Runtime right-click (ONE)

- One right-click on the Unit of Measure combobox (`f1e507`, from the fresh `t5-05` snapshot). The combobox text `EA` became selected (focus), as it did in T1. No typing.
- **Menu items, verbatim, in displayed order (four `menuitem` entries; from `find` and `t5-07`):**
  1. `Add...`
  2. `Details...`
  3. `Find...`
  4. `Help`
- **Explicit answer: Details ✔ appears; Add ✔ appears; Find ✔ appears.** The 25-item standard menu of T1 (Refresh, Refresh current, Filter, …, New Workflow, Help) is **not** shown. The menu is the Details/Add/Find menu of the FX_UM extension (`StdDetailsAddFind`) rather than the component-level/standard menu.
- Screenshot `t5-07` (menu visible below the combobox): `Add...`, `Details...`, `Find...`, `Help`; the Form behind it: dumbbell, `EA`, Save greyed. **Proves** the four items on this right-click. **Does not prove** that Details opens the FX_UMs Form (not tested in T5, by design).

### Dismissal (as the T1 baseline)

- ONE Escape press (`browser_press_key`). Result: **the menu was NOT dismissed** (`find` `menuitem "Add..."|"Details..."|"Find..."|"Help"` still returned all four items).
- ONE click on blank Form space at (1200, 700). Result: the menu is gone (`t5-08` snapshot: no `menu`, no `menuitem`; UM `EA`; status `Unit of Measure (Object 1 of 3)`; Save `[disabled]`).
- `t5-09` screenshot: clean Form; dumbbell; `45 pound iron`; cost `45.00`; UM `EA`; Description `Each`; Save greyed; no menu; no dialog. **Proves** the dismissal with no item chosen and the clean state. **Does not prove** persistence.
- **No item was chosen.** Add, Details and Find were not clicked. No record edit; no runtime Save.

### Native responses (verbatim or stated)

- Runtime close: no message text; the Form tab closed (`t5-02`).
- Select Form OK: no message text; the dialog closed and FX_Items reopened on dumbbell (`t5-05`).
- Right-click: no native message; the four-item menu appeared (`t5-07`).
- Escape: no effect on the menu (observed). Blank-Form click: menu dismissed.

### Contingency decision

- Cache-contingency unload (Web Client `Form > Definition > Unload All Global Form Objects`): **NOT invoked.** Its condition ("only if runtime check 1 does not show Details, Add and Find") was **not met**: Details, Add and Find all appear. Unload count **0**.

### Browser action audit (T5, exact counts) — 23 browser calls

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, tab 1 Web Client |
| 2 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 3 | `browser_snapshot` untargeted (`t5-00`) | Runtime FX_Items dumbbell; `EA`; Save disabled |
| 4 | `browser_take_screenshot` `t5-01` | Baseline before close |
| 5 | `browser_click` `f1e101` (Close Panel FX_Items, once) | Form tab closed |
| 6 | `browser_snapshot` untargeted (`t5-02`) | No FX_Items tabpanel; no dialog |
| 7 | `browser_click` `f1e10` (Form menu) | Form menu open |
| 8 | `browser_find` text `Open` | Menu item `f1e259` located |
| 9 | `browser_click` `f1e259` (Form > Open, once) | Select Form dialog opened |
| 10 | `browser_find` text `Select Form` | Dialog located (`f1e306`) |
| 11 | `browser_snapshot` untargeted (`t5-03`) | Select Form: one row `FX_Items`/`FX_Items`; OK `f1e354` |
| 12 | `browser_take_screenshot` `t5-04` | Select Form before OK; row highlighted |
| 13 | `browser_click` `f1e354` (OK, once) | Dialog closed; FX_Items reopened |
| 14 | `browser_snapshot` untargeted (`t5-05`) | FX_Items; dumbbell; `EA`; Save disabled; no dialog |
| 15 | `browser_take_screenshot` `t5-06` | Reopened Form before right-click |
| 16 | `browser_click` `f1e507` (UM combobox, RIGHT, once) | Menu opened (**runtime right-click 1 in T5**) |
| 17 | `browser_find` regex `menuitem\|menu "` | Four items read |
| 18 | `browser_take_screenshot` `t5-07` | Four-item menu visible |
| 19 | `browser_press_key` Escape (once) | Menu NOT dismissed |
| 20 | `browser_find` regex (menu items) | Menu still present |
| 21 | `browser_mouse_click_xy` (1200, 700), once | Menu dismissed; no item chosen |
| 22 | `browser_snapshot` untargeted (`t5-08`) | No menu; Save disabled; UM `EA` |
| 23 | `browser_take_screenshot` `t5-09` | Clean Form after dismissal |

**T5 counts (exact):** browser calls **23**. Tab lists **1**; tab selects **1** (succeeded); snapshots **5** (`t5-00`, `t5-02`, `t5-03`, `t5-05`, `t5-08`); finds **4** (`Open`; `Select Form`; menu items ×2); screenshots **5** (`t5-01`, `t5-04`, `t5-06`, `t5-07`, `t5-09`); element clicks **5** (Close Panel ×1; Form menu ×1; Open item ×1; Select Form OK ×1; UM right-click ×1); key presses **1** (Escape); coordinate clicks **1** (blank Form); mouse move 0; mouse wheel 0; typed text **0**; drags **0**; navigations **0**; JavaScript, evaluate, console or network inspection **0**.
- Browser errors or timeouts: **0**. Ref-not-found: **0**. Fresh-snapshot recovery allowance used: **0**. Corrected visible inspections: **0**.
- Parallel actions: **none**. Every browser action was issued alone and awaited.

### Cumulative browser audit (T1 + T2 + T3 + T4 + T5), exact

| Task | Browser calls |
| --- | --- |
| T1 | 15 |
| T2 | 21 |
| T3 | 14 |
| T4 | 20 |
| T5 | 23 |
| **Total** | **93** |

Cumulative detail (T1–T5), reconciled by category:

| Category | T1 | T2 | T3 | T4 | T5 | Total |
| --- | --- | --- | --- | --- | --- | --- |
| Tab lists | 1 | 1 | 1 | 1 | 1 | **5** |
| Tab selects (all succeeded) | 2 | 1 | 1 | 1 | 1 | **6** |
| Snapshots (untargeted) | 2 | 5 | 3 | 5 | 5 | **20** |
| Finds | 3 | 1 | 1 | 2 | 4 | **11** |
| Screenshots (all succeeded) | 4 | 6 | 4 | 4 | 5 | **23** |
| Element clicks (incl. right-clicks) | 1 | 4 | 3 | 5 | 5 | **18** |
| Coordinate clicks (blank-Form dismissals) | 1 | 0 | 0 | 0 | 1 | **2** |
| Key presses (Escape ×2, Tab ×1) | 1 | 0 | 1 | 0 | 1 | **3** |
| Mouse move | 0 | 1 | 0 | 1 | 0 | **2** |
| Mouse wheel (view-only) | 0 | 2 | 0 | 1 | 0 | **3** |
| **Task total** | **15** | **21** | **14** | **20** | **23** | **93** |

- Right-clicks: **2** (T1 baseline, 25 items; T5 runtime, 4 items). Typed text **0**. Drags **0**. Navigations **0**. JavaScript, evaluate, console or network inspection **0**. Errors or timeouts **0**.
- Check: 5 + 6 + 20 + 11 + 23 + 18 + 2 + 3 + 2 + 3 = **93**.

### Mutation and lifecycle counts (cumulative T1–T5)

| Item | T5 | Cumulative T1–T5 |
| --- | --- | --- |
| Extension creations | 0 | **0** |
| Extension field changes (FX_UM Right-Click Menu only) | 0 | **1** (`StdDetailsAddFind`, T3) |
| Extension ellipsis clicks | 0 | **0** |
| Inline-editor OK clicks | 0 | **1** (T2, no change) |
| Global Objects OK clicks | 0 | **1** (T3) |
| Global Objects Cancel clicks | 0 | **1** (T4, read-only close) |
| Parent-dialog OK clicks | 0 | **0** |
| Designer Saves | 0 | **1** (Save 1, T4) |
| Save 2 | 0 | **0** |
| Designer close / reopen | 0 / 0 | **0 / 0** |
| Runtime close / reopen | **1 / 1** | **1 / 1** |
| Runtime right-clicks | **1** | **2** (T1 baseline, 25 items; T5, 4 items) |
| Details / Add / Find chosen | 0 / 0 / 0 | **0 / 0 / 0** |
| FX_UMs Form opened | 0 | **0** |
| Runtime record edits / runtime Save | 0 / 0 | **0 / 0** |
| Web Client unloads / Designer unloads | 0 / 0 | **0 / 0** |
| Component or property changes | 0 | **0** |
| Other extension changes | 0 | **0** |
| Re-logins | 0 | **0** |

### Inheritance observation (T1 negative → T5 positive)

- **Negative (T1, before the extension change):** the runtime menu was the 25 standard items with no Details, Add or Find (`t1-04`). At that time the extension Right-Click Menu was blank and the component-level Right-Click Menu of FX_UMCombobox was blank.
- **Positive (T5, after Save 1):** the runtime menu shows Add, Details, Find and Help (`t5-07`). The component-level Right-Click Menu of FX_UMCombobox is **still blank** (`t4-08`, and the T4 readback), and no component value was set or cleared in this run.
- **Observed interpretation (not a causal claim):** in this run the extension's `StdDetailsAddFind` value is the one shown at runtime, with no component-level override present. The tutorial's inheritance lesson (a component-level setting can override an extension) was **not** reproduced because the component-level value was already blank before the extension change (cleared by EXP-069-R2). Whether the component level would override the extension if it were set again was **not tested** (out of scope).

### Designer and runtime state at the end of T5

- **Runtime (tab 1, selected):** FX_Items, reopened once; dumbbell; UM `EA`; Description `Each`; record 1 of 3; **clean** (Save disabled); no menu; no dialog.
- **Designer (tab 0):** not selected, touched or read in T5. Its last state (end of T4): FX_Items, User scope, clean (Save disabled after Save 1), no dialog open.

### Worker-written file inventory (T5)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: T5 status line and this T5 section).
- `evidence/EXP-069-R4/t5-00-runtime-fresh-snapshot-baseline.yml`
- `evidence/EXP-069-R4/t5-01-runtime-baseline-before-close.png`
- `evidence/EXP-069-R4/t5-02-after-runtime-close-snapshot.yml`
- `evidence/EXP-069-R4/t5-03-select-form-dialog-snapshot.yml`
- `evidence/EXP-069-R4/t5-04-select-form-dialog-before-ok.png`
- `evidence/EXP-069-R4/t5-05-after-reopen-runtime-snapshot.yml`
- `evidence/EXP-069-R4/t5-06-runtime-reopened-before-right-click.png`
- `evidence/EXP-069-R4/t5-07-runtime-check-1-menu-visible.png`
- `evidence/EXP-069-R4/t5-08-after-dismissal-snapshot.yml`
- `evidence/EXP-069-R4/t5-09-after-dismissal-clean-form.png`

**Cumulative worker-written repository files (T1–T5): 44** (the record 1; T1 evidence 6; T2 evidence 11; T3 evidence 7; T4 evidence 9; T5 evidence 10). Tool logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git.

### Screenshot and snapshot evidence (T5)

- `t5-01` (baseline before close): FX_Items; dumbbell; `45 pound iron`; cost `45.00`; UM `EA`; Description `Each`; Save greyed; status `Unit of Measure (Object 1 of 3)`; no menu. **Proves** the clean runtime baseline and identity before the close. **Does not prove** the database state.
- `t5-04` (Select Form before OK): one row `FX_Items`/`FX_Items` highlighted; filter `FX_Items`; OK/Cancel/Help. **Proves** the reopen dialog identity before OK. **Does not prove** the Form opened.
- `t5-06` (reopened, before right-click): FX_Items; dumbbell; `EA`; Description `Each`; Save greyed; Description field focused (text selected by focus). **Proves** the reopened identity, record and clean state. **Does not prove** persistence across sessions.
- `t5-07` (runtime check 1 menu): context menu under the UM combobox with `Add...`, `Details...`, `Find...`, `Help`; record dumbbell; UM `EA`; Save greyed. **Proves** the four items on this right-click. **Does not prove** the Details drill-down (not run).
- `t5-09` (after blank-Form dismissal): menu gone; dumbbell; `EA`; `Unit of Measure (Object 1 of 3)`; Save greyed; no dialog. **Proves** dismissal with no item chosen and a clean Form. **Does not prove** persistence.

### Acceptance (T5)

| AC | T5 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed in T1–T2 (not repeated in T5). | T1 `t1-00`, `t1-01`; T2 `t2-00`, `t2-01` | — |
| AC-2 | Met as observed (T2–T3). | T2 `t2-01`, `t2-03`; T3 `t3-02`, `t3-04`, `t3-06` | — |
| AC-3 | **Runtime check 1 DONE** after one runtime close/reopen; the menu items recorded (`t5-07`). Pre-Save readback and Save 1 done in T4. | `t4-02`, `t4-04`, `t4-07`; `t5-05`, `t5-07`, `t5-09` | Only one runtime run; no cross-session durability claimed. |
| AC-4 | **Supported**: component-level Right-Click Menu still blank; the contingency unload NOT invoked (condition not met); unload count 0. | `t4-08`; `t5-07` (condition not met) | — |
| AC-5 | **Menu PASSED** (Details, Add and Find appear at runtime, `t5-07`). **Drill-down NOT run** (next task: Details on dumbbell, FX_UMs on EA). | `t5-07`, `t5-09` | Drill-down not yet performed. |
| AC-6 | **NOT RUN** (Designer close/reopen and readback are a later task). | — | — |
| AC-7 (T5 portion) | **Supported**: no other change; no Add, Details or Find chosen; no unload; the menu dismissed; no dialog open (`t5-08`); runtime clean. | `t5-08`, `t5-09`; audit | — |
| AC-8 | T5 portion complete. | Audit counts above | — |

### Knowledge state (T5)

| Finding | State |
| --- | --- |
| After one runtime Form close and reopen (Form > Open > Select Form), the Form is FX_Items on dumbbell, UM `EA`, Description `Each` | **observed** (one run; `t5-05`, `t5-06`) |
| The reopened Form's focus is on Description (status), not the UM combobox, unlike the T1 baseline | **observed** (one run; `t5-06`) |
| The UM combobox right-click shows `Add...`, `Details...`, `Find...`, `Help` (four items, not the 25-item standard menu) | **observed** (one run; `t5-07`) |
| Details, Add and Find all appear in the runtime menu | **observed** (one run; `t5-07`) |
| Escape does not dismiss the runtime menu; a blank-Form click does | **observed** (one run; consistent with T1; `t5-08`) |
| Component-level FX_UMCombobox Right-Click Menu remains blank while the extension menu shows | **observed** (accessibility, `t4-08`; one run) |
| The extension's `StdDetailsAddFind` value is the source of the runtime menu | **unresolved** (not isolated; no component override was present, so this is the observed explanation, not a proof) |
| The save wrote the extension to the database / persists across sessions | **unresolved** (close/reopen of the runtime Form in one session only; no Designer close/reopen in T5; no cross-session check) |
| Details opens the FX_UMs Form on EA (Each) | **unresolved** (drill-down not run) |
| Runtime right-click result after the cache contingency | **not applicable** (contingency not invoked) |

### Open items and next permitted action

1. **Next task (not performed in T5):** Details drill-down on dumbbell (UM `EA`): choose `Details...` once from the right-click menu; verify the FX_UMs Form opens on the EA record with description `Each`; close that Form once (clean). Never choose Add or Find.
2. **Then (later task):** Designer Form close and one reopen through the toolbar Open; one Edit > Property Class Extension readback of the four FX_UM settings; Cancel; verify the component-level Right-Click Menu blank (AC-6).
3. The contingency unload is **not** needed (Details, Add and Find are present).
4. Save 2 is **not** authorized (no no-change OK has dirtied the Designer).
5. Classification for all T5 findings: **observed only, NOT replay_verified**; no database durability and no cross-session durability claimed.

---

## T6 — Details drill-down: menu shows Add/Details/Find/Help; Details... chosen once; FX_UMs opens on EA/Each; FX_UMs closed clean; FX_Items back on dumbbell (cycle 5)

Task T6 (bounded instruction: Details drill-down only; list tabs; select the Web Client tab; confirm the clean runtime FX_Items on dumbbell, UM `EA`, Description `Each`, Save disabled, no menu; right-click the UM combobox once; capture the open menu; choose `Details...` exactly once; verify the FX_UMs Form, its EA record and Description `Each`; close FX_UMs once through its panel-close control; verify FX_Items returns clean. No Add or Find, no FX_Items reopen, no unload, no Designer action). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 5, task_message_id `bc8350bc-17cf-455c-8a87-8069705b5ee4`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Review before browser interaction

- The T5 decisive evidence and this record's T5 section were reviewed (menu items `Add...`, `Details...`, `Find...`, `Help`; runtime clean on dumbbell, `EA`).

### Starting state (fresh)

- Tab list (one, before any select): tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client. Tab 1 selected (succeeded). The Designer tab was not selected, touched or read in T6.
- Snapshot `t6-00-runtime-fresh-snapshot-baseline.yml`: tabpanel `FX_Items`; dumbbell; UM combobox `EA`; Description `Each` (UM description textbox); Save `[disabled]`; record `Unit of Measure (Object 1 of 3)`; no menu, no dialog.
- Screenshot `t6-01` (baseline before right-click): FX_Items heading; dumbbell; `45 pound iron`; cost `45.00`; UM `EA`; Description `Each`; Save greyed; no menu. **Clean.** No stop condition.

### Right-click (ONE) and menu

- ONE right-click on the UM combobox (`f1e245`, from the fresh `t6-00` snapshot).
- Menu items, verbatim, displayed order (`find` and `t6-02`): **`Add...`, `Details...`, `Find...`, `Help`.** Details ✔ appears; Add ✔ appears; Find ✔ appears. The 25-item standard menu is not shown.
- Screenshot `t6-02` (menu open): the four items below the UM combobox; dumbbell; `EA`; Save greyed behind. **Proves** the four items on this right-click.

### Details... (ONE)

- ONE click on `Details...` (`f1e262`, from the current menu). No Add or Find was clicked.
- Immediate result: the page URL changed from `favoriteContext=FX_Items` to `favoriteContext=FX_UMs`; a second Form tab `FX_UMs` appeared beside `FX_Items`, with FX_UMs selected.
- Fresh snapshot `t6-03` and screenshot `t6-04` (FX_UMs Form):
  - Form tab heading: **`FX_UMs`** (selected; its own `Close Panel FX_UMs` control).
  - Grid row: one row, `EA` / `Each` (row number 1).
  - Field **Unit of Measure: `EA`** (grey, read-only style).
  - Field **Description: `Each`**; the Description field carries focus with its text selected (a focus state from opening the Form; nothing was typed).
  - Status line: **`Description (Object 1 of 1)`**.
  - Toolbar Save **`[disabled]`**.
  - No dialog node; no menu open.
- **Identity result:** the FX_UMs Form opened on the **EA** record with description **Each**, as the brief requires. The Form is FX_UMs (not FX_Items, not another Form).

### Close the FX_UMs Form (ONE)

- ONE click on the FX_UMs Form's native panel-close control `Close Panel FX_UMs` (`f1e272`). No edit, no save, no typing.
- Fresh snapshot `t6-05`: URL `favoriteContext=FX_Items`; the selected tab is **FX_Items** (`tab [selected]`, heading `FX_Items`); status `Unit of Measure (Object 1 of 3)`; Save `[disabled]`; no `dialog`; no `menu`. (The FX_Items panel is exposed as `aria-hidden` in the accessibility snapshot, so its values were confirmed by the screenshot below, not by the snapshot text.)
- Screenshot `t6-06`: FX_Items heading; dumbbell; `45 pound iron`; cost `45.00`; UM **`EA`**; Description **`Each`**; Save greyed; status `Unit of Measure (Object 1 of 3)`; **no menu; no dialog**. **Proves** the return to FX_Items on dumbbell, UM `EA`, runtime Save disabled and no open menu or dialog. **Does not prove** persistence.

### Native responses (verbatim or stated)

- Details...: no message text; the FX_UMs Form opened in a new tab on the EA record (`t6-03`, `t6-04`).
- Close Panel FX_UMs: no message text; the tab closed with no prompt; FX_Items returned (`t6-05`, `t6-06`).
- No error text, alert or unsaved-change prompt appeared at any step.

### Reconciliation of the T5 controller-reported documentation Edit error (no rewrite of earlier records)

- In T5 the controller reported an error for a **documentation** edit to this record. The worker's zero-error statement referred to **browser** errors and timeouts only.
- The error corresponds to one `Edit` call on this experiment record, in the T5 cleanup batch, whose `old_string` and `new_string` were identical (the T5 table row for `t5-06`). The file tool returned `No changes to make: old_string and new_string are exactly the same.` The tool reports that no change was made by that call. The other `Edit` calls in that batch (the reconciled cumulative table, the `t5-07` wording) returned success. The worker did not read the file back after the no-op call; the claim of no change rests on the tool's own message.
- This was a file-tool call, not a browser action: it is **not** counted in the browser audit, and it is not a browser failure. The browser error count for T5 remains **0**. Earlier record sections were not rewritten to address it.

### Browser action audit (T6, exact counts) — 13 calls

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, tab 1 Web Client |
| 2 | `browser_tabs` select 1 | Succeeded (Web Client) |
| 3 | `browser_snapshot` untargeted (`t6-00`) | Runtime FX_Items dumbbell; `EA`; Save disabled; no menu |
| 4 | `browser_take_screenshot` `t6-01` | Clean baseline before right-click |
| 5 | `browser_click` `f1e245` (UM combobox, RIGHT, once) | Menu opened (**runtime right-click 3 cumulative**) |
| 6 | `browser_find` regex `menuitem` | Four items read: Add..., Details..., Find..., Help |
| 7 | `browser_take_screenshot` `t6-02` | Menu open with four items |
| 8 | `browser_click` `f1e262` (`Details...`, once) | FX_UMs Form opened in a new tab |
| 9 | `browser_snapshot` untargeted (`t6-03`) | FX_UMs tab selected; EA; Each; Object 1 of 1; Save disabled |
| 10 | `browser_take_screenshot` `t6-04` | FX_UMs drill-down visible |
| 11 | `browser_click` `f1e272` (`Close Panel FX_UMs`, once) | FX_UMs closed; FX_Items selected |
| 12 | `browser_snapshot` untargeted (`t6-05`) | FX_Items selected; no dialog; no menu; Save disabled |
| 13 | `browser_take_screenshot` `t6-06` | FX_Items on dumbbell, EA, Each; clean |

**T6 counts (exact):** browser calls **13**. Tab lists **1**; tab selects **1** (succeeded); snapshots **3** (`t6-00`, `t6-03`, `t6-05`); finds **1**; screenshots **4** (`t6-01`, `t6-02`, `t6-04`, `t6-06`; all succeeded); element clicks **3** (UM right-click ×1; `Details...` ×1; `Close Panel FX_UMs` ×1); key presses **0**; coordinate clicks **0**; mouse wheel **0**; typed text **0**; navigations **0**; JavaScript, evaluate, console or network inspection **0**.
- Check: 1 + 1 + 3 + 1 + 4 + 3 = **13**.
- Browser errors or timeouts: **0**. Ref-not-found: **0**. Fresh-snapshot recovery allowance used: **0**. Corrected visible inspections: **0**. Parallel actions: **none**.

### Cumulative browser audit (T1 + T2 + T3 + T4 + T5 + T6), exact

| Task | Browser calls |
| --- | --- |
| T1 | 15 |
| T2 | 21 |
| T3 | 14 |
| T4 | 20 |
| T5 | 23 |
| T6 | 13 |
| **Total** | **106** |

Cumulative by category (T1–T6): tab lists **6**; tab selects **7** (all succeeded); snapshots **23**; finds **12**; screenshots **27**; element clicks **21** (includes right-clicks); coordinate clicks **2**; key presses **3**; mouse moves **2**; mouse wheel **3**. Check: 6 + 7 + 23 + 12 + 27 + 21 + 2 + 3 + 2 + 3 = **106**. Right-clicks cumulative: **3** (T1 baseline; T5 runtime; T6 runtime). Typed text **0**. Errors or timeouts **0**.

### Mutation and lifecycle audit (T6, and cumulative T1–T6)

| Item | T6 | Cumulative T1–T6 |
| --- | --- | --- |
| Extension creations | 0 | **0** |
| Extension field changes (FX_UM Right-Click Menu only) | 0 | **1** (`StdDetailsAddFind`, T3) |
| Extension ellipsis clicks | 0 | **0** |
| Inline-editor OK clicks | 0 | **1** (T2, no change) |
| Global Objects OK clicks | 0 | **1** (T3) |
| Global Objects Cancel clicks | 0 | **1** (T4, read-only) |
| Parent-dialog OK clicks | 0 | **0** |
| Designer Saves | 0 | **1** (Save 1, T4) |
| Save 2 | 0 | **0** |
| Designer close / reopen | 0 / 0 | **0 / 0** |
| Runtime close / reopen | 0 / 0 | **1 / 1** (T5) |
| Runtime right-clicks | **1** | **3** (T1 baseline, 25 items; T5 and T6, four items each) |
| Details chosen (drill-down) | **1** | **1** |
| Add chosen | 0 | **0** |
| Find chosen | 0 | **0** |
| FX_UMs Form opened | **1** | **1** |
| FX_UMs Form closed clean | **1** | **1** |
| FX_UMs record edits / saves | 0 / 0 | **0 / 0** |
| Runtime record edits / runtime Save | 0 / 0 | **0 / 0** |
| Web Client unloads / Designer unloads | 0 / 0 | **0 / 0** (the contingency was not needed) |
| Component or property changes | 0 | **0** |
| Other extension, class, IDO or string changes | 0 | **0** |
| Re-logins | 0 | **0** |

### Designer state (not touched in T6)

- The Designer tab (tab 0) was not selected, read or acted on in T6. Its last state (end of T4): FX_Items, User scope, clean after Save 1. No dialog was open at that time.

### Worker-written file inventory (T6)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: T6 status line and this T6 section).
- `evidence/EXP-069-R4/t6-00-runtime-fresh-snapshot-baseline.yml`
- `evidence/EXP-069-R4/t6-01-runtime-baseline-before-right-click.png`
- `evidence/EXP-069-R4/t6-02-runtime-menu-open-add-details-find-help.png`
- `evidence/EXP-069-R4/t6-03-after-details-click-snapshot.yml`
- `evidence/EXP-069-R4/t6-04-fx-ums-drill-down-ea-each.png`
- `evidence/EXP-069-R4/t6-05-after-fx-ums-close-snapshot.yml`
- `evidence/EXP-069-R4/t6-06-after-fx-ums-close-fx-items-dumbbell-ea.png`

**Cumulative worker-written repository files (T1–T6): 51** (the record 1; T1 evidence 6; T2 evidence 11; T3 evidence 7; T4 evidence 9; T5 evidence 10; T6 evidence 7). Tool logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git.

### Screenshot and snapshot evidence (T6)

- `t6-01` (baseline before right-click): FX_Items; dumbbell; UM `EA`; Description `Each`; Save greyed; no menu. **Proves** the clean runtime baseline. **Does not prove** the database state.
- `t6-02` (menu open): `Add...`, `Details...`, `Find...`, `Help` under the UM combobox; dumbbell; `EA`. **Proves** the four items on this right-click. **Does not prove** the menu definition beyond this run.
- `t6-04` (FX_UMs drill-down): FX_UMs tab selected beside FX_Items; one row `EA` / `Each`; Unit of Measure `EA`; Description `Each` (focused, text selected); status `Description (Object 1 of 1)`; Save greyed. **Proves** the FX_UMs Form, its EA record and its description `Each`. **Does not prove** that the Form was edited (none was) or anything about FX_UMs data beyond this record.
- `t6-06` (after FX_UMs close): FX_Items heading; dumbbell; UM `EA`; Description `Each`; Save greyed; no menu; no dialog. **Proves** the clean return to FX_Items. **Does not prove** persistence.
- `t6-03`, `t6-05` (YML): the accessibility states at the same points (FX_UMs selected; FX_Items selected with its panel `aria-hidden`).

### Acceptance (T6)

| AC | T6 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed in T1–T2 (not repeated). | T1 `t1-00`, `t1-01`; T2 `t2-00`, `t2-01` | — |
| AC-2 | Met as observed (T2–T3). | T2 `t2-01`, `t2-03`; T3 `t3-02`, `t3-04`, `t3-06` | — |
| AC-3 | Pre-Save readback and Save 1 done (T4); runtime check 1 done (T5). | `t4-02`, `t4-04`, `t4-07`; `t5-07` | Single runtime run. |
| AC-4 | **Supported**: component-level Right-Click Menu still blank (T4 `t4-08`; not changed in T6); unload 0 (not needed). | `t4-08` | — |
| AC-5 | **PASSED as observed.** Menu appears at runtime (`t6-02`, and T5 `t5-07`); Details on dumbbell opened the FX_UMs Form on **EA** with description **Each** (`t6-03`, `t6-04`); FX_UMs closed clean (`t6-05`, `t6-06`). | `t6-02`, `t6-04`, `t6-06` | One drill-down run. |
| AC-6 | **NOT RUN** (the Designer close/reopen and the Edit > Property Class Extension readback are the next task). | — | — |
| AC-7 (T6 portion) | **Supported**: no Add or Find chosen; no record edit; no runtime Save; no unload; no Designer action; no dialog or menu left open (`t6-05`, `t6-06`). | `t6-05`, `t6-06`; audit | — |
| AC-8 | T6 portion complete. | Audit counts above | — |

### Inheritance observation (cumulative, observed only)

- **Negative (T1):** 25 standard items; no Details, Add or Find (before the extension change).
- **Positive (T5 and T6):** Add, Details, Find, Help after the Save and a runtime close/reopen; the component-level FX_UMCombobox Right-Click Menu remained blank throughout (T4 `t4-08`). No component override was present, so the extension value is the observed source. **Not causally isolated** (the component level was not set and then cleared again in this run).

### Knowledge state (T6)

| Finding | State |
| --- | --- |
| The UM combobox right-click (dumbbell, EA) shows `Add...`, `Details...`, `Find...`, `Help` in this run | **observed** (one run; `t6-02`) |
| Choosing `Details...` once opens the FX_UMs Form on the EA record with description `Each` | **observed** (one run; `t6-03`, `t6-04`) |
| The FX_UMs Form closes cleanly with its panel-close control and returns to FX_Items on dumbbell, EA | **observed** (one run; `t6-05`, `t6-06`) |
| The FX_UMs Form's Description field receives focus on open (text selected); nothing typed | **observed** (one run; `t6-04`) |
| The menu items are the extension's `StdDetailsAddFind` menu, not a component-level menu | **unresolved** (not isolated; component-level blank was observed, not tested by a change) |
| The saved extension persists across sessions or in the database | **unresolved** (only a same-session runtime close/reopen; a Designer close/reopen is the next task) |
| Add and Find work | **unresolved** (not chosen, by design) |

### Open items and next permitted action

1. **Next task (not performed in T6):** Designer Form close and one reopen through the toolbar Open; one Edit > Property Class Extension readback of the four FX_UM settings; Cancel; verify the component-level FX_UMCombobox Right-Click Menu blank (AC-6). Save 2 only if a no-change OK dirties the Designer.
2. Add and Find were not chosen and remain untested.
3. Classification for all T6 findings: **observed only, NOT replay_verified**; no cross-session persistence or causal-isolation claim.

---

## T7 — Designer close and one reopen; extension readback (four settings); component-level Right-Click Menu blank; Global Objects closed with Cancel; Save 2 not needed (cycle 6)

Task T7 (bounded instruction: Designer close/reopen recovery and AC-6 readback only; list tabs; select the Designer tab; confirm FX_Items, User scope, Save disabled, no modal or active editor; close the clean Form once through its native close control; reopen once through the toolbar Open button and Select Form; verify identity and scope; inspect FX_UMCombobox without modifying it; open Edit > Property Class Extension once; select FX_UM; read the four settings; close with Cancel once; no edit, no dropdown, no ellipsis; no Save unless a no-change OK dirtied the Designer; no runtime touch; no unload). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 6, task_message_id `3b476dff-d3f3-4bb2-a230-162a76cf5fe0`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Review before browser interaction

- The T6 section, the T5 decisive evidence and the T4 Save evidence (`t4-07`, `t4-08`) were reviewed from this record. The runtime was not touched in T7.

### Pre-close Designer state (fresh)

- Tab list (one, before any select): tab 0 Designer (`MGForm=FX_Items`, current); tab 1 Web Client. Tab 0 selected (succeeded).
- Snapshot `t7-00`: Designer heading `FX_Items`; footer `ScopeType: User / ScopeName: <operator user>`; toolbar **Save `[disabled]`**; Undo `[disabled]`; selected tab `FX_Items`; no `dialog` node.
- Screenshot `t7-01`: FX_Items heading; FX_UMCombobox selected; Inheritance rows `FX_UM` / `FX_UM`; Components row `FX_UMCombobox ComboBox object.FX_UM 1 12`; Save and Undo greyed; footer User. **Clean.** No stop condition.

### Designer close (ONE)

- ONE click on the FX_Items Form-tab close control (`closable FX_Items`, `e247`), the native Form close.
- **Native response: no message text, no prompt, no dialog.** The Form closed.
- `t7-02` snapshot: no FX_Items heading; Save `[disabled]`; footer User. `t7-03` screenshot: empty canvas; Properties empty; footer `ScopeType: User`. **Designer close: observed.**

### Designer reopen (ONE)

- ONE click on the toolbar Open button (`e13`, tooltip `Open`).
- `t7-04` snapshot and `t7-05` screenshot: the Select Form dialog with one row `FX_Items` / `FX_Items`, highlighted; filter `FX_Items`; OK, Cancel, Help.
- ONE click on the dialog's OK (`e1905`). The dialog closed.
- `t7-06` snapshot: FX_Items tab selected (heading `FX_Items`, `closable FX_Items`); Save `[disabled]`; Undo `[disabled]`; footer **`ScopeType: User / ScopeName: <operator user>`**; no `dialog` node.
- `t7-07` screenshot: Form properties Name `FX_Items`; Version `User version for us…`; Device Type `Default`; Form Type `Normal`; Is Master `True`; toolbar Save greyed; footer User. **Reopened identity and User scope: observed.**

### FX_UMCombobox component inspection (read-only; no value changed)

- The Details panel was expanded once (its `Expand Panel` control, `e2017`, view state). The Components tab was selected (`e2136`, view state). The Components filter (`e2207`) was set to `FX_UMCombobox` (a view filter, the same as EXP-069-R2 T10; not a Form change). The Pane (01) tree item was selected (`e2297`); the keyboard ArrowRight press then moved **keyboard focus into the Type cell of that row** (no value change, no typing). The grid's own `Expand` control (`e2209`) expanded the panes. The FX_UMCombobox row (`e2800`) was selected with one click (selection only).
- Properties header: `FX_UMCombobox (EnhancedCombo)`; Name `FX_UMCombobox`; Caption `C(FX_UMStatic)`; Type `ComboBox`; From Device Master `True`.
- **Data Source (grid row and accessibility, `t7-14`, `t7-15`):** Binding `object.FX_UM` (`t7-15` grid row `FX_UMCombobox ComboBox object.FX_UM 1 12`).
- **Inheritance (accessibility, `t7-14`, lines ~1178–1191):** View Attributes Inherited From Property **`FX_UM`**; Edit Property Class Extension For Property Class **`FX_UM`**. (These two rows are below the visible area of the screenshots; the accessibility readback is the evidence.)
- **Behavior → Add/Details Form, Find Form, Property (component-level): blank** (`t7-15`).
- **Behavior → Right-Click Menu (component-level): BLANK.** The value gridcell has no text; the row shows only its dropdown arrow and ellipsis (`t7-16`, accessibility `t7-14` line ~910–914). **Not changed.**

### Edit > Property Class Extension (ONE open) and FX_UM readback (no edit)

- ONE click on the Designer top-menu `Edit` (`e5`); ONE click on `Property Class Extension` (`e3681`). The Global Objects dialog opened (`t7-17`: dialog with OK, Cancel, Help; Property Class Extensions list including FX_UM).
- ONE click on the FX_UM row (`e3921`): selection only. No value, no dropdown, no ellipsis, no New, no +, no copy, no trash.
- **Readback (accessibility `t7-18`; screenshot `t7-19`):**

| Field | Readback |
| --- | --- |
| Name | `FX_UM` |
| Add/Details Form | **`FX_UMs`** |
| Find Form | **`FX_UMs`** |
| Property | **`FX_UM`** |
| Right-Click Menu | **`StdDetailsAddFind`** |

- Extension identity: Name `FX_UM` under Design; Version `User version for user <operator>` (User scope; not copied).
- `t7-19` shows Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM` and Right-Click Menu `StdDetailsAddFind`, with FX_UM highlighted in the list. Save greyed behind (`t7-20`).

### Close the read-only dialog (ONE Cancel)

- ONE click on the dialog's **Cancel** (`e4013`). Native response: no message; the dialog closed.
- `t7-20` snapshot: no `dialog` node; Save `[disabled]`; Undo `[disabled]`; heading `FX_Items`; footer User. `t7-21` screenshot: FX_Items with Properties showing FX_UMCombobox (component Behavior, Right-Click Menu row blank with dropdown arrow only); no dialog; Save greyed.
- **The Designer stayed clean, so no no-change OK was needed and Save 2 was NOT performed.** (Cancel was available; the OK fallback was not used.)

### Browser action audit (T7, exact counts) — 47 calls

| # | Call | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list | 2 tabs; tab 0 Designer, tab 1 Web Client |
| 2 | `browser_tabs` select 0 | Succeeded |
| 3 | `browser_snapshot` `t7-00` | Designer FX_Items; Save disabled; no dialog |
| 4 | `browser_take_screenshot` `t7-01` | Clean pre-close Designer |
| 5 | `browser_click` `e247` (Form-tab close, once) | Form closed; no response text |
| 6 | `browser_snapshot` `t7-02` | No FX_Items heading; Save disabled |
| 7 | `browser_take_screenshot` `t7-03` | Empty canvas; no dialog |
| 8 | `browser_click` `e13` (toolbar Open, once) | Select Form dialog opened |
| 9 | `browser_find` "Select Form" | Dialog located |
| 10 | `browser_snapshot` `t7-04` | One row FX_Items; OK `e1905` |
| 11 | `browser_take_screenshot` `t7-05` | Select Form before OK |
| 12 | `browser_click` `e1905` (OK, once) | Dialog closed; FX_Items reopened |
| 13 | `browser_snapshot` `t7-06` | FX_Items; User scope; Save disabled; no dialog |
| 14 | `browser_take_screenshot` `t7-07` | Reopened Form properties; User scope |
| 15 | `browser_click` `e2017` (Expand Details panel; view) | Details panel expanded |
| 16 | `browser_snapshot` `t7-08` | Collections tab active; Components tab `e2136` |
| 17 | `browser_click` `e2136` (Components tab; view) | Components tab active |
| 18 | `browser_snapshot` `t7-09` | Filter textbox `e2207` located |
| 19 | `browser_type` `e2207` = `FX_UMCombobox` (view filter) | Filter set |
| 20 | `browser_snapshot` `t7-10` | Panes shown collapsed; no row yet |
| 21 | `browser_take_screenshot` `t7-11` | Filter applied; Pane (00), Pane (01) collapsed |
| 22 | `browser_find` "Pane (01)" | Tree item `e2297` located |
| 23 | `browser_click` `e2297` (Pane (01) item; selection) | Pane (01) selected |
| 24 | `browser_snapshot` `t7-12` | Pane (01) selected, not expanded |
| 25 | `browser_press_key` ArrowRight (once) | **Keyboard focus moved to the Type cell of the Pane (01) row; no value change** |
| 26 | `browser_take_screenshot` `t7-13` | Focus on the Type cell; Pane (01) not expanded |
| 27 | `browser_find` "Expand" | Grid `Expand` control `e2209` located |
| 28 | `browser_click` `e2209` (grid Expand; view) | Panes expanded; FX_UMCombobox row shown |
| 29 | `browser_find` "FX_UMCombobox" | Row `e2800` located |
| 30 | `browser_click` `e2800` (row selection only) | FX_UMCombobox selected; Properties header |
| 31 | `browser_snapshot` `t7-14` | Component readback: Data Source, Inheritance, Right-Click Menu blank |
| 32 | `browser_take_screenshot` `t7-15` | Component Behavior (Add/Details, Find, Property blank) |
| 33 | `browser_mouse_move_xy` (1700, 600) | Pointer over Properties pane (view) |
| 34 | `browser_mouse_wheel` (0, 300) | Properties pane scrolled (view) |
| 35 | `browser_take_screenshot` `t7-16` | Right-Click Menu row blank (dropdown arrow only) |
| 36 | `browser_click` `e5` (Designer Edit) | Edit menu open |
| 37 | `browser_find` "Property Class Extension" | Menu item `e3681` located |
| 38 | `browser_click` `e3681` (Property Class Extension, once) | Global Objects dialog opened |
| 39 | `browser_snapshot` `t7-17` | Dialog layout; OK, Cancel, Help; FX_UM in list |
| 40 | `browser_click` `e3921` (FX_UM row; selection only) | FX_UM selected |
| 41 | `browser_snapshot` `t7-18` | Four settings read in accessibility |
| 42 | `browser_mouse_move_xy` (1150, 500) | Pointer over the Properties pane (view) |
| 43 | `browser_mouse_wheel` (0, 200) | Properties pane scrolled (view) |
| 44 | `browser_take_screenshot` `t7-19` | Four settings visible |
| 45 | `browser_click` `e4013` (Cancel, once) | Dialog closed; no edit |
| 46 | `browser_snapshot` `t7-20` | No dialog; Save disabled |
| 47 | `browser_take_screenshot` `t7-21` | Final Designer state |

**T7 counts (exact):** browser calls **47**. Tab lists **1**; tab selects **1** (succeeded); snapshots **12** (`t7-00`, `t7-02`, `t7-04`, `t7-06`, `t7-08`, `t7-09`, `t7-10`, `t7-12`, `t7-14`, `t7-17`, `t7-18`, `t7-20`); finds **5** (`Select Form`, `Pane (01)`, `Expand`, `FX_UMCombobox`, `Property Class Extension`); screenshots **10** (`t7-01`, `t7-03`, `t7-05`, `t7-07`, `t7-11`, `t7-13`, `t7-15`, `t7-16`, `t7-19`, `t7-21`; all succeeded); element clicks **12** (Form-tab close ×1; toolbar Open ×1; Select Form OK ×1; Details Expand ×1; Components tab ×1; Pane (01) item ×1; grid Expand ×1; FX_UMCombobox row ×1; Edit menu ×1; Property Class Extension item ×1; FX_UM row ×1; Cancel ×1); typed text **1** (filter, view only); key presses **1** (ArrowRight, focus only); mouse moves **2**; mouse wheel **2** (view only); coordinate clicks **0**; right-clicks **0**; navigations **0**; JavaScript, evaluate, console or network inspection **0**.
- Check: 1 + 1 + 12 + 5 + 10 + 12 + 1 + 1 + 2 + 2 = **47**.
- Browser errors or timeouts: **0**. Ref-not-found: **0**. Fresh-snapshot recovery allowance used: **0**. Corrected visible inspections: **0**. Parallel actions: **none**.

### Cumulative browser audit (T1 + T2 + T3 + T4 + T5 + T6 + T7), exact

| Task | Browser calls |
| --- | --- |
| T1 | 15 |
| T2 | 21 |
| T3 | 14 |
| T4 | 20 |
| T5 | 23 |
| T6 | 13 |
| T7 | 47 |
| **Total** | **153** |

Cumulative by category (T1–T7): tab lists **7**; tab selects **8** (all succeeded); snapshots **35**; finds **17**; screenshots **37**; element clicks **33**; coordinate clicks **2**; key presses **4**; typed text **1**; mouse moves **4**; mouse wheel **5**. Check: 7 + 8 + 35 + 17 + 37 + 33 + 2 + 4 + 1 + 4 + 5 = **153**. Right-clicks cumulative: **3** (T1 baseline; T5 and T6 runtime). Errors or timeouts **0**.

### Mutation and lifecycle audit (T7, and cumulative T1–T7)

| Item | T7 | Cumulative T1–T7 |
| --- | --- | --- |
| Extension creations | 0 | **0** |
| Extension field changes (FX_UM Right-Click Menu only) | 0 | **1** (`StdDetailsAddFind`, T3) |
| Extension ellipsis clicks | 0 | **0** |
| Inline-editor OK clicks | 0 | **1** (T2, no change) |
| Global Objects OK clicks | 0 | **1** (T3) |
| Global Objects Cancel clicks | **1** (T7, read-only) | **2** (T4 and T7; both read-only) |
| Parent-dialog OK clicks | 0 | **0** |
| Designer Saves | 0 | **1** (Save 1, T4) |
| Save 2 | 0 (not needed: the Designer stayed clean) | **0** |
| Designer close / reopen | **1 / 1** | **1 / 1** |
| Runtime close / reopen | 0 / 0 | **1 / 1** (T5) |
| Runtime right-clicks | 0 | **3** |
| Details chosen | 0 | **1** (T6) |
| Add or Find chosen | 0 | **0 / 0** |
| FX_UMs Form opened | 0 | **1** (T6, closed clean) |
| Web Client unloads / Designer unloads | 0 / 0 | **0 / 0** |
| Component or property changes | 0 | **0** (FX_UMCombobox was selected and read; no value changed) |
| Other extension, class, IDO or string changes | 0 | **0** |
| Designer view-state changes (panel expanded, tab, filter, pane expanded, row selected) | yes (view only) | not Form changes |
| Re-logins | 0 | **0** |

### Designer state at the end of T7

- **Designer (tab 0, selected):** FX_Items, User scope; **clean** (toolbar Save `[disabled]`, Undo `[disabled]`); **no dialog open**; FX_UMCombobox row selected in the Components grid (selection); Details panel expanded and filter set (view state).
- **Runtime (tab 1):** not selected or touched in T7. Last state (T6): FX_Items on dumbbell, UM `EA`, clean, no menu.

### Worker-written file inventory (T7)

- `experiments/EXP-069-R4-hello-world-part-4-section-9-um-property-class-extension-right-click.md` (updated: T7 status line and this T7 section).
- `evidence/EXP-069-R4/t7-00-designer-fresh-snapshot-pre-close.yml`
- `evidence/EXP-069-R4/t7-01-designer-pre-close-clean-fx-items.png`
- `evidence/EXP-069-R4/t7-02-after-designer-close-snapshot.yml`
- `evidence/EXP-069-R4/t7-03-after-designer-close-native-response.png`
- `evidence/EXP-069-R4/t7-04-select-form-dialog-snapshot.yml`
- `evidence/EXP-069-R4/t7-05-select-form-dialog-before-ok.png`
- `evidence/EXP-069-R4/t7-06-designer-reopened-fx-items-snapshot.yml`
- `evidence/EXP-069-R4/t7-07-designer-reopened-fx-items-clean-user-scope.png`
- `evidence/EXP-069-R4/t7-08-details-expanded-components-snapshot.yml`
- `evidence/EXP-069-R4/t7-09-components-tab-snapshot.yml`
- `evidence/EXP-069-R4/t7-10-components-filtered-snapshot.yml`
- `evidence/EXP-069-R4/t7-11-components-filter-state.png`
- `evidence/EXP-069-R4/t7-12-pane-expanded-snapshot.yml`
- `evidence/EXP-069-R4/t7-13-components-pane-01-expanded-filter.png`
- `evidence/EXP-069-R4/t7-14-fx-umcombobox-selected-properties-snapshot.yml`
- `evidence/EXP-069-R4/t7-15-fx-umcombobox-component-properties-readback.png`
- `evidence/EXP-069-R4/t7-16-fx-umcombobox-properties-scrolled-right-click-inheritance.png`
- `evidence/EXP-069-R4/t7-17-global-objects-layout-after-reopen-snapshot.yml`
- `evidence/EXP-069-R4/t7-18-fx-um-selected-readback-snapshot.yml`
- `evidence/EXP-069-R4/t7-19-pre-cancel-readback-four-fields-after-reopen.png`
- `evidence/EXP-069-R4/t7-20-after-cancel-designer-state-snapshot.yml`
- `evidence/EXP-069-R4/t7-21-final-designer-state-after-cancel.png`

**Cumulative worker-written repository files (T1–T7): 73** (the record 1; T1 evidence 6; T2 evidence 11; T3 evidence 7; T4 evidence 9; T5 evidence 10; T6 evidence 7; T7 evidence 22). Tool logs under `evidence/playwright/` are excluded. The worker wrote no other repository file and did not run git.

### Screenshot and snapshot evidence (T7)

- `t7-03` (after the Form close): empty canvas; no dialog; footer User; Save greyed. **Proves** the Form closed with no prompt. **Does not prove** the persisted state.
- `t7-07` (reopened FX_Items): Form properties Name `FX_Items`, Form Type Normal, Is Master True, Version `User version for us…`; Save greyed; footer `ScopeType: User`. **Proves** the reopened identity and User scope. **Does not prove** the extension contents (checked in `t7-19`).
- `t7-15` and `t7-16` (FX_UMCombobox): Add/Details, Find and Property blank at component level; Right-Click Menu blank with its dropdown arrow and ellipsis only. **Proves** the component-level values were blank and were not changed. **Does not prove** the Inheritance rows (below the visible area; evidenced by `t7-14` accessibility only).
- `t7-14` (YML): Data Source `object.FX_UM`; View Attributes Inherited From Property `FX_UM`; Edit Property Class Extension For Property Class `FX_UM`; Right-Click Menu gridcell with no text. **Proves** the accessibility state of those rows.
- `t7-19` (Global Objects, four fields): Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind`, FX_UM highlighted in the list. Name `FX_UM` is shown in `t7-18` (accessibility). **Proves** the four values on screen after the reopen. **Does not prove** the stored database value or that the value persists across browser sessions.
- `t7-21` (final): no dialog; FX_Items; Save greyed; component Right-Click Menu blank. **Proves** the final clean state.

### Acceptance (T7)

| AC | T7 status | Decisive evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Re-confirmed in T1–T2 (not repeated in full). | T1 `t1-00`, `t1-01`; T2 `t2-00`, `t2-01` | — |
| AC-2 | Met as observed (T2–T3). | T2 `t2-01`, `t2-03`; T3 `t3-02`, `t3-04`, `t3-06` | — |
| AC-3 | Met as observed (T4 readback, Save 1; T5 runtime check 1). | T4 `t4-02`, `t4-04`, `t4-07`; T5 `t5-07` | — |
| AC-4 | **Supported**: component-level Right-Click Menu blank (`t7-14`, `t7-16`); unloads 0 (not needed). | `t7-14`, `t7-16`, `t7-21` | — |
| AC-5 | Met as observed (T6): menu on dumbbell; Details opened FX_UMs on EA/Each; closed clean. | T6 `t6-02`, `t6-04`, `t6-06` | One drill-down run. |
| AC-6 | **MET AS OBSERVED.** The clean Designer Form closed once (`t7-02`, `t7-03`) and reopened once (`t7-06`, `t7-07`); one Edit > Property Class Extension readback shows the four FX_UM settings including `StdDetailsAddFind` (`t7-18`, `t7-19`); component-level Right-Click Menu blank (`t7-14`, `t7-16`); the editor closed without change (Cancel, `t7-20`); Save 2 not performed (the Designer stayed clean). | `t7-06`, `t7-07`, `t7-18`, `t7-19`, `t7-20` | Same browser session only; no cross-session or database durability claimed. |
| AC-7 (T7 portion) | **Supported**: no other component, property, class, extension, record or object changed; no Designer unload; no Add or Find; no dialog or menu left open (`t7-20`, `t7-21`). | `t7-20`, `t7-21`; audit | Designer view-state changes (panel, tab, filter, row selection) were made and are not Form changes. |
| AC-8 | T7 portion complete. **Final reconciliation (AC-7 full and AC-8 final report) is left for the next task**, as the brief requires. | Audit counts above | — |

### Inheritance observation (cumulative, observed only)

- **Negative (T1):** 25 standard items; no Details, Add or Find (before the extension change).
- **Positive (T5, T6):** Add, Details, Find, Help after the Save and a runtime close/reopen. The FX_UMCombobox component-level Right-Click Menu remained blank throughout (T4 `t4-08`, T7 `t7-14`, `t7-16`). No component override was present, so the extension value is the observed source. **Not causally isolated.**
- **Designer-reopen observation (T7):** after the Designer close and reopen, the extension readback shows `StdDetailsAddFind`. In EXP-069-R2 T10 the same extension read **blank** after its reopen (a different earlier state). The reason for the difference is unresolved; this run's save is the observed explanation, not a proof.

### Knowledge state (T7)

| Finding | State |
| --- | --- |
| Native Form close of the clean FX_Items Designer produces no prompt or response text | **observed** (one run; `t7-02`, `t7-03`) |
| Toolbar Open with Select Form OK reopens FX_Items with User scope | **observed** (one run; `t7-06`, `t7-07`) |
| After the Designer close and reopen, the FX_UM extension reads Add/Details `FX_UMs`, Find `FX_UMs`, Property `FX_UM`, Right-Click Menu `StdDetailsAddFind` | **observed** (one run; `t7-18`, `t7-19`) |
| The Global Objects Cancel closes the read-only dialog with no change; the Designer stays clean | **observed** (one run; `t7-20`) |
| FX_UMCombobox component-level Right-Click Menu, Add/Details, Find and Property are blank after the reopen | **observed** (one run; `t7-14`, `t7-15`, `t7-16`) |
| The extension value persists across independent browser sessions or in the database | **unresolved** (same-session close/reopen only; not claimed) |
| The difference from EXP-069-R2 T10 (blank after reopen then, `StdDetailsAddFind` now) | **unresolved** (cause not isolated) |
| Keyboard ArrowRight on a Pane row moves focus into the Type cell (no edit) | **observed** (one run; `t7-13`) |

### Open items and next permitted action

1. **Next task (not performed in T7):** final acceptance reconciliation for AC-7 (full) and AC-8 (the final EXP-069-R4 report), per the brief's "leave final acceptance reconciliation for the next task".
2. Save 2 is not authorized (the Designer stayed clean; no no-change OK made it dirty).
3. Add and Find remain untested by design. No unload was used.
4. Classification for all T7 findings: **observed only, NOT replay_verified**; no independent-session or database durability claimed.

---

## T8 — Final acceptance reconciliation (documentation only; zero browser calls; zero Mongoose changes) (cycle 7)

Task T8 (bounded instruction: reconcile AC-1 to AC-7 against evidence; confirm final Designer and runtime states; reconcile all T1–T7 browser and mutation counts; address the T5 documentation no-op and the T7 `browser_type` flag; record the T7 ArrowRight focus action; inventory worker-written files; write `evidence/EXP-069-R4/T8-final-acceptance-report.md`; update only this record; recommend ACCEPTED as observed or BLOCKED). Run `R-20261013-123116-yDJk`, experiment EXP-069-R4, cycle 7, task_message_id `ef463fc4-3c22-4b4d-bc71-d574eeb67812`, worker session `e1fe92c0-6ba9-4acd-be86-e9db9a5ca783`. Date 2026-10-13.

### Browser calls and Mongoose changes in T8

- **Browser calls: 0.** Local reads only (a directory listing of `evidence/EXP-069-R4/`; grep of this record for the T5 row, the `browser_type` audit row and the status lines). No Mongoose change.

### Recommendation

- **ACCEPTED as observed (not replay_verified)**, subject to operator review of D1 and limitations L1–L3. Full reasoning, AC matrix, audit, inventory and deviation table are in `evidence/EXP-069-R4/T8-final-acceptance-report.md`.
- No disqualifying deviation was found. The operator should review D1 (the T1 read of the EXP-069-R3 final report after browser interaction began), because it is a process rule the worker broke.

### Reconciled totals (T1–T7)

- Browser calls **153** (15 + 21 + 14 + 20 + 23 + 13 + 47). Tab lists 7; tab selects 8; snapshots 35; finds 17; screenshots 37; element clicks 33 (3 of them right-clicks, T1/T5/T6); coordinate clicks 2; key presses 4; typed text 1; mouse moves 4; mouse wheel 5.
- Extension creations **0**; FX_UM Right-Click Menu field change **1**; Designer Saves **1** (native response `Save` / `Global object(s) were saved.`); Save 2 **0**; Designer unloads **0**; Web Client unloads **0**; Designer close/reopen **1/1**; runtime close/reopen **1/1**; runtime right-clicks **3**; Details selected **1**; Add **0**; Find **0**; FX_UMs opened and closed clean **1/1**; component, record, IDO, class, string or unrelated extension modifications **0**; runtime Saves **0**; re-logins **0**.
- Inline-editor OK **1** (no change, T2); Global Objects OK **1** (T3); Global Objects Cancel **2** (T4, T7; read-only); parent-dialog OK **0**.

### T5 documentation no-op and T7 `browser_type` flag

- **T5 no-op `Edit`:** a documentation-tool call with identical old and new strings. The tool returned "No changes to make". It is not a browser call and is not in the browser audit. The `t5-06` audit row is intact (grep in T8). Browser error count unchanged at 0.
- **T7 `browser_type` = 1:** the text `FX_UMCombobox` went into the **Components-grid view filter** (`e2207`, inside `tabpanel "Components"`), not into a component property. Confirmed against `t7-09` (empty before), `t7-10` (filled, still in the Components tabpanel), `t7-11` (screenshot), `t7-14` (component Name, Data Source and Right-Click Menu unchanged) and `t7-20` (Save still disabled). Verified non-disqualifying.
- **T7 ArrowRight (one press):** moved keyboard focus into the Type cell of the Pane (01) row (`t7-13`); no value change; Save stayed disabled (`t7-20`).

### AC-1 to AC-8 status

| AC | Status |
| --- | --- |
| AC-1 | Supported (with disclosed D1 source-order deviation; leftover inline editor state, component blank and 25-item baseline recorded). |
| AC-2 | Supported (inline OK no change; Global Objects layout; Tab commit; one OK; no parent dialog; Save state recorded). |
| AC-3 | Supported (pre-Save readback; Cancel without change; Save 1 native response; runtime check 1 with four items). |
| AC-4 | Supported (component Right-Click Menu blank; unload 0). |
| AC-5 | Supported (menu; Details opened FX_UMs on EA/Each; closed clean). |
| AC-6 | Supported as observed, same session only (Designer close/reopen; four-setting readback; component blank; Cancel; Save 2 not needed). |
| AC-7 | Supported with limitation L3 (tenant-wide Save scope not visible to the worker). |
| AC-8 | Met by the T8 report and this record. |

### Worker-written files

- Cumulative worker-written repository files **74** = the record (1) + T1–T7 evidence (72) + `evidence/EXP-069-R4/T8-final-acceptance-report.md` (1). Harness-written `harness-audit-T1.md`–`harness-audit-T7.md` and `evidence/playwright/` tool logs excluded. Operator git review is authoritative for repository confinement.

### Limitations and classifications

- L1 no independent-session or database durability; L2 unexplained R2 T10 blank vs this run's `StdDetailsAddFind` after reopen (unresolved); L3 tenant-wide Save scope (unresolved); L4 single runtime run; L5 Add and Find not tested; L6 inheritance not causally isolated; L7 Details only; L8 inline OK write effect unknown; L9 Components view state left in the Designer.
- All findings: **observed only**. Nothing replay_verified.

## Outcome (operator, 2026-10-13)

Accepted (observed). Hello World Part 4 section 9 is complete. Operator call under the standing authorization of 2026-10-11.

- Run R-20261013-123116-yDJk completed as accepted after 8 worker tasks.
- Screenshots viewed by the operator assistant:
  - `t3-04`: the Global Objects dialog (Designer Edit > Property Class Extension) has the Property Class Extensions list (New, Copy, Delete) and a Properties pane (OK, Cancel, Help).
    - FX_UM shows Add/Details Form `FX_UMs`, Find Form `FX_UMs`, Property `FX_UM`, and Right-Click Menu `StdDetailsAddFind` as committed text after Tab.
  - `t6-02`: in the runtime FX_Items Form on dumbbell, with UM `EA`, the Unit of Measure right-click menu shows `Add...`, `Details...`, `Find...`, `Help`.
  - `t6-04`: Details opened the FX_UMs Form in a new tab on `EA` / `Each`, Object 1 of 1.
  - `t7-19`: after the Designer close/reopen, the Global Objects readback shows FX_UM with all four values, including `StdDetailsAddFind`.
    - The FX_UMCombobox component Properties show Add/Details Form, Find Form, Property and Right-Click Menu blank, so they are inherited from the extension.
  - `t7-21`: final state. The FX_Items Designer is clean in User scope, with no dialog open.
- Counts:
  - Designer Saves: one, with the response "Global object(s) were saved."; Save 2 was not needed.
  - Web Client unloads 0, Designer unloads 0.
  - Details drill-downs 1; Add or Find used 0.
  - Component changes 0.
  - The T7 `browser_type` went into the Components view filter only.
  - The T5 tool error was a no-op Edit on the record.
- Deviation D1 (T1 read the R3 report after browser interaction began) did not affect any decision and is accepted.
- Unresolved, kept open: why the inline-editor value read blank in EXP-069-R2 T10. That value was chosen and OK was clicked while the combobox still had focus.
- Findings (observed):
  - Edit an existing property class extension through Designer Edit > Property Class Extension (Global Objects dialog).
  - Commit dropdown values with Tab before OK.
  - After a Save, the inline ellipsis editor is read-only.
  - Extension changes reach the runtime after a runtime close/reopen, with no unload.
  - A blank component-level Right-Click Menu inherits the extension's `StdDetailsAddFind`.
- Confinement (git status): only `evidence/EXP-069-R4/` and this record were written by the run.
- Persistent FX_ state after section 9:
  - The FX_UM property class extension (User version) has Add/Details Form FX_UMs, Find Form FX_UMs, Property FX_UM, and Right-Click Menu StdDetailsAddFind.
  - FX_UMCombobox has a blank component-level Right-Click Menu.
