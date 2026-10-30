# FX_CS16 local own-server preview

Run the adapted Global-Strike client locally against your Railway backend before
changing the Mongoose launcher. Requires Node.js 22 or newer and PowerShell. There
are no npm dependencies to install.

From `C:\AI\mongoose-factory`:

```powershell
.\tools\FX_CS16LocalPreview\Start-Preview.ps1
```

Enter the same `CS16_ADMIN_TOKEN` set in Railway when the private prompt appears.
Open the localhost URL printed in the terminal. Keep that terminal running,
select **FX_CS16 | de_dust2**, enter a player name, and press **Play**. The first
launch downloads the game data from your backend. Stop the preview with Ctrl+C.

The default backend is `https://cs16backend-production.up.railway.app`. To use a
different service:

```powershell
.\tools\FX_CS16LocalPreview\Start-Preview.ps1 -BackendURL 'https://your-service.up.railway.app'
```

The launcher uses a free local port automatically; `-Port 9090` selects one.
The source ZIP must be extracted with its `assets/` and `tools/` folders together.

## Railway prerequisites and test

Use the BLD-006 backend with HTTPS targeting 8080 and TCP Proxy targeting 8443.
The gateway reads `RAILWAY_TCP_PROXY_DOMAIN` and `RAILWAY_TCP_PROXY_PORT`; when
those are absent, set `PUBLIC_ICE_HOST` and `PUBLIC_ICE_PORT` to the assigned
public TCP hostname and external port. Redeploy after changing those settings.

No persistent volume is required for this initial test. Keep one replica. The
service's `/healthz` and `/readyz` returning HTTP 200 establish startup readiness.
For a public transport/game-query check, open the Railway HTTPS root page, enter
the token in its password input, and run **Test game backend**. Its required
result is `PASS_GAME_QUERY`. Keep the token private; share only result JSON.

The local preview additionally requires authenticated `/api/status` to report
both `backendHTTPReady` and `tcpProxyReady`. A missing TCP proxy produces a
visible setup error. A wrong admin token produces a backend authorization error.
For a connection/join failure, retain the on-screen error and Railway logs.

## Credential boundary

The PowerShell prompt passes the token only to the local Node process. The
loopback broker adds the admin Bearer header to its own fixed upstream requests.
The browser receives the room/configuration, streamed assets and signaling;
the permanent token and one-use backend session ticket stay in the broker.

The server binds only to `127.0.0.1`, checks Host and browser Origin, and serves
only named routes. Do not expose this developer preview through a public tunnel.
The original `assets/FX_CS16` remains independent. `FX_CS16Local` uses local
broker routes and is not a tenant installation package. Mongoose integration
still needs authenticated server-side player/session and asset access using the
existing Mongoose sign-in.

## Implementation and checks

- `assets/FX_CS16Local`: existing launcher layout with a separate own-server label.
- `server.cjs`: fixed-route configuration, game-asset and WebSocket broker.
- `client-build.cjs`: checksum-pinned upstream client adaptation. Its first start
  downloads about 12 MB into ignored `.cache/`; later starts verify the cache.
- `Start-Preview.ps1`: private token prompt and process startup/cleanup.

The client is pinned to Global-Strike commit
`456b15f96e96e238b206262b96209aaf08568c93`, with SHA-256
`6a6c20e7956d12708aacab9729054546a08de67ceb76f82c9298f345a8710443`.
The adaptation replaces active upstream configuration/admission/relay calls and
disables auto-update. Unused upstream library code remains in the compiled page.
Upstream source: https://github.com/woahhcrackers/Global-Strike/tree/456b15f96e96e238b206262b96209aaf08568c93

```powershell
cd tools/FX_CS16LocalPreview
node --test --test-timeout=15000 preview.test.cjs
```

Four automated checks cover the client checksum/embedded JavaScript syntax,
configuration and streamed assets, origin/Host rejection, and real WebSocket
frame forwarding with a synthetic backend. A separate Edge run displayed one
owned room and enabled Play with a synthetic status server. These checks do not
establish a rendered map or live Railway gameplay. The local native browser run
was blocked by Windows/WSL forwarding and a local port collision. See
`builds/BLD-008-cs16-local-client.md` for evidence and remaining checks.
