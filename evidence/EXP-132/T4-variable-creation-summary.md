# EXP-132 T4 - create and verify exactly one FX_vEcho Global Object (2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=6`, `task=T4`, `worker_session_id=a82cd026-8d88-452a-91c8-c21fef2811b3`, `task_message_id=5b1bd39c-facc-4149-995a-37aa67bb041f`.

## 1. Outcome

- **Exactly one `FX_vEcho` was created**, through Edit > Variable > Global Objects > blue "+" > New dialog (Name = `FX_vEcho`, then OK). Nothing else was created, renamed or deleted.
- **Read-back metadata (observed, Global Objects Properties pane, twice):** Name `FX_vEcho`; Description blank; Value blank; Persistent `True`; Global `True`; Version `User version for user anton.ramos@3mworks.com.ph`. No property correction was needed or made.
- **Persistence beyond this Designer session is NOT established.** The Designer's Details > Variables tree (Global - Persistent group) did not show `FX_vEcho` after the commit (`T4-06`). The Global Objects editor did show it after close and reopen in the same session (`T4-07`). The Designer Save control is now enabled (it was disabled before T4). Whether the variable is stored server-side before an ordinary Form Save is unresolved.
- **No Form Save, no Form close/reopen, no FX_Echo edit, no FX_Bridge/index.html edit, no FX_BridgeControl change, no runtime activation** occurred in T4. FX_BridgeTest remains open in the Designer, User scope, with Save now enabled.
- **AC-3: met for creation and metadata readback** (name, Global=True, Persistent=True, Value blank, User version visible in `T4-05` and `T4-07`). Persistence after the required Designer Save remains for the next task.

## 2. Gates (before any mutation)

| Gate | Observation | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (find on the iframe banner) | find result, tab 1 |
| Web Client console | 3 errors / 10 warnings (`browser_console_messages`, total 44) - matches the T2/T3 baseline | console read, tab 1 |
| Designer identity and scope | `FX_BridgeTest`, Version `User version for user anton.ramos@3mworks.com.ph`, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `T4-01`, snapshot |
| Designer Save and dialogs before mutation | Save disabled (`button "Save" [disabled]`), Undo/Redo disabled, no dialog open | `T4-01` (Save/Undo icons greyed), snapshot |
| Designer console baseline | 2 errors / 0 warnings | footer, every read |
| FX_vEcho absence (step 2) | Not in the Global Objects list before "+" (list runs `FarmEnforcePrefixFromAccessAs` -> `gbgc_bg`); not in the Designer Global - Persistent tree (`ccvw_PrinterName` -> `gbgc_bg`) | `T4-02` (before "+"), snapshot e795 |

Existing Form-level variables (not touched in T4): six `UserCtrl*` rows in Form - Persistent (`UserCtrl_FX_BridgeControl`, `UserCtrl_userControl1_USER`, `UserCtrlAsm_FX_BridgeControl`, `UserCtrlAsm_userControl1_USER`, `UserCtrlUrl_FX_BridgeControl`, `UserCtrlUrl_userControl1_USER`). No Form-level FX_vEcho was created.

## 3. Creation (step 3) - Global Objects New dialog only

1. Edit menu > Variable > Global Objects opened. The grid's first unlabeled toolbar button (blue "+", visually identified in `T4-02`) was clicked once. Details > Variables "+" was **not** used.
2. The "New" dialog exposed only a `Name:` field (`T4-03`, pre-commit, empty).
3. `FX_vEcho` typed into Name (`T4-04`; the field shows `FX_vEcho` and nothing else is in the dialog).
4. The New dialog's OK was clicked **once**. Console stayed 2 / 0.

## 4. Metadata readback (step 4) - before the parent OK

Immediately after the New OK, the FX_vEcho row was highlighted in the Global Objects list and the Properties pane showed (`T4-05`, `find`/snapshot `e1065`):

| Property | Value |
| --- | --- |
| Name | FX_vEcho |
| Description | (blank) |
| Value | (blank) |
| Persistent | True |
| Global | True |
| Version | User version for user anton.ramos@3mworks.com.ph |

Category: the variable is listed in the Global Objects **Variables** grid (Global object). Its Global=True and Persistent=True values match the documented vInventoryJson metadata (EXP-130 T2). Creation route alone was not treated as proof; the values were read.

## 5. Parent dialog commit (step 6)

- A stale-ref error occurred on the parent Global Objects OK (`Ref e1098 not found`; no effect). **Recovery allowance 1/1:** one fresh untargeted snapshot was taken. It showed the dialog still open, FX_vEcho in the list, and the OK button at a new ref.
- **Corrected attempt (recovery 1/1):** the parent Global Objects OK was clicked once. The dialog closed, console stayed 2 / 0.
- Immediately after this commit, `find` for `FX_vEcho` returned no match on the page, and the Designer Details Variables tree (`T4-06`) did not list FX_vEcho under Global - Persistent (it still lists `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`). Cause unresolved (tree refresh vs. not yet stored).
- The Designer top-toolbar Save control changed from disabled (`T4-01`) to enabled (snapshot and find: `button "Save"` without `[disabled]`; `T4-06` icon darker). Undo also appears active in `T4-06`. **Save was not clicked.**

## 6. Read-only persistence check within the Designer session (step 7)

- Edit > Variable > Global Objects was reopened (no change made). FX_vEcho appeared in the list (`find`, one match: `gridcell "FX_vEcho"`).
- Clicking its row (selection only) showed the same Properties in `T4-07`: Name `FX_vEcho`, Value blank, Persistent `True`, Global `True`, Version `User version for user an...` (truncated in the image; full text read in `T4-05` snapshot).
- Closed with the dialog's **Cancel** (read-only). `find` afterward: no Global Objects dialog open.
- Exactly one `FX_vEcho` row was found in the reopened list (find returned one match).

## 7. Operator-authorized accounting (distinct dialog commits)

- New dialog OK (create `FX_vEcho`): **1**.
- Persistent property edit: **0** (not needed; Persistent already True).
- Parent Global Objects OK (commit): **1** (after the stale-ref recovery).
- Global Objects Cancel (reopened read-only check): **1**.
- None of these is the experiment's single ordinary Designer Form Save. **Designer Form Save: 0.** Form close/reopen: **0**. Regenerate/Delete/Unload/FormSync/metadata operations: **0**.

## 8. Mutation and lifecycle accounting

- Variables created: **1** (`FX_vEcho`, Global Objects, Global=True, Persistent=True).
- Variables renamed/deleted/modified: **0**. Form-level variables created: **0**. UserCtrl variables touched: **0**.
- FX_Echo edits: **0**. FX_Bridge/index.html edits: **0**. FX_BridgeControl changes: **0**. Component changes: **0**.
- Runtime open or FX_BridgeButton activation: **0**.
- Browser JavaScript, evaluate or run-code written by the worker: **0** (`### Ran Playwright code` blocks are tool-generated).

## 9. Browser action and read totals

- **Actions: 14.** Tab selects 3 (0, 1, 0); clicks 10 (Edit, Variable, blue "+", New OK, parent OK (1 failed with stale ref, no effect), parent OK, Edit, Variable, FX_vEcho row select, Cancel); typed text 1 (Name `FX_vEcho`).
- **Reads: 29.** Tab list 1; console read 1; snapshots 5 (initial; `e795`; `e1104`; `e1065`; one fresh untargeted recovery snapshot); finds 15; screenshots 7 (`T4-01` to `T4-07`).
- **Recovery consumed:** fresh untargeted snapshot 1/1; corrected attempt 1/1. No further recovery was used.

## 10. Console comparison

| Reading | Designer (tab 0) | Web Client (tab 1) |
| --- | --- | --- |
| Start of T4 | 2 errors / 0 warnings | 3 errors / 10 warnings |
| After "+", name typed, New OK | 2 / 0 | not re-read |
| After parent OK | 2 / 0 | not re-read |
| After reopen, Cancel, final | 2 / 0 | not re-read |

No increase in the Designer. The Web Client was not mutated; its console was not re-read after the Designer work (not required by a stop rule).

## 11. Evidence files written (T4)

- `evidence/EXP-132/T4-01-designer-pre-mutation-baseline.png` - Designer before mutation: FX_BridgeTest, User scope; Save and Undo greyed; Details > Variables with Global - Persistent `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`. Proves the pre-mutation Designer state and the absence gap in the visible tree. Does not prove the full tenant list.
- `evidence/EXP-132/T4-02-global-objects-dialog-pre-add-readonly.png` - Global Objects dialog before "+": list `FarmEnforcePrefixFromAccessAs` -> `gbgc_bg`, no FX_vEcho; Properties empty; blue "+" identified. Read-only view.
- `evidence/EXP-132/T4-03-global-objects-new-dialog-precommit.png` - New dialog with empty Name field, OK/Cancel only. Shows no Global/Persistent attribute before commit.
- `evidence/EXP-132/T4-04-global-objects-new-dialog-name-typed-precommit.png` - New dialog with Name `FX_vEcho`, OK/Cancel only, before OK. Proves the typed name, not creation.
- `evidence/EXP-132/T4-05-global-objects-fx_vEcho-properties-after-new-ok.png` - After New OK: FX_vEcho highlighted in the Global Objects list; Properties Name `FX_vEcho`, Description and Value blank, Persistent True, Global True, Version "User version for user an...". Proves the metadata and selection in the still-open parent dialog. The Version text is truncated in the image; the full value is in the snapshot readback above.
- `evidence/EXP-132/T4-06-designer-after-global-objects-ok-readonly.png` - After parent OK: Global Objects dialog closed; Details Variables Global - Persistent does **not** show FX_vEcho; Save and Undo icons appear active. Proves the post-commit Designer state and the non-refresh observation. Does not prove server storage. Save state is also proven by the accessibility find (enabled).
- `evidence/EXP-132/T4-07-global-objects-reopened-fx_vEcho-properties-readonly.png` - Reopened Global Objects (read-only): FX_vEcho listed and selected; Properties Name `FX_vEcho`, Value blank, Persistent True, Global True, Version "User version for user an...". Proves the list-level persistence within this Designer session only.
- `evidence/EXP-132/T4-variable-creation-summary.md` - this file.
- Tool-generated only (not written directly by the worker): `evidence/playwright/page-2026-10-25T14-*.yml` snapshot files and `console-*.log` files.
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` - status line and T4 section appended.

## 12. Acceptance checks (T4 scope)

- **AC-1:** supported (account header, User scope, FX_BridgeTest identity, Save disabled before mutation, console 2/0 and 3/10). The FX_CustomerPortal, MockLoginPortal and FX_InventoryPrototype01 checks from T2 are not re-run in T4 (T2 result stands).
- **AC-2:** baseline reconfirmed for the Designer Global list and Form variables; FX_Echo, HTML and FX_BridgeControl baselines were not re-read in T4 (T2/T3 readbacks stand).
- **AC-3:** **met for creation and metadata** (one `FX_vEcho`; Global=True; Persistent=True; Value blank; User version; visible in `T4-05` and `T4-07`). Not yet met for persistence after the planned Designer Save (Save is pending, and the Designer tree does not yet show the variable).
- **AC-4 to AC-9:** not started in T4 (by instruction: no script, asset, Save, lifecycle or runtime work).

## 13. Knowledge state (T4)

- Creation of one Global Objects variable named `FX_vEcho` through the New dialog OK: **observed** (this run).
- Global=True, Persistent=True, Value blank, User version on creation: **observed** (Properties readback, before and after parent OK, same session).
- Persistence in the Global Objects list after parent OK and reopen (same Designer session): **observed**.
- Visibility in the Designer Details Variables tree after commit: **observed as absent** (tree not refreshed or not stored - cause **unresolved**).
- Server-side or post-Save persistence: **unresolved** (requires the planned Designer Save and close/reopen in a later task).
- Save enabled after the Global Objects commit: **observed**; whether it reflects the variable, another pending change or the dialog commit itself: **unresolved**.
- Runtime resolution of `ThisForm.Variables` / `WSForm.getVarValue` for a Global variable (EXP-130 U-1): **unresolved**.
- Tenant-wide or other-user-version absence or presence of FX_vEcho: **not checked** (outside the User-scoped operation).
- Replay verification: **not claimed**.

## 14. Open items for the coordinator

1. The Designer Save is now enabled. Its ordinary Save, close/reopen and FX_vEcho persistence check belong to the next task. T4 did not perform them, as instructed.
2. The Designer tree did not show FX_vEcho after the commit. Confirm whether the next task should expect this to resolve after the Save and reopen.
3. Some Global Objects rows render in a salmon colour (`AccessAs`, `anton.ramos@3mworks.com.ph.Temp.*`, `FarmEnableExtensionBundle`, `FarmEnforcePrefixFromAccessAs`), whereas the other rows render in black. FX_vEcho was selected (highlighted) in the readback screenshots, so its own colour is not comparable. The meaning of the salmon colour was not investigated.
4. The Web Client console was not re-read after the Designer work (no Web Client action was taken beyond reading its header and console at the start).
