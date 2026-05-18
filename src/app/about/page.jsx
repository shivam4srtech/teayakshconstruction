import AboutHero from "@/components/AboutHero";
import AboutPhilospy from '@/components/AboutPhilospy'
import DesignBoard from "@/components/DesignBoard";
import GlobalCta from "@/components/GlobalCta";
import TheAuditCounter from "@/components/TheAuditCounter";

export default function AboutPage() {
    return(
        <>
            <AboutHero/>
            <AboutPhilospy/>
            <TheAuditCounter/>
            <GlobalCta/>
            <DesignBoard/>
        </>
    )
}