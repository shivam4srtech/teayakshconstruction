'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ClipboardCheck, Layers, Hammer, Sparkles, Key } from 'lucide-react';

const PROCESS_STEPS = [
  {
    title: "Discovery & Concept",
    desc: "We begin with a deep dive into your lifestyle. Through moodboards and sketches, we define the 'soul' of your space.",
    icon: <ClipboardCheck size={20} />,
    image: "/images/image14.webp"
  },
  {
    title: "Design Development",
    desc: "Our engineers and designers create detailed 3D visualizations and structural blueprints, ensuring aesthetics meet stability.",
    icon: <Layers size={20} />,
    image: "/images/image27.webp"
  },
  {
    title: "Precision Execution",
    desc: "The heavy lifting begins. Our on-site team executes the design with 334+ Quality checks at every structural milestone.",
    icon: <Hammer size={20} />,
    image: "/images/image25.webp"
  },
  {
    title: "Bespoke Finishing",
    desc: "Installing the details—Italian marble, custom cabinetry, and lighting fixtures that turn a house into a Trayaksh home.",
    icon: <Sparkles size={20} />,
    image: "/images/image13.webp"
  },
  {
    title: "The Grand Handover",
    desc: "A final walkthrough and 'Legacy' certification. We hand over the keys to your masterpiece, ready for generations.",
    icon: <Key size={20} />,
    image: "/images/image5.webp"
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-10 bg-[#F8F5F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] mb-4 block">Our Methodology</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#2D2926]">
            The Journey to <span className="font-light">Legacy</span>
          </h2>
        </div>

        <div className="relative">
          {/* THE PROGRESS LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-gray-200 hidden md:block">
            <motion.div style={{ scaleY, originY: 0 }} className="absolute top-0 w-full h-full bg-[#A67153]" />
          </div>

          <div className="space-y-5">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* TEXT CONTENT */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 px-4 md:px-20"
                >
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#A67153] mb-8">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#2D2926] mb-6 tracking-tight">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-md">{step.desc}</p>
                  </div>
                </motion.div>

                {/* CENTER DOT */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-2xl flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#A67153]" />
                  </div>
                </div>

                {/* IMAGE CONTENT (THE "BLANK SPACE" FILLER) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="w-full md:w-1/2 px-4 md:px-20"
                >
                  <div className="relative h-[300px] md:h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2D2926]/20 to-transparent" />
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}