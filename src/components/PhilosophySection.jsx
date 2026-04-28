'use client';
import { IoDiamondOutline, IoColorPaletteOutline, IoConstructOutline, IoKeyOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi2';

const steps = [
  {
    number: "01",
    title: "Vision & Concept",
    desc: "We begin with a blank canvas and your aspirations. Our team deep-dives into your lifestyle or business needs to draft the initial architectural DNA.",
    icon: <HiOutlineLightBulb className="text-3xl" />,
  },
  {
    number: "02",
    title: "Meticulous Design",
    desc: "Luxury is in the details. We produce 3D visualizations and material palettes that blend aesthetics with structural integrity.",
    icon: <IoColorPaletteOutline className="text-3xl" />,
  },
  {
    number: "03",
    title: "Premium Sourcing",
    desc: "From Italian marble to sustainable timber, we source only the finest materials from our global network of trusted artisans.",
    icon: <IoDiamondOutline className="text-3xl" />,
  },
  {
    number: "04",
    title: "Precision Execution",
    desc: "Our master builders and engineers take over, ensuring every millimeter aligns with the blueprint under strict quality control.",
    icon: <IoConstructOutline className="text-3xl" />,
  },
  {
    number: "05",
    title: "The Grand Reveal",
    desc: "Handing over the keys to your dream. We ensure a seamless transition into a space that is masterfully crafted for generations.",
    icon: <IoKeyOutline className="text-3xl" />,
  },
];

export default function PhilosophySection() {
  return (
    <section className="relative bg-brand-light py-10 lg:py-20 overflow-hidden">
      {/* Ghost Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[12rem] lg:text-[18rem] font-bold tracking-tighter rotate-90 lg:rotate-0">
          PROCESS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase">
            The Teayaksh Way
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-dark tracking-tight">
            From Vision to <span className="italic text-brand/80">Reality</span>
          </h2>
          <p className="text-brand-dark/60 text-sm leading-relaxed">
            A systematic approach to luxury. We don't just build structures; we curate experiences through a refined five-step methodology.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand/20 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`flex flex-col lg:flex-row items-center justify-between lg:mb-24 group ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[42%] space-y-4 text-center lg:text-left">
                  <div className={`flex items-center gap-4 justify-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    <span className="text-5xl lg:text-7xl font-bold text-brand/10 group-hover:text-brand/20 transition-colors duration-500">
                      {step.number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-medium text-brand-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-brand-dark/60 leading-relaxed text-sm lg:text-base ${index % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    {step.desc}
                  </p>
                </div>

                {/* Central Icon/Point */}
                <div className="relative z-10 my-8 lg:my-0">
                  <div className="w-16 h-16 rounded-full bg-white border border-brand/20 shadow-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-brand/20 animate-ping -z-10 group-hover:opacity-0" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[42%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA within Timeline */}
        <div className="mt-12 text-center">
          <button className="bg-brand-dark text-white px-12 py-5 text-[11px] font-sans font-bold uppercase tracking-[0.2em] hover:bg-brand transition-all cursor-pointer shadow-2xl">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}