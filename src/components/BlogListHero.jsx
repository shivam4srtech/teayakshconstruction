'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight, Play } from 'lucide-react';

const HERO_MAIN = {
  id: "main-01",
  title: "A Single Mother’s Dream Home: How the Right Construction Company Made All the Difference",
  category: "Construction Guide",
  date: "January 16, 2026",
  readTime: "8 min read",
  thumbnail: "https://images.unsplash.com/photo-1541915351239-015846f4b670?q=80&w=1200",
  slug: "/blog/single-mother-dream-home",
  isVideo: true // Renders a sleek video marker icon
};

const GRID_POSTS = [
  {
    id: "grid-01",
    title: "A Real Dream Home: A Happy Homeowner’s Experience with Brick and Bolt",
    category: "Patron Voice",
    date: "January 15, 2026",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
    slug: "/blog/homeowner-experience-brick-bolt",
    isVideo: true
  },
  {
    id: "grid-02",
    title: "Why U-Shaped Modular Kitchen Design Is Perfect for Modern Homes",
    category: "Interior Couture",
    date: "January 14, 2026",
    readTime: "4 min read",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
    slug: "/blog/u-shaped-modular-kitchen-design"
  },
  {
    id: "grid-03",
    title: "How to Make Your Small Living Room Design Feel More Spacious",
    category: "Spatial Science",
    date: "January 12, 2026",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
    slug: "/blog/spacious-small-living-room"
  },
  {
    id: "grid-04",
    title: "Sankranti Special: Plan Today, Build at the Right Muhurat",
    category: "Culture & Vastu",
    date: "January 12, 2026",
    readTime: "3 min read",
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600",
    slug: "/blog/sankranti-special-muhurat-planning"
  }
];

export default function BlogListHero() {
  return (
    <section className="pt-26  bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Section Title */}
        <div className="mb-8 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67153] mb-3 block">
            Trayaksh Chronicles
          </span>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter">
            The Design <span className=" font-light text-[#A67153]">Journal</span>
          </h1>
        </div>

        {/* Master Editorial Grid Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ================= LEFT SIDE: MASSIVE HERO STORY ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative h-[450px] lg:h-[620px] rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 group bg-gray-900"
          >
            <Link href={HERO_MAIN.slug} className="block w-full h-full relative">
              <Image 
                src={HERO_MAIN.thumbnail}
                alt={HERO_MAIN.title}
                fill
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              
              {/* Dynamic Overlay Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Media Condition Badge Overlay */}
              {HERO_MAIN.isVideo && (
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center group-hover:bg-[#A67153] group-hover:scale-110 transition-all duration-300">
                  <Play size={16} className="ml-0.5 fill-current" />
                </div>
              )}

              {/* Anchored Text Box Content */}
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-10 space-y-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-white bg-[#A67153] px-3 py-1.5 rounded-lg inline-block">
                  {HERO_MAIN.category}
                </span>
                
                <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-snug group-hover:text-gray-200 transition-colors">
                  {HERO_MAIN.title}
                </h3>

                <div className="flex items-center gap-6 text-[11px] text-white/60 font-medium pt-3 border-t border-white/10 w-full">
                  <div className="flex items-center gap-1.5"><Calendar size={13} />{HERO_MAIN.date}</div>
                  <div className="flex items-center gap-1.5"><Clock size={13} />{HERO_MAIN.readTime}</div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ================= RIGHT SIDE: 2x2 ARCHITECTURAL MATRIX ================= */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {GRID_POSTS.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative h-[290px] lg:h-[296px] rounded-[1rem] overflow-hidden shadow-md border border-gray-100 group bg-gray-900"
              >
                <Link href={post.slug} className="block w-full h-full relative">
                  <Image 
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Subtle Darkening Overlay Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Top Floating Category */}
                  <div className="absolute top-5 left-5 flex justify-between items-center w-[calc(100%-2.5rem)]">
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    {post.isVideo && (
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-[10px]">
                        <Play size={10} className="ml-0.5 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Anchored Core Details */}
                  <div className="absolute bottom-0 inset-x-0 p-6 space-y-3">
                    <h4 className="text-sm md:text-base font-bold tracking-tight text-white line-clamp-2 leading-snug group-hover:text-gray-200 transition-colors">
                      {post.title}
                    </h4>

                    <div className="flex items-center gap-4 text-[10px] text-white/50 font-medium pt-2 border-t border-white/5 w-full">
                      <div className="flex items-center gap-1"><Calendar size={11} />{post.date}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}