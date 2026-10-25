# EXP-133 T11 — Operator-authorized session gate and Designer reload: STOPPED at Step 3 (2026-10-26)

Outcome: **STOPPED at the Step 3 URL gate.** Step 1 (acknowledgment) and Step 2 (Web Client account gate) passed. Step 3 could not be verified: the Designer tab's top-level URL does **not** contain `MGForm=FX_LoginPortal`, which the brief requires before any navigation. Per the brief ("If this cannot be verified, STOP rather than improvising navigation"), **no Designer reload was performed**. Steps 4, 5 and 6-readbacks were therefore not reached. No retained-definition verification was performed in T11.

Reading the recipe: `recipes/session/session-expiry-and-stale-designer.md` says the operator reloads a stale Designer tab manually. The Designer tab was not stale in the Session-Expired sense (no session-expiry text appeared), and the recipe's stale-Designer fix is an operator action, not a worker step.

## Step 1 — Acknowledge the T10 Error (observed)

- Tab list (read-only, first in T11), then tab select index 0 (Designer, `FX_LoginPortal`).
- Fresh untargeted snapshot before acting: `evidence/playwright/t11-step1-designer-fresh-snapshot.yml`. `alertdialog "Error"` present, text "The server event processing returned an error. If this persists, contact your system administrator.", OK `e625`. FX_LoginPortal selected. Save `[disabled]`. Scope User / anton.ramos@3mworks.com.ph. Console 4 errors / 0 warnings.
- One click on the dialog's OK (single acknowledgment; not Edit, not close).
- Snapshot after OK (auto-saved: `evidence/playwright/page-2026-10-25T16-43-13-847Z.yml`): no `alertdialog`. Save `[disabled]`. FX_LoginPortal selected. Scope unchanged. Visual C# present in Script Language grid. Console 4 errors / 0 warnings (no change).
- Screenshot `evidence/EXP-133/t11-01-after-t10-error-ok-designer-console-4.png` (viewed): no dialog; FX_LoginPortal selected; Save greyed; Script Language Visual C#; Components `Pane (00)` > `FX_LoginControl` UserControl (one row); footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Console baseline for the Designer: 4 errors = 2 "unload" permissions-policy entries + the T9 `Designer/Form/GenerateServerEvent` HTTP 400 + the T10 `Designer/DesignerSession/GetEditMenuState` HTTP 400. The console log `evidence/playwright/console-2026-10-25T16-43-03-795Z.log` is a session-wide history (it includes earlier token-refresh and bundle-load entries); its server-error lines are lines 5 and 7 only.

## Step 2 — Web Client session gate (observed)

- Tab select index 1 (Web Client, `Mongoose`). One fresh untargeted snapshot: `evidence/playwright/t11-step2-webclient-fresh-snapshot.yml`.
- No Session Expired, Logout Successful or Infor sign-in page text was found (grep for those phrases returned no match). No sign-in performed. **Authentication attempts: 0.**
- Authenticated header (accessibility name of the header button, read from snapshot line 54): `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Matches the required account and configuration.
- Screenshot `evidence/EXP-133/t11-02-web-client-account-config-gate-no-signin.png` (viewed): the Mongoose Explorer shows the header `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, a `DEM` badge, and no sign-in or session-expiry content. This proves the authenticated account/configuration in the Web Client. It does not prove the Designer's server-side state.
- Web Client console reading (its own tab, not compared with the Designer baseline): 3 errors / 10 warnings.

## Step 3 — Designer reload gate (NOT performed)

- Current top-level Designer URL (credentials, tenant and session tokens omitted): `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx?...` with query parameters `DeliveryType`, `LogicalId=lid://infor.mongoose.mongoose`, `configgroup`, `tenant_config_group`, and session/tenant tokens.
- **The URL contains no `MGForm` parameter** and no `FX_LoginPortal` identifier. A grep of the Designer snapshot for `MGForm` returned no match; `FX_LoginPortal` appears only in the tab heading, the Properties Name grid cell and the closable-tab label.
- The brief requires that the applicable saved Designer URL target `FX_LoginPortal` with `MGForm=FX_LoginPortal`, and says to stop if this cannot be verified. It could not be verified. **No navigation, reload or new Designer tab was made.**
- Designer reloads performed: **0**. Designer Save: **0**. Ordinary Form-tab close: **0**.
- Scope gate (Identify Your Editing Scope dialog): not reached (no reload).

## Steps 4–6 — not performed

- Step 4 post-reload identity and clean-state gates: not reached (no reload). The pre-reload Designer shows FX_LoginPortal, User scope, Visual C#, Save disabled and no dialog (client view, snapshot and `t11-01`), but these are not post-reload gates.
- Step 5 read-only retention verification (Components/Control URL/User Control Name, Variables tree, Form Script and Compile Result, FX_vLoginResult properties, both assets): **not performed**. Each remains pending. Opening Edit > Form Script was also not attempted: the Edit menu raised the server error in T10, and Step 5 is gated on Step 4.
- Step 6 evidence: the screenshots listed below are the only T11 captures.

## Session-recovery accounting (operator-authorized procedure)

- Session re-establishment: **not required**. No session-expiry or sign-in page appeared. Authentication attempts: **0**.
- Error dialog acknowledgments: **1** (the T10 Edit-click Error, OK once). No retries.
- Designer reloads: **0** (blocked by the URL gate).
- Recovery use beyond the Step 1 acknowledgment: **0**. Ref-not-found: 0. Browser JavaScript: 0.

## Action ledger (T11)

- Tab list 1 (start of task); tab select 2 (index 0 Designer, index 1 Web Client); fresh untargeted snapshots 2 (`t11-step1`, `t11-step2`); auto-snapshot after OK 1 (read via grep).
- Clicks 1 (OK on the T10 Error dialog). No other clicks.
- Screenshots 2 (`t11-01`, `t11-02`). Greps on saved snapshots 5. Reads of the recipe, the console log, snapshots and screenshots 5.
- Typed 0; key presses 0; browser JavaScript 0; run-code 0; reload/navigate 0.
- Mutations: Designer Save 0; close 0; reopen 0; Designer reload 0; runtime open 0; Sign in 0; source/asset/variable/component/Form Script edits 0; Regenerate Form 0; Delete Form Definition 0; metadata-cache action 0.

## Evidence files written by T11

- `evidence/EXP-133/T11-session-gate-designer-reload-stop.md` (this file).
- `evidence/EXP-133/t11-01-after-t10-error-ok-designer-console-4.png`: Designer after the OK (viewed). Proves the dialog is gone, Save is disabled and the Designer shows FX_LoginPortal in User scope with Visual C# and one FX_LoginControl. Does not prove server-side state or post-reload retention.
- `evidence/EXP-133/t11-02-web-client-account-config-gate-no-signin.png`: Web Client header account and configuration, no sign-in. Proves the authenticated account/configuration in the Web Client view; does not prove Designer server state.
- Experiment record: `experiments/EXP-133-minimal-fx-loginportal-with-client-validation-and-.md` (T11 section appended).
- Tool-written and disclosed, outside the evidence directory: `evidence/playwright/t11-step1-designer-fresh-snapshot.yml`, `evidence/playwright/t11-step2-webclient-fresh-snapshot.yml` (worker-named); `evidence/playwright/page-2026-10-25T16-43-13-847Z.yml` (auto-snapshot after OK); `evidence/playwright/console-2026-10-25T16-43-03-795Z.log` (session-wide console log).

## Acceptance (T11 view)

- AC-8: **not met**. The brief's Designer reload was not performed, so the saved definition's load from the server, retained metadata and generated variables were **not verified** in T11. The T9 close did not complete, and the operator's reload gate is not satisfied.
- AC-1 through AC-7 and AC-9 to AC-10: unchanged from earlier tasks. No new readback in T11 bears on them.
- AC-9 (runtime) and AC-10 (final manifest): not started.

## Knowledge state

- The T10 Edit-click server error is cleared client-side; its cause is **unresolved**. Whether the server-side Form state was altered by the T9/T10 events is **unresolved**.
- The Designer URL carries no `MGForm` parameter: **observed** (current tab). The brief's expected URL form was not confirmed.
- The authenticated Web Client account and configuration: **observed** (header, one run).
- Saved definition loaded from the server after reload: **not observed** (not performed).

## Open questions and blockers (operator disposition)

1. **Designer URL gate.** The brief expects `MGForm=FX_LoginPortal` in the saved Designer URL. The current tab URL has none. The operator should confirm the correct supported route to open FX_LoginPortal (for example, the Web Client recent-forms path) or authorize a specific navigation. The worker did not improvise.
2. **Whether the Designer tab should be reloaded at all.** The brief authorizes one top-level navigation to the saved URL only. Without a verified URL, no reload was made.
3. Steps 4–5 (identity gates, retention readbacks, Form Script/Compile Result, FX_vLoginResult properties, asset readbacks) remain pending until the Designer is reopened from the server-saved definition.
4. The Form Script Output/Errors diagnostics (AC-7) remain outstanding; the Edit menu failed in T10.
5. Generated UserCtrl variables after the reload remain unresolved.
6. Runtime and the additional final close/reopen remain separate tasks; none was performed.
