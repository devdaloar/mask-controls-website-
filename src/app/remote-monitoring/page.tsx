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
  LineChart,
  Lock,
  Smartphone,
  Cloud,
  Eye,
  Server
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Remote Monitoring & Smart Automation Solutions | MASK Control Systems Ltd",
  description: "Monitor, analyse, and optimise your production systems in real time with secure, cloud-based remote monitoring solutions engineered in the UK, deployed worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/remote-monitoring/"
  },
  openGraph: {
    title: "Industrial Remote Monitoring & Smart Automation Solutions | MASK Control Systems Ltd",
    description: "Monitor, analyse, and optimise your production systems in real time with secure, cloud-based remote monitoring solutions engineered in the UK, deployed worldwide.",
    url: "https://maskcontrols.com/remote-monitoring/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Industrial Remote Monitoring & Smart Automation Solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Remote Monitoring & Smart Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function RemoteMonitoringPage() {
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
            "name": "Remote Monitoring",
            "item": "https://maskcontrols.com/remote-monitoring/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Industrial Remote Monitoring & Smart Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Secure, cloud-based remote telemetry, real-time machine monitoring, alarm routing, and predictive diagnostics engineered in the UK for industrial operations worldwide.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      }
    ]
  };

  const solutions = [
    {
      title: "Real-Time Equipment Monitoring",
      desc: "Track machine performance, live operating status, throughput counts, and operational KPIs in real time across any browser or mobile device.",
      image: "/images/remote-monitoring.jpg",
      alt: "Real-Time Equipment Monitoring and Live Machine Dashboards",
      points: [
        "Sub-second data updates on machine speed and cycle counts",
        "Comprehensive health status indicators for motors and actuators",
        "Power consumption and energy efficiency tracking",
        "Live operator interface screen mirroring via secure VNC"
      ]
    },
    {
      title: "Fault Detection & Instant Alerts",
      desc: "Receive instant notifications the moment a parameter drifts or a trip occurs, enabling immediate technical response and cutting downtime.",
      image: "/images/FAULT FINDING & DIAGNOSTICS.jpg",
      alt: "Automated Industrial Fault Detection and Real-Time Alerts",
      points: [
        "Multi-channel alert routing via SMS, email, and mobile push",
        "Configurable threshold warnings before critical equipment tripping",
        "Timestamped sequence-of-events logging for post-trip analysis",
        "Escalation matrices ensuring unacknowledged alarms reach senior engineers"
      ]
    },
    {
      title: "Remote Diagnostics & Triage",
      desc: "Identify, analyze, and troubleshoot machine issues remotely without waiting hours for an engineer to travel to your physical site.",
      image: "/images/Remote Technical Support.jpg",
      alt: "Remote Technical Diagnostics and PLC Troubleshooting",
      points: [
        "Secure VPN access directly into PLC program rungs and variables",
        "Remote drive parameter reading and fault buffer clearance",
        "Firmware diagnostics and live sensor loop state validation",
        "Over 70% of software-related faults resolved within 30 minutes"
      ]
    },
    {
      title: "Data Visualisation & Dashboards",
      desc: "Access clear, intuitive, and actionable operational insights through bespoke web dashboards tailored for operators, managers, and directors.",
      image: "/images/HMI Development.jpg",
      alt: "Industrial Data Visualisation and SCADA Dashboards",
      points: [
        "Customizable widgets for Overall Equipment Effectiveness (OEE)",
        "Historical trend overlays comparing batch-to-batch efficiency",
        "Multi-tier role access (Floor Operator, Plant Manager, Corporate)",
        "Automated PDF production reports delivered daily or weekly"
      ]
    },
    {
      title: "Secure Cloud Connectivity",
      desc: "Enterprise-grade data transmission engineered with robust cybersecurity, cryptographic keys, and industrial communication protocols.",
      image: "/images/TELEMETRY SYSTEM & TEST RIG.jpg",
      alt: "Secure Industrial Cloud Connectivity and Edge Gateways",
      points: [
        "TLS 1.3 / SSL encryption with outbound-only firewall traversal",
        "OPC UA, MQTT Sparkplug B, and HTTPS protocols",
        "Zero open inbound ports, fully protecting local factory OT networks",
        "Edge caching preventing data loss during temporary internet outages"
      ]
    },
    {
      title: "Integration with Existing Systems",
      desc: "Seamless connection with your current PLCs, control panels, and mechanical machinery without requiring expensive equipment replacement.",
      image: "/images/SYSTEM OPTIMIZATION.jpg",
      alt: "Telemetry Integration with Existing and Legacy Machinery",
      points: [
        "Non-intrusive parallel sensor tapping for 20+ year legacy assets",
        "Serial RS-485 Modbus to cellular / Ethernet gateway conversion",
        "Direct API bridges into corporate ERP, CMMS, and MES platforms",
        "Modular plug-and-play retrofit kits for rapid plant deployment"
      ]
    }
  ];

  const keyFeatures = [
    {
      title: "Live System Monitoring",
      desc: "Real-time stream of machine speeds, temperatures, pressures, and status across all production lines.",
      icon: Activity
    },
    {
      title: "Alarm Notifications & Alerts",
      desc: "Instant SMS, email, and push dispatches to maintenance teams when parameters exceed safe tolerances.",
      icon: BellRing
    },
    {
      title: "Historical Data Tracking",
      desc: "High-resolution cloud logging storing millions of operational data points for compliance and trend analysis.",
      icon: LineChart
    },
    {
      title: "Performance Analytics & OEE",
      desc: "Automated calculations of Availability, Performance, and Quality to uncover hidden capacity bottlenecks.",
      icon: Gauge
    },
    {
      title: "Remote Access Anywhere",
      desc: "Encrypted web interface accessible on desktop, iOS, and Android without requiring client-side software.",
      icon: Smartphone
    },
    {
      title: "Scalable Multi-Site Operations",
      desc: "Unify disparate factories and remote assets across multiple countries into one single pane of glass.",
      icon: Globe2
    }
  ];

  const technologyStack = [
    {
      name: "PLC & Controller Architectures",
      desc: "Direct integration with Siemens S7-1200/1500, Unitronics UniStream, Mitsubishi FX/Q Series, and Rockwell Allen-Bradley controllers.",
      icon: Cpu
    },
    {
      name: "HMI & SCADA Systems",
      desc: "Web-based SCADA, Ignition, Siemens WinCC Unified, and edge HMI connectivity with remote screen control.",
      icon: Sliders
    },
    {
      name: "Electrical Control Panels",
      desc: "Smart telemetry hardware retrofit kits, high-accuracy digital power meters, and Din-rail edge gateways.",
      icon: Boxes
    },
    {
      name: "Industrial Networks & Protocols",
      desc: "OPC UA, MQTT / Sparkplug B, Modbus RTU/TCP, Profinet, and secure RESTful JSON APIs.",
      icon: Radio
    },
    {
      name: "Existing & Legacy Assets",
      desc: "Non-disruptive parallel sensor taps and wireless IIoT vibration nodes bringing older equipment online seamlessly.",
      icon: Workflow
    },
    {
      name: "Cloud Data Warehouses",
      desc: "AWS IoT, Microsoft Azure IoT Hub, or secure private cloud servers with redundant automated backups.",
      icon: Cloud
    }
  ];

  const problemsAndBenefits = [
    {
      problem: "Lack of Operational Visibility",
      problemDetail: "Plant managers lack real-time visibility into machine status when off-site or managing multiple facilities.",
      solution: "24/7 Live Telemetry Dashboards",
      solutionDetail: "Access live line conditions, throughput rates, and operator states anytime, from any connected device worldwide."
    },
    {
      problem: "Delayed Fault Detection",
      problemDetail: "Minor machine faults or temperature spikes go unnoticed until catastrophic breakdown stops the line.",
      solution: "Instant Automated Alarm Dispatch",
      solutionDetail: "Immediate notification the moment values drift, allowing preemptive maintenance before hardware damage occurs."
    },
    {
      problem: "Unplanned Line Downtime",
      problemDetail: "Waiting for external service engineers to travel on-site results in costly production delays and missed deadlines.",
      solution: "Instant Remote Engineering Triage",
      solutionDetail: "Our UK engineers dial securely into the PLC to diagnose logic trips, adjust parameters, and restore operations in minutes."
    },
    {
      problem: "Remote or Unmanned Equipment",
      problemDetail: "Pumping stations, lifting rigs, or offshore shelters are expensive and hazardous to inspect physically.",
      solution: "Autonomous Cloud Fleet Supervision",
      solutionDetail: "Continuous telemetry monitoring with automated self-testing routines and remote emergency fail-safe actuation."
    },
    {
      problem: "Inefficient Reactive Maintenance",
      solution: "Data-Driven Predictive Maintenance",
      problemDetail: "Components are serviced on arbitrary calendar schedules rather than actual running hours and machine wear.",
      solutionDetail: "Track motor runtime, vibration signatures, and thermal trends to replace parts precisely when needed, slashing spare costs."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "System Integration",
      desc: "Our engineers interface secure industrial edge hardware or software gateways into your PLCs, control panels, or field instruments."
    },
    {
      step: "02",
      title: "Data Collection",
      desc: "High-speed polling captures live analog signals, digital states, fault codes, motor speeds, and energy consumption metrics."
    },
    {
      step: "03",
      title: "Secure Cloud Connectivity",
      desc: "Data is packaged into lightweight MQTT / OPC UA packets, encrypted with TLS 1.3, and pushed outbound through firewalls."
    },
    {
      step: "04",
      title: "Live Monitoring & Alerts",
      desc: "Your team views real-time interactive dashboards while automated alerting monitors tolerances and dispatches instant SMS alerts."
    },
    {
      step: "05",
      title: "Ongoing Optimization",
      desc: "Historical telemetry analysis reveals micro-stoppages, bottlenecks, and efficiency trends for continuous production optimization."
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
            <span className="text-[#6DA7BF] font-medium">Remote Monitoring</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Radio className="w-4 h-4 text-[#6DA7BF]" />
                <span>UK-Engineered IIoT • Secure Cloud Telemetry</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Industrial Remote Monitoring &amp; Smart Automation Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Monitor, analyse, and optimise your production systems in real time with secure, cloud-based remote monitoring solutions engineered in the UK, deployed worldwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request a Demo</span>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">&lt;50ms</div>
                  <div className="text-xs text-slate-400 mt-0.5">Real-Time Telemetry</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">TLS 1.3 / VPN</div>
                  <div className="text-xs text-slate-400 mt-0.5">Bank-Grade Encryption</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">24/7/365</div>
                  <div className="text-xs text-slate-400 mt-0.5">Automated Cloud Alerting</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/Industrial Remote Monitoring & Smart Automation Solutions.jpg"
                    alt="Industrial Remote Monitoring & Smart Automation Solutions - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Live Cloud Telemetry</div>
                      <div className="text-[11px] text-[#6DA7BF]">OPC UA / MQTT Stream • Zero Data Loss</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30">
                      ONLINE
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
                <span>Operational Intelligence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Transforming Machine Data into Proactive Operational Control
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                At MASK Control Systems, we provide advanced remote monitoring solutions that give you real-time visibility and control over your automation systems and production equipment.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Modern manufacturing requires more than just automation—it requires insight. Our remote monitoring systems allow you to track performance, detect faults early, and respond quickly to issues, reducing downtime and improving operational efficiency.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                As a UK-based automation engineering company with global capability, we deliver secure, scalable monitoring solutions for industrial environments worldwide. Whether you manage a single plant or multi-national manufacturing sites, we give you instantaneous command over your physical assets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Bank-Grade Security</h3>
                    <p className="text-xs text-slate-400 mt-1">Outbound-only MQTT/TLS 1.3 connections ensure your factory network remains completely air-gapped.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Legacy Asset Support</h3>
                    <p className="text-xs text-slate-400 mt-1">Retrofit packages connect relay panels and older serial PLCs to modern cloud dashboards in hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tech Feature Box */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DA7BF]/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#6DA7BF]" />
                  <span>What is Remote Monitoring?</span>
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  Remote monitoring enables you to access real-time data from your machinery and control systems anytime, anywhere.
                </p>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  By connecting your equipment to a secure cloud-based platform, you gain full visibility into system performance, alarms, and operational status without needing to be physically on-site.
                </p>

                <ul className="space-y-3 text-xs text-slate-300 pt-4 border-t border-white/10">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF]" />
                    <span>Real-time line speed and cycle time counters</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF]" />
                    <span>Automated predictive maintenance alerts before failure</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF]" />
                    <span>Secure remote engineer dial-in for instant fault triage</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF]" />
                    <span>Multi-facility consolidation in one unified executive portal</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Want to see a live dashboard?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR REMOTE MONITORING SOLUTIONS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Full-Stack Telemetry
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Remote Monitoring Solutions
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                Engineered to deliver uninterrupted visibility, actionable insights, and instant technical intervention across critical manufacturing operations.
              </p>
            </div>
            <Link 
              href="/contact/" 
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Explore Telemetry Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
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
                    SOLUTION {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
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
                      <span>Inquire About This Solution</span>
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
          4. KEY FEATURES GRID
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Engineered for Industrial Reliability &amp; Performance
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Everything your engineering team needs to maintain 99.9% uptime, reduce unnecessary callouts, and maximize machine yield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
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
                      {feat.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          5. TECHNOLOGY & INTEGRATION
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              System Compatibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Technology &amp; Integration Scope
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Designed to connect seamlessly with both newly commissioned systems and legacy manufacturing equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyStack.map((tech, idx) => {
              const IconComp = tech.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-white">Have proprietary or bespoke PLC protocols?</div>
            <p className="text-xs text-slate-400 mt-1">Our software engineers write custom communication drivers for legacy serial and proprietary industrial fieldbuses.</p>
          </div>

        </div>
      </section>

      {/* =========================================
          6. PROBLEMS WE SOLVE & BENEFITS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Business Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Problems We Solve vs. Benefits Delivered
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Replacing costly emergency callouts and blind operational guesswork with proactive, data-driven manufacturing control.
            </p>
          </div>

          <div className="space-y-4">
            {problemsAndBenefits.map((item, idx) => (
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
                      {item.problemDetail}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center text-[#6DA7BF]">
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Benefit Side */}
                <div className="lg:col-span-6 flex items-start gap-3.5 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] mb-1">
                      Benefit: {item.solution}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.solutionDetail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0A101A] border border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-2">
              <div className="text-base font-bold text-white">Reduced</div>
              <div className="text-[11px] text-slate-400 mt-1">Unplanned Downtime</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-[#6DA7BF]">Faster</div>
              <div className="text-[11px] text-slate-400 mt-1">Fault Response Time</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-white">Improved</div>
              <div className="text-[11px] text-slate-400 mt-1">Operational Efficiency</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-[#6DA7BF]">Accurate</div>
              <div className="text-[11px] text-slate-400 mt-1">Data-Driven Decisions</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-white">Lower</div>
              <div className="text-[11px] text-slate-400 mt-1">Maintenance Costs</div>
            </div>
            <div className="p-2">
              <div className="text-base font-bold text-[#6DA7BF]">Maximized</div>
              <div className="text-[11px] text-slate-400 mt-1">System Reliability</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          7. HOW IT WORKS (5 Steps)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Architecture &amp; Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              How Remote Monitoring Works
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              From physical sensor extraction to encrypted cloud analytics, our 5-step data pipeline guarantees reliability and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflowSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-[#6DA7BF]/25 font-mono mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>STEP {s.step}</span>
                  <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          8. GLOBAL MONITORING CAPABILITY
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-[#0C121C] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DA7BF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  UK Engineering • Global Asset Oversight
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Global Monitoring Capability Across Multi-Site Operations
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Our remote monitoring solutions allow you to manage operations across multiple sites, facilities, and international locations simultaneously.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Whether your machinery is located locally in the UK or deployed at remote client sites in Europe, the Middle East, or the Americas, you can monitor performance, track issues, review OEE analytics, and maintain control from anywhere in the world.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Globe2 className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Multi-Tenant Fleet Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Lock className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Role-Based Access Control</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Radio className="w-4 h-4 text-[#6DA7BF]" />
                    <span>4G/5G Cellular &amp; Satellite Backhaul</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-[#6DA7BF]">24/7/365</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Continuous Telemetry</div>
                  <p className="text-[11px] text-slate-500 mt-1">Automated watchdog checks ensuring round-the-clock machine health.</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-white">&gt;70%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Issues Resolved Remotely</div>
                  <p className="text-[11px] text-slate-500 mt-1">Eliminating callout travel delays and high site engineer costs.</p>
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
              We help you move from reactive, stress-inducing breakdowns to proactive, data-driven manufacturing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Radio className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Advanced Remote Monitoring Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modern, intuitive web dashboards engineered with sub-second update latency and powerful historical trending.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Cpu className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Integration with PLC &amp; Automation Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct integration with Siemens, Unitronics, Mitsubishi, and multi-vendor industrial networks without third-party middle tiers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <ShieldCheck className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Secure Cloud-Based Technology</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bank-level TLS 1.3 encryption, secure token authentication, and strict separation between OT and corporate IT networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Globe2 className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">UK-Based Engineering with Global Reach</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineers located in Birmingham, UK, providing expert technical analysis and rapid dispatch when physical intervention is needed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Activity className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Scalable for Multi-Site Operations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Start with a single machine pilot and seamlessly expand across hundreds of production assets with zero infrastructure rebuilds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10">
              <Wrench className="w-7 h-7 text-[#6DA7BF] mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Ongoing Support &amp; System Optimisation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated engineering SLAs, monthly telemetry reviews, and continuous algorithm tuning to maximize your plant efficiency.
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
              Industry Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Industries Benefiting from Smart Telemetry
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Delivering secure operational intelligence across regulated, high-reliability manufacturing environments worldwide.
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
                Engineering Ecosystem
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
              href="/systems-integration/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Workflow className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Systems Integration
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Unify machinery, PLCs, SCADA &amp; enterprise networks.
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
                  Custom electrical panel design with smart telemetry gateways.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

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
                  Bespoke machinery engineered with native IoT connectivity.
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
                  Site hookup, network configuration &amp; SAT validation.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#6DA7BF] mt-4 flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/service-and-breakdown/"
              className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Activity className="w-6 h-6 text-[#6DA7BF] mb-3" />
                <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                  Service &amp; Breakdown
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  24/7 emergency troubleshooting &amp; rapid on-site repair.
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
              Take Control of Your Production
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Want Real-Time Visibility Over Your Production Systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Partner with a UK-based automation engineering team delivering smart monitoring solutions worldwide. Gain instant visibility, prevent costly downtime, and optimize efficiency today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact/"
                className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-xl flex items-center gap-2 group"
              >
                <span>Request a Demo</span>
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
              Live Dashboard Demonstration • Non-Intrusive Trial Packages • Worldwide Deployment
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
