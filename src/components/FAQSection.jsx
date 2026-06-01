'use client';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { useModalStore } from '@/store/useModalStore';

const Homefaqs = [
  {
    question: "What services does Trayaksh Construction provide?",
    answer: "Trayaksh Construction offers end-to-end construction solutions including residential construction, commercial projects, architectural planning, structural design, interior works, renovation, project management, and turnkey construction services."
  },
  {
    question: "Do you provide complete turnkey construction services?",
    answer: "Yes. We handle everything from design, approvals, material procurement, construction, quality checks, and project delivery, so you can enjoy a hassle-free building experience."
  },
  {
    question: "How much does it cost to build a house?",
    answer: "The cost depends on factors such as plot size, design preferences, location, materials, and finishes. We provide transparent and customized quotations after understanding your requirements."
  },
  {
    question: "Is the construction cost fixed after the agreement?",
    answer: "We provide detailed specifications and transparent pricing before starting the project. Any additional work or design changes requested during construction will be discussed and approved before execution."
  },
  {
    question: "Do you help with house planning and design?",
    answer: "Yes. Our team assists with architectural design, floor planning, 3D elevation concepts, structural drawings, and space optimization based on your budget and lifestyle needs."
  },
  {
    question: "Can I customize the design of my home?",
    answer: "Absolutely. Every client has different preferences, and we create customized designs that match your vision, functionality, and budget."
  },
  {
    question: "What materials do you use for construction?",
    answer: "We use quality-tested materials from trusted brands and suppliers to ensure durability, safety, and long-term value."
  },
  {
    question: "How do you ensure construction quality?",
    answer: "We follow strict quality control procedures at every stage of construction, including material checks, site supervision, structural standards, and regular inspections."
  },
  {
    question: "Will I receive regular updates about my project?",
    answer: "Yes. We provide regular progress updates on site photos/videos, and milestone reports on our app, so you stay informed throughout the construction journey."
  },
  {
    question: "Do you offer interior design services?",
    answer: "Yes. We provide interior solutions including modular kitchens, wardrobes, false ceilings, lighting, flooring, and complete home interiors."
  },
  {
    question: "Can you build on a small or irregular plot?",
    answer: "Yes. Our design and engineering team specializes in maximizing space utilization for plots of different sizes and shapes."
  },
  {
    question: "Do you provide renovation and remodeling services?",
    answer: "Yes. We undertake renovation projects for homes, offices, kitchens, bathrooms, and complete property makeovers."
  },
  {
    question: "How do payment schedules work?",
    answer: "Payments are typically linked to project milestones. This ensures transparency and allows clients to pay based on the progress of the work completed."
  },
  {
    question: "What makes Trayaksh Construction different from local contractors?",
    answer: "Unlike traditional contractors, Trayaksh Construction focuses on professional project management, transparent pricing, quality control, timely execution, and regular customer updates. We combine expert planning, skilled workmanship, and modern construction practices to deliver a smooth and reliable building experience."
  },
  {
    question: "Do you provide eco-friendly or sustainable construction options?",
    answer: "Yes. We can incorporate energy-efficient designs, sustainable materials, rainwater harvesting, and eco-friendly construction practices based on your preferences."
  },
  {
    question: "How can I get started with Trayaksh Construction?",
    answer: "Simply contact us through our website, phone, or WhatsApp to schedule a consultation. Our team will understand your requirements and guide you through the next steps."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <section className="bg-white py-6 lg:py-12 pt-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        <div className="grid lg:grid-cols-12 md:gap-16 gap-2">
          
          {/* Left Side: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
            <p className="text-brand font-bold text-[10px] tracking-[0.4em] uppercase border-l-2 border-brand pl-4 mb-3 mb-2">
              Common Inquiries
            </p>
            <h2 className="text-xl lg:text-5xl font-semibold text-brand-dark tracking-tight leading-tight md:mb-4 mb-2">
              Expert Insights & <span className=". text-brand/80">Client Clarity.</span>
            </h2>
            <p className="text-brand-dark/50 text-sm leading-relaxed max-w-sm">
              We believe in total transparency. If your question is not listed here, our consultants are ready to discuss your specific project needs.
            </p>
            
            <div className="md:pt-8 pt-0">
              <button 
                 onClick={openModal}
                 className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand transition-all duration-300 shadow-xl">
                <HiOutlineChatBubbleLeftRight size={18} />
                CHAT WITH EXPERTS
              </button>
            </div>
          </div>

          {/* Right Side: Accordion Grid */}
          <div className="lg:col-span-7 space-y-4">
            {Homefaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-gray-100 transition-all duration-500 md:mb-4 mb-1 ${
                    isOpen ? 'bg-gray-50/50' : 'bg-transparent'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-3 md:py-5 py-2 md:px-4 px-0 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className={`text-[.9rem] lg:text-lg font-medium tracking-tight transition-colors duration-300 ${
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
                    <div className="md:px-4 md:pb-4 pb-0 pb-1 text-brand-dark/60 text-sm lg:text-base leading-relaxed max-w-2xl">
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
