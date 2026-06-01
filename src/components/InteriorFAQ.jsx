'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, PhoneCall } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';

const FAQS = [
  {
    question: "How long does a typical home interior project take?",
    answer: "For a standard 3BHK, it usually takes 45–60 working days from the moment the designs are finalized. Luxury projects with custom stone work or intricate carpentry may take 75–90 days."
  },
  {
    question: "Do you offer a warranty on the furniture and fittings?",
    answer: "Absolutely. Trayaksh offers a comprehensive 10-year warranty on all modular woodwork and a 1-year service warranty for on-site installations."
  },
  {
    question: "Can I choose my own materials or brands?",
    answer: "Yes! While we have curated 'Basic' and 'Premium' packages, we are a bespoke studio. You can work with our designers to select specific brands for laminates, hardware (like Hafele or Hettich), and electrical fixtures."
  },
  {
    question: "Is the 3D visualization included in the package?",
    answer: "Every Trayaksh project starts with high-fidelity 3D renders. This ensures you see exactly what your home will look like—down to the lighting and textures—before we even buy the first piece of wood."
  },
  {
    question: "Do you handle civil work like flooring and painting?",
    answer: "We are an end-to-end solution provider. From breaking walls for spatial planning to electrical, plumbing, false ceilings, and final deep cleaning, we manage it all."
  }
];

export default function InteriorFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <section className="py-10 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE: Header & Support Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] mb-4 block">Information Hub</span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#2D2926] mb-4 leading-[1.2]">
                Common <span className="font-light">Questions</span>
              </h2>
              <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
                Everything you need to know about the Trayaksh interior experience. Can't find what you're looking for?
              </p>

              <div className="bg-[#2D2926] p-8 rounded-[2.5rem] text-white shadow-2xl">
                <p className="text-xl font-bold mb-6">Still have doubts?</p>
                <div className="space-y-4">
                  <a href="tel:+918885499322" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#A67153] transition-all">
                      <PhoneCall size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest">Call Expert</p>
                      <p className="text-sm font-bold">+91 88854 99322</p>
                    </div>
                  </a>
                  <button 
                   onClick={openModal}
                    className="w-full mt-4 py-4 bg-[#A67153] rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#2D2926] transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={14} /> Chat With Expert
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-xl transition-all duration-500 border ${
                  activeIndex === i ? 'bg-white border-transparent shadow-xl' : 'bg-transparent border-gray-200'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className={`text-lg font-bold tracking-tight transition-colors ${activeIndex === i ? 'text-[#A67153]' : 'text-[#2D2926]'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeIndex === i ? 'bg-[#A67153] text-white rotate-0' : 'bg-gray-100 text-[#2D2926] rotate-90'
                  }`}>
                    {activeIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}