# EXP-048 T6 — Evidence summary (ONE exact-name recovery query for FX_ItemBase after reopen; AC-8)

Run `R-20261011-012552-sBdG`, cycle 5, task T6, task_message_id `62cf0dd7-ebdc-45ce-ab16-c0e22deb00e9`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: ONE fresh native exact-name Filter-in-Place query for FX_ItemBase; verify AC-8 against the T2 pre-Save configuration and the T4 post-Save evidence. **No query for FX_Cost or any other class; no close; no reopen; no New; no Save; no record edit; no metadata lifecycle action; no check-in or checkout; no browser refresh; no re-authentication; no corrective recovery snapshot (T1 allowance exhausted).** Classification: **observed, same session, UI level only. Not independent database durability, not replay verification.**

## Preflight (fresh untargeted snapshot, `T6` start)

| Check | Observed |
| --- | --- |
| Tab / Form | One Mongoose tab; Property Classes selected; URL `favoriteContext=IdoPropertyClasses` |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Mode | Status `Filter in Place`; FiP icon on the heading |
| Criteria | Class Name textbox empty and focused; all other criteria empty; **no retained restrictive criterion** |
| Grid | One empty criteria row, unchecked; no record data |
| Save | Disabled (`[disabled]`) |
| Dialog | None (`find` "dialog" → no match; `T6-00` shows no dialog) |

Clean, FiP mode, blank criteria: the clearing step was not needed, because the criteria were already blank.

## Criterion and single query

| Step | Action | Observed |
| --- | --- | --- |
| 1 | Pre-query screenshot `T6-00` | Blank criteria, Save greyed |
| 2 | ONE plain fill `FX_ItemBase` into Class Name (`f1e432`, current from the T6 start snapshot) | Textbox `FX_ItemBase` |
| 3 | ONE Tab | Criterion committed |
| 4 | Screenshot `T6-01` before the query | Criteria `FX_ItemBase`; other criteria blank; status `Filter in Place`; the grid shows only the criteria echo row `FX_ItemBase` (unchecked, not a data row) |
| 5 | **ONE F4** | Query executed |
| 6 | Wait 3 s (no repeat query) | Settled |
| 7 | Screenshot `T6-02` | See the settled state below |

**Query count: exactly 1 F4 for FX_ItemBase.** No repeat, no second F4, no FX_Cost query.

## Settled result (`T6-02`)

| Check | Observed |
| --- | --- |
| Data rows | **One** data row, `FX_ItemBase`: row number `1`, row-selector checkbox **checked**, no star (not an add-mode placeholder) |
| Status | `Base Class (IDO Property Classes 1 of 1)` |
| Transient state | Not sampled during the settle (no capture between F4 and the 3 s wait). The criteria echo row was absent and the data row present at the first post-settle capture |
| Save | **Disabled** (`find` "Save" → `[disabled]`; greyed in `T6-02`) |
| Dialog / prompt / unsaved-change indication / message | None (`find` "dialog" → no match) |
| Tabs | One Mongoose tab |

## Recovered values versus the pre-Save configuration (AC-8)

Accessibility evidence `T6-03` (targeted snapshot of the tabpanel, using a ref from the current DOM, not a stale ref).

| Field | Pre-Save (T2 `T2-02`/`T2-03`) | Post-Save T4 (`T4-02`) | Recovered T6 (`T6-02`/`T6-03`) | Match |
| --- | --- | --- | --- | --- |
| Class Name | `FX_ItemBase` | `FX_ItemBase` | `FX_ItemBase` (textbox, grid cell) | Yes |
| Data Type | `String` | `String` | `String` (combobox) | Yes |
| Length | `20` | `20` | `20` (textbox, grid cell) | Yes |
| Column Data Type | `nvarchar` | `nvarchar` | `nvarchar` (combobox, grid cell) | Yes (display text; stored casing not inspected) |
| Label String ID | `FX_sItem` | `FX_sItem` | `FX_sItem` (textbox, grid cell) | Yes |
| Decimal Position | blank (not specified) | blank | blank | Yes (unchanged) |
| Default Value | blank (not specified) | blank | blank | Yes (unchanged) |
| Base Class | blank | blank | blank (combobox empty) | Yes |
| Domain IDO Name / Domain Property / Domain List Properties | blank | blank | blank (comboboxes empty) | Yes |
| Domain Additional Settings | blank | blank | blank | Yes |
| Description | blank | blank | blank | Yes |
| Revision No / Revision Date | `1` / `10/10/2026` | `1` / `10/10/2026` | `1` / `10/10/2026` | Yes |
| Locked By / Access As | operator / `G6R` | operator / `G6R` | operator / `G6R` | Yes |

Exactly one data record; all five configured attributes match. No value was changed by the recovery.

## Formatting, pending indicators and asterisks (AC-8 documentation)

| Item | Pre-Save (T2, pending) | Post-Save (T4, settled, FX_ItemBase row) | Recovered (T6) | Change |
| --- | --- | --- | --- | --- |
| Row star (pending) | Starred | Cleared | Not starred | None from T4 |
| Form label `Class Name:` | Red asterisk (add-mode) | Plain | Plain (no asterisk) | Same as T4 |
| Form labels `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` | Starred | Starred | Starred | Same |
| Form labels `Decimal Position`, `Default Value`, Domain labels | Plain | Plain | Plain | Same |
| Grid headers starred | `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` | Class Name unstarred; others starred | `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` (Class Name unstarred) | Same as T4 |
| Check In / Undo Check Out | Disabled (pending) | Enabled for the displayed FX_Cost record | **Enabled** (accessibility `T6-03`: `button "Check In" [ref=f1e490] [cursor=pointer]`, `button "Undo Check Out" [ref=f1e492] [cursor=pointer]`; no `[disabled]`) | Enabled, as expected for a saved, checked-out record. Operator-owned lock. Not acted on |
| Locked By | operator | operator | operator | Same |

**Formatting differences from the pre-Save configuration:** none in display values. The formatting differs only in the expected pending-to-saved style: the star and the add-mode red asterisk on Class Name are gone, and the Check In / Undo Check Out buttons are enabled. No effective value changed.

**Numeric display:** not applicable to FX_ItemBase (String type). FX_Cost numeric display is outside T6 scope.

**Asterisk meaning:** still **unresolved**. The starred labels are the same four labels on FX_ItemBase that were starred before the Save. No meaning is inferred.

## Column-header label observation (recorded, not interpreted)

- The full T6 start snapshot listed the last grid column header as `Hidden` (`f1e332`). The targeted T6 tabpanel snapshot (`T6-03`) and the pre-close T5 snapshot list it as `UI hidden`. Both reads were taken in this session. The difference is recorded as an observed inconsistency between two accessibility reads of the same column; no cause is assumed.

## Preservation (qualified)

- **FX_UMBase and FX_UM:** not displayed in this query (exact-name `FX_ItemBase` returns only FX_ItemBase) and not re-queried. Their checkout indications were not visible in the settled view. **Not independently verified in T6.** Qualified by the action log (no T6 action targeted either class).
- **FX_Cost:** not queried (by instruction). **Not verified in T6.**
- No record was modified; no checkout, check-in or Undo action was taken.

## Action counts (T6, and cumulative EXP-048)

| Operation | T6 | Cumulative (T1–T6) |
| --- | --- | --- |
| New | 0 | **2** (FX_ItemBase in T2, FX_Cost in T3) |
| Save (toolbar) | 0 | **1** (shared; T4) |
| Form close | 0 | **1** (T5) |
| Form reopen | 0 | **1** (T5) |
| **Recovery (exact-name) queries** | **1** (FX_ItemBase, one F4) | **1** (FX_ItemBase); FX_Cost recovery still outstanding |
| Check In / Check Out / Undo | 0 | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 |
| Errors | 0 in T6 | T1: 1 ref error (recovered); T5: 1 stale ref (not recovered) |

T6 browser mutations: **3 actions** (one plain fill of the criterion, one Tab, one F4). Reads: 4 `browser_find` calls (`dialog` before the query; `Save`, `Label String ID:`, `dialog` after the query); 1 untargeted snapshot at start; 1 targeted accessibility snapshot of tabpanel `f1e88` (ref taken from the current-DOM `find` result); 1 tab list; 1 wait (3 s). Screenshots: 3 PNG (`T6-00`, `T6-01`, `T6-02`) plus 1 accessibility YAML (`T6-03`).
Worker-authored JavaScript, evaluate, run-code, direct SQL: **0**. The tool wrapper generated code for each action; the worker supplied refs only.

## Evidence index (T6)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T6-00-pre-query-FiP-blank-criteria-before-FX_ItemBase.png` | Property Classes, FiP mode, blank criteria, one unchecked empty row, Save greyed, no dialog | Clean state before the query (no restrictive retained criterion) | Any query result |
| `T6-01-criterion-FX_ItemBase-before-single-F4.png` | Criterion `FX_ItemBase`; other criteria blank; status `Filter in Place`; grid shows the criteria echo row (unchecked) | The exact criterion before the single F4 | The result |
| `T6-02-settled-after-single-F4-FX_ItemBase.png` | One data row FX_ItemBase (checked, no star); String, 20, nvarchar, FX_sItem; Check In and Undo Check Out enabled; status `Base Class (IDO Property Classes 1 of 1)`; Save greyed | AC-8 recovered values and settled Save state, as displayed | Stored values; persistence; FX_Cost |
| `T6-03-settled-FX_ItemBase-recovery-accessibility.yml` | Accessibility tree of the tabpanel: Class Name FX_ItemBase; combobox String; Length 20; Column Data Type nvarchar; Label String ID FX_sItem; Base Class and Domain comboboxes empty; grid row with all cell values; Check In and Undo Check Out enabled | AC-8 values as accessibility properties; Base Class and Domain blank | Stored values; the origin of system-populated fields |

## Acceptance check (AC-8)

- **AC-8: SUPPORTED (same session, UI level).** One fresh exact-name query after the reopen returned exactly one FX_ItemBase data record. Data Type String, Length 20, Column Data Type nvarchar and Label String ID FX_sItem match the pre-Save configuration. Save is disabled. No unsaved-change indication or unexpected message is present. Formatting and asterisk differences from the pre-Save configuration are documented: none in effective values; the pending star and add-mode asterisk have cleared, and Check In / Undo Check Out are enabled.
- Limits: display values and accessibility properties, not stored values; no database read; single session; FiP exact-name query only.

## Limitations

- The recovery is observed in one session at UI level. It does not establish that the values are stored in the database, that they persist across sessions, or that the classes behave correctly at runtime.
- The `Hidden` / `UI hidden` header inconsistency is an accessibility-read difference, not explained.
- Check In and Undo Check Out enabled indicates a checkout held by the operator, not a verified lock state in the database.
- FX_Cost recovery is outstanding (AC-9 not run in T6).
