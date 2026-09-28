'use client';

import { useLayoutEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@/components/Icons';

const STORAGE_KEY = 'theme';

function resolveTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  // Same value on the server and on the first client render, so hydration
  // matches; the layout effect corrects it before the browser paints. The
  // inline script in layout.js has already set data-theme by then, so re-applying
  // it here is only meaningful for the Strict Mode remount in development.
  const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    const current = resolveTheme();
    document.documentElement.setAttribute('data-theme', current);
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}>
      {/* Both icons ship in the HTML and CSS picks one from data-theme, which the
          inline script has already set by first paint. */}
      <span className="theme-icons" aria-hidden="true">
        <SunIcon className="theme-icon-sun" />
        <MoonIcon className="theme-icon-moon" />
      </span>
    </button>
  );
}
