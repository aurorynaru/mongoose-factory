# EXP-045 — T12 operator-authorized correction of FX_sUM String Value (cycle 16)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 16 · task T12 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `6059f571-8d63-441e-952a-58ed621437b5`.
Date: 2026-10-10. Browser: inherited Designer tab (`FX_UMs` Form tab, User scope). No login, no reload, no navigation, no Designer Save, no Form close/reopen, no runtime open, no FX_sDescription action, no creation control.

## Outcome (short)

- **Correction: VERIFIED (corrected).** The `FX_sUM` String Value was changed from `FX_s UM` to `Unit of Measure` by one cell edit, committed with **Tab** (one press). Pre-OK snapshot and screenshot showed the cell out of edit mode with `Unit of Measure`, Name `FX_sUM`, Description blank. **OK clicked once**; the dialog closed with no alert or prompt.
- **Stored-value check (read-only, Edit > String, Global Objects, Strings filter `FX_sUM`):** one unambiguous row; Properties show Name `FX_sUM`, **String Value `Unit of Measure`**, Description blank, Version `User version for user anton.ramos@3mworks.com.ph`. Global Objects closed with **Cancel** once.
- **Designer Save: NOT performed** (prohibited in T12). The toolbar Save remains **enabled**, pending. Undo disabled (accessibility snapshot).
- No "Create it?" prompt, no alert, no timeout, no third edit.
- **Corrected versus uncorrected:** before T12 the stored value read `FX_s UM` (T11 `t11-02`). After T12 it reads `Unit of Measure` (`t12-03`). The corrected value is observed in the Global Objects list, which is a client-side view; database persistence is not established.

## Gate checks (all before OK)

| Gate | Required | Observed | Pass |
|---|---|---|---|
| Designer state at start | FX_UMs open, User, no dialog | FX_UMs tab; ScopeType User; no dialog; Save enabled (pending T10/T11); Undo disabled | yes |
| Component | FX_UMStatic (Static), Caption FX_sUM | Properties `FX_UMStatic (Static)`; Caption `FX_sUM` (`t12-01`) | yes |
| Caption ellipsis result | existing editor, no create prompt | String dialog opened directly; no prompt (fresh snapshot) | yes |
| Name | FX_sUM | FX_sUM | yes |
| String Value before edit | FX_s UM (expected) | `FX_s UM` | yes |
| Cell edit commit | exit edit mode; value Unit of Measure | after Tab: textbox gone from tree; cell `Unit of Measure` (`t12-02`) | yes |
| Description | blank, unchanged | blank | yes |
| OK count | once | once | yes |
| Post-OK | no dialog / no alert | no dialog; tooltip only | yes |
| Stored value (read-only) | Unit of Measure | `Unit of Measure` (`t12-03`) | yes |

## Actions (in order)

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | `browser_tabs select 1` | "Tab 1 not found" (tool error). |  — |
| 2 | Retry `select 1` | "Tab 1 not found" (tool error). |  — |
| 3 | `browser_tabs list` | Designer at index 1. | — |
| 4 | `browser_tabs select 1` | Designer selected. | — |
| 5 | Fresh snapshot | `FX_UMs` tab; User scope; Save enabled; Undo disabled; no dialog; Details on Collections; Properties on Form. | — |
| 6 | Click Details `Components` tab | Components grid shown. | — |
| 7 | Find `FX_UMStatic` | Row ref `e749`. | — |
| 8 | Click `FX_UMStatic` row (once) | Row selected. | — |
| 9 | Click Properties `Component` tab | Component properties; Caption `FX_sUM`. | `t12-01` |
| 10 | Fresh snapshot | Header `FX_UMStatic (Static)`; Caption `FX_sUM`; Caption ellipsis ref `e920`. | — |
| 11 | Screenshot (pre-edit) | Header, Name, Caption. | `t12-01` |
| 12 | Click Caption ellipsis (`e920`), once | Existing String dialog opened directly; **no creation prompt**. Name `FX_sUM`; String Value `FX_s UM`; Description blank. | — |
| 13 | Click String Value cell (`e1072`), once | Cell in edit mode; active textbox `FX_s UM`. | — |
| 14 | Ctrl+A | Textbox contents selected. | — |
| 15 | Type `Unit of Measure` (slowly) | Textbox `Unit of Measure`. | — |
| 16 | Press **Tab**, once | Cell edit exited; grid cell shows `Unit of Measure`; textbox removed from tree. | — |
| 17 | Fresh snapshot (pre-OK verification) | Name `FX_sUM`; String Value cell `Unit of Measure` (not in edit mode); Description blank; OK / Help footer. | `t12-02` |
| 18 | Screenshot (pre-OK) | Name, committed value, blank Description, no edit mode. | `t12-02` |
| 19 | Click **OK** (`e1101`), once | Dialog closed. No alert, no prompt. | — |
| 20 | Fresh snapshot (post-OK) | No dialog (tooltip only). Caption `FX_sUM`. Save enabled; Undo disabled. | — |
| 21 | Click Edit menu (`e5`), once | Menu opened. | — |
| 22 | Find `String`; click `String` (once) | Global Objects dialog opened. | — |
| 23 | Click Strings filter; type `FX_sUM` (slowly); wait 2 s | One row `FX_sUM`. | — |
| 24 | Click `FX_sUM` row (once) | Properties: Name `FX_sUM`; String Value `Unit of Measure`; Description blank. | `t12-03` |
| 25 | Screenshot (stored value) | Global Objects with Properties. | `t12-03` |
| 26 | Find Cancel; click Cancel (`e1482`), once | Global Objects closed; no alert. | — |
| 27 | Fresh snapshot | No dialog. Save enabled (pending, not pressed). Undo disabled. | — |
| 28 | STOP | No Designer Save. FX_sDescription not touched. | — |

## What the screenshots show (checked by viewing the files)

- `t12-01`: the Designer with `FX_UMStatic` selected; Properties header `FX_UMStatic (Static)`, Name `FX_UMStatic`, Caption `FX_sUM`, Type `Static`; canvas label `FX_sUM:*`; components grid row highlighted. Proves the pre-edit identity and Caption. Does not show the string's stored value.
- `t12-02`: the open String dialog (before OK) with Name `FX_sUM`, String Value `Unit of Measure` shown as a committed grid value, Description blank; footer OK / Help. Proves the pre-OK values and that the value is no longer in an in-cell textbox. Does not prove the stored value; that is what `t12-03` checks.
- `t12-03`: Global Objects with Strings filter `FX_sUM`, one selected row; Properties Name `FX_sUM`, String Value `Unit of Measure`, Description blank, Version `User version for user an…`. Proves the stored value as shown by the Global Objects view. Does not prove database persistence or the value as seen by other scopes or sessions.

## Counts (T12)

| Operation | Count |
|---|---|
| Caption ellipsis clicks | **1** (FX_UMStatic) |
| Existing-string editor opened | **1** (no create prompt) |
| Creation prompts answered | **0** |
| String value edits (cell) | **1** |
| Commit method | **Tab ×1** (cell edit exit) |
| String dialog OK clicks | **1** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries | **1** (`FX_sUM` only; FX_sDescription not filtered in T12) |
| Row selections | **1** (`FX_sUM` in Global Objects) + **1** (`FX_UMStatic` in components grid) |
| Component property tab views (Component/Form) | **1** Component tab click (plus the earlier Form tab state) |
| Designer Save | **0** (prohibited in T12) |
| Finish / creation | **0 / 0** |
| Close / reopen / runtime | **0 / 0 / 0** |
| Tab select calls | **4** (two "Tab 1 not found" errors, one list, one successful select) |
| Explicit untargeted fresh snapshots | **8** (plus snapshots returned automatically with each action) |
| Finds (read-only) | **about 6** |
| Screenshots (worker-saved PNG) | **3** (`t12-01`, `t12-02`, `t12-03`) |
| Ref-not-found / recovery | **0 / 0** |
| Timeouts / error alerts | **0** (tab-selection errors only) |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

## Interpretation (not established)

- T10's `FX_sUM` edit had been committed by an OK without a cell commit (the editor showed `Unit of Measure`, but the grid-cell edit had not been committed). T12 committed the cell with Tab before OK, and the stored value then read `Unit of Measure`. This is the most consistent explanation of the T10/T11 mismatch, but it is **a candidate explanation from one corrected and one uncorrected run**, not an established cause. Not replay-verified.
- The `FX_sDescription` string was committed in T10 without a Tab, and it reads `Description`. The difference is therefore not explained by the commit method alone; the candidate is not yet tested on a second string.

## Limitations

- Single run. Not replay-verified. No database-durability or cross-session claim.
- The Global Objects view is a client-side list. Whether it reflects the stored string table, and whether it is cached, is not established.
- The Designer Save is still pending. It has not been performed, so Form-level persistence of the Caption association is not established.
- FX_sDescription was not re-read in T12 (not authorised); its last read was T11 (`Description`).

## Blockers and next step (coordinator)

1. Authorise (or hold) the **single ordinary Designer Save**. Pre-Save gates now pass for `FX_sUM` (`Unit of Measure`) and the earlier read of `FX_sDescription` (`Description`, T11). A fresh read of `FX_sDescription` may be wanted before Save.
2. Close/reopen, field-order (post-reopen) and runtime checks remain outstanding.
3. The Undo/Save states are read from the accessibility tree; no icon-based inference was used.

## Final browser state (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. `FX_UMs` Form tab; User scope; **no dialog**; Save **enabled (pending, not pressed)**; Undo disabled. `FX_UMStatic (Static)` selected, Caption `FX_sUM`. Details on Components.
- Tab 0 Web Client: `Property Classes` runtime tab; not acted on in T12.
