'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Scale, ShieldCheck, ArrowRight } from 'lucide-react';

const STAMP_DUTY_FAQS = [
  {
    id: "sd-faq-01",
    question: "Is stamp duty calculated on the circle rate or the actual market value?",
    answer: "Stamp duty is calculated on whichever value is higher between the government's declared Circle Rate (ready reckoner rate) and the actual transaction value specified in your sale agreement. If you purchase a property below the circle rate, you will still be legally required to pay stamp duty based on the higher government circle rate valuation."
  },
  {
    id: "sd-faq-02",
    question: "Do women receive concessions or lower stamp duty rates in India?",
    answer: "Yes, to encourage women asset ownership, several Indian states offer a 1% to 2% concession on stamp duty if the property is registered solely in a woman's name or jointly with a woman as the primary co-owner. For example, in Delhi and Haryana, women pay a lower duty percentage compared to male buyers."
  },
  {
    id: "sd-faq-03",
    question: "Are stamp duty and registration fees covered under standard home loans?",
    answer: "According to strict RBI guidelines, commercial banks are generally restricted from including stamp duty, registration fees, and other peripheral documentation charges in the primary home loan evaluation value (LTV ratio). Buyers must arrange this legal tax capital as a separate, out-of-pocket upfront cash layout."
  },
  {
    id: "sd-faq-04",
    question: "What happens if I underpay or fail to pay stamp duty on a property transaction?",
    answer: "An under-stamped document is not legally admissible as evidence in a court of law during property or boundary disputes. Furthermore, state revenue authorities have the legal mandate to impound under-stamped deeds and penalize the buyer with compounding interest penalties ranging from 2% up to 10% per month on the deficit amount."
  },
  {
    id: "sd-faq-05",
    question: "Is stamp duty applicable on gifts deeds or ancestral property transfers?",
    answer: "Yes, transferring property via a Gift Deed attracts stamp duty, though many states (such as Maharashtra and Uttar Pradesh) offer heavily discounted or minimal concession rates if the transfer happens directly between immediate blood relatives (parents, spouse, siblings, or children)."
  },
  {
    id: "sd-faq-06",
    question: "Can I claim tax tax benefits on stamp duty and registration charges?",
    answer: "Yes, under Section 80C of the Income Tax Act, individual buyers can claim a deduction for expenses incurred toward stamp duty, registration charges, and legal documentation fees, up to a maximum cap of ₹1.5 Lakhs. This tax benefit is only valid in the specific financial year the property was registered."
  },
  {
    id: "sd-faq-07",
    question: "What is the difference between E-stamping and physical stamp paper?",
    answer: "Physical stamp paper requires manual notary execution. E-stamping is a secure, digital method of paying stamp duty online through government-authorized portals (like Stock Holding Corporation of India Limited - SHCIL). E-stamps are tamper-proof, trackable via unique bar codes, and accepted across almost all states and UTs."
  },
  {
    id: "sd-faq-08",
    question: "Are registration charges fixed or a percentage of the asset value?",
    answer: "In most regions, registration fees are calculated as a flat 1% of the total property value. However, several progressive states implement a hard ceiling cap (e.g., maximum ₹30,000 to ₹50,000) to keep high-value residential transactions from incurring excessive administrative overheads."
  },
  {
    id: "sd-faq-09",
    question: "Does stamp duty apply on under-construction apartments bought from developers?",
    answer: "Yes, stamp duty is mandatory for under-construction flats. In addition to stamp duty, buyers must calculate applicable GST metrics. Some states offer temporary tax waivers or lower rates during specialized real estate cycles, but the legal requirement to register the agreement remains absolute."
  },
  {
    id: "sd-faq-10",
    question: "Can I get a refund on stamp duty if my property transaction gets cancelled?",
    answer: "If your builder agreement or sale deed is officially canceled before execution, several state governments allow you to apply for a stamp duty refund. This usually requires submitting a formal application within 6 months of the stamp paper issue date, and the state typically deducts a small administrative fee (usually 1% to 10% of the duty paid)."
  }
];

export default function StampDutyFAQs() {
  const [activeAccordion, setActiveAccordion] = useState(0); // Opens the first question by default

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="text-[#2D2926] font-sans antialiased ">
      <div className="max-w-4xl mx-auto ">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center space-y-3 mb-6">
          
          <h2 className="text-3xl  font-bold tracking-tight text-[#2D2926]">
            Registry & Compliance <span className=" font-light text-[#A67153]">FAQs</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Get authoritative answers on property registration laws, tax concessions, Section 80C brackets, and state circle rate calculations.
          </p>
        </div>

        {/* ================= 10-ACCORDION STACK ================= */}
        <div className="space-y-4">
          {STAMP_DUTY_FAQS.map((item, index) => {
            const isCurrentlyOpen = activeAccordion === index;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isCurrentlyOpen 
                    ? 'border-[#A67153]/30 shadow-lg shadow-black/[0.005]' 
                    : 'border-gray-200/60 hover:border-gray-300 shadow-sm'
                }`}
              >
                {/* Click Interaction Trigger Bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none select-none group"
                >
                  <div className="flex items-start gap-4 md:gap-6 pr-4">
                    {/* ID Tracking Counter */}
                    <span className={`text-xs md:text-sm font-black tracking-wider transition-colors pt-0.5 ${
                      isCurrentlyOpen ? 'text-[#A67153]' : 'text-gray-300 group-hover:text-[#2D2926]'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    <h3 className={`text-sm md:text-base font-bold tracking-tight leading-snug transition-colors ${
                      isCurrentlyOpen ? 'text-[#2D2926]' : 'text-gray-600 group-hover:text-[#2D2926]'
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Icon Rotator Bubble */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isCurrentlyOpen ? 'bg-[#A67153] text-white rotate-180' : 'bg-[#F8F5F2] text-gray-400 group-hover:text-[#2D2926]'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Smooth Animated Height Body Wrapper */}
                <AnimatePresence initial={false}>
                  {isCurrentlyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-14 md:pl-[4.5rem] border-t border-gray-50 pt-0">
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}