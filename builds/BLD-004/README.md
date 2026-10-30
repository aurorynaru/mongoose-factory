# FX Slither browser port (BLD-004)

## Build and preview

Requires Node 24 (used here) and npm. From this directory:

```powershell
npm ci
npm run build
npm test
```

The build produces `assets/FX_Slither/index.html` and `index.flat.html`. Both are
self-contained install artifacts. Do not edit them by hand. The source is split
into readable modules here; `src/` preserves the upstream source and MIT license.
`package-lock.json` pins the bundler and browser dependencies.

For the existing workspace preview server, open
`http://127.0.0.1:8765/FX_Slither/index.html`. If it is not running, use
`npm run preview` from `assets/` in a separate terminal. A second browser tab can
join a hosted room by its six-character code.

## Source map

- `build.mjs`: checked transformations of the upstream simulation/collision code,
  WebGL client integration, esbuild bundle, embedded English translations and images.
- `host.js`: guest join/input handling and session leaderboard. Remote peers cannot
  set positions, size, admin flags or collision outcomes.
- `network.js`: PeerJS host and joiner transport, local host-player loopback,
  timeouts and connection cleanup. Messages are `{event, data}`.
- `events.js`: the shared on/off/deliver event interface.
- `p2p-entry.js`: room lifecycle, replay, leaderboard and persistent appearance UI.
- `index.template.html` / `app.css`: markup and room styles. The original WebGL
  renderer and trail effects remain in use. All three original images are embedded.
- `generated/`: derived browser simulation, grid, collision and client code;
  regenerated on every build, ignored by git.
- `test/simulation.test.mjs`: segment collisions, authoritative guest input,
  complete appearance delivery, growth/boost, death reporting and replay.

## Known behavior and diagnostics

- The host tab owns the simulation. Keep it open and active; browser background
  throttling can slow a hosted room. No host migration or server persistence.
- PeerJS public signaling is external. Direct WebRTC may fail on restrictive NAT
  or corporate networks. Cross-network reachability has not been established.
- Initial size is 50 and the upstream boost minimum is 50: eat food before boosting.
- Original movement loop has a 16 ms minimum interval, even with config FPS=120.
  Snapshots are capped at 30/second separately; actual cadence depends on tick timing.
- WebGL is used. The upstream WebGPU initialization does not feed its actual draw
  loop, so that incomplete path is excluded from this port.
- `window.FX_SlitherDiagnostics()` returns a cloned, read-only diagnostic snapshot
  (room/id, connection flag, host flag, snapshot count, latest received state).
- The UI writes actionable errors to its status line and `[FX_Slither]` console log.

## Installation status

See `../BLD-004-slither-portal.md`. Local two-tab WebRTC was observed working.
The first tenant editor fill timed out; persistence and tenant runtime are NOT
verified. Do not blindly repeat that fill or assume it was saved.
