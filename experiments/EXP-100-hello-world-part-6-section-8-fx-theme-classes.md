# EXP-100 - Hello World Part 6 Section 8: extend theme FX_HelloWorld (Form font Tahoma, FlexLayout class FX_BlueBackground, Static classes FX_WhiteHeader and FX_Header)

Status: **T1 (read-only discovery), T2 (theme mutation and commit) and T3 (same-session read-only readback) complete. T4 (documentation-only final acceptance audit) complete: see `evidence/EXP-100/T4-final-acceptance-audit.md`. Recommendation: ACCEPTED WITH LIMITS, subject to operator disposition of deviations D1 to D11 in that audit.**

- Brief source: `docs/mongoose/transcripts/hello-world-pt6.md` Section 8 (07:34-09:36), adapted to FX_ names.
- Tutorial method source: EXP-064 (theme editor method; FX_HelloWorld and class FX_BlueButton created there).
- Editing scope: User. Tenant-wide theme object `FX_HelloWorld`. No Form is opened or saved.
- Run: R-20261015-205242-6l3w. Worker session 3a6f12b7-52a7-4d8c-8aae-4316c32cc4f3.
- Task history:
  - cycle 0 / T1: gate and read-only discovery; no change.
  - cycle 1 / T2: Form font, FX_BlueBackground, FX_WhiteHeader, FX_Header, commit (Edit Styles OK, Global Objects OK, one Designer Save).
  - cycle 2 / T3: read-only reopen of the theme editor and verification by selection; both dialogs closed with Cancel; no change.

## Acceptance checks (status after T3)

| ID | Status | Evidence |
| --- | --- | --- |
| AC-1 | **Satisfied** (T1). Sources reviewed; session usable; User scope; no Form open; Themes list; Edit Styles tree and existing classes; Form Font values; FlexLayout and Static categories; FX_BlueButton Normal State colours recorded; new class names absent; both dialogs left with Cancel; Designer clean. | t1-01, t1-03, t1-04 to t1-11 |
| AC-2 | **Satisfied for the readback (same session).** Form Family reads `Tahoma` after reopen (t3-03). FX_BlueBackground exists under FlexLayout with Background `#FF5CC6C7` after reopen (t3-04). One Add in T2; zero corrections. | t2-01 to t2-08, t2-17, t2-19; t3-03, t3-04 |
| AC-3 | **Satisfied for the readback (same session).** FX_WhiteHeader under Static: Font Size 16 and Bold True (t3-05); Normal State Foreground `#FFFFFFFF` (t3-06). FX_Header under Static: Font Size 16 and Bold True (t3-07). One Add each (T2). Picker evidence from T2 (t2-13). | t2-09 to t2-16, t2-20, t2-21; t3-05 to t3-07 |
| AC-4 | **Satisfied** (T2). Edit Styles OK once; Global Objects OK once; one Designer Save with native response "Global object(s) were saved."; no Cancel with unsaved changes. | t2-22, t2-23, t2-24 |
| AC-5 | **Satisfied for the same-session reopen.** Reopened Edit Styles shows all four changes with expected values (see T3 table); FX_BlueButton Normal State unchanged (`#FFFFFFFF` / `#FF5CC6C7`, t3-10); both dialogs left with Cancel; no prompt; Save disabled. Not cross-session (see limits). | t3-01 to t3-11 |
| AC-6 | **Holds.** No other theme touched; no class removed or renamed; no attribute changed beyond the four listed; FX_BlueButton only read; no Form opened or saved; no User Preferences, image library or runtime action; no unload; no checkout action; no task-boundary overrun. | Audit below |
| AC-7 | Partial: T1, T2 and T3 audits, inventory and final state recorded. Final acceptance audit not conducted (out of T3 scope). | This record |

## Starting state (T1 gate, observed)

- Browser tabs listed before the first selection: tab 0 = Infor Mongoose Designer (`designer/Default.aspx`), tab 1 = Mongoose Web Client (portal URL).
- Designer status bar: `ScopeType: User`. Toolbar Save and Undo disabled. No Form open.
- No session-expiry modal, sign-in page or server-event error seen in T1, T2 or T3. No re-login.

## T3 gate (observed)

- Tab list before the first selection (1); tab 0 selected (1). Fresh untargeted snapshot: `ScopeType: User`, no dialog open, toolbar Save disabled, Undo disabled, no Form open. Evidence `t3-01-designer-gate.png`.

## Themes list and FX_HelloWorld (T1 discovery; reselected in T3)

Eleven themes: ButtonTheme, Classic, Dark, **FX_HelloWorld**, Hi world, High Contrast, Infor, InforReport, Light, MyPortal, Projector. T1 evidence `t1-03-themes-list.png`. In T3, the Edit menu was opened once, Theme chosen once, and only FX_HelloWorld was selected. Edit... was clicked once. No other theme was selected. The Themes list was not re-captured in T3 (see Inventory).

## T3 readback (read-only; verified by selection in a reopened Edit Styles dialog)

Path to the readback: Edit (1) > Theme (1) > FX_HelloWorld (1 selection) > Edit... (1). Edit Styles was closed afterwards with Cancel (1).

| Check | Expected | Observed (T3) | Screenshot | Result |
| --- | --- | --- | --- | --- |
| (1) Form > Font > Family | `Tahoma` | `Tahoma` (Form selected; Size, Bold, Italic blank/Default as in T2) | `t3-03-form-selected-font-tahoma-readback.png` | Pass |
| (2) FormComponent > FlexLayout > FX_BlueBackground > Normal State > Background | `#FF5CC6C7` | `#FF5CC6C7` | `t3-04-fx-bluebackground-normal-background-readback.png` | Pass |
| (3a) Static > FX_WhiteHeader > Font > Size / Bold | `16` / `True` | `16` / `True` (Family shows Tahoma, inherited display) | `t3-05-fx-whiteheader-font-size-bold-readback.png` | Pass |
| (3b) FX_WhiteHeader > Normal State > Foreground | `#FFFFFFFF` | `#FFFFFFFF` (Background blank) | `t3-06-fx-whiteheader-normal-foreground-readback.png` | Pass |
| (4) Static > FX_Header > Font > Size / Bold | `16` / `True` | `16` / `True` (Family shows Tahoma, inherited display) | `t3-07-fx-header-font-size-bold-readback.png` | Pass |
| (5) Button > FX_BlueButton > Normal State > Foreground / Background | `#FFFFFFFF` / `#FF5CC6C7` (T1 baseline) | `#FFFFFFFF` / `#FF5CC6C7`; Font Family shows Tahoma (inherited display) | `t3-10-fx-bluebutton-normal-state-unchanged-readback.png` | Pass (unchanged) |
| Class placement | FX_BlueBackground under FlexLayout; FX_WhiteHeader and FX_Header under Static | Tree shows FX_BlueBackground as a child of FlexLayout; FX_Header and FX_WhiteHeader as children of Static | `t3-04`, `t3-08`, `t3-09` | Pass |
| Existence of new classes | Exactly one each, no duplicates | Each appears once in the tree | `t3-04`, `t3-06`, `t3-08` | Pass |

### Inherited display versus stored value (read-only observations)

- Before T2 (T1), Static's Font Family was blank (`t1-09`). In T3, after Static was selected, the accessibility snapshot shows its Family as `Tahoma` (no screenshot of this Static-only state was taken; `t3-05` shows FX_WhiteHeader's Family as Tahoma, read from the screen). The change is consistent with the Form value being displayed on descendants.
- The same Tahoma display appears on FX_WhiteHeader, FX_Header, FX_BlueButton and HyperLinkButton (the latter reached by an unintended selection; see deviations). None of these elements had Family set directly by the worker.
- **Unresolved:** whether Tahoma is stored on those children or only displayed through inheritance. The UI does not show this. Only the Form Family was set (T2).
- FlexLayout base Background (blank in T1 and T3) and FX_WhiteHeader base Background (blank) are unchanged.

## Deviations and recoveries (cumulative)

1. **T2:** a failed ref click (`Ref e1593 not found`) during pre-commit verification; recovered by one fresh untargeted snapshot and a coordinate re-expansion of Form. No value entered during the failed step. In T4 it was found that the reference came from the snapshot taken before the Form click, not from the most recent snapshot (controller rows 89 vs 92); this is audit item D2.
2. **T3:** a coordinate click intended for Button's expander (623, 409) instead selected **HyperLinkButton**, because the element tree had scrolled after the FX_Header selection. This was a selection only; no value was typed or changed. HyperLinkButton's Font Family displayed Tahoma (inherited). Recovery: the tree was scrolled back up (mouse wheel) and Button's expander was clicked at (608, 414) (`t3-09`). The following FX_BlueButton selection (ref) was then used. No Normal State value was changed.
3. **T3:** the Button expander click at (608, 414) may or may not have selected the Button row; the screenshot shows the row lightly highlighted before the click and the FX_BlueButton readback followed a separate ref click. Not claimed as a selection.
4. **T3:** Edit Styles and Global Objects were left with Cancel once each (as briefed). No prompt appeared; no answer was given to any prompt.

## Designer state at end of T3

- Edit Styles: closed with Cancel (1). No "Edit Styles" dialog present (find, read-only).
- Global Objects: closed with Cancel (1). No "Global Objects" dialog present (find, read-only).
- Designer toolbar Save: **disabled** (find, read-only). Undo: disabled. No Form open. Status bar `ScopeType: User`.
- No prompt, error or server-event message at any point in T3. No Designer Save was invoked in T3.

## T2 execution (observed; recap)

- Form Family typed `Tahoma` (text box, no list), Tab once. Readback `Tahoma`.
- FlexLayout: Class Name `FX_BlueBackground`, Add (1), tree refreshed; FX_BlueBackground selected; Background typed `#FF5CC6C7` (direct entry, no picker), Tab once. Readback `#FF5CC6C7`.
- Static: Class Name `FX_WhiteHeader`, Add (1); FX_WhiteHeader Font: Size typed `16` (plain text box, no unit shown), Tab; Bold combobox (Default / True / False) set to True via Open (1) and True. Normal State > Foreground picker opened (1); Solid label clicked (1); default values `#FFFFFFFF` (R 255, G 255, B 255, A 100) accepted; picker OK (1); readback `#FFFFFFFF`.
- Static: Class Name `FX_Header`, Add (1); FX_Header Font: Size `16`, Tab; Bold True.
- Commit: Edit Styles OK (1); Global Objects OK (1); Designer Save (1). Native response: toast heading "Save", message **"Global object(s) were saved."** Save disabled afterwards.

## Findings (observed only)

1. Adding a class collapses the Edit Styles tree; the new class appears only after its parent is reselected (T2, consistent with EXP-064).
2. Child elements display the Form's Font Family (Tahoma) in the Font category. Whether a value is stored on the child is unresolved (see inherited display section).
3. Font Size is a plain text box with no unit shown. Font Bold is a combobox with Default / True / False.
4. The Foreground picker's colour mode radios (None / Solid / Base Color) start unselected; clicking the visible "Solid" label selects Solid and shows the default `#FFFFFFFF` (R 255, G 255, B 255, A 100).
5. After Edit Styles OK, the FX_HelloWorld label was highlighted in Global Objects; Save became enabled after Global Objects OK.
6. The commit path reported "Save / Global object(s) were saved." and disabled Save again.
7. Reopening Edit Styles in the same Designer session shows all four changed values (T3). This is a same-session observation.
8. The element tree keeps its scroll position across selections; coordinate expander clicks can therefore land on a different row after a scroll (T3 deviation 2).

## Action audit

### T1 (unchanged from the T1 record)

| Item | Count |
| --- | --- |
| Browser tab lists / selections | 1 / 1 |
| Edit-menu opens / Theme choices | 1 / 1 |
| Global Objects opens (left by Cancel) | 1 (Cancel 1) |
| Theme selections / Edit... clicks | 1 / 1 |
| Edit Styles opens (left by Cancel) | 1 (Cancel 1) |
| Element selections | 4 |
| Category clicks | 2 |
| Expander coordinate clicks / ArrowRight presses | 2 / 1 |
| Add / Class Name entries / field entries / corrections | 0 / 0 / 0 / 0 |
| Picker opens / OKs | 0 / 0 |
| Edit Styles OK / Global Objects OK / Designer Saves | 0 / 0 / 0 |
| Ref clicks / coordinate clicks | 12 / 2 |
| Snapshots (as recorded in T1) | 14 |
| Finds / screenshots | 2 / 11 |

### T2 (as recorded in the T2 report)

| Item | Count |
| --- | --- |
| Browser tab lists / selections | 1 / 1 |
| Edit-menu opens / Theme menu choices | 1 / 1 |
| Global Objects opens (left by OK) | 1 (OK 1; Cancel 0) |
| Theme selections (FX_HelloWorld only) / Edit... clicks | 1 / 1 |
| Edit Styles opens (left by OK) | 1 (OK 1; Cancel 0) |
| Element selections (tree label clicks, incl. verification) | 15 |
| Category clicks | 2 |
| Add clicks | 3 (one each: FX_BlueBackground, FX_WhiteHeader, FX_Header) |
| Class Name entries | 3 |
| Typed field values | 4 (Family; Background; Size x2) |
| Tab presses after entries | 4 |
| Corrections | 0 |
| Bold combobox Open clicks / True selections | 2 / 2 |
| Foreground picker opens / Solid label clicks / OKs | 1 / 1 / 1 |
| Edit Styles OK / Global Objects OK / Designer Saves | 1 / 1 / 1 |
| Delete / Regenerate / top-toolbar Delete clicks | 0 / 0 / 0 |
| Ref clicks executed / failed ref clicks | 34 / 1 (`Ref e1593 not found`) |
| Coordinate clicks | 2 (Form expander) |
| Snapshots | 40 (corrected in T4 from the 41 first recorded; controller-verified: 74 reads = 40 snapshots + 9 finds + 24 screenshots + 1 tab list) |
| Fresh-snapshot recovery used | 1 |
| Finds / screenshots | 9 / 24 |
| Prompts / re-logins | 0 / 0 |

### T3 (this task)

| Item | Count | Notes |
| --- | --- | --- |
| Browser tab lists / selections | 1 / 1 | List before selection |
| Edit-menu opens / Theme menu choices | 1 / 1 | |
| Global Objects opens | 1 | Left by **Cancel** (1). No OK. |
| Theme selections (FX_HelloWorld only) | 1 | |
| Edit... clicks | 1 | Opened Edit Styles |
| Edit Styles opens | 1 | Left by **Cancel** (1). No OK. |
| Element selections (intended) | 7 | Form (coordinate), FlexLayout, FX_BlueBackground, Static, FX_WhiteHeader, FX_Header, FX_BlueButton |
| Element selections (unintended) | 1 | HyperLinkButton (coordinate, deviation 2); no change |
| Category clicks | 2 | FX_WhiteHeader Normal State; FX_BlueButton Normal State |
| Tree expander clicks | 3 | Form x2 (coordinate, one selects and one expands); Button x1 (coordinate, 608,414) |
| Coordinate clicks (total) | 4 | Two at (583,368); one at (623,409) (HyperLinkButton, deviation 2); one at (608,414) |
| Mouse-wheel scrolls | 1 | Tree scrolled up (-2000) |
| Ref clicks | 14 | Edit menu, Theme, FX_HelloWorld, Edit..., FlexLayout, FX_BlueBackground, Static, FX_WhiteHeader, Normal State (WhiteHeader), FX_Header, FX_BlueButton, Normal State (BlueButton), Edit Styles Cancel, Global Objects Cancel |
| Add / Class Name entries / typed field values / corrections | 0 / 0 / 0 / 0 | Read-only |
| Picker opens / OKs | 0 / 0 | |
| Edit Styles OK / Global Objects OK | 0 / 0 | |
| Edit Styles Cancel / Global Objects Cancel | 1 / 1 | No unsaved change (none made in T3) |
| Designer Saves | 0 | Not invoked; Save disabled at end |
| Delete / Regenerate / top-toolbar Delete clicks | 0 / 0 / 0 | |
| Prompts | 0 | None appeared; none answered |
| Errors / timeouts / "Ref not found" | 0 | |
| Fresh-snapshot recovery used | 0 | |
| Snapshots | 17 | 2 untargeted (gate; after Theme); 15 targeted to Edit Styles, Global Objects, or a Normal State panel |
| Finds (read-only) | 4 | "Theme"; "Cancel"; "Save"; "Global Objects" |
| Screenshots | 11 | `t3-01` to `t3-11` |
| Keyboard presses | 0 | |
| Re-logins | 0 | No session expiry observed |
| Unload / Regenerate / FormSync / deployment / checkout | 0 | |
| Forms opened or saved / image library / User Preferences / runtime actions | 0 | |
| Other themes touched | 0 | |
| Browser JavaScript / SQL / console / network | 0 | |

### Cumulative T1 + T2 + T3

| Item | T1 | T2 | T3 | Total |
| --- | --- | --- | --- | --- |
| Browser tab lists | 1 | 1 | 1 | 3 |
| Browser tab selections | 1 | 1 | 1 | 3 |
| Edit-menu opens | 1 | 1 | 1 | 3 |
| Theme dialog (Global Objects) opens | 1 | 1 | 1 | 3 |
| Theme dialog closed by Cancel / OK | 1 / 0 | 0 / 1 | 1 / 0 | 2 / 1 |
| Theme selections (FX_HelloWorld) | 1 | 1 | 1 | 3 |
| Edit... clicks | 1 | 1 | 1 | 3 |
| Edit Styles opens | 1 | 1 | 1 | 3 |
| Edit Styles closed by Cancel / OK | 1 / 0 | 0 / 1 | 1 / 0 | 2 / 1 |
| Element selections (incl. unintended) | 4 | 15 | 8 | 27 |
| Category clicks | 2 | 2 | 2 | 6 |
| Add clicks | 0 | 3 | 0 | 3 |
| Class Name entries | 0 | 3 | 0 | 3 |
| Typed field values | 0 | 4 | 0 | 4 |
| Corrections | 0 | 0 | 0 | 0 |
| Picker opens / OKs | 0 / 0 | 1 / 1 | 0 / 0 | 1 / 1 |
| Bold combobox Open / True | 0 / 0 | 2 / 2 | 0 / 0 | 2 / 2 |
| Edit Styles OK | 0 | 1 | 0 | 1 |
| Global Objects OK | 0 | 1 | 0 | 1 |
| Designer Saves | 0 | 1 | 0 | 1 |
| Ref clicks executed | 12 | 34 | 14 | 60 |
| Coordinate clicks | 2 | 2 | 4 | 8 |
| Mouse-wheel scrolls | 0 | 0 | 1 | 1 |
| Keyboard presses | 1 | 4 | 0 | 5 |
| Failed ref clicks | 0 | 1 | 0 | 1 |
| Snapshots | 14 | 40 | 17 | 71 |
| Fresh-snapshot recovery used | 0 | 1 | 0 | 1 |
| Finds | 2 | 9 | 4 | 15 |
| Screenshots | 11 | 24 | 11 | 46 |
| Prompts | 0 | 0 | 0 | 0 |
| Re-logins | 0 | 0 | 0 | 0 |

Notes: in T4 all counts were reconciled against the controller audits `evidence/EXP-100/harness-audit-T1.md` to `harness-audit-T3.md` (16/28, 49/74, 20/33 actions/reads; total 85 actions and 135 reads). Corrections: T2 snapshots 41 → 40; cumulative snapshots 72 → 71; total reads 135. All other figures agree. The total of ref and coordinate clicks in T1–T3 is 68 (60 ref + 8 coordinate); the T2 ref click count of 34 excludes one failed click.

## Worker-written-file inventory (T1 + T2 + T3)

Written directly by the worker:

- `experiments/EXP-100-hello-world-part-6-section-8-fx-theme-classes.md` (created in T1; rewritten in T2; rewritten in T3).
- `evidence/EXP-100/t1-01-designer-gate.png` to `t1-11-after-cancel-designer-state.png` (11 files, T1).
- `evidence/EXP-100/t2-01-designer-gate.png` to `t2-24-after-designer-save-response.png` (24 files, T2).
- `evidence/EXP-100/t3-01-designer-gate.png` to `t3-11-final-clean-designer-state.png` (11 files, T3):
  - `t3-01-designer-gate.png`
  - `t3-02-edit-styles-tree-collapsed.png`
  - `t3-03-form-selected-font-tahoma-readback.png`
  - `t3-04-fx-bluebackground-normal-background-readback.png`
  - `t3-05-fx-whiteheader-font-size-bold-readback.png`
  - `t3-06-fx-whiteheader-normal-foreground-readback.png`
  - `t3-07-fx-header-font-size-bold-readback.png`
  - `t3-08-after-button-expander-click-inspection.png` (shows HyperLinkButton selected after the unintended click; not a readback)
  - `t3-09-tree-scrolled-up-to-button.png`
  - `t3-10-fx-bluebutton-normal-state-unchanged-readback.png`
  - `t3-11-final-clean-designer-state.png`

Written by the Playwright MCP tool as a by-product of browser actions (not by the worker; outside `evidence/EXP-100/`; the harness inventory is authoritative):

- `evidence/playwright/page-*.yml` snapshot files for T1, T2 and T3 (one per action returning a snapshot file; not enumerated exhaustively).
- `evidence/playwright/console-2026-10-15T12-53-11-120Z.log` (T1), `console-2026-10-15T12-59-46-125Z.log` (T2), `console-2026-10-15T13-07-28-547Z.log` (T3). Not inspected.

No other repository file was written by the worker. No other theme, Form, class or file was touched.

## Final state (end of T3)

- Designer tab (tab 0): User scope; no Form open; no dialog open; toolbar Save disabled; Undo disabled; no prompt; no unsaved change.
- Web Client tab (tab 1): not touched in T3.
- FX_HelloWorld (as read back in the same session):
  - Form Font Family: `Tahoma`.
  - FX_BlueBackground (under FlexLayout): Normal State Background `#FF5CC6C7`.
  - FX_WhiteHeader (under Static): Font Size 16, Bold True; Normal State Foreground `#FFFFFFFF`.
  - FX_Header (under Static): Font Size 16, Bold True.
  - FX_BlueButton (under Button): Normal State Foreground `#FFFFFFFF`, Background `#FF5CC6C7` (unchanged from T1).
- Limits: all readback is same-session UI observation (the Edit Styles and Global Objects dialogs were closed and reopened within one Designer session). This does not establish cross-session, database-level or replay durability. Whether the child-element Tahoma is stored is unresolved.
- T4 note: in the accessibility snapshots, Form's Family label reads `* Family:` while the child elements read `Family:`. The screen captures are not consistent about such markers (for example `t2-08` and `t2-14` show none where `t3-04` does), so this is recorded as an observed label pattern only and is not evidence of stored state. See `evidence/EXP-100/T4-final-acceptance-audit.md` section 6.

## Knowledge state (T3)

- Four changes are readable in the reopened theme editor with the expected values (same session): **observed**.
- FX_BlueButton's Normal State colours unchanged after the commit: **observed** (same session).
- Child-element Family display as inherited from Form: **observed** (display only); stored value **unresolved**.
- Cross-session or database persistence: **unresolved**; not claimed.

## T4 - final acceptance audit (documentation only; zero browser calls)

- Result: `evidence/EXP-100/T4-final-acceptance-audit.md`.
- AC verdicts: AC-1 pass (observed); AC-2 to AC-5 pass (same session; AC-4 has the limit that the two OK steps produced no native text); AC-6 pass with deviations D1 to D11 requiring operator disposition; AC-7 satisfied by that audit.
- Recommendation: **ACCEPTED WITH LIMITS, subject to operator disposition of D1 to D11.** Not blocked.
- Count corrections made: T2 snapshots 41 → 40; cumulative snapshots 72 → 71; total reads 135 (85 actions and 135 reads in total, matching the controller).
- Screenshots viewed in T4 for the first time: `t2-15`, `t2-16`, `t2-07`, `t2-12`, `t2-14`, `t2-06`, `t2-08`, `t2-17`, `t2-20`, `t2-21`, `t3-04`, `t3-07`. `t3-03` and `t3-09` were already read in T3 (controller rows 17 and 42) and were re-inspected in T4. `t2-06` does not show the new child (cut off); `t3-09` does not prove which row is selected (the highlight there is consistent with hover).
- Still excluded: cross-session durability, database persistence and replay verification. Whether the child-element Tahoma is stored (U1) remains unresolved.
- Final state: unchanged from the end of T3. No Designer action was taken in T4; the Designer was not reopened.
- Next step (not performed): operator disposition of D1 to D11, and, only if the coordinator authorises it, a cross-session persistence check. No further change to FX_HelloWorld is permitted by the brief.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 8 is complete: the factory theme **FX_HelloWorld** now has Form Font Family **Tahoma**, the FlexLayout class **FX_BlueBackground** (Background `#FF5CC6C7`) and the Static classes **FX_WhiteHeader** (Size 16, Bold True, Normal State Foreground `#FFFFFFFF`) and **FX_Header** (Size 16, Bold True), verified in a reopened Edit Styles. The operator decided acceptance and waived the deviations below for EXP-100 only.

- Changed, for later cleanup (tenant-wide theme FX_HelloWorld from EXP-064; themes are in the AGENTS.md scope extension):
  - Form > Font > Family `Tahoma` (was blank).
  - New classes FX_BlueBackground (under Form > FormComponent > FlexLayout), FX_WhiteHeader and FX_Header (under Static); every other attribute left at its default.
  - One commit: Edit Styles OK, Global Objects OK, one Designer Save: "Save - Global object(s) were saved." No Form open or saved.
  - Side effect: FX_HelloWorld is the operator's Web Client Layout theme since EXP-065, so Forms will likely render in Tahoma; not checked at runtime.
- **Run R-20261015-205242-6l3w** (4 worker tasks): T1 read-only discovery; T2 all four changes and the commit (the coordinator kept the uncommitted theme edit within one task, so the plan's T2-T4 became one task; not a boundary overrun); T3 read-only readback; T4 documentation-only audit. Paused once, for the deviation ruling.
- Screenshots viewed by the operator assistant: `t2-24` (Save toast "Global object(s) were saved.", User scope, no Form open); `t3-03` (Form Font `* Family: Tahoma`, Size blank, Bold and Italic Default); `t3-04` (FX_BlueBackground under FlexLayout, Normal State `* Background: #FF5CC6C7`); `t3-06` (FX_WhiteHeader `* Foreground: #FFFFFFFF`); `t3-07` (FX_Header `* Size: 16`, `* Bold: True`, `Family: Tahoma` without the asterisk); `t3-10` (FX_BlueButton `#FFFFFFFF` / `#FF5CC6C7`, unchanged); also `t1-07`, `t2-07`, `t2-08` for the asterisk check.
- Findings (observed):
  1. **Theme editor path** as in EXP-064: Edit > Theme > FX_HelloWorld > Edit... opens Edit Styles (Elements, Categories, Attributes). Tree path: FX_HelloWorld > UIElement > Form > FormComponent > (Button, ..., FlexLayout, ..., Static, ...).
  2. **Controls:** Font Family is a text box (no list); Size a plain text box with no unit; Bold and Italic are Default/True/False comboboxes. The FlexLayout Normal State has Opacity, Background, Border Color, Border Thickness, Top/Right/Bottom/Left Border and Border Visibility. With a class selected, the Class Name/Add row is replaced by a **Delete** button (not used).
  3. **Asterisk marker:** in a freshly opened Edit Styles, `*` before an attribute label marks a value set at that level (Form `* Family`, FlexLayout's `* Top Border: False` and so on in T1). Values entered in the current dialog show no asterisk until it is reopened. After the reopen the child classes show `Family: Tahoma` without an asterisk, which suggests it is inherited from Form, not stored. That answers the record's open question as far as the UI can.
  4. After the reopen, FX_BlueBackground shows its border values (False/None, the same as FlexLayout's) with asterisks, which it did not show right after the Add (`t2-07`). Whether saving copied the parent element's values into the class is unresolved; no value differs from FlexLayout's.
  5. A new class appears only after its parent is reselected (EXP-064). The Solid label click in the color picker worked first time and offered `#FFFFFFFF`.
  6. The Edit Styles tree keeps its scroll position. A coordinate click in a scrolled tree hit HyperLinkButton instead of Button's expander (selection only).
- Counts (controller-reconciled): Theme dialog opens 3 (Cancel 2, OK 1); Edit Styles opens 3 (Cancel 2, OK 1); Add 3; Class Name entries 3; typed values 4; corrections 0; picker opens 1, OK 1; Bold set 2; Designer Saves 1; coordinate clicks 8; mouse-wheel 1; failed ref clicks 1; prompts 0; Yes answers 0; unloads 0; checkout actions 0; re-logins 0; browser actions 85, reads 135.
- Operator rulings (EXP-100 only): D1, D3, D7 tree-expander coordinate clicks; D2 click with an outdated ref (failed, no effect); D4 coordinate click as the recovery attempt; D6 unintended HyperLinkButton selection (nothing changed); D8 one mouse-wheel scroll; D10 filename-only Grep of experiments/; D11 transcript reads outside Section 8. All waived. D5 was permitted recovery; D9 (snapshot count) was corrected.
- Limits: same-session UI evidence only; no runtime check of the Tahoma font or of the classes (they are applied in Part 7); console logs not inspected.
- Confinement (git status): only `evidence/EXP-100/` and this record were written by the run.
- Next: Part 6 section 9 is a recap with no actions. Part 7 builds the customer portal with Flex Layout and applies these classes.
