'use client';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const faqs = [
  {
    question: "What is the typical timeline for a luxury villa construction?",
    answer: "A bespoke luxury villa typically takes 12 to 18 months from groundbreaking to handover. This timeline ensures meticulous attention to structural integrity, artisanal finishes, and high-end fit-outs that define a Teayaksh home."
  },
  {
    question: "Do you handle medical and pharmacy setup compliance?",
    answer: "Yes. Our medical construction vertical specialized in ISO-standard clean rooms, specialized HVAC systems for pharmacies, and healthcare-grade plumbing, ensuring all local health authority regulations are met."
  },
  {
    question: "Can Teayaksh manage both architecture and interior design?",
    answer: "Absolutely. We offer a 'Design-Build' model where our architects and interior designers work under one roof. This prevents communication gaps and ensures the interior aesthetic is baked into the structural DNA of the building."
  },
  {
    question: "How do you ensure transparency in construction costs?",
    answer: "We provide a detailed Bill of Quantities (BOQ) and use project management software that gives clients real-time access to procurement logs, labor milestones, and budget tracking."
  },
  {
    question: "What kind of post-construction warranty do you provide?",
    answer: "We stand by our craftsmanship. Every Teayaksh project comes with a structural warranty and a dedicated maintenance support period to ensure the building performs as intended for years to come."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4">
              Common Inquiries
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium text-brand-dark tracking-tight leading-tight">
              Expert Insights & <br />
              <span className=". text-brand/80 font-light">Client Clarity.</span>
            </h2>
            <p className="text-brand-dark/50 text-sm leading-relaxed max-w-sm">
              We believe in total transparency. If your question isn't listed here, our consultants are ready to discuss your specific project needs.
            </p>
            
            <div className="pt-8">
              <button className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand transition-all duration-300 shadow-xl">
                <HiOutlineChatBubbleLeftRight size={18} />
                Ask a Specific Question
              </button>
            </div>
          </div>

          {/* Right Side: Accordion Grid */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-gray-100 transition-all duration-500 ${
                    isOpen ? 'bg-gray-50/50' : 'bg-transparent'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-7 px-4 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className={`text-lg lg:text-xl font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-brand' : 'text-brand-dark'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${
                      isOpen ? 'rotate-180 text-brand' : 'text-brand-dark/20'
                    }`}>
                      {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                    </div>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-8 text-brand-dark/60 text-sm lg:text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}