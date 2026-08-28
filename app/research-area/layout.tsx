import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Areas - Urban Data Mining, ML/DL, Satellite Data Analysis & Disaster Management',
  description:
    'Research areas of Prof. Bharath Haridas Aithal (IIT Kharagpur, EURG): Urban Data Mining, Pattern Recognition, Urban Heat Island (SUHI), Machine Learning & Deep Learning in Land Use Modelling, Hyperspectral Data, UAV Imagery, and Disaster Resilience.',
  keywords: [
    'Urban Data Mining',
    'Urban Pattern Recognition',
    'Urban Heat Island Analysis',
    'Machine Learning in Urban Land Use Modelling',
    'Intelligent Automatic Urban Mapping and Climate Change',
    'SUHI',
    'Feature Extraction',
    'Analysis of UAV Imagery',
    'Night Time Urban Data Analysis',
    'Hyperspectral Urban Data Mining',
    'Environmental Analysis and Management',
    'ML/DL Application in Urban Resilience',
    'Disaster Management',
    'Urban Floods',
    'Satellite data analysis',
    'Urbanisation',
    'Land use land cover',
    'LULC',
    'Cellular Automata',
    'EURG',
    'IIT Kharagpur',
    'IISc'
  ],
  alternates: {
    canonical: '/research-area',
  },
  openGraph: {
    title: 'Research Areas | Energy and Urban Research Group - IIT Kharagpur',
    description:
      'Explore core research thrusts: Urban Data Mining, Geospatial AI, Satellite Data Analysis, and Disaster Resilience by Prof. Bharath H Aithal.',
    url: '/research-area',
  },
};

export default function ResearchAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
