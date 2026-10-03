# T1 Preflight — Select Form full-store absence scan for FX_FormVariableLab03 (read-only)

Date: 2026-10-03 (EXP-013 T1, cycle 1, task T1)
Context: After the Web Client **Select Form** dialog loaded the full form inventory (evidence `09`), a read-only scan of the grid's ExtJS store was performed to prove `FX_FormVariableLab03` is absent (exact + case-insensitive). No mutation; no form opened; the dialog was cancelled afterward.

## Surface

- Web Client (Tab 0) iframe `mongoose_46_c51080bc-3191-4598-9894-39e1b84f8e87` (cross-origin `mgapse1ap.mtmgf.se1.mongoosepaas.io`).
- Select Form dialog window `ext-comp-1135`; grid `grid-1136` (xtype `grid`); store is **client-side** (`remoteTotal = 0`), holding the **full inventory**.
- Filter controls: **Filter By** combo `combo-1145` (value `mgdata` = **Name**), filter textfield `textfield-1143`, **Case Sensitive** `mgDlgCbx-1146`, **Starts With** `mgDlgCbx-1147`.

## Filter configuration (verified before the scan)

| Control | Component | Value | Meaning |
|---|---|---|---|
| Filter By | `combo-1145` | `mgdata` (raw **Name**) | filter on the form **Name** field |
| Case Sensitive | `mgDlgCbx-1146` | `false` | **case-insensitive** |
| Starts With | `mgDlgCbx-1147` | `false` | **contains** (not prefix) |

## Scan method (read-only)

Iterated **every record** in the `grid-1136` store and, for each record, inspected **every string field** (`mgdata`, `text`, `type`, `leaf`, `id`), lower-casing each value and testing for the target substring. No store mutation; no filter applied for the raw scan (the full unfiltered store was scanned).

## Results

- **Total records in store:** **649** (the full live inventory).
- **Target `fx_formvariablelab03` (case-insensitive, all fields, all records):** **0 matches** → `FX_FormVariableLab03` is **absent** (exact + case-insensitive).
- **Positive control `usersmaint` (same method):** **2 matches** — `UsersMaintQuery` and `UsersMaint` (field `mgdata`) → confirms the scan mechanism and the case-insensitive matching work.
- **Prefix probe `fx_formvariablelab`:** exactly **one** unique form — `FX_FormVariableLab02` (the EXP-012 leftover; matched in both its `mgdata` and `text` fields). No `FX_FormVariableLab03` or any other `FX_FormVariableLab*` exists.
- **Sample record shape:** `{ mgdata: <Name>, text: <Caption>, type: 7, leaf: true, id: "extModel214-<n>" }`.

## Visual cross-check (live Name filter)

- **Positive control:** filter text `UsersMaint` (slowly typed, live filter) → grid rendered exactly **2 rows** (`UsersMaintQuery` / "Users Query", `UsersMaint` / "Users"); store count after filter = **2**. (evidence `10`.)
- **Target:** filter cleared, then `FX_FormVariableLab03` typed (slowly) → grid **empty**, store count after filter = **0**; filter config re-verified as Name / case-insensitive / contains. (evidence `11`.)

## Conclusion

`FX_FormVariableLab03` is **absent** (exact + case-insensitive) from the full **649-form** live inventory. The only `FX_FormVariableLab*` form present is `FX_FormVariableLab02` (EXP-012 leftover). The Select Form Name filter (case-insensitive, contains) is a valid exact + case-insensitive absence surface, corroborated by the full-store scan.