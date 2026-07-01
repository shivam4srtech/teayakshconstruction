'use client';
import { useEffect, useState } from 'react';
import { Box, Palette, ArrowRight, Armchair, Lightbulb } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';

export default function InteriorVirtualTour() {
  const [activeView, setActiveView] = useState('Living');
  const [isImageLoading, setIsImageLoading] = useState(true);

  const views = {
    Living: '/images/interior-1.webp',
    Kitchen: '/images/image29.webp',
    Bedroom: '/images/bedroom-1.webp',
  };

  useEffect(() => {
    setIsImageLoading(true);
  }, [activeView]);

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
          <div className="lg:col-span-9 relative h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden bg-gray-900 group" aria-busy={isImageLoading}>
            <div className="absolute inset-0 bg-[#1F1A17]">
              {isImageLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1F1A17]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-12 w-12 rounded-full border-4 border-[#A67153]/30 border-t-[#A67153] animate-spin" />
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
                      Loading view
                    </p>
                  </div>
                </div>
              )}

              <img
                key={activeView}
                src={views[activeView]}
                alt={`${activeView} interior view`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  isImageLoading ? 'opacity-0' : 'opacity-80'
                }`}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 66vw"
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
              />
            </div>

            {/* Overlay UI Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

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