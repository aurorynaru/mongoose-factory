# EXP-075 — T5 report: AC-7 runtime verification of FX_HelloWorld01 after one Refresh (cycle 4)

Task message `1ec0b4ae-b96d-431d-9737-72d188a67373`; worker session `a6f6b0aa-b122-4731-943a-7a43ff6bf439`.

**Scope:** the runtime FX_HelloWorld01 Form only. One toolbar Refresh. Read-only inspection. No field edit, no Save, no record create or delete, no checkout-state change, no IDOs reopen, no target query, no wizard. Observed only; same session; not database durability; not replay verification.

**Result (AC-7, observed):** After one ordinary toolbar Refresh and settle, the runtime FX_HelloWorld01 Form shows exactly two records: `Factory test one` / `FX001` and `Factory test two` / `FX002`. The status bar reads `(Object 1 of 2)`. The toolbar Save is disabled before and after the Refresh. No dialog appeared. No field was edited and no record was changed.

## Session and tab state (before any action)

- Tab list before any select: tab 0 Web Designer (not touched), tab 1 Mongoose Web Client. Tab 1 selected (succeeded).
- Fresh snapshot: session usable; no Session Expired modal, no sign-in page, no portal banner, no dialog.
- The recovered IDOs Form (T4) was still open as a background Form tab, showing FX_HelloWorld01 checked out (Check In enabled), Revision 2, Save disabled, ten properties. I did not interact with it in T5 and did not re-read it after switching tabs (the brief's preserve condition was satisfied at the start of T5 and no action touched it).

## Runtime Form identity (fresh, before Refresh)

- Form-tab control `FX_HelloWorld01` (heading ref from the fresh snapshot) selected once (view only). The existing runtime instance was used; no new instance was opened.
- Tabpanel `FX_HelloWorld01` (accessibility). Status `(Object 1 of 2)`. Toolbar Save `[disabled]`.
- Records before Refresh (accessibility): row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002`. The detail pane shows record 1 (`Factory test one` / `FX001`).
- Evidence: `t5-01-runtime-pre-refresh-identity-save-disabled.png`.

## Refresh (once)

- The toolbar `Refresh` button was clicked once (ref from the fresh snapshot). Not browser-level refresh. Result: no dialog, no error, no prompt.
- Settled after 3 seconds. Fresh find readback: status `(Object 1 of 2)`; toolbar Save `[disabled]`; exactly two grid rows (`Factory test one` / `FX001`; `Factory test two` / `FX002`); the detail pane shows record 1.
- Evidence: `t5-02-runtime-post-refresh-two-records-save-disabled.png`.

## Record-count and content verification

| Check | Observed | Result |
| --- | --- | --- |
| Status (record count) | `(Object 1 of 2)` | Two records. |
| Grid rows (accessibility) | Row 1 `Factory test one` / `FX001`; row 2 `Factory test two` / `FX002` | Exactly the expected two records; no additional row. |
| Detail pane (record 1) | Factory test one / FX001 | Matches row 1. |
| Save | Disabled before and after the Refresh | No pending change. |
| Dialog | None | — |
| Edits | None (no field typed; no Save; no New; no Delete) | Nothing changed. |

## Limits of the visual check

- The runtime grid is narrow, so the record text in the grid is clipped in screenshots. Only record 1 is fully legible in the detail pane. Record 2's values (`Factory test two` / `FX002`) are confirmed by the accessibility readback of the grid cells, not by a legible screenshot of row 2.
- One read-only horizontal wheel scroll (+300) was made to look for the record text; it revealed a narrow numeric column strip and no additional record text. It was reversed by one wheel action (−300). Evidence `t5-03-runtime-two-records-grid-scrolled-readonly.png` shows the scrolled state, not the restored state; the restored state was confirmed by the accessibility readback. This view-only action is recorded as an audit event.
- Record-count evidence is the status `(Object 1 of 2)` and the grid's two accessibility rows; no database read.

## Screenshots (this task)

| File | Shows | Does not prove |
| --- | --- | --- |
| `t5-01-runtime-pre-refresh-identity-save-disabled.png` | Runtime FX_HelloWorld01 Form before Refresh: tab `FX_HelloWorld01` active; Save greyed; status `(Object 1 of 2)`; row 1 `1 Factc…`, row 2 `2 Factc…` (clipped); detail pane `Factory test one` / `FX001`. Identity bar: operator account and DEM configuration. | Row 2's values legibly (clipped; see accessibility readback). |
| `t5-02-runtime-post-refresh-two-records-save-disabled.png` | Runtime Form after one Refresh: status `(Object 1 of 2)`; Save greyed; two grid rows; detail pane record 1 `Factory test one` / `FX001`. | Record 2's text (clipped). The Refresh's native response (none displayed). |
| `t5-03-runtime-two-records-grid-scrolled-readonly.png` | Grid after a read-only horizontal scroll: two rows with numeric row-number columns (1 and 2) visible; status `(Object 1 of 2)`; Save greyed. | The record names and codes (not in this scroll position; they were confirmed by the accessibility readback afterward). The restored view. |

## Acceptance checks (T5)

| AC | Status (T5) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-7 | **Established (observed, UI level, same session).** One toolbar Refresh; exactly two records FX001 / Factory test one and FX002 / Factory test two; status `(Object 1 of 2)`; Save disabled before and after; no record changed. | `t5-01`, `t5-02`, accessibility readbacks | Record 2 readable from accessibility only (grid clipped in images); no database read; same-session UI only. |
| AC-8 | **Not finalized** (per the brief, the final report is a later step). | — | Pending. |

## Action audit (T5 only; exact counts)

| Action | Count | Notes |
| --- | --- | --- |
| `browser_tabs` list | 1 | Before the first select. |
| `browser_tabs` select | 1 | Index 1 (Web Client). Designer not selected. |
| `browser_snapshot` (untargeted) | 2 | Start snapshot; snapshot after the Form-tab select. |
| `browser_find` (read-only) | 2 | After Refresh (status, rows, Save); after the scroll-back (rows, identity, status, Save). |
| Clicks | 2 | (1) `FX_HelloWorld01` Form-tab heading (view; selects the existing runtime instance); (2) **Refresh ×1** (toolbar). |
| Typed entries | 0 | None. |
| Key presses | 0 | None. |
| Escape presses | **0** | None. |
| Mouse moves | 1 | To the grid for the scroll (370,200). |
| Wheel scrolls | 2 | +300 (view) and −300 (reversed). View only. |
| Waits | 1 | 3 seconds after Refresh. |
| Screenshots | 3 | `t5-01`, `t5-02`, `t5-03`. |
| **Refresh (toolbar)** | **1** | Once; no retry. |
| Save | 0 | Disabled throughout. |
| Field edits / record create or delete | 0 / 0 | None. |
| Check Out / Check In / Undo Check Out | 0 / 0 / 0 | None. |
| New Property wizard / Finish | 0 / 0 | None. |
| IDOs close / reopen (T5) | 0 / 0 | None. |
| Target F4 queries (T5) | 0 | None. |
| Runtime open (new instance) | 0 | The existing instance was used. |
| Strings, classes, SQL, Forms, runtime records (T5) | 0 | None. |
| Designer actions | 0 | None. |
| Unloads / cache / FormSync / deploy / regenerate | 0 | None. |
| Re-login | 0 | Session usable. |
| Worker-authored JavaScript, console or network reads, direct navigation, refresh, restart | 0 | None. (Tool wrappers "Ran Playwright code" contain harness-generated locators only.) |
| Ref-not-found / recovery snapshots / timeouts | 0 / 0 / 0 | None. |
| Dialogs answered | 0 | None appeared. |
| Portal banner dismissals | 0 | None visible. |

### Separate audit events for final reconciliation (as instructed)

1. **T4 Select Form mis-click (not repeated in T5):** in T4 one click intended for the Select Form OK used an unread ref. It opened the Filter By combobox list (value stayed `Name`); the list was closed by selecting its current value; OK was then pressed once. It is counted in the T4 click total (8) and in the cumulative clicks. No data changed. Recorded in `T4-report.md` and the experiment record.
2. **Failed documentation Edit (T4, not a browser action):** in T4 one `Edit` call on the experiment record used an `old_string` that does not exist in the file (`**Earlier status (after T3, 2026-10-13; one Check Out`). The tool returned `String to replace not found in file`; **no change was written by that call**. The same header was then correctly inserted by a follow-up Edit (the status line "after T4", with the prior T3 status retained as "Earlier status (after T3, 2026-10-13; one New Property wizard …)"). A grep on 2026-10-13 confirms the record contains exactly one `Current status (after T4` line, one `## T4 —` section and one `Earlier status (after T3` line; the failed edit left no partial text. Counted as one failed document Edit in T4; not a browser action.

## Cumulative browser action audit (T1 + T2 + T3 + T4 + T5; exact counts against the brief's budgets)

| Action | T1 | T2 | T3 | T4 | T5 | Cumulative | Budget status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Check Out | 0 | 1 | 0 | 0 | 0 | **1** | Used (limit 1). |
| Check In / Undo Check Out | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | **0 / 0** | None (prohibited). |
| New Property wizard | 0 | 0 | 1 | 0 | 0 | **1** | Used (limit 1). |
| Finish | 0 | 0 | 1 | 0 | 0 | **1** | Used (limit 1). |
| Save | 0 | 0 | 0 | 0 | 0 | **0** | Conditional; not needed. |
| IDOs close / reopen pairs | 1 / 1 | 0 / 0 | 0 / 0 | 1 / 1 | 0 / 0 | **2 pairs** | Used (limit 2). |
| Target F4 queries (FX_HelloWorld01) | 1 | 0 | 0 | 1 | 0 | **2** | Used (limit 2). |
| Runtime Refresh | 0 | 0 | 0 | 0 | 1 | **1** | Used (limit 1). |
| Select Form opens / OK / Cancel | 1 / 1 / 0 | 0 | 0 | 1 / 1 / 0 | 0 | 2 / 2 / 0 | — |
| Tab lists / selects | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | 1 / 1 | **5 / 5** | — |
| Clicks | 7 | 3 | 7 | 8 | 2 | **27** | Includes T4 mis-click. |
| Typed entries | 2 | 0 | 1 | 1 | 0 | **4** | — |
| Key presses (Tab, F4) | 3 | 0 | 0 | 2 | 0 | **5** | — |
| Escape presses | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Untargeted snapshots / targeted | 3 / 0 | 1 / 0 | 2 / 0 | 4 / 0 | 2 / 0 | **12 / 0** | — |
| `browser_find` | 3 | 7 | 14 | 5 | 2 | **31** | — |
| Screenshots | 6 | 3 | 6 | 7 | 3 | **25** | — |
| Mouse moves / wheel | 1 / 1 | 2 / 2 | 1 / 1 | 1 / 3 | 1 / 2 | **6 / 9** | — |
| Waits | 1 | 1 | 1 | 1 | 1 | **5** | — |
| Dialogs answered | 1 | 0 | 0 | 1 | 0 | **2** (both Select Form OK) | — |
| IDO / property changes | 0 | 1 (Check Out) | 1 (FX_Address) | 0 | 0 | **2 (Check Out; FX_Address)** | Only FX_Address added. |
| Strings, classes, SQL, Forms, runtime records | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Designer actions | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Unloads / cache / FormSync / deploy / regenerate | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Re-logins | 0 | 0 | 0 | 0 | 0 | **0** | — |
| JavaScript / console / network / direct navigation / refresh / restart | 0 | 0 | 0 | 0 | 0 | **0** | — |
| Failed document Edit (not browser) | 0 | 0 | 0 | 1 | 0 | **1** | See separate audit events. |

## Worker-written-file inventory (T5)

Written by this worker in T5:

- `experiments/EXP-075-hello-world-part-5-prereq-b-fx-address-ido-property.md` (edited: status header; T5 section).
- `evidence/EXP-075/T5-report.md` (created; this report).
- `evidence/EXP-075/t5-01-runtime-pre-refresh-identity-save-disabled.png`
- `evidence/EXP-075/t5-02-runtime-post-refresh-two-records-save-disabled.png`
- `evidence/EXP-075/t5-03-runtime-two-records-grid-scrolled-readonly.png`

Tool-generated, not worker-authored: Playwright MCP snapshot and console files under `evidence\playwright\` written by the harness during T5 (for example `page-2026-10-13T12-09-55-431Z.yml`, `page-2026-10-13T12-10-04-169Z.yml`, `page-2026-10-13T12-10-08-949Z.yml`, `console-2026-10-13T12-09-49-159Z.log`). The worker did not read them as evidence. No other file was written.

## Final browser state (end of T5)

- Mongoose Web Client tab (tab 1) selected; Designer (tab 0) untouched.
- Active: the runtime FX_HelloWorld01 Form (`favoriteContext=FX_HelloWorld01`), status `(Object 1 of 2)`, two records (`Factory test one` / `FX001`; `Factory test two` / `FX002`), **Save disabled**, the grid scroll restored to its prior position (accessibility confirms the two rows). No dialog. No unsaved change. No record edited.
- The recovered IDOs Form (T4) remains open as a background Form tab, clean as of T4 (Save disabled, FX_HelloWorld01 checked out to the operator, ten properties), not acted on in T5.
- FX_HelloWorld01 **remains checked out** to the operator.

## Limits

- Same-session UI verification only; not database durability; not replay verification.
- Record 2's values are confirmed by accessibility readback, not by a legible screenshot (the grid is clipped).
- The Refresh's native response had no displayed text; the Refresh is recorded from the post-settle state.
- The IDOs background tab was not re-read after the tab switch.
