'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

const FALLBACK_IMAGE = "/images/enscape_1.jpg";
const PROJECT_IMAGE_SIZES = "(max-width: 767px) 65vw, (max-width: 1023px) 30vw, 35vw";

function getProjectTime(project) {
  const value = project.created_at || project.updated_at || project.published_at;
  const time = value ? new Date(value).getTime() : 0;

  return Number.isNaN(time) ? 0 : time;
}

function formatLocation(project) {
  return [project.city, project.state, project.country]
    .filter(Boolean)
    .join(", ")
    .replace(/-/g, " ");
}

function normalizeProject(project) {
  return {
    id: project.id,
    title: project.title || "Untitled Project",
    category: project.pricing_tier_name || project.pricing_tier || project.type || project.status || "Project",
    location: formatLocation(project) || project.location || project.status || "Trayaksh Construction",
    image: project.thumbnail_image || project.animated_image || FALLBACK_IMAGE,
    href: project.project_url ? `/project/${project.project_url}` : "/projects",
    sortTime: getProjectTime(project),
  };
}

function ProjectImage({ project }) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(project.image);

  return (
    <>
      {!loaded && (
        <div
          aria-hidden="true"
          className="project-image-loader absolute inset-0 z-10 bg-gray-100"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100" />
        </div>
      )}
      <Image
        fill
        src={imageSrc}
        alt={project.title}
        sizes={PROJECT_IMAGE_SIZES}
        loading="lazy"
        className={`w-full h-full object-cover
          transform-gpu
          will-change-transform
          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imageSrc !== FALLBACK_IMAGE) {
            setImageSrc(FALLBACK_IMAGE);
            setLoaded(false);
            return;
          }

          setLoaded(true);
        }}
      />
    </>
  );
}

export default function ProjectSection({ projects = [] }) {
  const scrollRef = useRef(null);
  const latestProjects = [...projects]
    .sort((a, b) => {
      const timeDifference = getProjectTime(b) - getProjectTime(a);

      return timeDifference || Number(b.id || 0) - Number(a.id || 0);
    })
    .slice(0, 5)
    .map(normalizeProject);

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
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4 mb-1">
              Featured Portfolio
            </p>
            <h2 className="text-xl lg:text-4xl font-medium text-brand-dark tracking-tight">
              Masterpieces in <span className=". font-light text-brand/80">Architectural Excellence.</span>
            </h2>
          </div>

          {/* Custom Navigation Arrows */}
          <div className="md:flex hidden gap-4">
            <button 
              onClick={() => scroll('left')}
              area-label='scroll to left'
              className="p-3 border border-brand/20 text-brand-dark hover:bg-brand hover:text-white transition-all duration-300 rounded-full cursor-pointer"
            >
              <HiOutlineArrowLongLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              area-label='scroll to right'
              className="p-3 border border-brand/20 text-brand-dark hover:bg-brand hover:text-white transition-all duration-300 rounded-full cursor-pointer"
            >
              <HiOutlineArrowLongRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div 
          ref={scrollRef}
          className="flex md:gap-8 gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {latestProjects.map((project, index) => (
            <div 
              key={project.id}
              className="min-w-[65vw] md:min-w-[30vw] lg:min-w-[35vw] snap-start group relative"
            >
              <div className="relative h-[300px] lg:h-[300px] overflow-hidden">
                {/* Image with subtle parallax effect on hover */}
                <ProjectImage project={project} />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Link 
                    href={project.href}
                    aria-label= {`show ${project.title} project`}
                    className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
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
              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <h3 className="md:text-2xl text-[.9rem] leading-[1.2] font-medium text-brand-dark group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-brand-dark/40 text-sm mt-1 uppercase tracking-widest">
                    {project.location}
                  </p>
                </div>
                <div className="text-brand font-bold text-xs tracking-tighter shrink-0">
                  {String(index + 1).padStart(2, '0')} / {String(latestProjects.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
          
          {/* "View All" Card */}
          <div className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[20vw] snap-start bg-brand-dark flex flex-col items-center justify-center text-center p-12 group hover:bg-brand transition-colors duration-500">
            <h3 className="text-white text-3xl font-medium mb-6">Explore All <br /> Projects</h3>
            <Link 
              href="/projects"
              area-label='visit project page'
              className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand transition-all">
              <HiOutlineArrowLongRight size={28} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
