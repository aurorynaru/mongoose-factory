# EXP-134 T2 checkpoint (bounded session recovery and live Designer verification)

Run R-20261026-031627-MXfT · cycle 2 · task T2 · worker session 3d4d8de6-36ed-4e0e-9c78-26dd5d7345dd · task_message_id 553d1b56-253f-41ae-adc0-efb1a6327910.

## Result

- **Session re-established: YES** (no sign-in form was needed; the portal opened authenticated and the Web Client loaded).
- **Web Client identity and configuration: observed.** Header reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (`t2-02`).
- **Live Designer: observed.** A new Designer tab (index 3) opened from the Web Client split control. Its footer reads `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` (`t2-05`).
- **Designer liveness: observed.** The Edit menu opened with its full item list and no server-event error (`t2-06`). The menu was closed by a second click on Edit; no menu item was selected (`t2-07`).
- **Absence gates and project gate: NOT re-run in T2** (per the bounded instruction; left for T3).
- **Mutation: none.** No wizard, Finish, Save, New, Delete, check-in, Create Form response, Form open, record, metadata or script action.

## Actions (in order)

1. Tab list; selected tab 2 (Web Client); one fresh snapshot. A **Session Expired** alertdialog was present (OK ref `f1e204`).
2. Clicked the modal OK **once**. The click returned without the T1 timeout. A fresh snapshot showed the modal closed, no sign-in form in tab 2, and an empty Explorer (no Form open). Screenshot `t2-01`.
3. No sign-in form appeared, so navigated tab 2 **once** to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (the authorised step). The navigation first raised a browser `beforeunload` "leave page" dialog; accepted once so the authorised navigation could proceed. No Mongoose form held saved work (the T1 Sql Tables add-mode placeholder was already treated as lost).
4. The portal loaded as "Infor OS Portal", then "System Administrator", without a sign-in form (no CloudIdentities page, so no credential was typed). A portal notification banner (DistributionIFSContactUs) was dismissed **once** with its own × button; its message and links were not acted on.
5. Opened the navigation menu (portal top bar), typed `Mongoose` into the menu search box (portal search, not a Mongoose artifact), and clicked the single result `Mongoose` (Mongoose OS).
6. Waited for the Web Client to load. Snapshot and screenshot `t2-02`: identity bar and configuration as above; no sign-in or configuration prompt.
7. Hovered toolbar element `f3e36`. **Mistake (no effect):** its tooltip read "Runtime Builder..." (`t2-03`); that element is the wrench, not Designer. Nothing was clicked.
8. Re-identified the control from the bounding-box snapshot (`boxes=true`): the Designer icon sits at x≈725. Hover tooltip: **"Open designer in a new window"** (`t2-04`), matching the split control named in EXP-040 and in T1.
9. Clicked that Designer split control **once**. A new Designer tab (index 3) opened. No Session Expired modal followed this time.
10. Selected tab 3 after a tab list. Snapshot showed the Designer with an **Identify Your Editing Scope** dialog: Scope = User, User = `anton.ramos@3mworks.com.ph`. Clicked its OK **once**.
11. Fresh snapshot and screenshot `t2-05`: dialog closed; footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; Toolbox and Properties panels present; no Form loaded.
12. Liveness probe: `find` for "server event" returned no match. Clicked the Designer Edit menu once. Screenshot `t2-06`: menu open with items including Background Color, Component Class, Image, Property Class Extension, Script, Shortcut Menu, String, Theme, Validator, Variable, Web User Control Assets and Revert Global Object Definition. **None selected.**
13. Escape did **not** close the menu (the capture taken then showed it open). Closed it by clicking Edit again (`find` for the current ref first). Screenshot `t2-07`: menu closed; footer still User scope.

## Browser-action audit (T2)

| Operation | Count |
|---|---|
| Finish / wizard launch / wizard page actions | 0 / 0 / 0 |
| Create Form response | 0 |
| Save / New / Delete / Refresh / FiP toolbar clicks | 0 |
| Form opens (Select Form) | 0 |
| Designer Form selected or opened | 0 (Designer tab 3 has no Form loaded) |
| Check-in / check-out | 0 / 0 |
| Property Class lookup opened | 0 |
| Metadata unload / FormSync / deployment / generated script | 0 |
| Records created, edited or deleted | 0 |
| Designer menu items selected | 0 |
| Session Expired OK clicks | 1 (succeeded; first click of this task) |
| Authorised portal navigations | 1 (to the portal URL) |
| beforeunload dialogs accepted | 1 (for that navigation) |
| Portal banner dismissals (×) | 1 |
| Designer split control clicks | 1 (new Designer tab opened) |
| Designer scope dialog OK | 1 (User, anton.ramos@3mworks.com.ph) |
| Recovery snapshots/inspections (per-task allowance) | 0 used (no "Ref not found" error, no timeout in T2) |
| Browser JavaScript / evaluate / run-code / direct SQL / internal APIs | 0 worker-authored |
| Credentials typed or read | 0 |

## Evidence files (under `evidence/EXP-134/`)

| File | Shows | Does not prove |
|---|---|---|
| `t2-01-after-session-expired-ok-click.png` | Mongoose Explorer after the modal OK; no modal; no Form open | Session server-side health (only that no expiry dialog is shown) |
| `t2-02-webclient-recovered-identity-config.png` | Identity bar `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; no prompt | That the Designer is live (see t2-05/t2-06) |
| `t2-03-designer-split-button-hover.png` | Tooltip "Runtime Builder..." (wrong control hovered, no click) | Designer identity (this is a mistake capture) |
| `t2-04-designer-toolbar-hover-tooltip.png` | Tooltip "Open designer in a new window" over the icon at x≈725 | That a click opens a Designer (see t2-05) |
| `t2-05-new-designer-live-user-scope.png` | New Designer (no Form), Toolbox/Properties, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no dialog | Editing of any Form; the Form list |
| `t2-06-new-designer-edit-menu-probe.png` | Edit menu open with items; no server-event error | That any item works (none was selected) |
| `t2-07-designer-edit-menu-closed.png` | Menu closed by toggle; footer User scope | That the Escape attempt did nothing except leave the menu open (see note) |

**Note on `t2-07`:** the filename was reused. The first capture after the Escape key (menu still open) was overwritten by the post-toggle capture. The Escape non-effect is recorded here in text only.

Tool-written browser files under `evidence/playwright/` are tool output, not worker-authored.

## State at stop

- Tab 0: stale Designer (FX_LoginPortal, from before the expiry). Not touched in T2.
- Tab 1: `designer/default.aspx` (not inspected). Not touched in T2.
- Tab 2: Web Client, Mongoose Explorer, **no Form open**, no modal, no beforeunload pending.
- Tab 3: **new live Designer**, User scope, **no Form loaded**, no dialog open.

## Carried to T3 (bounded; not done here)

1. Re-observe both absence gates in this session (IDOs and Sql Tables exact-name queries: one criterion entry, F4, no FiP click; settled zero rows). The T1 results do not carry over.
2. Re-observe `FX_HelloWorldProject01` in IDO Projects (Access As `G6R`).
3. Only if both gates pass, proceed toward the wizard. The wizard must not be started in T2 or without the T3 gates.
4. The cause of the T1 session expiry, the T1 stale Designer and the T1 OK timeout remain **unresolved**. T2 saw no expiry after the split-button launch.

## Open items

- The T1 positive-control question (fresh Form open, not FiP) is still an operator decision.
