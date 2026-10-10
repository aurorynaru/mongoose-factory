# EXP-039 — Single FX_ IDO Project Creation and Recovery

Status: **T1 (preflight) through T5 (close/reopen recovery) complete.** Cumulative: New=1, Save attempts=1, ordinary IDO Projects close=1, reopen=1, exact-name recovery query=1 (F4). The recovered project matches the post-Save baseline exactly (Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`), with one matching row, Save disabled, and no error. **Observed UI-level persistence within the same client session only.** Independent database durability, cross-session persistence, replay verification, and configuration-wide visibility are **not** established. T6 final documentation and evidence audit completed (section "T6" below; no browser action). T7 reassessment (section "T7" at the end) replaces the provisional T6 AC labels with the authoritative AC-1 to AC-8 definitions: T8 final correction (section "T8" at the end): all eight checks are satisfied at observed same-session UI level, with stated limitations. AC-1 is PASS-LIMITED; AC-8 is PASS on operator-confirmed boundary facts. The project remains in place and undeleted.

Date: 2026-10-10
Run: R-20261010-111209-OE9H · task T1 · worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5
Mode: LEARNING MODE. FX_-only scope extension for the Hello World tutorial (AGENTS.md, 2026-10-10).
Brief commit: `278604a EXP-039: approved brief (single FX_ IDO project creation and recovery)`.
Target: **FX_HelloWorldProject01** (IDO project). Description (for T2): `Factory Hello World test project`. Fallback `FXHelloWorld01` is **not** authorized.
Editing scope: User. Not re-verified in T1 (the Designer scope flow was not opened).

## Objective

Determine whether the authenticated Site Developer user can create exactly one IDO project named FX_HelloWorldProject01 through the supported IDO Projects maintenance form, save it once, close and reopen it, and recover the same definition.

## Sources read

- `AGENTS.md`: scope extension (FX_ only; tenant-wide objects recorded for cleanup), evidence and recovery rules.
- `experiments/EXP-038-hello-world-part-1-fx-sql-table-and-ido-creation-f.md`: prior T1 outcome. Its open point was "Whether IDO Projects Filter in Place executes and shows results" and "no control query". Both are addressed here.
- `evidence/EXP-038/t1-evidence-index.md`: prior screenshot index; no FX_ objects created in EXP-038.
- `docs/mongoose/guides/ido-development.md` ("Adding an IDO"): documented IDO Wizard fields and rules. Trust: unverified (Infor documentation). Not used to authorize anything in T1.
- `docs/mongoose/transcripts/hello-world-pt1.md` (raw wording, Filter-in-Place section): **F4 or the toolbar Filter-in-Place icon executes the shown criteria.** Documented tutorial; unverified here until the positive control below.
- Note: the EXP-039 record did not exist in the working tree before this run. It was created in T1 from the approved brief.

## Preflight gates

| Gate | Requirement | Result | Evidence |
|---|---|---|---|
| G0 Session | Web Client authenticated; no sign-in or configuration prompt | **Pass.** Mongoose tab selected; Web Client loaded; header shows the signed-in Mongoose user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in prompt. No authentication action taken. | `00`, `t1-final-state-snapshot.yml` |
| G1 Surface | IDO Projects form usable; Project Name, Description, Access As, New, Save, FiP, close visible | **Pass.** IDO Projects tab selected; Project Name, Description, Access As textboxes; toolbar New, Save, Delete, Refresh, Filter in Place (FiP), Get More Rows; close control on the tab. | `00`, `04`, `t1-final-state-snapshot.yml` |
| G2 Inherited criteria | Clear unsaved criteria with supported controls; no record saved | **Pass.** Inherited "FX" criteria cleared by editing the Project Name criteria field and committing with Tab. No save. | `00`–`02` |
| G3 Positive control | A known-existing project returned by one FiP query | **Pass.** Criteria `SDTest` + F4 returned exactly one row: `SDTest`, Description `SDTest IDO`, Access As `G6R`. | `05`, `06` |
| G4 Name collision | Zero case-insensitive collisions for FX_HelloWorldProject01 via a verified mechanism | **Pass (zero observed).** (a) Full inventory: blank-criteria FiP + F4 returned 18 rows (Get More Rows disabled); none begins with "FX" or matches the name in any case. (b) Exact FiP criteria `FX_HelloWorldProject01` + F4 (after G3 proved the mechanism) returned zero rows. | `03`, `08`, `09`, `t1-evidence-index.md` |
| G5 Prefix / naming | No enforced prefix that blocks the exact name; no naming restriction observed | **Pass (partial).** No prefix or naming error was shown, but the name was only used as a query criterion, so the creation-time naming rule is **not tested**. Existing project names containing underscores (`HelloWorld_Kael`, `HelloWorld_Test`) indicate underscores are stored, but that does not prove the create form accepts them. | `03` |
| G6 Access As | Pre-filled value visible before commit; never override | **Observed on the add-record placeholder: `G6R` (read-only, greyed).** Not overridden in T1. Existing projects show `G6R` (user-created) or `Core` / `PluginManager` (system). Whether the saved value equals `G6R` is a T2 question. | `09`, `t1-final-state-snapshot.yml` |

All T1 gates passed, so the preflight would permit T2 if the coordinator authorizes it. **T2 has not been started.**

## Operation counts (T1)

| Operation | Count | Notes |
|---|---|---|
| New (toolbar) | **0** | Not pressed. |
| New IDO… / IDOs / wizard launch | **0** | Not pressed. |
| Save | **0** | Not pressed. |
| Project create / edit / delete | **0** | No record was created, edited, or deleted. |
| Close / reopen of IDO Projects | **0** | Not performed. |
| FiP criteria queries executed (F4) | **3** | (1) blank criteria, (2) `SDTest` positive control, (3) `FX_HelloWorldProject01`. |
| FiP mode toggles (toolbar FiP) | **2** | Re-entered Filter-in-Place mode twice. |
| Recovery snapshot | **0** | No ref-not-found errors occurred. |
| Corrected visible inspection | **0** | Not needed. |

## Side effects observed in T1

1. **Blank add-record placeholder.** When the exact FiP query (capture `09`) returned zero rows, the grid showed one blank row with a blue star, Project Name marked required, and Access As pre-filled `G6R`. Save is disabled, and no value has been typed into the placeholder. This was not caused by a New press. It is not saved. Mongoose shows it as an unsaved add state, so **T2 must account for it before any New press**. Options (coordinator decision): clear it by toggling FiP off or refreshing, or accept it as the New target. Nothing was discarded in T1.
2. **Criteria state.** Criteria were changed in the FiP criteria row (inherited "FX" removed; "SDTest" then `FX_HelloWorldProject01`). These are unsaved query criteria only. The Sql Tables tab's inherited criteria were not touched.
3. **Auto-selected record.** The blank-criteria query auto-selected the first row (`AppBuilder`) in the detail pane, and Description took focus. No value was typed into it, and no edit was made to AppBuilder.
4. **Enabled controls.** After the blank-criteria query, the toolbar **New**, **Delete**, and **Refresh** became enabled because a row was selected. **Delete was not pressed.** The `SDTest` row was selected afterward, so Delete was enabled then too.

## Observations: visible controls and permissions

- Toolbar (IDO Projects, with a row selected): Open, Save (disabled), New (enabled), Delete (enabled), Refresh (enabled), Filter in Place (enabled), Get More Rows (disabled when all rows loaded), System Notes, Documents, Send email, Export To Excel (enabled with rows), Designer, Help.
- Detail pane: New IDO… was `[disabled]` in every snapshot taken in T1. IDOs was `[disabled]` on the placeholder and enabled when a saved project row (AppBuilder, SDTest) was selected. Project Name, Description, Access As.
- Visible role or permission labels: the Portal tab reads "System Administrator" and the Web Client header shows a user name and config group. These are **visible labels only**. Site Developer was recorded in EXP-001 (Designer About dialog) and was not re-verified in T1. The New toolbar being enabled is consistent with create rights, but **create rights are not proven** until T2.
- No error, validation, or permission message was observed in T1.

## Evidence (under `evidence/EXP-039/`)

| File | Proves | Does not prove |
|---|---|---|
| `00-t1-start-ido-projects-inherited-criteria.png` | Starting state: IDO Projects selected; inherited "FX" criteria; Save and New greyed. | Query results; Sql Tables contents. |
| `01-t1-criteria-cleared-in-detail-field.png` | Detail field emptied; grid still showed "FX" (not yet synced). | Grid sync (fixed by `02`). |
| `02-t1-after-tab-criteria-sync-check.png` | Criteria row blank after Tab; no text typed; Save greyed. | Any query result. |
| `03-t1-blank-criteria-f4-inventory.png` | Blank FiP + F4 returned 18 rows (AppBuilder … WidgetManager). | That the list is complete from the image alone (Get More Rows state is in the inline snapshot note). |
| `04-t1-filter-in-place-mode-entered.png` | FiP mode entered (tooltip "Filter in Place"); blank criteria row. | Query execution. |
| `05-t1-positive-control-criteria-sdtest-entered.png` | "SDTest" criteria entered before execution. | That the query ran. |
| `06-t1-positive-control-sdtest-f4-result.png` | **Positive control passed:** one row SDTest / SDTest IDO / G6R after F4. | That zero rows would appear for a missing name (covered by `09`). |
| `07-t1-filter-in-place-mode-reentered-before-target.png` | FiP re-entered; "SDTest" carried over. | — |
| `08-t1-target-criteria-entered-before-f4.png` | "FX_HelloWorldProject01" criteria entered before execution. | That the query ran. |
| `09-t1-target-f4-result-zero-rows.png` | **Zero result rows for the exact target name** after F4; blank add-record placeholder; Access As pre-filled G6R; Save greyed. | Case-insensitive absence beyond the exact match (covered by the inventory in `03`). |
| `t1-final-state-snapshot.yml` | Accessibility state after `09`: Save `[disabled]`, New/Delete/Refresh/FiP enabled, Project Name empty, Access As G6R, no dialog nodes. | Behavior after the placeholder is cleared. |
| `t1-evidence-index.md` | Screenshot index, inventory transcription (18 rows), name-collision table, and proof limits. | — |

## Unresolved points

1. **Blank add-record placeholder** from the zero-row FiP query (side effect 1). T2 must clear it or use it deliberately, and this must be decided before any New press. A clean surface is needed to prove a single New action.
2. **Creation-time naming rule** for underscores in Project Name is not tested (no create attempt).
3. **Access As on save**: pre-filled G6R is observed on the placeholder only; whether it persists as G6R after Save is unknown.
4. **Create permission**: New is enabled, but create rights are not proven. Only Save can show it (T2).
5. **Editing scope** not re-verified in this run (no Designer flow).
6. **Sql Tables tab** still holds its inherited state (filter icon). It was not inspected or closed in T1. It is outside the IDO project target and was not modified.
7. **Inventory completeness** relies on the blank-criteria query returning all rows (Get More Rows disabled in the inline snapshot, not a saved file). Confirm the count again before T2 if it matters.

## Next permitted action (after coordinator approval)

T2 may run only if the coordinator authorizes it. Its outline, per the brief: confirm the surface is clean (resolve side effect 1); press toolbar **New** once; enter Project Name `FX_HelloWorldProject01` and Description `Factory Hello World test project`; leave Access As at its supported default; press **Save** once; verify the saved values; close once and reopen through Select Form; run one recovery query; record every count. **Do not use the fallback name.** Stop on the first Save or creation failure.

## T2 — Baseline restoration (read/query only)

Task: T2 (`task_message_id` 90fc3a04-cb02-442e-a639-1454b091a53d, cycle 1). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Goal: move from the inherited T1 placeholder to a clean saved-record view using only the supported FiP control and F4, then report readiness for the separately authorized New action. New and Save were **not** pressed.

### Steps (in order)

1. Fresh snapshot: IDO Projects tab selected; placeholder row (star, required Project Name, Access As G6R); Save disabled; New enabled. Screenshot `10`.
2. One toolbar **Filter in Place** click (`f1e38`). Placeholder star cleared; criteria row carried over `FX_HelloWorldProject01` from T1. Screenshot `11`.
3. Replaced criteria with `SDTest` (one fill, one Tab). Screenshot `12`.
4. One **F4**. Result: one row `SDTest` / `SDTest IDO` / `G6R`. Screenshot `13` and snapshot `t2-baseline-sdtest-snapshot.yml`.

### Outcome

| Check (from T2 brief) | Result |
|---|---|
| Returned row is the saved SDTest project | **Pass.** Row `SDTest` / `SDTest IDO` / `G6R` (`13`, snapshot). |
| Placeholder no longer active | **Pass.** Star and blank row gone; one row only. |
| Save disabled | **Pass.** `[disabled]` in snapshot and greyed in `13`. |
| New enabled | **Pass.** Enabled in snapshot. |
| No pending change, validation error, or dialog | **Pass (visible).** No such indicator in `13` or the snapshot; no dialog nodes. Not a database-level proof. |
| Stop if clean state not restored | Not triggered. No Refresh, dismissal, or record-creation action was attempted. |

### Operation counts (T2)

| Operation | Count |
|---|---|
| New (toolbar) | **0** |
| New IDO… / IDOs / wizard | **0** |
| Save | **0** |
| Project create / edit / delete | **0** |
| Close / reopen | **0** |
| FiP toolbar clicks | **1** |
| Criteria entries | **1** (`FX_HelloWorldProject01` → `SDTest`) |
| F4 executions | **1** |
| Recovery snapshots (fresh) | **0** (opening snapshot was the fresh inspection) |
| Corrected inspections | **0** |

### Side effects (T2)

- The T1 placeholder (blank add-record row) was cleared from the active view by the FiP query. It was **not** saved. No discard prompt appeared.
- FiP criteria changed from `FX_HelloWorldProject01` to `SDTest`. Criteria only; no project record changed.
- After F4 the IDO Projects tab header no longer shows the filter icon (query mode exited). Observed in `13`; the reason is not established.
- Description of SDTest took focus with its text selected (after F4). No text typed; Save stayed disabled.
- Sql Tables tab not touched.

### Editing scope and creation rights (T2 note)

The header shows the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **This does not establish that IDO project creation is User-scoped.** IDO projects are tenant-wide objects per AGENTS.md, so configuration-wide impact remains possible. Create rights are still unproven until a Save succeeds.

### T2 readiness

Ready for **one** separately authorized New action, pending coordinator approval. Not executed in T2.

## T3 — Single New and unsaved field entry (no Save)

Task: T3 (`task_message_id` 5e745aab-36e6-4d19-93fc-877ae400a7e3, cycle 2). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Goal: prepare exactly one new FX_ IDO project record and stop before Save. New was pressed **once**; it must not be repeated in this experiment.

### Steps (in order)

1. Fresh snapshot and baseline check: saved `SDTest` row selected; Save disabled; New enabled; no dialog. Screenshot `14`. Note: New IDO… and IDOs were enabled because a saved row was selected; neither was pressed.
2. **One ordinary toolbar New click** (`f1e29`, the asterisk icon; not New IDO…). A blank record (row 2, star) became active. Screenshot `15` and snapshot.
3. Entered Project Name `FX_HelloWorldProject01` (one fill, Tab). Grid and detail showed the exact name; no validation message.
4. Entered Description `Factory Hello World test project` (one fill, Tab). Grid and detail showed the exact text; no validation message.
5. Snapshot and screenshot `16` with `t3-unsaved-new-record-snapshot.yml`.

### Outcome

| Check (from T3 brief) | Result |
|---|---|
| Baseline clean before New (SDTest saved, Save disabled, New enabled, no pending change/error/dialog) | **Pass** (`14`) |
| Genuinely new blank record active (not an existing project) | **Pass.** Row 2 with new-record star; SDTest unchanged on row 1 (`15`). |
| Required-field indicator | **Observed.** Project Name marked required (red asterisk) on the blank record. |
| Visible enforced prefix or naming rule | **None visible** at entry. Not tested at Save. |
| Project Name accepted unchanged | **Yes at entry** (grid and detail show `FX_HelloWorldProject01`; no error). Not a server-side validation. |
| Description accepted unchanged | **Yes at entry** (`Factory Hello World test project`). |
| Access As | **Default `G6R`, read-only, not edited.** Access As is not invented or overridden. |
| Save control state | **Enabled** (dirty new record). **Not pressed.** |
| Validation error, message, or dialog | **None observed.** |
| Ready for separately authorized Save | **Yes** (unsaved). |

### Operation counts (T3)

| Operation | Count |
|---|---|
| **New (toolbar, ordinary)** | **1** (consumed) |
| **Save** | **0** |
| New IDO… / IDOs / wizards | **0** |
| Close / reopen | **0** |
| Query (F4) / Refresh / Delete | **0** |
| Field entries | 2 (Project Name; Description) |
| Recovery snapshots | 0 (routine reads only) |
| Corrected inspections | 0 |

### Side effects (T3)

- New created the blank record row 2 alongside the saved SDTest (row 1). SDTest was not edited.
- Save became enabled (dirty state), as expected.
- The commit Tab after Description moved keyboard focus to a portal shell icon (top right, outlined). Nothing was activated. No value changed.
- Access As `G6R` remained the read-only default; no override.

### Editing scope and creation rights (T3 note)

The header shows the signed-in user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **This does not establish that IDO project creation is User-scoped.** AGENTS.md treats IDO projects as tenant-wide objects, so a successful Save may have configuration-wide impact. Create rights remain unproven until Save succeeds.

### Readiness and cautions for the Save step

- The unsaved record is ready for **one** separately authorized Save.
- The New allowance is consumed. If Save fails, **do not retry** Save and **do not** press New again.
- Do not discard the unsaved record without an operator decision (Save, or an approved discard).
- The Tab-focus side effect is minor but should be considered: a Save from the toolbar should be used rather than a keyboard shortcut that may depend on focus.

## T4 — Single ordinary Save attempt

Task: T4 (`task_message_id` f2b01dc4-0194-4a5d-881e-ea542c4cd35b, cycle 3). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Goal: one ordinary toolbar Save of the T3 unsaved record, then observe the settled UI. No close, reopen, query, New, or Refresh.

### Steps (in order)

1. Fresh snapshot: unsaved row 2 (star) with `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; Save enabled; no error. Prerequisites **passed**. Screenshot `17`.
2. **One** toolbar Save click (`f1e28`).
3. Screenshot `18` and snapshot `t4-post-save-snapshot.yml` (read-only observation of the settled UI).

### Outcome

| Check | Result |
|---|---|
| Visible validation message | **None observed.** |
| Permission or error message | **None observed.** |
| Success message | **None observed** (no message text returned by the client). |
| Save control state after click | **Disabled** (`[disabled]`, greyed in `18`). |
| New-record star | **Cleared** (row 2 now a plain row). |
| Same target still selected | **Yes** (row 2). |
| Project Name | `FX_HelloWorldProject01` (greyed = saved-record read-only). |
| Description | `Factory Hello World test project`. |
| Access As (displayed) | `G6R` (greyed). |
| Pending change or error state | **None visible.** |
| Dialog | **None.** |

**Save outcome (UI level):** appears to have succeeded, based on the settled client state only. This is **not** independent proof of persistence.

### Operation counts (cumulative through T4)

| Operation | Count |
|---|---|
| New (toolbar) | **1** |
| Save attempts | **1** |
| Close | **0** |
| Reopen | **0** |
| Query (F4) after Save | **0** |
| Refresh / Delete / New IDO… / IDOs / wizard | **0** |

### Side effects (T4)

- The saved row now exists in the client grid (row 2), no longer a placeholder.
- New IDO… and IDOs became enabled because a saved row is selected. Neither was clicked.
- No change to SDTest (row 1).

### Limitations and scope (retained)

- Persistence is inferred from the client UI, not verified by close/reopen or query. Recovery is **not** done.
- Database durability is **not** claimed.
- The header shows only the user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. **This does not establish that IDO project creation is User-scoped.** IDO projects are tenant-wide, so the saved project may be visible configuration-wide.
- Access As `G6R` is the client's displayed value; the identifier was not separately reviewed or changed.

### Next step (not performed)

A separately directed close/reopen recovery: close the IDO Projects surface once, reopen it through Select Form, query `FX_HelloWorldProject01`, and compare Project Name, Description, and Access As with the post-Save values above. Do not press New or Save again.

## T5 — Ordinary close, reopen, and exact-name recovery query

Task: T5 (`task_message_id` 8b307460-df90-426c-a22e-8da26c730517, cycle 4). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Goal: close IDO Projects once, reopen once through Select Form, query `FX_HelloWorldProject01` with F4, and compare the recovered values with the T4 post-Save baseline. No New, Save, Delete, wizard, Refresh, or Sql Tables interaction.

### Steps (in order)

1. Fresh snapshot: IDO Projects selected; row 2 `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; Save disabled; no dialog. Prerequisites **passed**.
2. Screenshot `19` and snapshot `t5-pre-close-snapshot.yml`.
3. **One** ordinary close of the IDO Projects tab (`Close Panel IDO Projects`). Result: IDO Projects tab removed; no prompt. Screenshot `20`. Sql Tables became the only, active tab (automatic; not clicked).
4. **One** reopen: toolbar Open → Select Form → `IDO Projects` / `IdoProjects` row → OK. The surface reopened with an unfiltered list (19 rows) and row 1 auto-selected (`22`, `t5-reopened-pre-criteria-snapshot.yml`).
5. First toolbar FiP click: the grid remained unfiltered with no criteria row and no tab filter icon (ambiguous; see Observations). Snapshot read.
6. **Corrected FiP click** (the single corrected visible inspection of this task): blank criteria row and filter icon present (`23`).
7. Entered `FX_HelloWorldProject01` in the Project Name criteria, Tab (`24`).
8. **One F4**: exactly one row `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R` (`25`, `t5-recovered-query-snapshot.yml`).

### Recovery comparison

| Field | T4 post-Save baseline | T5 recovered | Match |
|---|---|---|---|
| Project Name | `FX_HelloWorldProject01` | `FX_HelloWorldProject01` | Yes |
| Description | `Factory Hello World test project` | `Factory Hello World test project` | Yes |
| Access As (displayed) | `G6R` | `G6R` | Yes |
| Matching rows for exact-name query | n/a | 1 | Exactly one |
| Save | disabled | disabled | Yes |
| Placeholder / pending change / error / dialog | none | none | Yes |

### Observations (T5)

- **Reopen auto-loaded all projects.** Select Form reopen populated an unfiltered list of 19 rows (including `FX_HelloWorld…` at row 2 and SDTest). The recovery claim rests only on the exact-name F4 result, not on this auto-loaded list or the auto-selected AppBuilder row.
- **FiP state ambiguity.** After reopen, the first FiP click did not show a criteria row or filter icon. One corrected FiP click then did. The first click's exact effect is not established; this is recorded, not interpreted further.
- Sql Tables became the active tab after the close. It was not interacted with.
- No validation, permission, pending-change, or dialog message appeared. Console stayed at 0 errors, 2 warnings.

### Operation counts (cumulative through T5)

| Operation | T5 | Cumulative (T1–T5) |
|---|---|---|
| **New (toolbar)** | 0 | **1** (T3; consumed; not to be repeated) |
| **Save attempts** | 0 | **1** (T4; no retry) |
| **Ordinary IDO Projects close** | **1** | **1** |
| **Reopen (Select Form)** | **1** | **1** |
| Filter-in-Place toolbar clicks | 2 | **5** (T1 2, T2 1, T5 2) |
| Criteria entries | 1 | **5** (T1 3, T2 1, T5 1) |
| F4 executions | **1** | **5** (T1 3, T2 1, T5 1) |
| New IDO… / IDOs / wizards / Delete / Refresh | 0 | 0 |

### Recovery budget

- Fresh recovery snapshots: **0 used** (post-reopen snapshots were routine reads; no ref-not-found error).
- Corrected visible inspection: **1 used** (the corrected FiP click). No further corrections were attempted.
- No repeated queries. No Refresh used.

### Limitations (T5)

- The recovery is **observed UI-level persistence within the same client session**, after a close and a Select Form reopen. It is **not** independent database durability, not cross-session persistence, not cache-independent evidence, and not replay verification.
- Configuration-wide visibility is **not** established. The header shows the user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` only. The User editing-scope label does **not** establish that IDO project creation is User-scoped; IDO projects are tenant-wide per AGENTS.md, so the project may be visible to other users of this configuration.
- Access As `G6R` is the displayed value; its authority has not been separately reviewed.
- No screenshot of the Select Form dialog itself was saved (only the snapshot read).

## Created objects

**One IDO project saved in the client, recovered in the same session after close and reopen (UI-level only):** `FX_HelloWorldProject01` (Description `Factory Hello World test project`, Access As `G6R` as displayed), created by T3's single New and T4's single Save. No SQL table, IDO, Form, column, procedure, or data record was created, edited, deleted, checked in, or checked out in T1–T5. The project is **not deleted**; deletion requires separate operator authorization.

## Knowledge state

| Finding | State |
|---|---|
| IDO Projects form opens; Project Name, Description, Access As visible; toolbar New, Save, FiP present | observed |
| Filter in Place executes criteria on F4 (positive control `SDTest` returns one matching row) | observed |
| Blank-criteria FiP returns 18 visible projects; none begins with FX or matches FX_HelloWorldProject01 | observed |
| Exact FiP criteria `FX_HelloWorldProject01` returns zero rows | observed |
| Zero-row FiP result opens a blank add-record placeholder (Save disabled; Access As pre-filled G6R) | observed |
| Access As pre-fill on new record is `G6R` for this user | observed (placeholder only) |
| Documented F4 / FiP execution | candidate_procedure (tutorial transcript; now corroborated by the positive control) |
| Save success | observed at UI level only (T4 settled state; no server response or message text captured) |
| Create permission for the signed-in user | unresolved beyond UI non-denial (T4 Save produced no permission message; no permissions view was inspected) |
| Creation-time naming rule for underscore in Project Name | unresolved (name accepted at entry and at UI-level Save; no rule text observed) |
| Access As persistence after Save | observed as displayed `G6R` after Save (T4) and after reopen (T5); stored value not independently verified |
| Recovery of the same definition after close and reopen | observed (UI-level, same client session; T5 exact-name query returned one row matching the T4 baseline) |

## Open questions and blockers

- **Superseded (T2–T5 completed; see T6):** the T1 blocker and coordinator-decision bullets below are historical. No blocker remains for the experiment's operations.
- **Coordinator decision needed before T2:** how to handle the blank add-record placeholder (side effect 1). T1 did not clear it, to avoid a discard or an out-of-scope action.
- The brief's exhaustive-collision requirement is met by the 18-row inventory plus the exact query. No wildcard was used.

## T6 — Final documentation and evidence audit (no browser operations)

Task: T6 (`task_message_id` 3abc5546-5736-4a0a-9434-a355a4e21740, cycle 5). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Scope: read-only review of this record, `evidence/EXP-039/t1-evidence-index.md`, the saved snapshot files, the controller-generated `evidence/EXP-039/harness-audit-T1.md` to `harness-audit-T5.md`, `AGENTS.md`, and the local tutorial transcripts. **No browser action; no Mongoose state change.** The final browser state is taken from the T5 record (not re-inspected).

### A. Authorization and prerequisite check

| Item | Source | Finding |
|---|---|---|
| FX_-prefixed IDO projects permitted | `AGENTS.md`, "Scope extension" (2026-10-10) | Permitted in this demo tenant only. Objects are tenant-wide, not User-scoped, and must be recorded. Satisfied: one project, recorded here. |
| Documented procedure for creating an IDO project | `docs/mongoose/guides/ido-development.md` | **Not found.** The guide documents creating an IDO inside a project (IDO Wizard; Project Name "Select the IDO project to which the IDO is to belong"). It does not document creating the project itself. |
| Project-creation steps | `docs/mongoose/transcripts/hello-world-pt1.md`, section 3 (about lines 65–74) | Tutorial sequence: New Shortcut under My Folders → IDO Projects → F4 query → toolbar New (blue star) → enter name → Save. Transcript-derived and unverified. The same section says creating "Hello World" is "a demonstration, not a permitted mutation target", so the FX_ name is the adapted target. |
| Deviations from the tutorial | T1–T5 | No shortcut was created. The brief specifies Select Form, and the tutorial's shortcut is a personal-setting change (`hello-world-pt2.md`, table line 38). The name is FX_HelloWorldProject01, per the brief. |
| Site Developer / create rights | EXP-001 record (cited in T1); T1 | Not re-verified. Only the absence of a denial on Save (UI level) is observed. No other local prerequisite was found. |

### B. Superseded: provisional T6 AC labels (replaced by the T7 matrix at the end of this record)

**Superseded.** The provisional T6 AC labels and their mapping table were incorrect and have been removed. T6 had no authoritative AC definitions to map against. The authoritative AC-1 to AC-8 matrix, supplied in the T7 instruction, is in the section "T7" at the end of this record.

### C. Object audit

| Category | Finding |
|---|---|
| Created | One IDO project, `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As displayed `G6R`. Created by the T3 toolbar New and the T4 toolbar Save (UI level). |
| Not created | No SQL table, column, constraint, IDO, IDO property or method, Form, personal shortcut, procedure, or application data record. The audits show no create action other than the one New. |
| Deleted / checked out / checked in | None. No Delete, Refresh, check-in or check-out action appears in any audit. |
| Not modified | `SDTest` stayed read-only. Its description text took focus in T2–T5 but was never typed into. `AppBuilder` was auto-selected in T1 and T5 and never edited. No other project row was edited. |
| Sql Tables tab | Inherited from EXP-038. Not clicked by any T-task. It became active automatically after the T5 close. Its blank default row was not edited. |
| Visible generated dependencies | **None observed** in the UI: no child rows, IDO, SQL table or Form appeared. This does not establish that none exist internally. |

### D. Reconciled action counts

Each count is recomputed from the T1–T5 task sections and cross-checked against the controller-generated `harness-audit-T*.md` tool logs.

| Operation | T1 | T2 | T3 | T4 | T5 | Reconciled total | Audit cross-check |
|---|---|---|---|---|---|---|---|
| Toolbar New (ordinary) | 0 | 0 | 1 | 0 | 0 | **1** | T3 order 4 |
| Save attempts | 0 | 0 | 0 | 1 | 0 | **1** | T4 order 4 |
| IDO Projects close (ordinary) | 0 | 0 | 0 | 0 | 1 | **1** | T5 order 5 |
| Reopen (Open → Select Form row → OK) | 0 | 0 | 0 | 0 | 1 | **1** | T5 orders 9, 11, 13 |
| Filter-in-Place toolbar clicks | 2 | 1 | 0 | 0 | 2 | **5** | T1 orders 26, 38; T2 order 4; T5 orders 15, 21 |
| Criteria entries (fill, criteria field) | 3 | 1 | 0 | 0 | 1 | **5** | T1 orders 15, 30, 42; T2 order 8; T5 order 25 |
| Field entries (name, description; not criteria) | 0 | 0 | 2 | 0 | 0 | **2** | T3 orders 8, 11 |
| Tab commits | 3 | 1 | 2 | 0 | 1 | **7** | Matches the fill count (5 criteria + 2 field) |
| F4 executions | 3 | 1 | 0 | 0 | 1 | **5** | T1 orders 22, 34, 46; T2 order 12; T5 order 29 |
| Corrected attempt (one) | 0 | 0 | 0 | 0 | 1 | **1** | T5 order 21 (a corrected FiP toolbar click, not a read-only inspection) |
| Fresh recovery snapshots | 0 | 0 | 0 | 0 | 0 | **0** | No "Ref … not found" error in T2–T5 audits. The T1 audit error (order 2) is a `Read` of the not-yet-created record file, not a browser error. |
| Delete / Refresh / New IDO… / IDOs / wizard | 0 | 0 | 0 | 0 | 0 | **0** | No such element in any audit click list |
| Tool flagged by harness (`browser_fill_form`) | 3 | 1 | 2 | 0 | 1 | **7** | Matches the 7 fill calls above |

**Recovery allowance:** the fresh-snapshot allowance is **1 unused**. The corrected-attempt allowance is **0 remaining** (one used).

### E. Explanations

- **Initially ambiguous FiP click after reopen (T5 order 15).** The snapshot after Select Form OK (inline; not saved) showed Filter in Place without `[active]` and no criteria row. The saved snapshot after the first click (`t5-reopened-pre-criteria-snapshot.yml`) showed the FiP button `[active]`, an unfiltered 19-row list, no criteria row and no filter icon. The corrected click (order 21) produced the blank criteria row and filter icon (`23-t5-reopened-fip-query-mode-corrected.png`). The next inline snapshot did not show `[active]`. **Cause not established.** The records contain no evidence that distinguishes a delayed render from a toggle effect.
- **Corrected attempt.** Order 21 is the only corrected action. It is classified here as a corrected FiP toolbar action, not a read-only inspection.
- **Final successful F4.** Order 29 (exact criteria). Screenshot `25-t5-recovered-f4-result.png` and snapshot `t5-recovered-query-snapshot.yml` show one row (`gridcell "1"`).
- **Pre-creation zero-match result.** After the positive control (T1 order 34), the exact criteria `FX_HelloWorldProject01` returned zero rows (T1 order 46; `09`). The blank inventory had 18 rows. This is the result of the supported query on the visible inventory. It does not establish database uniqueness.
- **Post-reopen single match.** The exact-name query returned one visible row. This is the same supported query. It does not establish database uniqueness beyond that visible result.

### F. Corrections to earlier records made in this audit

- The knowledge-state rows for Save success, create permission, naming rule, Access As persistence, and recovery were stale (for example, "proved only by a successful Save in T2" and "not performed"). They are corrected above.
- The T1 blocker and coordinator-decision bullets are marked superseded.
- The status line now states that T6 is complete.
- The T5 "0 remaining" note is ambiguous as written. Per section D: the corrected-attempt allowance is 0 remaining, and the fresh-snapshot allowance is 1 unused.
- The T4 claim that New IDO… and IDOs became enabled is confirmed by reading `t4-post-save-snapshot.yml` (lines 160–161: no `[disabled]`). Earlier Grep output did not show that line.

### G. Limitations and exclusions

- **Excluded from all conclusions:** independent database durability; cache eviction; cross-session persistence; replay verification.
- **Server response not captured.** The only Save evidence is the settled client state. No message text was returned.
- **Configuration-wide visibility not established.** The header shows only the user and config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. The User editing-scope label does not establish that IDO project creation is User-scoped. Per AGENTS.md, IDO projects are tenant-wide, so other users or configurations may see the project.
- **Access As `G6R`** is the displayed value. Its authority was not reviewed, and it was never entered or overridden by the worker.
- **Create permission** is inferred from the absence of a denial (UI level), not from a permissions view.
- **Naming rule** for the underscore is unresolved beyond the absence of a rejection.

### H. Files written by this audit

- `experiments/EXP-039-single-fx-ido-project-creation-and-recovery.md` (status line; knowledge rows; superseded T1 bullet; this T6 section).
- `evidence/EXP-039/t1-evidence-index.md` (T6 section appended).

Not written: the controller-generated `evidence/EXP-039/harness-audit-T1.md` to `harness-audit-T5.md`. Also not written: the 16 browser-tool files this run created under `evidence/playwright/` (11 `page-2026-10-10T03-*.yml` and 5 `console-2026-10-10T03-*.log`); see T7 for the provenance and the AC-8 decision. They are outside `evidence/EXP-039/`, were produced by the browser tool during this run when snapshots were taken without a filename, and are referenced in `t1-evidence-index.md` (T1 section). The coordinator should decide whether they belong to this experiment's record.

### I. Observed-only outcome recommendation

The create, single Save, close, reopen and exact-name recovery sequence completed in one client session. Save was not refused, the three values were unchanged after reopen, and the exact-name query returned one matching row. **Record as observed, UI level, single run.** Do not mark any procedure verified or replay-verified. Remaining open items: server response, database durability, cross-session persistence, configuration-wide visibility, the authority of Access As `G6R`, the underscore naming rule, and the first post-reopen FiP ambiguity. Creation permission is supported only by the absence of a denial. The project remains in place and undeleted; deletion requires separate operator authorization and is not part of this experiment's outcome.

## T7 — Authoritative AC-1 to AC-8 reassessment (documentation and read-only inspection; no browser operation)

Task: T7 (`task_message_id` aa8d779b-d2be-40cf-8a9f-5758067f8848, cycle 6). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Scope: correct the T6 provisional AC mapping using the authoritative definitions supplied in the T7 instruction; read-only repository inspection; no browser action; no Mongoose change; no delete, move, or edit of any `evidence/playwright/` file.
Files written by T7: this record and `evidence/EXP-039/t1-evidence-index.md` only.
**Superseded in part by T8** (section at the end): the AC-1 and AC-8 rows, the Outcome bullets, and the blocker list below. The T8 matrix is authoritative.

### Authoritative definitions (T7 instruction)

- AC-1: documented IDO project prerequisite; AGENTS.md authorization; EXP-038 findings; authenticated configuration; usable maintenance UI; visible permissions and New/Save controls; User editing scope vs. possibly configuration-wide project creation.
- AC-2: proven positive-control FiP query plus zero exact and case-insensitive target-name collisions before mutation, with settled results.
- AC-3: pre-creation Project Name, Description, and Access As inspection; initial values; naming restrictions or prefix; usability of the exact name.
- AC-4: exactly one project New; at most one Save; correct saved identity, description, and Access As; clean post-Save UI.
- AC-5: exactly one ordinary close and one reopen; selected recovered target; three values match; clean UI.
- AC-6: final inventory or verified lookup showing exactly one target record; object and generated-dependency audit; no unrelated creation.
- AC-7: final reconciled operation counts, permissions, errors, recovery usage, and side effects.
- AC-8: final evidence matrix for AC-1 to AC-7; proof from actual screenshots and snapshots; changes confined to this record and `evidence/EXP-039/`; observed-only classification; explicit durability, cache, and replay limitations.

### Matrix

| AC | Assessment | Proof (repo-relative) | Gap or limitation |
|---|---|---|---|
| **AC-1** | **PARTIAL at T7; superseded by T8 (PASS-LIMITED)** | AGENTS.md lines 31–44 authorize FX_-prefixed IDO projects in the demo tenant; they are tenant-wide and must be recorded. EXP-038 record: line 41 (IDO Projects read-only, New IDO… and IDOs disabled); line 48 (no prefix pre-filled; Access As not observable on new records); line 61 (no control query); line 64 (naming rule untested); line 117 (Filter in Place unresolved); line 5 (EXP-039 assigned save rights, naming rule, and Access As prefix). Configuration: header `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in `evidence/EXP-039/00-t1-start-ido-projects-inherited-criteria.png` and later captures; `environments/current-environment.md` line 56 records the same config combo. Maintenance UI and controls: `00`, `03`, `t1-final-state-snapshot.yml`, `t3-unsaved-new-record-snapshot.yml` (New enabled; Save disabled until edited; New IDO… and IDOs disabled on the new record). Site Developer role: `environments/current-environment.md` line 51 and `experiments/EXP-001-environment-fingerprint.md` line 51 (Designer About). | (1) **No local source documents creating an IDO project.** `docs/mongoose/guides/ido-development.md` line 17 documents New IDO from the IDO Projects or IDOs form, which creates an IDO. Line 22 presupposes an existing project. `docs/mongoose/guides/deployment.md` line 246 is import verification only. The only creation sequence is `docs/mongoose/transcripts/hello-world-pt1.md` section 3 (lines 65–74), transcript-derived and unverified. It is not treated as a documented prerequisite. (2) Site Developer comes from EXP-001 only and was not re-verified in EXP-039. The portal tab label "System Administrator" is not a Mongoose role observation. (3) Editing scope was not re-verified; the header does not show it. (4) Create permission is shown only by the absence of a denial on the one Save. (5) Config-group casing differs in `current-environment.md` line 40 (`_Mongoose_DEM`) from the header and line 56 (`MONGOOSE_DEM_DEFAULT`); the header matches line 56. |
| **AC-2** | **PASS-LIMITED** | Positive control passed: `05-t1-positive-control-criteria-sdtest-entered.png`, `06-t1-positive-control-sdtest-f4-result.png` (one row SDTest / SDTest IDO / G6R after F4); repeated `12`, `13`, `t2-baseline-sdtest-snapshot.yml`. Exact target query: `08-t1-target-criteria-entered-before-f4.png`, `09-t1-target-f4-result-zero-rows.png` (no populated row; blank add-record placeholder). Complete visible inventory before creation: `03-t1-blank-criteria-f4-inventory.png` (18 populated rows, list ends at row 18). Post-creation corroboration: `t5-reopened-pre-criteria-snapshot.yml` lists 19 rows, Get More Rows `[disabled]` (line 69): the same 18 names plus FX_HelloWorldProject01 only (gridcell lines 218–328). | (1) The exact-name query was not tested for case sensitivity. Case-insensitive absence rests on the visible inventory, not on a case-insensitive query. (2) The 18 names were transcribed from an inline snapshot that was not saved; pre-creation completeness rests on screenshot `03` and the Get More Rows state in that inline snapshot. (3) Zero rows is read from the absence of populated rows beside a blank placeholder. (4) No database-wide absence is claimed. |
| **AC-3** | **PASS-LIMITED** | Pre-entry state: `09` and `t1-final-state-snapshot.yml` (Project Name empty and required; Access As `G6R`, read-only); `15-t3-after-single-new-blank-record.png` (new record row 2 with star; Project Name empty with required asterisk; Description empty; Access As `G6R` greyed). Entry: `16-t3-exact-name-and-description-entered-unsaved.png`, `t3-unsaved-new-record-snapshot.yml` (Project Name `FX_HelloWorldProject01`, Description `Factory Hello World test project`, Access As `G6R`; no validation message). Acceptance at Save: `17`, `18`, `t4-post-save-snapshot.yml`. | (1) No naming rule, prefix, or validation text was displayed at any point. (2) Underscore acceptance rests on the absence of a UI rejection, not on a documented rule. (3) No saved snapshot of the blank new record exists before entry (screenshot `15` only). (4) Access As `G6R` is the displayed default; its authority was not reviewed. |
| **AC-4** | **PASS** (UI level only) | New = 1: `harness-audit-T3.md` order 4 (toolbar New, ref `f1e29`). Save = 1: `harness-audit-T4.md` order 4 (toolbar Save, ref `f1e28`); no other Save in any audit. Post-save: `18-t4-post-save-settled-ui.png` (new-record star cleared; Save greyed; values as saved); `t4-post-save-snapshot.yml` (Save `[disabled] [active]`; grid row `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; textboxes match; no alert, dialog, or error nodes). | Settled client state only. No success text, server response, or database confirmation was captured. |
| **AC-5** | **PASS** (UI level, same session) | Close = 1: `harness-audit-T5.md` order 5; `20-t5-after-single-close-ido-projects.png` (IDO Projects tab gone; Sql Tables the only tab; no prompt). Reopen = 1: audit orders 9 (Open), 11 (IdoProjects row), 13 (OK). Recovered target selected through the exact query: `25-t5-recovered-f4-result.png` (row 1 FX_HelloWorldProject01; detail Project Name / Description / Access As); `t5-recovered-query-snapshot.yml` (one data row; textboxes match; Save `[disabled]`; no dialog). Comparison with T4 baseline: all three values match. | The reopen auto-loaded an unfiltered 19-row list with AppBuilder auto-selected. The recovered target was selected only by the exact query. The first post-reopen FiP click did not show query mode; its cause is not established (record T6 section E). Sql Tables became active automatically. No screenshot of the Select Form dialog exists (snapshot only). Recovery is same-session UI only. |
| **AC-6** | **PASS-LIMITED** | Verified lookup: exact-name F4 after reopen returned one data row (`t5-recovered-query-snapshot.yml`; `25`). Unfiltered visible listing: `t5-reopened-pre-criteria-snapshot.yml` shows 19 rows, Get More Rows `[disabled]`, exactly one `FX_HelloWorldProject01` gridcell (line 224), and the other 18 names identical to the T1 inventory. Object audit: `harness-audit-T1` through `T5` list no create action beyond one toolbar New; no New IDO…, IDOs, wizard, Delete, Refresh, check-in, or check-out click; Sql Tables not clicked. | Database-wide uniqueness is **not** claimed; the supported UI shows one visible row. Generated dependencies (IDOs, tables, forms, child rows) were not inspected. None was observed in the UI, and their absence is not assumed. "No unrelated creation" is judged from browser actions only (no Designer or internal check). |
| **AC-7** | **PASS-LIMITED** | Counts recomputed from the audit logs and matched to the task sections (see "Reconciled counts" below). Errors: none in browser actions (T2–T5 audits record zero errors; T1 has one `Read` error, order 2, reading a record file before it existed). Recovery usage: fresh recovery snapshots 0 of 1 used; corrected visible inspection 1 of 1 used (T5 order 21). Permissions: visible labels only (see AC-1). | Permissions and the Site Developer role were not re-verified. The "corrected visible inspection" is a corrected toolbar FiP click, counted as one per the brief. Side effects are listed in the task sections (Tab moved focus to the portal shell icon in T3; criteria carried over; placeholder cleared without discard; New IDO… and IDOs enabled on saved rows and never pressed; Sql Tables became active after close; first post-reopen FiP click ambiguous). |
| **AC-8** | **NOT SATISFIED at T7; superseded by T8 (PASS)** | Matrix above with repo-relative proof paths; each cited image was viewed when written (T7 did not re-view them). Observed-only classification and exclusions are stated in section "Outcome" below. **Boundary:** 16 files newly created under `evidence/playwright/` during this run are outside the permitted paths (see "Provenance" below). | Under the brief, files outside the permitted paths mean AC-8 is not satisfied until the operator decides. This task did not waive, delete, or move them. |

Assessment key: **PASS** = criterion met on existing evidence. **PASS-LIMITED** = met, with the stated limitation. **PARTIAL** = some sub-criteria lack evidence. **NOT SATISFIED** = not met or boundary unresolved.

### Reconciled counts (recomputed from the harness audit logs)

| Operation | Count | Audit source |
|---|---|---|
| Toolbar New | **1** | T3 order 4 |
| Save attempts | **1** | T4 order 4 |
| IDO Projects close | **1** | T5 order 5 |
| Reopen (Open, IdoProjects row, OK) | **1** | T5 orders 9, 11, 13 |
| Filter-in-Place toolbar clicks | **5** | T1 orders 26, 38; T2 order 4; T5 orders 15, 21 |
| Criteria entries | **5** | T1 orders 15, 30, 42; T2 order 8; T5 order 25 |
| F4 executions | **5** | T1 orders 22, 34, 46; T2 order 12; T5 order 29 |
| Field entries (name, description) | **2** | T3 orders 8, 11 |
| Tab commits | **7** | T1 orders 19, 31, 43; T2 order 9; T3 orders 9, 12; T5 order 26 |
| Fill-form calls (total) | **7** | Equals criteria 5 + field 2; matches the harness flag count |
| Corrected visible inspection | **1** | T5 order 21 (corrected FiP toolbar click) |
| Fresh recovery snapshots | **0** | No ref-not-found error in T2–T5 audits |
| Delete, Refresh, New IDO…, IDOs, wizard | **0** | No such click in any audit |

These match the T1–T5 task sections and the T6 section D table.

### Provenance of `evidence/playwright/` files (read-only investigation)

- **Ignore status.** `.gitignore` line 10 ignores `evidence/playwright/`; line 11 ignores `.playwright-mcp/`. `.git/index` could not be read (permission denied), so force-added tracking cannot be ruled out. The ignore rule indicates the files are untracked and ignored.
- **Newly created in this run.** Sixteen files carry run-window timestamps (03:12–03:22, after the EXP-038 run's 02:xx files): 11 `page-2026-10-10T03-*.yml` and 5 `console-2026-10-10T03-*.log` (`03-12-16-906Z`, `03-16-27-332Z`, `03-18-25-812Z`, `03-20-06-210Z`, `03-21-43-409Z`). Files `01-*` and `02-*` in the same folder predate this run.
- **Page files map one-to-one to click results in this run.** Each click returned a snapshot path in the browser-tool result. Mapping by timestamp and action sequence: `03-13-17` ↔ T1 FiP click (order 26); `03-13-40` ↔ T1 FiP click (order 38); `03-16-34` ↔ T2 FiP click (order 4); `03-18-33` ↔ T3 New (order 4); `03-20-12` ↔ T4 Save (order 4); `03-21-50` ↔ T5 close (order 5); `03-21-57` ↔ T5 Open (order 9); `03-22-01` ↔ T5 row click (order 11); `03-22-06` ↔ T5 OK (order 13); `03-22-11` ↔ T5 FiP click (order 15); `03-22-29` ↔ T5 corrected FiP click (order 21). Eleven clicks, eleven files. The audit logs do not record result paths, so the mapping rests on the path returned in each tool result and on timing.
- **Writer.** No worker Write or Edit targeted these paths. The browser tool wrote them as part of returning snapshots. The folder is the tool's standing output location.
- **Status.** Newly created during the run, outside the permitted paths, git-ignored. Under the brief's rule this is an unresolved boundary item, and AC-8 is marked NOT SATISFIED.

### Browser-tool interpretation: `browser_fill_form`

The harness flagged `browser_fill_form` (7 calls) as a prohibited tool. Its audit logs list only `mcp__playwright__browser_fill_form`. No `browser_evaluate` or run-code tool appears in any of the five audits, and no evaluate call was made. The "Ran Playwright code" text is output from the tool's own locator-based fill (for example, a textbox fill by accessible name). It is not code I wrote. Per the T7 instruction, this is treated as a supported rendered-UI interaction. The flag count stays on record.

### Outcome

- **Observed-only classification:** the single-run sequence (one New, one Save, one close, one reopen, one exact-name query returning one matching row, all values matching) is recorded as observed UI-level persistence within one client session.
- **Excluded from all conclusions:** independent database durability; cache eviction; cross-session persistence; replay verification. No server response was captured; the Save evidence is the settled client state only.
- **[Superseded by T8: all eight checks satisfied; see T8.]** Previously, at T7: acceptance was not complete. AC-1 is PARTIAL (no documented creation procedure; Site Developer and scope not re-verified). AC-8 is NOT SATISFIED (boundary decision pending). AC-2 to AC-7 are met with the limitations listed above.
- **Accepted outcome justified without additional work?** Recording the observed-only outcome is justified now. Full acceptance is not, because two items need operator decisions, not browser work.

### Blockers and operator decisions

1. **AC-8 boundary (resolved in T8 by operator-confirmed facts).** At T7 this asked the operator to decide whether the 16 git-ignored `evidence/playwright/` files created by the browser tool in this run are permitted (for example, by an explicit exception) or must be relocated or removed by the operator. This task did not delete or move them.
2. **AC-1 documentation gap (resolved in T8 by citing the tutorial as a labelled, unverified source).** At T7 this asked the operator to either supply a verified local source for creating an IDO project, or explicitly accept the unverified tutorial sequence as a labelled candidate. The worker did not infer a source.
3. **AC-1 scope and role.** Verifying Site Developer and the editing scope would need a separately authorized step (the Designer scope flow). Not performed.
4. **Deletion** of the project is not part of this outcome and needs separate authorization.
5. The brief's AC numbering is now the authoritative set. The earlier T6 mapping was superseded.

Final browser state, as recorded at the end of T5 and not re-inspected in T7: IDO Projects open and clean, row for `FX_HelloWorldProject01` displayed, Save disabled, no dialog, no pending change.

## T8 — Final documentation correction (authoritative AC-1 to AC-8 matrix; no browser operation; no Mongoose change)

Task: T8 (`task_message_id` 0668a589-6b23-4280-923d-2ade2ab0ccfd, cycle 9). Worker session 8f70047b-ad96-4a4f-9df6-ee62d72d00c5.
Scope: correct the AC matrix against the original definitions and existing evidence. No browser tool, no Mongoose change, no project change, no cleanup, no delete, move, or edit of any file under `evidence/playwright/`.
Repository files written by T8: this record and `evidence/EXP-039/t1-evidence-index.md` only.

### 1. Source status of the documented project-creation sequence (AC-1)

- **IDO prerequisite.** `docs/mongoose/guides/ido-development.md`, "Adding an IDO" (lines 15–22), documents creating an IDO from the IDO Projects or IDOs form, and that the IDO's Project Name selects an **existing** IDO project. It does not document creating the project itself. The guide's own header records its trust as "unverified (Infor documentation; not yet confirmed in this environment)".
- **EXP-038.** `experiments/EXP-038-hello-world-part-1-fx-sql-table-and-ido-creation-f.md` lines 41–48: IDO Projects read-only; naming rule and Access As for new records untested. Line 5 assigned the project-creation step (save rights, naming rule, Access As) to EXP-039. Line 61: no control query had been run in EXP-038; EXP-039 supplied it (T1 positive control).
- **Project-creation sequence (tutorial).** `docs/mongoose/transcripts/hello-world-pt1.md`, section "Create an IDO Projects shortcut and project (03:30–04:27)", steps 3 and 4: "3. Query existing projects using Filter-in-Place / **F4**." and "4. Choose the toolbar **New** action, observe a **blue star** denoting a new grid row, enter project name `Hello World`, then **Save**." **Source status: candidate procedure, unverified.** The transcript is speech-to-text; its own note says the raw source is "not a screen capture or verified click log". The same section states that creating `Hello World` is "a demonstration, not a permitted mutation target". The EXP-039 name `FX_HelloWorldProject01` is the FX_ adaptation.
- **Steps 1–2 of that section were not performed.** Step 1 (right-click New Shortcut under My Folders) and step 2 (open the shortcut) were not needed: IDO Projects was reached through the inherited surface from EXP-038 and, for the recovery, through the supported Select Form workflow (T5). The transcript itself labels the shortcut a personal-setting mutation, so it was avoided.
- **Directly observed UI operations, distinct from the tutorial:** Filter-in-Place by toolbar and F4 (T1, T2, T5); toolbar New (T3); Project Name and Description entry (T3); toolbar Save (T4); toolbar Open → Select Form → IdoProjects → OK (T5). The tutorial supplies only the step order; each operation above was observed in this run.

### 2. Authorization, role, configuration, and scope

- **FX_ authorization.** `AGENTS.md` "Scope extension: Infor Hello World tutorial" (lines 31–44, operator decision 2026-10-10): FX_-prefixed IDO projects are permitted in this demo tenant only; the objects are tenant-wide, not User-scoped, and must be recorded. The name `FX_HelloWorldProject01` meets the FX_ rule.
- **Configuration.** The header shows config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (captures `00`, `14`–`18`, `25`). `environments/current-environment.md` line 56 lists the same single config option.
- **Visible maintenance UI and controls.** Toolbar New, Save, Filter in Place, and the tab close control; Project Name, Description, and Access As fields; New IDO… and IDOs disabled on the new record and never pressed (`00`, `03`, `15`, `16`, `t3-unsaved-new-record-snapshot.yml`, `t4-post-save-snapshot.yml`).
- **Role (historical, not re-verified).** `environments/current-environment.md` line 51 and `experiments/EXP-001-environment-fingerprint.md` line 51 record Mongoose role **Site Developer** (Designer About) and "edits create user versions for user anton.ramos@3mworks.com.ph". This is EXP-001 evidence. EXP-039 did not re-verify it. The portal tab label "System Administrator" is not a Mongoose role observation.
- **Scope distinction.** The User editing-scope evidence above is historical. **Project-level User isolation is unproven:** nothing in this run shows that IDO project creation is User-scoped. AGENTS.md treats IDO projects as tenant-wide. Configuration-wide or other-user visibility is **not established**.

### 3. Authoritative AC-1 to AC-8 matrix

Assessment key: **PASS** = criterion met on existing evidence. **PASS-LIMITED** = criterion met, with the stated limitation (accepted as satisfied for this matrix). Every assessment is observed-only, at UI level, single run.

| AC (original definition) | Status | Evidence (repo-relative; `evidence/EXP-039/` unless noted) | Limitation |
|---|---|---|---|
| **AC-1** prerequisite documentation; AGENTS.md authorization; EXP-038 findings; authenticated configuration; usable maintenance UI; visible permissions and New/Save controls; User scope vs. configuration-wide creation | **PASS-LIMITED** | Prerequisite: section 1 (ido-development.md lines 15–22; EXP-038 lines 5, 41–48, 61; hello-world-pt1.md section 3, steps 3–4, unverified). Authorization: AGENTS.md lines 31–44. Configuration: `00`; `environments/current-environment.md` line 56. Maintenance UI and controls: `00`, `03`, `15`, `t3-unsaved-new-record-snapshot.yml`. Role: `environments/current-environment.md` line 51; `experiments/EXP-001-environment-fingerprint.md` line 51 (historical). Scope: section 2. | The creation sequence is supported only by an unverified transcript, labelled as such. Site Developer and editing scope were not re-verified in this run. Create permission is shown only by the absence of a denial on the one Save. Project-level User isolation is unproven; configuration-wide visibility is not established. |
| **AC-2** proven positive-control FiP query; zero exact and case-insensitive collisions before mutation; settled results | **PASS-LIMITED** | Positive control: `05`, `06` (one row SDTest / SDTest IDO / G6R); repeated in `12`, `13`, `t2-baseline-sdtest-snapshot.yml`. Exact target query: `08`, `09` (no populated row; blank add-record placeholder). Complete visible inventory before creation: `03` (18 populated rows; the list ends at row 18 with no further rows beneath). Corroboration after creation: `t5-reopened-pre-criteria-snapshot.yml` (19 rows; Get More Rows disabled; the 18 names plus the target). | Case-insensitive absence rests on the complete visible inventory, not on a case-insensitive query; the exact query's case sensitivity was not tested. The 18-name transcription came from an unsaved inline snapshot, matched by `03`. No database-wide absence is claimed. |
| **AC-3** pre-creation Project Name, Description, and Access As inspection; initial values; naming restrictions or prefix; usability of the exact name | **PASS-LIMITED** | Initial state: `09`, `t1-final-state-snapshot.yml` (name empty and required; Access As `G6R` read-only). New record: `15` (star; name required; Description empty; Access As `G6R` greyed). Entry: `16`, `t3-unsaved-new-record-snapshot.yml` (exact name and description; no validation message). Save: `17`, `18`, `t4-post-save-snapshot.yml`. | No naming rule, prefix, or validation text was displayed at any point, so the rule itself is unobserved. The exact name was accepted at entry and retained after Save; underscore acceptance rests on the absence of rejection. Access As `G6R` is the displayed default; its authority was not reviewed. No saved snapshot of the blank record exists before entry (`15` is a screenshot). |
| **AC-4** exactly one project New; at most one Save; correct saved identity, description, and Access As; clean post-Save UI | **PASS** (UI level) | New = 1 (`harness-audit-T3.md` order 4). Save = 1 (`harness-audit-T4.md` order 4). `17`, `18`, `t4-post-save-snapshot.yml` (Save `[disabled] [active]`; row `FX_HelloWorldProject01` / `Factory Hello World test project` / `G6R`; no alert, dialog, or error nodes). | Settled client state only. No success text, server response, or database confirmation was captured. |
| **AC-5** exactly one ordinary close and one reopen; selected recovered target; three values match; clean UI | **PASS** (UI level, same session) | Close = 1 (`harness-audit-T5.md` order 5; `19`, `20`). Reopen = 1 (orders 9, 11, 13). Recovered target by exact query: `24`, `25`, `t5-recovered-query-snapshot.yml` (one data row; Project Name, Description, Access As match the T4 baseline; Save `[disabled]`; no dialog). | The reopen auto-listed 19 unfiltered rows with AppBuilder auto-selected; the target was selected only by the exact query. The first post-reopen FiP click did not show query mode; its cause is not established (T6 section E). No Select Form dialog screenshot exists (snapshot only). |
| **AC-6** final inventory or verified lookup showing exactly one target record; object and generated-dependency audit; no unrelated creation | **PASS-LIMITED** | Verified exact lookup after reopen: one data row (`25`; `t5-recovered-query-snapshot.yml`). Unfiltered visible listing: `t5-reopened-pre-criteria-snapshot.yml` (19 rows; one `FX_HelloWorldProject01` gridcell at line 224; Get More Rows disabled at line 69). Object audit: section "Object audit" (T6 section C); `harness-audit-T1` to `T5` show no create action beyond one toolbar New and no IDO wizard, Delete, Refresh, check-in, or check-out. | Database-wide uniqueness is **not** claimed; the supported UI shows one visible row. Generated dependencies (IDOs, tables, forms, child rows) were not inspected; none was seen in the UI, and their absence is not assumed. "No unrelated creation" is judged from browser actions, not from an internal check. |
| **AC-7** final reconciled operation counts; permissions; errors; recovery usage; side effects | **PASS-LIMITED** | Reconciled counts (below). Errors: none in browser actions; one T1 audit `Read` error (order 2) read a record file before it existed. Recovery: 0 fresh recovery snapshots used; 1 corrected visible inspection used. Side effects: section "Side effects" in T1–T5 and "Limitations". | Permissions are visible labels and the absence of a denial only. Corrected action is a toolbar FiP click, counted as the one correction. |
| **AC-8** final evidence matrix for AC-1 to AC-7; proof from actual captures; changes confined to this record and `evidence/EXP-039/`; observed-only classification; explicit durability, cache, and replay limits | **PASS** | This matrix; cited captures were viewed when written (T1–T5); observed-only classification (section "Outcome" in T7, and below); exclusions (below). Boundary facts (section 4 below). | None outstanding. The boundary facts rest on operator confirmation (see section 4). |

Reconciled counts (unchanged from T7; re-verified against the audit logs): New 1; Save attempts 1; ordinary IDO Projects close 1; reopen 1; FiP toolbar clicks 5; criteria entries 5; F4 executions 5; corrected visible inspections 1; fresh recovery snapshots 0; Delete 0; Refresh 0; New IDO… 0; IDOs 0; wizard 0. No unrelated creation.

### 4. AC-8 boundary: operator-confirmed facts

The following are confirmed by the operator and are **attributed to the operator**. The worker did not independently run `git status` and could not read `.git/index` (permission denied in T7).

1. `evidence/playwright/` is the Playwright MCP server's configured `--output-dir`.
2. The sixteen page and console outputs in that folder were generated automatically by the MCP server during this run. Their run-window timestamps (03:12–03:22) and the one-to-one mapping to eleven click results are recorded in T7. Five console files and eleven page files.
3. `.gitignore` excludes the directory. The worker verified this: `.gitignore` line 10 reads `evidence/playwright/`.
4. The operator reports that Git status shows only `evidence/EXP-039/` and this experiment record as new repository changes.

**Classification.** The sixteen files are **ignored tool outputs**, not additional repository changes. They are left untouched. No waiver is needed: the operator-confirmed facts show the repository boundary was respected. The AC-8 status is therefore PASS.

### 5. Outcome recommendation

- **All eight checks are satisfied** (AC-1 PASS-LIMITED; AC-2, AC-3, AC-6, AC-7 PASS-LIMITED; AC-4, AC-5 PASS at UI level; AC-8 PASS).
- **Recommended outcome: accepted at observed same-session UI level.** One run, one New, one Save, one close, one reopen, and one exact-name query returning one row whose three values match the post-Save baseline (`FX_HelloWorldProject01`, `Factory Hello World test project`, `G6R`).
- **Excluded from all conclusions:** independent database durability; cache eviction; cross-session persistence; replay verification; other-user or configuration-wide visibility. No server response was captured for Save.
- **Standing limitations recorded, not blocking:** creation permission is shown only by the absence of a denial; Access As `G6R` is the displayed value and its authority was not reviewed; the underscore naming rule is unobserved beyond the absence of rejection; the first post-reopen FiP click's effect is unresolved; the tutorial sequence is an unverified candidate source; Site Developer and editing scope are historical (EXP-001), not re-verified.
- **No blocker for the accepted outcome.** Deleting the project is not part of this outcome and needs separate operator authorization. The project remains in place and undeleted.

### 6. Final browser state

Recorded at the end of T5 and not re-inspected in T8: IDO Projects open and clean, with the `FX_HelloWorldProject01` row displayed, Save disabled, no dialog, no pending change.
