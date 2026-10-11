# EXP-052 T1 — Read-only preflight report (cycle 0)

Run `R-20261011-122156-AVGD`, task T1, worker session `80110901-51e5-401b-b67c-96501827c2d0`, task_message_id `2288da86-0585-40b7-b421-564b140eae73`. Date 2026-10-11. Configuration `G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Editing scope User (unchanged). Experiment record: `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`.

**Result: partial preflight. Stopped for coordinator review before the runtime baseline, as the T1 instruction required.** No state-changing action was taken.

## Tabs enumerated

| Index | Tab | Notes |
| --- | --- | --- |
| 0 | Infor Mongoose Application Development Framework (DEM), Web Designer at `/WSWebClient/designer/default.aspx` | Current at start. Selected again later for a read-only check. |
| 1 | Mongoose Web Client at the portal URL with `favoriteContext=FX_Items` | Selected for the runtime snapshot and screenshot, then the Designer tab was reselected. |

Tab selection is browser navigation only; the tabs were not closed, reloaded, or navigated.

## Web Client (tab 1) — inherited runtime state

Identity: portal tab `Mongoose`; identity bar `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. No sign-in, configuration, or session challenge. No portal notification banner in the snapshot. Console 0 errors, 2 warnings.

Runtime tab: `FX_Items`, selected (`f1e99`, `f1e100`; close control `Close Panel FX_Items`, `f1e101`). Form toolbar: Save disabled (`f1e28`); New, Delete, Refresh, FiP, System Notes, Documents, Send email, Export To Excel, Designer, Help Current Form enabled; Get More Rows disabled.

Grid (accessibility, row order as shown):
- Row 1: `dumbbell`, `45 pound iron`, `45.00`, `EA`
- Row 2: `eggs`, `cage free`, `6.99`, `DZ`
- Row 3: `guitar`, `natural acoustic`, `129.99`, `EA` (`[selected]`, current row)

Detail inputs: Item `guitar` (greyed key input), Description `natural acoustic`, Cost `129.99`, Unit of Measure combobox `EA` with `Open` trigger.
Status bar: `(Object 3 of 3)`.

Screenshot `evidence/EXP-052/t1-02-webclient-inherited-runtime-FX_Items-state-readonly.png` (viewed). Shows: DEM identity bar; FX_Items tab title; grid of three rows numbered 1–3 with no star or placeholder row; guitar as current; Item key greyed; Cost `129.99`; UM `EA`; status `(Object 3 of 3)` bottom left; Save greyed. Proves the runtime's visible state at T1. Does not prove how the rows were loaded (no load action was observed or inferred), and does not prove the User-scoped Form version.

Clean/dirty judgement: clean in appearance (Save disabled, no star, no dialog). It is **not** in the Add-mode baseline state the brief requires. Per the T1 instruction it was not closed or reopened.

## Designer (tab 0) — inherited state

Snapshot and screenshot `evidence/EXP-052/t1-03-designer-inherited-scope-dialog-no-form-tab.png` (viewed) show:
- Canvas blank; no Form tab visible above the canvas; Properties panel blank; Form tree blank.
- `find` for `FX_Items` in the Designer accessibility tree: no matches.
- Modal dialog `Identify Your Editing Scope`: Scope `User` (combobox); User `anton.ramos@3mworks.com.ph` (combobox); buttons OK, Cancel, Help. Left untouched.
- Toolbar: Save disabled, Undo disabled, Redo disabled.
- Status bar: `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`, `en-US`.

Proves: the scope dialog is open and preselects User with anton.ramos; the status bar shows User scope; no pending Designer change is visible (Save and Undo disabled).
Does not prove: the FX_Items Form's Name, its ScopeType/ScopeName as the Form's own version, or its Initial Command. No FX_Items Form is open in Designer, so the exact Form identity was not established in T1.

First Designer screenshot attempt timed out (`TimeoutError: browserBackend.callTool: Timeout 5000ms exceeded`, log: `taking page screenshot`, `waiting for fonts to load...`, `fonts loaded`). No file was written from that attempt. It succeeded after the Designer tab was reselected. One occurrence; not a ref failure.

## Gates and prerequisites

| Gate | Result |
| --- | --- |
| DEM configuration in Web Client and Designer | Established (identity bar; Designer title) |
| No sign-in, configuration, or session challenge | Established (none observed) |
| No portal notification banner requiring dismissal | Established (none present) |
| Exact FX_Items runtime Form (tab heading, favoriteContext) | Established as open runtime tab; User-scope version not visible |
| Designer identity Name=FX_Items, ScopeType=User, ScopeName=current user | **Not established.** ScopeType and ScopeName visible in status bar; Name not visible (no Form open; scope dialog modal) |
| Designer clean (no pending change) | Observed (Save and Undo disabled) |
| Initial Form property baseline (Initial Command) | **Not captured** (no Form open in Designer) |
| Runtime Add-mode baseline | **Not reached** (inherited runtime already loaded; close and reopen deferred) |

## Counts (T1)

- Browser tab selects 2 (to tab 1 and back to tab 0). Tab list 1.
- Snapshots 2 (Designer; Web Client). Screenshots 2 captured (`t1-02`, `t1-03`) plus 1 timed out.
- Find 1 (`FX_Items` in Designer; no matches).
- Clicks 0. Key presses 0. Typing 0. Form-field or combobox interactions 0.
- Refresh 0. F4 0. Filter-in-Place 0. Queries 0. Get More Rows 0.
- Save 0. New 0. Delete 0. Designer edits 0. Property-editor interactions 0.
- Runtime close 0. Runtime reopen 0. Designer Form open 0. Designer Form close 0.
- Scope-dialog interactions 0 (not dismissed, confirmed, or changed).
- Prompts or alerts answered 0. Portal banner dismissals 0.
- Ref-not-found 0. Timeouts 1 (Designer screenshot attempt 1).
- Repository reads: AGENTS.md; EXP-051 and EXP-050 records; EXP-042-R3 and EXP-046 records (targeted greps); `docs/mongoose/transcripts/hello-world-pt3.md`. `tools/` not read.

## Limits

- Single session, UI only. Identity judgments are from accessibility text and screenshots. No database read.
- The inherited runtime's loaded state is not explained by T1.
- The EXP-050 Designer tab set (`Property Classes`, `FX_Items`) is absent now; cause not established.
- The scope dialog was present before T1 and was not touched.

## Recommendation for the coordinator (for the next authorization)

1. **Designer phase, scope dialog.** Authorize resolving `Identify Your Editing Scope` with OK on the already-selected User scope (User unchanged), then open the existing FX_Items User-scoped Form via Designer's native Open/Select Form and verify Name, ScopeType, and ScopeName. T1 forbade this.
2. **Runtime baseline.** Authorize one clean close of the FX_Items runtime tab (own close control, only after confirming no star, no dialog, Save disabled) and one Open > Select Form reopen, then capture the Add-mode state before any query.
3. Both steps need explicit coordinator authorization; neither was taken in T1.

## Files written by the worker (T1)

- `experiments/EXP-052-hello-world-part-3-fx-items-runtime-filtering-and-.md`
- `evidence/EXP-052/T1-preflight-report.md` (this file)
- `evidence/EXP-052/t1-02-webclient-inherited-runtime-FX_Items-state-readonly.png`
- `evidence/EXP-052/t1-03-designer-inherited-scope-dialog-no-form-tab.png`

Tool-generated, not worker-authored: `evidence/playwright/` snapshot and console files written by the browser tool (including `evidence/playwright/console-2026-10-11T04-22-09-366Z.log`).
