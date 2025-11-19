import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'SP Muthiah & Sons Pte Ltd - Since 1902',
  description:
    'Singapore\'s premier distributor of authentic Indian food products. Four generations of trust and quality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
