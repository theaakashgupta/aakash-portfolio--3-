'use client';

import { useState } from 'react';
import { MailIcon } from './Icons';

const EMAIL = 'aakashsahuu0188@gmail.com';

export default function EmailCopyButton() {
  const [label, setLabel] = useState('Copy email');
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API needs a secure context; fall back to a temporary selection.
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        document.body.removeChild(ta);
        return;
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setLabel('Copied!');
    setTimeout(() => {
      setCopied(false);
      setLabel('Copy email');
    }, 2000);
  }

  return (
    <button
      className="social-option email-copy"
      id="email-copy"
      aria-label={`Copy ${EMAIL}`}
      onClick={copy}
    >
      <MailIcon />
      <span className="social-label" id="email-copy-label" aria-live="polite">
        {label}
      </span>
    </button>
  );
}
