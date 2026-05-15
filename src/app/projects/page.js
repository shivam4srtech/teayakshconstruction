import OurProject from "@/components/OurProject";
import ProjectHero from '@/components/ProjectHero';
import ProjectFAQ from '@/components/ProjectFAQ'
import GlobalCta from "@/components/GlobalCta";

export default function ProjectPage(){
    return(
        <>
            <ProjectHero/>
            <OurProject/>
            <GlobalCta/>
            <ProjectFAQ/>
        </>
    )
}