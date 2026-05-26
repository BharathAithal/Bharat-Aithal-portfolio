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

const highlights = [
    { value: '07', label: 'Keynotes & Chaired Sessions' },
    { value: '23', label: 'Invited Lectures' },
    { value: '17', label: 'Courses & Workshops' },
    { value: '06', label: 'Outreach & Conferences' },
];

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="border-b border-slate-300 pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {title}
            </h2>
            {description && (
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
}

function ActivityList({ activities }: { activities: Activity[] }) {
    return (
        <ol className="divide-y divide-slate-200 border-b border-slate-300">
            {activities.map((activity, index) => (
                <li key={`${activity.title}-${activity.date}`} className="grid gap-3 py-5 sm:grid-cols-[2.6rem_1fr_auto] sm:gap-5">
                    <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                        <h3 className="font-semibold leading-7 text-slate-950">
                            {activity.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                            {activity.context}
                        </p>
                    </div>
                    {activity.date && (
                        <p className="text-sm font-medium leading-7 text-slate-500 sm:text-right">
                            {activity.date}
                        </p>
                    )}
                </li>
            ))}
        </ol>
    );
}

export default function TalksAndTraining() {
    return (
        <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_24rem] lg:px-8 lg:py-16">
                    <div className="max-w-4xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                            Talks & Training Programs
                        </p>
                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Sharing geospatial knowledge in classrooms and conferences
                        </h1>
                        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Keynote addresses, invited lectures, hands-on training and
                            conference leadership focused on urban dynamics, remote sensing,
                            environmental management and open geospatial technologies.
                        </p>
                    </div>

                    <aside className="border-t-2 border-slate-900 pt-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pl-8 lg:pt-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Program Overview
                        </p>
                        <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                            {highlights.map((item) => (
                                <div key={item.label} className="flex items-center justify-between gap-5 py-4">
                                    <dt className="text-sm leading-6 text-slate-600">{item.label}</dt>
                                    <dd className="shrink-0 text-lg font-semibold text-slate-950">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
                <SectionHeading
                    eyebrow="Conferences"
                    title="Keynote Addresses & Sessions Chaired"
                    description="Invited conference contributions and chaired thematic sessions in India and internationally."
                />
                <ol className="mt-7 grid gap-4 lg:grid-cols-2">
                    {conferenceRoles.map((activity, index) => (
                        <li
                            key={activity.title}
                            className="flex flex-col border border-slate-200 bg-white p-5 sm:p-6"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <p className="text-sm font-semibold tracking-[0.16em] text-sky-700">
                                    {String(index + 1).padStart(2, '0')}
                                </p>
                                <p className="border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">
                                    {activity.role}
                                </p>
                            </div>
                            <h3 className="mt-5 text-lg font-semibold leading-8 text-slate-950">
                                {activity.title}
                            </h3>
                            <p className="mt-3 grow text-sm leading-7 text-slate-600">
                                {activity.context}
                            </p>
                            {activity.date && (
                                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
                                    {activity.date}
                                </p>
                            )}
                        </li>
                    ))}
                </ol>

                <div className="mt-14">
                    <SectionHeading
                        eyebrow="Invited / Guest Lectures"
                        title="Academic Lectures & Invited Contributions"
                        description="Lectures delivered across universities, professional workshops and continuing education programs."
                    />
                    <ActivityList activities={invitedLectures} />
                </div>

                <div className="mt-14 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-2 lg:gap-14">
                    <section>
                        <SectionHeading
                            eyebrow="Courses Conducted"
                            title="Courses & Faculty Engagements"
                        />
                        <ActivityList activities={coursesConducted} />
                    </section>

                    <section>
                        <SectionHeading
                            eyebrow="Hands-on Training"
                            title="Training Programs & Workshops"
                            description="Using GRASS and QGIS for Natural Resources Management through Free & Open Source Geospatial Technologies (FOSS4G), Indian Institute of Science, Bangalore, India, 9-13 April 2018."
                        />
                        <ActivityList activities={handsOnWorkshops} />
                    </section>
                </div>

                <div className="mt-14 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                    <section>
                        <SectionHeading
                            eyebrow="Popular Talks"
                            title="Public Engagement"
                        />
                        <ActivityList activities={popularTalks} />
                    </section>

                    <section>
                        <SectionHeading
                            eyebrow="Conferences Organized"
                            title="Conference Leadership"
                        />
                        <ActivityList activities={organizedConferences} />
                    </section>
                </div>
            </section>
        </main>
    );
}
