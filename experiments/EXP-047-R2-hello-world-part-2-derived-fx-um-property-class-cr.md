# EXP-047-R2 — Hello World Part 2: Derived FX_UM Property Class Creation and Recovery (replay after session expiry)

**Current status: T1 COMPLETE (read-only preflight and creation gate; the FX_UM absence gate was ESTABLISHED). T2 COMPLETE (one New, one configuration of FX_UM, one ordinary toolbar Save; the Save settled clean). T3 COMPLETE (one native close, one reopen through Select Form, one exact-name recovery query for FX_UM: exactly one FX_UM data record recovered with the configured relationships and inherited values as displayed; Save disabled; the Form left OPEN and clean). Recovery is observed in this session at UI level only. No check-in or checkout action was taken on FX_UM or FX_UMBase. FX_UMBase was not re-read after the reopen (the brief forbids a further query). Preservation audit is pending a separate authorization.**

Classification: **observed only (single session, UI level). NOT replay_verified.**

## Run identity

- Run `R-20261011-003837-AqH7`, experiment EXP-047-R2, **cycle 0, task T1** (task_message_id `3358be5e-b5a1-4006-be04-5ba38bc2c02b`), worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`.
- Run date 2026-10-11 (system date). Mongoose Revision Date values read `10/10/2026`.
- Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, visible in `t1-00`). The "Site Developer" context named in the brief was not visible in the UI and was not verified.
- Mode: LEARNING MODE; FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User. Target FX_UM, FX_UMBase, FX_UMs, FX_Description, FX_sUM.
- Evidence directory `evidence/EXP-047-R2/`.
- Predecessor for this replay: `experiments/EXP-047-hello-world-part-2-derived-fx-um-property-class-cr.md` (blocked by a Web Client `Session Expired` alert before the FX_UMBase positive control; nothing created; operator outcome recorded there).
- Predecessors read before any browser action: EXP-043 (Select Form route, Filter-in-Place method, zero-row placeholder behaviour, FX_UMBase creation and recovery values), EXP-044 (exact-value and lowercase guard; case-insensitive coverage by inference), EXP-045 (Select Form collision gate with `Starts With` unchecked; `FX_sUM` caption), EXP-046 (FX_UMs close and reopen through Close Panel and Select Form OK). `tools/` was not read.

## Final acceptance matrix (T1 scope)

| AC | T1 status | Evidence | Limits |
| --- | --- | --- | --- |
| **AC-1** Preflight | **SUPPORTED (UI level).** Authenticated Web Client after the operator's sign-in; no Session Expired or sign-in screen; DEM identity bar; Property Classes runtime Form opened via Select Form and identified as `IdoPropertyClasses` (Select Form Name column; URL `favoriteContext=IdoPropertyClasses`); Save disabled; no dialog; no portal banner; no placeholder row before the gate. Vendor Form definition not opened in Designer and not edited. | `t1-00`, `t1-01`, `t1-02` | Site Developer context not verified. The Web Client session is established only at this point in time. |
| **AC-2** Target absence | **SUPPORTED (single session).** Fresh Filter-in-Place query `FX_UM` (exact text, Class Name only, all other criteria blank) returned **zero data rows**. The positive control `FX_UMBase`, run immediately after the gate, returned **exactly one row**. Matching rule observed: plain `FX_UM` did **not** return `FX_UMBase` (see Observations). | `t1-06` (criteria before F4), `t1-07` (zero rows after F4), `t1-08` (positive-control criteria), `t1-09` (one row) | Single session, UI level, through this Web Client user. Case variants were not typed (EXP-044 operator decision; case-insensitive coverage accepted by inference). Plain-text matching is treated as exact by observation, not by documentation. |
| **AC-3** Base-class baseline | **OBSERVED (read-only).** FX_UMBase: Class Name `FX_UMBase`; Base Class blank; Description blank; Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mwo…` (clipped); Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Domain fields blank. Checkout indication: **checked out to the operator** (Check In and Undo Check Out shown solid blue). Not changed. | `t1-04`, `t1-09` | Visual reading of the browse record. Check In / Undo Check Out were not read through accessibility state on the baseline record. Locked By is clipped. |
| **AC-4** Derived-class configuration | **NOT RUN.** No New; no row configured. | — | — |
| **AC-5** Inheritance and override indicators | **NOT RUN** for FX_UM. Asterisk markers on the existing FX_UMBase record were observed (see Observations); their meaning is **unresolved**. | `t1-04`, `t1-09` | No new FX_UM record exists. |
| **AC-6** Single Save | **NOT RUN.** | — | — |
| **AC-7** Runtime lifecycle | **NOT RUN.** The Property Classes Form remains open, in Filter-in-Place mode, showing FX_UMBase. | `t1-09` | — |
| **AC-8** Recovery | **NOT RUN.** | — | — |
| **AC-9** Preservation | **PARTIAL (T1 action log).** No supported mutation occurred in T1: no edit, no New, no Save, no checkout change, no Delete, no Designer action. FX_UMBase was read only. | action log below; `t1-04` and `t1-09` show FX_UMBase unchanged | Qualified: action-log and screenshot inference. Not a database or metadata check. |
| **AC-10** Final audit | **PARTIAL.** T1 controller audit reconciled below. Creation, Save, close, reopen and recovery counts are zero by design of this task. | Operation counts below | Observed only. No claim of metadata recovery, database durability, cross-session persistence or application of FX_UM to an IDO property. |

## Gate verdict (T1)

**The FX_UM absence gate is established for this session.** Creation is **permitted by the gate** but was **not performed**, because this bounded task is the read-only preflight and creation gate only. A separate authorization is needed before any New, configuration, Save, close or reopen (see Next permitted action).

## Observations (T1)

### Absence query and positive control (AC-2)

| Step | Criteria (Class Name only; all others blank) | Result after F4 | Evidence |
| --- | --- | --- | --- |
| Baseline query (also a positive control before the gate) | `FX_UMBase` | **1 row** `FX_UMBase`, status `Base Class (IDO Property Classes 1 of 1)`; record values as in AC-3 | `t1-03` (before F4), `t1-04` (after) |
| Creation gate | `FX_UM` (plain text, no wildcard, no lowercase variant) | **0 data rows**. One blue-star add-mode placeholder row (Class Name blank, Locked By operator, Revision Date `10/10/2026`), status `Base Class (IDO Property Classes 1 of 1)`. Save disabled. | `t1-06` (before F4), `t1-07` (after) |
| Positive control after the gate | `FX_UMBase` | **1 row** `FX_UMBase` with the same values as the baseline; no star; placeholder replaced silently (no prompt); status `1 of 1` | `t1-08` (before F4), `t1-09` (after) |

- **Matching rule observed:** plain `FX_UM` returned zero rows while `FX_UMBase` exists and is returned by its own exact text. `FX_UMBase` was **not** matched by `FX_UM`. This is consistent with **exact matching** (and rules out prefix-by-plain-text and contains-by-plain-text for this query). It is not a documented rule. No wildcard form (`FX_UM*`) was run in this task; EXP-043 recorded `FX_UM*` returning zero rows before `FX_UMBase` existed.
- **Case-insensitive coverage:** not typed here. Accepted by inference from EXP-040 and EXP-044 (operator decision). Lowercase variants are denied by the exact-value guard by design.
- **Retained criteria:** the query was preceded by the retained `FX_UMBase` criterion (`t1-05`), which was replaced by plain fill before the gate query. Other criteria were blank in `t1-06`.

### FX_UMBase baseline (AC-3, read-only)

| Attribute | Observed (browse record, `t1-04` and `t1-09`) |
| --- | --- |
| Class Name | `FX_UMBase` (read-only key) |
| Base Class | blank |
| Description | blank |
| Revision No / Revision Date | `1` / `10/10/2026` |
| Locked By | `anton.ramos@3mwo…` (clipped in the field) |
| Access As | `G6R` |
| Data Type / Length | `String` / `10` |
| Decimal Position, Default Value | blank |
| Column Data Type | `nvarchar` |
| Label String ID | `FX_sUM` |
| Domain IDO Name, Domain Property, Domain List Properties, Domain Additional Settings | blank |
| Checkout indication | **Checked out to the operator** (Check In and Undo Check Out solid blue). Not changed. |

Consistent with EXP-043 T4 and EXP-045 T1 values, and with the pre-expiry EXP-047 read.

### Asterisk markers (observed; meaning unresolved)

- **FX_UMBase browse record (`t1-04`, `t1-09`).** Form labels `*Data Type:`, `*Length:`, `*Column Data Type:` and `*Label String ID:` show a leading asterisk. The labels `Class Name:`, `Base Class:`, `Description:`, `Revision No:`, `Revision Date:` and `Locked By:` show none. Grid-header asterisks were not checked in this task.
- **Add-mode placeholder (`t1-07`).** `Class Name:` shows a red asterisk (and grid header `* Class Name`). Labels `Data Type:`, `Length:`, `Column Data Type:` and `Label String ID:` show **no** asterisk.
- **Interpretation.** The markers differ by record state (browse, checked-out record vs. add-mode placeholder). Their meaning (required, override or other) is **not established**. None is treated here as an override indicator. AC-5 is not run for FX_UM.

### Placeholder behaviour

- The zero-row gate query left one unsaved add-mode placeholder (blue star), as in EXP-043. Nothing was typed into it, and Save was not invoked. The placeholder was replaced by the next Filter-in-Place query (positive control) with no prompt, matching EXP-043 step 17.
- While the placeholder existed, the toolbar showed Delete and Refresh enabled. Neither was clicked.
- After the positive-control query, Save is disabled and the grid shows only the FX_UMBase row (`t1-09`).

## Operations (T1, in order, controller audit)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list; fresh snapshot; screenshot | One Mongoose tab selected. No runtime tabs. Explorer shown. DEM identity bar. No Session Expired, sign-in or banner. Save disabled. | `t1-00` |
| 2 | `browser_find` "session" | No match | — |
| 3 | ONE click on toolbar `Open` (inner button `f1e24`) | Select Form dialog opened; filter pre-filled `FX_UMs` (retained from an earlier session) | snapshot (tool log) |
| 4 | ONE click on Select Form Filter textbox (`f1e118`); `Control+a`; `Backspace` | Filter cleared | snapshot (tool log) |
| 5 | Key-event type `PropertyClass` (`slowly`) | One row: Caption `Property Classes`, Name `IdoPropertyClasses` | `t1-01` |
| 6 | ONE click on row Caption cell (`f1e146`) | Row active | snapshot (tool log) |
| 7 | `find` "OK"; ONE click on OK (`f1e137`) | Starts With unchecked. Form opened; URL `favoriteContext=IdoPropertyClasses`. | snapshot (tool log) |
| 8 | Fresh snapshot; screenshot | Tab `Property Classes` selected; FiP mode; blank criteria; Save disabled; New disabled; no placeholder | `t1-02` |
| 9 | ONE plain fill `FX_UMBase` into Class Name criteria (`f1e504`); ONE Tab | Criteria `FX_UMBase` | `t1-03` |
| 10 | ONE F4 | 1 row `FX_UMBase`; status `1 of 1` | `t1-04` |
| 11 | `find` "IDO Property Classes"; targeted snapshot of tablist | Status `Base Class (IDO Property Classes 1 of 1)`; tab selected | tool log |
| 12 | ONE click on toolbar `Filter in Place` (`f1e30`, from a fresh find) | FiP re-entered; retained `FX_UMBase` criterion selected | `t1-05` |
| 13 | ONE plain fill `FX_UM` into Class Name criteria (`f1e504`); ONE Tab | Criteria `FX_UM` | `t1-06` |
| 14 | ONE F4 (absence gate) | **0 data rows**; one blue-star add-mode placeholder; status `1 of 1` | `t1-07` |
| 15 | ONE click on toolbar `Filter in Place` (`f1e30`, from a fresh find) | FiP re-entered; retained `FX_UM` criterion | `find` "Class Name:" |
| 16 | ONE plain fill `FX_UMBase` (`f1e504`); ONE Tab | Criteria `FX_UMBase` | `t1-08` |
| 17 | ONE F4 (positive control) | **1 row** `FX_UMBase`; placeholder removed; status `1 of 1` | `t1-09` |
| 18 | `find` "IDO Property Classes 1 of"; `find` "Save"; `find` "dialog" | Save disabled; no dialog | tool log |

Errors: none (no Ref-not-found, no timeout). Recovery snapshots: 0. Corrected inspections: 0.

## Operation counts (T1, reconciled to the action table)

| Operation | Count |
| --- | --- |
| Browser clicks (actions) | **6** (toolbar Open; Select Form filter textbox; Select Form row caption; Select Form OK; toolbar Filter in Place ×2) |
| Plain fills (`browser_type` without `slowly`) | **3** (`FX_UMBase`, `FX_UM`, `FX_UMBase`) |
| Key-event typing (`slowly`) | **1** (`PropertyClass`, Select Form filter) |
| Key presses | **Control+a** ×1, **Backspace** ×1, **Tab** ×3, **F4** ×3 |
| Explicit full snapshots / targeted snapshots / finds / tab listings | **2 / 1 / 14 / 1** (tool-returned snapshot logs accompany each action and are not counted here) |
| Screenshots (worker-requested PNG) | **10** (`t1-00` to `t1-09`) |
| Save / New / Delete / Refresh / Get More Rows | **0 / 0 / 0 / 0 / 0** |
| Close / reopen of any Mongoose Form | **0 / 0** (the Property Classes Form was opened once through Select Form; no close) |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Class, IDO, Designer, FX_UM creation edits | **0 / 0 / 0 / 0** |
| Dialogs answered | **0** (the Select Form dialog was used for OK only, as an in-page selection, not a prompt) |
| Ref-not-found errors / recovery snapshots / timeouts | **0 / 0 / 0** |
| JavaScript, evaluate, run-code, direct SQL | **0** (worker-initiated) |
| Login, logout, reload, navigation, session replacement | **0** |
| Portal banner dismissals | **0** (none visible) |

## Evidence files

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-047-R2/t1-00-preflight-explorer-no-runtime-tabs.png` | Explorer; no runtime tabs; identity bar showing `anton.ramos@3mworks.com.ph` and `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no dialog | AC-1: fresh start state; no Session Expired | Database state; Site Developer context |
| `evidence/EXP-047-R2/t1-01-select-form-propertyclass-filter.png` | Select Form, Filter `PropertyClass`, one row Caption `Property Classes`, Name `IdoPropertyClasses`; Starts With unchecked | AC-1: Form identity through Select Form | That the Form opened (see t1-02) |
| `evidence/EXP-047-R2/t1-02-property-classes-opened-via-select-form-fip-blank.png` | Property Classes tab, FiP mode, blank Class Name criteria, all fields blank; Check In / Undo Check Out greyed in the snapshot | AC-1: identity and clean state before the baseline | Any collection result |
| `evidence/EXP-047-R2/t1-03-baseline-fip-criteria-FX_UMBase-before-f4.png` | Criteria `FX_UMBase`; echo row `FX_UMBase`; status `Filter in Place` | The exact criteria before the baseline F4 | The F4 result |
| `evidence/EXP-047-R2/t1-04-baseline-FX_UMBase-after-f4.png` | One row `FX_UMBase` (checked); String, 10, nvarchar, FX_sUM; Revision 1, 10/10/2026; Access As G6R; Check In and Undo Check Out solid blue; asterisks on *Data Type, *Length, *Column Data Type, *Label String ID; status `Base Class (IDO Property Classes 1 of 1)` | AC-3 baseline as displayed; positive control (pre-gate) | Database state; Locked By fully (clipped) |
| `evidence/EXP-047-R2/t1-05-fip-reentered-retains-FX_UMBase-before-gate.png` | FiP re-entered; criteria `FX_UMBase` retained and selected; status `Filter in Place` | The restrictive retained criterion existed before the gate | Any query result |
| `evidence/EXP-047-R2/t1-06-gate-fip-criteria-FX_UM-before-f4.png` | Criteria `FX_UM`; echo row `FX_UM`; other criteria blank; status `Filter in Place` | The exact gate criteria before F4, with no retained restrictive criteria | The F4 result |
| `evidence/EXP-047-R2/t1-07-gate-FX_UM-after-f4-settled.png` | Zero data rows; one blue-star placeholder (Class Name blank, red-asterisk Class Name label, Locked By operator, Revision Date 10/10/2026); status `Base Class (IDO Property Classes 1 of 1)`; Save greyed | Zero data rows for `FX_UM` in the displayed result (AC-2) | Completeness of the collection beyond the display; server response detail |
| `evidence/EXP-047-R2/t1-08-positive-control-fip-criteria-FX_UMBase-before-f4.png` | Criteria `FX_UMBase`; echo row `FX_UMBase`; status `Filter in Place` | The positive-control criteria before F4 | The F4 result |
| `evidence/EXP-047-R2/t1-09-positive-control-FX_UMBase-after-f4-settled.png` | One row `FX_UMBase` (checked); same values as t1-04; no star; placeholder gone; Save greyed; status `1 of 1` | AC-2 positive control: retrieval works after the gate; placeholder removed silently; AC-9 partial (FX_UMBase unchanged visually) | Database state; that Check In is enabled through accessibility state |

Snapshot logs written by the Playwright tool (tool-generated, not worker-authored; outside `evidence/EXP-047-R2/`): `evidence\playwright\page-2026-10-10T16-39-02-191Z.yml`, `page-2026-10-10T16-39-05-833Z.yml`, `page-2026-10-10T16-39-09-739Z.yml`, `page-2026-10-10T16-39-13-027Z.yml`, `page-2026-10-10T16-39-17-855Z.yml`, `page-2026-10-10T16-39-48-147Z.yml`, `page-2026-10-10T16-40-09-492Z.yml`.

Concise evidence summary: `evidence/EXP-047-R2/t1-evidence-summary.md`.

## Repository changes (T1)

- `experiments/EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md` — created.
- `evidence/EXP-047-R2/t1-00-…png` to `t1-09-…png` — created (10 PNG files; the Select Form capture is `t1-01`).
- `evidence/EXP-047-R2/t1-evidence-summary.md` — created.
- No other repository file was written. `tools/` was not read.

## Knowledge state (per finding)

| Finding | State |
| --- | --- |
| Property Classes runtime Form opened via Select Form (`PropertyClass` filter → `IdoPropertyClasses`) in this session | **observed** (one run) |
| FX_UMBase browse values String, 10, nvarchar, FX_sUM; checked out to the operator (Check In and Undo Check Out solid blue) | **observed** (one run; consistent with EXP-043 T4 and EXP-045 T1) |
| Plain `FX_UM` returned zero data rows while `FX_UMBase` exists | **observed** (one run) |
| Plain `FX_UM` does **not** match `FX_UMBase` (so plain text is not prefix-matching here) | **observed** (one run); consistent with exact matching; not documented |
| `FX_UMBase` positive control returns its row after the gate in the same state | **observed** (one run) |
| Zero-row query leaves an unsaved placeholder; the next FiP query replaces it silently | **observed** (one run; consistent with EXP-043) |
| Asterisk markers differ by record state; meaning | **observed**; meaning **unresolved** |
| FX_UM absence (creation gate) for this session | **observed** (one session, UI level). **Gate established.** |
| FX_UM creation, Save, close, reopen, recovery | **not performed** (not replay_verified) |

## Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** the coordinator or operator authorizes a creation task (T2). That task would: one native New; set Base Class FX_UMBase, Domain IDO FX_UMs, Domain Property FX_UM, Additional List Properties FX_Description and Class Name FX_UM; leave inherited Data Type, Length and Label String ID untouched; verify before Save; one ordinary Save; then the close, reopen, and exact-name recovery in later tasks as authorized.
2. **Pre-creation note:** the current Property Classes tab holds the FX_UMBase record in browse mode with the placeholder gone. A New in that state would add one row as in EXP-043 T2. The operator should confirm that FX_UMBase's checkout state is unchanged before T2.
3. **Asterisk meaning** (required versus override) is unresolved and must be inspected in AC-5 of any future T2 record.
4. Case-insensitive coverage remains by inference (operator decision, EXP-044).
5. Classification remains **observed only, NOT replay_verified**.

---

## T2 — One New, FX_UM configuration, one ordinary Save (Property Classes Form left OPEN)

- Date: 2026-10-11 (system date). Mongoose Revision Date values read `10/10/2026`. Task T2, cycle 1, task_message_id `f4b7d8db-de3c-4f2b-ae76-afdc9f37139b`, worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`. Run `R-20261011-003837-AqH7`.
- Scope: pre-mutation inspection; one native New; configure the five values; pre-Save verification; one ordinary toolbar Save; post-Save settled state. **No close, no reopen, no recovery query, no repeat absence query, no check-in or checkout, no edit of inherited values.**
- Result: **the Save settled in the UI with Save disabled, no message, no prompt, and the new row no longer starred. The FX_UM record shows the five configured values and inherited Data Type `String`, Length `10`, Column Data Type `nvarchar` and Label String ID `FX_sUM` after the Save (these were BLANK before the Save).** Clean post-Save state is observed in the UI. Persistence beyond this session is not tested.

### Pre-mutation inspection (fresh snapshot, `t2-00`)

| Check | Observed |
| --- | --- |
| Session | Authenticated Web Client; URL `favoriteContext=IdoPropertyClasses`; banner identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Form identity | Tab `Property Classes` [selected]; tab heading `Property Classes` |
| Record present | One row `FX_UMBase`; row selector checked; status `Base Class (IDO Property Classes 1 of 1)` |
| FX_UMBase values | Class Name `FX_UMBase`; Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Domain fields blank. Same as T1 baseline. |
| Checkout indication | Check In and Undo Check Out **enabled** (checked out to the operator). Unchanged; not acted on. |
| Save | Disabled |
| Dialog or prompt | None (`find` "dialog" returned no match) |
| Unrelated tabs | None (only the Property Classes runtime tab) |
| Placeholder row | None |
| Configuration | Operator-provided and visible: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (identity bar). The "Site Developer" context was not visible and is not verified. |

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list; fresh snapshot; screenshot `t2-00` | State as above | `t2-00` |
| 2 | ONE click on toolbar `New` (`f1e29`) | Row 2 added, starred, Class Name blank; status `Class Name (IDO Property Classes 2 of 2)`; Save enabled; the FX_UMBase row unchanged | fresh snapshot |
| 3 | ONE plain fill `FX_UM` into Class Name (`f1e446`); ONE Tab | Class Name `FX_UM`; grid row 2 shows `FX_UM` | `find` "Base Class:" |
| 4 | ONE plain fill `FX_UMBase` into Base Class combobox (`f1e455`); ONE Tab | Field showed `FX_UMBase` at first, but the grid cell was still blank in the screenshot (`t2-01`, pre-commit). After the Tab (`t2-02`) the field still read `FX_UMBase`; a later `find` showed the grid cell `FX_UMBase`. | `t2-01`, `t2-02` |
| 5 | ONE click on the Base Class `Open` button (`f1e456`) | Lookup list opened; `FX_UMBase` option already highlighted | `find` "FX_UMBase" |
| 6 | ONE click on the lookup option `FX_UMBase` (`f1e1137`) | Base Class `FX_UMBase`, selected from the native list. This second selection set the same value that the typed entry had already set. | `t2-03` |
| 7 | ONE click on the Domain IDO Name `Open` button (`f1e735`); `find` "FX_UMs"; ONE click on option `FX_UMs` (`f1e1346`) | Domain IDO Name `FX_UMs`; grid row 2 cell `FX_UMs` | `t2-04` |
| 8 | ONE click on the Domain Property `Open` button (`f1e745`); `find` "FX_UM"; ONE click on option `FX_UM` (`f1e1934`) | Domain Property `FX_UM`; grid row 2 cell `FX_UM` | `t2-05` |
| 9 | ONE click on the Domain List Properties `Open` button (`f1e755`); `find` "FX_Description"; ONE click on option `FX_Description` (`f1e1961`) | Domain List Properties `FX_Description`; grid row 2 cell `FX_Description`; the form status changed to `Domain List Properties (IDO Property Classes 2 of 2)` | `t2-06` |
| 10 | Fresh full snapshot and screenshot `t2-06` (pre-Save verification) | All five values present; no second new row; FX_UMBase row unchanged; inherited fields blank (see below) | `t2-06` |
| 11 | ONE click on toolbar `Save` (`f1e28`) | Save completed without an error, prompt, or message. The new row star cleared. Save became disabled. | `t2-07`, snapshot |
| 12 | Settled read: screenshot `t2-07`; `find` "Save"; `find` "dialog"; fresh full snapshot | Save `[disabled]`; no dialog; the FX_UM row is in browse style | `t2-07`, snapshot |

Errors: none (no Ref-not-found, no timeout, no validation message). Recovery snapshots: 0. The stale-ref check was not needed.

Note on the Base Class commit (action 4 to 6): the typed value and the list selection set the same value (`FX_UMBase`). Nothing else was changed by the second selection.

### Pre-Save verification of the five configured values (AC-4, `t2-06`)

| Value | Native control (accessibility) | Grid row 2 cell | Result |
| --- | --- | --- | --- |
| Class Name | textbox `Class Name:` = `FX_UM` | `FX_UM` | Matches |
| Base Class | combobox `Base Class:` = `FX_UMBase` | `FX_UMBase` | Matches |
| Domain IDO Name | combobox `Domain IDO Name:` = `FX_UMs` | `FX_UMs` | Matches |
| Domain Property | combobox `Domain Property:` = `FX_UM` | `FX_UM` | Matches |
| Domain List Properties (brief: Additional List Properties) | combobox `Domain List Properties:` = `FX_Description` | `FX_Description` | Matches |

- Screenshot limit: `t2-06` shows the full five values in the form; the grid shows the full row only in the accessibility snapshot (the left grid shows Class Name only). No clipping of the form values.
- No second class was created. The grid shows two rows (FX_UMBase and the new FX_UM).
- No other field was edited. Revision No `1`, Revision Date `10/10/2026`, Locked By and Access As appeared on the new row. The controller audit (`harness-audit-T2.md`) shows the worker typed nothing into these fields. That they were populated by the system is an inference, not an observation.

### Inherited values and override markers before Save (AC-5)

| Field | Before Save (new row) | Observed meaning |
| --- | --- | --- |
| Data Type | **blank** (combobox empty) | Not exposed before Save |
| Length | **blank** | Not exposed before Save |
| Column Data Type | **blank** | Not exposed before Save |
| Label String ID | **blank** | Not exposed before Save |

- **Limitation (AC-5):** the inherited Data Type, Length, Column Data Type and Label String ID were **not visible** on the new row before Save. No value was invented, and none was typed or selected. This is recorded as a limitation, not as a conflict with FX_UMBase.
- **Pre-Save asterisks (form labels, `t2-06` and snapshot):** red asterisk on `Class Name:`; asterisks on `*Domain IDO Name:`, `*Domain Property:` and `*Domain List Properties:`. No asterisk on `Base Class:`, `Description:`, `Revision No:`, `Revision Date:`, `Locked By:`, `Access As:`, `Data Type:`, `Length:`, `Column Data Type:` or `Label String ID:`.
- **Pre-Save asterisks (grid headers):** `* Class Name`, `* Revision No`, `* Revision Date`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. No asterisk on `Data Type`, `Length`, `Column Data Type` or `Label String ID`.
- **Meaning:** not established. The Domain fields carry asterisks once they are set; the Revision fields carry them on both records; the inherited fields carry them on FX_UMBase's browse record and not on the new row. The required-field versus override distinction is **unresolved** and is not inferred here.

### Post-Save settled state (AC-6, `t2-07`, fresh snapshot)

| Check | Observed |
| --- | --- |
| Save | **Disabled** (`[disabled]` in the snapshot; greyed in `t2-07`) |
| Message or prompt | None. No dialog, no validation text, no duplicate-name message. |
| Row indicators | New row 2 is no longer starred; row selector checked; row 2 shows `FX_UM` |
| Class Name | `FX_UM` (saved, greyed key style) |
| Base Class | `FX_UMBase` |
| Domain IDO Name | `FX_UMs` |
| Domain Property | `FX_UM` |
| Domain List Properties | `FX_Description` |
| Inherited Data Type | **`String`** (populated after Save) |
| Inherited Length | **`10`** (populated after Save) |
| Inherited Column Data Type | **`nvarchar`** (populated after Save) |
| Inherited Label String ID | **`FX_sUM`** (populated after Save) |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / `anton.ramos@3mworks.com.ph` / `G6R` (system-assigned for the new record) |
| Checkout indication (new FX_UM record) | **Check In and Undo Check Out enabled.** The record appears checked out to the operator. Not acted on. This matches the post-Save state observed for FX_UMBase in EXP-043 T3. |
| Status | `Domain List Properties (IDO Property Classes 2 of 2)` |
| Dialogs or unsaved-change indication | None |

- **Post-Save asterisks (form labels):** `*Domain IDO Name:`, `*Domain Property:`, `*Domain List Properties:`. The Data Type, Length, Column Data Type and Label String ID labels show no asterisk on the saved FX_UM record. The Class Name label shows no asterisk after the Save.
- **Post-Save asterisks (grid headers):** `* Revision No`, `* Revision Date`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`. `Class Name` is no longer marked.
- **Meaning:** still unresolved (see above).

### FX_UMBase preservation (AC-9, read-only comparison in the post-Save snapshot)

- The FX_UMBase row (grid row 1) still shows: Class Name `FX_UMBase`; Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Domain fields blank. **Matches the T1 baseline.**
- The FX_UMBase checkout indication was **not re-read directly** after the Save. The visible Check In and Undo Check Out buttons belong to the displayed FX_UM record, not to FX_UMBase. Row 1's selector is shown checked in both the baseline and the post-Save snapshot. Qualified: the checkout state of FX_UMBase is not independently verified after the Save.
- No supported mutation of FX_UMBase, the FX_UMs IDO, its properties, data, strings, Forms or other existing objects was performed in T2. Qualified: this is an action-log and UI inference.

### Acceptance checks for T2

| AC | T2 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported** (fresh pre-mutation inspection): authenticated Web Client, Property Classes identity, Save disabled, no dialog, FX_UMBase browse record, no placeholder | `t2-00` and the pre-New snapshot | Configuration name from the identity bar; Site Developer context not verified |
| AC-2 | **Carried from T1** (gate established). Not repeated, per the T2 instruction. | `t1-06`, `t1-07`, `t1-08`, `t1-09` | Single session; plain text; case variants not typed |
| AC-3 | **Carried from T1; re-read in T2** (FX_UMBase values and checkout indication unchanged in the pre-New inspection) | `t2-00`, `t1-04` | Visual reading |
| AC-4 | **Supported** (pre-Save verification of all five values in native controls and grid row 2) | `t2-06` and the pre-Save snapshot | Inherited values not visible before Save (see AC-5) |
| AC-5 | **Partially supported.** Inherited Data Type, Length, Column Data Type and Label String ID were **not exposed before Save** (blank). After Save they show `String`, `10`, `nvarchar`, `FX_sUM`. Asterisk inventory captured before and after Save; meaning unresolved. | `t2-06`, `t2-07` | Pre-Save effective values are not observable in this UI. No values invented. |
| AC-6 | **Supported** (one ordinary toolbar Save; settled clean state: Save disabled, no message or prompt, row not starred) | `t2-07`, post-Save snapshot | UI-level only; no database read; no success message is shown by this UI (as in EXP-043). |
| AC-7 | **NOT RUN** (close and reopen are not part of T2). The Form is left open. | — | — |
| AC-8 | **NOT RUN** (recovery query is not part of T2). | — | — |
| AC-9 | **Partial** (FX_UMBase row values unchanged in the post-Save grid; checkout indication not independently re-read) | `t2-07` and the post-Save snapshot | Qualified (see above) |
| AC-10 | **Partial** (T2 audit below). Full reconciliation waits for T3 and the final audit. | Operation counts below | Observed only |

### Operation counts (T2)

| Operation | Count |
| --- | --- |
| New (toolbar) | **1** |
| Save (toolbar) | **1** (no retry, no second Save) |
| Close / reopen of the Property Classes Form | **0 / 0** |
| Recovery (exact-name) queries | **0** |
| Absence queries | **0** (not repeated, per the T2 instruction) |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Class or IDO edits beyond the five configured values | **0** |
| Inherited Data Type, Length, Column Data Type or Label String ID set manually | **0** |
| Browser clicks | **10** (New; Base Class `Open` and option; Domain IDO `Open` and option; Domain Property `Open` and option; Domain List Properties `Open` and option; Save) |
| Plain fills | **2** (Class Name `FX_UM`; Base Class `FX_UMBase`) |
| Tab presses | **2** (after Class Name; after Base Class) |
| F4 presses | **0** |
| Screenshots | **8** (`t2-00` to `t2-07`) |
| Explicit snapshots / targeted snapshots / finds | **4 full, 0 targeted, 14 finds** (read-only; matches `harness-audit-T2.md`) |
| Errors / Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0 / 0** |
| JavaScript, evaluate, run-code, direct SQL | **0** |
| Login, logout, reload, navigation, session replacement | **0** |
| Portal banner dismissals | **0** (none visible) |
| Dialogs answered | **0** |

### Evidence (T2)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-047-R2/t2-00-pre-new-baseline-FX_UMBase-browse-checked-out.png` | Property Classes tab; one row FX_UMBase; String, 10, nvarchar, FX_sUM; Check In and Undo Check Out solid blue; Save greyed; no dialog | AC-1 and AC-3 pre-mutation state | Database state; Locked By in full (clipped) |
| `evidence/EXP-047-R2/t2-01-base-class-FX_UMBase-typed-before-commit.png` | Row 2 `FX_UM`; Base Class field `FX_UMBase`; grid row 2 Base Class blank at this moment; inherited fields blank; Save enabled | Typed Base Class before the commit; inherited fields blank pre-Save | Final commit (see t2-02 and t2-03) |
| `evidence/EXP-047-R2/t2-02-base-class-FX_UMBase-after-tab-commit.png` | Focus moved to Description; Base Class field `FX_UMBase`; inherited fields still blank | Tab moved focus; inherited fields still blank | That the grid cell was committed (see the later find) |
| `evidence/EXP-047-R2/t2-03-base-class-FX_UMBase-selected-from-list.png` | Base Class `FX_UMBase` (highlighted after list selection); status `Base Class (IDO Property Classes 2 of 2)` | The list selection of FX_UMBase | Grid commit (confirmed by a later find) |
| `evidence/EXP-047-R2/t2-04-domain-ido-FX_UMs-selected.png` | Domain IDO Name `FX_UMs` in the form | Domain IDO value in the form | Grid cell (confirmed by a find) |
| `evidence/EXP-047-R2/t2-05-domain-property-FX_UM-selected.png` | Domain Property `FX_UM` in the form | Domain Property value in the form | Domain List value |
| `evidence/EXP-047-R2/t2-06-pre-save-all-five-configured-values.png` | All five configured values visible; red asterisk on Class Name; asterisks on Domain IDO Name, Domain Property and Domain List Properties; Data Type, Length, Column Data Type and Label String ID blank; Save enabled; status `Domain List Properties (IDO Property Classes 2 of 2)` | AC-4 pre-Save values; AC-5 blank inherited fields; asterisk inventory | Grid row 2 in full (the left grid shows Class Name only); meaning of the asterisks |
| `evidence/EXP-047-R2/t2-07-post-save-settled-single-save.png` | Save greyed; row 2 `FX_UM` no longer starred; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Domain IDO `FX_UMs`; Domain Property `FX_UM`; Domain List Properties `FX_Description`; Check In and Undo Check Out enabled; a Save tooltip is visible from the hover | AC-6 settled state; inherited values after Save; checkout buttons for the new record | Persistence across sessions; database state; that the checkout indication is a lock held by the operator |

Snapshot logs written by the Playwright tool (tool-generated, outside `evidence/EXP-047-R2/`): `evidence\playwright\page-2026-10-10T16-43-34-442Z.yml`, `page-2026-10-10T16-43-57-306Z.yml`, `page-2026-10-10T16-44-03-009Z.yml`, `page-2026-10-10T16-44-13-145Z.yml`, `page-2026-10-10T16-44-17-249Z.yml`, `page-2026-10-10T16-44-22-088Z.yml`, `page-2026-10-10T16-44-26-339Z.yml`, `page-2026-10-10T16-44-30-569Z.yml`, `page-2026-10-10T16-44-34-423Z.yml`, `page-2026-10-10T16-44-48-667Z.yml`.

### Final browser state (T2)

- One Mongoose tab, selected. Runtime tab: `Property Classes` (selected), **left OPEN** by design.
- Form in browse mode showing the saved FX_UM record (row 2) with Save disabled. No unsaved change, no placeholder, no dialog, no portal banner, no browser-native prompt.
- The new FX_UM record shows Check In and Undo Check Out enabled (checked out to the operator). **Not acted on.** The next step needs an explicit decision on whether to check it in. Check-in is outside this experiment's scope and was not performed.

### Repository changes (T2)

- `experiments/EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md`: edited (status line and this T2 section).
- `evidence/EXP-047-R2/t2-00-…png` to `t2-07-…png` (8 PNG files, created).
- `evidence/EXP-047-R2/t2-evidence-summary.md` (created).
- No other repository file was written. `tools/` was not read.

### Knowledge state (T2)

| Finding | State |
| --- | --- |
| A single native New on the Property Classes Form adds a new starred add-mode row | **observed** (one run) |
| Typed Base Class text is committed to the grid only after the list is also used or the grid repaints; the lookup list shows FX_UMBase | **observed** (one run; the mechanism is not confirmed) |
| Domain IDO, Domain Property and Domain List Properties are set through their native Open lists (`FX_UMs`, `FX_UM`, `FX_Description`) | **observed** (one run) |
| Inherited Data Type, Length, Column Data Type and Label String ID are **blank before Save** and **populated after Save** (`String`, `10`, `nvarchar`, `FX_sUM`) | **observed** (one run). Mechanism unresolved. |
| One ordinary Save settles clean: Save disabled, no message, no prompt, row not starred | **observed** (one run; UI level) |
| The new FX_UM record shows Check In and Undo Check Out enabled after Save (checked out to the operator) | **observed** (one run); not acted on |
| Asterisk meaning (required versus override) | **observed**; meaning **unresolved** |
| Recovery after close and reopen | **NOT RUN** in T2 |

### Open questions and next permitted action

1. **Next permitted action (requires separate authorization):** T3 — one ordinary close of the Property Classes Form (native Form-tab close control), one reopen through Select Form, one fresh exact-name query for FX_UM, and the recovery comparison (AC-7, AC-8).
2. **Checkout decision for the operator:** the new FX_UM record is checked out to the operator (Check In enabled). Per the brief, no check-in was done. Whether it is checked in is an operator decision outside this experiment.
3. **Inherited values:** the pre-Save blanks and the post-Save values need to be compared on recovery (AC-8). Whether the inheritance is applied at Save or on the post-Save refresh is unresolved.
4. **Asterisk meaning:** unresolved (see AC-5).
5. Classification remains **observed only, NOT replay_verified**.

---

## T3 — One native close, one reopen, one exact-name recovery query (Form left OPEN and clean)

- Task T3, cycle 2, task_message_id `e8e76452-fc65-4343-904c-0eae5a41586b`, worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`. Run `R-20261011-003837-AqH7`. Date 2026-10-11 (system date); Mongoose Revision Date `10/10/2026`.
- Scope: pre-close inspection; one native close; one reopen through toolbar Open and Select Form; one fresh FiP exact-name query; recovery comparison. **No Save, no New, no edit, no check-in or checkout, no second query, no close or reopen beyond the single pair.**
- Result: **the close completed with no prompt; the reopen returned IdoPropertyClasses with blank criteria; the exact query `FX_UM` returned exactly one data record, `FX_UM`, whose configured relationships and inherited values match the T2 post-Save values as displayed. Save is disabled, and no dialog or unsaved-change indication appeared.** Recovery is observed same-session, UI level only.

### Lifecycle counts (T3)

| Operation | Count |
| --- | --- |
| Form close (native `Close Panel Property Classes`) | **1** |
| Form reopen (toolbar Open, Select Form OK) | **1** |
| Recovery query (FX_UM exact text, one F4) | **1** |
| Save / New / Delete / Refresh | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |

### Actions (in order)

| # | Action | Observed | Evidence |
| --- | --- | --- | --- |
| 1 | `browser_tabs` list; fresh snapshot | Property Classes tab selected; URL `favoriteContext=IdoPropertyClasses`; FX_UMBase row 1 and FX_UM row 2; Save disabled; no dialog | snapshot (tool log) |
| 2 | Screenshot `t3-00`; `find` "dialog" | Clean, saved state; no dialog | `t3-00` |
| 3 | ONE click on `Close Panel Property Classes` (`f1e101`) | Tab removed from the Form tablist; toolbar Save, New, Delete, Refresh and FiP disabled; no save or discard prompt | snapshot; `t3-01` |
| 4 | ONE click on toolbar `Open` (inner `f1e26`) | Select Form dialog opened; filter pre-filled `PropertyClass`; one row `Property Classes` / `IdoPropertyClasses` | `find` "Select Form", "Filter:" |
| 5 | ONE click on row Caption `Property Classes` (`f1e904`) | Row selected | snapshot |
| 6 | `find` "OK"; ONE click on OK (`f1e932`) | Form reopened; URL `favoriteContext=IdoPropertyClasses`; tab `Property Classes` [selected]; FiP mode; blank criteria | fresh untargeted snapshot; `t3-02` |
| 7 | Screenshot `t3-02` (reopened state before filtering) | Status `Filter in Place`; blank criteria; Save disabled; one empty criteria row (no star) | `t3-02` |
| 8 | ONE plain fill `FX_UM` into Class Name criteria (`f1e1286`); ONE Tab | Criteria echo `FX_UM`; other criteria blank | `t3-03` |
| 9 | ONE F4 (recovery query) | One data row `FX_UM` (checked, no star); status `Base Class (IDO Property Classes 1 of 1)`; Save disabled | `t3-04`; fresh snapshot |
| 10 | `find` "dialog" and `find` "Save" | No dialog; Save `[disabled]` | find output |

Errors: none (no Ref-not-found, no timeout). Recovery snapshots: 0. Corrected inspections: 0.

### Initial state (before close, `t3-00`)

| Check | Observed |
| --- | --- |
| Selected Form | `Property Classes` (tab `f1e99`, tabpanel `f1e102`), URL `favoriteContext=IdoPropertyClasses` |
| Rows | Row 1 `FX_UMBase` (checked); row 2 `FX_UM` (checked) |
| FX_UM values | Class Name `FX_UM`; Base Class `FX_UMBase`; Domain IDO `FX_UMs`; Domain Property `FX_UM`; Domain List Properties `FX_Description`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM` |
| Save | Disabled |
| Dialogs, prompts, placeholder | None |
| Checkout visuals | Check In and Undo Check Out enabled (on the displayed FX_UM record); not used |

### Closed state (`t3-01`)

- The `Property Classes` tab is removed from the Form tablist. The toolbar is disabled (Save, New, Delete, Refresh, Filter in Place, Get More Rows and related controls). No prompt, no dialog, no portal banner appeared.

### Reopened state (`t3-02`)

- Reopened through toolbar Open and Select Form (`PropertyClass` filter → `Property Classes` / `IdoPropertyClasses` → OK). URL `favoriteContext=IdoPropertyClasses`. Tab `Property Classes` [selected]. Status `Filter in Place`. Save disabled. Blank criteria. The single empty row is the FiP criteria row, not a starred placeholder (the same reopen pattern as EXP-043 T4).

### Recovery query (`t3-03`, `t3-04`)

- Criterion before F4 (`t3-03`): Class Name `FX_UM`; other criteria blank.
- Settled result (`t3-04`): one data row `FX_UM`. Status `Base Class (IDO Property Classes 1 of 1)`. No starred row. Save disabled. No dialog.
- Plain text `FX_UM` did not return `FX_UMBase` (the same matching behaviour as T1; consistent with exact matching; not documented).

### Recovered record compared with the T2 post-Save values (AC-8)

| Field | T2 post-Save | T3 recovered | Match |
| --- | --- | --- | --- |
| Class Name | `FX_UM` | `FX_UM` | Yes |
| Base Class | `FX_UMBase` | `FX_UMBase` | Yes |
| Domain IDO Name | `FX_UMs` | `FX_UMs` | Yes |
| Domain Property | `FX_UM` | `FX_UM` | Yes |
| Domain List Properties (brief: Additional List Properties) | `FX_Description` | `FX_Description` | Yes |
| Data Type (inherited) | `String` | `String` | Yes |
| Length (inherited) | `10` | `10` | Yes |
| Column Data Type (inherited) | `nvarchar` | `nvarchar` | Yes (displayed text; stored SQL casing not inspected) |
| Label String ID (inherited) | `FX_sUM` | `FX_sUM` | Yes |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / `anton.ramos@3mworks.com.ph` / `G6R` | identical | Yes |
| Rows returned | one FX_UM record (T2 grid also showed FX_UMBase) | one data record | Yes for FX_UM |

- Limitation: the inherited values were blank before the T2 Save. Their display after close and reopen is recovery of what the UI shows. Whether they are stored, or only derived on display, is not established by this UI.

### Asterisk inventory (recovered record, field by field)

- Form labels with an asterisk: `*Domain IDO Name:`, `*Domain Property:`, `*Domain List Properties:`.
- Form labels without an asterisk: `Class Name:`, `Base Class:`, `Description:`, `Revision No:`, `Revision Date:`, `Locked By:`, `Access As:`, `Data Type:`, `Length:`, `Column Data Type:`, `Label String ID:`.
- Grid headers with an asterisk: `* Revision No`, `* Revision Date`, `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`.
- Grid headers without an asterisk: `Class Name`, `Data Type`, `Length`, `Column Data Type`, `Label String ID`.
- For comparison, FX_UMBase's browse record (T1, T2 baseline) shows asterisks on `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`. The recovered FX_UM record does not.
- **Meaning:** unresolved. Required versus override is not established by the native UI. No asterisk is treated as an override indicator.

### Checkout visuals (no controls used)

- `Check In` and `Undo Check Out` are enabled on the recovered FX_UM record. Not used. Whether the lock must be cleared is an operator decision outside this experiment.

### FX_UMBase preservation (AC-9, qualified)

- The pre-close snapshot (`t3-00`) showed the FX_UMBase row with its T1 baseline values (String, 10, nvarchar, FX_sUM; Revision 1; Locked By operator; Access As G6R; checked).
- FX_UMBase is **not** part of the recovery result. The brief forbids a further query, so FX_UMBase was not re-read after the reopen. Its checkout indication was not re-read as a separate record after the reopen.
- No supported mutation of FX_UMBase occurred in T3 (action log and screenshot inference only).

### Acceptance checks for T3

| AC | T3 status | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | Carried from T1; re-checked at T3 start (authenticated, IdoPropertyClasses, Save disabled, no dialog) | `t3-00` | Site Developer context not verified |
| AC-2 | Carried from T1 (gate established); not repeated | `t1-06` to `t1-09` | Single session; plain text |
| AC-3 | Carried; FX_UMBase baseline visible in `t3-00` | `t3-00` | Visual reading |
| AC-4 | Carried from T2 (pre-Save verification); the recovered values re-verified in AC-8 | `t2-06`, `t3-04` | — |
| AC-5 | Asterisk inventory re-captured on the recovered record; inherited values displayed after reopen | `t3-04` | Pre-Save effective values were not observable (T2 limitation) |
| AC-6 | Carried from T2 (one Save) | `t2-07` | UI-level only |
| AC-7 | **Supported**: one native close (tab removed, no prompt); one reopen through Select Form (IdoPropertyClasses; blank criteria; Save disabled) | `t3-00`, `t3-01`, `t3-02` | UI-level only; no database read |
| AC-8 | **Supported (same session, UI level)**: one fresh exact-name query returned one `FX_UM` record with Base Class `FX_UMBase`, Domain IDO `FX_UMs`, Domain Property `FX_UM`, Domain List Properties `FX_Description`, and inherited String / 10 / nvarchar / FX_sUM as displayed; Save disabled; no unsaved-change indication or message | `t3-03`, `t3-04` | Same session; not cross-session; not database durability; stored casing not inspected |
| AC-9 | **Partial**: FX_UMBase baseline visible before close; not re-read after reopen (further query forbidden); no supported mutation in T3 | `t3-00` | Qualified |
| AC-10 | **Partial**: T3 reconciled to controller actions and screenshots below; final audit awaits a separate authorization | operation counts | Observed only |

### Operation counts (T3)

| Operation | Count |
| --- | --- |
| Form close | **1** |
| Form reopen (toolbar Open + Select Form OK) | **1** |
| Recovery query | **1** |
| Save / New / Delete / Refresh | **0 / 0 / 0 / 0** |
| Check In / Check Out / Undo Check Out | **0 / 0 / 0** |
| Browser clicks | **4** (close; toolbar Open; Select Form row; Select Form OK) |
| Plain fills | **1** (`FX_UM`) |
| Tab presses | **1** |
| F4 presses | **1** |
| Screenshots | **5** (`t3-00` to `t3-04`) |
| Full snapshots / finds | **4 / 6** (read-only; matches `harness-audit-T3.md`) |
| Errors / Ref-not-found / recovery snapshots / timeouts | **0 / 0 / 0 / 0** |
| JavaScript, evaluate, run-code, direct SQL | **0** |
| Login, logout, reload, navigation, session replacement | **0** |
| Dialogs answered | **0** |

### Evidence (T3)

| File | Visible identity / scope / result | Proves | Does not prove |
| --- | --- | --- | --- |
| `evidence/EXP-047-R2/t3-00-pre-close-initial-state-FX_UM-saved-clean.png` | Property Classes tab; rows FX_UMBase and FX_UM; the T2 values on FX_UM; Save greyed; no dialog | Clean pre-close state; FX_UM values unchanged since T2 | Database state |
| `evidence/EXP-047-R2/t3-01-post-close-state-no-prompt.png` | Property Classes tab removed; toolbar disabled; no dialog | One close with no prompt; no runtime Form open | What the close wrote (nothing beyond the earlier Save was attempted) |
| `evidence/EXP-047-R2/t3-02-reopened-fip-blank-criteria-before-query.png` | Property Classes reopened; status `Filter in Place`; blank criteria; Save greyed | Reopened IdoPropertyClasses in FiP mode, clean | Any query result |
| `evidence/EXP-047-R2/t3-03-recovery-criteria-FX_UM-before-f4.png` | Criteria `FX_UM` echoed; other criteria blank | The exact recovery criterion before F4 | The result |
| `evidence/EXP-047-R2/t3-04-recovery-FX_UM-after-f4-settled.png` | One data row `FX_UM`; configured and inherited values as displayed; status `Base Class (IDO Property Classes 1 of 1)`; Save greyed | AC-8 recovery of one FX_UM record in this session (UI) | Database state; cross-session persistence; FX_UMBase (not in result); asterisk meaning |

Evidence summary: `evidence/EXP-047-R2/t3-evidence-summary.md`.

Snapshot logs written by the Playwright tool (tool-generated, outside `evidence/EXP-047-R2/`): `evidence\playwright\console-2026-10-10T16-47-37-484Z.log` (console log), `page-2026-10-10T16-47-44-605Z.yml`, `page-2026-10-10T16-47-49-236Z.yml`, `page-2026-10-10T16-47-54-145Z.yml`, `page-2026-10-10T16-47-58-918Z.yml`.

### Final browser state (T3)

- One Mongoose tab, selected. Runtime tab `Property Classes` open, selected, **left OPEN and clean** (FiP mode, criteria `FX_UM`, one data row `FX_UM`, Save disabled, no dialog, no unsaved change, no portal banner).
- The FX_UM record shows Check In and Undo Check Out enabled. Not used.

### Repository changes (T3)

- `experiments/EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md`: edited (status line and this T3 section).
- `evidence/EXP-047-R2/t3-00-…png` to `t3-04-…png` (5 PNG files, created).
- `evidence/EXP-047-R2/t3-evidence-summary.md` (created).
- No other repository file was written. `tools/` was not read.

### Knowledge state (T3)

| Finding | State |
| --- | --- |
| Native Form-tab close of the Property Classes runtime Form after a clean Save produces no save or discard prompt | **observed** (one run, UI level) |
| Reopen through toolbar Open and Select Form returns IdoPropertyClasses in FiP mode with blank criteria and Save disabled | **observed** (one run) |
| Exact-name query `FX_UM` returns exactly one FX_UM data record in this session, with Base Class FX_UMBase, Domain IDO FX_UMs, Domain Property FX_UM, Domain List Properties FX_Description | **observed** (one run, same session, UI level). Not replay_verified. |
| Inherited Data Type, Length, Column Data Type and Label String ID are displayed as String, 10, nvarchar, FX_sUM after reopen | **observed** (one run, display only; stored values not inspected) |
| Plain `FX_UM` does not return FX_UMBase (matching behaviour consistent with exact matching) | **observed** (second run); not documented |
| Asterisk meaning (required versus override) | **observed** pattern; meaning **unresolved** |
| Checkout enabled on the FX_UM record after reopen | **observed**; not acted on |
| FX_UMBase preservation after reopen | **not verified** after reopen (further query forbidden); pre-close baseline observed |
| Database durability; cross-session persistence; application of FX_UM to an IDO property | **not tested** |

### Open questions and next permitted action

1. **Next permitted action (separate authorization):** preservation audit (AC-9 and AC-10). A later step may re-read FX_UMBase if authorized. The FX_UM record is checked out to the operator and needs an operator decision before any further lifecycle step.
2. **Checkout decision for the operator:** whether FX_UM (and FX_UMBase, which was already checked out before this experiment) should be checked in. Not done here.
3. **Asterisk meaning:** unresolved.
4. **Inherited values:** whether they are stored or derived on display remains unresolved. A database read would be needed, and it is out of scope.
5. Classification remains **observed only, NOT replay_verified**.

---

## T4 — Final read-only audit (no browser calls, no queries, no mutations)

- Cycle 3, task_message_id `5590fee4-79c9-4b56-9924-bd6d2ffc36e9`, worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`. Run `R-20261011-003837-AqH7`.
- Scope: review of this record, the T1/T2/T3 evidence summaries, the decisive screenshots, the three controller-generated audit files (`harness-audit-T1.md`, `harness-audit-T2.md`, `harness-audit-T3.md`), and read-only Glob and Grep checks. **The browser was not touched. Its state is unchanged from the end of T3: Property Classes open, FX_UM recovered, Save disabled, no dialog.**
- Bash is disabled in this session, so `git status` could not be run. The repository inventory below is built from Glob and from the records. The harness computes confinement itself.
- The 2026-10-11 session-start git status (harness context) listed `tools/learning-harness/*` as modified before this experiment. Those files are not EXP-047-R2 artifacts and were not touched or read.

### Corrections made in this audit (count and inference wording only)

- T2 finds count changed from "about 14" to **14**, and T3 finds count from "about 6" to **6**. Both now match the controller audits.
- T2 wording for Revision No, Revision Date, Locked By and Access As now states that the worker typed nothing into them (controller audit), and that system population is an inference.

### Controller reconciliation (action counts)

| Stage | Controller audit (total actions; by type) | Worker record | Match |
| --- | --- | --- | --- |
| T1 | 18 actions: 6 clicks, 8 key presses (Control+a 1, Backspace 1, Tab 3, F4 3), 4 `browser_type` | 6 clicks; 3 F4; 3 Tab; 1 Control+a; 1 Backspace; 4 typed entries (1 slow key-event in Select Form, 3 plain) | Yes |
| T1 snapshots / finds / tabs | 3 browser_snapshot calls (2 full, 1 targeted), 14 `browser_find`, 1 tab listing | 2 / 1 / 14 / 1 | Yes |
| T2 | 14 actions: 10 clicks, 2 `browser_type` (plain fills), 2 Tab | 10 clicks; 2 fills; 2 Tab | Yes |
| T2 snapshots / screenshots | 4 browser_snapshot; 8 screenshots | 4 full; 8 (`t2-00`–`t2-07`) | Yes |
| T3 | 7 actions: 4 clicks, 1 `browser_type`, 1 Tab, 1 F4 | 4 clicks; 1 fill; 1 Tab; 1 F4 | Yes |
| T3 snapshots / finds | 4 browser_snapshot; 6 finds; 5 screenshots | 4 / 6 / 5 | Yes |

- Flagged-tool hits: T1 4, T2 2, T3 1 (7 total, all `browser_type`). They are the planned text entries of this brief: the Select Form key-event filter, the criteria fills and the Class Name and Base Class fills. The controller flags them as tool classes that other briefs may restrict. This brief does not prohibit them. The Session Expired alert did not reappear in this replay.
- Errors recorded by the controller: none in any stage.

### Lifecycle reconciliation (AC-10 controller and screenshot cross-check)

| Stage | Count | Controller action record | Screenshot or log evidence |
| --- | --- | --- | --- |
| Absence gate (FX_UM) | 1 F4 on `FX_UM`, with a positive control before it and one after it | T1 audit orders 38–42 (FX_UM criteria, Tab, F4) and 49–52 (FX_UMBase, Tab, F4); baseline F4 at order 28 | `t1-06`, `t1-07` (zero data rows; placeholder only); `t1-08`, `t1-09` (one row FX_UMBase) |
| New | **1** (T1: 0; T3: 0) | T2 audit order 6 (toolbar New) | `t2-00` pre-New, then the T2 snapshot showing row 2 added |
| FX_UM configuration | 5 values (Class Name, Base Class, Domain IDO, Domain Property, Domain List Properties) | T2 audit orders 8–38 | `t2-01`–`t2-06` |
| Save | **1** (T1: 0; T3: 0) | T2 audit order 42 (only Save click in the run) | `t2-07` (Save disabled, row not starred); persisted tool log `evidence\playwright\page-2026-10-10T16-44-48-667Z.yml` |
| Form close | **1** | T3 audit order 6 (close control) | `t3-00` (pre-close clean); `t3-01` (tab removed, Explorer shown, no prompt) |
| Form reopen | **1** | T3 audit orders 9, 12, 14 (toolbar Open; Select Form row; OK) | `t3-02` (IdoPropertyClasses, FiP, blank criteria, Save disabled) |
| Recovery query (FX_UM) | **1** | T3 audit orders 18, 19, 22 (type FX_UM; Tab; F4) | `t3-03` (criteria), `t3-04` (one data row FX_UM) |

- **Unexplained actions:** none. Every controller entry in T1, T2 and T3 maps to a worker record entry.
- **Ambiguity on the gate:** the zero-row result shows as a blank add-mode placeholder with status `1 of 1`, so the status count includes the placeholder. The data-row count rests on the grid display in `t1-07`, not on a grid accessibility snapshot, which was not taken in this replay.

### Evidence inventory (repository, read-only Glob)

| Path | Owner | Status |
| --- | --- | --- |
| `experiments/EXP-047-R2-hello-world-part-2-derived-fx-um-property-class-cr.md` | this worker | created T1; edited T2, T3, T4 |
| `evidence/EXP-047-R2/t1-00` … `t1-09` (10 PNG) and `t1-evidence-summary.md` | this worker | created T1 |
| `evidence/EXP-047-R2/t2-00` … `t2-07` (8 PNG) and `t2-evidence-summary.md` | this worker | created T2 |
| `evidence/EXP-047-R2/t3-00` … `t3-04` (5 PNG) and `t3-evidence-summary.md` | this worker | created T3 |
| `evidence/EXP-047-R2/harness-audit-T1.md`, `-T2.md`, `-T3.md` | **harness/controller**, not worker-authored | present; read in T4; not edited |
| `evidence/playwright/…` (T1: 16-39-02 to 16-40-09; T2: console 16-43-26 and page 16-43-34 to 16-44-48; T3: console 16-47-37 and page 16-47-44 to 16-47-58) | Playwright tool, not worker-authored; outside `evidence/EXP-047-R2/` | present (T2 and T3 entries confirmed by Glob; T1 16-39 entries confirmed by Glob, 16-40-09 listed in the T1 record and not re-checked) |
| `experiments/EXP-047-hello-world-part-2-derived-fx-um-property-class-cr.md` | a prior run (EXP-047 original, blocked) | present; **not written** by this replay |

- No other repository change was made by this worker. `tools/` was not read. No AGENTS.md, recipe, memory file, IDO, Form or Designer artifact was written. The FX_UM metadata record lives in Mongoose, not in the repository.
- Confinement check: the only repository writes in the T1–T4 record are the EXP-047-R2 record and `evidence/EXP-047-R2/` files. The Playwright logs sit outside that directory, as the brief anticipated. The harness should assess them.

### Single FX_UM artifact inventory

- One property class `FX_UM` in the IdoPropertyClasses collection (Mongoose metadata, not in the repository). Class Name `FX_UM`; Base Class `FX_UMBase`; Domain IDO `FX_UMs`; Domain Property `FX_UM`; Domain List Properties `FX_Description`; inherited Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM` (as displayed after Save and after reopen); Revision No `1`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`.
- The FX_UM record is **checked out to the operator** (Check In and Undo Check Out enabled). It was not checked in or out by this worker. Clearing that is an operator decision outside this experiment.
- Cleanup, if needed later: the operator would need to decide whether FX_UM is kept or deleted. This experiment did not delete it.

### AC-1 to AC-10 evidence matrix (proposed judgments)

Judgment key: **Passed** = supported by the cited evidence with the stated limits. **Qualified** = supported, with a recorded limitation that matters. **Partial** = some parts unsupported. **Not run** = outside this experiment's execution.

| AC | Observed facts (with evidence) | Limitations | Proposed judgment |
| --- | --- | --- | --- |
| **AC-1** Preflight | Explorer with no runtime tabs at start (`t1-00`). Identity bar text `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` in the accessibility name of the banner button (T1–T3 snapshots); DEM badge visible (`t1-00`). No Session Expired or sign-in screen (find "session" no match at T1 start; no dialog at T2 or T3). Property Classes opened through Select Form (`PropertyClass` filter → `Property Classes` / `IdoPropertyClasses`, `t1-01`, `t1-02`); URL `favoriteContext=IdoPropertyClasses`. Save disabled at open. Controller audits show no Designer click in T1–T3. | Configuration name is read from the identity bar (observed). The brief's sign-in and configuration selection were operator-provided and not verified by the worker. "Site Developer" context not visible or verified. "Vendor Form definition untouched" is supported by the absence of Designer actions in the audits, not by a Designer read. | **Passed (qualified)** |
| **AC-2** Target absence | Plain `FX_UM` query (Class Name only, others blank), committed by Tab (`t1-06`), then F4: zero data rows, one blank add-mode placeholder, status `Base Class (IDO Property Classes 1 of 1)` (`t1-07`). Positive control `FX_UMBase`: one data row (`t1-08` criteria; `t1-09` one row). Matching rule observed: plain `FX_UM` did not return `FX_UMBase` (T1), and in T3 the same plain text returned only `FX_UM`; consistent with exact matching, not documented. | Single session, UI only. Prefix form (`FX_UM*`) not run in this experiment. Case variants not typed (inference from EXP-040 and EXP-044). Zero-row result rests on the displayed grid in `t1-07`; no grid accessibility snapshot was taken. | **Passed (qualified)** |
| **AC-3** Base-class baseline | FX_UMBase browse record: Class Name `FX_UMBase`; Data Type `String`; Length `10`; Column Data Type `nvarchar`; Label String ID `FX_sUM`; Revision 1; Revision Date `10/10/2026`; Access As `G6R`; Locked By `anton.ramos@3mworks.com.ph` (clipped in `t1-04`; in full in the T2 accessibility snapshot). Checkout indication: Check In and Undo Check Out enabled, shown in `t1-04`, `t1-09` and `t2-00` (FX_UMBase displayed as the record). No class created at this stage. | Visual reading plus accessibility at T2. | **Passed** |
| **AC-4** Derived-class configuration | Before Save, row 2 read Class Name `FX_UM`, Base Class `FX_UMBase`, Domain IDO `FX_UMs`, Domain Property `FX_UM`, Domain List Properties `FX_Description` in native controls (`t2-06`, pre-Save snapshot). Pre-Save tool log `page-2026-10-10T16-44-34-423Z.yml` contains `FX_Description`. Only one new row. Controller audit shows no typed or clicked edit on any other field. | Left grid in `t2-06` shows Class Name only; full row values are in the accessibility log, not the image. The UI label "Domain List Properties" is used for the brief's "Additional List Properties" (see ambiguities). | **Passed (qualified)** |
| **AC-5** Inheritance and override indicators | Pre-Save: Data Type, Length, Column Data Type and Label String ID **blank** on the new row (`t2-06`; T2 snapshot). Pre-Save asterisks: Class Name (red); `*Domain IDO Name:`, `*Domain Property:`, `*Domain List Properties:`; grid headers `* Class Name`, `* Revision No`, `* Revision Date`, and the three Domain headers. No asterisk on Base Class or the inherited labels. Post-Save (`t2-07`): Data Type `String`, Length `10`, Column Data Type `nvarchar`, Label String ID `FX_sUM` populated; Class Name asterisk gone; Domain asterisks kept. No manual edit of inherited fields (controller audits). | Effective inherited values were **not exposed before Save**, so none is recorded for that stage. Meaning of asterisks **unresolved**. Pre-Save asterisk state is from the T2 snapshot (inline) and `t2-06`. | **Passed (qualified)**: inventory and no-manual-edit confirmed; pre-Save effective values not observable |
| **AC-6** Single Save | Exactly one Save click (T2 audit order 42). Settled state (`t2-07`): Save disabled; new row not starred; no dialog, validation text or duplicate-name message. Post-Save tool log `page-2026-10-10T16-44-48-667Z.yml` contains the FX_UMBase row values and the FX_Description entry. | UI-level only. No success message is shown by this UI (as in EXP-043), so success is inferred from the settled state. | **Passed (UI level)** |
| **AC-7** Runtime lifecycle | Pre-close (`t3-00`): clean, Save disabled, no dialog. One native close (T3 audit order 6). Closed (`t3-01`): Property Classes tab removed, toolbar disabled, Explorer shown, no save or discard prompt. One reopen through toolbar Open → Select Form → OK (T3 audit orders 9–14). Reopened (`t3-02`): URL `favoriteContext=IdoPropertyClasses`, tab `Property Classes`, FiP mode, blank criteria, Save disabled. | Closed and reopened states are UI observations in one session. | **Passed** |
| **AC-8** Recovery | One fresh exact-name query `FX_UM` after reopening (T3 audit orders 18–22). Criteria `FX_UM` (`t3-03`). Settled (`t3-04`): one data row `FX_UM`, not starred. Base Class `FX_UMBase`; Domain IDO `FX_UMs`; Domain Property `FX_UM`; Domain List Properties `FX_Description` (form fields in `t3-04`). Inherited as displayed: `String`, `10`, `nvarchar`, `FX_sUM`. Asterisk pattern matches T2 post-Save (see AC-5). Save disabled; no dialog; no unsaved-change indication. Revision and Locked By unchanged. | Same session, UI level only. The recovered grid row values (right pane) are only in an inline snapshot, not in a persisted file; the form fields are in the `t3-04` image. Stored values not inspected (display only). Locked By clipped in the image. | **Passed (same session, UI level)** |
| **AC-9** Preservation | FX_UMBase values: observed in `t1-04` and `t1-09` (image), `t2-00` (image; checkout enabled), and the persisted post-Save tool log `page-2026-10-10T16-44-48-667Z.yml` (row values match the baseline). Pre-close (`t3-00`): FX_UM is the displayed record; FX_UMBase values only in an inline snapshot taken in T3, not persisted. No action on the FX_UMBase row in any controller audit. The Base Class combobox selected `FX_UMBase` as a reference on FX_UM; it did not change FX_UMBase. | **Post-reopen: not verified.** The recovery query returned only FX_UM, and the brief forbids another query. FX_UMBase checkout indication was **not directly observed after the T2 Save** (the displayed record was FX_UM then) and not after the reopen. The T3 pre-close FX_UMBase values are not in a persisted file. No cross-check of the FX_UMs IDO, its properties, strings or Forms beyond the action audits. | **Partial (qualified)**. The checkout state of FX_UMBase after the Save is unsupported |
| **AC-10** Final audit | Counts reconciled to controller audits: absence gate (FX_UM 1 F4; positive controls 2 F4); New 1; FX_UM record 1; Save 1; close 1; reopen 1; recovery query 1. Screenshots and persisted logs correspond. Repository inventory (Glob) matches the record. Classification: observed only. Flagged `browser_type` hits (7) are the planned text entries. | Full `git status` not run (Bash disabled). The AC-9 gap above. Database durability, cross-session persistence and application of FX_UM to an IDO property are **not tested**. | **Passed (reconciliation)**, with AC-9 open |

### Ambiguities and naming notes

1. **"Additional List Properties" (brief) vs "Domain List Properties" (UI).** The brief's term is mapped to the UI field `Domain List Properties:` (grid column "Domain List Properties"). The separate field `Domain Additional Settings:` was left blank and not touched. The mapping is an interpretation by the worker; the operator should confirm it.
2. **Base Class typed and then selected.** The Base Class value was typed and committed, then selected again from the native list. Both set `FX_UMBase`. The second selection set the same value and was counted as part of the configuration, not as a separate edit.
3. **Revision No, Revision Date, Locked By and Access As on the new record** appeared on the row. The worker typed nothing into them (controller audits). Their origin (system-populated) is an inference.
4. **Asterisk meaning** (required versus override) is not established. The pattern changes between records and stages: the Class Name asterisk appears only while the record is being added, and the inherited labels carry asterisks on FX_UMBase but not on FX_UM. Nothing is inferred from this.
5. **Inherited values blank before Save and populated after Save.** The mechanism (applied at Save or on refresh) is not established. Whether they are stored or derived on display is unresolved; a database read would be required and is out of scope.
6. **Gate status `1 of 1`** on the zero-row query counts the placeholder row. The data-row count rests on the displayed grid.

### Recommended outcome

- **Creation and same-session UI recovery** are supported at the level stated (observed, UI level, not replay_verified). The configured relationships were verified before Save and recovered after reopen, and the inherited values are shown as before.
- **AC-9 is partial.** The FX_UMBase checkout indication was not observed after the T2 Save or after the reopen, and the brief forbids another query to fill that gap. Under the brief's rule for an unsupported acceptance check, I recommend a **qualified blocked outcome for AC-9 only**. The creation and recovery results remain recorded as observed. This is my recommendation. The operator decides the final outcome.
- **Operator decisions still open:** (a) whether FX_UM, and whether FX_UMBase, should be checked in (both were checked out to the operator when last observed); (b) whether the "Domain List Properties" mapping of "Additional List Properties" is accepted; (c) whether FX_UM is kept.

### Browser state at end of T4

- Unchanged from the end of T3. One Mongoose tab, selected. Property Classes runtime tab open in Filter-in-Place mode, criteria `FX_UM`, one data row `FX_UM`, Save disabled, no dialog, no unsaved change. No browser call was made in T4.

### Knowledge state (T4)

| Finding | State |
| --- | --- |
| Exactly one FX_UM record was created with the five configured values, one New and one Save | **observed** (one session; UI level) |
| Close and reopen through native navigation, with no prompt | **observed** (one run) |
| Exact-name recovery returns one FX_UM record with the configured relationships and the inherited values as displayed | **observed** (same session, UI level). **Not replay_verified.** |
| FX_UMBase values unchanged after the Save | **observed** for the post-Save persisted log and the pre-Save images; **not verified** after the reopen |
| FX_UMBase checkout indication after the Save and after the reopen | **unresolved** (not directly observed) |
| Asterisk meaning | **unresolved** |
| Stored versus display-derived inherited values | **unresolved** |
| Database durability, cross-session persistence, application of FX_UM to an IDO property | **not tested** |

### Open questions and blockers (T4)

- No browser work is needed for the audit. The AC-9 gap cannot be closed without a further query, which this brief forbids.
- Operator decisions listed in the recommended outcome.

## Outcome (operator, 2026-10-11)

**Accepted with limits** (operator waiver of the AC-9 gap). Run R-20261011-003837-AqH7 was completed by the coordinator as blocked in cycle 4, solely because the FX_UMBase checkout indication was not re-read after the Save or after the reopen. The brief allowed one recovery query, and that query was used for FX_UM. No action in this run targeted FX_UMBase. In `t2-06` (pre-Save), FX_UMBase is shown checked out in the grid. **Follow-up:** the next experiment's T1 re-reads FX_UMBase read-only.

Created, tenant-wide, for later cleanup:
- **Property class `FX_UM`:**
  - Base Class FX_UMBase.
  - Domain IDO Name FX_UMs, Domain Property FX_UM, Domain List Properties FX_Description.
  - Revision 1, checked out to the operator (Locked By the operator; Check In and Undo Check Out enabled).

It was created by one New, one Save (T2), one close and one reopen through Select Form, and one exact-name recovery query (T3).

Operator screenshot review:
- `t2-06` (pre-Save): the new FX_UM row has Base Class FX_UMBase and the three domain fields set. The local Data Type, Length, Column Data Type and Label String ID are blank.
- `t3-04` (after the reopen and query): exactly one FX_UM row. The Base Class and domain fields are unchanged. Data Type String, Length 10, Column Data Type nvarchar and Label String ID FX_sUM are now displayed. Status "(IDO Property Classes 1 of 1)".

Learned (observed):
1. **Inheritance on save:** a derived property class shows blank local type and label fields before the Save. After the Save and reopen, the Form displays the inherited values (String/10/nvarchar/FX_sUM). Whether these are stored locally or only displayed is not established.
2. **Override markers:** the Domain fields carry asterisks in their labels (`*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`). The tutorial describes these as overrides of inherited attributes.
3. **Field name:** the field is labelled "Domain List Properties" in this release. The tutorial calls it "Additional List Properties".
4. **Created checked out:** a new property class is created already checked out to the creating user, as FX_UMBase was.
5. **Exact matching:** the plain-text Filter-in-Place query `FX_UM` did not return FX_UMBase, with the FX_UMBase positive control run. This is consistent with exact matching in this Form.

Limits:
- Only the same session, at the UI level.
- No database read.
- FX_UMBase not re-read after the Save (waived).
- FX_UM and FX_UMBase are both still checked out.

Next in Part 2: the FX_ItemBase and FX_Cost property classes, then the FX_Items table/IDO/Form.
