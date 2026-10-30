package main

import (
	"context"
	"errors"
	"fmt"
	"net"
	"os"
	"regexp"
	"strconv"
	"strings"
	"time"
)

const (
	handshakeTimeout = 60 * time.Second // BLD-005 connection-test window.
	maxPacketSize    = 8192             // Upstream's ReadLoop messageSize.
	packetQueueSize  = 24               // Existing Global-Strike client's bounded queue.
	maxBufferedBytes = 262144           // Existing Global-Strike client backpressure limit.
)

type config struct {
	httpPort, icePort, adminToken, mapName, maxPlayers, gameDir string
	allowedOrigins                                              map[string]bool
}

func env(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}

func loadConfig() (config, error) {
	c := config{
		httpPort: env("PORT", "8080"), icePort: env("ICE_TCP_PORT", "8443"),
		adminToken: os.Getenv("CS16_ADMIN_TOKEN"), mapName: env("CS16_START_MAP", "de_dust2"),
		maxPlayers: env("CS16_MAXPLAYERS", "16"), gameDir: env("CS16_GAME_DIR", "/xashds"),
		allowedOrigins: make(map[string]bool),
	}
	if len(c.adminToken) < 32 {
		return c, errors.New("set CS16_ADMIN_TOKEN to a private random value of at least 32 characters in Railway Variables")
	}
	var ports []int
	for _, port := range []string{c.httpPort, c.icePort} {
		n, err := strconv.Atoi(port)
		if err != nil || n < 1 || n > 65535 {
			return c, errors.New("PORT and ICE_TCP_PORT must be valid port numbers")
		}
		ports = append(ports, n)
	}
	c.httpPort, c.icePort = strconv.Itoa(ports[0]), strconv.Itoa(ports[1])
	if c.httpPort == c.icePort || c.httpPort == "27016" || c.icePort == "27016" {
		return c, errors.New("public listeners must have separate ports and must not use the private backend's 27016 port")
	}
	if !regexp.MustCompile(`^[A-Za-z0-9_]+$`).MatchString(c.mapName) {
		return c, errors.New("CS16_START_MAP must be a map name without paths or spaces")
	}
	n, err := strconv.Atoi(c.maxPlayers)
	if err != nil || n < 2 || n > 16 {
		return c, errors.New("this multiplayer package supports CS16_MAXPLAYERS from 2 to 16")
	}
	for _, origin := range strings.Split(os.Getenv("CS16_ALLOWED_ORIGINS"), ",") {
		if origin = strings.TrimSpace(origin); origin != "" {
			if origin == "*" {
				return c, errors.New("CS16_ALLOWED_ORIGINS requires exact origins, not a wildcard")
			}
			c.allowedOrigins[origin] = true
		}
	}
	return c, nil
}

type endpoint struct {
	Host string `json:"host"`
	Port int    `json:"port"`
}

func publicEndpoint(ctx context.Context) (endpoint, error) {
	host := env("PUBLIC_ICE_HOST", os.Getenv("RAILWAY_TCP_PROXY_DOMAIN"))
	port, err := strconv.Atoi(env("PUBLIC_ICE_PORT", os.Getenv("RAILWAY_TCP_PROXY_PORT")))
	if host == "" || err != nil || port < 1 || port > 65535 {
		return endpoint{}, errors.New("enable Railway TCP Proxy targeting 8443 and redeploy so its public domain and port are available")
	}
	ips, err := net.DefaultResolver.LookupIP(ctx, "ip4", host)
	if err != nil || len(ips) == 0 {
		return endpoint{}, fmt.Errorf("cannot resolve public ICE hostname %q to IPv4", host)
	}
	return endpoint{Host: ips[0].String(), Port: port}, nil
}
