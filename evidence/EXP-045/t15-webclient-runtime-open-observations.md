# EXP-045 — T15 optional single read-only Web Client runtime open of FX_UMs (cycle 19)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 19 · task T15 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `fe6ce0a1-9c9b-4dc2-8023-af6a54f8d6b4`.
Date: 2026-10-10. Browser: Web Client tab (tab 0) selected for this task; Designer tab (tab 1) not acted on.

## Outcome (short)

- **Preflight: PASS.** Web Client tab present and selected; authenticated (identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); no sign-in or configuration screen; no portal banner; no unsaved-change prompt; Save disabled.
- **Native navigation: PASS.** Toolbar `Open` (once) → Select Form dialog. Filter `FX_UMs`, Filter By Name, Case Sensitive and Starts With unchecked. Settled result: **one row** `FX_UMs` / `FX_UMs` (Caption / Name). Row selected once; OK once.
- **Runtime FX_UMs opened** in a new Web Client tab (`FX_UMs`, `favoriteContext=FX_UMs`).
- **Captions observed (runtime):** the grid column header reads `* Unit of Measure`; the field labels read `Unit of Measure:*` (above) and `Description:` (below). Order: **Unit of Measure above Description**. Both captions render as intended.
- **AC-11: OBSERVED** (optional, non-gating). Runtime open succeeded without authentication recovery and without any metadata change. Captions render in the intended order.
- **No write:** no field typed, no record selected, no Save/Add/New/Delete/Refresh/Submit pressed. The Save button stayed disabled. The focused field (`Unit of Measure`) is empty; the Form was left open read-only as the brief directs.

## Observations (as seen)

| Item | Observed | Evidence |
|---|---|---|
| Form tab | `FX_UMs` tab, selected, closable tab `Close Panel FX_UMs` | `t15-02` |
| Form header / title | `FX_UMs` tabpanel heading; `favoriteContext=FX_UMs` in the tab URL | snapshot |
| Column header (grid) | `* Unit of Measure`, and `Description` | `t15-02` |
| Field labels | `Unit of Measure:*` above `Description:` | `t15-02` |
| Field values | both empty | `t15-02` |
| Grid row | one row, row marker `1` with a star and arrow, cells empty | `t15-02` |
| Status bar | `Unit of Measure (Object 1 of 1)` | `t15-02` |
| Save | disabled | snapshot |
| Dialogs | none after the Select Form OK | snapshot |
| Other runtime tabs | `FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns` remain open (leftover state; not changed) | snapshot |

## Limits (what this does NOT prove)

- The status line `Object 1 of 1` and the single grid row do not establish whether the row is a stored record or a blank placeholder. The brief forbids claims about record counts beyond what is directly visible; none are made.
- Caption display at runtime is observed for this session only. It does not show string-table durability (not claimed).
- The Form was opened from the Web Client's Select Form; the Designer was not used in T15 and was not re-checked.
- Single run. Not replay-verified.

## Operation counts (T15)

| Operation | Count |
|---|---|
| Runtime Form opened | **1** |
| Select Form dialog opened (toolbar Open) | **1** |
| Select Form row selected | **1** |
| Select Form OK | **1** |
| Select Form Cancel / Close | **0** |
| Records entered, edited, saved or deleted | **0** |
| Save / Add / New / Delete / Refresh / Submit clicks | **0** |
| Designer Save, Finish, Form creation, string edits | **0 / 0 / 0** |
| Form close / reopen (Designer) | **0 / 0** |
| Tab select calls | **1** (tab 0 selected; no error) |
| Fresh snapshots (untargeted) | **4** |
| Finds (read-only) | **4** |
| Screenshots (worker-saved PNG) | **2** (`t15-01`, `t15-02`) |
| Ref-not-found / timeouts / error alerts | **0 / 0 / 0** |
| Recovery snapshots / corrected inspections | **0 / 0** |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload, direct URL | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

## Evidence files (T15)

- `evidence/EXP-045/t15-01-webclient-select-form-FX_UMs-single-row-before-open.png`: Select Form, filter `FX_UMs`, Name, both boxes unchecked, one row FX_UMs/FX_UMs highlighted. Proves the native selection before OK. Does not prove the runtime open.
- `evidence/EXP-045/t15-02-webclient-runtime-FX_UMs-opened-captions-Unit-of-Measure-Description.png`: runtime FX_UMs tab; `Unit of Measure:*` above `Description:`; grid header `Unit of Measure`; Save greyed; status `Unit of Measure (Object 1 of 1)`. Proves the rendered captions and order. Does not prove record content or database state.
- `evidence/EXP-045/t15-webclient-runtime-open-observations.md` (this file).

## Browser state at stop (last verified)

- Tab 0 Web Client (selected): runtime **FX_UMs** tab open and selected, read-only, empty fields, Save disabled, no dialog. Leftover runtime tabs (`FX_HelloWorld01`, `Property Classes`, `IDOs`, `Sql Tables`, `Sql Columns`) untouched.
- Tab 1 Designer: not acted on in T15. Last state (T14): `FX_UMs` Form tab, User scope, Save disabled, no dialog.
- No browser-native dialog. No unsaved-change prompt.
