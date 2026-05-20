import OurProject from "@/components/OurProject";
import ProjectHero from '@/components/ProjectHero';
import ProjectFAQ from '@/components/ProjectFAQ'
import GlobalCta from "@/components/GlobalCta";
import { getProjects } from "@/lib/trayakshApi";

export default async function ProjectPage(){
    const projects = await getProjects();

    return(
        <>
            <ProjectHero/>
            <OurProject projects={projects}/>
            <GlobalCta/>
            <ProjectFAQ/>
        </>
    )
}
