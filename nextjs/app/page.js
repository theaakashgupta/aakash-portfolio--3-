import Link from 'next/link';
import Image from 'next/image';
import GitHubPanel from '@/components/GitHubPanel';
import ContactForm from '@/components/ContactForm';
import Lightbox from '@/components/Lightbox';
import EmailCopyButton from '@/components/EmailCopyButton';
import { PinIcon, GitHubIcon, XIcon, LinkedInIcon, LinkIcon } from '@/components/Icons';

const TOOLS = [
  ['python.svg', 'Python'],
  ['langchain.svg', 'LangChain'],
  ['langgraph.svg', 'LangGraph'],
  ['openai.svg', 'OpenAI API'],
  ['ollama.svg', 'Ollama'],
  ['rag.svg', 'RAG'],
  ['faiss.svg', 'FAISS'],
  ['pinecone.svg', 'Pinecone'],
  ['fastapi.svg', 'FastAPI'],
  ['streamlit.svg', 'Streamlit'],
  ['scikitlearn.svg', 'Scikit-learn'],
  ['pandas.svg', 'Pandas'],
  ['numpy.svg', 'NumPy'],
  ['sql.svg', 'SQL'],
  ['docker.svg', 'Docker'],
  ['git.svg', 'Git'],
  ['github.svg', 'GitHub'],
];

const SIGNALS = [
  ['#2e8b46', 'Building RAG & AI-agent applications'],
  ['#D86A50', 'Exploring LangGraph multi-agent systems'],
  ['#b29245', '3rd year, B.Tech Computer Science'],
  ['#5a7d9a', 'Open to AI/ML & GenAI internships'],
];

export default function Home() {
  return (
    <main id="home" className="profile-page">
      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="profile-container hero-layout">
          <div className="profile-row">
            <div className="hero-head">
              <Lightbox />
              <div className="hero-id">
                <h1 className="name">Aakash Gupta</h1>
                <p className="handle">
                  @theaakashgupta · <span className="domain">AI/ML Engineer</span>
                </p>
              </div>
            </div>

            <p className="statement">
              I turn <em className="em-accent">“can you build this?”</em> into systems that
              actually run.
            </p>
            <p className="bio">
              A Computer Science engineer building AI applications, RAG systems, intelligent
              agents and machine learning solutions — with care for the details that make AI
              useful in production.
            </p>
            <p className="meta">
              <span className="meta-item">
                <PinIcon />
                Greater Noida, India — remote
              </span>
              <span className="meta-item">
                <span className="availability-dot" />
                <a className="meta-link" href="#contact">
                  Open to AI/ML internships
                </a>
              </span>
            </p>
            <div className="actions">
              <a
                className="primary-action"
                href="mailto:aakashsahuu0188@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch <span className="arrow">↗</span>
              </a>
              <Link className="secondary-action" href="/work">
                See the work →
              </Link>
            </div>

            <nav className="social-rail" aria-label="Social links">
              <a
                className="social-option"
                href="https://github.com/theaakashgupta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span className="social-label">GitHub</span>
              </a>
              <a className="social-option" href="https://x.com/skyxaakash" target="_blank" rel="noopener noreferrer">
                <XIcon />
                <span className="social-label">X / Twitter</span>
              </a>
              <a
                className="social-option"
                href="https://www.linkedin.com/in/aakashsahuu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                <span className="social-label">LinkedIn</span>
              </a>
              <a
                className="social-option"
                href="http://aaravkashyapsingh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                <span className="social-label">Website</span>
              </a>
              <EmailCopyButton />
            </nav>
          </div>

          <aside className="live-card">
            <div className="live-head">
              <span className="live-dot" /> Right now
            </div>
            <ul className="signals">
              {SIGNALS.map(([color, text]) => (
                <li className="signal" key={text}>
                  <span className="signal-dot" style={{ background: color }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* TOOLKIT */}
      <section id="toolkit" className="section">
        <div className="profile-container">
          <div className="section-header">
            <span className="section-label" data-index="01">
              Toolkit
            </span>
            <h2 className="section-title">Tools I use every day</h2>
            <Link className="section-link" href="/work">
              Everything I build with →
            </Link>
          </div>
          <ul className="toolkit-grid">
            {TOOLS.map(([icon, label]) => (
              <li className="tool" key={label}>
                <Image className="tool-icon" src={`/assets/icons/${icon}`} alt={label} width={20} height={20} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="work" className="section">
        <div className="profile-container">
          <div className="section-header">
            <span className="section-label" data-index="02">
              Track record
            </span>
            <h2 className="section-title">The work leaves a trace.</h2>
            <p className="section-sub">
              GitHub activity, production builds, and the foundations behind the work.
            </p>
          </div>

          <GitHubPanel />

          <h3 className="block-heading">Education</h3>
          <div className="entries">
            <div className="education-entry">
              <div className="entry-id">
                <strong>Galgotia College of Engineering &amp; Technology</strong>
                <span className="entry-role">B.Tech — Computer Science &amp; Engineering</span>
                <span className="entry-focus">Expected graduation 2028 · 3rd year</span>
              </div>
              <span className="entry-dates">2024 — 2028</span>
              <span className="entry-location">Greater Noida</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="profile-container">
          <div className="section-header">
            <span className="section-label" data-index="03">
              Contact
            </span>
            <h2 className="section-title">Let's build something useful.</h2>
            <p className="section-sub">
              Have an idea or a stubborn workflow? Let's talk through it.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-left">
              <a
                className="action-card"
                href="mailto:aakashsahuu0188@gmail.com?subject=Let%27s%20talk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="action-index">01</span>
                <span className="action-copy">
                  <strong>Schedule a free call</strong>
                  <small>30-minute intro &amp; strategy session</small>
                </span>
                <span className="action-arrow">↗</span>
              </a>
              <a
                className="action-card"
                href="mailto:aakashsahuu0188@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="action-index">02</span>
                <span className="action-copy">
                  <strong>aakashsahuu0188@gmail.com</strong>
                  <small>Quick inquiries and questions</small>
                </span>
                <span className="action-arrow">↗</span>
              </a>
              <a
                className="action-card"
                href="https://github.com/theaakashgupta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="action-index">03</span>
                <span className="action-copy">
                  <strong>Connect on GitHub</strong>
                  <small>Follow for builds and experiments</small>
                </span>
                <span className="action-arrow">↗</span>
              </a>

              <ul className="availability">
                <li>
                  <span className="avail-dot live" />
                  <span>
                    <strong>Open to new work</strong>
                    <small>AI/ML &amp; GenAI internships — remote</small>
                  </span>
                </li>
                <li>
                  <span className="avail-dot" />
                  <span>
                    <strong>Replies within 24 hours</strong>
                    <small>Usually on the same day</small>
                  </span>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
