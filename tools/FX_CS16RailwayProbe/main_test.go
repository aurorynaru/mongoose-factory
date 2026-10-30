package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"io"
	"net"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"sync/atomic"
	"testing"

	"github.com/pion/webrtc/v4"
)

func TestAdvertiseEndpoint(t *testing.T) {
	input := "v=0\r\na=candidate:1 1 tcp 1234 10.0.0.2 8443 typ host tcptype passive\r\na=end-of-candidates\r\n"
	got, err := advertiseEndpoint(input, endpoint{Host: "198.51.100.10", Port: 15140})
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, "198.51.100.10 15140 typ host tcptype passive") || strings.Contains(got, "10.0.0.2 8443") {
		t.Fatalf("public address and port were not both rewritten: %s", got)
	}
	if !strings.HasSuffix(got, "\r\n") || !strings.Contains(got, "a=end-of-candidates\r\n") {
		t.Fatal("SDP structure was not preserved")
	}
}

func TestRejectUnusableCandidates(t *testing.T) {
	for _, sdp := range []string{
		"v=0\r\n",
		"a=candidate:1 1 udp 1234 10.0.0.2 8443 typ host\r\n",
		"a=candidate:1 1 tcp 1234 10.0.0.2 9 typ host tcptype active\r\n",
	} {
		if _, err := advertiseEndpoint(sdp, endpoint{Host: "198.51.100.10", Port: 15140}); err == nil {
			t.Errorf("accepted an unusable candidate: %q", sdp)
		}
	}
}

func TestMissingRailwayConfiguration(t *testing.T) {
	for _, key := range []string{"PUBLIC_ICE_HOST", "PUBLIC_ICE_PORT", "RAILWAY_TCP_PROXY_DOMAIN", "RAILWAY_TCP_PROXY_PORT"} {
		t.Setenv(key, "")
	}
	if _, err := publicEndpoint(context.Background()); err == nil {
		t.Fatal("missing TCP proxy must not silently advertise a private address")
	}
}

func TestHealthIsSeparateFromProxyReadiness(t *testing.T) {
	p := &probe{endpoint: func(context.Context) (endpoint, error) {
		return endpoint{}, errors.New("TCP proxy not configured")
	}}
	for _, check := range []struct {
		method, path string
		status       int
		body         string
	}{
		{"GET", "/healthz", 200, `"status":"running"`},
		{"GET", "/config", 200, `"ready":false`},
		{"POST", "/offer", 503, "TCP proxy not configured"},
	} {
		response := httptest.NewRecorder()
		p.handler().ServeHTTP(response, httptest.NewRequest(check.method, check.path, nil))
		if response.Code != check.status || !strings.Contains(response.Body.String(), check.body) {
			t.Fatalf("%s %s: %d %s", check.method, check.path, response.Code, response.Body.String())
		}
	}
}

// This reproduces the important proxy behavior locally: the browser-facing
// TCP port differs from the actual ICE listener. A binary payload must cross
// that proxy, complete ICE/DTLS/SCTP, and return through the data channel.
func TestTCPDataChannelThroughDifferentProxyPort(t *testing.T) {
	listener, err := net.Listen("tcp4", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	api, closeMux := newAPI(listener)
	t.Cleanup(func() { _ = closeMux() })
	proxyListener, err := net.Listen("tcp4", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	var accepted atomic.Int32
	var connectionLock sync.Mutex
	var proxyConnections []net.Conn
	t.Cleanup(func() {
		_ = proxyListener.Close()
		connectionLock.Lock()
		defer connectionLock.Unlock()
		for _, connection := range proxyConnections {
			_ = connection.Close()
		}
	})
	go func() {
		for {
			front, err := proxyListener.Accept()
			if err != nil {
				return
			}
			back, err := net.Dial("tcp4", listener.Addr().String())
			if err != nil {
				_ = front.Close()
				return
			}
			accepted.Add(1)
			connectionLock.Lock()
			proxyConnections = append(proxyConnections, front, back)
			connectionLock.Unlock()
			go func() { _, _ = io.Copy(back, front) }()
			go func() { _, _ = io.Copy(front, back) }()
		}
	}()
	publicPort := proxyListener.Addr().(*net.TCPAddr).Port
	p := &probe{api: api, slots: make(chan struct{}, 16), endpoint: func(context.Context) (endpoint, error) {
		return endpoint{Host: "127.0.0.1", Port: publicPort}, nil
	}}
	httpServer := httptest.NewServer(p.handler())
	t.Cleanup(httpServer.Close)
	clientSettings := webrtc.SettingEngine{}
	clientSettings.SetNetworkTypes([]webrtc.NetworkType{webrtc.NetworkTypeTCP4, webrtc.NetworkTypeUDP4})
	clientSettings.SetIncludeLoopbackCandidate(true)
	clientListener, err := net.Listen("tcp4", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	clientMux := webrtc.NewICETCPMux(nil, clientListener, 8)
	t.Cleanup(func() { _ = clientMux.Close() })
	clientSettings.SetICETCPMux(clientMux)
	clientAPI := webrtc.NewAPI(webrtc.WithSettingEngine(clientSettings))
	client, err := clientAPI.NewPeerConnection(webrtc.Configuration{})
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() { _ = client.Close() })
	ordered, retries := false, uint16(0)
	channel, err := client.CreateDataChannel("FX_CS16_probe", &webrtc.DataChannelInit{Ordered: &ordered, MaxRetransmits: &retries})
	if err != nil {
		t.Fatal(err)
	}
	payload := []byte{0, 255, 1, 2, 127, 0, 19}
	received := make(chan webrtc.DataChannelMessage, 1)
	channel.OnMessage(func(message webrtc.DataChannelMessage) { received <- message })
	channel.OnOpen(func() { _ = channel.Send(payload) })
	gathered := webrtc.GatheringCompletePromise(client)
	offer, err := client.CreateOffer(nil)
	if err != nil {
		t.Fatal(err)
	}
	if err := client.SetLocalDescription(offer); err != nil {
		t.Fatal(err)
	}
	ctx, cancel := context.WithTimeout(context.Background(), testTimeout)
	defer cancel()
	select {
	case <-gathered:
	case <-ctx.Done():
		t.Fatal("client candidate gathering timed out")
	}
	body, _ := json.Marshal(client.LocalDescription())
	httpClient := &http.Client{Timeout: testTimeout}
	response, err := httpClient.Post(httpServer.URL+"/offer", "application/json", bytes.NewReader(body))
	if err != nil {
		t.Fatal(err)
	}
	defer response.Body.Close()
	var reply struct {
		Answer webrtc.SessionDescription `json:"answer"`
	}
	if err := json.NewDecoder(response.Body).Decode(&reply); err != nil || response.StatusCode != 200 {
		t.Fatalf("signaling failed: HTTP %d, %v", response.StatusCode, err)
	}
	if err := client.SetRemoteDescription(reply.Answer); err != nil {
		t.Fatal(err)
	}
	select {
	case message := <-received:
		if message.IsString || !bytes.Equal(message.Data, payload) || accepted.Load() == 0 {
			t.Fatalf("binary payload did not echo through the TCP proxy: %+v", message)
		}
		t.Logf("binary WebRTC echo passed through TCP proxy port %d to internal port %d", publicPort, listener.Addr().(*net.TCPAddr).Port)
	case <-ctx.Done():
		t.Fatalf("no data-channel echo; state=%s; proxy connections=%d", client.ConnectionState(), accepted.Load())
	}
}
