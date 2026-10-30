"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  ArrowUpRight, 
  Sparkles, 
  SlidersHorizontal,
  ShieldCheck,
  Award
} from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  countryCode: string;
  category: "all" | "food" | "aerospace" | "heavy" | "water" | "international";
  rating: number;
  highlight: string;
  quote: string;
  projectScope: string;
  metric: string;
  verified: boolean;
  featured?: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "sophie-dubois",
    name: "Sophie Dubois",
    role: "Project Manager",
    company: "Industrial Manufacturing Group",
    location: "Lyon, France",
    countryCode: "FR",
    category: "international",
    rating: 5,
    highlight: "Exceeded all our operational expectations",
    quote: "We needed a bespoke automation system, and MASK exceeded our expectations. The team was professional, responsive, and delivered a solution that perfectly matched our operational needs.",
    projectScope: "Bespoke Automated Handling Machinery",
    metric: "100% On-Spec Handover",
    verified: true,
    featured: true
  },
  {
    id: "james-carter",
    name: "James Carter",
    role: "Head of Engineering",
    company: "Advanced Manufacturing UK",
    location: "Birmingham, United Kingdom",
    countryCode: "GB",
    category: "heavy",
    rating: 5,
    highlight: "Significantly reduced downtime and improved efficiency",
    quote: "MASK Control Systems delivered a highly reliable automation solution for our production line. Their engineering expertise and attention to detail helped us significantly reduce downtime and improve overall efficiency.",
    projectScope: "Production Line PLC Automation & Control Panel Upgrade",
    metric: "35% Reduction in Unplanned Downtime",
    verified: true,
    featured: true
  },
  {
    id: "aisha-khan",
    name: "Aisha Khan",
    role: "Operations Director",
    company: "Gulf Industrial Logistics",
    location: "Dubai, UAE",
    countryCode: "AE",
    category: "international",
    rating: 5,
    highlight: "Global support capability from design to commissioning",
    quote: "Their global support capability really stood out. From design to commissioning, everything was handled smoothly. The system performance and reliability have made a noticeable impact on our operations.",
    projectScope: "Automated Material Sorting & Remote SCADA Telemetry",
    metric: "99.7% System Reliability",
    verified: true,
    featured: true
  },
  {
    id: "david-evans",
    name: "David Evans",
    role: "Plant Operations Manager",
    company: "South West Dairy Processing Ltd",
    location: "Devon, United Kingdom",
    countryCode: "GB",
    category: "food",
    rating: 5,
    highlight: "Flawless CIP integration with zero hygienic compliance issues",
    quote: "The automated milk routing and CIP control cabinet designed by MASK increased our throughput while maintaining 100% compliance with strict food hygiene standards. The HMI screen is intuitive for operators and the fail-safe interlocks give us total peace of mind.",
    projectScope: "Milk Processing Control Cabinet & CIP Valve Manifold Logic",
    metric: "28% Increase in Daily Processing Throughput",
    verified: true
  },
  {
    id: "dr-richard-miller",
    name: "Dr. Richard Miller",
    role: "Test Facilities Director",
    company: "Aerospace Testing Infrastructure",
    location: "Bristol, United Kingdom",
    countryCode: "GB",
    category: "aerospace",
    rating: 5,
    highlight: "Exacting standards met with rigorous ISO 17025 documentation",
    quote: "MASK designed and certified our safety interlock test rig to exacting UK aerospace and defence standards. Their ISO 17025 calibration, electrical schematics in EPLAN, and FAT handover documentation were exceptional from day one.",
    projectScope: "High-Pressure Hydraulic Safety Interlock & Test Rig",
    metric: "Zero Calibration Non-Conformities",
    verified: true
  },
  {
    id: "marcus-higgins",
    name: "Marcus Higgins",
    role: "Lead Infrastructure Engineer",
    company: "Regional Utilities Contractor",
    location: "Exeter, United Kingdom",
    countryCode: "GB",
    category: "water",
    rating: 5,
    highlight: "Remote telemetry eliminated emergency weekend callouts",
    quote: "The cloud telemetry and remote monitoring system allows our engineering team to monitor 12 critical pumping stations in real-time from a central SCADA dashboard. Unplanned weekend callouts dropped dramatically in the first 90 days.",
    projectScope: "12-Station SCADA Telemetry & Remote IIoT Architecture",
    metric: "64% Reduction in Emergency Callouts",
    verified: true
  },
  {
    id: "graham-phillips",
    name: "Graham Phillips",
    role: "Managing Director",
    company: "Forest Tech Machinery Ltd",
    location: "Somerset, United Kingdom",
    countryCode: "GB",
    category: "heavy",
    rating: 5,
    highlight: "Rugged IP65 control enclosure built for harsh environments",
    quote: "MASK engineered the auto-feed electrical control panel for our heavy industrial wood chipper line. The anti-jam PLC reversing logic and heavy-duty vibration-resistant components perform flawlessly in extreme outdoor conditions.",
    projectScope: "Auto-Feed Wood Chipper Control Panel & Anti-Jam PLC Logic",
    metric: "100% Elimination of Motor Burnout Incidents",
    verified: true
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Automation Engineering Lead",
    company: "Precision Logistics & Packaging Systems",
    location: "Frankfurt, Germany",
    countryCode: "DE",
    category: "international",
    rating: 5,
    highlight: "Seamless Siemens TIA Portal integration across 4 conveyor lines",
    quote: "Collaborating with MASK's control engineers across borders was effortless. They programmed our Siemens S7-1500 network remotely, flew in for on-site commissioning, and had our multi-tier conveyor sorting line operational ahead of schedule.",
    projectScope: "Siemens S7-1500 PLC & Profinet Conveyor Sorting Integration",
    metric: "Commissioned 4 Days Ahead of Schedule",
    verified: true
  },
  {
    id: "paul-henderson",
    name: "Paul Henderson",
    role: "Operations Superintendent",
    company: "Automotive Component Manufacturer (Tier-2)",
    location: "Coventry, United Kingdom",
    countryCode: "GB",
    category: "heavy",
    rating: 5,
    highlight: "Safety Cat 4 / PLe compliance achieved without production bottlenecks",
    quote: "When we upgraded our press feed robotic cells, MASK re-engineered the safety control architecture to meet ISO 13849-1 Category 4 / PLe. Their safety PLC logic seamlessly blends high worker safety with rapid cycle times.",
    projectScope: "Robotic Press Feed Safety PLC Architecture & Guard Interlocks",
    metric: "Full ISO 13849-1 Cat 4 / PLe Certification",
    verified: true
  }
];

const categoryTabs = [
  { id: "all", label: "All Reviews" },
  { id: "food", label: "Food & FMCG" },
  { id: "aerospace", label: "Aerospace & Defence" },
  { id: "heavy", label: "Manufacturing & OEM" },
  { id: "water", label: "Water & Utilities" },
  { id: "international", label: "International Clients" }
];

export default function TestimonialsInteractiveGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials = testimonialsData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {categoryTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                isActive
                  ? "bg-[#6DA7BF] text-slate-950 border-[#6DA7BF] shadow-[0_0_15px_rgba(109,167,191,0.35)]"
                  : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20 hover:text-white hover:bg-slate-800"
              }`}
            >
              {tab.label}
              {tab.id === "all" ? ` (${testimonialsData.length})` : ""}
            </button>
          );
        })}
      </div>

      {/* Featured 3 Testimonials Banner (from original WordPress site) */}
      {activeCategory === "all" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6DA7BF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF]">
              Featured Client Endorsements
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonialsData.filter(t => t.featured).map((feat) => (
              <div 
                key={feat.id}
                className="relative rounded-2xl bg-[#0C121C] border border-[#6DA7BF]/30 p-6 sm:p-7 shadow-xl flex flex-col justify-between group hover:border-[#6DA7BF]/60 transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-[#6DA7BF]/20 group-hover:text-[#6DA7BF]/30 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(feat.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug">
                    &ldquo;{feat.highlight}&rdquo;
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    &ldquo;{feat.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm flex items-center gap-1.5">
                        {feat.name}
                        {feat.verified && (
                          <span title="Verified Client Review">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#6DA7BF]">
                        {feat.role} &bull; {feat.location}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#6DA7BF]/10 text-[#6DA7BF] border border-[#6DA7BF]/20 text-[11px] font-semibold">
                      {feat.metric}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="truncate">Scope: {feat.projectScope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid for Filtered Testimonials */}
      <div className="space-y-4">
        {activeCategory !== "all" && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Showing <strong className="text-white">{filteredTestimonials.length}</strong> verified reviews in this sector:
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="space-y-4">
                {/* Header: Stars & Metric */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                    {item.metric}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors leading-snug">
                  &ldquo;{item.highlight}&rdquo;
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </p>
                    <p className="text-xs text-slate-400">
                      {item.role} &bull; <span className="text-[#6DA7BF]">{item.company}</span>
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#6DA7BF]" />
                    {item.location.split(",")[1]?.trim() || item.location}
                  </span>
                </div>

                <div className="bg-slate-900/60 rounded-lg px-3 py-2 text-[11px] text-slate-400 border border-white/5">
                  <span className="text-slate-300 font-semibold">Delivered: </span>
                  {item.projectScope}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
