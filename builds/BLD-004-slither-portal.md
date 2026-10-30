# BLD-004 — Slither.io clone portal, P2P (FX_SlitherPortal)

Status: TENANT RECOVERED — local port works; Form and empty asset persisted; game content installation pending
Date: 2026-10-30
Account (checked at resume): Web Client header matches `SECRET_MONGOOSE_USERNAME`; Designer scope not yet inspected
Evidence: full   Guide: none
Final scope for Forms: User
Build prefix: FX_   Tenant collision check: FX_Slither Form search empty; FX_Slither asset folder absent before creation (evidence below)

## Goal
Play a slither.io-style game inside a Mongoose form, **peer-to-peer** (no self-hosted server).
One user hosts a room (their tab runs the authoritative game), others join by room code and play
together. A signed-in user opens `FX_SlitherPortal`, hosts or joins a room, steers with the mouse,
boosts with click/space, and the form persists across close/reopen.

Source: `mathe00/slither-clone-sio` (MIT). Workspace copy at `builds/BLD-004/src/` (cloned, `.git`
removed). "Done" = two tabs (host + joiner) see each other and play; the form persists.

## Why P2P (operator decision, 2026-10-30)
The original is a Node/Express + Socket.IO server-authoritative game. The operator chose a
**P2P/WebRTC rewrite** over running a self-hosted server: host-authoritative, PeerJS public broker
for signaling, room-code join. Guest-only scope.

## Objects
| Object | Type | New (build prefix) / factory-owned / other | Scope | Change |
|---|---|---|---|---|
| `FX_Slither/index.html` | WUC asset | new (FX_) | tenant-wide | create (single self-contained game: inline JS/CSS/PeerJS/i18next, base64 images) |
| `FX_SlitherPortal` | Flex Form | new (FX_) | User | create, UserControl `FX_SlitherControl` → `FX_Slither/index.html` |

No C# form script, no IDO, no variables, no strings: the page is self-contained and needs no server
bridge (no `WSForm.invoke`).

## Data source
None (no IDO). All game state is computed in the host tab and streamed to joiners over WebRTC.

## Approvals required
| Object / operation | Why | Rollback | Operator approval |
|---|---|---|---|
| (none) | all objects are new FX_ factory-owned; no tenant-wide ops (no cache unload, no FormSync, no deployment, no Group/Site save) | delete FX_SlitherPortal + FX_Slither asset | n/a |

Operator decisions (2026-10-30):
- Architecture: P2P/WebRTC, host-authoritative, PeerJS public broker, room-code join.
- Scope: guest-only (name + play). Drop server accounts / persistent leaderboard / admin / ghost mode.
  Keep mouse steer, click/space boost, session leaderboard (host-local), optional host-local bots.
- **Keep all 3 images** (slither-logo, slither-logo-server-down, main-menu-background) → base64 inline.
- **Keep skins** (Customize Appearance: colors/patterns/trail effects).
- **English only** (embed `en.json`; drop the other 36 locales).
- Add alongside CS 1.6 (keep `FX_CS16Portal`); new form `FX_SlitherPortal`.

## Architecture (Socket.IO shim over PeerJS)
The existing sim + client run almost unchanged by shimming the one server seam.

- `createHostAdapter(roomCode)` → fake `io`. Peer ID = `fxslither-<roomCode>`. Host runs the sim.
  - `io.on('connection', cb)`, `io.emit(event, data)`, `io.to(id).emit(event, data)`,
    `io.sockets.sockets.get(id)`.
  - Per-peer fake socket: `.id`, `.on`, `.emit`, `.compress()` (no-op), `.broadcast.emit`,
    `.disconnect(true)`.
- `createPeerAdapter(roomCode)` → fake `socket` (joiner). `peer.connect('fxslither-<roomCode>')`.
  - `.on`, `.emit`, `.id`, `.connected`, `.disconnect()`.
- Message framing: `{event, data}` JSON over the WebRTC data channel.

Protocol (from `socketHandlers.js` / `game-main.js` / `socket-manager.js`):
- Client→Host: `joinGame` `{mode, headColor, bodyColor, skinData}`; `mouse_move` `{x, y}`;
  `boost` `{boost: true/false}`.
- Host→Client: `state` `{players, food}`; `gameOver` `{reasonKey, reasonOptions, kill, finalSize}`;
  `leaderboard`; `mapSizeUpdate` `{collisionRadius, width, height, shape, radius, mode, zoom, isGhost}`;
  `userConnected`/`userDisconnected`.
- Guest name generated host-side (`Slither{6 digits}`).

Porting notes:
- `backend/gameLogic.js` (43 KB) is near-pure JS. Swap `deps.io`→host adapter; replace the
  `worker_threads` collision pool with **inline synchronous collision** (≤ ~12 players, trivial math);
  `getLeaderboard`→session-local from `players`; `saveAccounts/Sessions/Config`→no-ops; keep
  `SpatialGrid` (full class captured from `server.js`). Strip accounts/sessions/bcrypt/crypto.
- Throttle host→peer `state` broadcast to at most 30 Hz. Source `startGameLoop` clamps
  the simulation interval to 16 ms even with FPS=120; preserve that original movement cadence.
- Client: new `p2p-entry.js` with Host/Join room-code UI; `socket-manager.js` `io(...)`→
  `createPeerAdapter`; strip `fetch('/')` server checks + service worker; `auth-manager`→no-op
  (always guest); keep skins/leaderboard/bots.
- Bundle to one file with `npx esbuild`: inline JS bundle + 3 CSS files + inline PeerJS +
  i18next (embedded `en.json` resources, no http-backend) + base64 all 3 PNGs →
  `assets/FX_Slither/index.html`.

Key config (`config.example.json`): MAP 4000×4000 rectangle; AOI_RADIUS 2000; INITIAL_SIZE 50;
SPEED 1.5; MAX_ROTATION_RATE 0.08; COLLISION_RADIUS 5; SELF_COLLISION_ENABLED false; FPS 120;
GRID_CELL_SIZE 100; DEFAULT_ZOOM_LEVEL 3; BOTS_ENABLED false (server default true), BOT_MAX_COUNT 10,
BOT_DIFFICULTY easy; SECURITY_MODE high.

## Plan (each tenant step ends with a Save and a readback)
1. This record + `evidence/BLD-004/`.
2. Port `gameLogic.js` → browser module (inline collision, session leaderboard, no-op persistence,
   keep `SpatialGrid`).
3. PeerJS Socket.IO shim (`createHostAdapter` / `createPeerAdapter`, room-code).
4. `p2p-entry.js` room UI + `socket-manager.js` swap; strip server checks / service worker / auth.
5. `npx esbuild` → single self-contained `assets/FX_Slither/index.html`.
6. Local 2-tab test: host + join, verify two snakes see each other, boost, collision, leaderboard.
7. Tenant: WUC asset `FX_Slither/index.html` → UserControl `FX_SlitherControl` → Flex Form
   `FX_SlitherPortal` (standalone Designer, User scope); save; close/reopen; verify persistence.
8. Runtime verify in Web Client (host + join, 2nd account); capture evidence; finalize this record.

Steps relying on **unverified** knowledge (probe first):
- PeerJS public broker reachable from the WUC iframe (Step 6 local 2-tab; Step 8 in-tenant).
- WebRTC data channel + WebGPU/WebGL inside the WUC iframe (Step 6 / Step 8).
- Single ~10-12 MB HTML WUC asset upload + load (Step 7).

## Acceptance checks
- AC-1: Designer readback after close/reopen: asset `FX_Slither/index.html` present with content
  matching the repo install copy; form `FX_SlitherPortal` exists with `FX_SlitherControl` →
  `FX_Slither/index.html`.
- AC-2: runtime: form opens, host a room, a 2nd account joins by code, both snakes render and move,
  boost + collision + session leaderboard work.
- AC-3: close/reopen: page loads again without Designer changes.

## Rollback / cleanup
- Delete Form `FX_SlitherPortal` (User scope).
- Delete asset `FX_Slither/index.html`.
- No other objects touched.

## Caveats (carried to operator)
- Host tab must stay open — the game lives in the host's tab; close it and the room dies.
- PeerJS public broker is a third-party dependency for the handshake only.
- Host CPU/bandwidth scales with player count.

## Checkpoint (for handoff / model switch)
- Completed: browser simulation port, guest host bootstrap, PeerJS transport,
  room/skin/replay UI, single-file build, local two-tab WebRTC and failure-path checks.
- Tenant: Flex Basic wizard created `FX_SlitherPortal` in operator User scope, wizard
  reported success. New `FX_Slither/index.html` asset template created in Global Objects;
  Version readback said User version for the operator. The asset content is NOT verified saved.
- Current browser after operator reload: responsive standalone Designer, selected
  `FX_SlitherPortal` in operator User scope; asset dialogs cancelled, Save disabled.
  Form reopened successfully; saved `FX_Slither/index.html` contains the default empty template.
- Next action: resolve the large-content installation path before repeating a paste;
  then complete asset persistence, layout/UserControl and tenant runtime. No objects need
  recreation. No browser recovery, Save or repeat fill was performed during the recheck.
- Local pages used for the probe were subsequently closed; no game room remains.
- Working dirs: source `builds/BLD-004/src/`; final asset target `assets/FX_Slither/index.html`;
  evidence `evidence/BLD-004/`.

## Resume observations (2026-10-30)
- Web Client visible, operator account verified through header; no native dialogs open.
- Actual workspace contains source + this brief only. No BLD-004 implementation at resume.
- Preserve unrelated uncommitted BLD-003, mocks and request work.
- User explicitly requested a single-file install artifact, overriding the skill's usual
  three-asset layout for this build. Maintain readable source modules and generate the HTML.
- Source issues found: global static-data cache omits appearance for later recipients;
  initialize renderer/listeners before emitting joinGame; synchronous collision completion
  must clear pending flags after the dispatch caller sets them. Address in the browser adapter.

## Implementation and local verification (2026-10-30)

Implemented as readable modules under `builds/BLD-004/`, leaving upstream `src/` intact.
Build with `npm ci`, `npm run build`, `npm test` in that directory. Dependencies pinned:
PeerJS 1.5.5, i18next 26.5.11, esbuild 0.28.2. See its README for source layout.

Observed / verified by local code and execution:
- Single-file HTML + flush-left install copy generated; source HTML 14,407,322 bytes.
  All three images, English i18next resources, PeerJS and renderer code embedded.
- Browser two-tab room `XRDM2H`: host `FXHost`, joiner `FXGuest` connected through the
  public PeerJS broker. Read-only diagnostics showed 95 host snapshots and 60 guest
  snapshots at capture, with matching authoritative positions and complete skins for
  both IDs in each recipient's state.
- `01-local-host.png`: host snake rendered in WebGL, room code/host status, two-player
  leaderboard and position/size HUD visible. Other snake is outside the camera; the
  image alone does not establish its rendering or movement.
- `02-local-guest.png`: guest snake rendered, same room code and two-player leaderboard;
  matching two-player positions were established by diagnostic readback, not this image alone.
- Boundary death displayed `Hit the map border. — Final size: 50`. Replay stayed connected
  and hid the game-over overlay. Host Leave caused the guest's Disconnected status.
- Invalid code `BAD` rejected with `Enter the six-letter/digit room code.`
  Screenshot `03-local-invalid-code.png` captured (inspection pending).
- Initial `npm test` failed because directly importing the browser transport into Node
  hit PeerJS CommonJS named-export interop. Separated the event emitter; subsequent
  test run passed 2/2 (collision segment geometry; authoritative inputs/growth/boost/appearance).
  Additional death/replay assertions were then added; see final check results below.

Deviations from planning assumptions:
- Use the working upstream WebGL path; its WebGPU initializer does not feed its draw loop.
- Preserve original ~60-tick movement, cap snapshots separately at 30 Hz.
- Send complete appearances, validate finite steering, ignore remote admin/state/death inputs,
  and check all opponent trails (a distant head's trail can cross a nearby head).
- Guest-selected name supported (15-character upstream name-field limit); autogenerated
  Slither name retained as fallback. No account/authentication APIs included.
- No second Mongoose account tested. No tenant runtime or cross-network test yet.

## Tenant steps and blocker (2026-10-30)

1. Verified operator header and Designer User scope. `04-designer-user-scope.png` captured.
2. Absence checks: `form-absence.yml` (Name filter FX_Slither, empty grid),
   `asset-absence.yml` (top-level asset tree without FX_Slither).
3. Flex → Basic wizard, Name FX_SlitherPortal, Unit left at wizard default (blank
   in screenshot; actual persisted Unit not yet read back), Save Template unchecked.
   Wizard reported Process Completed Successfully; new selected Form visible.
   Captures `05-flex-wizard.png`, `06-form-name.png`, `07-template-unchecked.png`,
   `08-form-created.png`. No UserControl placed yet; no layout edited yet.
4. Global Objects New `FX_Slither/index.html`; expanded folder, selected file; Content
   text/html, Version User for operator. `09-asset-created.png` captured.
   `new-asset-template.yml` preserves the new default template before replacement.
5. Browser tool VM exposes neither `require` nor dynamic import for loading the repo
   asset. Both attempts failed before any editor mutation. Switched to the existing
   local preview HTTP endpoint to obtain the install copy, then one Playwright textarea fill.
6. Fill tool call timed out (MCP -32001). A readback of that same textarea timed out,
   then the error-state screenshot also timed out. `10-large-asset-editor-state.png`
   was NOT produced and must NOT be cited as evidence.
7. No repeat fill, no OK/Save, no reload/close recovery attempted. Content/save status
   unknown. Preserve the current dialogs until operator inspection establishes the state.

Acceptance status: AC-1 pending; AC-2 local partial only, tenant pending; AC-3 pending.

## Final local check results and evidence inspection

- `npm run build`: pass, generated self-contained source and install copies.
- `npm test`: final run pass **2 tests, 0 failures** (334.6012 ms). Exercises segment
  collision geometry, rejecting spoofed initial state, finite steering validation,
  complete recipient appearance, size-50 boost rejection, food growth to 55,
  subsequent boost, death notification/final size, replay, disconnect cleanup.
- Two intermediate attempts to fast-forward real-time boundary behavior in the test
  failed due to fixture timing (teleport checks, then pending microtasks not flushed).
  Removed the invalid fast-forward fixture. The final death/replay test calls the
  actual death service directly; it does not claim unit coverage of boundary detection.
  Boundary death itself was observed in the browser probe above.
- `git diff --check`: no whitespace errors in tracked changes; unrelated pre-existing
  portal-shell.md line-ending warning. New build files are untracked; no commit made.
- Inspected all saved PNGs `01` through `09`. `03` visibly shows invalid code, red
  error message, offline art and usable menu; it does not prove network error handling.
- `04` shows operator User scope selected before entering Designer.
- `05` shows Flex / Basic selected; `06` shows name FX_SlitherPortal and blank Unit;
  `07` shows Save Template unchecked. These show wizard inputs, not persistence.
- `08` shows selected FX_SlitherPortal, Form Type Flex, User version and three empty
  regions; it does not prove close/reopen persistence or a working UserControl.
- `09` shows FX_Slither/index.html selected, Content text/html and User version;
  it does not prove the generated game content was accepted or saved.
- No post-fill, after-save or reopened evidence exists. Tenant acceptance checks remain pending.

## Operator reload recheck (2026-10-30)

Operator reported reloading the Designer tab and requested another inspection.
- Confirmed browser responsive and status bar operator User scope.
- Select Form search found `FX_SlitherPortal`; opened it successfully. Screenshot
  `evidence/BLD-004/10-after-operator-reload.png` inspected: selected Form, Name
  FX_SlitherPortal, Form Type Flex, User version, three empty regions, no dialogs.
  This establishes empty shell persistence, not the game or UserControl.
- Assets tree still includes `FX_Slither/index.html`. Opened its editor read-only;
  content is the original default HTML template with empty body, not the generated game.
  Evidence `after-operator-reload-assets.yml` and `after-reload-asset-template.yml`.
- Content arrow offers MIME types only; Edit Browser File offers text editing and
  OK/Cancel/Help. No file-import control was exposed in these inspected dialogs.
- Cancelled both dialogs without saving; left the responsive FX_SlitherPortal selected.
- Earlier unknown content state is now resolved: the large game content did not persist.
  The cause of the earlier timeout is not established; asset size is a suspected factor,
  not a proven Mongoose size limit. No repeat large paste attempted.
