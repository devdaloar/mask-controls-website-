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
  title: "Siemens PLC Programming & Automation Solutions | MASK Control Systems Ltd",
  description: "Expert Siemens PLC programming, control system design, TIA Portal development, and migration solutions engineered in the UK and delivered worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/siemens-plc/"
  },
  openGraph: {
    title: "Siemens PLC Programming & Automation Solutions | MASK Control Systems Ltd",
    description: "Expert Siemens PLC programming, control system design, and automation solutions engineered in the UK and delivered worldwide for reliable, high-performance industrial systems.",
    url: "https://maskcontrols.com/siemens-plc/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Siemens PLC Programming & Automation Solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Siemens PLC Programming & Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function SiemensPlcPage() {
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
            "name": "Siemens PLC",
            "item": "https://maskcontrols.com/siemens-plc/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Siemens PLC Programming & Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Specialist Siemens SIMATIC S7-1200, S7-1500, TIA Portal programming, WinCC SCADA integration, and legacy S5/S7-300 migrations.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const siemensServices = [
    {
      title: "Siemens PLC Programming",
      desc: "Custom PLC programming tailored to your machinery, processes, and automation requirements using structured, maintainable architectures.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      alt: "Siemens Custom PLC Programming by MASK Control Systems",
      points: [
        "Structured programming in Ladder (LAD), FBD, and Structured Control Language (SCL)",
        "Deterministic cyclic execution and optimized scan times",
        "Fail-safe safety program blocks conforming to ISO 13849 & IEC 62061",
        "Standardized function blocks (FBs) with comprehensive comment documentation"
      ]
    },
    {
      title: "System Design & Engineering",
      desc: "Design of complete Siemens-based control systems, including hardware architecture, power distribution, and fieldbus networking.",
      image: "/images/PLC SYSTEM DESIGN & CONFIGURATION.jpg",
      alt: "Siemens Control System Design and Architecture",
      points: [
        "Optimal CPU and I/O module selection (S7-1200, S7-1500, ET 200SP)",
        "Profinet redundant ring (MRP) network architecture design",
        "Complete EPLAN electrical CAD schematics and panel layout drawings",
        "Thermal and power load calculations ensuring long-term hardware reliability"
      ]
    },
    {
      title: "TIA Portal Development",
      desc: "Programming and configuration using Siemens TIA Portal (v14 to v19) for unified, efficient, and robust system development.",
      image: "/images/Siemens PLC Systems.jpg",
      alt: "Siemens TIA Portal Software Engineering",
      points: [
        "Unified project management covering PLC, HMI, Safety, and Drives in one environment",
        "SINAMICS VFD and servo drive parameterization and motion profile tuning",
        "Centralized hardware diagnostics and system error reporting without extra code",
        "Multi-user engineering workflows and automated version control tracking"
      ]
    },
    {
      title: "HMI & SCADA Integration",
      desc: "Development of intuitive operator interfaces and supervisory monitoring systems for real-time control, alarming, and visibility.",
      image: "/images/HMI INTEGRATION.jpg",
      alt: "Siemens HMI and WinCC SCADA Integration",
      points: [
        "SIMATIC Basic and Comfort Panel touchscreen design",
        "WinCC Unified & PC-based SCADA systems for centralized plant floor oversight",
        "Live alarm banners, audit trails, and historical trend logging",
        "Automated recipe management and multi-level operator security permissions"
      ]
    },
    {
      title: "PLC Upgrades & Migration",
      desc: "Upgrading obsolete legacy Siemens systems (S5, S7-200, S7-300, S7-400) or migrating from third-party controllers to modern S7-1200/1500.",
      image: "/images/PLC UPGRADES & MODIFICATIONS.jpg",
      alt: "Siemens Legacy PLC Upgrade and Migration Services",
      points: [
        "Zero-disruption phased cutover planning executed during scheduled plant downtime",
        "Safe conversion of Statement List (STL) logic to modern structured SCL",
        "ET 200SP pre-wired adapter harnesses to reuse existing field cabling and terminals",
        "Elimination of obsolete component failure risks and hard-to-source spare parts"
      ]
    },
    {
      title: "Fault Finding & Ongoing Support",
      desc: "Diagnostics, troubleshooting, and ongoing technical maintenance for Siemens PLC systems to restore uptime immediately.",
      image: "/images/FAULT FINDING & DIAGNOSTICS.jpg",
      alt: "Siemens PLC Fault Finding and Technical Support",
      points: [
        "Online diagnostic buffer interrogation to pinpoint intermittent trip causes",
        "Profinet packet tracing and physical layer cable certification",
        "Secure remote VPN dial-in for instant software triage without travel delays",
        "Rapid 24/7 on-site emergency dispatch across the UK and worldwide"
      ]
    }
  ];

  const siemensPlatforms = [
    {
      name: "SIMATIC S7-1200",
      type: "Compact & Modular",
      desc: "Ideal for small-to-midsize standalone machines, packaging stations, and distributed control cells requiring flexible I/O and integrated Profinet.",
      features: ["Integrated Profinet interface", "Built-in digital & analog I/O", "Scalable signal boards", "Integrated safety (F-CPU options)"]
    },
    {
      name: "SIMATIC S7-1500",
      type: "Flagship High Performance",
      desc: "The ultimate industrial powerhouse for complex plantwide manufacturing lines, demanding high-speed motion control, and high-channel-count automation.",
      features: ["Sub-millisecond processing speeds", "Integrated display for quick diagnostics", "Motion control camming & gearing", "Advanced cyber security & IP protection"]
    },
    {
      name: "SIMATIC ET 200SP",
      type: "Distributed Slice I/O",
      desc: "Ultra-compact remote I/O nodes connecting hundreds of field sensors directly to central S7 controllers with minimal panel footprint.",
      features: ["Push-in spring terminals", "Hot swapping under voltage", "Profinet / Profibus bus adapters", "Integrated motor starters & energy meters"]
    },
    {
      name: "TIA Portal Environment",
      type: "Integrated Engineering",
      desc: "Totally Integrated Automation framework unifying PLC logic, HMI graphics, servo drives, and safety in a seamless, single-database project.",
      features: ["Single shared tag database", "Built-in system diagnostics", "Comprehensive simulation (PLCSIM)", "Standardized corporate library support"]
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
      title: "Process Automation",
      desc: "Batch control, recipe dosing, temperature PID loops, and automated chemical/fluid handling."
    },
    {
      title: "Packaging Systems",
      desc: "High-speed cartoning, wrapping, palletizing, and barcode inspection cells."
    },
    {
      title: "Conveyor & Material Handling",
      desc: "Automated guided vehicles, sorters, roller conveyors, and warehouse material routing."
    },
    {
      title: "Industrial Equipment & Test Rigs",
      desc: "Subsea test stands, endurance testing stations, and high-pressure hydraulic equipment."
    }
  ];

  const problemsSolved = [
    {
      problem: "Complex Automation Requirements",
      detail: "Intricate multi-step production sequences, complex motion profiles, or tight cycle tolerances exceeding standard controllers.",
      solution: "Advanced S7-1500 Control Architecture",
      solutionDetail: "We leverage high-speed SIMATIC processors with dedicated motion control and structured SCL algorithms to handle the most demanding logic."
    },
    {
      problem: "System Reliability & Intermittent Trips",
      detail: "Unexpected line stoppages caused by electrical noise, poorly structured ladder code, or unhandled software exceptions.",
      solution: "Robust, Error-Trapped Code Design",
      solutionDetail: "We build structured, deterministic code with comprehensive error-trapping, Profinet diagnostics, and watchdog monitors that prevent false trips."
    },
    {
      problem: "Legacy System Limitations & Obsolescence",
      detail: "Outdated S5 or S7-300 systems facing catastrophic failure due to discontinued spare parts and lack of USB/Ethernet connectivity.",
      solution: "Seamless Modern Migration",
      solutionDetail: "We modernize legacy code and hardware to current S7-1500 platforms with pre-configured wiring adapters for quick, risk-free cutover."
    },
    {
      problem: "Integration Challenges Across Vendors",
      detail: "Difficulty connecting Siemens PLCs with third-party robots, barcode scanners, SCADA servers, or corporate ERP databases.",
      solution: "Universal Open Communications",
      solutionDetail: "We implement native Profinet, OPC UA, MQTT, and Modbus TCP protocols to establish frictionless, bidirectional data exchange."
    },
    {
      problem: "Lack of Documentation & Support",
      detail: "Existing Siemens systems with lost password-protected programs, zero electrical schematics, or no local support engineers.",
      solution: "Reverse-Engineering & Full Documentation",
      solutionDetail: "Our engineers extract program code, document logic, update CAD schematics, and provide continuous 24/7 technical assistance."
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
      desc: "Developing complete Siemens hardware topologies, Profinet IP schemas, and electrical schematics."
    },
    {
      step: "03",
      title: "Programming & Development",
      desc: "Writing clean, structured PLC code in TIA Portal alongside intuitive HMI screens and recipe structures."
    },
    {
      step: "04",
      title: "Integration & Testing",
      desc: "Comprehensive offline simulation (PLCSIM) followed by on-site Factory Acceptance Testing (FAT)."
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
            <span className="text-[#6DA7BF] font-medium">Siemens PLC</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Cpu className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK Siemens Automation Specialists • TIA Portal Certified</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Siemens PLC Programming &amp; Automation Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Expert Siemens PLC programming, control system design, and automation solutions engineered in the UK and delivered worldwide for reliable, high-performance industrial systems.
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
                  <div className="text-xl sm:text-2xl font-bold text-white">S7-1200/1500</div>
                  <div className="text-xs text-slate-400 mt-0.5">SIMATIC Platforms</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">TIA Portal</div>
                  <div className="text-xs text-slate-400 mt-0.5">v14 through v19</div>
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
                    src="/images/Siemens PLC Programming & Automation Solutions.jpg"
                    alt="Siemens PLC Programming & Automation Solutions - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">SIMATIC S7-1500 &amp; Profinet</div>
                      <div className="text-[11px] text-[#6DA7BF]">Safety Integrated • Real-Time Determinism</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      PROFINET
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
                <span>World-Class Industrial Control</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                High-Performance Siemens Automation Built for Critical Operations
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we specialise in Siemens PLC programming and automation solutions for industrial applications across multiple sectors.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Siemens PLC systems are widely recognised for their reliability, flexibility, and advanced capabilities. Our engineers design, program, and integrate Siemens-based control systems tailored to your specific production requirements.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based automation engineering company with global capability, we deliver Siemens PLC solutions that improve efficiency, reduce downtime, and support long-term operational performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Safety Integrated (F-CPU)</h3>
                    <p className="text-xs text-slate-400 mt-1">Unified standard and fail-safe safety logic in one single controller, meeting SIL 3 &amp; PLe.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Full TIA Portal Mastery</h3>
                    <p className="text-xs text-slate-400 mt-1">Structured SCL, reusable function blocks, and advanced motion integration with SINAMICS.</p>
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
                  <span>Siemens Automation Capabilities</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Profinet Determinism:</strong> High-speed cyclic data exchange for servo motion and distributed ET 200SP I/O.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Modern S7 Migrations:</strong> Step-by-step risk-managed conversions from legacy S5 and S7-300 to S7-1500.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">WinCC Unified SCADA:</strong> State-of-the-art web-based supervisory dashboards accessible on any browser.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">OPC UA &amp; Cloud Ready:</strong> Built-in OPC UA server enabling seamless communication with corporate IT.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Have an existing Siemens panel?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Talk to a Siemens Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. WHAT ARE SIEMENS PLC SYSTEMS?
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Platform Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-tight">
                What are Siemens PLC Systems?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
                Siemens PLC systems are industrial control systems used to automate machinery and production processes across the globe.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                They offer high performance, modular scalability, and advanced deterministic control capabilities, making them the industry benchmark for complex manufacturing, safety-critical operations, and continuous process plants.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0C121C]">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/images/Siemens PLC Systems.jpg"
                    alt="Siemens SIMATIC S7 PLC Systems and TIA Portal Architecture"
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
            {siemensPlatforms.map((plat, idx) => (
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
                  SIEMENS SIMATIC HARDWARE
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. OUR SIEMENS PLC SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Specialist Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Siemens PLC Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                End-to-end Siemens engineering capabilities from brand new TIA Portal programming to legacy S5/S7 retrofits and emergency breakdown support.
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
            {siemensServices.map((item, idx) => (
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
          5. WHY CHOOSE SIEMENS PLC SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Global Benchmark
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Choose Siemens PLC Systems
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Siemens is the undisputed global leader in industrial automation, delivering proven hardware longevity, unmatched security, and modular flexibility.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">High Reliability &amp; Industrial Performance</h3>
                    <p className="text-xs text-slate-400 mt-1">Engineered to withstand extreme factory temperatures, electrical noise, and high vibrations.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Scalable &amp; Flexible Architecture</h3>
                    <p className="text-xs text-slate-400 mt-1">Modular slice I/O allowing seamless hardware expansions from 10 to 10,000+ points without redesign.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Advanced Motion &amp; Safety Control</h3>
                    <p className="text-xs text-slate-400 mt-1">Synchronized servo camming and fail-safe logic integrated directly on the standard CPU.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Universal Global Availability</h3>
                    <p className="text-xs text-slate-400 mt-1">Worldwide spare parts availability, standardized protocols, and universal technician recognition.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0C121C]">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/Why choose Siemens PLC Systems.jpg"
                    alt="Why Choose Siemens PLC Systems - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 bg-[#0C121C] border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Certified Siemens Architecture</div>
                      <div className="text-[11px] text-slate-400">Engineered to IEC 61131-3, BS 7671, and EN 60204-1</div>
                    </div>
                    <span className="px-3 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30 text-xs font-mono font-bold">
                      PROVEN
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          6. SIEMENS PLC APPLICATIONS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Industrial Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Where Our Siemens PLC Solutions Are Deployed
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              From continuous food processing and pharmaceutical packaging to heavy automotive handling and subsea marine rigs.
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
              Problems We Solve with Siemens PLCs
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              How our specialist Siemens engineering overcomes production bottlenecks, code defects, and hardware obsolescence.
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
              Our Siemens Engineering Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Structured methodology guaranteeing robust code structure, fail-safe safety compliance, and rapid factory commissioning.
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
              Industries We Serve with Siemens PLCs
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering customized Siemens automation architectures across regulated, high-precision industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Food & FMCG", href: "/industries/food-beverage/" },
              { title: "Medical & Pharma", href: "/industries/pharmaceuticals/" },
              { title: "Marine & Offshore", href: "/industries/marine-defence/" },
              { title: "Automotive", href: "/industries/automotive/" },
              { title: "Logistics & Warehousing", href: "/industries/materials-handling/" },
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
              We deliver Siemens PLC solutions designed for performance, reliability, and long-term operational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Siemens PLC Specialists</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated engineers with deep expertise in TIA Portal, S7-1200, S7-1500, Safety Integrated, and Profinet networks.
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
              <h3 className="text-base font-bold text-white mb-2">UK-Based with Global Delivery</h3>
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
                Complete As-Built schematics, software archives, training, and ongoing SLA maintenance agreements.
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
                  Custom electrical panel design with Siemens gear.
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
                  Bespoke machinery and full turnkey system builds.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/installation-commissioning/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <FileCheck2 className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Installation
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  Site installation, wiring &amp; SAT validation.
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
              Expert Siemens Engineering
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need Expert Siemens PLC Programming for Your Automation System?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Work with a UK-based engineering team delivering reliable Siemens PLC solutions worldwide. From new machine architectures to complex S5/S7 migrations, we are ready to assist.
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
              Direct Engineering Consultation • No Obligation Project Scoping • Rapid UK &amp; Global Delivery
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
