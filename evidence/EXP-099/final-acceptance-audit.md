# EXP-099 - Final acceptance and execution audit (T7, documentation only)

Scope: documentation-only review, run R-20261015-194518-J4Um, task T7. **Zero browser calls and zero Mongoose changes in T7.** The Designer, the Images dialog and all images were not touched in this task. The final UI state is therefore the state left by T6 (section 9).

Recommendation status: **not accepted as complete.** AC-3 is not passed. See section 10 for the recommendation, which requires explicit operator approval.

Sources reviewed in T7 (read-only): the experiment record `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` in full; the six controller-generated audits `evidence/EXP-099/harness-audit-T1.md` to `harness-audit-T6.md`; the file inventory of `evidence/EXP-099/` and `evidence/playwright/` (Glob); and two decisive screenshots, `t6-09-fx-eggs-preview-fit.png` and `t5-15-fx-eggs-readback-preview.png`, re-viewed to check the FX_Eggs observations. No other experiment, tutorial section or repository area was opened in T7.

---

## 1. Summary matrix

| Check | Status | Basis (short) |
|---|---|---|
| AC-1 | **Met (observed)** | Gate, Edit menu, library controls, 160-name inventory, no FX_ target present before changes, clean exit. |
| AC-2 | **Met in substance, with deviations** | Three New entries; each file's name and size shown before Upload; one library OK; one Designer Save. Deviations: no name field (names come from file names), an extra New for FX_Dumbbell (one cancelled, authorised), OK response text not captured. |
| AC-3 | **Not passed (incomplete)** | All three names present after reopen. FX_Dumbbell.png and FX_Guitar.png appear visually consistent under Fit; FX_Eggs.png is ambiguous (grey face plus four detached fragments). The brief requires all three subjects to be visibly established. |
| AC-4 | **Met, with notes** | No existing image changed; three uploads only, each to its own FX_ name; no Form saved except the library Save; no runtime action; no unload; no checkout action; no prohibited tool. Notes: the FX_Dumbbell New was used twice; the Save scope is known only from its message. |
| AC-5 | **Complete for T1–T6 audit** | Counts reconciled against the controller audits (section 6). The T4 stale-reference snapshot is recorded as an operator-waived qualification. |

---

## 2. AC-1 - Sources, gate, menu, library, exit

| Element | Observed | Decisive evidence (repo-relative) | Limitation |
|---|---|---|---|
| Sources reviewed | AGENTS.md; hello-world-pt6.md Section 7 (lines 185 to 198); session-expiry recipe; final Outcome sections of EXP-063-R2 (line 413) and EXP-098 (line 761). | Record "Sources reviewed" line; `harness-audit-T1.md` rows 2 to 8. | T1's read of hello-world-pt6.md covered lines 185 to 232. Lines 199 to 232 include the Section 8 heading and text (lines 200 to 216). No action was taken on it. T1 also ran a file-name Grep for "Outcome" across all experiment records (87 names, no contents read). |
| Session usable, no expiry | No "Session Expired" modal, sign-in page or server-event error at any task gate. Re-logins: 0. | `t1-01-designer-gate-start.png`; `t2-01-designer-gate-start.png`; `t3-01-designer-gate-start.png`; `t4-01-inherited-state-gate.png`; `t5-01-designer-gate-start.png`; `t6-01-designer-gate-start.png`. | Same-session observation only. |
| User scope | Status bar and toolbar read `ScopeType: User`. The ScopeName is the operator's login and is not transcribed. | Status bar in the gate captures above. | Visual and snapshot text only. |
| FX_OrdersChart closed clean | Save and Undo disabled before the close. Closed once with its tab close control (snapshot ref e247). No prompt. Tab strip empty afterwards. | `t1-01-designer-gate-start.png` (open, clean); `t1-02-after-close-formordeschart.png` (closed). | The saved state of FX_OrdersChart was not reopened or inspected beyond the toolbar. |
| Edit menu entries | 17 menu items: 5 disabled (Undo, Redo, Copy, Cut, Paste); 12 enabled (Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, Revert Global Object Definition). Image chosen once. | `t1-03-edit-menu-open.png` (the menu snapshot was not saved as a file). | Entries other than Image were not used. |
| Images dialog title and controls | Title "Images"; Close Window (×) in the header; File column; Preview group with Display Option combobox (Actual) and Open button; footer OK, New, Import, Export, Delete, Help. **No Cancel button.** | `t1-04-image-library-opened.png`; `t1-06-image-library-dialog-top.png`. | The brief's "Cancel (or its close control)" wording was applied with the close control. |
| Existing image list | 160 existing entries, all without the FX_ prefix. Read in five overlapping segments. | `image-library-inventory-before-changes.md` (full name table); `t1-07`, `t1-08` to `t1-11` (segments). | Names only; sizes, formats and previews of existing entries were not inspected. |
| No FX_Dumbbell, FX_Eggs or FX_Guitar before changes | Case-insensitive search of all T1 and T2 captures for FX_, dumbbell, eggs and guitar found no target entry. T3 repeated the check before its New. | `harness-audit-T1.md` Grep rows; `t2-04` to `t2-07` scans; `t3-03` to `t3-07` scans. | None. |
| Clean exit | Close Window (×) once. No prompt. Designer: no Form, Save and Undo disabled. | `t1-12-after-library-close-designer-state.png`. | None. |

Verdict: **AC-1 met (observed).**

---

## 3. AC-2 - New entries, uploads, OK, Save

### 3.1 Per-entry evidence

| Entry | New clicks | Fields before filling (exact labels) | Name entered | File chosen (Select File coordinate click) | Name and size shown before Upload | Upload clicks | Stored name in list | Evidence |
|---|---|---|---|---|---|---|---|---|
| FX_Dumbbell | 2 (T2 cancelled; T3 uploaded) | Upload dialog titled "Get image for new.png": "Drop File Here", "or", button "Select File" (inner "Choose File"), "Maximum upload size: 131MB", footer "Upload" (disabled before a file) and "Cancel". **No name field.** | None (no field exists) | `assets\FX_Dumbbell.png` (T3, one coordinate click at 959,548) | "Name: FX_Dumbbell.png (1.31MB)" | 1 (T3) | `FX_Dumbbell.png` | `t2-08`, `t2-09`, `t2-10` (cancelled entry); `t3-08`, `t3-09`, `t3-10`, `t3-11` |
| FX_Eggs | 1 (T4) | Same labels and no name field. | None | `assets\FX_Eggs.png` (T4, one coordinate click) | "Name: FX_Eggs.png (22.69KB)" | 1 (T4) | `FX_Eggs.png` | `t4-04`, `t4-05`, `t4-06`, `t4-07` |
| FX_Guitar | 1 (T4) | Same labels and no name field. | None | `assets\FX_Guitar.png` (T4, one coordinate click) | "Name: FX_Guitar.png (441.16KB)" | 1 (T4) | `FX_Guitar.png` | `t4-08`, `t4-09`, `t4-10` |

Rejections: none. Corrections: none (zero name entries and zero corrections across all tasks). No upload was retried.

Upload sizes: the only displayed size for FX_Dumbbell.png (1.31MB) matches the size shown in EXP-063-R2's Outcome for `dumbbell.png`. The worker did not compare any other sizes, and no size limit was reached (the dialog states 131MB). Byte identity of the FX_-named copies is not verified by the worker. The operator reports they are byte-identical copies from commit `00d2aac`.

### 3.2 Library OK and Designer Save

| Item | Observed | Evidence |
|---|---|---|
| Library OK | Clicked once (T4), after all three entries were listed. **No native response text was captured.** The dialog closed and no message was visible. | `t4-11-library-three-entries-before-ok.png` (before); `t4-12-after-images-ok-designer-state.png` (after). |
| Designer Save | Save was enabled after OK. Clicked once. Response shown: a notification reading **"Save — Global object(s) were saved."** It dismissed itself within about 5 seconds. Save then disabled. Not retried. | `t4-13-after-designer-save-state.png`; `t4-14-final-state-after-t4.png`. |
| Save enabled before OK | The Save button had become enabled after the first upload (T3), before OK. | `t3-13-designer-state-after-upload-before-ok.yml`; `t4-01-inherited-state-gate.png`. |

### 3.3 Deviations from the original brief (recorded for the operator)

1. **Naming method.** The original brief required typing the FX_ name into an image-name field. The New dialog has no name field at any stage. The stored name is the uploaded file name. The operator's 2026-10-15 amendment supplied `assets\FX_Dumbbell.png`, and the T4 instruction supplied `FX_Eggs.png` and `FX_Guitar.png`. This is the amended, filename-derived method. It is not the typed-name method the original brief describes.
2. **Asset files.** The original brief named `assets/dumbbell.png`, `eggs.png` and `guitar.png`. The three uploads used the `FX_`-named copies instead, as the operator's amendments directed. The lowercase originals were not used.
3. **Second New for FX_Dumbbell.** The original brief forbids using New more than once per image. The first New (T2) was cancelled before any name or file was entered. The T3 amendment says the cancelled T2 New does not count against the authorised additional New. The count is therefore two New clicks for FX_Dumbbell, under that authorisation.
4. **OK response text.** The brief asks for the native response to be recorded verbatim. None was visible, so none was recorded.

Verdict: **AC-2 met in substance**, with deviations 1 to 4 for the operator to accept or reject.

---

## 4. AC-3 - Reopened library and previews

### 4.1 Entries

After the Designer Save and the reopen in T5 (and again in T6), the File list shows `FX_Dumbbell.png`, `FX_Eggs.png` and `FX_Guitar.png`, each once, under their exact names including extension. They appear in alphabetical position (between `form-thumbnail.svg` and `Greeting.svg`), not at the end of the list where they had appeared before the Save.

Evidence: `t5-08-library-readback-scan-step-2.yml` (all three rows); `t5-10-library-fx-segment-before-view-clicks.yml`; `t5-11-library-fx-rows-visible-before-view-click.png`; `t6-03-library-fx-segment-before-display-option.yml`; `t6-04-library-fx-entries-listed-before-display-option.png`.

Limitation: the reopen is in the same browser session. Cross-session persistence has not been tested.

### 4.2 Previews

Two display modes were observed: "Actual" (T5, the mode the dialog opened in) and "Fit" (T6, changed by the operator's authorised step).

| Entry | Actual (T5, one view click each) | Fit (T6, one view click each) | Expected subject (EXP-063-R2 Outcome) | Status |
|---|---|---|---|---|
| FX_Dumbbell.png | Blank pane, still blank after a 3 s wait (`t5-12`, `t5-14`). | Whole image inside the pane: a sitting golden-retriever-type puppy, light-gold coat, open mouth, white background (`t6-07`). | Golden retriever puppy | **Visually consistent under Fit.** Not byte identity. Blank under Actual, unexplained. |
| FX_Eggs.png | Grey, dark-eyed face with a tiled "PICMIX" watermark over it, plus one brown fragment below (`t5-15`, re-checked in T7). | Whole image inside the pane: the same grey, dark-eyed head with four separate brown fragments around it (`t6-09`, re-checked in T7). | Small grey-faced figure | **Unresolved.** The grey face matches the description. The detached fragments are not explained, and the watermark shows the asset carries visible third-party-style text (provenance not assessed). |
| FX_Guitar.png | Partial tan-brown picture cropped at the pane edge (`t5-16`). | Whole image inside the pane: a complete sitting tan-and-white dog, front paws down, white background (`t6-11`). | Sitting shiba | **Visually consistent under Fit.** Breed not verified. Cropped under Actual, unexplained. |

Captions: the three new entries read "User version for user …" in the preview. The original entries read "Vendor Default version". The username sits behind a secret placeholder and is not transcribed.

Reading the Actual and Fit observations together: for FX_Eggs, the same parts (the grey face and at least one brown fragment) appear in both modes, which suggests that Actual shows part of the same composite. This is an inference. No image dimensions were read, and no rendering mechanism was tested. The observations are recorded only as what each capture shows.

### 4.3 Verdict

The brief requires all three expected subjects to be visibly established. Two are visually consistent under Fit. FX_Eggs.png is ambiguous. **AC-3 is therefore not passed.** Its status is "incomplete, pending operator disposition", as section 10 sets out. A visual match is not byte identity, and no durability claim is made.

---

## 5. AC-4 - Confinement, prohibited actions, boundaries, waivers

| Requirement | Evidence | Status |
|---|---|---|
| No existing (non-FX_) image overwritten, imported over, exported, renamed or removed | The controller audits show no Import, Export or Delete click and no other rename or removal action in any task (`harness-audit-T1` to `T6`, action rows). The footer Delete button was never clicked. Existing entries were only scanned or view-selected (view clicks on the three FX_ entries and, in T4, once on FX_Dumbbell.png). | **Met.** |
| No non-FX_ name stored | The three names stored are `FX_Dumbbell.png`, `FX_Eggs.png` and `FX_Guitar.png`. Nothing else was added. | **Met.** |
| Only the three authorised assets uploaded, each for its own name | Three file-upload calls (T3 once; T4 twice), with paths `assets\FX_Dumbbell.png`, `assets\FX_Eggs.png` and `assets\FX_Guitar.png` (`harness-audit-T3.md` row 35; `harness-audit-T4.md` rows 19 and 31). No other file was supplied. | **Met.** |
| No Form edited or saved | No Form was open at any Save. FX_OrdersChart was closed clean in T1 and not reopened. The single Designer Save returned "Global object(s) were saved." and reports no Form. The Save scope is known only from that message. | **Met, with a note.** The message does not name the objects saved. |
| No runtime action | No Web Client tab was selected or acted on in T1 to T7. The only tab selection (T1, index 0) selected the Designer. | **Met.** |
| No unload, checkout, FormSync or deployment | None recorded. None of these tools or menu items was used. | **Met.** |
| No direct SQL, browser JavaScript, console or network inspection, refresh or restart | The controller audits show no evaluate, run-code, navigate or console or network tool. Only Read, Grep, Glob, Edit and Write were used outside the browser. Prohibited-tool hits: 0 in every audit. | **Met.** |
| No task-boundary overrun | T1 stopped after the FX_OrdersChart close and library discovery. T2 stopped at the cancelled New. T3 stopped before OK. T4 stopped after the Save and final state, before the readback. T5 stopped after the close, before the audit. T6 stopped after the close and final state, before documentation work. T7 made no browser calls. | **Met.** |
| Re-login | 0 in every task. | **Met.** |
| T4 stale-reference snapshot (`t4-03`) | One scoped snapshot taken with a dialog reference that had changed. It returned one row (`progress-indicator.png`). No action was taken from it. The operator waived this qualification for EXP-099 only, as recorded in T6. | **Recorded as operator-waived.** The waiver is not product evidence and is not treated as evidence here. |
| Other boundary items | The FX_Dumbbell New was used twice (one cancelled), under the T3 amendment. | **Authorised, recorded.** |

Confinement of writes (worker-authored): the worker wrote only `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` and files under `evidence/EXP-099/`. The Playwright tooling wrote the files listed in section 7.2. The harness wrote the six `harness-audit-T*.md` files. Repository confinement is supported by these inventories. The operator's git review is authoritative.

Verdict: **AC-4 met, with the notes above.**

---

## 6. AC-5 - Reconciled browser action audit

### 6.1 Per task, against the controller audits

The controller audits count browser tool calls only, as "actions" (clicks, coordinate clicks, wheel, mouse move, file-upload and tab-select calls) and "reads" (snapshots, screenshots, find, list, wait). Non-browser calls (Read, Grep, Glob, Edit, Write) are excluded.

| Task | Controller actions | Controller reads | Controller total | Worker record total | Match |
|---|---|---|---|---|---|
| T1 | 10 | 18 | 28 | 28 | Yes |
| T2 | 10 | 18 | 28 | 28 | Yes |
| T3 | 12 | 20 | 32 | 32 | Yes |
| T4 | 11 | 29 | 40 | 40 | Yes |
| T5 | 14 | 24 | 38 | 38 | Yes |
| T6 | 11 | 20 | 31 | 31 | Yes |
| **Cumulative** | **68** | **129** | **197** | **197** | **Yes** |

Check: the controller's 68 actions equal 34 ordinary clicks, plus 3 coordinate clicks, plus 22 wheel calls, plus 5 mouse moves, plus 3 file uploads, plus 1 tab select. The 129 reads equal 68 snapshots, plus 50 screenshots, plus 2 finds, plus 3 waits, plus 6 tab lists.

**Discrepancies: none** between the worker records and the controller audits. The only inconsistencies found were wording in the record, now corrected: a count stated as fact that was not tallied (finding 23, now marked as inferred) and a visual judgement described as a "visible match" (now "visually consistent"). Both were corrected in the record in T7.

### 6.2 Cumulative counts by action type

| Action | T1 | T2 | T3 | T4 | T5 | T6 | Total |
|---|---|---|---|---|---|---|---|
| Library openings (Edit > Image) | 1 | 1 | 1 | 0 | 1 | 1 | **5** |
| Library exits, Close Window (×) | 1 | 1 | 0 | 0 | 1 | 1 | **4** |
| Library exits, OK | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Library left open at task end | 0 | 0 | 1 (T3) | 0 | 0 | 0 | closed in T4 by OK |
| New clicks | 0 | 1 (cancelled) | 1 | 2 | 0 | 0 | **4** (FX_Dumbbell 2, FX_Eggs 1, FX_Guitar 1) |
| Name entries | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Name corrections | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Select File coordinate clicks | 0 | 0 | 1 | 2 | 0 | 0 | **3** |
| File uploads (file-upload tool) | 0 | 0 | 1 | 2 | 0 | 0 | **3** |
| Upload or apply clicks (dialog) | 0 | 0 | 1 | 2 | 0 | 0 | **3** |
| Upload-dialog Cancel | 0 | 1 | 0 | 0 | 0 | 0 | **1** |
| Images OK clicks | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| Designer Saves | 0 | 0 | 0 | 1 | 0 | 0 | **1** |
| View-selection clicks | 0 | 0 | 0 | 1 | 3 | 3 | **7** |
| Display Option dropdown openings | 0 | 0 | 0 | 0 | 0 | 1 | **1** |
| Display Option changes | 0 | 0 | 0 | 0 | 0 | 1 | **1** ("Actual" to "Fit") |
| Prompts (browser or Mongoose) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Tool errors | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Re-logins | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Prohibited operations (Import, Export, Delete, rename, removal, Form edit or save beyond the library Save, unload, checkout, FormSync, deployment, JavaScript, navigation, refresh, restart) | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

### 6.3 Prompts, verbatim

- The Designer Save produced a notification, not a prompt: "Save — Global object(s) were saved." (T4, `t4-13`).
- The upload dialog "Get image for new.png" is an in-page dialog, not a prompt. It was closed by its Cancel (T2) or left by Upload (T3, T4).
- The native file chooser opened in each upload and was answered by the file-upload tool, not by any dialog button.
- No "Yes" or "No" prompt was answered in any task.

### 6.4 Qualifications

- **T4 `t4-03`:** recorded above. Operator-waived for EXP-099 only.
- **Native OK response:** not captured. The record states this.
- **Playwright artifacts:** the earlier records listed one console log per tab event in some tasks but not every file. Section 7.2 gives the complete list.

---

## 7. Worker-written and incidental file inventory

### 7.1 Worker-written files (EXP-099 paths)

Experiment record (updated across T1 to T7):
- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md`

Documentation:
- `evidence/EXP-099/image-library-inventory-before-changes.md` (T1, 160-name table)
- `evidence/EXP-099/final-acceptance-audit.md` (T7, this file)

Screenshots (50 PNG in total):
- T1 (7): `t1-01-designer-gate-start.png`, `t1-02-after-close-formordeschart.png`, `t1-03-edit-menu-open.png`, `t1-04-image-library-opened.png`, `t1-06-image-library-dialog-top.png`, `t1-07-image-library-list-scrolled-top.png`, `t1-12-after-library-close-designer-state.png`
- T2 (6): `t2-01-designer-gate-start.png`, `t2-02-edit-menu-open.png`, `t2-08-library-before-first-new.png`, `t2-09-new-image-form-1-before-fill.png`, `t2-10-after-new-cancel-library-state.png`, `t2-11-final-designer-state-blocked.png`
- T3 (6): `t3-01-designer-gate-start.png`, `t3-08-library-before-fx-dumbbell-new.png`, `t3-09-new-image-form-fx-dumbbell-before-select.png`, `t3-10-upload-control-fx-dumbbell-file-chosen.png`, `t3-11-library-after-upload-fx-dumbbell.png`, `t3-12-fx-dumbbell-preview-after-wait.png`
- T4 (13): `t4-01-inherited-state-gate.png`, `t4-02-fx-dumbbell-preview-view-click.png`, `t4-04-library-before-fx-eggs-new.png`, `t4-05-new-image-form-fx-eggs-before-select.png`, `t4-06-upload-control-fx-eggs-file-chosen.png`, `t4-07-library-after-upload-fx-eggs.png`, `t4-08-new-image-form-fx-guitar-before-select.png`, `t4-09-upload-control-fx-guitar-file-chosen.png`, `t4-10-library-after-upload-fx-guitar.png`, `t4-11-library-three-entries-before-ok.png`, `t4-12-after-images-ok-designer-state.png`, `t4-13-after-designer-save-state.png`, `t4-14-final-state-after-t4.png`
- T5 (9): `t5-01-designer-gate-start.png`, `t5-02-library-reopened-initial.png`, `t5-04-library-after-scroll-step-1.png`, `t5-11-library-fx-rows-visible-before-view-click.png`, `t5-12-fx-dumbbell-readback-preview.png`, `t5-14-fx-dumbbell-readback-preview-after-wait.png`, `t5-15-fx-eggs-readback-preview.png`, `t5-16-fx-guitar-readback-preview.png`, `t5-18-final-state-after-readback.png`
- T6 (9): `t6-01-designer-gate-start.png`, `t6-02-library-reopened-initial.png`, `t6-04-library-fx-entries-listed-before-display-option.png`, `t6-05-display-option-dropdown-opened.png`, `t6-06-state-check-after-fit-selected.png`, `t6-07-fx-dumbbell-preview-fit.png`, `t6-09-fx-eggs-preview-fit.png`, `t6-11-fx-guitar-preview-fit.png`, `t6-13-final-state-after-preview-verification.png`

Snapshots (33 YAML in total):
- T1 (5): `t1-05-image-library-snapshot.yml`, `t1-08-image-library-snapshot-scrolled-top.yml`, `t1-09-image-library-scroll-step-1.yml`, `t1-10-image-library-scroll-step-2.yml`, `t1-11-image-library-scroll-step-3.yml`
- T2 (5): `t2-04-library-before-new-scan-top.yml`, `t2-05-library-before-new-scan-step-1.yml`, `t2-06-library-before-new-scan-step-2.yml`, `t2-07-library-before-new-scan-step-3.yml`, `t2-10-after-new-cancel-library-state.yml`
- T3 (8): `t3-02-library-open-before-check.yml`, `t3-03-library-check-scan-top.yml`, `t3-04-library-check-scan-step-1.yml`, `t3-05-library-check-scan-step-2.yml`, `t3-06-library-check-scan-step-3.yml`, `t3-07-library-check-scan-bottom.yml`, `t3-11-library-after-upload-fx-dumbbell.yml`, `t3-13-designer-state-after-upload-before-ok.yml`
- T4 (1): `t4-03-library-after-dumbbell-view-click.yml` (the stale-reference result, section 5)
- T5 (9): `t5-03-library-readback-scan-bottom.yml`, `t5-05-library-readback-scan-after-second-scroll.yml`, `t5-06-library-readback-scan-top.yml`, `t5-07-library-readback-scan-step-1.yml`, `t5-08-library-readback-scan-step-2.yml`, `t5-09-library-readback-scan-step-3.yml`, `t5-10-library-fx-segment-before-view-clicks.yml`, `t5-13-fx-dumbbell-readback-snapshot.yml`, `t5-17-library-before-close-snapshot.yml`
- T6 (5): `t6-03-library-fx-segment-before-display-option.yml`, `t6-06-state-check-after-fit-selected.yml`, `t6-08-snapshot-after-dumbbell-view-before-eggs-click.yml`, `t6-10-snapshot-after-eggs-view-before-guitar-click.yml`, `t6-12-snapshot-before-close.yml`

Totals (worker-written under `evidence/EXP-099/`): 50 PNG, 33 YAML, 2 Markdown (inventory and this audit), plus the experiment record. Note: no `t2-03` file exists (numbering gap, recorded in T2).

### 7.2 Incidental Playwright tool artifacts (outside EXP-099 paths; not worker-authored)

- Console logs (10): `evidence/playwright/console-2026-10-15T11-45-37-432Z.log`, `…11-45-37-433Z.log`, `console-…11-51-18-083Z.log`, `console-…12-03-05-171Z.log`, `…12-03-05-172Z.log`, `console-…12-09-49-793Z.log`, `console-…12-16-34-143Z.log`, `…12-16-34-144Z.log`, `console-…12-25-49-392Z.log`, `…12-25-49-393Z.log`.
- Page snapshots (43): T1 four, T2 five, T3 seven, T4 twelve, T5 seven, T6 eight, all named `evidence/playwright/page-2026-10-15T…Z.yml` and listed in the records by task.
- Not listed in earlier records (listed here): the four second-of-pair console logs (`…11-45-37-433Z`, `…12-03-05-172Z`, `…12-16-34-144Z`, `…12-25-49-393Z`).

### 7.3 Harness-generated audit files (not worker-authored; not modified)

- `evidence/EXP-099/harness-audit-T1.md` to `harness-audit-T6.md` (six controller audits, read in T7).

---

## 8. Scope notes

- The experiment record had a stale "Brief: T1 only" line. It was corrected in T7. The record's findings 1 to 33 are otherwise unchanged except for the wording corrections listed in section 6.1.
- The Designer's top-toolbar Delete button ("Delete Form Definition") was never clicked. In the record its identity remains unverified (finding 5).
- No Regenerate Form action was taken.

---

## 9. Final UI state (as left by T6; not changed in T7)

- Designer scope: User (`ScopeType: User` in the status bar).
- Form open: none.
- Dialog open: none. The Images dialog was closed by its Close Window (×) control in T6.
- Menu open: none.
- Prompt open: none.
- Save: disabled. Undo: disabled.
- Display Option: left at "Fit" (the operator-authorised T6 view setting). Whether this setting persists beyond the dialog or in user preferences was not tested.
- Evidence: `t6-13-final-state-after-preview-verification.png`; `t6-12-snapshot-before-close.yml`.

---

## 10. Unresolved items and operator decisions required

| # | Item | Status | Decision needed |
|---|---|---|---|
| 1 | FX_Eggs.png preview: grey face with four detached fragments (Fit); watermark text visible (Actual) | Unresolved | Accept AC-3 with this recorded as unresolved, or authorise a further read-only check of that entry. Any check that re-uploads is a new mutation and needs its own authorisation. |
| 2 | FX_Dumbbell.png and FX_Guitar.png previews | Visually consistent under Fit; not byte identity | Accept the visual judgement for the learning record. |
| 3 | Naming method: names are file names, not typed FX_ names | Deviation from the original brief | Accept the amended method. |
| 4 | Asset source: `FX_`-named copies used instead of the lowercase originals; byte identity reported by the operator (commit `00d2aac`) and not verified by the worker | Operator-reported | Confirm the copies' provenance for the record. |
| 5 | Second New for FX_Dumbbell (one cancelled, T2) | Authorised by the T3 amendment | Accept. |
| 6 | Native OK response not captured | Limitation | Accept as a limitation. A read-only reopen would not show it. |
| 7 | Designer Save scope: "Global object(s) were saved." does not name objects | Partly unresolved | Confirm this is the expected effect of the library Save. |
| 8 | Visible tiled "PICMIX" watermark on the FX_Eggs image | Observed | Provenance of the assets is for the operator to judge. The worker did not assess it. |
| 9 | Display mode effect on blank or cropped previews (Actual vs Fit) | Hypothesis, not tested | Decide whether it matters for the record. Do not claim a mechanism. |
| 10 | Cross-session persistence of the three entries | Not tested | Would need a separate authorised task. No durability claim is made. |
| 11 | T4 stale-reference snapshot `t4-03` | Operator-waived for EXP-099 only | None, unless the waiver is withdrawn. |

---

## 11. Recommendation (requires explicit operator approval)

- **Not recommended as "accepted" at this time.** AC-3 is incomplete because FX_Eggs.png is ambiguous.
- **If the operator accepts the FX_Eggs.png ambiguity as a recorded limit** (item 1), the coordinator could consider a status of **ACCEPTED WITH LIMITS**. The limits would be: the typed-name step was not possible (item 3); the FX_Dumbbell New was used twice (item 5); the OK response was not captured (item 6); and the Save scope is known only from its message (item 7). This recommendation is for the operator to approve or reject. It is not an acceptance decision.
- **Do not classify EXP-099 as replay_verified.** The work was performed once, in one browser session.

---

## 12. Knowledge states

| Finding | State |
|---|---|
| Edit menu entries (12 enabled, 5 disabled) | observed |
| Images dialog title and controls; no Cancel button; Close Window (×) exit | observed |
| 160 existing entries, none FX_ | observed |
| New dialog "Get image for new.png" with no name field before or after file choice | observed (3 occurrences) |
| Stored name equals the uploaded file name, extension included | observed (3 occurrences) |
| Name and size shown in the upload dialog before Upload | observed (3 occurrences) |
| Library OK gave no visible native message | observed (1 occurrence; response text not captured) |
| Designer Save notification "Save — Global object(s) were saved." | observed (1 occurrence) |
| Save enabled after the first upload and before OK | observed (1 occurrence) |
| Entries present after reopen, alphabetical position | observed (same session) |
| Display Option options: Fit, Fill, Actual | observed (1 occurrence) |
| Fit shows the whole image for all three entries | observed (3 occurrences) |
| FX_Dumbbell.png visually consistent with the golden-retriever puppy under Fit | observed visually; not byte identity |
| FX_Guitar.png visually consistent with the sitting dog under Fit; breed not verified | observed visually; not byte identity |
| FX_Eggs.png matches the grey-faced figure | **unresolved** |
| Blank Dumbbell preview and cropped Guitar preview under Actual are display-mode effects | **unresolved** (hypothesis only) |
| Tiled "PICMIX" watermark on the FX_Eggs image | observed (T5 capture only) |
| Upload method (coordinate click, file-upload tool, dialog Upload) | candidate_procedure (three successful uses within one session; not repeated across sessions) |
| Cross-session persistence; byte identity; replay verification | **not established** (no claim made) |

---

*End of T7 audit. No browser action was taken in T7. The next step is an operator decision on section 10, item 1, before any further EXP-099 work.*
