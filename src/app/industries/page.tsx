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
  Award,
  Building2,
  Anchor,
  Plane,
  HeartPulse,
  Truck,
  Droplets,
  Flame,
  ArrowUpRight
} from "lucide-react";
import { industriesList, servicesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Automation by Sector | Industries We Serve | MASK Control Systems Ltd",
  description: "UK-engineered industrial automation, bespoke control panels, and PLC systems delivered across Food & FMCG, Aerospace, Defence, Pharma, Marine, Automotive, Logistics, and Water Utilities.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/"
  },
  openGraph: {
    title: "Industrial Automation by Sector | Industries We Serve | MASK Control Systems Ltd",
    description: "UK-engineered industrial automation, bespoke control panels, and PLC systems delivered across Food & FMCG, Aerospace, Defence, Pharma, Marine, Automotive, Logistics, and Water Utilities.",
    url: "https://maskcontrols.com/industries/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/About-Mask-Control-Systems.jpg",
        width: 1200,
        height: 630,
        alt: "Industries We Serve - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function IndustriesHubPage() {
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
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Industrial Automation Solutions by Industry Sector",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Comprehensive automation engineering, bespoke control panels, and PLC system solutions designed for high-compliance, high-precision industrial sectors.",
        "hasPart": industriesList.map((ind) => ({
          "@type": "Service",
          "name": ind.title,
          "url": `https://maskcontrols.com${ind.href}`,
          "description": ind.description
        }))
      }
    ]
  };

  const industrySectors = [
    {
      title: "Food & FMCG Automation",
      subtitle: "Hygienic, High-Speed Packaging & Batching Automation",
      href: "/industries/food-fmcg-automation/",
      image: "/images/Food & FMCG Automation.jpg",
      alt: "Food and FMCG Automation Solutions - MASK Control Systems Ltd",
      icon: Flame,
      compliance: ["FDA Compliant", "BRCGS Food Safety", "IP69K Washdown", "Hygienic Design"],
      desc: "Delivering hygienic stainless-steel control enclosures, high-throughput packaging lines, recipe-based batching automation, and Clean-in-Place (CIP) systems that guarantee continuous uptime and strict regulatory compliance.",
      capabilities: [
        "Stainless steel IP66/IP69K washdown control panels",
        "Precision multi-ingredient batching and recipe management",
        "High-speed conveyor tracking, sorting, and checkweighing",
        "Automated end-of-line robotic cartoning and palletizing"
      ]
    },
    {
      title: "Aerospace & Defence",
      subtitle: "Mission-Critical Systems for Extreme Precision & Safety",
      href: "/industries/aerospace-defence/",
      image: "/images/Aerospace & Defence Automation.jpg",
      alt: "Aerospace and Defence Automation Engineering - MASK Control Systems Ltd",
      icon: Plane,
      compliance: ["UK MOD Standards", "ISO 17025 Calibrated", "SIL 3 / Category 4", "Fail-Safe Redundancy"],
      desc: "Trusted by the UK Ministry of Defence, Babcock International, and Dunlop Aircraft Tyres for high-precision component endurance test rigs, Ground Support Equipment (GSE), and safety-critical control architectures.",
      capabilities: [
        "Bespoke high-pressure hydraulic & endurance test rigs",
        "Mission-critical Ground Support Equipment (GSE) controls",
        "Encrypted telemetry and real-time sensor recording",
        "Full traceability, calibration certs, and formal SAT sign-off"
      ]
    },
    {
      title: "Pharmaceutical & Medical",
      subtitle: "Validated Cleanroom Control & Precision Process Automation",
      href: "/industries/pharmaceutical-medical/",
      image: "/images/Pharmaceutical & Medical Automation.jpg",
      alt: "Pharmaceutical and Medical Automation Solutions - MASK Control Systems Ltd",
      icon: HeartPulse,
      compliance: ["GAMP 5 Guidelines", "21 CFR Part 11", "Cleanroom Class 100", "EU Annex 11"],
      desc: "Engineering compliant automated machinery, sterile filling controls, precision chemical dosing, and batch serialization systems designed strictly to GAMP 5 and international pharmaceutical regulatory standards.",
      capabilities: [
        "Validated cleanroom-compatible automation enclosures",
        "Precision peristaltic dosing and fluid dispensing loops",
        "Audit trail tracking and automated batch record generation",
        "Comprehensive DQ, IQ, and OQ validation documentation"
      ]
    },
    {
      title: "Marine Automation Systems",
      subtitle: "Rugged Offshore Enclosures & Saltwater-Resistant Telemetry",
      href: "/industries/marine-automation-systems/",
      image: "/images/Marine Automation Systems.jpg",
      alt: "Marine and Offshore Automation Systems - MASK Control Systems Ltd",
      icon: Anchor,
      compliance: ["Lloyd's Register", "Bureau Veritas Approved", "Salt-Spray Resistant", "DNV-GL Standards"],
      desc: "Designing marine-grade 316 stainless control cabinets, offshore life-support shelter controls, vessel power distribution, and subsea telemetry test rigs built to withstand the harshest maritime conditions on earth.",
      capabilities: [
        "Temporary refuge shelter environmental life-support controls",
        "Salt-spray and corrosion-resistant marine electrical cabinets",
        "Subsea umbilical telemetry recording and sensor test stands",
        "Vessel power monitoring, ballast automation, and generator sync"
      ]
    },
    {
      title: "Automotive (Tier 2/3)",
      subtitle: "High-Throughput Robotic Cells & Automated Assembly",
      href: "/industries/automotive-automation-for-tier-2-3-suppliers/",
      image: "/images/Automotive Automation (Tier 2_3).jpg",
      alt: "Automotive Automation Solutions for Tier 2 and 3 Suppliers - MASK Control Systems Ltd",
      icon: Building2,
      compliance: ["IATF 16949 Standards", "EN 60204-1 Safety", "High OEE Performance", "Profinet / CC-Link"],
      desc: "Empowering automotive component manufacturers with robotic welding integration, automated assembly fixtures, stamping press safety interlocks, and Just-In-Time (JIT) line synchronization.",
      capabilities: [
        "Robotic handling and multi-axis assembly cell coordination",
        "Automated torque verification, vision inspection, and Poka-Yoke",
        "High-speed line synchronization and buffer feed regulation",
        "Press automation, light curtains, and Category 4 safety zones"
      ]
    },
    {
      title: "Logistics & Warehousing",
      subtitle: "Smart Conveyor Networks, AGVs & Robotic Palletizing",
      href: "/industries/logistics-warehousing-automation-solutions/",
      image: "/images/Logistics & Warehousing Automation.jpg",
      alt: "Logistics and Warehousing Automation Solutions - MASK Control Systems Ltd",
      icon: Truck,
      compliance: ["Warehouse Management (WMS)", "High-Speed Sortation", "AGV Interoperability", "CE/UKCA Certified"],
      desc: "Transforming distribution hubs with high-speed intelligent sortation conveyors, Autonomous Mobile Robot (AMR/AGV) fleet handshakes, automated palletizing cells, and seamless WMS/ERP connectivity.",
      capabilities: [
        "High-throughput carton and tote sorting conveyor controls",
        "Robotic palletizing, layer forming, and stretch wrapper integration",
        "Real-time bidirectional integration with WMS, ERP, and scan systems",
        "Variable Speed Drive (VFD) energy management and dynamic braking"
      ]
    },
    {
      title: "Water & Utilities",
      subtitle: "Automated Pumping Stations, Dosing & SCADA Telemetry",
      href: "/industries/water-utilities-automation-solutions/",
      image: "/images/Water & Utilities Automation.jpg",
      alt: "Water and Utilities Automation Engineering - MASK Control Systems Ltd",
      icon: Droplets,
      compliance: ["WIRAS Approved", "ATEX Zone 1/2 Certified", "Secure RTU Telemetry", "Energy Optimization"],
      desc: "Delivering reliable motor control centers (MCCs), automated chemical dosing skids, wastewater lift station controls, and cellular remote telemetry units (RTUs) for municipal and industrial utility providers.",
      capabilities: [
        "Automated multi-pump lead/lag staging and level control",
        "Precision chemical dosing, pH monitoring, and chlorine regulation",
        "Remote Telemetry Units (RTUs) with 4G/satellite failover backhaul",
        "ATEX hazardous area rated control panels and intrinsically safe barriers"
      ]
    }
  ];

  const crossSectorChallenges = [
    {
      title: "Regulatory Compliance & Auditability",
      desc: "Every sector has strict regulatory requirements—from FDA and BRCGS in food to GAMP 5 in pharma and Lloyd's in marine. We engineer full traceability and formal documentation into every system."
    },
    {
      title: "Obsolescence Management & Modernization",
      desc: "Decades-old machinery with discontinued PLCs, broken relays, and lost schematics threatens production. We execute zero-disruption migrations to modern Siemens, Mitsubishi, and Unitronics hardware."
    },
    {
      title: "Throughput Optimization & Cycle Time Reduction",
      desc: "Micro-bottlenecks between uncoordinated machines steal valuable factory capacity. Our structured systems integration synchronizes lines to unlock up to 25% higher output."
    },
    {
      title: "Real-Time Telemetry & Preventative Maintenance",
      desc: "Blind operational guesswork leads to catastrophic downtime. We install secure IIoT telemetry providing 24/7 cloud dashboards, automated alerts, and predictive wear analytics."
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
            <span className="text-[#6DA7BF] font-medium">Industries</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Factory className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK Engineering • Multi-Sector Automation Authority</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Industrial Automation Solutions Engineered for Every Sector
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                From mission-critical defence systems and sterile pharmaceutical cleanrooms to high-speed automotive assembly and hygienic food packaging, MASK Control Systems delivers bespoke engineering tailored to the exact regulatory and operational demands of each industry.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Discuss Your Sector Project</span>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">7 Critical</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sectors Supported</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">100% Bespoke</div>
                  <div className="text-xs text-slate-400 mt-0.5">Turnkey Engineering</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">UK &amp; Global</div>
                  <div className="text-xs text-slate-400 mt-0.5">Deployment Capability</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/manufacturing.jpg"
                    alt="Industrial Automation by Industry Sector - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Multi-Industry Standards</div>
                      <div className="text-[11px] text-[#6DA7BF]">ISO 9001 • BS 7671 • GAMP 5 • ATEX • MOD</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      CERTIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. INTRO SECTION (Cross-Sector Engineering)
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <span>Engineering Beyond Generic Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Sector-Specific Automation Engineering Matters
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                Industrial automation is never one-size-fits-all. A control panel built for high-speed automotive stamping requires fundamentally different ingress protection, safety interlocks, and bus protocols than a stainless cleanroom enclosure designed for sterile pharmaceutical packaging.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Over 13 years, MASK Control Systems has developed deep domain knowledge across Britain’s most demanding industries. Our multi-disciplinary team brings together mechanical design, electrical control manufacturing, and software programming that respects the unique regulatory standards, environmental hazards, and operational realities of your plant.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Domain Compliance</h3>
                    <p className="text-xs text-slate-400 mt-1">Full documentation, validation protocols (DQ/IQ/OQ/SAT), and certification for every sector.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Cross-Sector Innovation</h3>
                    <p className="text-xs text-slate-400 mt-1">We apply aerospace-grade telemetry precision and marine durability to commercial factory floors.</p>
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
                  <span>The Sector Architecture Hub</span>
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  This hub connects all our specialized industry sectors. As MASK Control Systems continues to expand, new specialized sub-services, case studies, and engineering capabilities are continuously integrated into each sector pipeline.
                </p>

                <div className="space-y-3 text-xs text-slate-300 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Food &amp; FMCG: Washdown &amp; Recipe Batching</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Aerospace &amp; Defence: GSE &amp; Test Rigs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Pharmaceutical: GAMP 5 &amp; Cleanroom Systems</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Marine, Automotive, Logistics &amp; Utilities</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Looking for a specific industry?</div>
                  <Link 
                    href="#sectors" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Browse All Sectors</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. THE 7 CORE INDUSTRY SECTORS (Detailed Authority Hub Cards)
      ========================================= */}
      <section id="sectors" className="py-20 bg-[#0A101A] border-y border-white/5 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Specialized Automation by Industry
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Explore our dedicated industry engineering pages below. Each sector features bespoke hardware architectures, compliant programming standards, and turnkey project delivery.
            </p>
          </div>

          <div className="space-y-12">
            {industrySectors.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#0C121C] border border-white/10 overflow-hidden hover:border-[#6DA7BF]/40 transition-all duration-300 shadow-2xl group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Media Column */}
                    <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8">
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#090E16] border border-white/10 shadow-lg">
                        <Image
                          src={sector.image}
                          alt={sector.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-60" />
                        
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0C121C]/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-[#6DA7BF] flex items-center gap-1.5">
                          <IconComp className="w-3.5 h-3.5 text-[#6DA7BF]" />
                          <span>SECTOR 0{idx + 1}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-8 lg:pl-0 flex flex-col justify-between">
                      <div>
                        {/* Compliance Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {sector.compliance.map((comp, cIdx) => (
                            <span 
                              key={cIdx} 
                              className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#6DA7BF]"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                          <Link href={sector.href} className="hover:underline">
                            {sector.title}
                          </Link>
                        </h3>

                        <div className="text-xs sm:text-sm font-semibold text-slate-300 mb-4">
                          {sector.subtitle}
                        </div>

                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                          {sector.desc}
                        </p>

                        {/* 4 Technical Capabilities */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10 mb-6">
                          {sector.capabilities.map((cap, capIdx) => (
                            <div key={capIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Link */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <Link
                          href={sector.href}
                          className="px-6 py-3 rounded-xl bg-white/5 hover:bg-[#6DA7BF] text-white hover:text-[#070D16] border border-white/10 hover:border-[#6DA7BF] font-bold text-xs tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2 group/btn"
                        >
                          <span>Explore {sector.title} Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>

                        <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500">
                          UK &amp; Worldwide Delivery
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          4. COMMON CHALLENGES WE SOLVE ACROSS SECTORS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Cross-Sector Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Universal Production Challenges We Overcome
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Regardless of your manufacturing domain, our engineering methodology systematically eliminates downtime, compliance risks, and throughput waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crossSectorChallenges.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          5. OUR 6-STEP SECTOR WORKFLOW
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Proven Project Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Turnkey Sector Engineering Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              A structured, risk-managed path from exploratory audit and mechanical 3D modeling to SAT handover and continuous SLA support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Sector & Standards Audit",
                desc: "Reviewing your plant layout, environmental conditions (ATEX, washdown, cleanroom), and sector compliance regulations."
              },
              {
                step: "02",
                title: "Mechanical CAD & Architecture",
                desc: "Complete 2D/3D CAD modeling of machinery, panel footprint layouts, and fail-safe safety circuit zoning."
              },
              {
                step: "03",
                title: "Panel Build & Hardware Integration",
                desc: "Manufacturing bespoke electrical control cabinets in our UK facility built strictly to BS 7671 and EN 60204-1."
              },
              {
                step: "04",
                title: "PLC Programming & Simulation",
                desc: "Writing structured logic across Siemens, Mitsubishi, or Unitronics with simulated offline testing (PLCSIM)."
              },
              {
                step: "05",
                title: "Installation & SAT Validation",
                desc: "On-site mechanical placement, electrical containment hookup, 100% I/O checking, and formal Site Acceptance Testing."
              },
              {
                step: "06",
                title: "Handover & 24/7 SLA Support",
                desc: "Operator training, As-Built documentation delivery, remote cloud telemetry, and rapid emergency on-site dispatch."
              }
            ].map((s, idx) => (
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
          6. CROSS-LINKING CORE SERVICES HUB
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Core Engineering Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Services Delivered Across Every Sector
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
                Every sector solution draws upon our 8 core industrial engineering service disciplines.
              </p>
            </div>
            <Link 
              href="/services/" 
              className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] inline-flex items-center gap-1.5"
            >
              <span>👉 View All Services Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {servicesList.map((srv, idx) => (
              <Link
                key={idx}
                href={srv.href}
                className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#6DA7BF] font-semibold">
                  <span>Explore Service</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          7. CALL TO ACTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#070D16] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Multi-Sector Automation Partner
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Modernize Your Industry&apos;s Production Systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Speak directly with our UK engineering team. Whether you need a feasibility study for a hygienic food line, high-pressure aerospace test equipment, or a plantwide SCADA upgrade, we are ready to assist.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact/"
                className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-xl flex items-center gap-2 group"
              >
                <span>Request a Consultation</span>
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
              Direct Engineering Consultation • Tailored Sector Scoping • Worldwide Deployment Reach
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
