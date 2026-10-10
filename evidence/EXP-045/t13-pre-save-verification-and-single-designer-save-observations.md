# EXP-045 — T13 pre-Save verification and ONE ordinary Designer Save (cycle 17)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 17 · task T13 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `725c3d06-3344-4ef5-a6f6-b4b6bb5d1be9`.
Date: 2026-10-10. Browser: inherited Designer tab (`FX_UMs` Form tab, User scope). No login, no reload, no navigation, no Form close/reopen, no runtime open, no string creation or edit, no creation control, no Global Objects OK, no Undo, no second Save.

## Outcome (short)

- **Pre-Save gates: ALL PASSED.**
  - `FX_sUM` (Edit > String, Global Objects, filter `FX_sUM`): one row; Name `FX_sUM`; String Value **`Unit of Measure`**; Description blank.
  - `FX_sDescription` (filter `FX_sDescription`): one row; Name `FX_sDescription`; String Value **`Description`**; Description blank.
  - Global Objects closed with **Cancel** once.
  - Form: `FX_UMs` tab (Name `FX_UMs`, Version `User version for user anton.ramos@3mworks.com.ph` from T11 Form properties), User scope, Primary Collection `FX_UMs` (T11).
  - Captions: `FX_UMStatic` = `FX_sUM`; `FX_DescriptionStatic` = `FX_sDescription` (both read from Properties).
  - Bindings: `FX_UMEdit` = `object.FX_UM`; `FX_DescriptionEdit` = `object.FX_Description`; `FX_UMGridCol` = `object.FX_UM`; `FX_DescriptionGridCol` = `object.FX_Description` (components grid).
  - Order: components grid Pane (01) `FX_UMStatic` (tab 3), `FX_UMEdit` (4), `FX_DescriptionStatic` (5), `FX_DescriptionEdit` (6); canvas `FX_sUM*` above `FX_sDescription`.
  - Pre-Save fresh toolbar snapshot: Save **enabled**; Undo **disabled**; no dialog or alert.
- **ONE ordinary Designer Save performed** (toolbar Save, ref `e16`, clicked once).
- **Immediate outcome:** Save became **disabled** (fresh snapshot and screenshot). No success message, no alert, no alertdialog, no unresolved dialog. The only extra element was a hover tooltip `Save`.
- **Also observed after Save:** Regenerate Form became **disabled** (it had been enabled-looking before; this was not invoked). Undo remains disabled.
- **Not established in T13:** persistence across close/reopen (the next task). This Save completion is an observed UI state, not a database read.

## Actions (in order)

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | `browser_tabs list` | Designer at index 1 (Web Client at 0). | — |
| 2 | `browser_tabs select 1` (first attempt) | "Tab 1 not found" (tool error). | — |
| 3 | `browser_tabs select 1` (second attempt) | Designer selected. | — |
| 4 | Fresh snapshot | `FX_UMs` tab; ScopeType User; Save enabled; Undo disabled; no dialog; `FX_UMStatic (Static)` selected (Caption `FX_sUM`). | — |
| 5 | Click Edit menu (`e5`), once | Menu opened; `String` item visible. | — |
| 6 | Find `String`; click `String` (`e863`), once | Global Objects dialog opened. | — |
| 7 | Fresh snapshot | Strings filter empty (`e893`). | — |
| 8 | Click Strings filter; type `FX_sUM` (slowly); wait 2 s | One row `FX_sUM` (`e1194`). | — |
| 9 | Click `FX_sUM` row (once; selection only) | Properties: Name `FX_sUM`; String Value `Unit of Measure`; Description blank. | `t13-01` |
| 10 | Click filter; Ctrl+A; type `FX_sDescription` (slowly); wait 2 s | One row `FX_sDescription` (`e1246`). | — |
| 11 | Click `FX_sDescription` row (once; selection only) | Properties: Name `FX_sDescription`; String Value `Description`; Description blank. | `t13-02` |
| 12 | Find Cancel; click Cancel (`e1186`), once | Global Objects closed; no alert. | — |
| 13 | Click `FX_DescriptionStatic` row in components grid (`e587`), once (selection) | Header `FX_DescriptionStatic (Static)`; Caption `FX_sDescription`. | `t13-03` |
| 14 | Find Save/Undo; fresh toolbar snapshot | Save enabled; Undo disabled; no dialog. | — |
| 15 | Click toolbar **Save** (`e16`), **once** | Click returned without error. | — |
| 16 | Fresh toolbar snapshot | Save **disabled** (`[disabled] [active]`); Regenerate Form disabled; Undo disabled. | — |
| 17 | Find for dialogs/tooltip | No alertdialog; tooltip `Save` only. | — |
| 18 | Screenshot (post-Save) | Save icon greyed; no dialog; Form `FX_UMs`; scope User. | `t13-04` |
| 19 | STOP | No further Save, no Undo, no close/reopen, no runtime. | — |

## What the screenshots show (checked by viewing the files)

- `t13-01`: Edit > String Global Objects; filter `FX_sUM`; one matching row selected; Properties Name `FX_sUM`, String Value `Unit of Measure`, Description blank, Version `User version for user an…`. Proves the stored value in the Global Objects view. Does not prove database persistence.
- `t13-02`: filter `FX_sDescription`; one matching row selected; Properties Name `FX_sDescription`, String Value `Description`, Description blank. Same limit as `t13-01`.
- `t13-03`: Designer pre-Save; `FX_DescriptionStatic (Static)` selected, Caption `FX_sDescription`; canvas `FX_sUM:*` above `FX_sDescription:`; components grid shows FX_UMStatic (tab 3), FX_UMEdit object.FX_UM (tab 4), FX_DescriptionStatic (tab 5), FX_DescriptionEdit object.FX_Description (tab 6). Proves the pre-Save caption and order. Canvas text shows raw IDs, not literal values.
- `t13-04`: post-Save; Save icon greyed; no dialog; status bar User scope; canvas raw ID text unchanged. Proves the Save-disabled UI state and no dialog. Does not prove the saved content; that needs close/reopen.

## Gate evaluation

| Gate | Required | Observed | Pass |
|---|---|---|---|
| FX_sUM row | one exact match | one row | yes |
| FX_sUM Name / String Value | FX_sUM / Unit of Measure | FX_sUM / Unit of Measure | yes |
| FX_sDescription row | one exact match | one row | yes |
| FX_sDescription Name / String Value | FX_sDescription / Description | FX_sDescription / Description | yes |
| Global Objects closed by Cancel | once, no prompt | once; no prompt | yes |
| Form identity / scope | FX_UMs / User | FX_UMs / User | yes |
| Captions | FX_sUM; FX_sDescription | FX_sUM; FX_sDescription | yes |
| Bindings | object.FX_UM; object.FX_Description | as listed | yes |
| Order | FX_UM above FX_Description | FX_UM above FX_Description | yes |
| Save enabled, no prompt before Save | yes | yes | yes |
| Save clicks | once | once | yes |

## Counts (T13)

| Operation | Count |
|---|---|
| Designer Save | **1** (ordinary toolbar Save, once) |
| Finish / Form creation | **0 / 0** |
| Form close / reopen / runtime | **0 / 0 / 0** |
| Caption ellipsis clicks | **0** |
| Creation prompts answered | **0** |
| String value edits / string creations | **0 / 0** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries | **2** (`FX_sUM`, `FX_sDescription`) |
| Row selections in Global Objects | **2** |
| Component selections | **1** (`FX_DescriptionStatic`, selection only) |
| Undo clicks | **0** |
| Tab select calls | **3** (one list; one "Tab 1 not found" error; one success) |
| Fresh untargeted / toolbar-scoped snapshots | **about 5** (plus automatic snapshots) |
| Finds (read-only) | **about 7** |
| Screenshots (worker-saved PNG) | **4** (`t13-01` to `t13-04`) |
| Ref-not-found / timeouts / error alerts | **0 / 0 / 0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload, Regenerate Form | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

## Limitations

- Save completion is an observed UI state (Save disabled, no alert). It is not verified by reopen.
- The Global Objects view is a client-side list. The string values were read from it, not from the database.
- Regenerate Form's state changed to disabled after the Save; its meaning is not established and it was not invoked.
- Canvas labels still show raw IDs; literal display of captions at runtime or after reopen is not established.
- Single session. Not replay-verified. No database-durability claim.

## Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` Form tab; User scope; **Save disabled** (post-Save); Undo disabled; **no dialog**; `FX_DescriptionStatic (Static)` selected, Caption `FX_sDescription`.
- Tab 0 Web Client: `Property Classes` runtime tab; not acted on.
