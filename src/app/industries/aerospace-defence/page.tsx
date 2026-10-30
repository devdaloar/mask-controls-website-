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
  Plane,
  FileText,
  Lock,
  Compass,
  Crosshair,
  Award,
  Binary
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Aerospace & Defence Automation Solutions | MASK Control Systems Ltd",
  description: "UK-engineered automation solutions for aerospace and defence manufacturers. AS9100 & DEFCON aligned PLC programming, control panels, functional safety, and systems integration worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/aerospace-defence/"
  },
  openGraph: {
    title: "Aerospace & Defence Automation Solutions | MASK Control Systems Ltd",
    description: "UK-engineered automation solutions for aerospace and defence manufacturers. AS9100 & DEFCON aligned PLC programming, control panels, functional safety, and systems integration worldwide.",
    url: "https://maskcontrols.com/industries/aerospace-defence/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Aerospace & Defence Automation.jpg",
        width: 1200,
        height: 630,
        alt: "Aerospace & Defence Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function AerospaceDefenceAutomationPage() {
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
            "name": "Aerospace & Defence Automation",
            "item": "https://maskcontrols.com/industries/aerospace-defence/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Aerospace & Defence Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke automation engineering, AS9100 and DEFCON aligned control panels, safety-critical PLC programming, and ground support equipment integration for aerospace and defence manufacturers.",
        "areaServed": ["United Kingdom", "Europe", "North America", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What certifications does MASK hold for aerospace and defence work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we design our systems to align with AS9100 and DEFCON standards throughout every project."
            }
          },
          {
            "@type": "Question",
            "name": "Can you work on classified or security-sensitive projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We apply appropriate access controls and confidentiality procedures throughout our design and delivery process for projects involving sensitive or restricted information. Specific clearance requirements are discussed and confirmed on a per-project basis."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle configuration and change control on safety-critical systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every system revision is formally documented, so a complete change history exists for the full life of the system. This supports both internal review and external audit requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support legacy PLC systems that are nearing end-of-life?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly modernize outdated PLC and control hardware, upgrading systems to current standards while minimizing disruption to ongoing production."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver aerospace and defence automation projects outside the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver projects across three continents, applying the same engineering standards and documentation discipline wherever the project is based."
            }
          }
        ]
      }
    ]
  };

  const warningSigns = [
    {
      title: "Aging End-of-Life PLC Systems",
      desc: "Legacy control systems are approaching end-of-life with no clear upgrade path or manufacturer spare parts availability."
    },
    {
      title: "Traceability & Audit Bottlenecks",
      desc: "Manual documentation and paper-based configuration logs struggle to keep pace with stringent defense traceability and audit demands."
    },
    {
      title: "Internal Engineering Capacity Deficits",
      desc: "In-house engineering teams lack the available hours or specific security clearances required to undertake new safety-critical automation programs."
    },
    {
      title: "Compliance Audit Documentation Gaps",
      desc: "Recent quality audits have flagged gaps or inconsistencies in control software change history, schematics, or component traceability."
    },
    {
      title: "Disproportionate Safety-Line Downtime",
      desc: "Unscheduled downtime on safety-critical assembly or testing lines creates unacceptable commercial penalties and operational risk exposure."
    },
    {
      title: "Obsolete Control Panel Components",
      desc: "Existing control cabinets rely on obsolete relays, discontinued drives, or unsupportable safety circuits with no direct vendor replacements."
    }
  ];

  const aerospaceServices = [
    {
      id: "plc-programming",
      title: "PLC Programming & Control Systems",
      tagline: "Safety-Critical Logic & Full Revision Traceability",
      description: "We develop robust control logic for safety critical aerospace and defence applications using industry standard platforms like Siemens, Mitsubishi, and Unitronics. Our programming approach emphasizes strict documentation and full traceability from the initial line of code to the final deployment. This ensures that every operation is completely auditable to meet rigorous industry compliance standards. We deliver solutions that prioritize both precise execution and comprehensive historical logging for your peace of mind.",
      image: "/images/Aviation Electronic Equipment.jpg",
      points: [
        "Siemens S7-1500F Fail-Safe, Mitsubishi MELSEC-Q/iQ-R, Unitronics UniStream",
        "Deterministic, fail-safe logic architecture aligned with IEC 61508 / 62061",
        "Complete software version control, code commenting, and revision logs",
        "Comprehensive historical fault logging and audit-ready data trails"
      ]
    },
    {
      id: "control-panels",
      title: "Electrical Control Panel Design & Build",
      tagline: "Precision Engineering with Complete Component Pedigree",
      description: "We specialize in engineering and manufacturing control panels that adhere to the stringent documentation and build quality expectations of the aerospace and defence sector. Every panel we build includes a complete, detailed record of all internal components, their sourcing, and the results of our rigorous testing process. This commitment to transparency ensures that your systems are reliable and easy to maintain throughout their entire lifecycle. We focus on structural integrity and precision to provide a foundation that supports your most critical manufacturing tasks.",
      image: "/images/Aviation Electrical Equipment.jpg",
      points: [
        "Full component provenance and traceable bill of materials (BOM)",
        "EMC shielded, vibration-resistant, and high-integrity enclosures",
        "Detailed CAD electrical schematics, wire tagging, and terminal maps",
        "Rigorous 100% point-to-point Factory Acceptance Testing (FAT)"
      ]
    },
    {
      id: "functional-safety",
      title: "Functional Safety Engineering",
      tagline: "SIL 2/3 & PL e Architectures for High-Consequence Operations",
      description: "Our team performs detailed risk assessments and designs safety systems specifically for high consequence environments where precision and reliability are non negotiable. We ensure that every safety critical function is meticulously engineered, thoroughly tested, and extensively documented to meet the demanding standards of the aerospace industry. By prioritizing safety at the architectural level, we help you mitigate operational risks and protect your personnel and assets. Our documentation provides the evidence required for successful internal reviews and external audits.",
      image: "/images/Control System Engineering.jpg",
      points: [
        "Comprehensive EN ISO 13849-1 (PL e) and IEC 62061 (SIL 3) design",
        "Safety PLC programming and redundant fail-safe interlock networks",
        "Formal Hazard Identification (HAZID) and risk assessments",
        "Exhaustive safety validation reports for defence audit sign-off"
      ]
    },
    {
      id: "systems-integration",
      title: "Systems Integration",
      tagline: "Cohesive Multi-Platform Coordination & Test Rig Control",
      description: "We manage the complex coordination of multi system environments where diverse equipment, control platforms, and safety systems must function as a single unit. This integration phase is often the most demanding part of an aerospace project, requiring deep technical expertise to ensure complete reliability across your infrastructure. Our end to end delivery model simplifies this process by keeping all coordination under a single accountable engineering partner. We unify your disparate production technologies to create a cohesive and highly efficient manufacturing process.",
      image: "/images/Automation System Integration.jpg",
      points: [
        "Unification of legacy machinery, modern robotic cells, and test rigs",
        "Fieldbus networking via PROFINET, PROFIsafe, CC-Link IE, and Modbus TCP",
        "Interfacing with aerospace manufacturing execution systems (MES)",
        "Single accountable engineering partner eliminating contractor friction"
      ]
    },
    {
      id: "hmi-scada",
      title: "HMI & SCADA Development",
      tagline: "Auditable Operator Interfaces & Secure Telemetry",
      description: "We create secure, auditable operator interfaces and SCADA dashboards that provide your team with clear visibility into real time production performance. Our development process prioritizes user accessibility while maintaining the strict security protocols and access logging required in sensitive defence environments. We deliver intuitive control systems that simplify complex data without compromising the security or auditability of your operations. This empowers your operators to maintain high standards of efficiency and control throughout every production cycle.",
      image: "/images/HMI INTEGRATION.jpg",
      points: [
        "Role-based multi-tier security and biometric/RFID user authentication",
        "Tamper-proof electronic records and historical change audit logging",
        "Intuitive visual alarm diagnostics minimizing operational confusion",
        "Air-gapped and secured industrial network telemetry options"
      ]
    },
    {
      id: "installation-commissioning",
      title: "Installation & Commissioning",
      tagline: "Structured On-Site Deployment with Documented SAT",
      description: "We oversee the entire on site installation and commissioning phase, maintaining a precise documentation trail at every step of the deployment. This structured approach ensures that your project is ready for immediate internal sign off and provides all the necessary evidence for external audits upon completion. Our team manages the logistical challenges of integration, allowing you to focus on your core production goals. We remain on site to verify that everything performs to specifications, ensuring a smooth transition to full operation.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      points: [
        "Structured Site Acceptance Testing (SAT) with redlined as-built packages",
        "Security-conscious deployment adhering to facility access protocols",
        "Minimal production disturbance and coordinated cutover windows",
        "Comprehensive operator and maintenance personnel handover training"
      ]
    },
    {
      id: "legacy-upgrades",
      title: "Legacy System Upgrades",
      tagline: "Modernizing End-of-Life Control Systems Without Production Interruption",
      description: "We provide professional modernization services for outdated PLC and control hardware that has reached or is nearing its end of life. Our strategy focuses on upgrading your systems to current standards while minimizing any disruptions to your ongoing production schedule. By systematically addressing obsolescence risks, we extend the operational lifespan of your critical manufacturing lines. We ensure a seamless transition that restores reliability to your older infrastructure without compromising the performance of your current facility.",
      image: "/images/Legacy System Upgrades.jpg",
      points: [
        "Risk-mitigated migration from legacy Siemens S5, Mitsubishi A/Q, or SLC500",
        "Drop-in I/O conversion and parallel wiring strategies for rapid cutover",
        "Complete obsolescence management and long-term spares availability",
        "Preservation of proven operating kinematics and manufacturing parameters"
      ]
    }
  ];

  const specializedAviationSystems = [
    {
      title: "Ground Support Equipment (GSE) Automation",
      subtitle: "Towbarless Tugs, Mobile Power & Hydraulic Rigs",
      image: "/images/Ground Support Equipment (GSE).jpg",
      desc: "We engineer ruggedized, failsafe control systems for aviation ground handling and mobile flight-line equipment. Built to withstand extreme environmental conditions, heavy vibration, and continuous airfield duty cycles while providing precise load monitoring and operator interlocks.",
      tags: ["CANbus J1939", "IP67 In-Cab Displays", "Hydraulic Manifold Control", "Safety Interlocks"]
    },
    {
      title: "Aircraft Maintenance Tooling (AMT)",
      subtitle: "Calibrated Lifting Beams, Engine Cradles & Test Rigs",
      image: "/images/Aircraft Maintenance Tools.jpg",
      desc: "Custom automated control systems and telemetry for aircraft maintenance tooling, engine overhaul stands, and structural proof-load testing rigs. Complete with certified load cell calibration, digital displacement recording, and automated test certification reporting.",
      tags: ["Synchronized Lifting", "Load Cell Telemetry", "ISO 17025 Calibration", "Audit Reporting"]
    }
  ];

  const compliancePillars = [
    {
      icon: Award,
      title: "AS9100 & DEFCON Aligned",
      desc: "Our quality management procedures and technical deliverables align directly with aerospace (AS9100) and UK Ministry of Defence procurement expectations."
    },
    {
      icon: ShieldCheck,
      title: "ISO Accredited Quality",
      desc: "Holding ISO 9001, ISO 17020, and ISO 17025 accreditations, we bring formal quality assurance, calibration rigor, and inspection discipline to every build."
    },
    {
      icon: Binary,
      title: "Rigorous Configuration Control",
      desc: "Every logic revision, wiring modification, and component change is captured in formal engineering change orders (ECO) with complete audit histories."
    },
    {
      icon: Lock,
      title: "Information Security & Discretion",
      desc: "Strict data handling, NDAs, and physical security measures protect proprietary aviation IP, military specifications, and sensitive program details."
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation & Audit",
      desc: "We assess your technical specifications, security parameters, compliance obligations, and project feasibility before engineering begins."
    },
    {
      step: "02",
      title: "System Design",
      desc: "Our engineers develop comprehensive CAD schematics, functional design specifications (FDS), and safety architectures aligned with your standards."
    },
    {
      step: "03",
      title: "Build & In-House FAT",
      desc: "We manufacture panels and build control logic in-house, completing 100% rigorous Factory Acceptance Testing with complete documentation prior to dispatch."
    },
    {
      step: "04",
      title: "Commissioning & SAT",
      desc: "We install on-site, integrate with existing plant systems, and execute structured Site Acceptance Testing while maintaining complete audit trails."
    },
    {
      step: "05",
      title: "Lifecycle Support",
      desc: "We provide ongoing preventative servicing, remote telemetry, and long-term technical support to keep your systems reliable and fully compliant."
    }
  ];

  const clientLogos = [
    { name: "UK Ministry of Defence", src: "/images/UK-MOD-scaled.png" },
    { name: "Babcock International", src: "/images/Babcock-scaled.png" },
    { name: "Field International", src: "/images/Field-international-scaled.png" },
    { name: "Dunlop Aircraft Tyres", src: "/images/Dunlop-scaled.png" },
    { name: "Emirates", src: "/images/Emirates-scaled.png" },
    { name: "Alstom", src: "/images/Alstom-scaled.png" }
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
            <span className="text-[#6DA7BF] font-medium">Aerospace &amp; Defence</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Plane className="w-4 h-4 text-[#6DA7BF]" />
                <span>Aerospace &amp; Defence Engineering • Precision, Security &amp; Full Traceability</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Aerospace &amp; Defence <br />
                <span className="text-[#6DA7BF]">Automation Solutions</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for aerospace and defence manufacturers across the UK and worldwide. Since 2013, we have engineered PLC control systems, control panels, and fully integrated automation solutions for safety-critical environments where precision and documentation matter as much as performance.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Our team understands the standards, the security requirements, and the zero-tolerance approach to defects that define this sector, and we build every project around them.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request an Engineering Consultation</span>
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
                  <div className="text-xl font-bold text-white">Zero</div>
                  <div className="text-xs text-slate-400">Defect Tolerance</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">SIL 2/3</div>
                  <div className="text-xs text-slate-400">Safety &amp; PL e</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Full ECO</div>
                  <div className="text-xs text-slate-400">Code Traceability</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">3 Continents</div>
                  <div className="text-xs text-slate-400">Global Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with High-Tech Spec Overlay */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Aerospace & Defence Automation.jpg"
                    alt="Aerospace & Defence Automation Solutions - MASK Control Systems Ltd"
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
                    <span className="text-slate-400">SYSTEM ARCHITECTURE:</span>
                    <span className="text-[#6DA7BF]">FAIL-SAFE PLC / SCADA</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">STANDARDS ALIGNMENT:</span>
                    <span className="text-emerald-400">AS9100 • DEFCON • ISO 9001</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">REVISION DISCIPLINE:</span>
                    <span className="text-slate-200">FORMAL ECO TRACEABILITY</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK ENGINEERING: CULLOMPTON, DEVON</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CLIENT / DEFENCE TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted by Aerospace &amp; Defence Contractors:</span>
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
          3. WHY SPECIALIZED AUTOMATION IS ESSENTIAL
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Zero-Tolerance Operational Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Aerospace &amp; Defence Manufacturing Needs Specialized Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Aerospace and defence manufacturing operates under a level of scrutiny that few other sectors match. Systems must perform within extremely tight tolerances, and a single defect can carry consequences far beyond a production line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tight Tolerances &amp; Zero Defect Consequence</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In aerospace and defence, a single logic error or dimensional deviation can compromise human life or trigger massive mission failure. Systems must execute with deterministic precision every single cycle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Exhaustive Qualification &amp; Audit Cycles</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Qualification and audit cycles run longer and deeper than in commercial sectors. Automation partners must deliver flawless FAT/SAT documentation that withstands intense prime contractor and MoD scrutiny.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rigorous Configuration &amp; Revision Control</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every system change requires formal configuration and revision control. A complete, unalterable historical log must exist for every component, wiring change, and software update throughout the equipment lifecycle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Discretion &amp; Strict Information Security</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Many aerospace and defence projects involve classified or sensitive IP. Manufacturers require an engineering partner who treats confidentiality as foundational—from data encryption to vetted on-site personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. THE UK MANUFACTURING LANDSCAPE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Aerospace & Defence Manufacturing Landscape.jpg"
                    alt="The UK Aerospace & Defence Manufacturing Landscape - MASK Control Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 border-t border-white/10 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>UK DEFENCE &amp; AVIATION HUB:</span>
                    <span className="text-[#6DA7BF]">SOUTH WEST &amp; MIDLANDS</span>
                  </div>
                  <p>
                    Supporting prime aerospace contractors, Tier-1 system suppliers, and defence programs across the UK with security-conscious, accredited engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Compass className="w-3.5 h-3.5" />
                <span>National Engineering Ecosystem</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Aerospace &amp; Defence <br />
                <span className="text-[#6DA7BF]">Manufacturing Landscape</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                The UK aerospace and defence sector is one of the country&apos;s most established advanced manufacturing bases, supporting thousands of companies and tens of thousands of skilled engineers across design, production, and systems integration.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                The South West of England, where MASK is headquartered in Cullompton, Devon, is a particularly dense engineering region for this sector—home to a large concentration of aerospace engineers and a long-standing supply chain built around major defence and aviation programs.
              </p>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Security-Cleared Engineering Skills Shortage</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This sector faces a pronounced skills challenge. Security-cleared automation engineers are in short supply nationally, and many manufacturers find it difficult to recruit and retain the specialized talent needed to maintain and upgrade safety-critical control systems. That shortage is pushing more manufacturers toward experienced outsourced partners like MASK Control Systems who step in with the right documentation discipline and technical depth already in place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. SIGNS YOUR FACILITY NEEDS AUTOMATION SUPPORT
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Operational Assessment &amp; Review</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Signs Your Aerospace or Defence Facility Needs Automation Support
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Several recurring signals tell us an aerospace or defence facility is ready for an automation review before risks escalate into costly audit failures or line stoppages:
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
                  <span className="text-[11px] font-mono text-slate-400">Risk Mitigation Priority</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Recognize any of these challenges in your facility?</h4>
              <p className="text-xs text-slate-400 mt-1">
                An automation and control system review is worth prioritizing before audit or obsolescence issues escalate.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-colors"
            >
              Schedule an Engineering Audit
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          6. CORE AEROSPACE & DEFENCE SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Comprehensive Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Aerospace &amp; Defence <br />
              <span className="text-[#6DA7BF]">Automation Services</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              From safety-critical PLC logic to bespoke control cabinets and legacy modernization, we engineer end-to-end automation systems built around rigorous documentation, functional safety, and complete accountability.
            </p>
          </div>

          <div className="space-y-16">
            {aerospaceServices.map((service, index) => {
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
                        <span>Consult on this service</span>
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
          7. SPECIALIZED GROUND SUPPORT & TOOLING
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>Flight-Line &amp; MRO Automation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Specialized Ground Support (GSE) &amp; Aircraft Tooling Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              In addition to fixed manufacturing lines, MASK engineers high-reliability control systems and sensor telemetry for mobile airfield equipment and aircraft maintenance tooling (AMT).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedAviationSystems.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-[#0C121C] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#6DA7BF]/50 transition-all">
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-900">
                    <Image
                      src={item.image}
                      alt={`${item.title} - MASK Control Systems Ltd`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-70" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-mono text-[#6DA7BF] uppercase tracking-wider">{item.subtitle}</div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. COMPLIANCE, TRACEABILITY & SECURITY
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Standards &amp; Quality Management</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Compliance, Traceability <br />
                <span className="text-[#6DA7BF]">&amp; Security Built In</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Aerospace and defence manufacturing runs on documented, auditable processes, and our systems are built to support that from day one.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                We align our work with AS9100 and DEFCON standards, and we apply strict configuration and change management to every system revision, so a complete history exists for every modification made throughout a system&apos;s life. Our documentation is built to withstand the level of scrutiny that prime contractors and defence procurement bodies expect during audit.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                We also take confidentiality seriously. Where a project involves sensitive or restricted information, we apply appropriate access controls and handling procedures throughout our engineering process, from initial design through to on-site commissioning.
              </p>

              {/* ISO Badges */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0C121C] border border-white/10 text-xs font-semibold text-slate-200">
                  <Award className="w-4 h-4 text-[#6DA7BF]" />
                  <span>ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0C121C] border border-white/10 text-xs font-semibold text-slate-200">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>ISO 17020 Accredited</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0C121C] border border-white/10 text-xs font-semibold text-slate-200">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>ISO 17025 Calibrated</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compliancePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          9. SUPPORTING MANUFACTURERS WORLDWIDE
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>UK Headquarters • Worldwide Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Supporting Aerospace &amp; Defence Manufacturers Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We are headquartered in Cullompton, Devon, in the United Kingdom, and we apply the same engineering discipline and documentation standards to aerospace and defence projects across three continents.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether your facility is based in the UK, mainland Europe, North America, or the Middle East, you receive the same rigorous process, the same certified quality management systems, and the same commitment to long-term lifecycle support.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UK &amp; EUROPE</div>
              <div className="text-lg font-bold text-white">Devon HQ &amp; Midlands Hub</div>
              <p className="text-xs text-slate-400 mt-2">
                Rapid on-site emergency engineering, commissioning, and scheduled maintenance across the UK defence corridor and European manufacturing hubs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">NORTH AMERICA &amp; MIDDLE EAST</div>
              <div className="text-lg font-bold text-white">International Deployment</div>
              <p className="text-xs text-slate-400 mt-2">
                Full SAT commissioning, turn-key FAT validation, and remote telemetry support for multinational aviation suppliers and defence facilities.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">DATA SECURITY</div>
              <div className="text-lg font-bold text-white">Secure Remote Telemetry</div>
              <p className="text-xs text-slate-400 mt-2">
                Air-gapped architecture design, encrypted VPN gateways, and role-based remote diagnostics adhering to strict client cyber policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          10. HOW WE WORK (5-STAGE PROCESS)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Structured Engineering Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We follow a structured, documented process on every aerospace and defence project to guarantee total traceability and compliance:
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
          11. WHY MANUFACTURERS CHOOSE MASK
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Engineering Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Manufacturers Choose MASK for <br />
                <span className="text-[#6DA7BF]">Aerospace &amp; Defence Automation</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we bring that same quality management discipline to every aerospace and defence project. Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your application rather than defaulting to a single vendor&apos;s equipment.
                </p>
                <p>
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing support, so you work with one accountable engineering partner rather than coordinating multiple contractors.
                </p>
                <p>
                  As the shortage of security-cleared, sector-experienced automation engineers continues to affect the industry, we act as an experienced outsourced team who already understands the standards, the documentation, and the scrutiny this sector demands.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Discuss Your Programme Requirements</span>
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
                  <h3 className="text-base font-bold text-white">Tri-Certified Quality Rigor</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Testing/Calibration) standards integrated directly into our panel manufacturing and code testing protocols.
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
                    Deep engineering capability across Siemens SIMATIC S7, Mitsubishi MELSEC, Unitronics, Rockwell Allen-Bradley, and Omron platforms. We select what fits your application best.
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
                    From concept and panel build to on-site commissioning and 24/7 technical breakdown support, we eliminate multi-vendor friction and finger-pointing.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Overcoming Sector Skills Gaps</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Ready-to-deploy engineering specialists possessing the necessary technical depth, safety credentials, and sector familiarity required by prime defense contractors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          12. FREQUENTLY ASKED QUESTIONS
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
              Key questions aerospace and defence manufacturers ask when evaluating MASK Control Systems as their automation partner:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>What certifications does MASK hold for aerospace and defence work?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we design our systems to align with AS9100 and DEFCON standards throughout every project.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you work on classified or security-sensitive projects?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We apply appropriate access controls and confidentiality procedures throughout our design and delivery process for projects involving sensitive or restricted information. Specific clearance requirements are discussed and confirmed on a per-project basis.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>How do you handle configuration and change control on safety-critical systems?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Every system revision is formally documented, so a complete change history exists for the full life of the system. This supports both internal review and external audit requirements.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you support legacy PLC systems that are nearing end-of-life?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We regularly modernize outdated PLC and control hardware, upgrading systems to current standards while minimizing disruption to ongoing production.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you deliver aerospace and defence automation projects outside the UK?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We deliver projects across three continents, applying the same engineering standards and documentation discipline wherever the project is based.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================
          13. EXPLORE OTHER INDUSTRIES
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
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
              In addition to aerospace and defence, MASK engineers bespoke control and automation systems across diverse high-performance industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList
              .filter(item => item.href !== "/industries/aerospace-defence/")
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
          14. FINAL CTA CONVERSION SECTION
      ========================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0A101A] to-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] bg-[#0C121C] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DA7BF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Confidential Project Consultation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Get In Touch With Our Aerospace &amp; Defence Engineers
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  If you are planning an aerospace or defence automation project, or you need to modernize a legacy control system, our team is ready to help. Explore our other industry sectors or contact us directly to discuss your requirements.
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
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Midlands Hub: Birmingham, UK
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Worldwide Deployment Capability
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/contact/"
                  className="w-full text-center px-6 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm hover:bg-[#5b95ad] transition-all shadow-xl shadow-[#6DA7BF]/20"
                >
                  Request a Project Consultation
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
