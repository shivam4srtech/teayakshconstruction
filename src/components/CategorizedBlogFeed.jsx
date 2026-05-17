'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight, LayoutGrid } from 'lucide-react';

const CATEGORIZED_DATA = [
  {
    categoryName: "Material Honesty",
    tagline: "Exploring raw, premium elements sourced globally for zero-compromise builds.",
    posts: [
      {
        id: "mat-01",
        title: "Sourcing Italian Statuario: The Elite Stone Curation Guide",
        excerpt: "How our lead visionaries travel directly to Carrara quarries to verify vein continuities before structural placement.",
        date: "April 28, 2026",
        readTime: "4 min read",
        thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
        slug: "/blog/sourcing-statuario-marble"
      },
      {
        id: "mat-02",
        title: "The Art of Deep Custom Veneers and Fluted Charcoal Accents",
        excerpt: "Step-by-step breakdown on manipulating soft mood lighting against highly textured vertical wood finishes.",
        date: "March 12, 2026",
        readTime: "4 min read",
        thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
        slug: "/blog/fluted-charcoal-accents"
      }
    ]
  },
  {
    categoryName: "Spatial Science & Layouts",
    tagline: "Bridging mathematical precision, geometric optimization, and ancient Vastu.",
    posts: [
      {
        id: "spat-01",
        title: "Demystifying Modern Vastu: Balancing Energy Flow",
        excerpt: "A technical architectural breakdown on implementing ancient zoning rules into modern geometric villa layouts.",
        date: "April 15, 2026",
        readTime: "5 min read",
        thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600",
        slug: "/blog/modern-vastu-spatial-energy"
      },
      {
        id: "spat-02",
        title: "How to Make Your Small Living Room Feel Incredibly Spacious",
        excerpt: "Leveraging hidden sightlines, glass placements, and custom built-ins to open up compact urban footings.",
        date: "January 12, 2026",
        readTime: "5 min read",
        thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600",
        slug: "/blog/spacious-small-living-room"
      },
      {
        id: "spat-03",
        title: "The Physics of High-Acoustic Double Glazing Systems",
        excerpt: "Why the structural blueprint requires specialized glass profile isolation to separate busy outside city cores.",
        date: "March 30, 2026",
        readTime: "7 min read",
        thumbnail: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600",
        slug: "/blog/high-acoustic-double-glazing"
      }
    ]
  }
];

export default function CategorizedBlogFeed() {
  return (
    <section className="py-12 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto">
        
        {/* Loop Through Individual Design Categories */}
        {CATEGORIZED_DATA.map((cat, catIdx) => (
          <div key={catIdx} className="mb-24 last:mb-0">
            
            {/* CATEGORY SECTION HEADER BLOCK */}
            <div className="border-b border-gray-200/80 pb-6 mb-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#A67153]">
                  <LayoutGrid size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Volume {catIdx + 1}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2D2926]">
                  {cat.categoryName}
                </h2>
                <p className="text-gray-400 text-xs md:text-sm max-w-xl leading-relaxed">
                  {cat.tagline}
                </p>
              </div>

              {/* Action count pill indicator */}
              <div className="shrink-0 text-[.7rem] font-bold text-gray-400 bg-white border border-gray-200 px-3 py-2 rounded-full self-start md:self-auto">
                {cat.posts.length} {cat.posts.length === 1 ? 'Edition' : 'Editions'} Available
              </div>
            </div>

            {/* CATEGORY BLOGS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-10">
              {cat.posts.map((post, postIdx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: postIdx * 0.1 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/[0.01] flex flex-col h-full group hover:shadow-2xl hover:border-[#A67153]/20 transition-all duration-500"
                >
                  <Link href={post.slug} className="flex flex-col h-full">
                    
                    {/* Media Thumbnail Container Frame */}
                    <div className="relative h-[240px] w-full overflow-hidden bg-gray-50">
                      <Image 
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-w-7xl) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Copy Details Area */}
                    <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#2D2926] group-hover:text-[#A67153] transition-colors duration-300 leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="w-7 h-7 rounded-full bg-[#F8F5F2] text-gray-400 group-hover:text-white group-hover:bg-[#A67153] flex items-center justify-center transition-all duration-300 shrink-0 mt-0.5">
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Metadata Row Divider Footer */}
                      <div className="flex items-center gap-5 text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-4 border-t border-gray-100 w-full">
                        <div className="flex items-center gap-1"><Calendar size={12} className="text-[#A67153]" />{post.date}</div>
                        <div className="flex items-center gap-1"><Clock size={12} className="text-[#A67153]" />{post.readTime}</div>
                      </div>
                    </div>

                  </Link>
                </motion.article>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}