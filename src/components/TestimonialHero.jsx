'use client';
import { motion } from 'framer-motion';
import { MessageSquare, Quote, Star } from 'lucide-react';

export default function TestimonialHero() {
  return (
    <section className="pt-28  bg-[#F8F5F2] text-[#2D2926] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Main Title */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#A67153]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">Clients Voices</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tighter leading-[1.3]">
             From Blueprint to Reality <br />
              <span className="font-light text-[#A67153]">Client Stories.</span>
            </h1>
          </div>

          {/* Right Sub-narrative / Stats */}
          <div className="lg:col-span-5 space-y-6 border-l border-gray-100 pl-0 lg:pl-8">
            <div className="flex gap-1 text-[#A67153]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#A67153" />)}
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Hear directly from esteemed homeowners and visionaries who entrusted Trayaksh to blueprint, structure, and curate their ultimate sanctuaries.
            </p>
            <div className="flex gap-10 pt-2">
              <div>
                <p className="text-3xl font-bold tracking-tight">100%</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">On-Time Delivery</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight">4.9/5</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}