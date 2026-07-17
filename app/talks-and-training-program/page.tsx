'use client';

import { useState, type ReactNode } from 'react';

type Activity = {
    title: string;
    context: string;
    date?: string;
    role?: string;
};

const conferenceRoles: Activity[] = [
    {
        title: 'Modelling and Development of Urban Corridors in India',
        context: 'APN Indo-China Workshop, Chongqing, China',
        date: '10 May 2017',
        role: 'Featured Address',
    },
    {
        title: 'Vision Towards Development of an Urban Observatory - IIT Kharagpur',
        context: "Lake 2016, Alva's College, Moodabidri, Karnataka, India",
        date: '29 December 2016',
        role: 'Keynote Address',
    },
    {
        title: 'Technology and Nature: Insight into the Urban World Using Space Technologies',
        context:
            '2nd National Conference on Recent Advances in Computer Sciences (NCRACS-2015), Sri Krishna College of Engineering and Technology, Coimbatore, India',
        date: '16 April 2015',
        role: 'Keynote Address',
    },
    {
        title: 'Modelling and Geo-visualisation of Urban Growth',
        context: 'Lake 2014, Sirsi, Karnataka, India',
        date: '15 November 2014',
        role: 'Keynote Address',
    },
    {
        title: 'Research Advances in Computer Technology',
        context:
            'Theme 2, 2nd National Conference on Recent Advances in Computer Sciences (NCRACS-2015), Sri Krishna College of Engineering and Technology, Coimbatore, India',
        role: 'Session Chaired',
    },
    {
        title: 'Urban Dynamics',
        context:
            'Lake 2014: Conference on Conservation and Sustainable Management of Wetland Ecosystems in Western Ghats, Parisara Auditorium, Swarnavalli, Sirsi, Uttara Kannada, Karnataka, India',
        role: 'Session Chaired',
    },
    {
        title: 'Open Source GIS: Applications of Geoinformatics in Conservation and Management',
        context:
            'Theme 13, Lake 2010: Wetlands, Biodiversity and Climate Change, CiSTUP Seminar Hall and Satish Dhawan Auditorium, Indian Institute of Science, Bangalore, India',
        date: '23 December 2010',
        role: 'Session Chaired',
    },
];

const invitedLectures: Activity[] = [
    {
        title: 'Fusion of Multi-resolution Data for Urban Sprawl Analysis',
        context:
            'Open Source GIS in India Discussion Meeting, Centre for Infrastructure, Sustainable Transport and Urban Planning, Indian Institute of Science, Bangalore, India',
        date: '16 November 2009',
    },
    {
        title: 'Urbanization and Sprawl',
        context:
            "Student's Symposium, Centre for Sustainable Technologies, Indian Institute of Science, Bangalore, India",
        date: '24 November 2010',
    },
    {
        title: 'Geospatial Data Analysis: Techniques and Tools for Resource Management',
        context:
            'IISc-Microsoft Workshop, KSCST Seminar Hall, Indian Institute of Science, Bangalore, India',
        date: '9 February 2009',
    },
    {
        title: 'Understanding Urban Dynamics Through Landscape Indices',
        context:
            'CES In-house Symposium, New Biological Science Auditorium, Indian Institute of Science, Bangalore, India',
        date: '2-3 November 2012',
    },
    {
        title: 'Environment Modeling and Simulation Through FOSS',
        context: 'Environmental Simulation and Modeling session, NCAR 2010, Hyderabad, India',
        date: '2010',
    },
    {
        title: 'Digital Image Pre-processing, Satellite Data and Remote Sensing',
        context:
            'Remote Sensing & GIS, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '17-21 September 2010',
    },
    {
        title: 'Environmental Impact Assessment: Documentation and Process',
        context:
            'Environmental Management, Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '23-28 December 2010',
    },
    {
        title: 'Environmental Management System Standards and Management Techniques',
        context:
            'Environmental Management, Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '23-28 December 2011',
    },
    {
        title: 'Introduction to GRASS and Image Fusion',
        context:
            'Free and Open Source Software in FOSS4G, Centre for Infrastructure, Transportation and Urban Planning, Indian Institute of Science, Bangalore, India',
        date: '1-5 May 2011',
    },
    {
        title: 'Life Cycle Assessment and Environmental Management System Standards',
        context:
            'Environmental Management, Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August-December 2012',
    },
    {
        title: 'Urbanisation and Urban Sprawl Quantification',
        context: 'JAYAM College of Engineering, Dharmapuri, Tamil Nadu, India',
        date: '26-28 June 2012',
    },
    {
        title: "A Bird's-eye View into Remote Sensing, Image Processing and Using GRASS",
        context: 'KSCA, Bangalore, India',
        date: '3 November 2012',
    },
    {
        title: 'Life Cycle Assessment and Environmental Management System Standards',
        context:
            'Environmental Management, Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August-December 2013',
    },
    {
        title: 'Introduction and Applications of Remote Sensing and Image Processing',
        context: 'Department of Civil Engineering, Karunya University, Coimbatore, India',
        date: '10-13 January 2013',
    },
    {
        title: 'Introduction to Remote Sensing and Free and Open Source Software: GRASS and QGIS',
        context:
            'Using Free and Open Source Geospatial (FOSS4G) Tools Workshop, Indian Institute of Science, Bangalore, India',
        date: '28 February 2014',
    },
    {
        title: 'Understanding and Reading Maps',
        context:
            'Using Free and Open Source Geospatial (FOSS4G) Tools Workshop, Indian Institute of Science, Bangalore, India',
        date: '25 February 2014',
    },
    {
        title: 'Digital Images, Processing and Application',
        context:
            'Using Free and Open Source Geospatial (FOSS4G) Tools Workshop, Indian Institute of Science, Bangalore, India',
        date: '27 February 2014',
    },
    {
        title: 'Mapping of Earth Features',
        context:
            'Water & Environment - Interactive Session with School Teachers, New Bioscience Building, Indian Institute of Science, Bangalore, India',
        date: '15 February 2014',
    },
    {
        title: 'Urban Revolution and GHG Footprint in India',
        context:
            'Urban Environmental Issues Workshop, CiSTUP, Indian Institute of Science, Bangalore, India',
        date: '27-28 February 2015',
    },
    {
        title: 'Life Cycle Assessment and Environmental Design',
        context:
            'Environmental Management, Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August-December 2015',
    },
    {
        title: 'Smart Cities and Unplanned Urbanization',
        context: 'Civil Engineering, IIT Kanpur, Invited Guest Lecture',
        date: '23 November 2015',
    },
    {
        title: 'Smart Cities: Urbanisation, Consequence and Mitigation',
        context:
            'Ranbir and Chitra Gupta School of Infrastructure Design and Management, IIT Kharagpur, Invited Lecture',
        date: '21 December 2015',
    },
    {
        title: 'Urban Observatories for Enhancing the Quality of Urban Life in India',
        context: 'UK-India Joint Network on Sustainable Cities and Urbanization in India',
        date: 'September 2016',
    },
];

const coursesConducted: Activity[] = [
    {
        title: 'Using Free and Open Source Geospatial (FOSS4G) Tools',
        context:
            'Technical resource faculty, Indian Institute of Science, Bangalore, India',
        date: '24-28 February 2014',
    },
    {
        title: 'Geoinformatics: An Introduction',
        context: 'Interaction with M.Tech students, IIITM-K, Trivandrum, Kerala, India',
        date: '23-24 August 2013',
    },
    {
        title: 'Introduction to Remotely Sensed Data, GIS and Processing',
        context: 'Faculty, RVR & JC College of Engineering, Guntur, Andhra Pradesh, India',
        date: '2-5 June 2013',
    },
    {
        title: 'Use of GRASS in Image Analysis',
        context: 'Technical resource person, IGTA 2012, IIT Bombay, Mumbai, India',
        date: '12-13 April 2012',
    },
    {
        title: 'Remote Sensing and GIS',
        context: 'Faculty, KITS College of Engineering, Guntur, Andhra Pradesh, India',
        date: '10-15 November 2012',
    },
    {
        title: 'Free and Open Source Software for Geoinformatics',
        context:
            'Organiser and technical resource person, CiSTUP, Indian Institute of Science, Bangalore, India; lectures on GRASS, Google Earth Engine, remote sensing and image processing',
        date: '1-5 April 2015',
    },
    {
        title: 'Biodiversity Awareness Workshop Using Open Source Geospatial (FOSS4G) Tools',
        context: 'CCE Lecture Hall, Indian Institute of Science, Bangalore, India',
        date: '20 August 2015',
    },
    {
        title: 'Free & Open Source Geospatial Technologies for Urban Environment Applications',
        context:
            'CCE Lecture Hall, Indian Institute of Science, Bangalore, India; lectures on open source software, GRASS, Google Earth Engine, remote sensing and image processing',
        date: '21-24 August 2015',
    },
    {
        title: 'Science and Education in Innovit 20XV',
        context: 'Chief Guest, Sri Aurobindo College for Women, Bangalore, India',
        date: '1 September 2015',
    },
];

const handsOnWorkshops: Activity[] = [
    {
        title: 'Using GRASS and QGIS for Natural Resources Management through Free & Open Source Geospatial Technologies (FOSS4G)',
        context:
            'Indian Institute of Science, Bangalore, India',
        date: '9-13 April 2018',
    },
    {
        title: 'Big Data for Better Governance',
        context: 'Promoting data-driven policy making and governance in West Bengal',
        date: '28-29 November 2017',
    },
    {
        title: 'Preparatory Workshop on Water Urbanism in Kolkata',
        context: 'With Columbia University, USA',
        date: 'October 2016',
    },
    {
        title: 'Using GRASS and QGIS in Remote Sensing & GIS',
        context:
            'Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '17-21 September 2010',
    },
    {
        title: 'Using Open Source Software',
        context: 'KITS College of Engineering, Guntur, Andhra Pradesh, India',
        date: '10-15 November 2012',
    },
    {
        title: 'Using Open Source Software for Environmental Impact Assessment',
        context: 'RVR & JC College of Engineering, Guntur, Andhra Pradesh, India',
        date: '2-5 June 2013',
    },
    {
        title: 'Using GRASS and QGIS in FOSS4G Tools',
        context:
            'Using Free and Open Source Geospatial (FOSS4G) Tools Workshop, Indian Institute of Science, Bangalore, India',
        date: '27 February 2014',
    },
    {
        title: 'Image Processing and Applications in Urban Management Using GRASS and R',
        context: 'CiSTUP, Indian Institute of Science, Bangalore, India',
        date: '1-5 April 2015',
    },
    {
        title: 'Using GRASS in Urban Applications',
        context:
            'Free & Open Source Geospatial Technologies (FOSS4G) for Urban Environment Applications Workshop, Indian Institute of Science, Bangalore, India',
        date: '23 August 2015',
    },
];

const popularTalks: Activity[] = [
    {
        title: 'Tres(s)passing',
        context:
            'TV interview organized by Public TV on assessment of the number of trees using spatial data',
        date: '27 October 2014',
    },
    {
        title: 'Science in Education: Mentoring and Attracting New Talents in Science',
        context: 'Program organized by All India Radio',
        date: '21 February 2015',
    },
];

const organizedConferences: Activity[] = [
    {
        title: 'Lake 2010: Wetlands, Biodiversity and Climate Change',
        context: 'Conference organised',
        date: '22-24 December 2010',
    },
    {
        title: 'Lake 2012: Conservation and Management of Wetland Ecosystems',
        context: 'Conference organised',
        date: '6-8 November 2012',
    },
    {
        title: 'Lake 2014: Conservation and Sustainable Management of Wetland Ecosystems in Western Ghats',
        context: 'Conference organised',
        date: '13-15 November 2014',
    },
    {
        title: 'International Symposium on Water Urbanism and Infrastructure Development in Eco-Sensitive Zones',
        context: 'Organised by RCGSIDM, IIT Kharagpur',
        date: '5-6 January 2017',
    },
];

// ——————————————————————————————————
// Accordion component
// ——————————————————————————————————
function AccordionSection({
    eyebrow,
    title,
    description,
    children,
    defaultOpen = false,
}: {
    eyebrow: string;
    title: string;
    description?: string;
    children: ReactNode;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="polish-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5">
            <button
                onClick={() => setOpen((o) => !o)}
                className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-white/60"
                aria-expanded={open}
            >
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                        {eyebrow}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-1 text-sm text-slate-500">{description}</p>
                    )}
                </div>
                <svg
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div className="relative border-t border-slate-100 px-6 pb-6 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
}

function BulletList({ activities }: { activities: Activity[] }) {
    return (
        <ul className="space-y-4">
            {activities.map((activity) => (
                <li
                    key={`${activity.title}-${activity.date}`}
                    className="flex gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/80 hover:shadow-sm"
                >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                            <p className="font-semibold leading-7 text-slate-900">
                                {activity.title}
                            </p>
                            {activity.role && (
                                <span className="shrink-0 border border-sky-100 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-sky-700 rounded-full">
                                    {activity.role}
                                </span>
                            )}
                        </div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{activity.context}</p>
                        {activity.date && (
                            <p className="mt-1 text-xs font-medium text-slate-400">{activity.date}</p>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default function TalksAndTraining() {
    return (
        <main className="page-shell">
            <section className="page-hero">
                <div className="page-container py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-4xl animate-fade-in-up delay-100">
                        <p className="eyebrow-pill mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
                            Talks &amp; Training Programs
                        </p>
                        <h1
                            className="font-bold leading-[1.1] tracking-tight text-slate-950"
                            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
                        >
                            Sharing geospatial knowledge in classrooms and conferences
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Keynote addresses, invited lectures, hands-on training and
                            conference leadership focused on urban dynamics, remote sensing,
                            environmental management and open geospatial technologies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="page-container py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-300">
                <div className="space-y-4">
                    <AccordionSection
                        eyebrow="Conferences"
                        title="Keynote Addresses & Sessions Chaired"
                        description="Invited conference contributions and chaired thematic sessions in India and internationally."
                        defaultOpen
                    >
                        <BulletList activities={conferenceRoles} />
                    </AccordionSection>

                    <AccordionSection
                        eyebrow="Invited / Guest Lectures"
                        title="Academic Lectures & Invited Contributions"
                        description="Lectures delivered across universities, professional workshops and continuing education programs."
                    >
                        <BulletList activities={invitedLectures} />
                    </AccordionSection>

                    <AccordionSection
                        eyebrow="Courses Conducted"
                        title="Courses & Faculty Engagements"
                    >
                        <BulletList activities={coursesConducted} />
                    </AccordionSection>

                    <AccordionSection
                        eyebrow="Hands-on Training"
                        title="Training Programs & Workshops"
                    >
                        <BulletList activities={handsOnWorkshops} />
                    </AccordionSection>

                    <AccordionSection
                        eyebrow="Popular Talks"
                        title="Public Engagement"
                    >
                        <BulletList activities={popularTalks} />
                    </AccordionSection>

                    <AccordionSection
                        eyebrow="Conferences Organized"
                        title="Conference Leadership"
                    >
                        <BulletList activities={organizedConferences} />
                    </AccordionSection>
                </div>
            </section>
        </main>
    );
}
