'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SlidersHorizontal, ChevronDown, Compass, Layers, 
  HardHat, DollarSign, ThumbsUp, Share2, CheckCircle, Phone 
} from 'lucide-react';

// Filter configurations mimicking your actual database structure
const FILTER_GROUPS = [
  {
    id: "dimensions",
    label: "Plot Dimensions (sq ft)",
    options: ["20x20 sq ft.", "20x30 sq ft.", "20x40 sq ft.", "20x50 sq ft.", "20x60 sq ft."]
  },
  {
    id: "budget",
    label: "House Budget",
    options: ["Under ₹30 Lakhs", "₹30 - ₹50 Lakhs", "₹50 - ₹80 Lakhs", "₹80 Lakhs - ₹1.5 Cr", "Above ₹1.5 Cr"]
  },
  {
    id: "direction",
    label: "Road Facing Direction",
    options: ["East Facing", "West Facing", "North Facing", "South Facing"]
  },
  {
    id: "floors",
    label: "Number of Floors",
    options: ["Ground Floor Only", "G+1", "G+2", "G+3", "G+4"]
  },
  {
    id: "type",
    label: "Type of Construction",
    options: ["Residential Villa", "Apartment Unit", "Commercial Shell", "Duplex Modular"]
  },
  {
    id: "Bedroom",
    label: "Number of Bedrooms",
    options: ["1BHK", "2BHK", "3BHK", "4BHK"]
  },
  {
    id: "Vastu Compliant",
    label: "Vastu Compliant",
    options: ["Yes"]
  },
   {
    id: "Special Requirement",
    label: "Special Requirement",
    options: ["Swiming Pool", "Gym", "Lift"]
  }
];

const MOCK_DESIGNS = [
  {
    id: "des-01",
    type: "Residential",
    title: "Explore A Stunning 3 Bedroom G+1 Residential House Plan Designed For A 40x50 West Facing Plot.",
    dimensions: "40x50 sq.ft",
    floors: "G+1",
    bhk: "3 BHK",
    budget: "₹ 42,50,000",
    likes: 22,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600"
  },
  {
    id: "des-02",
    type: "Residential",
    title: "Modern Multi-Family G+3 Structural Frame Designed For Commercial Rental Yield Passways.",
    dimensions: "30x40 sq.ft",
    floors: "G+3",
    bhk: "9 BHK",
    budget: "₹ 88,53,760",
    likes: 24,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600"
  }
];

export default function FloorPlanCatalog() {
  // Track open accordion sections
  const [openSection, setOpenSection] = useState("dimensions");
  // Track checked parameters: { dimensions: ["20x30 sq ft."], budget: [] }
  const [selectedFilters, setSelectedFilters] = useState({
    dimensions: [],
    budget: [],
    direction: [],
    floors: [],
    type: []
  });

  const toggleAccordion = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const handleCheckboxChange = (groupId, option) => {
    setSelectedFilters(prev => {
      const currentTags = prev[groupId];
      const updatedTags = currentTags.includes(option)
        ? currentTags.filter(item => item !== option)
        : [...currentTags, option];
      return { ...prev, [groupId]: updatedTags };
    });
  };

  const resetAllFilters = () => {
    setSelectedFilters({ dimensions: [], budget: [], direction: [], floors: [], type: [] });
  };

  // Compute absolute number of active criteria selections
  const totalActiveCount = Object.values(selectedFilters).flat().length;

  return (
    <div className="bg-[#F8F5F2] text-[#2D2926] min-h-screen">
      
      {/* ================= SECTION 1: LIGHT BLUEPRINT BANNER HERO (Ref: Image 1 Style) ================= */}
      <div className="relative py-20 mt-20 bg-[#F0ECE7] border-b border-gray-200 overflow-hidden">
        {/* Crisp light grid & architectural drawing mask overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none">
          <img 
            src="/images/floor-plan.jpg" 
            alt="floor-plan"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d292603_1px,transparent_1px),linear-gradient(to_bottom,#2d292603_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] block">
            Trayaksh Engineering Lab
          </span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#2D2926]">
            House Designs and <span className="font-light text-[#A67153]">Floor Plans</span>
          </h1>
          <p className="text-gray-500 text-xs md:text-sm font-medium max-w-xl leading-relaxed">
            Find the curated floor plans optimized mathematically for luxury load balancing, space efficiency, and modern aesthetic forms.
          </p>
        </div>
      </div>

      {/* ================= SECTION 2: EXPERT GRID HUB INTERFACE ================= */}
      <div className="max-w-7xl mx-auto px-5 lg:px-16 pt-10 pb-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
          
          {/* LEFT SUB-COLUMN: INTERACTIVE CHECKBOX ACCORDION SIDEBAR (Ref: Image 2 Custom Rules) */}
          <div className="xl:col-span-3 bg-white md:rounded-[2rem] rounded-xl p-6 border border-gray-200/60 shadow-xl shadow-black/[0.005] space-y-3">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <SlidersHorizontal size={14} className="text-[#A67153]" />
                <h3>Filters ({totalActiveCount})</h3>
              </div>
              {totalActiveCount > 0 && (
                <button 
                  onClick={resetAllFilters}
                  className="text-[11px] font-bold text-[#A67153] hover:underline transition-all"
                >
                  ✕ Reset
                </button>
              )}
            </div>

            {/* Accordion List Loop with Internal Checkbox Framework */}
            {FILTER_GROUPS.map((group) => {
              const isOpen = openSection === group.id;
              return (
                <div key={group.id} className="border-b border-gray-100 last:border-none pb-2 last:pb-0">
                  <button
                    onClick={() => toggleAccordion(group.id)}
                    className="w-full flex items-center justify-between py-3 px-2 rounded-xl hover:bg-[#F8F5F2] transition-colors group"
                  >
                    <span className={`text-xs font-bold transition-colors ${isOpen ? 'text-[#A67153]' : 'text-gray-600 group-hover:text-[#2D2926]'}`}>
                      {group.label}
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A67153]' : ''}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* Scrollable multi-checkbox field frame wrapper */}
                        <div className="max-h-52 overflow-y-auto pl-3 pr-1 py-3 space-y-2.5 scrollbar-thin scrollbar-thumb-gray-200">
                          {group.options.map((option, oIdx) => {
                            const isChecked = selectedFilters[group.id].includes(option);
                            return (
                              <label 
                                key={oIdx} 
                                className="flex items-center gap-3 cursor-pointer select-none group text-xs text-gray-500 hover:text-[#2D2926] transition-colors"
                              >
                                <div className="relative flex items-center justify-center">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleCheckboxChange(group.id, option)}
                                    className="peer appearance-none w-4 h-4 rounded border border-gray-300 checked:bg-[#A67153] checked:border-[#A67153] outline-none transition-all cursor-pointer"
                                  />
                                  {isChecked && (
                                    <div className="absolute text-white pointer-events-none font-bold text-[9px]">✓</div>
                                  )}
                                </div>
                                <span className={isChecked ? "font-bold text-[#2D2926]" : "font-medium"}>
                                  {option}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* MIDDLE SUB-COLUMN: THE 3D PRODUCT CARD TILES INDEX */}
          <div className="xl:col-span-9 space-y-6">
            <div className="flex items-center justify-between mb-2 px-2">
              <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                Total Layouts: <span className="text-[#2D2926]">16,902 Designs</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {MOCK_DESIGNS.map((design) => (
                <div key={design.id} className="bg-white md:rounded-[2.5rem] rounded-xl overflow-hidden border border-gray-100 shadow-xl shadow-black/[0.005] flex flex-col group hover:shadow-2xl hover:border-gray-200 transition-all duration-300">
                  
                  {/* Isometric / Asset Window View */}
                  <div className="relative h-[250px] w-full bg-[#FAFAFA] flex items-center justify-center md:p-8 p-4 border-b border-gray-50 overflow-hidden">
                    <img 
                      src={design.image} 
                      alt="" 
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500" 
                    />
                    
                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-gray-400 border border-gray-100 flex items-center justify-center hover:text-[#A67153] transition-colors shadow-sm">
                      <Share2 size={12} />
                    </button>

                    <div className="absolute bottom-4 left-4 bg-white border border-gray-100 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-[10px] font-bold text-gray-500">
                      <ThumbsUp size={10} className="text-[#A67153]" /> {design.likes}
                    </div>
                  </div>

                  {/* Details Copy Box */}
                  <div className="p-6 pt-0 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 block">{design.type}</span>
                      <h4 className="text-xs font-bold text-gray-600 leading-relaxed line-clamp-3">
                        {design.title}
                      </h4>
                    </div>

                    {/* Metadata Parameter Badges */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 text-[10px] font-bold text-gray-500">
                      <div className="flex items-center gap-1.5"><Compass size={12} className="text-[#A67153]" /> {design.dimensions}</div>
                      <div className="flex items-center gap-1.5"><DollarSign size={12} className="text-[#A67153]" /> {design.budget}</div>
                      <div className="flex items-center gap-1.5"><Layers size={12} className="text-[#A67153]" /> {design.floors}</div>
                      <div className="flex items-center gap-1.5"><HardHat size={12} className="text-[#A67153]" /> {design.bhk}</div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          

        </div>
      </div>

    </div>
  );
}

// ================= THE CONVERSION COMPONENT LAYER: HeroForm =================
function HeroForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#1A1817] text-white p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67153]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="space-y-2 mb-6">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#A67153] block">Instant Verification</span>
        <h3 className="text-xl font-bold tracking-tight">Request Blueprint Pricing</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Submit your contact parameters below to download original CAD file sets or schedule engineering design consultancies.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <div>
              <label className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block mb-1">Full Name</label>
              <input type="text" placeholder="e.g., Aryan Sharma" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#A67153] transition-colors text-white" required />
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block mb-1">Mobile Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#A67153] transition-colors text-white" required />
            </div>
            <div>
              <label className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block mb-1">Plot Location</label>
              <input type="text" placeholder="e.g., Whitefield, Bangalore" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#A67153] transition-colors text-white" required />
            </div>
            <button type="submit" className="w-full bg-[#A67153] hover:bg-[#8E5E41] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-colors mt-2 shadow-lg">
              Get Free Consultation
            </button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle size={20} />
            </div>
            <h4 className="text-sm font-bold">Request Logged Successfully</h4>
            <p className="text-[11px] text-gray-400 max-w-xs mx-auto leading-relaxed">Bhai, our spatial experts are initializing your catalog compilation. Speak soon!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}