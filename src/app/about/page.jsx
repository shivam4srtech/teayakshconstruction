import AboutHero from "@/components/AboutHero";
import AboutPhilospy from '@/components/AboutPhilospy'
import DesignBoard from "@/components/DesignBoard";
import GlobalCta from "@/components/GlobalCta";
import TheAuditCounter from "@/components/TheAuditCounter";
export const metadata = {
  title: 'About TRAYAKSH Construction | Luxury Builders & Developers',
  description: 'Learn about TRAYAKSH Construction. We are premier luxury builders and developers committed to architectural precision, innovation, and timeless elegance.',
  keywords: ['about trayaksh construction', 'luxury builders', 'premium developers', 'architectural innovation', 'luxury construction company'],
};
export default function AboutPage() {
    return(
        <>
            <AboutHero/>
            <AboutPhilospy/>
            <TheAuditCounter/>
            <GlobalCta/>
            {/* <DesignBoard/> */}
        </>
    )
}