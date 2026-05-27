
import PricingSection from '@/components/PricingSection'; 
import MobilePricing from '@/components/MobilePricing'; 
import PricingHero from '@/components/PricingHero';
import PricingCompo from '@/components/PricingCompo';
import { getEstimatorCatalog } from '@/lib/trayakshApi';
export const metadata = {
  title: 'Luxury Construction Pricing & Packages | TRAYAKSH Construction',
  description: 'Explore transparent pricing and premium construction packages for luxury homes, villas, and commercial spaces. Get detailed building cost structures tailored to your needs.',
  keywords: ['construction pricing packages', 'luxury home building cost', 'trayaksh construction pricing', 'commercial construction rates', 'villa construction cost per sq ft'],
};
export default async function PricingPage() {
  const catalog = await getEstimatorCatalog();

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <PricingHero/>
      <PricingSection cities={catalog.cities} pricingTiers={catalog.pricingTiers} packageRates={catalog.packageRates}/> 
      <MobilePricing cities={catalog.cities} pricingTiers={catalog.pricingTiers} packageRates={catalog.packageRates}/>
      <PricingCompo/>
    </main>
  );
}
