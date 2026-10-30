"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Shield, 
  Clock, 
  Lock, 
  Cpu, 
  ArrowRight,
  AlertTriangle 
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "Control Panel Design & Build",
    timeline: "1 to 3 Months",
    ndaRequired: false,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "c0f53714-7c43-4fad-a15e-f4fbae7a89bc",
          name: formData.fullName,
          company: formData.companyName || "N/A",
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          timeline: formData.timeline,
          nda_required: formData.ndaRequired ? "Yes (NDA Requested Prior to CAD Review)" : "No",
          message: formData.message || "No additional notes provided.",
          from_name: "MASK Controls Website Lead",
          subject: `New Project Scope: ${formData.fullName} - ${formData.companyName || "Industrial Client"}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        // ==========================================
        // GOOGLE TAG MANAGER & ADS CONVERSION EVENTS
        // ==========================================
        if (typeof window !== "undefined") {
          const w = window as any;
          w.dataLayer = w.dataLayer || [];

          // 1. Exact event expected by previous Google Ads Expert GTM tag (Tag 13)
          w.dataLayer.push({
            event: "form_submit",
            form_id: "contact_quote_form",
            lead_type: formData.projectType
          });

          // 2. Exact event expected by previous Forminator GTM tag (Tag 18 & Tag 21)
          w.dataLayer.push({
            event: "forminator_form_submit",
            form_id: "contact_quote_form",
            inputs: {
              "name-1": formData.fullName,
              "email-1": formData.email,
              "phone-1": formData.phone,
              "company-1": formData.companyName || "N/A"
            }
          });

          // 3. Recommended GA4 standard conversion event for Lead Generation
          w.dataLayer.push({
            event: "generate_lead",
            currency: "GBP",
            value: 1,
            lead_source: "website_contact_form",
            project_type: formData.projectType
          });
        }
      } else {
        setErrorMessage(result.message || "Failed to submit inquiry. Please try again or call us directly.");
      }
    } catch (err: any) {
      setErrorMessage("Network error occurred while submitting. Please check your connection or contact +44 7412 999343.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Control Panel Design & Build",
    "PLC / HMI Software Programming",
    "Systems Integration & Industrial Comms",
    "Emergency Breakdown & On-Site Service",
    "Legacy PLC Modernization / Retrofit",
    "Custom Machine Automation & Test Rigs",
    "Telemetry & Remote Monitoring",
    "General Engineering Inquiry"
  ];

  const timelines = [
    "Immediate / Emergency",
    "Within 1 Month",
    "1 to 3 Months",
    "3 to 6 Months",
    "Future Feasibility / Budgeting"
  ];

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0C121C] border border-[#6DA7BF]/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto font-light leading-relaxed">
            Thank you, <strong className="text-white font-medium">{formData.fullName}</strong>. Your technical requirements have been routed directly to our senior control systems engineering team.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1.5 font-mono">
          <div><strong className="text-slate-300">ESTIMATED RESPONSE:</strong> Under 4 working hours</div>
          <div><strong className="text-slate-300">ASSIGNED TO:</strong> Applications Engineering Desk</div>
          <div><strong className="text-slate-300">CONFIDENTIALITY:</strong> {formData.ndaRequired ? "Standard bilateral NDA will be executed prior to technical review" : "Strict commercial discretion observed"}</div>
        </div>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                companyName: "",
                email: "",
                phone: "",
                projectType: "Control Panel Design & Build",
                timeline: "1 to 3 Months",
                ndaRequired: false,
                message: ""
              });
            }}
            className="text-xs font-semibold text-[#6DA7BF] hover:text-white transition-colors cursor-pointer"
          >
            Submit Another Technical Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl bg-[#0C121C] border border-white/10 shadow-2xl space-y-6">
      <div className="space-y-2 pb-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6DA7BF]">
            Engineering Project Scope Form
          </span>
          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5 text-[#6DA7BF]" />
            Avg. response: &lt; 4 hrs
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Tell Us About Your Requirements
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed font-light">
          Fill out the details below. Our senior engineers will review your specs and provide honest technical feasibility and preliminary timelines.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Full Name <span className="text-rose-400">*</span></span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. David Richardson"
            className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Company / Organization
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Apex Industrial Systems Ltd"
            className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Work Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. d.richardson@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Contact Telephone <span className="text-rose-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +44 7123 456789"
            className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Project Type */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Primary Engineering Discipline
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all cursor-pointer"
          >
            {projectTypes.map((type, idx) => (
              <option key={idx} value={type} className="bg-[#0C121C] text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">
            Target Delivery Window
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all cursor-pointer"
          >
            {timelines.map((time, idx) => (
              <option key={idx} value={time} className="bg-[#0C121C] text-white">
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message / Project Scope */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
          <span>Project Description &amp; Technical Scope</span>
          <span className="text-[11px] text-slate-500 font-normal">Optional CAD/URS details</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your requirements: target machinery, existing PLC platform (Siemens/Mitsubishi/etc.), I/O scale, environment (washdown/clean-room), or breakdown symptoms..."
          className="w-full px-4 py-3 rounded-xl bg-[#070D16] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6DA7BF] focus:ring-1 focus:ring-[#6DA7BF] transition-all resize-y"
        />
      </div>

      {/* NDA Checkbox */}
      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
        <input
          type="checkbox"
          id="nda"
          checked={formData.ndaRequired}
          onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-slate-700 text-[#6DA7BF] focus:ring-[#6DA7BF] bg-[#070D16] cursor-pointer"
        />
        <label htmlFor="nda" className="text-xs text-slate-300 cursor-pointer select-none leading-relaxed">
          <strong className="text-white font-medium">Non-Disclosure Agreement (NDA) Required:</strong> Check this box if you require our standard bilateral NDA prior to sharing proprietary machinery drawings or defence/medical specifications.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-[#6DA7BF] text-[#070D16] font-bold text-sm tracking-wide hover:bg-[#5B95AD] transition-all duration-200 shadow-[0_10px_30px_rgba(109,167,191,0.25)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span>Sending Technical Scope...</span>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/10">
        <span className="flex items-center gap-1">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          SSL Encrypted &amp; GDPR Compliant
        </span>
        <span>Direct Engineering Response Guaranteed</span>
      </div>
    </form>
  );
}
