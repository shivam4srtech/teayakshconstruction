"use client";

import { useMemo, useState } from "react";
import EstimatorHero from "@/components/EstimatorHero";
import StructuralOverview from "@/components/StructuralOverview";

export default function CostEstimatorClient({ cities, packageRates, pricingTiers }) {
  const firstRatedCity = Object.keys(packageRates || {})[0] || "";
  const firstCity = firstRatedCity || cities?.[0]?.name || "";
  const defaultPackage =
    pricingTiers?.find((tier) => tier.slug === "basic")?.slug ||
    pricingTiers?.[0]?.slug ||
    "basic";
  const [selection, setSelection] = useState({
    city: firstCity,
    packageSlug: defaultPackage,
    builtUpArea: "",
    floors: "",
    submittedEstimate: null,
  });

  const normalizedCity = useMemo(() => {
    const cityKeys = Object.keys(packageRates || {});
    return (
      cityKeys.find((key) => key.toLowerCase() === selection.city.toLowerCase()) ||
      selection.city
    );
  }, [packageRates, selection.city]);

  const selectedPackage = packageRates?.[normalizedCity]?.[defaultPackage] || null;
  const builtUpArea = Number(selection.builtUpArea);
  const floors = Number(selection.floors);
  const pricePerSqft = Number(selectedPackage?.price);
  const totalBuiltUpArea =
    builtUpArea > 0 && Number.isInteger(floors) && floors >= 1
      ? builtUpArea * floors
      : 0;
  const singleFloorEstimate =
    selectedPackage && builtUpArea > 0 && pricePerSqft > 0
      ? builtUpArea * pricePerSqft
      : 0;
  const billableFloors =
    Number.isInteger(floors) && floors >= 1
      ? floors
      : 0;
  const estimatedValue =
    selectedPackage && totalBuiltUpArea > 0 && pricePerSqft > 0
      ? totalBuiltUpArea * pricePerSqft
      : 0;

  return (
    <>
      <EstimatorHero
        cities={cities}
        pricingTiers={pricingTiers}
        selection={selection}
        selectedPackage={selectedPackage}
        totalBuiltUpArea={totalBuiltUpArea}
        singleFloorEstimate={singleFloorEstimate}
        billableFloors={billableFloors}
        estimatedValue={estimatedValue}
        onSelectionChange={setSelection}
      />
      <StructuralOverview
        cities={cities}
        pricingTiers={pricingTiers}
        packageRates={packageRates}
        selection={selection}
        onSelectionChange={setSelection}
      />
    </>
  );
}
