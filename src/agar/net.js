// KARTOPU ARENA - tiny PeerJS wrapper (host-authoritative lobby). Loaded lazily with a dynamic import() only when a lobby is used.
// Peer ids are 'patpat-<CODE>'. The host owns the simulation; clients only send input.
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const makeCode = () => { let s = ''; for (let i = 0; i < 5; i++) s += CHARS[(Math.random() * CHARS.length) | 0]; return s; };
const PREFIX = 'patpat-';
import { VERSION, MAX_HUMANS } from './proto.js';

export class ArenaNet {
  /** h: { onStatus(text), onLobby(list, code), onStart(msg), onData(fromId|null, msg), onGone(id), onClosed(reason) } */
  constructor(h) {
    this.h = h;
    this.peer = null;
    this.role = null; // 'host' | 'client'
    this.code = '';
    this.clients = new Map(); // host: peerId -> { conn, nick }
    this.conn = null; // client: connection to the host
    this.started = false;
    this.dead = false;
    this.maxHumans = MAX_HUMANS;
    this.nick = '';
    this.names = [];
  }

  async _lib() {
    const m = await import('peerjs');
    return m.Peer || (m.default && (m.default.Peer || m.default));
  }

  _open(Peer, id) {
    return new Promise((res, rej) => {
      let done = false;
      const p = id ? new Peer(id) : new Peer();
      const to = setTimeout(() => { if (done) return; done = true; try { p.destroy(); } catch { /* ignore */ } rej({ type: 'timeout' }); }, 12000);
      p.on('open', () => { if (done) return; done = true; clearTimeout(to); this.peer = p; res(); });
      p.on('error', (e) => { if (done) return; done = true; clearTimeout(to); try { p.destroy(); } catch { /* ignore */ } rej(e || { type: 'error' }); });
    });
  }

  async host(nick) {
    const Peer = await this._lib();
    this.role = 'host';
    this.nick = nick;
    for (let tries = 0; tries < 6 && !this.code; tries++) {
      const code = makeCode();
      try { await this._open(Peer, PREFIX + code); this.code = code; } catch (e) { if (!(e && e.type === 'unavailable-id')) throw e; }
    }
    if (!this.code) throw new Error('code');
    this.peer.on('connection', (c) => this._onConn(c));
    this.peer.on('error', () => { /* per-connection errors are not fatal */ });
    this.peer.on('disconnected', () => { try { if (!this.dead) this.peer.reconnect(); } catch { /* ignore */ } });
    return this.code;
  }

  _onConn(c) {
    let rec = null;
    c.on('data', (d) => {
      if (!d || typeof d !== 'object') return;
      if (d.t === 'hello') {
        if (rec) return;
        const refuse = (t) => { try { c.send({ t }); } catch { /* ignore */ } setTimeout(() => { try { c.close(); } catch { /* ignore */ } }, 300); };
        if ((d.v | 0) !== VERSION) { refuse('ver'); return; }
        if (this.clients.size + 1 >= this.maxHumans) { refuse('full'); return; }
        rec = { conn: c, nick: String(d.nick || 'Yeti').slice(0, 12), sk: String(d.sk || '').slice(0, 24), tr: String(d.tr || '').slice(0, 24) };
        this.clients.set(c.peer, rec);
        if (this.started) { if (this.h.onLate && this.h.onLate(c.peer, rec) === false) { this.clients.delete(c.peer); rec = null; refuse('full'); } } else this.pushLobby();
        return;
      }
      if (rec) this.h.onData && this.h.onData(c.peer, d);
    });
    const gone = () => {
      if (!rec || this.clients.get(c.peer) !== rec) return;
      this.clients.delete(c.peer);
      rec = null;
      if (this.started) { this.h.onGone && this.h.onGone(c.peer); } else this.pushLobby();
    };
    c.on('close', gone);
    c.on('error', gone);
  }

  list() {
    const a = [this.nick];
    for (const r of this.clients.values()) a.push(r.nick);
    return a;
  }

  pushLobby() {
    const list = this.list();
    this.h.onLobby && this.h.onLobby(list, this.code);
    this.broadcast({ t: 'lobby', list, code: this.code });
  }

  async join(code, nick, sk, tr) {
    const Peer = await this._lib();
    this.role = 'client';
    this.nick = nick;
    this.code = code;
    await this._open(Peer, null);
    await new Promise((res, rej) => {
      let done = false;
      const c = this.peer.connect(PREFIX + code, { reliable: true });
      this.conn = c;
      const to = setTimeout(() => { if (done) return; done = true; rej({ type: 'timeout' }); }, 12000);
      this.peer.on('error', (e) => { if (done) { return; } done = true; clearTimeout(to); rej(e || { type: 'error' }); });
      c.on('open', () => {
        if (done) return; done = true; clearTimeout(to);
        c.send({ t: 'hello', nick, v: VERSION, sk, tr });
        res();
        // the host answers a hello at once (lobby / start / full / ver); stay silent for too long = dead host
        this._hs = setTimeout(() => { if (!this.started && !this.gotLobby && !this.dead) this.h.onClosed && this.h.onClosed('timeout'); }, 9000);
      });
      c.on('data', (d) => {
        if (!d || typeof d !== 'object') return;
        if (d.t === 'lobby') { this.gotLobby = true; this.h.onLobby && this.h.onLobby(d.list, this.code); return; }
        if (d.t === 'full' || d.t === 'ver') { this.h.onClosed && this.h.onClosed(d.t); return; }
        if (d.t === 'closed') { this.h.onClosed && this.h.onClosed('closed'); return; }
        if (d.t === 'start') { this.started = true; clearTimeout(this._hs); this.h.onStart && this.h.onStart(d); return; }
        this.h.onData && this.h.onData(null, d);
      });
      c.on('close', () => { if (!this.dead) this.h.onClosed && this.h.onClosed('closed'); });
      c.on('error', () => { if (!this.dead) this.h.onClosed && this.h.onClosed('closed'); });
    });
  }

  /** host -> one client */
  sendTo(id, msg) { const r = this.clients.get(id); if (r && r.conn.open) { try { r.conn.send(msg); } catch { /* ignore */ } } }
  /** host -> all clients */
  broadcast(msg) { for (const r of this.clients.values()) { if (r.conn.open) { try { r.conn.send(msg); } catch { /* ignore */ } } } }
  /** client -> host */
  send(msg) { if (this.conn && this.conn.open) { try { this.conn.send(msg); } catch { /* ignore */ } } }
  kick(id) { const r = this.clients.get(id); if (r) { try { r.conn.close(); } catch { /* ignore */ } } }

  close() {
    if (this.dead) return;
    this.dead = true;
    clearTimeout(this._hs);
    if (this.role === 'host') this.broadcast({ t: 'closed' });
    const p = this.peer;
    setTimeout(() => { try { p && p.destroy(); } catch { /* ignore */ } }, 250);
  }
}
