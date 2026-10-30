export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export const servicesList: NavItem[] = [
  {
    title: "Automation & Bespoke Machinery",
    href: "/automation/",
    description: "End-to-end bespoke automated machinery built for your specific process."
  },
  {
    title: "Electrical Control Panel Design",
    href: "/electrical-control-panel-design/",
    description: "Custom control cabinets engineered to BS 7671 & EN 60204 standards."
  },
  {
    title: "PLC Programming & Software",
    href: "/plc-programming/",
    description: "PLC logic, SCADA and HMI programming across leading industrial platforms."
  },
  {
    title: "Design & Build Services",
    href: "/design-build-services/",
    description: "Turnkey mechanical, electrical, and control systems from CAD to completion."
  },
  {
    title: "Systems Integration",
    href: "/systems-integration/",
    description: "Connecting legacy machinery with modern robotics, vision, and sensors."
  },
  {
    title: "Installation & Commissioning",
    href: "/installation-commissioning/",
    description: "On-site electrical installation, wiring, testing, and system handover."
  },
  {
    title: "Remote Monitoring & Telemetry",
    href: "/remote-monitoring/",
    description: "Cloud-connected IIoT monitoring, live diagnostics, and predictive alerts."
  },
  {
    title: "Service, Breakdown & Support",
    href: "/service-and-breakdown/",
    description: "Rapid on-site emergency troubleshooting, preventative maintenance, and SLA support."
  }
];

export const plcBrands: NavItem[] = [
  {
    title: "Siemens PLC Systems",
    href: "/siemens-plc/",
    description: "TIA Portal, S7-1200, S7-1500, WinCC, Profinet architecture."
  },
  {
    title: "Mitsubishi PLC Systems",
    href: "/mitsubishi-plc/",
    description: "iQ-R, iQ-F, FX Series, GX Works, GOT HMI solutions."
  },
  {
    title: "Unitronics PLC Integration",
    href: "/unitronics-plc/",
    description: "UniStream, Vision Series all-in-one PLC + HMI platforms."
  }
];

export const industriesList: NavItem[] = [
  {
    title: "Food & FMCG Automation",
    href: "/industries/food-fmcg-automation/",
    description: "Hygienic washdown, packaging, batching, and high-speed sorting."
  },
  {
    title: "Aerospace & Defence",
    href: "/industries/aerospace-defence/",
    description: "High-precision testing rigs, safety interlocks, and traceability."
  },
  {
    title: "Pharmaceutical & Medical",
    href: "/industries/pharmaceutical-medical/",
    description: "Cleanroom automation, validation documentation, and precision dosage."
  },
  {
    title: "Marine Automation Systems",
    href: "/industries/marine-automation-systems/",
    description: "Offshore control panels, saltwater-resistant telemetry, and vessel power."
  },
  {
    title: "Automotive (Tier 2/3)",
    href: "/industries/automotive-automation-for-tier-2-3-suppliers/",
    description: "Robot cell integration, automated assembly, and press monitoring."
  },
  {
    title: "Logistics & Warehousing",
    href: "/industries/logistics-warehousing-automation-solutions/",
    description: "Conveyor control, automated sorting, AGV integration, and palletising."
  },
  {
    title: "Water & Utilities",
    href: "/industries/water-utilities-automation-solutions/",
    description: "Pumping station control, telemetry, dosing systems, and remote alarms."
  }
];

export const companyLinks: NavItem[] = [
  { title: "About Us", href: "/about/" },
  { title: "Featured Projects", href: "/projects/" },
  { title: "Client Testimonials", href: "/testimonials/" },
  { title: "Technical Blog", href: "/blog/" },
  { title: "Contact Us", href: "/contact/" }
];
