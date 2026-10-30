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
  Flame
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Food & FMCG Automation Solutions | MASK Control Systems Ltd",
  description: "UK-engineered automation solutions for food, beverage, and FMCG manufacturers. Hygienic washdown control panels, robotic palletizing, PLC integration, and OEE optimization worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/industries/food-fmcg-automation/"
  },
  openGraph: {
    title: "Food & FMCG Automation Solutions | MASK Control Systems Ltd",
    description: "UK-engineered automation solutions for food, beverage, and FMCG manufacturers. Hygienic control panels, robotic palletizing, PLC integration, and OEE optimization worldwide.",
    url: "https://maskcontrols.com/industries/food-fmcg-automation/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/Food & FMCG Automation.jpg",
        width: 1200,
        height: 630,
        alt: "Food & FMCG Automation Solutions - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function FoodFmcgAutomationPage() {
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
            "name": "Food & FMCG Automation",
            "item": "https://maskcontrols.com/industries/food-fmcg-automation/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Food & FMCG Automation Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "description": "Bespoke automation engineering, hygienic washdown control panels, robotic palletizing, and PLC systems for food and beverage operations.",
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a typical food or FMCG automation project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timelines depend on scope, but most projects move from consultation to commissioning within a few months. Offline testing and factory acceptance testing before installation help keep on-site downtime to an absolute minimum."
            }
          },
          {
            "@type": "Question",
            "name": "Can you upgrade an existing line instead of replacing it entirely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many of our projects involve integrating new automation into an existing line rather than a full rebuild, which keeps capital costs down and minimizes disruption to daily production schedules."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with manufacturers outside the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While we are headquartered in Cullompton, Devon, in the United Kingdom, we deliver food and FMCG automation projects for manufacturers across multiple continents, applying the same rigorous engineering standards wherever your project is located."
            }
          }
        ]
      }
    ]
  };

  const warningSigns = [
    {
      title: "End-of-Line Bottlenecks",
      desc: "Manual palletizing or pick-and-place tasks are creating severe bottlenecks, restricting your entire upstream plant throughput."
    },
    {
      title: "Lengthy SKU Changeovers",
      desc: "Switching between product recipes or packaging formats takes hours of mechanical adjustments and eats into productive line time."
    },
    {
      title: "Paper-Based Traceability Risks",
      desc: "Relying on manual clipboard logs and paper batch records slows down BRCGS / HACCP audits and risks human transcription errors."
    },
    {
      title: "Recurring Unplanned Stoppages",
      desc: "Intermittent sensor trips, conveyor jams, or motor overloads are becoming daily occurrences rather than rare exceptions."
    },
    {
      title: "Overstretched Engineering Staff",
      desc: "Your internal maintenance team is consumed by daily firefighting, leaving zero bandwidth to research, engineer, or deliver new automation."
    },
    {
      title: "Automation Skills Shortage",
      desc: "Struggling to recruit or retain senior PLC and control engineers with the specific platform experience required for modern lines."
    }
  ];

  const services = [
    {
      title: "PLC Programming & Control Systems",
      desc: "Our PLC programming services focus on creating robust, reliable control logic tailored for food and beverage production environments. Utilizing industry-standard platforms like Mitsubishi, Siemens, and Unitronics, we engineer solutions that streamline critical operations such as filling, capping, wrapping, and checkweighing. By moving beyond isolated machine operation, we provide full line integration that ensures every component of your production process works in perfect harmony. This unified approach minimizes process bottlenecks and maximizes the consistency of your output.",
      image: "/images/PLC Programming.jpg",
      alt: "PLC Programming and Control Systems for Food and FMCG Production Lines"
    },
    {
      title: "Electrical Control Panel Design & Build",
      desc: "We specialize in the design and manufacture of custom electrical control panels that are engineered specifically for the harsh realities of food and beverage manufacturing. Every panel is built to meet strict hygiene requirements, ensuring durability against the rigorous washdown cycles and sanitation standards common on a busy production floor. Our design philosophy prioritizes both structural integrity and compliance, ensuring that your controls are protected from environmental hazards. By building systems that withstand these demanding conditions, we ensure long-term reliability and minimize maintenance needs for your facility.",
      image: "/images/Milk Processing Control Cabinet.jpg",
      alt: "Hygienic Stainless Steel Electrical Control Panels for Food Processing"
    },
    {
      title: "Systems Integration & Conveyor Control",
      desc: "Our systems integration services focus on orchestrating smooth, efficient product flow across your entire production line. We design intelligent conveyor control systems that incorporate advanced accumulation and divert logic, ensuring that your materials move seamlessly from start to finish. Instead of allowing your machines to function as disconnected, independent units, we integrate them into a cohesive system that optimizes throughput. This comprehensive coordination reduces downtime caused by jams or mismatches, allowing for a more fluid and productive manufacturing environment.",
      image: "/images/systems-integration.jpg",
      alt: "Food Conveyor Control and Production Line Integration"
    },
    {
      title: "Robotic Palletizing & End-of-Line Automation",
      desc: "We provide end-of-line automation solutions featuring robotic palletizing cells that significantly boost consistency and throughput while removing the need for manual, repetitive lifting. Our designs address safety and space constraints by offering both fenceless and fully guarded configurations tailored to your specific floor plan and line speed requirements. By automating this final stage, we reduce the risk of workplace injuries and eliminate bottlenecks at the end of your process. This creates a more reliable workflow that keeps pace with your upstream production while maintaining high standards of quality.",
      image: "/images/Robotic Palletizing & End-of-Line Automation.jpg",
      alt: "Robotic Palletizing and End of Line Automation in Food Manufacturing"
    },
    {
      title: "HMI & SCADA Development",
      desc: "Our HMI and SCADA development services provide your team with powerful, intuitive interfaces for monitoring and controlling your production environment. Designed specifically for fast-changeover environments, these dashboards offer clear visibility into real-time performance and instant control during SKU switches or production runs. We prioritize usability and data accessibility, ensuring that operators can make informed decisions quickly. By simplifying complex operational data into actionable insights, our systems empower your team to maintain efficiency even when production requirements change rapidly.",
      image: "/images/HMI Development.jpg",
      alt: "Touchscreen HMI and SCADA Dashboards for Food and Beverage Operations"
    },
    {
      title: "Remote Monitoring & Telemetry",
      desc: "We provide secure, cloud-based remote monitoring solutions that offer real-time diagnostics and proactive alerts for your production lines. Using industry-standard protocols like OPC UA, MQTT, and HTTPS, our systems provide instant visibility into your operations from any location, allowing for immediate response to potential faults. This integration bridges the critical gap between on-site machinery and off-site oversight, ensuring that performance data is always accessible for review. By identifying issues before they escalate, our monitoring approach reduces reactive repairs, lowers maintenance overhead, and creates a smarter, data-driven foundation for factory management.",
      image: "/images/remote-monitoring.jpg",
      alt: "Cloud Remote Telemetry and OEE Monitoring for Food Lines"
    },
    {
      title: "Offline Programming & Commissioning Support",
      desc: "Our offline programming and commissioning support services are designed to minimize your operational downtime by perfecting control logic before it is deployed. We build and thoroughly test your software in a controlled, virtual environment, allowing us to identify and resolve issues early in the process. This meticulous pre-testing phase significantly reduces the risk of installation delays and compresses the overall commissioning window. By moving the majority of the integration work off-site, we ensure a faster, more seamless transition to your production floor during final implementation.",
      image: "/images/PLC SYSTEM DESIGN & CONFIGURATION.jpg",
      alt: "Offline PLC Simulation and Virtual Factory Acceptance Testing"
    },
    {
      title: "Installation & Commissioning",
      desc: "We manage your entire on-site installation and commissioning project, providing comprehensive support from initial equipment setup to final production sign-off. Our team handles every critical step, including rigorous I/O testing, dry cycling, and wet product trials, to verify that your new system performs exactly as specified. We remain actively involved throughout the entire deployment phase, ensuring that all systems are fully integrated and optimized for your unique operational requirements. Our commitment continues until a successful, full handover is achieved, giving you complete confidence in your new automation solution.",
      image: "/images/Industrial Installation & Commissioning Services.jpg",
      alt: "On-Site Installation and Commissioning of Food Packaging Lines"
    }
  ];

  const howWeWorkSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "We review your current line, evaluate physical bottlenecks, understand recipe variables, and align on your target OEE metrics."
    },
    {
      step: "02",
      title: "Design",
      desc: "Our engineers develop hygienic control system schematics, 3D cabinet models, and safety loop specifications tailored to your compliance needs."
    },
    {
      step: "03",
      title: "Build & Test",
      desc: "We manufacture washdown panels and write control logic in-house, conducting comprehensive virtual simulation and FAT before dispatch."
    },
    {
      step: "04",
      title: "Commissioning",
      desc: "We install on-site during scheduled changeover windows, execute dry cycling and wet product trials, and train operators before handover."
    },
    {
      step: "05",
      title: "Support",
      desc: "We deliver ongoing maintenance, 24/7 emergency response, remote telemetry oversight, and scheduled service agreements."
    }
  ];

  const faqs = [
    {
      q: "How long does a typical food or FMCG automation project take?",
      a: "Timelines depend on scope, but most projects move from consultation to commissioning within a few months. Offline virtual testing and comprehensive Factory Acceptance Testing (FAT) before installation help keep on-site downtime to an absolute minimum."
    },
    {
      q: "Can you upgrade an existing line instead of replacing it entirely?",
      a: "Yes. Many of our projects involve integrating new automation into an existing line rather than a full rebuild, which keeps capital expenditure down and minimizes disruption to your active production schedules."
    },
    {
      q: "Do you work with manufacturers outside the UK?",
      a: "Yes. While we are headquartered in Cullompton, Devon, in the United Kingdom, we deliver food and FMCG automation projects for manufacturers across multiple continents, applying the same rigorous engineering standards wherever your project is located."
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
            <Link href="/industries/" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#6DA7BF] font-medium">Food &amp; FMCG Automation</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Flame className="w-4 h-4 text-[#6DA7BF]" />
                <span>Food &amp; Beverage Engineering • Speed, Hygiene &amp; Consistency</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Food &amp; FMCG Automation Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                MASK Control Systems designs and delivers automation solutions for food and beverage manufacturers across the UK and worldwide. Since 2013, we have engineered PLC control systems, hygienic control panels, and full production line integrations for FMCG operations that demand speed, hygiene, and consistency at every stage.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-7 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2 group"
                >
                  <span>Request a Line Consultation</span>
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
                  <div className="text-xl sm:text-2xl font-bold text-white">Since 2013</div>
                  <div className="text-xs text-slate-400 mt-0.5">Engineering Heritage</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#6DA7BF]">HACCP &amp; BRC</div>
                  <div className="text-xs text-slate-400 mt-0.5">Audit-Ready Compliance</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">3 Continents</div>
                  <div className="text-xs text-slate-400 mt-0.5">Global Deployment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Technical Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090E16] group">
                <div className="relative h-[340px] sm:h-[440px] w-full">
                  <Image
                    src="/images/Food & FMCG Automation.jpg"
                    alt="Food & FMCG Automation Solutions - MASK Control Systems Ltd"
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
                      <div className="text-xs font-bold text-white uppercase tracking-wider">High-Speed Packaging Line</div>
                      <div className="text-[11px] text-[#6DA7BF]">Hundreds of Units/Min • Sub-Second Takt Time</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      OPTIMAL OEE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. WHY SPECIALIZED AUTOMATION IS ESSENTIAL
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF]">
                <span>Extreme Operational Pressures</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Why Food &amp; FMCG Production Lines Need Specialized Automation
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                Food and FMCG production lines operate under pressures that most other industries do not face. Packaging and filling lines often run at hundreds of units per minute, and a control system must respond in milliseconds to keep pace without introducing errors.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Manufacturers also handle multiple SKUs on the same line, which means automation must support fast changeovers without long downtime or heavy operator intervention.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Hygiene adds another layer of complexity. Food-grade environments require washdown-rated equipment, contamination prevention built into the system design, and full traceability that can withstand an audit. On top of all this, every percentage point of overall equipment effectiveness (OEE) directly affects your bottom line, so reliability and fast fault recovery are not optional. We design every system with these pressures in mind from the first specification meeting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Milliseconds Response</h3>
                    <p className="text-xs text-slate-400 mt-1">High-speed packaging synchronization handling hundreds of units per minute cleanly.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Rapid Recipe Switching</h3>
                    <p className="text-xs text-slate-400 mt-1">Touchscreen SKU changeovers reducing line conversion downtime from hours to minutes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DA7BF]/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#6DA7BF]" />
                  <span>The Hygiene &amp; OEE Demands</span>
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">IP66/IP69K Washdown:</strong> Cabinets and field cabling rated to withstand high-pressure, chemical caustic sanitation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Full Batch Traceability:</strong> Automated tracking from raw ingredient intake through to finished pallet serialization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">Contamination Prevention:</strong> Sloped roofs, stainless hardware, and crevice-free mechanical engineering.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7BF] mt-2 shrink-0" />
                    <span><strong className="text-white">OEE Revenue Gain:</strong> Every 1% improvement in availability delivers thousands in weekly profit.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400">Planning a packaging line upgrade?</div>
                  <Link 
                    href="/contact/" 
                    className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] flex items-center gap-1 group"
                  >
                    <span>Talk to an Engineer</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. THE UK FOOD & DRINK MANUFACTURING LANDSCAPE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Industry Landscape &amp; Economic Context
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                The UK Food &amp; Drink Manufacturing Landscape
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Food and drink manufacturing is the largest manufacturing sector in the UK, with a combined turnover of more than £148 billion and a Gross Value Added (GVA) of £37 billion to the economy. The sector includes over 12,000 manufacturers, and the vast majority—around 97 percent—are small and medium-sized businesses rather than large multinational operations.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                This scale comes with real pressure. Labor shortages in food and drink manufacturing have consistently run higher than the wider UK manufacturing average, and industry research has pointed to billions of pounds in lost output as a direct result.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                At the same time, industry analysis has identified a significant untapped opportunity, worth an estimated £7 to £14 billion, that could be unlocked through greater investment in automation, digital systems, and connected production technology. For SME manufacturers, this makes automation less of a luxury and more of a practical response to a labor market that is not getting easier.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-[#6DA7BF]">£148B</div>
                  <div className="text-[11px] text-slate-400 mt-1">Sector Turnover</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-white">97%</div>
                  <div className="text-[11px] text-slate-400 mt-1">SME Manufacturers</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0C121C] border border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-emerald-400">£14B</div>
                  <div className="text-[11px] text-slate-400 mt-1">Automation Potential</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0C121C]">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/The UK Food & Drink Manufacturing Landscape.png"
                    alt="The UK Food & Drink Manufacturing Landscape - MASK Control Systems Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6 bg-[#0C121C] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Unlocking UK Manufacturing Productivity</div>
                    <div className="text-[11px] text-slate-400">Practical, scalable automation strategies built specifically for UK SMEs</div>
                  </div>
                  <span className="px-3 py-1 rounded bg-[#6DA7BF]/20 text-[#6DA7BF] border border-[#6DA7BF]/30 text-xs font-mono font-bold">
                    GROWTH
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          4. SIGNS YOUR LINE NEEDS AUTOMATION
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Self-Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Signs Your Production Line Needs Automation
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Many manufacturers reach out to us after noticing the same warning signs on their line. If any of the following sound familiar, it is worth a conversation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {sign.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {sign.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-[#6DA7BF] font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Solvable in Phase 1</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          5. OUR FOOD & FMCG AUTOMATION SERVICES (8 Services)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Food &amp; FMCG Automation Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                Comprehensive engineering disciplines built to keep your output high, changeovers rapid, and downtime minimal.
              </p>
            </div>
            <Link 
              href="/contact/" 
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0C121C] border border-white/10 overflow-hidden hover:border-[#6DA7BF]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Real Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#090E16]">
                    <Image
                      src={srv.image}
                      alt={srv.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0C121C]/80 backdrop-blur-sm border border-white/10 text-[11px] font-mono font-bold text-[#6DA7BF]">
                      SERVICE 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6DA7BF] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/contact/"
                    className="text-xs font-semibold text-[#6DA7BF] hover:text-[#5B95AD] inline-flex items-center gap-1.5 group/link"
                  >
                    <span>Inquire About {srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          6. COMPLIANCE, TRACEABILITY & ENERGY
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Compliance Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0C121C] border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  Compliance &amp; Traceability Built In
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  Food and FMCG manufacturers operate under strict hygiene and quality frameworks, and we design our systems to support them rather than work around them.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  Our automation solutions align with HACCP and BRCGS standards, and we build full audit traceability into every system, from ingredient intake through to the finished pallet. When your hygiene certification audit comes around, your automation system supports the process instead of complicating it.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-emerald-400 font-mono">
                <Check className="w-4 h-4" />
                <span>HACCP &amp; BRCGS Audit Alignment</span>
              </div>
            </div>

            {/* Energy Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0C121C] border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  Energy Efficiency &amp; Operational Cost Reduction
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  Automation does more than increase speed. Well-designed control systems reduce energy consumption through smarter motor control, optimized cycle timing, and reduced waste from inconsistent manual processes.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  For manufacturers facing rising energy costs, this is often one of the more immediate and measurable returns from an automation upgrade, alongside direct labor and downtime savings.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-[#6DA7BF] font-mono">
                <Check className="w-4 h-4" />
                <span>Variable Speed Drive (VFD) Optimization</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          7. HOW WE WORK (5-Step Process)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              How We Work
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Every food and FMCG project follows the same structured engineering process, regardless of scale or location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {howWeWorkSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 relative overflow-hidden hover:border-[#6DA7BF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-[#6DA7BF]/20 font-mono mb-3">
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
                  <span>STAGE {s.step}</span>
                  <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          8. WHY CHOOSE MASK FOR FOOD & FMCG
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-[#0C121C] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DA7BF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Accredited Engineering Integrity
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Why Food &amp; FMCG Manufacturers Choose MASK
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  We hold ISO 9001, ISO 17020, and ISO 17025 certifications, and we apply that same level of quality management to every food and FMCG project we take on.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Our team works across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Omron platforms, so we recommend the right technology for your line rather than pushing a single vendor&apos;s equipment.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  We manage every project end to end, from initial design through build, installation, commissioning, and ongoing 24/7 breakdown support, so you work with one accountable partner rather than juggling multiple contractors. As recruiting in-house automation engineers becomes harder across the industry, we act as an experienced outsourced engineering team that already understands the demands of food and FMCG production.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
                    <span>ISO 9001 / 17020 / 17025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Cpu className="w-4 h-4 text-[#6DA7BF]" />
                    <span>Multi-Platform Vendor Neutrality</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Clock className="w-4 h-4 text-[#6DA7BF]" />
                    <span>24/7 Emergency Line Support</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-[#6DA7BF]">Headquarters</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Cullompton, Devon, UK</div>
                  <p className="text-[11px] text-slate-500 mt-1">Engineering excellence dispatched nationwide and internationally across 3 continents.</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070D16] border border-white/10 text-center">
                  <div className="text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Turnkey Accountability</div>
                  <p className="text-[11px] text-slate-500 mt-1">One partner from concept CAD design through to final production sign-off.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          9. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Clear answers regarding timelines, line retrofits, and global deployment capability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#6DA7BF] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          10. EXPLORE OTHER INDUSTRY SECTORS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Related Sectors
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Explore Other Industry Sectors
              </h2>
            </div>
            <Link 
              href="/industries/" 
              className="text-xs font-bold text-[#6DA7BF] hover:text-[#5B95AD] inline-flex items-center gap-1.5"
            >
              <span>👉 View All Industry Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesList
              .filter((ind) => ind.href !== "/industries/food-fmcg-automation/")
              .map((ind, idx) => (
                <Link
                  key={idx}
                  href={ind.href}
                  className="p-5 rounded-xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all duration-200 flex flex-col justify-between group text-center"
                >
                  <div>
                    <div className="w-9 h-9 mx-auto rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6DA7BF] mb-3 group-hover:scale-110 transition-transform">
                      <Factory className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-white group-hover:text-[#6DA7BF] transition-colors line-clamp-2">
                      {ind.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/5 text-[10px] text-slate-400 flex items-center justify-center gap-1">
                    <span>Explore</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
          </div>

        </div>
      </section>

      {/* =========================================
          11. CALL TO ACTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#070D16] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your Food &amp; FMCG Production Line?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              If you are planning a new food or FMCG automation project, or you need to modernize an existing line, our team is ready to help. Contact us directly to discuss your requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact/"
                className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-xl flex items-center gap-2 group"
              >
                <span>Request a Line Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+447412999343"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#6DA7BF]" />
                <span>Call +44 7412 999343</span>
              </a>

              <a
                href="mailto:sales@maskcontrols.com"
                className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#6DA7BF]" />
                <span>sales@maskcontrols.com</span>
              </a>
            </div>

            <div className="pt-6 text-xs text-slate-500">
              Headquarters: Cullompton, Devon, UK • On-Site &amp; Remote Global Engineering Delivery
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
