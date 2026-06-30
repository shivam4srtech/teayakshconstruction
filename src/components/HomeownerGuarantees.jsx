'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Banknote, Timer, Users, HardHat, Heart, X, ChevronRight, CheckCircle } from 'lucide-react';
import { HiArrowLongRight } from "react-icons/hi2";

const GUARANTEES = [
  {
    title: "The Price is The Price",
    desc: "No 'surprise' bills or hidden fees. What we quote is exactly what you pay.",
    icon: <Banknote />,
    color: "from-[#0F172A] to-[#223A72]",
    detail: "Our 100% accurate quoting engine breaks down every brick and bag of cement so there are no cost overruns midway."
  },
  {
    title: "Your Safety Net",
    desc: "We keep your money in a secure vault. Builders get paid only after you approve.",
    icon: <ShieldCheck />,
    color: "from-[#1E3F65] to-[#2B4B70]",
    detail: "Using an Escrow system, your money is never at risk. If work isn't done to standard, the money stays with you."
  },
  {
    title: "Move In On Time",
    desc: "We hate delays. If we miss your move-in date, we pay you back for every day lost.",
    icon: <Timer />,
    color: "from-[#F05A29] to-[#8A3418]",
    detail: "We back our timelines with a 2% project value penalty. It's our 'Late Fee' to ensure you get your keys on time."
  },
  {
    title: "Your Personal Squad",
    desc: "A dedicated team of architects and managers who work for you, not the builder.",
    icon: <Users />,
    color: "from-[#0F6098] to-[#01396A]",
    detail: "Your Project Manager acts as your eyes and ears on site, ensuring every detail matches the plan."
  },
  {
    title: "The 1% Builders",
    desc: "We vet hundreds of contractors and only pick the best ones to touch your walls.",
    icon: <HardHat />,
    color: "from-[#0F161C] to-[#466682]",
    detail: "Our 6-stage vetting process checks technical skill, financial health, and past client happiness."
  },
  {
    title: "A 10-Year Promise",
    desc: "We stand by your home's strength for a full decade. We're in this for the long run.",
    icon: <Heart />,
    color: "from-[#0B0031] to-[#295F81]",
    detail: "From structural issues to seepage, our 10-year warranty covers the soul of your home long after we leave."
  }
];

export default function GuaranteesSlider() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end md:mb-12 mb-4 md:gap-8 gap-4">
          <div className="">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4 mb-1">
              Our Promice
            </p>
            <h2 className="text-xl lg:text-4xl font-medium text-[#2D2926] leading-tight tracking-tighter">
              Guarantees that let you <span className=" font-light text-[#A67153]">sleep better at night.</span>
            </h2>
          </div>

          {/* <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="p-4 rounded-full border border-gray-200 bg-white hover:bg-[#2D2926] hover:text-white transition-all shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="p-4 rounded-full border border-gray-200 bg-white hover:bg-[#2D2926] hover:text-white transition-all shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>

        {/* The Slider Track */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:pb-12 pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GUARANTEES.map((item, i) => (
            <motion.div
              key={i}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.33%-16px)] snap-start"
            >
              <div className={`relative md:h-[350px] h-[300] rounded-[2.5rem] md:p-10 p-4 flex flex-col justify-between bg-gradient-to-br ${item.color} text-white shadow-xl hover:shadow-2xl transition-all group overflow-hidden`}>
                <div className="absolute top-[10%] left-[40%]   opacity-[.05] pointer-events-none text-[200px] text-white">{i+1}</div>
                
                <div>
                  <div className='flex items-center md:mb-8 mb-4 justify-between'>
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center  border border-white/20">
                        {item.icon}
                      </div>
                      <div className='opacity-[.08] shrink-0'>
                          <HiArrowLongRight  size={80} />
                      </div>
                  </div>
                  
                  <h3 className="md:text-2xl text-xl font-bold md:mb-4 mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Verified Promise</span>
                  <button 
                    onClick={() => setSelectedIdx(i)}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F05A29] bg-white cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-lg"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STUNNING MODAL */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="absolute inset-0 bg-[#2D2926]/90 backdrop-blur-sm" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`h-32 bg-gradient-to-r ${GUARANTEES[selectedIdx].color} md:p-10 p-5 flex items-end`}>
                 <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    {GUARANTEES[selectedIdx].icon}
                 </div>
              </div>

              <div className="md:p-10 pt-5 p-5">
                <h3 className="md:text-3xl text-2xl font-bold text-[#2D2926] mb-4">Why you can trust us</h3>
                <p className="text-gray-500 md:leading-relaxed leading-[1.3] md:mb-8 mb-4">
                  {GUARANTEES[selectedIdx].detail}
                </p>

                <div className="space-y-4 bg-[#F8F5F2] p-6 rounded-2xl">
                  <div className="flex gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <p className="text-sm font-medium text-[#2D2926]">Legal contract signed before work starts.</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <p className="text-sm font-medium text-[#2D2926]">Third-party quality audits at every stage.</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedIdx(null)}
                  className="w-full mt-8 py-4 bg-[#2D2926] text-white rounded-xl font-bold uppercase text-[10px] tracking-[0.2em]"
                >
                  Got it, thank you
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}