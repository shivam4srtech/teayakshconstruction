import DetailedFloorPlanHero from "@/components/DetailedFloorPlanHero";
import FloorPlanDocumentation from "@/components/FloorPlanDocumentation";
import GlobalCta from "@/components/GlobalCta";
import PopularFloorPlans from "@/components/PopularFloorPlans";

export default function SingleFloorPlan(){
    return(
        <>
            <DetailedFloorPlanHero/>
            <FloorPlanDocumentation/>
            <PopularFloorPlans/>
            <GlobalCta/>
        </>
    )
}