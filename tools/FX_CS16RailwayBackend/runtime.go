package main

import (
	"context"
	"crypto/rand"
	"debug/elf"
	"encoding/hex"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

func checkRuntimeFiles(dir, mapName string) error {
	binary, err := elf.Open(filepath.Join(dir, "xash"))
	if err != nil {
		return fmt.Errorf("read game runtime ELF: %w", err)
	}
	defer binary.Close()
	if binary.Class != elf.ELFCLASS32 || binary.Machine != elf.EM_386 {
		return errors.New("pinned game runtime must be Linux ELF32/i386")
	}
	for _, relative := range []string{"filesystem_stdio.so", "public/gamefiles.zip", "cstrike/maps/" + mapName + ".bsp"} {
		info, err := os.Stat(filepath.Join(dir, filepath.FromSlash(relative)))
		if err != nil || !info.Mode().IsRegular() || info.Size() == 0 {
			return fmt.Errorf("missing or empty required game file: %s", relative)
		}
	}
	return nil
}

func childEnvironment(parent []string) []string {
	result := make([]string, 0, len(parent)+2)
	for _, entry := range parent {
		name, _, _ := strings.Cut(entry, "=")
		// The native child must not inherit the admin secret or Railway HTTP PORT.
		if strings.HasPrefix(name, "CS16_") || strings.HasPrefix(name, "RAILWAY_") || name == "PORT" || name == "IP" || strings.HasPrefix(name, "PUBLIC_ICE_") {
			continue
		}
		result = append(result, entry)
	}
	return append(result, "IP=127.0.0.1", "PORT=27018")
}

func prepareRuntimeConfig(c config) error {
	var secret [32]byte
	if _, err := rand.Read(secret[:]); err != nil {
		return err
	}
	// Fresh copied runtime only. The upstream config is not changed in its repo.
	configPath := filepath.Join(c.gameDir, "cstrike", "FX_CS16_server.cfg")
	content := "hostname \"FX_CS16\"\nsv_lan 0\npublic 0\nrcon_password \"" + hex.EncodeToString(secret[:]) + "\"\n"
	if err := os.WriteFile(configPath, []byte(content), 0600); err != nil {
		return err
	}
	serverConfig := filepath.Join(c.gameDir, "cstrike", "server.cfg")
	data, err := os.ReadFile(serverConfig)
	if err != nil {
		return err
	}
	const command = "exec FX_CS16_server.cfg"
	if !strings.Contains(string(data), command) {
		return os.WriteFile(serverConfig, append(data, []byte("\n"+command+"\n")...), 0600)
	}
	return nil
}

func startGame(ctx context.Context, c config) (*exec.Cmd, error) {
	if err := checkRuntimeFiles(c.gameDir, c.mapName); err != nil {
		return nil, err
	}
	if err := prepareRuntimeConfig(c); err != nil {
		return nil, fmt.Errorf("prepare owned runtime config: %w", err)
	}
	cmd := exec.CommandContext(ctx, filepath.Join(c.gameDir, "xash"),
		"+ip", "127.0.0.1", "-port", "27015", "-game", "cstrike",
		"+map", c.mapName, "+maxplayers", c.maxPlayers)
	cmd.Dir, cmd.Env, cmd.Stdout, cmd.Stderr = c.gameDir, childEnvironment(os.Environ()), os.Stdout, os.Stderr
	if err := cmd.Start(); err != nil {
		return nil, fmt.Errorf("start 32-bit game runtime (requires i386 kernel support and loader): %w", err)
	}
	return cmd, nil
}
