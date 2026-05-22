'use client';

import { useState } from 'react';
import CategorizedBlogFeed from './CategorizedBlogFeed';
import BlogSidebar from './BlogSidebar';

export default function BlogJournalWithSidebarClient({ blogs = [] }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-10 bg-[#F8F5F2] text-[#2D2926]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        
        {/* Master Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Main Categorized Feed Streams (8 Columns wide) */}
          <div className="lg:col-span-8 space-y-4">
            <CategorizedBlogFeed blogs={blogs} searchQuery={searchQuery} />
          </div>

          {/* RIGHT COLUMN: Sticky Interactive Hub Sidebar (4 Columns wide) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-10">
            <BlogSidebar
              blogs={blogs}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </aside>

        </div>

      </div>
    </section>
  );
}
