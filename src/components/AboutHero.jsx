'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Shield, Compass, Landmark } from 'lucide-react';

export default function AboutHero() {
  const [showThumbnail, setShowThumbnail] = useState(true);

  // Smoothly fade out the placeholder once the background frame warm-up completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThumbnail(false);
    }, 2500); // 2.5 seconds gives the YouTube stream plenty of buffer room to load behind the scenes
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-28 pb-24 bg-white text-[#2D2926] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Narrative & Authority */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Landmark size={16} className="text-[#A67153]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">The House of Trayaksh</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-medium tracking-tighter leading-[1.2]">
              Engineering Trust.<br />
              <span className=" font-light text-[#A67153]">Sculpting Art.</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
              Founded on the principles of indestructible structural integrity and hyper-luxurious spatial aesthetics, Trayaksh bridges the massive gap between heavy-duty civil engineering and delicate interior couture.
            </p>

            <div className="h-[1px] w-full bg-gray-100" />

            {/* Strategic Value Blocks */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#A67153]">
                  <Shield size={14} />
                  <span className="text-[9px] font-black uppercase tracking-wider text-gray-400">Shield</span>
                </div>
                <p className="text-xs font-bold leading-tight">470+ Quality Checkpoints</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#A67153]">
                  <Compass size={14} />
                  <span className="text-[9px] font-black uppercase tracking-wider text-gray-400">Compass</span>
                </div>
                <p className="text-xs font-bold leading-tight">Scientific Vastu Integration</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#A67153]">
                  <Landmark size={14} />
                  <span className="text-[9px] font-black uppercase tracking-wider text-gray-400">Landmark</span>
                </div>
                <p className="text-xs font-bold leading-tight">High-End Architecture</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Cinematic YouTube Frame with Instant Thumbnail Cover */}
          <div className="lg:col-span-6 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[300px] md:h-[400px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl bg-black"
            >
              {/* Background Video Stream */}
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="Trayaksh Cinematic Brand Reel"
                className="w-full h-full scale-125 object-cover pointer-events-none" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />

              {/* INSTANT PLACEHOLDER OVERLAY LAYER */}
              <AnimatePresence>
                {showThumbnail && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 z-10"
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                      alt="Trayaksh Architecture Showcase Placeholder"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Permanent structural gradient shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/20 via-transparent to-transparent pointer-events-none z-20" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}