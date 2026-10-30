const test = require("node:test");
const assert = require("node:assert/strict");
const { queryPacket, parseInfo } = require("./public/app.js");

function nativeReply(overrides = {}) {
  const fields = { p: "49", map: "de_dust2", numcl: "0", maxcl: "16", gamedir: "cstrike", host: "FX_CS16", ...overrides };
  const text = "info\n" + Object.entries(fields).map(([key, value]) => "\\" + key + "\\" + value).join("") + "\0";
  return new Uint8Array([255, 255, 255, 255, ...new TextEncoder().encode(text)]);
}

test("diagnostic uses the native protocol-49 info request", () => {
  assert.deepEqual(Array.from(queryPacket().slice(0, 4)), [255, 255, 255, 255]);
  assert.equal(new TextDecoder().decode(queryPacket().slice(4)), "info 49\n\0");
});

test("parse a native loaded-map reply, including zero players", () => {
  assert.deepEqual(parseInfo(nativeReply()), {
    name: "FX_CS16", map: "de_dust2", folder: "cstrike", protocol: 49, players: 0, maxPlayers: 16
  });
});

test("never accept an echo, unrelated game, empty map, or malformed count as a game pass", () => {
  for (const packet of [queryPacket(), new Uint8Array([255]), nativeReply({ gamedir: "valve" }),
    nativeReply({ map: "" }), nativeReply({ p: "48" }), nativeReply({ numcl: "bad" }),
    nativeReply({ numcl: "17" }), nativeReply({ maxcl: "0" })]) {
    assert.throws(() => parseInfo(packet));
  }
});
