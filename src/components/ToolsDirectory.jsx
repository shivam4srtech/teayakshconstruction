'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calculator, Layers, Compass, Ruler, ArrowRight, 
  Wrench, ChevronRight, Sparkles, ShieldCheck 
} from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';
import HeroFrom from './HeroFrom';

const CALC_TOOLS = [
  {
    id: "tool-01",
    title: "Home Loan EMI Calculator",
    description: "Map out monthly repayment amortizations, track comprehensive interest payloads up to 30%, and secure instant pre-vetted institutional banking offers.",
    href: "/home-loan-emi-calculator",
    icon: Calculator,
    badge: "Detailed Amortization",
    color: "from-[#A67153]/10 to-transparent",
    accent: "#A67153"
  },
  {
    id: "tool-02",
    title: "Floor Plan",
    description: "Find the curated floor plans optimized mathematically for luxury load balancing, space efficiency, and modern aesthetic forms.",
    href: "/floor-plan",
    icon: Layers,
    badge: "Blueprint",
    color: "from-[#2D2926]/5 to-transparent",
    accent: "#2D2926"
  },
  {
    id: "tool-03",
    title: "Cost Estimator",
    description: "Get a scientifically accurate construction estimate in seconds. No hidden costs, just honest numbers.",
    href: "/cost-estimator",
    icon: Calculator,
    badge: "Instant Estimate",
    color: "from-[#2D2926]/5 to-transparent",
    accent: "#2D2926"
  },
 
];

export default function ToolsDirectory() {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <section className="py-24 pb-16 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 space-y-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-gray-200/60 pb-10 mb-4">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/50 px-3.5 py-1.5 rounded-xl shadow-sm">
              <Wrench size={13} />
              <span className="text-[10px] font-black uppercase tracking-widest">Digital Workbench</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2]">
              Engineering & Estimation <span className=" font-light text-[#A67153]">Toolkits</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              Eliminate construction cost variables. Access our suite of core architectural calculators to verify financial metrics, structural volumes, and orientation parameters instantly.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 shrink-0">
                <ShieldCheck size={16} className="text-[#A67153]" />
                <span>Real-time Sync Data System</span>
            </div>
            {/* ================= DIRECT LIAISON CALL BLOCK ================= */}
        <div className="bg-[#2D2926] text-white p-5 md:p-6 rounded-lg shadow-xl flex flex-col  items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#A67153]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-1.5 max-w-xl">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#A67153]">Need custom development estimations?</h4>
           
          </div>

          <button
            onClick={openModal} 
            className="bg-white hover:bg-[#F8F5F2] text-[#2D2926] text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-300 shrink-0 flex items-center gap-1.5 self-stretch md:self-auto justify-center shadow-md">
            Schedule Technical Assessment <ChevronRight size={14} />
          </button>
        </div>
          </div>
          
         
          <div className=' p-4 lg:p-6 shadow-2xl border border-brand/10 relative overflow-hidden group max-w-[350px] lg:mt-5 bg-[#efebe2]'>
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand"></div>
                <div className="mb-4"><h3 className="lg:text-[1.2rem] text-[1.1rem] font-bold text-brand-dark mb-0">Request a Free Consultation</h3></div>
                <HeroFrom/>
          </div>
          
        </div>

        {/* ================= STUNNING 3-COLUMN REFINED GRID SYSTEM ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALC_TOOLS.map((tool, index) => {
            const IconComponent = tool.icon;
            
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white rounded-xl border border-gray-200/60 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:shadow-black/[0.005] overflow-hidden min-h-[300px]"
              >
                {/* Background Gradient Blend */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-40 pointer-events-none transition-opacity group-hover:opacity-60`} />

                {/* Card Top Block */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    {/* Dynamic Graphic Floating Bubble */}
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F5F2] text-[#2D2926] flex items-center justify-center border border-gray-100 transition-colors group-hover:bg-white shrink-0">
                      <IconComponent size={20} style={{ color: tool.accent }} />
                    </div>
                    
                    {/* Utility Metadata Tag */}
                    <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-gray-400 bg-[#F8F5F2] px-2.5 py-1 rounded-lg border border-gray-100">
                      <Sparkles size={8} style={{ color: tool.accent }} /> {tool.badge}
                    </span>
                  </div>

                  {/* Text Suite Information Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#2D2926] group-hover:text-[#A67153] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Block: Navigation Route Trigger */}
                <div className="mt-3 relative z-10 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#2D2926] transition-colors">
                    Access Core Tool System
                  </span>
                  
                  <Link 
                    href={tool.href}
                    className="w-10 h-10 rounded-xl bg-[#2D2926] group-hover:bg-[#A67153] text-white flex items-center justify-center transition-colors duration-300 shadow-md shadow-black/5 transform group-hover:scale-105"
                  >
                    <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        

      </div>
    </section>
  );
}