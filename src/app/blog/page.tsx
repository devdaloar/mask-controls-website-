import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Sparkles, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Layers,
  Cpu,
  ShieldCheck
} from "lucide-react";
import BlogInteractiveArchive from "@/components/blog/BlogInteractiveArchive";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Technical Blog & Industrial Automation Insights | MASK Control Systems Ltd",
  description: "Read technical articles, engineering analysis, and industry guides on PLC programming, control panel design, systems integration, and UK manufacturing trends.",
  alternates: {
    canonical: "https://maskcontrols.com/blog/"
  },
  openGraph: {
    title: "Technical Blog & Industrial Automation Insights | MASK Control Systems Ltd",
    description: "Read technical articles, engineering analysis, and industry guides on PLC programming, control panel design, and UK manufacturing trends.",
    url: "https://maskcontrols.com/blog/",
    siteName: "MASK Control Systems Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://maskcontrols.com/images/why-uk-manufacturers-outsourcing-plc.jpg",
        width: 1200,
        height: 630,
        alt: "Technical Blog & Automation Insights - MASK Control Systems Ltd"
      }
    ]
  }
};

export default function BlogArchivePage() {
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
          }
        ]
      },
      {
        "@type": "Blog",
        "name": "MASK Control Systems Engineering Blog",
        "description": "Technical insights, guides, and analysis for UK industrial automation, PLC systems, and machinery engineering.",
        "url": "https://maskcontrols.com/blog/",
        "publisher": {
          "@type": "Organization",
          "name": "Mask Control Systems Limited",
          "logo": {
            "@type": "ImageObject",
            "url": "https://maskcontrols.com/images/logo-original.png"
          }
        },
        "blogPost": blogPosts.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.isoDate,
          "url": `https://maskcontrols.com/blog/${post.slug}/`,
          "author": {
            "@type": "Organization",
            "name": post.author.name
          }
        }))
      }
    ]
  };

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
            <span className="text-[#6DA7BF] font-medium">Technical Blog</span>
          </nav>

          <div className="relative z-10 max-w-3xl space-y-5">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6DA7BF] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#6DA7BF] shadow-[0_0_8px_#6DA7BF] animate-pulse" />
              <span>Technical Engineering Insights &bull; UK Manufacturing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Technical Insights &amp; <br className="hidden sm:inline" />
              <span className="text-[#6DA7BF]">Automation Intelligence</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              In-depth engineering analysis, regulatory guides, and practical controls knowledge written by our UK systems integration and automation engineers.
            </p>

            {/* Stats Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Peer-Reviewed Engineering Knowledge</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6DA7BF]" />
                <span>ISO 9001 &amp; BS 7671 Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. INTERACTIVE BLOG ARCHIVE
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <BlogInteractiveArchive />
        </div>
      </section>

      {/* =========================================
          3. ENGINEERING CONSULTATION CTA
      ========================================= */}
      <section className="px-3 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0C121C] to-[#0A101A] p-8 sm:p-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Have a Technical Question or Project?
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Consult Directly with Our UK Controls Engineers
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto font-light">
            Whether you need advice on resolving legacy PLC obsolescence, migrating to Siemens or Mitsubishi, or engineering a custom control panel, we are here to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact/"
              className="px-7 py-3.5 rounded-xl bg-[#6DA7BF] text-slate-950 font-bold text-xs sm:text-sm tracking-wide hover:bg-[#5892A9] transition-all shadow-lg hover:shadow-[#6DA7BF]/25 flex items-center gap-2"
            >
              Contact Engineering Team
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
        </div>
      </section>
    </div>
  );
}
