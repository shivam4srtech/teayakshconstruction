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

export default function MobilePricing() {
  const [activeCity, setActiveCity] = useState("Noida");
  const [activeIndex, setActiveIndex] = useState(1); // Default to 'Classic'
  
  const currentPkg = CITY_DATA[activeCity][activeIndex];

  return (
    <section className="py-16 bg-gray-50 lg:hidden"> {/* Only visible on Mobile */}
      <div className="px-5">
        
        {/* Header & City Dropdown */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand">Estimator</p>
            <h2 className="text-3xl font-medium text-brand-dark">Package Details.</h2>
          </div>

          <div className="relative bg-white border border-gray-200 rounded-xl px-4 py-1 shadow-sm">
            <label className="text-[8px] uppercase font-bold text-brand-dark/40 absolute top-2 left-4">Location</label>
            <select 
              value={activeCity}
              onChange={(e) => setActiveCity(e.target.value)}
              className="w-full bg-transparent pt-5 pb-2 text-sm font-bold uppercase tracking-widest outline-none appearance-none"
            >
              {Object.keys(CITY_DATA).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-4 bottom-4 text-brand" size={10} />
          </div>
        </div>

        {/* Segmented Toggle Buttons */}
        <div className="flex bg-gray-200/50 p-1 rounded-xl mb-8 overflow-x-auto no-scrollbar">
          {CITY_DATA[activeCity].map((pkg, idx) => (
            <button
              key={pkg.name}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-1 py-3 text-[10px] font-bold uppercase tracking-tighter rounded-lg transition-all duration-300 whitespace-nowrap px-4 ${
                activeIndex === idx ? 'text-white' : 'text-brand-dark/50'
              }`}
            >
              <span className="relative z-10">{pkg.name}</span>
              {activeIndex === idx && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-dark rounded-lg shadow-md"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Animated Single Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCity}-${activeIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Background Icon Decoration */}
            <div className="absolute -right-4 -top-4 text-gray-50 opacity-50 scale-[3]">
              {currentPkg.icon}
            </div>

            {currentPkg.popular && (
              <span className="inline-block bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Recommended Choice
              </span>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-dark text-white rounded-2xl flex items-center justify-center shadow-lg">
                {currentPkg.icon}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-brand-dark tracking-tight">{currentPkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-brand font-bold">₹{currentPkg.price}</span>
                  <span className="text-[10px] text-gray-400 uppercase">/sqft</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {currentPkg.desc}
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-[9px] font-bold uppercase tracking-widest text-brand">What's Included:</p>
              {currentPkg.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                    <FaCheck className="text-green-600" size={8} />
                  </div>
                  <span className="text-xs font-medium text-brand-dark/80">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-brand py-5 rounded-2xl text-white text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-brand/20 active:scale-95 transition-transform">
              Get Detailed Quote
            </button>
          </motion.div>
        </AnimatePresence>

        <p className="text-center mt-10 text-[9px] text-gray-400 uppercase tracking-widest leading-loose">
          *Rates applicable for {activeCity} area.<br/>
          Standard T&C Apply.
        </p>
      </div>
    </section>
  );
}