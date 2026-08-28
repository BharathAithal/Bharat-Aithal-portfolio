import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NPTEL SWAYAM Courses, Keynotes & Training Programs',
  description:
    'NPTEL SWAYAM courses, international keynote addresses, conference sessions chaired (IEEE IGARSS, Lake Conferences), and specialized training programs conducted by Prof. Bharath Haridas Aithal (IIT Kharagpur).',
  keywords: [
    'NPTEL SWAYAM course Bharath Aithal',
    'Urban Remote Sensing NPTEL',
    'Prof. Bharath Haridas Aithal keynotes',
    'IEEE IGARSS',
    'Lake Conference IISc',
    'Geospatial data training',
    'Urbanisation in India Through Technology Lenses',
    'IIT Kharagpur training programs',
    'Earth Observation data management'
  ],
  alternates: {
    canonical: '/talks-and-training-program',
  },
  openGraph: {
    title: 'Talks, NPTEL Courses & Training | Prof. Bharath Haridas Aithal',
    description:
      'Keynote addresses, NPTEL SWAYAM online courses, and academic workshops in Geospatial AI, Remote Sensing, and Urban Modelling.',
    url: '/talks-and-training-program',
  },
};

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
