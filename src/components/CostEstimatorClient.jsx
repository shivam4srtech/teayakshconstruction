"use client";

import { useMemo, useState } from "react";
import EstimatorHero from "@/components/EstimatorHero";
import StructuralOverview from "@/components/StructuralOverview";

export default function CostEstimatorClient({ cities, packageRates, pricingTiers }) {
  const firstRatedCity = Object.keys(packageRates || {})[0] || "";
  const firstCity = firstRatedCity || cities?.[0]?.name || "";
  const firstPackage = pricingTiers?.[0]?.slug || "";
  const [selection, setSelection] = useState({
    city: firstCity,
    packageSlug: firstPackage,
    builtUpArea: "",
    floors: "",
    parking: "Yes",
    submittedEstimate: null,
  });

  const normalizedCity = useMemo(() => {
    const cityKeys = Object.keys(packageRates || {});
    return (
      cityKeys.find((key) => key.toLowerCase() === selection.city.toLowerCase()) ||
      selection.city
    );
  }, [packageRates, selection.city]);

  const selectedPackage = packageRates?.[normalizedCity]?.[selection.packageSlug] || null;
  const estimatedValue =
    selectedPackage && Number(selection.builtUpArea) > 0
      ? Number(selection.builtUpArea) * Number(selectedPackage.price)
      : 0;

  return (
    <>
      <EstimatorHero
        cities={cities}
        pricingTiers={pricingTiers}
        packageRates={packageRates}
        selection={selection}
        selectedPackage={selectedPackage}
        estimatedValue={estimatedValue}
        onSelectionChange={setSelection}
      />
      <StructuralOverview
        cities={cities}
        pricingTiers={pricingTiers}
        packageRates={packageRates}
        selection={selection}
        selectedPackage={selectedPackage}
        onSelectionChange={setSelection}
      />
    </>
  );
}
