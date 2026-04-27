"use client";
import React, { useState } from 'react';

export default function ConstructionHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500 selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center font-black text-slate-950">A</div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">Apex<span className="text-cyan-500">Core</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Expertise', 'Projects', 'Safety', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-colors font-bold">{item}</a>
            ))}
            <button className="bg-white text-slate-950 px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-cyan-500 transition-all">
              Build With Us
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Now Accepting Q4 Contracts
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ENGINEERING</span> <br />
              AT SCALE.
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-cyan-500 pl-6">
              We don't just move earth; we build the infrastructure that powers tomorrow's cities with surgical precision.
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-black text-white">4.8B</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Assets Managed</p>
              </div>
              <div className="w-[1px] bg-slate-800 h-12 hidden sm:block"></div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Safety Compliance</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-5 relative group">
            {/* Glow Effect behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-slate-900 border border-white/10 p-8 md:p-10 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2 italic">Get a Blueprint</h3>
              <p className="text-slate-500 text-sm mb-8">Enter project details for a priority quote.</p>
              
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-500 tracking-tighter">Full Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-md p-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-700" placeholder="e.g. Marcus Aurelius" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-500 tracking-tighter">Project Budget</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-md p-4 text-white focus:border-cyan-500 outline-none appearance-none cursor-pointer">
                    <option>$1M - $5M</option>
                    <option>$5M - $20M</option>
                    <option>$20M+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-500 tracking-tighter">Email</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-md p-4 text-white focus:border-cyan-500 outline-none transition-all placeholder:text-slate-700" placeholder="corp@project.com" />
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-5 rounded-md uppercase tracking-[0.2em] text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}