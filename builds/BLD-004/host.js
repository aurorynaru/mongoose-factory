import GameLogic from './generated/game-logic.js';
import { SpatialGrid } from './generated/spatial-grid.js';
import { checkPlayerCollisions } from './generated/collision.js';
import defaults from './src/backend/config.example.json';

// Guest-only bootstrap. The host accepts steering, boost and appearance, never
// coordinates, sizes, death results or account/admin commands from peers.
export function startHost(io, bots) {
  const config = { ...defaults, BOTS_ENABLED: bots, GODMODE_ON_SPAWN_ENABLED: true,
    ADAPTIVE_THROTTLING_ENABLED: false };
  const players = Object.create(null);
  const stats = new Map();
  const pendingCollisions = new Map();
  const leaderboard = () => [...stats].map(([id, stat]) => ({
    ...stat, username: stat.name, status: players[id] ? 'ingame' : 'online',
    totalSize: players[id]?.maxTrailLength || stat.totalSize,
    kdRatio: stat.totalDeaths ? (stat.totalKills / stat.totalDeaths).toFixed(2) : 'N/A'
  })).sort((a, b) => b.totalSize - a.totalSize);
  GameLogic.init({ io, config, players, food: [], accounts: {}, adminMessage: { text: '' },
    pendingCollisions, spatialGrid: new SpatialGrid(config.MAP_WIDTH, config.MAP_HEIGHT, config.GRID_CELL_SIZE),
    initialMapWidth: config.MAP_WIDTH, initialMapHeight: config.MAP_HEIGHT,
    saveAccounts() {}, getLeaderboard: leaderboard,
    recordDeath(player, killerId) {
      const stat = stats.get(player.id);
      if (stat) { stat.totalDeaths++; stat.totalSize = player.maxTrailLength; }
      const killer = stats.get(killerId);
      if (killer) { killer.totalKills++; io.to(killerId).emit('killConfirmed'); }
    },
    dispatchToWorker(task) {
      const result = checkPlayerCollisions(task);
      if (result.collision && players[result.playerId]) {
        players[result.playerId].hasCollided = true;
        players[result.playerId].collisionData = result.collision;
      }
      // Upstream sets pending AFTER dispatch returns. Clear it before the next tick.
      queueMicrotask(() => pendingCollisions.delete(result.playerId));
    }
  });
  const color = (value, fallback) => /^#[a-f0-9]{6}$/i.test(value || '') ? value : fallback;
  io.on('connection', socket => {
    socket.on('joinGame', data => {
      if (!data || typeof data !== 'object' || players[socket.id]) return;
      const name = String(data.name || '').trim().slice(0, 15) || `Slither${Math.floor(100000 + Math.random() * 900000)}`;
      const headColor = color(data.headColor, '#ff0000');
      const bodyColor = color(data.bodyColor, '#ffff00');
      const incoming = data.skinData || {};
      const skinData = {
        headColor, bodyColor,
        bodyType: incoming.bodyType === 'pattern' ? 'pattern' : 'single',
        patternColors: Array.isArray(incoming.patternColors) ? incoming.patternColors.slice(0, 8).map(c => color(c, bodyColor)) : [],
        trailEffect: ['none', 'sparkle', 'smoke', 'fire', 'ice', 'electric', 'rainbow', 'bubbles', 'glitch', 'void', 'confetti'].includes(incoming.trailEffect) ? incoming.trailEffect : 'none'
      };
      const { x, y } = GameLogic.findSafeSpawnLocation() || GameLogic.getRandomSpawnLocation();
      const now = Date.now();
      players[socket.id] = {
        id: socket.id, name, headColor, bodyColor, skinData, x, y,
        angle: Math.random() * 2 * Math.PI, mouseX: x, mouseY: y, trail: [{ x, y }],
        spawnTime: now, hasCollided: false, collisionData: null, boost: false, boostTick: 0,
        maxTrailLength: config.INITIAL_SIZE, killCount: 0, cheatStart: null,
        godmode: true, godmodeStartTime: now, isTemporary: true, isAdmin: false,
        isGhost: false, isFrozen: false, lastMouseMove: now, type: 'player',
        lastPosition: { x, y, time: now }, teleportViolations: 0, particles: []
      };
      if (!stats.has(socket.id)) stats.set(socket.id, { name, totalSize: 0, totalKills: 0, totalDeaths: 0 });
      socket.emit('mapSizeUpdate', {
        collisionRadius: config.COLLISION_RADIUS, width: config.MAP_WIDTH,
        height: config.MAP_HEIGHT, shape: config.MAP_SHAPE, radius: 0,
        mode: 'real', zoom: config.DEFAULT_ZOOM_LEVEL, isGhost: false
      });
      io.emit('leaderboard', leaderboard());
    });
    socket.on('mouse_move', data => {
      const player = players[socket.id];
      if (!player || !Number.isFinite(data?.x) || !Number.isFinite(data?.y)) return;
      player.mouseX = Math.max(0, Math.min(config.MAP_WIDTH, data.x));
      player.mouseY = Math.max(0, Math.min(config.MAP_HEIGHT, data.y));
      player.lastMouseMove = Date.now();
    });
    socket.on('boost', data => {
      const player = players[socket.id];
      if (player) player.boost = data?.boost === true && player.maxTrailLength > config.MIN_BOOST_SIZE;
    });
    socket.on('disconnect', () => {
      delete players[socket.id];
      stats.delete(socket.id);
      pendingCollisions.delete(socket.id);
      io.emit('leaderboard', leaderboard());
    });
  });
  GameLogic.startGameLoop();
  return { stop: () => GameLogic.stopGameLoop() };
}
