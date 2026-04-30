'use client';
import { motion } from 'framer-motion';

export default function PricingHero() {
  return (
    <section className="relative py-10 pt-25 bg-[#F9F9F9] overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, borderSize: '1px', backgroundSize: '40px 40px' }} 
      />
      
      {/* Decorative Blueprint Line */}
      
      

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Floating Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand/20 bg-white shadow-sm mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark/60">
              Rates Updated: April 2024
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-medium tracking-tight text-brand-dark leading-[1.2]"
            >
              Building <span className="font-light text-brand">Value</span> <br /> 
              From the <span className="font-light">Ground Up.</span>
            </motion.h1>
            
            
          </div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-brand-dark/50 max-w-xl text-sm lg:text-lg leading-relaxed font-medium"
          >
            Explore our curated construction packages designed for Delhi NCR. 
            Quality-controlled, brand-authorized, and delivered with 
            <span className="text-brand-dark font-bold"> zero hidden escalation.</span>
          </motion.p>

         

        </div>
      </div>
    </section>
  );
}