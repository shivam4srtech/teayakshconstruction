'use client';
import { 
  Compass, Layers, FileSpreadsheet, Scale, 
  Info, ShieldAlert, ArrowRight, Download, CheckCircle2 
} from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import DetailedFloorPlanFAQs from './DetailedFloorPlanFAQs';

const TECHNICAL_SPECIFICATIONS = [
  { label: "Plot Area Dimensions", value: "40 x 50 Sq. Ft." },
  { label: "Total Built-up Area", value: "2,450 Sq. Ft." },
  { label: "Level Configuration", value: "Ground + 1 Floor" },
  { label: "BHK Structural Class", value: "3 BHK Luxury Spec" },
  { label: "Primary Facing Direction", value: "West Facing Open" },
  { label: "Vastu Blueprint Status", value: "100% Scientifically Aligned" }
];

export default function FloorPlanDocumentation() {
  return (
    <article className="py-5 pt-0 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* ================= CORE 2-COLUMN SPLIT GRID SYSTEM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT SIDE: DEEP TEXT & DOCUMENTATION DATA (8 COLS) ================= */}
          <div className="lg:col-span-8 bg-white p-4 md:p-12 md:rounded-[3.5rem] rounded-xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-4">
            
            {/* 1. Primary Component Header Block */}
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] block">
                Engineering Analysis & Report
              </span>
              <h1 className="text-2xl  font-bold tracking-tight text-[#2D2926] leading-[1.15]">
                Comprehensive Spatial Evaluation of the 40x50 Modern Duplex Framework
              </h1>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                This blueprint layout utilizes custom open-plan architectural matrices designed to balance aesthetic luxury with strict load-bearing parameters. By minimizing dedicated hallway spaces down to 4.2%, every square foot is effectively funneled back into liveable residential zones.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 2. Secondary Paragraph Deep Dive */}
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Layers size={20} className="text-[#A67153]" />
                Circulatory Optimization & Space Allocation Strategy
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                The ground level establishes an expansive double-height living lounge that flows naturally into a semi-enclosed formal dining deck and modular island kitchen workspace. This grouping facilitates frictionless hosting while maintaining physical acoustic dampening thresholds for the private study nested toward the rear setback quadrant.
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Upstairs, the primary structural floor configuration features two independent master suites separated by an airy skylight lounge hub. This spatial distribution strategy guarantees individual structural acoustic barriers while simultaneously functioning as a natural thermodynamic conduit, drawing warm interior air out through clear ceiling ventilation bands.
              </p>
            </div>

            {/* 3. Injected Structural Contextual Warning Callout */}
            <div className="bg-[#F8F5F2] border-l-4 border-[#A67153] md:p-6 p-3 rounded-r-2xl flex gap-4 items-start shadow-inner">
              <Info size={20} className="text-[#A67153] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2D2926]">
                  Liaison Clearance Notice
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All structural parameters defined in this document comply directly with standard National Building Codes (NBC). However, individual setback alterations must be verified against local municipal development authorities before launching column layout adjustments.
                </p>
              </div>
            </div>

            {/* 4. Scientific Orientation Breakdown */}
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Compass size={18} className="text-[#A67153]" />
                Micro-Climatic Wind Patterns & Light Filtration
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                To maximize sunlight control along a west-facing axis, the main structural facade utilizes deep 1.2-meter cantilevers and perforated louvers. This passive energy strategy reduces solar heat gain during afternoon peak cycles while keeping ambient interior light values crisp, eliminating the need for continuous auxiliary cooling mechanics.
              </p>
            </div>

            {/* 5. STRUCTURED CONFIGURATION COMPARISON DATA TABLE */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2926]">
                <FileSpreadsheet size={16} className="text-[#A67153]" />
                <h4>Material Consumption & Share Metrics</h4>
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
                    <tr className="hover:bg-[#F8F5F2]/30 transition-colors">
                      <td className="p-4 font-bold text-[#2D2926]">Primary Lounge Block</td>
                      <td className="p-4">Ground Floor</td>
                      <td className="p-4">1,150 Sq. Ft.</td>
                      <td className="p-4 text-gray-400">Dead / Live Combined</td>
                      <td className="p-4 text-right font-bold text-[#A67153]">₹ 22.4 Lakhs</td>
                    </tr>
                    <tr className="hover:bg-[#F8F5F2]/30 transition-colors">
                      <td className="p-4 font-bold text-[#2D2926]">Dual Master Suites</td>
                      <td className="p-4">First Floor</td>
                      <td className="p-4">1,020 Sq. Ft.</td>
                      <td className="p-4 text-gray-400">Suspended Slab Spec</td>
                      <td className="p-4 text-right font-bold text-[#A67153]">₹ 18.0 Lakhs</td>
                    </tr>
                    <tr className="hover:bg-[#F8F5F2]/30 transition-colors">
                      <td className="p-4 font-bold text-[#2D2926]">Balconies & Courtyard</td>
                      <td className="p-4">Exterior Buffers</td>
                      <td className="p-4">280 Sq. Ft.</td>
                      <td className="p-4 text-gray-400">Cantilever Structural</td>
                      <td className="p-4 text-right font-bold text-[#A67153]">₹ 4.1 Lakhs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <DetailedFloorPlanFAQs/>

          </div>

          {/* ================= RIGHT SIDE: STICKY METRICS DASHBOARD PANEL (4 COLS) ================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
            <BlogSidebar/>
          </aside>

        </div>

      </div>
    </article>
  );
}