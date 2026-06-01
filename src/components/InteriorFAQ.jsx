'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, PhoneCall } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';

const FAQS = [
  {
    question: "What interior design services does Trayaksh Construction provide?",
    answer: "We provide complete residential, commercial, hospital, and medical interior solutions including modular kitchens, wardrobes, false ceilings, reception areas, clinic interiors, patient rooms, lighting, space planning, furniture design, wall finishes, and turnkey interior execution."
  },
  {
    question: "How much does home interior work cost?",
    answer: "Interior costs depend on the size of the space, materials, design style, and customization requirements. We provide transparent quotations tailored to your budget and preferences."
  },
  {
    question: "Do you offer customized interior designs?",
    answer: "Yes. Every interior project is designed according to your lifestyle, space requirements, storage needs, and design preferences."
  },
  {
    question: "How long does it take to complete interior work?",
    answer: "The timeline depends on the scope of work and project size. Most home interior projects are completed within a few weeks to a few months."
  },
  {
    question: "Do you provide modular kitchen designs?",
    answer: "Yes. We design and install modern modular kitchens with smart storage, durable materials, and functional layouts tailored to your cooking and lifestyle needs."
  },
  {
    question: "Can I choose the materials and finishes for my interiors?",
    answer: "Absolutely. We help you select materials, colors, laminates, flooring, lighting, and finishes that match your taste and budget."
  },
  {
    question: "Do you provide 3D interior design concepts before execution?",
    answer: "Yes. We provide design concepts and visualizations so you can understand the final look and make changes before execution begins."
  },
  {
    question: "How do you ensure the quality of interior work?",
    answer: "We use quality-tested materials, experienced craftsmen, and detailed supervision to ensure premium finishing and long-lasting interiors."
  },
  {
    question: "Will I receive regular updates during the project?",
    answer: "Yes. Our team shares regular updates, progress reports, and site discussions throughout the interior execution process."
  },
  {
    question: "Why should I choose Trayaksh Construction for interiors?",
    answer: "Trayaksh Construction offers customized designs, transparent pricing, quality workmanship, timely delivery, and end-to-end interior solutions that combine functionality with modern aesthetics."
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
                Everything you need to know about the Trayaksh interior experience. Can not find what you are looking for?
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
