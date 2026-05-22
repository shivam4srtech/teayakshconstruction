'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { useModalStore } from '@/store/useModalStore';

const FAQ_DATA = [
  {
    id: "faq-01",
    question: "Can I customize an existing floor plan layout to fit my exact plot dimensions?",
    answer: "Yes, absolutely. Every template layout in our catalog serves as an architectural baseline. Our structural engineering board can re-scale, mirror, or completely adjust any blueprint configuration to match your exact site setback restrictions and plot dimensions."
  },
  {
    id: "faq-02",
    question: "Are all the listed floor plans 100% Vastu compliant?",
    answer: "Most of our premier configurations are designed following scientific Vastu rules (such as placing the kitchen in the Agneya/Southeast zone and master suites in the Nairrutya/Southwest zone). If you select a layout that does not match your specific road facing direction, we can run a quick Vastu orientation adjustment for you."
  },
  {
    id: "faq-03",
    question: "What is included in the premium CAD blueprint download package?",
    answer: "The complete engineering dataset includes comprehensive working architectural drawings, load-bearing structural center-line framing blueprints, detailed electrical layout maps, internal plumbing routings, and a highly precise material estimation Bill of Quantities (BOQ)."
  },
  {
    id: "faq-04",
    question: "How do adjustments to the floor plan affect the overall civil construction cost?",
    answer: "Minor alterations like moving internal non-load-bearing partition walls have a negligible impact on costs. However, adding structural cantilevers, changing column positions, or expanding double-height slabs will require recalculated rebar schedules and structural civil concrete estimations."
  },
  {
    id: "faq-05",
    question: "Will these drawings suffice for obtaining local municipal building approvals?",
    answer: "Our blueprints are drafted strictly adhering to standard National Building Codes (NBC). However, since municipal laws vary by zone and city corporation, our local liaison engineers will adjust your chosen layout to match specific FSI rules and setbacks before submission."
  }
];

export default function FloorPlanFAQs() {
  // Track currently active expanded accordion row index
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className="text-[#2D2926]">
      <div className="max-w-4xl mx-auto">
        
        {/* COMPONENT HEADER STYLING */}
        <div className="text-center space-y-3 mb-4">
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2D2926]">
            Frequently Asked <span className="font-light text-[#A67153]">Queries</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Clear, transparent answers regarding Vastu compliance, custom planning modifications, and structural blueprint sets.
          </p>
        </div>

        {/* ACCORDION LOOP MATRIX */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-[#A67153]/30 shadow-md shadow-black/[0.005]' : 'border-gray-200/60 hover:border-gray-300'
                }`}
              >
                {/* Accordion Click Trigger Header Bar */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-3 text-left focus:outline-none select-none group"
                >
                  <div className="flex items-start gap-4 md:gap-6 pr-4">
                    {/* Minimalist Index Indicator Counter */}
                    <span className={`text-xs md:text-sm font-black tracking-wider transition-colors pt-0.5 ${
                      isOpen ? 'text-[#A67153]' : 'text-gray-300 group-hover:text-[#2D2926]'
                    }`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    
                    <h3 className={`text-sm md:text-base font-bold tracking-tight leading-snug transition-colors ${
                      isOpen ? 'text-[#2D2926]' : 'text-gray-600 group-hover:text-[#2D2926]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Modern Chevron Animation Icon */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-[#F8F5F2] ${
                    isOpen ? 'bg-[#A67153]  rotate-180' : 'text-gray-400 group-hover:text-[#2D2926]'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Animated Inner Description Segment */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-14 md:pl-[3.7rem] border-t border-gray-50">
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CALL-TO-ACTION PROMPT FOOTER */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-gray-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#F8F5F2] text-[#A67153] flex items-center justify-center shrink-0">
              <MessageSquare size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#2D2926]">Have a unique custom requirement?</h4>
              <p className="text-[11px] text-gray-400">Our senior design consultants are online right now to guide you.</p>
            </div>
          </div>
          <button 
            className="bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors duration-300 shrink-0"
            onClick={openModal}
            >
            Start Live Session
          </button>
        </div>

      </div>
    </section>
  );
}