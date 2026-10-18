import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mebelchi Bolamanu',
  description: 'Maxsus o\'lcham va dizayn asosida mukammal mebellar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="bg-brand-bg text-brand-dark antialiased">
        {children}
      </body>
    </html>
  );
}
