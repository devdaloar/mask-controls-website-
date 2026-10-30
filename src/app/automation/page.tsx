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
  RotateCcw, 
  Award, 
  Zap, 
  Eye, 
  Scale, 
  Radio, 
  Factory, 
  Workflow, 
  Phone 
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Automation Solutions & PLC Systems | MASK Control Systems Ltd",
  description: "Advanced industrial automation engineering, custom PLC programming, HMI development, and control system integration designed to optimize manufacturing operations worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/automation/"
  },
  openGraph: {
    title: "Industrial Automation Solutions & PLC Systems | MASK Control Systems Ltd",
    description: "UK-based automation specialists delivering custom PLC programming, HMI development, control system engineering, and legacy upgrades.",
    url: "https://maskcontrols.com/automation/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function AutomationPage() {
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
            "name": "Automation Solutions",
            "item": "https://maskcontrols.com/automation/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Industrial Automation Solutions & PLC Systems",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Advanced industrial automation engineering, custom PLC programming, HMI development, and control systems integration designed to improve efficiency and reduce downtime.",
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
          
          {/* Engineering Technical Grid */}
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
              <li className="text-[#6DA7BF] font-medium" aria-current="page">Automation</li>
            </ol>
          </nav>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DA7BF] shadow-[0_0_10px_#6DA7BF] animate-pulse" />
                <span>Advanced Control Systems • Global Deployment</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight">
                Industrial Automation Solutions &{" "}
                <span className="text-[#6DA7BF]">PLC Systems</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Advanced automation engineering, PLC programming, and control systems designed to improve efficiency, reduce downtime, and optimize manufacturing operations worldwide.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Custom PLC Programming & Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Intuitive Touchscreen HMI Development</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Full Machine & Line Systems Integration</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Safe Upgrades for Legacy Control Platforms</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+447412999343"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
                >
                  <PhoneCall className="w-4 h-4 text-[#070D16]" />
                  <span>Speak to an Engineer</span>
                </a>

                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2.5 h-[52px] px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#6DA7BF]" />
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#090E16] shadow-2xl group">
                <div className="relative h-80 sm:h-[420px] w-full">
                  <Image
                    src="/images/Industrial Automation Solutions & PLC Systems.jpg"
                    alt="Industrial Automation Solutions & PLC Systems - MASK Control Systems Ltd"
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
                    <div className="text-2xl font-black text-[#6DA7BF]">13+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Years Experience</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white">Tier-1</div>
                    <div className="text-[11px] text-slate-400 font-medium">Global Clients</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">24/7</div>
                    <div className="text-[11px] text-slate-400 font-medium">Field Support</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. INTRO & WHAT IS INDUSTRIAL AUTOMATION (2 Columns)
      ========================================= */}
      <section className="py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Intro Box */}
          <div className="lg:col-span-7 bg-[#0B121D] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Engineered in the UK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Advanced Industrial Automation Tailored to Modern Production
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">MASK Control Systems</strong>, we provide advanced industrial automation solutions tailored to modern manufacturing environments.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              From PLC programming and HMI development to complete automation system design and integration, we deliver reliable, scalable solutions that improve production efficiency and operational control. As a UK-based automation engineering company with global capability, we support manufacturers across multiple industries with custom-built automation systems and control technologies.
            </p>
          </div>

          {/* What is Industrial Automation Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F1724] to-[#0A101A] border border-[#6DA7BF]/30 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                What is Industrial Automation?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Industrial automation involves the use of control systems, software, and machinery to automate production processes, reduce manual intervention, and improve consistency.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                By implementing automation systems, manufacturers can increase output, enhance product quality, and gain greater visibility over operations.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
              >
                <span>Consult Our Systems Engineers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. OUR AUTOMATION CAPABILITIES
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Technical Core
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Automation Capabilities
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              From discrete logic programming to fully integrated factory-wide control architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Capability 1: PLC Programming */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                  <Image
                    src="/images/PLC Programming.jpg"
                    alt="Custom PLC Programming Services UK - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#0F141C]/90 backdrop-blur-md border border-white/15 text-[#6DA7BF] flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  PLC Programming
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  We develop custom PLC programs tailored to your machinery, processes, and operational requirements adhering to IEC 61131-3 standards.
                </p>
              </div>
              <Link 
                href="/plc-programming/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                <span>Explore PLC Programming</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Capability 2: HMI Development */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                  <Image
                    src="/images/HMI Development.jpg"
                    alt="Industrial HMI Touchscreen Interface Development - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#0F141C]/90 backdrop-blur-md border border-white/15 text-[#6DA7BF] flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  HMI Development
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  User-friendly HMI touch interfaces designed to provide clear system control, live diagnostics, alarm logging, and intuitive operator interaction.
                </p>
              </div>
              <Link 
                href="/contact/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                <span>Inquire About HMI Systems</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Capability 3: Control System Engineering */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                  <Image
                    src="/images/Control System Engineering.jpg"
                    alt="Electrical Control System Engineering UK - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#0F141C]/90 backdrop-blur-md border border-white/15 text-[#6DA7BF] flex items-center justify-center">
                    <Settings2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Control System Engineering
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Design and implementation of complete automation control systems, electrical cabinets, safety relays, and instrumentation.
                </p>
              </div>
              <Link 
                href="/electrical-control-panel-design/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                <span>Explore Control Panels</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Capability 4: Automation System Integration */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                  <Image
                    src="/images/Automation System Integration.jpg"
                    alt="Automation System Integration and Plant Networking - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#0F141C]/90 backdrop-blur-md border border-white/15 text-[#6DA7BF] flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Automation System Integration
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Connecting standalone machines, PLCs, robotics, sensors, and ERP/MES databases into a unified, efficient workflow.
                </p>
              </div>
              <Link 
                href="/systems-integration/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                <span>Explore Integration</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Capability 5: Legacy System Upgrades */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl md:col-span-2 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5">
                  <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/Legacy System Upgrades.jpg"
                      alt="Legacy PLC and Control System Modernisation - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#0F141C]/90 backdrop-blur-md border border-white/15 text-[#6DA7BF] flex items-center justify-center">
                      <RotateCcw className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    Legacy System Upgrades
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Modernising outdated and obsolete PLC hardware (e.g. Siemens S5 to S7-1500, legacy Mitsubishi, Omron, Allen-Bradley) with drop-in replacements, updated wiring schematics, and zero loss of machine functionality.
                  </p>
                  <div className="pt-2">
                    <Link 
                      href="/contact/"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                    >
                      <span>Schedule a Legacy Audit</span>
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
          4. PLC SYSTEM EXPERTISE (Featured Platforms)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0C121C] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
                Hardware Agnostic Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                PLC System Expertise
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-light max-w-2xl mx-auto">
                We work across all leading PLC platforms to deliver reliable, scalable automation systems tailored to your specific plant preferences:
              </p>
            </div>

            {/* Platform Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Siemens */}
              <Link 
                href="/siemens-plc/"
                className="p-5 rounded-2xl bg-[#0F1622] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#121B2A] transition-all group block text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Siemens PLC Systems
                </h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">
                  TIA Portal, S7-1200, S7-1500 & WinCC
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF] mt-3 group-hover:translate-x-1 transition-transform">
                  View Solutions <ChevronRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Unitronics */}
              <Link 
                href="/unitronics-plc/"
                className="p-5 rounded-2xl bg-[#0F1622] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#121B2A] transition-all group block text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Unitronics PLC & HMI
                </h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">
                  UniStream & Vision All-in-One Panels
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF] mt-3 group-hover:translate-x-1 transition-transform">
                  View Solutions <ChevronRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Mitsubishi */}
              <Link 
                href="/mitsubishi-plc/"
                className="p-5 rounded-2xl bg-[#0F1622] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#121B2A] transition-all group block text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Mitsubishi PLC Systems
                </h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">
                  MELSEC iQ-R, iQ-F & FX Series
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF] mt-3 group-hover:translate-x-1 transition-transform">
                  View Solutions <ChevronRight className="w-3 h-3" />
                </span>
              </Link>

              {/* Custom PLC */}
              <Link 
                href="/plc-programming/"
                className="p-5 rounded-2xl bg-[#0F1622] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#121B2A] transition-all group block text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Custom PLC Programming
                </h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">
                  Allen-Bradley, Omron, Schneider, Delta
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF] mt-3 group-hover:translate-x-1 transition-transform">
                  Explore Overview <ChevronRight className="w-3 h-3" />
                </span>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. AUTOMATION SOLUTIONS WE DELIVER
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Full Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Automation Solutions We Deliver
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Our solutions are designed to improve efficiency, reduce errors, and support scalable operations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Machine Automation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Standalone custom machine control, pneumatic actuator coordination, servo axis positioning, and safety interlock integration.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Production Line Automation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Synchronised conveyor networks, automated buffer stations, high-speed routing, and robotic palletising lines.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Process Automation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Precision batch mixing, temperature PID control, dosing pumps, valve manifolds, and CIP (clean-in-place) sequences.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Control System Design</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Hardware specification, electrical schematics, motor control centers (MCC), and SIL/PLe functional safety compliance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Data & System Integration</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Connecting field devices to supervisory SCADA and factory database systems via Modbus, Profinet, and Ethernet/IP protocols.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Smart Monitoring & Automation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Cloud-connected IIoT telemetry, real-time performance tracking, predictive fault alerts, and secure remote support dial-in.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. PROBLEMS WE SOLVE VS. BENEFITS (2-Column Comparison)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Problems We Solve */}
          <div className="bg-[#0C121C] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
              Bottlenecks Overcome
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Problems We Solve
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              We eliminate common factory vulnerabilities and transform inefficient operations into reliable assets:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Manual & Inefficient Processes</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We automate repetitive, labour-heavy tasks to accelerate throughput and ensure consistent cycle times.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <RotateCcw className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Production Downtime</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Reliable industrial automation systems and robust electrical hardware reduce unexpected stoppages.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Layers className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Lack of System Integration</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We connect fragmented standalone machinery into unified, transparent communications loops.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Inconsistent Product Quality</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Automation guarantees exact repeatable tolerances, reducing scrap rates and defect variance.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Zap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Outdated Control Systems</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">We upgrade obsolete, unsupportable PLC platforms before component failure causes catastrophic downtime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Benefits of Industrial Automation */}
          <div className="bg-[#0C121C] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Measurable ROI
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Benefits of Industrial Automation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Automation is not just about replacing labour—it builds scalable operational resilience:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Zap className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Increased Production Efficiency</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Higher line speeds, shorter cycle times, and predictable manufacturing output around the clock.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Scale className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Reduced Labour Dependency</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Lower recurring overheads and freedom from staffing shortages on hazardous or repetitive operations.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Improved Product Quality & Consistency</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Automated sensor verification and deterministic control eliminate human error from critical assembly steps.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Settings2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Greater Operational Control</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Touchscreen parameter adjustments, batch recipe management, and password-protected operator roles.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Eye className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Real-Time System Visibility</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Live telemetry, OEE metrics, and predictive warning alerts sent directly to smartphones and cloud portals.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1622] border border-white/5 flex items-start gap-3.5">
                <Factory className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Scalable Manufacturing Processes</h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">Modular automation architectures designed to expand smoothly as customer order volumes grow.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          7. INDUSTRIES WE SERVE
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Industries We Serve
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We deliver automation solutions across a wide range of industries, tailored to exact regulatory standards:
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
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. OUR 6-STEP AUTOMATION PROCESS
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Our Automation Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              A structured 6-stage engineering delivery process ensuring on-time deployment and operational success:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">01</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Requirement Analysis</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Understanding your production process, cycle times, safety requirements, and automation targets.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">02</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">System Design</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Developing tailored automation solutions, electrical schematics, network topology, and control architecture.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">03</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Programming & Development</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                PLC logic programming, HMI screen design, safety zone configuration, and communication setup.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">04</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Integration</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Connecting mechanical equipment, actuators, sensors, and central supervisory systems into a unified workflow.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">05</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Testing & Commissioning</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Rigorous FAT and SAT testing, safety interlock verification, line tuning, and operator handover.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-5 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-2xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">06</span>
              <h3 className="text-xs font-bold text-white mt-2 mb-1">Ongoing Support</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Continuous preventative maintenance, telemetry monitoring, remote diagnostics, and SLA breakdown response.
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
              Why Partner With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We deliver automation solutions that improve performance, reliability, and long-term operational success:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Expertise in PLC & Automation Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Over 13 years of proven engineering experience delivering advanced automated systems for high-throughput production lines.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Custom-Built Engineering Solutions</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                No off-the-shelf compromises. Every machinery mechanism and control rung is tailored to your exact manufacturing requirements.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Multidisciplinary Engineering Team</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                In-house mechanical, electrical, and software engineers working seamlessly together under one single engineering management umbrella.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">UK-Based with Global Delivery</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Headquartered in Devon, UK, supporting commissioning, system installations, and field projects across the UK, Europe, and the Middle East.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Reliable, Scalable Automation Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Built with Tier-1 industrial-grade hardware, comprehensive fault diagnostic routines, and modular expansion capacity.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Long-Term Technical Support</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                From emergency field breakdown response to cloud telemetry monitoring and preventative maintenance SLAs, we protect your investment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          10. CALL TO ACTION (CTA)
      ========================================= */}
      <section className="py-20 px-3 sm:px-6 lg:px-8 bg-[#070D16]">
        <div className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0C1420] via-[#090E16] to-[#070D16] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              Partner With Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Improve Your Production Systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Work with a UK-based automation engineering team trusted by manufacturers worldwide.
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
