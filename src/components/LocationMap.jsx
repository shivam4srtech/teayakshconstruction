'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCity, FaBuilding } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const locations = [
  { id: 1, city: "Mumbai", top: "65%", left: "18%", projects: 14, type: "Luxury Villas" },
  { id: 2, city: "Bangalore", top: "82%", left: "25%", projects: 22, type: "Commercial Hubs" },
  { id: 3, city: "Delhi NCR", top: "35%", left: "28%", projects: 18, type: "Residential Masterplans" },
  { id: 4, city: "Hyderabad", top: "72%", left: "32%", projects: 12, type: "Medical Setups" },
  { id: 5, city: "Kolkata", top: "55%", left: "75%", projects: 9, type: "Industrial" },
];

export default function LocationMap() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section className="bg-brand-dark py-24 lg:py-32 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
                Regional Presence
              </p>
              <h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight">
                Where We <br />
                <span className=". text-brand/80">Build Excellence.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-md">
                With operational hubs across major metropolitans, Teayaksh executes complex construction projects with local precision and global standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="border-l border-white/10 pl-6">
                <h4 className="text-3xl font-light text-brand">75+</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Projects Completed</p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <h4 className="text-3xl font-light text-brand">12+</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Active Cities</p>
              </div>
            </div>

            <button className="flex items-center gap-4 group text-white font-bold uppercase tracking-widest text-xs pt-4">
              View Detailed Portfolio <HiOutlineArrowLongRight size={22} className="text-brand group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right: Interactive Map Area */}
          <div className="relative bg-white/5 rounded-2xl border border-white/10 p-4 lg:p-8 backdrop-blur-sm h-[500px] flex items-center justify-center">
            {/* Minimalist SVG Map Placeholder (Assuming India for context, but works for any) */}
            <div className="relative w-full h-full opacity-40 grayscale contrast-125">
              <svg viewBox="0 0 800 1000" className="w-full h-full fill-white/20 stroke-white/40 stroke-[0.5]">
                {/* Simplified Path for Map - Replace with actual SVG path of your region */}
                <path d="M250,150 L300,100 L400,150 L500,100 L600,200 L550,400 L650,600 L400,850 L200,800 L100,600 L150,300 Z" />
              </svg>
            </div>

            {/* Pulsing Hotspots */}
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="absolute cursor-pointer group"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setHoveredLocation(loc)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Pulse Effect */}
                <div className="absolute inset-0 w-4 h-4 -left-2 -top-2 rounded-full bg-brand animate-ping opacity-40" />
                {/* Dot */}
                <div className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                  hoveredLocation?.id === loc.id ? 'bg-white scale-125' : 'bg-brand'
                }`} />

                {/* Tooltip */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white p-4 shadow-2xl transition-all duration-300 pointer-events-none ${
                  hoveredLocation?.id === loc.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                }`}>
                  <div className="relative">
                    <h5 className="text-brand-dark font-bold text-sm">{loc.city}</h5>
                    <p className="text-[10px] text-brand uppercase tracking-widest font-bold mt-1">{loc.type}</p>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                      <FaBuilding className="text-brand-dark/20" size={10} />
                      <span className="text-[10px] font-bold text-brand-dark/60">{loc.projects} Completed Units</span>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
                  </div>
                </div>
              </div>
            ))}

            {/* Floating Map Legend */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/20 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-brand" />
                 <span className="text-[9px] text-white/60 uppercase tracking-widest">Active Hubs</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-white" />
                 <span className="text-[9px] text-white/60 uppercase tracking-widest">Future Sites</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}