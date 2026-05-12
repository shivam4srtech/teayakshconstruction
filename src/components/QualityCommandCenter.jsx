'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import { useRef } from 'react';
import { 
  CheckCircle2, 
  Microscope, 
  ScanFace, 
  Ruler, 
  HardHat, 
  Droplets, 
  ClipboardCheck 
} from 'lucide-react';

const QUALITY_STEPS = [
  {
    title: "Soil & Foundation Vetting",
    desc: "Before a single brick is laid, we test the earth. We ensure the soil bearing capacity can support your dream for generations.",
    icon: <Droplets />,
    detail: "Load Testing & Moisture Analysis"
  },
  {
    title: "The Steel Strength Audit",
    desc: "We only use primary TMT bars. Every batch is cross-verified for tensile strength and anti-corrosion coating.",
    icon: <ScanFace />,
    detail: "Fe550 Grade Verification"
  },
  {
    title: "Concrete Slump Testing",
    desc: "Our engineers perform on-site slump tests for every concrete pour to ensure the perfect water-to-cement ratio.",
    icon: <Microscope />,
    detail: "M25/M30 Grade Standards"
  },
  {
    title: "Laser-Guided Alignment",
    desc: "We use robotic laser levels to ensure every wall is perfectly vertical (plumb) and every floor is perfectly flat.",
    icon: <Ruler />,
    detail: "99.9% Geometric Precision"
  },
  {
    title: "Hidden Utility Mapping",
    desc: "Electrical and plumbing lines are pressure-tested and photographed before being concealed in walls.",
    icon: <ClipboardCheck />,
    detail: "Zero-Leakage Assurance"
  },
  {
    title: "7nd Stage Waterproofing",
    desc: "Not just one layer—seven. We treat every wet area with a multi-coat specialized polymer membrane.",
    icon: <CheckCircle2 />,
    detail: "10-Year Seepage Warranty"
  },
  {
    title: "Final 400-Point Inspection",
    desc: "Before handover, our QC head walks through with a 400-point checklist covering everything from paint finish to socket earthing.",
    icon: <HardHat />,
    detail: "White-Glove Handover"
  }
];

export default function QualityCommandCenter() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-6 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header */}
        <div className="md:mb-16 mb-3">
          
          
          <h2 className="text-xl lg:text-4xl font-medium text-[#2D2926] leading-tight tracking-tighter text-center">
            334+ QASCON <span className=" font-light text-[#A67153]">Quality Test.</span>
          </h2>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative">
          
          {/* The Glowing Connection Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#A67153] -translate-x-1/2 hidden md:block z-10 shadow-[0_0_15px_rgba(166,113,83,0.5)]"
          />

          <div className="md:space-y-12 space-10">
            {QUALITY_STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-4 lg:gap-0 mb-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                {/* Content Side */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'}`}>
                  <div className={`inline-flex items-center gap-2 md:mb-4 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <span className="text-[10px] font-black text-[#A67153] uppercase tracking-widest">{step.detail}</span>
                    <div className="w-8 h-[1px] bg-[#A67153]/30" />
                  </div>
                  <h3 className="text-xl lg:text-3xl font-semibold text-[#2D2926] md:mb-4 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-md ml-0 mr-0 i-even:ml-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Center Icon Node */}
                <div className="relative z-20 flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-16 h-16 rounded-2xl bg-[#2D2926] text-white flex items-center justify-center shadow-xl border-4 border-white group transition-colors hover:bg-[#A67153]"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {React.cloneElement(step.icon, { size: 24 })}
                    </div>
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#A67153]/5 rounded-full -z-10 animate-pulse" />
                </div>

                {/* Placeholder/Empty Side for Desktop Symmetry */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Stamp */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="md:mt-14 mt-6 flex flex-col items-center text-center"
        >
          <div className="md:p-8 p-4  rounded border border-dashed border-[#A67153]/30 bg-[#F8F5F2]">
            <h4 className="text-xl font-bold text-[#2D2926] mb-2">Quality is our Signature.</h4>
            <p className="text-sm text-gray-500">"We build every home as if our own family were moving in."</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}