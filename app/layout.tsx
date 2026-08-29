import type { Metadata } from "next";
import { business, cities, specialtySearches } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dkplumbingandheatingco.com"),
  title: {
    default: "Colorado Springs Plumber, Boilers & Hydronics | DK Plumbing",
    template: "%s | DK Plumbing & Heating LLC",
  },
  description:
    "Colorado Springs and Denver Metro plumber for emergency repairs, boilers, radiant hydronic heat, drain and sewer work, water heaters, gas lines, repiping and commercial construction.",
  applicationName: "DK Plumbing & Heating LLC",
  category: "Plumbing and hydronic heating",
  keywords: [
    "Colorado Springs plumber",
    "Denver plumber",
    "Front Range plumbing contractor",
    "emergency plumber Colorado Springs",
    "boiler repair Colorado",
    "hydronic heating contractor",
    "radiant heat repair",
    "tankless water heater installation",
    "commercial plumbing contractor Colorado",
    "new construction plumbing",
    "drain and sewer repair",
    "water line repair",
    "sewer camera inspection Colorado Springs",
    "hydro jetting Colorado Springs",
    "pressure reducing valve replacement",
    "boiler repair Denver",
    "radiant floor heat repair",
    "commercial tenant finish plumbing Denver",
    "gas line pressure testing Colorado",
    "whole house repiping Colorado",
    "sump pump and sewage ejector repair",
    "backflow testing Colorado",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DK Plumbing & Heating LLC",
    title: "DK Plumbing & Heating LLC",
    description:
      "Licensed Colorado plumbing, boilers, hydronic heat, water heaters, commercial work and new construction.",
    url: "https://dkplumbingandheatingco.com/",
  },
  twitter: {
    card: "summary",
    title: "DK Plumbing & Heating LLC",
    description: "Licensed plumbing, boilers and hydronic heat across Colorado's Front Range.",
  },
  icons: {
    icon: "/images/dk-logo.webp",
    shortcut: "/images/dk-logo.webp",
    apple: "/images/dk-logo.webp",
  },
  formatDetection: { address: false, email: false, telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Plumber", "LocalBusiness"],
        "@id": "https://dkplumbingandheatingco.com/#business",
        name: business.name,
        url: "https://dkplumbingandheatingco.com/",
        telephone: "+1-720-527-4557",
        email: business.email,
        image: "https://dkplumbingandheatingco.com/images/dk-logo.webp",
        logo: "https://dkplumbingandheatingco.com/images/dk-logo.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "6993 Cobblecreek Dr",
          addressLocality: "Colorado Springs",
          addressRegion: "CO",
          postalCode: "80922",
          addressCountry: "US",
        },
        areaServed: cities.map((city) => ({ "@type": "City", name: `${city.name}, Colorado` })),
        sameAs: [business.facebook, business.instagram, business.googleMaps],
        hasMap: business.googleMaps,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-720-527-4557",
          contactType: "customer service",
          areaServed: "US-CO",
          availableLanguage: ["English"],
        },
        paymentAccepted: "Visa, Mastercard, American Express, Apple Pay, Google Pay, Maestro, QuickBooks invoicing",
        knowsAbout: specialtySearches.map((item) => item.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Colorado plumbing and hydronic services",
          itemListElement: specialtySearches.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, url: `https://dkplumbingandheatingco.com${item.href}/` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://dkplumbingandheatingco.com/#website",
        url: "https://dkplumbingandheatingco.com/",
        name: business.name,
        publisher: { "@id": "https://dkplumbingandheatingco.com/#business" },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
