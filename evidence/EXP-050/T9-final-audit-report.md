# EXP-050 T9 — Final evidence, operation-count, and repository-confinement audit

Run: `R-20261011-034347-PXmt` · experiment EXP-050 · cycle 8 · task T9
Worker session: `ee68bc3c-c585-4d42-8b66-0d0e1c2a2641` · task_message_id `1d7123fc-8158-4eec-9ce6-45b7e398f8bc`
Date: 2026-10-11 (system date).

**Scope of this task:** read-only audit. No Mongoose browser interaction, no screenshot, no Save, no Form or Designer change. Sources: the experiment record, the T1–T8 worker reports, the controller audits `harness-audit-T1.md` to `harness-audit-T8.md` (controller-generated; not worker prose), and the decisive evidence files (screenshots and accessibility observations already captured and reviewed in T1–T8).

**Proposed outcome:** OBSERVED — ACCEPTED WITH LIMITS (proposed for coordinator decision). Not replay_verified. No acceptance check failed. Several checks are limited (listed in the matrix). No blocker prevents the audit, but two repository-level checks could not be performed (see §5).

## 1. Operation reconciliation

Worker counts were compared with the controller audit rows. Audit row numbers are the controller's `Order` column.

| Controlled operation | Worker report | Controller audit | Reconciled count |
| --- | --- | --- | --- |
| Wizard Finish (Form creation) | T3: 1 | T3 #27 | **1** |
| Finish completion notice OK | T3: 1 | T3 #31 | 1 (informational notice, not a prompt answer) |
| Caption string creation prompt answered Yes | T4: 1 (FX_sItem); T5: 1 (FX_sCost) | T4 #10; T5 #15 | **2** (one per exact ID) |
| Caption prompt answered No | 0 | none | **0** |
| String dialog OK | T4: 1; T5: 1 | T4 #22; T5 #29 | **2** (each after a visible commit) |
| String Value cell commit (Tab) | T4: 1; T5: 1 | T4 #18; T5 #25 | 2 |
| Caption ellipsis clicks | T4: 1; T5: 1 | T4 #6; T5 #11 | 2 |
| Ordinary Designer Save | T6: 1 | T6 #7 | **1** (no retry, no second Save anywhere in T1–T8) |
| Form-tab close (FX_Items) | T7: 1 | T7 #6 | **1** |
| Form reopen (recent-forms entry) | T7: 1 | T7 #13 | **1** |
| Web Client runtime open | T8: 1 | T8 #11 (Select Form OK) | **1** |
| Select Form dialogs opened | T1 1; T2 1; T3 2; T8 1 | T1 #15; T2 #6; T3 #9, #68; T8 #5 | 5 (4 cancelled; 1 OK, the runtime open) |
| Global Objects (Edit > String) opened | T1 1; T4 1; T5 1; T7 1 | T1 #65; T4 #26; T5 #32; T7 #37 | 4, all closed by Cancel (**0 OK**) |
| Designer New (wizard route) | T2: 1 | T2 #25 | 1 |
| Form Wizard Selection OK | T2: 1 | T2 #38 | 1 |
| Wizard Next | T2: 3 | T2 #47, #51, #81 | 3 |
| Wizard Back, Cancel, Close | 0 | none | 0 |
| Name plain fill (Form Name `FX_Items`) | T2: 1 | T2 #40 | 1 |
| Data Source option selected | T2: 1 | T2 #44 | 1 |
| Page-3 arrow presses | T2: 4 | T2 #59, #63, #67, #75 | 4 |
| Save Template: timed-out click / effective label click | T2: 1 / 1 | T2 #84 / #85 | 1 / 1 |
| Browser-reference "not found" errors | T2: 2 | T2 #57 (e2776), #79 (e1766) | 2 |
| Browser timeouts | T2: 1; T5: 1 | T2 #84; T5 #22 | 2 (no input reached any element in T5 #22; see §3) |
| Harness-flagged `browser_type` calls | per task | T1 8; T2 3; T3 2; T4 2; T5 6; T6 0; T7 2; T8 0 | **23** (all were filter entries, the one plain Name fill, or String Value entries; see §4) |
| Worker-saved screenshots | T1 17; T2 13; T3 8; T4 7; T5 9; T6 4; T7 7; T8 4 | matches the take_screenshot rows | **69 PNG** in `evidence/EXP-050/` |

Confirmed by grep over the audits: `Save` appears once (T6 #7); `closable FX_Items` (close) once (T7 #6); no Delete, Check In, Check Out, Undo Check Out, Regenerate Form, Refresh, Get More Rows, Sql, Sign Out, or navigation action; `New` appears only as the T2 wizard route (#25); `F4` appears only in T1 (the IDO read query, #42). The OK and Yes rows listed above are the complete set.

Controller audit header totals (as reported; the controller does not define "actions" and "reads" in the header, so these were not reconciled further): T1 39/51; T2 31/47; T3 25/42; T4 14/22; T5 28/34; T6 5/21; T7 21/33; T8 3/15.

## 2. Acceptance matrix (AC-1 to AC-11)

Status key: PASS = decisive evidence present and matches the check; PASS (limited) = met, with the limit stated; PENDING = not evidenced in this run; FAIL = contrary evidence. No check was marked PENDING or FAIL. Evidence paths are repo-relative under `evidence/EXP-050/`.

| AC | Status | Decisive evidence (what it visibly establishes) | Limitations |
| --- | --- | --- | --- |
| **AC-1** Preflight; usable environment; User scope; clean Designer; IDO and four properties; no unexpected auth or unsaved dialog | **PASS (limited)** | `t1-01` identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, runtime tabs, no sign-in; `t1-09` and `t1-17` Designer `ScopeType: User`, Save and Undo greyed, no dialog; `t1-05` IDO FX_Items (project FX_HelloWorldProject01, alias fxitms, Revision 2, checked in, Locked By blank); `t1-06` FX_Item detail (FX_ItemBase, String 20, nvarchar, Required, FX_sItem); `t1-07` FX_Cost detail (Decimal 18/2, default 0, FX_sCost, sequence 3); `t1-08` FX_UM detail (String 10, nvarchar, FX_sUM, domain FX_UMs / FX_UM / FX_Description, sequence 4). FX_Description values from the IDO grid accessibility row (String 150, nvarchar, FX_sDescription, sequence 2); no screenshot | Site Developer capability and the About text not observed. FX_Description detail not in a screenshot. Designer console not checked. Preflight was read-only; IDO state was not re-read after T1 |
| **AC-2** Collision gate; positive control; no visible FX_Items name match; filters, settled results, cross-scope limits | **PASS (limited)** | Positive control: `t1-02` (Select Form, Name, Case Sensitive and Starts With unchecked, key events, 2 s settle: one row `FX_UMs`/`FX_UMs`); target `t1-03` (exact `FX_Items`, same settings: zero rows). Repeated before the T2 wizard: `t2-01`, `t2-02`. Repeated before Finish in T3: snapshot only (no PNG; T3 report). Post-creation inventory `t3-08` (one row `FX_Items`/`FX_Items`) | No scope column; no total count; case-insensitive and substring/exact match mode not stated; scope-complete absence not established (Select Form lists what the Name filter returns); single session. The pre-Finish recheck in T3 has no screenshot |
| **AC-3** Pre-Finish wizard: Form Name, Data Source, Classic Multi-View, ordered fields, Save Template unchecked | **PASS** | `t2-03` Form Wizard Selection (New Form; Category Classic; Wizard MultiView) before OK; `t2-04` page 1 Name `FX_Items`, Data Source `FX_Items`, Form Type MultiView, Layout GridLeft, Device Default; `t2-05` page 2 four business fields included; `t2-11` page 3 final order FX_Item, FX_Description, FX_Cost, FX_UM (all Include checked); `t2-13` final page sentence "…multiview form named FX_Items with the data source FX_Items.", Save Template unchecked, Finish enabled, not pressed; `t3-01` same state re-checked before Finish | Field order was captured in T2 (`t2-11`), not re-checked in T3 (the wizard was not navigated back; T3 audit shows only Web Client and Designer-tab operations). Wizard grid order, not stored Designer order |
| **AC-4** One Finish; one User-scoped FX_Items; native completion result; identity; clean post-creation; no second Form or template | **PASS** | Finish once (T3 #27). `t3-03` native alertdialog `Process Completed Successfully` (one OK, T3 #31). `t3-04` Designer after completion: Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, Device Default, Normal, Is Master True, Save disabled, URL `?MGForm=FX_Items`. `t3-08` one inventory row. No second Finish; Save Template unchecked; no template created | "Initially loaded" identity only for T3; the reopened identity is in AC-9. Scope from the Designer status bar and Version, not from the Select Form inventory |
| **AC-5** Two caption resources FX_sItem = Item and FX_sCost = Cost; exact prompts; commit before OK; Edit > String read-only | **PASS (limited)** | FX_sItem: prompt `t4-02` ("String FX_sItem does not exist. Create it?"), default `FX_s Item` `t4-03`, committed grid cell `Item` `t4-04` (Tab), OK once, Edit > String `t4-06` (FX_sItem = Item). FX_sCost: prompt `t5-03` ("String FX_sCost does not exist. Create it?"), default `FX_s Cost` `t5-04`, committed `Cost` `t5-05` (Tab), OK once, Edit > String `t5-07` (FX_sCost = Cost). Reconfirmed `t5-08` (FX_sItem = Item). After reopen: FX_sItem = Item and FX_sCost = Cost in Edit > String (accessibility; `t7-06` for FX_sCost) | Global Objects client view, not a database read. No "No" answers. The T5 type attempt that timed out (audit #22) targeted a read-only textarea and sent no input; the corrected type went to the active editor. Canvas labels showed raw IDs until reopen (see AC-9) |
| **AC-6** FX_sDescription = Description and FX_sUM = Unit of Measure unchanged; native read-only evidence; action audit confirms no edit | **PASS (limited)** | Native read-only values before any Save: `t1-14` (FX_sDescription = Description), `t1-15` (FX_sUM = Unit of Measure); T5 Global Objects accessibility rows (`Description`, `Unit of Measure`). Action audit: the only String dialogs opened were for FX_sItem (T4) and FX_sCost (T5), each answered by one Yes; both existing rows were selected read-only and closed by Cancel (T1 #91, #99; T5 #57, #64) | No post-Save or post-reopen read of these two strings (their last read was before the Save). Edit-free status is supported by the action audit, not an independent read-back |
| **AC-7** Components: FX_Item, FX_Description, FX_Cost, FX_UM in order; label components reference the FX_ captions; selected component, binding, Caption, and order evidenced | **PASS (limited)** | Components tree (accessibility, after Expand): GridColumns FX_ItemGridCol, FX_DescriptionGridCol, FX_CostGridCol, FX_UMGridCol at tabs 1 to 4 with bindings object.FX_Item, object.FX_Description, object.FX_Cost, object.FX_UM (`t3-05`, `t3-06`, `t7-04`). Labels FX_ItemStatic (tab 5, Caption `FX_sItem`), FX_DescriptionStatic (tab 7, `FX_sDescription`), FX_CostStatic (tab 9, `FX_sCost`), FX_UMStatic (tab 11, `FX_sUM`) (`t3-07`, `t7-05`, plus accessibility reads). Edit rows FX_ItemEdit / FX_DescriptionEdit / FX_CostEdit at tabs 6, 8, 10; FX_UMCombobox ComboBox at tab 12 bound to object.FX_UM. Canvas order top to bottom Item, Description, Cost, Unit of Measure (`t7-03`) | Position is tree tab number and canvas order, not pixel layout. Only FX_UMStatic has its Properties panel in a screenshot (`t3-07`, `t7-05`); the other three Captions are from accessibility text. In `t7-04` the FX_UMCombobox row is cut off (its type comes from the accessibility row) |
| **AC-8** One ordinary Designer Save; native result; clean Designer; no unexpected prompt | **PASS (limited)** | Pre-Save gate `t6-01` (FX_Items selected, User scope, Save enabled, no dialog). One click on Save (T6 #7). Immediate result `t6-02`: notification `Save — Global object(s) were saved.`, Save and Undo disabled, no alert. Settled `t6-03` (notification gone; Save and Undo disabled). Post read-only `t6-04` (still disabled) | The notification says **global objects** were saved, not the Form. A cleared Save state is consistent with the Form being saved, but the notification does not name it. Form-level persistence is not proven by this check |
| **AC-9** Close via Form-tab native control; absent from tabs; one supported reopen; same Name, User scope, four positions, bindings, caption references | **PASS (limited; same-session UI recovery only)** | Pre-close `t7-01` (FX_Items selected; Save and Undo disabled). Close once (T7 #6); `t7-02` `closable FX_Items` absent from the tablist. Reopen once from Form menu recent forms (T7 #13); `t7-03` Name `FX_Items`, Version `User version for user anton.ramos@3mworks.com.ph`, ScopeType User, ScopeName anton.ramos@3mworks.com.ph, Save and Undo disabled. Positions, bindings, captions re-read (`t7-04`, `t7-05`; accessibility). Canvas after reopen (`t7-03`) shows resolved text Item, Description, Cost, Unit of Measure | Same-session UI recovery only. Not cross-session, not database-level, not replay. **Display discrepancy:** before the close the canvas showed raw IDs `FX_sItem*` and `FX_sCost:` (`t6-03`); after the reopen it shows resolved text. The cause is not established. The caption references and bindings are unchanged |
| **AC-10** One read-only runtime opening; order; captions Item, Description, Cost, Unit of Measure; FX_UM control captured vs ComboBox expectation; no test record entered or saved | **PASS (limited)** | One Select Form OK (T8 #11) after one settled single match (`t8-01`). Runtime `t8-02`: tab `FX_Items` selected; top-to-bottom Item (required, empty textbox), Description (empty textbox), Cost (`0.00` textbox), Unit of Measure (empty combobox with dropdown arrow); grid columns `* Item`, `Description`, `Cost`, `Unit of Measure`; status `Item (Object 1 of 1)`. FX_UM accessibility: `combobox "Unit of Measure:"` with `Open` button (`f1e1257`); element crop `t8-03`. Final state `t8-04` (no data entered). No field typed, no dropdown opened (T8 audit: no click on fields or triggers, no browser_type) | Dropdown list contents not inspected (trigger deliberately not opened). Whether the list is populated from FX_UMs, and whether entries are validated, is unverified. Existing record's stored values beyond display not read. Same-session runtime observation |
| **AC-11** Final reconciliation of counts; caption resources; one Save, close, reopen, runtime; confinement; no unintended changes; limits of preservation proof | **PASS (limited)** | Reconciliation (§1): Finish 1; caption resources 2 with exact expected values; Save 1; close 1; reopen 1; runtime open 1. Repository confinement (§5): every worker Write or Edit targets the EXP-050 record or `evidence/EXP-050/`; no other Write or Edit appears in the audits. Preservation (§4) | Preservation of IDO, SQL, vendor Form, existing strings and data rests on the action audit and on native reads taken before any change. There is no post-change read of the IDO, the SQL objects, or FX_sDescription and FX_sUM. `git status` could not be run (see §5) |

Summary: no check FAILED. Checks marked "limited" are met for the scope the brief set, with the stated limits. None is PENDING: each AC has decisive evidence in this run, and the gaps are documented rather than assumed.

## 3. Unresolved observations (not explained; not assumed)

1. **Canvas captions before and after the reopen.** Before the close (after the Save) the canvas showed raw IDs for FX_sItem and FX_sCost. After the reopen it shows resolved text for all four (`t7-03`). Possible causes (a reopen re-read of stored definitions, a re-render, or an effect of the Save) are not established. This is a same-session observation.
2. **Undo accessibility vs visual reading (T4, T5).** The accessibility tree reported Undo disabled while the screenshot showed the icon active. Both readings were disabled after the Save (T6). Not explained. Undo was never used.
3. **Save notification scope.** It names global objects, not the Form. Whether the Form itself was saved is not separately evidenced; the reopen (same session) is the nearest evidence.
4. **Stale targeting in T5.** A targeted type used a ref that resolved to a read-only textarea. The audit shows it timed out with no input. The cause is a ref that drifted between the grid cell and the editor.
5. **Designer switch to the vendor view after the close (T7).** The Designer displayed the vendor IdoPropertyClasses view once the FX_Items tab closed. This is the Designer's own tab behaviour. The vendor Form was not edited, saved, or selected for edit.
6. **Two recovery snapshots (T2).** Two separate browser-reference failures each got one fresh untargeted snapshot. The brief's wording ("at most one…after a browser-reference failure") reads per failure; a strict reading would count them against one allowance. This is for the coordinator to decide.
7. **Dropdown list contents and domain behaviour (T8).** Not inspected by design.

## 4. Preservation audit (what is supported, and by what)

| Object | Intended state | Evidence of no intentional change | Strength |
| --- | --- | --- | --- |
| FX_Items IDO | unchanged (checked in, Revision 2) | T1 native reads (`t1-04`, `t1-05`) before any change. No IDO-tab action in T2–T8 (audits). The IDO Properties and IDOs runtime tabs were not clicked after T1. T8 opened only the Form | Action audit plus a pre-change read. **No post-change IDO read** |
| dbo.FX_Items SQL table | unchanged | No Sql Tables or Sql Columns tab action in any audit. The Sql Columns FX_UM editor was already active before T1 (`t1-01`) and was left as found | Action audit only |
| Property classes (FX_ItemBase, FX_Cost, FX_UM, FX_UMBase) | unchanged | No Property Classes tab action in any audit | Action audit only |
| FX_UMs IDO, table, domain | unchanged | Only a Select Form positive-control search (`t1-02`, `t2-01`, `t3`); FX_UMs was never opened | Action audit plus native search result |
| Vendor IdoPropertyClasses Form | unchanged; not saved | Designer tab 0 viewed (`t1-09`, `t1-17`, `t7-02`); no Save while it was selected (the only Save, T6 #7, was after the FX_Items pre-Save gate confirmed FX_Items selected); no edit actions on it | Action audit plus native views |
| FX_sDescription, FX_sUM strings | unchanged | Pre-Save native reads (`t1-14`, `t1-15`; T5 accessibility). No String dialog opened for them; read-only row selections closed by Cancel | Native pre-Save reads plus action audit; **no post-Save read** |
| FX_sItem, FX_sCost strings | created exactly as intended | See AC-5 (prompts, commits, OK, read-only confirmations) | Native UI at each step |
| Existing FX_Items data row | not changed | Displayed only in runtime (`t8-02`, `t8-04`: `Item (Object 1 of 1)`); no typing, selection, Save, or delete in T8 (audit) | Action audit and displayed state |
| Source-control state | not changed | No check-in or check-out in any audit; the IDO remained checked in (`t1-05`) | Action audit; no post-read |
| Vendor default Form definitions, user preferences, authentication | not changed | No action on those surfaces in the audits | Action audit only |

Independent preservation proof was **not** obtained for the IDO, the SQL objects, the vendor Form, FX_sDescription, FX_sUM, or existing data after the changes. These are documented limits, not assumed passes.

## 5. Repository confinement

**Limitation:** `git status` and `git log` could not be run. Bash is disabled, and the `.git` directory returned "denied by your permission settings" when read. The harness computes confinement from the before/after Git state and the evidence diff, so the final confinement verdict belongs there. The statements below come from the worker's own tool-call logs (controller audits) and the file inventory.

**Files written by the worker in this run (from the audit Write/Edit rows and the globs):**

| Path | Created or updated | By |
| --- | --- | --- |
| `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md` | created T1; updated T2–T8 and T9 | worker (Write/Edit) |
| `evidence/EXP-050/T1-preflight-and-gates-report.md` … `T8-runtime-inspection-report.md` (8 files) | created | worker (Write), with Edit corrections |
| `evidence/EXP-050/T9-final-audit-report.md` | created (this file) | worker |
| `evidence/EXP-050/t1-01` … `t8-04` (69 PNG files: 17, 13, 8, 7, 9, 4, 7, 4) | created | browser screenshot tool at the worker's request |

**Not worker-written, but in the evidence directory:**
- `evidence/EXP-050/harness-audit-T1.md` … `harness-audit-T8.md` (8 files): controller-generated audits.
- `evidence/playwright/*.yml` and `*.log` with timestamps from 2026-10-10 19:44 to 20:14 (snapshot and console output written by the browser tool during this run). The Glob listings show roughly 150 such files; the count was not reconciled exactly. Earlier `evidence/playwright` files (dated 2026-09-29 to 2026-10-10 before 19:44) belong to other runs.

**Factory documentation and evidence changes:** the experiment record and `evidence/EXP-050/` only. No recipe, AGENTS.md, memory, or other experiment record was written (audits show no Write or Edit outside the EXP-050 paths). The alternate final-deliverable name `experiments/EXP-050-hello-world-part-2-fx-items-multiview-form.md` was **not created**; the single record is `experiments/EXP-050-hello-world-part-2-create-fx-items-multi-view-form.md`, which is the name the task header specified. The later tasks recorded this choice; this audit confirms it.

**Mongoose artifact changes (intended):** the FX_Items User-scoped Classic Multi-View Form (one Finish, one Save), and the two string resources FX_sItem and FX_sCost (tenant-wide Global Objects). Nothing else was intentionally changed.

**Pre-existing unrelated repository changes:** the session-start status snapshot (in the task context) listed modified files under `tools/learning-harness/` and `harness.config.example.json`. Those were not touched in this run and were not reset, cleaned, or modified. That snapshot was not re-verified (see the limitation above).

**Prohibited-operation check:** none found in the audits. No check-in or check-out, no metadata unload, no FormSync, no direct SQL, no deployment, no evaluate or run-code tool by the worker, no login, no session replacement, no browser restart, no non-FX_ artifact change, no second Save, no second Finish, no OK on Global Objects. The `browser_type` flags (23 across T1–T8; §1) are the permitted key-event filter entries, the one plain Name fill, and the String Value entries. The brief's "Enforced tools" note denies evaluate and run-code tools, not `browser_type`. The rendered `Ran Playwright code` wrappers shown by the tool are tool-generated representations of those UI actions, not worker-written scripts. Flag for coordinator: the harness counts these as prohibited-tool hits, and the EXP-049 record shows the same flag. The classification should be decided by the coordinator.

## 6. Final browser state (as left)

- **Designer (tab 0):** `designer/default.aspx?MGForm=FX_Items`, FX_Items Form tab selected. This is the state left by the T7 reopen; the Designer was not clicked in T8 and was not touched in T9. Save and Undo disabled; scope User / anton.ramos@3mworks.com.ph. The vendor `Property Classes` tab is present and not selected.
- **Web Client (tab 1):** the runtime tab `FX_Items` is open and selected, with the leftover runtime tabs `Export/Import Strings`, `IDOs`, `IDO Properties` (link icon), `Sql Tables`, and `Sql Columns` (link icon). Record shows `Item (Object 1 of 1)`; no field typed or changed; Save disabled. Left open as instructed.
- No browser-native dialog and no in-page dialog open at the time of this audit (checked by find in T8; no browser actions in T9).

## 7. Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Classic Multi-View route, Name and Data Source entry, default four fields, reorder to FX_Item, FX_Description, FX_Cost, FX_UM, Save Template unchecked, Finish → `Process Completed Successfully`, one FX_Items User-scoped Form | observed (single run, same session) |
| Caption ellipsis creates FX_sItem and FX_sCost after the exact prompt; commit by Tab before OK; Edit > String shows exact IDs and values | observed (single run each) |
| One ordinary Designer Save returns `Global object(s) were saved`; Designer clean | observed (single run; notification names global objects) |
| Same-session close via the Form tab and reopen via recent forms restores identity, four positions, bindings, caption references | observed (same-session UI recovery; not persistence) |
| Canvas labels: raw IDs before the reopen, resolved text after | observed; **cause unresolved** |
| Runtime: rendered order Item, Description, Cost, Unit of Measure; captions as listed | observed (single runtime open) |
| FX_UM runtime control: ComboBox role with an Open dropdown trigger (matches the tutorial's ComboBox expectation at control-type level) | observed (direct runtime accessibility and visual evidence) |
| FX_UM dropdown list contents and domain validation in runtime | **unresolved** (not inspected) |
| FX_UM design-time Type ComboBox | observed (Designer component tree) |
| Undo accessibility vs visual disagreement (T4–T5) | **unresolved** |
| Cross-session persistence, database-level durability, metadata-cache eviction | **not tested; not claimed** |
| Replay verification | **not claimed; not promoted** |

## 8. Open questions and blockers for the coordinator

1. **Outcome decision.** The proposed outcome is OBSERVED — ACCEPTED WITH LIMITS (not blocked). Please confirm, or decide which limits to waive (as was done for EXP-049).
2. **Harness `browser_type` flags.** 23 hits across the run were classified by the controller as prohibited-tool hits. Please classify them (the brief's enforced-tool note denies evaluate and run-code, not key-event typing or a plain fill).
3. **Recovery-snapshot reading.** Two browser-reference failures each received one fresh untargeted snapshot (T2). Please confirm whether the allowance is per failure.
4. **Repository confinement verdict.** `git status` and the `.git` directory were not accessible to the worker. The harness's before/after diff is needed for the final confinement verdict.
5. **Post-change preservation reads (optional follow-up).** If the coordinator wants independent preservation proof, a read-only check of the FX_Items IDO, the vendor Form state, and FX_sDescription and FX_sUM would be needed. This was not performed (the brief's stop after T9 forbids it here).
6. **Canvas and Undo discrepancies.** The raw-ID-to-resolved change on reopen and the Undo accessibility disagreement remain unexplained. They are recorded, not resolved.
7. **Dropdown contents (optional follow-up).** A read-only inspection of the FX_UM dropdown list (not done by design) would be the way to test domain-bound values.

No actual blocker stops the audit. The repository-level verdict (§5) and the `browser_type` classification (§5, §8.2) need the harness or coordinator, not further Mongoose work.
