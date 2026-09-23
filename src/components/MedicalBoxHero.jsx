'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Mail, 
  Layers, 
  Box, 
  Maximize2, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Eye, 
  X, 
  Tag, 
  SlidersHorizontal,
  Flame,
  FileText
} from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { useModalStore } from '@/store/useModalStore';

const BOX_CATALOG = [
  {
    id: 1,
    boxNo: "Box No. 1",
    tagline: "Ultra-compact organizer for strips & ampoules",
    dimensions: '8.5" × 3" × 2.5"',
    dimensionsCm: "21.6 × 7.6 × 6.3 cm",
    mrp: 49,
    distributorPrice: 25,
    savingsPercent: 49,
    savingsAmount: 24,
    colorName: " White",
    colorHex: "#e2e8f0",
    colorDot: "bg-slate-200 border-slate-400",
    badgeTheme: "bg-slate-100 text-slate-800 border-slate-200",
    capStatus: "Standard Open Top",
    capPrice: null,
    dividers: "Open Channel (No Dividers)",
    gauge: "Standard Medical Grade",
    image: "/images/medical-boxes/white-box-1.png",
    recommendedFor: "Tablet blister strips, eye drops, ampoules & suture packs",
    highlight: "High Volume Fast-Mover"
  },
  {
    id: 2,
    boxNo: "Box No. 2",
    tagline: "Elongated slim profile for deep pharmacy shelving",
    dimensions: '10" × 3" × 2.5"',
    dimensionsCm: "25.4 × 7.6 × 6.3 cm",
    mrp: 58,
    distributorPrice: 33,
    savingsPercent: 43,
    savingsAmount: 25,
    colorName: " Cyan Teal",
    colorHex: "#06b6d4",
    colorDot: "bg-cyan-400 border-cyan-600",
    badgeTheme: "bg-cyan-50 text-cyan-800 border-cyan-200",
    capStatus: "Standard Open Top",
    capPrice: null,
    dividers: "Open Channel (No Dividers)",
    gauge: "Standard Medical Grade",
    image: "/images/medical-boxes/light-blue-box-2.png",
    recommendedFor: "Syringes, elongated strips, vials & medical catheters",
    highlight: "Space Maximizer"
  },
  {
    id: 3,
    boxNo: "Box No. 3",
    tagline: "Dual-compartment with heavy-duty gauge options",
    dimensions: '9.5" × 4" × 3.5"',
    dimensionsCm: "24.1 × 10.2 × 8.9 cm",
    mrp: null,
    distributorPrice: 39,
    tierPricing: [
      { grade: "Medium Gauge", price: 39 },
      { grade: "Heavy Gauge", price: 46 }
    ],
    savingsPercent: null,
    colorName: " Red",
    colorHex: "#ef4444",
    colorDot: "bg-red-500 border-red-700",
    badgeTheme: "bg-rose-50 text-rose-800 border-rose-200",
    capStatus: "Cap Available",
    capPrice: "₹7 Extra",
    dividers: "1 Partition Divider Included",
    gauge: "Medium Gauge (₹39) / Heavy Gauge (₹46)",
    image: "/images/medical-boxes/red-box-3.png",
    recommendedFor: "Antibiotics, urgent medicines & batch segregated bottles",
    highlight: "Optional Cap (₹7 Extra)"
  },
  {
    id: 4,
    boxNo: "Box No. 4",
    tagline: "Deep organizer with exceptional wholesale profit margin",
    dimensions: '11" × 5" × 4"',
    dimensionsCm: "27.9 × 12.7 × 10.2 cm",
    mrp: 180,
    distributorPrice: 69,
    savingsPercent: 62,
    savingsAmount: 111,
    colorName: "Deep Blue",
    colorHex: "#2563eb",
    colorDot: "bg-blue-600 border-blue-800",
    badgeTheme: "bg-blue-50 text-blue-800 border-blue-200",
    capStatus: "Cap Available",
    capPrice: "₹10 Extra",
    dividers: "1 Sturdy Center Divider Included",
    gauge: "Heavy Reinforced Polymer",
    image: "/images/medical-boxes/blue-box-4.png",
    recommendedFor: "Syrup bottles, ointments, roll bandages & medical fluids",
    highlight: "Top Distributor Pick • 62% Margin"
  },
  {
    id: 5,
    boxNo: "Box No. 5",
    tagline: "Wide dual-partition tray for bulk category inventory",
    dimensions: '13" × 6" × 4.5"',
    dimensionsCm: "33.0 × 15.2 × 11.4 cm",
    mrp: 230,
    distributorPrice: 95,
    savingsPercent: 59,
    savingsAmount: 135,
    colorName: "Aqua Cyan",
    colorHex: "#0d9488",
    colorDot: "bg-teal-500 border-teal-700",
    badgeTheme: "bg-teal-50 text-teal-800 border-teal-200",
    capStatus: "No Cap Available",
    capPrice: null,
    dividers: "2 Partition Dividers Included (3 Compartments)",
    gauge: "Heavy Reinforced Polymer",
    image: "/images/medical-boxes/cyan-box-5.png",
    recommendedFor: "Infusion bottles, bulk surgical dressings, OT consumables",
    highlight: "Dual Dividers (3 Slots)"
  },
  {
    id: 6,
    boxNo: "Box No. 6",
    tagline: "Flagship multi-compartment master hospital storage box",
    dimensions: '15" × 7" × 5"',
    dimensionsCm: "38.1 × 17.8 × 12.7 cm",
    mrp: 400,
    distributorPrice: 149,
    savingsPercent: 63,
    savingsAmount: 251,
    colorName: "Safety Yellow",
    colorHex: "#eab308",
    colorDot: "bg-yellow-400 border-yellow-600",
    badgeTheme: "bg-amber-50 text-amber-800 border-amber-200",
    capStatus: "Cap Available",
    capPrice: "Cap Available on Order",
    dividers: "3 Removable Dividers (4 Large Compartments)",
    gauge: "Industrial Heavy Duty",
    image: "/images/medical-boxes/yellow-box-6.png",
    recommendedFor: "Complete category master racks, hospital stockrooms & surgical kits",
    highlight: "Maximum Capacity • 63% Margin"
  }
];

const TRUST_PILLARS = [
  {
    title: "Dust-Repellent Material",
    desc: "Specialized anti-static polymer never absorbs or attracts dust particles.",
    icon: <Sparkles className="w-5 h-5 text-teal-600" />
  },
  {
    title: "100% Medical-Grade",
    desc: "Virgin, non-toxic clinical-grade plastic certified for healthcare environments.",
    icon: <ShieldCheck className="w-5 h-5 text-teal-600" />
  },
  {
    title: "Direct Factory Pricing",
    desc: "Distributor margins up to 63% off MRP with bulk dispatch across India.",
    icon: <Tag className="w-5 h-5 text-teal-600" />
  },
  {
    title: "Modular Organization",
    desc: "Engineered with slide-in dividers and snap-tight caps for sterile segregation.",
    icon: <Layers className="w-5 h-5 text-teal-600" />
  }
];

export default function MedicalBoxHero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const openConsultModal = useModalStore((state) => state.openModal);

  const activeBox = BOX_CATALOG[selectedIndex];

  // Prevent background scrolling when brochure modal is open
  useEffect(() => {
    if (showBrochureModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBrochureModal]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % BOX_CATALOG.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + BOX_CATALOG.length) % BOX_CATALOG.length);
  };

  const generateWhatsAppUrl = (box) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://trayakshconstruction.com/medical-boxes';
    const text = `Hello Divyamrit Industries, I am interested in bulk inquiry for *${box.boxNo}* (${box.dimensions}).\n\nPage Reference: ${pageUrl}\nPlease share wholesale quotation and dispatch details.`;
    return `https://wa.me/918886060442?text=${encodeURIComponent(text)}`;
  };

  const getBrochureWhatsAppUrl = () => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://trayakshconstruction.com/medical-boxes';
    const text = `Hello Divyamrit Industries, I am interested in placing a bulk order for Medical Storage Boxes.\n\nPage Reference: ${pageUrl}`;
    return `https://wa.me/918886060442?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="overview" className="relative pt-6 md:pt-12 pb-10 bg-gradient-to-b from-[#F7F9FB] via-white to-[#F8F5F2] overflow-hidden text-[#2D2926]">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(13, 148, 136, 0.08) 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-[#A67153]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* TOP BRAND PARTNERSHIP / MANUFACTURER BAR */}
        {/* <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 shrink-0 rounded-xl bg-slate-900 flex items-center justify-center p-1.5 shadow-md">
              <Image 
                src="/images/medical-boxes/divyamrit-symbol.png" 
                alt="Divyamrit Industries Symbol" 
                width={36} 
                height={36} 
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase">
                  Divyamrit Industries
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-teal-50 text-teal-700 border border-teal-200">
                  OEM Manufacturer
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium italic">
                A quality product for a better choice • Promoted by Trayaksh Healthcare Solutions
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-4 w-full md:w-auto">
            <a 
              href="tel:+918886060442"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <Phone size={13} className="text-teal-600" />
              <span>8886060442</span>
            </a>
            <a 
              href="tel:+919985199903"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <Phone size={13} className="text-teal-600" />
              <span>9985199903</span>
            </a>
            <button
              onClick={() => setShowBrochureModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200"
            >
              <FileText size={13} />
              <span>View Brochure</span>
            </button>
          </div>
        </div> */}

        {/* MAIN HERO SPLIT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative & Value Offerings */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill Notification Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                100% Medical-Grade Plastic Storage Boxes
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-[#2D2926] leading-[1.12]">
              Engineered For Healthcare.<br />
              <span className="font-light text-teal-700">Zero Dust Absorption.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Manufactured with proprietary <strong className="text-slate-900 font-bold">dust-repellent polymer technology</strong> that never absorbs airborne contaminants. The gold standard for pharmacies, hospital cleanrooms, dispensaries, and clinical inventory racks.
            </p>

            {/* Dust Repellent Highlight Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="relative z-10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                      Dust-Repellent Certified
                    </span>
                    <span className="text-[10px]  md:font-bold bg-white/10 px-2 py-0.5 rounded-full text-white/80">
                      Never Absorbs Dust
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 leading-snug">
                    Unlike standard industrial crates, our clinical-grade surface creates zero static cling, preventing dust accumulation and maintaining sterile hygiene standards.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
              {TRUST_PILLARS.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-sm hover:border-teal-300 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-teal-50 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={generateWhatsAppUrl(activeBox)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/25 active:scale-95"
              >
                <FaWhatsapp size={18} />
                <span>Bulk Order on WhatsApp</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={openConsultModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#2D2926] hover:bg-[#A67153] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                <SlidersHorizontal size={14} />
                <span>Request Custom Quote</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between sm:justify-start sm:gap-8 text-center sm:text-left">
              <div>
                <p className="md:text-2xl text-[1rem] font-bold text-slate-900">6 Sizes</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Modular Capacities</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div>
                <p className="md:text-2xl text-[1rem] font-bold text-teal-700">₹25/-</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Starting Wholesale</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div>
                <p className="md:text-2xl text-[1rem] font-bold text-emerald-600">Up to 63%</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Distributor Margin</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive 3D Showcase & Size Navigator */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-[2.5rem] border border-gray-200/90 shadow-2xl p-5 sm:p-7 relative overflow-hidden">
              
              {/* Card Header & Size Switcher */}
              <div className="flex flex-row items-start sm:items-center justify-between gap-3 mb-3 pb-2 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-700">
                      Product Explorer
                    </span>
                  </div>
                  <h2 className="text-[.8rem] sm:text-2xl font-bold tracking-tight text-slate-900">
                    6 Standard Sizes Available
                  </h2>
                </div>

                {/* Quick Prev / Next Arrows */}
                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Box"
                    className="md:w-8 md:h-8 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-xs font-bold text-gray-400 px-1">
                    {selectedIndex + 1} / {BOX_CATALOG.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next Box"
                    className="md:w-8 md:h-8 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Horizontal Tabs: Box 1 through 6 */}
              <div className="grid grid-cols-6 gap-1.5 sm:gap-2 mb-6 p-1.5 bg-gray-100/80 rounded-2xl">
                {BOX_CATALOG.map((box, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={box.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`relative py-2.5 px-1 rounded-xl text-center transition-all ${
                        isActive
                          ? 'bg-white shadow-md text-slate-900 font-bold'
                          : 'text-gray-500 hover:text-slate-900 hover:bg-white/50 font-bold'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className={`w-2.5 h-2.5 rounded-full ${box.colorDot} shadow-sm`} />
                        <span className="text-[10px] sm:text-xs tracking-tight leading-none">
                          No. {box.id}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Product Showcase Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBox.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {/* Visual Stage Container */}
                  <div className="relative w-full h-[240px] sm:h-[280px] rounded-3xl bg-gradient-to-b from-[#F9FBFC] to-[#F1F5F9] border border-gray-200/70 p-4 flex items-center justify-center overflow-hidden group">
                    {/* Radial Ambient Ring */}
                    <div 
                      className="absolute w-44 h-44 rounded-full blur-2xl opacity-20 pointer-events-none"
                      style={{ backgroundColor: activeBox.colorHex }}
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${activeBox.badgeTheme}`}>
                        {activeBox.boxNo}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 shadow-sm">
                        <Maximize2 size={11} className="text-teal-600" />
                        {activeBox.dimensions}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={activeBox.image}
                        alt={`${activeBox.boxNo} - Medical Storage Box`}
                        width={300}
                        height={240}
                        className="max-h-[200px] sm:max-h-[180px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 rounded-xl"
                        priority
                      />
                    </div>

                    {/* Feature Pill at Bottom of Image Stage */}
                    <div className="absolute bottom-3 inset-x-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-gray-100">
                        {activeBox.colorName}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-teal-100">
                        {activeBox.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Specifications & Price Comparison Grid */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-3.5">
                    
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">
                          {activeBox.boxNo} Specifications
                        </h3>
                        <p className="text-xs text-gray-500">
                          {activeBox.tagline}
                        </p>
                      </div>

                      {/* Pricing Highlight Pill */}
                      <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-gray-200 shadow-sm">
                        {activeBox.mrp ? (
                          <div className="text-right">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">
                              MRP
                            </span>
                            <span className="text-xs line-through text-gray-400 font-bold">
                              ₹{activeBox.mrp}/-
                            </span>
                          </div>
                        ) : null}

                        <div className="text-right pl-1 border-l border-gray-200">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 block">
                            Distributor Price
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-slate-900">
                            ₹{activeBox.distributorPrice}/-
                          </span>
                        </div>

                        {activeBox.savingsPercent && (
                          <span className="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                            Save {activeBox.savingsPercent}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Multi-tier pricing notice for Box 3 */}
                    {activeBox.tierPricing && (
                      <div className="p-2.5 rounded-xl bg-white border border-rose-200 text-xs flex items-center justify-between">
                        <span className="font-bold text-slate-800">Available Grades:</span>
                        <div className="flex items-center gap-3">
                          {activeBox.tierPricing.map((tier, i) => (
                            <span key={i} className="text-rose-700 font-bold bg-rose-50 px-2 py-1 rounded-md border border-rose-100">
                              {tier.grade}: ₹{tier.price}/-
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Detailed Attribute Matrix */}
                    <div className="grid grid-cols-2  gap-2 text-center">
                      <div className="p-2 rounded-xl bg-white border border-gray-100">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">
                          Dimensions
                        </span>
                        <span className="text-xs font-bold text-slate-800 block mt-0.5">
                          {activeBox.dimensions}
                        </span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-gray-100">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">
                          Metric Size
                        </span>
                        <span className="text-xs font-bold text-slate-800 block mt-0.5">
                          {activeBox.dimensionsCm}
                        </span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-gray-100">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">
                          Partition
                        </span>
                        <span className="text-xs font-bold text-slate-800 block mt-0.5 truncate" title={activeBox.dividers}>
                          {activeBox.dividers.split('(')[0]}
                        </span>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-gray-100">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">
                          Cap Provision
                        </span>
                        <span className={`text-xs font-bold block mt-0.5 ${activeBox.capPrice ? 'text-teal-700' : 'text-gray-700'}`}>
                          {activeBox.capPrice || activeBox.capStatus}
                        </span>
                      </div>
                    </div>

                    {/* Recommended Clinical Use */}
                    <div className="text-[11px] text-gray-600 bg-teal-50/60 p-2.5 rounded-xl border border-teal-100 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-teal-600 shrink-0" />
                      <span><strong>Best Suited For:</strong> {activeBox.recommendedFor}</span>
                    </div>

                  </div>

                  {/* Immediate Action Buttons for Active Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={generateWhatsAppUrl(activeBox)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <FaWhatsapp size={16} />
                      <span>Order {activeBox.boxNo} on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+918886060442"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded  bg-slate-900 hover:bg-[#A67153] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <FaPhoneAlt size={13} />
                      <span>Call Factory: 8886060442</span>
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* BOTTOM HYGIENE & QUALITY CERTIFICATION BAR */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-bold uppercase tracking-[0.18em]">
              <span className="flex items-center gap-2 text-teal-300">
                <CheckCircle2 size={16} />
                100% Medical-Grade
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2 text-teal-300">
                <ShieldCheck size={16} />
                Strong & Durable
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2 text-teal-300">
                <Sparkles size={16} />
                Easy To Clean
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2 text-teal-300">
                <Box size={16} />
                Safe & Hygienic
              </span>
            </div>

            <button
              onClick={() => setShowBrochureModal(true)}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <Eye size={14} />
              <span>Inspect Official Price Flyer</span>
            </button>
          </div>
        </div>

      </div>

      {/* BROCHURE / FLYER PREVIEW MODAL */}
      <AnimatePresence>
        {showBrochureModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBrochureModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div>
                  <h3 className="text-lg font-bold">Divyamrit Industries Official Flyer</h3>
                  <p className="text-xs text-gray-400">Direct factory distributor pricing sheet & specifications</p>
                </div>
                <button
                  onClick={() => setShowBrochureModal(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Image Content */}
              <div className="overflow-y-auto p-4 flex justify-center bg-gray-100">
                <div className="relative max-w-full rounded-xl overflow-hidden shadow-lg border border-gray-300">
                  <Image
                    src="/images/medical-boxes-flyer.jpg"
                    alt="Divyamrit Industries Medical Boxes Official Flyer"
                    width={682}
                    height={1024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer Callout */}
              <div className="p-4 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-slate-900">Direct Inquiries & Bulk Orders</p>
                  <p className="text-[11px] text-gray-500">Call: 8886060442 / 9985199903 • Email: divyamritindustries@gmail.com</p>
                </div>
                <a
                  href={getBrochureWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <FaWhatsapp size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}