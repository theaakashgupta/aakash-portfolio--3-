// Renders the lightweight `**bold**` / `code` markup used in the project data.
// The static site did this with a regex + innerHTML; here it becomes real JSX,
// so the strings must be treated as plain text.
export default function Rich({ text }) {
  const token = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = [];
  let last = 0;
  let m;
  let key = 0;

  while ((m = token.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) {
      parts.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    } else {
      parts.push(<code key={key++}>{tok.slice(1, -1)}</code>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <>{parts}</>;
}
