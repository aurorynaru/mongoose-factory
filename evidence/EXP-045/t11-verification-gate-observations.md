# EXP-045 — T11 read-only verification of committed strings and Form gates (cycle 14) — STOPPED, NO DESIGNER SAVE

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 14 · task T11 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `cd5ab57b-3ac9-42d0-96c2-94efc9d14c34`.
Date: 2026-10-10. Browser: inherited Designer tab (`FX_UMs` Form tab, User scope). No login, no reload, no navigation, no Form close/reopen, no runtime open, no creation control, no String field edit, no Global Objects OK.

## Outcome (short)

- **FX_sDescription: VERIFIED.** Global Objects > Strings filter `FX_sDescription` returned exactly one row. Its Properties show Name `FX_sDescription`, String Value `Description`, Description blank, Version `User version for user anton.ramos@3mworks.com.ph`.
- **FX_sUM: NOT VERIFIED. STOP CONDITION.** Filter `FX_sUM` returned exactly one row. Its Properties show Name `FX_sUM` and **String Value `FX_s UM`**, not `Unit of Measure`. Description blank. Version `User version for user anton.ramos@3mworks.com.ph`.
- Per the T11 gate, a wrong String Value is a STOP. **No Designer Save was performed.**
- The Form is otherwise intact: Form identity `FX_UMs`, User scope, Primary Collection `FX_UMs`, FX_UMStatic Caption `FX_sUM`, FX_DescriptionStatic Caption `FX_sDescription`, canvas order `FX_sUM` above `FX_sDescription`.
- Designer **Save is enabled** (fresh accessibility snapshot: no `[disabled]`), and Undo is **disabled**. The pending changes are the two T10 commit operations; they have not been saved.
- Global Objects was closed with its **Cancel** button (ordinary, once). No dialog is open at the end.

## Correction to the T10 record

The T10 report described the `FX_sUM` commit as "committed" with the value `Unit of Measure`. That was an over-statement: T10 verified the value **in the editor** before OK and observed the dialog close, but it did **not** verify the stored value. T11 shows the stored String Value is still `FX_s UM`. The T10 wording is superseded by this T11 observation. The cause is not established (see Interpretation).

## Actions (in order)

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | Select Designer tab | First attempt "Tab 1 not found"; list; retry succeeded. | — |
| 2 | Fresh snapshot | `FX_UMs` Form tab; User scope; Save enabled; Undo disabled; no dialog; `FX_DescriptionStatic` selected, Caption `FX_sDescription`. | — |
| 3 | Edit menu opened (ref `e5`), once | Menu opened. | — |
| 4 | Find `String` (read-only) | `String` item ref `e863`. | — |
| 5 | Click `String` (once) | Global Objects dialog opened. | — |
| 6 | Fresh snapshot | Strings filter empty (ref `e893`); Properties empty; buttons OK / Cancel / Help. | — |
| 7 | Click Strings filter (ref `e893`); type `FX_sUM` (key events); wait 2 s | One row `FX_sUM` (ref `e1194`). | `t11-01` |
| 8 | Click `FX_sUM` row (once; selection only) | Properties: Name `FX_sUM`; **String Value `FX_s UM`**; Description blank; Version `User version for user anton.ramos@3mworks.com.ph`. | `t11-02` |
| 9 | Click Strings filter; Ctrl+A; type `FX_sDescription` (key events); wait 2 s | One row `FX_sDescription` (ref `e1246`). | — |
| 10 | Click `FX_sDescription` row (once; selection only) | Properties: Name `FX_sDescription`; String Value `Description`; Description blank; Version `User version for user anton.ramos@3mworks.com.ph`. | `t11-03` |
| 11 | Find `Cancel`; click Cancel (ref `e1186`), once | Global Objects closed; no alert or prompt. | — |
| 12 | Fresh snapshot | No dialog. Save enabled. Undo disabled. `FX_DescriptionStatic` selected. | — |
| 13 | Click `FX_UMStatic` row (ref `e537`), once (selection only) | Properties `FX_UMStatic (Static)`; Caption `FX_sUM`; Type `Static`. | `t11-04` |
| 14 | Click the Properties `Form` tab (ref `e812`), once (view change) | Form properties: Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type `Default`; Form Type `Normal`; Is Master `True`; scope User (status bar). | `t11-05` |
| 15 | Click Details `Collections` tab (ref `e330`), once (view change) | `Primary Collection: FX_UMs`. | `t11-05` |
| 16 | Find Save/Undo states (read-only) | Save: `button "Save"` without `[disabled]` (enabled). Undo: `[disabled]`. | — |
| 17 | STOP. No Designer Save. | — | — |

## What the screenshots show (checked by viewing the files)

- `t11-01` (Strings filter `FX_sUM` settled): one row `FX_sUM` in red match text. Shows the filter criterion and the single match. Does not show the value.
- `t11-02` (after selecting `FX_sUM`): Properties grid with **String Value `FX_s UM`** and Name `FX_sUM`. Shows the stored value on the read path. Does not show the Designer Save state.
- `t11-03` (after selecting `FX_sDescription`): Properties grid with **String Value `Description`** and Name `FX_sDescription`. Shows the correct stored value.
- `t11-04` (FX_UMStatic selected): Properties header `FX_UMStatic (Static)`, Name `FX_UMStatic`, Caption `FX_sUM`, Type `Static`; canvas labels `FX_sUM*` above `FX_sDescription:`; components grid highlighting FX_UMStatic.
- `t11-05` (Form properties and Collections): Form properties Name `FX_UMs`, Version `User version for user…`, Device Type Default, Form Type Normal, Is Master True; Collections shows `Primary Collection: FX_UMs`; canvas order unchanged; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. The toolbar undo icon appears greyed in this image (the accessibility tree reports Undo disabled; the icon is not relied on).

## Gate evaluation (T11)

| Gate | Required | Observed | Pass |
|---|---|---|---|
| FX_sUM row count | one unambiguous match | one row | yes |
| FX_sUM Name | `FX_sUM` | `FX_sUM` | yes |
| FX_sUM String Value | `Unit of Measure` | **`FX_s UM`** | **NO → STOP** |
| FX_sDescription row count | one unambiguous match | one row | yes |
| FX_sDescription Name | `FX_sDescription` | `FX_sDescription` | yes |
| FX_sDescription String Value | `Description` | `Description` | yes |
| FX_sDescription Description | blank | blank | yes |
| FX_UMStatic Caption | `FX_sUM` | `FX_sUM` | yes |
| FX_DescriptionStatic Caption | `FX_sDescription` | `FX_sDescription` (T10 `t10-04`; T11 canvas and Properties) | yes |
| Bindings (FX_UMEdit, FX_DescriptionEdit, grid columns) | object.FX_UM / object.FX_Description | visible in the components grid snapshot (`FX_UMEdit` Edit `object.FX_UM`; `FX_DescriptionEdit` Edit `object.FX_Description`; `FX_UMGridCol` `object.FX_UM`; `FX_DescriptionGridCol` `object.FX_Description`) | yes |
| Field order | FX_UM above FX_Description | canvas: `FX_sUM` above `FX_sDescription`; Pane (01) order FX_UMStatic (tab 3), FX_UMEdit (4), FX_DescriptionStatic (5), FX_DescriptionEdit (6) | yes |
| Form identity / scope | FX_UMs, User | FX_UMs, User | yes |
| Save enabled | yes | enabled | (state only) |
| Unexpected dialog | none | none after Cancel | yes |
| **Overall** | all pass before Save | **FX_sUM value fails** | **NO — no Save** |

## Interpretation (not established)

- The stored value of `FX_sUM` reads `FX_s UM`. The value entered in T10 (`Unit of Measure`) is not present in the Global Objects view.
- Possible causes, none confirmed: (a) the T10 edit did not reach the string record before OK (the grid cell may have still held the default); (b) the Global Objects list is showing a stale client copy, although the list was opened fresh in this task; (c) the OK for `FX_sUM` committed the pre-edit object. The difference from `FX_sDescription`, which did store `Description`, is not explained.
- The `FX_sUM` resource itself exists (it is listed once and its Caption resolves), so the T9 Yes did create it, with the generated default as its stored value.
- The canvas and Caption show raw IDs and do not indicate stored values.

## Limitations

- Single session. Not replay-verified. No database-durability claim.
- The Global Objects view is the only string view found; its scope and cache behaviour are not shown.
- The Designer Save is pending. Its contents include the two string commit operations; what the save would persist for `FX_sUM` is unknown.
- The Undo state was read from the accessibility tree (disabled); the screenshot icon appearance was not relied on.

## Counts (T11)

| Operation | Count |
|---|---|
| Designer Save | **0** (blocked by the gate) |
| Finish / Form creation | **0 / 0** |
| Form close / reopen / runtime | **0 / 0 / 0** |
| Caption ellipsis clicks | **0** |
| Creation prompts answered | **0** |
| String field edits | **0** |
| Global Objects opened / cancelled / OK | **1 / 1 / 0** |
| Strings filter entries (key events) | **2** (`FX_sUM`, `FX_sDescription`) |
| Strings filter settle waits (2 s) | **2** |
| Row selections in Global Objects | **2** (selection only) |
| Component selection | **1** (`FX_UMStatic`) |
| Properties tab / Collections tab view changes | **1 / 1** |
| Tab select calls | **2** (one error "Tab 1 not found", then success) |
| Fresh untargeted snapshots | **6** |
| Finds (read-only) | **8** |
| Screenshots (worker-saved PNG) | **5** (`t11-01` to `t11-05`) |
| Ref-not-found / timeouts / error alerts | **0 / 0 / 0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

## Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` Form tab; User scope; **no dialog**; Save **enabled** (pending, not pressed); Undo disabled. Details panel on Collections (`Primary Collection: FX_UMs`); Properties on the Form tab.
- Tab 0 Web Client: `Property Classes` runtime tab; not acted on.
- The pending Designer changes are unsaved. They have not been discarded.
