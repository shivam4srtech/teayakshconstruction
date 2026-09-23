'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UtilityProvider from '@/components/UtilityProvider';
import ZohoSalesIQLoader from '@/components/ZohoSalesIQLoader';

/**
 * MainLayout controls whether global Trayaksh navigation and layout utilities
 * (Navbar, Footer, UtilityProvider, ZohoSalesIQ) should be mounted.
 * Standalone landing pages like `/medical-boxes` are excluded and render their
 * own dedicated, brand-tailored Header and Footer.
 */
export default function MainLayout({ children }) {
  const pathname = usePathname();
  const isStandalone = pathname === '/medical-boxes' || pathname?.startsWith('/medical-boxes/');

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <UtilityProvider />
      <ZohoSalesIQLoader />
    </>
  );
}
