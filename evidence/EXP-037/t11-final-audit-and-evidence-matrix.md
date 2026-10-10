# EXP-037 — Final repository-only audit and acceptance evidence matrix (corrected in T12)

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 11 · Task T12 (correction of the T11 matrix)
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `78361221-6685-4bed-a1f5-6bc9be474097`)
Method: **zero browser calls; no Mongoose interaction.** The AC numbering below follows the coordinator's canonical definitions for this run (T12 instruction). The prior T11 numbering (AC-1…AC-10 as "proposed") is superseded. Every citation was re-checked with Grep or Read against the saved file in this task.

## 0. Limits (read first)

1. The worker cannot read the brief's verbatim text. The canonical AC definitions in §1 come from the coordinator's T12 instruction. They are used as given.
2. Decisive claims rely on accessibility snapshots (re-checked by Grep) and on viewport captures recorded as viewed. Filenames alone are not treated as proof.
3. Ordinary close and Designer reopen do not establish database durability, cache eviction, metadata unloading, or server-side serialization. This matrix does not claim them.

## 1. Acceptance matrix (canonical AC-1 … AC-10)

| AC | Canonical definition | Status | Decisive evidence (repo-relative, rechecked) | What it establishes | Limitations |
|---|---|---|---|---|---|
| **AC-1** | Repository prerequisite review, plus an independent authenticated User-scope Designer preflight and the actual Form scope | **Supported** | Repository review: `evidence/EXP-037/t1-repository-review-notes.md` (§1 path reconciliation; §2 workflow; §3 Prompt gap); `experiments/EXP-037-…md` T1 section. Designer preflight: `evidence/EXP-037/p2-scope-dialog-viewport.png` (viewed: Scope User; User `anton.ramos@3mworks.com.ph`, pre-OK); `p3-designer-settled-snapshot.md` line 237 (footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`); `p3-designer-settled-viewport.png` (viewed). Web Client identity: `t10-01-preflight-snapshot.md` lines 36–54. | Repository paths confirmed; documented workflow reconciled before any mutation; Designer usable in User scope with no reauthentication; actual Form scope read from the footer and the Form's Version. | The raw transcript path is `docs/mongoose/transcripts/raw/…` (brief said `transcripts/raw/…`). The local guide does not document the Prompt parameter labels; they were confirmed only in the live editor (AC-3). |
| **AC-2** | Pre-mutation target Form identity, clean state, sole Button baseline, blank Primary, and absence of a conflicting handler | **Supported** (rendered Designer; not database-wide) | Target identity: `t3-05-after-recent-select-snapshot.md` (heading lines 210–214; Name line 253; Version line 277; footer line 340); `t3-06-form-opened-viewport.png` (viewed). Clean: `t3-10-button-selected-snapshot.md` lines 10–13, 52–53. Sole Button: `t3-09-components-expanded-snapshot.md` (one child; `PushButton 0 0`). Button Caption/Type/header: `t3-10…` lines 289, 335, 346. Primary blank: `t4-07-after-expand-all-snapshot.md` lines 641–652 (empty value cell); `t4-09-events-scrolled-primary-viewport.png` (viewed). No conflicting handler: `t4-11-event-handlers-tab-snapshot.md` lines 232–248 (no rows); `t4-12-event-handlers-tab-viewport.png` and `t4-13-form-tab-event-handlers-viewport.png` (viewed; no rows in both selections). Layout non-editing read: `t4-15-form-tab-expanded-snapshot.md` lines 457–505. | Target is the User-scoped Form with the expected Name, Version, and footer; one Button with Caption `Factory Test Button` and displayed Type `PushButton`; Primary is blank; no `FX_ButtonPromptEvent01` in the rendered handler list. | The handler absence is the Designer's rendered list for this open Form, not a database-wide absence. Layout: `GridLeft` (the EXP-036 wizard value) is not shown in the Layout group, so layout is only partly baselined (Splitter None; Pane scroll bars As Needed; Unit Char; Size 120; 40). Caption literal vs string-resource representation not distinguished. Type `PushButton` is the grid label; component type `Button` comes from the header `(Button)`. |
| **AC-3** | Pre-Save custom event `FX_ButtonPromptEvent01` with exactly one sequence-0 Prompt action and literal `Factory Test Prompt` | **Supported** (unsaved definition, rendered) | Event created: `t5-08-after-ok-snapshot.md` (handler row, Event `FX_ButtonPromptEvent01`, Sequence 0, Disabled False). Type `Prompt`: `t5-12-response-type-prompt-selected-viewport.png` (viewed). Live dialog before entry: `t5-15-after-parameters-click-viewport.png` (viewed; OK checked and default; Event To Generate blank; other responses unchecked). Literal message: `t5-17-message-entered-viewport.png` (viewed). Summary: `t5-19-pre-save-handler-state-snapshot.md` (`PROMPT(Factory Test Prompt) ICON(DEFAULT) RESPONSE(OK()) DEFAULTRESPONSE(OK)`); `t7-02-designer-selected-snapshot.md` line 256 (same string, pre-Save). | One named event; one sequence-0 action; Type Prompt; exact literal message; OK-only response with no associated event, as rendered before Save. The Prompt parameter labels (Message Text, Icon, Responses) were observed in this run's live dialog. | The unsaved definition is the only pre-Save evidence for the action's internal storage; no storage claim. Primary column truncation is not relevant here. The "..." string-resource button was not used. The T5 URL change (see §4) occurred during this step. |
| **AC-4** | Pre-Save Events > Primary assignment to `FX_ButtonPromptEvent01`, with unchanged Button properties | **Supported** (committed in the unsaved definition, rendered) | Primary blank before: `t6-08-primary-before-edit-viewport.png` (viewed). Picker option selected and committed: harness audit `harness-audit-T6.md` orders 24, 29, 34 (picker open, option select, Enter). Committed, no editor: `t6-13-primary-after-enter-snapshot.md` lines 601–604 (`gridcell "FX_ButtonPromptEvent01" [active] [selected]`, combobox no longer active); `t6-14-primary-committed-viewport.png` (viewed). Pre-Save gate: `t7-02-designer-selected-snapshot.md` lines 662–663 (`treeitem "Primary"` / `gridcell "FX_ButtonPromptEvent01" [selected]`); `t7-03-pre-save-viewport.png` (viewed). Button Name/Caption/Type unchanged: `t6-13…` lines 315, 327–329, 337–339. | Primary is `FX_ButtonPromptEvent01`, committed (not in an editor), and no other Button property changed (audit T6 shows no other property edit). | The Primary column is truncated on screen; the full value is from the accessibility tree. The Components-grid "Event to generate" column remained blank pre-Save (its meaning is unresolved; see §4). |
| **AC-5** | Exactly **one** ordinary Designer Save, clean post-Save state, unchanged saved configuration | **Supported** (one click, one audited POST, clean rendered state) | One click: `harness-audit-T7.md` order 8 (`element=Save toolbar button (ordinary Designer Save, single click)`). Network: `harness-audit-T7.md` orders 9–10 and 28; `SaveChanges` request count one (`[200]`), recorded in `t7-save-verification-notes.md` lines 27–29. Response body: `t7-save-verification-notes.md` line 28 (`{"Success":true,"Message":"Form [FX_SingleButtonLab01] and global object(s) were saved.","Payload":[]}`). Clean post-Save: `t7-04-post-save-snapshot.md` lines 10–13, 52–53 (Save `[disabled] [active]`, Regenerate and Undo `[disabled]`, no dialog); `t7-05-post-save-viewport.png` (viewed; Save icon greyed). Unchanged configuration: `t7-04…` line 256 (summary), lines 663 (Primary), 376–398 (Name, Caption, Type). | One Save call was issued and the server returned `Success: true` for `FX_SingleButtonLab01` (single audited click; one POST). The Designer rendered clean afterward with the same handler, Primary, and Button properties. | **The `Success: true` response body is not saved as a file.** It is recorded in `t7-save-verification-notes.md` line 28, which quotes the tool output read at audit order 10. The Save is grounded in the audited click and the clean rendered state, not in a saved body file. Server acceptance of the call is not durability. |
| **AC-6** | Exactly one ordinary target Form-tab close, with no unsaved-changes prompt | **Supported** | One click: `harness-audit-T8.md` order 8 (`element=closable FX_SingleButtonLab01 close control on the FX_SingleButtonLab01 Form tab`). Pre-close: `t8-02-designer-preclose-snapshot.md` (heading lines 211–214; footer line 539; Save/Regenerate/Undo disabled). Post-close: `t8-04-post-close-snapshot.md` (no closable control, no dialog; footer line 237); `t8-05-post-close-viewport.png` (viewed; heading and close control gone; canvas blank; User footer). Console `error` 0: `harness-audit-T8.md` order 13. | One ordinary close of the target tab; the tab disappeared; no unsaved-changes prompt or error observed; the Designer remained responsive in User scope. | Close is recorded in the same client session. The brief's "unsaved-changes prompt" stop rule did not arise. |
| **AC-7** | Exactly **one** supported reopen of the same User-scoped Form, in a clean state | **Supported** (one recent-forms click; rendered clean state) | One click: `harness-audit-T9.md` order 10 (`element=FX_SingleButtonLab01 entry in Form menu recent-forms list`). Menu entry: `t9-03-form-menu-open-snapshot.md` line 13. Reopened: `t9-04-post-reopen-snapshot.md` (heading lines 211–214; footer line 518; Save/Regenerate/Undo disabled lines 10–13, 52–53); `t9-05-post-reopen-viewport.png` (viewed). Final: `t9-15-final-readonly-snapshot.md` lines 10–13, 52–53, 877. Not a cold URL: the URL's `MGForm` came from the menu selection; no navigate tool used (audit T9). | One supported reopen; reopened Form shows the same Name and Version, the User footer, and a clean state. | The reopen and close occurred in one browser client session, so a client-side cached definition is not excluded. The first open in T3 was an initial open, not a reopen (`harness-audit-T3.md` order 11). |
| **AC-8** | After reopen: the recovered event, single Prompt action, exact message, Primary assignment, and original Button identity, Type, Caption, and count | **Supported** (rendered); **partial** for reopened layout | Handler: `t9-09-after-group-click-snapshot.md` line 251–256 (one group; one row 0 / Prompt / false / exact summary); `t9-10-event-handlers-expanded-viewport.png` (viewed). Primary: `t9-13-button-selected-snapshot.md` line 651 (`FX_ButtonPromptEvent01`). Button identity/Caption/Type: `t9-13…` line 289 (header `FX_SingleButton01 (Button)`), line 319 (Name), line 335 (Caption `Factory Test Button`), line 346 (Type `PushButton`); `t9-14-button-recovered-viewport.png` (viewed). Count: `t9-12-components-expanded-snapshot.md` line 255 (`Pane (00)`) and line 269 (one child `FX_SingleButton01 PushButton 0 0 FX_ButtonPromptEvent01`). Pre-save comparators: `t7-04-post-save-snapshot.md` lines 251–256, 376–398, 663; `t7-06-post-save-components-snapshot.md` lines 251–280. | Handler, action, message, Primary, Button identity, Type, Caption, and count match the pre-Save observations as rendered. | **Layout is only partly recovered:** the Splitter (None) and Pane scroll bars (As Needed) are visible in `t9-05-post-reopen-viewport.png`; Unit and Size (`Char`; `120; 40`) were **not re-read** after reopen (no such rows in any T9 snapshot). **Full layout recovery is not claimed.** The collapsed handler group and the "Event to generate" change are in §4. Primary is truncated on screen; the full value is from the accessibility tree. Caption literal vs string-resource representation is unresolved. |
| **AC-9** | Optional runtime Prompt test | **Not applicable** (gate not passed; no activation; no Prompt observed) | `harness-audit-T10.md` order 7 (`Open` toolbar click, locator `mgtoolbarbutton-1100`, timed out at "waiting for element to be visible, enabled and stable" after 5 s). Post-timeout: `t10-03-after-open-timeout-snapshot.md` (no dialog; no Form loaded); `t10-02-webclient-preflight-viewport.png` (viewed; idle; no dialog). Gate notes: `t10-runtime-gate-notes.md`. Button activations: 0 (no Button click in any audit beyond Designer selection clicks). | Runtime access was not established; the optional runtime check did not run; no Prompt display, message, or dismissal is claimed. | Suspected environment blocker (the same control timed out in EXP-036 T3). **Runtime Prompt behaviour is unresolved.** Not retried, per the brief. The T10 screenshot timeout and retry are disclosed in §4. |
| **AC-10** | Final lifecycle, repository-confinement, recovery-allowance, and limitation audit | **Supported** by this matrix, with the open items in §4–§5 | This file (§2 lifecycle counts; §3 comparison; §6 confinement; §5 allowances). Controller audits: `evidence/EXP-037/harness-audit-T1.md` … `harness-audit-T10.md` (controller-generated; not worker-authored). | Counts reconcile to the controller audits (§2); confinement and allowances are stated; limitations preserved. | See §4 and §5. This is an audit, not an acceptance decision. |

## 2. Lifecycle and action counts (reconciled to controller audits)

| Item | Required | Recorded | Source |
|---|---|---|---|
| New Forms | 0 | **0** | No Designer New or Form-wizard action in any audit. The one "New" click (T5 audit order 9) was the Event Handlers toolbar New. |
| New Buttons or components | 0 | **0** | No toolbox or canvas-placement action in any audit. `FX_SingleButton01` predates EXP-037 (EXP-036 T9). |
| Custom form events | 1 | **1** (`FX_ButtonPromptEvent01`) | `harness-audit-T5.md` orders 9, 15, 18. |
| Sequence-0 Prompt actions | 1 | **1** | `t5-08`, `t5-19`; recovered `t9-09` line 251–256. |
| Literal message | `Factory Test Prompt` | **Yes** | `t7-04` line 256; `t9-09` line 256. |
| OK-only response, no associated event | Yes | **Yes** | `t5-15` (viewed); summary `RESPONSE(OK()) DEFAULTRESPONSE(OK)`. |
| Primary assignments | 1 | **1** | `harness-audit-T6.md` orders 24, 29, 34; `t6-13`; `t9-13` line 651. |
| Standard events selected for Primary | 0 | **0** | `harness-audit-T6.md` order 29 selected only `FX_ButtonPromptEvent01`. |
| Designer Save clicks | 1 | **1** | `harness-audit-T7.md` order 8. |
| `SaveChanges` POSTs | 1 | **1** (`[200]`) | Network audit `harness-audit-T7.md` orders 9–10, 28; `t7-save-verification-notes.md` lines 27–29. |
| Target Form-tab closes | 1 | **1** | `harness-audit-T8.md` order 8. |
| Supported target Form reopens | 1 | **1** (recent-forms) | `harness-audit-T9.md` order 10. Preceded by one initial open in T3 (`harness-audit-T3.md` order 11), not a reopen. |
| Runtime Button activations | 0 | **0** | No Button click in T10; the T3, T6, and T9 Button clicks were Components-grid selections (`harness-audit-T3.md` order 25; `T6` order 12; `T9` order 38). |
| Prompt dismissals | 0 | **0** | No Prompt observed. |
| Failed Web Client `Open`-control attempts | 1 | **1** | `harness-audit-T10.md` order 7 (error). Not retried. |
| Web Client screenshot timeout, then retry | (technical) | **1 timeout, 1 successful retry** | `harness-audit-T10.md` orders 4 (error) and 5 (ok). A read-only capture, not a state action. Disclosed separately from the Open click. |
| Designer launches | 1 (cumulative) | **1** | `harness-audit-T2.md` order 6. |
| Key presses | — | **2** | T4 ArrowRight (`harness-audit-T4.md` order 14; no change). T6 Enter (`harness-audit-T6.md` order 34; Primary commit). |
| Text entries (`browser_type`) | intended only | **2** | `harness-audit-T5.md` orders 15 (handler name) and 43 (literal message). |
| JavaScript / evaluate / run-code authored by the worker | 0 | **0** | No evaluate or run-code tool in any audit. The tool-generated wrappers are disclosed in §4. |
| Authentication, log-out, session change | 0 | **0** | None. |
| Cold MGForm navigation | 0 | **0** | No navigate tool in any audit. |
| Regenerate, unload, preference, diagnostics | 0 | **0** | None in any audit's element arguments. |

## 3. Pre-Save versus reopened comparison (AC-8 detail)

| Property | Pre-Save (source) | Reopened (source) | Match |
|---|---|---|---|
| Form Name | `FX_SingleButtonLab01` (`t7-07-post-save-form-properties-snapshot.md` line 311) | `FX_SingleButtonLab01` (`t9-04-post-reopen-snapshot.md` line 253) | Yes |
| Form Version | `User version for user anton.ramos@3mworks.com.ph` (`t7-07` line 331) | same (`t9-04` line 277) | Yes |
| Scope footer | User / `anton.ramos@3mworks.com.ph` (`t7-04` line 856) | same (`t9-04` line 518; `t9-15` line 877) | Yes |
| Clean state | Save, Regenerate, Undo disabled (`t7-04` lines 10–13, 52–53) | same (`t9-15` lines 10–13, 52–53) | Yes |
| Handler group and row | One group; 0 / Prompt / false / summary (`t7-04` 251–256) | Same (`t9-09` 251–256) | Yes |
| Primary | `FX_ButtonPromptEvent01` (`t7-02` line 663) | `FX_ButtonPromptEvent01` (`t9-13` line 651) | Yes |
| Button Name | `FX_SingleButton01` (`t7-04` line 376) | `FX_SingleButton01` (`t9-13` line 319) | Yes |
| Button Caption | `Factory Test Button` (`t7-04` line 388) | `Factory Test Button` (`t9-13` line 335) | Yes |
| Button Type | `PushButton` (`t7-04` line 398) | `PushButton` (`t9-13` line 346) | Yes |
| Component count under `Pane (00)` | 1 (`t7-06` lines 251–280) | 1 (`t9-12` lines 255–269) | Yes |
| Layout values | Full set (`t7-07` lines 479–519) | Splitter None and Pane scroll bars visible (`t9-05` viewport); Unit and Size **not re-read** | **Partial** |
| Canvas position | ~(450–565, 250–285) (`t3-06`, `t7-05`) | same (`t9-05`, `t9-14` viewports) | Yes (visual) |

## 4. Observations and disclosures (not resolved here)

1. **URL `MGForm` disappeared during editing (T5).** After the first OK in the handler Name dialog, the page URL lost `&MGForm=FX_SingleButtonLab01` (`t5-handler-configuration-notes.md`). The Form tab stayed selected and the handler state persisted in every later snapshot. No reload, navigation, or dialog was observed. **Cause unresolved.** Identity was taken from the rendered heading and footer throughout.
2. **URL `MGForm` returned on reopen (T9).** The URL regained `MGForm=FX_SingleButtonLab01` when the recent-forms entry was selected (`t9-03`, `t9-04`). This is the menu's own parameter; no navigate tool was used. **Meaning unresolved.**
3. **Handler group rendered collapsed after reopen (T9).** `FX_ButtonPromptEvent01` appeared as a collapsed group (`t9-08-event-handlers-recovered-viewport.png`, viewed). Its action row was visible only after one grid-row click expanded it (`t9-09`, audit T9 order 25). **Cause unresolved** (one run; reopen default versus tree default unknown). This click was a view-only expansion, not an edit, and was disclosed in the T9 notes.
4. **"Event to generate" column changed (T9).** Blank at T3, T6, and T7 (`t3-09`, `t6-06`, `t7-06`). After reopen it reads `FX_ButtonPromptEvent01` (`t9-12` line 269; `t9-14` viewport, truncated `FX_ButtonPromptEve…`). Whether this reflects the Primary event, a derived display, or something else is **unresolved**. The Primary value is consistent across T6, T7, and T9.
5. **Save-response body is not stored as a file.** The `SaveChanges` body is recorded only in `t7-save-verification-notes.md` line 28. The network tool output was not written to a file. The Save is grounded in the single audited click and the clean rendered post-Save state (AC-5).
6. **Tool-generated wrappers and Ext-id locators (disclosed separately).** Each browser tool result displayed a `Ran Playwright code` block. Some blocks use Ext component ids (for example `#button-1305`, `#mgedit-1569-inputEl`, `#ext-1065 > …`). These are generated by the tool wrapper from the snapshot ref or accessibility role. The worker authored no script, no evaluate or run-code call, no Ext store access, and no DOM mutation. Every interaction was a native click, key, type, or read through the permitted tools. The coordinator should decide whether id-based wrapper locators are acceptable under the "no synthetic DOM mutation" rule. This disclosure does not claim they are acceptable.
7. **T10 screenshot timeout and retry.** The first screenshot attempt in T10 timed out at "waiting for fonts" (`harness-audit-T10.md` order 4). The second attempt succeeded (order 5). This was a read-only capture retry on the same tab. It is separate from the Open click, which was not repeated.
8. **Unexplained: the T10 `Open` click.** The `Open` click timed out (`harness-audit-T10.md` order 7) and was **not** repeated (`harness-audit-T10.md` has no second Open click). The T10 post-timeout snapshot (`t10-03`, audit order 8) was a planned outcome-state verification after that one unsuccessful control action, per the coordinator's T12 ruling. It is not an extra recovery attempt.

## 5. Recovery allowance (ambiguity recovery)

- **Corrected inspection:** consumed in **T4**. The ArrowRight press (`harness-audit-T4.md` order 14) was the corrected-inspection attempt in the T4 notes. Per the coordinator's T12 ruling, this exhausts the corrected-inspection allowance.
- **Fresh untargeted recovery snapshot:** consumed in **T5**. The snapshot `t5-06` (`harness-audit-T5.md` order 13) was the fresh snapshot after `t5-04` did not show the name dialog. Per the coordinator's T12 ruling, this exhausts the fresh-snapshot allowance.
- **T10 post-timeout snapshot:** a planned outcome-state verification (coordinator ruling), not a recovery attempt. Disclosed in §4 item 8.
- No recovery retry of a mutation occurred after any allowance was spent.

## 6. Repository confinement

- **Worker-authored writes (T1–T12):** `experiments/EXP-037-custom-form-event-and-prompt-handler-recovery-acro.md` (edits only); `evidence/EXP-037/` notes `t1-repository-review-notes.md`, `t2-preflight-notes.md`, `t3-baseline-notes.md`, `t4-inventory-notes.md`, `t5-handler-configuration-notes.md`, `t6-primary-assignment-notes.md`, `t7-save-verification-notes.md`, `t8-close-notes.md`, `t9-reopen-verification-notes.md`, `t10-runtime-gate-notes.md`; and this file, `t11-final-audit-and-evidence-matrix.md` (corrected in T12).
- **Browser-tool outputs under `evidence/EXP-037/`:** the `.md` snapshots and `.png` captures were written by the browser tool at the filename each call requested. They sit inside the EXP-037 evidence directory.
- **Controller-generated:** `evidence/EXP-037/harness-audit-T1.md` … `harness-audit-T10.md`. Not worker-authored.
- **Tool-generated, gitignored:** `evidence/playwright/*` (browser-tool logs, console output, and page YAML). Disclosed separately. Not deleted or altered.
- **Read only (outside confinement):** repository guidance and prior records (`AGENTS.md`, EXP-036 records, the component recipes, the Part 3 transcript and raw transcript, the form-events and response-types guides, `web-designer.md`, `evidence/EXP-036/t11-13-button-selected-snapshot.md`). Reads do not change files.
- **Not checked here:** a Git-level diff (Bash disabled). The harness computes confinement from before/after Git state. No worker write outside the EXP-037 record or evidence directory appears in any audit's Write or Edit list.
- **Planned filename mismatch:** the planned evidence names in the record (`p0-…`, `b1-…`, `m1-…`, `s1-…`, `o1-…`, `v1-…`, `rt1-…`) were not used. The actual files use the `tN-…` prefix. The record's planned matrix is historical.

## 7. Limitations (preserved)

- **Layout only partly recovered** after reopen (Unit and Size not re-read). Full layout recovery is not claimed.
- **Storage durability, serialization, and cache eviction** are not established. The Save response shows server acceptance of one call; the reopen shows the Designer's rendering, possibly from client state.
- **Runtime Prompt behaviour** is untested (AC-9 not applicable). No message, display, or dismissal is claimed.
- **Unresolved observations:** the `MGForm` URL behaviour (§4 items 1–2), the collapsed handler group after reopen (item 3), and the "Event to generate" display change (item 4).
- **Caption representation** (literal vs string resource) is unresolved.
- **The Prompt parameter labels** were observed in this run's live dialog only.

## 8. Classification

Strictly **observed Form-definition recovery across an ordinary Designer close and a supported recent-forms reopen**, in one browser client session, as rendered. **Not** replay_verified. **Not** database durability, cache eviction, metadata unloading, or server-side serialization. Runtime Prompt behaviour is **not tested**.

## 9. Final statuses (for coordinator acceptance review)

| AC | Status |
|---|---|
| AC-1 | Supported |
| AC-2 | Supported (rendered; layout partial) |
| AC-3 | Supported |
| AC-4 | Supported |
| AC-5 | Supported (response body not stored as a file; grounded in the audited click and rendered state) |
| AC-6 | Supported |
| AC-7 | Supported |
| AC-8 | Supported; **reopened layout partial** |
| AC-9 | Not applicable (gate not passed; no activation) |
| AC-10 | Supported as an audit; open items in §4–§5 |
