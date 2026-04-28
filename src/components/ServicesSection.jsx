'use client';
import { FaArrowRight } from 'react-icons/fa6';

const services = [
  {
    title: "Luxury Villas",
    slug: "luxury-villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    desc: "Bespoke estates designed for elite living."
  },
  {
    title: "Commercial Construction",
    slug: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    desc: "Innovative hubs for modern businesses."
  },
  {
    title: "Residential Homes",
    slug: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    desc: "Master-planned residential communities."
  },
  {
    title: "Medical & Pharmacy",
    slug: "medical-setups",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
    desc: "High-precision healthcare environments."
  },
  {
    title: "Interior Architecture",
    slug: "interiors",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    desc: "Curated spaces with artisanal finishes."
  },
  {
    title: "Retail & Hospitality",
    slug: "retail",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop",
    desc: "Captivating spaces for brands and guests."
  }
];

export default function SpecialtyGrid() {
  return (
    <section className="bg-white py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
              Our Expertise
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium text-brand-dark tracking-tight">
              Specialized <span className="italic font-light text-brand/80">Construction Verticals.</span>
            </h2>
          </div>
          <p className="text-brand-dark/50 text-sm max-w-xs leading-relaxed">
            Delivering excellence across diverse sectors with precision engineering and luxury design.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] overflow-hidden cursor-pointer bg-brand-dark"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

              {/* Top Right "T" Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                <span className="text-xs font-bold font-sans">T</span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="space-y-3">
                  <div className="w-12 h-[1px] bg-brand" />
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light max-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-3 text-brand font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore Vertical <FaArrowRight />
                  </div>
                </div>
              </div>

              {/* Corner Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/30 font-bold">
            Masterfully Crafted · Globally Standardized · Teayaksh Construction
          </p>
        </div>
      </div>
    </section>
  );
}