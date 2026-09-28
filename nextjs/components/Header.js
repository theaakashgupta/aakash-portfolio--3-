'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/work', label: 'Work', key: 'work' },
  { href: '/#toolkit', label: 'Toolkit', key: 'toolkit' },
  { href: '/#contact', label: 'Contact', key: 'contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // The static site added nav-ready from script, so the links stay visible without JS.
  const [ready, setReady] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const active = pathname === '/' ? 'home' : pathname.startsWith('/work') ? 'work' : null;
  // The static site used a different brand photo on the home page; preserved here.
  const brandPhoto = pathname === '/' ? '/assets/photo.jpg' : '/assets/photo-passport.jpg';

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e) {
      if (e.key !== 'Escape') return;
      setOpen((wasOpen) => {
        if (wasOpen && toggleRef.current) toggleRef.current.focus();
        return false;
      });
    }
    function onClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = (e) => {
      if (!e.matches) setOpen(false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else if (mq.removeListener) mq.removeListener(onChange);
    };
  }, []);

  return (
    <header className="site-header">
      <nav
        className={`site-nav profile-container${ready ? ' nav-ready' : ''}${open ? ' nav-open' : ''}`}
        ref={navRef}
      >
        <Link href="/" className="brand">
          <span className="brand-mark">
            <Image src={brandPhoto} alt="" width={30} height={30} priority />
          </span>
          Aakash Gupta
        </Link>

        <ul className={`nav-links${open ? ' is-open' : ''}`} id="nav-links">
          {LINKS.map((l) => (
            <li key={l.key}>
              <Link href={l.href} className={active === l.key ? 'nav-active' : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="book"
            href="mailto:aakashsahuu0188@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's talk <span className="arrow">↗</span>
          </a>
        </div>

        <button
          className="nav-toggle"
          id="nav-toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>
    </header>
  );
}
