
import DesignerGrid from '@/components/DesignerGrid'
import GlobalCta from '@/components/GlobalCta'
import InteriorFAQ from '@/components/InteriorFAQ'

import InteriorVirtualTour from '@/components/InteriorVirtualTour'
import MaterialCarousel from '@/components/MaterialCarousel'
import ProcessTimeline from '@/components/ProcessTimeline'
export const metadata = {
  title: 'Luxury Interior Design Services | TRAYAKSH Construction',
  description: 'Transform your spaces with premium interior design services. We specialize in luxury residential, modern office, and high-end commercial interiors with bespoke finishes.',
  keywords: ['luxury interior design', 'premium home interiors', 'modern office interior designer', 'trayaksh construction interior', 'bespoke interior styling', 'villa interior designs'],
};
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