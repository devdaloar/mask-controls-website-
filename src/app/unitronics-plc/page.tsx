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
  Monitor,
  Database,
  Coins
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Unitronics PLC Programming & Automation Solutions | MASK Control Systems Ltd",
  description: "Specialist Unitronics PLC programming, HMI integration, UniStream and Vision series automation solutions engineered in the UK and delivered worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/unitronics-plc/"
  },
  openGraph: {
    title: "Unitronics PLC Programming & Automation Solutions | MASK Control Systems Ltd",
    description: "Specialist Unitronics PLC programming, HMI integration, and automation solutions engineered in the UK and delivered worldwide for efficient, reliable industrial systems.",
    url: "https://maskcontrols.com/unitronics-plc/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Unitronics PLC Programming & Automation Solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Unitronics PLC Programming & Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function UnitronicsPlcPage() {
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
            "name": "Unitronics PLC",
            "item": "https://maskcontrols.com/unitronics-plc/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Unitronics PLC Programming & Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Specialist Unitronics all-in-one PLC + HMI programming, UniStream and Vision engineering, SQL database integration, and custom control panel manufacturing.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const unitronicsServices = [
    {
      title: "Unitronics PLC Programming",
      desc: "Custom programming tailored to your machinery, process, and operational requirements using clean, reliable logic.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      alt: "Unitronics Custom PLC Programming by MASK Control Systems",
      points: [
        "Structured ladder logic and C-function block development in UniLogic & VisiLogic",
        "High-speed counting, pulse-train generation, and autotuned PID process loops",
        "Built-in data table arrays for internal recipe storage and logging",
        "Adherence to machine safety standards and clear code commenting"
      ]
    },
    {
      title: "HMI Development & Integration",
      desc: "Design of intuitive, responsive touchscreen interfaces combining process control, alarming, and recipe management.",
      image: "/images/HMI INTEGRATION.jpg",
      alt: "Unitronics Touchscreen HMI Development and User Interface",
      points: [
        "High-resolution color multi-touch screens (5\", 7\", 10.4\", 15.6\")",
        "Dynamic real-time trend graphs, event logging, and alarm management",
        "Built-in PDF viewer, video player, and remote VNC screen mirroring",
        "Multi-level password security and multi-language operator selection"
      ]
    },
    {
      title: "System Design & Engineering",
      desc: "Complete automation system design using Unitronics all-in-one PLC platforms to minimize control panel size and cost.",
      image: "/images/PLC SYSTEM DESIGN & CONFIGURATION.jpg",
      alt: "Unitronics Control System Design and Enclosure Layout",
      points: [
        "Panel space savings of up to 40% by eliminating separate HMI enclosures",
        "Optimal snap-in and local/remote expansion I/O module selection",
        "Complete EPLAN electrical schematics, bill of materials, and wiring diagrams",
        "Full 24VDC power supply budgeting and Category 3/4 safety loop design"
      ]
    },
    {
      title: "PLC Upgrades & Modifications",
      desc: "Enhancing, expanding, and modernizing existing Unitronics installations or retrofitting older relay-timer panels.",
      image: "/images/PLC UPGRADES & MODIFICATIONS.jpg",
      alt: "Unitronics PLC Upgrades, Modifications, and Retrofits",
      points: [
        "Upgrading legacy Vision or Samba controllers to modern UniStream touchscreens",
        "Adding modular I/O via CANbus or Ethernet for new machine stations",
        "Firmware updates, program backups, and parameter archives",
        "Retrofitting cloud telemetry and MQTT gateways for remote visibility"
      ]
    },
    {
      title: "Fault Finding & Diagnostics",
      desc: "Troubleshooting and resolving electrical, software, and communication issues in Unitronics systems to restore uptime fast.",
      image: "/images/FAULT FINDING & DIAGNOSTICS.jpg",
      alt: "Unitronics PLC Fault Finding and Diagnostics",
      points: [
        "Online debug mode with real-time variable tracing and force commands",
        "Communication diagnostics across Modbus, CANbus, and Ethernet networks",
        "Analog sensor scaling checks, calibration, and loop impedance testing",
        "Rapid 24/7 on-site and remote dial-in emergency support across the UK"
      ]
    },
    {
      title: "Integration with Other Systems",
      desc: "Connecting Unitronics PLCs with other factory machinery, supervisory SCADA systems, and enterprise databases.",
      image: "/images/Unitronics PLC Systems.jpg",
      alt: "Unitronics PLC Systems Integration and IIoT Connectivity",
      points: [
        "Direct SQL database communication (MS SQL, MySQL) without middleware",
        "Native MQTT / REST API connectivity for Industry 4.0 cloud integration",
        "Modbus TCP/RTU, CANopen, and EtherNet/IP communications with drives & robots",
        "VFD and servo drive parameterization over industrial fieldbuses"
      ]
    }
  ];

  const unitronicsPlatforms = [
    {
      name: "UniStream Modular & Built-in",
      type: "Flagship All-in-One",
      desc: "Powerful multi-touch color screens (5\" to 15.6\") with snap-in I/O, audio/video playback, VNC remote access, and native SQL / MQTT.",
      features: ["Multi-touch capacitive screen", "Direct SQL & MQTT support", "Modular snap-in I/O", "Built-in web server & VNC"]
    },
    {
      name: "Vision Series",
      type: "Robust Industrial Workhorse",
      desc: "Proven controllers combining high-speed PLC processing with integrated color touchscreens (3.5\" to 12.1\") and on-board I/O.",
      features: ["Integrated graphic touch display", "Built-in I/O & expansion ports", "VisiLogic development suite", "Cost-effective panel mounting"]
    },
    {
      name: "Samba & Jazz Series",
      type: "Micro Automation & Text/Touch",
      desc: "Ultra-compact all-in-one units perfect for small machinery, pump control, temperature regulating stations, and simple OEM machines.",
      features: ["Pocket-sized form factor", "Built-in digital & analog I/O", "Zero separate HMI hardware", "Extremely cost-effective"]
    },
    {
      name: "UniLogic Software Studio",
      type: "Unified Engineering Environment",
      desc: "One single programming environment for Ladder logic, HMI graphic screen design, communication protocols, and web server setup.",
      features: ["Single shared tag database", "C-function block support", "Free software with no license fees", "Rich built-in graphics library"]
    }
  ];

  const advantages = [
    {
      title: "Integrated PLC & HMI in One Platform",
      desc: "A single piece of hardware houses both the PLC processor and the high-resolution operator touchscreen, eliminating panel-to-HMI communications cabling.",
      icon: Monitor
    },
    {
      title: "Cost-Effective Automation Solution",
      desc: "Save up to 35% on hardware costs, enclosure sizing, panel punching, and installation labor compared to purchasing separate PLCs and HMIs.",
      icon: Coins
    },
    {
      title: "Simplified System Architecture",
      desc: "One single engineering software (UniLogic / VisiLogic), one programming cable, and a shared tag database eliminate communication mapping errors.",
      icon: Layers
    },
    {
      title: "Easy Operation & Maintenance",
      desc: "Intuitive touchscreen interfaces with built-in system diagnostics allow plant operators to troubleshoot issues without plugging in a programming laptop.",
      icon: Sliders
    },
    {
      title: "Native IIoT, SQL & Cloud Ready",
      desc: "Built-in support for MQTT, REST API, direct SQL queries, and secure web servers provides instant enterprise connectivity right out of the box.",
      icon: Database
    },
    {
      title: "Rugged Industrial Durability",
      desc: "IP65/IP66 front panel sealing, wide operating temperature ranges, and robust electrical noise immunity built for demanding manufacturing.",
      icon: ShieldCheck
    }
  ];

  const applications = [
    {
      title: "Machine Automation",
      desc: "Complete sequence control and operator interface for bespoke processing, assembly, and testing machines."
    },
    {
      title: "Production Processes & Batching",
      desc: "Automated recipe selection, precise ingredient dosing, flow measurement, and temperature regulation."
    },
    {
      title: "Packaging Systems",
      desc: "Form-fill-seal machines, labelers, capping units, shrink wrappers, and automated cartoners."
    },
    {
      title: "Material Handling Systems",
      desc: "Conveyor lines, lift stations, automated indexing tables, and small-scale gantry loading cells."
    },
    {
      title: "Industrial Equipment & Test Rigs",
      desc: "Hydraulic test stands, pump control stations, environmental test chambers, and valve test rigs."
    },
    {
      title: "Small to Medium Projects",
      desc: "Cost-sensitive factory upgrades needing modern touchscreen control without exorbitant capital expenditure."
    }
  ];

  const problemsSolved = [
    {
      problem: "Budget Constraints for Automation",
      detail: "High hardware license fees, separate HMI screens, and complex multi-vendor software make automation projects unaffordable for many plants.",
      solution: "All-in-One Cost Efficiency",
      solutionDetail: "Unitronics delivers industrial PLC power, beautiful touchscreens, and free un-licensed software, slashing project costs by up to 35%."
    },
    {
      problem: "Complex, Cluttered Panel Setups",
      detail: "Separate PLCs, HMIs, power supplies, and communication converter modules require massive enclosures and hundreds of inter-wires.",
      solution: "Unified Space-Saving Design",
      solutionDetail: "By mounting the PLC directly behind the HMI screen on the panel door, we free up interior backplate space and eliminate external wiring."
    },
    {
      problem: "Manual or Inconsistent Processes",
      detail: "Operators relying on manual dials, analog gauges, and paper logs result in human errors, inconsistent product quality, and waste.",
      solution: "Automated Recipe Control & Logging",
      solutionDetail: "We build intuitive touchscreen recipe selectors with automated batch execution and direct USB / SQL logging for 100% repeatability."
    },
    {
      problem: "Limited Operator Visibility & Diagnostic Blind Spots",
      detail: "Machines equipped with simple push buttons and pilot lamps leave operators clueless when an unexpected sensor trip occurs.",
      solution: "Live Graphical Alarms & VNC Access",
      solutionDetail: "Unitronics HMIs display clear graphical fault banners with troubleshooting instructions, accessible on-screen or remotely via mobile VNC."
    },
    {
      problem: "Obsolete Legacy Relay & Timer Panels",
      detail: "Aging machines controlled by discontinued mechanical relays, cam timers, and thumbwheel counters prone to frequent breakdowns.",
      solution: "Modern Drop-in Unitronics Retrofit",
      solutionDetail: "We replace entire nests of old relays with a single sleek Unitronics all-in-one controller, instantly modernizing machine capabilities."
    }
  ];

  const ourApproach = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Understanding your machinery specifications, I/O count, operator interface needs, and budget goals."
    },
    {
      step: "02",
      title: "System Design",
      desc: "Selecting the ideal Unitronics platform (UniStream vs Vision), module architecture, and panel layout."
    },
    {
      step: "03",
      title: "Programming & Development",
      desc: "Developing robust Ladder logic, custom C functions, interactive touchscreen graphics, and recipe tables."
    },
    {
      step: "04",
      title: "Integration & Testing",
      desc: "Rigorous hardware I/O loop checking, communication verification, and simulated fault injection tests."
    },
    {
      step: "05",
      title: "Commissioning & Validation",
      desc: "On-site deployment, motor autotuning, live production trials, and safety circuit verification."
    },
    {
      step: "06",
      title: "Ongoing Support & Handover",
      desc: "Complete operator training, As-Built documentation delivery, program source code archives, and SLA support."
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
            <span className="text-[#6DA7BF] font-medium">Unitronics PLC</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Sliders className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK All-in-One Automation Specialists • UniStream &amp; Vision Experts</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Unitronics PLC Programming &amp; Automation Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Specialist Unitronics PLC programming, HMI integration, and automation solutions engineered in the UK and delivered worldwide for efficient, reliable industrial systems.
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
                  <div className="text-xl sm:text-2xl font-bold text-white">All-in-One</div>
                  <div className="text-xs text-slate-400 mt-0.5">PLC + Touch HMI</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">UniLogic / VisiLogic</div>
                  <div className="text-xs text-slate-400 mt-0.5">Unified Engineering</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Direct SQL</div>
                  <div className="text-xs text-slate-400 mt-0.5">Built-in IIoT / MQTT</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/Unitronics PLC Programming & Automation Solutions.jpg"
                    alt="Unitronics PLC Programming & Automation Solutions - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">UniStream Touchscreen HMI</div>
                      <div className="text-[11px] text-[#6DA7BF]">Zero HMI-to-PLC Cabling • Native SQL</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      ALL-IN-ONE
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
                <span>Cost-Effective Integrated Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                All-in-One Control That Streamlines Machinery &amp; Cuts Build Costs
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we provide expert Unitronics PLC programming and automation solutions for industrial applications across a wide range of sectors.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Unitronics PLC systems combine control and HMI functionality into a single, powerful platform—offering a cost-effective and efficient solution for many automation applications.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based automation engineering company with global capability, we design, program, and integrate Unitronics PLC systems tailored to your production environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Zero HMI Cabling</h3>
                    <p className="text-xs text-slate-400 mt-1">The PLC processor mounts directly behind the touch screen, eliminating serial cables and panel wiring.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Direct SQL &amp; Cloud Sync</h3>
                    <p className="text-xs text-slate-400 mt-1">Log production metrics directly into enterprise SQL databases and cloud brokers without third-party PCs.</p>
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
                  <span>The Unitronics Efficiency</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Up to 35% Cost Savings:</strong> Eliminate separate HMI purchases, duplicate software licenses, and enclosure space.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">VNC Remote Control:</strong> Mirror the exact machine screen onto any smartphone, tablet, or PC for 24/7 supervision.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Built-in Media Player:</strong> Display PDF maintenance manuals and training videos directly on the operator screen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Rapid Programming:</strong> One tag database for both logic and HMI graphics cuts development cycles in half.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Considering an all-in-one PLC?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Talk to a Unitronics Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. WHAT ARE UNITRONICS PLC SYSTEMS?
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                All-in-One Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-tight">
                What are Unitronics PLC Systems?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
                Unitronics PLC systems are integrated control solutions that combine full PLC functionality with built-in touchscreen HMI interfaces.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                This all-in-one approach simplifies system design, reduces enclosure hardware requirements, and provides efficient, highly responsive control and monitoring capabilities for machines of all sizes.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0C121C]">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/images/Unitronics PLC Systems.jpg"
                    alt="Unitronics All-in-One PLC + HMI Hardware Systems - MASK Control Systems Ltd"
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
            {unitronicsPlatforms.map((plat, idx) => (
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
                  UNITRONICS HARDWARE
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. OUR UNITRONICS PLC SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Unitronics PLC Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                End-to-end Unitronics engineering from bespoke UniStream multi-touch programming to Vision upgrades and enterprise SQL integration.
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
            {unitronicsServices.map((item, idx) => (
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
          5. ADVANTAGES OF UNITRONICS PLC SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Key Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Advantages of Unitronics All-in-One Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Why manufacturers and machine builders worldwide choose Unitronics for cost-effective, space-saving industrial automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                    <span>BENEFIT 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          6. APPLICATIONS OF UNITRONICS PLC
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Industrial Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Where Our Unitronics Solutions Excel
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering responsive touchscreen automation across diverse manufacturing and process environments.
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
              Problems We Solve with Unitronics
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Overcoming tight automation budgets, cramped enclosures, and operator visibility bottlenecks with all-in-one control.
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
              Our Unitronics Engineering Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Structured engineering execution delivering clean code, intuitive operator screens, and rapid on-site commissioning.
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
              Industries We Serve with Unitronics PLCs
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering compact, cost-effective automation architectures across varied UK and international manufacturing facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Food & FMCG", href: "/industries/food-beverage/" },
              { title: "Medical & Pharma", href: "/industries/pharmaceuticals/" },
              { title: "Marine", href: "/industries/marine-defence/" },
              { title: "Automotive", href: "/industries/automotive/" },
              { title: "Logistics", href: "/industries/materials-handling/" },
              { title: "General Manufacturing", href: "/industries/manufacturing/" }
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
              We deliver Unitronics PLC solutions designed for maximum efficiency, simplicity, and long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Unitronics PLC Specialists</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Decades of hands-on experience programming UniStream, Vision, Samba, and Jazz all-in-one architectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Monitor className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Integrated PLC &amp; HMI Expertise</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seamless multi-touch UI design combined with deterministic industrial process and motion logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Settings2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Custom Automation Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tailored control cabinets, snap-in I/O layouts, and custom database sync engineered specifically for your plant.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Globe2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">UK-Based with Global Reach</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Centrally headquartered in Birmingham, UK, with on-site commissioning and support deployed worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Coins className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Reliable &amp; Cost-Effective Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Maximum engineering return on investment with zero recurring software subscription or runtime license fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Clock className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Long-Term Technical Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full As-Built schematics, program archives, operator coaching, and responsive ongoing SLA agreements.
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
              href="/mitsubishi-plc/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Activity className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Mitsubishi PLC
                </h3>
                <p className="text-[11px] text-slate-400 mt-2">
                  MELSEC iQ-R, iQ-F &amp; GX Works automation.
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
                  Custom electrical panel design with Unitronics gear.
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
              Cost-Effective Automation
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need a Cost-Effective Automation Solution with Unitronics PLC?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Work with a UK-based engineering team delivering reliable Unitronics PLC solutions worldwide. From space-saving machine control panels to direct SQL data logging, we build solutions that deliver maximum value.
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
              Direct Engineering Consultation • Tailored All-in-One Scoping • Worldwide Deployment Reach
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
