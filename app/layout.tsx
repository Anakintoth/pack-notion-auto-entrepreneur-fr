import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoPack — Tout ce qu'il faut pour se lancer',
  description: 'Tout ce qu'il faut pour se lancer',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AutoPack',
    description: 'Tout ce qu'il faut pour se lancer',
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
