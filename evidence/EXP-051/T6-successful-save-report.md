# EXP-051 T6 — One intended successful toolbar Save of the three staged FX_Items records (AC-8; cycle 6)

Run `R-20261011-114105-Dh5t`, experiment EXP-051, cycle 6, task T6. Worker session `04dd92c6-18cf-45b0-9833-5f76e6b78c00`, task_message_id `f6a69a0c-ba34-43a1-b718-78a58375d96a`. Date 2026-10-11.

Scope (bounded instruction): AC-8 only. Verify three pending rows; one toolbar Save; capture the native result; stop. No second Save, no New, no Refresh, no FiP/F4, no Delete, no close or reopen, no Designer action, no cleanup.

## Outcome

**One explicit toolbar Save returned without error and left a clean Form state (observed, same session, UI level).**
- Immediately after the click: Save disabled; no alert, dialog, prompt, or message in the accessibility tree or the screenshot; the new-row stars were gone from all three rows; the Item key field greyed (read-only); the status read `Description (Object 3 of 3)`.
- After a 3-second settle with no action: unchanged, and no alert (`browser_find` "alert" returned no matches).
- The toolbar gained enabled buttons for System Notes, Documents, and Send email (previously disabled); this is consistent with the current object now being a stored record. Interpreted, not proven.
- No success toast was shown. Clean state is inferred from Save disabled, stars cleared, and no error text. No native success message exists in this UI (also observed in EXP-042-R3).

**Database persistence: NOT verified.** The result is same-session Web Client UI evidence only. No database read, no Refresh, no re-query was made (the brief forbids them). The T2 BX Save's effect on the database is still unknown.

## Pre-Save gate (fresh read-only inspection)

Tabs listed, then the Web Client selected. Fresh snapshot and screenshot `t6-01` before any Save:

| Check | Observed |
| --- | --- |
| Row 1 (accessibility) | `dumbbell` / `45 pound iron` / `45.00` / `EA` (`f1e154`–`f1e160`); star visible in `t6-01` |
| Row 2 | `guitar` / `natural acoustic` / `129.99` / `EA` (`f1e165`–`f1e171`); star visible |
| Row 3 (current) | `eggs` / `cage free` / `6.99` / `DZ` (`f1e176`–`f1e182`); star visible |
| Row count | three rows (`gridcell "1"`, `"2"`, `"3"`); no fourth |
| Count token | `Description (Object 3 of 3)` (`f1e227`) |
| Inputs | Item `eggs`; Description `cage free` (`[active]`, text selected from T5's focus move); Cost `6.99`; Unit of Measure `DZ` (`f1e220`) |
| Dropdown | closed (no `listbox`; combobox not `[expanded]`) |
| Save | enabled (`button "Save" [ref=f1e28]`, no `disabled`; icon coloured in `t6-01`) |
| Dialogs / prompts / auth | none |

All prerequisites passed. Save was then invoked.

## The one Save

- One click on toolbar `Save` (`f1e28`, label verified; the Save tooltip appeared in `t6-02`). **No retry.**
- Click returned with no error, timeout, or ref failure.

## Immediate result (snapshot `page-2026-10-11T03-55-13-418Z.yml` and `t6-02`)

| Item | Observed |
| --- | --- |
| Save | `button "Save" [disabled] [active]` (`f1e28`) |
| Alert / dialog / prompt | none in the tree; none in the screenshot |
| Row stars | cleared on all three rows (rows show plain numbers `1`, `2`, `3`; row 3 current arrow) |
| Grid header | `Item` (asterisk gone) |
| Item input | greyed, read-only (`textbox "Item:" [ref=f1e193]: eggs`) |
| Description / Cost / UM | `cage free` / `6.99` / `DZ`, unchanged |
| Grid values (accessibility) | row 1 `dumbbell / 45 pound iron / 45.00 / EA`; row 2 `guitar / natural acoustic / 129.99 / EA`; row 3 `eggs / cage free / 6.99 / DZ` |
| Status bar | `Description (Object 3 of 3)` (`f1e227`) |
| Placeholder | no starred row; no `Object` count beyond 3 |
| Toolbar | System Notes, Documents, Send email enabled (previously disabled) |
| Tooltip | `Save` (`f1e241`) |

## Settled result (after 3-second wait, no action; snapshot `page-2026-10-11T03-55-24-960Z.yml` and `t6-03`)

Unchanged from the immediate result: Save disabled; no alert (`find "alert"` → no matches); rows unstarred; values intact; status `Description (Object 3 of 3)`.

## Automatic-save and prompt audit

- No implicit commit was observed as a separate event. The only Save invoked was the one explicit click.
- Save disabled after the click and stayed disabled, consistent with the pending changes being accepted. Whether that acceptance is a database commit is not established in this UI.
- No alert, validation text, unsaved-change prompt, authentication challenge, or unexpected Form state appeared at any step.
- Field focus remained on Description (text selected), which is the T5 state; no focus move was made after Save.

## Interpretation (what is and is not supported)

- Supported: the native Save was invoked once; the UI moved from a dirty three-row state to a clean three-row state with no error, consistent with a completed save.
- Not supported by T6: database durability; that the three rows are stored in `dbo.FX_Items`; that the count `(Object 3 of 3)` reflects stored rows rather than the pre-Save add-mode state (the post-Save stars are gone and no placeholder is shown, which is consistent with three stored records, but this is inferred).
- The status count after Save matches the expectation of three persisted records with no placeholder. EXP-042-R3 recorded `(Object 2 of 2)` immediately after Save and `(Object 1 of 2)` after Refresh, so the post-Save count can differ from the post-Refresh count. T6 did not Refresh.

## Evidence files (T6)

- `evidence/EXP-051/t6-01-pre-save-three-pending-rows-object-3-of-3.png`: before Save. Shows three starred rows, the eggs draft in the inputs (`eggs`, `cage free`, `6.99`, `DZ`), Save icon enabled, dropdown closed, `Description (Object 3 of 3)`, no dialog. Proves the pre-Save gate visually; rows 1–2 Description/Cost/UM are clipped (values from the accessibility snapshot).
- `evidence/EXP-051/t6-02-immediately-after-one-save-native-result.png`: immediately after Save. Shows the Save icon greyed, the stars gone (plain numbers 1–3), the greyed Item key field, the `Save` tooltip, no alert, status `Description (Object 3 of 3)`. Proves the clean state visually. Does not prove a database write; the grid's Description/Cost/UM cells are clipped.
- `evidence/EXP-051/t6-03-settled-after-save-three-clean-rows.png`: after the 3-second settle. Same state as `t6-02`, no alert. Proves the settled state visually.
- `evidence/EXP-051/t6-accessibility-excerpts.md`: pre-Save and post-Save accessibility excerpts (refs and full text).
- `evidence/EXP-051/T6-successful-save-report.md`: this report.
- Tool-generated (not worker-authored): `evidence/playwright/` snapshot and console files (for example `page-2026-10-11T03-55-13-418Z.yml`, `page-2026-10-11T03-55-24-960Z.yml`, `console-2026-10-11T03-55-05-672Z.log`).

## Operation counts (T6)

| Operation | Count |
| --- | --- |
| Toolbar Save clicks | **1** (the intended successful Save) |
| Save retries | 0 |
| New / Refresh / FiP / F4 / Delete / Get More Rows | 0 / 0 / 0 / 0 / 0 / 0 |
| Close / reopen of FX_Items | 0 / 0 |
| Field fills / typed text | 0 / 0 |
| Dropdown opens / option selections | 0 / 0 |
| Escape presses | 0 |
| Tab list / tab select | 1 / 1 |
| Web Client snapshots | 3 (pre-Save gate; immediate post-Save; settled) |
| Screenshots (worker-requested PNG) | 3 (`t6-01` to `t6-03`) |
| Browser finds | 1 (`alert`, no matches) |
| Waits | 1 (3 seconds, no action) |
| Dialogs or prompts answered | 0 |
| Ref not found / timeouts / recovery snapshots | 0 / 0 / 0 |
| Portal banner dismissals | 0 (none visible) |
| Designer edits; Designer dialog touched | 0; 0 (Designer tab not selected) |
| JavaScript, evaluate, run-code, SQL, API | 0 |
| Authentication, session, or browser change | 0 |

## Cumulative reconciliation (after T6)

| Operation | Count | Where |
| --- | --- | --- |
| Invalid BX Save attempt (rejected) | **1** | T2 |
| Explicit toolbar Save clicks, all tasks | **2** (1 rejected BX attempt in T2; 1 intended successful Save in T6) |
| Intended successful Saves | **1** (T6) |
| Toolbar New | **2** (T4 guitar row; T5 eggs row) |
| Runtime closes | **0** |
| Runtime reopens | **0** |
| Final empty-criteria queries | **0** |
| Records saved (clean UI state) | **3**: dumbbell (EA), guitar (EA), eggs (DZ) |
| Alert dismissals | 1 (T3, BX alert OK) |

The brief's reconciliation asked for "one rejected BX Save, exactly one additional toolbar Save attempt, two native New operations, zero runtime closes/reopens, and zero final empty-criteria queries." That matches: one BX Save (T2), one additional Save (T6), two New (T4, T5), zero closes or reopens, zero final queries. The T1 FiP + F4 gate query is a separate read-only gate, not a final query.

## Limitations

1. Same-session UI evidence only; no database read; no Refresh; no cross-session evidence.
2. Save success is inferred from the UI state (Save disabled, stars cleared, no error), not from a native success message (none is displayed by this Web Client).
3. The post-Save count `(Object 3 of 3)` is read immediately after Save. EXP-042-R3 showed the post-Save count can differ from the post-Refresh count; the persisted count will be checked after the close and reopen (not yet performed).
4. Star state and clipped grid cells: stars are read from the screenshots; rows 1–2 Description/Cost/UM are clipped in the images and taken from the accessibility tree.
5. The T2 BX Save's effect on the database remains unknown. Nothing in T6 can answer it.

## Stop state

- Web Client tab current; FX_Items runtime open; three rows clean (unstarred); Save disabled; no dialog, alert, or prompt; no dropdown open.
- Description field retains focus with its text selected (from T5). No typing after Save.
- Designer tab not touched; its inherited scope dialog is unchanged.
- No further Save, New, Refresh, query, close, or reopen performed.
- Next permitted action (coordinator): one ordinary runtime close (AC-9), one reopen (AC-9), and one empty-criteria query (AC-10). Not performed.
