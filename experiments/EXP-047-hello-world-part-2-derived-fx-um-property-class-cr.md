# EXP-047 — Hello World Part 2: Derived FX_UM Property Class Creation and Recovery

**Final status: BLOCKED at AC-2. The FX_UM creation gate is NOT established.** The FX_UMBase positive control never ran, because a `Session Expired` alertdialog appeared in the Web Client after the FX_UM query. **No FX_UM property class was created.** No New, no Save, no Form close or reopen, no recovery query, no checkout or check-in, no Designer action. AC-4 to AC-10 were **not executed**. The blank add-mode placeholder row left by the zero-row query is untouched, and the `Session Expired` dialog is still open (OK not clicked, per the brief's authentication rule).

Classification: **observed only (pre-expiry, same session, UI level). NOT replay_verified.** Nothing here establishes metadata recovery, database persistence, cross-session persistence, or application of FX_UM to an IDO property.

## Run identity

- Run `R-20261011-002849-Y91n`, experiment EXP-047. Worker session `d893976e-0509-4b3e-9675-bf0c587dadfd` (both tasks).
- **Cycle 0, task T1** (task_message_id `1db562da-2ec7-447f-beea-6f122186292e`): read-only preflight, the FX_UM absence query and the FX_UMBase baseline. Browser actions were taken only in T1.
- **Cycle 1, task T2** (task_message_id `4ae00a96-d400-499b-92b4-1e44c7f6d8d8`): documentation-only finalization. **No browser calls** were made. The `Session Expired` dialog was not dismissed, the placeholder was not touched, and no metadata was created.
- Run date 2026-10-11 (system date). Mongoose Revision Date values read `10/10/2026`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Identity bar user `anton.ramos@3mworks.com.ph` (observed in `t1-01`). The "Site Developer" context named in the brief was not visible and was not verified.
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User.
- Evidence directory `evidence/EXP-047/`.
- Predecessors read before any browser action: EXP-043 (FX_UMBase creation; FiP absence method; the zero-row placeholder behaviour; check-out left with the operator), EXP-044 (IDO collection gate; lowercase hook denial; Designer toolbar identity conflict), EXP-045 (FX_UMs Form; `FX_sUM` caption; Select Form gate), EXP-046 (FX_UMs record entry, Save and reopen method). Predecessor records were read in part (long files; identity, method and baseline sections). `tools/` was not read.

## Final acceptance matrix

| AC | Final status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Preflight | **PARTIAL. Observed before the expiry only.** Authenticated Web Client; runtime tab `Property Classes` selected; identity by tab heading and URL `favoriteContext=IdoPropertyClasses`; Save disabled; no unexpected prompt before the FX_UM query; vendor Form definition not opened in Designer and not edited. | `t1-01`; snapshot after the tab select (operation 2) | Pre-expiry only. Authentication state after the expiry was not re-verified (no browser calls permitted in T2). Site Developer context not verified. Identity was not re-established against the Select Form route used in EXP-043. |
| **AC-2** Target absence | **NOT ESTABLISHED (blocked).** The plain-text query `FX_UM` returned zero data rows (placeholder only). The required FX_UMBase positive control **did not run**. | `t1-02` (retained criterion `FX_UMBase` replaced); `t1-03` (criteria `FX_UM` committed before F4); `t1-04` (after one F4: placeholder only); targeted grid snapshot (operation 9) | Positive control missing, so filter and retrieval were not demonstrated in this session. The F4 response was not independently confirmed as server-complete. Prefix (wildcard) behaviour not tested. Case variants not typed (EXP-044 operator decision). |
| **AC-3** Base-class baseline | **OBSERVED (pre-expiry, read-only).** FX_UMBase: Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM`; checked out to the operator (Check In and Undo Check Out enabled). | `t1-01` | Browse-mode values as displayed. Locked By is clipped in the field. No post-expiry re-read. No class was created at this stage. |
| **AC-4** Derived-class configuration | **NOT EXECUTED.** No New; no row configured. | — | — |
| **AC-5** Inheritance and override indicators | **NOT EXECUTED** for the new record. The asterisk states of the existing FX_UMBase browse record and of the add-mode placeholder were recorded (see Observations); their meaning is **unresolved**. | `t1-01`, `t1-04` | No new FX_UM record exists to inspect. |
| **AC-6** Single Save | **NOT EXECUTED.** Save was never invoked. | — | — |
| **AC-7** Runtime lifecycle (close, reopen) | **NOT EXECUTED.** The Property Classes Form was not closed or reopened. | — | — |
| **AC-8** Recovery | **NOT EXECUTED.** No post-reopen query. | — | — |
| **AC-9** Preservation | **PARTIAL.** No supported mutation of FX_UMBase, the FX_UMs IDO, its data, strings, Forms or other objects was performed in T1 (no edit, no Save, no New, no checkout change; the action log below supports this). FX_UMBase was not re-read after the expiry. | `t1-01` (pre-expiry); action log | Qualified: this is a T1 action-log and screenshot inference, not an independent database or metadata check. |
| **AC-10** Final audit | **PARTIAL.** T1 controller audit reconciled (below). Creation, Save, close, reopen and recovery counts are zero by design of the block. Classification: observed only. | Controller audit (operation table); cleanup inventory | No claim of metadata recovery, database durability, cross-session persistence, replay verification, or application of FX_UM to an IDO property. |

## Blocker (stop condition)

- **Event.** After the second Filter-in-Place click (operation 10), the Web Client showed an in-page `alertdialog "Session Expired"` with text `Your session has expired.` and a single `OK` button (`f1e1083`, in alertdialog `f1e1079`). It is visible in `t1-05`, and `find` "session" confirmed it.
- **Timing.** The dialog was first seen in `t1-05`, taken after the second FiP click and the `find` for `Class Name:`. The exact moment it appeared is **not established**. It may have arisen before the FX_UM F4 or after it. Whether the F4 response was server-complete therefore cannot be proven from this run.
- **Action taken.** None. OK was **not** clicked. The worker did not sign in, reload, navigate, or establish a replacement session. No data was typed after the dialog appeared. No Save was attempted.
- **State left behind.** The Property Classes runtime tab has one **unsaved add-mode placeholder row** (blue star, blank Class Name, Locked By = operator). The zero-row FiP query created it, as in EXP-043. Save is disabled. It was not typed into, saved, or discarded. The `Session Expired` dialog remains open. The brief forbids clicking through an authentication challenge, so it is left open for the operator.
- **Consequence.** AC-2 positive control is missing. The creation gate is not established, so creation is prohibited and was not performed.

## Observations (T1, pre-expiry)

### Absence query (AC-2)

- **Query.** Plain text `FX_UM` in the Class Name criteria, no wildcard and no lowercase variant. Retained `FX_UMBase` criterion from an earlier session was replaced before the query. Other criteria blank (`t1-03`).
- **Result.** Zero data rows. One blue-star add-mode placeholder row (Class Name blank). Status `Base Class (IDO Property Classes 1 of 1)`; the count token counts only the placeholder. The EXP-043 T1 zero-row behaviour is repeated.
- **Matching rule.** `FX_UMBase` exists (`t1-01`) and was **not** returned by plain `FX_UM`. This is consistent with exact matching. It is **not** a proof of exact matching. No prefix query (`FX_UM*`) was run here, and EXP-043 recorded the wildcard form separately.
- **Positive control.** Not run (blocked). This is the gap that prevents AC-2 from passing.

### FX_UMBase baseline (AC-3, read-only, pre-expiry)

| Attribute | Observed (browse record, `t1-01`) |
| --- | --- |
| Class Name | `FX_UMBase` (read-only key) |
| Base Class | blank |
| Description | blank |
| Revision No / Revision Date | `1` / `10/10/2026` |
| Locked By | `anton.ramos@3mworks.com.ph` (clipped in the field) |
| Access As | `G6R` |
| Data Type / Length | `String` / `10` |
| Decimal Position, Default Value | blank |
| Column Data Type | `nvarchar` |
| Required, Read Only Record, Validate Immediately | unchecked |
| Label String ID | `FX_sUM` |
| Domain IDO Name, Domain Property, Domain List Properties, Domain Additional Settings | blank |
| Checkout indication | **Checked out to the operator** (Check In and Undo Check Out enabled). Not changed. |

Consistent with EXP-045 T1 (same values read then). The blank Data Type, Length and Column Data Type cells on the FiP placeholder are an add-mode display state, not a change to FX_UMBase; nothing was saved or edited on FX_UMBase in T1.

### Asterisk markers (observed; meaning unresolved)

- **FX_UMBase browse record (`t1-01`).** Form labels `*Data Type:`, `*Length:`, `*Column Data Type:` and `*Label String ID:` show a leading asterisk. Grid headers `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`, `* Revision No` and `* Revision Date` show one. The form labels for Revision No and Revision Date show **no** asterisk in `t1-01`; the marker appears on their grid headers only.
- **Add-mode placeholder (`t1-04`).** `Class Name:` shows a red asterisk. The labels `Data Type:`, `Length:`, `Column Data Type:` and `Label String ID:` show **no** asterisk. Grid header `* Class Name`.
- **Interpretation.** The markers differ by record state. Their meaning (required, override or other) is **not established**. None is treated here as an override indicator. AC-5 for a new FX_UM record is not executed.

## Operations (T1, in order, controller audit)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list; full snapshot of tab 0 | Mongoose tab selected; identity bar `DEM`; runtime tabs `FX_HelloWorld01`, `Property Classes` (background), `IDOs`, `Sql Tables`, `Sql Columns`, `FX_UMs` (selected). No dialog, no banner, Save disabled. | snapshot (tool-generated) |
| 2 | ONE click on runtime tab `Property Classes` (`f1e102`) | Tab selected; URL `favoriteContext=IdoPropertyClasses`. No prompt. | snapshot after the click |
| 3 | Full snapshot of the Property Classes tabpanel | One row `FX_UMBase`, checked out. Status `Base Class (IDO Property Classes 1 of 1)`. Save disabled. | snapshot |
| 4 | Screenshot, baseline | As step 3. | `t1-01` |
| 5 | ONE click on toolbar `Filter in Place` (`f1e38`) | Status `Filter in Place`; retained criterion `FX_UMBase` (selected). | `t1-02` |
| 6 | Plain fill `FX_UM` into Class Name criteria (`f1e542`) | Criteria reads `FX_UM`. | — |
| 7 | ONE Tab (commit) | Criteria echo row `FX_UM`; focus moved to Base Class (untouched). | `t1-03` |
| 8 | ONE F4 (query) | Mode left Filter-in-Place. Zero data rows; one placeholder row. Status `Base Class (IDO Property Classes 1 of 1)`. FiP icon gone from tab. | `t1-04` |
| 9 | Targeted snapshot of grid `f1e224` | One grid row (placeholder); no FX_UM and no FX_UMBase data row. | snapshot |
| 10 | ONE click on toolbar `Filter in Place` (`f1e38`, ref from a fresh `find`), intended as the FX_UMBase positive control | Ref accepted; no error. A `find` for `Class Name:` returned an empty Class Name textbox (`f1e542`). The screenshot showed the `Session Expired` alertdialog. | `t1-05`; `find` "session" |
| 11 | Stop. OK not clicked. Nothing typed after the dialog. | — | — |

Errors: none (no Ref-not-found, no timeout). Recovery snapshots: 0. Corrected inspections: 0 beyond the screenshots and finds above.

## Evidence files

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-047/t1-01-preflight-property-classes-fxumbase-baseline.png` | Property Classes runtime tab selected; identity bar DEM; one row FX_UMBase (checked out, Locked By operator); String, 10, nvarchar, FX_sUM; Check In and Undo Check Out enabled; Save greyed; status `Base Class (IDO Property Classes 1 of 1)` | AC-1 identity and clean state (pre-expiry); AC-3 baseline as displayed | Database state; Locked By clipped; post-expiry state |
| `evidence/EXP-047/t1-02-fip-mode-after-one-click-check.png` | Filter in Place mode; Class Name criteria retains `FX_UMBase` (selected); status `Filter in Place` | A restrictive retained criterion existed and was replaced before the query | Any query result |
| `evidence/EXP-047/t1-03-fip-criteria-FX_UM-committed-before-f4.png` | Class Name criteria `FX_UM`; other criteria blank; echo row `FX_UM`; focus on Base Class | The exact query text, committed before F4 | The F4 result |
| `evidence/EXP-047/t1-04-gate-FX_UM-exact-after-one-f4.png` | After one F4: one blue-star placeholder row with blank Class Name; status `Base Class (IDO Property Classes 1 of 1)`; Save greyed; no FX_UM or FX_UMBase data row | Zero data rows for `FX_UM` in the displayed result (qualified) | Completeness of the collection; the server response; that the query was server-complete |
| `evidence/EXP-047/t1-05-fip-reentered-before-positive-control.png` | `Session Expired` alertdialog ("Your session has expired.", OK) over the Property Classes Form; placeholder row still present | The blocker, and that the positive control did not run | The cause; when the session expired |

Tool-generated snapshot logs (not worker-authored; outside `evidence/EXP-047/`): `evidence\playwright\page-2026-10-10T16-29-16-264Z.yml`, `page-2026-10-10T16-29-31-780Z.yml`, `page-2026-10-10T16-30-09-143Z.yml`.

## Operation counts (T1, reconciled to the action table)

| Operation | Count |
| --- | --- |
| Browser clicks | **3** (1 runtime tab select; 2 toolbar FiP) |
| Plain fills | **1** (`FX_UM`) |
| Tab / F4 key presses | **1 / 1** |
| Full snapshots / targeted snapshots / finds / tab listings | **2 / 1 / 4 / 1** |
| Screenshots (worker-requested PNG) | **5** (`t1-01` to `t1-05`) |
| Save / New / Delete / Refresh / Get More Rows | **0 / 0 / 0 / 0 / 0** |
| Close / reopen of any Mongoose Form | **0 / 0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Class, IDO, Designer, FX_UM creation edits | **0 / 0 / 0 / 0** |
| Dialogs answered (including `Session Expired`) | **0** (1 open, not answered) |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** |
| JavaScript, evaluate, run-code, direct SQL | **0** |
| Login, logout, reload, navigation, session replacement | **0** |
| Portal banner dismissals | **0** (none visible) |

## Repository changes

- `experiments/EXP-047-hello-world-part-2-derived-fx-um-property-class-cr.md`: created in T1; rewritten in T2 (this finalization).
- `evidence/EXP-047/cleanup-inventory.md`: created in T1; updated in T2.
- `evidence/EXP-047/t1-01-…png` to `t1-05-…png`: created in T1 by the browser tool at worker request.
- `evidence/playwright/*.yml`: tool-generated snapshot logs written by the Playwright tool, not worker-authored. They sit outside `evidence/EXP-047/`; the harness should evaluate them for confinement.
- No other repository file was written. `tools/` was not read. No other experiment record, AGENTS.md, recipe or memory file was changed by this task.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Property Classes runtime Form identified as `IdoPropertyClasses` (tab heading and URL) before the expiry | **observed** (one run) |
| FX_UMBase browse values String, 10, nvarchar, FX_sUM; checked out to the operator | **observed** (one run; consistent with EXP-045 T1) |
| Retained FiP criterion `FX_UMBase` replaced before the query | **observed** (one run) |
| Plain `FX_UM` returned zero data rows while `FX_UMBase` exists | **observed** (one run); consistent with exact matching, **not proven** as the matching rule |
| FX_UMBase FiP positive control returned its row | **not run (blocked)** |
| `Session Expired` appeared in the Web Client during T1; cause and exact timing | **observed**; cause **unresolved** |
| Asterisk markers differ by record state; meaning | **observed**; meaning **unresolved** |
| FX_UM absence (creation gate) | **NOT established** |
| Any FX_UM creation, Save, close, reopen, recovery | **not performed** (not replay_verified; nothing to classify beyond the blocked gate) |

## Open questions and next permitted action

1. **Blocker (operator):** the `Session Expired` dialog is open. The operator restores a valid session. The worker must not sign in, reload, or click through the authentication challenge.
2. **Blocker for creation:** the FX_UMBase FiP positive control and a same-session exact FX_UM absence query are both required before creation can be considered. Neither is complete.
3. **Unsaved placeholder:** the add-mode placeholder remains on the Property Classes Form. A later coordinator-authorized task should clear it by a supported FiP query, or by a Form close if the coordinator approves. Any save or discard prompt must be answered by an explicit decision. EXP-043 recorded a later FiP query replacing the placeholder without a prompt; that is not verified here.
4. **Asterisk meaning** (required versus override) is unresolved and is for the AC-5 inspection of any future FX_UM record.
5. **Designer toolbar identity conflict** (EXP-044 note 7) was not re-examined; the Designer was not used.
6. **Next permitted action:** none in this task. A new coordinator-authorized task would be needed to restore the gate sequence (positive control, exact absence, then creation only if the gate passes).
7. Classification remains **observed only, NOT replay_verified**.

## Outcome (operator, 2026-10-11)

**Blocked** (run R-20261011-002849-Y91n, completed/blocked in cycle 2) by a Web Client "Session Expired" alert ("Your session has expired.", OK), which appeared during T1 before the FX_UMBase positive control. The cause is environmental: the authenticated session timed out. Nothing was created or changed. A blank add-mode placeholder row (from the zero-row query) was left unsaved, and the alert was left unanswered, per the authentication rule.

Observed before the expiry (read-only):
- FX_UMBase: String, length 10, nvarchar, Label String ID FX_sUM; checked out to the operator (Check In and Undo Check Out enabled).
- The plain-text query `FX_UM` returned zero rows, while FX_UMBase exists. This is consistent with exact matching, not proven.
- A zero-row Filter-in-Place query on Property Classes leaves an add-mode placeholder row (as in EXP-043).

Replay: EXP-047-R2, after the operator answers the alert and signs in again.
