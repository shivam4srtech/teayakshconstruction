'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Star, X, Quote, Calendar, Fingerprint, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS_PER_PAGE = 10;
const FALLBACK_IMAGE = "/images/no-image.jpg";

function normalizeTestimonial(testimonial) {
  return {
    id: testimonial.id,
    name: testimonial.name || "Trayaksh Client",
    year: testimonial.year || "Recent",
    title: testimonial.title || "Client Experience",
    thumbnail: testimonial.thumbnail_image || FALLBACK_IMAGE,
    videoUrl: testimonial.video_url,
    quote: testimonial.quote || "",
    rating: Math.min(Math.max(Number(testimonial.rating) || 0, 0), 5),
  };
}

function EmptyTestimonialsState() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-10 md:p-16 text-center shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#A67153]" />
      <Quote className="mx-auto mb-5 text-[#A67153]" size={36} />
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#2D2926]">Stories Coming Soon</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm md:text-base leading-7 text-[#2D2926]/50">
        Our client stories are being updated. Please check back soon for verified Trayaksh experiences.
      </p>
    </div>
  );
}

export default function AllTestimonials({ testimonials = [] }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const normalizedTestimonials = testimonials.map(normalizeTestimonial);
  const totalPages = Math.max(1, Math.ceil(normalizedTestimonials.length / TESTIMONIALS_PER_PAGE));
  const startIndex = (currentPage - 1) * TESTIMONIALS_PER_PAGE;
  const visibleTestimonials = normalizedTestimonials.slice(startIndex, startIndex + TESTIMONIALS_PER_PAGE);
  const showingStart = normalizedTestimonials.length ? startIndex + 1 : 0;
  const showingEnd = Math.min(startIndex + TESTIMONIALS_PER_PAGE, normalizedTestimonials.length);

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <section className="pb-32 bg-[#F8F5F2] pt-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {normalizedTestimonials.length === 0 ? (
          <EmptyTestimonialsState />
        ) : (
          <>
            {/* Responsive Editorial Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {visibleTestimonials.map((card) => (
                  <motion.div
                    layout
                    key={card.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col group hover:shadow-2xl transition-all duration-500"
                  >
                    
                    {/* VIDEO THUMBNAIL CONTAINER */}
                    <div className="relative h-[280px] w-full overflow-hidden bg-gray-900">
                      <Image 
                        src={card.thumbnail}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                      />
                      
                      {/* Visual Premium Gradient Mask */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Styled Play Button Overlay (Launches Lightbox Player) */}
                      {card.videoUrl && (
                        <button 
                          onClick={() => setActiveVideo(card.videoUrl)}
                          className="absolute inset-0 flex items-center justify-center"
                          aria-label={`Play video testimonial from ${card.name}`}
                        >
                          <div className="w-16 h-16 rounded-full bg-white text-[#2D2926] border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-[#A67153] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                            <Play size={22} className="ml-1 fill-current" />
                          </div>
                        </button>
                      )}

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
                          {[...Array(5)].map((_, idx) => (
                            <Star
                              key={idx}
                              size={14}
                              fill={idx < card.rating ? "#A67153" : "none"}
                              stroke={idx < card.rating ? "none" : "#D8C8BD"}
                            />
                          ))}
                        </div>

                        {/* Main Quote block */}
                        <div className="relative">
                          <Quote size={20} className="absolute -left-2 -top-3 text-gray-100 -z-10 rotate-180" />
                          <p className="text-[#2D2926] text-sm md:text-base font-medium leading-relaxed">
                            &quot;{card.quote}&quot;
                          </p>
                        </div>
                      </div>

                      {/* Author Information Footer */}
                      <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-[#2D2926] tracking-tight">{card.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A67153] mt-0.5">Verified Trayaksh Patron</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {normalizedTestimonials.length > TESTIMONIALS_PER_PAGE && (
              <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2D2926]/40">
                  Showing {showingStart}-{showingEnd} of {normalizedTestimonials.length} testimonials
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-white bg-white p-2 shadow-[0_20px_60px_-35px_rgba(45,41,38,0.45)]">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-11 w-11 rounded-xl flex items-center justify-center text-[#2D2926]/60 transition-all hover:bg-[#2D2926] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#2D2926]/60"
                    aria-label="Previous testimonials page"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`relative h-11 w-11 rounded-xl text-xs font-black transition-all ${
                          currentPage === page
                            ? 'text-white shadow-lg'
                            : 'text-[#2D2926]/50 hover:bg-gray-100 hover:text-[#2D2926]'
                        }`}
                      >
                        <span className="relative z-10">{page}</span>
                        {currentPage === page && (
                          <motion.span
                            layoutId="activeTestimonialsPage"
                            className="absolute inset-0 rounded-xl bg-[#2D2926]"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-11 w-11 rounded-xl flex items-center justify-center text-[#2D2926]/60 transition-all hover:bg-[#2D2926] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#2D2926]/60"
                    aria-label="Next testimonials page"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
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
              aria-label="Close video testimonial"
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
