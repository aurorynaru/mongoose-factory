# EXP-062-R4 — T14 final acceptance and audit report (cycle 19; documentation only; zero browser calls)

Run `R-20261012-003624-ROx0`, task T14, worker session `3a609535-e675-40c5-a195-7c4e6d3fa909`, task_message_id `ee7c051f-62c4-4352-b565-6e111f547148`. Date 2026-10-12.

**Scope of this task:** no browser calls, no Designer or Web Client change, no Save, close, reopen, refresh, Import activation, record edit or metadata operation. Tools used: Read, Grep and Glob over the experiment record, the T1–T13 reports, the evidence directory and the controller-generated `harness-audit-T1.md` … `harness-audit-T13.md` files, plus Edit/Write for the documentation outputs listed in §9.

**Final classification:** OBSERVED, ACCEPTED UNDER OPERATOR AMENDMENTS AND THE G8 WAIVER. NOT replay_verified. Nothing in this experiment is promoted to replay_verified.

---

## 1. Operator amendments and controlled deviations (exact)

| # | Item | Original brief | What happened | Basis |
|---|---|---|---|---|
| A1 | Designer Saves | Exactly one ordinary Designer Save | **Two ordinary Designer Saves**: T9 intermediate (count 1) and T12 final (count 2). Controller audit confirms exactly one Save click in `harness-audit-T9.md` (row 21, "Save button (Designer top toolbar, intermediate Save)") and one in `harness-audit-T12.md` (row 28, "final Save"). | Operator approval for the T9 intermediate Save; operator approval for the T12 final Save. |
| A2 | Interim persisted state | Save only after the complete definition is verified | The T9 intermediate Save persisted an **interim action state**: FX_ImportPicture sequence 0 with Response Type Binary Value Action and blank parameters, and FX_RefreshButton Primary still FX_Test. The T12 final Save persisted the complete state. | Consequence of A1; recorded so the intermediate state is not mistaken for the final one. |
| A3 | Unintended post-intermediate dirty state | Not in the brief | After the T9 Save, the Form-tab Splitter dropdown was open; the worker pressed Escape once (the T9 brief did not restrict Escape; the T10–T12 briefs later required a neutral component row instead of Escape/Tab on Form-level fields). Escape moved focus into Size > Width, and the toolbar Save and Undo became enabled. Cause not established (presumed same-value commit on blur in the Width field). Size 69; 21 and Splitter Vertical read back unchanged. | Worker observation, T9 report. |
| A4 | Discard of the dirty state | Not in the brief | Operator-authorized discard: Form-tab close, then **No** at "Form FX_Items has changed / Do you want to save the form definition?" (Yes was not chosen). Recovery through the Form menu recent list. Controller audit confirms the close (`harness-audit-T10.md` row 9), the No click (row 13) and the recent-list reopen (row 19). | Operator authorization for T10. |
| A5 | Designer close/reopen cycles | Exactly one close/reopen (AC-11/AC-13) | **Two** Designer close/reopen cycles: T10 (authorized discard + reopen) and T12 (clean close + reopen). Controller audit: closes in `harness-audit-T10.md` (row 9) and `harness-audit-T12.md` (row 35); reopens in T10 (row 19) and T12 (row 42). The T1 recent-list open (`harness-audit-T1.md` row 36) was the initial open, not a close. | A4 plus the planned T12 clean close. |
| A6 | FX_sImport string | Read-only check: exists with value Import | **Absent at T1** (`t1-07`). Created at T4 under the brief's absent branch: Caption ellipsis, literal `Import`, prompt answered Yes once (`harness-audit-T4.md` row 28). Value `Import` read at T4 (`t4-03`, `t4-04`) and at T10 (`t10-13`). | Brief's permitted branch; the AC-2 string sub-check was not met as written at T1. |
| A7 | FX_VarTest / Form - Temporary | Preserved (AC-4, AC-9, AC-11) | **Absent** from the native Variables grid at T11 (gate G8 failed) and after the T12 final Save and reopen (`t12-22`) and at the T13 Designer check (`t13-08`). It was present in the T9 post-Save screenshot (`t9-05`, Form - Temporary expanded with the FX_VarTest row). **Operator waiver G8.** Preservation is NOT verified. See §5. | Operator G8 waiver (cycle 17). |
| A8 | Form width | Optional single width edit | **No Form-level change.** At T1 the Form-level Size row was judged ambiguous for a width edit (it sits under Form Layout with a Char unit, and the Design View Size tab shows a greyed Form group next to editable View fields). The fallback area below the input column was used. The Width sub-field (69) is reachable under Size, and the T9 focus event landed in it (A3), so it was not an unreachable field. Width remained 69 and height 21 in every later readback. | Brief's fallback rule, applied on the T1 ambiguity judgment. |
| A9 | Location placement | Computed from input readbacks | The T2 readbacks did not give a usable numeric mapping. T3 validated the row;column model visually (Δ ≤ 0.7 px). Final placement Size `20; 9`, Location `10.5; 21.5` (Top 10.5, Left 21.5). | T2 blocker resolved by T3 (documented in T2 correction). |
| A10 | Form-tab focus and view toggles | No Form-level field focus; view-only changes not allowed | The Details panel was collapsed and re-expanded (T10, T12, T13), and Components and Variables grid Expand/Collapse were used (view-only). No Designer view setting, Design View Size or preference was changed. | Layout toggles only. |

## 2. Acceptance matrix AC-1 to AC-13

Evidence stages: **Pre-Save** (T1–T11, Designer, unsaved), **Post-Save / reopen** (T12, Designer, saved and recovered), **Runtime** (T13, Web Client runtime Form). "Met" means observed in the stated stage; it is not a database-level proof (§5).

| AC | Requirement (summary) | Status | Pre-Save evidence | Post-Save / reopen evidence | Runtime evidence | Notes and limitations |
|---|---|---|---|---|---|---|
| AC-1 | Session usable; FX_Items reopened from saved definition; User scope; clean; discard confirmed | **Met** | T1 report; `t1-03` identity; `t1-04` 17 components; `harness-audit-T1.md` | T12 identity `t12-12`, `t12-13` (User, anton.ramos@3mworks.com.ph, Save and Undo disabled) | T13 Designer re-check `t13-08` | T1 Designer launch route (Web Client Form > Definition > Designer) was not in the brief; coordinator to confirm. |
| AC-2 | Baseline complete; FX_VarTest; FX_Test two actions; FX_ImportPicture absent; FX_Picture offered; FX_sImport value Import read without change | **Met as amended (A6)** | T1 §4–§5; `t1-06` binding picker (object.FX_Picture offered, Escape, no commit); `t1-07` FX_sImport absent (Caption list) | — | — | String was absent at T1 (not as written); created at T4 under the brief's branch; value read `t4-03`, `t4-04`, `t10-13`. Baseline Layout Size/Location captured for the components named in T1 §4, T2 and T3; not every Pane/GridColumn geometry was re-read at T12. |
| AC-3 | Form-size investigation recorded; either one width edit or fallback with reason | **Met (fallback)** | T1 §7a/§7b; `t1-05`; T2 `t2-03`; T1 §4 decision 1 | Form Layout re-read at T12 (`t12-07`, `t12-20`): Unit Char, Size 69; 21, Splitter Vertical, Position 11 | — | No width edit (A8). The fallback reason is the T1 ambiguity judgment (width sub-field under Size; Design View Size greyed Form group versus editable View group). Width editability was not tested by an edit. Design View Size: Form group 69/21 greyed; View group editable and not changed. |
| AC-4 | Exactly one component (FX_VarTestEdit) deleted; cardinality down by one; FX_VarTest and FX_Test remain | **Partly met** | T5: 17 → 16, confirmation named FX_VarTestEdit (`t5-02`); trash click once (`harness-audit-T5.md` row 27); FX_Test two actions `t5-03` | Component count 17 after drop and recovery (`t12-04`, `t12-14`, `t12-15`); FX_VarTestEdit absent | `t13-05` three rows only (runtime not a component inventory) | **FX_VarTest preservation NOT verified; waived by the operator (G8).** FX_Test two actions verified after reopen (`t12-18`, `t12-19`). |
| AC-5 | FX_RefreshButton keeps Name and geometry; Caption FX_sImport; no string edit; visible resolution to Import after save and reopen | **Met** | T4 Caption committed (`t4-01`, `t4-04` raw ID); Name/geometry readbacks T4, T11 (`t11-04`, `t11-06`) | Name, Type PushButton, Caption FX_sImport, Binding None, Size 14.25; 1.89, Location 12.1666666666667; 5.25 (`t12-16`); canvas caption **Import** (`t12-12`, `t12-21`) | Runtime button captioned `Import` (`t13-04`, `t13-06`, `t13-07`) | Save toast says "Form and global object(s) were saved"; whether the string row itself was written is not separately proven (§5). |
| AC-6 | One Toolbox drop; Static; Size 20; 9 and Location set before other properties; inside canvas; no overlap; name, binding Property/FX_Picture, No Colon True verified after reselect | **Met** | T6: one drop (`t6-02`), Size committed first (`t6-06`), Location `10.5; 21.5` (`t6-11`), name (`t6-12`), binding (`t6-14`), No Colon True (`t6-19`); reselect `t6-20`; T7/T11 readbacks `t11-11` | Recovered: Static, Pane 1, Size 20; 9, Location 10.5; 21.5, Binding Type Property, object.FX_Picture, No Colon True (`t12-06`, `t12-17`) | Picture region blank (see AC-12) | Drop-default geometry (75; 21.11 at 15.5; 30.25) existed transiently before the first edit (corrected before any other property). Header lag `static1_USER` at T6, resolved by T10 (header reads FX_PictureStatic in `t10-12`). |
| AC-7 | Exactly one FX_ImportPicture; one action; Binary Value Action; Import; FX_PictureStatic; visibly committed; no other handler changed | **Met** | T7 group created (`t7-09`, `t7-11`); T8 Response Type (`t8-05`); T10 Parameters OK (`t10-20`, `t10-21`); T10 reselect `t10-22`; T11 reselect `t11-03` (Binary Value Action, Disabled false, ACTION(Import) COMPONENT(FX_PictureStatic)) | Recovered one row with the same values (`t12-18`, `t12-19`) | Not exercised (the event was **not** run; runtime Import not activated) | Native selector was stale at T8 (FX_VarTestEdit listed, FX_PictureStatic absent); fresh after the T10 reopen (`t10-18`). Cause of the stale list unresolved. Event never executed. |
| AC-8 | Primary committed FX_ImportPicture replacing FX_Test; authoritative readback; FX_Test two actions unchanged | **Met** | T11 change through native Primary dropdown (`t11-07`); authoritative readback after reselect (`t11-08`, `t11-09`) | Primary FX_ImportPicture after reopen (`t12-16`) | — | Components-grid "Event to generate" showed FX_Test before the Save (stale) and FX_ImportPicture after the reopen (`t12-15`); secondary only. |
| AC-9 | Pre-Save comparison: only intended changes; everything else matches baseline | **Partly met** | T12 pre-save matrix P1–P9 (`t12-02`–`t12-08`), done before the final Save | — | — | Intended changes verified: deletion, caption, Static (geometry, binding, No Colon), event, Primary. **Unexplained difference: FX_VarTest (G8, waived).** Field-by-field geometry for every untouched component was not re-compared after the final Save (the T12 comparison re-read FX_RefreshButton, FX_PictureStatic, Form Layout and the component tree). The T9 Form-level focus event (A3) was reverted by the T10 discard, and the Form Layout readbacks match the pre-discard values. |
| AC-10 | Exactly one ordinary Designer Save after all gates; native response verbatim; Save disabled after; no regeneration or extra Save | **Met as amended (A1)** | Pre-Save gates passed in T12 before the final Save | T12 native toast: "Form [FX_Items] and global object(s) were saved." Save, Undo, Redo and Regenerate Form disabled (`t12-10`). T9 intermediate toast: same wording (`t9-05`). | — | Two Saves, not one (A1). Regenerate Form never clicked. |
| AC-11 | Clean close once without prompt; reopen via approved route; identity identical; all intended items recovered; FX_VarTest, FX_Test, others unchanged; Save disabled; canvas caption resolution recorded | **Met except FX_VarTest (waived)** | T10 authorized discard (`t10-03`, `t10-04`) | T12 clean close without prompt (`t12-11`); recent-list reopen (`t12-12`, `t12-13`); 17 components; FX_PictureStatic geometry equals pre-Save (`t12-06` = `t12-17`); FX_RefreshButton geometry equal (`t12-05` = `t12-16`); Form Layout equal (`t12-07` = `t12-20`); canvas caption **Import** | — | Two close/reopen cycles (A5). FX_VarTest not recovered as verified (G8 waiver). |
| AC-12 | Runtime read-only: opens once; three records; visible Import; empty picture Static; no unexpected prompt; no record change; runtime Save disabled; Import not activated | **Substantially met; limitation on the picture region** | — | — | Open route Web Client Form > Open > Select Form (one FX_Items entry; `t13-03`); title FX_Items (`t13-04`); records: dumbbell / 45 pound iron / 45.00 / EA (`t13-04`); eggs / cage free / 6.99 / DZ (`t13-06`); guitar / natural acoustic / 129.99 / EA (`t13-07`); Import visible, captioned Import, **not clicked** (`t13-04`, `t13-05`); runtime Save `[disabled]` (`t13-05`); no prompt; no edit | See limitations (§5): picture region is visually blank for all three; no picture element in the accessibility tree; "empty" is not proven. |
| AC-13 | Final report: decisive evidence for AC-1 to AC-12; baseline and recovery comparisons; Form-size findings; exact action audit; worker-written inventory; final Designer and runtime state | **Met by this report, with the limitations in §4–§5** | — | — | — | Counts reconciled against controller audits where possible (§3). Cumulative totals that cannot be independently reconstructed are marked as limitations. |

## 3. Persisted values and runtime summary

**Post-Save recovered values (T12, Designer, clean; each re-read after reopen):**
- FX_PictureStatic: Type Static; Pane 1; Tab 0; Size `20; 9`; Location `10.5; 21.5`; Binding Type Property; Binding `object.FX_Picture`; No Colon `True`.
- FX_RefreshButton: Name FX_RefreshButton; Type PushButton; Caption `FX_sImport` (canvas shows `Import`); Binding Type None; Primary `FX_ImportPicture` (authoritative); Size `14.25; 1.89`; Location `12.1666666666667; 5.25`.
- FX_ImportPicture: exactly one sequence-0 action; Response Type `Binary Value Action`; Disabled `false`; Response Parameters `ACTION(Import) COMPONENT(FX_PictureStatic)`.
- FX_Test: two original actions unchanged: sequence 0 Prompt `PROMPT(Hello World) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)` (false); sequence 1 Set Values `SETVARVALUES(FX_VarTest=P(FX_Description))` (false).
- Components: 17 (Pane (00); FormCollectionGrid; FX_ItemGridCol; FX_DescriptionGridCol; FX_CostGridCol; FX_UMGridCol; Pane (01); FX_RefreshButton; FX_ItemStatic; FX_ItemEdit; FX_DescriptionStatic; FX_DescriptionEdit; FX_CostStatic; FX_CostEdit; FX_UMStatic; FX_UMCombobox; FX_PictureStatic). FX_VarTestEdit absent.
- Form Layout: Unit Char; Size `69; 21`; Splitter Vertical; Splitter Position 11.
- FX_sImport: String Value `Import` (read in T10 through the String dialog; the dialog was closed with OK and no edit).

**Runtime (T13, Web Client, read-only):** runtime FX_Items opened through Form > Open > Select Form (one entry). Three records were read through row navigation with no edits. Import was visible and captioned `Import` and was **not** clicked. The picture region was visually blank for all three records. Runtime Save was `[disabled]`. The Designer was re-checked and remained clean (Save and Undo disabled; User scope).

**Visual blankness versus proven empty binary value:** the runtime picture region is blank on screen and has no element in the accessibility tree. This is a visual observation only. It does not prove that the binary value is empty, and it does not prove that the Static is bound to a populated value. No native read-only surface that exposes the binary value was used.

**Design-time broken-image glyph:** the Designer shows a broken-image glyph at the top-left of the picture Static (T10–T13 captures). The runtime does not. This is preserved as an **unresolved observation, not a verified import failure**. No picture was loaded and no image was rendered or fetched to investigate it.

**Not tested:** no image upload, no picture chooser, no binary import, and no functional execution of the Import action or of FX_ImportPicture. The Import button was never activated, by mouse or keyboard.

## 4. Cumulative browser action audit (exact where reconstructable)

**Designer Save: 2** (T9 intermediate; T12 final). Confirmed by controller audit (`harness-audit-T9.md` row 21; `harness-audit-T12.md` row 28). No retry.
**Designer close: 2** (T10 authorized discard, "No"; T12 clean close). Confirmed (`harness-audit-T10.md` row 9; `harness-audit-T12.md` row 35).
**Designer reopen from recent list: 2** (T10 row 19; T12 row 42). Plus the initial T1 open (`harness-audit-T1.md` row 36) and the T13 runtime open (Form > Open > Select Form, row 13 and OK row 17 in `harness-audit-T13.md`).
**Toolbox drops: 1** (T6). **Components deleted: 1** (T5 trash, `harness-audit-T5.md` row 27; confirmation named FX_VarTestEdit). **Components added: 1** (the T6 drop). **Strings created: 1** (T4, `harness-audit-T4.md` row 28, Yes). **Event groups created: 1** (T7). **Event action rows created: 1** (T7). **Primary changes: 1** (T11). **Parameters dialog OK: 1** (T10). **Form width edits: 0.** **Metadata unloads: 0.** **Regenerate Form clicks: 0.** **Delete Form Definition (top toolbar) clicks: 0** (no such click appears in any controller audit). **Runtime Import activations: 0** (the only "Import" clicks in controller audits are dropdown option selections in T8 row 32 and T10 row 85, plus none in T13). **Runtime Save clicks: 0. Runtime record edits: 0. Runtime record adds or deletes: 0.** **Designer close with Yes: 0.** **Designer close with Cancel: 0.**

**Tab lists and selects.** T8 is reconciled: the controller audit records one tab list (`harness-audit-T8.md` row 5) and one tab select (row 7), which matches the carried summary (one each, pre-compaction). The worker's T8 report counted 0 and 0 for the post-compaction sequence only; the controller figure of 1 and 1 is authoritative. Cumulative: tab lists 14 (T1–T12: 1 each = 12; T13: 2 per controller rows 1 and 31); tab selects 16 (T1–T12: 1 each = 12; T13: 4 per controller rows 7, 9, 32, 35). The T1–T7, T9–T12 per-task figures are per the worker reports; the controller tables for those tasks were not all re-counted.

**Find and click tool calls (controller counts, all 13 tasks):** browser_find 192 rows; browser_click 192 rows (tool-level rows, including double-clicks where the controller recorded them as click calls). The per-task controller counts are below. Where the worker report differs, the controller count is authoritative for that task.

| Task | Worker report: find | Controller: find | Worker: element clicks | Controller: click rows |
|---|---|---|---|---|
| T1 | 19 | 22 | 48 | 48 |
| T2 | 12 | 12 | 10 | 10 |
| T3 | 3 | 3 | 1 | 1 |
| T4 | 13 | 16 | 10 | 10 |
| T5 | 9 | 9 | 10 | 10 |
| T6 | 24 | 27 | 23 single + 9 double | 30 |
| T7 | 9 | 9 | 10 + 1 coordinate | 9 |
| T8 | 14 | 14 | 8 | 8 |
| T9 | 11 | 11 | 7 | 7 |
| T10 | 27 | 27 | 23 | 23 |
| T11 | 16 | 17 | 13 | 13 |
| T12 | 16 | 17 | 18 | 18 |
| T13 | 9 | 8 | 5 | 5 |
| **Total** | 182 | **192** | — | **192** |

The find-count differences are recorded here as corrections; the individual task reports were not edited. The T6 double-click figure (9) does not reconcile exactly to the controller click rows (30 = 23 + 7); the coordinate click in T7 is a different tool and is not counted in the controller click rows. Mouse wheel, mouse move, screenshot, snapshot, tab, key and hover calls were not totalled from the controller tables (limitation); the worker's per-task figures for those are reported in each task report.

## 5. Limitations and unresolved points

1. **FX_VarTest (Form - Temporary) — operator waiver G8, not verified.** The variable was present in the T9 post-Save screenshot and was absent from the Variables grid at T11, after the T12 final Save and reopen, and at the T13 check. The T10 discard-and-reopen is the only close/reopen between T9 and T11, and the T10 pass did not read the Variables tab after its reopen. **Candidate procedure only (not verified Mongoose behaviour):** the loss may be tied to the discard-and-reopen path, or to a Designer display or reference-dependent condition that the operator described. No recreation, no alteration of FX_Test, and no restoration of FX_VarTestEdit was attempted. The FX_VarTest definition and value are therefore **not** claimed as preserved.
2. **Designer Save semantics.** The toast "Form [FX_Items] and global object(s) were saved." indicates that the Save covered the form and global objects. Whether the FX_sImport string row was written by this Save is not independently proven; the post-reopen String dialog (`t10-13`) reads Import within the same session.
3. **Session-level evidence only.** Persistence was observed through the Designer reopen in the same browser session. No database durability, cache invalidation or independent read of the saved definition was performed (AGENTS.md). Nothing here is replay_verified.
4. **Picture region at runtime.** Visually blank; no picture element in the accessibility tree; no binary-value check. Presence of a visible "empty picture Static" is therefore a visual observation only.
5. **Design-time broken-image glyph.** Observed in the Designer at the picture Static; not fixed; cause unresolved. Not treated as an invalid binding.
6. **Stale selector and header.** The T8 component selector listed FX_VarTestEdit and omitted FX_PictureStatic; the T10 reopen showed the expected list. Whether a Save alone refreshes the selector is **untested**. The T6 Properties header showing `static1_USER` after rename was a display lag; it was not present at T10–T13.
7. **Components-grid Event to generate lag.** Showed FX_Test before the final Save and FX_ImportPicture after the reopen. Not used as Primary evidence; the authoritative property readback is the proof.
8. **Event not executed.** FX_ImportPicture was configured and persisted but never triggered; the Import action was never activated.
9. **Cumulative counts.** Find and click totals are controller-reconciled (§4). Mouse, screenshot, snapshot and keyboard totals cannot be independently reconstructed from the controller tables; they are reported per task only.
10. **T1 Designer launch route.** The route Web Client Form > Definition > Designer was not in the brief; coordinator to confirm.
11. **Screenshot timeouts.** One environment timeout on "fonts loaded" is recorded: the T13 first attempt at `t13-02` (controller row 3 of `harness-audit-T13.md`). It was retried once and succeeded (row 5). No other timeout appears in the controller audits reviewed (T8, T13); the other audits were not re-read for timeouts.

## 6. Action classification and statement

- No image upload, no picture chooser, no binary import and no functional execution of FX_ImportPicture were tested.
- The Import button was not clicked, and no keyboard input was sent to it.
- No non-FX_ artifact was created, modified or deleted in this experiment (all configuration targets carry the FX_ prefix).
- The IDO checkout was not changed; no check-in or undo was performed.
- Final classification: **OBSERVED, ACCEPTED UNDER OPERATOR AMENDMENTS (A1–A5) AND THE G8 WAIVER (A7). NOT replay_verified.**

## 7. Final Designer and runtime state

- **Designer:** FX_Items open in the Designer tab; ScopeType User; ScopeName anton.ramos@3mworks.com.ph; Save disabled, Undo disabled, Redo disabled (T13 `t13-08`); clean. Variables grid shows Form - Persistent, Global - Persistent and Global - Temporary only (no Form - Temporary; waiver G8).
- **Web Client:** tab 0 shows the runtime FX_Items Form with record 3 of 3 (guitar) selected in the last read (`t13-07`). Runtime Save disabled. No dialog. No record edited. Import not activated.
- **Tabs:** two tabs remain (Web Client tab 0 current; Designer tab 1).

## 8. Worker-written file inventory (EXP-062-R4)

**Written or edited in T14 (this task):**
- `evidence/EXP-062-R4/T14-final-acceptance-and-audit-report.md` (created; this report).
- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md` (edited: T14 status line, final acceptance section).

**Written in T1–T13 (by worker tasks; per-task inventories are in each report):**
- Reports: `T1-preflight-report.md`, `T2-baseline-completion-and-candidate-position-report.md`, `T3-coordinate-model-validation-report.md`, `T4-fx-simport-string-and-caption-assignment-report.md`, `T5-fx-vartestedit-deletion-report.md`, `T6-fx-picturestatic-placement-and-configuration-report.md`, `T7-fx-importpicture-event-handler-report.md`, `T8-fx-importpicture-action-configuration-report.md`, `T9-intermediate-save-and-action-selector-report.md`, `T10-discard-recovery-and-action-configuration-report.md`, `T11-primary-reassignment-and-pre-save-gate-report.md`, `T12-final-save-and-saved-form-recovery-report.md`, `T13-runtime-readonly-verification-report.md`.
- Screenshots and snapshots: `t1-01` to `t1-07` (PNG); `t2-01` to `t2-04` (PNG); `t3-01` (PNG); `t4-01` to `t4-04` (PNG); `t5-01` to `t5-03` (PNG); `t6-01` to `t6-20` (PNG) and `t6-21` to `t6-25` (YAML); `t7-01` to `t7-15` (YAML and PNG); `t8-01` to `t8-10` (YAML and PNG); `t9-01` to `t9-12` (YAML and PNG); `t10-01` to `t10-24` (YAML and PNG); `t11-01` to `t11-18` (YAML and PNG); `t12-01` to `t12-22` (YAML and PNG); `t13-01` to `t13-08` (YAML and PNG). The per-task reports list the exact file names, and the Glob of `evidence/EXP-062-R4/*` matches those names.

**Controller-generated (not worker-written; not edited by this task):** `evidence/EXP-062-R4/harness-audit-T1.md` … `harness-audit-T13.md` (13 files; headers read "controller-generated audit (not worker prose)"). These were used as the independent reference for §4.

**Not edited:** prior experiment records, the EXP-062 and EXP-062-R2 records and evidence, AGENTS.md, tutorial sources, verified recipes, and any file outside the EXP-062-R4 documentation and evidence paths.

Repository confinement is supported by the harness inventories; operator git review remains authoritative.

## 9. Documentation changes made in T14

- `experiments/EXP-062-R4-hello-world-part-4-section-4-picture-import-ui.md`: T14 status line added at the top; a T14 final acceptance section (§11) added at the end, referencing this report. The older T1-scope acceptance matrix (§6), next steps (§7) and open questions (§10) are now superseded by §11 and are annotated as such in place rather than deleted.
- `evidence/EXP-062-R4/T14-final-acceptance-and-audit-report.md`: created (this report).

## 10. Open questions for the coordinator (EXPERIMENT_COMPLETE decision)

1. Accept the FX_VarTest / Form - Temporary absence under the G8 waiver, or require a separate investigation (outside this experiment's scope).
2. Accept the two-Save amendment (A1) and the two close/reopen cycles (A5) for the experiment record.
3. Accept AC-12 as "substantially met" with the visual-only picture-region limitation, or require a separate approved read-only check of the picture binary.
4. Confirm the T1 Designer launch route.
5. Whether a Save alone refreshes the component selector (untested), and the design-time broken-image glyph cause (unresolved).
