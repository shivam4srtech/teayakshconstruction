import AboutProject from '@/components/AboutProject'
import GlobalCta from '@/components/GlobalCta'
import ProjectFAQ from '@/components/ProjectFAQ'
import ProjectStages from '@/components/ProjectStages'
import SingleProjectHero from '@/components/SingleProjectHero'
export default function SingleProject(){
    return(
        <>
            <SingleProjectHero/>
            <AboutProject/>
            <GlobalCta/>
            <ProjectStages/>
            <ProjectFAQ/>
        </>
    )
}