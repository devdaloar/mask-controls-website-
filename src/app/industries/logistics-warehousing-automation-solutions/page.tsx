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
  Truck,
  TrendingUp,
  BarChart3,
  Bot,
  Warehouse,
  Shuffle,
  Database,
  Route
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Logistics & Warehousing Automation Solutions | MASK Control Systems Ltd",
  description: "UK-engineered logistics and warehouse automation solutions. Seamless conveyor control, AGV integration, WMS connectivity, and high-speed sortation systems worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/logistics-warehousing-automation-solutions/"
  },
  openGraph: {
    title: "Logistics & Warehousing Automation Solutions | MASK Control Systems Ltd",
    description: "UK-engineered logistics and warehouse automation solutions. Seamless conveyor control, AGV integration, WMS connectivity, and high-speed sortation systems worldwide.",
    url: "https://maskcontrols.com/industries/logistics-warehousing-automation-solutions/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Logistics & Warehousing Automation.jpg",
        width: 1200,
        height: 630,
        alt: "Logistics & Warehousing Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function LogisticsWarehousingAutomationPage() {
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
            "name": "Logistics & Warehousing Automation",
            "item": "https://maskcontrols.com/industries/logistics-warehousing-automation-solutions/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Logistics & Warehousing Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke warehouse automation, conveyor control systems, automated guided vehicle (AGV) integration, WMS connectivity, and robotic palletizing for e-commerce and distribution hubs.",
        "areaServed": ["United Kingdom", "Europe", "North America", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you integrate AGVs or conveyor systems with our existing WMS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We connect control systems directly to warehouse management software, giving you real-time visibility into inventory and material flow rather than relying on disconnected systems."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with an existing facility layout, or only new builds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with both. Many of our logistics and warehousing projects involve integrating new automation into an existing facility layout rather than building from scratch."
            }
          },
          {
            "@type": "Question",
            "name": "How do you minimize disruption during installation on a live warehouse floor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We plan phased rollouts wherever possible, so sections of your operation can continue running while automation is installed and commissioned in stages."
            }
          },
          {
            "@type": "Question",
            "name": "Can your systems handle seasonal or peak e-commerce demand spikes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Integrated automation is designed to maintain consistent throughput and accuracy during peak periods, without the ramp-up delays that manual processes typically face."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver logistics and warehousing automation projects outside the UK?",
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
      title: "Manual Bottlenecks in Peak Periods",
      desc: "Manual picking, scanning, or palletizing creates severe operational bottlenecks when e-commerce order volumes surge during peak seasons."
    },
    {
      title: "Disconnected Conveyors & WMS",
      desc: "Conveyors, sorters, and material handling hardware operate in isolated silos, completely disconnected from your Warehouse Management System."
    },
    {
      title: "Zero Real-Time Inventory Visibility",
      desc: "Your management team lacks real-time visibility into exact pallet locations, transit times, and live material flow across the facility."
    },
    {
      title: "Recurring Fulfillment & Dispatch Errors",
      desc: "Order fulfillment errors keep recurring due to manual handoffs, mis-scans, and fragmented communication between operational zones."
    },
    {
      title: "Volume Scaling Beyond Footprint Limits",
      desc: "Your order volume is scaling much faster than your physical warehouse floor space and human staffing capacity can accommodate."
    },
    {
      title: "Internal Controls & Integration Gap",
      desc: "Your in-house engineering team lacks the PLC programming and software middleware experience required to commission new automated handling cells."
    }
  ];

  const logisticsServices = [
    {
      id: "plc-programming",
      title: "PLC Programming & Control Systems",
      tagline: "High-Speed Product Flow Logic & Bottleneck Elimination",
      description: "We program custom control logic for complex conveyor and material handling networks, leveraging robust platforms like Siemens, Mitsubishi, and Unitronics. Our code is engineered specifically to ensure continuous, high-speed product flow, minimizing pauses and preventing bottlenecks. By focusing on reliability and scalability, we create control programs that handle peak seasonal volumes without failure, ensuring your facility remains productive and operational throughout your busiest periods.",
      image: "/images/CUSTOM PLC PROGRAMMING.jpg",
      points: [
        "Siemens S7-1500, Mitsubishi MELSEC iQ-R, and Unitronics UniStream platforms",
        "Dynamic accumulation, gap-control, and intelligent merge logic routines",
        "High-speed line tracking, optical sensor sorting, and barcode divert triggers",
        "Scalable modular code allowing effortless future conveyor zone extensions"
      ]
    },
    {
      id: "control-panels",
      title: "Electrical Control Panel Design & Build",
      tagline: "Dust-Shielded Continuous-Duty Panels for Heavy Material Handling",
      description: "We design and manufacture industrial control panels built for the rigorous, continuous-duty demands of modern warehouse environments. Every panel is engineered to withstand long-term operation, ensuring critical power and control components are shielded from dust, temperature fluctuations, and the physical wear typical of heavy-duty material movement. Our builds prioritize uptime and safety, providing a reliable electrical foundation that keeps your automation infrastructure stable round-the-clock.",
      image: "/images/Custom Electrical Control Panel Design & Manufacturing.jpg",
      points: [
        "Heavy-duty enclosures engineered for continuous 24/7/365 distribution duty",
        "Dust-sealed filtration, thermal regulation, and integrated VFD motor banks",
        "Detailed CAD electrical schematics, standardized wire ferrules, and terminal numbering",
        "100% point-to-point Factory Acceptance Testing (FAT) before site arrival"
      ]
    },
    {
      id: "systems-integration",
      title: "Systems Integration & Conveyor Control",
      tagline: "Synchronizing Conveyors, High-Speed Sorters & Accumulation Zones",
      description: "We unify your entire material handling ecosystem including conveyor lines, sortation systems, and accumulation logic into a single, cohesive control architecture. By synchronizing these previously fragmented sections, we eliminate operational silos, ensuring product moves smoothly through your facility without manual handoffs. This integrated approach optimizes the entire material flow, significantly reducing throughput lag and ensuring your equipment operates as one unified, high-performing system.",
      image: "/images/Automation System Integration.jpg",
      points: [
        "Unification of roller conveyors, belt diverters, spiral chutes, and cross-belt sorters",
        "Industrial Ethernet fieldbus networking: PROFINET, Modbus TCP, EtherCAT",
        "Elimination of line starvation and downstream back-pressure jams",
        "Single accountable UK engineering team managing electrical and mechanical handshakes"
      ]
    },
    {
      id: "agv-integration",
      title: "AGV & Automated Material Handling Integration",
      tagline: "Centralized Fleet Coordination & Intralogistics Orchestration",
      description: "We integrate your automated guided vehicles (AGVs) directly into your broader control framework, replacing isolated automation with a centralized, intelligent architecture. This connection provides your operation with high-level coordination and precise, real-time tracking of every vehicle, ensuring that material movement aligns perfectly with upstream and downstream processes. By consolidating your vehicle logic, we enhance operational predictability and allow for smarter, more efficient route management.",
      image: "/images/AGV & Automated Material Handling Integration.jpg",
      points: [
        "Seamless traffic management and interlocking between AGV fleets and stationary conveyors",
        "Automated pick-and-drop station signaling with zero human intervention",
        "Real-time vehicle battery telemetry, position tracking, and dynamic routing",
        "Safe collaborative operation compliant with ISO 3691-4 safety standards"
      ]
    },
    {
      id: "wms-integration",
      title: "WMS Integration",
      tagline: "Bridging Physical Automation Equipment with Enterprise Software",
      description: "We bridge the critical gap between your physical control systems and your Warehouse Management Software (WMS), enabling direct communication between inventory data and automated equipment. This integration provides real-time, accurate visibility into inventory movement and location, eliminating the delays and human error inherent in periodic manual updates. By automating this data exchange, we empower your management systems to make informed, instant decisions about material flow and order fulfillment.",
      image: "/images/WMS Integration.jpg",
      points: [
        "Bidirectional API, OPC UA, and database handshakes between PLCs and WMS / ERP",
        "Real-time inventory decrementing and live SKU destination routing",
        "Automated confirmation of picking, sorting, scanning, and pallet discharge",
        "Elimination of manual paper logs, spreadsheet tallies, and human transcription errors"
      ]
    },
    {
      id: "hmi-scada",
      title: "HMI & SCADA Development",
      tagline: "Facility-Wide Throughput Dashboards & Instant Fault Diagnostics",
      description: "We develop high-visibility operator dashboards and SCADA systems designed to provide your team with instant, actionable insights into facility throughput. These interfaces are built for clarity and speed, allowing operators to diagnose system faults in seconds and resolve them before they impact performance. By reducing the time between a system warning and a resolution, we significantly boost your overall operational uptime and ease the burden on your maintenance teams.",
      image: "/images/HMI Development.jpg",
      points: [
        "High-resolution animated plant floor overviews showing live material positions",
        "Pinpoint visual alarm alerts identifying photo-eye blockages and motor overloads",
        "Live cases-per-hour, sortation accuracy, and OEE throughput metrics",
        "Mobile tablet access empowering floor supervisors with instant diagnostic controls"
      ]
    },
    {
      id: "installation-commissioning",
      title: "Installation & Commissioning",
      tagline: "Phased Deployment Strategies Protecting Live Distribution Operations",
      description: "We manage the entire lifecycle of your deployment, from initial setup to final commissioning, with a focus on seamless integration. Our team utilizes phased rollout strategies specifically designed to minimize disruption, allowing you to upgrade your capabilities without shutting down your live warehouse floor. Through rigorous testing and comprehensive on-site training, we ensure that your new automation comes online efficiently and performs to spec from day one.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      points: [
        "Phased nocturnal and weekend cutover strategies preventing live order delays",
        "Full I/O dry cycling, sensor alignment, and multi-SKU load testing",
        "Complete operator and maintenance shift training with as-built documentation",
        "On-site standby engineering support during peak volume ramp-up periods"
      ]
    }
  ];

  const specializedRobotics = [
    {
      title: "Robotic Palletizing & End-of-Line Cells",
      subtitle: "High-Speed Multi-Line Articulated Robot Palletizing",
      image: "/images/Robotic Palletizing & End-of-Line Automation.jpg",
      desc: "Bespoke robotic palletizing cells engineered to handle varied packaging formats—cartons, crates, shrink-wrapped bundles, and pails. Integrated with automatic pallet dispensers, slip-sheet applicators, stretch wrappers, and barcode label verification.",
      tags: ["Multi-Axis Robots", "Vacuum / Mechanical Grippers", "Automatic Stretch Wrapping", "Safety Fencing & Light Curtains"]
    },
    {
      title: "Smart AGV & Autonomous Mobile Robot (AMR) Integration",
      subtitle: "Dynamic Floor Transport & Dock-to-Rack Automation",
      image: "/images/AGV & Automated Material Handling Integration.jpg",
      desc: "Turnkey fleet integration connecting autonomous mobile robots directly into conveyor transfer stations and high-bay racking buffers. Delivering flexible, trackless intralogistics that automatically adjust to shift volume fluctuations.",
      tags: ["LiDAR SLAM Navigation", "Fleet Manager Integration", "Fast Inductive Charging", "Dynamic Route Optimization"]
    }
  ];

  const throughputPillars = [
    {
      icon: Clock,
      title: "24/7 Continuous Capability",
      desc: "Automated systems maintain uninterrupted pace without shift fatigue, break intervals, or the productivity slump common in manual pick-and-pack shifts."
    },
    {
      icon: Shuffle,
      title: "Zero Disconnected Silos",
      desc: "Conveyors, AGVs, and WMS software coordinate off a unified real-time data stream, eliminating manual handoffs and the order errors that accompany them."
    },
    {
      icon: BarChart3,
      title: "Peak Season Surge Resilience",
      desc: "Engineered to scale throughput effortlessly during seasonal retail peaks (Black Friday, holidays) without requiring rushed temporary staff recruitment."
    },
    {
      icon: ShieldCheck,
      title: "Tri-Certified Quality Assurance",
      desc: "Backed by ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Testing/Calibration) certified panel building and engineering standards."
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation & Audit",
      desc: "We assess your current operational workflow, physical building layout, throughput targets, and peak volume requirements."
    },
    {
      step: "02",
      title: "System Design",
      desc: "Our engineers develop CAD layouts, electrical schematics, and functional software specifications aligned directly with your WMS."
    },
    {
      step: "03",
      title: "Build & In-House FAT",
      desc: "We manufacture control panels and program PLC logic in-house, completing comprehensive Factory Acceptance Testing prior to dispatch."
    },
    {
      step: "04",
      title: "Phased Commissioning",
      desc: "We install on-site using phased rollout strategies, integrating with existing machinery and training your staff while keeping lines running."
    },
    {
      step: "05",
      title: "Lifecycle Support",
      desc: "We provide ongoing preventative servicing, remote monitoring, and long-term technical support to ensure your throughput targets are always achieved."
    }
  ];

  const logisticsPartners = [
    { name: "Alstom Transport Logistics", src: "/images/Alstom-scaled.png" },
    { name: "Emirates Logistics Hub", src: "/images/Emirates-scaled.png" },
    { name: "Dunlop Aircraft & Distribution", src: "/images/Dunlop-scaled.png" },
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
            <span className="text-[#6DA7BF] font-medium">Logistics &amp; Warehousing</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Warehouse className="w-4 h-4 text-[#6DA7BF]" />
                <span>Intralogistics &amp; Fulfillment • Conveyors, AGVs &amp; WMS Integration</span>
              </div>

              {/* Authoritative, Specific H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Logistics &amp; Warehousing <br />
                <span className="text-[#6DA7BF]">Automation Solutions</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for logistics and warehousing operators across the UK and worldwide. Since 2013, we have engineered PLC control systems, control panels, and fully integrated automation solutions that connect conveyor systems, automated guided vehicles, and warehouse management software into a single, coordinated operation.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Our team understands the throughput pressure this sector operates under, and we build every project to help you move more product, more accurately, without adding headcount you don&apos;t have room for.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request a Warehouse Audit</span>
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
                  <div className="text-xl font-bold text-white">WMS Direct</div>
                  <div className="text-xs text-slate-400">Real-Time Sync</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">24/7 Uptime</div>
                  <div className="text-xs text-slate-400">Continuous Duty</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Peak Surge</div>
                  <div className="text-xs text-slate-400">Zero Bottlenecks</div>
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
                    src="/images/Logistics & Warehousing Automation.jpg"
                    alt="Logistics & Warehousing Automation Solutions - MASK Control Systems Ltd"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* Logistics Spec Card */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">MATERIAL HANDLING:</span>
                    <span className="text-[#6DA7BF]">CONVEYORS • AGV • ROBOTICS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">SOFTWARE INTEGRATION:</span>
                    <span className="text-emerald-400">WMS • WCS • ERP DIRECT</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CYCLE RELIABILITY:</span>
                    <span className="text-slate-200">CONTINUOUS 24/7 THROUGHPUT</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>UK LOGISTICS CORRIDORS: DEVON &amp; MIDLANDS</span>
                    <span className="text-[#6DA7BF]">EST. 2013</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. LOGISTICS & INDUSTRIAL TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted Across Logistics Hubs &amp; Industrial Supply Chains:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {logisticsPartners.map((partner, idx) => (
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
          3. WHY WAREHOUSE OPERATORS NEED SPECIALIZED AUTOMATION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>E-Commerce Throughput Pressures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Why Logistics &amp; Warehousing Operations Need Specialized Automation
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              E-commerce growth has compressed delivery expectations year after year, and warehousing operations are under constant pressure to move more orders through the same footprint in less time. Customers expect fast, accurate delivery as standard, and that expectation does not slow down during peak periods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compressed Delivery Windows</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Next-day and same-day delivery SLAs require instant picking and sortation. Systems that require manual paper lookups or batch reconciliations create unacceptable dispatch delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Shuffle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Disconnected Systems Strain</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                When conveyors, AGVs, and WMS software run in isolation, fragmentation slows response time and caps throughput—especially during holiday order surges.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Manual Movement Error Caps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Manual material transport caps how far a facility can scale before mis-picks, misplaced pallets, and fulfillment error rates climb along with volume.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-5 group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Visibility is Baseline</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time visibility into inventory and material flow is no longer a luxury. It is a baseline operational expectation, and warehouses without it are already lagging behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. THE UK LOGISTICS & E-COMMERCE LANDSCAPE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/The UK Logistics & E-Commerce Landscape.jpg"
                    alt="The UK Logistics & E-Commerce Landscape - MASK Control Systems"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A101A] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5 border-t border-white/10 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span>UK LOGISTICS SECTOR EXPANSION:</span>
                    <span className="text-[#6DA7BF]">RAPID SCALE INTRALOGISTICS</span>
                  </div>
                  <p>
                    Connecting modern distribution centres, 3PL fulfillment facilities, and multi-tenant warehouse networks across the UK Golden Triangle and regional distribution corridors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <Route className="w-3.5 h-3.5" />
                <span>UK Distribution Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Logistics &amp; E-Commerce <br />
                <span className="text-[#6DA7BF]">Manufacturing Landscape</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Logistics and warehousing automation is one of the fastest-scaling application areas in UK industrial automation, driven almost entirely by sustained e-commerce growth. Warehouse operators are under continuous pressure to increase throughput, reduce order-fulfillment errors, and support seasonal demand spikes without a proportional increase in labor costs.
              </p>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Controls-to-WMS Integration Skills Gap</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This growth has created a specific skills gap. Warehouse operators need engineers who can integrate control systems directly with warehouse management software, not just install conveyor or racking hardware.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  That combination of control systems expertise and software integration knowledge is not something every automation provider brings to the table, and many logistics operators are turning to experienced outsourced partners like MASK Control Systems rather than trying to build that capability internally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. SIGNS YOUR WAREHOUSE NEEDS AUTOMATION SUPPORT
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Throughput &amp; Error Rate Review</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Signs Your Warehouse Needs Automation Support
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Several recurring signals tell us a logistics or warehousing operation is ready for an automation review before peak season exposes the gap:
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
                  <span className="text-[11px] font-mono text-slate-400">Throughput Priority</span>
                  <ChevronRight className="w-4 h-4 text-amber-400/80" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Facing peak season order volume bottlenecks?</h4>
              <p className="text-xs text-slate-400 mt-1">
                An automation review is worth prioritizing before peak holiday demand exposes line constraints.
              </p>
            </div>
            <Link
              href="/contact/"
              className="shrink-0 px-6 py-3 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-colors"
            >
              Schedule an Intralogistics Audit
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          6. CORE LOGISTICS AUTOMATION SERVICES
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Full-Spectrum Intralogistics Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Logistics &amp; Warehousing Automation Services
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              From continuous-duty conveyor networks to WMS middleware integration, AGV fleet control, and robotic palletizing cells, we deliver synchronized automation that moves product faster and more accurately.
            </p>
          </div>

          <div className="space-y-16">
            {logisticsServices.map((service, index) => {
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
          7. SPECIALIZED ROBOTIC PALLETIZING & AGV CELLS
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Advanced Robotic Material Handling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Specialized Robotic Palletizing &amp; Autonomous Transport
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We deploy robotic articulated cells and autonomous mobile robots to eliminate manual end-of-line bottlenecks and connect warehouse docks directly to high-bay storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedRobotics.map((item, idx) => (
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
          8. THROUGHPUT OPTIMIZATION FOR E-COMMERCE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Accuracy &amp; Speed Metrics</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Throughput Optimization for <br />
                <span className="text-[#6DA7BF]">E-Commerce and Distribution</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Order accuracy and speed under peak demand are the two metrics that matter most in modern warehousing, and integrated automation is what makes both achievable at scale.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                When conveyor, AGV, and WMS systems work from the same real-time data rather than operating independently, manual handoffs disappear and the error rate that comes with them disappears alongside them.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                This integration also unlocks genuine 24/7 operational capability, since automated systems do not require breaks, shift changes, or the ramp-up time a manual process needs after a pause. For operations facing seasonal demand spikes, this consistency is often the difference between meeting a peak period&apos;s order volume and falling behind it.
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
              {throughputPillars.map((pillar, idx) => {
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
          9. SUPPORTING WAREHOUSE OPERATORS WORLDWIDE
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>UK Headquarters • Worldwide Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Supporting Logistics &amp; Warehousing Operators Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We are headquartered in Cullompton, Devon, in the United Kingdom, and we apply the same engineering discipline to logistics and warehousing projects across three continents.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether your distribution centre is based in the UK, mainland Europe, North America, or beyond, you receive the same rigorous process, the same certified quality management systems, and the same commitment to long-term lifecycle support.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">UK &amp; EUROPE</div>
              <div className="text-lg font-bold text-white">Devon HQ &amp; Midlands Hub</div>
              <p className="text-xs text-slate-400 mt-2">
                Rapid mobilization to Midlands logistics corridors, London distribution rings, and European fulfillment hubs for scheduled installations and shift support.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">INTERNATIONAL</div>
              <div className="text-lg font-bold text-white">Global Turnkey Delivery</div>
              <p className="text-xs text-slate-400 mt-2">
                Turnkey material handling control panels engineered to international standards and shipped worldwide, supported by flying commissioning teams.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <div className="text-xs font-mono text-[#6DA7BF] mb-1">REAL-TIME OVERSIGHT</div>
              <div className="text-lg font-bold text-white">Remote Telemetry Diagnostics</div>
              <p className="text-xs text-slate-400 mt-2">
                Encrypted cloud monitoring tracking motor currents, photoelectric sensor health, and diversion accuracy to fix minor faults before lines pause.
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
              <span>Structured Intralogistics Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              How We Work
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              We follow a structured process on every logistics and warehousing automation project:
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
                <span>Intralogistics Engineering Pedigree</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Operators Choose MASK for <br />
                <span className="text-[#6DA7BF]">Logistics &amp; Warehouse Automation</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <p>
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we bring that same quality management discipline to every logistics and warehousing project we take on. Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your facility rather than defaulting to a single vendor&apos;s equipment.
                </p>
                <p>
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing support, so you work with one accountable engineering partner rather than coordinating multiple contractors.
                </p>
                <p>
                  As the shortage of engineers who can bridge control systems and warehouse software continues to affect the sector, we act as an experienced outsourced team who already understands how to make these systems work together.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-xs hover:bg-[#5b95ad] transition-all shadow-md shadow-[#6DA7BF]/20"
                >
                  <span>Discuss Your Intralogistics Requirements</span>
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
                    ISO 9001 (Quality), ISO 17020 (Inspection), and ISO 17025 (Calibration) certified engineering rigor applied to panel manufacturing and sensor accuracy.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Vendor-Agnostic Controls</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Specialist expertise across Siemens, Mitsubishi, Unitronics, Rockwell, and Omron controllers to match your existing warehouse infrastructure.
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
                    End-to-end delivery from conveyor electrical schematics to WMS middleware handshakes and 24/7 technical breakdown support under one roof.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Bridging the WMS-Controls Skills Gap</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Immediate access to senior controls engineers who bridge the gap between low-level PLC fieldbuses and high-level enterprise database APIs.
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
              <span>Intralogistics Queries Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Key questions warehouse operators, 3PL providers, and distribution managers ask when evaluating MASK Control Systems:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can you integrate AGVs or conveyor systems with our existing WMS?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. We connect control systems directly to warehouse management software, giving you real-time visibility into inventory and material flow rather than relying on disconnected systems.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you work with an existing facility layout, or only new builds?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We work with both. Many of our logistics and warehousing projects involve integrating new automation into an existing facility layout rather than building from scratch.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>How do you minimize disruption during installation on a live warehouse floor?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                We plan phased rollouts wherever possible, so sections of your operation can continue running while automation is installed and commissioned in stages.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Can your systems handle seasonal or peak e-commerce demand spikes?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 text-[#6DA7BF]" />
              </summary>
              <div className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                Yes. Integrated automation is designed to maintain consistent throughput and accuracy during peak periods, without the ramp-up delays that manual processes typically face.
              </div>
            </details>

            <details className="group p-6 rounded-2xl bg-[#0C121C] border border-white/10 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base hover:text-[#6DA7BF] transition-colors">
                <span>Do you deliver logistics and warehousing automation projects outside the UK?</span>
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
              In addition to logistics and distribution, MASK engineers bespoke control and automation systems across diverse industrial sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList
              .filter(item => item.href !== "/industries/logistics-warehousing-automation-solutions/")
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
                  <Warehouse className="w-3.5 h-3.5" />
                  <span>Confidential Warehouse Throughput Review</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Get In Touch With Our Logistics Automation Engineers
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-light">
                  If you are planning a logistics or warehousing automation project, or you need to prepare your facility for peak-season demand, our team is ready to help. Explore our other industry sectors or contact us directly to discuss your requirements.
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
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Midlands Hub: Birmingham, UK (Logistics Corridor)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" /> Global Intralogistics Deployment Capability
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  href="/contact/"
                  className="w-full text-center px-6 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm hover:bg-[#5b95ad] transition-all shadow-xl shadow-[#6DA7BF]/20"
                >
                  Request a Warehouse Audit
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
