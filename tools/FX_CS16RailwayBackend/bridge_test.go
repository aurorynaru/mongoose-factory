package main

import (
	"bytes"
	"context"
	"encoding/binary"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/gorilla/websocket"
	"github.com/pion/webrtc/v4"
)

// Synthetic private backend with the pinned server's channel/signaling contract.
// Its prefixed echo verifies the bridge, not CS gameplay or game availability.
func syntheticBackend(t *testing.T) (*httptest.Server, *atomic.Int64) {
	t.Helper()
	api := newBackAPI()
	var sequence atomic.Uint64
	active := &atomic.Int64{}
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		connection, err := (&websocket.Upgrader{}).Upgrade(w, r, nil)
		if err != nil {
			return
		}
		defer connection.Close()
		pc, err := api.NewPeerConnection(webrtc.Configuration{})
		if err != nil {
			return
		}
		defer pc.Close()
		id := sequence.Add(1)
		active.Add(1)
		defer active.Add(-1)
		ordered, retries := false, uint16(0)
		options := &webrtc.DataChannelInit{Ordered: &ordered, MaxRetransmits: &retries}
		read, _ := pc.CreateDataChannel("read", options)
		write, _ := pc.CreateDataChannel("write", options)
		read.OnMessage(func(message webrtc.DataChannelMessage) {
			packet := make([]byte, 8+len(message.Data))
			binary.LittleEndian.PutUint64(packet, id)
			copy(packet[8:], message.Data)
			_ = write.Send(packet)
		})
		socket := &signalSocket{conn: connection}
		sendOffer := func() error {
			gathered := webrtc.GatheringCompletePromise(pc)
			offer, err := pc.CreateOffer(nil)
			if err != nil {
				return err
			}
			if err := pc.SetLocalDescription(offer); err != nil {
				return err
			}
			select {
			case <-gathered:
			case <-time.After(handshakeTimeout):
				return errors.New("synthetic backend gather timeout")
			}
			return socket.send("offer", pc.LocalDescription())
		}
		if err := sendOffer(); err != nil {
			return
		}
		answers := 0
		for {
			var message signalMessage
			if err := connection.ReadJSON(&message); err != nil {
				return
			}
			if message.Event == "answer" {
				var answer webrtc.SessionDescription
				if json.Unmarshal(message.Data, &answer) != nil || pc.SetRemoteDescription(answer) != nil {
					return
				}
				answers++
				// The pinned backend renegotiates repeatedly; exercise that behavior.
				if answers < 2 {
					if err := sendOffer(); err != nil {
						return
					}
				}
			}
		}
	}))
	t.Cleanup(server.Close)
	return server, active
}

type testGateway struct {
	gateway          *gateway
	http             *httptest.Server
	proxyConnections *atomic.Int64
}

func startTestGateway(t *testing.T, upstream string) testGateway {
	t.Helper()
	ctx, cancel := context.WithCancel(context.Background())
	t.Cleanup(cancel)
	listener, err := net.Listen("tcp4", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	api, closeMux := newFrontAPI(listener)
	t.Cleanup(func() { _ = closeMux() })
	proxy, err := net.Listen("tcp4", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	var lock sync.Mutex
	var connections []net.Conn
	accepted := &atomic.Int64{}
	acceptDone := make(chan struct{})
	go func() {
		defer close(acceptDone)
		for {
			front, err := proxy.Accept()
			if err != nil {
				return
			}
			back, err := net.Dial("tcp4", listener.Addr().String())
			if err != nil {
				_ = front.Close()
				return
			}
			accepted.Add(1)
			lock.Lock()
			connections = append(connections, front, back)
			lock.Unlock()
			go func() { _, _ = io.Copy(front, back) }()
			go func() { _, _ = io.Copy(back, front) }()
		}
	}()
	t.Cleanup(func() {
		_ = proxy.Close()
		<-acceptDone
		lock.Lock()
		defer lock.Unlock()
		for _, connection := range connections {
			_ = connection.Close()
		}
	})
	c := config{adminToken: testAdminToken, mapName: "de_dust2", maxPlayers: "16", allowedOrigins: make(map[string]bool)}
	g := newGateway(ctx, c, api)
	g.endpoint = func(context.Context) (endpoint, error) {
		return endpoint{Host: "127.0.0.1", Port: proxy.Addr().(*net.TCPAddr).Port}, nil
	}
	g.upstream = upstream
	g.ready = func(context.Context) error { return nil }
	server := httptest.NewServer(g.handler())
	t.Cleanup(func() { cancel(); g.closeSessions(); server.Close() })
	return testGateway{gateway: g, http: server, proxyConnections: accepted}
}

type gameTestClient struct {
	peer                *webrtc.PeerConnection
	socket              *websocket.Conn
	send                *webrtc.DataChannel
	packets             chan []byte
	ready               chan struct{}
	failures            chan error
	mu                  sync.Mutex
	readOpen, writeOpen bool
	once                sync.Once
	target              endpoint
}

func (c *gameTestClient) close() { _ = c.socket.Close(); _ = c.peer.Close() }

func openTestClient(t *testing.T, deployment testGateway) *gameTestClient {
	t.Helper()
	request, _ := http.NewRequest(http.MethodPost, deployment.http.URL+"/api/session", nil)
	request.Header.Set("Authorization", "Bearer "+testAdminToken)
	response, err := (&http.Client{Timeout: handshakeTimeout}).Do(request)
	if err != nil {
		t.Fatal(err)
	}
	var session struct {
		WebSocketPath string   `json:"websocketPath"`
		Endpoint      endpoint `json:"endpoint"`
	}
	err = json.NewDecoder(response.Body).Decode(&session)
	response.Body.Close()
	if err != nil || response.StatusCode != 200 {
		t.Fatalf("session issuance: HTTP %d error=%v", response.StatusCode, err)
	}
	connection, _, err := websocket.DefaultDialer.Dial(strings.Replace(deployment.http.URL, "http", "ws", 1)+session.WebSocketPath, nil)
	if err != nil {
		t.Fatal(err)
	}
	settings := webrtc.SettingEngine{}
	settings.SetNetworkTypes([]webrtc.NetworkType{webrtc.NetworkTypeTCP4, webrtc.NetworkTypeUDP4})
	settings.SetIncludeLoopbackCandidate(true)
	clientListener, err := net.Listen("tcp4", "127.0.0.1:0")
	if err != nil {
		t.Fatal(err)
	}
	mux := webrtc.NewICETCPMux(nil, clientListener, 8)
	t.Cleanup(func() { _ = mux.Close() })
	settings.SetICETCPMux(mux)
	peer, err := webrtc.NewAPI(webrtc.WithSettingEngine(settings)).NewPeerConnection(webrtc.Configuration{})
	if err != nil {
		t.Fatal(err)
	}
	client := &gameTestClient{peer: peer, socket: connection, packets: make(chan []byte, 32), ready: make(chan struct{}), failures: make(chan error, 4), target: session.Endpoint}
	t.Cleanup(client.close)
	fail := func(err error) {
		select {
		case client.failures <- err:
		default:
		}
	}
	peer.OnDataChannel(func(channel *webrtc.DataChannel) {
		client.mu.Lock()
		if channel.Label() == "read" {
			client.send = channel
		}
		client.mu.Unlock()
		if channel.Label() == "write" {
			channel.OnMessage(func(message webrtc.DataChannelMessage) {
				if message.IsString {
					fail(errors.New("text packet received"))
					return
				}
				client.packets <- append([]byte(nil), message.Data...)
			})
		}
		channel.OnOpen(func() {
			client.mu.Lock()
			defer client.mu.Unlock()
			if channel.Label() == "read" {
				client.readOpen = true
			} else if channel.Label() == "write" {
				client.writeOpen = true
			}
			if client.readOpen && client.writeOpen {
				client.once.Do(func() { close(client.ready) })
			}
		})
	})
	go func() {
		for {
			var message signalMessage
			if err := connection.ReadJSON(&message); err != nil {
				fail(errors.New("test browser socket closed"))
				return
			}
			if message.Event == "error" {
				fail(errors.New(string(message.Data)))
				return
			}
			if message.Event != "offer" {
				continue
			}
			var offer webrtc.SessionDescription
			if err := json.Unmarshal(message.Data, &offer); err != nil {
				fail(err)
				return
			}
			if !strings.Contains(offer.SDP, fmt.Sprintf("127.0.0.1 %d typ host tcptype passive", session.Endpoint.Port)) {
				fail(errors.New("offer did not advertise the forwarder's public TCP endpoint"))
				return
			}
			if err := peer.SetRemoteDescription(offer); err != nil {
				fail(err)
				return
			}
			gathered := webrtc.GatheringCompletePromise(peer)
			answer, err := peer.CreateAnswer(nil)
			if err != nil {
				fail(err)
				return
			}
			if err := peer.SetLocalDescription(answer); err != nil {
				fail(err)
				return
			}
			select {
			case <-gathered:
			case <-time.After(handshakeTimeout):
				fail(errors.New("test browser gather timeout"))
				return
			}
			if err := (&signalSocket{conn: connection}).send("answer", peer.LocalDescription()); err != nil {
				fail(err)
				return
			}
		}
	}()
	select {
	case <-client.ready:
		return client
	case err := <-client.failures:
		t.Fatal(err)
	case <-time.After(handshakeTimeout):
		t.Fatal("browser data channels did not open")
	}
	return nil
}

func receivePacket(t *testing.T, client *gameTestClient) []byte {
	t.Helper()
	select {
	case packet := <-client.packets:
		return packet
	case err := <-client.failures:
		t.Fatal(err)
	case <-time.After(handshakeTimeout):
		t.Fatal("no game packet returned")
	}
	return nil
}

func TestBridgePreservesBinaryPacketsAndIsolatesClients(t *testing.T) {
	backend, active := syntheticBackend(t)
	deployment := startTestGateway(t, strings.Replace(backend.URL, "http", "ws", 1))
	first := openTestClient(t, deployment)
	second := openTestClient(t, deployment)
	firstPayload, secondPayload := []byte{0, 255, 10, 11, 0}, []byte{2, 255, 0, 13}
	if err := first.send.Send(firstPayload); err != nil {
		t.Fatal(err)
	}
	if err := second.send.Send(secondPayload); err != nil {
		t.Fatal(err)
	}
	firstReply, secondReply := receivePacket(t, first), receivePacket(t, second)
	if len(firstReply) < 8 || len(secondReply) < 8 || !bytes.Equal(firstReply[8:], firstPayload) || !bytes.Equal(secondReply[8:], secondPayload) {
		t.Fatal("binary packet corruption or session cross-talk")
	}
	if bytes.Equal(firstReply[:8], secondReply[:8]) {
		t.Fatal("browser clients shared the same private backend connection")
	}
	if deployment.proxyConnections.Load() < 2 || active.Load() != 2 {
		t.Fatal("test bypassed TCP proxy or did not create separate native-side sessions")
	}
	// Inspect selected ICE transport, rather than assuming the SDP was selected.
	pair, err := first.peer.SCTP().Transport().ICETransport().GetSelectedCandidatePair()
	if err != nil || pair == nil || pair.Remote.Protocol != webrtc.ICEProtocolTCP || int(pair.Remote.Port) != first.target.Port {
		t.Fatalf("selected public-side transport was not the expected TCP proxy: pair=%+v err=%v", pair, err)
	}
	first.close()
	second.close()
	deadline := time.Now().Add(handshakeTimeout / 12)
	for time.Now().Before(deadline) {
		if len(deployment.gateway.slots) == 0 && active.Load() == 0 {
			t.Log("two isolated binary sessions passed through public TCP and private UDP; cleanup released all slots")
			return
		}
		time.Sleep(10 * time.Millisecond)
	}
	t.Fatal("disconnect did not release native peers and gateway slots")
}

func TestPublicRoutesRequireAdmissionAndDoNotExposeRuntimeFiles(t *testing.T) {
	g := newGateway(context.Background(), config{adminToken: testAdminToken, maxPlayers: "16", allowedOrigins: make(map[string]bool)}, nil)
	g.endpoint = func(context.Context) (endpoint, error) { return endpoint{Host: "127.0.0.1", Port: 12345}, nil }
	g.ready = func(context.Context) error { return errors.New("test backend unavailable") }
	for _, check := range []struct {
		method, path string
		status       int
	}{
		{"GET", "/healthz", 200}, {"GET", "/readyz", 503}, {"POST", "/api/session", 401},
		{"GET", "/api/status", 401}, {"GET", "/cs16/gamefiles.zip", 401}, {"GET", "/cstrike/server.cfg", 404},
	} {
		response := httptest.NewRecorder()
		g.handler().ServeHTTP(response, httptest.NewRequest(check.method, check.path, nil))
		if response.Code != check.status {
			t.Fatalf("%s %s returned %d", check.method, check.path, response.Code)
		}
	}
	request := httptest.NewRequest("POST", "/api/session", nil)
	request.Header.Set("Authorization", "Bearer "+testAdminToken)
	response := httptest.NewRecorder()
	g.handler().ServeHTTP(response, request)
	if response.Code != 503 || len(g.tickets.values) != 0 {
		t.Fatal("issued a session for an unavailable backend")
	}
}

func TestOriginAllowlistAndBoundedPacketQueues(t *testing.T) {
	g := &gateway{config: config{allowedOrigins: map[string]bool{"https://allowed.example": true}}}
	request := httptest.NewRequest("GET", "https://backend.example/cs16/dust2/websocket", nil)
	for origin, expected := range map[string]bool{"https://backend.example": true, "https://allowed.example": true, "https://other.example": false} {
		request.Header.Set("Origin", origin)
		if g.originAllowed(request) != expected {
			t.Fatal("origin allowlist mismatch")
		}
	}
	queue := make(chan []byte, 1)
	var dropped atomic.Uint64
	first := []byte{1, 2}
	enqueue(queue, first, &dropped)
	first[0] = 99
	if (<-queue)[0] != 1 {
		t.Fatal("queued packet aliases caller's mutable buffer")
	}
	enqueue(queue, []byte{3}, &dropped)
	enqueue(queue, []byte{4}, &dropped)
	if (<-queue)[0] != 4 || dropped.Load() != 1 {
		t.Fatal("backpressure did not retain the latest packet")
	}
	enqueue(queue, make([]byte, maxPacketSize+1), &dropped)
	if len(queue) != 0 || dropped.Load() != 2 {
		t.Fatal("oversized game packet accepted")
	}
}
