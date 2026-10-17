'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
  FileText,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
  Image as ImageIcon,
  Loader2
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
    distributorPrice: 29,
    savingsPercent: 41,
    savingsAmount: 20,
    colorName: " White",
    colorHex: "#e2e8f0",
    colorDot: "bg-slate-200 border-slate-400",
    badgeTheme: "bg-slate-100 text-slate-800 border-slate-200",
    capStatus: "Standard Open Top (No Cap)",
    capPrice: null,
    dividers: "Open Channel (No Dividers)",
    gauge: "Standard Medical Grade",
    image: "/images/medical-boxes/box-1/img-1.jpeg",
    media: [
      {
        id: 'b1-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-1/img-1.jpeg',
        label: 'Photo 1',
        title: 'Box No. 1 - Clinical Angle 1',
        alt: 'Divyamrit Medical Box No. 1 - Angle View 1'
      },
      {
        id: 'b1-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-1/img-2.jpeg',
        label: 'Photo 2',
        title: 'Box No. 1 - Clinical Angle 2',
        alt: 'Divyamrit Medical Box No. 1 - Angle View 2'
      },
      {
        id: 'b1-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-1/img-3.jpeg',
        label: 'Photo 3',
        title: 'Box No. 1 - Front & Top View',
        alt: 'Divyamrit Medical Box No. 1 - Front & Top View'
      },
      {
        id: 'b1-img-4',
        type: 'image',
        src: '/images/medical-boxes/box-1/img-4.jpeg',
        label: 'Photo 4',
        title: 'Box No. 1 - Shelf Organization View',
        alt: 'Divyamrit Medical Box No. 1 - Shelf Organization View'
      },
      {
        id: 'b1-video',
        type: 'video',
        src: '/images/medical-boxes/box-1/box-1.mp4',
        poster: '/images/medical-boxes/box-1/img-1.jpeg',
        label: 'Video Demo',
        title: 'Box No. 1 - Factory Demonstration Video',
        alt: 'Divyamrit Medical Box No. 1 Video'
      }
    ],
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
    distributorPrice: 37,
    savingsPercent: 36,
    savingsAmount: 21,
    colorName: " Cyan Teal",
    colorHex: "#06b6d4",
    colorDot: "bg-cyan-400 border-cyan-600",
    badgeTheme: "bg-cyan-50 text-cyan-800 border-cyan-200",
    capStatus: "Standard Open Top (No Cap)",
    capPrice: null,
    dividers: "Open Channel (No Dividers)",
    gauge: "Standard Medical Grade",
    image: "/images/medical-boxes/box-2/img-1.jpeg",
    media: [
      {
        id: 'b2-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-2/img-1.jpeg',
        label: 'Photo 1',
        title: 'Box No. 2 - Shelf Profile Angle 1',
        alt: 'Divyamrit Medical Box No. 2 - Angle View 1'
      },
      {
        id: 'b2-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-2/img-2.jpeg',
        label: 'Photo 2',
        title: 'Box No. 2 - Shelf Profile Angle 2',
        alt: 'Divyamrit Medical Box No. 2 - Angle View 2'
      },
      {
        id: 'b2-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-2/img-3.jpeg',
        label: 'Photo 3',
        title: 'Box No. 2 - Top Compartment View',
        alt: 'Divyamrit Medical Box No. 2 - Top Compartment View'
      },
      {
        id: 'b2-img-4',
        type: 'image',
        src: '/images/medical-boxes/box-2/img-4.jpeg',
        label: 'Photo 4',
        title: 'Box No. 2 - Clinical Storage View',
        alt: 'Divyamrit Medical Box No. 2 - Clinical Storage View'
      },
      {
        id: 'b2-video',
        type: 'video',
        src: '/images/medical-boxes/box-2/box-2.mp4',
        poster: '/images/medical-boxes/box-2/img-1.jpeg',
        label: 'Video Demo',
        title: 'Box No. 2 - Factory Demonstration Video',
        alt: 'Divyamrit Medical Box No. 2 Video'
      }
    ],
    recommendedFor: "Syringes, elongated strips, vials & medical catheters",
    highlight: "Space Maximizer"
  },
  {
    id: 3,
    boxNo: "Box No. 3",
    tagline: "Dual-compartment with heavy-duty gauge options",
    dimensions: '9.5" × 4" × 3.5"',
    dimensionsCm: "24.1 × 10.2 × 8.9 cm",
    mrp: 86,
    distributorPrice: 46,
    priceWithCap: 55,
    savingsPercent: 47,
    savingsAmount: 40,
    colorName: " Red",
    colorHex: "#ef4444",
    colorDot: "bg-red-500 border-red-700",
    badgeTheme: "bg-rose-50 text-rose-800 border-rose-200",
    capStatus: "Cap Available",
    capPrice: "₹9 Extra (₹55 with Cap)",
    dividers: "1 Partition Divider Included",
    gauge: "Standard Medical Grade",
    image: "/images/medical-boxes/box-3/img-1.jpeg",
    media: [
      {
        id: 'b3-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-1.jpeg',
        label: 'Photo 1',
        title: 'Box No. 3 - Real Clinical Red View 1',
        alt: 'Divyamrit Medical Box No. 3 - View 1'
      },
      {
        id: 'b3-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-2.jpeg',
        label: 'Photo 2',
        title: 'Box No. 3 - Real Clinical Red View 2',
        alt: 'Divyamrit Medical Box No. 3 - View 2'
      },
      {
        id: 'b3-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-3.jpeg',
        label: 'Photo 3',
        title: 'Box No. 3 - Real Clinical Red View 3',
        alt: 'Divyamrit Medical Box No. 3 - View 3'
      },
      {
        id: 'b3-img-4',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-4.jpeg',
        label: 'Photo 4',
        title: 'Box No. 3 - Real Clinical Red View 4',
        alt: 'Divyamrit Medical Box No. 3 - View 4'
      },
      {
        id: 'b3-img-5',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-5.jpeg',
        label: 'Photo 5',
        title: 'Box No. 3 - Real Clinical Red View 5',
        alt: 'Divyamrit Medical Box No. 3 - View 5'
      },
      {
        id: 'b3-img-6',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-6.jpeg',
        label: 'Photo 6',
        title: 'Box No. 3 - Real Clinical Red View 6',
        alt: 'Divyamrit Medical Box No. 3 - View 6'
      },
      {
        id: 'b3-img-7',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-7.jpeg',
        label: 'Photo 7',
        title: 'Box No. 3 - Real Clinical Red View 7',
        alt: 'Divyamrit Medical Box No. 3 - View 7'
      },
      {
        id: 'b3-img-8',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-8.jpeg',
        label: 'Photo 8',
        title: 'Box No. 3 - Real Clinical Red View 8',
        alt: 'Divyamrit Medical Box No. 3 - View 8'
      },
      {
        id: 'b3-img-9',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-9.jpeg',
        label: 'Photo 9',
        title: 'Box No. 3 - Real Clinical Red View 9',
        alt: 'Divyamrit Medical Box No. 3 - View 9'
      },
      {
        id: 'b3-img-10',
        type: 'image',
        src: '/images/medical-boxes/box-3/img-10.jpeg',
        label: 'Photo 10',
        title: 'Box No. 3 - Real Clinical Red View 10',
        alt: 'Divyamrit Medical Box No. 3 - View 10'
      }
    ],
    recommendedFor: "Antibiotics, urgent medicines & batch segregated bottles",
    highlight: "Optional Cap (₹9 Extra • ₹55)"
  },
  {
    id: 4,
    boxNo: "Box No. 4",
    tagline: "Deep organizer with exceptional wholesale profit margin",
    dimensions: '11" × 5" × 4"',
    dimensionsCm: "27.9 × 12.7 × 10.2 cm",
    mrp: 180,
    distributorPrice: 79,
    priceWithCap: 88,
    savingsPercent: 56,
    savingsAmount: 101,
    colorName: "Deep Blue",
    colorHex: "#2563eb",
    colorDot: "bg-blue-600 border-blue-800",
    badgeTheme: "bg-blue-50 text-blue-800 border-blue-200",
    capStatus: "Cap Available",
    capPrice: "₹9 Extra (₹88 with Cap)",
    dividers: "2 Partition Dividers Included (3 Compartments)",
    gauge: "Heavy Reinforced Polymer",
    image: "/images/medical-boxes/box-4/img-1.jpeg",
    media: [
      {
        id: 'b4-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-1.jpeg',
        label: 'Photo 1',
        title: 'Box No. 4 - Deep Organizer View 1',
        alt: 'Divyamrit Medical Box No. 4 - View 1'
      },
      {
        id: 'b4-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-2.jpeg',
        label: 'Photo 2',
        title: 'Box No. 4 - Deep Organizer View 2',
        alt: 'Divyamrit Medical Box No. 4 - View 2'
      },
      {
        id: 'b4-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-3.jpeg',
        label: 'Photo 3',
        title: 'Box No. 4 - Deep Organizer View 3',
        alt: 'Divyamrit Medical Box No. 4 - View 3'
      },
      {
        id: 'b4-img-4',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-4.jpeg',
        label: 'Photo 4',
        title: 'Box No. 4 - Deep Organizer View 4',
        alt: 'Divyamrit Medical Box No. 4 - View 4'
      },
      {
        id: 'b4-img-5',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-5.jpeg',
        label: 'Photo 5',
        title: 'Box No. 4 - Deep Organizer View 5',
        alt: 'Divyamrit Medical Box No. 4 - View 5'
      },
      {
        id: 'b4-img-6',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-6.jpeg',
        label: 'Photo 6',
        title: 'Box No. 4 - Deep Organizer View 6',
        alt: 'Divyamrit Medical Box No. 4 - View 6'
      },
      {
        id: 'b4-img-7',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-7.jpeg',
        label: 'Photo 7',
        title: 'Box No. 4 - Deep Organizer View 7',
        alt: 'Divyamrit Medical Box No. 4 - View 7'
      },
      {
        id: 'b4-img-8',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-8.jpeg',
        label: 'Photo 8',
        title: 'Box No. 4 - Deep Organizer View 8',
        alt: 'Divyamrit Medical Box No. 4 - View 8'
      },
      {
        id: 'b4-img-9',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-9.jpeg',
        label: 'Photo 9',
        title: 'Box No. 4 - Deep Organizer View 9',
        alt: 'Divyamrit Medical Box No. 4 - View 9'
      },
      {
        id: 'b4-img-10',
        type: 'image',
        src: '/images/medical-boxes/box-4/img-10.jpeg',
        label: 'Photo 10',
        title: 'Box No. 4 - Deep Organizer View 10',
        alt: 'Divyamrit Medical Box No. 4 - View 10'
      },
      {
        id: 'b4-video',
        type: 'video',
        src: '/images/medical-boxes/box-4/box-4.mp4',
        poster: '/images/medical-boxes/box-4/img-1.jpeg',
        label: 'Video Demo',
        title: 'Box No. 4 - Factory Demonstration Video',
        alt: 'Divyamrit Medical Box No. 4 Video'
      }
    ],
    recommendedFor: "Syrup bottles, ointments, roll bandages & medical fluids",
    highlight: "Top Distributor Pick • 2 Partitions"
  },
  {
    id: 5,
    boxNo: "Box No. 5",
    tagline: "Wide dual-partition tray for bulk category inventory",
    dimensions: '13" × 6" × 4.5"',
    dimensionsCm: "33.0 × 15.2 × 11.4 cm",
    mrp: 230,
    distributorPrice: 98,
    savingsPercent: 57,
    savingsAmount: 132,
    colorName: "Aqua Cyan",
    colorHex: "#0d9488",
    colorDot: "bg-teal-500 border-teal-700",
    badgeTheme: "bg-teal-50 text-teal-800 border-teal-200",
    capStatus: "No Cap Available",
    capPrice: null,
    dividers: "2 Partition Dividers Included (3 Compartments)",
    gauge: "Heavy Reinforced Polymer",
    image: "/images/medical-boxes/box-5/img-1.jpeg",
    media: [
      {
        id: 'b5-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-1.jpeg',
        label: 'Photo 1',
        title: 'Box No. 5 - Bulk Tray View 1',
        alt: 'Divyamrit Medical Box No. 5 - View 1'
      },
      {
        id: 'b5-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-2.jpeg',
        label: 'Photo 2',
        title: 'Box No. 5 - Bulk Tray View 2',
        alt: 'Divyamrit Medical Box No. 5 - View 2'
      },
      {
        id: 'b5-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-3.jpeg',
        label: 'Photo 3',
        title: 'Box No. 5 - Multi-Partition View 3',
        alt: 'Divyamrit Medical Box No. 5 - View 3'
      },
      {
        id: 'b5-img-4',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-4.jpeg',
        label: 'Photo 4',
        title: 'Box No. 5 - Multi-Partition View 4',
        alt: 'Divyamrit Medical Box No. 5 - View 4'
      },
      {
        id: 'b5-img-5',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-5.jpeg',
        label: 'Photo 5',
        title: 'Box No. 5 - Multi-Partition View 5',
        alt: 'Divyamrit Medical Box No. 5 - View 5'
      },
      {
        id: 'b5-img-6',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-6.jpeg',
        label: 'Photo 6',
        title: 'Box No. 5 - Multi-Partition View 6',
        alt: 'Divyamrit Medical Box No. 5 - View 6'
      },
      {
        id: 'b5-img-7',
        type: 'image',
        src: '/images/medical-boxes/box-5/img-7.jpeg',
        label: 'Photo 7',
        title: 'Box No. 5 - Multi-Partition View 7',
        alt: 'Divyamrit Medical Box No. 5 - View 7'
      },
      {
        id: 'b5-video',
        type: 'video',
        src: '/images/medical-boxes/box-5/box-5.mp4',
        poster: '/images/medical-boxes/box-5/img-1.jpeg',
        label: 'Video Demo',
        title: 'Box No. 5 - Factory Demonstration Video',
        alt: 'Divyamrit Medical Box No. 5 Video'
      }
    ],
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
    distributorPrice: 169,
    priceWithCap: 189,
    savingsPercent: 58,
    savingsAmount: 231,
    colorName: "Safety Yellow",
    colorHex: "#eab308",
    colorDot: "bg-yellow-400 border-yellow-600",
    badgeTheme: "bg-amber-50 text-amber-800 border-amber-200",
    capStatus: "Cap Available",
    capPrice: "₹20 Extra (₹189 with Cap)",
    dividers: "3 Removable Dividers (4 Large Compartments)",
    gauge: "Industrial Heavy Duty",
    image: "/images/medical-boxes/box-6/img-1.jpeg",
    media: [
      {
        id: 'b6-img-1',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-1.jpeg',
        label: 'Photo 1',
        title: 'Box No. 6 - Master Hospital Tray View 1',
        alt: 'Divyamrit Medical Box No. 6 - View 1'
      },
      {
        id: 'b6-img-2',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-2.jpeg',
        label: 'Photo 2',
        title: 'Box No. 6 - Master Hospital Tray View 2',
        alt: 'Divyamrit Medical Box No. 6 - View 2'
      },
      {
        id: 'b6-img-3',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-3.jpeg',
        label: 'Photo 3',
        title: 'Box No. 6 - Master Hospital Tray View 3',
        alt: 'Divyamrit Medical Box No. 6 - View 3'
      },
      {
        id: 'b6-img-4',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-4.jpeg',
        label: 'Photo 4',
        title: 'Box No. 6 - Master Hospital Tray View 4',
        alt: 'Divyamrit Medical Box No. 6 - View 4'
      },
      {
        id: 'b6-img-5',
        type: 'image',
        src: '/images/medical-boxes/box-6/img-5.jpeg',
        label: 'Photo 5',
        title: 'Box No. 6 - Master Hospital Tray View 5',
        alt: 'Divyamrit Medical Box No. 6 - View 5'
      },
      {
        id: 'b6-video',
        type: 'video',
        src: '/images/medical-boxes/box-6/box-6.mp4',
        poster: '/images/medical-boxes/box-6/img-1.jpeg',
        label: 'Video Demo',
        title: 'Box No. 6 - Factory Demonstration Video',
        alt: 'Divyamrit Medical Box No. 6 Video'
      }
    ],
    recommendedFor: "Complete category master racks, hospital stockrooms & surgical kits",
    highlight: "Maximum Capacity • 58% Margin"
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
    desc: "Distributor margins up to 58% off MRP with bulk dispatch across India.",
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
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [mediaLoading, setMediaLoading] = useState(true);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  const videoRef = useRef(null);
  const openConsultModal = useModalStore((state) => state.openModal);

  const activeBox = BOX_CATALOG[selectedIndex];
  const currentMediaList = activeBox.media || [];
  const currentMedia = currentMediaList[activeMediaIndex] || currentMediaList[0];

  // Prevent background scrolling when modals are open
  useEffect(() => {
    if (showBrochureModal || showLightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBrochureModal, showLightbox]);

  // Handle Box switching
  const handleSelectBox = (idx) => {
    if (idx !== selectedIndex) {
      setSelectedIndex(idx);
      setActiveMediaIndex(0);
      setMediaLoading(true);
      setIsPlaying(true);
    }
  };

  const handleNextBox = () => {
    setSelectedIndex((prev) => (prev + 1) % BOX_CATALOG.length);
    setActiveMediaIndex(0);
    setMediaLoading(true);
    setIsPlaying(true);
  };

  const handlePrevBox = () => {
    setSelectedIndex((prev) => (prev - 1 + BOX_CATALOG.length) % BOX_CATALOG.length);
    setActiveMediaIndex(0);
    setMediaLoading(true);
    setIsPlaying(true);
  };

  // Media navigation within current box
  const handleNextMedia = useCallback(() => {
    setMediaLoading(true);
    setActiveMediaIndex((prev) => (prev + 1) % currentMediaList.length);
  }, [currentMediaList.length]);

  const handlePrevMedia = useCallback(() => {
    setMediaLoading(true);
    setActiveMediaIndex((prev) => (prev - 1 + currentMediaList.length) % currentMediaList.length);
  }, [currentMediaList.length]);

  const handleSelectMedia = (mIdx) => {
    if (mIdx !== activeMediaIndex) {
      setMediaLoading(true);
      setActiveMediaIndex(mIdx);
      setIsPlaying(true);
    }
  };

  // Smooth Auto-Loop slideshow through media
  useEffect(() => {
    if (!isAutoSlide || isHovered || showLightbox) return;

    // Longer duration for video, crisp duration for images
    const duration = currentMedia?.type === 'video' ? 8000 : 4500;

    const timer = setTimeout(() => {
      handleNextMedia();
    }, duration);

    return () => clearTimeout(timer);
  }, [isAutoSlide, isHovered, showLightbox, currentMedia, handleNextMedia]);

  // Video play/pause toggle
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => { });
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Video mute/unmute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
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
                    <span className="text-[10px] md:font-bold bg-white/10 px-2 py-0.5 rounded-full text-white/80">
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
                className="group inline-flex items-center justify-center gap-2.5 px-2 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[.6rem] uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/25 active:scale-95"
              >
                <FaWhatsapp size={18} />
                <span>Bulk Order on WhatsApp</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={openConsultModal}
                className="inline-flex items-center justify-center gap-2 px-2 py-2 rounded bg-[#2D2926] hover:bg-[#A67153] text-white font-bold text-[.6rem] uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                <SlidersHorizontal size={18} />
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
                <p className="md:text-2xl text-[1rem] font-bold text-teal-700">₹29/-</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Starting Wholesale</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div>
                <p className="md:text-2xl text-[1rem] font-bold text-emerald-600">Up to 58%</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Distributor Margin</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive High-Performance Media Showcase & Size Navigator */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-xl border border-gray-200/90 shadow-2xl p-5 sm:p-7 relative overflow-hidden">

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

                {/* Quick Prev / Next Box Arrows */}
                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <button
                    onClick={handlePrevBox}
                    aria-label="Previous Box"
                    className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-xs font-bold text-gray-400 px-1">
                    {selectedIndex + 1} / {BOX_CATALOG.length}
                  </span>
                  <button
                    onClick={handleNextBox}
                    aria-label="Next Box"
                    className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Horizontal Tabs: Box 1 through 6 */}
              <div className="grid grid-cols-6 gap-1.5 sm:gap-2 mb-4 p-1.5 bg-gray-100/80 rounded-2xl">
                {BOX_CATALOG.map((box, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={box.id}
                      onClick={() => handleSelectBox(idx)}
                      className={`relative py-2.5 px-1 rounded-xl text-center transition-all ${isActive
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

              {/* Active Product Showcase Display with Framer Motion */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBox.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Visual Stage Container (Non-render-blocking, lazy loaded, interactive) */}
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-full h-[260px] sm:h-[310px] rounded-3xl bg-gradient-to-b from-[#F9FBFC] to-[#F1F5F9] border border-gray-200/80 p-3 sm:p-4 flex items-center justify-center overflow-hidden group shadow-inner"
                  >
                    {/* Radial Ambient Ring matching product color */}
                    <div
                      className="absolute w-48 h-48 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-500"
                      style={{ backgroundColor: activeBox.colorHex }}
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-1 left-3 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${activeBox.badgeTheme}`}>
                        {activeBox.boxNo}
                      </span>
                    </div>

                    <div className="absolute top-1 right-3 z-10 flex items-center gap-2">
                      {currentMediaList.length > 1 && (
                        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 shadow-sm">
                          {currentMedia?.type === 'video' ? 'Video' : `${activeMediaIndex + 1} / ${currentMediaList.length}`}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 shadow-sm">
                        {activeBox.dimensions}
                      </span>

                      {/* Expand Lightbox Button */}
                      <button
                        type="button"
                        onClick={() => setShowLightbox(true)}
                        title="View Full Resolution"
                        className="w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-700 border border-gray-200 shadow-sm flex items-center justify-center transition-transform hover:scale-105"
                      >
                        <Maximize2 size={12} className="text-teal-700" />
                      </button>
                    </div>

                    {/* Prev / Next Slide Arrows (Hover or Touch) */}
                    {currentMediaList.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevMedia();
                          }}
                          aria-label="Previous view"
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-108"
                        >
                          <ChevronLeft size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextMedia();
                          }}
                          aria-label="Next view"
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-108"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {/* LOADING SPINNER OVERLAY: Active during media buffering/loading */}
                    {mediaLoading && (
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-none">
                        <div className="relative w-11 h-11 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border-2 border-teal-200 animate-ping opacity-35" />
                          <div className="w-8 h-8 rounded-full border-2 border-teal-600 border-t-transparent animate-spin" />
                        </div>
                        <span className="mt-2 text-[10px] font-bold tracking-widest text-slate-700 uppercase">
                          {currentMedia?.type === 'video' ? 'Loading Clinical Video...' : 'Loading Box View...'}
                        </span>
                      </div>
                    )}

                    {/* MEDIA DISPLAY (Dynamic Video vs Image with Lazy Loading) */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {currentMedia?.type === 'video' ? (
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
                            onEnded={() => {
                              if (isAutoSlide) handleNextMedia();
                            }}
                            className={`max-h-[220px] sm:max-h-[260px] max-w-full w-auto object-contain rounded-2xl drop-shadow-xl transition-all duration-300 ${mediaLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                              }`}
                          />

                          {/* Video Tag Badge */}
                          {/* <div className="absolute top-2 left-2 z-10">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-sm border border-white/10 shadow-sm">
                              <Video size={10} className="text-teal-400 animate-pulse" />
                              <span>Clinical Video</span>
                            </span>
                          </div> */}

                          {/* Floating Video Controls */}
                          <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2 py-1 rounded-xl border border-white/10 shadow-lg">
                            <button
                              type="button"
                              onClick={togglePlayPause}
                              className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                              aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                              {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                            </button>
                            <button
                              type="button"
                              onClick={toggleMute}
                              className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                            >
                              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center p-2">
                          <Image
                            key={currentMedia?.src}
                            src={currentMedia?.src || activeBox.image}
                            alt={currentMedia?.alt || `${activeBox.boxNo} - Medical Storage Box`}
                            width={380}
                            height={280}
                            loading="lazy"
                            onLoad={() => setMediaLoading(false)}
                            onError={() => setMediaLoading(false)}
                            className={`max-h-[210px] sm:max-h-[250px] w-auto object-contain drop-shadow-2xl transition-all duration-500 rounded-xl group-hover:scale-104 ${mediaLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                              }`}
                          />
                        </div>
                      )}
                    </div>

                    {/* Feature Pill at Bottom of Image Stage */}
                    <div className="absolute bottom-2 inset-x-3 flex items-center justify-between pointer-events-none">
                      {/* <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-gray-100 shadow-sm">
                        {activeBox.colorName}
                      </span> */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-teal-200/70 shadow-sm">
                        {activeBox.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Media Thumbnails Gallery Strip for Active Box */}
                  {/* {currentMediaList.length > 1 && (
                    <div className="p-2.5 rounded-2xl bg-gray-50/90 border border-gray-200/80">
                      <div className="flex items-center justify-between px-1 mb-2">
                        <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                          <ImageIcon size={13} className="text-teal-600" />
                          <span>{currentMediaList.length} Angles & Views</span>
                        </span>
                        <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/70">
                          {currentMedia?.type === 'video' ? 'Clinical Video' : `View ${activeMediaIndex + 1} of ${currentMediaList.length}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 px-0.5 scrollbar-thin">
                        {currentMediaList.map((mediaItem, mIdx) => {
                          const isCurrent = mIdx === activeMediaIndex;
                          return (
                            <button
                              key={mediaItem.id || mIdx}
                              type="button"
                              onClick={() => handleSelectMedia(mIdx)}
                              className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${isCurrent
                                ? 'border-teal-600 ring-2 ring-teal-500/30 scale-105 shadow-md bg-white'
                                : 'border-gray-200 hover:border-gray-400 bg-white opacity-70 hover:opacity-100'
                                }`}
                              title={mediaItem.title || mediaItem.label}
                              aria-label={mediaItem.title || mediaItem.label}
                            >
                              {mediaItem.type === 'video' ? (
                                <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                                  <Image
                                    src={mediaItem.poster || activeBox.image}
                                    alt={mediaItem.alt || 'Video poster'}
                                    fill
                                    sizes="56px"
                                    loading="lazy"
                                    className="object-cover opacity-60"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow">
                                      <Play size={10} className="ml-0.5 text-white" />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Image
                                  src={mediaItem.src}
                                  alt={mediaItem.alt || mediaItem.label}
                                  fill
                                  sizes="56px"
                                  loading="lazy"
                                  className="object-contain p-0.5"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )} */}

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

                        <div className="text-right pl-1 border-l border-gray-200 text-center">
                          <span className="text-[7px] font-bold uppercase tracking-wider text-emerald-600 block">
                            Distributor Price
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-slate-900">
                            ₹{activeBox.distributorPrice}/-
                          </span>
                          <span className="text-[9px] text-gray-400 block font-normal">
                            {activeBox.priceWithCap ? `(₹${activeBox.priceWithCap}/- with cap)` : '(no cap)'}
                          </span>
                        </div>

                        {activeBox.savingsPercent && (
                          <span className="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                            Save {activeBox.savingsPercent}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Detailed Attribute Matrix */}
                    <div className="grid grid-cols-2 gap-2 text-center">
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
                      className="w-full flex items-center justify-center gap-2 py-2 px-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[.6rem] font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <FaWhatsapp size={16} />
                      <span>Order {activeBox.boxNo} on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+918886060442"
                      className="w-full flex items-center justify-center gap-2 py-2 px-2 rounded bg-slate-900 hover:bg-[#A67153] text-white text-[.6rem] font-bold uppercase tracking-wider transition-colors shadow-md"
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

      {/* FULL-SCREEN LIGHTBOX MODAL FOR ULTRA-HIGH-RES MEDIA INSPECTION */}
      <AnimatePresence>
        {showLightbox && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLightbox(false)}
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
                      {activeBox.boxNo}
                    </span>
                    <span className="text-xs text-gray-400">{activeBox.dimensions}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                    {currentMedia?.title || activeBox.tagline}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setShowLightbox(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Lightbox Main Stage */}
              <div className="relative flex-1 p-4 flex items-center justify-center bg-black/40 min-h-[350px] sm:min-h-[450px]">
                {/* Lightbox Prev/Next */}
                {currentMediaList.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevMedia}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-108"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMedia}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-108"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {currentMedia?.type === 'video' ? (
                  <video
                    src={currentMedia.src}
                    poster={currentMedia.poster}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[60vh] max-w-full rounded-xl object-contain shadow-2xl"
                  />
                ) : (
                  <div className="relative w-full h-[60vh] flex items-center justify-center">
                    <Image
                      src={currentMedia?.src || activeBox.image}
                      alt={currentMedia?.alt || activeBox.boxNo}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 896px"
                    />
                  </div>
                )}
              </div>

              {/* Lightbox Visual Thumbnail Bar */}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

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