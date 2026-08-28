import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Academic Profiles - IIT Kharagpur Office & Profiles',
  description:
    'Contact Prof. Bharath Haridas Aithal, Associate Professor at Ranbir and Chitra Gupta School of Infrastructure Design and Management (RCGSIDM), IIT Kharagpur. Access Google Scholar, ResearchGate, ORCID, and Scopus profiles.',
  keywords: [
    'Prof. Bharath Haridas Aithal contact',
    'Bharath Aithal email',
    'Bharath Aithal IIT Kharagpur office',
    'RCGSIDM IIT Kharagpur address',
    'Google Scholar Bharath Aithal',
    'ResearchGate Dr Bharath Aithal',
    'ORCID Bharath Aithal',
    'Scopus ID 55311646000',
    'Researcher ID Q-7182-2016'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Prof. Bharath Haridas Aithal | IIT Kharagpur',
    description:
      'Official contact information, academic identifiers (ORCID, Scopus, Google Scholar), and office location at IIT Kharagpur.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
