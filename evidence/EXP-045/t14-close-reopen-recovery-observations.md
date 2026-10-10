# EXP-045 — T14 ordinary close and reopen of FX_UMs; read-only recovery verification (cycle 18)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 18 · task T14 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `21a27eb9-6bca-4a3b-a0d0-a03f4fb87b63`.
Date: 2026-10-10. Browser: inherited Designer tab. No Designer Save, no Undo, no string create/edit, no OK on any dialog, no Finish, no New Form, no runtime open, no refresh, no reauthentication, no Regenerate Form, no FormSync, no cache unload.

## Outcome (short)

- **Pre-close gate passed:** FX_UMs tab selected; ScopeType User; Save disabled; Undo disabled; no dialog.
- **Close:** the FX_UMs Form tab was closed once with its own close control (`closable FX_UMs`). **No unsaved-changes prompt, no alert.** The Designer then showed the vendor `IdoPropertyClasses` design view (Save disabled, no dialog); URL became `…?MGForm=IdoPropertyClasses`. The vendor form was not edited.
- **Reopen:** the **Form menu** lists a single `FX_UMs` entry. It was selected once. The Designer opened `FX_UMs` (URL `?MGForm=FX_UMs`). **Select Form search was NOT used** (deviation; see Limitations).
- **Recovered Form identity (observed):** Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; Device Type Default; Form Type Normal; Is Master True; status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Primary Collection `FX_UMs` (Collections tab).
- **Recovered Save/Undo (observed, fresh accessibility snapshot):** Save **disabled**; Undo **disabled**; no dialog.
- **Recovered components (observed, Components grid after Expand):** FX_UMStatic (Static, Pane 1, Tab 3); FX_UMEdit (Edit, `object.FX_UM`, Pane 1, Tab 4); FX_DescriptionStatic (Static, Pane 1, Tab 5); FX_DescriptionEdit (Edit, `object.FX_Description`, Pane 1, Tab 6); FX_UMGridCol `object.FX_UM`; FX_DescriptionGridCol `object.FX_Description`. Pane (00) contains FormCollectionGrid.
- **Recovered Caption references (observed, Properties > Component):** FX_UMStatic Caption `FX_sUM`; FX_DescriptionStatic Caption `FX_sDescription`.
- **Recovered field order (observed):** Pane (01) lists FX_UMStatic/FX_UMEdit before FX_DescriptionStatic/FX_DescriptionEdit; canvas shows the FX_UM label above the FX_Description label.
- **Recovered string resources (observed, Edit > String, Global Objects, Strings filter, read-only):**
  - `FX_sUM`: one exact row; Name `FX_sUM`; String Value **`Unit of Measure`**; Description blank; Version `User version for user anton.ramos@3mworks.com.ph`.
  - `FX_sDescription`: one exact row; Name `FX_sDescription`; String Value **`Description`**; Description blank; same Version.
  - Global Objects closed with **Cancel** once.
- **Observed change in the canvas text (distinct from the stored values):** before close the canvas showed raw IDs `FX_sUM*` / `FX_sDescription:` (T13). After reopen the canvas and grid column headers show the literal captions `Unit of Measure*` and `Description:`. The Caption properties still reference `FX_sUM` / `FX_sDescription`. Why the display changed is **not established** (it may reflect string resolution on load, a display-cache difference, or a client-side refresh that this task did not investigate). It is not treated as proof of string-table durability.
- **Final state:** FX_UMs tab selected; User scope; Save disabled; Undo disabled; **no dialog**; the Designer URL is `designer/default.aspx` (no `MGForm` parameter), the same drop observed after Cancel in earlier tasks.

## Acceptance findings (recovered-versus-unrecovered)

| AC | Result | Basis | Limitation |
|---|---|---|---|
| AC-9 | **Recovered (observed).** Clean close without prompt; reopen through the Form menu; same Name, ScopeType User, ScopeName; Save disabled; same bindings; FX_UM before FX_Description; captions FX_sUM and FX_sDescription. | `t14-01`, `t14-02`, `t14-03`, `t14-04`, `t14-05`, `t14-06` | Form-menu reopen (not Select Form dialog); Designer-level only |
| AC-10 | **Observed.** Post-reopen visible canvas: `Unit of Measure:*` and `Description:` (literal captions). Caption references FX_sUM and FX_sDescription (Properties). Stored string values `Unit of Measure` / `Description` (Global Objects). | `t14-04`, `t14-05`, `t14-06`, `t14-07`, `t14-08`, `t14-09` | Stored values seen only in the Global Objects client view; not a database read; display-change cause not established |
| AC-8 (post-save persistence) | **Partly supported.** Save was disabled after T13's single Save and remains disabled after reopen. Persistence is shown only through this client session's reopen. | `t14-04`; T13 `t13-04` | Same browser session; no independent session or database check |
| AC-11 | **Not attempted.** Runtime open was not part of T14. | — | Limitation (optional, non-gating) |
| AC-12 | Cleanup inventory updated (T14 entry). | `cleanup-inventory.md` | — |

## Actions (in order)

| # | Action | Result | Evidence |
|---|---|---|---|
| 1 | `browser_tabs list` | Designer at index 1. | — |
| 2 | `browser_tabs select 1` | Designer selected (no error this time). | — |
| 3 | Fresh snapshot | FX_UMs tab selected; User scope; Save disabled; Undo disabled; no dialog; FX_UMStatic selected (Caption `FX_sUM`). | — |
| 4 | Screenshot (pre-close) | Gate state. | `t14-01` |
| 5 | Click the FX_UMs Form tab close control (`closable FX_UMs`), **once** | Tab closed. No prompt. Designer moved to vendor `IdoPropertyClasses` design view; URL `?MGForm=IdoPropertyClasses`. | — |
| 6 | Fresh snapshot (targeted and full) | Save disabled; no dialog; FX_UMs tab absent. | — |
| 7 | Screenshot (post-close) | Vendor design view; Save greyed; no dialog. | `t14-02` |
| 8 | Click Form menu (`e3`), **once** | Menu opened. | `t14-03` |
| 9 | Press **Escape** (once) | Attempted to close the menu. | — |
| 10 | Click Form menu (`e3`) again | **Ref not found** (tool error). | — |
| 11 | Fresh untargeted snapshot (recovery 1 of 1) | Form menu shown open; items: Definition, Sign Out, `FX_UMs`, `Property Classes`, `FX_HelloWorld01`, `IDOs`, `Sql Tables`, `Data Maintenance Wizard`, `Runtime Builder Selection`, `IDO Projects`, `FX_SingleButtonLab01`. Only one `FX_UMs` item. | — |
| 12 | Click the `FX_UMs` menu item (`e2126`), **once** | Designer opened `?MGForm=FX_UMs`; FX_UMs tab present and selected. | `t14-04` (after) |
| 13 | Fresh untargeted snapshot | Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`; Save disabled; Undo disabled; User scope; Collections shows Primary Collection FX_UMs (after step 15). | — |
| 14 | Screenshot (post-reopen identity) | Canvas `Unit of Measure:*` / `Description:`; Save greyed; status bar User scope. | `t14-04` |
| 15 | Click Details `Expand Panel` (`e2220`), **once** (view change) | Details panel expanded. Find: Primary Collection `FX_UMs`. | — |
| 16 | Click Details `Components` tab, **once** (view change) | Components grid shown; Pane (00) and Pane (01) collapsed. | — |
| 17 | Click the grid toolbar `Expand`, **once** (supported route, same as T5) | Tree expanded; labels and bindings listed. | — |
| 18 | Targeted snapshot of Components panel | Rows: FX_UMStatic, FX_UMEdit (object.FX_UM), FX_DescriptionStatic, FX_DescriptionEdit (object.FX_Description); grid columns FX_UMGridCol (object.FX_UM), FX_DescriptionGridCol (object.FX_Description). | — |
| 19 | Click `FX_UMStatic` row (`e2653`), **once** (selection only) | Properties `FX_UMStatic (Static)`; Component tab already selected; Caption `FX_sUM`. | `t14-05` |
| 20 | Screenshot (FX_UMStatic) | Caption `FX_sUM`. | `t14-05` |
| 21 | Click `FX_DescriptionStatic` row (`e2703`), **once** (selection only) | Properties `FX_DescriptionStatic (Static)`; Caption `FX_sDescription`. | `t14-06` |
| 22 | Screenshot (FX_DescriptionStatic) | Caption `FX_sDescription`. | `t14-06` |
| 23 | Click Edit menu (`e5`), **once** | Menu opened. | — |
| 24 | Click `String` (`e3074`), **once** | Global Objects dialog opened. | — |
| 25 | Click Strings filter (`e3104`); type `FX_sUM` (slowly); wait 2 s | Exactly one row `FX_sUM` (`e3405`). | — |
| 26 | Click `FX_sUM` row, **once** (selection only) | Properties Name `FX_sUM`; String Value `Unit of Measure`; Description blank. | `t14-07` |
| 27 | Click Strings filter; Ctrl+A; type `FX_sDescription` (slowly); wait 2 s | Exactly one row `FX_sDescription` (`e3457`). | — |
| 28 | Click `FX_sDescription` row, **once** (selection only) | Properties Name `FX_sDescription`; String Value `Description`; Description blank. | `t14-08` |
| 29 | Click **Cancel** (`e3397`), **once** | Global Objects closed; no alert. URL reverted to `designer/default.aspx`. | — |
| 30 | Fresh toolbar snapshot; find for dialogs and tabs | Save disabled; Undo disabled; no dialog; FX_UMs tab selected; User scope. | — |
| 31 | Screenshot (final) | Canvas `Unit of Measure:*` / `Description:`; Save greyed; no dialog. | `t14-09` |
| 32 | STOP | No further action. | — |

## Counts (T14)

| Operation | Count |
|---|---|
| Designer Save | **0** |
| Undo clicks | **0** |
| Finish / New Form / creation | **0 / 0 / 0** |
| Form tab close (ordinary) | **1** (no prompt) |
| Form reopen (Form menu item) | **1** |
| Select Form dialog used | **0** (not used; see Limitations) |
| Form menu opened by click | **2** (one successful; one attempt returned ref-not-found after Escape) |
| Escape key presses | **1** |
| Expand Panel (Details) clicks | **1** (view change) |
| Components tab clicks | **1** (view change) |
| Components grid Expand clicks | **1** |
| Component row selections | **2** (FX_UMStatic, FX_DescriptionStatic; selection only) |
| Caption ellipsis clicks | **0** |
| Creation prompts answered | **0** |
| String value edits | **0** |
| Edit menu opened / String item selected | **1 / 1** |
| Global Objects opened / Cancel / OK | **1 / 1 / 0** |
| Strings filter entries / row selections | **2 / 2** |
| Tab select calls | **2** (no error this time) |
| Ref-not-found errors | **1** (Form menu click after Escape) |
| Recovery snapshots / corrected inspections | **1 / 0** |
| Timeouts / error alerts | **0** |
| Screenshots (worker-saved PNG) | **9** (`t14-01` to `t14-09`) |
| Portal banner dismissals | **0** |
| Login, logout, refresh, restart, FormSync, cache unload, Regenerate Form, runtime open | **0** |
| JavaScript, evaluate, run-code (worker) | **0** |

## Limitations and deviations

1. **Select Form search not used.** The brief asked for an exact-name search through the Select Form interface. The Designer's Form menu lists one `FX_UMs` entry; that entry was selected instead. The Designer toolbar's first icon has no accessible name, so I did not click it blindly. Whether Select Form would have returned the same single row is **not tested** here.
2. **Escape and the menu.** Escape did not produce a clean menu state in the accessibility tree. The next click on the Form button returned ref-not-found, and a fresh snapshot showed the menu open. The single reopen click was made from that fresh snapshot.
3. **Display change.** The canvas shows literal captions after reopen but raw IDs before close. The cause is not established.
4. **Client view only.** The stored string values were read in the Global Objects view. This is not a database read, and no independent session or cross-user check was made.
5. **Designer URL.** The URL dropped `MGForm=FX_UMs` after Cancel, as in earlier tasks. Not investigated.

## Browser state at stop (last verified)

- Tab 1 Designer (selected): `designer/default.aspx`. FX_UMs tab selected; User scope; Save **disabled**; Undo **disabled**; **no dialog**; Details panel expanded on Components; FX_DescriptionStatic selected, Caption `FX_sDescription`.
- Tab 0 Web Client: `Property Classes` runtime tab; not acted on in T14.
