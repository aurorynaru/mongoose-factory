# EXP-067-R2 — T11 final acceptance review (documentation only)

Run `R-20261013-011002-lSgL`, cycle 10, task T11. Worker session `f7c1ad6d-c6f4-47da-8379-fc79301e6afe`; task_message_id `50000760-0dcb-4fc5-ad4a-ad9107a68c21`. Date 2026-10-13. Editing scope User.

**T12 correction (documentation only, zero browser calls):** the screenshot total in §6 was 49 and is corrected to **45** after filename enumeration of the evidence directory (per-group counts unchanged; 45 = 6+3+4+2+12+6+2+2+3+5). The verified worker-authored total is 58 (1 experiment record, 11 task reports, 45 PNG screenshots, 1 YAML snapshot). The T11 controller audit's single error (#17) was a documentation Edit whose replacement string did not match the file; subsequent corrected edits succeeded. It is not a browser failure or an application blocker.

**Scope of this task:** documentation only. Zero browser calls. No Mongoose state altered. Authored files are limited to this report and the EXP-067-R2 experiment record. Two saved screenshots were read as image files through the normal file reader (no browser interaction).

## 1. Recommendation

**ACCEPTED as observed, with qualifications (not replay_verified).** All eight acceptance checks are supported by saved evidence within the qualifications stated in §3. The qualifications are substantive, not cosmetic: persistence is shown only by same-session close/reopen; the stored `FX_sDescription` value and exhaustive original-property equality were not verified; and the Save toast was observed only in the accessibility tree, not in a screenshot. Acceptance is recommended for the observation record only. It is not a replay verification and not a claim of cross-session durability.

## 2. Controller-authoritative browser-call reconciliation

| Task | Controller-authoritative calls | Worker figure superseded | Note |
| --- | --- | --- | --- |
| T1 | 53 | — | |
| T2 | 15 | — | |
| T3 | 41 | — | |
| T4 | 15 | — | |
| T5 | 81 | — | |
| T6 | 75 | ~78 (T6 report, §8) | Corrected in T7 and in this report |
| T7 | 31 | — | |
| T8 | 17 | 22 (corrected in T9) | |
| T9 | 33 | — | |
| T10 | **41** | 40 (T10 report §8; record §29) and 401 cumulative | Controller audit: 8 actions + 33 reads = 41 |
| **Cumulative T1–T10** | **402** | 401 | Sum 53+15+41+15+81+75+31+17+33+41 = 402 |

Corrections applied to the EXP-067-R2 documentation in this task: the experiment record's status line and §29 now say 41 and 402; the T10 report now says 41 (with the worker category split retained and marked) and 402. T6 is recorded as 75 (cumulative T1–T6 = 280).

## 3. Acceptance matrix (AC-1 to AC-8)

Each row gives the status, decisive evidence (repository-relative paths), the observed facts, and the qualifications.

### AC-1 — Sources reviewed; session usable; Designer FX_Items User scope and clean; baseline geometry recorded; new components absent; target area free and inside the Form
- **Status:** SUPPORTED (observed; UI and accessibility level).
- **Evidence:** `experiments/EXP-067-R2-…md` §3, §5 (T1 record); `evidence/EXP-067-R2/T1-preflight-report.md` §1–§7; identity screenshots `t1-02`, `t1-04`; canvas and target-area screenshot `t1-03`; geometry readbacks `t1-04` (Form tab) and the T1 accessibility readbacks; FX_UMsDescriptionStatic/Edit absence in T1 §3 and T3 §6.
- **Observed:** FX_Items, Name `FX_Items`, footer ScopeType User (ScopeName anton.ramos@3mworks.com.ph), Save and Undo disabled. Component list 17 entries (2 panes, FormCollectionGrid, 4 GridColumns, 10 Pane 01 components). Geometry: FX_UMCombobox Location `7.75; 23.75` / Size `37.25; 2.15`; FX_PictureStatic `10.5; 21.5` / `20; 9`; FX_RefreshButton `12.1666666666667; 5.25` / `14.25; 1.89`; Form Size `69; 21`, Unit `Char`. Target area free and inside the Form by readback computation.
- **Qualifications:** the target-area clearance is a computed estimate from readbacks (about 19 px inside the visible canvas clip at the 12-column width), not a pixel measurement; the Pane 1 native width is not exposed and was derived (58 columns). `t1-04` does not show the Size and Unit rows (the name overstates content; recorded in T1 §8). Geometry values are accessibility readbacks, not visible in the screenshots.

### AC-2 — Unload gate: preference checked and unchanged; exactly one Web Client unload (label recorded); clean Designer closed once and exactly one Designer unload with the Form closed; reopened with same identity, clean, baseline unchanged; FX_UMsDescription offered by the picker
- **Status:** SUPPORTED (observed).
- **Evidence:** preference `t1-05` (viewed: Unload IDO Metadata With Forms ticked; OK and Help only), accessibility `[checked]` (T1 §5); `t1-06` (after Close Window); Web Client menu label `t2-01` (viewed: `Unload All Global Form Objects` in Definition submenu, no runtime Form); `t2-02` (no visible response); Designer label `t3-02` (viewed: label with Form closed; `Delete` and `Revert Form Definition` present and not clicked); `t3-03` (no response); reopen identity `t3-04` (viewed: FX_Items, User footer); binding picker `t4-01` (viewed: `object.FX_UMsDescription` listed in the existing FX_UMCombobox picker), and `t5-03` and `t5-06` (viewed: the new Edit's picker lists `object.FX_UMsDescription` under `None` and under `Property`).
- **Observed:** preference read as checked, unchanged, closed with Close Window (no Cancel exists; no OK pressed). Web Client Unload All Global Form Objects invoked once with no runtime Form open; no visible response. Designer FX_Items closed once (no prompt); Designer unload invoked once with the Form closed; no visible response. Reopened once via the toolbar folder control (tooltip `Open`) and Select Form; identity `User version for user …`, footer User scope, Save and Undo disabled, baseline unchanged.
- **Qualifications:** both unloads were silent. Server-side completion is not observable from the UI; the binding picker's appearance is the only evidence the cache refresh took effect. The Designer toolbar control is labelled `Design` in the accessibility tree; its Open role is inferred from its tooltip and its Select Form result. Preference was read once (T1) and was not re-read after the unloads.

### AC-3 — FX_UMsDescriptionStatic added once: Static; Location 10.5; 42.5; Size 12; 1.5; Caption FX_sDescription; readbacks recorded
- **Status:** SUPPORTED (observed; configuration persisted through same-session close/reopen).
- **Evidence:** T6 `t6-01` (pre-drop), `t6-02` (post-drop), `t6-03`, `t6-04` (Caption list viewed), `t6-05` (viewed: Properties Caption `FX_sDescription`, canvas "Description:"), `t6-07` (viewed: both components in target area); T7 `t7-01` (viewed); T8 `t8-01`, `t8-02`; T9 `t9-02` (viewed).
- **Observed:** one drop (`static1_USER`, Pane 1, Tab 0), renamed `FX_UMsDescriptionStatic`; Location `10.5; 42.5`; Size `12; 1.5`; Caption `FX_sDescription` selected from the existing dropdown list (not typed, no string created). After close and reopen (T9): Location `10.5; 42.5`, Size `12; 1.5`, Caption `FX_sDescription`, rendered "Description:".
- **Qualifications:** `FX_sDescription` resolves to "Description" by rendered canvas text only; the stored string value was not read or modified (this is an explicit limitation; the string editor was out of scope). Location and Size rows were not visible in the viewed screenshots; their values are accessibility readbacks. The T6 Name entry and Tab were sent in one response (sequencing deviation; independently verified Name `FX_UMsDescriptionStatic`). The drop-time Location and Size were overwritten by the explicit values.

### AC-4 — FX_UMsDescriptionEdit added once: Edit; Location 12.5; 42.5; Size 12; 1.89; Binding Type Property; Binding FX_UMsDescription; no other component changed
- **Status:** SUPPORTED (observed; configuration persisted through same-session close/reopen).
- **Evidence:** T5 `t5-01` (pre-drop), `t5-02` (post-drop), `t5-03` and `t5-06` (binding picker lists `object.FX_UMsDescription`; both viewed), `t5-07`, `t5-08`, `t5-12` (viewed: Properties Size `12; 1.89`, Location `12.5; 42.5`, canvas placement); T7 `t7-02` (viewed); T9 `t9-03` (viewed: Edit Properties and both components on canvas).
- **Observed:** one drop (`edit1_USER`, Pane 1, Tab 0), renamed `FX_UMsDescriptionEdit`; Location `12.5; 42.5`; Size `12; 1.89`; Binding Type `Property`; Binding `object.FX_UMsDescription` (also Components Data Source). After close and reopen (T9): same values. Components tree at T9 holds 19 entries; identity and visible-column comparison shows the 17 originals and the 2 additions only.
- **Qualifications:** Binding Type auto-assigned `object._ItemId` on the type change and was corrected to `object.FX_UMsDescription` before Save (observed; the final value is what persisted in the same session). The grid Data Source updated only after focus left the editor (Tab). The "no other component changed" claim is limited: it rests on identity and visible-column comparison and on the readbacks of the three original geometry components (T1, T7). It is **not** an exhaustive original-property diff, and the grid's Pane 00 children were not re-read after T9.

### AC-5 — Exactly one Designer Save with the native response verbatim; Save disabled afterwards
- **Status:** SUPPORTED (observed).
- **Evidence:** T8 `t8-01` (pre-save, viewed: Save enabled), `t8-02` (post-save, viewed: Save and Undo greyed); T8 report §2; T9 `t9-01` (closed, no prompt).
- **Observed:** exactly one click on the native toolbar Save (`mgtoolbarbutton-1085`). The native response, recorded verbatim from the accessibility tree while the notification was present: `Save` — `Form [FX_Items] and global object(s) were saved.` with a `Close` button. Immediately afterwards: Save, Regenerate Form, Undo and Redo disabled; no dialog. Save count 1; no retry.
- **Qualifications:** the toast auto-dismissed before the post-save screenshot was taken. **The screenshot `t8-02` does not show the toast.** The verbatim response text comes from the accessibility find result, not from an image. The post-save disabled state was confirmed by find and by the screenshot, and persisted to the reopen (T9 `t9-03` shows Save greyed).

### AC-6 — Clean Designer closed once and reopened once; both components present with the same names, geometry, Caption and binding
- **Status:** SUPPORTED (observed; same-session close and reopen only).
- **Evidence:** T9 `t9-01` (closed, no prompt), `t9-02` (viewed: reopened Static), `t9-03` (viewed: reopened Edit and both components); T9 report §2–§5.
- **Observed:** post-save native close via the Form-tab close control, no prompt; reopen via the toolbar Open control and Select Form (one row). Reopened Form: FX_Items, User scope (ScopeName anton.ramos@3mworks.com.ph), clean. Both components: Name, Pane 1, Tab 0, Location, Size, Caption (Static) and Binding Type and Binding (Edit) match the pre-close configuration.
- **Qualifications:** this is a same-session close and reopen. It is **not** proof of cross-session durability and not a database read. The Location and Size rows are not visible in the viewed screenshots; the readbacks are the evidence.

### AC-7 — Clean runtime FX_Items closed once if open, reopened once; dumbbell, eggs, guitar Unit of Measure and FX_UMsDescriptionEdit description recorded (expected EA Each, DZ Dozen, EA Each); no record edits; Form clean
- **Status:** SUPPORTED (observed). The actual displayed values match the expected pairs.
- **Evidence:** T10 `t10-01` (viewed: no runtime Form open before the open); `t10-02` (viewed: runtime FX_Items; record 1 dumbbell); `t10-03` (viewed in T11: dumbbell, Unit of Measure EA, Description Edit Each, status `Description (Object 1 of 3)`, Save greyed); `t10-04` (viewed in T11: eggs, Unit of Measure DZ, Description Edit Dozen, status `Item (Object 2 of 3)`, Save greyed); `t10-05` (viewed in T10 and T11: guitar, Unit of Measure EA, Description Edit Each, status `(Object 3 of 3)`, Save greyed). Accessibility readbacks as in T10 report §4.
- **Actual displayed values (verbatim):**
  - dumbbell (Object 1 of 3): Item `dumbbell`; Unit of Measure combobox `EA`; FX_UMsDescriptionEdit `Each`. Expected EA / Each: **match**.
  - eggs (Object 2 of 3): Item `eggs`; Unit of Measure combobox `DZ`; FX_UMsDescriptionEdit `Dozen`. Expected DZ / Dozen: **match**.
  - guitar (Object 3 of 3): Item `guitar`; Unit of Measure combobox `EA`; FX_UMsDescriptionEdit `Each`. Expected EA / Each: **match**.
- **Observed:** runtime FX_Items opened once via Form > Open > Select Form (one row FX_Items / FX_Items). No runtime Form was open before the open, so the conditional close was **unnecessary and not performed** (runtime conditional close = 0). The Form was clean (Save disabled) after the open, after record 2, after record 3, and at the final check. No record field was edited; no runtime Save; no Unit of Measure change.
- **Qualifications:** values are UI readbacks of the open runtime Form, not a database read. The record-1 screenshot `t10-03` was reviewed in this task as an image: it is consistent with the readbacks (record 1 current, Description Edit `Each`). The record-2 screenshot `t10-04` was reviewed as an image (consistent with the readbacks: `Dozen`, `DZ`). The record-3 screenshot `t10-05` was reviewed in T10 and is consistent. The grid row-number navigation for record 3 followed one recovered timeout (see §4). The Description Edit value is the runtime display, and the underlying stored value is not separately verified.

### AC-8 — Final report: decisive evidence for AC-1 to AC-7; complete exact action audit; worker-written-file inventory; final state
- **Status:** SUPPORTED by this report, the experiment record, and the per-task reports, within the qualifications in §3–§5.
- **Evidence:** this report; `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md`; the T1–T10 reports; §5 (action audit) and §6 (inventory) below.
- **Observed:** all eight checks have decisive evidence. Lifecycle counts are reconciled in §5.
- **Qualifications:** the controller's harness audit (`evidence/EXP-067-R2/harness-audit-T*.md`) is authoritative for call counts; this worker's inventory is for reconciliation only.

## 4. Preserved incidents and deviations

- **Single recovered guitar-row timeout (T10).** A click on the guitar row's Item cell (`f1e293`) timed out at "visible, enabled and stable": the pane splitter (`paneZero6-splitter`) and the locked grid's row-number cell intercepted pointer events. The controller's audit records it as error #33. Recovery: one fresh untargeted snapshot (Form on Object 2 of 3, Save disabled, guitar row present), then one corrected click on the row-number cell for row 3, which succeeded. No field changed. Recorded as a suspected environment/rendering interception in the narrow runtime grid; not reproduced.
- **T6 stale snapshot-reference error.** A targeted `browser_snapshot` on ref `e2534` returned "Ref e2534 not found" (T6). The recovery did **not** follow the brief's fresh untargeted snapshot rule; it used fresh `browser_find` calls and a successful targeted snapshot of a fresh ref (`e2563`). No mutation was repeated because of the error.
- **T6 Name-entry/Tab sequencing deviation.** The Name entry (`browser_type`) and its Tab (`browser_press_key`) were issued in one response, contrary to the one-call-at-a-time rule. Independently verified: the Name is `FX_UMsDescriptionStatic` (T6, T7, T8, T9 readbacks and the components tree).
- **browser_type flags.** The controller flagged `browser_type` uses in T5 (Name, Top, Left, Width, Height on the Edit) and T6 (the same five on the Static). Each entry went into a native rendered Properties editor (the tool reports a Playwright `fill` on the rendered textbox). No worker-authored script, JavaScript, console, network or internal-store action was used, and no restriction violation was identified. These are recorded as native Properties entry, consistent with the T7 and T8 determinations.
- **Other recorded deviations:** the T5 `Binding Type` auto-assignment (`object._ItemId`, corrected before Save); the T1 preference Close Window substitution for the non-existent Cancel (accepted by the coordinator in EXP-067); the T1 Designer tab was opened from the Web Client Designer button (no Designer tab at start).

## 5. Exact action audit (controller-authoritative counts)

**Browser calls (cumulative, controller-authoritative): 402** (T1 53, T2 15, T3 41, T4 15, T5 81, T6 75, T7 31, T8 17, T9 33, T10 41, T11 0, T12 0).

| Lifecycle / operation | Count | Notes |
| --- | --- | --- |
| Preference read | **1** | T1; `Unload IDO Metadata With Forms` checked; unchanged; closed with Close Window (no OK) |
| Preference changes | 0 | |
| Web Client `Unload All Global Form Objects` | **1** | T2; silent (no visible response); no runtime Form open at invocation |
| Designer `Unload All Global Form Objects` | **1** | T3; silent; Form closed at invocation |
| Pre-change Designer close / reopen | **1 / 1** | T3 |
| Toolbox drops | **2** | T5 (`edit1_USER` → `FX_UMsDescriptionEdit`); T6 (`static1_USER` → `FX_UMsDescriptionStatic`) |
| Designer Save | **1** | T8; native toast `Save — Form [FX_Items] and global object(s) were saved.`; no retry |
| Post-save Designer close / reopen | **1 / 1** | T9 |
| Runtime conditional close | **0** | No FX_Items runtime Form was initially open; the conditional close was unnecessary |
| Runtime initial open | **1** | T10 via Form > Open > Select Form |
| Runtime close / reopen (beyond the initial open) | 0 / 0 | |
| Runtime Save | **0** | |
| Record edits | **0** | |
| Preference changes | **0** | |
| Other component modifications | **0** | Only the two authorized components were added; no other component, property, event, grid, layout or variable changed (observed by identity and visible columns; see AC-4 qualification) |
| Designer Saves retried | 0 | |
| Undo / trash / delete / check-in / undo checkout | 0 | |
| Browser JavaScript, console, network inspection; direct URL; refresh; restart | 0 | |

## 6. Worker-written-file inventory (EXP-067-R2 paths only)

**Authored by the worker (documentation):**
- `experiments/EXP-067-R2-hello-world-part-4-section-8a-um-description-static-and-edit.md` (created T1; updated T2–T11).
- `evidence/EXP-067-R2/T1-preflight-report.md`; `T2-webclient-unload-report.md`; `T3-designer-unload-report.md`; `T4-binding-picker-readonly-report.md`; `T5-edit-drop-binding-gate-and-configuration-report.md`; `T6-static-drop-and-configuration-report.md`; `T7-pre-save-verification-and-audit-reconciliation-report.md`; `T8-single-designer-save-and-immediate-verification-report.md`; `T9-post-save-designer-close-reopen-and-persistence-verification-report.md`; `T10-runtime-fx_items-verification-report.md`; `T11-final-acceptance-report.md` (this file).

**Authored by the worker (screenshots, 45 PNG files; verified by filename enumeration in T12):**
- T1: `t1-01`…`t1-06` (6).
- T2: `t2-01`…`t2-03` (3).
- T3: `t3-01`…`t3-04` (4).
- T4: `t4-01`, `t4-02` (2).
- T5: `t5-01`…`t5-12` (12).
- T6: `t6-01`…`t6-05`, `t6-07` (6).
- T7: `t7-01`, `t7-02` (2).
- T8: `t8-01`, `t8-02` (2).
- T9: `t9-01`…`t9-03` (3).
- T10: `t10-01`…`t10-05` (5).

**Authored by the worker (accessibility snapshot saved into the evidence directory):**
- `t6-06-full-snapshot-components-list-readback.yml` (1).

**Verified worker-authored total (filename enumeration, T12):** 1 experiment record + 11 task reports + 45 PNG screenshots + 1 YAML snapshot = **58 worker-authored files**. The harness-audit files (11) and the tool-written `evidence/playwright/` files are classified separately and are excluded from this total.

**Harness/controller-generated (not worker-authored; present in the evidence directory):**
- `harness-audit-T1.md` … `harness-audit-T11.md` (11 files). These are the controller-generated audit records. The T11 audit records 0 browser actions and 0 reads; its one error (#17) was a documentation `Edit` whose replacement string did not match the file, and the subsequent corrected `Edit` calls succeeded. It is not a browser failure and not an application blocker.

**Tool-written, outside the EXP-067-R2 evidence path:** `evidence/playwright/` snapshot and console files produced by the browser tool during T1–T10. These are not enumerated here. Per the brief, repository confinement is supported by the worker and harness inventories, and the operator's git review is authoritative.

**Documentation edits in T11:** the experiment record and this T11 report only. No prior T1–T10 report was rewritten beyond the T10 count correction, which is limited to the lines identified in §2.

## 7. Final state

- **Web Client:** tab 1; the runtime FX_Items Form is open and **clean** (Save disabled), on record 3 (guitar, Object 3 of 3); no dialog. Last observed in T10.
- **Designer:** tab 0; **not selected or modified in T10 or T11**. Last observed state (T9): FX_Items open after the post-save reopen, User scope (ScopeName anton.ramos@3mworks.com.ph), clean (Save, Regenerate Form, Undo, Redo disabled), 19 components, `FX_UMsDescriptionEdit` selected (view state), no dialog. The Designer state after T9 was not re-observed in T10 or T11.
- **Persisted configuration:** observed through same-session close/reopen (T9). Not verified across sessions.
- **Runtime:** open and clean; the record values match the expected pairs.
- **Outstanding:** nothing required for the observation record. The operator's disposition is requested.

## 8. Limitations and what was not verified

1. **Same-session persistence only.** The Designer close/reopen (T9) and the runtime open (T10) are same-session observations. Cross-session durability is **not** claimed, and no database read was made.
2. **Stored `FX_sDescription` value not verified.** The Caption reference was selected from the existing list and renders "Description:" on the canvas. The stored string value was not read in the string editor (out of scope) and was not modified.
3. **No exhaustive original-property equality.** Comparisons are by component identity and visible columns, plus geometry readbacks for three original components in T1 and T7. Original property values, events and the Pane 00 GridColumn geometry were not exhaustively diffed.
4. **Save toast not in a screenshot.** The native Save response was observed in the accessibility tree; the screenshot `t8-02` was taken after the toast dismissed.
5. **Unload effects silent.** Both unloads gave no visible response; their effect is inferred from the binding picker showing `object.FX_UMsDescription` in the existing and new Edit pickers.
6. **Layout values not in screenshots.** Several Location and Size rows, and Binding rows, were below the visible area in the viewed screenshots; those values are accessibility readbacks.
7. **Call counts are controller-authoritative.** Worker-tally figures (for example the T10 category split) are retained only as categories; the controller totals govern.
8. **Runtime grid interaction.** One record navigation needed the recovered timeout path; the narrow runtime grid's pane splitter and row-number cell intercepted pointer events once. Not reproduced.
9. **Preference read once.** The preference was read in T1 and not re-read after the unloads.
10. **Designer state after T9 not re-observed** in T10 or T11 (by the T10 and T11 instructions).

## 9. Replay status

Nothing in EXP-067-R2 is **replay_verified**. The findings are recorded as observed (one session), and the procedure has not been repeated.
