// Arena invite links: <page url>#arena=CODE or ?arena=CODE. Parsed once at module load, then stripped from the URL.
let pending = null;
try {
  const m = /[#&?]arena=([A-Za-z0-9]{3,8})/i.exec(location.hash) || /[?&]arena=([A-Za-z0-9]{3,8})/i.exec(location.search);
  if (m) {
    pending = m[1].toUpperCase();
    const sp = new URLSearchParams(location.search); sp.delete('arena');
    const q = sp.toString();
    history.replaceState(null, '', location.pathname + (q ? '?' + q : ''));
  }
} catch (e) { /* ignore */ }

export const hasArenaInvite = () => !!pending;
export function takeArenaInvite() { const c = pending; pending = null; return c; }

/** shareable link: deployed page URL (works under a GitHub Pages subpath), no hash/search of the current page */
export function arenaInviteUrl(code) {
  return location.origin + location.pathname + '?arena=' + encodeURIComponent(code);
}
