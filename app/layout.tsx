import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/avatar.jpeg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
