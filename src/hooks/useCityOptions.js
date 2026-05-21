"use client";

import { useEffect, useState } from "react";

export function useCityOptions() {
  const [cityOptions, setCityOptions] = useState(["Other"]);
  const [isLoadingCities, setIsLoadingCities] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadCities() {
      try {
        const response = await fetch("/api/cities");
        const payload = await response.json();
        const cities = Array.isArray(payload.cities) ? payload.cities : [];
        const names = cities
          .map((city) => city?.name)
          .filter(Boolean);

        if (isMounted) {
          setCityOptions([...new Set([...names, "Other"])]);
        }
      } catch (error) {
        console.error("City Load Error:", error);
        if (isMounted) {
          setCityOptions(["Other"]);
        }
      } finally {
        if (isMounted) {
          setIsLoadingCities(false);
        }
      }
    }

    loadCities();

    return () => {
      isMounted = false;
    };
  }, []);

  return { cityOptions, isLoadingCities };
}
