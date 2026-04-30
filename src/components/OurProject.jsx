'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLocationOutline, IoHammerOutline, IoCheckmarkDoneCircleOutline, IoTimeOutline } from 'react-icons/io5';
import { BiArea, BiBuildings } from 'react-icons/bi';

const PROJECTS = [
  {
    id: "TEY-9921",
    title: "The Zenith Villa",
    type: "Royale",
    area: "4500",
    height: "G+2",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "TEY-4412",
    title: "Urban Classic Residency",
    type: "Classic",
    area: "2100",
    height: "G+1",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "TEY-1029",
    title: "Eco-Premium Floors",
    type: "Premium",
    area: "3200",
    height: "G+3",
    status: "Near Completion",
    image: "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more projects here...
];

const STATUS_FILTERS = ["All", "Completed", "Under Construction", "Near Completion"];

export default function OurProject() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.status === filter);

  return (
    <section className="py-10 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header & Filter Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand">Our Projects</p>
            <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-brand-dark">Featured <span className="font-light">Works.</span></h2>
          </div>

          {/* Stunning Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-gray-100/50 p-1.5 rounded-2xl border border-gray-200/50">
            {STATUS_FILTERS.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-xl ${
                  filter === s ? 'text-white' : 'text-brand-dark/50 hover:text-brand-dark'
                }`}
              >
                <span className="relative z-10">{s}</span>
                {filter === s && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-brand-dark rounded-xl shadow-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md border shadow-sm ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-100 border-green-500/30' :
                      project.status === 'Under Construction' ? 'bg-amber-500/20 text-amber-100 border-amber-500/30' :
                      'bg-blue-500/20 text-blue-100 border-blue-500/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        project.status === 'Completed' ? 'bg-green-400' : 
                        project.status === 'Under Construction' ? 'bg-amber-400' : 'bg-blue-400'
                      }`} />
                      {project.status}
                    </span>
                  </div>

                  {/* Project ID Tag */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-md text-brand-dark text-[10px] font-mono py-1.5 px-3 rounded-lg border border-gray-200">
                      ID: {project.id}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-3 md:p-6 pt-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-1">{project.title}</h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Package: {project.type}</p>
                    </div>
                  </div>

                  {/* Technical Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand">
                        <BiArea size={20} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase font-bold text-brand-dark/30">Total Area</p>
                        <p className="text-xs font-bold text-brand-dark">{project.area} sqft</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand">
                        <BiBuildings size={20} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase font-bold text-brand-dark/30">Elevation</p>
                        <p className="text-xs font-bold text-brand-dark">{project.height}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  {/* <div className="mt-8">
                    <button className="w-full py-4 bg-brand-dark text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand active:scale-95">
                      View Case Study
                    </button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}