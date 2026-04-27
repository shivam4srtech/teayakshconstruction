// app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'BlueCrest Construction | Luxury Builders & Developers',
  description: 'Creating architectural masterpieces with precision, innovation, and timeless elegance. Specializing in luxury homes, villas, and commercial spaces.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}