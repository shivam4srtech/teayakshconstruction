'use client';
import HeroFrom from './HeroFrom';
import  { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModalStore } from '@/store/useModalStore';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, CheckCircle2, Ruler, Layout, Stethoscope, 
  ShieldCheck, Zap, Clock, Package, Monitor, Lightbulb, 
  Store, Users, ChevronRight, Phone, Mail, MapPin, 
  ArrowRight, HardHat, FileCheck, Layers
} from 'lucide-react';
import GlobalCta from './GlobalCta';


const TRUST_BADGES = [
  { icon: <Layout size={20} />, text: "Space Optimized Layouts" },
  { icon: <ShieldCheck size={20} />, text: "FDA & Drug License Compliant" },
  { icon: <HardHat size={20} />, text: "End-to-End Execution" },
  { icon: <Clock size={20} />, text: "Fast Project Delivery" },
];

const SERVICES = [
  { title: "Pharmacy Interior Design", icon: <Layout />, desc: "Complete 3D visualization and floor planning for maximum efficiency." },
  { title: "Medicine Rack Design", icon: <Layers />, desc: "Ergonomic, modular racks designed for high-density storage and easy retrieval." },
  { title: "Billing Counter Setup", icon: <Monitor />, desc: "Sleek, integrated POS counters with concealed wiring and storage." },
  { title: "Storage ", icon: <Package />, desc: "Organized back-office storage" },
  { title: "Electrical & Lighting", icon: <Lightbulb />, desc: "Anti-glare clinical lighting and UPS/Inverter ready electrical wiring." },
  { title: "Branding & Signage", icon: <Store />, desc: "Premium 3D glow-sign boards and interior category branding." },
  { title: "Flooring & Ceiling", icon: <Layers />, desc: "Medical-grade anti-bacterial flooring and modern false ceilings." },
  { title: "Consultation Area", icon: <Users />, desc: "Private patient counseling zones as per modern clinical standards." },
];

const STEPS = [
  { title: "Site Visit & Discussion", desc: "Understanding your space and specific business requirements." },
  { title: "3D Layout Planning", desc: "FDA-friendly design drafts for storage and customer flow." },
  { title: "Civil & Interior Work", desc: "Professional execution of partitions, paint, and flooring." },
  { title: "Racks & Counters", desc: "Installation of custom-made pharmacy shelving systems." },
  { title: "Branding & Handover", desc: "Final signage, lighting checks, and clinical-ready handover." },
];

const PACKAGES = [
  { name: "Small Setup", area: "100 - 300 sq.ft.", features: ["Modular Racks", "Single Billing Counter", "Basic Lighting", "Signage"] },
  { name: "Medium Store", area: "300 - 800 sq.ft.", features: ["Premium Shelving", "Dual Counters", "Storage Cabinets", "False Ceiling", "FDA Guidance"] },
  { name: "Premium Pharmacy", area: "800+ sq.ft.", features: ["Luxury Interiors", "Consultation Room", "Advanced Branding", "Full Turnkey"] },
];

// --- COMPONENTS ---

const SectionHeading = ({ badge, title, sub }) => (
  <div className="text-center md:mb-14 mb-6 space-y-4">
    <div className='mb-6'>
        <span className="px-4 py-1.5 rounded-full bg-[#A67153]/10 text-[#A67153] text-xs font-bold uppercase tracking-widest leading-none">
          {badge}
        </span>
    </div>
    <h2 className="text-3xl lg:text-5xl font-medium text-[#2D2926] tracking-tight">{title}</h2>
    {sub && <p className="text-gray-500 max-w-2xl mx-auto">{sub}</p>}
  </div>
);

export default function PharmacySetupPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const openModal = useModalStore((state) => state.openModal);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2D2926]">
      
      {/* 1. HERO SECTION */}
     
<section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
  {/* Background Image with Overlay 
    Using a linear gradient from solid light beige to transparent to ensure left-side text visibility
  */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/medical-store.jpg')" }}
    />
    {/* The Gradient Shield: 
      Darker on mobile for readability, then transitions to a clean fade on desktop 
    */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F2] via-[#F8F5F2]/95 " />
  </div>

  <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10 w-full pt-12 pb-10 lg:pt-28 lg:pb-20">
    <div className="flex md:flex-row flex-col md:place-content-between items-center md:items-start">
      
      {/* Left Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A67153]/10 border border-[#A67153]/20 text-[#A67153] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A67153] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A67153]"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">FDA Compliant Designs</span>
        </div>

        <h1 className="text-[1.6rem] md:text-[3.2rem] font-medium leading-[1.1] md:mb-3 mb-6 text-[#2D2926]">
          Professional <span className="text-[#A67153]">Pharmacy Setup</span> & Interior Solutions
        </h1>
        
        <p className="text-gray-600 text-lg mb-4 leading-relaxed hidden md:block">
          Complete turnkey solutions for medical stores—from layout planning and drug-license compliant designs to modular shelving and premium branding.
        </p>

        <div className="flex flex-wrap md:justify-start justify-center md:gap-4 gap-3 md:mb-10 mb-5">
          <button
            onClick={openModal}
            className="bg-[#A67153] text-white md:px-8 px-2 py-4 rounded font-bold uppercase md:text-xs text-[.65rem] tracking-widest hover:bg-[#2D2926] transition-all shadow-xl shadow-[#A67153]/30">
            Get Free Consultation
          </button>
          <Link
            href={'/projects'}
            className="bg-white/80 backdrop-blur-md text-[#2D2926] border border-gray-200 md:px-8 px-2 py-4 rounded font-bold uppercase md:text-xs text-[.65rem] tracking-widest hover:border-[#A67153] transition-all">
            View Our Work
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRUST_BADGES.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white">
              <span className="text-[#A67153] shrink-0">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Floating Card Feature */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="relative hidden lg:block"
      >
      
        <div className=" p-4 lg:p-6 shadow-2xl border border-brand/10 relative overflow-hidden group max-w-[350px]  bg-[#efebe2]">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand" />
            
            <div className="mb-4">
              <h3 className="lg:text-[1.2rem] text-[1.1rem] font-bold text-brand-dark mb-0">Request a Free Consultation</h3>
              {/* <p className="text-sm text-brand-dark/50">Fill out the form below and our design experts will contact you within 24 hours.</p> */}
            </div>
  
            <HeroFrom/>
        </div>
        

        
      </motion.div>

    </div>
  </div>
</section>

      {/* 2. PROBLEM/SOLUTION SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <SectionHeading badge="The Challenge" title="Why Layout Matters" />
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#2D2926] text-white md:p-10 p-4 rounded-[2rem]">
              <h3 className="md:text-2xl text-[1.3rem] md:mb-8 mb-4 font-medium">Common Setup Problems</h3>
              <ul className="space-y-6">
                {[
                  "Poor space utilization leading to cluttered aisles",
                  "Non-compliant layouts that fail Drug License inspections",
                  "Unorganized storage resulting in medicine expiry",
                  "Low product visibility for FMCG items"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 opacity-80">
                    <div className="mt-1"><Minus className="text-[#A67153]" /></div>
                    <p className='text-sm'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#A67153]/5 md:p-10 p-4 rounded-[2rem] border border-[#A67153]/10">
              <h3 className="text-2xl md:mb-8 mb-4 font-medium text-[#2D2926]">The Trayaksh Solution</h3>
              <ul className="space-y-6">
                {[
                  "Zonal planning for high, medium, and slow-moving drugs",
                  "FDA-ready floor plans designed by experts",
                  "Modular storage that adapts to your inventory",
                  "Strategic retail flow to increase customer basket size"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 mb-3">
                    <div className="mt-1"><CheckCircle2 className="text-[#A67153]" /></div>
                    <p className="font-medium text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE DELIVER */}
      <section className="py-12 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <SectionHeading badge="The Process" title="Execution Timeline" />
          <div className="relative flex flex-col md:flex-row justify-between md:gap-8 gap-4">
            <div className="absolute top-10 left-0 w-full h-0.5 bg-gray-200 hidden md:block z-0" />
            {STEPS.map((step, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="relative z-10 flex-1 text-center group">
                <div className="md:w-20 md:h-20 w-15 h-15 bg-white md:rounded-2xl rounded-xl shadow-md border border-gray-100 flex items-center justify-center mx-auto md:mb-6 mb-4 group-hover:bg-[#A67153] group-hover:text-white transition-all duration-500">
                  <span className="text-2xl font-bold">{i + 1}</span>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <SectionHeading badge="Our Expertise" title="Everything You Need" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-[#F8F5F2] text-[#A67153] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#A67153] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{service.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FDA COMPLIANCE SECTION */}
      <section className="py-16 bg-[#2D2926] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-5 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#A67153] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Regulatory Experts</span>
              <h2 className="text-4xl lg:text-5xl font-medium mb-8">FDA & Drug License <br/><span className="text-[#A67153]">Compliant Layouts.</span></h2>
              <div className="space-y-4">
                {[
                  { t: "Categorization", d: "Strict segregation for Schedule H, Narcotics, and FMCG zones." },
                  { t: "Pharmacist Area", d: "Mandatory counseling and dispensing space planning." },
                  { t: "Material Specs", d: "Non-reactive, easy-to-clean shelves and anti-bacterial surfaces." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                    <FileCheck className="text-[#A67153] shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-1">{item.t}</h4>
                      <p className="text-sm text-white/60">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[10px] text-white/30 uppercase tracking-widest italic">
                * Final approval depends on local authority requirements. We provide compliance-ready design support.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                  src="/images/pharmacy-setup.jpg" 
                  width={200}
                  height={200}
                  alt='pharmacy-setup'
                  className="rounded-3xl h-64 w-full object-cover" 
              />
              <Image
                width={200}
                height={200}
                src="/images/pharmacy-setup-2.jpg" 
                alt='medical-store-setup'
                className="rounded-3xl h-64 w-full object-cover mt-8" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PACKAGES SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <SectionHeading badge="Estimates" title="Setup Options" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] border ${i === 1 ? 'bg-[#F8F5F2] border-[#A67153]' : 'bg-white border-gray-100'} shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
                <h3 className="text-2xl font-medium mb-2">{pkg.name}</h3>
                <p className="text-[#A67153] font-bold text-sm mb-8 uppercase tracking-widest">{pkg.area}</p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-[#A67153]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-[#2D2926] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#A67153] transition-colors">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEAD CAPTURE FORM */}
      <GlobalCta/>
      {/* <section className="md:py-24 py-16 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-5 lg:px-16">
          <div className="bg-white rounded-[3rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-white">
            <div className="lg:w-1/3 bg-[#2D2926] md:p-12 p-6 text-white">
              <h3 className="text-3xl font-medium mb-6">Let's Build Your <span className="text-[#A67153]">Pharmacy</span></h3>
              <p className="text-white/60 mb-12">Submit your details and our pharmacy consultant will reach out with a personalized floor plan and cost estimate.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4"><Phone size={20} className="text-[#A67153]" /> <p className="text-sm">+91 9999 888 777</p></div>
                <div className="flex items-center gap-4"><Mail size={20} className="text-[#A67153]" /> <p className="text-sm">hello@trayaksh.com</p></div>
              </div>
            </div>
            <div className="lg:w-2/3 md:p-12 p-6  bg-white">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:ring-2 focus:ring-[#A67153] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:ring-2 focus:ring-[#A67153] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">City</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:ring-2 focus:ring-[#A67153] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Store Area (sq.ft.)</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:ring-2 focus:ring-[#A67153] outline-none" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">How can we help? (Optional)</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:ring-2 focus:ring-[#A67153] outline-none" />
                </div>
                <button className="md:col-span-2 bg-[#A67153] text-white py-5 px-2 rounded font-bold uppercase text-xs tracking-widest shadow-xl hover:bg-[#2D2926] transition-all">
                  Get Free Pharmacy Setup Plan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* 10. FAQ SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <SectionHeading badge="Support" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {[
              { q: "Do you help with pharmacy layout planning?", a: "Yes, we provide professional 2D and 3D layout plans that optimize your store space for customer flow and regulatory requirements." },
              { q: "Are your designs FDA and Drug License compliant?", a: "Our team designs layouts specifically to meet Drug License requirements, including storage height, and counseling zones." },
              { q: "Can you set up a pharmacy in a small space?", a: "Definitely. We specialize in space-optimization and custom modular racks that maximize storage even in 100-200 sq.ft. areas." },
              { q: "Do you provide racks and counters?", a: "Yes, we provide end-to-end furniture including modular medicine racks, billing counters, and storage cabinets." },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F8F5F2] transition-all"
                >
                  <span className="font-bold text-[#2D2926] uppercase text-xs tracking-widest">{faq.q}</span>
                  {activeFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-6 bg-[#F8F5F2]/50 text-gray-500 text-sm border-t border-gray-100 leading-relaxed">
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

      {/* 11. FINAL CTA */}
      <section className="md:py-20 py-12 bg-[#A67153]">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-medium text-white mb-8">Planning to Start a Pharmacy?</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto font-medium">Let's build a compliant, modern, and profitable medical store today. Our experts are ready to guide you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={openModal}
              className="bg-[#2D2926] text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-2xl hover:scale-105 transition-all"> 
              Talk to Our Expert
            </button>
            <Link href={'/cost-estimator'} className="bg-white text-[#A67153] px-10 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-gray-100 transition-all">
              Get Cost Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}