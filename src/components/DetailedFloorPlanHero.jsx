'use client';

import { useState } from 'react';
import { useModalStore } from '@/store/useModalStore';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Share2, ThumbsUp, Scale, ZoomIn, Info, Download, ArrowRight, UserCheck, X, Move } from 'lucide-react';

const NO_IMAGE = "/images/no-image.jpg";

const FALLBACK_PLAN = {
  title: "Explore A Stunning 3 Bedroom G+1 Residential House Plan Designed For A 40x50 West Facing Plot.",
  type: "Residential Elite",
  excerpt: "This functional, affordable, and luxury-spec blueprint prioritizes modern living through spatial mathematics and material honesty.",
  image: "https://images.unsplash.com/photo-1678132446331-da900be50e27?q=80&w=1065&auto=format&fit=crop",
  dimensions: "40x50 sq.ft.",
  budget: "₹40,45,501",
  totalFloors: "2",
  bhk: "3",
  vastuCompliant: false,
  likes: 22,
  views: "14k+",
  planCode: "TRAYAKSH_4050",
};

function getHeroImage(floorPlan) {
  if (floorPlan?.featuredImage && floorPlan.featuredImage !== NO_IMAGE) return floorPlan.featuredImage;
  if (floorPlan?.image && floorPlan.image !== NO_IMAGE) return floorPlan.image;
  if (floorPlan?.threeDImage && floorPlan.threeDImage !== NO_IMAGE) return floorPlan.threeDImage;
  return FALLBACK_PLAN.image;
}

function getModalImage(floorPlan) {
  if (floorPlan?.threeDImage && floorPlan.threeDImage !== NO_IMAGE) return floorPlan.threeDImage;
  return NO_IMAGE;
}

function getSpecifications(floorPlan) {
  const plan = floorPlan || FALLBACK_PLAN;

  return [
    { icon: <Scale size={18} />, label: "Area Parameters", value: plan.dimensions },
    { icon: <Scale size={18} />, label: "Execution Price Base", value: plan.budget || "On Request" },
    { icon: <Scale size={18} />, label: "Floors / Levels", value: plan.totalFloors || plan.floors },
    { icon: <Scale size={18} />, label: "BHK Configuration", value: plan.bhk },
    { icon: <Scale size={18} />, label: "Scientific Vastu Compliance", value: plan.vastuCompliant ? "True" : "False" },
    { icon: <Scale size={18} />, label: "Construction Sector", value: plan.type?.toUpperCase() },
  ].filter((spec) => spec.value);
}

async function shareFloorPlan(floorPlan) {
  const shareUrl = window.location.href;
  const shareData = {
    title: floorPlan?.title || FALLBACK_PLAN.title,
    text: floorPlan?.excerpt || FALLBACK_PLAN.excerpt,
    url: shareUrl,
  };

  if (navigator.share && navigator.canShare?.(shareData) !== false) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard?.writeText(shareUrl);
}

export default function DetailedFloorPlanHero({ floorPlan }) {
  const openModal = useModalStore((state) => state.openModal);
  const [modalOpen, setModalOpen] = useState(false);
  const plan = floorPlan || FALLBACK_PLAN;
  const heroImage = getHeroImage(floorPlan);
  const modalImage = getModalImage(floorPlan);
  const [heroImageSrc, setHeroImageSrc] = useState(heroImage);
  const specifications = getSpecifications(floorPlan);

  return (
    <section className="py-24 pb-10 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-white p-4 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-black/[0.005] group">
            <div
              className="relative h-[480px] md:h-[380px] rounded-[3rem] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <Image
                src={heroImageSrc}
                alt={plan.imageAlt || plan.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                priority
                onError={() => setHeroImageSrc(NO_IMAGE)}
              />

              <div className="absolute top-6 left-6 z-10 flex gap-2.5">
                <div className="flex items-center gap-1.5 bg-white border border-gray-100/50 text-[10px] text-gray-500 font-black px-3.5 py-1.5 rounded-xl shadow-sm uppercase tracking-wider">
                  <ThumbsUp size={11} className="text-[#A67153]" /> <span>{plan.likes || 0}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-gray-100/50 text-[10px] text-gray-500 font-black px-3.5 py-1.5 rounded-xl shadow-sm uppercase tracking-wider">
                  <UserCheck size={11} className="text-[#A67153]" /> <span>{plan.views || 0} Viewers</span>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md text-[#2D2926] rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={18} />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 px-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Layout Index ID: <span className="text-[#2D2926]">{plan.planCode || plan.rawSlug || FALLBACK_PLAN.planCode}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => shareFloorPlan(plan).catch(() => {})}
                  className="p-2.5 rounded-xl bg-[#F8F5F2] text-gray-400 hover:text-[#A67153] hover:bg-white transition-colors border border-transparent hover:border-gray-100"
                  aria-label="Share floor plan"
                >
                  <Share2 size={15} />
                </button>
                {/* {plan.blueprintPdf && (
                  <a
                    href={plan.blueprintPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#A67153] hover:bg-[#8E5E41] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300"
                  >
                    <Download size={14} /> Download CAD Blueprints
                  </a>
                )} */}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-10">
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] block">{plan.type}</span>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#2D2926] leading-tight">{plan.title}</h1>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{plan.excerpt}</p>
              </div>

              <div className="flex items-center gap-2.5 mb-2 text-xs font-semibold uppercase tracking-wider text-[#2D2926]">
                <Info size={16} className="text-[#A67153]" />
                <h4>Configuration Parameters</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec) => (
                  <div key={spec.label} className="bg-white p-5 rounded-2xl border border-gray-100/50 space-y-1 hover:border-[#A67153]/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[#A67153]">
                      {spec.icon} <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">{spec.label}</span>
                    </div>
                    <p className="text-sm font-black text-[#2D2926] truncate">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
            onClick={openModal}
            className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
              Book A Custom Layout Consultation <ArrowRight size={14} />
            </button>
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#141211]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 z-[99999]"
            onClick={() => setModalOpen(false)}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-[60] w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 group"
              aria-label="Close Modal"
            >
              <X size={20} className="transition-transform group-hover:rotate-90" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full h-full max-w-6xl max-h-[80vh] bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <InteractivePlanBoard key={modalImage} imageUrl={modalImage} title={plan.title} />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white/90 border border-white/10 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider opacity-90 select-none pointer-events-none shadow-xl">
                <Move size={12} className="text-[#A67153] animate-pulse" />
                <span>Drag to rotate layout • Scroll to inspect details</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function InteractivePlanBoard({ imageUrl, title }) {
  const [imageSrc, setImageSrc] = useState(imageUrl || NO_IMAGE);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 8, y: -14 });
  const [scale, setScale] = useState(1);

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    setRotation((current) => ({
      x: Math.max(-28, Math.min(28, current.x - event.movementY * 0.18)),
      y: Math.max(-42, Math.min(42, current.y + event.movementX * 0.18)),
    }));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    setScale((current) => Math.max(0.85, Math.min(1.35, current - event.deltaY * 0.0008)));
  };

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,#2d2926_0%,#141211_58%,#070605_100%)] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onPointerDown={(event) => {
        setIsDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerCancel={() => setIsDragging(false)}
      onWheel={handleWheel}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
      <div
        className="relative w-[82%] max-w-4xl aspect-[4/3] rounded-[2rem] bg-neutral-950 shadow-2xl shadow-black/60 border border-white/10 transition-transform duration-100 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 rounded-[2rem] translate-x-5 translate-y-5 bg-black/45 blur-sm" />
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/15 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title || "Floor plan 3D preview"}
            className="w-full h-full object-cover select-none"
            draggable={false}
            onError={() => setImageSrc(NO_IMAGE)}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
        </div>
        <div className="absolute -right-4 top-8 bottom-8 w-4 rounded-r-2xl bg-[#8E5E41] opacity-70" style={{ transform: 'translateZ(-18px)' }} />
        <div className="absolute left-8 right-8 -bottom-4 h-4 rounded-b-2xl bg-[#6f4a36] opacity-70" style={{ transform: 'translateZ(-18px)' }} />
      </div>
    </div>
  );
}
