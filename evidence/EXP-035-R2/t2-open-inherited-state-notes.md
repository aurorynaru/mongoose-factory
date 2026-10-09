# EXP-035-R2 — T2 notes: browser preflight, one initial Open, inherited dialog state

Run R-20261009-212412-Gcw7, cycle 2, task T2. worker_session_id 4adf1fa1-a207-43c1-8181-7b7a84722071. task_message_id 6f44081b-eb22-4706-b9ad-1bcdc6c2fd96.
T1 (repository-only review) is complete and not repeated here. T2 is the first browser task.

## §A Preflight (read-only; no Select Form action)

Actions: `browser_tabs` list (1 call); fresh untargeted `browser_snapshot` (1 call, ref source for this task); `browser_find "Select Form"` (none); `browser_find` regex for sign-in / configuration / tenant / log-out / unsaved / changes text (none); viewport screenshot `t2-01-preflight-webclient-viewport.png`.

| Gate | Result | Basis |
|---|---|---|
| Exactly one browser tab | **PASS (observed)** | `browser_tabs` lists one entry: `Mongoose` (current). |
| Web Client visibly loaded and usable | **PASS (observed)** | Snapshot and `t2-01` show identity button `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, DEM badge, menu bar (Explorer, Form, Edit, View, Window, Help), toolbar, Explorer tree (My Folders, Master Explorer, Public Folders, User Folders). |
| No sign-in or configuration screen | **PASS (observed)** | No sign-in/tenant/configuration text found; the iframe shows the Web Client, not a sign-in dialog. |
| Select Form initially closed | **PASS (observed)** | `find "Select Form"` = no matches before the Open; no dialog node in the snapshot. |
| No browser-native dialog | **PASS (observed, limited)** | None appears in the snapshot or viewport. Native dialogs outside the captured viewport cannot be ruled out by this inspection. |
| No visible unsaved-change indicator | **PASS (observed, limited)** | Save is disabled (`[disabled]`, greyed in `t2-01`). No unsaved text found. |
| Login completed | **OPERATOR-ATTESTED** | The worker did not perform or observe the login; the Web Client is rendered with a user identity. |
| Configuration selected/OK | **OPERATOR-ATTESTED** | Not observable beyond the Web Client rendering. |
| No unsaved Designer changes elsewhere | **OPERATOR-ATTESTED, NOT VERIFIABLE** | Only one browser tab exists, so no Designer tab is visible. |

Portal-level note: the portal's own tab strip inside the page shows two tabs, `System Administrator` and `Mongoose` (the latter selected). These are portal tabs inside the single browser tab, not browser tabs. Not interacted with.

Inherited Designer/Web Client context (read-only observation): no Form panel is selected (main region empty); no Designer tab exists; the Web Client toolbar shows a `Designer` button pair (`f1e36`, `f1e39`) that is present in the rendered toolbar. Their meaning was not investigated and they were not activated.

Console at preflight: `0 errors, 2 warnings`. Warnings not inspected (no console read was requested beyond the page summary).

Preflight verdict: **all visibly checkable gates PASS**; operator attestations recorded as such. Proceeded to the one permitted Open.

## §B One ordinary initial Open (1/1 consumed)

- Single `browser_click` on the rendered toolbar `Open` control, ref `f1e23` from the preflight snapshot of this task. Returned without error. Playwright wrapper: `getByLabel('Open')` in the Web Client iframe (tool-generated, not authored by the worker).
- Postcondition (read-only `browser_find "Select Form"`): one match, `dialog "Select Form" [ref=f1e78]` with `textbox [active] [ref=f1e401]`.
- No retry. No second Open. No reopen.

## §C Inherited dialog state (captured WITHOUT any change)

Source: fresh untargeted snapshot saved as `t2-02-dialog-open-inherited-snapshot.md` (taken after the Open; current refs) and screenshot `t2-03-dialog-open-inherited-viewport.png`.

| Item | Observed value | Basis (snapshot line) |
|---|---|---|
| Dialog | `dialog "Select Form" [ref=f1e78]`, open in the Web Client iframe | snapshot line 113 |
| Name-filter textbox | `textbox [active] [ref=f1e401]`, **no value line → EMPTY**, focused | snapshot line 337 |
| Filter By | `combobox [ref=f1e407]: Caption` — **NOT Name** | snapshot line 340 |
| Case Sensitive | `checkbox "Case Sensitive" [ref=f1e411]`, no `[checked]` marker → **unchecked** | snapshot line 343 |
| Starts With | `checkbox "Starts With" [ref=f1e416]`, no `[checked]` marker → **unchecked** | snapshot line 346 |
| Visible rows | **43 rows** in the dialog grid (one `rowgroup`/`row` per table; each row has two gridcells). First row `XML to IDO Wizard / WSFormWizardNewDataXmlToIdo`; full unfiltered list, Caption sorted ascending (↓) | snapshot lines 119–335 |
| Row selection | First row shows the grid's default highlight in `t2-03`; no row was clicked or activated | screenshot |
| Buttons | OK `f1e420`, Cancel `f1e422`, Help `f1e424`: present, unpressed; `Close Window` `f1e80` present | snapshot lines 114, 349–351 |

Row-count correction (recorded, not silent): the EXP-035 record and `t7-final-acceptance-audit.md` §D give **47** rendered rows for the same inherited state. Counting the dialog grid's own tables in the saved snapshot gives **43**. The difference is the four Explorer-tree tables (`f1e52`, `f1e58`, `f1e64`, `f1e70`) that sit outside the dialog and were included in the earlier count. The dialog-only count of 43 agrees with EXP-033-R4 T2 (43 rows). This correction is for EXP-035-R2's own record; EXP-035 is not edited.

Screenshot `t2-03-dialog-open-inherited-viewport.png` (inspected as image):
- PROVES: the dialog is open over the Web Client; identity bar and DEM badge visible; Filter field empty with focus border; Filter By `Caption`; both checkboxes empty; populated list headed `XML to IDO Wizard`; buttons unpressed.
- DOES NOT PROVE: the exact row total (only about 11 rows legible); whether the textbox was empty in any earlier state; anything beyond the rendered frame.

Screenshot `t2-01-preflight-webclient-viewport.png` (inspected as image, before the Open):
- PROVES: one Web Client page with identity bar, DEM badge, menus, greyed toolbar (Save disabled), Explorer tree, empty main region; no dialog visible.
- DOES NOT PROVE: operator login or configuration steps; Designer state; anything outside the viewport.

## §D Settlement and focus

- No settle wait was needed for the captured state; the post-Open `find` and snapshot both showed the dialog and the same state.
- The textbox is already `[active]` on dialog open (inherited focus). **No focus click was performed.** Focus is inherited, not established by the worker.

## §E Action audit (T2)

- Initial Open: **1/1 consumed**.
- Tested Cancel 0/1; tested reopen 0/1; final ordinary Cancel 0/1.
- Filter By change 0; Case Sensitive / Starts With toggles 0; textbox focus clicks 0; Ctrl+A / Backspace 0; printable key operations 0; `browser_type`, fill, paste, bulk entry 0.
- Enter / OK 0; result-row interaction / activation 0; Form/component action 0.
- Authentication, reauthentication, log-out, session replacement 0; navigation 0; tab closure 0; dialog dismissal 0.
- JavaScript / evaluate / run-code authored by the worker: 0. (Wrapper code shown in tool results is tool-generated, not authored by the worker.)
- Unload invocation 0; User Preference change 0; Mongoose artifact change 0.
- Browser calls this task: tabs list ×1; snapshot ×2 (preflight, post-Open); find ×3 (`Select Form` pre-Open, regex pre-Open, `Select Form` post-Open); screenshots ×2; click ×1 (Open).

## §F Recovery allowance (EXP-035-R2, shared across all tasks)

- Fresh untargeted recovery snapshot: **0 used / 1 remaining**. The preflight and post-Open snapshots were planned captures, not recovery, and are not relabelled as recovery.
- Corrected visible inspection: **0 used / 1 remaining**.
- No "Ref ... not found", timeout, stale ref, or ambiguous read occurred in T2.

## §G End state

- Select Form **OPEN** at its inherited state (textbox empty and focused; Filter By `Caption`; both checkboxes unchecked; 43 rows, full list).
- No change to any control. The dialog is intentionally left open for the next task.
- Single browser tab. Web Client usable.
- Next permitted action (not performed here): T3 — establish Filter By=Name via the rendered combobox with read-back; keep checkboxes unchanged; fresh untargeted snapshot before any ref is used; `browser_press_key` only (no `browser_type`) for `Control+a`, `Backspace` and 25 single-character keys. If a focus click times out, stop after one fresh snapshot and report.

## §H Evidence files written in T2

- `evidence/EXP-035-R2/t1-repository-review-notes.md` (T1, unchanged this task)
- `evidence/EXP-035-R2/t2-01-preflight-webclient-viewport.png` (inspected)
- `evidence/EXP-035-R2/t2-02-dialog-open-inherited-snapshot.md` (accessibility snapshot, dialog subtree inspected)
- `evidence/EXP-035-R2/t2-03-dialog-open-inherited-viewport.png` (inspected)
- `evidence/EXP-035-R2/t2-open-inherited-state-notes.md` (this file)

The preflight snapshot (before the Open) was returned inline in the tool result and was not saved to a file; its content is summarized in §A and is not separately evidenced.

Tool-generated files under `evidence/playwright/` (snapshot and console logs written by the MCP tool) are outside the permitted paths. The worker did not author or edit them. They are disclosed here, as predecessor records did.
