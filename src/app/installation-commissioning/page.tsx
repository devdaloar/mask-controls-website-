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
  GraduationCap,
  ClipboardCheck,
  FileText
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Installation & Commissioning Services | MASK Control Systems Ltd",
  description: "UK-based automation engineers deliver professional installation, system commissioning, and on-site support ensuring your equipment performs from day one, worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/installation-commissioning/"
  },
  openGraph: {
    title: "Industrial Installation & Commissioning Services | MASK Control Systems Ltd",
    description: "Professional industrial equipment installation, electrical hookup, PLC commissioning, and SAT validation across the UK and worldwide.",
    url: "https://maskcontrols.com/installation-commissioning/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Industrial Installation & Commissioning Services.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Installation and Commissioning Services - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function InstallationCommissioningPage() {
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
            "name": "Installation & Commissioning",
            "item": "https://maskcontrols.com/installation-commissioning/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Industrial Installation & Commissioning Services",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Expert on-site installation, electrical containment, control panel integration, PLC commissioning, and SAT validation for manufacturing plants worldwide.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const services = [
    {
      title: "On-Site Equipment Installation",
      desc: "Professional installation of machinery, control panels, and automation systems within your facility with zero safety compromises.",
      image: "/images/control-panel.jpg",
      alt: "On-Site Industrial Control Panel Installation by MASK Control Systems",
      points: [
        "Containment, trunking, ladder rack & armored cable routing",
        "Motor, servo drive & sensor field wiring to BS 7671",
        "Control panel positioning, seismic securing & glanding",
        "Clean, labelled, and documented industrial containment"
      ]
    },
    {
      title: "System Configuration & Setup",
      desc: "Precise configuration of PLCs, VFD variable speed drives, instrumentation, and automation logic tailored to your exact process parameters.",
      image: "/images/PLC Programming.jpg",
      alt: "Industrial Automation and PLC Configuration Services",
      points: [
        "PLC firmware verification, I/O mapping & logic uploading",
        "VFD motor parameterization, autotuning & ramp profiling",
        "Digital & analog sensor scaling and calibration",
        "Safety PLC zone configuration and interlock verification"
      ]
    },
    {
      title: "Electrical & Control System Integration",
      desc: "Connecting and integrating electrical systems, control panels, field instrumentation, and industrial communication highways.",
      image: "/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg",
      alt: "Electrical and Control System Integration On-Site",
      points: [
        "Comprehensive 100% point-to-point I/O loop checking",
        "Profinet, Modbus TCP, EtherNet/IP bus certification",
        "Emergency stop and category 3/4 safety circuit validation",
        "Harmonized handshakes with upstream and downstream lines"
      ]
    },
    {
      title: "System Testing & Validation",
      desc: "Methodical testing protocols ensuring correct functional operation, safety shutdown compliance, and fault resilience.",
      image: "/images/FAULT FINDING & DIAGNOSTICS.jpg",
      alt: "Industrial System Testing and SAT Commissioning",
      points: [
        "Cold commissioning dry runs and signal simulation",
        "Hot commissioning under actual production load",
        "Formal Factory (FAT) & Site Acceptance Testing (SAT)",
        "Emergency failure mode simulation and safe recovery checks"
      ]
    },
    {
      title: "Performance Optimisation",
      desc: "Fine-tuning hardware, servo responses, and software loops to achieve maximum throughput, consistency, and energy efficiency.",
      image: "/images/SYSTEM OPTIMIZATION.jpg",
      alt: "System Performance Optimization and PID Tuning",
      points: [
        "Cycle time bottleneck identification and code refinement",
        "Precision PID loop tuning for pressure, flow, and heat",
        "Thermal scanning and vibration baseline recordings",
        "Drive deceleration tuning to minimize mechanical wear"
      ]
    },
    {
      title: "Operator Training & Handover",
      desc: "Empowering your on-site engineering and production personnel with the practical skills and documentation to operate smoothly.",
      image: "/images/HMI Development.jpg",
      alt: "Operator Training and System Handover Documentation",
      points: [
        "Clear, hands-on operator interface and recipe training",
        "Routine maintenance checklists and preventative schedules",
        "Complete As-Built electrical schematics in EPLAN / CAD",
        "Full Operation and Maintenance (O&M) technical manuals"
      ]
    }
  ];

  const systemsWeCommission = [
    {
      title: "PLC-Based Automation Systems",
      desc: "Siemens S7, Unitronics, Mitsubishi, Rockwell, and Schneider architectures commissioned to exacting industrial standards.",
      icon: Cpu
    },
    {
      title: "Electrical Control Panels & MCCs",
      desc: "Motor Control Centers, variable speed drive panels, custom power distribution cabinets, and operator control desks.",
      icon: Boxes
    },
    {
      title: "Custom Machinery & Equipment",
      desc: "Bespoke assembly machines, lifting beams, high-pressure test rigs, and automated handling equipment.",
      icon: Factory
    },
    {
      title: "Integrated Production Lines",
      desc: "Multi-stage automated conveyor lines, robotic transfer stations, sorting cells, and packaging machinery.",
      icon: Workflow
    },
    {
      title: "HMI & Operator Interfaces",
      desc: "Touchscreen operator terminals, industrial PCs, and SCADA control rooms with intuitive telemetry visualization.",
      icon: Sliders
    },
    {
      title: "Industrial Networks & Gateways",
      desc: "Profinet, Modbus RTU/TCP, EtherNet/IP, fiber optic backbones, and encrypted IIoT cloud telemetry gateways.",
      icon: Radio
    }
  ];

  const problemsSolved = [
    {
      problem: "Incorrect System Installation",
      solution: "We ensure all mechanical and electrical equipment is installed strictly to manufacturer and British Standards (BS 7671), preventing early component wear and electrical failure."
    },
    {
      problem: "Costly Delays in Project Deployment",
      solution: "Our structured FAT/SAT approach and rigorous pre-commissioning planning eliminate unexpected on-site roadblocks, delivering projects on schedule."
    },
    {
      problem: "Complex Integration Challenges",
      solution: "Our cross-disciplinary engineers bridge mechanical hardware, fieldbus networks, and multi-vendor PLCs so disparate units work in total harmony."
    },
    {
      problem: "Sub-Optimal Production Performance",
      solution: "We don't just power on the system—we optimize motor curves, tune PID loops, and streamline sequence timing for maximum line yield."
    },
    {
      problem: "Lack of Internal Operator Knowledge",
      solution: "We provide detailed operator and maintenance coaching alongside fully documented As-Built schematics, ensuring your team has full confidence from Day 1."
    }
  ];

  const commissioningProcess = [
    {
      step: "01",
      title: "Pre-Installation Planning",
      desc: "Comprehensive review of system design, site layout, power requirements, containment routes, and CDM/RAMS safety documentation."
    },
    {
      step: "02",
      title: "Equipment Installation",
      desc: "On-site mechanical positioning, panel bolting, heavy industrial cable containment, field terminations, and cable glanding."
    },
    {
      step: "03",
      title: "System Configuration",
      desc: "Controller firmware verification, PLC code transfer, VFD parameterization, drive calibration, and network address mapping."
    },
    {
      step: "04",
      title: "Testing & Validation (FAT / SAT)",
      desc: "Rigorous cold dry runs, point-to-point I/O loop checks, safety interlock tripping, and full hot testing under real operational loads."
    },
    {
      step: "05",
      title: "Performance Optimisation",
      desc: "Fine-tuning cycle rates, process equilibrium, motion synchronization, and thermal baselining to achieve maximum efficiency."
    },
    {
      step: "06",
      title: "Training & Handover",
      desc: "Interactive hands-on training for operators and technicians, delivery of O&M manuals and CAD schematics, and formal sign-off."
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
            <span className="text-[#6DA7BF] font-medium">Installation &amp; Commissioning</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <HardHat className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK Automation Engineers • Global On-Site Commissioning</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Industrial Installation &amp; Commissioning Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                UK-based automation engineers deliver professional installation, system commissioning, and on-site support ensuring your equipment performs from day one, worldwide.
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
                  <div className="text-xl sm:text-2xl font-bold text-white">BS 7671</div>
                  <div className="text-xs text-slate-400 mt-0.5">18th Edition Certified</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">FAT &amp; SAT</div>
                  <div className="text-xs text-slate-400 mt-0.5">Full Validation Sign-Off</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">Global</div>
                  <div className="text-xs text-slate-400 mt-0.5">Rapid Deployment Capability</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/Industrial Installation & Commissioning Services.jpg"
                    alt="Industrial Installation & Commissioning Services - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Site Acceptance Testing</div>
                      <div className="text-[11px] text-[#6DA7BF]">100% I/O Verified • Zero Ramp-Up Disruption</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      ON-SITE
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
                <span>Engineering Integrity from Day One</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Engineered On-Site Precision That Guarantees System Uptime
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we provide expert installation and commissioning services for industrial automation systems, machinery, and control systems.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                A properly installed and commissioned system is critical to performance, reliability, and long-term efficiency. Poor cable routing, untested emergency stop loops, or incorrect drive parameters can lead to immediate downtime and safety hazards. Our engineers ensure your equipment is installed correctly, configured accurately, and fully operational from day one.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based engineering company with global deployment capability, we deliver on-site services across the UK and internationally—minimising disruption and ensuring smooth project execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Full Safety Standards</h3>
                    <p className="text-xs text-slate-400 mt-1">Installed strictly to BS 7671 (18th Edition), EN 60204-1, and CDM 2015.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Turnkey Accountability</h3>
                    <p className="text-xs text-slate-400 mt-1">One engineering partner handling mechanical mounting, electrical hookup, and software SAT.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tech Feature Box */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DA7BF]/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#6DA7BF]" />
                  <span>The Commissioning Benchmark</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Point-to-Point Validation:</strong> Every single digital &amp; analog I/O point logged, signal-tested, and verified before power-up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Safety Trip Certification:</strong> Category 3 &amp; 4 emergency stop relays and light curtains 100% physically triggered and documented.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Drive &amp; Servo Autotuning:</strong> Optimal inertia matching and torque limitation to prevent premature mechanical fatigue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Clean Handover:</strong> As-Built drawings, calibration certs, and backup software files delivered directly to your plant team.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Need site support this week?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Request Engineers</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. WHAT WE DO
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Full Lifecycle Installation &amp; Site Commissioning
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
              We manage the complete installation and commissioning process, ensuring your automation systems are integrated seamlessly into your production environment.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              From equipment setup and electrical connections to system testing and performance validation, we ensure every component works together as intended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mechanical &amp; Containment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Precision positioning of cabinets, heavy containment installation, cable tray routing, and clean field wiring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Electrical Hookup</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Certified 3-phase power distribution, motor cabling, emergency stop loops, and sensor connections to BS 7671.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cold &amp; Hot Commissioning</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Systematic dry runs without material, followed by full live production trials and emergency recovery stress tests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Operator Empowerment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Hands-on training, troubleshooting guides, As-Built schematics, and full technical handover documentation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          4. OUR INSTALLATION & COMMISSIONING SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Installation &amp; Commissioning Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                Comprehensive on-site engineering services ensuring mechanical stability, electrical safety, and optimal automation performance.
              </p>
            </div>
            <Link 
              href="/contact/" 
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Book an Engineering Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
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
                      <span>Inquire About On-Site Support</span>
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
          5. SYSTEMS WE INSTALL & COMMISSION
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Equipment Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Systems We Install &amp; Commission
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We support a comprehensive array of industrial hardware and automation equipment across varied manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemsWeCommission.map((sys, idx) => {
              const IconComp = sys.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] shrink-0 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#6DA7BF] transition-colors">
                      {sys.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {sys.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          6. PROBLEMS WE SOLVE
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Risk Reduction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Problems We Solve in Installation &amp; Commissioning
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Eliminating commissioning bottlenecks, unplanned delays, and safety risks before full production handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsSolved.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.problem}
                  </h3>
                  <div className="text-xs font-semibold text-[#6DA7BF] uppercase tracking-wider mb-2">
                    Our Solution:
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed font-light">
                    {item.solution}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-emerald-400 text-[11px] font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified by MASK Engineers</span>
                </div>
              </div>
            ))}

            {/* Turnkey Assurance Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0C121C] to-[#121A28] border border-[#6DA7BF]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Zero Tolerance for Defect Handover
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  We refuse to sign off on a project until every emergency circuit, thermal scan, and sequence timing exceeds your production acceptance criteria.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/contact/"
                  className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                >
                  <span>Book Site Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          7. OUR 6-STEP COMMISSIONING PROCESS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Methodical Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our 6-Step Commissioning Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              A structured, transparent engineering process that ensures reliable handover and predictable ramp-up times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commissioningProcess.map((s, idx) => (
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
          8. GLOBAL DEPLOYMENT CAPABILITY
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-[#0C121C] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DA7BF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  UK Engineering • Global On-Site Mobilization
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Global Deployment Capability for Critical Facilities
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Our engineering team is equipped to deliver installation and commissioning services across the UK and internationally.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  With experience working in multiple demanding industries and hazardous environments—from offshore shelters to cleanroom pharmaceutical packaging—we provide reliable on-site support wherever your project is located. Our site engineers travel equipped with calibrated testing gear, multi-platform software suites, and international compliance documentation.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Globe2 className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Worldwide Mobilization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
                    <span>CE, UKCA &amp; International Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Clock className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Rapid Emergency Site Response</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-[#6DA7BF]">13+</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Years Field Engineering</div>
                  <p className="text-[11px] text-slate-500 mt-1">Trusted across the UK Ministry of Defence, Alstom, Babcock &amp; global clients.</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">FAT / SAT Protocol Compliance</div>
                  <p className="text-[11px] text-slate-500 mt-1">Structured sign-off criteria guaranteeing full production readiness.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          9. WHY CHOOSE MASK CONTROL SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              The MASK Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We ensure your systems are installed correctly, perform reliably, and are ready for long-term uninterrupted operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <HardHat className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Professional On-Site Installation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Skilled industrial electricians delivering clean cable containment, robust mounting, and certified wiring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Experienced Automation &amp; PLC Engineers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineers with hands-on multi-vendor competence across Siemens, Unitronics, Mitsubishi, and Rockwell platforms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Workflow className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Seamless System Integration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connecting new machines with legacy shop-floor networks and central SCADA dashboards without data loss.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <ClipboardCheck className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Structured Commissioning Process</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Methodical step-by-step cold checks, live trials, and safety trip validation leaving zero room for uncertainty.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Globe2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">UK-Based Team with Global Reach</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Headquartered in Birmingham, UK, with engineering teams dispatched to client facilities internationally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Clock className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Minimal Disruption to Operations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Flexible weekend, night-shift, or phased installation scheduling to prevent factory downtime.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          10. INDUSTRIES SUPPORTED
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Industries Supported
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering on-site installation and commissioning across critical UK and global manufacturing sectors.
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
                  Bespoke machinery and turnkey automation system build.
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
                  Multi-vendor PLC programming, HMI development &amp; logic.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
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
                <p className="text-xs text-slate-400 mt-2">
                  Connecting machinery, SCADA and industrial protocols.
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
                  Cloud telemetry, live alarms &amp; predictive maintenance.
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
          12. CALL TO ACTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#070D16] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Professional Engineering Delivery
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Install &amp; Commission Your Automation Systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Work with experienced UK automation engineers delivering precision installation, rigorous validation, and reliable long-term performance worldwide.
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
              Direct Engineering Consultation • Tailored Commissioning Schedules • Worldwide Deployment Reach
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
