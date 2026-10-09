# EXP-033-R4 T1 (attempt 2) — read-only browser preflight

Worker session UUID: `66e4d74e-ce8b-4646-b9f9-01fbca90a469` (recorded in the experiment record before any browser interaction; distinct from EXP-033 `ses_ee9768333ffeV8zFkrUtEv19U6`, R2 `ses_ee9545a81ffevGqiS17Iix5jM8`, R3 `60cc08ec-01c4-41cc-9294-26f32bee888e`).

Actions this task (browser): `browser_tabs list` (1), fresh untargeted `browser_snapshot` (1), viewport screenshot (1). No clicks, key presses, navigation, or filter changes.

## Browser context

- MCP tab list: exactly ONE browser tab (index 0, current): `Mongoose`, URL `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/c51080bc-3191-4598-9894-39e1b84f8e87` (no `favoriteContext` query now).
- There is NO separate Designer browser tab (EXP-033 had a second tab at `&MGForm=FX_ComponentRecoveryLab03`). Observed difference from EXP-033's final state; not acted on (launching a Designer/navigating is out of scope).
- Portal tab strip inside the page lists two portal tabs: `System Administrator` and `Mongoose` (selected). The System Administrator tab was not inspected or touched.
- Active iframe = Web Client. Identity bar button: `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; `DEM` badge.

## Usability

Web Client is authenticated and already usable: identity bar present, no login/sign-in UI in the snapshot, toolbar `Open` enabled (Designer buttons present). No authentication or session-establishment action was taken or needed.

## Select Form state

Select Form is CLOSED: the untargeted snapshot (whole page incl. iframe subtree) contains no dialog/"Select Form" node. Therefore no inherited filter text / Filter By / Case Sensitive / Starts With / rows exist to record. The one permitted initial ordinary Open is UNUSED (1 remaining for a later task). T1 did not open it.

## Visibly inherited Forms/Designer state

- No Form panel selected: main content area (`main` f1e76) is empty; no `FX_ComponentRecoveryLab03` panel heading or Close Panel control (EXP-033 final state had the Lab03 panel). Explorer tree collapsed: My Folders, Master Explorer, Public Folders, User Folders.
- Toolbar: Open enabled; Save/New/Delete/Refresh/FiP/Get More Rows/System Notes/Documents/Email/Export disabled; Help Current Form disabled.
- No unsaved-change or browser-native dialog visible.

## Evidence files

- `evidence/EXP-033-R4/t1-01-fresh-snapshot-untargeted.md` — full untargeted accessibility snapshot (tab strip, iframe Web Client banner/toolbar/Explorer, empty main, Smart Panel).
- `evidence/EXP-033-R4/t1-01-preflight-viewport.png` — inspected: full viewport; portal top bar with `System Administrator` and `Mongoose` tabs, DEM badge; Web Client menu bar (Explorer/Form/Edit/View/Window/Help), identity text top right, toolbar icons (Open enabled, others greyed), Explorer tree with four collapsed folders, large empty content area, NO dialog. Proves: authenticated usable Web Client, Select Form closed, no Form panel open. Does NOT prove: Designer state (no Designer tab visible/enumerated), filter values, or anything about the System Administrator tab.

## Allowance accounting

Fresh untargeted snapshot used as the PLANNED preflight snapshot (not recovery). Ambiguity recovery: fresh-snapshot 0/1 used, corrected-inspection 0/1 used (remaining 1 + 1). Initial Open 0/1 used. Final Cancel 0/1 used. Reopens 0.

## Repository paths written

`experiments/EXP-033-R4-clean-replay-select-form-native-keyboard-filter-re.md`, `evidence/EXP-033-R4/t1-preflight-notes.md`, `evidence/EXP-033-R4/t1-01-fresh-snapshot-untargeted.md`, `evidence/EXP-033-R4/t1-01-preflight-viewport.png`.
