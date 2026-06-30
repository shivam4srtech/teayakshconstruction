'use client';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image'

const services = [
  {
    title: "Luxury Villas",
    slug: "luxury-villas",
    image: "/images/luxury-villa.webp",
    desc: "Bespoke estates designed for elite living."
  },
  {
    title: "Commercial Construction",
    slug: "commercial",
    image: "/images/commercial-construction.webp",
    desc: "Innovative hubs for modern businesses."
  },
  {
    title: "Residential Homes",
    slug: "residential",
    image: "/images/residential.webp",
    desc: "Master-planned residential communities."
  },
  {
    title: "Medical & Pharmacy",
    slug: "medical-setups",
    image: "/images/medical-setup.webp",
    desc: "High-precision healthcare environments."
  },
  {
    title: "Interior Architecture",
    slug: "interiors",
    image: "/images/image17.webp",
    desc: "Curated spaces with artisanal finishes."
  },
  {
    title: "Retail & Hospitality",
    slug: "retail",
    image: "/images/retail-shop.webp",
    desc: "Captivating spaces for brands and guests."
  }
];

export default function SpecialtyGrid() {
  return (
    <section className="bg-white py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-10 mb-4 md:gap-6 gap-2">
          <div className="space-y-4">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4 mb-2 md:mb-3">
              Our Expertise
            </p>
            <h2 className="text-xl lg:text-4xl font-semibold text-brand-dark tracking-tight">
              Our <span className="text-brand/80">Construction Expertise.</span>
            </h2>
          </div>
          <p className="text-brand-dark/50 text-sm max-w-xs leading-relaxed">
            Delivering excellence across diverse sectors with precision engineering and luxury design.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {services.map((service, index) => (
            <Link 
              href={'/projects'}
              key={index} 
              className="group relative md:h-[400px] h-[300px] overflow-hidden cursor-pointer bg-brand-dark"
            >
              {/* Background Image */}
              <Image 
                fill
                src={service.image} 
                alt={service.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

              {/* Top Right "T" Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                <span className="text-xs font-bold font-sans">T</span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 md:p-10 p-4 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="space-y-3">
                  <div className="w-12 h-[1px] bg-brand" />
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light max-w-[250px]  group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-3 text-brand font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore Vertical <FaArrowRight />
                  </div>
                </div>
              </div>

              {/* Corner Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand group-hover:w-full transition-all duration-700" />
            </Link>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="md:mt-12 mt-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/30 font-bold">
            Masterfully Crafted · Globally Standardized · TRAYAKSH Construction
          </p>
        </div>
      </div>
    </section>
  );
}