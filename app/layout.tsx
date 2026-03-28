import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from './components/CookieConsent';
import AccessibilityNav from './components/AccessibilityNav';
import ClientLayout from './components/ClientLayout';

export const metadata: Metadata = {
  title: 'ORA ESSENCE | Pure Botanical Luxury',
  description: 'Experience pure, calm, and timeless botanical skincare with ORA ESSENCE.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <AccessibilityNav />
        <ClientLayout>
          {children}
        </ClientLayout>
        <CookieConsent />
      </body>
    </html>
  );
}
