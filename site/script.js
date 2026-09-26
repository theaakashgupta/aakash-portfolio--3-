// ============================================================
// Aakash Gupta Portfolio — behavior
// ============================================================

// GitHub contribution grid + streak stats (live data, with sample fallback)
(function () {
  var grid = document.getElementById('gh-grid');
  if (!grid) return;
  var username = 'theaakashgupta';
  var colors = ['var(--github-0)', 'var(--github-1)', 'var(--github-2)', 'var(--github-3)', 'var(--github-4)'];
  var ROWS = 7;

  function localdate(d) {
    var y = d.getFullYear();
    var m = ('0' + (d.getMonth() + 1)).slice(-2);
    var day = ('0' + d.getDate()).slice(-2);
    return y + '-' + m + '-' + day;
  }

  // Build a column-major grid (weeks x 7 rows) aligned to a Sunday start.
  function renderGrid(contribs) {
    var map = {};
    var min = null, max = null;
    contribs.forEach(function (c) { map[c.date] = c; if (!min || c.date < min) min = c.date; if (!max || c.date > max) max = c.date; });
    if (!min) return false;
    var start = new Date(min);
    start.setDate(start.getDate() - start.getDay());
    var end = new Date(max);
    var weeks = Math.ceil(((end - start) / 86400000 + 1) / 7);
    grid.innerHTML = '';
    for (var w = 0; w < weeks; w++) {
      for (var r = 0; r < ROWS; r++) {
        var d = new Date(start);
        d.setDate(start.getDate() + w * 7 + r);
        var key = localdate(d);
        var c = map[key];
        var lvl = c ? c.level : 0;
        var cnt = c ? c.count : 0;
        var cell = document.createElement('div');
        cell.className = 'gh-cell';
        cell.style.background = colors[lvl];
        cell.title = key + (cnt > 0 ? ' · ' + cnt + ' contribution' + (cnt === 1 ? '' : 's') : ' · No contributions');
        grid.appendChild(cell);
      }
    }
    return true;
  }

  function computeStats(contribs) {
    var commits = 0, days = 0, best = 0, run = 0;
    contribs.forEach(function (c) {
      if (c.count > 0) { commits += c.count; days++; run++; if (run > best) best = run; }
      else run = 0;
    });
    // Current streak ends today if today has contributions, otherwise yesterday.
    var n = contribs.length, anchor = n - 1;
    if (anchor >= 0 && contribs[anchor].count === 0) anchor--;
    var current = 0;
    for (var i = anchor; i >= 0; i--) {
      if (contribs[i].count > 0) current++; else break;
    }
    return { commits: commits, days: days, best: best, current: current, from: minOf(contribs), to: maxOf(contribs) };
  }

  function minOf(a) { for (var i = 0; i < a.length; i++) if (a[i].count > 0) return a[i].date; return ''; }
  function maxOf(a) { for (var i = a.length - 1; i >= 0; i--) if (a[i].count > 0) return a[i].date; return ''; }

  function setStat(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function fillStats(s) {
    setStat('s-current', s.current + ' days');
    setStat('s-best', s.best + ' days');
    setStat('s-days', s.days + ' days');
    setStat('s-commits', s.commits);
    var period = document.getElementById('gh-period');
    if (period && s.from && s.to) period.textContent = s.from + ' → ' + s.to;
    var st = document.getElementById('gh-status');
    if (st) st.textContent = 'Live data @' + username + ' · ' + s.from + ' → ' + s.to;
  }

  fetch('https://github-contributions-api.jogruber.de/v4/' + username + '?y=last', { mode: 'cors' })
    .then(function (r) { if (!r.ok) throw new Error('fetch failed'); return r.json(); })
    .then(function (d) {
      var arr = (d && d.contributions) || [];
      if (!arr.length || !renderGrid(arr)) throw new Error('empty');
      fillStats(computeStats(arr));
    })
    .catch(function () {
      seedFallback();
      var st = document.getElementById('gh-status');
      if (st) st.textContent = 'Live data unavailable — showing a sample year.';
    });

  // Deterministic sample grid used only as a fallback if the API is unreachable.
  function seedFallback() {
    var seed = 20260922;
    function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; }
    var bursts = [[4, 0.4], [9, 0.2], [15, 0.45], [23, 0.18], [29, 0.55], [37, 0.22], [43, 0.38], [49, 0.14]];
    for (var w = 0; w < 52; w++) {
      var base = 0.01;
      bursts.forEach(function (b) { base += b[1] * Math.exp(-Math.pow(w - b[0], 2) / 18); });
      for (var r = 0; r < ROWS; r++) {
        var weekend = r === 0 || r === 6 ? 0.25 : 1;
        var p = base * weekend * (0.4 + rnd() * 1.2);
        var l = 0;
        if (p > 0.16) l = 1;
        if (p > 0.4) l = 2;
        if (p > 0.72) l = 3;
        if (p > 1.05) l = 4;
        var cell = document.createElement('div');
        cell.className = 'gh-cell';
        cell.style.background = colors[l];
        grid.appendChild(cell);
      }
    }
  }
})();

// Copy email button
(function () {
  var btn = document.getElementById('email-copy');
  if (!btn) return;
  var label = document.getElementById('email-copy-label');
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText('aakashsahuu0188@gmail.com').then(function () {
      if (label) label.textContent = 'Copied!';
      setTimeout(function () { if (label) label.textContent = 'Copy email'; }, 2000);
    });
  });
})();

// Contact form -> email draft
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
    var mailto = 'mailto:aakashsahuu0188@gmail.com'
      + '?subject=' + encodeURIComponent('Portfolio contact — ' + name)
      + '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  });
})();

// Photo lightbox
(function () {
  var open = document.getElementById('avatar-button');
  var lightbox = document.getElementById('lightbox');
  var close = document.getElementById('lightbox-close');
  if (!open || !lightbox) return;
  function show() { lightbox.classList.add('show'); }
  function hide() { lightbox.classList.remove('show'); }
  open.addEventListener('click', function (e) { e.stopPropagation(); show(); });
  close.addEventListener('click', hide);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) hide(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
})();

// Mobile navigation
(function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!nav || !toggle || !links) return;

  nav.classList.add('nav-ready');
  var mq = window.matchMedia('(max-width:760px)');

  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function isOpen() { return nav.classList.contains('nav-open'); }

  toggle.addEventListener('click', function () { setOpen(!isOpen()); });

  // Following a link should never leave the panel hanging open.
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) { setOpen(false); toggle.focus(); }
  });

  document.addEventListener('click', function (e) {
    if (isOpen() && !nav.contains(e.target)) setOpen(false);
  });

  // Reset when crossing back to the desktop layout.
  var onChange = function (e) { if (!e.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
