'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BoxSelect, X, Maximize2 } from 'lucide-react';

const MATERIALS = [
  { id: 1, name: "Italian Statuario", category: "Flooring", desc: "Premium book-matched marble with grey veining.", src: "/images/image1.webp" },
  { id: 2, name: "Burmese Teak", category: "Woodwork", desc: "Seasoned hardwood for timeless door frames.", src: "/images/image3.webp" },
  { id: 3, name: "Brushed Champagne", category: "Hardware", desc: "Custom PVD coated fixtures and handles.", src: "/images/image4.webp" },
  { id: 4, name: "Fluted Charcoal", category: "Wall Paneling", desc: "Architectural louvers for acoustic depth.", src: "/images/image12.webp" },
  { id: 5, name: "Artisanal Terrazzo", category: "Surfaces", desc: "Hand-poured chips in a seamless resin base.", src: "/images/image16.webp" },
  { id: 6, name: "Honed Basalt", category: "Flooring", desc: "Dense volcanic stone with a matte, non-slip finish.", src: "/images/image17.webp" },
  { id: 7, name: "Patina Brass", category: "Hardware", desc: "Aged living finish that develops character over time.", src: "/images/image18.webp" },

  { id: 9, name: "Linen Weave", category: "Textiles", desc: "Belgian linen blend for upholstery and drapery.", src: "/images/image20.webp" },
  { id: 10, name: "Cinder Block Glazed", category: "Wall Paneling", desc: "Rectified porcelain in a structural brick format.", src: "/images/image21.webp" }
];

export default function MaterialCarousel() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-10 lg:px-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BoxSelect size={18} className="text-[#A67153]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">The Palette</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#2D2926]">
          The Interior <span className="font-light text-[#A67153]">Experties</span>
        </h2>
      </div>

      {/* NATIVE SCROLL CONTAINER 
          'overflow-x-auto' enables the scrollbar.
          Custom scrollbar styles are applied via the 'custom-scrollbar' class.
      */}
      <div className="flex gap-8 overflow-x-auto px-5 lg:px-16 pb-8 snap-x snap-mandatory custom-scrollbar">
        {MATERIALS.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedImg(item)}
            className="min-w-[300px] md:min-w-[450px] snap-start group cursor-pointer"
          >
            <div className="relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden mb-6">
              <Image 
                src={item.src}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                    <Maximize2 size={24} />
                 </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-[#2D2926]">{item.name}</h4>
            <p className="text-[10px] uppercase tracking-widest text-[#A67153] font-black mt-1">{item.category}</p>
          </div>
        ))}
        {/* Extra space at end so the last item doesn't stick to the edge */}
        <div className="min-w-[50px] h-1" />
      </div>

      {/* Lightbox Modal logic remains same as previous */}
      <AnimatePresence>
        {selectedImg && (
           <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImg(null)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
             <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative w-full max-w-5xl h-[80vh] rounded-[3rem] overflow-hidden">
                <Image src={selectedImg.src} fill className="object-cover" alt="Full view" />
                <button onClick={() => setSelectedImg(null)} className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white backdrop-blur-md hover:bg-[#A67153] transition-all"><X /></button>
             </motion.div>
           </div>
        )}
      </AnimatePresence>

      {/* INLINE CSS FOR THE PREMIUM SCROLLBAR */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
          margin-inline: 4rem;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #A67153; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2D2926;
        }
      `}</style>
    </section>
  );
}