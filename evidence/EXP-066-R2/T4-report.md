# EXP-066-R2 — T4 report: FX_UMsDescription New Property wizard configured on the joined fxum.FX_Description column; Finish NOT invoked

- Run `R-20261012-234530-k6cU`, cycle 3, task **T4**. Worker session `995e83b7-0353-4093-b1fb-987ef3bf5cb1`; task_message_id `f3c09858-102f-46d9-9475-9d44072f1ce9`.
- Date 2026-10-12. LEARNING MODE. FX_-only scope extension (AGENTS.md, 2026-10-10).
- Record: `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md`.
- **Outcome: the New Property wizard for FX_Items is configured and left open for coordinator review.** Bound (default, unchanged); Bind To `fxum.FX_Description` (readback; the joined `fxum` column); Property Name `FX_UMsDescription`; Property Class blank (default). **Finish was NOT invoked. Save was NOT invoked. No property has been added yet.**

## 1. Tabs and gate

- Tab list (read-only), performed **before** the first tab selection: tab 0 = Web Designer (`designer/default.aspx?MGForm=FX_Items`), shown as **current**; tab 1 = Web Client (`favoriteContext=IdoTables`).
- Tab 0 was **not acted on** this task: not selected, not snapshotted, not clicked, not typed into, not screenshotted.
- Tab 1 selected once (succeeded). Snapshot #1 (fresh, after the selection) showed the **IDO Tables** sub-panel for FX_Items, active, with the IDOs and FX_Items tabs behind it. The Tables inventory was verified (see §2) before any action.

## 2. IDO Tables panel verified (before closing)

Screenshot `t4-01`; snapshot #1 accessibility readback:

| # | Table Name | IDO Name | Table Alias | Table Type | Join Type | Join Text |
|---|---|---|---|---|---|---|
| 1 | FX_Items | FX_Items | fxitms | Primary Base | Inner | (blank) |
| 2 | FX_UMs | FX_Items | fxum | Secondary | Left Outer | `fxum.[FX_UM] = fxitms.[FX_UM]` |

- Status: `&New Table... (IDO Tables 1 of 2)`. Save disabled. No dirty state. Exactly the two expected entries; no other entry.
- The grid shows both rows; the detail pane shows row 1 (FX_Items). Row 2's join text is verified from the accessibility readback (the detail pane shows row 1 only).

## 3. Close the clean IDO Tables sub-panel (one click)

- One click on `Close Panel IDO Tables` (ordinary panel-close control). No prompt; no dialog. The IDOs tab became active.
- Snapshot #2 (fresh gate): IDOs tab selected for FX_Items; **IDO identity**: project `FX_HelloWorldProject01`; IDO Name `FX_Items`; **Revision Num `2`**; **Revision Date `10/10/2026`**; **Locked By `anton.ramos@3mworks.com.ph`** (checked out to the operator; Check In button present, enabled); **toolbar Save disabled**; Label `oFX_Items`; Caption `oFX_Items`; Access As `G6R`. Status `&Tables (IDOs 1 of 1)`.
- **Property inventory (in-form Properties sub-tab, accessibility readback, 12 rows):** rows 1–12 = FX_Item (1), FX_Description (2), FX_Cost (3), FX_UM (4), CreatedBy (5), UpdatedBy (6), CreateDate (7), RecordDate (8), RowPointer (9), NoteExistsFlag (10), InWorkflow (11), **FX_Picture (12)**. **FX_UMsDescription is absent.** All 12 unchanged from T1.
- Prerequisites passed: IDO identity, checkout to the operator, Save disabled, FX_UMsDescription absent, join present. No stop condition met.

## 4. New Property wizard — page 1 (initial defaults)

- New Property clicked **once**. The **IDO Property Wizard** tab opened (`favoriteContext=IdoPropertyWizard`). Screenshot `t4-02`.
- Page 1 visible defaults (verbatim):
  - IDO Name: `FX_Items` (read-only textbox). (The accessibility tree labels this field `Property Name:`; the visible label is `IDO Name:`. Mislabel observed, same as EXP-061.)
  - Binding radio buttons: **Bound (selected, default)**; Derived; Unbound; Subcollection.
  - Buttons: Help; `< Back` (disabled); `Next >` (enabled); **Finish (disabled on page 1)**; Cancel.
- **Bound was kept unchanged.**
- One **Next >** click (wizard navigation; not a commit). Page 2 (`t4-03`).

## 5. Page 2 — initial state before binding (defaults)

Screenshot `t4-03`: Bind To (blank, required); Property Name (blank, required); Property Class (blank); Data Type section (`Inherit from Property Class` unchecked; type dropdown blank); Length (blank); Decimal (blank); Column Data Type section (`Inherit from Property Class` unchecked; dropdown blank); a description-style `Inherit from Property Class` checkbox (unchecked) above an empty text area. Buttons: Help; `< Back` (enabled); `Next >` (disabled); **Finish (enabled on page 2)**; Cancel.

## 6. Bind To — how joined columns are listed (observed)

One click on the Bind To `Open` button opened the list (`t4-04`). The accessibility tree exposed **21 options**, all in `alias.column` form, in one flat list:

- **`fxitms.*` block first (base table; 12 options):** `fxitms.CreateDate`, `fxitms.CreatedBy`, `fxitms.FX_Cost`, `fxitms.FX_Description`, `fxitms.FX_Item`, `fxitms.FX_Picture`, `fxitms.FX_UM`, `fxitms.InWorkflow`, `fxitms.NoteExistsFlag`, `fxitms.RecordDate`, `fxitms.RowPointer`, `fxitms.UpdatedBy`.
- **`fxum.*` block second (joined table; 9 options):** `fxum.CreateDate`, `fxum.CreatedBy`, `fxum.FX_Description`, `fxum.FX_UM`, `fxum.InWorkflow`, `fxum.NoteExistsFlag`, `fxum.RecordDate`, `fxum.RowPointer`, `fxum.UpdatedBy`.

**How they are distinguished:** only by the **`alias.` prefix**; the joined columns are listed beside the base columns in the same list, with no separate heading or icon. The base column `fxitms.FX_Description` and the joined `fxum.FX_Description` are not adjacent: they sit in the two separate alias blocks (the fxitms block first). The prefix is the sole discriminator within the list. The `fxum` block lacks FX_Cost, FX_Item and FX_Picture (no such columns in the UMs table).

- **Selected:** the accessible cell `fxum.FX_Description` (one click; the exact joined-table option, not `fxitms.FX_Description`).
- **Readback (verified in the combobox after selection):** Bind To = **`fxum.FX_Description`** (`t4-05`, snapshot #5). The prefix `fxum.` identifies the joined table. This is an unambiguous identity: the option was selected by its exact accessible name, and the combobox readback carries the same alias prefix.

## 7. Auto-fill after Bind To (observed; not typed)

Immediately after Bind To was committed, the wizard **auto-populated** other fields:

| Field | Value after Bind To (before rename) | Source |
|---|---|---|
| Property Name | `FX_Description` | auto-filled from the bound column name (not typed) |
| Property Class | (blank) | default; not changed |
| Data Type | `String` | auto-filled from the bound column; `Inherit from Property Class` **disabled** (no class) |
| Length | `50` | auto-filled from the bound column (note below) |
| Decimal | (blank) | — |
| Column Data Type | `nvarchar` | auto-filled from the bound column; `Inherit from Property Class` **enabled, unchecked** |
| Description-area `Inherit from Property Class` | unchecked; text area empty | default |

- **Observation (for the record; not verified against SQL):** the wizard's Length for the joined `fxum.FX_Description` is **50**. The base `fxitms.FX_Description` shows **Length 150** in the IDO Properties grid (T1, T4 readback). The two columns therefore report different lengths; the wizard's value is taken as observed and is not checked against the SQL column definition.
- The auto-filled values were left as the wizard set them (the brief says leave other fields at defaults).

Screenshot `t4-05` (committed Bind To, before rename; viewed): Bind To `fxum.FX_Description`; Property Name `FX_Description`; Data Type String; Length 50; Column Data Type nvarchar.

## 8. Property Name (one type action)

- `FX_UMsDescription` typed **once** into the Property Name textbox (the tool fills the field). The auto-filled `FX_Description` was **replaced**, not appended: readback `FX_UMsDescription` (snapshot #6, textbox value exactly `FX_UMsDescription`).
- No Tab or Enter pressed in the field.

## 9. Complete configured wizard (before Finish; viewed)

Screenshot `t4-06`:

| Field | Value (verbatim readback) |
|---|---|
| Binding | Bound (page 1 radio; retained from the default; not revisited) |
| Bind To | `fxum.FX_Description` |
| Property Name | `FX_UMsDescription` |
| Property Class | (blank; default; not changed) |
| Data Type | String (`Inherit from Property Class` disabled) |
| Length | 50 |
| Decimal | (blank) |
| Column Data Type | nvarchar (`Inherit from Property Class` unchecked) |
| Description-area inherit | unchecked; text area empty |
| Buttons | Help; `< Back` (enabled); `Next >` (disabled); **Finish (enabled; NOT pressed)**; Cancel |

- **Finish: not invoked.** No response to report (no Finish occurred).
- Save: not invoked. The toolbar Save remains disabled on the IDOs tab behind the wizard.

## 10. Stop state (per the brief)

- The configured wizard is **left open** on page 2 for coordinator review. It is an uncommitted in-page wizard, not a dialog.
- No Finish, no Save, no second New Property, no New Table, no builder Add, no wizard OK, no Cancel.
- Designer, runtime records, checkout management, unload, FormSync and configuration: untouched.
- The IDOs tab behind the wizard: clean (Save disabled; Revision 2; Locked By the operator; 12 properties; FX_UMsDescription absent, since nothing has been finished).

## 11. Action audit (T4, exact counts)

| Action | T4 count | Notes |
|---|---|---|
| Browser tab list (read-only) | 1 | before the first tab selection; tab 0 reported as current |
| Browser tab select | 1 | tab 1 (Web Client); succeeded |
| Untargeted snapshots (explicit calls) | 6 | #1 gate (IDO Tables); #2 IDOs gate after close; #3 page 1 after New Property; #4 page 2 after Next; #5 after Bind To; #6 after Property Name typed |
| Finds | 1 | Bind To option list (accessibility) |
| Clicks | 5 | Close Panel IDO Tables (1); New Property (1); Next >(1); Bind To Open (1); fxum.FX_Description option (1) |
| Typed entries | 1 | `FX_UMsDescription` into Property Name |
| Key presses | 0 | no Tab, no Enter, no F4 |
| Waits | 4 | 2 s after New Property; 2 s after Next; 2 s after Bind To Open; 1 s after the name typed |
| Screenshot calls | 6 | `t4-01` to `t4-06` |
| Dialogs answered | 0 | none appeared |
| Ref-not-found / timeouts | 0 / 0 | — |
| Fresh-snapshot recovery allowance used | 0 | — |
| Browser JavaScript, console or network inspection (worker-initiated) | 0 | — |
| Direct URL navigation, refresh, restart, reauthentication | 0 | — |
| **New Property wizard invoked** | **1** | one invocation (T4) |
| Wizard Next (page 1 → 2) | 1 | navigation only |
| **Finish** | **0** | not invoked (brief: "Do not invoke Finish") |
| **Save** | **0** | — |
| New Table | 0 (T4) | cumulative 1 (T2) |
| Builder Add / wizard OK | 0 / 0 (T4) | cumulative 1 / 1 (T3) |
| Properties added | 0 | — |
| Table entries added | 0 (T4) | cumulative 1 (T3) |
| Check Out / check-in / undo checkout | 0 / 0 / 0 | — |
| IDO Collections close / reopen | 0 / 0 | — |
| Runtime FX_Items Form open / close / reopen / interaction | 0 / 0 / 0 / 0 | not touched (brief) |
| Web Designer actions | 0 | tab 0 listed as current only; no snapshot, click, typing or screenshot on it |
| Unload / cache / FormSync / deployment / regeneration | 0 | — |
| IDO Tables sub-panel opened (T4) / closed | 0 / 1 | opened in T3 (left open); closed in T4 with its own panel-close |

Total explicit browser calls (T4): tab list 1; tab select 1; snapshots 6; finds 1; clicks 5; type 1; waits 4; screenshots 6 = **25**.

### Cumulative (T1 + T2 + T3 + T4), exact

| Action | T1 | T2 | T3 | T4 | Total |
|---|---|---|---|---|---|
| New Table invoked | 0 | 1 | 0 | 0 | **1** |
| Table Name Tab commit | 0 | 1 | 0 | 0 | **1** |
| Table Alias Tab commit | 0 | 0 | 1 | 0 | **1** |
| Builder Add | 0 | 0 | 1 | 0 | **1** |
| Typed join text | 0 | 0 | 0 | 0 | **0** |
| Wizard OK (table) | 0 | 0 | 1 | 0 | **1** |
| Table entries added | 0 | 0 | 1 | 0 | **1** (FX_UMs / fxum) |
| New Property wizard invoked | 0 | 0 | 0 | 1 | **1** |
| Finish | 0 | 0 | 0 | 0 | **0** |
| Save | 0 | 0 | 0 | 0 | **0** |
| Properties added | 0 | 0 | 0 | 0 | **0** |
| Check-in / undo checkout | 0 | 0 | 0 | 0 | **0** |
| IDO Collections close / reopen | 0 | 0 | 0 | 0 | **0** |
| Runtime close / reopen | 0 | 0 | 0 | 0 | **0** |
| Unload / cache / FormSync / deployment | 0 | 0 | 0 | 0 | **0** |
| Designer actions | 0 | 0 | 0 | 0 | **0** |
| Explicit browser calls | 20 | 17 | 38 | 25 | **100** |

## 12. Worker-written file inventory (cumulative, T1–T4)

- `experiments/EXP-066-R2-hello-world-part-4-section-7-join-fx-ums-and-add-property.md` (created at T1; updated at T2, T3 and T4).
- `evidence/EXP-066-R2/T1-report.md`, `T2-report.md`, `T3-report.md`, `T4-report.md` (this file).
- Screenshots:
  - T1: `t1-01-webclient-initial-state-idos-reused.png`; `t1-02-idos-FX_Items-after-f4-settled.png` (misnamed: Filter in Place state); `t1-03-idos-FX_Items-query-settled-identity-tables.png` (misnamed: identity and rows 1–8); `t1-04-ido-tables-baseline-one-entry.png`; `t1-05-final-state-idos-checked-out-save-disabled.png`.
  - T2: `t2-01-pre-new-table-tables-view-one-entry.png`; `t2-02-new-table-wizard-opened-blank-defaults.png`; `t2-03-table-name-typed-before-tab.png`; `t2-04-table-name-after-tab-commit.png`.
  - T3: `t3-01-wizard-precheck-before-alias.png`; `t3-02-alias-fxum-after-tab.png`; `t3-03-builder-first-column-list-open.png`; `t3-04-builder-table-name-list-open.png`; `t3-05-builder-second-column-list-open.png`; `t3-06-wizard-builder-configured-before-add.png`; `t3-07-join-text-after-builder-add.png`; `t3-08-tables-view-after-ok.png`.
  - T4: `t4-01-tables-panel-two-entries-before-close.png`; `t4-02-new-property-wizard-page1-initial.png`; `t4-03-wizard-page2-initial-before-bind.png`; `t4-04-bind-to-list-open.png`; `t4-05-bind-to-fxum-committed-autofill-before-rename.png`; `t4-06-wizard-configured-before-finish.png`.
- Tool-written (not worker-authored; outside the EXP-066-R2 path; reported in tool outputs): `evidence/playwright/` files from this task, including `console-2026-10-12T15-56-56-061Z.log`, `page-2026-10-12T15-57-04-505Z.yml` through `page-2026-10-12T15-57-53-703Z.yml`. The full set is not enumerated. The harness and the operator's git review are authoritative.

## 13. Decisive evidence (what each T4 screenshot proves and does not)

- **`t4-01`** (IDO Tables panel, before close; viewed): proves the grid shows two rows (FX_Items, FX_UMs) with status `(IDO Tables 1 of 2)`, and the detail pane shows row 1 (FX_Items, fxitms, Primary Base, Inner). Does **not** show the join text of row 2 in the picture (that is from the accessibility readback in §2) or the database.
- **`t4-02`** (page 1, initial; viewed): proves the Bound radio is selected by default, the IDO Name FX_Items, Back disabled, Next enabled, Finish disabled on page 1. Does not prove the server state.
- **`t4-03`** (page 2, initial; viewed): proves the blank binding fields and the Finish button enabled on page 2. Does not show any Bind To selection.
- **`t4-04`** (Bind To list open; viewed): proves the fxitms block (FX_Description ... UpdatedBy) and the list ordering; the fxum block lies below the visible area in this picture and is shown in the accessibility readback (§6). Does not prove the selection.
- **`t4-05`** (after Bind To commit, before rename; viewed): proves Bind To `fxum.FX_Description`, auto-filled Property Name `FX_Description`, Data Type String, Length 50, Column Data Type nvarchar, Property Class blank. Does not prove the server or SQL column length.
- **`t4-06`** (complete configured wizard; viewed): proves Bind To `fxum.FX_Description`; Property Name `FX_UMsDescription`; Property Class blank; String; Length 50; nvarchar; Finish enabled and not pressed. This is the pre-Finish configuration. Does not prove the property is added (no Finish).

Limitations: UI and accessibility level; the joined-column identity rests on the exact option name and the `fxum.` prefix in the readback; the Length of 50 is the wizard's readback, not a SQL check; no database read.

## 14. Acceptance status (T4)

- **AC-3 (partial):** One New Property wizard invoked; Bound retained (default); Bind To `fxum.FX_Description` committed and identity recorded (joined-column listing recorded, §6); name `FX_UMsDescription` set; other fields left at their observed defaults (Property Class blank; auto-filled Data Type/Length/Column Data Type recorded, §7); configuration captured (`t4-06`). **Finish not yet invoked; Save 0.** AC-3 is **not** complete: the Finish response is pending.
- AC-1: supported (T1; re-verified at the T4 gate: identity, revision 2, Locked By operator, 12 properties, FX_UMsDescription absent).
- AC-2: supported (T2 and T3; the Tables view after OK, two entries, re-verified in T4 §2).
- AC-4 to AC-6: not started (Finish, post-change inventory, IDO close/reopen, runtime check).
- AC-7: no other change observed (see §11).
- AC-8: partial (T1–T4 audits and inventories recorded; final report reserved).

## 15. Blockers and open questions

- **No blocker for T4.** All prerequisites passed; the joined-table identity was established unambiguously.
- Open: the Length of 50 for `fxum.FX_Description` versus 150 for `fxitms.FX_Description`. The wizard's value is recorded; the SQL column length is unverified.
- Open: the Finish response (to be observed in the next authorised task); whether Finish commits the property directly (EXP-061 observed that it does, with Save disabled).
- Open: the Revision Num after Finish (EXP-061 observed that a property add did not change the revision; not assumed here).
- Open (carried): the join text carries the builder's bracket quoting; whether a typed join would be preferred for a later replay is not decided.

## 16. Final UI state

- Tab 1 (Web Client) selected. The active tab is the **IDO Property Wizard**, open on page 2, configured as in §9. Finish enabled but **not pressed**. Next disabled; Back enabled.
- Behind it: the IDOs tab for FX_Items (clean; Save disabled; Revision 2; Locked By the operator; 12 properties; no FX_UMsDescription yet). The IDO Tables sub-panel was closed in §3.
- Tab 0 (Web Designer): not acted on.
- The inherited FX_Items runtime tab: not acted on.
- No browser-native dialog; no unsaved-change prompt on the IDOs tab. The wizard is an uncommitted in-page wizard, left open for coordinator review as the brief instructs.

## 17. Next permitted step

Not permitted without a new decision: **Finish** (one invocation), any Save, the post-Finish inventory (AC-4), the IDO Collections close/reopen (AC-5), and the runtime check (AC-6). Cancel is also a coordinator decision. The next task should start with a fresh snapshot of the wizard tab and confirm the page-2 values in §9 before Finish.
