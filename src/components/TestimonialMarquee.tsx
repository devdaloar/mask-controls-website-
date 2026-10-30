"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  sector: string;
  country: string;
  flag: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "MASK Control Systems delivered a bespoke multi-axis packaging line that exceeded our throughput targets. Their engineering responsiveness and emergency on-site support have made them our go-to UK automation partner.",
    name: "James Carter",
    title: "Head of Engineering",
    sector: "High-Speed Food Packaging",
    country: "United Kingdom",
    flag: "🇬🇧"
  },
  {
    id: 2,
    quote: "The Siemens TIA Portal PLC integration and SCADA diagnostics built by MASK eliminated recurring synchronization errors on our press line. Exceptional precision and adherence to European machine safety directives.",
    name: "Markus Weber",
    title: "Technical Plant Director",
    sector: "Automotive Precision Assembly",
    country: "Germany",
    flag: "🇩🇪"
  },
  {
    id: 3,
    quote: "From initial electrical design to full SAT commissioning, MASK proved their multidisciplinary capability. The documentation, calibration rigor, and operator interface made international deployment seamless.",
    name: "Sophie Dubois",
    title: "Senior Project Manager",
    sector: "Pharmaceutical Automation",
    country: "France",
    flag: "🇫🇷"
  },
  {
    id: 4,
    quote: "Their cloud telemetry and remote monitoring system gave our control room 24/7 visibility over critical pumping assets. Downtime was reduced by over 40% within the first three months of operation.",
    name: "Aisha Khan",
    title: "Operations Director",
    sector: "Water & Utilities Infrastructure",
    country: "United Arab Emirates",
    flag: "🇦🇪"
  },
  {
    id: 5,
    quote: "We contracted MASK to design and fabricate custom sensor test rigs meeting strict ISO 17025 standards. The build quality, wiring schematics, and automated data acquisition are truly world-class.",
    name: "David Miller",
    title: "VP of Manufacturing Operations",
    sector: "Aerospace & Defence Testing",
    country: "United States",
    flag: "🇺🇸"
  }
];

export default function TestimonialMarquee() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 3 seconds (3000ms) infinitely
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div 
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Window Container */}
      <div className="overflow-hidden rounded-3xl py-4">
        {/* Track Container that transitions smoothly every 3 seconds */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {testimonials.map((item, index) => {
            // Next item for 2-column desktop view
            const nextItem = testimonials[(index + 1) % testimonials.length];

            return (
              <div 
                key={item.id} 
                className="w-full shrink-0 px-2 sm:px-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card 1 (Mobile & Desktop) */}
                  <div className="bg-[#0C121C] border border-white/10 p-7 sm:p-9 rounded-3xl flex flex-col justify-between shadow-2xl hover:border-[#6DA7BF]/50 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-1 text-[#6DA7BF]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#6DA7BF]" />
                          ))}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200">
                          <span className="text-sm">{item.flag}</span>
                          <span className="text-xs font-semibold">{item.country}</span>
                        </div>
                      </div>

                      <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed italic mb-8">
                        “{item.quote}”
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-base">{item.name}</h4>
                        <div className="text-xs text-[#6DA7BF] font-semibold mt-0.5">{item.title}</div>
                        <div className="text-xs text-slate-400 font-light mt-0.5">{item.sector}</div>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-[#6DA7BF]/10 flex items-center justify-center text-[#6DA7BF]">
                        <Quote className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card 2 (Desktop Pair) */}
                  <div className="hidden md:flex bg-[#0C121C] border border-white/10 p-7 sm:p-9 rounded-3xl flex-col justify-between shadow-2xl hover:border-[#6DA7BF]/50 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-1 text-[#6DA7BF]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#6DA7BF]" />
                          ))}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200">
                          <span className="text-sm">{nextItem.flag}</span>
                          <span className="text-xs font-semibold">{nextItem.country}</span>
                        </div>
                      </div>

                      <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed italic mb-8">
                        “{nextItem.quote}”
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-base">{nextItem.name}</h4>
                        <div className="text-xs text-[#6DA7BF] font-semibold mt-0.5">{nextItem.title}</div>
                        <div className="text-xs text-slate-400 font-light mt-0.5">{nextItem.sector}</div>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-[#6DA7BF]/10 flex items-center justify-center text-[#6DA7BF]">
                        <Quote className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle 3-Second Active Step Indicator Bars (No click buttons, just clean visual feedback) */}
      <div className="flex items-center justify-center gap-2 pt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === i 
                ? "w-8 bg-[#6DA7BF] shadow-[0_0_8px_#6DA7BF]" 
                : "w-2 bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
