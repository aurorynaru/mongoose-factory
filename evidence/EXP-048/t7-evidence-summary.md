# EXP-048 T7 — Evidence summary (ONE exact-name recovery query for FX_Cost after reopen; AC-9)

Run `R-20261011-012552-sBdG`, cycle 6, task T7, task_message_id `f60f83fa-4b53-4676-9120-43d8a857b5bf`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: ONE fresh native exact-name Filter in Place query for FX_Cost, replacing the retained FX_ItemBase criterion; verify AC-9 against the T3 pre-Save and T4 settled evidence. **No FX_ItemBase query; no other class; no close; no reopen; no New; no Save; no record edit; no metadata lifecycle action; no check-in or checkout; no refresh; no re-authentication; no corrective recovery snapshot (T1 allowance exhausted).** Classification: **observed, same session, UI level only. Not independent database durability; not replay verification.**

## Preflight (`T7-00`)

| Check | Observed |
| --- | --- |
| Tab / Form | One Mongoose tab; Property Classes; URL `favoriteContext=IdoPropertyClasses` |
| Identity bar | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Displayed record | FX_ItemBase (browse mode, the T6 recovered record), status `Base Class (IDO Property Classes 1 of 1)` |
| Save | Disabled |
| Dialog | None (`find` "dialog" → no match) |

## Entering a fresh criteria state

| Step | Action | Observed |
| --- | --- | --- |
| 1 | ONE click on toolbar `Filter in Place` (`f1e38`, from the T7 start snapshot) | FiP entered. `T7-01`: retained criterion Class Name `FX_ItemBase` (selected). **All other criteria blank**: Locked By, Access As, Base Class, Description, Revision No, Revision Date, Data Type, Length, Decimal Position, Default Value, Column Data Type, Label String ID, Domain fields, Property Value. Status `Filter in Place` |
| 2 | ONE plain fill `FX_Cost` into Class Name (`f1e446`, replacing the selected `FX_ItemBase`) | Textbox `FX_Cost` |
| 3 | ONE Tab; screenshot `T7-02` | Criterion `FX_Cost` echoed; other criteria blank; status `Filter in Place`; the grid shows the criteria echo row `FX_Cost` (unchecked) |

The retained FX_ItemBase criterion was replaced, and no other retained restrictive criterion was present. No other field was typed.

## Single query

- **ONE F4** for FX_Cost. No repeat, no second F4.
- Wait 3 s, screenshot `T7-03`.

## Settled result (`T7-03`, `T7-04`)

| Check | Observed |
| --- | --- |
| Data rows | **One** data row, `FX_Cost`: row number `1`, checkbox **checked**, no star (not a placeholder) |
| Status | `Base Class (IDO Property Classes 1 of 1)` |
| Transient state | Not sampled between F4 and the 3 s wait. The first post-settle capture shows the data row and no criteria echo |
| Save | **Disabled** (`find` "Save" → `[disabled]`) |
| Dialog / prompt / unsaved-change indication / message | None (`find` "dialog" → no match) |

## Recovered values versus T3 pre-Save and T4 settled (AC-9)

Accessibility evidence `T7-04` (tabpanel `f1e102`, ref from the current `find` result).

| Field | T3 pre-Save (`T3-04`) | T4 settled (`T4-02`) | T7 recovered (`T7-04`) | Match |
| --- | --- | --- | --- | --- |
| Class Name | `FX_Cost` | `FX_Cost` | `FX_Cost` (textbox and grid cell) | Yes |
| Data Type | `Decimal` | `Decimal` | `Decimal` (combobox; grid cell `Decimal`) | Yes |
| Length | `18` | `18` | `18` (textbox; grid cell `18`) | Yes |
| Decimal Position | `2` | `2` | `2` (textbox; grid cell `2`) | Yes |
| **Default Value** | `0` (textbox `"0"`, grid cell `"0"`) | `0` | **`0` (textbox value `"0"`; grid cell `"0"`)** | Yes. Literal numeric zero in both the native field and the grid cell; not blank, not null |
| Column Data Type | `decimal` | `decimal` | `decimal` (combobox; grid cell `decimal`) | Yes (display text; stored casing not inspected) |
| Label String ID | `FX_sCost` | `FX_sCost` | `FX_sCost` (textbox; grid cell `FX_sCost`) | Yes |
| Base Class | blank | blank | blank (combobox empty) | Yes |
| Domain IDO Name / Domain Property / Domain List Properties | blank | blank | blank (comboboxes empty) | Yes |
| Domain Additional Settings | blank | blank | blank | Yes |
| Revision No / Revision Date | `1` / `10/10/2026` | same | `1` / `10/10/2026` | Yes |
| Locked By / Access As | operator / `G6R` | same | operator / `G6R` | Yes |

Exactly one data record was returned, and all six configured FX_Cost attributes match.

## Numeric formatting

- Default Value and Decimal Position display as `0` and `2`. Length displays `18`. No display formatting change (for example `0.00`) was observed in the recovered form or grid compared with T3 and T4. Numeric zero is distinguished from blank by the textbox value `"0"` and the grid cell `"0"` in the accessibility tree.

## Asterisk states (recorded, meaning not assumed)

| Item | T3 pre-Save | T4 settled | T7 recovered |
| --- | --- | --- | --- |
| Form label `Class Name:` | Red asterisk (add-mode) | Plain | Plain |
| Form labels starred | `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID` | same | same (accessibility: `*Data Type:`, `*Length:`, `*Decimal Position:`, `*Default Value:`, `*Column Data Type:`, `*Label String ID:`) |
| Grid headers starred | `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID` | Class Name cleared; others starred | Revision headers and the six data headers starred; Class Name unstarred |
| Domain labels | Plain | Plain | Plain |

No asterisk was added or removed between the T4 settled state and the T7 recovery. The only change from the pre-Save state is the removal of the add-mode Class Name asterisk. Meaning (required versus override) of all asterisks remains **unresolved**; no meaning is inferred. The asterisks on `Decimal Position` and `Default Value` appear only on FX_Cost's Decimal row; their cause is not established.

## Pending indicators and checkout

- Pending star: absent (cleared at the T4 Save; not present in T7).
- Check In and Undo Check Out: **enabled** (`T7-04`: `button "Check In" [ref=f1e503] [cursor=pointer]`, `button "Undo Check Out" [ref=f1e505] [cursor=pointer]`). Locked By `anton.ramos@3mworks.com.ph`. Not acted on. Enabled state is an operator-held checkout indication; no lock verification in the database was made.

## Preservation (qualified)

- FX_UMBase and FX_UM: not displayed in this query and not re-queried. **Not independently verified in T7.** Qualified by the action log (no T7 action targeted either class).
- FX_ItemBase: not queried in T7 (by instruction). Its T6 recovery stands as the most recent observation of that class; it is not re-verified here.

## Action counts (T7 and cumulative)

| Operation | T7 | Cumulative (T1–T7) |
| --- | --- | --- |
| New | 0 | **2** |
| Save (toolbar) | 0 | **1** (T4) |
| Form close / reopen | 0 / 0 | **1 / 1** (T5) |
| **Recovery (exact-name) queries** | **1** (FX_Cost, one F4) | **2** distinct: FX_ItemBase (T6), FX_Cost (T7) |
| Check In / Check Out / Undo | 0 | 0 |
| Metadata lifecycle, unload, FormSync, deployment, Designer | 0 | 0 |
| Dialogs or prompts answered | 0 | 0 |
| Errors | 0 in T7 | T1: 1 ref error (recovered); T5: 1 stale ref (not recovered) |

T7 browser actions: **1 click** (Filter in Place), **1 fill** (criterion), **1 Tab**, **1 F4**, plus **1 wait** (3 s) after the query. Reads: 5 `browser_find` calls (dialog before the FiP click; `Class Name:` after the FiP re-entry, to confirm the retained criterion; `Save`, `Default Value:` and `dialog` after the F4), 1 untargeted snapshot at start, 1 targeted accessibility snapshot of the tabpanel, and 1 tab list. Recovery snapshots: 0. Corrective inspections: 0. Screenshots: 4 PNG (`T7-00`, `T7-01`, `T7-02`, `T7-03`) and 1 accessibility YAML (`T7-04`).

Worker-authored JavaScript, evaluate, run-code, direct SQL: **0**. The tool wrapper generated code for each action; the worker supplied refs only.

## Evidence index (T7)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T7-00-pre-state-FX_ItemBase-displayed-before-FiP.png` | FX_ItemBase displayed in browse mode; status `1 of 1`; Save greyed; no dialog | Starting state before the FiP change | Any FX_Cost result |
| `T7-01-FiP-reentered-retained-FX_ItemBase-criterion.png` | FiP mode; retained Class Name `FX_ItemBase` selected; every other criterion blank | The retained restrictive criterion that was replaced; no other retained criteria | Any query result |
| `T7-02-criterion-FX_Cost-only-before-single-F4.png` | Criterion `FX_Cost`; all other criteria blank; criteria echo row; status `Filter in Place` | The exact sole criterion before the single F4 | The result |
| `T7-03-settled-after-single-F4-FX_Cost.png` | One checked data row FX_Cost; Decimal, 18, 2, 0, decimal, FX_sCost; Check In and Undo enabled; status `1 of 1`; Save greyed | AC-9 recovered values and settled Save state, as displayed | Stored values; numeric storage; persistence; FX_ItemBase |
| `T7-04-settled-FX_Cost-recovery-accessibility.yml` | Tabpanel accessibility tree: FX_Cost values as properties; textbox `Default Value:` = `"0"`; grid cell `"0"`; Base Class and Domain comboboxes empty; starred labels | AC-9 values and numeric zero in both native field and grid cell; blank relationships | Stored values; origin of system-populated fields |

## Acceptance check (AC-9)

- **AC-9: SUPPORTED (same session, UI level).** One fresh exact-name query after the reopen returned exactly one FX_Cost data record. Data Type Decimal, Length 18, Decimal Position 2, Default Value numeric zero (native field and grid cell), Column Data Type decimal and Label String ID FX_sCost match the T3 pre-Save configuration and the T4 settled state. Base Class and Domain fields are empty. Save is disabled. No unsaved-change indication or unexpected message is present. Numeric display formatting and asterisk states are recorded above.
- Limits: display and accessibility values only; single session; no database read; no replay verification.

## Limitations

- Observed in one session at UI level. It does not establish stored values, persistence across sessions, database durability, or runtime behaviour of either class.
- The FX_Cost criterion was checked before the F4 by screenshot (`T7-02`), and the settled data row by screenshot and accessibility (`T7-03`, `T7-04`). The transient state between F4 and the 3 s wait was not sampled.
- The `Hidden` / `UI hidden` header inconsistency recorded in T6 is not repeated here: the T7 targeted accessibility read shows `UI hidden`.
- Check In and Undo Check Out enabled is an operator-held checkout indication from the UI, not verified in the database.
