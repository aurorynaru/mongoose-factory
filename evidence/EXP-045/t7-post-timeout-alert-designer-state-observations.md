# EXP-045 — T7 acknowledgement of the timeout alert and read-only Designer state (cycle 8)

Run `R-20261010-214137-Ia7F` · experiment EXP-045 · cycle 8 · task T7 · worker session `88551ce6-9f95-4e28-aeb2-1e23a8d29062` · task_message_id `1865a7ce-e454-492d-8f80-c5c91404e030`.
Date: 2026-10-10. Browser: inherited Designer tab (tab 1) and Web Client tab (tab 0), as left by T6. No login, no reload, no navigation typed, no Designer Save, no close/reopen, no Caption dialog, no component selection, no string action.

## Outcome (short)

- The inherited alert matched the brief exactly: **"Timeout expired waiting for response."** with a single **OK** (ref `e822` before the click).
- **OK was clicked once.** The alert closed. No further prompt, dialog, or error appeared.
- The Designer is **still on the `FX_UMs` Form tab**. The Designer URL is still `…/WSWebClient/designer/default.aspx` (no `MGForm` parameter), as after T6.
- **Save and Undo are disabled.** The status bar shows `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]`.
- Component selection is unchanged: `FX_UMStatic (Static)`, Caption `FX_sUM`.
- The root cause of the timeout is **unknown**. Nothing in this step establishes whether `FX_sUM` was created by the earlier No click.

## Actions (in order)

| # | Action | Result |
|---|---|---|
| 1 | Untargeted snapshot (fresh) | The **selected tab was the Web Client (tab 0)**. The Designer's timeout alert was in the snapshot (`alertdialog` text `Timeout expired waiting for response.`, OK `e822`). The Web Client itself showed no dialog. |
| 2 | `browser_tabs` select tab 1 (Designer) | Designer selected (`designer/default.aspx`). |
| 3 | Untargeted snapshot (fresh) | Alert text exactly `Timeout expired waiting for response.`, single OK `e822` (`[active]`). Designer tab `FX_UMs` selected. Save and Undo `[disabled]`. Properties `FX_UMStatic (Static)`, Caption `FX_sUM`. Status bar User scope. No other alert. |
| 4 | Screenshot | `t7-01-timeout-alert-inherited-before-OK.png` |
| 5 | Click **OK** (ref `e822`), once | Click returned without error. |
| 6 | Untargeted snapshot (fresh; the post-alert read) | **No alertdialog present.** Form tab `FX_UMs` selected. URL `designer/default.aspx`. Save and Undo `[disabled]`. Components grid unchanged: `FX_UMStatic` row selected; `FX_DescriptionStatic` and Edit rows present. Properties: `FX_UMStatic (Static)`, Name `FX_UMStatic`, Caption `FX_sUM`, Type `Static`. Status bar User scope. |
| 7 | Screenshot | `t7-02-after-OK-timeout-alert-dismissed-designer-state.png` |
| 8 | Stop | No further action. Nothing reopened, selected, saved, navigated or refreshed. |

## What the screenshots show (checked by viewing the files)

- `t7-01` (before OK): the alert `Timeout expired waiting for response.` with a warning icon and one OK button, over the Designer. Behind it: the `FX_UMs` Form tab, the canvas with `FX_sUM:` and `FX_sDescription:` labels, Properties `FX_UMStatic (Static)`, Caption `FX_sUM`, and the Components grid with `FX_UMStatic` highlighted. Status bar User scope. **Does NOT show** the cause of the timeout or whether any string was created.
- `t7-02` (after OK): no dialog. The same Designer state: `FX_UMs` tab (bold, selected), Properties `FX_UMStatic (Static)` with Caption `FX_sUM`, the canvas labels `FX_sUM:` and `FX_sDescription:` (raw ID text), Components grid with `FX_UMStatic` selected, toolbar Save greyed, status bar `ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph`. **Does NOT show** the Form-level Name, Version or Device Type, because a component (not the Form) is selected; **does NOT show** the literal string values; **does NOT show** the database or string-table state.

## Form identity, scope and state after the alert (read-only)

| Item | Observed after OK | Basis |
|---|---|---|
| Form still open | **Yes.** The `FX_UMs` Form tab is the selected tab in the Designer. The other Designer tab `Property Classes` (vendor `IdoPropertyClasses`) is present but not selected. | snapshot step 6; `t7-02` |
| Designer surface | Still the Form designer (not a different surface, not the wizard, not the Form list). | snapshot step 6 |
| URL | `https://mgapse1ap.mtmgf.se1.mongoosepaas.io/WSWebClient/designer/default.aspx` (no `MGForm=FX_UMs`). Changed from `?MGForm=FX_UMs` during T6 (after the No click); not changed by T7. | snapshot step 6 |
| Form Name / Version / Device Type | **Not visible** after OK: a component (FX_UMStatic) is selected, so the Properties panel shows the component, not the Form. The Form identity rests on the open `FX_UMs` tab heading. Form-level values were last observed in T3/T4 (Name `FX_UMs`; Version `User version for user anton.ramos@3mworks.com.ph`). Not re-established in T7 (no Form selection performed). | `t7-02` |
| User editing scope | `[ ScopeType: User / ScopeName: anton.ramos@3mworks.com.ph ]` | snapshot step 6; `t7-02` |
| Save | **Disabled** | snapshot step 6 |
| Undo / Redo | **Disabled** | snapshot step 6 |
| Component selection | `FX_UMStatic (Static)` | `t7-02` |
| Caption property (FX_UMStatic) | `FX_sUM` (the string ID reference; literal value not shown) | `t7-02` |
| Remaining dialogs | **None** | snapshot step 6 |
| Errors | Designer console shows **1 error** (carried from earlier tasks; not diagnosed). No new error text is visible on screen. | snapshot header |
| Web Client tab | Not acted on in T7. Its current contents (Property Classes runtime tab) were seen in the snapshot at step 1; no dialog. | snapshot step 1 |

## Interpretation (not established)

- The OK click acknowledged the informational timeout alert. The Designer did not navigate away and did not close FX_UMs.
- The timeout's cause, and whether the earlier No click created or partly wrote `FX_sUM`, remain **unresolved**. The absence of the alert does **not** show the string-resource state. This is the point the brief asks us not to infer from.
- The URL change from `?MGForm=FX_UMs` to `designer/default.aspx` remains **unexplained**. The Form tab still shows `FX_UMs`, so the Designer did not visibly change Form, but the URL is no longer Form-specific.
- Whether `FX_sUM` now exists (and with what value) is **unresolved**. No supported read-only string lookup exists (T1).

## Limitations

- The Form-level Name/Version/Device Type could not be re-read without selecting the Form, which the brief forbids in T7. They are recorded as "not visible", not as confirmed.
- The string-resource state cannot be read from the Designer without the Caption dialog, which T7 forbids.
- The Designer's 1 console error is still undiagnosed.
- Single run. Not replay-verified.

## Recovery and counts

- Fresh snapshots: 3 (steps 1, 3, 6). Ref-not-found errors: 0. Tool timeouts: 0. Recovery snapshots used: 0. Corrected inspections: 0.
- Clicks: 1 (OK, step 5). Tab selects: 1 (to Designer). Screenshots: 2 (`t7-01`, `t7-02`). Reads of saved screenshots: 2.
- No Save, Finish, Caption dialog, string create/change, component selection, Designer close/reopen, Form navigation, refresh, FormSync, cache unload, login/logout, or JavaScript.
- Portal banner dismissals: 0 (none seen in the Web Client snapshot).
