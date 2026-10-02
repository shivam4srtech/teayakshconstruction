'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Box,
  Layers,
  Truck,
  ChevronRight
} from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function MedicalBoxNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getWhatsAppUrl = () => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://trayakshconstruction.com/medical-boxes';
    const text = `Hello Divyamrit Industries, I am inquiring about Medical Storage Boxes.\n\nPage Reference: ${pageUrl}\nPlease share wholesale price catalog and dispatch information.`;
    return `https://wa.me/918886060442?text=${encodeURIComponent(text)}`;
  };

  const navLinks = [
    { name: "Overview", href: "#overview", desc: "100% Medical-grade polymer storage", icon: Box },
    { name: "6 Box Sizes & Pricing", href: "#box-sizes", desc: "Dimensions, specs & distributor margins", icon: Layers },
    { name: "Pan-India Logistics", href: "#logistics", desc: "Bulk container supply & factory dispatch", icon: Truck },
  ];

  return (
    <>
      {/* TOP ANNOUNCEMENT / DIRECT CONTACT BAR */}
      <div className="bg-slate-950 text-white text-[11px] py-2 px-4 sm:px-8 border-b border-slate-800/80 hidden lg:flex">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">Direct OEM Manufacturer • 100% Medical-Grade Dust-Repellent Polymer</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
            <a 
              href="tel:+918886060442"
              className="flex items-center gap-1.5 text-gray-200 hover:text-emerald-400 transition-colors"
            >
              <Phone size={12} className="text-emerald-400" />
              <span>+91 88860 60442</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href="tel:+919985199903"
              className="hidden sm:flex items-center gap-1.5 text-gray-200 hover:text-emerald-400 transition-colors"
            >
              <Phone size={12} className="text-emerald-400" />
              <span>+91 99851 99903</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a 
              href="mailto:divyamritindustries@gmail.com"
              className="hidden md:flex items-center gap-1.5 text-gray-200 hover:text-emerald-400 transition-colors"
            >
              <Mail size={12} className="text-emerald-400" />
              <span>divyamritindustries@gmail.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
          
          {/* BRAND LOGO */}
          <Link href="/medical-boxes" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 uppercase leading-none">
                  Divyamrit
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200 leading-none">
                  Industries
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5 leading-none">
                Medical Storage Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-teal-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="/company_profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-slate-800 bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200/60"
            >
              <FileText size={13} className="text-teal-700" />
              <span>Brochure</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <FaWhatsapp size={15} />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* MOBILE ACTIONS: WhatsApp Icon & Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
              aria-label="Inquire on WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded bg-gray-100 hover:bg-gray-200 text-slate-900 flex items-center justify-center transition-all active:scale-90"
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </header>

      {/* FULL-SCREEN PREMIUM MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with Fade Transition */}
            <motion.div
              key="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[99998] bg-slate-950/70 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Menu Panel with Apple-style Fluid Easing */}
            <motion.div
              key="mobile-drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'tween', 
                duration: 0.32, 
                ease: [0.32, 0.72, 0, 1] 
              }}
              className="fixed top-0 right-0 h-[100dvh] w-full max-w-[340px] sm:max-w-sm bg-white shadow-2xl flex flex-col z-[99999] lg:hidden overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-slate-50/80 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center p-1 shadow-sm">
                    <Image 
                      src="/images/medical-boxes/divyamrit-symbol.png" 
                      alt="Divyamrit Industries" 
                      width={24} 
                      height={24} 
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-black text-slate-900 uppercase block leading-none">
                      Divyamrit
                    </span>
                    <span className="text-[9px] font-bold text-teal-700 uppercase tracking-wider block mt-0.5">
                      Medical Storage
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-slate-800 transition-all active:scale-90"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
                
                {/* Navigation Links */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">
                    Directory
                  </p>
                  <div className="space-y-2">
                    {navLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/90 hover:bg-teal-50 text-slate-900 hover:text-teal-800 transition-colors border border-gray-100 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-white flex items-center justify-center shadow-xs text-teal-700 group-hover:scale-105 transition-transform">
                              <IconComponent size={16} />
                            </div>
                            <div>
                              <span className="text-xs font-bold block text-slate-900 group-hover:text-teal-800">
                                {link.name}
                              </span>
                              <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">
                                {link.desc}
                              </span>
                            </div>
                          </div>
                          <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Flyer Action Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-md space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-teal-300" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-teal-300">
                      Official Factory Catalog
                    </span>
                  </div>
                  <p className="text-xs text-gray-200 leading-snug">
                    Inspect the authentic distributor pricing sheet, specs &amp; multi-tier cap options.
                  </p>
                  <a
                    href="/company_profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <FileText size={14} />
                    <span>View Company Profile &amp; Brochure</span>
                  </a>
                </div>

                {/* Direct Factory Contacts */}
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">
                    Direct Contact Desks
                  </p>

                  <a 
                    href="tel:+918886060442"
                    className="flex items-center gap-3 p-3 rounded bg-gray-50 border border-gray-100 text-slate-800 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                      <FaPhoneAlt size={12} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Order Desk</span>
                      <span className="text-xs font-bold text-slate-900">+91 88860 60442</span>
                    </div>
                  </a>

                  <a 
                    href="tel:+919985199903"
                    className="flex items-center gap-3 p-3 rounded bg-gray-50 border border-gray-100 text-slate-800 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                      <FaPhoneAlt size={12} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block">Secondary Desk</span>
                      <span className="text-xs font-bold text-slate-900">+91 99851 99903</span>
                    </div>
                  </a>
                </div>

              </div>

              {/* Drawer Footer WhatsApp CTA */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/80 space-y-2 shrink-0">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors active:scale-98"
                >
                  <FaWhatsapp size={16} />
                  <span>Order on WhatsApp</span>
                  <ArrowRight size={13} />
                </a>
                <p className="text-center text-[10px] text-gray-400 font-medium">
                  Direct Factory Wholesale Inquiries
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
