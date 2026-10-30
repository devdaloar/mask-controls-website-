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
  HelpCircle,
  Mail,
  Shield,
  Plane,
  FileText,
  Lock,
  Flame,
  Ship,
  Truck,
  Droplets,
  FlaskConical,
  TrendingUp,
  Cog,
  MonitorCheck,
  Award
} from "lucide-react";
import ProjectsInteractiveGrid, { ProjectItem } from "@/components/projects/ProjectsInteractiveGrid";

export const metadata: Metadata = {
  title: "Industrial Automation Projects & Engineering Case Studies | MASK Control Systems Ltd",
  description: "Explore real-world industrial automation projects including custom control panels, PLC systems, telemetry test rigs, and bespoke machinery engineered across the UK and worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/projects/"
  },
  openGraph: {
    title: "Industrial Automation Projects & Engineering Case Studies | MASK Control Systems Ltd",
    description: "Explore real-world industrial automation projects including custom control panels, PLC systems, telemetry test rigs, and bespoke machinery engineered across the UK and worldwide.",
    url: "https://maskcontrols.com/projects/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Automation Projects & Engineering Case Studies - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function ProjectsPage() {
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
            "name": "Projects",
            "item": "https://maskcontrols.com/projects/"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Industrial Automation Projects & Engineering Case Studies",
        "description": "Explore real-world automation projects including control panels, PLC systems, telemetry solutions, and custom machinery designed to improve efficiency, safety, and performance.",
        "url": "https://maskcontrols.com/projects/",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a typical control panel or automation project take from order to delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Project lead times depend on system complexity and component lead times. Standalone PLC panels typically take 4-8 weeks, while fully integrated automated lines or custom machinery rigs range from 8-16 weeks including full Factory Acceptance Testing (FAT)."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate with machinery or PLCs from manufacturers you didn't originally install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A significant portion of our work involves retrofitting, modernizing, and interconnecting legacy production equipment from Siemens, Mitsubishi, Rockwell Allen-Bradley, Omron, and Unitronics with modern SCADA and fieldbus networks."
            }
          },
          {
            "@type": "Question",
            "name": "How do you verify and test custom control panels before site delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every system undergoes 100% point-to-point electrical continuity testing, safety loop verification, and complete simulation of PLC/HMI operating kinematics in our Cullompton facility prior to dispatch."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide Site Acceptance Testing (SAT) and commissioning abroad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our engineers travel worldwide to oversee mechanical installation, electrical interconnection, live SAT validation, and operator handover training across Europe, North America, and beyond."
            }
          },
          {
            "@type": "Question",
            "name": "What ongoing maintenance and warranty support do you provide post-commissioning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All our control systems come with comprehensive warranty coverage, complete as-built electrical schematics, PLC software source files, and options for 24/7 emergency breakdown support and preventative maintenance contracts."
            }
          }
        ]
      }
    ]
  };

  const clientLogos = [
    { name: "UK Ministry of Defence", src: "/images/UK-MOD-scaled.png" },
    { name: "Babcock International", src: "/images/Babcock-scaled.png" },
    { name: "Field International", src: "/images/Field-international-scaled.png" },
    { name: "Dunlop Aircraft Tyres", src: "/images/Dunlop-scaled.png" },
    { name: "Emirates", src: "/images/Emirates-scaled.png" },
    { name: "Alstom", src: "/images/Alstom-scaled.png" }
  ];

  const featuredProjects: ProjectItem[] = [
    {
      id: "milk-processing-cabinet",
      category: "Food & FMCG",
      categoryTag: "Food & Beverage • Sanitary Automation",
      badgeIcon: "Flame",
      title: "Control Cabinet for Processing Milk",
      emoji: "🥛",
      image: "/images/Milk Processing Control Cabinet.jpg",
      description: "A custom-built control cabinet designed for milk processing applications, integrating advanced pneumatic control systems and variable speed drive technology.",
      keyFeatures: [
        "Pneumatic control system using compressed air",
        "Sensors and thermostats for pressure regulation",
        "Centralised control architecture",
        "Variable Speed Drives (VSDs) for motors, pumps, and fans"
      ],
      results: [
        "Improved process control and responsiveness",
        "Reduced energy consumption",
        "Enhanced safety and efficiency"
      ],
      specs: [
        { label: "Sector", val: "Food & FMCG" },
        { label: "Hardware", val: "Pneumatics & VSDs" },
        { label: "Compliance", val: "HACCP & EHEDG" }
      ]
    },
    {
      id: "custom-plc-cabinet-hmi",
      category: "PLC & HMI",
      categoryTag: "Industrial Control • HMI Interfacing",
      badgeIcon: "Cpu",
      title: "Custom Built PLC Cabinet & HMI Integration",
      emoji: "⚙️",
      image: "/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg",
      description: "A fully customised PLC control cabinet with integrated HMI interface for real-time monitoring and operator control.",
      keyFeatures: [
        "PLC-based automation system",
        "Integrated HMI for system control",
        "Structured panel design for reliability",
        "User-friendly interface for operators"
      ],
      results: [
        "Improved system visibility",
        "Simplified operation and control",
        "Increased reliability of automation processes"
      ],
      specs: [
        { label: "Architecture", val: "Industrial PLC + HMI" },
        { label: "Enclosure", val: "IP54 Rittal Modular" },
        { label: "Standard", val: "BS EN 61439" }
      ]
    },
    {
      id: "telemetry-system-test-rig",
      category: "Telemetry",
      categoryTag: "Remote Telemetry • Long-Distance Data",
      badgeIcon: "Radio",
      title: "Telemetry System & Test Rig",
      emoji: "🌐",
      image: "/images/TELEMETRY SYSTEM & TEST RIG.jpg",
      description: "A wireless telemetry system designed for remote monitoring and long-distance data transmission.",
      keyFeatures: [
        "Wireless communication (radio/cellular)",
        "Real-time data transmission",
        "Integrated test rig for validation",
        "Remote monitoring capability"
      ],
      results: [
        "Eliminated need for complex cabling",
        "Enabled remote system monitoring",
        "Faster fault detection and decision-making"
      ],
      specs: [
        { label: "Transmission", val: "Radio / 4G Cellular" },
        { label: "Validation", val: "Integrated Test Rig" },
        { label: "Telemetry", val: "Edge-to-Cloud SCADA" }
      ]
    },
    {
      id: "wood-chipper-automation",
      category: "Machinery",
      categoryTag: "Custom Machinery • Automated Handling",
      badgeIcon: "Factory",
      title: "Auto-Feed Wood Chipper Automation System",
      emoji: "🌲",
      image: "/images/Specialist Engineering and Development Projects.jpg",
      description: "A high-performance automation system designed to optimise wood chipping operations with minimal manual intervention.",
      keyFeatures: [
        "Self-regulating pneumatic cylinder for consistent feed",
        "Automatic reverse & restart function",
        "Incline auger for automated material loading",
        "3-phase motor with gearbox"
      ],
      results: [
        "Reduced downtime from blockages",
        "Increased operational efficiency",
        "Improved safety and reduced manual handling"
      ],
      specs: [
        { label: "Feed Regulation", val: "Auto Reverse/Restart" },
        { label: "Drive System", val: "3-Phase Motor + Gearbox" },
        { label: "Material Feed", val: "Pneumatic Auger" }
      ]
    },
    {
      id: "lifting-beam-control-system",
      category: "Lifting",
      categoryTag: "Heavy Lifting • Multi-Arm Coordination",
      badgeIcon: "Layers",
      title: "Lifting Beam Control System",
      emoji: "🏗️",
      image: "/images/LIFTING BEAM CONTROL SYSTEM.jpg",
      description: "A precision control system designed to enhance safety and flexibility in lifting operations.",
      keyFeatures: [
        "Adjustable clamping length, width, and distance",
        "Multi-arm control functionality",
        "Visual indicator lights for system status",
        "Flexible load handling capability"
      ],
      results: [
        "Improved lifting safety",
        "Greater operational flexibility",
        "Reduced risk of errors"
      ],
      specs: [
        { label: "Kinematics", val: "Multi-Arm Clamping" },
        { label: "Visual Indication", val: "Multi-Color Status Tower" },
        { label: "Application", val: "High-Consequence Loads" }
      ]
    },
    {
      id: "temporary-refuge-shelter",
      category: "Safety",
      categoryTag: "Safety-Critical • Hazardous Environments",
      badgeIcon: "ShieldCheck",
      title: "Temporary Refuge Shelter Control System",
      emoji: "🛡️",
      image: "/images/TEMPORARY REFUGE SHELTER SYSTEM.jpg",
      description: "A safety-critical control system designed for hazardous environments to ensure occupant safety.",
      keyFeatures: [
        "Oxygen supply management system",
        "Gas monitoring and detection",
        "Automated air quality control",
        "Emergency-ready system design"
      ],
      results: [
        "Maintained safe breathing conditions",
        "Real-time hazard monitoring",
        "Enhanced safety in confined environments"
      ],
      specs: [
        { label: "Critical Function", val: "Life Support Telemetry" },
        { label: "Sensors", val: "Multi-Gas Detection" },
        { label: "Environment", val: "Confined / Hazardous" }
      ]
    }
  ];

  const typesOfSolutions = [
    {
      icon: Layers,
      title: "Electrical Control Panels",
      desc: "Custom-built, BS EN 61439 compliant enclosures engineered with premium switchgear, clean wire routing, and complete CAD documentation.",
      link: "/electrical-control-panel-design/"
    },
    {
      icon: Cpu,
      title: "PLC Automation Systems",
      desc: "Robust, deterministic control logic programmed on Siemens, Mitsubishi, Unitronics, and Rockwell platforms with structured code architecture.",
      link: "/plc-programming/"
    },
    {
      icon: Sliders,
      title: "HMI Control Interfaces",
      desc: "Intuitive touch interfaces providing crystal-clear production metrics, diagnostic alarm logging, and multi-tier operator security access.",
      link: "/systems-integration/"
    },
    {
      icon: Radio,
      title: "Telemetry & Remote Monitoring Systems",
      desc: "Industrial cellular, radio, and cloud telemetry solutions for remote asset tracking, automated alarming, and predictive maintenance.",
      link: "/remote-monitoring/"
    },
    {
      icon: Cog,
      title: "Custom Machinery Automation",
      desc: "Specialist electro-mechanical integration for bespoke production lines, hydraulic/pneumatic feeds, automated augers, and test rigs.",
      link: "/design-build-services/"
    },
    {
      icon: ShieldCheck,
      title: "Safety-Critical Control Systems",
      desc: "EN ISO 13849-1 (PL e) and IEC 62061 (SIL 2/3) safety circuits, fail-safe interlocks, and emergency life-support monitoring architectures.",
      link: "/automation/"
    }
  ];

  const industriesSupported = [
    {
      name: "Food & FMCG",
      desc: "High-speed packaging, hygienic washdown control cabinets, pasteurization telemetry, and recipe dosing systems.",
      link: "/industries/food-fmcg-automation/",
      icon: Flame
    },
    {
      name: "Manufacturing & Production",
      desc: "Tier 2/3 automotive supply lines, assembly automation, synchronized tooling, and robotics integration.",
      link: "/industries/automotive-automation-for-tier-2-3-suppliers/",
      icon: Factory
    },
    {
      name: "Marine & Offshore",
      desc: "Ruggedized, IP-rated deck machinery, ballast telemetry, navigation interlocks, and classification-approved panels.",
      link: "/industries/marine-automation-systems/",
      icon: Ship
    },
    {
      name: "Logistics & Material Handling",
      desc: "Conveyor diverters, sorting routing logic, automated guided vehicle (AGV) integration, and WMS connectivity.",
      link: "/industries/logistics-warehousing-automation-solutions/",
      icon: Truck
    },
    {
      name: "Environmental & Safety Systems",
      desc: "Water treatment telemetry, hazardous refuge shelters, gas detection networks, and remote pumping stations.",
      link: "/industries/water-utilities-automation-solutions/",
      icon: Droplets
    },
    {
      name: "Industrial Processing",
      desc: "Clean-room control cabinets, automated batch validation, chemical dosing, and pharmaceutical instrumentation.",
      link: "/industries/pharmaceutical-medical/",
      icon: FlaskConical
    }
  ];

  const projectResults = [
    {
      stat: "99.8%",
      label: "Reduced Downtime",
      desc: "Deterministic logic, modular wiring, and proactive diagnostics eliminate intermittent line stoppages and nuisance trips."
    },
    {
      stat: "+35%",
      label: "Improved Efficiency",
      desc: "Optimized VSD kinematic curves, synchronized feed cycles, and automated augers maximize throughput per shift."
    },
    {
      stat: "SIL 2/3",
      label: "Enhanced Safety",
      desc: "Full compliance with Machinery Directive safety regulations protects machine operators and hazardous environments."
    },
    {
      stat: "-28%",
      label: "Lower Operational Costs",
      desc: "Variable speed motor drives and intelligent energy management significantly cut electrical power consumption."
    },
    {
      stat: "100%",
      label: "System Visibility",
      desc: "Real-time HMI graphical instrumentation and remote telemetry put instant operational status in the hands of engineers."
    },
    {
      stat: "15+ Yrs",
      label: "Long-Term Reliability",
      desc: "Built with top-tier industrial components (Siemens, Schneider, Rittal) ensuring robust service lifespans and spare parts availability."
    }
  ];

  const whyProjectsStandOut = [
    {
      title: "Fully Bespoke Engineering Solutions",
      desc: "Every panel, PLC program, and mechanical interface is custom engineered to solve your exact production bottlenecks, never forced into rigid off-the-shelf templates."
    },
    {
      title: "End-to-End Project Delivery",
      desc: "We take single-point responsibility across every stage: concept design, CAD schematics, in-house fabrication, programming, FAT, on-site commissioning, and lifecycle support."
    },
    {
      title: "Multidisciplinary In-House Team",
      desc: "Our combined electrical, software, pneumatic, and mechanical engineering expertise under one roof eliminates contractor friction and delays."
    },
    {
      title: "Seamless Integration with Existing Systems",
      desc: "We specialize in connecting legacy machinery, proprietary equipment, and multi-vendor fieldbus protocols into cohesive, modern plant networks."
    },
    {
      title: "UK-Based Engineering with Global Capability",
      desc: "Designed and built at our Cullompton, Devon engineering facility, with systems installed and operating across the UK, Europe, North America, and worldwide."
    },
    {
      title: "Proven Experience Across Multiple Industries",
      desc: "Over 13 years of cross-sector engineering success spanning food & FMCG, aerospace & defence, marine, utilities, and automotive supply chains."
    }
  ];

  const projectApproachSteps = [
    {
      step: "01",
      title: "Understand Your Operational Requirements",
      desc: "We perform a thorough engineering discovery: reviewing existing drawings, observing line cycles, identifying compliance obligations, and establishing exact performance KPIs."
    },
    {
      step: "02",
      title: "Design a Tailored Automation Solution",
      desc: "Our engineers produce detailed electrical CAD schematics, Functional Design Specifications (FDS), safety SIL/PL calculations, and Bill of Materials (BOM)."
    },
    {
      step: "03",
      title: "Build and Test the System",
      desc: "Control panels are manufactured in-house to BS EN 61439 standards, followed by 100% Factory Acceptance Testing (FAT) with simulated I/O and client sign-off."
    },
    {
      step: "04",
      title: "Install and Commission",
      desc: "Our site engineers oversee mechanical mounting, cabling termination, live I/O verification, and formal Site Acceptance Testing (SAT) during planned production windows."
    },
    {
      step: "05",
      title: "Provide Ongoing Support",
      desc: "We supply complete As-Built documentation packages, operator training, remote telemetry monitoring, and rapid on-call technical breakdown assistance."
    }
  ];

  const faqs = [
    {
      q: "How long does a typical control panel or automation project take from order to delivery?",
      a: "Project lead times depend on system complexity and component lead times. Standalone PLC panels typically take 4-8 weeks, while fully integrated automated lines or custom machinery rigs range from 8-16 weeks including full Factory Acceptance Testing (FAT)."
    },
    {
      q: "Can you integrate with machinery or PLCs from manufacturers you didn't originally install?",
      a: "Yes. A significant portion of our work involves retrofitting, modernizing, and interconnecting legacy production equipment from Siemens, Mitsubishi, Rockwell Allen-Bradley, Omron, and Unitronics with modern SCADA and fieldbus networks."
    },
    {
      q: "How do you verify and test custom control panels before site delivery?",
      a: "Every system undergoes 100% point-to-point electrical continuity testing, safety loop verification, and complete simulation of PLC/HMI operating kinematics in our Cullompton facility prior to dispatch."
    },
    {
      q: "Do you provide Site Acceptance Testing (SAT) and commissioning abroad?",
      a: "Yes. Our engineers travel worldwide to oversee mechanical installation, electrical interconnection, live SAT validation, and operator handover training across Europe, North America, and beyond."
    },
    {
      q: "What ongoing maintenance and warranty support do you provide post-commissioning?",
      a: "All our control systems come with comprehensive warranty coverage, complete as-built electrical schematics, PLC software source files, and options for 24/7 emergency breakdown support and preventative maintenance contracts."
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
            <span className="text-[#6DA7BF] font-medium">Projects</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Sparkles className="w-4 h-4 text-[#6DA7BF]" />
                <span>Engineering Portfolio • Proven Field Reliability</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Industrial Automation Projects &amp; <br />
                <span className="text-[#6DA7BF]">Engineering Case Studies</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Explore real-world automation projects including control panels, PLC systems, telemetry solutions, and custom machinery designed to improve efficiency, safety, and performance.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="tel:+447412999343"
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#6DA7BF]" />
                  <span>Speak to an Engineer: +44 7412 999343</span>
                </a>
              </div>

              {/* Key Spec Badges */}
              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xl font-bold text-white">13+ Years</div>
                  <div className="text-xs text-slate-400">Engineering Heritage</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">100% FAT/SAT</div>
                  <div className="text-xs text-slate-400">Validated Sign-Off</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Multi-Sector</div>
                  <div className="text-xs text-slate-400">UK &amp; Global Cross-Discipline</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">3 Continents</div>
                  <div className="text-xs text-slate-400">Worldwide Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Engineering Imagery */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg"
                    alt="Custom PLC Cabinet & HMI Integration by MASK Control Systems"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* High-Tech Spec Card */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">BUILD SPECIFICATION:</span>
                    <span className="text-[#6DA7BF]">BS EN 61439 &amp; CE/UKCA</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">VERIFICATION STATUS:</span>
                    <span className="text-emerald-400">100% TESTED &amp; COMMISSIONED</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CONTROL PLATFORMS:</span>
                    <span className="text-slate-200">SIEMENS • MITSUBISHI • UNITRONICS</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK WORKSHOP: CULLOMPTON, DEVON</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CLIENT TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted Across UK &amp; International Industrial Projects:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {clientLogos.map((client, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl px-4 py-2.5 h-12 sm:h-14 flex items-center justify-center shadow-md shadow-black/30 border border-white hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src={client.src}
                    alt={`${client.name} partner with MASK Control Systems`}
                    width={130}
                    height={44}
                    className="max-h-7 sm:max-h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. INTRO SECTION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Activity className="w-3.5 h-3.5" />
                <span>Field-Proven Practical Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Bespoke Automation Solutions Tailored to <br />
                <span className="text-[#6DA7BF]">Real Industrial Challenges</span>
              </h2>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed font-light">
                <p>
                  At MASK Control Systems, we design and deliver bespoke automation solutions tailored to real industrial challenges.
                </p>
                <p>
                  Our projects demonstrate our expertise in control systems, PLC cabinets, telemetry solutions, and custom-built machinery. Each solution is engineered to improve operational efficiency, enhance safety, and deliver reliable long-term performance.
                </p>
                <p>
                  From standalone control panels to fully integrated automation systems, we provide practical solutions that work in real production environments.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Start Your Project Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Highlights */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Gauge className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">99.8% Availability</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    High-reliability electrical componentry and clean PLC logic architecture designed for uninterrupted production duty cycles.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Zero-Defect FAT Testing</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    100% pre-commissioning simulation at our Devon workshop before shipping guarantees rapid, trouble-free on-site installation.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Users2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Engineer Accountability</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    You collaborate directly with Adam and senior control engineers who design, wire, and commission your machinery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. FEATURED PROJECTS INTERACTIVE GRID
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10" id="featured-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>Real-World Engineering Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Explore our landmark automation builds spanning hygienic food manufacturing, heavy material lifting, wireless telemetry test rigs, and hazardous refuge control.
            </p>
          </div>

          <ProjectsInteractiveGrid projects={featuredProjects} />
        </div>
      </section>

      {/* =========================================
          5. TYPES OF SOLUTIONS WE DELIVER
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Specialist Engineering Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Types of Solutions We Deliver
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Across our projects, we specialise in comprehensive automation engineering capabilities tailored to diverse operational environments:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typesOfSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      href={sol.link}
                      className="text-xs font-semibold text-[#6DA7BF] hover:text-white transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore this discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          6. INDUSTRIES WE SUPPORT
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
                <Factory className="w-3.5 h-3.5" />
                <span>Sector Versatility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Industries We Support
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-light max-w-2xl">
                Our bespoke automation systems are engineered to withstand the rigorous standards, hygiene requirements, and safety compliance of diverse sectors:
              </p>
            </div>
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors shrink-0"
            >
              <span>View All Sector Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesSupported.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={idx}
                  href={ind.link}
                  className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#6DA7BF] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#6DA7BF] transition-colors mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {ind.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          7. RESULTS OUR PROJECTS DELIVER
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Measurable Production Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Results Our Projects Deliver
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Every project is engineered to achieve tangible operational metrics that justify capital investment from day one:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectResults.map((res, idx) => (
              <div 
                key={idx} 
                className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#6DA7BF]">
                    {res.stat}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">
                    {res.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {res.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED PERFORMANCE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. WHY OUR PROJECTS STAND OUT
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>The MASK Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Our Projects Stand Out
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Engineering integrity, technical transparency, and end-to-end accountability distinguish our automation projects from standard panel shops:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyProjectsStandOut.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. OUR PROJECT APPROACH (5 Steps)
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Structured Delivery Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Project Approach
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We focus on delivering solutions that work reliably in real-world environments through a rigorous, five-stage engineering process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {projectApproachSteps.map((s, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 relative flex flex-col justify-between hover:border-[#6DA7BF]/50 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-2xl font-black font-mono text-[#6DA7BF]/40">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
                  STAGE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          10. FREQUENTLY ASKED QUESTIONS (Centered)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Engineering Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Common questions clients ask when planning bespoke automation and control panel projects:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF] shrink-0" />
                </summary>
                <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          11. CALL TO ACTION
      ========================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0C121C] to-[#070D16] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-6">
            <Sparkles className="w-4 h-4 text-[#6DA7BF]" />
            <span>Turnkey Engineering Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Start Your <br />
            <span className="text-[#6DA7BF]">Automation Project?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Work with a UK-based engineering team delivering bespoke automation solutions worldwide. Discuss your technical specifications or schedule an on-site feasibility evaluation today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href="tel:+447412999343"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6DA7BF]" />
              <span>Speak to an Engineer: +44 7412 999343</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>BS EN 61439 Certified Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>100% In-House FAT Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>Worldwide Commissioning &amp; SAT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
