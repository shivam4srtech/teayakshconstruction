"use client";
import React, { useState, useEffect } from 'react';
import { HardHat, ArrowUpRight, Globe, Construction, Phone, ChevronRight, Menu, X, Hammer } from 'lucide-react';

export default function SteelSunsetHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#FFF1E7] font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. FIXED TOP NAVIGATION 
          Using fixed + left/right-0 to ensure it never stretches or moves.
      */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-slate-900/95 backdrop-blur-md shadow-2xl' 
          : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer z-[1100]">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-blue-500/20">
              <Construction className="text-white" size={20} />
            </div>
            <div className="leading-none">
              <span className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
                STEEL<span className="text-blue-500">CORE</span>
              </span>
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-500">Infrastructure</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {['Expertise', 'Projects', 'Sustainability', 'Insights'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
                  isScrolled ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
              <Phone size={14} />
              CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`lg:hidden z-[1100] ${isScrolled || mobileMenu ? 'text-white' : 'text-slate-900'}`} onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-slate-900 z-[1050] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}>
          {['Expertise', 'Projects', 'Sustainability', 'Insights'].map((item) => (
            <a key={item} onClick={() => setMobileMenu(false)} href="#" className="text-3xl font-black text-white uppercase tracking-widest hover:text-blue-500">{item}</a>
          ))}
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="relative pt-40 lg:pt-30 pb-24 px-6 lg:px-12">
        {/* Background Steel Accent - Contained to viewport */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-slate-900 -z-10 rounded-bl-[120px] hidden lg:block overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT (Sunset Side) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-blue-400 px-4 py-2 rounded-lg mb-8 shadow-xl">
              <HardHat size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Engineering Masterclass</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
              Forging <br />
              <span className="text-blue-600 italic">Structural</span> <br />
              Dominance.
            </h1>

            <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-medium">
              Industrial-grade solutions for the boldest blueprints. 
              We blend raw steel strength with architectural elegance.
            </p>

            <div className="flex items-center gap-8 md:gap-16">
              <div className="group">
                <h4 className="text-5xl font-black text-slate-900 italic transition-transform group-hover:scale-110 duration-300">22+</h4>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">Years of Legacy</p>
              </div>
              <div className="w-[1px] h-12 bg-slate-200"></div>
              <div className="group">
                <h4 className="text-5xl font-black text-slate-900 italic transition-transform group-hover:scale-110 duration-300">4.2M</h4>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">SQ FT Completed</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (Steel Side - Form Card) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-slate-100 relative z-10">
              <div className="mb-10">
                <h3 className="text-3xl font-black text-slate-900">Project Brief</h3>
                <p className="text-slate-400 text-sm font-semibold mt-1">Begin your structural evolution.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Contact</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-xl text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-300" placeholder="Full Name" />
                </div>
                
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-xl text-slate-900/60 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none appearance-none cursor-pointer">
                    <option>Steel Skyscrapers</option>
                    <option>Industrial Complexes</option>
                    <option>Bridge Engineering</option>
                  </select>
                  <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-500 rotate-90" size={20} />
                </div>

                <input type="email" className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-xl text-slate-900 outline-none mb-4 placeholder:text-slate-300" placeholder="Email Address" />

                <button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-6 rounded-xl flex items-center justify-center gap-3 transition-all group shadow-xl active:scale-95">
                  <span className="tracking-[0.2em] text-[10px] uppercase">REQUEST QUOTE</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* FLOATING BADGE (Fixed Animation) */}
            <div className="absolute -right-4 -bottom-10 bg-blue-600 text-white p-7 rounded-[2.5rem] shadow-2xl flex items-center gap-4 border-[10px] border-[#FFF1E7] animate-bounce z-20">
               <Globe className="animate-[spin_10s_linear_infinite]" size={32} />
               <div className="leading-tight pr-2">
                  <p className="text-2xl font-black italic">Live</p>
                  <p className="text-[10px] uppercase tracking-tighter opacity-80 font-bold">Metrics Sync</p>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Suggestion: Side Progress Bar or Bottom Logo Bar */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] mb-6">Global Project Locations</p>
        <div className="flex flex-wrap gap-8 opacity-30 grayscale contrast-125">
            <span className="text-xl font-black text-slate-900 uppercase">New York</span>
            <span className="text-xl font-black text-slate-900 uppercase">London</span>
            <span className="text-xl font-black text-slate-900 uppercase">Dubai</span>
            <span className="text-xl font-black text-slate-900 uppercase">Singapore</span>
        </div>
      </div>

    </div>
  );
}