# EXP-077 — Final acceptance report (T6)

Experiment: EXP-077 — Hello World Part 5 Prerequisite D: enter Address values for FX001 and FX002 at runtime.
Run `R-20261013-230351-ESoP`, cycle 5, task T6. Worker session `7771dc15-b498-4323-aebf-372e1070e7ba`; task_message_id `4d8d0c2b-7447-49ec-bc52-3f8d90aa2fb0`.
Record: `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md`.
Scope of this task: documentation only. **Zero browser calls, zero Mongoose changes, zero Save, Refresh, close, reopen or metadata operation.** Non-browser file reads were made to check the record and the harness audit files.

## 1. Classification

**ACCEPTED AS OBSERVED** (worker recommendation; operator decision authoritative).

- All AC-1 to AC-7 checks are supported at the same-session, UI level, with the limits in section 3.
- Classification: **observed only. Not replay_verified.**
- **Same-session runtime recovery does not independently prove database durability in `dbo.FX_HelloWorld01`.** No table read, SQL, API, cache unload or fresh session was used. The values were recovered in the same browser session through the Web Client's data path. That path was not isolated from client-side caching, so even the recovery is not a database read.

## 2. Acceptance matrix

| AC | Result | Observed (exact) | Evidence (repo-relative) | Limits |
| --- | --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; FX_HelloWorld01 runtime in use; after one Refresh exactly FX001 / Factory test one and FX002 / Factory test two, empty Address, Save disabled | **Supported** | Sources: `AGENTS.md`; transcript Sections 1–2 (lines 1–111); EXP-076 (lines 1–515 and the T12 section); EXP-042-R3 (lines 1–493 of 1100); EXP-046 (lines 1–576 of 1199). The runtime tab was already open and clean. One toolbar Refresh gave two rows, `Factory test one` / `FX001` and `Factory test two` / `FX002`. Both Address boxes were empty (accessibility textbox with no value; caption `Address:`). Status `(Object 1 of 2)` after the Refresh, Save `[disabled]`. No dialog, no banner. | `evidence/EXP-077/preflight-00-pre-refresh-runtime-state-as-found.png`; `preflight-01-after-one-refresh-row1-current-two-rows.png`; `preflight-02-row2-FX002-current-address-empty.png` | The long records (EXP-042-R3, EXP-046, EXP-076) were read in part; the parts read include the count rule, Refresh behaviour, typed-value-on-blur and FX_Code read-only notes that the brief names. Address emptiness is from the accessibility tree and the screenshot; the grid has no Address column. Same session. |
| **AC-2** FX001 Address = `1 Factory Street` by one plain fill; Code and Label unchanged | **Supported** | FX001 current; Address empty before fill (`T2-02`). One plain fill `1 Factory Street`, one Tab (focus to Label). After: Address `1 Factory Street`; Code `FX001`; Label `Factory test one`; `(Object 1 of 2)`; Save enabled (dirty). | `evidence/EXP-077/T2-02-fx001-current-before-address-focus.png`; `T2-03-fx001-address-1-factory-street-after-fill-and-tab.png` | Value read from the form textbox (no Address column in the grid). Unsaved at that time. Later re-seen in `T3-02`, `T4-01`, `T5-04`. |
| **AC-3** FX002 Address = `2 Factory Street` by one plain fill; FX001 still `1 Factory Street`; no third row; Code and Label unchanged; both rows before Save | **Supported** | FX002 current; Address empty; one plain fill `2 Factory Street`, one Tab (focus to Label). `T3-01`: Address `2 Factory Street`; Code `FX002`; Label `Factory test two`; `(Object 2 of 2)`; Save enabled; dirty diamonds on rows 1 and 2. One row-header click on FX001: Address `1 Factory Street`; Code `FX001`; `(Object 1 of 2)`; Save enabled; dirty diamonds on rows 1 and 2; two row headers only. | `evidence/EXP-077/T3-01-fx002-address-2-factory-street-after-fill-and-tab-presave.png`; `T3-02-presave-both-rows-recheck-fx001-1-factory-street-status-1-of-2.png`; `T4-00-pre-save-dirty-state-check-before-single-save.png` | FX002's value was **not** re-read after focus left FX002 before Save (the brief allowed one FX001 click). The "both rows before Save" evidence is two separate screenshots, not one image showing both addresses. |
| **AC-4** Exactly one toolbar Save; native response (or absence); Save disabled afterwards; both rows show addresses | **Supported** | One toolbar Save click (T4 step 6, `f1e28`), no retry. Native response: **none visible** (no message, toast, validation text, alert, dialog or prompt). Afterwards: toolbar Save `[disabled]`; both dirty markers cleared; FX001 shows `1 Factory Street` (`T4-01`); after one row click FX002 shows `2 Factory Street`, `(Object 2 of 2)`, Save `[disabled]`, two rows only (`T4-02`). | `evidence/EXP-077/T4-00-pre-save-dirty-state-check-before-single-save.png`; `T4-01-post-single-save-fx001-state.png` (Save result); `T4-02-post-save-fx002-current-address-2-factory-street.png` | "Success" is inferred from the state change; the UI shows no success text. The FX002 dirty-marker clearing after Save is a visual judgement (no flag to read). No database read. |
| **AC-5** Clean runtime Form closed once without a prompt; reopened once through Select Form | **Supported** | Clean pre-close check (FX002 current, Save disabled, two rows, no dialog). One click on the Form-tab control `Close Panel FX_HelloWorld01`. No prompt: the snapshot shows no dialog; the runtime tab is gone; the IDOs tab became active. Reopen: Form menu > `Open` > Select Form (one row, one OK). Reopened runtime: identity `FX_HelloWorld01`; add-mode placeholder; `(Object 1 of 1)`; Save disabled. | `evidence/EXP-077/T5-00-pre-close-clean-state-fx002-current.png`; `T5-01-after-single-close-no-prompt.png`; `T5-02-select-form-dialog-fx_helloworld01-row-selected-before-ok.png`; `T5-03-reopened-runtime-before-refresh-add-mode-placeholder.png` (reopen screenshot) | "No prompt" is from the snapshot and the screenshot; a native prompt would have appeared as a dialog in the snapshot, and none did. Same session. The reopen is a UI reopen, not a database reload test. |
| **AC-6** After one Refresh, both rows recovered: FX001 / Factory test one / 1 Factory Street; FX002 / Factory test two / 2 Factory Street; status count; Save disabled | **Supported** | One toolbar Refresh (the only Refresh in T5). Two rows. FX001 current: Code `FX001`; Label `Factory test one`; Address `1 Factory Street`; `(Object 1 of 2)`; Save `[disabled]`. One row-header click on FX002: Code `FX002`; Label `Factory test two`; Address `2 Factory Street`; `(Object 2 of 2)`; Save `[disabled]`; two rows; no third row. No dirty markers. | `evidence/EXP-077/T5-04-recovered-fx001-after-one-refresh-address-1-factory-street.png` (FX001 row); `T5-05-recovered-fx002-current-address-2-factory-street.png` (FX002 row) | Same session, UI level. The status numerator is the current-record position (as in EXP-042-R3 and EXP-046). Not a database read; no durability claim. Dirty-marker clearing is visual. |
| **AC-7** Final report: decisive evidence for AC-1 to AC-6; complete action audit; worker-written-file inventory; final state | **Supported by this report** | Sections 3–7 below. The record's counts reconcile with the harness audit files (section 4). No documentation discrepancy was found that prevents acceptance; the items in section 6 need operator review. | `evidence/EXP-077/T6-final-acceptance-report.md` (this file); `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` | The inventory separates worker files from harness files; repository confinement is supported by the worker and harness inventories, with operator git review authoritative. No git or shell access was used. |

## 3. Limits that apply to every criterion

- Same browser session, same Web Client, same Form. No cache unload, FormSync, deployment, browser restart or re-login.
- Nothing was read from `dbo.FX_HelloWorld01` directly. The recovered values show that the Web Client displays what it loaded; they do not show what the table holds.
- The grid has no Address column, so Address was read from the form textbox for the current record only.
- The multi-line property of FX_AddressEdit was not DOM-proven (EXP-076 T12, observation 3). The runtime Address box is taller than the Label and Code boxes. The binding `object.FX_Address` was read in the Designer in EXP-076 and is inferred for the runtime box, not read at runtime.
- Dirty markers, the grey FX_Code box and the "saved" state are visual judgements. Read-only enforcement of FX_Code was not tested.

## 4. Cumulative action audit (T1–T5) — reconciled

Sources: the worker counts in the record (T1–T5 sections and the cumulative tables) and the controller audits `evidence/EXP-077/harness-audit-T1.md` to `harness-audit-T5.md`. The harness audits list 23 snapshot calls in total; the record separates 22 untargeted and 1 targeted (T1), which is consistent with the harness because the harness does not record a snapshot's target argument.

| Action | T1 | T2 | T3 | T4 | T5 | **Total** | Brief expectation | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `browser_tabs` list | 1 | 1 | 1 | 1 | 1 | **5** | — | matches 5 |
| `browser_tabs` select | 1 | 1 | 1 | 1 | 1 | **5** | — | matches 5 (the T3 Designer-page snapshot came **before** the first T3 select; see section 5) |
| `browser_snapshot` untargeted | 2 | 5 | 6 | 3 | 6 | **22** | — | matches 22 |
| `browser_snapshot` targeted | 1 | 0 | 0 | 0 | 0 | **1** | — | (T1 only) |
| Snapshots, all (harness count) | 3 | 5 | 6 | 3 | 6 | **23** | — | 22 + 1 = 23 |
| `browser_find` | 1 | 0 | 0 | 0 | 1 | **2** | — | matches 2 |
| Screenshots | 3 | 3 | 2 | 3 | 6 | **17** | — | matches 17 (`T5-02` and `T5-03` are in the 6 for T5) |
| **Toolbar Refresh** | 1 | 0 | 0 | 0 | 1 | **2** | 2 | **matches 2** |
| **Address fills (`browser_type`)** | 0 | 1 | 1 | 0 | 0 | **2** | 2 | **matches 2** |
| **Tab presses** | 0 | 1 | 1 | 0 | 0 | **2** | 2 | **matches 2** |
| **Enter presses** | 0 | 0 | 0 | 0 | 0 | **0** | 0 | **matches 0** (harness key sequences: Tab only) |
| Escape presses | 0 | 0 | 0 | 0 | 0 | **0** | — | none |
| **Toolbar Save** | 0 | 0 | 0 | 1 | 0 | **1** | 1 | **matches 1** |
| **Runtime close (Form-tab control)** | 0 | 0 | 0 | 0 | 1 | **1** | 1 | **matches 1** |
| **Select Form reopen** (Form > Open, row click, OK) | 0 | 0 | 0 | 0 | 1 | **1** | 1 | **matches 1** (3 clicks inside the one reopen) |
| Successful grid row / row-header clicks | 1 | 1 | 2 | 1 | 1 | **6** | — | matches 6 |
| Successful Address-field clicks | 0 | 1 | 1 | 0 | 0 | **2** | — | matches 2 |
| Failed grid-cell click (no effect, T2 `f1e164`) | 0 | 1 | 0 | 0 | 0 | **1** | — | matches 1 |
| Menu and dialog clicks (Form menu, Form > Open, Select Form row, Select Form OK) | 0 | 0 | 0 | 0 | 4 | **4** | — | matches 4 |
| Close click (counted in the T5 total, not in the menu row) | 0 | 0 | 0 | 0 | 1 | **1** | — | the record's T5 table lists "menu and dialog 5", which includes the close; this report splits the 5 into close 1 + menu/dialog 4 |
| **Total clicks** (successful + failed) | 2 | 3 | 3 | 2 | 7 | **17** | — | 6 + 2 + 1 + 2 Refresh + 1 Save + 4 menu/dialog + 1 close = 17 ✓ |
| Recovery snapshots (fresh, after a failed action) | 0 | 1 | 0 | 0 | 0 | **1** | 1 allowance | the T2 allowance was used once (section 5) |
| New | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 |
| Delete | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 |
| Code or Label edits | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 |
| Designer actions (click, type, select, screenshot on tab 0) | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 (one read-only Designer-page snapshot in T3; section 5) |
| Metadata changes (Form, IDO, property class, SQL, string) | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 |
| Unloads / cache / FormSync / deployment / regeneration | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 |
| Checkout actions (Check In, Undo Check Out, etc.) | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 (the visible checkout buttons were not clicked) |
| Re-logins (session-expiry procedure) | 0 | 0 | 0 | 0 | 0 | **0** | — | 0; no session expiry seen |
| Browser JavaScript / run-code / console / network / direct navigation / refresh / restart | 0 | 0 | 0 | 0 | 0 | **0** | 0 | matches 0 |
| Native dialogs / prompts answered | 0 | 0 | 0 | 0 | 0 | **0** | — | none; the in-page Select Form OK is counted under reopen |
| Ref-not-found errors | 0 | 0 | 0 | 0 | 0 | **0** | — | none |
| Portal banner dismissals | 0 | 0 | 0 | 0 | 0 | **0** | — | none visible |

Harness flags (controller audits): `browser_type` was flagged as a "prohibited-tool hit" in `harness-audit-T2.md` and `harness-audit-T3.md` (1 each). These are the two plain fills that the brief authorizes. They are not an additional action.

## 5. Specific events the coordinator asked to be explained

**T3 Designer-page read (not a Designer action).** In T3 the first snapshot was taken after the tab list, which marked tab 0 (Web Designer) as current, and before any successful select. The snapshot returned the Designer page (FX_HelloWorld01 in the Designer). The harness order confirms it: list (#1), snapshot (#2), select (#3). No click, typing, screenshot or selection was made on tab 0, and nothing changed. The worker then selected tab 1 and continued in the Web Client. This is a read of a tab the worker had not yet successfully selected. It was a snapshot, not a click or screenshot, but it does not meet the spirit of the brief's rule (never act on a tab whose selection has not succeeded). It is listed in section 6 for operator review.

**T2 timeout and exhausted recovery allowance.**
- Action: one click on the FX001 Label grid cell (ref `f1e164`).
- Result: `TimeoutError` after 5000 ms. The locator resolved to the Label gridcell. Playwright reported that the locked grid's row-number cell, the grid view and the vertical splitter (`paneZero108-splitter`) intercepted pointer events, and it retried repeatedly. The click had no effect; the state was unchanged afterwards.
- Recovery used: one fresh untargeted snapshot (T2 step 5), one corrected visible inspection (screenshot `T2-01`), and one corrected click on the FX001 row-number cell (which succeeded).
- Cause: **not established.** The screenshot shows the Label column clipped under the splitter, which is consistent with an overlap. The Label textbox of FX002 was still an active in-place editor from T1, which may have contributed. Neither was tested, so the cause is recorded as unresolved.
- Allowance: the T2 allowance was one fresh recovery snapshot, and it was used once. Three further read-only snapshots in T2 (steps 7, 9 and 12) were post-action verification snapshots to obtain current refs. They are disclosed in the record. Whether the coordinator counts them against the allowance is a coordinator decision; this report does not count them as recovery.

**Tab selection timing (procedural note).** In T2, T3, T4 and T5 the tab select and the following snapshot were issued in the same response block (select first, snapshot second). The harness records them in that order. The snapshot is read-only, and the select is navigation within the browser, but the brief asks for one browser action at a time. The state read after each select was correct every time.

## 6. Documentation discrepancies and review items (none prevents AC-7 acceptance)

1. **Designer-page snapshot in T3** (section 5): a read before any successful tab select on the Designer tab. Operator to decide whether it breaches the tab-selection rule.
2. **Parallel select and snapshot** in T2–T5 (section 5): the brief asks for one browser action at a time.
3. **Snapshot targeting is not in the harness audits.** The T1 targeted snapshot (`f1e125`) is recorded only in the worker record; the harness shows it as a plain snapshot.
4. **Partial reads of long source records.** EXP-042-R3 (lines 1–493 of 1100), EXP-046 (lines 1–576 of 1199) and EXP-076 (lines 1–515 of 1577, plus the T12 section) were read in part. The parts read contain what the brief names (count rule, Refresh behaviour, typed values on blur, FX_Code read-only after Save, the runtime presentation).
5. **Controller flags** (`browser_type`, 1 each in T2 and T3): the plain fills the brief authorizes.
6. **Earlier-status text in the record.** The record's header keeps earlier status paragraphs (T1 "stopped before any fill", T2, T3, T4) under the current status. They are labelled "Earlier status" and are superseded by the current header.
7. **Record T5 table** lists "menu and dialog clicks 5", which includes the close click. Section 4 of this report splits it (close 1, menu/dialog 4) so that the total of 17 clicks reconciles.

## 7. Worker-written-file inventory (T1–T6)

**Worker-written files** (all under the EXP-077 paths):

| File | Task | Kind |
| --- | --- | --- |
| `experiments/EXP-077-hello-world-part-5-prereq-d-fx-address-values.md` | T1 created; T2–T5 edited; T6 header edited | record |
| `evidence/EXP-077/preflight-00-pre-refresh-runtime-state-as-found.png` | T1 | screenshot |
| `evidence/EXP-077/preflight-01-after-one-refresh-row1-current-two-rows.png` | T1 | screenshot |
| `evidence/EXP-077/preflight-02-row2-FX002-current-address-empty.png` | T1 | screenshot |
| `evidence/EXP-077/T2-01-after-row1-click-timeout-state-inspection.png` | T2 | screenshot |
| `evidence/EXP-077/T2-02-fx001-current-before-address-focus.png` | T2 | screenshot |
| `evidence/EXP-077/T2-03-fx001-address-1-factory-street-after-fill-and-tab.png` | T2 | screenshot |
| `evidence/EXP-077/T3-01-fx002-address-2-factory-street-after-fill-and-tab-presave.png` | T3 | screenshot |
| `evidence/EXP-077/T3-02-presave-both-rows-recheck-fx001-1-factory-street-status-1-of-2.png` | T3 | screenshot |
| `evidence/EXP-077/T4-00-pre-save-dirty-state-check-before-single-save.png` | T4 | screenshot |
| `evidence/EXP-077/T4-01-post-single-save-fx001-state.png` | T4 | screenshot |
| `evidence/EXP-077/T4-02-post-save-fx002-current-address-2-factory-street.png` | T4 | screenshot |
| `evidence/EXP-077/T5-00-pre-close-clean-state-fx002-current.png` | T5 | screenshot |
| `evidence/EXP-077/T5-01-after-single-close-no-prompt.png` | T5 | screenshot |
| `evidence/EXP-077/T5-02-select-form-dialog-fx_helloworld01-row-selected-before-ok.png` | T5 | screenshot |
| `evidence/EXP-077/T5-03-reopened-runtime-before-refresh-add-mode-placeholder.png` | T5 | screenshot |
| `evidence/EXP-077/T5-04-recovered-fx001-after-one-refresh-address-1-factory-street.png` | T5 | screenshot |
| `evidence/EXP-077/T5-05-recovered-fx002-current-address-2-factory-street.png` | T5 | screenshot |
| `evidence/EXP-077/T6-final-acceptance-report.md` | T6 | this report |

Worker totals: 1 record (edited across tasks), 17 PNG screenshots, 1 report. Records are edited in place; earlier content is preserved.

**Harness-generated files under `evidence/EXP-077/`** (controller-generated, not worker prose): `harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`, `harness-audit-T4.md`, `harness-audit-T5.md`. Five files.

**Harness-generated files outside this path** (tool output, not worker-authored, not EXP-077 evidence): snapshot and console files under `evidence/playwright/` written on each browser event. Examples named in tool output: `page-2026-10-13T15-04-26-552Z.yml`, `page-2026-10-13T15-09-58-144Z.yml`, `page-2026-10-13T15-14-54-383Z.yml`, `page-2026-10-13T15-15-02-820Z.yml`, `console-2026-10-13T15-03-58-723Z.log`. The full list was not enumerated by the worker.

**Repository confinement.** The worker wrote only the files above. The only repository writes in the audits are `Write` and `Edit` calls on the EXP-077 record and this report, and the T1 record creation. No other repository path was written by the worker, per the worker and harness inventories. Operator git review is authoritative; no shell or git access was used.

## 8. Final runtime state

As last observed at the end of T5 (snapshot S6 and screenshot `T5-05`). **Not re-observed in T6**, because T6 makes no browser calls.

- Web Client tab 1 selected. The runtime `FX_HelloWorld01` tab is open and selected (tabpanel `FX_HelloWorld01`), and it is **clean**.
- FX002 is current: Code `FX002`; Label `Factory test two`; Address `2 Factory Street`; status **`(Object 2 of 2)`**; two rows; no third row.
- FX001 holds Code `FX001`; Label `Factory test one`; Address `1 Factory Street` (seen in `T5-04`).
- Toolbar **Save disabled**. No dirty markers. No dialog, no unsaved-change prompt, no native prompt, no portal banner.
- IDOs tab: open in the Web Client, not selected. It shows the `FX_HelloWorld01` IDO with a `Check In` button and an `Undo Check Out` button, and `Locked By` the operator account (masked in tool output; visible in `T5-01`). **Observed only; not clicked; no checkout action taken.** Checkout state is for the operator to decide.
- Designer tab 0 was not acted on in T1–T6 (one read-only snapshot in T3, section 5).

## 9. Knowledge state

| Finding | State |
| --- | --- |
| Runtime FX_HelloWorld01 was open and clean at the start of T1 | observed |
| One Refresh returns FX001 and FX002 with empty Address | observed (same session) |
| FX001 `1 Factory Street` by one plain fill and one Tab; Code and Label unchanged | observed (same session; unsaved at that point) |
| FX002 `2 Factory Street` by one plain fill and one Tab; FX001 still shows `1 Factory Street` after one row click; no third row; both dirty | observed (same session; FX002 not re-read after focus left it) |
| One toolbar Save: no visible native response; Save disabled afterwards; dirty markers cleared | observed (same session; no success text in the UI) |
| Clean close with no prompt; reopen through Form > Open > Select Form opens in add mode | observed (same session) |
| One Refresh recovers both rows: Code, Label and Address; status `(Object 1 of 2)` / `(Object 2 of 2)`; Save disabled | observed (same session; UI recovery only) |
| The values are stored in `dbo.FX_HelloWorld01` | **unresolved**; not claimed (no database read; cache not isolated) |
| The runtime Address box is multi-line | **unresolved** (box size only; not DOM-proven) |
| The runtime Address box is bound to `object.FX_Address` | **inferred** (Designer binding read in EXP-076; runtime value recovered in that box); not read at runtime |
| Cause of the T2 grid-cell timeout | **unresolved** (overlap with the splitter is consistent with the screenshot; not tested) |
| Replay or procedure status | **not claimed** (not replay_verified) |

## 10. Open items for the operator

1. Decide whether AC-7 is accepted as ACCEPTED AS OBSERVED, given the limits in section 3 and the review items in section 6.
2. Decide whether the T3 read-only Designer-page snapshot and the parallel select-and-snapshot pattern are acceptable procedure deviations.
3. Decide whether an independent read of `dbo.FX_HelloWorld01` is wanted for a durability claim. It is outside this experiment's scope and was not performed.
4. The IDO `FX_HelloWorld01` checkout state (`Locked By` the operator, `Check In` and `Undo Check Out` visible) is for the operator. No action was taken.
5. The T2 timeout cause and whether the verification snapshots count against the T2 recovery allowance are open for the coordinator.
