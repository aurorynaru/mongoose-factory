// Shared event contract; transport delivers locally, emit sends across the wire.
export class Events {
  constructor() { this.handlers = new Map(); }
  on(event, callback) {
    if (!this.handlers.has(event)) this.handlers.set(event, new Set());
    this.handlers.get(event).add(callback);
    return this;
  }
  off(event, callback) {
    if (callback) this.handlers.get(event)?.delete(callback);
    else this.handlers.delete(event);
    return this;
  }
  deliver(event, data) {
    for (const callback of [...(this.handlers.get(event) || [])]) callback(data);
  }
}
