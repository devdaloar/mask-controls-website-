import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maskcontrols.com"),
  title: {
    default: "Industrial Automation Experts | End-to-End Bespoke Systems | MASK Control Systems",
    template: "%s | MASK Control Systems Limited"
  },
  description: "Industrial automation solutions with end-to-end bespoke systems. Reduce downtime, cut costs, and scale production across the UK and worldwide.",
  keywords: [
    "industrial automation UK",
    "bespoke machinery manufacturer",
    "electrical control panel design",
    "PLC programming UK",
    "systems integration",
    "ISO 17025 testing",
    "ISO 9001 certified"
  ],
  authors: [{ name: "Mask Control Systems Limited" }],
  creator: "Mask Control Systems Limited",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://maskcontrols.com/",
    siteName: "Mask Control Systems Limited",
    title: "Industrial Automation Experts | End-to-End Bespoke Systems",
    description: "Industrial automation solutions with end-to-end bespoke systems. Reduce downtime, cut costs, and scale production across the UK and worldwide.",
    images: [
      {
        url: "/images/hero-automation.jpg",
        width: 1168,
        height: 784,
        alt: "Industrial Systems Integration Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation Experts | End-to-End Bespoke Systems",
    description: "Industrial automation solutions with end-to-end bespoke systems. Reduce downtime, cut costs, and scale production across the UK and worldwide.",
    images: ["/images/hero-automation.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${inter.variable} bg-[#070D16] scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDM2MGXT');`
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#070D16] text-slate-100 antialiased selection:bg-[#6DA7BF] selection:text-[#070D16]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDM2MGXT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1 pt-[96px] sm:pt-[108px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
