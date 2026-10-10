# EXP-049 — T2 read-only recovery inspection checkpoint

Run: R-20261011-020822-9Eej, cycle 1, task T2 (fresh worker session 7856326a-2d49-49d2-933b-fb1f1b88c8ea).
Scope of this step: read-only inspection of the saved T1 history and current browser surface. No wizard, Finish, Save, New, Create Form, check-in/check-out, edit, close, reopen, refresh, navigation, or tab change was performed.

## 1. Experiment record and T1 history

- `experiments/EXP-049-hello-world-part-2-create-fx-items-sql-table-and-i.md` **does not exist**. A glob of `experiments/*` ends at EXP-048. The T1 reads of this path failed (`harness-audit-T1.md` rows 2 and 4). No EXP-049 record was created in this step.
- `evidence/EXP-049/harness-audit-T1.md` (controller-generated, 169 rows, "No terminal event; audit may be partial") reports 52 browser actions, 71 reads, 2 read errors, 12 `browser_type` calls, 16 key presses (8 Tab, 8 F4), and "audit issues=1".

### Audited browser actions in T1 (from the controller audit table)

| Category | Actions | Result |
| --- | --- | --- |
| Filter in Place toolbar clicks | Property Classes (x3), IDOs, SQL Tables, plus one IDO-side and one SQL-side click | ok |
| `browser_type` (12) | Class Name FiP criteria (x3); Select Form Filter (x4); IDO Name criteria (x2); SQL Table Name criteria (x2); IDO Project Name criteria (x1) | ok (typed text not recorded; audit has no key string) |
| Select Form opens | IDOs, SQL Tables, IDO Projects, Export/Import Strings | ok |
| Dialog dismissals | SQL Tables caution alert (OK, step 97); Designer "Identify Your Editing Scope" (OK, scope User, step 162); Select Form OK buttons | ok |
| Designer | "Designer" toolbar button on Property Classes runtime (step 159); tab selects (160, 167) | ok |
| Tab/F4 | 8 Tab + 8 F4 on FiP criteria cells | ok |

**Not in the audit:** no New Form Definition / New Data / Maintenance wizard open, no wizard field entry, no Finish, no Save, no Create Form prompt answer, no Check In, no Check Out, no Undo Check Out, no New record action on any target.

The 12 flagged `browser_type` calls targeted filter/criteria textboxes and Select Form filters. The audit's "Exact values" list is drawn from the brief and transcript, not from recorded typed text, so it does not show which strings reached which field. Treat the typed values as unverified.

## 2. Current browser surface (single fresh snapshot, tab 0)

- Open tabs: 0 (current) = Designer, `WSWebClient/designer/default.aspx?MGForm=IdoPropertyClasses`; 1 = Infor OS portal Mongoose tab (not inspected, per instruction).
- Active surface: Mongoose **Designer** for the **IdoPropertyClasses** Form, design view, "Form" tab selected. Status bar: `ScopeType: User`.
- Toolbar: Save **disabled**, Regenerate Form **disabled**, Undo/Redo **disabled**. No unsaved-change indication.
- No wizard page, no modal dialog, no authentication or "Session Expired" prompt, no portal banner visible in tab 0.
- Designer properties panel shows Name `IdoPropertyClasses`, Caption `fPropertyClasses`, Is Master True.
- Remaining state of concern: the Designer for the system Form IdoPropertyClasses is still open in tab 0. It was opened in T1 (step 159), not by this step. It is not a dialog, but the coordinator may want it closed by the operator.

## 3. Screenshots

- `evidence/EXP-049/T2-00-recovery-current-browser-state.png` — **not saved**. Two `browser_take_screenshot` attempts on tab 0 timed out at "taking page screenshot / fonts loaded" (5000 ms). The accessibility snapshot above is the only current-state record.

## 4. Existing T1 evidence (25 PNG + audit), what was read in this step

Read in this step (visually inspected):

| File | Shows | Does NOT prove |
| --- | --- | --- |
| `T1-00-preflight-initial-state.png` | Web Client, Property Classes runtime, FX_Cost row (1 of 1); Base Class blank; Decimal, 18, 2, default 0, decimal, FX_sCost; Revision 1, 10/10/2026; Locked By = operator account; Check In and Undo Check Out enabled; Save greyed. | Database state; this is the earliest T1 capture, so it is the T1 preflight view only. |
| `T1-03-FX_ItemBase-after-F4-settled.png` | Property Classes runtime, FX_ItemBase (1 of 1); Base Class blank; String, 20, nvarchar, FX_sItem; Locked By operator; Check In and Undo Check Out enabled. | Persistence; Base Class blank as displayed; checkout origin. |
| `T1-05-FX_Cost-after-F4-settled.png` | Same as T1-00 for FX_Cost (1 of 1), checked out to operator. | Same as above. |
| `T1-09-idos-positive-control-FX_HelloWorld01-after-F4.png` | IDOs runtime: one row FX_HelloWorld01 (1 of 1); Project FX_HelloWorldProject01; Table FX_HelloWorld01, alias fxhw, Primary Base; Revision 2; Check Out enabled (not checked out). | Only proves the IDO FiP path returns a known row. |
| `T1-11-idos-target-FX_Items-after-F4-settled.png` | IDOs runtime: **grid empty** — no row, no blue-star placeholder; header has no visible criterion; status bar reads only "Filter in Place" (no count). Detail panel blank. | **Not a settled zero-row absence result.** The criterion FX_Items is not visible, and the status text does not show a count, so the query's result is ambiguous. |
| `T1-12-sqltables-form-opened-initial.png` | Sql Tables caution: "Please be very careful using these forms..." with OK. | Content of any other prompt. |
| `T1-13-sqltables-after-caution-OK-pre-criteria.png` | Sql Tables after OK: one blank add-mode row (blue star); Table Name editor not active; Schema and Table Name blank. | Whether this placeholder is saved. |
| `T1-16-sqltables-positive-control-FX_HelloWorld01-after-F4.png` | Sql Tables: one row FX_HelloWorld01, Schema dbo; constraints PK_FX_HelloWorld01 (Primary Key, FX_Code) and IX_FX_HelloWorld01_RowPointer; Table Name combo FX_HelloWorld01. | Only proves the SQL FiP path returns a known table. |
| `T1-19-sqltables-target-FX_Items-after-F4-settled.png` | Sql Tables: **blue-star insertion placeholder row** with Table Name editor active and blank; Schema blank; status "Table Name (SQL Tables 1 of 1)"; Save greyed. No visible FX_Items criterion. | **Not an absence result.** A blank placeholder is an insertion row, not a data row. The FX_Items criterion is not visible. |
| `T1-21-idoprojects-FX_HelloWorldProject01-after-F4.png` | IDO Projects: one row FX_HelloWorldProject01 (1 of 1), Description "Factory Hello World test project", Access As G6R. Description field shows selected text (focus, no change visible). | Only proves the project exists and is selectable; no edit observed. |
| `T1-23-designer-scope-confirmed-IdoPropertyClasses-design-view.png` | Designer, IdoPropertyClasses design view; footer ScopeType User. | Designer-scope is established only for the Designer surface. |
| `T1-24-final-webclient-state-after-T1.png` | Web Client, Property Classes runtime, **FX_UM** (1 of 1): Class Name FX_UM; Base Class FX_UMBase; Domain IDO FX_UMs; Domain Property FX_UM; Domain List Properties FX_Description; String, 10, nvarchar; Label FX_sUM; Locked By operator; Revision 1; Check In and Undo Check Out enabled; Save greyed. | The live state of the Web Client after T1 (tab 1 was not re-inspected). |

Not inspected in this step (cataloged only): T1-01, T1-02, T1-04, T1-06, T1-07, T1-08, T1-10, T1-14, T1-15, T1-17, T1-18, T1-20, T1-22 (Export/Import Strings opened, content not read).

## 5. Checkout and preservation state (observed, not independently verified)

- FX_ItemBase, FX_Cost, FX_UM (and, per EXP-048, FX_UMBase) all display **checked out to the operator account** in the T1 Property Classes captures (Check In and Undo Check Out enabled). The audit records no checkout or check-in click, and EXP-048 records these checkouts as pre-existing. So the captures are consistent with preservation. This is a qualified observation, not a confirmed before/after comparison.
- No FX_Items IDO or table was visible in any T1 capture. No FX_Items record was seen.
- No Check In or Undo Check Out was activated in T1 or in T2.

## 6. Acceptance checks, status after this step

- **AC-1 (preflight):** partial. Authenticated Mongoose DEM session, User scope in the Designer footer, and clean Save state are observed in T1 captures and in the current snapshot. Site Developer capability is not verified.
- **AC-2 (collision gate):** **NOT established.** IDO FX_Items query (T1-11) is ambiguous: empty grid, no visible criterion, no count. SQL dbo.FX_Items query (T1-19) shows only a blank insertion placeholder. Positive controls for both paths did return FX_HelloWorld01 (T1-09, T1-16). Creation remains prohibited.
- **AC-3 (dependencies):** partial. FX_HelloWorldProject01 available (T1-21). FX_ItemBase String/20/nvarchar/FX_sItem (T1-03). FX_Cost Decimal/18/2/default 0/decimal/FX_sCost (T1-05, T1-00). FX_UM String/10/nvarchar/FX_sUM with FX_UMs / FX_UM / FX_Description domain (T1-24). FX_sDescription resource lookup not verified in T1 captures.
- **AC-4 to AC-12:** not performed. No wizard was opened, no Finish, no FX_Items IDO or table was created, and no recovery was run. Evidence status unchanged.

## 7. Issues, risks, and unresolved items

1. **Possible unsaved add-mode placeholder row in the Sql Tables tab of the Web Client** (T1-13, T1-19 blue-star row). Save appeared greyed in both captures. Whether the row is still present after later T1 steps is unverified because tab 1 was not inspected. Do not discard or save without operator decision.
2. **Designer for IdoPropertyClasses open in tab 0** (opened in T1). Not a dialog; Save disabled.
3. **FX_UM and FX_ItemBase/FX_Cost checkouts** are the pre-existing checked-out state. They must not be checked in or out by any worker in this experiment.
4. **Screenshot tool timeouts** on tab 0 (two attempts, fonts-loaded timeout). Not a stale ref; no retry beyond the one shown above.
5. **No EXP-049 experiment record file** exists in `experiments/`. Its creation or path is a coordinator decision.
6. **T1 browser_type audit** cannot show the exact text typed into each field. Flagged calls appear limited to criteria and Select Form filters.
7. **Session expired / authentication:** none observed in current tab 0 or in the T1 captures examined.

## 8. Next permitted action (for coordinator decision)

Do not proceed to the wizard or any creation step from this checkpoint. Options the coordinator may choose:
- A new bounded absence re-check for IDO FX_Items and SQL dbo.FX_Items, one query each, with the criterion visibly confirmed before F4, a settled count or placeholder distinction, and a working positive control. The current Sql Tables placeholder must be resolved first, by operator decision.
- Operator decision on the open Designer tab and the possible Sql Tables placeholder row.
- Coordinator decision on whether to create the EXP-049 experiment record.

## Files written in this step

- `evidence/EXP-049/T2-recovery-inspection-checkpoint.md` (this file)
- No other repository file was written. No browser state was changed.
