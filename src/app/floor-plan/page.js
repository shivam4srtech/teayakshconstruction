import FloorPlanGuideLayout from "@/components/FloorPlanGuideLayout";
import FloorPlanHero from "@/components/FloorPlanHero";
import GlobalCta from "@/components/GlobalCta";
export const metadata = {
  title: '2D & 3D Floor Plan Design Services | TRAYAKSH Construction',
  description: 'Get custom 2D and 3D house floor plans designed by expert architects. Plan your luxury home layouts, villa designs, and commercial spaces with precision.',
  keywords: ['floor plan design', '3d house plans', '2d architectural layouts', 'luxury home floor plans', 'trayaksh construction floor plan', 'villa layout design'],
};
export default function FloorPlan(){
    return(
        <>
            <FloorPlanHero/>
            <FloorPlanGuideLayout/>
            <GlobalCta/>
        </>
    )
}