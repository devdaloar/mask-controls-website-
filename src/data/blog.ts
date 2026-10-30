export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "Industrial Automation" | "PLC Programming" | "Automation Systems";
  date: string;
  isoDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "why-uk-manufacturers-are-outsourcing-plc-work",
    slug: "why-uk-manufacturers-are-outsourcing-plc-work",
    title: "Why UK Manufacturers Are Outsourcing PLC Work in 2026",
    subtitle: "How the UK engineering capacity shortage is driving manufacturers to specialist controls partnerships rather than permanent hires.",
    category: "Industrial Automation",
    date: "June 20, 2026",
    isoDate: "2026-06-20",
    author: {
      name: "MASK Controls Engineering Team",
      role: "Industrial Systems Integration Specialists"
    },
    readTime: "7 min read",
    image: "/images/why-uk-manufacturers-outsourcing-plc.jpg",
    excerpt: "If your operations team has spent the past six months trying to recruit a PLC programmer, you already know the story. With 61,000 unfilled vacancies, UK manufacturers are turning to outsourced engineering partnerships to eliminate recruitment risk and secure multi-platform coverage.",
    featured: true,
    tags: ["PLC Programming", "Skills Shortage", "Engineering Outsourcing", "Industry 4.0", "UK Manufacturing"]
  },
  {
    id: "industrial-automation-systems-plc-solutions",
    slug: "industrial-automation-systems-plc-solutions",
    title: "Industrial Automation Systems: A Complete Guide to Efficiency, PLC Solutions & Modern Manufacturing",
    subtitle: "A comprehensive technical blueprint covering deterministic control loops, PLC platforms, SCADA telemetry, and legacy plant modernization.",
    category: "Industrial Automation",
    date: "April 12, 2026",
    isoDate: "2026-04-12",
    author: {
      name: "MASK Controls Engineering Team",
      role: "Lead Automation Consultants"
    },
    readTime: "11 min read",
    image: "/images/industrial-automation-guide.jpg",
    excerpt: "Explore the core fundamentals of modern industrial automation, from deterministic PLC architectures (Siemens, Mitsubishi, Unitronics) and high-speed fieldbuses to real-time SCADA telemetry, safety integrity levels, and legacy plant upgrades.",
    featured: false,
    tags: ["Industrial Automation", "PLC Solutions", "SCADA Integration", "Legacy Upgrades", "Smart Manufacturing"]
  }
];
