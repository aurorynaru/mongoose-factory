package main

import (
	"net/http/httptest"
	"testing"
	"time"
)

const testAdminToken = "FX_CS16_TEST_FIXTURE_NOT_A_DEPLOYMENT_SECRET"

func TestAdminAuthentication(t *testing.T) {
	for _, header := range []string{"", "Bearer wrong", "Bearer " + testAdminToken} {
		request := httptest.NewRequest("POST", "/api/session", nil)
		request.Header.Set("Authorization", header)
		if got, want := authorized(request, testAdminToken), header == "Bearer "+testAdminToken; got != want {
			t.Errorf("authorization mismatch for test fixture header")
		}
	}
}

func TestTicketsExpireAndCannotBeReplayed(t *testing.T) {
	tickets := newTickets()
	now := time.Date(2026, 10, 30, 0, 0, 0, 0, time.UTC)
	tickets.now = func() time.Time { return now }
	first, err := tickets.issue()
	if err != nil {
		t.Fatal(err)
	}
	if !tickets.consume(first) || tickets.consume(first) {
		t.Fatal("ticket must be single-use")
	}
	expired, _ := tickets.issue()
	now = now.Add(handshakeTimeout)
	if tickets.consume(expired) {
		t.Fatal("accepted expired ticket")
	}
	if tickets.consume("missing") {
		t.Fatal("accepted unknown ticket")
	}
}

func TestTicketStorageIsBoundedAndExpiredEntriesAreReclaimed(t *testing.T) {
	tickets := newTickets()
	now := time.Now()
	tickets.now = func() time.Time { return now }
	for i := 0; i < 128; i++ {
		if _, err := tickets.issue(); err != nil {
			t.Fatal(err)
		}
	}
	if _, err := tickets.issue(); err == nil {
		t.Fatal("unbounded ticket allocation")
	}
	now = now.Add(handshakeTimeout)
	if _, err := tickets.issue(); err != nil || len(tickets.values) != 1 {
		t.Fatal("expired tickets were not reclaimed")
	}
}
