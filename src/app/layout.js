// app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import { headers } from 'next/headers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileNavStrip from '@/components/MobileNavStrip';
import GlobalConsultationModal from '@/components/GlobalConsultationModal';
import VerticalFloatingButton from '@/components/VerticalFloatingButton';

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://trayakshconstruction.com');


const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export async function generateMetadata() {
  const headersList = await headers();
  const pathname = headersList.get('x-current-pathname') || '/';

  return {
    metadataBase: siteUrl,
    title: 'TRAYAKSH Construction | Luxury Builders & Developers',
    description: 'Creating architectural masterpieces with precision, innovation, and timeless elegance. Specializing in luxury homes, villas, and commercial spaces.',
    alternates: {
      canonical: pathname,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-montserrat antialiased selection:bg-[#A67153] selection:text-white`}>
        <Navbar/>
        {children}
        <Footer/>
        <MobileNavStrip/>
        <GlobalConsultationModal/>
        <VerticalFloatingButton/>
      </body>
    </html>
  );
}
