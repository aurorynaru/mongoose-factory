# EXP-056 T9 — one clean Designer close of FX_Items; recent-forms reopen FAILED (click timeout, no Form opened); STOPPED

Run R-20261011-163026-Hdng, experiment EXP-056, cycle 11, task T9.
Worker session `2ae6d626-d3d9-408b-84c0-bbafbacc71aa`; task_message_id `07bf3c9f-d66b-425b-9096-4847e4d9aec3`.
Date: 2026-10-11. Editing scope: User (`anton.ramos@3mworks.com.ph`). Target Form `FX_Items`.

**Outcome: the saved FX_Items Form was closed cleanly once. The one permitted recent-forms reopen failed: the click on the `FX_Items` menu item timed out at "element is not visible", the menu closed, and no Form opened (checked immediately and again after a 3-second wait). Per the brief, the reopen was not retried and no other navigation path was used. AC-8 is NOT established. AC-9 is NOT evaluable (no reopened Form is open to read the Variables collection). The Designer is on an empty canvas with Save disabled and no dialog. The Web Client runtime was not touched.**

## 1. Pre-close gate (passed)

- `browser_tabs list` (before any select) → tab 0 Designer, tab 1 Web Client. `browser_tabs select 0` succeeded.
- Fresh snapshot `t9-snapshot-00-fresh-designer-pre-close.md`: FX_Items heading and tab (`closable FX_Items`, ref `e247`); footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`; **Save disabled, Regenerate Form disabled, Undo disabled**; no dialog.
- Pre-close screenshot `t9-01-pre-close-clean-saved-form.png`: the saved FX_Items Form in the Designer, Save icon greyed, User footer.
- Pre-close handler and component state were not re-read in T9 (the brief's T9 recovery checks are post-reopen); the T8 post-Save readback is the last recorded state.

## 2. Designer close (one)

- Clicked the FX_Items Form tab's `closable FX_Items` control (`e247`) **once**.
- Immediate result (`t9-snapshot-01-immediately-after-close.md`): the Form tablist (`e244`) is empty; no FX_Items heading; no dialog; **Save disabled**. No unsaved-change prompt appeared.
- Result: **clean close, one close.**

## 3. Recent-forms reopen (attempted once; FAILED)

- Clicked the Designer `Form` menu button (`e3`) once. The menu opened (`t9-snapshot-02-form-menu-open.md`). Menu items: Definition; Sign Out; **FX_Items** (`e1655`, in the recent-forms slot between separators); Sql Tables; IDOs; Property Classes; Export/Import Strings; IDO Projects; FX_UMs; FX_HelloWorld01; Data Maintenance Wizard; Runtime Builder Selection. Exactly one FX_Items entry.
- Clicked the `FX_Items` menu item (`e1655`) **once**. Result: `TimeoutError ... element is not visible` after 5 s (the locator resolved to `<a role="menuitem" ... menuitem-1073-itemEl>`; retries reported "element is not visible").
- Immediately after (`t9-snapshot-03-after-recent-forms-reopen.md`): the menu is no longer present; no FX_Items heading; Form tablist empty; Save disabled; no dialog.
- After a 3-second read-only wait (`t9-snapshot-04-after-wait-delayed-reopen-check.md`): still no FX_Items heading, no Form tab, no dialog; Save disabled. Screenshot `t9-02-after-failed-reopen-click-no-form-open.png`: empty canvas, Toolbox and Properties panels, footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. **No Form is open.**
- Brief rule applied: "Do not retry reopening or use another navigation path if the prescribed reopen fails." Not retried. The browser-recovery allowance (one fresh snapshot, one corrected inspection) was not used for a ref-recovery; this was a visibility timeout, and the post-timeout snapshots are read-only checks.
- Interpretation (not proven): the menu item was not visible at the moment of the click (the menu may have closed or re-rendered before the click). The cause is not established.

## 4. AC-8 and AC-9 status

| Check | Status | Basis |
| --- | --- | --- |
| AC-8 reopen recovers identity (User, FX_Items) | **NOT established** | No reopened Form. Identity footer reads only the Designer chrome (User, anton.ramos@3mworks.com.ph), not a Form. |
| AC-8 original Prompt recovered | **NOT established** | Form not opened. |
| AC-8 sequence-1 Set Values recovered | **NOT established** | Form not opened. |
| AC-8 FX_VarTestEdit Binding recovered | **NOT established** | Form not opened. |
| AC-8 Save disabled after reopen | **NOT established** (Save is disabled on the empty Designer, but this is not a reopened-Form state) | — |
| AC-8 original components match T1 after reopen | **NOT established** | Form not opened. |
| AC-9 FX_VarTest visible in Variables after reopen | **NOT evaluable** | No Form open; the Details > Variables panel is not available. Not treated as a retention failure. |

## 5. Lifecycle budget accounting

- Designer Form closes: **1** (clean; no prompt).
- Recent-forms reopens: **0 completed**; **1 attempted** (click timeout; no Form opened).
- Designer Saves in T9: **0** (the single T8 Save is the only Save in the experiment).
- Regenerate Form: 0. Runtime open/close: 0. FX_RefreshButton clicks: 0.
- Lifecycle budget remaining for the reopen: the brief permits one reopen, which was attempted and failed without a confirmed side effect. A coordinator decision is needed before any further reopen attempt (see §7).

## 6. Action counts (T9)

- Tab lists 1; tab selects 1 (tab 0).
- Fresh snapshots (`t9-snapshot-00` … `-04`): 5.
- Screenshots: 3 (`t9-01`, `t9-02`; `t9-01` pre-close, `t9-02` post-failed-reopen). Count: 2 screenshot calls, 2 files.
- Clicks: 3 in total. Successful: 2 (closable FX_Items control, 1; Form menu button, 1). Errored: 1 (FX_Items menu item, timed out; no effect).
- Wait: 1 (3 seconds, read-only).
- Typing 0; key presses 0; hover 0; wheel 0.
- Components, variables, handlers, parameters changed: 0. Save 0. Regenerate 0. Runtime 0. FX_RefreshButton 0. Diagnostics, preferences, FormSync, cache, SQL, scripts, reauthentication: 0.
- Ref-not-found errors: 0.

## 7. Blocker and recommended next step (coordinator decision)

- **Blocker:** the one permitted recent-forms reopen did not open FX_Items. The Designer is open with no Form and no dialog. AC-8 and AC-9 cannot be evaluated until a Form is opened.
- **Options (not chosen by the worker):**
  1. A fresh bounded task may retry the single recent-forms reopen, after confirming the menu item is visible from a fresh snapshot. This is a coordinator decision because the brief permits one reopen and it was spent in T9.
  2. Accept AC-8 and AC-9 as not established for this run and stop the lifecycle here (the saved state is documented in T8).
- No corrective action was taken. Save was not retried. The Form was not recreated. The variable definition was not touched.

## 8. Evidence files (T9)

- `T9-report.md` (this report).
- Screenshots (`evidence/EXP-056/`):
  - `t9-01-pre-close-clean-saved-form.png` — the saved FX_Items Form before close: Save greyed; User footer. Proves the clean pre-close state. Does not show the handler rows (not re-read in T9).
  - `t9-02-after-failed-reopen-click-no-form-open.png` — empty canvas; no Form tab; Save greyed; User footer. Proves no Form is open after the failed reopen. Does not show a menu state (the menu had closed).
- Accessibility snapshots: `t9-snapshot-00-fresh-designer-pre-close.md`, `t9-snapshot-01-immediately-after-close.md`, `t9-snapshot-02-form-menu-open.md` (menu items incl. the single FX_Items entry), `t9-snapshot-03-after-recent-forms-reopen.md` (menu closed, no Form), `t9-snapshot-04-after-wait-delayed-reopen-check.md` (no delayed Form).
- Tool-generated snapshots (gitignored, `evidence/playwright/`): `page-2026-10-11T09-12-41-816Z.yml` (close), `page-2026-10-11T09-12-46-971Z.yml` (menu), `page-2026-10-11T09-13-09-775Z.yml` (after wait).

## 9. Repository writes (T9)

- `evidence/EXP-056/T9-report.md` (created)
- `evidence/EXP-056/t9-01`, `t9-02` PNG files; `t9-snapshot-00` … `t9-snapshot-04` markdown files (created)
- `experiments/EXP-056-hello-world-part-3-section-7-set-values-and-variab.md` (edited: status line and T9 section)
- No other repository files written.

## 10. Proof limitations

- The close is observed from the tab list and snapshot (no Form tab; Save disabled; no prompt). The close is not proof of persistence.
- The reopen failure is observed from a tool timeout plus snapshots showing no Form. Whether a delayed server-side reopen would have occurred is not tested beyond the 3-second wait.
- No Form state after T9 was read: AC-8 and AC-9 are not evaluated.
- No durability or cross-session claim is made.
