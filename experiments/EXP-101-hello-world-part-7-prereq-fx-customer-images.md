# EXP-101 - Hello World Part 7 prerequisite: FX_CustomerIcon.png and FX_CustomerSignIn.png in the Image Library

Status: **T1 to T4 complete (2026-10-15). Final audit: `evidence/EXP-101/t4-final-acceptance-audit.md`. Recommendation: not unconditional acceptance. AC-1, AC-3 and AC-4 pass; AC-2 requires operator disposition because no OK response text was observed.**

Earlier tasks:
- T1: gate and read-only absence check (both FX_ images absent).
- T2: both FX_ images added by the EXP-099 method; library OK once; one Designer Save ("Global object(s) were saved.").
- T3: read-only Fit readback in the same session. Both entries listed under their FX_ names; Fit previews visually match the assets; dialog closed with Close Window (x); Designer clean (Save disabled).

Not done: no experiment step remains. The T2 library OK response text was never observed (see AC-2 and the T4 audit).

Runs: R-20261015-221055-KNoh. T1 = cycle 0 (task message 3e61ccce-f4eb-46db-bab1-f7c91c22be1c). T2 = cycle 1 (task message 85b6a485-f4eb-46db-bab1-f7c91c22be1c). T3 = cycle 2 (task message 5c07635d-9eb9-4df3-95d2-74a9bc897191). T4 = cycle 3 (task message a25cd9e1-16f8-4256-a137-57a0ab06aa10, documentation only). Worker session d050b9da-a719-498d-845c-8436de751c27.
Brief commits: 5dfab47 (draft), bb04e42 (approved).

## Purpose

Hello World Part 7 (customer portal) uses the bitmaps `customericon.png` (07:38-07:46) and `customersignin.png` (12:49). The transcript assumes they were imported earlier. Its own note (`docs/mongoose/transcripts/hello-world-pt7.md`, line 320) says their bytes and library presence were not supplied and must not be replaced by guesswork.

Change: two images, `FX_CustomerIcon.png` and `FX_CustomerSignIn.png`, from the byte-identical FX_-named copies in `assets/`, added by the EXP-099 method (T2), then read back with Display Option Fit (T3).

## Sources reviewed (T1)

- `AGENTS.md`: learning mode; the 2026-10-15 scope extension allows FX_-prefixed image-library images from `assets/`.
- `docs/mongoose/transcripts/hello-world-pt7.md`: only the lines that mention the two names (15, 43-44, 77, 172, 226, 296-297, 320, 429, 471). The names are narration only.
- `recipes/session/session-expiry-and-stale-designer.md`: read in full (status observed).
- Outcome sections only:
  - EXP-063-R2 (line 413): the single coordinate click on Select File at the visible button centre opens the native file chooser. A semantic click is intercepted by `div.x-mask`. Upload applies the picture.
  - EXP-099 (line 756): "New" opens "Get image for new.png" with no name field, so the entry takes the uploaded file's name. Save is enabled from the first upload until the Designer Save. Display Option Fit does not dirty the Designer. Actual shows a full-size, top-left image.
  - EXP-100 (line 275): FX_HelloWorld theme changes, one Designer Save, Designer left clean. No image-library content.

## Starting state and gate (T1)

- Tabs listed once before any selection. Two tabs: 0 = Web Designer (selected, succeeded after the list); 1 = the Mongoose app inside the Infor portal (not used).
- Session: no "Session Expired" modal, no sign-in page, no server-event error. No re-login.
- Designer gate: status bar `ScopeType: User`; no Form open; Save and Regenerate Form disabled; no prompt. Evidence: `t1-01-designer-gate.png`.

## Absence check (T1)

- Edit > Image opened once. Scrolled with the mouse wheel only (no clicks). Observed sorted order around the insertion point: `FB_WidListIcon.png`, `fb-banner.png`, `form-thumbnail.svg`, **(empty)**, `FX_Dumbbell.png`, `FX_Eggs.png`, `FX_Guitar.png`, `Greeting.svg`.
- Result: **FX_CustomerIcon.png absent; FX_CustomerSignIn.png absent.** Find `FX_Customer` returned no matches; find `FX_Dumbbell` returned its row.
- Dialog left with Close Window (x) once. No prompt. Evidence: `t1-08-file-list-fx-region-4.png` (decisive), `t1-09-designer-after-close.png`.

## T2: add, library OK, Designer Save

Pre-change state: `t2-01` (User scope, no Form, Save disabled) and `t2-02` (`form-thumbnail.svg` followed by `FX_Dumbbell.png`, no FX_Customer row).

1. Edit > Image opened the Images dialog.
2. Dialog New, first image. Screenshot `t2-03` (empty "Get image for new.png", Select File visible, Upload disabled).
3. One coordinate click at (959, 547) on Select File. One file upload: `C:\AI\mongoose-factory\assets\FX_CustomerIcon.png`.
4. `t2-04`: **"Name: FX_CustomerIcon.png (749.02KB)"**, Upload enabled. Limit shown: "Maximum upload size: 131MB". No error.
5. One Upload click. `t2-05`: FX_CustomerIcon.png listed at the end and selected. Caption "User version for user …" (second line cut off).
6. Dialog New, second image. Screenshot `t2-06` (empty dialog).
7. One coordinate click at (959, 547). One file upload: `C:\AI\mongoose-factory\assets\FX_CustomerSignIn.png`.
8. `t2-07`: **"Name: FX_CustomerSignIn.png (374.92KB)"**, Upload enabled.
9. One Upload click. `t2-08`: FX_CustomerSignIn.png listed after FX_CustomerIcon.png.
10. Library **OK**, once. `t2-09`: the Images dialog closed. **No native response text was visible.** The Designer Save icon appeared enabled.
11. Designer **Save**, once. `t2-10`: toast **"Save / Global object(s) were saved."**. Save greyed afterwards (read-only find: `button "Save" [disabled]`).

Results: two New entries, each uploaded by the EXP-099 method with name and size shown before Upload, each listed under its exact FX_ name. No rejected upload, retry, error or prompt.

## T3: read-only Fit readback (same session)

1. Tab list (1). Untargeted snapshot (1): User scope, no Form, Save disabled, no dialog. Gate screenshot `t3-01`.
2. Edit (ref click) > Image (ref click). The dialog opened at the bottom of the list. `t3-02`.
3. **First find for "FX_Customer" returned no matches.** The File list is virtualised: only rendered rows are in the snapshot. After scrolling the list with the mouse wheel (move, then wheel -2000) to the F region, the rows were visible. `t3-03`: `form-thumbnail.svg`, then **FX_CustomerIcon.png**, **FX_CustomerSignIn.png**, FX_Dumbbell.png, FX_Eggs.png, FX_Guitar.png. So both entries are present and sorted alphabetically after reopen (the open question from T2).
4. A dialog-scoped snapshot gave the current ref for the FX_CustomerIcon.png row (e716). View click (ref). `t3-04`.
   - Display Option was **Actual** when the dialog opened (the default). A `select_option` on the ExtJS combobox failed with a tool error: "Element is not a <select> element" (no state change). Then Open button (ref click) > Fit (ref click). Display Option now reads **Fit**.
5. View click on FX_CustomerSignIn.png (e721). `t3-05`.
6. Close Window (x) (ref e342), once. `t3-06`: dialog closed, no prompt. Read-only find: Save `[disabled]`.

### Readback observations (what is visible)

- **FX_CustomerIcon.png (Fit), `t3-04`:** the selected row is highlighted and the caption reads "User version for user" (the operator's name is masked in tool output; second line cut off). The preview shows a close-up of a white cat with black-grey patches, one eye visible, mouth open, cut-out edges. **Matches the expected close-up white-and-black cat face.** Not established: stored file size (not shown), full caption text, byte identity.
- **FX_CustomerSignIn.png (Fit), `t3-05`:** the selected row is highlighted and the caption reads "User version for user" (second line cut off). The preview shows a ginger/tan cat sitting and facing left, with a hand holding a microphone at the left edge. **Matches the expected ginger cat facing a microphone held by a hand.** Not established: stored file size, full caption text, byte identity.
- No stored size or version caption beyond "User version for user …" is visible. The 749.02KB and 374.92KB sizes are the upload-dialog sizes seen before Upload (T2), not stored sizes.
- No mismatch between the visible content and the assets. Uncertainty: the comparison is visual (operator-assistant view) and cannot rule out a different image of the same subject.

## Evidence (screenshots: what each shows, and what it does not prove)

| File | Shows | Does not show |
| --- | --- | --- |
| `t1-01-designer-gate.png` | Designer blank, no Form, Save greyed, User scope | Server-side state |
| `t1-02-image-library-open.png` | Images dialog open at list end | FX_ rows |
| `t1-03` to `t1-06` | Intermediate scroll positions | Not decisive |
| `t1-07-file-list-fx-region-3.png` | FX_Dumbbell, FX_Eggs, FX_Guitar | Rows above FX_Dumbbell |
| `t1-08-file-list-fx-region-4.png` | `form-thumbnail.svg`, then `FX_Dumbbell.png`; no FX_Customer row. **Decisive for T1 absence.** | Rows outside the window |
| `t1-09-designer-after-close.png` | Dialog closed, no prompt, Save greyed | Later state |
| `t2-01-designer-gate-before-add.png` | Designer before the add: User scope, no Form, Save greyed | Server-side state |
| `t2-02-library-list-before-add.png` | `form-thumbnail.svg` then `FX_Dumbbell.png`; no FX_Customer row. **Decisive for pre-change absence.** | Rows outside the window |
| `t2-03-get-image-dialog-icon-before-select.png` | Empty dialog, Select File visible, Upload disabled | The chosen file |
| `t2-04-upload-dialog-icon-file-chosen.png` | "Name: FX_CustomerIcon.png (749.02KB)", Upload enabled. **Decisive for name and size before Upload.** | Stored content |
| `t2-05-library-list-after-upload-icon.png` | FX_CustomerIcon.png listed last and selected; Actual preview cropped | Full image content |
| `t2-06-get-image-dialog-signin-before-select.png` | Second empty dialog | The chosen file |
| `t2-07-upload-dialog-signin-file-chosen.png` | "Name: FX_CustomerSignIn.png (374.92KB)", Upload enabled. **Decisive for name and size before Upload.** | Stored content |
| `t2-08-library-list-after-upload-signin.png` | Both FX_ entries listed at the end. **Decisive for listing under FX_ names (pre-reopen).** | Full image content |
| `t2-09-after-library-ok.png` | Library dialog closed; Save enabled | The OK response text (none visible) |
| `t2-10-after-designer-save.png` | Toast "Save / Global object(s) were saved."; Save greyed; no Form open. **Decisive for the Save response.** | Persistence beyond this session |
| `t3-01-designer-gate-before-readback.png` | Designer before readback: User scope, no Form, Save greyed | Server-side state |
| `t3-02-image-library-open-readback.png` | Images dialog open at list end, Display Option Actual | The FX_ rows (virtualised list) |
| `t3-03-library-list-fx-region-readback.png` | After reopen, sorted: `form-thumbnail.svg`, FX_CustomerIcon.png, FX_CustomerSignIn.png, FX_Dumbbell.png. **Decisive for the reopened list (AC-3).** | Stored content |
| `t3-04-readback-icon-fit-preview.png` | Display Option Fit; FX_CustomerIcon.png selected; white-and-black cat close-up. **Decisive for the icon preview (AC-3).** | Stored size; full caption |
| `t3-05-readback-signin-fit-preview.png` | Display Option Fit; FX_CustomerSignIn.png selected; ginger cat with microphone and hand. **Decisive for the sign-in preview (AC-3).** | Stored size; full caption |
| `t3-06-final-designer-after-readback.png` | Dialog closed, no prompt, no Form, Save greyed. **Decisive for the final state.** | Later state |

## Browser action audit

### T1 (cycle 0)

| Action | Count |
| --- | --- |
| Tab list / tab select | 1 / 1 (tab 0, succeeded) |
| Image library opens / left with Close Window (x) | 1 / 1 |
| New / Select File coordinate clicks / uploads / Upload clicks / OK / Save | 0 / 0 / 0 / 0 / 0 / 0 |
| Ref clicks (Edit, Image, Close) | 3 |
| Mouse move / mouse wheel | 1 / 6 |
| Snapshots (untargeted / dialog-scoped) | 1 / 1 |
| find | 3 |
| Screenshots | 9 |
| Prompts / errors / re-logins | 0 / 0 / 0 |

### T2 (cycle 1)

| Action | Count |
| --- | --- |
| Tab list / tab select | 1 / 0 |
| Image library opens / left by OK | 1 / 1 |
| New clicks (dialog) | 2 |
| Select File coordinate clicks | 2 |
| File uploads | 2 (`FX_CustomerIcon.png`, `FX_CustomerSignIn.png`) |
| Upload clicks | 2 |
| Library OK | 1 (response text not observed) |
| Designer Saves | 1 ("Global object(s) were saved.") |
| Display Option changes | 0 |
| Ref clicks (Edit, Image, New, Upload, New, Upload, OK, Save) | 8 |
| Mouse move / mouse wheel | 1 / 1 |
| Snapshots (untargeted / dialog-scoped) | 2 / 0 |
| find | 7 |
| Screenshots | 10 |
| Prompts / errors / retries / re-logins | 0 / 0 / 0 / 0 |

### T3 (cycle 2)

| Action | Count |
| --- | --- |
| Tab list / tab select | 1 / 0 |
| Image library opens | 1 |
| Image library left with Close Window (x) | 1 |
| Image library left by OK | 0 |
| New clicks | 0 |
| Select File coordinate clicks | 0 |
| File uploads | 0 |
| Upload clicks | 0 |
| Library OK clicks | 0 |
| Designer Saves | 0 |
| Display Option changes (Actual to Fit) | 1 (via Open button and Fit option) |
| View clicks (FX_CustomerIcon.png, FX_CustomerSignIn.png) | 2 |
| Ref clicks (Edit, Image, view icon, Open, Fit, view sign-in, Close Window) | 7 |
| Coordinate clicks | 0 |
| Mouse move / mouse wheel | 1 / 1 (-2000) |
| Snapshots (untargeted / dialog-scoped) | 1 / 2 |
| find | 8 |
| `select_option` attempts | 1, **tool error**: "Element is not a <select> element" (ExtJS combobox; no state change) |
| Screenshots | 6 (`t3-01` was first viewed in T4; the T3 "all viewed" claim was wrong, see audit D1) |
| Prompts | 0 |
| Errors | 1 (above) |
| Re-logins / session expiries | 0 / 0 |
| Form opened, closed or saved | 0 / 0 / 0 |

### Cumulative T1 + T2 + T3

| Action | Count |
| --- | --- |
| Tab list / tab select | 3 / 1 |
| Image library opens | 3 (T1, T2, T3) |
| Image library left with Close Window (x) | 2 (T1, T3) |
| Image library left by OK | 1 (T2) |
| New clicks | 2 |
| Select File coordinate clicks | 2 |
| File uploads | 2 |
| Upload clicks | 2 |
| Library OK clicks | 1 |
| Designer Saves | 1 |
| Display Option changes | 1 (to Fit, T3) |
| Clicks total | 20 (18 ref, 2 coordinate) |
| Mouse move / mouse wheel | 3 / 8 |
| select_option attempts | 1 (T3; tool error "Element is not a <select> element"; no state change, see audit D7) |
| Snapshots (untargeted / dialog-scoped) | 4 / 3 |
| find | 18 |
| Screenshots | 25 (9 + 10 + 6); all viewed by T4 (`t3-01` viewed in T4) |
| Prompts | 0 |
| Errors | 1 (T3 `select_option` tool error; no state change) |
| Retries (uploads, Save, OK) | 0 |
| Re-logins / session expiries | 0 / 0 |
| Existing images overwritten, imported, exported, renamed or deleted | 0 |
| Unprefixed files uploaded | 0 |
| Forms opened, edited or saved | 0 |
| Unloads, checkout actions, FormSync, deployment, refresh, restart, direct navigation, browser evaluate | 0 |

Notes:
- The "2 errors" count in the page console summary was not inspected (console out of scope).
- Snapshot and console files under `evidence/playwright/` were written by the MCP tool wrapper, not authored by the worker.

## Worker-written-file inventory

- `experiments/EXP-101-hello-world-part-7-prereq-fx-customer-images.md` (created in T1; rewritten in T2 and T3)
- `evidence/EXP-101/t1-01-designer-gate.png` to `t1-09-designer-after-close.png` (9 files)
- `evidence/EXP-101/t2-01-designer-gate-before-add.png` to `t2-10-after-designer-save.png` (10 files)
- `evidence/EXP-101/t3-01-designer-gate-before-readback.png` to `t3-06-final-designer-after-readback.png` (6 files)
- `evidence/EXP-101/t4-final-acceptance-audit.md` (T4, created)

Controller-generated (harness inventory, not worker-written): `evidence/EXP-101/harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`.

Tool-generated (not worker-written): `evidence/playwright/` snapshot and console files from the MCP wrapper.

No other files were written. No Form, image, asset, recipe, AGENTS.md or earlier record was modified.

## Acceptance status (as of T3; final disposition in the T4 section)

- **AC-1: met (T1).** Sources reviewed; session usable; Designer in User scope with no Form open; library opened read-only; both FX_ images absent; dialog closed with Close Window (x); Designer clean. Evidence: `t1-01`, `t1-08`, `t1-09`.
- **AC-2 (as of T3): met, with one gap; T4 classifies it as requiring operator disposition.** Two New entries, each uploaded by the EXP-099 method (name and size shown before Upload: `t2-04`, `t2-07`); both listed under FX_ names (`t2-05`, `t2-08`); no rejected upload; exactly one Designer Save with response "Global object(s) were saved." (`t2-10`). **Gap:** the library OK response text was not observed (`t2-09`). The OK response is recorded as "none observed," not as text.
- **AC-3: observed in the same session; not cross-session.** The library, reopened after the OK and Save, lists `FX_CustomerIcon.png` and `FX_CustomerSignIn.png` under their FX_ names (`t3-03`). Fit previews match the assets visually: icon = white-and-black cat close-up (`t3-04`); sign-in = ginger cat with microphone and hand (`t3-05`). Dialog left with Close Window (x) (`t3-06`); no prompt; Designer clean (Save disabled). Limits: same-session UI reopen (the Designer was not reloaded); visual comparison only; no stored size or full caption visible.
- **AC-4: holds through T3.** No existing image overwritten, imported, exported, renamed or deleted. The only view clicks were on the two FX_ entries; the Display Option change applies to the library preview only. No unprefixed file uploaded. No Form edited or saved. No runtime action. No unload. No checkout action. No task-boundary overrun.
- **AC-5: see the T4 final audit below.**

## Limitations

- Same-session UI evidence only. Nothing here is cross-session, database-level, or replay verification.
- **The library OK response text was never observed** (`t2-09` shows the dialog closed with no message). This is an explicit open limitation.
- The Fit comparison is visual, not byte-level. Stored sizes and the full caption are not visible.
- The first FX_ find in T3 returned no match because the list is virtualised. The entries were verified after scrolling. This is an observation about the search, not a missing entry.
- The `select_option` attempt on the ExtJS Display Option combobox failed (tool error). Display Option was set with Open and Fit instead.

## Open questions

- Byte-level identity of the stored images and their stored sizes (not visible in the UI).
- Persistence across a new session or a database check: not tested.
- The OK response text: not captured.
- The final acceptance audit (AC-5) and any Part 7 Form work are outside this experiment's current scope.

## Final acceptance audit (T4, documentation only)

Full audit: `evidence/EXP-101/t4-final-acceptance-audit.md`. T4 made no browser calls and no Mongoose changes.

- **Counts reconciled** to the three harness audits (`evidence/EXP-101/harness-audit-T1.md`, `-T2.md`, `-T3.md`) and to the wrapper's snapshot files (22 snapshot-bearing actions = 18 ref clicks + 2 coordinate clicks + 2 uploads). Cumulative: 3 library opens; 2 Close Window exits; 1 library OK; 2 New clicks; 2 Select File coordinate clicks; 2 uploads; 2 Upload clicks; 1 Designer Save; 1 Display Option change; 2 view clicks; 0 prompts; 1 tool error (T3 select_option, no state change); 0 re-logins.
- **Discrepancies stated, not resolved silently:** D1 `t3-01` was not viewed in T3 (viewed in T4; the T3 "all viewed" claim is corrected); D2 some clicks used refs from `find` output rather than an in-task snapshot (no outcome effect, self-reported); D3 the harness does not record upload paths (worker transcript and upload-dialog names/sizes confirm the files); D5 one console log is unreferenced.
- **AC-1 pass.** Gate, absence and clean close evidenced by `t1-01`, `t1-08`, `t1-09`.
- **AC-2 requires operator disposition.** Two New entries, the EXP-099 method, exact FX_ names, pre-upload names and sizes (`t2-04`, `t2-07`), listing (`t2-05`, `t2-08`), one OK, one Save (`t2-10`: "Save / Global object(s) were saved."). The OK response text was **not observed** (`t2-09` shows the dialog closed and Save enabled). This is recorded as "no response text observed", not as a response.
- **AC-3 pass, with limits.** Reopened list (`t3-03`), Fit previews matching the assets visually (`t3-04` white-and-black cat close-up; `t3-05` ginger cat with microphone and hand), Close Window (`t3-06`), no prompt, Designer clean. Limits: same session, visual only, no stored size or full caption, no byte identity.
- **AC-4 pass.** Harness prohibited-tool hits 0; no existing image touched; no unprefixed upload; no Form opened, edited or saved; no runtime, unload or checkout action; no task-boundary overrun.
- **Final state:** User scope; no Form open; Save disabled; no dialog open; no prompt pending; tab 0 selected; re-logins 0.
- **Recommendation:** not unconditional. Accept EXP-101 with operator disposition on AC-2. Do not re-run OK or Save to recover the response text (the brief does not allow it).
- **Knowledge state:** all observed; none replay_verified; no cross-session or database durability claimed.

## Outcome (operator, 2026-10-15)

Accepted (observed). The Hello World Part 7 image prerequisite is complete: the image library now holds **FX_CustomerIcon.png and FX_CustomerSignIn.png**, verified after a reopen with Display Option Fit. The operator decided acceptance and waived the deviations below for EXP-101 only.

- Created, for later cleanup (tenant-wide image library, within the AGENTS.md scope extension):
  - `FX_CustomerIcon.png` (749.02KB) and `FX_CustomerSignIn.png` (374.92KB), uploaded from the byte-identical FX_-named copies `assets/FX_Customer*.png` (commit babddde; the originals `customericon.png` and `customersignin.png` were not uploaded).
  - One Designer Save after the library OK: "Save - Global object(s) were saved." No Form was opened, edited or saved.
- **Run R-20261015-221055-KNoh** (4 worker tasks): T1 read-only gate and absence check; T2 both uploads, OK, Save; T3 read-only Fit readback; T4 documentation-only audit. Paused once, for the operator disposition.
- Screenshots viewed by the operator assistant: `t2-10` (Save toast, User scope, no Form open), `t3-04` (FX_CustomerIcon.png: white-and-black cat close-up), `t3-05` (FX_CustomerSignIn.png: ginger cat with microphone and hand); both listed after `form-thumbnail.svg` and before FX_Dumbbell.png.
- Findings (observed), confirming EXP-099:
  1. The EXP-099 method repeated without change: New > "Get image for new.png" > one Select File coordinate click > file upload > name and size shown > Upload; the entry takes the file name.
  2. **The library OK closes the dialog silently**; the Designer Save that follows reports the commit. Operator ruling: this is native behavior, so AC-2 is met.
  3. The File list is virtualised: a find for rows that are not scrolled into view returns no match, so absence checks need a scroll to the right region and a screenshot, not find alone.
  4. Display Option is an ExtJS combobox: `select_option` fails ("Element is not a <select> element", no state change); open its list and click the option instead.
- Counts: image library opens 3 (each left with Close Window x, except the T2 one closed by OK); New clicks 2; Select File coordinate clicks 2; file uploads 2; Upload clicks 2; OK 1; Designer Saves 1; Display Option changes 1 (Fit); existing images touched 0; Import, Export, Delete 0; prompts 0; Yes answers 0; unloads 0; checkout actions 0; re-logins 0; screenshots 25.
- Operator rulings (EXP-101 only): the silent OK accepted; D1 (t3-01 first viewed in T4), D2 (some clicks used refs from find output instead of the latest snapshot; no outcome effect), D3 to D8 (harness capture and counting notes, the non-mutating select_option error, the unreferenced console log) waived.
- Limits: same-session UI evidence only; image identity is visual plus the name and size shown at upload, not a byte comparison of stored content.
- Confinement (git status): only `evidence/EXP-101/` and this record were written by the run.
- Next: Part 7 proper. Create the FX_ customer portal Form in the Web Designer (New Form Definition, category Flex, wizard Basic) on FX_Orders with secondary collection FX_Items, in User scope instead of the tutorial's Site Default; start with read-only discovery of the Flex wizard.
