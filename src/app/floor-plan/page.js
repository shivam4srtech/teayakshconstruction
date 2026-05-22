import FloorPlanGuideLayout from "@/components/FloorPlanGuideLayout";
import FloorPlanHero from "@/components/FloorPlanHero";
import GlobalCta from "@/components/GlobalCta";

export default function FloorPlan(){
    return(
        <>
            <FloorPlanHero/>
            <FloorPlanGuideLayout/>
            <GlobalCta/>
        </>
    )
}