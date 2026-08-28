import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Activities, Editorial Roles & Memberships',
  description:
    'Professional leadership, journal editorial boards, peer reviewing, academic committees, and institutional memberships of Prof. Bharath Haridas Aithal at IIT Kharagpur.',
  keywords: [
    'Prof. Bharath Haridas Aithal professional activities',
    'Journal reviewer remote sensing',
    'Editorial board member urban analytics',
    'IIT Kharagpur faculty committees',
    'RCGSIDM academic leadership',
    'IEEE Geospatial and Remote Sensing Society'
  ],
  alternates: {
    canonical: '/professional-activities',
  },
  openGraph: {
    title: 'Professional Activities | Prof. Bharath Haridas Aithal',
    description:
      'Editorial appointments, professional memberships, and academic service of Prof. Bharath Haridas Aithal.',
    url: '/professional-activities',
  },
};

export default function ProfessionalActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
