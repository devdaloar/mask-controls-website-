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
  HardHat,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Sliders,
  Boxes,
  RotateCcw,
  RefreshCw,
  Search,
  Package,
  Cable
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Mitsubishi PLC Programming & Automation Solutions | MASK Control Systems Ltd",
  description: "Specialist Mitsubishi PLC programming, MELSEC control system design, GX Works development, and automation solutions engineered in the UK and delivered worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/mitsubishi-plc/"
  },
  openGraph: {
    title: "Mitsubishi PLC Programming & Automation Solutions | MASK Control Systems Ltd",
    description: "Specialist Mitsubishi PLC programming, control system design, and automation solutions engineered in the UK and delivered worldwide for reliable, high-performance industrial systems.",
    url: "https://maskcontrols.com/mitsubishi-plc/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/What are Mitsubishi PLC Systems.jpg",
        width: 1200,
        height: 630,
        alt: "Mitsubishi PLC Programming & Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function MitsubishiPlcPage() {
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
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Mitsubishi PLC",
            "item": "https://maskcontrols.com/mitsubishi-plc/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Mitsubishi PLC Programming & Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Specialist Mitsubishi MELSEC iQ-R, iQ-F, Q, and FX Series PLC programming, GX Works engineering, GOT HMI integration, and legacy migration services.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const mitsubishiServices = [
    {
      title: "Mitsubishi PLC Programming",
      desc: "Custom PLC programming tailored to your machinery, processes, and automation requirements using structured, maintainable code architectures.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      alt: "Mitsubishi Custom PLC Programming by MASK Control Systems",
      points: [
        "Structured programming in Structured Text (ST), Ladder (LD), and SFC",
        "High-speed pulse train positioning and multi-axis servo motion control",
        "Deterministic program execution with multi-tasking interrupt routines",
        "Full compliance with international IEC 61131-3 programming standards"
      ]
    },
    {
      title: "System Design & Engineering",
      desc: "Design of complete Mitsubishi-based automation control systems, rack architectures, power distribution, and fieldbus networking.",
      image: "/images/PLC SYSTEM DESIGN & CONFIGURATION.jpg",
      alt: "Mitsubishi System Design and Architecture",
      points: [
        "Optimal CPU and I/O module selection across MELSEC iQ-F, Q, and iQ-R platforms",
        "CC-Link IE Field (1Gbps industrial Ethernet) network architecture design",
        "Complete EPLAN electrical CAD schematics and detailed panel wiring schedules",
        "Fail-safe safety circuit integration complying with EN ISO 13849 & SIL 3"
      ]
    },
    {
      title: "GX Works Development",
      desc: "Programming and configuration using Mitsubishi GX Works2 and GX Works3 software suites for efficient, standardized project execution.",
      image: "/images/Need a Cost-Effective Automation Solution with Mitsubishi PLC.jpg",
      alt: "Mitsubishi GX Works Software Engineering",
      points: [
        "Modular Function Block (FB) libraries for rapid development and reusability",
        "Parameter configuration for intelligent function modules and high-speed counters",
        "Integrated software simulation and offline diagnostic debugging",
        "Automated project revision tracking and comprehensive code commenting"
      ]
    },
    {
      title: "HMI & Control Integration",
      desc: "Development of GOT touchscreen operator interfaces and supervisory systems for real-time monitoring and control.",
      image: "/images/HMI INTEGRATION.jpg",
      alt: "Mitsubishi GOT HMI and SCADA Integration",
      points: [
        "GOT2000 and GOT Simple touchscreen graphical interface design",
        "Dynamic alarm management, timestamped event logging, and historical trend graphs",
        "Automated recipe management and multi-level operator security authentication",
        "Seamless tag sharing with MELSEC CPUs eliminating duplicate addressing"
      ]
    },
    {
      title: "PLC Upgrades & Migration",
      desc: "Upgrading legacy Mitsubishi systems (MELSEC A-Series, AnS, FX0/FX1N/FX2N) or migrating from third-party PLCs to modern iQ-F/iQ-R.",
      image: "/images/PLC UPGRADES & MODIFICATIONS.jpg",
      alt: "Mitsubishi Legacy PLC Migration and Retrofit",
      points: [
        "Automated logic conversion from obsolete Melsec A/QnA code to modern architectures",
        "Pre-wired terminal adapter conversion blocks to reuse existing field wiring",
        "Carefully planned phased cutover schedules to prevent factory downtime",
        "Elimination of obsolete component failure risks and hard-to-source spare parts"
      ]
    },
    {
      title: "Fault Finding & Support",
      desc: "Diagnostics, troubleshooting, and ongoing technical support for Mitsubishi PLC systems to restore uptime immediately.",
      image: "/images/FAULT FINDING & DIAGNOSTICS.jpg",
      alt: "Mitsubishi PLC Fault Finding and Diagnostics",
      points: [
        "Online program monitoring and error code diagnostic buffer interrogation",
        "CC-Link IE network health checks and communication drop-out analysis",
        "Secure remote VPN dial-in for immediate software triage without travel delays",
        "Rapid 24/7 on-site emergency engineer mobilization across the UK and worldwide"
      ]
    }
  ];

  const mitsubishiPlatforms = [
    {
      name: "MELSEC iQ-F / FX Series",
      type: "Compact High-Performance",
      desc: "All-in-one compact controllers featuring built-in high-speed counters, pulse outputs, Ethernet, and analog I/O for standalone machinery.",
      features: ["Sub-microsecond instruction speeds", "Built-in 4-axis positioning", "Compact DIN-rail footprint", "Native Ethernet communication"]
    },
    {
      name: "MELSEC Q-Series",
      type: "Modular Industry Workhorse",
      desc: "Proven modular automation system with extensive I/O capability, specialized process modules, and high-speed multi-CPU processing.",
      features: ["Multi-CPU multi-discipline rack", "Extensive analog & temperature modules", "Hot-swappable I/O options", "Proven 20+ year reliability record"]
    },
    {
      name: "MELSEC iQ-R Series",
      type: "Flagship Core Platform",
      desc: "Next-generation automation platform designed for high-speed deterministic control, cybersecurity compliance, and Industry 4.0 data processing.",
      features: ["0.14ns basic instruction speed", "Integrated safety and sequence CPU", "Memory encryption & user security", "Seamless CC-Link IE 1Gbps link"]
    },
    {
      name: "GX Works3 Suite",
      type: "Modern Engineering Framework",
      desc: "Integrated software environment combining system design, structured programming, graphical parameterization, and maintenance diagnostics.",
      features: ["Graphical module configuration", "Multi-language IEC 61131-3 support", "Full offline simulation", "Integrated maintenance diagnostics"]
    }
  ];

  const applications = [
    {
      title: "Machine Automation",
      desc: "High-precision sequence logic and multi-axis servo coordination for bespoke production machines."
    },
    {
      title: "Production Line Control",
      desc: "Line synchronization, buffer regulation, and inter-station handshakes across complex multi-stage lines."
    },
    {
      title: "High-Speed Manufacturing",
      desc: "Sub-millisecond registration, rotary knife synchronization, and high-speed electronic camming."
    },
    {
      title: "Packaging & Processing Systems",
      desc: "Automated cartoning, flow wrapping, bottle filling, and dynamic checkweighing stations."
    },
    {
      title: "Conveyor & Material Handling",
      desc: "Automated storage and retrieval systems (ASRS), palletizing cells, and high-speed sortation conveyors."
    },
    {
      title: "Industrial Equipment Control",
      desc: "Hydraulic press automation, high-pressure test stands, and thermal treatment furnace control."
    }
  ];

  const problemsSolved = [
    {
      problem: "High-Speed Automation Demands",
      detail: "Standard industrial controllers struggle with sub-millisecond motion response times, causing synchronization lag and product reject spikes.",
      solution: "Sub-Nanosecond MELSEC Execution",
      solutionDetail: "We deploy Mitsubishi iQ-R and iQ-F controllers capable of 0.14ns instruction speeds, delivering flawless high-speed registration and precision."
    },
    {
      problem: "System Reliability & Production Stoppages",
      detail: "Factory machinery operating in electrically noisy, high-vibration manufacturing environments suffering unexplained processor lockups.",
      solution: "Hardened Japanese Engineering",
      solutionDetail: "Mitsubishi hardware is globally renowned for exceptional MTBF and electrical noise immunity, guaranteeing dependable 24/7/365 uptime."
    },
    {
      problem: "Legacy System Limitations & Obsolescence",
      detail: "Aging MELSEC A-Series or FX2N PLCs with failed backup batteries, lost source code, and discontinued replacement parts.",
      solution: "Turnkey Modernization with Wiring Adapters",
      solutionDetail: "We upgrade legacy programs to modern iQ-F/iQ-R platforms using modular terminal adapters, preserving your field wiring and minimizing downtime."
    },
    {
      problem: "Integration Challenges Across Multi-Vendor Plant",
      detail: "Difficulty connecting Mitsubishi machines with third-party robotics, barcode scanners, SCADA servers, or ERP networks.",
      solution: "Open CC-Link IE & Ethernet Protocol Gateways",
      solutionDetail: "We implement CC-Link IE Field, Modbus TCP, EtherNet/IP, and OPC UA protocols to ensure seamless, bidirectional communication across all plant assets."
    },
    {
      problem: "Lack of In-House Mitsubishi Expertise",
      detail: "Internal maintenance teams familiar with European PLCs struggle with GX Works ladder idioms and Japanese mnemonic structures.",
      solution: "Expert Engineering Support & Documentation",
      solutionDetail: "Our engineers provide complete reverse-engineering, well-commented structured IEC code, As-Built schematics, and ongoing SLA support."
    }
  ];

  const ourApproach = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Detailed review of functional specifications, cycle time goals, safety zoning, and operational requirements."
    },
    {
      step: "02",
      title: "System Design",
      desc: "Developing complete Mitsubishi hardware topologies, CC-Link IP schemas, and electrical schematics."
    },
    {
      step: "03",
      title: "Programming & Development",
      desc: "Writing clean, structured PLC code in GX Works alongside intuitive GOT HMI screens and recipe structures."
    },
    {
      step: "04",
      title: "Integration & Testing",
      desc: "Comprehensive offline simulation followed by on-site Factory Acceptance Testing (FAT) with simulated I/O."
    },
    {
      step: "05",
      title: "Commissioning & Validation",
      desc: "Live production trials, safety loop trip validation, and performance fine-tuning under full plant load."
    },
    {
      step: "06",
      title: "Ongoing Support & Handover",
      desc: "Operator training, As-Built documentation delivery, software backups, and ongoing SLA maintenance."
    }
  ];

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

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="relative z-10 flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/plc-programming/" className="hover:text-white transition-colors">PLC Programming</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#6DA7BF] font-medium">Mitsubishi PLC</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Cpu className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK Mitsubishi Specialists • MELSEC &amp; GX Works Experts</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Mitsubishi PLC Programming &amp; Automation Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Specialist Mitsubishi PLC programming, control system design, and automation solutions engineered in the UK and delivered worldwide for reliable, high-performance industrial systems.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="tel:+447412999343"
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#6DA7BF]" />
                  <span>Speak to an Engineer</span>
                </a>
              </div>

              {/* Trust Counters */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">iQ-R / iQ-F / Q</div>
                  <div className="text-xs text-slate-400 mt-0.5">MELSEC Platforms</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">GX Works2/3</div>
                  <div className="text-xs text-slate-400 mt-0.5">Certified Engineering</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Global</div>
                  <div className="text-xs text-slate-400 mt-0.5">Deployment Reach</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/Need a Cost-Effective Automation Solution with Mitsubishi PLC.jpg"
                    alt="Mitsubishi PLC Programming & Automation Solutions - MASK Control Systems Ltd"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D16] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Technical Status Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0C121C]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">MELSEC High-Speed Logic</div>
                      <div className="text-[11px] text-[#6DA7BF]">CC-Link IE Field • Sub-Millisecond Motion</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      MELSEC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. INTRO SECTION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <span>Precision Industrial Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                High-Speed Mitsubishi Control Engineered for Maximum Machine Yield
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we provide expert Mitsubishi PLC programming and automation solutions for a wide range of industrial applications.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Mitsubishi PLC systems are known for their reliability, speed, and precision—making them ideal for demanding automation environments. Our engineers design, program, and integrate Mitsubishi-based control systems tailored to your production requirements.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based automation engineering company with global capability, we deliver Mitsubishi PLC solutions that improve efficiency, reduce downtime, and support long-term operational performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Ultra-High Speed Processing</h3>
                    <p className="text-xs text-slate-400 mt-1">Sub-nanosecond execution speeds perfect for high-speed packaging, printing, and cutting lines.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Multi-Discipline Multi-CPU</h3>
                    <p className="text-xs text-slate-400 mt-1">Combine sequence PLC, motion, safety, and PC computing on a single unified MELSEC rack.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tech Feature Box */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DA7BF]/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#6DA7BF]" />
                  <span>The Mitsubishi Advantage</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Exceptional Longevity:</strong> Japanese engineering known for 20+ year MTBF hardware resilience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Seamless Legacy Migration:</strong> Terminal adapters enabling AnS and FX upgrades with zero re-wiring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">CC-Link IE Field:</strong> Gigabyte-speed industrial Ethernet networking for distributed I/O and drives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Cost-Effective Scalability:</strong> High performance-to-cost ratio for standalone machinery and full lines.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Upgrading a legacy Mitsubishi PLC?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Talk to a Mitsubishi Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. WHAT ARE MITSUBISHI PLC SYSTEMS?
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Industrial Controllers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-tight">
                What are Mitsubishi PLC Systems?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
                Mitsubishi PLC systems are industrial controllers used to automate machinery and production processes across manufacturing plants worldwide.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                They offer high-speed processing, precise motion synchronization, and rugged durability, making them widely used in automotive assembly, high-speed packaging, and material handling systems.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0C121C]">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/images/What are Mitsubishi PLC Systems.jpg"
                    alt="What are Mitsubishi PLC Systems - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mitsubishiPlatforms.map((plat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono text-[#6DA7BF] uppercase tracking-wider mb-1">
                    {plat.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {plat.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {plat.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {plat.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                  MITSUBISHI ELECTRIC
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. OUR MITSUBISHI PLC SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Mitsubishi PLC Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                Comprehensive Mitsubishi automation services from new system design and GX Works programming to legacy AnS/FX upgrades and 24/7 breakdown support.
              </p>
            </div>
            <Link 
              href="/contact/" 
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mitsubishiServices.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0C121C] border border-white/10 overflow-hidden hover:border-[#6DA7BF]/50 transition-all duration-300 group flex flex-col"
              >
                {/* Capability Real Image */}
                <div className="relative h-52 w-full overflow-hidden bg-[#090E16]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0C121C]/80 backdrop-blur-sm border border-white/10 text-[11px] font-mono font-bold text-[#6DA7BF]">
                    SERVICE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>

                {/* Capability Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#6DA7BF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      href="/contact/"
                      className="text-xs font-semibold text-[#6DA7BF] hover:text-[#5B95AD] inline-flex items-center gap-1 group/link"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          5. WHY CHOOSE MITSUBISHI PLC SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Industrial Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Why Choose Mitsubishi PLC Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              High-speed execution, proven reliability, and precision control make Mitsubishi a cornerstone of global factory automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Zap className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">High-Speed Processing &amp; Performance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nanosecond program execution speeds enabling ultra-fast response for packaging, labeling, and stamping machinery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <ShieldCheck className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Reliable and Durable Hardware</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Renowned Japanese industrial engineering built to withstand extreme temperatures, electrical noise, and harsh factory conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Sliders className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Precision Control for Complex Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated multi-axis servo positioning modules and electronic camming delivering micro-meter synchronization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Boxes className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Scalable Automation Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seamless upward scalability from compact all-in-one iQ-F controllers to multi-CPU modular iQ-R factory racks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Factory className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Widely Used in Global Manufacturing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trusted standard across automotive, electronics, food production, and automated material handling worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cable className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">High-Throughput CC-Link IE Field</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gigabit-speed deterministic industrial networking uniting controllers, remote I/O, drives, and safety in one topology.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          6. APPLICATIONS OF MITSUBISHI PLC
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Industrial Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Where Our Mitsubishi Solutions Are Deployed
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering high-speed accuracy and robust control across varied industrial manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  {app.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          7. PROBLEMS WE SOLVE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Real-World Engineering Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Problems We Solve with Mitsubishi PLCs
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              How our specialist Mitsubishi engineering overcomes throughput limits, code defects, and hardware obsolescence.
            </p>
          </div>

          <div className="space-y-4">
            {problemsSolved.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl bg-[#0C121C] border border-white/10 items-center hover:border-white/20 transition-all duration-200"
              >
                {/* Problem Side */}
                <div className="lg:col-span-5 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                      Problem: {item.problem}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center text-[#6DA7BF]">
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Solution Side */}
                <div className="lg:col-span-6 flex items-start gap-3.5 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] mb-1">
                      Our Solution: {item.solution}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.solutionDetail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          8. OUR 6-STEP APPROACH
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Methodical Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Mitsubishi Engineering Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Structured engineering methodology guaranteeing clean structured code, deterministic execution, and rapid factory commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourApproach.map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-extrabold text-[#6DA7BF]/20 font-mono mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>STAGE {s.step}</span>
                  <Check className="w-4 h-4 text-[#6DA7BF]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          9. INDUSTRIES WE SERVE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors Supported
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Industries We Serve with Mitsubishi PLCs
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering customized Mitsubishi automation architectures across high-speed, high-precision industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Food & FMCG", href: "/industries/food-beverage/" },
              { title: "Automotive", href: "/industries/automotive/" },
              { title: "Manufacturing", href: "/industries/manufacturing/" },
              { title: "Logistics & Warehousing", href: "/industries/materials-handling/" },
              { title: "Marine", href: "/industries/marine-defence/" },
              { title: "Aerospace & Defence", href: "/industries/aerospace/" }
            ].map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-200 flex flex-col justify-between group text-center"
              >
                <div>
                  <div className="w-10 h-10 mx-auto rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    {ind.title}
                  </h3>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 text-[10px] text-slate-400 flex items-center justify-center gap-1">
                  <span>Explore</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          10. WHY CHOOSE MASK CONTROL SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              The MASK Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We deliver Mitsubishi PLC solutions built for performance, reliability, and long-term operational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Mitsubishi PLC Specialists</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated engineers with deep expertise in GX Works2/3, MELSEC iQ-R/iQ-F, GOT HMIs, and CC-Link networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <HardHat className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Experienced Automation Engineers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Over 13 years delivering bespoke mechanical, electrical, and control automation for industry leaders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Settings2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Custom Engineering Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every line of code and panel layout is engineered bespoke to your mechanical layout and cycle time targets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Globe2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">UK-Based with Global Deployment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered in Birmingham, UK, with on-site commissioning and support dispatched to facilities worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <ShieldCheck className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Reliable &amp; Scalable Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modular software architectures and robust industrial containment ready for seamless future line expansions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Clock className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Long-Term Technical Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete As-Built schematics, software archives, operator training, and ongoing SLA maintenance agreements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          11. RELATED SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Related Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Related Engineering Services
              </h2>
            </div>
            <Link 
              href="/services/" 
              className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] inline-flex items-center gap-1.5"
            >
              <span>👉 Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            
            <Link
              href="/plc-programming/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Cpu className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  PLC Programming
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  Multi-platform PLC programming and HMI development.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/siemens-plc/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Zap className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Siemens PLC
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  S7-1200, S7-1500 &amp; TIA Portal automation.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/unitronics-plc/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Sliders className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Unitronics PLC
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  All-in-one PLC + HMI solutions with UniStream.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/systems-integration/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Workflow className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Systems Integration
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  Connect PLCs, SCADA &amp; multi-vendor machinery.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/electrical-control-panel-design/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Boxes className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Control Panels
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  Custom electrical panel design with Mitsubishi gear.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/design-build-services/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Wrench className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Design &amp; Build
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  Bespoke machinery and turnkey system builds.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================
          12. CALL TO ACTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#070D16] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Expert Mitsubishi Automation
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need Expert Mitsubishi PLC Programming for Your Automation System?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Work with a UK-based engineering team delivering reliable Mitsubishi PLC solutions worldwide. From new machine architectures to complex legacy migrations, we are ready to assist.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact/"
                className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-xl flex items-center gap-2 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+447412999343"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#6DA7BF]" />
                <span>Speak to an Engineer</span>
              </a>
            </div>

            <div className="pt-6 text-xs text-slate-500">
              Direct Engineering Consultation • Tailored High-Speed Scoping • Worldwide Deployment Reach
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
