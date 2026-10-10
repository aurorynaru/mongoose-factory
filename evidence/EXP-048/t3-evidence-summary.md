# EXP-048 T3 — Evidence summary (second New; FX_Cost configured; BOTH rows pending; Save NOT invoked)

Run `R-20261011-012552-sBdG`, cycle 2, task T3, task_message_id `a0cf1592-672c-4aad-b5ec-d3349b269025`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date).

Scope: confirm FX_ItemBase still staged and Save enabled; ONE native New; determine whether the second New caused an implicit commit; configure ONLY FX_Cost's explicit fields; verify both rows pending. **No Save, no close, no reopen, no recovery or absence query, no edit of FX_UM or FX_UMBase, no checkout or check-in, no metadata lifecycle action.** Classification: **observed, same session, UI level only; not replay_verified.**

## Preflight (before the second New)

- Fresh untargeted snapshot: one Mongoose tab (`favoriteContext=IdoPropertyClasses`); Property Classes tab selected; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`.
- Row 1 FX_UM (no star, checked out to the operator); row 2 FX_ItemBase (starred, pending).
- FX_ItemBase values (accessibility grid row and form, `T3-00`): Class Name FX_ItemBase; Data Type String; Length 20; Column Data Type nvarchar; Label String ID FX_sItem; Base Class and Domain fields empty.
- Save `[enabled]`; no dialog; status `Input Mask (IDO Property Classes 2 of 2)`.
- The Form was not closed or reopened since T2.

## Second New and implicit-commit check

- ONE click on toolbar `New` (`f1e31`, from the preflight snapshot). Row 3 added (starred, blank); status `Class Name (IDO Property Classes 3 of 3)`. `T3-01`.
- Implicit-commit check (read-only, immediately after the New):
  - Row 2 FX_ItemBase **still starred** (pending) in `T3-01`; the FX_ItemBase grid row still carries String / 20 / nvarchar / FX_sItem (`find` "FX_ItemBase").
  - Row 1 FX_UM unstarred and unchanged.
  - Save **enabled** (`find` "Save", no `[disabled]`), which is consistent with pending changes remaining.
  - No dialog, prompt or validation message (`find` "dialog" → no match; one tab).
- **Result: no implicit commit observed.** Limit: the pending star and the enabled Save are the only native indicators available; neither is a database read. Persistence is not tested.

## FX_Cost configuration (one row, five+ explicit fields)

| Step | Action | Observed |
| --- | --- | --- |
| Class Name | ONE plain fill `FX_Cost` (textbox `f1e533`), ONE Tab | Textbox `FX_Cost`; grid row 3 `FX_Cost` |
| Data Type | ONE click Open (`f1e606`); ONE click option `Decimal` (`f1e1013`) | Combobox `Decimal` |
| Length | ONE plain fill `18` (`f1e615`), ONE Tab | Textbox `18`; grid `18` |
| Decimal Position | ONE plain fill `2` (`f1e624`), ONE Tab | Textbox `2`; grid `2` |
| Default Value | ONE plain fill `0` (`f1e633`), ONE Tab | Textbox `0` (literal; accessibility `value "0"`); grid `0` |
| Column Data Type | ONE click Open (`f1e643`); ONE key-by-key type `decim` (`f1e642`); ONE F2; ONE click option `decimal` (`f1e1456`); ONE Tab | Combobox `decimal`; grid `decimal`. The filtered list showed one entry `decimal` (`T3-02`) |
| Label String ID | ONE plain fill `FX_sCost` (`f1e703`), ONE Tab | Textbox `FX_sCost`; grid `FX_sCost` |

No other field was typed or clicked. Base Class and the Domain fields were not touched and are empty.

## Pre-Save verification (both rows; `T3-03`, `T3-04`)

| Field | FX_ItemBase (row 2, pre-existing) | FX_Cost (row 3, new) | Matches spec |
| --- | --- | --- | --- |
| Class Name | `FX_ItemBase` | textbox `FX_Cost` | Yes |
| Data Type | `String` | combobox `Decimal` | Yes |
| Length | `20` | `18` | Yes |
| Decimal Position | (blank; not specified for FX_ItemBase) | `2` | Yes |
| Default Value | (blank; not specified for FX_ItemBase) | `0` (literal zero: grid cell `"0"`, textbox `"0"`; not blank or null) | Yes |
| Column Data Type | `nvarchar` | `decimal` | Yes |
| Label String ID | `FX_sItem` | `FX_sCost` | Yes |
| Base Class; Domain IDO Name; Domain Property; Domain List Properties | empty | empty | Unassigned (required) |
| Revision No / Revision Date / Locked By / Access As | `1` / `10/10/2026` / operator / `G6R` | `1` / `10/10/2026` / operator / `G6R` | System-populated on New; not typed |
| Check In / Undo Check Out (form, for the displayed row) | `[disabled]` (T2) | `[disabled]` | Not activated |

- **Both rows pending simultaneously:** row 2 and row 3 both carry the star in `T3-03`; both rows are present in the accessibility grid (`T3-04`).
- **Numeric zero:** FX_Cost Default Value is the literal character `0` in both the form textbox and the grid cell. It is distinguished from blank by its accessibility value.

## Asterisk inventory (pre-Save; meaning not assumed)

- Form labels with an asterisk, FX_Cost row: `*Class Name` (red, `T3-03`), `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID` (accessibility `*…` labels).
- Form labels without an asterisk, FX_Cost row: Base Class, Description, Revision No, Revision Date, Locked By, Access As, Inline List, Validators, Input Mask, Prompt Char, Justify, Binary Format, Date Format, IME Char Set, Boolean True, Boolean False, Display Decimal Position, the checkboxes, and all Domain labels (`Domain IDO Name:`, `Domain Property:`, `Domain List Properties:`, `Domain Additional Settings:`).
- Grid headers with an asterisk: `* Class Name`, `* Revision No`, `* Revision Date`, `*Data Type`, `*Length`, `*Decimal Position`, `*Default Value`, `*Column Data Type`, `*Label String ID`. Domain headers carry no asterisk in this view.
- Comparison with T2 (FX_ItemBase): the same four labels (`*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID`) are starred on both rows; FX_Cost additionally shows `*Decimal Position` and `*Default Value`. Why these two appear only on FX_Cost is not established (the Data Type is Decimal on this row and String on FX_ItemBase); no cause is assumed.
- Whether these asterisks mean required, override or something else is **unresolved**.

## Preservation (qualified)

- FX_UM (row 1): values unchanged and checkout buttons unchanged in the pre-Save snapshot. Not acted on.
- FX_UMBase: not displayed in this Form state and not re-queried (no further query permitted). **Not independently verified in T3.** Qualified by the action log (no action targeted FX_UMBase).

## Operation counts (T3, cumulative for EXP-048 as of this task)

| Operation | T1 | T2 | T3 | Cumulative |
| --- | --- | --- | --- | --- |
| New | 0 | 1 | **1** | **2** |
| Save | 0 | 0 | **0** | **0** |
| Close / reopen | 0 / 0 | 0 / 0 | **0 / 0** | **0 / 0** |
| Recovery queries | 0 | 0 | 0 | 0 |
| Absence queries | 2 gates + 2 controls | 0 | 0 | — |
| Check In / Check Out / Undo | 0 | 0 | 0 | 0 |

T3 browser mutations: 5 clicks (New; Data Type Open; `Decimal`; Column Data Type Open; `decimal`); 5 plain fills (Class Name, Length, Decimal Position, Default Value, Label String ID); 1 key-by-key type (`decim`); 1 F2; 6 Tab. Total 18 mutations, all in the single FX_Cost configuration.
T3 reads: 13 `browser_find`; 2 explicit snapshots (1 untargeted preflight, 1 targeted pre-Save); 1 tab listing.
T3 screenshots: 4 (`T3-00`, `T3-01`, `T3-02`, `T3-03`). Accessibility file: 1 (`T3-04`).
Errors / Ref-not-found / timeouts / recovery snapshots: **0 / 0 / 0 / 0**. Prompts or dialogs answered: **0**. Portal banner dismissals: **0**.
Worker-authored JavaScript, evaluate, run-code, direct SQL: **0**. The tool wrapper generated code for each action; the worker supplied refs only.

## Evidence index (T3)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T3-00-preflight-FX_ItemBase-pending-before-second-New.png` | Row 2 FX_ItemBase starred with String/20/nvarchar/FX_sItem; Save enabled; status `2 of 2` | Preflight: FX_ItemBase still staged before the second New | Persistence |
| `T3-01-after-second-New-both-rows-visible.png` | Rows: FX_UM (unstarred), FX_ItemBase (starred), new row 3 (starred, blank); status `3 of 3`; New tooltip | Single second New added a third pending row and left row 2 starred (no implicit commit observed) | Stored state of row 2; the new row's values |
| `T3-02-FX_Cost-column-data-type-decim-f2-lookup.png` | Rows 1–3; row 3 Decimal, 18, 2, 0; Column Data Type list filtered to one entry `decimal` | Prefix filter and single match for decimal; numeric 0 visible in Default Value | That `decimal` was committed |
| `T3-03-both-rows-pending-FX_Cost-staged-pre-save.png` | Rows 2 and 3 both starred; FX_Cost form: Decimal, 18, 2, 0, decimal, FX_sCost; Input Mask focused; status `3 of 3`; Save enabled | AC-5 visual values; both pending rows simultaneously present; asterisks on the form | Accessibility-level values (see T3-04); persistence |
| `T3-04-pre-save-accessibility-both-rows.yml` | Accessibility tree: FX_Cost form values; grid rows FX_UM, FX_ItemBase, FX_Cost with all cell values; Check In / Undo `[disabled]` | AC-4 and AC-5 control and grid values; numeric zero distinguished (`"0"`) from blank; both rows present | Persistence; the origin of system-populated fields |

## Acceptance checks (T3 scope)

- **AC-4 (FX_ItemBase, pre-Save): carried** from T2 and re-confirmed in T3 (`T3-00`, `T3-04`).
- **AC-5 (FX_Cost, pre-Save): supported** (one run, UI level): Class Name, Data Type, Length, Decimal Position, Default Value (numeric zero, distinguished from blank), Column Data Type and Label String ID verified; both rows simultaneously pending; asterisks inventoried.
- **AC-6 (shared Save): partially supported**: two New operations are recorded (T2 and T3); both definitions are verified pending; **the single shared Save has NOT been invoked** (by design of T3). AC-6's settled-state checks remain open.
- **AC-1, AC-2, AC-3:** carried from T1; not repeated.
- **AC-7 to AC-9:** not run.
- **AC-10:** partial. Counts reconciled to controller actions and screenshots above.

## Limits

- Single session, UI level. Values are the Web Client's view, not stored values.
- "Pending" is inferred from the star markers and the enabled Save. No database read.
- Implicit-commit exclusion relies on the pending star and enabled Save only. No stronger native indicator was available.
- FX_ItemBase's full field values are visible only in the accessibility grid row (`T3-04`), not in a single screenshot with FX_Cost's form. Record navigation to row 2 was not performed, to avoid changing the current record during the staging step; the grid row values are the evidence for FX_ItemBase here.
- Asterisk meaning is unresolved.
