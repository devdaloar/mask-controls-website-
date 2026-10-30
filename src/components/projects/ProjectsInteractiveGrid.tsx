"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Activity, 
  Gauge, 
  Radio, 
  Flame, 
  Factory, 
  Sliders, 
  Eye, 
  Zap, 
  Cog, 
  TrendingUp, 
  Award,
  ChevronRight
} from "lucide-react";

export interface ProjectItem {
  id: string;
  category: string;
  categoryTag: string;
  badgeIcon: string;
  title: string;
  emoji: string;
  image: string;
  description: string;
  keyFeatures: string[];
  results: string[];
  specs: { label: string; val: string }[];
}

interface ProjectsInteractiveGridProps {
  projects: ProjectItem[];
}

export default function ProjectsInteractiveGrid({ projects }: ProjectsInteractiveGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { label: "All Projects", key: "All" },
    { label: "Food & FMCG", key: "Food & FMCG" },
    { label: "PLC & HMI", key: "PLC & HMI" },
    { label: "Telemetry & Wireless", key: "Telemetry" },
    { label: "Custom Machinery", key: "Machinery" },
    { label: "Material Handling", key: "Lifting" },
    { label: "Safety Critical", key: "Safety" }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          const count = cat.key === "All" 
            ? projects.length 
            : projects.filter(p => p.category === cat.key).length;

          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? "bg-[#6DA7BF] text-[#070D16] shadow-lg shadow-[#6DA7BF]/25 font-bold"
                  : "bg-[#0C121C] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-[#121A27]"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                isActive ? "bg-[#070D16]/20 text-[#070D16]" : "bg-white/10 text-slate-400"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="rounded-3xl bg-[#0C121C] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col group"
          >
            {/* Top Media Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#070D16]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-[#0C121C]/30 to-transparent" />
              
              {/* Category Pill Over Image */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070D16]/85 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#6DA7BF]">
                  <span>{project.emoji}</span>
                  <span>{project.categoryTag}</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#6DA7BF] transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Key Features & Results Side-by-Side or Stacked */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-white/10">
                {/* Features */}
                <div className="space-y-3 bg-[#070D16]/60 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#6DA7BF] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="space-y-3 bg-[#070D16]/60 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Measurable Results</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((res, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quick Spec Metadata Row */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                {project.specs.map((sp, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg py-2 px-1">
                    <div className="text-[10px] uppercase font-mono text-slate-400">{sp.label}</div>
                    <div className="font-semibold text-white truncate px-1 text-[11px] sm:text-xs">{sp.val}</div>
                  </div>
                ))}
              </div>

              {/* Card Action Link */}
              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/contact/"
                  className="text-xs font-bold text-[#6DA7BF] hover:text-white transition-colors flex items-center gap-1.5 group/link"
                >
                  <span>Inquire About Similar Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-slate-500">
                  MASK CONTROL SYSTEMS
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
