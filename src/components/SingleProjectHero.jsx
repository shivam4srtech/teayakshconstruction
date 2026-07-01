'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Box, 
  Layers, 
  Fingerprint, 
  Diamond,
  Share2,
  X
} from 'lucide-react';

const DEFAULT_PROJECT_DATA = {
  title: "The Obsidian Villa",
  location: "Jubilee Hills, Hyderabad",
  id: "TR-2026-084",
  area: "4,500 Sq.Ft.",
  floors: "G + 2 Floors",
  package: "Ultra-Luxury Package",
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200"
  ]
};

function formatArea(area) {
  if (!area) return DEFAULT_PROJECT_DATA.area;

  const numericArea = Number(area);
  const formattedArea = Number.isFinite(numericArea) ? numericArea.toLocaleString("en-IN") : area;
  return `${formattedArea} Sq.Ft.`;
}

function formatFloors(elevation) {
  return elevation ? `${elevation} Floors` : DEFAULT_PROJECT_DATA.floors;
}

function getImageUrl(image) {
  if (typeof image === "string") return image;
  return image?.url || image?.image || image?.path || null;
}

function normalizeProjectData(project) {
  if (!project) return DEFAULT_PROJECT_DATA;

  const sliderImages = Array.isArray(project.slider_images)
    ? project.slider_images
        .map(getImageUrl)
        .filter(Boolean)
    : [];
  const images = sliderImages.length > 0
    ? sliderImages
    : [getImageUrl(project.thumbnail_image), getImageUrl(project.animated_image)].filter(Boolean);

  return {
    title: project.title || DEFAULT_PROJECT_DATA.title,
    location: project.city ? project.city.replace(/-/g, " ") : DEFAULT_PROJECT_DATA.location,
    id: project.id || DEFAULT_PROJECT_DATA.id,
    area: formatArea(project.area),
    floors: formatFloors(project.elevation),
    package: project.pricing_tier_name || project.type || project.pricing_tier || DEFAULT_PROJECT_DATA.package,
    styleTier: project.pricing_tier_name || project.type || project.pricing_tier || "Elite Luxury",
    images: images.length > 0 ? images : DEFAULT_PROJECT_DATA.images,
  };
}

export default function ProjectHero({ project }) {
  const projectData = normalizeProjectData(project);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const timerRef = useRef(null);
  const imageCount = projectData.images.length;
  const activeIndex = Math.min(current, imageCount - 1);
  const activeImage = projectData.images[activeIndex];

  const handleNext = () => {
    setCurrent((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: projectData.title,
      text: `Explore ${projectData.title}`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      return;
    }

    window.prompt("Copy this project link", url);
  };

  // Synchronization: Auto-scroll logic
  useEffect(() => {
    if (!isPaused && !isMaximized) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, isMaximized, imageCount]);

  return (
    <section className="pt-25 pb-10 bg-white relative overflow-x-clip">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 overflow-hidden">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center justify-between gap-4 mb-5 min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] hidden md:block">Residential Portfolio</span>
            <div className="w-10 h-[1px] bg-gray-200 hidden md:block" />
            <span className="min-w-0 truncate text-[10px] font-bold uppercase tracking-widest text-gray-400">{projectData.location}</span>
          </div>
          <button
            type="button"
            onClick={handleShare}
            className="shrink-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#2D2926] hover:text-[#A67153] transition-colors"
            aria-label={`Share ${projectData.title}`}
          >
            <Share2 size={14} /> <span className="hidden sm:inline">Share Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Cinematic Carousel */}
          <div 
            className="lg:col-span-7 relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[500px] md:h-[400px] rounded-[3.5rem] overflow-hidden bg-[#F8F5F2] shadow-2xl">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeImage}
                    alt={projectData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={handlePrev} 
                  aria-label='click to previous image'
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#2D2926] transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext}
                  aria-label='click to next image'
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#2D2926] transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Maximize Trigger */}
              <button 
                onClick={() => setIsMaximized(true)}
                aria-label='click to maximize image'
                className="absolute top-8 right-8 w-14 h-14 bg-black/40 backdrop-blur-lg rounded-2xl flex items-center justify-center text-white hover:bg-[#A67153] transition-all z-20 border border-white/10"
              >
                <Maximize2 size={20} />
              </button>

              {/* Visual Indicators */}
              <div className="absolute bottom-10 left-10 flex gap-3">
                {projectData.images.map((_, i) => (
                  <div key={i} className="w-16 h-[2px] bg-white/20 rounded-full overflow-hidden">
                    {activeIndex === i && (
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-[#A67153]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Technical Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full py-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#2D2926] mb-4 leading-[0.85]">
                {projectData.title.split(' ')[0]} <span className="font-light text-[#A67153]">{projectData.title.split(' ').slice(1).join(' ')}</span>
              </h1>

             

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <SpecItem icon={<Fingerprint />} label="Project ID" value={projectData.id} />
                <SpecItem icon={<Box />} label="Total Area" value={projectData.area} />
                <SpecItem icon={<Layers />} label="Structure" value={projectData.floors} />
                <SpecItem icon={<Diamond />} label="Style Tier" value={projectData.styleTier} />
              </div>

              {/* Package Details */}
              <div className="relative p-4 rounded bg-[#F8F5F2] border border-[#A67153]/10 overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A67153] mb-1">Service Package</p>
                  <p className="text-2xl font-bold text-[#2D2926]">{projectData.package}</p>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-[250px]">
                    Includes end-to-end bespoke furniture, Italian marble flooring, and smart home automation.
                  </p>
                </div>
                <Diamond size={80} className="absolute -bottom-6 -right-6 text-[#A67153]/5 rotate-12" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isMaximized && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#2D2926] flex flex-col p-6 md:p-12"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#A67153] mb-1">Visual Study</p>
                <h2 className="text-2xl font-bold">{projectData.title}</h2>
              </div>
              <button 
                onClick={() => setIsMaximized(false)}
                aria-label='click to close modal'
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#2D2926] transition-all"
              >
                <X size={28} />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 relative flex items-center justify-center group/lightbox">
              <button onClick={handlePrev}
                aria-label="Previous Image"
                className="absolute left-0 md:left-4 z-20 w-16 h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-[#A67153] transition-all">
                <ChevronLeft size={32} />
              </button>
              
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="absolute inset-0"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            className="absolute inset-0"
                            >
                            <Image 
                                src={activeImage} 
                                fill
                                /* CHANGE: Changed object-cover to object-contain */
                                className="object-contain p-4 md:p-8 " 
                                alt="Project High Res View"
                                /* Optional: Ensures high quality loading for the expanded view */
                                priority 
                            />
                            </motion.div>
                        </AnimatePresence>
                        </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button onClick={handleNext}
                aria-label="Next Image"
                className="absolute right-0 md:right-4 z-20 w-16 h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-[#A67153] transition-all">
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Interactive Thumbnails */}
            <div className="mt-12 flex justify-center gap-4 overflow-x-auto pb-4 custom-scrollbar">
              {projectData.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${activeIndex === i ? 'border-[#A67153] scale-105 shadow-lg shadow-[#A67153]/20' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  <Image src={img} fill className="object-cover" alt="thumbnail" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SpecItem({ icon, label, value }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-[#A67153]">
        <div className="p-2 bg-[#F8F5F2] rounded-lg">{icon}</div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{label}</span>
      </div>
      <p className="text-[1rem] font-bold text-[#2D2926] tracking-tight">{value}</p>
    </div>
  );
}
