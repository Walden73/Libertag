/* site-tweaks.jsx — LiberTag site · panneau de Tweaks
   Branche le panneau hôte et applique les réglages au DOM vanilla. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "or",
  "hero": "split",
  "chips": true,
  "density": "3",
  "corners": "soft",
  "modesLayout": "vertical",
  "titlePlaced": true,
  "titleX": -88,
  "titleY": 491,
  "tabletPlaced": true,
  "tabletX": 317,
  "tabletY": 0,
  "tagPlaced": true,
  "tagX": 464,
  "tagY": -1,
  "title2Placed": true,
  "title2X": 474,
  "title2Y": 491,
  "lineSX": 841,
  "lineSY": 1222,
  "lineEX": 43,
  "lineEY": 567,
  "lineCurve": 56,
  "lineDot": 3,
  "lineGap": 6,
  "modeTitlePlaced": true,
  "modeTitleX": 6,
  "modeTitleY": 546,
  "modeSidecarPlaced": true,
  "modeSidecarX": 367,
  "modeSidecarY": 593,
  "modeEmbedPlaced": true,
  "modeEmbedX": 6,
  "modeEmbedY": 593,
  "modeBonusPlaced": true,
  "modeBonusX": 730,
  "modeBonusY": 567,
  "featBg": true,
  "featBgColor": "#1c1c1c",
  "featBgTop": 1002,
  "featBgHeight": 988,
  "featBgTilt": 122,
  "servicesBg": "#15100F",
}/*EDITMODE-END*/;

// ── Fond de la section « Services compris » ─────────────────────────────────
// Couleur libre. La luminance décide du texte : sombre (band-cream) sur fond clair,
// crème par défaut sur fond sombre.
// Quelques teintes de la charte proposées en raccourcis.
const SERVICES_SWATCHES = ['#F0E1C8', '#15100F', '#1A130E', '#231A10', '#2E141A', '#1C2A24'];

function isLightHex(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
  if (!m) return false;
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  // luminance perçue
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150;
}

function applyServicesBg(t) {
  const sec = document.getElementById('services');
  if (!sec) return;
  const hex = t.servicesBg || '#F0E1C8';
  sec.classList.toggle('band-cream', isLightHex(hex));
  sec.style.background = hex;
}

const ACCENTS = {
  or:       { chaud: '#E0A93C', base: '#D4A24A', deep: '#A9772E', soft: 'rgba(212,162,74,.12)', line: 'rgba(212,162,74,.42)', ink: '#1C1409' },
  bordeaux: { chaud: '#C0556C', base: '#A23E55', deep: '#7D2E40', soft: 'rgba(162,62,85,.15)',  line: 'rgba(162,62,85,.46)',  ink: '#FFF1F2' },
  sauge:    { chaud: '#9DBCB0', base: '#83ABA1', deep: '#5D8479', soft: 'rgba(131,171,161,.15)', line: 'rgba(131,171,161,.46)', ink: '#11201B' },
};
const ACCENT_SWATCH = { or: ['#E0A93C', '#A9772E'], bordeaux: ['#C0556C', '#7D2E40'], sauge: ['#9DBCB0', '#5D8479'] };

// ── Panneau coloré de la section « Plaisir des retrouvailles » ──────────────
// Préréglages rapides (teintes du charte) — la couleur reste librement modifiable.
const FEAT_PRESETS = [
  { hex: '#231A10', label: 'Velours' },
  { hex: '#3C2B12', label: 'Or profond' },
  { hex: '#2E141A', label: 'Bordeaux' },
  { hex: '#1C2A24', label: 'Sauge' },
];

// Assombrit un hex d'un facteur (0–1) pour le bas du dégradé.
function darkenHex(hex, f) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
  if (!m) return hex || '#1A130E';
  const n = parseInt(m[1], 16);
  const r = Math.round(((n >> 16) & 255) * (1 - f));
  const g = Math.round(((n >> 8) & 255) * (1 - f));
  const b = Math.round((n & 255) * (1 - f));
  return `rgb(${r},${g},${b})`;
}

function featFill(hex) {
  return `linear-gradient(180deg, ${hex || '#231A10'}, ${darkenHex(hex, 0.32)})`;
}

function applyFeatBg(t) {
  const el = document.querySelector('.feat-bg');
  if (!el) return;
  el.style.display = t.featBg ? 'block' : 'none';
  el.style.setProperty('--feat-top', (t.featBgTop || 0) + 'px');
  el.style.setProperty('--feat-height', (t.featBgHeight || 0) + 'px');
  el.style.setProperty('--feat-fill', featFill(t.featBgColor));
  const tilt = t.featBgTilt || 0;
  const lt = Math.max(0, tilt), rt = Math.max(0, -tilt);
  el.style.setProperty('--feat-clip', `polygon(0 ${lt}px, 100% ${rt}px, 100% 100%, 0 100%)`);
}

// ── Éléments déplaçables ────────────────────────────────────────────────────
// ctx = bloc de référence (containing block) pour le positionnement absolu.
// hideLine : masque le fil doré décoratif quand l'élément est déplacé.
// freeze   : fige la hauteur du ctx pour qu'il ne s'effondre pas (élément
//            sorti du flux normal).
const MOVABLES = [
  { id: 'title',  sel: '.attr-t1',   ctx: '.attr-flow', z: '6',
    label: 'Position du titre « Attribuez vos Tags »',
    desc: 'Glisse directement la pastille « Attribuez vos Tags » dans la maquette, ou ajuste finement ci-dessous.' },
  { id: 'tablet', sel: '.cwf-phone', ctx: '.cwf-demo',  z: '4', freeze: true,
    label: 'Position de la tablette',
    desc: 'Glisse directement la tablette dans la maquette, ou ajuste finement ci-dessous.' },
  { id: 'tag',    sel: '.cwf-tag',   ctx: '.cwf-phone', z: '8',
    label: 'Position du tag « Noir & Blanc »',
    desc: 'Glisse directement l\u2019étiquette « Noir & Blanc », ou ajuste finement ci-dessous.' },
  { id: 'title2', sel: '.attr-t2',   ctx: '.cwf-phone', z: '7',
    label: 'Position du titre « …sélection groupée »',
    desc: 'Glisse directement la pastille « …ou bien en sélection groupée ! », ou ajuste finement ci-dessous.' },
  { id: 'modeTitle', sel: '.xmp-mv-title', ctx: '.xmp-showcase', z: '8',
    label: 'Position du surtitre « Deux modes de sortie »',
    desc: 'Glisse directement le surtitre « Deux modes de sortie », ou ajuste finement ci-dessous.' },
  { id: 'modeSidecar', sel: '.xmp-mv-sidecar', ctx: '.xmp-showcase', z: '7', w: '320px',
    label: 'Position du bento « Sidecar »',
    desc: 'Glisse directement le bento « Sidecar », ou ajuste finement ci-dessous.' },
  { id: 'modeEmbed', sel: '.xmp-mv-embed', ctx: '.xmp-showcase', z: '7', w: '320px',
    label: 'Position du bento « Gravé dans la photo »',
    desc: 'Glisse directement le bento « Gravé dans la photo », ou ajuste finement ci-dessous.' },
  { id: 'modeBonus', sel: '.xmp-mv-bonus', ctx: '.xmp-showcase', z: '7', w: '320px',
    label: 'Position du bento « Bonus · Renommage »',
    desc: 'Glisse directement le bento « Renommage de masse », ou ajuste finement ci-dessous.' },
];

function applyTweaks(t) {
  const r = document.documentElement;
  const a = ACCENTS[t.accent] || ACCENTS.or;
  r.style.setProperty('--accent', a.base);
  r.style.setProperty('--accent-chaud', a.chaud);
  r.style.setProperty('--accent-deep', a.deep);
  r.style.setProperty('--accent-soft', a.soft);
  r.style.setProperty('--accent-line', a.line);
  r.style.setProperty('--accent-ink', a.ink);
  r.style.setProperty('--radius', t.corners === 'sharp' ? '6px' : '20px');

  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.toggle('hero-centered', t.hero === 'centered');
    hero.classList.toggle('no-chips', !t.chips);
  }
  document.querySelectorAll('[data-grid]').forEach((el) => el.classList.toggle('cols4', t.density === '4'));

  applyFeatBg(t);
  applyServicesBg(t);
  MOVABLES.forEach((cfg) => applyMovable(cfg, t));
  containMovables(t);
  applyLineStyle(t);
  drawLine(t.lineSX, t.lineSY, t.lineEX, t.lineEY, t.lineCurve);
}

// ── Conteneur : empêche les blocs sortis du flux (position absolue) de
// déborder sous leur section. On agrandit chaque ctx pour couvrir le bas
// du bloc placé le plus bas — sinon le séparateur de la section suivante
// (filet doré) viendrait chevaucher un bento déplacé trop bas. ─────────────
function containMovables(t) {
  const groups = new Map();
  MOVABLES.forEach((cfg) => {
    const ctx = document.querySelector(cfg.ctx);
    if (!ctx) return;
    if (!groups.has(ctx)) groups.set(ctx, []);
    if (t[cfg.id + 'Placed']) {
      const el = document.querySelector(cfg.sel);
      if (el) groups.get(ctx).push(el);
    }
  });
  groups.forEach((els, ctx) => {
    if (!els.length) { ctx.style.minHeight = ''; return; }
    const cr = ctx.getBoundingClientRect();
    let maxBottom = 0;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      maxBottom = Math.max(maxBottom, r.bottom - cr.top);
    });
    ctx.style.minHeight = Math.ceil(maxBottom + 24) + 'px';
  });
}

// ── Ligne pointillée dorée en courbe régulière ─────────────────────────
// Coordonnées en px, relatives à .attr-flow (même repère que les poignées).
// curvePct = rayon de courbure (% de la longueur ; négatif = bombe inverse).
// Grosseur des points (stroke-width) et espacement (gap du dasharray).
// stroke-linecap:round + dash de longueur 0 => chaque pas dessine un point rond.
function applyLineStyle(t) {
  const path = document.querySelector('.attr-line-path');
  if (!path) return;
  const dot = t.lineDot == null ? 7 : t.lineDot;
  const gap = t.lineGap == null ? 18 : t.lineGap;
  path.style.strokeWidth = dot + 'px';
  path.style.strokeDasharray = '0 ' + gap;
}

function drawLine(sx, sy, ex, ey, curvePct) {
  const flow = document.querySelector('.attr-flow');
  const svg = document.querySelector('.attr-line');
  const path = document.querySelector('.attr-line-path');
  if (!flow || !svg || !path) return;
  const W = flow.clientWidth, H = flow.clientHeight;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const dx = ex - sx, dy = ey - sy;
  const len = Math.hypot(dx, dy) || 1;
  // perpendiculaire (rotation -90°) : la courbe se bombe régulièrement
  const nx = dy / len, ny = -dx / len;
  const bow = len * ((curvePct == null ? 16 : curvePct) / 100);
  const cx = (sx + ex) / 2 + nx * bow;
  const cy = (sy + ey) / 2 + ny * bow;
  path.setAttribute('d', `M ${sx} ${sy} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex} ${ey}`);
}

// ── Application d'une position ──────────────────────────────────────────────
function applyMovable(cfg, t) {
  const el = document.querySelector(cfg.sel);
  if (!el) return;
  if (cfg.orig == null) cfg.orig = el.getAttribute('style') || '';
  const line = cfg.hideLine ? document.querySelector('.attr-line') : null;

  if (t[cfg.id + 'Placed']) {
    if (cfg.freeze) {
      const ctx = document.querySelector(cfg.ctx);
      if (ctx) ctx.style.minHeight = el.offsetHeight + 'px';
    }
    el.style.position = 'absolute';
    el.style.margin = '0';
    if (cfg.w) el.style.width = cfg.w;
    el.style.left = t[cfg.id + 'X'] + 'px';
    el.style.top = t[cfg.id + 'Y'] + 'px';
    el.style.zIndex = cfg.z || '6';
    if (line) line.style.opacity = '0';
  } else {
    el.setAttribute('style', cfg.orig || '');
    if (cfg.freeze) {
      const ctx = document.querySelector(cfg.ctx);
      if (ctx) ctx.style.minHeight = '';
    }
    if (line) line.style.opacity = '';
  }
}

// ── Bornes de déplacement ───────────────────────────────────────────────────
// Horizontalement : d'un bord à l'autre de la fenêtre (très large).
// Verticalement : sur toute la hauteur du bloc « Fonctionnalités » (.attr-flow).
function limitsFor(cfg) {
  const el = document.querySelector(cfg.sel);
  const ctx = document.querySelector(cfg.ctx);
  if (!el || !ctx) return { minX: 0, maxX: 1000, minY: 0, maxY: 1000 };
  const cr = ctx.getBoundingClientRect();
  const flow = el.closest('.attr-flow') || ctx;
  const fl = flow.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  return {
    minX: Math.round(-cr.left),
    maxX: Math.max(0, Math.round((vw - cr.left) - el.offsetWidth)),
    minY: Math.round(fl.top - cr.top),
    maxY: Math.max(0, Math.round((fl.bottom - cr.top) - el.offsetHeight)),
  };
}

function MovableSection({ cfg, t, setTweak, bounds, onCopy, copied }) {
  const b = bounds[cfg.id] || { minX: 0, maxX: 1000, minY: 0, maxY: 1000 };
  const pk = cfg.id + 'Placed', xk = cfg.id + 'X', yk = cfg.id + 'Y';
  return (
    <>
      <TweakSection label={cfg.label} />
      <p style={{ margin: '2px 0 12px', fontSize: 12, lineHeight: 1.45, opacity: .72 }}>{cfg.desc}</p>
      <TweakSlider label="Horizontal" value={t[xk]} min={b.minX} max={b.maxX} step={1} unit=""
        onChange={(v) => setTweak({ [pk]: true, [xk]: v })} />
      <TweakSlider label="Vertical" value={t[yk]} min={b.minY} max={b.maxY} step={1} unit=""
        onChange={(v) => setTweak({ [pk]: true, [yk]: v })} />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <TweakButton label="Réinitialiser" secondary onClick={() => setTweak({ [pk]: false })} />
        <TweakButton label={copied ? 'Copié !' : 'Copier la position'} onClick={() => onCopy(cfg)} />
      </div>
    </>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  const setRef = React.useRef(setTweak); setRef.current = setTweak;
  const tRef = React.useRef(t); tRef.current = t;
  const handlesRef = React.useRef([]);
  const [editMode, setEditMode] = React.useState(false);
  const [bounds, setBounds] = React.useState({});
  const [lineBounds, setLineBounds] = React.useState({ minX: 0, maxX: 1200, maxY: 1400 });
  const [copied, setCopied] = React.useState({});

  // Mode édition (panneau Tweaks ouvert) : affiche les poignées de la ligne.
  React.useEffect(() => {
    const onMsg = (e) => {
      const ty = e && e.data && e.data.type;
      if (ty === '__activate_edit_mode') setEditMode(true);
      else if (ty === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const measure = React.useCallback(() => {
    const m = {};
    MOVABLES.forEach((cfg) => { m[cfg.id] = limitsFor(cfg); });
    setBounds(m);
    const flow = document.querySelector('.attr-flow');
    if (flow) {
      const f = flow.getBoundingClientRect();
      const vw = document.documentElement.clientWidth;
      setLineBounds({ minX: Math.round(-f.left), maxX: Math.round(vw - f.left), maxY: Math.round(flow.clientHeight) });
    }
  }, []);

  // ── Drag direct de chaque élément déplaçable ──────────────────────────────
  React.useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    const redraw = () => drawLine(tRef.current.lineSX, tRef.current.lineSY, tRef.current.lineEX, tRef.current.lineEY, tRef.current.lineCurve);
    window.addEventListener('resize', redraw);
    const cleanups = [];

    MOVABLES.forEach((cfg) => {
      const el = document.querySelector(cfg.sel);
      const ctx = document.querySelector(cfg.ctx);
      if (!el || !ctx) return;
      if (cfg.orig == null) cfg.orig = el.getAttribute('style') || '';
      el.style.cursor = 'grab';
      el.style.touchAction = 'none';
      el.title = 'Glissez pour déplacer';
      let dragging = false, gdx = 0, gdy = 0, last = null;

      const onMove = (e) => {
        if (!dragging) return;
        const cr = ctx.getBoundingClientRect();
        const lim = limitsFor(cfg);
        const x = Math.max(lim.minX, Math.min(e.clientX - cr.left - gdx, lim.maxX));
        const y = Math.max(lim.minY, Math.min(e.clientY - cr.top - gdy, lim.maxY));
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        last = { x: Math.round(x), y: Math.round(y) };
      };
      const onUp = (e) => {
        if (!dragging) return;
        dragging = false;
        el.style.cursor = 'grab';
        try { el.releasePointerCapture(e.pointerId); } catch (_) {}
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        if (last) setRef.current({ [cfg.id + 'Placed']: true, [cfg.id + 'X']: last.x, [cfg.id + 'Y']: last.y });
      };
      const onDown = (e) => {
        e.preventDefault();
        e.stopPropagation(); // évite que le ctx parent (tablette) démarre aussi
        if (cfg.orig == null) cfg.orig = el.getAttribute('style') || '';
        const cr = ctx.getBoundingClientRect();
        const pr = el.getBoundingClientRect();
        if (cfg.freeze) ctx.style.minHeight = el.offsetHeight + 'px';
        // bascule en absolu à la position visible actuelle, sans saut
        el.style.position = 'absolute';
        el.style.margin = '0';
        if (cfg.w) el.style.width = cfg.w;
        el.style.left = (pr.left - cr.left) + 'px';
        el.style.top = (pr.top - cr.top) + 'px';
        el.style.zIndex = cfg.z || '6';
        if (cfg.hideLine) { const ln = document.querySelector('.attr-line'); if (ln) ln.style.opacity = '0'; }
        gdx = e.clientX - pr.left;
        gdy = e.clientY - pr.top;
        last = { x: Math.round(pr.left - cr.left), y: Math.round(pr.top - cr.top) };
        dragging = true;
        el.style.cursor = 'grabbing';
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      };

      el.addEventListener('pointerdown', onDown);
      cleanups.push(() => el.removeEventListener('pointerdown', onDown));
    });

    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('resize', redraw);
      cleanups.forEach((c) => c());
    };
  }, [measure]);

  // ── Poignées des extrémités de la ligne pointillée ────────────────────────
  React.useEffect(() => {
    const flow = document.querySelector('.attr-flow');
    if (!flow) return;
    const ends = [['lineSX', 'lineSY'], ['lineEX', 'lineEY']];
    const created = ends.map(([xk, yk], i) => {
      const h = document.createElement('div');
      h.className = 'attr-line-handle';
      h.title = i === 0 ? 'Départ de la ligne' : 'Arrivée de la ligne';
      flow.appendChild(h);
      let dragging = false, gdx = 0, gdy = 0;
      const draw = () => drawLine(tRef.current.lineSX, tRef.current.lineSY, tRef.current.lineEX, tRef.current.lineEY, tRef.current.lineCurve);
      const onMove = (e) => {
        if (!dragging) return;
        const fr = flow.getBoundingClientRect();
        const vw = document.documentElement.clientWidth;
        const x = Math.max(-Math.round(fr.left), Math.min(Math.round(e.clientX - fr.left - gdx), Math.round(vw - fr.left)));
        const y = Math.max(0, Math.min(Math.round(e.clientY - fr.top - gdy), Math.round(flow.clientHeight)));
        h.style.left = x + 'px';
        h.style.top = y + 'px';
        tRef.current = { ...tRef.current, [xk]: x, [yk]: y };
        draw();
      };
      const onUp = (e) => {
        if (!dragging) return;
        dragging = false;
        try { h.releasePointerCapture(e.pointerId); } catch (_) {}
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        setRef.current({ [xk]: parseInt(h.style.left, 10) || 0, [yk]: parseInt(h.style.top, 10) || 0 });
      };
      const onDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const r = h.getBoundingClientRect();
        gdx = e.clientX - (r.left + r.width / 2);
        gdy = e.clientY - (r.top + r.height / 2);
        dragging = true;
        try { h.setPointerCapture(e.pointerId); } catch (_) {}
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      };
      h.addEventListener('pointerdown', onDown);
      return { h, onDown };
    });
    handlesRef.current = created.map((c) => c.h);
    return () => created.forEach(({ h, onDown }) => { h.removeEventListener('pointerdown', onDown); h.remove(); });
  }, []);

  // Place / affiche les poignées selon l'état courant.
  React.useEffect(() => {
    const hs = handlesRef.current;
    if (!hs || hs.length < 2) return;
    const coords = [[t.lineSX, t.lineSY], [t.lineEX, t.lineEY]];
    hs.forEach((h, i) => {
      h.style.left = coords[i][0] + 'px';
      h.style.top = coords[i][1] + 'px';
      h.style.display = editMode ? 'block' : 'none';
    });
  }, [t.lineSX, t.lineSY, t.lineEX, t.lineEY, editMode]);

  const onCopy = (cfg) => {
    const txt = `left: ${t[cfg.id + 'X']}px; top: ${t[cfg.id + 'Y']}px;`;
    const done = () => {
      setCopied((s) => ({ ...s, [cfg.id]: true }));
      setTimeout(() => setCopied((s) => ({ ...s, [cfg.id]: false })), 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done).catch(done);
    } else { done(); }
  };

  const copyLine = () => {
    const txt = `départ: ${t.lineSX}px ${t.lineSY}px · arrivée: ${t.lineEX}px ${t.lineEY}px`;
    const done = () => {
      setCopied((s) => ({ ...s, line: true }));
      setTimeout(() => setCopied((s) => ({ ...s, line: false })), 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done).catch(done);
    } else { done(); }
  };

  const accentSwatch = (val) => {
    const [c1, c2] = ACCENT_SWATCH[val];
    return (
      <span style={{ width: 22, height: 22, borderRadius: 7, background: `linear-gradient(135deg, ${c1}, ${c2})`, display: 'inline-block', border: '1px solid rgba(255,255,255,.18)' }} />
    );
  };

  const lineB = lineBounds;

  return (
    <TweaksPanel>
      <TweakSection label="Couleur d'accent" />
      <TweakRow label="Accent">
        <div style={{ display: 'flex', gap: 8 }}>
          {['or', 'bordeaux', 'sauge'].map((k) => (
            <button key={k} onClick={() => setTweak('accent', k)}
              title={k}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 11px 6px 8px',
                borderRadius: 10, cursor: 'pointer', textTransform: 'capitalize',
                fontSize: 12.5, fontWeight: 700, fontFamily: 'inherit',
                background: t.accent === k ? 'rgba(255,255,255,.10)' : 'transparent',
                border: t.accent === k ? '1px solid rgba(255,255,255,.35)' : '1px solid rgba(255,255,255,.12)',
                color: 'inherit',
              }}>
              {accentSwatch(k)} {k === 'or' ? 'Or' : k === 'bordeaux' ? 'Bordeaux' : 'Sauge'}
            </button>
          ))}
        </div>
      </TweakRow>

      <TweakSection label="Mise en page" />
      <TweakRadio label="Hero" value={t.hero}
        options={[{ value: 'split', label: 'Côte à côte' }, { value: 'centered', label: 'Centré' }]}
        onChange={(v) => setTweak('hero', v)} />
      <TweakToggle label="Étiquettes flottantes" value={t.chips} onChange={(v) => setTweak('chips', v)} />

      <TweakSection label="Galerie" />
      <TweakRadio label="Densité" value={t.density}
        options={[{ value: '3', label: '3 col.' }, { value: '4', label: '4 col.' }]}
        onChange={(v) => setTweak('density', v)} />

      <TweakSection label="Style" />
      <TweakRadio label="Coins" value={t.corners}
        options={[{ value: 'soft', label: 'Doux' }, { value: 'sharp', label: 'Nets' }]}
        onChange={(v) => setTweak('corners', v)} />

      <TweakSection label="Fond · Services compris" />
      <TweakRow label="Couleur">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <input type="color" value={t.servicesBg}
            onChange={(e) => setTweak('servicesBg', e.target.value)}
            style={{ width: 40, height: 30, padding: 0, border: '1px solid rgba(255,255,255,.2)', borderRadius: 8, background: 'none', cursor: 'pointer' }} />
          <span style={{ fontSize: 12.5, fontWeight: 700, fontFamily: 'monospace', opacity: .8 }}>{(t.servicesBg || '').toUpperCase()}</span>
        </div>
      </TweakRow>
      <TweakRow label="Raccourcis">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {SERVICES_SWATCHES.map((hex) => (
            <button key={hex} onClick={() => setTweak('servicesBg', hex)} title={hex}
              style={{
                width: 26, height: 26, borderRadius: 8, cursor: 'pointer', padding: 0, background: hex,
                border: (t.servicesBg || '').toLowerCase() === hex.toLowerCase() ? '2px solid rgba(255,255,255,.7)' : '1px solid rgba(255,255,255,.18)',
              }} />
          ))}
        </div>
      </TweakRow>

      <TweakSection label="Panneau coloré · Plaisir des retrouvailles" />
      <p style={{ margin: '2px 0 12px', fontSize: 12, lineHeight: 1.45, opacity: .72 }}>
        Ajoute un fond coloré derrière les deux sous-sections, à la hauteur de ton choix, avec un bord supérieur inclinable.
      </p>
      <TweakToggle label="Afficher le panneau" value={t.featBg} onChange={(v) => setTweak('featBg', v)} />
      <TweakRow label="Couleur">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <input type="color" value={t.featBgColor}
            onChange={(e) => setTweak({ featBg: true, featBgColor: e.target.value })}
            style={{ width: 40, height: 30, padding: 0, border: '1px solid rgba(255,255,255,.2)', borderRadius: 8, background: 'none', cursor: 'pointer' }} />
          <span style={{ fontSize: 12.5, fontWeight: 700, fontFamily: 'monospace', opacity: .8 }}>{(t.featBgColor || '').toUpperCase()}</span>
        </div>
      </TweakRow>
      <TweakRow label="Préréglages">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {FEAT_PRESETS.map((p) => (
            <button key={p.hex} onClick={() => setTweak({ featBg: true, featBgColor: p.hex })}
              title={p.label}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 11px 6px 8px',
                borderRadius: 10, cursor: 'pointer', fontSize: 12.5, fontWeight: 700, fontFamily: 'inherit',
                background: (t.featBgColor || '').toLowerCase() === p.hex.toLowerCase() ? 'rgba(255,255,255,.10)' : 'transparent',
                border: (t.featBgColor || '').toLowerCase() === p.hex.toLowerCase() ? '1px solid rgba(255,255,255,.35)' : '1px solid rgba(255,255,255,.12)',
                color: 'inherit',
              }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, background: p.hex, display: 'inline-block', border: '1px solid rgba(255,255,255,.18)' }} />
              {p.label}
            </button>
          ))}
        </div>
      </TweakRow>
      <TweakSlider label="Position verticale" value={t.featBgTop} min={-300} max={1600} step={2} unit="px"
        onChange={(v) => setTweak({ featBg: true, featBgTop: v })} />
      <TweakSlider label="Hauteur" value={t.featBgHeight} min={0} max={2200} step={2} unit="px"
        onChange={(v) => setTweak({ featBg: true, featBgHeight: v })} />
      <TweakSlider label="Inclinaison du bord supérieur" value={t.featBgTilt} min={-800} max={800} step={2} unit="px"
        onChange={(v) => setTweak({ featBg: true, featBgTilt: v })} />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <TweakButton label="Réinitialiser" secondary
          onClick={() => setTweak({ featBgColor: '#1c1c1c', featBgTop: 1002, featBgHeight: 988, featBgTilt: 122 })} />
      </div>

      {MOVABLES.map((cfg) => (
        <MovableSection key={cfg.id} cfg={cfg} t={t} setTweak={setTweak}
          bounds={bounds} onCopy={onCopy} copied={!!copied[cfg.id]} />
      ))}

      <TweakSection label="Ligne pointillée dorée" />
      <p style={{ margin: '2px 0 12px', fontSize: 12, lineHeight: 1.45, opacity: .72 }}>
        Glisse les deux poignées dorées dans la maquette, ou règle les extrémités ci-dessous.
      </p>
      <TweakSlider label="Départ · X" value={t.lineSX} min={lineB.minX} max={lineB.maxX} step={1} unit=""
        onChange={(v) => setTweak('lineSX', v)} />
      <TweakSlider label="Départ · Y" value={t.lineSY} min={0} max={lineB.maxY} step={1} unit=""
        onChange={(v) => setTweak('lineSY', v)} />
      <TweakSlider label="Arrivée · X" value={t.lineEX} min={lineB.minX} max={lineB.maxX} step={1} unit=""
        onChange={(v) => setTweak('lineEX', v)} />
      <TweakSlider label="Arrivée · Y" value={t.lineEY} min={0} max={lineB.maxY} step={1} unit=""
        onChange={(v) => setTweak('lineEY', v)} />
      <TweakSlider label="Rayon de courbure" value={t.lineCurve} min={-60} max={60} step={1} unit="%"
        onChange={(v) => setTweak('lineCurve', v)} />
      <TweakSlider label="Grosseur des points" value={t.lineDot} min={1} max={24} step={1} unit="px"
        onChange={(v) => setTweak('lineDot', v)} />
      <TweakSlider label="Espacement des points" value={t.lineGap} min={2} max={48} step={1} unit="px"
        onChange={(v) => setTweak('lineGap', v)} />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <TweakButton label="Réinitialiser" secondary
          onClick={() => setTweak({ lineSX: 841, lineSY: 1222, lineEX: 43, lineEY: 567, lineCurve: 56, lineDot: 3, lineGap: 6 })} />
        <TweakButton label={copied.line ? 'Copié !' : 'Copier la position'} onClick={copyLine} />
      </div>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
