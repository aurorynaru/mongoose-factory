# EXP-041-R3 T10 — Read-only AC-8 runtime recheck and strict verdict

Date: 2026-10-10. Run R-20261010-154641-QsiV · EXP-041-R3 · cycle 11 · task T10.
Worker session `9c24aaf2-4ab2-4bfd-9a4b-9da1b4b03cc3` · task_message_id `bfd5b5b4-9f5a-4cb8-8f4d-ba30141b0ad4`.
Scope: review of saved evidence; one fresh full accessibility snapshot; one screenshot. No input clicked, no typing, no record action, no mode change, no Save, no reopen, no close, no new Form open, no collision query, no JavaScript.

## 1. Evidence reviewed

- `t9-03-web-client-runtime-FX_HelloWorld01-initial-state-after-single-open.png` (re-viewed in T9): runtime tab `FX_HelloWorld01`; one grid row with blue new-row star and row number 1; two detail inputs (upper with focus, lower with red required asterisk); each input shows only a `:` label glyph; no messages.
- `t9-ac8-web-client-runtime-open-observation.md`: the T9 observation and the AC-8 "partial" assessment.
- Designer baseline (T5 and T8 snapshots, bindings already recorded): `FX_CodeEdit` (Edit, `object.FX_Code`, Pane 1, tab 6), `FX_LabelEdit` (Edit, `object.FX_Label`, Pane 1, tab 4), `FX_CodeGridCol` (`object.FX_Code`), `FX_LabelGridCol` (`object.FX_Label`), and the Static labels `FX_CodeStatic` and `FX_LabelStatic` (no data source).

**Distinction of evidence sources (applied strictly):**
- *Demonstrated in the Designer:* the component names, types and bindings above (read from the Components tree and the Collections tab; T5, T8).
- *Rendered in the runtime:* two text inputs, one grid row, a required marker on one input, a new-row star. **No runtime element carries the text FX_Code or FX_Label.**
- *Not demonstrated by any runtime evidence:* which rendered input is FX_CodeEdit and which is FX_LabelEdit.

## 2. Fresh runtime inspection (T10)

- Tab 1 (Web Client) selected (navigation only). Tab 0 (Designer) not touched.
- Fresh full accessibility snapshot (one): tab `FX_HelloWorld01` selected (`f1e102`–`f1e104`); tab panel `FX_HelloWorld01` (`f1e105`).
  - Grid header column names: **empty** (`f1e111`, `f1e126`). A second column header reads `*` (`f1e130`), a required-marker header with no field name.
  - Grid row: one row, cell `1` (`f1e121`), plus two blank cells (`f1e140`, `f1e142`).
  - Detail inputs: `textbox [active] [ref=f1e151]` and `textbox [ref=f1e158]`, both **with no accessible name**. Their labels are generic `:` nodes (`f1e145`, `f1e152`), and the required marker is a generic `*` (`f1e154`) above `f1e158`.
  - No "Add" / "New" / mode text in the tree. Toolbar: New (`f1e29`) and Delete (`f1e32`) enabled; Save `[disabled]`; Get More Rows, System Notes, Documents and Send email disabled.
  - No dialog, alert, message or error node.
- Screenshot `t10-01-runtime-recheck-FX_HelloWorld01-readonly-no-interaction.png` (viewed): same layout as T9; no message; no mode label; no field caption.

## 3. Findings against each required runtime item

| Required item | Directly observed in runtime | Result |
|---|---|---|
| Literal `FX_Code` label or caption | No. | **Not established** |
| Literal `FX_Label` label or caption | No. | **Not established** |
| Accessible input names for the two inputs | No. Both inputs have no accessible name. | **Not established** |
| Grid header names | No. Column headers are empty; one header is `*`. | **Not established** |
| Explicit add-mode indicator | No. Only the blue new-row star (on the grid row), empty inputs, and Save disabled. | **Not established** (add mode remains inferred) |
| Visible messages or errors | None rendered. | Observed: **no messages** |
| Required marker | One required-marked input (`*`). Which field it belongs to is not named. | Observed marker; **mapping not established** |

**Mappings I did not make:** I did not identify the upper input as FX_Label or the lower as FX_Code from position, from the required asterisk, or from the Designer bindings. The runtime UI does not establish either mapping. The Designer shows FX_CodeEdit and FX_LabelEdit exist; it does not show which runtime input they render as.

## 4. Strict AC-8 verdict

**AC-8: NOT PASSED. Pending.**

Required evidence present:
- A single supported open through Select Form and OK: **yes** (T9).
- Exact Form identity visible: **yes**, in the tab heading and panel `FX_HelloWorld01`, and the URL `favoriteContext=FX_HelloWorld01`.
- No application rows entered or saved: **yes** (zero typing, zero Save, zero record actions in T9 and T10).
- No messages or errors rendered: **yes**.

Required evidence missing (the reason AC-8 is not passed):
1. Rendered FX_Code and FX_Label fields, identifiable by name: **missing.** The inputs are unnamed.
2. Mapping of each rendered input to FX_Code or FX_Label: **missing.**
3. Explicit add-mode indication: **missing.** The new-row star is observed; add mode is only inferred.

The brief forbids further inspection, typing, clicks on inputs, mode changes, or a second open in T10, and the recovery allowance is exhausted. **No further runtime evidence can be collected under this brief.** The gap therefore stays open until the operator authorizes a method that exposes names or captions without interacting with data (for example, a documented read-only field-name view). Such an authorization is a decision for the operator and is not proposed here as a workaround.

## 5. Preserved facts

- One Web Client runtime opening (T9). No second opening in T10.
- Zero application-data edits, zero saves, zero record creations.
- No errors, authentication prompts or unexpected dialogs observed in T9 or T10.

## 6. Operation counts (T10)

| Operation | Count |
|---|---|
| Evidence files re-read | 2 (`t9-ac8…md` lines 30–60; the T9 screenshot re-viewed via T10-01) |
| Tab selects | 1 (to the Web Client, tab 1) |
| Fresh full accessibility snapshots | **1** |
| Screenshots | **1** (`t10-01`) |
| Clicks, typing, key presses, record actions on the runtime | **0** |
| Runtime Form opens | 0 (no second open) |
| Designer changes, Saves, close/reopen | 0 |
| Collision or Select Form queries | 0 |
| Recovery snapshots or corrected inspections | 0 |
| JavaScript / evaluate / run-code | 0 |

## 7. Browser end state (T10)

- Tab 1 (Web Client) selected, showing the runtime tab `FX_HelloWorld01`, with no input focused by T10 (the earlier focus from T9 remains as it was; T10 did not click). No dialog, alert or browser prompt.
- Tab 0 (Designer) unchanged: FX_HelloWorld01 open and clean (Save disabled), User scope `anton.ramos@3mworks.com.ph`.
