import GlobalCta from "@/components/GlobalCta";
import ToolsDirectory from "@/components/ToolsDirectory";
export const metadata = {
  title: 'Online Construction Tools & Calculators | TRAYAKSH Construction',
  description: 'Access our suite of online building tools, including house cost estimators, home loan EMI calculators, and custom layout planners to simplify your project planning.',
  keywords: ['construction planning tools', 'building calculators', 'house cost estimator', 'emi calculator', 'trayaksh construction tools', 'online architectural tools'],
};
export default function ToolsPage(){
    return(
        <>
            <ToolsDirectory/>
            <GlobalCta/>
        </>
    )
}