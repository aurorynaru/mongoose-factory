# EXP-100 - T4 final acceptance audit (documentation only)

Task: T4, cycle 3, run R-20261015-205242-6l3w. Worker session 3a6f12b7-52a7-4d8c-8aae-4316c32cc4f3.

Scope of this task: documentation-only evaluation of EXP-100 (AC-1 to AC-7). **Zero browser calls and zero Mongoose changes in T4.** The Designer was not reopened. The last observed Designer state is the end of T3 (`t3-11-final-clean-designer-state.png`).

Method: read the EXP-100 record; read the three controller-generated audits `harness-audit-T1.md`, `harness-audit-T2.md` and `harness-audit-T3.md` (in `evidence/EXP-100/`, not worker prose); read the screenshots listed under each AC; reconcile counts against the controller tables row by row. Where the worker's own record and the controller disagreed, the controller table was treated as authoritative and the record was corrected.

Classification: all product findings are **observed only**. Cross-session durability, database persistence and replay verification are **not claimed** and are excluded from every AC verdict below.

---

## 1. Count reconciliation (controller tables vs. worker record vs. brief)

Controller tables are the source. Row numbers below refer to `harness-audit-T1..T3.md`.

| Measure | Controller | Worker record (pre-T4) | Brief | Result |
| --- | --- | --- | --- | --- |
| T1 browser actions | 16 | 16 (12 ref clicks + 2 coordinate + 1 ArrowRight + 1 tab select) | 16 | Agrees |
| T1 browser reads | 28 | 28 (14 snapshots + 2 finds + 11 screenshots + 1 tab list) | 28 | Agrees |
| T2 browser actions | 49 | 49 (34 ok clicks + 1 failed click + 2 coordinate + 4 Tab + 7 type + 1 tab select) | 49 | Agrees |
| T2 browser reads | 74 | **75** (41 snapshots + 9 finds + 24 screenshots + 1 tab list) | 74 | **Worker overcounted snapshots: 40, not 41** (controller rows 3,9,11,13,16,20,24,26,30,32,35,39,42,48,50,52,56,58,60,63,65,68,70,73,77,79,81,85,87,89,92,94,98,100,102,105,107,110,117,122 = 40) |
| T3 browser actions | 20 | 20 (14 ref clicks + 4 coordinate + 1 wheel + 1 tab select) | 20 | Agrees |
| T3 browser reads | 33 | 33 (17 snapshots + 4 finds + 11 screenshots + 1 tab list) | 33 | Agrees |
| **Total actions** | **85** | 85 | 85 | Agrees |
| **Total reads** | **135** | 136 (with the 41) | 135 | Corrected to 135 |
| Ref clicks executed (T1 12 / T2 34 / T3 14) | 60 | 60 | 60 | Agrees |
| Failed ref click | 1 (row 93) | 1 | 1 | Agrees |
| Coordinate clicks (T1 2 / T2 2 / T3 4) | 8 | 8 | 8 | Agrees |
| Snapshots (T1 14 / T2 40 / T3 17) | 71 | 72 | 72 | **Corrected to 71** |
| Finds (2 / 9 / 4) | 15 | 15 | 15 | Agrees |
| Screenshots (11 / 24 / 11) | 46 | 46 | 46 | Agrees; file count in `evidence/EXP-100/` is also 46 |
| Add operations | 3 (rows 29, 47, 76) | 3 | 3 | Agrees |
| Class-name typings | 3 (rows 27, 45, 74) | 3 | 3 | Agrees |
| Attribute value typings | 4 (rows 18, 37, 54, 83) | 4 | 4 | Agrees |
| Tab presses (after entries) | 4 (rows 19, 38, 55, 84) | 4 | 4 | Agrees |
| Bold True selections | 2 (rows 59, 88; Open at 57, 86) | 2 | 2 | Agrees |
| Foreground picker open / OK | 1 / 1 (rows 64, 69) | 1 / 1 | 1 / 1 | Agrees |
| Edit Styles OK | 1 (row 113) | 1 | 1 | Agrees |
| Global Objects OK | 1 (row 118) | 1 | 1 | Agrees |
| Designer Save | 1 (row 123) | 1 | 1 | Agrees |
| Missing-reference error | 1 (row 93, `Ref e1593 not found`) | 1 | 1 | Agrees |
| browser_type calls flagged by controller | 7 (T2 rows 18, 27, 37, 45, 54, 74, 83) | 7 | - | See section 5 |
| Prohibited-tool hits | T1 0, T2 7 (browser_type only), T3 0 | - | - | See section 5 |
| Re-logins / prompts / unload / checkout / Form open or save | 0 / 0 / 0 / 0 / 0 | 0 | 0 | Agrees (no controller row for any of them) |

Count corrections made in this task:
- T2 snapshots 41 → **40**; cumulative snapshots 72 → **71**; total reads 136 → **135**.
- All other figures agree with the controller tables.

---

## 2. Acceptance checks

### AC-1 - Sources reviewed; session usable; User scope; baseline recorded; both dialogs Cancel; clean Designer

**Verdict: PASS (observed).**

Supporting evidence:
- Gate in User scope, Save and Undo disabled, canvas empty: `t1-01-designer-gate.png`. The status bar reads `ScopeType: User`.
- Themes list shows 11 themes including FX_HelloWorld: `t1-03-themes-list.png` (the Global Objects Themes list, not the Edit menu; see limits).
- Edit Styles tree collapsed then Form expanded: `t1-04-edit-styles-tree-collapsed.png`, `t1-06-edit-styles-tree-form-expanded.png`. Form contains FormComponent, which contains Button > FX_BlueButton. FlexLayout and Static are leaves (no classes).
- Form Font before change: Family blank, Size blank, Bold Default, Italic Default; Categories Font, Normal State, Active State, Disabled/Read-Only State, Hover State, Tiles: `t1-05-form-font-attributes-before.png`.
- FlexLayout Categories Normal State, Active State, Disabled/Read-Only State, Hover State; Background blank under Normal State: `t1-07-flexlayout-selected.png`.
- Static Categories Font, Normal State, Hover State; Normal State Background blank: `t1-09-static-selected.png`, `t1-10-static-normal-state.png`.
- FX_BlueButton Normal State Foreground `#FFFFFFFF`, Background `#FF5CC6C7`: `t1-08-fx-bluebutton-normal-state.png`.
- None of the three new class names present (tree shows none under FlexLayout or Static).
- Both dialogs closed with Cancel (controller rows 64 and 66) and the clean Designer: `t1-11-after-cancel-designer-state.png`.

Limitations:
- `t1-02-edit-menu-open.png` shows the Global Objects Themes list, not the Edit menu (filename is misleading; disclosed in the record).
- Children of Application Frame were not inspected; outside AC-1 scope.

### AC-2 - Form Font Family Tahoma; FX_BlueBackground under FlexLayout with Background #FF5CC6C7; one Add max; at most one correction per field

**Verdict: PASS (same-session observation).**

Supporting evidence:
- Form Font before change: `t2-03-form-font-before-tahoma.png` (Family blank).
- Family Tahoma readback after Tab: `t2-04-form-font-family-tahoma-readback.png`. Pre-commit: `t2-17-precommit-form-font-verify.png` (Form selected, `Family: Tahoma`). Reopened (T3): `t3-03-form-selected-font-tahoma-readback.png` (Form selected, `* Family: Tahoma`, Size blank, Bold/Italic Default). **Viewed in T4.**
- FX_BlueBackground class name entered before Add: `t2-05-flexlayout-classname-entered-before-add.png`. The class appears under FlexLayout with Background blank before values: `t2-07-fx-bluebackground-selected-before-value.png` (**viewed in T4**; this is the clearest add evidence).
- Background `#FF5CC6C7` after Tab: `t2-08-fx-bluebackground-background-readback.png` (**viewed in T4**). Focus moved to the Background picker "..." button after Tab; no picker was opened (controller has no picker row in this step).
- Pre-commit: `t2-19-precommit-fx-bluebackground-background-verify.png`. Reopened (T3): `t3-04-fx-bluebackground-normal-background-readback.png` (**viewed in T4**; FX_BlueBackground under FlexLayout, Background `#FF5CC6C7`).
- Add count: one (controller row 29). Corrections: none (one typing and one Tab per field).

Limitations:
- `t2-06-flexlayout-after-add-tree-refreshed.png` does **not** show the new child (the row is cut off at the bottom of the tree). It is not used as evidence of the add.

### AC-3 - FX_WhiteHeader (Size 16, Bold True, Normal State Foreground #FFFFFFFF via picker, Solid, default White); FX_Header (Size 16, Bold True); one Add each

**Verdict: PASS (same-session observation).**

Supporting evidence:
- FX_WhiteHeader class name before Add: `t2-10-white-header-classname-entered-before-add.png`. Added once (row 47).
- FX_WhiteHeader Font before values: `t2-11-white-header-selected-font-before.png`.
- Size 16, Bold True: `t2-12-white-header-font-size-16-bold-true.png` (**viewed in T4**; Family Tahoma, Size 16, Bold True; Bold focus shown). Reopened: `t3-05-fx-whiteheader-font-size-bold-readback.png` (Size 16, Bold True).
- Picker before OK: `t2-13-foreground-picker-solid-selected-before-ok.png`. Solid radio checked; Preview `#FFFFFFFF`; R 255, G 255, B 255; A 100. Default White accepted as offered. Picker opened once (row 64), Solid label clicked once (row 66), OK once (row 69).
- Foreground readback after picker OK: `t2-14-white-header-foreground-readback-after-picker-ok.png` (**viewed in T4**; Foreground `#FFFFFFFF`). Pre-commit `t2-20-precommit-fx-whiteheader-normal-foreground-verify.png` (**viewed in T4**). Reopened: `t3-06-fx-whiteheader-normal-foreground-readback.png`.
- FX_Header class name before Add: `t2-15-header-classname-entered-before-add.png` (**viewed in T4**; Class Name `FX_Header`, Static selected). Added once (row 76).
- FX_Header Font before values: `t2-16-header-selected-font-before.png` (**viewed in T4**; FX_Header under Static, Size blank, Bold Default). Values: Size 16, Bold True: `t2-21-precommit-fx-header-font-verify.png` (**viewed in T4**) and reopened `t3-07-fx-header-font-size-bold-readback.png` (**viewed in T4**).

Observations and limitations:
- Font Size is a plain text box with no unit shown. Font Bold is a combobox (Default / True / False).
- The picker's alpha field shows `A 100` while the hex value carries alpha `FF`. The display unit of `A` is not explained by the UI and was not investigated.
- `t2-16` shows FX_WhiteHeader's tree icon differently from later captures (expander-style icon versus line). Not interpreted; no state effect was identified.
- Family shows Tahoma on FX_WhiteHeader and FX_Header. This is discussed under the inherited-display question in section 6.

### AC-4 - Edit Styles OK once; Global Objects OK once; one Designer Save with native response verbatim; no Cancel with unsaved changes

**Verdict: PASS, with a limit (native text for the two OK steps is not captured).**

Supporting evidence:
- Controller: Edit Styles OK row 113; Global Objects OK row 118; Designer Save row 123. No Cancel rows in T2.
- After Edit Styles OK: `t2-22-after-edit-styles-ok.png` (Edit Styles closed; Global Objects open; FX_HelloWorld label highlighted).
- After Global Objects OK: `t2-23-after-global-objects-ok.png` (Global Objects closed; toolbar Save enabled).
- Save response, native text verbatim: `t2-24-after-designer-save-response.png` (toast heading "Save", message **"Global object(s) were saved."**; Save disabled afterwards). The text was confirmed by a read-only find (controller row 124).
- Save was invoked once and not retried (controller row 123; no further Save row).

Limits:
- The two OK steps produced no native text. Their completion is evidenced only by dialog closure in `t2-22` and `t2-23`.

### AC-5 - Reopened Edit Styles shows all four changes; FX_BlueButton unchanged; both dialogs Cancel; no prompt; Save disabled

**Verdict: PASS (same-session).**

Supporting evidence (T3, controller rows 16 to 53):
- Form Family `Tahoma`: `t3-03` (viewed in T3 and T4).
- FX_BlueBackground Background `#FF5CC6C7`: `t3-04` (viewed in T4).
- FX_WhiteHeader Size 16, Bold True: `t3-05`; Foreground `#FFFFFFFF`: `t3-06`.
- FX_Header Size 16, Bold True: `t3-07` (viewed in T4).
- FX_BlueButton unchanged: Normal State Foreground `#FFFFFFFF`, Background `#FF5CC6C7`: `t3-10-fx-bluebutton-normal-state-unchanged-readback.png` (viewed in T3; the FX_BlueButton row is selected and the Normal State values are visible).
- Edit Styles Cancel (row 51) and Global Objects Cancel (row 53): no prompt recorded. Read-only finds (rows 54 and 55) show no "Edit Styles" and no "Global Objects" dialog.
- Save disabled: read-only find (row 54-55 context) and `t3-11-final-clean-designer-state.png` (toolbar Save greyed; no dialog).

Limits:
- No separate screenshot of the dialog-closing moment for each Cancel; closure is evidenced by the subsequent find results and `t3-11`.
- Same-session only; cross-session and database persistence are not claimed.

### AC-6 - No other theme touched; no class removed or renamed; no other attribute changed; no Form opened or saved; no User Preferences, image library or runtime action; no unload; no checkout; no task-boundary overrun

**Verdict: PASS, with disclosed deviations (section 4) requiring operator disposition.**

Supporting evidence (controller tables):
- Themes list: one theme selected in each task (T1 row 28, T2 row 10, T3 row 9), each FX_HelloWorld. No Themes toolbar icon (new, copy, delete) clicked.
- No class removed or renamed: no class Delete click appears in any row (the class Delete button was visible in some captures and was not clicked).
- Attributes changed: exactly the seven permitted changes. Form Family (row 18); FX_BlueBackground Background (row 37); FX_WhiteHeader Size (row 54), Bold (row 59), Foreground by picker (rows 64 to 69); FX_Header Size (row 83), Bold (row 88). No Form font other than Family changed. FX_BlueButton was only selected and read (T3 rows 45 to 49); never changed.
- No Form opened or saved: no Form-menu row, no Form-definition row, no Form canvas action (the Designer top "Form" menu was not used).
- No User Preferences, no image library, no runtime Web Client action (no row referencing those).
- No unload, regeneration, FormSync, deployment or checkout action (no such row).
- No browser JavaScript, SQL, console or network inspection row. Controller `Spelled strings []`, `key string (none)`.
- Task boundaries: T1 stopped after the read-only discovery and Cancels; T2 stopped after commit and clean-state observation (no reopen); T3 stopped after readback and Cancels. T4 made no browser calls.
- Re-logins: none (no session-expiry row or sign-in row).

Deviations under AC-6 (detailed in section 4): tree-expander coordinate clicks (D1, D3, D7), one stale-reference attempt (D2), a recovery coordinate click (D4), an unintended selection of HyperLinkButton (D6), a mouse-wheel scroll outside the enumerated actions (D8). None changed a theme value.

### AC-7 - Final report with decisive evidence for AC-1 to AC-6, the complete action audit with exact counts, inventory and final state

**Verdict: SATISFIED by this audit document and by the updated record. The recommendation follows.**

- Decisive evidence per AC: section 2 and the record.
- Action audit with exact counts: section 1 and the record's cumulative table (corrected).
- Prompts: none in T1, T2 or T3. No prompt text exists to record.
- Errors: one (`Ref e1593 not found`, T2 row 93).
- Edit Styles OKs 1; Global Objects OKs 1; Designer Saves 1; picker opens and OKs 1 and 1; Adds 3; Cancels in T1 (2) and T3 (2).
- Re-login count: 0.
- Inventory: section 7.
- Final state: section 8.

---

## 3. Source-inspection and task-boundary review

Permitted sources (T1 controller rows 2, 3, 5, 6, 8, 12, 13, 14): `AGENTS.md`; `recipes/session/session-expiry-and-stale-designer.md`; `hello-world-pt6.md` Section 8 (lines 200-216), and its transcript lines 07:34-09:36; the Outcome sections of EXP-064 (line 1008 to end), EXP-065 (line 731 to end) and EXP-099 (line 756 to end). Those outcome sections are the final sections of their files, so reads from the heading to end-of-file did not extend into other content.

Out-of-scope reads or searches disclosed (see also section 4):
- **D10 (T1 row 9):** repository-wide `Grep` for "Outcome" over `experiments/`. It returned 88 file names (`files_with_matches`). No record content was read through that search, but the search touched the names of other experiment records. It was beyond the brief's named sources.
- **D11 (T1 rows 6 and 8):** `hello-world-pt6.md` lines 265-275 (the reference-data table, outside Section 8) and lines 420-444 (transcript lines beyond 09:36 into the Part 1-3 recap). The transcript itself is tutorial source, not an experiment record; the reads were content reads outside the brief's range.
- No out-of-scope reads occurred in T2 or T3 (their repository reads were the record and EXP-100 screenshots).
- T1 row 4 (`Grep` for section headings in the transcript) and row 7 (`Grep` for timestamps 07:3x-09:3x) were within the transcript scope.

Harness audit files (`harness-audit-T1..T3.md`) are controller output, read in full for this audit. They are not worker-written and were not edited.

---

## 4. Deviations requiring operator disposition

Not waived by this audit. Each item is listed with its evidence and a recommendation. The operator decides the disposition.

| ID | Task / rows | What happened | Brief or rule | Effect on the theme | Recommendation |
| --- | --- | --- | --- | --- | --- |
| D1 | T1 rows 39 (ArrowRight), 41 (coord 583,368 Form expander), 48 (coord 623,409 Button expander) | Two tree-expander coordinate clicks and one ArrowRight press to expand Form and Button. The brief says "Selection clicks only." | Brief: selection clicks only; AGENTS.md: coordinates last resort | None. ArrowRight had no effect (row 40 snapshot). Expansion only; no value changed. | Operator to accept as tree navigation or record as a note. |
| D2 | T2 row 93 | Click on FlexLayout used `Ref e1593`, which came from the snapshot before the Form click (row 89), not from the most recent snapshot (row 92). Error returned; no effect. | Brief: refs from the most recent snapshot | None (the click failed). | Operator to accept as a procedural slip, or require a note. |
| D3 | T2 row 23 | Form expander coordinate click (583,368) after the Family readback, to expand the tree. | As D1 | None. | As D1. |
| D4 | T2 row 97 | Recovery: after the one fresh untargeted snapshot (row 94), the corrected attempt was a coordinate click on Form's expander rather than a ref. | Brief: one fresh snapshot and one corrected visible inspection; AGENTS.md: coordinates last resort | None. Recovery allowance used once (row 94). | Operator to accept. |
| D5 | T2 rows 93 to 94 | Recovery allowance: one fresh untargeted snapshot used. | Brief allows one | Within allowance. Not a deviation; recorded for completeness. | None. |
| D6 | T3 row 36 | Coordinate click (623,409) intended for Button's expander selected **HyperLinkButton** instead, because the tree had scrolled. The click was a selection only; HyperLinkButton's Font was displayed but not edited. Coordinates were used although the rule is ref-first. | AGENTS.md: prefer role/accessibility references; brief: refs from the most recent snapshot | None. No value changed on HyperLinkButton. | Operator to decide: accept as an unintended selection, or require a ref-first rule note. |
| D7 | T3 row 43 | Button expander coordinate click (608,414) to expand Button. | As D1 | None. FX_BlueButton was then selected by ref (row 45). | As D1. |
| D8 | T3 row 40 | Mouse-wheel scroll (-2000) to bring Button back into view. Not an enumerated action. | Brief enumerates actions | None (viewport only). | Operator to accept. |
| D9 | Record (pre-T4) | Worker recorded 41 T2 snapshots and 72 cumulative; controller shows 40 and 71. | Accurate audit required | None. Count error only. | Corrected in the record and section 1. |
| D10 | T1 row 9 | Repository-wide filename search over `experiments/` (88 names). | Brief names specific sources | None (names only). | Operator to accept as a search, or note as out-of-scope. |
| D11 | T1 rows 6 and 8 | Transcript reads outside Section 8 and beyond 09:36 (reference table at 265-275; recap at 420-444). | Brief: Section 8 and 07:34-09:36 | None (reads only). | Operator to accept. |

Items not deviations, recorded for the audit trail:
- Seven `browser_type` calls in T2 (rows 18, 27, 37, 45, 54, 74, 83). Each typed value is one the brief authorises: the Form Family `Tahoma`; three class names (`FX_BlueBackground`, `FX_WhiteHeader`, `FX_Header`); the Background `#FF5CC6C7`; and two Font Size entries of `16`. The controller flags `browser_type` generically and states that flagged tools may be allowed by other briefs. This audit does not treat the flag as a policy violation.
- The Bold field was set by its list (combobox Open then True), not by typing.
- The Foreground was set by the picker's Solid label and OK, as briefed.
- The Delete button shown for selected classes was never clicked.

---

## 5. Typing and prohibited-tool flags (review)

- Controller T2 flagged `browser_type` 7 times. All seven are authorised typings listed in section 4.
- Controller T1 and T3: prohibited-tool hits 0.
- No browser evaluate, run-code, console, network or shell tool was used in any task (controller tool names).

---

## 6. Observations (observed only) and open interpretation

Observed:
1. Adding a class collapses the Edit Styles tree; the new class is visible after its parent is reselected (T2 rows 29-31, 47-49, 76-78).
2. Form Family Tahoma is displayed on Static, FX_WhiteHeader, FX_Header, Button, FX_BlueButton and HyperLinkButton, all of which are read-only displays in these captures.
3. In the accessibility snapshots, Form's Family label reads `* Family:` after it was set, while the children read `Family:`. The image labels were not consistent across captures (for example, `t2-08` and `t2-14` show no visible marker on Background or Foreground where `t3-04` and the T3 snapshots do). The marker is therefore **not reliable evidence of stored state**; it is recorded only as an observed label pattern.
4. Font Size has no unit shown. Bold is a Default / True / False combobox.
5. The Foreground picker's colour mode radios (None, Solid, Base Color) start unselected; clicking the visible Solid label selects Solid and shows `#FFFFFFFF` (R 255, G 255, B 255, A 100).
6. After Tab in a colour field, focus moves to the adjacent picker button and does not open the picker.
7. After Edit Styles OK, the FX_HelloWorld label is highlighted in Global Objects; after Global Objects OK, Save is enabled. The Save toast reads "Global object(s) were saved."
8. The FX_BlueButton Normal State values were unchanged across T1 and T3 (same session).

Unresolved interpretation (must not be closed by this audit):
- **U1.** Whether the Tahoma shown on child elements is stored on those elements or only displayed by inheritance from Form. The UI does not show this. The label-marker pattern in item 3 suggests inheritance but is not reliable enough to decide it.
- **U2.** The meaning of the picker's `A 100` display versus the hex alpha `FF`.
- **U3.** The tree-icon difference for FX_WhiteHeader in `t2-16` (not interpreted).
- **U4.** Whether Edit Styles OK and Global Objects OK produce any native text (none was captured).

---

## 7. Worker-written-file inventory (T1 to T4)

Written directly by the worker (EXP-100 paths):
- `experiments/EXP-100-hello-world-part-6-section-8-fx-theme-classes.md` (created in T1; rewritten in T2 and T3; updated in T4).
- `evidence/EXP-100/T4-final-acceptance-audit.md` (created in T4).
- `evidence/EXP-100/t1-01` to `t1-11` (11 PNG, T1).
- `evidence/EXP-100/t2-01` to `t2-24` (24 PNG, T2).
- `evidence/EXP-100/t3-01` to `t3-11` (11 PNG, T3).
- No screenshot was taken in T4.

Controller-generated (not worker-written; present in the evidence directory):
- `evidence/EXP-100/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`.

Incidental Playwright MCP files (written by the tool as a by-product of browser actions; outside `evidence/EXP-100/`; not enumerated; the harness inventory is authoritative):
- `evidence/playwright/page-*.yml` snapshot files and `evidence/playwright/console-*.log` files. This run's files fall in the window 12:53 to 13:08 (as observed on disk). Earlier-timestamp files in that directory belong to earlier runs and are not counted here.

No other repository file was written by the worker. No repository file outside the EXP-100 paths was modified in T4. Repository confinement is supported by these inventories; operator git review is authoritative.

---

## 8. Final state

- Designer: last observed at the end of T3 and not reopened in T4. User scope; no Form open; no dialog open; toolbar Save disabled; Undo disabled; no prompt; no unsaved change (`t3-11-final-clean-designer-state.png`).
- Web Client tab: not touched in T1, T2, T3 or T4.
- FX_HelloWorld (as read back in the same session, T3):
  - Form Font Family: `Tahoma`.
  - FX_BlueBackground (under FlexLayout): Normal State Background `#FF5CC6C7`.
  - FX_WhiteHeader (under Static): Font Size 16, Bold True; Normal State Foreground `#FFFFFFFF`.
  - FX_Header (under Static): Font Size 16, Bold True.
  - FX_BlueButton (under Button): Normal State Foreground `#FFFFFFFF`, Background `#FF5CC6C7` (unchanged from T1).
- Limits: all of the above is same-session UI observation. Cross-session durability, database persistence and replay verification are **not claimed**.

---

## 9. Recommendation

**ACCEPTED WITH LIMITS, subject to operator disposition of D1 to D11 (section 4).**

Reasons:
- AC-1 to AC-5 are satisfied by decisive, visually checked evidence in the same session, and the controller tables agree with the recorded actions after one count correction (T2 snapshots 41 → 40).
- AC-6 holds: no other theme, Form, class removal or unplanned attribute change appears in any controller table. The deviations are selection or navigation slips and a stale-reference attempt. None changed a theme value.
- No blocker: no failed commit, no unexpected prompt, no Save retry, and Save was disabled at the end.

Why "with limits" rather than "accepted as observed":
- The operator must disposition D1 to D11. Several are procedural (ref-first rule, coordinate navigation, one unintended selection).
- Same-session only; the child-element Tahoma question (U1) is open.
- Native text was captured only for the Save; the two OK steps are evidenced by dialog closure.

Not recommended: BLOCKED. Nothing observed prevents the theme state from being read as recorded in the same session.

Excluded from every verdict: cross-session durability, database persistence, replay verification.

---

## 10. Knowledge states

- Four FX_HelloWorld changes readable in the reopened theme editor, same session: **observed**.
- Commit path (Edit Styles OK, Global Objects OK, one Save) and the Save toast "Global object(s) were saved.": **observed** (same session).
- Picker Solid default `#FFFFFFFF` (R 255, G 255, B 255, A 100): **observed**.
- FX_BlueButton unchanged after commit (same session): **observed**.
- Tahoma displayed on child elements: **observed** (display); whether stored: **unresolved** (U1).
- Label marker pattern (`* Family` on Form only): **observed** label pattern; meaning **unresolved**, not used as evidence.
- Edit Styles open, readback and close sequence: **candidate_procedure** (one same-session execution; not replay-verified).
- Cross-session or database persistence: **unresolved**; not claimed.
