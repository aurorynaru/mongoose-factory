# EXP-133 T1 - read-only preflight summary (2026-10-25)

Harness header: `run_id=R-20261025-234739-gn7q`, `experiment_id=EXP-133`, `cycle_id=0`, `task=T1`, `worker_session_id=232b1097-e642-49d0-8ef9-212d4c7767a1`, `task_message_id=834560e5-334d-4f16-8f68-7726631a50c1`.

Scope: read-only preflight only. No Form was created, no Global object was created, no wizard was opened, no Save, unload, close/reopen, runtime or Form Script action was taken. Excluded Forms (`MockLoginPortal`, `FX_InventoryPrototype01`) were never opened; they were checked only by name filter.

## Verdict

**All T1 gates passed (AC-1 supported, with the limits below).** The worker stopped at the T1 boundary and awaits separate coordinator authorization before the first mutation (T2).

## Sources read before any browser action

- `AGENTS.md` (full, 258 lines).
- `recipes/forms/create-basic-form.md` (status verified; Designer New > Form Wizard Selection > Classic / BuildFromScratch; Save Template unchecked; Finish persists the Form).
- `experiments/EXP-130-final-read-only-mock-application-study-and-rebuild.md`: section 13 (dependency map), section 14 (readiness checklist), section 15 (plan steps P5/P6, lines 498-499: FX_Login assets; FX_LoginPortal with the user-control reference and FX_ProcessLogin), section 16 (proposed FX_ identities).
- `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` (lines 1-427 of 644, read to the T7 readbacks): Designer Form and asset workflow, D-1 to D-5 disagreements, T1 limitations, and the operator ownership disposition (D-5).
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` (full): Global Objects New route (Edit > Variable > Global Objects > + > New, Name only), Global Objects search filter behaviour, Save and close/reopen precedents, and the specialist-guidance qualification.
- `docs/mongoose/guides/user-control.md`:
  - lines 9-29 and 30-75: Web User Control creation steps (Use Web Control; Control URL; Web User Control Asset option; Save; close; unload; reopen; test).
  - lines 247-269: **`WSForm.invoke(methodName, [parameter1[,...]], callbackFn)`**, with `parameter<n>` listed as "a list of method parameters corresponding to the form script method parameters". The two-string-argument pattern `WSForm.invoke("FX_ProcessLogin", username, password, cb)` is therefore **established by the approved guidance** (AC-4 precondition met at the documentation level; not runtime-verified).
  - lines 200-212: `WSForm.getVarValue(variableName, callbackFn)` "to retrieve the value of a form variable".
- `docs/mongoose/guides/scripts.md` lines 70-96: **global variables are referenced through `Application.Variables`; form variables through `ThisForm.Variables`.** See the design concern below.
- `evidence/EXP-131/` and `evidence/EXP-132/` used only through the record citations above.

Not read: `tools/` (including briefs), the secrets folder, and `UserControl.js` (excluded). No credential was read, typed or recorded.

## Repository baseline

- Branch `claude-harness`; HEAD `95bb0da EXP-133: approved brief` (conversation-start git status snapshot; Bash is disabled, so no git command was run in T1).
- Pre-existing modified and untracked files under `tools/claude-harness/` were not touched by T1.
- `experiments/EXP-133-...md` did **not** exist at T1 start; T1 created it (same pattern as EXP-131 and EXP-132).

## Tool policy

- No browser evaluate or run-code tool is exposed to this worker session, and none was invoked. The per-action `### Ran Playwright code` blocks in tool outputs are MCP wrapper output generated for each action, not worker-written JavaScript.
- The `deny_browser_javascript=true` flag itself is not inspectable from inside the worker. **Coordinator to confirm the policy flag.**

## Gate results (AC-1)

| Gate | Result | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (exact) | `t1-15-web-client-account-header-and-console.png` (header visible); `t1-01-web-client-fresh-snapshot.md` |
| Designer scope | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t1-14-designer-final-clean-user-scope.png`; `t1-00`, `t1-08` snapshots |
| Positive control (FX_CustomerPortal visible) | Visible in filtered Select Form, one row, Name and Caption `FX_CustomerPortal` | `t1-17-select-form-positive-control-fx-customerportal.png` (dialog visible with filter `FX_CustomerPortal`, Filter By `Name`, `Case Sensitive` and `Starts With` both unchecked); `t1-03` snapshot |
| `MockLoginPortal` absent (excluded) | No row (filter `MockLoginPortal`, End pressed) | `t1-04-...md` (textbox shows the filter; no gridcell) |
| `FX_InventoryPrototype01` absent (excluded) | No row | `t1-05-...md` |
| `FX_LoginPortal` absent (exact name) | No row | `t1-06-...md` |
| Login substring (case-insensitive) | Two non-FX Forms only: `MPLogin` (two cells: Caption and Name) and `Users Login Report` / `UserLoginReport`. No `FX_Login*` Form; no `MockLoginPortal`. Not opened. | `t1-07-select-form-filter-login-substring.md` |
| Web User Control Assets, top level | `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`. **No `FX_Login` folder**, so `FX_Login/index.html` and `FX_Login/script/app.js` are absent. | `t1-09-web-user-control-assets-top-level-no-fx-login.png` (dialog visible); `t1-09-...md` |
| Global variable `FX_vLoginResult` absent | Sorted Global Objects rendered list: `FarmEnforcePrefixFromAccessAs` -> `FX_vEcho` -> `gbgc_bg`, with no `FX_vLoginResult` in the gap where it would sort. Search `LoginResult`: no rows. Search `vloginresult` (lower-case): no rows. Positive control `FX_vEcho` in the same dialog: its row appears. | `t1-10-global-objects-variables-dialog.md`; `t1-11-...loginresult.md`; `t1-12-...fx-vecho-positive-control.md`; `t1-13-...vloginresult-lowercase.md` |
| FX_BridgeTest residue | An EXP-132 Form, `FX_BridgeTest`, is open in the Designer: clean (Save and Undo disabled), no dialog, Components `FX_BridgeControl` selected. Not part of EXP-133; not touched. | `t1-00`, `t1-14` |
| No portal banner, session-expiry modal or sign-in page | None seen | snapshots `t1-00`, `t1-01` |

## What the absence results do and do not prove (AC-1 limits)

- **Scoped inventory, not tenant-wide.** The Select Form and Global Objects lists are the views this User session renders. Absence is "no match in this view", not an exhaustive tenant-wide proof.
- **Global Objects list is a rendered window.** Rows were read from the sorted list plus filter results. The list may be virtualised. The filter was validated by the `FX_vEcho` positive control in the same dialog. The rendered sorted list does not show `vInventoryJson`, which EXP-130 documented in another account; so the Global list may not show every tenant-wide Global object. Tenant-wide absence of `FX_vLoginResult` is **not proven**.
- **Filter semantics.** The Select Form filter defaults to contains (`Starts With` unchecked) and case-insensitive (`Case Sensitive` unchecked); the lower-case and mixed-case `login` results are consistent with that. "Exact-name" here means a full-name contains match, not a strict equality check.
- **Asset absence is top-level only.** A file under a top-level `FX_Login` folder would appear under that folder; the folder itself is absent, so no sub-folder check was needed.
- **Absence reads rest on accessibility text** except the screenshots listed above (`t1-09`, `t1-17`).

## Action accounting (T1, exact)

- **Browser actions: 32, all returned ok, 0 timeouts, 0 errors.**
  - Tab selects: 4 (tab 1, tab 0, tab 1, tab 0). Tab list: 1 (before the first selection).
  - Clicks: 10 (Web Client Open x2; Select Form Cancel x2; Designer Edit x2; Edit > Web User Control Assets; Assets dialog Cancel; Edit > Variable; Global Objects Cancel). Coordinate clicks: 0.
  - Text fills (filter or search text only): 9.
  - Key presses (End to refresh each filter): 9.
  - Save, Regenerate, New, Copy, Delete, Undo, Redo, OK, Finish, Form Script, asset edit, variable creation, close, reopen, runtime, drag, wheel: **0**. `Revert Global Object Definition` (visible in the Edit menu) was **not** clicked.
- **Browser reads: 29.** Tab list 1; snapshots 15; screenshots 4; finds 9.
- **Recovery allowance:** fresh snapshot 0 of 1; corrected inspection 0 of 1. No `Ref ... not found` error occurred.
- **Browser JavaScript / evaluate / run-code written by the worker: 0.**
- **Credentials read, typed, copied or recorded: 0.** Tenant and session values appear only as `<secret>` placeholders in tool URLs.
- **Mutation accounting: zero.** No Form, asset, variable, component, Form Script or Save; no OK committed on any dialog (all dialogs closed with Cancel).

## Console (baseline and end)

- Web Client: 3 errors / 10 warnings at the start (`t1-01`), after each Select Form and Global Objects step, and at the end. No rise. (Tool-written log `evidence/playwright/console-2026-10-25T15-48-06-543Z.log` holds the cumulative Web Client entries; the 3/10 counter is the reading used.)
- Designer: 2 errors / 0 warnings at the start (`t1-00`) and the end (`t1-13`, `t1-14`). No rise.
- Stop rule not triggered.

## Screenshots: what each proves and does not prove

- `t1-09-web-user-control-assets-top-level-no-fx-login.png`: the Global Objects (Web Assets) dialog with the top-level list `$app`, `FX_Bridge`, `mongoose`, `sohoComponents`, `sohoxi`; Designer `FX_BridgeTest`; status bar `ScopeType: User`. **Proves** the top-level asset inventory at this moment and the Designer scope. **Does not prove** sub-folder contents or tenant-wide absence.
- `t1-14-designer-final-clean-user-scope.png`: final Designer, `FX_BridgeTest`, Save and Undo greyed, `FX_BridgeControl` under Pane (00), `ScopeType: User / anton.ramos@3mworks.com.ph`, no dialog. **Proves** the clean end state and User scope. **Does not prove** the console counter (not visible in the frame).
- `t1-15-web-client-account-header-and-console.png`: Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer with no Form open. **Proves** the account and configuration header. **Does not prove** the console counts. **Filename overstates content:** the name says "console", but the console is not visible in the frame. The Web Client counter (3/10) rests on the snapshot footer (`t1-01`). This file cannot be renamed or removed by the worker; coordinator to note.
- `t1-17-select-form-positive-control-fx-customerportal.png`: Select Form with filter `FX_CustomerPortal`; one row `FX_CustomerPortal`; `Case Sensitive` and `Starts With` unchecked; the header account visible behind the dialog. **Proves** the positive control, the filter mode and the account header in one frame. **Does not prove** the absence of any other name.

## Design concern for the coordinator (not a T1 gate failure)

- **Global variable access path.** The approved guidance (`docs/mongoose/guides/scripts.md` lines 76-96) references global variables through `Application.Variables("...")` and form variables through `ThisForm.Variables("...")`. The EXP-133 brief places `FX_vLoginResult` in Global scope and requires `ThisForm.Variables("FX_vLoginResult").Value = ...` inside `FX_ProcessLogin`. The `WSForm.getVarValue` guidance describes "form variable" retrieval. This is the same qualification EXP-132 recorded (EXP-132 T3 and T11; EXP-130 U-1).
- **Consequence.** If `ThisForm.Variables` does not resolve a Global variable at runtime, `FX_ProcessLogin` may fail or the page may show a blank result. The brief places "whether the Global definition is the storage actually resolved" out of scope, so the worker will not investigate it. **Coordinator decision needed before T2:** proceed as briefed (AC-9 then supports only an observed single-run round trip), or amend the design (for example, to a Form-level variable, which is a brief change).

## Other observations for the coordinator

1. The EXP-132 residual `FX_BridgeTest` is open in the Designer, clean. The T2 creation wizard may open a second Designer tab or replace the view; closing `FX_BridgeTest` is not authorized in EXP-133. Coordinator to say whether it stays open.
2. The Designer Edit menu includes `Revert Global Object Definition`. It must not be clicked in any EXP-133 task.
3. Account ownership: the worker confirms only the header text. The EXP-131 record (D-5) states that the operator confirmed ownership at handoff; this T1 did not re-verify ownership beyond the header and the User scope.
4. The invoke signature is now established by the approved guidance (two-string-argument pattern, `WSForm.invoke(methodName, [parameter1[,...]], callbackFn)`). Runtime success of that pattern is not established.

## Knowledge state (T1)

- Web Client header account and Designer `ScopeType: User` for this session: **observed** (one execution; screenshots `t1-15`, `t1-14`).
- Select Form inventory: `FX_CustomerPortal` present; `MockLoginPortal`, `FX_InventoryPrototype01`, `FX_LoginPortal` absent in this view; login-substring matches are non-FX Forms: **observed** (one execution per filter).
- Web User Control Assets top level has no `FX_Login` folder: **observed** (screenshot `t1-09`).
- Global `FX_vLoginResult` absent in the rendered sorted list and in filter results, with a positive control: **observed**; tenant-wide absence: **unresolved**.
- `WSForm.invoke` two-argument signature: **candidate_procedure** from the approved guidance (documented; not runtime-verified).
- `ThisForm.Variables` / `WSForm.getVarValue` resolution of a Global variable: **unresolved** (EXP-130 U-1; design concern above).
- Replay verification: **not claimed**.

## Next permitted action

Coordinator authorization for T2 (Form creation through the verified Classic BuildFromScratch route, Save Template unchecked, Script Language Visual C#). T2 must first decide the design concern above.
