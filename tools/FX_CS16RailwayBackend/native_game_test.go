package main

import (
	"bytes"
	"context"
	"net"
	"os"
	"runtime"
	"strings"
	"testing"
	"time"
)

func gameInfoQuery() []byte {
	return append([]byte{255, 255, 255, 255}, []byte("info 49\n\x00")...)
}

func parseGameInfo(packet []byte) (name, mapName, folder string, ok bool) {
	if len(packet) < 6 || !bytes.Equal(packet[:4], []byte{255, 255, 255, 255}) {
		return
	}
	if text := strings.TrimRight(string(packet[4:]), "\x00"); strings.HasPrefix(text, "info\n") {
		parts := strings.Split(strings.TrimPrefix(text, "info\n"), "\\")
		fields := make(map[string]string)
		for i := 1; i+1 < len(parts); i += 2 {
			fields[parts[i]] = parts[i+1]
		}
		name, mapName, folder = fields["host"], fields["map"], fields["gamedir"]
		return name, mapName, folder, name != "" && mapName != "" && folder == "cstrike" && fields["p"] == "49"
	}
	position := 5
	if packet[4] == 'I' {
		position = 6
	} else if packet[4] != 'm' {
		return
	}
	read := func() (string, bool) {
		if position >= len(packet) {
			return "", false
		}
		n := bytes.IndexByte(packet[position:], 0)
		if n < 0 {
			return "", false
		}
		value := string(packet[position : position+n])
		position += n + 1
		return value, true
	}
	if packet[4] == 'm' {
		if _, valid := read(); !valid {
			return
		}
	}
	if name, ok = read(); !ok {
		return
	}
	if mapName, ok = read(); !ok {
		return
	}
	if folder, ok = read(); !ok {
		return
	}
	ok = name != "" && mapName != "" && folder == "cstrike"
	return
}

func TestNativeGameInfoThroughTCPGateway(t *testing.T) {
	dir := os.Getenv("CS16_TEST_GAME_DIR")
	if runtime.GOOS != "linux" || dir == "" {
		t.Skip("requires the explicit native Linux game-runtime verification environment")
	}
	// Do not start over a pre-existing process on the upstream's fixed ports.
	portCheck, err := net.Listen("tcp4", "127.0.0.1:27016")
	if err != nil {
		t.Fatal("native verification port 27016 is already in use")
	}
	_ = portCheck.Close()
	udpCheck, err := net.ListenPacket("udp4", "127.0.0.1:27018")
	if err != nil {
		t.Fatal("native verification UDP port 27018 is already in use")
	}
	_ = udpCheck.Close()
	ctx, cancel := context.WithCancel(context.Background())
	c := config{gameDir: dir, mapName: "de_dust2", maxPlayers: "16"}
	game, err := startGame(ctx, c)
	if err != nil {
		cancel()
		t.Fatal(err)
	}
	exited := make(chan struct{})
	var childErr error
	go func() { childErr = game.Wait(); close(exited) }()
	t.Cleanup(func() {
		cancel()
		select {
		case <-exited:
		case <-time.After(handshakeTimeout / 12):
			t.Error("native child did not exit after cancellation")
		}
	})
	deployment := startTestGateway(t, "ws://127.0.0.1:27016/websocket")
	deadline := time.Now().Add(handshakeTimeout)
	for {
		select {
		case <-exited:
			t.Fatalf("native child exited before readiness: %v", childErr)
		default:
		}
		if err := deployment.gateway.privateEndpointReady(ctx); err == nil {
			break
		}
		if time.Now().After(deadline) {
			t.Fatal("native game HTTP did not become ready")
		}
		time.Sleep(100 * time.Millisecond)
	}
	client := openTestClient(t, deployment)
	query := gameInfoQuery()
	if err := client.send.Send(query); err != nil {
		t.Fatal(err)
	}
	packet := receivePacket(t, client)
	if len(packet) >= 9 && bytes.Equal(packet[:5], []byte{255, 255, 255, 255, 'A'}) {
		query = append(query, packet[5:9]...)
		if err := client.send.Send(query); err != nil {
			t.Fatal(err)
		}
		packet = receivePacket(t, client)
	}
	name, mapName, folder, valid := parseGameInfo(packet)
	if !valid || mapName != "de_dust2" || folder != "cstrike" || deployment.proxyConnections.Load() == 0 {
		var command byte
		if len(packet) > 4 {
			command = packet[4]
		}
		t.Fatalf("no valid native CS info reply via TCP: bytes=%d command=%q map=%q folder=%q", len(packet), command, mapName, folder)
	}
	pair, err := client.peer.SCTP().Transport().ICETransport().GetSelectedCandidatePair()
	if err != nil || pair == nil || pair.Remote.Protocol.String() != "tcp" {
		t.Fatal("native query bypassed the public-side TCP path")
	}
	t.Logf("ACTUAL_GAME_QUERY_PASS: name=%q map=%q folder=%q, TCP proxy connections=%d", name, mapName, folder, deployment.proxyConnections.Load())
}
