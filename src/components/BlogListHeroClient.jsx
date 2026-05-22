'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

const NO_IMAGE = "/images/no-image.jpg";

function getImage(post) {
  return post?.thumbnail || NO_IMAGE;
}

export default function BlogListHeroClient({ blogs = [] }) {
  const [heroPost, ...gridPosts] = blogs;

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

        {heroPost ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* ================= LEFT SIDE: MASSIVE HERO STORY ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative h-[450px] lg:h-[620px] rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 group bg-gray-900"
            >
              <Link href={heroPost.slug} className="block w-full h-full relative">
                <Image 
                  src={getImage(heroPost)}
                  alt={heroPost.imageAlt || heroPost.title}
                  fill
                  className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                
                {/* Dynamic Overlay Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Anchored Text Box Content */}
                <div className="absolute bottom-0 inset-x-0 p-8 md:p-10 space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white bg-[#A67153] px-3 py-1.5 rounded-lg inline-block">
                    {heroPost.category}
                  </span>
                  
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-snug group-hover:text-gray-200 transition-colors">
                    {heroPost.title}
                  </h3>

                  <div className="flex items-center gap-6 text-[11px] text-white/60 font-medium pt-3 border-t border-white/10 w-full">
                    {heroPost.date && (
                      <div className="flex items-center gap-1.5"><Calendar size={13} />{heroPost.date}</div>
                    )}
                    {heroPost.readTime && (
                      <div className="flex items-center gap-1.5"><Clock size={13} />{heroPost.readTime}</div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ================= RIGHT SIDE: 2x2 ARCHITECTURAL MATRIX ================= */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {gridPosts.slice(0, 4).map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative h-[290px] lg:h-[296px] rounded-[1rem] overflow-hidden shadow-md border border-gray-100 group bg-gray-900"
                >
                  <Link href={post.slug} className="block w-full h-full relative">
                    <Image 
                      src={getImage(post)}
                      alt={post.imageAlt || post.title}
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
                    </div>

                    {/* Anchored Core Details */}
                    <div className="absolute bottom-0 inset-x-0 p-6 space-y-3">
                      <h4 className="text-sm md:text-base font-bold tracking-tight text-white line-clamp-2 leading-snug group-hover:text-gray-200 transition-colors">
                        {post.title}
                      </h4>

                      {post.date && (
                        <div className="flex items-center gap-4 text-[10px] text-white/50 font-medium pt-2 border-t border-white/5 w-full">
                          <div className="flex items-center gap-1"><Calendar size={11} />{post.date}</div>
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-[1rem] bg-white border border-gray-100 p-8 text-sm text-gray-400">
            No published blogs are available right now.
          </div>
        )}

      </div>
    </section>
  );
}
