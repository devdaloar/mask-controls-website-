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
  Microscope,
  Stethoscope,
  Database,
  ThermometerSnowflake,
  Wind
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Pharmaceutical & Medical Automation Solutions | MASK Control Systems Ltd",
  description: "UK-engineered automation solutions for pharmaceutical and medical device manufacturers. GMP, GAMP, and FDA 21 CFR Part 11 compliant clean-room PLC systems, control panels, and data integrity.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/pharmaceutical-medical/"
  },
  openGraph: {
    title: "Pharmaceutical & Medical Automation Solutions | MASK Control Systems Ltd",
    description: "UK-engineered automation solutions for pharmaceutical and medical device manufacturers. GMP, GAMP, and FDA 21 CFR Part 11 compliant clean-room PLC systems, control panels, and data integrity.",
    url: "https://maskcontrols.com/industries/pharmaceutical-medical/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Pharmaceutical & Medical Automation.jpg",
        width: 1200,
        height: 630,
        alt: "Pharmaceutical & Medical Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function PharmaceuticalMedicalAutomationPage() {
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
            "name": "Pharmaceutical & Medical Automation",
            "item": "https://maskcontrols.com/industries/pharmaceutical-medical/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Pharmaceutical & Medical Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke clean-room automation, GMP/GAMP-compliant control panels, FDA 21 CFR Part 11 electronic records, and environmental monitoring for pharmaceutical and medical device manufacturing.",
        "areaServed": ["United Kingdom", "Europe", "North America", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does MASK have experience with GMP-validated environments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We design and build automation systems specifically to preserve a facility's validated state, with documentation built for inspection readiness at every stage."
            }
          },
          {
            "@type": "Question",
            "name": "What is FDA 21 CFR Part 11, and how does MASK design for it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FDA 21 CFR Part 11 governs how electronic records and electronic signatures must be created, secured, and audited in regulated manufacturing. We design our systems to support complete audit trails, secure access control, and reliable electronic record-keeping in line with this requirement."
            }
          },
          {
            "@type": "Question",
            "name": "Can you automate clean-room environments without disrupting existing validation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We plan every clean-room project around airflow, material flow, and contamination control from the outset, and we manage system changes carefully to preserve your existing validated state."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support batch release and fill-finish processes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We design control systems with the precise, repeatable sequencing that batch release and fill-finish processes require, supporting consistency across every production cycle."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver pharmaceutical automation projects outside the UK?",
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
      title: "Manual Paper-Based Batch Records",
      desc: "Batch records are still tracked manually or on paper, slowing down regulatory audits and elevating human transcription error risks."
    },
    {
      title: "Validation Maintenance Challenges",
      desc: "Maintaining a validated state after minor equipment or software changes has become increasingly difficult, costly, and time-consuming."
    },
    {
      title: "Aging SCADA & Data Integrity Gaps",
      desc: "Legacy SCADA or PLC control systems can no longer support modern FDA 21 CFR Part 11 data integrity and electronic signature expectations."
    },
    {
      title: "Manual Environmental Logging",
      desc: "Critical clean-room environmental monitoring (temperature, differential pressure, humidity) still relies on vulnerable manual logbooks."
    },
    {
      title: "GAMP & Validation Skills Deficit",
      desc: "Your in-house engineering team lacks specialized GAMP 5 or formal computer system validation (CSV) experience for upcoming plant upgrades."
    },
    {
      title: "Audit Flags on Change History",
      desc: "Recent MHRA or FDA audits have flagged gaps in control system change control, traceability documentation, or software versioning."
    }
  ];

  const pharmaServices = [
    {
      id: "plc-programming",
      title: "PLC Programming & Control Systems",
      tagline: "Validated Logic Architecture & Repeatable Batch Precision",
      description: "We program control logic for pharmaceutical and medical device applications using Siemens, Mitsubishi, and Unitronics platforms. Every program is developed to meet the strict documentation and repeatability standards that validated environments require. Our approach ensures that all code is fully traceable, supporting your audit readiness from the start. We prioritize high-performance logic that maintains production consistency across every cycle.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      points: [
        "Siemens S7-1500, Mitsubishi iQ-R, and Unitronics UniStream platforms",
        "Deterministic batch sequencing eliminating recipe and cycle variance",
        "Comprehensive code commenting, version control, and functional design specs",
        "GAMP 5 category 4/5 software compliance and audit-ready test scripts"
      ]
    },
    {
      id: "control-panels",
      title: "Electrical Control Panel Design & Build",
      tagline: "Clean-Room Compatible Enclosures & Traceable Pedigree",
      description: "We design and manufacture control panels engineered for clean room compatibility, ensuring they meet the stringent demands of your facility. Every panel is built with full documentation of all components, sourcing, and testing results to directly support your validation records. Our designs prioritize durability and compliance, providing a reliable foundation for your most critical manufacturing processes. This commitment to transparency helps streamline your validation and qualification efforts.",
      image: "/images/Custom Electrical Control Panel Design & Manufacturing.jpg",
      points: [
        "316L stainless steel hygienic washdown enclosures (sloped roofs, crevice-free)",
        "Complete component provenance, certificates of conformity, and BOM traceability",
        "Full CAD electrical schematics, wire tagging, and clean-room cable routing",
        "Rigorous 100% point-to-point Factory Acceptance Testing (FAT) with signed protocols"
      ]
    },
    {
      id: "systems-integration",
      title: "Systems Integration",
      tagline: "Seamless MES, SCADA & ERP Connectivity Without Validation Drift",
      description: "Our team integrates SCADA, MES, and ERP systems into your existing production environment without compromising the validated state of your facility. We carefully manage every connection to ensure that new capabilities do not introduce compliance risks or data gaps. By synchronizing your disparate technologies, we create a cohesive infrastructure that supports consistent, repeatable production. This seamless integration ensures your systems work together to uphold your quality and regulatory standards.",
      image: "/images/Automation System Integration.jpg",
      points: [
        "Bidirectional interfacing between line PLCs, SCADA, and enterprise MES / ERP",
        "OPC UA, MQTT, and secured industrial Ethernet network architectures",
        "Preservation of existing validated clean-room status during system cutovers",
        "Single accountable engineering partner eliminating multi-contractor friction"
      ]
    },
    {
      id: "hmi-scada",
      title: "HMI & SCADA Development",
      tagline: "FDA 21 CFR Part 11 Compliant Interfaces & Tamper-Proof Audit Trails",
      description: "We build operator interfaces and SCADA dashboards specifically designed to maintain data integrity and strict clean room protocol compliance. These systems provide your team with clear, real time visibility into your production lines without breaking essential clean room discipline. We focus on creating intuitive controls that reduce the potential for human error while ensuring all interactions are secure and logged. This enhances operational transparency and supports your overall quality management goals.",
      image: "/images/HMI Development.jpg",
      points: [
        "Full 21 CFR Part 11 compliant electronic signatures and automated audit logs",
        "Role-based multi-tiered security with biometric or badge reader authentication",
        "Live alarm visualization, batch recipe management, and automated report generation",
        "Clean-room touchscreen interfaces compatible with sanitizing wipes and PPE gloves"
      ]
    },
    {
      id: "environmental-monitoring",
      title: "Environmental Monitoring Systems (EMS)",
      tagline: "Independent Critical Parameter Oversight & Data Protection",
      description: "We design independent environmental monitoring systems that track temperature, humidity, and pressure separately from standard building automation. This separation ensures that your critical environmental data remains secure and untainted, protecting the data integrity your quality system depends on. By providing accurate, real time monitoring, our solutions help you maintain the precise conditions required for sensitive medical and pharmaceutical processes. This proactive approach supports continuous compliance and protects your product quality.",
      image: "/images/Industrial Remote Monitoring & Smart Automation Solutions.jpg",
      points: [
        "Dedicated monitoring independent of standard HVAC/BMS controls",
        "High-accuracy differential room pressure, temperature, and humidity sensors",
        "Calibrated instrumentation compliant with ISO 17025 testing standards",
        "Automated deviation alerts preventing batch spoilage and clean-room breaches"
      ]
    },
    {
      id: "installation-commissioning",
      title: "Installation & Commissioning",
      tagline: "Qualification-Ready Protocols: IQ, OQ & Clean-Room Handover",
      description: "Our team handles all aspects of on site installation and commissioning, providing the detailed, qualification ready documentation you need for successful deployment. We support your Installation Qualification (IQ) and Operational Qualification (OQ) processes from the very beginning of the project. By managing these critical steps, we ensure that your equipment is set up to meet all regulatory and performance specifications. This thorough approach provides a solid foundation for your ongoing validation efforts.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      points: [
        "Detailed IQ (Installation Qualification) and OQ (Operational Qualification) execution",
        "Clean-room entry protocol adherence minimizing particulate contamination",
        "Traceable loop checking, sensor calibration logs, and redlined as-builts",
        "Full operator and maintenance training with documented qualification sign-offs"
      ]
    },
    {
      id: "remote-monitoring",
      title: "Remote Monitoring & Telemetry",
      tagline: "Real-Time Critical Diagnostics & Proactive Batch Protection",
      description: "Our secure, remote monitoring solutions provide you with real time diagnostics and immediate alerts for your production lines. This technology helps you detect and address environmental or process deviations quickly, before they have the chance to threaten a batch or compromise your validation status. By bridging the gap between your on site machinery and remote oversight, we ensure your team stays informed at all times. This supports proactive management and reduces the risk of unexpected production interruptions.",
      image: "/images/Remote Technical Support.jpg",
      points: [
        "Encrypted VPN telemetry compliant with enterprise pharmaceutical cybersecurity",
        "Proactive early warning alerts for mechanical drift or thermal excursions",
        "Rapid remote diagnostic support from UK-based automation specialists",
        "Continuous OEE and process stability analytics for quality management reviews"
      ]
    }
  ];

  const compliancePillars = [
    {
      icon: Database,
      title: "FDA 21 CFR Part 11 Ready",
      desc: "Our SCADA and HMI solutions feature complete electronic audit trails, secure electronic signatures, and tamper-evident records to ensure effortless audit defense."
    },
    {
      icon: ShieldCheck,
      title: "GMP & GAMP 5 Discipline",
      desc: "We follow Good Automated Manufacturing Practice (GAMP 5) lifecycle models, ensuring every software function and hardware modification preserves your validated state."
    },
    {
      icon: Award,
      title: "Tri-Certified Quality Rigor",
      desc: "Holding ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Calibration), MASK brings verifiable calibration and documentation rigor to medical automation."
    },
    {
      icon: Wind,
      title: "Clean-Room Engineering",
      desc: "Panel and sensor architectures engineered specifically for ISO Class 5-8 clean-rooms, respecting laminar airflow patterns and aggressive sanitization regimes."
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation & Audit",
      desc: "We assess your user requirements (URS), clean-room classification, validation status, and project feasibility before engineering commences."
    },
    {
      step: "02",
      title: "Design & FDS",
      desc: "Our engineers develop functional design specifications, electrical schematics, and software architectures strictly aligned with GMP and GAMP 5."
    },
    {
      step: "03",
      title: "Build & In-House FAT",
      desc: "We manufacture clean-room panels and code logic in-house, executing rigorous Factory Acceptance Testing with complete qualification documentation."
    },
    {
      step: "04",
      title: "Commissioning & IQ/OQ",
      desc: "We install on-site under clean-room protocols, execute formal IQ/OQ testing, and train your staff, maintaining complete audit trails throughout."
    },
    {
      step: "05",
      title: "Validated Lifecycle Support",
      desc: "We provide ongoing preventative servicing, remote telemetry, and formal change control support to help you maintain your validated state over time."
    }
  ];

  const researchPartners = [
    { name: "University of Warwick", src: "/images/University-of-Warwick-scaled.png" },
    { name: "University of Southampton", src: "/images/University-of-Southampton-scaled.png" },
    { name: "University of Exeter", src: "/images/University-of-Exeter-scaled.png" },
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
            <span className="text-[#6DA7BF] font-medium">Pharmaceutical &amp; Medical</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Microscope className="w-4 h-4 text-[#6DA7BF]" />
                <span>Life Sciences &amp; Clean-Room Engineering • GMP &amp; GAMP 5 Aligned</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Pharmaceutical &amp; Medical <br />
                <span className="text-[#6DA7BF]">Automation Solutions</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for pharmaceutical and medical device manufacturers across the UK and worldwide. Since 2013, we have engineered PLC control systems, control panels, and fully integrated automation solutions for clean-room and validated environments, where regulatory compliance and data integrity matter as much as performance.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Our team understands the standards, the documentation, and the validated-state discipline that define this sector, and we build every project around them.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request a Validation Consultation</span>
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
                  <div className="text-xl font-bold text-white">21 CFR 11</div>
                  <div className="text-xs text-slate-400">Electronic Records</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">GMP &amp; GAMP 5</div>
                  <div className="text-xs text-slate-400">Validated State Logic</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">IQ / OQ</div>
                  <div className="text-xs text-slate-400">Qualification Ready</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">3 Continents</div>
                  <div className="text-xs text-slate-400">Global Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with Validation Spec Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Pharmaceutical & Medical Automation.jpg"
                    alt="Pharmaceutical & Medical Automation Solutions - MASK Control Systems Ltd"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* Clean-Room Spec Card */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CLEAN-ROOM COMPATIBILITY:</span>
                    <span className="text-[#6DA7BF]">ISO CLASS 5 - 8 READY</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">DATA INTEGRITY:</span>
                    <span className="text-emerald-400">ALCOA+ / 21 CFR PART 11</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">VALIDATION DISCIPLINE:</span>
                    <span className="text-slate-200">GAMP 5 &amp; FORMAL IQ/OQ</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK HEADQUARTERS: CULLOMPTON, DEVON</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. RESEARCH & ACCREDITATION TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Accredited Standards &amp; University Research Partners:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {researchPartners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl px-4 py-2.5 h-12 sm:h-14 flex items-center justify-center shadow-md shadow-black/30 border border-white hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src={partner.src}
                    alt={`${partner.name} - MASK Control Systems Ltd`}
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
              <Microscope className="w-3.5 h-3.5" />
              <span>Clean-Room &amp; Validated-State Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Pharmaceutical &amp; Medical Manufacturing Needs Specialized Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Pharmaceutical and medical device manufacturing operates under some of the strictest requirements of any industry. Automation systems in this sector cannot simply be dropped into a clean-room environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Airflow &amp; Clean-Room Integrity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Airflow behavior, material flow, and contamination control need to shape the automation design from the earliest planning stage, or the clean-room&apos;s integrity is put at risk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Preserving the Validated State</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Once a facility is validated, every system change—whether a software update or a hardware modification—must preserve that validated state under strict change control.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Integrity &amp; Audit Trails</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Batch records and process data must be complete, traceable, and free of gaps. A single missing record can compromise an entire regulatory audit and hold up product releases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fill-Finish &amp; Batch Sequencing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Batch release and fill-finish processes demand precise, repeatable sequencing, with zero room for variation between cycles. We design every system with these realities built in from day one.
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
                    src="/images/The UK Pharmaceutical & Medical Manufacturing Landscape.jpg"
                    alt="The UK Pharmaceutical & Medical Manufacturing Landscape - MASK Control Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 border-t border-white/10 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>UK LIFE SCIENCES EXPANSION:</span>
                    <span className="text-[#6DA7BF]">13.77% AUTOMATION CAGR</span>
                  </div>
                  <p>
                    Supporting pharmaceutical manufacturers, vaccine laboratories, cell therapy clean-rooms, and medical device assembly lines across the UK with GAMP-compliant automation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Activity className="w-3.5 h-3.5" />
                <span>Fastest Growing UK Automation Sector</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Pharmaceutical &amp; Medical <br />
                <span className="text-[#6DA7BF]">Manufacturing Landscape</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Pharmaceutical and life sciences manufacturing is currently the fastest-growing segment of UK industrial automation, expanding at a compound annual growth rate of 13.77 percent. This growth is being driven by rising demand for clean-room automation, batch-release systems, and fill-finish processes, particularly across vaccine and cell therapy production.
              </p>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Validation &amp; GAMP Engineering Talent Gap</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This rapid growth has not been matched by an equivalent growth in specialized talent. Automation engineers with genuine validation and GAMP experience remain in short supply across the UK, and many pharmaceutical and medical device manufacturers struggle to recruit or retain that expertise in-house.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  As a result, more manufacturers are turning to experienced outsourced partners like MASK Control Systems who already understand validated environments, rather than trying to build that capability from scratch internally.
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
              <span>Inspection Readiness &amp; Operational Review</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Signs Your Facility Needs Pharmaceutical Automation Support
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Several recurring signals tell us a pharmaceutical or medical device facility is ready for an automation review before issues affect your next regulatory inspection:
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
                  <span className="text-[11px] font-mono text-slate-400">Validation Review Priority</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Experiencing data integrity or validation bottlenecks?</h4>
              <p className="text-xs text-slate-400 mt-1">
                An automation review is worth prioritizing before audit findings or batch deviations escalate.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-colors"
            >
              Schedule a Validation Audit
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          6. CORE PHARMACEUTICAL & MEDICAL SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Full-Lifecycle Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Pharmaceutical &amp; Medical <br />
              <span className="text-[#6DA7BF]">Automation Services</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              From clean-room control panels to 21 CFR Part 11 compliant SCADA and independent environmental monitoring, we engineer automation systems built around data integrity, repeatable precision, and qualification readiness.
            </p>
          </div>

          <div className="space-y-16">
            {pharmaServices.map((service, index) => {
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
          7. COMPLIANCE, VALIDATION & DATA INTEGRITY
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Regulatory Standards &amp; Defensible Processes</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Compliance, Validation <br />
                <span className="text-[#6DA7BF]">&amp; Data Integrity</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Pharmaceutical and medical device manufacturing runs on documented, defensible processes, and our systems are designed to support that from the start.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                We design with FDA 21 CFR Part 11 in mind, which governs how electronic records and electronic signatures must be created, secured, and audited. In practical terms, this means every system we build supports complete audit trails, secure access control, and reliable electronic record-keeping.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                We also design around GMP requirements, ensuring that any change made to a system—whether during initial commissioning or years later during an upgrade—preserves the facility&apos;s validated state rather than putting it at risk.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                For batch release and fill-finish processes, we build in the precise, repeatable sequencing these processes demand, so your production consistency supports rather than complicates your quality assurance work.
              </p>

              {/* Accreditations */}
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
          8. SUPPORTING MANUFACTURERS WORLDWIDE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>UK Headquarters • Worldwide Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Supporting Pharmaceutical &amp; Medical Manufacturers Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We are headquartered in Cullompton, Devon, in the United Kingdom, and we apply the same engineering discipline and validation-aware design process to pharmaceutical and medical device projects across three continents.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether your facility is based in the UK, mainland Europe, North America, or beyond, you receive the same rigorous process, the same certified quality management systems, and the same commitment to long-term lifecycle support.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UK &amp; EUROPE</div>
              <div className="text-lg font-bold text-white">Devon HQ &amp; Midlands Hub</div>
              <p className="text-xs text-slate-400 mt-2">
                Fast on-site engineering, commissioning support, and scheduled preventative maintenance across the UK Golden Triangle and European life science hubs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">NORTH AMERICA &amp; ASIA</div>
              <div className="text-lg font-bold text-white">Global Commissioning</div>
              <p className="text-xs text-slate-400 mt-2">
                Turnkey panel builds with full FAT documentation dispatched worldwide, accompanied by on-site IQ/OQ execution and operator training.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">REMOTE VALIDATION</div>
              <div className="text-lg font-bold text-white">Secure Encrypted Telemetry</div>
              <p className="text-xs text-slate-400 mt-2">
                Encrypted remote diagnostic gateways enabling secure oversight and instant troubleshooting without breaching clean-room airlocks.
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
              <span>Documentation-Led Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We follow a structured, documentation-led process on every pharmaceutical and medical device project:
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
                <span>Validated Engineering Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Manufacturers Choose MASK for <br />
                <span className="text-[#6DA7BF]">Pharmaceutical &amp; Medical Automation</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we bring that same quality management discipline to every pharmaceutical and medical device project. Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your application rather than defaulting to a single vendor&apos;s equipment.
                </p>
                <p>
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing support, so you work with one accountable engineering partner rather than coordinating multiple contractors.
                </p>
                <p>
                  As the shortage of validation-experienced automation engineers continues to affect the sector, we act as an experienced outsourced team who already understands GMP, data integrity, and the documentation this industry demands.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Discuss Your Validation Requirements</span>
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
                    Specialist expertise across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron controllers. We select what best satisfies your clean-room specifications.
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
                    End-to-end delivery from URS translation and electrical schematics to clean-room IQ/OQ and ongoing SLA support under one roof.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Bridging the UK GAMP Skills Gap</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Immediate access to senior automation engineers with deep validation pedigree, eliminating months of costly internal recruitment and training.
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
              <span>Validation Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Key questions pharmaceutical and medical device manufacturers ask when evaluating MASK Control Systems:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Does MASK have experience with GMP-validated environments?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We design and build automation systems specifically to preserve a facility&apos;s validated state, with documentation built for inspection readiness at every stage.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>What is FDA 21 CFR Part 11, and how does MASK design for it?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                FDA 21 CFR Part 11 governs how electronic records and electronic signatures must be created, secured, and audited in regulated manufacturing. We design our systems to support complete audit trails, secure access control, and reliable electronic record-keeping in line with this requirement.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you automate clean-room environments without disrupting existing validation?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We plan every clean-room project around airflow, material flow, and contamination control from the outset, and we manage system changes carefully to preserve your existing validated state.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you support batch release and fill-finish processes?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We design control systems with the precise, repeatable sequencing that batch release and fill-finish processes require, supporting consistency across every production cycle.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you deliver pharmaceutical automation projects outside the UK?</span>
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
              In addition to pharmaceutical and medical devices, MASK engineers bespoke control and automation systems across diverse industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList
              .filter(item => item.href !== "/industries/pharmaceutical-medical/")
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
                  <Shield className="w-3.5 h-3.5" />
                  <span>Confidential Life Sciences Consultation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Get In Touch With Our Validation Engineers
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  If you are planning a pharmaceutical or medical device automation project, or you need to modernize a validated system, our team is ready to help. Explore our other industry sectors or contact us directly to discuss your requirements.
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
