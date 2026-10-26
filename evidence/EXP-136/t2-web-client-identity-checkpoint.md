# EXP-136 T2 - Web Client identity preflight (read-only checkpoint)

Run: `R-20261026-062909-9GoC` · task `T2` · cycle 2 · worker session `5a1881bc-5233-4e91-a078-ae1cc0a81fa9` · task_message_id `d4d4a960-0adb-4ea0-9af0-a6396c0df327`.
Result: **Web Client identity read completed. No application mutation. AC-1 and AC-2 remain PENDING. No FX_ artifact was created.**

## 1. Sources read before browser action

- `evidence/EXP-136/t1-preflight-source-gate-and-blocker.md` (full; preserved unchanged).
- `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (full, before update).

## 2. Browser actions (in order)

| # | Action | Result |
| --- | --- | --- |
| 1 | `browser_tabs` list (read-only, before any selection) | 4 tabs: 0 Designer (`FX_InventoryEditor` in `MGForm`), 1 Designer (second), 2 Designer start page, 3 Infor OS portal `Mongoose` (current). |
| 2 | `browser_tabs` select index 3 | Succeeded. Tab 3 reported as current. |
| 3 | `browser_snapshot` (one fresh untargeted snapshot, no ref error) | Succeeded. Used as the only browser read. |

Counts: tab list 1; tab selects 1 (succeeded); fresh snapshots 1 (no ref-not-found); corrected inspections 0; screenshots 0 (none taken; T2 scope permits one snapshot); browser JavaScript / run-code 0; Designer tab 0 interactions 0; navigations 0; Portal reloads 0; authentication actions 0.

## 3. Visible observations (tab 3, Infor OS portal shell with Mongoose frame)

- **Account and configuration header (Mongoose frame, banner area):** a button labelled `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` is visible. This is the positive identity control for AC-1's account and configuration statement, observed in the Web Client header.
- **Infor OS portal header:** tenant label `DEM`; tab bar shows `System Administrator` and `Mongoose` (selected).
- **Form identity in the Mongoose frame:** Form tab heading `FX_InventoryEditor` (selected). Page URL carries `favoriteContext=FX_InventoryEditor`. The panel is a runtime/Form view, not a Designer.
- **Visible record grid (FX_InventoryEditor, runtime view, as displayed):**
  - `FX test widget` | `FX-LOC-01` | `120.00` | `20.00` | `FX-WH-A` | `FX-ITEM-001`
  - `FX test bracket` | `FX-LOC-02` | `8.00` | `10.00` | `FX-WH-A` | `FX-ITEM-002`
  - `FX test gasket` | `FX-LOC-03` | `0.00` | `5.00` | `FX-WH-B` | `FX-ITEM-003`
  - These values match the EXP-135 T12 values as recorded in the experiment record. They are a display state of an already-open runtime Form, not a database read, and they are **not** AC-12 evidence.
- **Save control:** disabled. Get More Rows: disabled.
- **Session-expiry / sign-in / blocking indication:** none visible in the snapshot. No "Session Expired" modal and no Infor sign-in form. No Portal notification banner was visible in the snapshot, so no dismissal was performed.
- **Console indicator in snapshot metadata:** `15 errors, 10 warnings` (this is the page console counter; it is recorded as observed and unexplained, not diagnosed).

## 4. Limitations

- One accessibility snapshot only. No screenshot was taken, so no image is cited.
- The header button text is read from the accessibility tree; it is not an independent authoritative identity source. Whether the Web Client header equals the Designer footer is inferred from matching strings, not from a second authoritative check.
- The displayed runtime grid is an open-Form view and may be stale. It is not a fresh query.
- No absence check was performed. The `FX_InventoryDashboard` Form list, `FX_vInventoryJson` Global Objects list and `FX_Inventory/index.html` Web User Control Assets list were **not** read in T2 (out of T2 scope).
- Designer tab 0 was not touched, so the Designer stall from T1 is neither confirmed nor cleared.

## 5. Acceptance status after T2

- **AC-1: pending.** The Web Client header now shows the expected account and configuration. The three live absence checks are not established, and the Designer scope was read only in T1 (footer `ScopeType: User`, `ScopeName: anton.ramos@3mworks.com.ph`). Absence checks are required before any creation.
- **AC-2: pending.** Source paths and readable contents were recorded in T1. Content hashes are **not computed** (no hashing tool is permitted: Bash is disabled, no shell or browser-JavaScript route). Byte identity is not established.
- AC-3 to AC-13: not evaluated (no mutation in T2).

## 6. Mutation ledger (T2)

Created: 0. Modified: 0. Saves: 0. Closes or reopens: 0. Portal reloads or navigations: 0. Refresh activations: 0. Forms opened: 0. Browser JavaScript: 0. Credentials read or printed: 0. Session expiry observed: none.

## 7. Next permitted action (for the coordinator)

- Coordinator decision needed before any further work. Required for AC-1 and AC-2 before creation: a fresh task with its own recovery allowance to perform the three read-only absence checks (Global Objects `FX_v` filter with positive control `FX_vEcho`; Web User Control Assets with positive control `FX_Bridge/index.html`; Web Client Select Form `FX_Inv` filter with positive control `FX_InventoryEditor`), each cancelled without change.
- Hash verification for AC-2 needs a supported tool route that the operator permits. None is available inside this task.
- No variable, asset, Form, component, script, Save, close, reopen, Portal reload or Refresh is authorized by T2.

## 8. Files written in T2

- `evidence/EXP-136/t2-web-client-identity-checkpoint.md` (this file, new).
- `experiments/EXP-136-fx-inventorydashboard-web-user-control-c-ido-bridg.md` (status and T2 section updated).
- No other file. The T1 evidence file is unchanged.
