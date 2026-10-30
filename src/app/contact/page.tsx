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
  Building2,
  MapPin,
  ExternalLink,
  PhoneCall,
  CalendarCheck
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact MASK Control Systems Ltd | UK Industrial Automation Engineers",
  description: "Get in touch with MASK Control Systems Ltd. Call +44 7412 999343 or submit technical specifications for control panel builds, PLC systems, and turnkey automation worldwide.",
  alternates: {
    canonical: "https://maskcontrols.com/contact/"
  },
  openGraph: {
    title: "Contact MASK Control Systems Ltd | UK Industrial Automation Engineers",
    description: "Get in touch with MASK Control Systems Ltd. Call +44 7412 999343 or submit technical specifications for control panel builds, PLC systems, and turnkey automation worldwide.",
    url: "https://maskcontrols.com/contact/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/About-Mask-Control-Systems.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MASK Control Systems Ltd - UK Automation Engineers"
      }
    ]
  }
};

export default function ContactPage() {
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
            "name": "Contact",
            "item": "https://maskcontrols.com/contact/"
          }
        ]
      },
      {
        "@type": "ContactPage",
        "name": "Contact MASK Control Systems Ltd",
        "description": "Direct contact channels for industrial automation engineering consultations, control panel manufacturing tenders, and emergency breakdown assistance.",
        "url": "https://maskcontrols.com/contact/",
        "mainEntity": {
          "@type": "Organization",
          "name": "MASK Control Systems Limited",
          "telephone": "+44 7412 999343",
          "email": "sales@maskcontrols.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 11, Simmonds Place, Kingsmill Industrial Estate, Saunders Way",
            "addressLocality": "Cullompton",
            "addressRegion": "Devon",
            "postalCode": "EX15 1BS",
            "addressCountry": "GB"
          },
          "openingHours": "Mo-Fr 08:00-17:30"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly do your engineers respond to project inquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All technical inquiries submitted via phone (+44 7412 999343) or our online scope form receive an initial review and appraisal from a senior automation engineer within 4 working hours."
            }
          },
          {
            "@type": "Question",
            "name": "Can you sign a Non-Disclosure Agreement (NDA) before reviewing drawings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We frequently execute standard bilateral NDAs before receiving sensitive CAD schematics, military specifications, or proprietary process documentation."
            }
          },
          {
            "@type": "Question",
            "name": "Can we visit your Cullompton facility to inspect panel builds or attend FAT testing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Clients and OEM representatives are welcome to visit our Devon workshop for 100% Factory Acceptance Testing (FAT), panel inspection, and live simulation sign-off."
            }
          },
          {
            "@type": "Question",
            "name": "Do your engineers travel to customer sites for initial feasibility audits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly perform on-site plant surveys across the UK to inspect existing control cabinets, evaluate machine kinematics, and scope legacy migration requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What information should we include to receive an accurate project quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Providing details such as preferred PLC platform (Siemens/Mitsubishi/etc.), estimated digital/analog I/O counts, motor drive ratings, environmental requirements (e.g. IP rating/washdown), and target completion dates helps us prepare a detailed engineering proposal."
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
    { name: "Varitas Marine", src: "/images/Varitas-Marine-scaled.png" }
  ];

  const contactChannels = [
    {
      icon: Phone,
      title: "Direct Engineering Call",
      subtitle: "Immediate Discussion & Breakdown Triage",
      detail: "+44 7412 999343",
      href: "tel:+447412999343",
      actionText: "Call Now",
      note: "Speak directly with a senior control systems specialist"
    },
    {
      icon: Mail,
      title: "Email Technical Inquiries",
      subtitle: "Send Schematics, URS & Tender Packs",
      detail: "sales@maskcontrols.com",
      href: "mailto:sales@maskcontrols.com",
      actionText: "Send Email",
      note: "Monitored constantly by applications engineers"
    },
    {
      icon: MapPin,
      title: "Cullompton Workshop & FAT Facility",
      subtitle: "Panel Build & Pre-Commissioning Suite",
      detail: "Unit 11, Simmonds Place, Kingsmill Ind Est, EX15 1BS",
      href: "https://maps.google.com/?q=Unit+11+Simmonds+Place+Kingsmill+Industrial+Estate+Saunders+Way+Cullompton+EX15+1BS",
      actionText: "Get Directions",
      note: "Conveniently located off the M5 Junction 28 corridor"
    }
  ];

  const faqs = [
    {
      q: "How quickly do your engineers respond to project inquiries?",
      a: "All technical inquiries submitted via phone (+44 7412 999343) or our online scope form receive an initial review and appraisal from a senior automation engineer within 4 working hours."
    },
    {
      q: "Can you sign a Non-Disclosure Agreement (NDA) before reviewing drawings?",
      a: "Yes. We frequently execute standard bilateral NDAs before receiving sensitive CAD schematics, military specifications, or proprietary process documentation."
    },
    {
      q: "Can we visit your Cullompton facility to inspect panel builds or attend FAT testing?",
      a: "Yes. Clients and OEM representatives are welcome to visit our Devon workshop for 100% Factory Acceptance Testing (FAT), panel inspection, and live simulation sign-off."
    },
    {
      q: "Do your engineers travel to customer sites for initial feasibility audits?",
      a: "Yes. We regularly perform on-site plant surveys across the UK to inspect existing control cabinets, evaluate machine kinematics, and scope legacy migration requirements."
    },
    {
      q: "What information should we include to receive an accurate project quote?",
      a: "Providing details such as preferred PLC platform (Siemens/Mitsubishi/etc.), estimated digital/analog I/O counts, motor drive ratings, environmental requirements (e.g. IP rating/washdown), and target completion dates helps us prepare a detailed engineering proposal."
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
            <span className="text-[#6DA7BF] font-medium">Contact</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Heading, Subtext & Quick Badges */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-5">
                <Users2 className="w-4 h-4 text-[#6DA7BF]" />
                <span>Direct Senior Engineer Collaboration • No Sales Pitches</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Get in Touch with Our <br />
                <span className="text-[#6DA7BF]">Control Systems Engineers</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                Whether you are planning a new automation line, seeking a replacement PLC control cabinet, requiring functional safety upgrades, or needing immediate breakdown support, our engineering team is ready to assist.
              </p>

              {/* Direct Call / Contact Action Row */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+447412999343"
                  className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2.5 group"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +44 7412 999343</span>
                </a>

                <a
                  href="mailto:sales@maskcontrols.com"
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#6DA7BF]" />
                  <span>Email: sales@maskcontrols.com</span>
                </a>
              </div>

              {/* Quick Spec Badges */}
              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">&lt; 4 Hours</div>
                  <div className="text-xs text-slate-400">Response Window</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Direct Line</div>
                  <div className="text-xs text-slate-400">No Call Center Queues</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#6DA7BF]">100% FAT</div>
                  <div className="text-xs text-slate-400">Devon Testing Suite</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">UK &amp; Global</div>
                  <div className="text-xs text-slate-400">Site Commissioning</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Facility Image with Live Status Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C121C] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/About-Mask-Control-Systems.jpg"
                    alt="MASK Control Systems Ltd Facility in Cullompton Devon"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-80" />
                </div>

                {/* Technical Contact Badge */}
                <div className="p-5 bg-[#0C121C] border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">PRIMARY CONTACT:</span>
                    <span className="text-[#6DA7BF] font-bold">+44 7412 999343</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">OFFICE LOCATION:</span>
                    <span className="text-slate-200">CULLOMPTON, DEVON</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">HOURS:</span>
                    <span className="text-emerald-400">MON-FRI: 08:00 - 17:30</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>24/7 BREAKDOWN SUPPORT</span>
                    <span className="text-[#6DA7BF]">UK WIDE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CLIENT TRUST BAR
      ========================================= */}
      <section className="py-8 bg-[#0C121C] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>Trusted by Major Industrial Organisations:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center flex-1">
              {clientLogos.map((client, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl px-4 py-2.5 h-12 sm:h-14 flex items-center justify-center shadow-md shadow-black/30 border border-white hover:scale-105 transition-all duration-200"
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
        </div>
      </section>

      {/* =========================================
          3. DIRECT CONTACT CHANNELS (3 Cards)
      ========================================= */}
      <section className="py-16 bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div 
                  key={idx} 
                  className="p-7 rounded-2xl bg-[#0C121C] border border-white/10 hover:border-[#6DA7BF]/50 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#6DA7BF] transition-colors">
                        {channel.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {channel.subtitle}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#070D16] border border-white/5 font-mono text-sm text-white font-medium select-all break-all">
                      {channel.detail}
                    </div>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {channel.note}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#6DA7BF] hover:text-white transition-colors"
                    >
                      <span>{channel.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          4. INTERACTIVE FORM & WORKSHOP HIGHLIGHTS
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Operational Details & Direct Access */}
            <div className="lg:col-span-5 space-y-6">
              {/* Working Hours Card */}
              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Workshop &amp; Engineering Hours</h3>
                    <p className="text-xs text-slate-400">Regular Operational Schedule</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Monday - Thursday:</span>
                    <span className="font-mono text-white font-medium">08:00 - 17:30 GMT</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Friday:</span>
                    <span className="font-mono text-white font-medium">08:00 - 16:30 GMT</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Saturday - Sunday:</span>
                    <span className="font-mono text-slate-400">Emergency Support Only</span>
                  </div>
                  <div className="flex items-center justify-between py-1 pt-2 border-t border-white/5 text-[#6DA7BF] font-semibold">
                    <span>Emergency Breakdown Service:</span>
                    <span className="font-mono">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Engineering Scope Guidance */}
              <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF]">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">What to Prepare for Fast Quoting</h3>
                    <p className="text-xs text-slate-400">Accelerate your preliminary feasibility</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4 font-light">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                    <span>Machine kinematics description or process functional flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                    <span>Estimated I/O count and required PLC platform (Siemens, Mitsubishi, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                    <span>Existing CAD electrical schematics or panel enclosure space constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#6DA7BF] shrink-0 mt-0.5" />
                    <span>Target delivery, FAT date, or planned factory shutdown cutover windows</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp / Chat Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0C121C] to-[#122030] border border-[#6DA7BF]/30 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6DA7BF] font-bold">
                  Fast WhatsApp Technical Desk
                </span>
                <h4 className="text-base font-bold text-white">Need an Instant Technical Chat?</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Send equipment photos, nameplate ratings, or error code displays directly to our engineering mobile for prompt feedback.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/447412999343?text=Hi%20MASK%20Controls,%20I%20would%20like%20to%20discuss%20an%20automation%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <span>Message on WhatsApp (+44 7412 999343)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. EMBEDDED GOOGLE MAP & WORKSHOP LOCATION
      ========================================= */}
      <section className="py-20 bg-[#070D16] border-t border-white/10" id="location-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>UK Engineering Facility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Our Cullompton Headquarters &amp; FAT Suite
              </h2>
              <p className="mt-3 text-base text-slate-300 font-light max-w-2xl leading-relaxed">
                Unit 11, Simmonds Place, Kingsmill Industrial Estate, Saunders Way, Cullompton, Devon, EX15 1BS.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Unit+11+Simmonds+Place+Kingsmill+Industrial+Estate+Saunders+Way+Cullompton+EX15+1BS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#6DA7BF]" />
            </a>
          </div>

          {/* Embedded Google Map Card */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.7)] bg-[#0C121C] p-2 sm:p-3 relative">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.352121692015!2d-3.3795561000000003!3d50.8616806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d9666ff7142b1%3A0xeade935cbb8dfc90!2sMASK%20Control%20Systems%20Limited!5e0!3m2!1sen!2sbd!4v1793351599568!5m2!1sen!2sbd" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="MASK Control Systems Limited Location Map"
              />
            </div>

            {/* Bottom Location Highlights */}
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0 font-bold">
                  M5
                </div>
                <div>
                  <div className="font-bold text-white">Direct Motorway Access</div>
                  <div className="text-slate-400">2 minutes from Junction 28 of the M5</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Exeter Airport Proximity</div>
                  <div className="text-slate-400">15 miles for international client visits</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#6DA7BF]/15 flex items-center justify-center text-[#6DA7BF] shrink-0">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Dedicated FAT Bay</div>
                  <div className="text-slate-400">Equipped for client-attended live simulation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. FREQUENTLY ASKED QUESTIONS (Centered)
      ========================================= */}
      <section className="py-20 bg-[#0A101A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Inquiry Assistance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
              Common questions regarding quotes, non-disclosure agreements, and on-site engineering visits:
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
          7. CALL TO ACTION
      ========================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0C121C] to-[#070D16] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#6DA7BF] mb-6">
            <Sparkles className="w-4 h-4 text-[#6DA7BF]" />
            <span>Turnkey Engineering Support</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Prefer to Speak Directly with an Engineer?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Call our direct engineering line now at <strong className="text-white font-semibold">+44 7412 999343</strong> for an immediate appraisal of your automation and control panel requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+447412999343"
              className="px-8 py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center gap-2.5 group"
            >
              <Phone className="w-4 h-4" />
              <span>Call +44 7412 999343</span>
            </a>

            <a
              href="mailto:sales@maskcontrols.com"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#6DA7BF]" />
              <span>Email: sales@maskcontrols.com</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>Zero Obligation Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>Direct Senior Engineer Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6DA7BF]" />
              <span>Fast Bilateral NDA Protection</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
