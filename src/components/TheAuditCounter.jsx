'use client';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ClipboardCheck, ShieldAlert, Award, Hammer } from 'lucide-react';

const COUNTERS = [
  {
    icon: <ClipboardCheck size={24} />,
    value: 470,
    suffix: "+",
    label: "Quality Benchmarks",
    sub: "Rigorous structural and material compliance checks performed daily on-site."
  },
  {
    icon: <ShieldAlert size={24} />,
    value: 0,
    suffix: "%",
    label: "Material Substitution",
    sub: "Absolute brand honesty. Zero unapproved or generic product replacements."
  },
  {
    icon: <Award size={24} />,
    value: 100,
    suffix: "%",
    label: "Vetted Blueprints",
    sub: "Every structural design is cross-certified by elite IIT/NIT structural consultants."
  },
  {
    icon: <Hammer size={24} />,
    value: 12,
    suffix: "mm",
    label: "Minimum Rebar Standard",
    sub: "Heavy-gauge foundational steel reinforcement framework standard across all floors."
  }
];

export default function TheAuditCounter() {
  return (
    <section className="py-5 bg-[#F8F5F2] text-[#2D2926] overflow-hidden relative">
      {/* Subtle Micro-Grid Pattern for Architectural Alignment Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d292605_1px,transparent_1px),linear-gradient(to_bottom,#2d292605_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        
        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-6">
          <div className="lg:col-span-9 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] block">
              Operational Transparency
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-[1.2] text-[#2D2926]">
              The Engineering <span className="font-light text-[#A67153]">Audit Metrics</span>
            </h2>
          </div>
          
        </div>

        {/* Counters Dashboard Grid (Light Divider Frame) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200/60 rounded-[2.5rem] overflow-hidden border border-gray-200/60 shadow-xl shadow-black/[0.02]">
          {COUNTERS.map((counter, idx) => (
            <CounterCard key={idx} counter={counter} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Individual Counting Card Component using Framer Motion viewport triggers
function CounterCard({ counter }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, counter.value, { 
        duration: 2, 
        ease: [0.22, 1, 0.36, 1] 
      });
      return () => controls.stop();
    }
  }, [isInView, counter.value]);

  return (
    <div className="bg-white md:p-10 p-4 flex flex-col justify-between space-y-8 hover:bg-gray-50/50 transition-colors duration-300">
      
      {/* Icon Box wrapper */}
      <div className="text-[#A67153] w-10 h-10 rounded-xl bg-[#F8F5F2] flex items-center justify-center border border-gray-100 mb-2">
        {counter.icon}
      </div>

      {/* Numerical Data & Label */}
      <div className="space-y-3">
        <div ref={nodeRef} className="text-3xl md:text-5xl font-medium tracking-tight text-[#2D2926] flex items-baseline">
          <motion.span>{rounded}</motion.span>
          <span className="text-2xl font-light text-[#A67153] ml-0.5">{counter.suffix}</span>
        </div>
        
        <h3 className="text-xs font-black text-[#2D2926] tracking-wider uppercase">
          {counter.label}
        </h3>
        
        <p className="text-gray-400 text-xs leading-relaxed">
          {counter.sub}
        </p>
      </div>

    </div>
  );
}