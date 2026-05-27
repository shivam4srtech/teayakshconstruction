import CostEstimatorClient from "@/components/CostEstimatorClient";
import EstimatorContent from "@/components/EstimatorContent";
import EstimatorFaqs from "@/components/EstimatorFaqs";
import GlobalCta from "@/components/GlobalCta";
import { getEstimatorCatalog } from "@/lib/trayakshApi";

export const metadata = {
  title: 'House Construction Cost Calculator | TRAYAKSH Construction',
  description: 'Estimate your home building budget with our accurate construction cost calculator. Get instant per square foot estimates for luxury homes, villas, and commercial spaces.',
  keywords: ['construction cost calculator', 'house construction cost estimator', 'building cost per sq ft', 'home budget calculator india', 'trayaksh construction calculator'],
};

export const dynamic = "force-dynamic";

export default async function CostEstimatorPage() {
  const catalog = await getEstimatorCatalog();

  return (
        <>
            <CostEstimatorClient {...catalog} />
            <GlobalCta/>
            <EstimatorContent/>
            <EstimatorFaqs/>
            
        </>
  )
}
