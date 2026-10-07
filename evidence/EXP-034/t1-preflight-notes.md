# EXP-034 — T1 preflight notes (Run R-20261007-225604-DG5Z, cycle 1)

Scope: prerequisite repository review + read-only browser preflight ONLY. No authentication, navigation-to-establish-session, Designer launch, Save, close/reopen of any Designer Form, filter change, Cancel, unload, preference change, JS/evaluate/run-code on page state, or result-row interaction this task.

## §A Prior-evidence digest (read before browser interaction)

- EXP-031 record + `evidence/EXP-031/t4-final-audit-notes.md`: retention leg OBSERVED for both an existing name and a probe string across ordinary Cancel+reopen; applied-filter/zero-match leg UNRESOLVED (stale grid = previous filter's row when text changed between opens); fill alone never re-renders (EXP-030 T2); settled views from Open-at-open. Final state: dialog dismissed by one final Cancel, no reopen.
- EXP-033 record + `evidence/EXP-033/t7-final-audit-notes.md`: native keyboard path (caret focus via current ref, Ctrl+A, Backspace, one printable char per key op) DOES re-render and settle the grid in ONE open dialog; positive control settled exactly ONE row Name exact `FX_ComponentRecoveryLab02` (25 printable ops; "27" was a documentation conflation of total key ops); probe capital-B wrong-literal history + corrective lowercase-`b` pass. Recovery 0/1 consumed whole run.
- EXP-033-R2 record + `evidence/EXP-033-R2/t5-final-audit-notes.md`: clean replay — procedure **replay_verified** for this environment/UI workflow; per-op audit tables: Ctrl+A ×1, Backspace ×1, 25 printable ops `F X _ C o m p o n e n t R e c o v e r y L a b 0 2`; settled exactly ONE row both cells exact. Final: one ordinary Cancel dismissed dialog (ref f3e423), `find "Select Form"` none after; Lab03 panel + Designer tab preserved; run-wide zero SaveChanges/AddForm/Delete/Unload.
- Accepted mechanics inherited: keyboard clear→full-list re-render; type→settled filtered view; Open-at-open settles; Cancel retains text/settings (EXP-031 observed).

## §B Browser context observed (read-only)

- Open tabs: tab 0 = live authenticated Web Client at `...c51080bc-3191-4598-9894-39e1b84f8e87?favoriteContext=FX_ComponentRecoveryLab03`; tab 1 = ONE usable Web Designer with URL ending `&MGForm=FX_ComponentRecoveryLab03`.
- Fresh untargeted page snapshot (planned current-state inspection): Web Client iframe subtree contains banner identity button `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`, menu buttons Explorer/Form/Actions/Edit/View/Window/Help, toolbar (Open enabled; Save/New/Delete/Refresh/FiP/Get More Rows/System Notes/Documents disabled), Explorer region tree (My Folders / Master Explorer / Public Folders / User Folders), selected tab heading `FX_ComponentRecoveryLab03` + Close Panel button, panel body button f3e760. NO dialog node anywhere in the subtree.
- Targeted `find "Select Form"` page-wide = **no matches** → Select Form initially CLOSED. No Open performed; allowance 1/1 remains.
- Usability without authentication: identity bar visibly rendered, DEM badge, no login prompt → session already usable; zero auth actions.

## §C Inherited Designer context (read-only)

Selected tab 1 (tab selection only; both tabs persist), one screenshot, inspected `t1-02-designer-tab-lab03-untouched.png`:
- Designer frames visible: `FX_ComponentRecoveryLab02` (left) and `FX_ComponentRecoveryLab03` (right).
- Properties panel selected on `FX_ButtonRecovery03 (Button)`: Name `FX_ButtonRecover...`, Type PushButton, From Device Master True.
- Footer `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Zero Designer page actions performed; tab returned to 0 afterwards. Forms merely displayed, untouched.

## §D Repository baseline (recorded unmodified)

`git status --porcelain`: pre-existing unrelated modified paths — `tools/learning-harness/README.md`, `harness.config.example.json`, `src/shadow/cli.ts`, `src/shadow/runner.ts`, `test/shadow.test.ts`. HEAD: `ef33617 harness: context/briefs update`. EXP-034 created only the permitted record + this evidence dir; no other repo write.

## §E Counts and recovery accounting

- Initial Open consumed 0/1; filter-setting ops 0; clears 0; printable ops 0; tested Cancel 0/1; tested reopen 0/1; final Cancel 0/1; OK/Enter 0.
- Extra ambiguity recovery: used **0 / remaining 1**. All reads settled and unambiguous (fresh snapshot succeeded; `find` returned a definitive none). No planned read relabeled as recovery.

## §F Evidence

- `t1-01-preflight-webclient-dialog-dismissed.png` — inspected: full Web Client viewport, identity bar, DEM badge, Explorer tree, Lab03 panel row + Close control, greyed toolbar, no dialog; supports AC-1 (usable session + initially-closed Select Form). Limitation: filter textbox/settings not observable while dialog closed.
- `t1-02-designer-tab-lab03-untouched.png` — inspected: Designer tab frames Lab02/Lab03 + selected component properties; supports inherited Designer context untouched claim. Proves nothing about persistence (none claimed).
