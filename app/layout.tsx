import './globals.css';

import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/avatar.jpeg" sizes="any" />
      <body
        className={`${fontSans.variable} bg-background text-foreground font-sans text-sm antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
