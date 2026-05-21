'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaTimes } from "react-icons/fa";
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const FALLBACK_IMAGE = "/images/no-image.jpg";
const MAX_TESTIMONIALS = 6;

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

export default function VideoTestimonialSlider({ testimonials = [] }) {
  const scrollRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);
  const visibleTestimonials = testimonials.slice(0, MAX_TESTIMONIALS).map(normalizeTestimonial);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = window.innerWidth < 768 ? clientWidth : clientWidth / 3;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (visibleTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-8 lg:py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-16">
        
        {/* Header */}
        <div className="flex md:flex-row justify-between md:items-end items-start md:mb-8 mb-3 gap-6">
          <div className="space-y-4">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4 md:mb-4 mb-1">
              Client Stories
            </p>
            <h2 className="text-xl lg:text-4xl font-medium text-brand-dark tracking-tight">
              Hear from our <span className=". font-light text-brand/80">Clients.</span>
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="md:p-3 p-2 border border-brand/10 hover:bg-brand hover:text-white transition-all cursor-pointer bg-white group" aria-label="Previous testimonials">
              <FaChevronLeft size={16} />
            </button>
            <button onClick={() => scroll('right')} className="md:p-3 p-2 border border-brand/10 hover:bg-brand hover:text-white transition-all cursor-pointer bg-white group" aria-label="Next testimonials">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {visibleTestimonials.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[31%] snap-start bg-white shadow-xl border border-gray-100 flex flex-col group transition-all duration-500"
            >
              {/* Video/Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {playingId === item.id && item.videoUrl ? (
                  <div className="absolute inset-0 z-50">
                    <button 
                      onClick={() => setPlayingId(null)}
                      className="absolute top-2 right-2 z-[60] bg-brand text-white p-2 rounded-full hover:bg-brand-dark transition-colors"
                      aria-label="Close testimonial video"
                    >
                      <FaTimes size={14} />
                    </button>
                    <iframe
                      className="w-full h-full"
                      src={`${item.videoUrl}?autoplay=1&rel=0`}
                      title={item.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <Image 
                      src={item.thumbnail} 
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 768px) 45vw, 85vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors" />
                    
                    {/* Ribbon Badge */}
                    <div className="absolute top-0 left-6 bg-brand text-white px-3 py-4 flex flex-col items-center shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                      <span className="font-bold text-lg leading-none">T</span>
                      <div className="w-full h-[1px] bg-white/30 my-1" />
                      <span className="text-[7px] uppercase tracking-tighter">Verified</span>
                    </div>

                    {/* Play Button */}
                    {item.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => setPlayingId(item.id)}
                          className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-brand shadow-2xl transform transition-all group-hover:scale-110 cursor-pointer hover:bg-brand hover:text-white"
                          aria-label={`Play testimonial video from ${item.name}`}
                        >
                          <FaPlay size={20} className="ml-1" />
                        </button>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-6 right-6">
                      <h4 className="text-white text-lg font-medium tracking-wide drop-shadow-md">{item.title}</h4>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Details */}
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-brand-dark font-bold text-sm uppercase tracking-widest">{item.name}</h3>
                    <p className="text-[10px] text-brand/60 font-bold uppercase mt-1 tracking-widest">{item.id}</p>
                  </div>
                  <span className="text-[11px] font-bold text-brand-dark/20">{item.year}</span>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < item.rating ? "text-brand text-[11px]" : "text-gray-200 text-[11px]"} />
                  ))}
                </div>

                <p className="text-brand-dark/60 text-[13px] leading-relaxed line-clamp-3 mb-0">
                  &quot;{item.quote}&quot;
                </p>

                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark/40">Project Completion</span>
                  <div className="w-8 h-[1px] bg-brand/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/reviews"
            className="group inline-flex items-center gap-3 rounded-full border border-brand/20 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-brand shadow-sm transition-all hover:bg-brand hover:text-white"
          >
            View All Reviews
            <HiOutlineArrowLongRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
