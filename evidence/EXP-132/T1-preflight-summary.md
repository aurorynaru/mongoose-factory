# EXP-132 T1 - read-only preflight (BLOCKED / STOPPED at recovery-allowance exhaustion) (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=0`, `task=T1`, `worker_session_id=c850a989-58b7-495b-a810-37f4a00b0fca`, `task_message_id=12e619d6-849e-4eb6-aebf-781d8554b35f`.

Bounded instruction for T1: read-only review; account, scope, identity, cleanliness and baseline gates; no mutation. T1 is **not complete**. The worker stopped when the experiment's browser-recovery allowance was exhausted and a further stale-ref error occurred (section 4).

## 1. Mutation status

- **No Mongoose mutation.** No Save, Regenerate Form, Delete, New, Check In/Out, variable creation, Form Script edit, asset edit, component edit or runtime open.
- **FX_vEcho was not created.** Its absence was checked only partially (section 3).
- **No Select Form, no runtime, no Web Client action.** The Web Client tab (tab 1) was listed but never selected.
- Repository writes by the worker: this summary, the experiment record `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` (created in T1), and the T1 evidence files listed in section 6.

## 2. Sources read before any browser action

- `AGENTS.md` (full, 258 lines).
- `experiments/EXP-131-first-fx-web-user-control-to-form-script-bridge.md` (lines 1-427 of 644 read; T10 result taken from the manifest and the T10 summary below).
- `evidence/EXP-131/T11-final-evidence-manifest.md` (final EXP-131 evidence manifest).
- `evidence/EXP-131/T10-runtime-round-trip-summary.md` (runtime result: one activation, visible output `0`).
- `evidence/EXP-131/t9-14-edit-browser-file-readonly-snapshot.md` (EXP-131 asset text, read-only readback, prior day).
- `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt` (Mock Form Script copy).
- `evidence/EXP-128/assets/MockInventory_index.html.txt` (Mock asset copy).
- `evidence/EXP-130/T2-designer-metadata-gaps.txt` (Mock variable metadata copy).
- Not read: `UserControl.js` (excluded); no Mock object opened; `FX_InventoryPrototype01` not opened.
- The brief named `experiments/EXP-132-...md` as the record. It did not exist at T1 start (same situation as EXP-131 T1). T1 created it.

## 3. Documented pattern and gate observations

### 3.1 Documented variable write, getVarValue and metadata (source gate, AC-2)

| Item | Saved evidence (exact location) | Observation |
| --- | --- | --- |
| Variable write | `evidence/EXP-128/MockInventoryDashboard-form-script.cs.txt`, source line 51 | `ThisForm.Variables("vInventoryJson").Value = json;` inside `public void LoadInventoryFromIDO()` (source line 12). |
| Invoke, then read | `evidence/EXP-128/assets/MockInventory_index.html.txt`, JavaScript section: `invokeLoadInventoryFromIDO()` and `getInventoryJson()` | `WSForm.invoke("LoadInventoryFromIDO", function(result) {...})` (no argument; the callback only logs `result` and resolves). Then `WSForm.getVarValue("vInventoryJson", function(value) {...})`. The load chain invokes first, then reads the variable. |
| Variable metadata | `evidence/EXP-130/T2-designer-metadata-gaps.txt` sections 3, 7 and 10 | `vInventoryJson`: category **Global - Persistent**; `Persistent = True`; `Global = True`; no owning Form; value blank. No Form-level copy on either Mock Form (no Form - Temporary group on the dashboard). |
| Form-level vs Global | Same file, section 6 and U-1 | Documented pattern uses a **Global Persistent** variable through `ThisForm.Variables`. No Form-level variable is required by the documented pattern. Runtime resolution of `ThisForm.Variables` on a Global variable is **unresolved** (not observed at runtime). |

**Variable-type decision (for coordinator confirmation before mutation):** the documented kind is Global=True and Persistent=True. This matches the brief's preferred setting. No Form-level alternative is needed on this evidence, so the coordinator's Form-level disposition is not triggered.

**Difference to flag (not changed):** the Mock invoke passes no argument (`WSForm.invoke(name, callback)`). The EXP-131 candidate used `WSForm.invoke("FX_Echo", "bridge-probe", callback)`. EXP-132 requires keeping the EXP-131 invocation signature, so this difference is recorded only. It is not a diagnosis of the EXP-131 output `0`. The brief forbids alternate signatures.

### 3.2 Designer baseline (FX_BridgeTest, this run)

Source: `evidence/EXP-132/t1-00-designer-fresh-preflight-snapshot.md`, `evidence/EXP-132/t1-01-designer-baseline-identity-scope.png`.

- Tab `FX_BridgeTest` selected (tab 0, Designer). Tab list read first (tab 0 Designer, tab 1 Web Client with `favoriteContext=FX_BridgeTest`).
- Properties: Name `FX_BridgeTest`; Version `User version for user anton.ramos@3mworks.com.ph` (accessibility text; the screenshot truncates it to `User version for us...`); Device Type `Default`; Form Type `Normal`; Is Master `True`; Script Language `Visual C#`; Close Box `True`; Minimize/Maximize `True`; Enable Advanced Filter `False`.
- Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Save, Regenerate Form, Undo and Redo: **disabled** (accessibility, t1-00). Screenshot t1-01 shows Save greyed.
- No dialog open at start.
- Designer console: **2 errors / 0 warnings**, both `Permissions policy violation: unload` (same as the EXP-131 baseline).
- Components: the canvas shows one component box (the UserControl, t1-01). The Components grid was not read in this run.

### 3.3 Existing variables (Form-level, this run)

Source: `t1-00` (accessibility) and `t1-01` (screenshot). Form-level Variables grid, `Form - Persistent` (all rows visible):

1. `UserCtrl_FX_BridgeControl`
2. `UserCtrl_userControl1_USER` (stale)
3. `UserCtrlAsm_FX_BridgeControl`
4. `UserCtrlAsm_userControl1_USER` (stale)
5. `UserCtrlUrl_FX_BridgeControl`
6. `UserCtrlUrl_userControl1_USER` (stale)

- No `Form - Temporary` group shown. `Global - Persistent` and `Global - Temporary` groups present, collapsed.
- No variable was modified, renamed or deleted. The stale `UserCtrl*_userControl1_USER` rows were not touched.

### 3.4 FX_vEcho absence (AC-2 gate; partial)

- **Form-level:** absent. The full `Form - Persistent` list (section 3.3) has no `FX_vEcho`, and no Form - Temporary group exists.
- **Global list (Edit > Variable, Global Objects dialog):** a read-only view of the flat list, sorted case-insensitively (observed order: `AccessAs`, `anton.ramos@3mworks.com.ph.Temp.*`, `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FarmEnableExtensionBundle`, `FarmEnforcePrefixFromAccessAs`, `gbgc_bg`, `gbgc_GradientTest1-3`, `IncludeBadgeStatusVar`). A name `FX_vEcho` would sort between `FarmEnforcePrefixFromAccessAs` and `gbgc_bg`. Neither row group contains it (decisive screenshot `t1-12`).
- **Limitations:** this is one visible window of the sorted list, not an exhaustive read. The list search filter did **not** refresh (positive control `vInventoryJson` also showed no rows; section 5). The full Global list was therefore not read.
- **Status: observed in one window; absence in the full Global list is not proven.**

## 4. Stop and recovery accounting

- Recovery use:
  - **Fresh snapshot 1 of 1:** `t1-05` (after the first Edit click returned `Ref e5 not found`).
  - **Corrected inspection 1 of 1:** the Edit click retried on the refs of `t1-05` (succeeded).
  - **Further stale-ref error:** a targeted snapshot `t1-11` after the key presses returned `Ref e659 not found`. This was not a permitted recovery: the allowance was already exhausted. No file was written for it.
- Stop decision: per the brief, stop after exhausting the allowance. No further fresh snapshot and no further refs were used.
- Dialog closure after the stop (disclosed deviations):
  - One `Escape` press did **not** close the Global Objects dialog (`t1-12` shows it still open, list unfiltered).
  - A **coordinate click** on the visible `Cancel` button at (959, 728) closed it (`t1-13`). Coordinates were used because no current ref was allowed. This is a deviation from the coordinates-as-last-resort rule and is disclosed.
  - The dialog was read-only; no change was made in it (the list search text is a view filter; the Properties pane was not touched).

## 5. Search-filter behaviour (observed; unresolved cause)

| Surface | Action | Result |
| --- | --- | --- |
| Designer, Details > Variables, left search (`Search Properties`) | `fill` `vEcho`, then End | Grid empty (`t1-02`, `t1-03`). The text was in the box but the grid did not refresh. |
| Same | `fill` `vInventoryJson` (positive control), then End | Grid still empty (`t1-04`). Positive control **failed**. |
| Global Objects list search | `fill` `vEcho`, then End | List empty (`t1-07`). |
| Same | `fill` `vInventoryJson` (positive control), then End | List empty (`t1-08`). Positive control **failed**. |
| Same | Ctrl+A, slow typing `vEcho` (key events) | Still empty (`t1-09`). |
| Same | Backspace, Ctrl+A, Delete | Text became `vEch` after one Backspace; list stayed empty (`t1-10`); after the clear the list repopulated (`t1-12`). |

- Observed: the list search did not refresh, so the filter result cannot be used as absence evidence. Cause **unresolved**.
- Residual state: the Designer's left Details search box still contains `vInventoryJson` (a view filter only). The `Form - Persistent` rows are hidden by it in the view (`t1-13`). This is not a Form change. It was not cleared (a clear needs a ref or a coordinate click).

## 6. Evidence files (T1)

Under `evidence/EXP-132/` (worker-written):

- `t1-00-designer-fresh-preflight-snapshot.md`: Designer accessibility baseline (identity, User scope, Save disabled, Variables).
- `t1-01-designer-baseline-identity-scope.png`: decisive Designer baseline screenshot.
- `t1-02-designer-variables-search-vEcho-readback.md`, `t1-03-designer-variables-search-vEcho-after-key.md`: Designer search with `vEcho` (grid empty).
- `t1-04-designer-variables-search-positive-control-vInventoryJson.md`: failed positive control (Designer).
- `t1-05-designer-fresh-recovery-snapshot.md`: the one fresh recovery snapshot.
- `t1-06-global-objects-variable-dialog-snapshot.md`: Global Objects dialog opened from Edit > Variable (Temp.* rows at top).
- `t1-07-global-objects-vEcho-search-after-end.md`, `t1-08-global-objects-positive-control-vInventoryJson.md`, `t1-09-global-objects-vEcho-slow-typed-readback.md`, `t1-10-global-objects-list-after-filter-cleared.md`: list-search attempts (all empty; `t1-10` shows the text as `vEch`).
- `t1-12-designer-state-after-stop-escape.png`: **decisive Global-list screenshot**: unfiltered list (dialog still open after Escape). Shows the sorted rows around the `FX_vEcho` sort position.
- `t1-13-designer-after-global-objects-cancel-coordinate.png`: Designer after the coordinate Cancel; no dialog; FX_BridgeTest; Save greyed (visual only).
- `T1-preflight-summary.md` (this file).

Not written: no `t1-11` file (error). The tool also writes automatic per-action snapshots `evidence/playwright/page-2026-10-25T14-*.yml` and console logs `evidence/playwright/console-2026-10-25T14-*.log`.

### What each decisive image proves and does not prove

- `t1-01`: Designer identity (`FX_BridgeTest` tab and heading, Name, Script Language `Visual C#`), User scope in the status bar, Save greyed, UserCtrl rows in Form - Persistent. Does **not** prove the full Version text (truncated), Compile Result, or the Components grid.
- `t1-12`: unfiltered Global Objects list with contiguous rows from `AccessAs` to `IncludeBadgeStatusVar`, no `FX_vEcho` at its sort position. Does **not** prove the rows below `IncludeBadgeStatusVar` or the full list.
- `t1-13`: no dialog; FX_BridgeTest open; Save greyed. Does **not** prove the Save state through the accessibility tree after the stop (refs not allowed).

## 7. Browser actions and reads (T1, exact)

Actions attempted: **19** (18 returned ok; 1 errored with no effect).

1. Tab select, tab 0 (Designer) - ok.
2. Type `vEcho` into Designer Variables search (fill) - ok (no grid refresh).
3. Key End - ok.
4. Type `vInventoryJson` into Designer Variables search (fill) - ok (no refresh).
5. Key End - ok.
6. Click Edit (ref `e5`) - **error: `Ref e5 not found`**, no effect.
7. Click Edit (ref `e5`, after fresh snapshot `t1-05`) - ok.
8. Click Variable menu item (ref `e650`) - ok; Global Objects dialog opened.
9. Type `vEcho` into Global Objects list search (fill) - ok.
10. Key End - ok.
11. Type `vInventoryJson` (fill) - ok.
12. Key End - ok.
13. Key Ctrl+A - ok.
14. Type `vEcho` (slowly) - ok.
15. Key Backspace - ok (text became `vEch`).
16. Key Ctrl+A - ok.
17. Key Delete - ok (list repopulated).
18. Key Escape - ok (dialog stayed open).
19. Mouse click at (959, 728) on Cancel - ok (dialog closed).

Reads: **19** = tab list 1; snapshots 11 (10 successful: `t1-00`, `t1-02` to `t1-10`; 1 error: targeted `t1-11`, `Ref e659 not found`); find 2 (`Variable`, `Global Objects`); screenshots 3 (`t1-01`, `t1-12`, `t1-13`); console reads 2 (Designer warning level, Designer error level).

- Browser JavaScript, evaluate or run-code written by the worker: **0**. (The `### Ran Playwright code` blocks in tool output are generated by the MCP tool.)
- Recovery: fresh snapshot 1 of 1; corrected inspection 1 of 1; a further stale-ref error (`t1-11`) exceeded the allowance.
- Save: 0. Regenerate: 0. Delete: 0. Form close/reopen: 0. Runtime open/click: 0. Asset, script, component, variable edits: 0.

## 8. Console comparison

| Reading | Designer errors / warnings | Note |
| --- | --- | --- |
| Start (`t1-00`, warning read) | 2 / 0 | Same two `unload` permissions-policy errors as baseline. |
| After Global Objects work (`t1-12` error read) | 2 / 0 | No increase. |
| After the coordinate Cancel (page footer returned with the click result) | 2 / 0 | Footer count only; no separate console read after closure. Stop rule (unexplained increase) not triggered. |

Web Client console: **not read** in this run (tab 1 not selected).

## 9. Gate status (AC-1 to AC-2, T1)

- **AC-1 (preflight identity/isolation):** **partial.** Designer User scope, FX_BridgeTest User version, clean Designer and Designer console baseline are observed (`t1-00`, `t1-01`). **Not established this run:** Web Client account header; `FX_CustomerPortal` present; `MockLoginPortal` and `FX_InventoryPrototype01` absent in the Select Form inventory; `FX_BridgeTest` in the Select Form list. The EXP-131 T10 read of the header (`anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`) is prior-day evidence only.
- **AC-2 (baseline and source pattern):** **partial.** Source pattern and variable metadata are established from saved copies (section 3.1). FX_vEcho is absent at Form level (observed) and absent from one visible window of the Global list (observed). **Not established this run:** the FX_Echo C# text and Compile Result; the `FX_Bridge/index.html` text; the `FX_BridgeControl` reference (Use Web Control, Control URL). Prior-day readbacks exist: EXP-131 `t9-14` (asset text), `t9-08` and `t9-10` (reference), `t9-17` and `t9-18` (script). They are not this run's baseline.

## 10. Open questions and blockers (for coordinator disposition)

1. **Blocker: recovery allowance exhausted.** The experiment's allowance (one fresh snapshot, one corrected inspection) is used up. The stale-ref error after key presses in the Global Objects dialog (`t1-11`) occurred after the allowance. The remaining T1 gates (Web Client preflight, asset, reference, script and Compile Result baselines, and the full Global list) need fresh refs. Decide whether a new T1 may run with a new allowance, or whether the experiment is closed as blocked at T1. AGENTS.md: a fresh session does not expand limits.
2. **Filter behaviour:** the Designer and Global Objects list searches did not refresh under fill, End or slow typing. Cause unresolved. Absence of `FX_vEcho` in the full Global list therefore needs a full read, or the coordinator must accept the sort-position evidence (`t1-12`) as sufficient.
3. **Dialog handling:** Escape did not close the Global Objects dialog. A coordinate click was used to close it. The next T1 should avoid key presses inside that dialog and take an untargeted snapshot before every ref click.
4. **Invocation signature difference** (section 3.1): the Mock invoke passes no argument; the EXP-131 candidate passes `"bridge-probe"`. Unresolved. Not changed here.
5. **Residual view filter** in the Designer Details search box (`vInventoryJson`). Not a Form change. Clearing needs a ref or a coordinate click.
6. **Account ownership:** the operator confirmation recorded at EXP-131 T1 is the only basis. Not re-verified this run (Web Client not read).

## 11. Knowledge state (T1)

- Mock variable write (`ThisForm.Variables("vInventoryJson").Value = json`) and read pattern (`WSForm.getVarValue`): **observed** in saved copies (source evidence, not runtime). Replay-verified: **no**.
- `vInventoryJson` metadata Global=True, Persistent=True, category Global - Persistent: **observed** (EXP-130 T2, read-only).
- FX_BridgeTest Designer baseline (identity, User scope, Visual C#, Save disabled, console 2/0): **observed** (this run).
- Form-level variables of FX_BridgeTest (six UserCtrl rows, no FX_vEcho): **observed** (this run).
- FX_vEcho absent from the visible window of the Global list: **observed**; absent from the full Global list: **unresolved**.
- Search-filter refresh behaviour in the Designer and Global Objects dialogs: **observed** (positive control failed); cause **unresolved**.
- Mock invoke signature versus the EXP-131 candidate: **unresolved** (noted; not tested).
- Web Client account gate, FX_CustomerPortal, MockLoginPortal and FX_InventoryPrototype01 absence in the Select Form list: **not established** in this run (prior-day only).

## 12. Next permitted action

None in this task. The worker stopped at the T1 boundary with the recovery allowance exhausted. The next step requires coordinator disposition (section 10, item 1). Do not start T2 (variable creation) until the account, scope, identity, cleanliness and target-baseline gates are completed in a fresh task.
