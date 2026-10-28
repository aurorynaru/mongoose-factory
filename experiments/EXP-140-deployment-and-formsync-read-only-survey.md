# EXP-140: Deployment and FormSync, read-only survey

Status: **complete** (read-only; nothing saved, run or created). 2026-10-27, run directly in the session (Playwright MCP). Roadmap item C1 (`docs/roadmap-unverified-areas.md`).
Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header, `evidence/EXP-140/01-deployment-form.png`).

## Objective
Record what the Deployment and FormSync forms offer in this cloud tenant before any export (C2) is attempted. Change nothing.

## Observations
### Deployment form (`Deployment`, opened via Web Client Open › Select Form, filter `Deploy`)
- **Opening the form auto-starts an empty new profile row** (`*1`, "Deployment 1 of 1"): the profile collection is empty, and the row was **not saved**.
  - The top grid shows the profile columns: Profile Name*, Access As*, Object Prefix*, Script Application Database, Include data, Script Forms Database, Script Objects Database.
  - This tenant's Access As defaults to **`G6R`**.
- Three export modes (radios). Selecting a mode is a field of the profile row.
  1. **Export using AccessAs and Object Prefix**: Profile Name, Access As (`G6R`), Object Prefix, Script Application/Forms/Objects Database (all checked), Include data (unchecked), Scope `Vendor`, Output `Deployment.zip`. Buttons: **Create Scripts**, View Log (`01-deployment-form.png`).
  2. **Export using forms, selected items and referenced items** (`02-deployment-forms-option.png`):
     - Available Forms: Filter, **Scope** (Vendor / Site / Group / User), Refresh, Inc/Form grid.
     - Selected Forms: "Include application data", grid I…/Name/Type/Scope.
     - Buttons: Reset, Select All, Deselect All, Remove selected, Load, Save.
     - Output `Deployment.zip`. Buttons: **Create Scripts**, View Log, **Preview**.
  3. **Export DataViews** (not opened).
- **Extension Bundle** section: an Extension Bundle combo, then Add To Bundle and View Bundle.
- **Deploy Applet** section: Source File ("No file loaded"), **Import**, "Convert to local Access As (G6R)", **Execute Scripts**, View Log. Import was **not** touched (not approved).
- Full page text: `deployment-page-snapshot.yml`.

### FormSync (`FormSync`; related forms FormSyncEventHandler, FormSyncLog, FormSyncScript also exist)
- It is a "FormSync Configurations" picker (`03-formsync-form.png`): **Source** and **Target** combos and three modes:
  - Separate source/target configurations;
  - Completion of automated upgrade/uplift (target only; replaces prompted customizations with base versions, with a backup);
  - Scan/fix forms and objects (consistency check, optional fixes).
- The Source list contains **only one configuration: `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`**.
  - Copying between configurations is therefore not possible in this tenant.
  - "Completion of upgrade" and "Scan/fix" would act on the live configuration, which is tenant-wide. Neither was run.
- Closed without OK.

## What this means for the roadmap
- **C2 export is feasible** with mode 2 and Scope **User**, because the FX_ forms are User versions.
  - Unknown: whether Create Scripts needs the profile row to be **saved** first. The profile row is a record in a vendor table, so a saved `FX_` profile would be a new non-FX_-table row with an FX_ name. Check at C2: try Preview / Create Scripts on the unsaved row first.
  - Unknown: how the zip reaches the browser (download or server path).
- **FormSync** offers nothing useful here except Scan/fix, and Scan/fix is tenant-wide. Recommendation: mark FormSync "not applicable in this tenant (single configuration)" and don't experiment further unless the operator wants a Scan (scan only, no fixes).

## Not done / not proven
- Nothing was run, saved or imported. The profile row was left unsaved in the open Deployment form for C2.
- Option 3 (Export DataViews) and the Extension Bundle combo contents were not inspected.

## Evidence (`evidence/EXP-140/`)
- `01-deployment-form.png`: Deployment, AccessAs mode, empty new profile row, account header visible.
- `02-deployment-forms-option.png`: the "forms, selected items and referenced items" mode.
- `03-formsync-form.png`: the FormSync Configurations picker.
- `deployment-page-snapshot.yml`: accessibility text of the Deployment form (AccessAs mode).

Knowledge state: **observed** (UI layout and options, one look).
