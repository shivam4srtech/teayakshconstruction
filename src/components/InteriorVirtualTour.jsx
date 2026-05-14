'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, RotateCcw, Box, Palette, Info, ArrowRight, Armchair, Lightbulb } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';




export default function InteriorVirtualTour() {
  const [activeView, setActiveView] = useState('Living');

  const views = {
    Living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    Kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    Bedroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop"
  };
 const openModal = useModalStore((state) => state.openModal); 
  return (
    <section className="py-24 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header Content */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-4xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] mb-4 block">Immersive Experience</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#2D2926]">
              Your Future Interior, Ready to  <span className="font-light text-brand">Explore</span>
            </h2>
          </div>
         
        </div>

        {/* The Viewer Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 md:gap-8 gap-4 bg-white p-4 rounded-[3rem] shadow-xl border border-white">
          
          {/* Main 360 View Port */}
          <div className="lg:col-span-9 relative h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden bg-gray-900 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeView}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={views[activeView]}
                className="w-full h-full object-cover opacity-80"
                alt="Virtual Tour"
              />
            </AnimatePresence>

            {/* Overlay UI Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            
            {/* 360 Badge */}
            <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
              <RotateCcw size={14} className="animate-spin-slow" />
              360° Perspective Active
            </div>

            {/* Hotspots (Decorative for UI feel) */}
            <motion.button 
              whileHover={{ scale: 1.2 }}
              className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-[#A67153] flex items-center justify-center text-white shadow-lg border-4 border-white/20"
            >
              <Info size={14} />
            </motion.button>

            {/* View Controls Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center md:gap-4 gap-2 bg-[#2D2926]/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
              {Object.keys(views).map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`md:px-6 md:py-3 p-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeView === view ? 'bg-[#A67153] text-white shadow-lg' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {/* SIDEBAR: Configuration / Info */}
          <div className="lg:col-span-3 flex flex-col justify-between py-6 px-4">
            <div>
              <h4 className="text-xl font-bold text-[#2D2926] mb-6">Material Mood</h4>
              <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#A67153]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Box size={18} className="text-[#A67153]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Flooring</span>
                    </div>
                    <p className="text-[11px] text-gray-500 uppercase">Italian Statuario Marble</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#A67153]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Palette size={18} className="text-[#A67153]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Walls</span>
                    </div>
                    <p className="text-[11px] text-gray-500 uppercase">Dusty Rose / Charcoal Accent</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#A67153]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Armchair size={18} className="text-[#A67153]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Millwork</span>
                    </div>
                    <p className="text-[11px] text-gray-500 uppercase">White Oak / Satin Finish</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#A67153]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Lightbulb size={18} className="text-[#A67153]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Lighting</span>
                    </div>
                    <p className="text-[11px] text-gray-500 uppercase">Warm 2700K / Recessed & Pendant</p>
                  </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-[#2D2926] p-6 rounded-3xl text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A67153] mb-2">Custom Package</p>
                <p className="text-lg font-medium mb-4">Like this vibe?</p>
                <button 
                  className="w-full bg-[#A67153] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-[#2D2926] transition-all"
                  onClick={openModal}
                  >
                  Get Price <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}