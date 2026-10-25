# EXP-132 T3 - baseline compile check and FX_vEcho creation gate (stopped before commit; 2026-10-25)

Harness header: `run_id=R-20261025-220702-YGFW`, `experiment_id=EXP-132`, `cycle_id=4`, `task=T3`, `worker_session_id=161a3b0b-c4de-4475-b40c-2f32683d3e1a`, `task_message_id=9774b15e-c5e4-4f34-9de4-8f642f0d36b5`.

## 1. Outcome

- **FX_vEcho was NOT created.** The supported creation dialogs expose only a Name field. Global and Persistent settings cannot be confirmed before commit, which the T3 instruction requires (step 4). The worker stopped without committing. No variable was created, renamed or deleted.
- **No Form Save, no Form close/reopen, no FX_Echo edit, no FX_Bridge/index.html edit, no runtime activation** occurred in T3.
- **FX_BridgeTest is open** in the Designer, User scope (`anton.ramos@3mworks.com.ph`), Save/Regenerate/Undo/Redo disabled, no dialog, console 2 errors / 0 warnings.
- **Stop trigger:** unsupported or ambiguous mutation path (creation dialog cannot show the required Global/Persistent attributes before commit). This is a coordinator decision point; see section 6.

## 2. Gates (steps 1-3 of the T3 instruction)

| Gate | Observation | Evidence |
| --- | --- | --- |
| Web Client account header | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (find on the iframe banner; header button) | Read via `browser_find` (text match), not a screenshot |
| Web Client console | 3 errors / 10 warnings (same as T2's first read; no increase) | Page footer, tab 1 |
| Designer identity and scope | `FX_BridgeTest`, Version `User version for user anton.ramos@3mworks.com.ph`; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t3-02`, snapshot |
| Designer dialogs and Save | No dialog open at start; Save disabled (accessibility: `button "Save" [disabled]`) | `t3-02`, snapshot, `find` |
| Designer console baseline | 2 errors / 0 warnings at start; unchanged at every later footer read (after Script Editor, after +, after Cancel, final) | Page footer |
| FX_Echo Compile Result, Errors tab (step 3) | Script Editor source unchanged: `public string FX_Echo(string s)` returns `"FX_ECHO:" + s;` inside the `FX_BridgeTest : FormScript` scaffold. Compile Result **Errors** grid shows column headers (Line, Column, Error) and **no rows** | `t3-01` (decisive for the source and Errors grid) |

**Compile status:** an empty Errors grid is recorded as **not affirmative proof of successful compilation** (per the T3 instruction). The Output tab was blank in T2. Compile status remains **unresolved**. The compile was not initiated; the script was not modified.

Script Editor was closed with **Cancel** only (no OK, no Download).

## 3. FX_vEcho absence (step 2 disposition)

The coordinator disposition (accept the User-scoped tree; do not repeat exhaustive Global Objects searches) was followed. Two independent visible readbacks in this run show no `FX_vEcho`:

- Designer Details > Variables tree (`t3-02`): Global - Persistent rows `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`, ... ; no `FX_vEcho` between `ccvw_PrinterName` and `gbgc_bg`. Form - Persistent: six `UserCtrl*` rows only.
- Edit > Variable > Global Objects list (`t3-04`; full rendered snapshot `e1296`): `AccessAs`, `anton.ramos@3mworks.com.ph.Temp.*` (8 rows), `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `FarmEnableExtensionBundle`, `FarmEnforcePrefixFromAccessAs`, `gbgc_bg` ... `lsm1_TimeZone`. No `FX_vEcho` between `FarmEnforcePrefixFromAccessAs` and `gbgc_bg` (case-insensitive sort position). `vInventoryJson` is also absent from this list, consistent with the documented scope limit (its Mock-owner User version belongs to another account).

**Limits:** absence is observed in the rendered lists of this User's Designer. Tenant-wide or other-scope absence is not established (unresolved, as the coordinator noted).

## 4. Variable creation attempt (step 4): stopped before commit

Two supported UI paths were opened and both were cancelled with **Cancel** (nothing committed):

1. **Details > Variables blue + (`t3-03`)**: opens a **"Form Variable"** dialog with a single `Name:` field, OK and Cancel. This path creates a **Form-level** variable. The brief prohibits substituting a Form-level variable without coordinator disposition, so it was not used.
2. **Edit > Variable > Global Objects > blue + (`t3-04` list, `t3-05`)**: opens a **"New"** dialog with a single `Name:` field, OK and Cancel. This is the Global-object path. The dialog shows **no Global, Persistent, category or version attribute** before commit. The Properties pane on the Global Objects dialog was empty (no variable selected), and no property sheet for a new entry was visible before commit.

Because the required pre-commit attributes (category, Global=True, Persistent=True, version scope) cannot be confirmed in either supported dialog, the T3 instruction's rule applies: **stop without committing**. Name-only OK was not clicked. No `FX_vEcho` text was typed into any field.

## 5. Post-variable readback (step 5)

Not applicable: no variable was created. The six Form-level UserCtrl variables are unchanged (`t3-02`, `t3-06`). No Form-level FX_vEcho was created.

## 6. Coordinator decision needed (blocker)

The planned definition (Global=True, Persistent=True) cannot be confirmed through the observed name-only creation dialogs. Options for the coordinator (the worker does not choose):

- **A.** Authorize committing the name-only Global Objects "New" dialog once, then verify Global/Persistent in its Properties pane. If either attribute differs, the worker stops and reports without deletion or a second change (the stale-variable rule applies). This is a new mutation path the current T3 instruction did not approve.
- **B.** Identify a documented UI path that shows Global/Persistent before commit. None was observed here.
- **C.** Defer EXP-132 at this gate.

## 7. Specialist-guidance qualification (step 6)

The T3 instruction records specialist guidance that global-variable access is documented via `Application.Variables` and form-variable access via `ThisForm.Variables`, with `WSForm.getVarValue` described as reading form variables. This is confirmed in the repository docs:

- `docs/mongoose/guides/scripts.md` lines 76-95: global variables via `Application.Variables("GlobalVariable").Value`; form variables via `ThisForm.Variables("FormVariable").Value`.
- `docs/mongoose/guides/user-control.md` lines 200-206: "Use `WSForm.getVarValue` to retrieve the value of a form variable."

Consequence: the earlier inference that the Mock metadata proves no Form-level variable is needed is **not supported as a documented API claim**. The approved plan (`ThisForm.Variables("FX_vEcho")` in FX_Echo; `WSForm.getVarValue("FX_vEcho", ...)` in the asset) is retained unchanged. A future success would establish a name-based method-to-page round trip, not that the defined Global variable was the storage used. EXP-130 U-1 (runtime resolution of `ThisForm.Variables` on a Global variable) stays **unresolved**.

## 8. Browser accounting (T3)

- **Actions: 15.** Tab selects 3 (0, 1, 0); clicks 12 (Script Editor open; Compile Result expand; Errors tab; Script Editor Cancel; Details Variables tab; Form Variable +; Form Variable Cancel; Edit menu; Variable menu item; Global Objects +; New Cancel; Global Objects Cancel).
- **Reads: 27.** Tab list 1; snapshots 6 explicit (5 ok, 1 error); finds 14; screenshots 6.
- **Recovery allowance:** fresh untargeted snapshot 1/1 used (after `Ref e275 not found`, on a Variables-panel targeted snapshot); corrected inspection 1/1 used (fresh refs from that snapshot, then find-based refs for each dialog).
- **Browser JavaScript, evaluate or run-code written by the worker: 0.** The `### Ran Playwright code` blocks are tool-generated.

## 9. Mutation and lifecycle accounting (T3)

- Mongoose creations or modifications: **0**. Variables created: **0**. Form Script edits: **0**. Asset edits: **0**. Component or reference changes: **0**.
- Designer Save: **0**. Regenerate/Delete: **0**. Form close/reopen: **0**. Runtime open or FX_BridgeButton click: **0**.
- Dialogs closed with Cancel only: Script Editor (1), Form Variable (1), New (1), Global Objects (1). No OK clicked.
- View-only changes: Compile Result panel expanded; Designer Details tab switched to Variables (it had been on Components).

## 10. Console comparison

| Reading | Designer (tab 0) | Web Client (tab 1) |
| --- | --- | --- |
| Start of T3 | 2 errors / 0 warnings | 3 errors / 10 warnings |
| After Script Editor, + dialogs, Cancels | 2 / 0 (each footer read) | not re-read |
| Final | 2 / 0 | not re-read |

No increase. Stop rules on console were not triggered.

## 11. Evidence files written (T3)

- `evidence/EXP-132/t3-01-script-editor-compile-result-errors-readonly.png` - Script Editor (FX_Echo source, scaffold intact); Compile Result Errors tab selected, grid header only, no rows. Proves the source text and the empty grid. Does NOT prove compilation success.
- `evidence/EXP-132/t3-02-designer-variables-pre-create-baseline.png` - Designer before any creation: FX_BridgeTest, User scope, Details > Variables with Form - Persistent UserCtrl rows and Global - Persistent `ccvw_OutputFormatInlineAll`, `ccvw_PrinterName`, `gbgc_bg`. Proves the visible sort gap. Does NOT prove the full tenant Global list.
- `evidence/EXP-132/t3-03-after-variable-plus-click-pre-commit.png` - Form-level "Form Variable" name-only dialog (opened by Details +), then cancelled. Proves the dialog exposes no Global/Persistent attribute.
- `evidence/EXP-132/t3-04-global-objects-variable-dialog-opened.png` - Edit > Variable > Global Objects dialog opened (list with `FarmEnforcePrefixFromAccessAs` -> `gbgc_bg`, no FX_vEcho; Properties pane empty). Proves the Global list view and the absence of a selected object's properties.
- `evidence/EXP-132/t3-05-global-objects-after-plus-click-precommit.png` - Global Objects "New" name-only dialog, then cancelled. Proves the Global creation dialog exposes no Global/Persistent attribute before commit.
- `evidence/EXP-132/t3-06-designer-after-variable-stop-clean.png` - Final Designer: FX_BridgeTest, User scope, no dialog, Variables tree unchanged. Save disabled is confirmed by the accessibility `find` (not from the image).
- `evidence/EXP-132/T3-variable-creation-stop-summary.md` - this file.
- `experiments/EXP-132-fx-web-user-control-bridge-via-form-variable-readb.md` - status line and T3 section appended (documentation, section 7 qualification).
- Tool-generated (not written directly by the worker): `evidence/playwright/page-2026-10-25T14-*.yml` snapshot files and `console-*.log` from browser actions.

## 12. Knowledge state (T3)

- Account header, User scope, FX_BridgeTest identity: **observed** (this run).
- Designer baseline (Save disabled, no dialog, console 2/0): **observed**.
- Original FX_Echo source: **observed** (visual). Compile status: **unresolved** (empty Errors grid is not affirmative).
- FX_vEcho absent from the Designer Global-Persistent tree and the Global Objects list (sorted position): **observed**; tenant-wide or other-scope absence: **unresolved**.
- Form Variable "+" creates a name-only Form-level variable; Global Objects "+" creates a name-only Global object: **observed** (dialog text only; nothing committed).
- Global/Persistent attributes of a new variable before commit: **unresolved** (not visible in the supported UI observed here).
- Documented `Application.Variables` vs `ThisForm.Variables` and `WSForm.getVarValue` as form-variable reader: **observed in repository docs** (`docs/mongoose/guides/scripts.md`, `user-control.md`). Runtime resolution for a Global variable: **unresolved** (EXP-130 U-1).
- Replay verification of any behaviour: **not claimed**.

## 13. Open questions (for the coordinator)

1. Choose option A, B or C in section 6 before any FX_vEcho creation.
2. Accept the Errors-grid-empty result as unresolved compile status, or require a different compile check.
3. Confirm EXP-132 keeps `WSForm.invoke("FX_Echo", "bridge-probe", ...)` (unchanged) and the approved `ThisForm.Variables` / `WSForm.getVarValue` plan (section 7).
