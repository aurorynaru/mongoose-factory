# EXP-039 — T1 evidence index (read-only preflight, 2026-10-10)

Task: EXP-039 T1 (read-only preflight). Record: `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`.
Target: FX_HelloWorldProject01 (IDO project). Editing scope: User (not re-verified; see record).

**No project was created, saved, deleted, checked in, or checked out.** New and Save were never pressed.

## Screenshots

Each entry lists what the image shows and what it does not prove. All are viewport captures of the Mongoose Web Client tab (selected tab "Mongoose").

| File | Shows | Does NOT prove |
|---|---|---|
| `00-t1-start-ido-projects-inherited-criteria.png` | IDO Projects tab selected; inherited unsaved criteria "FX" in row 1 and in the Project Name detail field; Save, New, Delete greyed; New IDO… and IDOs light. Sql Tables tab minimized at left with a filter icon. | Whether "FX" returns rows (it did not, per EXP-038); the Sql Tables tab's contents. |
| `01-t1-criteria-cleared-in-detail-field.png` | Project Name detail field emptied; row 1 criteria cell still shows "FX" (not yet synced). | That the grid criteria was cleared (fixed in capture 02). |
| `02-t1-after-tab-criteria-sync-check.png` | After Tab: criteria row 1 blank; focus in Description; Save grey. No text typed. | Any query result. |
| `03-t1-blank-criteria-f4-inventory.png` | After F4 with blank criteria: 18 project rows (AppBuilder … WidgetManager); first row AppBuilder shown in the detail pane (auto-selected). Save grey; New asterisk icon not greyed. | That the list is exhaustive from the screenshot alone; the "Get More Rows" state (see the inline snapshot note in the record). |
| `04-t1-filter-in-place-mode-entered.png` | Filter-in-Place mode re-entered via toolbar FiP icon (tooltip "Filter in Place"); blank criteria row; blank Project Name, Description, Access As. | Query execution. |
| `05-t1-positive-control-criteria-sdtest-entered.png` | Criteria "SDTest" in criteria row 1 and detail field, before F4. Grid still criteria-only (no result rows). | That the query executed. |
| `06-t1-positive-control-sdtest-f4-result.png` | **Positive control.** After F4: one result row, Project Name "SDTest", Description "SDTest IDO"; detail pane SDTest / SDTest IDO / Access As G6R (read-only). | That the query would have returned zero rows for a non-existent name (see 09). |
| `07-t1-filter-in-place-mode-reentered-before-target.png` | FiP re-entered; criteria still "SDTest" carried over (Project Name selected). | — |
| `08-t1-target-criteria-entered-before-f4.png` | Criteria "FX_HelloWorldProject01" in detail field and criteria row 1 (truncated "FX_HelloWorld…"), before F4. | That the query executed. |
| `09-t1-target-f4-result-zero-rows.png` | **Target search.** After F4 with criteria FX_HelloWorldProject01: zero result rows. Grid shows one blank add-record row (blue star, row "1"), Project Name marked required (red asterisk), Access As pre-filled and greyed "G6R". Save greyed. | That no record exists beyond the exact-match search (see the 18-row inventory in capture 03 and the record); that the blank row is harmless (it is an unsaved placeholder, not a saved record). |

## Accessibility snapshots

- `t1-final-state-snapshot.yml` (saved in this folder): IDO Projects panel after capture 09. Shows: row with blank Project Name and Access As "G6R"; Project Name textbox empty and required; Description textbox focused; Access As "G6R"; Save `[disabled]`; New, Delete, Refresh, FiP enabled; Get More Rows, System Notes, Documents, Send email `[disabled]`; New IDO… `[disabled]`; IDOs `[disabled]`; no dialog nodes.
- Other snapshots taken during this run were returned inline and are not saved in this folder. Tool-generated copies exist under `evidence/playwright/page-2026-10-10T03-*.yml` (for example `page-2026-10-10T03-13-17-979Z.yml`, `page-2026-10-10T03-13-40-047Z.yml`). They are not EXP-039 captures and were not inspected for this index.

## Inventory and query log (text, not a screenshot)

The inventory was read from the accessibility snapshot taken immediately after the blank-criteria F4 (capture 03). The snapshot was returned inline and is not saved as a file; the list below is transcribed from it. Get More Rows was `[disabled]` in that snapshot, which indicates the blank query returned all rows. The count (18) is therefore the full visible inventory, not a page.

| # | Project Name | Description | Access As |
|---|---|---|---|
| 1 | AppBuilder | Auto-created from InsertCollectionsSp | Core |
| 2 | HelloWorld | (blank) | G6R |
| 3 | HelloWorld_Kael | HelloWorld_Kael | G6R |
| 4 | HelloWorld_Test | HelloWorld | G6R |
| 5 | Hi world | (blank) | G6R |
| 6 | IONAPIEndPoint | Auto-created from InsertCollectionsSp | Core |
| 7 | LearnMongoose | (blank) | G6R |
| 8 | Market ePortal | Market ePortal | G6R |
| 9 | MGCore | Auto-created from InsertCollectionsSp | Core |
| 10 | Mockup | (blank) | G6R |
| 11 | MyPortal | Creating a sample portal | G6R |
| 12 | PluginManager | Auto-created from InsertCollectionsSp | PluginManager |
| 13 | ReceivingPortal | SM ASN and Store Receiving Portal | G6R |
| 14 | SamplePortal | (blank) | G6R |
| 15 | SDTest | SDTest IDO | G6R |
| 16 | SMRVendorPortal | SMR Vendor Order Portal POC | G6R |
| 17 | UsrW4Integration | W4 masterdata testing | G6R |
| 18 | WidgetManager | Auto-created from InsertCollectionsSp | Core |

No row begins with "FX", and no row matches FX_HelloWorldProject01 in any letter case.

## Name-collision status

| Name | Method (verified mechanism) | Result |
|---|---|---|
| FX_HelloWorldProject01 | Full 18-row inventory (blank FiP + F4), plus exact FiP criteria query with positive control passed | **Zero matches observed.** Case-insensitive collisions: none in the inventory. |
| FXHelloWorld01 (fallback, not to be used) | Not searched. Not authorized. | Not checked. |

## Notes on this run

- Positive control: criteria "SDTest" + F4 returned exactly one matching row (capture 06). Filter-in-Place query mechanism is therefore observed to execute.
- Zero-row results from the FiP query led Mongoose to show a blank add-record placeholder (capture 09). This was not caused by a New press. Save is greyed (no edits in the record). It has not been saved and should be treated as an unsaved placeholder that a later step must clear before any mutation.
- Sql Tables tab was not selected, inspected, or closed in T1 (no action needed for the T1 gates). It still shows a filter icon.

---

## T2 baseline restoration (2026-10-10, read/query only; no New, no Save)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id 90fc3a04-cb02-442e-a639-1454b091a53d · cycle 1 · task T2.
Scope of this step: restore a clean saved-record baseline from the inherited placeholder using the supported Filter in Place (FiP) control and F4. **No project was created, saved, edited, or deleted.**

| File | Shows | Does NOT prove |
|---|---|---|
| `10-t2-baseline-start-placeholder-before-fip.png` | Starting state: IDO Projects tab selected; row 1 blank with blue star (unsaved add-record placeholder); Project Name required and empty; Description focused; Access As `G6R` greyed; Save greyed; New and Delete enabled; New IDO… disabled. | That the placeholder is harmless beyond Save being disabled; any query state. |
| `11-t2-fip-query-mode-entered.png` | After one toolbar FiP click: placeholder star gone; criteria row shows `FX_HelloWorld…` (carried over from T1) with the Project Name text selected; IDO Projects tab header shows the filter icon (query mode on). | That the carried criteria matched anything (no F4 yet). |
| `12-t2-sdtest-criteria-entered-before-f4.png` | Criteria replaced with `SDTest` (one fill, one Tab); criteria row shows `SDTest`; no result text yet beyond the criteria row. | That the query executed. |
| `13-t2-sdtest-f4-saved-record-baseline.png` | **Baseline after F4.** One result row: `SDTest` / `SDTest IDO` / `G6R`. Detail: Project Name `SDTest` (greyed, read-only), Description `SDTest IDO` (focused, text selected, not edited), Access As `G6R` (greyed). IDO Projects tab header shows no filter icon (query mode exited after F4). Save greyed; New enabled; IDOs enabled. | That the saved row is persisted in the database beyond the visible query (no close/reopen was performed in T2). |
| `t2-baseline-sdtest-snapshot.yml` | Accessibility snapshot after `13`: Save `[disabled]`; New, Delete, Refresh, Filter in Place enabled; Get More Rows, System Notes, Documents, Send email `[disabled]`; grid row `SDTest` / `SDTest IDO` / `G6R`; textboxes Project Name `SDTest`, Description `SDTest IDO`, Access As `G6R`; no dialog nodes. | Behavior after New is pressed (not authorized in T2). |

### T2 action counts

| Operation | Count |
|---|---|
| New (toolbar) | **0** |
| Save | **0** |
| Project create / edit / delete | **0** |
| Close / reopen of IDO Projects | **0** |
| FiP toolbar clicks (enter query mode) | **1** |
| Criteria entries (fill + Tab) | **1** (`FX_HelloWorldProject01` → `SDTest`) |
| F4 executions | **1** (`SDTest`) |
| Fresh recovery snapshots | 0 (refs stayed current; the T2 opening snapshot was the fresh inspection) |
| Corrected visible inspections | 0 |

### T2 observations

- Starting placeholder was the T1 blank add-record row (star, required Project Name, Access As G6R, Save greyed). FiP toggled it out of the active state; no discard or save prompt appeared.
- After F4 the grid shows exactly one row (SDTest). The placeholder is no longer present (no star, no blank row).
- No validation error, pending-change indication, or browser dialog was observed in `13` or the snapshot.
- Unexpected: none beyond the criteria carrying over from T1 (`FX_HelloWorldProject01`) when FiP was re-entered. It was replaced before F4, so this did not affect the query.
- Sql Tables tab was not selected, inspected, or closed (out of scope).

### T2 editing-scope note

The visible editing-scope indicator in the Web Client header shows the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. That observation does **not** establish that IDO project creation is User-scoped. IDO projects are tenant-wide objects per AGENTS.md, so configuration-wide impact remains possible. T2 did not inspect or change scope.

### T2 readiness for the separately authorized single New action

Surface is ready for one New action **if** the coordinator authorizes it: IDO Projects is the active tab; the saved `SDTest` row is selected (read-only); Save is disabled; New is enabled; no dialog, validation, or pending-change indicator is visible. T2 did **not** press New. Reminder: SDTest must not be edited, and FX_HelloWorldProject01 must not be created from this surface without that authorization.

---

## T3 unsaved new record preparation (2026-10-10, New=1, Save=0)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id 5e745aab-36e6-4d19-93fc-877ae400a7e3 · cycle 2 · task T3.
Scope: one ordinary toolbar **New** click, entry of Project Name and Description, and inspection. **No Save, no close, no reopen, no query, no Refresh, no Delete, no edit of SDTest, no Sql Tables interaction.** The unsaved record was left in place.

| File | Shows | Does NOT prove |
|---|---|---|
| `14-t3-baseline-sdtest-before-new.png` | Pre-New baseline: saved `SDTest` / `SDTest IDO` / `G6R` row selected; Project Name `SDTest` greyed; Description `SDTest IDO` focused with text selected (no edit); Access As `G6R` greyed; Save greyed; toolbar New enabled; New IDO… and IDOs **enabled** (a saved row is selected; neither was pressed). No dialog. | That the database holds SDTest beyond the visible grid. |
| `15-t3-after-single-new-blank-record.png` | After the single toolbar New click: row 2 has the new-record star with blank Project Name (required asterisk in column header and field), Access As `G6R` greyed; Project Name textbox focused; row 1 `SDTest` retained. Save is now **enabled** (unsaved new record). Tooltip "New" visible. | That the new record is saved or has a server-side identity; that Access As `G6R` will persist after Save. |
| `16-t3-exact-name-and-description-entered-unsaved.png` | Row 2 star: `FX_HelloWorld…` and `Factory Hel…` in grid; detail Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R` (greyed, default). Save enabled (dirty). No validation message, error, or dialog. The Tab used to commit Description moved keyboard focus to the outlined portal shell icon at the top right; it was not activated. | That the Save would succeed; that the typed values are validated by the server; the full untruncated name in the grid (confirmed only from the detail field and snapshot). |
| `t3-unsaved-new-record-snapshot.yml` | Accessibility state of `16`: Save enabled (no `[disabled]`); New enabled; Delete enabled; Refresh and Filter in Place enabled; Get More Rows, New IDO…, IDOs `[disabled]`; grid row 2 cells `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; textboxes Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; no dialog nodes; console 0 errors, 2 warnings. | Save behavior (not executed). |

### T3 action counts

| Operation | Count |
|---|---|
| **New (toolbar, ordinary)** | **1** (consumed; must not be repeated) |
| Save | **0** |
| New IDO… / IDOs / wizard | **0** |
| Close / reopen / query (F4) / Refresh / Delete | **0** |
| Field entries | 2 (Project Name, Description; each filled once and committed with Tab) |
| Access As | not edited (default `G6R`) |
| Recovery snapshots (fresh) | 0 beyond the opening snapshot; the post-entry snapshot was a routine read, not recovery |

### T3 observations

- Baseline confirmed before New: saved SDTest row; Save disabled; New enabled; no pending-change or error indicator.
- New produced a genuinely new blank record (row 2, star, not an existing project). No validation error appeared on New.
- Project Name `FX_HelloWorldProject01` was accepted unchanged: no naming, prefix, or underscore rejection was shown at entry. Naming enforcement, if any, would occur at Save; not tested here.
- Description entered exactly; no transformation visible.
- Access As stayed `G6R`, read-only (greyed) on the new record. It was not edited.
- Save became enabled after New (dirty state), as expected. It was not pressed.
- Unexpected side effect: the commit Tab after Description moved focus to the portal shell icon (outlined top right). No value changed and nothing was activated.
- New IDO… and IDOs are disabled on the new record, so they were not an option even if clicked.

### Editing-scope distinction (retained)

The header shows the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **This does not establish that IDO project creation is User-scoped.** AGENTS.md treats IDO projects as tenant-wide objects, so the New and Save outcome may have configuration-wide impact. T3 did not inspect or change scope.

### T3 readiness

The unsaved record is ready for the **separately authorized single Save**. Save has not been pressed. If Save is later authorized and fails, do not retry; the New allowance is already consumed. The unsaved record must not be discarded without a decision (Save, or an operator-approved discard).

---

## T4 single ordinary Save attempt (2026-10-10, New=1, Save attempts=1, close=0, reopen=0)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id f2b01dc4-0194-4a5d-881e-ea542c4cd35b · cycle 3 · task T4.
Pre-Save verification passed (snapshot, `17`): row 2 star, Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`, Save enabled, no error. Then **one** toolbar Save click (ref `f1e28`). No keyboard shortcut, no repeat, no New, no close, no reopen, no query, no Refresh, no Delete.

| File | Shows | Does NOT prove |
|---|---|---|
| `17-t4-pre-save-unsaved-record-verified.png` | Pre-Save: row 1 `SDTest` (unchanged); row 2 star with `FX_HelloWorld…` / `Factory Hel…`; detail Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R` (greyed); Save enabled. No error or dialog. | That Save would succeed. |
| `18-t4-post-save-settled-ui.png` | Post-Save (settled): Save greyed (tooltip "Save" from the pointer); row 2 **no star**, now a plain row `FX_HelloWorld…` / `Factory Hel…`; detail Project Name `FX_HelloWorldProject01` (greyed = saved-record read-only), Description `Factory Hello World test project` (not focused), Access As `G6R` (greyed); New IDO… and IDOs enabled (saved row selected); no message banner, error, or dialog visible. | Database durability; that the record is retrievable after close/reopen; the server response itself (no response text was visible). |
| `t4-post-save-snapshot.yml` | Accessibility state after Save: `Save [disabled] [active]`; New, Delete, Refresh, Filter in Place enabled; grid row 2 cells `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; textboxes Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; tooltip "Save"; no dialog nodes; console 0 errors, 2 warnings (unchanged from before). | Persistence beyond the open client session. |

### T4 observations

- Save produced **no visible validation, permission error, or success message**. The only visible change: Save disabled, the new-record star cleared, and the values rendered as saved-record fields.
- Same target remained selected (row 2). Project Name, Description, and Access As match the pre-Save values on screen.
- No unsaved change indicator or error state visible after the click. Console: 0 errors, 2 warnings (same as before the click).
- Unexpected side effects: none to data. The New IDO… and IDOs buttons became enabled because a saved row is now selected (not clicked). Keyboard focus is no longer on the portal shell icon seen before Save.

### T4 cumulative operation counts

| Operation | Cumulative count |
|---|---|
| New (toolbar) | **1** (consumed in T3) |
| Save attempts | **1** (T4; no retry) |
| Close / reopen | **0** |
| Query (F4) after Save | **0** |
| Refresh / Delete / New IDO… / IDOs / wizard | **0** |
| Recovery snapshots (fresh) | 0 beyond routine reads |

### T4 limitations

- The UI-level Save success is inferred from the settled client state (Save disabled, star cleared, values as saved). It is **not** independently verified: no close/reopen or query was performed, and no message text was returned.
- Database durability is **not** established by this step.
- Configuration-wide visibility of the new project is **not** established. The header shows the user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` only; IDO projects are tenant-wide per AGENTS.md. Other users or configurations may see it.
- Access As `G6R` is the displayed value in the client; the identifier's authority was not separately reviewed.

### T4 readiness

Surface left open and clean (no unsaved change, no error) for a **separately directed** close/reopen recovery task. Not closed; not reopened; not queried.

---

## T5 close, reopen, and recovery query (2026-10-10, New=1, Save=1, close=1, reopen=1)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id 8b307460-df90-426c-a22e-8da26c730517 · cycle 4 · task T5.
Scope: one ordinary IDO Projects close; one reopen through Select Form (`IdoProjects`); one exact-name Filter-in-Place query executed with F4. **No New, no Save, no Delete, no New IDO…/IDOs, no wizard, no Refresh, no Sql Tables interaction.**

| File | Shows | Does NOT prove |
|---|---|---|
| `19-t5-pre-close-saved-record-baseline.png` | Pre-close: IDO Projects selected; row 2 `FX_HelloWorld…` / `Factory Hel…` (no star) selected; Project Name `FX_HelloWorldProject01` (greyed), Description `Factory Hello World test project`, Access As `G6R` (greyed); Save greyed; no dialog. Row 1 SDTest present. | Database persistence. |
| `t5-pre-close-snapshot.yml` | Accessibility state pre-close: Save `[disabled]`; grid row `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; textboxes match; no dialog nodes. | Persistence beyond this session. |
| `20-t5-after-single-close-ido-projects.png` | After the single close control: IDO Projects tab gone; Sql Tables is now the **only** tab and is active by default (not clicked). Its grid shows the blank default row; Save/New/Delete/Refresh greyed; no dialog or unsaved prompt. | That Sql Tables was inspected or changed (it was not interacted with). |
| (no file) | Select Form dialog after toolbar Open, listing `IDO Projects` / `IdoProjects` row (`[active]` after row click) and OK. The dialog was read in accessibility snapshots only (inline, not saved). | A screenshot of the dialog. |
| `22-t5-reopened-fip-mode-before-criteria.png` | **Reopened without any criteria.** IDO Projects reopened and loaded an **unfiltered** list of 19 rows (AppBuilder … WidgetManager), including `FX_HelloWorld…` at row 2 (`Factory Hel…`) and SDTest. Row 1 AppBuilder auto-selected; detail shows AppBuilder/Core. Tooltip "Filter in Place" visible. Tab filter icon absent. | That the FX row is the *selected* or *queried* record (it is an auto-loaded row, not the query result). |
| `t5-reopened-pre-criteria-snapshot.yml` | Accessibility after reopen + first FiP click: FiP button `[active]`; 19 grid rows; detail = AppBuilder (auto-selected); no criteria row. | Query mode state with certainty (see Observations). |
| `23-t5-reopened-fip-query-mode-corrected.png` | **Corrected FiP click** (one): blank criteria row 1 with empty Project Name; IDO Projects tab shows the filter icon (query mode on); grid has no FX rows yet. | That the query was executed. |
| `24-t5-exact-name-criteria-entered-before-f4.png` | Criteria `FX_HelloWorldProject01` in row 1 (`FX_HelloWorld…`) and in the Project Name field; Description and Access As still blank (query not yet run). | That F4 ran. |
| `25-t5-recovered-f4-result.png` | **Recovery result after F4:** one row (row 1) `FX_HelloWorld…` / `Factory Hel…`; detail Project Name `FX_HelloWorldProject01` (greyed), Description `Factory Hello World test project` (focused, text selected, not edited), Access As `G6R` (greyed). Save greyed; New, Delete, Refresh enabled; no star; no dialog. | Database durability; that no other row exists beyond the visible result (see snapshot). |
| `t5-recovered-query-snapshot.yml` | Accessibility after F4: one result row (`gridcell "1"`) with `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; Save `[disabled]`; New, Delete, Refresh, Filter in Place enabled; Project Name textbox `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; no dialog nodes. | Behavior after New/Save (not performed). |

### T5 recovery comparison (post-Save baseline from T4 vs. recovered)

| Field | T4 post-Save baseline | T5 recovered (after reopen + F4) | Match |
|---|---|---|---|
| Project Name | `FX_HelloWorldProject01` | `FX_HelloWorldProject01` | **Yes** |
| Description | `Factory Hello World test project` | `Factory Hello World test project` | **Yes** |
| Access As (displayed) | `G6R` | `G6R` | **Yes** |
| Returned row count (exact query) | n/a | **1** (`gridcell "1"` only) | Exactly one |
| Save control | disabled | disabled | Yes |
| Placeholder / unsaved row | none | none (no star) | Yes |

### T5 observations

- After close, Mongoose made Sql Tables the active tab (automatic). It was not clicked or modified.
- The Select Form reopen loaded an **unfiltered** list of 19 projects (including the new FX row) before any criteria were entered. The brief forbids relying on any automatically loaded row; the recovery value was taken only from the exact-name F4 result (`25`, `t5-recovered-query-snapshot.yml`).
- After the reopen, the first FiP toolbar click left the grid in the unfiltered state with no criteria row and no tab filter icon (`22`, pre-criteria snapshot). A second, corrected FiP click produced the blank criteria row with the icon (`23`). The first click's effect is not fully established; it may have toggled query mode off, or the reopen may have left query mode off. Recorded as an ambiguity, not a finding.
- No validation error, pending-change marker, or dialog appeared at any point in T5. Console remained 0 errors, 2 warnings.

### T5 operation counts (cumulative through T5)

| Operation | This task (T5) | Cumulative (T1–T5) |
|---|---|---|
| New (toolbar) | 0 | **1** (T3) |
| Save attempts | 0 | **1** (T4) |
| Close (ordinary IDO Projects) | **1** | **1** |
| Reopen (Select Form → IdoProjects, OK) | **1** | **1** |
| Filter-in-Place toolbar clicks | 2 (one unintended-state click, one corrected) | **5** (T1 2, T2 1, T5 2) |
| Criteria entries (fill + Tab) | 1 | **5** (T1 3, T2 1, T5 1) |
| F4 executions | **1** (exact-name recovery query) | **5** (T1 3: blank, SDTest control, target; T2 1: SDTest; T5 1: exact name) |
| New IDO… / IDOs / wizard | 0 | 0 |
| Delete / Refresh | 0 | 0 |

### T5 recovery budget

- Fresh recovery snapshots: **0** (the post-reopen snapshots were routine reads used to locate refs; no `Ref … not found` error occurred).
- Corrected visible inspection: **1** (the corrected FiP click, after the pre-criteria snapshot showed the query mode unclear). Recovery allowance: **0 remaining** for further corrections under the brief's limits.
- No repeated queries were run.

### T5 limitations

- Recovery is **UI-level only**: the same client session re-queried the same project after a close and a Select Form reopen. This is observed persistence in the client; it is **not** independent database durability, cache-independent proof, cross-session proof, or replay verification.
- Visibility beyond this user/configuration is **not** established. The header shows only the user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDO projects are tenant-wide per AGENTS.md, and the User editing-scope label does not establish User-scoped creation.
- Access As `G6R` is the displayed value; its authority was not separately reviewed.
- No screenshot of the Select Form dialog itself was saved.

### T5 readiness

Recovered IDO Projects surface is open and clean (Save disabled, exact-name result, no pending change, no error, no dialog) for final evidence reconciliation. Nothing was created, saved, deleted, checked in, or checked out in T5.

---

## T6 final evidence audit (no browser operations)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id 3abc5546-5736-4a0a-9434-a355a4e21740 · cycle 5 · task T6.
Full matrix, object audit, reconciled counts and explanations are in `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`, section "T6". This index gives the evidence summary.

**Superseded by T7.** The provisional labels and table that were here were incorrect and have been removed. The authoritative AC-1 to AC-8 matrix is in the T7 section at the end of this index.

**Reconciled counts** (from the T1–T5 sections, cross-checked against the audit logs): toolbar New 1; Save 1; IDO Projects close 1; reopen 1; FiP toolbar clicks 5; criteria entries 5; F4 5; Tab commits 7; field entries 2; corrected attempt 1 (T5 order 21, a FiP click); fresh recovery snapshots 0; Delete, Refresh, New IDO…, IDOs, wizard 0. The harness flagged `browser_fill_form` 7 times, matching the 7 fill calls.

**Initial FiP ambiguity after reopen (T5 order 15):** the saved post-click snapshot showed FiP `[active]`, unfiltered rows and no criteria row. The corrected click (order 21) produced query mode. The cause is not established.

**Object audit:** one IDO project `FX_HelloWorldProject01` (Description `Factory Hello World test project`; Access As displayed `G6R`). No other object created, edited, deleted, checked in or checked out. Sql Tables was not clicked. No visible generated dependencies were observed (not assumed absent internally).

**Final browser state (as recorded at the end of T5; not re-inspected):** IDO Projects open and clean, with the single exact-name row displayed; Save disabled; no dialog and no pending change (`25`, `t5-recovered-query-snapshot.yml`).

**Scope and exclusions:** observed UI-level persistence only, in one client session. Excluded: independent database durability, cache eviction, cross-session persistence, replay verification. Configuration-wide or other-user visibility is not established (IDO projects are tenant-wide per AGENTS.md).

**Files written by T6:** the experiment record and this index only. The `harness-audit-T1`–`T5` files are controller-generated and were not edited. The 11 `evidence/playwright/page-2026-10-10T03-*.yml` files are browser-tool output outside this folder and were not edited.

---

## T7 authoritative AC-1 to AC-8 matrix (documentation and read-only inspection; no browser operation)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id aa8d779b-d2be-40cf-8a9f-5758067f8848 · cycle 6 · task T7.
Replaces the provisional T6 labels above. The full matrix with limitations, the reconciled counts, the provenance investigation, and the operator decisions are in the T7 section of `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`.

| AC | Assessment | Key proof (this folder unless noted) | Gap or limitation |
|---|---|---|---|
| AC-1 prerequisites, authorization, EXP-038 findings, configuration, UI, permissions, scope distinction | **PARTIAL at T7; superseded by T8: PASS-LIMITED** | AGENTS.md lines 31–44 (authorization); EXP-038 record lines 5, 41, 48, 61, 64, 117; header config `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in `00`; `environments/current-environment.md` line 56; `00`, `03`, `t1-final-state-snapshot.yml`; `t3-unsaved-new-record-snapshot.yml` (New enabled; New IDO… and IDOs disabled on new record) | No local source documents creating an IDO project (`ido-development.md` lines 17 and 22 cover IDO creation within a project; `hello-world-pt1.md` lines 65–74 are an unverified tutorial sequence). Site Developer from EXP-001 only, not re-verified. Editing scope not re-verified. Create permission shown only by absence of denial. |
| AC-2 positive control; zero exact and case-insensitive collisions before mutation | **PASS-LIMITED** | Positive control `05`, `06`, `12`, `13`, `t2-baseline-sdtest-snapshot.yml` (SDTest / SDTest IDO / G6R); exact target query `08`, `09` (no populated row; blank placeholder); complete pre-creation inventory `03` (18 populated rows, list ends at row 18); corroboration `t5-reopened-pre-criteria-snapshot.yml` (19 rows, Get More Rows `[disabled]`; same 18 names plus the target) | Case sensitivity of the exact query untested; case-insensitive absence rests on the visible inventory; the 18-name transcription came from an unsaved inline snapshot; no database-wide absence claimed. |
| AC-3 pre-creation inspection, initial values, naming and prefix, exact-name usability | **PASS-LIMITED** | `09`, `t1-final-state-snapshot.yml` (name empty and required; Access As `G6R`); `15` (new record row 2; Description empty; Access As `G6R` read-only); `16`, `t3-unsaved-new-record-snapshot.yml` (exact name and description; no validation message); `17`, `18`, `t4-post-save-snapshot.yml` | No naming rule, prefix, or validation text ever displayed. Underscore acceptance is inferred from absence of rejection. No saved snapshot of the blank record before entry (`15` is a screenshot only). Access As authority not reviewed. |
| AC-4 one New; at most one Save; saved identity; clean post-Save UI | **PASS** (UI level) | New=1 (`harness-audit-T3.md` order 4); Save=1 (`harness-audit-T4.md` order 4); `18`; `t4-post-save-snapshot.yml` (Save `[disabled] [active]`; grid row FX_HelloWorldProject01 / Factory Hello World test project / G6R; no alert, dialog, or error nodes) | Settled client state only; no success text, server response, or database confirmation. |
| AC-5 one close; one reopen; recovered target selected; three values match; clean UI | **PASS** (UI level, same session) | Close=1 (`harness-audit-T5.md` order 5; `20`); reopen=1 (orders 9, 11, 13); `25` and `t5-recovered-query-snapshot.yml` (one data row; detail FX_HelloWorldProject01 / Factory Hello World test project / G6R; Save `[disabled]`; no dialog) | Reopen auto-loaded an unfiltered list with AppBuilder auto-selected; target selected only through the exact query. First post-reopen FiP click ambiguous (cause not established). Sql Tables activated automatically. No dialog screenshot (snapshot only). |
| AC-6 final lookup or inventory showing one target; object audit; no unrelated creation | **PASS-LIMITED** | One-row exact lookup (`25`; `t5-recovered-query-snapshot.yml`); unfiltered 19-row listing with one FX row (`t5-reopened-pre-criteria-snapshot.yml`, line 224; Get More Rows `[disabled]`, line 69); audits `harness-audit-T1` to `T5` show no create action beyond one New and no IDO wizard, Delete, Refresh, check-in, or check-out | Database-wide uniqueness not claimed. Generated dependencies not inspected (none observed in UI; absence not assumed). "No unrelated creation" judged from browser actions only. |
| AC-7 reconciled counts, permissions, errors, recovery usage, side effects | **PASS-LIMITED** | Recomputed from the audit logs: New 1; Save 1; close 1; reopen 1; FiP clicks 5; criteria entries 5; F4 5; field entries 2; Tab commits 7; fill-form calls 7; corrected visible inspection 1 (`harness-audit-T5.md` order 21); fresh recovery snapshots 0; errors 0 in browser actions (one T1 `Read` error, order 2, not a browser error) | Permissions visible only (labels, no denial on Save); Site Developer not re-verified. Corrected action is a toolbar FiP click, counted as the one correction per the brief. Side effects listed in task sections. |
| AC-8 matrix; proof from captures; changes confined; observed-only; durability, cache, replay limits | **NOT SATISFIED at T7; superseded by T8: PASS** (operator-confirmed boundary facts) | This matrix; cited captures were viewed when written; observed-only classification and exclusions in the record T7 "Outcome" | 16 files newly created by the browser tool under `evidence/playwright/` during this run (11 `page-2026-10-10T03-*.yml`; 5 `console-2026-10-10T03-*.log`) are outside the permitted paths and git-ignored (`.gitignore` line 10). Not waived; the operator must decide. |

### Corrections to earlier index text (T7)

- The T1 section said the `evidence/playwright/page-2026-10-10T03-*.yml` copies "are not EXP-039 captures and were not inspected for this index." That is correct for "not EXP-039 captures" (they are tool output, not screenshots of the target). The "not inspected" wording is superseded: they were examined in T7 for provenance (timestamps; mapping to click results in the audit logs).
- The T6 "Files written by T6" line listed 11 browser-tool files. The run created 16 files under `evidence/playwright/` (11 page, 5 console). The list is corrected here.

### Provenance of `evidence/playwright/` files (summary)

- Ignored by `.gitignore` line 10 (`evidence/playwright/`). The git index could not be read (permission denied), so force-added tracking cannot be ruled out.
- Newly created in this run: run-window timestamps 03:12–03:22. Files `01-*` and `02-*` predate this run.
- Page files: one per click in the run. `03-13-17` and `03-13-40` (T1 FiP clicks, orders 26 and 38); `03-16-34` (T2 FiP, order 4); `03-18-33` (T3 New, order 4); `03-20-12` (T4 Save, order 4); `03-21-50` (T5 close, order 5); `03-21-57` (T5 Open, order 9); `03-22-01` (T5 row, order 11); `03-22-06` (T5 OK, order 13); `03-22-11` (T5 FiP, order 15); `03-22-29` (T5 corrected FiP, order 21). The mapping rests on the path each tool result returned and on timing; the audit logs do not record paths.
- Console files: `03-12-16-906Z`, `03-16-27-332Z`, `03-18-25-812Z`, `03-20-06-210Z`, `03-21-43-409Z`, named by the tool's "New console entries" event lines during the run.
- No worker Write or Edit targeted these paths. Not deleted, moved, or edited in T7.

### `browser_fill_form` interpretation

Audit logs list only `mcp__playwright__browser_fill_form` for these calls. No `browser_evaluate` or run-code tool appears in any audit. The "Ran Playwright code" text is the tool's own locator-based output, not code supplied by the worker. Treated as a supported rendered-UI interaction per the T7 instruction. The harness flag count (7) is kept on record.

### Outcome (observed-only)

Single run, one client session: one New, one Save, one close, one reopen, one exact-name query returning one row whose three values match the post-Save baseline. Not established: database durability, cache eviction, cross-session persistence, replay verification, server response text, configuration-wide or other-user visibility. Full acceptance is not justified until the AC-1 documentation gap and the AC-8 boundary decision are resolved by the operator.

---

## T8 final correction (documentation only; no browser operation)

Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5 · task_message_id 0668a589-6b23-4280-923d-2ade2ab0ccfd · cycle 9 · task T8.
Supersedes the T7 "Outcome" paragraph above. The authoritative matrix and the reasoning are in the T8 section of `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md`.

| AC | Status | Evidence (this folder unless noted) | Limitation |
|---|---|---|---|
| AC-1 prerequisites, authorization, EXP-038, configuration, UI, role, scope | **PASS-LIMITED** | ido-development.md lines 15–22 (IDO creation within an existing project; trust unverified); EXP-038 record lines 5, 41–48, 61; `hello-world-pt1.md` section "Create an IDO Projects shortcut and project (03:30–04:27)", steps 3–4 (unverified transcript); AGENTS.md lines 31–44; `00`, `03`, `15`, `t3-unsaved-new-record-snapshot.yml`; `environments/current-environment.md` lines 51, 56; `experiments/EXP-001-environment-fingerprint.md` line 51 | Creation sequence supported only by an unverified transcript (labelled as such). Site Developer and editing scope not re-verified in this run (EXP-001 history only). Project-level User isolation unproven; configuration-wide visibility not established. |
| AC-2 positive control; zero exact and case-insensitive collisions | **PASS-LIMITED** | `05`, `06`, `12`, `13`, `t2-baseline-sdtest-snapshot.yml`; `08`, `09`; `03` (18 populated rows, list ends at row 18); `t5-reopened-pre-criteria-snapshot.yml` | Case-insensitive absence rests on the complete visible inventory, not a case-insensitive query; exact-query case sensitivity untested. No database-wide absence claimed. |
| AC-3 pre-creation inspection; initial values; naming or prefix; exact-name usability | **PASS-LIMITED** | `09`, `t1-final-state-snapshot.yml`, `15`, `16`, `t3-unsaved-new-record-snapshot.yml`, `17`, `18`, `t4-post-save-snapshot.yml` | No naming rule or prefix text displayed; underscore acceptance inferred from absence of rejection. Access As `G6R` default; authority not reviewed. |
| AC-4 one New; at most one Save; saved identity; clean post-Save UI | **PASS** (UI level) | New=1 (`harness-audit-T3.md` order 4); Save=1 (`harness-audit-T4.md` order 4); `18`; `t4-post-save-snapshot.yml` | Settled client state only; no server response or database confirmation. |
| AC-5 one close; one reopen; recovered target; three values match; clean UI | **PASS** (UI level, same session) | Close=1 (`harness-audit-T5.md` order 5; `20`); reopen=1 (orders 9, 11, 13); `24`, `25`, `t5-recovered-query-snapshot.yml` | Target selected only by the exact query (reopen auto-listed 19 rows; AppBuilder auto-selected). First post-reopen FiP click ambiguous. |
| AC-6 one-row lookup; object audit; no unrelated creation | **PASS-LIMITED** | `25`; `t5-recovered-query-snapshot.yml`; `t5-reopened-pre-criteria-snapshot.yml` (one FX gridcell, line 224); audits T1–T5 show no create action beyond one New and no wizard, Delete, Refresh, check-in, or check-out | No database-wide uniqueness; generated dependencies not inspected (none seen in UI; absence not assumed). |
| AC-7 counts; permissions; errors; recovery usage; side effects | **PASS-LIMITED** | Counts below; audit order 2 (T1 `Read` error on a not-yet-created record file, not a browser error) | Permissions visible labels and absence of denial only. |
| AC-8 matrix; captures; confinement; observed-only; exclusions | **PASS** | This matrix; operator-confirmed boundary facts (below) | Relies on operator confirmation for Git status; the worker did not run `git status` and could not read `.git/index`. |

**Reconciled counts (T8, unchanged):** New 1; Save 1; IDO Projects close 1; reopen 1; FiP toolbar clicks 5; criteria entries 5; F4 5; corrected visible inspection 1; fresh recovery snapshots 0; Delete, Refresh, New IDO…, IDOs, wizard 0. No unrelated creation.

**AC-8 boundary (operator-confirmed; attributed to the operator):** `evidence/playwright/` is the Playwright MCP server's configured `--output-dir`. Sixteen page and console outputs were generated automatically during this run (eleven `page-2026-10-10T03-*.yml`, five `console-2026-10-10T03-*.log`). `.gitignore` line 10 excludes the directory (verified by the worker). The operator reports Git status shows only `evidence/EXP-039/` and the EXP-039 record as new repository changes. The sixteen files are **ignored tool outputs**, not additional repository changes; they are left untouched; no waiver is needed.

**Outcome recommendation:** all eight checks are satisfied, so the outcome is **accepted at observed same-session UI level** (one run; one New, one Save, one close, one reopen, one exact-name query returning one row with all three values matching the baseline). **Excluded:** independent database durability; cache eviction; cross-session persistence; replay verification; other-user or configuration-wide visibility; any server response. Standing limitations: creation permission (absence of denial only); Access As `G6R` authority; underscore naming rule; first post-reopen FiP ambiguity; Site Developer and editing scope historical only.

**Files modified in T8:** `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md` and `evidence/EXP-039/t1-evidence-index.md` only. The project remains in place and undeleted.
