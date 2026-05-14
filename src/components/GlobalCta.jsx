'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import CustomSelect from './CustomSelect'; 
import Image from 'next/image';

export default function GlobalCta() {
  return (
    <section className="py-10 pt-0 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="relative w-full bg-white md:rounded-[3.5rem] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px] border-2 border-white">
          
          {/* LEFT COLUMN: Image & Brand CTA */}
          <div className="w-full md:w-[45%] relative group overflow-hidden bg-[#2D2926] md:p-12 p-6 text-white flex flex-col justify-between">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                width={100}
                height={100}
                src="/images/enscape_1.jpg" 
                alt="Architecture" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926] via-[#2D2926]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-[#A67153]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">Consultation</span>
              </div>
              <h2 className="md:text-4xl text-2xl font-medium tracking-tighter leading-[1.2] md:mb-6 mb-4">
                Build your
                <span className="font-light text-[#A67153]"> Legacy </span> <br /> with Trayaksh
              </h2>
              <p className="text-white/50 text-sm leading-relaxed md:mb-10 mb-4 max-w-xs">
                Turn your architectural vision into a structural masterpiece with our expert engineering team.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck size={18} />, txt: "470+ Quality Checks" },
                  { icon: <Building2 size={18} />, txt: "Transparent Pricing" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/80">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#A67153]">
                        {item.icon}
                    </div>
                    {item.txt}
                  </div>
                ))}
              </div>
            </div>

            
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="w-full md:w-[55%] md:p-12 p-4  bg-white flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="md:text-3xl text-xl font-bold text-[#2D2926] tracking-tight mb-2">Consult with an Expert</h3>
              <p className="text-gray-400 text-sm">Our structural consultants typically respond within 2 business hours.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="eg. Prince Mishra"
                  className="w-full p-4 rounded-xl border border-gray-100 bg-[#F8F5F2] focus:border-[#A67153] focus:bg-white outline-none transition-all text-sm font-medium"
                />
              </div>

              {/* City Custom Select */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Select City</label>
                <CustomSelect 
                  options={["Bengaluru", "Hyderabad", "Lucknow", "Chennai"]} 
                  placeholder="Select City" 
                  className="w-full bg-[#F8F5F2] rounded-xl p-4 flex justify-between items-center cursor-pointer border border-transparent hover:border-gray-200"
                />
              </div>

            

              {/* Phone & Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full p-4 rounded-xl border border-gray-100 bg-[#F8F5F2] focus:border-[#A67153] focus:bg-white outline-none transition-all text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="prince@example.com"
                  className="w-full p-4 rounded-xl border border-gray-100 bg-[#F8F5F2] focus:border-[#A67153] focus:bg-white outline-none transition-all text-sm font-medium"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button className="w-full group bg-[#2D2926] text-white py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#A67153] transition-all shadow-2xl shadow-black/10">
                   Request Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-center text-[9px] text-gray-400 mt-4 uppercase tracking-widest">
                    No spam. Your data is encrypted and secure.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}