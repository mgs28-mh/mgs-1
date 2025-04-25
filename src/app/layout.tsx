import { Poppins} from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

const poppins = Poppins({
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: 'SolarTech - Solusi PLTS Terbaik',
  description: 'Penyedia solusi Pembangkit Listrik Tenaga Surya terkemuka di Indonesia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}