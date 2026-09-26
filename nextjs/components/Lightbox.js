'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Lightbox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        className="avatar-button"
        id="avatar-button"
        aria-label="Open Aakash Gupta profile picture"
        onClick={() => setOpen(true)}
      >
        <Image className="avatar" src="/assets/photo-passport.jpg" alt="Aakash Gupta" width={78} height={78} priority />
      </button>

      <div
        className={`lightbox${open ? ' show' : ''}`}
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Aakash Gupta"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <Image src="/assets/photo-passport.jpg" alt="Aakash Gupta" width={280} height={360} />
        <button className="lightbox-close" id="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">
          &times;
        </button>
      </div>
    </>
  );
}
