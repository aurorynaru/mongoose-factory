# EXP-065 — Hello World Part 4 Section 6b: FX_HelloWorld theme and FX_BlueButton on the Import button

**FINAL STATUS (T7, 2026-10-12): BLOCKED at AC-5. Final report: `evidence/EXP-065/T7-final-report.md`.** AC-1, AC-2, AC-3, AC-4 and AC-6 passed at the observed level; AC-5 FAILED (the Designer Theme Class readback after the Designer close/reopen was not obtained; the close, the reopen, FX_Items identity and User scope were observed); AC-7 met for the audited action set; AC-8 report complete. Nothing is replay_verified. The statements "AC-5 partly met" in §§16–17 are superseded by this status. T7 made zero browser calls.

**STATUS (T6, 2026-10-12): T6 COMPLETE — runtime FX_Items closed once and reopened once through Form > Open > Select Form; Import button observed teal (same as the pre-close baseline and the T2 post-theme state), not blue. AC-6 met as observed. AC-5 remains PARTLY MET: the Designer Theme Class readback after reopen was never obtained (see T5 §16). No Save, no property change, no preference change, no Import activation, no record change. Both Form tabs left open and clean. See §17.**

**STATUS (T5, 2026-10-12): T5 PARTIAL — Designer close and reopen performed once each (AC-5 partly met: Name FX_Items and User scope verified; Theme Class NOT verified after reopen — blocker). Form-tab close: no unsaved-changes prompt. Reopen via the toolbar Open icon (no accessible name; coordinate click) and Select Form OK (one row, FX_Items). The reopened canvas shows the Import button blue and Save and Undo disabled. Selecting FX_RefreshButton for the Theme Class readback timed out (adorner intercepts pointer events); one fresh snapshot and one visible inspection did not establish a selection. No Save, no property change, no runtime action. See §16.**

**STATUS (T4, 2026-10-12): T4 COMPLETE — the T3 commit ambiguity is resolved and the single authorized Designer Save was performed (AC-3 and AC-4 met as observed).** One Tab key press (focus-out from the Theme Class editor, no value changed) made Save and Undo enabled, the Designer canvas Import button turned blue, and the Theme Class stayed `FX_BlueButton`. One native toolbar Save was invoked; the native response reads verbatim `Save — Form [FX_Items] and global object(s) were saved.` Save is disabled afterwards. **No close, no reopen, no preference change, no other property change.** Designer and runtime close/reopen (AC-5, AC-6) not started. See §15.

**STATUS (T3, 2026-10-12): T3 STOPPED — BLOCKER, ZERO SAVES (superseded by T4). The FX_RefreshButton Theme Class was changed once from `BlueButton` to `FX_BlueButton` (the exact option was visible in the dropdown and the combo readback shows `FX_BlueButton`), but the Designer toolbar Save and Undo stayed disabled before and after a 3-second wait. The Form is therefore not reported dirty, so the conditional Save was not invoked. Whether the change is committed to the component model is unresolved. No Save, no close, no reopen. See §14.** Restoration baseline for the Theme Class, if needed: `BlueButton`.

**STATUS (T2, 2026-10-12): T2 COMPLETE — Layout theme preference step (AC-2 met as observed).** Layout theme changed `Hi world` → `FX_HelloWorld` with one OK; read-back after reopening User Preferences shows `FX_HelloWorld`; the dialog was dismissed with its × control (no OK). **No Designer change, no class change, no Designer Save, no Designer close/reopen, no runtime close/reopen.** No dialog left open. Nothing is replay_verified. See §13.

**Restoration baseline (for any later restore of the Layout theme):** the original Layout theme value was **`Hi world`** (T1 §3.4 and T2 §13.3, read before any change).

**STATUS (T1, 2026-10-12): T1 COMPLETE — read-only preflight and baseline. AC-1 met as observed.** No User Preference was changed (the User Preferences dialog was closed without OK). No theme was edited or saved. No Designer property, Save, close/reopen or runtime action was performed. **AC-2 to AC-8 not started.** Nothing is replay_verified.

**Read-only baseline in one line:** User Preference Layout theme is **`Hi world`** (not `FX_HelloWorld`); Designer `FX_RefreshButton` Appearance > **Theme Class** is **`BlueButton`** (not `FX_BlueButton`). Both differ from the target, so the preference step and the class step remain to be authorized and run in a later task.

## 1. Run identity

- Run `R-20261012-225328-o9Fr`, experiment EXP-065, cycle 0, task **T1** (read-only preflight and baseline; stop before any preference or property change).
- Worker session `6c5f00dc-cbf5-42b9-84cf-95676225e69c`; task_message_id `0309f2dc-4623-4992-8b09-71e88c9d0db4`.
- Brief commits (repository history): `f97a3ab` (draft brief), `f0427cf` (approved brief).
- Editing scope: **User** for Forms. Target objects: Form `FX_Items`, component `FX_RefreshButton`, class `FX_BlueButton`, theme `FX_HelloWorld`. Evidence directory: `evidence/EXP-065/`.

## 2. Sources reviewed

- `AGENTS.md` (repository file, read in full).
- `docs/mongoose/transcripts/hello-world-pt4.md` Section 6 (lines 170–190, 05:51–07:29), including the source-precision and boundary notes. The tutorial's steps 9–11 are: 9 = Web Client View > User Preferences > Layout > select the theme > OK; 10 = reopen Designer, select the Import button, expand Appearance, choose the theme class; 11 = observe styling and Save. The tutorial names the theme `Hello World` and the class `Blue Button`; this experiment adapts them to `FX_HelloWorld` and `FX_BlueButton`. The tutorial's "Save" in step 11 is not a verified metadata persistence step.
- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (§1–§16 read; status lines T1–T9). Relevant carry-over: the Designer is reached from the Web Client (Form > Definition > Designer) and opens in a new tab; the Designer tab order changed between tasks (T1 Designer at tab 1, T2 onward at tab 0); a Designer dialog Cancel dropped `?MGForm=` from the URL; `Edit > Theme` opens Global Objects (not an "Edit Themes" item); FX_HelloWorld exists with an FX_BlueButton class under Button and Background `#FF5CC6C7` / Foreground `#FFFFFFFF` (EXP-064 T5 readback; the EXP-064 save path was an operator-authorized sequence). EXP-064 §16 and later record a Solid-radio viewport timeout, cured by a label click.
- `evidence/EXP-064/` was not opened in T1; the EXP-064 record was used for the route and label history only.

## 3. Baseline (T1, observed read-only)

### 3.1 Browser tabs

- Tab list before any tab selection (first list): **2 tabs**: `0 (current) Infor Mongoose Application Development Framework (…/WSWebClient/designer/default.aspx)` = **Web Designer**; `1 Mongoose` (`mingle-portal…?favoriteContext=FX_Items`) = **Web Client**.
- Tab 0 (Designer) was already the current tab; a fresh untargeted snapshot was taken on it (no selection action).
- Tab 1 (Web Client) selected once after the list (succeeded). A fresh snapshot confirmed the Web Client runtime Form.
- The Designer tab was not selected again after the baseline. Its screenshot `t1-01` was taken while it was the current tab.

### 3.2 Designer: Form identity, scope and dirty state (tab 0)

- Open Form tabs: **one** tab, heading `FX_Items` (selected).
- Scope footer: `[ ScopeType: User / ScopeName: <authenticated operator account> ]` (the account email is shown in the footer and is not reproduced here).
- Dirty state: **clean**. Toolbar Save disabled; Regenerate Form, Undo and Redo disabled (snapshot and `t1-01`).
- Component selection: the Properties combo already read `FX_RefreshButton (Button)` and the canvas Import button showed selection handles. **No click was needed or made**; the component was selected at task start.
- FX_RefreshButton Properties (Design / Appearance; read, not edited):
  - Design > Name: `FX_RefreshButton`
  - Design > Caption: `FX_sImport` (string-ID dropdown with ellipsis button)
  - Design > Type: `PushButton`; From Device Master: `True`
  - **Appearance > Theme Class: `BlueButton`** (exact property label `Theme Class`; value shown in a dropdown with a trailing arrow)
  - Appearance > Background Color: empty (collapsed sub-row, expander shown)
  - Appearance > Foreground Color: `#000000`
  - Appearance > Font: empty; Justification: empty; Bitmap File Name: empty.
- **Discrepancy against the target**: the class value reads `BlueButton`, not `FX_BlueButton`. The brief says the operator changed the class deliberately before this run; the value is recorded as observed. No change was made in T1.
- Canvas: the Import button is rendered **light cyan** with white text in the Designer (`t1-01`). The Web Client runtime Import button is blue (§3.4). Cause not investigated.
- Evidence: `t1-01-designer-initial-state-fx-items-clean.png`.

### 3.3 Web Client runtime Form (tab 1)

- Form: `FX_Items` (runtime, heading `FX_Items`, single Form tab). Records: row 1 `dumbbell`, `45 pound iron`, `45.00`, `EA`; row 2 `eggs`; row 3 `guitar`. The selected record in the Item field is `dumbbell`.
- Toolbar Save disabled; no dialog open at start; no portal banner, no sign-in or challenge screen.
- Note: the selected record differs from EXP-064 T1 (`guitar`). Not changed in T1.

### 3.4 Layout theme baseline (User Preferences, read-only)

- Opened via **View > User Preferences...** (View menu, one click; then the `User Preferences...` item, one click). The dialog opened on the **Behavior** page first (`t1-02`).
- Dialog left list: `Behavior`, `Layout`, `Event System`, `Diagnostics`. Buttons visible: **OK** and **Help** only. **No Cancel button exists in this dialog** (`t1-02`, `t1-03`).
- Selected the **Layout** list entry (one click; list navigation only, no value changed).
- Layout page (`t1-03`): `Theme:` combobox (label in the accessibility tree: `sFormsDBThemeName:`) showing **`Hi world`** (verbatim). Other controls on the page: `Update Existing View` (checked), `Toolbar Type: Default`, `Tabbed Form Layout` (checked), `Display Status Bar` (checked). **None of these were touched.**
- Theme list (read by opening the combobox with its Open button; `t1-04`; the list is scrollable and the scroll bar suggests more rows may exist below `Projector`): a blank row above the first name (not confirmed as an option); `ButtonTheme`, `Classic`, `Dark`, **`FX_HelloWorld`**, **`Hi world`** (selected), `High Contrast`, `Infor`, `InforReport`, `Light`, `MyPortal`, `Projector`.
- The combobox was collapsed again with its Open button (one click, no option selected). Read-back after collapse (`t1-05`): value still **`Hi world`**.
- Dialog closed with its own close (×) control, labelled `Close Window`, **without OK** (one click; see §6 deviation). After close (`t1-06`) the runtime is visible; no dialog is open; the runtime Import button is blue.
- **FX_HelloWorld exists in the theme list** (created in EXP-064); it is **not** the current Layout theme.

## 4. Preference step, class step, Save and reopen (T1)

- **Not performed in T1** (the brief says to stop before changing any preference or property). The Layout theme (`Hi world`) and the class (`BlueButton`) both differ from their targets, so both steps remain to be authorized and run.
- No preference OK, no class change, no Designer Save, no Designer close/reopen, no runtime close/reopen.

## 5. Acceptance matrix (T1 scope)

- **AC-1: met as observed.**
  - Sources reviewed: AGENTS.md; hello-world-pt4.md Section 6 (05:51–07:29); EXP-064 record. Met.
  - Session usable without challenge: yes (no sign-in, no challenge, no portal banner, no dialog at start). Met.
  - Web Client and Web Designer tabs identified: tab 1 = Web Client, tab 0 = Web Designer (§3.1). Met.
  - Designer Form is `FX_Items` in User scope and clean: single Form tab `FX_Items`, scope footer `User`, Save and Undo disabled (§3.2, `t1-01`). Met.
  - Baseline Layout theme recorded verbatim with theme list: `Hi world`; list in §3.4 (`t1-03`, `t1-04`). Met, with the list possibly scrollable.
  - FX_RefreshButton theme-class label and value recorded: label `Theme Class`, value `BlueButton` (§3.2, `t1-01`). Met.
  - Evidence: tab list (§3.1), preference baseline screenshots (`t1-02`, `t1-03`, `t1-04`), Designer identity and Appearance screenshot (`t1-01`).
  - **Deviation** on "close the dialog with Cancel": no Cancel button exists; the dialog's own close (×) control was used instead (§6).
- **AC-2 to AC-8: not started.** No preference changed, no class changed, no Save, no close/reopen. No dialog left open.

## 6. Deviations, blockers and recovery

- **Cancel not present (deviation, disclosed).** The brief's baseline close is "Cancel". The User Preferences dialog has only OK and Help plus the top-right close (×) control (`t1-02`, `t1-03`). The close (×) control was used once, with no OK. This is the dialog's non-applying close, but it is not the named Cancel control. The runtime was checked after the close (`t1-06`); no theme change is visible (the Import button and Form remain in their pre-dialog appearance). This does not prove the stored preference is unchanged; a later read-back will.
- **Theme combobox expanded then collapsed (no change).** The Open button of the Theme combobox was clicked twice (expand, then collapse) to read the list. No option was selected; the read-back shows `Hi world`.
- **Designer tab not changed by T1.** The Designer was current at start and was not acted on beyond snapshot and screenshot.
- **No blocker.** No "Ref not found" error, no timeout, no browser-native dialog, no unsaved-change prompt in T1.

## 7. Action audit (cumulative, T1; exact)

| Action | T1 | Cumulative (T1) |
| --- | --- | --- |
| Browser tab lists (explicit `browser_tabs` list) | 1 | 1 |
| Browser tab selects (succeeded) | 1 (tab 1, Web Client) | 1 |
| Snapshots (explicit `browser_snapshot`, untargeted) | 3 (Designer start; Web Client after select; Web Client after dialog open) | 3 |
| Finds | 4 (`User Preferences`; `Theme`; `Hi world`; `Close Window`) | 4 |
| Successful element clicks | 6 (View; User Preferences...; Layout list entry; Theme Open (expand); Theme Open (collapse); dialog Close Window (×)) | 6 |
| Failed element clicks | 0 | 0 |
| Key presses | 0 | 0 |
| Typing | 0 | 0 |
| Hovers | 0 | 0 |
| Screenshots (worker-requested) | 6 (`t1-01` to `t1-06`) | 6 |
| Dialogs opened | 1 (User Preferences) | 1 |
| Dialogs closed with OK | 0 | 0 |
| Dialogs closed with close (×) (no OK) | 1 | 1 |
| **User Preference OKs** | **0** | **0** |
| **User Preference changes** | **0** | **0** |
| **Theme edits / creates / saves** | **0 / 0 / 0** | **0 / 0 / 0** |
| Global Objects / Edit Styles opened | 0 | 0 |
| **Designer property changes (theme class or other)** | **0** | **0** |
| **Designer Saves** | **0** | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 |
| Runtime close / reopen | 0 / 0 | 0 / 0 |
| Runtime record changes / runtime Save | 0 / 0 | 0 / 0 |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Checkout-management actions | 0 | 0 |
| Unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Navigate (direct URL), refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate, run-code | 0 | 0 |
| Browser console or network inspection (by worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |

Notes on the audit:
- Snapshots and find results returned automatically after each click are tool output and are not counted in the explicit rows.
- The Playwright tool wrote its own snapshot and console files under `evidence/playwright/` (for example `page-2026-10-12T14-54-00-164Z.yml` through `page-2026-10-12T14-54-40-860Z.yml`). These are tool-generated, not worker-requested; they were not opened as console or network inspection. The page-level console counters (`2 errors, 0 warnings` on the Designer; `3 errors, 10 warnings` on the Web Client) were observed in tool output and not investigated.

## 8. Worker-written file inventory (T1)

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (this record; created in T1).
- `evidence/EXP-065/t1-01-designer-initial-state-fx-items-clean.png`
- `evidence/EXP-065/t1-02-user-preferences-open-behavior-page-before-layout.png`
- `evidence/EXP-065/t1-03-user-preferences-layout-baseline-theme-hi-world.png`
- `evidence/EXP-065/t1-04-user-preferences-theme-dropdown-list-readonly.png`
- `evidence/EXP-065/t1-05-user-preferences-layout-after-dropdown-collapsed-value-unchanged.png`
- `evidence/EXP-065/t1-06-web-client-after-preferences-closed-no-ok.png`

No other file was written by the worker. Tool-generated Playwright snapshot and console files under `evidence/playwright/` are not worker-written. No AGENTS.md, transcript, recipe or earlier experiment record was changed.

## 9. Screenshot review (what each proves and does not prove)

- `t1-01`: Designer; single Form tab `FX_Items`; scope footer `User`; Save and Undo greyed; Properties combo `FX_RefreshButton (Button)`; Appearance > `Theme Class` = `BlueButton`; Foreground `#000000`; canvas Import button light cyan. **Proves** Designer identity, User scope, clean state, and the Theme Class value as shown. **Does not prove** that `BlueButton` is a valid option of the class list, the canvas colour source, or what the stored value is beyond the display.
- `t1-02`: User Preferences open on the **Behavior** page; OK and Help only (no Cancel); runtime `FX_Items` visible behind. **Proves** the dialog opened and that no Cancel button exists. **Does not prove** any Layout value (Layout not yet displayed in this image).
- `t1-03`: User Preferences **Layout** page; `Theme: Hi world`; Toolbar Type Default; Tabbed Form Layout and Display Status Bar checked; Update Existing View checked. **Proves** the Layout theme as displayed. **Does not prove** the stored preference (read-back by reopen is not part of T1).
- `t1-04`: the Theme dropdown expanded: blank row, ButtonTheme, Classic, Dark, FX_HelloWorld, Hi world (selected), High Contrast, Infor, InforReport, Light, MyPortal, Projector; scroll bar present. **Proves** the visible list and that FX_HelloWorld is present. **Does not prove** that rows below Projector are absent (scroll bar present) or what the blank row is.
- `t1-05`: the dropdown collapsed; value `Hi world`; dialog still open. **Proves** the collapse left the value unchanged. **Does not prove** persistence.
- `t1-06`: dialog closed; runtime `FX_Items`; Import button blue; Save greyed; no dialog. **Proves** the dialog closed and no dialog remains open. **Does not prove** that the close-with-×-control applied no change in storage; no read-back was taken in T1.

## 10. Knowledge state (T1)

- Designer `FX_RefreshButton` Appearance > `Theme Class` label and value `BlueButton`: **observed** (single read).
- Web Client `View > User Preferences...` opens a dialog with left list Behavior / Layout / Event System / Diagnostics and OK / Help only (no Cancel): **observed**.
- Layout `Theme:` combobox (label `sFormsDBThemeName:`) value `Hi world`; list contains `FX_HelloWorld`: **observed**.
- Dialog close via its × control leaves the value and the runtime unchanged in this single run: **observed** (no storage read-back).
- Designer canvas renders the Import button cyan while the runtime renders it blue: **observed**; cause unresolved.
- Nothing is replay_verified. No procedure is marked verified.

## 11. Open questions and next step (not started)

- **Q1.** The Theme Class value `BlueButton` is not `FX_BlueButton`. Whether `FX_BlueButton` is listed in the Theme Class dropdown (EXP-064 created it under FX_HelloWorld) is not yet checked. The next task should open the dropdown once to read its options before choosing; this must not select anything else.
- **Q2.** The Layout theme combobox list has a blank first row and a scroll bar. Whether any row exists below `Projector` is unresolved.
- **Q3.** The dialog has no Cancel button. The next task should decide whether the × close is acceptable for a preference step with an OK; a read-back after reopen is required by the brief.
- **Q4.** The Designer canvas (cyan) and runtime (blue) appearance of the Import button differ before any change; the cause is unresolved.
- **Next permitted step (needs operator authorization):** T2 — the preference step (Layout theme `Hi world` → `FX_HelloWorld`, one OK, read-back) and the class step (`BlueButton` → `FX_BlueButton`, one change, readback), then one Designer Save, one Designer close/reopen, one runtime close/reopen. Before that, list tabs, select the relevant tab, and take a fresh snapshot.

## 12. Blockers

None (T1). See §6 for the Cancel deviation.

## 13. T2 — Layout theme preference step (cycle 1, task T2; AC-2 met as observed)

### 13.1 Tabs and starting state

- Tab list (before any select, first list of T2): **2 tabs**: `0 (current) Infor Mongoose Application Development Framework (…/WSWebClient/designer/default.aspx)` = Web Designer, and `1 Mongoose` (`mingle-portal…?favoriteContext=FX_Items`) = Web Client. Same order as the end of T1.
- Tab 0 (Designer) was still the current tab at task start; it was **not** selected or acted on in T2.
- Tab 1 (Web Client) selected once (succeeded). Fresh untargeted snapshot: runtime Form `FX_Items` (single Form tab), records 1 `dumbbell`, 2 `eggs`, 3 `guitar`; toolbar Save disabled; no dialog open; no sign-in or challenge screen.

### 13.2 Pre-change read (no change)

- View > User Preferences... opened the dialog on the Behavior page. Layout list entry selected (list navigation only).
- Theme combobox (label `sFormsDBThemeName:`) read **`Hi world`** verbatim, matching T1. Other Layout controls: Toolbar Type `Default`; Tabbed Form Layout checked; Display Status Bar checked; Update Existing View checked.
- The value is not `FX_HelloWorld`, so the preference step was performed. Evidence: `t2-01-user-preferences-layout-pre-change-theme-hi-world.png` (viewed: Theme `Hi world`; OK and Help only).

### 13.3 Selection before OK and single OK

- Theme combobox Open button clicked once (dropdown expanded; options included `FX_HelloWorld`, `Hi world` selected). One click on the `FX_HelloWorld` option (selection only).
- Pre-OK state (viewed `t2-02`): Theme field reads **`FX_HelloWorld`**; Toolbar Type `Default`; Tabbed Form Layout checked; Display Status Bar checked; Update Existing View checked. A fresh untargeted snapshot confirmed the combobox value `FX_HelloWorld` and the Layout list entry selected.
- **OK clicked exactly once.** No error and no confirmation prompt appeared. The dialog closed.
- Immediate response (viewed `t2-03`): dialog gone; status bar reads `OK (Object 1 of 1)`; runtime `FX_Items` still shown with Save disabled and no dialog. The **Import button changed from blue (T1 `t1-06`) to teal** (`#5CC6C7`-like). Cause of the colour change is not established by this step; see §13.7 and §13.9.

### 13.4 Read-back after reopening User Preferences

- View > User Preferences... reopened once (View menu click, then the menu item). Layout entry selected.
- Read-back (viewed `t2-04`): Theme combobox reads **`FX_HelloWorld`**; other Layout controls unchanged (Toolbar Type `Default`; Tabbed Form Layout and Display Status Bar checked; Update Existing View checked).
- Dialog dismissed with its top-right close (×) control, `Close Window`, **without OK**. Dismissal verified: the dialog is gone (viewed `t2-05`; runtime `FX_Items` visible, Import button teal, Save disabled, no dialog).

### 13.5 Limitations of the dismissal and the read-back

- The User Preferences dialog has **no Cancel button** (as recorded in T1). The × control is used as the non-applying close. It is not the named Cancel control.
- The read-back shows the dialog's displayed value after a fresh open. It is the same reopen-based read-back the brief asks for, but it is **same-session**: no close/reopen of the browser, Web Client or Form was performed, so no cross-session durability is claimed.
- Only the Layout theme was read or changed. The Behavior page and other preferences were **not** re-read after OK; the claim "no other preference changed" rests on the T2 action list (no other control was clicked) and on the matching Layout controls before and after, not on a full preference read-back.

### 13.6 Restoration baseline

- The original Layout theme was **`Hi world`** (T1 §3.4, T2 §13.2). The current value is **`FX_HelloWorld`**. A later restore, if the operator wants one, would select `Hi world` once with OK; this record does not perform that.

### 13.7 Screenshot review (T2)

- `t2-01-user-preferences-layout-pre-change-theme-hi-world.png` (viewed): User Preferences Layout page; Theme `Hi world`; OK and Help only; runtime FX_Items behind the dialog. **Proves** the pre-change value. Does not prove the stored value (a read is not a storage check).
- `t2-02-theme-selection-fx-helloworld-before-ok.png` (viewed): Theme `FX_HelloWorld` in the combobox; other Layout controls unchanged; dialog still open; OK not yet clicked. **Proves** the selection before confirmation. Does not prove the OK result.
- `t2-03-web-client-after-ok-theme-response.png` (viewed): dialog closed; runtime FX_Items; status bar `OK (Object 1 of 1)`; Import button teal; Save disabled. **Proves** the visible response after OK: dialog closed and the Import button restyled. **Does not prove** that the teal colour comes from the `FX_BlueButton` class (the Designer class was not changed in T2; see §13.9).
- `t2-04-user-preferences-readback-layout-theme-fx-helloworld.png` (viewed): reopened dialog, Layout page, Theme `FX_HelloWorld`. **Proves** the displayed read-back after reopen. Does not prove storage beyond the same session.
- `t2-05-web-client-after-readback-dialog-dismissed-no-ok.png` (viewed): dialog closed; runtime FX_Items; Import button teal; Save disabled; no dialog. **Proves** the dismissal and the stable page state. Does not prove the × control made no change in storage beyond the read-back above.

### 13.8 Action audit (T2 incremental; exact) and cumulative T1–T2

| Action | T2 (incremental) | Cumulative T1–T2 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 2 |
| Browser tab selects (succeeded) | 1 (tab 1, Web Client) | 2 |
| Snapshots (explicit, untargeted) | 4 (after tab select; after dialog open; pre-OK; post-OK) | 7 |
| Finds | 7 (`User Preferences`; `sFormsDBThemeName`; `FX_HelloWorld`; `User Preferences` read-back; `Layout` read-back; `sFormsDBThemeName` read-back; `Close Window`) | 11 |
| Successful element clicks | 10 (View; User Preferences...; Layout; Theme Open; FX_HelloWorld option; OK; View; User Preferences...; Layout; Close Window ×) | 16 |
| Failed element clicks | 0 | 0 |
| Key presses / typing / hovers | 0 / 0 / 0 | 0 / 0 / 0 |
| Screenshots (worker-requested) | 5 (`t2-01` to `t2-05`) | 11 |
| User Preferences dialog opened | 2 | 3 |
| User Preferences closed with OK | **1** | **1** |
| User Preferences closed with × (no OK) | 1 | 2 |
| **User Preference OKs** | **1** (Layout theme only) | **1** |
| **User Preference changes** | **1** (Layout theme `Hi world` → `FX_HelloWorld`) | **1** |
| Other User Preference changes | 0 | 0 |
| **Theme edits / creates / saves** | **0 / 0 / 0** | **0 / 0 / 0** |
| Global Objects / Edit Styles opened | 0 | 0 |
| **Designer property changes (class or other)** | **0** | **0** |
| **Designer Saves** | **0** | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 |
| Runtime close / reopen | 0 / 0 | 0 / 0 |
| Runtime record changes / runtime Save | 0 / 0 | 0 / 0 |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Checkout, unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Navigate (direct URL), refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate, run-code; console or network inspection (worker) | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |

Notes: the Designer tab (tab 0) was not selected in T2. Snapshot and find output returned automatically after each click is tool output and is not counted in the explicit rows. The Playwright tool wrote its own snapshot and console files under `evidence/playwright/` (for example `page-2026-10-12T14-57-…`); these are tool-generated, not worker-requested.

### 13.9 Knowledge state (T2)

- Layout Theme combobox changed from `Hi world` to `FX_HelloWorld` with one selection and one OK; the dialog closed without error: **observed** (single run).
- Reopen read-back shows `FX_HelloWorld` in the same session: **observed** (single run). Persistence beyond the session is not verified.
- Runtime Import button is blue before the change (T1 `t1-06`) and teal after the change (`t2-03`, `t2-05`): **observed**. The cause is **unresolved**: the teal colour is close to the theme's Button Normal background `#FF5CC6C7` recorded in EXP-064, but the FX_RefreshButton class is still `BlueButton` (the class step was not run in T2), so the styling may come from the theme's general Button style rather than the `FX_BlueButton` class. Not claimed either way.
- Overlay observation: while the dialog is open the runtime Import button appears pale (dimmed by the dialog overlay); observed in `t2-01`, `t2-02`, `t2-04`.
- Nothing is replay_verified. No procedure is marked verified.

### 13.10 Worker-written file inventory (T2)

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (updated: status lines and this §13)
- `evidence/EXP-065/t2-01-user-preferences-layout-pre-change-theme-hi-world.png`
- `evidence/EXP-065/t2-02-theme-selection-fx-helloworld-before-ok.png`
- `evidence/EXP-065/t2-03-web-client-after-ok-theme-response.png`
- `evidence/EXP-065/t2-04-user-preferences-readback-layout-theme-fx-helloworld.png`
- `evidence/EXP-065/t2-05-web-client-after-readback-dialog-dismissed-no-ok.png`

No other file was written in T2. Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted. The T1 inventory (§8) is unchanged.

### 13.11 Acceptance matrix (T2 scope)

- **AC-2: met as observed.** Set once: `Hi world` → `FX_HelloWorld`, one OK, visible response (`t2-03`); read-back after reopen shows `FX_HelloWorld` (`t2-04`); no other preference control was changed (§13.5 limitation: other preference pages not re-read).
- **AC-7 (T2 part): met for the preference step.** No Designer change, no class change, no Save, no close/reopen, no dialog left open (`t2-05`, final state §13.12).
- **AC-3, AC-4, AC-5, AC-6, AC-8: not started in T2** (AC-8 final report pending later tasks).

### 13.12 Final state (T2)

- Web Client (tab 1, current): runtime `FX_Items`; Save disabled; no dialog; Import button teal.
- Layout theme: `FX_HelloWorld` (same session). Restoration baseline: `Hi world`.
- Web Designer (tab 0): untouched in T2; still `FX_Items` in the state recorded at T1 (clean; FX_RefreshButton Theme Class `BlueButton`).
- No browser-native dialog. No unsaved-change prompt.

### 13.13 Blockers

None in T2. The × dismissal is a deviation from the Cancel named in the brief (absence of Cancel recorded in T1 §6).

### 13.14 Next permitted step (not started; needs authorization)

- Class step (`BlueButton` → `FX_BlueButton` on FX_RefreshButton Appearance > Theme Class, one change), then one Designer Save, one Designer close/reopen (toolbar Open) and one runtime close/reopen. The Designer must be listed and selected first; first check whether `FX_BlueButton` appears in the Theme Class options (T1 Q1).

## 14. T3 — FX_RefreshButton Theme Class changed once; conditional Save not invoked (cycle 2, task T3; BLOCKER: dirty state unconfirmed)

### 14.1 Tabs and starting state

- Tab list (before any select): **2 tabs**: `0 (current) Designer (…/WSWebClient/designer/default.aspx)` and `1 Mongoose` (Web Client, `favoriteContext=FX_Items`). Same order as T2.
- Tab 0 (Designer) selected once (succeeded). Fresh untargeted snapshot: Designer; single Form tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar **Save disabled**, Regenerate Form, Undo and Redo disabled; Properties combo `FX_RefreshButton (Button)`; no dialog open.
- Web Client (tab 1) not selected or acted on in T3.

### 14.2 Pre-change Appearance state (read only)

- Appearance section visible (viewed `t3-01`): **Theme Class** = `BlueButton` (exact property label `Theme Class`; value shown in a dropdown). Background Color empty (expander); Foreground Color `#000000`; Bitmap File Name empty; Font empty; Justification empty.
- Canvas (viewed `t3-01`): Import button rendered light cyan with white text, selected (handles visible).
- Other Design fields unchanged in view: Name `FX_RefreshButton`; Caption `FX_sImport`; Type `PushButton`; From Device Master `True`.

### 14.3 Option check (read only, opened once)

- The Theme Class dropdown arrow was clicked once to open the list (no value chosen). The list (viewed `t3-02`) shows **one option: `FX_BlueButton`**, with the current text `BlueButton` highlighted. The exact target option is visibly available.

### 14.4 Class selection (once)

- Clicked the `FX_BlueButton` option once (one selection action).
- Immediate readback (viewed `t3-03`): Theme Class combo shows **`FX_BlueButton`**; dropdown closed; combo still shows an active border. Other Appearance values unchanged in view (Background Color empty; Foreground `#000000`; Bitmap File Name, Font and Justification empty). Design fields unchanged in view.
- Canvas (viewed `t3-03`): the Import button still renders light cyan, the same as before the change. The Designer canvas therefore does not visibly change for the class in this single observation (see §14.6).

### 14.5 Dirty-state check and Save decision (no Save)

- Fresh untargeted snapshot after the selection: toolbar **Save disabled**; Undo disabled; Regenerate Form disabled.
- Waited 3 seconds (read only), then a find for `Save`: toolbar Save still **disabled**.
- The brief permits the Designer Save only when the class change has made the Form dirty. The UI shows no dirty indication (Save and Undo disabled, no modified marker). **Save was not invoked. Zero Saves.**
- Because the Form is not reported dirty, it is unresolved whether the combo value `FX_BlueButton` is committed to the component model or only displayed in the property editor. Per the brief, the state was not forced: no blur click, no key press, no second selection, no Save, no close or reopen.

### 14.6 Blocker and interpretation (observed only)

- **Blocker:** conditional Save not reached because the Form is not reported dirty after the class selection. The "ambiguous value" stop rule applies: the combo displays `FX_BlueButton`, but the dirty flag, Undo stack and canvas do not reflect a change.
- Canvas does not visibly change between `BlueButton` (`t3-01`) and `FX_BlueButton` (`t3-03`) in this session. Whether the Designer canvas applies theme classes at all is not established (the T2 teal runtime change was observed in the Web Client, not in the Designer).
- No error message, no confirmation prompt and no browser-native dialog appeared.

### 14.7 Screenshot review (T3)

- `t3-01-designer-pre-change-appearance-theme-class-blue-button.png` (viewed): FX_Items; User scope footer; Save greyed; FX_RefreshButton selected; Theme Class `BlueButton`; canvas Import cyan. **Proves** the pre-change identity, scope, clean toolbar and class value. Does not prove the stored value beyond the display.
- `t3-02-theme-class-dropdown-open-fx-bluebutton-option-visible.png` (viewed): dropdown expanded with one option `FX_BlueButton`; combo text `BlueButton` highlighted. **Proves** the exact option exists in the native dropdown. Does not prove the selection.
- `t3-03-theme-class-readback-after-select-fx-bluebutton-canvas.png` (viewed): combo `FX_BlueButton`; Save and Undo greyed; canvas Import cyan; footer User scope. **Proves** the displayed readback after selection and the disabled Save/Undo. Does not prove a committed model value or that the canvas reflects the class.

### 14.8 Action audit (T3 incremental; exact) and cumulative T1–T3

| Action | T3 (incremental) | Cumulative T1–T3 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 3 |
| Browser tab selects (succeeded) | 1 (tab 0, Designer) | 3 |
| Snapshots (explicit, untargeted) | 2 (start; after selection) | 9 |
| Finds | 2 (`FX_BlueButton`; `Save`) | 13 |
| Successful element clicks | 2 (Theme Class dropdown arrow, expand; `FX_BlueButton` option, select) | 18 |
| Failed element clicks | 0 | 0 |
| Waits | 1 (3 seconds) | 1 |
| Key presses / typing / hovers | 0 / 0 / 0 | 0 / 0 / 0 |
| Screenshots (worker-requested) | 3 (`t3-01` to `t3-03`) | 14 |
| **Theme Class changes (FX_RefreshButton)** | **1** (`BlueButton` → `FX_BlueButton`; commit unconfirmed) | **1** |
| **Designer Saves** | **0** | **0** |
| Designer close / reopen | 0 / 0 | 0 / 0 |
| Runtime close / reopen | 0 / 0 | 0 / 0 |
| **User Preference OKs** | 0 | **1** (T2, Layout theme only) |
| **User Preference changes** | 0 | **1** (T2, Layout theme only) |
| Other preference / property / component changes | 0 | 0 |
| Theme edits / creates / saves | 0 / 0 / 0 | 0 / 0 / 0 |
| Global Objects / Edit Styles opened | 0 | 0 |
| Dialogs closed with × (no OK) | 0 | 2 (T1, T2 read-backs) |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Checkout, unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Navigate, refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate, run-code; console or network inspection | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |

Notes: snapshot and find output returned automatically after each click is tool output and not counted in the explicit rows. The Playwright tool wrote its own snapshot and console files under `evidence/playwright/` (for example `page-2026-10-12T15-00-…`), which are not worker-requested. The Web Client tab was not selected in T3.

### 14.9 Worker-written file inventory (T3)

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (updated: status line and this §14)
- `evidence/EXP-065/t3-01-designer-pre-change-appearance-theme-class-blue-button.png`
- `evidence/EXP-065/t3-02-theme-class-dropdown-open-fx-bluebutton-option-visible.png`
- `evidence/EXP-065/t3-03-theme-class-readback-after-select-fx-bluebutton-canvas.png`

No other file was written in T3. Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted. The T1 and T2 inventories (§8, §13.10) are unchanged.

### 14.10 Final state (T3)

- Web Designer (tab 0, current): `FX_Items`, User scope, FX_RefreshButton selected; Theme Class combo shows `FX_BlueButton` (dropdown closed); toolbar Save and Undo disabled; no dialog open. The class value's commit is **unresolved**.
- Web Client (tab 1): not acted on in T3; last state from T2 (runtime `FX_Items`, Layout theme `FX_HelloWorld`, no dialog).
- Form was not closed or reopened.

### 14.11 Knowledge state (T3)

- The Theme Class dropdown of FX_RefreshButton lists exactly one option, `FX_BlueButton`: **observed** (single view).
- Selecting `FX_BlueButton` changes the combo readback to `FX_BlueButton`: **observed** (single run).
- Designer toolbar Save/Undo remain disabled after the selection and after a 3-second wait: **observed**; cause **unresolved** (possible: the property editor applies the value on blur, the Designer does not mark the class change dirty, or the change is not stored).
- Designer canvas Import button is cyan before and after the change: **observed**; whether the canvas applies theme classes is **unresolved**.
- Nothing is replay_verified.

### 14.12 Open questions and next step (not started; needs operator decision)

- **Q5.** Is the `FX_BlueButton` selection committed? The brief's stop rule applies because the dirty state is unconfirmed. Possible next step, only with operator approval: a single focus-out (for example a Tab press from the combo) followed by a fresh check of Save; a Save is then permitted only if Save becomes enabled. Not done in T3.
- **Q6.** Does the Designer canvas reflect the Theme Class? In the Web Client the teal runtime change followed the Layout theme (T2), not the Designer class.
- **Next permitted step (needs authorization):** resolve Q5 under the brief's dirty-state rule, then either one Designer Save (only if Save becomes enabled) or stop and report. Then the Designer close/reopen, the readback, and the runtime close/reopen.

### 14.13 Blockers

- Dirty-state / commit ambiguity for the Theme Class change (§14.5–§14.6). No retry, no Save, no close or reopen performed.
- **Resolved in T4 (§15).**

## 15. T4 — Theme Class commit resolved by one focus-out; one Designer Save (cycle 3, task T4; AC-3 and AC-4 met as observed)

### 15.1 Tabs and starting state

- Tab list (first action of T4): **2 tabs**: `0 (current) Designer (…/WSWebClient/designer/default.aspx)` and `1 Mongoose` (Web Client). No tab selection was needed; the Designer remained current.
- Fresh untargeted snapshot (before any action): Designer; single Form tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; FX_RefreshButton selected (Properties combo `FX_RefreshButton (Button)`); Theme Class **combo active and displaying `FX_BlueButton`** (focus still in the editor); toolbar **Save disabled**; Undo disabled. This matched the brief's starting state, so the step proceeded.

### 15.2 Focus-out (one Tab key press)

- Exactly **one** Tab key press with the Theme Class editor focused. No click on another property or component; no value altered; no second selection.
- Immediate state (viewed `t4-01-after-single-tab-focus-out-theme-class-save-state.png`):
  - Theme Class reads **`FX_BlueButton`** (no longer an open editor).
  - Toolbar **Save enabled** and **Undo enabled** (both icons dark). Redo disabled.
  - Canvas Import button now renders **blue** (it was light cyan before the focus-out in T3 `t3-01`/`t3-03`).
  - Other Appearance values unchanged in view: Background Color empty; Foreground Color `#000000`; Bitmap File Name, Font and Justification empty. Design fields unchanged in view.
- Interpretation (observed): the Theme Class value was committed to the component on focus-out, which also set the Form dirty. The T3 "Save disabled" reading was therefore before commit, not a failed change.

### 15.3 Native Save (one invocation)

- A fresh untargeted snapshot confirmed the state above (Save enabled, Theme Class `FX_BlueButton`, FX_Items User scope).
- **One click on the native Designer top-toolbar Save** (the toolbar icon, not the Form tab or the Form menu). No other control was clicked and the Save was not repeated.
- **Native response (verbatim, from the toast; viewed `t4-02`):** heading `Save`; body `Form [FX_Items] and global object(s) were saved.` The toast has a `Close` button; it is a notification, not a modal dialog. It was not clicked and was left in place.
- Immediately after (find and viewed `t4-02`): toolbar **Save disabled**; Undo disabled (its icon greyed); Theme Class `FX_BlueButton`; canvas Import blue; footer User scope.
- Tooltip `Save` was visible over the toolbar in `t4-02` (hover tooltip from the pointer position, not an action).

### 15.4 Screenshot review (T4)

- `t4-01-after-single-tab-focus-out-theme-class-save-state.png` (viewed): FX_Items; User scope footer; Theme Class `FX_BlueButton`; Save and Undo enabled (dark); canvas Import blue; FX_RefreshButton selected. **Proves** that the focus-out committed the value and made the Form dirty, with the canvas now blue. Does **not** prove that the stored model value is persisted; that needs the Save and reopen.
- `t4-02-designer-immediately-after-single-save-native-response.png` (viewed): toast `Save — Form [FX_Items] and global object(s) were saved.`; toolbar Save greyed (find confirms `disabled`); Undo greyed; Theme Class `FX_BlueButton`; canvas Import blue; User scope footer. **Proves** the native save response and the post-Save disabled Save state, and the class as displayed after Save. Does **not** prove the database persistence beyond the native acknowledgement; the close/reopen (not run in T4) is the persistence check.

### 15.5 Action audit (T4 incremental; exact) and cumulative T1–T4

| Action | T4 (incremental) | Cumulative T1–T4 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 4 |
| Browser tab selects | 0 | 3 |
| Snapshots (explicit, untargeted or targeted) | 3 (start; targeted Save ref; pre-Save untargeted) | 12 |
| Finds | 3 (`Save` pre-Save; `saved` native response; `Save` post-Save) | 16 |
| Successful element clicks | 1 (native toolbar Save) | 19 |
| Failed element clicks | 0 | 0 |
| Waits | 0 | 1 |
| Key presses | 1 (single Tab, focus-out) | 1 |
| Typing / hovers | 0 / 0 | 0 / 0 |
| Screenshots (worker-requested) | 2 (`t4-01`, `t4-02`) | 16 |
| **Theme Class changes (FX_RefreshButton)** | **0** (the T3 change was committed by focus-out; not re-selected) | **1** |
| **Designer Saves** | **1** (native toolbar Save; response recorded) | **1** |
| Designer close / reopen | 0 / 0 | 0 / 0 |
| Runtime close / reopen | 0 / 0 | 0 / 0 |
| **User Preference OKs** | 0 | **1** (T2, Layout theme only) |
| **User Preference changes** | 0 | **1** (T2, Layout theme only) |
| Other preference / property / component changes | 0 | 0 |
| Theme edits / creates / saves | 0 / 0 / 0 | 0 / 0 / 0 |
| Global Objects / Edit Styles opened | 0 | 0 |
| Dialogs closed with × (no OK) | 0 | 2 (T1, T2 read-backs) |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Checkout, unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Navigate, refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate, run-code; console or network inspection | 0 | 0 |
| Coordinate clicks, drag, drop | 0 | 0 |

Notes: the tool wrote its own snapshot, console and find-result files under `evidence/playwright/` and tool output; these are not worker-requested and are not counted. The `Close` button of the Save toast was not clicked.

### 15.6 Worker-written file inventory (T4)

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (updated: status line, T3 status superseded, this §15)
- `evidence/EXP-065/t4-01-after-single-tab-focus-out-theme-class-save-state.png`
- `evidence/EXP-065/t4-02-designer-immediately-after-single-save-native-response.png`

No other file was written in T4. The T1–T3 inventories (§8, §13.10, §14.9) are unchanged.

### 15.7 Final state (T4)

- Web Designer (tab 0, current): `FX_Items`, User scope, **clean** (Save disabled); FX_RefreshButton selected; Theme Class `FX_BlueButton`; canvas Import blue; the Save toast is visible at the top right (notification; not a dialog). Form not closed or reopened.
- Web Client (tab 1): not selected in T4; last state from T2 (runtime `FX_Items`, Layout theme `FX_HelloWorld`, no dialog open).
- Restoration baselines: Layout theme `Hi world`; Theme Class `BlueButton` (the Theme Class change is now a saved Form change, so restoring would be a further Save).

### 15.8 Knowledge state (T4)

- Tab focus-out after selecting `FX_BlueButton` commits the Theme Class value and enables Save and Undo: **observed** (single run).
- The Designer canvas Import button changes from light cyan to blue after the commit: **observed** (single run). Whether the canvas colour comes from the `FX_BlueButton` class is **unresolved** (it is consistent with the class; not proven).
- Native Designer toolbar Save on the Form produces the toast `Save — Form [FX_Items] and global object(s) were saved.` and leaves Save disabled: **observed** (single run).
- Persistence of the class beyond the Save acknowledgement is **unverified** until the T5 Designer close/reopen.
- Nothing is replay_verified.

### 15.9 Open questions and next step (not started; needs authorization)

- **Q7.** Does the class persist across a Designer close/reopen? (T5, Designer close via the clean-Form close, then one toolbar Open of FX_Items; verify Name, User scope and FX_RefreshButton Theme Class `FX_BlueButton`.)
- **Q8.** Does the runtime Import button show the class styling after the runtime close/reopen (T6)? The runtime Import button was teal after the Layout theme change in T2 and is the observation point.
- **Next permitted step (needs authorization):** T5 — one Designer close (clean, no prompt) and one reopen through the toolbar Open button; verify the class; then T6 — one runtime close/reopen through Form > Open > Select Form and record the Import button styling.

### 15.10 Blockers

None in T4. The earlier T3 blocker (commit ambiguity) is resolved by the single focus-out (§15.2).

## 16. T5 — Designer Form close and reopen (cycle 4, task T5; AC-5 partly met; Theme Class readback blocked)

### 16.1 Tabs and starting state

- Tab list (first action of T5): **2 tabs**: `0 (current) Designer` (`…/designer/default.aspx`) and `1 Mongoose` (Web Client, `favoriteContext=FX_Items`). Designer remained current; the Web Client was not selected.
- Fresh untargeted snapshot (before any close): Designer; single Form tab `FX_Items`; footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; Properties `FX_RefreshButton (Button)`, Appearance > Theme Class **`FX_BlueButton`** (committed in T4); toolbar **Save disabled**; Undo disabled; no modal dialog. The starting state matched the brief, so the close proceeded.

### 16.2 Form close (once)

- **One click** on the Form-tab close control (named `closable FX_Items` in the accessibility tree, the `×` at the right of the FX_Items tab), not the browser tab.
- **No unsaved-changes prompt appeared.** Result (viewed `t5-01-designer-after-form-tab-close-result.png`): the FX_Items tab is gone; the canvas is empty; Properties panel empty (no Form selected); toolbar Save and Undo disabled; footer still `User / anton.ramos@3mworks.com.ph`. A find for `FX_Items` returned no match, consistent with the Form being closed.

### 16.3 Reopen route (once)

- The Designer toolbar **Open** control is the first toolbar icon (folder-open glyph at the top-left toolbar). **The accessibility tree gives it no name** (fresh snapshot and a find for `Open` returned nothing usable), so the reopen used a **single coordinate click** at the icon's visible position. A prior mouse hover at the same position produced **no tooltip** (`t5-02`); the glyph was identified visually only.
- The click opened the native **Select Form** dialog (`t5-03-native-open-selection-interface-after-toolbar-open.png`, viewed): caption `Select Form`; one row, Caption `FX_Items`, Name `FX_Items`; Filter `FX_Items`, Filter By `Name`; footer `User` scope (`[ ScopeType: User … ]`). Only one row was offered, so the intended Form was unambiguous. No other Form was selected.
- One click on **OK** (ref from a fresh untargeted snapshot). The dialog closed and the Designer loaded `FX_Items` (URL changed to `designer/default.aspx?MGForm=FX_Items`).

### 16.4 Reopened Form identity, scope and clean state (observed)

- Form tab `FX_Items` (single tab, selected). Properties (Form tab): Name `FX_Items`; Description empty; Caption empty; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Toolbar Save **disabled**; Undo **disabled**; Redo disabled. No dialog open.
- Canvas (`t5-04`, `t5-05`, viewed): the **Import button renders blue** (T4 post-Save render), with the grid and other components as before. Static picture placeholder present.
- Evidence: `t5-04-designer-reopened-fx-items-form-tab-identity-scope-clean.png` (identity, scope, clean state) and `t5-05-designer-reopened-visible-inspection-import-selection-blocked.png`.

### 16.5 Theme Class readback after reopen — BLOCKED (not obtained)

- To read `FX_RefreshButton > Appearance > Theme Class`, the component must be selected. One **click on the canvas Import button** (its accessibility node carries `data-mgcompnamevalue="FX_RefreshButton"`, a read-back confirmation of target identity) **timed out** after 5000 ms: "element … intercepts pointer events" from a `compadorner-…` (adorner) overlay; retries did not clear it.
- Recovery: **one fresh untargeted snapshot** (Form tab still selected; no component selected; Properties shows Form-level Design/Appearance/Behavior/Help/Layout only) and **one corrected visible inspection** (`t5-05`, viewed: no component selected; no adorner visible on the Import button). Per the brief's limit, no further selection attempt was made.
- **Result: the Theme Class readback after reopen was not obtained in T5.** The class persistence across close/reopen is therefore **unverified** for this session. The reopened canvas (Import blue) is consistent with the saved class styling, but the canvas colour is not proof of the class value (see §15.8).

### 16.6 Screenshot review (T5)

- `t5-01-designer-after-form-tab-close-result.png` (viewed): FX_Items tab gone; empty canvas; Save and Undo disabled; User scope footer. **Proves** the Form closed with no prompt. Does not prove the stored state.
- `t5-02-designer-toolbar-open-icon-hover-tooltip-check.png` (viewed): empty Designer after hover at the Open icon; no tooltip visible. **Proves** that no tooltip identifies the icon. Does not prove the icon's action (the click result is in `t5-03`).
- `t5-03-native-open-selection-interface-after-toolbar-open.png` (viewed): Select Form dialog; one row FX_Items; Filter FX_Items; OK / Cancel / Help; User scope footer. **Proves** the reopen route and that only one Form matched. Does not prove the Form loaded (see `t5-04`).
- `t5-04-designer-reopened-fx-items-form-tab-identity-scope-clean.png` (viewed): FX_Items Form tab; Name, Form Type Normal, Is Master True in Form properties; User scope footer; Save and Undo greyed; Import button blue. **Proves** the reopened Form identity, User scope and clean state. Does **not** prove the Theme Class value (component not selected).
- `t5-05-designer-reopened-visible-inspection-import-selection-blocked.png` (viewed): same Form state; no component selected; no adorner on the Import button. **Proves** the Form-level state after the timed-out selection. Does not prove the Theme Class.

### 16.7 Action audit (T5 incremental; exact) and cumulative T1–T5

| Action | T5 (incremental) | Cumulative T1–T5 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 5 |
| Browser tab selects | 0 | 3 |
| Snapshots (explicit `browser_snapshot`, untargeted) | 5 (start; after close; before reopen; after Select Form OK; after timed-out click) | 17 |
| Finds | 2 (`FX_Items` after close; `Open`) plus 1 (`Import` after reopen) = 3 | 19 |
| Successful clicks | 3 (Form-tab close; toolbar Open icon by coordinate; Select Form OK) | 22 |
| Failed clicks | 1 (Import canvas click: TimeoutError, adorner intercepts) | 1 |
| Mouse moves / hovers | 1 (hover at Open icon; no tooltip) | 1 |
| Coordinate clicks | 1 (Open icon) | 1 |
| Key presses / typing | 0 / 0 | 1 / 0 |
| Waits | 0 | 1 |
| Screenshots (worker-requested) | 5 (`t5-01` to `t5-05`) | 21 |
| Designer Form close (clean, no prompt) | **1** | **1** |
| Designer Form reopen via toolbar Open (Select Form OK) | **1** | **1** |
| Select Form dialog opened / closed with OK | 1 / 1 | 1 / 1 |
| **Designer Saves** | **0** | **1** (T4) |
| **Theme Class changes** | **0** | **1** (T3 selection, committed in T4) |
| **User Preference OKs / changes** | 0 / 0 | 1 / 1 (T2, Layout theme only) |
| Other preference / property / component changes | 0 | 0 |
| Theme edits / creates / saves | 0 / 0 / 0 | 0 / 0 / 0 |
| Global Objects / Edit Styles opened | 0 | 0 |
| Runtime close / reopen | 0 / 0 | 0 / 0 |
| Dialogs closed with × (no OK) | 0 | 2 (T1, T2 read-backs) |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Checkout, unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Navigate, refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate, run-code; console or network inspection | 0 | 0 |

Notes: the failed canvas click is counted separately (failed clicks, 1). The coordinate click on the Open icon is also counted under successful clicks (3). The tool wrote its own snapshot, console and find files under `evidence/playwright/`; these are tool output and are not counted.

### 16.8 Worker-written file inventory (T5)

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (updated: status line and this §16)
- `evidence/EXP-065/t5-01-designer-after-form-tab-close-result.png`
- `evidence/EXP-065/t5-02-designer-toolbar-open-icon-hover-tooltip-check.png`
- `evidence/EXP-065/t5-03-native-open-selection-interface-after-toolbar-open.png`
- `evidence/EXP-065/t5-04-designer-reopened-fx-items-form-tab-identity-scope-clean.png`
- `evidence/EXP-065/t5-05-designer-reopened-visible-inspection-import-selection-blocked.png`

No other file was written in T5. Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted.

### 16.9 Final state (T5)

- Web Designer (tab 0, current): `FX_Items` reopened (single Form tab), User scope, clean (Save and Undo disabled), no component selected, Form-level Properties shown, no dialog open. The Save toast from T4 is no longer visible.
- Web Client (tab 1): not selected or acted on in T5; last state from T2 (runtime `FX_Items`, Layout theme `FX_HelloWorld`, no dialog).
- Theme Class: last known value `FX_BlueButton` (T4 Save); **post-reopen readback not obtained**.

### 16.10 Knowledge state (T5)

- Form-tab close of a clean Form with no unsaved-changes prompt: **observed** (single run).
- Toolbar Open icon (unnamed, first toolbar icon) opens the native Select Form dialog listing only FX_Items for the filter FX_Items: **observed** (single run). The icon's identity was confirmed visually only (no tooltip).
- Reopened Form shows Name `FX_Items`, User scope footer, Save and Undo disabled: **observed** (single run). This is same-session evidence only.
- Import button renders blue after reopen: **observed** (single run). Not proof of the class value.
- Selecting the canvas Import button is blocked by an adorner overlay (pointer interception): **observed** (single run); cause **unresolved**.
- Theme Class persistence across close/reopen: **unresolved** (not read).
- No cross-session or database durability is claimed. Nothing is replay_verified.

### 16.11 Blockers and next step

- **Blocker (T5):** Theme Class readback after reopen not obtained: the canvas selection of FX_RefreshButton timed out on an adorner overlay; one fresh snapshot and one visible inspection did not establish a selection. Per the brief, no retry and no Save, close or reopen.
- **Next permitted step (needs your decision):** either (a) a coordinate-based selection of the Import button (one attempt) or a Designer component-tree route to read `FX_RefreshButton > Appearance > Theme Class` (read-only; no value change), then the T6 runtime close and reopen; or (b) stop the experiment here with AC-5 recorded as partly met. The Web Client runtime close/reopen (T6) has not been started.
- **Resolved by T6 (§17):** the runtime close/reopen was run; the Designer Theme Class readback remains open (AC-5 partly met).

## 17. T6 — Web Client runtime FX_Items close and reopen; Import button appearance observed (cycle 5, task T6; AC-6 met as observed; AC-5 still partly met)

### 17.1 Tabs and starting state

- Tab list (first action of T6): **2 tabs**: `0 Designer` (`…/designer/default.aspx?MGForm=FX_Items`) and `1 (current) Mongoose` (Web Client, `favoriteContext=FX_Items`) — the Designer was not current at the list.
- Tab 1 (Web Client) selected once (succeeded). Fresh untargeted snapshot: runtime `FX_Items` (single Form tab, selected); records 1 `dumbbell`, 2 `eggs`, 3 `guitar`; toolbar Save **disabled**; no modal dialog; no unsaved-record state visible. A `New` tooltip was showing from an earlier pointer position (not a T6 action).
- Designer (tab 0) not selected or acted on in T6. Its state is the T5 final state (§16.9).

### 17.2 Pre-close Import button baseline (read only)

- Screenshot `t6-01-runtime-pre-close-import-button-baseline.png` (viewed): runtime `FX_Items`; Import button **teal** (light teal fill, white text, the same appearance as the T2 post-OK screenshot `t2-03`); Save greyed; the status bar shows only `en-US` (no focus text). No value change was observed.

### 17.3 Runtime Form close (once)

- One click on the runtime Form-tab close control `Close Panel FX_Items` (the `×` at the right of the FX_Items tab).
- **No unsaved-changes or discard prompt appeared** (`find` for `Unsaved` returned no match). Result (viewed `t6-02-runtime-after-form-tab-close-result.png`): the FX_Items tab is gone; the workspace is empty; the toolbar shows the Explorer-level icons (Save greyed); no dialog open.

### 17.4 Reopen route (once): Form > Open > Select Form

- Fresh untargeted snapshot (Form tab closed, no dialog). One click on the **Form** menu button (`f1e10`) opened the Form menu: items `Open`, `Close and Save Changes` (disabled), and further items.
- One click on the **Open** menu item (`f1e243`). The **Select Form** dialog opened (viewed `t6-03-runtime-form-open-submenu-select-form-route.png`): caption `Select Form`; one row, Caption `FX_Items`, Name `FX_Items`; Filter `FX_Items`; Filter By `Name`; OK / Cancel / Help. The target was unambiguous (one row), so no alternative was considered.
- One click on **OK** (`f1e338`, a find on the current open dialog). The dialog closed and the runtime `FX_Items` Form loaded.

### 17.5 Reopened runtime identity and Import button appearance (observed)

- Screenshot `t6-04-runtime-reopened-fx-items-import-button-appearance.png` (viewed): Form tab `FX_Items`; records as before (`dumbbell`, `eggs`, `guitar`); the Import button is **teal** (same fill colour and white label as `t6-01` and `t2-03`). Save greyed. A find confirms Save `[disabled]`. Status bar `Description (Object 1 of 3)`.
- The **Description** field shows focus with its text selected (`45 pound iron`). This is the form's default focus on open; no key press or typing was performed by the worker and no value was changed.
- No modal dialog remains open after the OK (the Select Form dialog is gone).

### 17.6 Appearance comparison (observed only; no cause assigned)

- Pre-close runtime Import button (`t6-01`): teal.
- Reopened runtime Import button (`t6-04`): teal. **No change** across the close/reopen.
- T2 post-Layout-OK runtime Import button (`t2-03`, `t2-05`): teal. T1 pre-theme runtime Import button (`t1-06`, Layout theme `Hi world`): blue.
- Designer canvas Import button, same session: **blue** after the Theme Class commit (`t4-02`) and after the Designer reopen (`t5-04`, `t5-05`). Before the class commit the Designer canvas Import was cyan (`t3-01`, `t3-03`).
- Observation: the **runtime** Import button is teal while the **Designer canvas** Import button is blue. The two surfaces differ in this session. The cause of the runtime colour is not established by this step; the T2 change in the runtime colour followed the Layout theme preference (`Hi world` → `FX_HelloWorld`), and the Theme Class readback after the Designer reopen was not obtained (§16.5). **No claim is made that `FX_BlueButton` produces the teal runtime colour.**

### 17.7 Screenshot review (T6)

- `t6-01-runtime-pre-close-import-button-baseline.png` (viewed): runtime FX_Items; Import teal; Save greyed; no dialog. **Proves** the pre-close runtime appearance. Does not prove the stored class.
- `t6-02-runtime-after-form-tab-close-result.png` (viewed): the FX_Items tab gone; empty workspace; no dialog. **Proves** the Form closed with no prompt. Does not prove the stored state.
- `t6-03-runtime-form-open-submenu-select-form-route.png` (viewed): Select Form dialog listing one FX_Items row; Filter FX_Items; User-scope context not displayed in this dialog (the Designer footer is not present in the runtime view). **Proves** the route and the single candidate. Does not prove the scope footer for this dialog.
- `t6-04-runtime-reopened-fx-items-import-button-appearance.png` (viewed): runtime FX_Items reopened; records; Import teal; Save greyed. **Proves** the reopened runtime identity and the Import appearance as observed. Does **not** prove the cause of the colour or the class value.

### 17.8 Action audit (T6 incremental; exact) and cumulative T1–T6

| Action | T6 (incremental) | Cumulative T1–T6 |
| --- | --- | --- |
| Browser tab lists (explicit) | 1 | 6 |
| Browser tab selects (succeeded) | 1 (tab 1, Web Client) | 4 |
| Snapshots (explicit `browser_snapshot`) | 2 (after select; after close) | 19 |
| Finds | 6 (`Unsaved`; `Select Form`; `Open`; `OK`; `Import`; `Save`) | 25 |
| Successful clicks | 4 (Form-tab close; Form menu; Open menu item; Select Form OK) | 26 |
| Failed clicks | 0 | 1 (T5 canvas Import) |
| Hovers / coordinate clicks / key presses / typing | 0 / 0 / 0 / 0 | 1 / 1 / 1 / 0 |
| Waits | 0 | 1 |
| Screenshots (worker-requested) | 4 (`t6-01` to `t6-04`) | 25 |
| **Runtime Form close (clean, no prompt)** | **1** | **1** |
| **Runtime Form reopen (Form > Open > Select Form)** | **1** | **1** |
| Select Form dialog opened / closed with OK | 1 / 1 | 2 / 2 |
| Runtime record changes / runtime Save | 0 / 0 | 0 / 0 |
| Import button activations | 0 | 0 |
| **User Preference OKs / changes** | 0 / 0 | **1 / 1** (T2, Layout theme only) |
| **Theme Class changes** | 0 | **1** (T3 selection, committed in T4) |
| **Designer Saves** | 0 | **1** (T4) |
| Designer close / reopen | 0 / 0 | 1 / 1 (T5) |
| Theme edits / creates / saves | 0 / 0 / 0 | 0 / 0 / 0 |
| Global Objects / Edit Styles opened | 0 | 0 |
| Other preference / property / component changes | 0 | 0 |
| Dialogs closed with × (no OK) | 0 | 2 (T1, T2 read-backs) |
| Top-toolbar `Delete Form Definition` clicks | 0 | 0 |
| Checkout, unload, cache, FormSync, deployment, regeneration | 0 | 0 |
| Navigate, refresh, restart, reauthentication | 0 | 0 |
| Browser JavaScript, evaluate, run-code; console or network inspection | 0 | 0 |

Notes: the Designer tab (tab 0) was not selected in T6 and no Designer action was taken; the T6 instruction forbade further Designer component-selection attempts and a repeat Designer close/reopen, and neither was done. Snapshot and find output returned automatically after each click is tool output and not counted in the explicit rows. The Playwright tool wrote its own snapshot and console files under `evidence/playwright/`; these are not worker-requested. The `New` tooltip visible at the start of T6 was from an earlier pointer position, not a T6 action.

### 17.9 Worker-written file inventory (T6)

- `experiments/EXP-065-hello-world-part-4-section-6b-apply-theme-and-button-class.md` (updated: T6 status line, the T5 status line, the T5 "Next permitted step" resolution note, and this §17)
- `evidence/EXP-065/t6-01-runtime-pre-close-import-button-baseline.png`
- `evidence/EXP-065/t6-02-runtime-after-form-tab-close-result.png`
- `evidence/EXP-065/t6-03-runtime-form-open-submenu-select-form-route.png`
- `evidence/EXP-065/t6-04-runtime-reopened-fx-items-import-button-appearance.png`

No other file was written in T6. Playwright snapshot and console files under `evidence/playwright/` are tool output and are not counted. The T1–T5 inventories (§8, §13.10, §14.9, §15.6, §16.8) are unchanged.

### 17.10 Final browser state (T6)

- **Web Client (tab 1, current):** runtime `FX_Items` reopened (single Form tab), records loaded, Import teal, **Save disabled**, Description field focused with text selected (no edit), **no modal dialog**, no unsaved-change prompt. The Form is left open and clean, as the brief requires.
- **Web Designer (tab 0):** not acted on in T6. Last state from T5: `FX_Items` reopened, User scope, clean (Save and Undo disabled), no component selected, no dialog open. Theme Class value after the Designer reopen **not read**.
- Layout theme (Web Client preference): `FX_HelloWorld` (set in T2; restoration baseline `Hi world`).
- FX_RefreshButton Theme Class (Designer): last committed value `FX_BlueButton` (T4 Save); restoration baseline `BlueButton`.

### 17.11 Knowledge state (T6)

- Runtime Form-tab close of a clean FX_Items with no prompt: **observed** (single run).
- Form > Open > Select Form reopens FX_Items (single candidate row): **observed** (single run).
- Runtime Import button remains teal across the close/reopen: **observed** (single run; same session).
- Runtime Import teal vs Designer canvas blue in the same session: **observed**; cause **unresolved**.
- AC-5 Theme Class readback after the Designer reopen: **unresolved** (not obtained; §16.5).
- No cross-session or database durability claimed. Nothing is replay_verified.

### 17.12 Deviations, blockers and open questions

- **Deviation (disclosed):** the Select Form OK was clicked using a find-returned ref from the same open dialog (not an untargeted snapshot taken immediately before). The click succeeded and no ref error occurred.
- **Deviation (disclosed):** the runtime status bar text differed from T2's `OK (Object 1 of 1)`; the reopened Form shows `Description (Object 1 of 3)`. This is focus-state text, not a value change.
- **No blocker in T6.**
- **Open (AC-5):** the Designer Theme Class readback after reopen is still not obtained. A future task, with operator approval, would need a read-only Designer route to `FX_RefreshButton > Appearance > Theme Class` (not attempted in T6 by instruction).
- **Open:** the runtime (teal) and Designer canvas (blue) Import colours differ in this session; the cause is unresolved.
- **Restoration baselines:** Layout theme `Hi world`; FX_RefreshButton Theme Class `BlueButton`.

## 18. T7 — Final acceptance report (documentation only; zero browser calls)

- Final report: `evidence/EXP-065/T7-final-report.md` (acceptance matrix AC-1 to AC-8, reconciled audit, deviations D1–D9, unresolved items U1–U8, restoration baselines, worker-written file inventory, final browser state).
- Outcome: **BLOCKED at AC-5**. AC-5 FAILED: the Designer Theme Class readback after the Designer reopen was not obtained. Not claimed as lost or persisted.
- Cumulative browser actions (T1–T6): tab lists 6; tab selects 4; snapshots 19; finds 25; screenshots 25; successful element clicks 25; successful coordinate click 1; failed click 1; Tab key 1; hover 1; wait 1.
- Reconciled to the six controller audits: 33 interaction actions and 76 read-only calls, matching the worker tables exactly.
- State changes: 1 Layout-theme OK; 1 Theme Class change; 1 Designer Save; 1 Designer close/reopen; 1 runtime close/reopen; 0 theme edits; 0 other edits.
- Worker-written files in T7: `evidence/EXP-065/T7-final-report.md` (new) and this record (updated).

## Outcome (operator, 2026-10-12)

Accepted under amendment. Hello World Part 4 section 6 is complete. Operator call under the standing authorization of 2026-10-11.

- Run R-20261012-225328-o9Fr completed as blocked at AC-5 after 7 worker tasks.
  - After the Designer close/reopen, selecting FX_RefreshButton timed out because a canvas adorner intercepted pointer events. The post-reopen Theme Class readback was therefore not obtained.
- Amendment: AC-5 is accepted on the stronger runtime evidence. The runtime Form was closed and reopened after the Designer Save, and it renders the Import button with the FX_BlueButton Normal colours. That rendering requires both the saved class and the FX_HelloWorld theme. The Designer readback itself remains unobtained.
- Screenshots viewed by the operator assistant:
  - `t3-03`: Properties shows FX_RefreshButton (Button), Caption FX_sImport, Appearance > Theme Class `FX_BlueButton`, and the canvas Import button teal.
  - `t4-02`: after the single Designer Save, the native toast reads "Form [FX_Items] and global object(s) were saved." Status bar: ScopeType User, ScopeName = operator.
  - `t5-05`: the reopened Designer shows FX_Items in User scope and clean. The canvas renders the Import button in the default blue; this Designer view does not render the theme class.
  - `t6-04`: the reopened runtime FX_Items shows the Import button teal (#5CC6C7) with white text, next to the dumbbell picture.
    - Its Description field has focus with its text selected; no edit was made and Save is disabled.
- Baseline, for restoring later:
  - Layout theme `Hi world`. It is now `FX_HelloWorld`.
  - FX_RefreshButton Theme Class `BlueButton`, the operator's own manual class. It is now `FX_BlueButton`.
  - `Hi world` and `BlueButton` are the operator's own objects; the factory left them unchanged.
- Confinement (git status): only `evidence/EXP-065/` and this record were written by the run.
- Findings (observed):
  - The Layout theme combobox has the accessible label `sFormsDBThemeName:`. It applies on OK, without a refresh.
  - The Theme Class is under Appearance in the button's Properties.
  - A Form Save with theme changes reports "Form [FX_Items] and global object(s) were saved."
  - The runtime picks up the new class after a plain runtime close/reopen, with no unload.
  - The Designer toolbar Open icon has no accessible name; the worker used a coordinate click.
  - After a Designer reopen, a canvas adorner can intercept component selection. Selecting through the Properties component dropdown is a candidate alternative, untested.
