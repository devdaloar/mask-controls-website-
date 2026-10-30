import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight
} from "lucide-react";
import { servicesList, industriesList } from "@/data/navigation";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#070D16] text-slate-300 border-t border-slate-800">
      {/* Top CTA Strip */}
      <div className="border-b border-slate-800/80 bg-[#0B1523]/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#6DA7BF] text-xs font-bold uppercase tracking-wider">
              Engineering Consultation & Quotations
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Have an automation or control project in mind?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Talk directly with our UK systems engineers to discuss bespoke machinery, PLC integration, or control panel requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/contact/" 
              className="px-6 py-3.5 rounded-lg bg-[#6DA7BF] text-slate-950 font-bold text-sm tracking-wide hover:bg-[#5892A9] transition-all shadow-lg hover:shadow-[#6DA7BF]/20 flex items-center gap-2"
            >
              Request a Project Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+447412999343" 
              className="px-6 py-3.5 rounded-lg border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6DA7BF]" />
              +44 7412 999343
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile & Accreditations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-64 h-16">
              <Image 
                src="/images/logo-original.png" 
                alt="MASK Control Systems Limited - UK Industrial Automation & Turnkey Engineering Partner" 
                fill 
                sizes="256px"
                className="object-contain object-left" 
              />
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              <strong className="text-white">Mask Control Systems Limited</strong> is a UK specialist engineering company delivering turnkey industrial automation, bespoke machinery, custom electrical control panels, and certified PLC programming worldwide.
            </p>

            {/* Certifications Badge Group */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Quality & Inspection Standards
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded flex items-center gap-2">
                  <Image src="/images/iso-9001.jpg" alt="ISO 9001:2015 Quality Management Accredited Automation Engineering" width={38} height={38} className="rounded" />
                  <span className="text-[11px] font-semibold text-slate-300 pr-1">ISO 9001</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded flex items-center gap-2">
                  <Image src="/images/iso-17025.jpg" alt="ISO 17025 Testing and Calibration Standards Certified" width={38} height={38} className="rounded" />
                  <span className="text-[11px] font-semibold text-slate-300 pr-1">ISO 17025</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded flex items-center gap-2">
                  <Image src="/images/iso-17020.jpg" alt="ISO 17020 Inspection Directives Certified Engineering" width={38} height={38} className="rounded" />
                  <span className="text-[11px] font-semibold text-slate-300 pr-1">ISO 17020</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded flex items-center gap-2">
                  <Image src="/images/sme-uk.jpg" alt="SME UK Enterprise Certified Industrial Automation Partner" width={38} height={38} className="rounded" />
                  <span className="text-[11px] font-semibold text-slate-300 pr-1">SME UK</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/mask-control-systems-ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#6DA7BF] hover:border-[#6DA7BF] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/maskcontrol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#6DA7BF] hover:border-[#6DA7BF] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/mask_controls/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#6DA7BF] hover:border-[#6DA7BF] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/MASKControw18d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#6DA7BF] hover:border-[#6DA7BF] transition-all"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Engineering Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesList.slice(0, 6).map((s) => (
                <li key={s.href}>
                  <Link 
                    href={s.href} 
                    className="text-slate-400 hover:text-[#6DA7BF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6DA7BF]" />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services/" 
                  className="text-xs font-semibold text-[#6DA7BF] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries We Serve */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              {industriesList.map((ind) => (
                <li key={ind.href}>
                  <Link 
                    href={ind.href} 
                    className="text-slate-400 hover:text-[#6DA7BF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6DA7BF]" />
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              UK Head Office
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6DA7BF] shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com/?q=Unit+11+Simmonds+Place+Kingsmill+Industrial+Estate+Saunders+Way+Cullompton+EX15+1BS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Unit 11, Simmonds Place, Kingsmill Industrial Estate, Saunders Way, Cullompton, EX15 1BS, UK
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                <a href="tel:+447412999343" className="hover:text-white transition-colors block font-medium">
                  +44 7412 999343
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6DA7BF] shrink-0" />
                <a href="mailto:sales@maskcontrols.com" className="hover:text-white transition-colors">
                  sales@maskcontrols.com
                </a>
              </div>

              <div className="pt-2">
                <Link 
                  href="/contact/" 
                  className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:border-[#6DA7BF] transition-all block"
                >
                  Online Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Copyright Bottom Strip */}
      <div className="border-t border-slate-900 bg-[#050A10] py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; 2026 Mask Control Systems Limited. Registered in England & Wales.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact/" className="hover:text-slate-400 transition-colors">
              Support
            </Link>
            <Link href="/about/" className="hover:text-slate-400 transition-colors">
              Company
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
