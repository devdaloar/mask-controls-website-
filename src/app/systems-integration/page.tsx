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
  Network,
  Database,
  Share2,
  RefreshCw,
  BarChart3,
  Server,
  Cable,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Lock,
  Boxes
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Systems Integration Services | MASK Control Systems Ltd",
  description: "Seamlessly connect your machinery, PLC systems, SCADA, and production processes with UK-based automation engineers delivering reliable integration solutions worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/systems-integration/"
  },
  openGraph: {
    title: "Industrial Systems Integration Services | MASK Control Systems Ltd",
    description: "Seamlessly connect your machinery, PLC systems, and production processes with UK-based automation engineers delivering reliable integration solutions worldwide.",
    url: "https://maskcontrols.com/systems-integration/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Industrial Systems Integration Services.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Systems Integration Services - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function SystemsIntegrationPage() {
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
            "name": "Systems Integration",
            "item": "https://maskcontrols.com/systems-integration/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Industrial Systems Integration Services",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Specialist systems integration services connecting machinery, PLC architectures, SCADA networks, and cloud telemetry across the UK and worldwide.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const capabilities = [
    {
      title: "PLC System Integration",
      desc: "Connecting PLCs across disparate machines, production cells, and processes to enable synchronized, coordinated automation.",
      image: "/images/Automation System Integration.jpg",
      alt: "PLC System Integration - Multi-vendor PLC Synchronization by MASK Control Systems",
      points: [
        "Multi-vendor PLC handshakes & cross-platform messaging",
        "Deterministic inter-controller cyclic data exchange",
        "Coordinated safety interlocks across production cells",
        "Line synchronization and buffer level optimization"
      ]
    },
    {
      title: "Machine-to-Machine (M2M) Integration",
      desc: "Ensuring different machines communicate and operate harmoniously together without production bottlenecking.",
      image: "/images/Control System Engineering.jpg",
      alt: "Machine to Machine Integration - MASK Control Systems Industrial Solutions",
      points: [
        "Upstream and downstream speed & feed rate matching",
        "Automated inter-machine part transfer logic",
        "Fault-propagation prevention across multi-stage lines",
        "Standardized sensor & actuator interface protocols"
      ]
    },
    {
      title: "SCADA & Control System Integration",
      desc: "Integration of supervisory control and data acquisition systems for centralized real-time monitoring and management.",
      image: "/images/systems-integration.jpg",
      alt: "SCADA and Control System Integration by MASK Control Systems",
      points: [
        "Centralized shop-floor HMI & SCADA control suites",
        "Live alarm routing, logging, and historical trend analysis",
        "Automated recipe management & batch tracking",
        "Role-based operator security and audit trailing"
      ]
    },
    {
      title: "Industrial Communication Protocols",
      desc: "Robust communication pipelines supporting modern open standards alongside traditional industrial fieldbuses.",
      image: "/images/TELEMETRY SYSTEM & TEST RIG.jpg",
      alt: "Industrial Communication Protocols and Network Architecture",
      points: [
        "OPC UA & MQTT for secure Industry 4.0 data exchange",
        "Profinet, Profibus, EtherCAT & EtherNet/IP implementation",
        "Modbus RTU / TCP legacy device conversion",
        "Managed industrial switches with VLAN network segmentation"
      ]
    },
    {
      title: "Legacy System Integration",
      desc: "Upgrading and integrating older machines and relays with modern automation technologies without costly line replacements.",
      image: "/images/Legacy System Upgrades.jpg",
      alt: "Legacy System Integration and Retrofit Services",
      points: [
        "Serial-to-Ethernet protocol converters and smart gateways",
        "PLC retrofits for legacy proprietary controller boards",
        "Non-intrusive parallel sensor tapping for live telemetry",
        "Step-by-step phased cutovers with zero production downtime"
      ]
    },
    {
      title: "Data & Process Integration",
      desc: "Enabling real-time data flow, automated reporting, and deep operational insights across plant operations.",
      image: "/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg",
      alt: "Data and Process Integration - Manufacturing Intelligence",
      points: [
        "Live Overall Equipment Effectiveness (OEE) tracking",
        "Automated energy and consumable usage monitoring",
        "Shop floor to ERP, MES, and cloud data warehouse bridges",
        "Predictive maintenance trigger algorithms"
      ]
    }
  ];

  const integrationPlatforms = [
    {
      name: "Siemens PLC & Automation Systems",
      desc: "Deep expertise in SIMATIC S7-1200, S7-1500, TIA Portal, WinCC Unified, and Profinet industrial architectures.",
      image: "/images/Siemens PLC Systems.jpg",
      alt: "Siemens PLC Systems Integration",
      link: "/siemens-plc/"
    },
    {
      name: "Unitronics All-in-One PLC + HMI",
      desc: "Specialist programming in UniStream, Vision series, built-in VNC, remote telemetry, and native MQTT/SQL connectivity.",
      image: "/images/Unitronics PLC Systems.jpg",
      alt: "Unitronics PLC and HMI Integration",
      link: "/unitronics-plc/"
    },
    {
      name: "SCADA & Supervisory Systems",
      desc: "Ignition, Siemens WinCC, FactoryTalk, and modern web-based SCADA deployments for single or multi-facility oversight.",
      image: "/images/systems-integration.jpg",
      alt: "SCADA Centralized Supervisory Control Systems",
      link: "/automation/"
    },
    {
      name: "Industrial Networks & Protocols",
      desc: "Deterministic Ethernet, OPC UA server/client architectures, MQTT brokers, and multi-protocol gateway bridges.",
      image: "/images/TELEMETRY SYSTEM & TEST RIG.jpg",
      alt: "Industrial Networks and Communication Infrastructure",
      link: "/remote-monitoring/"
    },
    {
      name: "Cloud-Based Monitoring & Telemetry",
      desc: "Secure end-to-end industrial IoT telemetry delivering live operational dashboards to desktop, mobile, and enterprise clouds.",
      image: "/images/Industrial Remote Monitoring & Smart Automation Solutions.jpg",
      alt: "Cloud Based Monitoring Systems and Industrial IoT",
      link: "/remote-monitoring/"
    }
  ];

  const protocolMatrix = [
    {
      protocol: "OPC UA",
      category: "Industrial Standard",
      description: "Platform-independent, service-oriented architecture with built-in encryption and end-to-end authentication.",
      typicalUse: "PLC-to-SCADA, MES integration, and multi-vendor industrial communications."
    },
    {
      protocol: "MQTT / Sparkplug B",
      category: "IIoT & Cloud",
      description: "Lightweight publish/subscribe protocol designed for low-bandwidth, high-latency telemetry transport.",
      typicalUse: "Edge-to-cloud telemetry, remote asset monitoring, and predictive analytics."
    },
    {
      protocol: "Profinet / Profibus",
      category: "Deterministic Fieldbus",
      description: "Ultra-fast, deterministic industrial Ethernet protocol enabling sub-millisecond motion and I/O cycles.",
      typicalUse: "Siemens architectures, servo drives, distributed remote I/O, and robotics."
    },
    {
      protocol: "Modbus TCP / RTU",
      category: "Legacy & Instruments",
      description: "The universal industrial standard for power meters, sensors, variable speed drives, and older PLCs.",
      typicalUse: "Energy sub-metering, environmental sensors, and legacy machinery interfacing."
    },
    {
      protocol: "EtherNet/IP",
      category: "Industrial Ethernet",
      description: "Common Industrial Protocol (CIP) implementation over standard Ethernet physical layers.",
      typicalUse: "Rockwell/Allen-Bradley controllers, barcode scanners, and packaging machine cells."
    }
  ];

  const problemsAndBenefits = [
    {
      problem: "Disconnected Systems & Machinery Islands",
      problemDetail: "Isolated machines running separate proprietary controllers create operational silos, manual handover delays, and blind spots.",
      benefit: "Unified Machine Ecosystem",
      benefitDetail: "We connect machines and controllers into one synchronized workflow, harmonizing line throughput and eliminating operational friction."
    },
    {
      problem: "Lack of Real-Time Operational Visibility",
      problemDetail: "Plant managers rely on end-of-shift paper logs or delayed spreadsheets, missing micro-stoppages and throughput losses.",
      benefit: "Live SCADA & Plantwide Dashboards",
      benefitDetail: "Instant, real-time visibility into machine status, part counts, cycle times, and fault diagnostics across every station."
    },
    {
      problem: "Inefficient Production Workflows",
      problemDetail: "Asynchronous machine rates cause conveyor backups, component starvation, and operator idle time.",
      benefit: "Optimized Line Throughput",
      benefitDetail: "Dynamic speed regulation and automated buffer handshakes maintain optimal machine equilibrium and reduce energy consumption."
    },
    {
      problem: "Legacy Equipment Limitations",
      problemDetail: "Valuable mechanical assets cannot communicate with modern digital control rooms or cloud monitoring tools.",
      benefit: "Bridge Hardware & Protocol Gateways",
      benefitDetail: "We integrate modern smart sensors and protocol translators to bring 20-year-old machinery into your modern Industry 4.0 ecosystem."
    },
    {
      problem: "Fragmented Data Silos & Manual Entry",
      problemDetail: "Production numbers, quality metrics, and maintenance logs reside in separate, uncoordinated systems.",
      benefit: "Automated Data Flow & ERP Bridges",
      benefitDetail: "Real-time automated logging into databases, MES, and reporting tools—guaranteeing 100% data integrity and zero manual paperwork."
    }
  ];

  const integrationSteps = [
    {
      step: "01",
      title: "System Assessment & Audit",
      desc: "Our engineers perform a thorough audit of your existing machinery, PLC models, communication wiring, network switches, and data requirements."
    },
    {
      step: "02",
      title: "Integration Planning & Architecture",
      desc: "We develop a robust integration roadmap, detailed network topology diagrams, IP allocation tables, and fail-safe safety interlock specifications."
    },
    {
      step: "03",
      title: "Engineering & Software Development",
      desc: "Custom PLC code, protocol driver mapping, SCADA screens, and database connection logic are developed in accordance with international standards."
    },
    {
      step: "04",
      title: "Implementation & Hardware Deployment",
      desc: "On-site installation of industrial gateways, shielded fieldbus cabling, managed switches, and panel wiring updates carried out with minimal disruption."
    },
    {
      step: "05",
      title: "Testing, Simulation & Validation",
      desc: "Rigorous Factory (FAT) and Site Acceptance Testing (SAT) verifying bidirectional communication, latency tolerances, and emergency stop interlocks."
    },
    {
      step: "06",
      title: "Commissioning & Ongoing SLA Support",
      desc: "Final line cutover, operator training, detailed electrical documentation, and 24/7 remote telemetry support to ensure ongoing operational excellence."
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
            <span className="text-[#6DA7BF] font-medium">Systems Integration</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Network className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK Automation Engineers • Global Integration Delivery</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Industrial Systems Integration Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Seamlessly connect your machinery, PLC systems, and production processes with UK-based automation engineers delivering reliable integration solutions worldwide.
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

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Multi-Vendor Handshake</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">OPC UA / MQTT</div>
                  <div className="text-xs text-slate-400 mt-0.5">Industry 4.0 Standard</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">UK &amp; Global</div>
                  <div className="text-xs text-slate-400 mt-0.5">On-Site &amp; Telemetry</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/Industrial Systems Integration Services.jpg"
                    alt="Industrial Systems Integration Services - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Multi-Protocol Gateway</div>
                      <div className="text-[11px] text-[#6DA7BF]">Zero Data Loss • Real-Time Synchronization</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      LIVE BUS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. INTRO SECTION & CORE ARCHITECTURE
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <span>Connected Manufacturing Ecosystems</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Unifying Disconnected Machinery into One Seamless Workflow
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we provide specialist systems integration services designed to connect machines, control systems, and production processes into a single, efficient workflow.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Modern manufacturing environments rely on multiple systems working together. Without proper integration, operations can become inefficient, disconnected, and difficult to manage. Islands of automation hinder productivity, lead to operator confusion, and create blind spots across the plant.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based automation engineering company with global capability, we deliver fully integrated solutions that improve performance, visibility, and operational control. We bridge the gap between mechanical hardware, electrical control cabinets, PLC controllers, and high-level enterprise software.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Cross-Vendor Harmony</h3>
                    <p className="text-xs text-slate-400 mt-1">Direct handshakes between Siemens, Allen-Bradley, Mitsubishi, and Unitronics.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Zero Line Disruption</h3>
                    <p className="text-xs text-slate-400 mt-1">Phased migration strategies and parallel hardware testing during scheduled downtime.</p>
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
                  <span>The Integration Advantage</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Shop Floor to Top Floor:</strong> Seamless bi-directional link between shop-floor sensors and executive cloud analytics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Unified Alarm Matrix:</strong> Centralized fault diagnosis reducing emergency downtime by up to 45%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Deterministic Speed Matching:</strong> Eliminating conveyor pileups and mechanical strain through line coordination.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Full Safety Interlocking:</strong> Safety PLCs and category-compliant E-stop handshakes across all cell boundaries.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Questions about your existing PLC bus?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Consult an Engineer</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. WHAT WE DO (Engineering Overview)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Complete End-to-End Systems Integration
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
              We integrate new and existing systems into a unified automation environment—ensuring seamless communication, reliable data flow, and efficient operation across your entire production process.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Our integration services cover PLC systems, control panels, bespoke machinery, and industrial communication networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PLC Control Systems</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Programming and interconnecting PLCs to form synchronized production networks with deterministic cyclic communications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Electrical Control Panels</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Interfacing new or retrofit control enclosures into existing power distribution, safety loops, and field wiring buses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bespoke Machinery</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Seamless physical and electrical integration of newly designed bespoke machines into active operational factory lines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Industrial Networks</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Architecting high-throughput, secure communication highways using Profinet, Ethernet/IP, Modbus TCP, and OPC UA.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          4. OUR SYSTEMS INTEGRATION CAPABILITIES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Systems Integration Capabilities
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                End-to-end technical capabilities engineered to unify control, eliminate blind spots, and optimize production flow.
              </p>
            </div>
            <Link 
              href="/contact/" 
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Discuss Your Integration Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0C121C] border border-white/10 overflow-hidden hover:border-[#6DA7BF]/50 transition-all duration-300 group flex flex-col"
              >
                {/* Capability Real Image */}
                <div className="relative h-52 w-full overflow-hidden bg-[#090E16]">
                  <Image
                    src={cap.image}
                    alt={cap.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0C121C]/80 backdrop-blur-sm border border-white/10 text-[11px] font-mono font-bold text-[#6DA7BF]">
                    CAPABILITY {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>

                {/* Capability Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#6DA7BF] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {cap.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      {cap.points.map((pt, pIdx) => (
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
                      <span>Inquire About This Capability</span>
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
          5. INTEGRATION TECHNOLOGIES & PLATFORMS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Integration Technologies We Work With
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We work with leading automation hardware and communication platforms, delivering flexible, scalable, and future-ready architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationPlatforms.map((plat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-[#090E16]">
                    <Image
                      src={plat.image}
                      alt={plat.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-60" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                    {plat.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {plat.desc}
                  </p>
                </div>

                <Link
                  href={plat.link}
                  className="text-xs font-semibold text-[#6DA7BF] hover:text-[#5B95AD] inline-flex items-center gap-1.5 pt-4 border-t border-white/5"
                >
                  <span>Explore Platform Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          6. INDUSTRIAL PROTOCOL MATRIX
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Industrial Protocols
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Standardized Industrial Protocol Support
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We implement industry-standard open communication channels ensuring safe, reliable, and vendor-neutral interoperability across every device.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0C121C] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-[#090E16] text-[#6DA7BF] uppercase tracking-wider text-[11px] font-mono border-b border-white/10">
                  <tr>
                    <th className="py-4 px-6">Protocol</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Architecture &amp; Features</th>
                    <th className="py-4 px-6">Typical Industrial Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {protocolMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-white font-mono flex items-center gap-2">
                        <Cable className="w-4 h-4 text-[#6DA7BF]" />
                        <span>{item.protocol}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px]">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-300 max-w-sm">
                        {item.description}
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        {item.typicalUse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          7. PROBLEMS WE SOLVE & BENEFITS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              The Real-World Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Problems We Solve vs. Benefits Delivered
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              How our specialist systems integration engineering directly transforms production bottlenecks into high-yield, synchronized operations.
            </p>
          </div>

          <div className="space-y-4">
            {problemsAndBenefits.map((item, idx) => (
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
                      {item.problemDetail}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center text-[#6DA7BF]">
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Benefit Side */}
                <div className="lg:col-span-6 flex items-start gap-3.5 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] mb-1">
                      Benefit: {item.benefit}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.benefitDetail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Summary Benefits Pill Bar */}
          <div className="mt-12 p-6 rounded-2xl bg-[#070D16] border border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-2">
              <div className="text-base font-bold text-white">Improved</div>
              <div className="text-[11px] text-slate-400 mt-1">Operational Efficiency</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-[#6DA7BF]">Full Visibility</div>
              <div className="text-[11px] text-slate-400 mt-1">Real-Time Data &amp; Logs</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-white">Reduced</div>
              <div className="text-[11px] text-slate-400 mt-1">Manual Interventions</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-[#6DA7BF]">High Reliability</div>
              <div className="text-[11px] text-slate-400 mt-1">Interlocked Safety</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-white">Scalable</div>
              <div className="text-[11px] text-slate-400 mt-1">Modular Architecture</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-[#6DA7BF]">Agile Speed</div>
              <div className="text-[11px] text-slate-400 mt-1">Faster Decision Making</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          8. OUR 6-STEP INTEGRATION PROCESS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our 6-Step Integration Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Structured engineering execution designed to minimize line downtime, preserve safety integrity, and deliver immediate production value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationSteps.map((s, idx) => (
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
                  <span>PHASE {s.step}</span>
                  <Check className="w-4 h-4 text-[#6DA7BF]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          9. GLOBAL INTEGRATION CAPABILITY
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-[#0C121C] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DA7BF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  UK Engineering • Worldwide Deployment
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Global Integration Capability Across Multi-Site Facilities
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  We provide systems integration services across the UK and internationally, supporting clients with complex, multi-site, and global operations.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Whether synchronizing machines across an entire manufacturing plant in the UK or deploying multi-vendor control architectures in Europe, the Middle East, or the Americas, our team ensures consistent integration standards, rigorous testing, and reliable 24/7 telemetry support regardless of geographic location.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Globe2 className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Multi-Site Cloud Sync</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
                    <span>CE, UKCA &amp; UL 508A Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Radio className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Encrypted VPN Remote Diagnostics</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-[#6DA7BF]">13+</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Years International Experience</div>
                  <p className="text-[11px] text-slate-500 mt-1">Delivering trusted automation engineering across critical industries worldwide.</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-white">24/7</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Remote Telemetry Connectivity</div>
                  <p className="text-[11px] text-slate-500 mt-1">Real-time telemetry and diagnostics straight into our UK engineering centre.</p>
                </div>
              </div>
            </div>

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
              Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We deliver integration solutions that connect your systems, improve performance, and support your long-term operational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Expertise in PLC &amp; Automation Integration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Decades of hands-on technical programming, cross-vendor driver interfacing, and complex robotic handshakes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Factory className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Experience Across Multiple Industries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Proven delivery for automotive giants, aerospace facilities, marine defense, and food packaging lines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <RefreshCw className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Support for Modern &amp; Legacy Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We bridge 25-year-old serial relay machinery with cutting-edge cloud architectures without requiring complete line rebuilds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Workflow className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Structured Integration Process</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Methodical FAT and SAT validation, comprehensive risk assessments, and zero-compromise safety compliance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Globe2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">UK-Based Engineering with Global Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Central UK headquarters in Birmingham with field engineers deployed to client sites across the globe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <ShieldCheck className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Reliable Long-Term Support &amp; SLAs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ongoing service agreements, guaranteed response windows, and full electrical and software lifecycle documentation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          11. INDUSTRIES SUPPORTED
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Integration Across Key Industrial Sectors
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Tailoring communication topologies and safety architectures to the strict regulatory standards of every sector.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industriesList.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform">
                    <Factory className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                    {ind.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Explore Industry</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          12. RELATED SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Complementary Capabilities
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <Link
              href="/design-build-services/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Wrench className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Design &amp; Build
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Bespoke machinery and full turnkey automation build.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
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
                <p className="text-xs text-slate-400 mt-2">
                  Custom electrical panel design, manufacturing &amp; assembly.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/plc-programming/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Cpu className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  PLC Programming
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Siemens, Unitronics &amp; multi-vendor controller programming.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
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
                  Installation &amp; Commissioning
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Safe on-site installation, field wiring, and SAT testing.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/remote-monitoring/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Radio className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Remote Monitoring
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Smart telemetry, edge analytics &amp; 24/7 cloud oversight.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================
          13. CALL TO ACTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#070D16] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Connect &amp; Optimise Your Operations
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need to Connect and Optimise Your Production Systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Work with a UK-based engineering team delivering reliable systems integration solutions worldwide. From machine-to-machine handshakes to plantwide SCADA, we build the connected future of your factory.
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
              Direct Engineering Consultation • No Obligation Project Scoping • Rapid UK &amp; Global Response
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
