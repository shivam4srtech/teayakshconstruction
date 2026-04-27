"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Building2, HardHat, PhoneCall } from 'lucide-react';

export default function LightConstructionHero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900">
      
      {/* 1. FIXED NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 p-2 rounded-sm">
              <Building2 className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-800 uppercase">
              Lumina<span className="text-yellow-500">Build</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-sm font-bold uppercase tracking-widest text-slate-600">
            {['Expertise', 'Case Studies', 'Safety', 'Company'].map((item) => (
              <a key={item} href="#" className="hover:text-yellow-600 transition-colors">{item}</a>
            ))}
          </div>

          <button className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-xs font-bold transition-all shadow-lg shadow-slate-200">
            <PhoneCall size={14} />
            LET'S TALK
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="relative pt-20 lg:pt-30 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[40%] h-[70%] bg-slate-50 -z-10 rounded-bl-[100px]"></div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-black text-[10px] uppercase tracking-[0.4em] bg-yellow-50 px-4 py-2 rounded-full">
              <HardHat size={14} />
              Foundation of Integrity
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-[0.9] tracking-tighter">
              Crafting <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">
                Luminous 
              </span> <br />
              Spaces.
            </h1>
            
            <p className="text-slate-500 text-xl max-w-lg leading-relaxed mb-2">
              We provide high-end residential and commercial developments that prioritize natural light and structural endurance.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button className="group flex items-center gap-3 bg-yellow-500 hover:bg-slate-900 text-white px-10 py-5 rounded-full font-black text-sm transition-all">
                EXPLORE PROJECTS
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 border-l-2 border-slate-100">
                <span className="text-4xl font-black text-slate-800">12</span>
                <span className="text-[10px] leading-tight font-bold text-slate-400 uppercase tracking-widest">
                  National <br /> Design Awards
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM - MODERN LIGHT CARD */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative z-10">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Start a Build</h3>
              <p className="text-slate-400 text-sm mb-10 font-medium tracking-tight">Tell us about your vision. We’ll provide the roadmap.</p>
              
              <form className="space-y-6">
                <div className="group relative">
                  <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 transition-all outline-none" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Work Email" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="text" placeholder="Location" className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <div className="relative">
                  <select className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl text-slate-500 focus:ring-2 focus:ring-yellow-500 outline-none appearance-none cursor-pointer">
                    <option>Scope: Luxury Residential</option>
                    <option>Scope: Commercial Office</option>
                    <option>Scope: Hospitality</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>

                <button className="w-full bg-slate-900 hover:bg-yellow-500 text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] text-xs shadow-xl shadow-slate-200 transition-all hover:-translate-y-1">
                  GENERATE ESTIMATE
                </button>
              </form>
            </div>

            {/* Decorative Floaties */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce duration-[3000ms]">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Architects Online</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}