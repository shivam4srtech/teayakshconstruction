'use client';
import { 
  Scale, ShieldCheck, Map, Landmark, Info, 
  HelpCircle, ChevronRight, FileText, Landmark as BankIcon 
} from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import StampDutyFAQs from './StampDutyFAQs';

export default function StampDutyDocumentation() {
  return (
    <article className="py-5 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased border-t border-gray-200/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* ================= EDITORIAL LAYOUT SPLIT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT SIDE: DEEP KNOWLEDGE PORTAL (8 COLS) ================= */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] space-y-12">
            
            {/* Section Header */}
            <div className="space-y-4 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] block">
                Official Transaction Guide
              </span>
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight leading-[1.15]">
                Pan-India Registry  <span className=" font-light text-[#A67153]">All States & UTs</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed">
                Whether you are registering a prime commercial zone in Mumbai, a boutique villa in Bengaluru, or an ancestral plot in Chandigarh, our framework adapts instantly. We provide updated computational models spanning all **28 sovereign states and 8 Union Territories** across India.
              </p>
            </div>



            {/* Demystifying Stamp Duty in Easy Terms */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <FileText size={20} className="text-[#A67153]" />
                What Exactly is Stamp Duty? (In Plain Words)
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Think of **Stamp Duty** as a formal transaction tax levied by your state government. When a property changes ownership, this tax is paid to legally validate your sale deed. Without paying stamp duty, your purchase agreement holds no weight in a court of law, making it the most critical compliance step in buying property.
              </p>
              
              <div className="bg-[#F8F5F2] p-6 rounded-2xl border border-gray-100/80 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A67153]">Why do Rates Vary?</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Because land governance falls under state jurisdiction, each government customizes its rate metrics. Factors influencing your total fee payload include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-bold text-gray-600 pt-1">
                  <div className="flex items-center gap-2">✔ Property Circle Rates</div>
                  <div className="flex items-center gap-2">✔ Urban vs. Rural Zone Boundaries</div>
                  <div className="flex items-center gap-2">✔ Gender-Based Discounts (Lower rates for Women)</div>
                  <div className="flex items-center gap-2">✔ Type of Asset (Flat, Villa, Commercial)</div>
                </div>
              </div>
            </div>

            {/* Explaining Registration Charges */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-[#2D2926] flex items-center gap-2.5">
                <Landmark size={20} className="text-[#A67153]" />
                The Registration Fee: Securing Your Record
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                While Stamp Duty pays for the legal validity of the document, the **Registration Fee** pays for the administrative service of documenting that asset under government custody. It is paid to the local Sub-Registrar's office to enter your name into the official digital land records. In most states, this is a flat **1%** of the property value or capped at a maximum ceiling (e.g., ₹30,000).
              </p>
            </div>

            {/* STEP-BY-STEP FLOW CHART METRIC */}
            <div className="space-y-2 pt-4 mb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2926]">
                <Info size={16} className="text-[#A67153]" />
                <h4>How to Handle Property Calculations Easily</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-500 text-xs">
                <div className="border border-gray-100 p-6 rounded-2xl space-y-2 hover:shadow-md transition-shadow">
                  <span className="w-6 h-6 rounded-lg bg-[#2D2926] text-white font-bold flex items-center justify-center text-[10px]">01</span>
                  <h5 className="font-bold text-[#2D2926] text-xs">Isolate Circle Rate</h5>
                  <p className="leading-relaxed">Verify the minimum government assessment value of your specific plot location before calculating fees.</p>
                </div>
                
                <div className="border border-gray-100 p-6 rounded-2xl space-y-2 hover:shadow-md transition-shadow">
                  <span className="w-6 h-6 rounded-lg bg-[#A67153] text-white font-bold flex items-center justify-center text-[10px]">02</span>
                  <h5 className="font-bold text-[#2D2926] text-xs">Run the Forecaster</h5>
                  <p className="leading-relaxed">Select your specific state from our selector. Our system automatically pairs it with local statutory guidelines.</p>
                </div>
                
                <div className="border border-gray-100 p-6 rounded-2xl space-y-2 hover:shadow-md transition-shadow">
                  <span className="w-6 h-6 rounded-lg bg-[#2D2926] text-white font-bold flex items-center justify-center text-[10px]">03</span>
                  <h5 className="font-bold text-[#2D2926] text-xs">Allocate Bank Funds</h5>
                  <p className="leading-relaxed">Since home loans rarely cover stamp duty costs, budget this amount separately as upfront processing cash.</p>
                </div>
              </div>
            </div>
            <StampDutyFAQs/>

          </div>

          {/* ================= RIGHT SIDE: QUICK STATUTORY SIDEBAR PANEL (4 COLS) ================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
            
            <BlogSidebar/>

          </aside>

        </div>
        
      </div>
    </article>
  );
}