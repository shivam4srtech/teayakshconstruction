import CostEstimatorClient from "@/components/CostEstimatorClient";
import EstimatorContent from "@/components/EstimatorContent";
import EstimatorFaqs from "@/components/EstimatorFaqs";
import GlobalCta from "@/components/GlobalCta";
import { getEstimatorCatalog } from "@/lib/trayakshApi";

export const metadata = {
  title: "Construction Cost Estimator | TRAYAKSH Construction",
  description:
    "Estimate construction cost by city, package, built-up area, floor count, and structural specification.",
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
