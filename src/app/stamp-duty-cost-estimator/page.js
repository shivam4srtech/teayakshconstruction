import GlobalCta from "@/components/GlobalCta";
import StampDutyDocumentation from "@/components/StampDutyDocumentation";
import StampDutyFAQs from "@/components/StampDutyFAQs";
import StampDutyHero from "@/components/StampDutyHero";

export default function StampDutyPage(){
    return(
        <>
            <StampDutyHero/>
            <StampDutyDocumentation/>
            <GlobalCta/>
        </>
    )
}