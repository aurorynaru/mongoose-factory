# EXP-015 — T2 creation evidence: wizard path + exactly-one inventory

Date: 2026-10-03
Task: T2 (create exactly one User-scope classic BuildFromScratch Form `FX_FormVariableLab05`, Save Template unchecked)

## Creation path (verified create-basic-form recipe)

1. Designer (Tab 1) live, scope User (`[ ScopeType: User / ScopeName: <username> ]`), clean before mutation.
2. Designer toolbar **New** (`mgtoolbarbutton-1088`) → **Form Wizard Selection** dialog.
3. Radio **New Form** active; **Category = Classic** (combo `mginfoconexpandable-2062`, options: Classic, ExtDatasource, Flex, FormBuilder, IDS, NewData, REST); **Wizard = BuildFromScratch** (combo `mginfoconexpandable-2067`, options: BuildFromScratch, DetailOnly, GridOnly, MultiView, Query, Report, Tile). Set via `setValue`; confirmed visually (evidence `05`).
4. OK → **Form Wizard - Build From Scratch** (`expeditor-2093`).
5. Page 1: **Name = FX_FormVariableLab05** (combo `mgcombo-2100`), Form Type=BuildFromScratch, Form Layout=GridLeft, Device Type=Default, Data Source empty (evidence `06`).
6. Next → Page 2: **Save Template** checkbox (`ext-comp-2332`, `data-mgcompnamevalue="SaveTemplateCheckBox"`) was **checked** by default (evidence `07`); **unchecked** via `setRawValue(false)` + `render()`; `isChecked()=false`, DOM `aria-checked=false`, visually empty (evidence `08`).
7. **Finish** → form persisted immediately; Designer URL gained `&MGForm=FX_FormVariableLab05`; Designer clean (Save/Regenerate/Undo/Redo disabled) (evidence `09`).

## Post-creation identity / scope (Designer Properties panel)

- Name = `FX_FormVariableLab05`
- Version = `User version for user <username>` → intended User-scoped version
- Form Type = `Normal`
- Is Master = `True`
- Status bar = `[ ScopeType: User / ScopeName: <username> ]`

## Exactly-one inventory proof (Web Client Select Form, live)

- Surface: Web Client Select Form grid `grid-1136` (ExtJS store, client-side, `remoteTotal = 0`).
- Store record count: **651 → 652** (exactly one new record; no template artifact).
- Case-insensitive scan of every string field of every record for `fx_formvariablelab05`: **hitCount = 1** (exactly one).
- Target store index: **26**.
- Positive controls present: `FX_FormVariableLab02`, `FX_FormVariableLab03`, `FX_FormVariableLab04`, `UsersMaint`, `UsersMaintQuery`.
- The Select Form filter textbox/grid is virtualized and not live-filtered (known pitfall); the authoritative count is the store scan. Cancel was clicked to close the dialog without activating a row.

## Raw scan result (inline from Playwright evaluate)

```json
{
  "total": 652,
  "hitCount": 1,
  "neighbors": ["FX_FormVariableLab02","FX_FormVariableLab03","FX_FormVariableLab04","FX_FormVariableLab05","UsersMaint","UsersMaintQuery"]
}
```

## Prohibited-action audit (T2)

- No login / Sign In-OK / deliberate reauthentication / logout / browser restart / session replacement.
- No ordinary Designer Save (the wizard Finish intrinsically persists; no separate Save button clicked; Save remained disabled).
- No Regenerate Form / Save As / alternate save path.
- No close/reopen of the target Form.
- No cache/global-object/IDO-metadata action; no preferences change.
- No modification of any existing FX_ Form or non-FX_ artifact.
- No Form variable created (T2 stops at Form creation).
