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
  HelpCircle,
  Mail,
  Scale,
  Sparkle,
  Droplets,
  Package,
  CheckSquare,
  Shield,
  FileText,
  Lock,
  Compass,
  Crosshair,
  Award,
  Binary,
  Car,
  TrendingUp,
  BarChart3,
  Cog,
  ScanEye
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Automotive Automation for Tier 2/3 Suppliers | MASK Control Systems Ltd",
  description: "UK-engineered automotive automation solutions for Tier 2 and Tier 3 suppliers. IATF 16949 compliant PLC programming, PPAP readiness, Cpk process stability, and assembly integration worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/automotive-automation-for-tier-2-3-suppliers/"
  },
  openGraph: {
    title: "Automotive Automation for Tier 2/3 Suppliers | MASK Control Systems Ltd",
    description: "UK-engineered automotive automation solutions for Tier 2 and Tier 3 suppliers. IATF 16949 compliant PLC programming, PPAP readiness, Cpk process stability, and assembly integration worldwide.",
    url: "https://maskcontrols.com/industries/automotive-automation-for-tier-2-3-suppliers/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Automotive Automation (Tier 2_3).jpg",
        width: 1200,
        height: 630,
        alt: "Automotive Automation for Tier 2/3 Suppliers - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function AutomotiveAutomationPage() {
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
            "name": "Industries",
            "item": "https://maskcontrols.com/industries/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Automotive Automation (Tier 2/3)",
            "item": "https://maskcontrols.com/industries/automotive-automation-for-tier-2-3-suppliers/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Automotive Automation & Assembly Line Control for Tier 2/3 Suppliers",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke automotive automation engineering, IATF 16949 compliant PLC programming, PPAP validation documentation, Cpk process control, and quality verification systems for Tier 2 & Tier 3 automotive component suppliers.",
        "areaServed": ["United Kingdom", "Europe", "North America", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does MASK design automation systems with IATF 16949 and PPAP in mind?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build data traceability and documentation into our systems from the start, so the information your PPAP submission needs is generated automatically rather than reconstructed after the fact."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help improve cycle time without sacrificing part quality?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We design control systems that hold repeatability at higher cycle times, integrating in-process quality checks such as torque verification and vision inspection rather than treating speed and quality as a trade-off."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support Tier 2 and Tier 3 suppliers, or only Tier 1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work specifically with Tier 2 and Tier 3 automotive suppliers, who often have thinner in-house engineering resources than Tier 1 and need a partner who understands both the automation and the compliance side of their operation."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate torque verification, leak testing, or vision inspection into an existing line?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly integrate these processes into existing lines, coordinating them with your control system so quality data flows directly into your reporting rather than sitting in a separate system."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver automotive automation projects outside the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver projects across three continents, applying the same engineering standards and documentation discipline wherever your facility is based."
            }
          }
        ]
      }
    ]
  };

  const warningSigns = [
    {
      title: "Inconsistent Cpk Process Stability",
      desc: "Manual or semi-manual assembly processes are struggling to hold strict customer Cpk capability targets consistently across high-volume production runs."
    },
    {
      title: "PPAP Documentation Delays",
      desc: "PPAP submissions are getting held up or rejected due to missing documentation trails, unverified cycle logs, or lack of automated data capture."
    },
    {
      title: "Recurring Customer Containment Flags",
      desc: "Containment events or customer scorecard penalty flags keep recurring, tied directly to human assembly variability rather than raw material defects."
    },
    {
      title: "Absence of Shop-Floor SPC Telemetry",
      desc: "Your production floor lacks real-time Statistical Process Control (SPC) connectivity, leaving managers reliant on delayed end-of-shift scrap audits."
    },
    {
      title: "In-House Engineering Capacity Strain",
      desc: "Your internal engineering staff is stretched thin across multiple OEM programs at once, lacking the capacity to optimize active lines."
    },
    {
      title: "Imminent New Program Launch Risks",
      desc: "A major new automotive program launch is approaching, and your facility lacks the dedicated controls engineering capacity to build and commission the cells."
    }
  ];

  const automotiveServices = [
    {
      id: "plc-programming",
      title: "PLC Programming & Control Systems",
      tagline: "High-Frequency Repeatability & Deterministic Cycle Timing",
      description: "We engineer robust control logic tailored specifically for complex assembly, testing, and inspection stations. By leveraging platforms like Siemens, Mitsubishi, and Unitronics, we create automation solutions that prioritize the high-frequency repeatability required by automotive OEMs. Our programming approach ensures consistent cycle times and rigorous process stability, helping Tier 2/3 suppliers meet demanding production targets without the variability that often plagues manual or legacy systems.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      points: [
        "Siemens S7-1500, Mitsubishi iQ-R, and Unitronics UniStream architectures",
        "Deterministic scan cycles optimizing high-throughput indexing and assembly",
        "Interlocking logic preventing cycle progression on non-conforming part detection",
        "Structured code adhering to OEM automotive software standards and templates"
      ]
    },
    {
      id: "control-panels",
      title: "Electrical Control Panel Design & Build",
      tagline: "Heavy-Duty Enclosures Built for Multi-Shift Production Cycles",
      description: "Our control panel design and manufacturing process is engineered for the high-duty cycles of automotive supply chain environments. We build panels that withstand the demands of continuous, multi-shift production, ensuring electrical integrity and component longevity. By focusing on high-quality materials and thoughtful layout, we deliver panels that simplify maintenance and support, providing a reliable backbone for your automation lines while meeting necessary industrial standards.",
      image: "/images/Custom Electrical Control Panel Design & Manufacturing.jpg",
      points: [
        "Heavy-duty enclosures engineered for 24/7 continuous multi-shift production",
        "EMC shielded layout, vibration-damped mountings, and forced thermal management",
        "Complete EPLAN electrical schematics, standardized wire ferruling, and component tags",
        "100% point-to-point Factory Acceptance Testing (FAT) with signed test certificates"
      ]
    },
    {
      id: "systems-integration",
      title: "Systems Integration",
      tagline: "In-Process Torque Verification, Leak Testing & Vision Inspection",
      description: "We seamlessly integrate critical quality verification processes such as torque monitoring, leak testing, and automated vision inspection directly into your production line. By coordinating these functions within your control architecture, we shift quality control from a reactive, end-of-line task to an active, in-process activity. This integration minimizes the risk of non-conforming parts reaching the next tier and provides the precise, real-time data flow needed for modern traceability requirements.",
      image: "/images/Automation System Integration.jpg",
      points: [
        "Closed-loop transducerized DC torque tool integration with angle and torque logging",
        "High-accuracy differential pressure leak decay testing cells",
        "Cognex & Keyence automated machine vision for presence, orientation, and defect checks",
        "Serialization via 2D DataMatrix barcode laser marking and direct part tracking"
      ]
    },
    {
      id: "hmi-scada",
      title: "HMI & SCADA Development",
      tagline: "Real-Time Statistical Process Control (SPC) & Cpk Visibility",
      description: "We design intuitive operator interfaces that act as the command center for your production assets, featuring integrated Statistical Process Control (SPC) visibility. Instead of relying on delayed end-of-shift reports, your team gains real-time insight into process capability (Cpk) directly on the shop floor. This immediate data access empowers operators to spot deviations and adjust processes proactively, ensuring you maintain control over product quality and program launch requirements.",
      image: "/images/HMI INTEGRATION.jpg",
      points: [
        "Live shop-floor Cpk / Ppk trend graphs and statistical distribution histograms",
        "Visual poka-yoke assembly guidance reducing operator training curve",
        "Automated scrap reason logging, downtime Pareto tracking, and OEE calculation",
        "Direct database connectivity sending part birth certificates to MES / ERP"
      ]
    },
    {
      id: "remote-monitoring",
      title: "Remote Monitoring & Diagnostics",
      tagline: "Continuous Asset Health Oversight & Cycle Time Protection",
      description: "Our remote monitoring solutions offer continuous, real-time diagnostics for your assembly, test, and auxiliary machinery. By tracking key performance indicators and equipment health, we help you protect uptime and honor customer-committed cycle times. This proactive approach identifies developing faults long before they result in downtime, ensuring your facility remains a dependable partner in the automotive supply chain and avoids critical supply interruptions.",
      image: "/images/Industrial Remote Monitoring & Smart Automation Solutions.jpg",
      points: [
        "Encrypted cellular VPN telemetry enabling rapid UK engineering troubleshooting",
        "Early warning detection for motor current spikes, pneumatic pressure drops, and cycle drift",
        "Automated SMS/email alerts to maintenance supervisors before line bottlenecks form",
        "Continuous OEE benchmark reporting supporting Tier 1 continuous improvement audits"
      ]
    },
    {
      id: "installation-commissioning",
      title: "Installation & Commissioning",
      tagline: "PPAP-Ready Handover with Proven Metrics Before Production Launch",
      description: "We deliver systems that are fully PPAP-ready from day one, ensuring your documentation and performance validation are complete before handover. Our commissioning process includes thorough testing and data verification, so your submission process is never delayed by missing documentation or unproven process metrics. We manage the entire deployment, from installation to operator training, ensuring a smooth transition that allows you to focus on production volume and quality.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      points: [
        "Rigorous dry cycling, short-run statistical capability studies, and Gage R&R support",
        "Seamless on-site integration with existing stamping, molding, or assembly stations",
        "Comprehensive operator and maintenance training with complete handover documentation",
        "Standby engineering support during start-of-production (SOP) launch ramps"
      ]
    }
  ];

  const iatfCoreTools = [
    {
      title: "APQP (Advanced Product Quality Planning)",
      desc: "Automation architecture structured from the initial concept to align with your program milestones and gate reviews, eliminating launch delays."
    },
    {
      title: "PPAP (Production Part Approval Process)",
      desc: "Automated generation of process capability data, machine run charts, and calibration records ready for immediate customer submission."
    },
    {
      title: "FMEA (Failure Mode and Effects Analysis)",
      desc: "Hardware interlocks and software poka-yoke routines designed specifically to address and prevent identified process failure modes."
    },
    {
      title: "MSA (Measurement Systems Analysis)",
      desc: "Integrated inspection stations with high-resolution digital sensors designed to pass rigorous Gage R&R repeatability and reproducibility audits."
    },
    {
      title: "SPC (Statistical Process Control)",
      desc: "Live Cpk and Ppk calculations embedded directly in the PLC/HMI, alerting operators to process drift before out-of-spec parts can be produced."
    },
    {
      title: "Traceability & Part Serialization",
      desc: "Every assembly timestamped and linked to its exact torque curve, leak test value, and vision inspection image for total audit defense."
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation & Line Audit",
      desc: "We assess your current process, customer cycle time targets, Cpk expectations, and program launch milestones before designing."
    },
    {
      step: "02",
      title: "System Design & FMEA",
      desc: "Our engineers develop CAD electrical schematics, mechanical integration models, and control software built around error-proofing."
    },
    {
      step: "03",
      title: "Build & In-House FAT",
      desc: "We manufacture panels and build control logic in-house, completing full Factory Acceptance Testing and generating initial capability data."
    },
    {
      step: "04",
      title: "Commissioning & PPAP Study",
      desc: "We install on-site, execute short-run capability trials, verify Gage R&R, and train your staff, maintaining complete records throughout."
    },
    {
      step: "05",
      title: "Lifecycle Support & Telemetry",
      desc: "We provide ongoing preventative servicing, remote monitoring, and continuous improvement support to protect Cpk over program life."
    }
  ];

  const automotivePartners = [
    { name: "Dunlop Aircraft & Automotive Tyres", src: "/images/Dunlop-scaled.png" },
    { name: "Alstom Transport Engineering", src: "/images/Alstom-scaled.png" },
    { name: "University of Warwick WMG Automotive", src: "/images/University-of-Warwick-scaled.png" },
    { name: "ISO 9001 Quality Certified", src: "/images/iso-9001.jpg" },
    { name: "ISO 17020 Inspection Accredited", src: "/images/iso-17020.jpg" },
    { name: "ISO 17025 Testing & Calibration", src: "/images/iso-17025.jpg" }
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
            <Link href="/industries/" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#6DA7BF] font-medium">Automotive Automation (Tier 2/3)</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Car className="w-4 h-4 text-[#6DA7BF]" />
                <span>Tier 2 &amp; 3 Automotive Engineering • IATF 16949 &amp; PPAP-Ready Systems</span>
              </div>

              {/* Authoritative, Specific H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Automotive Automation for <br />
                <span className="text-[#6DA7BF]">Tier 2 &amp; Tier 3 Suppliers</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for Tier 2 and Tier 3 automotive suppliers across the UK and worldwide. Since 2013, we have engineered PLC control systems, control panels, and fully integrated automation solutions built around the repeatability, cycle time, and quality standards that automotive supply chain manufacturing demands.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Our team understands the compliance pressure that comes with supplying into the automotive industry, and we build every project to support it rather than complicate it.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request an Automotive Line Audit</span>
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
                  <div className="text-xl font-bold text-white">IATF 16949</div>
                  <div className="text-xs text-slate-400">Core Tools Aligned</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">Cpk &ge; 1.67</div>
                  <div className="text-xs text-slate-400">Process Capability</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">PPAP Ready</div>
                  <div className="text-xs text-slate-400">Automated Records</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">3 Continents</div>
                  <div className="text-xs text-slate-400">Global Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with Automotive Spec Overlay */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Automotive Automation (Tier 2_3).jpg"
                    alt="Automotive Automation for Tier 2/3 Suppliers - MASK Control Systems Ltd"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* Automotive Quality Spec Card */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">TARGET APPLIED:</span>
                    <span className="text-[#6DA7BF]">TIER 2 &amp; TIER 3 SUPPLIERS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CORE QUALITY TOOLS:</span>
                    <span className="text-emerald-400">APQP • PPAP • FMEA • MSA • SPC</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">QUALITY VERIFICATION:</span>
                    <span className="text-slate-200">TORQUE • LEAK • VISION POKA-YOKE</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK MIDLANDS &amp; DEVON ENGINEERING</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. AUTOMOTIVE & RESEARCH TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted Across Automotive &amp; Advanced Manufacturing Supply Chains:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {automotivePartners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl px-4 py-2.5 h-12 sm:h-14 flex items-center justify-center shadow-md shadow-black/30 border border-white hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src={partner.src}
                    alt={`${partner.name} partner with MASK Control Systems`}
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
          3. WHY TIER 2/3 SUPPLIERS NEED SPECIALIZED AUTOMATION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Repeatability &amp; Cycle Time Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Tier 2/3 Automotive Suppliers Need Specialized Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Automotive supply chain manufacturing runs on repeatability. Tier 1 and OEM customers set cycle time and quality targets that leave little room for variation, and a process that works most of the time is not good enough when the requirement is consistency on every single part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Thinner In-House Resources</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tier 2 and Tier 3 suppliers operate with leaner internal engineering teams than the Tier 1s setting the targets. Automation must bridge this gap and stabilize lines without requiring armies of programmers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">IATF 16949 Flow-Down Pressure</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Core tools (APQP, PPAP, FMEA, MSA, SPC) flow directly down the sub-tier supply base. A supplier assuming these stay at Tier 1 faces severe audit exposure and containment risks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cpk &amp; Launch Containment Risks</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A single failed PPAP submission or a process capability index (Cpk) that slips below target can delay a program launch, trigger a costly containment event, and damage customer trust.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Binary className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Every Process Needs Data</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Visual inspection alone no longer satisfies OEMs. Every torque rundown, press-fit force, and leak rate needs verifiable data logged behind it for complete part traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. THE UK AUTOMOTIVE SUPPLY CHAIN LANDSCAPE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/The UK Automotive Supply Chain Landscape.jpg"
                    alt="The UK Automotive Supply Chain Landscape - MASK Control Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 border-t border-white/10 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>UK AUTOMATION REVENUE SHARE:</span>
                    <span className="text-[#6DA7BF]">&gt; 25% AUTOMOTIVE SECTOR</span>
                  </div>
                  <p>
                    Supporting precision component manufacturers, press shops, injection molders, and subassembly suppliers across the Midlands and UK industrial corridors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Factory className="w-3.5 h-3.5" />
                <span>UK Advanced Manufacturing Hub</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Automotive Supply <br />
                <span className="text-[#6DA7BF]">Chain Landscape</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Automotive holds the largest revenue share of any sector in UK industrial automation, accounting for over a quarter of the total market. But most of the opportunity within that share does not sit with the OEMs themselves.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                It sits with the Tier 2 and Tier 3 suppliers who manufacture the components and subassemblies that OEMs and Tier 1 integrators depend on, and whose in-house engineering capability is often stretched across multiple customer programs at once.
              </p>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Automotive Automation &amp; IATF Skills Gap</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automotive supply chain manufacturers need engineers who understand automation and the documentation discipline that IATF 16949 demands, and that combination of skills is not easy to find or retain in-house.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  More Tier 2 and Tier 3 suppliers are turning to experienced outsourced automation partners like MASK Control Systems who already understand both sides of that equation, rather than trying to build the capability internally while also running day-to-day production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. SIGNS YOUR LINE NEEDS AUTOMOTIVE-GRADE AUTOMATION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Operational Risk &amp; Capability Review</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Signs Your Line Needs Automotive-Grade Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Several recurring signals tell us a Tier 2 or Tier 3 automotive supplier is ready for an automation review before risks escalate into customer containment or launch delays:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{sign.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{sign.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] font-mono text-slate-400">Capability Priority</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Struggling with Cpk capability or upcoming PPAP milestones?</h4>
              <p className="text-xs text-slate-400 mt-1">
                An automation review is worth prioritizing before customer scorecards or program launches are affected.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-colors"
            >
              Book an Automotive Line Audit
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          6. CORE AUTOMOTIVE AUTOMATION SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Full-Spectrum Supply Chain Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Automotive Automation Services
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              From high-speed assembly PLC logic to heavy-duty multi-shift control panels, integrated vision inspection, and live SPC dashboards, we engineer systems that hold process capability on every single cycle.
            </p>
          </div>

          <div className="space-y-16">
            {automotiveServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-[28px] bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all shadow-xl"
                >
                  {/* Visual Media Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] w-full bg-slate-900 group">
                      <Image
                        src={service.image}
                        alt={`${service.title} - MASK Control Systems Ltd`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-[#070D16]/90 border border-white/10 text-[11px] font-mono text-[#6DA7BF]">
                        CAPABILITY 0{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#6DA7BF] uppercase tracking-wider mb-1">
                        {service.tagline}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {service.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#6DA7BF] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        href="/contact/"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6DA7BF] hover:text-[#8ec5dc] transition-colors"
                      >
                        <span>Consult on this capability</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          7. SUPPORTING IATF 16949 COMPLIANCE & PPAP READINESS
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Automotive Quality Core Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Supporting IATF 16949 Compliance and PPAP Readiness
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              IATF 16949&apos;s core tools exist to build process discipline, not to generate paperwork for its own sake. We design our automation systems to feed these requirements automatically rather than forcing your team to reconstruct data manually after the fact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iatfCoreTools.map((tool, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/15 border border-[#6DA7BF]/30 flex items-center justify-center text-[#6DA7BF] text-xs font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{tool.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] font-mono text-[#6DA7BF]">IATF Core Tool Discipline</span>
                  <Check className="w-4 h-4 text-[#6DA7BF]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-[#6DA7BF] shrink-0 mt-1" />
            <div className="text-xs text-slate-300 leading-relaxed space-y-1">
              <span className="font-semibold text-white">The Difference Between Smooth Launches and Blocked PPAPs:</span>
              <p>
                Every system we build includes the data traceability needed to connect a finished part back to the process, the equipment, and the inspection result that produced it. This is the difference between a PPAP submission that moves smoothly through customer review and one that gets held up on a documentation gap that had nothing to do with the actual quality of the part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. SUPPORTING AUTOMOTIVE SUPPLIERS WORLDWIDE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>UK Headquarters • Worldwide Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Supporting Automotive Suppliers Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We are headquartered in Cullompton, Devon, in the United Kingdom, and we apply the same engineering discipline and IATF-aware design process to automotive projects across three continents.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether your facility supplies a UK-based Tier 1 or an international OEM program, you receive the same rigorous process, the same certified quality management systems, and the same commitment to long-term lifecycle support.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UK AUTOMOTIVE HEARTLAND</div>
              <div className="text-lg font-bold text-white">Devon HQ &amp; Midlands Hub</div>
              <p className="text-xs text-slate-400 mt-2">
                Rapid mobilization to Midlands assembly plants, North East battery corridors, and South West component facilities for scheduled line installs and shift support.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">EUROPE &amp; NORTH AMERICA</div>
              <div className="text-lg font-bold text-white">Global Program Deployments</div>
              <p className="text-xs text-slate-400 mt-2">
                Complete automated assembly and test cells built and tested to PPAP standards in-house, then shipped for on-site commissioning across international supplier networks.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">CONTINUOUS CPK PROTECTION</div>
              <div className="text-lg font-bold text-white">Remote Telemetry Oversight</div>
              <p className="text-xs text-slate-400 mt-2">
                Real-time remote diagnostics tracking torque curves, cycle times, and reject rates to catch equipment wear long before it causes an at-line shutdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          9. HOW WE WORK (5-STAGE PROCESS)
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Structured Automotive Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We follow a structured, documentation-aware process on every automotive automation project:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {howWeWorkSteps.map((s, idx) => (
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
          10. WHY MANUFACTURERS CHOOSE MASK
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Automotive Engineering Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Manufacturers Choose MASK for <br />
                <span className="text-[#6DA7BF]">Automotive Automation</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we bring that same quality management discipline to every automotive project we take on. Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your line rather than defaulting to a single vendor&apos;s equipment.
                </p>
                <p>
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing support, so you work with one accountable engineering partner rather than coordinating multiple contractors.
                </p>
                <p>
                  As the shortage of engineers who understand both automation and IATF-driven documentation continues to affect the sector, we act as an experienced outsourced team who already understands the pressure Tier 2 and Tier 3 suppliers operate under.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Discuss Your Program Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Tri-Certified Quality Framework</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    ISO 9001, ISO 17020, and ISO 17025 certified quality management protocols applied to all panel manufacturing, software verification, and sensor calibration.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Vendor-Agnostic Objectivity</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Specialist expertise across Siemens SIMATIC, Mitsubishi MELSEC, Unitronics, Rockwell, and Omron controllers to match your OEM plant specifications.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Single Accountable Partner</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    End-to-end delivery from initial concept and electrical schematics to on-site PPAP runs and 24/7 technical breakdown support under one accountable roof.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Bridging the Automotive Skills Gap</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Immediate access to senior controls engineers who understand both PLC logic and IATF 16949 core tool documentation discipline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          11. FREQUENTLY ASKED QUESTIONS (Centered)
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Automotive Engineering Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Key questions Tier 2 and Tier 3 automotive component manufacturers ask when evaluating MASK Control Systems:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Does MASK design automation systems with IATF 16949 and PPAP in mind?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We build data traceability and documentation into our systems from the start, so the information your PPAP submission needs is generated automatically rather than reconstructed after the fact.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you help improve cycle time without sacrificing part quality?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We design control systems that hold repeatability at higher cycle times, integrating in-process quality checks such as torque verification and vision inspection rather than treating speed and quality as a trade-off.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you support Tier 2 and Tier 3 suppliers, or only Tier 1?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We work specifically with Tier 2 and Tier 3 automotive suppliers, who often have thinner in-house engineering resources than Tier 1 and need a partner who understands both the automation and the compliance side of their operation.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you integrate torque verification, leak testing, or vision inspection into an existing line?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We regularly integrate these processes into existing lines, coordinating them with your control system so quality data flows directly into your reporting rather than sitting in a separate system.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you deliver automotive automation projects outside the UK?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We deliver projects across three continents, applying the same engineering standards and documentation discipline wherever your facility is based.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================
          12. EXPLORE OTHER INDUSTRY SECTORS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Factory className="w-3.5 h-3.5" />
              <span>Industry Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Explore Other Industries We Serve
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-light">
              In addition to automotive component manufacturing, MASK engineers bespoke control and automation systems across diverse industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList
              .filter(item => item.href !== "/industries/automotive-automation-for-tier-2-3-suppliers/")
              .map((ind, idx) => (
                <Link
                  key={idx}
                  href={ind.href}
                  className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/60 transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1">SECTOR 0{idx + 1}</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                      {ind.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#6DA7BF] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* =========================================
          13. FINAL CTA CONVERSION SECTION
      ========================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0A101A] to-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] bg-[#0C121C] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DA7BF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                  <Car className="w-3.5 h-3.5" />
                  <span>Confidential Automotive Line Review</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Get In Touch With Our Automotive Controls Engineers
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  If you are planning an automotive automation project, or you need to close a compliance or capacity gap ahead of a program launch, our team is ready to help. Explore our other industry sectors or contact us directly to discuss your requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="mailto:sales@maskcontrols.com"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#070D16] border border-white/10 hover:border-[#6DA7BF]/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Engineering Email</div>
                      <div className="text-sm font-semibold text-white">sales@maskcontrols.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+447412999343"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#070D16] border border-white/10 hover:border-[#6DA7BF]/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">UK Direct Telephone</div>
                      <div className="text-sm font-semibold text-white">+44 7412 999343</div>
                    </div>
                  </a>
                </div>

                <div className="text-xs text-slate-400 flex flex-wrap gap-4 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Head Office: Cullompton, Devon, UK
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Midlands Hub: Birmingham, UK (Automotive Heartland)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Global Program Deployment Capability
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/contact/"
                  className="w-full text-center px-6 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm hover:bg-[#5b95ad] transition-all shadow-xl shadow-[#6DA7BF]/20"
                >
                  Request a Program Review
                </Link>
                <Link
                  href="/industries/"
                  className="w-full text-center px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
                >
                  View All Industry Sectors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
