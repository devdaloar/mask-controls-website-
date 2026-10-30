import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
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
  Check, 
  Users2, 
  Globe2, 
  Clock, 
  TrendingUp, 
  RotateCcw, 
  Award, 
  Zap, 
  Eye, 
  Scale, 
  Workflow, 
  Lock, 
  ThermometerSnowflake, 
  Phone, 
  MessageSquare 
} from "lucide-react";
import { servicesList, industriesList } from "@/data/navigation";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import PlcPlatformsCarousel from "@/components/PlcPlatformsCarousel";
import TrustedClientsCarousel from "@/components/TrustedClientsCarousel";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070D16] text-white">
      
      {/* =========================================
          1. HERO SECTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0C121C] shadow-[0_30px_90px_rgba(0,0,0,0.65)] relative overflow-hidden p-6 sm:p-12 lg:p-16">
          
          {/* Technical Engineering Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(109, 167, 191, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(109, 167, 191, 0.15) 1px, transparent 1px)`,
              backgroundSize: "48px 48px"
            }}
          />

          {/* Radial Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#6DA7BF]/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pulsing Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DA7BF] shadow-[0_0_10px_#6DA7BF] animate-pulse" />
                <span>UK-Engineered • Deployed Worldwide</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.14] tracking-tight">
                Bespoke Industrial Automation Systems{" "}
                <span className="text-[#6DA7BF]">Engineered in the UK,</span> Delivered Worldwide
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                We design, build, install, and support custom automation systems that reduce downtime, improve efficiency, and help manufacturers scale with confidence.
              </p>

              {/* Trust Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Established UK Engineering (Since 2013)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Global Deployment Capability</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>Multi-Industry Experience</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#6DA7BF]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF]" />
                  </div>
                  <span>End-to-End Automation Partner</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(109,167,191,0.35)] group"
                >
                  <span>Get a Quote</span>
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
                    src="/images/hero-automation.jpg"
                    alt="Bespoke Industrial Automation Systems & Robotic Machinery Engineered in UK - MASK Control Systems"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E16] via-transparent to-transparent opacity-90" />
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F141C]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">13+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Years (Since 2013)</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white">100%</div>
                    <div className="text-[11px] text-slate-400 font-medium">Bespoke Design</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-[#6DA7BF]">24/7</div>
                    <div className="text-[11px] text-slate-400 font-medium">Field Support</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. TRUST / CREDIBILITY & ACCREDITATION STRIP
      ========================================= */}
      <section className="py-6 border-y border-white/5 bg-[#090E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">
                UK Certified Excellence
              </span>
              <p className="text-sm font-semibold text-slate-200">
                Audited & Certified to British, European and International Standards
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              <div className="flex items-center gap-3 bg-[#0F141C] border border-white/10 px-3.5 py-2 rounded-xl">
                <Image src="/images/iso-9001.jpg" alt="ISO 9001:2015 Quality Management Certified - MASK Control Systems Ltd UK" width={30} height={30} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 9001:2015</div>
                  <div className="text-[10px] text-slate-400">Quality Management</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#0F141C] border border-white/10 px-3.5 py-2 rounded-xl">
                <Image src="/images/iso-17025.jpg" alt="ISO 17025 Testing & Calibration Accredited - MASK Control Systems Ltd" width={30} height={30} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 17025</div>
                  <div className="text-[10px] text-slate-400">Testing & Calibration</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#0F141C] border border-white/10 px-3.5 py-2 rounded-xl">
                <Image src="/images/iso-17020.jpg" alt="ISO 17020 Inspection Directives Standards Compliance - MASK Control Systems Ltd" width={30} height={30} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 17020</div>
                  <div className="text-[10px] text-slate-400">Inspection Directives</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#0F141C] border border-white/10 px-3.5 py-2 rounded-xl">
                <Image src="/images/sme-uk.jpg" alt="SME UK Enterprise Certified Partner - MASK Control Systems Ltd UK" width={30} height={30} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">SME UK Partner</div>
                  <div className="text-[10px] text-slate-400">Enterprise Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. ABOUT MASK CONTROL SYSTEMS (Island Card)
      ========================================= */}
      <section className="py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-[#0C121C] p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#6DA7BF]/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6DA7BF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                About <span className="text-[#6DA7BF]">Mask Control Systems</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <strong className="text-white font-semibold">MASK Control Systems</strong> is a UK-based industrial automation and engineering company specialising in bespoke machinery, PLC control systems, and fully integrated automation solutions for manufacturers.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                From initial concept and design through to build, installation, and ongoing technical support, we provide complete end-to-end project delivery. Our multidisciplinary team of mechanical, electrical, and software engineers ensures every solution is built around your exact production requirements.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                We work with clients across the UK, Europe, the Middle East, and global markets helping manufacturers improve operational efficiency, reduce labour dependency, and maintain consistent production performance.
              </p>

              {/* 2 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#0F1622] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-3 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Multidisciplinary Team
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Mechanical, electrical, and software engineers working in-house to deliver unified automation systems.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F1622] border border-white/10 hover:border-[#6DA7BF]/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] mb-3 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Global Deployment
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    UK-based team supporting commissioning and field projects across Europe, the Middle East, and overseas.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
                >
                  <span>Learn more about our company background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#090E16] shadow-2xl group">
                <div className="relative h-[420px] sm:h-[460px] w-full">
                  <Image
                    src="/images/About-Mask-Control-Systems.jpg"
                    alt="MASK Control Systems Multidisciplinary Automation & Electrical Engineers UK"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E16] via-[#090E16]/30 to-transparent" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0F141C]/95 backdrop-blur-xl border border-white/10 p-4 sm:p-5 rounded-2xl shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <div className="flex sm:flex-col items-center gap-3 sm:gap-0 shrink-0 sm:text-center sm:pr-4 sm:border-r border-white/10">
                      <div className="text-3xl font-black text-[#6DA7BF]">13+</div>
                      <div className="text-xs text-slate-300 sm:text-[11px] sm:text-slate-400 font-medium whitespace-nowrap">Years of Experience</div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-200 border-t sm:border-t-0 pt-2 sm:pt-0 border-white/10">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span className="font-medium text-xs sm:text-[11px]">Bespoke Systems Built Around Your Process</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0" />
                        <span className="font-medium text-xs sm:text-[11px]">End-to-End Delivery with Single Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3.5 TRUSTED BY LEADING ORGANISATIONS (6 Logos, 3s Auto-Carousel)
      ========================================= */}
      <section className="py-16 bg-[#0A101A] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
            Client Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Trusted by Leading Organisations Across the UK and Beyond
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light max-w-2xl mx-auto">
            Over 13 years, MASK Control Systems has built a reputation for delivering reliable, high-quality engineering to some of the most demanding clients in industry.
          </p>
        </div>

        {/* 6 logos on desktop, 2 on mobile, moves right-to-left every 3s */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustedClientsCarousel />
        </div>
      </section>

      {/* =========================================
          4. OUR CORE SERVICES
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Core Services
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-light max-w-xl">
                Engineering precision across every phase of your automation journey.
              </p>
            </div>
            <Link 
              href="/services/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors pb-1"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Design & Build
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Custom machinery designed from the ground up to meet your production needs. From concept development to full system delivery.
                </p>
              </div>
              <Link 
                href="/design-build-services/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Installation & Commissioning
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Professional on-site installation, system setup, and operator training to ensure smooth deployment and immediate performance.
                </p>
              </div>
              <Link 
                href="/installation-commissioning/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Servicing, Breakdown & Support
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Fast response support for automation systems, PLC faults, and electrical issues minimising downtime and restoring operations quickly.
                </p>
              </div>
              <Link 
                href="/service-and-breakdown/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Systems Integration
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Seamless integration of machines, PLC systems, and factory processes into a unified, efficient workflow.
                </p>
              </div>
              <Link 
                href="/systems-integration/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Remote Monitoring & Diagnostics
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Real-time visibility of your equipment with remote diagnostics, alerts, and performance tracking through secure cloud-based systems.
                </p>
              </div>
              <Link 
                href="/remote-monitoring/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-7 hover:border-[#6DA7BF]/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-5 group-hover:bg-[#6DA7BF] group-hover:text-[#070D16] transition-all">
                  <Settings2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6DA7BF] transition-colors">
                  Electrical Control Panel Design
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Bespoke control cabinets, motor control centers (MCC), and distribution assemblies engineered to BS 7671 standards.
                </p>
              </div>
              <Link 
                href="/electrical-control-panel-design/"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] group-hover:text-white transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4.5 PLC PLATFORMS WE PROGRAMME & SUPPORT (5 Platforms, 3s Auto-Carousel)
      ========================================= */}
      <section className="py-16 bg-[#070D16] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
            Hardware Agnostic Integration
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            PLC Platforms We Programme & Support
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light max-w-2xl mx-auto">
            We work across all major PLC platforms and are not aligned to any single manufacturer.
          </p>
        </div>

        {/* 5 brands on desktop, 2 on mobile, moves left-to-right every 3s */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlcPlatformsCarousel />
        </div>
      </section>

      {/* =========================================
          5. AUTOMATION EXPERTISE & MANUFACTURING CAPABILITIES (2 Columns)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Box 1: Automation Expertise */}
            <div className="bg-[#0C121C] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6DA7BF]">
                <Activity className="w-3.5 h-3.5" />
                <span>Control Engineering</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Automation Expertise
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                We specialise in advanced industrial automation technologies, delivering reliable and scalable control systems:
              </p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>PLC Programming & Control Systems:</strong> Bespoke logic architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Siemens PLC Systems:</strong> TIA Portal, S7-1200 / S7-1500, WinCC</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Unitronics PLC & HMI Solutions:</strong> Integrated compact platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>HMI Development:</strong> Intuitive operator touchscreen interfaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Legacy System Upgrades:</strong> Modernising obsolete hardware safely</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Industrial Communication:</strong> Profinet, Modbus, Ethernet/IP, CAN</span>
                </li>
              </ul>

              <p className="text-slate-400 text-xs font-light pt-2 italic">
                Our solutions are designed for reliability, flexibility, and long-term performance in demanding production environments.
              </p>
            </div>

            {/* Box 2: Manufacturing Capabilities */}
            <div className="bg-[#0C121C] rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6DA7BF]">
                <Factory className="w-3.5 h-3.5" />
                <span>Production & Assembly</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Manufacturing Capabilities
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Beyond automation, we deliver complete engineering and manufacturing solutions:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Custom Machinery Design & Fabrication:</strong> Concept to built asset</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Electrical Control Panel Design & Build:</strong> In-house panel shop</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Subcontract Assembly:</strong> Electrical wiring & mechanical builds</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Industrial Temperature Control:</strong> F-Gas certified refrigeration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                  <span><strong>Proof of Concept & Prototypes:</strong> R&D testing before scale</span>
                </li>
              </ul>

              <p className="text-slate-400 text-xs font-light pt-2 italic">
                Every system is engineered with precision, tested thoroughly, and built to meet industry standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. PROBLEMS WE SOLVE (High-Converting Section)
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Real Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Problems We Solve for Manufacturers
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We turn operational bottlenecks into high-throughput competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Problem 1 */}
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Reduce Downtime</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Unplanned breakdowns can stop production and impact revenue. We provide fast support and reliable systems to keep operations running.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Replace Manual Processes</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Automation eliminates repetitive labour tasks, improving consistency and reducing operational costs.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Improve Product Quality</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Our systems ensure repeatable processes, reducing defects and increasing product reliability.
              </p>
            </div>

            {/* Problem 4 */}
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Upgrade Legacy Systems</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We modernise outdated PLC and control systems, improving performance, safety, and maintainability.
              </p>
            </div>

            {/* Problem 5 */}
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Enable Remote Visibility</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Monitor your equipment in real-time with remote diagnostics and performance tracking.
              </p>
            </div>

            {/* Problem 6 */}
            <div className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Scale Without Headcount</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Increase production output efficiently without relying on additional labour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. INDUSTRIES WE SERVE
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sectors We Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Industries We Serve
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We support manufacturers across multiple sectors with tailored automation solutions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((ind) => (
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
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            <div className="bg-gradient-to-br from-[#0F1826] to-[#0A101A] p-6 rounded-2xl flex flex-col justify-between border border-[#6DA7BF]/30 shadow-lg">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6DA7BF]">Custom Process</span>
                <h3 className="text-base font-bold text-white mt-1">Don't see your sector?</h3>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  We engineer bespoke automated equipment for specialised manufacturing operations across any sector.
                </p>
              </div>
              <Link 
                href="/contact/"
                className="mt-5 py-2.5 px-4 rounded-full bg-[#6DA7BF] text-[#070D16] text-xs font-bold uppercase tracking-wider text-center hover:brightness-110 transition-all block"
              >
                Inquire With An Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. OUR 5-STEP STRUCTURED PROCESS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Our Process
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Our structured approach ensures every project is delivered efficiently with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">01</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Consultation & Requirements</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                In-depth technical review of your process, throughput targets, and space constraints.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">02</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">System Design & Engineering</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                CAD modelling, electrical schematics, PLC architecture, and FMEA safety analysis.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">03</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Build & In-House Testing</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Precision assembly, panel wiring, software flashing, and rigorous FAT protocol testing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">04</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Installation & Commissioning</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                On-site integration, SAT verification, line handover, and operator training.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6 relative group hover:border-[#6DA7BF]/60 transition-all">
              <span className="text-3xl font-black text-[#6DA7BF]/40 group-hover:text-[#6DA7BF] transition-colors">05</span>
              <h3 className="text-sm font-bold text-white mt-3 mb-1">Support & Optimisation</h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                24/7 technical breakdown support, telemetry monitoring, and ongoing line tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          9. REMOTE MONITORING & SMART SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0C121C] rounded-[32px] border border-white/10 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Industry 4.0 Telemetry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Remote Monitoring & Smart Systems
                </h2>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Our advanced monitoring solutions give you full control over your operations. Stay connected to your production—anytime, anywhere.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-2">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                    <span>Real-Time Equipment Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                    <span>Fault Detection & Instant Alerts</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                    <span>Remote Diagnostics & Support</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                    <span>Cloud Protocols (OPC UA, MQTT, HTTPS)</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:col-span-2">
                    <Check className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                    <span>Data-Driven Performance & Throughput Insights</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link 
                    href="/remote-monitoring/"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6DA7BF] hover:text-white transition-colors"
                  >
                    <span>Explore Remote Monitoring Technology</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-80 w-full group">
                  <Image 
                    src="/images/remote-monitoring.jpg"
                    alt="Cloud-Based Remote Telemetry & Industrial Automation Monitoring System - MASK Control Systems"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          10. WHY CHOOSE MASK CONTROL SYSTEMS
      ========================================= */}
      <section className="py-20 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              The MASK Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Why Choose MASK Control Systems
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              We focus on long-term reliability, performance, and partnership—not just project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">End-to-End Partner</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Single-source engineering partner from initial CAD concept all the way through to ongoing support.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Fully Bespoke Solutions</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                No off-the-shelf compromises. Every machinery part and PLC rung is custom tailored to your factory floor.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">UK Build, Global Deployment</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Assembled with pride in Devon, UK, and deployed with full international field commissioning capability.
              </p>
            </div>

            <div className="bg-[#0C121C] border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 text-[#6DA7BF] flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">F-Gas Certified</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Fully certified to design and maintain temperature-controlled process automation equipment safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          11. CLIENT TESTIMONIALS (Auto Carousel / Marquee from 5 Countries)
      ========================================= */}
      <section className="py-24 bg-[#0A101A] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              Global Client Confidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Trusted by Manufacturers Worldwide
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Engineering solutions deployed and supported across Tier-1 industrial facilities.
            </p>
          </div>
        </div>

        {/* 5-Country Auto Continuous Marquee */}
        <TestimonialMarquee />
      </section>

      {/* =========================================
          12. FINAL CALL TO ACTION (CTA)
      ========================================= */}
      <section className="py-20 px-3 sm:px-6 lg:px-8 bg-[#070D16]">
        <div className="max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0C1420] via-[#090E16] to-[#070D16] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#6DA7BF]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              Get Started
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Improve Your Production Efficiency?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Partner with a UK-based automation engineering team trusted by manufacturers worldwide.
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
                <span>Talk to an Engineer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
