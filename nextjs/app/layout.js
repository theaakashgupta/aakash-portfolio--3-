import { Fraunces, IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  themeColor: '#f7f6f1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
