// app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileNavStrip from '@/components/MobileNavStrip';
import GlobalConsultationModal from '@/components/GlobalConsultationModal';
import VerticalFloatingButton from '@/components/VerticalFloatingButton';



const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://trayakshconstruction.com'),
  title: 'TRAYAKSH Construction | Luxury Builders & Developers',
  description: 'Creating architectural masterpieces with precision, innovation, and timeless elegance. Specializing in luxury homes, villas, and commercial spaces.',
};

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
