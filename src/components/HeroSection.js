'use client';
import { ArrowUpRight, ChevronRight, Send } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative flex items-center bg-cover bg-center bg-no-repeat py-20 lg:py-32 min-h-screen"
      style={{ backgroundImage: "url('/images/banner-img.png')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/85 -z-10" />

      <div className="w-full md:px-16 px-5 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography */}
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <p className="text-brand font-sans font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
              Designing Spaces. Building Trust.
            </p>
            <h1 className="text-4xl lg:text-[65px] leading-[1.1] text-brand-dark font-medium tracking-tight mb-6">
              Crafting Spaces. <br />
              <span className="italic font-light text-brand/80">Building Dreams.</span>
            </h1>
          </div>

          <p className="text-brand-dark/60 text-lg max-w-md leading-relaxed font-sans mb-8">
            A full-service construction and interior design firm delivering exceptional quality and masterfully crafted realities.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-brand text-white md:px-10 px-3 md:py-5 py-3 flex  items-center gap-3 group transition-all hover:bg-brand-dark cursor-pointer">
              <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em]">Our Projects</span>
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
            <button className="border border-brand text-brand md:px-10 px-3 md:py-5 py-3 font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-all cursor-pointer">
              Our Services
            </button>
          </div>

          {/* Subtle Stat Counter */}
          <div className="flex items-center gap-12 pt-12">
            <div>
              <p className="text-3xl font-bold text-brand-dark">250+</p>
              <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand">Projects Done</p>
            </div>
            <div className="w-[1px] h-10 bg-brand/20" />
            <div>
              <p className="text-3xl font-bold text-brand-dark">15+</p>
              <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand">Awards Won</p>
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="animate-in fade-in slide-in-from-right duration-1000">
          <div className="bg-white p-4 lg:p-10 shadow-2xl border border-brand/10 relative overflow-hidden group">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand" />
            
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-brand-dark mb-2">Request a Consultation</h3>
              <p className="text-sm text-brand-dark/50">Fill out the form below and our design experts will contact you within 24 hours.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/70">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 p-3 outline-none focus:border-brand transition-colors text-sm" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/70">Phone</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-100 p-3 outline-none focus:border-brand transition-colors text-sm" placeholder="phone no" />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/70">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-100 p-3 outline-none focus:border-brand transition-colors text-sm" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/70">Project Type</label>
                    <select className="w-full bg-gray-50 border border-gray-100 p-3 outline-none focus:border-brand transition-colors text-sm appearance-none cursor-pointer">
                      <option>Interior Design</option>
                      <option>Commercial Construction</option>
                      <option>Residential Renovation</option>
                      <option>Architecture Planning</option>
                    </select>
                  </div>
              </div>

              <button className="w-full bg-brand-dark text-white py-4 flex items-center justify-center gap-3 group/btn hover:bg-brand transition-all duration-300">
                <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em]">Submit Enquiry</span>
                <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}