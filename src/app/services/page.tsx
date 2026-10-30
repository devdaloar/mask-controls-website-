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
  Wrench, 
  Layers, 
  Radio, 
  PhoneCall, 
  Factory, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Users2, 
  Globe2, 
  Clock, 
  ThermometerSnowflake, 
  Phone,
  FileCheck2,
  Workflow
} from "lucide-react";
import { industriesList } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Industrial Automation Services & Engineering Solutions | MASK Control Systems Ltd",
  description: "UK-based industrial automation specialists delivering bespoke machinery design & build, custom electrical control panels, PLC programming, systems integration, and full lifecycle support worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/services/"
  },
  openGraph: {
    title: "Industrial Automation Services & Engineering Solutions | MASK Control Systems Ltd",
    description: "Bespoke engineering, PLC systems, control panel design, and full project lifecycle support to manufacturers worldwide.",
    url: "https://maskcontrols.com/services/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function ServicesPage() {
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
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Industrial Automation Services & Engineering Solutions",
        "provider": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "areaServed": ["United Kingdom", "Europe", "Middle East", "Worldwide"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Core Industrial Automation Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design & Build Services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Control Panel Design & Build" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation & Commissioning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servicing, Breakdown & Support" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Systems Integration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Monitoring & Telemetry" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PLC Programming & Software" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation & Bespoke Machinery" } }
          ]
        }
      }
    ]
  };

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

          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#6DA7BF]/10 blur-[140px] rounded-full pointer-events-none" />

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="relative mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5 text-slate-500" /></li>
              <li className="text-[#6DA7BF] font-medium" aria-current="page">Services</li>
            </ol>
          </nav>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DA7BF] shadow-[0_0_10px_#6DA7BF] animate-pulse" />
                <span>UK Automation Specialists • Global Deployment</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight">
                Industrial Automation Services &{" "}
                <span className="text-[#6DA7BF]">Engineering Solutions</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                UK-based automation specialists delivering bespoke engineering, PLC systems, and full project lifecycle support to manufacturers worldwide.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>End-to-End Delivery (Concept to Handover)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Bespoke Mechanical & Electrical Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Hardware Agnostic PLC & SCADA Programming</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Rapid Breakdown & Remote Telemetry Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+447412999343"
                  className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#6DA7BF]" />
                  <span>Speak to an Engineer</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#090E16] shadow-2xl group">
                <div className="relative h-80 sm:h-[420px] w-full">
                  <Image
                    src="/images/manufacturing.jpg"
                    alt="MASK Control Systems Industrial Automation Services Facility UK"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E16] via-transparent to-transparent opacity-90" />
                </div>

                {/* Floating Metrics Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F141C]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">8</div>
                    <div className="text-[11px] text-slate-400 font-medium">Core Disciplines</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white">100%</div>
                    <div className="text-[11px] text-slate-400 font-medium">In-House Quality</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">Global</div>
                    <div className="text-[11px] text-slate-400 font-medium">Field Support</div>
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
      <section className="py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-[#0B121D] p-8 sm:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Full Project Lifecycle Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              End-to-End Automation Tailored to Your Production Environment
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">MASK Control Systems Ltd</strong>, we provide complete industrial automation services designed to improve production efficiency, reduce downtime, and support long-term operational performance.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              As a UK-based engineering company with global deployment capability, we deliver end-to-end automation solutions—from initial concept and design through to installation, commissioning, and ongoing technical support. Whether you need a fully bespoke machine, PLC system integration, or rapid breakdown support, our team delivers reliable, scalable solutions tailored to your production environment.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR CORE SERVICES (Full Detailed Cards with Internal Links)
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Specialist Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Core Services
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Explore our comprehensive range of industrial automation and engineering capabilities.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Service 1: Design & Build */}
            <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#6DA7BF]/50 transition-all shadow-xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center shrink-0 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Bespoke Machinery</span>
                      <h3 className="text-2xl font-bold text-white">Design & Build</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    We design and build bespoke machinery and automation systems engineered specifically around your production requirements. From concept development and 2D/3D modelling to full system fabrication and testing, every solution is built for performance, efficiency, and long-term reliability.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Custom machine design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>2D / 3D CAD modelling</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Electrical & mechanical system design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Proof of concept development</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Prototype and full system build</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/design-build-services/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all"
                    >
                      <span>Learn More About Design & Build</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/design-build.jpg"
                      alt="Bespoke Machine Design & Build Services - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Electrical Control Panels */}
            <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#6DA7BF]/50 transition-all shadow-xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center shrink-0 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                      <Settings2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Custom Panel Shop</span>
                      <h3 className="text-2xl font-bold text-white">Electrical Control Panels</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    We design and build custom electrical control panels tailored to the exact requirements of your machinery, production systems, and operational environment. From simple relay logic panels to advanced PLC and HMI-controlled systems, our panels are engineered for reliability, safety, and long-term performance. Every panel is built to specification, fully tested before delivery, and designed to integrate seamlessly with your wider automation system.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Custom control panel design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>PLC and HMI panel integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Relay logic & automated control systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>CAD schematic drawings & documentation</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Full factory testing and quality checks before delivery</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/electrical-control-panel-design/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all"
                    >
                      <span>Learn More About Electrical Control Panels</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/control-panel.jpg"
                      alt="Custom Electrical Control Panel Design & Manufacture UK - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Installation & Commissioning */}
            <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#6DA7BF]/50 transition-all shadow-xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center shrink-0 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">On-Site Engineering</span>
                      <h3 className="text-2xl font-bold text-white">Installation & Commissioning</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Our engineers provide professional installation and commissioning services to ensure your automation systems are deployed correctly and operate at peak performance. We work on-site with minimal disruption, ensuring smooth system integration and full operational readiness.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Professional on-site installation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>System configuration and setup</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Performance & safety testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Comprehensive operator training</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Final line handover, SAT verification & documentation</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/installation-commissioning/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all"
                    >
                      <span>Learn More About Installation & Commissioning</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/About-Mask-Control-Systems.jpg"
                      alt="Professional On-Site Automation Installation & Commissioning Engineers - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Servicing, Breakdown & Support */}
            <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#6DA7BF]/50 transition-all shadow-xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center shrink-0 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">24/7 Field Response</span>
                      <h3 className="text-2xl font-bold text-white">Servicing, Breakdown & Technical Support</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    We provide fast-response servicing and breakdown support to keep your operations running without costly interruptions. From PLC faults to electrical system issues, our team delivers rapid diagnostics and effective solutions both on-site and remotely.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Emergency breakdown support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>PLC & control system diagnostics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Electrical fault finding & repair</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Remote technical troubleshooting</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Scheduled preventative maintenance agreements</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/service-and-breakdown/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all"
                    >
                      <span>Learn More About Servicing & Support</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/service-breakdown.jpg"
                      alt="Industrial Machinery Emergency Servicing & Breakdown Support - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: Systems Integration */}
            <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#6DA7BF]/50 transition-all shadow-xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center shrink-0 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Connected Factory</span>
                      <h3 className="text-2xl font-bold text-white">Systems Integration</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    We integrate machinery, control systems, and production processes into a seamless, efficient workflow. Our systems integration services ensure your entire operation works together reliably, improving productivity and data visibility across the factory floor.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Multi-vendor PLC system integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Machine-to-machine (M2M) connectivity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>SCADA and central supervisory control</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Industrial protocols (Profinet, Ethernet/IP, Modbus)</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Factory line optimisation and bottleneck elimination</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/systems-integration/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all"
                    >
                      <span>Learn More About Systems Integration</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/systems-integration.jpg"
                      alt="Factory Systems Integration and PLC Industrial Networking - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6: Remote Monitoring */}
            <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#6DA7BF]/50 transition-all shadow-xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center shrink-0 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                      <Radio className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Industry 4.0 Telemetry</span>
                      <h3 className="text-2xl font-bold text-white">Remote Monitoring</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Our advanced remote monitoring solutions give you real-time visibility and control over your production systems. With secure cloud-based connectivity, you can monitor performance, detect faults early, and dramatically reduce unplanned downtime.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Real-time equipment monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Instant fault alerts and SMS/email notifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Remote diagnostics & secure engineer dial-in</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Cloud connectivity (OPC UA, MQTT, HTTPS)</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span>Performance analytics and OEE data tracking</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/remote-monitoring/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all"
                    >
                      <span>Learn More About Remote Monitoring</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#6DA7BF]/40 transition-colors">
                    <Image
                      src="/images/remote-monitoring.jpg"
                      alt="Remote Industrial Monitoring and Telemetry Cloud Systems - MASK Control Systems Ltd"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 7 & 8: Automation & Bespoke Machinery + PLC Programming */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Automation & Bespoke Machinery */}
              <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-8 hover:border-[#6DA7BF]/50 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Custom Machinery</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">Automation & Bespoke Machinery</h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    Turnkey robotic cells, automated assembly rigs, and precision material handling systems built specifically around your production bottlenecks.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                      <span>Custom automated assembly & packaging lines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                      <span>Robotic pick-and-place & vision inspection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                      <span>Conveyor automation & product routing</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/automation/"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                  >
                    <span>Explore Automation Machinery</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* PLC Programming & Software */}
              <div className="bg-[#0C121C] border border-white/10 rounded-3xl p-8 hover:border-[#6DA7BF]/50 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-colors">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Control Architecture</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">PLC Programming & Software</h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    Robust, cleanly commented PLC code and intuitive HMI touchscreen designs adhering to IEC 61131-3 international programming standards.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                      <span>Siemens TIA Portal (S7-1200 / S7-1500)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                      <span>Mitsubishi MELSEC (iQ-R, iQ-F, FX Series)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                      <span>Unitronics UniStream & Vision all-in-one</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/plc-programming/"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
                  >
                    <span>Explore PLC Programming</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. ADDITIONAL ENGINEERING SERVICES
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Full-Scope Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Additional Engineering Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We also provide a range of specialist engineering and manufacturing capabilities from a single trusted partner:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Electrical Control Panel Design & Build</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                From conceptual schematics to cabinet layout, wire marking, and FAT testing in our dedicated UK panel workshop.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Custom Machinery Fabrication</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Precision CNC machining, stainless steel welding, framework assembly, and guarded enclosure manufacture.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Subcontract Assembly Services</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Flexible sub-assembly and electro-mechanical manufacturing capacity for OEMs and Tier-1 engineering firms.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Industrial Temperature Control Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                F-Gas certified engineering for process chillers, cooling jackets, thermal chambers, and hygienic heat exchangers.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Proof of Concept & Prototype Development</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Rapid bench testing, simulated line trials, and functional prototypes to validate automation ROI before full rollout.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0F1826] to-[#0A101A] border border-[#6DA7BF]/40 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Have a Custom Need?</span>
                <h3 className="text-base font-bold text-white mt-1">Single-Source Delivery</h3>
                <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                  These services allow us to deliver complete, integrated turnkey solutions from a single trusted partner.
                </p>
              </div>
              <Link 
                href="/contact/"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
              >
                <span>Discuss Your Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. INDUSTRIES WE SUPPORT
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Industries We Support
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              Each solution is engineered to meet industry-specific standards, compliance requirements, and operational challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.slice(0, 6).map((ind) => (
              <Link 
                key={ind.href}
                href={ind.href}
                className="bg-[#0C121C] p-6 rounded-2xl border border-white/10 hover:border-[#6DA7BF]/60 hover:bg-[#0F1724] transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#6DA7BF] transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {ind.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#6DA7BF] transition-colors">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          6. WHY CHOOSE MASK CONTROL SYSTEMS
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              The Engineering Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              We focus on delivering solutions that provide measurable results, long-term performance, and operational confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">End-to-End Partner</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Complete project ownership from initial CAD design to installation and 24/7 technical breakdown support.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Fully Bespoke Solutions</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Zero off-the-shelf compromises. Every control panel, line layout, and PLC rung is custom tailored to your factory.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Multidisciplinary Team</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                In-house mechanical, electrical, and software engineers working seamlessly together under one roof.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">UK Build, Global Deployment</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Proudly engineered in Devon, UK, and deployed with full international field commissioning capability.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Advanced PLC Expertise</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Certified proficiency across Siemens, Mitsubishi, Unitronics, Allen-Bradley, and Schneider Electric controllers.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Reliable Fast Response</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Rapid emergency diagnostics and dedicated SLA agreements to minimise operational downtime.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Minimal Disruption Delivery</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Structured phased commissioning and pre-FAT testing to guarantee seamless changeovers with minimal plant downtime.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Audited UK Standards</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Certified to ISO 9001:2015, ISO 17025, ISO 17020 directives, and F-Gas temperature control compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          7. HOW OUR SERVICES WORK (5-Step Framework)
      ========================================= */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              How Our Services Work
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              Our structured process ensures every project is delivered efficiently and meets your operational goals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">01</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Consultation & Requirements</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                In-depth technical consultation, process review, throughput targets, and factory constraint analysis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">02</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">System Design & Engineering</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                3D CAD modelling, electrical schematics, PLC logic design, and comprehensive risk analysis.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">03</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Build & Testing</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Precision manufacturing, control cabinet wiring, software flashing, and rigorous factory acceptance testing (FAT).
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">04</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Installation & Commissioning</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                On-site mechanical installation, electrical tie-in, SAT validation, and operator handover.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">05</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Support & Optimisation</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Ongoing preventative maintenance, telemetry monitoring, 24/7 technical support, and line tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. CALL TO ACTION (CTA)
      ========================================= */}
      <section className="py-20 px-3 sm:px-6 lg:px-8 bg-[#070D16]">
        <div className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0C1420] via-[#090E16] to-[#070D16] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              Get Started
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Improve Your Production Systems?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Work with a UK-based automation engineering team trusted by manufacturers worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+447412999343"
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all"
              >
                <Phone className="w-4 h-4 text-[#6DA7BF]" />
                <span>Speak to an Engineer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
