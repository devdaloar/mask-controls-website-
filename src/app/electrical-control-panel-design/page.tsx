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
  FileText,
  Sliders,
  AlertTriangle,
  Flame
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Custom Electrical Control Panel Design & Manufacturing | MASK Control Systems Ltd",
  description: "UK-based engineers designing and building bespoke electrical control panels, PLC systems, motor control centres (MCC), and automated control solutions worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/electrical-control-panel-design/"
  },
  openGraph: {
    title: "Custom Electrical Control Panel Design & Manufacturing | MASK Control Systems Ltd",
    description: "UK-based engineers designing and building bespoke electrical control panels, PLC systems, and automation solutions for industrial applications worldwide.",
    url: "https://maskcontrols.com/electrical-control-panel-design/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function ElectricalControlPanelDesignPage() {
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
            "name": "Electrical Control Panel Design",
            "item": "https://maskcontrols.com/electrical-control-panel-design/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Custom Electrical Control Panel Design & Manufacturing",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke electrical control panels, PLC enclosures, motor control centres (MCC), and automated control systems engineered and manufactured in the UK.",
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
              <li className="text-[#6DA7BF] font-medium" aria-current="page">Electrical Control Panels</li>
            </ol>
          </nav>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DA7BF] shadow-[0_0_10px_#6DA7BF] animate-pulse" />
                <span>UK Panel Workshop • BS 7671 & EN 60204 Standards</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight">
                Custom Electrical Control Panel{" "}
                <span className="text-[#6DA7BF]">Design & Manufacturing</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                UK-based engineers designing and building high-quality electrical control panels, PLC systems, and automation solutions for industrial applications worldwide.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Fully Bespoke Hardware & Enclosure Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Integrated PLC, HMI, VFD & Servo Drives</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Complete CAD Schematics & Wiring Schedules</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>100% Factory Acceptance Testing (FAT)</span>
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
                    src="/images/Custom Electrical Control Panel Design & Manufacturing.jpg"
                    alt="Custom Electrical Control Panel Design & Manufacturing UK - MASK Control Systems Ltd"
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
                    <div className="text-[11px] text-slate-400 font-medium">Bespoke Build</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white">BS 7671</div>
                    <div className="text-[11px] text-slate-400 font-medium">UK Certified</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">Full FAT</div>
                    <div className="text-[11px] text-slate-400 font-medium">Pre-Delivery</div>
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
              In-House Panel Fabrication
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Engineered for Reliability, Safety, and Seamless Integration
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">MASK Control Systems</strong>, we design and manufacture custom electrical control panels tailored to your machinery, automation systems, and production environment.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              From simple relay logic panels to advanced PLC and HMI-controlled systems, our panels are engineered for reliability, safety, and seamless integration. As a UK-based automation engineering company with global delivery capability, we provide fully tested, specification-driven control panel solutions for a wide range of industries.
            </p>
          </div>

          {/* What We Do Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F1724] to-[#0A101A] border border-[#6DA7BF]/30 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                What We Do
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                We deliver complete control panel solutions—from design and engineering through to build, testing, and integration.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Our panels are designed to meet your exact technical requirements, ensuring optimal performance, long-term durability, and full compatibility with your wider automation systems.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
              >
                <span>Request a Panel Build Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. OUR CONTROL PANEL CAPABILITIES
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Full-Lifecycle Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Control Panel Capabilities
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              From concept CAD schematics to certified wiring, component assembly, and factory acceptance testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Capability 1 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Custom Control Panel Design
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  We design panels based on your system requirements, machine specifications, and operational environment, ensuring thermal management and ingress protection (IP ratings).
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-[#6DA7BF]">
                <Check className="w-4 h-4" />
                <span>Bespoke Enclosure Architecture</span>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  PLC & HMI Panel Integration
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Integration of PLC systems, touchscreen HMI interfaces, safety relays, and fieldbus communications for unified line control and clear operator oversight.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-[#6DA7BF]">
                <Check className="w-4 h-4" />
                <span>Siemens, Unitronics & Mitsubishi</span>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Relay Logic & Automated Control
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  From traditional hardwired relay-based safety interlock systems to sophisticated microprocessor and automated control panels for hazardous environments.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-[#6DA7BF]">
                <Check className="w-4 h-4" />
                <span>Fail-Safe Safety Architectures</span>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  CAD Electrical Schematics
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Detailed electrical drawings, terminal layouts, bill of materials (BOM), and complete cable numbering documentation for clarity and effortless maintenance.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-[#6DA7BF]">
                <Check className="w-4 h-4" />
                <span>Full As-Built Documentation</span>
              </div>
            </div>

            {/* Capability 5 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Panel Build & Assembly
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Professional panel manufacturing using premium components (Rittal, Schneider, Siemens), laser-etched labelling, and neatly loomed trunking.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-[#6DA7BF]">
                <Check className="w-4 h-4" />
                <span>UK Workshop Assembly</span>
              </div>
            </div>

            {/* Capability 6 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Testing & Quality Assurance
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Every panel is point-to-point tested and power-trialled before dispatch, including insulation resistance, flash testing, and functional I/O simulation.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-[#6DA7BF]">
                <Check className="w-4 h-4" />
                <span>Rigorous FAT Certification</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. TYPES OF CONTROL PANELS WE BUILD (Featured Real Projects Grid)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Panel Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Types of Control Panels We Build
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Our panels are engineered for standalone machines, complex process plants, and multi-compartment factory-wide distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Panel Type 1 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg"
                    alt="Custom PLC Cabinet and HMI Integration - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">PLC Driven</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">PLC Control Panels</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    High-density I/O panels incorporating Siemens, Unitronics, or Mitsubishi controllers, remote I/O nodes, and safety PLCs.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/plc-programming/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Explore PLC Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Panel Type 2 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/HMI Development.jpg"
                    alt="HMI Control Panel Assembly - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Touch Interface</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">HMI Control Panels</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Door-mounted and pedestal-mounted HMI touchscreen operator consoles with custom-designed graphical mimic screens.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Inquire on HMI Enclosures</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Panel Type 3 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/control-panel.jpg"
                    alt="Motor Control Panels MCC - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Power & Drives</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Motor Control Panels (MCC)</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Direct-on-line (DOL), star-delta, soft-starters, and variable frequency drive (VFD) panels with integrated thermal overload safety.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>Request MCC Specification</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Panel Type 4 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/Control System Engineering.jpg"
                    alt="Automation Control Panels UK - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Turnkey Control</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Automation Control Panels</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Complete multi-axis robotic cell and machine control enclosures integrating sensors, servo controllers, and safety light curtains.
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

            {/* Panel Type 5 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/Milk Processing Control Cabinet.jpg"
                    alt="Process Industry Food FMCG Milk Processing Control Cabinet - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Hygienic Process</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Multi-Compartment Process Systems</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    IP66 stainless steel enclosures engineered for hygienic food, beverage, dairy, and pharmaceutical washdown processing environments.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/industries/food-fmcg-automation/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>View Hygienic Standards</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Panel Type 6 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl overflow-hidden hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="relative h-48 w-full border-b border-white/10">
                  <Image
                    src="/images/LIFTING BEAM CONTROL SYSTEM.jpg"
                    alt="Specialist Heavy Duty Lifting Beam Relay & Automation Control System - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6DA7BF]">Heavy Duty Rig</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Relay Logic & Heavy Lifting Control</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Ruggedised, vibration-resistant control panels for marine winches, lifting beams, defence cranes, and safety-critical mechanical rigs.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/industries/marine-automation-systems/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                >
                  <span>View Marine Applications</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. BESPOKE ENGINEERING APPROACH
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-[#0B121D] p-8 sm:p-14 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Zero Generic Compromises
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Bespoke Engineering Approach
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Every control panel we build is fully customised—designed from the ground up around your exact application, not adapted from a generic template.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Seamless Integration</h3>
              <p className="text-[11px] text-slate-400 font-light">Flawless alignment with your machinery footprint and factory voltage supply.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Improved Performance</h3>
              <p className="text-[11px] text-slate-400 font-light">Premium switches, contactors, and high-speed communication buses minimise latency.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Easier Maintenance</h3>
              <p className="text-[11px] text-slate-400 font-light">Laser-etched ferrule numbering and structured DIN rails speed up diagnosis.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Long-Term Reliability</h3>
              <p className="text-[11px] text-slate-400 font-light">Engineered to BS 7671 standards with active cooling fans and surge suppression.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1622] border border-white/5 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mx-auto mb-3">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white">Future Upgradeability</h3>
              <p className="text-[11px] text-slate-400 font-light">Generous spare DIN space and modular terminal blocks accommodate future line growth.</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. INDUSTRIES WE SERVE
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
              We provide certified electrical control panel solutions tailored to demanding sector requirements:
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
                  <span>Explore Sector Panels</span>
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
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Operational Challenges Resolved
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Problems We Solve
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We replace risky, obsolete, and undocumented control cabinets with modern, safe, and maintainable systems:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Outdated or Unsupported Panels</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We replace obsolete relay systems and phased-out PLCs with modern, supportable components readily available on the UK market.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Lack of System Reliability</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Our panels are engineered with correct thermal dissipation, high-grade circuit breakers, and noise filtering for consistent performance.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Integration Challenges</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We guarantee full electrical and communication compatibility between newly built control panels and your existing legacy plant machinery.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Poor Documentation & Schematics</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Every panel includes fully laminated schematic drawings, labelled wire runs, and digital CAD files for immediate troubleshooting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          8. OUR PROCESS (5 Steps)
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Structured Build Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Our Process
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              From technical specification review to assembly, testing, and on-site integration:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">01</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Requirement Analysis</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                We understand your system, environmental constraints, IP ratings, supply voltage, and operational safety criteria.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">02</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Panel Design & Engineering</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Creation of detailed 2D/3D CAD panel layouts, electrical schematics, thermal calculations, and Bill of Materials (BOM).
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">03</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Panel Build & Assembly</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Precision enclosure punching, DIN rail fitting, professional wiring, ferrule labelling, and neat trunking routing.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">04</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Testing & Validation</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Full factory acceptance testing (FAT), point-to-point continuity checks, insulation tests, and live power functional trials.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">05</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Installation & Integration</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Optional on-site installation, field cable termination, commissioning support, and final SAT verification.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          9. WHY CHOOSE MASK CONTROL SYSTEMS
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              The MASK Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We deliver control panels that are built to perform, integrate seamlessly, and support your long-term automation goals:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Fully Custom Electrical Panels</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Engineered specifically for your machine envelope, environment, and throughput targets—zero generic templates.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">PLC & Automation Expertise</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                In-house programming for Siemens TIA Portal, Unitronics UniStream, Mitsubishi MELSEC, and Allen-Bradley.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">High-Quality Build Standards</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Certified to BS 7671, EN 60204-1 machine safety directives, and ISO 9001:2015 quality audited manufacturing.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Detailed Schematics & Documentation</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Complete CAD drawings, cable schedules, terminal maps, and spare parts lists delivered with every enclosure.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">UK Engineering, Global Delivery</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Fabricated in Devon, UK, and packaged for worldwide export with full international site commissioning capabilities.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">End-to-End Support & Integration</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                From initial electrical architecture to field tie-in and 24/7 technical breakdown support, we stand behind our build.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          10. RELATED SERVICES
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Complementary Solutions
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
              href="/design-build-services/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Cpu className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Design & Build</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">Bespoke machinery and automated mechanical assets.</p>
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
              href="/installation-commissioning/"
              className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF] hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
            >
              <div>
                <Factory className="w-6 h-6 text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">Installation & Setup</h3>
                <p className="text-[11px] text-slate-400 font-light mt-1">On-site cabling, termination, and SAT verification.</p>
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
              Need a Reliable Control Panel for Your Automation System?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Work with a UK-based engineering team delivering custom-built control panel solutions worldwide.
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
