import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoKit — Gérez votre activité, libérez votre talent.',
  description: 'Gérez votre activité, libérez votre talent.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AutoKit',
    description: 'Gérez votre activité, libérez votre talent.',
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
