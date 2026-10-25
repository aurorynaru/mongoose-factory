# EXP-129 — Create and Recover an Isolated FX_ Inventory Prototype Form (FX_InventoryPrototype01)

Status: **executed (single worker task T1, run `R-20261025-180517-kdWc`, cycle 0). Outcome: UI-level create → Caption edit → one ordinary Save → Form-tab close → recent-forms reopen completed; all recovery checks passed as observed. Acceptance is recorded per check below; the coordinator decides final acceptance.** Knowledge state of all findings: **observed** (one execution). Not replay-verified. No durability, cache, or cross-session claim is made.
Date: 2026-10-25
Mode: LEARNING MODE — one controlled creation of one User-scoped Classic BuildFromScratch Form, one literal Caption change, one ordinary Designer Save, one ordinary Form-tab close, one reopen via the Form-menu recent-forms list. No other artifact was created, modified or deleted.
Brief: approved (commit `44f8309`). Evidence directory: `evidence/EXP-129/`.
Worker session: `a7adf065-bba4-4a2e-8109-c420cdf17864`.

Redaction: the signed-in account name is written here as `<signed-in user>`. It is a different account from the one used in EXP-002 to EXP-010 (`anton.ramos`), and it is not repeated in this record. Credential values were never read or typed. Several evidence screenshots show the account name unmasked in the status bar or header; see Limitations and the operator decision list.

Recipe used: `recipes/forms/create-basic-form.md` (status verified: EXP-002, EXP-002-R2).
Related records reviewed before browser action: `experiments/EXP-002-R2-create-basic-form-replay.md`, `experiments/EXP-010-form-caption-recovery-across-ordinary-web-designer.md` (Form-tab close and recent-forms reopen, T4–T5), `experiments/EXP-128-mock-inventory-portal-read-only-study.md` (Select Form and Designer baseline, T1). `AGENTS.md` read in full.

---

## Objective

Create exactly one new User-scoped Classic BuildFromScratch Form `FX_InventoryPrototype01` with Save Template unchecked; record its clean initial properties; change only its Form-level literal Caption to `Inventory Prototype`; perform exactly one ordinary Designer Save; verify a clean Designer and an exact Caption readback; close the Form once through its Form-tab control; reopen it once through the Form-menu recent-forms list; compare identity, Caption and baseline properties before and after the close. The result is an isolated Form shell, not a functional inventory dashboard.

Out of scope (honoured): Mock* artifacts; other FX_ artifacts; IDOs, SQL tables, collections, bindings; scripts, handlers and user controls; components and layout; Regenerate Form, global-object unload and cache actions; User Preferences and editing scope; additional Saves, closes or reopens; EXP-128 history.

---

## Action log (in order)

1. Read `AGENTS.md`; read `recipes/forms/create-basic-form.md`, EXP-002-R2, EXP-010 (T4–T5 sections), and EXP-128 (T1 section). `experiments/EXP-129-*` did not exist in the repository before this task; this record was created by the worker.
2. Listed browser tabs (before any tab selection). Tab 0 = Designer (`designer/default.aspx`, no `MGForm` parameter, no Form loaded); tab 1 = Web Client (`favoriteContext=IdoCollections`).
3. Designer baseline (tab 0): no Form tab, Properties empty, toolbar Save/Regenerate disabled, status bar `[ ScopeType: User / ScopeName: <signed-in user> ]`. Screenshot `01`.
4. Web Client (tab 1): no Form open, Save disabled, no notification banner or dialog. Opened Select Form from the toolbar Open button.
5. **Target-absence gate with positive controls (no mutation):**
   - `FX_Test` → 0 rows (`02`; `02b` after a 2-second wait). This was **not** a passing control: no `FX_Test…` Form was visible, which is what prompted the controls below.
   - Unfiltered list (filter cleared) → rows present (`02c`), so the store loads.
   - `FX_` → 0 rows (`02d`).
   - Positive control B (known tenant forms): `Mock` → 6 rows (`MockInventory`, `MockInventoryDashboard`, `MockLogin`, `MockLoginIDO`, `MockLoginPortal`, `RODashboard_Mockup`) (`02e`). The filter works on ordinary names.
   - Positive control C (underscore handling; the target name contains an underscore, and so does `RODashboard_Mockup`): `_Mock` → exactly 1 row, `RODashboard_Mockup` (`02f`).
   - Target: `FX_InventoryPrototype01` (Case Sensitive off, so case-insensitive) → **0 rows** (`03`).
   - Cancel; no Form opened from the dialog.
6. Designer (tab 0): toolbar **New** (New Form Definition) → Form Wizard Selection: New Form radio (default), Category **Classic**, Wizard **BuildFromScratch**, OK (`04`, `05`).
7. Wizard page 1 (`Form Wizard - Build From Scratch`): Name `FX_InventoryPrototype01`; Form Type `BuildFromScratch`, Form Layout `GridLeft`, Device Type `Default`, Data Source empty, Query Form empty, Comments empty (defaults left unchanged). Next (`06`).
8. Wizard page 2: **Save Template** was checked by default. A native click on the checkbox timed out (`intercepts pointer events` from its own `ext-comp-…-displayEl` overlay, 5 s, retried, then failed). One corrected attempt on the **Save Template label text** toggled it: the checkbox is visibly unchecked and the accessibility tree no longer reports `[checked]` (`07`). No JavaScript was used.
9. **Finish** (one click, the creation mutation) → "Process Completed Successfully" (`08`) → **OK** (one click). The Designer URL changed to `…&MGForm=FX_InventoryPrototype01` (`09`). No Finish retry was needed.
10. Pre-edit baseline read from the Designer property grid and accessibility tree (see table below). Designer Save disabled.
11. Post-creation inventory (Web Client, tab 1, Select Form): filter `FX_InventoryPrototype01` → **1 row** (`10`); filter `FX_` → **1 row** (`11`). Dialog cancelled.
12. Designer (tab 0): double-clicked the Caption value cell (`Design.Caption`) → inline editor opened empty and focused (`12`). Typed `Inventory Prototype` into the editor.
13. Enter committed the value. Form tab label changed to `Inventory Prototype`; toolbar Save and Undo became enabled (dirty). Captured in `13` **after the commit and before the Save**.
14. **Ordinary Designer Save** — exactly one: toolbar Save button (the Save control, not Regenerate Form). Toast: "Save — Form [FX_InventoryPrototype01] and global object(s) were saved." Toolbar Save disabled again; Caption still `Inventory Prototype` (`14`).
15. Caption readback (accessibility tree): exact text `Inventory Prototype`. The other comparison properties are visible in `14` (Version is truncated on screen) and equal the baseline.
16. **Form-tab close** — exactly one: the tab's own close control (`closable FX_InventoryPrototype01` button, aria label before the Caption change). **No unsaved-change prompt, no dialog.** Designer left with no Form loaded; Save disabled (`15`).
17. **Reopen** — exactly one: Designer **Form** menu → recent-forms entry `FX_InventoryPrototype01` (top of the recent list, above `MockLoginIDO`). `Sign Out` is in the same menu and was not clicked (`16`). No URL navigation and no page reload were used. The Form reopened with tab `Inventory Prototype` (`17`).
18. Post-reopen read: Name, Description, Caption, Version, Device Type, Form Type, Is Master, status-bar scope; Save disabled (see recovery table).
19. Final inventory (Web Client, tab 1, Select Form): filter `FX_` → **1 row** (`18`). Dialog cancelled. Web Client left with no dialog.
20. Designer left on the reopened Form (`FX_InventoryPrototype01`, tab `Inventory Prototype`), clean. No further action.

Mutations performed: **one** Form created; **one** Caption value committed; **one** ordinary Save; **one** Form-tab close; **one** reopen. Nothing else.

---

## Identity and property table

| Property | Pre-edit baseline (`09`) | Post-Save (`14`, screen) | After reopen (`17`, accessibility tree) | Changed? |
|---|---|---|---|---|
| Name | `FX_InventoryPrototype01` | `FX_InventoryPrototype…` (truncated) | `FX_InventoryPrototype01` | no |
| Caption | *(empty)* | `Inventory Prototype` | `Inventory Prototype` | **yes — intended, only change** |
| Description | *(empty)* | *(empty)* | *(empty)* | no |
| Version | `User version for user <signed-in user>` | `User version for us…` (truncated) | `User version for user <signed-in user>` | no (full value compared only at reopen and baseline) |
| Device Type | `Default` | `Default` | `Default` | no |
| Form Type | `Normal` | `Normal` | `Normal` | no |
| Is Master | `True` | `True` | `True` | no |
| ScopeType (status bar) | `User` | `User` | `User` | no |
| ScopeName (status bar) | `<signed-in user>` | `<signed-in user>` | `<signed-in user>` | no |
| Designer Save | — | disabled (after Save) | disabled | — |

Notes: the baseline Name and Version were read from the accessibility tree at `09` (the grid truncates them on screen). The post-Save values were read from the screenshot `14`, not from the accessibility tree, so the Version comparison after the Save is limited to its visible prefix. The full Version value is compared at reopen. Appearance, Behavior, Help and Layout groups were collapsed and were not compared (not part of the brief's comparison set; limitation).

---

## Target-count evidence (before and after)

| Measure | Before creation | After creation | After reopen / final |
|---|---|---|---|
| Exact name `FX_InventoryPrototype01` (Select Form, Name filter, case-insensitive) | 0 rows (`03`) | 1 row (`10`) | 1 row (`18` via `FX_` filter; exact-name count not repeated after reopen) |
| `FX_`-prefixed forms visible to this account | 0 rows (`02d`) | 1 row (`11`) | 1 row (`18`) |
| Total forms (all names) | not measured (no store read, no JavaScript) | not measured | not measured |

The total-form count was not captured: the brief allows only supported UI, and the Select Form grid does not expose a visible total. The only delta asserted is the FX_ count 0 → 1 and the exact-name count 0 → 1.

---

## Acceptance checks

| ID | Result | Evidence | Notes |
|---|---|---|---|
| AC-1 | **Pass, with a scope limitation** | `01`, `02`–`02f`, `03` | Usable authenticated Designer (User scope, clean, no Form loaded); exact and case-insensitive target absence (0 rows); positive controls passed for the filter itself (`Mock` 6 rows, `_Mock` 1 row, unfiltered list populated). **Scope limitation:** the accessible inventory for this signed-in account contains **zero** `FX_` forms before creation (`FX_` → 0; `FX_Test` → 0), although earlier records list FX_ forms (EXP-002 to EXP-010). See Open questions. |
| AC-2 | **Pass** | `04`–`09`, `10`, `11` | One Classic BuildFromScratch Form, name `FX_InventoryPrototype01`, Save Template unchecked (`07`), User scope (status bar). Clean initial Designer state (Save disabled; `09`). Post-create `FX_` count 1 and exact-name count 1 (`10`, `11`). No second target. |
| AC-3 | **Pass** | `09`, `13`, `14`, `17` | Pre-edit baseline recorded (table above); the only changed property is Caption (empty → `Inventory Prototype`). Name, Description, Version, Device Type, Form Type, Is Master, ScopeType and ScopeName are unchanged. |
| AC-4 | **Pass (observed)** | `13`, `14` | Exactly one toolbar Save. Toast "Form [FX_InventoryPrototype01] and global object(s) were saved." Toolbar Save disabled afterwards. Caption read back exactly as `Inventory Prototype`. Note: the toast's "global object(s)" wording is product text; no global-object unload was invoked. |
| AC-5 | **Pass** | `15` | Form closed once through its Form-tab close control. No unsaved-change prompt or dialog. Designer shows no Form tab afterwards; Save disabled; no visible window. |
| AC-6 | **Pass (observed UI recovery)** | `16`, `17`, readback table | Reopened once through the Form-menu recent-forms entry (no URL, no reload). Name `FX_InventoryPrototype01`; scope `User` (status bar); version `User version for user <signed-in user>`; Caption `Inventory Prototype`; Description, Device Type, Form Type, Is Master unchanged; Save disabled. |
| AC-7 | **Pass for the accessible inventory** | `10`, `11`, `18` | Exactly one accessible `FX_InventoryPrototype01` at creation and at the final check. Before/after counts recorded above. Limitation: the account's visible inventory is not the whole tenant (see Limitations). |
| AC-8 | **Pass** | This record; `evidence/EXP-129/` | Repository changes: this record and `evidence/EXP-129/*` only. No Mock*/other-FX_ mutation observed; no preference, IDO, script, component, Regenerate, unload or cache action; no additional Save, close or reopen; no credential value read or recorded. |

---

## Observations

- **Designer baseline after Save:** toolbar Save and Undo were enabled between the Caption commit and the Save (`13`), and both became disabled after the Save (`14`). The Form-tab label showed the Caption (`Inventory Prototype`) when set and the Name when the Caption was empty (`09`, `13`). This matches EXP-010's observation.
- **Checkbox overlay:** the Ext checkbox `Save Template` could not be clicked directly (its `displayEl` overlay intercepted the pointer); clicking its label text toggled it. Observed, one execution.
- **Recent-forms list:** the new Form appeared at the top of the Form-menu recent list, above `MockLoginIDO`, `MockInventory…` and the other earlier entries. The menu also contains `Sign Out` directly above the list; it was not used.
- **Select Form Caption column after the Save:** in the final Select Form check (`18`), the row for the Form shows its Name in the **Caption** column (`FX_InventoryPrototype01`), not `Inventory Prototype`. The Name-column value is correct. This may be a Web Client list store that was loaded before the Caption change (the dialog had been opened once after creation, at `10`) or a list refresh gap. **Not interpreted**; no cache claim is made.
- **Designer console:** baseline 2 errors / 0 warnings; unchanged through the Designer actions in this task. Web Client console: 3 errors / 10 warnings at task start, pre-existing; not inspected.
- **Web Client Select Form filter:** the filter reacts to real key input (typed with `pressSequentially`); the `FX_` result changes accordingly. Case Sensitive and Starts With were left unchecked throughout.

---

## Evidence (under `evidence/EXP-129/`)

| File | Shows | Does not prove |
|---|---|---|
| `01-preflight-designer-initial.png` | Designer, no Form loaded, Properties empty, toolbar Save/Regenerate greyed, status bar `ScopeType: User`. The status bar shows the account name unmasked. | Account's full inventory; the state after later actions |
| `02-preflight-positive-control-FX_Test.png` | Select Form, filter `FX_Test`, 0 rows | Whether any FX_ form exists for other accounts |
| `02b-preflight-positive-control-recheck.png` | Same as `02` after a 2-second wait, 0 rows | — |
| `02c-select-form-filter-cleared.png` | Select Form, filter cleared, full list populated (Access As, Active Background Tasks, …) | That the FX_ family is absent in the tenant |
| `02d-select-form-filter-FX_.png` | Select Form, filter `FX_`, 0 rows | — |
| `02e-select-form-filter-Mock-positive-control.png` | Select Form, filter `Mock`, 6 rows | — (positive control: filter works on ordinary names) |
| `02f-select-form-filter-underscore-positive-control.png` | Select Form, filter `_Mock`, 1 row `RODashboard_Mockup` | — (positive control: filter handles underscores) |
| `03-preflight-target-absence-FX_InventoryPrototype01.png` | Select Form, filter `FX_InventoryPrototype01`, 0 rows | Absence for other accounts' User scope |
| `04-form-wizard-selection-open.png` | Form Wizard Selection, New Form selected, Category/Wizard empty | — |
| `05-wizard-classic-buildfromscratch-selected.png` | Form Wizard Selection: Classic / BuildFromScratch / New Form | — |
| `06-wizard-page1-name-entered.png` | Wizard page 1: Name `FX_InventoryPrototype01`, BuildFromScratch, GridLeft, Default, empty Data Source/Query/Comments; Next enabled, Finish disabled | That the Form was created |
| `07-wizard-page2-save-template-unchecked.png` | Wizard page 2: Save Template unchecked; Finish enabled | — |
| `08-process-completed-successfully.png` | "Process Completed Successfully" dialog | — |
| `09-form-created-loaded-clean.png` | Designer with tab `FX_InventoryPrototype01`; Name, Description empty, Caption empty, Version `User version for us…` (truncated), Device Type Default, Form Type Normal, Is Master True; Save greyed; status bar User | Full Version string (read from accessibility tree instead) |
| `10-select-form-post-create-one-row.png` | Select Form, exact-name filter, 1 row | — |
| `11-select-form-post-create-FX_-filter.png` | Select Form, `FX_` filter, 1 row | Total count |
| `12-caption-editor-open.png` | Caption inline editor open, empty | — |
| `13-caption-entered-dirty-before-save.png` | Caption `Inventory Prototype` in the grid and tab label; Save and Undo enabled (dirty) | That the Save succeeded |
| `14-after-save-clean.png` | Save toast "Form [FX_InventoryPrototype01] and global object(s) were saved."; toolbar Save disabled; Caption retained | Durability beyond the Designer save |
| `15-form-closed-no-prompt.png` | Designer with no Form tab, no dialog, Save disabled | — |
| `16-form-menu-recent-forms.png` | Form menu open: `FX_InventoryPrototype01` at top of recent list; `Sign Out` also visible (not clicked) | — |
| `17-reopened-via-recent-forms.png` | Reopened tab `Inventory Prototype`; Name, Description, Caption `Inventory Prototype`, Version, Device Type, Form Type, Is Master; Save disabled; status bar User | Cross-session persistence |
| `18-final-select-form-one-row.png` | Select Form, `FX_` filter, 1 row (Caption column shows Name — see Observations) | Caption-column refresh behaviour |

Accessibility-tree readbacks (text, not files): Name, Caption, Version, Device Type, Form Type, Is Master, Save disabled state, tab heading, Select Form row text. The browser tool also wrote page-snapshot YAML and console log files under `evidence/playwright/` during this task; they are tool output, not EXP-129 evidence files, and were not curated.

---

## Limitations

1. **Account scope of the inventory.** The signed-in account in this session is not the account used in EXP-002 to EXP-010. Its Select Form inventory contains no `FX_` forms before creation (`02d`), although earlier records list many `FX_` forms and the brief names `FX_CustomerPortal`, `FX_Orders` and `FX_Items`. One explanation is that User-scope versions are visible only to their owning account; this is a hypothesis and was not verified. The absence proof therefore covers only the **accessible** inventory of this account, as the brief specifies. A same-name User version owned by another account cannot be ruled out from this session.
2. **Judgement on the absence gate.** The gate was read as passing because the brief defines the check against the accessible inventory and both the filter (`Mock`, `_Mock`) and the unfiltered list work. The operator may consider the anomaly in limitation 1 as making the gate inconclusive. The Form was created under this account's User scope; it can be removed or renamed by a separately authorized task if the operator decides otherwise.
3. **Name-only filter.** The Select Form filter used Filter By = Name. The Caption field was not searched with the UI filter, and no JavaScript store read was made (the brief forbids unsupported routes). The Caption-field check of EXP-010 was not repeated.
4. **Total form count not captured.** No supported UI shows a total; the FX_ count and exact-name count are the measures recorded.
5. **Single execution.** One create, one Caption edit, one Save, one close, one reopen. Repeatability and independent-session persistence are not shown.
6. **Recovery is UI-level.** The reopen was in the same Designer document and the same authenticated session. No cross-session, database-durability, backend-serialization, cache-eviction, metadata-unload or Forms-database-provenance claim is made.
7. **Screenshots show the account name.** The Designer status bar and the Web Client header show the signed-in account name unmasked in the captures. The record uses `<signed-in user>`. The operator should decide on redaction before sharing the images.
8. **Not compared:** Appearance, Behavior, Help and Layout groups (collapsed). Components: none present (no component work was in scope).
9. **Save Template click method:** the checkbox was toggled through its label text after the direct click timed out. This is a UI workaround observed once.

---

## Open questions / decisions for the operator

1. **Account / inventory visibility** (limitation 1): confirm whether `FX_InventoryPrototype01` should stay in this account's User scope, and whether the earlier `FX_` artifacts being invisible to this account is expected. A different account may be needed for the later experiments.
2. **Screenshot redaction** (limitation 7): decide whether `01`–`18` may be shared with the account name visible.
3. **Select Form Caption column** (Observations): decide whether a separately authorized check is wanted (e.g., a fresh Web Client session). This record does not investigate it, because cache and session behaviour is out of scope for EXP-129.
4. **Form left open:** `FX_InventoryPrototype01` is open and clean in the Designer. The brief allowed no further close/reopen, so the Form remains open for the coordinator.

---

## Knowledge state (end of T1)

- Creation of `FX_InventoryPrototype01` (Classic, BuildFromScratch, Save Template unchecked, User scope) via the recipe, in this account: **observed** (one execution; the recipe itself is verified from EXP-002 and EXP-002-R2).
- Absence gate with `FX_`-filter and `Mock`/`_Mock` controls, including the FX_-visibility limitation: **observed** (one execution, account-scoped).
- Caption literal change + one ordinary Save → clean Designer with exact Caption readback: **observed**.
- Ordinary Form-tab close of a clean Form → no prompt, Form removed from the open set: **observed** (same as EXP-010 T4).
- Form-menu recent-forms reopen → Name, scope, Caption and baseline recovered in the same Designer document: **observed** (UI-level recovery; same as EXP-010 T5, now a second execution under a different account). Not replay-verified.
- Select Form Caption column still showing the Name after the Save: **unresolved**.
- FX_ forms invisible to a different signed-in account: **unresolved** (needs the operator's account decision).

## Documentation changes

- `experiments/EXP-129-create-and-recover-an-isolated-fx-inventory-protot.md` (this record, created).
- `evidence/EXP-129/` (screenshots `01` to `18`, listed above).
- No recipe, AGENTS.md, environment file, IDO, script, or other experiment record was changed.

---

## Operator disposition (2026-10-25, after acceptance)

- **Wrong account.** The operator's plan is to learn from the current (second) account **read-only** and to reproduce in the operator's own account. EXP-129 was approved and run before that plan was stated, so `FX_InventoryPrototype01` was created in the second account's User scope by mistake.
- **Decision: leave it.** The Form is empty, FX_-prefixed, has only a literal Caption and touches no other object. It is not deleted: deleting a Form is the riskiest Designer operation, which is not justified for an empty shell. No browser action was taken for this disposition.
- **Effect on the knowledge.** The procedure result (create, Caption, Save, close/reopen; observed UI-level recovery) stands. The reproduction in the operator's own account will be a replay of this procedure there.
- **Rule from now on.** No create, Save or other mutation in the second account; creation briefs run only after the operator has signed into their own account.
