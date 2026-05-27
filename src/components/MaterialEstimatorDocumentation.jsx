'use client';
import { useState } from 'react';
import { 
  Ruler, Package, Info, MapPin, Calculator, Layers, 
  Target, HardHat, FileSpreadsheet, CheckCircle2, Search,
  ArrowRight
} from 'lucide-react';
import BlogSidebar from './BlogSidebar';

const MATERIAL_MATRIX_DATA = [
  { material: "Structural Steel (TMT Fe 550D Flexi)", metric: "Kg", purpose: "Reinforcement & Tensile Load" }, //
  { material: "Red Clay Bricks / Autoclaved Blocks", metric: "Pcs", purpose: "Partition Walls & Load Bearing" }, //
 
];

export default function MaterialEstimatorDocumentation() {
  return (
    <article className="py-6 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased selection:bg-[#A67153] selection:text-white border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* ================= EDITORIAL CONTENT GRID LOOP ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT SIDE: DEEP TEXT & DOCUMENTATION DATA (8 COLS) ================= */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-6">
            
            {/* 1. Component Introduction Header */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] block">
                Engineering Analysis & Guide Book
              </span>
              <h1 className="text-2xl md:text-3xl font-medium tracking-tight leads-[1.15]">
                Understanding Your Physical Material Reconciliations
              </h1>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                The Trayaksh Building Material Quantity Estimator leverages precise civil thumb-rules and load-bearing matrices to isolated the core inventory payload parameters required for your specific custom residential build—minimizing material procurement waste.
              </p>
            </div>

           

            {/* 2. Topic: What is This Calculator? */}
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Target size={20} className="text-[#A67153]" />
                Decoding the Quantity Estimation Framework
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                This tool acts as your immediate structural Bill of Quantities (BOQ). It translates raw architectural dimensions—such as your slab area metrics and total built-up volumes—into actionable procurement data. While final structural designs from your engineer will refine these values, this immediate estimate allows you to:
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-500 list-disc list-inside pl-2">
                <li>Create accurate material procurement budgets.</li>
                <li>Compare quotes from local material suppliers against a verified base.</li>
                <li>Verify structural logistical payload requirements early.</li>
              </ul>
            </div>

            {/* 3. STRUCTURED MATERIAL DATA MATRIX TABLE */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2926]">
                <FileSpreadsheet size={16} className="text-[#A67153]" />
                <h4>Material Estimation Parameters & Share Metrics</h4>
              </div>
              
              <div className="overflow-x-auto rounded-2xl border border-gray-200/60 shadow-sm bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#2D2926] text-white font-bold uppercase tracking-wider text-[9px]">
                      <th className="p-4">Raw Material Component</th>
                      <th className="p-4">Measurement Metric</th>
                      <th className="p-4">Primary Structural Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                    {MATERIAL_MATRIX_DATA.map((item, i) => (
                      <tr key={i} className="hover:bg-[#F8F5F2]/30 transition-colors">
                        <td className="p-4 font-bold text-[#2D2926]">{item.material}</td> 
                        <td className="p-4 font-bold text-[#A67153]">{item.metric}</td> 
                        <td className="p-4 text-gray-400">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Topic: How to Use the Estimator */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Info size={18} className="text-[#A67153]" />
                How to Isolate Your Material Metrics
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Evaluating your future built-up payload parameters takes less than a minute. Our calculator uses simple state logic so the numbers update on the screen in real-time as you type or select your input variables.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-gray-500 text-xs">
                <div className="bg-[#F8F5F2] border border-gray-100 p-5 rounded-xl space-y-1">
                  <span className="font-bold text-[#2D2926]">1. Input Plot Metrics</span>
                  <p>Type your exact slab area values and total expected built-up volumes into the numeric parameter fields.</p>
                </div>
                <div className="bg-[#F8F5F2] border border-gray-100 p-5 rounded-xl space-y-1">
                  <span className="font-bold text-[#2D2926]">2. Validate Location</span>
                  <p>Select your operating city quadrant using our custom dropdown to align the cost with regional material logistics loops.</p>
                </div>
                <div className="bg-[#F8F5F2] border border-gray-100 p-5 rounded-xl space-y-1">
                  <span className="font-bold text-[#2D2926]">3. Analyze Amortization</span>
                  <p>Review the instant outputs dashboard tracking your core principal quantities—such as cement bags and steel metrics—and secure official engineering liaisons.</p>
                </div>
              </div>
            </div>

            {/* 5. Injected Structural Formula Callout Box */}
            <div className="bg-[#2D2926] text-white p-8 rounded-[2rem] text-center space-y-3 shadow-inner relative overflow-hidden mt-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67153]/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[9px] uppercase tracking-widest text-[#A67153] font-black block">Engineering Amortization Equations</span>
              <p className="text-xl md:text-2xl font-serif tracking-widest text-gray-100 py-2">
                Quantity = Area Parameters × Thumb-Rule Constants
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-2 border-t border-white/5">
                <span>Steel Ratio ≈ 4kg / sqft built-up</span>
                <span>Brick Matrix ≈ 32 pcs / sqft built-up</span>
              </div>
            </div>

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