package main

import (
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestNativeChildDoesNotInheritAdminOrPublicPort(t *testing.T) {
	environment := childEnvironment([]string{"CS16_ADMIN_TOKEN=test-private", "PORT=8080", "IP=public", "RAILWAY_TOKEN=test-private", "PUBLIC_ICE_PORT=13603", "LD_LIBRARY_PATH=/xashds", "PATH=/usr/bin"})
	joined := strings.Join(environment, "\n")
	if strings.Contains(joined, "test-private") || strings.Contains(joined, "8080") || strings.Contains(joined, "13603") {
		t.Fatal("native child inherited gateway secrets or public settings")
	}
	if !strings.Contains(joined, "IP=127.0.0.1") || !strings.Contains(joined, "PORT=27018") || !strings.Contains(joined, "LD_LIBRARY_PATH=/xashds") {
		t.Fatal("native child is missing private runtime settings")
	}
}

func TestRuntimeConfigIsOwnedAndIdempotent(t *testing.T) {
	dir := t.TempDir()
	if err := os.Mkdir(filepath.Join(dir, "cstrike"), 0700); err != nil {
		t.Fatal(err)
	}
	serverConfig := filepath.Join(dir, "cstrike", "server.cfg")
	original := "mp_timelimit 30\n"
	if err := os.WriteFile(serverConfig, []byte(original), 0600); err != nil {
		t.Fatal(err)
	}
	for i := 0; i < 2; i++ {
		if err := prepareRuntimeConfig(config{gameDir: dir}); err != nil {
			t.Fatal(err)
		}
	}
	data, _ := os.ReadFile(serverConfig)
	if !strings.HasPrefix(string(data), original) || strings.Count(string(data), "exec FX_CS16_server.cfg") != 1 {
		t.Fatal("owned config insertion lost existing settings or duplicated itself")
	}
	owned, _ := os.ReadFile(filepath.Join(dir, "cstrike", "FX_CS16_server.cfg"))
	if !strings.Contains(string(owned), "rcon_password") || !strings.Contains(string(owned), `hostname "FX_CS16"`) {
		t.Fatal("owned runtime configuration missing")
	}
}

func TestMissingNativeRuntimeIsNotReady(t *testing.T) {
	if err := checkRuntimeFiles(t.TempDir(), "de_dust2"); err == nil {
		t.Fatal("missing runtime passed file inspection")
	}
}
