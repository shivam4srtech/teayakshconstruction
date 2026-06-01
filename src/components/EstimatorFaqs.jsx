"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { MdVerified } from "react-icons/md";
import { useModalStore } from '@/store/useModalStore';

const FAQ_DATA = [
  {
    q: "What exactly is this Construction Cost Estimator?",
    a: "Think of it as your digital financial architect. It's a smart tool designed by Trayaksh Construction to give you a realistic preview of your building expenses. It analyzes your city's local market rates, your plot size, and your choice of finishes to create a transparent budget before you even break ground."
  },
  {
    q: "How accurate are these numbers for my specific city?",
    a: "We don't believe in generic guesses. Our estimator uses real-time market data specific to cities like Chennai, Bangalore, and Hyderabad. While the final quote depends on site-specific soil conditions and final architectural drawings, these estimates are typically 90-95% aligned with current Trayaksh Construction project benchmarks."
  },
  {
    q: "Is there a fee to use this tool or start a consultation?",
    a: "Not at all. We believe transparency shouldn't have a price tag. The estimator is completely free to use. Once you have your estimate, you can jump on a discovery call with a Trayaksh Construction expert to refine your plan—also at no initial cost."
  },
  {
    q: "How do your pricing packages (Basic to Luxury) actually work?",
    a: "We’ve modularized luxury. Every package at Trayaksh Construction represents a different tier of material quality—from reliable, durable basics to hand-picked Luxury finishes. The beauty of our system is flexibility; you can choose a 'Classic' structure but upgrade to 'Luxury' flooring. It’s like a shopping cart for your home."
  },
  {
    q: "Does Trayaksh Construction handle the headache of government approvals?",
    a: "Building a home shouldn't feel like a legal battle. While we are a construction firm, we have a specialized network of partners who handle the municipal liaisoning and building approvals for you. We ensure your journey from 'blueprint' to 'approved' is completely hassle-free."
  },
  {
    q: "What kind of quality checks can I expect on-site?",
    a: "Quality isn't a goal; it's our standard. Trayaksh Construction implements a rigorous multi-point quality assessment system. This includes over 334+ distinct checks performed at every stage—from foundation pouring to the final coat of paint—ensuring your home stands strong for generations."
  },
  {
    q: "What if I want a specific brand of tiles or paint not in your list?",
    a: "Your home should reflect your soul. Our packages are intentionally flexible. If you have your heart set on a specific Italian marble or a niche paint brand, our technical consultants simply adjust the module in your estimate. At Trayaksh Construction, 'custom' is our favorite word."
  }
];

export default function EstimatorFaqs() {
  const [activeFaq, setActiveFaq] = useState(0);
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className="py-10  bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center md:mb-6 mb-3">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-[#A67153]/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#A67153]">Support & Clarity</span>
            <span className="w-10 h-[1px] bg-[#A67153]/40" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium text-[#2D2926] tracking-tighter">
            Common <span className=" font-light text-[#A67153]">Questions</span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-500 md:rounded-xl rounded border shrink-0 ${
                activeFaq === i 
                ? 'bg-[#F8F5F2] border-[#A67153]/20 shadow-xl shadow-[#A67153]/5' 
                : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex items-center justify-between md:p-4 p-3 text-left"
              >
                <div className="flex items-center md:gap-5 gap-2">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeFaq === i ? 'bg-[#A67153] text-white rotate-[360deg]' : 'bg-gray-50 text-gray-400'
                  }`}>
                    <HelpCircle size={16} />
                  </div>
                  <span className={`text-sm font-bold tracking-tight transition-colors ${
                    activeFaq === i ? 'text-[#2D2926]' : 'text-gray-500'
                  }`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`transition-all duration-300 ${activeFaq === i ? 'text-[#A67153]' : 'text-gray-300'}`}>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="md:px-4 md:pb-4 px-3 pb-3 ">
                      <div className="h-[1px] w-full bg-[#A67153]/10 mb-1" />
                      <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                         <span className="flex gap-2 items-center text-[9px] font-black uppercase tracking-widest text-[#A67153] px-3 py-1 bg-[#A67153]/5 rounded-full">
                           Verified Answer <MdVerified size={14} />
                         </span>
                         {/* <button className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#2D2926] transition-colors">
                           Ask a follow up
                         </button> */}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Floating Contact Card */}
        <div className="mt-4 md:p-6 p-4 rounded-[1rem] bg-[#2D2926] text-white flex flex-col md:flex-row items-center justify-between md:gap-8 gap-4 relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="md:text-2xl text-xl font-bold mb-2">Still have a specific query?</h3>
              <p className="text-white/50 text-sm">Our structural experts are available for a 1-on-1 walkthrough.</p>
           </div>
           <button 
             onClick={openModal}
             className="relative z-10 px-8 py-4 bg-[#A67153] rounded text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-black/20"
           >
             Speak with an Expert
           </button>
           {/* Decorative background circle */}
           <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#A67153]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}