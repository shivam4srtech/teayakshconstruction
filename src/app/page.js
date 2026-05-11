
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
export default function Home() {
  return (
     <>
        <HeroSection />
        <ProjectSection/>
        <HomeownerGuarantees/>
        <QualityCommandCenter/>
        <CalculatorCTA/>
        <PricingSection/>
        <MobilePricing/>
        <PhilosophySection/>
        <TestimonialSection/>
        <ServicesSection/>
        <FAQSection/>
       
     </>
  );
}