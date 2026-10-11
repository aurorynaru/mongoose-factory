# EXP-061 — T1 read-only preflight report (cycle 0)

**Status: T1 COMPLETE (read-only; zero mutations).** Target `FX_Items` IDO is confirmed unambiguous; baseline inventory of 11 properties is recorded; `FX_Picture` is absent from the IDO; the `dbo.FX_Items.FX_Picture` column and the `FX_Picture` property class are visible through supported native read-only views. FX_Items is **checked in**. No checkout, New Property, Finish, Save, close, reopen or runtime-record action was taken. Classification: **observed only; not replay_verified.** Stop for coordinator review before any change to FX_Items.

Run `R-20261011-223208-4y9y`, cycle 0, task T1. Worker session `3b3208ec-666d-4ace-b69d-4c7d8d3fe7fe`; task_message_id `11700932-1958-43f6-b89f-211f7fb4df1b`. Date 2026-10-11. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10). Editing scope User.

---

## 1. Sources reviewed (before any browser interaction)

- `AGENTS.md`: full. Relevant: FX_ prefix; one small controlled operation per step; verify before Save; evidence under `evidence/<experiment-id>/`; no reload, navigation or close/reopen as recovery unless permitted; checkpoint before context loss.
- `docs/mongoose/transcripts/hello-world-pt4.md`, Section 3 (lines 119–131, "Publish Picture as a bound Items IDO property — 02:13–03:00"). Narrated steps: open IDO Collections and filter to Items with F4; choose New Property, keep the default Bound type; Bind To the Picture column; accept the default name Picture; select the Picture property class; verify inherited data and SQL column types; Finish; then "close the form and unload global form objects as the tutorial directs". **The unload step is not authorized by the EXP-061 brief and is not part of this experiment.** The narrated result (Items.Picture bound and inheriting from the class) is narrated, not confirmed.
- `experiments/EXP-049-…create-fx-items-sql-table-and-i.md` (lines 1–302 of 356): FX_Items IDO created via the Data Maintenance wizard in `FX_HelloWorldProject01` with alias `fxitms`; eleven IDO properties (four business + seven framework); IDO was checked out by the wizard, then checked in once at T14 (Revision 1 → 2; Locked By blank; Check Out enabled; Undo Check Out disabled). The T14 post-check-in pattern is the same pattern observed in this T1 (see §4). The EXP-049 `Properties` button opened a separate IDO Properties Form tab (T12); T1 used the in-form `Properties` tab instead (see §6 note). The remainder of EXP-049 (lines 303–356) was not read.
- `experiments/EXP-050-…create-fx-items-multi-view-form.md`: **partial** (targeted search only). Recorded the FX_Items IDO as checked in (Revision 2, Locked By blank) at its T1 readback (line 203), and the FX_Items runtime Form as the EXP-050 Form. The rest of the record was not read in T1.
- `experiments/EXP-051-…domain-validation-and-.md`: **partial** (targeted search only). Its outcome lists FX_UMBase, FX_UM, FX_ItemBase and FX_Cost as still checked out to the operator (line 311). The record was not read in full in T1, and no FX_Items checkout statement was located in the targeted search.
- `experiments/EXP-048-…two-property-classes-with-one-s.md`: **partial** (targeted search only). Property-class procedure: New, field configuration, F2 lookup for Column Data Type, one shared Save; new classes are created checked out to the creating user (Check In and Undo Check Out enabled). Used to interpret the checkout indicators on the FX_Picture class.
- `experiments/EXP-059-…add-nullable-fx-pictu.md`: full. `dbo.FX_Items.FX_Picture` added as varbinary, Length -1, nullable, Column Id 13 (12 columns total). Accepted with limits (AC-8 waived by operator). **Not assumed from the title alone**: T1 re-checked the column in the Sql Columns view (§5).
- `experiments/EXP-060-…create-and-recover-fx.md`: full. `FX_Picture` property class created (Binary, Length -1, varbinary, PNG), one Save, close/reopen, one recovery query; accepted with limits; checked out to the operator. **Not assumed from the title alone**: T1 re-queried the class (§5).

Not read: `tools/` (intentionally unreadable per the brief). `AGENTS.md` was not altered.

## 2. Repository starting state (operator-provided session-start git status; not re-verified; no shell)

- Branch `claude-harness`; main branch `main`; git user `aurorynaru`.
- Recent commits (operator-provided): `0f44939` EXP-061 approved brief; `2861517` EXP-061 draft brief (operator guards added); `08bb0e3` EXP-060 accepted; `d3c06d8` EXP-060 approved brief; `74ce19e` EXP-060 draft brief.
- **Pre-existing modifications (not EXP-061 work; not touched by the T1 worker):** `tools/learning-harness/README.md`, `tools/learning-harness/briefs/EXP-035.brief.json`, `tools/learning-harness/harness.config.example.json`, `tools/learning-harness/src/shadow/cli.ts`, `tools/learning-harness/src/shadow/runner.ts`, `tools/learning-harness/test/shadow.test.ts`.
- Files written by the T1 worker are listed in §12. No other repository file was written by T1.

## 3. Start state and session gates (AC-1)

- Tab list (1 read); tab 1 (Mongoose Web Client) selected on the first attempt. Tab 0 (Web Designer, `MGForm=FX_Items`) was not acted on.
- Identity bar: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in, session or configuration challenge. No `portal-notification` banner visible; no dismissal performed.
- Inherited Form at start: FX_Items runtime (`Object 1 of 3`), Save disabled, no dialog. Inherited tabs at start: Sql Tables, Sql Columns, FX_Items, Property Classes.
- Evidence: `t1-01-webclient-initial-state.png` (shows the identity bar, the four inherited tabs, Save disabled, FX_Items runtime with three records). Proves the session is usable and unchallenged; does not prove the Mongoose server-side configuration beyond the identity bar text.

## 4. Native IDO Collections open and exact-name query (AC-1, AC-2)

**Open (native route).** Toolbar `Open` (one click) opened the Select Form dialog directly. The pre-filled filter `PropertyClass` was replaced with `IdoCollections` (one entry, one `End` key to refresh). The list then showed two rows: `G6RIdoCollectionSearch` and **`IDOs` / `IdoCollections`**. The `IDOs` row was selected (active) and **OK** was clicked once. Result: `favoriteContext=IdoCollections`; the IDOs tab became active; Save disabled; no dialog; no challenge. Evidence: `t1-02-idos-opened-via-select-form-initial.png`; `t1-snapshot-01-idos-after-select-form.yml`.

Observed: the IDOs Form opens in Filter in Place with one blank placeholder row, the IDO Name criteria field active, New IDO / New Property enabled (blue), Check Out disabled (before the query), and no record loaded.

**Exact-name query (one, F4).** One entry in the IDO Name criteria field: `FX_Items` (the field was empty before entry); screenshot before F4 (`t1-03-idos-criterion-FX_Items-before-F4.png`); one F4; 2 s settle. Result: **one row**, `FX_Items` (row 1; checkbox unchecked), status **`IDO Name (IDOs 1 of 1)`**. Evidence: `t1-04-idos-FX_Items-query-settled.png` (identity, status and Save disabled visible); `t1-snapshot-02-idos-FX_Items-after-F4-settled.yml`.

Observed `FX_Items` IDO header (accessibility readback, matched to the screenshot):

| Field | Observed value |
| --- | --- |
| IDO Name | `FX_Items` |
| Project Name | `FX_HelloWorldProject01` |
| Base table (Tables sub-grid) | `FX_Items`, alias `fxitms`, Table Type `Primary Base`, Join Type `Inner` (one table row) |
| Revision Num | `2` |
| Revision Date | `10/10/2026` |
| Locked By | blank (empty textbox) |
| Label String ID / Caption | `oFX_Items` / `oFX_Items` |
| Access As | `G6R` |
| Extends / IDO Assembly Name / Ext Class Name / Profile Name | blank |
| Row checkbox | not checked |
| Check Out | enabled (solid blue) |
| Undo Check Out | disabled (light blue) |
| Save | disabled |

Checkout state interpretation (not labelled as a status field): **checked in.** Basis: row checkbox unchecked, Locked By blank, Check Out enabled and Undo Check Out disabled. This matches the post-check-in pattern recorded in EXP-049 T14 (checkbox cleared; Locked By blank; Revision Num 1→2; Check Out enabled; Undo Check Out disabled). **No checkout was performed.**

## 5. Complete pre-change property inventory (AC-2)

Read from the in-form `Properties` tab of the same IDOs Form (tab selection, view only; `t1-snapshot-03-idos-FX_Items-properties-tab.yml`; `t1-05-idos-FX_Items-properties-baseline-visual.png`).

**Cardinality:** 11 property rows (row numbers 1–11). Property Type: all 11 are `Bound to Column`. Derived properties: 0. Target `FX_Picture`: **absent** (no row with that name; no duplicate or case variant of `picture` in the 11 names).

| # | Property Name | Seq | Property Class | Property Type | Column Name | Key Seq | Data Type (grid) | Length (grid) | Column Type (grid) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FX_Item | 1 | FX_ItemBase | Bound to Column | FX_Item | 1 | blank* | blank* | blank* |
| 2 | FX_Description | 2 | (none) | Bound to Column | FX_Description | 0 | String | 150 | nvarchar |
| 3 | FX_Cost | 3 | FX_Cost | Bound to Column | FX_Cost | 0 | blank* | blank* | blank* |
| 4 | FX_UM | 4 | FX_UM | Bound to Column | FX_UM | 0 | blank* | blank* | blank* |
| 5 | CreatedBy | 5 | (none) | Bound to Column | CreatedBy | 0 | String | 128 | UsernameType |
| 6 | UpdatedBy | 6 | (none) | Bound to Column | UpdatedBy | 0 | String | 128 | UsernameType |
| 7 | CreateDate | 7 | (none) | Bound to Column | CreateDate | 0 | Date | blank | CurrentDateType |
| 8 | RecordDate | 8 | (none) | Bound to Column | RecordDate | 0 | Date | blank | CurrentDateType |
| 9 | RowPointer | 9 | (none) | Bound to Column | RowPointer | 0 | GUID | blank | RowPointerType |
| 10 | NoteExistsFlag | 10 | (none) | Bound to Column | NoteExistsFlag | 0 | Byte | blank | FlagNyType |
| 11 | InWorkflow | 11 | (none) | Bound to Column | InWorkflow | 0 | Byte | blank | FlagNyType |

\* Blank in the grid's accessibility readback and in the visible strip of the screenshot. **Not established:** the class-inherited Data Type/Length/Column Type for rows 1, 3 and 4 is not displayed in this grid. EXP-049 T12 recorded `String 20 nvarchar` (FX_Item), `Decimal 18 scale 2` (FX_Cost) and `String 10 nvarchar` (FX_UM) from a different view; those values are carried as EXP-049 observations, not re-verified in T1. Blank cells are recorded as displayed.

**Checkbox columns (raw DOM order, not header-mapped):** every row has four checkbox states plus one empty cell. Header order is Read Only, Required, Upper Case, Pseudo Key, Read Only Record. Required is confirmed for FX_Item (checked; matches EXP-049). The mapping of the remaining checkboxes to headers is inferred from DOM order and is **not** independently verified. Raw states: FX_Item `[ ]`, `[x]`, `[ ]`, `[ ]`; FX_Description, FX_Cost, FX_UM `[ ]` ×4; CreatedBy `[x]`, `[ ]`, `[ ]`, `[ ]`; UpdatedBy `[x]`, `[ ]`, `[ ]`, `[ ]`; CreateDate `[x]`, `[ ]`, `[ ]`, `[ ]`; RecordDate `[x]`, `[ ]`, `[ ]`, `[ ]`; RowPointer `[x]`, `[ ]`, `[ ]`, `[ ]`; NoteExistsFlag `[ ]` ×4; InWorkflow `[ ]`, `[ ]`, `[ ]`, `[x]`.

**Inventory completeness:** the grid row numbers (1–11) and the 11 names agree; no row is truncated. Filter in Place match mode for the IDO Name criterion is not stated by the UI (limitation; the single result `FX_Items` is consistent with exact match but this is not proven).

**Baseline-matrix summary (for the post-change comparison):** 11 properties; 4 business (FX_Item, FX_Description, FX_Cost, FX_UM); 7 framework; all Bound to Column; no Derived; FX_Picture absent.

## 6. Note on the Properties surface

The IDOs Form has an in-form `Properties` tab (used here) and a `Properties` button (`f1e997`, disabled before the query; enabled after) that, per EXP-049 T12, opens a separate IDO Properties Form tab. **The button was not pressed in T1**, so no extra Form tab was opened. Later tasks must decide which surface the post-change inventory uses and must count any extra tab in the close/reopen audit.

## 7. SQL column prerequisite — `dbo.FX_Items.FX_Picture` (AC-3)

Route: the inherited `Sql Tables` tab (one record shown: `FX_Items`, schema `dbo`, `Save` disabled, status `Columns... (SQL Tables 1 of 1)`) → one `Columns...` click (view only) → the `Sql Columns` child. The inherited record was not re-queried in T1 (limitation).

- Status: **`SQL Columns 12 of 12`**. Schema `dbo`; Table Name `FX_Items`. Save disabled.
- Grid: 12 rows; the 11 originals (FX_Item … InWorkflow) and row 12 `FX_Picture`.
- `FX_Picture` detail (row 12, Column Id 13): **Column Name `FX_Picture`**; Data Type `varbinary`; System Data Type `varbinary`; Length `-1`; Is Nullable **checked**; Primary Key unchecked; Decimal Position blank; Default Value blank; Key Sequence blank; Column Id `13`.
- Evidence: `t1-snapshot-05-sqlcolumns-after-columns-button.yml`; `t1-07-sqlcolumns-FX_Picture-row-13-readback.png` (the decisive image; shows the Column Name, schema, table, Column Id, Data Type, System Data Type, Is Nullable, Length, and the footer `SQL Columns 12 of 12`).
- Compatibility: `varbinary` with Length `-1` is the binary family the property-class binding requires (`Binary`/`-1`/`varbinary`). **No unexpected conversion is indicated.** Compatibility is a documented expectation; the wizard's inherited SQL column type is captured only in a later task.

## 8. Property class prerequisite — `FX_Picture` (AC-3)

Route: the inherited `Property Classes` tab → `Filter in Place` (one click) → the `Class Name` criteria field already held the literal **`FX_Picture`** (retained from the EXP-060 session; the worker did **not** type it) → one `F4`; 2 s settle.

- Result: **one row** `FX_Picture`; status **`Base Class (IDO Property Classes 1 of 1)`**; Save disabled.
- Readback: Class Name `FX_Picture`; Data Type `Binary`; Length `-1`; Column Data Type `varbinary`; Binary Format `PNG`; Base Class, Label String ID, Domain IDO Name, Domain Property, Domain List Properties blank; Revision No `1`; Revision Date `10/11/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Check In and Undo Check Out enabled (checked-out interpretation, as in EXP-060 T5).
- Evidence: `t1-snapshot-08-propertyclasses-FX_Picture-query-settled.yml`; `t1-06-propertyclasses-FX_Picture-exact-query-settled.png` (shows Class Name, Data Type Binary, Length -1, Column Data Type varbinary (partly clipped), Binary Format PNG (partly clipped), Locked By, Check In/Undo enabled, status `Base Class (IDO Property Classes 1 of 1)`).
- Unambiguous: one matching row. Limit: the Base Class combobox received focus after the query (no value entered; no change made); the Filter in Place match mode is not stated by the UI.
- **Not performed:** the wizard's own property-class lookup (only accessible in a later task after the wizard is opened). Availability in the wizard is therefore **unverified in T1**; the read-only maintenance view is the T1 proof.

## 9. Checkout ownership (AC-4 pre-state)

- FX_Items: **checked in** (§4). **Zero checkout actions in T1.** The checkout prerequisite is therefore **not yet satisfied**; a single native checkout will be needed in a later authorized task.
- Property Classes `FX_Picture`: checked out to the operator (Locked By operator; Check In and Undo Check Out enabled). Not changed.

## 10. Action audit (T1, cumulative = T1)

| # | Action | Target / detail | Result |
| --- | --- | --- | --- |
| 1 | browser_tabs list | read | Tab 0 Designer (`MGForm=FX_Items`); tab 1 Web Client (current) |
| 2 | browser_tabs select 1 | Web Client | Succeeded on first attempt |
| 3 | browser_snapshot (untargeted, fresh) | start state | Identity bar; four inherited tabs; FX_Items runtime |
| 4 | browser_take_screenshot | `t1-01` | Start state |
| 5 | browser_click | toolbar Open (`f1e25`) | Select Form dialog opened |
| 6 | browser_find | "Select Form" | read; confirmed dialog |
| 7 | browser_snapshot (dialog target) | `f1e699` | read; filter `PropertyClass` |
| 8 | browser_type | Select Form filter (`f1e728`) → `IdoCollections` | **flagged by harness as `browser_type`; native filter entry** |
| 9 | browser_press_key | End | list refreshed (two rows) |
| 10 | browser_snapshot (dialog target) | read | IDOs row present |
| 11 | browser_click | IDOs row (`f1e763`) | row active |
| 12 | browser_snapshot (dialog target) | read | row active verified |
| 13 | browser_click | Select Form OK (`f1e747`) | IDOs tab opened (`favoriteContext=IdoCollections`) |
| 14 | browser_snapshot (untargeted, saved) | `t1-snapshot-01` | read |
| 15 | browser_take_screenshot | `t1-02` | initial IDOs state |
| 16 | browser_type | IDO Name criteria (`f1e862`) → `FX_Items` | **flagged by harness as `browser_type`; criteria entry** |
| 17 | browser_take_screenshot | `t1-03` | pre-F4 criterion |
| 18 | browser_press_key | F4 | **the one exact-name IDO query** |
| 19 | browser_wait_for | 2 s | settle |
| 20 | browser_take_screenshot + browser_snapshot | `t1-04`; `t1-snapshot-02` | 1 of 1 result |
| 21 | browser_click | IDOs in-form `Properties` tab (`f1e1011`) | view only |
| 22 | browser_snapshot (untargeted, saved) | `t1-snapshot-03` | 11-row inventory |
| 23 | browser_take_screenshot | `t1-05` | baseline visual (partly obscured by DevTools pane) |
| 24 | browser_click | Sql Tables inherited tab (`f1e99`) | view only |
| 25 | browser_snapshot (untargeted, saved) | `t1-snapshot-04` | Sql Tables FX_Items 1 of 1 |
| 26 | browser_click | Columns... (`f1e1731`) | read-only child view; no second Sql Columns tab |
| 27 | browser_snapshot (untargeted, saved) | `t1-snapshot-05` | 12 of 12; FX_Picture row 13 |
| 28 | browser_click | Property Classes inherited tab (`f1e108`) | view only |
| 29 | browser_snapshot (untargeted, saved) | `t1-snapshot-06` | inherited FX_Picture record |
| 30 | browser_click | Filter in Place (`f1e38`) | FiP mode on Property Classes |
| 31 | browser_snapshot (untargeted, saved) | `t1-snapshot-07` | Class Name `FX_Picture` retained |
| 32 | browser_press_key | F4 | **the one property-class query** (no typing) |
| 33 | browser_wait_for | 2 s | settle |
| 34 | browser_snapshot (untargeted, saved) | `t1-snapshot-08` | 1 of 1 |
| 35 | browser_take_screenshot | `t1-06` | exact-query settled |
| 36 | browser_click | Sql Columns inherited tab (`f1e102`) | view only |
| 37 | browser_take_screenshot | `t1-07` | FX_Picture column readback |

**Not performed (explicit):** checkout (0); check-in or undo checkout (0); New Property wizard (0); Finish (0); Save (0); New (0); Delete (0); IDO close (0); IDO reopen (0); Form close or reopen of any kind (0); FX_Items runtime interaction (0); Designer use (0); unload, cache, FormSync (0); JavaScript or run-code (0); browser console or network inspection (0 by worker; the harness/tool auto-writes console and page logs, see §11); DevTools pane toggled (0); dialog answered (1: Select Form OK, a Mongoose dialog); ref-not-found or timeouts (0); portal banner dismissals (0); fresh snapshot recoveries used (0).

## 11. Counts and tool disclosure

- Browser interaction actions: **clicks 9** (Open, IDOs row, OK, Properties tab, Sql Tables tab, Columns..., Property Classes tab, Filter in Place, Sql Columns tab); **type 2** (both flagged by the harness as `browser_type`; both native entries into fields the brief requires: the Select Form filter and the IDO Name criterion); **keys 3** (End ×1; F4 ×2); **tab select 1**; **waits 2**.
- **Exact-name queries (F4):** 2 (IDO `FX_Items`; Property Classes `FX_Picture`, retained criterion). The brief's IDO query count is 1 (satisfied); the property-class query is a read-only prerequisite check.
- Form opens: 1 (IDO Collections through Select Form). Form closes: 0. Reopens: 0.
- Snapshots: 9 untargeted (1 fresh start snapshot plus 8 saved as `t1-snapshot-01`…`-08`); 3 dialog-targeted reads of the Select Form dialog; finds 1; screenshots 7 (`t1-01`…`t1-07`).
- **Tool-generated files (not worker-authored):** the Playwright tool wrote `evidence\playwright\page-*.yml` and `console-*.log` files automatically on each action. The worker did not read the console logs and made no console call. These are listed for transparency only.

## 12. Written-file inventory (worker-written, T1)

- `experiments/EXP-061-hello-world-part-4-section-3-add-and-recover-fx-picture-bound-property.md` — created (EXP-061 record; the file did not exist at T1 start).
- `evidence/EXP-061/T1-report.md` — created (this report).
- `evidence/EXP-061/t1-01-webclient-initial-state.png`
- `evidence/EXP-061/t1-02-idos-opened-via-select-form-initial.png`
- `evidence/EXP-061/t1-03-idos-criterion-FX_Items-before-F4.png`
- `evidence/EXP-061/t1-04-idos-FX_Items-query-settled.png`
- `evidence/EXP-061/t1-05-idos-FX_Items-properties-baseline-visual.png`
- `evidence/EXP-061/t1-06-propertyclasses-FX_Picture-exact-query-settled.png`
- `evidence/EXP-061/t1-07-sqlcolumns-FX_Picture-row-13-readback.png`
- `evidence/EXP-061/t1-snapshot-01-idos-after-select-form.yml` … `t1-snapshot-08-propertyclasses-FX_Picture-query-settled.yml` (eight accessibility snapshots, written by the snapshot tool at the worker's request).

No other repository file was written by T1. `tools/` was not read or written. `AGENTS.md` and tutorial sources were not altered.

## 13. Acceptance status (T1)

| AC | Status (T1) | Evidence | Limits |
| --- | --- | --- | --- |
| AC-1 | **Supported (observed)**: sources reviewed; start state documented; Web Client usable; IDOs Form opened through Open > Select Form; no authentication or session challenge; identity bar observed | `t1-01`, `t1-02`; `t1-snapshot-01`; §1–4 | Heading observed as the tab label `IDOs` (route `favoriteContext=IdoCollections`), not the words "IDO Collections"; server-side configuration beyond the identity bar not inspected |
| AC-2 | **Supported (observed, UI level)**: one `FX_Items` IDO (`1 of 1`); project FX_HelloWorldProject01; base table FX_Items (fxitms, Primary Base); revision 2; Locked By blank; checked in; 11-property inventory recorded; FX_Picture absent | `t1-03`, `t1-04`, `t1-05`; `t1-snapshot-02`, `-03`; §4–5 | Class-bound Data Type/Length/Column Type blank in this grid (not re-verified); checkbox header mapping inferred; Filter in Place match mode not stated |
| AC-3 | **Supported (observed, UI level)** for the SQL column (`varbinary`, -1, nullable, Column Id 13, `12 of 12`) and the class (one `FX_Picture` row: Binary, -1, varbinary, PNG) | `t1-06`, `t1-07`; `t1-snapshot-05`, `-08`; §7–8 | SQL column via the inherited Sql Tables record (not re-queried); class via retained criterion (not typed); wizard lookup not yet exercised; no database read |
| AC-4 | **Pre-state observed; prerequisite NOT yet satisfied** (FX_Items checked in). **No checkout performed** (T1 prohibits it) | §4, §9 | Checkout is for the next authorized task |
| AC-5 – AC-10 | **Not started** (T1 scope ends before the wizard) | — | — |

## 14. Blockers, open questions and next permitted step

- **Blockers: none in T1.** All T1 gates passed: identity unambiguous; inventory complete at 11 with FX_Picture absent; column and class visible; no authentication or configuration challenge.
- **Open:**
  1. Class-bound Data Type/Length/Column Type are blank in the IDO Properties grid. Whether the wizard or a detail-pane read will show them is for a later task; not a T1 blocker.
  2. Checkbox column mapping for the Properties grid is inferred from header order (Required confirmed only for FX_Item).
  3. Filter in Place match mode for the IDO Name and Class Name criteria is not stated by the UI.
  4. The IDOs `Properties` button (opens a separate Form tab per EXP-049) was not pressed; the post-change inventory surface must be chosen by the coordinator.
- **Next permitted step (NOT started; requires coordinator authorization):** T2 — exactly one native `Check Out` of FX_Items (the only checkout permitted), recording the response, revision and Locked By; then the single New Property wizard after all gates pass. The checkout is an IDO lifecycle action and needs explicit authorization for this task.
- **Coordinator review requested before any change to FX_Items.**

## 15. Limitations

- UI-level, same-session observations only. No database read; no independent session recovery; no cache-state check.
- Column and class readbacks in §7–8 partly rely on inherited tab state (the SQL Tables record was not re-queried; the Property Classes criterion was retained, not typed by the worker).
- No runtime image, binary, or PNG functionality was tested or claimed.
- The Mongoose DevTools pane partly obscures the IDOs property grid in `t1-05`; the accessibility readback is the complete source for the inventory.
