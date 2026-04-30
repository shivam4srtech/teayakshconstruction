'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { FaArrowRight } from 'react-icons/fa6';

const projects = [
  {
    id: 1,
    title: "The Azure Residence",
    category: "Luxury Villa",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Vortex Corporate Hub",
    category: "Commercial",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ethereal Interiors",
    category: "Interior",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Obsidian Manor",
    category: "Residential",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ProjectSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-8 lg:py-14 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-5 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-10 mb-6 md:gap-8 gap-4">
          <div className="space-y-4">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
              Featured Portfolio
            </p>
            <h2 className="text-3xl lg:text-5xl font-medium text-brand-dark tracking-tight">
              Masterpieces in <br />
              <span className=". font-light text-brand/80">Architectural Excellence.</span>
            </h2>
          </div>

          {/* Custom Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 border border-brand/20 text-brand-dark hover:bg-brand hover:text-white transition-all duration-300 rounded-full cursor-pointer"
            >
              <HiOutlineArrowLongLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 border border-brand/20 text-brand-dark hover:bg-brand hover:text-white transition-all duration-300 rounded-full cursor-pointer"
            >
              <HiOutlineArrowLongRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="min-w-[50vw] md:min-w-[30vw] lg:min-w-[35vw] snap-start group relative"
            >
              <div className="relative h-[300px] lg:h-[300px] overflow-hidden">
                {/* Image with subtle parallax effect on hover */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Link href={`/projects/${project.id}`} className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <FaArrowRight size={20} />
                  </Link>
                </div>

                {/* Project Tags */}
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-brand-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="md:text-2xl text-[.9rem] leading-[1.2] font-medium text-brand-dark group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-brand-dark/40 text-sm mt-1 uppercase tracking-widest">
                    {project.location}
                  </p>
                </div>
                <div className="text-brand font-bold text-xs tracking-tighter shrink-0">
                  0{project.id} / 0{projects.length}
                </div>
              </div>
            </div>
          ))}
          
          {/* "View All" Card */}
          <div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[20vw] snap-start bg-brand-dark flex flex-col items-center justify-center text-center p-12 group hover:bg-brand transition-colors duration-500">
            <h3 className="text-white text-3xl font-medium mb-6">Explore All <br /> Projects</h3>
            <Link href="/projects" className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand transition-all">
              <HiOutlineArrowLongRight size={28} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}