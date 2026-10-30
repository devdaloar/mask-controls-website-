"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Search, 
  BookOpen,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";

const categories = [
  "All Articles",
  "Industrial Automation"
];

export default function BlogInteractiveArchive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = 
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className="space-y-12">
      {/* Featured Lead Article (when no search or "All Articles") */}
      {selectedCategory === "All Articles" && !searchQuery && featuredPost && (
        <div className="relative rounded-[24px] sm:rounded-[32px] border border-[#6DA7BF]/30 bg-gradient-to-b from-[#0F1724] to-[#0A111C] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 group hover:border-[#6DA7BF]/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute top-4 left-4 bg-[#6DA7BF] text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Featured Analysis
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="text-[#6DA7BF] font-semibold">{featuredPost.category}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredPost.date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-[#6DA7BF] transition-colors">
                <Link href={`/blog/${featuredPost.slug}/`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {featuredPost.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href={`/blog/${featuredPost.slug}/`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6DA7BF] text-slate-950 font-bold text-xs sm:text-sm tracking-wide hover:bg-[#5892A9] transition-all shadow-lg hover:shadow-[#6DA7BF]/25"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  isActive
                    ? "bg-[#6DA7BF] text-slate-950 border-[#6DA7BF] shadow-[0_0_15px_rgba(109,167,191,0.35)]"
                    : "bg-[#0C121C] text-slate-300 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search engineering articles..."
            className="w-full bg-[#0C121C] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#6DA7BF] transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#0C121C] border border-white/10 rounded-2xl">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No articles found</h3>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl bg-[#0C121C] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all duration-300 hover:shadow-xl group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-900 border-b border-white/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-[#6DA7BF] text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#6DA7BF]" />
                        {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#6DA7BF]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#6DA7BF] transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}/`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    By {post.author.name.replace("MASK Controls ", "")}
                  </span>

                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#6DA7BF] hover:text-white transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
