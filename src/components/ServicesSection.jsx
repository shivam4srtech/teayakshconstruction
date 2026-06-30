'use client';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const FALLBACK_IMAGE = "/images/enscape_1.jpg";
const SERVICE_IMAGE_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw";

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

function ServiceImage({ service }) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(service.image);

  return (
    <>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-brand-dark/10 animate-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/10 via-white/20 to-brand-dark/10" />
        </div>
      )}

      <Image
        fill
        src={imageSrc}
        alt={service.title}
        sizes={SERVICE_IMAGE_SIZES}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imageSrc !== FALLBACK_IMAGE) {
            setImageSrc(FALLBACK_IMAGE);
            setLoaded(false);
            return;
          }

          setLoaded(true);
        }}
        className={`
          object-cover
          transform-gpu
          will-change-transform
          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-110
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </>
  );
}

export default function SpecialtyGrid() {
  return (
    <section className="bg-white py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Header */}
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
            Delivering excellence across diverse sectors with precision engineering
            and luxury design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href="/projects"
              className="group relative md:h-[400px] h-[300px] overflow-hidden bg-brand-dark cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="absolute inset-0 overflow-hidden">
                <ServiceImage service={service} />
              </div>

              {/* Animated Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-brand-dark/90
                  via-brand-dark/20
                  to-transparent
                  transition-opacity
                  duration-700
                  group-hover:opacity-95
                "
              />

              {/* Badge */}
              <div
                className="
                  absolute top-6 right-6
                  w-10 h-10
                  border border-white/20
                  flex items-center justify-center
                  text-white
                  backdrop-blur-sm
                  transition-all duration-500
                  group-hover:bg-brand
                  group-hover:border-brand
                "
              >
                <span className="text-xs font-bold font-sans">T</span>
              </div>

              {/* Content */}
              <div
                className="
                  absolute inset-0
                  md:p-10 p-5
                  flex flex-col justify-end
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:-translate-y-3
                "
              >
                <div className="space-y-3">
                  <div className="w-12 h-[1px] bg-brand transition-all duration-500 group-hover:w-20" />

                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-white/70
                      text-sm
                      font-light
                      max-w-[250px]
                      transition-all
                      duration-500
                      group-hover:text-white
                    "
                  >
                    {service.desc}
                  </p>

                  <div
                    className="
                      pt-4
                      flex items-center gap-3
                      text-brand
                      font-bold
                      text-[10px]
                      uppercase
                      tracking-widest
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-500
                      delay-100
                      group-hover:opacity-100
                      group-hover:translate-y-0
                    "
                  >
                    Explore Vertical
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-700 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="md:mt-12 mt-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/30 font-bold">
            Masterfully Crafted · Globally Standardized · TRAYAKSH Construction
          </p>
        </div>
      </div>
    </section>
  );
}