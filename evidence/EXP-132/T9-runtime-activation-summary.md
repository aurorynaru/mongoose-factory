# EXP-132 T9 - one runtime FX_BridgeTest open and one FX_BridgeButton activation (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=11`, `task=T9`, `worker_session_id=5c980eac-7e1f-47a3-9611-481a67c01313`, `task_message_id=f3ef5e53-3dfb-4d0a-954f-b0281fda0b21`.

## 1. Outcome

- **AC-7: passed at the visible-evidence level.** After one click, the runtime FX_BridgeTest Form displays the literal `FX_ECHO:bridge-probe` in the FX_BridgeOutput position, and `0` in the FX_BridgeStatus position (the raw invoke callback value, recorded literally).
- **Caveat on the element mapping:** the accessibility tree does not expose element IDs. The status/output assignment rests on DOM order: the approved asset places `FX_BridgeStatus` before `FX_BridgeOutput`, and the visible and accessibility order match that order. See section 8.
- **Runtime Form:** opened once; still open at the end of T9 (closure reserved for T10).
- **FX_BridgeButton activations: 1.** No second click, retry, poll or alternate invocation.
- **Designer Form Saves: 0. Designer close/reopen: 0. Other Designer lifecycle operations: 0. Browser JavaScript / evaluate / run-code written by the worker: 0.**
- No edit to FX_Echo, FX_Bridge/index.html, FX_BridgeControl, FX_vEcho or any other artifact.

## 2. Source review (local reads, before any browser action)

- Read first, before the first browser call: `AGENTS.md`; `experiments/EXP-132-...md`; `evidence/EXP-132/T8-close-reopen-summary.md`; `evidence/EXP-132/T6-html-readback.md`; `evidence/EXP-132/T7-save-summary.md`; `evidence/EXP-131/T10-runtime-round-trip-summary.md` (the EXP-131 runtime procedure and its unsuccessful `0` output).
- Not re-read in T9: EXP-128 and EXP-130 source copies (their evidence is recorded in the EXP-132 record from T1).
- Timing: these reads are local file reads; the first browser call was the tab list. The AC-9 reconciliation should take the controller's own audit timing.

## 3. Gates before the runtime open (observed)

| Gate | Observation | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (snapshot, header button) | snapshot after tab 1 select |
| Web Client runtime tabs | No Form tab. Portal tablist: `System Administrator` (Infor portal tab, not a Mongoose Form) and `Mongoose` (selected). Main region empty. | snapshot |
| Web Client console | 44 total: 3 errors, 10 warnings (matches the 3/10 baseline) | snapshot footer; console read |
| Designer identity and scope | Tab `FX_BridgeTest`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | snapshot (tab 0) |
| Designer Save and Undo | `Save` disabled, `Regenerate Form` disabled, `Undo` and `Redo` disabled | snapshot; find |
| Designer dialogs | none open (the `Open Edit Property Dialog` tooltip is hover text only) | snapshot |
| Designer console | 2 errors, 0 warnings (matches the 2/0 baseline) | snapshot footer |

## 4. Runtime open (exactly one)

1. The Web Client toolbar `Open` button was clicked once. The Select Form dialog opened. The Filter box held the carried-over value `vEcho` (no Form matched; dialog state from an earlier session).
2. The Filter was replaced with `FX_BridgeTest` by a fill. The grid did not refresh (no rows in the next snapshot). A `Backspace` key press followed by a slow retype of `t` made the filter apply. The filter text returned to `FX_BridgeTest`. Observed: the snapshot `evidence/playwright/page-2026-10-25T15-15-28-984Z.yml` shows one row, Caption `FX_BridgeTest` and Name `FX_BridgeTest`.
3. That single row was double-clicked once. The dialog closed. One runtime tab with heading `FX_BridgeTest` opened and was selected. Snapshot: `evidence/playwright/page-2026-10-25T15-15-37-788Z.yml`.
4. Recovery accounting: the post-fill snapshot showing an empty grid, plus the Backspace and slow retype, were counted against the fresh-snapshot and corrected-attempt allowances (1/1 and 1/1 used). No ref-not-found error occurred.

## 5. Pre-activation state (observed; before the click)

- Screenshot `evidence/EXP-132/T9-01-runtime-pre-click-empty-state.png`: header account `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; runtime heading `FX_BridgeTest`; button `FX Bridge Test` at mid-left; no text beneath the button; Save greyed; no dialog.
- Accessibility readback (`page-2026-10-25T15-15-37-788Z.yml`, lines 119-121): tabpanel `FX_BridgeTest` containing an iframe whose only node is `button "FX Bridge Test" [ref=f2e2]`. The empty output elements have no accessibility node.
- Runtime tabs: one (`FX_BridgeTest`).
- Web Client console at this point: 3 errors, 10 warnings (footer).

## 6. The single activation

- One ordinary click on `button "FX Bridge Test"` (`f2e2`). The tool returned without error. No second click.
- Snapshot after the click: `evidence/playwright/page-2026-10-25T15-15-50-539Z.yml`, lines 119-124: the same button; then `generic "0"` (`f2e3`); then `generic "FX_ECHO:bridge-probe"` (`f2e4`). No dialog.

## 7. Post-activation readback (observed)

- Screenshot `evidence/EXP-132/T9-02-runtime-post-single-click-status-output.png`: the runtime heading `FX_BridgeTest`; the button; the line `0` directly beneath the button; the line `FX_ECHO:bridge-probe` beneath that. Header account unchanged. No dialog.
- Targeted accessibility readback (find `bridge-probe`), recorded verbatim: `button "FX Bridge Test"`, `generic "0"`, `generic "FX_ECHO:bridge-probe"`.
- **Recorded values:** FX_BridgeStatus (raw invoke callback value, as displayed) = `0`. FX_BridgeOutput (as displayed) = `FX_ECHO:bridge-probe`.
- The invoke callback value is `0`, not the FX_Echo return string `FX_ECHO:bridge-probe`. Its meaning is out of scope and is not interpreted (brief).

## 8. Limits of this observation

- **Element mapping:** the accessibility readback exposes text and order, not IDs. The `0` = FX_BridgeStatus and literal = FX_BridgeOutput assignment follows the DOM order in the approved asset (`evidence/EXP-132/T6-html-readback.md`, Revised section: FX_BridgeStatus precedes FX_BridgeOutput). It is not read directly from the element IDs.
- **What the literal supports:** FX_vEcho was blank at creation and after reopen (T4, T8 readbacks). Only the revised FX_Echo writes an `FX_ECHO:` prefix, and only the asset's getVarValue callback writes FX_BridgeOutput. The displayed literal is therefore consistent with the revised assignment having executed and the value being read back by name. This is an inference from one observation, not a compile-success proof.
- **Not proven:** that the Global FX_vEcho object (rather than some other storage) was the one used by `ThisForm.Variables` / `WSForm.getVarValue` (EXP-130 U-1, `docs/mongoose/guides/scripts.md` Application.Variables vs ThisForm.Variables). Compile success of the revised FX_Echo: the Compile Result Errors grid was empty earlier (T8-09), which is not affirmative proof.
- **Single observation:** no replay verification; same-session; no cross-session durability; the runtime Form is still open (closure is for T10).
- The EXP-131 `0` output and the EXP-132 `0` status value are both observed; their shared cause is not diagnosed.

## 9. Console comparison

| Reading | Web Client | Designer |
| --- | --- | --- |
| Before the open (T9 gate) | 44: 3 errors / 10 warnings | 2 errors / 0 warnings |
| After the dialog close and runtime open | 3 / 10 (snapshot footer) | not read |
| Before the click (`T9-01`) | 3 / 10 (footer) | not read |
| After the single click (console read, error level) | 44 total: 3 errors / 10 warnings. The three errors are the same `unload` permissions-policy messages as baseline. | not read |
| End of T9 (Designer snapshot) | not re-read | 2 errors / 0 warnings |

No increase in either console. No new visible error.

## 10. Browser action and read accounting (T9 worker tool-call log)

- **Actions: 9.** Tab selects 3 (0, 1, 0). Clicks 3 (Open; the Select Form row double-click; the single FX_BridgeButton activation). Fill 1 (the Filter text). Key press 1 (Backspace). Typed text 1 (`t`, slow). Browser wait calls 1 (2 s; no retry, no poll of an activation result).
- **Reads: 11.** Tab list 1; snapshots 4; finds 3 (`FX_BridgeTest`, `bridge-probe`, `Save`); screenshots 2; console reads 1. Local file reads of saved snapshots and screenshots are not counted as browser reads.
- **Recovery:** ref-not-found errors 0. Fresh untargeted snapshot 1/1 and corrected attempt 1/1 (the Filter fill and Backspace + retype), both disclosed in section 4.
- **Mutation and lifecycle accounting:** runtime opens 1; FX_BridgeButton clicks 1; runtime closes 0; Designer Form Saves 0; Designer close/reopen 0; Regenerate, Delete, FormSync, metadata, cache, IDO or database operations 0; variable, script, asset or component edits 0; browser JavaScript 0.

## 11. Evidence files (T9)

- `evidence/EXP-132/T9-01-runtime-pre-click-empty-state.png`: runtime FX_BridgeTest identity, the `FX Bridge Test` button, no visible output text, header account, Save greyed (pre-click). Proves the pre-activation visible state. Does not prove the empty element IDs (only visible text) or the button's functional enablement beyond appearance.
- `evidence/EXP-132/T9-02-runtime-post-single-click-status-output.png`: runtime FX_BridgeTest; button; `0` then `FX_ECHO:bridge-probe` beneath it (post-click). Proves the displayed values at those positions. Does not prove the element-ID mapping, compile success, Global-object resolution or durability.
- `evidence/EXP-132/T9-runtime-activation-summary.md`: this file.
- Tool-generated only (not worker-written): `evidence/playwright/page-2026-10-25T15-15-06-793Z.yml` (Select Form open), `page-2026-10-25T15-15-19-600Z.yml` (after wait), `page-2026-10-25T15-15-28-984Z.yml` (filter row present), `page-2026-10-25T15-15-37-788Z.yml` (runtime open; pre-click readback), `page-2026-10-25T15-15-50-539Z.yml` (post-click readback); console log `console-2026-10-25T15-14-54-499Z.log` under `evidence/playwright/` (tab-list event reference; the counters in section 9 are footer or read values, not log line counts).
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md`: status paragraph updated and T9 section appended.

## 12. Acceptance (T9 view)

- **AC-1:** re-confirmed for T9 (account header, User scope, FX_BridgeTest identity, consoles, no dialog, no inherited runtime Form). FX_CustomerPortal and the absence checks were not re-run in T9; they stand from T2.
- **AC-4, AC-5, AC-6:** not re-performed in T9; their T5 to T8 evidence stands. No edit was made.
- **AC-7:** **passed at the visible-evidence level.** Runtime Form identity visible; one button; pre-click output empty; after one click `FX_ECHO:bridge-probe` visible in the output position and the raw status `0` visible in the status position. Mapping caveat in section 8.
- **AC-8:** not performed in T9 (closure is the next task). The runtime Form is open; the Designer is on FX_BridgeTest with Save disabled and no dialog.
- **AC-9:** the final manifest remains open.

## 13. Open questions for the coordinator

1. Next permitted task (T10): one ordinary runtime closure of the experiment-opened FX_BridgeTest runtime tab without saving, then the Designer and Web Client check. T9 did not close it.
2. The status-versus-output mapping is by DOM order; a reviewer may want the element IDs confirmed in a read-only manner (no browser JavaScript allowed, so this may remain unresolved).
3. The `0` status value and the EXP-131 `0` output share a shape but their meaning is out of scope; not diagnosed.
4. Global-object resolution (EXP-130 U-1) and compile success of the revised FX_Echo remain unresolved.
