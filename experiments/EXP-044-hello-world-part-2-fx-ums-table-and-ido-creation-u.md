# EXP-044 — Hello World Part 2: FX_UMs Table and IDO Creation Using FX_UMBase

**Current status (latest: T12, cycle 14): same-session close/reopen recovery (AC-10) is complete. The IDOs and Sql Tables runtime Forms were closed with no prompt and reopened through Select Form. Exact-name queries returned exactly one `FX_UMs` IDO (Revision 2, unlocked, project `FX_HelloWorldProject01`, alias `fxum`, FX_UM on FX_UMBase with Key Sequence 1 and Required, FX_Description String/50/nvarchar) and exactly one `dbo.FX_UMs` table (PK_FX_UMs; FX_UM nvarchar 10 NOT NULL primary key; FX_Description nvarchar 50 nullable). Both match the post-creation baselines. No mutation, Check In, Save, Finish, or Create Form occurred in T12. The AC-1 to AC-12 reconciliation is in the T12 section. Final acceptance is reserved to the coordinator. Classification: observed only, not replay_verified.**

## Outcome (operator, 2026-10-10)

**Accepted** (run R-20261010-200849-CRvE, completed/accepted in cycle 15). Created, tenant-wide, for later cleanup:
- **SQL table `dbo.FX_UMs`:** `FX_UM` nvarchar(10) NOT NULL, primary key (`PK_FX_UMs`); `FX_Description` nvarchar(50), nullable; plus Mongoose system columns.
- **IDO `FX_UMs`:** project `FX_HelloWorldProject01`, alias `fxum`. `FX_UM` uses property class `FX_UMBase`, Key Sequence 1, Required. Checked in once: Revision 1 to 2.

Finish was pressed once, and Create Form was declined. Both objects were recovered after an ordinary close and reopen (same session, UI level).

Operator screenshot review:
- `t1-04`: the wizard lookup offers FX_UMBase.
- `t7-04`: exactly two field rows before Finish.
- `t9-06`: IDO property FX_UM shows Property Class FX_UMBase, with its local type cells blank.

Operator decisions during the run:
1. Yes on the wizard's own Cancel confirmation ("Are you sure you want to cancel? All data entered will be lost.") accepted as completing the authorized inspection cancel.
2. The IDOs zero-row FiP view (no placeholder, no count) accepted on the EXP-040 #17 precedent. T2b then confirmed it with the criterion captured before F4.
3. Case-insensitive collision coverage accepted by inference from EXP-040; the exact-value guard blocks lowercase entries by design.
4. The wizard grid always keeps one blank starred row. That row was used for FX_UM, with no second Delete Row.
5. Message cap raised from 30,000 to 40,000 (local harness.config.json), because the brief plus the protocol exceeded 30,000.

Learned (observed):
1. The wizard Property Class lookup offers a newly saved property class while it is still checked out, with no cache unload.
2. Inheritance is visible at the IDO level: an IDO property bound to a property class shows **blank** Data Type, Length and Column Type cells. The effective type appears in the SQL table (nvarchar(10)). This is the Part 2 inheritance lesson, observed.
3. In the wizard grid, ticking Primary Key also ticks Required.
4. Opening the Designer from the Web Client auto-loads the current runtime Form in design view. Here that was the vendor IdoPropertyClasses Form, which was not edited.
5. Property-class check-in is still open: FX_UMBase remains checked out.

Next in Part 2:
- the FX_UMs Form, with captions;
- EA/DZ data;
- the FX_UM property class with a domain on FX_UMs;
- FX_ItemBase and FX_Cost;
- FX_Items.


**Prior status (T11, cycle 13): the existing FX_UMs IDO (project FX_HelloWorldProject01, base table FX_UMs, alias fxum, FX_UM on FX_UMBase with Key Sequence 1 and Required, FX_Description String/50/nvarchar) was checked in ONCE through its ordinary Check In control, with no confirmation or comment dialog. Revision went 1 to 2; the IDO is now checked in (Locked By empty; Check Out enabled). FX_UMBase was read before and after the action and is unchanged (String, 10, nvarchar, FX_sUM; still checked out to the operator). Save disabled throughout. No Save, Finish, Form creation, Check Out, or other lifecycle action. The AC-10 close/reopen test was not run. Stopped for coordinator review. Classification: observed, not replay_verified.**

**Prior status (T10, cycle 11): read-only SQL Tables verification of `dbo.FX_UMs`. One real table record (Table Name `FX_UMs`, Schema `dbo`, not a placeholder; one F4 on the grid criteria row). Constraints: `PK_FX_UMs` (description FX_UM) and `IX_FX_UMs_RowPointer`. Columns: nine. FX_UM: nvarchar, length 10, NOT NULL, Primary Key checked, Key Sequence 1. FX_Description: nvarchar, length 50, nullable. Seven system columns (types not read). No mismatch with the expected definition was found in the UI. No mutation. The IDO was not checked in (held pending review of the T9 blank-inherited-attribute discrepancy). Stopped for coordinator review. Classification: observed, not replay_verified.**

**Prior status (T9, cycle 10): post-creation IDO inspection. Exactly ONE `FX_UMs` IDO record exists (exact-name FiP query, one F4; a saved record with revision 1, not a placeholder) in project `FX_HelloWorldProject01`; base table `FX_UMs`, alias `fxum` (Primary Base, Inner). Properties: `FX_UM` bound to column `FX_UM` with property class `FX_UMBase`, Key Sequence 1, Required checked, BUT its Data Type, Length and Column Type cells are blank in the IDO grid (the wizard showed String/10/nvarchar); `FX_Description` String, 50, nvarchar. The IDO is checked out to the operator. Check In was NOT performed because the blank inherited attributes are an unexpected definition discrepancy under the brief. No Save, Finish, Form creation, SQL inspection, or other lifecycle action. Stopped for coordinator review. Classification: observed, not replay_verified.**

**Prior status (T8, cycle 9): ONE wizard Finish was invoked (count 1, not retried). The immediate response was the optional Create Form prompt (`Do you want to create a form for FX_UMs?`); it was answered with `No` once (fresh label verified). The settled wizard message reads `Table and IDO created.`. The wizard was closed with its Close control; no prompt. The created `FX_UMs` IDO and SQL table are NOT yet verified by any post-creation query (out of T8 scope). Creation is observed at the wizard level only. Stopped for coordinator review. Classification: observed, not replay_verified.**

**Prior status (T7, cycle 8): the New Data Maintenance wizard (Designer tab, User scope) is OPEN with exactly two field rows: `FX_UM` (Property Class `FX_UMBase`; inherited String, Length 10, nvarchar, Label `FX_sUM`; Primary Key checked; Required checked, set by the Primary Key click, not a separate Required click) and `FX_Description` (String, Length 50, nvarchar, Label `FX_sDescription` reference only; PK and Required unchecked). Add Row used once; no Delete Row. Finish NOT pressed; no Save, Create Form, check-in/out, or lifecycle action; no object created. Stopped for coordinator review before any Finish. Creation is not yet authorized.**

**Prior status (T6, cycle 6): STOPPED. The wizard (in the Designer tab, User scope) is still open on page 1 (`FX_UMs`, `FX_HelloWorldProject01`, `fxum`). One Delete Row was pressed once on the starred blank field row 1; the grid still shows one starred blank row, so the deletion outcome is ambiguous and was not retried. FX_UM and FX_Description were NOT configured. Finish, Save, and lifecycle actions NOT performed. No object created. Creation gates: case-insensitive coverage not demonstrated (T2b, T4). Stopped for coordinator review.**

**Prior status (T5, cycle 5): SQL Tables Form tab closed cleanly (no prompt). The New Data Maintenance wizard was prepared on page 1 (IDO Name `FX_UMs`, IDO Project `FX_HelloWorldProject01` selected from the visible lookup, Table Alias `fxum`); the field grid row 1 blank placeholder was untouched; Finish not pressed; no object created.**

**Prior status: T1 COMPLETE (AC-2 prerequisite gate PASSED; wizard cancelled without Finish; no object created). T2 COMPLETE, STOPPED: the IDOs collision gate was INCONCLUSIVE for `FX_UMs`. T2b COMPLETE: the IDOs exact-name query for `FX_UMs` returned zero rows with the criterion verified before one F4, and a same-session positive control (`FX_HelloWorld01`) returned its row under the same procedure (observed absence with limitations). T4 COMPLETE, STOPPED: the SQL Tables exact-name query for `FX_UMs` returned zero data rows (the only row is an unsaved add-mode placeholder), and a same-session grid positive control (`FX_HelloWorld01`, one real row with constraints) returned under the same procedure (observed absence with limitations). Case-insensitive coverage is NOT demonstrated in either collection (the lowercase entry was hook-denied; not retried). Both collection checks are now observed absence with limitations, but AC-3 is not passed as a full gate: the case-insensitive variant and prefix checks remain uncovered, and coordinator review is required before any creation. No Finish, no Save, no field configuration, no lifecycle action.**

Classification: **observed only (single run, UI level). NOT replay_verified.**

## Scope of this record

- Run: T1 of EXP-044 (read-only prerequisite gate). Worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`. Task message `ed9c240f-a80f-44ad-8199-86c5f03711a8`. Run `R-20261010-200849-CRvE`, cycle 0.
- Date: 2026-10-10.
- Configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar observed). Designer scope `User`, user `anton.ramos@3mworks.com.ph` (status bar observed). The "Site Developer" context named in the brief was not visible in the UI and was not verified.
- **Scope distinction (explicit):** the Designer editing scope is **User** (Forms stay in User scope). The intended SQL table `FX_UMs` and IDO `FX_UMs` are **tenant-wide metadata**, not User-scoped Form versions. No object was created in T1, so no tenant-wide object was affected.
- Predecessor evidence read before browser action: `AGENTS.md`; `docs/mongoose/transcripts/hello-world-pt2.md` (timestamps 04:08–05:16 are at lines 343–355 of the full transcript block); `experiments/EXP-043-hello-world-part-2-create-and-recover-one-fx-ido-p.md` (T1–T4 and outcome; FX_UMBase accepted with limits); `experiments/EXP-040-hello-world-part-1-single-wizard-fx-sql-table-and-.md` (Designer/wizard route, field grid, Finish, Create Form decline, SQL Tables FiP correction, recovery). EXP-039 consulted only for the IDO project identity (`FX_HelloWorldProject01`, description `Factory Hello World test project`, Access As `G6R`, accepted UI-level).
- Note: `experiments/EXP-044-…md` did not exist before T1 (created by this worker). `evidence/EXP-044/` did not exist before T1.

## Objective of T1 (from the brief)

Determine, through the visible New Data Maintenance wizard, whether the Property Class lookup offers the existing `FX_UMBase` property class. Enter no values beyond the minimum needed to reach the lookup. Cancel without Finish. Stop for coordinator review.

## Acceptance matrix (T1 scope)

| AC | Status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 Preflight | **Supported** | `evidence/EXP-044/t1-00-toolbar-designer-tooltip-probe.png` (identity bar, Property Classes Form with FX_UMBase row, Check In enabled); `evidence/EXP-044/t1-accessibility-observations.md` §1; `evidence/EXP-044/cleanup-inventory.md` | "Site Developer" not visible. Repository baseline taken from the session-start git status (Bash/git not available to this worker). Tab `FX_HelloWorld01` not re-read. |
| AC-2 FX_UMBase lookup gate | **PASSED** (visible option + selection; cancelled without Finish) | `evidence/EXP-044/t1-02-property-class-lookup-open-after-recovery-inspection.png` (unfiltered list open, FX_UMBase not in that viewport); `t1-03-property-class-lookup-scrolled-to-FX_UMBase.png` (FX_UMBase row visible between FullObjectPath and G6RCost); `t1-04-property-class-after-FX_UMBase-click-uncommitted.png` (cell shows FX_UMBase, Data Type String, SQL Data Type nvarchar); accessibility observations §4a (`cell "FX_UMBase" [ref=e2174]`); `t1-05`, `t1-06` (wizard closed) | Lookup was **not filtered** (typed filter failed on a stale ref); the gate rests on the paged unfiltered list. Length 10 and Label `FX_sUM` were not read in the wizard in T1 (off-screen right). Single run. No DB read. |
| AC-3 to AC-12 | **NOT RUN** (out of T1 scope) | — | Collision gate, creation, Finish, field configuration, post-creation inspection, lifecycle, SQL inspection, recovery and reconciliation belong to later authorized tasks. |

## Actions performed (T1, in order)

Counts are for browser calls. Snapshots, finds, screenshots and tab listings are listed separately below.

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | Tab listing; fresh untargeted snapshot | Two portal tabs (`System Administrator`, `Mongoose`); `Mongoose` selected. Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Property Classes Form selected with FX_UMBase row (checked out, Check In enabled). FX_HelloWorld01 tab present. No dialog, no banner, Save disabled. | Snapshot (tool-generated `evidence/playwright/…yml`); accessibility observations §1 |
| 2 | Hover `Designer` `f1e57`; hover `Designer` `f1e54` | `f1e54` (tool id `#mgtoolbarbutton-1124`) tooltip `Runtime Builder...`. `f1e57` (tool id `#mgtoolbarbutton-1125`) no tooltip captured. | `t1-00-…` (tooltip probe, `f1e54`) |
| 3 | Hover `f1e57` again; mouse move to x=725 and x=690 (y=92) | No tooltip captured for either point. | `t1-00b`, `t1-00c`, `t1-00d` |
| 4 | Click `Designer` `f1e57`, once | A new browser tab opened: `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)` at `.../WSWebClient/designer/default.aspx`. Not the Runtime Builder dialog. | Tab list; observations §2 |
| 5 | Select Designer tab (index 1); fresh snapshot | `Identify Your Editing Scope` dialog: Scope `User`, User `anton.ramos@3mworks.com.ph`; buttons `OK`/`Cancel`/`Help`. Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. | Observations §2 |
| 6 | Click scope `OK` (`e305`), once | Designer auto-loaded the Web Client's current Form (`?MGForm=IdoPropertyClasses`) in design view. Load only. | Observations §2 |
| 7 | Click Designer toolbar `New` (`e19`, tool id `#mgtoolbarbutton-1088`), once | `Form Wizard Selection` dialog: `New Form` radio active; Category empty; Wizard empty; `OK`/`Cancel`/`Help`. | Observations §2 |
| 8 | Click Category trigger (`e1609`), then option `New Data` (`e1690`) | Category reads `NewData`. | Observations §2 |
| 9 | Click Wizard trigger (`e1617`), then option `Maintenance` (`e1715`) | Wizard reads `Maintenance`. Description: "Creating a table, IDO, and (optionally) form". | Observations §2 |
| 10 | Click `OK` (`e1624`), once | `Data Maintenance Wizard` (`e1739`) opened on page 1. | `t1-01-wizard-page1-initial-state.png` |
| 11 | Click row-1 `Property Class` cell (`e1898`) | Cell editor combobox `e1944` active; `Open` `e1945`. No value typed. | Snapshot (dialog `e1739`) |
| 12 | Click `Open` (`e1945`), once | Lookup listbox opened, unfiltered, paged. Visible: `AccessAs` … `AssemblyReferences`. | `t1-02-…png` |
| 13 | Type `FX_UM` into `e1944` | **Error: `Ref e1944 not found`** (stale ref; see Recovery). Nothing typed. | Error |
| 14 | Recovery: fresh untargeted snapshot (allowance 1 of 1) | Output exceeded output limit and was saved to a tool-results file. Reading that file was denied, so its refs were **not** used. | Recovery accounting |
| 15 | Corrected visible inspection (allowance 1 of 1): screenshot | Same unfiltered list; `FX_UMBase` not in viewport. | `t1-02-…png` |
| 16 | Mouse move to (970, 720) over the listbox; mouse wheel deltaY 2600 | Listbox scrolled to `FldNameBase` … `G6RUM`; `FX_UMBase` visible at approx. y=752. `FullObjectPath` grey = pointer hover, not a selection. Combobox still empty. | `t1-03-…png` |
| 17 | Mouse click at (875, 752) on the `FX_UMBase` row (corrected attempt) | Property Class cell displays `FX_UMBase` (uncommitted). Data Type `String`. SQL Data Type `nvarchar`. Length and Label off-screen. `Finish` disabled; `Next` enabled. | `t1-04-…png` |
| 18 | `find` "Cancel" → `Cancel` `e1933` (label verified in the same output); click once | Confirmation alertdialog appeared: `Are you sure you want to cancel? All data entered will be lost.` | `t1-05-after-wizard-cancel-settled.png` |
| 19 | Fresh snapshot of alertdialog `e2359` | Buttons `Yes` (`e2363`, active) and `No` (`e2365`). Label and reference verified before acting. | Observations §5 |
| 20 | Click `Yes` (`e2363`), once | Wizard closed. Find "Data Maintenance" → no matches. Designer shows `IdoPropertyClasses` design view; Save greyed; ScopeType User. | `t1-06-final-designer-state-after-wizard-cancel.png` |

**Decision on the discard confirmation (action 20):** `No` was not chosen. `Yes` was chosen because the Cancel was the authorized T1 action, and the only data discarded was this task's own uncommitted FX_UMBase selection. Finish was never pressed and no object was created. The coordinator may wish to review this choice (see Deviations).

## Operation counts (T1)

| Operation | Count |
| --- | --- |
| Browser action calls (excluding snapshots, finds, screenshots, tab listings) | 22 calls: 12 ref clicks; 1 coordinate click; 1 mouse wheel; 6 hovers or mouse moves; 1 tab select; 1 type attempt (failed) |
| Ref-not-found errors | **1** (`e1944`, action 13) |
| Explicit `browser_snapshot` calls | 10 (1 untargeted at start; 1 after tab select; 1 untargeted depth 4; 5 targeted to dialogs `e1592`, `e1739`, `e1947`, `e2359`; 1 untargeted recovery) |
| `browser_find` calls | 11 |
| Screenshots | 10 (`t1-00`, `t1-00b`, `t1-00c`, `t1-00d`, `t1-01` to `t1-06`) |
| Tab listings | 2 (start, end) plus 1 tab select |
| **Finish** | **0** |
| **Save** | **0** |
| **New (object-level: property class, IDO, project, Form)** | **0** (the Designer toolbar `New` launched the wizard selection only) |
| **Create Form prompt** | **0** (never reached) |
| **Check In / Check Out / Undo Check Out** | **0 / 0 / 0** |
| **Property-class edits** | **0** |
| **Close / reopen of a Mongoose Form** | **0** (the Designer auto-load of `IdoPropertyClasses` is load-only, not counted as a reopen) |
| **Metadata cache unload, FormSync, deployment** | **0** |
| **Wizard Cancel** | **1** |
| **Discard confirmation answered** | **1** (`Yes`, after label and reference verification) |
| Scope and wizard launch dialogs confirmed (OK) | 3 (scope `OK`; Form Wizard Selection `OK`; Data Maintenance Wizard `OK`) |
| Typing actions (fill or key events) | **0 completed** (1 attempt failed with a stale ref; nothing typed) |
| Keyboard presses | 0 |
| JavaScript, evaluate, run-code, hidden DOM | **0** invoked by the worker |
| Login, logout, reauthentication, refresh, navigation of the Web Client, session replacement | **0** |
| Portal banner dismissals | **0** (no banner observed) |
| Recovery snapshots | **1 of 1** used |
| Corrected visible inspections | **1 of 1** used (action 15), followed by the corrected attempt at action 16–17 |

## Errors, deviations and recovery accounting

1. **Error (action 13):** `Ref e1944 not found` on the type into the Property Class combobox. This was a stale ref (the combobox ref from before the listbox opened). Nothing was typed.
2. **Recovery (action 14):** one fresh untargeted snapshot. Its output was too large and was saved to a file. The file read was denied by permission, so its refs were not used. The allowance is consumed.
3. **Corrected inspection and attempt (actions 15–17):** screenshot, then scroll, then a coordinate click on the `FX_UMBase` row. The coordinate click is a last-resort method. It selected the option and nothing else.
4. **Deviation: the lookup filter was not applied.** The brief asked for supported lookup filtering. The typed `FX_UM` filter failed on the stale ref, and the recovery allowance does not permit a retry with a fresh ref. The gate therefore rests on the unfiltered, paged list (AC-2 limit).
5. **Deviation: the Cancel and the alertdialog were located after the recovery allowance was used.** The Cancel control was located with a `find` (a current-DOM lookup). The label was verified in the same output, and the alertdialog was verified by a fresh targeted snapshot before acting. The brief prefers untargeted snapshots after a ref error. This was a current-ref lookup, not a stale ref, but the coordinator should see it.
6. **Judgement call: discard confirmation accepted (action 20).** The brief says to stop rather than automatically accept discard prompts. This prompt was verified (label `Yes`, ref `e2363`) and was the direct consequence of the authorized Cancel. Only this task's uncommitted selection was discarded. Flagged for review.
7. **Conflict with EXP-009 record (unresolved):** EXP-009 states that `mgtoolbarbutton-1125` is the main button leading to Runtime Builder, and that `1126` is the split button that opens the Web Designer. In this session, the Designer toolbar control the tool reports as `#mgtoolbarbutton-1125` opened the Web Designer tab. The hovered `#mgtoolbarbutton-1124` showed the `Runtime Builder...` tooltip. The EXP-040 note on Ext ID drift applies. The identity of the split button was not established by tooltip (5 hover probes; no tooltip for the clicked button). Treat the route as observed in one run only.
8. **Observation (not an error):** the Designer auto-loaded the Web Client's current Form `IdoPropertyClasses` in design view on scope OK. No change was made to it.
9. **Observation:** `IDO Project Name` on the wizard was already populated with `FX_HelloWorldProject01` without any entry by T1. Its availability for selection was **not** tested.
10. **Observation:** the Web Client has a `System Administrator` portal tab that EXP-043 did not record. Not acted on.

## Pre-existing objects: unchanged (observed)

| Object | T1 observation | Change by T1 |
| --- | --- | --- |
| Property class `FX_UMBase` | Present in the Web Client (preflight) with Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM`, Revision No `1`, Locked By `anton.ramos@3mworks.com.ph`, Check In enabled (still checked out, as EXP-043 left it). Selected in the wizard's lookup (uncommitted), then discarded. | **None** |
| IDO project `FX_HelloWorldProject01` | Pre-populated in the wizard. Not opened. | **None** |
| IDO and SQL table `FX_HelloWorld01` | Not opened in T1 | **None** |
| Form `FX_HelloWorld01` (runtime tab) | Tab present at preflight | **None** |

## Prerequisite identities (AC-1 and AC-2)

| Prerequisite | Observed identity |
| --- | --- |
| Configuration | `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; user `anton.ramos@3mworks.com.ph` |
| Web Client | Usable; Mongoose tab; no sign-in or configuration screen |
| Web Designer | Usable; opened in a new tab through the toolbar Designer control; scope User |
| FX_UMBase (property class) | Visible in IDO Property Classes runtime Form (preflight); visible in the wizard's Property Class lookup at a row between `FullObjectPath` and `G6RCost`; selectable; displayed `String`, `nvarchar` on selection |
| FX_HelloWorldProject01 (IDO project) | Pre-populated in the wizard's IDO Project Name; availability for selection not tested in T1 |
| Intended tenant-wide object scope | `FX_UMs` SQL table and `FX_UMs` IDO are tenant-wide metadata. The Designer editing scope is User. The distinction is recorded here and not conflated. |

## Repository baseline and confinement

- Branch `claude-harness`. Session-start git status (from the harness context, since Bash was not available): modified `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`. These are **pre-existing and were not touched**. `tools/` was not read.
- Recent commits: `2ae8f06` (EXP-044 approved brief), `ecb8066` (EXP-044 draft brief), `7efad46` (EXP-043 accepted), `790805f`, `4293f26`.

Files written by this worker in T1:
- `experiments/EXP-044-hello-world-part-2-fx-ums-table-and-ido-creation-u.md` (created; this record)
- `evidence/EXP-044/t1-accessibility-observations.md` (created)
- `evidence/EXP-044/cleanup-inventory.md` (created)
- `evidence/EXP-044/t1-00-toolbar-designer-tooltip-probe.png`, `t1-00b-toolbar-second-designer-tooltip-probe.png`, `t1-00c-toolbar-x725-tooltip-probe.png`, `t1-00d-toolbar-x690-tooltip-probe.png`, `t1-01-wizard-page1-initial-state.png`, `t1-02-property-class-lookup-open-after-recovery-inspection.png`, `t1-03-property-class-lookup-scrolled-to-FX_UMBase.png`, `t1-04-property-class-after-FX_UMBase-click-uncommitted.png`, `t1-05-after-wizard-cancel-settled.png`, `t1-06-final-designer-state-after-wizard-cancel.png` (10 PNGs, created by the browser tool at worker request)

Tool-generated files (not worker-authored, not repository edits by intent): Playwright snapshot and console logs written under `evidence/playwright/`. The brief's confinement is to the EXP-044 record and `evidence/EXP-044/`; these tool logs are outside it.

Not written: any other repository file. `tools/` was not read. No file under `experiments/` other than this record was changed.

## Evidence index (T1)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `t1-00-toolbar-designer-tooltip-probe.png` | Property Classes Form; FX_UMBase row checked out; identity bar; tooltip `Runtime Builder...` on the first Designer control | Preflight identity; FX_UMBase present and checked out; tooltip of `f1e54` | Which control is the split button |
| `t1-00b`, `t1-00c`, `t1-00d` | Same screen; no tooltip | Hover probes inconclusive | Tooltip identity of `f1e57` |
| `t1-01-wizard-page1-initial-state.png` | Data Maintenance Wizard page 1; IDO Project `FX_HelloWorldProject01`; MultiView / GridLeft / Default; field row 1 blank with star; Finish disabled | Initial wizard state before any T1 selection | Lookup contents |
| `t1-02-property-class-lookup-open-after-recovery-inspection.png` | Lookup list open, unfiltered, `AccessAs` … `AssemblyReferences` | The list is open and paged; FX_UMBase not in this viewport | FX_UMBase absent |
| `t1-03-property-class-lookup-scrolled-to-FX_UMBase.png` | List scrolled: `FldNameBase` … `G6RUM`; **`FX_UMBase` row visible** between `FullObjectPath` and `G6RCost`; hover on `FullObjectPath` | **AC-2: FX_UMBase is visibly offered in the Property Class lookup** | Filter by typed criteria; uniqueness over the full paged list |
| `t1-04-property-class-after-FX_UMBase-click-uncommitted.png` | Row-1 cell `FX_UMBase`; Data Type `String`; SQL Data Type `nvarchar`; Finish disabled | **AC-2: selection possible; inherited display of Data Type and SQL type** | Length 10 and Label `FX_sUM` (off-screen); the value is uncommitted |
| `t1-05-after-wizard-cancel-settled.png` | Cancel confirmation over the wizard: `Are you sure you want to cancel? All data entered will be lost.` `Yes` / `No` | Cancel path and discard prompt | — |
| `t1-06-final-designer-state-after-wizard-cancel.png` | Wizard closed; Designer `IdoPropertyClasses` design view; Save greyed; ScopeType User | The wizard is closed; no dialog remains | Object creation state (no collection query in T1) |

## Acceptance reconciliation (T1)

- **AC-1: supported.** Identity, usable Web Client and Designer, initial state, FX_UMBase and FX_HelloWorldProject01 identities, scope distinction, and repository baseline are recorded. No unintended mutation or session-establishment action occurred. (The Designer scope OK is the normal launch confirmation, as in EXP-009.)
- **AC-2: PASSED.** Exact visible `FX_UMBase` lookup result with unambiguous identity (one row, name cell `FX_UMBase`, key in IDO Property Classes), screenshot `t1-03`, accessibility observation §4a. The inspection wizard was cancelled without Finish, and its closure is verified (`t1-06`). The gate is passed on the visible unfiltered list. It was **not** confirmed by a typed filter.
- **AC-3 to AC-12: not run.** The collision gate, creation, post-creation inspection, lifecycle, SQL inspection, recovery and reconciliation require later authorization.

## Knowledge state

| Finding | State |
| --- | --- |
| The New Data Maintenance wizard's Property Class lookup visibly lists `FX_UMBase` (unfiltered, paged list; row between `FullObjectPath` and `G6RCost`) | **observed** (one run) |
| Selecting `FX_UMBase` in the wizard row displays Data Type `String` and SQL Data Type `nvarchar` | **observed** (one run, uncommitted) |
| Length 10 and Label String ID `FX_sUM` inherited into the wizard display | **unresolved** (not read in T1; T2) |
| Typed prefix filter `FX_UM` in the lookup combobox | **unresolved** (not executed) |
| Wizard Cancel raises a discard confirmation (`Yes`/`No`) | **observed** (one run) |
| Designer toolbar `New` launches the Form Wizard Selection (Category `NewData`, Wizard `Maintenance`) | **observed** (one run) |
| The toolbar control reported as `#mgtoolbarbutton-1125` opens the Web Designer tab (contradicts the EXP-009 record) | **unresolved** (ID drift suspected; tooltip identity not established) |
| `IDO Project Name` is pre-populated with `FX_HelloWorldProject01` | **observed** (one run); selection availability **unresolved** |
| Property class `FX_UMBase` remains checked out after EXP-043 | **observed** (one run; no lifecycle action taken) |
| `FX_UMBase` is unique by Class Name in the IDO Property Classes collection | **unresolved** in T1 (inferred from EXP-043 key observation; not enumerated) |

Classification for the whole T1: **observed only**. Not replay_verified. No database durability, cross-session, or cross-user visibility claim is made.

## Final browser state (last verified)

- Mongoose (Web Client) tab: `IdoPropertyClasses` Form tab selected; FX_UMBase row checked out; FX_HelloWorld01 tab present; no wizard; no dialog. Verified before the Designer launch. Not re-verified after the Yes click.
- Designer tab (new, index 1): `IdoPropertyClasses` Form in design view (`?MGForm=IdoPropertyClasses`); ScopeType User; Save greyed; no wizard; no dialog. This tab remains open.
- No portal notification banner. No browser-native dialog. No unsaved-change prompt observed. The Data Maintenance wizard is closed.

## Open questions and next permitted action

1. **Coordinator decision needed:** whether T1 is accepted as the prerequisite gate, and whether a later task may run the collision gate (T2) and then the creation sequence (T3+).
2. **Recommended for the next brief:** a typed filter against the lookup (for an exact, filtered AC-2 result), and reading the Length and Label String ID on the wizard's inherited attributes (off-screen in T1).
3. **Recommended:** resolve the Designer toolbar identity (EXP-009 vs this run) before any creation brief depends on the route.
4. **Not authorized by T1:** the collision gate, Finish, Save, Create Form, check-in or any lifecycle action, metadata cache unload, FormSync, or deployment.
5. **Operator review:** the discard confirmation accepted at action 20 (Deviation 6).

---

## T2 — Read-only FX_UMs collision gate (STOPPED: IDOs gate inconclusive; SQL Tables not run)

- Task T2 (task_message_id `3e8d63d3-8ed9-474e-9eaf-5bc6730974f0`), cycle 2, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: read-only collision checks in the IDOs (`IdoCollections`) and SQL Tables collections. No wizard, no Finish, no Save, no field, no lifecycle action, no metadata change.
- Scope distinction (recorded again): the Designer editing scope is User. The intended `FX_UMs` IDO and SQL table are tenant-wide. T2 did not open the Designer for editing.
- Detailed observations: `evidence/EXP-044/t2-collision-gate-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (no object created).

### Preflight (AC-1 supplement)

- Tab 0 `Mongoose` (Web Client) and tab 1 Designer (`designer/default.aspx`, User scope, left untouched). Identity bar `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Runtime tabs `FX_HelloWorld01` and `Property Classes` (selected). No dialog or banner.
- The first Open click timed out at "visible, enabled and stable". The Web Client did not render on the screenshot either. A tab reselect restored it (`t2-00-…`).

### Select Form and the IDOs Form

- Name of the IDOs maintenance Form: **`IdoCollections`** (caption `IDOs`), from the EXP-040 record. Select Form Filter `IdoCollections` (key events) returned two rows: `G6RIdoCollectionSearch` and `IDOs` / `IdoCollections`. The `IDOs` row was selected and OK clicked once. The Form opened (URL `favoriteContext=IdoCollections`).

### IDOs collision gate

| Check | Criteria / method | Result | Evidence | Verdict |
| --- | --- | --- | --- | --- |
| Positive control | `FX_HelloWorld01`, FiP, Tab, F4 | 1 row: IDO `FX_HelloWorld01`, project `FX_HelloWorldProject01`, table `FX_HelloWorld01` alias `fxhw`, Revision 2 | `t2-01-…png` | **Passed** (filter executes) |
| Target exact | `FX_UMs`, FiP, Tab, F4 | Zero data rows; no placeholder; status stayed `Filter in Place`; criteria empty afterwards | `t2-03-…png`, fresh snapshot of the panel | **Inconclusive** |
| Corrected attempt on the criteria field | Plain fill `FX_UMs` into `f1e959` | Timed out: element is **read-only** (`CollectionNameEdit`, `mgedit-2007`). No text entered. | Observations §3c | Not repeated |
| Case-insensitive `fx_ums`, prefix `FX_UM*` | — | Not run | — | Not run |

Reason for the inconclusive verdict: the zero-row state is not distinguishable from a query that did not execute. The status bar showed no row count. EXP-043 recorded a zero-row FiP query leaving a placeholder and keeping its criteria. Neither happened here, and the criteria could not be read back. The brief does not allow an empty grid to stand as proof of absence.

### SQL Tables collision gate

**NOT RUN.** The brief stops on an inconclusive IDO result before any further collision step. The EXP-040 correction (criteria only in the grid's criteria row; never the Attributes `Table Name` combobox, which produced the T10 incident) was read before any action and stays in force for any later SQL Tables step.

### Interaction failures and recovery

| # | Interaction | Error | Recovery |
| --- | --- | --- | --- |
| E1 | Toolbar `Open` `f1e25` click | `TimeoutError`: "visible, enabled and stable" (locator resolved) | Not repeated. Tab 0 reselected; screenshot succeeded. Suspected rendering problem after background-tab state. |
| E2 | Screenshot after E1 | `TimeoutError` (page not rendering) | Resolved by E1 recovery. |
| E3 | Corrected attempt: `Open` inner button `f1e26` | None | Select Form opened. |
| E4 | Plain fill `FX_UMs` into `f1e959` (read-only record field) | `TimeoutError`: "element is not editable" | Not repeated. Nothing entered. Corrected visible inspection (snapshot + screenshot). |

- No `Ref ... not found` error occurred. Recovery used: one tab reselect, one corrected attempt, one corrected inspection after E4. The brief's fresh untargeted snapshot was not taken after E1 (E1 was a timeout on a resolved locator, not a stale ref). Untargeted `find` queries provided refs instead. Reported as a deviation.
- Stop: the IDO gate is unresolved after the permitted corrected attempts. T2 stops here.

### Operation counts (T2)

| Operation | Count |
| --- | --- |
| Save / New / Finish / Create Form | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Property-class, IDO, project, table edits | **0** |
| Wizard opened | **0** |
| Select Form dialog OK (in-page; not a prompt) | **1** |
| Prompts or confirmations answered | **0** |
| Form tab closes / reopens | **0 / 0** |
| FiP criteria executed (F4) | **2** (positive control; target) |
| Browser errors (timeouts) | **3** (E1, E2, E4); ref-not-found **0** |
| Screenshots | **5** saved; **1** timed out (E2, not written) |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Acceptance status after T2

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, plus T2 preflight above) |
| AC-2 | Passed in T1 (visible lookup, cancelled without Finish). Not re-run in T2. |
| AC-3 | **Not passed.** IDOs: positive control passed, target inconclusive. SQL Tables: not run. Case-insensitive and prefix variants not run. |
| AC-4 to AC-12 | Not run (creation not authorized: AC-3 unresolved). |

### Browser state (last verified)

- Tab 0 (Mongoose): IDOs Form tab (`IdoCollections`) selected, with `FX_HelloWorld01` and `Property Classes` tabs also open. IDO Name field focused and read-only; no record; grid empty; no placeholder; Save greyed; no dialog or prompt.
- Tab 1 (Designer): `IdoPropertyClasses` in User scope, untouched.
- Verified at the time of the last screenshot (`t2-04`). No further action after it.

### Repository confinement (T2, self-audit)

- Written in T2: this record (status line and T2 section), `evidence/EXP-044/t2-collision-gate-observations.md` (created), `evidence/EXP-044/cleanup-inventory.md` (updated), `evidence/EXP-044/t2-00-preflight-webclient-after-tab-reselect.png`, `t2-01-idos-positive-control-FX_HelloWorld01-fip-f4.png`, `t2-02-idos-fip-reentered-before-FX_UMs-query.png`, `t2-03-idos-exact-FX_UMs-fip-f4-result.png`, `t2-04-idos-final-state-after-unresolved-exact-query.png` (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| IDOs Form name `IdoCollections` (caption `IDOs`) opens via Select Form filter `IdoCollections` | observed (one run) |
| FiP exact query `FX_HelloWorld01` returns that IDO, one row (positive control) | observed (one run) |
| FiP exact query `FX_UMs` returns zero rows with no placeholder and no readable criteria | **unresolved** (inconclusive) |
| The IDO `CollectionNameEdit` field can be read-only while the Form is in a record-view state | observed (one run) |
| Absence of `FX_UMs` in the IDOs collection | **unresolved** |
| SQL Tables absence of `FX_UMs` | **not run** |

### Open questions and blockers

1. **Blocker:** the IDOs `FX_UMs` query is inconclusive. A retry needs a supervised T2b with a fresh snapshot, confirmation that the IDO Name criteria field is editable before typing (the field was read-only at E4), and a readable status count (for example `IDOs 0 of 0`) or an equivalent positive result before the negative result is accepted.
2. The SQL Tables gate has not been run. It was not started because the IDO gate stopped the task.
3. Coordinator decision: whether to authorize T2b (a retry of the IDO query and the SQL Tables gate) or to stop EXP-044 here.
4. The creation stage (T3+) remains **not authorized**.

---

## T4 — Read-only SQL Tables collision gate for FX_UMs (STOPPED for coordinator review)

- Task T4 (task_message_id `c98a6ad6-6655-4e65-b615-042e8356e165`), cycle 4, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: read-only SQL Tables criteria query only. No wizard, Finish, Save, New, check-in, check-out, schema action, or metadata change. Attributes definition fields were not used. The IDOs and Designer tabs were not edited.
- Detailed observations: `evidence/EXP-044/t4-sqltables-collision-gate-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T4 entry).

### Procedure (per EXP-040 correction)

- Select Form: `SqlTables` (caption `Sql Tables`), chosen from two rows (`Sql Tables`, `Sql Tables Constraint`) with the same key-event filter procedure as T2. The Form opened with an informational caution alert ("Please be very careful using these forms…", single OK), which was verified by a fresh snapshot and dismissed once.
- All criteria were entered only in the grid's Table Name criteria cell (row 1, active grid combobox). The Attributes Table Name and Schema combos were not used. Save stayed disabled before and after each query.

### SQL Tables gate

| Check | Criteria | Result | Evidence | Verdict |
| --- | --- | --- | --- | --- |
| Positive control | `FX_HelloWorld01`, criterion committed before F4, one F4 | One real row `FX_HelloWorld01` / `dbo`, no star, constraints `PK_FX_HelloWorld01` and `IX_FX_HelloWorld01_RowPointer`; status `Schema (SQL Tables 1 of 1)`; Columns… enabled | `t4-02`, `t4-03` | **Passed** |
| Target | `FX_UMs`, FiP re-entered, criterion committed before F4, one F4 | Starred blank placeholder only (blank Table Name/Schema, no constraints; Columns…, Update Current Table, New Constraint disabled); status `Table Name (SQL Tables 1 of 1)` | `t4-04`, `t4-05`, `t4-06` | **Zero data rows observed** |
| Case-insensitive `fx_ums` | — | Not run (lowercase was hook-denied in T2b; not retried) | — | **Not demonstrated** |
| Prefix `FX_UM*` | — | Not run | — | Not run |

- The status count `1 of 1` counts the placeholder. The star, blank required cells, and disabled buttons separate it from a real row. Interpretation is consistent with EXP-043 and EXP-042-R3.

### Limitations

- Case-insensitive coverage is not demonstrated in SQL Tables or IDOs. The coverage gap is recorded, not claimed.
- The SQL Tables negative result is UI-level, single session, and is not a database read.
- The IDO result (T2b) and SQL Tables result (T4) are each observed absence with limitations. Neither is a conclusive proof of absence across case variants.

### Placeholder left open (coordinator awareness)

- The Sql Tables tab shows an unsaved add-mode placeholder from the `FX_UMs` query. It was **not** typed into, saved, or discarded. A later close or criteria change may raise a save or discard prompt. That prompt must be verified and answered by an explicit decision, not automatically.

### Recovery and errors (T4)

- Errors: 0. Recovery snapshots 0 of 1 used. Corrected inspections 0 of 1 used. No hook denial and no timeout in T4.

### Operation counts (T4)

| Operation | Count |
| --- | --- |
| Save / New / Finish / Create Form | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Attributes or definition-field entries | **0** |
| Table or IDO definition edits | **0** |
| Wizard opened | **0** |
| Select Form OK (in-page) | **1** |
| Caution alert OK (informational) | **1** |
| Form tab closes / reopens | **0 / 0** |
| F4 executed | **2** (positive control; target) |
| Plain fills (criteria) | **2** |
| Tab commits | **2** |
| Filter in Place toolbar clicks | **1** |
| Screenshots | **6** (`t4-01` to `t4-06`) |
| Prompts answered | **1** (caution alert OK, informational) |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Acceptance status after T4

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2 preflight; T4 identity above) |
| AC-2 | Passed in T1 (visible lookup, cancelled without Finish). Not re-run. |
| AC-3 | **Partial.** IDOs: positive control passed; exact `FX_UMs` observed absence with limitations (T2b). SQL Tables: positive control passed; exact `FX_UMs` observed absence with limitations (T4). **Case-insensitive coverage not demonstrated in either collection; prefix not run.** Not passed as a full gate. |
| AC-4 to AC-12 | Not run (creation not authorized). |

### Browser state (last verified)

- Tab 0 (Mongoose): `Sql Tables` tab selected (`favoriteContext=SqlTables`), Filter in Place mode, row 1 = unsaved blank placeholder for `FX_UMs`, Save disabled, no dialog (`find` after `t4-06`). `FX_HelloWorld01`, `Property Classes`, and `IDOs` tabs remain open.
- Tab 1 (Designer, `IdoPropertyClasses`, User scope): untouched.

### Repository confinement (T4, self-audit)

- Written in T4: this record (status line and T4 section); `evidence/EXP-044/t4-sqltables-collision-gate-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T4 entry); `evidence/EXP-044/t4-01` to `t4-06` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Open questions and blockers

1. **Coordinator decision:** whether the observed zero-row absence in both collections is accepted for the creation gate, or whether a case-insensitive/prefix check is required first. The lowercase entry was previously hook-denied; a permitted variant or an explicit rule is needed.
2. The Sql Tables placeholder is open and unsaved. Decide how it should be cleared (an explicit query or close) before any further step.
3. Creation (T3+ wizard, Finish, fields) remains **not authorized**.

---

## T2b — Retry of the IDOs FX_UMs collision query (STOPPED for coordinator review)

- Task T2b (task_message_id `c7af0a42-0091-4832-9a3e-6fdb4e6561af`), cycle 3, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: read-only IDOs (`IdoCollections`) criteria queries only. No SQL Tables query, no wizard, no Finish, no Save, no field, no check-in or check-out, no vendor Designer Form edit.
- Detailed observations: `evidence/EXP-044/t2b-idos-collision-retry-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T2b entry).

### What changed relative to T2

- T2's `FX_UMs` criteria field was read-only at the moment of the fill (E4). In T2b, an explicit toolbar Filter in Place entry (`find`-supplied current ref, one click) made the IDO Name criteria textbox **editable** (`t2b-01`).
- The criterion `FX_UMs` was entered with one plain fill, committed with one Tab, and verified in a screenshot before execution (`t2b-02`: criterion committed, status `Filter in Place`, no record).
- One F4 executed the query. Result (`t2b-03`): **zero data rows**; grid empty; fields greyed; criteria cleared; **no blank placeholder**; **no status count**.
- Same-session positive control, same procedure: `FX_HelloWorld01` returned **one row** with status `Extends (IDOs 1 of 1)` (`t2b-04`). This shows F4 executes the FiP query in this state.

### Gate verdict (IDOs)

| Check | Result | Verdict |
| --- | --- | --- |
| Positive control `FX_HelloWorld01`, same session | 1 row | Passed |
| Exact `FX_UMs`, criterion verified before F4 | 0 rows; no placeholder; no status count | Observed absence, with limitations |
| Case-insensitive `fx_ums` | Blocked by a PreToolUse hook (`Exact value required: FX_UMs`). Not entered, not executed, not retried. | **Not demonstrated** |
| Prefix `FX_UM*` | Not run | Not run |
| SQL Tables `FX_UMs` | Not run (out of T2b scope) | Not run |

- **AC-3 is not passed as a whole.** The IDOs exact-name absence is observed. The SQL Tables collection is unchecked, and the case-insensitive coverage is not demonstrated (the limitation is recorded here, not claimed).
- The status-count difference matters. EXP-043 showed a zero-row FiP query leave a blank placeholder with a count. Here there is neither. The interpretation rests on the same-session positive control and on the criterion being verified before F4. The coordinator should decide whether that is enough.

### Recovery and errors (T2b)

| # | Event | Handling |
| --- | --- | --- |
| 1 | Click on stale FiP ref `f1e36` (`Ref f1e36 not found`) | One fresh untargeted snapshot (depth 5; toolbar children not shown). Refs then came from `find`. Recovery allowance used. |
| 2 | Lowercase `fx_ums` entry | Harness hook denial. Not retried. No alternative input method. |

Timeouts: 0. Ref-not-found: 1.

### Operation counts (T2b)

| Operation | Count |
| --- | --- |
| Save / New / Finish / Create Form | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Property-class, IDO, project, table edits | **0** |
| Wizard opened | **0** |
| SQL Tables queries | **0** |
| F4 executed | **2** (`FX_UMs`; positive control `FX_HelloWorld01`) |
| Plain fills executed | **2** |
| Tab commits | **2** |
| Filter in Place toolbar clicks (successful) | **3** |
| Hook denials | **1** (not executed) |
| Screenshots | **5** (`t2b-01` to `t2b-05`) |
| Prompts answered | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Repository confinement (T2b, self-audit)

- Written: this record (status line and T2b section); `evidence/EXP-044/t2b-idos-collision-retry-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T2b entry); `evidence/EXP-044/t2b-01-…` to `t2b-05-…` (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state

- Tab 0 (Mongoose): IDOs Form in Filter in Place mode, criteria `FX_HelloWorld01` retained (editable), grid criteria echo row, status `Filter in Place`, no dialog, no unsaved-change prompt, no banner (`t2b-05`).
- Tab 1 (Designer, `IdoPropertyClasses`, User scope): untouched.

### Open questions and blockers

1. **Coordinator decision:** accept the IDOs zero-row result as observed absence (with the limitations above), or require a status-count or placeholder-based confirmation.
2. **Case-insensitive coverage is unresolved.** The lowercase entry was blocked by a harness hook. Coordinator to decide whether a permitted case-insensitive variant may be run, and under which rule, or whether the limitation stands.
3. **SQL Tables collision gate has not been run.** It is required before any creation (AC-3 covers both collections).

---

## T5 — Clean SQL Tables closure and New Data Maintenance wizard preparation (wizard OPEN, stopped for coordinator review)

- Task T5 (task_message_id `283e4c81-e665-4fe6-bf31-2084ae919ba9`), cycle 5, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: close the SQL Tables tab; open the New Data Maintenance wizard; set IDO Name, Table Alias and verify the project. No field configuration, no Next, no Finish, no Save, no lifecycle action, no Designer edit.
- Detailed observations: `evidence/EXP-044/t5-wizard-preparation-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T5 entry).
- Scope distinction (restated): the Designer editing scope is **User**. The intended `FX_UMs` SQL table and IDO are **tenant-wide** metadata, not User-scoped Form versions. The wizard is in User Designer scope; the metadata it would create is tenant-wide.

### Sql Tables closure

- The Sql Tables tab was prepared (unsaved starred placeholder for the `FX_UMs` query from T4; Save disabled; no dialog). Its Close control `Close Panel Sql Tables` (`f1e104`) was clicked once after a targeted snapshot verified the label.
- Result: the Sql Tables tab was removed. **No save-changes, discard, validation, or confirmation prompt appeared.** No save was performed. The placeholder disappeared with the tab. This is observed as "removed with the tab, no prompt"; whether it was an implicit discard is not proven, and no database read was made.

### Wizard preparation (page 1)

| Field | Value | Verification |
| --- | --- | --- |
| IDO Name | `FX_UMs` | One plain fill and one Tab; snapshot shows textbox `FX_UMs`. |
| Table Alias | `fxum` | One plain fill and one Tab; snapshot shows textbox `fxum`. |
| IDO Project Name | `FX_HelloWorldProject01` | Visible lookup opened (Open `e1748`). The listbox had 14 projects; `FX_HelloWorldProject01` was the selected first option. Explicitly selected from the list (`e1910`), then Tab. Combobox reads `FX_HelloWorldProject01`. |
| Form Type / Layout / Device Type | `MultiView` / `GridLeft` / `Default` | Defaults, not changed. |
| Site Split / Table Name / View Name | unchecked / disabled / empty | Not used. |

- Project selection availability: **available** (offered in the lookup, selectable, and retained after commit). Project identity is the name shown; its description and Access As were not re-read in this lookup (EXP-039 identity cited).
- Collision state: no change since T2b and T4. The IDO and SQL Tables `FX_UMs` checks are still observed absence with the recorded limitations (case-insensitive not demonstrated).

### Field grid (not configured)

- Row 1 is the blank starred placeholder (`★1`). Name and Property Class cells are empty; Primary Key and Required unchecked.
- **Row 1 was not deleted or edited.** The brief forbids field changes in T5. The placeholder's identity is therefore unresolved for the later step (EXP-040 treated a blank row 1 as the disposable placeholder; that identity is to be confirmed in the creation task).

### Stop state

- The Data Maintenance Wizard is **open** on page 1 (dialog `e1706` at the time of capture). **Finish disabled; Next enabled and not pressed; Back disabled.**
- Designer tab (User scope, `IdoPropertyClasses` design view): unchanged, Save disabled.
- No object created. Creation not started.

### Operation counts (T5)

| Operation | Count |
| --- | --- |
| Save / Finish / Create Form / object New | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Field-grid edits, Add Row, Delete Row | **0 / 0 / 0** |
| Wizard Next / Back | **0 / 0** |
| Sql Tables tab close | **1** (no prompt) |
| Form Wizard Selection OK | **1** |
| Plain fills (wizard) | **2** (IDO Name; Table Alias) |
| Tab commits | **3** |
| Project lookup opened / option selected | **1 / 1** |
| Screenshots | **2** (`t5-01`, `t5-02`) |
| Errors | **0**; recovery snapshots **0 of 1**; corrected inspections **0 of 1** |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Repository confinement (T5, self-audit)

- Written in T5: this record (status line and T5 section); `evidence/EXP-044/t5-wizard-preparation-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T5 entry); `evidence/EXP-044/t5-01-after-sqltables-tab-close-click.png`, `t5-02-wizard-page1-prepared-FX_UMs-fxum-FX_HelloWorldProject01.png` (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state (T5)

- Tab 0 (Mongoose): `IDOs` Form (`favoriteContext=IdoCollections`) under the open Data Maintenance Wizard (page 1, prepared: `FX_UMs`, `FX_HelloWorldProject01`, `fxum`). Field row 1 blank placeholder untouched. Finish disabled. No prompt, no banner.
- Tab 1 (Designer, User scope): `IdoPropertyClasses` design view unchanged, Save disabled.

### Open questions for the coordinator

1. Whether the wizard should be cancelled (a discard confirmation would then follow, to be verified) or kept open for the next authorized task.
2. Whether field row 1 is accepted as the disposable placeholder (identity not yet established by any verified row control).
3. Case-insensitive collision coverage remains unresolved (T2b, T4). Creation remains **not authorized** until the coordinator decides.
4. Classification: observed only; not replay_verified.

---

## T6 — Field grid row 1 placeholder check and single Delete Row (STOPPED: deletion outcome ambiguous; no field configured)

- Task T6 (task_message_id `fe122dac-f050-4e63-ad13-f4e51eb82e4b`), cycle 6, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: review the placeholder evidence; remove field row 1 at most once if demonstrably the placeholder; configure FX_UM and FX_Description; stop. **Only the row-1 check and one Delete Row were performed.** No FX_UM or FX_Description configuration, no Add Row, no Finish, no Save, no lifecycle action.
- Detailed observations: `evidence/EXP-044/t6-field-grid-row1-placeholder-delete-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T6 entry).
- Scope distinction (restated): the wizard is in User Designer scope. The `FX_UMs` IDO and table it would create are **tenant-wide** metadata, not User-scoped Form versions.

### Location of the wizard

- The Data Maintenance Wizard was **in the Designer tab (tab 1)**, not the Web Client tab. Tab 1 was selected (browser navigation) and verified by a targeted snapshot before acting.

### Row-1 placeholder evidence

- Starred (★1) blank sole row, all cells empty, present before any worker action on the grid. Consistent with the unsaved add-mode placeholder defined in EXP-043 and the EXP-040 "original blank first row".
- EXP-040 did **not** establish row identity from a row control. Its T6 stopped as ambiguous (no star in that grid), and the deletion was an operator decision (EXP-040, "Operator decisions", item 1). The present star is a difference from EXP-040's grid. The T6 deletion therefore rested on this session's star and on the brief's authorization, not on a demonstrated row identity.

### Delete Row (one press) and its ambiguous result

| Step | Result |
| --- | --- |
| Name cell of row 1 clicked | An empty text editor opened in the cell. No value typed. |
| `Delete Row` (`e1638`, label verified), **once** | Returned with no error. |
| Post-delete screenshot and grid snapshot | **Still one row**, numbered `1`, starred, blank. Table and row refs re-created (`e1660` → `e1767`). |
| Outcome | **Ambiguous.** Two readings fit: (a) the placeholder was removed and the wizard re-created an empty add row; (b) the press did not remove it. The UI does not separate them. |
| Action taken on the ambiguity | **None.** No second Delete Row (the brief permits one), no Add Row, no field change. Stopped as the brief requires. |

### Not configured

- FX_UM (`FX_UMBase`, Primary Key, Required) — **not configured.** The inherited Data Type, Length, Label String ID, and Column Data Type were **not** verified in the grid.
- FX_Description (String, 50, `FX_sDescription`) — **not configured.**
- The field grid's final cardinality — **not verified**.
- No Finish, no Save, no Create Form, no check-in or check-out, no Get Database Schema.

### Stop state

- Designer tab (User scope): the wizard is open on page 1 (`FX_UMs`, `FX_HelloWorldProject01`, `fxum` verified in `t6-02`). Field grid: one starred blank row `1` with its Name cell in an empty open editor. Finish disabled, Next enabled, not pressed.
- No dialog, no unsaved-change prompt, no banner after the delete (find).
- Vendor `IdoPropertyClasses` design view behind the wizard: unchanged; Save disabled.

### Operation counts (T6)

| Operation | Count |
| --- | --- |
| Delete Row presses | **1** (ambiguous outcome) |
| Delete All Rows / Add Row | **0 / 0** |
| Field configuration | **0** |
| Name cell clicks | 1 (empty editor) |
| Finish / Save / Next / Back / Create Form / check-in / check-out | **0 / 0 / 0 / 0 / 0 / 0** |
| Form tab closes / reopens | 0 / 0 |
| Designer edits | 0 |
| Tab selections (navigation) | 1 |
| Screenshots | 2 (`t6-01`, `t6-02`) |
| Errors | **0** |
| Recovery snapshots / corrected inspections | **0 of 1 / 0 of 1** used |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Acceptance status after T6

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2 preflight; T6 repeats the Designer scope check) |
| AC-2 | Passed in T1. Not re-run. |
| AC-3 | Partial (IDO and SQL Tables observed absence with limitations; case-insensitive not demonstrated). Not passed as a full gate. |
| AC-4 | **Partial.** Page-1 values `FX_UMs`, `FX_HelloWorldProject01`, `fxum` displayed (`t5-02`, `t6-02`). Field grid **not** verified: row 1 deletion outcome ambiguous; final cardinality not verified. |
| AC-5 to AC-12 | Not run. |

### Repository confinement (T6, self-audit)

- Written in T6: this record (status line and T6 section); `evidence/EXP-044/t6-field-grid-row1-placeholder-delete-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T6 entry); `evidence/EXP-044/t6-01-wizard-state-before-field-work.png`, `t6-02-after-single-delete-row-placeholder.png` (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state (T6)

- Designer tab (User scope): Data Maintenance Wizard open on page 1 with the verified page-1 values; field row 1 starred and blank, Name cell in an empty open editor; Finish disabled; no dialog, no prompt, no banner.
- Web Client tab (`IdoCollections`): not acted on in T6.

### Open questions and blockers

1. **Blocker (row 1):** the single Delete Row outcome is ambiguous. Coordinator decision: (a) accept that the placeholder was removed and the displayed row is a re-created add row, and authorize Add Row for FX_UM and FX_Description; (b) require a row-identity method that does not depend on the displayed row; or (c) cancel the wizard (a discard confirmation would follow and must be verified) and restart the preparation so the grid is observed freshly.
2. Creation (Finish, field configuration, Create Form decision) remains **not authorized**. Case-insensitive collision coverage remains unresolved (T2b, T4).
3. Classification: observed only; not replay_verified.

---

## T7 — Two-field configuration in the open wizard (STOPPED before Finish; coordinator review)

- Task T7 (task_message_id `7b05f2ef-ae17-4c73-97b3-e70b3c4d9420`), cycle 8, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: configure exactly two user-defined field rows in the open Data Maintenance wizard; verify; stop before Finish. No Finish, no Save, no Create Form, no check-in/out, no lifecycle action, no Designer Form edit, no string resource change.
- Scope distinction (restated): Designer scope is **User**. The `FX_UMs` IDO and SQL table the wizard would create are **tenant-wide** metadata, not User-scoped Form versions.
- Detailed observations: `evidence/EXP-044/t7-field-configuration-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T7 entry).

### Actions and verified values

| Field | Verified value (accessibility tree; screenshot where noted) |
| --- | --- |
| Row 1 Name | `FX_UM` (one plain fill, Tab) |
| Row 1 Property Class | `FX_UMBase`, selected from the visible lookup (option cell confirmed by snapshot before click). Lookup listbox identified `FX_UMBase` between `FullObjectPath` and `G6RCost`. |
| Row 1 Data Type (inherited) | `String` (`t7-02`) |
| Row 1 SQL Data Type (Column Data Type as exposed) | `nvarchar` |
| Row 1 Property Length (inherited) | `10` |
| Row 1 Label String ID (inherited) | `FX_sUM` |
| Row 1 Primary Key | **checked** (clicked once on the Primary Key checkbox) |
| Row 1 Required | **checked** (**not clicked**; became checked after the Primary Key click; see limitation) |
| Row 2 Name | `FX_Description` (one plain fill, Tab) |
| Row 2 Data Type | `String` (visible option `String` from the list, Tab) |
| Row 2 SQL Data Type | `nvarchar` (set automatically) |
| Row 2 Property Length | `50` (one plain fill, Tab) |
| Row 2 Label String ID | `FX_sDescription` (reference only; one plain fill into the editable combobox, Tab) |
| Row 2 Primary Key / Required | unchecked (not required for FX_Description) |

- Add Row: **1** (exactly once). Delete Row and Delete All Rows: **0**.
- Pre-Finish cardinality: the Name grid lists **exactly two rows** (`1 FX_UM`, `2 FX_Description`) by the fresh untargeted snapshot. No third row and no extra blank starred row.

### Limitations (for coordinator decision)

1. **Required was set by the Primary Key click, not by a Required click.** Mongoose showed Required checked for `FX_UM` after the single Primary Key click. Whether Primary Key implies Required here, or the Required column mirrors Primary Key, is unresolved. I did not click Required because a second click could toggle it off. Decide whether this satisfies AC-5 (“Primary Key and Required enabled”).
2. Row 2's Default Value cell has an open, empty editor (no value entered). It was left in place.
3. Both rows carry the unsaved wizard star. The T6 placeholder-deletion ambiguity is unchanged. The starred row is now the `FX_UM` row, and no separate blank row remains.
4. Finish stays disabled while the wizard is on page 1 (Next not pressed), as in T5 and T6. Whether Finish would be enabled after Next was not checked.

### Errors and recovery (T7)

- E1: `Ref e1643 not found` on a Name-grid snapshot after the row-2 edits. R1: one fresh untargeted snapshot (depth 12), succeeded. Recovery allowance used **1 of 1**. Corrected inspections 0 of 1 (the recovery snapshot served as the fresh inspection). No prompts, no timeouts, no hook denials.

### Operation counts (T7)

| Operation | Count |
| --- | --- |
| Save / Finish / Create Form / object New | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Delete Row / Delete All Rows | **0 / 0** |
| Add Row | **1** |
| Next / Back | **0 / 0** |
| Property Class lookup opened | **1** (option `FX_UMBase` selected) |
| Dropdown option selections | **2** (`FX_UMBase`; Data Type `String`) |
| Plain fills (wizard values) | **4** (`FX_UM`; `FX_Description`; `50`; `FX_sDescription`) |
| Tab commits | **6** |
| Checkbox clicks | **1** (Primary Key on FX_UM) |
| Screenshots | **4** (`t7-01` to `t7-04`) |
| Errors | **1** (`Ref e1643 not found`) |
| Recovery snapshots | **1 of 1** used |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Acceptance status after T7

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2 preflight; T7 scope and wizard identity check) |
| AC-2 | Passed in T1. Not re-run. |
| AC-3 | **Partial.** IDO and SQL Tables observed absence with limitations (T2b, T4); case-insensitive coverage not demonstrated; prefix not run. Not passed as a full gate. |
| AC-4 | **Supported for the wizard state before Finish.** Page-1 values `FX_UMs`, `FX_HelloWorldProject01`, `fxum` displayed. The initial blank row was not deleted again; the T6 ambiguity is noted. Two user-defined rows present (`FX_UM`, `FX_Description`) with no extra row (`t7-04`; fresh untargeted snapshot). |
| AC-5 | **Partial.** `FX_UM`: `FX_UMBase`, String, Length 10, nvarchar, `FX_sUM`, Primary Key checked, Required checked (set by the PK click; limitation 1). `FX_Description`: String, Length 50, nvarchar, `FX_sDescription`. The brief's "set Required through its own control" is not met as written. |
| AC-6 to AC-12 | Not run (Finish, post-creation inspection, lifecycle, SQL inspection, recovery, reconciliation). |

### Repository confinement (T7, self-audit)

- Written in T7: this record (status line and T7 section); `evidence/EXP-044/t7-field-configuration-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T7 entry); `evidence/EXP-044/t7-01` to `t7-04` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state (T7)

- Tab 1 (Designer, User scope): Data Maintenance Wizard open on page 1 with the two field rows described above. Finish disabled, Next not pressed. Empty open editor on row 2's Default Value cell. No dialog, prompt, or banner (find after `t7-04`).
- Tab 0 (Web Client, `IdoCollections`): not acted on in T7.
- Vendor `IdoPropertyClasses` design view: unchanged; Save disabled.

### Open questions for the coordinator

1. Accept the Required-by-Primary-Key result for AC-5, or require a separate Required control interaction (which risks toggling it off) and a documented before/after state.
2. Authorize Finish, or hold. Creation remains **not authorized** until the coordinator decides. Case-insensitive collision coverage remains unresolved (T2b, T4).
3. Decide how the empty open Default Value editor and the wizard's unsaved state should be closed if the wizard is later cancelled (a discard confirmation would need verifying first).
4. Classification: observed only; not replay_verified.

4. Creation (T3+) remains **not authorized**.

---

## T8 — Pre-Finish verification, Next to the last page, single Finish, Create Form declined (STOPPED; creation observed at wizard level)

- Task T8 (task_message_id `acaa68a0-797f-4e31-905d-e57d14903b9c`), cycle 9, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: verify the configured wizard; advance to the last page; invoke Finish once; decline Create Form once; close the completed wizard. No check-in, Save, SQL or post-creation IDO inspection, or metadata lifecycle action.
- Scope distinction (restated): Designer editing scope is **User**. The `FX_UMs` IDO and SQL table are **tenant-wide** metadata, not User-scoped Form versions.
- Detailed observations: `evidence/EXP-044/t8-finish-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T8 entry).

### Pre-Finish verification (fresh snapshots and screenshot)

- Wizard identity: `Data Maintenance Wizard`, page 1: IDO Name `FX_UMs`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxum`; MultiView / GridLeft / Default.
- Field rows: **exactly two** (`1 FX_UM`, `2 FX_Description`); no third or blank starred row.
- FX_UM: Property Class `FX_UMBase`; Data Type `String`; SQL Data Type `nvarchar`; Property Length `10`; Primary Key **checked**; Required **checked** (accepted from the T7 Primary Key interaction; Required **not** clicked in T8); Label String ID `FX_sUM`.
- FX_Description: Data Type `String`; SQL Data Type `nvarchar`; Property Length `50`; Primary Key and Required unchecked; Label String ID `FX_sDescription` (reference only).
- Row 2 Default Value: its open editor was committed with one Tab with no value entered; the cell remains empty.
- Vendor `IdoPropertyClasses` design view: unchanged; Save disabled.

### Gate status cited at Finish

- AC-2: passed in T1. AC-3: IDO and SQL Tables exact `FX_UMs` absent with passing same-session positive controls; case-insensitive coverage not demonstrated in either collection (recorded limitation, accepted by the T8 instruction). AC-4 and AC-5: verified above.

### Next and Finish

| Step | Observed |
| --- | --- |
| Next (`e1786`, label verified), once | Page 2 (last page): Create Scripts **unchecked** (default, not changed); instruction `Click "Finish" to create the database table, IDO and optional form.`; preview empty; Next disabled; Finish enabled. |
| Finish (`e1788`, label verified), **ONCE** | Immediate response: optional **Create Form** alertdialog `Do you want to create a form for FX_UMs?` with `Yes` (`e1809`) and `No` (`e1811`). |
| Fresh snapshot of the Create Form alertdialog before acting | Verified: `alertdialog "Create Form"`, buttons `Yes` and `No` (`e1811`, label `No`). |
| No (`e1811`), **ONCE** | Prompt closed. **Yes not pressed.** No Form creation step followed. |
| Settled response | Wizard message: **`Table and IDO created.`**; Back, Next, Finish disabled; Close enabled. |

- Finish count: **1**. Not retried. The immediate response to Finish was the Create Form prompt, not a success message; the success text appeared after the prompt was answered (matching EXP-040 T9).

### Close and final state

- Close (`e1813`, label verified), once. The wizard closed. No prompt. Final screenshot `t8-05`: vendor `IdoPropertyClasses` design view, Save greyed, ScopeType User.

### Creation outcome (exact)

- **Finish invoked: 1. Response: "Table and IDO created." (settled). Create Form: declined with No (1). Form created by this worker: none.**
- The creation is **observed at the wizard level only**. No post-creation query has verified that the IDO `FX_UMs` or the SQL table `dbo.FX_UMs` exists, what their definitions are, or whether the IDO is checked out. Those are the next task's AC-7 to AC-10 checks.

### Observed console error (not a mutation)

- During the Tab that committed row 2's Default Value editor, the Designer logged `TypeError: Cannot read properties of undefined (reading 'doAutoInsert')` in `onKeyPressToNewRow`. The grid still showed two rows afterwards. Recorded; effect on saved metadata unknown.

### Operation counts (T8)

| Operation | Count |
| --- | --- |
| **Finish** | **1** (not retried) |
| **Create Form prompt answered** | **1** (`No`; Yes not pressed) |
| Save | **0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Add Row / Delete Row / Delete All Rows (in T8) | **0 / 0 / 0** (cumulative since T6: Delete Row 1; since T7: Add Row 1) |
| Next / Back / Close | **1 / 0 / 1** |
| Field value edits | **0** (empty Default Value editor committed by Tab; no value) |
| Form tab closes / reopens (Web Client) | **0 / 0** |
| Post-creation IDO or SQL inspection | **0** (out of T8 scope) |
| Designer Form edits | **0** |
| Screenshots | **5** (`t8-01` to `t8-05`) |
| Tool errors | **0** |
| Designer console errors | **1** (`doAutoInsert`, observed) |
| Recovery snapshots / corrected inspections | **0 of 1 / 0 of 1** used |
| Prompts answered | **1** (Create Form `No`) |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Acceptance status after T8

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2, T7/T8 Designer scope and identity checks) |
| AC-2 | Passed in T1 (not re-run). |
| AC-3 | **Partial as a full gate**: IDO and SQL Tables exact `FX_UMs` observed absent with passing same-session positive controls; case-insensitive coverage not demonstrated; prefix not run. Coordinator accepted proceeding. |
| AC-4 | Supported for the pre-Finish state (page-1 values; exactly two field rows; no extra row). |
| AC-5 | Supported for displayed values and checked states before Finish. Required checked resulted from the Primary Key interaction (mechanism unresolved; coordinator accepted). |
| AC-6 | **Supported at the wizard level**: exactly one Finish; settled response `Table and IDO created.`; Create Form declined with a verified No; no Form created by this worker. Not verified by a post-creation query. |
| AC-7 to AC-12 | **Not run** (post-creation IDO and SQL queries, lifecycle check, SQL definition inspection, close/reopen recovery, cleanup reconciliation). |

### Repository confinement (T8, self-audit)

- Written in T8: this record (status line and T8 section); `evidence/EXP-044/t8-finish-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T8 entry); `evidence/EXP-044/t8-01` to `t8-05` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state (T8)

- Tab 1 (Designer, User scope): wizard closed; vendor `IdoPropertyClasses` design view unchanged; Save disabled; no prompt, no dialog, no banner (`t8-05`).
- Tab 0 (Web Client, `IdoCollections`): not acted on in T8.

### Open questions and blockers for the coordinator

1. **Post-creation verification is the next step**: confirm exactly one `FX_UMs` IDO in `FX_HelloWorldProject01` and one `dbo.FX_UMs` table (AC-7, AC-9), and check the IDO's checked-out state (AC-8). Those checks are not run in T8.
2. Confirm whether Form creation was declined (a Form-list query would confirm absence; the prompt sequence and completion text are the only evidence now).
3. Case-insensitive collision coverage remains unresolved (T2b, T4); the Required-by-Primary-Key mechanism remains unresolved (T7).
4. The Designer `doAutoInsert` console error is noted for review.
5. Classification: observed at the wizard level only; not replay_verified.

---

## T9 — Post-creation FX_UMs IDO inspection; Check In withheld on an unexpected definition discrepancy (STOPPED for coordinator review)

- Task T9 (task_message_id `4f12af24-395d-46c5-bcfd-5a432104d326`), cycle 10, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: exact-name IDO query and definition inspection; ownership and lifecycle check; at most one ordinary check-in if unambiguous and no discrepancy. No Save, Finish, Form creation, field edit, SQL Tables inspection, or lifecycle action on any other object.
- Scope distinction (restated): the IDO is **tenant-wide** metadata; the Designer editing scope is **User** (the Designer tab was not used).
- Detailed observations: `evidence/EXP-044/t9-ido-inspection-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T9 entry).

### Exact-name query (IDOs)

- Criterion `FX_UMs` committed (plain fill, Tab; `t9-02`); one F4; settled result `t9-03`: **one data record** `FX_UMs` (checked row, record view loaded: Revision Num 1, Revision Date 10/10/2026, Locked By `anton.ramos@3mworks.com.ph`, Access As G6R, Caption `oFX_UMs`, Label String ID `oFX_UMs`, Project Name `FX_HelloWorldProject01`). Status `Description (IDOs 1 of 1)`. The record is a saved record (revision and lock), not an add-mode placeholder.
- Count for the exact name: **1**.

### Base table

- Tables sub-tab (`t9-07`): `FX_UMs` · alias `fxum` · Primary Base · Inner · one row. Matches the intended alias.

### Properties (Properties sub-tab, `t9-04`, `t9-06`; nine rows, `Properties 1 of 9`)

| Property | Property Class | Key Seq | Data Type | Length | Column Type | Required |
| --- | --- | --- | --- | --- | --- | --- |
| FX_UM (seq 1, Bound to Column `FX_UM`) | **FX_UMBase** | **1** | **blank** | **blank** | **blank** | **checked** |
| FX_Description (seq 2, Bound to Column `FX_Description`) | — | 0 | **String** | **50** | **nvarchar** | unchecked |
| CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow (seq 3–9) | — | 0 | system | system | system | system |

- Intended user-defined properties are present (`FX_UM`, `FX_Description`) and bound to their columns.
- **Discrepancy (unresolved):** FX_UM's inherited Data Type, Length and Column Type are **blank** in the IDO grid. The wizard had shown String / 10 / nvarchar inherited from FX_UMBase. The grid does not show whether the IDO stores these values, relies on runtime resolution from FX_UMBase, or did not write them. The brief forbids inferring them from the wizard.
- FX_UM's Label String ID `FX_sUM` is not shown in this grid (not verified in the IDO).
- The seven system-generated properties are ordinary system metadata (not authored by the worker).

### Lifecycle (ownership)

- The IDO is **checked out** to the operator: row checkbox checked; Locked By `anton.ramos@3mworks.com.ph`; Check In enabled; Undo Check Out disabled.
- **Check In was NOT performed.** The brief permits the single ordinary check-in only when the identity is unambiguous and no unexpected definition discrepancy has appeared. The blank inherited FX_UM attributes are such a discrepancy. The Check In control (`f1e315`, label `Check In`) was verified and not clicked. No Undo Check Out, no Check Out, no other lifecycle action.

### Errors and recovery (T9)

- E1: first screenshot after the IDO query timed out at "waiting for fonts to load" (background-tab rendering pattern; the same as T2). Recovered by reselecting tab 0 (navigation only), then a successful screenshot.
- E2: `Ref f1e351 not found` after the Properties sub-tab click. Recovery used targeted `find` queries and a targeted grid snapshot (`f1e460`); the brief's untargeted fresh snapshot was not taken. Recorded as a deviation. Recovery allowance: 1 of 1 used; no corrected inspection retry was needed.
- No prompts, no dialogs, no banners.

### Operation counts (T9)

| Operation | Count |
| --- | --- |
| Check In / Undo Check Out / Check Out | **0 / 0 / 0** |
| Save / Finish / Create Form | **0 / 0 / 0** |
| Field edits / Add Row / Delete Row | **0 / 0 / 0** |
| IDO criteria entries | **1** (`FX_UMs`) |
| Tab commits | **1** |
| F4 executed | **1** |
| IDO sub-tab clicks (Properties, Tables) | **2** |
| Property row selection (read-only) | **1** |
| Web Client tab selects | **1** |
| Screenshots | **7** saved (`t9-01` to `t9-07`); one timed-out attempt not saved |
| Errors | **2** (E1 timeout; E2 ref-not-found) |
| Recovery | **1 of 1** used (E2, targeted); corrected inspection 0 of 1 |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |

### Acceptance status after T9

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2; T9 preflight). |
| AC-2 | Passed in T1 (not re-run). |
| AC-3 | Partial as a full gate (IDO and SQL exact absence before creation with positive controls; case-insensitive not demonstrated). |
| AC-4, AC-5 | Supported for the pre-Finish state (T7, T8). |
| AC-6 | Supported at the wizard level (T8). |
| AC-7 | **Partially supported.** Exactly one `FX_UMs` IDO record in `FX_HelloWorldProject01` (exact-name query; one data record). Base table `FX_UMs`, alias `fxum` shown. FX_UM property class `FX_UMBase` shown; FX_UM Key Sequence 1 and Required checked shown. **FX_UM's Data Type, Length, Column Type are blank in the IDO grid, so the inherited String/10/nvarchar are NOT verified on the IDO.** FX_Description String/50/nvarchar shown. Label String IDs not shown for the properties. |
| AC-8 | **Partially supported.** Checked-out state visibly captured (Locked By operator; Check In enabled). Check-in NOT performed (discrepancy), so the settled post-check-in state is not established. No existing property class, IDO, or project was subjected to a lifecycle mutation in T9. |
| AC-9 to AC-12 | Not run (SQL Tables inspection out of T9 scope; close/reopen recovery; reconciliation). |

### Repository confinement (T9, self-audit)

- Written in T9: this record (status line and T9 section); `evidence/EXP-044/t9-ido-inspection-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T9 entry); `evidence/EXP-044/t9-01` to `t9-07` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state (T9)

- Tab 0 (Web Client, `IdoCollections`): IDOs Form in Filter in Place criteria `FX_UMs`; the one `FX_UMs` record loaded; Tables sub-tab selected; Check In enabled, not clicked; no dialog, prompt, or banner.
- Tab 1 (Designer, User scope): `IdoPropertyClasses` design view unchanged.

### Open questions and blockers for the coordinator

1. **Blocker for check-in:** FX_UM's inherited Data Type, Length and Column Type are blank on the IDO. Decide whether this is an accepted display behaviour of property-class-bound properties (then the check-in may be authorized and the inherited values verified another way), or a definition discrepancy to investigate first. The worker has not inferred either.
2. FX_UM Label String ID (`FX_sUM`) and the property-level Primary Key attribute are not directly shown in the grid; decide whether they need another supported view.
3. Check-in is **not authorized** until the coordinator decides item 1. If authorized, it is one ordinary check-in confined to `FX_UMs`.
4. The SQL table `dbo.FX_UMs` has not been inspected (AC-9); that belongs to the next task.
5. Classification: observed; not replay_verified.

---

## T10 — Read-only SQL Tables verification of dbo.FX_UMs (STOPPED for coordinator review; no mutation)

- Task T10 (task_message_id `7d264a6d-d960-401d-8a31-49c28f379b97`), cycle 11, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: read-only SQL Tables exact-name query and column inspection. No Save, Finish, Form creation, check-in, schema update, constraint change, SQL execution, or IDO lifecycle action. No close/reopen as the AC-10 test (not requested in T10).
- Scope distinction (restated): the SQL table is **tenant-wide** metadata; the Designer editing scope is **User**.
- Detailed observations: `evidence/EXP-044/t10-sql-table-verification-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T10 entry).

### Caution alert

- The Sql Tables caution alert appeared on open (informational: "Please be very careful using these forms…"). Its text and single OK control were verified by a targeted snapshot, and OK was clicked once.

### Table identity (criteria row, one F4)

- Criterion `FX_UMs` entered in the grid's Table Name criteria cell only (the Attributes Table Name combo was not used). Save disabled before F4.
- Settled result: **one real record**: Table Name `FX_UMs`, Schema `dbo`, Multi-Site unchecked, no star. Status `Schema (SQL Tables 1 of 1)`. Save disabled; Update Current Table disabled (no pending change). This matches the EXP-040 real-row pattern and differs from the T4 starred placeholder.
- Constraints: `Primary Key` `PK_FX_UMs` (description `FX_UM`); `Index` `IX_FX_UMs_RowPointer` (description `RowPointer`, a system index).

### Columns (Columns... button, read-only)

- Sql Columns status `Column Name (SQL Columns 1 of 9)`: nine columns in `dbo.FX_UMs`.

| Column | Id | Data Type | Length | Is Nullable | Primary Key | Key Seq | Origin |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **FX_UM** | 2 | nvarchar | **10** | **unchecked (NOT NULL)** | **checked** | **1** | authored |
| **FX_Description** | 3 | nvarchar | **50** | **checked (nullable)** | unchecked | blank | authored |
| CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow | — | **not read** | — | — | — | — | system-generated (by name only) |

- FX_UM's primary-key membership is supported by two views: the Columns Primary Key checkbox with Key Sequence 1, and the constraint `PK_FX_UMs` described as `FX_UM`.
- System columns (rows 3–9) were not opened for type, length or nullability (not required by the brief; not claimed).

### Mismatch assessment

- No mismatch with the expected definition: FX_UM nvarchar(10) NOT NULL primary key; FX_Description nvarchar(50). FX_Description nullability (checked) has no expected value in the brief and is recorded as observed. The wizard had no nullability control.
- Relation to the T9 IDO discrepancy: the SQL column shows FX_UM as nvarchar and length 10, which matches the wizard's inherited values. The blank IDO-grid cells for FX_UM remain unexplained by this SQL view. The discrepancy is therefore **not resolved** by T10; it concerns the IDO definition, not the stored column.

### Errors, prompts and recovery (T10)

| # | Event | Handling |
| --- | --- | --- |
| E1 | First criteria click landed on the row-number cell, not the Table Name criteria cell (wrong target; no edit) | Corrected visible inspection (screenshot), then coordinate click on the Table Name criteria cell; grid editor confirmed. |
| E2 | `Ref f1e532 not found` | One fresh untargeted snapshot (depth 14). Recovery allowance 1 of 1 used. |
| P1 | Caution alertdialog (informational) | Verified text and OK; clicked once. |
| — | No save-changes, discard, validation or other prompt. | — |

### Operation counts (T10)

| Operation | Count |
| --- | --- |
| Save / Finish / Create Form | **0 / 0 / 0** |
| Check In / Check Out / Undo | **0 / 0 / 0** |
| Schema update / New Constraint / Modify Constraint / Columns edits | **0** |
| Attributes or definition-field entries | **0** |
| Caution alert OK | **1** |
| Select Form OK | **1** |
| Criteria entries (grid) / F4 / Tab | **1 / 1 / 1** |
| Read-only grid selections | **3** |
| Columns... opened (Sql Columns runtime Form) | **1** |
| Screenshots | **7** (`t10-01` to `t10-07`) |
| Errors | **1** ref-not-found (E2); one wrong-target click (E1, no effect) |
| Recovery | **1 of 1** (E2); corrected inspection **1 of 1** (E1) |
| Prompts answered | **1** (caution OK, informational) |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |
| Form tab closes / reopens | **0 / 0** (AC-10 lifecycle not run, per instruction) |

### Acceptance status after T10

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2, and the T10 preflight). |
| AC-2 | Passed in T1 (not re-run). |
| AC-3 | Partial as a full gate (IDO and SQL exact absence before creation with positive controls; case-insensitive not demonstrated). |
| AC-4, AC-5, AC-6 | Supported for the pre-Finish state and the wizard-level creation (T7, T8). |
| AC-7 | Partially supported (T9): identity, base table and alias, FX_UM property class association, FX_Description definition. FX_UM inherited Data Type/Length not verified on the IDO. |
| AC-8 | Partially supported (T9): checked-out state visible; no check-in performed. |
| AC-9 | **Supported.** Supported SQL exact-name query returned one real `dbo.FX_UMs` record. FX_UM nvarchar(10), NOT NULL, primary key (Primary Key checked, Key Sequence 1, constraint `PK_FX_UMs` described as FX_UM). FX_Description nvarchar(50). Seven system columns and one system index distinguished. Column definitions captured in `t10-05` and `t10-06`. |
| AC-10 | **Not run** (T10 instruction: no close/reopen lifecycle test). |
| AC-11, AC-12 | Not run (cleanup inventory updated; final reconciliation pending the lifecycle and check-in decisions). |

### Repository confinement (T10, self-audit)

- Written in T10: this record (status line and T10 section); `evidence/EXP-044/t10-sql-table-verification-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T10 entry); `evidence/EXP-044/t10-01` to `t10-07` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Last verified browser state (T10)

- Tab 0 (Mongoose): `Sql Columns` runtime tab selected, `FX_Description` as the current column row (its name combobox active with text selected, untouched). `Sql Tables` (criteria `FX_UMs`, record `FX_UMs`/`dbo` loaded, Save disabled), `IDOs` (criteria `FX_UMs`, Check In enabled, not clicked), `FX_HelloWorld01` and `Property Classes` tabs open. No dialog, no unsaved-change prompt, no banner (`t10-07`).
- Tab 1 (Designer, User scope): `IdoPropertyClasses` design view unchanged; Save disabled.

### Open questions for the coordinator

1. **Check-in decision (pending):** the SQL column evidence supports the FX_UM type, length and key membership. The IDO-grid blank Data Type/Length/Column Type for FX_UM (T9) is still unexplained. Decide whether the check-in is authorized, and whether the IDO attributes need a different supported view first.
2. Close/reopen lifecycle (AC-10) for the IDOs and SQL Tables Forms is not yet run; it is a separate authorization.
3. System-column types and nullability (rows 3–9) were not read; decide whether they must be verified.
4. Classification: observed; not replay_verified.

---

## T11 — Inheritance and key confirmation, single IDO check-in, invariant recheck (STOPPED for coordinator review)

- Task T11 (task_message_id `4a731028-3549-4008-93aa-b8837f6db81a`), cycle 13, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: read-only IDO and property-class confirmation; one ordinary check-in of `FX_UMs` if conditions held; read-only FX_UMBase recheck. No Save, Finish, Form creation, Check Out, Undo, table update, field edit, AC-10 close/reopen, or any lifecycle action on FX_UMBase, FX_HelloWorldProject01, FX_HelloWorld01, or another pre-existing object.
- Note: the brief refers to a "specialist consultation C1" that is not present in this session. T11 relied on the T9 and T10 records as the brief directs.
- Scope distinction (restated): the IDO and property class are **tenant-wide** metadata; the Designer editing scope is **User** (the Designer tab was not used).
- Detailed observations: `evidence/EXP-044/t11-checkin-and-invariant-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T11 entry).

### Pre-check-in confirmation (read-only)

- IDO `FX_UMs`: project `FX_HelloWorldProject01`; base table `FX_UMs`, alias `fxum` (Primary Base, Inner, one row); FX_UM bound to `FX_UM` with property class `FX_UMBase`, Key Sequence 1, Required checked; FX_Description String / 50 / nvarchar, not required. Revision 1; Locked By `anton.ramos@3mworks.com.ph`; row checkbox checked; Check In enabled; Save disabled.
- FX_UM Data Type / Length / Column Type remain blank in the IDO grid. Treated, per the T11 instruction, as consistent with inheritance; **not** proven as an effective value on the IDO.
- Advanced Attributes was **not** opened (not needed for the decision; optional under the brief).
- FX_UMBase (Property Classes, exact-name FiP query, one F4): Class Name `FX_UMBase`; Revision 1; Locked By operator; Data Type String; Length 10; Column Data Type nvarchar; Label String ID FX_sUM; checked out (Check In and Undo enabled). `Base Class (IDO Property Classes 1 of 1)`. The first F4 screenshot did not show the detail rendered; the accessibility read is the decisive record.

### Check-in (one action)

| Step | Observed |
| --- | --- |
| Verified control | `Check In` `f1e742` (label verified by find) on the IDOs form for `FX_UMs`. |
| Click, **once** | No tool error. |
| Dialog or comment prompt | **None** (find for alertdialog, dialog, Comment, Are you sure, Yes, OK, Cancel). No comment entered; no confirmation answered. |
| Settled state | **Revision Num `1` → `2`**; Locked By **empty**; row checkbox **unchecked**; button now **Check Out** (enabled); Undo Check Out disabled; status `Check Out (IDOs 1 of 1)`; Save disabled. |
| Properties after check-in | Unchanged (FX_UM `FX_UMBase`, key 1, Required checked; FX_Description String/50/nvarchar). |

### Invariant recheck (read-only, after the check-in)

- FX_UMBase: unchanged. `String`, `10`, `nvarchar`, `FX_sUM`; Revision No `1`; Revision Date `10/10/2026`; **still checked out to the operator** (Check In and Undo enabled); Save disabled; one record. The check-in did not affect the class in the UI.
- FX_HelloWorldProject01, FX_HelloWorld01 IDO and table, and the vendor `IdoPropertyClasses` Designer Form: not touched in T11 and not re-read beyond the above.
- Limitation: this is a same-session UI read, not a database-level check.

### Acceptance status after T11

| AC | Status |
| --- | --- |
| AC-1 | Supported (T1, T2, and the T11 preflight). |
| AC-2 | Passed in T1 (not re-run). |
| AC-3 | Partial as a full gate (IDO and SQL exact absence before creation with passing positive controls; case-insensitive not demonstrated). |
| AC-4, AC-5, AC-6 | Supported (T7, T8). |
| AC-7 | Supported for the identity and definition shown (exactly one `FX_UMs` IDO in `FX_HelloWorldProject01`; base table and alias; FX_UM bound to `FX_UMBase`, Key Sequence 1, Required checked; FX_Description String/50/nvarchar). The effective inherited Data Type/Length on the IDO remains **unresolved**: the grid cells are blank. |
| AC-8 | **Supported.** The IDO was checked out to the operator. Exactly one permitted ordinary check-in was performed on `FX_UMs`. Settled revision 1 → 2; Locked By empty; Check Out enabled. FX_UMBase verified unchanged and still checked out (no lifecycle mutation on it). No project or other IDO touched. |
| AC-9 | Supported (T10). |
| AC-10 | **Not run** (not requested in T11). |
| AC-11, AC-12 | Pending; cleanup inventory updated; final reconciliation pending AC-10 and the coordinator's review. |

### Repository confinement (T11, self-audit)

- Written in T11: this record (status line and T11 section); `evidence/EXP-044/t11-checkin-and-invariant-observations.md` (created); `evidence/EXP-044/cleanup-inventory.md` (T11 entry); `evidence/EXP-044/t11-01` to `t11-08` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` not read.

### Operation counts (T11)

| Operation | Count |
| --- | --- |
| **Check In** | **1** (`FX_UMs` only; no retry) |
| Check Out / Undo Check Out | **0 / 0** |
| Save | **0** |
| Finish / Create Form | **0 / 0** |
| Comment entries / confirmation answers | **0 / 0** |
| Field or property-class edits | **0** |
| Exact-name FiP F4 | **1** (`FX_UMBase`) |
| Criteria entries / Tab commits / FiP toolbar clicks | **1 / 1 / 1** |
| Tab selections (navigation) | **4** |
| IDO detail sub-tab clicks (Tables, Properties) | **2** |
| Screenshots | **8** (`t11-01` to `t11-08`) |
| Errors | **1** ref-not-found (a guessed ref that did not exist; no action ran) |
| Recovery | **1 of 1** used (fresh snapshot after the error); corrected inspection **0 of 1** |
| Prompts answered | **0** |
| Portal banner dismissals | **0** |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart | **0** |
| Form tab closes / reopens | **0 / 0** |

### Last verified browser state (T11)

- Tab 0 (Mongoose): `Property Classes` selected showing FX_UMBase (checked out to the operator, Save disabled, Check In and Undo enabled). IDOs tab holds the checked-in FX_UMs IDO (Revision 2, Locked By empty, Check Out enabled). Sql Tables, Sql Columns and FX_HelloWorld01 tabs remain open. No dialog, no unsaved-change prompt, no banner (`t11-08`).
- Tab 1 (Designer, User scope): not used in T11.

### Open questions for the coordinator

1. The FX_UM inherited Data Type/Length/Column Type on the IDO grid remain blank. Confirm that this is acceptable for the record (per the T11 instruction), or direct a separate supported view.
2. AC-10 close and reopen of the IDOs and Sql Tables Forms, and the exact-name recovery queries, need a separate authorization.
3. FX_HelloWorldProject01 was not re-read after the action. Confirm whether a read is needed for AC-11.
4. Classification: observed; not replay_verified. The specialist consultation C1 cited by the brief was not available in this session.

---

## T12 — Same-session close/reopen recovery (AC-10) and evidence reconciliation (COMPLETE; stopped for coordinator final review)

- Task T12 (task_message_id `9ea963ca-5479-42f7-8ddd-e38e9cac73e1`), cycle 14, worker session `1f5332fc-1595-4262-ae90-49b4c5b3ac99`.
- Scope: close only the IDOs and Sql Tables runtime Forms; reopen each through Select Form; run exact-name queries for `FX_UMs`; reconcile evidence. No Check In, Check Out, Save, Finish, Create Form, Delete Row, field edit, or cleanup.
- Detailed observations: `evidence/EXP-044/t12-recovery-and-reconciliation-observations.md`. Cleanup: `evidence/EXP-044/cleanup-inventory.md` (T12 section, reconciled object list).
- Scope distinction (restated): the Designer editing scope is **User**. The `FX_UMs` IDO and SQL table are **tenant-wide** metadata, not User-scoped Form versions. The Designer tab was not used in T12.

### Result

- **AC-10 same-session UI recovery performed.** Both runtime Forms closed with no prompt. Both reopened through Select Form and were queried by exact name.
- Recovered IDO `FX_UMs`: one record. Revision 2, Locked By empty, Check Out enabled. Project `FX_HelloWorldProject01`. Tables: `FX_UMs` / `fxum` (Primary Base, Inner). FX_UM on `FX_UMBase`, Key Sequence 1, Required checked. FX_Description String / 50 / nvarchar. Seven system properties.
- Recovered `dbo.FX_UMs`: one real record (not a placeholder). Constraints `PK_FX_UMs` and `IX_FX_UMs_RowPointer`. Nine columns. FX_UM nvarchar / 10 / NOT NULL / primary key (Key Sequence 1). FX_Description nvarchar / 50 / nullable.
- Both match the T9, T10 and T11 post-creation baselines (comparison table in the observation file, §7).
- **Observed side effect:** closing the Sql Tables Form also removed the `Sql Columns` runtime tab. That was not a worker close. The brief asked for Sql Columns to be preserved, so this is recorded as a deviation. Sql Columns was reopened from the `Columns...` button.
- **Limitation:** same-session UI recovery only. It does not establish database durability, cross-session, or cross-user visibility.

### Actions (T12, in order)

| # | Action | Observed |
| --- | --- | --- |
| 1 | Clean-state reads of IDOs (`t12-01`) and Sql Tables (`t12-03`) | Save disabled on both. IDO record Revision 2, not locked. Sql Tables one record `FX_UMs`/`dbo`. |
| 2 | `Close Panel IDOs` (`f1e107`, label verified), once | Tab removed. No prompt (`t12-02`). |
| 3 | `Close Panel Sql Tables` (`f1e110`, label verified), once | Tab removed; Sql Columns tab also removed. No prompt (`t12-04`). |
| 4 | Toolbar Open (`f1e26`), once; Select Form filter `IdoCollections`; caption cell and OK | IDOs reopened. Full inventory loaded (`IDOs 1 of 360`) with the stock last-selected row. Not a worker action. |
| 5 | Filter in Place toolbar (`f1e38`) and IDO Name criterion fill `FX_UMs` | **Refused** (E2): `CollectionNameEdit` read-only (record-view state). The Tab moved focus only (`t12-05`). |
| 6 | Corrected inspection: Filter in Place toolbar (`f1e38`) again; plain fill `FX_UMs`; Tab | Fill succeeded; criterion committed (`t12-06`). |
| 7 | F4, once (IDO) | Exactly one record `FX_UMs`, Revision 2, unlocked (`t12-07`). Properties read through accessibility (`t12-08`). |
| 8 | Toolbar Open (`f1e26`), once; Select Form filter `SqlTables`; OK | Caution alertdialog (`f1e4297`) with a single `OK` (`f1e4301`). Verified text: the standard "be very careful" caution. OK clicked once (informational). |
| 9 | Grid criteria row only: mouse click at (450, 191); active editor the grid combobox (`f1e4308`); plain fill `FX_UMs`; Tab | Criterion committed in the grid row. Save disabled (`t12-10`). Attributes not used. |
| 10 | F4, once (Sql Tables) | Schema status; `PK_FX_UMs` and `IX_FX_UMs_RowPointer` shown; one real record, no star; Save and Update Current Table disabled (`t12-11`; accessibility read is decisive). |
| 11 | `Columns...` (`f1e4218`), once | Sql Columns: 9 rows. FX_UM and FX_Description read (`t12-12`, `t12-13`). |

### Operation counts (T12)

| Operation | Count |
| --- | --- |
| Form tab closes (IDOs; Sql Tables) | **2** (both ordinary; no prompt) |
| Form reopens through Select Form (IDOs; Sql Tables) | **2** |
| Exact-name F4 recovery queries | **2** (`FX_UMs` IDO; `FX_UMs` SQL table) |
| Criterion commits (plain fill + Tab) | **2** (IDO; SQL table) |
| Refused fills | **1** (E2, IDO criterion field read-only) |
| Corrected visible inspections | **1 of 1** (Filter in Place toolbar re-entry) |
| Recovery snapshots | **0 of 1** used |
| Filter in Place toolbar clicks | **2** on the IDOs form; **0** on the Sql Tables form (it opened already in Filter in Place mode) |
| Prompts answered | **1** (Sql Tables caution `OK`, informational). No other prompt. |
| Select Form OK | **2** |
| `Columns...` opened | **1** (read-only) |
| Sub-tab clicks (IDO Tables, Properties) | **3** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Save / Finish / Create Form | **0 / 0 / 0** |
| Delete Row; field, table, column or constraint edits | **0** |
| Screenshots | **13** (`t12-01` to `t12-13`) |
| Errors | **1** (E2). No ref-not-found error in T12. |
| Portal banner dismissals | **0** (none visible) |
| JavaScript / evaluate / run-code | **0** |
| Login, logout, refresh, restart, reauthentication | **0** |

### Acceptance reconciliation (AC-1 to AC-12)

Status terms: **Supported** (evidence inspected and sufficient for the stated claim), **Passed** (the brief's gate met), **Partial** (some elements evidenced, a stated element unresolved), **Not run**. Nothing is claimed as replay_verified. Final acceptance is reserved to the coordinator.

| AC | Status | Evidence (paths under `evidence/EXP-044/`) | Limits |
| --- | --- | --- | --- |
| **AC-1** Preflight | **Supported** | `t1-00-toolbar-designer-tooltip-probe.png` (identity bar, Property Classes with FX_UMBase); `t1-accessibility-observations.md` §1; `t2-00-preflight-webclient-after-tab-reselect.png`; `t12-01` (clean IDOs state, identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); repository baseline in the T1 section | "Site Developer" context not visible in the UI. Designer toolbar identity conflicts with the EXP-009 record (unresolved). Repository baseline is from session-start git status (no Bash). |
| **AC-2** FX_UMBase lookup gate | **Passed** (T1) | `t1-03-property-class-lookup-scrolled-to-FX_UMBase.png` (row visible between `FullObjectPath` and `G6RCost`); `t1-04-property-class-after-FX_UMBase-click-uncommitted.png` (cell shows FX_UMBase, String, nvarchar); `t1-accessibility-observations.md` §4a; `t1-06` (wizard closed). Not re-run in T12. | Lookup was **unfiltered** (typed filter failed on a stale ref). Length 10 and Label FX_sUM were not read in T1 (off-screen). The wizard Cancel raised a discard confirmation, answered `Yes` (flagged for coordinator review). |
| **AC-3** Pre-Finish collision gate | **Partial** | IDOs: positive control `FX_HelloWorld01` returned one row (`t2b-04`); `FX_UMs` returned zero rows with no placeholder and no status count (`t2b-03`). SQL Tables: positive control `FX_HelloWorld01` returned one row with constraints (`t4-02`, `t4-03`); `FX_UMs` returned only an unsaved starred placeholder (`t4-04` to `t4-06`). | **Case-insensitive** coverage not demonstrated in either collection (`fx_ums` blocked by a PreToolUse hook; not retried). Prefix `FX_UM*` not run. The absence is observed with limitations. Creation proceeded under the coordinator's authorization, not on a full AC-3 pass. |
| **AC-4** Wizard identity, placeholder, final grid | **Partial** | Wizard name `FX_UMs`, project `FX_HelloWorldProject01`, alias `fxum` (`t5-02`). Final pre-Finish grid had exactly two user fields, `FX_UM` and `FX_Description` (T7 and T8 observation files). | **Placeholder removal not verified.** One Delete Row press in T6 had an ambiguous outcome (the starred blank row remained). The row was not deleted again. The operator then authorized using it as row 1 (T7). The placeholder's identity was therefore not established by a verified row control. |
| **AC-5** Pre-Finish field values | **Supported** | `t7-field-configuration-observations.md`, `t7-01` to `t7-04`; `t8-finish-observations.md`, `t8-01` to `t8-05`. Wizard display: FX_UM with FX_UMBase, inherited String / 10 / nvarchar, Label FX_sUM, Primary Key checked, Required checked. FX_Description String / 50 / nvarchar, Label FX_sDescription, PK and Required unchecked. | Required on FX_UM was set by the Primary Key click; the mechanism is unresolved (the coordinator accepted it; Required was not clicked again). A `doAutoInsert` console error appeared on Tab in an empty Default Value editor (T8); its effect is unknown. |
| **AC-6** Single Finish; Create Form declined | **Supported** (wizard level) | `t8-finish-observations.md`, `t8-01` to `t8-05`: one Finish; immediate prompt `Do you want to create a form for FX_UMs?`; `No` answered once after label verification; settled message `Table and IDO created.`. | Creation is confirmed by the post-creation queries (AC-7, AC-9), not by the wizard message alone. No Form-list query was run, so the absence of a created Form is recorded from the prompt answer only. |
| **AC-7** Post-creation IDO identity and definition | **Supported** for identity and definition | `t9-ido-inspection-observations.md`, `t9-01` to `t9-07`; `t11-06`, `t11-07`; `t12-07` (one record); `t12-08` (properties). Exact-name result: one `FX_UMs` in `FX_HelloWorldProject01`; `fxum`; FX_UM on `FX_UMBase`, Key Sequence 1, Required; FX_Description String / 50 / nvarchar. | **FX_UM Data Type, Length and Column Type are blank in the IDO grid.** The effective inherited values on the IDO are **not proven**. The FX_UM Label String ID `FX_sUM` is **not displayed** on the saved IDO. Blank cells are not claimed as proof of inheritance. |
| **AC-8** Lifecycle state; single check-in | **Supported** | `t11-06-idos-FX_UMs-identity-before-checkin-decision.png` (revision 1, Locked By operator, Check In enabled); `t11-07-idos-FX_UMs-settled-after-single-checkin.png` (Revision 2, Locked By empty, Check Out enabled); `t11-08` (FX_UMBase still checked out, Revision 1, unchanged). | The check-in was on the coordinator's stated basis that the blank inherited cells are display only. No dialog appeared. Database-level state not read. FX_HelloWorldProject01 not checked after the action. |
| **AC-9** SQL table definition | **Supported** | `t10-sql-table-verification-observations.md`, `t10-01` to `t10-07`; `t12-10`, `t12-11` (table record and constraints); `t12-12` (FX_UM nvarchar / 10 / Is Nullable unchecked / PK checked / key 1); `t12-13` (state). | System columns 3 to 9 (CreatedBy, UpdatedBy, CreateDate, RecordDate, RowPointer, NoteExistsFlag, InWorkflow): **names only; types and nullability not read**. Primary-key membership rests on the Primary Key checkbox, Key Sequence 1, and the constraint `PK_FX_UMs` (described as FX_UM). |
| **AC-10** Same-session close/reopen recovery | **Supported** (same-session UI only) | `t12-02` and `t12-04` (both tabs removed, no prompt); `t12-06` to `t12-07` (IDO reopened, one record matching AC-7 and AC-8 state); `t12-08` (properties); `t12-10` to `t12-11` (table reopened, one record with constraints matching AC-9); `t12-12` to `t12-13` (columns). | Same-session UI only. No durability, cross-session, or cross-user claim. `t12-11` was captured before the grid repainted; the accessibility read is the decisive record. The Sql Columns tab was removed as a side effect of the Sql Tables close (not a worker close). The E2 refused fill is recorded. |
| **AC-11** Cleanup inventory | **Supported** | `evidence/EXP-044/cleanup-inventory.md` (T12 reconciled inventory; per-task entries T1 to T12). Objects: table `dbo.FX_UMs`; IDO `FX_UMs` in `FX_HelloWorldProject01`; alias `fxum`; FX_UM (FX_UMBase, PK, Required, nvarchar 10); FX_Description (String, 50, nvarchar); seven generated columns; `IX_FX_UMs_RowPointer`; Form creation declined. Ownership: factory, operator-authorized. Cleanup: none performed. | `FX_HelloWorldProject01` was **not re-read after T11** (recorded as not touched by a visible action, not as independently verified). `FX_UMBase`, `FX_HelloWorldProject01`, `FX_HelloWorld01` recorded as unchanged by the observed reads only. |
| **AC-12** Final reconciliation | **Complete in this record; acceptance reserved to coordinator** | This section; the observation files for T1 to T12; the screenshots listed in each. Counts: Finish **1**; Create Form prompt answered **No** ×1; Save **0** in each task whose operation-count table records it (T1, T2, T2b, T4, T5, T6, T11, T12; the T7 to T10 tables are not used for this claim); check-in **1** (T11); Check Out / Undo **0**; cleanup **0**; Delete Row **1** (T6, ambiguous, not repeated); lifecycle on FX_UMBase **0**. | Errors and recovery are accounted per task (see Errors and Deviations below). Classification is observed; the worker does not mark the experiment accepted or replay_verified. |

### Errors, deviations and recovery (cumulative, for coordinator review)

1. T1: stale-ref failure on the lookup filter; discard confirmation answered `Yes` (flagged in T1).
2. T1: Designer toolbar identity conflict with the EXP-009 record (unresolved).
3. T2: `Open` toolbar timeout (rendering) and read-only IDO criterion field; both recovered by visible means.
4. T2b: stale ref `f1e36`; one fresh snapshot used; lowercase `fx_ums` blocked by a PreToolUse hook (not retried).
5. T4: first SQL criterion attempt in the wrong target; Save stayed disabled; the placeholder left unsaved and then closed with the tab (no prompt; no database read).
6. T6: one Delete Row press on the starred row with an ambiguous outcome; not repeated.
7. T7: stale ref `e1643`; one fresh untargeted snapshot used; Required set by the Primary Key click (mechanism unresolved; accepted by the coordinator).
8. T8: `doAutoInsert` console error on Tab in an empty Default Value editor; effect unknown.
9. T9: screenshot timeout; ref not found after a sub-tab click; the blank FX_UM Data Type, Length and Column Type cells (check-in withheld until T11).
10. T10: wrong target click (row-number cell; no edit); corrected by a coordinate click on the Table Name criteria cell with active-editor verification; one fresh snapshot after a ref error.
11. T11: guessed ref `f1e1040` did not exist (no action); one fresh snapshot; one Check In performed.
12. T12: E2 refused criterion fill (read-only field); corrected by Filter in Place re-entry (one corrected inspection). Sql Columns tab removed as a side effect of the Sql Tables close.

### Repository confinement (T12, self-audit)

- Written in T12: this record (status line and T12 section); `evidence/EXP-044/cleanup-inventory.md` (T12 reconciled inventory); `evidence/EXP-044/t12-recovery-and-reconciliation-observations.md` (created); `evidence/EXP-044/t12-01-…` to `t12-13-…` PNGs (created by the browser tool).
- Not written: any other repository file. `tools/` and `briefs/` not read. Pre-existing unrelated modifications (`tools/learning-harness/*`) not touched.

### Last verified browser state (T12)

- Tab 0 (Mongoose, `favoriteContext=SqlColumns`): `Sql Columns` runtime tab selected, showing the `FX_UMs` column detail (FX_UM current row; Column Name combobox active with its text selected, not edited; 9 columns). Runtime tabs open: `FX_HelloWorld01`, `Property Classes` (FX_UMBase, checked out to the operator), `IDOs` (FX_UMs recovered record, Revision 2, checked in, Check Out enabled), and `Sql Tables` (criterion `FX_UMs`, record `FX_UMs`/`dbo` loaded, Save disabled).
- No dialog, no unsaved-change prompt, no banner (`t12-13`).
- Tab 1 (Designer, User scope): not used in T12.

### Open questions for the coordinator

1. Accept AC-10 as same-session UI recovery (no durability claim) and decide the final status of AC-3 and AC-4, which are Partial.
2. Unresolved items to carry forward: effective inherited Data Type, Length and Column Type on the IDO (blank grid cells); the FX_UM Label String ID `FX_sUM` not displayed on the saved IDO; the Required mechanism on FX_UM (set via the Primary Key click); the `doAutoInsert` console error; the system-column types and nullability (rows 3 to 9); case-insensitive collision coverage; placeholder disposition on the Sql Tables close; the Designer toolbar identity conflict with EXP-009; and the C1 specialist consultation, which is not present in this session.
3. `FX_HelloWorldProject01` was not re-read after T11 or in T12. Confirm whether a read-only identity check is needed for AC-11.
4. Classification: **observed only**. Not replay_verified. No database durability, cross-session, or cross-user visibility claim is made.
