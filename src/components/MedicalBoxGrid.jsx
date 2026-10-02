'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  FileText, 
  Truck, 
  Phone,
  Info,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
  X
} from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useModalStore } from '@/store/useModalStore';

const BOXES = [
  {
    id: 1,
    boxNo: "Box No. 1",
    dimensions: '8.5" × 3" × 2.5"',
    dimensionsCm: "21.6 × 7.6 × 6.3 cm",
    colorName: "Translucent",
    colorHex: "#e2e8f0",
    numberColor: "bg-emerald-700 text-white",
    cardAccent: "border-slate-200 hover:border-slate-400",
    image: "/images/medical-boxes/box-1/img-1.jpeg",
    media: [
      {
        id: 'b1-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-1/img-1.jpeg',
        label: 'Photo 1',
        alt: 'Medical Box No. 1 - Front View'
      },
      {
        id: 'b1-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-1/img-2.jpeg',
        label: 'Photo 2',
        alt: 'Medical Box No. 1 - Angle View'
      },
      {
        id: 'b1-video',
        type: 'video',
        src: '/images/medical-boxes/box-1/box-1.mp4',
        poster: '/images/medical-boxes/box-1/img-1.jpeg',
        label: 'Video',
        alt: 'Medical Box No. 1 Video Demonstration'
      }
    ],
    mrp: 49,
    distributorPrice: 25,
    savingsPercent: 49,
    savingsAmount: 24,
    capBadge: "Standard Open Top",
    capBadgeStyle: "bg-gray-100 text-gray-700 border-gray-200",
    dividers: "No Divider (Open Trough)",
    gauge: "Standard Medical Grade",
    recommendedFor: "Tablet blister strips, eye/ear drops, ampoules & surgical suture packs",
    highlightBadge: "High Volume Fast-Mover",
    popular: false,
  },
  {
    id: 2,
    boxNo: "Box No. 2",
    dimensions: '10" × 3" × 2.5"',
    dimensionsCm: "25.4 × 7.6 × 6.3 cm",
    colorName: " Cyan Teal",
    colorHex: "#06b6d4",
    numberColor: "bg-emerald-700 text-white",
    cardAccent: "border-cyan-200 hover:border-cyan-400",
    image: "/images/medical-boxes/box-2/img-1.jpeg",
    media: [
      {
        id: 'b2-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-2/img-1.jpeg',
        label: 'Photo 1',
        alt: 'Medical Box No. 2 - Shelf View'
      },
      {
        id: 'b2-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-2/img-2.jpeg',
        label: 'Photo 2',
        alt: 'Medical Box No. 2 - Angle View'
      },
      {
        id: 'b2-video',
        type: 'video',
        src: '/images/medical-boxes/box-2/box-2.mp4',
        poster: '/images/medical-boxes/box-2/img-1.jpeg',
        label: 'Video',
        alt: 'Medical Box No. 2 Video Demonstration'
      }
    ],
    mrp: 58,
    distributorPrice: 33,
    savingsPercent: 43,
    savingsAmount: 25,
    capBadge: "Standard Open Top",
    capBadgeStyle: "bg-gray-100 text-gray-700 border-gray-200",
    dividers: "No Divider (Elongated Open Trough)",
    gauge: "Standard Medical Grade",
    recommendedFor: "Disposable syringes, catheters, elongated strips & dropper vials",
    highlightBadge: "Space Maximizer",
    popular: false,
  },
  {
    id: 3,
    boxNo: "Box No. 3",
    dimensions: '9.5" × 4" × 3.5"',
    dimensionsCm: "24.1 × 10.2 × 8.9 cm",
    colorName: "Clinical Red",
    colorHex: "#ef4444",
    numberColor: "bg-emerald-700 text-white",
    cardAccent: "border-rose-200 hover:border-rose-400",
    image: "/images/medical-boxes/box-3/img-1.jpeg",
    media: [
      {
        id: 'b3-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-1.jpeg',
        label: 'Photo 1',
        alt: 'Medical Box No. 3 - Clinical Red View'
      }
    ],
    mrp: null,
    distributorPrice: 39,
    isDualGauge: true,
    tierPricing: [
      { grade: "Medium Gauge", price: 39 },
      { grade: "Heavy Gauge", price: 46 }
    ],
    savingsPercent: null,
    capBadge: "CAP ₹7 EXTRA",
    capBadgeStyle: "bg-amber-400 text-slate-900 border-amber-500 font-bold",
    dividers: "1 Black Center Divider Included",
    gauge: "Medium (₹39) / Heavy (₹46)",
    recommendedFor: "Emergency medicines, antibiotics, vials & compartmentalized ampoules",
    highlightBadge: "Dual Gauge Options",
    popular: false,
  },
  {
    id: 4,
    boxNo: "Box No. 4",
    dimensions: '11" × 5" × 4"',
    dimensionsCm: "27.9 × 12.7 × 10.2 cm",
    colorName: "Deep Clinical Blue",
    colorHex: "#2563eb",
    numberColor: "bg-emerald-700 text-white",
    cardAccent: "border-blue-200 hover:border-blue-500 ring-2 ring-blue-500/20",
    image: "/images/medical-boxes/box-4/img-1.jpeg",
    media: [
      {
        id: 'b4-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-1.jpeg',
        label: 'Photo 1',
        alt: 'Medical Box No. 4 - Deep Organizer View'
      },
      {
        id: 'b4-video',
        type: 'video',
        src: '/images/medical-boxes/box-4/box-4.mp4',
        poster: '/images/medical-boxes/box-4/img-1.jpeg',
        label: 'Video',
        alt: 'Medical Box No. 4 Video Demonstration'
      }
    ],
    mrp: 180,
    distributorPrice: 69,
    savingsPercent: 62,
    savingsAmount: 111,
    capBadge: "CAP ₹10 EXTRA",
    capBadgeStyle: "bg-amber-400 text-slate-900 border-amber-500 font-bold",
    dividers: "1 Partition Divider Included (2 Deep Compartments)",
    gauge: "Heavy Reinforced Polymer",
    recommendedFor: "Syrup bottles, ointments, roll bandages, alcohol swabs & IV fluids",
    highlightBadge: "Distributor Best Seller • 62% OFF",
    popular: true,
  },
  {
    id: 5,
    boxNo: "Box No. 5",
    dimensions: '13" × 6" × 4.5"',
    dimensionsCm: "33.0 × 15.2 × 11.4 cm",
    colorName: "Aqua Cyan",
    colorHex: "#0d9488",
    numberColor: "bg-emerald-700 text-white",
    cardAccent: "border-teal-200 hover:border-teal-400",
    image: "/images/medical-boxes/box-5/img-1.jpeg",
    media: [
      {
        id: 'b5-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-1.jpeg',
        label: 'Photo 1',
        alt: 'Medical Box No. 5 - View 1'
      },
      {
        id: 'b5-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-2.jpeg',
        label: 'Photo 2',
        alt: 'Medical Box No. 5 - View 2'
      },
      {
        id: 'b5-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-3.jpeg',
        label: 'Photo 3',
        alt: 'Medical Box No. 5 - View 3'
      },
      {
        id: 'b5-video',
        type: 'video',
        src: '/images/medical-boxes/box-5/box-5.mp4',
        poster: '/images/medical-boxes/box-5/img-1.jpeg',
        label: 'Video',
        alt: 'Medical Box No. 5 Video Demonstration'
      }
    ],
    mrp: 230,
    distributorPrice: 95,
    savingsPercent: 59,
    savingsAmount: 135,
    capBadge: "NO CAP AVAILABLE",
    capBadgeStyle: "bg-amber-100 text-amber-900 border-amber-300 font-bold",
    dividers: "2 Partition Dividers Included (3 Compartments)",
    gauge: "Heavy Reinforced Polymer",
    recommendedFor: "Infusion bottles, bulk sterile dressings, multi-category medicine lots",
    highlightBadge: "Dual Dividers (3 Slots)",
    popular: false,
  },
  {
    id: 6,
    boxNo: "Box No. 6",
    dimensions: '15" × 7" × 5"',
    dimensionsCm: "38.1 × 17.8 × 12.7 cm",
    colorName: "High-Visibility Yellow",
    colorHex: "#eab308",
    numberColor: "bg-emerald-700 text-white",
    cardAccent: "border-amber-200 hover:border-amber-400 ring-2 ring-amber-400/20",
    image: "/images/medical-boxes/box-6/img-1.jpeg",
    media: [
      {
        id: 'b6-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-1.jpeg',
        label: 'Photo 1',
        alt: 'Medical Box No. 6 - View 1'
      },
      {
        id: 'b6-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-2.jpeg',
        label: 'Photo 2',
        alt: 'Medical Box No. 6 - View 2'
      },
      {
        id: 'b6-video',
        type: 'video',
        src: '/images/medical-boxes/box-6/box-6.mp4',
        poster: '/images/medical-boxes/box-6/img-1.jpeg',
        label: 'Video',
        alt: 'Medical Box No. 6 Video Demonstration'
      }
    ],
    mrp: 400,
    distributorPrice: 149,
    savingsPercent: 63,
    savingsAmount: 251,
    capBadge: "CAP AVAILABLE",
    capBadgeStyle: "bg-amber-400 text-slate-900 border-amber-500 font-bold",
    dividers: "3 Removable Dividers (4 Large Compartments)",
    gauge: "Industrial Heavy Duty",
    recommendedFor: "Hospital master inventory, surgical OT trays, high-density stock racks",
    highlightBadge: "Max Capacity • Save 63%",
    popular: true,
  }
];

// INDIVIDUAL PRODUCT CARD WITH DEDICATED MEDIA VIEWER
function MedicalBoxCard({ box, index, generateWhatsAppUrl, onCalculateBulk, onOpenLightbox }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [mediaLoading, setMediaLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const mediaList = box.media || [{ type: 'image', src: box.image, label: 'Photo 1' }];
  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];
  const hasSavings = Boolean(box.savingsPercent);

  const handleNextMedia = (e) => {
    e.stopPropagation();
    setMediaLoading(true);
    setActiveMediaIndex((prev) => (prev + 1) % mediaList.length);
    setIsPlaying(true);
  };

  const handlePrevMedia = (e) => {
    e.stopPropagation();
    setMediaLoading(true);
    setActiveMediaIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
    setIsPlaying(true);
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group relative flex flex-col bg-white rounded-[2.25rem] border ${box.cardAccent} shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden`}
    >
      {/* Popular / Best Seller Flag */}
      {box.popular && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-gradient-to-l from-emerald-600 to-teal-700 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-2xl shadow-md">
            Best Seller
          </div>
        </div>
      )}

      {/* CARD HEADER: Number, Title, Dimensions */}
      <div className="p-5 pb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full ${box.numberColor} flex items-center justify-center font-bold text-base shadow-sm shrink-0`}>
            {box.id}
          </div>
          <div>
            <h3 className="md:text-xl text-[.8rem] font-bold text-slate-900 tracking-tight leading-tight">
              {box.boxNo}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span 
                className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0" 
                style={{ backgroundColor: box.colorHex }}
              />
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                {box.colorName}
              </span>
            </div>
          </div>
        </div>

        {/* Highlight Pill */}
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 text-right">
          {box.dimensions}
        </span>
      </div>

      {/* PRODUCT VISUAL STAGE (Interactive, Lazy Loaded, Non-Render-Blocking) */}
      <div className="relative mx-4 my-2 h-[210px] sm:h-[230px] rounded-2xl bg-gradient-to-b from-[#F9FBFC] to-[#F1F5F9] border border-gray-100 flex items-center justify-center p-3 overflow-hidden group/stage">
        
        {/* Radial Color Aura */}
        <div 
          className="absolute w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none group-hover/stage:opacity-40 transition-opacity"
          style={{ backgroundColor: box.colorHex }}
        />

        {/* Metric Sub-badge & Fullscreen Lightbox trigger */}
        <div className="absolute top-2.5 left-3 z-10 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 shadow-sm">
            <Maximize2 size={10} className="text-teal-600" />
            {box.dimensionsCm}
          </span>
        </div>

        <div className="absolute top-2.5 right-3 z-10 flex items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(box, activeMediaIndex);
            }}
            title="Inspect Full Resolution"
            className="w-6 h-6 rounded-full bg-white/90 hover:bg-white text-gray-700 border border-gray-200 shadow-sm flex items-center justify-center transition-transform hover:scale-105"
          >
            <Maximize2 size={11} className="text-teal-700" />
          </button>
        </div>

        {/* Prev / Next Media Navigation Arrows */}
        {mediaList.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevMedia}
              aria-label="Previous view"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm flex items-center justify-center transition-all opacity-80 group-hover/stage:opacity-100 hover:scale-105"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={handleNextMedia}
              aria-label="Next view"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm flex items-center justify-center transition-all opacity-80 group-hover/stage:opacity-100 hover:scale-105"
            >
              <ChevronRight size={15} />
            </button>
          </>
        )}

        {/* LOADING SPINNER OVERLAY: Shows until image/video finishes loading */}
        {mediaLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm pointer-events-none transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full border-2 border-teal-600 border-t-transparent animate-spin" />
            <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-600">
              {currentMedia.type === 'video' ? 'Loading Video...' : 'Loading Photo...'}
            </span>
          </div>
        )}

        {/* MEDIA DISPLAY (Dynamic Video vs Image with Lazy Loading) */}
        <div className="relative w-full h-full flex items-center justify-center">
          {currentMedia.type === 'video' ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                key={currentMedia.src}
                src={currentMedia.src}
                poster={currentMedia.poster}
                muted={isMuted}
                playsInline
                autoPlay={isPlaying}
                loop
                preload="metadata"
                onLoadedData={() => setMediaLoading(false)}
                onCanPlay={() => setMediaLoading(false)}
                onWaiting={() => setMediaLoading(true)}
                onPlaying={() => setMediaLoading(false)}
                onError={() => setMediaLoading(false)}
                className={`max-h-[160px] sm:max-h-[175px] max-w-full w-auto object-contain rounded-xl drop-shadow-xl transition-all duration-300 ${
                  mediaLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />

              {/* Mini Video Controls */}
              <div className="absolute bottom-8 right-2 z-10 flex items-center gap-1 bg-slate-900/80 backdrop-blur-md px-1.5 py-0.5 rounded-lg border border-white/10 shadow-sm">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={10} /> : <Play size={10} className="ml-0.5" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX size={10} /> : <Volume2 size={10} />}
                </button>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                key={currentMedia.src}
                src={currentMedia.src}
                alt={currentMedia.alt || `${box.boxNo} - Divyamrit Industries Medical Box`}
                width={260}
                height={190}
                loading="lazy"
                onLoad={() => setMediaLoading(false)}
                onError={() => setMediaLoading(false)}
                className={`max-h-[160px] sm:max-h-[175px] w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-106 rounded-xl ${
                  mediaLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
            </div>
          )}
        </div>

        {/* Media Indicators Dots (Photos / Video) */}
        {mediaList.length > 1 && (
          <div className="absolute top-2.5 inset-x-0 flex items-center justify-center gap-1 z-10 pointer-events-none">
            {mediaList.map((m, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === activeMediaIndex
                    ? 'w-3.5 bg-teal-600 shadow-sm'
                    : 'bg-gray-300 opacity-70'
                }`}
              />
            ))}
          </div>
        )}

        {/* Cap Availability Overlay Bar */}
        <div className="absolute bottom-2 inset-x-3 flex items-center justify-between">
          <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[9px] uppercase tracking-wider shadow-sm border ${box.capBadgeStyle}`}>
            {box.capBadge}
          </span>
          {mediaList.some(m => m.type === 'video') && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider bg-slate-900/80 text-teal-300 backdrop-blur-sm border border-white/10 shadow-sm">
              <Video size={9} />
              <span>Video</span>
            </span>
          )}
        </div>
      </div>

      {/* PRICING TABLE (MATCHING FLYER LAYOUT) */}
      <div className="px-5 pt-3">
        {box.isDualGauge ? (
          /* Box 3 Multi-Tier Gauge Table */
          <div className="rounded border border-rose-300 overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-3">
              <span className="col-span-3 text-rose-300">MRP</span>
              <span className="col-span-5 text-gray-200">Gauge / Grade</span>
              <span className="col-span-4 text-right text-emerald-400">Distributor</span>
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              <div className="grid grid-cols-12 text-xs py-2 px-3 items-center">
                <span className="col-span-3 text-gray-400 font-bold">—</span>
                <span className="col-span-5 font-bold text-slate-800">Medium Gauge</span>
                <span className="col-span-4 text-right font-bold text-slate-900 text-sm">₹39/-</span>
              </div>
              <div className="grid grid-cols-12 text-xs py-2 px-3 items-center bg-rose-50/40">
                <span className="col-span-3 text-gray-400 font-bold">—</span>
                <span className="col-span-5 font-bold text-slate-800">Heavy Gauge</span>
                <span className="col-span-4 text-right font-bold text-rose-700 text-sm">₹46/-</span>
              </div>
            </div>
          </div>
        ) : (
          /* Standard Two-Tone Pricing Header (MRP vs Distributor Price) */
          <div className="rounded border border-gray-200 overflow-hidden shadow-sm flex flex-col">
            <div className="grid grid-cols-2 text-center">
              <div className="bg-[#8b1e1e] text-white py-1 px-2 text-[10px] font-bold uppercase tracking-wider">
                MRP
              </div>
              <div className="bg-[#0f2744] text-white py-1 px-2 text-[10px] font-bold uppercase tracking-wider">
                Distributor Price
              </div>
            </div>
            <div className="grid grid-cols-2 text-center py-2.5 px-3 bg-white divide-x divide-gray-100 items-center">
              <div>
                <span className="text-base sm:text-lg font-bold text-gray-400 line-through">
                  ₹{box.mrp}/-
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-slate-900 leading-none">
                  ₹{box.distributorPrice}/-
                </span>
                {hasSavings && (
                  <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Save {box.savingsPercent}% (₹{box.savingsAmount})
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SPECIFICATIONS & FEATURES LIST */}
      <div className="p-5 pt-3 space-y-2.5 text-xs flex-1">
        
        {/* Dividers */}
        <div className="flex items-start gap-2 text-gray-600 bg-gray-50/80 p-2.5 rounded border border-gray-100">
          <Layers size={15} className="text-teal-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 block leading-tight">Compartment Setup:</span>
            <span className="text-[11px] text-gray-500">{box.dividers}</span>
          </div>
        </div>

        {/* Best Used For */}
        <div className="flex items-start gap-2 text-gray-600 bg-gray-50/80 p-2.5 rounded border border-gray-100">
          <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 block leading-tight">Recommended Use:</span>
            <span className="text-[11px] text-gray-500 leading-snug">{box.recommendedFor}</span>
          </div>
        </div>

      </div>

      {/* CARD FOOTER ACTIONS */}
      <div className="p-5 pt-0 mt-auto space-y-2">
        <a
          href={generateWhatsAppUrl(box)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full group flex items-center justify-center gap-2 py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
        >
          <FaWhatsapp size={16} />
          <span>Order on WhatsApp</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+918886060442"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-[11px] transition-colors"
          >
            <FaPhoneAlt size={11} className="text-teal-600" />
            <span>Call Factory</span>
          </a>

          <button
            onClick={() => onCalculateBulk(box)}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-[11px] transition-colors border border-teal-200"
          >
            <Calculator size={12} className="text-teal-700" />
            <span>Calculate Bulk</span>
          </button>
        </div>
      </div>

    </motion.div>
  );
}

export default function MedicalBoxGrid() {
  const [calcQuantity, setCalcQuantity] = useState(100);
  const [activeBoxForCalc, setActiveBoxForCalc] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);
  const openModal = useModalStore((state) => state.openModal);

  // Prevent background scrolling when calculate bulk modal or lightbox is open
  useEffect(() => {
    if (activeBoxForCalc || lightboxData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeBoxForCalc, lightboxData]);

  const handleOpenLightbox = (box, mediaIdx) => {
    setLightboxData({ box, mediaIndex: mediaIdx });
  };

  const handleLightboxNext = () => {
    if (!lightboxData) return;
    const mediaCount = lightboxData.box.media.length;
    setLightboxData({
      ...lightboxData,
      mediaIndex: (lightboxData.mediaIndex + 1) % mediaCount
    });
  };

  const handleLightboxPrev = () => {
    if (!lightboxData) return;
    const mediaCount = lightboxData.box.media.length;
    setLightboxData({
      ...lightboxData,
      mediaIndex: (lightboxData.mediaIndex - 1 + mediaCount) % mediaCount
    });
  };

  const generateWhatsAppUrl = (box, qty = 100) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://trayakshconstruction.com/medical-boxes';
    const text = `Hello Divyamrit Industries, I want to place a distributor inquiry for:
Product: *${box.boxNo}* (${box.dimensions})
Color: ${box.colorName}
Estimated Quantity: ${qty} units

Page Reference: ${pageUrl}
Please share official wholesale rate, freight to my city, and dispatch lead time.`;
    return `https://wa.me/918886060442?text=${encodeURIComponent(text)}`;
  };

  const getBulkContainerWhatsAppUrl = () => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://trayakshconstruction.com/medical-boxes';
    const text = `Hello Divyamrit Industries, we require a bulk container/carton quotation for Medical Storage Boxes.\n\nPage Reference: ${pageUrl}`;
    return `https://wa.me/918886060442?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="box-sizes" className="py-10 bg-[#FCFBF9] relative overflow-hidden border-t border-gray-200/80">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(45, 41, 38, 0.07) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A67153]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 shadow-sm">
            <Sparkles size={14} className="text-teal-600" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
              Factory Direct Price Catalog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2D2926] leading-[1.15]">
            Medical Boxes — <span className="font-light text-teal-700">6 Different Sizes</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Manufactured by <strong className="text-slate-900 font-bold">Divyamrit Industries</strong> using 100% medical-grade, dust-repellent virgin polymer. Transparent manufacturer prices with up to <strong className="text-emerald-700 font-bold">63% distributor margin</strong>.
          </p>

          {/* Quick Specifications Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-gray-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-sm">
              <CheckCircle2 size={13} className="text-teal-600" />
              100% Medical-Grade
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-sm">
              <Sparkles size={13} className="text-teal-600" />
              Dust-Repellent Material
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-sm">
              <Layers size={13} className="text-teal-600" />
              Modular Dividers & Caps
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-sm">
              <Truck size={13} className="text-teal-600" />
              Pan-India Bulk Dispatch
            </span>
          </div>
        </div>

        {/* 3-COLUMN PRODUCT GRID (Using Real Folder Images & Videos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {BOXES.map((box, index) => (
            <MedicalBoxCard
              key={box.id}
              box={box}
              index={index}
              generateWhatsAppUrl={generateWhatsAppUrl}
              onCalculateBulk={setActiveBoxForCalc}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>

        {/* BOTTOM FACTORY BULK BANNER */}
        <div id="logistics" className="mt-16 p-6 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-wider">
                <Truck size={12} />
                Pan-India Wholesale Logistics
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                Setting Up a Pharmacy Chain, Hospital, or Wholesale Distribution?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Divyamrit Industries provides master bundle cartons with container-load rates, custom color branding, and door delivery across all Indian states. Contact our supply team directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href={getBulkContainerWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95"
              >
                <FaWhatsapp size={18} />
                <span>Bulk Container Inquiry</span>
              </a>

              <button
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-white hover:bg-gray-100 text-slate-900 font-bold text-xs uppercase tracking-widest shadow-md transition-all active:scale-95"
              >
                <span>Request Call Back</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* QUICK BATCH / BULK CALCULATOR MODAL */}
      {activeBoxForCalc && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-200">
            <button
              onClick={() => setActiveBoxForCalc(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700">
                Bulk Margin Calculator
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              {activeBoxForCalc.boxNo} Investment Estimate
            </h4>
            <p className="text-xs text-gray-500 mb-5">
              Dimensions: {activeBoxForCalc.dimensions} • Factory Direct
            </p>

            {/* Quantity Slider / Selector */}
            <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
              <label className="text-xs font-bold text-gray-700 flex justify-between">
                <span>Select Order Quantity:</span>
                <span className="text-teal-700 font-bold text-sm">{calcQuantity} Units</span>
              </label>
              
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={calcQuantity}
                onChange={(e) => setCalcQuantity(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />

              <div className="flex justify-between text-[10px] font-bold text-gray-400">
                <span>50 pcs</span>
                <span>500 pcs</span>
                <span>1000 pcs</span>
                <span>2000 pcs</span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-teal-50/60 border border-teal-100 mb-6 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Unit Wholesale Rate:</span>
                <span className="font-bold text-slate-900">₹{activeBoxForCalc.distributorPrice}/-</span>
              </div>

              {activeBoxForCalc.mrp && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Total MRP Value:</span>
                  <span className="font-bold text-gray-500 line-through">
                    ₹{(activeBoxForCalc.mrp * calcQuantity).toLocaleString('en-IN')}/-
                  </span>
                </div>
              )}

              <div className="pt-2 border-t border-teal-200 flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">Total Factory Investment:</span>
                <span className="text-xl font-bold text-slate-900">
                  ₹{(activeBoxForCalc.distributorPrice * calcQuantity).toLocaleString('en-IN')}/-
                </span>
              </div>

              {activeBoxForCalc.mrp && (
                <div className="flex justify-between text-emerald-700 font-bold pt-1">
                  <span>Your Distributor Profit:</span>
                  <span>+₹{((activeBoxForCalc.mrp - activeBoxForCalc.distributorPrice) * calcQuantity).toLocaleString('en-IN')} ({activeBoxForCalc.savingsPercent}% Margin)</span>
                </div>
              )}
            </div>

            {/* WhatsApp CTA with pre-filled quantity */}
            <a
              href={generateWhatsAppUrl(activeBoxForCalc, calcQuantity)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              <FaWhatsapp size={16} />
              <span>Inquire for {calcQuantity} Units on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* FULL RESOLUTION LIGHTBOX MODAL FOR GRID CARDS */}
      <AnimatePresence>
        {lightboxData && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxData(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh] z-10"
            >
              {/* Lightbox Header */}
              <div className="p-4 px-5 bg-slate-950/90 text-white flex items-center justify-between border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      {lightboxData.box.boxNo}
                    </span>
                    <span className="text-xs text-gray-400">{lightboxData.box.dimensions}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                    {lightboxData.box.media[lightboxData.mediaIndex]?.label || lightboxData.box.boxNo}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxData(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Lightbox Media Stage */}
              <div className="relative flex-1 p-4 flex items-center justify-center bg-black/40 min-h-[350px] sm:min-h-[450px]">
                {lightboxData.box.media.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handleLightboxPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-108"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={handleLightboxNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-108"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {lightboxData.box.media[lightboxData.mediaIndex]?.type === 'video' ? (
                  <video
                    src={lightboxData.box.media[lightboxData.mediaIndex]?.src}
                    poster={lightboxData.box.media[lightboxData.mediaIndex]?.poster}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[60vh] max-w-full rounded-xl object-contain shadow-2xl"
                  />
                ) : (
                  <div className="relative w-full h-[60vh] flex items-center justify-center">
                    <Image
                      src={lightboxData.box.media[lightboxData.mediaIndex]?.src || lightboxData.box.image}
                      alt={lightboxData.box.boxNo}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 896px"
                    />
                  </div>
                )}
              </div>

              {/* Lightbox Thumbnails */}
              {lightboxData.box.media.length > 1 && (
                <div className="p-3 bg-slate-950/80 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto">
                  {lightboxData.box.media.map((med, mIdx) => (
                    <button
                      key={med.id || mIdx}
                      onClick={() => setLightboxData({ ...lightboxData, mediaIndex: mIdx })}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${
                        mIdx === lightboxData.mediaIndex
                          ? 'bg-teal-600 text-white border-teal-400'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {med.type === 'video' ? <Video size={12} /> : null}
                      <span>{med.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
