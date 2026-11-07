import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bharathhaithal.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prof. Bharath Haridas Aithal | Energy and Urban Research Group (EURG), IIT Kharagpur",
    template: "%s | Prof. Bharath H Aithal - IIT Kharagpur",
  },
  description:
    "Official academic website of Prof. Bharath Haridas Aithal (Associate Professor, IIT Kharagpur, IISc Alumnus). Research in Urbanisation, Land Use Land Cover (LULC), Satellite Data Analysis, Urban Flood & Disaster Management, Machine Learning, Deep Learning, Urban Analytics, and Energy and Urban Research Group (EURG).",
  keywords: [
    "Prof. Bharath Haridas Aithal",
    "Dr. Bharath H Aithal",
    "Bharath Aithal",
    "Bharath Aithal IIT Kharagpur",
    "Energy and Urban Research Group",
    "EURG",
    "EURG IIT Kharagpur",
    "IIT Kharagpur",
    "IITKGP",
    "IISc",
    "Indian Institute of Science",
    "Urban",
    "Urbanisation",
    "Land use land cover",
    "LULC",
    "Data mining",
    "Satellite data analysis",
    "Disaster management",
    "Urban flood",
    "Urban flood modeling",
    "Machine learning",
    "Deep learning",
    "Urban analytics",
    "Remote sensing",
    "GIS",
    "Cellular automata",
    "Urban growth modeling",
    "Smart cities",
    "Urban resilience",
    "Urban pattern recognition",
    "Urban heat island",
    "SUHI",
    "NPTEL SWAYAM course",
    "Ranbir and Chitra Gupta School of Infrastructure Design and Management",
    "RCGSIDM"
  ],
  authors: [{ name: "Prof. Bharath Haridas Aithal", url: siteUrl }],
  creator: "Prof. Bharath Haridas Aithal",
  publisher: "Energy and Urban Research Group (EURG), IIT Kharagpur",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Prof. Bharath Haridas Aithal | Energy and Urban Research Group, IIT Kharagpur",
    description:
      "Academic and research portal of Prof. Bharath Haridas Aithal. Specializing in Urban Remote Sensing, Geospatial AI, LULC Modeling, Disaster Management, and Smart Cities at IIT Kharagpur.",
    siteName: "Prof. Bharath H Aithal - EURG IIT Kharagpur",
    images: [
      {
        url: "/bharat.jpeg",
        width: 1222,
        height: 1287,
        alt: "Prof. Bharath Haridas Aithal - IIT Kharagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Bharath Haridas Aithal | IIT Kharagpur",
    description:
      "Urban Remote Sensing, Geospatial AI, Disaster Management, and Urban Analytics at Energy and Urban Research Group (EURG), IIT Kharagpur.",
    images: ["/bharat.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Prof. Bharath Haridas Aithal",
      alternateName: [
        "Dr. Bharath H Aithal",
        "Bharath Aithal",
        "B. H. Aithal",
        "Bharath Haridas Aithal"
      ],
      jobTitle: "Associate Professor",
      worksFor: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Kharagpur",
        alternateName: ["IIT Kharagpur", "IITKGP"],
        url: "https://www.iitkgp.ac.in",
        department: "Ranbir and Chitra Gupta School of Infrastructure Design and Management (RCGSIDM)",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Science",
        alternateName: ["IISc", "IISc Bangalore"],
        url: "https://iisc.ac.in",
      },
      affiliation: {
        "@type": "ResearchOrganization",
        name: "Energy and Urban Research Group (EURG)",
        alternateName: ["EURG", "EURG IIT Kharagpur"],
        url: `${siteUrl}/research-group`,
      },
      url: siteUrl,
      image: `${siteUrl}/bharat.jpeg`,
      sameAs: [
        "https://scholar.google.co.in/citations?user=j-trcFUAAAAJ&hl=en&oi=ao",
        "https://www.researchgate.net/profile/Dr_Bharath_Aithal",
        "https://orcid.org/0000-0002-4323-6254",
        "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_de28",
      ],
      knowsAbout: [
        "Urban Analytics",
        "Urbanisation",
        "Land Use Land Cover (LULC)",
        "Satellite Data Analysis",
        "Remote Sensing",
        "Geographic Information Systems (GIS)",
        "Urban Floods and Disaster Management",
        "Machine Learning",
        "Deep Learning",
        "Cellular Automata",
        "Urban Growth Modelling",
        "Urban Pattern Data Mining",
        "Urban Heat Island (UHI)",
        "Surface Urban Heat Island (SUHI)",
        "Urban Resilience",
        "Smart Cities",
        "Hyperspectral Remote Sensing"
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Prof. Bharath Haridas Aithal - Energy and Urban Research Group",
      description: "Research, Publications, PhD Thesis supervision, and Academic Portfolio of Prof. Bharath H Aithal at IIT Kharagpur.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
