# FX_CS16 Railway backend

Step 1 package: a CS 1.6/Xash3D game runtime behind the ICE-TCP transport observed
working in BLD-005. This is a separate backend service. It does not modify the
existing Mongoose launcher or include the Global-Strike browser client.

## Deploy

1. Create a separate GitHub repository. Upload this folder's **contents**, with
   `Dockerfile`, `go.mod`, `go.sum`, Go source/tests, and `public/` at its root.
2. Railway: **New Project → Deploy from GitHub repo**, or add a new GitHub service
   to your existing project. Select that repository. Use the Dockerfile; leave
   start/build overrides empty. The pinned upstream game image is about **940 MB
   compressed**, so its first pull/build is larger than the connection probe.
3. Set these Railway Variables:

   | Variable | Initial value |
   |---|---|
   | `PORT` | `8080` |
   | `ICE_TCP_PORT` | `8443` |
   | `CS16_ADMIN_TOKEN` | Your own private random value, at least 32 characters |
   | `CS16_START_MAP` | `de_dust2` (default) |
   | `CS16_MAXPLAYERS` | `16` (default; initial package accepts 2–16) |

   Set the actual token only in Railway Variables. Do not put it into GitHub,
   screenshots, Markdown, the Mongoose asset, or a shared URL. The diagnostic
   uses it from a password input and clears that input after session creation.
4. **Settings → Networking:** generate an HTTPS domain targeting **8080**, and
   enable **TCP Proxy** targeting **8443**. Redeploy after configuring both.
   The gateway uses `RAILWAY_TCP_PROXY_DOMAIN` and `RAILWAY_TCP_PROXY_PORT`
   automatically. Do not substitute 8443 for the assigned external port.
5. Use **one replica** and disable service sleeping/serverless. Set health-check
   path to `/readyz`. Do **not** mount an empty volume at `/xashds`: it would hide
   the packaged game runtime. No database or volume is required for this stage.
6. Open the HTTPS domain directly. Enter the admin token and click **Test game
   backend**. Save the resulting JSON, which excludes the token.

If the Railway-generated proxy variables are absent, explicitly set
`PUBLIC_ICE_HOST` to the assigned TCP hostname (no scheme or port) and
`PUBLIC_ICE_PORT` to its external port, then redeploy.

For this existing monorepo instead, Railway's Root Directory is
`/tools/FX_CS16RailwayBackend`. Do not deploy the whole Mongoose workspace as a
standalone repository. No commit, push, or Railway deployment is performed by the
packaging task itself.

## Required result

The diagnostic sends Xash3D's native protocol-49 server-info query through:

```text
browser → Railway TCP proxy → WebRTC TCP gateway
        → private WebRTC UDP → native CS engine → reply along the same path
```

The initial generic A2S_INFO attempt did not return a reply in local native
testing; the diagnostic uses the engine's documented `info 49` request instead.
A **PASS_GAME_QUERY** requires
a binary server-info reply identifying `cstrike` and a loaded map, plus a selected
TCP candidate matching the Railway public proxy. An echo, HTTP 200, or merely
starting the process is insufficient. Its query RTT is one sample, not a gameplay
benchmark. Share only the result JSON and relevant deployment logs, not the token.

`/readyz` proves that private backend HTTP can serve its packaged game assets;
it does not establish that a map/game query is working. `/healthz` is gateway
liveness. The engine process exiting stops the gateway so Railway can restart it.

## Packaging and behavior

- Pinned source image manifest:
  `ghcr.io/balintsoos/cs16-web-server@sha256:75a410e3406cbc525329df93216c740ca76d92d45b0da7e850ef762b4f106148`.
- Its `/xashds` runtime is copied from linux/386 into a linux/amd64 Debian image
  with i386 libraries. No 32-bit game executable runs during the Docker build.
  A static file check verifies ELF32/i386, the game library, ZIP and selected map.
- The amd64 Go gateway supervises the 32-bit game process. The game keeps private
  HTTP 27016 and UDP 27018; only the gateway's HTTP 8080 and ICE-TCP 8443 are exposed.
  No native UDP/RCON game port is published.
- One browser gets one private peer. Binary packets stay binary, channel names
  remain `read`/`write`, channels are unordered with zero retransmits, and both
  candidate IP and port are rewritten to the public proxy.
- Packet size cap 8192 bytes follows the pinned private backend. Queue length 24
  and buffered-byte cap 262144 follow the existing Global-Strike client. Under
  backpressure old queued packets are discarded; no unlimited queue grows.
- Session issuance/status require an admin Bearer token. WebSocket sessions use
  random 256-bit tickets, valid for 60 seconds and usable once. Existing sessions
  do not expire after 60 seconds; that is a handshake/ticket window.
- The native child does not inherit the admin token or Railway/public port vars.
  An owned `FX_CS16_server.cfg` sets the hostname, keeps `sv_lan 0`, and assigns a
  fresh unexposed RCON password on startup. Existing game rules otherwise follow
  the pinned runtime. No game configuration/state persistence is added here.
- Cross-origin requests are denied by default. `CS16_ALLOWED_ORIGINS` accepts
  comma-separated **exact origins**, never `*`; step 2 will set the actual
  Mongoose origin as needed. The diagnostic works same-origin without that var.
- Audio from the game runs in the future browser client. WebRTC voice-chat track
  relaying is not implemented by this gateway.

## Validation and troubleshooting

Packaging check completed locally: the **actual pinned native engine** loaded
`de_dust2` and answered its protocol-49 info query through the full TCP gateway
path in WSL. Local Go checks, three browser-parser tests, and the Linux amd64
gateway build passed. The full Docker build and Railway execution are still
pending; this is not yet a deployed game server or a Mongoose integration result.

With Go 1.23+:

```sh
go test -v ./...
go vet ./...
```

The normal tests use a clearly identified synthetic private backend to exercise
two real WebRTC sessions over a real TCP forwarder, binary fidelity, selected TCP
transport, isolation, repeated private offers, cleanup, token/ticket handling,
origin restrictions, packet bounds, and native-child environment separation.
They do not claim that CS is running. The optional Linux native test requires
`CS16_TEST_GAME_DIR` pointing at the pinned runtime and its i386 loader/libraries;
it otherwise reports SKIP. Local evidence and remaining checks are in the parent
workspace's `builds/BLD-006-cs16-railway-backend.md`.

Railway diagnostics:

- **Missing token:** set `CS16_ADMIN_TOKEN`, then redeploy.
- **Missing proxy settings:** verify TCP target 8443 and generated variables.
- **Game process cannot start:** keep the exact error. The host must support
  Linux i386 execution; the image includes its loader/libraries, but successful
  execution on the Railway host still needs to be observed.
- **Private backend unavailable:** inspect native runtime logs first. The
  diagnostic cannot create a session until private HTTP/asset readiness passes.
- **Browser TCP connects but no game reply:** preserve the JSON and logs showing
  both private UDP and browser TCP states. This narrows the problem to the game
  path/query rather than treating HTTP readiness as a gameplay pass.
- The pinned upstream logs WebSocket closure as an error when a diagnostic session
  ends. A closure after `PASS_GAME_QUERY` and slot cleanup does not undo the query
  result; inspect the preceding connection/query messages before diagnosing it.

## Step 2 boundary

The existing Global-Strike launcher still uses the author's host/ticket scheme.
This package does not redirect it. The admin diagnostic's session endpoint is
not yet a player-login integration. Step 2 must issue scoped player access and
asset access without embedding the backend admin secret in browser/Mongoose
source, then adapt the client endpoint and handshake. Two-player in-map testing
remains step 3. Keep the working launcher and original probe as references.

## Upstream attribution

- [CS web server source](https://github.com/balintsoos/cs16-web-server/tree/b32833844149f00c94f040be17d40e2ba0e99c2b)
- [Pinned image](https://github.com/balintsoos/cs16-web-server/pkgs/container/cs16-web-server)
- [Pion WebRTC / ICE-TCP](https://github.com/pion/webrtc/tree/v4.1.6/examples/ice-tcp)
- [Xash3D native server-info handler](https://github.com/FWGS/xash3d-fwgs/blob/master/engine/server/sv_client.c)
- [Railway TCP proxy](https://docs.railway.com/networking/tcp-proxy)

The upstream MIT notice is included in `UPSTREAM-LICENSE.txt`. Game/engine assets
are fetched by Docker from that public image; no Valve assets are included in
this source ZIP. Their respective upstream licenses/rights still apply.
