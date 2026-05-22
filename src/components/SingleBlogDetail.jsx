'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronRight, Hash, Bookmark, Clock, HelpCircle, ArrowUpRight } from 'lucide-react';
import BlogSidebar from './BlogSidebar';

const NO_IMAGE = "/images/no-image.jpg";

export default function SingleBlogDetail({ blog, recentBlogs = [] }) {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
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
        <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 mb-4 overflow-x-auto">
          <Link href="/" className="hover:text-[#A67153] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blogs" className="hover:text-[#A67153] transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-[#2D2926] font-bold truncate">{blog.title}</span>
        </div>

        {/* MASTER GRID FRAMEWORK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: DEEP CONTENT ARTICLE FRAME (8 COLUMNS) ================= */}
          <article className="lg:col-span-8 space-y-8 bg-white p-4 md:p-8 rounded-[1rem] border border-gray-100 shadow-xl shadow-black/[0.005]">
            
            {/* Meta Header Information Row */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#A67153] bg-[#F8F5F2] px-3 py-1.5 rounded-lg inline-block">
                {blog.category}
              </span>
              
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#2D2926] leading-tight mb-2">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium pt-2">
                {blog.author && (
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-[#A67153]" />
                    <span>By {blog.author}</span>
                  </div>
                )}
                {blog.readTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#A67153]" />
                    <span>{blog.readTime}</span>
                  </div>
                )}
                {blog.date && (
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#A67153]" />
                    <span>{blog.date}</span>
                  </div>
                )}
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
                src={blog.featuredImage || NO_IMAGE}
                alt={blog.imageAlt || blog.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* ARTICLE SHORT DESCRIPTION BLOCK (INTRO COUTURE) */}
            {blog.shortDescription && (
              <div className="border-l-4 border-[#A67153] pl-6 py-2">
                <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                  {blog.shortDescription}
                </p>
              </div>
            )}

            {/* EDITORIAL TABLE OF CONTENTS BOX GRID */}
            {blog.toc.length > 0 && (
              <div className="bg-[#F8F5F2] p-8 rounded-3xl border border-gray-200/60 space-y-2">
                <div className="flex items-center gap-2 text-[#2D2926] font-bold text-sm uppercase tracking-wider">
                  <Bookmark size={16} className="text-[#A67153]" />
                  <h3>Table of Contents</h3>
                </div>
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-500">
                  {blog.toc.map((item) => (
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
            )}

            {/* RAW READABLE RICH-TEXT CONTENT AREA */}
            {blog.description && (
              <div
                className="blog-rich-content max-w-none text-gray-500 text-sm md:text-base leading-relaxed pt-4"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            )}

            {(blog.author || blog.authorBio || blog.categoryDescription) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {(blog.author || blog.authorBio) && (
                  <div className="bg-[#F8F5F2] rounded-[1rem] border border-gray-200/70 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#A67153] text-white flex items-center justify-center text-sm font-bold">
                        {(blog.author || "T").charAt(0)}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Author</p>
                        <h3 className="text-sm font-bold text-[#2D2926]">{blog.author || "Trayaksh Team"}</h3>
                      </div>
                    </div>
                    {blog.authorBio && <p className="text-xs text-gray-500 leading-relaxed">{blog.authorBio}</p>}
                  </div>
                )}

                {(blog.category || blog.categoryDescription) && (
                  <div className="bg-[#2D2926] rounded-[1rem] text-white p-6">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-2">Category</p>
                    <h3 className="text-sm font-bold mb-2">{blog.category}</h3>
                    {blog.categoryDescription && <p className="text-xs text-white/55 leading-relaxed">{blog.categoryDescription}</p>}
                  </div>
                )}
              </div>
            )}

            {blog.faqs.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#2D2926]">
                  <HelpCircle size={20} className="text-[#A67153]" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {blog.faqs.map((faq) => (
                    <details key={faq.id || faq.question} className="group bg-[#F8F5F2] rounded-[1rem] border border-gray-200/70 p-5">
                      <summary className="cursor-pointer list-none text-sm font-bold text-[#2D2926] flex items-center justify-between gap-4">
                        {faq.question}
                        <span className="text-[#A67153] group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {blog.relatedBlogs.length > 0 && (
              <div className="space-y-5 pt-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D2926]">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {blog.relatedBlogs.slice(0, 4).map((post) => (
                    <Link key={post.id} href={post.slug} className="group bg-[#F8F5F2] rounded-[1rem] border border-gray-200/70 overflow-hidden">
                      <div className="relative h-40 bg-gray-100">
                        <Image
                          src={post.thumbnail || NO_IMAGE}
                          alt={post.imageAlt || post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] uppercase tracking-widest text-[#A67153] font-black mb-2">{post.category}</p>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-bold text-[#2D2926] group-hover:text-[#A67153] transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#A67153] shrink-0" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </article>

          {/* ================= RIGHT COLUMN: EXISTING STICKY SIDEBAR (4 COLUMNS) ================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-22">
            <BlogSidebar blogs={recentBlogs} />
          </aside>

        </div>

      </div>
    </section>
  );
}
