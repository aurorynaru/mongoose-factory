# EXP-082 — T10 final acceptance report (documentation and evidence reconciliation)

- Experiment: EXP-082, Hello World Part 5 Section 5 — rebuild the User-scoped Form FX_Orders with the Classic Multi-View wizard (operator-authorized replacement).
- Task: T10, cycle 11. Run `R-20261014-092354-OkSB`. Worker session `c5bf2326-27fb-4580-8614-4455e44d1602`. task_message_id `6356e49b-0794-4dde-9e6c-8a25295298ce`. Date 2026-10-14.
- Scope: documentation and reconciliation only. **Zero browser calls in T10.** No Mongoose change, no Save, no unload, no string or caption edit. Written: this report, and the experiment record `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md` (status header, T9 audit correction, T10 section).
- Classification for every finding: **observed only.** Same-session UI and accessibility evidence. Not database durability, not independent persistence validation, not replay_verified.

## 1. Sources reconciled

- The experiment record, sections T1–T9 and the status header, read in full.
- Controller-generated audits `evidence/EXP-082/harness-audit-T1.md` … `harness-audit-T9.md` (nine files). These list every attempted tool call and its native result. They are the basis for the counts in §3.
- Saved snapshots `snapshot-t9-07-after-itemcombobox-selection-check.yml` and `snapshot-t9-08-final-clean-state-after-caption-reads.yml`, checked by read-only Grep for the stray-locator check and the final state (§5, §7).
- Screenshots were **not re-viewed in T10**. The "visible" descriptions in §2 are those written in each task's decisive-evidence table, after that task viewed the image. Their limits are stated in those tables.

## 2. Acceptance matrix (AC-1 to AC-6)

| AC | Status | Exact supporting evidence (repo-relative under `evidence/EXP-082/` unless stated) | Observed facts | Limitations |
|---|---|---|---|---|
| **AC-1** Sources reviewed; session usable; Designer User scope and clean; existing FX_Orders and components recorded before the wizard | **Supported** (observed; same session) | `t1-01-designer-start-state-no-form-user-scope-clean.png`; `t1-02-baseline-fx_orders-designer-open-form-tab-identity-user-scope.png`; `t1-03-baseline-components-list-expanded-before-caption-reads.png`; `t1-04-baseline-components-captions-read-clean-before-close.png`; `t1-05-designer-after-fx_orders-closed-once-no-prompt.png`; `t1-06-webclient-no-fx_orders-runtime-open-clean.png`; `snapshot-t1-03-details-expanded-form-tab.yml`; `snapshot-t1-06-webclient-start-state.yml`; `t2-01-designer-preflight-no-form-user-scope-clean.png`; `snapshot-t2-01-designer-preflight.yml`; re-check `t4-05-baseline-recheck-components-list-13-rows-fx_orders-reopened.png` (filename overstates; shows identity and Pane 00 rows only) and `snapshot-t4-08-components-expanded-fx_orders.yml` (the full 13 rows). Sources: experiment record, "Sources reviewed" (AGENTS.md, hello-world-pt5.md Section 5 with its replacement caution, EXP-072, EXP-076, EXP-081, EXP-080-R3, EXP-079, EXP-078) | Start: no Form open, footer `ScopeType: User`, Save disabled. FX_Orders opened once from the Form menu recent-forms entry (no Select Form dialog): Name FX_Orders, Device Default, Form Type Normal, Is Master True, Save and Undo disabled. Baseline **13 components**: FormCollectionGrid, four GridColumns (object.FX_OrderNumber, FX_CustomerID, FX_Item, FX_Count), and eight Pane (01) field components. Static captions FX_sOrderNumber, FX_sCustomerID, FX_sItem, FX_sCount. Clean close, no prompt. No FX_Orders runtime Form open in the Web Client. | Same session. The brief expected "the EXP-072 eight components"; the baseline has 13, of which the eight Pane (01) field components are the EXP-072 set (T1 record). Edit and ComboBox captions were not read in T1 (read in T8). The Web Client IDO Properties panel showed blank criteria at T1 start; cause not established. |
| **AC-2** One Multi-View wizard (plus one more only after the conditional unload); page 1 Name and Data Source FX_Orders; page 2 includes the six new properties; page 3 order; Save Template unchecked | **Supported** (observed; wizard state up to the final page) | Page 1: `t2-03-wizard-page1-name-multiview-datasource-fx_orders-before-next.png`; `t5-02-wizard-opening-2-page1-name-multiview-datasource-fx_orders-before-next.png`. Page 2: `t5-04-wizard-page2-primary-collection-inventory-after-single-ok.png`; `t5-05-wizard-page2-available-properties-scrolled-visible-scroll.png`; `snapshot-t5-08-final-page2-state.yml`; `t6-01-page2-included-ten-before-next.png`. Page 3: `t6-02-page3-initial-ordering-before-moves.png`; `t6-03-page3-final-order-ten-included-before-next.png`; `t6-04-page3-final-order-top-rows-1-to-5-scrolled.png`; `snapshot-t6-03-page3-final-order-fresh.yml`; `t7-01-page3-order-verified-before-next.png`. Final page: `t7-02-final-page-initial-save-template-checked.png`; `t7-03-final-page-save-template-unchecked-finish-enabled-before-finish.png`; `snapshot-t7-02-final-page-after-next.yml` | Opening 1 (T2–T4): page 1 set; Next raised the replacement prompt; the wizard was then cancelled (T4), so page 2 was not reached in that opening. Opening 2 (T5–T7): page 1 set (Name by one plain fill, MultiView, Data Source FX_Orders); page 2 listed 54 entries (ten included, 44 available) and **included the ten required properties, including the six new ones** (FX_CusName, FX_CusAddress, FX_ItmsDescription, FX_ItmsCost, FX_DerOrderTotal, FX_ItmsPicture), with seven system properties not included. No Include change was made by the worker. Page 3 final order exactly as required; 26 single move-up presses (§3). Save Template unchecked once. Final-page sentence: `Click the Finish button to build a multiview form named FX_Orders with the data source FX_Orders.` | **Second opening:** AC-2's text permits a second opening only after the conditional unload. No unload ran; page 2 offered all six properties. The second opening was made under the T5 bounded instruction's operator authorization. The T6 instruction says not to treat it as an authorization conflict; it is stated here for the basis only. Whether the six properties would be included by default on a fresh page 2 cannot be separated from the opening-2 state (the default source is unresolved). |
| **AC-3** One Finish; each replacement prompt for FX_Orders recorded and answered Yes once; Finish response recorded; unload branch | **Supported** (observed) | Prompt text before each answer: `t2-05-replacement-prompt-form-fx_orders-already-exists-unanswered.png` (raised T2, left unanswered), `t3-01-replacement-prompt-before-ok-form-fx_orders-already-exists.png` (answered T3), `t5-03-replacement-prompt-form-fx_orders-already-exists-before-ok.png` (T5), `t7-04-replacement-prompt-after-finish-form-fx_orders-already-exists-before-ok.png` (T7). Finish result: `t7-05-finish-result-process-completed-successfully-before-ack.png`; `snapshot-t7-04-after-finish-immediate-response.yml`; `snapshot-t7-05-after-replacement-ok.yml`. Audit: T7 row 17 (single Finish). | One Finish. Three distinct replacement prompts, each naming only FX_Orders, each answered OK once (T3 row 6, T5 row 40, T7 row 24). Finish response: replacement prompt, then `Process Completed Successfully`, acknowledged once (T7 row 30). Unload branch not run. | Replacement effect on the server is **not verified**: after the T3 OK a `Timeout expired waiting for response.` alert appeared and the T4 reopen matched the baseline; after T5 the wizard advanced; the T7 Finish completed. Three prompts versus the tutorial's "up to two" is observed. The prompt appeared on Next in both openings and again on Finish in opening 2. |
| **AC-4** New FX_Orders in User scope with one bound component per included property in the set order; control types and captions recorded; at most one Designer Save if dirty | **Supported** (observed; full inventory from snapshots) | Full lists: `snapshot-t7-09-components-expanded-fx_orders-after-finish.yml` (after Finish); `snapshot-t8-01-fresh-start-designer.yml` (31 rows; captions read per row by find); `snapshot-t9-06-components-expanded-reopened.yml` (after reopen). Partial images: `t7-07-components-list-after-finish-expanded.png` (Pane 00 rows only); `t7-08-fx_itmspicturestatic-caption-blank-readback.png` (tabs 25–30); `t8-01-…upper-rows…png`; `t8-02-…lower-rows…png` (tabs 25–30 only); `t9-04-reopened-components-expanded-caption-readbacks-clean-save-disabled.png` (lower rows). Save: none (Designer clean after Finish; no Save click in any audit). | 31 components: FormCollectionGrid (tab 0); ten GridColumns (tabs 1–10); ten Static labels and ten detail controls (tabs 11–30, paired). Every binding is `object.<Property>` for the same property. **FX_CustomerID and FX_Item detail controls are ComboBox.** **FX_ItmsPicture detail control is an Edit** bound to `object.FX_ItmsPicture`; no image-type control was created. Captions read (T8, unchanged in T9): ten Static, ten GridColumn and ten detail-control values. Blank: FX_ItmsPictureStatic and FX_ItmsPictureGridCol (and the page-3 caption for FX_ItmsPicture). Raw string IDs on the canvas: FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal. Detail controls show `C(<Static name>)` expressions. | No single screenshot shows all 31 rows; the full list is in the snapshots. Whether the string IDs exist is not checked (EXP-083). The meaning of `C(<Static>)` is unresolved. The T9 find at audit row 80 has no recorded output (§5). |
| **AC-5** Clean Form closed once and reopened once through the Form menu recent-forms entry; Name, scope, components, bindings and captions recovered | **Supported** (observed; same session only) | Pre-close `t9-01-pre-close-fx_orders-identity-user-scope-clean.png`; after close `t9-02-after-close-once-form-tab-gone-user-scope.png`; reopen identity `t9-03-reopened-fx_orders-identity-user-scope-save-disabled.png`; reopened components and clean state `t9-04-…png`. Snapshots `snapshot-t9-01-fresh-start-designer.yml`, `snapshot-t9-02-after-close-once.yml`, `snapshot-t9-03-reopened-fx_orders-identity.yml`, `snapshot-t9-06-components-expanded-reopened.yml`, `snapshot-t9-08-final-clean-state-after-caption-reads.yml`. Audit: T9 rows 7 (close), 12–14 (Form menu, recent-forms). | Close: Form-tab control `closable FX_Orders`, one click, no prompt. Reopen: Form menu then recent-forms `FX_Orders`, one each, no Select Form dialog, no wizard. Reopened: Name FX_Orders, Device Default, Form Type Normal, Is Master True, `ScopeType: User`, Save and Undo disabled. 31 components, bindings, tab order and the 30 caption values match the T8 record (T9 §"Caption comparison"). | Same-session UI close and reopen only. Not a server-side or cache-cleared check, so it is a **weak persistence boundary**. ScopeName is masked in tool output. |
| **AC-6** Final report with decisive evidence for AC-1 to AC-5, the complete action audit with exact counts, baseline and new component lists, worker-written-file inventory and final state | **Satisfied by this report** (documentation complete for T1–T9); recommendation in §9 | This file (§§2–9); the experiment record (T10 section); audits `harness-audit-T1.md` … `T9.md` | Counts in §3 are recomputed row by row from the controller audits. Inventory in §6. Final state in §7. | Counts of the wizard are per the audit rows cited; screenshot content is as recorded in the task tables. |

## 3. Cumulative browser action audit, T1 to T9 (exact, from the controller audits)

Source: the tool-call rows of `harness-audit-T1.md` to `harness-audit-T9.md`. Each row is one attempted call. The `ok` result is recorded for every browser row. No browser call in any audit returned an error. Totals were recomputed in T10 and agree with each task's worker-recorded table.

### 3.1 Calls by category and task

| Category | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | Total |
|---|---|---|---|---|---|---|---|---|---|---|
| `browser_tabs` list | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **9** |
| `browser_tabs` select | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **3** |
| `browser_snapshot` (explicit; targeted 0) | 5 | 4 | 2 | 9 | 8 | 3 | 10 | 2 | 8 | **51** |
| `browser_take_screenshot` | 6 | 5 | 2 | 6 | 5 | 4 | 8 | 2 | 4 | **42** |
| `browser_click` (successful / failed) | 10 | 9 | 1 | 13 | 10 | 35 | 9 | 30 | 37 | **154 / 0** |
| `browser_find` (read-only) | 7 | 9 | 0 | 5 | 8 | 0 | 2 | 30 | 32 | **93** |
| `browser_type` | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | **2** |
| `browser_mouse_move_xy` | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | **3** |
| `browser_mouse_wheel` | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 2 | 0 | **4** |
| **Browser calls per task** | 31 | 30 | 6 | 34 | 35 | 45 | 30 | 68 | 82 | **361** |

Not used in any task: `browser_navigate`, `browser_navigate_back`, `browser_press_key`, `browser_evaluate`/run-code, console, network, drag, hover, file upload, dialog handling tool, wait, resize, refresh, restart, and direct URL. Zero of each.

Non-browser tool calls (Read, Grep, Glob, Write, Edit) are not counted above. Their use is in the audits.

### 3.2 The 154 successful clicks, by purpose

| Purpose | Count | Where |
|---|---|---|
| Row or tree-item selection (selection only; no edit) | **78** | T1 4 (Static rows); T4 4 (Static rows); T6 8 (name cells); T7 1 (FX_ItmsPictureStatic); T8 30 (every row); T9 31 (every row; includes the stray-locator click and its corrected repeat) |
| Move-up press on the page-3 arrow (e638) | **26** | T6 (rows 1–10 reordered; 9 + 4 + 3 + 2 + 2 + 3 + 2 + 1) |
| Wizard, dialog, Finish and other lifecycle or view clicks | **50** | See 3.3 |
| **Total** | **154** | 78 + 26 + 50 |

### 3.3 The 50 other clicks

| Purpose | Count | Where |
|---|---|---|
| Designer toolbar New | 2 | T2 row 6; T5 row 4 |
| Form Wizard Selection: category arrow, Classic, wizard arrow, Multi-View, OK | 2 each (10) | T2 rows 8–20; T5 rows 8–21 |
| Data Source Open and FX_Orders option | 2 each (4) | T2 rows 24, 26; T5 rows 29, 31 |
| Wizard Next | 4 | T2 row 30 (page 1); T5 row 35 (page 1); T6 row 5 (page 2→3); T7 row 6 (page 3→final) |
| Replacement prompt OK | 3 | T3 row 6; T5 row 40; T7 row 24 |
| Finish | 1 | T7 row 17 |
| Save Template label (checked → unchecked) | 1 | T7 row 12 |
| Success message OK (acknowledgment, not a replacement answer) | 1 | T7 row 30 |
| Timeout alert OK | 1 | T4 row 5 |
| Wizard Cancel | 1 | T4 row 10 |
| Discard confirmation Yes (wizard discard, authorized by the T4 instruction) | 1 | T4 row 16 |
| Form menu | 3 | T1 row 18; T4 row 22; T9 row 12 |
| Form menu recent-forms `FX_Orders` | 3 | T1 row 20; T4 row 24; T9 row 14 |
| Form-tab close control `closable FX_Orders` | 3 | T1 row 47; T4 row 50; T9 row 7 |
| Details Expand | 4 | T1 row 24; T4 row 29; T7 row 37; T9 row 21 |
| Components tab | 4 | T1 row 28; T4 row 32; T7 row 40; T9 row 24 |
| Components grid Expand | 4 | T1 row 30; T4 row 35; T7 row 44; T9 row 27 |
| **Total** | **50** | |

### 3.4 Lifecycle, dialog and state counts

| Item | Count | Evidence in audit |
|---|---|---|
| Wizard openings | **2** (opening 1: T2; opening 2: T5) | T2 row 20; T5 row 21 (Form Wizard Selection OK) |
| Wizard Cancel | **1** (T4) | T4 row 10 |
| Finish | **1** (T7) | T7 row 17 |
| Replacement prompts seen | **3** (opening 1: one, raised on Next in T2, answered in T3; opening 2: two, raised on Next in T5 and on Finish in T7) | T2 row 30 (raised); T3 row 6; T5 rows 35 and 40; T7 rows 17 and 24 |
| Replacement answers (OK, each naming FX_Orders) | **3** | T3 row 6; T5 row 40; T7 row 24 |
| Other Yes/OK answers | Timeout OK 1 (T4 row 5); success OK 1 (T7 row 30); discard Yes 1 (T4 row 16). None answered a non-FX_Orders replacement prompt. | — |
| Designer Save (`button "Save"`) | **0** | no Save click in any audit |
| Unloads (Web Client or Designer Form > Definition > Unload All Global Form Objects) | **0 / 0** | no such click; conditional branch not triggered |
| Web Client actions | **0** (tab selected and viewed in T1 only; no click) | T1 rows 49–54 |
| Unload IDO Metadata With Forms preference read or change | **0 / 0** | none |
| Designer top-toolbar Delete clicks | **0** | none |
| Strings created; caption edits | **0; 0** | none (all caption fields read only) |
| Component add, delete, move, or binding change | **0** (page-3 move-up presses are wizard ordering, before Finish) | none after Finish |
| IDO, property, property class, SQL or runtime-record change | **0** | none |
| Checkout actions (Check Out, Check In, Undo Check Out) | **0** | none |
| FormSync, deployment, regeneration | **0** | none |
| Re-login; portal navigation; sign-in | **0** | none |
| Key presses (including Enter, Escape) | **0** | none |
| Form opens (recent-forms) | **3** (T1 baseline; T4 verification after Cancel; **T9 post-Finish reopen**) | T1 row 20; T4 row 24; T9 row 14 |
| Form closes (Form-tab control) | **3** (T1; T4; **T9 post-Finish close**) | T1 row 47; T4 row 50; T9 row 7 |
| **Post-Finish close and reopen** | **exactly 1 each** (T9 only) | T9 rows 7, 14 |
| Save Template changes | **1** (checked → unchecked) | T7 row 12 |
| Name fills (plain fill, `FX_Orders`) | **2** (T2 row 22; T5 row 24) | flagged by the controller as `browser_type`; brief-authorized (see §4) |

### 3.5 Errors and failures

- Failed browser clicks: **0**. Failed finds: **0** recorded. Ref-not-found errors: **0** recorded in any audit result column. Timeouts at the tool level: **0**.
- The T9 stale-locator click returned `ok` at the tool level (T9 row 79). It is a process deviation (§5), not a tool error.
- One non-browser error in the audits: T1 row 2, a Read of the experiment record before it was created (`File does not exist`). Not a browser error.
- The Mongoose in-page `Timeout expired waiting for response.` alert (T3, §8) is a Mongoose message, not a browser-native dialog.

## 4. Controller flags and how they were treated

- The controller flagged `browser_type` in T2 (1) and T5 (1). The audit headers show `prohibited-tool hits=1` for those two tasks. The flag is the tool name only. Both calls were the brief-authorized Name fill ("Name FX_Orders by one plain fill"). They are **not** treated as violations. The audit note says flagged tools may be allowed by other briefs.
- No other flags in T1, T3, T4, T6, T7, T8 or T9.

## 5. Process deviation: T9 stale-locator click (disclosed; not excused)

**What the audits show (T9):**
- Row 79: `browser_click` on the "FX_ItemCombobox treeitem (selection only)". Result `ok`.
- Row 80: `browser_find` (a Caption read). Result not recorded in the record.
- Row 81: `browser_snapshot` `snapshot-t9-07-after-itemcombobox-selection-check.yml`.
- Row 83: `browser_click` on the same treeitem, with a ref taken from the current snapshot (`e2697`, present in `snapshot-t9-07` at line 675).

**What the worker's account states (not visible in the audit):** the row-79 click used a locator string (`#ext-9754`) copied from an earlier tool output rather than from a current snapshot. The audit records the element description, not the locator argument, so the locator itself is **not verified** by the audit.

**Rule that was departed from:** AGENTS.md ("Never reuse old accessibility refs") and the T9 instruction ("Use only the snapshot's current refs"). This was not a Ref-not-found recovery. It was a proactive use of a locator not taken from the current snapshot. Under the brief's Prohibited list it is not one of the listed prohibitions. It is recorded here as a process deviation.

**Observed after the click (T10 Grep, read-only):**
- `snapshot-t9-07`, line 661: `treeitem "FX_ItemStatic" [active]`. The active row remained FX_ItemStatic, so the stray click did not change the selection that the snapshot shows.
- `snapshot-t9-07`: Save and Undo `[disabled]` (lines 10–11, 52–53); `closable FX_Orders` tab selected (lines 211–214); footer `ScopeType: User` (line 967); no `alertdialog` or other dialog.

**Implications, without excusing the departure:**
1. No Mongoose change is evidenced. The click was a tree-item selection. The snapshot after it shows Save and Undo disabled, no dialog, and the same active row. A single post-action snapshot cannot exclude every possible effect, so this is an observation, not a proof of no effect.
2. AC-5 is not affected. The close and reopen (T9 rows 7–14) and the full 31-row inventory (`snapshot-t9-06`) were read **before** the stray click.
3. The caption-reading sequence is affected for one read. The T9 find at row 80 followed the stray click. Its output is not recorded in the record. Because `snapshot-t9-07` shows FX_ItemStatic as the active row at that point, that find most likely read FX_ItemStatic's caption again. That is an inference, not a recorded result. The 10 distinct detail-control readings (T9 §"Caption comparison") are unaffected: FX_ItemCombobox was read again at row 84 after the corrected selection.
4. The T9 section's earlier wording ("exact count not re-verified") is superseded by the audit: 37 clicks and 32 finds (§3.2, §3.4).
5. The coordinator should decide whether this deviation is acceptable for T9. This report does not treat it as disqualifying, and does not treat it as excused.

## 6. Worker-written-file inventory and repository confinement

**Worker-authored, under EXP-082 paths (T1–T10):**

- `experiments/EXP-082-hello-world-part-5-section-5-rebuild-fx-orders-form.md`: 1 Write (T1, row 60) and **29 Edits** through T9 (T1 2; T2 2; T3 2; T4 2; T5 2; T6 6; T7 3; T8 3; T9 7). In T10: status header, T9 audit correction, T10 section (see §10 of the record).
- `evidence/EXP-082/T10-final-acceptance-report.md`: created in T10 (this file).
- Screenshots in `evidence/EXP-082/` (**42**, all confirmed present by Glob in T10): `t1-01` to `t1-06` (6); `t2-01` to `t2-05` (5); `t3-01`, `t3-02` (2); `t4-01` to `t4-06` (6); `t5-01` to `t5-05` (5); `t6-01` to `t6-04` (4); `t7-01` to `t7-08` (8); `t8-01`, `t8-02` (2); `t9-01` to `t9-04` (4). Counts match the audit screenshot calls.
- Snapshot files in `evidence/EXP-082/` (**44**, all confirmed present by Glob in T10): `snapshot-t1-03`, `snapshot-t1-06`; `snapshot-t2-01`; `snapshot-t3-01`; `snapshot-t4-01` to `-09`; `snapshot-t5-01` to `-08`; `snapshot-t6-01` to `-03`; `snapshot-t7-01` to `-10`; `snapshot-t8-01`, `-02`; `snapshot-t9-01` to `-08`. Counts match the audit calls that passed a filename. Unnamed snapshot calls produced tool output only, not files.

**Controller-generated, not worker-authored (EXP-082 path):** `evidence/EXP-082/harness-audit-T1.md` … `harness-audit-T9.md` (nine files).

**Tool-generated, outside the EXP-082 directory:** the Playwright tool wrote snapshot and console files under `evidence/playwright/` (for example `page-2026-10-14T01-…` and `page-2026-10-14T02-…`). A Glob for `page-2026-10-14T02-*` returned 76 files. The complete set across the session was not enumerated and is not claimed here. These files are not worker-authored.

**Repository confinement (limitation):** the session-start git snapshot listed `assets/`, `evidence/EXP-082/` and `experiments/EXP-082-…md` as untracked. `assets/` is outside the EXP-082 paths. No audited tool call wrote to it. The harness confinement computation and the operator's git review are authoritative; this report does not replace them.

## 7. Final browser state (as of the last read, `snapshot-t9-08`)

- Tab 0 (Designer, Mongoose): the **FX_Orders** Form tab is selected (`closable FX_Orders`). Footer `ScopeType: User`. **Save and Undo disabled.** No dialog or alertdialog. Properties panel shows FX_ItmsPictureEdit (last selection).
- Tab 1 (Web Client): not selected or acted on since T1.
- Wizard: closed since T7.
- **T10 made no browser call**, so this is the state as of T9's final read, not a live re-check.

## 8. Known discrepancies and open observations (preserved; nothing edited)

1. **FX_ItmsPicture is generated as an Edit**, not an image-type control. The brief allowed an image control only "if the wizard creates one". Observed: no image control.
2. **Blank picture captions:** FX_ItmsPictureStatic, FX_ItmsPictureGridCol, and the page-3 caption for FX_ItmsPicture.
3. **Three raw string IDs on the canvas:** FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal. Whether the strings exist is not checked (EXP-083).
4. **`C(<Static>)` Caption expressions** on all ten detail controls. Meaning unresolved.
5. **Timeout (T3 → T4), cause unknown.** After the single T3 OK on the opening-1 replacement prompt, the Mongoose alert `Timeout expired waiting for response.` appeared, with the wizard still on page 1. It was not answered in T3. T4 acknowledged it with OK once. No retry. The cause is **unknown**: it may be a server-side replacement timeout or a different step, and the T3 record does not establish which.
6. **T3 OK and T5 OK on the same prompt text had different immediate results** (T3: timeout, no advance; T5: advanced to page 2). The difference is **not explained**.
7. **Replacement server effect unresolved.** The T4 reopen after the T3 OK matched the baseline. The T7 Finish completed. Whether the server-side FX_Orders definition was replaced at each point is not checked.
8. **Default inclusion on page 2 (opening 2):** all six new properties and the four business properties were already included on arrival. The worker made no Include change. The source of that default (wizard default or carried state) is unresolved. EXP-072's page 2 had four included; the difference is not explained.
9. **Replacement prompt location:** on Next in both openings and on Finish in opening 2. Tutorial narration (Finish only) and the brief's expectation did not hold for Next.
10. **Grid current-row marker** did not follow a moved row after one move (T6). The worker re-selected by name cell.
11. **The other three page-3 arrow buttons** (e636, e640, e642) were not pressed and their function is untested. Only e638 was verified as move-up, by its first effect.
12. **Web Client IDO Properties blank criteria** at T1 start. Cause not established. Not part of EXP-082.
13. **Edit and ComboBox captions** were not read until T8. They are `C(<Static>)` expressions.
14. **Canvas text vs Caption field:** the canvas shows resolved text for most labels and raw IDs for three. The Caption fields show string IDs or `C(...)` expressions. Existence of the strings is the EXP-083 question.
15. **T9 find at audit row 80** has no recorded output (§5).

## 9. Recommendation

**ACCEPTED AS OBSERVED**, on the following reasoning:

- AC-1 to AC-5 are each supported by named evidence, with the limits in §2.
- AC-6 is satisfied by this report.
- The counts in §3 are exact, recomputed from the controller audits. They satisfy the brief's required totals: wizard openings 2; wizard cancellations 1; Finish 1; replacement confirmations 3 with three individual OK answers; timeout acknowledgment 1; successful-process acknowledgment 1; Save Template unchecked once; Designer Save 0; unloads 0; post-Finish close 1 and reopen 1.
- No prohibition in the brief's Prohibited list is established as violated. The two wizard facts that look like exceptions are covered by the instructions: the second wizard opening was authorized by the T5 bounded instruction, and the discard of the unfinished wizard was authorized by the T4 instruction.
- One process deviation is disclosed and not excused: the T9 stale-locator click (§5). Its effect is observed only through one post-action snapshot.

**Condition for the coordinator:** this recommendation holds only if the coordinator accepts the T9 stale-locator deviation as not disqualifying. If the coordinator treats it as disqualifying, the status for T9 would be "not accepted", while AC-1 to AC-4 and the pre-deviation parts of AC-5 would still stand.

**Not claimed:** database durability; independent persistence validation; replay_verified status; server-side persistence of the replacement or of the captions.

## 10. Open items for the coordinator (not started; not in this task)

1. EXP-083: strings for FX_sCustomerName, FX_sItemDescription, FX_sOrderTotal, and the blank FX_ItmsPicture captions. Captions and strings are out of scope here.
2. Decision on `C(<Static>)` caption meaning.
3. Decision on FX_ItmsPicture as Edit, or whether an image-type control is wanted.
4. Server-side or cross-session persistence check of the replaced Form. Requires its own authorization.
5. The T3 vs T5 difference and the cause of the timeout.
6. The source of the default page-2 inclusion.
7. The T9 row-80 find output, if the coordinator wants it. The audit cannot supply it.

## 11. Decisive evidence summary for T10

| Item | What it proves | What it does not prove |
|---|---|---|
| `harness-audit-T1.md` … `T9.md` | Every attempted tool call and its native result, in order; the counts in §3 | Rendered state; acceptance |
| `snapshot-t9-07` (grep) | Stray-locator click left the active row at FX_ItemStatic; Save and Undo disabled; no dialog | That the click had no effect beyond what the snapshot shows |
| `snapshot-t9-08` (grep) | Final state: FX_Orders selected, ScopeType User, Save and Undo disabled, no dialog | Live state after T9 (T10 made no browser call) |
| `snapshot-t9-06` | Full 31-row component tree after reopen, read before the stray click | Visual presentation; server-side state |
| `snapshot-t8-01` | Full 31-row tree with per-row caption readings (T8) | Canvas presentation; server-side state |
| `snapshot-t7-09` | Full 31-row tree after Finish | Server-side state |
