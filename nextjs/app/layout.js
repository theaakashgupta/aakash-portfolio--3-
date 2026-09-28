import { Fraunces, IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InlineScript from '@/components/InlineScript';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aakash-portfolio-3-u48z.vercel.app/'),
  title: {
    default: 'Aakash Gupta | AI/ML Engineer',
    template: '%s — Aakash Gupta | AI/ML Engineer',
  },
  description:
    'Aakash Gupta (@theaakashgupta) builds AI systems — RAG applications, AI agents, machine learning solutions and automation tools.',
  keywords: [
    'Aakash Gupta',
    'AI/ML Engineer',
    'RAG',
    'AI agents',
    'LangGraph',
    'machine learning',
  ],
  authors: [{ name: 'Aakash Gupta' }],
  openGraph: {
    type: 'website',
    siteName: 'Aakash Gupta | AI/ML Engineer',
    title: 'Aakash Gupta | AI/ML Engineer',
    description:
      'Aakash Gupta builds AI systems — RAG applications, AI agents, machine learning solutions and automation tools.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f1' },
    { media: '(prefers-color-scheme: dark)', color: '#141311' },
  ],
};

// Runs while the head is parsed, so the stored theme is applied before the
// first paint. Must stay in sync with resolveTheme() in components/ThemeToggle.js.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <head>
        <InlineScript html={THEME_SCRIPT} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
