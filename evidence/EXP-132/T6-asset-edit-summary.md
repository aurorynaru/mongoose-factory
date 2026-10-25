# EXP-132 T6 - FX_Bridge/index.html asset edit (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=8`, `task=T6`, `worker_session_id=2b1c482d-88bb-4ac2-80a9-48de48c0a080`, `task_message_id=2fe5b5bb-f324-4eb0-933f-762766e59464`.

## 1. Outcome

- **FX_Bridge/index.html was edited once and committed through its Edit Browser File OK** (the single asset-editor commit). Content as in `evidence/EXP-132/T6-html-readback.md`: one `FX_BridgeStatus` div added; the invoke callback writes its `result` to FX_BridgeStatus and issues one `WSForm.getVarValue("FX_vEcho", ...)`, whose callback writes to FX_BridgeOutput. Dependency, FX_BridgeButton, FX_BridgeOutput and the invoke signature were kept.
- **Read-only reopen (same Global Objects dialog session):** the retained revised content was read back, then closed with Cancel. This is in-dialog state, not server storage.
- **Parent Global Objects dialog closed with its OK (one).** This is a second, dialog-level commit (see section 4, decision 1). It was taken after the asset content had been read back in the dialog.
- **FX_BridgeControl** verified read-only: UserControl, Pane 0, Container 0, Use Web Control checked, Control URL `FX_Bridge/index.html`. Dialog closed with Cancel. Unchanged.
- **Designer Form Save: 0. Form close/reopen: 0. Runtime open or FX_BridgeButton activation: 0.** The Designer Save control remains enabled (not clicked).
- **Variables created, renamed, deleted or edited: 0.** FX_Echo source not edited (Script Editor opened read-only and cancelled). UserCtrl variables not touched.

## 2. Gates and baselines

| Gate | Observation | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client tab, banner button) | Web Client snapshot, tab 1 |
| Web Client console (start / end) | 3 errors / 10 warnings / start, and 3 errors / 10 warnings / end | snapshot footers (tab 1) |
| Designer identity and scope | `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | Designer snapshot; `T6-01` |
| Designer console (start / end) | 2 errors / 0 warnings / start, and 2 errors / 0 warnings / end | Designer snapshot footers |
| Dialogs at start | none open | Designer snapshot |
| Save at start | enabled (T4/T5 pending state; not clicked) | `find` on Save (no `[disabled]`) |
| FX_Echo source (step 2, read-only) | identical to T5 committed readback: line 15 `ThisForm.Variables("FX_vEcho").Value = "FX_ECHO:" + s;`, line 16 `return "FX_ECHO:" + s;`, 20 lines, scaffold intact | `T6-01-script-editor-readonly-source-pre-errors.png` |
| Compile Result, post-T5 Errors view (step 2) | Errors grid headers only, **no rows**; Output not viewed in T6 | `T6-02-script-editor-compile-result-errors-post-T5-readonly.png` |
| FX_Bridge/index.html baseline (step 3) | identical to T2 readback: `../$app/scripts/UserControl.js`, `FX_BridgeButton`, `FX_BridgeOutput`, `WSForm.invoke("FX_Echo", "bridge-probe", ...)`, no status element, no getVarValue | `T6-03-edit-browser-file-index-html-original-baseline.png`; `T6-html-readback.md` |

## 3. Mutation and lifecycle accounting

- **Asset commit (step 6):** Edit Browser File OK for `FX_Bridge/index.html` (Content Type `text/html`): **1**.
- **Read-only reopen of the asset:** Content row Open Edit Property Dialog (read) then Cancel: **1 Cancel**, no change.
- **Parent Global Objects OK:** **1** (dialog closed; see decision 1).
- **Read-only Script Editor (FX_Echo):** opened via Edit > Form Script; Cancel **1**; no change.
- **FX_BridgeControl:** component row selected (selection only); Edit User Control References opened read-only; Cancel **1**; no change.
- **Designer Form Save: 0.** Form close/reopen: **0**. Runtime open / FX_BridgeButton activation: **0**. Regenerate, Delete (top-toolbar), Unload, FormSync, metadata, IDO or database operations: **0**. Browser JavaScript, evaluate or run-code written by the worker: **0**.
- **Created or modified artifacts this task:** `FX_Bridge/index.html` content (modified, once). No other FX_ object was created or modified in T6. (The Global Objects dialog OK finalises the list; it created no object.)

## 4. Decisions and deviations (disclosed)

1. **Parent Global Objects OK after the asset OK.** The brief asks for one asset commit. The Edit Browser File OK is that commit. The Global Objects dialog stayed open after it, and a Cancel there could have discarded the pending asset edit. T4 closed the same dialog with its OK. So the parent dialog was closed with its OK, after the asset content had been read back in the dialog (`T6-05`). This is a second dialog-level commit, not a second asset edit. The coordinator should confirm this reading of "exactly once". The asset content was **not** re-read after the parent OK; post-OK persistence is unverified.
2. **Full-content replacement, not a minimal insertion.** The whole textarea value was set in one fill, with the unchanged lines retyped. The comparison in `T6-html-readback.md` is the check. Byte-level whitespace identity with the original is not proven (accessibility text flattens whitespace).
3. **Compile status after T5 remains unresolved.** The Errors grid was re-opened (empty headers). That is not affirmative compile proof, and the Output tab was not inspected in T6. No compile was initiated.
4. **Designer Save remains enabled.** The find on Save shows no `[disabled]` at the end of T6. Its cause is unresolved, and it may now also reflect the asset change. Not clicked.
5. **Designer Variables tree was not re-read in T6.** FX_vEcho still absent from the Global - Persistent tree as of T5 (`T5-07`, `T5-09`); present in the Global Objects list after T4 (`T4-07`). Tree visibility remains unresolved.
6. **Accounting discrepancy (carried to AC-9).** T5's worker narrative total of 16 differed from the controller audit (21). The counts below are from this task's own tool-call log only, and have not been reconciled against the controller audit (not available to the worker).

## 5. Browser action and read totals (T6, worker tool-call log)

- **Actions: 25.** Tab selects 4 (Web Client, Designer, Web Client, Designer); clicks 19; key presses 1 (ArrowRight, to expand FX_Bridge); typed/filled 1 (full asset content).
- **Reads: 42.** Tab lists 2; snapshots 5 (`browser_snapshot`); finds 28; screenshots 7 (`T6-01` to `T6-07`). Console observed through snapshot footers (no separate console calls).
- **Recovery usage:** ref-not-found errors 0. Fresh untargeted snapshot 0/1; corrected inspection 0/1. Allowance not used.
- **Local file reads (not browser):** 6 Read calls for the required sources and 6 image reads of the T6 screenshots (`T6-01`, `T6-02`, `T6-03`, `T6-04`, `T6-06`, `T6-07`), plus one Grep for prior evidence.

## 6. Evidence files written (T6)

- `evidence/EXP-132/T6-01-script-editor-readonly-snapshot.md` - tool-generated accessibility snapshot (Script Editor read-only; body truncated in the tree).
- `evidence/EXP-132/T6-01-script-editor-readonly-source-pre-errors.png` - FX_Echo source as displayed, Compile Result collapsed. Proves the revised source as displayed. Does not prove compilation.
- `evidence/EXP-132/T6-02-script-editor-compile-result-errors-post-T5-readonly.png` - Errors tab, headers only, no rows. Proves the empty grid only, not compile success.
- `evidence/EXP-132/T6-03-edit-browser-file-index-html-original-baseline.png` - original FX_Bridge/index.html in Edit Browser File before the edit. Proves the original content as displayed (top lines visible; bottom lines visible).
- `evidence/EXP-132/T6-04-edit-browser-file-index-html-revised-precommit.png` - revised content in the textarea before OK; scrolled to the bottom. Proves the lower part of the revised content; the top lines are in the accessibility text only.
- `evidence/EXP-132/T6-05-edit-browser-file-index-html-reopened-readonly-after-OK.png` - reopened Edit Browser File (in-dialog state after OK), before the parent OK. Shows the reopened dialog; the textarea text is in the accessibility readback in `T6-html-readback.md`.
- `evidence/EXP-132/T6-06-fxbridgecontrol-user-control-references-readonly-after-asset-commit.png` - FX_BridgeControl Edit User Control References read-only: Use Web Control checked, Control URL `FX_Bridge/index.html`, Web User Control Asset radio (disabled). Proves the reference as displayed.
- `evidence/EXP-132/T6-07-designer-final-after-asset-commit-readonly.png` - Designer after the sequence: FX_BridgeTest, User scope, no dialog, FX_BridgeControl selected in the Components grid (UserControl, Pane 0, Container 0). Save state from the accessibility find (enabled). Does not prove server storage.
- `evidence/EXP-132/T6-html-readback.md` - original and revised HTML readbacks, difference table, AC-5 structure checks.
- `evidence/EXP-132/T6-asset-edit-summary.md` - this file.
- Tool-generated only (not written directly by the worker): `evidence/playwright/page-2026-10-25T14-*.yml`, `console-*.log`.

## 7. Acceptance checks (T6 view)

- **AC-1:** re-confirmed for T6 (account header, User scope, FX_BridgeTest identity, no dialog, console 2/0 and 3/10). The T2 Select Form inventory was not re-run.
- **AC-2:** original FX_Echo and FX_Bridge/index.html baselines re-read and matched T2/T5. FX_BridgeControl reference shown (`T6-06`). The Mock evidence lines are as recorded in the experiment record.
- **AC-3:** not re-performed (no variable work in T6). T4 metadata readback stands as observed.
- **AC-4:** source re-read identical to T5 (`T6-01`). Compile success unresolved (empty Errors grid, not affirmative).
- **AC-5:** **met for the readback before commit** (`T6-html-readback.md`, `T6-04`, captured before the Edit Browser File OK), and the unchanged FX_BridgeControl reference is shown independently (`T6-06`). Caveats: whitespace identity unproven (decision 2); no runtime evidence of the script.
- **AC-6 to AC-9:** not started in T6 (by instruction: no Designer Save, close/reopen or runtime). AC-9 manifest remains for the final task.

## 8. Knowledge state (T6)

- Asset content as displayed in the Edit Browser File dialog after OK, before the parent OK: **observed**.
- Asset content after the parent Global Objects OK and in server storage: **unresolved** (not re-read; requires the ordinary Designer Save and reopen in a later task).
- The `WSForm.invoke` callback writing to FX_BridgeStatus and the nested `WSForm.getVarValue("FX_vEcho")` writing to FX_BridgeOutput: **candidate procedure** from the saved Mock pattern (`evidence/EXP-128/assets/MockInventory_index.html.txt`); not executed; **not replay-verified**.
- Runtime resolution of `ThisForm.Variables("FX_vEcho")` for a Global variable and of `WSForm.getVarValue("FX_vEcho")` (EXP-130 U-1): **unresolved**.
- Compile success of the revised FX_Echo: **unresolved**.
- Cause of the Designer Save-enabled state: **unresolved**.
- Replay verification: **not claimed**.
