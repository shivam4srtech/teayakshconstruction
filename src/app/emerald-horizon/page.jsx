"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowUpRight, Globe, Layers, Phone, ChevronRight, Menu, X } from 'lucide-react';

export default function UltimateFixedHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a threshold to trigger the background change
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F6] font-sans selection:bg-stone-200">
      
      {/* 1. FIXED NAVIGATION 
          Added left-0 and right-0 to prevent width "stretching" 
      */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/90 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center shadow-lg">
              <Layers className="text-amber-200" size={20} />
            </div>
            <span className="text-2xl font-black text-stone-900 tracking-tighter uppercase">
              AXON<span className="font-light text-stone-500">LABS</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {['Expertise', 'Projects', 'Process', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-stone-900 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-stone-200">
              <Phone size={14} />
              CONSULT NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-stone-900" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}>
          {['Expertise', 'Projects', 'Process', 'Contact'].map((item) => (
            <a key={item} onClick={() => setMobileMenu(false)} href="#" className="text-4xl font-black text-stone-900 uppercase">{item}</a>
          ))}
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="relative pt-40 lg:pt-30 pb-24 px-6">
        {/* Background Gradients contained to prevent overflow */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-amber-100/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-stone-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-stone-900 text-amber-100 px-4 py-2 rounded-full mb-8">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tier 1 Construction Firm</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 leading-[0.85] tracking-tighter mb-10">
              Solid <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-stone-400">Foundation.</span> <br />
              Iconic Build.
            </h1>

            <p className="text-stone-500 text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              Building the next generation of industrial marvels with 
              unwavering precision and a legacy of structural brilliance.
            </p>

            <div className="flex items-center gap-12">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FAF9F6] bg-stone-200 overflow-hidden shadow-sm flex items-center justify-center text-[10px] font-bold">ARC</div>
                ))}
              </div>
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest leading-tight">
                Trusted by 50+ <br /> Fortune 500 Partners
              </p>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-stone-100">
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-black text-stone-900 tracking-tight italic">Get a Blueprint</h3>
                <p className="text-stone-400 text-sm font-medium mt-2 italic">Estimates ready in under 48 hours.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  className="w-full bg-stone-50 border border-stone-100 px-6 py-5 rounded-2xl text-stone-900 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all placeholder:text-stone-400" 
                  placeholder="Official Name" 
                />
                
                <div className="relative">
                  <select className="w-full bg-stone-50 border border-stone-100 px-6 py-5 rounded-2xl text-stone-500 focus:ring-2 focus:ring-amber-500/20 outline-none appearance-none cursor-pointer">
                    <option>Infrastructure Development</option>
                    <option>High-Rise Commercial</option>
                    <option>Industrial Warehouse</option>
                  </select>
                  <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-stone-300 rotate-90" size={20} />
                </div>

                <input 
                  type="email" 
                  className="w-full bg-stone-50 border border-stone-100 px-6 py-5 rounded-2xl text-stone-900 outline-none mb-4 placeholder:text-stone-400" 
                  placeholder="Corporate Email" 
                />

                <button className="w-full bg-stone-900 hover:bg-amber-600 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-xl shadow-stone-200 active:scale-[0.98]">
                  <span className="tracking-[0.2em] text-[10px] uppercase">Initialize Site Audit</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -right-6 -bottom-10 bg-amber-500 text-stone-900 p-6 rounded-full shadow-2xl flex items-center gap-4 border-8 border-[#FAF9F6] animate-bounce">
               <Globe className="animate-[spin_10s_linear_infinite]" size={32} />
               <div className="leading-tight pr-4">
                  <p className="text-2xl font-black italic">Live</p>
                  <p className="text-[9px] uppercase tracking-widest font-bold opacity-70">On-Site GPS</p>
               </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}