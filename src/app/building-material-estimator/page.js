import GlobalCta from "@/components/GlobalCta";
import MaterialEstimatorDocumentation from "@/components/MaterialEstimatorDocumentation";
import MaterialEstimatorFAQs from "@/components/MaterialEstimatorFAQs";
import MaterialEstimatorHero from "@/components/MaterialEstimatorHero";

export default function MaterialEstimatorPage(){
    return(
        <>
            <MaterialEstimatorHero/>
            <MaterialEstimatorDocumentation/>
            <GlobalCta/>
            <MaterialEstimatorFAQs/>
        </>
    )
}