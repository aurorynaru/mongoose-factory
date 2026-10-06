# EXP-024 — Additional Designer Launch From Unobstructed Web Client

Status: **T3 COMPLETE — the single permitted launch click DISPATCHED (no timeout, no interception — contrast with EXP-023). Mandatory final enumeration immediately after: still exactly two browser pages — NO distinct additional Designer client appeared; the retained original Designer remains the only Designer (no focus change on it either). Classification: ambiguous (dispatched click with tooltip "Open designer in a new window", no newly enumerated page). No further click authorized; no scope dialog appeared (none could — no new client). T1/T2 baselines and dialog close complete.**
Date: 2026-10-06 (Asia/Singapore)
Run: `R-20261006-153736-D83j` (cycle 2, task T1)
Mode: LEARNING MODE
Editing scope: User
Target: (none — EXP-024 T1 creates/modifies no artifact)
Evidence directory: `evidence/EXP-024/`

## Objective

Test whether, with **both** the authenticated Web Client and the original Web Designer retained, closing only the pre-existing Select Form inventory dialog (via its ordinary Cancel control) removes the `x-mask` pointer interception that blocked EXP-023's single launch activation, so that **one** native click on the Web Client Designer split button (`mgtoolbarbutton-1126`, the control correlated with the successful EXP-009/EXP-009-R2 launch route) produces a **distinct additional rendered Designer client** (vs focus/reuse vs blocked/error). A normal "Identify Your Editing Scope" → User confirmation in a newly rendered Designer is permitted solely to establish independently rendered Designer UI. No claims about distinct Portal/auth/IDO Runtime/Designer-backend/cache/database sessions.

## In scope (T1 only — executed)

- Read EXP-023, EXP-009, EXP-009-R2 for the prior launch route and inherited-state context (read-only; none modified).
- Read-only baseline enumeration of all browser pages/windows (URL/title, Web Client vs original Designer identification).
- Read-only capture of the original Designer's visible Form tabs, selected tab, dirty indicators, dialogs, and visibly displayed editing scope (no stored-version identity inferred from the scope bar).
- Read-only capture of the Web Client's rendered already-signed-in state and the pre-existing Select Form inventory dialog exactly as rendered.
- Write only this record and `evidence/EXP-024/`.

## Out of scope / prohibited (honored in T1)

Closing the Select Form dialog (deferred to T2); any Designer-launch click; any Form open/close/save/create/modify/delete; continuation of EXP-021-R4/EXP-022/EXP-023 artifacts; authentication of any kind; navigation/reload/direct URLs; preference/unload changes; Caption/Description/property investigation.

## Required reading (read-only; none modified)

- `experiments/EXP-023-additional-web-designer-launch-with-existing-client.md` — prior attempt: with the Select Form dialog **open**, the single permitted native click on `mgtoolbarbutton-1126` (accessibility ref `f14e39`) timed out (5000 ms) with `<div id="ext-element-41" class="x-mask x-border-box">` intercepting pointer events over the button; no new client rendered; one postcondition inspection + one corrected attempt reproduced the same interception; stopped per recovery rule. EXP-023 left all inherited state intact.
- `experiments/EXP-009-form-description-recovery-across-new-web-designer-.md` — launch route: Web Client **Designer split button** `mgtoolbarbutton-1126` (the second `Designer` toolbar button; the main button `mgtoolbarbutton-1125` leads to the Runtime Builder Selection flow — verified recipe pitfall). In EXP-009/R2 the launch was performed **after closing the old Designer tab**.
- `experiments/EXP-009-R2-clean-replay-form-description-recovery-across-new-.md` — `replay_verified` launch: split-button click → **new browser tab** at `WSWebClient/designer/Default.aspx` (no `MGForm`), "Identify Your Editing Scope" dialog (Scope combo value `3` = User) → OK → clean new Designer. New tab's URL carried the same `inforSessionId` suffix as the prior Designer — same authenticated Web Client session; only claim = new browser tab/client instance.

## T1 starting state / preflight facts (2026-10-06, inspected first; no login performed — session already authenticated)

- Environment: Mongoose Web Client / Designer 2026.09.08, Portal shell 2026.09.00, tenant `G6R8LJ9Q4E8C2Z8Y_DEM` (DEM badge), config group `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` (per `environments/current-environment.md` and live portal banner/badges).
- Browser: **exactly two tabs/windows** (tab list, inspected first):
  - **Tab 0 — retained Web Client (portal shell):** `https://mingle-portal.se1.inforcloudsuite.com/<tenant>/c51080bc-3191-4598-9894-39e1b84f8e87`, title `Mongoose`. Portal tabs: System Administrator, **Mongoose (selected)**. Signed-in: user badge `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT` rendered-visible top-right; DEM badge; **no login form / no credential or session-establishment UI anywhere** → no authentication blocker.
  - **Tab 1 — retained original Web Designer:** `mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/Default.aspx?…&inforSessionId=<tenant>~0a319988-7980-4412-943d-4397dcb07eca&MGForm=FX_StaticCaptionLab04`, title `Infor Mongoose Application Development Framework (G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT)`. Same Designer client context (session-id suffix) inherited through EXP-022 and EXP-021-R4 and observed in EXP-023.
- **Original Designer (Tab 1) read-only inspection:**
  - **Two Form tabs** — `FX_StaticNoColonLab01` (present, **unselected**, with its own closable control) and `FX_StaticCaptionLab04` (**selected**; three agreeing surfaces: tablist `[selected]`, URL `MGForm=FX_StaticCaptionLab04`, active tabpanel).
  - Component panel selected (Form/Component tablist: **Component** selected); component header `static1_USER (Static)`; property grid Design group: Name `static1_USER` (the EXP-021-R4 rename-blocker under-edit leftover — **not investigated, not touched**), Description empty, Caption empty, Type `Static`, From Device Master `True`; Appearance/Behavior groups visible (Foreground Color `#000000`, Justification `Right`, behavior flags `False`).
  - **Dirty indicators:** toolbar **Save enabled**, **Regenerate Form enabled**, Undo/Redo **disabled** — inherited dirty state from the EXP-021-R4 Static placement, unchanged since EXP-023.
  - **No dialogs open** in the Designer (accessibility snapshot shows no dialog/window nodes; Toolbox and Properties panels are panels, not dialogs).
  - **Displayed editing scope (status bar, read-only):** `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` rendered-visible bottom-left. No stored Form-version identity inferred from the scope bar.
- **Web Client (Tab 0) read-only inspection:**
  - Rendered already-signed-in active application state: portal banner, user badge, DEM badge, Web Client menu (Explorer/Form/Edit/View/Window/Help), Explorer panel (My/Master/Public/User Folders), **empty runtime Form area** (no rendered runtime Form tabs/content).
  - Web Client toolbar (accessibility): **Open enabled**; Save / New / Delete / Refresh / Filter in Place / Get More Rows / System Notes / Documents / Send email / Export To Excel / Help Current Form **disabled**; **two `Designer` buttons enabled** — split pair (`f14e36`/`f14e37`) and second pair (`f14e39`/`f14e40`); `f14e39` is the accessibility ref that resolved in EXP-023 to `div id="mgtoolbarbutton-1126" data-mgcompname="designerButton"` — the supported launch control per EXP-009/R2. Present and enabled in this baseline (identity re-confirmed by ref position/attributes in EXP-023; not re-resolved via DOM in T1).
  - **Pre-existing Select Form inventory dialog** (left open by EXP-021-R4), exactly as rendered: title `Select Form`; grid headers Caption / Name; **0 rows**; `Filter: FX_StaticCaptionLab04`; `Filter By: Name`; **Case Sensitive unchecked**; **Starts With unchecked**; buttons **OK / Cancel / Help**; plus a `Close Window` control at the dialog top-right. This is an inventory dialog, **not** an open/active runtime Form. **Preserved open — NOT closed in T1.**
- No `portal-notification` banner, no `Session Expired` alert, no credential/session-establishment UI → **no authentication blocker**.
- Repository: git repo; new in this run: this record + `evidence/EXP-024/`. No tracked file modified (`git status --porcelain`: only `?? evidence/EXP-024/`).

## T1 method (read-only only)

1. Read EXP-023, EXP-009, EXP-009-R2 records (above).
2. Browser tab list (read-only) → the two tabs above; identified Web Client (Tab 0) vs original Designer (Tab 1) by URL/title.
3. Web Client (active frame): full accessibility snapshot → toolbar enabled/disabled states, two enabled `Designer` buttons, Select Form dialog state, empty runtime area; screenshot `02`.
4. Switched the Playwright **active frame** to Tab 1 (tab select — no page reload/navigation) and took fresh Designer snapshots + screenshots `03` (inspected: both Form-tab headings, `FX_StaticCaptionLab04` selected, Toolbox tree, component grid, scope bar, toolbar); `snapshot-designer-page.txt` and `snapshot-designer-tabs-toolbar.txt` (accessibility: tablist with selected tab, Save/Regenerate enabled, Undo/Redo disabled, scope bar, component header/grid).
5. No dialog close, no click on any launch control, no Form open/close/save, no reload/navigation/authentication, no preference/unload action.

## T1 requirement-to-evidence mapping

| # | T1 requirement | Result | Evidence |
|---|---|---|---|
| 1 | Enumerate every browser page/window with URL/title; identify retained Web Client vs retained original Designer | **DONE** — exactly 2 tabs as above | tab-list outputs (recorded in this file); `02`, `03` |
| 2 | Original Designer: Form tabs, selected tab, dirty indicators, dialogs, displayed editing scope (no version identity inferred from scope bar) | **DONE** — 2 tabs, `FX_StaticCaptionLab04` selected, Save/Regenerate enabled (dirty), no dialogs, `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | `03`, `snapshot-designer-tabs-toolbar.txt`, `snapshot-designer-page.txt` |
| 3 | Web Client rendered already-signed-in active state, no credential/session UI | **DONE** — user badge + DEM badge rendered, no login form, empty runtime area | `02`, `snapshot-designer-tabs-toolbar.txt` (Web Client snapshot) |
| 4 | Pre-existing Select Form inventory dialog exactly as rendered | **DONE** — filter `FX_StaticCaptionLab04`, 0 rows, OK/Cancel/Help + Close Window, checkboxes unchecked, preserved open | `02`, Web Client snapshot lines 112–134 |
| 5 | No dialog close, no launch click, no Form/component mutation, no navigation/auth | **HONORED** — none performed | this file; browser state unchanged |

## Evidence (under `evidence/EXP-024/`)

- `02-webclient-signed-in-select-form-dialog.png` — inspected: Web Client portal top bar (System Administrator / Mongoose selected, DEM badge, user badge `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), Web Client menu/toolbar, Explorer panel, empty runtime area, Select Form dialog (Caption/Name headers, 0 rows, Filter `FX_StaticCaptionLab04`, Filter By Name, Case Sensitive/Starts With unchecked, OK/Cancel/Help, Close Window icon top-right). Proves: authenticated Web Client live, no credential UI, dialog preserved exactly as inherited. Does not prove toolbar enabled/disabled states (accessibility snapshot covers that) or absence of hidden state.
- `03-designer-original-tabs-scope.png` — inspected: Designer tab; Form tabs `FX_StaticNoColonLab01` (unselected) and `FX_StaticCaptionLab04` (selected, blue); Toolbox tree; component grid header `static1_USER (Static)` with Name `static1_USER`, Description/Caption empty, Type `Static`, From Device Master `True`, Foreground Color `#000000`, Justification `Right`, behavior flags `False`; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; toolbar buttons visible. Proves: original Designer visibly open, two Form tabs, selected Form, User scope rendered, inherited component state. Does not prove toolbar enabled/disabled states (accessibility file covers that) or any launch outcome.
- `snapshot-designer-tabs-toolbar.txt` — accessibility snapshot of the **Designer** page (Tab 1, active frame): Form-tab tablist (`FX_StaticNoColonLab01` unselected + `[selected] FX_StaticCaptionLab04`, each with closable control); toolbar Save (`e734`) / Regenerate Form (`e736`) present-enabled, Undo/Redo `[disabled]`; component header `static1_USER (Static)`; Design rows Name `static1_USER` / Description empty / Caption empty / Type `Static`; Form/Component tablist with Component selected; status bar `[ ScopeType: User / ScopeName: <masked-username> ]` (masked by the secrets layer; signed-in user per `environments/current-environment.md`); no dialog nodes.
- `snapshot-designer-page.txt` — earlier shallower (depth-limited) Designer accessibility snapshot; same tablist/scope facts, less detail; superseded by `snapshot-designer-tabs-toolbar.txt`.
- (The Web Client accessibility snapshot taken in T1 is the source of the toolbar/dialog lines quoted in this record; it was captured to the shared evidence stream — its key lines are reproduced verbatim in the "T1 starting state" section above.)

## Knowledge state (as of T1)

- Browser baseline: exactly two pages — retained authenticated Web Client (Tab 0) and retained original Designer (Tab 1, `MGForm=FX_StaticCaptionLab04`, session-id suffix `…0a319988-…`): **observed** (T1).
- Original Designer inherited state intact since EXP-023: two Form tabs, `FX_StaticCaptionLab04` selected, Save/Regenerate enabled (dirty), no dialogs, User scope rendered: **observed** (T1).
- Web Client rendered signed-in with no credential/session-establishment UI; runtime Form area empty; Select Form inventory dialog preserved open (filter `FX_StaticCaptionLab04`, 0 rows): **observed** (T1).
- Web Client toolbar: Open + two `Designer` buttons enabled, runtime-form indicators disabled; launch-control ref `f14e39` present (identity `mgtoolbarbutton-1126` per EXP-023's resolution): **observed** (T1, identity attribute re-confirmed in EXP-023, not re-resolved here).
- Additional-Designer-launch-from-unobstructed-Web-Client procedure: **unverified** — not yet tested (T1 is read-only preflight; dialog close and the single launch click deferred to T2).
- No claim of Caption recovery, distinct backend sessions, cache eviction, or `replay_verified` promotion.

## Acceptance criteria AC-1…AC-8 (final, reconciled at T4)

| # | Criterion | Status | Evidence |
|---|---|---|---|
| **AC-1** | Baseline recorded: all browser pages enumerated with URL/title; retained Web Client vs retained original Designer identified | **PASS** | T1 tab lists; `02`, `03`; T4 re-confirmation: `09-final-audit-webclient.png`, `10-final-audit-designer.png`, tab lists |
| **AC-2** | Original Designer baseline captured read-only: Form tabs, selected tab, dirty indicators, dialogs, displayed editing scope (no version identity inferred from scope bar alone) | **PASS** | `03`, `snapshot-designer-tabs-toolbar.txt` (T1); re-verified T2 `07`/`snapshot-designer-unchanged-after-close.txt` and T4 `10`/`snapshot-designer-final-audit.txt` |
| **AC-3** | Web Client rendered signed-in state + pre-existing Select Form inventory dialog captured; dialog closed exactly once via its ordinary **Cancel** control (ref `f14e422`), no other dialog closed | **PASS** | `02`, `05`, `snapshot-webclient-before-dialog-close.txt`; close via Cancel (T2.2); `06`, `snapshot-webclient-after-dialog-close.txt` |
| **AC-4** | **Exactly one native launch pointer invocation** on the second `Designer` split control (`f14e39`, EXP-009/R2-correlated); **no retry, no corrected click, no alternate activation/route** | **PASS** | T3.2: one Playwright click on `f14e39` (dispatched); no other Designer-control pointer action performed anywhere in T1–T4; `snapshot-webclient-prelaunch-fresh.txt`, `08` |
| **AC-5** | Mandatory final page/window enumeration immediately after the single attempt; observed result classified in the allowed categories | **PASS — classification (c) blocked/error/ambiguous**: the click dispatched (no timeout/interception/error) but the immediate final enumeration remained **exactly the same two pages** (retained Web Client + retained original Designer, identities unchanged); no distinct new Designer page and no observable focus/reuse; **no inference made** as to why (pending vs popup-block vs suppression left unresolved per instruction) | T3.3 tab lists; `08-after-launch-click-webclient.png`, `snapshot-webclient-post-launch-click.txt` |
| **AC-6** | Editing-scope interaction permitted **if and only if** a distinct new Designer renders the normal Identify Your Editing Scope dialog | **NOT TRIGGERED / conditionally satisfied**: no distinct new Designer was enumerated, therefore no scope dialog appeared and no scope interaction was performed or needed | T3.3/T3.4; `snapshot-webclient-post-launch-click.txt` (0 dialog nodes) |
| **AC-7** | No prohibited mutation: no Form open/close/save/create/modify/delete; neither retained client closed/reloaded/replaced; no navigation/direct URLs/synthetic activation; no authentication; no preference/unload action; only permitted mutation = the Select Form dialog Cancel | **PASS (honored)** | this record; browser state comparisons T1→T2→T3→T4 show inherited state intact |
| **AC-8** | Repository changes confined to the EXP-024 record + `evidence/EXP-024/`; no Mongoose artifact/recipe/environment/AGENTS/other-experiment changes caused by this run | **PASS** | T4 audit: `git status --porcelain` → only `?? evidence/EXP-024/` and `?? experiments/EXP-024-…md`; no tracked file modified; recipes/, environments/, AGENTS.md, other `experiments/EXP-*` files: 0 modified after 2026-10-01/06; `claims/` empty |

## T4 — Final read-only audit + repository audit (2026-10-06)

Coordinator instruction (T4): FINAL read-only audit only; launch budget exhausted — no further Designer-control click, no alternate route. Enumerate all pages/windows (URL/title, identify retained clients); capture Web Client rendered state; select the already-existing original Designer tab for read-only inspection only (tabs, selected tab/component state, dirty indicators, dialogs, displayed scope) and compare to the T1/T2 baseline; repository audit for EXP-024-attributable change confinement; reconcile AC-1…AC-8.

### T4.1 — Final browser audit (read-only)

- Tab list: **still exactly two pages** — Tab 0 retained Web Client (`mingle-portal…/c51080bc-…`, title `Mongoose`) and Tab 1 retained original Designer (URL unchanged: `…&MGForm=FX_StaticCaptionLab04`, session-id suffix `…0a319988-…`). No new page appeared since T3 (the launch action, if any was pending, had produced no page by audit time — recorded as a fact, no cause inferred).
- Web Client (Tab 0, active frame): screenshot `09-final-audit-webclient.png` (inspected: signed-in badges, menu/toolbar row, Explorer panel, empty runtime area, **no dialog**, no tooltip) + `snapshot-webclient-final-audit.txt` (no `dialog`/`ext-`/`mask`/`Select Form` nodes; toolbar: Open + two `Designer` buttons enabled, runtime indicators disabled — identical to the T2 post-close and T3 post-click snapshots).
- Original Designer (Tab 1, selected for inspection only — no reload/navigation): `snapshot-designer-final-audit.txt` + `10-final-audit-designer.png` (inspected): Form tabs `FX_StaticNoColonLab01` (unselected) + `FX_StaticCaptionLab04` (selected); component panel selected, header `static1_USER (Static)`, Name `static1_USER`, Caption/Description empty, Type `Static`, From Device Master `True`; toolbar Save/Regenerate Form present-enabled, Undo/Redo disabled (inherited dirty indicators); **no dialogs**; status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. **Identical to the T1/T2 baseline** — the single dispatched click and the dialog close left the Designer visibly unchanged.

### T4.2 — Repository audit

- `git status --porcelain`: **only** `?? evidence/EXP-024/` and `?? experiments/EXP-024-additional-designer-launch-from-unobstructed-web-c.md` — no tracked file modified, no other untracked paths.
- `git log`: HEAD `348c1ac` (Merge EXP-023 (blocked)) — no new commits by this run.
- mtime audit: 0 files under `recipes/` or `environments/` modified after 2026-10-01; 0 `experiments/EXP-*` files other than EXP-024 modified after 2026-10-06; `AGENTS.md` unmodified; `claims/` empty.
- **Conclusion:** EXP-024-attributable filesystem changes are confined to the record + `evidence/EXP-024/`.

### T4.3 — T4 evidence (under `evidence/EXP-024/`)

- `09-final-audit-webclient.png` — inspected: final Web Client rendered state (signed-in, no dialog, empty runtime area, toolbar visible). Proves: retained Web Client persists; no dialog/mask/toast present at audit time. Does not prove toolbar enabled/disabled detail (accessibility file covers).
- `snapshot-webclient-final-audit.txt` — accessibility: no dialog/Ext/mask nodes; toolbar states identical to T2/T3 snapshots.
- `10-final-audit-designer.png` — inspected: final Designer view — both Form tabs, `FX_StaticCaptionLab04` selected, `static1_USER` component grid state, scope bar, toolbar. Proves: retained original Designer persists with inherited visible state identical to T1/T2 baseline. Does not prove stored Form-version identity (not claimed).
- `snapshot-designer-final-audit.txt` — accessibility: same facts (tabs, Save/Regenerate present-enabled, Undo/Redo disabled, scope bar, no dialogs).

### T4.4 — Final knowledge state

- Authenticated two-page baseline, inherited Designer state, preserved dialog (T1): **observed**
- Ordinary Cancel close of the Select Form dialog; post-close unobstructed surface + enabled second `Designer` control (diagnostic ref `f14e39`): **observed**
- Single launch click dispatched without interception (EXP-023 blocker not reproduced); immediate and final enumerations both show **no distinct additional rendered Designer client** (still two pages), retained clients and inherited state unchanged: **observed**
- Cause of no-new-page (pending vs popup-block vs suppression): **unresolved** (not investigated, per instruction)
- Additional-Designer-launch-with-both-clients-retained procedure: **unverified** (attempt outcome classified (c) ambiguous; no `candidate_procedure` promotion; no `replay_verified`)
- No claim of distinct Portal/auth/IDO Runtime/Designer-backend/cache/database sessions; no persistence claim.

### T4 — Experiment ready for coordinator completion

Launch-action budget exhausted (exactly one attempt, accounted). All AC-1…AC-8 reconciled above. No further action authorized or needed in this experiment.

- **T3 outcome (ambiguous):** the single permitted click dispatched without interception but no new browser page appeared in the mandatory final enumeration. Unresolved: pending/suppressed/blocked-popup launch action vs route incapable of an additional client while both clients retained. No further click or alternate route authorized; experiment's launch accounting is complete.
- The tooltip "Open designer in a new window" (visible in `08`) is the control's own rendered label; it does not prove a page opened, and its absence from the accessibility tree is a capture limitation, not evidence of absence.
- Inherited state preserved intact and untouched throughout T1–T3: `FX_StaticNoColonLab01` (unselected), `FX_StaticCaptionLab04` (selected, dirty toolbar), component `static1_USER` leftover; the Select Form dialog was closed via Cancel as the deliberate EXP-024 changed starting condition (not restored).
- No blocker requiring authentication at any point.

## T3 — The single controlled launch attempt + mandatory final observation (2026-10-06)

Coordinator instruction (T3): exactly ONE native Playwright pointer-action invocation on the second rendered `Designer` split-button control (EXP-009/R2-correlated, shown enabled in T2) — the only launch attempt authorized for the whole experiment; immediately after, one read-only enumeration of ALL browser pages/windows with URL/title; classify (a) distinct new Designer page, (b) focus/reuse, or (c) blocked/error/ambiguous; scope confirmation only if a genuinely new Designer renders the normal editing-scope dialog; no second click under any outcome.

### T3.1 — Pre-click fresh inspection (read-only)

- Tab list: still exactly the two retained pages (Tab 0 Web Client, Tab 1 original Designer `…&MGForm=FX_StaticCaptionLab04`, session-id suffix `…0a319988-…`).
- Active frame switched to Tab 0 (tab select only). Fresh snapshot `snapshot-webclient-prelaunch-fresh.txt`: no dialog/mask nodes; toolbar Open + two `Designer` buttons enabled; second split control ref `f14e39` (inner `f14e40`) — same refs as the T2 post-close snapshot (stable across the fresh inspection).

### T3.2 — The single click attempt (dispatched)

- **One native Playwright pointer action** on ref `f14e39` (the second `Designer` split button; the tool resolved it via the Web Client iframe frame locator `getByLabel('Designer')`). **Result: the click DISPATCHED — no TimeoutError, no pointer-interception report, no error** (contrast EXP-023, where the same control timed out at 5000 ms with `ext-element-41` `x-mask` interception). The tool's post-action page snapshot shows the Web Client with a rendered **tooltip "Open designer in a new window"** hovering at the button position — the control's own hover tooltip, confirming the pointer reached the control.
- No second/corrected click performed or permitted.

### T3.3 — Mandatory final page/window enumeration (immediately after the click)

- **Tab list after the click: still exactly TWO pages** — Tab 0 Web Client (`mingle-portal…/c51080bc-…`, title `Mongoose`) and Tab 1 the **retained original Designer** (unchanged URL `…&MGForm=FX_StaticCaptionLab04`, same session-id suffix `…0a319988-…`). **No third/new page or window enumerated.**
- Rendered result captured: screenshot `08-after-launch-click-webclient.png` (inspected: Web Client with tooltip **"Open designer in a new window"** visible over the toolbar area; runtime Form area still empty; no dialog; badges intact) + fresh accessibility snapshot `snapshot-webclient-post-launch-click.txt` (toolbar unchanged: Open + two `Designer` buttons enabled, runtime indicators disabled; **0 `dialog` nodes** in the whole page; the tooltip text is not surfaced as an accessibility node — visible in the screenshot only).
- Retained original Designer (Tab 1) after the click: still present, URL unchanged (`MGForm=FX_StaticCaptionLab04`); no focus/activation change observable in the enumeration.

### T3.4 — Classification

- **(a) distinct additional rendered Designer client: NO** — the mandatory final enumeration shows no new page/window.
- **(b) focus/reuse of the existing Designer: not established** — the retained Designer's URL/identity is unchanged and no focus change is observable in the enumeration.
- **Classification: (c) ambiguous** — the click dispatched cleanly (unlike EXP-023's interception) and the control's own tooltip says "Open designer in a new window", but **no new browser page appeared** in the immediate final enumeration. Whether the launch action is still pending (popup-blocked, slow open, or silently suppressed) or the action simply did not open a page is **unresolved**; per the rules, no further click, no alternate route, no reload/navigation to resolve it. No editing-scope dialog appeared (no new client rendered), so the permitted User-scope confirmation was not applicable and was not performed.

### T3.5 — T3 evidence (under `evidence/EXP-024/`)

- `snapshot-webclient-prelaunch-fresh.txt` — accessibility before the click: no dialog/mask; `f14e39`/`f14e40` second `Designer` control enabled.
- `08-after-launch-click-webclient.png` — **decisive post-click capture**: inspected: tooltip "Open designer in a new window" at the toolbar, empty runtime area, no dialog, badges intact. Proves: the pointer reached the control (its hover tooltip rendered); no dialog/error toast; no rendered new-client UI in the Web Client frame. Does not prove whether a new page opened elsewhere or was suppressed.
- `snapshot-webclient-post-launch-click.txt` — accessibility after the click: toolbar states unchanged; 0 dialog nodes; tooltip text not surfaced in the accessibility tree (limitation).
- Tab-list outputs before/after the click (quoted in T3.1/T3.3): the authoritative browser-level enumeration — two pages before, two pages after, identical identities.

### T3.6 — T3 knowledge-state updates

- With the Select Form dialog closed, the launch control click **dispatches without interception** (EXP-023's `x-mask` blocker no longer reproduces): **observed**.
- That single dispatched click did **not** produce a distinct additional rendered Designer client in the immediate final enumeration (still two pages): **observed (no-new-client outcome for this attempt)**.
- Whether the route can ever create a distinct additional client while both clients are retained (pending-action vs suppression vs popup-block): **unresolved**; procedure remains **unverified**.
- No claim of distinct Portal/auth/IDO Runtime/Designer-backend/cache/database sessions; no persistence claim.

### T3 — Stopped here (single-attempt accounting complete)

One and only one launch click performed. Did not click again, did not use an alternate route, did not reload/navigate, did not close/reload either retained client, did not touch any Form/component, did not authenticate. **No further Designer-launch action is authorized in this experiment.**

## T2 — Close the inherited Select Form dialog + verify pre-launch state (2026-10-06)

Coordinator instruction (T2): confirm the same Select Form dialog is still rendered in the retained Web Client by one fresh visible inspection; close exactly that dialog via its ordinary Cancel/Close Window control; capture decisive evidence that (1) the dialog is no longer visible, (2) no dialog mask visibly obstructs the launch surface, (3) the second rendered `Designer` split control (EXP-009/R2 route) is present and enabled (ref/ID diagnostic only); read-only check that the retained original Designer still exists with inherited visible state unchanged from T1. No Designer-control click, no navigation/reload/direct URL, no Form mutation, no authentication.

### T2.1 — Fresh visible inspection before the close (PASS)

- Tab list: still exactly the two retained pages (Tab 0 Web Client, Tab 1 original Designer `…&MGForm=FX_StaticCaptionLab04`, session-id suffix `…0a319988-…`).
- Switched the Playwright active frame to Tab 0 (tab select; no reload/navigation). Fresh accessibility snapshot (`snapshot-webclient-before-dialog-close.txt`) + screenshot `05` (inspected): the **same Select Form dialog** still rendered — title `Select Form`, grid headers Caption/Name, 0 rows, Filter `FX_StaticCaptionLab04`, Filter By Name, Case Sensitive/Starts With unchecked, OK/**Cancel**/Help, Close Window icon top-right; user badge + DEM badge visible; toolbar Open + two `Designer` buttons enabled, runtime indicators disabled.

### T2.2 — Ordinary dialog close (the only permitted UI-dialog close)

- **Control used:** the dialog's ordinary **Cancel** button (accessibility ref `f14e422`, resolving via the Web Client iframe frame locator to the dialog's Cancel button) — native Playwright click. No synthetic activation, no Close Window alternative needed.
- Result: click dispatched without error; the tool's post-action snapshot showed the dialog gone.

### T2.3 — Post-close verification (decisive evidence)

- Screenshot `06-webclient-dialog-closed-launch-surface-clear.png` (inspected): Web Client rendered with **no Select Form dialog anywhere** — the entire runtime area is empty white space; portal top bar (System Administrator / Mongoose selected, DEM badge, user badge `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`), Explorer panel (My/Master/Public/User Folders), Web Client menu (Explorer/Form/Edit/View/Window/Help) and toolbar row intact. Nothing overlays the toolbar/launch surface.
- Fresh accessibility snapshot `snapshot-webclient-after-dialog-close.txt`: **no `dialog` node, no `Select Form`, no `Close Window`, no Cancel/OK/Help nodes remain**; whole-page search for `ext-`/`mask`/`window` nodes → **0 matches** (no Ext window/mask nodes in the accessibility tree). Toolbar: Open enabled; Save/New/Delete/Refresh/Filter in Place/Get More Rows/System Notes/Documents/Send email/Export To Excel/Help Current Form **disabled**; **second `Designer` split control present and enabled** — ref `f14e39` (inner `f14e40`), with the first split pair `f14e36`/`f14e37`; no `[disabled]` marker on either. Ref/ID recorded diagnostically only; `mgtoolbarbutton-1126` identity correlation established in EXP-023's resolution of `f14e39`, not re-resolved via DOM here and not treated as a product contract.
- Limitation: the accessibility tree cannot prove the absence of a transparent non-accessibility overlay; the rendered screenshot `06` shows the launch surface visibly unobstructed, and the EXP-023 `ext-element-41` `x-mask` interception is no longer reported by any node — final proof of unobstruction comes only from the T3 single click attempt itself.

### T2.4 — Retained original Designer read-only check (unchanged from T1)

- Tab 1 still present, same URL (`…&MGForm=FX_StaticCaptionLab04`, same session-id suffix). Fresh snapshot `snapshot-designer-unchanged-after-close.txt` + screenshot `07` (inspected): Form tabs `FX_StaticNoColonLab01` (unselected) + `FX_StaticCaptionLab04` (selected); component header `static1_USER (Static)`, Name `static1_USER`, Caption/Description empty, Type `Static`; Undo/Redo disabled (Save/Regenerate remain the inherited dirty indicators per the toolbar rows); status bar `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; no dialogs. Identical to the T1 baseline — the dialog close had no effect on the Designer.

### T2.5 — T2 evidence (under `evidence/EXP-024/`)

- `05-webclient-dialog-still-rendered.png` — inspected: the inherited Select Form dialog still rendered in the retained Web Client immediately before the close (filter, 0 rows, OK/Cancel/Help). Proves: same dialog present; supports the pre-close baseline.
- `06-webclient-dialog-closed-launch-surface-clear.png` — **decisive post-close capture**: inspected: Web Client with no dialog anywhere, empty runtime area, toolbar row fully visible/unobstructed, badges intact. Proves: dialog gone and launch surface visibly unobstructed in the rendered view. Does not prove toolbar enabled/disabled states (accessibility file covers) or absence of invisible overlays.
- `snapshot-webclient-before-dialog-close.txt` — accessibility: dialog node `Select Form` with Cancel `f14e422` + toolbar enabled/disabled states before the close.
- `snapshot-webclient-after-dialog-close.txt` — accessibility: no dialog/Ext/mask nodes; toolbar Open + two enabled `Designer` buttons (`f14e39`/`f14e40` second pair), runtime indicators disabled. Supports checks (1) dialog gone, (2) no mask nodes, (3) second Designer control present/enabled.
- `snapshot-designer-unchanged-after-close.txt`, `07-designer-unchanged-after-close.png` — Designer unchanged: two Form tabs, `FX_StaticCaptionLab04` selected, `static1_USER` component state, User scope bar, no dialogs.

### T2.6 — T2 knowledge-state updates

- The inherited Select Form inventory dialog closes cleanly via its ordinary **Cancel** control with no follow-up dialog/error: **observed** (T2).
- After that close, no Select Form dialog or Ext/mask node is present in the Web Client accessibility tree and the launch surface renders unobstructed; the second `Designer` split control (`f14e39`, EXP-023-correlated `mgtoolbarbutton-1126`) is present and enabled: **observed** (T2).
- Retained original Designer and Web Client both persist unchanged through the dialog close: **observed** (T2).
- Whether the single launch click on the unobstructed control now creates a distinct additional rendered Designer: **unresolved** — click deferred to T3 (prohibited in T2).

### T2 — Stopped here (per instruction: no Designer-control click in this task)

Did **not** click either Designer control; did **not** open/close/save/create/modify/delete any Form or component; did **not** navigate/reload/use direct URLs; did **not** authenticate; did **not** touch the retained Designer beyond read-only observation. **Next task (T3):** exactly one native click on the second `Designer` split control (`f14e39`), then immediate final page/window enumeration and result classification.

## T1 — Stopped here (read-only preflight only)

Did **not** close the Select Form dialog; did **not** click any launch control; did **not** open/close/save/create/modify/delete any Form or component; did **not** navigate/reload/use direct URLs; did **not** authenticate; did **not** touch EXP-021-R4/EXP-022/EXP-023 artifacts. **Next task (T2):** dialog close via Cancel → unobstructed-surface verification → exactly one native click on the Designer split button → immediate final page/window enumeration.

## Open questions / blockers

- **Ambiguous launch outcome (classified (c) at AC-5):** the single permitted click dispatched without interception, but the immediate final enumeration and the T4 audit enumeration both show exactly the same two pages — no distinct additional Designer client. Whether the launch action was pending, popup-blocked, or suppressed is **unresolved and not investigated** (prohibited); no further click or alternate route is authorized.
- The tooltip "Open designer in a new window" (`08`) is the control's own rendered hover label; it does not prove a page opened; its absence from the accessibility tree is a capture limitation, not evidence of absence.
- Inherited state preserved intact and untouched throughout T1–T4: `FX_StaticNoColonLab01` (unselected), `FX_StaticCaptionLab04` (selected, dirty toolbar), component `static1_USER` leftover; the Select Form dialog was closed via Cancel as the deliberate EXP-024 changed starting condition (not restored).
- No blocker requiring authentication at any point.
