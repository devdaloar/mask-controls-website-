import React from "react";
import Image from "next/image";

export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
}

// Row 1: 6 logos with rich SEO-optimized alt texts
export const row1Logos: ClientLogo[] = [
  { 
    name: "Alstom", 
    src: "/images/Alstom-scaled.png",
    alt: "Alstom - Rail Transport & Automated Infrastructure Client of MASK Control Systems"
  },
  { 
    name: "Babcock International", 
    src: "/images/Babcock-scaled.png",
    alt: "Babcock International - Aerospace, Defence & Marine Engineering Client of MASK Control Systems"
  },
  { 
    name: "Dunlop Aircraft Tyres", 
    src: "/images/Dunlop-scaled.png",
    alt: "Dunlop Aircraft Tyres - Aviation Manufacturing Automation Client of MASK Control Systems"
  },
  { 
    name: "UK Ministry of Defence", 
    src: "/images/UK-MOD-scaled.png",
    alt: "UK Ministry of Defence (MOD) - Defence Engineering Systems Client of MASK Control Systems"
  },
  { 
    name: "Emirates Airlines", 
    src: "/images/Emirates-scaled.png",
    alt: "Emirates Airlines - Global Aviation Engineering & Maintenance Client of MASK Control Systems"
  },
  { 
    name: "Etihad Airways", 
    src: "/images/Etihad-scaled.png",
    alt: "Etihad Airways - Aviation Technical Systems Client of MASK Control Systems"
  }
];

// Row 2: 6 logos with rich SEO-optimized alt texts
export const row2Logos: ClientLogo[] = [
  { 
    name: "Bureau Veritas Marine", 
    src: "/images/Varitas-Marine-scaled.png",
    alt: "Bureau Veritas Marine - Marine Certification & Industrial Compliance Partner of MASK Control Systems"
  },
  { 
    name: "Field International", 
    src: "/images/Field-international-scaled.png",
    alt: "Field International - Aerospace Ground Support Equipment Client of MASK Control Systems"
  },
  { 
    name: "Hydro Extrusions", 
    src: "/images/Hydro-scaled.png",
    alt: "Hydro Extrusions - Aluminium Extrusion & Industrial Manufacturing Automation Client"
  },
  { 
    name: "University of Exeter", 
    src: "/images/University-of-Exeter-scaled.png",
    alt: "University of Exeter - Advanced Engineering & Research Client of MASK Control Systems"
  },
  { 
    name: "University of Southampton", 
    src: "/images/University-of-Southampton-scaled.png",
    alt: "University of Southampton - Engineering Research & Automation Systems Client"
  },
  { 
    name: "University of Warwick", 
    src: "/images/University-of-Warwick-scaled.png",
    alt: "University of Warwick - Advanced Manufacturing & Automation Partner of MASK Control Systems"
  }
];

// 6 repetitions ensure 2 perfectly identical 18-item halves (36 total items),
// guaranteeing 100% gapless, seamless infinite looping on all screens (mobile to 4K).
const row1Track = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
const row2Track = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];

export default function TrustedClientsCarousel() {
  return (
    <div className="w-full space-y-4 select-none overflow-hidden py-2">
      
      {/* ROW 1: Counter-scrolling Left to Right (Infinite Seamless Loop, No Blanks) */}
      <div className="overflow-hidden w-full">
        <div className="animate-marquee-ltr">
          {row1Track.map((client, idx) => (
            <div
              key={`row1-${client.name}-${idx}`}
              className="w-[170px] sm:w-[210px] md:w-[230px] lg:w-[240px] shrink-0 px-2 sm:px-2.5"
            >
              <div 
                className="h-20 sm:h-22 rounded-2xl bg-white p-3.5 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-105 group cursor-pointer border border-white/20"
                title={client.name}
              >
                <div className="relative w-full h-11 transition-transform duration-300 group-hover:scale-105">
                  <Image 
                    src={client.src} 
                    alt={client.alt} 
                    fill 
                    className="object-contain" 
                    sizes="(max-width: 640px) 170px, (max-width: 1024px) 210px, 240px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2: Counter-scrolling Right to Left (Infinite Seamless Loop, No Blanks) */}
      <div className="overflow-hidden w-full">
        <div className="animate-marquee-rtl">
          {row2Track.map((client, idx) => (
            <div
              key={`row2-${client.name}-${idx}`}
              className="w-[170px] sm:w-[210px] md:w-[230px] lg:w-[240px] shrink-0 px-2 sm:px-2.5"
            >
              <div 
                className="h-20 sm:h-22 rounded-2xl bg-white p-3.5 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-105 group cursor-pointer border border-white/20"
                title={client.name}
              >
                <div className="relative w-full h-11 transition-transform duration-300 group-hover:scale-105">
                  <Image 
                    src={client.src} 
                    alt={client.alt} 
                    fill 
                    className="object-contain" 
                    sizes="(max-width: 640px) 170px, (max-width: 1024px) 210px, 240px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
