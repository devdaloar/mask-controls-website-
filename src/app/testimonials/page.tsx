import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Award, 
  Building2, 
  Check, 
  Globe2, 
  Clock, 
  Sparkles,
  ChevronRight,
  Gauge,
  Factory
} from "lucide-react";
import TestimonialsInteractiveGrid from "@/components/testimonials/TestimonialsInteractiveGrid";

export const metadata: Metadata = {
  title: "Client Testimonials | Industrial Automation Success Stories | MASK Control Systems Ltd",
  description: "Read client testimonials on industrial automation, PLC systems, control panel design, and turnkey engineering services delivering reliability, efficiency, and results worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/testimonials/"
  },
  openGraph: {
    title: "Client Testimonials | Industrial Automation Success Stories | MASK Control Systems Ltd",
    description: "Read verified client testimonials on industrial automation, PLC systems, and engineering services delivering reliability, efficiency, and results worldwide.",
    url: "https://maskcontrols.com/testimonials/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/hero-automation.jpg",
        width: 1168,
        height: 784,
        alt: "Client Testimonials & Engineering Reviews - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function TestimonialsPage() {
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
            "name": "Testimonials",
            "item": "https://maskcontrols.com/testimonials/"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Client Testimonials | Industrial Automation Success Stories",
        "description": "Read verified testimonials from plant managers, engineering directors, and OEMs who partner with MASK Control Systems Ltd.",
        "url": "https://maskcontrols.com/testimonials/",
        "provider": {
          "@type": "Organization",
          "name": "Mask Control Systems Limited",
          "telephone": "+44 7412 999343",
          "email": "sales@maskcontrols.com",
          "url": "https://maskcontrols.com"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "38",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  const clientLogos = [
    { name: "Dunlop", src: "/images/Dunlop-scaled.png" },
    { name: "Alstom", src: "/images/Alstom-scaled.png" },
    { name: "Babcock", src: "/images/Babcock-scaled.png" },
    { name: "Ministry of Defence", src: "/images/Ministry_of_Defence-scaled.png" },
    { name: "Emirates", src: "/images/Emirates-scaled.png" },
    { name: "Hydro", src: "/images/Hydro-scaled.png" },
    { name: "University of Exeter", src: "/images/University-of-Exeter-scaled.png" },
    { name: "University of Southampton", src: "/images/University-of-Southampton-scaled.png" },
    { name: "University of Warwick", src: "/images/University-of-Warwick-scaled.png" },
    { name: "Field International", src: "/images/Field-International-scaled.png" },
    { name: "Bureau Veritas", src: "/images/Bureau-Veritas-scaled.png" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#070D16] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================
          1. HERO SECTION (Living Island Card)
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#0C121C] shadow-[0_30px_90px_rgba(0,0,0,0.65)] relative overflow-hidden p-6 sm:p-10 lg:p-14">
          
          {/* Engineering Technical Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(109, 167, 191, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(109, 167, 191, 0.15) 1px, transparent 1px)`,
              backgroundSize: "48px 48px"
            }}
          />

          {/* Radial Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#6DA7BF]/12 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#6DA7BF]/10 blur-[140px] rounded-full pointer-events-none" />

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="relative z-10 flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#6DA7BF] font-medium">Testimonials</span>
          </nav>

          <div className="relative z-10 max-w-3xl space-y-5">
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6DA7BF] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#6DA7BF] shadow-[0_0_8px_#6DA7BF] animate-pulse" />
              <span>Verified Engineering Reputation &bull; Client Endorsements</span>
            </div>

            {/* Main Headline (Exact title from original site) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Trusted by Manufacturers <br className="hidden sm:inline" />
              <span className="text-[#6DA7BF]">Worldwide</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              From tier-1 defence contractors and high-speed food processing plants to municipal water authorities and international OEM facilities, discover how MASK Control Systems delivers reliable automation, cuts downtime, and scales production.
            </p>

            {/* Overall Rating & Aggregate Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-xl">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-white text-sm">4.9 / 5.0</span>
                  <span className="text-slate-400 ml-1.5">(38+ Client Reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Verified Industrial Projects</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-8 border-t border-white/10 relative z-10">
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xl sm:text-3xl font-extrabold text-white">13+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Years Engineering Track Record</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xl sm:text-3xl font-extrabold text-[#6DA7BF]">150+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Turnkey Automation Deliveries</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-400">99.4%</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Average Uptime Across Systems</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xl sm:text-3xl font-extrabold text-amber-400">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1">FAT Pass Rate Prior to Handover</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. MAIN INTERACTIVE TESTIMONIALS SECTION
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <TestimonialsInteractiveGrid />
        </div>
      </section>

      {/* =========================================
          3. ENTERPRISE PARTNERS LOGO GRID
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#0C121C] p-6 sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF]">
              Proven Industry Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted by Leading Organisations in the UK &amp; Globally
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Our engineering solutions power mission-critical processes for industry leaders and world-class universities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {clientLogos.map((client, idx) => (
              <div 
                key={idx}
                className="h-18 sm:h-20 rounded-xl bg-white p-3 flex items-center justify-center border border-white/10 shadow-sm hover:scale-105 transition-transform duration-300"
                title={client.name}
              >
                <div className="relative w-full h-9 sm:h-10">
                  <Image
                    src={client.src}
                    alt={`${client.name} - Trusted client of MASK Control Systems`}
                    fill
                    sizes="(max-width: 640px) 140px, 180px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. QUALITY STANDARDS & ACCREDITATIONS
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[#0C121C] to-[#101A29] border border-white/10 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#6DA7BF] uppercase tracking-wider">
                Engineering Assurances &amp; Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why Engineering Teams Rely on MASK
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Every control panel, automated machine, and PLC program we deploy is rigorously verified under our certified triple-ISO quality management system, ensuring full compliance with UK and European statutory safety directives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>BS 7671 &amp; EN 60204-1 Panel Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rigorous Factory Acceptance Testing (FAT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Electrical Schematics in EPLAN</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Breakdown &amp; SLA Support Available</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="bg-[#070D16] border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Image src="/images/iso-9001.jpg" alt="ISO 9001:2015 Quality Management Accredited" width={44} height={44} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 9001:2015</div>
                  <div className="text-[11px] text-slate-400">Quality Management</div>
                </div>
              </div>

              <div className="bg-[#070D16] border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Image src="/images/iso-17025.jpg" alt="ISO 17025 Testing and Calibration Standards Certified" width={44} height={44} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 17025</div>
                  <div className="text-[11px] text-slate-400">Testing &amp; Calibration</div>
                </div>
              </div>

              <div className="bg-[#070D16] border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Image src="/images/iso-17020.jpg" alt="ISO 17020 Inspection Directives Certified" width={44} height={44} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 17020</div>
                  <div className="text-[11px] text-slate-400">Inspection Directives</div>
                </div>
              </div>

              <div className="bg-[#070D16] border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Image src="/images/sme-uk.jpg" alt="SME UK Enterprise Certified Industrial Automation Partner" width={44} height={44} className="rounded" />
                <div>
                  <div className="text-xs font-bold text-white">SME UK Enterprise</div>
                  <div className="text-[11px] text-slate-400">Excellence Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. ENGINEERING CONSULTATION CTA
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#0A101A] p-8 sm:p-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Discuss Your Automation Requirements
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to experience the MASK engineering difference?
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto font-light">
            Whether you need a bespoke machinery build, an emergency PLC upgrade, or custom control panel manufacturing, speak directly with our UK systems engineering team today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact/"
              className="px-7 py-3.5 rounded-xl bg-[#6DA7BF] text-slate-950 font-bold text-xs sm:text-sm tracking-wide hover:bg-[#5892A9] transition-all shadow-lg hover:shadow-[#6DA7BF]/25 flex items-center gap-2"
            >
              Request a Project Quote
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+447412999343"
              className="px-7 py-3.5 rounded-xl bg-slate-900 border border-white/15 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6DA7BF]" />
              +44 7412 999343
            </a>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 pt-2">
            Unit 11, Simmonds Place, Kingsmill Industrial Estate, Cullompton, EX15 1BS, UK &bull; sales@maskcontrols.com
          </p>
        </div>
      </section>
    </div>
  );
}
