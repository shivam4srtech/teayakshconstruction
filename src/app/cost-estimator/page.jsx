import CostEstimatorClient from "@/components/CostEstimatorClient";
import { getEstimatorCatalog } from "@/lib/trayakshApi";

export const metadata = {
  title: "Construction Cost Estimator | TRAYAKSH Construction",
  description:
    "Estimate construction cost by city, package, built-up area, floor count, and structural specification.",
};

export default async function CostEstimatorPage() {
  const catalog = await getEstimatorCatalog();

  return <CostEstimatorClient {...catalog} />;
}
