'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaPlus, FaMinus, FaClock } from 'react-icons/fa6';
import { FaHardHat, FaShieldAlt  } from "react-icons/fa";
export default function PricingCompo(){
    const [openFaq, setOpenFaq] = useState(null);
    const FAQS = [
        { q: "Are architectural drawings included?", a: "Yes, all our packages from 'Classic' onwards include 2D floor plans, 3D front elevation, and structural drawings." },
        { q: "What is the payment schedule?", a: "We follow a 10-stage payment plan linked to construction milestones (Foundation, Plinth, Lintel, etc.), ensuring you only pay for work completed." },
        { q: "Can I customize the material brands?", a: "Absolutely. While our packages define a quality tier, you can swap brands. Any price difference will be adjusted in the final quote." }
    ];
    return(
        <>
           
             {/* 3. TRUST BAR (Conversion Trigger) */}
            <section className="py-10 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-16 flex flex-wrap justify-center gap-10 lg:gap-20">
                {[
                    { icon: <FaShieldAlt />, text: "10 Year Structural Warranty" },
                    { icon: <FaClock />, text: "On-Time Completion Guarantee" },
                    { icon: <FaHardHat />, text: "430+ Quality Checks" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-dark/60 font-bold text-[11px] uppercase tracking-widest">
                    <span className="text-brand text-lg">{item.icon}</span>
                    {item.text}
                    </div>
                ))}
                </div>
            </section>

            {/* 4. THE PROCESS (Visual Guide) */}
            <section className="py-10 pb-5 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-16">
                <div className="text-center mb-6">
                    <h2 className="text-3xl lg:text-5xl font-medium text-brand-dark tracking-tight">How it works.</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4">
                    {[
                    { step: "01", title: "Free Consultation", desc: "Share your plot details and vision with our architects." },
                    { step: "02", title: "Concept & Quote", desc: "Receive customized floor plans and a detailed BOQ quote." },
                    { step: "03", title: "Execution", desc: "Hassle-free construction with real-time updates via our app." },
                    ].map((s, i) => (
                    <div key={i} className="group p-8 rounded-[2rem] bg-gray-50 hover:bg-brand-dark transition-colors duration-500">
                        <span className="text-5xl font-black text-brand/20 group-hover:text-brand/10 transition-colors">{s.step}</span>
                        <h3 className="text-xl font-bold text-brand-dark group-hover:text-white mt-4">{s.title}</h3>
                        <p className="text-brand-dark/50 group-hover:text-white/60 mt-2 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-3xl mx-auto px-5">
                <h2 className="text-3xl font-medium text-brand-dark mb-12 text-center tracking-tight">Common Questions.</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                        <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full p-6 text-left flex justify-between items-center"
                        >
                        <span className="font-bold text-brand-dark text-sm uppercase tracking-wider">{faq.q}</span>
                        {openFaq === i ? <FaMinus size={12} className="text-brand"/> : <FaPlus size={12} className="text-brand"/>}
                        </button>
                        <AnimatePresence>
                        {openFaq === i && (
                            <motion.div 
                            initial={{ height: 0 }} 
                            animate={{ height: 'auto' }} 
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                            >
                            <div className="px-6 pb-6 text-sm text-brand-dark/60 leading-relaxed">
                                {faq.a}
                            </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}