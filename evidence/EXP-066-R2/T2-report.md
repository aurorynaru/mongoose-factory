# EXP-066-R2 — T2 report: New Table opened once; Table Name FX_UMs committed with Tab; wizard left open (alias and join NOT entered)

- Run `R-20261012-234530-k6cU`, cycle 1, task **T2**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `13b4bb15-5250-46ae-870d-fbcea9e1d37f`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: the Table Name commit succeeded at readback level.** The combobox still shows exactly `FX_UMs` after Tab; no validation message is visible. The IDO Table Wizard is **open**, with Table Alias empty, Join Conditions empty and no OK/Add invoked. **No table entry has been created. No IDO change has been made.**

## 1. Scope of this task

Per the bounded T2 instruction: reuse the open clean IDOs form; do not repeat F4 or close/reopen IDO Collections; open the Tables view, verify the sole FX_Items/fxitms Primary Base entry; invoke New Table once; type `FX_UMs` once into Table Name and press Tab once; inspect the readback and any validation; leave the wizard open if the readback is exact; do not invoke Add, OK, New Property, Finish or Save.

## 2. Browser tabs

- Tab list (read-only), performed before the first tab selection: tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`), reported as **current** at that moment; tab 1 = Web Client (`favoriteContext=IdoCollections`).
- Tab 0 was **not acted on** (no click, no screenshot, no snapshot, no Designer control).
- Tab 1 selected once (succeeded). Fresh untargeted snapshot taken.

## 3. Pre-change gate (fresh snapshot, read-only)

- IDOs tab active for FX_Items; Properties sub-tab selected.
- Identity: IDO `FX_Items`; project `FX_HelloWorldProject01`; Revision Num `2`; Revision Date `10/10/2026`; Locked By `anton.ramos@3mworks.com.ph`; Access As `G6R`; Caption/Label `oFX_Items`.
- Toolbar Save disabled (clean). Check In and Undo Check Out present (checked out to the operator).
- Properties: 12 rows (FX_Item 1 … FX_Picture 12). Row 12 FX_Picture: Bound to Column, class FX_Picture, Binary, varbinary. Unchanged from T1.
- No dialog; no sign-in; no portal banner.

## 4. Tables view (baseline, before New Table)

- Tables button clicked once; the separate **IDO Tables** tab opened (`favoriteContext=IdoTables`). Screenshot `t2-01`.
- One row: Table Name `FX_Items`; IDO Name `FX_Items`; Table Alias `fxitms`; Table Type `Primary Base`; Join Type `Inner`; Join Text blank. Status `(IDO Tables 1 of 1)`.
- Buttons: New Table..., EditTable..., Bind Properties....
- Confirmed: the sole entry is the base table; no fxum entry.

## 5. New Table... (one invocation) and the wizard before any entry

- New Table... clicked once. The **IDO Table Wizard** tab opened (`favoriteContext=IdoTableWizard`). Screenshot `t2-02` (before any entry).
- Fields as they appeared before entry (verbatim labels):

| Field | Value before entry |
|---|---|
| IDO Name: | `FX_Items` (read-only) |
| Table Name: * | blank (combobox with Open button; focused) |
| Table Alias: * | blank |
| Table Type: * | `Secondary` |
| Join Type: * | `Left Outer` |
| Join builder row | blank: [Column Name] `=` [Table Name] [Column Name] [Add] |
| Join Text: * | blank |
| OK / Cancel | present |

## 6. Table Name entry and Tab commit

1. **Type (1):** `FX_UMs` entered into the Table Name combobox (single action; the tool fills the field, so the text was placed in one step, not key by key). Pre-Tab screenshot `t2-03`: combobox shows `FX_UMs`; **no list open**; Table Alias still blank; focus on the combobox.
2. **Tab (1):** Tab pressed once. Focus moved to **Table Alias** (the Table Alias textbox became the active field, screenshot `t2-04`). No Enter pressed. The Table Name list (Open button) was **not** opened and no list item was chosen.
3. **Settle (2 s), then readback:** screenshot `t2-04` and a fresh find for the wizard fields show:
   - Table Name combobox value: **`FX_UMs`** (exact).
   - Table Alias: empty (active).
   - No validation or error text visible in the screenshot, and none returned by the find for `validation`, `required`, or `error`. The red `*` required markers remain as static field markers (the same markers were visible before entry).
   - No dropdown list open.

### Did Tab genuinely preserve the value? (what was checked)

- Focus moved off the combobox (to Table Alias) with the value still in place after a 2-second settle. This is the readback the brief asks for after Tab, and it is more than a value that appeared immediately after typing.
- **Not established:** whether the client accepted the value as a valid SQL table selection (server-side validation). Nothing observable in this task confirms validity beyond the absence of a message. Whether `FX_UMs` is a valid table is resolved only if OK later succeeds (not invoked in T2).
- The EXP-066 T2 attempt showed the same typed text in the combobox but was discarded by Escape. This attempt differs: the value is still present after focus moved to another field, with no Escape, no list interaction and no Enter.

## 7. Stop state (per the brief)

- The wizard is **left open** with Table Name `FX_UMs` and Table Alias empty. Table Type `Secondary` and Join Type `Left Outer` were **not changed**. The join builder and join text were **not touched**.
- Add: **not invoked**. OK: **not invoked**. Cancel: **not invoked**. New Property: **not invoked**. Finish: **not invoked**. Save: **not invoked**.
- The wizard is an unsaved, in-progress tab; it is not a dialog. The brief says to leave it open. The parent IDOs tab and the IDO Tables tab are behind it, and the IDO itself is unchanged (no table entry exists yet).
- **Note for the next task:** the wizard holds an uncommitted entry (Table Name `FX_UMs`). The next step needs a decision whether to continue (alias, join, OK) or to Cancel. Cancel is an action the brief reserves for a later decision; it was not performed here.

## 8. Action audit (T2 only, exact counts)

| Action | Count | Notes |
|---|---|---|
| Browser tab list (read-only) | 1 | before the first tab selection; tab 0 reported as current |
| Browser tab select | 1 | tab 1 (Web Client); succeeded |
| Browser snapshot (untargeted, explicit call) | 1 | fresh gate after tab select |
| Snapshots returned by action results | 5 | returned automatically by the Tables click, the New Table click, and three waits; not separate snapshot calls |
| Targeted snapshots | 0 | — |
| Finds | 3 | `New Table...`; wizard fields (regex); post-Tab readback (regex) |
| Clicks | 2 | `Tables` button (IDOs form); `New Table...` (IDO Tables view) |
| Typed entries | 1 | `FX_UMs` into the Table Name combobox (filled as one entry) |
| Key presses | 1 | Tab (once) |
| Enter key presses | 0 | — |
| Table Name list opens (Open button) | 0 | — |
| Mouse moves / mouse wheel | 0 / 0 | — |
| Waits | 3 | 2 s after Tables; 2 s after New Table; 2 s after Tab |
| Screenshot calls | 4 | `t2-01`, `t2-02`, `t2-03`, `t2-04` (one each) |
| Dialogs answered | 0 | none appeared |
| Ref-not-found / timeouts | 0 / 0 | — |
| Fresh-snapshot recovery allowance used | 0 | — |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |
| **New Table invoked** | **1** | one invocation; wizard opened |
| **Table Name Tab commit** | **1** | `FX_UMs` committed by one Tab |
| Table Alias / Table Type / Join Type entered | 0 / 0 / 0 | not touched (brief) |
| Join builder Add | 0 | — |
| Join text typed | 0 | — |
| **Wizard OK** | **0** | not invoked |
| Wizard Cancel | 0 | not invoked |
| Table entries added | 0 | — |
| New Property wizard / Finish | 0 / 0 | — |
| Save | 0 | — |
| Check Out / check-in / undo checkout | 0 / 0 / 0 | — |
| IDO Collections close / reopen | 0 / 0 | not repeated (brief) |
| Runtime FX_Items Form open / close / reopen / interaction | 0 / 0 / 0 / 0 | — |
| Web Designer actions | 0 | tab 0 listed only; never selected or acted on |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |
| IDO Tables sub-view opened / closed | 1 / 0 | left open, behind the wizard |

Total browser calls (T2): tab list 1; tab select 1; snapshot 1; finds 3; clicks 2; type 1; key press 1; waits 3; screenshots 4 = **17** explicit calls (five further snapshots returned inside action results).

## 9. Worker-written file inventory (T2)

- `evidence/EXP-066-R2/T2-report.md` (created; this file).
- `evidence/EXP-066-R2/t2-01-pre-new-table-tables-view-one-entry.png` (created)
- `evidence/EXP-066-R2/t2-02-new-table-wizard-opened-blank-defaults.png` (created)
- `evidence/EXP-066-R2/t2-03-table-name-typed-before-tab.png` (created)
- `evidence/EXP-066-R2/t2-04-table-name-after-tab-commit.png` (created)
- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (updated: T2 section, status, counts, inventory)
- Tool-written (not worker-authored; outside the EXP-066-R2 path; reported in tool outputs): `evidence/playwright/console-2026-10-12T15-50-02-467Z.log`, `page-2026-10-12T15-50-07-209Z.yml`, `page-2026-10-12T15-50-10-919Z.yml`, `page-2026-10-12T15-50-15-813Z.yml`, `page-2026-10-12T15-50-19-226Z.yml`, `page-2026-10-12T15-50-30-115Z.yml`. The list may be incomplete; the harness and operator git review are authoritative.

## 10. Decisive evidence (what each screenshot proves and does not)

- **`t2-01`** (IDO Tables view, before New Table): proves the sole entry FX_Items / fxitms / Primary Base / Inner and status `(IDO Tables 1 of 1)`; no fxum row. Does not prove the database or the table list.
- **`t2-02`** (wizard just opened): proves IDO Name `FX_Items`; Table Name blank and focused; Table Alias blank; Table Type Secondary; Join Type Left Outer; empty join builder and join text; OK and Cancel. Does not prove any server-side table list.
- **`t2-03`** (before Tab): proves the combobox displays `FX_UMs`, no list open, Table Alias blank. Does **not** prove the value was committed; it is the pre-commit state.
- **`t2-04`** (after Tab and a 2 s settle): proves the combobox still displays `FX_UMs` after focus moved to Table Alias; the Table Alias textbox is active; no visible validation message; no list open. Does **not** prove server-side validity of `FX_UMs` as a table. It is the post-commit client readback.

Visual check of `t2-04`: the Table Name combobox reads `FX_UMs` in the field with the red required marker; Table Alias is focused and empty; OK and Cancel are at the bottom. Nothing else is shown.

## 11. Acceptance status (T2)

- **AC-2 (partial, this task):** the Table Name readback `FX_UMs` after Tab with no validation message is **observed**. Table Alias, Join Type/Table Type confirmation, the join text, and the single wizard OK are **not** performed. AC-2 is **not yet supported** as a whole.
- AC-1: supported (T1); unchanged. Re-confirmed in the T2 gate (§3).
- AC-3 to AC-6: not started.
- AC-7: no other change observed (see §8).
- AC-8: partial (this report and the record; final report reserved).

## 12. Blockers and open questions

- **No blocker at the readback level.** The brief's stop condition (value not kept or a validation message) was not met.
- Open: whether `FX_UMs` is accepted as a valid SQL table selection. Not observable until OK. The next step must answer this.
- Open: the wizard now holds an uncommitted entry. A decision is needed on continuing (alias, join, OK) or Cancel.
- Open (carried): whether the Table Name lookup is complete. The T2 readback does not change the earlier finding.

## 13. Final browser state

- Tab 1 (Web Client) selected. Active tab: **IDO Table Wizard** (in-page Form tab, open, Table Name `FX_UMs`, Table Alias empty, not configured, OK not invoked).
- Behind it: the IDOs tab for FX_Items (clean, Save disabled, Revision 2, Locked By the operator, 12 properties) and the IDO Tables tab (one entry, unchanged).
- Tab 0 (Web Designer): untouched.
- The inherited FX_Items runtime tab: not acted on.
- No browser-native dialog. No unsaved-change prompt on the IDOs form. The wizard is an open, uncommitted in-page tab (left open as the brief instructs).

## 14. Next permitted step

Not permitted without a new decision: continuing the wizard (alias `fxum`, join condition, Add, OK), Cancel, the New Property wizard, Finish, Save, or any close/reopen. The next task should begin with a fresh snapshot of the wizard tab and confirm Table Name `FX_UMs` before any further entry.
