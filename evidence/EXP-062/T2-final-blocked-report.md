# EXP-062 — T2 final documentation: BLOCKED at AC-2 (binding prerequisite); AC-3 to AC-12 not attempted

Run R-20261011-231213-E1AR, cycle 1, task T2. Worker session 9b0b9fe4-1d91-4845-af41-7213db776f76; task_message_id 867f8caa-ca5b-401b-a3f8-f7f414699990. Date 2026-10-11.

**Scope of T2:** documentation only. **Zero browser calls.** Zero Mongoose interactions. Local reads (Grep, Read, Glob) of the T1 evidence and tool-written snapshot files were used to check the T1 claims.

**Final outcome:** BLOCKED. AC-1 supported (observed). AC-2 failed on its binding prerequisite: `FX_Picture` was absent from both inspected native Designer binding surfaces. AC-3 to AC-12 were not attempted. Nothing in the Form was changed. Classification: observed only. Nothing is replay_verified.

## 1. Sources reviewed in T2 (local, no browser)

- `experiments/EXP-062-hello-world-part-4-section-4-configure-picture-import-ui.md` (T1 record).
- `evidence/EXP-062/T1-report.md` (full T1 report, audit, baseline matrices).
- `evidence/EXP-062/T1-checkpoint.md` (superseded checkpoint; read for consistency only).
- The three EXP-062 PNG files (glob-confirmed present; viewed in T1, not re-opened in T2).
- Local re-check of the binding and caption listbox snapshots (see §4). These were re-read in T2 to close a T1 gap.

## 2. AC-1 findings (supported, observed)

| Finding | Evidence | Limit |
| --- | --- | --- |
| Authenticated Designer usable; no sign-in, configuration, or session challenge; no browser-native dialog; no portal banner | T1 §3; tab list 1 and 2; snapshot `page-2026-10-11T15-13-11-696Z.yml` | Same session; no authentication route inspected (by brief) |
| Loaded Form is `FX_Items`; Version `User version for user anton.ramos@3mworks.com.ph`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph` | `t1-01`; snapshot `…15-13-11-696Z.yml` (Form tab Version row) | Footer and Version are on-screen text; the operator identity was taken from the brief and EXP-061 identity bar |
| Toolbar Save, Regenerate Form, Undo, Redo disabled before mutation | `t1-01`; snapshot 1 (toolbar) | Observed in one session |
| Edit permission (User scope) | Not proven. Only that editable controls were present and selectable. No mutation was attempted | **Inferred only.** Server-side permission not verified |

## 3. AC-2 (failed on the binding prerequisite)

### 3.1 Prerequisite result: FAILED

`FX_Picture` (the IDO property created in EXP-061) is **not offered** by either native Designer binding surface inspected:

| Surface | How reached | Result | Readback |
| --- | --- | --- | --- |
| Binding dropdown on `FX_UMCombobox` (Binding Type Property) | Dropdown arrow, read-only; dismissed with Escape; binding unchanged `object.FX_UM` | List of IDO properties; no `FX_Picture`. List read to its end in T2 (`object.UpdatedBy`) | `evidence/playwright/page-2026-10-11T15-15-17-064Z.yml` (listbox at lines ~1128–1230) |
| Edit Property Binding dialog, Property picker, on `FX_UMCombobox` | "Open Edit Property Dialog" button, then the Property Open button; dismissed with Escape; dialog closed with **Cancel** (no OK) | List of IDO properties; no `FX_Picture`. List read to its end (`UDFRowPointer`) | `evidence/playwright/page-2026-10-11T15-16-33-458Z.yml` (dialog); `…15-16-44-478Z.yml` (picker, lines ~1154–1255) |

Checks on the readbacks:
- Both lists contain FX_Item, FX_Cost, FX_Description, and FX_UM. That makes them the FX_Items IDO's property list rather than a list from another IDO. Scope by content, not by an explicit identity readback.
- **Case-insensitive** search for "picture" in every T1 binding and property snapshot (`page-…15-1[56]-*.yml`): **0 matches** in both binding surfaces. The only case-insensitive match in the T1 window is in the Caption string listing: the string ID `sAllPictureFiles` (`…15-15-48-849Z.yml`, line 4843). That is a string ID, not an IDO property. It is not `FX_Picture`.
- The T1 search was case-sensitive and was read only partially in the dropdown. T2 closed both gaps. The result did not change.

### 3.2 Other AC-2 sub-checks

| Sub-check | Result | Evidence | Status |
| --- | --- | --- | --- |
| Complete component baseline (17 entries: Name, Type, Pane, Container, Tab, grid Data Source, grid Event) | Captured | T1 §5; snapshot 1 (`page-2026-10-11T15-13-11-696Z.yml`) | Supported with limits (§3.3) |
| Exactly one `FX_VarTestEdit` | One Edit, Pane 1, Tab 0, binding `variables.FX_VarTest` | T1 §5; snapshot 1 (lines ~832–853) | Supported |
| Exactly one `FX_RefreshButton` | One PushButton, Pane 1, Tab 0, Caption literal `FX_Refresh`, Primary `FX_Test` | T1 §5; `…15-13-34-430Z.yml` | Supported (Primary read from the authoritative Events row, not the grid) |
| `FX_VarTestEdit` complete properties before deletion | Read (T1 §5, FX_VarTestEdit identity) | snapshot 1 (Component tab rows); `t1-01` (top of grid only) | Supported; Data Source row blank (grid shows `variables.FX_VarTest`); unexplained, as in EXP-058 |
| FX_VarTest variable (Form - Temporary, `~LIT~()`, Persistent False, Global False) | Read | `…15-14-56-597Z.yml` | Supported |
| FX_Test group with two actions (Prompt seq 0; Set Values seq 1; both enabled) | Read | `…15-14-49-376Z.yml` | Supported |
| FX_ImportPicture absent | No such group or action | `…15-14-49-376Z.yml`; grid rows | Supported |
| FX_sImport absent (creation gate) | Absent from the Caption string listing | `…15-15-48-849Z.yml` (FX_ string IDs: FX_sCost, FX_sDescription, FX_sItem, FX_sUM only) | Supported as a gate result; the listing's completeness and cache were not checked |
| FX_Picture binding prerequisite | **Absent from both surfaces** | §3.1 | **FAILED** |

### 3.3 Incomplete AC-2 observations (explicit)

The T2 brief asks that the incomplete baseline be acknowledged. The following were **not** observed or were observed only partially:
1. **Pane (00) and Pane (01)** Component-tab property trees were not read. EXP-058 recorded these as unavailable in this UI, and T1 did not re-test that.
2. **GridColumn** detail properties (Caption, Binding Type, Data Source Binding Type) for the four columns were not read. Only the grid's Name, Type, Data Source, Pane, Container, and Tab cells were captured.
3. **FormCollectionGrid** detail properties were not read.
4. **Miscellaneous > Specific Attributes** for the existing Static components was not expanded. The default state of "No Colon" on existing statics is unknown.
5. **Events rows** for the existing statics and edits were read only at the summary level (blank). Only FX_RefreshButton's Drag From and Drop On rows were read (0 events each). Other event rows of other components were not individually expanded.
6. **Right-Click Menu** was read only for FX_RefreshButton and FX_VarTestEdit (blank) and FX_UMCombobox (`StdDefault`, from screenshot `t1-03`). Other components' Right-Click Menu values were not read.
7. **Caption and Binding Type** for the existing statics and edits were read from snapshot rows; they were not re-read from the screen.
8. **Global variables** (`ccvw_*`, `gbgc_bg`, and others) were listed by name only.
9. **FX_VarTestEdit property screenshot `t1-01`** shows only the top of the Properties grid. Its Data Source, Binding, and Events rows come from snapshot 1 and not from the screenshot.
10. **IDO Collections** (the EXP-061 surface) was not re-read in T1 or T2. The FX_Picture property's persistence is recorded only from the EXP-061 record. It was **not** independently verified in EXP-062.

## 4. Re-check of the T1 binding and caption readbacks (T2, local reads only)

- Case-insensitive "picture" across `evidence/playwright/page-2026-10-11T15-1[56]-*.yml`: 1 file with a match (`…15-15-48-849Z.yml`, the Caption listing); the match is `sAllPictureFiles`. Binding and picker snapshots: 0 matches.
- The binding dropdown listing (`…15-15-17-064Z.yml`) was read from its start to `object.UpdatedBy` (lines ~1128–1230). Entries include `object._ItemId`, `object._ItemWarnings`, `object.CreateDate`, `object.CreatedBy`, `object.FX_Cost`, `object.FX_Description`, `object.FX_Item`, `object.FX_UM`, `object.InWorkflow`, `object.NoteExistsFlag`, `object.RecordDate`, `object.RowPointer`, `object.UDFDateTime1–6`, `object.UDFDecimal1–6`, `object.UDFInteger1–6`, `object.UDFLongText1–2`, `object.UDFMediumText1–6`, `object.UDFRecordDate`, `object.UDFRowPointer`, `object.UDFShortText1–7`, and `object.UpdatedBy`. **No `FX_Picture`.**
- The Property picker (`…15-16-44-478Z.yml`) was read to `UDFRowPointer`. **No `FX_Picture`.**

## 5. Cause of the FAILED prerequisite (unresolved)

- **Observed:** the Designer's current IDO property lists in this session do not include `FX_Picture`. EXP-061 reports the property as added to the IDO.
- **Candidate explanation, not verified:** the Designer session is using cached or previously loaded IDO or global-object metadata that predates EXP-061's property addition. EXP-061 left this open (its record says whether a reload is needed is "not yet known").
- **Other explanations not excluded:** a picker filter on binary-typed properties. Weighing against it: the Edit Property Binding dialog shows a "Load Just In Time (normally only for large binary data)" checkbox, which suggests binary binding is a supported option. Neither hypothesis was tested.
- **Not tested, by brief:** a global-object or IDO-metadata unload, a Designer relaunch, a cache operation, FormSync, or an IDO checkout change. These were not attempted.
- **Not established:** that EXP-061's property is durable in the database. This is not claimed.

## 6. AC-3 to AC-12 status

| AC | Status | Basis |
| --- | --- | --- |
| AC-3 Delete FX_VarTestEdit | **Not attempted** | Gated by the AC-2 binding prerequisite. Deletion was held before any mutation. |
| AC-4 Create FX_sImport; caption to Import; button retains Name | **Not attempted** | Absence gate passed (observed, §3.2). Creation not performed. |
| AC-5 Add FX_PictureStatic; bind FX_Picture; No Colon True | **Not attempted** | Binding prerequisite failed. |
| AC-6 Create FX_ImportPicture (Binary Value Action; Import; FX_PictureStatic) | **Not attempted** | Not reached. |
| AC-7 Primary to FX_ImportPicture | **Not attempted** | Not reached. Current Primary is `FX_Test` (observed). |
| AC-8 Pre-Save comparison (five transformations) | **Not attempted** | No changes exist to compare. The T1 baseline exists for later use. |
| AC-9 One ordinary Designer Save | **Not attempted** | Save count **0**. |
| AC-10 Close and reopen; recovery | **Not attempted** | Close count **0**; reopen count **0**. |
| AC-11 Runtime read-only check | **Not attempted** | Runtime interaction **0**. No import. |
| AC-12 Final EXP-062 report | **Not satisfied as written.** This T2 report documents the blocked outcome. The evidence required for AC-3 to AC-11 does not exist. | §§1–8 |

## 7. Final Designer state (observed)

- Tab 0: Designer. The last tab list (after the final screenshot) shows the URL as `…/WSWebClient/designer/default.aspx` with **no `MGForm=FX_Items` query**. That change followed the **Cancel** on the Edit Property Binding dialog. See §8.
- Visible identity at the final screenshot (`t1-03`): Form tab heading `FX_Items`; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; toolbar Save, Regenerate Form, Undo, and Redo disabled; FX_UMCombobox selected; Binding `object.FX_UM` (Binding Type Property); no dialog.
- The find immediately after the Cancel and the tab list both confirm the FX_Items tab is selected. Save remains disabled. The Designer is **clean**, **User-scoped FX_Items**, with **no unsaved changes** and **no dialog**.
- Limits: the final identity is read from the on-screen heading, footer, and find results. The URL no longer names the Form, so the Form cannot be identified from the URL alone. No screenshot was taken after the last tab list.

## 8. Observations and deviations (disclosed, not concealed)

1. **Screenshot timeouts:** the first two screenshot calls both failed with `TimeoutError … waiting for fonts`. These were rendering-side errors on a non-mutating read; no ref or locator failure occurred. A tab select (index 0, after the tab list) followed, then a third screenshot that succeeded (`t1-01`). The brief allows one retry for locator failures. Here there was one more attempt than that guidance, and I am recording it as a deviation.
2. **URL query disappearance:** after the Cancel on the Edit Property Binding dialog, the Designer tab URL changed from `…designer/default.aspx?MGForm=FX_Items` to `…designer/default.aspx`. The worker issued no navigate or reload. The Form stayed open, selected, clean, and in scope. The cause is **unresolved**. It may be SPA state handling or a navigation the worker did not initiate. No console or network inspection was done, by brief.
3. **Tool-reported locators differed from the refs passed (non-mutating, all confirmed by resulting UI state):** the binding dropdown arrow (ref `e7858`, reported as `#ext-55795 …`); the Caption dropdown arrow (ref `e8769`, `#ext-56009 …`); the dialog's Open button (ref `e9200`, `#button-6697`); the Property picker Open (ref `e25433`, `#mgcombo-6734-trigger-picker`); and Cancel, which was reported as `getByRole('button', {name:'Cancel'})`, not ref `e25442`. Each action's identity was confirmed by the listbox or dialog it opened, and by the dialog closing after Cancel.
4. **Read-only opens of editing dialogs:** the Edit Property Binding dialog was opened for a read. It was closed with **Cancel**, not OK. The FX_UMCombobox binding read back as `object.FX_UM` after the dismissal. No commit occurred.
5. **Uninformative targeted snapshot:** one targeted snapshot (`e7630`) returned only a Foreground Color row. It did not confirm the dropdown state. A targeted find was used instead.
6. **Partial first read of the binding listing:** the T1 report recorded the binding listing as read in part. T2 completed the read (§4). The T1 search was case-sensitive. T2 repeated it case-insensitively. Neither changed the result.
7. **Snapshot count correction:** the worker's earlier chat report said 19 snapshot files for this run. The on-disk count for the run window (`page-2026-10-11T15-13-11…` to `…15-17-03…`) is **20**. The T1 report lists all 20. This T2 report uses 20.
8. **Escape key:** used three times to dismiss dropdowns and the property picker. No selection was made by keyboard.
9. **Count of Grep and Read calls in T1:** not enumerated exactly in T1. They were all read-only, against tool-written snapshot files and the experiment's own documents, plus the start-of-run reads of AGENTS.md, the Section 4 tutorial, and prior EXP records.

## 9. Complete action audit (T1 controller and worker counts; T2 adds zero browser calls)

| Operation | Count | Notes |
| --- | --- | --- |
| Tab list (read-only) | 2 | Start and after Cancel |
| Tab select | 1 | Index 0, after the list; succeeded |
| Untargeted snapshot | 1 | Start |
| Targeted snapshot | 1 | `e7630`; uninformative |
| Screenshot calls | 5 | 2 timeouts; 3 successful (`t1-01`, `t1-02`, `t1-03`) |
| Browser clicks | 20 | 11 component-row selections (view); 4 Properties or Details tab views; 4 dropdown or dialog or picker opens; 1 Cancel |
| Escape key presses | 3 | Dismissals only |
| browser_find (read-only) | 7 | |
| Typing | 0 | |
| Dialogs answered with OK | 0 | |
| Dialogs cancelled | 1 | Edit Property Binding; no commit |
| Designer Save / Regenerate / Undo / Redo | 0 / 0 / 0 / 0 | |
| Component deletion / New / Copy / Delete | 0 / 0 / 0 / 0 | |
| String creation | 0 | FX_sImport not created |
| Handler creation | 0 | FX_ImportPicture not created |
| Toolbox placement | 0 | FX_PictureStatic not created |
| Property, binding, Caption, Primary change | 0 | |
| Designer Form close / reopen / Form open | 0 / 0 / 0 | |
| Browser navigate or reload by worker | 0 | |
| Runtime FX_Items interaction (open, Import, record) | 0 | |
| Business-record change | 0 | |
| IDO checkout / check-in / undo checkout | 0 / 0 / 0 | |
| Unload, cache, FormSync, deployment | 0 | |
| Browser JavaScript, run-code, console, network, tracing | 0 | |
| Ref-not-found errors | 0 | |
| Tool-timeouts | 2 | Screenshot "waiting for fonts" |

T2 browser calls: **0**. T2 local reads: Grep, Read, and Glob calls on the evidence and snapshot files only (§1, §4).

## 10. Worker-written and tool-written file inventory

Worker-written (EXP-062 scope):
- `experiments/EXP-062-hello-world-part-4-section-4-configure-picture-import-ui.md`: created in T1; updated in T2 (final status and matrix).
- `evidence/EXP-062/T1-report.md`: created in T1 (edited once in T1 to correct the screenshot-retry disclosure).
- `evidence/EXP-062/T1-checkpoint.md`: created in T1; superseded by T1-report. Not edited in T2.
- `evidence/EXP-062/T2-final-blocked-report.md`: created in T2 (this file).
- `evidence/EXP-062/t1-01-designer-initial-identity-scope-save-disabled.png`
- `evidence/EXP-062/t1-02-baseline-fx-refreshbutton-selected-caption-unchanged-save-disabled.png`
- `evidence/EXP-062/t1-03-final-settled-clean-state-after-binding-dialog-cancel.png`

Tool-written (not worker-written; outside the EXP-062 path):
- `evidence/playwright/page-2026-10-11T15-13-11-696Z.yml` through `…15-17-03-028Z.yml`: **20** accessibility snapshot files for this run window.
- `evidence/playwright/console-2026-10-11T15-12-29-020Z.log`: console log written by the browser tool at the first tab list. The worker did not inspect it.

Limitation: `evidence/playwright/` is the browser tool's output directory. Its gitignore status was not verified in this run. The **operator's git review is authoritative** for repository confinement. The worker has no shell and did not run git status.

No other file was written. `tools/`, `AGENTS.md`, `docs/`, prior experiment records, recipes, and Mongoose artifacts were not read for editing or modified.

## 11. Knowledge state

| Finding | State |
| --- | --- |
| Designer identity FX_Items User scope, anton.ramos@3mworks.com.ph; Save disabled; no challenge or dialog | **observed** (one session) |
| User-scope edit permission | **unresolved** (inferred from editable controls only) |
| 17-entry component inventory; one FX_VarTestEdit; one FX_RefreshButton | **observed** (one session; Pane and GridColumn details incomplete, §3.3) |
| FX_RefreshButton Primary `FX_Test`; Caption literal `FX_Refresh` | **observed** |
| FX_Test group with two enabled actions; no FX_ImportPicture | **observed** |
| FX_VarTest Form - Temporary, `~LIT~()`, Persistent False, Global False | **observed** |
| FX_sImport absent from the Caption listing | **observed** (listing completeness and cache not checked) |
| FX_Picture absent from both Designer binding surfaces | **observed** (two surfaces, one session) |
| Cause of FX_Picture absence (stale metadata or otherwise) | **unresolved** (candidate only; not proven) |
| EXP-061 FX_Picture durability in the database or IDO | **unresolved** (not re-verified in EXP-062) |
| URL query loss after the dialog Cancel | **observed**; cause **unresolved** |
| Any replay, procedure, durability, cache, binary-storage, or picture-import claim | **not claimed**. Nothing is replay_verified |

## 12. Open questions and decisions needed from the operator

1. **Decision required:** how the `FX_Picture` binding becomes visible to the Designer. Candidate routes (metadata unload, Designer relaunch, or another named route) are all outside this task's authority. Until the operator decides, AC-2 cannot close and EXP-062 cannot resume.
2. Explanation for the URL query loss after the dialog Cancel.
3. Whether EXP-061's FX_Picture property should be re-verified through IDO Collections before a later attempt. That re-read was not performed in EXP-062.
4. Whether the Pane and GridColumn detail properties must be captured before any future attempt, given the incomplete baseline (§3.3).
