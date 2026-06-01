'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// ================= DYNAMIC LAZY-LOAD UTILITIES =================
// Using client-side hydration injection to shield the initial bundle size
const MobileNavStrip = dynamic(() => import('@/components/MobileNavStrip'), {
  ssr: false,
});

const GlobalConsultationModal = dynamic(() => import('@/components/GlobalConsultationModal'), {
  ssr: false,
});

const VerticalFloatingButton = dynamic(() => import('@/components/VerticalFloatingButton'), {
  ssr: false,
});

const FloatingWhatsAppButton = dynamic(() => import('@/components/FloatingWhatsAppButton'), {
  ssr: false,
});

const CookieConsentPopup = dynamic(() => import('@/components/CookieConsentPopup'), {
  ssr: false,
});

export default function UtilityProvider() {
  const [mounted, setMounted] = useState(false);

  // Delays mounting the layout widgets until the primary document structure is interactive
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Lazy-Loaded Peripheral Overlays */}
      {mounted && (
        <>
          <MobileNavStrip />
          <GlobalConsultationModal />
          <VerticalFloatingButton />
          <FloatingWhatsAppButton />
          <CookieConsentPopup />
        </>
      )}
    </>
  );
}