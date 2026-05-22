'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calculator, ArrowRight, Clock } from 'lucide-react';
import HeroFrom from './HeroFrom';

const NO_IMAGE = "/images/no-image.jpg";

const SIDEBAR_TOOLS = [
  { name: "Brick Calculator", desc: "Estimate exact brick count" },
  { name: "Paint Area Estimator", desc: "Wall coverage calculator" },
  { name: "Steel Weight Chart", desc: "Structural steel reference" }
];

function filterBlogs(blogs, query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  return blogs.filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.author,
    ].filter(Boolean).join(" ").toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export default function BlogSidebar({ blogs = [], searchQuery, onSearchChange }) {
  const [internalSearchQuery, setInternalSearchQuery] = useState('');
  const [fallbackBlogs, setFallbackBlogs] = useState([]);
  const currentSearchQuery = searchQuery ?? internalSearchQuery;
  const availableBlogs = blogs.length > 0 ? blogs : fallbackBlogs;
  const recentPosts = availableBlogs.slice(0, 4);
  const searchResults = filterBlogs(availableBlogs, currentSearchQuery).slice(0, 6);

  useEffect(() => {
    if (blogs.length > 0) return;

    let isMounted = true;

    fetch('/api/blogs')
      .then((response) => (response.ok ? response.json() : { blogs: [] }))
      .then((payload) => {
        if (isMounted) setFallbackBlogs(Array.isArray(payload.blogs) ? payload.blogs : []);
      })
      .catch(() => {
        if (isMounted) setFallbackBlogs([]);
      });

    return () => {
      isMounted = false;
    };
  }, [blogs.length]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    if (onSearchChange) {
      onSearchChange(value);
      return;
    }

    setInternalSearchQuery(value);
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
            value={currentSearchQuery}
            onChange={handleSearchChange}
            className="w-full bg-[#F8F5F2] text-xs px-5 py-4 rounded-xl text-[#2D2926] placeholder-gray-400 border border-transparent focus:border-[#A67153]/30 focus:bg-white outline-none transition-all duration-300"
          />
          <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        {currentSearchQuery.trim() && (
          <div className="mt-4 space-y-3">
            {searchResults.length > 0 ? (
              searchResults.map((post) => (
                <Link key={post.id} href={post.slug} className="block rounded-xl bg-[#F8F5F2] px-4 py-3 group">
                  <h4 className="text-xs font-bold text-[#2D2926] group-hover:text-[#A67153] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="mt-1 text-[10px] text-gray-400 font-medium">{post.category}</p>
                </Link>
              ))
            ) : (
              <p className="text-xs text-gray-400 bg-[#F8F5F2] px-4 py-3 rounded-xl">
                No matching blogs found.
              </p>
            )}
          </div>
        )}
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
          {recentPosts.length > 0 ? recentPosts.map((post) => (
            <Link key={post.id} href={post.slug} className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                <Image
                  src={post.thumbnail || NO_IMAGE}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#2D2926] group-hover:text-[#A67153] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium">{post.date}</p>
              </div>
            </Link>
          )) : (
            <p className="text-xs text-gray-400">No recent articles available.</p>
          )}
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
