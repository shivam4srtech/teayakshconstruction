import OurProject from "@/components/OurProject";
import ProjectHero from '@/components/ProjectHero';
import ProjectFAQ from '@/components/ProjectFAQ'
import GlobalCta from "@/components/GlobalCta";
import { getProjects } from "@/lib/trayakshApi";
export const metadata = {
  title: 'Luxury Projects Portfolio | TRAYAKSH Construction',
  description: 'Explore our portfolio of premium architectural masterpieces. Discover our luxury homes, modern villas, and high-end commercial spaces developed with precision and elegance.',
  keywords: ['trayaksh construction projects', 'luxury home portfolio', 'premium villa construction', 'completed construction projects', 'luxury developers portfolio'],
};
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
