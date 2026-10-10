# EXP-047-R2 — T1 evidence summary (read-only preflight and creation gate)

Run `R-20261011-003837-AqH7`, task T1, task_message_id `3358be5e-b5a1-4006-be04-5ba38bc2c02b`, worker session `217da4e1-fba3-4a0e-8535-6fc5a92edfd5`. Classification: observed only (single session, UI level). Not replay_verified.

## Accessibility excerpts (from the tool's snapshots at the time of each step)

| Step | Excerpt (role / name / state) | Meaning |
| --- | --- | --- |
| Start | Explorer; no runtime tab in the in-page tablist; toolbar `Save` disabled; banner identity `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | No Form open; identity and configuration visible |
| Select Form | dialog `Select Form`; row `Property Classes` / `IdoPropertyClasses`; checkbox `Starts With` unchecked | Form identity via Name `IdoPropertyClasses` |
| Form open | tab `Property Classes` [selected]; URL `favoriteContext=IdoPropertyClasses`; status textbox `Filter in Place`; `Save` disabled; `New` disabled | Runtime Form identified; FiP mode; clean |
| Baseline (FX_UMBase) | status `Base Class (IDO Property Classes 1 of 1)`; grid row `FX_UMBase`; combobox `Data Type:` value `String`; textbox `Length:` value `10`; combobox `Column Data Type:` value `nvarchar`; textbox `Label String ID:` value `FX_sUM`; `Check In` and `Undo Check Out` enabled | AC-3 baseline; checkout indication (operator) |
| Gate (FX_UM) | textbox `Class Name:` value `FX_UM`; after F4 status `Base Class (IDO Property Classes 1 of 1)`; grid shows one row with blank Class Name (add-mode placeholder); `Save` disabled | Zero data rows for `FX_UM` (AC-2) |
| Positive control (FX_UMBase) | after F4 status `Base Class (IDO Property Classes 1 of 1)`; grid row `FX_UMBase`; placeholder gone; `Save` disabled | Retrieval works after the gate (AC-2) |
| Final | `Save` disabled; no `dialog` found | Stable; no unsaved change |

## Screenshot summaries (what each proves and does not prove)

| File | Shows | Proves | Does not prove |
| --- | --- | --- | --- |
| `t1-00-preflight-explorer-no-runtime-tabs.png` | Explorer, no runtime tabs, DEM identity bar | Start state; no session dialog | Database state |
| `t1-01-select-form-propertyclass-filter.png` | Select Form, one row `Property Classes` / `IdoPropertyClasses` | Form identity route | That the Form opened |
| `t1-02-property-classes-opened-via-select-form-fip-blank.png` | Property Classes tab, FiP mode, blank criteria | Identity and clean state before the baseline | Any result |
| `t1-03-baseline-fip-criteria-FX_UMBase-before-f4.png` | Criteria `FX_UMBase` | Criteria before baseline F4 | The result |
| `t1-04-baseline-FX_UMBase-after-f4.png` | Row `FX_UMBase`; String, 10, nvarchar, FX_sUM; Check In / Undo Check Out solid blue; asterisks on *Data Type, *Length, *Column Data Type, *Label String ID | AC-3 baseline as displayed | Locked By in full (clipped); database state |
| `t1-05-fip-reentered-retains-FX_UMBase-before-gate.png` | Retained `FX_UMBase` criterion, selected | A restrictive criterion existed before the gate | Any result |
| `t1-06-gate-fip-criteria-FX_UM-before-f4.png` | Criteria `FX_UM`; other criteria blank | Exact gate criteria before F4 | The result |
| `t1-07-gate-FX_UM-after-f4-settled.png` | Zero data rows; blue-star placeholder; Class Name red asterisk; status `1 of 1`; Save greyed | Zero data rows for `FX_UM` (AC-2) | Collection completeness beyond the display |
| `t1-08-positive-control-fip-criteria-FX_UMBase-before-f4.png` | Criteria `FX_UMBase` | Positive-control criteria before F4 | The result |
| `t1-09-positive-control-FX_UMBase-after-f4-settled.png` | One row `FX_UMBase`; same values as baseline; no star; Save greyed | Retrieval works after the gate; placeholder removed silently | Database state; accessibility state of Check In |

## Limits

- Single session, Web Client UI only. No database read.
- Matching rule: plain `FX_UM` did not return `FX_UMBase`. Consistent with exact matching; not documented.
- Case variants were not typed (EXP-044 guard; inference only).
- Asterisk meaning (required versus override) is unresolved.
- Grid-header asterisks were not checked.
- The Site Developer context was not visible or verified.
- Tool-generated snapshot logs are under `evidence\playwright\` (not worker-authored; outside this directory).
