package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"sync"
	"sync/atomic"
	"time"

	"github.com/gorilla/websocket"
	"github.com/pion/webrtc/v4"
)

type signalMessage struct {
	Event string          `json:"event"`
	Data  json.RawMessage `json:"data"`
}

type signalSocket struct {
	conn *websocket.Conn
	mu   sync.Mutex
}

func (s *signalSocket) send(event string, data any) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	_ = s.conn.SetWriteDeadline(time.Now().Add(handshakeTimeout))
	return s.conn.WriteJSON(struct {
		Event string `json:"event"`
		Data  any    `json:"data"`
	}{event, data})
}

func (s *signalSocket) keepAlive(ctx context.Context, fail func(error)) {
	ticker := time.NewTicker(handshakeTimeout / 2)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			if err := s.conn.WriteControl(websocket.PingMessage, nil, time.Now().Add(handshakeTimeout)); err != nil {
				fail(err)
				return
			}
		}
	}
}

type bridgeSession struct {
	id                       uint64
	ctx                      context.Context
	cancel                   context.CancelFunc
	front, back              *webrtc.PeerConnection
	clientSocket, gameSocket *signalSocket
	toGame, toBrowser        chan []byte
	gameReady, browserReady  chan struct{}
	readyOnce                sync.Once
	gameLock                 sync.Mutex
	gameRead, gameWrite      *webrtc.DataChannel
	readOpen, writeOpen      bool
	frontRead, frontWrite    *webrtc.DataChannel
	up, down, dropped        atomic.Uint64
	failure                  chan error
}

func (s *bridgeSession) fail(err error) {
	if err == nil {
		err = errors.New("session closed")
	}
	select {
	case s.failure <- err:
	default:
	}
	s.cancel()
}

func enqueue(queue chan []byte, data []byte, dropped *atomic.Uint64) {
	if len(data) > maxPacketSize {
		dropped.Add(1)
		return
	}
	packet := append([]byte(nil), data...)
	select {
	case queue <- packet:
		return
	default:
		select {
		case <-queue:
			dropped.Add(1)
		default:
		}
		select {
		case queue <- packet:
		default:
			dropped.Add(1)
		}
	}
}

func (s *bridgeSession) forward(queue <-chan []byte, ready <-chan struct{}, target func() *webrtc.DataChannel, sent *atomic.Uint64) {
	select {
	case <-s.ctx.Done():
		return
	case <-ready:
	}
	for {
		select {
		case <-s.ctx.Done():
			return
		case packet := <-queue:
			channel := target()
			if channel == nil || channel.ReadyState() != webrtc.DataChannelStateOpen {
				s.fail(errors.New("game data channel is not open"))
				return
			}
			if channel.BufferedAmount() > maxBufferedBytes {
				s.dropped.Add(1)
				continue
			}
			if err := channel.Send(packet); err != nil {
				s.fail(fmt.Errorf("forward game packet: %w", err))
				return
			}
			sent.Add(1)
		}
	}
}

func (s *bridgeSession) watchConnection(pc *webrtc.PeerConnection, side string) {
	pc.OnConnectionStateChange(func(state webrtc.PeerConnectionState) {
		log.Printf("session %d %s WebRTC: %s", s.id, side, state)
		if state == webrtc.PeerConnectionStateFailed || state == webrtc.PeerConnectionStateClosed {
			s.fail(fmt.Errorf("%s connection %s", side, state))
		}
	})
}

func (s *bridgeSession) attachGameChannels() {
	s.back.OnDataChannel(func(channel *webrtc.DataChannel) {
		s.gameLock.Lock()
		switch channel.Label() {
		case "read":
			if s.gameRead != nil {
				s.gameLock.Unlock()
				s.fail(errors.New("duplicate game read channel"))
				return
			}
			s.gameRead = channel
		case "write":
			if s.gameWrite != nil {
				s.gameLock.Unlock()
				s.fail(errors.New("duplicate game write channel"))
				return
			}
			s.gameWrite = channel
			channel.OnMessage(func(message webrtc.DataChannelMessage) {
				if message.IsString {
					s.fail(errors.New("game sent a text packet; binary required"))
					return
				}
				enqueue(s.toBrowser, message.Data, &s.dropped)
			})
		default:
			s.gameLock.Unlock()
			s.fail(errors.New("unknown private backend channel"))
			return
		}
		s.gameLock.Unlock()
		channel.OnOpen(func() {
			s.gameLock.Lock()
			defer s.gameLock.Unlock()
			if channel.Label() == "read" {
				s.readOpen = true
			} else {
				s.writeOpen = true
			}
			if s.readOpen && s.writeOpen {
				s.readyOnce.Do(func() { close(s.gameReady) })
			}
		})
		channel.OnClose(func() { s.fail(errors.New("private game channel closed")) })
	})
}

func (s *bridgeSession) readGameSignals() {
	var pending []webrtc.ICECandidateInit
	for {
		var message signalMessage
		if err := s.gameSocket.conn.ReadJSON(&message); err != nil {
			s.fail(fmt.Errorf("private backend signaling: %w", err))
			return
		}
		switch message.Event {
		case "candidate":
			var candidate webrtc.ICECandidateInit
			if err := json.Unmarshal(message.Data, &candidate); err != nil {
				s.fail(err)
				return
			}
			if s.back.RemoteDescription() == nil {
				if len(pending) >= 128 {
					s.fail(errors.New("too many private ICE candidates"))
					return
				}
				pending = append(pending, candidate)
			} else if err := s.back.AddICECandidate(candidate); err != nil {
				s.fail(err)
				return
			}
		case "offer":
			var offer webrtc.SessionDescription
			if err := json.Unmarshal(message.Data, &offer); err != nil {
				s.fail(err)
				return
			}
			if err := s.back.SetRemoteDescription(offer); err != nil {
				s.fail(err)
				return
			}
			for _, candidate := range pending {
				if err := s.back.AddICECandidate(candidate); err != nil {
					s.fail(err)
					return
				}
			}
			pending = nil
			gathered := webrtc.GatheringCompletePromise(s.back)
			answer, err := s.back.CreateAnswer(nil)
			if err != nil {
				s.fail(err)
				return
			}
			if err := s.back.SetLocalDescription(answer); err != nil {
				s.fail(err)
				return
			}
			select {
			case <-s.ctx.Done():
				return
			case <-time.After(handshakeTimeout):
				s.fail(errors.New("private UDP candidate gathering timed out"))
				return
			case <-gathered:
			}
			if err := s.gameSocket.send("answer", s.back.LocalDescription()); err != nil {
				s.fail(err)
				return
			}
		default:
			s.fail(fmt.Errorf("unsupported private signal %q", message.Event))
			return
		}
	}
}

func (s *bridgeSession) readBrowserSignals() {
	var pending []webrtc.ICECandidateInit
	for {
		var message signalMessage
		if err := s.clientSocket.conn.ReadJSON(&message); err != nil {
			s.fail(errors.New("browser signaling closed"))
			return
		}
		switch message.Event {
		case "candidate":
			var candidate webrtc.ICECandidateInit
			if err := json.Unmarshal(message.Data, &candidate); err != nil {
				s.fail(err)
				return
			}
			if s.front.RemoteDescription() == nil {
				if len(pending) >= 128 {
					s.fail(errors.New("too many browser candidates"))
					return
				}
				pending = append(pending, candidate)
			} else if err := s.front.AddICECandidate(candidate); err != nil {
				s.fail(err)
				return
			}
		case "answer":
			var answer webrtc.SessionDescription
			if err := json.Unmarshal(message.Data, &answer); err != nil {
				s.fail(err)
				return
			}
			if s.front.RemoteDescription() != nil {
				s.fail(errors.New("unexpected repeated browser answer"))
				return
			}
			if err := s.front.SetRemoteDescription(answer); err != nil {
				s.fail(err)
				return
			}
			for _, candidate := range pending {
				if err := s.front.AddICECandidate(candidate); err != nil {
					s.fail(err)
					return
				}
			}
			pending = nil
		default:
			s.fail(errors.New("unsupported browser signaling event"))
			return
		}
	}
}

func (s *bridgeSession) close() {
	s.cancel()
	if s.clientSocket != nil {
		_ = s.clientSocket.conn.Close()
	}
	if s.gameSocket != nil {
		_ = s.gameSocket.conn.Close()
	}
	if s.front != nil {
		_ = s.front.Close()
	}
	if s.back != nil {
		_ = s.back.Close()
	}
}

func (s *bridgeSession) serve(frontAPI, backAPI *webrtc.API, target endpoint, upstream string) error {
	var err error
	s.front, err = frontAPI.NewPeerConnection(webrtc.Configuration{})
	if err != nil {
		return err
	}
	s.back, err = backAPI.NewPeerConnection(webrtc.Configuration{})
	if err != nil {
		return err
	}
	s.watchConnection(s.front, "browser TCP")
	s.watchConnection(s.back, "private game UDP")
	s.attachGameChannels()
	dialer := websocket.Dialer{HandshakeTimeout: handshakeTimeout, Proxy: nil}
	dialCtx, cancelDial := context.WithTimeout(s.ctx, handshakeTimeout)
	gameConn, response, err := dialer.DialContext(dialCtx, upstream, nil)
	cancelDial()
	if response != nil && response.Body != nil {
		_ = response.Body.Close()
	}
	if err != nil {
		return fmt.Errorf("connect private game signaling: %w", err)
	}
	s.gameSocket = &signalSocket{conn: gameConn}
	gameConn.SetReadLimit(64 * 1024)
	go s.readGameSignals()
	go s.gameSocket.keepAlive(s.ctx, s.fail)
	select {
	case <-s.ctx.Done():
		return errors.New("private game connection closed during setup")
	case <-time.After(handshakeTimeout):
		return errors.New("private game data channels did not open in 60 seconds")
	case <-s.gameReady:
	}
	ordered, retransmits := false, uint16(0)
	options := &webrtc.DataChannelInit{Ordered: &ordered, MaxRetransmits: &retransmits}
	s.frontRead, err = s.front.CreateDataChannel("read", options)
	if err != nil {
		return err
	}
	s.frontWrite, err = s.front.CreateDataChannel("write", options)
	if err != nil {
		return err
	}
	s.frontRead.OnMessage(func(message webrtc.DataChannelMessage) {
		if message.IsString {
			s.fail(errors.New("browser game packets must be binary"))
			return
		}
		enqueue(s.toGame, message.Data, &s.dropped)
	})
	s.frontWrite.OnOpen(func() { close(s.browserReady) })
	s.frontRead.OnClose(func() { s.fail(errors.New("browser read channel closed")) })
	s.frontWrite.OnClose(func() { s.fail(errors.New("browser write channel closed")) })
	go s.forward(s.toGame, s.gameReady, func() *webrtc.DataChannel { s.gameLock.Lock(); defer s.gameLock.Unlock(); return s.gameRead }, &s.up)
	go s.forward(s.toBrowser, s.browserReady, func() *webrtc.DataChannel { return s.frontWrite }, &s.down)
	gathered := webrtc.GatheringCompletePromise(s.front)
	offer, err := s.front.CreateOffer(nil)
	if err != nil {
		return err
	}
	if err := s.front.SetLocalDescription(offer); err != nil {
		return err
	}
	select {
	case <-s.ctx.Done():
		return errors.New("session stopped during TCP gathering")
	case <-time.After(handshakeTimeout):
		return errors.New("TCP gathering timed out")
	case <-gathered:
	}
	offer = *s.front.LocalDescription()
	offer.SDP, err = advertiseEndpoint(offer.SDP, target)
	if err != nil {
		return err
	}
	if err := s.clientSocket.send("offer", offer); err != nil {
		return err
	}
	go s.readBrowserSignals()
	go s.clientSocket.keepAlive(s.ctx, s.fail)
	select {
	case <-s.ctx.Done():
		return nil
	case <-time.After(handshakeTimeout):
		return errors.New("browser TCP data-channel setup timed out")
	case <-s.browserReady:
	}
	<-s.ctx.Done()
	return nil
}

func newBridgeSession(parent context.Context, id uint64, browser *websocket.Conn) *bridgeSession {
	ctx, cancel := context.WithCancel(parent)
	return &bridgeSession{id: id, ctx: ctx, cancel: cancel, clientSocket: &signalSocket{conn: browser},
		toGame: make(chan []byte, packetQueueSize), toBrowser: make(chan []byte, packetQueueSize),
		gameReady: make(chan struct{}), browserReady: make(chan struct{}), failure: make(chan error, 1)}
}
