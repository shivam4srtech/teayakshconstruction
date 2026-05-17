'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Calculator, ArrowRight, Clock, Sparkles } from 'lucide-react';
import HeroFrom from './HeroFrom';

const SIDEBAR_TOOLS = [
  { name: "Brick Calculator", desc: "Estimate exact brick count" },
  { name: "Paint Area Estimator", desc: "Wall coverage calculator" },
  { name: "Steel Weight Chart", desc: "Structural steel reference" }
];

const SIDEBAR_RECENT_POSTS = [
  {
    title: "Understanding High-Acoustic Double Glazing Window Systems",
    date: "May 10, 2026",
    slug: "/blog/high-acoustic-double-glazing",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=150"
  },
  {
    title: "The Ultimate Framework Guide to Premium Foundation Waterproofing",
    date: "April 29, 2026",
    slug: "/blog/foundation-waterproofing",
    thumbnail: "https://images.unsplash.com/photo-1541915351239-015846f4b670?q=80&w=150"
  },
  {
    title: "Sankranti Architectural Special: High-Yield Muhurat Planning",
    date: "Jan 12, 2026",
    slug: "/blog/sankranti-special-muhurat-planning",
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=150"
  }
];

export default function BlogSidebar() {
  // Estimator State Controls
  const [area, setArea] = useState('');
  const [quality, setQuality] = useState('premium'); // premium, ultra, couture
  const [estimatedCost, setEstimatedCost] = useState(null);

  const calculateEstimate = (e) => {
    e.preventDefault();
    if (!area || isNaN(area)) return;

    let ratePerSqFt = 1800; // Premium base rate
    if (quality === 'ultra') ratePerSqFt = 2600;
    if (quality === 'couture') ratePerSqFt = 4200;

    const baseline = area * ratePerSqFt;
    setEstimatedCost(baseline.toLocaleString('en-IN'));
  };

  return (
    <div className="space-y-4">
      
      {/* 1. MINIMALIST SEARCH BOX BAR */}
      <div className="bg-white p-6 rounded-[1rem] border border-gray-100 shadow-xl shadow-black/[0.005]">
        <h3 className="text-xs font-black uppercase tracking-wider text-[#2D2926] mb-4">Search Blogs</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search keywords, materials, vastu..."
            className="w-full bg-[#F8F5F2] text-xs px-5 py-4 rounded-xl text-[#2D2926] placeholder-gray-400 border border-transparent focus:border-[#A67153]/30 focus:bg-white outline-none transition-all duration-300"
          />
          <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-[1rem] border border-gray-100 shadow-xl shadow-black/[0.005]">
        <h3 className="text-xs font-black uppercase tracking-wider text-[#2D2926] mb-4">Get Free Consultation</h3>
    
        <HeroFrom/>
      </div>
      

      {/* 3. RECENT POSTS MINIMAL PREVIEW */}
      <div className="bg-white p-8 rounded-[1rem] border border-gray-100 shadow-xl shadow-black/[0.005]">
        <h3 className="text-xs font-black uppercase tracking-wider text-[#2D2926] mb-6 flex items-center gap-2">
          <Clock size={14} className="text-[#A67153]" /> Recent Articles
        </h3>
        
        <div className="space-y-6">
          {SIDEBAR_RECENT_POSTS.map((post, i) => (
            <Link key={i} href={post.slug} className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                <img src={post.thumbnail} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#2D2926] group-hover:text-[#A67153] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* 4. More Tools Card */}
    <div className="bg-[#2D2926] p-8 rounded-[1rem] text-white">
        <div className="flex items-center gap-3 mb-6">
            <Calculator size={20} className="text-[#A67153]" />
            <h4 className="font-bold uppercase text-xs tracking-widest">Tools &amp; Calculator</h4>
        </div>
        <div className="space-y-4">
            {SIDEBAR_TOOLS.map((tool, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#A67153]/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold">{tool.name}</span>
                <ArrowRight size={14} className="text-[#A67153] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">{tool.desc}</p>
            </div>
            ))}
        </div>
    </div>

    </div>
  );
}