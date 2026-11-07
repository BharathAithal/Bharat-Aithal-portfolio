import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Energy and Urban Research Group (EURG) - Members, PhD Scholars & Thesis Titles',
  description:
    'Research team led by Prof. Bharath Haridas Aithal at IIT Kharagpur (RCGSIDM). Features doctoral scholars, PhD thesis titles in urban flood modeling, land use modeling, satellite data analysis, deep learning, and post-doctoral researchers.',
  keywords: [
    'Energy and Urban Research Group',
    'EURG',
    'EURG IIT Kharagpur',
    'Prof. Bharath Haridas Aithal students',
    'Bharath Aithal PhD scholars',
    'Tanaya Sarmah',
    'Chandan M C',
    'Prakash P S',
    'Nimish Gupta',
    'Aishwarya Narendr',
    'Ram Thilak',
    'Madhumita Dey',
    'Aniruddha Khatua',
    'Anita Gautam',
    'Anurag Aman Kaushal',
    'Rajesh Singh Rana',
    'Apratim Bhattacharya',
    'Sukanya Mukherjee',
    'Neetu Yadav',
    'Ayush Ranjan',
    'Dr. Vinay S',
    'Prioritizing Critical Infrastructures for Urban Flood-Prone Areas',
    'Urban Land Use Modelling Spatial Decision Support System',
    'Urban Structure Extraction Using Soft Computing',
    'Estimating and Forecasting Land Surface Temperature',
    'Flood Resilient Scenario Modelling FReSMO',
    'Deep Learning Land Use and Transportation Model',
    'Urban Remote Sensing PhD Thesis',
    'IIT Kharagpur research group',
    'IISc urban research'
  ],
  alternates: {
    canonical: '/research-group',
  },
  openGraph: {
    title: 'Energy and Urban Research Group (EURG) | IIT Kharagpur',
    description:
      'Explore the research scholars, PhD dissertations, and research focus of the Energy and Urban Research Group led by Prof. Bharath Haridas Aithal at IIT Kharagpur.',
    url: '/research-group',
  },
};

export default function ResearchGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
