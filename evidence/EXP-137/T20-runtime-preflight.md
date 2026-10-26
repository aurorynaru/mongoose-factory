# EXP-137 T20 — Web Client runtime preflight of the existing FX_LoginUsers Form (read-only; runtime opened, no record action)

Run `R-20261026-104057-G85J`, cycle 24, task T20. Worker session `9c579cc4-9217-4488-a712-b1d7527f781e`.
Scope (bounded instruction): Web Client runtime open of the existing FX_LoginUsers Form, identity and field check, collection load, and fx_probe presence check. No Add/New, no typed test value, no record insert, no Save, no Check In, no metadata unload, no portal reload, no Designer selection. Stopped before any test value, as instructed.

## Outcome

- Runtime open: **observed.** Form `FX_LoginUsers` opened once via Web Client toolbar Open → Select Form (single row `FX_LoginUsers` / `FX_LoginUsers`) → OK.
- Runtime identity: tab heading `FX_LoginUsers`, URL `favoriteContext=FX_LoginUsers`, the same name as the Designer Form. Captured (`t20-03`).
- Collection status: `(Object 1 of 1)`, one starred add-mode placeholder row, four blank edit boxes. After one Refresh the same state held (`t20-04`).
- fx_probe presence: **qualified observation.** In the unfiltered collection loaded by one Refresh, no committed row is shown, only the starred placeholder. This follows the EXP-135 T12 pattern, where committed rows appeared unstarred after Refresh. A field-level criterion for `fx_probe` was **not** run, because the runtime does not identify which edit box is `FX_Username` (see below). Presence or absence of `fx_probe` is therefore NOT established at field level.
- Add/New availability: toolbar `New` is enabled (not activated).
- Save availability: toolbar `Save` disabled before and after Refresh and FiP toggles.
- Field names at runtime: **not established.** The four edit boxes have blank captions (only `:` glyphs), and the accessibility snapshot shows them as unnamed textboxes. The fourth box carries a required marker. Nothing in the runtime identifies which box is FX_PasswordHash, FX_Role, FX_Store or FX_Username.

## Blocking point for the fx_probe criterion

The brief requires a field-level `fx_probe` criterion on FX_Username. It cannot be safely entered: no runtime label or accessible name links a box to a property, and the Designer binding readback (T19) failed. Typing `fx_probe` into an unverified box could return a false zero (wrong field). Per the brief ("if the fx_probe absence cannot be established, stop and report the exact state"), no criterion was typed. The Filter in Place route was tried only to test availability and then turned off again.

## Guard checks

| Guard | Observed |
|---|---|
| Account header | `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (masked in the snapshot; the screenshot shows the full text) |
| Configuration | `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` |
| Session expiry / sign-in dialog | none |
| Portal banner | none |
| Dialogs at task end | none |
| Save | disabled (before open, after Refresh, after FiP toggles) |

## Actions (in order)

1. Read the EXP-135 runtime procedure (T9, T12) and the EXP-137 T18–T19 evidence (already in context).
2. Tab list (read-only): tab 0 Web Client, tab 1 Designer.
3. Tab 0 selected (succeeded on first attempt after the list).
4. Fresh untargeted snapshot: header and configuration confirmed; Sql Columns panel open (read-only; shows four FX_ columns plus system columns).
5. Toolbar `Open` clicked once → Select Form dialog opened with the leftover filter `Project` (one row, IDO Projects).
6. Filter text `FX_LoginUsers` entered with a single fill (`browser_type`, non-slow). The list did not change (still IDO Projects) (`t20-01`).
7. Filter field clicked once; Ctrl+A once; `FX_LoginUsers` typed slowly once. Settled after a 3-second wait: one row `FX_LoginUsers` / `FX_LoginUsers` (`t20-02`).
8. Select Form OK clicked once → runtime Form `FX_LoginUsers` opened.
9. Fresh snapshot and screenshot `t20-03` (before Refresh).
10. Toolbar `Refresh` clicked once (read). Snapshot file `page-2026-10-26T14-58-17-605Z.yml`; screenshot `t20-04`.
11. Toolbar `Filter in Place` (FiP) clicked once → FiP on. Screenshot `t20-05`. No criterion typed.
12. Toolbar `Filter in Place` clicked once more → FiP off (toggle restore). Screenshot `t20-06`; starred placeholder back, `(Object 1 of 1)`.

## Counts

| Item | Count |
|---|---|
| Tab list | 1 |
| Tab select (Web Client) | 1 (succeeded) |
| Select Form open | 1 |
| Select Form filter entries | 2 (1 non-slow fill with no effect; 1 slow typed after Ctrl+A) |
| Select Form OK | 1 (Cancel 0) |
| Runtime open | 1 |
| Refresh | 1 |
| FiP on / off | 1 / 1 (no criterion typed) |
| Add/New | 0 |
| Typed test value | 0 (only the Select Form filter text `FX_LoginUsers`) |
| Record insert / Save | 0 / 0 |
| Runtime close / reopen | 0 / 0 |
| Check In / Check Out | 0 / 0 |
| Designer tab actions | 0 (tab 1 never selected in T20; only the tab list was read) |
| Finish / Create Form / wizard | 0 / 0 / 0 |
| Metadata unload / FormSync / portal reload | 0 / 0 / 0 |
| Coordinate clicks | 0 |
| Keyboard (Escape/Enter/Tab) | 0 (Ctrl+A only, inside the filter field) |
| Ref-not-found errors | 0 |
| Automatic recovery / session recovery | 0 / 0 (allowance not used) |
| Worker-authored browser JavaScript | 0 (the tool wrappers print generated code; the flag is not readable by the worker) |
| Console (Web Client tab) | 3 errors, 2 warnings (unchanged across all snapshots in this task; not investigated) |

## Screenshots (each viewed)

- `t20-00-webclient-select-form-open-after-toolbar-open.png`: Select Form dialog open; leftover `Project` filter; one row IDO Projects. Does not show FX_LoginUsers. Not a decisive state.
- `t20-01-select-form-fx-loginusers-filter-settled.png`: filter text `FX_LoginUsers` present but the list still shows IDO Projects. Shows that the single fill did not apply the filter.
- `t20-02-select-form-fx-loginusers-retyped-settled.png`: Select Form, filter `FX_LoginUsers` (Name, Case Sensitive off, Starts With off), one row `FX_LoginUsers` / `FX_LoginUsers`, highlighted. Supports the exact-name runtime target. Does not show runtime.
- `t20-03-runtime-fx-loginusers-after-open-before-refresh.png`: tab `FX_LoginUsers`, `(Object 1 of 1)`, starred placeholder, four blank edit boxes, required marker on the fourth, header with the account and configuration. Supports runtime identity and the pre-refresh placeholder state. Does not show field names or any committed row.
- `t20-04-runtime-fx-loginusers-after-one-refresh.png`: same as t20-03 after one Refresh; Save disabled. Supports the post-Refresh placeholder-only state. Qualified (see the Outcome section).
- `t20-05-runtime-fip-on-before-criterion.png`: FiP on (filter icon on the tab; star gone; no criterion typed). Shows the FiP mode only.
- `t20-06-runtime-fip-off-unfiltered-state.png`: FiP off; starred placeholder back; `(Object 1 of 1)`; Save disabled. Shows the clean unfiltered state at task end.

Tool-generated snapshot files (not curated): `evidence/playwright/page-2026-10-26T14-57-28-440Z.yml`, `…14-57-44-491Z.yml`, `…14-57-50-794Z.yml`, `…14-57-53-922Z.yml`, `…14-57-58-123Z.yml`, `…14-58-05-484Z.yml`, `…14-58-17-605Z.yml`, `…14-58-25-793Z.yml`, `…14-58-50-857Z.yml`.

## Acceptance mapping (T20 scope only)

- AC-8 (runtime open of the generated Form without a replacement, opened from the existing Form): runtime identity `FX_LoginUsers` observed (`t20-03`). The zero-row capture before insertion is a qualified observation (placeholder after Refresh), not a field-level criterion result. AC-8 **partially supported**.
- AC-9 / AC-10: not attempted (no insertion, no close/reopen).
- Identity and configuration guards: observed.

## Unresolved

1. Field-to-property mapping at runtime. No runtime field name or accessible name links a box to FX_Username. This also remains unresolved from T19.
2. Field-level `fx_probe` criterion. Not run. The placeholder-after-Refresh observation is qualified and needs a supported field-level check or a coordinator decision on the criterion route.
3. Runtime field captions are blank (wizard default). The four named fields are not visible to a user at runtime.
4. Console counter of this tab (3 errors, 2 warnings): unchanged and not investigated.
5. `deny_browser_javascript` flag: not verifiable by the worker.
