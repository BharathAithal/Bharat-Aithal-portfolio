import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications - Peer-Reviewed Papers, Books & Conference Proceedings',
  description:
    'Complete list of peer-reviewed journal papers, books, book chapters, and conference proceedings by Prof. Bharath Haridas Aithal in Urban Remote Sensing, GIS, Land Use Modeling, and Disaster Resilience.',
  keywords: [
    'Prof. Bharath Haridas Aithal publications',
    'Bharath Aithal research papers',
    'Urban remote sensing publications',
    'Land use land cover papers',
    'Cellular automata modeling papers',
    'Urban flood resilience research',
    'Geospatial AI publications',
    'Energy and Urban Research Group papers',
    'IIT Kharagpur publications',
    'IISc research publications',
    'Google Scholar Bharath Aithal',
    'Scopus Bharath Aithal',
    'ResearchGate Bharath Aithal'
  ],
  alternates: {
    canonical: '/publications',
  },
  openGraph: {
    title: 'Publications | Prof. Bharath Haridas Aithal - IIT Kharagpur',
    description:
      'Scientific publications, books, and proceedings in Urban Remote Sensing, Satellite Data Analytics, and Environmental Planning.',
    url: '/publications',
  },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
