'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Star, X, Quote, Calendar, Fingerprint } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    id: "CRN299808",
    name: "Rajasri Suresh",
    year: "2025",
    title: "Rajasri's Dream Home",
    thumbnail: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=735&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual project video embeds
    quote: "Our dream home wasn't just built; it was sculpted. Their vision turned blueprints into our sanctuary.",
    rating: 5,
  },
  {
    id: "CRN299809",
    name: "Vikram & Aditi Rao",
    year: "2026",
    title: "The Minimalist Villa",
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=735&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "The structural precision they brought to life left us speechless. Absolute engineering mastery combined with rich interiors.",
    rating: 5,
  },
  {
    id: "CRN299810",
    name: "Kabir Thapar",
    year: "2025",
    title: "Skyline Penthouse Loft",
    thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=735&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "End-to-end transparency, multiple standard checkpoints, and zero material compromise. Exceptional design work.",
    rating: 5,
  }
];

export default function AllTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="pb-32 bg-[#F8F5F2] pt-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Responsive Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS_DATA.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col group hover:shadow-2xl transition-all duration-500"
            >
              
              {/* VIDEO THUMBNAIL CONTAINER */}
              <div className="relative h-[280px] w-full overflow-hidden bg-gray-900">
                <Image 
                  src={card.thumbnail}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                
                {/* Visual Premium Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Styled Play Button Overlay (Launches Lightbox Player) */}
                <button 
                  onClick={() => setActiveVideo(card.videoUrl)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video testimonial"
                >
                  <div className="w-16 h-16 rounded-full bg-white text-[#2D2926] border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-[#A67153] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <Play size={22} className="ml-1 fill-current" />
                  </div>
                </button>

                {/* Floating Architectural Labels */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
                  <p className="text-sm font-bold tracking-tight bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    {card.title}
                  </p>
                </div>
              </div>

              {/* CARD DETAILS PANEL */}
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Metadata Indicators Row */}
                  <div className="flex items-center justify-between text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Fingerprint size={12} className="text-[#A67153]" />
                      <span>ID: {card.id}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#A67153]" />
                      <span>{card.year}</span>
                    </div>
                  </div>

                  {/* Dynamic Rating Stars */}
                  <div className="flex gap-1 text-[#A67153] mb-5">
                    {[...Array(card.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill="#A67153" stroke="none" />
                    ))}
                  </div>

                  {/* Main Quote block */}
                  <div className="relative">
                    <Quote size={20} className="absolute -left-2 -top-3 text-gray-100 -z-10 rotate-180" />
                    <p className="text-[#2D2926] text-sm md:text-base font-medium leading-relaxed">
                      "{card.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Information Footer Footer */}
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text- text-[#2D2926] tracking-tight">{card.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A67153] mt-0.5">Verified Trayaksh Patron</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX IMMERSIVE VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#2D2926]/95 backdrop-blur-md flex flex-col justify-center items-center p-4 md:p-12"
          >
            {/* Modal Exit Hook */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#A67153] hover:border-transparent transition-all"
            >
              <X size={24} />
            </button>

            {/* Secure 16:9 Aspect Video Stage */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
            >
              <iframe 
                src={`${activeVideo}?autoplay=1`}
                title="Video Testimonial Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}