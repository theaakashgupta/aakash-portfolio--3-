import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="profile-footer">
      <div className="profile-container footer-inner">
        <p>
          © 2026 Aakash Gupta.{' '}
          <span>Built with AI systems, product taste, and coffee.</span>
        </p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/#toolkit">Toolkit</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
