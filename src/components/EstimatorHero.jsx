'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, ShieldCheck, MapPin, Building2, Layers } from 'lucide-react';
import CustomSelect  from '@/components/CustomSelect'

export default function EstimatorHero() {
  const [hasParking, setHasParking] = useState(true);

  // Common input styling to ensure 100% consistency
  const inputStyles = "w-full bg-[#F8F5F2] border-2 border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-[#A67153]/20 transition-all outline-none text-[#2D2926] font-medium placeholder:text-gray-300";

  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-[#F8F5F2] overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A67153]/5 -skew-x-12 translate-x-32 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <Zap size={14} className="text-[#A67153] fill-[#A67153]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D2926]">Instant Quotes v3.0</span>
            </div>

            <h1 className="text-[2.8rem] md:text-[4.5rem] font-medium leading-[1.1] mb-6 text-[#2D2926] tracking-tighter">
              Planning your <br />
              <span className="text-[#A67153] italic font-light">Dream Home?</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 max-w-md leading-relaxed">
              Get a scientifically accurate construction estimate in seconds. No hidden costs, just honest numbers.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Calculator size={18} />, text: "Real-time Material Market Rates" },
                { icon: <ShieldCheck size={18} />, text: "Detailed Structural Breakdown" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[#2D2926] font-semibold uppercase text-xs tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#A67153]">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Unified Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(45,41,38,0.12)] border border-white">
              <h3 className="text-2xl font-bold text-[#2D2926] mb-8 flex items-center gap-3">
                Calculate Cost <span className="w-8 h-[2px] bg-[#A67153]/20" />
              </h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Inputs Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input type="text" placeholder="e.g. John Doe" className={inputStyles} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Mobile Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className={inputStyles} />
                  </div>
                </div>

                {/* Inputs Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">City</label>
                    <div className="relative">
                       {/* Note: Ensure your CustomSelect accepts a className or has internal styles matching inputStyles */}
                       <CustomSelect
                        name="project_type"
                        placeholder="Select City"
                        options={["Bangalore", "Hyderabad", "Lucknow"]}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Built-up Area (Sqft)*</label>
                    <div className="relative">
                      <input type="number" placeholder="e.g. 2500" className={inputStyles} />
                      <Building2 size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                  </div>
                </div>

                {/* Inputs Row 3 */}
                <div className="grid md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">No. of Floors</label>
                    <div className="relative">
                      <input type="number" placeholder="e.g. 3" className={inputStyles} />
                      <Layers size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Stilt Parking?</label>
                    <div className="flex bg-[#F8F5F2] rounded-2xl p-1.5 h-[58px]">
                       <button 
                        type="button" 
                        onClick={() => setHasParking(true)}
                        className={`flex-1 rounded-xl text-sm font-bold transition-all ${hasParking ? 'bg-white shadow-md text-[#A67153]' : 'text-gray-400 hover:text-gray-600'}`}
                       >
                         Yes
                       </button>
                       <button 
                        type="button" 
                        onClick={() => setHasParking(false)}
                        className={`flex-1 rounded-xl text-sm font-bold transition-all ${!hasParking ? 'bg-white shadow-md text-[#A67153]' : 'text-gray-400 hover:text-gray-600'}`}
                       >
                         No
                       </button>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#2D2926] text-white py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.3em] mt-4 hover:bg-[#A67153] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group">
                  Get My Estimate <Zap size={16} className="group-hover:fill-current transition-all" />
                </button>

                <p className="text-[9px] text-center text-gray-400 font-medium">
                  *Results are based on current market survey of materials in 2026.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}