"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building2, Menu, X, ArrowUpRight, CheckCircle2, Phone, Zap, ChevronRight  } from 'lucide-react';

export default function BlueCrestHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Safety', href: '#safety' },
    { name: 'Legacy', href: '#legacy' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F7F9FC] overflow-x-hidden">
      
      {/* 1. FIXED NAVIGATION - FIXED STRETCHING ISSUES */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Building2 className="w-9 h-9 text-indigo-900 group-hover:text-orange-500 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-orange-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-bold text-2xl tracking-tighter text-indigo-950 uppercase">
                  Blue<span className="text-orange-500 font-black">Crest</span>
                </span>
                <p className="text-[9px] tracking-[0.3em] font-black text-gray-400 -mt-1 leading-none uppercase">
                  Construction
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest font-black text-indigo-900/70 hover:text-orange-500 transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-indigo-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-indigo-900/10 active:scale-95"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-indigo-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute left-0 right-0 bg-white border-t border-gray-50 shadow-2xl transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-black text-indigo-950 uppercase">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="relative pt-25 pb-24 px-6">
        {/* Unique Background Decor: Geometric Blue Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-900/5 -z-10 rounded-bl-[200px] hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Authority Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 bg-white border border-indigo-100 px-4 py-2 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-900/50">Engineering Excellence Since 1994</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[94px] font-black text-indigo-950 leading-[0.85] tracking-tighter">
              BUILDING <br />
              <span className="text-orange-500 italic">BEYOND</span> <br />
              LIMITS.
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed border-l-4 border-indigo-900 pl-6">
              Precision-driven construction for industrial leaders. We turn complex blueprints into enduring architectural masterpieces.
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-900"><CheckCircle2 size={24} /></div>
                <div>
                  <p className="font-black text-indigo-950 leading-none">100%</p>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Safety Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Zap size={24} /></div>
                <div>
                  <p className="font-black text-indigo-950 leading-none">FastTrack</p>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Project Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(30,58,138,0.1)] border border-white relative z-10">
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-black text-indigo-950">Inquiry Portal</h3>
                <p className="text-gray-400 text-sm font-medium mt-2">Get an expert estimate in 24 hours.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 px-6 py-5 rounded-2xl text-indigo-900 focus:bg-white focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-300" 
                  placeholder="Contact Name" 
                />
                
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-100 px-6 py-5 rounded-2xl text-gray-400 focus:bg-white outline-none appearance-none cursor-pointer">
                    <option>Select Project Type</option>
                    <option>Commercial Tower</option>
                    <option>Industrial Plant</option>
                    <option>Urban Infrastructure</option>
                  </select>
                  <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-orange-500 rotate-90" size={20} />
                </div>

                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-100 px-6 py-5 rounded-2xl text-indigo-900 outline-none mb-4 placeholder:text-gray-300" 
                  placeholder="Work Email Address" 
                />

                <button className="w-full bg-orange-500 hover:bg-indigo-950 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-xl shadow-orange-500/20 active:scale-95">
                  <span className="tracking-[0.2em] text-[10px] uppercase">Submit Blueprint</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -right-6 -bottom-10 bg-indigo-950 text-white p-4 rounded-[2rem] shadow-2xl flex items-center gap-4 border-[10px] border-[#F7F9FC] z-20 hidden md:flex">
               <Phone className="text-orange-400" size={32} />
               <div className="leading-tight">
                  <p className="text-2xl font-black italic">Expert</p>
                  <p className="text-[9px] uppercase tracking-tighter opacity-60 font-black">Direct Site Hotline</p>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Suggestion: Bottom Partners Bar */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] mb-8 text-center">Strategic Infrastructure Partners</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-20 grayscale transition-all hover:opacity-50">
            {['SteelCorp', 'HeavyLift', 'UrbanGrid', 'SafeConstruct'].map(name => (
              <span key={name} className="text-2xl font-black text-indigo-950 italic uppercase tracking-tighter">{name}</span>
            ))}
        </div>
      </div>

    </div>
  );
}