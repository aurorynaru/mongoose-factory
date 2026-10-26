# EXP-137 — T7 exact-name IDO collision query: BLOCKED before criterion entry

Run `R-20261026-104057-G85J`, cycle 10, task T7. Worker session `93e27632-eec8-4c27-968d-0ac8726ea3b0`, task_message_id `ccf2f083-5146-4815-b9ab-c209a6fe174d`. Date 2026-10-26.

**Result: BLOCKED. The exact-name IDO query `FX_LoginUsers` was NOT executed.** The FiP toggle is now active, but the IDO Name criteria field is read-only, and no criterion was committed and no F4 was pressed. AC-1 IDO absence is therefore not established in T7. No application mutation occurred.

## Operator identity evidence (treated as operator evidence, not worker observation)

Read-only viewing of the two operator images:
- `evidence/EXP-137/operator-01-webclient-account-header-after-restart.png`: Web Client header reads `anton.ramos@3mworks.com.ph | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`; IDOs panel open; `Filter in Place` label at bottom-left of the panel.
- `evidence/EXP-137/operator-02-designer-user-scope-idocollections-after-restart.png`: separate Designer, Form `IdoCollections` (vendor), footer reads `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`. Not interacted with.

These support the account and User-scope identity per the operator. The worker's own snapshots do not show the account value (masked as `SECRET_MONGOOSE_USERNAME` in the accessibility name).

## Pre-criterion state (worker snapshots)

- Tab 0 is selected (Mongoose portal page). Tab list was read before any selection; no tab was selected in T7.
- Header button reads `SECRET_MONGOOSE_USERNAME | G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT`. Configuration visible.
- IDOs tab is selected (`tab [selected] … heading "IDOs"`).
- Toolbar: Save disabled. No dialog, Session Expired modal, sign-in page or notification banner visible.
- IDO grid: one placeholder row with plain gridcells (refs f1e151–f1e159). No criteria cell visible.
- FiP button before the click: `button "FiP" [ref=f1e33]` with **no** `active` attribute.

## Operations

1. Read-only: Glob of `evidence/EXP-137/operator-*.png`; Read of both operator PNGs.
2. Fresh untargeted snapshot (task start). Ref set f1e32 for the FiP button.
3. Screenshot attempt `evidence/EXP-137/t7-00-idos-panel-pre-criterion-viewport.png`: **TIMEOUT** (`browserBackend.callTool: Timeout 5000ms exceeded`, `taking page screenshot`, `fonts loaded`). **No file written.** Recorded as a screenshot omission per the brief; not retried.
4. Snapshot scoped to `f1e88` (IDOs tabpanel), taken as the post-timeout fresh snapshot. This scoped snapshot invalidated the toolbar refs.
5. Click FiP (`f1e32`): **Error `Ref f1e32 not found`**. No action performed.
6. Fresh untargeted snapshot (recovery snapshot per the ref-not-found rule). Refs refreshed; FiP still `f1e32`, IDO Name textbox `f1e180`.
7. Click FiP (`f1e32`) — the single corrected attempt. **Succeeded.** The click returned a saved snapshot `evidence/playwright/page-2026-10-26T13-55-43-913Z.yml` (tool-generated, outside `evidence/EXP-137/`).
8. Read of that snapshot file: FiP button now `button "FiP" [active] [ref=f1e33]`. The pre-click snapshot had no `active` attribute. **Filter in Place was OFF before the click and is ON after it.** Save remains disabled. No dialog visible.
9. `browser_type` of `FX_LoginUsers` into the IDO Name textbox `f1e180`: **Timeout**, `waiting for element to be visible, enabled and editable` / `element is not editable`. Locator resolved to `<input … readonly="readonly" aria-readonly="true" … data-mgcompnamevalue="CollectionNameEdit">`. **No text entered.** Not retried.
10. Stop. Criterion not committed. Tab, F4, Escape, Save, Finish, Create Form, check-in, runtime Save and record insert: **0**.

## Observations

- FiP toggle: observed ON after one click (accessibility `active` attribute on the FiP button in the saved snapshot). This is the only verified change in T7.
- The IDO Name textbox `f1e180` is `readonly`/`aria-readonly`, the same read-only `CollectionNameEdit` input seen in T1 (T1 deviation 2). It is not an editable criterion field even with FiP on.
- The IDO grid's first data row (`f1e150`, cells `f1e151`–`f1e159`) still shows plain gridcells in the accessibility tree after FiP was turned on. No editable criteria cell was identified in the snapshot. Whether the editable criteria cell appears only after clicking into the grid's IDO Name column is **unresolved** in T7.
- The browser_click result displayed a "Ran Playwright code" wrapper (`page.locator('iframe[name="mongoose_46_…"]').contentFrame().getByRole('button', { name: 'Filter in Place' }).click()`). This is the MCP click tool's own output. The worker did not author or run any script. It is recorded for operator review because the brief denies run-code tools.

## T5 interrupted-operation reconciliation (from `evidence/EXP-137/harness-audit-T5.md`, no replay)

- Audit: 14 events. Events 1–13 completed (snapshot, Grep ×2, Edit ×4 on the experiment record for Amendment A1, IDOs tab click, snapshot, FiP click, snapshot, screenshot `t5-00-idos-fip-stale-criterion-before-exact-name.png`, Read of that PNG).
- Event 14 `browser_type` (IDO Name criteria textbox): **error**, `Ref f1e325 not found`. The ref at that time was not a criteria field. No text was typed. The audit's "prohibited-tool hit" count (`browser_type`: 1) refers to the attempted call, not a successful entry.
- Audit limitations: "Malformed/truncated event at line 89" and "No terminal event; audit may be partial". The T5 log is incomplete. T5 is recorded as interrupted with no terminal event.
- No T5 Mongoose mutation is recorded in the audit (no Save, Finish, Create Form, check-in or record insert).

## Action accounting (T7)

| Category | Count |
|---|---|
| Fresh untargeted snapshots (task-start, ref-not-found recovery) | 2 |
| Scoped snapshots (post-screenshot-timeout) | 1 |
| Auto-snapshots returned by a click | 1 |
| Screenshot attempts | 1 (timed out; 0 files written) |
| Mutating-class browser actions that took effect | 1 (FiP toggle ON) |
| Mutating-class browser actions that failed with no effect | 2 (FiP click on `f1e32` with stale ref; `browser_type` on read-only `f1e180`) |
| Tab selects | 0 |
| Coordinate clicks | 0 |
| Tab, F4, Escape, Enter | 0 |
| Save, Finish, Create Form (Yes or No), check-in, runtime Save, record insert | 0 |
| Session recovery | 0 (no expiry observed) |
| Browser JavaScript authored by worker | 0 |
| Shell commands | 0 |

Recovery budget: the brief's fresh-snapshot allowance (one) was used by the ref-not-found snapshot. The post-timeout scoped snapshot was the brief's required screenshot-omission step. The corrected attempt was the FiP click. The read-only IDO Name failure is a new blocker, so the brief's stop rule applies.

## Acceptance mapping (T7)

- AC-1 (IDOs absence for `FX_LoginUsers`): **not established in T7**. The exact-name query was not run. Prior T3 lowercase check stands as qualified evidence. Operator identity evidence noted above (not worker-verified).
- AC-2 through AC-12: not reached. No wizard, Form, check-in, Save, runtime action or readback was performed.

## Limitations

- No screenshot of the committed or pre-F4 state exists (two timeouts across T6–T7).
- FiP ON is inferred from the accessibility `active` attribute on the button, not from a visual capture.
- The account value is masked in the worker snapshot; identity rests on the operator's images.
- The editable criteria cell for the IDO query is not identified.

## Next (for coordinator review, not taken)

- Identify the editable FiP criteria cell for the IDO Name column (grid cell `f1e151` or the criteria row), using one bounded inspection and one corrected attempt, or report that the IDO exact-name query cannot be executed in this UI state.
- FiP is left ON. It is a client view toggle, not a Mongoose mutation. Turn it off only if the coordinator asks.
- The T5 record has no operations entry. The coordinator decides whether to add one.
