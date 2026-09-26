'use client';

import { useState } from 'react';

// Mirrors the static site's behaviour: builds a mailto: draft and hands it to
// the user's mail client. Nothing is transmitted from the browser.
export default function ContactForm() {
  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || message.length < 10) {
      setError('Please fill in every field — the message needs at least 10 characters.');
      return;
    }
    setError('');

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto =
      'mailto:aakashsahuu0188@gmail.com' +
      `?subject=${encodeURIComponent(`Portfolio contact — ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-head">
        <h4>Send a note</h4>
        <p>
          Start with the useful details. <span className="req-note">All fields required</span>
        </p>
      </div>

      <label className="field">
        <span>Full name</span>
        <input type="text" name="name" autoComplete="name" maxLength={80} required />
      </label>
      <label className="field">
        <span>Email address</span>
        <input type="email" name="email" autoComplete="email" maxLength={160} required />
      </label>
      <label className="field">
        <span>Your message</span>
        <textarea name="message" rows={4} minLength={10} maxLength={2000} required />
      </label>

      <p className="draft-note" id="contact-draft-note">
        {error || 'Opens your email app with a draft. Nothing is sent until you review and send it there.'}
      </p>

      <button type="submit" className="submit-action">
        Prepare email draft <span className="arrow">↗</span>
      </button>
    </form>
  );
}
