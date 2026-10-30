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
  Box,
  Compass,
  Zap,
  RotateCcw,
  Scale
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Bespoke Machine Design & Build Services | MASK Control Systems Ltd",
  description: "UK-based automation engineers designing and building custom machinery, 2D/3D CAD models, proof of concepts, and turnkey industrial systems delivered worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/design-build-services/"
  },
  openGraph: {
    title: "Bespoke Machine Design & Build Services | MASK Control Systems Ltd",
    description: "UK-based automation engineers designing and building custom machinery and industrial systems tailored to your production requirements delivered worldwide.",
    url: "https://maskcontrols.com/design-build-services/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function DesignBuildServicesPage() {
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
            "name": "Design & Build Services",
            "item": "https://maskcontrols.com/design-build-services/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Bespoke Machine Design & Build Services",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "End-to-end turnkey bespoke machinery design, 2D/3D CAD modelling, electrical control system engineering, prototyping, and full system assembly in the UK.",
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
              <li className="text-[#6DA7BF] font-medium" aria-current="page">Design & Build</li>
            </ol>
          </nav>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DA7BF] shadow-[0_0_10px_#6DA7BF] animate-pulse" />
                <span>Turnkey Machinery Engineering • Concept to Commissioning</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight">
                Bespoke Machine{" "}
                <span className="text-[#6DA7BF]">Design & Build Services</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                UK-based automation engineers designing and building custom machinery and industrial systems tailored to your production requirements delivered worldwide.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Single Engineering Partner (Start to Finish)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Mechanical, Electrical & Software Unified</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>SolidWorks 3D CAD & FEA Stress Analysis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Proof of Concept & Full Factory Build</span>
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
                    src="/images/design-build.jpg"
                    alt="Bespoke Machine Design & Build Services UK - MASK Control Systems Ltd"
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
                    <div className="text-2xl font-black text-[#6DA7BF]">100%</div>
                    <div className="text-[11px] text-slate-400 font-medium">Bespoke Design</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white">3D CAD</div>
                    <div className="text-[11px] text-slate-400 font-medium">Precision Modelling</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">Global</div>
                    <div className="text-[11px] text-slate-400 font-medium">Site Commissioning</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. INTRO & WHAT WE DO (2 Columns)
      ========================================= */}
      <section className="py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Intro Box */}
          <div className="lg:col-span-7 bg-[#0B121D] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Single-Source Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Specialist Engineering for Custom Machinery & Industrial Assets
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">MASK Control Systems</strong>, we provide specialist design and build services for bespoke industrial automation systems and custom machinery.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              From initial concept development through to full system delivery, we engineer solutions that improve efficiency, reduce downtime, and support long-term production performance. Every system we design is built around your exact operational needs ensuring precision, reliability, and seamless integration into your existing processes.
            </p>
          </div>

          {/* What We Do Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F1724] to-[#0A101A] border border-[#6DA7BF]/30 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                What We Do
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Our design and build service covers the complete lifecycle of automation system development, allowing you to work with a single engineering partner from start to finish.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                We combine mechanical design, electrical engineering, and software development to deliver fully integrated systems ready for deployment.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
              >
                <span>Discuss Your Concept With an Engineer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. OUR DESIGN & BUILD CAPABILITIES (5 Rich Cards)
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Full-Spectrum Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Design & Build Capabilities
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              From first principles CAD modelling to in-house machining, control wiring, and rigorous FAT testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Capability 1: Custom Machinery Design */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/manufacturing.jpg"
                    alt="Custom Machinery Design and Mechanical Fabrication - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Mechanical Design</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Custom Machinery Design</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    We design bespoke machines engineered specifically for your production processes, ensuring optimal performance, space efficiency, and ergonomic operator safety.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/automation/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore Machine Automation</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Capability 2: 2D & 3D CAD Modelling */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/Control System Engineering.jpg"
                    alt="2D and 3D CAD Modelling Engineering Plans - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">SolidWorks & AutoCAD</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">2D & 3D CAD Modelling</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Detailed CAD modelling allows us to visualise and refine your system before metal is cut, running kinematic motion checks, stress FEA, and clash detection.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Request CAD Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Capability 3: Electrical & Control System Design */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/control-panel.jpg"
                    alt="Electrical & Control System Design - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Control Architecture</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Electrical & Control System Design</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    We design complete electrical systems, including PLC architecture, custom control panels, servo motor drives, sensor networks, and safety interlocks.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/electrical-control-panel-design/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore Control Panels</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Capability 4: Proof of Concept Development */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/TELEMETRY SYSTEM & TEST RIG.jpg"
                    alt="Proof of Concept Development and Telemetry Test Rig - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">R&D Validation</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Proof of Concept Development</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    We create working test rigs and mockups before full-scale production to validate cycle time, part handling feasibility, and mechanical tolerances.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Discuss a Proof of Concept</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Capability 5: Prototype & Full System Build */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl md:col-span-2 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5">
                  <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src="/images/TEMPORARY REFUGE SHELTER SYSTEM.jpg"
                      alt="Prototype & Full System Build Offshore Shelter System - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3 p-6 sm:p-0 sm:pr-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Factory Assembly</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    Prototype & Full System Build
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    From small experimental prototypes to multi-stage automated production lines and safety shelters, we manufacture, wire, and assemble complete solutions in our Devon workshop adhering to ISO 9001:2015 quality standards.
                  </p>
                  <div className="pt-2">
                    <Link 
                      href="/contact/"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                    >
                      <span>Inquire About Custom Machinery Builds</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. BESPOKE ENGINEERING APPROACH
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl bg-[#0C121C] border border-white/10 p-8 sm:p-14 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Tailored Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Bespoke Engineering Approach
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Unlike off-the-shelf solutions that force you into rigid operational compromises, our systems are designed from the ground up to solve your specific production challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Optimise Workflow</h3>
              <p className="text-[11px] text-slate-400 font-light">Custom footprint engineered directly into your factory line flow.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Reduce Labour</h3>
              <p className="text-[11px] text-slate-400 font-light">Automate repetitive handling tasks to free skilled operators for high-value work.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Product Consistency</h3>
              <p className="text-[11px] text-slate-400 font-light">Deterministic precision mechanical stops and sensor checks eliminate scrap.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Seamless Integration</h3>
              <p className="text-[11px] text-slate-400 font-light">Electrical and communication handshakes matching your plant controllers.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Operational Reliability</h3>
              <p className="text-[11px] text-slate-400 font-light">Industrial-grade components built to operate continuously in demanding conditions.</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. FEATURED TURNKEY ASSETS (Real Projects Highlight)
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Specialist Systems Engineered by MASK
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              From heavy mechanical lifting gear to offshore safety enclosures and test rigs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#6DA7BF]/60 transition-all shadow-xl">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/LIFTING BEAM CONTROL SYSTEM.jpg"
                  alt="Lifting Beam Control System Custom Machinery Build - MASK Control Systems Ltd"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Heavy Mechanical Rig</span>
                <h3 className="text-base font-bold text-white mt-1">Lifting Beam Control System</h3>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                  Engineered lifting beam incorporating synchronized electric winches, load cells, and wireless pendant control for safety-critical marine lifts.
                </p>
              </div>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#6DA7BF]/60 transition-all shadow-xl">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/TEMPORARY REFUGE SHELTER SYSTEM.jpg"
                  alt="Temporary Refuge Shelter Life Support System - MASK Control Systems Ltd"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Offshore Asset</span>
                <h3 className="text-base font-bold text-white mt-1">Temporary Refuge Shelter System</h3>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                  Turnkey offshore life support and air overpressure shelter automation system engineered for hazardous zone gas monitoring and survival.
                </p>
              </div>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#6DA7BF]/60 transition-all shadow-xl">
              <div className="relative h-52 w-full">
                <Image
                  src="/images/TELEMETRY SYSTEM & TEST RIG.jpg"
                  alt="Telemetry System & Test Rig Automated Bench - MASK Control Systems Ltd"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Automated Testing Rig</span>
                <h3 className="text-base font-bold text-white mt-1">Telemetry System & Test Rig</h3>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                  Specialist R&D endurance testing bench incorporating high-speed sensor data acquisition, hydraulic actuators, and automated reporting.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. INDUSTRIES WE SUPPORT
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Industries We Support
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              Each system is engineered to meet industry-specific requirements, compliance standards, and operational conditions:
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
                  <span>Explore Sector Machinery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. PROBLEMS WE SOLVE
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Production Bottlenecks Solved
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Problems We Solve
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We turn operational bottlenecks and manufacturing limitations into robust competitive assets:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Inefficient Production Processes</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We design custom automated systems that streamline complex assembly steps, eliminate delays, and maximize factory throughput.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">High Labour Dependency</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Bespoke automation eliminates repetitive manual handling, reducing payroll overheads and protecting your output from labor shortages.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Product Quality Issues</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Precision mechanical tooling and automated optical/sensor verification guarantee repeatable tolerances and zero assembly defects.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Legacy or Outdated Equipment</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We replace worn-out unserviceable machinery with modern, CE/UKCA compliant equipment supported by readily available spares.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          8. OUR DESIGN & BUILD PROCESS (6 Steps)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Our Design & Build Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              A structured 6-stage engineering process guaranteeing precision, transparency, and minimal disruption:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">01</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Consultation</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                We work closely with you to understand your production challenges, goals, space constraints, and technical requirements.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">02</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Concept Design</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Our team develops detailed system concepts, preliminary 3D CAD models, risk assessments, and feasibility cost models.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">03</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">System Engineering</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Detailed mechanical engineering, pneumatic diagrams, electrical schematics, and PLC control logic development.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">04</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Build & Assembly</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Precision CNC machining, stainless framework fabrication, panel wiring, pneumatic piping, and mechanical assembly.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">05</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Testing & FAT</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Comprehensive Factory Acceptance Testing (FAT) with your sample components to validate cycle time, safety, and reliability.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">06</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Delivery & SAT</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                On-site installation, field integration, SAT validation, operator training, and comprehensive technical documentation.
              </p>
            </div>

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
              Why Partner With MASK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We focus on delivering systems that provide measurable improvements in efficiency, reliability, and performance:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Fully Bespoke Machine Design</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Every machine is tailored from scratch around your unique process, payload, and factory footprint requirements.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">End-to-End Engineering Delivery</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Single engineering accountability from initial CAD sketch to factory floor commissioning and lifelong support.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Multidisciplinary In-House Team</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                In-house mechanical designers, electrical panel builders, and software engineers working under one unified management.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">UK Engineering, Global Reach</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Headquartered in Devon, UK, with successful international system deployments across Europe, Middle East, and overseas.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Multi-Industry Proven Experience</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Proven track record delivering systems for Tier-1 clients in food FMCG, aerospace, defence, marine, and medical manufacturing.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Reliable & Scalable Solutions</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Engineered with modular architectures, standard industrial components, and open software for low total cost of ownership.
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
              href="/installation-commissioning/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Factory className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Installation & Setup</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">On-site mechanical installation, cabling, and SAT.</p>
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
              href="/remote-monitoring/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Radio className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Remote Monitoring</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Cloud IIoT telemetry, live diagnostics, and alerts.</p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-[#6DA7BF] flex items-center gap-1">Learn More <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>

            <Link 
              href="/service-and-breakdown/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Wrench className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Breakdown Support</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Rapid emergency callouts and preventative SLAs.</p>
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
              Need a Custom Automation Solution Built Around Your Process?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Partner with a UK-based engineering team delivering bespoke automation systems worldwide.
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
