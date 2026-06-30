'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Zap, PieChart, ShieldCheck, Coins } from 'lucide-react';

export default function CalculatorCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry], currentObserver) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        currentObserver.disconnect();
      },
      { rootMargin: "0px 0px -15%", threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="md:py-10 py-5 pt-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="relative bg-[#2D2926] md:rounded-[3rem] rounded md:p-8 p-4 py-8 lg:py-10 lg:p-20 overflow-hidden shadow-2xl">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67153]/10 rounded-full blur-[120px] -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -ml-20 -mb-20" />

          <div className="grid lg:grid-cols-2 md:gap-14 gap-10 items-center relative z-10">
            
            {/* Left: Content */}
            <div className="space-y-8">
              <div
                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-3 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`}
              >
                <Zap size={16} className="text-[#A67153]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Instant Budgeting Tool</span>
              </div>

              <h2
                className={`text-xl md:text-3xl lg:text-4xl font-medium text-white leading-[1.3] mb-3 transition-[opacity,transform] duration-700 delay-100 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                Know your <span className="text-[#A67153]">Home Cost</span> <br /> 
                in under 60 seconds.
              </h2>

             

              <div className="grid grid-cols-2 gap-6 pb-4 md:mb-3 mb-0">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-[#A67153]/20 flex items-center justify-center text-[#A67153] md:mt-1">
                    <ShieldCheck size={12} />
                  </div>
                  <p className="md:text-sm text-[.6rem] text-white/80 font-medium">No Hidden Costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-[#A67153]/20 flex items-center justify-center text-[#A67153] mt-1">
                    <PieChart size={12} />
                  </div>
                  <p className="md:text-sm text-[.6rem] text-white/80 font-medium">Material-wise Split</p>
                </div>
              </div>

              <Link 
                className="group flex items-center gap-4 bg-[#A67153] text-white md:text-left text-center md:px-10 p-3 md:py-6 md:rounded-2xl rounded font-bold uppercase text-xs tracking-[0.3em] shadow-xl shadow-[#A67153]/20"
                href='/cost-estimator'
              >
                Start Calculating <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Right: Visual Calculator Card */}
            <div
              className={`relative [perspective:1000px] transition-[opacity,transform] duration-1000 delay-150 ease-out motion-reduce:opacity-100 motion-reduce:[transform:rotateY(0deg)] motion-reduce:transition-none ${
                isVisible ? 'opacity-100 [transform:rotateY(0deg)]' : 'opacity-0 [transform:rotateY(12deg)]'
              }`}
            >
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-4 py-8 lg:p-12 md:rounded-[2.5rem] rounded shadow-3xl">
                {/* Simulated UI of the Calculator */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2D2926]">
                        <Calculator size={20} />
                      </div>
                      <span className="text-white font-bold text-sm tracking-widest">ESTIMATOR</span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-20 bg-white/20 rounded" />
                    <div className="h-12 w-full bg-white/5 border border-white/10 rounded-xl flex items-center px-4 text-white font-medium">
                      2500 Sq. Ft.
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-white/20 rounded" />
                    <div className="grid grid-cols-3 gap-3">
                      <Link href='/cost-estimator' className="h-10 bg-[#A67153] rounded-lg border border-[#A67153]/50 flex items-center justify-center text-[10px] font-bold text-white uppercase">Basic</Link>
                      <Link href='/cost-estimator' className="h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40 uppercase">Premium</Link>
                    <Link href='/cost-estimator' className="h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40 uppercase">Luxury</Link>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Estimated Budget</p>
                      <p className="md:text-3xl text-xl font-bold text-white">₹ 42.5 L*</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2D2926]">
                      <Coins size={24} />
                    </div>
                  </div>
                </div>

                {/* Decorative Cursor Mockup */}
                <div
                  className="calculator-cursor absolute pointer-events-none"
                >
                  <div className="w-5 h-5 bg-[#A67153] rounded-full border-4 border-white shadow-lg" />
                </div>
              </div>
              
              {/* Floaties */}
              <div
                className="calculator-floaty absolute -top-6 md:-right-6 -right-1 bg-white p-4 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] font-black text-[#A67153]">Approximate</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
