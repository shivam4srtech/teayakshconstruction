'use client';
import { cloneElement, useEffect, useRef, useState } from 'react';
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
    title: "7th Stage Waterproofing",
    desc: "Not just one layer—seven. We treat every wet area with a multi-coat specialized polymer membrane.",
    icon: <CheckCircle2 />,
    detail: "10-Year Seepage Warranty"
  },
  {
    title: "Final 334 Point Inspection",
    desc: "Before handover, our QC head walks through with a 334 point checklist covering everything from paint finish to socket earthing.",
    icon: <HardHat />,
    detail: "White-Glove Handover"
  }
];
export default function QualityCommandCenter() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(() => new Set());

  useEffect(() => {
    const container = containerRef.current;
    const items = itemRefs.current.filter(Boolean);

    if (!container || items.length === 0) return undefined;

    const sectionObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-15% 0px -20%", threshold: 0.1 }
    );

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.getAttribute("data-quality-index"));
          setVisibleItems((current) => {
            if (current.has(index)) return current;
            const next = new Set(current);
            next.add(index);
            return next;
          });
          itemObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.18 }
    );

    sectionObserver.observe(container);
    items.forEach((item) => itemObserver.observe(item));

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-6 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header */}
        <div className="md:mb-16 mb-3">
          
          
          <h2 className="text-xl lg:text-4xl font-medium text-[#2D2926] leading-tight tracking-tighter text-center">
            334+ Construction <span className=" font-light text-[#A67153]">Quality Test.</span>
          </h2>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative">
          
          {/* The Glowing Connection Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block" />
          <div
            className={`absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] origin-top -translate-x-1/2 bg-[#A67153] hidden md:block z-10 shadow-[0_0_15px_rgba(166,113,83,0.5)] transition-transform duration-1000 ease-out motion-reduce:transition-none ${
              sectionVisible ? 'scale-y-100' : 'scale-y-0'
            }`}
          />

          <div className="md:space-y-12 space-10">
            {QUALITY_STEPS.map((step, i) => (
              <div
                key={i}
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
                data-quality-index={i}
                style={{ transitionDelay: visibleItems.has(i) ? `${Math.min(i * 70, 280)}ms` : '0ms' }}
                className={`flex flex-col md:flex-row items-center gap-4 lg:gap-0 mb-4 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
                  visibleItems.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
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
                  <div
                    className="w-16 h-16 rounded-2xl bg-[#2D2926] text-white flex items-center justify-center shadow-xl border-4 border-white group transition-[background-color,transform] duration-500 ease-out hover:bg-[#A67153] hover:scale-110 hover:rotate-[360deg] motion-reduce:hover:rotate-0 motion-reduce:hover:scale-100"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {cloneElement(step.icon, { size: 24 })}
                    </div>
                  </div>
                  <div className="qcc-soft-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#A67153]/5 rounded-full -z-10 animate-pulse" />
                </div>

                {/* Placeholder/Empty Side for Desktop Symmetry */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Stamp */}
        <div
          className={`md:mt-14 mt-6 flex flex-col items-center text-center transition-[opacity,transform] duration-700 ease-out motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
            sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="md:p-8 p-4  rounded border border-dashed border-[#A67153]/30 bg-[#F8F5F2]">
            <h4 className="text-xl font-bold text-[#2D2926] mb-2">Quality is our Signature.</h4>
            <p className="text-sm text-gray-500">&ldquo;We build every home as if our own family were moving in.&rdquo;</p>
          </div>
        </div>

      </div>
    </section>
  );
}
