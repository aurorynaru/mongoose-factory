# EXP-037 — T2 read-only browser preflight notes

Date: 2026-10-10
Run: R-20261010-093704-fZNX · Cycle 1 · Task T2
Worker session: `739c57f6-5187-451a-a0b9-e0c67297eeb3` (task_message_id `2c29b65b-140e-4a20-9c2d-e31aa1a19c72`)
Scope of this task: preflight only. No Form was selected, opened, created, changed, saved, closed, or reopened. No event handler was inspected or configured. No preference was changed. No JavaScript was run by the worker.

## Result summary

| Check | Result | Evidence |
|---|---|---|
| Tabs at start | One tab: Web Client (`Mongoose`, portal URL). No Designer tab. | `p0-initial-tab-snapshot.md` (tab list) |
| Web Client identity | Signed in as `anton.ramos@3mworks.com.ph`; config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in or configuration prompt. | `p0-initial-tab-snapshot.md` (identity button, `f1e20`); `p1-webclient-initial-viewport.png` (identity bar visible at top right) |
| Web Client Form state at start | No Form open. Form area empty. Save disabled. No dialog, no banner. | `p1-webclient-initial-viewport.png` |
| Designer launch | One launch via the Web Client toolbar `Designer` control. A Designer tab opened (tab index 1). URL carries no `MGForm` parameter, so no Form loaded. | `p2-designer-launch-snapshot.md`; tab list after launch |
| Editing scope | "Identify Your Editing Scope" dialog showed Scope = User, User = `anton.ramos@3mworks.com.ph`. Confirmed once with OK. | `p2-scope-dialog-viewport.png` (dialog, pre-OK); `p3-designer-settled-snapshot.md` |
| Scope after confirmation | Status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `p3-designer-settled-snapshot.md` line 237; `p3-designer-settled-viewport.png` (status bar, bottom left) |
| Designer state after confirmation | No Form tab (tab list empty). No dialog. Save, Regenerate Form, Undo, Redo disabled. Canvas blank. Properties panel empty (Form tab selected). | `p3-designer-settled-snapshot.md`; `p3-designer-settled-viewport.png` |
| Target `FX_SingleButtonLab01` | **Not open.** No Form tab exists in the Designer. Not selected or opened (out of this task). | `p3-designer-settled-snapshot.md` (tablist `e240` contains no tab) |
| Designer console | 0 errors, 0 warnings (level `error` read after settle). No `ComponentFlags`-type error seen in the snapshot or console. | Console read after settle |
| Blocking condition | None observed. | — |

## Designer tab and window identity

- Designer tab title: `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`.
- Designer URL host: `mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx` (no `MGForm` parameter).
- Portal footer: `2026.10.01`. Same as the EXP-036-R2 record. The Mongoose build itself was not read (Help → About not opened; not required by this task).

## Visible-state observations

- `p1-webclient-initial-viewport.png` (viewed): Web Client, Explorer tree with four collapsed roots (My Folders, Master Explorer, Public Folders, User Folders). Identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No Form open. Shows: the Web Client is usable and no Form is loaded in it. Does **not** show: Designer state.
- `p2-scope-dialog-viewport.png` (viewed): Designer canvas behind the "Identify Your Editing Scope" dialog. Scope combobox `User`; User combobox `anton.ramos@3mworks.com.ph`; OK / Cancel / Help. Status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. Shows: scope choice before confirmation. Does **not** show: the Designer after confirmation, or any Form.
- `p3-designer-settled-viewport.png` (viewed): Designer after OK. Blank canvas. Properties panel empty. Toolbar Save and Regenerate greyed. Status bar User scope. Shows: a clean, Form-less Designer in User scope. Does **not** show: the existence or absence of `FX_SingleButtonLab01` in the database (only that it is not open in this Designer).

## Recovery allowance

- Fresh untargeted snapshot used for recovery: **0 of 1**.
- Corrected visible inspection used for recovery: **0 of 1**.
- Untargeted snapshots taken as planned reads: `p0` (initial tab), `p2` (after launch, to confirm the Designer tab and scope dialog), `p3` (settled Designer). These were planned state reads, not recovery reads. No `Ref ... not found` error occurred.

## Counts (T2)

| Item | Count |
|---|---|
| Designer launch | 1 (cumulative: 1 of 1 for this experiment) |
| Scope dialog OK | 1 |
| Form open or select | 0 |
| Form create | 0 |
| Component placement | 0 |
| Property edit | 0 |
| Event-handler inspection or configuration | 0 |
| Save | 0 |
| Regenerate | 0 |
| Close | 0 |
| Reopen | 0 |
| Preference change | 0 |
| Tab select | 1 (tab 1, Designer; browser navigation only) |
| Dialog dismissals other than scope OK | 0 |
| Browser JavaScript authored by worker | 0 |
| Authentication or reauthentication | 0 |
| Cold `MGForm` URL navigation | 0 |

## Tool-generated files (not worker-authored)

The browser tool writes `evidence/playwright/*` files for each call. Those are gitignored browser output, not worker-authored, and were not deleted. Each action result also shows a `Ran Playwright code` block generated by the tool wrapper; those blocks are the tool's own calls, not worker scripts.

## Stable state at end of T2

- Tab 0: Web Client, no dialog, no Form open. Not re-snapshotted after the Designer launch except as the planned read at `p2`.
- Tab 1: Designer (selected), clean, User scope, no Form tab, no dialog.
- No unsaved-change prompt. No browser-native dialog.

## Limits of this preflight

- Proves: a usable Designer in visible User scope; no blocking error at launch; no target Form open in the Designer; no inherited dialog.
- Does not prove: whether `FX_SingleButtonLab01` exists or is unambiguous (that needs the Select Form or recent-forms step in a later task); the Mongoose build; the Form's current version; Event Handlers or Primary-event state (not inspected, per instruction); durability.
- The Form menu's recent-forms list was not opened. It is the planned route for the next task.

## Next permitted action

A later, separately authorized task. Before any Form selection, start from a fresh snapshot of tab 1 (Designer, selected). The next step is to locate `FX_SingleButtonLab01` through a supported Designer path (the Form menu's recent-forms entry, or Web Client Select Form), verify Name, ScopeType=User, and ScopeName, and only then capture the Form-level baseline. Event Handlers and the Primary event remain uninspected until that task.
