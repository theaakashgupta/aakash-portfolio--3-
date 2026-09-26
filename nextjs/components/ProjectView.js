import Link from 'next/link';
import Rich from './Rich';
import { STATUS_TEXT, adjacentProjects } from '@/data/projects';

function Section({ section }) {
  return (
    <section className="proj-section">
      <h2 className="proj-h2">{section.h}</h2>

      {(section.p || []).map((para, i) => (
        <p key={`p${i}`}>
          <Rich text={para} />
        </p>
      ))}

      {section.flow && (
        <ol className="flow">
          {section.flow.map(([name, desc], i) => (
            <li className="flow-step" key={name}>
              <span className="flow-idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="flow-body">
                <strong>{name}</strong>
                <p>
                  <Rich text={desc} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}

      {section.scores && (
        <ul className="bullets">
          {section.scores.map(([label, score]) => (
            <li key={label}>
              <strong>{label}</strong> — similarity <strong>{score}</strong>
            </li>
          ))}
        </ul>
      )}

      {section.bullets && (
        <ul className="bullets">
          {section.bullets.map((b, i) => (
            <li key={i}>
              <Rich text={b} />
            </li>
          ))}
        </ul>
      )}

      {section.note && (
        <div className="proj-note">
          {section.note.map((para, i) => (
            <p key={i}>
              <Rich text={para} />
            </p>
          ))}
        </div>
      )}

      {(section.p_after || []).map((para, i) => (
        <p key={`pa${i}`}>
          <Rich text={para} />
        </p>
      ))}
    </section>
  );
}

export default function ProjectView({ project }) {
  const { prev, next } = adjacentProjects(project.slug);

  return (
    <main className="profile-page">
      <section className={`project-hero ${project.grad}`}>
        <div className="profile-container hero-inner">
          <span className="hero-label">{project.label}</span>
          <h1>{project.title}</h1>
          <p className="hero-summary">{project.summary}</p>
          <div className="hero-meta">
            <span className={`badge ${project.status}`}>
              <span className="pulse" />
              {STATUS_TEXT[project.status]}
            </span>
          </div>
          <div className="video-tags hero-tags">
            {project.tags.map((t) => (
              <span className="video-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            {project.demo && (
              <a className="hero-btn primary" href={project.demo} target="_blank" rel="noopener noreferrer">
                Open live demo <span className="arrow">↗</span>
              </a>
            )}
            {project.github && (
              <a className="hero-btn ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                View source <span className="arrow">↗</span>
              </a>
            )}
            {!project.demo && !project.github && (
              <span className="hero-btn ghost" aria-disabled="true">
                Repo &amp; demo link coming soon
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="profile-container">
        <Link className="back-link" href="/work">
          ← All work
        </Link>

        <div className="proj-layout">
          <aside className="proj-side">
            <section>
              <p className="side-label">At a glance</p>
              <div className="fact-list">
                <div className="fact">
                  <span className="fact-k">Status</span>
                  <span className="fact-v">{STATUS_TEXT[project.status]}</span>
                </div>
                <div className="fact">
                  <span className="fact-k">Also known as</span>
                  <span className="fact-v">{project.also}</span>
                </div>
              </div>
            </section>

            <section>
              <p className="side-label">Stack</p>
              <ul className="side-stack">
                {project.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section>
              <p className="side-label">Links</p>
              <div className="side-links">
                {project.demo && (
                  <a className="action-link" href={project.demo} target="_blank" rel="noopener noreferrer">
                    Open live demo ↗
                  </a>
                )}
                {project.github && (
                  <a className="action-link" href={project.github} target="_blank" rel="noopener noreferrer">
                    Source code ↗
                  </a>
                )}
                {!project.demo && !project.github && (
                  <span className="proj-pending" style={{ fontStyle: 'italic', fontSize: '12.5px' }}>
                    Link coming soon
                  </span>
                )}
              </div>
            </section>
          </aside>

          <div className="proj-body">
            {project.sections.map((s) => (
              <Section section={s} key={s.h} />
            ))}
          </div>
        </div>

        <nav className="proj-pager" aria-label="Project navigation">
          {prev ? (
            <Link className="pager-link" href={`/${prev.slug}`}>
              <span className="pager-dir">Previous project</span>
              <span className="pager-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="pager-link next" href={`/${next.slug}`}>
              <span className="pager-dir">Next project</span>
              <span className="pager-title">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
