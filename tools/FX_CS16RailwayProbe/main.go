package main

import (
	"context"
	"embed"
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/pion/webrtc/v4"
)

// Test settings: reference-example ports, with the launcher's 60-second timeout.
const testTimeout = 60 * time.Second

//go:embed public/*
var publicFiles embed.FS

type endpoint struct {
	Host string `json:"host"`
	Port int    `json:"port"`
}

type probe struct {
	api      *webrtc.API
	endpoint func(context.Context) (endpoint, error)
	slots    chan struct{}
}

func env(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}

func publicEndpoint(ctx context.Context) (endpoint, error) {
	host := env("PUBLIC_ICE_HOST", os.Getenv("RAILWAY_TCP_PROXY_DOMAIN"))
	portText := env("PUBLIC_ICE_PORT", os.Getenv("RAILWAY_TCP_PROXY_PORT"))
	port, err := strconv.Atoi(portText)
	if host == "" || err != nil || port < 1 || port > 65535 {
		return endpoint{}, errors.New("enable Railway TCP Proxy on internal port 8443, then redeploy; RAILWAY_TCP_PROXY_DOMAIN and RAILWAY_TCP_PROXY_PORT must be present")
	}
	// ICE candidates need an IP, not the Railway proxy's DNS name. Resolve for
	// each offer so a later DNS change isn't cached for the process lifetime.
	ips, err := net.DefaultResolver.LookupIP(ctx, "ip4", host)
	if err != nil || len(ips) == 0 {
		return endpoint{}, fmt.Errorf("cannot resolve the public ICE host %q to IPv4", host)
	}
	return endpoint{Host: ips[0].String(), Port: port}, nil
}

// Railway maps an internal TCP listener to a different public port. Changing
// just the candidate IP leaves the browser attempting the wrong public port.
func advertiseEndpoint(sdp string, target endpoint) (string, error) {
	if net.ParseIP(target.Host).To4() == nil || target.Port < 1 || target.Port > 65535 {
		return "", errors.New("invalid advertised IPv4 endpoint")
	}
	lines := strings.Split(strings.ReplaceAll(sdp, "\r\n", "\n"), "\n")
	count := 0
	for index, line := range lines {
		if !strings.HasPrefix(line, "a=candidate:") {
			continue
		}
		fields := strings.Fields(line)
		if len(fields) < 10 || !strings.EqualFold(fields[2], "tcp") || !strings.Contains(line, "tcptype passive") {
			return "", errors.New("expected only passive TCP candidates")
		}
		fields[4], fields[5] = target.Host, strconv.Itoa(target.Port)
		lines[index] = strings.Join(fields, " ")
		count++
	}
	if count == 0 {
		return "", errors.New("no passive TCP candidates were gathered")
	}
	return strings.Join(lines, "\r\n"), nil
}

func newAPI(listener net.Listener) (*webrtc.API, func() error) {
	settings := webrtc.SettingEngine{}
	settings.SetNetworkTypes([]webrtc.NetworkType{webrtc.NetworkTypeTCP4})
	if addr, ok := listener.Addr().(*net.TCPAddr); ok && addr.IP.IsLoopback() {
		settings.SetIncludeLoopbackCandidate(true)
	}
	settings.DisableActiveTCP(true)
	mux := webrtc.NewICETCPMux(nil, listener, 8)
	settings.SetICETCPMux(mux)
	return webrtc.NewAPI(webrtc.WithSettingEngine(settings)), mux.Close
}

func writeJSON(w http.ResponseWriter, status int, value any) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(value)
}

func (p *probe) offer(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(r.Context(), testTimeout)
	defer cancel()
	target, err := p.endpoint(ctx)
	if err != nil {
		writeJSON(w, http.StatusServiceUnavailable, map[string]string{"error": err.Error()})
		return
	}
	var offer webrtc.SessionDescription
	r.Body = http.MaxBytesReader(w, r.Body, 64*1024)
	if err := json.NewDecoder(r.Body).Decode(&offer); err != nil || offer.Type != webrtc.SDPTypeOffer {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "expected a WebRTC SDP offer"})
		return
	}
	select {
	case p.slots <- struct{}{}:
	default:
		writeJSON(w, http.StatusTooManyRequests, map[string]string{"error": "test sessions are busy; retry in 60 seconds"})
		return
	}
	pc, err := p.api.NewPeerConnection(webrtc.Configuration{})
	if err != nil {
		<-p.slots
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "could not create the test peer"})
		return
	}
	var once sync.Once
	closePeer := func() { once.Do(func() { _ = pc.Close(); <-p.slots }) }
	timer := time.AfterFunc(testTimeout, closePeer)
	pc.OnConnectionStateChange(func(state webrtc.PeerConnectionState) {
		log.Printf("WebRTC connection: %s", state)
		if state == webrtc.PeerConnectionStateFailed || state == webrtc.PeerConnectionStateClosed {
			timer.Stop()
			go closePeer()
		}
	})
	pc.OnDataChannel(func(channel *webrtc.DataChannel) {
		channel.OnMessage(func(message webrtc.DataChannelMessage) {
			if len(message.Data) > 4096 {
				return
			}
			var sendErr error
			if message.IsString {
				sendErr = channel.SendText(string(message.Data))
			} else {
				sendErr = channel.Send(message.Data)
			}
			if sendErr != nil {
				log.Printf("echo send failed: %v", sendErr)
			}
		})
	})
	fail := func(err error) {
		timer.Stop()
		closePeer()
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": err.Error()})
	}
	if err := pc.SetRemoteDescription(offer); err != nil {
		fail(fmt.Errorf("invalid SDP offer: %w", err))
		return
	}
	gathered := webrtc.GatheringCompletePromise(pc)
	answer, err := pc.CreateAnswer(nil)
	if err != nil {
		fail(err)
		return
	}
	if err := pc.SetLocalDescription(answer); err != nil {
		fail(err)
		return
	}
	select {
	case <-gathered:
	case <-ctx.Done():
		fail(errors.New("TCP candidate gathering timed out"))
		return
	}
	answer = *pc.LocalDescription()
	answer.SDP, err = advertiseEndpoint(answer.SDP, target)
	if err != nil {
		fail(err)
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"answer": answer, "endpoint": target})
}

func (p *probe) handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]string{"status": "running"})
	})
	mux.HandleFunc("GET /config", func(w http.ResponseWriter, r *http.Request) {
		target, err := p.endpoint(r.Context())
		if err != nil {
			writeJSON(w, http.StatusOK, map[string]any{"ready": false, "error": err.Error()})
			return
		}
		writeJSON(w, http.StatusOK, map[string]any{"ready": true, "endpoint": target})
	})
	mux.HandleFunc("POST /offer", p.offer)
	files, _ := fs.Sub(publicFiles, "public")
	mux.Handle("GET /", http.FileServer(http.FS(files)))
	return mux
}

func main() {
	listener, err := net.Listen("tcp4", ":"+env("ICE_TCP_PORT", "8443"))
	if err != nil {
		log.Fatal(err)
	}
	api, closeMux := newAPI(listener)
	defer closeMux()
	// Proposed probe limit: 16 simultaneous sessions, each expires after 60s.
	p := &probe{api: api, endpoint: publicEndpoint, slots: make(chan struct{}, 16)}
	server := &http.Server{
		Addr: ":" + env("PORT", "8080"), Handler: p.handler(),
		ReadHeaderTimeout: testTimeout, ReadTimeout: testTimeout,
		WriteTimeout: 2 * testTimeout, IdleTimeout: testTimeout,
	}
	log.Printf("FX_CS16 probe HTTP %s; ICE-TCP %s", server.Addr, listener.Addr())
	log.Fatal(server.ListenAndServe())
}
