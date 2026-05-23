'use client';
import { motion } from 'framer-motion';

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F5F2] text-[#2D2926] select-none pointer-events-none">
      
      {/* BACKGROUND DECORATIVE GRID LINES (Evokes architectural drafting blueprint paper) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* MAIN CONTAINER MESH */}
      <div className="relative flex flex-col items-center text-center space-y-6 max-w-xs px-4">
        
        {/* ARCHITECTURAL GEOMETRIC LOGO ANIMATION */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          
          {/* External Rotating Drafting Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 3.5, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border border-dashed border-[#A67153]/40"
          />
          
          {/* Internal Solid Core Scale Animation */}
          <motion.div 
            animate={{ 
              scale: [0.9, 1.1, 0.9],
              borderRadius: ["24%", "40%", "24%"]
            }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="w-8 h-8 bg-[#2D2926] flex items-center justify-center shadow-md shadow-black/5"
          >
            {/* Minimal Inner Triangle Symbol */}
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-white transform -translate-y-[0.5px]" />
          </motion.div>
        </div>

        {/* LOADING TYPOGRAPHY BRACKET */}
        <div className="space-y-1 relative z-10">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2D2926] pl-[0.4em]">
            Trayaksh Studio
          </h2>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            
            Loading Spatial Matrix...
          </p>
        </div>

        {/* MINIMAL LINE PROGRESS BAR BARRIER */}
        <div className="w-32 h-[2px] bg-gray-200/60 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
              duration: 1.6, 
              ease: "easeInOut", 
              repeat: Infinity 
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#A67153] to-transparent rounded-full"
          />
        </div>

      </div>
    </div>
  );
}