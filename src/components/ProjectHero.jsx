'use client';
import { motion } from 'framer-motion';
import { IoArrowDownOutline } from 'react-icons/io5';
import EnhancedStatsGrid from './EnhancedStatsGrid';

export default function ProjectHero() {
  return (
    <section className="relative pt-22 md:pb-20 pb-5 bg-[#F8F8F8] overflow-hidden">
       {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, borderSize: '1px', backgroundSize: '40px 40px' }} 
      />
      <div className="absolute md:-bottom-10 bottom-0 -left-0 select-none pointer-events-none">
        <h2 className="text-[15vw] font-black text-black/[0.05] leading-none text-center">PORTFOLIO</h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-brand" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand">Crafting Legacies</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-7xl font-medium tracking-tighter text-brand-dark leading-[1.2]"
            >
              Homes that <br /> 
              <span className="font-light text-brand">Tell a Story.</span>
            </motion.h1 >

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-brand-dark/60 max-w-md text-sm lg:text-base leading-relaxed"
            >
              From sprawling Royale villas to optimized Classic residencies, 
              explore how Teayaksh is redefining the skyline of Noida and Delhi NCR.
            </motion.p>
          </div>

          <EnhancedStatsGrid/>
        </div>

        {/* Bottom Scroll Prompt */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="md:mt-20 mt-5 flex justify-center lg:justify-start"
        >
          <div className="flex items-center gap-4 text-brand-dark/30">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Projects</span>
            <IoArrowDownOutline size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}