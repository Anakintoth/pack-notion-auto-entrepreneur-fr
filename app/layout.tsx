import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoKit — Tout ce qu'il faut pour lancer son activité',
  description: 'Tout ce qu'il faut pour lancer son activité',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AutoKit',
    description: 'Tout ce qu'il faut pour lancer son activité',
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
