# EXP-139 T2 — Session recovery (summary)

Task: T2, cycle 2, run R-20261027-014540-dC5I. Scope: session recovery only (no Form opened, no asset access, no fill, no Save, no runtime action).
Authority: operator's cycle-2 recovery authorization; `recipes/session/session-expiry-and-stale-designer.md`; standing session-expiry rule (2026-10-13).

## Starting conditions (operator-reported, not re-observed at start)

- Tab 1 was the expired Designer left on a Mongoose Sign In page by T1.
- Tab 0 was the retained Web Client / portal tab.

## Actions in order

1. `browser_tabs list` (read-only): tab 0 Mongoose portal; tab 1 Designer (`WSWebClient/Default.aspx?mode=designer`).
2. `browser_tabs select` tab 1; fresh snapshot and screenshot `t2-01` — Mongoose **Sign In** dialog, username field shows the account email, password empty, configuration empty, error "Invalid Configuration Name: G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT". No credential typed; the form was not interacted with.
3. `browser_tabs close` index 1 — **one** close of the expired Designer tab.
4. `browser_tabs select` tab 0; fresh snapshot; screenshot `t2-02` — portal tab showing FX_LoginPortal in the Mongoose frame, no sign-in form.
5. **One** top-level navigation of tab 0 to `https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/` (this is the recovery navigation; it is the only navigation of the task). A `beforeunload` "leave page" dialog appeared; accepted once (the Web Client had no unsaved state from this task).
6. Wait; snapshot — the portal loaded to the System Administrator workspace ("Welcome back, Anton"). **No Infor CloudIdentities sign-in form appeared, so no credential was entered in this task.**
7. One click on the DistributionIFSContactUs portal banner's own × (Close notification), per the standing banner rule. The banner's "here" link was not clicked.
8. Portal navigation: "Open navigation menu" (one click) → search box "Search this menu" → typed `Mongoose` (one fill) → find showed one result, "Mongoose OS" → one click on it. Screenshot `t2-03` shows the navigation drawer with the search box.
9. Mongoose opened in the portal tab. A **configuration** Sign In dialog appeared inside the Mongoose frame, combobox already showing `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (kept). One click on its Sign In button (per the recipe's "on a configuration Sign In keep the default configuration"). No credential typed.
10. Web Client loaded. Screenshot `t2-04`: header reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer with no Form open. (The accessibility snapshot masks the header username with the secret placeholder; the email is read from the screenshot.)
11. Find for the tooltip text failed (`Open designer` / `new window`: no accessibility match). Used EXP-012's identification: the second "Designer" toolbar button is the classic Designer launcher. Hovered it (`t2-05`): tooltip **"Open designer in a new window"** appears over the right-hand icon.
12. **One** click on that control. A new tab opened (tab 1, `WSWebClient/designer/Default.aspx`, title "Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)").
13. `browser_tabs select` tab 1; snapshot showed the "Identify Your Editing Scope" dialog pre-set to Scope **User**, user field matching the account.
14. **One** click on the dialog's OK (User scope retained). Screenshot `t2-06`: footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, no Form open, Save disabled, Toolbox and Properties panels, no dialog.

## Observations

- Recovery established: the portal session was live after the single top-level navigation (no CloudIdentities sign-in was required), the Mongoose configuration was G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT, and a fresh Designer opened with ScopeType User / ScopeName anton.ramos@3mworks.com.ph.
- Tab 0 (Web Client, Mongoose app) remains open with Explorer only; tab 1 is the fresh Designer with no Form open.
- Whether the operator-reported "server session expired" state exists is no longer relevant: the new Designer and Web Client both show valid identity and scope.

## Screenshots (what each proves / does not prove)

| File | Shows | Does NOT prove |
|---|---|---|
| `t2-01-designer-tab-b-before-close.png` | Expired Designer: Mongoose Sign In page, email in username field, invalid-configuration error | Anything about the account's session after close |
| `t2-02-portal-tab-a-before-navigate.png` | Retained portal tab with FX_LoginPortal in the Mongoose frame before the navigation | A valid session (it predates the recovery navigation) |
| `t2-03-portal-after-nav-menu-click.png` | Portal navigation drawer open with "Search this menu" and the Applications list | Mongoose launch |
| `t2-04-web-client-after-config-signin.png` | Web Client header `anton.ramos@3mworks.com.ph \| G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; Explorer; no Form open | Designer scope (that is `t2-06`) |
| `t2-05-web-client-designer-button-hover.png` | Tooltip "Open designer in a new window" over the right-hand Designer icon | That the click opened a classic Designer (that is `t2-06`) |
| `t2-06-fresh-designer-after-scope-ok.png` | Fresh Designer footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`; no Form open; Save disabled; no dialog | That FX_InventoryDashboard is open or its User version (not opened in T2) |

Tool-written snapshots and console logs under `evidence/playwright/` are not worker-authored (disclosed).

## Mutation / action ledger (T2 only)

- Designer tab closes: 1 (expired tab 1, closed once).
- Top-level portal navigations: 1 (the recovery navigation). No reloads.
- `beforeunload` dialog accepted: 1 (portal tab, from the recovery navigation).
- Portal banner dismissed: 1 (own ×).
- Portal navigation menu clicks / search fill / Mongoose OS launch: 1 / 1 / 1.
- Mongoose configuration Sign In clicks (default configuration kept): 1.
- Designer opened from Web Client ("Open designer in a new window"): 1.
- Scope dialog OK: 1 (User retained).
- Credentials typed: 0. Credential values read or recorded: 0. Browser JavaScript: 0.
- Form opened / Web User Control asset accessed: 0. Fills: 0. Designer Saves: 0. Cancel/OK on asset dialogs: 0. Runtime Refresh Data: 0. Filter clicks: 0. Runtime Saves: 0.
- Remaining mutation budgets (unchanged, unused): one full-content fill of the asset, one ordinary Designer Save, one runtime Refresh Data activation, at most one Needs reorder filter click.

## Limitations

- `deny_browser_javascript`: no tool in this environment sets or reads it (unverified, as in T1).
- The Designer was not used to open FX_InventoryDashboard; AC-1 is not evaluated in T2 and remains for a separate task.
- The portal's top-level navigation reached a valid session without a credential sign-in in this task; whether a later runtime portal reload requires credentials is not known from this task.
