import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoKit — Votre admin auto-entrepreneur, enfin simplifiée',
  description: 'Votre admin auto-entrepreneur, enfin simplifiée',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AutoKit',
    description: 'Votre admin auto-entrepreneur, enfin simplifiée',
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
