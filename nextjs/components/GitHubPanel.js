'use client';

import { useEffect, useState } from 'react';

const USERNAME = 'theaakashgupta';
const COLORS = ['var(--github-0)', 'var(--github-1)', 'var(--github-2)', 'var(--github-3)', 'var(--github-4)'];
const ROWS = 7;

function localdate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function minOf(a) {
  for (let i = 0; i < a.length; i++) if (a[i].count > 0) return a[i].date;
  return '';
}
function maxOf(a) {
  for (let i = a.length - 1; i >= 0; i--) if (a[i].count > 0) return a[i].date;
  return '';
}

function computeStats(contribs) {
  let commits = 0;
  let days = 0;
  let best = 0;
  let run = 0;
  for (const c of contribs) {
    if (c.count > 0) {
      commits += c.count;
      days++;
      run++;
      if (run > best) best = run;
    } else run = 0;
  }
  let anchor = contribs.length - 1;
  if (anchor >= 0 && contribs[anchor].count === 0) anchor--;
  let current = 0;
  for (let i = anchor; i >= 0; i--) {
    if (contribs[i].count > 0) current++;
    else break;
  }
  return { commits, days, best, current, from: minOf(contribs), to: maxOf(contribs) };
}

// Deterministic sample grid, used only when the API is unreachable.
function seedCells() {
  const cells = [];
  let seed = 20260922;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  const bursts = [[4, 0.4], [9, 0.2], [15, 0.45], [23, 0.18], [29, 0.55], [37, 0.22], [43, 0.38], [49, 0.14]];
  for (let w = 0; w < 52; w++) {
    let base = 0.01;
    for (const b of bursts) base += b[1] * Math.exp(-Math.pow(w - b[0], 2) / 18);
    for (let r = 0; r < ROWS; r++) {
      const weekend = r === 0 || r === 6 ? 0.25 : 1;
      const p = base * weekend * (0.4 + rnd() * 1.2);
      let l = 0;
      if (p > 0.16) l = 1;
      if (p > 0.4) l = 2;
      if (p > 0.72) l = 3;
      if (p > 1.05) l = 4;
      cells.push({ level: l, key: null });
    }
  }
  return cells;
}

function liveCells(contribs) {
  const map = {};
  let min = null;
  let max = null;
  for (const c of contribs) {
    map[c.date] = c;
    if (!min || c.date < min) min = c.date;
    if (!max || c.date > max) max = c.date;
  }
  if (!min) return null;
  const start = new Date(min);
  start.setDate(start.getDate() - start.getDay());
  const end = new Date(max);
  const weeks = Math.ceil(((end - start) / 86400000 + 1) / 7);
  const cells = [];
  for (let w = 0; w < weeks; w++) {
    for (let r = 0; r < ROWS; r++) {
      const d = new Date(start);
      d.setDate(start.getDate() + w * 7 + r);
      const key = localdate(d);
      const c = map[key];
      cells.push({ level: c ? c.level : 0, key, count: c ? c.count : 0 });
    }
  }
  return cells;
}

export default function GitHubPanel() {
  const [state, setState] = useState({ cells: [], stats: null, period: '365-day signal', status: '' });

  useEffect(() => {
    let cancelled = false;
    const url = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json();
      })
      .then((d) => {
        const arr = (d && d.contributions) || [];
        if (!arr.length) throw new Error('empty');
        const cells = liveCells(arr);
        if (!cells) throw new Error('empty');
        if (cancelled) return;
        const s = computeStats(arr);
        setState({
          cells,
          stats: s,
          period: s.from && s.to ? `${s.from} → ${s.to}` : '365-day signal',
          status: `Live data @${USERNAME} · ${s.from} → ${s.to}`,
        });
      })
      .catch(() => {
        if (cancelled) return;
        setState({
          cells: seedCells(),
          stats: null,
          period: 'sample year',
          status: 'Live data unavailable — showing a sample year.',
        });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const s = state.stats;

  return (
    <div className="gh-panel">
      <div className="gh-head">
        <span className="signal-label" id="gh-period">
          {state.period}
        </span>
        <h3>GitHub activity</h3>
      </div>

      <div className="gh-grid-wrap">
        <div className="gh-grid" id="gh-grid">
          {state.cells.map((c, i) => (
            <div
              className="gh-cell"
              key={c.key || `seed-${i}`}
              style={{ background: COLORS[c.level] }}
              title={
                c.key
                  ? `${c.key} · ${c.count} contribution${c.count === 1 ? '' : 's'}`
                  : 'Sample data'
              }
            />
          ))}
        </div>
      </div>

      <div className="gh-stats">
        <div className="gh-stat">
          <span className="gh-stat-value" id="s-current">
            {s ? `${s.current} days` : '–'}
          </span>
          <span className="gh-stat-label">Current streak</span>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-value" id="s-best">
            {s ? `${s.best} days` : '–'}
          </span>
          <span className="gh-stat-label">Longest streak</span>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-value" id="s-days">
            {s ? `${s.days} days` : '–'}
          </span>
          <span className="gh-stat-label">Days active</span>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-value" id="s-commits">
            {s ? s.commits : '–'}
          </span>
          <span className="gh-stat-label">Commits (yr)</span>
        </div>
      </div>

      <div className="gh-legend">
        Less
        <span className="gh-cell" style={{ background: '#efead9' }} />
        <span className="gh-cell" style={{ background: '#e2d4a8' }} />
        <span className="gh-cell" style={{ background: '#c4b06c' }} />
        <span className="gh-cell" style={{ background: '#9a8038' }} />
        <span className="gh-cell" style={{ background: '#6f5720' }} />
        More
      </div>

      <p className="gh-note">
        <span className="gh-status" id="gh-status">
          {state.status}
        </span>{' '}
        <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
          View full profile on GitHub →
        </a>
      </p>
    </div>
  );
}
