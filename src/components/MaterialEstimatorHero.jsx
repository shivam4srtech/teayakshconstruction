'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ruler, User, Phone, MapPin, ChevronDown, ArrowRight,
  Package, Layers, ShieldCheck, HardHat
} from 'lucide-react';

// Custom City Dropdown options list matching our premium operating zones
const CITIES_LIST = [
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Lucknow",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Visakhapatnam",
  "Surat",
  "Patna",
  "Vadodara",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Ranchi",
  "Coimbatore",
  "Kanpur",
  "Madurai",
  "Guwahati",
  "Others"
];

export default function MaterialEstimatorHero() {
  // 1. Structural Dimensions Input States
  const [slabArea, setSlabArea] = useState(1500);         // Default 1500 Sqft Slab
  const [builtupArea, setBuiltupArea] = useState(2500);   // Default 2500 Sqft Total Built-up Area

  // 2. High-Conversion Lead Verification States
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedCity, setSelectedCity] = useState('Select your city');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 3. Calculated Material Quantities States
  const [materialEstimates, setMaterialEstimates] = useState({
    cement: 0,
    steel: 0,
    sand: 0,
    aggregate: 0,
    bricks: 0
  });

  // Automatically recalculate estimates using thumb-rules for residential builds
  useEffect(() => {
    if (builtupArea > 0) {
      // Standard empirical metrics per sqft of built-up area
      setMaterialEstimates({
        cement: Math.round(builtupArea * 0.4),      // 0.4 Bags per Sqft
        steel: Math.round(builtupArea * 4.2),       // 4.2 Kg per Sqft
        sand: Math.round(builtupArea * 1.2),        // 1.2 Cft per Sqft
        aggregate: Math.round(builtupArea * 1.35),  // 1.35 Cft per Sqft
        bricks: Math.round(builtupArea * 8.5)       // 8.5 Bricks per Sqft
      });
    } else {
      setMaterialEstimates({ cement: 0, steel: 0, sand: 0, aggregate: 0, bricks: 0 });
    }
  }, [builtupArea, slabArea]);

  // Handle outside click to securely close custom dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedCity === 'Select Operating Zone') {
      alert("Bhai, please select your project city/zone first.");
      return;
    }
    alert(`Lead secured for ${clientName} (${selectedCity}). Calculated Material Stack: ${materialEstimates.cement} Cement Bags, ${materialEstimates.steel}kg Steel.`);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 bg-[#F8F5F2] text-[#2D2926] overflow-hidden flex items-center">
      
      {/* Decorative Blueprint Background Grid Lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#2D2926_1px,transparent_1px),linear-gradient(to_bottom,#2D2926_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT SIDE: MATERIAL RECONCILIATION LIVE VIEW (7 COLS) ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/60 px-4 py-2 rounded-full shadow-sm">
                <Ruler size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Bill of Quantities (BOQ)</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2D2926] leading-[1.2]">
                Real-Time <span className="font-light text-[#A67153]">Building Material</span> Quantity Estimator
              </h1>
              <p className="text-gray-500 text-sm  font-medium leading-relaxed max-w-xl">
                Estimate raw material payload variants instantly. Adjust your slab metrics and total built-up volumes below to map the physical inventory parameters required for your custom home build.
              </p>
            </div>

            {/* DYNAMIC REAL-TIME MATERIAL QUANTITIES MATRIX PANEL */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Structural Steel</span>
                <p className="text-2xl font-black text-[#2D2926]">{materialEstimates.steel.toLocaleString('en-IN')} <span className="text-xs font-medium text-gray-400">Kg</span></p>
                <span className="text-[10px] text-gray-400 font-medium block">TMT Fe 550D Flexi</span>
              </div>


              <div className="col-span-2 sm:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/[0.005] space-y-1 flex flex-col justify-center">
                <span className="text-[9px] uppercase font-black tracking-wider text-gray-400 block">Red Clay Bricks / Autoclaved Blocks</span>
                <p className="text-2xl font-black text-[#2D2926]">{materialEstimates.bricks.toLocaleString('en-IN')} <span className="text-xs font-medium text-gray-400">Pcs</span></p>
                <span className="text-[10px] text-gray-400 font-medium block">Standard 9x4x3 Metric Sizing</span>
              </div>

            </div>

            {/* Quality Standard Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-400 border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#A67153]" /> <span>IS Code 456:2000 Compliant Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <HardHat size={16} className="text-[#A67153]" /> <span>Procurement Logistics Log Ready</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE: MATERIAL ALLOCATION LEAD GENERATION FORM (5 COLS) ================= */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-black/[0.015]"
            >
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1.5 mb-1">
                  <h3 className="text-lg font-bold tracking-tight text-[#2D2926]">Calculate Cost</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Enter your layout metrics below to isolate an official material procurement quote.</p>
                </div>

                {/* 1. PERSONAL IDENTIFICATION LAYER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <User size={11} /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Prince Mishra" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] placeholder-gray-300 outline-none transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Phone size={11} /> Contact Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      pattern="[0-9]{10}"
                      placeholder="+91 XXX" 
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] placeholder-gray-300 outline-none transition-all"
                    />
                  </div>
                    {/* Custom City Dropdown Layer */}
                    <div className="space-y-1.5 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                        <MapPin size={11} /> Location
                    </label>
                    <button
                        type="button"
                        onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                        className="w-full bg-[#F8F5F2] border border-transparent text-left text-xs font-bold rounded-xl px-4 py-3 text-[#2D2926] flex items-center justify-between outline-none transition-all hover:bg-[#f0ece8]"
                    >
                        <span className={selectedCity === 'Select your city' ? 'text-gray-400 font-normal' : ''}>
                        {selectedCity}
                        </span>
                        <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isCityDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isCityDropdownOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl max-h-48 overflow-y-auto overflow-x-hidden text-xs text-[#2D2926] divide-y divide-gray-50"
                        >
                            {CITIES_LIST.map((city) => (
                            <li key={city}>
                                <button
                                type="button"
                                onClick={() => {
                                    setSelectedCity(city);
                                    setIsCityDropdownOpen(false);
                                }}
                                className="w-full text-left font-bold px-4 py-3 hover:bg-[#F8F5F2] transition-colors"
                                >
                                {city}
                                </button>
                            </li>
                            ))}
                        </motion.ul>
                        )}
                    </AnimatePresence>
                    </div>
                    <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Layers size={11} /> Slab Area (Sq.Ft.)
                    </label>
                    <input 
                      type="number" 
                      min="100"
                      max="100000"
                      required
                      value={slabArea} 
                      onChange={(e) => setSlabArea(Number(e.target.value))}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3 text-[#2D2926] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>

                

                {/* 2. NUMERIC STRUCTURAL PARAMETERS BLOCK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Number of floors */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Layers size={11} /> No. of Floors
                    </label>
                    <input 
                      type="number" 
                      min="1"
                      max="10"
                      required
                      value={''} 
                      placeholder='eg. 1'
                      onChange={(e) => setSlabArea(Number(e.target.value))}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3 text-[#2D2926] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  {/* Total Built-up Area Numeric Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Package size={11} />  Built-Up Area (Sq.Ft.)
                    </label>
                    <input 
                      type="number" 
                      required
                      placeholder='auto calculated'
                      onChange={(e) => setBuiltupArea(Number(e.target.value))}
                      className="w-full bg-[#F8F5F2] border border-transparent focus:border-[#A67153]/30 focus:bg-white text-xs font-black rounded-xl px-4 py-3 text-[#2D2926] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>

                {/* 3. SUBMIT FORM CALL TO ACTION */}
                <button 
                  type="submit" 
                  className="w-full bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md transform hover:scale-[1.01] active:scale-[0.99] pt-4"
                >
                  Generate Procurement Estimate <ArrowRight size={14} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}