import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { Events } from '../events.js';

// Load the same host code as the HTML bundle, without browser-only PeerJS startup.
const result = await build({ stdin: {
  contents: "export { startHost } from './host.js'; export { default as logic } from './generated/game-logic.js'; export { checkPlayerCollisions } from './generated/collision.js';",
  resolveDir: process.cwd()
}, bundle: true, write: false, platform: 'node', format: 'esm' });
const { startHost, logic, checkPlayerCollisions } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

test('collision checks segments, including zero-length and distant-head body crossings', () => {
  const task = { playerId: 'a', playerX: 5, playerY: 0, config: { COLLISION_RADIUS: 5 },
    opponents: [{ id: 'b', trail: [{ x: 0, y: 0 }, { x: 1000, y: 0 }] }] };
  assert.equal(checkPlayerCollisions(task).collision.killerId, 'b');
  task.playerY = 10;
  assert.equal(checkPlayerCollisions(task).collision, null);
  task.opponents[0].trail = [{ x: 5, y: 10 }, { x: 5, y: 10 }];
  assert.equal(checkPlayerCollisions(task).collision.reasonKey, 'game.deathReason.clientCollision');
});

test('guest host validates inputs, preserves appearance, grows/boosts, reports death and replays', async context => {
  const io = new Events();
  const packets = [];
  io.emit = (event, data) => packets.push({ id: '*', event, data: structuredClone(data) });
  io.to = id => ({ emit: (event, data) => packets.push({ id, event, data: structuredClone(data) }) });
  const host = startHost(io, false);
  context.after(() => host.stop());
  host.stop();
  const connect = id => {
    const socket = new Events(); socket.id = id;
    socket.emit = (event, data) => packets.push({ id, event, data: structuredClone(data) });
    io.deliver('connection', socket);
    socket.deliver('joinGame', { name: id, x: -999, maxTrailLength: 999999, isAdmin: true,
      headColor: '#00ff00', bodyColor: '#ffff00', skinData: { trailEffect: 'fire' } });
    return socket;
  };
  const first = connect('first');
  const second = connect('second');
  first.deliver('mouse_move', { x: NaN, y: Infinity });
  first.deliver('boost', { boost: true });
  await sleep(40); logic.gameLoop();
  const stateFor = id => packets.filter(p => p.id === id && p.event === 'state').at(-1)?.data;
  let state = stateFor('first');
  assert.equal(state.players.first.maxTrailLength, 50);
  assert.equal(state.players.first.boost, false);
  assert.ok(state.players.first.x > 0 && state.players.first.x < 4000);
  // AOI can exclude the other head; each recipient must at least receive its own skin.
  assert.equal(stateFor('second').players.second.skinData.trailEffect, 'fire');
  assert.equal(stateFor('second').players.second.name, 'second');
  logic.spawnFood({ x: state.players.first.x, y: state.players.first.y, size: 5 });
  await sleep(40); logic.gameLoop();
  state = stateFor('first');
  assert.equal(state.players.first.maxTrailLength, 55);
  first.deliver('boost', { boost: true });
  await sleep(40); logic.gameLoop();
  assert.equal(stateFor('first').players.first.boost, true);
  // Exercise death delivery and same-socket replay independently of random spawns.
  // Actual boundary collision was also observed in the two-tab browser probe.
  logic.handlePlayerDeath('first', null, false, null, { reasonKey: 'game.deathReason.boundary' });
  host.stop(); // Death processing can restart the upstream food spawner.
  const death = packets.find(p => p.id === 'first' && p.event === 'gameOver');
  assert.equal(death.data.reasonKey, 'game.deathReason.boundary');
  assert.equal(death.data.finalSize, 55);
  first.deliver('joinGame', { name: 'first' });
  await sleep(40); logic.gameLoop();
  assert.equal(stateFor('first').players.first.name, 'first');
  first.deliver('disconnect'); second.deliver('disconnect');
  await sleep(40); logic.gameLoop();
  assert.deepEqual(packets.filter(p => p.event === 'leaderboard').at(-1).data, []);
  host.stop();
});
