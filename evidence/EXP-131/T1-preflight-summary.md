# EXP-131 T1 preflight summary (2026-10-25)

Scope of this file: T1 preflight only. No Form, asset, UserControl or Form Script was created, saved or changed. The bridge test (T2 onward) has not started.

Harness header: `task=T1`, `run_id=R-20261025-203228-l0nq`, `experiment_id=EXP-131`, `cycle_id=0`, `worker_session_id=684c776d-3bb3-4e99-b492-e158ba32b737`.

## Gate results

| Check | Result | Evidence |
| --- | --- | --- |
| Live account identity (Web Client header) | `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` | `t1-05-web-client-fresh-snapshot.md` (header button text) |
| Live account identity (Designer status bar) | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `t1-15-designer-final-clean-snapshot.md`; `t1-16-designer-clean-user-scope.png` (status bar, bottom left) |
| Editing scope | User | Same as above |
| Clean Designer | No Form open (empty design surface, empty Properties), Save and Regenerate Form disabled, no dialog or menu open | `t1-15-designer-final-clean-snapshot.md`; `t1-16-designer-clean-user-scope.png` |
| Positive control (AC-1) | `FX_CustomerPortal` listed in the Select Form dialog (filter text `FX_CustomerPortal`, 2 gridcell nodes) | `t1-08-select-form-filter-fx-customerportal-after-key.md` |
| Negative check: MockLoginPortal (AC-1) | Filter `MockLoginPortal`: no row (filter text applied) | `t1-09-select-form-filter-mockloginportal.md` |
| Negative check: FX_InventoryPrototype01 (AC-1) | Filter `FX_InventoryPrototype01`: no row | `t1-10-select-form-filter-fx-inventoryprototype01.md` |
| Target Form absence: FX_BridgeTest (AC-1) | Filter `FX_Bridge` (prefix of FX_BridgeTest): no row | `t1-11-select-form-filter-fx-bridge-absence.md` |
| Target asset absence: FX_Bridge/index.html (AC-1) | Edit > Web User Control Assets > Global Objects > Web Assets, top level: `$app`, `mongoose`, `sohoComponents`, `sohoxi`. No `FX_` folder, so no `FX_Bridge` folder | `t1-14-web-user-control-assets-global-objects-dialog.md` |
| Console baseline | Web Client 3 errors / 10 warnings; Designer 2 errors / 0 warnings; unchanged at every reading in T1 | Snapshot footers in all `t1-*` files |
| Portal banner / session expiry / sign-in | None visible | `t1-01`, `t1-05` (no notification or sign-in node) |

Gate verdict: **all gates passed** as defined by the brief. The inventory check was done in the Select Form dialog from the Web Client toolbar; the Designer has no Select Form entry (EXP-128 P-1 precedent).

## Limitations

- The worker cannot confirm from the UI that this account is the operator's own account. The gate evidence (Hello World `FX_` Forms present, Mock and FX_InventoryPrototype01 absent) is consistent with the brief's definition, and the Mock-owner account in EXP-130 listed MockLoginPortal in its recent menu, which this account does not. The operator should confirm ownership.
- Empty filter results were read after an End keypress on the filter textbox. The same mechanism showed the positive control, so "no row" is recorded as absent in this inventory view, not as proof across all records.
- The Select Form filter textbox held `fx_item` from an earlier session when the dialog opened. The worker replaced that text with each gate string. It is dialog UI state only and was discarded by Cancel.
- Scope dialog: the Designer showed an "Identify Your Editing Scope" dialog on load, with Scope = User and User = `anton.ramos@3mworks.com.ph` already selected. The worker clicked OK once, as the basic-Form recipe prescribes. The status bar already read User before the click. Whether OK wrote any preference is not visible.
- Recent-menu entries (Designer Form menu) are not the full inventory and were not used as the gate.
- Screenshot: one (`t1-16`), Designer state only. It does not show the Select Form list or the account header.
