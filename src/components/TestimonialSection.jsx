'use client';
import { useRef, useState } from 'react';
import { FaStar, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaTimes } from "react-icons/fa";

const testimonials = [
  {
    id: "CRN162781",
    name: "Gajanan K Hegde",
    year: "2024",
    title: "The Perfect Atmosphere",
    thumbnail: "https://plus.unsplash.com/premium_photo-1733306523667-80d5e5668631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "We looked at so many apartments, but nothing felt like home until we saw the craftsmanship of TRAYAKSH.",
    rating: 5,
  },
   {
    id: "CRN211887",
    name: "Neelam & Ratan Okhandiar",
    year: "2024",
    title: "A Lifetime of Trust",
    thumbnail: "https://images.unsplash.com/photo-1706808886508-e21834b4672c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "After a lifetime of service, we needed someone we could rely on. TRAYAKSH delivered excellence at every step.",
    rating: 5,
  },  
  {
    id: "CRN211861",
    name: "Sneha & vivek D",
    year: "2024",
    title: "A Lifetime of Trust",
    thumbnail: "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "After a lifetime of service, we needed someone we could rely on. TRAYAKSH delivered excellence at every step.",
    rating: 5,
  },
  {
    id: "CRN299808",
    name: "Rajasri Suresh",
    year: "2025",
    title: "Rajasri's Dream Home",
    thumbnail: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "Our dream home wasn't just built; it was sculpted. Their vision turned blueprints into our sanctuary.",
    rating: 5,
  },
  
];

export default function VideoTestimonialSlider() {
  const scrollRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = window.innerWidth < 768 ? clientWidth : clientWidth / 3;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 py-8 lg:py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
              Client Stories
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium text-brand-dark tracking-tight">
              Hear from our <span className=". font-light text-brand/80">Clients.</span>
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="p-4 border border-brand/10 hover:bg-brand hover:text-white transition-all cursor-pointer bg-white group">
              <FaChevronLeft size={16} />
            </button>
            <button onClick={() => scroll('right')} className="p-4 border border-brand/10 hover:bg-brand hover:text-white transition-all cursor-pointer bg-white group">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory "
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[31%] snap-start bg-white shadow-xl border border-gray-100 flex flex-col group transition-all duration-500"
            >
              {/* Video/Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {playingId === item.id ? (
                  <div className="absolute inset-0 z-50">
                    <button 
                      onClick={() => setPlayingId(null)}
                      className="absolute top-2 right-2 z-[60] bg-brand text-white p-2 rounded-full hover:bg-brand-dark transition-colors"
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
                    <img 
                      src={item.thumbnail} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors" />
                    
                    {/* Ribbon Badge */}
                    <div className="absolute top-0 left-6 bg-brand text-white px-3 py-4 flex flex-col items-center shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                      <span className="font-bold text-lg leading-none">T</span>
                      <div className="w-full h-[1px] bg-white/30 my-1" />
                      <span className="text-[7px] uppercase tracking-tighter">Verified</span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setPlayingId(item.id)}
                        className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-brand shadow-2xl transform transition-all group-hover:scale-110 cursor-pointer hover:bg-brand hover:text-white"
                      >
                        <FaPlay size={20} className="ml-1" />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-6">
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

                <p className="text-brand-dark/60 text-[13px] leading-relaxed . line-clamp-3">
                  "{item.quote}"
                </p>

                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark/40">Project Completion</span>
                  <div className="w-8 h-[1px] bg-brand/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}