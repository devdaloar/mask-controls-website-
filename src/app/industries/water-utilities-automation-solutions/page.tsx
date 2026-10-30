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
  Waves,
  Database,
  CloudRain,
  Eye,
  Server
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Water & Utilities Automation: SCADA & Telemetry | MASK Control Systems Ltd",
  description: "UK-engineered water and wastewater automation solutions. MCERTS and Environment Agency aligned SCADA, telemetry integration, pump station controls, and unmanned monitoring worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/water-utilities-automation-solutions/"
  },
  openGraph: {
    title: "Water & Utilities Automation: SCADA & Telemetry | MASK Control Systems Ltd",
    description: "UK-engineered water and wastewater automation solutions. MCERTS and Environment Agency aligned SCADA, telemetry integration, pump station controls, and unmanned monitoring worldwide.",
    url: "https://maskcontrols.com/industries/water-utilities-automation-solutions/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Water & Utilities Automation.jpg",
        width: 1200,
        height: 630,
        alt: "Water & Utilities Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function WaterUtilitiesAutomationPage() {
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
            "name": "Water & Utilities Automation",
            "item": "https://maskcontrols.com/industries/water-utilities-automation-solutions/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Water & Wastewater Automation: SCADA, Telemetry & Unmanned Asset Control",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke water and wastewater automation, MCERTS-compliant SCADA, telemetry integration, and control panels for pumping stations, treatment works, and unmanned reservoirs.",
        "areaServed": ["United Kingdom", "Europe", "North America", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is MCERTS, and how does it affect our automation systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MCERTS is the Environment Agency's Monitoring Certification Scheme, setting standards for environmental monitoring equipment and services. We design our SCADA and telemetry systems to support the accuracy and reliability that MCERTS-aligned compliance requires."
            }
          },
          {
            "@type": "Question",
            "name": "Can you upgrade telemetry at remote or unmanned sites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly upgrade telemetry and remote terminal units at unmanned pumping stations, reservoirs, and treatment sites, connecting them back to a central SCADA system for real-time visibility."
            }
          },
          {
            "@type": "Question",
            "name": "How do you support Environment Agency compliance reporting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We design systems that generate continuous, defensible data, so your compliance reporting is backed by reliable monitoring rather than periodic manual readings."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work on live sites without disrupting ongoing operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We routinely deliver upgrades within live operational environments, planning installation and commissioning carefully to avoid disrupting treatment or distribution processes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver water and utilities automation projects outside the UK?",
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
      title: "Reliance on Manual Spot Readings",
      desc: "Your operational team still relies on periodic manual grab samples and clipboards where continuous digital monitoring is now the regulatory expectation."
    },
    {
      title: "Aging Telemetry & SCADA Bottlenecks",
      desc: "Legacy RTUs and aging SCADA systems are failing to communicate reliably, leaving your team unable to satisfy current EA compliance reporting formats."
    },
    {
      title: "Frequent Physical Inspection Visits",
      desc: "Remote pumping stations, overflow points, and storage reservoirs still require routine physical site visits just to confirm basic pump and level status."
    },
    {
      title: "Audit Hardships with MCERTS Data",
      desc: "Demonstrating MCERTS-aligned data traceability and sensor calibration during an Environment Agency audit has become difficult and time-consuming."
    },
    {
      title: "End-of-Life Pump Control Hardware",
      desc: "Critical pump control cabinets, soft starters, or outdated PLCs are reaching end-of-life with no available spare parts or manufacturer support."
    },
    {
      title: "In-House Telemetry Engineering Deficit",
      desc: "Your internal engineering staff lacks the specific capacity or communication systems experience needed to execute a network-wide SCADA migration."
    }
  ];

  const waterServices = [
    {
      id: "plc-programming",
      title: "PLC Programming & Control Systems",
      tagline: "Unmanned Pumping, Treatment & Automated Response Logic",
      description: "We develop sophisticated control logic for complex pump, treatment, and process control applications using industry-leading platforms such as Siemens, Mitsubishi, and Unitronics. Our programming is specifically architected to handle the rigorous demands of unmanned water infrastructure, ensuring high reliability, stability, and precise performance. By focusing on robust error-handling and automated response sequences, we minimize the need for manual intervention and keep your processes running smoothly without constant site presence.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      points: [
        "Siemens S7-1500, Mitsubishi MELSEC, and Unitronics UniStream platforms",
        "Automated duty/standby pump alternation and energy-optimized staging",
        "Fail-safe emergency shutdown and automatic overflow diversion sequences",
        "Deterministic PID loops for precise chemical dosing, aeration, and flow regulation"
      ]
    },
    {
      id: "control-panels",
      title: "Electrical Control Panel Design & Build",
      tagline: "Weather-Resistant Outdoor Enclosures Engineered for Remote Sites",
      description: "We design and manufacture high-performance electrical control panels tailored for challenging installation sites, including those in exposed or outdoor environments. Recognizing the limitations of standard indoor enclosures, we build our panels using durable, weather-resistant materials that protect sensitive internal components from moisture, extreme temperatures, and environmental contaminants. Each unit is custom-engineered to maintain operational integrity in harsh conditions, ensuring long-term reliability for your distributed assets.",
      image: "/images/Custom Electrical Control Panel Design & Manufacturing.jpg",
      points: [
        "IP66 / IP68 outdoor-rated GRP and 316L stainless steel enclosures",
        "Integrated thermostatic anti-condensation heaters and forced ventilation",
        "Detailed CAD electrical schematics, surge protection, and lightning arrestors",
        "100% point-to-point Factory Acceptance Testing (FAT) before field deployment"
      ]
    },
    {
      id: "scada-development",
      title: "SCADA Development",
      tagline: "Centralized Multi-Site Dashboards & Network-Wide Visibility",
      description: "Our SCADA development focuses on creating centralized, intuitive control architectures that provide full visibility across your entire network of distributed water assets. By consolidating data from multiple pumping stations, treatment sites, and reservoirs into a single, cohesive dashboard, we eliminate the operational inefficiency of manual site visits. This unified view empowers your team to monitor performance, analyze trends, and make informed decisions from a central location, significantly improving overall asset management.",
      image: "/images/HMI Development.jpg",
      points: [
        "Consolidated network map visualization spanning multiple regional catchment areas",
        "High-priority visual and audible alarm banners adhering to EEMUA 191 alarm standards",
        "Historical trend logging, flow rate integration, and automated discharge compliance reports",
        "Multi-tier role-based access for control room operators, managers, and field technicians"
      ]
    },
    {
      id: "telemetry-integration",
      title: "Telemetry Integration",
      tagline: "Low-Latency Remote Terminal Units (RTUs) for Distributed Assets",
      description: "We specialize in the seamless integration of remote terminal units and robust data communication systems designed to keep your most remote sites connected to your central control infrastructure. By establishing reliable, low-latency links between unmanned field assets and your primary systems, we ensure you have real-time status visibility at all times. Our approach to telemetry minimizes data gaps and ensures that your critical operational information is always available, even for assets in geographically difficult or isolated locations.",
      image: "/images/Industrial Remote Monitoring & Smart Automation Solutions.jpg",
      points: [
        "Integration of industry-standard RTUs via 4G/5G, radio telemetry, and satellite links",
        "DNP3, Modbus TCP/RTU, IEC 60870-5-104, and MQTT protocol support",
        "Store-and-forward local data logging ensuring zero data loss during network outages",
        "Battery and solar-assisted low-power RTU configurations for isolated rural sites"
      ]
    },
    {
      id: "remote-monitoring",
      title: "Remote Monitoring & Condition Diagnostics",
      tagline: "Proactive Fault Detection & Automated Compliance Warnings",
      description: "Our comprehensive remote monitoring solutions deliver real-time system diagnostics and automated alerts specifically designed for the needs of reservoirs, pumping stations, and water treatment works. By implementing continuous condition-based monitoring, we enable your maintenance team to identify and resolve emerging issues—such as pump inefficiency or sensor drift—well before they escalate into significant compliance incidents or operational failures. This proactive approach helps protect your infrastructure while reducing the frequency of emergency site visits.",
      image: "/images/Remote Technical Support.jpg",
      points: [
        "Continuous monitoring of motor winding temperatures, pump vibration, and power draw",
        "Early warning automated SMS and email alerts for rising wet-well levels and spill risk",
        "Sensor health diagnostics detecting calibration drift on turbidity and pH probes",
        "Drastic reduction in emergency call-out costs and unplanned asset downtime"
      ]
    },
    {
      id: "installation-commissioning",
      title: "Installation & Commissioning",
      tagline: "Seamless Deployment Within Live, Uninterrupted Treatment Environments",
      description: "We manage end-to-end installation and commissioning projects, specifically designed for deployment within live, operational water and utility environments. Understanding the critical nature of these facilities, our team works with precision to integrate new upgrades without disrupting ongoing treatment or distribution processes. We meticulously plan every stage of the transition, from initial on-site deployment to final system testing, ensuring a seamless handover that maintains operational continuity throughout the upgrade process.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      points: [
        "Carefully phased cutover strategies avoiding process shutdown or discharge disruption",
        "End-to-end loop checking, calibration verification, and telemetry comms testing",
        "Comprehensive operator and field engineer handover training with redlined as-builts",
        "Full documentation packages ready for immediate Environment Agency audit review"
      ]
    }
  ];

  const compliancePillars = [
    {
      icon: Gauge,
      title: "MCERTS-Aligned Accuracy",
      desc: "Our flow measurement and water quality data architectures align with the Environment Agency's Monitoring Certification Scheme, ensuring defensible data."
    },
    {
      icon: Waves,
      title: "Section 82 Environment Act",
      desc: "Engineered to satisfy the continuous water quality monitoring mandates of Section 82, transitioning operations from periodic grab sampling to automated telemetry."
    },
    {
      icon: ShieldCheck,
      title: "Defensible Audit Trails",
      desc: "Automated, tamper-evident data logging that captures continuous turbidity, dissolved oxygen, flow rate, and spill events ready for regulatory inspection."
    },
    {
      icon: Award,
      title: "Tri-Certified Quality",
      desc: "Backed by ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Calibration) certifications for full traceability across all panels and sensor loops."
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation & Site Audit",
      desc: "We assess your current water assets, communication links, compliance obligations, and telemetry infrastructure feasibility."
    },
    {
      step: "02",
      title: "System Design",
      desc: "Our engineers develop CAD schematics, RTU communication architectures, and SCADA functional specifications aligned with EA standards."
    },
    {
      step: "03",
      title: "In-House Build & FAT",
      desc: "We manufacture weatherproof control panels and program PLC logic in-house, completing rigorous Factory Acceptance Testing before dispatch."
    },
    {
      step: "04",
      title: "Live-Site Commissioning",
      desc: "We install on-site within active treatment environments, execute end-to-end telemetry testing, and train your staff without interrupting supply."
    },
    {
      step: "05",
      title: "Lifecycle Support",
      desc: "We provide ongoing preventative servicing, remote monitoring, and long-term technical support to ensure continuous compliance and reliability."
    }
  ];

  const utilityPartners = [
    { name: "Hydro International", src: "/images/Hydro-scaled.png" },
    { name: "Alstom Infrastructure Engineering", src: "/images/Alstom-scaled.png" },
    { name: "UK Ministry of Defence Infrastructure", src: "/images/UK-MOD-scaled.png" },
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
            <span className="text-[#6DA7BF] font-medium">Water &amp; Utilities</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Waves className="w-4 h-4 text-[#6DA7BF]" />
                <span>Water &amp; Wastewater Infrastructure • MCERTS &amp; EA Section 82 Aligned</span>
              </div>

              {/* Authoritative, Specific Non-Generic H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Water &amp; Wastewater Automation: <br />
                <span className="text-[#6DA7BF]">SCADA, Telemetry &amp; Unmanned Asset Control</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for water and utilities operators across the UK and worldwide. Since 2013, we have engineered SCADA systems, telemetry integrations, and fully automated control solutions built for the distributed, often unmanned nature of water and wastewater infrastructure.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Our team understands the regulatory requirements this sector operates under, and we build every project to support compliance rather than complicate it.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request a Telemetry Consultation</span>
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
                  <div className="text-xl font-bold text-white">MCERTS</div>
                  <div className="text-xs text-slate-400">Data Quality Standards</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">Section 82</div>
                  <div className="text-xs text-slate-400">Environment Act Ready</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Unmanned</div>
                  <div className="text-xs text-slate-400">24/7 Remote SCADA</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">3 Continents</div>
                  <div className="text-xs text-slate-400">Global Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with Water Spec Overlay */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/Water & Utilities Automation.jpg"
                    alt="Water & Wastewater Automation: SCADA, Telemetry & Unmanned Asset Control - MASK Control Systems Ltd"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* Utilities Quality Spec Card */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">REGULATORY FRAMEWORK:</span>
                    <span className="text-[#6DA7BF]">ENVIRONMENT AGENCY • MCERTS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">MONITORING ARCHITECTURE:</span>
                    <span className="text-emerald-400">CONTINUOUS SCADA &amp; TELEMETRY</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">ASSET OPERATIONAL PROFILE:</span>
                    <span className="text-slate-200">UNMANNED PUMPING &amp; RESERVOIRS</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK HEADQUARTERS: DEVON &amp; MIDLANDS</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. UTILITIES & RESEARCH TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted Across Water Utilities &amp; Infrastructure Engineering:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {utilityPartners.map((partner, idx) => (
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
          3. WHY WATER OPERATIONS NEED SPECIALIZED AUTOMATION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Geographic Dispersion &amp; Compliance Pressures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Water &amp; Utilities Operations Need Specialized Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Water and wastewater assets are frequently spread across wide geographic areas, and many of them, including pumping stations, reservoirs, and remote treatment works, operate unmanned for most of the day. This makes reliable SCADA and telemetry systems essential rather than optional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Unmanned Asset Reliability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pumping stations and reservoirs operate unmanned for days at a time. The monitoring infrastructure directly dictates both your regulatory compliance and operational maintenance costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Environment Agency Compliance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regulators expect continuous, defensible digital data rather than periodic manual readings. A site that cannot produce auditable data is exposed regardless of treatment performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Centralized Visibility</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operators need to know the live status of every pump station and overflow weir from a single control point, eliminating inefficient routine site visit rotations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Energy &amp; Pump Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intelligent automated staging and variable frequency drive control reduce energy tariffs during peak tariff windows while preventing wet-well sediment accumulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. THE UK REGULATORY LANDSCAPE (MCERTS & SEC 82)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/The UK Water & Utilities Regulatory Landscape.jpg"
                    alt="The UK Water & Utilities Regulatory Landscape - MASK Control Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 border-t border-white/10 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>UK REGULATORY MANDATES:</span>
                    <span className="text-[#6DA7BF]">MCERTS &amp; ENVIRONMENT ACT SEC 82</span>
                  </div>
                  <p>
                    Transitioning regional water authorities, industrial discharge facilities, and municipal wastewater works toward continuous, audit-defensible telemetry.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Regulatory Standards &amp; Certification</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Water &amp; Utilities <br />
                <span className="text-[#6DA7BF]">Regulatory Landscape</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                MCERTS, the Environment Agency&apos;s Monitoring Certification Scheme, sets the UK&apos;s standard for environmental monitoring equipment and services, covering flow measurement, water quality monitoring, and emissions reporting. It exists to ensure that the data operators submit to regulators is accurate, reliable, and defensible under scrutiny, and it has become a baseline expectation across the sector rather than an optional extra.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                The regulatory landscape is also shifting further toward continuous monitoring. Section 82 of the Environment Act is driving a broader move away from periodic sampling and toward continuous water quality monitoring across the industry, and operators who have not yet adapted their systems to this expectation are likely to face increasing pressure to do so.
              </p>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Controls &amp; EA Compliance Skills Shortage</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This shift has created a specific skills gap. Engineers who understand both control systems engineering and EA compliance requirements are not easy to find, and many water and utilities operators are turning to experienced outsourced partners like MASK Control Systems rather than trying to build that combined expertise in-house.
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
              <span>Compliance Risk &amp; Asset Review</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Signs Your Facility Needs Water &amp; Utilities Automation Support
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Several recurring signals tell us a water or utilities facility is ready for an automation review before compliance gaps escalate into regulatory sanctions:
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
                  <span className="text-[11px] font-mono text-slate-400">Compliance Priority</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Need to upgrade SCADA or telemetry ahead of an EA deadline?</h4>
              <p className="text-xs text-slate-400 mt-1">
                An automation review is worth prioritizing before audit findings or reporting gaps become enforcement notices.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-colors"
            >
              Book an Infrastructure Audit
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          6. CORE WATER & UTILITIES SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Full-Network Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Water &amp; Utilities Automation Services
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              From sophisticated pump sequencing PLC logic to weatherproof outdoor control panels, centralized SCADA networks, and remote telemetry links, we engineer systems that keep unmanned infrastructure compliant and reliable.
            </p>
          </div>

          <div className="space-y-16">
            {waterServices.map((service, index) => {
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
          7. SUPPORTING EA COMPLIANCE & MCERTS
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Defensible Environmental Data</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Supporting EA Compliance and <br />
                <span className="text-[#6DA7BF]">MCERTS-Aligned Monitoring</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Compliance in this sector depends on data you can defend, and we design our systems around that principle.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                MCERTS exists to ensure that monitoring equipment and services meet defined standards for accuracy and reliability, and we design our SCADA and telemetry systems to support that same level of confidence in every reading your facility produces.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Our systems are built to generate the continuous, auditable data that Environment Agency compliance increasingly requires, particularly as Section 82 of the Environment Act pushes the sector further toward continuous water quality monitoring rather than periodic sampling. Whether you are preparing for a routine audit or adapting to a new monitoring requirement, our systems are designed to give you data you can stand behind.
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
          8. SUPPORTING UTILITIES OPERATORS WORLDWIDE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>UK Headquarters • Worldwide Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Supporting Water &amp; Utilities Operators Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We are headquartered in Cullompton, Devon, in the United Kingdom, and we apply the same engineering discipline to water and utilities projects across three continents.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether your facility operates across UK regional water catchments, European utility authorities, or international municipal works, you receive the same rigorous process, the same certified quality management systems, and the same commitment to long-term lifecycle support.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UK WATER NETWORKS</div>
              <div className="text-lg font-bold text-white">Devon HQ &amp; Midlands Hub</div>
              <p className="text-xs text-slate-400 mt-2">
                Rapid mobilization to regional water authorities, canal networks, and industrial discharge plants across the UK for scheduled commissioning and breakdown response.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">EUROPE &amp; INTERNATIONAL</div>
              <div className="text-lg font-bold text-white">Turnkey RTU Packages</div>
              <p className="text-xs text-slate-400 mt-2">
                Fully pre-configured, tested RTU and SCADA packages delivered internationally, backed by remote commissioning and flying engineering squads.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UNMANNED TELEMETRY</div>
              <div className="text-lg font-bold text-white">24/7 Cloud Condition Alerts</div>
              <p className="text-xs text-slate-400 mt-2">
                Secure cloud monitoring identifying pump cavitation, thermal rise, and rising well levels to prevent spills and regulatory incidents before they develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          9. HOW WE WORK (5-STAGE PROCESS)
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Structured Delivery Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We follow a structured process on every water and utilities automation project:
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
          10. WHY OPERATORS CHOOSE MASK
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Water Infrastructure Engineering Pedigree</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Operators Choose MASK for <br />
                <span className="text-[#6DA7BF]">Water &amp; Utilities Automation</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we bring that same quality management discipline to every water and utilities project we take on. Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your facility rather than defaulting to a single vendor&apos;s equipment.
                </p>
                <p>
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing support, so you work with one accountable engineering partner rather than coordinating multiple contractors.
                </p>
                <p>
                  As the shortage of engineers who understand both control systems and EA compliance continues to affect the sector, we act as an experienced outsourced team who already understands what regulators expect and how to design systems that meet it.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Discuss Your Compliance Deadlines</span>
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
                    ISO 9001, ISO 17020, and ISO 17025 accredited quality management applied to panel manufacturing, sensor loop testing, and flow calibration.
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
                    Specialist expertise across Siemens, Mitsubishi, Unitronics, Rockwell, and Schneider controllers to match your existing regional framework standards.
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
                    End-to-end delivery from civil/mechanical coordination and electrical panel fabrication to telemetry commissioning and 24/7 technical breakdown support.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Bridging the EA Compliance Skills Gap</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Immediate access to senior controls engineers who understand both PLC logic and Environment Agency MCERTS / Section 82 regulatory expectations.
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
              <span>Utilities Engineering Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Key questions water utility operators, plant managers, and compliance directors ask when evaluating MASK Control Systems:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>What is MCERTS, and how does it affect our automation systems?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                MCERTS is the Environment Agency&apos;s Monitoring Certification Scheme, setting standards for environmental monitoring equipment and services. We design our SCADA and telemetry systems to support the accuracy and reliability that MCERTS-aligned compliance requires.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you upgrade telemetry at remote or unmanned sites?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We regularly upgrade telemetry and remote terminal units at unmanned pumping stations, reservoirs, and treatment sites, connecting them back to a central SCADA system for real-time visibility.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>How do you support Environment Agency compliance reporting?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We design systems that generate continuous, defensible data, so your compliance reporting is backed by reliable monitoring rather than periodic manual readings.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you work on live sites without disrupting ongoing operations?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We routinely deliver upgrades within live operational environments, planning installation and commissioning carefully to avoid disrupting treatment or distribution processes.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you deliver water and utilities automation projects outside the UK?</span>
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
              In addition to water and utilities, MASK engineers bespoke control and automation systems across diverse industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList
              .filter(item => item.href !== "/industries/water-utilities-automation-solutions/")
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
                  <Waves className="w-3.5 h-3.5" />
                  <span>Confidential Utilities Infrastructure Consultation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Get In Touch With Our Water &amp; Utilities Engineers
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  If you are planning a water or utilities automation project, or you need to modernize your SCADA and telemetry infrastructure ahead of a compliance deadline, our team is ready to help. Explore our other industry sectors or contact us directly to discuss your requirements.
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
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Global Utilities Deployment Capability
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/contact/"
                  className="w-full text-center px-6 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm hover:bg-[#5b95ad] transition-all shadow-xl shadow-[#6DA7BF]/20"
                >
                  Request a Telemetry Consultation
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
