import './globals.css';
export const metadata = { title: 'pack-notion-auto-entrepreneur-fr', description: 'Pack Notion Auto-Entrepreneur FR' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
