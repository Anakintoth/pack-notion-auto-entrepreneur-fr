import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pack Notion Auto Ent — La solution simple pour les pros',
  description: 'La solution simple pour les pros',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Pack Notion Auto Ent',
    description: 'La solution simple pour les pros',
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
