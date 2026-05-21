'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass, Paintbrush, ShieldCheck } from 'lucide-react';

const DEFAULT_DESCRIPTION = `
  <h3>The Symphony of Dark Textures and Natural Illumination.</h3>
  <p>Designed as a sanctuary within the bustling core of Jubilee Hills, The Obsidian Villa redefines structural luxury. The design philosophy centers heavily on dramatic contrasts, juxtaposing deep charcoal tones with expansive double-height glazing that floods the core areas with daylight.</p>
  <p>Every room has been laid out to maximize privacy while encouraging spatial flow. Our engineers executed custom structural steel overhangs to provide passive shading, drastically cutting thermal load while keeping the monolithic appearance clean.</p>
`;

function getImageUrl(image) {
  if (typeof image === "string") return image;
  return image?.url || image?.image || image?.path || null;
}

export default function AboutProject({ project }) {
  const description = project?.description || DEFAULT_DESCRIPTION;
  const showcaseImage = getImageUrl(project?.animated_image) || getImageUrl(project?.thumbnail_image) || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200";
  const title = project?.title || "The Obsidian Villa";

  if (project && !project.description) {
    return null;
  }

  return (
    <section className="py-10 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Section Heading */}
        <div className="mb-5">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153] mb-3 block">
            Architectural Narrative
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
            Behind the <span className="font-light text-[#A67153]">Design Blueprint</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-3">
            <div
              className="space-y-3 text-gray-500 leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[#2D2926] [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-[#2D2926] [&_p]:text-base [&_p]:md:text-lg [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:text-sm [&_li]:md:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {/* Core Highlights Row */}
            <div className="grid grid-cols-2 gap-6 pt-3">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-[#A67153] shadow-sm shrink-0">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Vastu Compliant</h4>
                  <p className="text-xs text-gray-400 mt-1">North-East entry optimizing spatial energy flow.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-[#A67153] shadow-sm shrink-0">
                  <Paintbrush size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Custom Curated</h4>
                  <p className="text-xs text-gray-400 mt-1">Hand-picked slabs from Carrara, Italy.</p>
                </div>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="pt-3 border-t border-gray-200/60 flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck size={18} className="text-[#A67153]" /> 
              <span>Trayaksh 470+ Quality Check Certified</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Stunning Project Image Showcase */}
          <div className="lg:col-span-6 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[350px] md:h-[400px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src={showcaseImage} 
                alt={`${title} Interior Concept`} 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
              {/* Subtle architectural gradient mask overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/10 via-transparent to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
