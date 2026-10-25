# EXP-134 T7 checkpoint (property-row configuration; STOPPED at harness guard blocker; not finished)

Run R-20261026-031627-MXfT · cycle 8 · task T7 · worker session `c52c4f1a-bac5-4dc2-aa1d-73faae9e2d76` · task_message_id `d20f2461-58d4-4804-9528-25e0f71075e6`.

## Result

- **Stopped.** After a Data Type dropdown Open click on row 2, a PostToolUse guard returned: "Guard completion failed; preserve the action reservation and stop." No further browser actions were issued.
- The wizard is open on page 1, over the vendor IdoProjects Designer on tab 0. Finish was never enabled and never pressed.
- Property rows are **partially configured**: row 1 complete (FX_Item); row 2 name entered (FX_Description) with its Data Type dropdown in an **unknown** state. Rows 3 to 6 were not added.
- The dropdown state for row 2 must be inspected first in any later task. Do not assume it is closed or that its list is still open.

## Preflight (T7, read-only)

| Gate | Observed |
|---|---|
| Tab list before first select | Tab 0 = Designer (wizard open, IdoProjects vendor Form); tab 1 = Designer (other); tab 2 = stale Designer (untouched); tab 3 = Web Client (not touched in T7) |
| Tab 0 selection | Selected once (already current); fresh snapshot taken |
| Wizard identity (page 1, fresh snapshot) | IDO Name `FX_InventoryItems`; IDO Project Name `FX_HelloWorldProject01`; Table Alias `fxinv`; Site Split unchecked; Table Name and View Name disabled and blank; Form Type MultiView, Form Layout GridLeft, Device Type Default (unchanged); Back disabled; Next enabled; Finish disabled |
| Designer scope footer | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` |

## Property-row state at stop (from fresh snapshots and `t7-01`)

| Row | Name | Property Class | Data Type | SQL Data Type | Property Length | Decimal Precision | Primary Key | Required | Label String ID | Default Value |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `FX_Item` | blank | String | nvarchar | 50 | blank cell (not shown editable for String) | checked | checked (auto, as in EXP-049) | blank | blank |
| 2 | `FX_Description` (name committed) | blank | **dropdown state unknown** (combobox editor active; Open clicked; guard fired) | not yet | not yet | not yet | not yet | not yet | not yet | not yet |
| 3 to 6 | not added | | | | | | | | | |

Row 1 Decimal Precision is not applicable to String and was left blank.

## Actions (T7, in order)

1. Read AGENTS.md, T6 checkpoint, EXP-130 `MockInventory-ido-definition.txt`, and grep/read of EXP-040 and EXP-049 wizard procedures (Property Class and Create Scripts evidence noted).
2. Tab list (read-only); tab 0 selected; fresh snapshot.
3. Row 1 Name cell clicked once (`e587`), which opened the Name editor.
4. Typed `FX_Item` into the Name editor once.
5. Pressed Tab once. **Deviation:** focus moved into row 1 **Property Class** editor (combobox active, not opened, no list shown, value blank). The Property Class lookup/combobox was not opened, and no Escape was pressed.
6. Clicked row 1 **Data Type** cell once. Focus moved there. Property Class remained blank in the next snapshot.
7. Clicked the Data Type dropdown Open once. The list opened (Binary, Byte, Date, Decimal, Float, GUID, Long Integer, NumSortedString, Short Integer, String, Big Integer). Screenshot `t7-02`.
8. Clicked `String` once. Data Type became String and SQL Data Type became nvarchar.
9. Clicked row 1 Property Length cell once; typed `50` once into its editor.
10. Clicked row 1 Primary Key checkbox once. Primary Key and Required both showed checked in the snapshot.
11. Clicked **Add Row** once. Row 2 was created.
12. Typed `FX_Description` into the row 2 Name editor once.
13. Clicked row 2 Data Type cell once; the Data Type combobox editor opened.
14. Clicked the row 2 Data Type dropdown Open once. **The guard blocker followed this call.** The dropdown state is unknown.

## Counts (T7)

| Operation | Count |
|---|---|
| Property rows added (Add Row) | 1 (row 2 added; total business rows now 2 of 6) |
| Property rows completed | 1 (FX_Item) |
| Navigation activations (Next / Back / Cancel / Finish) | 0 / 0 / 0 / 0 |
| Finish | 0 |
| Create Form response | 0 |
| Create Scripts change | 0 (page 2 not reached; state unverified) |
| Save / New / Delete / Copy / check-in / check-out | 0 |
| Property Class lookup opened | 0 (one focus entry via Tab; not opened) |
| Label String ID edits | 0 |
| Wizard launched (second wizard) | 0 |
| Metadata unload / FormSync / generated script / SQL execution | 0 |
| Records created or edited | 0 |
| Session Expired OK / portal navigation / sign-in / credential entry | 0 / 0 / 0 / 0 |
| Browser JavaScript / evaluate / run-code / internal APIs (worker-authored) | 0 |
| Ref-not-found errors | 0 |
| Browser timeouts | 0 |
| Fresh-snapshot recovery allowance used | 0 (the guard blocker was not a ref error) |
| Harness guard blocker | 1 (after row 2 Data Type dropdown Open) |

## Evidence files (under `evidence/EXP-134/`)

| File | Shows | Does not prove |
|---|---|---|
| `t7-01-wizard-row1-FX_Item-name-committed-data-type-cell.png` | Wizard page 1 with row 1 Name `FX_Item`, Property Class blank, Data Type editor active with empty dropdown, Finish disabled, footer User scope | Data Type value, length, key or required (set later) |
| `t7-02-wizard-row1-data-type-dropdown-open.png` | Data Type dropdown list open for row 1 (the snapshot listed the options including `String`) | That String was chosen (chosen later; confirmed by snapshot) |

Not yet captured: a full six-row capture (not reached); row 2 state after the blocker (not captured because the stop was reached first).

Tool-written, not worker-authored: `evidence/playwright/` snapshot and console files for this run.

## Unresolved for the next task

1. **Row 2 Data Type dropdown state.** Inspect with one fresh snapshot of the wizard dialog, then decide whether to pick `String` or press nothing. Do not Escape near Property Class.
2. Rows 2 (Length 255 etc.), 3 to 6, Decimal Precision for FX_QuantityOnHand and FX_ReorderLevel, Create Scripts (page 2), and the physical SQL table name remain open. The T7 instruction has not been completed.
3. The Property Class focus entry from step 5 is recorded as a deviation. Row 1 Property Class is blank in the snapshot.
4. The stale Designer on tab 2 and the vendor IdoProjects Designer on tab 0 were not otherwise changed in T7.

## Next permitted action

Inspect the wizard dialog with one fresh snapshot (guard-blocker recovery in a later task, with its own authorization). Then continue rows 2 to 6 in the order specified, verifying each row before the next. No Finish, Next, Save, check-in, Form creation, Create Scripts change or Property Class interaction is authorised by this checkpoint.
