# EXP-062-R2 — Hello World Part 4 Section 4: Configure picture import UI on the User-scope FX_Items Form (replay after authorized metadata unload)

**FINAL STATUS (T8, 2026-10-11): EXP-062-R2 is BLOCKED at AC-6.** FX_PictureStatic was not placed, configured, or bound. The one operator-authorized placement attempt (T7) was accepted by the Designer but created a default-named, unconfigured Static `static1_USER` with ambiguous, clipped geometry (Size `87.5; 19.3333333333333`, Location `13.7222222222222; 42.75`). AC-1, AC-2, AC-3, and AC-4 passed (AC-4 in-session only). AC-5 is incomplete (string `FX_sImport` = `Import` created and assigned; the canvas displays the raw ID). AC-6 failed. AC-7 to AC-12 pending (not performed). AC-13 pending. **Designer Save count 0.** The Form is open and **dirty** (Save enabled) and **must not be saved or closed automatically**; its disposition requires separate explicit operator authorization. Nothing is replay_verified. Full report: `evidence/EXP-062-R2/T8-final-blocked-report.md` (AC-1 to AC-13 matrix, reconciled action audit, file inventory).

Correction (T8): the T7 authorization paragraph below omitted two conditions in the operator's T8 brief: the operator authorized **exactly one** additional placement attempt, and required stopping blocked if placement was ambiguous. T7 complied with both.

**Current status (after T7, 2026-10-11): T7 placement attempt made once under the operator's authorized free-area placement; the Designer ACCEPTED the drop, adding a Static named `static1_USER` (Size `87.5; 19.3333333333333`, Location `13.7222222222222; 42.75`, not the standard `20; 1`). Its outline runs past the canvas's right and bottom edges, so the placement is ambiguous against the approved bounds. Stopped blocked per the brief's stop rule: the component is NOT renamed, bound, or configured (No Colon not set); no second drop, no Save, no FX_ImportPicture, no Primary change. Component count is 17. The Designer is open and dirty (Save enabled) with three unsaved changes (FX_VarTestEdit deletion, Caption/string, and the new Static). Coordinator decision needed (see T7 §11). Nothing is replay_verified. Full report: `evidence/EXP-062-R2/T7-picture-static-authorized-placement.md`.

Operator authorization (2026-10-12, recorded at T7 start): AC-6 placement is amended. FX_PictureStatic may be placed in the free in-form area below the input column and right of FX_RefreshButton (approximately x 600–800, y 330–365 in the T6 screen coordinates), which FX_VarTestEdit's deletion vacated. This is an approved positional deviation from AC-6 (the "right of the input fields" wording), not an AC-6 failure. All other acceptance requirements are unchanged. The earlier T6 rejected drop attempt remains in the audit as a historical attempt.

**Current status (after T6, 2026-10-11): T6 BLOCKED at the FX_PictureStatic placement gate. FX_PictureStatic was NOT added.** The Toolbox Static must sit to the right of the input fields, but the form canvas ends at the input column's right edge; a drop just outside was rejected with no component added (16 components unchanged). A read-only probe showed that **No Colon is exposed** as a True/False dropdown under Miscellaneous > Specific Attributes once that sub-group is expanded (observed on existing FX_ItemStatic, value False; not changed). This does not reproduce EXP-022's "not exposed" finding. The Designer is open and dirty (Save enabled); no Save, binding, No Colon change, FX_ImportPicture, or Primary change. Coordinator decision needed on placement (see T6 §7). Nothing is replay_verified. Full report: `evidence/EXP-062-R2/T6-picture-static-configuration.md`.

Earlier status (after T5): T5 caption string created and assigned, stopped for coordinator review. String `FX_sImport` created (exact-ID prompt, Yes once) with String Value `Import` (committed, read back). FX_RefreshButton Caption is now `FX_sImport`; Name, Primary `FX_Test`, geometry, and binding unchanged. The canvas still displays the raw ID `FX_sImport` rather than `Import`, so display resolution is unverified. The Designer is open and dirty (Save enabled) with three in-session changes (FX_VarTestEdit deletion, Caption assignment, string creation). NOT saved, closed, reopened, or unloaded. FX_PictureStatic, No Colon, FX_ImportPicture, and Primary reassignment have not been made. Nothing is replay_verified. Full report: `evidence/EXP-062-R2/T5-caption-string-and-button.md`.

Earlier status (after T4): T4 complete baseline and single-component deletion done, stopped for coordinator review. FX_VarTestEdit was deleted in the open Designer session (component count 17 → 16). The Designer is dirty (Save enabled) and NOT saved, closed, or reopened.** Accidental first click on the toolbar Delete (which is "Delete Form Definition") was declined with No; the component deletion then used the Components-grid trash control, whose confirmation named FX_VarTestEdit. FX_sImport, FX_PictureStatic, FX_ImportPicture, Caption, and Primary changes have **not** been made. Nothing is replay_verified. Full report: `evidence/EXP-062-R2/T4-baseline-and-single-component-deletion.md`.

Earlier status (after T3): T3 Designer unload and binding gate PASSED. `FX_Picture` is now visibly offered by the native `FX_UMCombobox` Binding dropdown (no binding committed; Save disabled). The Designer `FX_Items` tab was closed once (no prompt), one Designer `Unload All Global Form Objects` was invoked (silent), and the same User-scoped Form was reopened via the recent-forms list (no retry). Baseline unchanged after reopen. **No Form mutation, string creation, component deletion, handler creation, or Save has been performed.** Section 4 is **not** yet implemented. Nothing is replay_verified.

Earlier status (after T2): T1 preflight COMPLETE; T2 Web Client runtime unload COMPLETE. Preference `Unload IDO Metadata With Forms` checked before and after (unchanged). Both clean FX_Items runtime tabs closed (no prompt). Exactly one Web Client `Unload All Global Form Objects` invoked (silent completion). Designer untouched: `FX_Items` still open, User scope, clean, Save disabled. **No Designer close or unload, no reopen, no FX_Picture binding check, no Form change, no Save yet.** Next authorized step (T3): the Designer clean close, one Designer `Unload All Global Form Objects`, reopen, and the FX_Picture binding check. Nothing is replay_verified.

Replay of EXP-062, which was blocked at AC-2 because `FX_Picture` (created in EXP-061) was not offered by the Designer binding pickers. This replay adds the operator-authorized metadata unload (one Web Client runtime, one Designer), as the tutorial directs after adding an IDO property (hello-world-pt4.md Section 3 step 7).

## 1. Run identity

- Run `R-20261011-233114-6TXk`, experiment EXP-062-R2, cycle 0, task **T1** (read-only preflight, baseline, preference reading, record creation).
- Worker session `1a1726ce-7754-4c7b-81f9-602aedcce8ec`; task_message_id `0617ab24-7194-4a1f-8578-8b06512ee837`.
- Date 2026-10-11. LEARNING MODE. Editing scope **User**. Target Form `FX_Items`, ScopeName `anton.ramos@3mworks.com.ph`.
- Brief commits: `4cd8984` (draft), `b39bfa4` (approved). Prior blocked record: `experiments/EXP-062-hello-world-part-4-section-4-configure-picture-import-ui.md` (unmodified).
- Full T1 report: `evidence/EXP-062-R2/T1-preflight-report.md`.

## 2. Repository baseline (operator-provided; not re-verified; no shell)

- Branch `claude-harness`. Pre-existing modifications (operator-provided): `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. Untracked: `assets/` (operator's own section 5 images).
- Worker-written files in this task: this record and `evidence/EXP-062-R2/T1-preflight-report.md`, plus 15 PNG screenshots under `evidence/EXP-062-R2/`. Browser-tool snapshot and console files under `evidence/playwright/` were tool-written. Full inventory: T1 report §10.

## 3. T1 results (observed only)

| Gate / check | Result | Evidence |
| --- | --- | --- |
| Session usable; no challenge, dialog, or unsaved change | Passed | `t1-01`, `t1-10` |
| Designer identity: Form `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | Passed | `t1-02` (Form tab, find readback), `t1-01` (footer) |
| Designer Save disabled before any mutation | Passed | `t1-01`, `t1-09` |
| Preference `Unload IDO Metadata With Forms` read as **checked**; unchanged; dialog closed with `Close Window` (not OK) | Passed | `t1-14`, `t1-15` |
| Clean-runtime precondition | Both `FX_Items` runtime tabs clean (Save disabled); none closed | `t1-10`, `t1-11` |
| Component baseline: 17 entries; exactly one `FX_VarTestEdit` (Edit, Binding Variable `variables.FX_VarTest`) and one `FX_RefreshButton` (PushButton, Caption literal `FX_Refresh`, Primary `FX_Test`) | Observed | `t1-01`; T1 report §5 |
| Variables: `FX_VarTest` (Form-Temporary, `~LIT~()`, Persistent False, Global False); `InitialCommand` | Observed | `t1-03` |
| Handlers: group `FX_Test`, seq 0 Prompt and seq 1 Set Values (both enabled); `FX_ImportPicture` absent | Observed | `t1-04` |
| Pre-unload binding check: `object.FX_Picture` absent from the `FX_UMCombobox` Binding dropdown (sorted list; `object.FX_Item` then `object.FX_UM`). Dismissed without commit | Observed: absent (expected pre-unload) | `t1-06`, `t1-07` |
| `FX_sImport` absent (FX_-prefixed strings: `FX_sCost`, `FX_sDescription`, `FX_sItem`, `FX_sUM`). Dismissed without commit | Observed: absent | `t1-08`, `t1-09` |
| Runtime data (visible, not interacted): records `dumbbell`, `eggs`, `guitar`; record 1 `45 pound iron`, `45.00`, `EA` | Observed | `t1-10` |

Component geometry and per-component properties are recorded in the T1 report §5. Pane, GridColumn, and FormCollectionGrid detail properties and the Miscellaneous > Specific Attributes group (No Colon) were **not** read (limitation). Some Edit `Location` y-values (23.75) do not visibly match the canvas row order (unresolved).

## 4. Action audit (T1; cumulative for this task)

Unloads 0 (Web Client 0, Designer 0). Designer Save 0. Component add/delete 0. String creation 0. Handler creation 0. Binding, Caption, or Primary commit 0. Designer Form close 0; reopen 0. Runtime Form close 0. Runtime data edit 0. Business record change 0. Preference change 0. IDO checkout, check-in, or undo 0. Navigation, reload, reauthentication 0. Browser JavaScript, console, or network inspection 0.

Non-mutating: Chrome tab list 1; tab selects 2; explicit snapshots 2; find calls 19; screenshots 15; component row selections 11; Properties/Details tab clicks 5; read-only dropdown opens 2 (each dismissed with Escape); menu opens 2; dialog opens 1 (closed with Close Window); Escape presses 3. Full table: T1 report §9.

## 5. Acceptance matrix (T1 scope)

| AC | Status | Note |
| --- | --- | --- |
| AC-1 | **Supported (observed, one session)** | Identity, scope, Save disabled, no challenge. User-scope edit permission inferred from editable controls |
| AC-2 | **Partial.** Preference gate passed. Pre-unload FX_Picture absence observed. Unload steps and post-unload check **not performed** | Awaiting §6 decision |
| AC-3 | **Partial.** Component, variable, and handler baselines captured; FX_Picture prerequisite not yet satisfied | Pane, GridColumn, Specific Attributes not read |
| AC-4 to AC-13 | Not attempted | Out of T1 scope |

## 6. Open decisions for the coordinator (blocking the next step)

1. **Which runtime tab to close before the unload.** Two `FX_Items` runtime Form tabs are open (both clean, Save disabled): the middle tab and the right-most (originally active) tab. The brief permits closing "a clean FX_Items runtime Form" but does not say whether one or both. Recommendation: close both clean FX_Items runtime tabs in the next task, one at a time, each verified clean before close, since they are the same clean Form. Needs explicit confirmation.
2. **EXP-005-R2 rule conflict.** EXP-005-R2 treats a checked `Unload IDO Metadata With Forms` as a block. EXP-006-R2, EXP-029, and this brief require it checked. The brief was followed (checked = proceed). Recommend the coordinator confirm and that EXP-005-R2's wording be corrected in a separate task.
3. **FX_Picture cause** remains unresolved. The authorized unload is the next check. Whether binary properties are filtered from the dropdown is untested; the Edit Property Binding picker is an alternative surface.

## 6a. T2 — Web Client runtime unload (cycle 1, task T2)

Full report: `evidence/EXP-062-R2/T2-runtime-unload-report.md`.

- Preference re-read after the unload: `Unload IDO Metadata With Forms` still **checked** (`t2-08`); dialog closed with Close Window. T2's pre-unload confirmation relied on T1's readback (`t1-14`); see report §5.1.
- Runtime tabs before: two `FX_Items` runtime tabs (middle, right-most), both clean with Save disabled (`t2-01`, `t2-03`). Closed one at a time with each tab's close control; no prompt (`t2-02`, `t2-04`). Other tabs (`Sql Tables`, `Sql Columns`, `Property Classes`, `IDOs`) untouched.
- Unload label observed in Form > Definition: **`Unload All Global Form Objects`** (single unload item; `Designer`, `Runtime Builder...`, and `Site Developer Impersonation` also listed) (`t2-05`). Observed with no runtime Form active (see report §5.2).
- Invoked once. Completion silent: menu closed, no dialog, no prompt (`t2-06`). Effect not verified in T2.
- Designer state read-only after the unload: `FX_Items`, User scope, Save disabled, Caption `FX_Refresh` (`t2-07`).
- Counts: Web Client unloads 1; Designer unloads 0; runtime closes 2; Designer Save 0; Designer close/reopen 0; component, string, handler, binding, Caption, or Primary changes 0; preference changes 0; business-record or runtime-action changes 0; checkout actions 0.

## 6b. T3 — Designer unload, reopen, and FX_Picture binding gate (cycle 2, task T3)

Full report: `evidence/EXP-062-R2/T3-designer-unload-and-binding-gate.md`.

- Designer `FX_Items` closed once via its closable tab control; no unsaved-changes prompt (`t3-02`).
- Exact Designer label observed with the Form closed: **`Unload All Global Form Objects`** (Form > Definition submenu; also listed `Design`, `Revert Form Definition`, disabled `Regenerate Form` and `Regenerate Form from Cache`, `Site Developer Impersonation`, `New`, `Copy`, `Delete`) (`t3-03`). Invoked once; silent completion (`t3-04`).
- Reopened via Designer Form menu recent-forms entry `FX_Items` (first attempt; no retry). Identity: Name `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Save disabled (`t3-05`).
- Baseline after reopen (T1 vs T3): 17 components with the same names and order; FX_RefreshButton Name/Caption `FX_Refresh`/Primary `FX_Test`/geometry unchanged; FX_VarTest (`~LIT~()`, Persistent False, Global False) unchanged; FX_Test group with both original actions unchanged; FX_ImportPicture and FX_PictureStatic absent (`t3-07`, `t3-09`, `t3-11`, `t3-14`). Detail readbacks for input/label components not repeated (limitation).
- **Binding gate: PASSED.** The `FX_UMCombobox` Binding dropdown lists `object.FX_Picture` (between `object.FX_Item` and `object.FX_UM`; `t3-15`). Dismissed with Escape; Binding still `object.FX_UM`; Save disabled (`t3-16`).
- Disclosed slip: I opened the grid's Add (New) Event Handler dialog by mistake while trying to expand the FX_Test group. I cancelled it; no name entered, OK not clicked, no handler created (`t3-09`, `t3-10`). The Designer URL query `?MGForm=FX_Items` dropped after the Cancel (same as T1; cause unresolved); the Form stayed open and clean.
- Counts (cumulative through T3): Web Client unloads 1; Designer unloads 1; runtime closes 2; Designer closes 1; Designer reopens 1; Designer Save 0; Form, component, string, handler, binding, Caption, or Primary changes 0; preference changes 0; business-record or runtime actions 0; checkout actions 0.

## 6c. T4 — complete baseline and single-component deletion (cycle 3, task T4)

Full report: `evidence/EXP-062-R2/T4-baseline-and-single-component-deletion.md`.

- Pre-mutation gates: identity User scope (`FX_Items`, `User version for user anton.ramos@3mworks.com.ph`); Save disabled; no dialog; 17 components with exactly one FX_VarTestEdit (Edit, Binding Variable `variables.FX_VarTest`, Size `37.05; 2`, Location `12.7222222222222; 30.25`, Tab 0) and one FX_RefreshButton (Caption `FX_Refresh`, Primary `FX_Test`, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`, Tab 0); FX_VarTest (`~LIT~()`, Persistent False, Global False); FX_Test with two actions (seq 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`; seq 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))`); FX_ImportPicture absent; FX_PictureStatic absent.
- Baseline reconciles with T1 and T3. Limits: Pane (00)/(01) rows show Form-level properties only; Specific Attributes / No Colon not read for existing Statics.
- **Deletion:** FX_VarTestEdit only, count 17 → 16. The first control clicked was the top toolbar Delete, whose tooltip is "Delete Form Definition"; its confirmation asked to delete the FX_Items form definition. I clicked **No**; the Form and FX_VarTestEdit were unaffected. The component was then deleted using the Components-grid trash control (tooltip "Delete"), whose confirmation read "delete FX_VarTestEdit and all the components it contains?"; I clicked OK once (`t4-07` to `t4-11`).
- Post-deletion: 16 remaining components, FX_VarTestEdit absent; FX_RefreshButton unchanged; FX_Test with both actions unchanged; FX_VarTest unchanged; InitialCommand present; FX_ImportPicture absent.
- Designer dirty (Save and Undo enabled). No Save, close, reopen, or runtime action. The deletion exists only in the open session until Save.
- Counts (cumulative through T4): Web Client unloads 1; Designer unloads 1; runtime closes 2; Designer close 1 and reopen 1 (pre-mutation); Designer Save 0; component deletions 1; Form-definition delete dialog opened and declined 1; String, handler, binding, Caption, Primary, or preference change 0.

## 6d. T5 — caption string FX_sImport created and assigned (cycle 4, task T5)

Full report: `evidence/EXP-062-R2/T5-caption-string-and-button.md`.

- Pre-check: FX_sImport absent (Caption dropdown FX_ entries: FX_sCost, FX_sDescription, FX_sItem, FX_sUM) (`t5-03`). Identity User scope confirmed; 16 components; FX_RefreshButton Caption `FX_Refresh`, Primary `FX_Test`, Size `14.25; 1.89`, Location `12.1666666666667; 5.25` (`t5-02`).
- The Caption ellipsis on the literal caption `FX_Refresh` offered "String FX_Refresh does not exist. Create it?" — **declined (No)**; that would have created an unexpected ID (`t5-05`, `t5-06`).
- Caption typed as `FX_sImport`, committed with Tab (`t5-08`, `t5-09`). Ellipsis then offered "String FX_sImport does not exist. Create it?" — **approved (Yes) once** (`t5-10`).
- String editor: prefilled `FX_s Import` replaced with literal `Import`, committed with Tab, OK once. One failed fill attempt on a read-only description textarea (refused, no change), then a corrected fill on the active editor (`t5-11` to `t5-13`).
- Readback: String `FX_sImport`, String Value `Import` (`t5-16`). Caption dropdown lists `FX_sImport` (`t5-15`).
- Caption property: `FX_sImport`. Displayed canvas button: `FX_sImport` (not `Import`) (`t5-14`, `t5-17`). Unresolved.
- Preserved after T5: 16 components, FX_VarTestEdit absent, Name FX_RefreshButton, Binding None, Primary `FX_Test`, geometry unchanged (`t5-snap-18`); FX_VarTest `~LIT~()` (`t5-19`); FX_Test two actions (`t5-18`); FX_ImportPicture and FX_PictureStatic absent.
- Save enabled (dirty). No Save, close, reopen, unload, runtime action, or JavaScript.
- Counts (cumulative through T5): Web Client unloads 1; Designer unloads 1; runtime closes 2; Designer close 1 and reopen 1 (T3); component deletions 1 (T4); Form-level delete dialog declined 1 (T4 incident); strings created 1 (`FX_sImport`); string creation declined 1 (`FX_Refresh`); Caption assignments 1; Designer Save 0.

## 6e. T6 — FX_PictureStatic configuration gate (cycle 6, task T6): blocked at placement

Full report: `evidence/EXP-062-R2/T6-picture-static-configuration.md`.

- Pre-check: Designer FX_Items, User footer, Save enabled (dirty), no dialog; 16 components; FX_VarTestEdit, FX_PictureStatic, and FX_ImportPicture absent; FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test` (`t6-01`, `t6-snap-07`).
- Placement attempt: one Toolbox Static drag from `(81, 788)` to `(835, 200)`, just right of the input column and outside the form canvas (which ends near x=810). **Rejected**: no component added (`t6-02`, `t6-snap-03`). No in-form space exists to the right of the inputs; the only free in-form area (right of FX_RefreshButton, below the inputs) is not "to the right of the input fields", so the step was stopped for coordinator decision rather than guessed.
- Read-only No Colon probe on existing FX_ItemStatic (not changed): expanded Properties Expand All, then the Specific Attributes sub-group (native chevron). Under Miscellaneous > Specific Attributes: Frame, Group, Interpret Bound, **No Colon (False; True/False dropdown)**, No Interpret New, Solid, Web Heading (`t6-03` to `t6-06`). EXP-022's "not exposed" finding is not reproduced; cause unresolved.
- EXP-045 consistency: EXP-045 records canvas captions showing raw IDs before Save and literal values after Save and reopen; this matches the T5 canvas observation (consistency only; not verified post-Save).
- Not done: FX_PictureStatic creation, binding, No Colon True, FX_ImportPicture, Primary reassignment, Save, close, reopen, unload, runtime action.
- Counts (cumulative through T6): Web Client unloads 1; Designer unloads 1; runtime closes 2; Designer close 1 and reopen 1 (T3); component deletions 1 (T4); Form-level delete dialog declined 1 (T4); string created 1 and declined 1 (`FX_Refresh`, T5); failed read-only fill 1 (T5); Toolbox drags 1 (rejected, no effect); Components added 0; Designer Save 0.

## 6f. T7 — operator-authorized placement attempt (cycle 8, task T7): stopped blocked on geometry

Full report: `evidence/EXP-062-R2/T7-picture-static-authorized-placement.md`.

- Authorization recorded at T7 start (see the authorization paragraph at the top of this record). Approved area: below the input column and right of FX_RefreshButton (about x 600–800, y 330–365 in T6 screen coordinates).
- Pre-drop gate: Designer FX_Items, User footer, Save enabled, no dialog; 16 components; FX_VarTestEdit and FX_PictureStatic absent; FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`, Binding None, Size `14.25; 1.89`, Location `12.1666666666667; 5.25`, Tab 0; FX_Test two actions (`t7-02`, `t7-03`).
- One Toolbox Static drag from `(81, 788)` to `(700, 348)`. **Accepted.** New Static `static1_USER` in Pane (01), Tab 0 (`t7-04`, `t7-snap-05`).
- Geometry readback: Size `87.5; 19.3333333333333`; Location `13.7222222222222; 42.75`; Binding None. Standard Statics are `20; 1`. Outline clipped at canvas right and bottom edges (`t7-05`). **Ambiguous against the approved bounds; stopped** (no resize, move, rename, binding, No Colon, or second drop).
- Count after drop: 17 (16 + `static1_USER`); FX_VarTestEdit absent; other 16 names unchanged (`t7-snap-06`).
- Not done: rename to FX_PictureStatic; binding; No Colon True; FX_ImportPicture; Primary reassignment; Save; close; reopen; unload; runtime action.
- Counts (cumulative through T7): Web Client unloads 1; Designer unloads 1; runtime closes 2; Designer close 1 and reopen 1 (T3); component deletions 1 (T4); Form-level delete dialog declined 1 (T4); string created 1 and declined 1 (T5); failed read-only fill 1 (T5); Toolbox drags T6 1 (rejected, historical) and T7 1 (accepted; geometry ambiguous); components added 1 (`static1_USER`, unrenamed); Designer Save 0.

## 6g. T8 — final documentation (cycle 9, task T8): blocked at AC-6

Full report: `evidence/EXP-062-R2/T8-final-blocked-report.md`. No browser calls; no Save, close, reopen, Undo, delete, rename, resize, bind, configure, unload, or Toolbox drop.

- Final known Form state: FX_Items User scope; Save enabled; 17 components (16 surviving baseline components plus `static1_USER`); FX_VarTestEdit absent; FX_RefreshButton Caption `FX_sImport`, Primary `FX_Test`; `FX_sImport` String Value `Import`; FX_Test two original actions retained; no FX_ImportPicture; no FX_PictureStatic configured; Designer Save count 0.
- AC matrix (T8 report §4): AC-1 passed (partial source review); AC-2 passed; AC-3 passed with limits; AC-4 passed (in-session); AC-5 incomplete (raw ID displayed); AC-6 failed; AC-7 to AC-12 pending; AC-13 pending.
- Reconciled cumulative counts: Web Client unloads 1; Designer unloads 1; Designer close 1 and reopen 1 (both pre-mutation); runtime tab closes 2; Designer Save 0; component deletions 1; components added 1 (unconfigured, default-named); Form-level delete dialog opened and declined 1 (T4); `FX_Refresh` string prompt declined 1 (T5); string created 1; read-only text fill refused 1 (T5); Toolbox drags 2 (T6 rejected; T7 accepted); accidental Event Handler name dialog cancelled 1 (T3); preference changes 0.
- Disclosed: the T6 rejected drop is historical and not a placement; the T7 accepted drop is not an AC-6 success.

## 7. Superseded (T8): the coordinator's options after T7 are no longer open for this run

The T8 brief finalizes the run as blocked at AC-6 and requests documentation only. The text that follows records the T7 stop state and is kept for the audit trail. The coordinator must choose how to handle the new unrenamed Static `static1_USER`: (a) authorize a resize or move to the approved area (a further mutation), (b) authorize deletion of `static1_USER` via the Components-grid trash button (confirmation naming it) and a fresh attempt, or (c) accept its current geometry and record AC-6 as a documented deviation. Save remains undecided for the three unsaved changes. Placement must be decided first (T6 §7 options: in-form placement with a documented deviation from AC-6; a narrowly scoped Form-level layout change if approved; or accept AC-6 as not met). After that, the remaining configuration (binding to `object.FX_Picture`, No Colon True via the Specific Attributes dropdown, FX_ImportPicture Binary Value Action, Primary reassignment) and the single Save follow. Do not Save, close, or reload the Form until the coordinator decides. The Form now holds three in-session changes (FX_VarTestEdit deletion, FX_RefreshButton Caption `FX_sImport`, string `FX_sImport`). Display resolution (`FX_sImport` → `Import`) needs a decision: check after the single Save, or a re-render check. The remaining Section 4 work (FX_PictureStatic, No Colon, FX_ImportPicture, Primary reassignment, one Save) is not started.

Earlier T4 note: do not Save, close, or reload the Form until the coordinator decides how to proceed with the unsaved FX_VarTestEdit deletion. The next task would continue Section 4 (FX_sImport, FX_PictureStatic, FX_ImportPicture, Primary, one Save) only after approval. The earlier T3 gate passed. The next task, if approved, implements Section 4 (FX_VarTestEdit deletion, FX_sImport creation, Caption change, FX_PictureStatic with FX_Picture binding and No Colon, FX_ImportPicture Binary Value Action, Primary reassignment), followed by exactly one Designer Save. Do not start until the coordinator approves. Note: T3 did not re-read the detail properties of input/label components or Specific Attributes after reopen, so those should be re-read in that task's baseline. The next task (after §6 is answered) performs, in order: runtime global-form-object unload (exact label re-observed in the Web Client Form > Definition submenu, which was not expanded in T1), Designer close of the clean FX_Items Form, one Designer Unload All Global Form Objects, reopen of the same User-scoped Form, and the FX_Picture binding check without commit. Stop before any Form change if FX_Picture is still absent.

## 8. Knowledge state

| Finding | State |
| --- | --- |
| Designer identity, User scope, Save disabled, no challenge | observed |
| Preference `Unload IDO Metadata With Forms` checked | observed |
| Baseline (17 components; FX_VarTestEdit; FX_RefreshButton; FX_VarTest; FX_Test group) | observed |
| FX_Picture absent from pre-unload Designer binding dropdown | observed; cause unresolved |
| FX_sImport absent | observed (one session) |
| Two clean FX_Items runtime tabs | observed |
| Unload label in Form > Definition submenu | not yet observed |
| Any replay or procedure status | not claimed; nothing replay_verified |

## 9. Evidence index

- `evidence/EXP-062-R2/t1-01-designer-initial-state-save-disabled.png`
- `evidence/EXP-062-R2/t1-02-form-tab-identity-name-version-scope.png`
- `evidence/EXP-062-R2/t1-03-variables-tab-fx-vartest-readback.png`
- `evidence/EXP-062-R2/t1-04-event-handlers-tab-fx-test-group.png`
- `evidence/EXP-062-R2/t1-05-fx_umcombobox-selected-before-binding-picker-readonly.png`
- `evidence/EXP-062-R2/t1-06-binding-dropdown-open-readonly-fx_picture-check.png`
- `evidence/EXP-062-R2/t1-07-after-binding-picker-escape-binding-unchanged.png`
- `evidence/EXP-062-R2/t1-08-caption-string-list-readonly-fx_simport-absence.png`
- `evidence/EXP-062-R2/t1-09-after-caption-list-escape-caption-unchanged-save-disabled.png`
- `evidence/EXP-062-R2/t1-10-webclient-initial-runtime-tabs-dirty-state.png`
- `evidence/EXP-062-R2/t1-11-webclient-inactive-fx_items-tab-identity-readonly.png`
- `evidence/EXP-062-R2/t1-12-web-client-form-menu-open-user-preferences-locate.png`
- `evidence/EXP-062-R2/t1-13-web-client-view-menu-open-preferences-locate.png`
- `evidence/EXP-062-R2/t1-14-user-preferences-unload-ido-metadata-checked-readonly.png`
- `evidence/EXP-062-R2/t1-15-after-preferences-close-window-settled.png`
- `evidence/EXP-062-R2/T1-preflight-report.md`

Screenshots show what is named above. They do not prove database state, cache behavior, or runtime import functionality. Manual attachment is available on request for any PNG.

## Outcome (operator, 2026-10-12)

**Blocked at AC-6 (picture Static placement). Nothing saved.** Run R-20261011-233114-6TXk ended completed/blocked at cycle 10.
- **Confinement** (operator git review): the only new paths are this record and `evidence/EXP-062-R2/`. `assets/` is the operator's.

**Achieved (observed):**
- **AC-2 unload gate passed.** The preference Unload IDO Metadata With Forms was read as checked and left unchanged. Exactly one Web Client unload and one Designer Unload All Global Form Objects ran. After reopening, the Designer binding list offers `object.FX_Picture` (`t3-15`, viewed by the operator). This resolves the EXP-062 blocker. Learned (observed): a new IDO property becomes visible to the Designer binding pickers after the coupled unload, with the IDO still checked out.
- **In the unsaved Designer session:** FX_VarTestEdit was deleted through the Components-grid trash button. The FX_sImport string was created with the value `Import` and assigned as the FX_RefreshButton Caption.

**Not achieved:** FX_PictureStatic, its binding, No Colon, FX_ImportPicture, the Primary reassignment, Save, close/reopen and the runtime check.

**Operator calls under the standing authorization of 2026-10-11:**
1. *Scope pause:* approved. The coordinator only asked the worker to read the EXP-037 and EXP-022 findings.
2. *Placement pause (T6):* the canvas ends at the input column, so there is no space to the right of the inputs, and the one drop outside the canvas was rejected. I authorized one drop in the free area vacated by FX_VarTestEdit. That drop (T7) created a default-named `static1_USER`, Size `87.5; 19.33`, that runs past the right and bottom edges of the canvas (`t7-05`, viewed by the operator). The worker stopped as instructed.

**Near miss (T4):** the worker first clicked the Designer top-toolbar trash icon, which is **Delete Form Definition**. In the "delete the definition for form FX_Items?" dialog, **Yes** had default focus. The worker clicked **No**, and the Form stayed intact (`t4-07`, `t4-08`, viewed by the operator). The worker preamble now forbids that control (2026-10-12).

**State left behind:** the Designer holds a **dirty, unsaved** FX_Items Form containing the deletion, the caption change and `static1_USER`. The FX_sImport string was created through its own dialog OK. Whether it persisted independently of the Form Save is unverified (likely, per EXP-045).

**Lessons for the next attempt:**
- A Toolbox drag produced an oversized Static.
- Set component geometry through the property grid's Layout > Size and Location. The values are in Char units, in the form `W; H`. Standard Statics here are `20; 1`.
- The Form canvas, about 550 px wide, is much smaller than the Designer work area. A Form-level size property is a candidate way to make room to the right of the inputs (unverified).
