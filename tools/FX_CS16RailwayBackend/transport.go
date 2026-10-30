package main

import (
	"errors"
	"net"
	"strconv"
	"strings"

	"github.com/pion/webrtc/v4"
)

// Retains BLD-005's tested public address AND port mapping.
func advertiseEndpoint(sdp string, target endpoint) (string, error) {
	if net.ParseIP(target.Host).To4() == nil || target.Port < 1 || target.Port > 65535 {
		return "", errors.New("invalid advertised IPv4 endpoint")
	}
	lines := strings.Split(strings.ReplaceAll(sdp, "\r\n", "\n"), "\n")
	count := 0
	for i, line := range lines {
		if !strings.HasPrefix(line, "a=candidate:") {
			continue
		}
		fields := strings.Fields(line)
		if len(fields) < 10 || !strings.EqualFold(fields[2], "tcp") || !strings.Contains(line, "tcptype passive") {
			return "", errors.New("expected only passive TCP candidates")
		}
		fields[4], fields[5] = target.Host, strconv.Itoa(target.Port)
		lines[i] = strings.Join(fields, " ")
		count++
	}
	if count == 0 {
		return "", errors.New("no passive TCP candidates gathered")
	}
	return strings.Join(lines, "\r\n"), nil
}

func newFrontAPI(listener net.Listener) (*webrtc.API, func() error) {
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

func newBackAPI() *webrtc.API {
	settings := webrtc.SettingEngine{}
	settings.SetNetworkTypes([]webrtc.NetworkType{webrtc.NetworkTypeUDP4})
	settings.SetIncludeLoopbackCandidate(true)
	return webrtc.NewAPI(webrtc.WithSettingEngine(settings))
}
