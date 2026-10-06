# EXP-023 — Additional Web Designer Launch While Retaining Existing Client

Status: **BLOCKED at T1 — the single permitted Designer-launch activation did not complete (Playwright native click timed out with an `x-mask` overlay intercepting pointer events over the Designer split button; postcondition inspected once: no new client rendered). Preflight AC-1/AC-2 PASS. No further launch attempt permitted. No Mongoose artifact mutation, no authentication, no client closure, no Form open/close.**
Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-151910-W6Bn` (cycle 0, task T1)
Mode: LEARNING MODE
Editing scope: User
Target: (none — EXP-023 creates/modifies no artifact)
Evidence directory: `evidence/EXP-023/`

## Objective

Test one new capability only: whether exactly one activation of the supported Web Client Designer-launch UI route (the route established in EXP-009/EXP-009-R2) creates a **distinct additional rendered Web Designer client** while the **original Designer and the authenticated Web Client both remain open** and their inherited Form/dialog state is preserved. Establish a visible/browser client baseline, attempt that launch once, and distinguish a new rendered client from focusing/reusing the existing one. Normal User editing-scope confirmation in a newly created Designer is part of the launch procedure. This is a prerequisite observation for a possible later Caption experiment — **not** a Caption recovery or persistence test, and **not** proof of distinct backend sessions, cache eviction, or database access.

## In scope (executed)

- Read EXP-009 and EXP-009-R2 for the supported Web Client Designer-launch UI route; EXP-021-R4 and EXP-022 for inherited-state context (read-only; none modified).
- Read-only preflight: usable already-authenticated Web Client; visibly open original Designer with User editing scope; browser tab identities; Web Client rendered runtime state showing **no currently open/active Mongoose Form**.
- Record the original Designer's visible Form tabs, selected Form, dirty-state indicators and dialogs without changing them.
- Exactly one activation of the existing Web Client Designer-launch UI command (after preflight).
- Observe whether that one activation creates a distinct additional rendered Designer client or merely focuses/reuses the existing one; record an error or ambiguous result **without retrying**.
- Before/after screenshots and browser-client evidence under `evidence/EXP-023/`.
- Write only the new EXP-023 record and `evidence/EXP-023/`.

## Out of scope / prohibited (honored)

Form Caption/Description/component-property changes; creating/modifying/saving/deleting/renaming/opening/closing any Form or component (including `FX_`); continuation/retry/cleanup of EXP-021-R4 or EXP-022; closing the original Designer or replacing/restarting/closing the Web Client; repeating or substituting the launch route after focus/reuse/error/ambiguity; authentication/Sign In/session establishment; Regenerate, explicit unload, cache clearing, User Preferences changes; investigating No Colon or another prior experiment's unresolved property/editor; proving a distinct backend/Portal/Web Client/Designer backend/IDO Runtime session or internal object identity; JavaScript browser evaluation (denied tools); blind repetition of interrupted actions; credential exposure.

## Required reading (read-only; none modified)

- `experiments/EXP-009-form-description-recovery-across-new-web-designer-.md` — launch route: Web Client **Designer split button** `mgtoolbarbutton-1126` (the second `Designer` toolbar button; the main button `mgtoolbarbutton-1125` leads to the Runtime Builder Selection flow — verified recipe pitfall). In EXP-009/R2 the launch was performed **after closing the old Designer tab**; EXP-023 tests the distinct-additional-client variant with the original retained.
- `experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md` — replay-verified (`replay_verified`) launch: split-button click → new browser tab at `WSWebClient/designer/Default.aspx` (no `MGForm`), "Identify Your Editing Scope" dialog (User) → OK → clean new Designer.
- `experiments/EXP-021-R4-clean-replay-static-caption-recovery-across-ordina.md` — inherited-state context: `FX_StaticCaptionLab04` open **clean**; `FX_StaticNoColonLab01` open **dirty** (Save/Regenerate/Undo enabled); Select Form dialog left open with filter `FX_StaticCaptionLab04` (0 rows); rename blocker (not investigated here).
- `experiments/EXP-022-static-no-colon-recovery-across-ordinary-close-reo.md` — same inherited Designer context origin (EXP-022 left `FX_StaticNoColonLab01` open); No Colon absence on the rendered grid (not investigated here).

## Starting state / preflight facts (T1, 2026-10-06, inspected first; no login performed — session already authenticated)

- Environment: Mongoose Web Client / Designer 2026.09.08, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and live portal banner).
- Browser: **two tabs** — Tab 0: Mongoose portal with the Web Client iframe, signed in (user badge `<user> | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`); Tab 1 (current at start): Web Designer at `…designer/Default.aspx?…&MGForm=FX_StaticCaptionLab04`, session id `…0a319988-7980-4412-943d-4397dcb07eca` (the same Designer client context inherited through EXP-022 and EXP-021-R4).
- Original Designer (Tab 1) read-only inspection: **two Form tabs** — `FX_StaticNoColonLab01` (present, unselected) and `FX_StaticCaptionLab04` (**selected**; URL `MGForm=FX_StaticCaptionLab04`; three agreeing surfaces). Component panel selected; component header `static1_USER (Static)`; Name row `static1_USER` (under-edit leftover from the EXP-021-R4 rename blocker — **not investigated, not touched**); Caption row empty; Type `Static`; toolbar **dirty** (Save / Regenerate Form / Undo enabled, Redo disabled) — inherited dirty state from the EXP-021-R4 Static placement. Status bar rendered-visible: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. No dialogs open in the Designer.
- Web Client (Tab 0) read-only inspection: signed-in badge present; **no login form**; Web Client toolbar: **Open enabled; Save / New / Delete / Refresh / Filter in Place / Get More Rows / System Notes / Documents / Send email / Export To Excel / Help Current Form disabled**; **two `Designer` buttons enabled** (split pair `f14e36`/`f14e37` and `f14e39`/`f14e40`; the second pair is `mgtoolbarbutton-1126`, the supported launch control per EXP-009/R2). Runtime Form area (`main` region) **empty** — no rendered runtime Form tabs/content; the only visible window is the **Select Form inventory dialog** (left open by EXP-021-R4, filter `FX_StaticCaptionLab04`, Filter By Name, Case Sensitive and Starts With unchecked, 0 rows) — an inventory dialog, **not** an open/active runtime Form; preserved open throughout. No `portal-notification` banner, no `Session Expired` alert.
- Repository: git repo; new in this run: this record + `evidence/EXP-023/`. No tracked file modified.

## Preflight (AC-1/AC-2) — PASS

1. **AC-1 — authenticated Web Client with no currently open/active Form (PASS):** Tab 0 Web Client signed in (user badge rendered-visible; no login form anywhere); runtime Form area empty (no Form tabs/content rendered); toolbar Save/New/Delete/Refresh/Help Current Form **disabled** (runtime-form indicators); the only open window is the Select Form **inventory dialog** (preserved untouched). Evidence: `04-webclient-no-form-open-corrected.png` (inspected: portal tabs System Administrator / Mongoose selected, DEM badge, user badge top-right, Explorer panel, empty runtime area, Select Form dialog with filter `FX_StaticCaptionLab04` and OK/Cancel/Help); `snapshot-webclient-toolbar-enabledstate.txt` (accessibility: enabled/disabled states above); `snapshot-webclient-runtimeformtabs.txt` (whole-page search for runtime tablist/tab/`FX_` heading → only the portal shell's own Tabs tablist matches; Web Client runtime renders none).
2. **AC-2 — original Designer visibly open, User scope (PASS):** Tab 1 Designer with the two Form tabs above and status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` rendered-visible. Evidence: `01-preflight-designer-inherited-state.png` (inspected: both Form-tab headings, `FX_StaticCaptionLab04` selected, Toolbox tree, component grid with Name `static1_USER`/Caption empty/Type `Static`, scope bar bottom-left, toolbar buttons); `snapshot-designer-statusbar.txt`; `snapshot-designer-tabs-toolbar.txt` (accessibility: tablist with `FX_StaticNoColonLab01` and selected `FX_StaticCaptionLab04` + close controls; toolbar Save/Regenerate Form/New present).
3. Browser tab identities recorded before launch: exactly the two tabs above (tab list output).
4. No Form open/close, no dialog submission, no Save/discard, no client closure, no reload/navigation, no authentication, no preference/unload action performed in preflight.

## Launch attempt accounting (exactly one activation permitted)

- **Attempt 1 (the single permitted activation):** native Playwright click on the Web Client **Designer split button** (accessibility ref `f14e39`, resolving to `div id="mgtoolbarbutton-1126" data-mgcompname="designerButton"` — the correct supported control per EXP-009/R2). Result: **TimeoutError (5000 ms)**; Playwright call log shows the element visible/enabled/stable but `<div id="ext-element-41" class="x-mask x-border-box">` **intercepts pointer events** at the button position; Playwright's own click-retry loop found the same interception on every attempt and the action never dispatched.
- **Postcondition inspected once (no blind replay):** browser tab list — still **two tabs** (no new Designer tab rendered); Web Client screenshot `05-launch-attempt1-mask-interception.png` (inspected: identical to `04` — Select Form dialog still open with filter `FX_StaticCaptionLab04`, 0 rows, OK/Cancel/Help; toolbar unchanged) — the interception had **no effect**; the original Designer tab remains present and unchanged.
- **Corrected attempt (one, bounded):** fresh untargeted snapshot (refs current; `f14e39` still present) + one corrected click attempt on the same ref — **same TimeoutError with the same `ext-element-41` mask interception**. A CSS-selector click target (`div[id="mgtoolbarbutton-1126"]`) was rejected by the tool ("does not match any elements" — cross-iframe selector limitation), not a launch attempt.
- **Per the recovery rule (one fresh inspection + one corrected attempt, then blocker): the launch is BLOCKED.** No further click, no alternate launch route, no dialog manipulation (e.g., closing the Select Form dialog to remove the mask) was attempted — that would be a workaround beyond this bounded task.

## Post-launch comparison (as far as permitted)

Because the launch never activated, the comparison degenerates to: the original Designer (Tab 1) and the authenticated Web Client (Tab 0) remain present, and inherited visible state is unchanged — Form tabs `FX_StaticNoColonLab01` + `FX_StaticCaptionLab04` (selected), Designer dirty state (Save/Regenerate/Undo enabled) unchanged, Select Form dialog preserved (filter `FX_StaticCaptionLab04`, 0 rows), Web Client toolbar state unchanged. No inherited Form/dialog or dirty state was saved, discarded, closed, or otherwise changed.

## Evidence (under `evidence/EXP-023/`)

- `01-preflight-designer-inherited-state.png` — inspected: Designer tab; Form tabs `FX_StaticNoColonLab01` (unselected) and `FX_StaticCaptionLab04` (selected); Toolbox Framework Components tree; component grid header `static1_USER (Static)` with Name `static1_USER`, Description/Caption empty, Type `Static`, From Device Master `True`, Foreground Color `#000000`, Justification `Right`, Behavior flags `False`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar buttons visible. Proves: original Designer visibly open, two Form tabs, selected Form, User scope, inherited component state. Does not prove toolbar enabled/disabled states (accessibility evidence covers that) or any launch outcome.
- `02-preflight-webclient-no-form-open.png` — **defective capture**: taken while the Designer page was still the active frame; it duplicates `01` and shows the Designer, not the Web Client. Not used as Web Client evidence; superseded by `04`.
- `03-webclient-select-form-dialog-preserved.png` — Web Client page capture with the Select Form dialog preserved (filter `FX_StaticCaptionLab04`, 0 rows, OK/Cancel/Help visible). Supports dialog-preservation.
- `04-webclient-no-form-open-corrected.png` — **decisive AC-1 capture**: inspected: portal top bar (System Administrator / Mongoose selected, DEM badge, user badge `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), Web Client banner/toolbar, Explorer panel (My/Master/Public/User Folders), **empty runtime Form area**, Select Form dialog (Caption/Name headers, 0 rows, Filter `FX_StaticCaptionLab04`, Filter By Name, Case Sensitive/Starts With unchecked, OK/Cancel/Help). Proves: authenticated Web Client live, no currently open/active runtime Form, dialog preserved. Does not prove toolbar enabled/disabled states (accessibility file covers that) or absence of hidden state.
- `05-launch-attempt1-mask-interception.png` — inspected: identical Web Client view after the timed-out click attempt (dialog unchanged, no new client, no error toast). Proves: the launch attempt had no visible effect; supports the no-effect postcondition inspection.
- `snapshot-designer-statusbar.txt` — accessibility match: `[ ScopeType: User / ScopeName: <masked-username> ]` + `en-US` + "powered by Infor" (Designer status bar; ScopeName masked by the secrets layer in tool output; the signed-in user per `environments/current-environment.md`).
- `snapshot-designer-tabs-toolbar.txt` — accessibility: Designer Form-tab tablist (`FX_StaticNoColonLab01`, selected `FX_StaticCaptionLab04`, close controls) and toolbar (Save / Regenerate Form / New present; enabled-state detail recorded in the record text from the same fresh snapshot: Save/Regenerate/Undo enabled, Redo/align/align-family disabled).
- `snapshot-webclient-toolbar.txt` / `snapshot-webclient-toolbar-enabledstate.txt` — accessibility: Web Client toolbar enabled/disabled states (Open + two Designer buttons enabled; Save/New/Delete/Refresh/…/Help Current Form disabled) and the two `Designer` button pairs.
- `snapshot-webclient-runtimeformtabs.txt` — whole-page search `tablist|tab [|heading "FX_` in the Web Client page: only the portal shell's own Tabs tablist matches; the Web Client runtime renders no Form tabs.
- `snapshot-webclient-dialog-maskstate.txt` — accessibility: Select Form dialog state after the blocked attempt (Close Window, grid headers, Filter `FX_StaticCaptionLab04`, OK/Cancel/Help) — dialog preserved.

## Knowledge state (as of T1)

- Authenticated Web Client live and usable with **no currently open/active runtime Form** (rendered runtime area empty + toolbar indicators + dialog is an inventory dialog): **observed** (T1).
- Original Designer visibly open with two inherited Form tabs (`FX_StaticNoColonLab01`, selected `FX_StaticCaptionLab04`), User scope, inherited dirty state preserved: **observed** (T1).
- The Web Client Designer split button `mgtoolbarbutton-1126` is present and enabled (the supported launch control identity re-confirmed by accessibility attributes): **observed** (T1).
- **One activation of the launch control did not complete** in this browser state: the Select Form dialog's `x-mask` (`ext-element-41`) intercepts pointer events over the toolbar button; no new rendered Designer client appeared: **observed (failure mode)** — does not prove the route cannot create an additional client in other UI states; only that this single activation was intercepted.
- Additional-Designer-launch-with-existing-client procedure: **unverified / blocked** (launch never activated; no distinct-additional-client result established either way).
- No claim of Caption recovery, backend-session independence, or `replay_verified` promotion.

## Open questions / blockers

- **Blocker:** the single permitted launch activation timed out with `ext-element-41` (`x-mask`) pointer interception over `mgtoolbarbutton-1126` while the Select Form dialog was open. One postcondition inspection (tabs + screenshot) and one corrected click attempt (fresh snapshot) reproduced the same interception; per the recovery rule, stopped. No retry, no alternate route, no dialog manipulation.
- Unresolved: whether the supported route creates a distinct additional rendered Designer client while retaining the original — **not tested** (launch never activated). Whether the interception is caused by the open Select Form dialog's mask overlay covering the toolbar (plausible from the element id/class, unproven) is left open; a coordinator may authorize a follow-up task that first closes the inventory dialog (a permitted dialog close in a later experiment, not in this one).
- Inherited state preserved intact: `FX_StaticNoColonLab01` (dirty, unselected), `FX_StaticCaptionLab04` (selected, dirty toolbar), component `static1_USER` under-edit leftover, Select Form dialog open with filter — all untouched.
- Next permitted action: none in this task; report to coordinator and stop.
