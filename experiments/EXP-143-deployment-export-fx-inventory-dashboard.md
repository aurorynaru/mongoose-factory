# EXP-143: Deployment export of FX_InventoryDashboard (approved: export only)

Status: **blocked** at "list available forms". Nothing was saved, exported or imported. 2026-10-27, run directly in the session. Roadmap item C2.
Approval: the operator approved "Survey + export only" on 2026-10-27 (AskUserQuestion). Import/deploy is **not** approved.
Account: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (Web Client header in every screenshot).

## Steps
1. **Baseline** (`01-deployment-baseline.png`):
   - The Deployment form is still open from EXP-140, with the auto-started **unsaved** profile row `Deployment 1 of 1`.
   - Mode 2 is already selected: "Export using forms, selected items and referenced items".
   - Available Forms: Filter empty, Scope `Vendor`. Selected Forms is empty. Output is `Deployment.zip`.
2. Set Scope to **User** (combo options: Vendor / Site / Group / User), Filter `FX_Inventory`, then **Refresh** (`02-available-forms-user-scope.png`).
   - Result: the Inc/Form grid is **empty**. No dialog, no message. The status bar shows "Refresh (Deployment 1 of 1)".
3. Corrected attempt: Filter set to the exact name `FX_InventoryDashboard`, then Refresh (`03-available-forms-exact-name.png`).
   - Result: still **empty**. No dialog.
4. Stopped here, per the AGENTS.md rule of one inspection plus one corrected attempt.

## Blocker and hypotheses (none tested)
1. **The profile row must be filled in (or saved) first.** Profile Name*, Access As* and Object Prefix* are required and empty. Refresh may run against the saved profile.
   - Testing this means typing an FX_ profile name, perhaps saving it.
   - **A saved profile is a new row in a vendor table** (with an FX_ name). The operator needs to decide this.
2. **Filter syntax:** it may need a wildcard (`FX_%` or `FX_*`), or an empty filter with Scope User.
3. **User scope needs a scope name** (the user) that is not visible in this section. The upper part of the form, where the profile fields are, is scrolled out of view.
4. **Vendor-only listing** for this mode. To check: Scope Vendor with an empty filter. If that lists forms, then User scope is the problem.

The cheapest next probes, in order:
- (a) empty filter + Scope User → Refresh;
- (b) `FX_%` → Refresh;
- (c) Scope Vendor + `FX_%` → Refresh.

None of these saves anything. If all three are empty, the profile question (hypothesis 1) needs the operator.

## State left behind
- The Web Client Deployment tab is **still open** with its **unsaved** profile row. Scope is `User` and Filter is `FX_InventoryDashboard`. These are unsaved field changes on that row.
  - Closing the tab may now ask to save. Answer **No** (or Cancel), and read the button labels first.
- The Selected Forms "Load" / "Save" buttons, Create Scripts, Preview and Import were **not** clicked.

## Evidence (`evidence/EXP-143/`)
- `01-deployment-baseline.png`: mode 2 selected, empty lists, unsaved profile, account header.
- `02-available-forms-user-scope.png`: Scope User, Filter `FX_Inventory`, empty grid after Refresh.
- `03-available-forms-exact-name.png`: Filter `FX_InventoryDashboard`, empty grid after Refresh.

Knowledge state: **unverified** (the export has not run).
