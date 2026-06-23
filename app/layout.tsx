import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '今日单词 - Daily Chinese Words',
  description: 'Learn 5 new Chinese words every day - perfect for work and travel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
