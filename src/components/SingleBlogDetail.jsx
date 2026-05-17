'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronRight, Hash, Bookmark } from 'lucide-react';
import BlogSidebar from './BlogSidebar';

// Mock Data structure representing a deep technical article
const MOCK_ARTICLE = {
  category: "Material Honesty",
  title: "Sourcing Italian Statuario: The Elite Stone Curation Guide",
  author: "Ananya Deshmukh (Head of Couture)",
  publishDate: "April 28, 2026",
  featuredImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
  shortDescription: "An in-depth exploration of the logistical precision, geographical variations, and structural inspection parameters required to secure authentic Italian marble lots directly from Carrara for ultra-luxury residential builds.",
  toc: [
    { id: "origin", label: "1. The Geographical Identity of Carrara" },
    { id: "inspection", label: "2. Vein Mapping & Soundness Inspections" },
    { id: "structural", label: "3. Structural Back-Slab Resin Reinforcements" },
    { id: "maintenance", label: "4. Long-term Sealant Crystallization Technology" }
  ]
};

export default function SingleBlogDetail() {
  
  // Smooth scroll handler function for the Table of Contents links
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounts for a sticky navigation bar height overhead
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-26 pb-24 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* BREADCRUMB INDICATOR NAVIGATION */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-4 overflow-x-auto">
          <Link href="/" className="hover:text-[#A67153] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-[#A67153] transition-colors">Journal</Link>
          <ChevronRight size={12} />
          <span className="text-[#2D2926] font-bold truncate">{MOCK_ARTICLE.title}</span>
        </div>

        {/* MASTER GRID FRAMEWORK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: DEEP CONTENT ARTICLE FRAME (8 COLUMNS) ================= */}
          <article className="lg:col-span-8 space-y-8 bg-white p-4 md:p-8 rounded-[1rem] border border-gray-100 shadow-xl shadow-black/[0.005]">
            
            {/* Meta Header Information Row */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#A67153] bg-[#F8F5F2] px-3 py-1.5 rounded-lg inline-block">
                {MOCK_ARTICLE.category}
              </span>
              
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#2D2926] leading-tight mb-2">
                {MOCK_ARTICLE.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium pt-2">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-[#A67153]" />
                  <span>By {MOCK_ARTICLE.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#A67153]" />
                  <span>{MOCK_ARTICLE.publishDate}</span>
                </div>
              </div>
            </div>

            {/* CINEMATIC FEATURED IMAGE COVER */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] md:h-[460px] w-full rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-md"
            >
              <Image 
                src={MOCK_ARTICLE.featuredImage}
                alt={MOCK_ARTICLE.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* ARTICLE SHORT DESCRIPTION BLOCK (INTRO COUTURE) */}
            <div className="border-l-4 border-[#A67153] pl-6 py-2">
              <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                "{MOCK_ARTICLE.shortDescription}"
              </p>
            </div>

            {/* EDITORIAL TABLE OF CONTENTS BOX GRID */}
            <div className="bg-[#F8F5F2] p-8 rounded-3xl border border-gray-200/60 space-y-2">
              <div className="flex items-center gap-2 text-[#2D2926] font-bold text-sm uppercase tracking-wider">
                <Bookmark size={16} className="text-[#A67153]" />
                <h3>Table of Contents</h3>
              </div>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-500">
                {MOCK_ARTICLE.toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="text-left flex items-center gap-1.5 hover:text-[#A67153] transition-colors group focus:outline-none"
                  >
                    <Hash size={12} className="text-gray-300 group-hover:text-[#A67153] transition-colors shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* RAW READABLE RICH-TEXT CONTENT AREA */}
            <div className="prose prose-gray max-w-none text-gray-500 text-sm md:text-base leading-relaxed space-y-10 pt-4">
              
              <div id="origin" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D2926] flex items-center gap-2">
                  The Geographical Identity of Carrara
                </h2>
                <p>
                  Sourced straight from Apuan Alps in northern Tuscany, Italy, genuine Statuario marble features an unblemished icy white crystalline bedrock structure background. Unlike commercial grade Indian or Chinese replicas, the authentic calcium carbonate profile ensures maximum structural density and refractive gloss metrics.
                </p>
              </div>

              <div id="inspection" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D2926] flex items-center gap-2">
                  Vein Mapping & Soundness Inspections
                </h2>
                <p>
                  Our layout protocols dictate strict diagnostic audits prior to overseas container shipping. Technicians monitor vein networks to guarantee continuous pattern flowing alignments upon multi-slab installations. Soundness parameters are verified using ultrasonic wave sensors to rule out hidden internal structural stress microfractures.
                </p>
              </div>

              <div id="structural" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D2926] flex items-center gap-2">
                  Structural Back-Slab Resin Reinforcements
                </h2>
                <p>
                  Because couture-tier marble blocks feature natural fissures, safety parameters mandate treating the rear layout plane with custom mesh reinforcing back-sheets. High-density epoxy infusions fill naturally occurring air cavities without discoloring the pristine frontal surface.
                </p>
              </div>

              <div id="maintenance" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D2926] flex items-center gap-2">
                  Long-term Sealant Crystallization Technology
                </h2>
                <p>
                  Post-laying, the final hand-over routine covers surface sealing using nanotech penetrating fluoropolymer barriers. This process chemical locks the top microscopic pours, ensuring optimal defense barriers against heavy kitchen grease stains or liquid spills.
                </p>
              </div>

            </div>

          </article>

          {/* ================= RIGHT COLUMN: EXISTING STICKY SIDEBAR (4 COLUMNS) ================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-22">
            <BlogSidebar />
          </aside>

        </div>

      </div>
    </section>
  );
}