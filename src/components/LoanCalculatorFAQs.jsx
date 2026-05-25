'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight, Landmark } from 'lucide-react';

const CALCULATOR_FAQS = [
  {
    id: "faq-01",
    question: "What is the exact mathematical formula used to calculate Home Loan EMIs?",
    answer: "Our calculator utilizes the standard banking amortization equation: EMI = [P x r x (1+r)^n] / [((1+r)^n) - 1]. Here, 'P' represents the principal loan amount, 'r' denotes the periodic monthly interest rate (annual interest rate divided by 12 months and then divided by 100), and 'n' represents the total repayment tenure expressed in months (years multiplied by 12)."
  },
  {
    id: "faq-02",
    question: "How does an increase in the interest rate affect my monthly EMI structure?",
    answer: "Because the interest rate is directly proportional to your periodic borrowing costs, any upward shift in the interest rate percentage increases your monthly payment payload. Alternatively, if your bank allows a tenure extension instead, your EMI could remain fixed, but the total interest amount paid over the life of the loan will increase significantly."
  },
  {
    id: "faq-03",
    question: "What is the difference between a Fixed Rate and a Floating Rate Home Loan?",
    answer: "A Fixed Rate loan keeps your interest rate and monthly EMI completely identical throughout your entire chosen tenure, offering protection against rising market rates. A Floating Rate loan is tied directly to external benchmarks like RBI's Repo Rate or the bank's MCLR/RLLR index, meaning your interest rates and monthly payments will fluctuate along with market shifts."
  },
  {
    id: "faq-04",
    question: "Can I enter interest rates as high as 30% in this calculator?",
    answer: "Yes. While standard tier-1 banks offer prime home financing between 8% and 12%, our engine is intentionally optimized to support up to 30% p.a. This extended range allows you to calculate financial projections for high-interest secondary bridge loans, non-banking financial company (NBFC) unsecured advances, or commercial land development funding loops."
  },
  {
    id: "faq-05",
    question: "Does this EMI calculator include hidden processing fees or property tax indices?",
    answer: "No, this tool provides pure mathematical amortization data based on your principal input, interest rate, and tenure. Upfront administrative expenses like structural bank processing fees (typically 0.5% to 1%), operational GST charges, legal documentation verification fees, and stamp duties must be evaluated and paid separately at closing."
  },
  {
    id: "faq-06",
    question: "How does a higher down payment impact my long-term interest payload?",
    answer: "Making a larger upfront down payment directly reduces your target loan principal requirement. A lower initial loan principal automatically lowers your monthly EMI commitments and significantly reduces the total interest amount that accrues over your repayment timeline."
  },
  {
    id: "faq-07",
    question: "What impact does my CIBIL/Credit Score have on the interest rate I get?",
    answer: "Your credit score serves as a key measure of your financial reliability. Premium institutional lenders offer their lowest interest rates to applicants with a CIBIL score of 750 or above. If your score falls below 650, lenders look at you as a higher risk, which usually results in them charging higher interest rates closer to their maximum limits."
  },
  {
    id: "faq-08",
    question: "Are there any financial penalties for making partial pre-payments on a home loan?",
    answer: "According to current RBI directives, banking institutions are prohibited from charging pre-payment or foreclosure penalties on floating-rate home loans. However, if you opt for a fixed-rate home loan structure, banks may charge a nominal pre-payment penalty fee (typically around 2%) on the remaining principal balance."
  },
  {
    id: "faq-09",
    question: "How does a plot construction loan differ from a regular pre-built home loan?",
    answer: "A standard home loan releases the total purchase amount all at once to buy a finished property. In contrast, a plot construction loan distributes funds in segmented stages based on construction progress (e.g., foundation completion, brickwork structure, roofing, and interior finishing). During this build phase, banks often allow you to pay just the interest portion before your regular full EMIs begin."
  },
  {
    id: "faq-10",
    question: "How can Trayaksh Construction help optimize my home loan approval process?",
    answer: "Once we finalize your custom villa blueprints, our dedicated finance panel shares your complete documentation pack—including working architectural layouts, structural designs, and estimated Bill of Quantities (BOQ)—directly with prime banking partners. Providing these clear, pre-vetted plans accelerates the bank's structural valuation checks and helps secure highly competitive interest rates."
  }
];

export default function LoanCalculatorFAQs() {
  const [activeAccordion, setActiveAccordion] = useState(0); // Opens the first question by default

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-10 pt-0 bg-[#F8F5F2] text-[#2D2926] font-sans antialiased">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-[#A67153] bg-white border border-gray-200/50 px-4 py-2 rounded-full shadow-sm">
            <HelpCircle size={13} />
            <span className="text-[10px] font-black uppercase tracking-widest">FAQ Hub</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-[#2D2926]">
            Financing & Loan <span className="font-light text-[#A67153]">Queries</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Clear answers to help you navigate loan calculations, interest limits, down payments, and structural financing rules.
          </p>
        </div>

        {/* ================= 10-ACCORDION STACK ================= */}
        <div className="space-y-4">
          {CALCULATOR_FAQS.map((item, index) => {
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
                  className="w-full flex items-center justify-between p-6 py-4 text-left focus:outline-none select-none group"
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
                  <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isCurrentlyOpen ? 'bg-[#A67153] text-white rotate-180' : 'bg-[#F8F5F2] text-gray-400 group-hover:text-[#2D2926]'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Smooth Animated Height Body wrapper */}
                <AnimatePresence initial={false}>
                  {isCurrentlyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-14 md:pl-[4.5rem] border-t border-gray-50 pt-3">
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