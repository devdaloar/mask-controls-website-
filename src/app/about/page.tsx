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
  Award,
  MapPin,
  GraduationCap,
  Scale,
  Building2,
  ShieldAlert
} from "lucide-react";

export const metadata: Metadata = {
  title: "About MASK Control Systems | UK Industrial Automation Engineers Since 2013",
  description: "MASK Control Systems is a UK-based industrial automation company founded in 2013. Learn about our engineering team, certifications, and the clients who trust us worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/about/"
  },
  openGraph: {
    title: "About MASK Control Systems | UK Industrial Automation Engineers Since 2013",
    description: "MASK Control Systems is a UK-based industrial automation company founded in 2013. Learn about our engineering team, certifications, and the clients who trust us worldwide.",
    url: "https://maskcontrols.com/about/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/About-Mask-Control-Systems.jpg",
        width: 1200,
        height: 630,
        alt: "About MASK Control Systems Ltd - Industrial Automation Engineers"
      }
    ]
  }
};

export default function AboutPage() {
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
            "name": "About Us",
            "item": "https://maskcontrols.com/about/"
          }
        ]
      },
      {
        "@type": "AboutPage",
        "name": "About MASK Control Systems Ltd",
        "description": "UK-based industrial automation and control engineering company founded in 2013 in Cullompton, Devon. Tri-certified in ISO 9001, ISO 17020, and ISO 17025.",
        "url": "https://maskcontrols.com/about/",
        "mainEntity": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "foundingDate": "2013",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 11, Simmonds Place, Kingsmill Industrial Estate",
            "addressLocality": "Cullompton",
            "addressRegion": "Devon",
            "postalCode": "EX15 1BS",
            "addressCountry": "GB"
          },
          "telephone": "+44 7412 999343",
          "email": "info@maskcontrols.com",
          "url": "https://maskcontrols.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What sets MASK Control Systems apart from traditional panel builders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are a full multidisciplinary engineering company, not just a panel shop or reseller. Every project is handled end-to-end by our in-house team of electrical, software, and mechanical engineers—eliminating contractor friction and third-party handoffs."
            }
          },
          {
            "@type": "Question",
            "name": "Can MASK support projects outside of the South West and Midlands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While our primary fabrication workshop is located in Mid Devon and our engineering hub operates in Birmingham, we regularly commission and support industrial automation systems across the entire UK, Europe, the Middle East, and worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "Are your engineering practices aligned with regulated industry standards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We hold ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Testing and Calibration) accreditations, and we align our control logic and panels with AS9100, DEFCON, and GAMP 5 validated standards."
            }
          },
          {
            "@type": "Question",
            "name": "Do you upgrade legacy PLC systems or only build new machines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A substantial portion of our work involves modernizing and migrating legacy PLC hardware (such as Siemens S5, legacy Mitsubishi, or Allen-Bradley SLC) to contemporary architectures with minimal planned production downtime."
            }
          },
          {
            "@type": "Question",
            "name": "Which PLC and automation platforms do you specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are vendor-independent and engineer systems across Siemens, Mitsubishi Electric, Unitronics, Rockwell Allen-Bradley, and Omron platforms, recommending the exact platform that fits your process requirements and budget."
            }
          }
        ]
      }
    ]
  };

  const clientLogos = [
    { name: "UK Ministry of Defence", src: "/images/UK-MOD-scaled.png" },
    { name: "Babcock International", src: "/images/Babcock-scaled.png" },
    { name: "Alstom", src: "/images/Alstom-scaled.png" },
    { name: "Emirates", src: "/images/Emirates-scaled.png" },
    { name: "Etihad Airways", src: "/images/Etihad-scaled.png" },
    { name: "Hydro", src: "/images/Hydro-scaled.png" },
    { name: "Varitas Marine", src: "/images/Varitas-Marine-scaled.png" },
    { name: "Dunlop Aircraft Tyres", src: "/images/Dunlop-scaled.png" },
    { name: "Field International", src: "/images/Field-international-scaled.png" },
    { name: "University of Exeter", src: "/images/University-of-Exeter-scaled.png" },
    { name: "University of Warwick", src: "/images/University-of-Warwick-scaled.png" },
    { name: "University of Southampton", src: "/images/University-of-Southampton-scaled.png" }
  ];

  const coreCapabilities = [
    {
      icon: Cog,
      title: "Bespoke Machine Design & Build",
      desc: "Turnkey mechanical and electrical fabrication of custom production machinery, feeding augers, and specialized test rigs.",
      link: "/design-build-services/"
    },
    {
      icon: Cpu,
      title: "Multi-Platform PLC Programming",
      desc: "Deterministic control logic programmed across Siemens, Mitsubishi, Unitronics, Rockwell Allen-Bradley, and Omron platforms.",
      link: "/plc-programming/"
    },
    {
      icon: Sliders,
      title: "HMI & SCADA Development",
      desc: "Intuitive operator interfaces, real-time telemetry dashboards, and auditable production tracking systems.",
      link: "/systems-integration/"
    },
    {
      icon: Layers,
      title: "Electrical Control Panel Manufacture",
      desc: "In-house panel design and fabrication to BS EN 61439 standards, with complete CAD electrical schematics.",
      link: "/electrical-control-panel-design/"
    },
    {
      icon: Workflow,
      title: "Systems Integration & Industrial Comms",
      desc: "Unified fieldbus networking via PROFINET, Modbus TCP, CC-Link IE, and EtherNet/IP, bridging shop-floor machines to MES.",
      link: "/systems-integration/"
    },
    {
      icon: Radio,
      title: "Remote Monitoring & Cloud Telemetry",
      desc: "Secure, air-gapped industrial connectivity for predictive asset monitoring, historical logging, and remote diagnostic triage.",
      link: "/remote-monitoring/"
    },
    {
      icon: TrendingUp,
      title: "Legacy PLC Upgrades & Migrations",
      desc: "Risk-mitigated modernization of obsolete PLCs and drives with drop-in I/O conversions and zero production disruptions.",
      link: "/automation/"
    },
    {
      icon: HardHat,
      title: "Installation, Commissioning & SAT",
      desc: "On-site mechanical placement, electrical wiring termination, live loop testing, and structured operator handover.",
      link: "/installation-commissioning/"
    },
    {
      icon: Wrench,
      title: "Ongoing Servicing & Breakdown Support",
      desc: "Rapid-response emergency breakdown diagnosis, preventative maintenance agreements, and complete spare parts management.",
      link: "/service-and-breakdown/"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001 - Quality Management",
      badge: "Quality Assurance",
      image: "/images/iso-9001.jpg",
      desc: "Ensures consistent, high-quality processes across every stage of our engineering work, from initial schematic drafts through to final manufacturing, FAT validation, and on-site commissioning."
    },
    {
      title: "ISO 17020 - Inspection Standards",
      badge: "Inspection Rigor",
      image: "/images/iso-17020.jpg",
      desc: "Demonstrates our capability to perform professional inspection and evaluation services with certified accuracy, technical impartiality, and complete documentation reliability."
    },
    {
      title: "ISO 17025 - Testing & Calibration",
      badge: "Measurement Precision",
      image: "/images/iso-17025.jpg",
      desc: "Confirms our technical competence in electrical testing and calibration, ensuring sensor accuracy, instrument precision, and compliance with stringent laboratory and industrial requirements."
    },
    {
      title: "SME UK Enterprise Award",
      badge: "Industry Excellence",
      image: "/images/sme-uk.jpg",
      desc: "Recognised for excellence in industrial automation and engineering services, honoring our technical leadership, bespoke solutions, and 13-year track record supporting UK manufacturing."
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Vendor Independent",
      desc: "We are not tied to any single PLC manufacturer or technology platform. We recommend and build with whatever is right for your process, whether that is Siemens, Mitsubishi, Unitronics, Allen-Bradley, or Omron."
    },
    {
      icon: Workflow,
      title: "Full Project Lifecycle",
      desc: "From initial feasibility through to years of post-installation support, we remain your engineering partner. There is no handoff to a third-party service team or disconnected subcontractors."
    },
    {
      icon: Cog,
      title: "Integration with Existing Systems",
      desc: "Not every project starts from scratch. We have extensive experience integrating with and upgrading legacy automation equipment, minimising disruption to live, ongoing production."
    },
    {
      icon: FileCheck2,
      title: "Regulated Environments Expertise",
      desc: "Our work in aerospace and defence, medical manufacturing, and calibration-critical applications means we are deeply familiar with the documentation, traceability, and compliance requirements sectors demand."
    },
    {
      icon: Users2,
      title: "The Right Size & Direct Engagement",
      desc: "Large enough to deliver complex, multi-disciplinary automation projects. Focused enough to remain genuinely responsive, accessible, and technically engaged at every stage."
    }
  ];

  const industriesList = [
    {
      name: "Food and FMCG",
      desc: "High-speed packaging, hygienic washdown control cabinets, pasteurization telemetry, and batching systems.",
      link: "/industries/food-fmcg-automation/",
      icon: Flame
    },
    {
      name: "Aerospace and Defence",
      desc: "AS9100/DEFCON aligned safety PLC programming, ground support equipment, and full ECO code traceability.",
      link: "/industries/aerospace-defence/",
      icon: Plane
    },
    {
      name: "Medical and Pharmaceutical",
      desc: "Validated clean-room automation, GAMP 5 documentation, 21 CFR Part 11 audit trails, and precise batch control.",
      link: "/industries/pharmaceutical-medical/",
      icon: FlaskConical
    },
    {
      name: "Marine and Offshore",
      desc: "Corrosion-resistant IP66/IP67 enclosures, vessel telemetry, ballast monitoring, and harsh environment reliability.",
      link: "/industries/marine-automation-systems/",
      icon: Ship
    },
    {
      name: "Automotive (Tier 2 & 3)",
      desc: "Repeatable assembly cells, cycle time optimization, IATF 16949 compliance, and robotic integration.",
      link: "/industries/automotive-automation-for-tier-2-3-suppliers/",
      icon: Factory
    },
    {
      name: "Logistics and Warehousing",
      desc: "High-throughput conveyor routing, automated guided vehicles (AGV), sorters, and warehouse management systems.",
      link: "/industries/logistics-warehousing-automation-solutions/",
      icon: Truck
    },
    {
      name: "Higher Education & Research",
      desc: "Specialist test rigs, sensor calibration arrays, and prototype research machinery for leading UK universities.",
      link: "/industries/",
      icon: GraduationCap
    }
  ];

  const faqs = [
    {
      q: "What sets MASK Control Systems apart from traditional panel builders?",
      a: "We are not a reseller or basic assembly shop; we are a full multidisciplinary engineering company. Every project is handled end-to-end by our in-house team of electrical, software, and mechanical engineers—providing a single accountable engineering partner without sub-contractor handoffs."
    },
    {
      q: "Can MASK support projects outside of the South West and Midlands?",
      a: "Yes. While our primary fabrication workshop is located in Mid Devon and our engineering hub operates in Birmingham, we regularly commission and support industrial automation systems across the entire UK, Europe, the Middle East, and worldwide."
    },
    {
      q: "Are your engineering practices aligned with regulated industry standards?",
      a: "Yes. We hold ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Testing and Calibration) accreditations, and we align our control logic and panels with AS9100, DEFCON, and GAMP 5 validated standards."
    },
    {
      q: "Do you upgrade legacy PLC systems or only build new machines?",
      a: "A substantial portion of our work involves modernizing and migrating legacy PLC hardware (such as Siemens S5, legacy Mitsubishi, or Allen-Bradley SLC) to contemporary architectures with minimal planned production downtime."
    },
    {
      q: "Which PLC and automation platforms do you specialize in?",
      a: "We are vendor-independent and engineer systems across Siemens, Mitsubishi Electric, Unitronics, Rockwell Allen-Bradley, and Omron platforms, recommending the exact platform that fits your process requirements and budget."
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
            <span className="text-[#6DA7BF] font-medium">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading, Opening Statement & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Building2 className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK Industrial Automation • Established 2013</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                About MASK Control Systems | <br />
                <span className="text-[#6DA7BF]">UK Industrial Automation Engineers</span>
              </h1>

              {/* Section 1: Opening Statement */}
              <div className="space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                <p>
                  MASK Control Systems is a UK-based industrial automation and control engineering company, founded in 2013 and headquartered in Cullompton, Devon.
                </p>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  We design, build, install, and support bespoke automation systems for manufacturers across the UK, Europe, the Middle East, and beyond. From PLC programming and electrical control panel design to full turnkey machine builds and systems integration, we deliver complete engineering solutions under one roof.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1 border-t border-white/10">
                  Our clients include some of the most demanding organisations in the world, including the <strong className="text-white font-medium">UK Ministry of Defence, Babcock, Alstom, Emirates, Etihad, Hydro, Varitas Marine</strong>, and several leading UK universities.
                </p>
              </div>

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

              {/* Key Heritage Numbers */}
              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xl font-bold text-white">Since 2013</div>
                  <div className="text-xs text-slate-400">13+ Years Engineering</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">Triple ISO</div>
                  <div className="text-xs text-slate-400">9001 • 17020 • 17025</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">3 Continents</div>
                  <div className="text-xs text-slate-400">Worldwide Deployment</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">100% In-House</div>
                  <div className="text-xs text-slate-400">No Contractor Handoffs</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Engineering Imagery */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/About-Mask-Control-Systems.jpg"
                    alt="About MASK Control Systems Ltd - Industrial Automation Facility"
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
                    <span className="text-slate-400">HEADQUARTERS:</span>
                    <span className="text-[#6DA7BF]">CULLOMPTON, DEVON</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CORE ETHOS:</span>
                    <span className="text-emerald-400">BUILT ON ENGINEERING, NOT SALES</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">DELIVERY CAPABILITY:</span>
                    <span className="text-slate-200">END-TO-END BESPOKE SYSTEMS</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK WORKSHOP: EX15 1BS</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLIENT TRUST BAR (12 Logos)
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted by Global Industry Leaders, Defence Contractors &amp; UK Universities:</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
            {clientLogos.map((client, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl px-4 py-2.5 h-12 sm:h-14 flex items-center justify-center shadow-md shadow-black/30 border border-white hover:scale-105 transition-all duration-200"
                title={client.name}
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
      </section>

      {/* =========================================
          SECTION 2: WHAT WE DO (End-to-End Automation Engineering)
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Complete In-House Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              End-to-End Automation Engineering
            </h2>
            <div className="mt-4 space-y-3 text-base text-slate-300 font-light leading-relaxed">
              <p className="text-lg font-medium text-white">
                We are not a reseller. We are an engineering company.
              </p>
              <p>
                Every project we take on is handled by our in-house team of mechanical, electrical, and software engineers, working together from the first consultation through to long-term support. This means one accountable partner, one point of contact, and no handoffs between contractors.
              </p>
            </div>
          </div>

          {/* Core Capabilities Grid (9 capabilities) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={idx} 
                  className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      href={cap.link}
                      className="text-xs font-semibold text-[#6DA7BF] hover:text-white transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0C121C] to-[#111A29] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base font-bold text-white">
                Whether you need a single control panel or a fully integrated production line
              </div>
              <p className="text-xs text-slate-400 font-light">
                We have the engineering depth, workshop space, and multi-disciplinary staff to deliver it on schedule.
              </p>
            </div>
            <Link
              href="/contact/"
              className="px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5B95AD] transition-all shrink-0"
            >
              Discuss Your System Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR STORY (Built on Engineering, Not Sales)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Clock className="w-3.5 h-3.5" />
                <span>Our Heritage Since 2013</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Built on Engineering, Not Sales
              </h2>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed font-light">
                <p>
                  MASK Control Systems was established in 2013 with a straightforward goal: to provide manufacturers with the kind of high-quality, bespoke automation engineering that had previously only been accessible to large-scale operations.
                </p>
                <p>
                  Over the past 13 years, we have grown into a trusted engineering partner for manufacturers across multiple industries and three continents. Our work spans food and FMCG, aerospace and defense, medical device manufacturing, marine, automotive, and logistics.
                </p>
                <p>
                  We are based in Mid Devon, one of the most manufacturing-dense regions in the UK, and we carry a strong understanding of the operational realities facing UK manufacturers today: skills shortages, legacy equipment, rising energy costs, and the pressure to do more with less.
                </p>
                <p className="text-white font-medium text-lg pt-2 border-t border-white/10">
                  That understanding shapes everything we build.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/projects/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all"
                >
                  <span>View Full Service Scope</span>
                </Link>
              </div>
            </div>

            {/* Right Story Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Our Engineering Commitment.jpg"
                    alt="Our Engineering Commitment - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 bg-[#0C121C] space-y-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Direct Engineering Leadership</div>
                      <div className="text-xs text-slate-400">Led by Adam &amp; Senior Chartered Specialists</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    From our headquarters in Cullompton, we oversee CAD schematics, in-house panel assembly, programming, and rigorous Factory Acceptance Testing before any system departs for site deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CERTIFICATIONS (Highest Industry Standards)
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Accredited Compliance &amp; Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Certified to the Highest Industry Standards
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Our certifications reflect a commitment to quality, accuracy, and safety that runs through every project we deliver:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl bg-[#0C121C] border border-white/10 overflow-hidden shadow-xl hover:border-[#6DA7BF]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-white p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#6DA7BF]/10 text-[#6DA7BF] border border-[#6DA7BF]/20">
                      {cert.badge}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {cert.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>AUDIT-VERIFIED ACCREDITATION</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: WHY MANUFACTURERS CHOOSE MASK
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineering Distinction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A Different Kind of Engineering Partner
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              UK manufacturers choose MASK Control Systems because we combine deep technical capability with commercial pragmatism and complete transparency:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}

            {/* 6th Card: Summary Callout */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#0C121C] to-[#121E2E] border border-[#6DA7BF]/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#6DA7BF] uppercase tracking-wider">
                  Partner With Us
                </span>
                <h3 className="text-lg font-bold text-white">Direct Access to Engineering Experts</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  No sales commission reps. You talk directly with systems engineers who review your schematics, understand your PLC tags, and take personal responsibility for line uptime.
                </p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#6DA7BF] hover:text-white transition-colors"
              >
                <span>Request a technical consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: INDUSTRIES WE SUPPORT
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
                <Factory className="w-3.5 h-3.5" />
                <span>Cross-Sector Depth</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Engineering Experience Across Demanding Sectors
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-light max-w-2xl">
                Each sector brings its own standards, terminology, and operational pressures. We work to understand them before we start designing:
              </p>
            </div>
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors shrink-0"
            >
              <span>Explore All Sector Hubs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.map((ind, idx) => {
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
          SECTION 7: LOCATION AND REACH
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10" id="location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Strategic Regional &amp; Global Hubs</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Based in Devon. <br />
                <span className="text-[#6DA7BF]">Deployed Worldwide.</span>
              </h2>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed font-light">
                <p>
                  Our primary manufacturing and engineering facility is located at:
                </p>
                <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-2">
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#6DA7BF]" />
                    <span>MASK Control Systems Ltd</span>
                  </div>
                  <p className="text-sm text-slate-300 font-mono">
                    Unit 11, Simmonds Place, Kingsmill Industrial Estate,<br />
                    Cullompton, Devon, EX15 1BS, United Kingdom
                  </p>
                  <div className="pt-2 text-xs text-slate-400 flex flex-wrap gap-4">
                    <span>Direct Engineering Line: <a href="tel:+447412999343" className="text-[#6DA7BF] hover:underline font-semibold">+44 7412 999343</a></span>
                  </div>
                </div>
                <p>
                  From this base, we support projects across the UK, with particular strength across the <strong className="text-white font-medium">South West, South Wales, and the Midlands</strong>.
                </p>
                <p>
                  We also deliver, commission, and support automation systems in <strong className="text-white font-medium">Europe, the Middle East, and international markets</strong> where high-integrity British engineering is demanded.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Get in Touch with our Engineering Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Reach Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">South West &amp; South Wales</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Rapid same-day response across Devon, Cornwall, Somerset, Bristol, and South Wales manufacturing corridors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Midlands Engineering Hub</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Dedicated regional support for automotive Tier 2/3 suppliers and heavy manufacturing throughout Birmingham and the West Midlands.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">UK Nationwide Coverage</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Turnkey installations, machine upgrades, and scheduled preventative servicing delivered across England, Wales, and Scotland.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">International Deployments</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Commissioning engineers dispatched for on-site SAT across Europe, Middle Eastern aviation hubs, and North American plants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FREQUENTLY ASKED QUESTIONS (Centered)
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Company Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Key questions manufacturers and procurement teams ask about MASK Control Systems:
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
          CTA SECTION
      ========================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0C121C] to-[#070D16] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-6">
            <Sparkles className="w-4 h-4 text-[#6DA7BF]" />
            <span>Turnkey Engineering Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Discuss Your Project?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Whether you are planning a new production line, facing a legacy system upgrade, or dealing with an immediate breakdown, our engineering team is ready to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/services/"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <span>View Our Services</span>
              <ArrowRight className="w-4 h-4" />
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
              <span>Cullompton, Devon Headquarters</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>ISO 9001 • 17020 • 17025 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>UK &amp; International Capability</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
