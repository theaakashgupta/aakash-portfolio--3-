import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main id="home" className="profile-page">
      <section className="section" style={{ borderTop: 'none', paddingTop: '96px' }}>
        <div className="profile-container">
          <div className="section-header">
            <span className="section-label" data-index="404">
              Not found
            </span>
            <h2 className="section-title">That page isn't here.</h2>
            <p className="section-sub">
              The link may be out of date. Try the work index or head back home.
            </p>
          </div>
          <div className="actions">
            <Link className="primary-action" href="/work">
              See the work →
            </Link>
            <Link className="secondary-action" href="/">
              Back home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
