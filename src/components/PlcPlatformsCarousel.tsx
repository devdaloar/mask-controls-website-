"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, HelpCircle } from "lucide-react";

export interface PlcPlatform {
  name: string;
  sub: string;
  href?: string;
}

export const plcPlatformsList: PlcPlatform[] = [
  { name: "SIEMENS", sub: "TIA Portal • S7-1500 & S7-1200", href: "/siemens-plc/" },
  { name: "MITSUBISHI", sub: "MELSEC • iQ-R, iQ-F & FX Series", href: "/mitsubishi-plc/" },
  { name: "UNITRONICS", sub: "UniStream & Vision All-in-One", href: "/unitronics-plc/" },
  { name: "SCHNEIDER ELECTRIC", sub: "Modicon • EcoStruxure Machine", href: "/contact/" },
  { name: "ABB", sub: "AC500 PLC & Automation Builder", href: "/contact/" },
  { name: "ALLEN-BRADLEY", sub: "Rockwell ControlLogix & CompactLogix", href: "/contact/" },
  { name: "DELTA AUTOMATION", sub: "DVP Series & AS High-Performance", href: "/contact/" },
  { name: "PHOENIX CONTACT", sub: "PLCnext Technology & Axioline", href: "/contact/" },
  { name: "OMRON", sub: "Sysmac Studio • NJ & NX Series", href: "/contact/" },
  { name: "BECKHOFF", sub: "TwinCAT 3 PC-based Automation", href: "/contact/" }
];

export default function PlcPlatformsCarousel() {
  return (
    <div className="w-full space-y-8 select-none">
      
      {/* Responsive Grid: 100% Full Width on mobile, 2 cols on tablet, 3 on md, 5 on lg/xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 w-full">
        {plcPlatformsList.map((platform) => (
          <Link
            key={platform.name}
            href={platform.href || "/contact/"}
            className="w-full group px-5 py-3.5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all duration-200 shadow-md flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#6DA7BF] transition-colors tracking-wide truncate">
                {platform.name}
              </div>
              <div className="text-[11px] sm:text-[10px] text-slate-400 font-light mt-0.5 truncate">
                {platform.sub}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Helpful Closing Message / Banner */}
      <div className="max-w-2xl mx-auto rounded-2xl bg-[#0C121C]/80 border border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Don&apos;t see your specific PLC platform?
            </div>
            <div className="text-[11px] text-slate-400 font-light">
              We work across all major industrial controllers and legacy systems.
            </div>
          </div>
        </div>

        <Link
          href="/contact/"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-sm"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
