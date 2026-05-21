'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FALLBACK_STAGE_IMAGE = "/images/no-image.jpg";

const STAGES = [
  {
    phase: "Stage 01",
    title: "The Raw Excavation",
    desc: "Breaking ground at Jubilee Hills. Deep soil stabilization and heavy-duty structural piling lay the indestructible foundation of the villa.",
    image: "/interior/image1.jpg"
  },
  {
    phase: "Stage 02",
    title: "Superstructure Frame",
    desc: "Casting the monolithic RCC slabs and erecting the custom structural steel cantilevers that give the villa its dramatic, gravity-defying overhangs.",
    image: "/interior/image5.jpg"
  },
  {
    phase: "Stage 03",
    title: "Façade & Glass Enclosure",
    desc: "Installing the massive, double-height acoustic glazing profiles alongside the signature matte black obsidian external wall cladding plates.",
    image: "/interior/image9.jpg"
  },
  {
    phase: "Stage 04",
    title: "Bespoke Curation",
    desc: "The final layer of luxury. Laying the book-matched Italian Statuario marble slabs, tailored fluted paneling, and micro-architectural lighting assets.",
    image: "/interior/image11.jpg"
  }
];

function normalizeStages(stages) {
  if (!Array.isArray(stages) || stages.length === 0) return STAGES;

  return stages
    .slice()
    .sort((a, b) => (a.order || a.stage_id || 0) - (b.order || b.stage_id || 0))
    .filter((stage) => stage.title && stage.description)
    .map((stage, index) => ({
      phase: `Stage ${String(index + 1).padStart(2, "0")}`,
      title: stage.title,
      desc: stage.description,
      image: typeof stage.image === "string" ? stage.image : stage.image?.url || FALLBACK_STAGE_IMAGE,
    }));
}

export default function ProjectStages({ stages }) {
  const projectStages = normalizeStages(stages);

  if (Array.isArray(stages) && projectStages.length === 0) {
    return null;
  }

  return (
    <section className="py-10 bg-white text-[#2D2926] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center md:mb-10 mb-5">
          
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
            Stages of <span className="font-light text-[#A67153]">Construction</span>
          </h2>
        </div>

        {/* Vertical Alternating Timeline Grid */}
        <div className="relative">
          
          {/* Subtle Center Decorative Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-10 lg:-space-y-6">
            {projectStages.map((stage, i) => {
              const isEven = i % 2 === 0;

              return (
                <div 
                  key={i} 
                  className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-0 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* TEXT SIDE */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2  lg:px-20"
                  >
                    <div className={`flex flex-col ${
                      isEven ? 'lg:items-start text-left' : 'lg:items-end lg:text-right text-left'
                    }`}>
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-[#A67153] md:mb-3 mb-0">
                        {stage.phase}
                      </span>
                      <h3 className="text-xl md:text-4xl font-bold tracking-tight ,d:mb-5 mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-md">
                        {stage.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* CENTER POINT ANCHOR (Desktop Only) */}
                  <div className="relative z-10 hidden lg:block">
                    <div className="w-4 h-4 rounded-full bg-[#2D2926] border-4 border-white shadow-md ring-1 ring-gray-100" />
                  </div>

                  {/* IMAGE SIDE */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="w-full lg:w-1/2  lg:px-20"
                  >
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl group">
                      <Image 
                        src={stage.image} 
                        alt={stage.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Premium Subtle Architectural Tint */}
                      <div className="absolute inset-0 bg-[#2D2926]/5 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
