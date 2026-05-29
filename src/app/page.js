
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ProjectSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import MobilePricing from '@/components/MobilePricing';
import HomeownerGuarantees from '@/components/HomeownerGuarantees';
import CalculatorCTA from '@/components/CalculatorCTA';
import QualityCommandCenter from '@/components/QualityCommandCenter';
import { getEstimatorCatalog, getTestimonials } from '@/lib/trayakshApi';

export default async function Home() {
  const [testimonials, catalog] = await Promise.all([
    getTestimonials(),
    getEstimatorCatalog(),
  ]);

  return (
     <>
        <HeroSection />
        {/* <ProjectSection/> */}
        <HomeownerGuarantees/>
        <QualityCommandCenter/>
        <CalculatorCTA/>
        <PricingSection cities={catalog.cities} pricingTiers={catalog.pricingTiers} packageRates={catalog.packageRates}/>
        <MobilePricing cities={catalog.cities} pricingTiers={catalog.pricingTiers} packageRates={catalog.packageRates}/>
        <PhilosophySection/>
        {/* <TestimonialSection testimonials={testimonials}/> */}
        <ServicesSection/>
        <FAQSection/>
       
     </>
  );
}
