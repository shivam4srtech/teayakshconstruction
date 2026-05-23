import { getFloorPlans } from "@/lib/trayakshApi";
import FloorPlanHeroClient from "./FloorPlanHeroClient";

export default async function FloorPlanHero() {
  let floorPlans = [];

  try {
    floorPlans = await getFloorPlans();
  } catch (error) {
    console.error("Unable to load floor plans", error);
  }

  return <FloorPlanHeroClient floorPlans={floorPlans} />;
}
