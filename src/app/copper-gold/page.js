'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Play, Award, CheckCircle, Users, ChevronRight } from 'lucide-react';

export default function RefinedTerraeHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5F1ED] font-serif overflow-x-hidden selection:bg-[#A67153]/20">
      
      {/* 1. STICKY HEADER (STRETCH-PROOF) */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-6 lg:px-16 ${
        isScrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#A67153] flex items-center justify-center">
               <span className="text-[#A67153] font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-[0.2em] text-[#2D2926] uppercase">TERRAE</span>
              <span className="text-[8px] tracking-[0.3em] text-[#A67153] font-sans font-bold uppercase">Constructions & Interiors</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'About Us', 'Services', 'Projects', 'Interiors', 'Blog', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#2D2926]/70 hover:text-[#A67153] transition-colors relative group">
                {link}
                {link === 'Home' && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#A67153]" />}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-[#A67153] hover:bg-[#8e5f44] text-white px-8 py-3 text-[11px] font-sans font-bold uppercase tracking-widest transition-all">
            Get A Quote
          </button>

          <button className="lg:hidden text-[#2D2926]" onClick={() => setMobileMenu(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 2. MAIN HERO SECTION */}
      <main className="relative pt-40 lg:h-screen flex items-center px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Typography */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <p className="text-[#A67153] font-sans font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-[#A67153] pl-4">
                Designing Spaces. Building Trust.
              </p>
              <h1 className="text-6xl lg:text-[90px] leading-[0.95] text-[#2D2926] font-medium tracking-tight">
                Crafting Spaces. <br />
                <span className="italic font-light text-[#A67153]/80">Building Dreams.</span>
              </h1>
            </div>

            <p className="text-[#2D2926]/60 text-lg max-w-md leading-relaxed font-sans">
              A full-service construction and interior design firm delivering exceptional quality and masterfully crafted realities.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#A67153] text-white px-10 py-5 flex items-center gap-3 group transition-all hover:bg-[#2D2926]">
                <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em]">Our Projects</span>
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </button>
              <button className="border border-[#A67153] text-[#A67153] px-10 py-5 font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#A67153] hover:text-white transition-all">
                Our Services
              </button>
            </div>

            {/* Subtle Stat Counter */}
            <div className="flex items-center gap-12 pt-8 border-t border-[#A67153]/10">
              <div>
                <p className="text-3xl font-bold text-[#2D2926]">250+</p>
                <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#A67153]">Projects Done</p>
              </div>
              <div className="w-[1px] h-10 bg-[#A67153]/20" />
              <div>
                <p className="text-3xl font-bold text-[#2D2926]">15+</p>
                <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#A67153]">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component (The Modern Architecture) */}
          <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
            {/* The Main Image Container */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[75vh] w-full overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Modern Villa" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              {/* Overlay Content: Play Button */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                 <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group/play hover:bg-white transition-all duration-500">
                    <Play className="text-white group-hover/play:text-[#A67153] fill-current ml-1" size={32} />
                 </button>
              </div>

              {/* Floating Badge (Refined Glassmorphism) */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/70 backdrop-blur-xl p-6 shadow-2xl border border-white/50">
                 <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#A67153]">Featured Project</p>
                        <p className="text-xl font-medium text-[#2D2926]">The Azure Residence</p>
                    </div>
                    <ChevronRight className="text-[#A67153]" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Menu (Clean Slide-out) */}
      <div className={`fixed inset-0 bg-[#F5F1ED] z-[1100] transition-transform duration-500 flex flex-col p-10 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-bold tracking-widest">TERRAE</span>
            <button onClick={() => setMobileMenu(false)}><X size={32} /></button>
         </div>
         <div className="flex flex-col gap-8 text-4xl font-medium text-[#2D2926]">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(item => (
                <a key={item} href="#" onClick={() => setMobileMenu(false)}>{item}</a>
            ))}
         </div>
      </div>
    </div>
  );
}