# EXP-048 T1 — Evidence summary (read-only preflight, existing-class baseline, collision gates)

Run `R-20261011-012552-sBdG`, cycle 0, task T1, task_message_id `7a9b5561-817f-4025-ba00-a8748afafc06`, worker session `1dfccb89-2e8f-4980-9353-b101a842bd6b`. Date 2026-10-11 (system date). Mongoose Revision Date values read `10/10/2026`.

Scope of this summary: T1 only. No New, no Save, no close, no reopen, no Designer action, no edit of any field. Classification: **observed, same session, UI level only. Not replay_verified. No database durability, cross-session persistence or application of either class to an IDO property was tested.**

## Identity and preflight (AC-1)

- Single Mongoose tab, selected (`browser_tabs` list at start and end). URL `favoriteContext=IdoPropertyClasses`.
- Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`T1-preflight-initial-state.png`, top right; accessibility name of the banner button in the start snapshot).
- Form identity: tab heading `Property Classes`, runtime Form opened earlier through Select Form (`PropertyClass` → `IdoPropertyClasses`). Only one Form tab present (`Property Classes`).
- Start state: browse mode, one row FX_UM (retained from EXP-047-R2), Save disabled, no dialog, no portal banner, no placeholder.
- Not verified: the "Site Developer" context (not visible in the native UI); the User editing scope of the Designer (the Designer was not opened in T1, so the vendor Form definition was not read or edited).

## Existing-class baseline (AC-2, read-only)

Both values were re-read by fresh native Class Name queries in this task (not taken from the inherited view).

| Attribute | FX_UMBase (screenshot `T1-03`; targeted form accessibility read after it settled) | FX_UM (screenshot `T1-06`; targeted form accessibility read after it settled, before gate A) |
| --- | --- | --- |
| Class Name | FX_UMBase | FX_UM |
| Base Class | blank | FX_UMBase |
| Description | blank | blank |
| Revision No / Revision Date | 1 / 10/10/2026 | 1 / 10/10/2026 |
| Locked By | anton.ramos@3mworks.com.ph | anton.ramos@3mworks.com.ph |
| Access As | G6R | G6R |
| Data Type / Length | String / 10 | String / 10 (inherited as displayed) |
| Decimal Position / Default Value | blank / blank | blank / blank |
| Column Data Type | nvarchar | nvarchar (inherited as displayed) |
| Label String ID | FX_sUM | FX_sUM (inherited as displayed) |
| Domain IDO Name / Domain Property / Domain List Properties | blank / blank / blank | FX_UMs / FX_UM / FX_Description |
| Checkout indication | Check In and Undo Check Out **enabled** (accessibility: no `[disabled]`) | Check In and Undo Check Out **enabled** |
| Asterisk labels (form) | `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` | `*Domain IDO Name`, `*Domain Property`, `*Domain List Properties`, `*Data Type`, `*Length`, `*Column Data Type`, `*Label String ID` |

- Interpretation of asterisks: recorded as observed; meaning (required versus override) **not established** and not inferred.
- No change was made to either class (action log: no edit, no Save, no New, no checkout action).

## Absence gates and positive controls (AC-3)

Each query: Filter in Place (toolbar), plain fill of the Class Name criterion, one Tab, one F4. All other criteria were blank in the pre-F4 screenshots.

| # | Criterion (exact text) | Pre-F4 capture | Settled result | Verdict |
| --- | --- | --- | --- | --- |
| Baseline 1 | `FX_UMBase` | `T1-02` | 1 data row `FX_UMBase` (`T1-03`), no star | Positive control (pre-gate) |
| Baseline 2 | `FX_UM` | `T1-04` | 1 data row `FX_UM` (`T1-06`), no star | Positive control (pre-gate) |
| Gate A | `FX_ItemBase` | `T1-07` | **0 data rows.** One blue-star add-mode placeholder (Class Name blank; red asterisk on Class Name label and grid header; status `Base Class (IDO Property Classes 1 of 1)`; Save disabled) (`T1-08`) | **Absence observed** (zero data rows; placeholder counted in status) |
| Positive control 3 | `FX_UMBase` | (criterion replaced from `FX_ItemBase`) | 1 data row `FX_UMBase`, no star; placeholder replaced silently, no prompt (`T1-09`) | Retrieval works after gate A |
| Gate B | `FX_Cost` | `T1-10` | **0 data rows.** One blue-star add-mode placeholder (same pattern as gate A; status `Base Class (IDO Property Classes 1 of 1)`) (`T1-11`) | **Absence observed** (zero data rows; placeholder counted in status) |
| Positive control 4 | `FX_UM` | (criterion replaced from `FX_Cost`) | 1 data row `FX_UM`, no star; placeholder replaced silently, no prompt (`T1-12`) | Retrieval works after gate B; leaves the Form clean |

- Accessibility confirmation of Save disabled with the placeholder present: `find` "Save" → `button "Save" [disabled]` (during gate A, before positive control 3).
- Case-insensitive coverage: **not typed** (operator-accepted inference from EXP-044 and EXP-047-R2; no additional case variants entered).
- Prefix (wildcard) form `FX_ItemBase*` / `FX_Cost*`: **not run** (not in brief).
- Matching rule: plain `FX_UMBase` / `FX_UM` queries each returned only their own row in this session (consistent with exact matching; not documented).

## Timing observation (UI)

- After F4 on FX_UMBase (baseline 1) and on FX_UM (baseline 2), an immediate capture showed Filter in Place with blank detail fields and an unchecked row; after about 2 seconds the record loaded. `T1-05` is the immediate pre-settle capture of FX_UM (Filter in Place, blank fields). `T1-06` is the settled capture of the same query. The FX_UMBase baseline was read from a settled capture (`T1-03`) and a targeted accessibility snapshot taken after it settled. Recorded as observed UI timing only.

## Final state (T1 end)

- `T1-12` and `T1-final-form-accessibility-FX_UM.yml`: Property Classes tab, Filter in Place cleared to one data row `FX_UM` (checked out to the operator), status `Base Class (IDO Property Classes 1 of 1)`, Save `[disabled]`, no dialog (`find` "dialog": no match), no placeholder, one Mongoose tab.
- The Form was left open and clean for a separately authorized creation task.

## Screenshot index (decisive captures)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `T1-preflight-initial-state.png` | Start state: FX_UM record, checked out, Save greyed, identity bar | AC-1 identity and clean start | Database state; Site Developer context |
| `T1-01-fip-entered-retained-criteria-FX_UM.png` | Filter in Place entered; FX_UM retained and selected | Inherited restrictive criterion existed before the first query | Any query result |
| `T1-02-baseline-criteria-FX_UMBase-before-f4.png` | Criterion `FX_UMBase`, others blank, status Filter in Place | The baseline criterion before F4 | The result |
| `T1-03-baseline-FX_UMBase-after-f4-settled.png` | One row `FX_UMBase`; String/10/nvarchar/FX_sUM; checkout buttons enabled | AC-2 FX_UMBase values as displayed, and the positive control | Database state; Locked By in full (clipped) |
| `T1-04-baseline-criteria-FX_UM-before-f4.png` | Criterion `FX_UM`, others blank | The baseline criterion before F4 | The result |
| `T1-05-baseline-FX_UM-after-f4-settled.png` | Immediate capture after F4: still Filter in Place, blank fields | That the first capture was pre-settle | FX_UM values (see T1-06) |
| `T1-06-baseline-FX_UM-settled-recheck.png` | One row `FX_UM`; Base Class FX_UMBase; Domain FX_UMs / FX_UM / FX_Description; String/10/nvarchar/FX_sUM; checkout enabled | AC-2 FX_UM values as displayed | Database state; asterisk meaning |
| `T1-07-gate-FX_ItemBase-criteria-before-f4.png` | Criterion `FX_ItemBase`, others blank | The gate A criterion before F4 | The result |
| `T1-08-gate-FX_ItemBase-after-f4-settled.png` | Zero data rows; blue-star placeholder; red asterisk Class Name; Save greyed | AC-3 absence of FX_ItemBase (UI, single session) | Completeness beyond the displayed result; case variants |
| `T1-09-positive-control-FX_UMBase-after-gate-f4-settled.png` | One row `FX_UMBase`, no star; placeholder replaced | Retrieval works after gate A; clean placeholder replacement | Database state |
| `T1-10-gate-FX_Cost-criteria-before-f4.png` | Criterion `FX_Cost`, others blank | The gate B criterion before F4 | The result |
| `T1-11-gate-FX_Cost-after-f4-settled.png` | Zero data rows; blue-star placeholder; Save greyed | AC-3 absence of FX_Cost (UI, single session) | Completeness beyond the displayed result; case variants |
| `T1-12-positive-control-FX_UM-after-FX_Cost-gate-f4-settled.png` | One row `FX_UM`, checked out; no placeholder; status 1 of 1 | Retrieval works after gate B; Form left clean | Database state |
| `T1-final-form-accessibility-FX_UM.yml` | Accessibility snapshot of the form at T1 end (FX_UM) | Save state text; values; checkout buttons enabled (no `[disabled]`) | Toolbar state (outside the saved subtree) |

## Limitations (T1)

- Single session, UI level. No database read. No cross-session or cross-user claim.
- Zero-row results rest on the displayed grid and the placeholder state, not on a grid accessibility snapshot of an empty grid. The status count `1 of 1` counts the placeholder.
- The inherited FX_UM values (String / 10 / nvarchar / FX_sUM) are display values; whether they are stored or derived on display is not established.
- The FX_UMBase checkout indication was observed in this session, but whether it persists is not tested.
- Preservation of FX_UMBase and FX_UM is qualified: the worker's action log shows no supported mutation, and the screenshots show the same values, but no independent metadata check was made.

## Recovery and error accounting (T1)

- One ref-not-found error: the first toolbar Filter in Place click, after a targeted snapshot had replaced the page-level refs. No action was executed by the failed click.
- Recovery: one fresh untargeted snapshot (allowance used), then one corrected click on the same toolbar ref from that snapshot (succeeded). No additional corrected inspection was needed.
- Timeouts: 0. Prompts answered: 0. Portal banner dismissals: 0 (none visible).
