import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AutoPack — Le pack Notion pour auto-entrepreneurs français",
  description: "Modèles Notion prêts à l'emploi pour lancer et gérer votre activité d'auto-entrepreneur en France : factures, URSSAF, clients, agenda fiscal — et un assistant IA intégré.",
  icons: { icon: '/favicon.svg' },
  keywords: ['auto-entrepreneur', 'notion', 'templates', 'facture', 'URSSAF', 'freelance', 'France', 'modèles'],
  openGraph: {
    title: "AutoPack — Le pack Notion pour auto-entrepreneurs français",
    description: "Factures conformes, suivi URSSAF, gestion clients — tout dans Notion, tout pensé pour la France.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
