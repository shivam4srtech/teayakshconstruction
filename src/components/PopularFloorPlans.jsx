'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, Maximize2, Layers, Grid, 
  ArrowRight, Download, ThumbsUp, Heart 
} from 'lucide-react';

const POPULAR_PLANS_DATA = [
  {
    id: "plan-4050-west",
    title: "3 BHK G+1 Residential House Plan Designed for 40x50 Plot",
    category: "Residential Elite",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
    dimensions: "40 x 50 sq.ft.",
    floors: "2 Levels",
    bhk: "3 BHK",
    facing: "West Facing",
    price: "₹40,45,501",
    likes: 22,
    isPopular: true
  },
  {
    id: "plan-3040-east",
    title: "3 BHK Premium Duplex Villa Plan for 30x40 Plot Setup",
    category: "Modern Villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600",
    dimensions: "30 x 40 sq.ft.",
    floors: "2 Levels",
    bhk: "3 BHK",
    facing: "East Facing",
    price: "₹28,85,000",
    likes: 45,
    isPopular: true
  },
  {
    id: "plan-4060-north",
    title: "4 BHK Luxury Contemporary Mansion Plan with Car Port",
    category: "Ultra Luxury",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    dimensions: "40 x 60 sq.ft.",
    floors: "3 Levels",
    bhk: "4 BHK",
    facing: "North Facing",
    price: "₹62,10,400",
    likes: 89,
    isPopular: false
  },
  {
    id: "plan-2030-south",
    title: "2 BHK Compact Smart Living Structural Home Layout",
    category: "Affordable Smart",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
    dimensions: "20 x 30 sq.ft.",
    floors: "1 Level",
    bhk: "2 BHK",
    facing: "South Facing",
    price: "₹14,22,000",
    likes: 14,
    isPopular: false
  },
  {
    id: "plan-5080-east",
    title: "5 BHK Royal Palatial Estate Plan with Internal Courtyard",
    category: "Signature Collection",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
    dimensions: "50 x 80 sq.ft.",
    floors: "3 Levels",
    bhk: "5 BHK",
    facing: "East Facing",
    price: "₹1,18,50,000",
    likes: 120,
    isPopular: true
  },
  {
    id: "plan-3550-north",
    title: "4 BHK Traditional Fusion Row House Structural Blueprint",
    category: "Heritage Fusion",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
    dimensions: "35 x 50 sq.ft.",
    floors: "2 Levels",
    bhk: "4 BHK",
    facing: "North Facing",
    price: "₹38,60,000",
    likes: 31,
    isPopular: false
  }
];

const NO_IMAGE = "/images/no-image.jpg";

function normalizePopularPlans(floorPlans) {
  if (!floorPlans?.length) return POPULAR_PLANS_DATA;

  return floorPlans.map((plan) => ({
    id: plan.id,
    title: plan.title,
    category: plan.type,
    image: plan.featuredImage || plan.image || NO_IMAGE,
    dimensions: plan.dimensions,
    floors: plan.floors,
    bhk: plan.bhk,
    facing: plan.facing,
    price: plan.budget || "On Request",
    likes: plan.likes,
    isPopular: plan.likes > 20,
    slug: plan.slug,
  }));
}

export default function PopularFloorPlans({ floorPlans = [] }) {
  const [favorites, setFavorites] = useState({});
  const plans = normalizePopularPlans(floorPlans);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-5 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 space-y-4">
        
        {/* ================= COMPONENT HEADER OVERVIEW ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200/60">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A67153] block">
              Architectural Showroom
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#2D2926]">
              Most Popular <span className=" font-light text-[#A67153]">Floor Plans</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              Explore our most requested engineered layouts, optimized by premium master design boards to save material execution budgets.
            </p>
          </div>
          
          <Link href="/floor-plan" className="inline-flex items-center gap-2 bg-[#2D2926] hover:bg-[#1A1817] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shrink-0 shadow-sm self-start md:self-end">
            View All Blueprints <Grid size={14} />
          </Link>
        </div>

        {/* ================= MULTIPLE FLOOR PLANS GRID MATRIX ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const isFav = !!favorites[plan.id];
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-[2.5rem] p-5 border border-gray-100 shadow-xl shadow-black/[0.005] flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/[0.015] transition-all duration-500"
              >
                {/* 1. TOP MEDIA SECTION CARD CONTAINER */}
                <div className="space-y-5">
                  <div className="relative h-[240px] rounded-[2rem] overflow-hidden bg-neutral-50 border border-gray-100">
                    <Image
                      src={plan.image || NO_IMAGE}
                      alt={plan.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      sizes="(max-w-7xl) 33vw"
                    />

                    {/* Left Badges: Popular tag */}
                    {plan.isPopular && (
                      <div className="absolute top-4 left-4 z-10 bg-[#2D2926] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg shadow-sm">
                        Popular Choice
                      </div>
                    )}

                    {/* Right Action Trigger: Favorite Heart */}
                    <button 
                      onClick={(event) => {
                        event.preventDefault();
                        toggleFavorite(plan.id);
                      }}
                      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                      className="absolute top-4 right-4 z-10 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-all shadow-sm active:scale-90"
                    >
                      <Heart size={14} className={isFav ? "fill-red-500 text-red-500" : ""} />
                    </button>

                    {/* Overlaid Technical Specification Chips */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                      <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2.5 py-1 rounded-md text-gray-700 shadow-sm flex items-center gap-1">
                        <Maximize2 size={10} className="text-[#A67153]" /> {plan.dimensions}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2.5 py-1 rounded-md text-gray-700 shadow-sm flex items-center gap-1">
                        <Compass size={10} className="text-[#A67153]" /> {plan.facing}
                      </span>
                    </div>
                  </div>

                  {/* 2. CARD DESCRIPTION & INFO METRICS */}
                  <div className="px-1 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider">
                      <span className="text-[#A67153]">{plan.category}</span>
                      <span className="text-gray-400 flex items-center gap-1"><ThumbsUp size={10} /> {plan.likes} Votes</span>
                    </div>

                    <h3 className="text-sm font-bold tracking-tight text-[#2D2926] leading-snug line-clamp-2 min-h-[40px] group-hover:text-[#A67153] transition-colors duration-300">
                      {plan.title}
                    </h3>

                    {/* Technical Parameter Row Summary */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-50 text-[11px] font-semibold text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Layers size={12} className="text-[#A67153]/70" /> <span>{plan.floors}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Grid size={12} className="text-[#A67153]/70" /> <span>{plan.bhk} Blueprint</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. CARD ACTION FOOTE MATRIX */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2 px-1">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block">Baseline Execution Cost</span>
                    <p className="text-base font-black text-[#2D2926]">{plan.price}</p>
                  </div>
                  
                  <Link href={plan.slug || "/floor-plan"}
                     aria-label={`View details for ${plan.title}`}
                     className="h-11 w-11 rounded-xl bg-[#F8F5F2] group-hover:bg-[#A67153] text-[#2D2926] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95">
                    <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
