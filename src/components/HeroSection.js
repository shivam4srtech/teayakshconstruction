'use client';
import { ArrowUpRight, ChevronRight, Send } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative flex items-center bg-cover bg-center bg-no-repeat min-h-[100vh] lg:py-0 py-20"
      style={{ backgroundImage: "url('/images/banner-img-2.png')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/85 -z-10" />

      <div className="w-full md:px-16 px-5 mx-auto flex md:flex-row flex-col lg:gap-12 gap-0 items-center place-content-between  relative z-10">
        
        {/* Left Column: Typography */}
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            {/* <p className="text-brand font-sans font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
              Designing Spaces. Building Trust.
            </p> */}
            <h1 className="text-4xl md:text-[70px] leading-[1.1] md:text-white text-brand font-bold tracking-tight mb-6 text-shadow-emerald-100">
              Crafting Spaces. <br />
              <span className=" ">Building Dreams.</span>
            </h1>
          </div>

          {/* <p className="text-brand-dark/60 text-lg max-w-md leading-relaxed font-sans mb-4">
            A full-service construction and interior design firm delivering exceptional quality and masterfully crafted realities.
          </p> */}

          {/* <div className="flex gap-4 pt-4">
            <button className="bg-brand text-white md:px-10 px-3 md:py-5 py-3 flex  items-center gap-3 group transition-all hover:bg-brand-dark cursor-pointer">
              <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em]">Our Projects</span>
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
            <button className="border border-brand text-brand md:px-10 px-3 md:py-5 py-3 font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-all cursor-pointer">
              Our Services
            </button>
          </div> */}

          {/* Subtle Stat Counter */}
          {/* <div className="flex items-center gap-12 pt-6">
            <div>
              <p className="text-3xl font-bold text-brand-dark">250+</p>
              <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand">Projects Done</p>
            </div>
            <div className="w-[1px] h-10 bg-brand/20" />
            <div>
              <p className="text-3xl font-bold text-brand-dark">15+</p>
              <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-brand">Awards Won</p>
            </div>
          </div> */}
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="bg-white p-4 lg:p-6 shadow-2xl border border-brand/10 relative overflow-hidden group max-w-[450px] lg:mt-20">
          {/* Decorative Top Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-brand" />
          
          <div className="mb-4">
            <h3 className="lg:text-2xl text-[1.1rem] font-semibold text-brand-dark mb-0">Request a Free Consultation</h3>
            {/* <p className="text-sm text-brand-dark/50">Fill out the form below and our design experts will contact you within 24 hours.</p> */}
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1.5">
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-brand transition-colors text-sm" placeholder="Name" />
              </div>
              <div className="space-y-1.5">
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-brand transition-colors text-sm" placeholder="Phone No." />
              </div>
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <div className="space-y-1.5">
                  <select className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-brand transition-colors text-sm appearance-none cursor-pointer">
                    <option>---Select City---</option>
                    <option value={"Hyderabad"}>Hyderabad</option>
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Mumbai"}>Mumbai</option>
                    <option value={"Kolkata"}>Kolkata</option>
                    <option value={"Chennai"}>Chennai</option>
                    <option value={"Noeda"}>Noeda</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                    <select className="w-full bg-gray-50 border border-gray-100 p-3 outline-none focus:border-brand transition-colors text-sm appearance-none cursor-pointer">
                      <option>---Project Type---</option>
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
             <p className="text-[10px] text-gray-400 leading-relaxed  border-t border-gray-100 pt-3">
                By submitting this form, you consent to sharing your details with Teayaksh Construction. 
                We respect your privacy and never share your information with third parties.
              </p>
          </form>
        </div>
      </div>
    </section>
    // production
  );
}