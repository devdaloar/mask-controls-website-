import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Eye, 
  Server, 
  Clock, 
  Scale, 
  AlertCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | UK GDPR & Data Protection | MASK Control Systems Ltd",
  description: "Mask Control Systems Limited's official Privacy Policy. Learn how we collect, process, and safeguard your personal and industrial project data in compliance with UK GDPR and DPA 2018.",
  alternates: {
    canonical: "https://maskcontrols.com/privacy-policy/"
  },
  openGraph: {
    title: "Privacy Policy | UK GDPR & Data Protection | MASK Control Systems Ltd",
    description: "Mask Control Systems Limited's official Privacy Policy. Learn how we collect, process, and safeguard your personal and industrial project data in compliance with UK GDPR and DPA 2018.",
    url: "https://maskcontrols.com/privacy-policy/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function PrivacyPolicyPage() {
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
            "name": "Privacy Policy",
            "item": "https://maskcontrols.com/privacy-policy/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "name": "Privacy Policy | Mask Control Systems Limited",
        "description": "UK GDPR and Data Protection Act 2018 privacy policy for Mask Control Systems Limited.",
        "url": "https://maskcontrols.com/privacy-policy/",
        "publisher": {
          "@type": "Organization",
          "name": "Mask Control Systems Limited",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 11, Simmonds Place, Kingsmill Industrial Estate, Saunders Way",
            "addressLocality": "Cullompton",
            "addressRegion": "Devon",
            "postalCode": "EX15 1BS",
            "addressCountry": "GB"
          },
          "telephone": "+44 7412 999343",
          "email": "sales@maskcontrols.com"
        }
      }
    ]
  };

  const userRights = [
    { title: "Right of Access", desc: "You have the right to request a complete copy of the personal data we hold about you (Subject Access Request)." },
    { title: "Right to Rectification", desc: "You can request immediate correction of any inaccurate or incomplete personal or corporate contact information." },
    { title: "Right to Erasure", desc: "You have the right to request deletion of your personal data where it is no longer legally necessary for contractual or statutory compliance." },
    { title: "Right to Restrict Processing", desc: "You may ask us to suspend processing your personal data while an accuracy contest or legal dispute is verified." },
    { title: "Right to Data Portability", desc: "You can request to receive your structured personal data in a readable digital format to transfer to another controller." },
    { title: "Right to Object", desc: "You have the right to object at any time to processing based on legitimate business interests or direct commercial communications." }
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

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="relative z-10 flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#6DA7BF] font-medium">Privacy Policy</span>
          </nav>

          <div className="relative z-10 max-w-3xl space-y-5">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6DA7BF] backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
              <span>UK GDPR &amp; Data Protection Act 2018 Compliant</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Privacy Policy &amp; <br className="hidden sm:inline" />
              <span className="text-[#6DA7BF]">Data Protection Notice</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              This policy explains how Mask Control Systems Limited collects, uses, protects, and handles personal and project information across our industrial automation, control panel, and engineering operations.
            </p>

            {/* Version & Date */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#6DA7BF]" />
                <span>Last Updated: October 30, 2026</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                <span>Jurisdiction: England &amp; Wales (UK)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. POLICY BODY CONTENT
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-4xl mx-auto space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed font-light">

          {/* Section 1: Who We Are & Data Controller */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Building2Icon className="w-5 h-5 text-[#6DA7BF]" />
              1. Who We Are (Data Controller)
            </h2>
            <p>
              In this Privacy Policy, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;MASK&rdquo; refers to <strong className="text-white">Mask Control Systems Limited</strong>, a private company incorporated in England and Wales. We operate as the official Data Controller responsible for your personal information under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-400">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white">Registered Address:</span>
                <p>Unit 11, Simmonds Place, Kingsmill Industrial Estate, Saunders Way, Cullompton, EX15 1BS, UK</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white">Direct Engineering Contact:</span>
                <p>Telephone: +44 7412 999343</p>
                <p>Email: sales@maskcontrols.com</p>
              </div>
            </div>
          </div>

          {/* Section 2: What Information We Collect */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#6DA7BF]" />
              2. Information We Collect
            </h2>
            <p>
              Depending on your interactions with MASK, we may collect and process the following categories of information:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-bold text-white text-sm">A. Contact &amp; Commercial Identification</h3>
                <p className="text-xs text-slate-400">
                  Full name, business job title, corporate email address, business telephone number, and employer/company name provided when requesting a quotation or contacting our team.
                </p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-bold text-white text-sm">B. Industrial Engineering &amp; Project Specifications</h3>
                <p className="text-xs text-slate-400">
                  CAD schematics, machine mechanical specifications, PLC hardware requirements, plant delivery addresses, and operational briefs shared during project scoping and design.
                </p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-bold text-white text-sm">C. Technical &amp; Website Usage Data</h3>
                <p className="text-xs text-slate-400">
                  Internet Protocol (IP) addresses, browser type, device identifiers, operating system, and navigation telemetry collected via strictly necessary session cookies to maintain site security and performance.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Lawful Basis for Processing */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#6DA7BF]" />
              3. Lawful Basis for Processing Your Data
            </h2>
            <p>
              Under Article 6 of the UK GDPR, we only process your personal data where a clear lawful basis exists:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-[#6DA7BF] uppercase tracking-wider">Contractual Necessity</span>
                <p className="text-xs text-slate-400">
                  Processing is required to prepare engineering quotes, manufacture custom control panels, program PLCs, or execute on-site commissioning agreements.
                </p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-[#6DA7BF] uppercase tracking-wider">Legitimate Interests</span>
                <p className="text-xs text-slate-400">
                  To communicate with industrial clients, protect our IT infrastructure against cyber threats, and improve the reliability of our engineering systems.
                </p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-[#6DA7BF] uppercase tracking-wider">Legal &amp; Statutory Compliance</span>
                <p className="text-xs text-slate-400">
                  To comply with statutory accounting, HMRC corporate tax obligations, British health and safety legislation, and ISO 9001/17025 audit verification.
                </p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1.5">
                <span className="text-xs font-bold text-[#6DA7BF] uppercase tracking-wider">Explicit Consent</span>
                <p className="text-xs text-slate-400">
                  Where you explicitly opt in to receive non-transactional technical newsletters or case studies (which can be withdrawn at any time).
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Data Security & Storage */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#6DA7BF]" />
              4. Data Security &amp; Confidentiality
            </h2>
            <p>
              We apply rigorous physical, electronic, and managerial safeguards to protect your confidential machinery designs and personal data from unauthorized access, accidental alteration, disclosure, or destruction:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full TLS 1.3 encryption across all web traffic</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict role-based access controls for engineering staff</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure UK &amp; EEA data storage facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rigorous NDAs for defence and proprietary client IP</span>
              </li>
            </ul>
          </div>

          {/* Section 5: Data Retention Policy */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#6DA7BF]" />
              5. How Long We Retain Your Data
            </h2>
            <p>
              We retain personal and project data only for as long as necessary to fulfill the operational purposes for which it was collected:
            </p>
            <div className="space-y-2.5 text-xs text-slate-300 pt-1">
              <div className="p-3 bg-slate-900/60 rounded-xl flex items-center justify-between border border-white/5">
                <span className="font-semibold text-white">Delivered Machinery &amp; Control Panel Records:</span>
                <span className="text-[#6DA7BF]">Minimum 6 Years (statutory design lifespan &amp; warranties)</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl flex items-center justify-between border border-white/5">
                <span className="font-semibold text-white">Invoicing &amp; Statutory Accounting Data:</span>
                <span className="text-[#6DA7BF]">7 Years (HMRC UK statutory compliance)</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl flex items-center justify-between border border-white/5">
                <span className="font-semibold text-white">General Inquiries (not proceeding to order):</span>
                <span className="text-[#6DA7BF]">Purged or anonymized after 24 Months</span>
              </div>
            </div>
          </div>

          {/* Section 6: Your Legal Rights Under UK GDPR */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#6DA7BF]" />
              6. Your Legal Rights Under UK GDPR
            </h2>
            <p>
              As a UK data subject, you hold statutory rights under Chapter III of the UK GDPR regarding how your personal information is stored and handled:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {userRights.map((r, idx) => (
                <div key={idx} className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-1">
                  <h3 className="font-bold text-white text-xs text-[#6DA7BF]">{r.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 pt-2">
              To exercise any of these rights, please contact our Data Protection Team at <strong className="text-white">sales@maskcontrols.com</strong>. We will respond without undue delay and at the latest within one calendar month.
            </p>
          </div>

          {/* Section 7: Third-Party Disclosures & Non-Sale Pledge */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-[#6DA7BF]" />
              7. Third-Party Sharing &amp; Non-Sale Pledge
            </h2>
            <p>
              <strong className="text-white font-semibold">We do not sell, rent, trade, or monetize your personal or industrial data under any circumstances.</strong>
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              We only share relevant information with vetted operational partners where essential for project fulfillment — such as specialist freight carriers delivering control cabinets, secure cloud infrastructure providers (Cloudflare), or independent UK quality registrars auditing our ISO 9001/17025 accreditations under binding non-disclosure agreements.
            </p>
          </div>

          {/* Section 8: Cookies Notice */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              8. Cookies &amp; Tracking Technologies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Our website uses strictly necessary technical cookies to enable secure page routing, navigation state, and form submissions. We do not deploy intrusive third-party cross-site advertising or tracking cookies. You may configure your web browser to reject cookies, though certain technical functions of the site may be impaired.
            </p>
          </div>

          {/* Section 9: Regulatory Complaints */}
          <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#6DA7BF]" />
              9. Right to Lodge a Regulatory Complaint
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              If you have concerns about our data handling, we encourage you to contact us first so we can promptly address the issue. However, you also have the statutory right to lodge a formal complaint with the UK supervisory authority:
            </p>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-white/5 text-xs text-slate-300 space-y-1">
              <p className="font-bold text-white">Information Commissioner&apos;s Office (ICO)</p>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, UK</p>
              <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#6DA7BF] underline">https://ico.org.uk</a> &bull; Helpline: 0303 123 1113</p>
            </div>
          </div>

          {/* Section 10: Contact Us Card */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0C121C] to-[#121E2E] border border-[#6DA7BF]/30 p-8 sm:p-10 space-y-4">
            <h2 className="text-2xl font-bold text-white">
              10. Contacting Our Data Protection Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              For any questions regarding this Privacy Policy, your rights, or to submit a data request, please contact our engineering headquarters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                <span>Unit 11, Simmonds Place, Cullompton, EX15 1BS</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                <a href="tel:+447412999343" className="hover:text-white transition-colors font-medium">
                  +44 7412 999343
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                <a href="mailto:sales@maskcontrols.com" className="hover:text-white transition-colors">
                  sales@maskcontrols.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function Building2Icon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
