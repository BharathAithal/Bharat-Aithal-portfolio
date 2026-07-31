'use client';

import { useState, type ReactNode } from 'react';

type Activity = {
    title: string;
    context: string;
    date?: string;
    role?: string;
};

type PopularArticle = {
    text: string;
};

// ——————————————————————————————————————
// 1. Keynote Addresses & Sessions Chaired (12 items)
// ——————————————————————————————————————
const conferenceRoles: Activity[] = [
    {
        title: '"Urbanisation in India: Through Technology Lenses"',
        context: 'ICWEES 2025, NIT Puducherry, India',
        date: 'April 2025',
        role: 'Keynote Address',
    },
    {
        title: '"Geospatial data and its Challenges"',
        context: "LAKE 2024, Alva's Educational Institute, India",
        date: 'November 2024',
        role: 'Keynote Address',
    },
    {
        title: '"TH2.R11: Large-Scale Earth Observation Data Management and Feature Extraction from Remote Sensing Images"',
        context: 'IEEE IGARSS 2023, Pasadena, USA',
        role: 'Session Chaired',
    },
    {
        title: '"Development Model Simulation and Visualisation — A process of developing a Decision Support System"',
        context: 'Lake 2020, Indian Institute of Science, Bangalore, India',
        date: '30 December 2020',
        role: 'Keynote Address',
    },
    {
        title: '"Modelling and development of Urban corridors in India"',
        context: 'APN Indo China workshop, Chongqing, China',
        date: '10 May 2017',
        role: 'Featured Address',
    },
    {
        title: '"Vision towards development of an Urban observatory – IIT Kharagpur"',
        context: "Lake 2016, Alva's College, Moodabidri, Karnataka, India",
        date: '29 December 2016',
        role: 'Keynote Address',
    },
    {
        title: 'Science and Education in Innovit 20xv',
        context: 'Sri Aurobindo College for Women, Bangalore, India',
        date: '1 September 2015',
        role: 'Chief Guest',
    },
    {
        title: '"Technology and Nature" — insight into urban world using Space Technologies',
        context:
            '2nd National Conference on Recent Advances in Computer Sciences (NCRACS-2015), Sri Krishna College of Engineering and Technology, Coimbatore, India',
        date: '16 April 2015',
        role: 'Keynote Address',
    },
    {
        title: 'Theme 2: Research advances in computer technology',
        context:
            '2nd National Conference on Recent Advances in Computer Sciences (NCRACS-2015), Sri Krishna College of Engineering and Technology, Coimbatore, India',
        role: 'Session Chaired',
    },
    {
        title: '"Modelling and Geo-visualisation of Urban Growth"',
        context: 'Lake 2014, Sirsi, Karnataka, India',
        date: '15 November 2014',
        role: 'Keynote Address',
    },
    {
        title: 'Theme: Urban Dynamics',
        context:
            'Lake 2014, Conference on Conservation and Sustainable Management of Wetland Ecosystems in Western Ghats, Parisara Auditorium, Swarnavalli, Sirsi, Uttara Kannada, Karnataka, India',
        role: 'Session Chaired',
    },
    {
        title:
            'Theme 13: Open-source GIS, applications of Geo informatics in conservation and management',
        context:
            'CiSTUP Seminar Hall, Lake 2010: Wetlands, Biodiversity and Climate Change, Satish Dhawan Auditorium, Indian Institute of Science, Bangalore',
        date: '23 December 2010',
        role: 'Session Chaired',
    },
];

// ——————————————————————————————————————
// 2. Invited / Guest Lectures (40 items)
// ——————————————————————————————————————
const invitedLectures: Activity[] = [
    {
        title: '"Fusion of multi resolution data for urban sprawl analysis"',
        context:
            'Open-Source GIS in India Discussion Meeting, Centre for Infrastructure, Sustainable Transport and Urban Planning, Indian Institute of Science, Bangalore, India',
        date: '16 November 2009',
    },
    {
        title: '"Urbanization and Sprawl"',
        context:
            "Student's Symposium, Centre for Sustainable Technologies, Indian Institute of Science, Bangalore, India",
        date: '24 November 2010',
    },
    {
        title:
            '"Geospatial Data Analysis: Techniques and Tools for Resource Management"',
        context:
            'IISc-Microsoft Workshop, KSCST Seminar Hall, Indian Institute of Science, Bangalore, India',
        date: '9 February 2009',
    },
    {
        title: '"Understanding urban dynamics through Landscape indices"',
        context:
            'CES In-house Symposium, New Biological Science Auditorium, Indian Institute of Science, Bangalore',
        date: '2–3 November 2012',
    },
    {
        title: '"Environment modeling and simulation through FOSS"',
        context: 'Environmental Simulation and Modeling session, NCAR 2010, Hyderabad, India',
        date: '2010',
    },
    {
        title: 'Lectures on Digital Image pre-processing, Satellite data, Remote sensing',
        context:
            '"Remote Sensing & GIS", Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '17–21 September 2010',
    },
    {
        title: 'Lectures on Environmental Impact Assessment and EIA documentation and process',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '23–28 December 2010',
    },
    {
        title:
            'Lectures on Environmental Management System standards, Environmental Management techniques',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '23–28 December 2011',
    },
    {
        title: 'Lectures on Introduction to GRASS, Introduction to Image fusion',
        context:
            '"Free and Open Source Software" in FOSS4G, Centre for Infrastructure, Transportation and Urban Planning, Indian Institute of Science, Bangalore, India',
        date: '1–5 May 2011',
    },
    {
        title: 'Lectures on Life cycle assessment, Environmental Management System standards',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August–December 2012',
    },
    {
        title: '"Urbanisation, Urban sprawl quantification"',
        context: 'JAYAM College of Engineering, Dharmapuri, Tamil Nadu, India',
        date: '26–28 June 2012',
    },
    {
        title:
            '"A Bird eye view into remote sensing, image processing and using GRASS"',
        context: 'KSCA, Bangalore, India',
        date: '3 November 2012',
    },
    {
        title: 'Lectures on Life cycle assessment, Environmental Management System standards',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August–December 2013',
    },
    {
        title:
            '"Introduction and applications of Remote sensing and Image processing"',
        context: 'Civil Department, Karunya University, Coimbatore, India',
        date: '10–13 January 2013',
    },
    {
        title:
            'Lectures on Introduction to Remote Sensing, free and open source software (GRASS, QGIS)',
        context:
            'Workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools", Indian Institute of Science, Bangalore, India',
        date: '24–28 February 2014',
    },
    {
        title: 'Lectures on "Understanding and reading maps"',
        context:
            'Workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools", Indian Institute of Science, Bangalore, India',
        date: '25 February 2014',
    },
    {
        title: 'Lectures on "Digital Images, Processing and application"',
        context:
            'Workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools", Indian Institute of Science, Bangalore, India',
        date: '27 February 2014',
    },
    {
        title: 'Lectures on "Mapping of Earth Features"',
        context:
            'Workshop on "Water & Environment — Interactive Session with School Teachers", New Bioscience Building, Indian Institute of Science, Bangalore, India',
        date: '15 February 2014',
    },
    {
        title: '"Urban revolution and GHG footprint in India"',
        context:
            'Workshop on "Urban Environmental Issues", organized by CiSTUP, Indian Institute of Science, Bangalore',
        date: '27–28 February 2015',
    },
    {
        title:
            'Lectures on Life cycle assessment, Environmental design',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August–December 2015',
    },
    {
        title: '"Smart cities and Unplanned urbanization"',
        context: 'Civil Engineering, IIT Kanpur, Invited Guest Lecture',
        date: '23 November 2015',
    },
    {
        title: '"Smart cities — Urbanisation, consequence and Mitigation"',
        context:
            'Ranbir and Chitra Gupta School of Infrastructure Design and Management, IIT Kharagpur, Invited Lecture',
        date: '21 December 2015',
    },
    {
        title:
            'UK-India Joint Network on Sustainable Cities and Urbanization in India — Urban Observatories for Enhancing the Quality of Urban Life in India',
        context: 'UK-India Joint Network on Sustainable Cities and Urbanization in India',
        date: 'September 2016',
    },
    {
        title: '"Urban Transformation and Environmental Impact"',
        context:
            'Indian Institute of Science, Bangalore, Invited Guest Lecture in Environmental Management 2019',
        date: 'December 2019',
    },
    {
        title:
            '"Geographic Information System and Mapping"',
        context:
            'Indian Institute of Science, Bangalore, Invited Lecture in Green Skill Development Program by Ministry of Environment and Forest Under ENVIS program',
        date: 'January 2020',
    },
    {
        title: 'Lectures on Advanced Geoinformatics',
        context:
            'MS. Ramaiah Institute of Technology, Bangalore, Invited Lecture in one week FDP on Advanced Surveying and Geoinformatics',
        date: '24–29 August 2020',
    },
    {
        title:
            'Lectures on Environmental Management System standards, Environmental Management techniques',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August and December 15–20, 2021',
    },
    {
        title:
            'Lectures on Environmental Management System standards, Life Cycle Assessment',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August 15–20, 2022',
    },
    {
        title: '"Coastal Flood Resilience through Geoinformatics"',
        context:
            'University of Allahabad, Prayagraj, Uttar Pradesh — Lecture in three days workshop on Satellite Earth Observation and Artificial Intelligence Role in Development of Disaster Resilient Infrastructure (EOAIDRI)',
        date: 'November 2022',
    },
    {
        title:
            'Geospatial applications in Urban remote sensing using data science',
        context:
            'National Institute of Engineering, Mysore, Karnataka — Lecture in five days online summer school on "New Horizons in Remote Sensing: Basics and Beyond"',
        date: '8–12 August 2023',
    },
    {
        title:
            'Lectures on Environmental Management System standards, Life Cycle Assessment',
        context:
            '"Environmental Management" Internet Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'August 15–20, 2023',
    },
    {
        title:
            '"Geoinformatics in Urban and Environmental planning — Applications and assessments"',
        context:
            '"Advances in Landslide Risk Assessment & Mitigation," funded by DRDO, DST, GoI., JSS Academy of Technical Education, Bangalore',
        date: '12–13 September 2023',
    },
    {
        title: '"Urban geoinformatics for SDG\'s"',
        context:
            "World GIS Day, Alva's Institute of Engineering & Technology",
        date: '15 November 2023',
    },
    {
        title:
            '"Usage of Public Spaces and impact of Climate Change and worsening Air Quality on Young Children"',
        context:
            'Organised by ICLEI, Celebration Hall, Novotel Hotel, Guwahati',
        date: '28 November 2023',
    },
    {
        title: '"Data and Cities"',
        context:
            'Organised by SPA Foundation for Innovation and Research for Social Transformation',
        date: '19 March 2024',
    },
    {
        title:
            '"Geospatial intelligence can enhance urban governance and drive sustainable urban development"',
        context:
            'Invited talk and round table organised by Indian Institute of Technology Tirupati Navavishkar I-Hub Foundation (IITTNiF) and the National Institute of Urban Affairs (NIUA)',
        date: '5 April 2025',
    },
    {
        title:
            'Invited Lectures in "Advances and application of Remote Sensing technologies in Real life"',
        context:
            'Faculty Development Programme (FDP) on "AICE 2025: Advances in Intelligent Civil Engineering", Department of Civil Engineering, Madanapalle Institute of Technology & Science (MITS)',
        date: 'September 2025',
    },
    {
        title:
            'Lectures on Environmental Management System standards, Life Cycle Assessment',
        context:
            '"Environmental Management" Internet-Based Distance Education Courses, Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: 'September 2025',
    },
    {
        title: '"Urban growth — Lenses from the sky"',
        context:
            'Department of Geography, GeoUbva 2026, Varanasi, India',
        date: 'January 2026',
    },
    {
        title:
            '"Geospatial Analytics in Urban assessment"',
        context:
            'Two-Day National Workshop on Geospatial Data Analytics using Machine Learning, Department of CSE, BIT Mesra, Jharkhand, India',
        date: 'February 2026',
    },
];

// ——————————————————————————————————————
// 3. Courses Conducted (15 items)
// ——————————————————————————————————————
const coursesConducted: Activity[] = [
    {
        title:
            'GSDP 2019-20: Green Skill Development Programme: Valuation of Ecosystem Goods and Services',
        context: 'Technical resource faculty, Indian Institute of Science, Bangalore, India',
        date: '25 Feb – 10 Mar 2020',
    },
    {
        title:
            'GSDP 2019-20: Green Skill Development Programme: Valuation of Ecosystem Goods and Services',
        context: 'Technical resource faculty, Indian Institute of Science, Bangalore, India',
        date: '1–15 January 2020',
    },
    {
        title:
            'GIAN course on "Smart Urban Multimodal Transport Planning, Operations and Management"',
        context: 'With Prof. Brian Park, University of Virginia, USA. IIT Kharagpur, India',
        date: '8–12 July 2019',
    },
    {
        title:
            'AICTE workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools"',
        context: 'Technical resource faculty, Indian Institute of Science, Bangalore, India',
        date: '28–31 May 2019',
    },
    {
        title:
            'TEQUIP workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools"',
        context: 'Technical resource faculty, Indian Institute of Science, Bangalore, India',
        date: '28–31 May 2018',
    },
    {
        title:
            'AICTE workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools in Urban management"',
        context: 'Indian Institute of Technology Kharagpur, India',
        date: '28 Feb – 3 Mar 2019',
    },
    {
        title:
            'GIAN course on "Land Cover Land Use change and its Impacts on Climate"',
        context: 'With Prof. Atul Jain, University of Illinois, USA. IIT Kharagpur, India',
        date: '29 Oct – 2 Nov 2018',
    },
    {
        title: 'Workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools"',
        context: 'Technical resource faculty, Indian Institute of Science, Bangalore, India',
        date: '24–28 February 2014',
    },
    {
        title: '"Geoinformatics: An introduction"',
        context: 'IIITM-K, Interaction with M.Tech Students, Trivandrum, Kerala',
        date: '23–24 August 2013',
    },
    {
        title: '"Introduction to Remotely sensed data, GIS and processing"',
        context: 'Faculty, RVR & JC College of Engineering, Guntur, Andhra Pradesh, India',
        date: '2–5 June 2013',
    },
    {
        title: '"Use of GRASS in Image Analysis"',
        context: 'Technical resource person, IGTA 2012, IIT Bombay, Mumbai, India',
        date: '12–13 April 2012',
    },
    {
        title: '"Remote sensing and GIS"',
        context: 'Faculty, KITS College of Engineering, Guntur, Andhra Pradesh, India',
        date: '10–15 November 2012',
    },
    {
        title:
            'Free and Open Source Software for geo informatics',
        context:
            'Organised and technical resource person, CiSTUP, Indian Institute of Science, Bangalore — lectures on GRASS, Google Earth Engine, Remote sensing, Image Processing',
        date: '1–5 April 2015',
    },
    {
        title:
            'Biodiversity Awareness Workshop using Open Source Geospatial (FOSS4G) Tools',
        context: 'CCE Lecture Hall, Indian Institute of Science, Bangalore',
        date: '20 August 2015',
    },
    {
        title:
            'Free & Open Source Geospatial Technologies (FOSS4G) for Urban Environment Applications',
        context:
            'CCE Lecture Hall, Indian Institute of Science, Bangalore — lectures on Open source software, GRASS, Google Earth Engine, Remote sensing, Image Processing',
        date: '21–24 August 2015',
    },
];

// ——————————————————————————————————————
// 4. Hands-on Training / Workshops (10 items)
// ——————————————————————————————————————
const handsOnWorkshops: Activity[] = [
    {
        title:
            'Technical training Programme for Bihar Govt — Geospatial data overview, UAV\'s and analysis',
        context:
            'Organised by Department of Architecture and Planning, IIT Kharagpur',
        date: '12–17 February 2025',
    },
    {
        title:
            'Technical training Programme for Bihar Govt — Geospatial data overview and analysis',
        context:
            'Organised by Department of Architecture and Planning, IIT Kharagpur',
        date: '12–17 January 2025',
    },
    {
        title:
            'Workshop on "Big data for better governance — Promoting data-driven policy making and governance in West Bengal"',
        context: 'West Bengal',
        date: '28–29 November 2017',
    },
    {
        title: 'Preparatory workshop on Water Urbanism in Kolkata',
        context: 'With Columbia University, USA',
        date: 'October 2016',
    },
    {
        title: 'Using GRASS and QGIS',
        context:
            'Workshop on "Remote Sensing & GIS", Centre for Continuing Education, Indian Institute of Science, Bangalore, India',
        date: '17–21 September 2010',
    },
    {
        title: 'Using open source software',
        context: 'KITS College of Engineering, Guntur, Andhra Pradesh, India',
        date: '10–15 November 2012',
    },
    {
        title: 'Using open source software for environmental impact assessment',
        context: 'RVR & JC College of Engineering, Guntur, Andhra Pradesh, India',
        date: '2–5 June 2013',
    },
    {
        title: 'Using GRASS and QGIS',
        context:
            'Workshop on "Using Free and Open Source Geospatial (FOSS4G) Tools", Indian Institute of Science, Bangalore, India',
        date: '27 February 2014',
    },
    {
        title:
            'Image processing and applications in urban management using GRASS and R',
        context: 'CiSTUP, Indian Institute of Science, Bangalore',
        date: '1–5 April 2015',
    },
    {
        title:
            'Using GRASS, a quantum open source in urban application(s)',
        context:
            'Workshop on Free & Open Source Geospatial Technologies (FOSS4G) for Urban Environment Applications, Indian Institute of Science, Bangalore, India',
        date: '23 August 2015',
    },
];

// ——————————————————————————————————————
// 5. Popular Talks (2 items)
// ——————————————————————————————————————
const popularTalks: Activity[] = [
    {
        title: 'Tres(s)passing',
        context:
            'TV interview organized by Public TV on work based on assessment of number of trees using spatial data',
        date: '27 October 2014',
    },
    {
        title:
            'Science in education — mentoring and attracting new talents in science',
        context: 'Program organized by All India Radio',
        date: '21 February 2015',
    },
];

// ——————————————————————————————————————
// 6. Articles in Popular Communications (3 items)
// ——————————————————————————————————————
const popularArticles: PopularArticle[] = [
    {
        text: 'Ramachandra, T.V., Bharath, S., Vinay, S., Bharath, H.A., 2020. Mitigation of Carbon Footprint, Sustainable living, Yojana, 50(1), Pp 36–41',
    },
    {
        text: 'Jefferey M. Sellers, Bharath Aithal, Huang Jingnan, Uttam Kumar, Mingjun Peng, T. V. Ramachandra and Liu Yong, 2014. Mega-Regional Development and Environmental Change in China and India, APN Science Bulletin, Issue 4, pp. 116–118, UIESTF',
    },
    {
        text: 'Ramachandra, T.V., Bharath, H.A., 2014. Geo-visualisation of Urbanisation in Greater Bangalore, Geospatial world — India geospatial digest, September 2014 issue.',
    },
];

// ——————————————————————————————————————
// 7. Conferences / Symposium / Virtual Webinar Series Organized (16 items)
// ——————————————————————————————————————
const organizedConferences: Activity[] = [
    {
        title: 'Lake 2010: Wetlands, Biodiversity and Climate Change',
        context: 'Main organiser: Indian Institute of Science',
        date: '22–24 December 2010',
    },
    {
        title: 'Lake 2012: Conservation and Management of Wetland Ecosystems',
        context: 'Main organiser: Indian Institute of Science',
        date: '6–8 November 2012',
    },
    {
        title:
            'Lake 2014: Conservation and Sustainable Management of Wetland Ecosystems in Western Ghats',
        context: 'Main organiser: Indian Institute of Science',
        date: '13–15 November 2014',
    },
    {
        title:
            'International Symposium on Water Urbanism and Infrastructure Development in Eco-Sensitive Zones',
        context: 'Organised by RCGSIDM, IIT Kharagpur',
        date: '5–6 January 2017',
    },
    {
        title:
            'ICNDE 2018: International Conference on the Networked Digital Earth',
        context:
            'Organised by Indian Institute of Technology Kharagpur, India and Northeastern University, USA',
        date: '7–9 March 2018',
    },
    {
        title:
            'Lake 2018: Conference on Conservation and Sustainable Management of Riverine Ecosystems',
        context: 'Main organiser: Indian Institute of Science',
        date: '22–25 November 2018',
    },
    {
        title:
            'Symposium on Infrastructure Development and Management for Future Cities',
        context: 'Main organiser: Indian Institute of Technology Kharagpur',
        date: '17–18 April 2019',
    },
    {
        title:
            'Lake 2020: Conference on Ecosystem Structure, Function, Goods and Services',
        context: 'Main organiser: Indian Institute of Science',
    },
    {
        title:
            'SPARC 2021: Shared urban mobility systems — Virtual webinar series',
        context: 'Virtual webinar series',
        date: 'December 2021',
    },
    {
        title:
            'Lake 2022: Conservation of Wetlands — Ecosystem-based Adaptation of Climate Change',
        context: 'Main organizer: Indian Institute of Science',
        date: '28–30 December 2022',
    },
    {
        title:
            'GISTAM 2023, 9th International Conference on Geographical Information Systems Theory, Applications and Management',
        context: 'Angers, France',
    },
    {
        title:
            'IBSR 2023: Annual Conference on Infrastructure and Built Environment: Towards Sustainable and Resilient Societies',
        context: 'Main organiser: Indian Institute of Technology Kharagpur',
        date: '2–4 February 2023',
    },
    {
        title:
            'IBSR 2024: Annual Conference on Infrastructure and Built Environment: Towards Sustainable and Resilient Societies',
        context: 'Main organiser: Indian Institute of Technology Kharagpur',
        date: '7–9 March 2024',
    },
    {
        title:
            'GISTAM 2024, 10th International Conference on Geographical Information Systems Theory, Applications and Management',
        context: 'Angers, France',
    },
    {
        title:
            'Geoprocessing 2024, The Sixteenth International Conference on Advances in Satellite and Space Communications',
        context: 'Technical Program Committee Member, Spain',
    },
    {
        title:
            'Geoprocessing 2025 & SPACOMM 2025, The Seventeenth International Conference on Advances in Satellite and Space Communications',
        context: 'Technical Program Committee, Spain',
    },
];

// ——————————————————————————————————————
// Accordion component
// ——————————————————————————————————————
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
            {activities.map((activity, idx) => (
                <li
                    key={`${activity.title}-${idx}`}
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

function NumberedList({ items }: { items: PopularArticle[] }) {
    return (
        <ol className="space-y-4">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className="flex gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/80 hover:shadow-sm"
                >
                    <span className="mt-0.5 shrink-0 text-xs font-semibold tracking-[0.14em] text-sky-700 w-6">
                        {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-7 text-slate-800">{item.text}</p>
                </li>
            ))}
        </ol>
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
                            environmental management and open geospatial technologies
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
                        eyebrow="Popular Communications"
                        title="Articles in Popular Communications"
                    >
                        <NumberedList items={popularArticles} />
                    </AccordionSection>

                    <AccordionSection
                        eyebrow="Conferences Organized"
                        title="Conference Leadership"
                        description="Conferences, symposiums and virtual webinar series organized."
                    >
                        <BulletList activities={organizedConferences} />
                    </AccordionSection>
                </div>
            </section>
        </main>
    );
}
