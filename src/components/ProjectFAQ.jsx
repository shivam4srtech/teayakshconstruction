'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

const PROJECT_FAQS = [
  {
    q: "Can I visit an ongoing project site?",
    a: "Absolutely. We encourage site visits to our active projects in Noida and Gurgaon. This allows you to witness our material quality and 'Teayaksh Standard' construction practices first-hand."
  },
  {
    q: "What does 'Near Completion' status actually mean?",
    a: "Projects in this stage have completed the structural and MEP (Mechanical, Electrical, Plumbing) work. We are currently finishing interiors, tiling, and final coats of paint. These are usually 30-45 days away from handover."
  },
  {
    q: "Do you provide customized floor plans for 'Royale' packages?",
    a: "Yes. Our Royale and Premium packages include multiple iterations with our senior architects to ensure the floor plan perfectly matches your lifestyle and Vastu requirements."
  },
  {
    q: "How do you handle project delays?",
    a: "We provide a RERA-aligned timeline. If a project is delayed due to reasons within our control, we offer a pre-agreed penalty compensation as part of our transparency guarantee."
  }
];

export default function ProjectFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid lg:grid-cols-3 md:gap-16 gap-4">
          
          {/* Left: Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-4">Assurance</p>
              <h2 className="text-4xl font-medium text-brand-dark tracking-tight leading-tight">
                Your Questions, <br />
                <span className="font-light">Answered.</span>
              </h2>
              <p className="text-sm text-brand-dark/50 mt-6 leading-relaxed">
                Everything you need to know about our construction process, site visits, and delivery timelines.
              </p>
              <button className="mt-8 text-xs font-bold uppercase tracking-widest text-brand border-b border-brand pb-2 hover:text-brand-dark hover:border-brand-dark transition-all">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {PROJECT_FAQS.map((faq, i) => (
              <div 
                key={i} 
                className={`group border-b border-gray-100 transition-all duration-500 ${active === i ? 'pb-5' : 'pb-4'}`}
              >
                <button 
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex items-center justify-between py-2 text-left"
                >
                  <span className={`md:text-lg text-[.9rem] font-medium transition-colors duration-300 ${active === i ? 'text-brand' : 'text-brand-dark'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${active === i ? 'bg-brand text-white rotate-180' : 'bg-gray-50 text-brand-dark'}`}>
                    {active === i ? <IoRemoveOutline /> : <IoAddOutline />}
                  </div>
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-brand-dark/60 leading-relaxed pr-12">
                        {faq.a}
                      </p>
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