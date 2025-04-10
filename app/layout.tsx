import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A Matear | Mates Artesanales Tucumanos',
  description: 'Descubrí la auténtica experiencia mateera con nuestros mates artesanales y yerbas especiales. Tradición tucumana en cada sorbo.',
  keywords: 'mates, yerba mate, artesanal, tucumán, grabados, tradición',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}