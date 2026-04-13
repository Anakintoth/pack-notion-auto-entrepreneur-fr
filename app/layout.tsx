import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'IndéKit — Le pack Notion pour auto-entrepreneurs français',
  description:
    'Gérez votre auto-entreprise depuis Notion : factures conformes, calculateur URSSAF, CRM clients et calendrier fiscal. Démarrez gratuitement.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'IndéKit — Pilotez votre AE depuis Notion',
    description:
      'Le système Notion tout-en-un pour les auto-entrepreneurs français. Factures, URSSAF, clients et fiscalité — tout au même endroit.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IndéKit — Le pack Notion pour auto-entrepreneurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndéKit — Le pack Notion pour auto-entrepreneurs',
    description: 'Gérez votre AE sereinement avec le système Notion complet.',
  },
  keywords: [
    'auto-entrepreneur',
    'notion template',
    'gestion AE',
    'factures auto-entrepreneur',
    'URSSAF',
    'freelance france',
    'comptabilité simplifiée',
    'IndéKit',
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#08080f" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen antialiased bg-[#08080f]">{children}</body>
    </html>
  );
}
