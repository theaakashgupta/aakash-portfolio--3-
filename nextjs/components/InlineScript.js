'use client';

// React warns when a component renders a <script>, and never executes scripts it
// renders on the client anyway. Emitting text/plain on the client keeps the
// console clean; the server-rendered text/javascript still runs during parsing.
export default function InlineScript({ html }) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
