'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaCrown, FaBolt, FaLeaf, FaGem, FaChevronDown } from 'react-icons/fa6';

const CITY_DATA = {
  "Noida": [
    { name: "Basic", price: "1910", icon: <FaBolt />, desc: "Essential quality for Noida urban setups.", features: ["Standard Brands", "Quality Flooring", "Structural Warranty"] },
    { name: "Classic", price: "2210", popular: true, icon: <FaCrown />, desc: "Our best-seller featuring Jindal Steel.", features: ["Upgraded Brands", "Modular Kitchen", "10-Year Warranty"] },
    { name: "Premium", price: "2490", icon: <FaLeaf />, desc: "Modern living with solar setups.", features: ["Smart Home Ready", "Solar Provision", "Italian Marble"] },
    { name: "Royale", price: "2790", icon: <FaGem />, desc: "High-end finishes and EV charging.", features: ["EV Charging", "Copper Gas Line", "Designer Paints"] }
  ],
  "Delhi": [
    { name: "Basic", price: "2100", icon: <FaBolt />, desc: "Optimized for Delhi space constraints.", features: ["Standard Brands", "Quality Flooring", "Structural Warranty"] },
    { name: "Classic", price: "2450", popular: true, icon: <FaCrown />, desc: "Premium materials for capital homes.", features: ["Upgraded Brands", "Modular Kitchen", "10-Year Warranty"] },
    { name: "Premium", price: "2700", icon: <FaLeaf />, desc: "Luxury living with green energy.", features: ["Smart Home Ready", "Solar Provision", "Italian Marble"] },
    { name: "Royale", price: "3100", icon: <FaGem />, desc: "Elite finishes for posh localities.", features: ["EV Charging", "Copper Gas Line", "Designer Paints"] }
  ],
  "Gurgaon": [
    { name: "Basic", price: "2050", icon: <FaBolt />, desc: "Quality construction for Millennium City.", features: ["Standard Brands", "Quality Flooring", "Structural Warranty"] },
    { name: "Classic", price: "2380", popular: true, icon: <FaCrown />, desc: "Modern brands for high-rise living.", features: ["Upgraded Brands", "Modular Kitchen", "10-Year Warranty"] },
    { name: "Premium", price: "2650", icon: <FaLeaf />, desc: "Advanced provisions for luxury floors.", features: ["Smart Home Ready", "Solar Provision", "Italian Marble"] },
    { name: "Royale", price: "2950", icon: <FaGem />, desc: "Ultra-luxury specs with smart tech.", features: ["EV Charging", "Copper Gas Line", "Designer Paints"] }
  ]
};

export default function PricingSection() {
  const [activeCity, setActiveCity] = useState("Noida");
  const currentPackages = CITY_DATA[activeCity];

  return (
    <section className="hidden lg:block py-10 bg-[#FBFBFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-16">
        
        {/* Architecture Header & Selector */}
        <div className="flex justify-between items-center mb-10">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-brand" />
              <p className="text-[11px] uppercase tracking-[0.5em] font-bold text-brand">Construction Costs</p>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-dark leading-[1.1]">
              Refined <span className="font-light text-brand">Pricing.</span>
            </h2>
          </div>

          {/* Luxury Dropdown Wrapper */}
          <div className="relative min-w-[240px]">
            <p className="text-[9px] uppercase tracking-widest font-black text-brand-dark/30 mb-3 ml-1">Choose Location</p>
            <div className="relative group">
              <select 
                value={activeCity}
                onChange={(e) => setActiveCity(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-100 rounded py-5 px-6 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer shadow-sm group-hover:shadow-md transition-all duration-300"
              >
                {Object.keys(CITY_DATA).map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <FaChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-brand group-hover:translate-y-[-20%] transition-transform" size={14} />
            </div>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {currentPackages.map((pkg, idx) => (
              <motion.div
                key={`${activeCity}-${pkg.name}`}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ y: -12 }}
                className={`relative p-5 rounded-[1rem] flex flex-col h-full transition-all duration-500 border ${
                  pkg.popular 
                  ? 'bg-white border-brand shadow-[0_20px_50px_rgba(196,164,124,0.15)] z-10' 
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-5 inset-x-0 flex justify-center">
                    <span className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded-full shadow-lg">
                      Signature Choice
                    </span>
                  </div>
                )}

                {/* Header Section */}
                <div className="mb-4 text-center">
                  <div className={`w-14 h-14 mx-auto flex items-center justify-center rounded mb-3 transition-transform duration-500 group-hover:rotate-12 ${
                    pkg.popular ? 'bg-brand text-white shadow-brand/30 shadow-lg' : 'bg-gray-50 text-brand-dark/30 border border-gray-100'
                  }`}>
                    {pkg.icon}
                  </div>
                  <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${pkg.popular ? 'text-brand' : 'text-brand-dark/40'}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-medium text-brand-dark tracking-tighter">₹{pkg.price}</span>
                    <span className="text-[11px] uppercase font-black text-brand-dark/20 italic">/sqft</span>
                  </div>
                </div>

                {/* Feature Box */}
                <div className="flex-grow space-y-6 mb-5">
                  <p className="text-[13px] text-brand-dark/60 leading-relaxed text-center px-2 mb-3">
                    {pkg.desc}
                  </p>
                  <div className="h-[1px] w-12 bg-brand/20 mx-auto" />
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-brand-dark/80 mb-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/5 flex items-center justify-center">
                          <FaCheck size={9} className="text-brand" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                    pkg.popular 
                    ? 'bg-brand-dark text-white shadow-xl hover:bg-brand' 
                    : 'bg-gray-50 text-brand-dark border border-gray-200 hover:border-brand hover:text-brand'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Disclaimer */}
        <div className="mt-10 flex flex-col items-center gap-4">
           <motion.div 
            key={activeCity}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-100 bg-white"
           >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">
                Rates Verified for {activeCity} — 2024 Index
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}