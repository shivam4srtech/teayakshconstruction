'use client';
import { ArrowUpRight, ChevronRight, Send } from 'lucide-react';
import CustomSelect from '@/components/CustomSelect'
import HeroFrom from './HeroFrom';

export default function HeroSection() {
  return (
    <section 
      className="relative flex items-center bg-cover bg-center bg-no-repeat min-h-[100vh] lg:py-0 py-20"
      style={{ backgroundImage: "url('/images/banner-bg.webp')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/85 -z-10" />

      <div className="w-full md:px-16 px-5 mx-auto flex md:flex-row flex-col md:place-content-between items-center md:items-start gap-6 md:gap-20 relative z-10">
        
        {/* Left Column: Typography */}
        <div className="left">
            <h1 className="text-3xl md:text-4xl lg:text-[55px] leading-[1.1]  text-brand font-bold tracking-tight lg:mt-20 md:text-left text-center  text-shadow-emerald-100 leading-[1.2]">
              Designing Dreams  <br /> Building Reality 
    
            </h1>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className=" p-4 lg:p-6 shadow-2xl border border-brand/10 relative  group max-w-[350px] lg:mt-20 bg-[#efebe2]">
          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand" />
          
          <div className="mb-4">
            <h3 className="lg:text-[1.2rem] text-[1.1rem] font-bold text-brand-dark mb-0">Request a Free Consultation</h3>
            {/* <p className="text-sm text-brand-dark/50">Fill out the form below and our design experts will contact you within 24 hours.</p> */}
          </div>

          <HeroFrom/>
        </div>
      </div>
    </section>
    // production
  );
}