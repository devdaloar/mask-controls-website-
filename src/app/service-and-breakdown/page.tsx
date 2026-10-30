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
  BellRing,
  RotateCcw,
  Search,
  CalendarCheck,
  Award
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Servicing, Breakdown & Technical Support | MASK Control Systems Ltd",
  description: "Fast, reliable automation support from a UK-based engineering team—minimising downtime and keeping your production running worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/service-and-breakdown/"
  },
  openGraph: {
    title: "Industrial Servicing, Breakdown & Technical Support | MASK Control Systems Ltd",
    description: "Emergency breakdown response, PLC diagnostics, electrical fault finding, and preventative maintenance across the UK and worldwide.",
    url: "https://maskcontrols.com/service-and-breakdown/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/service-breakdown.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Servicing, Breakdown & Technical Support - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function ServiceAndBreakdownPage() {
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
            "name": "Service & Breakdown",
            "item": "https://maskcontrols.com/service-and-breakdown/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Industrial Servicing, Breakdown & Technical Support",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Professional 24/7 breakdown response, PLC troubleshooting, electrical fault finding, and scheduled maintenance for manufacturing and automation systems worldwide.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const supportServices = [
    {
      title: "Emergency Breakdown Support",
      desc: "Rapid response to unexpected line failures and machine stoppages, restoring operations as quickly as possible.",
      image: "/images/Emergency Breakdown Support.jpg",
      alt: "Emergency Breakdown Support and Industrial Troubleshooting",
      points: [
        "Rapid on-site engineer dispatch across the UK",
        "Direct phone triage with a senior automation engineer",
        "Safe interim bypass logic where appropriate to resume production",
        "Systematic failure isolation to prevent peripheral component damage"
      ]
    },
    {
      title: "PLC & Control System Diagnostics",
      desc: "In-depth fault finding and software troubleshooting across PLC programs, safety controllers, and automation sequences.",
      image: "/images/PLC & Control System Diagnostics.jpg",
      alt: "PLC and Control System Diagnostics - MASK Control Systems Ltd",
      points: [
        "Online code interrogation for Siemens, Unitronics, Mitsubishi & Rockwell",
        "Fault buffer extraction, cycle state analysis, and timing verification",
        "Safety PLC interlock tripping and light curtain loop verification",
        "Full program backup, firmware recovery, and parameter archiving"
      ]
    },
    {
      title: "Electrical Fault Finding",
      desc: "Accurate diagnosis and certified repair of low-voltage electrical faults, drive alarms, and instrumentation issues.",
      image: "/images/Electrical Fault Finding.jpg",
      alt: "Electrical Fault Finding and Control Cabinet Repair",
      points: [
        "24VDC and 415VAC control circuit tracing to BS 7671 standards",
        "Thermal scanning to detect loose terminations and overloaded contactors",
        "Variable Speed Drive (VFD) error code analysis and parameter tuning",
        "Earth fault, insulation resistance, and loop impedance testing"
      ]
    },
    {
      title: "Remote Technical Support",
      desc: "Instant remote diagnostics via secure VPN or telemetry gateways to identify and resolve issues without travel delays.",
      image: "/images/Remote Technical Support.jpg",
      alt: "Remote Technical Support and Remote PLC Intervention",
      points: [
        "Secure remote engineer dial-in directly into your PLC code",
        "Real-time sensor trace analysis and software logic adjustments",
        "Over 70% of software and sequencing trips cleared remotely within 45 mins",
        "Immediate support for overseas facilities and remote offshore assets"
      ]
    },
    {
      title: "Preventative Maintenance",
      desc: "Structured periodic servicing and health checks to identify wear early, reduce breakdown risk, and maximize asset lifespan.",
      image: "/images/Preventative Maintenance.jpg",
      alt: "Preventative Maintenance and Industrial Servicing",
      points: [
        "Routine electrical terminal torquing and thermal imaging audits",
        "PLC battery replacements, firmware updates, and software backups",
        "Cabinet air filter cleaning, ventilation fan checks, and seal inspection",
        "Comprehensive written health report with actionable recommendations"
      ]
    }
  ];

  const systemsWeSupport = [
    {
      title: "PLC Systems & Controllers",
      desc: "Siemens S7, Unitronics UniStream/Vision, Mitsubishi, Rockwell Allen-Bradley, Omron, Schneider.",
      icon: Cpu
    },
    {
      title: "HMI & SCADA Interfaces",
      desc: "Touchscreen operator terminals, industrial PCs, Ignition SCADA, WinCC Unified, and remote VNC displays.",
      icon: Sliders
    },
    {
      title: "Electrical Control Panels",
      desc: "MCCs, VFD drive panels, distribution cabinets, safety relays, and industrial power supplies.",
      icon: Boxes
    },
    {
      title: "Automated Machinery",
      desc: "Bespoke production machines, lifting systems, assembly equipment, and automated test rigs.",
      icon: Factory
    },
    {
      title: "Integrated Production Lines",
      desc: "Conveyor systems, robotic transfer cells, packaging machinery, and multi-station production lines.",
      icon: Workflow
    },
    {
      title: "Industrial Networks & Buses",
      desc: "Profinet, Modbus RTU/TCP, EtherNet/IP, Profibus, AS-Interface, and secure telemetry gateways.",
      icon: Radio
    }
  ];

  const problemsSolved = [
    {
      problem: "Unplanned Production Downtime",
      detail: "Every minute a critical machine stands idle costs thousands in lost output, delayed deliveries, and idle operators.",
      solution: "Rapid Emergency Response",
      solutionDetail: "We prioritize urgent line-down callouts with fast telephone triage and rapid on-site dispatch to get you running fast."
    },
    {
      problem: "Recurring System Failures",
      detail: "Intermittent trips that disappear when reset only to recur hours later, frustrating operators and baffling internal teams.",
      solution: "Root-Cause Elimination",
      solutionDetail: "Our engineers analyze underlying electrical noise, sensor bounce, or code race conditions to eliminate the root cause permanently."
    },
    {
      problem: "Internal Technical Skill Gaps",
      detail: "Modern PLC architectures and complex bus networks can overwhelm general site maintenance personnel.",
      solution: "Expert Specialist Backup",
      solutionDetail: "We act as your dedicated automation engineering department, providing expert multi-vendor PLC and electrical competence."
    },
    {
      problem: "Aging Legacy Machinery",
      detail: "20-year-old controllers with no electrical schematics, discontinued components, or missing programming source code.",
      solution: "Legacy System Troubleshooting",
      solutionDetail: "We excel at reverse-engineering un-documented panels, tracing wiring point-to-point, and retrofitting modern drop-in replacements."
    },
    {
      problem: "Distant or Unmanned Facilities",
      detail: "Pumping stations, remote test rigs, or international plants are costly and time-consuming to service in person.",
      solution: "Global Remote Dial-In Support",
      solutionDetail: "Secure cloud telemetry and remote PLC access allow our Birmingham team to diagnose and repair issues worldwide without delay."
    }
  ];

  const ourApproach = [
    {
      title: "Fast Response",
      desc: "We treat unexpected production stoppages as high-priority emergencies, offering immediate phone triage and fast on-site mobilization.",
      icon: Clock
    },
    {
      title: "Accurate Diagnosis",
      desc: "We focus on pinpointing the true root cause with calibrated diagnostic tools—never applying temporary band-aid fixes.",
      icon: Search
    },
    {
      title: "Practical Solutions",
      desc: "Our engineers deliver robust, industrial-grade engineering solutions built to thrive in harsh, demanding factory environments.",
      icon: Wrench
    },
    {
      title: "Ongoing Support",
      desc: "We forge long-term technical partnerships, maintaining software archives and As-Built drawings to protect your future.",
      icon: ShieldCheck
    }
  ];

  const serviceTiers = [
    {
      tier: "On-Demand",
      title: "One-Off Breakdown Support",
      desc: "Immediate on-call assistance when unexpected machinery failures occur.",
      features: [
        "Rapid phone triage with a senior engineer",
        "Emergency on-site engineer dispatch across the UK",
        "Direct PLC code interrogation & electrical tracing",
        "Detailed post-incident breakdown report",
        "No long-term commitment required"
      ],
      highlight: false,
      cta: "Request Emergency Callout"
    },
    {
      tier: "Proactive",
      title: "Scheduled Maintenance",
      desc: "Planned periodic servicing to maintain optimal system performance and prevent failures.",
      features: [
        "Comprehensive electrical cabinet thermal imaging",
        "Terminal re-torquing and air filtration cleaning",
        "PLC battery replacements and program archiving",
        "Sensor calibration and safety trip testing",
        "Formal written preventative health audit"
      ],
      highlight: true,
      badge: "MOST POPULAR",
      cta: "Schedule Servicing"
    },
    {
      tier: "Turnkey SLA",
      title: "Ongoing Support Contracts",
      desc: "Long-term engineering agreements providing guaranteed response times and maximum peace of mind.",
      features: [
        "Guaranteed 2-hour or 4-hour on-site response SLAs",
        "24/7 direct telephone engineering hotline",
        "Unlimited remote telemetry and dial-in diagnostic hours",
        "Quarterly preventative maintenance visits included",
        "Discounted hourly rates on scheduled project upgrades"
      ],
      highlight: false,
      cta: "Inquire About SLA Packages"
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
            <span className="text-[#6DA7BF] font-medium">Service &amp; Breakdown</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>UK Automation Breakdown Response • Rapid Global Triage</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Industrial Servicing, Breakdown &amp; Technical Support
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Fast, reliable automation support from a UK-based engineering team—minimising downtime and keeping your production running worldwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-rose-600 text-white font-bold text-sm tracking-wide hover:bg-rose-500 transition-all duration-200 shadow-[0_10px_30px_rgba(225,29,72,0.3)] flex items-center gap-2 group"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Request Emergency Support</span>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-slate-400 mt-0.5">Emergency Triage Line</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">&gt;70%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Resolved Remotely</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">UK &amp; Global</div>
                  <div className="text-xs text-slate-400 mt-0.5">On-Site Dispatch Reach</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/service-breakdown.jpg"
                    alt="Industrial Servicing, Breakdown & Technical Support - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Engineering Support Team</div>
                      <div className="text-[11px] text-[#6DA7BF]">Rapid On-Site Mobilization • Root-Cause Resolution</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ACTIVE
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
                <span>Immediate Breakdown Assistance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                When Production Stops, Every Second Counts
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we provide professional servicing, breakdown response, and technical support for industrial automation systems, machinery, and control systems.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                When your production is interrupted, every minute counts. Our team delivers fast diagnostics, effective repairs, and ongoing support to minimise downtime and restore operations quickly.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based automation engineering company with global reach, we support clients both on-site and remotely—ensuring reliable performance wherever your equipment is located.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Rapid Fault Isolation</h3>
                    <p className="text-xs text-slate-400 mt-1">Multi-vendor PLC and electrical diagnostic capabilities to isolate faults within minutes.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Root-Cause Elimination</h3>
                    <p className="text-xs text-slate-400 mt-1">We don&apos;t just reset error codes; we fix the mechanical, electrical, or software root cause.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tech Feature Box */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DA7BF]/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#6DA7BF]" />
                  <span>What We Do</span>
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  We offer complete support services for industrial automation systems, covering fault diagnosis, repair, maintenance, and ongoing technical assistance.
                </p>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Our engineers work across PLC systems, electrical controls, bespoke machinery, and integrated automation environments providing practical, reliable solutions when you need them most.
                </p>

                <div className="space-y-3 text-xs text-slate-300 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Emergency On-Site Fault Finding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Secure Remote PLC Dial-In Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Preventative Servicing &amp; Thermal Scanning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Scheduled Annual Maintenance Agreements</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Production line halted?</div>
                  <a
                    href="tel:+447412999343"
                    className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1"
                  >
                    <span>Call Hotline Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR SUPPORT SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Engineering Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Support &amp; Breakdown Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                Specialist diagnostic and maintenance solutions designed to resolve critical faults, prevent repeat failures, and protect system reliability.
              </p>
            </div>
            <Link 
              href="/contact/" 
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Book an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((item, idx) => (
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
          4. SYSTEMS WE SUPPORT
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Equipment Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Systems We Support
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We provide servicing, diagnostic support, and emergency troubleshooting across a wide range of industrial equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemsWeSupport.map((sys, idx) => {
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
          5. PROBLEMS WE SOLVE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Reliability Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Problems We Solve
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              How our specialist breakdown and technical servicing directly overcomes common production nightmares.
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
          6. OUR APPROACH (4 Pillars)
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Technical Approach
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Structured engineering discipline designed to restore uptime quickly and protect against future failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourApproach.map((app, idx) => {
              const IconComp = app.icon;
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
                      {app.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {app.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-[#6DA7BF] flex items-center gap-1">
                    <span>PILLAR 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          7. SERVICE OPTIONS (3-Tier Packages)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Flexible Support Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Service &amp; Maintenance Options
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Tailored service engagement models—from one-off emergency interventions to comprehensive multi-site SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-2xl bg-[#0C121C] border relative flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight 
                    ? "border-[#6DA7BF] shadow-[0_10px_40px_rgba(109,167,191,0.15)] ring-1 ring-[#6DA7BF]/40" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#6DA7BF] text-[#070D16] text-[10px] font-extrabold uppercase tracking-wider">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="text-xs font-mono font-bold text-[#6DA7BF] uppercase tracking-wider mb-2">
                    {tier.tier}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    {tier.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#6DA7BF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact/"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? "bg-[#6DA7BF] text-[#070D16] hover:bg-[#5B95AD]"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          8. WHY CHOOSE MASK CONTROL SYSTEMS
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
              We help manufacturers maintain uptime, reduce risk, and keep critical production running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Clock className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Fast Breakdown Response</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritized response for factory emergencies, minimizing costly downtime and production losses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <HardHat className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Experienced Automation Engineers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Over 13 years field experience tackling complex mechanical, electrical, and pneumatic machinery breakdowns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">PLC &amp; Electrical Expertise</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialist programmers across Siemens, Unitronics, Mitsubishi, and Rockwell controllers alongside 18th Edition electricians.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Radio className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">On-Site &amp; Remote Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dual-mode support: instant remote telemetry dial-in backed by rapid physical dispatch across the UK.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Globe2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">UK-Based Team with Global Coverage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Centrally located in Birmingham with engineers supporting clients in Europe, the Middle East, and worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Award className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Long-Term Maintenance &amp; Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We build long-term relationships, keeping software backups, electrical CAD updates, and spare parts ready.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          9. INDUSTRIES SUPPORTED
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors Supported
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Industries We Keep Running
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Providing critical servicing and breakdown protection across UK manufacturing and international industry.
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
          10. RELATED SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Full-Service Engineering
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
              href="/systems-integration/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Workflow className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Systems Integration
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Seamlessly connecting PLCs, machinery &amp; SCADA networks.
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
                  Site hookup, network setup &amp; full SAT validation.
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
          11. CALL TO ACTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#070D16] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Immediate Technical Assistance
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need Immediate Support for Your Automation System?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Get fast, reliable assistance from a UK-based engineering team trusted by manufacturers worldwide. Whether facing an unexpected line stoppage or planning routine servicing, we are ready to assist.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact/"
                className="px-8 py-4 rounded-xl bg-rose-600 text-white font-bold text-sm tracking-wide hover:bg-rose-500 transition-all duration-200 shadow-xl flex items-center gap-2 group"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Request Emergency Support</span>
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
              Direct Senior Engineering Contact • Rapid UK Site Dispatch • 24/7 International Remote Triage
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
