# EXP-134 T1 checkpoint (read-only preflight; blocked by session expiry)

Run R-20261026-031627-MXfT · cycle 0 · task T1 · worker session d0270975-f00b-4ab0-bfd2-4c698457fc2d · task_message_id fdf914ed-b0df-4e8c-b259-a8dceff78f1e.

## Result

- Identity, DEFAULT configuration, Designer User scope, and existing project FX_HelloWorldProject01: observed.
- Absence gates (criterion before F4; settled after F4): IDOs `FX_InventoryItems` zero rows; Sql Tables `FX_InventoryItems` zero data rows (add-mode placeholder only). Qualified: no positive control in this session.
- Designer liveness: FAILED. Designer tab 0 Edit menu returned "The server event processing returned an error. If this persists, contact your system administrator." (OK pressed once).
- Designer split-button recovery (one click; tooltip "Open designer in a new window" confirmed): no new Designer tab; **Session Expired** modal appeared on the Web Client tab.
- Session Expired OK click: timed out ("waiting for element to be visible, enabled and stable"); the modal remains open per a fresh snapshot (`f1e770`, OK `f1e629`). Not repeated. Navigation and sign-in not performed.
- Mutation: none. No wizard, Finish, Save, New, Delete, check-in, Create Form, unload, FormSync or script.

## State at stop

- Web Client tab 2: Session Expired alertdialog open (in-page Mongoose modal); behind it IDOs (zero-row query), Sql Tables (zero-row placeholder, unsaved, Save disabled, treated as lost) and IDO Projects (FX_HelloWorldProject01 row) Forms are open.
- Designer tab 0: FX_LoginPortal (existing FX_ Form, not modified), stale.
- Designer tab 1: `designer/default.aspx`, not inspected.

## Next permitted action (separate bounded task)

1. Tab list, then select tab 2; one fresh snapshot.
2. If the Session Expired modal remains: click its OK once (standing authorisation). If no sign-in form appears in that tab, navigate that tab once to https://mingle-portal.se1.inforcloudsuite.com/G6R8LJ9Q4E8C2Z8Y_DEM/ and sign in with the placeholders only (SECRET_MONGOOSE_USERNAME, SECRET_MONGOOSE_PASSWORD, SECRET_MONGOOSE_TENANT only if a tenant field appears). Keep G6R8LJ9Q4E8C2Z8Y_MONGOOSE_DEM_DEFAULT. Report "session re-established" or the exact failure.
3. Do not start the wizard in that task. Obtain a live Designer through the split control (Identify Your Editing Scope → User), then repeat both absence gates and the project gate in the new session before any mutation.

## Evidence

`evidence/EXP-134/t1-01` … `t1-13` (PNG). Record: `experiments/EXP-134-mock-inventory-data-layer-fx-inventoryitems-sql-ta.md`.
