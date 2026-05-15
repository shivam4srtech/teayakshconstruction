
import DesignerGrid from '@/components/DesignerGrid'
import GlobalCta from '@/components/GlobalCta'
import InteriorFAQ from '@/components/InteriorFAQ'

import InteriorVirtualTour from '@/components/InteriorVirtualTour'
import MaterialCarousel from '@/components/MaterialCarousel'
import ProcessTimeline from '@/components/ProcessTimeline'

export default function InterionPage(){
    return(
        <>
            <InteriorVirtualTour/>
            <MaterialCarousel/>
            <GlobalCta/>
            <ProcessTimeline/>
            {/* <DesignerGrid/> */}
            <InteriorFAQ/>
        
        </>
    )
}