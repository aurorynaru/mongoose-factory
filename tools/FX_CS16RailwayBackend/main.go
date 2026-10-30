package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

func run(ctx context.Context) error {
	c, err := loadConfig()
	if err != nil {
		return err
	}
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()
	game, err := startGame(ctx, c)
	if err != nil {
		return err
	}
	gameExited := make(chan error, 1)
	go func() { gameExited <- game.Wait() }()
	listener, err := net.Listen("tcp4", ":"+c.icePort)
	if err != nil {
		return err
	}
	frontAPI, closeMux := newFrontAPI(listener)
	defer closeMux()
	gateway := newGateway(ctx, c, frontAPI)
	defer gateway.closeSessions()
	server := httpServer(c.httpPort, gateway.handler())
	serverExited := make(chan error, 1)
	go func() { serverExited <- server.ListenAndServe() }()
	log.Printf("FX_CS16 gateway HTTP :%s; ICE-TCP :%s; map=%s maxplayers=%s; game-query verification pending", c.httpPort, c.icePort, c.mapName, c.maxPlayers)
	select {
	case <-ctx.Done():
		err = nil
	case childErr := <-gameExited:
		err = fmt.Errorf("native game runtime exited: %v", childErr)
	case serveErr := <-serverExited:
		if serveErr != http.ErrServerClosed {
			err = serveErr
		}
	}
	cancel()
	gateway.closeSessions()
	shutdownCtx, stop := context.WithTimeout(context.Background(), handshakeTimeout)
	defer stop()
	_ = server.Shutdown(shutdownCtx)
	return err
}

func main() {
	checkFiles := flag.Bool("check-files", false, "inspect the pinned game ELF and required assets without executing the game")
	flag.Parse()
	if *checkFiles {
		if err := checkRuntimeFiles(env("CS16_GAME_DIR", "/xashds"), env("CS16_START_MAP", "de_dust2")); err != nil {
			log.Fatal(err)
		}
		log.Print("RUNTIME_FILES_OK: ELF32/i386, game library, gamefiles.zip, and map present; execution not yet tested")
		return
	}
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()
	if err := run(ctx); err != nil {
		log.Print(err)
		os.Exit(1)
	}
}
