'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, HelpCircle, LayoutGrid, Paintbrush, Compass } from 'lucide-react';
import HeroFrom from './HeroFrom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FBF9F6] text-[#2D2926] font-sans antialiased overflow-hidden pt-24 pb-14  flex items-center">
      
      {/* ================= ARCHITECTURAL BACKGROUND LINES ================= */}
      {/* Pure, crisp blueprint grid structure instead of a heavy background picture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Luxury Radial Light Flare for high-end depth */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#A67153]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-[#2D2926]/5 blur-[80px] pointer-events-none" />

      {/* ================= MAIN WRAPPER CONTAINER ================= */}
      <div className="max-w-7xl w-full mx-auto px-5 lg:px-16 relative z-10">
        
        {/* Asymmetrical 12-Column Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ================= LEFT SIDE: ASYMMETRICAL TYPOGRAPHY & SPECS (7 COLS) ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
           {/* Minimalist Studio Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 border-l-2 border-[#A67153] pl-4 text-xs font-bold uppercase tracking-[0.3em] text-[#A67153]"
            >
              Trayaksh Construction — Quality Construction
            </motion.div>

            {/* Premium Avant-Garde Headline */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-[72px] font-light tracking-tight leading-[1.05] text-[#2D2926] mb-4"
              >
                Designing <span className="font-serif  text-[#A67153] font-normal">Dreams.</span> <br />
                Building <span className="font-medium font-sans">Reality.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-500 text-xs md:text-sm max-w-lg leading-relaxed  pt-2 font-[500]"
              >
                We cross the lines between structural engineering, spatial mathematics, and elite luxury interior curation to create architecture intended for legacies.
              </motion.p>
            </div>

            {/* Minimal Dynamic Grid Features (Replaces standard text bullet points) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-0 border-t border-gray-200/60 max-w-xl"
            >
              <div className="space-y-1.5">
                <Compass size={16} className="text-[#A67153]" />
                <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2D2926]">Floor Planning</h4>
                <p className="text-[10px] text-gray-400 leading-tight">Bespoke luxury framing charts.</p>
              </div>
              <div className="space-y-1.5">
                <Paintbrush size={16} className="text-[#A67153]" />
                <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2D2926]">Elite Interiors</h4>
                <p className="text-[10px] text-gray-400 leading-tight">Meticulous detail curation.</p>
              </div>
              <div className="space-y-1.5">
                <LayoutGrid size={16} className="text-[#A67153]" />
                <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2D2926]">Pharmacy Setup</h4>
                <p className="text-[10px] text-gray-400 leading-tight">FDA & Drug License Compliant</p>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT SIDE: FLOATING COUTURE CARD PANEL (5 COLS) ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto relative"
          >
            {/* Soft Shadow Base Ring to produce multi-layered elevation depth */}
            <div className="absolute inset-4 bg-[#2D2926]/5 rounded-[3.5rem] blur-2xl transform translate-y-4 pointer-events-none" />

            {/* The Main Container Card */}
            <div className="relative bg-white px-8 md:px-10 py-4 rounded-[1.6rem] border border-gray-100 shadow-xl overflow-hidden group">
              
              {/* Discrete Accent Corner Chip instead of a basic thick border line */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#FBF9F6] rounded-bl-[2.5rem] flex items-center justify-center text-[#A67153] border-b border-l border-gray-100 transition-colors duration-300 group-hover:bg-[#A67153] group-hover:text-white">
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
              </div>

              {/* Form Title Metrics */}
              <div className="mb-8 max-w-[calc(100%-4.5rem)]">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#A67153] block mb-1">
                  Direct Liaison
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#2D2926] leading-tight">
                  Request a Free Consultation
                </h3>
              </div>

              {/* Injecting your core React Form component cleanly */}
              <div className="relative z-10">
                <HeroFrom />
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}