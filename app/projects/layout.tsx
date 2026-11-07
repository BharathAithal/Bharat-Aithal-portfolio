import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsored Research & Consultancy Projects - Urban Analytics & Remote Sensing',
  description:
    'Funded research and consultancy projects by Prof. Bharath Haridas Aithal (IIT Kharagpur) supported by SERB, DST, NRDMS, SPARC, ISRO SAC, ISRO-IISc, ICLEI, KPMG, and IoE IIT Kharagpur in Smart Cities, Urban Flood Vulnerability, Digital Twin, and Spatial Data Infrastructure.',
  keywords: [
    'Prof. Bharath Haridas Aithal projects',
    'SERB Smart Cities project',
    'ISRO-IISc project',
    'Urban Infrastructure Quality And Flood Vulnerability',
    'Spatial Decision Support System',
    'Hyperspectral Remote Sensing Project',
    'Urban transport emissions model SPARC',
    'Assam Skill University KPMG',
    'ISRO SAC funded project',
    'Digital Twin platform IIT Kharagpur',
    'Energy and Urban Research Group projects',
    'IIT Kharagpur sponsored research',
    'DST Government of India projects'
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Research Projects | Prof. Bharath Haridas Aithal - EURG IIT Kharagpur',
    description:
      'Sponsored research projects and consultancy in urban infrastructure, flood vulnerability, and spatial analytics.',
    url: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
