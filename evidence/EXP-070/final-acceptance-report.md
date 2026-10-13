# EXP-070 — Final Acceptance Report (T9, documentation only)

- Experiment: EXP-070, Hello World Part 4 Section 10 (Orders property classes: FX_CustomerID, FX_Item, FX_OrderNumBase).
- Run `R-20261013-132859-BBJH`, cycle 8, task T9, task_message_id `a34f7465-e739-4eeb-ad34-234ef008f629`, worker session `b360e4fb-6d7d-431d-bbc7-569a5bec0774`. Date 2026-10-13 (system date).
- Record: `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` (T1–T8 sections).
- T9 made **zero browser calls**, **zero Mongoose changes**, and no New, Save, close, reopen, query or checkout operation. T9 read files and wrote this report and the record update only.
- Classification: **observed only**. Same-session UI evidence. **Not replay_verified. Not proof of database durability.**

## 1. Recommendation

**ACCEPTED as observed only** (single session, UI level), with the qualifications in section 3, subject to one operator confirmation in section 6 about the harness's `browser_type` flag.

- Every acceptance check AC-1 to AC-8 is supported at UI level. No check failed. No check is pending except AC-8's final sign-off, which this report supplies for the operator to review.
- This is **not** acceptance as replay-verified or as database-durable. Ordinary Form close/reopen is a weak persistence boundary. The stored text of `AUTONUMBER()` and the mechanism behind FX_Item's inherited display are not established.

## 2. Final state of the three classes (observed)

| Class | Pre-Save (pending) | Post-Save (T6) | Recovered after close/reopen (T8) |
| --- | --- | --- | --- |
| FX_CustomerID | String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label; checkout buttons disabled | same values; star cleared; checkout enabled | same values; one row; checkout enabled |
| FX_Item | Base Class FX_ItemBase, FX_Items, FX_Item, FX_Description; **local Data Type, Length, Column Data Type, Label String ID blank** | same configured values; **String, 20, nvarchar, FX_sItem now displayed** (inherited); checkout enabled | same; one row; the inherited four values displayed; checkout enabled |
| FX_OrderNumBase | Long Integer, `AUTONUMBER()` (typed), int, FX_sOrderNumber, Right; checkout disabled | same; checkout enabled | Long Integer, `AUTONUMBER()` displayed, int, FX_sOrderNumber, Right; one row; checkout enabled |

FX_ItemBase (existing class, unchanged): String, 20, nvarchar, FX_sItem; Base Class and Domain blank; checkout enabled at baseline (T1) and at the T2 preflight. It was not changed.

## 3. Acceptance matrix

| AC | Status | Decisive evidence (repo-relative) | What it shows | Limitations |
| --- | --- | --- | --- | --- |
| **AC-1** Sources reviewed; session usable; Property Classes open and clean; FX_ItemBase positive control with checkout indication | **Supported (UI, qualified)** | `evidence/EXP-070/t1-00-baseline-property-classes-fip-blank-save-disabled.png`; `evidence/EXP-070/t1-01-positive-control-FX_ItemBase-after-f4-settled.png`; `evidence/EXP-070/t2-00-preflight-FX_ItemBase-browse-before-New.png` | Identity: Property Classes tab, URL `favoriteContext=IdoPropertyClasses`, Filter in Place, blank criteria, Save greyed. FX_ItemBase: String, 20, nvarchar, FX_sItem, Base Class and Domain blank; Check In and Undo Check Out enabled. Sources (AGENTS.md, hello-world-pt4 §10 and quick reference, EXP-047-R2, EXP-048, EXP-040 header) were read (T1 controller audit rows 2 and 9–14) before the first tab selection (row 15). One read-only tab list (row 3) occurred during source review. | Locked By is masked by the tool and clipped on screen; not transcribed. "Checked out to the operator" is an inference from prior records, not an observation (see section 7). |
| **AC-2** Absence gate: one exact-name query each returns zero rows with visible criteria | **Supported (UI, one run), with a criteria-visibility limitation** | Post-F4 zero-row captures: `t1-04-…FX_CustomerID-after-f4-settled.png`, `t1-05-…FX_Item-after-f4-settled.png`, `t1-06-…FX_OrderNumBase-after-f4-settled.png`. Pre-F4 criterion capture: `t1-03-absence-gate-FX_CustomerID-criteria-before-f4.png`. Positive controls before and after the gates: `t1-01`, `t1-07`. | Each query returned zero data rows with only the add-mode placeholder (blue star, blank Class Name). Post-gate control FX_ItemBase returned its row, so retrieval worked after the zero-row results. | Pre-F4 criterion screenshots exist only for FX_CustomerID. For FX_Item and FX_OrderNumBase the criterion was confirmed by accessibility read immediately before F4, not by screenshot. Zero-row result rests on the displayed grid, not an empty-grid snapshot. Case variants were not typed. Single session. |
| **AC-3** FX_CustomerID pending with exactly String, 30, nvarchar, FX_sCustomerID, FX_HelloWorld01, FX_Code, FX_Label (one New) | **Supported (UI, pre-Save); also displayed after Save and recovered** | Pre-Save: `t2-02-FX_CustomerID-configured-pre-save-view1.png`; pending with others: `t3-01…`, `t5-01-row2-FX_CustomerID-selected-readonly.png`. Settled: `t6-03-settled-row2-FX_CustomerID-readonly.png`. Recovered: `t8-02-recovery-1-FX_CustomerID-settled-result.png`. | Seven values verified by control and grid-cell readback at each stage. One New (harness: New click at T2 row 9). | Pending state inferred from the star and the enabled Save; no database read. Grid right-hand columns verified in accessibility snapshots, not all in the images. |
| **AC-4** FX_Item pending with Base Class FX_ItemBase, FX_Items, FX_Item, FX_Description and blank local type and label fields (one New) | **Supported (UI, pre-Save)**, plus post-Save and recovery display | Pre-Save blank local fields: `t3-01-FX_Item-configured-pre-save-both-pending.png`; `t5-02-row3-FX_Item-selected-readonly.png`. Post-Save inherited display: `t6-04-settled-row3-FX_Item-readonly-inherited-values.png`. Recovery: `t8-04-recovery-2-FX_Item-settled-result.png`. | Before Save: Base Class FX_ItemBase (lookup), Domain IDO FX_Items, Domain Property FX_Item, Domain List Properties FX_Description; Data Type, Length, Column Data Type, Label String ID blank in form and grid. After Save and on recovery: String, 20, nvarchar, FX_sItem displayed. | Mechanism (stored versus derived on display) unresolved. The Domain IDO Name asterisk reads differently in the T8 accessibility tree and screenshot (section 5). |
| **AC-5** FX_OrderNumBase pending with Long Integer, the recorded auto-number text, int, FX_sOrderNumber, Right (one New); Default Value route recorded | **Supported (UI, pre-Save)**, plus display after Save and recovery | Pre-Save: `t4-01-FX_OrderNumBase-configured-pre-save-four-rows-three-pending.png`; `t5-03-row4-FX_OrderNumBase-selected-readonly.png`. Settled: `t6-05-settled-row4-FX_OrderNumBase-readonly.png`. Recovery: `t8-06-recovery-3-FX_OrderNumBase-settled-result.png`. | Route: **typed `AUTONUMBER()`**. The Default Value control is a plain text box with no combobox, Open button or list in the accessibility tree, so no lookup options existed to record. Displayed text after commit and after recovery: `AUTONUMBER()`. Long Integer, int and Right confirmed. | **Display only.** The stored Default Value text is not independently verified. No normalization was visible. |
| **AC-6** Exactly three News and one toolbar Save for the three pending rows; native response verbatim; clean settled state; checkout indications recorded | **Supported (UI), with a native-response limitation** | Harness: New clicks at T2 row 9, T3 row 4, T4 row 4 (three); the only Save click in all harness audits is T6 row 7 (one). Captures: `t6-00-pre-save-three-pending-rows-save-enabled.png`, `t6-01-immediately-after-single-Save.png`, `t6-02-settled-after-single-Save-grid-and-form.png`. | Pre-Save: stars on rows 2–4, Save enabled. Immediately after: Save greyed, stars cleared on all rows, no dialog. Settled after 2 s: same. Checkout buttons enabled on rows 2–4 after Save (disabled while pending). FX_ItemBase unstarred throughout. | **Native response verbatim: no success, warning, validation or error text was displayed.** The response is recorded as an absence, not a confirmation of an application Save. The settled state is same-session UI evidence. No database read. |
| **AC-7** Clean Form closed once and reopened once; one exact-name recovery query per class returns exactly one matching row; differences recorded | **Supported (UI, same session)** | Close: harness T7 row 7 (one `Close Panel Property Classes` click); `t7-00-pre-close-four-rows-clean-save-disabled.png`, `t7-01-after-single-close-Property-Classes-tab-gone.png`. Reopen: harness T7 rows 12, 14, 17, 18 (one Form menu, one Open, one row, one OK); `t7-02-after-single-reopen-Property-Classes-via-Select-Form.png`. Recovery: one query each (harness T8 rows 6–11, 21–25, 35–39); `t8-01`–`t8-06`. | Each recovery returned exactly one data row matching its pre-Save configuration. FX_Item recovered with inherited values displayed (blank before Save). AUTONUMBER() displayed. | Same-session recovery only. Not database durability or replay verification. The asterisk discrepancy on FX_Item (section 5) is unresolved. |
| **AC-8** Final report: decisive evidence for AC-1 to AC-7, complete audit with exact counts, inventory, final state | **Supported by this report** (for operator review) | This file; section 4 (counts); section 8 (inventory); section 9 (final state). | Required counts match the controller audits (section 4). | Counts are reconciled to the controller audits, which use different definitions from the per-task records (section 4). Repository confinement is supported by the worker and harness inventories; operator git review remains authoritative. |

## 4. Required counts and reconciliation

The brief-required values are checked against the per-task records (`R`) and the controller audits in `evidence/EXP-070/harness-audit-T1.md` … `harness-audit-T8.md` (`H`). The controller audits are not written by the worker; they were read, not edited.

| Required count | Brief value | Worker record | Controller audit | Match |
| --- | --- | --- | --- | --- |
| New (toolbar) | 3 | 3 (T2, T3, T4) | 3 clicks on `New toolbar button` (T2 r9, T3 r4, T4 r4) | Yes |
| Save (toolbar) | 1 | 1 (T6) | 1 click on `Save toolbar button` (T6 r7), none elsewhere | Yes |
| Form close | 1 | 1 (T7) | 1 click on `Close Panel Property Classes` (T7 r7) | Yes |
| Form reopen | 1 | 1 (T7) | 1 Form menu, 1 Open menu item, 1 row caption, 1 OK (T7 r12, r14, r17, r18) | Yes |
| Absence queries | 3 | 3 (T1) | 3 criterion entries (T1 r50, r61, r71), each followed by one F4 (r54, r64, r74); plus 2 positive-control criterion/F4 pairs (r36/r38, r81/r83) | Yes |
| Recovery queries | 3 | 3 (T8) | 3 criterion entries and 3 F4s (T8 r6–r11, r21–r25, r35–r39) | Yes |
| Changes to existing classes | 0 | 0 | No field edit to any existing class. In T3 a lookup selection set FX_ItemBase as **FX_Item's** Base Class; FX_ItemBase itself was not edited. | Yes (with note) |
| Strings created | 0 | 0 | None | Yes |
| Unloads | 0 | 0 | None (no unload, cache, FormSync or deployment action) | Yes |
| Checkout-management actions | 0 | 0 | None (no Check In, Check Out or Undo Check Out click) | Yes |
| Re-logins | 0 | 0 | None. No sign-in or session-expiry screen. | Yes |

**Per-task reconciliation (browser calls).** The controller audit defines *actions* as click, type, key press and tab-select, and *reads* as find, snapshot, tab-list, screenshot and wait. Read, Grep, Glob, Edit and Write are non-browser calls. The worker records use different groupings, so the two columns are not directly comparable except in total.

| Task | H actions | H reads | H non-browser rows | H total rows | Worker-record total browser calls (T2 uses the corrected find count, 20) |
| --- | --- | --- | --- | --- | --- |
| T1 | 28 | 41 | 26 | 95 | 69 |
| T2 | 21 | 26 | 5 | 52 | 47 |
| T3 | 12 | 17 | 8 | 37 | 29 |
| T4 | 19 | 22 | 6 | 47 | 41 |
| T5 | 4 | 14 | 8 | 26 | 18 |
| T6 | 5 | 21 | 9 | 35 | 26 |
| T7 | 6 | 14 | 8 | 28 | 20 |
| T8 | 12 | 29 | 6 | 47 | 41 |
| **Total** | **107** | **184** | **76** | **367** | **291** |

The T1 worker figure of 69 is the sum of the T1 categories in the record (clicks 9, typed 6, key presses 12, tab-select 1, finds 19, snapshots 6, tab lists 2, screenshots 8, waits 6 = 69), and it equals H actions 28 plus H reads 41.

**Cumulative by category (harness-reconciled, T1–T8).**

| Category | Count | Source |
| --- | --- | --- |
| Clicks | 50 (0 failed) | H, matches record |
| Typed entries | 19: 15 plain, 4 slow (3 succeeded, 1 failed with Ref not found) | H (T1 6, T2 4, T3 1, T4 5, T8 3) |
| Key presses | 30: Tab 18, F4 8, F2 2, Control+a 1, Backspace 1 | H |
| Tab selects | 8 | H |
| Finds | **100** | H. Worker record said 99; see the correction below |
| Snapshots | 29 (worker record: 11 untargeted, 18 targeted) | H |
| Tab lists | 9 | H |
| Screenshots | 35 | H; matches the PNG inventory in section 8 |
| Waits (2 s) | 11 | H |
| Ref-not-found errors | 1 (T4), recovered once | H |
| Dialogs answered | 0 | Record and H |

**Correction (T2 find count).** The T2 section of the record states 19 `browser_find` calls. The controller audit shows 20 find rows in T2 (rows 4, 5, 6, 10, 15, 17, 19, 22, 26, 29, 32, 34, 36, 37, 39, 41, 43, 46, 49, 50). The cumulative find total is therefore 100, not 99. The record's T2 line is annotated with this correction; the original figure is kept visible.

**Snapshot target caveat.** The controller audit does not record a snapshot's target argument, so it cannot confirm which snapshots were targeted. Only the totals (29 snapshots) are reconciled.

## 5. Asterisk and checkout observations (no meaning assigned)

- **Asterisk meanings (required versus override) remain unresolved** for every field.
- **FX_CustomerID:** asterisks on Data Type, Length, Column Data Type, Label String ID, Domain IDO Name, Domain Property and Domain List Properties. Class Name carried a red asterisk only in add mode.
- **FX_Item:** asterisks on Domain IDO Name, Domain Property and Domain List Properties in the screenshots and in the T6 accessibility tree. **Unresolved discrepancy:** in the T8 recovery accessibility snippet the Domain IDO Name label reads `Domain IDO Name:` with no asterisk, while the Domain Property label in the same snippet reads `*Domain Property:` and the T8 screenshot `t8-04-recovery-2-FX_Item-settled-result.png` shows `*Domain IDO Name:`. I did not decide which reading is correct. The T8 record also says so.
- **FX_OrderNumBase:** asterisks on Data Type, Default Value, Column Data Type, Label String ID and Justify.
- Grid-header asterisks differ between the pending, post-Save and blank Filter in Place states. Recorded as observed only.
- **Checkout indications (observed, not acted on):** pending rows showed Check In and Undo Check Out disabled. After Save and on recovery all three new records showed them enabled. FX_ItemBase showed them enabled at baseline and at the T2 preflight. No checkout action was taken. Whether the enabled state means "checked out to the operator" is **not established by observation**; the earlier record wording "checked out to the operator" is an inference from prior experiments.

## 6. Process deviations, errors and flagged classifications

1. **T4 same-turn sequencing deviation.** The Class Name plain fill and its Tab were sent in the same turn as parallel calls (controller rows 8 and 9), contrary to the one-action-at-a-time rule. Both succeeded and the T4 readback verified the result.
2. **T4 stale-reference failure (one recovered).** `Ref f1e736 not found` on the Column Data Type combobox (controller row 22; the slow type did not execute). One fresh untargeted snapshot was used (row 23, recovery 1 of 1). That snapshot's output was saved to a tool-results file that I could not read back, so the ref was confirmed by a live `find` (row 25) rather than from the snapshot text. The corrected type (row 26), F2 and selection then succeeded. **The browser-reference recovery allowance is exhausted and was not renewed in T5–T8.**
3. **T4 denied Grep (non-browser).** A search of the tool-results file was denied by the permission system (row 24). No content was used.
4. **T4 failed documentation Edit (non-browser).** An Edit failed because its anchor text matched two places (row 46). It was not applied; it was re-applied with a unique anchor (row 47).
5. **T6 Save returned no visible native message.** The one Save produced no success, warning, validation or error text. Recorded as an absence, not as a confirmation (AC-6).
6. **T2 first snapshot taken while the Designer tab was current** (controller row 2, before the tab selection at row 3). The tab list was read first and no mutation used that snapshot. Identity was then established by find, screenshot and the tab list.
7. **T2 find count corrected** from 19 to 20 (section 4).
8. **Harness `browser_type` flag (operator decision needed).** The controller audits list `browser_type` as a "prohibited-tool hit" in T1 (6), T2 (4), T3 (1), T4 (5) and T8 (3), **19 hits in total**. The audits state that flagged tools "may be allowed by other briefs". The `browser_type` calls were the rendered-UI text entry used for the brief's required field values and criteria. The brief's enforced-tool rule prohibits browser evaluate and run-code tools, and no evaluate or run-code tool was used. **If the operator's policy does not permit `browser_type` for this brief, the field-entry steps need review before acceptance, and the AC conclusions would need re-verification.** This is the one condition attached to the recommendation.
9. **Earlier draft disclosure.** The first draft of the T1 record contained the operator's sign-in account name in the identity and Locked By rows. I removed it during T1, before any later task. The record now contains no account name (checked). Screenshots still show the identity bar with the account; the screenshots are repository evidence and were not edited.
10. **Non-browser tool calls used for documentation.** Reads of AGENTS.md, the transcript, prior records and PNGs; Glob and Grep for discovery; Write (T1, record creation); Edit (record updates). None is a browser operation.
11. **Other process notes.** T3's Base Class selection (FX_ItemBase) was a lookup value for FX_Item, not a change to FX_ItemBase. The T8 Base Class combobox held focus on the displayed record with no text typed.

## 7. Corrections to earlier wording

- Earlier T6 and T7 prose described the enabled checkout buttons as "checked out to the operator". That is an inference and is not an observation. This report treats it as unresolved.
- Earlier T5 prose described a Save-greyed state in `t5-01`; the image shows the Save icon enabled. The T5 record was corrected in T5.
- The T2 find count (19) is corrected to 20 (section 4).

## 8. Worker-written-file inventory

Files written by the worker in the EXP-070 paths during T1–T9. The repository confinement check is the worker and controller inventories listed here. Operator git review remains authoritative.

| File | Created or edited | Task(s) |
| --- | --- | --- |
| `experiments/EXP-070-hello-world-part-4-section-10-orders-property-classes.md` | created (T1, by Write), then edited | T1–T9 |
| `evidence/EXP-070/t1-00` … `t1-07` (8 PNG) | created | T1 |
| `evidence/EXP-070/t2-00` … `t2-02` (3 PNG) | created | T2 |
| `evidence/EXP-070/t3-00` … `t3-01` (2 PNG) | created | T3 |
| `evidence/EXP-070/t4-00` … `t4-01` (2 PNG) | created | T4 |
| `evidence/EXP-070/t5-01` … `t5-04` (4 PNG) | created | T5 |
| `evidence/EXP-070/t6-00` … `t6-05` (6 PNG) | created | T6 |
| `evidence/EXP-070/t7-00` … `t7-02` (3 PNG) | created | T7 |
| `evidence/EXP-070/t8-00` … `t8-06` (7 PNG) | created | T8 |
| `evidence/EXP-070/final-acceptance-report.md` (this file) | created | T9 |

**Totals:** 1 record (edited across tasks), 35 PNG captures, and this report. That is 37 worker-written files in the EXP-070 paths.

**Not worker-written (present in `evidence/EXP-070/`):** eight controller-generated `harness-audit-T1.md` … `harness-audit-T8.md`. The worker read them and did not edit them.

**Not worker-written (outside the EXP-070 paths):** tool-generated snapshot and console logs under `evidence/playwright/`, and a tool-results JSON in the user profile directory (the T4 snapshot output, which I could not read back). These are generated by the tool environment, not by the worker.

## 9. Final UI state

- **Last browser state (end of T8, recorded in the record; not re-read in T9 because T9 makes no browser calls):** Web Client tab (tab 1) selected; Property Classes (IdoPropertyClasses) open in browse mode showing one record (FX_OrderNumBase, row 1) after the third recovery query; Save disabled; no pending stars; no dialog, prompt, banner or validation message. The Designer tab (tab 0) was not acted on. The Base Class combobox on the displayed record held focus with no text typed.
- No record is dirty. The three new classes are saved (per the T6 settled state) and were reopened and recovered (T7–T8).
- **Checkout state:** the three new records display checkout buttons enabled; no checkout action was taken.
- **Persistence:** not independently verified. Same-session Form close and reopen is a weak persistence boundary only.
- No unload, FormSync, cache or deployment action has been taken, so the Section 11 Designer unload remains for its own brief.

## 10. Knowledge state per finding

| Finding | State |
| --- | --- |
| Select Form route opens IdoPropertyClasses in Filter in Place with Save disabled | **observed** (T1, T7) |
| FX_ItemBase values String, 20, nvarchar, FX_sItem; checkout buttons enabled | **observed** (T1, T2) |
| Exact-name Filter in Place queries return zero rows for FX_CustomerID, FX_Item, FX_OrderNumBase before creation | **observed** (T1, one run) |
| Plain exact-name matching (FX_Item does not return FX_ItemBase) | **observed** (T1); consistent with EXP-047-R2; not documented |
| Zero-row query leaves a placeholder that the next query replaces silently | **observed** (T1 and later) |
| Each New adds a separate blank pending row; earlier pending rows stay starred (no implicit commit observed) | **observed** (T2–T4); commit state not independently verified |
| Pending values as configured for all three classes | **observed** (T2–T5, UI level) |
| Default Value is a plain text box with no lookup; typed `AUTONUMBER()` is displayed unchanged | **observed** (T4); display only |
| Data Type list (13 options), Justify list (Left, Center, Right), Column Data Type prefix `int` list (several entries) | **observed** (T4) |
| One Save clears pending stars, disables Save, shows no visible native message | **observed** (T6, one run) |
| FX_Item's inherited String, 20, nvarchar, FX_sItem displayed after Save and recovery (blank before Save) | **observed**; mechanism **unresolved** |
| AUTONUMBER() displayed after Save and recovery | **observed** (display only); stored text **not verified** |
| Clean close removes the Form tab with no prompt; reopen via Select Form returns the Form in Filter in Place | **observed** (T7, one run) |
| Recovery queries return one matching row per class | **observed** (T8, one run each; same session) |
| Checkout buttons enabled on new records after Save and recovery | **observed**; meaning **unresolved** |
| FX_Item Domain IDO Name asterisk: T8 accessibility and T8 screenshot disagree | **unresolved** |
| Asterisk meanings (required versus override) | **unresolved** |
| Persistence or database durability of the three classes | **not established**; same-session UI recovery only. **Nothing is replay_verified.** |
| Case-insensitive coverage for the three names | **not demonstrated** (inference only) |

## 11. Open questions for operator review

1. **Confirm the `browser_type` classification** (section 6, item 8). This is the only condition attached to the ACCEPTED recommendation.
2. **Stored Default Value text.** Whether Mongoose stores `AUTONUMBER()` exactly as typed needs a database or metadata read, which this experiment did not perform.
3. **Inherited FX_Item values.** Whether they are stored or derived on display needs a separate check.
4. **FX_Item Domain IDO Name asterisk.** The T8 accessibility and screenshot readings disagree; the T6 accessibility reading showed the asterisk. A fresh read-only check in a later task would settle it.
5. **Checkout state.** The three records show checkout buttons enabled. Whether they are checked out to the operator, and whether check-in is wanted, is an operator decision outside this experiment. No check-in or undo was performed.
6. **Section 11 unload.** Left to its own brief as instructed.

## 12. Limitations (consolidated)

- Single browser session, UI level only. Nothing here is cross-session, database-level or replay evidence.
- Pending state is inferred from stars and the enabled Save. Persistence is not read from the database.
- Locked By is masked by the tool and is not transcribed.
- Two absence queries (FX_Item, FX_OrderNumBase) lack pre-F4 criterion screenshots; their criteria were confirmed by accessibility read.
- Some accessibility snapshots were returned inline and not saved to files; their values are transcribed from inline output. One snapshot (T4 recovery) was saved to a file that I could not read back.
- Case variants were not typed; case-insensitive coverage is an inference.
- The controller audits do not record snapshot targets, so targeted and untargeted snapshots are reconciled only by total.

## 13. Repository confinement

- Worker-written files are listed in section 8 (37 files in the EXP-070 paths).
- The worker made no edit to any earlier experiment record, AGENTS.md, tutorial sources, recipes or files outside the EXP-070 paths.
- The harness-audit files and the tool logs are not worker-written. Operator git review remains authoritative.
