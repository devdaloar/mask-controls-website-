import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Building2, 
  Phone, 
  Mail, 
  Check, 
  X,
  FileText,
  Layers,
  Sparkles,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why UK Manufacturers Are Outsourcing PLC Work in 2026 | MASK Control Systems Ltd",
  description: "An in-depth analysis of the UK engineering skills gap, 61,000 manufacturing vacancies, and why plants are outsourcing PLC programming and control panel design.",
  alternates: {
    canonical: "https://maskcontrols.com/blog/why-uk-manufacturers-are-outsourcing-plc-work/"
  },
  openGraph: {
    title: "Why UK Manufacturers Are Outsourcing PLC Work in 2026 | MASK Control Systems Ltd",
    description: "An in-depth analysis of the UK engineering skills gap, 61,000 manufacturing vacancies, and why plants are outsourcing PLC programming and control panel design.",
    url: "https://maskcontrols.com/blog/why-uk-manufacturers-are-outsourcing-plc-work/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-06-20T10:00:00.000Z",
    authors: ["MASK Controls Engineering Team"],
    images: [
      {
        url: "https://maskcontrols.com/images/why-uk-manufacturers-outsourcing-plc.jpg",
        width: 1200,
        height: 630,
        alt: "Why UK Manufacturers Are Outsourcing PLC Work in 2026"
      }
    ]
  }
};

export default function WhyOutsourcePlcBlogPage() {
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
            "name": "Technical Blog",
            "item": "https://maskcontrols.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Why UK Manufacturers Are Outsourcing PLC Work",
            "item": "https://maskcontrols.com/blog/why-uk-manufacturers-are-outsourcing-plc-work/"
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": "Why UK Manufacturers Are Outsourcing PLC Work in 2026",
        "description": "How the UK engineering capacity shortage is driving manufacturers to specialist controls partnerships rather than permanent hires.",
        "datePublished": "2026-06-20T10:00:00+00:00",
        "dateModified": "2026-06-20T10:00:00+00:00",
        "mainEntityOfPage": "https://maskcontrols.com/blog/why-uk-manufacturers-are-outsourcing-plc-work/",
        "author": {
          "@type": "Organization",
          "name": "Mask Control Systems Limited",
          "url": "https://maskcontrols.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mask Control Systems Limited",
          "logo": {
            "@type": "ImageObject",
            "url": "https://maskcontrols.com/images/logo-original.png"
          }
        },
        "image": "https://maskcontrols.com/images/why-uk-manufacturers-outsourcing-plc.jpg"
      }
    ]
  };

  const stats = [
    { value: "66%", label: "Worsening Skills Gap", detail: "of UK manufacturers report an accelerating technical shortage" },
    { value: "62%", label: "Acute Today", detail: "describe the shortage as an immediate operational bottleneck" },
    { value: "76%", label: "Recruitment Struggles", detail: "of engineering employers cannot fill key control roles" },
    { value: "61,000", label: "Unfilled Vacancies", detail: "approximate open roles across UK manufacturing plants" },
    { value: "43%", label: "Electronics Design Gap", detail: "vacancy rate in specialist industrial electronics design" },
    { value: "39%", label: "Systems Engineering Gap", detail: "vacancy rate in complex automated systems integration" }
  ];

  const comparisonData = [
    {
      feature: "Time to Capability",
      inHouse: "3 to 6 months recruitment cycle (if candidate is found)",
      outsourced: "Immediate access to pre-vetted, established engineering capacity"
    },
    {
      feature: "Platform Depth",
      inHouse: "Typically confined to 1 or 2 platforms (e.g., Siemens only)",
      outsourced: "Multi-platform fluency (Siemens, Mitsubishi, Unitronics, Allen-Bradley)"
    },
    {
      feature: "Cost Flexibility",
      inHouse: "Fixed full-time salary overhead regardless of quarterly workload",
      outsourced: "Demand-flexed: full project design now, lighter support later"
    },
    {
      feature: "Knowledge Continuity",
      inHouse: "Critical risk: system knowledge walks away if engineer resigns",
      outsourced: "Persistent EPLAN CAD drawings, documented logic, and firm records"
    },
    {
      feature: "Breakdown Response",
      inHouse: "Zero cover when engineer is on annual leave or off sick",
      outsourced: "24/7 on-call SLA emergency breakdown & remote telemetry triage"
    }
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
            <Link href="/blog/" className="hover:text-white transition-colors">Technical Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#6DA7BF] font-medium truncate max-w-[200px] sm:max-w-none">
              Why UK Manufacturers Are Outsourcing PLC Work
            </span>
          </nav>

          <div className="relative z-10 max-w-4xl space-y-5">
            {/* Category & Metadata Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#6DA7BF]/10 border border-[#6DA7BF]/20 text-[#6DA7BF] text-xs font-bold uppercase tracking-wider">
                Industrial Automation
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                June 20, 2026
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                7 min read
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Why UK Manufacturers Are Outsourcing PLC Work in 2026
            </h1>

            {/* Lead Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              How the UK engineering capacity shortage is driving manufacturers to specialist controls partnerships rather than permanent hires.
            </p>

            {/* Author Credit */}
            <div className="pt-2 flex items-center gap-3 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#6DA7BF]/20 border border-[#6DA7BF]/40 flex items-center justify-center text-[#6DA7BF] font-bold text-sm">
                MC
              </div>
              <div>
                <p className="text-xs font-bold text-white">MASK Control Systems Engineering Team</p>
                <p className="text-[11px] text-slate-400">UK Turnkey Automation &amp; Controls Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. ARTICLE BODY SECTION
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Featured Header Image */}
          <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/why-uk-manufacturers-outsourcing-plc.jpg"
              alt="Industrial engineers collaborating on PLC automation and control cabinets in a UK manufacturing plant"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-slate-300 border border-white/10">
              UK manufacturing plants are transitioning to specialist outsourced controls partnerships to counter record recruitment vacancies.
            </div>
          </div>

          {/* Article Opening Statement */}
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <p className="text-lg sm:text-xl text-white font-normal leading-relaxed border-l-4 border-[#6DA7BF] pl-5">
              If your operations or engineering team has spent the past six months trying to recruit a PLC programmer, you already know how the story tends to end. The role stays open. The shortlist is thin. The candidates who do apply are either too junior for a live production environment or already fielding three other offers.
            </p>

            <p>
              You are not imagining it, and your hiring process is not the problem. The UK has a genuine, measurable engineering capacity shortage, and a growing share of manufacturers are responding the same way: they are outsourcing the controls work rather than trying to staff it permanently.
            </p>

            <p>
              This article sets out why that shift is happening, what the industry data actually shows, and how a partnership model compares to an in-house hire for the kind of work that keeps a high-speed production line running.
            </p>
          </div>

          {/* Section 1: The Skills Gap in Numbers */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#6DA7BF]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The skills gap is real, and the numbers confirm it
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The shortage is not anecdotal. Across recent UK industry surveys, the picture is consistent and difficult to ignore:
            </p>

            {/* 6 Grid Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {stats.map((s, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[#0C121C] border border-white/10 p-5 shadow-lg space-y-2 hover:border-[#6DA7BF]/40 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#6DA7BF]">
                    {s.value}
                  </div>
                  <div className="text-xs font-bold text-white">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
              <strong className="text-white">PLC programming</strong> sits directly at the intersection of those final two figures. It is a niche, safety-critical skill set. You cannot post a generic job advert and expect a queue of qualified controls engineers by the end of the week, and the candidates who are qualified know exactly how scarce they are.
            </p>
          </div>

          {/* Section 2: Why the Shortage is Structural */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#6DA7BF]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why the shortage is structural, not temporary
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              It would be easier if this were a passing dip in the labour market. It is not. Several long-term forces are converging at once:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center text-xs font-bold">1</span>
                  Accelerating Engineer Retirements
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-8">
                  Experienced controls engineers are retiring faster than the trade is replacing them. The generation that learned ladder logic on the factory floor is leaving, and apprenticeship pipelines have not scaled to match the pace at which UK factories are automating.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center text-xs font-bold">2</span>
                  Platform Depth Demands Specialized Mastery
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-8">
                  A capable engineer fluent in <Link href="/siemens-plc/" className="text-[#6DA7BF] underline hover:text-white">Siemens TIA Portal</Link> is not automatically fluent in <Link href="/mitsubishi-plc/" className="text-[#6DA7BF] underline hover:text-white">Mitsubishi GX Works</Link> or <Link href="/unitronics-plc/" className="text-[#6DA7BF] underline hover:text-white">Unitronics UniStream</Link>. Each ecosystem has its own development environment, fieldbus conventions, and quirks. Hiring one engineer rarely provides coverage across the mixed platforms a plant actually runs on.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-5 sm:p-6 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#6DA7BF]/20 text-[#6DA7BF] flex items-center justify-center text-xs font-bold">3</span>
                  Modern Production Lines Need Far More Than Just Code
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-8">
                  A single automation project routinely involves <Link href="/plc-programming/" className="text-[#6DA7BF] underline hover:text-white">PLC programming</Link>, <Link href="/electrical-control-panel-design/" className="text-[#6DA7BF] underline hover:text-white">control panel design and build</Link>, <Link href="/systems-integration/" className="text-[#6DA7BF] underline hover:text-white">systems integration</Link> with legacy machinery, HMI/SCADA development, and ongoing support when a midnight breakdown occurs. Expecting one permanent hire to cover all of that reliably is unrealistic for most SME manufacturers.
                </p>
              </div>
            </div>
          </div>

          {/* Inline Highlight Image: Control Panel & HMI Integration */}
          <div className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 my-8">
            <Image
              src="/images/CUSTOM PLC CABINET & HMI INTEGRATION.jpg"
              alt="Custom PLC control cabinet with integrated HMI touch screen designed by MASK Control Systems Ltd"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-slate-300 border border-white/10">
              Turnkey control panel engineering and PLC integration built to BS 7671 standards at MASK Control Systems.
            </div>
          </div>

          {/* Section 3: What Manufacturers Are Doing Instead */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#6DA7BF]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What manufacturers are doing instead
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Rather than waiting for the labour market to correct itself, manufacturers are changing how they source controls engineering. The same surveys that quantify the shortage also show how the sector is adapting:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0C121C] to-[#121E2E] border border-[#6DA7BF]/30 space-y-2">
                <div className="text-3xl font-extrabold text-[#6DA7BF]">49%</div>
                <div className="text-sm font-bold text-white">Automating Out of the Crisis</div>
                <p className="text-xs text-slate-400">
                  of UK manufacturers are directly increasing automation investment to mitigate staffing shortages.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0C121C] to-[#121E2E] border border-emerald-500/30 space-y-2">
                <div className="text-3xl font-extrabold text-emerald-400">44%</div>
                <div className="text-sm font-bold text-white">Accelerating Smart Manufacturing</div>
                <p className="text-xs text-slate-400">
                  report that capacity shortfalls have sped up their roadmap toward Industry 4.0 and cloud telemetry.
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In practical terms, that means bringing in a specialist engineering partner for the controls work itself, rather than absorbing recruitment risk, high salary overheads, and the single-point-of-failure exposure of depending on one in-house engineer who could hand in their notice at any moment.
            </p>
          </div>

          {/* Section 4: In-House Hire vs Outsourced Partner Comparison Table */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              In-house hire versus outsourced partner: an honest comparison
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A permanent hire still makes sense for some operations, particularly high-volume manufacturing campuses with a steady, year-round controls workload. But for most UK manufacturing operations, the economics and risk profile increasingly favour an outsourced partner model.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0C121C]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-900/80">
                    <th className="p-4 sm:p-5 text-white font-bold uppercase tracking-wider text-xs">Factor</th>
                    <th className="p-4 sm:p-5 text-rose-400 font-bold uppercase tracking-wider text-xs">Permanent In-House Hire</th>
                    <th className="p-4 sm:p-5 text-emerald-400 font-bold uppercase tracking-wider text-xs">Specialist Outsourced Partner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap align-top">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400 align-top">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{row.inHouse}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-200 font-medium align-top bg-[#6DA7BF]/5">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.outsourced}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
              None of this means abandoning your internal team. The most effective operational model treats an external partner as an extension of in-house engineering: your team retains plant ownership and priorities, while the partner supplies specialist controls capacity on demand.
            </p>
          </div>

          {/* Section 5: What Good Looks Like in a Partner */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What good looks like in an outsourcing partner
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If you decide to outsource, the partner you choose matters as much as the decision itself. The shortlist should be judged on a few clear criteria:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#6DA7BF]" />
                  Demonstrable Field Track Record
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Look for commissioned industrial installations with named clients across demanding sectors, not stock photography or hypothetical capability lists.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#6DA7BF]" />
                  Genuine Multi-Platform Expertise
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vendor independence is critical. A partner tied to a single OEM cannot give you objective advice on what your production line actually needs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#6DA7BF]" />
                  Recognized Triple Accreditations
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ISO 9001, ISO 17020, and ISO 17025 signal that quality, testing, and safety processes are controlled, auditable, and regulated.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121C] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#6DA7BF]" />
                  Full Lifecycle Support
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The relationship must not end at handover. On-site <Link href="/installation-commissioning/" className="text-[#6DA7BF] underline">commissioning</Link>, remote telemetry, operator training, and 24/7 breakdown support separate true partners from one-off contractors.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Where MASK Control Systems Fits */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C121C] to-[#111A29] border border-[#6DA7BF]/30 p-6 sm:p-10 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6DA7BF]">
                Your UK Engineering Partner
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Where MASK Control Systems Fits
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">MASK Control Systems Ltd</strong> has been delivering turnkey industrial <Link href="/automation/" className="text-[#6DA7BF] underline">automation</Link> and controls engineering across the UK since 2013. We were built for precisely the challenge this article describes: providing the specialist controls capacity that manufacturers can no longer reliably recruit in-house.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our scope spans turnkey <Link href="/plc-programming/" className="text-[#6DA7BF] underline">PLC programming</Link>, custom <Link href="/electrical-control-panel-design/" className="text-[#6DA7BF] underline">control panel design and manufacturing</Link>, <Link href="/systems-integration/" className="text-[#6DA7BF] underline">systems integration</Link>, HMI/SCADA development, <Link href="/remote-monitoring/" className="text-[#6DA7BF] underline">cloud telemetry</Link>, and <Link href="/service-and-breakdown/" className="text-[#6DA7BF] underline">24/7 emergency breakdown support</Link>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 text-center">
                  <div className="font-bold text-white text-sm">Siemens</div>
                  <div className="text-[10px] text-slate-400">TIA Portal / S7</div>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 text-center">
                  <div className="font-bold text-white text-sm">Mitsubishi</div>
                  <div className="text-[10px] text-slate-400">iQ-R / iQ-F / FX</div>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 text-center">
                  <div className="font-bold text-white text-sm">Unitronics</div>
                  <div className="text-[10px] text-slate-400">UniStream / Vision</div>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 text-center">
                  <div className="font-bold text-white text-sm">Allen-Bradley</div>
                  <div className="text-[10px] text-slate-400">ControlLogix</div>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-2">
                We are tri-certified in <strong className="text-white">ISO 9001, ISO 17020, and ISO 17025</strong>, and have delivered mission-critical systems for organisations including <strong className="text-white font-medium">Alstom, Babcock, the UK Ministry of Defence, Emirates, Etihad, Hydro, Varitas Marine</strong>, and leading UK universities.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/projects/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6DA7BF] hover:text-white transition-colors"
                >
                  Explore Delivered Projects &rarr;
                </Link>
                <span className="text-slate-600">&bull;</span>
                <Link
                  href="/testimonials/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6DA7BF] hover:text-white transition-colors"
                >
                  Read Verified Client Reviews &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Section 7: Final Conclusion & Action */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              If recruitment is not working, there is a clear alternative
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              You do not need to win the hiring market to keep your production lines running and capital projects on schedule. If your team is stretched, your last controls hire fell through, or you simply want to stop carrying that risk on the shoulders of one individual, an outsourced engineering partnership is a proven and increasingly mainstream answer.
            </p>

            <div className="rounded-2xl bg-[#0C121C] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Discuss your automation project with MASK
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
                  We are happy to scope your machinery or control panel requirements and outline clear delivery milestones.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact/"
                  className="px-6 py-3 rounded-xl bg-[#6DA7BF] text-slate-950 font-bold text-xs sm:text-sm tracking-wide hover:bg-[#5892A9] transition-all shadow-lg hover:shadow-[#6DA7BF]/25"
                >
                  Get in Touch
                </Link>
                <a
                  href="tel:+447412999343"
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-white/15 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all"
                >
                  +44 7412 999343
                </a>
              </div>
            </div>
          </div>

          {/* Data Sources Attribution */}
          <div className="pt-8 border-t border-white/10 text-xs text-slate-500 space-y-1">
            <p className="font-bold text-slate-400">Industry Sources &amp; References:</p>
            <p>
              MyWorkwear UK Manufacturing Skills Gap Report 2025; Make UK Industrial Strategy Skills Commission Report 2025; Institution of Engineering and Technology (IET) 2025 UK Engineering and Technology Skills Survey; Office for National Statistics (ONS) Labour Market Data.
            </p>
          </div>

          {/* Author Card Footer */}
          <div className="p-6 rounded-2xl bg-[#0C121C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#6DA7BF]/20 border border-[#6DA7BF]/40 flex items-center justify-center text-[#6DA7BF] font-extrabold text-base">
                MC
              </div>
              <div>
                <div className="font-bold text-white text-sm">Published by MASK Control Systems Ltd</div>
                <div className="text-xs text-slate-400">UK Turnkey Industrial Automation Specialists &bull; Cullompton HQ</div>
              </div>
            </div>

            <Link
              href="/blog/"
              className="text-xs font-bold text-[#6DA7BF] hover:underline"
            >
              &larr; Back to All Articles
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
