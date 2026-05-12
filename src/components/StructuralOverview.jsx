'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Ruler, Zap, Droplets, Info, Plus, Minus } from 'lucide-react';
import CustomSelect from './CustomSelect';

const CITY_SPECIFIC_DATA = {
  "Chennai": {
    basicPrice: "2,150",
    premiumPrice: "2,750",
    specs: [
      { title: "Structure", basic: "M20 Concrete, Red Bricks (Local)", premium: "M25 Concrete, Wire-cut Bricks" },
      { title: "Flooring", basic: "Vitrified 2x2 (Standard)", premium: "Italian Marble Finish" },
      { title: "Plumbing", basic: "PVC Piping, Hindware", premium: "CPVC Piping, Jaguar" }
    ]
  },
  "Bangalore": {
    basicPrice: "2,350",
    premiumPrice: "3,100",
    specs: [
      { title: "Structure", basic: "M20 Concrete, Solid Blocks", premium: "M25 Concrete, Porotherm Bricks" },
      { title: "Flooring", basic: "Vitrified 2x2 (Premium)", premium: "Full Body GVT 4x2" },
      { title: "Plumbing", basic: "Ashirvad PVC, Parryware", premium: "Supreme CPVC, Kohler" }
    ]
  },
  "Hyderabad": {
    basicPrice: "2,200",
    premiumPrice: "2,950",
    specs: [
      { title: "Structure", basic: "M20 Concrete, Table Molded Bricks", premium: "M25 Concrete, Fly Ash Bricks" },
      { title: "Flooring", basic: "Standard Vitrified", premium: "Double Charged Vitrified" },
      { title: "Plumbing", basic: "Prince Piping, Standard", premium: "Astral Piping, Grohe" }
    ]
  },
  "Lucknow": {
    basicPrice: "1,950",
    premiumPrice: "2,600",
    specs: [
      { title: "Structure", basic: "M20 Concrete, First Class Bricks", premium: "M25 Concrete, Machine Made Bricks" },
      { title: "Flooring", basic: "Ceramic / Vitrified Mix", premium: "Premium Vitrified 4x2" },
      { title: "Plumbing", basic: "Standard PVC", premium: "Branded CPVC & Fittings" }
    ]
  }
};

export default function CityDynamicComparison() {
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [leftPkg, setLeftPkg] = useState('basic');
  const [rightPkg, setRightPkg] = useState('premium');

  const currentCityData = CITY_SPECIFIC_DATA[selectedCity];

  return (
    <section className="py-24 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header with City State Control */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2D2926] tracking-tighter">
              Structural <span className="italic font-light text-[#A67153]">Comparison</span>
            </h2>
          </div>
          <div className="w-full md:w-72 bg-white p-3 rounded-[2rem] shadow-xl border border-white">
            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4 mb-1 block">Pricing Region</label>
            {/* Added onChange to your CustomSelect logic */}
            <CustomSelect 
              options={Object.keys(CITY_SPECIFIC_DATA)} 
              placeholder="Chennai" 
              name="city"
              onChange={(val) => setSelectedCity(val)} 
            />
          </div>
        </div>

        {/* Dual Comparison Container */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-[3.5rem] overflow-hidden border-2 border-gray-200 shadow-2xl">
          <ComparisonColumn 
            cityData={currentCityData} 
            currentPkg={leftPkg} 
            setPkg={setLeftPkg} 
            side="A" 
          />
          <ComparisonColumn 
            cityData={currentCityData} 
            currentPkg={rightPkg} 
            setPkg={setRightPkg} 
            side="B" 
          />
        </div>

        {/* Dynamic Disclaimer Note */}
        <div className="mt-12 p-10 bg-white/50 rounded-[2.5rem] border border-white flex items-start gap-6">
            <Info className="text-[#A67153] shrink-0" />
            <p className="text-xs text-gray-500 leading-relaxed">
                Prices shown for <strong>{selectedCity}</strong> are based on current regional material market indices (May 2026). 
                Technical specs for {selectedCity} are optimized for local soil and weather conditions. 
                Assumed: Balcony/Utility (40 sqft), Parking (130 sqft).
            </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({ cityData, currentPkg, setPkg, side }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [isPkgOpen, setIsPkgOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Price determined by current city and selected package
  const displayPrice = currentPkg === 'basic' ? cityData.basicPrice : cityData.premiumPrice;

  return (
    <div className="bg-white flex flex-col min-h-[700px]">
      <div className={`p-10 transition-colors duration-700 ${currentPkg === 'premium' ? 'bg-[#2D2926] text-white' : 'bg-white text-[#2D2926]'}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Side {side}</span>
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsPkgOpen(!isPkgOpen)} className={`px-5 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${currentPkg === 'premium' ? 'border-white/20 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
              {currentPkg} Package <ChevronDown size={14} className="ml-2 inline" />
            </button>
            {isPkgOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-2xl rounded-xl overflow-hidden z-50">
                {['basic', 'premium'].map(p => (
                  <button key={p} onClick={() => { setPkg(p); setIsPkgOpen(false); }} className="w-full text-left px-5 py-3 text-[10px] font-bold uppercase text-black hover:bg-gray-100">{p} Package</button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-5xl font-black italic tracking-tighter">₹{displayPrice} <span className="text-sm font-light not-italic opacity-40">/sq.ft</span></div>
      </div>

      <div className="p-6 space-y-4 flex-1">
        {cityData.specs.map((spec, i) => (
          <div key={i} className={`rounded-[2rem] border transition-all ${openIdx === i ? 'bg-[#F8F5F2] border-[#A67153]/20' : 'border-transparent'}`}>
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-6">
              <span className={`text-[10px] font-black uppercase tracking-widest ${openIdx === i ? 'text-[#2D2926]' : 'text-gray-400'}`}>{spec.title}</span>
              {openIdx === i ? <Minus size={14} /> : <Plus size={14} />}
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm font-medium text-gray-600 pl-10 leading-relaxed">
                    {currentPkg === 'basic' ? spec.basic : spec.premium}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}