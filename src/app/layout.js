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
const siteName = 'TRAYAKSH Construction';
const defaultTitle = 'TRAYAKSH Construction | Luxury Builders & Developers';
const defaultDescription =
  'Creating architectural masterpieces with precision, innovation, and timeless elegance. Specializing in luxury homes, villas, and commercial spaces.';
const defaultOgImage = '/images/logo.webp';
const keywords = [
  'TRAYAKSH Construction',
  'Trayaksh Construction',
  'luxury builders',
  'luxury developers',
  'construction company',
  'home construction',
  'villa construction',
  'commercial construction',
  'architectural design',
  'interior design',
  'turnkey construction',
  'premium homes',
  'floor plans',
  'pharmacy setup',
  'India construction company',
];


const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export async function generateMetadata() {
  const headersList = await headers();
  const pathname = headersList.get('x-current-pathname') || '/';
  const canonicalUrl = new URL(pathname, siteUrl);
  const verification = {};

  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  }

  if (process.env.NEXT_PUBLIC_YANDEX_VERIFICATION) {
    verification.yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  }

  if (process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION) {
    verification.yahoo = process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION;
  }

  return {
    metadataBase: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    applicationName: siteName,
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords,
    authors: [{ name: siteName, url: siteUrl.toString() }],
    creator: siteName,
    publisher: siteName,
    category: 'construction',
    classification: 'Luxury construction, architecture, real estate development, and interior design',
    alternates: {
      canonical: pathname,
      languages: {
        'en-IN': pathname,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: defaultOgImage,
          alt: `${siteName} luxury construction and development`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: defaultOgImage,
          alt: `${siteName} luxury construction and development`,
        },
      ],
    },
    icons: {
      icon: [{ url: '/images/logo.webp' }],
      shortcut: ['/images/logo.webp'],
      apple: [{ url: '/images/logo.webp' }],
    },
    verification: Object.keys(verification).length ? verification : undefined,
    other: {
      'geo.region': 'IN',
      'geo.placename': 'India',
      'theme-color': '#A67153',
      'msapplication-TileColor': '#A67153',
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
