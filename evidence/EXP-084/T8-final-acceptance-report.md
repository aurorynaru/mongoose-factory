# EXP-084 — T8 final acceptance report (documentation and evidence reconciliation)

Run `R-20261014-124924-3sU9`, experiment EXP-084, cycle 7, task **T8**. Worker session `c2479711-679d-48df-8757-f539531b86fe`, task_message_id `174b6079-508c-4d52-9c9d-e8761434a9f6`. Date 2026-10-14.

**T8 performed zero browser calls and zero Mongoose changes.** No Designer, runtime or Web Client action was taken. No existing evidence file was modified; only this report and the EXP-084 experiment record were written.

**Recommendation to the coordinator: ACCEPTED AS OBSERVED** (same-session UI level, visual picture identity, no byte identity claimed). The coordinator makes the acceptance decision; this worker does not invoke another experiment, replay or browser operation.

Classification of all findings: **observed only**. Not replay_verified. No database-durability claim.

---

## 1. Coordinator disposition and how it relates to the worker's own assessment

- **Coordinator disposition (T8 instruction):** AC-5 passes at the observed visual level. Order 1 (dumbbell) matches `assets/dumbbell.png`. Order 2 (eggs) matches `assets/eggs.png` and EXP-063-R2's post-upload eggs image. Both pictures have no visible caption or colon. Byte identity is not required and is not claimed here.
- **Worker's T7 assessment (`evidence/EXP-084/T7-picture-identity-comparison-note.md`):** the same visual matches were found, and the worker recorded AC-5 as "not yet passed" pending an operator decision on byte identity. The coordinator's disposition supersedes that recommendation for AC-5 at the observed visual level. The worker's position on byte identity is unchanged: it is not established.
- **Historical conflict (preserved as unresolved):** EXP-063-R2's T7 report §5 and its T8 outcome say the reopened eggs row (`t7-04`) matches `assets/eggs.png`. The screenshot `t7-04` shows a seated shiba-style dog on the eggs row, and so does the pre-import baseline `t1-02`. The cause of this conflict is not established. It is recorded as an unresolved discrepancy inside EXP-063-R2. It is **not** represented here as a proven EXP-084 defect.
- **Relevance to EXP-084 (worker interpretation, not a finding):** the EXP-084 runtime order-2 picture (`t6-07`, `t6-08`, observed 2026-10-14) shows the eggs figure, which is the same figure as `t3-04` and `assets/eggs.png`. The conflicting EXP-063-R2 capture is older and from a different record state. The EXP-084 observation does not by itself explain the EXP-063-R2 capture.

---

## 2. Acceptance matrix (exact existing evidence paths)

Paths are repository-relative. "Snapshot" means a worker-saved accessibility snapshot in `evidence/EXP-084/`. "Find" readbacks are recorded in the experiment record's task sections.

### AC-1 — Sources reviewed; session usable; User scope and clean; 31 components; full properties of both picture components; Image and Text presence

| Item | Observed postcondition | Evidence | Limitations |
|---|---|---|---|
| Sources reviewed | AGENTS.md; hello-world-pt5.md §6 (lines 168–185, with boundary note); EXP-083 (lines 1–508 read; runtime pattern checked by grep); EXP-082 (T8 table, lines 449–488; grep); EXP-062-R4 (grep); EXP-063-R2 (grep and sections read in T7) | Experiment record T1 section, "Sources reviewed" | EXP-083 T5–T6 and EXP-082 narrative were not read in full |
| Session usable | No expiry modal, sign-in page or banner at start | `evidence/EXP-084/snapshot-t1-01-designer-start.yml` | Same session throughout; re-login count 0 |
| Designer User scope and clean | Footer `ScopeType: User`; Save, Undo, Regenerate Form disabled; no dialog | `snapshot-t1-01-designer-start.yml`; `t1-02-baseline-fx_itmspicturestatic-properties.png` (footer and Save visible) | — |
| 31 components | Tree lists FormCollectionGrid, 10 GridColumns, 10 Pane (01) Statics, 10 detail controls | `snapshot-t1-01-designer-start.yml` | Counted from the snapshot; the experiment screenshots show only part of the list |
| FX_ItmsPictureStatic (full properties read) | Name `FX_ItmsPictureStatic`; Type Static; Caption blank; Binding Type None; From Device Master True; Formatting present with Image Display Fit and **Image and Text Inherit**; Unit Char; Size `20; 1`; Location `21.55; 3`; Tab 29; Specific Attributes Frame, Group, Interpret Bound, **No Colon False**, No Interpret New Lines | `t1-02-baseline-fx_itmspicturestatic-properties.png`; `t1-03-baseline-fx_itmspicturestatic-layout-misc-no-colon.png` | Appearance, Behavior, Events, Help, Inheritance, Data Type, Validation, Glue, Containment and Free-Form Data were not expanded; the Size width and height labels are cited from EXP-062-R4 |
| FX_ItmsPictureEdit (full properties read) | Name `FX_ItmsPictureEdit`; Type Edit; Caption `C(FX_ItmsPictureStatic)`; Binding Type Property; Binding `object.FX_ItmsPicture`; Formatting present with **Image and Text Inherit**; Unit Char; Size `37.05; 2`; Location `21.55; 23.75` (Top 21.55, Left 23.75); Tab 30; Specific Attributes Group, Interpret Bound, No Interpret Content, Password, Self Contained Caption (all False); **no No Colon row** | `t1-diag-07-fx-itmspictureedit-selected-props.png`; `t1-diag-09-edit-props-scrolled-lower.png`; find readbacks | As above |
| Image and Text presence | Present on both components (value Inherit at baseline). The Image and Text option list was first opened in T3 | `t1-02`, `t1-diag-07`; `t3-09-image-and-text-row-selected-options-check.png` | Options observed in T3: Inherit, Overlaid, TextOnly, ImageOnly, HorizontalTextImage, HorizontalImageText, VerticalTextImage, VerticalImageText |
| FX_DerOrderTotalEdit (reference) | Size `37.05; 2`; Location `19.3; 23.75`; Caption `C(FX_DerOrderTotalStatic)` | Find readback in T1 (experiment record) | Screenshot not taken for this row |

### AC-2 — FX_ItmsPictureStatic deleted once through the Components-grid trash button after a confirmation naming it; 30 components remain; FX_ItmsPictureEdit and FX_ItmsPictureGridCol unchanged

| Item | Observed postcondition | Evidence | Limitations |
|---|---|---|---|
| Pre-delete name and type verified | Properties header `FX_ItmsPictureStatic (Static)`; Name `FX_ItmsPictureStatic`; Type Static; grid row tab 29 selected | `t2-02-pre-delete-fx_itmspicturestatic-selected-name-type.png`; `snapshot-t2-02-pre-delete-selected-static.yml` | — |
| Grid trash button used once | Control `button ""` inside the toolbar under the Components grid (ref e1371). The top-toolbar Delete (Delete Form Definition) was **not** clicked | `snapshot-t2-02-pre-delete-selected-static.yml`; experiment record T2 | — |
| Confirmation names only FX_ItmsPictureStatic | "Are you sure you want to delete FX_ItmsPictureStatic and all the components it contains?" with OK and Cancel | `t2-03-delete-confirmation-names-fx_itmspicturestatic.png` | — |
| One OK | OK clicked once; dialog closed; no further dialog | `snapshot-t2-03-post-delete-verify.yml`; `t2-04-post-delete-grid-edit-selected-dirty-no-dialog.png` | — |
| 30 components remain | 30 rows (FormCollectionGrid 1; GridColumns 10; Pane (01) Statics 9; detail controls 10); FX_ItmsPictureStatic absent | `snapshot-t2-04-post-delete-components-expanded.yml` | Counted from the snapshot; `t2-04` shows only the bottom rows |
| FX_ItmsPictureEdit unchanged by the delete | Type Edit, binding `object.FX_ItmsPicture`, Size `37.05; 2`, Location `21.55; 23.75`, Tab 30 | Find readback in T2 | — |
| FX_ItmsPictureGridCol unchanged | Binding `object.FX_ItmsPicture`, Size `10; 0`, Location `0; 0`, Tab 10; Caption blank (re-read in T3 and T5) | `t2-01-pre-delete-fx_itmspicturegridcol-selected.png`; `t3-01-gridcol-caption-blank-after-ac2-check.png`; `snapshot-t5-08-reopened-gridcol-selected-readback.yml` | Caption read by its value cell, not by screenshot after the reopen |
| Static Layout and No Colon before the delete | Not re-read in T2 | T1 values (`t1-03`) cited | — |

### AC-3 — FX_ItmsPictureEdit: Type Static; binding kept; Size height 9 with width and Location unchanged; No Colon True; Image Only if offered; values verified after reselecting; screenshot before Save

| Item | Observed postcondition | Evidence | Limitations |
|---|---|---|---|
| Type Static (one dropdown change) | Properties Type `Static`; the Specific Attributes list rebuilt for a Static | `t3-03-type-static-committed-binding-check.png` | The Components-grid Type column and the Properties header label still read Edit until the reopen (see §4) |
| Binding kept | Binding Type Property; Binding `object.FX_ItmsPicture` | `t3-03`; `snapshot-t3-02-post-configure-reselected-inventory.yml`; `t5-05-reopened-fx_itmspictureedit-design-datasource-type-static.png` | — |
| Size height 9, width and Location unchanged | Size `37.05; 9`; Width `37.05`; Height `9`; Location `21.55; 23.75` | `t3-06-size-height-9-committed-before-no-colon.png`; `t3-12-reselected-layout-misc-no-colon-verification.png`; `t5-06-reopened-fx_itmspictureedit-layout-no-colon.png` | `t3-05` was written twice (see §4) |
| No Colon True | No Colon `True` (True/False control, one selection) | `t3-08-no-colon-true-committed-before-image-check.png`; `t3-13-reselected-no-colon-true-specific-attributes.png`; `t5-06` | — |
| Image Only (offered) | Image and Text `ImageOnly` (one selection) | `t3-10-configured-fx_itmspictureedit-before-save.png`; `t5-05` | — |
| Values verified after reselecting | Reselect in T3 (`t3-11`, `t3-12`, `t3-13`); read-only pre-Save check in T4 (`snapshot-t4-02-props-readonly-pre-save.yml`); reopen in T5 (`snapshot-t5-07-reopened-fx_itmspictureedit-selected-props.yml`) | as listed | — |
| Screenshot before Save | Configured state, Save enabled, no dialog | `t3-10-configured-fx_itmspictureedit-before-save.png`; `t4-01-pre-save-configured-state-save-enabled.png` | — |
| Caption unchanged (not in the brief's edit list) | `C(FX_ItmsPictureStatic)` | Snapshots in T3–T5 | The Caption still refers to a deleted component (open question, §6) |
| Name unchanged | `FX_ItmsPictureEdit` in every readback | Snapshots and screenshots | — |

### AC-4 — Exactly one Designer Save with native response; clean Form closed once and reopened once with AC-2 and AC-3 state recovered

| Item | Observed postcondition | Evidence | Limitations |
|---|---|---|---|
| One Save | Toolbar Save clicked once (not retried). Native response: toast titled `Save`, text `Form [FX_Orders] and global object(s) were saved.` | `t4-02-post-save-native-toast-form-saved-clean.png`; `snapshot-t4-03-post-save-visible-state.yml` | The toast is transient; the wording shows the Save was accepted by the client, not that the server stored it. Not verified beyond the reopen |
| Clean after Save | Save and Undo disabled; no dialog | `snapshot-t4-03`; `t4-02`; `t5-01-pre-close-clean-save-undo-disabled.png` | Client-side indicator |
| One close | Form-tab close control clicked once; no prompt | `t5-02-post-close-no-prompt-form-tab-gone.png` | — |
| One reopen | Form menu → recent-forms `FX_Orders` once; no Select Form dialog | `t5-03-reopened-form-identity-user-clean.png`; `snapshot-t5-03-reopened-fresh-inventory.yml` | — |
| Reopened identity and scope | Name FX_Orders; Normal; Is Master True; footer `ScopeType: User`; Save and Undo disabled; captions resolve on canvas | `t5-03`; `snapshot-t5-03` | — |
| 30 components after reopen; FX_ItmsPictureStatic absent | Confirmed in the expanded tree | `snapshot-t5-06-reopened-components-expanded-inventory.yml`; `t5-04-reopened-components-grid-type-static-30-rows.png` (top rows only) | Full list only in the snapshot |
| AC-2 state recovered | FX_ItmsPictureGridCol unchanged (`snapshot-t5-08`) | as listed | — |
| AC-3 state recovered | Type Static; grid row `FX_ItmsPictureEdit Static object.FX_ItmsPicture 1 30`; header `(Static)`; binding; Size `37.05; 9`; Location `21.55; 23.75`; No Colon True; ImageOnly; Caption unchanged | `t5-05-…png`; `t5-06-…png`; `snapshot-t5-06`; `snapshot-t5-07` | Same-session reopen (see §5) |

### AC-5 — Runtime: one blank-criteria query shows the two orders; each shows its item picture; caption or colon recorded; nothing typed or saved; runtime closed once

| Item | Observed postcondition | Evidence | Limitations |
|---|---|---|---|
| Runtime opened once (Form > Open > Select Form) | Select Form dialog with one FX_Orders row, filter pre-filled; OK clicked once | `t6-02-select-form-dialog-fx_orders-filtered.png`; `t6-03-runtime-fx_orders-opened-mode-before-f4.png` | The filter text `FX_Orders` was carried over from an earlier picker session and was not typed in T6 (see §5) |
| Mode and switch | Opened in Add mode (new-row placeholder `3`); one switch to Filter in Place (toolbar); status bar `Filter in Place`; criteria blank | `t6-03`; `t6-04-runtime-after-filter-in-place-before-f4.png`; `snapshot-t6-02-runtime-fx_orders-opened-pre-mode-check.yml` | — |
| One F4, blank criteria | Two rows; status `Customer ID (Object 1 of 2)` | `t6-05-runtime-after-f4-blank-criteria-result.png`; `snapshot-t6-03-runtime-after-f4-two-rows.yml` | Customer ID combobox took focus with FX001 selected (no typed or chosen value) |
| Order 1 fields (dumbbell) | 1 / FX001 / Factory test one / 1 Factory Street / dumbbell / 45 pound iron / 45.00 / 2 / 90.00; matches EXP-083 | `t6-06-runtime-order-1-dumbbell-picture-row1.png` | — |
| Order 1 picture | Visible golden-coated sitting puppy with open mouth; no visible caption; no visible colon. Matches `assets/dumbbell.png` visually | `t6-06`; `evidence/EXP-084/T7-picture-identity-comparison-note.md`; reference `assets/dumbbell.png` (read-only) | Visual only; byte identity not claimed |
| Order 2 fields (eggs) | 2 / FX002 / Factory test two / 2 Factory Street / eggs / cage free / 6.99 / 1 / 6.99; matches EXP-083 | `t6-07-runtime-order-2-eggs-picture-row2.png`; `t6-08-runtime-order-2-eggs-picture-device-scale-detail.png` (same resolution as `t6-07`) | — |
| Order 2 picture | Visible greyish-tan rounded head with two dark eyes and four small tan fragments; no visible caption; no visible colon. Matches `assets/eggs.png` and EXP-063-R2 `t3-04` visually | `t6-07`, `t6-08`; `t3-04` (EXP-063-R2, read-only); `assets/eggs.png` (read-only) | Visual only; byte identity not established; historical conflict in EXP-063-R2 `t7-04` (see §4) |
| Caption or colon | None visible on either order. The picture element's accessibility name is `C(FX_ItmsPictureStatic)` on both (not visible text) | `snapshot-t6-03`; `snapshot-t6-04-runtime-order-2-eggs-state.yml` | Accessibility name only |
| Nothing typed, chosen, created or saved | 0 typed, 0 list values, 0 New, 0 Save, 0 Delete, 0 Import at runtime | Action audit (§7) | — |
| Runtime closed once; no prompt | One close; no prompt; Web Client returned to the pre-existing IDO Properties form | `t6-09-runtime-post-close-no-prompt.png` | — |
| Coordinator disposition | AC-5 passes at the observed visual level | Coordinator instruction for T8 | Not byte-verified (see §5) |

### AC-6 — Final report: decisive evidence for AC-1 to AC-5; complete action audit; worker-written file inventory; final state

This report is the AC-6 document. Its audit is in §7, its file inventory in §8, and its final state in §9.

---

## 3. Mutation and budget reconciliation

| Budget | Authorised | Used (worker-reported) | Where | Notes |
|---|---|---|---|---|
| Component deletions | 1 | **1** | T2 | FX_ItmsPictureStatic only |
| Type changes | 1 | **1** | T3 | Edit to Static |
| Size edits | 1 | **1** | T3 | Height only, 2 to 9 |
| No Colon changes | 1 | **1** | T3 | False to True |
| Image Only changes | 0 or 1 | **1** | T3 | ImageOnly, offered |
| Designer Save | 1 | **1** | T4 | Native response recorded |
| Designer close | 1 | **1** | T5 | Clean; no prompt |
| Designer reopen | 1 | **1** | T5 | Recent-forms |
| Runtime open | 1 | **1** | T6 | Select Form |
| Filter in Place switch | (within runtime open) | **1** | T6 | Toolbar |
| F4 | 1 | **1** | T6 | Blank criteria |
| Runtime close | 1 | **1** | T6 | No prompt |
| Other component edits | 0 | **0** | — | Selection and view-only expansion only |
| Strings / captions created or edited | 0 | **0** | — | — |
| Runtime edits, New, Save, Delete, Import | 0 | **0** | — | — |
| IDO, property, class, SQL changes | 0 | **0** | — | — |
| Checkout actions (check-in, check-out, undo) | 0 | **0** | — | — |
| Designer Regenerate Form / top-toolbar Delete | 0 | **0** | — | — |
| Re-logins | 0 | **0** | — | Session usable throughout |

Note on the 1-unit "Type" and "Size" entries: the Size change was made through the Height editor (one `browser_type` of `9` and one Tab), not through the Width field, which was never edited.

---

## 4. Discrepancies, deviations and their resolution

1. **Type labels disagreed before the reopen (resolved on reopen).** After the Type change (T3), the Components-grid Type column and the Properties header label still read Edit, while the Properties Type value read Static. The disagreement persisted through the T4 Save and into the pre-close state of T5 (`t5-01`). After the T5 reopen, all three read Static (`t5-04`, `t5-05`, `snapshot-t5-06`, `snapshot-t5-07`). The cause is not established. The reopen is a same-session check, so it may reflect client-side caching rather than the stored definition (§5).
2. **Intentional screenshot overwrite.** In T3, `evidence/EXP-084/t3-05-size-group-expanded-height-before-edit.png` was written twice under the same name. The first capture (taken before the Size children were visible) was overwritten and is not available. The surviving file shows the Height row. This is the only overwrite in EXP-084.
3. **Diagnostic captures in T1.** `t1-diag-01` to `t1-diag-09` are process captures of expander states, not baseline evidence. They are kept as written and are not cited as baseline proof.
4. **Coordinate clicks (view-only and navigation).** Expander chevrons in the Properties panel (T1: six; T3: one) and the runtime row-number cells (T6: two) were coordinate clicks. The row-number cells are not exposed in the accessibility tree. The chevron clicks changed view state only.
5. **Mouse-wheel scroll with no effect (T1).** One wheel at an unspecified pointer position did not move the Properties panel. Its effect on the Components grid was not established.
6. **Designer top-toolbar Delete was matched by a find but not clicked (T2).** A find for the trash control matched the top-toolbar Delete (Delete Form Definition, ref e25). It was not clicked. No Delete Form Definition dialog appeared.
7. **FX_ItmsPictureEdit reselect order (T3).** FX_DerOrderTotalEdit was selected (selection only) before FX_ItmsPictureEdit was reselected, as the brief asked.
8. **Historical EXP-063-R2 eggs conflict (unresolved; not an EXP-084 defect).** See §5.

---

## 5. Limitations and the same-session boundary

- **Same-session recovery only.** The Designer Save (T4) was followed by a close and reopen in the same browser session (T5). The reopened values may come from client-side caching. EXP-084 does not establish server-side or database durability, and makes no replay or durability claim. The Save toast confirms the client accepted the Save; it does not prove the server stored it independently.
- **Picture identity is visual, not byte-level.** The coordinator's disposition accepts the visual match. Byte or hash comparison of the stored image against `assets/dumbbell.png` and `assets/eggs.png` was not performed and is not claimed.
- **Historical EXP-063-R2 conflict (unresolved).** EXP-063-R2's T7 report (§5) and T8 outcome claim that the reopened eggs row shows the asset figure. Its own capture `evidence/EXP-063-R2/t7-04-after-reopen-eggs-item-fields-picture.png` shows a seated shiba-style dog on that row. The pre-import baseline `t1-02` also shows the shiba. The cause (stored-value difference, display difference or capture misattribution) cannot be determined from the screenshots. The EXP-084 runtime order-2 observation (`t6-07`) shows the eggs figure. The conflict belongs to the EXP-063-R2 record; it is not represented here as a proven EXP-084 defect.
- **Select Form filter pre-populated.** When the Select Form dialog opened in T6 (`t6-02`), its filter already read `FX_Orders` (Filter By Name). The worker did not type it in T6. Who populated it earlier is not established by this worker. EXP-083 T5 records a typed Select Form filter in its own session (EXP-083 decision D9, cited, not re-verified).
- **Picture area not seen on the Designer canvas.** No Designer screenshot shows the picture component rendered on the FX_Orders canvas. Runtime pictures were observed in T6 only.
- **Caption reference.** `C(FX_ItmsPictureStatic)` is the Caption expression of FX_ItmsPictureEdit. It refers to a component deleted in T2. Captions were out of scope and were not changed. The runtime shows the picture with no visible caption text (`t6-06`–`t6-08`); the expression's effect on the stored Form is not otherwise established.
- **Web Client console counter.** The Web Client's console counter moved from "2 errors" (Designer) to "29 errors, 2 warnings" (Web Client, T6). The console was not inspected, as the brief forbids it. The counter is recorded, not interpreted.
- **Controller audit counts not available.** Each task's audit is the worker's own tally of its tool calls, taken from the call sequence. No separate controller log was available to this worker. The two kinds of count are kept apart in §7.
- **Acceptance wording.** "AC-4 same-session" is the honest scope of the close and reopen. No AC is claimed at database or replay level.

---

## 6. Genuine unresolved evidence gaps

1. **Server-side or database persistence** of the Designer Save (AC-4): not independently verified (same-session reopen only).
2. **Byte-level identity** of the stored dumbbell and eggs pictures against the asset files: not established (visual match only; coordinator waived this for AC-5).
3. **EXP-063-R2 reopen eggs capture `t7-04`** showing the shiba: unresolved; belongs to EXP-063-R2.
4. **Designer canvas rendering** of the picture component: not captured in any Designer screenshot.
5. **FX_ItmsPictureEdit Caption** `C(FX_ItmsPictureStatic)` pointing at a deleted component: left unchanged (out of scope); its effect on the stored Form is not established beyond the runtime observation.
6. **AC-1 unexpanded property groups** (Appearance, Behavior, Events, Help, Inheritance, Data Type, Validation, Glue, Containment, Free-Form Data): not read.
7. **Form-level Properties** of FX_Orders: not read in EXP-084.
8. **Select Form filter origin**: who populated it earlier is not established.
9. **Web Client console counter** (29 errors, 2 warnings): not inspected.

---

## 7. Cumulative browser action audit

### 7.1 Browser calls by task (worker-reported; every browser tool invocation counted once)

| Task | Browser calls | Breakdown (worker-reported) |
|---|---|---|
| T1 | **45** | 2 tab, 1 snapshot, 13 finds, 6 element clicks, 6 coordinate clicks, 1 key, 2 mouse moves, 3 wheels, 11 screenshots |
| T2 | **23** | 1 tab list (0 selects), 4 snapshots, 7 finds, 7 element clicks, 4 screenshots |
| T3 | **62** | 1 tab list (0 selects), 2 snapshots, 23 finds, 13 element clicks, 1 coordinate click, 1 type, 1 key, 2 mouse moves, 4 wheels, 14 screenshots (13 unique files) |
| T4 | **13** | 1 tab list, 3 snapshots, 3 finds, 1 element click (Save), 1 mouse move, 1 wheel, 3 screenshots |
| T5 | **28** | 1 tab list, 7 snapshots, 4 finds, 8 element clicks, 1 mouse move, 1 wheel, 6 screenshots |
| T6 | **28** | 1 tab list, 1 tab select, 4 snapshots, 5 finds, 5 element clicks, 2 coordinate clicks, 1 key (F4), 9 screenshots |
| T7 | **0** | No browser call |
| T8 | **0** | No browser call |
| **Total** | **199** | 45 + 23 + 62 + 13 + 28 + 28 + 0 + 0 |

Check: 45 + 23 = 68; + 62 = 130; + 13 = 143; + 28 = 171; + 28 = 199.

Tab selects across the experiment: T1 1, T6 1 (others 0 because tab 0 was already current or no select was needed). Tab lists: one at the start of each browser task.

### 7.2 Mutation-class actions (worker-reported; separate from browser calls)

| Action class | Count | Task |
|---|---|---|
| Component deletions | 1 | T2 |
| Type changes | 1 | T3 |
| Size edits | 1 | T3 |
| No Colon changes | 1 | T3 |
| Image Only changes | 1 | T3 |
| Designer Save | 1 | T4 |
| Designer close | 1 | T5 |
| Designer reopen | 1 | T5 |
| Runtime open | 1 | T6 |
| Filter in Place switch | 1 | T6 |
| F4 query | 1 | T6 |
| Runtime close | 1 | T6 |
| Other component changes | 0 | — |
| Strings or captions created or edited | 0 | — |
| Runtime edits (typed, chosen, New, Save, Delete, Import) | 0 | — |
| IDO, property, class or SQL changes | 0 | — |
| Checkout actions | 0 | — |
| Re-logins | 0 | — |

The mutation-class counts are a subset of the browser calls: each deletion, change, save, close, reopen, open, switch and F4 was performed through browser calls counted in §7.1.

---

## 8. Worker-written file inventory

### 8.1 Experiment record

- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` — created in T1; edited in T2–T8.

### 8.2 Evidence written by workers (`evidence/EXP-084/`)

**T1 (12 files):** `snapshot-t1-01-designer-start.yml`; `t1-02-baseline-fx_itmspicturestatic-properties.png`; `t1-03-baseline-fx_itmspicturestatic-layout-misc-no-colon.png`; `t1-diag-01-misc-group-click-state.png`; `t1-diag-02-misc-after-arrowright.png`; `t1-diag-03-misc-after-chevron-click.png`; `t1-diag-04-specific-attributes-state.png`; `t1-diag-05-groups-expanded-state.png`; `t1-diag-06-formatting-expanded-state.png`; `t1-diag-07-fx-itmspictureedit-selected-props.png`; `t1-diag-08-edit-props-after-wheel.png`; `t1-diag-09-edit-props-scrolled-lower.png`.

**T2 (8 files):** `snapshot-t2-01-designer-fresh-start.yml`; `snapshot-t2-02-pre-delete-selected-static.yml`; `snapshot-t2-03-post-delete-verify.yml`; `snapshot-t2-04-post-delete-components-expanded.yml`; `t2-01-pre-delete-fx_itmspicturegridcol-selected.png`; `t2-02-pre-delete-fx_itmspicturestatic-selected-name-type.png`; `t2-03-delete-confirmation-names-fx_itmspicturestatic.png`; `t2-04-post-delete-grid-edit-selected-dirty-no-dialog.png`.

**T3 (15 files):** `snapshot-t3-01-designer-fresh-start.yml`; `snapshot-t3-02-post-configure-reselected-inventory.yml`; `t3-01-gridcol-caption-blank-after-ac2-check.png`; `t3-02-pre-change-fx_itmspictureedit-selected-edit-binding.png`; `t3-03-type-static-committed-binding-check.png`; `t3-04-layout-misc-scrolled-before-size-change.png`; `t3-05-size-group-expanded-height-before-edit.png` (**written twice; first capture overwritten**); `t3-06-size-height-9-committed-before-no-colon.png`; `t3-07-no-colon-control-after-cell-click.png`; `t3-08-no-colon-true-committed-before-image-check.png`; `t3-09-image-and-text-row-selected-options-check.png`; `t3-10-configured-fx_itmspictureedit-before-save.png`; `t3-11-reselected-fx_itmspictureedit-verification.png`; `t3-12-reselected-layout-misc-no-colon-verification.png`; `t3-13-reselected-no-colon-true-specific-attributes.png`.

**T4 (6 files):** `snapshot-t4-01-designer-pre-save-fresh.yml`; `snapshot-t4-02-props-readonly-pre-save.yml`; `snapshot-t4-03-post-save-visible-state.yml`; `t4-01-pre-save-configured-state-save-enabled.png`; `t4-02-post-save-native-toast-form-saved-clean.png`; `t4-03-post-save-properties-type-static-header-edit-label.png`.

**T5 (13 files):** `snapshot-t5-01-pre-close-fresh.yml`; `snapshot-t5-03-reopened-fresh-inventory.yml`; `snapshot-t5-04-reopened-details-expanded.yml`; `snapshot-t5-05-reopened-components-tab.yml`; `snapshot-t5-06-reopened-components-expanded-inventory.yml`; `snapshot-t5-07-reopened-fx_itmspictureedit-selected-props.yml`; `snapshot-t5-08-reopened-gridcol-selected-readback.yml`; `t5-01-pre-close-clean-save-undo-disabled.png`; `t5-02-post-close-no-prompt-form-tab-gone.png`; `t5-03-reopened-form-identity-user-clean.png`; `t5-04-reopened-components-grid-type-static-30-rows.png`; `t5-05-reopened-fx_itmspictureedit-design-datasource-type-static.png`; `t5-06-reopened-fx_itmspictureedit-layout-no-colon.png`.

**T6 (13 files):** `snapshot-t6-01-webclient-fresh-start.yml`; `snapshot-t6-02-runtime-fx_orders-opened-pre-mode-check.yml`; `snapshot-t6-03-runtime-after-f4-two-rows.yml`; `snapshot-t6-04-runtime-order-2-eggs-state.yml`; `t6-01-webclient-start-state.png`; `t6-02-select-form-dialog-fx_orders-filtered.png`; `t6-03-runtime-fx_orders-opened-mode-before-f4.png`; `t6-04-runtime-after-filter-in-place-before-f4.png`; `t6-05-runtime-after-f4-blank-criteria-result.png`; `t6-06-runtime-order-1-dumbbell-picture-row1.png`; `t6-07-runtime-order-2-eggs-picture-row2.png`; `t6-08-runtime-order-2-eggs-picture-device-scale-detail.png`; `t6-09-runtime-post-close-no-prompt.png`.

**T7 (1 file):** `T7-picture-identity-comparison-note.md`.

**T8 (1 file):** `T8-final-acceptance-report.md` (this report).

**Totals:** 69 evidence files written by workers under `evidence/EXP-084/` (T1 12, T2 8, T3 15, T4 6, T5 13, T6 13, T7 1, T8 1). By type: 21 YAML snapshots (T1 1 + T2 4 + T3 2 + T4 3 + T5 7 + T6 4), 46 PNG screenshots (T1 11 + T2 4 + T3 13 + T4 3 + T5 6 + T6 9), and 2 Markdown notes (T7 1 + T8 1). Total 21 + 46 + 2 = 69. The 46 PNG count includes the 11 T1 files (2 baseline and 9 diagnostic) and the 13 unique T3 files (with `t3-05` overwritten once, so the count of files on disk for T3 is 13 PNG names with 14 captures).

### 8.3 Reference files read only (not written, not modified)

- `assets/dumbbell.png`, `assets/eggs.png` (T7, read-only; operator folder)
- `evidence/EXP-063-R2/t1-02-runtime-fx-items-record2-eggs-baseline.png`, `t3-04-after-upload-eggs-picture-and-modified-state.png`, `t7-04-after-reopen-eggs-item-fields-picture.png`, and `evidence/EXP-063-R2/T7-ac7-close-reopen-recovery-report.md` (T7, read-only)
- `experiments/EXP-063-R2-…md` (read by grep and sections, T7)
- `experiments/EXP-083-…md`, `experiments/EXP-082-…md`, `experiments/EXP-062-R4-…md` (read in part or by grep, T1)
- `docs/mongoose/transcripts/hello-world-pt5.md` and `AGENTS.md` (T1)
- `evidence/EXP-084/t6-06-…png`, `t6-07-…png`, `t6-08-…png` (re-read in T7; read-only)

### 8.4 Tool-generated evidence (not worker-authored; outside the EXP-084 path)

Playwright page-snapshot and console files written by the browser tooling under `evidence\playwright\`, for example `page-2026-10-14T03-26-08-013Z.yml` (EXP-083), and for EXP-084 `page-2026-10-14T04-49-58-495Z.yml` through `page-2026-10-14T05-11-13-277Z.yml` and `console-2026-10-14T04-49-43-600Z.log`, `console-2026-10-14T05-09-42-618Z.log`, and similar. The exact list was not enumerated by the worker; it is not claimed as worker output. Repository confinement is supported by the worker and harness inventories; the operator's git review is authoritative.

---

## 9. Final state

- **Designer:** tab 0 `FX_Orders` is open, clean (Save and Undo disabled), User scope (footer `ScopeType: User`), with **30 components** and FX_ItmsPictureStatic absent. Last verified by a worker in T5 (`snapshot-t5-06`, `snapshot-t5-08`, `t5-03`). Not re-read in T6 or T7 or T8. FX_ItmsPictureEdit: Type Static; binding `object.FX_ItmsPicture`; Size `37.05; 9`; Location `21.55; 23.75`; No Colon True; Image and Text ImageOnly; Caption `C(FX_ItmsPictureStatic)`. No dialog open.
- **Runtime:** FX_Orders closed once in T6; no prompt; no unsaved record.
- **Web Client:** returned to the pre-existing **IDO Properties** form (Filter in Place, blank), which was not touched by this experiment. Tab 1 was the current tab at the end of T6.
- **Persistence:** same-session only. No database-durability or replay claim.

---

## 10. Recommendation and genuine acceptance gaps

**Recommendation to the coordinator: ACCEPTED AS OBSERVED.** The evidence supports AC-1 through AC-5 at the observed, same-session UI level, with AC-5 passing at the visual level per the coordinator's disposition.

**Genuine unresolved gaps (not closed by this report):**
1. Server-side or database persistence of the Save (AC-4): not verified.
2. Byte-level picture identity (AC-5): not established; visual match only.
3. EXP-063-R2 `t7-04` reopen capture showing the shiba on the eggs row: unresolved; belongs to EXP-063-R2.
4. Designer canvas rendering of the picture: not captured.
5. Dangling Caption expression `C(FX_ItmsPictureStatic)`: left unchanged; its effect on the stored Form is not established.
6. Unexpanded AC-1 property groups and Form-level properties: not read.
7. Origin of the pre-populated Select Form filter: not established.
8. Web Client console counter: not inspected.

No experiment, replay or browser operation has been started or performed by this worker in T8.

---

## 11. Documentation changes

- `evidence/EXP-084/T8-final-acceptance-report.md` (created; this report).
- `experiments/EXP-084-hello-world-part-5-section-6b-fx-orders-picture-display.md` (edited: status header and a T8 section).
