# EXP-057 T2A — bounded Designer recovery of FX_Items and scoped-identity verification

Run `R-20261011-172309-X5Gt`, experiment EXP-057, cycle 1, task T2 (instruction T2A).
Worker session `8b6ccb93-3b57-4d03-84a4-906454d97512`; task_message_id `19f391fb-c0b4-4754-828c-b543ad5ffa50`.
Date: 2026-10-11. Browser tab 0 (Designer) only. Tab 1 (Web Client runtime) was not selected or touched.

**Outcome: observed success.** The saved FX_Items Form was opened in the Designer on the first recent-forms attempt. Identity (Name FX_Items, ScopeType User, ScopeName anton.ramos@3mworks.com.ph, Version `User version for user anton.ramos@3mworks.com.ph`) matches the EXP-056 saved baseline. Save is disabled. No error dialog. Recovery attempts used: 1 of 2 recent-forms attempts; 0 retries; 0 alternative Open-toolbar attempts.

## 1. Recovery route log

| Route | Step | Result | Retry count |
| --- | --- | --- | --- |
| Pre-check | Form tablist empty and no `FX_Items` text (read-only `browser_find` for "FX_Items" returned no matches) | Passed: no Form open before recovery | — |
| Recent-forms attempt 1 | Clicked the Designer `Form` menu button once (`e3`) | Menu opened | — |
| Recent-forms attempt 1 | Fresh menu snapshot `t2-snapshot-01`: recent-forms `FX_Items` menuitem present (`e296`, between separators, the only `FX_Items` entry) | Visible in snapshot | — |
| Recent-forms attempt 1 | Clicked the `FX_Items` menuitem (`e296`) once | **Succeeded**. No timeout. Tool-generated click line resolved the menuitem by its element id. | 0 |
| Verification | Fresh snapshot `t2-snapshot-02` and screenshot `t2-01` | FX_Items Form open; tab selected; footer scope User | — |

Retry: **not used** (attempt 1 succeeded). Alternative Designer Open toolbar and Select Form dialog: **not used**.

Note on URL: after the successful open, the Designer tab URL reads `.../designer/default.aspx?MGForm=FX_Items`. This is the Designer's own URL update after the native menu action. The worker did not type or navigate to any URL.

## 2. Identity and clean-state verification (`t2-snapshot-02`, `t2-01`)

| Check | Observed | Baseline (EXP-056) | Result |
| --- | --- | --- | --- |
| Form tab | One Form tab, selected, heading `FX_Items`, closable control `closable FX_Items` | One FX_Items Form | Match |
| Properties > Design > Name | `FX_Items` | Name `FX_Items` | Match |
| Properties > Design > Version | `User version for user anton.ramos@3mworks.com.ph` | `User version for user anton.ramos@3mworks.com.ph` | Match |
| Properties > Behavior > Initial Command | `Refresh` | `Refresh` | Match |
| Footer ScopeType / ScopeName | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | ScopeType User; ScopeName anton.ramos@3mworks.com.ph | Match |
| Save | `[disabled]` | Disabled after Save in EXP-056 | Match |
| Regenerate Form, Undo, Redo | `[disabled]` | Disabled | Match |
| Dialogs | None in the snapshot | None | Match |
| Designer console | 3 errors, 0 warnings (same count as the pre-menu state) | 3 errors (unchanged) | Count matches pre-menu; source not identified |

Limits of this check: the Name and Version come from the Designer's Form Properties Design node, read in the rendered snapshot. ScopeType and ScopeName come from the Designer footer, which is a Designer-level label. The brief forbids inspecting handlers, components, and Variables in this task, so none of those were read.

## 3. Screenshot and snapshot files

- `evidence/EXP-057/t2-snapshot-00-designer-fresh-pre-menu.md` — pre-menu Designer state (saved snapshot, depth-limited; Form tablist not shown at this depth; confirmed by the `FX_Items` find, which returned no matches).
- `evidence/EXP-057/t2-snapshot-01-form-menu-open-fresh-before-attempt-1.md` — fresh menu snapshot before the single recent-forms attempt; shows `FX_Items` menuitem `e296`.
- `evidence/EXP-057/t2-snapshot-02-after-recent-forms-attempt-1-identity-check.md` — post-open snapshot; Form tab, Name, Version, Initial Command, Save state, footer.
- `evidence/EXP-057/t2-01-designer-after-recent-forms-attempt-1-fx-items-opened.png` — viewport screenshot.

What `t2-01` shows: the FX_Items Form canvas (Item, Description, Cost, Unit of Measure fields; FX_Refresh button; one white rectangle to the right of FX_Refresh that was not inspected in T2A), Properties > Design with Name FX_Items, Version truncated on screen (`User version for us...`; full value in `t2-snapshot-02`), Initial Command `Refresh`, greyed Save icon, footer `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. It does not prove the handler, the component list, or the Variables state (not inspected by instruction). It does not prove any saved state beyond this session.

## 4. Counts (T2A)

- Tab lists: 1 (before the first select). Tab selects: 1 (tab 0; succeeded).
- Snapshots (saved): 3 (`t2-snapshot-00`, `-01`, `-02`). Tool-generated snapshot files also written: `evidence/playwright/page-2026-10-11T09-25-48-885Z.yml` (menu open) and `page-2026-10-11T09-25-58-523Z.yml` (after the click).
- Read-only `browser_find` calls: 2 (`FX_Items` pre-check; `FX_Items` after the menu opened).
- Screenshots: 1 (`t2-01`).
- Clicks: 2 (Form menu button, 1 successful; recent-forms FX_Items menuitem, 1 successful). Timeouts: 0.
- Recent-forms attempts: 1 of 2 allowed (no retry needed). Alternative Open-toolbar attempts: 0 of 1 allowed.
- Browser-reference errors: 0. Fresh recovery snapshots used: 0.
- Typing 0; key presses 0; Designer Save 0; Regenerate 0; Undo/Redo 0; Form close 0; Variables tab 0; handler, component, and Variables inspection 0 (reserved for the next task); FX_Refresh 0; runtime tab interaction 0; diagnostics, preferences, FormSync, cache, SQL, scripts, reauthentication 0.

## 5. Acceptance (T2A scope)

| AC | Status | Basis |
| --- | --- | --- |
| AC-1 Preflight (T1) | Supported with limits (see T1 report) | `evidence/EXP-057/T1-preflight-report.md` |
| AC-2 Exactly one FX_Items Designer Form opened through the authorized native recovery; routes, results, retry counts recorded; identity Name, ScopeType User, ScopeName match baseline; Save disabled; no error dialog | **Supported (observed, single session)** | Sections 1–3; `t2-snapshot-01`, `-02`, `t2-01`. Route: recent-forms attempt 1; retries 0; alternative 0. |
| AC-3 Handler inspection | **Not tested in T2A** (reserved by instruction) | — |
| AC-4 Component inventory and Edit properties | **Not tested in T2A** (reserved by instruction) | — |
| AC-5 Variables tab inspection for FX_VarTest | **Not tested in T2A** (reserved by instruction) | — |
| AC-6 to AC-11 | **Not tested** | Later tasks. |

## 6. Limits

- The recovery is one session's observation. No cross-session, cache, or database persistence is claimed.
- The Designer footer ScopeName is a Designer-level label; the Form-level identity is the Properties > Design Name and Version. Both match, but the brief's ScopeType and ScopeName evidence comes from the footer.
- The "Version" value was read from the accessibility snapshot. The on-screen Version is truncated in the screenshot.
- The recent-forms click was a single successful attempt. Why the EXP-056 T9 attempt failed (menu item not visible) was not established, and this success does not explain it.

## 7. Blockers

None. Recovery succeeded; no stop condition was triggered.

## 8. Next permitted action (not started)

The next bounded task (not this one): handler inspection (Initial Command, one StdFormRefreshCompleted group, sequence 0 Prompt, sequence 1 Set Values), component inventory and FX_VarTestEdit properties, and the Variables tab check for FX_VarTest. The browser is left on the FX_Items Designer Form with no dialog open.
