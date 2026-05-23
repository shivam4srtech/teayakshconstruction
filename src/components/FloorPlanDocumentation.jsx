'use client';

import { 
  Compass, Layers, FileSpreadsheet, 
  Info
} from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import DetailedFloorPlanFAQs from './DetailedFloorPlanFAQs';
import FloorPlanDrawingShowcase from './FloorPlanDrawingShowcase';

function getFloorRows(floorPlan) {
  if (floorPlan?.floorLayout?.length) {
    return floorPlan.floorLayout.map((floor) => ({
      zone: floor.rooms?.join(", ") || floor.floor,
      floor: floor.floor,
      area: floorPlan.dimensions || "Custom",
      load: floorPlan.type || "Residential",
      share: floorPlan.budget || "On Request",
    }));
  }

  return [
    { zone: "Primary Lounge Block", floor: "Ground Floor", area: "1,150 Sq. Ft.", load: "Dead / Live Combined", share: "₹22.4 Lakhs" },
    { zone: "Dual Master Suites", floor: "First Floor", area: "1,020 Sq. Ft.", load: "Suspended Slab Spec", share: "₹18.0 Lakhs" },
    { zone: "Balconies & Courtyard", floor: "Exterior Buffers", area: "280 Sq. Ft.", load: "Cantilever Structural", share: "₹4.1 Lakhs" },
  ];
}

export default function FloorPlanDocumentation({ floorPlan }) {
  const floorRows = getFloorRows(floorPlan);
  const title = floorPlan?.title || "Comprehensive Spatial Evaluation of the 40x50 Modern Duplex Framework";
  const excerpt = floorPlan?.excerpt || "This blueprint layout utilizes custom open-plan architectural matrices designed to balance aesthetic luxury with strict load-bearing parameters.";

  return (
    <article className="py-5 pt-0 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 bg-white p-4 md:p-12 pt-0 md:rounded-[3.5rem] rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-4">
        

            {floorPlan?.description ? (
              <div className="blog-rich-content" dangerouslySetInnerHTML={{ __html: floorPlan.description }} />
            ) : (
              <>
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5 mt-0">
                    <Layers size={20} className="text-[#A67153]" />
                    Circulatory Optimization & Space Allocation Strategy
                  </h2>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    The ground level establishes an expansive double-height living lounge that flows naturally into a semi-enclosed formal dining deck and modular island kitchen workspace.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Upstairs, the primary structural floor configuration features independent private suites separated by an airy family lounge hub.
                  </p>
                </div>
              </>
            )}

            <div className="bg-[#F8F5F2] border-l-4 border-[#A67153] md:p-6 p-3 rounded-r-2xl flex gap-4 items-start shadow-inner">
              <Info size={20} className="text-[#A67153] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2D2926]">
                  Liaison Clearance Notice
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All structural parameters should be verified against local municipal development authorities before launching column layout adjustments.
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Compass size={18} className="text-[#A67153]" />
                Micro-Climatic Wind Patterns & Light Filtration
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                The facing direction and room zoning are planned to balance sunlight control, daily movement, and functional circulation.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2926]">
                <FileSpreadsheet size={16} className="text-[#A67153]" />
                <h4>Floor Layout & Share Metrics</h4>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-200/60 shadow-sm bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#2D2926] text-white font-bold uppercase tracking-wider text-[9px]">
                      <th className="p-4">Zoning Quadrant</th>
                      <th className="p-4">Floor Designation</th>
                      <th className="p-4">Area Share</th>
                      <th className="p-4">Structural Load Type</th>
                      <th className="p-4 text-right">Civil Est. Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                    {floorRows.map((row) => (
                      <tr key={`${row.floor}-${row.zone}`} className="hover:bg-[#F8F5F2]/30 transition-colors">
                        <td className="p-4 font-bold text-[#2D2926]">{row.zone}</td>
                        <td className="p-4">{row.floor}</td>
                        <td className="p-4">{row.area}</td>
                        <td className="p-4 text-gray-400">{row.load}</td>
                        <td className="p-4 text-right font-bold text-[#A67153]">{row.share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <FloorPlanDrawingShowcase
              drawingImages={floorPlan?.drawingImages || []}
              floorLayout={floorPlan?.floorLayout || []}
            />

            <DetailedFloorPlanFAQs faqs={floorPlan?.faqs?.length ? floorPlan.faqs : undefined} />
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
            <BlogSidebar/>
          </aside>
        </div>
      </div>
    </article>
  );
}
