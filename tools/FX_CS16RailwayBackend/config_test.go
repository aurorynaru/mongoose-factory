package main

import "testing"

func TestRejectInvalidRuntimeSettings(t *testing.T) {
	for _, key := range []string{"PORT", "ICE_TCP_PORT", "CS16_START_MAP", "CS16_MAXPLAYERS", "CS16_ALLOWED_ORIGINS"} {
		t.Setenv(key, "")
	}
	t.Setenv("CS16_ADMIN_TOKEN", testAdminToken)
	if _, err := loadConfig(); err != nil {
		t.Fatal(err)
	}
	for _, check := range []struct{ key, value string }{
		{"CS16_START_MAP", "../../outside"}, {"CS16_START_MAP", "de_dust2 +exec outside"},
		{"CS16_MAXPLAYERS", "1"}, {"CS16_MAXPLAYERS", "17"},
		{"PORT", "08443"}, {"ICE_TCP_PORT", "027016"}, {"PORT", "65536"},
		{"CS16_ALLOWED_ORIGINS", "*"}, {"CS16_ADMIN_TOKEN", "short"},
	} {
		t.Run(check.key+"="+check.value, func(t *testing.T) {
			t.Setenv(check.key, check.value)
			if _, err := loadConfig(); err == nil {
				t.Fatal("invalid runtime configuration accepted")
			}
		})
	}
}

func TestNativeInfoParserRejectsEchoAndAcceptsLoadedMap(t *testing.T) {
	packet := append([]byte{255, 255, 255, 255}, []byte("info\n\\p\\49\\map\\de_dust2\\numcl\\0\\maxcl\\16\\gamedir\\cstrike\\host\\FX_CS16\x00")...)
	name, mapName, folder, valid := parseGameInfo(packet)
	if !valid || name != "FX_CS16" || mapName != "de_dust2" || folder != "cstrike" {
		t.Fatal("native server-info packet could not be parsed")
	}
	if _, _, _, valid := parseGameInfo(gameInfoQuery()); valid {
		t.Fatal("accepted an echo of the query as a game result")
	}
	if _, _, _, valid := parseGameInfo([]byte{255, 255, 255, 255, 'I'}); valid {
		t.Fatal("accepted truncated info response")
	}
}
