'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BiArea, BiBuildings } from 'react-icons/bi';
import Link from 'next/link';

const PROJECTS_PER_PAGE = 10;
const DEFAULT_STATUS_FILTERS = ["Completed", "Under Construction", "Near Completion"];

function EmptyProjectsState({ title, message }) {
  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-10 md:p-16 text-center shadow-[0_35px_90px_-50px_rgba(45,41,38,0.45)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <BiBuildings size={30} />
          </div>
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand">Our Projects</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight text-brand-dark">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base leading-7 text-brand-dark/50">{message}</p>
        </div>
      </div>
    </section>
  );
}

function normalizeProject(project) {
  return {
    id: project.id,
    title: project.title,
    type: project.pricing_tier,
    area: project.area,
    height: project.elevation,
    status: project.status,
    image: project.thumbnail_image || "/images/enscape_1.jpg",
    url: project.project_url,
  };
}

export default function OurProject({ projects = [] }) {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const normalizedProjects = projects.map(normalizeProject);

  if (normalizedProjects.length === 0) {
    return (
      <EmptyProjectsState
        title="No Project Found"
        message="Our project gallery is being updated. Please check back soon for the latest featured works."
      />
    );
  }

  const statusFilters = [
    "All",
    ...Array.from(
      new Set([
        ...DEFAULT_STATUS_FILTERS,
        ...normalizedProjects.map((project) => project.status).filter(Boolean),
      ])
    ),
  ];

  const filteredProjects = filter === "All" 
    ? normalizedProjects 
    : normalizedProjects.filter(p => p.status === filter);
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  const showingStart = filteredProjects.length ? startIndex + 1 : 0;
  const showingEnd = Math.min(startIndex + PROJECTS_PER_PAGE, filteredProjects.length);

  const handleFilterChange = (status) => {
    setFilter(status);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

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
          <div className="flex flex-row overflow-auto gap-2 bg-gray-100/50 p-1.5 rounded-2xl border border-gray-200/50">
            {statusFilters.map((s) => (
              <button
                key={s}
                onClick={() => handleFilterChange(s)}
                className={` relative md:px-6 px-2 md:py-2.5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-xl ${
                  filter === s ? 'text-white' : 'text-brand-dark/50 hover:text-brand-dark'
                }`}
              >
                <span className="relative z-10 whitespace-nowrap">{s}</span>
                {filter === s && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-brand-dark md:rounded-xl rounded shadow-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-10 md:p-14 text-center shadow-[0_35px_90px_-55px_rgba(45,41,38,0.45)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <BiBuildings size={26} />
            </div>
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-brand-dark">No Project for {filter}</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-brand-dark/50">
              Try another project status to explore the work currently available in our portfolio.
            </p>
          </div>
        ) : (
          <>
            {/* Project Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
              <AnimatePresence mode='popLayout'>
                {visibleProjects.map((project) => (
                  <Link
                    href={`/project/${project.url}`}
                    key={project.id}
                    
                    className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

                      <div className="absolute top-6 right-6">
                        <span className="bg-white/90 backdrop-blur-md text-brand-dark text-[10px] font-mono py-1.5 px-3 rounded-lg border border-gray-200">
                          ID: {project.id}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 md:p-6 pt-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-brand-dark mb-1">{project.title}</h3>
                          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Package: {project.type}</p>
                        </div>
                      </div>

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
                    </div>
                  </Link>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {filteredProjects.length > PROJECTS_PER_PAGE && (
          <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">
              Showing {showingStart}-{showingEnd} of {filteredProjects.length} projects
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-gray-200/70 bg-white p-2 shadow-[0_20px_60px_-35px_rgba(45,41,38,0.45)]">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-widest text-brand-dark/60 transition-all hover:bg-brand-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-dark/60"
              >
                Prev
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`relative h-10 w-10 rounded-xl text-xs font-black transition-all ${
                      currentPage === page
                        ? 'text-white shadow-lg'
                        : 'text-brand-dark/50 hover:bg-gray-100 hover:text-brand-dark'
                    }`}
                  >
                    <span className="relative z-10">{page}</span>
                    {currentPage === page && (
                      <motion.span
                        layoutId="activeProjectPage"
                        className="absolute inset-0 rounded-xl bg-brand-dark"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-widest text-brand-dark/60 transition-all hover:bg-brand-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand-dark/60"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
