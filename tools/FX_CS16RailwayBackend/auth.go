package main

import (
	"crypto/rand"
	"crypto/sha256"
	"crypto/subtle"
	"encoding/base64"
	"errors"
	"net/http"
	"sync"
	"time"
)

func authorized(r *http.Request, token string) bool {
	want := sha256.Sum256([]byte("Bearer " + token))
	got := sha256.Sum256([]byte(r.Header.Get("Authorization")))
	return token != "" && subtle.ConstantTimeCompare(want[:], got[:]) == 1
}

type tickets struct {
	sync.Mutex
	values map[string]time.Time
	now    func() time.Time
}

func newTickets() *tickets { return &tickets{values: make(map[string]time.Time), now: time.Now} }

func (t *tickets) issue() (string, error) {
	t.Lock()
	defer t.Unlock()
	now := t.now()
	for key, expiry := range t.values {
		if !expiry.After(now) {
			delete(t.values, key)
		}
	}
	// Upstream's slot table has 128 entries; bound outstanding tickets too.
	if len(t.values) >= 128 {
		return "", errors.New("too many outstanding session tickets")
	}
	var secret [32]byte
	if _, err := rand.Read(secret[:]); err != nil {
		return "", err
	}
	key := base64.RawURLEncoding.EncodeToString(secret[:])
	t.values[key] = now.Add(handshakeTimeout)
	return key, nil
}

func (t *tickets) consume(key string) bool {
	t.Lock()
	defer t.Unlock()
	expiry, exists := t.values[key]
	delete(t.values, key)
	return exists && expiry.After(t.now())
}
