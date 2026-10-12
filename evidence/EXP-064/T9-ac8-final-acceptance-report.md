# EXP-064 — Final acceptance report (T9, documentation-only)

Run `R-20261012-220326-Rdi0`, cycle 10, task T9. Worker session `2951d40c-6eba-43f3-948f-b93d203979b6`, task_message_id `09a7c527-25a1-4c0e-a00f-01d7ebff9ed6`.

**Scope of this task:** documentation only. **Zero browser calls** were made in T9. No application state was changed. Only the EXP-064 record and this report were written.

**Recommendation (summary):** **ACCEPTED as observed** (single run, same-session recovery only, not replay-verified), **conditional** on the operator acknowledging the qualifications in §6 — most importantly that the theme commit used the Designer top-toolbar Save under the T7 operator exception, and that the "Edit Themes" command is visibly labelled "Theme".

---

## 1. Sources reviewed

- Experiment record: `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` (sections 1–19 read by heading and by the T1–T8 sections written in this run).
- Controller audits (harness-generated, not worker prose): `evidence/EXP-064/harness-audit-T1.md` … `harness-audit-T8.md`. Read in full in T9 and used to reconcile counts (§5).
- Per-task screenshot descriptions recorded in the experiment record (§§3, 13–19). Each screenshot was viewed in its originating task. **In T9 the PNG files were not re-opened**; descriptions below rely on those originating-task observations.
- Source tutorial: `docs/mongoose/transcripts/hello-world-pt4.md` Section 6 (05:51–07:29), read in T1.
- `AGENTS.md`, read in T1.

## 2. Acceptance matrix

Each row gives the decisive existing evidence, what was actually observed, and the limitations. Status is **observed**; no check is replay-verified.

### AC-1 — Sources reviewed; session usable; Designer tab, open Form and dirty state; Edit Themes label and route; original theme list (no FX_HelloWorld)

- **Status:** met as observed, **with one label discrepancy**.
- **Evidence:** tab lists (record §3.1, §13.1, §14.1 … §19.2); `t1-01` (Web Client baseline), `t1-02` (Designer, FX_Items, Save disabled), `t1-03` (View menu: only User Preferences, Diagnostics), `t1-05` (Global Objects, original 10 themes), `t2-01` (same 10 before create).
- **Observed:** session usable, no challenge or sign-in at any task start. At T1 start there was one Web Client tab. The Web Designer was then launched (disclosed deviation, §2 below) and became tab 1 in T1, tab 0 later. The Designer open Form was **FX_Items, clean** (Save, Regenerate, Undo and Redo disabled). The visible label is **"Theme"** under the **Edit** menu; the route is **Edit > Theme → "Global Objects" dialog (Themes pane)**. The original themes are ButtonTheme, Classic, Dark, Hi world, High Contrast, Infor, InforReport, Light, MyPortal, Projector — **10 themes, FX_HelloWorld absent**.
- **Limitations:** the brief names the command "Edit Themes"; the phrase does not appear in the Edit, View or Form menus. The Help menu was not inspected. The Designer launch route (Form > Definition > Designer) was not named by the brief (see §6).

### AC-2 — FX_HelloWorld created once through the native create control; base theme recorded; opened for editing

- **Status:** met as observed.
- **Evidence:** `t2-02` (hover tooltip "New" on the first Themes-pane icon), `t2-03` (New dialog: Name field only), `t2-04` (Name `FX_HelloWorld`), `t2-05` (11-name list, FX_HelloWorld selected), `t2-06` and `t2-07` (Edit Styles open, root FX_HelloWorld).
- **Observed:** the create control is the **+ "New"** icon (tooltip). Creation required only a **Name**; the New dialog offered **no base-theme selector**, so no base theme was chosen and none is recorded. Creation was invoked once (one click on New, one click on OK in the New dialog). The new theme was auto-selected; the editor did not auto-open. The worker then clicked **Edit...** once to open **Edit Styles**.
- **Limitations:** immediately after creation (`t2-05`) the Designer toolbar Save and Undo looked enabled; they were disabled again by `t2-06`. The cause is unexplained (no Form was edited). The copy-like and trash icons were not identified (hover was blocked in T6).

### AC-3 — FX_BlueButton added once under Button; tree shows Button > FX_BlueButton

- **Status:** met as observed.
- **Evidence:** `t3-01` (before: Button with no child), `t3-02` (Button selected: Class Name and Add visible), `t3-03` (Class Name `FX_BlueButton`), `t3-04` (immediately after Add), `t3-05` (after re-selecting Button: FX_BlueButton indented under Button, one row). `t4-01` and `t8-03` show the same single child in later tasks.
- **Observed:** one Add click. Immediately after Add the child was not shown. Re-selecting Button (selection only, no second Add) showed `Form > FormComponent > Button > FX_BlueButton`, one row.
- **Limitations:** the first render after Add omitted the child. The cause is **unresolved**; the record does not establish whether this is a tree-refresh delay. The same delay recurred after reopen (AC-6).

### AC-4 — Background `#FF5CC6C7` entered and read back verbatim; Foreground Solid / default White via picker and read back verbatim

- **Status:** met as observed (both parts).
- **Background evidence:** `t4-02` (Normal State, Background empty), `t4-03` (value typed, focused), `t4-04` (after Tab commit; readback `"#FF5CC6C7"`), `t5-05` (still `#FF5CC6C7`), `t8-04` (reopened, `#FF5CC6C7`).
- **Background observed:** typed exactly as `#FF5CC6C7`, once; committed by one Tab key press (chosen over Enter, which could trigger the dialog's default OK). No normalisation observed. The Background picker was not opened.
- **Foreground evidence:** `t5-01` (Foreground empty, its own `...` present), `t5-02` (picker opened: None selected), `t5-03` (after the timed-out radio click: still None), `t5-04` (Solid selected; default offered as R 255, G 255, B 255, A 100; hex `#FFFFFFFF`), `t5-05` (after OK: Foreground `#FFFFFFFF`), `t8-04` (reopened: `#FFFFFFFF`).
- **Foreground observed:** Solid chosen through the Foreground row's picker; the default White was kept (nothing typed); OK clicked once. Readback `#FFFFFFFF`.
- **Limitations:** the Solid radio **input** click timed out ("element is outside of the viewport", retried for 5 s) although the screenshot shows it visible; no effect; the **label** click then succeeded (suspected environment or rendering issue, unresolved). The picker shows alpha as "A 100" (percent) while the hex starts `FF`; the mapping is the picker's own and was not verified against the stored model. The readbacks are the editor's displayed values, not database values.

### AC-5 — Exactly one theme Save; native response recorded verbatim; no unsaved-change indication remains

- **Status:** met as observed, **with a control qualification** (§6).
- **Evidence:** `t6-01`/`t6-02` (T6 stop: no theme-specific Save control; no Save invoked), `t7-01` (pre-commit), `t7-02` (Edit Styles closed by OK), `t7-03` (Global Objects closed by OK; Designer Save enabled; pre-save state), `t7-04` (after the single Save).
- **Native response (verbatim):** toast titled **"Save"** with the text **"Global object(s) were saved."** and a close (×) control. No dialog appeared.
- **Save count:** **1** (T7, one click on the Designer top-toolbar Save under the T7 operator exception). No retry.
- **Post-save state:** Designer toolbar Save disabled, Regenerate Form disabled, Undo and Redo disabled; no dialog open.
- **Limitations:** the message names **global objects**, not a Form. The Save control used is the Designer toolbar Save (a Form-level control). The worker did not verify which records were written beyond that message. The immediate acknowledgement is **not** persistence (see AC-6).

### AC-6 — Editor closed once; FX_HelloWorld reopened once for editing; Button > FX_BlueButton with the same Normal Background and Foreground

- **Status:** met as observed, **same-session only**.
- **Close:** Edit Styles closed once by its **OK** in T7 (`t7-02`). Global Objects was closed once by its **OK** in T7 (`t7-03`).
- **Reopen route (T8):** Edit > Theme → Global Objects (`t8-01`, 11 names) → select FX_HelloWorld → **Edit...** once → Edit Styles open (`t8-02`).
- **Hierarchy:** on first render Button showed **no child** (`t8-02`). After one selection of Button (corrected inspection, selection only), the tree showed **one** `Form > FormComponent > Button > FX_BlueButton` (`t8-03`).
- **Readbacks:** Foreground `#FFFFFFFF`, Background `#FF5CC6C7` (`t8-04`), identical to T4, T5, T7 values.
- **Observed label change:** the reopened Normal State labels read **"\* Foreground:"** and **"\* Background:"** (asterisk added). Earlier snapshots had no asterisk. The meaning is **unresolved**. The colour values themselves matched.
- **Cause of the first-render gap (not proven):** the record observes the child is omitted on first render and shown after selecting Button; it does not establish why. The same pattern occurred after the T3 Add.
- **Limitations:** same-session recovery only. This is not cross-session, runtime or database durability. The reopen did not use a fresh browser session.

### AC-7 — No other change; theme list = original + FX_HelloWorld; no User Preference, Designer Form or component change; no theme dialog open

- **Status:** met as observed.
- **Theme list:** `t8-01` (11 names: ButtonTheme, Classic, Dark, **FX_HelloWorld**, Hi world, High Contrast, Infor, InforReport, Light, MyPortal, Projector). Original list at `t1-05` and `t2-01` (10). Each original name appears once; FX_HelloWorld is the only addition; no duplicates, none missing.
- **Final state:** `t8-05` — no theme dialog open; FX_Items the only Form tab; toolbar Save and Regenerate Form disabled; Undo and Redo disabled.
- **No preference change:** the View menu was opened once (`t1-03`) and no item was clicked. No User Preference item was ever clicked.
- **No Form or component change:** no Form field, property, component or Form-definition change was made. The Designer toolbar Save in T7 is covered in §6 and in AC-8.
- **Limitations:** the theme list was compared visually from screenshots and snapshots, not by a stored-model read. Global Objects was opened and cancelled in T1 before creation, and reopened and closed in T2–T8; those were not persistence cycles.

### AC-8 — Final report: decisive evidence for AC-1–AC-7; exact audit counts; file inventory; final state

- **Status:** **supported**, with one disclosed qualification (the Designer toolbar Save invocation) and the label discrepancy from AC-1.
- **Counts required by AC-8 versus observed:**

| AC-8 expected | Observed (T1–T8, reconciled) | Note |
| --- | --- | --- |
| One theme create | **1** (T2) | Native New control; no base theme offered |
| One class add | **1** (T3) | One Add click |
| Two colour changes | **2** (T4 Background; T5 Foreground) | Solid chosen by label click after a radio timeout (no effect) |
| One theme Save | **1** (T7, native "Global object(s) were saved.") | Designer top-toolbar Save under T7 exception |
| One close/reopen | **1 editor cycle** (T7 close by OK → T8 reopen via Edit...) | Global Objects also: T7 close → T8 reopen |
| Zero other theme edits | **0** | No rename, delete, copy, other class or other state |
| Zero preference changes | **0** | View menu opened in T1, no item clicked |
| Zero Form changes | **0 Form edits; 0 component changes; 0 Form saves of FX_Items other than the T7 toolbar Save.** Designer toolbar Save invocations: **1** (T7) | Qualified — see §6 |

- **Decisive evidence:** AC-1 `t1-03`, `t1-05`, `t2-01`; AC-2 `t2-02`–`t2-05`; AC-3 `t3-05`; AC-4 `t4-04`, `t5-04`, `t5-05`, `t8-04`; AC-5 `t7-03`, `t7-04`; AC-6 `t8-02`–`t8-04`; AC-7 `t8-01`, `t8-05`.
- **Inventory and final state:** §4 and §7 below.

---

## 3. Verified route, class, colours and theme list (summary)

- **Route:** Designer menu bar **Edit > Theme** → **"Global Objects"** dialog (Themes pane). Visible label **"Theme"**; the phrase "Edit Themes" was not found.
- **Original theme inventory:** 10 themes (ButtonTheme, Classic, Dark, Hi world, High Contrast, Infor, InforReport, Light, MyPortal, Projector). FX_HelloWorld absent at T1 and T2.
- **After creation:** 11 themes (original 10 plus FX_HelloWorld), confirmed at T8 (`t8-01`).
- **Class:** one **FX_BlueButton** directly under **Form > FormComponent > Button** (`t3-05`, `t8-03`).
- **Normal Background:** **`#FF5CC6C7`** (`t4-04`, `t5-05`, `t8-04`).
- **Normal Foreground:** **`#FFFFFFFF`** from Solid with the default White (`t5-04`, `t5-05`, `t8-04`).
- **Native save:** **"Global object(s) were saved."** (`t7-04`), exactly one Save.
- **Recovery:** same-session close (T7) and reopen (T8), not durability-verified.

## 4. Worker-written file inventory (based on the task reports and the harness inventories)

Written by the worker across T1–T9:

- `experiments/EXP-064-hello-world-part-4-section-6a-theme-and-button-class.md` — created in T1 (Write); updated by Edit in T2–T9.
- `evidence/EXP-064/t1-01-…png` to `t1-08-…png` (8 PNG).
- `evidence/EXP-064/t2-01-…png` to `t2-07-…png` (7 PNG).
- `evidence/EXP-064/t3-01-…png` to `t3-05-…png` (5 PNG).
- `evidence/EXP-064/t4-01-…png` to `t4-04-…png` (4 PNG).
- `evidence/EXP-064/t5-01-…png` to `t5-05-…png` (5 PNG).
- `evidence/EXP-064/t6-01-…png`, `t6-02-…png` (2 PNG).
- `evidence/EXP-064/t7-01-…png` to `t7-04-…png` (4 PNG).
- `evidence/EXP-064/t8-01-…png` to `t8-05-…png` (5 PNG).
- `evidence/EXP-064/T9-ac8-final-acceptance-report.md` — this report, written in T9.

**Totals:** 1 record (created once, updated 8 times) + 40 PNG screenshots + 1 final report = **42 worker-written files**. The 40 PNG count matches the Glob listing of `evidence/EXP-064/` and the cumulative screenshot count.

**Not worker-written:**
- `evidence/EXP-064/harness-audit-T1.md` … `harness-audit-T8.md` — controller-generated audit files (eight files).
- Playwright snapshot and console files under `evidence/playwright/` (tool-generated; not enumerated here; attributable only by timestamp window, roughly 14:03–14:30 UTC on 2026-10-12 for EXP-064 tasks).

**Repository confinement:** the worker/harness inventories above support that only the EXP-064 record and EXP-064 evidence files were written. The worker did **not** run `git status` or any git command. **Operator git review remains authoritative.**

## 5. Reconciled browser action counts (T1–T8)

Per-task values were taken from each task's record and checked against the controller per-call tables in `harness-audit-T1`–`T8` (every per-task count matched; the controller's summary-line totals use its own categories and were not used).

| Action | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Browser tab lists | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **9** |
| Browser tab selects | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **9** |
| Explicit snapshots | 2 | 2 | 1 | 2 | 2 | 1 | 1 | 1 | **12** |
| Finds | 3 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | **5** |
| Successful element clicks | 11 | 5 | 3 | 2 | 3 | 0 | 3 | 9 | **36** |
| **Failed interactions** | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | **3** |
| Typing (into named fields) | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | **3** |
| Key presses (Escape; Tab) | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **2** |
| Hovers (successful) | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | **1** |
| Screenshots (worker-requested) | 8 | 7 | 5 | 4 | 5 | 2 | 4 | 5 | **40** |

**Named counts (AC-8 and record-level):**

| Count | Total | Where |
| --- | --- | --- |
| Theme creates (New control) | **1** | T2 |
| Class adds (Add) | **1** | T3 |
| Colour committed changes | **2** (Background 1, Foreground 1) | T4, T5 |
| Theme Saves (native) | **1** | T7 |
| Designer toolbar Save invocations | **1** | T7 (same click as the theme Save) |
| Edit Styles opened (Edit...) | **2** | T2, T8 |
| Edit Styles closed | **2** (OK T7; Cancel T8) | T7, T8 |
| Global Objects opened (Edit > Theme) | **3** | T1, T2, T8 |
| Global Objects closed | **3** (Cancel T1; OK T7; Cancel T8) | T1, T7, T8 |
| OK clicks in dialogs | **5** | Scope T1; New T2; picker T5; Edit Styles T7; Global Objects T7 |
| Cancel clicks in dialogs | **3** | Global Objects T1; Edit Styles T8; Global Objects T8 |
| Edit > Theme clicks | **3** | T1, T2, T8 |
| Failed interactions (detail) | **3** | T1 ref not found (no effect); T5 radio timeout (no effect); T6 hover timeout (no effect) |
| Theme-editor close/reopen cycles | **1** | T7 close → T8 reopen |
| User Preference changes | **0** | — |
| Designer Form edits / component changes | **0 / 0** | — |
| Designer top-toolbar Delete Form Definition clicks | **0** | — |
| Theme Delete (red) or trash clicks | **0** | — |
| Browser JavaScript, evaluate, run-code, console or network inspection by worker | **0** | — |
| Navigate, refresh, restart, reauthentication | **0** | — |
| Coordinate clicks, drag or drop | **0** | — |

**Controller-flagged tool usage:** the controller flagged `browser_type` in T2, T3 and T4 as a "prohibited-tool hit". Those three calls typed the theme name, the Class Name and the literal colour, which the T2–T4 briefs explicitly authorized. The controller states flagged tools "may be allowed by other briefs". Recorded as disclosed, not as a violation. No other flagged tool was used.

**Errors reported by the controller:** three (T1 ref-not-found; T5 radio timeout; T6 hover timeout). Each had no effect (see §6).

## 6. Disclosures, deviations and material evidence gaps

1. **T1 Designer launch (disclosed deviation, no Form change).** The Web Designer was opened from the Web Client via **Form > Definition > Designer**. The brief did not name this route. It opened a new tab and a scope dialog (pre-filled User) which was confirmed once. No Form was edited or saved in T1.
2. **Label discrepancy (AC-1).** The brief says "Edit Themes". The visible label is **"Theme"** under **Edit**. The route is Edit > Theme. The Help menu was not inspected. The operator should confirm that this is the intended command.
3. **Theme commit used the Designer top-toolbar Save (AC-5 / AC-8).** T6 found no theme-specific Save control and stopped. The operator authorized, for T7 only, one OK in Edit Styles, one OK in Global Objects, and one Designer toolbar Save. The Save was the Form-level control, and the native message names **global objects**. The worker did not verify which records were written. Designer Form edits and component changes were zero. The FX_Items Form was not edited. This qualification should be acknowledged by the operator.
4. **Two OK clicks in theme dialogs (T7)** were the commit route the operator authorized. Whether they committed anything beyond the Save is not separately observed.
5. **First-render child gap (AC-3, AC-6).** After the Add (T3) and after the reopen (T8), FX_BlueButton was not shown until Button was re-selected. The cause is **unresolved**. The child was shown in every corrected inspection.
6. **Asterisk on reopened colour labels (AC-6).** "\* Foreground:" and "\* Background:" appeared after reopen and not before. The meaning is **unresolved**. The colour values matched.
7. **Solid radio timeout (AC-4).** The radio input click timed out ("outside of the viewport") although visible in the screenshot. The label click succeeded. Suspected environment or rendering issue; cause unresolved.
8. **Hover timeout (T6).** The copy-like icon could not be hovered while Edit Styles was open (pointer intercept). Its identity is unknown. It was not clicked.
9. **Transient Save/Undo state after creation (T2).** `t2-05` showed Save and Undo enabled; they were disabled by `t2-06`. Unexplained; no Form was edited.
10. **Same-session recovery only (AC-6).** The reopen was in the same browser session. It is not cross-session, runtime or database durability. No readback was taken from storage.
11. **Visual and editor-model readbacks only.** Colour and class readbacks are from the open editor and screenshots. No byte-level or stored-value comparison was made.
12. **Evidence file names.** `t1-04` (named "edit-menu-open") shows no menu open, and `t1-07` (named "menus-closed") shows the Form menu open. The record describes both. Their names are misleading.
13. **Global Objects cycle before creation.** Global Objects was opened and cancelled in T1 (before any theme existed), then opened again in T2 and kept open until T7. This is not a persistence cycle.
14. **Tool-generated files.** Playwright snapshot and console files under `evidence/playwright/` were not inventoried or opened as console or network inspection.

## 7. Final browser state (from T8)

- Tab 0 (Designer) selected. **FX_Items is the only open Designer Form.** It is **clean**, its toolbar Save is **disabled**, and Undo and Redo are disabled. FX_Items was not edited in T8. (Its one earlier Save was the T7 theme commit, §5.)
- **No theme dialog is open** (Edit Styles and Global Objects were both closed by Cancel in T8).
- No browser-native dialog and no unsaved-change prompt. The T7 save toast is an in-page notification, not a dialog; it was not dismissed by the worker.
- Tab 1 (Web Client) was not touched.

## 8. Findings classification

All experimental findings are classified **observed** or **unresolved**. **None is replay_verified.** No procedure is marked verified.

- Observed: the Edit > Theme route and the "Theme" label; the original 10-theme inventory; the "New" create control and its name-only dialog; the one-Add class hierarchy after re-selection; the Background and Foreground readbacks; the one native save message; the same-session reopen readbacks.
- Unresolved: the "Edit Themes" name versus the visible "Theme" label; the first-render child gap; the asterisk labels; the Solid radio timeout; the transient Save/Undo state after creation; which records the global-object save wrote; whether the OK clicks committed anything beyond the Save; persistence beyond the same session.

## 9. Recommendation

- **Recommend: ACCEPTED as observed** (one run; same-session recovery; not replay-verified).
- **Conditions for acceptance (operator to acknowledge):**
  1. The command is visibly labelled "Theme" (Edit > Theme), not "Edit Themes".
  2. The theme commit used the Designer top-toolbar Save under the T7 operator exception; the native message names global objects; no Form edit occurred.
  3. Recovery is same-session only; no database or cross-session durability is claimed.
  4. The first-render child gap and the asterisk labels remain unresolved observations.
- **Optional before a dependent experiment relies on this:** a fresh-session reopen check, which the brief does not authorize here.
- **Not recommended as blocked:** no check failed. The only discrepancies are the disclosed label and the Save control, which are documented and within what the operator authorized.
