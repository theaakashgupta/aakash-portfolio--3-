import Link from 'next/link';
import { projects, STATUS_TEXT } from '@/data/projects';
import { PlayIcon, LockIcon } from '@/components/Icons';

export const metadata = {
  title: 'See the work',
  description:
    "Demo videos of Aakash Gupta's builds — AI research systems, RAG applications and machine learning services.",
};

export default function WorkPage() {
  return (
    <main id="work" className="profile-page">
      <section className="section" style={{ borderTop: 'none' }}>
        <div className="profile-container">
          <div className="section-header">
            <span className="section-label" data-index="03">
              See the work
            </span>
            <h2 className="section-title">Selected builds.</h2>
            <p className="section-sub">
              Every build ships with a live demo. Hit play to open the working app in a new tab.
            </p>
          </div>

          <div className="video-grid">
            {projects.map((p) => (
              <div className="video-card" key={p.slug}>
                <div className={`video-thumb ${p.grad}`}>
                  <span className="thumb-mono">{p.mono}</span>
                  {p.demo ? (
                    <a
                      className="play-btn"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={p.playAria}
                    >
                      <PlayIcon />
                    </a>
                  ) : (
                    <span className="play-btn locked" aria-hidden="true">
                      <LockIcon />
                    </span>
                  )}
                  <span className="thumb-chip">{p.chip}</span>
                  <span className="thumb-time">{p.timeLabel}</span>
                </div>

                <div className="video-meta">
                  <div className="video-title-row">
                    <h4>
                      <Link href={`/${p.slug}`}>{p.title}</Link>
                    </h4>
                    <span className={`badge ${p.cardBadge}`}>
                      <span className="pulse" />
                      {STATUS_TEXT[p.cardBadge]}
                    </span>
                  </div>
                  <p className="video-desc">{p.cardDesc}</p>
                  <div className="video-tags">
                    {p.cardTags.map((t) => (
                      <span className="video-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="video-links">
                    <Link className="action-link" href={`/${p.slug}`}>
                      Case study ↗
                    </Link>
                    {p.github && (
                      <a className="action-link" href={p.github} target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                      </a>
                    )}
                    {p.demo && (
                      <a className="action-link" href={p.demo} target="_blank" rel="noopener noreferrer">
                        Open demo ↗
                      </a>
                    )}
                    {!p.demo && !p.github && p.cardPendingLabel && (
                      <span className="proj-pending">{p.cardPendingLabel}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
