import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StreamLux — Entertainment without limits',
  description: 'Discover live television, movies, and unforgettable series in one premium entertainment destination.',
  applicationName: 'StreamLux',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
