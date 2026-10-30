"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cpu, 
  Factory, 
  PhoneCall,
  ArrowRight,
  Layers,
  Sparkles
} from "lucide-react";
import { servicesList, plcBrands, industriesList } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
      scrolled 
        ? "bg-[#070D16]/90 backdrop-blur-md pt-2.5 pb-2 shadow-2xl shadow-black/50" 
        : "bg-[#070D16]/40 backdrop-blur-sm pt-3 sm:pt-4 pb-2"
    }`}>
      {/* Floating Island Capsule Container */}
      <header className={`max-w-7xl mx-auto h-[74px] sm:h-[82px] px-5 sm:px-8 rounded-[24px] border border-white/10 bg-[#0F141C]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-300 hover:border-white/15 ${
        scrolled ? "border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)]" : ""
      }`}>
        
        {/* Brand Logo - Enlarged, High-Res Transparent */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-56 sm:w-64 h-12 sm:h-14">
            <Image 
              src="/images/logo-original.png" 
              alt="MASK Control Systems - Bespoke Industrial Automation & Control Systems UK" 
              fill 
              sizes="(max-width: 640px) 224px, 256px"
              className="object-contain object-left"
              priority 
            />
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {/* 1. Home */}
          <Link 
            href="/" 
            className={`relative px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-xl hover:text-white hover:bg-white/5 ${
              pathname === "/" 
                ? "text-white font-semibold after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:bg-[#6DA7BF] after:rounded-full after:shadow-[0_0_8px_#6DA7BF]" 
                : "text-slate-300"
            }`}
          >
            Home
          </Link>

          {/* 2. Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              href="/services/" 
              className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-xl hover:text-white hover:bg-white/5 ${
                pathname.startsWith("/services") || pathname.includes("-plc") || pathname.includes("automation") || pathname.includes("design")
                  ? "text-white font-semibold" 
                  : "text-slate-300"
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#6DA7BF]" : "text-slate-400"}`} />
            </Link>

            {/* Services Floating Mega Menu */}
            {servicesOpen && (
              <div className="absolute top-full -left-20 pt-3 w-[600px] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#0B1017] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 p-6 grid grid-cols-2 gap-6 backdrop-blur-3xl">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#6DA7BF]" />
                      Core Engineering
                    </p>
                    <div className="space-y-1">
                      {servicesList.slice(0, 5).map((s) => (
                        <Link 
                          key={s.href} 
                          href={s.href}
                          className="block p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover/item:text-[#6DA7BF] transition-colors">
                            {s.title}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-light">
                            {s.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-l border-white/10 pl-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#6DA7BF]" />
                      Integration & Support
                    </p>
                    <div className="space-y-1">
                      {servicesList.slice(5).map((s) => (
                        <Link 
                          key={s.href} 
                          href={s.href}
                          className="block p-2 rounded-xl hover:bg-white/5 transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover/item:text-[#6DA7BF] transition-colors">
                            {s.title}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-light">
                            {s.description}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tier-1 PLC Platforms
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {plcBrands.map((b) => (
                          <Link 
                            key={b.href}
                            href={b.href}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-[#6DA7BF] hover:text-[#6DA7BF] transition-colors"
                          >
                            {b.title.replace(" PLC Systems", "").replace(" PLC Integration", "")}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <Link 
              href="/industries/" 
              className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-xl hover:text-white hover:bg-white/5 ${
                pathname.startsWith("/industries") 
                  ? "text-white font-semibold" 
                  : "text-slate-300"
              }`}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180 text-[#6DA7BF]" : "text-slate-400"}`} />
            </Link>

            {/* Industries Floating Dropdown */}
            {industriesOpen && (
              <div className="absolute top-full -left-12 pt-3 w-[330px] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#0B1017] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 p-3 space-y-1 backdrop-blur-3xl">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 flex items-center gap-2 border-b border-white/10 mb-1">
                    <Factory className="w-3.5 h-3.5 text-[#6DA7BF]" />
                    Sectors We Serve
                  </p>
                  {industriesList.map((ind) => (
                    <Link 
                      key={ind.href}
                      href={ind.href}
                      className="block px-3 py-2 rounded-xl hover:bg-white/5 transition-colors group/ind"
                    >
                      <div className="text-xs font-semibold text-slate-200 group-hover/ind:text-[#6DA7BF] transition-colors">
                        {ind.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Projects */}
          <Link 
            href="/projects/" 
            className={`px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-xl hover:text-white hover:bg-white/5 ${
              pathname === "/projects/" 
                ? "text-white font-semibold" 
                : "text-slate-300"
            }`}
          >
            Projects
          </Link>

          {/* 5. About us */}
          <Link 
            href="/about/" 
            className={`px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-xl hover:text-white hover:bg-white/5 ${
              pathname === "/about/" 
                ? "text-white font-semibold" 
                : "text-slate-300"
            }`}
          >
            About us
          </Link>
        </nav>

        {/* Right CTA Button (Pill button with glow, just like "Book a consultation") */}
        <div className="hidden sm:flex items-center gap-3">
          <Link 
            href="/contact/" 
            className="inline-flex items-center gap-2.5 h-[46px] px-6 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-[13px] tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
          >
            <PhoneCall className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Get a quote</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer (Styled to match the floating aesthetic) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#0B1017]/98 border border-white/10 p-5 space-y-4 backdrop-blur-2xl shadow-2xl animate-in fade-in duration-200 max-h-[calc(100vh-110px)] overflow-y-auto">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white border-b border-white/10"
          >
            Home
          </Link>

          <div>
            <Link 
              href="/services/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-sm font-semibold text-white"
            >
              Services
            </Link>
            <div className="pl-3 py-2 space-y-1.5 border-l border-white/10 mt-1">
              {servicesList.map((s) => (
                <Link 
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-400 hover:text-[#6DA7BF]"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link 
              href="/industries/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-sm font-semibold text-white"
            >
              Industries
            </Link>
            <div className="pl-3 py-2 space-y-1.5 border-l border-white/10 mt-1">
              {industriesList.map((ind) => (
                <Link 
                  key={ind.href}
                  href={ind.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-400 hover:text-[#6DA7BF]"
                >
                  {ind.title}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/projects/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white border-b border-white/10"
          >
            Projects
          </Link>

          <Link 
            href="/about/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-white border-b border-white/10"
          >
            About us
          </Link>

          <div className="pt-2">
            <Link 
              href="/contact/" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-12 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-[#6DA7BF]/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get a quote</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
