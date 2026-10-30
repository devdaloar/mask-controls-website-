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
  Anchor,
  Ship,
  Waves,
  Sun,
  Eye,
  LifeBuoy
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Marine Automation Systems & Offshore Vessel Control | MASK Control Systems Ltd",
  description: "UK-engineered marine automation solutions and offshore vessel control systems. DNV-aligned, IP68/IP69K corrosion-resistant PLC panels, propulsion integration, and bridge telemetry worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/marine-automation-systems/"
  },
  openGraph: {
    title: "Marine Automation Systems & Offshore Vessel Control | MASK Control Systems Ltd",
    description: "UK-engineered marine automation solutions and offshore vessel control systems. DNV-aligned, IP68/IP69K corrosion-resistant PLC panels, propulsion integration, and bridge telemetry worldwide.",
    url: "https://maskcontrols.com/industries/marine-automation-systems/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Marine Automation Systems.jpg",
        width: 1200,
        height: 630,
        alt: "Marine Automation Systems & Offshore Vessel Control - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function MarineAutomationSystemsPage() {
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
            "name": "Marine Automation Systems",
            "item": "https://maskcontrols.com/industries/marine-automation-systems/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Marine Automation Systems & Offshore Control Engineering",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke marine automation engineering, DNV-aligned IP68/IP69K stainless steel control panels, propulsion systems integration, and bridge SCADA for vessels and offshore installations.",
        "areaServed": ["United Kingdom", "Europe", "North America", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What standards does MASK design marine automation systems to?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We align our marine automation designs with DNV standards and IMO regulations, and we build in the IP ratings, corrosion resistance, and vibration tolerance that shipboard conditions require."
            }
          },
          {
            "@type": "Question",
            "name": "Can you retrofit existing vessels or offshore assets with new control systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly retrofit aging control systems on existing vessels and offshore facilities, working within the space and access constraints those projects typically involve."
            }
          },
          {
            "@type": "Question",
            "name": "How do you address corrosion and saltwater exposure in your panel designs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We specify IP68 and IP69K rated enclosures where required, and we use 316L stainless steel construction in applications where continuous saltwater exposure demands it."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support remote monitoring for vessels that spend extended periods at sea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our remote monitoring solutions provide condition monitoring for propulsion and auxiliary systems, helping crews catch developing issues before they become at-sea failures."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver marine automation projects outside the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver projects across three continents, applying the same engineering standards and documentation discipline wherever the vessel or facility is based."
            }
          }
        ]
      }
    ]
  };

  const warningSigns = [
    {
      title: "Aging Non-Marine Rated PLCs",
      desc: "Control panels or PLCs currently in service are aging, suffering heat stress, and no longer rated for continuous maritime operating conditions."
    },
    {
      title: "Manual Machinery Monitoring",
      desc: "Propulsion, fuel transfer, or auxiliary power systems are monitored manually, with zero real-time visibility into operating health or faults."
    },
    {
      title: "Recurring Enclosure Corrosion",
      desc: "Electrical enclosures and terminal boxes are experiencing recurring corrosion-related component failures and intermittent grounding faults."
    },
    {
      title: "High-Risk At-Sea Downtime",
      desc: "Unscheduled downtime at sea creates disproportionate operational hazards, salvage expenses, and charter-party penalty exposure."
    },
    {
      title: "Classification Compliance Failures",
      desc: "A vessel refit or survey has revealed that legacy control equipment no longer satisfies current DNV or IMO classification rules."
    },
    {
      title: "Marine Engineering Skills Shortage",
      desc: "Your internal technical team lacks marine-certified automation specialists experienced in saltwater resilience and shipboard EMC."
    }
  ];

  const marineServices = [
    {
      id: "plc-programming",
      title: "PLC Programming & Control Systems",
      tagline: "Propulsion, Auxiliary & High-Reliability Logic",
      description: "We engineer robust control logic for propulsion, auxiliary, and monitoring systems using industry-leading platforms such as Siemens, Mitsubishi, and Unitronics. Our programming is meticulously designed to meet the rigorous reliability standards of marine operations, ensuring your critical systems remain stable, responsive, and fully functional in even the most demanding at-sea conditions.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      points: [
        "Siemens S7-1500, Mitsubishi MELSEC iQ-R, and Unitronics UniStream platforms",
        "Deterministic control logic for main engines, bow thrusters, and generator sets",
        "Dual-redundant processor configurations ensuring continuous voyage availability",
        "Full software documentation, revision logs, and class-survey-ready schematics"
      ]
    },
    {
      id: "control-panels",
      title: "Electrical Control Panel Design & Build",
      tagline: "IP68/IP69K 316L Stainless Enclosures for Extreme Saltwater Environments",
      description: "We specialize in the design and manufacture of IP-rated, corrosion-resistant control panels engineered to endure the harsh realities of shipboard environments. Every enclosure is constructed to withstand continuous saltwater exposure, high humidity, and persistent vibration, ensuring your electrical infrastructure remains protected, compliant, and operational throughout its entire service life.",
      image: "/images/Custom Electrical Control Panel Design & Manufacturing.jpg",
      points: [
        "Marine-grade 316L stainless steel enclosures with custom anti-vibration mountings",
        "IP66, IP68, and IP69K sealed ingress protection preventing saltwater ingress",
        "Comprehensive EMC shielding and marine-certified terminal assemblies",
        "100% Factory Acceptance Testing (FAT) with full electrical isolation verification"
      ]
    },
    {
      id: "systems-integration",
      title: "Systems Integration",
      tagline: "Harmonizing Propulsion, Power Management & Auxiliary Machinery",
      description: "We consolidate your vessel's propulsion, power management, and monitoring systems into a single, cohesive control architecture. By ensuring these critical systems work in harmony rather than in isolation, we significantly improve overall operational efficiency, streamline data flow, and simplify the management of complex onboard technologies for your crew.",
      image: "/images/Automation System Integration.jpg",
      points: [
        "Seamless integration of main engines, power generation, ballasting, and bilge systems",
        "NMEA 0183/2000, Modbus RTU/TCP, PROFINET, and CANbus field networking",
        "Automated generator load sharing, synchronizing, and blackout recovery logic",
        "Single accountable UK engineering team managing the complete integration scope"
      ]
    },
    {
      id: "hmi-scada",
      title: "HMI & SCADA Development",
      tagline: "Day/Night High-Contrast Bridge & Engine Room Operator Interfaces",
      description: "We develop intuitive bridge and control room interfaces tailored to rigorous marine visibility standards. These solutions provide your crew with clear, readable control in all lighting conditions from the intense glare of bright daylight to low-light night operation greatly enhancing safety, reaction times, and situational awareness across the vessel.",
      image: "/images/HMI INTEGRATION.jpg",
      points: [
        "High-contrast color modes optimized for full noon sunlight and red-light night vision",
        "Intuitive touchscreens and physical rotary/pushbutton redundant tactile controls",
        "Centralized alarm prioritization conforming to IMO bridge alert management standards",
        "Historical engine logging, fuel consumption trends, and trip diagnostics"
      ]
    },
    {
      id: "remote-monitoring",
      title: "Remote Monitoring & Telemetry",
      tagline: "Continuous Vessel Health Oversight & Proactive Fault Detection",
      description: "Our advanced remote monitoring solutions offer continuous, real-time condition tracking for your propulsion and auxiliary machinery. By providing constant oversight, we enable your team to identify and resolve developing faults early, effectively preventing minor technical issues from escalating into costly or hazardous at-sea downtime.",
      image: "/images/TELEMETRY SYSTEM & TEST RIG.jpg",
      points: [
        "Satellite and 4G/5G coastal telemetry transmission for real-time fleet oversight",
        "Continuous monitoring of bearing temperatures, vibration signatures, and lube pressures",
        "Automated shore-side engineering alerts before critical thresholds cause at-sea trips",
        "Fleet-wide performance benchmarking and preventative maintenance scheduling"
      ]
    },
    {
      id: "installation-commissioning",
      title: "Installation & Commissioning",
      tagline: "Newbuilds & Complex Dockside Retrofits Within Tight Berth Windows",
      description: "We manage end-to-end on-site installation and commissioning for both newbuilds and complex retrofits. Our team is expert at navigating the specific space and access constraints of marine environments, ensuring your systems are deployed correctly, safely, and efficiently without disrupting your ongoing vessel operations.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      points: [
        "Dockside and shipyard commissioning completed within scheduled drydock windows",
        "Navigating confined engine room spaces, watertight bulkheads, and cable transits",
        "Sea trials, crash-stop testing, and full machinery load validation",
        "Comprehensive crew handover training with updated as-built drawing packages"
      ]
    }
  ];

  const specializedOffshoreSystems = [
    {
      title: "Temporary Refuge (TR) Shelter Systems",
      subtitle: "Offshore Platform Safety, Gas Ingress & Air Integrity Control",
      image: "/images/TEMPORARY REFUGE SHELTER SYSTEM.jpg",
      desc: "Bespoke automation control panels and sensor networks for offshore platform Temporary Refuge (TR) shelters. Engineered to monitor atmospheric integrity, toxic/flammable gas detection, positive pressurization dampers, and automated emergency HVAC isolation in high-hazard marine energy zones.",
      tags: ["ATEX / IECEx Rated", "Fail-Safe Dampers", "Gas Ingress Telemetry", "SIL 2/3 Safety"]
    },
    {
      title: "Marine Telemetry Systems & Rig Test Rigs",
      subtitle: "Offshore Dynamic Load & Hydraulic Endurance Instrumentation",
      image: "/images/TELEMETRY SYSTEM & TEST RIG.jpg",
      desc: "Precision electronic instrumentation, high-speed telemetry cabinets, and specialized test rigs for offshore subsea equipment, winch systems, and deepwater hydraulic valves. Engineered to capture mission-critical strain, torque, and pressure data in severe sea states.",
      tags: ["High-G Shock Resistant", "Multi-Channel Telemetry", "Real-Time DAQ", "Calibrated ISO 17025"]
    }
  ];

  const compliancePillars = [
    {
      icon: Ship,
      title: "DNV & Class Alignment",
      desc: "Engineered to satisfy DNV, Lloyd's Register, and IMO maritime standards, ensuring seamless survey acceptance and classification sign-off."
    },
    {
      icon: Droplets,
      title: "IP68 & IP69K Sealed",
      desc: "Built with 316L stainless steel, submersible gaskets, and marine glanding to withstand continuous salt spray, high-pressure washdown, and green sea boarding."
    },
    {
      icon: Activity,
      title: "Extreme Vibration & Shock",
      desc: "Ruggedized components, DIN-rail vibration dampening, and tension-clamp terminals that never loosen under continuous heavy hull resonance."
    },
    {
      icon: ShieldCheck,
      title: "Tri-Certified Quality",
      desc: "Holding ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Testing/Calibration) certifications for complete manufacturing traceability."
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation & Survey",
      desc: "We assess your vessel or offshore asset, operating duty cycle, classification requirements, and physical machinery space constraints."
    },
    {
      step: "02",
      title: "Marine System Design",
      desc: "Our engineers develop CAD schematics, power budgets, and functional specifications aligned with DNV rules and environmental ratings."
    },
    {
      step: "03",
      title: "In-House Build & FAT",
      desc: "We build custom 316L panels and program PLCs in-house, conducting 100% rigorous Factory Acceptance Testing before shipyard dispatch."
    },
    {
      step: "04",
      title: "Shipboard Commissioning",
      desc: "We install dockside, integrate with propulsion and auxiliary systems, execute sea trials, and train your crew with full documentation."
    },
    {
      step: "05",
      title: "Lifecycle Support & Telemetry",
      desc: "We provide global spare parts support, satellite telemetry diagnostics, and scheduled refit servicing to ensure zero at-sea failure."
    }
  ];

  const marinePartners = [
    { name: "Veritas Marine", src: "/images/Varitas-Marine-scaled.png" },
    { name: "UK Ministry of Defence / Royal Navy", src: "/images/UK-MOD-scaled.png" },
    { name: "Babcock Naval Defence", src: "/images/Babcock-scaled.png" },
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
            <span className="text-[#6DA7BF] font-medium">Marine Automation Systems</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Ship className="w-4 h-4 text-[#6DA7BF]" />
                <span>Maritime &amp; Offshore Engineering • DNV Aligned &amp; Saltwater Resilient</span>
              </div>

              {/* Authoritative, Specific H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Marine Automation Systems &amp; <br />
                <span className="text-[#6DA7BF]">Offshore Control Solutions</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for marine and offshore operators across the UK and worldwide. Since 2013, we have engineered PLC control systems, control panels, and fully integrated automation solutions built to withstand the harshest environments a marine application can present.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Our team understands the corrosion resistance, the classification requirements, and the reliability standards this sector demands, and we build every project around them.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request Marine Engineering Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="tel:+447412999343"
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#6DA7BF]" />
                  <span>Speak to a Marine Specialist: +44 7412 999343</span>
                </a>
              </div>

              {/* Key Spec Badges */}
              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xl font-bold text-white">DNV &amp; IMO</div>
                  <div className="text-xs text-slate-400">Class Standards Aligned</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">IP68 / IP69K</div>
                  <div className="text-xs text-slate-400">316L Saltwater Proof</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Zero At-Sea</div>
                  <div className="text-xs text-slate-400">Failure Architecture</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">3 Continents</div>
                  <div className="text-xs text-slate-400">Shipyard Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with High-Tech Spec Overlay */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Marine Automation Systems.jpg"
                    alt="Marine Automation Systems & Offshore Vessel Control - MASK Control Systems Ltd"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* Marine Spec Card */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">INGRESS &amp; METALLURGY:</span>
                    <span className="text-[#6DA7BF]">316L SS • IP68/IP69K RATED</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CLASSIFICATION STANDARDS:</span>
                    <span className="text-emerald-400">DNV • IMO • LLOYD&apos;S ALIGNED</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">PROPULSION &amp; POWER:</span>
                    <span className="text-slate-200">DUAL-REDUNDANT ARCHITECTURE</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK SOUTH COAST CLUSTER: DEVON HQ</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. MARITIME & CLASSIFICATION TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted by Maritime Operators &amp; Naval Contractors:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {marinePartners.map((partner, idx) => (
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
          3. WHY MARINE OPERATORS NEED SPECIALIZED AUTOMATION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Waves className="w-3.5 h-3.5" />
              <span>Extreme Offshore Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Marine Environments Need Specialized Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Marine automation operates under conditions that most industrial environments never face. Constant exposure to saltwater, humidity, and vibration means every piece of electrical equipment must be corrosion-resistant and properly IP-rated from the outset, or it simply will not survive its operating life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Saltwater, Moisture &amp; Corrosion</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standard industrial enclosures fail rapidly at sea. Continuous salt-fog and humidity require marine-grade 316L stainless steel, submersible glanding, and rigorous IP68/IP69K sealing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Quick Site Visits at Sea</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vessels and offshore assets operate for extended weeks without port access. Systems must be architected with fault-tolerant redundancy and automated diagnostics because a call-out is not an option.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">DNV &amp; IMO Classification Rules</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                International Maritime Organization (IMO) regulations and classification society standards (including DNV) shape design decisions from the first concept rather than as an afterthought.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compact Footprints &amp; Vibration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Machinery space is at a premium on vessels. Panels must be purpose-engineered to fit restricted bulkheads while resisting continuous low-frequency hull vibrations and G-shocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. THE UK MARINE & OFFSHORE SECTOR LANDSCAPE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Marine Automation Systems.jpg"
                    alt="The UK Marine & Offshore Sector Landscape - MASK Control Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 border-t border-white/10 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>UK SOUTH COAST MARINE CLUSTER:</span>
                    <span className="text-[#6DA7BF]">DEVON HEADQUARTERS</span>
                  </div>
                  <p>
                    Strategically situated near Plymouth naval dockyards, Falmouth commercial berths, and South Coast maritime corridors, providing rapid deployment to UK and European waters.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Anchor className="w-3.5 h-3.5" />
                <span>Maritime Engineering Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Marine &amp; Offshore <br />
                <span className="text-[#6DA7BF]">Sector Landscape</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                The UK maintains a strong marine engineering base, with particular strength along the South Coast Marine Cluster and in coastal regions such as Devon, where MASK is headquartered. This concentration of marine engineering expertise supports everything from commercial shipping and offshore energy to defense and research vessels, giving operators in the region direct access to deep marine-specific technical knowledge.
              </p>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Marine-Certified Automation Talent Shortage</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Marine-certified automation engineers remain difficult to recruit. The specialized knowledge required to design for saltwater exposure, vibration resistance, and classification society compliance is not something every automation engineer has, and many vessel operators struggle to build this expertise in-house.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This is pushing more vessel operators and marine facilities toward experienced outsourced partners like MASK Control Systems who already understand marine-specific design requirements, rather than trying to develop that capability internally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. SIGNS YOUR VESSEL OR FACILITY NEEDS AUTOMATION SUPPORT
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Vessel Assessment &amp; Survey Indicators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Signs Your Vessel or Facility Needs Marine Automation Support
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Several recurring signals tell us a vessel or marine facility is ready for an automation review before offshore failure forces an emergency dockside stay:
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
                  <span className="text-[11px] font-mono text-slate-400">Vessel Survey Priority</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Experiencing corrosion or unmonitored propulsion systems?</h4>
              <p className="text-xs text-slate-400 mt-1">
                An automation review is worth prioritizing before an at-sea equipment failure or classification survey sanction.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-colors"
            >
              Schedule a Vessel Survey
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          6. CORE MARINE AUTOMATION SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Comprehensive Shipboard Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Marine Automation Services
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              From fail-safe propulsion PLC logic to 316L stainless IP68 control cabinets and bridge telemetry, we engineer end-to-end maritime systems built around corrosion survival, classification compliance, and crew safety.
            </p>
          </div>

          <div className="space-y-16">
            {marineServices.map((service, index) => {
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
          7. SPECIALIZED OFFSHORE REFUGE & TELEMETRY SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>Specialized Offshore Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Specialized Offshore Safety &amp; Telemetry Instrumentation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Beyond vessel machinery, MASK engineers safety-critical refuge shelters and deepwater telemetry systems for offshore oil, gas, and renewable energy assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedOffshoreSystems.map((item, idx) => (
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
          8. CORROSION RESISTANCE & CLASSIFICATION COMPLIANCE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Maritime Standards &amp; Metallurgy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Built for Corrosion Resistance <br />
                <span className="text-[#6DA7BF]">&amp; Classification Compliance</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Marine automation is only as good as its ability to survive the environment it operates in, and we design every system with that as a starting requirement rather than an afterthought.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Our enclosures are specified to IP68 and IP69K ratings where required, with 316L stainless steel construction used in applications where saltwater exposure demands it.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                We align our designs with DNV standards, and we build in resistance to vibration and electromagnetic interference to suit shipboard conditions. Every system we deliver comes with documentation built to support classification society survey and audit requirements, so your vessel or facility is ready when a compliance review comes around.
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
          9. SUPPORTING MARINE OPERATORS WORLDWIDE
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>UK Headquarters • Worldwide Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Supporting Marine Manufacturers and Operators Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We are headquartered in Cullompton, Devon, in the United Kingdom, and we apply the same engineering discipline and marine-specific design standards to projects across three continents.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether your vessel or facility operates in UK waters, the North Sea, the Mediterranean, or internationally, you receive the same rigorous process, the same certified quality management systems, and the same commitment to long-term lifecycle support.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UK &amp; NORTH SEA</div>
              <div className="text-lg font-bold text-white">Devon HQ &amp; Dockside Support</div>
              <p className="text-xs text-slate-400 mt-2">
                Rapid mobilization to South Coast ports, Aberdeen energy docks, and Thames maritime berths for scheduled refits and emergency repairs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">EUROPE &amp; INTERNATIONAL</div>
              <div className="text-lg font-bold text-white">Global Drydock Deployment</div>
              <p className="text-xs text-slate-400 mt-2">
                Turnkey marine control panels built to class rules and shipped worldwide, supported by flying squads of marine automation engineers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">AT-SEA CONNECTIVITY</div>
              <div className="text-lg font-bold text-white">Satellite Vessel Telemetry</div>
              <p className="text-xs text-slate-400 mt-2">
                Encrypted satellite link integrations allowing remote diagnostic assistance and performance tracking without requiring port visits.
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Marine Engineering Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We follow a structured process on every marine automation project to guarantee class approval and at-sea reliability:
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
          11. WHY OPERATORS CHOOSE MASK
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Maritime Engineering Pedigree</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Manufacturers &amp; Operators Choose <br />
                <span className="text-[#6DA7BF]">MASK for Marine Automation</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we bring that same quality management discipline to every marine automation project. Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your vessel or facility rather than defaulting to a single vendor&apos;s equipment.
                </p>
                <p>
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing support, so you work with one accountable engineering partner rather than coordinating multiple contractors.
                </p>
                <p>
                  As the shortage of marine-certified automation engineers continues to affect the sector, we act as an experienced outsourced team who already understands corrosion resistance, classification compliance, and the reliability standards marine operation demands.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Discuss Your Vessel Requirements</span>
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
                  <h3 className="text-base font-bold text-white">Tri-Certified Quality Assurance</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Calibration) certified engineering rigor ensuring full material traceability for classification surveys.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Multi-Platform Vendor Agility</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Certified capability across Siemens SIMATIC, Mitsubishi MELSEC, Unitronics, and Rockwell platforms to match your vessel&apos;s existing equipment fleet.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Single Accountable Marine Partner</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    From initial CAD schematics and in-house panel assembly to dockside commissioning and sea trials, we eliminate contractor friction and delays.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Maritime Sector Specialization</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Headquartered on the UK South Coast with direct hands-on experience solving saltwater corrosion, vibration shock, and DNV compliance challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          12. FREQUENTLY ASKED QUESTIONS (Centered)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Marine Engineering Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Key questions vessel owners, shipyards, and offshore operators ask when evaluating MASK Control Systems:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>What standards does MASK design marine automation systems to?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We align our marine automation designs with DNV standards and IMO regulations, and we build in the IP ratings, corrosion resistance, and vibration tolerance that shipboard conditions require.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you retrofit existing vessels or offshore assets with new control systems?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We regularly retrofit aging control systems on existing vessels and offshore facilities, working within the space and access constraints those projects typically involve.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>How do you address corrosion and saltwater exposure in your panel designs?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We specify IP68 and IP69K rated enclosures where required, and we use 316L stainless steel construction in applications where continuous saltwater exposure demands it.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you support remote monitoring for vessels that spend extended periods at sea?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. Our remote monitoring solutions provide condition monitoring for propulsion and auxiliary systems, helping crews catch developing issues before they become at-sea failures.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you deliver marine automation projects outside the UK?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We deliver projects across three continents, applying the same engineering standards and documentation discipline wherever the vessel or facility is based.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================
          13. EXPLORE OTHER INDUSTRY SECTORS
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
              In addition to marine and offshore assets, MASK engineers bespoke control and automation systems across diverse industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList
              .filter(item => item.href !== "/industries/marine-automation-systems/")
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
                  <Anchor className="w-3.5 h-3.5" />
                  <span>Maritime Engineering Consultation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Get In Touch With Our Marine Automation Engineers
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  If you are planning a marine automation project, or you need to retrofit an aging control system, our team is ready to help. Explore our other industry sectors or contact us directly to discuss your requirements.
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
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Head Office: Cullompton, Devon, UK (South Coast Cluster)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Midlands Hub: Birmingham, UK
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Global Shipyard &amp; Dockside Deployment
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/contact/"
                  className="w-full text-center px-6 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm hover:bg-[#5b95ad] transition-all shadow-xl shadow-[#6DA7BF]/20"
                >
                  Request a Vessel Survey
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
