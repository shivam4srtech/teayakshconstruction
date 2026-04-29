'use client';
import { IoDiamondOutline, IoColorPaletteOutline, IoConstructOutline, IoKeyOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi2';

const steps = [
  {
    number: "01",
    title: "Fill Form & Meet Expert",
    desc: "Fill a quick form, and our team will call you within 20 minutes. Then meet our expert and architect to discuss your needs and get an initial price estimate.",
    icon: <HiOutlineLightBulb className="text-3xl" />,
  },
  {
    number: "02",
    title: "Pay Token & Plan",
    desc: "Pay a small token to confirm your booking. We then survey your site, run tests, and create drawings and 3D models for your review.",
    icon: <IoColorPaletteOutline className="text-3xl" />,
  },
  {
    number: "03",
    title: "Sign & Start",
    desc: "Sign a transparent contract with clear timelines and milestone-based payments. Construction begins with daily quality checks.",
    icon: <IoDiamondOutline className="text-3xl" />,
  },
  {
    number: "04",
    title: "Track Progress",
    desc: "Monitor everything in real-time on our app with daily quality check updates and full progress tracking.",
    icon: <IoConstructOutline className="text-3xl" />,
  },
  {
    number: "05",
    title: "Delivered with Warranty",
    desc: "After final inspections, your home is handed over with a 10-year warranty for complete peace of mind.",
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
            From Vision to <span className=". text-brand/80">Reality</span>
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