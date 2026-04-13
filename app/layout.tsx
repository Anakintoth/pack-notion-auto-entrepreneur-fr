import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'AutoKit — Pack Notion pour auto-entrepreneurs français',
  description: 'Le pack Notion tout-en-un pour gérer ton activité d\'auto-entrepreneur : factures conformes, suivi CA, déclarations URSSAF et assistant IA. Gratuit pour démarrer.',
  icons: { icon: '/favicon.svg' },
  keywords: ['notion', 'auto-entrepreneur', 'freelance', 'facture', 'URSSAF', 'gestion', 'France', 'AE'],
  authors: [{ name: 'AutoKit' }],
  openGraph: {
    title: 'AutoKit — Pack Notion pour auto-entrepreneurs français',
    description: 'Ton activité, organisée dès le premier jour. Factures, URSSAF, clients — tout depuis Notion.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'AutoKit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoKit — Pack Notion pour auto-entrepreneurs',
    description: 'Ton activité, organisée dès le premier jour.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
