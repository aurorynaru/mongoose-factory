# EXP-136 T11 - Global persistent variable FX_vInventoryJson (one creation, same-session readback)

Run R-20261026-062909-9GoC, cycle 14, task T11. Date 2026-10-26. Mode: LEARNING MODE. FX_-only scope. Editing scope User (`anton.ramos@3mworks.com.ph`).

## 1. Scope of this task

- One application mutation: create the Global object `FX_vInventoryJson` through Edit > Variable > Global Objects > blue "+" > New > OK, then one dialog-level Global Objects OK (the EXP-132 T4 commit route).
- No Designer Form Save, no Form creation, no asset creation, no component or script work, no Portal reload, no Refresh activation, no Designer close or relaunch, no browser JavaScript, no credential read or typed secret, no session recovery.
- Committed sources were **read only**. Nothing under `assets/` was written.

## 2. Source rebaseline (repository reads; operator-verified hashes, not recomputed by the worker)

| File | Content read in T11 | Operator-verified SHA-256 (commit 13ac79d) | Superseded |
| --- | --- | --- | --- |
| `assets/FX_Inventory/index.html` (71 lines) | line 42 now emits `"In Stock"` for healthy stock (`qty <= 0 ? "Out of Stock" : (qty <= reorder ? "Low Stock" : "In Stock")`); Refresh button `FX_InvRefresh` (line 18); four summary IDs (lines 21-24); table body `FX_InvTableBody` (line 28); bridge calls `WSForm.invoke("FX_LoadInventoryFromIDO", ...)` (line 61) then `WSForm.getVarValue("FX_vInventoryJson", ...)` (line 62); dependency `../$app/scripts/UserControl.js` (line 6, not modified) | `e8f162c5b35a07b6f277423e6c0938ba4ef464d69c20cd8ffc87c02537972fb6` | `53baed0a…cd21d` (commit d4b99db, which emitted `OK`) |
| `assets/FX_Inventory/FX_InventoryDashboard.cs.txt` (32 lines) | unchanged from T10: IDO literal `FX_InventoryItems` (line 15); six properties (line 14); `LoadCollection(..., "", "", 100)` (line 15); method `FX_LoadInventoryFromIDO` (line 12); write `ThisForm.Variables("FX_vInventoryJson").Value` (line 29) | `3a21099492d1e4565f18df4a58033497101681838654ad3fc7866a61658bfc0f` (unchanged) | none |

Assessment: the HTML is consistent with the operator-approved amendment (D-B): the healthy label is `In Stock`, the bridge calls are intact, and the thresholds are unchanged. The C# still uses `ThisForm.Variables` (D-A retained; Global-versus-Form storage unresolved; no `Application.Variables` test authorized). The worker did not recompute the hashes; byte identity is operator-attested only.

## 3. Pre-creation gates (observed)

- Tabs listed (read). Tab 0 = Web Client portal (`favoriteContext=FX_InventoryEditor`). Tab 1 = Designer (`designer/Default.aspx`, page title `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`). Tab 1 was selected after the list, and a fresh snapshot confirmed it.
- Scope footer (visible, same snapshot): `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- No Form loaded in the Designer; Properties show "Form" tab empty; Save disabled before the creation; Undo and Redo disabled; console `2 errors, 0 warnings`.
- No session modal, sign-in form, portal banner, server-event Error dialog, or blocking prompt in the snapshot.
- Global Objects absence (pre-create, unfiltered list): the dialog (`t11-global-objects-dialog-precreate-absence.png`) shows the sorted Variables list with `FX_vEcho` and `FX_vLoginResult` adjacent and **no** `FX_vInventoryJson` between them. Positive controls `FX_vEcho` and `FX_vLoginResult` are visible. Scope of this check: the sorted visible window (the list continues below the captured area). Full-list absence follows from the sort order but was not read past the visible window.

## 4. The creation (one attempt; not repeated)

| Step | Action | Result (observed) |
| --- | --- | --- |
| C1 | Edit menu opened (click `Edit`) | Menu items: Validator, Variable, Web User Control Assets. |
| C2 | Click `Variable` | The Global Objects dialog opened directly. No separate Global Objects submenu item was seen. This differs from the wording of the EXP-132 route. |
| C3 | Click blue "+" (bottom-left of the Variables list; first of three icons) | "New" dialog opened: Name textbox only, OK and Cancel. |
| C4 | Typed `FX_vInventoryJson` into Name (no Enter) | Pre-commit screenshot `t11-new-global-variable-name-typed-precommit.png` shows the Name field reading `FX_vInventoryJson`. |
| C5 | Clicked New **OK** (once) | The New dialog closed. The new row appeared in the Global Objects list, selected, between `FX_vEcho` and `FX_vLoginResult`. **This is the single creation.** |
| C6 | Properties read (after New OK) | Name `FX_vInventoryJson`; Description blank; Value blank; **Persistent `True`; Global `True`**; Version `User version for user an…` (clipped in the UI). Evidence: `t11-global-objects-after-new-ok-properties.png`. |
| C7 | Clicked Global Objects dialog **OK** (once) | Dialog closed without an error dialog. Dialog-level commit only (EXP-132 T4 route); not a Designer Save. |
| C8 | Post-commit snapshot | No dialog open; scope footer unchanged (User / anton.ramos@3mworks.com.ph); **Save is now enabled** (it was disabled before C5). Save not clicked. |
| C9 | Read-only reopen: Edit > Variable (Global Objects dialog) | `find` for `FX_vInventoryJson` returned **exactly one** list row. |
| C10 | Selected that row (read-only selection) | Properties: Name `FX_vInventoryJson`; Value blank; **Persistent `True`; Global `True`**; Version `User version for user an…`. Evidence: `t11-global-objects-reopened-readback-cancel-pending.png` (captured before Cancel). |
| C11 | Clicked Cancel (read-only close) | Dialog closed. `find` for `Global Objects` returned no match. |

Creation attempts: **1**. Creation retries: **0**. Duplicate definitions visible: **none** (one row in the reopened list). Error dialogs: **none**.

## 5. Readback (same session; supported UI)

| Field | Value | Source |
| --- | --- | --- |
| Name | `FX_vInventoryJson` | Properties after C5 and after C10 |
| Global | `True` | Properties after C5 and after C10 |
| Persistent | `True` | Properties after C5 and after C10 |
| Value | blank (no runtime value invented) | Properties after C5 and after C10 |
| Version | `User version for user an…` (clipped; full owner string not read in this task) | Properties after C5 and after C10 |
| Count of matching list rows | 1 | `find` at C9 |

## 6. Limitations and not-verified items

- AC-3 is supported at the **same-session design-setting level only**: Global=True and Persistent=True are shown by the Properties grid in the Global Objects dialog. This does **not** prove server-side serialization, and it does not prove runtime storage behaviour. Persistence after the Designer Save (AC-9) is not verified.
- The Designer Save button became enabled after the commit. The worker did not identify the reason; it is recorded as observed. No Save was performed in T11.
- The Global Objects list is not confirmed as a complete list (sorted visible window only, as in section 3).
- The Version value is clipped in the UI; the full owner string was not read.
- The Designer tree (Details > Variables > Global - Persistent) was not inspected in T11. EXP-132 observed that a newly created Global did not appear there until after a Save and reopen. Unchecked here.

## 7. Browser and mutation ledger (T11)

- Browser calls (exact counts for this task): tab list 1 (explicit) plus one list returned by the tab select; tab select 1; untargeted snapshots 3; targeted snapshots 3; finds 8; clicks 9 (Edit, Variable, "+", New OK, Global Objects OK, Edit again, Variable again, list row, Cancel); type 1 (Name field); screenshots 4 (`precreate-absence`, `new-variable-name-typed-precommit`, `after-new-ok-properties`, `reopened-readback-cancel-pending`). Two Edit clicks returned snapshot files rather than inline content (not re-read).
- Mutations: **1 variable creation** (`FX_vInventoryJson`, one New OK); **1 dialog-level Global Objects OK** (commit of the list; no object created by that click); Designer Saves **0**; Form creations **0**; Form closes or reopens **0**; asset creations or edits **0**; component or script actions **0**; Portal reloads **0**; Refresh activations **0**; variable edits or renames **0**; other variables touched **0**.
- Read-only dialog reopen: **1** (Cancel), used for the subsequent readback.
- Recovery actions: **0** (no ref error, no retry, no session recovery).
- Browser JavaScript: **0**. Credentials typed or read: **0**. Prompts accepted: **0**.
- Mongoose lifecycle actions not performed: no Save, no Regenerate Form, no FormSync, no global-object unload, no IDO metadata unload, no deployment, no cache clearing.

## 8. Warnings and unexplained items (recorded; no cause invented)

- Designer Save became enabled after the variable commit; cause not identified.
- Console counter on the Designer tab stayed `2 errors, 0 warnings` before and after the creation (snapshot values).
- The Variable menu item opened the Global Objects dialog directly (C2). The earlier EXP-132 description referred to a Global Objects submenu. Not explained.

## 9. Evidence files

- `evidence/EXP-136/t11-global-objects-dialog-precreate-absence.png`: pre-create Global Objects dialog. Shows the sorted list with `FX_vEcho` and `FX_vLoginResult` adjacent and no `FX_vInventoryJson` in the visible window; blue "+" at bottom-left. Does **not** show the full list or any Properties (no row selected).
- `evidence/EXP-136/t11-new-global-variable-name-typed-precommit.png`: New dialog with Name `FX_vInventoryJson` before OK. Proves the typed Name only; does not prove the commit.
- `evidence/EXP-136/t11-global-objects-after-new-ok-properties.png`: after New OK and before the dialog OK. Shows the new row selected in the list, Name, Value blank, Persistent True, Global True, Version (clipped). Proves the same-session created definition's visible settings; does not prove persistence after a Save.
- `evidence/EXP-136/t11-global-objects-reopened-readback-cancel-pending.png`: reopened dialog (captured before Cancel). Shows the same Properties and one list row. Proves the same-session readback after the dialog-level OK; does not prove the Designer tree or server-side serialization.
- Snapshot files under `evidence/playwright/` (not EXP-136-specific): `page-2026-10-26T00-37-51-403Z.yml`, `page-2026-10-26T00-37-56-324Z.yml`, `page-2026-10-26T00-38-13-502Z.yml`, `page-2026-10-26T00-38-24-718Z.yml`, `page-2026-10-26T00-38-38-989Z.yml`, `page-2026-10-26T00-38-46-512Z.yml`, `page-2026-10-26T00-38-49-697Z.yml`, `page-2026-10-26T00-38-54-208Z.yml`, `page-2026-10-26T00-39-01-109Z.yml`.

## 10. Acceptance status after T11

| AC | Status | Reason |
| --- | --- | --- |
| AC-1 | operator-accepted (carried); identity re-observed in T11 | Scope footer and configuration re-observed; absence of `FX_vInventoryJson` re-observed in the sorted visible window before creation. |
| AC-2 | operator-verified (carried); source re-read in T11 | Content read; hashes operator-attested, not recomputed. |
| AC-3 | **supported at same-session level** | Name, Global=True, Persistent=True, one row, Value blank (sections 4-5). Designer-tree and post-Save persistence not verified. |
| AC-4 to AC-8 | not evaluated | No asset, Form, component, script or Save in T11. |
| AC-9 | not evaluated (partial prerequisite only) | Requires the later fresh-Designer readback. |
| AC-10 to AC-13 | not evaluated | Later stages. |

## 11. Next permitted action (coordinator decision)

- The Web User Control Asset `FX_Inventory/index.html` is the next creation; it needs a separate coordinator decision. T11 did not create it.
- The Designer has a pending change (Save enabled). Do not Save until the authorized Save stage. Designer state: Global Objects dialog closed; no Form loaded; Save enabled; scope User / anton.ramos@3mworks.com.ph.
