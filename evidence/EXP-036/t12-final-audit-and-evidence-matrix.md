# EXP-036 — T12 final read-only audit and evidence matrix

Date: 2026-10-09 (worker session 998a04a2-e35b-4678-a773-d7ab4eaf9ce6; task_message_id 31ada3d4-7d3d-4837-9f55-dd2be7d6db19; run R-20261009-231134-1eF3, cycle 15, task T12).
Scope of this document: reconciliation of T1–T11 evidence against the EXP-036 requirements. It is a read-only audit. No Mongoose object was changed, saved, closed, reopened, or regenerated in T12.

## 1. Final recovered-state audit (T12 read-only inspection)

Evidence: `t12-01-final-readonly-snapshot.md` (accessibility), `t12-02-final-readonly-viewport.png` (rendered, viewed).

| Check | Observed | Source |
|---|---|---|
| Designer tab selected; only Designer tab | Tab 1 selected; tab 0 is the Web Client | t12-01 tab list |
| Editing scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | t12-01 line 417 (`e570`), t12-02 status bar |
| Target Form identity | Form tab heading `FX_SingleButtonLab01`, URL `MGForm=FX_SingleButtonLab01` | t12-01 lines 207, 250 area |
| Clean state | Save `[disabled]`; Regenerate disabled (T12 snapshot line 10–11) | t12-01 |
| Child under `Pane (00)` | Exactly one row `FX_SingleButton01 PushButton 0 0` under `Pane (00)` | t12-01 lines 250–266 |
| Name | `FX_SingleButton01` (property grid value) | t12-01 line 314; t12-02 |
| Type (native Toolbox Button) | **`PushButton`** (literal displayed value; not `Button`) | t12-01 line 266 (gridcell `PushButton`); t12-02 |
| Caption | `Factory Test Button` (full value) | t12-01 line 330; t12-02 |
| Dialogs / prompts | None | t12-01 (no `dialog`/`alertdialog`) |

Read-only inspection notes: no property editor was opened; no row was clicked; no Save, Regenerate, close, reopen or placement occurred. The Button remained selected from T11 (the selection state was not changed in T12).

## 2. Lifecycle reconciliation

| Action | Required (brief) | Observed count | Evidence |
|---|---|---|---|
| Form created (Classic / BuildFromScratch, Save Template unchecked) | 1 | 1 (Finish 1; success-alert OK 1) | t5-02..t5-08 (wizard selection, page 1), t6-02/t6-03 (Save Template unchecked by label click), t7-02 (pre-Finish check), t7-03/t7-04 (Finish result) |
| Designer launch | 1 | 1 of 1 (T2, earlier worker session) | `t2-preflight-notes.md`, `harness-audit-T2.md` |
| Button placed (native Toolbox Button) | 1 | 1 (one coordinate click at (450, 250)) | t9-02 (armed), t9-03 (one button placed), t9-04 (one component row) |
| Name edit | 1 | 1 (committed by Enter) | t9-05, t9-06, t9-07 |
| Caption edit committed | 1 | 1 (committed by Enter, one `browser_type`) | t10-03, t10-04, t10-05, t10-06 |
| Ordinary Designer Save with Success=true | 1 | 1 (one `SaveChanges` POST, HTTP 200, body `Success: true`) | t10-07, t10-08, `harness-audit-T10.md` |
| Ordinary Form-tab close | 1 | 1 (`closable FX_SingleButtonLab01`, `e240`) | t11-02, t11-03, t11-04 |
| Recent-forms reopen | 1 | 1 (Form menu → `FX_SingleButtonLab01` entry) | t11-05, t11-06, t11-07 |
| Regenerate | 0 | 0 | all snapshots: Regenerate disabled |
| Unload / unload IDO change | 0 | 0 | none attempted |
| Cold MGForm navigation | 0 | 0 | none typed; the MGForm query changes only by Designer menu action |
| Authentication / reauthentication | 0 | 0 | none |
| JavaScript / evaluate / internal stores | 0 | 0 | none (browser evaluate tools denied) |
| Select Form row activation | 0 | 0 | T3 Cancel only |

Caveat: the `browser_click` tool reports a `Ran Playwright code` line; those lines are the tool's internal locator, not worker-written scripts.

## 3. Prior blocked interactions and operator-authorized corrections (complete)

| Task | Event | Outcome | Status |
|---|---|---|---|
| T3 | `Open` toolbar click timed out ("visible, enabled and stable") against a background Web Client tab | No state change (operator-reported); corrected click succeeded | Recovery allowance consumed (fresh snapshot 1, corrected inspection 1) |
| T3 | Screenshot timeouts (`t3-02`, `t3-10`) | No file written for `t3-10`/`t3-02` | Recorded |
| T5 | Save Template checkbox click intercepted by its display `<span>` (5 s timeout) | Not applied; Finish not clicked | Stop; no retry |
| T6 | Operator-authorized single click on the `Save Template` label text | Checkbox unchecked (`t6-02` no `[checked]`; `t6-03` empty box) | Operator-authorized correction |
| T7 | Finish clicked once; success alert OK once | Form created | Within brief |
| T8 | Canvas placement blocked (no coordinate-capable click) | Not placed; Toolbox row armed | Stop |
| T9 | Operator-stated restart of Playwright MCP tool server only (worker did not observe the restart) | `browser_mouse_click_xy` available | Recorded as operator statement |
| T9 | One coordinate click at (450, 250) | One Button placed | Within brief |
| T9 | Name inline editor: double-click on value `e624`, fill + Enter | `FX_SingleButton01` committed | Within brief |
| T9 | Caption double-click on value `e644` resolved to the dropdown arrow; resource-key list opened; Escape closed it | No resource selected; Caption blank | Recorded |
| T9 | One `press_key` `F` into the Caption field | No visible character; destination **unobserved** | Unresolved, not corrected |
| T10 | Caption coordinate double-click at (1740, 254) on the value text area | Editor (combobox) opened; no resource list | Operator-authorized |
| T10 | Caption entered once, committed by Enter | Caption `Factory Test Button` | Within brief |
| T11 | `browser_tabs select` index 1 failed once ("Tab 1 not found") | Retried; succeeded; no state change | Recorded |

Ambiguity-recovery allowance: consumed in T3 (one fresh untargeted snapshot and one corrected visible inspection). It was not extended. The later T6 label click, T9 coordinate placement, and T10 coordinate double-click were operator-authorized or brief-authorized steps; they are not recovery-allowance uses. This is stated because the coordinator asked for it explicitly.

## 4. Acceptance-check reconciliation

**Limitation on IDs.** The EXP-036 brief's full acceptance-check definitions (including any check beyond AC-5) are not readable from the repository. The brief is intentionally unreadable (`tools/briefs/`), and the experiment record contains only the T1 "Acceptance mapping (proposed; coordinator to confirm)" table, which has no IDs. The IDs used in earlier turns are: AC-2 (absence check; coordinator statement in T4) and AC-3 (Form creation; coordinator statement in T5). The EXP-027 record uses an AC-1..AC-8 pattern, but that is a different experiment. I have **not** bound IDs beyond AC-3 because doing so would be a guess. The coordinator must map each row below to its own definition.

| Requirement (brief) | Coordinator ID | Status | Supporting evidence (exact paths) | Limitation |
|---|---|---|---|---|
| Designer usable; User editing scope visible; no sign-in/config prompt | AC-1 (not confirmed by coordinator) | **Supported (observed)** | `evidence/EXP-036/t2-07-designer-settled-snapshot.md`, `t2-08-designer-settled-viewport.png`, `t12-02-final-readonly-viewport.png` | Scope verified by rendered status bar; no scope dialog re-read at T12 |
| Absence of `FX_SingleButtonLab01` via Select Form with positive control | AC-2 (coordinator, T4) | **Supported (rendered UI, operator-confirmed)** | `evidence/EXP-036/t3-07-positive-control-settled-snapshot.md`, `t3-09-target-query-settled-snapshot.md`, `t3-11-post-cancel-snapshot.md`, `harness-audit-T3.md` | `t3-08` viewport exists but was not inspected by a worker; `t3-10` absent. Rendered result only; not database absence |
| Form created once: Classic / BuildFromScratch, Save Template unchecked, Name exact | AC-3 (coordinator, T5/T7) | **Supported (observed)** | `t5-07-wizard-selection-before-ok-snapshot.md`, `t5-09-wizard-page1-name-entered-snapshot.md`, `t6-02`, `t6-03-after-label-click-viewport.png`, `t7-02-preflight-before-finish-viewport.png`, `t7-03-after-finish-snapshot.md`, `t7-04-form-created-snapshot.md` | Save Template unchecked evidenced visually before Finish; no template-artifact inventory check. Creation persistence not separately proven |
| Form identity, ScopeType=User, ScopeName, clean state, empty baseline before Button | (within AC-3 per T7) | **Supported (observed)** | `t7-04` (Name, Version, Device Type, Form Type, Is Master, scope), `t7-05-form-created-viewport.png`, `t7-07-components-tab-baseline-snapshot.md`, `t7-08-components-baseline-viewport.png` | `Pane (00)` shown as root row; its internal type not verified |
| Exactly one native Toolbox Button placed | AC-4 (worker label in T8 report; not coordinator-confirmed) | **Supported (observed)** | `t9-02-preplacement-armed-viewport.png`, `t9-03-after-placement-click-viewport.png`, `t9-04-after-placement-snapshot.md`, `t10-06`, `t11-12-components-expanded-viewport.png` | One placement; the coordinate was grounded in `t9-02` |
| Name = `FX_SingleButton01` (identity) | not bound | **Supported (observed)** | `t9-07-after-name-commit-viewport.png`, `t10-06`, `t11-13-button-selected-snapshot.md` (full value line 314), `t12-01` line 314 | Name edit committed by Enter |
| Caption = exactly `Factory Test Button` (committed, not a resource selection) | not bound | **Supported for displayed text; literal-vs-resource UNRESOLVED** | `t10-05-post-caption-commit-viewport.png`, `t10-06-post-caption-commit-snapshot.md` (line 330), `t11-13` (line 330), `t12-01` (line 330) | Literal storage not shown by the UI; a resource with matching display text cannot be excluded |
| Type = `Button` (brief wording) | not bound | **Superseded by T13 (operator clarification).** Component type `Button` is shown in the Properties header; the property row Type shows the button style `PushButton` | Header: `t11-13` line 284 (`FX_SingleButton01 (Button)`), `t9-03` header `button1_USER (Button)`; Toolbox row `t8-03`/`t9-02` (`Button` highlighted). Row: `t9-04`, `t10-06` (`e656`), `t11-13` line 341, `t12-01` line 266 | The grid row itself does **not** display `Button`. Both values are preserved; neither is substituted for the other |
| Pre-Save property grid / canvas shows Type, Name, Caption, Form identity | not bound | **Supported** | `t10-05-post-caption-commit-viewport.png` (Name, Caption, Type, Form tab heading `FX_SingleButtonLab01`, scope bar) | Form identity visible in heading; Type shows `PushButton` |
| Exactly one ordinary Designer Save; Save returns clean without error | not bound | **Supported (observed)** | `t10-07-after-save-viewport.png` (toast `Form [FX_SingleButtonLab01] and global object(s) were saved.`), `t10-08-after-save-snapshot.md` (Save `[disabled]`), network: one `SaveChanges` POST 200, body `{"Success":true,...}` | Toast is transient; body is server message only; not an itemised persistence record |
| Reinspect saved Button before close | not bound | **Supported** | `t10-07` (Name, Caption, Type visible), `t10-08` (row `FX_SingleButton01 PushButton`, Caption) | — |
| Ordinary Form-tab close, Designer client kept, no prompt | not bound | **Supported (observed)** | `t11-02-preclose-viewport.png`, `t11-03-after-close-viewport.png`, `t11-04-after-close-snapshot.md` | — |
| Reopen the same User-scoped Form via supported Designer path; no cold URL / unload | not bound | **Supported (observed)** | `t11-05-form-menu-open-snapshot.md` (recent-forms entry `e614`), `t11-06-post-reopen-snapshot.md` (Name `FX_SingleButtonLab01` line 248; Version; scope), `t11-07-post-reopen-viewport.png` | Recent-forms reopen path as in EXP-027 and EXP-003-R2. Server-side origin of the reopened definition not established |
| Exactly one matching Button after reopen (Name, Type, Caption) | not bound | **Supported (observed)** for Name, Type (`PushButton`), Caption, and count = 1 | `t11-11-components-expanded-snapshot.md`, `t11-12-components-expanded-viewport.png`, `t11-13-button-selected-snapshot.md`, `t11-14-button-selected-property-grid-viewport.png`, `t12-01`, `t12-02` | Type is `PushButton`, not literal `Button` (see above) |
| Clean Designer after reopen (Save disabled), target Form left open | not bound | **Supported** | `t11-06`, `t12-01` (Save `[disabled]`), `t12-02` | — |
| Durability, cache eviction, metadata unloading, server serialization | not bound | **NOT TESTED; NOT CLAIMED** | — | Explicit non-claim; ordinary close/reopen does not prove these |
| Replay-verified status | not bound | **NOT CLAIMED** | — | Single run; observed only |

Acceptance declared by this worker: **none.** The reconciliation above supports the observed statuses only. Declaring acceptance is the coordinator's decision, and the unbound IDs cannot be assigned from here.

## 5. Repository confinement audit (read-only)

- `git status` cannot be run in this session: Bash is disabled. The harness computes confinement from before/after Git state. Glob ordering is alphabetical, not by modification time, so it does not show recency.
- **Files this worker wrote in T4–T12** (all under the permitted paths):
  - `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md` (status line; T4–T11 sections; T12 section added with this task).
  - `evidence/EXP-036/t4-*`, `t5-*` through `t11-*` (snapshots and PNG screenshots), and `t12-01-final-readonly-snapshot.md`, `t12-02-final-readonly-viewport.png`, `t12-final-audit-and-evidence-matrix.md`.
- Earlier-turn evidence (`t1-*`, `t2-*`, `t3-*`, `harness-audit-T*.md`) was written by earlier worker sessions or the harness, not by T12.
- **Browser-generated files:** `evidence/playwright/*` is gitignored and written by the browser tool on each call (already documented in T2). Not deleted or edited by this worker.
- **Unrelated modifications:** the session-start git status (in the harness context) listed modified paths under `tools/learning-harness/` (README, briefs/EXP-035.brief.json, harness.config.example.json, src/shadow/cli.ts, src/shadow/runner.ts, test/shadow.test.ts). This worker did not write any of them, and I could not re-verify their current state without git. They were not modified, moved, or reverted. Reported without modification, as instructed.
- No non-EXP-036 repository path was written by T12.

## 6. Conclusion (observed result; not replay_verified)

Observed at UI level, in one run: one ordinary Designer Save (`Success: true`) followed by an ordinary Form-tab close and a Form-menu recent-forms reopen of the same User-scoped Form `FX_SingleButtonLab01` recovered exactly one child Button under `Pane (00)`, with Name `FX_SingleButton01`, displayed Type `PushButton`, and Caption `Factory Test Button`. Save was disabled after reopen.

Limits (unchanged, and not claimed):
- Component type and style are both recorded. The component type is `Button` (Properties header `FX_SingleButton01 (Button)`); the property-grid Type row reads `PushButton` (button style). The row does not display the word `Button`. (Superseded wording in §4 of this matrix is corrected by T13 below.)
- Whether the Caption is stored as a literal or as a string-resource key is unresolved.
- No Forms-database durability, cache eviction, metadata unloading, or server-side serialization was tested or proven by ordinary close/reopen.
- The absence check is rendered Select Form evidence only, not database absence.
- Replay status is not claimed. This is the first observation.

## 7. T13 — final AC-1 to AC-9 reconciliation (documentation only)

No browser action, Mongoose interaction, or fresh inspection was performed in T13. This section reconciles the operator-directed AC-1 to AC-9 checks against the existing evidence paths above.

**Definition-source caveat.** The T13 directive refers to operator-provided AC-1 to AC-9 definitions. The worker context holds only the topic of each check as described in the T13 directive, plus the labels used in earlier coordinator messages (AC-2 absence; AC-3 Form creation). The verbatim text of AC-1, AC-4 and AC-9 was not in the worker context. Each AC row below states the topic it was matched on. The coordinator should confirm the AC-1 and AC-4 mapping against the authoritative text.

| Check | Topic matched | Status (operator directive) | Exact evidence paths | Limitations preserved |
|---|---|---|---|---|
| AC-1 | Designer available in User editing scope; no sign-in or configuration prompt | Supported (passed) | `t2-07-designer-settled-snapshot.md`, `t2-08-designer-settled-viewport.png`, `t4-01-designer-current-state-snapshot.md`, `t4-02-designer-current-state-viewport.png`, `t12-02-final-readonly-viewport.png` (status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`) | Scope read from the rendered status bar; the scope-dialog text was recorded in T2 notes, not re-read at T12 |
| AC-2 | Absence of `FX_SingleButtonLab01` by Select Form with an observable positive control | Supported (passed) | `t3-07-positive-control-settled-snapshot.md` (one `FX_ComponentRecoveryLab02` row), `t3-09-target-query-settled-snapshot.md` (zero rows, textbox `FX_SingleButtonLab01`), `t3-11-post-cancel-snapshot.md` (no dialog after ordinary Cancel), `harness-audit-T3.md` | Rendered Select Form result, operator-confirmed. Not database absence. `t3-08` exists but was not inspected by a worker; `t3-10` was not written |
| AC-3 | Form created once: Classic / BuildFromScratch; Save Template unchecked; exact Name; ScopeType User; clean; empty baseline | Supported (passed) | `t5-07-wizard-selection-before-ok-snapshot.md` (Classic, BuildFromScratch), `t5-09-wizard-page1-name-entered-snapshot.md` (Name), `t6-03-after-label-click-viewport.png` (Save Template visibly unchecked), `t7-02-preflight-before-finish-viewport.png`, `t7-03-after-finish-snapshot.md`, `t7-04-form-created-snapshot.md` (Name, Version, scope), `t7-05-form-created-viewport.png`, `t7-08-components-baseline-viewport.png` (`Pane (00)` only) | No template-artifact inventory check. Creation persistence not separately verified (no reload). `Pane (00)` internal type not verified |
| AC-4 | Exactly one native Toolbox Button placed on the canvas | Supported (passed) | `t8-03-button-armed-before-placement-viewport.png` (Button row highlighted), `t9-02-preplacement-armed-viewport.png`, `t9-03-after-placement-click-viewport.png` (one selected button, one child row), `t9-04-after-placement-snapshot.md`, `t11-12-components-expanded-viewport.png` | Placement used one coordinate click grounded in `t9-02`; the coordinate tool was the only route (T8 blocker, resolved by the operator-reported MCP restart) |
| AC-5 | Name and Caption entry. Distinguish (a) Enter-based inline-editor commit, (b) settled non-editing Caption value, (c) single ordinary Designer Save with Success=true | Supported (passed) | (a) Name: `t9-05-name-editor-open-viewport.png`, `t9-06-name-editor-snapshot.md`, `t9-07-after-name-commit-viewport.png`. Caption: `t10-03-after-caption-dblclick-viewport.png`, `t10-04-after-caption-dblclick-snapshot.md` (combobox `[active]`), `t10-05-post-caption-commit-viewport.png`. (b) settled: `t10-06-post-caption-commit-snapshot.md` (line 330 `Factory Test Button`; combobox no longer active). (c) Save: `t10-07-after-save-viewport.png` (toast), `t10-08-after-save-snapshot.md` (Save `[disabled]`), `harness-audit-T10.md`; response body `{"Success":true,"Message":"Form [FX_SingleButtonLab01] and global object(s) were saved.","Payload":[]}` | Caption committed by Enter (T10 directive), not Tab. Earlier T9 `F` keypress: no visible change (`t9-13-caption-first-char-viewport.png`), destination unobserved. Literal-vs-string-resource representation **unresolved**. Save message is generic and does not itemise. Toast transient |
| AC-6 | One ordinary Form-tab close of the target Form; Designer client kept; no unsaved-changes prompt | Supported (passed) | `t11-01-preclose-snapshot.md` (Save disabled, no dialog), `t11-02-preclose-viewport.png`, `t11-03-after-close-viewport.png` (no Form tab; Designer open; User scope), `t11-04-after-close-snapshot.md` (no dialog or alertdialog; no `FX_` heading) | Close control clicked once. No prompt observed; none would be visible after a save-clean close |
| AC-7 | One supported recent-forms reopen of the same User-scoped Form; no cold URL navigation or unload | Supported (passed) | `t11-05-form-menu-open-snapshot.md` (recent-forms entry `FX_SingleButtonLab01`, `e614`), `t11-06-post-reopen-snapshot.md` (heading; Name line 248; Version line 272; scope line 335), `t11-07-post-reopen-viewport.png` | The URL gained `MGForm=FX_SingleButtonLab01` through the Form menu; no URL was typed. Whether the reopened definition came from the server or a client cache is not established |
| AC-8 | Same Name, native component type and Caption across pre-Save, post-Save and post-reopen evidence | Supported (passed) | Pre-Save: `t9-07` (Name, Type `PushButton`), `t10-05-post-caption-commit-viewport.png` (Name, Caption, Type; header `button1_USER` earlier, `FX_SingleButton01` after rename). Post-Save: `t10-06` (line 330), `t10-08-after-save-snapshot.md` (row line 264; Caption line 330). Post-reopen: `t11-11-components-expanded-snapshot.md` (row), `t11-13-button-selected-snapshot.md` (header line 284 `FX_SingleButton01 (Button)`; Name line 314; Caption line 330; Type `PushButton` line 341), `t11-14-button-selected-property-grid-viewport.png`, `t12-01-final-readonly-snapshot.md` (lines 266, 314, 330), `t12-02-final-readonly-viewport.png` | Component type `Button` is shown in the Properties header; the Type row reads `PushButton` (button style). Both values are preserved and matched across all three milestones. The row does not display `Button` |
| AC-9 | Lifecycle reconciliation (see table below) | Supported (passed) | Section 2 of this matrix and the table below | Attributions and disclosures in the table below |

**AC-9 lifecycle reconciliation (T1–T12 cumulative).**

| Required count | Observed | Evidence |
|---|---|---|
| Form creation: 1 | 1 (Finish 1; success-alert OK 1) | `t7-02`, `t7-03`, `t7-04` |
| Button placement: 1 | 1 | `t9-02`, `t9-03`, `t9-04` |
| Name edit committed: 1 | 1 (Enter) | `t9-06`, `t9-07` |
| Caption edit committed: 1 | 1 (Enter; one `browser_type` entry) | `t10-04`, `t10-05`, `t10-06` |
| Ordinary Designer Save: 1 | 1 (one `SaveChanges` POST, HTTP 200, `Success: true`) | `t10-07`, `t10-08`, `harness-audit-T10.md` |
| Target close: 1 | 1 | `t11-02`, `t11-03`, `t11-04` |
| Target reopen: 1 | 1 (recent-forms entry) | `t11-05`, `t11-06`, `t11-07` |
| Regenerate: 0 | 0 (control disabled in every snapshot; never clicked) | all snapshots `t9-*` to `t12-01` |
| Unload: 0 | 0 (no unload control used; Unload IDO setting unchanged) | none attempted |
| Cold navigation: 0 | 0 (no URL typed; `MGForm` changed only by Designer Form-menu action) | `t11-05`, `t11-06` |
| Reauthentication: 0 | 0 | none; operator-stated MCP restart (T9) is tool infrastructure, not a Mongoose session change |
| Worker-authored browser JavaScript: 0 | 0 (evaluate and run-code tools denied; no script authored). The tool-generated "Ran Playwright code" wrapper lines are tool output, not worker-written scripts | tool output in every browser call |
| Prohibited Mongoose mutation: 0 | 0 for prohibited actions. Authorized or within-brief mutations: wizard fields (T5 Name; T6 Save Template by label click), Form creation (T7), Name and Caption edits (T9, T10), one Save (T10). Stray `F` keypress in T9 is unattributed (no visible change). Operator-authorized T6 and T10 steps are disclosed in §3 | §3 of this matrix |
| Designer launch: 1 of 1 | 1 (T2, earlier worker session) | `t2-preflight-notes.md`, `harness-audit-T2.md` |

**Disclosures for T13 (all previously recorded; restated for the completion decision).**
- T3: ambiguity-recovery allowance (one fresh untargeted snapshot and one corrected visible inspection) exhausted. Earlier worker session reached its turn limit at T3 end; T4 onward used a fresh session.
- T5: Save Template checkbox click intercepted by its display element; not applied; not retried; Finish not clicked.
- T6: operator-authorized single click on the `Save Template` label text unchecked the checkbox.
- T8: placement stopped because the click tool had no coordinate option.
- T9: operator reported (not observed by the worker) an MCP tool-server restart to enable coordinate clicks. One coordinate placement click. Name committed. Caption double-click landed on the dropdown arrow, which opened a string-resource list; Escape closed it with no selection. One `F` keypress in the Caption field produced no visible change; destination unobserved.
- T10: operator-authorized Caption coordinate double-click on the value text area; one entry; Enter commit; one Save.
- T11: one `browser_tabs select` failed (`Tab 1 not found`); retried; succeeded; no state change.

**Repository confinement (worker and controller records).** Worker-authored changes in this experiment are confined to `experiments/EXP-036-single-button-caption-recovery-across-ordinary-des.md` and `evidence/EXP-036/`. Complete Git-level verification was unavailable (Bash disabled). Pre-existing modifications under `tools/learning-harness/` (listed at session start) are unrelated to this experiment and are not attributed to it. Gitignored `evidence/playwright/*` files are browser-tool output and are not attributed to this experiment.

**Result classification.** Observed UI-level component-definition recovery across one ordinary Designer Save and one ordinary Form-tab close followed by one recent-forms reopen. Classified **observed**, not `replay_verified`. Not claimed: Forms-database durability, cache eviction, metadata unloading, server-side serialization, or whether the Caption is stored as a literal or a string resource (unresolved). The absence result is rendered Select Form evidence, not database absence.
