import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoKit Notion — Gérez votre activité, libérez votre créativité',
  description: 'Gérez votre activité, libérez votre créativité',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AutoKit Notion',
    description: 'Gérez votre activité, libérez votre créativité',
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
