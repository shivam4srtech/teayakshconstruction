// app/layout.js
import './globals.css';
import { Montserrat } from 'next/font/google';
import { headers } from 'next/headers';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UtilityProvider from '@/components/UtilityProvider';
import ZohoSalesIQLoader from '@/components/ZohoSalesIQLoader';

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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WLN9LF8X');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '326392107171140');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} font-montserrat antialiased selection:bg-[#A67153] selection:text-white`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLN9LF8X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=326392107171140&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Navbar/>
        {children}
        <Footer/>
        <UtilityProvider/>
        <ZohoSalesIQLoader />
      </body>
    </html>
  );
}
