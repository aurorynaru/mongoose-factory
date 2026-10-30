package main

import (
	"context"
	"embed"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"net/url"
	"path/filepath"
	"strconv"
	"sync"
	"sync/atomic"

	"github.com/gorilla/websocket"
	"github.com/pion/webrtc/v4"
)

//go:embed public/*
var publicFiles embed.FS

type gateway struct {
	config            config
	ctx               context.Context
	frontAPI, backAPI *webrtc.API
	endpoint          func(context.Context) (endpoint, error)
	upstream          string
	ready             func(context.Context) error
	tickets           *tickets
	slots             chan struct{}
	sequence          atomic.Uint64
	sessions          sync.Map
}

func writeJSON(w http.ResponseWriter, status int, value any) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(value)
}

func (g *gateway) privateEndpointReady(ctx context.Context) error {
	request, _ := http.NewRequestWithContext(ctx, http.MethodHead, "http://127.0.0.1:27016/gamefiles.zip", nil)
	client := &http.Client{Timeout: handshakeTimeout / 12, Transport: &http.Transport{Proxy: nil, DisableKeepAlives: true}}
	response, err := client.Do(request)
	if err != nil {
		return fmt.Errorf("private game HTTP is not ready: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode != http.StatusOK || response.ContentLength <= 0 {
		return fmt.Errorf("private game assets not ready: HTTP %d", response.StatusCode)
	}
	return nil
}

func (g *gateway) originAllowed(r *http.Request) bool {
	origin := r.Header.Get("Origin")
	if origin == "" {
		return true
	} // Non-browser clients still need a valid ticket.
	parsed, err := url.Parse(origin)
	return err == nil && (parsed.Host == r.Host || g.config.allowedOrigins[origin])
}

func (g *gateway) authorized(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if !authorized(r, g.config.adminToken) {
			writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "provide CS16_ADMIN_TOKEN in the Authorization Bearer header"})
			return
		}
		next(w, r)
	}
}

func (g *gateway) status(w http.ResponseWriter, r *http.Request) {
	target, endpointErr := g.endpoint(r.Context())
	readyErr := g.ready(r.Context())
	result := map[string]any{"configuredMap": g.config.mapName, "maxPlayers": g.config.maxPlayers,
		"activeSessions": len(g.slots), "backendHTTPReady": readyErr == nil,
		"tcpProxyReady": endpointErr == nil, "gameQueryVerified": false}
	if endpointErr == nil {
		result["endpoint"] = target
	} else {
		result["tcpProxyError"] = endpointErr.Error()
	}
	if readyErr != nil {
		result["backendError"] = readyErr.Error()
	}
	writeJSON(w, http.StatusOK, result)
}

func (g *gateway) issueSession(w http.ResponseWriter, r *http.Request) {
	target, err := g.endpoint(r.Context())
	if err != nil {
		writeJSON(w, 503, map[string]string{"error": err.Error()})
		return
	}
	if err := g.ready(r.Context()); err != nil {
		writeJSON(w, 503, map[string]string{"error": err.Error()})
		return
	}
	ticket, err := g.tickets.issue()
	if err != nil {
		writeJSON(w, 429, map[string]string{"error": err.Error()})
		return
	}
	writeJSON(w, 200, map[string]any{"websocketPath": "/cs16/dust2/websocket?ticket=" + url.QueryEscape(ticket),
		"endpoint": target, "expiresInSeconds": int(handshakeTimeout.Seconds())})
}

func (g *gateway) websocket(w http.ResponseWriter, r *http.Request) {
	if !g.originAllowed(r) {
		http.Error(w, "origin is not allowed", 403)
		return
	}
	if !websocket.IsWebSocketUpgrade(r) {
		http.Error(w, "WebSocket upgrade required", 400)
		return
	}
	if !g.tickets.consume(r.URL.Query().Get("ticket")) {
		http.Error(w, "session ticket missing, expired, or already used", 401)
		return
	}
	target, err := g.endpoint(r.Context())
	if err != nil {
		http.Error(w, err.Error(), 503)
		return
	}
	select {
	case g.slots <- struct{}{}:
	default:
		http.Error(w, "all gateway slots are occupied", 503)
		return
	}
	defer func() { <-g.slots }()
	upgrader := websocket.Upgrader{CheckOrigin: g.originAllowed, HandshakeTimeout: handshakeTimeout}
	connection, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	connection.SetReadLimit(64 * 1024)
	id := g.sequence.Add(1)
	session := newBridgeSession(g.ctx, id, connection)
	g.sessions.Store(id, session)
	defer func() {
		session.close()
		g.sessions.Delete(id)
		log.Printf("session %d closed: up=%d down=%d dropped=%d", id, session.up.Load(), session.down.Load(), session.dropped.Load())
	}()
	if err := session.serve(g.frontAPI, g.backAPI, target, g.upstream); err != nil {
		// Never include the socket URL/ticket or admin token in logs or errors.
		log.Printf("session %d setup failed: %v", id, err)
		_ = session.clientSocket.send("error", map[string]string{"message": err.Error()})
	} else {
		select {
		case err := <-session.failure:
			log.Printf("session %d ended: %v", id, err)
		default:
		}
	}
}

func (g *gateway) closeSessions() {
	g.sessions.Range(func(_, value any) bool { value.(*bridgeSession).cancel(); return true })
}

func (g *gateway) handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, 200, map[string]string{"status": "gateway-running"})
	})
	mux.HandleFunc("GET /readyz", func(w http.ResponseWriter, r *http.Request) {
		if err := g.ready(r.Context()); err != nil {
			writeJSON(w, 503, map[string]string{"status": "waiting-for-private-game"})
			return
		}
		writeJSON(w, 200, map[string]string{"status": "private-game-http-ready; game-query-not-yet-verified"})
	})
	mux.HandleFunc("GET /api/status", g.authorized(g.status))
	mux.HandleFunc("POST /api/session", g.authorized(g.issueSession))
	mux.HandleFunc("GET /cs16/dust2/websocket", g.websocket)
	mux.HandleFunc("GET /cs16/gamefiles.zip", g.authorized(func(w http.ResponseWriter, r *http.Request) {
		// Deliberately no generic filesystem/reverse proxy: no configs or secrets.
		http.ServeFile(w, r, filepath.Join(g.config.gameDir, "public", "gamefiles.zip"))
	}))
	files, _ := fs.Sub(publicFiles, "public")
	mux.Handle("GET /", http.FileServer(http.FS(files)))
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Referrer-Policy", "no-referrer")
		w.Header().Set("X-Content-Type-Options", "nosniff")
		origin := r.Header.Get("Origin")
		if origin != "" && g.config.allowedOrigins[origin] {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Add("Vary", "Origin")
			w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
			w.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS")
			if r.Method == http.MethodOptions {
				w.WriteHeader(204)
				return
			}
		}
		mux.ServeHTTP(w, r)
	})
}

func newGateway(ctx context.Context, c config, frontAPI *webrtc.API) *gateway {
	slots, _ := strconv.Atoi(c.maxPlayers)
	g := &gateway{config: c, ctx: ctx, frontAPI: frontAPI, backAPI: newBackAPI(), endpoint: publicEndpoint,
		upstream: "ws://127.0.0.1:27016/websocket", tickets: newTickets(), slots: make(chan struct{}, slots)}
	g.ready = g.privateEndpointReady
	return g
}

// Keep HTTP startup budgets aligned with the original diagnostic probe.
func httpServer(port string, handler http.Handler) *http.Server {
	return &http.Server{Addr: ":" + port, Handler: handler, ReadHeaderTimeout: handshakeTimeout,
		ReadTimeout: handshakeTimeout, WriteTimeout: 2 * handshakeTimeout, IdleTimeout: handshakeTimeout}
}
