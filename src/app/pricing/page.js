
import PricingSection from '@/components/PricingSection'; 
import MobilePricing from '@/components/MobilePricing'; 
import PricingHero from '@/components/PricingHero';
import PricingCompo from '@/components/PricingCompo';

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <PricingHero/>
      <PricingSection /> 
      <MobilePricing />
      <PricingCompo/>
    </main>
  );
}