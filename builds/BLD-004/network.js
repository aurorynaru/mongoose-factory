// Socket.IO-shaped transport for BLD-004. Only guest game inputs reach the host.
import { Peer } from 'peerjs';
import { Events } from './events.js';

const INPUT_EVENTS = new Set(['joinGame', 'mouse_move', 'boost']);
const ROOM_PREFIX = 'fxslither-';
const CONNECT_TIMEOUT = 8000; // Same connection budget as original socket-manager.js.

export function normalizeRoom(value) {
  const code = String(value).trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(code)) throw new Error('Enter the six-letter/digit room code.');
  return code;
}

export function makeRoomCode() {
  return Array.from(crypto.getRandomValues(new Uint8Array(6)), n =>
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[n % 36]).join('');
}

function openPeer(id) {
  const peer = new Peer(id, { secure: true });
  const ready = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('PeerJS signaling timed out. Check your connection and try again.')), CONNECT_TIMEOUT);
    peer.on('open', () => { clearTimeout(timer); resolve(peer); });
    peer.on('error', error => { clearTimeout(timer); reject(error); });
  });
  return { peer, ready };
}

function validFrame(frame) {
  return frame && typeof frame === 'object' && typeof frame.event === 'string';
}

export function createHostAdapter(roomCode) {
  const io = new Events();
  const sockets = new Map();
  const { peer, ready } = openPeer(ROOM_PREFIX + normalizeRoom(roomCode));
  io.sockets = { sockets };
  io.ready = ready;
  io.peer = peer;
  io.compress = () => io;
  io.emit = (event, data) => {
    for (const socket of sockets.values()) socket.emit(event, data);
    return io;
  };
  io.to = id => ({ emit: (event, data) => sockets.get(id)?.emit(event, data) });

  function attach(id, send, close) {
    const socket = new Events();
    socket.id = id;
    socket.connected = true;
    socket.compress = () => socket;
    socket.request = { headers: {} };
    socket.emit = (event, data) => { if (socket.connected) send(event, data); return socket; };
    socket.broadcast = {
      compress() { return this; },
      emit(event, data) { for (const other of sockets.values()) if (other !== socket) other.emit(event, data); }
    };
    socket.disconnect = () => {
      if (!socket.connected) return;
      socket.connected = false;
      sockets.delete(id);
      socket.deliver('disconnect', 'Room connection closed');
      close();
    };
    sockets.set(id, socket);
    io.deliver('connection', socket);
    return socket;
  }

  peer.on('connection', connection => {
    connection.on('open', () => {
      const socket = attach(connection.peer, (event, data) => {
        // Drop superseded snapshots instead of growing an unbounded reliable queue.
        if (event === 'state' && connection.dataChannel?.bufferedAmount > 1e6) return;
        if (connection.open) connection.send({ event, data });
      }, () => connection.close());
      connection.on('data', frame => {
        if (validFrame(frame) && INPUT_EVENTS.has(frame.event)) socket.deliver(frame.event, frame.data);
      });
      connection.on('close', () => socket.disconnect());
      connection.on('error', () => socket.disconnect());
    });
  });
  peer.on('error', error => io.deliver('transportError', error));

  // Host plays through the same event contract, without a loopback WebRTC connection.
  io.createLocalSocket = () => {
    const client = new Events();
    client.id = peer.id + '-local';
    client.connected = true;
    const server = attach(client.id, (event, data) => {
      const copy = structuredClone(data);
      queueMicrotask(() => { if (client.connected) client.deliver(event, copy); });
    }, () => {
      client.connected = false;
      client.deliver('disconnect', 'Room connection closed');
    });
    client.emit = (event, data) => {
      if (client.connected && INPUT_EVENTS.has(event)) server.deliver(event, structuredClone(data));
      return client;
    };
    client.disconnect = () => server.disconnect();
    return client;
  };
  io.close = () => {
    for (const socket of [...sockets.values()]) socket.disconnect();
    peer.destroy();
  };
  return io;
}

export function createPeerAdapter(roomCode) {
  const code = normalizeRoom(roomCode);
  const client = new Events();
  const { peer, ready } = openPeer();
  let connection;
  let disposed = false;
  client.connected = false;
  client.emit = (event, data) => {
    if (client.connected && INPUT_EVENTS.has(event)) connection.send({ event, data });
    return client;
  };
  client.disconnect = () => {
    if (disposed) return;
    disposed = true;
    const wasConnected = client.connected;
    client.connected = false;
    connection?.close();
    peer.destroy();
    if (wasConnected) client.deliver('disconnect', 'Room connection closed');
  };
  client.ready = ready.then(() => new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Room did not answer. Check the code and ask the host to keep the tab open.')), CONNECT_TIMEOUT);
    peer.on('error', error => { clearTimeout(timer); reject(error); });
    connection = peer.connect(ROOM_PREFIX + code, { reliable: true });
    connection.on('open', () => {
      clearTimeout(timer);
      client.id = peer.id;
      client.connected = true;
      resolve(client);
    });
    connection.on('data', frame => { if (validFrame(frame)) client.deliver(frame.event, frame.data); });
    connection.on('error', error => { clearTimeout(timer); reject(error); });
    connection.on('close', () => client.disconnect());
  }));
  peer.on('error', error => client.deliver('transportError', error));
  return client;
}
