'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Calculator, CheckCircle, ArrowRight, 
  Layers, Info, FileSpreadsheet, ShieldCheck 
} from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import FloorPlanFAQs from './FloorPlanFAQs';

export default function FloorPlanGuideLayout() {
  return (
    <section className=" bg-[#F8F5F2] text-[#2D2926] ">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 pb-10">
        {/* Two-Column Split Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ================= LEFT SIDE: DEEP TECHNICAL COUTURE CONTENT (8 COLS) ================= */}
          <div className="lg:col-span-8 bg-white p-3 md:p-12 md:rounded-[3rem] rounded-xl border border-gray-200/60 shadow-xl shadow-black/[0.005] space-y-10">
            
            {/* 1. Introductory Paragraph Block */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A67153] block">
                Engineering Documentation
              </span>
              <h2 className="text-xl font-bold tracking-tight md:text-4xl text-[#2D2926]">
                The Mathematics of Modern Luxury Floor Planning
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Creating a high-end residential floor plan is far more than just drawing walls; it is an exercise in structural optimization, computational load balancing, and human spatial behavior science. At Trayaksh, every blueprint undergoes rigorous zoning audits to maximize cross-ventilation, eliminate dead hallway footprints, and optimize natural sightlines.
              </p>
            </div>

            {/* 2. Callout box overlay */}
            <div className="bg-[#F8F5F2] border-l-4 border-[#A67153] p-6 rounded-r-2xl flex gap-4 items-start">
              <Info size={20} className="text-[#A67153] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2926]">Important Engineering Note</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Super built-up area metrics should never compromise foundational spacing. Always cross-check setback clearance rules issued by your local municipal body before final site layout configuration setups.
                </p>
              </div>
            </div>

            {/* 3. Detailed Subsections */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Compass size={18} className="text-[#A67153]" /> 
                1. Scientific Vastu Orientation & Spatial Zoning
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                An elite layout balances ancient Vastu principles with structural aesthetics. The Northeast zone (Eshanya) is strictly maintained with lightweight structures and glass walls to allow morning electromagnetic waves to penetrate the home. Conversely, heavy infrastructure elements—like master suites or custom columns—are pushed back into the Southwest quadrant (Nairrutya) to ground the structural layout.
              </p>
            </div>

            {/* 4. TECHNICAL COMPARISON DATA TABLE */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2926]">
                <FileSpreadsheet size={16} className="text-[#A67153]" />
                <h4>Configuration Specifications Matrix</h4>
              </div>
              
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-[#F8F5F2]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#2D2926] text-white font-bold uppercase tracking-wider text-[10px]">
                      <th className="p-4">Plot Footprint</th>
                      <th className="p-4">BHK Class</th>
                      <th className="p-4">Built-Up Area</th>
                      <th className="p-4">Optimal Facing</th>
                      <th className="p-4 text-right">Civil Est. Baseline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-600 font-medium">
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-bold text-[#2D2926]">30 x 40 Sq. Ft.</td>
                      <td className="p-4">3 BHK Duplex</td>
                      <td className="p-4">2,400 Sq. Ft.</td>
                      <td className="p-4">East / North</td>
                      <td className="p-4 text-right font-bold text-[#A67153]">₹ 43.2 Lakhs</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-bold text-[#2D2926]">40 x 50 Sq. Ft.</td>
                      <td className="p-4">4 BHK Triplex</td>
                      <td className="p-4">3,800 Sq. Ft.</td>
                      <td className="p-4">West Facing</td>
                      <td className="p-4 text-right font-bold text-[#A67153]">₹ 68.4 Lakhs</td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 font-bold text-[#2D2926]">50 x 80 Sq. Ft.</td>
                      <td className="p-4">5 BHK Mansion</td>
                      <td className="p-4">6,500 Sq. Ft.</td>
                      <td className="p-4">All Facing Open</td>
                      <td className="p-4 text-right font-bold text-[#A67153]">₹ 1.17 Crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Deep Functional Programming Segment */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2">
                <Layers size={18} className="text-[#A67153]" /> 
                2. Circulatory Efficiency & Flow Optimization
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Modern luxury layout frameworks utilize an integrated **Circulation Core Factor** below 8%. This ensures that square footage is focused heavily on active functional zones like the lounge, dining patio, and expansive bedroom suites, rather than being wasted on endless dark corridors. 
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                By nesting floating partition setups, architectural blueprints create multi-use hubs that adapt seamlessly. For instance, a semi-private lounge can instantly shift into a formal study zone simply by sliding integrated custom wooden acoustic panels.
              </p>
            </div>
            <FloorPlanFAQs/>

          </div>

          {/* ================= RIGHT SIDE: STICKY INQUIRY SIDEBAR HUB (4 COLS) ================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-8">
              <BlogSidebar/>
          </aside>

        </div>
      </div>
      
    </section>
  );
}

