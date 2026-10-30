import i18next from 'i18next';
import english from './src/public/locales/en.json';
import { createHostAdapter, createPeerAdapter, makeRoomCode, normalizeRoom } from './network.js';
import { startHost } from './host.js';

const state = { io: null, simulation: null, socket: null, code: '', busy: false, playing: false, snapshots: 0, lastSnapshot: null };
// Read-only diagnostics for troubleshooting a room; no host/game mutation hooks.
window.FX_SlitherDiagnostics = () => structuredClone({
  code: state.code, id: state.socket?.id, connected: !!state.socket?.connected,
  host: !!state.io, snapshots: state.snapshots, snapshot: state.lastSnapshot
});
const el = id => document.getElementById(id);
const log = (...args) => console.log('[FX_Slither]', ...args);
function setStatus(message, error = false) {
  el('FX_Status').textContent = message;
  el('FX_Status').className = error ? 'is-error' : '';
  el('FX_OfflineArt').hidden = !error;
}
function setBusy(busy) {
  state.busy = busy;
  el('FX_Host').disabled = busy;
  el('FX_Join').disabled = busy;
}
function stored(key, fallback) {
  try { return JSON.parse(localStorage.getItem('FX_Slither_' + key)) ?? fallback; }
  catch { return fallback; }
}
function store(key, value) {
  try { localStorage.setItem('FX_Slither_' + key, JSON.stringify(value)); }
  catch (error) { log('Preferences could not be stored', error.message); }
}
function skin() {
  return { headColor: el('FX_Head').value, bodyColor: el('FX_Body').value,
    bodyType: el('FX_BodyType').value, trailEffect: el('FX_Effect').value,
    patternColors: [...el('FX_Colors').querySelectorAll('input')].map(input => input.value) };
}
function addColor(value = '#ffff00') {
  if (el('FX_Colors').children.length >= 8) return;
  const input = document.createElement('input');
  input.type = 'color'; input.value = value;
  input.setAttribute('aria-label', 'Pattern color ' + (el('FX_Colors').children.length + 1));
  el('FX_Colors').append(input);
}
function showMenu() { el('FX_Menu').hidden = false; }
function showGameOver(reasonKey, options, kill, finalSize) {
  state.playing = false;
  el('gameOverText').textContent = i18next.t(reasonKey, options || {}) + ' — Final size: ' + Math.floor(finalSize || 0);
  el('gameOverOverlay').style.display = 'flex';
  log('gameOver', reasonKey, finalSize);
}
window.showGameOverOverlay = showGameOver;
window.isAdmin = false;

function leaderboard(rows) {
  el('FX_Ranking').replaceChildren();
  for (const row of rows) {
    const item = document.createElement('li');
    item.textContent = `${row.username}: ${Math.floor(row.totalSize)} · ${row.totalKills} kills · ${row.totalDeaths} deaths`;
    el('FX_Ranking').append(item);
  }
}
function leave(message = 'Room closed. Host or join another game.') {
  const socket = state.socket;
  state.socket = null;
  state.simulation?.stop(); state.simulation = null;
  state.io?.close(); state.io = null;
  socket?.disconnect();
  window.Game?.stopGame();
  state.playing = false;
  el('gameOverOverlay').style.display = 'none';
  el('FX_RoomBar').hidden = true;
  el('FX_Leaderboard').hidden = true;
  el('minimapCanvas').hidden = true;
  showMenu(); setBusy(false); setStatus(message);
}
async function play() {
  const socket = state.socket;
  if (!socket?.connected) throw new Error('Room connection is closed. Leave and join again.');
  el('gameOverOverlay').style.display = 'none';
  el('FX_Menu').hidden = true;
  await window.Game.initializeAndStart(socket, socket.id, el('textOverlayCanvas'));
  socket.on('state', snapshot => { state.snapshots++; state.lastSnapshot = snapshot; });
  socket.on('gameOver', () => { state.playing = false; });
  socket.emit('joinGame', {
    mode: 'temp', name: el('FX_Name').value.trim(), headColor: skin().headColor,
    bodyColor: skin().bodyColor, skinData: skin()
  });
  state.playing = true;
  el('FX_RoomBar').hidden = false;
  el('FX_Leaderboard').hidden = false;
  el('minimapCanvas').hidden = false;
  el('FX_RoomLabel').textContent = `Room ${state.code}${state.io ? ' · You host' : ''}`;
  el('gameCanvas').focus();
  log('playing', { code: state.code, id: socket.id, host: !!state.io });
}
async function connect(hosting) {
  if (state.busy) return;
  if (!el('FX_Name').value.trim()) { setStatus('Enter your player name first.', true); el('FX_Name').focus(); return; }
  setBusy(true);
  try {
    state.code = hosting ? makeRoomCode() : normalizeRoom(el('FX_Code').value);
    store('name', el('FX_Name').value.trim()); store('skin', skin());
    setStatus(hosting ? 'Opening a room with PeerJS…' : 'Connecting to room ' + state.code + '…');
    if (hosting) {
      state.io = createHostAdapter(state.code);
      await state.io.ready;
      state.io.on('transportError', error => log('host signaling', error.type, error.message));
      state.simulation = startHost(state.io, el('FX_Bots').checked);
      state.socket = state.io.createLocalSocket();
    } else {
      state.socket = createPeerAdapter(state.code);
      await state.socket.ready;
    }
  const activeSocket = state.socket;
    activeSocket.on('leaderboard', leaderboard);
    activeSocket.on('disconnect', () => {
      if (state.socket !== activeSocket) return;
      leave('Disconnected. Ask the host to keep the room open, then join again.');
    });
    await play();
  } catch (error) {
    log('connection failed', error.type, error.message);
    leave(); setStatus('Could not connect: ' + error.message, true);
  } finally { setBusy(false); }
}

document.addEventListener('DOMContentLoaded', async () => {
  window.i18next = i18next;
  await i18next.init({ lng: 'en', fallbackLng: 'en', resources: { en: { translation: english } } });
  el('FX_Name').value = stored('name', '');
  const saved = stored('skin', {});
  el('FX_Head').value = saved.headColor || '#ff0000';
  el('FX_Body').value = saved.bodyColor || '#ffff00';
  el('FX_BodyType').value = saved.bodyType || 'single';
  el('FX_Effect').value = saved.trailEffect || 'none';
  for (const color of saved.patternColors?.length ? saved.patternColors.slice(0, 8) : ['#ff0000', '#ffff00']) addColor(color);
  function updateSkin() { el('FX_Pattern').hidden = el('FX_BodyType').value !== 'pattern'; store('skin', skin()); }
  updateSkin();
  el('FX_Skins').addEventListener('change', updateSkin);
  el('FX_AddColor').addEventListener('click', () => { addColor(); updateSkin(); });
  el('FX_RemoveColor').addEventListener('click', () => { if (el('FX_Colors').children.length > 1) el('FX_Colors').lastChild.remove(); updateSkin(); });
  el('FX_Host').addEventListener('click', () => connect(true));
  el('FX_Join').addEventListener('click', () => connect(false));
  el('FX_Code').addEventListener('keydown', event => { if (event.key === 'Enter') connect(false); });
  el('FX_Leave').addEventListener('click', () => leave());
  el('backToMenuButton').addEventListener('click', () => leave());
  el('replayButton').addEventListener('click', () => play().catch(error => { leave(); setStatus(error.message, true); }));
  el('FX_Copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(state.code); el('FX_Copy').textContent = 'Copied'; }
    catch { el('FX_Copy').textContent = 'Code: ' + state.code; }
  });
  window.addEventListener('pagehide', () => { state.simulation?.stop(); state.io?.close(); state.socket?.disconnect(); });
  log('ready');
});
