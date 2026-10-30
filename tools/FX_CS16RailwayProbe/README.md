# FX_CS16 Railway ICE-TCP probe

Standalone temporary connection test for the planned CS 1.6 backend. Open it
directly in a browser first. Your existing Mongoose launcher needs no changes.

This is an implementation of Pion's ICE-TCP approach, with the additional public
candidate address/port rewriting that Railway's TCP proxy requires. It has no game
server, game files, login, or persistent data. A pass proves one WebRTC data-channel
round trip over TCP; game compatibility, multiple players, latency under load, and
restart persistence remain unverified.

## Deploy on Railway

1. Create a new GitHub repository just for this probe. Upload the **contents of
   this folder**, including `public/`, with `Dockerfile` at the repository root.
   Do not upload your whole mongoose-factory repository or any credentials.
2. Railway: **New Project → Deploy from GitHub repo**. Select that repository.
   Railway should detect the Dockerfile. Leave build/start overrides empty.
3. In the service's **Variables**, add `PORT=8080` and `ICE_TCP_PORT=8443`.
   These are example probe settings from the Pion reference; 8443 carries raw
   ICE-TCP, not HTTPS.
4. In **Settings → Networking → Public Networking**, generate an HTTPS domain
   with **target port 8080**.
5. In the same Networking section, enable **TCP Proxy** with **internal port
   8443**. Railway assigns a hostname and an external port; the external port
   will usually differ from 8443. Keep the assigned external port.
6. Deploy the pending changes/redeploy so the process receives Railway's
   `RAILWAY_TCP_PROXY_DOMAIN` and `RAILWAY_TCP_PROXY_PORT` variables. The app uses
   those automatically. If `/config` says they are absent, set
   `PUBLIC_ICE_HOST` to the assigned TCP hostname (no scheme or port) and
   `PUBLIC_ICE_PORT` to its assigned external port, then redeploy.
7. Keep this service at **one replica**. Disable service sleeping/serverless for
   this connection test if enabled. No volume or database is required.
8. Open the **HTTPS domain** from step 4, not the raw TCP proxy address. Click
   **Run connection test**. Test from the browser/network you use for Mongoose.

Optional Railway health-check path: `/healthz`. This proves the HTTP process is
running; it deliberately does not claim that TCP proxy configuration is ready.
The browser checks `/config` separately.

For an existing monorepo deployment instead, set the service Root Directory to
`/tools/FX_CS16RailwayProbe`; do not change other services.

## What the result means

- **PASS:** a matching echo returned, the selected remote ICE candidate protocol
  is `tcp`, and its IPv4 address and public port match the advertised endpoint.
- **Configuration message:** enable the TCP proxy, then redeploy. Check the two
  Railway-generated variables or the explicit public endpoint overrides above.
- **Timed out / failed:** inspect deployment logs for WebRTC state. Check that
  HTTPS targets 8080, TCP proxy targets 8443, and that the browser's network allows
  outbound TCP to the external proxy port. Try another browser/network once to
  distinguish a network restriction. Preserve the result before further changes.
- **Echo succeeded but stats unavailable:** data works, but the page cannot prove
  which transport was selected. The result stays NOT VERIFIED.

Copy the JSON result from the page for review. It reports endpoint/protocol,
connection state, and a **single** echo RTT sample. It does not measure gameplay
quality. A failed probe does not by itself prove Railway-only hosting impossible.

Proposed temporary resource limits: 16 concurrent sessions, each expiring after
60 seconds, and echo payloads limited to 4096 bytes. This is a disposable diagnostic
service; stop/delete it after testing to stop its usage charges.

## Local verification

Requires Go 1.23+:

```sh
go test -v ./...
go vet ./...
```

The integration test puts a real TCP forwarder between two Pion WebRTC peers,
using different external/internal ports, and verifies a binary echo through it.
It does not contact Railway.

For a local browser run, set `PUBLIC_ICE_HOST=127.0.0.1`,
`PUBLIC_ICE_PORT=8443`, `PORT=8080`, and `ICE_TCP_PORT=8443`, then `go run .`.
Open `http://127.0.0.1:8080` on the same machine. Those loopback settings must
not be used in Railway.

## Sources and knowledge state

- [Pion ICE-TCP reference](https://github.com/pion/webrtc/tree/v4.1.6/examples/ice-tcp)
- [Pion settings API](https://pkg.go.dev/github.com/pion/webrtc/v4#SettingEngine)
- [Railway TCP proxy](https://docs.railway.com/networking/tcp-proxy)

The Railway connection is **unverified** until the operator runs this deployed
probe. Local test results are recorded in `builds/BLD-005-cs16-railway-probe.md` in
the mongoose-factory workspace; that file is not needed for standalone deployment.
