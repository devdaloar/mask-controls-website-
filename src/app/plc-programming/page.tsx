import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  ArrowRight, 
  Check, 
  Cpu, 
  Settings2, 
  Activity, 
  Layers, 
  PhoneCall, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Users2, 
  Globe2, 
  Clock, 
  Wrench, 
  Radio, 
  Factory, 
  Workflow, 
  Phone,
  FileCheck2,
  AlertTriangle,
  RotateCcw,
  Zap,
  Eye,
  Sliders
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "PLC Programming Services for Industrial Automation | MASK Control Systems Ltd",
  description: "Custom PLC programming, control system development, and automation solutions engineered in the UK and delivered worldwide to improve efficiency, reliability, and production performance.",
  alternates: {
    canonical: "https://maskcontrols.com/plc-programming/"
  },
  openGraph: {
    title: "PLC Programming Services for Industrial Automation | MASK Control Systems Ltd",
    description: "Custom PLC programming, control system development, and automation solutions engineered in the UK and delivered worldwide.",
    url: "https://maskcontrols.com/plc-programming/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function PlcProgrammingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://maskcontrols.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://maskcontrols.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "PLC Programming",
            "item": "https://maskcontrols.com/plc-programming/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "PLC Programming Services for Industrial Automation",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Professional PLC programming services for industrial automation systems across Siemens, Unitronics, Mitsubishi, and multi-vendor platforms.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#070D16] text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================
          1. HERO SECTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0C121C] shadow-[0_30px_90px_rgba(0,0,0,0.65)] relative overflow-hidden p-6 sm:p-12 lg:p-16">
          
          {/* Technical Engineering Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(109, 167, 191, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(109, 167, 191, 0.15) 1px, transparent 1px)`,
              backgroundSize: "48px 48px"
            }}
          />

          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#6DA7BF]/10 blur-[140px] rounded-full pointer-events-none" />

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="relative mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-500" /></li>
              <li>
                <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-500" /></li>
              <li className="text-[#6DA7BF] font-medium" aria-current="page">PLC Programming</li>
            </ol>
          </nav>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DA7BF] shadow-[0_0_10px_#6DA7BF] animate-pulse" />
                <span>Certified Automation Engineers • IEC 61131-3 Standards</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight">
                PLC Programming Services for{" "}
                <span className="text-[#6DA7BF]">Industrial Automation</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Custom PLC programming, control system development, and automation solutions engineered in the UK and delivered worldwide to improve efficiency, reliability, and production performance.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Siemens, Unitronics & Mitsubishi Specialists</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Structured, Commented & Maintainable Logic</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Full HMI Touchscreen & SCADA Integration</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Rapid Fault Diagnostics & Legacy Upgrades</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+447412999343"
                  className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#6DA7BF]" />
                  <span>Speak to an Engineer</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#090E16] shadow-2xl group">
                <div className="relative h-80 sm:h-[420px] w-full">
                  <Image
                    src="/images/PLC Programming Services for Industrial Automation.jpg"
                    alt="PLC Programming Services for Industrial Automation UK - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E16] via-transparent to-transparent opacity-90" />
                </div>

                {/* Floating Metrics Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F141C]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">IEC</div>
                    <div className="text-[11px] text-slate-400 font-medium">61131-3 Code</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white">Multi-Brand</div>
                    <div className="text-[11px] text-slate-400 font-medium">PLC Platforms</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">24/7</div>
                    <div className="text-[11px] text-slate-400 font-medium">Fault Support</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. INTRO & WHAT IS PLC PROGRAMMING (2 Columns)
      ========================================= */}
      <section className="py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Intro Box */}
          <div className="lg:col-span-7 bg-[#0B121D] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Core Engineering Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Professional PLC Programming for Modern Industry
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">MASK Control Systems</strong>, we provide professional PLC programming services for industrial automation systems across a wide range of industries.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Programmable Logic Controllers (PLCs) are at the core of modern automation. Our engineers develop custom PLC solutions designed to control machinery, optimise processes, and ensure reliable system performance. As a UK-based automation engineering company with global capability, we deliver PLC programming services tailored to your exact operational requirements.
            </p>
          </div>

          {/* What is PLC Programming Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F1724] to-[#0A101A] border border-[#6DA7BF]/30 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                What is PLC Programming?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                PLC programming involves creating control logic that allows machines and industrial systems to operate automatically.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                By using structured programming, automation sequences, and deterministic control logic, PLC systems manage processes, improve efficiency, and ensure consistent production performance.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
              >
                <span>Consult Our PLC Programmers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. OUR PLC PROGRAMMING SERVICES (6 Rich Visual Cards)
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Technical Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our PLC Programming Services
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              From new line development to legacy migrations, HMI creation, and emergency code diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1: Custom PLC Programming */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/CUSTOM PLC PROGRAMMING.jpg"
                    alt="Custom PLC Programming Logic Development - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Bespoke Logic</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Custom PLC Programming</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Development of tailored PLC programs designed around your machinery and processes adhering to Ladder Logic (LAD), Structured Text (ST), and Function Block Diagrams (FBD).
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Request Code Development</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 2: PLC System Design & Configuration */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/PLC SYSTEM DESIGN & CONFIGURATION.jpg"
                    alt="PLC System Design & Hardware Configuration - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">System Architecture</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">PLC System Design & Configuration</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Complete setup and configuration of PLC-based control systems, remote I/O drops, communication gateways, and distributed bus networks (Profinet, Modbus TCP).
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/systems-integration/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore Systems Integration</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 3: HMI Integration */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/HMI INTEGRATION.jpg"
                    alt="Touchscreen HMI Integration and SCADA Development - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Operator Interface</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">HMI Integration</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Development of intuitive HMI interfaces for real-time line monitoring, multi-level security access, recipe management, and automated alarm banner logging.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Inquire About HMI Screens</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 4: PLC Upgrades & Modifications */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/PLC UPGRADES & MODIFICATIONS.jpg"
                    alt="PLC Upgrades & Legacy System Modifications - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Modernisation</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">PLC Upgrades & Modifications</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Updating and improving existing PLC programs to eliminate obsolete hardware, add new station logic, increase line throughput, and boost reliability.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Schedule a Code Audit</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 5: Fault Finding & Diagnostics */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/FAULT FINDING & DIAGNOSTICS.jpg"
                    alt="Industrial PLC Fault Finding & Diagnostics - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Rapid Response</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Fault Finding & Diagnostics</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Troubleshooting PLC systems on-site or via secure VPN dial-in to identify communication drops, intermittent logic glitches, and restore machine uptime quickly.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/service-and-breakdown/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>View Breakdown Support</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 6: System Optimisation */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/SYSTEM OPTIMIZATION.jpg"
                    alt="Automation System Optimisation & Cycle Time Tuning - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Throughput Boost</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">System Optimisation</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Refactoring bloated legacy logic, tuning motion PID control loops, synchronising multi-station handshakes, and achieving shaved cycle times across automated assets.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Optimize Your Line</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. PLC PLATFORMS WE SUPPORT (Hub Section)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Multi-Vendor Competence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              PLC Platforms We Support
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              We work with leading PLC manufacturers to deliver reliable, scalable automation systems tailored to your site specifications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Siemens */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all group flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-44 w-full border-b border-white/10">
                  <Image
                    src="/images/Siemens PLC Programming & Automation Solutions.jpg"
                    alt="Siemens PLC Programming TIA Portal S7-1500 - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    Siemens PLC Systems
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Certified engineering across Siemens TIA Portal, Step 7, S7-1200, S7-1500, WinCC, and Profinet industrial networks.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/siemens-plc/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore Siemens Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Unitronics */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all group flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-44 w-full border-b border-white/10">
                  <Image
                    src="/images/Unitronics PLC Programming & Automation Solutions.jpg"
                    alt="Unitronics PLC Programming UniStream Vision - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    Unitronics PLC & HMI
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Cost-effective, compact automation using UniStream and Vision All-in-One PLC + HMI platforms for rapid commissioning.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/unitronics-plc/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore Unitronics Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mitsubishi & Custom Multi-Vendor */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all group flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-44 w-full border-b border-white/10">
                  <Image
                    src="/images/What are Mitsubishi PLC Systems.jpg"
                    alt="Mitsubishi MELSEC iQ-R iQ-F PLC Systems - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    Mitsubishi & Custom PLCs
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Extensive experience with Mitsubishi MELSEC (iQ-R, FX series), Allen-Bradley (Rockwell), Schneider Modicon, and Omron.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/mitsubishi-plc/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore Mitsubishi Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. APPLICATIONS OF PLC PROGRAMMING
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Field Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Applications of PLC Programming
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              Our PLC programming services are deployed across a wide range of industrial applications:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Machine Control Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Dedicated sequence control for presses, cutting cells, pick-and-place units, and specialised tooling machinery.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Production Line Automation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Synchronised inter-station handshakes, part tracking, cycle time balancing, and automated buffer management.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Process Control Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Closed-loop temperature regulation, pressure transmitters, automated fluid dosing, and recipe batch control.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Conveyor & Material Handling</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Variable speed drive (VFD) routing, automated sorting divert gates, barcode scanning, and palletisers.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Packaging & Assembly Automation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Cartoning, shrink-wrapping, case packing, tamper-evident sealing, and vision rejection systems.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Industrial Equipment Control</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Pumping stations, marine winch controllers, heavy lifting beams, and functional safety systems up to SIL3/PLe.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. PROBLEMS WE SOLVE VS BENEFITS (2-Column Grid)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Problems We Solve */}
          <div className="bg-[#0C121C] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
              Downtime Prevention
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Problems We Solve
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Poorly written, undocumented, or outdated PLC code is a constant hazard to production throughput:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Inefficient or Manual Processes</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We automate repetitive manual tasks with high-speed deterministic logic to improve throughput speed.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <RotateCcw className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">System Failures & Downtime</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Reliable error-trapping and clear diagnostic alarms reduce machine stoppage and simplify recovery.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Layers className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Poor System Integration</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We connect mismatched machinery and field protocols into a harmonious, synchronized network.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Zap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Legacy PLC Systems</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We safely migrate outdated, unmaintainable platforms to current platforms before failure occurs.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Eye className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Lack of Control & Visibility</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We implement clear HMI dashboards, OEE tracking, and historical trend logging for complete line visibility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-[#0C121C] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Value Delivered
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Benefits of Professional PLC Programming
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Professional code architecture delivers measurable long-term engineering and commercial benefits:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Zap className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Improved Production Efficiency</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Consistent cycle times, optimised sequence handshakes, and predictable output.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Reduced Unplanned Downtime</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Self-diagnosing code instantly highlights faulty sensors, avoiding hours of maintenance guesswork.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Sliders className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Greater Process Control</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Accurate PID tuning, recipe batch switching, and recipe management from HMI consoles.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Enhanced System Reliability</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Robust programming adhering to international safety and programming conventions.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Factory className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Scalable Automation Systems</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Modular software function blocks allowing seamless integration of future line additions.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Eye className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Better Data Visibility</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Open connectivity with SCADA, MES, and remote telemetry platforms (OPC UA, MQTT).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          7. OUR 6-STEP PLC PROGRAMMING PROCESS
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Engineering Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Our PLC Programming Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              A structured 6-stage software lifecycle ensuring robust performance and minimal site disruption:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">01</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Requirement Analysis</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Understanding your system, functional design specifications (FDS), safety requirements, and operational goals.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">02</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">System Design</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Developing control logic architecture, I/O assignment mapping, state-machine flowcharts, and communication topologies.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">03</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Programming & Code</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Writing clean, fully commented PLC logic and intuitive HMI touchscreen graphics tailored to your operators.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">04</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Testing & Simulation</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Thorough offline software simulation, testing all interlocks, emergency stop circuits, and fault scenarios before site delivery.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">05</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Integration & SAT</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Deploying code on-site, live I/O verification, dry cycling, full-speed production commissioning, and operator training.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">06</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Ongoing Support</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Continuous backup management, remote telemetry diagnostics, code enhancements, and 24/7 emergency response.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          8. INDUSTRIES WE SERVE
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Industries We Serve
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We provide PLC programming services across multiple demanding industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.slice(0, 6).map((ind) => (
              <Link 
                key={ind.href}
                href={ind.href}
                className="bg-[#0C121C] p-6 rounded-2xl border border-white/10 hover:border-[#6DA7BF]/60 hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {ind.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#6DA7BF] transition-colors">
                  <span>Explore Sector PLC Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. WHY CHOOSE MASK CONTROL SYSTEMS
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Why Choose MASK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We deliver PLC programming solutions that are robust, efficient, and built for long-term performance:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Expert PLC Programmers</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Experienced software engineers with deep hands-on expertise in industrial machine automation and line control.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Experience with Leading Platforms</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Certified proficiency across Siemens TIA Portal, Unitronics UniStream, Mitsubishi, Rockwell Allen-Bradley, and Omron.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Custom Automation Solutions</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Every code routine is tailor-written to match your exact mechanical actuators, safety gates, and process parameters.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">UK Engineering, Global Reach</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Headquartered in Devon, UK, with international commissioning engineers deployed across Europe and worldwide.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Reliable & Scalable Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Structured modular code architecture designed for high availability, zero memory leaks, and seamless future expansion.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Long-Term Support & Maintenance</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Complete code backups, software revision control, remote VPN diagnostics, and on-site breakdown response.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          10. RELATED SERVICES
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Integrated Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Related Engineering Services
              </h2>
            </div>
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <Link 
              href="/automation/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Activity className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Automation Solutions</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Custom robotic cells and machine automation.</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-[#6DA7BF] flex items-center gap-1">Learn More <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>

            <Link 
              href="/systems-integration/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Layers className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Systems Integration</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Connecting machines, PLCs, and factory workflows.</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-[#6DA7BF] flex items-center gap-1">Learn More <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>

            <Link 
              href="/electrical-control-panel-design/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Settings2 className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Control Panels</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Custom electrical enclosures built to BS 7671.</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-[#6DA7BF] flex items-center gap-1">Learn More <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>

            <Link 
              href="/design-build-services/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Cpu className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Design & Build</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">CAD modelling to full automated equipment build.</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-[#6DA7BF] flex items-center gap-1">Learn More <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>

            <Link 
              href="/remote-monitoring/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Radio className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Remote Monitoring</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Cloud IIoT telemetry, live diagnostics, and alarms.</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-[#6DA7BF] flex items-center gap-1">Learn More <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================
          11. CALL TO ACTION (CTA)
      ========================================= */}
      <section className="py-20 px-3 sm:px-6 lg:px-8 bg-[#070D16]">
        <div className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0C1420] via-[#090E16] to-[#070D16] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              Get Started
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Need Reliable PLC Programming for Your Automation System?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Work with a UK-based automation engineering team delivering custom PLC solutions worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+447412999343"
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all"
              >
                <Phone className="w-4 h-4 text-[#6DA7BF]" />
                <span>Speak to an Engineer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
