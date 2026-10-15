# EXP-099 - Hello World Part 6 Section 7: Image Library Discovery and Three FX_ Images (FX_Dumbbell, FX_Eggs, FX_Guitar)

Status: **T6 preview verification done (Display Option set to Fit). FX_Dumbbell.png and FX_Guitar.png now render complete images that appear visually consistent with their expected subjects (not byte identity); FX_Eggs.png is ambiguous. AC-3 is not a full pass. T7 documentation-only final audit written to `evidence/EXP-099/final-acceptance-audit.md`. Designer clean, no prompt open.** Task T1 (gate, FX_OrdersChart close, read-only library discovery) is complete. Task T2 (first New) was cancelled because the New dialog showed no name field. Task T3 (amended checkpoint, operator 2026-10-15) uploaded `assets/FX_Dumbbell.png`; the stored entry is `FX_Dumbbell.png`. T4 then uploaded FX_Eggs.png and FX_Guitar.png, clicked the library OK once, and performed one Designer Save (see the T4 section). T5 reopened the library read-only and verified the three entries (see the T5 section).

Source: `docs/mongoose/transcripts/hello-world-pt6.md` Section 7 (06:44-07:40), adapted to FX_ names. Upload method: Outcome of EXP-063-R2 (coordinate click on Select File, then file-upload tool, then the dialog's Upload button). Brief: each task T1–T7 was issued separately by the coordinator under run R-20261015-194518-J4Um, with the scope amendments recorded in the task sections below.

Sources reviewed for T1: `AGENTS.md`; `hello-world-pt6.md` Section 7 and its transcript lines 185-198 (Section 7, 06:44-07:40); `recipes/session/session-expiry-and-stale-designer.md`; the Outcome (operator) sections of EXP-063-R2 (line 413) and EXP-098 (line 761) only.

## T1 - Gate, FX_OrdersChart close, image library discovery (read-only)

### Gate (AC-1)

- Browser tabs listed before the first select. Tab 0 = Infor Mongoose Designer (`designer/Default.aspx`), tab 1 = Mongoose Web Client (portal URL). Tab 0 selected; a fresh snapshot was taken before any action.
- Session usable. No "Session Expired" modal, no sign-in page, no server-event error on Edit. **Re-logins: 0.**
- Designer scope: the status bar reads `ScopeType: User`. (The ScopeName value is the operator's login; it is visible in the screenshots and is not transcribed here.)
- Before the close, the Designer had one Form tab open, `FX_OrdersChart`. Save and Undo were disabled, so the Form was clean.
- Components seen before the close (observed): `FormCollectionGrid` (Grid, Hidden = True, Size 69; 6, Location 14; 0) and `FX_OrderTotalChart` (Chart, `V(cds_FX_OrderTotalChart)`). This is consistent with the EXP-098 Outcome. Screenshot: `evidence/EXP-099/t1-01-designer-gate-start.png`. It shows the open FX_OrdersChart, the Save/Undo state in the toolbar, and the User scope in the status bar.

### FX_OrdersChart close

- Closed once through its Form-tab control: the close button on the `FX_OrdersChart` tab in the Form tab strip (snapshot ref e247, taken in this task just before the click). The brief names the "Form-tab control"; I read this as the tab's own close control, not the top Form menu.
- No prompt appeared. No save prompt, so no answer was given.
- After the close: the Form tab strip is empty, Save and Undo are disabled, scope is still User, and no dialog is open. Screenshot: `evidence/EXP-099/t1-02-after-close-formordeschart.png`.
- FX_OrdersChart and FX_Orders were not edited or saved.

### Edit menu (read-only, AC-1)

- Opened once from the Designer `Edit` menu button. Screenshot: `evidence/EXP-099/t1-03-edit-menu-open.png`.
- Entries, top to bottom (17 items; the first five are disabled):
  - Undo (disabled), Redo (disabled), separator
  - Copy (disabled), Cut (disabled), Paste (disabled), separator
  - Background Color, Component Class, **Image**, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets, separator
  - Revert Global Object Definition
- The `Image` entry was chosen once.

### Image library (read-only, AC-1)

- Dialog title: **Images**. It opened over the Designer. Screenshots: `t1-04-image-library-opened.png` (viewport) and `t1-06-image-library-dialog-top.png` (dialog).
- Controls and buttons, as observed:
  - Header: "Images" with a **Close Window (×)** icon at the top right. There is **no Cancel button**.
  - Left: a column header "File" and a scrollable list of image names.
  - Right: a "Preview" group with a "Display Option:" combobox (value `Actual`), an "Open" button next to it, and the caption "Vendor Default version" under the preview.
  - Footer: **OK, New, Import, Export, Delete, Help**.
- `Delete` is a removal control. It was not used. Import and Export were not used.
- The highlighted row when the dialog opened was `workspace creation.svg`. No click was made on it. The highlight appears to be the default focus, and the preview shows a generic gear-and-window illustration.
- Existing images: **160 entries, none with the FX_ prefix**. The full list is in `evidence/EXP-099/image-library-inventory-before-changes.md`. It was read by scrolling in five overlapping segments (screenshots `t1-07`, snapshots `t1-05`, `t1-08` to `t1-11`).
- FX_ check: no `FX_Dumbbell`, `FX_Eggs` or `FX_Guitar` entry exists, and none of the 160 names contains `FX_`, `dumbbell`, `eggs` or `guitar` (case-insensitive search of all captures). **Blocker condition not met; T2 may proceed in a later task.**
- How the dialog was left: once, with the Close Window (×) control (snapshot ref e1453, taken in this task). No prompt appeared. Designer after the close: no Form open, Save and Undo disabled, scope User, Edit menu closed, no dialog open. Screenshot: `evidence/EXP-099/t1-12-after-library-close-designer-state.png`.

### Evidence index (T1)

| File | What it shows | What it does not prove |
|---|---|---|
| `t1-01-designer-gate-start.png` | Designer with FX_OrdersChart open; grid Hidden True; chart component; User scope in status bar; Save and Undo disabled | Persistence; anything about the saved state beyond the visible toolbar |
| `t1-02-after-close-formordeschart.png` | Designer after the close: no Form tab open, Save and Undo disabled | Saved state of FX_OrdersChart (not checked; not edited) |
| `t1-03-edit-menu-open.png` | Edit menu entries listed above, including `Image` | Behaviour of entries other than Image |
| `t1-04-image-library-opened.png` | Images dialog open over the Designer | Full list (see t1-05 to t1-11) |
| `t1-06-image-library-dialog-top.png` | Dialog controls: File list, Preview, Display Option, OK/New/Import/Export/Delete/Help | Contents of the list beyond the visible rows |
| `t1-07-image-library-list-scrolled-top.png` | List scrolled to the top: 20x20_settings.png to ... | Rows below the viewport (covered by the snapshots) |
| `t1-05`, `t1-08` to `t1-11` (.yml) | Accessibility names of every row in the five segments | Sizes, formats and previews of the existing entries |
| `t1-12-after-library-close-designer-state.png` | Designer after the dialog was closed: no dialog, no Form tab, Save and Undo disabled | Anything beyond the visible state |

Note: the screenshots and snapshots show the operator's scope name in the status bar. It is not copied into this record.

### T1 browser action audit (T1 only; cumulative totals are in the T2 section)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before the first select |
| Browser tab select | 1 | index 0 (Designer); succeeded |
| Browser snapshot (untargeted) | 4 | gate, after the FX_OrdersChart close, after Edit, after the library close |
| Browser snapshot (scoped to the Images dialog) | 5 | t1-05, t1-08, t1-09, t1-10, t1-11 |
| Browser find | 1 | read-only, used to locate the dialog controls |
| Screenshots | 7 | t1-01, t1-02, t1-03, t1-04, t1-06, t1-07, t1-12 |
| Clicks, total | 4 | see below |
| - FX_OrdersChart tab close | 1 | ref e247; no prompt |
| - Edit menu button | 1 | ref e5 |
| - Edit > Image | 1 | ref e1421 (library opened, left via close) |
| - Images dialog Close Window (×) | 1 | ref e1453; no prompt |
| Mouse move (hover to scroll the list) | 1 | no click |
| Mouse wheel (list scrolling only) | 4 | one up, three down |
| **Total browser calls** | **28** | 10 non-read, 18 read |
| Image library opens (Edit > Image) | 1 | left with Close Window (×) |
| New clicks | 0 | none in T1 |
| Name entries / corrections | 0 / 0 | none in T1 |
| Select File coordinate clicks | 0 | none in T1 |
| File uploads / dialog Upload-apply clicks | 0 / 0 | none in T1 |
| OK clicks (library) | 0 | none in T1 |
| Designer Save | 0 | none; Save stayed disabled throughout |
| Prompts | 0 | none appeared; no Yes/No answer given |
| Errors | 0 | no "Ref not found", no timeouts, no server-event error |
| Re-login | 0 | session stayed valid |
| Unload / checkout / FormSync / deployment / Form save | 0 / 0 / 0 / 0 / 0 | none |
| Delete, Import, Export, Remove on the library | 0 | none |
| Browser evaluate, console, network, direct URL navigation | 0 | none |

Console header on each Designer snapshot read "Console: 2 errors, 0 warnings". It was carried from the page and was not inspected (console inspection is out of scope).

### Worker-written file inventory (T1)

Written by the worker in this task:
- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` (created)
- `evidence/EXP-099/image-library-inventory-before-changes.md` (created)
- `evidence/EXP-099/t1-01-designer-gate-start.png`, `t1-02-after-close-formordeschart.png`, `t1-03-edit-menu-open.png`, `t1-04-image-library-opened.png`, `t1-06-image-library-dialog-top.png`, `t1-07-image-library-list-scrolled-top.png`, `t1-12-after-library-close-designer-state.png` (7 screenshots, saved via the browser tool's filename parameter)
- `evidence/EXP-099/t1-05-image-library-snapshot.yml`, `t1-08-image-library-snapshot-scrolled-top.yml`, `t1-09-image-library-scroll-step-1.yml`, `t1-10-image-library-scroll-step-2.yml`, `t1-11-image-library-scroll-step-3.yml` (5 accessibility snapshots, saved via the filename parameter)

Written automatically by the Playwright browser tooling outside the EXP-099 paths (not written by the worker directly): `evidence/playwright/console-2026-10-15T11-45-37-432Z.log` (reported by the tab tool), and `evidence/playwright/page-2026-10-15T11-45-50-062Z.yml`, `page-2026-10-15T11-45-55-883Z.yml`, `page-2026-10-15T11-46-03-799Z.yml`, `page-2026-10-15T11-47-19-720Z.yml`. Listed for the harness inventory and operator review.

No other files were written. No Form, IDO, SQL object, image or AGENTS.md change was made.

## T2 - Add three FX_ images (blocked at the first New)

Brief for this task: confirm the gate, open Edit > Image, scan the list, then New for FX_Dumbbell, FX_Eggs and FX_Guitar in that order, with OK once and at most one Designer Save. The T1 source reads remain in context; they were not repeated in T2.

### Gate (AC-1 re-check)

- Tabs listed before any action. No tab was selected in T2; the Designer (tab 0) was already the current tab.
- Fresh untargeted snapshot: no Form tab open, Save and Undo disabled, `ScopeType: User`. Screenshot: `evidence/EXP-099/t2-01-designer-gate-start.png`.
- Session usable. No server-event error. **Re-logins: 0.**

### Edit > Image and list scan (read-only)

- Edit menu opened once (`t2-02-edit-menu-open.png`). Entries matched T1. Image was chosen once.
- Dialog title **Images**; footer buttons OK, New, Import, Export, Delete, Help; a Close Window (×) icon; no Cancel button (same as T1).
- Before any New, the list was re-read by scrolling (top, then three steps). Scan files: `t2-04-library-before-new-scan-top.yml`, `t2-05-...-scan-step-1.yml`, `t2-06-...-scan-step-2.yml`, `t2-07-...-scan-step-3.yml`. The last segment, to the bottom of the list, is the snapshot taken when the dialog opened (not saved as a file).
- Result: the same 160 names as T1. **No FX_ entry, and no Dumbbell, Eggs or Guitar entry.** Check across all T2 captures for `FX_`, `dumbbell`, `eggs`, `guitar`: no match in the T2 files.
- Screenshot before any New: `evidence/EXP-099/t2-08-library-before-first-new.png` (dialog with its footer buttons; the list is at a mid-scroll position; the full list is in the scan files).

### New #1 - FX_Dumbbell (stopped before name entry, upload and OK)

- New clicked once (footer New).
- Result: a separate upload dialog opened, titled **"Get image for new.png"**. It is not a name form. Fields and controls, as read from a fresh untargeted snapshot and `evidence/EXP-099/t2-09-new-image-form-1-before-fill.png`:
  - Drop zone with the text "Drop File Here" and "or".
  - Button "Select File" (with an inner "Choose File" button).
  - Text "Maximum upload size: 131MB".
  - Footer: "Upload" (disabled) and "Cancel".
  - Caption listing accepted formats: BMP/DIB/RLE, JPEG, GIF, TIFF, PNG, SVG, All Picture Files, All Files.
- **Editable image-name field: none present** in the accessibility tree or in the screenshot, before any file is chosen. The dialog title carries a file-derived name ("new.png"), so the name appears to come from the file.
- Per the stop rule (name derived from the file, no name field): the entry was cancelled with the upload dialog's Cancel (one click). No file was chosen, no file upload was made, no name was entered, and OK was not clicked.
- After Cancel: a scoped snapshot (`t2-10-after-new-cancel-library-state.yml`) and screenshot (`t2-10-after-new-cancel-library-state.png`) show the Images dialog open, the upload dialog gone, New focused, and no prompt.
- The Images dialog was then left with its Close Window (×) control (one click, no OK). Final Designer state: `evidence/EXP-099/t2-11-final-designer-state-blocked.png` shows no dialog, no menu, no Form open, Save and Undo disabled, `ScopeType: User`.
- FX_Eggs and FX_Guitar were **not** started. No New was clicked for them.

### Blocker (AC-2)

- The New dialog offers no editable image-name field before a file is chosen. The FX_ prefix therefore cannot be set on this path, and the brief requires a stop before any upload or OK in that case.
- **Not established:** whether a name field appears after a file is chosen. The upload stage was not entered, because the brief orders the name check before it and the stop rule applies at that check.
- No mutation took effect in T2: no image was added, no upload was made, OK and Save were not used. The Designer is clean.

### Open question for the operator

- How should the FX_ name be applied from the New dialog? Options: (a) a ruling to choose a file and check whether a name field appears after the file is chosen (this is the upload stage, which needs a ruling because it sits after the name check); (b) another route, which would need a new brief. Import is **not** suggested: the brief excludes it because it can overwrite an existing entry.

### T2 browser action audit (T2 only)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before any action in T2 |
| Browser tab select | 0 | none in T2 |
| Browser snapshot (untargeted) | 6 | gate; after Edit; full after Edit; after Image; after New; final (depth 4). Two of these were depth-limited |
| Browser snapshot (scoped to the Images dialog) | 5 | scan top, scan steps 1-3, after Cancel |
| Browser find | 0 | none in T2 |
| Screenshots | 6 | t2-01, t2-02, t2-08, t2-09, t2-10, t2-11 |
| Clicks, total | 5 | Edit; Edit > Image; New; upload-dialog Cancel; Images Close Window (×) |
| Mouse move (hover to scroll) | 1 | no click |
| Mouse wheel (list scrolling only) | 4 | one up (-5000), three down (+1000) |
| **Total browser calls** | **28** | 1 tab list, 11 snapshots, 6 screenshots, 5 clicks, 1 move, 4 wheel |
| Image library opens (Edit > Image) | 1 | left with Close Window (×) |
| New clicks | 1 | FX_Dumbbell only; entry cancelled |
| Name entries / corrections | 0 / 0 | none (no name field present) |
| Select File coordinate clicks | 0 | none |
| File-upload tool calls | 0 | none |
| Upload/apply clicks (dialog) | 0 | none |
| Upload-dialog Cancel clicks | 1 | the FX_Dumbbell entry |
| Images OK clicks | 0 | none |
| Designer Saves | 0 | none; Save stayed disabled |
| Prompts | 0 | no browser or Mongoose prompt appeared. The upload dialog was an in-page dialog, closed by its own Cancel |
| Errors | 0 | no "Ref not found", no timeout, no server-event error |
| Re-login | 0 | session stayed valid |
| Edit menu opens | 1 | |
| FX_OrdersChart close | 0 | none in T2 (closed in T1) |

### Cumulative browser action audit (T1 + T2)

| Action | T1 | T2 | Total |
|---|---|---|---|
| Browser calls | 28 | 28 | **56** |
| Tab list / tab select | 1 / 1 | 1 / 0 | 2 / 1 |
| Snapshots (untargeted / scoped) | 4 / 5 | 6 / 5 | 10 / 10 (20 total) |
| Find | 1 | 0 | 1 |
| Screenshots | 7 | 6 | 13 |
| Clicks | 4 | 5 | 9 |
| Mouse move / wheel | 1 / 4 | 1 / 4 | 2 / 8 |
| Image library opens | 1 | 1 | **2** (both closed with ×) |
| New clicks | 0 | 1 | **1** (cancelled) |
| Name entries / corrections | 0 / 0 | 0 / 0 | 0 / 0 |
| Select File coordinate clicks | 0 | 0 | **0** |
| File uploads | 0 | 0 | **0** |
| Upload/apply clicks | 0 | 0 | **0** |
| Upload-dialog Cancel clicks | 0 | 1 | 1 |
| Images OK clicks | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | **0** |
| Edit menu opens | 1 | 1 | 2 |
| FX_OrdersChart close | 1 | 0 | 1 |
| Prompts / errors / re-logins | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| Unload / checkout / FormSync / deployment / Form save | 0 | 0 | 0 |
| Delete, Import, Export, Remove on the library | 0 | 0 | 0 (footer Delete not clicked) |
| Browser evaluate, console, network, direct URL | 0 | 0 | 0 |

### Worker-written file inventory (T2)

- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` (updated)
- `evidence/EXP-099/t2-01-designer-gate-start.png`, `t2-02-edit-menu-open.png`, `t2-08-library-before-first-new.png`, `t2-09-new-image-form-1-before-fill.png`, `t2-10-after-new-cancel-library-state.png`, `t2-11-final-designer-state-blocked.png` (6 screenshots)
- `evidence/EXP-099/t2-04-library-before-new-scan-top.yml`, `t2-05-library-before-new-scan-step-1.yml`, `t2-06-library-before-new-scan-step-2.yml`, `t2-07-library-before-new-scan-step-3.yml`, `t2-10-after-new-cancel-library-state.yml` (5 snapshots)
- No `t2-03` file was written (numbering gap; that capture was not saved).
- Tool artifacts written by the Playwright tooling outside the EXP-099 paths (not written by the worker): `evidence/playwright/console-2026-10-15T11-51-18-083Z.log`; `evidence/playwright/page-2026-10-15T11-51-22-873Z.yml`, `page-2026-10-15T11-51-34-885Z.yml`, `page-2026-10-15T11-52-31-516Z.yml`, `page-2026-10-15T11-52-53-690Z.yml`, `page-2026-10-15T11-53-05-118Z.yml`.
- `evidence/EXP-099/harness-audit-T1.md` exists in the evidence directory. The worker did **not** write it and did not modify it; it was only searched (read-only grep). Listed for the harness inventory.
- No other files were written by the worker in T2.

## T3 - FX_Dumbbell upload checkpoint (amended brief; stopped before OK, Images dialog left open)

Operator amendment for this checkpoint: upload `assets/FX_Dumbbell.png` only (not `dumbbell.png`, not FX_Eggs or FX_Guitar); one New; no OK, no Designer Save, no Cancel or Close Window on the Images dialog; the dialog is left open. The amendment makes the stored name the subject of the check (step 5), so this run did not stop at the T2 "no name field" rule. The interpretation is recorded here so the operator can overrule it.

### Gate (AC-1 re-check)

- Tabs listed once before any action; no tab selected (tab 0 Designer was already current). Fresh untargeted snapshot: no Form open, Save and Undo disabled, `ScopeType: User`. Screenshot: `t3-01-designer-gate-start.png`.
- Read-only check of the assets folder (Glob, not a browser call): `assets\FX_Dumbbell.png` exists. `assets\FX_Eggs.png` and `assets\FX_Guitar.png` also exist; neither was used. The original `dumbbell.png`, `eggs.png` and `guitar.png` were not used.

### Edit > Image and FX_Dumbbell presence check (before mutation)

- Edit opened once (ref e5); Image chosen once (ref e310). Dialog title **Images**; footer OK, New, Import, Export, Delete, Help; Close Window (×); no Cancel.
- The File list was read in full before the New: top segment (`t3-03`), four scroll steps (`t3-04`, `t3-05`, `t3-06`, `t3-07`). All 160 existing names, as in T1 and T2. **No FX_Dumbbell and no FX_Dumbbell.png entry existed.** A search of all five captures for `dumbbell`, `FX_`, `eggs` and `guitar` matched nothing. Screenshot before the New: `t3-08-library-before-fx-dumbbell-new.png`.

### New (once) and the upload dialog

- New clicked once (ref e584). The upload dialog "Get image for new.png" opened (title from the default name, not updated by the file choice). Fields and controls, exact labels: drop zone "Drop File Here" with "or"; button "Select File" (inner "Choose File"); "Maximum upload size: 131MB"; footer "Upload" (disabled before a file was chosen) and "Cancel". **No editable name field.** Screenshot: `t3-09-new-image-form-fx-dumbbell-before-select.png`.
- Select File: one coordinate click at (959, 548), the centre of the visible Select File button. This opened the native file chooser.
- File-upload tool: one call, `C:\AI\mongoose-factory\assets\FX_Dumbbell.png`.
- Verified before applying (fresh snapshot and screenshot): the control displays **"Name: FX_Dumbbell.png (1.31MB)"** and Upload becomes enabled. Screenshot: `t3-10-upload-control-fx-dumbbell-file-chosen.png`. The 1.31MB figure matches the EXP-063-R2 display for dumbbell.png, but the file is the FX_-named copy.
- Upload clicked once (ref e1410). No error, no size-limit message, no rejection. The upload dialog closed. No correction was needed or made.

### Result in the Images dialog (observed)

- A new File-list entry **`FX_Dumbbell.png`** appears at the bottom of the list and is highlighted. Snapshot: `t3-11-library-after-upload-fx-dumbbell.yml`; screenshot: `t3-11-library-after-upload-fx-dumbbell.png`.
- The stored name is the uploaded file name, extension included. It carries the FX_ prefix, so the step 5 STOP does not apply. The name was not edited and no rename was attempted.
- The preview caption changed from "Vendor Default version" (existing entries) to "User version for user …" (the username is hidden behind a secret placeholder and is not recorded here). The caption's second line is clipped at the dialog edge.
- **Preview identity: unresolved.** Screenshot `t3-12-fx-dumbbell-preview-after-wait.png` (taken after a 2-second wait) shows the Preview pane **with no image visible**. The snapshot has no image element in the preview. Before the upload, the same area showed a picture for the other entries. Whether the preview is still loading, not rendered, or missing is not known. No match with the golden retriever puppy is asserted. The entry was not clicked: it is already selected by the upload, and the brief allowed no further view click.
- File size: the File list has no size column. The only size shown is 1.31MB in the upload dialog, before the upload was applied.
- **Designer after the upload:** the Save button is **enabled** (fresh depth-4 snapshot `t3-13-designer-state-after-upload-before-ok.yml`, ref e1418). Undo stays disabled. Save was **not** clicked. The Designer now holds an unsaved change created by the authorised upload.

### Stop state (T3)

- Stopped before OK, as the brief requires. Not clicked: OK, Designer Save, New, Cancel, Close Window, Import, Export, Delete.
- Final state: Images dialog open and active; no upload dialog; no menu; no Mongoose or browser prompt; no Form open; `ScopeType: User`; Save enabled (unsaved); Undo disabled. The Images dialog was left open by the operator's amendment, and the unsaved Save state is an expected consequence of the upload. The next task must inspect this state read-only before any action.

### T3 browser action audit (T3 only)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before any action |
| Browser tab select | 0 | none |
| Browser snapshot, untargeted | 5 | gate; after Edit; after New; after the file was chosen; depth-4 after upload |
| Browser snapshot, scoped to the Images dialog | 7 | `t3-02`, `t3-03` to `t3-07` (scan), `t3-11` |
| Browser find | 0 | none |
| Screenshots | 6 | `t3-01`, `t3-08`, `t3-09`, `t3-10`, `t3-11` (.png), `t3-12` |
| Ordinary clicks | 4 | Edit (e5); Image (e310); New (e584); Upload (e1410) |
| Select File coordinate click | 1 | (959, 548) |
| Mouse move | 1 | to (760, 470), list scrolling only |
| Mouse wheel | 5 | one up (-5000), four down (+1000) |
| File-upload tool | 1 | `assets\FX_Dumbbell.png` |
| Wait | 1 | 2 seconds, read-only |
| **Total browser calls** | **32** | 1 list, 5 + 7 snapshots, 6 screenshots, 5 clicks, 1 move, 5 wheel, 1 upload, 1 wait |
| Image library opens (Edit > Image) | 1 | left **open** (operator amendment) |
| New clicks | 1 | FX_Dumbbell (the authorised New) |
| Name entries / corrections | 0 / 0 | none; the name came from the file |
| Select File coordinate clicks | 1 | |
| File uploads | 1 | `FX_Dumbbell.png` |
| Upload/apply clicks | 1 | |
| Images OK clicks | 0 | |
| Designer Saves | 0 | Save is enabled and was not clicked |
| Prompts | 0 | the native file chooser opened once and was answered by the upload tool; no Mongoose or browser prompt |
| Errors | 0 | no upload rejection, no "Ref not found", no timeout, no server-event error |
| Re-logins | 0 | |

### Cumulative browser action audit (T1 + T2 + T3)

| Action | T1 | T2 | T3 | Total |
|---|---|---|---|---|
| Browser calls | 28 | 28 | 32 | **88** |
| Tab list / select | 1 / 1 | 1 / 0 | 1 / 0 | 3 / 1 |
| Snapshots, untargeted / scoped | 4 / 5 | 6 / 5 | 5 / 7 | 15 / 17 |
| Find | 1 | 0 | 0 | 1 |
| Screenshots | 7 | 6 | 6 | 19 |
| Ordinary clicks | 4 | 5 | 4 | 13 |
| Select File coordinate clicks | 0 | 0 | 1 | **1** |
| Mouse move / wheel | 1 / 4 | 1 / 4 | 1 / 5 | 3 / 13 |
| File uploads | 0 | 0 | 1 | **1** |
| Wait | 0 | 0 | 1 | 1 |
| Image library opens | 1 (closed ×) | 1 (closed ×) | 1 (left open) | **3** |
| New clicks | 0 | 1 (cancelled, no name field) | 1 (uploaded) | **2** |
| Name entries / corrections | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Upload/apply clicks | 0 | 0 | 1 | **1** |
| Upload-dialog Cancel clicks | 0 | 1 | 0 | 1 |
| Images OK clicks | 0 | 0 | 0 | **0** |
| Designer Saves | 0 | 0 | 0 | **0** |
| Prompts | 0 | 0 | 0 | 0 |
| Errors / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Unload / checkout / FormSync / deployment / Form save | 0 | 0 | 0 | 0 |
| Delete, Import, Export, Remove on the library | 0 | 0 | 0 | 0 |
| Browser evaluate, console, network, direct URL | 0 | 0 | 0 | 0 |

Reconciliation: the T1+T2 baseline was 56 calls. T3 adds 32, for a cumulative 88 (56 + 32). The per-action totals in the table sum to 88.

### Worker-written file inventory (T3)

- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` (updated)
- Screenshots (6): `evidence/EXP-099/t3-01-designer-gate-start.png`, `t3-08-library-before-fx-dumbbell-new.png`, `t3-09-new-image-form-fx-dumbbell-before-select.png`, `t3-10-upload-control-fx-dumbbell-file-chosen.png`, `t3-11-library-after-upload-fx-dumbbell.png`, `t3-12-fx-dumbbell-preview-after-wait.png`
- Snapshots (8): `evidence/EXP-099/t3-02-library-open-before-check.yml`, `t3-03-library-check-scan-top.yml`, `t3-04-library-check-scan-step-1.yml`, `t3-05-library-check-scan-step-2.yml`, `t3-06-library-check-scan-step-3.yml`, `t3-07-library-check-scan-bottom.yml`, `t3-11-library-after-upload-fx-dumbbell.yml`, `t3-13-designer-state-after-upload-before-ok.yml`
- Tool artifacts outside the EXP-099 paths, written by the Playwright tooling (not by the worker): `evidence/playwright/console-2026-10-15T12-03-05-171Z.log`; `page-2026-10-15T12-03-13-181Z.yml`, `page-2026-10-15T12-03-19-916Z.yml`, `page-2026-10-15T12-04-17-368Z.yml`, `page-2026-10-15T12-04-30-944Z.yml`, `page-2026-10-15T12-04-35-175Z.yml`, `page-2026-10-15T12-04-47-361Z.yml`, `page-2026-10-15T12-05-01-479Z.yml`.
- Not written by the worker and not modified: `evidence/EXP-099/harness-audit-T1.md` (present from the harness; read-only search only). The original asset files were read only as names (Glob), not modified.
- No other file was written. No t3-14 or later file exists.

## T4 - FX_Eggs and FX_Guitar uploads, library OK, one Designer Save (readback not run)

Brief (T4, operator checkpoint): inspect the inherited state read-only; at most one view click on FX_Dumbbell.png; New once for `FX_Eggs.png`, then New once for `FX_Guitar.png`, each with the proven file-selection method; OK once; one Designer Save if enabled; final state. The readback is T5.

### Inherited state (read-only, T4 step 1)

- Tab list (1), then a fresh untargeted snapshot. Matches the T3 checkpoint: the Images dialog is active; File list ends with `FX_Dumbbell.png` (ref e510); **Save enabled** (no `disabled` attribute); Undo disabled; no Form open; no upload dialog; no prompt; status bar `ScopeType: User`. Screenshot: `t4-01-inherited-state-gate.png`.
- A scoped snapshot taken with the old dialog ref (`t4-03`) returned only one row because the ref had changed. No action was taken from it; an untargeted snapshot followed.

### FX_Dumbbell.png preview (one view click, T4 step 2)

- One view click on the `FX_Dumbbell.png` entry (ref e510). Screenshot `t4-02-fx-dumbbell-preview-view-click.png`: the Preview pane still shows **no image** (only the caption "User version for user …"). **Unresolved.** No upload was retried and no match is claimed.

### FX_Eggs.png (New #2)

- Library before New: `t4-04-library-before-fx-eggs-new.png`.
- New clicked once (ref e531). Upload dialog title **"Get image for new.png"**. Fields, exact labels: drop zone "Drop File Here" with "or"; button "Select File" (inner "Choose File"); "Maximum upload size: 131MB"; footer "Upload" (disabled before a file was chosen) and "Cancel". **No editable name field.** Screenshot: `t4-05-new-image-form-fx-eggs-before-select.png`.
- Select File: one coordinate click at (959, 548) (the visible button centre). The native file chooser opened.
- File-upload tool, once: `C:\AI\mongoose-factory\assets\FX_Eggs.png`.
- Verified before applying (fresh snapshot and screenshot): **"Name: FX_Eggs.png (22.69KB)"**, Upload enabled. Screenshot: `t4-06-upload-control-fx-eggs-file-chosen.png`.
- Upload clicked once (ref e557). No error, no size-limit message, no rejection; the upload dialog closed. No correction.
- Result: the Images File list shows the new entry **`FX_Eggs.png`**. Screenshot `t4-07-library-after-upload-fx-eggs.png`: with the entry selected, the Preview pane shows an image of a grey, dark-eyed face with a faint tiled watermark, and a small thumbnail below it (not identified). This is **visually consistent** with the EXP-063-R2 description of eggs ("small grey-faced figure"). It is not a byte-level comparison and is not the readback.

### FX_Guitar.png (New #3)

- New clicked once (ref e531, from the latest snapshot). Same upload dialog and labels as FX_Eggs ("Get image for new.png"; "Drop File Here"; "Select File"; "Maximum upload size: 131MB"; "Upload" disabled; "Cancel"); no name field. Screenshot: `t4-08-new-image-form-fx-guitar-before-select.png`.
- Select File: one coordinate click at (959, 548).
- File-upload tool, once: `C:\AI\mongoose-factory\assets\FX_Guitar.png`.
- Verified before applying: **"Name: FX_Guitar.png (441.16KB)"**, Upload enabled. Screenshot: `t4-09-upload-control-fx-guitar-file-chosen.png`.
- Upload clicked once (ref e581). No error, no rejection; the dialog closed. No correction.
- Result: the File list shows **`FX_Guitar.png`**. Screenshots `t4-10-library-after-upload-fx-guitar.png` and `t4-11-library-three-entries-before-ok.png`: with the entry selected, the Preview pane shows a **partial tan-brown picture cropped at the right edge** of the pane. Whether it is the sitting shiba is **unresolved** (the picture is only partly visible).

### Three entries before OK (T4 step 5)

- Full snapshot after the third upload lists, at the bottom of the File list: `FX_Dumbbell.png` (ref e510), `FX_Eggs.png` (ref e562), `FX_Guitar.png` (ref e586). All three carry the FX_ prefix; no unprefixed entry; nothing renamed.
- Screenshot `t4-11-library-three-entries-before-ok.png` shows `FX_Dumbbell.png`, `FX_Eggs.png` and `FX_Guitar.png` in the list.

### Images OK (once, T4 step 6)

- OK clicked once (ref e529) from the latest full snapshot.
- **Native response:** no message is visible. The Images dialog closed; the snapshot shows no dialog. Save stayed enabled and Undo stayed disabled. Screenshot: `t4-12-after-images-ok-designer-state.png`.

### Designer Save (once, T4 step 6)

- Save enabled after OK, so exactly one Designer Save was performed (ref e16). Save not retried.
- **Response:** a Designer notification reading **"Save — Global object(s) were saved."** (with a Close control). It dismissed itself within about 5 seconds (a later `find` for the text returned no match). I did not click its Close control.
- After the Save: Save disabled, Undo disabled. Screenshot: `t4-13-after-designer-save-state.png`.

### Final state (T4 step 7)

- Fresh untargeted snapshot and screenshot `t4-14-final-state-after-t4.png`: no dialog, no menu, no Form open, no prompt; Save disabled; Undo disabled; `ScopeType: User`.
- The Images dialog was closed by its OK, not by Cancel or Close Window. The library was not reopened (the readback is T5).

### T4 browser action audit (T4 only)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before any action |
| Browser tab select | 0 | none |
| Browser snapshot, untargeted | 12 | inherited state; before New #2; after New #2; after Eggs file chosen; after Eggs upload; after New #3; after Guitar file chosen; after Guitar upload (depth 3 and full); after OK; after Save; final (depth 4) |
| Browser snapshot, scoped | 1 | `t4-03`, stale dialog ref; returned one row only; no action taken |
| Browser find | 1 | text "Global object(s) were saved", read-only; no match after the notification dismissed |
| Wait | 1 | 5 seconds, read-only |
| Screenshots | 13 | `t4-01`, `t4-02`, `t4-04` to `t4-14` |
| Ordinary clicks | 7 | view click e510 (1); New e531 (2); Upload e557 and e581 (2); OK e529 (1); Designer Save e16 (1) |
| Select File coordinate clicks | 2 | (959, 548) for Eggs and Guitar |
| File-upload tool calls | 2 | `assets\FX_Eggs.png`; `assets\FX_Guitar.png` |
| Mouse move / wheel | 0 / 0 | none |
| **Total browser calls** | **40** | 1 tab list, 13 snapshots, 13 screenshots, 1 find, 1 wait, 9 clicks (7 ordinary + 2 coordinate), 2 file uploads |
| Image library opens | 0 | the dialog was left open from T3 |
| New clicks | 2 | FX_Eggs and FX_Guitar, one each |
| Name entries / corrections | 0 / 0 | no name field exists; the stored name is the file name |
| Upload/apply clicks | 2 | Eggs and Guitar |
| Images OK clicks | 1 | response: no visible message; dialog closed |
| Designer Saves | 1 | response "Save — Global object(s) were saved." |
| Prompts | 0 | none. The native file chooser was answered by the file-upload tool, as in T3 |
| Errors | 0 tool errors | the stale-ref scoped snapshot returned partial output but changed nothing |
| Re-logins | 0 | |

### Cumulative browser action audit (T1 + T2 + T3 + T4)

| Action | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| Browser calls | 28 | 28 | 32 | 40 | **128** (88 + 40) |
| Image library opens | 1 | 1 | 1 | 0 | **3** |
| How each library session ended | Close Window (×) | Close Window (×) | left open | OK | ×: 2; OK: 1 |
| New clicks | 0 | 1 (FX_Dumbbell, cancelled, no name field) | 1 (FX_Dumbbell, uploaded) | 2 (FX_Eggs, FX_Guitar) | **4** (FX_Dumbbell 2, FX_Eggs 1, FX_Guitar 1) |
| Name entries / corrections | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Select File coordinate clicks | 0 | 0 | 1 | 2 | **3** |
| File uploads | 0 | 0 | 1 | 2 | **3** (`FX_Dumbbell.png`, `FX_Eggs.png`, `FX_Guitar.png`) |
| Upload/apply clicks | 0 | 0 | 1 | 2 | **3** |
| Upload-dialog Cancel | 0 | 1 | 0 | 0 | 1 |
| Images OK clicks | 0 | 0 | 0 | 1 | **1** |
| Designer Saves | 0 | 0 | 0 | 1 | **1** |
| Prompts | 0 | 0 | 0 | 0 | **0** |
| Errors / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Unload / checkout / FormSync / deployment / Form save | 0 | 0 | 0 | 0 | **0** |
| Import, Export, Delete, rename, removal of any image | 0 | 0 | 0 | 0 | **0** |
| Browser evaluate, console, network, direct URL | 0 | 0 | 0 | 0 | **0** |

Reconciliation: the T1–T3 baseline was 88 calls (28 + 28 + 32). T4 adds 40, for a cumulative **128**. The per-action columns sum to the same total.

### Worker-written file inventory (T4)

- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` (updated)
- Screenshots (13): `evidence/EXP-099/t4-01-inherited-state-gate.png`, `t4-02-fx-dumbbell-preview-view-click.png`, `t4-04-library-before-fx-eggs-new.png`, `t4-05-new-image-form-fx-eggs-before-select.png`, `t4-06-upload-control-fx-eggs-file-chosen.png`, `t4-07-library-after-upload-fx-eggs.png`, `t4-08-new-image-form-fx-guitar-before-select.png`, `t4-09-upload-control-fx-guitar-file-chosen.png`, `t4-10-library-after-upload-fx-guitar.png`, `t4-11-library-three-entries-before-ok.png`, `t4-12-after-images-ok-designer-state.png`, `t4-13-after-designer-save-state.png`, `t4-14-final-state-after-t4.png`
- Snapshots (1): `evidence/EXP-099/t4-03-library-after-dumbbell-view-click.yml` (stale-ref scoped result; one row only)
- Tool artifacts outside the EXP-099 paths, written by the Playwright tooling (not by the worker): `evidence/playwright/console-2026-10-15T12-09-49-793Z.log`; `page-2026-10-15T12-10-01-020Z.yml`, `page-2026-10-15T12-10-25-456Z.yml`, `page-2026-10-15T12-10-37-403Z.yml`, `page-2026-10-15T12-10-40-612Z.yml`, `page-2026-10-15T12-10-47-842Z.yml`, `page-2026-10-15T12-11-01-423Z.yml`, `page-2026-10-15T12-11-10-846Z.yml`, `page-2026-10-15T12-11-13-899Z.yml`, `page-2026-10-15T12-11-21-046Z.yml`, `page-2026-10-15T12-11-39-060Z.yml`, `page-2026-10-15T12-11-52-202Z.yml`, `page-2026-10-15T12-12-05-131Z.yml`.
- Not written by the worker and not modified: `evidence/EXP-099/harness-audit-T1.md`.
- No other file was written in T4. No file under `assets/` was modified; the three FX_ asset files were read only through the upload tool.

## T5 - Readback after the T4 Designer Save (read-only)

Brief (T5): verify the reopened library lists the three entries; one view click per entry; record the previews; close the dialog once with its Close Window (×) control; no New, Upload, OK or Save.

### Gate (T5 step 1)

- Tab list (1); untargeted snapshot. No Form open; no dialog; Save disabled; Undo disabled; `ScopeType: User`. Screenshot `t5-01-designer-gate-start.png`.

### Reopen (T5 step 2)

- Edit clicked once (ref e5, fresh snapshot); the Edit menu entries were the same as in T1–T4. Image clicked once (ref e310, from the same menu snapshot). The Images dialog reopened with title **Images**; footer buttons OK, New, Import, Export, Delete, Help; Close Window (×) in the header; no Cancel button. The initial view showed the end of the list. Screenshot `t5-02-library-reopened-initial.png`.
- **Reopen counts as one library opening.** The reopened dialog presented the same controls as T1 and T2.

### Locating the three entries (T5 step 3)

- The list is virtualised and scrolled in ordinary steps, with a fresh snapshot at each step (`t5-03` bottom, `t5-05` bottom again, `t5-06` top, `t5-07`, `t5-08`, `t5-09`, `t5-10`). The segments overlap, so the whole list was covered.
- **Result:** the three entries are present, in **alphabetical position**, not appended at the end:
  - `FX_Dumbbell.png` (between `form-thumbnail.svg` and `FX_Eggs.png`)
  - `FX_Eggs.png`
  - `FX_Guitar.png` (between `FX_Eggs.png` and `Greeting.svg`)
- Exact names, capitalisation and extensions: `FX_Dumbbell.png`, `FX_Eggs.png`, `FX_Guitar.png`. Each appears once. No other FX_ or Dumbbell/Eggs/Guitar entry exists.
- **Correction of my own reading during T5:** the first two readback snapshots (`t5-03`, `t5-05`) showed only the end of the list, ending at `workspace creation.svg`. I first read that as the three entries being absent. Continuing the scan showed them in alphabetical position earlier in the list. The T4 captures had shown them at the end because they had been appended before the Save. Recorded here so the reader does not rely on the earlier impression.

### View selections (T5 step 4): one click per entry, fresh refs

- Fresh snapshot before the clicks (`t5-10`): refs `FX_Dumbbell.png` e1461, `FX_Eggs.png` e1466, `FX_Guitar.png` e1471. The rows were confirmed visible in `t5-11`.

**FX_Dumbbell.png (one view click, e1461).**
- `t5-12-fx-dumbbell-readback-preview.png`: the row is selected; the Preview pane shows **no image**; the caption reads "User version for user …" (the username is behind a secret placeholder and is not transcribed).
- A wait of 3 s and a second screenshot (`t5-14-fx-dumbbell-readback-preview-after-wait.png`) still show no image.
- **Preview: blank. Visual identity unresolved.** It does not match, or fail to match, the golden retriever puppy. No second click was made.

**FX_Eggs.png (one view click, e1466).**
- `t5-15-fx-eggs-readback-preview.png`: the Preview pane renders a grey, dark-eyed face with a faint tiled watermark, plus a small thumbnail below it (not identified). The caption reads "User version for user …".
- **Preview: rendered. Visually consistent with the expected "small grey-faced figure".** This is a visual observation, not a byte comparison. It is identical in appearance to the T4 preview of the same entry.

**FX_Guitar.png (one view click, e1471).**
- `t5-16-fx-guitar-readback-preview.png`: the Preview pane renders a **partial tan-brown picture**, cropped at the right and bottom edges of the pane. The caption reads "User version for user …".
- **Preview: partial and cropped. Ambiguous; the sitting shiba is not verifiable from the visible part.** Unresolved. It is identical in appearance to the T4 preview.

### Stored metadata displayed during readback (T5 step 5)

- File names: exactly as above (with extension). No size column in the File list.
- Size: not displayed in the list or the preview during readback. The only sizes recorded are the upload-dialog values from T3 and T4 (1.31MB, 22.69KB, 441.16KB).
- Format: the file extension (`.png`) only. No format line is displayed.
- Caption: the preview caption for each of the three selected entries reads "User version for user …", whereas the pre-existing entries read "Vendor Default version". This is displayed metadata observed in readback, distinct from the upload-dialog file names and sizes.
- No image byte identity is inferred from the visual resemblance above.

### Exit (T5 step 6)

- The dialog was closed once with its **Close Window (×)** control (ref e342, from a fresh depth-2 snapshot `t5-17`). The dialog has no Cancel button.
- **Response:** no prompt. The dialog closed. No OK or Designer Save was used.

### Final state (T5 step 7)

- Untargeted snapshot (depth 4) and screenshot `t5-18-final-state-after-readback.png`: no dialog, no menu, no Form open, no prompt; Save disabled; Undo disabled; `ScopeType: User`. Designer clean.
- No view-selection caused a dirty state.

### T5 browser action audit (T5 only)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before any action |
| Browser tab select | 0 | none |
| Browser snapshot, untargeted | 4 | gate; after Edit; after Image; final (depth 4) |
| Browser snapshot, scoped to the dialog | 9 | `t5-03`, `t5-05` to `t5-10`, `t5-13`, `t5-17`. All with fresh refs taken in T5 |
| Browser find | 0 | none |
| Screenshots | 9 | `t5-01`, `t5-02`, `t5-04`, `t5-11`, `t5-12`, `t5-14`, `t5-15`, `t5-16`, `t5-18` |
| Wait | 1 | 3 s, read-only, before the second FX_Dumbbell.png screenshot |
| Ordinary clicks | 6 | Edit (e5); Image (e310); view FX_Dumbbell.png (e1461); view FX_Eggs.png (e1466); view FX_Guitar.png (e1471); Close Window (e342) |
| View-selection clicks | 3 | one per entry, as required |
| Coordinate clicks | 0 | none |
| Mouse move / wheel | 1 / 7 | list scrolling only |
| **Total browser calls** | **38** | 1 tab list, 13 snapshots, 9 screenshots, 1 wait, 6 clicks, 1 move, 7 wheel. Non-read calls: 6 clicks + 7 wheel + 1 move = 14 |
| Image library openings | 1 | |
| Library exits | 1 | Close Window (×); no prompt |
| New clicks | 0 | |
| Name entries / corrections | 0 / 0 | |
| Select File coordinate clicks | 0 | |
| File uploads | 0 | |
| Upload/apply clicks | 0 | |
| Images OK clicks | 0 | |
| Designer Saves | 0 | |
| Prompts | 0 | none |
| Errors | 0 tool errors | the scans had no error; the scan was longer than a single view |
| Re-logins | 0 | |
| Prohibited operations (Import, Export, Delete, rename, removal, Form edit, runtime action, checkout, unload, JavaScript, refresh, restart) | 0 | |

### Cumulative browser action audit (T1 + T2 + T3 + T4 + T5)

| Action | T1 | T2 | T3 | T4 | T5 | Total |
|---|---|---|---|---|---|---|
| Browser calls | 28 | 28 | 32 | 40 | 38 | **166** (128 + 38) |
| Image library openings | 1 | 1 | 1 | 0 | 1 | **4** |
| How each library session ended | Close Window (×) | Close Window (×) | left open | OK | Close Window (×) | ×: 3; OK: 1 |
| New clicks | 0 | 1 (FX_Dumbbell, cancelled) | 1 (FX_Dumbbell, uploaded) | 2 (FX_Eggs, FX_Guitar) | 0 | **4** |
| Name entries / corrections | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| View-selection clicks | 0 | 0 | 0 | 1 (FX_Dumbbell) | 3 (one each) | **4** |
| Select File coordinate clicks | 0 | 0 | 1 | 2 | 0 | **3** |
| File uploads | 0 | 0 | 1 | 2 | 0 | **3** |
| Upload/apply clicks | 0 | 0 | 1 | 2 | 0 | **3** |
| Upload-dialog Cancel | 0 | 1 | 0 | 0 | 0 | 1 |
| Images OK clicks | 0 | 0 | 0 | 1 | 0 | **1** |
| Designer Saves | 0 | 0 | 0 | 1 | 0 | **1** |
| Prompts | 0 | 0 | 0 | 0 | 0 | **0** |
| Errors / re-logins | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** |
| Unload / checkout / FormSync / deployment / Form save | 0 | 0 | 0 | 0 | 0 | **0** |
| Import, Export, Delete, rename, removal of any image | 0 | 0 | 0 | 0 | 0 | **0** |
| Browser evaluate, console, network, direct URL | 0 | 0 | 0 | 0 | 0 | **0** |

Reconciliation: T1–T4 baseline 128 (28 + 28 + 32 + 40); T5 adds 38; cumulative **166**. The per-task totals in the first row and the per-action rows are consistent with that total.

**Outstanding audit qualification (T4).** T4 recorded one scoped snapshot, `t4-03`, taken with a stale dialog ref. It returned only one row (`progress-indicator.png`). It was counted in the T4 total (40) as a read-only snapshot, and no action was taken from its output. It is not dismissed here; it remains an open qualification on the T4 audit. The T4 total is unchanged by it, and the T4 result did not depend on it, because the untargeted snapshot taken immediately after it supplied all the refs used.

### Worker-written file inventory (T5)

- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` (updated)
- Screenshots (9): `evidence/EXP-099/t5-01-designer-gate-start.png`, `t5-02-library-reopened-initial.png`, `t5-04-library-after-scroll-step-1.png`, `t5-11-library-fx-rows-visible-before-view-click.png`, `t5-12-fx-dumbbell-readback-preview.png`, `t5-14-fx-dumbbell-readback-preview-after-wait.png`, `t5-15-fx-eggs-readback-preview.png`, `t5-16-fx-guitar-readback-preview.png`, `t5-18-final-state-after-readback.png`
- Snapshots (9): `evidence/EXP-099/t5-03-library-readback-scan-bottom.yml`, `t5-05-library-readback-scan-after-second-scroll.yml`, `t5-06-library-readback-scan-top.yml`, `t5-07-library-readback-scan-step-1.yml`, `t5-08-library-readback-scan-step-2.yml`, `t5-09-library-readback-scan-step-3.yml`, `t5-10-library-fx-segment-before-view-clicks.yml`, `t5-13-fx-dumbbell-readback-snapshot.yml`, `t5-17-library-before-close-snapshot.yml`
- Tool artifacts outside the EXP-099 paths, written by the Playwright tooling (not by the worker): `evidence/playwright/console-2026-10-15T12-16-34-143Z.log`; `page-2026-10-15T12-16-39-835Z.yml`, `page-2026-10-15T12-16-47-559Z.yml`, `page-2026-10-15T12-18-43-781Z.yml`, `page-2026-10-15T12-18-56-693Z.yml`, `page-2026-10-15T12-19-04-522Z.yml`, `page-2026-10-15T12-19-13-033Z.yml`, `page-2026-10-15T12-19-28-703Z.yml`.
- Not written by the worker and not modified: `evidence/EXP-099/harness-audit-T1.md`.
- No other file was written in T5. No file under `assets/` was modified.

## Evidence index (T5 decisive captures)

| File | What it shows | What it does not prove |
|---|---|---|
| `t5-01-designer-gate-start.png` | Designer, no Form, Save/Undo disabled, User scope | Anything beyond the visible state |
| `t5-12-fx-dumbbell-readback-preview.png`, `t5-14-…-after-wait.png` | FX_Dumbbell.png selected; Preview blank after view click and 3 s wait | That the stored image is correct or complete |
| `t5-15-fx-eggs-readback-preview.png` | FX_Eggs.png selected; grey-faced figure preview | Byte identity with `assets/eggs.png` or `assets/FX_Eggs.png`; the grey figure is visually consistent only |
| `t5-16-fx-guitar-readback-preview.png` | FX_Guitar.png selected; partial tan-brown picture cropped at the pane edge | That it is the sitting shiba; the full image |
| `t5-11-…-before-view-click.png` | The three entries visible in the list before the view clicks | Anything about the previews |
| `t5-18-final-state-after-readback.png` | Dialog closed; Designer clean | Persistence across sessions |

## T6 - Operator-authorised read-only preview verification (Display Option = Fit)

Brief (T6): gate; reopen Edit > Image once; open the Display Option dropdown once and record every option; choose one fit-type option; check Save/Undo/prompts immediately; one view-selection click per entry with a full-pane screenshot; close with Close Window (×) once; no OK, Save, New, upload or other mutation.

### Gate (T6 step 1)

- Tab list (1); untargeted snapshot. No Form open; no dialog; Save disabled; Undo disabled; `ScopeType: User`. Screenshot `t6-01-designer-gate-start.png`.

### Reopen and list check (T6 step 2)

- Edit clicked once (ref e5); Image clicked once (ref e310). The Images dialog reopened with the same controls as before (title **Images**; footer OK, New, Import, Export, Delete, Help; Close Window (×); no Cancel). Screenshot `t6-02-library-reopened-initial.png`.
- Scrolled to the FX_ segment (scroll up to the top, then down 2000). Scoped snapshot `t6-03`: **FX_Dumbbell.png, FX_Eggs.png and FX_Guitar.png are all still listed**, each once (refs e666, e671, e676 at that time). Screenshot `t6-04-library-fx-entries-listed-before-display-option.png`.

### Display Option dropdown (T6 steps 3–4)

- Display Option combobox showed **"Actual"** before the change (ref e579); its Open button (e580) was clicked once.
- **Exact options listed, in order: "Fit", "Fill", "Actual".** The selected option when opened was "Actual". Screenshot `t6-05-display-option-dropdown-opened.png`; scoped snapshot list (`option` roles "Fit", "Fill", "Actual") is in the untargeted snapshot taken after the click.
- Chosen: **"Fit"** (ref e807, one click). Reason: it displays the whole image while preserving aspect ratio. "Fill" was not chosen; it may crop or distort, and no option was cycled through.

### State check immediately after the change (T6 step 5)

- Untargeted snapshot `t6-06-state-check-after-fit-selected.yml` and screenshot `t6-06-state-check-after-fit-selected.png`: **Save disabled; Undo disabled; no prompt; the dropdown listbox closed; Display Option now "Fit".** No Designer dirty state was produced by the display change. Designer Save was not clicked, and OK was not clicked.

### Preview verification with Fit (T6 steps 6–7): one view click per entry

**FX_Dumbbell.png (one view click, e666).** Screenshot `t6-07-fx-dumbbell-preview-fit.png`.
- The whole image is inside the pane. It shows a **complete golden-retriever-type puppy, sitting, with a light-gold coat and open mouth**, on a white background.
- Compared with the expected "golden retriever puppy": **visually consistent (not byte identity).** The caption "User version for user …" is partly hidden at the bottom edge of the pane.
- Not byte identity. Under Actual in T5 the same entry showed a blank pane. The blank pane may be a display-mode effect (see the hypothesis in Findings 31); not tested further.

**FX_Eggs.png (one view click, e671).** Screenshot `t6-09-fx-eggs-preview-fit.png`.
- The whole image is inside the pane. It shows **a grey-faced head with dark eyes at the centre, and four separate brown fragments around it** (upper-left, upper-right, lower-left and lower-right), on a white background.
- Compared with the expected "small grey-faced figure": **partially consistent, not a clean match.** The grey face is present. The surrounding fragments do not fit a single small figure as seen. Classified **unresolved** rather than matched. The same appearance was recorded under Actual in T4 and T5.

**FX_Guitar.png (one view click, e676).** Screenshot `t6-11-fx-guitar-preview-fit.png`.
- The whole image is inside the pane. It shows **a complete sitting, tan-and-white dog** (orange-brown body, pale chest and muzzle, seated with front paws on the ground), on a white background.
- Compared with the expected "sitting shiba": **visually consistent** on pose and colouring. The shiba breed cannot be confirmed to the standard of an identity check from the image alone.
- Under Actual in T5 the same entry showed only a partial, cropped picture. The difference may reflect the display mode (Findings 31).

No preview was clicked a second time. No option was changed again.

### Exit (T6 step 8)

- Fresh depth-3 scoped snapshot `t6-12-snapshot-before-close.yml` (Close Window ref e342). Close Window (×) clicked **once**.
- **Response: no prompt**, the dialog closed. OK was not used.

### Final state (T6 step 8)

- Untargeted snapshot (depth 4) and screenshot `t6-13-final-state-after-preview-verification.png`: no dialog, no menu, no Form open, no prompt; **Save disabled; Undo disabled; `ScopeType: User`**. Designer clean.

### T6 browser action audit (T6 only)

| Action | Count | Notes |
|---|---|---|
| Browser tab list | 1 | before any action |
| Browser tab select | 0 | none |
| Browser snapshot, untargeted | 6 | gate; after Edit; after Image; after the dropdown Open click; after Fit (`t6-06`); final depth-4 |
| Browser snapshot, scoped to the dialog | 4 | `t6-03`, `t6-08`, `t6-10`, `t6-12` (each with fresh refs) |
| Browser find | 0 | none |
| Screenshots | 9 | `t6-01`, `t6-02`, `t6-04`, `t6-05`, `t6-06`, `t6-07`, `t6-09`, `t6-11`, `t6-13` |
| Wait | 0 | none |
| Ordinary clicks | 5 | Edit (e5); Image (e310); Display Option Open (e580); Fit option (e807); Close Window (e342) |
| View-selection clicks | 3 | FX_Dumbbell.png (e666); FX_Eggs.png (e671); FX_Guitar.png (e676); one each |
| Coordinate clicks | 0 | none |
| Mouse move / wheel | 1 / 2 | list scrolling only |
| **Total browser calls** | **31** | 1 tab list, 10 snapshots, 9 screenshots, 8 clicks (5 ordinary + 3 view), 1 move, 2 wheel |
| Image library openings | 1 | |
| Library exits | 1 | Close Window (×); no prompt |
| Display Option dropdown openings | 1 | |
| Display Option changes | 1 | "Actual" to "Fit" |
| New clicks | 0 | |
| Name entries / corrections | 0 / 0 | |
| Select File coordinate clicks | 0 | |
| File uploads / Upload clicks | 0 / 0 | |
| Images OK clicks | 0 | |
| Designer Saves | 0 | Save stayed disabled throughout |
| Prompts | 0 | none |
| Errors | 0 tool errors | |
| Re-logins | 0 | |
| Prohibited operations (New, Upload, Import, Export, Delete, rename, removal, Form edit, runtime action, checkout, unload, JavaScript, refresh, restart) | 0 | |

### Cumulative browser action audit (T1 – T6)

| Action | T1–T5 | T6 | Total |
|---|---|---|---|
| Browser calls | 166 | 31 | **197** |
| Image library openings | 4 | 1 | **5** |
| Library exits (Close Window ×) | 3 | 1 | **4** |
| Library exits (OK) | 1 | 0 | **1** |
| New clicks | 4 | 0 | **4** |
| Name entries / corrections | 0 / 0 | 0 / 0 | **0 / 0** |
| View-selection clicks | 4 | 3 | **7** |
| Display Option dropdown openings | 0 | 1 | **1** |
| Display Option changes | 0 | 1 | **1** |
| Select File coordinate clicks | 3 | 0 | **3** |
| File uploads / Upload clicks | 3 / 3 | 0 / 0 | **3 / 3** |
| Images OK clicks | 1 | 0 | **1** |
| Designer Saves | 1 | 0 | **1** |
| Prompts | 0 | 0 | **0** |
| Errors / re-logins | 0 / 0 | 0 / 0 | **0 / 0** |
| Prohibited mutations (Import, Export, Delete, rename, removal, Form edit/save, unload, checkout, runtime, JavaScript, refresh, restart) | 0 | 0 | **0** |

Reconciliation: the T1–T5 baseline was 166 (28 + 28 + 32 + 40 + 38). T6 adds 31; cumulative **197**.

**Audit qualifications.**
- **T4 stale-reference snapshot (`t4-03`):** the operator waived this qualification for EXP-099 only. It is recorded here as waived. The waiver is not product evidence, and this record does not treat it as one.
- **Display Option change:** the change is a preview-setting change authorised by the operator. The Designer stayed clean (Save and Undo disabled), so no Designer save was involved. Whether the setting persists in user preferences was not tested.

### Worker-written file inventory (T6)

- `experiments/EXP-099-hello-world-part-6-section-7-fx-image-library.md` (updated)
- Screenshots (9): `evidence/EXP-099/t6-01-designer-gate-start.png`, `t6-02-library-reopened-initial.png`, `t6-04-library-fx-entries-listed-before-display-option.png`, `t6-05-display-option-dropdown-opened.png`, `t6-06-state-check-after-fit-selected.png`, `t6-07-fx-dumbbell-preview-fit.png`, `t6-09-fx-eggs-preview-fit.png`, `t6-11-fx-guitar-preview-fit.png`, `t6-13-final-state-after-preview-verification.png`
- Snapshots (5): `evidence/EXP-099/t6-03-library-fx-segment-before-display-option.yml`, `t6-06-state-check-after-fit-selected.yml`, `t6-08-snapshot-after-dumbbell-view-before-eggs-click.yml`, `t6-10-snapshot-after-eggs-view-before-guitar-click.yml`, `t6-12-snapshot-before-close.yml`
- Tool artifacts outside the EXP-099 paths, written by the Playwright tooling: `evidence/playwright/console-2026-10-15T12-25-49-392Z.log`; `page-2026-10-15T12-25-54-968Z.yml`, `page-2026-10-15T12-26-03-358Z.yml`, `page-2026-10-15T12-26-29-607Z.yml`, `page-2026-10-15T12-26-39-135Z.yml`, `page-2026-10-15T12-26-55-003Z.yml`, `page-2026-10-15T12-27-10-187Z.yml`, `page-2026-10-15T12-27-26-975Z.yml`, `page-2026-10-15T12-27-46-120Z.yml`
- Not written by the worker and not modified: `evidence/EXP-099/harness-audit-T1.md`.
- No other file was written in T6. No file under `assets/` was modified.

### T6 result against AC-3

- **Entries:** all three present under exact names (T6 `t6-03`).
- **FX_Dumbbell.png:** visually consistent with the expected golden-retriever puppy under Fit (`t6-07`); not byte identity.
- **FX_Guitar.png:** visually consistent with the expected sitting shiba-type dog under Fit (`t6-11`); breed not verified; not byte identity.
- **FX_Eggs.png:** grey-faced head present, but with four detached fragments around it (`t6-09`). **Not a clean match; classified unresolved.**
- **AC-3 remains not a full pass**, because the brief requires all three expected subjects to be visibly established. Two of three are, and the third is ambiguous.

## Acceptance status after T6

- **AC-1: met (observed).** Sources reviewed in T1; session usable; Designer in User scope; FX_OrdersChart closed clean (T1, no prompt); Edit menu entries, library title, controls and existing-image list recorded read-only (T1 and the T2 re-scan); no FX_Dumbbell, FX_Eggs or FX_Guitar present; Designer clean. Limit: the Images dialog has no Cancel button; it was left with its Close Window (×) control (T1 and T2), as the brief's "Cancel (or its close control)" allows. Evidence: `t1-01`, `t1-03`, `t1-04`, `t1-06`, `t1-12`, `t2-01`, `t2-02`, `t2-04` to `t2-07`, `t2-11`.
- **AC-2: met in substance, with one deviation (all 3 entries).** For each of FX_Dumbbell.png, FX_Eggs.png and FX_Guitar.png: New clicked once (FX_Dumbbell had one cancelled T2 attempt, not counted against it); the new-image fields were recorded before any action (`t2-09`, `t3-09`, `t4-05`, `t4-08`); the file was chosen by one coordinate click and one file-upload call; the displayed name and size were verified before applying (`t3-10` "FX_Dumbbell.png (1.31MB)", `t4-06` "FX_Eggs.png (22.69KB)", `t4-09` "FX_Guitar.png (441.16KB)"); Upload applied once; no rejection; no correction. The library OK was clicked once (`t4-12`; no visible native message; dialog closed). One Designer Save was performed (`t4-13`; "Global object(s) were saved."). **Deviation:** the dialog has no editable name field, so no FX_ name was typed; each stored name is the file name of the operator-supplied `FX_`-named asset copy. The brief's "enter the FX_ name" step therefore did not occur as written. Upload screenshots exist for all three entries. OK was a single library action, captured before (`t4-11`) and after (`t4-12`); no native OK response text was captured.
- **AC-3: entries verified, previews incomplete (not a full pass).** After reopening (T5), the library lists `FX_Dumbbell.png`, `FX_Eggs.png` and `FX_Guitar.png` under their exact names, each once (`t5-08`, `t5-10`, `t5-11`). Previews, per view click (one per entry): FX_Eggs.png renders a grey, dark-eyed face, visually consistent with the expected "small grey-faced figure" (`t5-15`); **FX_Dumbbell.png renders no image** even after a 3 s wait (`t5-12`, `t5-14`), so it is unresolved; **FX_Guitar.png renders a partial tan-brown picture cropped at the pane edge** (`t5-16`), so the sitting shiba is unresolved. The dialog was left with Close Window (×) (the dialog has no Cancel button), with no prompt; the Designer is clean. Because two of three previews were not verifiable in T5, AC-3 was not reported as passed. T6 (below) changed the Display Option to Fit: FX_Dumbbell.png and FX_Guitar.png now show complete images that appear visually consistent with their expected subjects; FX_Eggs.png shows a grey-faced head with detached fragments, which is not a clean match. AC-3 therefore remains not a full pass.
- **AC-4: met.** No existing image overwritten, exported, renamed or removed (all 160 existing entries were scanned, not selected; the only selection was the view click on FX_Dumbbell.png). Only the three authorised FX_-named assets were uploaded, each once. The stored names carry the FX_ prefix; no non-FX_ name was stored. No Form edited or saved: the Designer Save reported "Global object(s) were saved." and no Form was open. No runtime action. No unload. No checkout action. The footer Delete, Import and Export controls were not used. No task-boundary overrun: T4 stopped after the Save and the final state, before the readback.
- **AC-5:** the T1–T5 sections above and the cumulative audit (166 calls) are the record. The T4 stale-reference snapshot (`t4-03`) is kept as an open audit qualification. The final acceptance audit is not performed in T5 (the brief reserves it).


## Findings (observed only)

Findings 1–15 were recorded in T1–T3; 16–21 in T4; 22–27 in T5; 28–33 in T6.

1. The Designer Edit menu has 17 entries; Image is one of 12 enabled items (Background Color ... Revert Global Object Definition).
2. The Images dialog has no Cancel button. Its exit control is the Close Window (×) icon in the title bar. Its footer has a Delete button, which is a removal control and was not used.
3. The image library holds 160 existing entries (all non-FX_). The list is virtualised: names are only in the accessibility tree while rendered, so the list had to be read in five overlapping segments.
4. The "workspace creation.svg" row is highlighted when the dialog opens (default focus; no click).
5. The Designer top toolbar has a "Delete" control in the New/Copy/Delete group (ref e25). It was not clicked. It is presumed to be the top-toolbar trash control (Delete Form Definition) named in the operator's standing rule; its tooltip was not checked, so this identity is unverified. Do not click it.
6. Before the close, FX_OrdersChart showed `FormCollectionGrid` (Hidden True) and `FX_OrderTotalChart`, matching the EXP-098 Outcome.
7. The New button on the Images dialog opens a separate upload dialog titled "Get image for new.png" rather than a name form. It has a drop zone, a Select File button, "Maximum upload size: 131MB", a disabled Upload button and a Cancel button.
8. Before any file is chosen, that upload dialog shows no editable image-name field. Whether a name field appears after a file is chosen was not tested.
9. The library in T2 holds the same 160 entries as T1. None is FX_.
10. Cancel on the upload dialog returns to the Images dialog with no prompt. Close Window (×) on the Images dialog closed it with no prompt.
11. **Observed (one occurrence):** the stored library name follows the uploaded file name. Uploading `assets\FX_Dumbbell.png` produced the entry `FX_Dumbbell.png`, with the extension kept. The name is not typed in the dialog (no name field), so the FX_ prefix comes from the asset file name.
12. **Observed (one occurrence):** the upload dialog shows the selected file as "Name: FX_Dumbbell.png (1.31MB)" under the drop zone, with Upload enabled. The dialog title stays "Get image for new.png" after the selection.
13. **Observed (one occurrence):** after the upload is applied, the Designer Save button becomes enabled before OK is clicked, and Undo stays disabled. Whether this is the upload or the library's pending change is not known.
14. **Unresolved:** the Preview pane for the new entry showed no image in the screenshot taken 2 seconds after the upload. The caption read "User version for user …". The existing entries show a picture in the same pane. The cause (loading, not rendered, or missing) was not tested.
15. **Observed:** the File list has no size column. Size appears only in the upload dialog, before the upload is applied.
16. **Observed (T4, two occurrences):** the upload dialog shows "Name: <file> (<size>)" for FX_Eggs.png (22.69KB) and FX_Guitar.png (441.16KB). The stored list name equals the file name, with the extension.
17. **Observed (T4, three occurrences):** the New dialog title stays "Get image for new.png" after a file is chosen, and the dialog has no name field at any stage.
18. **Observed (T4, one occurrence):** the library OK produced no visible native message; the dialog closed.
19. **Observed (T4, one occurrence):** the Designer Save produced a notification "Save — Global object(s) were saved." that dismissed itself within about 5 seconds; Save was then disabled.
20. **Preview observations (T4), not readback:** FX_Dumbbell.png preview blank after a view click (`t4-02`, unresolved). FX_Eggs.png shows a grey, dark-eyed face with a tiled watermark and a small thumbnail (`t4-07`, visually consistent with EXP-063-R2's eggs description; not byte-verified). FX_Guitar.png shows a partial tan-brown picture cropped at the pane edge (`t4-10`, `t4-11`, unresolved against the sitting shiba).
21. **Observed (T4):** Save was enabled after the first upload and stayed enabled through the uploads and OK, then was disabled after the one Designer Save. The change was therefore pending from the first upload until the Save.
22. **Observed (T5, one reopen):** after the reopen, the three FX_ entries are shown in **alphabetical position** among the FB_/fb_/Greeting entries (`FX_Dumbbell.png` after `form-thumbnail.svg`; `FX_Guitar.png` before `Greeting.svg`). In T4, before the Save, the same entries had been appended at the end of the list. The list order therefore differs between the pre-Save state and the reopened state.
23. **Observed (T5, scan; total not counted):** on reopen each of the three FX_ entries appears once, and no name appeared twice across the segments read. The total of 163 entries (160 original plus three) is inferred, not tallied.
24. **Observed (T5):** the preview caption for the three FX_ entries reads "User version for user …", not "Vendor Default version" as on the original entries.
25. **Unresolved (T5):** FX_Dumbbell.png renders no preview after a view click and a 3 s wait. Whether this is a rendering problem, a missing image body, or a metadata-only entry was not tested. No second click was made.
26. **Unresolved (T5):** FX_Guitar.png renders only a partial tan-brown picture cropped at the pane edge. The cause (crop by the pane, partial render, or image content) was not tested. The sitting shiba is not verifiable from the visible part.
27. **Observed (T5, visual only):** FX_Eggs.png renders a grey, dark-eyed face with a tiled watermark and a small thumbnail, consistent in appearance with the T4 preview. No byte comparison was made.

28. **Observed (T6):** the Display Option dropdown offers exactly three options, in this order: "Fit", "Fill", "Actual". Before T6 it showed "Actual". Changing it to "Fit" left Designer Save and Undo disabled and produced no prompt.
29. **Observed (T6, one occurrence each):** with Display Option "Fit", the whole image fits inside the Preview pane for all three entries. FX_Dumbbell.png shows a complete golden-retriever-type puppy; FX_Guitar.png shows a complete sitting tan-and-white dog.
30. **Unresolved (T6):** FX_Eggs.png under Fit shows a grey-faced head with dark eyes and four separate brown fragments around it. It is not a clean "small grey-faced figure" match. The fragments are unexplained.
31. **Hypothesis, not tested (T6):** the blank FX_Dumbbell.png preview and the cropped FX_Guitar.png preview under Actual (T5) appear to be display-mode effects, because both entries render completely under Fit. The likely cause is that the native size overflows the pane. This was not measured, and no image dimensions were read.
32. **Observed (T6):** the preview caption "User version for user …" sits at the bottom edge of the pane and is partly hidden in Fit. Its full text was not read.
33. **Observed (T6):** no size, format or dimension appears in the Images dialog during the readback. The only sizes recorded are the upload-dialog values from T3 and T4.

## Open questions and blockers

- **Stop point (T5):** the Images dialog is closed (Close Window ×); the Designer is clean (no Form open, no dialog, no menu, no prompt, Save and Undo disabled, User scope).
- **Open items for the operator:**
  1. **Name rule (deviation):** the New dialog has no name field, so the stored names are the file names of the three `FX_`-named asset copies (`assets\FX_Dumbbell.png`, `FX_Eggs.png`, `FX_Guitar.png`). The brief's "enter the FX_ name" step did not occur. Confirm this is acceptable for the learning record.
  2. **Preview identity (AC-3):** FX_Dumbbell.png renders no preview; FX_Guitar.png renders a partial picture; FX_Eggs.png is visually consistent. Neither the Dumbbell nor the Guitar preview is verified against its asset. Decide whether a further check (for example, a different Display Option, which was not permitted in T5) or a rebuild of the preview is needed before AC-3 can be passed.
  3. **Scope of the Save:** the one Designer Save reported "Global object(s) were saved." It did not name a Form. Confirm that this is the expected effect of the library Save.
  4. **T4 audit qualification:** the stale-ref snapshot `t4-03` remains an open qualification (see the T5 audit).
- **T6 update:** open item 2 above is superseded by the T6 section. FX_Dumbbell.png and FX_Guitar.png are visibly matched under Fit; FX_Eggs.png is ambiguous (finding 30). The decision needed is whether AC-3 is accepted with FX_Eggs.png recorded as unresolved, or whether a further read-only check of that entry is authorised.
- Not established: whether the three entries persist across a session change or a later reopen in a new session. T5 is a same-session readback; no cross-session durability or replay verification is claimed.

## Next step (T7 audit written; operator ruling still required)

T7 wrote `evidence/EXP-099/final-acceptance-audit.md` with no browser calls. The audit does not mark AC-3 passed. The operator's ruling is still required. Before it, the operator should decide the FX_Eggs.png question (finding 30): accept AC-3 with FX_Eggs.png recorded as unresolved, or authorise a further read-only check of that entry. Any check that uses a new mutation (for example, re-uploading the Eggs asset) is outside this experiment's current brief and needs a new authorisation.

## Outcome (operator, 2026-10-15)

Accepted (observed). Hello World Part 6 section 7 is complete: the image library now holds **FX_Dumbbell.png, FX_Eggs.png and FX_Guitar.png**, verified after a reopen against the asset files. The operator decided acceptance, amended the file names, and waived the deviations below for EXP-099 only.

- Created, for later cleanup (tenant-wide image library, authorized by the operator and added to the AGENTS.md scope extension on 2026-10-15, commit 81a86e2):
  - `FX_Dumbbell.png` (1.31MB), `FX_Eggs.png` (22.69KB), `FX_Guitar.png` (441.16KB), uploaded from the byte-identical FX_-named copies `assets/FX_*.png` (commit 00d2aac; originals in 704f7af). Preview caption "User version for user ..." (existing entries read "Vendor Default version").
  - One Designer Save after the library OK: "Save - Global object(s) were saved." No Form was edited or saved; FX_OrdersChart was closed clean first.
- **Run R-20261015-194518-J4Um** (7 worker tasks): T1 read-only discovery; T2 stopped at the name gate; T3 checkpoint upload of FX_Dumbbell.png; T4 FX_Eggs and FX_Guitar, OK, Save; T5 readback; T6 Fit-preview check; T7 documentation-only audit. Paused four times for operator rulings.
- Screenshots viewed by the operator assistant: `t5-14` (FX_Dumbbell blank at Display Option Actual), `t5-16` (FX_Guitar cropped at Actual), and the T6 Fit previews `t6-07` (golden retriever puppy), `t6-09` (grey face, side and bottom fragments; compared directly with `assets/FX_Eggs.png`, same layout and PICMIX watermark) and `t6-11` (sitting shiba).
- Findings (observed):
  1. **Image library:** Designer Edit menu > Image opens the "Images" dialog: a File list (160 existing entries, all named by file with extension, none FX_), a Preview group with Display Option (Fit, Fill, Actual; default Actual) and footer OK, New, Import, Export, Delete, Help; a Close Window (x) and no Cancel. The Edit menu also lists Background Color, Component Class, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets and Revert Global Object Definition.
  2. **New has no name field:** it opens "Get image for new.png" (Drop File Here / Select File, max 131MB, Upload / Cancel). **The entry takes the uploaded file's name**, so the FX_ prefix must be in the file name.
  3. Upload by the EXP-063-R2 method worked for all three (one Select File coordinate click, one file upload, name and size shown, Upload).
  4. Save is enabled from the first upload until the Designer Save; new entries are appended at the end of the list until saved, then sorted alphabetically after the reopen.
  5. **Display Option Actual** shows the image top-left at full pixel size, so large images look blank or cropped; **Fit** shows the whole image. Changing it did not dirty the Designer.
- Counts: image library opens 5 (T1, T2, T3, T5, T6; four left with Close Window x, the T3 one closed by the T4 OK); New clicks 4 (one cancelled at the T2 gate); Select File coordinate clicks 3; file uploads 3; Upload clicks 3; OK 1; Designer Saves 1; Display Option changes 1 (Fit); FX_OrdersChart closed 1 (no prompt); existing images touched 0; Import, Export, Delete 0; Yes answers 0; unloads 0; checkout actions 0; re-logins 0.
- Operator rulings (EXP-099 only): FX_-named asset copies as the upload files with a checkpoint after the first upload; one extra New for FX_Dumbbell after the cancelled one; one read-only Fit-preview task; the T4 stale-ref snapshot, the T1 transcript read into Section 8 and the T1 filename-only Grep waived.
- Limits: same-session UI evidence only; image identity is visual (the upload dialog showed the expected names and sizes), not a byte comparison of stored content.
- Confinement (git status): only `evidence/EXP-099/` and this record were written by the run.
- Next: Part 6 section 8 (extend the Hello World theme: Form font Tahoma, Flex Layout class Blue Background #FF5CC6C7, Static classes White Header and Header). The tutorial extends its existing Hello World theme; the factory equivalent is FX_HelloWorld (created in EXP-064, with class FX_BlueButton).
