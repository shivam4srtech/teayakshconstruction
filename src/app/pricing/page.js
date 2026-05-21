
import PricingSection from '@/components/PricingSection'; 
import MobilePricing from '@/components/MobilePricing'; 
import PricingHero from '@/components/PricingHero';
import PricingCompo from '@/components/PricingCompo';
import { getEstimatorCatalog } from '@/lib/trayakshApi';

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
