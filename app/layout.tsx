import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoKit — Ton activité, organisée dès le premier jour',
  description: 'Ton activité, organisée dès le premier jour',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AutoKit',
    description: 'Ton activité, organisée dès le premier jour',
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
