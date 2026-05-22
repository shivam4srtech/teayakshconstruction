'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight, LayoutGrid } from 'lucide-react';

const NO_IMAGE = "/images/no-image.jpg";
const POSTS_PER_PAGE = 4;

function matchesSearch(post, query) {
  if (!query) return true;

  const haystack = [
    post.title,
    post.excerpt,
    post.category,
    post.author,
  ].filter(Boolean).join(" ").toLowerCase();

  return haystack.includes(query.toLowerCase().trim());
}

function groupBlogsByCategory(blogs) {
  return blogs.reduce((groups, post) => {
    const categoryName = post.category || "Journal";
    const existing = groups.find((group) => group.categoryName === categoryName);

    if (existing) {
      existing.posts.push(post);
      return groups;
    }

    groups.push({
      categoryName,
      tagline: `Latest insights from our ${categoryName.toLowerCase()} journal.`,
      posts: [post],
    });

    return groups;
  }, []);
}

export default function CategorizedBlogFeed({ blogs = [], searchQuery = '' }) {
  const [paginationState, setPaginationState] = useState({ scopeKey: '', counts: {} });
  const scopeKey = `${searchQuery.trim().toLowerCase()}::${blogs.map((post) => post.id).join('|')}`;
  const visibleCounts = paginationState.scopeKey === scopeKey ? paginationState.counts : {};
  const filteredBlogs = useMemo(
    () => blogs.filter((post) => matchesSearch(post, searchQuery)),
    [blogs, searchQuery]
  );
  const categorizedData = useMemo(() => groupBlogsByCategory(filteredBlogs), [filteredBlogs]);

  const getVisibleCount = (categoryName) => visibleCounts[categoryName] || POSTS_PER_PAGE;

  const handleLoadMore = (categoryName) => {
    setPaginationState((currentState) => {
      const currentCounts = currentState.scopeKey === scopeKey ? currentState.counts : {};

      return {
        scopeKey,
        counts: {
          ...currentCounts,
          [categoryName]: (currentCounts[categoryName] || POSTS_PER_PAGE) + POSTS_PER_PAGE,
        },
      };
    });
  };

  return (
    <section className="py-12 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto">
        
        {categorizedData.length > 0 ? (
          categorizedData.map((cat, catIdx) => (
            <div key={cat.categoryName} className="mb-24 last:mb-0">
              
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
                {cat.posts.slice(0, getVisibleCount(cat.categoryName)).map((post, postIdx) => (
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
                          src={post.thumbnail || NO_IMAGE}
                          alt={post.imageAlt || post.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
                          {post.excerpt && (
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                              {post.excerpt}
                            </p>
                          )}
                        </div>

                        {/* Metadata Row Divider Footer */}
                        <div className="flex items-center gap-5 text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-4 border-t border-gray-100 w-full">
                          {post.date && (
                            <div className="flex items-center gap-1"><Calendar size={12} className="text-[#A67153]" />{post.date}</div>
                          )}
                          {post.readTime && (
                            <div className="flex items-center gap-1"><Clock size={12} className="text-[#A67153]" />{post.readTime}</div>
                          )}
                        </div>
                      </div>

                    </Link>
                  </motion.article>
                ))}
              </div>

              {cat.posts.length > getVisibleCount(cat.categoryName) && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleLoadMore(cat.categoryName)}
                    className="px-6 py-3 rounded-full bg-[#2D2926] text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#A67153] transition-colors duration-300"
                  >
                    Load More
                  </button>
                </div>
              )}

            </div>
          ))
        ) : (
          <div className="bg-white rounded-[1rem] border border-gray-100 p-8 text-sm text-gray-400">
            {searchQuery ? `No blogs found for "${searchQuery}".` : "No published blogs are available right now."}
          </div>
        )}

      </div>
    </section>
  );
}
